(function installNexusBrowserActionController(global) {
  const seen = new Map();
  const replayWindowMs = 10000;
  const providerCardSeen = new Map();
  const providerCardReplayWindowMs = 2500;
  function text(value) { return String(value || "").trim(); }
  function html(value) {
    return text(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }
  function providerQuestionRequest(command = "") {
    const value = text(command).toLowerCase();
    const provider = /\b(doctor|physician|clinician|nurse|care team|community health worker|chw|pharmacist|pharmacy)\b/.test(value);
    const visual = /\b(show|display|open|create|prepare|make|list|write|give me|build)\b/.test(value);
    const questions = /\b(question|questions|checklist|card|document|report|summary|what (?:do|should|can) i ask)\b/.test(value);
    return provider && visual && questions;
  }
  function providerAudience(command = "") {
    return /\b(pharmacist|pharmacy|medicine|medication|prescription|refill)\b/i.test(command)
      ? "pharmacist"
      : "clinician";
  }
  function extractProviderCardFacts(command = "") {
    const value = text(command);
    const bp = value.match(/\b(\d{2,3})\s*(?:\/|over)\s*(\d{2,3})\b/i);
    const glucose = value.match(/\b(?:glucose|blood sugar)\s*(?:is|was|of|at)?\s*(\d{2,3})\b/i);
    const medication = value.match(/\b(?:take|taking|medicine is|medication is|prescribed)\s+([^,.!?;]+)/i);
    const symptoms = value.match(/\b(?:i have|i feel|symptoms? (?:are|include))\s+([^.!?;]+)/i);
    return {
      concern: symptoms?.[1]?.trim() || "Please review my concern and help me understand the safest next step.",
      medications: medication?.[1]?.trim() || "Not provided yet",
      allergies: "Not provided yet",
      readings: [
        bp ? `Blood pressure: ${bp[1]}/${bp[2]}` : "",
        glucose ? `Blood glucose: ${glucose[1]}` : ""
      ].filter(Boolean).join("; ") || "Not provided yet"
    };
  }
  function providerQuestions(audience = "clinician") {
    if (audience === "pharmacist") {
      return [
        ["💊", "What is this medicine for?"],
        ["🥄", "How much should I take, and when should I take it?"],
        ["🍽️", "Should I take it with food or water?"],
        ["⚠️", "What side effects or danger signs should I watch for?"],
        ["🔄", "Can I take it with my other medicines or traditional remedies?"],
        ["⏰", "What should I do if I miss a dose?"],
        ["📦", "How should I store it, and when does it expire?"],
        ["🩺", "When should I contact a clinician or seek urgent care?"]
      ];
    }
    return [
      ["🩺", "What may be causing these symptoms or readings?"],
      ["🔎", "What examinations or tests should I ask about?"],
      ["💊", "Could my medicines be related to this concern?"],
      ["📈", "Which readings should I track, and how often?"],
      ["🥗", "What food, activity, or daily-routine changes are safe for me?"],
      ["⚠️", "Which danger signs mean I should seek urgent care?"],
      ["📅", "When should I return or follow up?"],
      ["📝", "What should I write down or bring to my next visit?"]
    ];
  }
  function ensureProviderCardStyles() {
    if (typeof document === "undefined" || document.getElementById("nexus-rural-provider-card-styles")) return;
    const style = document.createElement("style");
    style.id = "nexus-rural-provider-card-styles";
    style.textContent = `
      .nexus-rural-provider-card-shell{position:fixed;inset:0;z-index:2147483000;background:rgba(4,12,24,.88);display:grid;place-items:center;padding:18px;font-family:Inter,system-ui,sans-serif;color:#102033}
      .nexus-rural-provider-card{width:min(920px,100%);max-height:94vh;overflow:auto;background:#fff;border-radius:24px;box-shadow:0 28px 90px rgba(0,0,0,.48)}
      .nexus-rural-provider-card header{position:sticky;top:0;z-index:2;background:#073b4c;color:#fff;padding:20px 24px;display:flex;gap:16px;align-items:center;justify-content:space-between}
      .nexus-rural-provider-card h1{font-size:clamp(1.55rem,4vw,2.35rem);margin:0}.nexus-rural-provider-card header p{margin:4px 0 0;font-size:1rem}
      .nexus-rural-provider-card-close{font-size:2rem;line-height:1;border:0;background:#fff;color:#073b4c;border-radius:50%;width:48px;height:48px;cursor:pointer}
      .nexus-rural-provider-card-body{padding:24px}.nexus-rural-provider-card-alert{border:3px solid #d62828;background:#fff3f3;border-radius:14px;padding:14px 16px;font-weight:800;font-size:1.05rem}
      .nexus-rural-provider-card-facts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0}
      .nexus-rural-provider-card-fact{border:2px solid #d6e2e8;border-radius:14px;padding:14px;background:#f7fbfc}.nexus-rural-provider-card-fact strong{display:block;font-size:1rem;color:#07566b;margin-bottom:5px}.nexus-rural-provider-card-fact span{font-size:1.15rem}
      .nexus-rural-provider-card h2{font-size:1.5rem;margin:24px 0 12px}.nexus-rural-provider-card-questions{list-style:none;padding:0;margin:0;display:grid;gap:10px}
      .nexus-rural-provider-card-questions li{display:grid;grid-template-columns:54px 1fr;gap:12px;align-items:center;border:2px solid #bfd1d8;border-radius:16px;padding:13px;background:#fff;font-size:clamp(1.1rem,2.4vw,1.35rem);font-weight:700}
      .nexus-rural-provider-card-number{display:grid;place-items:center;width:52px;height:52px;border-radius:14px;background:#06d6a0;color:#063c31;font-size:1.25rem}
      .nexus-rural-provider-card-actions{display:flex;flex-wrap:wrap;gap:10px;padding:20px 24px;background:#eef7f8;border-radius:0 0 24px 24px}
      .nexus-rural-provider-card-actions button{border:0;border-radius:12px;padding:13px 16px;background:#07566b;color:#fff;font-size:1rem;font-weight:800;cursor:pointer}.nexus-rural-provider-card-actions button[data-card-action="close"]{background:#46545a}
      .nexus-rural-provider-card-boundary{margin-top:18px;padding:12px;border-left:5px solid #118ab2;background:#eef9fd;font-weight:650}
      @media(max-width:640px){.nexus-rural-provider-card-shell{padding:0}.nexus-rural-provider-card{max-height:100vh;height:100%;border-radius:0}.nexus-rural-provider-card-facts{grid-template-columns:1fr}.nexus-rural-provider-card-body{padding:16px}}
      @media print{body>*:not(.nexus-rural-provider-card-shell){display:none!important}.nexus-rural-provider-card-shell{position:static;background:#fff;padding:0}.nexus-rural-provider-card{width:100%;max-height:none;box-shadow:none}.nexus-rural-provider-card-close,.nexus-rural-provider-card-actions{display:none!important}.nexus-rural-provider-card header{position:static;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
    `;
    document.head.appendChild(style);
  }
  function providerCardPlainText(card = {}) {
    const lines = [
      card.title,
      `Created: ${card.createdLabel}`,
      `Main concern: ${card.facts.concern}`,
      `Medicines: ${card.facts.medications}`,
      `Allergies: ${card.facts.allergies}`,
      `Recent readings: ${card.facts.readings}`,
      "",
      ...card.questions.map((item, index) => `${index + 1}. ${item[1]}`),
      "",
      "This communication card supports a conversation with a qualified healthcare professional. It is not a diagnosis or prescription."
    ];
    return lines.join("\n");
  }
  function saveProviderCardOffline(card = {}) {
    try {
      const current = JSON.parse(global.localStorage?.getItem("nexus.rural-provider-cards.v1") || "[]");
      const cards = [card, ...(Array.isArray(current) ? current : [])].slice(0, 20);
      global.localStorage?.setItem("nexus.rural-provider-cards.v1", JSON.stringify(cards));
      return true;
    } catch {
      return false;
    }
  }
  function downloadProviderCard(card = {}) {
    if (typeof document === "undefined" || typeof Blob === "undefined") return false;
    const content = providerCardPlainText(card);
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `nexus-${card.audience}-questions-${new Date().toISOString().slice(0, 10)}.txt`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  }
  async function shareProviderCard(card = {}) {
    const content = providerCardPlainText(card);
    if (!global.confirm?.("Share this health communication card? Review it first and share only with a person you trust.")) return false;
    if (global.navigator?.share) {
      await global.navigator.share({ title: card.title, text: content });
      return true;
    }
    await global.navigator?.clipboard?.writeText?.(content);
    global.alert?.("The provider card was copied. You can paste it into an approved message after reviewing the recipient.");
    return true;
  }
  function readProviderCard(card = {}) {
    if (!global.speechSynthesis || typeof global.SpeechSynthesisUtterance !== "function") return false;
    global.speechSynthesis.cancel();
    const utterance = new global.SpeechSynthesisUtterance(providerCardPlainText(card));
    utterance.lang = document?.documentElement?.lang || "en";
    global.speechSynthesis.speak(utterance);
    return true;
  }
  function openRuralProviderCard(command = "", options = {}) {
    if (typeof document === "undefined" || !document.body) return { opened: false, reason: "document-unavailable" };
    const normalized = text(command).toLowerCase().replace(/\s+/g, " ");
    const now = Date.now();
    for (const [key, at] of providerCardSeen) if (now - at > providerCardReplayWindowMs) providerCardSeen.delete(key);
    if (!options.force && providerCardSeen.has(normalized)) return { opened: false, duplicate: true };
    providerCardSeen.set(normalized, now);
    ensureProviderCardStyles();
    document.querySelector("[data-nexus-rural-provider-card-shell]")?.remove();
    const audience = providerAudience(command);
    const facts = extractProviderCardFacts(command);
    const questions = providerQuestions(audience);
    const card = {
      schemaVersion: "nexus-rural-provider-communication-card.v1",
      id: `provider-card-${Date.now().toString(36)}`,
      audience,
      title: audience === "pharmacist" ? "Questions for My Pharmacist" : "Questions for My Doctor or Nurse",
      createdAt: new Date().toISOString(),
      createdLabel: new Date().toLocaleString(),
      language: document.documentElement.lang || "en",
      facts,
      questions,
      reviewOnly: true,
      localOnly: true,
      providerContacted: false,
      diagnosisMade: false,
      medicationChanged: false
    };
    saveProviderCardOffline(card);
    const shell = document.createElement("div");
    shell.className = "nexus-rural-provider-card-shell";
    shell.dataset.nexusRuralProviderCardShell = "true";
    shell.setAttribute("role", "dialog");
    shell.setAttribute("aria-modal", "true");
    shell.setAttribute("aria-labelledby", "nexus-rural-provider-card-title");
    shell.innerHTML = `
      <article class="nexus-rural-provider-card" data-nexus-rural-provider-card="${html(card.id)}" data-audience="${html(audience)}" data-local-only="true" data-provider-contacted="false">
        <header>
          <div><h1 id="nexus-rural-provider-card-title">${audience === "pharmacist" ? "💊" : "🩺"} ${html(card.title)}</h1><p>Show this card, play it aloud, print it, or save it for the visit.</p></div>
          <button class="nexus-rural-provider-card-close" data-card-action="close" aria-label="Close provider card">×</button>
        </header>
        <div class="nexus-rural-provider-card-body">
          <div class="nexus-rural-provider-card-alert">🚨 If there is chest pain, severe trouble breathing, fainting, confusion, stroke signs, severe bleeding, or another immediate danger, seek local emergency help now.</div>
          <div class="nexus-rural-provider-card-facts">
            <div class="nexus-rural-provider-card-fact"><strong>🗣️ Main concern</strong><span>${html(facts.concern)}</span></div>
            <div class="nexus-rural-provider-card-fact"><strong>💊 Medicines</strong><span>${html(facts.medications)}</span></div>
            <div class="nexus-rural-provider-card-fact"><strong>⚠️ Allergies</strong><span>${html(facts.allergies)}</span></div>
            <div class="nexus-rural-provider-card-fact"><strong>📊 Recent readings</strong><span>${html(facts.readings)}</span></div>
          </div>
          <h2>Questions to ask</h2>
          <ol class="nexus-rural-provider-card-questions">
            ${questions.map((item, index) => `<li><span class="nexus-rural-provider-card-number">${html(item[0])}<small>${index + 1}</small></span><span>${html(item[1])}</span></li>`).join("")}
          </ol>
          <div class="nexus-rural-provider-card-boundary">Nexus prepared this communication aid from the current request. A qualified clinician or pharmacist must make medical and medication decisions.</div>
        </div>
        <footer class="nexus-rural-provider-card-actions" aria-label="Provider card actions">
          <button data-card-action="read">🔊 Read aloud</button>
          <button data-card-action="stop">⏹ Stop reading</button>
          <button data-card-action="fullscreen">⛶ Full screen</button>
          <button data-card-action="print">🖨 Print / Save PDF</button>
          <button data-card-action="download">⬇ Download</button>
          <button data-card-action="share">↗ Share with consent</button>
          <button data-card-action="close">Close</button>
        </footer>
      </article>
    `;
    shell.addEventListener("click", event => {
      const action = event.target?.closest?.("[data-card-action]")?.dataset?.cardAction;
      if (!action) return;
      if (action === "close") shell.remove();
      if (action === "read") readProviderCard(card);
      if (action === "stop") global.speechSynthesis?.cancel?.();
      if (action === "fullscreen") shell.querySelector(".nexus-rural-provider-card")?.requestFullscreen?.();
      if (action === "print") global.print?.();
      if (action === "download") downloadProviderCard(card);
      if (action === "share") void shareProviderCard(card);
    });
    document.body.appendChild(shell);
    shell.querySelector(".nexus-rural-provider-card-close")?.focus?.();
    global.dispatchEvent?.(new global.CustomEvent("nexus.provider-card.opened", { detail: { cardId: card.id, audience, source: options.source || "command" } }));
    return { opened: true, card };
  }
  function commandFromTypedSurface(event = {}) {
    const submit = event.target?.closest?.("[data-nexus-command-center-submit]");
    if (!submit) return "";
    const targetId = submit.dataset?.nexusCommandInputTarget || "nexusCommandCenterInput";
    return text(document.getElementById(targetId)?.value || document.getElementById("nexusCommandCenterInput")?.value);
  }
  if (typeof document !== "undefined") {
    document.addEventListener("click", event => {
      const command = commandFromTypedSurface(event);
      if (providerQuestionRequest(command)) setTimeout(() => openRuralProviderCard(command, { source: "typed-command" }), 0);
    }, true);
    document.addEventListener("keydown", event => {
      if (event.key !== "Enter" || event.shiftKey) return;
      const input = event.target?.closest?.("#nexusCommandCenterInput");
      const command = text(input?.value);
      if (providerQuestionRequest(command)) setTimeout(() => openRuralProviderCard(command, { source: "typed-command-enter" }), 0);
    }, true);
  }
  function handleFinalUserTranscript(input = {}, actionBuilder) {
    const transcript = text(input.transcript);
    const role = text(input.role || "user").toLowerCase();
    const sessionId = text(input.sessionId || "unknown-session");
    const transcriptId = text(input.transcriptId || (sessionId + ":" + transcript));
    if (!transcript || role !== "user" || input.isFinal !== true) return { handled: false };
    const now = Date.now();
    for (const [key, at] of seen) if (now - at > replayWindowMs) seen.delete(key);
    if (seen.has(sessionId + ":" + transcriptId)) return { handled: false, duplicate: true };
    const providerCard = providerQuestionRequest(transcript)
      ? openRuralProviderCard(transcript, { source: "voice-final-transcript" })
      : null;
    const action = typeof actionBuilder === "function" ? actionBuilder(transcript) : null;
    if (!action && !providerCard?.opened) return { handled: false };
    seen.set(sessionId + ":" + transcriptId, now);
    return { handled: true, ...(action || {}), providerCardOpened: providerCard?.opened === true, transcriptId, sessionId, originalTranscript: transcript };
  }
  global.NexusBrowserActionController = Object.freeze({
    handleFinalUserTranscript,
    isRuralProviderCardRequest: providerQuestionRequest,
    openRuralProviderCard
  });
})(window);
