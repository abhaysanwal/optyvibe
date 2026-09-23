const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about-us/index.html',
  'service/index.html',
  'work/index.html'
];

const auditResults = {};

files.forEach(file => {
  const filePath = path.resolve(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    auditResults[file] = { error: 'File not found' };
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  // Extract Meta Description
  const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) || content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : null;

  // Extract Canonical
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;

  // Extract Robots
  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : null;

  // Extract H1s
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

  // Extract Images without alt or with alt
  const imgMatches = [...content.matchAll(/<img\s+([^>]+)>/gi)].map(m => {
    const srcMatch = m[1].match(/src=["']([^"']+)["']/i);
    const altMatch = m[1].match(/alt=["']([^"']*)["']/i);
    return {
      src: srcMatch ? srcMatch[1] : 'unknown',
      alt: altMatch ? altMatch[1] : null
    };
  });

  // Extract Internal Links
  const linkMatches = [...content.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
  const internalLinks = linkMatches.filter(l => !l.startsWith('http') && !l.startsWith('mailto:') && !l.startsWith('tel:') && !l.startsWith('javascript:'));

  // Extract Open Graph
  const ogTags = [...content.matchAll(/<meta\s+property=["'](og:[^"']+)["']\s+content=["']([^"']*)["']/gi)].map(m => ({ property: m[1], content: m[2] }));

  // Extract JSON-LD
  const jsonLd = [...content.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)].map(m => {
    try {
      return JSON.parse(m[1]);
    } catch (e) {
      return { error: 'Invalid JSON', raw: m[1] };
    }
  });

  // Check Demo Metrics
  const demoMetrics = [];
  const patterns = [/\b\+?\d+(\.\d+)?%\b/g, /\b\d+(\.\d+)?x\s*ROAS\b/gi, /\b99\.4%\b/g, /\b-38%\b/g, /\b\+28%\b/g, /\b\+48\.2%\b/g, /\b★+/g];
  patterns.forEach(p => {
    const matches = content.match(p);
    if (matches) {
      demoMetrics.push(...matches);
    }
  });

  auditResults[file] = {
    title,
    metaDesc,
    canonical,
    robots,
    h1Matches,
    imagesCount: imgMatches.length,
    images: imgMatches,
    internalLinks: [...new Set(internalLinks)],
    ogTagsCount: ogTags.length,
    jsonLdCount: jsonLd.length,
    jsonLd,
    demoMetricsFound: [...new Set(demoMetrics)]
  };
});

console.log(JSON.stringify(auditResults, null, 2));

