const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const mimeTypes = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.webp': 'image/webp',
	'.svg': 'image/svg+xml',
	'.txt': 'text/plain',
	'.xml': 'application/xml',
	'.json': 'application/json'
};

const server = http.createServer((req, res) => {
	let reqPath = req.url.split('?')[0];
	if (reqPath.endsWith('/')) reqPath += 'index.html';
	
	let filePath = path.join(__dirname, '..', reqPath);
	if (!fs.existsSync(filePath)) {
		if (fs.existsSync(filePath + '.html')) {
			filePath = filePath + '.html';
		} else if (fs.existsSync(path.join(filePath, 'index.html'))) {
			filePath = path.join(filePath, 'index.html');
		}
	}

	if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
		const ext = path.extname(filePath).toLowerCase();
		const contentType = mimeTypes[ext] || 'application/octet-stream';
		res.writeHead(200, { 'Content-Type': contentType });
		res.end(fs.readFileSync(filePath));
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('404 Not Found: ' + reqPath);
	}
});

const PORT = 3016;
server.listen(PORT, async () => {
	console.log(`Test server running at http://localhost:${PORT}`);

	const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
	const chrome = spawn(chromePath, [
		'--headless=new',
		'--remote-debugging-port=9266',
		'--no-first-run',
		'--no-default-browser-check',
		'--user-data-dir=' + path.join(__dirname, 'chrome_seo_profile')
	]);

	await new Promise(r => setTimeout(r, 2000));

	try {
		const pagesToTest = [
			'/',
			'/about-us/',
			'/service/',
			'/work/'
		];

		const versionRes = await fetch('http://127.0.0.1:9266/json/version');
		const versionData = await versionRes.json();
		const wsUrl = versionData.webSocketDebuggerUrl;

		const ws = new WebSocket(wsUrl);
		await new Promise(r => ws.addEventListener('open', r, { once: true }));

		let msgId = 1;
		function send(method, params = {}) {
			return new Promise((resolve) => {
				const id = msgId++;
				const handler = (event) => {
					const msg = JSON.parse(event.data);
					if (msg.id === id) {
						ws.removeEventListener('message', handler);
						resolve(msg.result);
					}
				};
				ws.addEventListener('message', handler);
				ws.send(JSON.stringify({ id, method, params }));
			});
		}

		const target = await send('Target.createTarget', { url: 'about:blank' });
		const targetWsUrl = `ws://127.0.0.1:9266/devtools/page/${target.targetId}`;
		const pageWs = new WebSocket(targetWsUrl);
		await new Promise(r => pageWs.addEventListener('open', r, { once: true }));

		let pageMsgId = 1;
		function sendPage(method, params = {}) {
			return new Promise((resolve) => {
				const id = pageMsgId++;
				const handler = (event) => {
					const msg = JSON.parse(event.data);
					if (msg.id === id) {
						pageWs.removeEventListener('message', handler);
						resolve(msg.result);
					}
				};
				pageWs.addEventListener('message', handler);
				pageWs.send(JSON.stringify({ id, method, params }));
			});
		}

		await sendPage('Page.enable');
		await sendPage('Runtime.enable');

		const consoleErrors = [];
		pageWs.addEventListener('message', (event) => {
			const msg = JSON.parse(event.data);
			if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
				consoleErrors.push(msg.params.args.map(a => a.value || a.description).join(' '));
			}
			if (msg.method === 'Runtime.exceptionThrown') {
				consoleErrors.push(msg.params.exceptionDetails.text);
			}
		});

		for (const pageUrl of pagesToTest) {
			console.log(`\nTesting page: ${pageUrl}`);
			consoleErrors.length = 0;

			// Desktop
			await sendPage('Emulation.setDeviceMetricsOverride', {
				width: 1440,
				height: 900,
				deviceScaleFactor: 1,
				mobile: false
			});
			await sendPage('Page.navigate', { url: `http://localhost:${PORT}${pageUrl}` });
			await new Promise(r => setTimeout(r, 1500));

			const overflowDesktop = await sendPage('Runtime.evaluate', {
				expression: `document.documentElement.scrollWidth > window.innerWidth`
			});
			console.log(`  Desktop (1440px) overflow check: ${overflowDesktop.result.value ? '❌ OVERFLOW' : '✅ NO OVERFLOW'}`);

			// Mobile
			await sendPage('Emulation.setDeviceMetricsOverride', {
				width: 390,
				height: 844,
				deviceScaleFactor: 2,
				mobile: true
			});
			await sendPage('Page.navigate', { url: `http://localhost:${PORT}${pageUrl}` });
			await new Promise(r => setTimeout(r, 1500));

			const overflowMobile = await sendPage('Runtime.evaluate', {
				expression: `document.documentElement.scrollWidth > window.innerWidth`
			});
			console.log(`  Mobile (390px) overflow check: ${overflowMobile.result.value ? '❌ OVERFLOW' : '✅ NO OVERFLOW'}`);

			if (consoleErrors.length === 0) {
				console.log(`  ✅ 0 console errors on ${pageUrl}`);
			} else {
				console.log(`  ⚠️ Console errors on ${pageUrl}:`, consoleErrors);
			}
		}

		console.log('\n✅ All browser render tests finished successfully.');
		pageWs.close();
		ws.close();
	} catch (e) {
		console.error('Test error:', e);
	} finally {
		chrome.kill();
		server.close();
		process.exit(0);
	}
});

