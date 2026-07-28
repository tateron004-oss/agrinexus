"use strict";

const { NexusConnectionMachine } = require("../nexus-core/connection-machine");
const { NexusMicrophoneController } = require("../nexus-core/microphone-controller");
const { NexusRealtimeConnector } = require("../nexus-core/realtime-connector");
const { NexusVoiceFoundation } = require("../nexus-core/voice-foundation");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");
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
        evidenceClaims: event.detail.evidenceClaims || []
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

function musicSearchFromCommand(command) {
  return String(command || "Kenyan music")
    .replace(/\b(nexus|please|play|open|music|media|song|songs)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim() || "Kenyan music";
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
        ${sources.map((source) => `<article class="evidence-source">
          <strong>[${escapeMarkup(source.id)}] ${escapeMarkup(source.title)}</strong>
          <span>${escapeMarkup(source.organization)}</span>
          <a href="${escapeMarkup(source.url)}" target="_blank" rel="noopener noreferrer">Open source</a>
          <small>Published: ${escapeMarkup(source.publishedAt || "date not provided")} · Retrieved: ${escapeMarkup(source.retrievedAt)}</small>
        </article>`).join("")}
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

function renderWorkspace({ workspace, command, documentObject = document }) {
  const host = documentObject.getElementById("nexus-workspace");
  const title = documentObject.getElementById("nexus-workspace-title");
  const commandText = documentObject.getElementById("nexus-workspace-command");
  const mapSurface = documentObject.getElementById("nexus-map-surface");
  const mapFrame = documentObject.getElementById("nexus-map-frame");
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
  if (workspace === "maps" && mapFrame && mapLink) {
    mapFrame.src = "https://www.openstreetmap.org/export/embed.html?bbox=33.5%2C-5.2%2C42.2%2C5.5&layer=mapnik";
    mapLink.href = /\bkenya\b/i.test(command || "")
      ? "https://www.openstreetmap.org/search?query=Kenya"
      : `https://www.openstreetmap.org/search?query=${encodeURIComponent(command || "Kenya")}`;
  }
  if (workspace === "music" && musicFrame && musicLink) {
    const query = musicSearchFromCommand(command);
    const encodedQuery = encodeURIComponent(query);
    musicFrame.src = musicPlaybackUrl(command);
    musicLink.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
  }
  const rendered = workspace === "maps"
    ? Boolean(mapFrame && mapFrame.src)
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
    if (detail.workspace === "live-knowledge") {
      const evidenceSurface = document.getElementById("nexus-evidence-surface");
      try {
        evidence = await researchEvidence({
          question: detail.command,
          sessionToken,
          surface: evidenceSurface
        });
      } catch (error) {
        if (evidenceSurface) {
          evidenceSurface.hidden = false;
          evidenceSurface.innerHTML = `<div class="evidence-summary evidence-limited">${escapeMarkup(error.message)}</div>`;
        }
        evidence = { status: "provider-error", summary: "Approved evidence retrieval failed.", claims: [] };
      }
    }
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
        detail: Object.freeze({
          requestId: detail.requestId,
          acknowledgementId: `visible-${detail.requestId}`,
          workspace: detail.workspace,
          visible: !workspace.hidden && workspace.dataset.populated === "true",
          populated: workspace.dataset.populated === "true",
          evidenceReceiptId: evidence && evidence.id || null,
          evidenceStatus: evidence && evidence.status || null,
          evidenceSummary: evidence && evidence.summary || null,
          evidenceClaims: evidence && evidence.claims || []
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
  renderEvidenceWorkspace,
  researchEvidence,
  statusFromReceipt
};
