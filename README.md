# 🕵️ StackSpy — Free BuiltWith Alternative

Detect which SEO, AI, analytics, and marketing tools any website uses.
**No CAPTCHA. No limits. Free forever.**

---

## What it detects

| Category   | Examples |
|------------|---------|
| 🔍 SEO     | Ahrefs, SEMrush, Yoast, Rank Math, Surfer SEO |
| 📊 Analytics | GA4, Hotjar, Clarity, Mixpanel, FullStory |
| 🤖 AI      | Intercom, Drift, HubSpot, Zendesk, OpenAI |
| 📧 Marketing | Facebook Pixel, Mailchimp, Klaviyo, Google Ads |
| 🌐 CMS     | WordPress, Shopify, Webflow, Wix, Framer |

---

## Part 1 — Web App (Vercel)

### Deploy in seconds
```bash
npm install -g vercel
cd stackspy
vercel
```
Vercel gives you a free URL like `stackspy.vercel.app`.

---

## Part 2 — Chrome Extension

1. Open Chrome → `chrome://extensions`
2. Turn on **Developer mode**
3. Click **Load unpacked** → select the `extension/` folder
4. StackSpy icon appears in your toolbar!

---

## How to add more tools

Open `fingerprints.js` and add:
```js
{
  name: "Tool Name",
  category: "SEO",  // SEO | Analytics | AI | Marketing | CMS
  icon: "🔍",
  patterns: ["unique-string-from-their-script"],
  description: "Short description"
}
```

---

## License
MIT — do whatever you want with it. Built for the SEO community 💚