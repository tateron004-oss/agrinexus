"use strict";

const { NexusConnectionMachine } = require("../nexus-core/connection-machine");
const { NexusMicrophoneController } = require("../nexus-core/microphone-controller");
const { NexusRealtimeConnector } = require("../nexus-core/realtime-connector");
const { NexusVoiceFoundation } = require("../nexus-core/voice-foundation");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");
const { extractIntentAndParameters } = require("../nexus-core/intent-parameter-extractor");
const {
  DEFAULT_EXPERIENCE_PREFERENCES,
  normalizeExperiencePreferences
} = require("../nexus-core/experience-profile");

function createWorkspaceAdapter({ windowObject = window, timeoutMs = 8000 } = {}) {
  return ({ workspace, command }) => new Promise((resolve, reject) => {
    const requestId = crypto.randomUUID();
    const timer = setTimeout(() => {
      windowObject.removeEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
      reject(new Error(`Workspace ${workspace} did not become visible within ${timeoutMs}ms.`));
    }, timeoutMs);
    function onAcknowledged(event) {
      if (!event.detail || event.detail.requestId !== requestId) return;
      clearTimeout(timer);
      windowObject.removeEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
      resolve({
        visible: event.detail.visible === true,
        id: event.detail.acknowledgementId || requestId,
        evidenceReceiptId: event.detail.evidenceReceiptId || null,
        evidenceStatus: event.detail.evidenceStatus || null,
        evidenceSummary: event.detail.evidenceSummary || null,
        evidenceClaims: event.detail.evidenceClaims || [],
        evidenceSourceCount: event.detail.evidenceSourceCount || 0,
        evidenceLinksVisible: event.detail.evidenceLinksVisible === true
      });
    }
    windowObject.addEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
    windowObject.dispatchEvent(new CustomEvent("nexus.clean.workspace.open", {
      detail: Object.freeze({ requestId, workspace, command })
    }));
  });
}

function statusFromReceipt(receipt) {
  const labels = {
    "microphone.requested": "Connecting microphone…",
    "microphone.acquired": "Listening",
    "runtime.ready": "Listening",
    "runtime.recovering": "Reconnecting…",
    "runtime.recovered": "Listening",
    "conversation.barge-in": "Listening",
    "conversation.processing": "Thinking…",
    "conversation.response-started": "Thinking…",
    "conversation.speaking": "Speaking…",
    "conversation.return-to-listening": "Listening",
    "realtime.error": "Voice response failed — tap to reconnect",
    "workspace.visible": "Listening",
    "runtime.recovery-failed": "Voice connection unavailable"
  };
  return labels[receipt.type] || null;
}

const WORKSPACE_VIEWS = Object.freeze({
  agriculture: {
    title: "Agriculture Help",
    icon: "🌱",
    status: "Crop support ready",
    fields: ["Crop or livestock", "Location", "What are you seeing?"],
    actions: ["Analyze concern", "Save field note"]
  },
  health: {
    title: "Health & Chronic Care",
    icon: "🩺",
    status: "Private health workspace ready",
    fields: ["Blood pressure or reading", "When measured", "Symptoms or notes"],
    actions: ["Record reading", "Prepare care summary"]
  },
  telehealth: {
    title: "Telehealth Intake",
    icon: "🧑🏾‍⚕️",
    status: "Intake preparation ready",
    fields: ["Reason for visit", "Preferred date", "Care provider"],
    actions: ["Begin intake", "Review consent"]
  },
  "mobile-clinic": {
    title: "Mobile Clinic",
    icon: "🚐",
    status: "Clinic access search ready",
    fields: ["Location", "Care needed", "Travel distance"],
    actions: ["Find clinic options", "Prepare visit"]
  },
  pharmacy: {
    title: "Pharmacy Support",
    icon: "💊",
    status: "Medication support ready",
    fields: ["Medication", "Request type", "Pharmacy or location"],
    actions: ["Review request", "Prepare pharmacy contact"]
  },
  learning: {
    title: "Learning & Literacy",
    icon: "🎓",
    status: "Learning search ready",
    fields: ["Topic or skill", "Learning level", "Language"],
    actions: ["Find learning options", "Start a lesson"]
  },
  workforce: {
    title: "Jobs & Workforce",
    icon: "💼",
    status: "Job search ready",
    fields: ["Job or skill", "Location", "Work preference"],
    actions: ["Search opportunities", "Prepare application"]
  },
  marketplace: {
    title: "AgriTrade Marketplace",
    icon: "🛒",
    status: "Marketplace workspace ready",
    fields: ["Product", "Quantity", "Location"],
    actions: ["Prepare listing", "Review marketplace options"]
  },
  reminders: {
    title: "Reminders",
    icon: "🔔",
    status: "Reminder setup ready",
    fields: ["Reminder", "Date and time", "Repeat"],
    actions: ["Create reminder", "View reminders"]
  },
  offline: {
    title: "Offline Queue",
    icon: "📶",
    status: "Offline recovery ready",
    fields: ["Queued request", "Connection status", "Sync priority"],
    actions: ["Sync available work", "Review queue"]
  },
  "live-knowledge": {
    title: "Live Knowledge / Internet",
    icon: "🌐",
    status: "Current-information search ready",
    fields: ["Question", "Location or topic", "Source preference"],
    actions: ["Search current sources", "Review citations"]
  }
});

