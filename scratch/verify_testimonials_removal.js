const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 3012;
const ROOT = path.resolve(__dirname, '..');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(ROOT, decodeURIComponent(reqPath));
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
    '.json': 'application/json'
  };

  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, async () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = path.join(__dirname, 'chrome-verify-testimonials');
  const chrome = spawn(chromePath, [
    '--remote-debugging-port=9260',
    '--headless=new',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900'
  ]);

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  function httpPut(url) {
    return new Promise((resolve, reject) => {
      const req = http.request(url, { method: 'PUT' }, (res) => {
        let data = ''; res.on('data', chunk => data += chunk); res.on('end', () => resolve(data));
      });
      req.on('error', reject); req.end();
    });
  }

  await sleep(1500);

  try {
    const target = JSON.parse(await httpPut(`http://127.0.0.1:9260/json/new?http://127.0.0.1:${PORT}/`));
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    let id = 1;
    const pending = new Map();
    const consoleLogs = [];
    const errors = [];

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        pending.set(msgId, { resolve, reject });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await new Promise(r => ws.onopen = r);
    ws.onmessage = e => {
      const msg = JSON.parse(e.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        consoleLogs.push(msg.params);
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        errors.push(msg.params);
      }
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error); else resolve(msg.result);
      }
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('DOM.enable');

    // Viewport 1: Desktop 1440x900
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
    await sleep(2000);

    const domCheck = await send('Runtime.evaluate', {
      expression: `({
        hasTestimonialsId: !!document.getElementById('testimonials'),
        hasQuoteWrap: !!document.querySelector('.quote-wrap'),
        hasSliderActions: !!document.querySelector('.slider-actions'),
        aboutExists: !!document.getElementById('about'),
        contactExists: !!document.getElementById('contact'),
        aboutNextSiblingId: document.getElementById('about')?.nextElementSibling?.id,
        desktopOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
      })`,
      returnByValue: true
    });

    console.log('DOM check results:', JSON.stringify(domCheck.result.value, null, 2));

    // Scroll to #about and capture transition to #contact
    await send('Runtime.evaluate', {
      expression: `document.getElementById('about').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(800);

    let ss = await send('Page.captureScreenshot', { format: 'png' });
    const artifactsDir = 'C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9';
    fs.writeFileSync(path.join(artifactsDir, 'testimonials_removal_about_desktop.png'), Buffer.from(ss.data, 'base64'));
    console.log('Saved testimonials_removal_about_desktop.png');

    // Scroll slightly to show bottom of about and top of contact
    await send('Runtime.evaluate', {
      expression: `window.scrollBy(0, 500);`
    });
    await sleep(600);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactsDir, 'testimonials_removal_transition_desktop.png'), Buffer.from(ss.data, 'base64'));
    console.log('Saved testimonials_removal_transition_desktop.png');

    // Viewport 2: Mobile 390x844
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
    await sleep(1000);

    const mobileCheck = await send('Runtime.evaluate', {
      expression: `({
        mobileOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
      })`,
      returnByValue: true
    });
    console.log('Mobile check results:', JSON.stringify(mobileCheck.result.value, null, 2));

    await send('Runtime.evaluate', {
      expression: `document.getElementById('about').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(600);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactsDir, 'testimonials_removal_about_mobile.png'), Buffer.from(ss.data, 'base64'));
    console.log('Saved testimonials_removal_about_mobile.png');

    console.log('Errors caught:', errors);
    console.log('Console logs caught:', consoleLogs.length);

    ws.close();
  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    chrome.kill();
    server.close();
    process.exit(0);
  }
});

