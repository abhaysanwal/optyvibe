const fs = require('fs');
const path = require('path');

const pages = [
	{
		file: 'index.html',
		url: 'https://optyvibe.com/',
		expectedTitle: 'OPTYVIBE | Digital Growth Agency in Noida & Delhi NCR',
		expectedCanonical: 'https://optyvibe.com/',
		schemaType: 'Organization + ProfessionalService + WebSite'
	},
	{
		file: 'about-us/index.html',
		url: 'https://optyvibe.com/about-us/',
		expectedTitle: 'About OPTYVIBE | Digital Growth Agency in Noida',
		expectedCanonical: 'https://optyvibe.com/about-us/',
		schemaType: 'BreadcrumbList'
	},
	{
		file: 'service/index.html',
		url: 'https://optyvibe.com/service/',
		expectedTitle: 'Digital Marketing & Development Services | OPTYVIBE',
		expectedCanonical: 'https://optyvibe.com/service/',
		schemaType: 'BreadcrumbList'
	},
	{
		file: 'work/index.html',
		url: 'https://optyvibe.com/work/',
		expectedTitle: 'Our Work | Websites, E-commerce & UI/UX Projects | OPTYVIBE',
		expectedCanonical: 'https://optyvibe.com/work/',
		schemaType: 'BreadcrumbList'
	}
];

console.log('==================================================');
console.log('OPTYVIBE SEO AUDIT & VALIDATION REPORT');
console.log('==================================================\n');

let allPassed = true;

// 1. Robots.txt check
console.log('--- 1. ROBOTS.TXT CHECK ---');
if (fs.existsSync('robots.txt')) {
	const robots = fs.readFileSync('robots.txt', 'utf8');
	console.log('robots.txt exists:\n' + robots.trim());
	if (robots.includes('User-agent: *') && robots.includes('Allow: /') && robots.includes('Sitemap: https://optyvibe.com/sitemap.xml')) {
		console.log('✅ robots.txt is valid.\n');
	} else {
		console.error('❌ robots.txt content mismatch.');
		allPassed = false;
	}
} else {
	console.error('❌ robots.txt missing.');
	allPassed = false;
}

// 2. Sitemap.xml check
console.log('--- 2. SITEMAP.XML CHECK ---');
if (fs.existsSync('sitemap.xml')) {
	const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
	console.log('sitemap.xml exists. Length:', sitemap.length);
	const expectedUrls = [
		'https://optyvibe.com/',
		'https://optyvibe.com/service/',
		'https://optyvibe.com/work/',
		'https://optyvibe.com/about-us/'
	];
	for (const u of expectedUrls) {
		if (sitemap.includes(`<loc>${u}</loc>`)) {
			console.log(`✅ Sitemap contains ${u}`);
		} else {
			console.error(`❌ Sitemap missing ${u}`);
			allPassed = false;
		}
	}
	console.log('');
} else {
	console.error('❌ sitemap.xml missing.');
	allPassed = false;
}