function escapeMarkup(value) {
  return String(value || "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function safeExternalUrl(value) {
  try {
    const url = new URL(String(value || ""));
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function isEvidenceDisplayFollowUp(command) {
  return /\b(show (me )?(the )?(source|sources|reference|references|link|links|website|websites|resource|resources)|open (the )?(source|reference|link|website)|where did (you|that) (get|come) from)\b/i
    .test(String(command || ""));
}

function musicSearchFromCommand(command) {
  const resolution = extractIntentAndParameters(command);
  return resolution.parameters.query || "Kenyan";
}

function musicPlaybackUrl(command) {
  if (/\b(soul|r&b|rnb)\b/i.test(command || "")) {
    return "https://www.youtube-nocookie.com/embed/LtKUrFy6G8g?autoplay=1&playsinline=1";
  }
  return "https://www.youtube-nocookie.com/embed/videoseries?list=PLPSRLBd93oYDPspJRjwRbsz0BC0dn9Mhc&autoplay=1&playsinline=1";
}

function renderAppSurface({ workspace, command, appSurface }) {
  const view = WORKSPACE_VIEWS[workspace];
  if (!view || !appSurface) return false;
  const safeCommand = escapeMarkup(command);
  appSurface.innerHTML = `
    <div class="app-heading"><span class="app-icon" aria-hidden="true">${view.icon}</span>
      <div><strong>${view.title}</strong><span>${view.status}</span></div>
    </div>
    <div class="app-request"><span>Voice request</span><strong>${safeCommand}</strong></div>
    <div class="app-fields">${view.fields.map((field, index) =>
      `<label>${field}<input type="text" value="${index === 0 ? safeCommand : ""}" aria-label="${field}"></label>`
    ).join("")}</div>
    <div class="app-actions">${view.actions.map((action) =>
      `<button type="button">${action}</button>`
    ).join("")}</div>`;
  appSurface.hidden = false;
  return true;
}

function visualIntent(command) {
  const resolution = extractIntentAndParameters(command);
  const action = resolution.parameters.action;
  if (resolution.workflow === "live-knowledge" && action === "weather") return "weather";
  if (resolution.workflow === "agriculture" && action === "images") return "agriculture-images";
  if (resolution.workflow === "workforce" && action === "resume") return "resume";
  if (resolution.workflow === "health" && action === "provider-card") return "provider-card";
  if (resolution.workflow === "live-knowledge" && action === "pilot-dashboard") return "pilot-dashboard";
  if (resolution.workflow === "live-knowledge" && action === "source-directory") return "source-directory";
  return null;
}

function weatherDescription(code) {
  const value = Number(code);
  if (value === 0) return "Clear sky";
  if ([1, 2, 3].includes(value)) return "Partly cloudy";
  if ([45, 48].includes(value)) return "Fog";
  if ([51, 53, 55, 56, 57].includes(value)) return "Drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(value)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(value)) return "Snow";
  if ([95, 96, 99].includes(value)) return "Thunderstorm";
  return "Current conditions";
}

async function fetchVisualData({ kind, command, sessionToken, fetchImpl = fetch }) {
  const response = await fetchImpl(`/api/visual/${kind}`, {
    method: "POST",
    headers: { authorization: `Bearer ${sessionToken}`, "content-type": "application/json" },
    body: JSON.stringify({ command })
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Nexus could not load the requested visual information.");
  return result;
}

async function renderSpecializedVisual({ workspace, command, sessionToken, appSurface }) {
  const intent = visualIntent(command);
  if (!intent || !appSurface) return { handled: false, visible: true };
  appSurface.hidden = false;
  if (intent === "weather") {
    appSurface.innerHTML = `<div class="app-request" role="status">Loading live weather and source…</div>`;
    const weather = await fetchVisualData({ kind: "weather", command, sessionToken });
    const sourceUrl = safeExternalUrl(weather.sourceUrl);
    appSurface.innerHTML = `
      <article class="visual-card weather-card" data-nexus-visual="weather">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">🌦️</span>
          <div><strong>${escapeMarkup(weather.location)}</strong><span>${escapeMarkup(weatherDescription(weather.weatherCode))}</span></div>
        </div>
        <div class="visual-metrics">
          <span><b>${escapeMarkup(weather.temperatureC)}°C</b><small>Temperature</small></span>
          <span><b>${escapeMarkup(weather.highC)}° / ${escapeMarkup(weather.lowC)}°</b><small>High / low</small></span>
          <span><b>${escapeMarkup(weather.rainChance)}%</b><small>Rain chance</small></span>
          <span><b>${escapeMarkup(weather.windKph)} km/h</b><small>Wind</small></span>
        </div>
        <p>Observed ${escapeMarkup(weather.observedAt || "now")} · ${escapeMarkup(weather.timezone)}</p>
        ${sourceUrl ? `<a class="evidence-source-link" href="${escapeMarkup(sourceUrl)}" target="_blank" rel="noopener noreferrer">Open exact Open-Meteo weather data</a>` : ""}
      </article>`;
    return { handled: true, visible: Boolean(sourceUrl), status: weather.status };
  }
  if (intent === "agriculture-images") {
    appSurface.innerHTML = `<div class="app-request" role="status">Loading source-labeled agriculture pictures…</div>`;
    const result = await fetchVisualData({ kind: "images", command, sessionToken });
    appSurface.innerHTML = `
      <section data-nexus-visual="agriculture-images">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">🌽</span>
          <div><strong>Possible maize concerns</strong><span>Reference images—not a diagnosis</span></div>
        </div>
        <div class="visual-image-grid">${result.items.map((item) => `
          <figure><img src="${escapeMarkup(safeExternalUrl(item.imageUrl))}" alt="${escapeMarkup(item.title)}" loading="lazy">
            <figcaption><strong>${escapeMarkup(item.title)}</strong><span>${escapeMarkup(item.license)}</span>
              <a href="${escapeMarkup(safeExternalUrl(item.sourceUrl))}" target="_blank" rel="noopener noreferrer">Open Wikimedia Commons source</a>
            </figcaption>
          </figure>`).join("")}</div>
        <p>Compare patterns carefully and consult a local agricultural extension professional before treatment.</p>
      </section>`;
    return { handled: true, visible: result.items.length > 0, status: result.status };
  }
  if (intent === "resume") {
    appSurface.innerHTML = `
      <form class="resume-builder" data-nexus-visual="resume">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">📄</span>
          <div><strong>Résumé Builder</strong><span>Edit, print, or save as PDF</span></div>
        </div>
        <label>Full name<input aria-label="Résumé full name" placeholder="Your full name"></label>
        <label>Target role<input aria-label="Résumé target role" value="Agriculture / farming role"></label>
        <label>Skills<textarea aria-label="Résumé skills" rows="3" placeholder="Crop production, equipment, teamwork, languages"></textarea></label>
        <label>Experience<textarea aria-label="Résumé experience" rows="5" placeholder="Employer, work performed, dates, results"></textarea></label>
        <div class="app-actions"><button type="button" data-resume-action="print">Print / Save PDF</button><button type="button" data-resume-action="download">Download text</button></div>
      </form>`;
    return { handled: true, visible: true, status: "resume-builder-ready" };
  }
  if (intent === "source-directory") {
    const sources = [
      ["FAO", "Food and Agriculture Organization", "https://www.fao.org/"],
      ["KALRO", "Kenya Agricultural and Livestock Research Organization", "https://www.kalro.org/"],
      ["Kenya Agriculture Ministry", "Ministry of Agriculture and Livestock Development", "https://kilimo.go.ke/"],
      ["WHO", "World Health Organization", "https://www.who.int/"],
      ["ILO", "International Labour Organization", "https://www.ilo.org/"],
      ["UNESCO", "United Nations Educational, Scientific and Cultural Organization", "https://www.unesco.org/"],
      ["World Bank", "World Bank public development resources", "https://www.worldbank.org/"]
    ];
    appSurface.innerHTML = `
      <section class="source-directory" data-nexus-visual="source-directory">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">🔗</span>
          <div><strong>Approved Websites & Sources</strong><span>Direct links to official organizations</span></div>
        </div>
        <div class="evidence-sources">${sources.map(([name, description, url]) => `
          <article class="evidence-source"><strong>${escapeMarkup(name)}</strong>
            <span>${escapeMarkup(description)}</span>
            <a class="evidence-source-link" href="${escapeMarkup(url)}" target="_blank" rel="noopener noreferrer">
              <span>Open official website</span><small>${escapeMarkup(url)}</small>
            </a>
          </article>`).join("")}</div>
        <p>Use these official resources as starting points. Nexus will identify the exact source used when answering a specific research question.</p>
      </section>`;
    return { handled: true, visible: true, status: "approved-source-directory-ready" };
  }
  if (intent === "provider-card") {
    const pressure = /\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/i.exec(command || "");
    appSurface.innerHTML = `
      <article class="provider-card" data-nexus-visual="provider-card">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">🩺</span>
          <div><strong>Provider Communication Card</strong><span>Show or read this to a healthcare professional</span></div>
        </div>
        <dl><dt>Blood pressure</dt><dd>${pressure ? `${escapeMarkup(pressure[1])}/${escapeMarkup(pressure[2])}` : "Not provided"}</dd>
          <dt>User report</dt><dd>${escapeMarkup(command)}</dd>
          <dt>Safety</dt><dd>This card supports communication and does not diagnose or replace urgent medical care.</dd></dl>
        <div class="app-actions"><button type="button" data-provider-card-action="read">Read aloud</button><button type="button" data-provider-card-action="print">Print / Save PDF</button></div>
      </article>`;
    return { handled: true, visible: true, status: "provider-card-ready" };
  }
  appSurface.innerHTML = `
    <section class="pilot-dashboard" data-nexus-visual="pilot-dashboard">
      <div class="app-heading"><span class="app-icon" aria-hidden="true">📊</span>
        <div><strong>Pilot Evidence Dashboard</strong><span>Evidence, failures, recovery, feedback, and scale-up planning</span></div>
      </div>
      <div class="visual-metrics"><span><b>Awaiting pilot data</b><small>Session completion</small></span>
        <span><b>0 fabricated</b><small>Only recorded failures shown</small></span>
        <span><b>Source register</b><small>Approval status required</small></span></div>
      <div class="app-actions"><button type="button">Session completion</button><button type="button">Technical failures</button><button type="button">Recovered sessions</button><button type="button">Participant feedback</button><button type="button">Source register</button><button type="button">Implementation report</button><button type="button">Learning brief</button><button type="button">Scale-up options</button></div>
    </section>`;
  return { handled: true, visible: true, status: "pilot-dashboard-ready" };
}

function renderEvidenceWorkspace({ receipt, surface }) {
  if (!surface || !receipt) return false;
  const verified = receipt.verified === true;
  const claims = Array.isArray(receipt.claims) ? receipt.claims : [];
  const sources = Array.isArray(receipt.sources) ? receipt.sources : [];
  surface.innerHTML = `
    <div class="evidence-status">
      <strong class="${verified ? "evidence-verified" : "evidence-limited"}">${verified ? "Verified across approved sources" : "Evidence not fully cross-checked"}</strong>
      <span>${escapeMarkup(receipt.domainLabel || receipt.domain)}</span>
    </div>
    <div class="evidence-summary"><strong>Nexus synthesis</strong><p>${escapeMarkup(receipt.summary)}</p></div>
    <div class="evidence-grid">
      <section class="evidence-claims" aria-label="Evidence findings">
        <h2>Findings</h2>
        ${claims.length ? claims.map((claim) => `<article class="evidence-claim">
          <span class="evidence-citations">${escapeMarkup((claim.citations || []).map((id) => `[${id}]`).join(" "))}</span>
          <p>${escapeMarkup(claim.text)}</p>
        </article>`).join("") : "<p>No approved-source claim was available.</p>"}
      </section>
      <aside class="evidence-sources" aria-label="Approved sources">
        <h2>Approved sources</h2>
        ${sources.map((source) => {
          const sourceUrl = safeExternalUrl(source.url);
          return `<article class="evidence-source">
          <strong>[${escapeMarkup(source.id)}] ${escapeMarkup(source.title)}</strong>
          <span>${escapeMarkup(source.organization)}</span>
          ${sourceUrl
            ? `<a class="evidence-source-link" href="${escapeMarkup(sourceUrl)}" target="_blank" rel="noopener noreferrer">
                <span>Open website</span><small>${escapeMarkup(sourceUrl)}</small>
              </a>`
            : "<span class=\"evidence-limited\">Verified website address unavailable</span>"}
          <small>Published: ${escapeMarkup(source.publishedAt || "date not provided")} · Retrieved: ${escapeMarkup(source.retrievedAt)}</small>
        </article>`;
        }).join("")}
      </aside>
    </div>
    <form class="evidence-follow-up">
      <input name="question" aria-label="Ask a follow-up evidence question" placeholder="Ask a follow-up about this evidence">
      <button type="submit">Research follow-up</button>
    </form>
    <p class="evidence-receipt">Research receipt: ${escapeMarkup(receipt.id)}</p>`;
  surface.hidden = false;
  surface.dataset.receiptId = receipt.id || "";
  return true;
}

async function researchEvidence({ question, sessionToken, surface, parentReceiptId = null, fetchImpl = fetch }) {
  surface.hidden = false;
  surface.innerHTML = `<div class="evidence-summary" role="status">Nexus is searching approved sources and cross-checking the findings…</div>`;
  const response = await fetchImpl("/api/evidence/research", {
    method: "POST",
    headers: {
      authorization: `Bearer ${sessionToken}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({ question, parentReceiptId })
  });
  const result = await response.json();
  if (!response.ok) {
    surface.innerHTML = `<div class="evidence-summary evidence-limited">${escapeMarkup(result.message || "Approved evidence retrieval is unavailable.")}</div>`;
    return result;
  }
  renderEvidenceWorkspace({ receipt: result, surface });
  const form = surface.querySelector(".evidence-follow-up");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const input = form.elements.question;
      const followUp = String(input && input.value || "").trim();
      if (!followUp) return;
      await researchEvidence({
        question: followUp,
        sessionToken,
        surface,
        parentReceiptId: result.id,
        fetchImpl
      });
    }, { once: true });
  }
  return result;
}

let nexusLeafletMap = null;
let nexusLeafletLayers = [];
let nexusMapRequestGeneration = 0;

function resetVisibleMapStateForTest() {
  nexusLeafletMap = null;
  nexusLeafletLayers = [];
  nexusMapRequestGeneration = 0;
}

async function resolveVisibleMap({ command, sessionToken, documentObject = document, fetchImpl = fetch, leaflet = window.L }) {
  const requestGeneration = ++nexusMapRequestGeneration;
  const canvas = documentObject.getElementById("nexus-map-canvas");
  const summary = documentObject.getElementById("nexus-map-summary");
  const link = documentObject.getElementById("nexus-map-link");
  if (!canvas || !summary || !link || !leaflet) throw new Error("The interactive map renderer is unavailable.");
  if (nexusLeafletMap) {
    nexusLeafletLayers.forEach((layer) => nexusLeafletMap.removeLayer(layer));
    nexusLeafletLayers = [];
  }
  link.removeAttribute?.("href");
  summary.textContent = "Nexus is locating the requested place and preparing the visible map…";
  const response = await fetchImpl("/api/maps/resolve", {
    method: "POST",
    headers: { authorization: `Bearer ${sessionToken}`, "content-type": "application/json" },
    body: JSON.stringify({ command })
  });
  const result = await response.json();
  if (requestGeneration !== nexusMapRequestGeneration) {
    const error = new Error("A newer map request replaced this lookup.");
    error.code = "NEXUS_MAP_REQUEST_SUPERSEDED";
    throw error;
  }
  if (!response.ok) throw new Error(result.message || "Nexus could not display the requested map.");
  if (!nexusLeafletMap) {
    nexusLeafletMap = leaflet.map(canvas).setView([0, 20], 3);
    leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19
    }).addTo(nexusLeafletMap);
  }
  if (result.type === "route") {
    const latLngs = result.geometry.coordinates.map(([lon, lat]) => [lat, lon]);
    const line = leaflet.polyline(latLngs, { color: "#39d7ff", weight: 6, opacity: 0.9 }).addTo(nexusLeafletMap);
    const start = leaflet.marker([result.origin.lat, result.origin.lon]).bindPopup(result.origin.label).addTo(nexusLeafletMap);
    const end = leaflet.marker([result.destination.lat, result.destination.lon]).bindPopup(result.destination.label).addTo(nexusLeafletMap);
    nexusLeafletLayers.push(line, start, end);
    nexusLeafletMap.fitBounds(line.getBounds(), { padding: [36, 36] });
    const distanceKm = Math.round(Number(result.distanceMeters || 0) / 1000).toLocaleString();
    const hours = (Number(result.durationSeconds || 0) / 3600).toFixed(1);
    summary.textContent = `Visible driving route: ${result.origin.label} → ${result.destination.label} · ${distanceKm} km · about ${hours} hours`;
    link.href = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${result.origin.lat}%2C${result.origin.lon}%3B${result.destination.lat}%2C${result.destination.lon}`;
  } else {
    const location = result.location;
    let marker = null;
    if (!location.administrative) {
      marker = leaflet.marker([location.lat, location.lon]).bindPopup(location.label).addTo(nexusLeafletMap);
      nexusLeafletLayers.push(marker);
    }
    if (location.boundingBox.length === 4) {
      nexusLeafletMap.fitBounds([
        [location.boundingBox[0], location.boundingBox[2]],
        [location.boundingBox[1], location.boundingBox[3]]
      ], { padding: [28, 28], maxZoom: location.administrative ? 12 : 16 });
    } else {
      nexusLeafletMap.setView([location.lat, location.lon], location.administrative ? 11 : 15);
    }
    if (marker) marker.openPopup();
    summary.textContent = location.administrative
      ? `Visible city-area map of ${location.label}`
      : `Visible map centered on ${location.label}`;
    link.href = `https://www.openstreetmap.org/#map=${location.administrative ? 11 : 15}/${location.lat}/${location.lon}`;
  }
  setTimeout(() => nexusLeafletMap.invalidateSize(), 0);
  return result;
}

function renderWorkspace({ workspace, command, documentObject = document }) {
  const host = documentObject.getElementById("nexus-workspace");
  const title = documentObject.getElementById("nexus-workspace-title");
  const commandText = documentObject.getElementById("nexus-workspace-command");
  const mapSurface = documentObject.getElementById("nexus-map-surface");
  const mapCanvas = documentObject.getElementById("nexus-map-canvas");
  const mapLink = documentObject.getElementById("nexus-map-link");
  const appSurface = documentObject.getElementById("nexus-app-surface");
  const evidenceSurface = documentObject.getElementById("nexus-evidence-surface");
  const musicSurface = documentObject.getElementById("nexus-music-surface");
  const musicFrame = documentObject.getElementById("nexus-music-frame");
  const musicLink = documentObject.getElementById("nexus-music-link");
  if (!host || !title || !commandText) return false;

  title.textContent = workspace === "maps" ? "Maps / Field Visit"
    : workspace === "music" ? "Music / Media"
      : WORKSPACE_VIEWS[workspace]?.title || workspace;
  commandText.textContent = command || "";
  host.dataset.workspace = workspace;
  host.hidden = false;

  if (mapSurface) mapSurface.hidden = workspace !== "maps";
  if (appSurface) {
    appSurface.hidden = true;
    appSurface.innerHTML = "";
  }
  if (evidenceSurface) {
    evidenceSurface.hidden = true;
    evidenceSurface.innerHTML = "";
  }
  if (musicSurface) musicSurface.hidden = workspace !== "music";
  if (workspace === "maps" && mapLink) mapLink.removeAttribute?.("href");
  if (workspace === "music" && musicFrame && musicLink) {
    const query = musicSearchFromCommand(command);
    const encodedQuery = encodeURIComponent(query);
    musicFrame.src = musicPlaybackUrl(command);
    musicLink.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
  }
  const rendered = workspace === "maps"
    ? Boolean(mapCanvas)
    : workspace === "music"
      ? Boolean(musicFrame && musicFrame.src)
      : workspace === "live-knowledge"
        ? Boolean(evidenceSurface)
        : renderAppSurface({ workspace, command, appSurface });
  host.dataset.populated = rendered ? "true" : "false";
  return rendered;
}

function createRemoteAudioUnlock({ windowObject = window, audioElement } = {}) {
  const AudioContextConstructor = windowObject.AudioContext || windowObject.webkitAudioContext;
  let context = null;
  let source = null;
  let gain = null;
  let volume = 1;

  return Object.freeze({
    unlock() {
      audioElement.autoplay = true;
      audioElement.muted = false;
      audioElement.volume = 1;
      audioElement.setAttribute("playsinline", "");
      if (!AudioContextConstructor) return null;
      if (!context) context = new AudioContextConstructor();
      if (!gain && typeof context.createGain === "function") {
        gain = context.createGain();
        gain.gain.value = volume;
        gain.connect(context.destination);
      }
      return context.state === "suspended" ? context.resume() : Promise.resolve();
    },
    attach(stream) {
      if (!stream || !context || typeof context.createMediaStreamSource !== "function") return false;
      if (source && typeof source.disconnect === "function") source.disconnect();
      source = context.createMediaStreamSource(stream);
      source.connect(gain || context.destination);
      audioElement.muted = true;
      return true;
    },
    setVolume(value) {
      volume = Math.min(1, Math.max(0, Number(value)));
      audioElement.volume = volume;
      if (gain) gain.gain.value = volume;
      return volume;
    },
    close() {
      if (source && typeof source.disconnect === "function") source.disconnect();
      source = null;
      if (context && typeof context.close === "function") context.close().catch(() => {});
      context = null;
      gain = null;
      audioElement.muted = false;
    }
  });
}

function boot() {
  const orb = document.getElementById("nexus-orb");
  const status = document.getElementById("nexus-status");
  const audio = document.getElementById("nexus-audio");
  const caption = document.getElementById("nexus-caption");
  const captionsControl = document.getElementById("nexus-captions");
  const slowSpeechControl = document.getElementById("nexus-slow-speech");
  const volumeControl = document.getElementById("nexus-volume");
  const replayControl = document.getElementById("nexus-replay");
  const workspaceClose = document.getElementById("nexus-workspace-close");
  const workspaceVoiceStatus = document.getElementById("nexus-workspace-voice-status");
  const config = window.NEXUS_CLEAN_CONFIG || {};
  const sessionToken = config.sessionToken || sessionStorage.getItem("nexus.clean.session");
  let activeEvidenceReceipt = null;
  if (!sessionToken) {
    status.textContent = "Sign in to speak with Nexus";
    orb.disabled = true;
    return;
  }
  window.addEventListener("nexus.clean.workspace.open", async (event) => {
    const detail = event.detail || {};
    const workspace = document.getElementById("nexus-workspace");
    if (!workspace || !detail.requestId || !detail.workspace) return;
    if (!renderWorkspace({ workspace: detail.workspace, command: detail.command })) return;
    document.body.classList.add("nexus-workspace-open");
    let evidence = null;
    let mapResult = null;
    let visualSuccess = true;
    const appSurface = document.getElementById("nexus-app-surface");
    const specializedIntent = visualIntent(detail.command);
    if (detail.workspace === "maps") {
      try {
        mapResult = await resolveVisibleMap({ command: detail.command, sessionToken });
      } catch (error) {
        visualSuccess = false;
        if (error.code !== "NEXUS_MAP_REQUEST_SUPERSEDED") {
          const summary = document.getElementById("nexus-map-summary");
          if (summary) summary.textContent = error.message;
        }
      }
    }
    if (detail.workspace === "live-knowledge" && !["weather", "pilot-dashboard", "source-directory"].includes(specializedIntent)) {
      const evidenceSurface = document.getElementById("nexus-evidence-surface");
      try {
        if (activeEvidenceReceipt && isEvidenceDisplayFollowUp(detail.command)) {
          renderEvidenceWorkspace({ receipt: activeEvidenceReceipt, surface: evidenceSurface });
          evidence = activeEvidenceReceipt;
        } else {
          evidence = await researchEvidence({
            question: detail.command,
            sessionToken,
            surface: evidenceSurface
          });
          if (evidence && evidence.id && Array.isArray(evidence.sources) && evidence.sources.length > 0) {
            activeEvidenceReceipt = evidence;
          }
        }
      } catch (error) {
        if (evidenceSurface) {
          evidenceSurface.hidden = false;
          evidenceSurface.innerHTML = `<div class="evidence-summary evidence-limited">${escapeMarkup(error.message)}</div>`;
        }
        evidence = { status: "provider-error", summary: "Approved evidence retrieval failed.", claims: [] };
      }
      visualSuccess = Boolean(evidence && evidence.id && Array.isArray(evidence.sources) && evidence.sources.length > 0);
    }
    if (specializedIntent) {
      try {
        const specialized = await renderSpecializedVisual({
          workspace: detail.workspace,
          command: detail.command,
          sessionToken,
          appSurface
        });
        if (specialized.handled) {
          visualSuccess = specialized.visible === true;
          workspace.dataset.populated = visualSuccess ? "true" : "false";
          if (detail.workspace === "live-knowledge") {
            const evidenceSurface = document.getElementById("nexus-evidence-surface");
            if (evidenceSurface) evidenceSurface.hidden = true;
          }
        }
      } catch (error) {
        visualSuccess = false;
        if (appSurface) {
          appSurface.hidden = false;
          appSurface.innerHTML = `<div class="evidence-summary evidence-limited">${escapeMarkup(error.message)}</div>`;
        }
      }
    }
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
        detail: Object.freeze({
          requestId: detail.requestId,
          acknowledgementId: `visible-${detail.requestId}`,
          workspace: detail.workspace,
          visible: visualSuccess && !workspace.hidden && workspace.dataset.populated === "true",
          populated: visualSuccess && workspace.dataset.populated === "true",
          mapStatus: mapResult && mapResult.status || null,
          evidenceReceiptId: evidence && evidence.id || null,
          evidenceStatus: evidence && evidence.status || null,
                evidenceSummary: evidence && evidence.summary || null,
                evidenceClaims: evidence && evidence.claims || [],
                evidenceSourceCount: evidence && Array.isArray(evidence.sources) ? evidence.sources.length : 0,
                evidenceLinksVisible: Boolean(
                  evidence && Array.isArray(evidence.sources) &&
                  evidence.sources.some((source) => Boolean(safeExternalUrl(source.url)))
                )
        })
      }));
    });
  });
  if (workspaceClose) {
    workspaceClose.addEventListener("click", () => {
      const workspace = document.getElementById("nexus-workspace");
      if (workspace) workspace.hidden = true;
      document.body.classList.remove("nexus-workspace-open");
      orb.focus();
    });
  }
  document.addEventListener("click", (event) => {
    const button = event.target && event.target.closest && event.target.closest("button");
    if (!button) return;
    if (button.dataset.resumeAction === "print" || button.dataset.providerCardAction === "print") {
      window.print();
      return;
    }
    if (button.dataset.resumeAction === "download") {
      const form = button.closest("form");
      const fields = form ? [...form.querySelectorAll("input, textarea")].map((field) =>
        `${field.getAttribute("aria-label") || "Field"}: ${field.value || ""}`
      ) : [];
      const blob = new Blob([fields.join("\n\n")], { type: "text/plain;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "nexus-resume.txt";
      link.click();
      URL.revokeObjectURL(link.href);
      return;
    }
    if (button.dataset.providerCardAction === "read") {
      const card = button.closest("[data-nexus-visual='provider-card']");
      const text = card && card.innerText || "";
      if (text && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
      }
    }
  });

  const receipts = [];
  let preferences = DEFAULT_EXPERIENCE_PREFERENCES;
  try {
    preferences = normalizeExperiencePreferences(JSON.parse(
      localStorage.getItem("nexus.genesis.preferences") || "{}"
    ));
  } catch {
    preferences = DEFAULT_EXPERIENCE_PREFERENCES;
  }
  captionsControl.checked = preferences.captions;
  slowSpeechControl.checked = preferences.pace === "slow";
  volumeControl.value = String(Math.round(preferences.volume * 100));
  const remoteAudio = createRemoteAudioUnlock({ audioElement: audio });
  remoteAudio.setVolume(preferences.volume);
  caption.hidden = !preferences.captions;
  const onReceipt = (receipt) => {
    receipts.push(receipt);
    const workspaceStatusLabels = {
      "conversation.listening": "Nexus is listening in the background",
      "conversation.response-started": "Nexus is thinking…",
      "conversation.audio-started": "Nexus is speaking…",
      "conversation.response-finished": "Nexus is listening in the background",
      "workspace.visible": "Nexus is listening in the background",
      "realtime.error": "Nexus voice needs attention"
    };
    if (workspaceVoiceStatus && workspaceStatusLabels[receipt.type]) {
      workspaceVoiceStatus.textContent = workspaceStatusLabels[receipt.type];
    }
    if (receipt.type === "realtime.remote-track") {
      const attached = remoteAudio.attach(receipt.detail && receipt.detail.stream);
      if (attached) {
        receipts.push(Object.freeze({
          schema: "nexus.runtime.receipt.v1",
          type: "audio.web-audio-attached",
          detail: Object.freeze({}),
          at: new Date().toISOString()
        }));
      }
    }
    const label = statusFromReceipt(receipt);
    if (label) {
      status.textContent = label;
      status.dataset.state = label.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
    }
    if (receipt.type === "transcript.final") {
      caption.textContent = receipt.detail.transcript || "";
      caption.hidden = !preferences.captions;
    }
    if (receipt.type === "conversation.return-to-listening") replayControl.disabled = false;
    window.dispatchEvent(new CustomEvent("nexus.clean.receipt", { detail: receipt }));
  };
  const machine = new NexusConnectionMachine({ onReceipt });
  const microphone = new NexusMicrophoneController({
    mediaDevices: navigator.mediaDevices,
    onReceipt
  });
  const realtime = new NexusRealtimeConnector({
    createPeerConnection: () => new RTCPeerConnection(),
    fetchSession: async ({ sessionToken: token }) => {
      const response = await fetch("/api/voice/session", {
        method: "POST",
        headers: { authorization: `Bearer ${token}` }
      });
      if (!response.ok) throw new Error(`Nexus session request failed (${response.status}).`);
      return response.json();
    },
    exchangeSdp: async ({ clientSecret, offerSdp }) => {
      const response = await fetch("https://api.openai.com/v1/realtime/calls", {
        method: "POST",
        headers: {
          authorization: `Bearer ${clientSecret}`,
          "content-type": "application/sdp"
        },
        body: offerSdp
      });
      if (!response.ok) throw new Error(`Realtime SDP exchange failed (${response.status}).`);
      return response.text();
    },
    onEvent: onReceipt
  });
  const opaqueSession = {
    verify(token) {
      if (!token) throw new Error("A signed-in Nexus session is required.");
      return Object.freeze({ authenticated: true });
    }
  };
  const foundation = new NexusVoiceFoundation({
    sessionAuthority: opaqueSession,
    machine,
    microphone,
    realtime
  });
  const runtime = new NexusBrowserRuntime({
    foundation,
    realtime,
    audioElement: audio,
    openWorkspace: createWorkspaceAdapter(),
    onReceipt
  });
  runtime.updateExperiencePreferences(preferences);

  function savePreferences(change) {
    preferences = runtime.updateExperiencePreferences({ ...preferences, ...change });
    localStorage.setItem("nexus.genesis.preferences", JSON.stringify(preferences));
  }
  captionsControl.addEventListener("change", () => {
    savePreferences({ captions: captionsControl.checked });
    caption.hidden = !captionsControl.checked;
  });
  slowSpeechControl.addEventListener("change", () => {
    savePreferences({ pace: slowSpeechControl.checked ? "slow" : "natural" });
  });
  volumeControl.addEventListener("input", () => {
    const volume = Number(volumeControl.value) / 100;
    remoteAudio.setVolume(volume);
    savePreferences({ volume });
  });
  replayControl.addEventListener("click", () => {
    try {
      runtime.replayLastResponse();
    } catch (error) {
      status.textContent = error.message;
    }
  });

  orb.addEventListener("click", async () => {
    if (runtime.started) {
      runtime.stop("user-stop");
      remoteAudio.close();
      orb.setAttribute("aria-pressed", "false");
      status.textContent = "Speak";
      return;
    }
    orb.disabled = true;
    try {
      await remoteAudio.unlock();
      await runtime.start({ sessionToken, userGesture: true });
      orb.setAttribute("aria-pressed", "true");
    } catch (error) {
      status.textContent = "Voice connection unavailable";
      onReceipt({
        schema: "nexus.runtime.receipt.v1",
        type: "runtime.start-failed",
        detail: { name: error.name, message: error.message },
        at: new Date().toISOString()
      });
    } finally {
      orb.disabled = false;
    }
  });

  window.NexusCleanRuntime = Object.freeze({
    start: () => runtime.start({ sessionToken, userGesture: true }),
    stop: (reason) => runtime.stop(reason),
    route: (command) => runtime.route(command),
    certificationAudio: config.certification ? Object.freeze({
      begin() {
        const track = microphone.stream?.getAudioTracks?.()[0];
        if (!track || track.readyState !== "live") throw new Error("Physical microphone is not live.");
        track.enabled = false;
        realtime.send({
          type: "session.update",
          session: {
            type: "realtime",
            audio: { input: { turn_detection: null } }
          }
        });
      },
      send(chunks) {
        realtime.send({ type: "input_audio_buffer.clear" });
        for (const audio of chunks) {
          realtime.send({ type: "input_audio_buffer.append", audio });
        }
        realtime.send({ type: "input_audio_buffer.commit" });
        realtime.send({ type: "response.create" });
      },
      end() {
        const track = microphone.stream?.getAudioTracks?.()[0];
        if (track && track.readyState === "live") track.enabled = true;
        runtime.configureSession();
      }
    }) : null,
    snapshot: () => Object.freeze({ state: machine.snapshot(), receipts: [...receipts] })
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
}

module.exports = {
  createWorkspaceAdapter,
  createRemoteAudioUnlock,
  renderWorkspace,
  renderSpecializedVisual,
  visualIntent,
  weatherDescription,
  fetchVisualData,
  renderEvidenceWorkspace,
  researchEvidence,
  resolveVisibleMap,
  resetVisibleMapStateForTest,
  safeExternalUrl,
  isEvidenceDisplayFollowUp,
  musicSearchFromCommand,
  statusFromReceipt
};
