// ============================================================
// STACKSPY - TOOL FINGERPRINT DATABASE
// Add more tools by following the same pattern
// ============================================================

const fingerprints = [

  // ─── SEO TOOLS ───────────────────────────────────────────

  {
    name: "Ahrefs",
    category: "SEO",
    icon: "🔍",
    patterns: ["ahrefs.com", "ahrefs-site-verification"],
    description: "SEO backlink and keyword research tool"
  },
  {
    name: "SEMrush",
    category: "SEO",
    icon: "🔍",
    patterns: ["semrush.com", "sem.js", "semrush"],
    description: "All-in-one SEO and competitive research"
  },
  {
    name: "Moz",
    category: "SEO",
    icon: "🔍",
    patterns: ["moz.com", "mozbar"],
    description: "SEO software and link building"
  },
  {
    name: "SE Ranking",
    category: "SEO",
    icon: "🔍",
    patterns: ["seranking.com", "se-widget"],
    description: "SEO platform for rank tracking"
  },
  {
    name: "Screaming Frog",
    category: "SEO",
    icon: "🔍",
    patterns: ["screamingfrog"],
    description: "Website crawler and SEO audit tool"
  },
  {
    name: "Rank Math",
    category: "SEO",
    icon: "🔍",
    patterns: ["rankmath", "rank-math"],
    description: "WordPress SEO plugin"
  },
  {
    name: "Yoast SEO",
    category: "SEO",
    icon: "🔍",
    patterns: ["yoast", "yoast.com", "wpseo"],
    description: "WordPress SEO plugin"
  },
  {
    name: "Mangools",
    category: "SEO",
    icon: "🔍",
    patterns: ["mangools.com", "kwfinder"],
    description: "SEO tools suite with KWFinder"
  },
  {
    name: "Surfer SEO",
    category: "SEO",
    icon: "🔍",
    patterns: ["surferseo", "surfer-seo"],
    description: "Content optimization and on-page SEO"
  },

  // ─── ANALYTICS TOOLS ─────────────────────────────────────

  {
    name: "Google Analytics 4",
    category: "Analytics",
    icon: "📊",
    patterns: ["google-analytics.com/g/", "gtag", "GA4", "G-"],
    description: "Google's main web analytics platform"
  },
  {
    name: "Google Analytics (UA)",
    category: "Analytics",
    icon: "📊",
    patterns: ["google-analytics.com/analytics.js", "UA-"],
    description: "Universal Analytics (older version)"
  },
  {
    name: "Google Tag Manager",
    category: "Analytics",
    icon: "📊",
    patterns: ["googletagmanager.com", "GTM-"],
    description: "Tag management system by Google"
  },
  {
    name: "Hotjar",
    category: "Analytics",
    icon: "📊",
    patterns: ["hotjar.com", "static.hotjar", "_hjSettings"],
    description: "Heatmaps and session recordings"
  },
  {
    name: "Microsoft Clarity",
    category: "Analytics",
    icon: "📊",
    patterns: ["clarity.ms", "microsoft-clarity"],
    description: "Free heatmap and session replay tool"
  },
  {
    name: "Mixpanel",
    category: "Analytics",
    icon: "📊",
    patterns: ["mixpanel.com", "cdn.mxpnl.com"],
    description: "Product analytics platform"
  },
  {
    name: "Amplitude",
    category: "Analytics",
    icon: "📊",
    patterns: ["amplitude.com", "cdn.amplitude.com"],
    description: "Digital analytics platform"
  },
  {
    name: "Heap",
    category: "Analytics",
    icon: "📊",
    patterns: ["heapanalytics.com", "heap.io"],
    description: "Automatic event tracking analytics"
  },
  {
    name: "Plausible",
    category: "Analytics",
    icon: "📊",
    patterns: ["plausible.io"],
    description: "Privacy-friendly analytics"
  },
  {
    name: "Fathom Analytics",
    category: "Analytics",
    icon: "📊",
    patterns: ["usefathom.com", "cdn.usefathom"],
    description: "Simple privacy-focused analytics"
  },
  {
    name: "Lucky Orange",
    category: "Analytics",
    icon: "📊",
    patterns: ["luckyorange.com", "luckyorange.net"],
    description: "Heatmaps and conversion optimization"
  },
  {
    name: "FullStory",
    category: "Analytics",
    icon: "📊",
    patterns: ["fullstory.com", "rs.fullstory"],
    description: "Digital experience analytics"
  },
  {
    name: "Segment",
    category: "Analytics",
    icon: "📊",
    patterns: ["segment.com", "cdn.segment.com", "analytics.js"],
    description: "Customer data platform"
  },
  {
    name: "Matomo",
    category: "Analytics",
    icon: "📊",
    patterns: ["matomo.js", "piwik.js", "matomo.php"],
    description: "Open source analytics platform"
  },

  // ─── AI TOOLS ─────────────────────────────────────────────

  {
    name: "Intercom (AI Chat)",
    category: "AI",
    icon: "🤖",
    patterns: ["intercom.com", "widget.intercom.io", "intercomSettings"],
    description: "AI-powered customer messaging"
  },
  {
    name: "Drift",
    category: "AI",
    icon: "🤖",
    patterns: ["drift.com", "js.driftt.com"],
    description: "AI chatbot and sales tool"
  },
  {
    name: "Tidio",
    category: "AI",
    icon: "🤖",
    patterns: ["tidio.com", "widget-v4.tidiochat"],
    description: "AI chatbot for websites"
  },
  {
    name: "Crisp Chat",
    category: "AI",
    icon: "🤖",
    patterns: ["crisp.chat", "client.crisp.chat"],
    description: "AI customer support chat"
  },
  {
    name: "ChatBot.com",
    category: "AI",
    icon: "🤖",
    patterns: ["chatbot.com", "cdn.chatbot.com"],
    description: "AI chatbot builder"
  },
  {
    name: "Zendesk",
    category: "AI",
    icon: "🤖",
    patterns: ["zendesk.com", "zdassets.com", "zESettings"],
    description: "AI customer support platform"
  },
  {
    name: "Freshdesk",
    category: "AI",
    icon: "🤖",
    patterns: ["freshdesk.com", "freshworks.com", "fcWidget"],
    description: "AI helpdesk and support"
  },
  {
    name: "HubSpot (AI CRM)",
    category: "AI",
    icon: "🤖",
    patterns: ["hubspot.com", "hs-scripts.com", "hs-analytics"],
    description: "AI-powered CRM and marketing"
  },
  {
    name: "OpenAI / ChatGPT",
    category: "AI",
    icon: "🤖",
    patterns: ["openai.com", "api.openai", "chatgpt"],
    description: "OpenAI API or ChatGPT integration"
  },
  {
    name: "Perplexity AI",
    category: "AI",
    icon: "🤖",
    patterns: ["perplexity.ai"],
    description: "AI search engine"
  },
  {
    name: "Jasper AI",
    category: "AI",
    icon: "🤖",
    patterns: ["jasper.ai", "jasp.ai"],
    description: "AI content writing tool"
  },
  {
    name: "Copy.ai",
    category: "AI",
    icon: "🤖",
    patterns: ["copy.ai", "copyai"],
    description: "AI copywriting platform"
  },
  {
    name: "Surfer AI",
    category: "AI",
    icon: "🤖",
    patterns: ["surferseo.com/ai"],
    description: "AI content writing inside Surfer SEO"
  },

  // ─── MARKETING / OTHER ───────────────────────────────────

  {
    name: "Mailchimp",
    category: "Marketing",
    icon: "📧",
    patterns: ["mailchimp.com", "chimpstatic.com", "list-manage.com"],
    description: "Email marketing platform"
  },
  {
    name: "Klaviyo",
    category: "Marketing",
    icon: "📧",
    patterns: ["klaviyo.com", "static.klaviyo"],
    description: "Email and SMS marketing"
  },
  {
    name: "ActiveCampaign",
    category: "Marketing",
    icon: "📧",
    patterns: ["activecampaign.com", "trackcmp.net"],
    description: "Email marketing automation"
  },
  {
    name: "ConvertKit",
    category: "Marketing",
    icon: "📧",
    patterns: ["convertkit.com", "ck.page"],
    description: "Email marketing for creators"
  },
  {
    name: "Facebook Pixel",
    category: "Marketing",
    icon: "📧",
    patterns: ["connect.facebook.net", "fbq(", "fbevents.js"],
    description: "Facebook/Meta ad tracking"
  },
  {
    name: "Google Ads",
    category: "Marketing",
    icon: "📧",
    patterns: ["googleadservices.com", "google_conversion", "AW-"],
    description: "Google advertising pixel"
  },
  {
    name: "TikTok Pixel",
    category: "Marketing",
    icon: "📧",
    patterns: ["analytics.tiktok.com", "ttq.load"],
    description: "TikTok advertising pixel"
  },
  {
    name: "LinkedIn Insight",
    category: "Marketing",
    icon: "📧",
    patterns: ["snap.licdn.com", "linkedin.com/analytics"],
    description: "LinkedIn ad tracking"
  },

  // ─── CMS / FRAMEWORKS ────────────────────────────────────

  {
    name: "WordPress",
    category: "CMS",
    icon: "🌐",
    patterns: ["wp-content", "wp-includes", "wordpress"],
    description: "Most popular CMS"
  },
  {
    name: "Shopify",
    category: "CMS",
    icon: "🌐",
    patterns: ["cdn.shopify.com", "shopify.com/s/", "Shopify.theme"],
    description: "E-commerce platform"
  },
  {
    name: "Webflow",
    category: "CMS",
    icon: "🌐",
    patterns: ["webflow.com", "assets.website-files.com"],
    description: "No-code website builder"
  },
  {
    name: "Wix",
    category: "CMS",
    icon: "🌐",
    patterns: ["wix.com", "static.wixstatic"],
    description: "Website builder"
  },
  {
    name: "Squarespace",
    category: "CMS",
    icon: "🌐",
    patterns: ["squarespace.com", "sqsp.net"],
    description: "Website builder"
  },
  {
    name: "Framer",
    category: "CMS",
    icon: "🌐",
    patterns: ["framer.com", "framerusercontent.com"],
    description: "Design-to-website platform"
  },

];

// Export for Node.js (API) and browser (extension)
if (typeof module !== "undefined") module.exports = fingerprints;