// 3. Page-by-Page Audit
for (const p of pages) {
	console.log(`--- CHECKING: ${p.file} (${p.url}) ---`);
	const html = fs.readFileSync(p.file, 'utf8');

	// Title
	const titleMatch = html.match(/<title>(.*?)<\/title>/i);
	const title = titleMatch ? titleMatch[1] : null;
	console.log(`Title: "${title}"`);
	if (title === p.expectedTitle) {
		console.log('✅ Title match');
	} else {
		console.error(`❌ Title mismatch. Expected: "${p.expectedTitle}", Got: "${title}"`);
		allPassed = false;
	}

	// Canonical
	const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
	const canonical = canonMatch ? canonMatch[1] : null;
	console.log(`Canonical: "${canonical}"`);
	if (canonical === p.expectedCanonical) {
		console.log('✅ Canonical match');
	} else {
		console.error(`❌ Canonical mismatch. Expected: "${p.expectedCanonical}", Got: "${canonical}"`);
		allPassed = false;
	}

	// Robots
	const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["'](.*?)["']/i);
	const robotsMeta = robotsMatch ? robotsMatch[1] : null;
	console.log(`Robots: "${robotsMeta}"`);
	if (robotsMeta === 'index, follow') {
		console.log('✅ Robots meta match');
	} else {
		console.error(`❌ Robots meta mismatch. Got: "${robotsMeta}"`);
		allPassed = false;
	}

	// Meta description
	const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
	const desc = descMatch ? descMatch[1] : null;
	console.log(`Description: "${desc}"`);
	if (desc && desc.length > 20) {
		console.log(`✅ Description present (${desc.length} chars)`);
	} else {
		console.error(`❌ Description missing or too short.`);
		allPassed = false;
	}

	// OG Tags
	const ogSiteName = (html.match(/<meta\s+property=["']og:site_name["']\s+content=["'](.*?)["']/i) || [])[1];
	const ogType = (html.match(/<meta\s+property=["']og:type["']\s+content=["'](.*?)["']/i) || [])[1];
	const ogTitle = (html.match(/<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i) || [])[1];
	const ogDesc = (html.match(/<meta\s+property=["']og:description["']\s+content=["'](.*?)["']/i) || [])[1];
	const ogUrl = (html.match(/<meta\s+property=["']og:url["']\s+content=["'](.*?)["']/i) || [])[1];
	const ogImage = (html.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i) || [])[1];
	const ogImageAlt = (html.match(/<meta\s+property=["']og:image:alt["']\s+content=["'](.*?)["']/i) || [])[1];

	console.log(`OG Image: ${ogImage}`);
	console.log(`OG Image Alt: ${ogImageAlt}`);
	if (ogSiteName === 'OPTYVIBE' && ogType === 'website' && ogTitle && ogDesc && ogUrl === p.expectedCanonical && ogImage === 'https://optyvibe.com/logo.png' && ogImageAlt === 'OPTYVIBE - Digital Growth Agency') {
		console.log('✅ Open Graph tags complete and valid');
	} else {
		console.error('❌ Open Graph tags incomplete:', { ogSiteName, ogType, ogTitle, ogDesc, ogUrl, ogImage, ogImageAlt });
		allPassed = false;
	}

	// Twitter Tags
	const twCard = (html.match(/<meta\s+name=["']twitter:card["']\s+content=["'](.*?)["']/i) || [])[1];
	const twTitle = (html.match(/<meta\s+name=["']twitter:title["']\s+content=["'](.*?)["']/i) || [])[1];
	const twDesc = (html.match(/<meta\s+name=["']twitter:description["']\s+content=["'](.*?)["']/i) || [])[1];
	const twImage = (html.match(/<meta\s+name=["']twitter:image["']\s+content=["'](.*?)["']/i) || [])[1];

	if (twCard === 'summary_large_image' && twTitle && twDesc && twImage === 'https://optyvibe.com/logo.png') {
		console.log('✅ Twitter Card tags complete and valid');
	} else {
		console.error('❌ Twitter Card tags incomplete:', { twCard, twTitle, twDesc, twImage });
		allPassed = false;
	}

	// JSON-LD Schema
	const schemaMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
	if (schemaMatch) {
		try {
			const parsed = JSON.parse(schemaMatch[1]);
			console.log('✅ JSON-LD parses successfully');
			
			// Check for fake attributes
			const rawSchema = schemaMatch[1];
			const forbidden = ['ratingValue', 'reviewCount', 'aggregateRating', 'review', 'awards', 'numberOfEmployees'];
			let foundForbidden = false;
			for (const f of forbidden) {
				if (rawSchema.includes(f)) {
					console.error(`❌ Forbidden/fake schema field found: ${f}`);
					foundForbidden = true;
					allPassed = false;
				}
			}
			if (!foundForbidden) {
				console.log('✅ No fake reviews/ratings/employee counts found');
			}
		} catch (err) {
			console.error('❌ JSON-LD JSON parse error:', err.message);
			allPassed = false;
		}
	} else {
		console.error('❌ JSON-LD schema script missing');
		allPassed = false;
	}

	// Images alt attribute check
	const imgRegex = /<img\s+([^>]*?)>/gi;
	let imgMatch;
	let allImgsHaveAlt = true;
	let imgCount = 0;
	while ((imgMatch = imgRegex.exec(html)) !== null) {
		imgCount++;
		const imgAttributes = imgMatch[1];
		if (!imgAttributes.includes('alt=')) {
			console.error(`❌ Image missing alt attribute: ${imgMatch[0]}`);
			allImgsHaveAlt = false;
			allPassed = false;
		}
	}
	if (allImgsHaveAlt) {
		console.log(`✅ All ${imgCount} images have alt attributes`);
	}

	// Relative/Broken about-us link check
	if (html.includes('href="about-us"') || html.includes("href='about-us'")) {
		console.error('❌ Found unnormalized href="about-us" link');
		allPassed = false;
	} else {
		console.log('✅ All internal links cleanly formatted');
	}

	console.log('\n');
}

if (allPassed) {
	console.log('🎯 ALL SEO & VALIDATION CHECKS PASSED PERFECTLY!');
} else {
	console.error('⚠️ SOME CHECKS FAILED. See log above.');
}

