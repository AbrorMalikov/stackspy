// popup.js — Chrome Extension popup logic

const CAT_ICONS = { SEO: "🔍", Analytics: "📊", AI: "🤖", Marketing: "📧", CMS: "🌐" };
const CAT_ORDER = ["SEO", "Analytics", "AI", "Marketing", "CMS"];

let currentTabId = null;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  currentTabId = tab.id;
  try {
    const hostname = new URL(tab.url).hostname;
    document.getElementById("currentSite").textContent = hostname;
  } catch (e) {
    document.getElementById("currentSite").textContent = "—";
  }
});

function startScan() {
  document.getElementById("scanBtn").disabled = true;
  document.getElementById("loader").style.display = "block";
  document.getElementById("summary").style.display = "none";
  document.getElementById("toolList").innerHTML = "";
  document.getElementById("emptyState").style.display = "none";
  document.getElementById("errorBox").style.display = "none";

  chrome.scripting.executeScript(
    { target: { tabId: currentTabId }, func: () => document.documentElement.outerHTML },
    (results) => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("scanBtn").disabled = false;

      if (chrome.runtime.lastError || !results || !results[0]) {
        showError("Could not read this page. Try refreshing it first.");
        return;
      }

      const html = results[0].result;
      const start = Date.now();
      const detected = [];

      for (const tool of fingerprints) {
        const found = tool.patterns.some((p) =>
          html.toLowerCase().includes(p.toLowerCase())
        );
        if (found) detected.push(tool);
      }

      const elapsed = Date.now() - start;

      if (detected.length === 0) {
        document.getElementById("emptyState").style.display = "block";
        return;
      }

      document.getElementById("countNum").textContent = detected.length;
      document.getElementById("scanTime").textContent = elapsed + "ms";
      document.getElementById("summary").style.display = "flex";

      const grouped = {};
      for (const tool of detected) {
        if (!grouped[tool.category]) grouped[tool.category] = [];
        grouped[tool.category].push(tool);
      }

      const list = document.getElementById("toolList");
      for (const cat of CAT_ORDER) {
        if (!grouped[cat]) continue;
        const header = document.createElement("div");
        header.className = "cat-header cat-" + cat;
        header.textContent = CAT_ICONS[cat] + " " + cat;
        list.appendChild(header);
        for (const tool of grouped[cat]) {
          const row = document.createElement("div");
          row.className = "tool-row";
          row.innerHTML =
            '<div class="tool-emoji">' + tool.icon + '</div>' +
            '<div><div class="tool-name">' + tool.name + '</div>' +
            '<div class="tool-desc">' + tool.description + '</div></div>';
          list.appendChild(row);
        }
      }
    }
  );
}

function showError(msg) {
  const box = document.getElementById("errorBox");
  box.textContent = "⚠️ " + msg;
  box.style.display = "block";
}