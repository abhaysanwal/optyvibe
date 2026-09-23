const fs = require('fs');
const path = require('path');

const serviceData = [
	{
		slug: 'website-development',
		num: '01',
		title: 'Website Development Services in India | OPTYVIBE',
		h1: 'High-Performance Website Development Services in India',
		eyebrow: '01 / WEBSITE DEVELOPMENT',
		description: 'Fast, responsive and scalable website development in India. Specializing in Shopify e-commerce, custom WordPress development, and high-performance bespoke code.',
		canonical: 'https://optyvibe.com/service/website-development/',
		shortDesc: 'We engineer fast, conversion-optimized websites tailored to your business goals. From high-growth Shopify storefronts to bespoke custom-coded web experiences, every site is crafted with clean architecture, speed, and responsiveness at its core.',
		badge: 'E-COMMERCE & WEB ENGINEERING',
		subservices: [
			{
				num: '01',
				title: 'Shopify Website Development',
				desc: 'Custom Shopify storefronts engineered for high conversions. We build bespoke theme architectures, optimized product detail pages, frictionless checkout flows, and custom app integrations that scale with your sales volume.'
			},
			{
				num: '02',
				title: 'WordPress & CMS Development',
				desc: 'Robust corporate portals, custom business websites, and dynamic content management systems built on WordPress. Engineered with custom themes, clean typography, secure code standards, and straightforward editor experiences.'
			},
			{
				num: '03',
				title: 'Custom HTML / CSS / JavaScript Development',
				desc: 'Bespoke web applications and lightweight frontend experiences coded with modern semantic HTML5, CSS3, and JavaScript. Ultra-fast loading speeds, smooth CSS animations, and zero dependency bloat.'
			}
		],
		process: [
			{ step: '01', title: 'REQUIREMENTS & TECH STACK', desc: 'We analyze your business model, target audience, and functional needs to choose the optimal platform and architectural approach.' },
			{ step: '02', title: 'ARCHITECTURE & WIREFRAMING', desc: 'Information architecture and responsive wireframes are established to ensure clean user journeys and optimal content hierarchy.' },
			{ step: '03', title: 'DEVELOPMENT & INTEGRATION', desc: 'We write clean, modular code with integrated APIs, payment gateways, analytics tracking, and inventory connections.' },
			{ step: '04', title: 'QA & SPEED OPTIMIZATION', desc: 'Rigorous cross-browser, multi-device testing, and Core Web Vitals optimization to guarantee sub-second load times.' },
			{ step: '05', title: 'LAUNCH & CONTINUOUS SCALING', desc: 'Seamless DNS deployment, search engine indexing setup, and ongoing technical maintenance as your brand expands.' }
		],
		benefits: [
			{ title: 'Sub-Second Page Speeds', desc: 'Optimized code structures, compressed modern assets, and clean caching for lightning-fast browsing.' },
			{ title: 'Mobile-First Responsiveness', desc: 'Flawless visual presentation and effortless user interactions across mobile phones, tablets, and desktop displays.' },
			{ title: 'Built for Conversions', desc: 'Strategic visual hierarchy and clear call-to-action pathways engineered to turn visitors into paying customers.' },
			{ title: 'Clean, Maintainable Code', desc: 'Built strictly to modern web standards so your team can easily manage and scale content in the future.' }
		],
		faqs: [
			{
				q: 'Which platform is best for my website: Shopify, WordPress, or custom code?',
				a: 'For direct-to-consumer e-commerce and retail brands, Shopify provides unmatched stability, checkout reliability, and inventory management. For service companies, content-heavy publishers, and corporate brands, WordPress offers immense content flexibility. For bespoke web applications requiring custom UI interactions and maximum performance, custom HTML/CSS/JS is ideal.'
			},
			{
				q: 'Will my website be mobile-friendly and optimized for search engines?',
				a: 'Yes. Every website we build is 100% mobile-responsive, tested across modern mobile viewports (iOS and Android), and includes foundational technical SEO elements including clean semantic markup, fast load times, canonical tags, and structured data.'
			},
			{
				q: 'How long does a website development project typically take?',
				a: 'A standard custom Shopify or WordPress website typically takes between 2 to 4 weeks depending on the scope of design, number of unique page templates, and custom integration requirements.'
			}
		],
		related: [
			{ slug: 'ui-ux-design', name: 'UI/UX Design', desc: 'User-centric interfaces and Figma design systems built for modern products.' },
			{ slug: 'marketplace-management', name: 'Marketplace Management', desc: 'Scale across Amazon & Flipkart alongside your direct website storefront.' },
			{ slug: 'meta-ads', name: 'Meta Ads', desc: 'Drive high-intent traffic to your newly developed website storefront.' }
		]
	},
	{
		slug: 'app-development',
		num: '02',
		title: 'App Development Services in India | OPTYVIBE',
		h1: 'Custom Mobile App Development Services in India',
		eyebrow: '02 / APP DEVELOPMENT',
		description: 'Custom mobile app development services in India for iOS, Android, and cross-platform Flutter/React Native. Scalable architectures and fluid user experiences.',
		canonical: 'https://optyvibe.com/service/app-development/',
		shortDesc: 'We design and develop high-performance mobile applications built for scale. Whether native iOS, native Android, or cross-platform applications, our focus is smooth interaction, robust backend integration, and an exceptional user experience.',
		badge: 'IOS, ANDROID & CROSS-PLATFORM',
		subservices: [
			{
				num: '01',
				title: 'iOS App Development',
				desc: 'Native iOS applications built with Swift and SwiftUI, adhering to Apple Human Interface Guidelines. Optimized for iPhone and iPad with fluid gestures, biometric security, and seamless App Store submission.'
			},
			{
				num: '02',
				title: 'Android App Development',
				desc: 'High-performance Android applications built with Kotlin. Engineered for device compatibility across diverse screen resolutions, background processing, and Google Play Store compliance.'
			},
			{
				num: '03',
				title: 'Cross-Platform App Development',
				desc: 'Single-codebase efficiency utilizing modern Flutter and React Native frameworks. Deliver near-native performance, identical visual fidelity, and synchronized updates across both iOS and Android platforms.'
			}
		],
		process: [
			{ step: '01', title: 'PRODUCT DISCOVERY', desc: 'Mapping feature roadmaps, user roles, backend API requirements, and technical architectural constraints.' },
			{ step: '02', title: 'UI/UX FLOWS', desc: 'Creating intuitive mobile wireframes, touch-friendly screen interactions, and design prototypes.' },
			{ step: '03', title: 'CORE APP DEVELOPMENT', desc: 'Building modular frontends, state management architectures, and secure RESTful/GraphQL API integrations.' },
			{ step: '04', title: 'DEVICE TESTING & QA', desc: 'Thorough testing on physical iOS and Android hardware for battery usage, network latency, and edge cases.' },
			{ step: '05', title: 'STORE DEPLOYMENT', desc: 'Complete App Store and Google Play Store publication with metadata, screenshots, and release management.' }
		],
		benefits: [
			{ title: 'Native Fluidity', desc: '60fps animations and instant screen transitions that feel responsive on modern mobile devices.' },
			{ title: 'Secure Architecture', desc: 'Encrypted local storage, secure token authentication, and strict adherence to mobile platform security best practices.' },
			{ title: 'Offline-First Capability', desc: 'Smart local caching mechanisms to ensure users can access essential features even in low-connectivity areas.' },
			{ title: 'Scalable Backend APIs', desc: 'Seamless integration with cloud infrastructure, payment processors, analytics SDKs, and push notification systems.' }
		],
		faqs: [
			{
				q: 'Should I build a native app or a cross-platform app?',
				a: 'For most consumer and business apps, cross-platform frameworks like Flutter or React Native provide 95% single-codebase efficiency, significantly reduced development timelines, and near-native performance. Native development (Swift/Kotlin) is recommended for apps requiring heavy hardware utilization, complex AR features, or deep system-level APIs.'
			},
			{
				q: 'Do you assist with publishing to the Apple App Store and Google Play Store?',
				a: 'Yes. We handle the entire release lifecycle including developer account configuration, certificates, provisioning profiles, asset preparation, and store compliance review.'
			}
		],
		related: [
			{ slug: 'ui-ux-design', name: 'UI/UX Design', desc: 'Design systems and interactive Figma prototypes for mobile apps.' },
			{ slug: 'website-development', name: 'Website Development', desc: 'Connect your mobile app with a synchronized web platform.' },
			{ slug: 'graphic-design', name: 'Graphic Design', desc: 'Iconography, in-app illustrations, and branded marketing materials.' }
		]
	},
	{
		slug: 'ui-ux-design',
		num: '03',
		title: 'UI/UX Design Services in India | OPTYVIBE',
		h1: 'Intuitive UI/UX Design Services in India',
		eyebrow: '03 / UI/UX DESIGN',
		description: 'User-centric UI/UX design services in India for websites, mobile apps, and SaaS platforms. Figma design systems, wireframing, user flows, and interactive prototypes.',
		canonical: 'https://optyvibe.com/service/ui-ux-design/',
		shortDesc: 'We craft digital interfaces that look refined and convert effortlessly. By combining in-depth user research, clean typography, visual hierarchy, and comprehensive Figma design systems, we build digital experiences that users love to navigate.',
		badge: 'FIGMA SYSTEMS & PRODUCT DESIGN',
		subservices: [
			{
				num: '01',
				title: 'Website UI/UX Design',
				desc: 'Modern, responsive layouts engineered for clarity and conversion. We balance editorial visual impact with clear navigation hierarchy so visitors effortlessly find information and take action.'
			},
			{
				num: '02',
				title: 'Mobile App UI/UX Design',
				desc: 'Ergonomic mobile interfaces designed around thumb-zones and natural swipe gestures. Complete screen architecture covering onboarding, account settings, core workflows, and modals.'
			},
			{
				num: '03',
				title: 'Figma Design Systems',
				desc: 'Scalable component libraries built with Figma auto-layout, design tokens, responsive breakpoints, variant states, and comprehensive handoff documentation for engineering teams.'
			},
			{
				num: '04',
				title: 'UX Research & User Flows',
				desc: 'Information architecture diagrams, wireframe clickstreams, and customer journey mapping designed to identify friction points and streamline paths to conversion.'
			}
		],
		process: [
			{ step: '01', title: 'DISCOVERY & PERSONAS', desc: 'Understanding your brand values, target audience expectations, and core product objectives.' },
			{ step: '02', title: 'INFORMATION ARCHITECTURE', desc: 'Structuring user journeys, sitemaps, and low-fidelity wireframes to establish logical product flow.' },
			{ step: '03', title: 'HIGH-FIDELITY DESIGN', desc: 'Crafting pixel-perfect interface screens in Figma with custom typography, color harmony, and micro-interactions.' },
			{ step: '04', title: 'INTERACTIVE PROTOTYPING', desc: 'Building clickable prototypes in Figma to simulate live user behavior and validate interaction dynamics.' },
			{ step: '05', title: 'DESIGN SYSTEM & DEV HANDOFF', desc: 'Documenting design tokens, components, assets, and responsive specifications for development.' }
		],
		benefits: [
			{ title: 'Clarity & Visual Polish', desc: 'Clean layouts that elevate brand perception and communicate value within the first three seconds.' },
			{ title: 'Higher Conversion Rates', desc: 'Reduced cognitive friction and strategically placed action points that guide visitors to purchase or inquiry.' },
			{ title: 'Developer-Ready Files', desc: 'Organized Figma components and styles that speed up frontend development and eliminate guesswork.' },
			{ title: 'Design Consistency', desc: 'Unified design tokens ensuring every digital touchpoint reflects a single cohesive brand aesthetic.' }
		],
		faqs: [
			{
				q: 'What deliverables will I receive from the UI/UX design process?',
				a: 'You will receive complete access to organized Figma project files containing all high-fidelity screens, clickable prototypes, responsive desktop/tablet/mobile variants, component libraries, typography/color tokens, and exportable graphic assets.'
			},
			{
				q: 'Can you work with our existing development team?',
				a: 'Yes. We structure our Figma files with comprehensive design-to-code specifications, auto-layout tokens, and redline annotations so your developers can implement the design with 100% fidelity.'
			}
		],
		related: [
			{ slug: 'website-development', name: 'Website Development', desc: 'Turn approved UI/UX designs into fast, custom-coded websites.' },
			{ slug: 'app-development', name: 'App Development', desc: 'Implement mobile application designs into production Swift and Kotlin code.' },
			{ slug: 'graphic-design', name: 'Graphic Design', desc: 'Custom iconography and creative assets to enrich product screens.' }
		]
	},
	{
		slug: 'marketplace-management',
		num: '04',
		title: 'Amazon & Flipkart Marketplace Management Services | OPTYVIBE',
		h1: 'Complete Amazon & Flipkart Marketplace Management in India',
		eyebrow: '04 / MARKETPLACE MANAGEMENT',
		description: 'End-to-end Amazon & Flipkart marketplace management in India. Catalog structuring, inventory planning, account health management, order fulfillment, and sales growth.',
		canonical: 'https://optyvibe.com/service/marketplace-management/',
		shortDesc: 'We take complete operational ownership of your Amazon and Flipkart brand accounts. From catalog architecture and stock synchronization to account health safeguarding and deal management, we simplify marketplace operations so your brand can scale smoothly.',
		badge: 'OPERATIONS, CATALOG & SCALING',
		subservices: [
			{
				num: '01',
				title: 'Amazon Marketplace Operations',
				desc: 'End-to-end Seller Central and Vendor Central management. Brand Registry setup, Buy Box monitoring, daily account health checks, and promotional deal submissions (Lightning Deals, Prime Day, Great Indian Festival).'
			},
			{
				num: '02',
				title: 'Flipkart Marketplace Operations',
				desc: 'Full Flipkart Seller Hub management. Account operational health maintenance, Big Billion Days preparation, tier optimization (Bronze, Silver, Gold), and platform policy compliance.'
			},
			{
				num: '03',
				title: 'Product & Catalog Management',
				desc: 'Catalog taxonomy structuring, parent-child variation creation, inventory reconciliation across SKUs, backend attribute updates, and category reclassification.'
			},
			{
				num: '04',
				title: 'Order & Operations Oversight',
				desc: 'Order SLA tracking, dispatch monitoring, return rate oversight, customer query resolution, and logistics coordination with platform fulfillment networks.'
			}
		],
		process: [
			{ step: '01', title: 'ACCOUNT HEALTH AUDIT', desc: 'Reviewing listing quality scores, policy notifications, Buy Box metrics, and operational bottlenecks.' },
			{ step: '02', title: 'CATALOG RESTRUCTURING', desc: 'Standardizing product data, fixing suppressed listings, and configuring parent-child variations.' },
			{ step: '03', title: 'OPERATIONAL WORKFLOWS', desc: 'Setting up daily dispatch, order processing, and SLA tracking routines to prevent penalty points.' },
			{ step: '04', title: 'PROMOTIONS & MERCHANDISING', desc: 'Submitting and scheduling platform deals, coupons, and seasonal festive event campaigns.' },
			{ step: '05', title: 'PERFORMANCE REPORTING', desc: 'Weekly reviews of revenue, organic vs. paid sales, inventory velocity, and return metrics.' }
		],
		benefits: [
			{ title: 'Zero Operational Headaches', desc: 'We handle day-to-day platform workflows so your core team can focus on product sourcing and brand growth.' },
			{ title: 'Account Health Protection', desc: 'Proactive monitoring to keep cancellation rates low, VTR high, and prevent unexpected listing suspensions.' },
			{ title: 'Buy Box Maximization', desc: 'Strategic pricing and fulfillment monitoring to protect Buy Box ownership and maximize conversions.' },
			{ title: 'Multi-Marketplace Alignment', desc: 'Synchronized catalog and inventory management across Amazon, Flipkart, and your direct website.' }
		],
		faqs: [
			{
				q: 'How does OPTYVIBE manage our Amazon and Flipkart seller accounts?',
				a: 'You grant our team standard user permissions through Amazon Seller Central and Flipkart Seller Hub. We manage catalog updates, account health, case logs, and promotional calendar execution without needing access to your primary financial passwords.'
			},
			{
				q: 'Can you help resolve suppressed listings or account health warnings?',
				a: 'Yes. We diagnose policy warnings, fix catalog attribute mismatches, update mandatory packaging/compliance details, and file targeted case escalations with seller support.'
			}
		],
		related: [
			{ slug: 'amazon-flipkart-listing', name: 'Amazon & Flipkart Listing', desc: 'Upgrade listing copy, gallery infographics, and A+ Content.' },
			{ slug: 'amazon-ads', name: 'Amazon Ads', desc: 'Accelerate marketplace sales velocity with targeted Sponsored Product ads.' },
			{ slug: 'shiprocket-management', name: 'Shiprocket Management', desc: 'Streamline shipping logistics and reduce returns across non-FBA orders.' }
		]
	},
	{
		slug: 'amazon-flipkart-listing',
		num: '05',
		title: 'Amazon & Flipkart Product Listing Services | OPTYVIBE',
		h1: 'High-Converting Amazon & Flipkart Product Listing Services',
		eyebrow: '05 / LISTING & A+ CONTENT',
		description: 'High-converting Amazon & Flipkart product listing services in India. Keyword-optimized titles, persuasive bullet points, A+ content design, and gallery graphics.',
		canonical: 'https://optyvibe.com/service/amazon-flipkart-listing/',
		shortDesc: 'We turn ordinary marketplace listings into high-converting digital storefronts. By combining high-volume keyword research, persuasive copywriting, branded gallery graphics, and premium A+ Content, we improve search rank and customer conversion.',
		badge: 'SEO LISTINGS & A+ VISUALS',
		subservices: [
			{
				num: '01',
				title: 'Product Listing Creation & Upload',
				desc: 'Accurate catalog uploads complying with platform category requirements. Single and multi-attribute variation setups (size, color, pack) with complete attribute indexing.'
			},
			{
				num: '02',
				title: 'SEO Product Titles & Copywriting',
				desc: 'Keyword-rich product titles, benefit-driven bullet points, and compelling product descriptions crafted to rank for high-intent search terms while remaining readable to shoppers.'
			},
			{
				num: '03',
				title: 'Product Gallery & Infographic Optimization',
				desc: 'High-converting secondary gallery visuals, lifestyle infographics, product dimension graphics, certification badges, and comparison charts that address customer doubts visually.'
			},
			{
				num: '04',
				title: 'A+ Content / Enhanced Brand Content (EBC)',
				desc: 'Custom visual storytelling modules for Amazon Brand Registry sellers. Premium banner designs, brand story carousels, and comparative product specification grids.'
			}
		],
		process: [
			{ step: '01', title: 'KEYWORD RESEARCH', desc: 'Harvesting high-search-volume keywords, search trends, and competitor keyword gaps using industry data.' },
			{ step: '02', title: 'COPYWRITING & DRAFTING', desc: 'Drafting compliant, benefit-led titles, 5 key bullet points, and backend search terms.' },
			{ step: '03', title: 'INFOGRAPHIC & A+ DESIGN', desc: 'Designing high-resolution gallery images and custom A+ Content modules in accordance with platform guidelines.' },
			{ step: '04', title: 'CATALOG SUBMISSION', desc: 'Uploading copy and graphics, submitting for platform approval, and verifying indexation.' },
			{ step: '05', title: 'CONVERSION MONITORING', desc: 'Tracking click-through rates and unit session percentages to iterate and maximize conversions.' }
		],
		benefits: [
			{ title: 'Higher Search Indexation', desc: 'Optimized titles and backend terms ensure your products appear when buyers search for related queries.' },
			{ title: 'Improved Conversion Rates', desc: 'Clear benefit bullets and informative infographics remove buying hesitation and increase sales conversion.' },
			{ title: 'Lower Return Rates', desc: 'Accurate product specs, dimensions, and usage guidelines reduce misleading expectations and returns.' },
			{ title: 'Brand Authority', desc: 'Polished, cohesive A+ Content gives your brand a premium visual presence that commands trust.' }
		],
		faqs: [
			{
				q: 'What is Amazon A+ Content and why does my brand need it?',
				a: 'A+ Content (formerly EBC) is available to sellers with an active Amazon Brand Registry. It replaces plain text descriptions with high-definition visual modules, comparison charts, and branded storytelling, which Amazon reports can increase sales conversions by 3% to 10%.'
			},
			{
				q: 'Do you create the graphics and copy together?',
				a: 'Yes. Our team handles both the strategic copywriting (keywords and benefits) and the graphic design of gallery infographics and A+ modules so your listings look visually cohesive.'
			}
		],
		related: [
			{ slug: 'marketplace-management', name: 'Marketplace Management', desc: 'Manage your overall Amazon & Flipkart account operations.' },
			{ slug: 'amazon-ads', name: 'Amazon Ads', desc: 'Drive qualified traffic to your newly optimized product listings.' },
			{ slug: 'graphic-design', name: 'Graphic Design', desc: 'Custom branded visual assets for digital and retail packaging.' }
		]
	},
	{
		slug: 'meta-ads',
		num: '06',
		title: 'Meta Ads Management Services in India | OPTYVIBE',
		h1: 'Performance Meta Ads Management Services in India',
		eyebrow: '06 / META ADS & PERFORMANCE',
		description: 'Performance-driven Meta Ads management in India. Facebook & Instagram advertising, full-funnel campaign architecture, creative testing, and scalable ROAS optimization.',
		canonical: 'https://optyvibe.com/service/meta-ads/',
		shortDesc: 'We build and scale high-return advertising campaigns across Facebook and Instagram. Combining precise audience segmentation, rapid creative iteration, Conversions API integration, and full-funnel ad architectures to generate predictable revenue.',
		badge: 'FACEBOOK & INSTAGRAM PERFORMANCE',
		subservices: [
			{
				num: '01',
				title: 'Facebook Ads Management',
				desc: 'Strategic audience targeting, Advantage+ shopping campaigns, custom audience lookalikes, and dynamic catalog ads designed for scalable customer acquisition.'
			},
			{
				num: '02',
				title: 'Instagram Ads Management',
				desc: 'High-impact Reel ads, Story placements, and visual lifestyle promotions optimized to capture user attention within the first two seconds and drive high-intent store visits.'
			},
			{
				num: '03',
				title: 'Full-Funnel Campaign Architecture',
				desc: 'Structured TOFU (Top-of-Funnel prospecting), MOFU (engagement & consideration), and BOFU (dynamic retargeting & cart recovery) campaign structures.'
			},
			{
				num: '04',
				title: 'Creative Strategy & A/B Testing',
				desc: 'Systematic testing of visual hooks, copy variations, video formats, and call-to-actions to identify winning assets and combat ad fatigue.'
			}
		],
		process: [
			{ step: '01', title: 'TRACKING & PIXEL SETUP', desc: 'Configuring Meta Pixel, Conversions API (CAPI), and custom event tracking for precise data attribution.' },
			{ step: '02', title: 'AUDIENCE & OFFER STRATEGY', desc: 'Defining customer avatars, competitor positioning, and irresistible promotional offers.' },
			{ step: '03', title: 'CREATIVE PRODUCTION', desc: 'Designing high-CTR video clips, carousel graphics, and persuasive ad copy.' },
			{ step: '04', title: 'CAMPAIGN LAUNCH & TESTING', desc: 'Launching structured test budgets to validate audiences, creatives, and cost-per-acquisition metrics.' },
			{ step: '05', title: 'SCALE & ROAS OPTIMIZATION', desc: 'Scaling winning campaigns vertically and horizontally while maintaining target blended ROAS.' }
		],
		benefits: [
			{ title: 'Predictable Customer Acquisition', desc: 'Engineered funnels that consistently generate qualified leads and e-commerce purchases.' },
			{ title: 'Accurate Attribution', desc: 'Server-side Conversions API integration to ensure reliable tracking despite browser cookie limitations.' },
			{ title: 'Continuous Creative Refresh', desc: 'Regular production of new visual assets to prevent ad fatigue and keep acquisition costs down.' },
			{ title: 'Transparent Performance Tracking', desc: 'Clear reporting focused on real business metrics: ROAS, CPA, conversion rates, and revenue.' }
		],
		faqs: [
			{
				q: 'What budget is recommended to start Meta Ads?',
				a: 'We recommend starting with a minimum monthly ad spend that allows for sufficient data collection and creative testing across audience segments. Our team works closely with you to define test budgets that scale as ROAS is proven.'
			},
			{
				q: 'Do you provide the ad graphics and video creatives?',
				a: 'Yes. We design high-converting visual assets, carousel sets, and video reels tailored specifically for Facebook and Instagram ad placements.'
			}
		],
		related: [
			{ slug: 'social-media-management', name: 'Social Media Management', desc: 'Maintain an active, credible organic social presence alongside ads.' },
			{ slug: 'website-development', name: 'Website Development', desc: 'Ensure your landing pages and checkout convert ad traffic efficiently.' },
			{ slug: 'graphic-design', name: 'Graphic Design', desc: 'Custom promotional creative assets and ad templates.' }
		]
	},
	{
		slug: 'amazon-ads',
		num: '07',
		title: 'Amazon Ads Management Services in India | OPTYVIBE',
		h1: 'Data-Driven Amazon Ads Management Services in India',
		eyebrow: '07 / AMAZON ADS & PPC',
		description: 'Data-driven Amazon PPC & Ads management in India. Sponsored Products, Sponsored Brands, keyword harvesting, bid management, and profitable ACoS reduction.',
		canonical: 'https://optyvibe.com/service/amazon-ads/',
		shortDesc: 'We manage and optimize data-driven Amazon PPC advertising campaigns. By executing rigorous keyword harvesting, placement bid modifiers, negative keyword pruning, and competitor ASIN targeting, we maximize sales velocity while keeping ACoS profitable.',
		badge: 'AMAZON PPC & ACOS OPTIMIZATION',
		subservices: [
			{
				num: '01',
				title: 'Sponsored Products Management',
				desc: 'Precise search term biddings, product detail page placements, top-of-search placement multipliers, and automated/manual campaign structure alignment.'
			},
			{
				num: '02',
				title: 'Sponsored Brands & Video Ads',
				desc: 'High-visibility headline banner ads and Sponsored Brands video creative targeting shoppers directly on high-intent search result pages.'
			},
			{
				num: '03',
				title: 'Keyword Harvesting & Negative Targeting',
				desc: 'Extracting converting search terms from auto campaigns into exact match targets while relentlessly pruning wasteful negative keywords.'
			},
			{
				num: '04',
				title: 'Bid Management & Profitability Optimization',
				desc: 'Strategic bid adjustments, dayparting analysis, and organic rank synergy to lower Advertising Cost of Sales (ACoS) and increase Total ACoS (TACoS) efficiency.'
			}
		],
		process: [
			{ step: '01', title: 'PPC ACCOUNT AUDIT', desc: 'Identifying bleed keywords, wasted ad spend, low-performing placements, and bidding inefficiencies.' },
			{ step: '02', title: 'CAMPAIGN RESTRUCTURING', desc: 'Building clean campaign hierarchies segregated by product category, keyword intent, and match type.' },
			{ step: '03', title: 'KEYWORD HARVESTING', desc: 'Deploying discovery campaigns to harvest profitable search terms and competitor ASIN targets.' },
			{ step: '04', title: 'DAILY BID OPTIMIZATION', desc: 'Continuous bid adjustments based on conversion rates, placement data, and target ACoS thresholds.' },
			{ step: '05', title: 'ORGANIC RANK SYNERGY', desc: 'Aligning PPC sales velocity with organic keyword ranking to drive long-term non-paid sales.' }
		],
		benefits: [
			{ title: 'Lower Wasted Spend', desc: 'Aggressive negative keyword matching to ensure your budget is spent only on high-converting search queries.' },
			{ title: 'Faster Sales Velocity', desc: 'Targeted top-of-search placements that stimulate sales velocity and boost organic product ranking.' },
			{ title: 'Controlled ACoS', desc: 'Data-driven bidding that protects profit margins while systematically scaling revenue.' },
			{ title: 'Competitor Defense & Conquesting', desc: 'Target competitor product pages while defending your own brand detail pages from rival ads.' }
		],
		faqs: [
			{
				q: 'What is a good target ACoS for Amazon Ads?',
				a: 'Target ACoS depends on your product profit margins and growth objectives. For established products focused on profitability, an ACoS between 15% to 25% is typical. For new product launches focused on gaining organic rank, higher initial ACoS is balanced against long-term organic keyword gains.'
			},
			{
				q: 'How do Amazon Ads help my organic ranking?',
				a: 'Amazon algorithm heavily weights sales velocity. Paid sales generated through keyword-targeted PPC signal customer interest to the algorithm, which directly improves organic search position for those same keywords.'
			}
		],
		related: [
			{ slug: 'marketplace-management', name: 'Marketplace Management', desc: 'Comprehensive Amazon seller operations and account health oversight.' },
			{ slug: 'amazon-flipkart-listing', name: 'Amazon & Flipkart Listing', desc: 'Ensure your listings have high conversion rates before driving PPC traffic.' }
		]
	},
	{
		slug: 'social-media-management',
		num: '08',
		title: 'Social Media Management Services in India | OPTYVIBE',
		h1: 'Strategic Social Media Management Services in India',
		eyebrow: '08 / SOCIAL MEDIA MANAGEMENT',
		description: 'Strategic social media management services in India. Content planning, brand voice development, creative direction, post scheduling, and audience community engagement.',
		canonical: 'https://optyvibe.com/service/social-media-management/',
		shortDesc: 'We build consistent, engaging brand presences across social channels. From monthly editorial planning and brand storytelling to creative direction and community management, we keep your brand relevant, active, and connected with your audience.',
		badge: 'CONTENT, BRANDING & COMMUNITY',
		subservices: [
			{
				num: '01',
				title: 'Social Media Growth Strategy',
				desc: 'Defining brand tone, visual identity standards, target customer personas, and channel growth roadmaps tailored for Instagram, Facebook, and LinkedIn.'
			},
			{
				num: '02',
				title: 'Content Planning & Editorial Calendars',
				desc: 'Structured monthly editorial calendars featuring engaging content pillars, educational carousels, topical trends, and persuasive caption copywriting.'
			},
			{
				num: '03',
				title: 'Creative Direction & Visual Styling',
				desc: 'Cohesive visual themes, custom graphic templates, engaging reel concepts, and aesthetic curation that reflects your brand standard.'
			},
			{
				num: '04',
				title: 'Publishing & Community Management',
				desc: 'Scheduled multi-platform publishing, timely story updates, active comment and direct message moderation, and monthly reach analytics.'
			}
		],
		process: [
			{ step: '01', title: 'CHANNEL & AUDIENCE AUDIT', desc: 'Analyzing current profile performance, audience demographics, and industry benchmark standards.' },
			{ step: '02', title: 'MONTHLY CONTENT CALENDAR', desc: 'Drafting 30-day content roadmaps with topic pillars, creative briefs, and copy drafts.' },
			{ step: '03', title: 'ASSET PRODUCTION', desc: 'Designing high-resolution carousels, post banners, story graphics, and short-form video concepts.' },
			{ step: '04', title: 'SCHEDULED PUBLISHING', desc: 'Deploying posts at optimal engagement times across target social media networks.' },
			{ step: '05', title: 'COMMUNITY & INSIGHTS', desc: 'Engaging with followers, monitoring brand sentiment, and reviewing monthly growth analytics.' }
		],
		benefits: [
			{ title: 'Consistent Brand Presence', desc: 'Never let your social channels go dark with regular, planned high-quality content.' },
			{ title: 'Refined Visual Aesthetic', desc: 'Professional, branded graphics that stand out in crowded social media feeds.' },
			{ title: 'Stronger Customer Trust', desc: 'An active, responsive social channel gives prospective customers confidence in your brand.' },
			{ title: 'Cross-Channel Synergy', desc: 'Organic social content supports and amplifies your paid Meta advertising campaigns.' }
		],
		faqs: [
			{
				q: 'Which social media platforms do you manage?',
				a: 'We primarily manage Instagram, Facebook, and LinkedIn, creating tailored visual and copy assets appropriate for each platform audience.'
			},
			{
				q: 'Do you create the graphics and write the captions?',
				a: 'Yes. We provide complete end-to-end content creation including monthly editorial planning, custom graphic design, caption copywriting, hashtag strategy, and scheduling.'
			}
		],
		related: [
			{ slug: 'meta-ads', name: 'Meta Ads', desc: 'Amplify top-performing organic posts with targeted advertising campaigns.' },
			{ slug: 'graphic-design', name: 'Graphic Design', desc: 'Custom brand identity assets, logos, and promotional graphics.' },
			{ slug: 'ui-ux-design', name: 'UI/UX Design', desc: 'Align your website digital experience with your social media aesthetic.' }
		]
	},
	{
		slug: 'graphic-design',
		num: '09',
		title: 'Graphic Design Services for Brands | OPTYVIBE',
		h1: 'High-Impact Graphic Design Services for Brands',
		eyebrow: '09 / GRAPHIC DESIGN & BRANDING',
		description: 'High-impact graphic design services for ambitious brands in India. Brand identity systems, social media creatives, packaging design, and digital marketing materials.',
		canonical: 'https://optyvibe.com/service/graphic-design/',
		shortDesc: 'We create high-impact graphic design assets that reinforce brand credibility and drive engagement. From logo systems and brand stationery to packaging mockups, marketing collateral, and promotional creatives, every asset is designed for impact.',
		badge: 'BRAND IDENTITY & MARKETING VISUALS',
		subservices: [
			{
				num: '01',
				title: 'Social Media & Performance Creatives',
				desc: 'Eye-catching social media post graphics, promotional sales banners, carousel graphics, and high-CTR visual assets for digital campaigns.'
			},
			{
				num: '02',
				title: 'Brand Identity & Guidelines',
				desc: 'Logo systems, brand typography rules, color palettes, stationery layouts, and comprehensive style guides that define your brand identity.'
			},
			{
				num: '03',
				title: 'Product & Packaging Design',
				desc: 'E-commerce packaging designs, box layouts, product labels, unboxing thank-you cards, and photorealistic product mockups.'
			},
			{
				num: '04',
				title: 'Marketing & Sales Collateral',
				desc: 'Corporate pitch decks, digital product catalogs, sales one-pagers, brochures, and print-ready exhibition collateral.'
			}
		],
		process: [
			{ step: '01', title: 'CREATIVE BRIEF', desc: 'Clarifying design objectives, target audience, dimensions, copy, and brand guidelines.' },
			{ step: '02', title: 'CONCEPTING & MOODBOARDS', desc: 'Exploring typography treatments, visual compositions, and color harmonies.' },
			{ step: '03', title: 'DETAILED DESIGN', desc: 'Crafting precision vector assets, high-resolution layouts, and balanced typography.' },
			{ step: '04', title: 'REVIEW & REFINEMENT', desc: 'Incorporating your feedback to polish alignment, contrast, and visual hierarchy.' },
			{ step: '05', title: 'PRODUCTION DELIVERY', desc: 'Delivering export-ready web files (PNG, WebP, SVG) and print-ready vector formats (AI, PDF).' }
		],
		benefits: [
			{ title: 'Distinctive Brand Visuals', desc: 'Stand out in competitive markets with custom, professional creative design.' },
			{ title: 'Vector-Perfect Precision', desc: 'Scalable graphic assets engineered to render cleanly on everything from mobile screens to billboards.' },
			{ title: 'Fast Turnaround', desc: 'Structured design workflows that deliver quality marketing creative on schedule.' },
			{ title: 'Omnichannel Consistency', desc: 'Maintain unified visual branding across physical packaging, digital ads, and your website.' }
		],
		faqs: [
			{
				q: 'In what file formats do you deliver graphic design assets?',
				a: 'We deliver all final designs in standard production-ready formats, including high-resolution WebP and PNG for web use, vector SVG for digital interfaces, and print-ready PDF/AI files with full color profiles (CMYK/RGB).'
			},
			{
				q: 'Can you design packaging and labels for physical retail products?',
				a: 'Yes. We design custom product labels, box packaging layouts, pouch designs, and unboxing inserts with accurate die-cut specifications and print-ready bleed margins.'
			}
		],
		related: [
			{ slug: 'ui-ux-design', name: 'UI/UX Design', desc: 'Interface design systems and website layouts.' },
			{ slug: 'social-media-management', name: 'Social Media Management', desc: 'Deploy custom graphic designs across active social channels.' },
			{ slug: 'amazon-flipkart-listing', name: 'Amazon & Flipkart Listing', desc: 'Infographics and A+ Content for marketplace product listings.' }
		]
	},
	{
		slug: 'shiprocket-management',
		num: '10',
		title: 'Shiprocket Management Services | OPTYVIBE',
		h1: 'End-to-End Shiprocket Management Services in India',
		eyebrow: '10 / SHIPROCKET & LOGISTICS',
		description: 'End-to-end Shiprocket logistics & shipping management in India. Courier partner optimization, automated order processing, NDR workflows, and RTO reduction.',
		canonical: 'https://optyvibe.com/service/shiprocket-management/',
		shortDesc: 'We streamline your e-commerce shipping operations and reduce return-to-origin (RTO) rates. From automated courier allocation and daily dispatch management to proactive NDR resolution and weight discrepancy audits, we keep your logistics efficient.',
		badge: 'SHIPPING, NDR & RTO REDUCTION',
		subservices: [
			{
				num: '01',
				title: 'Courier Partner & Rate Optimization',
				desc: 'Optimizing courier allocation based on delivery speed, pin-code serviceability, and cost efficiency across BlueDart, Delhivery, DTDC, and Shadowfax.'
			},
			{
				num: '02',
				title: 'Order Processing & Manifestation',
				desc: 'Automated order synchronization from Shopify, WooCommerce, or custom platforms. Bulk shipping label generation, manifest creation, and pickup handovers.'
			},
			{
				num: '03',
				title: 'Proactive NDR (Non-Delivery Report) Workflows',
				desc: 'Real-time follow-ups on failed delivery attempts. Customer contact verification, re-attempt scheduling, and address correction to prevent returns.'
			},
			{
				num: '04',
				title: 'RTO Management & Weight Dispute Auditing',
				desc: 'Strategic cash-on-delivery (COD) verification workflows, return shipment tracking, and systematic auditing of carrier weight discrepancy charges.'
			}
		],
		process: [
			{ step: '01', title: 'CHANNEL INTEGRATION', desc: 'Connecting your e-commerce storefront with Shiprocket and configuring shipping zones and tax rates.' },
			{ step: '02', title: 'COURIER PRIORITY SETUP', desc: 'Configuring custom courier assignment rules based on delivery performance and regional rates.' },
			{ step: '03', title: 'DAILY DISPATCH ROUTINES', desc: 'Processing daily orders, printing shipping labels, and managing warehouse pickup handovers.' },
			{ step: '04', title: 'ACTIVE NDR INTERVENTION', desc: 'Contacting customers upon first delivery failure to secure alternate addresses or delivery time slots.' },
			{ step: '05', title: 'LOGISTICS COST AUDITS', desc: 'Monthly reviews of RTO percentages, courier performance, and weight dispute reconciliations.' }
		],
		benefits: [
			{ title: 'Lower Return-to-Origin (RTO)', desc: 'Proactive NDR intervention and address validation significantly reduces expensive return freight costs.' },
			{ title: 'Faster Delivery Turnaround', desc: 'Automated courier allocation assigns the best-performing carrier for each specific pin-code.' },
			{ title: 'Protection Against Weight Overcharges', desc: 'Routine auditing of carrier weight discrepancies prevents hidden logistics overbilling.' },
			{ title: 'Seamless Customer Experience', desc: 'Real-time SMS and WhatsApp tracking notifications keep buyers informed throughout delivery.' }
		],
		faqs: [
			{
				q: 'How does proactive NDR management reduce RTO rates?',
				a: 'When a delivery attempt fails (customer unavailable, incorrect address, or fake attempt by rider), our team immediately flags the NDR, communicates with the customer via phone/WhatsApp to confirm availability, and schedules an official re-attempt with the courier within 24 hours.'
			},
			{
				q: 'Can Shiprocket be integrated with my Shopify or custom website?',
				a: 'Yes. Shiprocket integrates directly with Shopify, WooCommerce, Amazon, and custom websites via REST API for seamless real-time order and inventory sync.'
			}
		],
		related: [
			{ slug: 'marketplace-management', name: 'Marketplace Management', desc: 'Complete operational management for Amazon and Flipkart.' },
			{ slug: 'website-development', name: 'Website Development', desc: 'Build an optimized direct-to-consumer Shopify storefront.' }
		]
	}
];

