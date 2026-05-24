const summary = document.querySelector("#statusSummary");
const providerGrid = document.querySelector("#providerGrid");
const readinessGrid = document.querySelector("#readinessGrid");
const productionGrid = document.querySelector("#productionGrid");

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function badge(status) {
  const normalized = String(status || "unknown").toLowerCase();
  const tone = normalized.includes("connected") || normalized.includes("ready") ? "ready" : normalized.includes("need") || normalized.includes("fallback") ? "blocked" : "pending";
  return `<span class="status-badge ${tone}">${esc(status)}</span>`;
}

async function loadStatus() {
  try {
    const response = await fetch("/api/integrations");
    const data = await response.json();
    const ready = data.readiness || {};
    summary.innerHTML = `
      <article>
        <span>${esc(ready.readyCount || 0)}/${esc(ready.total || 0)}</span>
        <small>Production gates ready</small>
      </article>
      <article>
        <span>${esc(data.liveGaps?.length || 0)}</span>
        <small>Live gaps</small>
      </article>
      <article>
        <span>${data.strictLiveMode ? "On" : "Off"}</span>
        <small>Strict live mode</small>
      </article>
      <article>
        <span>${esc(data.mode)}</span>
        <small>Runtime mode</small>
      </article>
    `;

    providerGrid.innerHTML = (data.providers || []).map(provider => `
      <article class="provider-card status-provider">
        <div>
          <h3>${esc(provider.name)}</h3>
          <p>${esc(provider.detail)}</p>
        </div>
        <div class="provider-meta">
          ${badge(provider.status)}
          <small>${esc(provider.module || "Core")} / ${esc(provider.mode)}</small>
        </div>
      </article>
    `).join("");

    readinessGrid.innerHTML = (ready.moduleReadiness || []).map(module => `
      <article>
        <div class="readiness-head">
          <h3>${esc(module.module)}</h3>
          ${badge(module.status)}
        </div>
        <p>${esc(module.readyCount)}/${esc(module.total)} checks ready</p>
        <ul>
          ${module.checks.map(check => `<li>${check.ready ? "Ready" : "Setup"}: ${esc(check.label)} - ${esc(check.detail)}</li>`).join("")}
        </ul>
      </article>
    `).join("");

    const productionResponse = await fetch("/api/production/complete-check");
    const production = await productionResponse.json();
    productionGrid.innerHTML = (production.items || []).map(item => `
      <article>
        <div class="readiness-head">
          <h3>${esc(item.title)}</h3>
          ${badge(item.ready ? "ready" : "needs setup")}
        </div>
        <p>${esc(item.detail)}</p>
      </article>
    `).join("");
  } catch (error) {
    summary.innerHTML = `<article><span>Offline</span><small>${esc(error.message)}</small></article>`;
  }
}

loadStatus();
