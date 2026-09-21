const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--remote-debugging-port=9257',
  '--headless=new',
  '--user-data-dir=C:\\Users\\singh\\.gemini\\antigravity\\brain\\e0b77360-95d2-4fa4-962e-5ee55f3b60c9\\scratch\\chrome-verify-final',
  '--window-size=1920,1080'
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

setTimeout(async () => {
  try {
    const target = JSON.parse(await httpPut('http://127.0.0.1:9257/json/new?http://localhost:3000/work/'));
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    let id = 1; const pending = new Map();
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++; pending.set(msgId, { resolve, reject });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }
    await new Promise(r => ws.onopen = r);
    ws.onmessage = e => {
      const msg = JSON.parse(e.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error); else resolve(msg.result);
      }
    };
    await send('Page.enable');
    await send('DOM.enable');

    // 1. Desktop 1920 view of UI/UX section
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
    await sleep(2500);

    // Scroll to #uiux-showcase
    await send('Runtime.evaluate', {
      expression: `document.getElementById('uiux-showcase').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(1000);

    let ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9/scratch/verify_desktop_eatoggy.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved verify_desktop_eatoggy.png');

    // Scroll down to cards 2 and 3 (Norozz & Goindiacab)
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.uiux-norozz').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(800);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9/scratch/verify_desktop_norozz_cab.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved verify_desktop_norozz_cab.png');

    // Scroll down to card 4 (NoBrokery)
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.uiux-nobrokery').scrollIntoView({ behavior: 'instant', block: 'center' });`
    });
    await sleep(800);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9/scratch/verify_desktop_nobrokery.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved verify_desktop_nobrokery.png');

    // 2. Mobile Viewport (390x844 iPhone)
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
    await sleep(1000);

    // Check overflow
    const overflow = await send('Runtime.evaluate', {
      expression: `document.documentElement.scrollWidth > document.documentElement.clientWidth`
    });
    console.log('Mobile horizontal overflow:', overflow.result?.value);

    // Scroll to #uiux-showcase
    await send('Runtime.evaluate', {
      expression: `document.getElementById('uiux-showcase').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(800);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9/scratch/verify_mobile_eatoggy.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved verify_mobile_eatoggy.png');

    // Scroll to Norozz on mobile
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.uiux-norozz').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(800);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9/scratch/verify_mobile_norozz.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved verify_mobile_norozz.png');

    // Scroll to GoIndiaCab on mobile
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.uiux-goindiacab').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(800);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9/scratch/verify_mobile_goindiacab.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved verify_mobile_goindiacab.png');

    // Scroll to NoBrokery on mobile
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.uiux-nobrokery').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await sleep(800);
    ss = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/singh/.gemini/antigravity/brain/e0b77360-95d2-4fa4-962e-5ee55f3b60c9/scratch/verify_mobile_nobrokery.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved verify_mobile_nobrokery.png');

    ws.close();
  } catch(e) { console.error(e); } finally { chrome.kill(); }
}, 1500);