function generateHtml(s) {
	const subservicesHtml = s.subservices.map(sub => `
					<article class="service-detail-card">
						<div class="card-detail-top">
							<span class="card-detail-num">${sub.num} / ${s.slug.toUpperCase().replace(/-/g, ' ')}</span>
						</div>
						<h3>${sub.title}</h3>
						<p>${sub.desc}</p>
					</article>
	`).join('');

	const processHtml = s.process.map(p => `
					<div class="process-step-box">
						<span class="process-num">${p.step} // STEP</span>
						<h3>${p.title}</h3>
						<p>${p.desc}</p>
					</div>
	`).join('');

	const benefitsHtml = s.benefits.map((b, i) => `
					<div class="benefit-box">
						<span class="benefit-num">0${i + 1}</span>
						<h3>${b.title}</h3>
						<p>${b.desc}</p>
					</div>
	`).join('');

	let faqsHtml = '';
	let faqSchemaJson = '';
	if (s.faqs && s.faqs.length > 0) {
		const faqItems = s.faqs.map(f => `
					<div class="faq-item">
						<h3 class="faq-question">${f.q}</h3>
						<p class="faq-answer">${f.a}</p>
					</div>
		`).join('');

		faqsHtml = `
		<!-- ==================== FAQ SECTION ==================== -->
		<section id="faq" class="section faq-section">
			<div class="wrap">
				<div class="section-head-center">
					<div class="eyebrow">COMMON QUESTIONS</div>
					<h2 class="section-title">Frequently Asked <span class="accent">Questions</span></h2>
					<p class="section-intro">Straightforward answers about our ${s.h1.toLowerCase()} workflows, deliverables, and timelines.</p>
				</div>
				<div class="faq-grid">
					${faqItems}
				</div>
			</div>
		</section>
		`;

		const faqSchemaObj = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": s.faqs.map(f => ({
				"@type": "Question",
				"name": f.q,
				"acceptedAnswer": {
					"@type": "Answer",
					"text": f.a
				}
			}))
		};
		faqSchemaJson = `
	<!-- FAQ Schema -->
	<script type="application/ld+json">
	${JSON.stringify(faqSchemaObj, null, 2)}
	</script>`;
	}

	const relatedHtml = s.related.map(r => `
					<a href="/service/${r.slug}/" class="related-card">
						<div class="related-top">
							<span class="related-label">EXPLORE SERVICE</span>
							<span class="related-arrow">↗</span>
						</div>
						<h3>${r.name}</h3>
						<p>${r.desc}</p>
					</a>
	`).join('');

	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>${s.title}</title>
	<meta name="description" content="${s.description}" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="${s.canonical}" />
	<link rel="icon" type="image/png" href="/favicon.png">

	<!-- Open Graph / Facebook -->
	<meta property="og:site_name" content="OPTYVIBE">
	<meta property="og:type" content="website">
	<meta property="og:title" content="${s.title}">
	<meta property="og:description" content="${s.description}">
	<meta property="og:url" content="${s.canonical}">
	<meta property="og:image" content="https://optyvibe.com/logo.png">
	<meta property="og:image:alt" content="OPTYVIBE - Digital Growth Agency">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="${s.title}">
	<meta name="twitter:description" content="${s.description}">
	<meta name="twitter:image" content="https://optyvibe.com/logo.png">

	<!-- Breadcrumb Schema -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://optyvibe.com/"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Services",
				"item": "https://optyvibe.com/service/"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": "${s.h1}",
				"item": "${s.canonical}"
			}
		]
	}
	</script>${faqSchemaJson}

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
	<style>
		:root{
			--ink:#101312;
			--paper:#f3f0e9;
			--muted:#8d918b;
			--line:rgba(243,240,233,.14);
			--acid:#d9fa62;
			--teal:#76c9b4;
			--card:#141918;
			--card-hover:#181f1b;
			--sans:'Manrope',sans-serif;
			--mono:'DM Mono',monospace;
		}
		*{box-sizing:border-box}
		html{scroll-behavior:smooth}
		body{margin:0;background:var(--ink);color:var(--paper);font-family:var(--sans);overflow-x:hidden}
		a{color:inherit;text-decoration:none}
		button,input,select,textarea{font:inherit}
		button{cursor:pointer;border:0}
		.wrap{width:min(1180px,calc(100% - 48px));margin:auto}
		.eyebrow{font:11px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--acid)}
		.section{padding:120px 0;position:relative}
		.section-title{font-size:clamp(38px,5vw,64px);line-height:1.02;letter-spacing:-.06em;margin:18px 0 22px}
		.section-intro{color:#a2aba1;max-width:580px;line-height:1.7;font-size:15px}
		.accent{color:var(--acid)}

		/* ==================== HEADER ==================== */
		header{position:fixed;top:0;left:0;width:100%;z-index:30;transition:.3s;border-bottom:1px solid transparent}
		header.scrolled{background:rgba(16,19,18,.88);backdrop-filter:blur(16px);border-color:var(--line)}
		nav{height:82px;display:flex;align-items:center;justify-content:space-between}
		.brand{display:flex;align-items:center;gap:0px;color:var(--acid);text-decoration:none;line-height:1}
		.brand-name{font:700 clamp(1.2rem,1.1vw + .65rem,1.5rem)/1 var(--sans);letter-spacing:-.045em;white-space:nowrap;transition:opacity .3s ease;position:relative;top:8px;margin:0;padding:0}
		.brand-symbol{position:relative;width:100px;height:96px;flex:0 0 100px;overflow:hidden;margin:0;padding:0}
		.brand-symbol .brand-logo{position:absolute;width:522px;height:522px;max-width:none;left:-199px;top:-183px;display:block;object-fit:contain}
		@media(min-width:801px){header .brand{transform:translateX(calc(80px - max(24px,(100vw - 1180px) / 2)))}}
		@media(min-width:801px) and (max-width:1100px){.brand-symbol{width:80px;height:84px;flex-basis:80px}.brand-symbol .brand-logo{width:424px;height:424px;left:-162px;top:-146px}header .brand-name{font-size:1.25rem}}
		@media(max-width:800px){header .brand{max-width:calc(100% - 48px);transform:translateY(6px)}.brand-symbol{width:80px;height:76px;flex-basis:80px}.brand-symbol .brand-logo{width:413px;height:413px;left:-158px;top:-145px}header .brand-name{font-size:clamp(.95rem,4.7vw,1.2rem);top:2px}}

		.nav-links{display:flex;gap:31px;color:#a6aca5;font-size:12px}
		.nav-links a{transition:.2s}
		.nav-links a:hover{color:var(--paper)}
		.nav-links a.active{color:var(--acid);font-weight:700;position:relative}
		.nav-links a.active:after{content:'';position:absolute;bottom:-6px;left:0;right:0;height:2px;background:var(--acid);border-radius:1px}

		.nav-cta,.btn{display:inline-flex;align-items:center;gap:12px;padding:12px 18px;border:1px solid var(--line);font-size:12px;transition:.25s}
		.nav-cta:hover,.btn.secondary:hover{border-color:var(--acid);color:var(--acid)}
		.btn.primary{background:var(--acid);color:var(--ink);border-color:var(--acid);font-weight:800}
		.btn.primary:hover{background:#efff99;transform:translateY(-2px)}
		.hamb{display:none;background:none;color:var(--paper);font-size:22px}

		/* ==================== BREADCRUMB ==================== */
		.breadcrumb-nav{
			padding-top:118px;
			padding-bottom:12px;
		}
		.breadcrumb-list{
			display:flex;
			align-items:center;
			gap:8px;
			font:11px var(--mono);
			color:#778179;
			list-style:none;
			padding:0;
			margin:0;
			flex-wrap:wrap;
		}
		.breadcrumb-list a{color:#a5ada5;transition:color .2s}
		.breadcrumb-list a:hover{color:var(--acid)}
		.breadcrumb-sep{color:#49524b}
		.breadcrumb-current{color:var(--acid)}

		/* ==================== SERVICE HERO ==================== */
		#service-hero{
			padding-top:24px;
			padding-bottom:90px;
			border-bottom:1px solid var(--line);
			background:radial-gradient(ellipse at 85% 20%,rgba(92,134,105,.12),transparent 45%),#101312;
		}
		.hero-tag-badge{
			display:inline-flex;
			align-items:center;
			gap:8px;
			font:10px var(--mono);
			letter-spacing:.14em;
			color:var(--acid);
			background:rgba(217,250,98,.08);
			border:1px solid rgba(217,250,98,.24);
			padding:4px 10px;
			border-radius:4px;
			margin-bottom:18px;
		}
		.service-hero-h1{
			font-size:clamp(40px,5.5vw,72px);
			line-height:1.02;
			letter-spacing:-.06em;
			margin:0 0 24px;
			max-width:920px;
			font-weight:800;
		}
		.service-hero-p{
			color:#a8b0a7;
			line-height:1.75;
			font-size:16.5px;
			max-width:680px;
			margin:0 0 34px;
		}
		.hero-actions{
			display:flex;
			gap:14px;
			flex-wrap:wrap;
		}

		/* ==================== SUB-SERVICES SECTION ==================== */
		#subservices{background:#121614;border-bottom:1px solid var(--line)}
		.subservices-grid{
			display:grid;
			grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
			gap:20px;
			margin-top:45px;
		}
		.service-detail-card{
			background:#161c19;
			border:1px solid var(--line);
			border-radius:12px;
			padding:32px 28px;
			display:flex;
			flex-direction:column;
			transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease;
		}
		.service-detail-card:hover{
			transform:translateY(-3px);
			border-color:rgba(217,250,98,.4);
			box-shadow:0 12px 28px rgba(0,0,0,.25);
		}
		.card-detail-top{
			display:flex;
			justify-content:space-between;
			align-items:center;
			margin-bottom:18px;
		}
		.card-detail-num{
			font:11px var(--mono);
			letter-spacing:.12em;
			color:var(--acid);
		}
		.service-detail-card h3{
			font-size:22px;
			letter-spacing:-.04em;
			margin:0 0 12px;
			color:#ffffff;
			line-height:1.2;
		}
		.service-detail-card p{
			color:#9ea79e;
			line-height:1.65;
			font-size:14px;
			margin:0;
		}

		/* ==================== PROCESS SECTION ==================== */
		#process{border-bottom:1px solid var(--line)}
		.process-row{
			display:grid;
			grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
			gap:20px;
			margin-top:45px;
		}
		.process-step-box{
			border-top:1px solid var(--line);
			padding-top:24px;
			position:relative;
		}
		.process-step-box:before{
			content:'';
			position:absolute;
			top:-2px;
			left:0;
			width:24px;
			height:3px;
			background:var(--acid);
			border-radius:1px;
		}
		.process-num{
			font:10px var(--mono);
			color:var(--acid);
			letter-spacing:.12em;
			display:block;
			margin-bottom:12px;
		}
		.process-step-box h3{
			font-size:16px;
			letter-spacing:-.02em;
			margin:0 0 10px;
			color:var(--paper);
		}
		.process-step-box p{
			font-size:13px;
			line-height:1.6;
			color:#8f988f;
			margin:0;
		}

		/* ==================== BENEFITS SECTION ==================== */
		#benefits{background:#121614;border-bottom:1px solid var(--line)}
		.benefits-grid{
			display:grid;
			grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
			gap:20px;
			margin-top:45px;
		}
		.benefit-box{
			background:#151b18;
			border:1px solid var(--line);
			border-radius:10px;
			padding:28px 24px;
		}
		.benefit-num{
			font:11px var(--mono);
			color:var(--acid);
			margin-bottom:12px;
			display:block;
		}
		.benefit-box h3{
			font-size:19px;
			letter-spacing:-.03em;
			margin:0 0 10px;
			color:#ffffff;
		}
		.benefit-box p{
			font-size:13.5px;
			line-height:1.65;
			color:#9ba39a;
			margin:0;
		}

		/* ==================== FAQ SECTION ==================== */
		.faq-section{border-bottom:1px solid var(--line)}
		.section-head-center{text-align:left;max-width:680px;margin-bottom:45px}
		.faq-grid{
			display:grid;
			grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
			gap:22px;
		}
		.faq-item{
			background:#151a17;
			border:1px solid var(--line);
			border-radius:10px;
			padding:26px 24px;
		}
		.faq-question{
			font-size:17px;
			letter-spacing:-.02em;
			color:#ffffff;
			margin:0 0 12px;
			line-height:1.3;
		}
		.faq-answer{
			font-size:13.5px;
			line-height:1.65;
			color:#9aa39a;
			margin:0;
		}

		/* ==================== RELATED SERVICES ==================== */
		#related{background:#101312;border-bottom:1px solid var(--line)}
		.related-grid{
			display:grid;
			grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
			gap:20px;
			margin-top:40px;
		}
		.related-card{
			background:#151a17;
			border:1px solid var(--line);
			border-radius:10px;
			padding:26px 24px;
			display:flex;
			flex-direction:column;
			transition:border-color .25s ease,transform .25s ease;
		}
		.related-card:hover{
			border-color:var(--acid);
			transform:translateY(-3px);
		}
		.related-top{
			display:flex;
			justify-content:space-between;
			align-items:center;
			margin-bottom:14px;
			font:10px var(--mono);
			letter-spacing:.12em;
			color:var(--acid);
		}
		.related-card h3{
			font-size:20px;
			letter-spacing:-.03em;
			margin:0 0 8px;
			color:#ffffff;
		}
		.related-card p{
			font-size:13px;
			line-height:1.6;
			color:#8f988f;
			margin:0;
		}

		/* ==================== CTA SECTION ==================== */
		#service-cta{padding:100px 0;background:#121614}
		.cta-box{
			max-width:700px;
			text-align:left;
		}
		.cta-box .section-title{
			font-size:clamp(36px,5vw,60px);
			line-height:1.04;
			margin:16px 0 20px;
		}
		.cta-box p{
			font-size:16px;
			line-height:1.7;
			color:#a4aca3;
			margin-bottom:30px;
		}

		/* ==================== FOOTER ==================== */
		footer{padding:65px 0 30px;border-top:1px solid var(--line);background:#101312}
		.footer-top{display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:35px}
		.footer-desc{color:#8d958b;font-size:13px;line-height:1.65;margin:18px 0 0;max-width:280px}
		.footer-col h4{font:11px var(--mono);letter-spacing:.15em;text-transform:uppercase;color:var(--acid);margin:0 0 18px}
		.footer-col a{display:block;color:#a4aca2;font-size:13px;margin-bottom:10px;transition:.2s}
		.footer-col a:hover{color:var(--paper)}
		.footer-bottom{margin-top:55px;padding-top:25px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;font:11px var(--mono);color:#717870}
		.footer-bottom a{color:#8e968d;margin-left:20px}
		.footer-bottom a:hover{color:var(--paper)}

		@media(max-width:800px){
			.hamb{display:block}
			.nav-links{display:none}
			.mobile-open .nav-links{
				display:flex;
				position:absolute;
				top:70px;
				left:0;
				width:100%;
				padding:24px 16px;
				flex-direction:column;
				background:#171b19;
				border-bottom:1px solid var(--line);
			}
			.mobile-open .nav-links a{font-size:18px}
			.footer-top{grid-template-columns:1fr 1fr;gap:28px}
			.footer-top>div:first-child{grid-column:1/-1}
			.footer-bottom{flex-direction:column;gap:12px;line-height:2}
		}
		@media(max-width:480px){
			.wrap{width:calc(100% - 24px)}
			.service-hero-h1{font-size:clamp(32px,8.5vw,44px)}
			.service-hero-p{font-size:14.5px}
			.subservices-grid,.process-row,.benefits-grid,.faq-grid,.related-grid{grid-template-columns:1fr}
			.footer-top{grid-template-columns:1fr}
		}
	</style>
</head>
<body>
	<!-- ==================== HEADER ==================== -->
	<header id="header">
		<nav class="wrap">
			<a class="logo brand" href="/">
				<span class="brand-symbol"><img src="../../logo.png" alt="optyvibe" class="brand-logo"></span>
				<span class="brand-name">optyvibe</span>
			</a>
			<div class="nav-links">
				<a href="/">Home</a>
				<a href="/service/" class="active">Services</a>
				<a href="/work/">Work</a>
				<a href="/#process">Process</a>
				<a href="/about-us/">About</a>
				<a href="/#contact">Contact</a>
			</div>
			<a class="nav-cta" href="/#contact">Let's talk <span>↗</span></a>
			<button class="hamb" aria-label="Open menu">☰</button>
		</nav>
	</header>

	<main>
		<!-- ==================== BREADCRUMB ==================== -->
		<div class="wrap breadcrumb-nav">
			<ul class="breadcrumb-list" aria-label="Breadcrumbs">
				<li><a href="/">Home</a></li>
				<li class="breadcrumb-sep">/</li>
				<li><a href="/service/">Services</a></li>
				<li class="breadcrumb-sep">/</li>
				<li class="breadcrumb-current" aria-current="page">${s.h1}</li>
			</ul>
		</div>

		<!-- ==================== SERVICE HERO ==================== -->
		<section id="service-hero" aria-label="${s.h1}">
			<div class="wrap">
				<div class="hero-tag-badge">// ${s.badge}</div>
				<h1 class="service-hero-h1">${s.h1}</h1>
				<p class="service-hero-p">${s.shortDesc}</p>
				<div class="hero-actions">
					<a class="btn primary" href="/#contact">Discuss Your Project <span>↗</span></a>
					<a class="btn secondary" href="#subservices">Explore Sub-Services <span>↓</span></a>
				</div>
			</div>
		</section>

		<!-- ==================== SUB-SERVICES BREAKDOWN ==================== -->
		<section id="subservices" class="section">
			<div class="wrap">
				<div>
					<div class="eyebrow">${s.eyebrow}</div>
					<h2 class="section-title">What We <span class="accent">Deliver</span></h2>
					<p class="section-intro">Comprehensive, modular capabilities tailored to your business model and scaling goals.</p>
				</div>
				<div class="subservices-grid">
					${subservicesHtml}
				</div>
			</div>
		</section>

		<!-- ==================== PROCESS ==================== -->
		<section id="process" class="section">
			<div class="wrap">
				<div>
					<div class="eyebrow">OUR METHODOLOGY</div>
					<h2 class="section-title">A Clear, Disciplined <span class="accent">Process</span></h2>
					<p class="section-intro">From initial discovery to ongoing optimization, every stage is structured for momentum and measurable impact.</p>
				</div>
				<div class="process-row">
					${processHtml}
				</div>
			</div>
		</section>

		<!-- ==================== BENEFITS ==================== -->
		<section id="benefits" class="section">
			<div class="wrap">
				<div>
					<div class="eyebrow">THE OPTYVIBE ADVANTAGE</div>
					<h2 class="section-title">Built for Long-Term <span class="accent">Impact</span></h2>
					<p class="section-intro">Why ambitious brands partner with OPTYVIBE for ${s.h1.toLowerCase()}.</p>
				</div>
				<div class="benefits-grid">
					${benefitsHtml}
				</div>
			</div>
		</section>

		${faqsHtml}

		<!-- ==================== RELATED SERVICES ==================== -->
		<section id="related" class="section">
			<div class="wrap">
				<div>
					<div class="eyebrow">CONNECTED CAPABILITIES</div>
					<h2 class="section-title">Related <span class="accent">Services</span></h2>
					<p class="section-intro">Combine services across design, development, and marketing for compound business growth.</p>
				</div>
				<div class="related-grid">
					${relatedHtml}
				</div>
			</div>
		</section>

		<!-- ==================== FINAL CTA ==================== -->
		<section id="service-cta" class="section">
			<div class="wrap">
				<div class="cta-box">
					<div class="eyebrow">START A CONVERSATION</div>
					<h2 class="section-title">Ready to build <span class="accent">what's next?</span></h2>
					<p>Tell us where you want to go. We will help you figure out how to get there.</p>
					<a class="btn primary" href="/#contact">Start Your Project <span>↗</span></a>
				</div>
			</div>
		</section>
	</main>

	<!-- ==================== FOOTER ==================== -->
	<footer>
		<div class="wrap">
			<div class="footer-top">
				<div>
					<a class="logo brand" href="/">
						<span class="brand-symbol"><img src="../../logo.png" alt="optyvibe" class="brand-logo"></span>
						<span class="brand-name">optyvibe</span>
					</a>
					<p class="footer-desc">Designing digital experiences and building growth for ambitious brands.</p>
				</div>
				<div class="footer-col">
					<h4>Explore</h4>
					<a href="/service/">Services</a>
					<a href="/work/">Work</a>
					<a href="/about-us/">About</a>
					<a href="/#process">Process</a>
					<a href="/#contact">Contact</a>
				</div>
				<div class="footer-col">
					<h4>Services</h4>
					<a href="/service/ui-ux-design/">UI/UX Design</a>
					<a href="/service/website-development/">Website Development</a>
					<a href="/service/marketplace-management/">Marketplace Management</a>
					<a href="/service/meta-ads/">Meta Ads &amp; Marketing</a>
				</div>
				<div class="footer-col">
					<h4>Social</h4>
					<a href="https://www.linkedin.com/company/optyvibe" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
					<a href="/#contact">Instagram ↗</a>
					<a href="/#contact">Facebook ↗</a>
				</div>
			</div>
			<div class="footer-bottom">
				<span>© 2026 OPTYVIBE. All rights reserved.</span>
				<div>
					<a href="/#hero">Privacy Policy</a>
					<a href="/#hero">Terms</a>
				</div>
			</div>
		</div>
	</footer>

	<script>
		const header=document.getElementById('header');
		window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
		const hamburger=document.querySelector('.hamb');
		hamburger.onclick=()=>{
			const isOpen=document.body.classList.toggle('mobile-open');
			hamburger.textContent=isOpen?'×':'☰';
			hamburger.setAttribute('aria-label',isOpen?'Close menu':'Open menu');
		};
	</script>
</body>
</html>
`;
}

// Generate each page
for (const s of serviceData) {
	const dir = path.join(__dirname, '..', 'service', s.slug);
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
	const filePath = path.join(dir, 'index.html');
	const html = generateHtml(s);
	fs.writeFileSync(filePath, html, 'utf8');
	console.log(`Generated: ${filePath}`);
}

console.log('All 10 dedicated service pages generated successfully!');

