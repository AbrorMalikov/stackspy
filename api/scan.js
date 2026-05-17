// api/scan.js — Vercel Serverless Function
// This runs on the SERVER so CORS is not a problem

const fingerprints = require("../fingerprints.js");

module.exports = async function handler(req, res) {
  // Allow all origins so the Chrome extension can also call this API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Please provide a URL parameter" });
  }

  // Clean and validate the URL
  let targetUrl = url;
  if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
    targetUrl = "https://" + targetUrl;
  }

  let hostname;
  try {
    hostname = new URL(targetUrl).hostname;
  } catch (e) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  try {
    // Fetch the target website HTML
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    });

    const html = await response.text();

    // Scan the HTML for tool fingerprints
    const detected = [];

    for (const tool of fingerprints) {
      const found = tool.patterns.some((pattern) =>
        html.toLowerCase().includes(pattern.toLowerCase())
      );

      if (found) {
        detected.push({
          name: tool.name,
          category: tool.category,
          icon: tool.icon,
          description: tool.description,
        });
      }
    }

    // Group results by category
    const grouped = {};
    for (const tool of detected) {
      if (!grouped[tool.category]) grouped[tool.category] = [];
      grouped[tool.category].push(tool);
    }

    return res.status(200).json({
      url: targetUrl,
      hostname,
      scannedAt: new Date().toISOString(),
      totalFound: detected.length,
      tools: grouped,
    });
  } catch (error) {
    if (error.name === "TimeoutError") {
      return res
        .status(408)
        .json({ error: "Website took too long to respond (timeout)" });
    }

    return res.status(500).json({
      error: "Could not fetch this website. It may be blocking automated requests.",
      detail: error.message,
    });
  }
};