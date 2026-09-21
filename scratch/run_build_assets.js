const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--remote-debugging-port=9256',
  '--headless=new',
  '--user-data-dir=C:\\Users\\singh\\.gemini\\antigravity\\brain\\e0b77360-95d2-4fa4-962e-5ee55f3b60c9\\scratch\\chrome-builder',
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
    const target = JSON.parse(await httpPut('http://127.0.0.1:9256/json/new?http://localhost:3000/scratch/build_all_highres.html'));
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
    console.log('Waiting for asset builder to finish...');
    
    let isReady = false;
    for (let i = 0; i < 25; i++) {
      await sleep(1000);
      const evalRes = await send('Runtime.evaluate', { expression: 'window.__ALL_BUILT__ === true' });
      if (evalRes.result?.value === true) {
        isReady = true;
        break;
      }
    }

    if (!isReady) {
      console.error('Build timed out or encountered an error!');
      const status = await send('Runtime.evaluate', { expression: 'document.getElementById("status")?.textContent' });
      console.error('Status text:', status.result?.value);
      return;
    }

    console.log('Build completed! Extracting WebP assets...');
    for (const name of ['eatoggy', 'norozz', 'goindiacab', 'nobrokery']) {
      const res = await send('Runtime.evaluate', { expression: 'window.__ASSETS__.' + name });
      const dataUrl = res.result?.value;
      if (dataUrl) {
        const base64 = dataUrl.replace(/^data:image\/[a-z]+;base64,/, '');
        const outPath = 'c:/Users/singh/OneDrive/Desktop/Abhay/assets/work/' + name + '-screens.webp';
        fs.writeFileSync(outPath, Buffer.from(base64, 'base64'));
        console.log('Saved:', outPath, 'size:', fs.statSync(outPath).size);
      } else {
        console.error('Missing data for:', name);
      }
    }
    ws.close();
  } catch(e) { console.error(e); } finally { chrome.kill(); }
}, 1500);

