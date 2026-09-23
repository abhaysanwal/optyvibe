const fs = require('fs');

function getPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.toString('ascii', 1, 4) === 'PNG') {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height, size: buffer.length };
  }
  return { size: buffer.length };
}

['logo.png', 'logo-green.png', 'favicon.png'].forEach(f => {
  if (fs.existsSync(f)) {
    console.log(f, getPngDimensions(f));
  }
});

