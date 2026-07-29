(function installNexusBrowserActionController(global) {
  const seen = new Map();
  const replayWindowMs = 10000;
  const providerCardSeen = new Map();
  const providerCardReplayWindowMs = 2500;
  const pilotEvidenceStorageKey = "nexus.pilot-evidence.v1";
  const pilotConsentStorageKey = "nexus.pilot-evidence-consent.v1";
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
  function pilotEvidenceRequest(command = "") {
    const value = text(command).toLowerCase();
    return /\b(open|show|display|create|prepare|generate|view)\b/.test(value)
      && /\b(pilot evidence|pilot dashboard|governance dashboard|implementation report|learning brief|scale[- ]?up (?:plan|options|scenarios)|pilot report)\b/.test(value);
  }
  function weatherRequest(command = "") {
    const value = text(command).toLowerCase();
    return /\b(weather|forecast|temperature|rain|raining|heat|hali ya hewa|clima|meteo|météo)\b/.test(value);
  }
  function visualExperienceIntent(command = "") {
    const value = text(command).toLowerCase();
    if (!value) return "";
    if (weatherRequest(value)) return "";
    if (/\b(map|maps|show (?:me )?(?:nairobi|mombasa|kenya)|reset (?:the )?map|return to kenya)\b/.test(value)) return "map";
    if (/\b(agriculture help|agricultural help|farm help|crop help|help (?:me )?with (?:agriculture|farming|my crop))\b/.test(value)) return "agriculture";
    if (/\b(maize|corn)\b.*\b(picture|pictures|photo|photos|image|images|disease|yellow|spot|spots|leaf|leaves)\b|\b(picture|pictures|photo|photos|image|images)\b.*\b(maize|corn)\b/.test(value)) return "maize-images";
    if (/\b(create|make|build|write|prepare|help me (?:create|make|write))\b.*\b(r[eé]sum[eé]|cv|curriculum vitae)\b/.test(value)) return "resume";
    if (/\b(show|open|display|give)\b.*\b(website|web site|link|source|sources|resource|resources)\b/.test(value)) return "sources";
    if (/\b(show|open|display|create|make)\b.*\b(card|visual|list|document|report|workspace|process)\b/.test(value)) return "display";
    return "";
  }
  function ensureVisualExperienceStyles() {
    if (typeof document === "undefined" || document.getElementById("nexus-visual-experience-styles")) return;
    const style = document.createElement("style");
    style.id = "nexus-visual-experience-styles";
    style.textContent = `
      .nexus-visual-shell{position:fixed;inset:0;z-index:2147482997;background:rgba(2,12,24,.9);display:grid;place-items:center;padding:16px;font-family:Inter,system-ui,sans-serif;color:#102033}
      .nexus-visual-card{width:min(1080px,100%);max-height:96vh;overflow:auto;background:#f7fbfc;border-radius:24px;box-shadow:0 28px 90px rgba(0,0,0,.5)}
      .nexus-visual-card>header{position:sticky;top:0;z-index:2;background:#073b4c;color:#fff;padding:20px 24px;display:flex;justify-content:space-between;gap:16px;align-items:start}.nexus-visual-card h1{margin:0;font-size:clamp(1.5rem,4vw,2.4rem)}.nexus-visual-card header p{margin:.35rem 0 0}
      .nexus-visual-close{width:48px;height:48px;border:0;border-radius:50%;background:#fff;color:#073b4c;font-size:2rem;flex:none}.nexus-visual-body{padding:22px}.nexus-visual-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px}
      .nexus-visual-panel{background:#fff;border:2px solid #c7dce3;border-radius:16px;padding:17px}.nexus-visual-panel h2,.nexus-visual-panel h3{color:#07566b}.nexus-visual-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}.nexus-visual-actions button,.nexus-visual-actions a{border:0;border-radius:10px;background:#07566b;color:#fff;padding:12px 15px;font-weight:800;text-decoration:none}
      .nexus-visual-source{border-left:6px solid #06a77d;background:#effcf7}.nexus-map-frame{width:100%;height:min(62vh,620px);border:0;border-radius:16px;background:#dceef2}.nexus-disease-image{width:100%;height:190px;object-fit:cover;border-radius:12px;background:#dceef2}.nexus-resume-field{display:grid;gap:5px;margin:10px 0}.nexus-resume-field input,.nexus-resume-field textarea{font:inherit;border:2px solid #9db9c2;border-radius:9px;padding:10px}.nexus-resume-field textarea{min-height:90px}
      @media(max-width:600px){.nexus-visual-shell{padding:0}.nexus-visual-card{height:100%;max-height:none;border-radius:0}.nexus-map-frame{height:52vh}}
      @media print{body>*:not(.nexus-visual-shell){display:none!important}.nexus-visual-shell{position:static;background:#fff;padding:0}.nexus-visual-card{box-shadow:none;max-height:none}.nexus-visual-card>header,.nexus-visual-actions{position:static}.nexus-visual-close{display:none}}
    `;
    document.head.appendChild(style);
  }
  function visualShell(title, subtitle = "Nexus visual workspace") {
    ensureVisualExperienceStyles();
    document.querySelector("[data-nexus-visual-shell]")?.remove();
    const shell = document.createElement("div");
    shell.className = "nexus-visual-shell";
    shell.dataset.nexusVisualShell = "true";
    shell.setAttribute("role", "dialog");
    shell.setAttribute("aria-modal", "true");
    shell.innerHTML = `<article class="nexus-visual-card"><header><div><h1>${html(title)}</h1><p>${html(subtitle)}</p></div><button class="nexus-visual-close" data-visual-action="close" aria-label="Close visual workspace">×</button></header><div class="nexus-visual-body"><p>Opening…</p></div></article>`;
    shell.addEventListener("click", event => {
      const action = event.target?.closest?.("[data-visual-action]")?.dataset?.visualAction;
      if (action === "close") shell.remove();
      if (action === "print") global.print?.();
      if (action === "download-resume") downloadResume(shell);
    });
    document.body.appendChild(shell);
    return shell;
  }
  function requestedMapPlace(command = "") {
    const match = text(command).match(/\b(Nairobi|Mombasa|Kisumu|Nakuru|Nyeri|Eldoret|Meru|Machakos|Kakamega|Kisii|Malindi|Lamu|Kenya)\b/i);
    return match?.[1] || "Kenya";
  }
  async function openReliableMap(command = "", options = {}) {
    if (typeof document === "undefined" || typeof global.fetch !== "function") return { opened: false, reason: "browser-unavailable" };
    const requested = requestedMapPlace(command);
    const shell = visualShell(`🗺️ Map of ${requested}`, "Interactive OpenStreetMap — reset-safe");
    const body = shell.querySelector(".nexus-visual-body");
    try {
      const known = {
        kenya: [0.0236, 37.9062, 6.8], nairobi: [-1.2864, 36.8172, 12], mombasa: [-4.0435, 39.6682, 12],
        kisumu: [-0.0917, 34.768, 12], nakuru: [-0.3031, 36.08, 12], nyeri: [-0.4197, 36.9476, 12],
        eldoret: [0.5143, 35.2698, 12], meru: [0.0463, 37.6559, 12], machakos: [-1.5177, 37.2634, 12],
        kakamega: [0.2827, 34.7519, 12], kisii: [-0.6817, 34.7667, 12], malindi: [-3.2192, 40.1169, 12], lamu: [-2.2696, 40.9006, 12]
      };
      let point = known[requested.toLowerCase()];
      if (!point) {
        const response = await global.fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(requested)}&count=1&language=en&format=json`);
        const place = response.ok ? (await response.json())?.results?.[0] : null;
        if (!place) throw new Error("location not found");
        point = [place.latitude, place.longitude, 12];
      }
      const [lat, lon, zoom] = point;
      const span = zoom < 8 ? 8 : .18;
      const bbox = [lon - span, lat - span, lon + span, lat + span].join("%2C");
      const embed = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
      const direct = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`;
      body.innerHTML = `<iframe class="nexus-map-frame" title="Interactive map of ${html(requested)}" src="${embed}"></iframe>
        <section class="nexus-visual-panel nexus-visual-source"><strong>Visible location: ${html(requested)}, Kenya</strong><p>Map supplied by OpenStreetMap contributors. This command creates a fresh map each time, so an earlier India or other location cannot remain stuck.</p></section>
        <div class="nexus-visual-actions"><a href="${direct}" target="_blank" rel="noopener noreferrer">Open full map website ↗</a><button data-visual-action="close">Close and keep listening</button></div>`;
      global.dispatchEvent?.(new global.CustomEvent("nexus.map.opened", { detail: { location: requested, visible: true, reset: true, source: "OpenStreetMap" } }));
      recordPilotEvidence({ topic: "maps", outcome: "completed", pathway: options.source?.includes("voice") ? "voice" : "typed", durationBand: "under-2-min", language: document.documentElement.lang || "unknown" });
      return { opened: true, location: requested, reset: true };
    } catch (error) {
      body.innerHTML = `<section class="nexus-visual-panel"><h2>Map could not load</h2><p>${html(error?.message || "Map service unavailable")}</p><p>Nexus did not show a substitute location.</p></section><div class="nexus-visual-actions"><a href="https://www.openstreetmap.org/search?query=${encodeURIComponent(requested + ", Kenya")}" target="_blank" rel="noopener noreferrer">Open ${html(requested)} on OpenStreetMap ↗</a><button data-visual-action="close">Close</button></div>`;
      return { opened: true, failed: true };
    }
  }
  function agricultureResources() {
    return [
      ["Kenya Agricultural & Livestock Research Organization", "https://www.kalro.org/", "Kenyan crop research and extension resources"],
      ["FAO Plant Production and Protection", "https://www.fao.org/plant-production-protection/en/", "International crop and plant-health guidance"],
      ["Plantwise Knowledge Bank", "https://plantwiseplusknowledgebank.org/", "Crop problem identification and management factsheets"],
      ["CABI Maize resources", "https://www.cabi.org/crop-protection/maize/", "Maize crop-protection information"]
    ];
  }
  function resourceCards(resources) {
    return resources.map(([name, url, note]) => `<article class="nexus-visual-panel nexus-visual-source"><h3>${html(name)}</h3><p>${html(note)}</p><a href="${html(url)}" target="_blank" rel="noopener noreferrer">Open exact website ↗</a></article>`).join("");
  }
  function openAgricultureHelp(options = {}) {
    const shell = visualShell("🌱 Agriculture Help", "Visible crop support, pictures, sources, and next steps");
    shell.querySelector(".nexus-visual-body").innerHTML = `<section class="nexus-visual-grid">
      <article class="nexus-visual-panel"><h2>What do you need?</h2><p>Describe the crop, affected plant part, color or spots, how much of the field is affected, recent rain, and anything already applied.</p><div class="nexus-visual-actions"><button data-nexus-command="Nexus, show pictures of possible maize diseases">Show maize disease pictures</button></div></article>
      <article class="nexus-visual-panel"><h2>Safe field checks</h2><ol><li>Compare affected and healthy plants.</li><li>Check both sides of leaves and the stem.</li><li>Photograph the whole plant and a close-up.</li><li>Do not spray until the problem is identified.</li><li>Confirm important treatment decisions with a local extension officer.</li></ol></article>
      ${resourceCards(agricultureResources())}</section><div class="nexus-visual-actions"><button data-visual-action="print">Print / Save PDF</button><button data-visual-action="close">Close and keep listening</button></div>`;
    global.dispatchEvent?.(new global.CustomEvent("nexus.agriculture.opened", { detail: { visible: true, sourceCount: agricultureResources().length } }));
    recordPilotEvidence({ topic: "agriculture", outcome: "completed", pathway: options.source?.includes("voice") ? "voice" : "typed", durationBand: "under-2-min", language: document.documentElement.lang || "unknown" });
    return { opened: true };
  }
  async function openMaizeDiseaseImages(options = {}) {
    const shell = visualShell("🌽 Possible Maize Disease Pictures", "Visual comparison only — not a diagnosis");
    const body = shell.querySelector(".nexus-visual-body");
    const fallback = [
      ["Maize lethal necrosis", "https://en.wikipedia.org/wiki/Maize_lethal_necrosis", "Mottling, yellowing, drying leaf margins"],
      ["Northern corn leaf blight", "https://en.wikipedia.org/wiki/Northern_corn_leaf_blight", "Long gray-green or tan cigar-shaped lesions"],
      ["Common rust", "https://en.wikipedia.org/wiki/Common_rust", "Small raised cinnamon-brown pustules"],
      ["Gray leaf spot", "https://en.wikipedia.org/wiki/Corn_grey_leaf_spot", "Rectangular gray or tan lesions between veins"]
    ];
    try {
      const api = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=" + encodeURIComponent("maize disease leaf") + "&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth=520&format=json&origin=*";
      const response = await global.fetch(api);
      const pages = response.ok ? Object.values((await response.json())?.query?.pages || {}) : [];
      const images = pages.map(page => ({ title: page.title?.replace(/^File:/, ""), url: page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url, page: `https://commons.wikimedia.org/?curid=${page.pageid}` })).filter(item => item.url).slice(0, 6);
      const pictureHtml = images.length ? images.map(item => `<article class="nexus-visual-panel"><img class="nexus-disease-image" src="${html(item.url)}" alt="${html(item.title)}"><h3>${html(item.title)}</h3><a href="${html(item.page)}" target="_blank" rel="noopener noreferrer">Open image source ↗</a></article>`).join("") : "";
      body.innerHTML = `<section class="nexus-visual-panel"><strong>Important:</strong> Pictures help compare symptoms but cannot confirm a disease. Several nutrient, water, pest, and disease problems look alike. Use local agriculture extension or laboratory confirmation before treatment.</section>
        ${pictureHtml ? `<section class="nexus-visual-grid">${pictureHtml}</section>` : ""}
        <h2>Common possibilities to compare</h2><section class="nexus-visual-grid">${fallback.map(([name,url,note]) => `<article class="nexus-visual-panel"><h3>${html(name)}</h3><p>${html(note)}</p><a href="${html(url)}" target="_blank" rel="noopener noreferrer">Open illustrated reference ↗</a></article>`).join("")}</section>
        <h2>Verified agriculture resources</h2><section class="nexus-visual-grid">${resourceCards(agricultureResources())}</section><div class="nexus-visual-actions"><button data-visual-action="print">Print / Save PDF</button><button data-visual-action="close">Close and keep listening</button></div>`;
      return { opened: true, imageCount: images.length };
    } catch (error) {
      body.innerHTML = `<section class="nexus-visual-panel"><h2>Pictures could not load</h2><p>${html(error?.message || "Image service unavailable")}</p><p>Nexus will not invent or mislabel disease pictures.</p></section><section class="nexus-visual-grid">${resourceCards(agricultureResources())}</section><div class="nexus-visual-actions"><button data-visual-action="close">Close</button></div>`;
      return { opened: true, failed: true };
    }
  }
  function resumeValues(shell) {
    return Object.fromEntries([...shell.querySelectorAll("[data-resume-field]")].map(field => [field.dataset.resumeField, field.value.trim()]));
  }
  function downloadResume(shell) {
    const value = resumeValues(shell);
    const content = `${value.name || "YOUR NAME"}\n${value.contact || "Contact information"}\n\nPROFESSIONAL SUMMARY\n${value.summary || ""}\n\nEXPERIENCE\n${value.experience || ""}\n\nSKILLS\n${value.skills || ""}\n\nEDUCATION & TRAINING\n${value.education || ""}\n`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "nexus-resume.txt"; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function openResumeBuilder(command = "", options = {}) {
    const shell = visualShell("📄 Résumé Builder", "Fill, review, print, or download — nothing is submitted");
    shell.querySelector(".nexus-visual-body").innerHTML = `<section class="nexus-visual-panel"><div class="nexus-resume-field"><label>Your name</label><input data-resume-field="name" autocomplete="name"></div><div class="nexus-resume-field"><label>Phone or email</label><input data-resume-field="contact"></div><div class="nexus-resume-field"><label>Professional summary</label><textarea data-resume-field="summary" placeholder="What work do you want, and what makes you dependable?"></textarea></div><div class="nexus-resume-field"><label>Work and community experience</label><textarea data-resume-field="experience" placeholder="Role, organization, location, dates, and what you accomplished"></textarea></div><div class="nexus-resume-field"><label>Skills</label><textarea data-resume-field="skills" placeholder="Farming, equipment, customer service, languages, technology, leadership…"></textarea></div><div class="nexus-resume-field"><label>Education, training, and certificates</label><textarea data-resume-field="education"></textarea></div></section>
      <section class="nexus-visual-panel nexus-visual-source"><strong>Privacy and control</strong><p>This draft stays in the current browser unless you choose Download or Print. Nexus does not apply for a job or share the résumé without your permission.</p></section><div class="nexus-visual-actions"><button data-visual-action="print">Print / Save PDF</button><button data-visual-action="download-resume">Download résumé</button><button data-visual-action="close">Close and keep listening</button></div>`;
    global.dispatchEvent?.(new global.CustomEvent("nexus.resume.opened", { detail: { visible: true, editable: true } }));
    recordPilotEvidence({ topic: "workforce", outcome: "completed", pathway: options.source?.includes("voice") ? "voice" : "typed", durationBand: "under-2-min", language: document.documentElement.lang || "unknown" });
    return { opened: true };
  }
  function openSourceWebsites(command = "") {
    const value = text(command).toLowerCase();
    const resources = /\b(weather|forecast|temperature)\b/.test(value)
      ? [["Open-Meteo", "https://open-meteo.com/", "Public weather forecast and geocoding documentation"]]
      : /\b(health|blood pressure|medicine|doctor|pharmac)\b/.test(value)
        ? [["World Health Organization", "https://www.who.int/health-topics", "International health topic resources"], ["Kenya Ministry of Health", "https://www.health.go.ke/", "Kenya public-health information"], ["MedlinePlus", "https://medlineplus.gov/", "Patient-friendly health information from the U.S. National Library of Medicine"]]
        : agricultureResources();
    const shell = visualShell("🔗 Websites and Sources", "Clickable resources for review and verification");
    shell.querySelector(".nexus-visual-body").innerHTML = `<section class="nexus-visual-grid">${resourceCards(resources)}</section><div class="nexus-visual-actions"><button data-visual-action="print">Print source list</button><button data-visual-action="close">Close and keep listening</button></div>`;
    return { opened: true, sourceCount: resources.length };
  }
  function openGenericDisplay(command = "") {
    const shell = visualShell("📋 Nexus Visual Result", "A visible workspace for the requested information");
    shell.querySelector(".nexus-visual-body").innerHTML = `<section class="nexus-visual-panel"><h2>Your request</h2><p>${html(command)}</p><h2>What Nexus needs next</h2><p>Please state the topic and the information you want shown. Nexus will keep the result visible instead of answering only by voice.</p></section><div class="nexus-visual-actions"><button data-visual-action="close">Close and keep listening</button></div>`;
    return { opened: true, needsDetails: true };
  }
  function openVisualExperience(command = "", options = {}) {
    const intent = visualExperienceIntent(command);
    if (intent === "map") return openReliableMap(command, options);
    if (intent === "agriculture") return openAgricultureHelp(options);
    if (intent === "maize-images") return openMaizeDiseaseImages(options);
    if (intent === "resume") return openResumeBuilder(command, options);
    if (intent === "sources") return openSourceWebsites(command);
    if (intent === "display") return openGenericDisplay(command);
    return { opened: false };
  }
  function weatherLocation(command = "") {
    const value = text(command)
      .replace(/^\s*(?:hello|hey|good\s+(?:morning|afternoon|evening))?\s*nexus[\s,.:;-]*/i, "")
      .replace(/[?.!]+$/g, "")
      .trim();
    const patterns = [
      /\b(?:weather|forecast|temperature)\s+(?:today\s+)?(?:in|for|at|near)\s+(.+)$/i,
      /\b(?:show|check|tell me|get|open|display)\s+(?:me\s+)?(?:today(?:'s)?\s+)?(?:weather|forecast|temperature)\s+(?:in|for|at|near)\s+(.+)$/i,
      /\b(?:what(?:'s| is)\s+)?(?:the\s+)?weather\s+(?:like\s+)?(?:today\s+)?(?:in|for|at|near)\s+(.+)$/i,
      /\b(?:in|for|at|near)\s+(.+?)\s+(?:weather|forecast|temperature)\b/i
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match?.[1]) return match[1].replace(/\b(?:today|right now|now)\b/gi, "").replace(/\s+/g, " ").trim();
    }
    const knownKenyaLocation = value.match(/\b(Nairobi|Mombasa|Kisumu|Nakuru|Nyeri|Eldoret|Meru|Machakos|Kakamega|Kisii|Malindi|Lamu|Kenya)\b/i);
    return knownKenyaLocation?.[1] || "";
  }
  function weatherCodeLabel(code) {
    const value = Number(code);
    if (value === 0) return { icon: "☀️", label: "Clear sky" };
    if ([1, 2, 3].includes(value)) return { icon: "🌤️", label: value === 3 ? "Overcast" : "Partly cloudy" };
    if ([45, 48].includes(value)) return { icon: "🌫️", label: "Fog" };
    if ([51, 53, 55, 56, 57].includes(value)) return { icon: "🌦️", label: "Drizzle" };
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(value)) return { icon: "🌧️", label: "Rain" };
    if ([71, 73, 75, 77, 85, 86].includes(value)) return { icon: "🌨️", label: "Snow" };
    if ([95, 96, 99].includes(value)) return { icon: "⛈️", label: "Thunderstorm" };
    return { icon: "🌍", label: "Current conditions" };
  }
  function ensureWeatherStyles() {
    if (typeof document === "undefined" || document.getElementById("nexus-live-weather-styles")) return;
    const style = document.createElement("style");
    style.id = "nexus-live-weather-styles";
    style.textContent = `
      .nexus-live-weather-shell{position:fixed;inset:0;z-index:2147482998;background:rgba(2,12,24,.88);display:grid;place-items:center;padding:18px;font-family:Inter,system-ui,sans-serif;color:#102033}
      .nexus-live-weather-card{width:min(820px,100%);max-height:94vh;overflow:auto;background:linear-gradient(145deg,#eefbff,#fff);border-radius:24px;box-shadow:0 28px 90px rgba(0,0,0,.48)}
      .nexus-live-weather-card header{background:#07566b;color:#fff;padding:22px 24px;display:flex;justify-content:space-between;gap:16px}.nexus-live-weather-card h1{margin:0;font-size:clamp(1.6rem,5vw,2.6rem)}
      .nexus-live-weather-close{width:48px;height:48px;border:0;border-radius:50%;background:#fff;color:#07566b;font-size:2rem}.nexus-live-weather-body{padding:24px}
      .nexus-live-weather-current{display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:center;padding:22px;border:3px solid #8ed4e6;border-radius:20px;background:#fff}.nexus-live-weather-icon{font-size:4.5rem}.nexus-live-weather-temp{font-size:clamp(2.4rem,8vw,4.2rem);font-weight:900;color:#07566b}.nexus-live-weather-condition{font-size:1.3rem;font-weight:800}
      .nexus-live-weather-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}.nexus-live-weather-metric{padding:15px;border:2px solid #c7dce3;border-radius:14px;background:#fff}.nexus-live-weather-metric strong{display:block;color:#07566b}
      .nexus-live-weather-source{padding:15px;border-left:6px solid #06a77d;background:#effcf7}.nexus-live-weather-source a{color:#064f64;font-weight:850}.nexus-live-weather-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}.nexus-live-weather-actions button,.nexus-live-weather-actions a{border:0;border-radius:11px;background:#07566b;color:#fff;padding:12px 15px;font-weight:800;text-decoration:none}
      .nexus-live-weather-error{padding:18px;border:3px solid #d62828;border-radius:16px;background:#fff3f3;font-weight:750}
      @media(max-width:560px){.nexus-live-weather-shell{padding:0}.nexus-live-weather-card{height:100%;max-height:none;border-radius:0}.nexus-live-weather-grid{grid-template-columns:1fr}.nexus-live-weather-current{grid-template-columns:1fr;text-align:center}}
    `;
    document.head.appendChild(style);
  }
  function weatherCardShell(title = "Live Weather") {
    ensureWeatherStyles();
    document.querySelector("[data-nexus-live-weather-shell]")?.remove();
    const shell = document.createElement("div");
    shell.className = "nexus-live-weather-shell";
    shell.dataset.nexusLiveWeatherShell = "true";
    shell.setAttribute("role", "dialog");
    shell.setAttribute("aria-modal", "true");
    shell.innerHTML = `<article class="nexus-live-weather-card"><header><div><h1>🌦️ ${html(title)}</h1><p>Verified public weather information</p></div><button class="nexus-live-weather-close" data-weather-action="close" aria-label="Close weather card">×</button></header><div class="nexus-live-weather-body"><p>Loading current conditions…</p></div></article>`;
    shell.addEventListener("click", event => {
      if (event.target?.closest?.("[data-weather-action]")?.dataset?.weatherAction === "close") shell.remove();
    });
    document.body.appendChild(shell);
    return shell;
  }
  async function openLiveWeatherCard(command = "", options = {}) {
    if (typeof document === "undefined" || !document.body || typeof global.fetch !== "function") return { opened: false, reason: "browser-unavailable" };
    const location = weatherLocation(command);
    const shell = weatherCardShell(location ? `Weather in ${location}` : "Weather");
    const body = shell.querySelector(".nexus-live-weather-body");
    if (!location) {
      body.innerHTML = `<div class="nexus-live-weather-error">📍 Please name a city or country. Try: “Nexus, show today’s weather in Nairobi.”</div>`;
      return { opened: true, needsLocation: true };
    }
    try {
      const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`;
      const geocodeResponse = await global.fetch(geocodeUrl);
      if (!geocodeResponse.ok) throw new Error(`location service returned ${geocodeResponse.status}`);
      const place = (await geocodeResponse.json())?.results?.[0];
      if (!place) throw new Error(`no matching location was found for ${location}`);
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(place.latitude)}&longitude=${encodeURIComponent(place.longitude)}&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=1&timezone=auto`;
      const weatherResponse = await global.fetch(weatherUrl);
      if (!weatherResponse.ok) throw new Error(`weather service returned ${weatherResponse.status}`);
      const weather = await weatherResponse.json();
      const current = weather.current || {};
      const daily = weather.daily || {};
      const condition = weatherCodeLabel(current.weather_code);
      const placeLabel = [place.name, place.admin1, place.country].filter(Boolean).join(", ");
      const verifiedAt = new Date().toLocaleString();
      body.innerHTML = `
        <section class="nexus-live-weather-current"><div class="nexus-live-weather-icon">${condition.icon}</div><div><div class="nexus-live-weather-temp">${html(current.temperature_2m)}${html(weather.current_units?.temperature_2m || "°C")}</div><div class="nexus-live-weather-condition">${html(condition.label)} — ${html(placeLabel)}</div><div>Feels like ${html(current.apparent_temperature)}${html(weather.current_units?.apparent_temperature || "°C")}</div></div></section>
        <section class="nexus-live-weather-grid"><div class="nexus-live-weather-metric"><strong>💧 Rain now</strong>${html(current.precipitation)} ${html(weather.current_units?.precipitation || "mm")}</div><div class="nexus-live-weather-metric"><strong>🌬️ Wind</strong>${html(current.wind_speed_10m)} ${html(weather.current_units?.wind_speed_10m || "km/h")}</div><div class="nexus-live-weather-metric"><strong>☔ Rain chance today</strong>${html(daily.precipitation_probability_max?.[0])}%</div><div class="nexus-live-weather-metric"><strong>⬆️ High</strong>${html(daily.temperature_2m_max?.[0])}${html(weather.daily_units?.temperature_2m_max || "°C")}</div><div class="nexus-live-weather-metric"><strong>⬇️ Low</strong>${html(daily.temperature_2m_min?.[0])}${html(weather.daily_units?.temperature_2m_min || "°C")}</div><div class="nexus-live-weather-metric"><strong>🕒 Updated</strong>${html(current.time || verifiedAt)}</div></section>
        <section class="nexus-live-weather-source"><strong>Source and verification</strong><p>Current conditions supplied by Open‑Meteo using its public geocoding and forecast services. Retrieved ${html(verifiedAt)}. No API key or personal location was used.</p><a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open the weather source ↗</a></section>
        <div class="nexus-live-weather-actions"><a href="${html(weatherUrl)}" target="_blank" rel="noopener noreferrer">View exact weather data ↗</a><button data-weather-action="close">Close and keep listening</button></div>`;
      recordPilotEvidence({ topic: "general", outcome: "completed", pathway: options.source === "voice-final-transcript" ? "voice" : "typed", durationBand: "under-2-min", language: document.documentElement.lang || "unknown" });
      global.dispatchEvent?.(new global.CustomEvent("nexus.weather.opened", { detail: { location: placeLabel, source: "Open-Meteo", visible: true } }));
      return { opened: true, location: placeLabel, source: "Open-Meteo", weather };
    } catch (error) {
      body.innerHTML = `<div class="nexus-live-weather-error">⚠️ Nexus could not reach the verified weather service for ${html(location)} right now. Please check the connection and try again. No weather details were invented.<br><small>${html(error?.message || "weather source unavailable")}</small></div><div class="nexus-live-weather-actions"><a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open the weather source ↗</a><button data-weather-action="close">Close</button></div>`;
      recordPilotEvidence({ topic: "general", outcome: "failed", pathway: options.source === "voice-final-transcript" ? "voice" : "typed", recovery: "not-recovered", durationBand: "under-2-min", language: document.documentElement.lang || "unknown", majorFailure: true });
      return { opened: true, failed: true, reason: error?.message || "weather-source-unavailable" };
    }
  }
  function pilotConsentState() {
    try {
      const state = JSON.parse(global.localStorage?.getItem(pilotConsentStorageKey) || "null");
      return state?.granted === true ? state : { granted: false, scope: "none" };
    } catch {
      return { granted: false, scope: "none" };
    }
  }
  function setPilotEvidenceConsent(granted, options = {}) {
    const state = {
      schemaVersion: "nexus.pilot-evidence-consent.v1",
      granted: granted === true,
      scope: granted === true ? "minimum-deidentified-pilot-metadata" : "none",
      researchReuseAllowed: options.researchReuseAllowed === true && granted === true,
      changedAt: new Date().toISOString()
    };
    try {
      global.localStorage?.setItem(pilotConsentStorageKey, JSON.stringify(state));
      return state;
    } catch {
      return { ...state, stored: false };
    }
  }
  function readPilotEvidence() {
    try {
      const value = JSON.parse(global.localStorage?.getItem(pilotEvidenceStorageKey) || "[]");
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }
  function recordPilotEvidence(input = {}) {
    if (pilotConsentState().granted !== true) return { recorded: false, reason: "consent-required" };
    const allowedTopics = new Set(["agriculture", "health", "pharmacy", "telehealth", "workforce", "marketplace", "maps", "learning", "music", "reminders", "offline", "general"]);
    const allowedOutcomes = new Set(["completed", "partial", "failed", "abandoned"]);
    const allowedPathways = new Set(["voice", "typed", "provider-card", "workspace", "offline", "unknown"]);
    const allowedRecovery = new Set(["none", "recovered", "not-recovered"]);
    const allowedDurationBands = new Set(["under-2-min", "2-5-min", "5-10-min", "over-10-min", "unknown"]);
    const entry = {
      schemaVersion: "nexus.pilot-evidence-event.v1",
      eventId: `pilot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      recordedAt: new Date().toISOString(),
      topic: allowedTopics.has(input.topic) ? input.topic : "general",
      outcome: allowedOutcomes.has(input.outcome) ? input.outcome : "completed",
      pathway: allowedPathways.has(input.pathway) ? input.pathway : "unknown",
      recovery: allowedRecovery.has(input.recovery) ? input.recovery : "none",
      durationBand: allowedDurationBands.has(input.durationBand) ? input.durationBand : "unknown",
      language: text(input.language).replace(/[^a-zA-Z-]/g, "").slice(0, 12) || "unknown",
      county: text(input.county).replace(/[^a-zA-Z -]/g, "").slice(0, 40) || "not-provided",
      feedback: ["helpful", "partly-helpful", "not-helpful", "not-provided"].includes(input.feedback) ? input.feedback : "not-provided",
      majorFailure: input.majorFailure === true
    };
    try {
      global.localStorage?.setItem(pilotEvidenceStorageKey, JSON.stringify([...readPilotEvidence(), entry].slice(-500)));
      return { recorded: true, entry };
    } catch {
      return { recorded: false, reason: "storage-unavailable" };
    }
  }
  function pilotTopicFromWorkspace(workspace = "") {
    const value = text(workspace).toLowerCase();
    if (/pharmacy|medicine/.test(value)) return "pharmacy";
    if (/telehealth|intake/.test(value)) return "telehealth";
    if (/health|chronic|clinic/.test(value)) return "health";
    if (/agriculture|crop|farm/.test(value)) return "agriculture";
    if (/workforce|job/.test(value)) return "workforce";
    if (/market|trade/.test(value)) return "marketplace";
    if (/map|field|route/.test(value)) return "maps";
    if (/learn|literacy/.test(value)) return "learning";
    if (/music|media/.test(value)) return "music";
    if (/reminder/.test(value)) return "reminders";
    if (/offline/.test(value)) return "offline";
    return "general";
  }
  function pilotEvidenceSummary(records = readPilotEvidence()) {
    const total = records.length;
    const completed = records.filter(item => item.outcome === "completed").length;
    const metadataComplete = records.filter(item => item.topic && item.durationBand !== "unknown" && item.outcome && item.pathway).length;
    const majorFailures = records.filter(item => item.majorFailure === true).length;
    const recovered = records.filter(item => item.recovery === "recovered").length;
    const feedbackProvided = records.filter(item => item.feedback !== "not-provided");
    const helpful = feedbackProvided.filter(item => item.feedback === "helpful").length;
    return {
      total, completed,
      completionRate: total ? Math.round((completed / total) * 100) : 0,
      metadataRate: total ? Math.round((metadataComplete / total) * 100) : 0,
      majorFailures, recovered,
      helpfulRate: feedbackProvided.length ? Math.round((helpful / feedbackProvided.length) * 100) : 0,
      feedbackCount: feedbackProvided.length
    };
  }
  function pilotReportText(records = readPilotEvidence()) {
    const summary = pilotEvidenceSummary(records);
    return [
      "Nexus Pilot Evidence and Governance Report",
      `Generated: ${new Date().toLocaleString()}`, "",
      `Sessions recorded with consent: ${summary.total}`,
      `Completed sessions: ${summary.completed} (${summary.completionRate}%)`,
      `Minimum metadata complete: ${summary.metadataRate}%`,
      `Major failures: ${summary.majorFailures}`,
      `Recovered sessions: ${summary.recovered}`,
      `Helpful feedback: ${summary.helpfulRate}% (${summary.feedbackCount} responses)`, "",
      "Governance boundaries",
      "- Minimum de-identified metadata only; no transcript, symptom, medicine, reading, name, phone, or provider-card content is included.",
      "- Research reuse requires separate explicit approval.",
      "- Nexus provides education, navigation, and communication support; qualified healthcare professionals make clinical decisions.", "",
      "Scale-up scenarios",
      "1. Deepen one-county coverage: strengthen training, devices, connectivity, clinical partners, and local-language support.",
      "2. Expand to a neighboring county: reuse the proven model after partner, privacy, source, and workforce readiness review.",
      "3. Multi-county hub: shared governance and reporting with county-level access controls and independent outcome review.", "",
      "Human approvals still required",
      "- Approved consent language, retention period, access roles, source register, clinical boundaries, Kenyan legal review, and any required ethical review."
    ].join("\n");
  }
  function downloadPilotReport(records = readPilotEvidence()) {
    if (typeof document === "undefined" || typeof Blob === "undefined") return false;
    const url = URL.createObjectURL(new Blob([pilotReportText(records)], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `nexus-pilot-learning-brief-${new Date().toISOString().slice(0, 10)}.txt`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  }
  function ensurePilotEvidenceStyles() {
    if (typeof document === "undefined" || document.getElementById("nexus-pilot-evidence-styles")) return;
    const style = document.createElement("style");
    style.id = "nexus-pilot-evidence-styles";
    style.textContent = `
      .nexus-pilot-evidence-shell{position:fixed;inset:0;z-index:2147482999;background:rgba(3,13,24,.9);display:grid;place-items:center;padding:18px;font-family:Inter,system-ui,sans-serif;color:#102033}
      .nexus-pilot-evidence{width:min(1080px,100%);max-height:94vh;overflow:auto;background:#f7fbfc;border-radius:24px;box-shadow:0 28px 90px rgba(0,0,0,.48)}
      .nexus-pilot-evidence header{position:sticky;top:0;z-index:2;background:#073b4c;color:#fff;padding:20px 24px;display:flex;justify-content:space-between;gap:16px}.nexus-pilot-evidence h1{margin:0;font-size:clamp(1.55rem,4vw,2.3rem)}
      .nexus-pilot-close{width:48px;height:48px;border:0;border-radius:50%;background:#fff;color:#073b4c;font-size:2rem}.nexus-pilot-body{padding:22px}
      .nexus-pilot-consent{padding:16px;border:3px solid #f4a261;border-radius:16px;background:#fff7ed}.nexus-pilot-consent[data-granted="true"]{border-color:#06a77d;background:#effcf7}
      .nexus-pilot-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}.nexus-pilot-actions button{border:0;border-radius:11px;background:#07566b;color:#fff;padding:12px 15px;font-weight:800}.nexus-pilot-actions button[data-pilot-action="withdraw"]{background:#8d1b1b}
      .nexus-pilot-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:18px 0}.nexus-pilot-metric{padding:16px;border:2px solid #c7dce3;border-radius:15px;background:#fff}.nexus-pilot-metric strong{display:block;font-size:1.8rem;color:#07566b}.nexus-pilot-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.nexus-pilot-panel{background:#fff;border:2px solid #d6e2e8;border-radius:16px;padding:16px}.nexus-pilot-panel h2{margin-top:0}.nexus-pilot-panel li{margin-bottom:8px}
      .nexus-pilot-boundary{margin-top:16px;padding:14px;border-left:6px solid #d62828;background:#fff1f1;font-weight:750}
      @media(max-width:760px){.nexus-pilot-evidence-shell{padding:0}.nexus-pilot-evidence{height:100%;max-height:none;border-radius:0}.nexus-pilot-metrics,.nexus-pilot-grid{grid-template-columns:1fr 1fr}}
      @media(max-width:480px){.nexus-pilot-metrics,.nexus-pilot-grid{grid-template-columns:1fr}}
      @media print{body>*:not(.nexus-pilot-evidence-shell){display:none!important}.nexus-pilot-evidence-shell{position:static;background:#fff;padding:0}.nexus-pilot-evidence{width:100%;max-height:none;box-shadow:none}.nexus-pilot-close,.nexus-pilot-actions{display:none!important}.nexus-pilot-evidence header{position:static}}
    `;
    document.head.appendChild(style);
  }
  function openPilotEvidenceDashboard(options = {}) {
    if (typeof document === "undefined" || !document.body) return { opened: false, reason: "document-unavailable" };
    ensurePilotEvidenceStyles();
    document.querySelector("[data-nexus-pilot-evidence-shell]")?.remove();
    const records = readPilotEvidence();
    const summary = pilotEvidenceSummary(records);
    const consent = pilotConsentState();
    const shell = document.createElement("div");
    shell.className = "nexus-pilot-evidence-shell";
    shell.dataset.nexusPilotEvidenceShell = "true";
    shell.setAttribute("role", "dialog");
    shell.setAttribute("aria-modal", "true");
    shell.innerHTML = `
      <article class="nexus-pilot-evidence">
        <header><div><h1>📊 Pilot Evidence &amp; Governance</h1><p>Visual proof from permitted, de-identified pilot metadata</p></div><button class="nexus-pilot-close" data-pilot-action="close" aria-label="Close pilot dashboard">×</button></header>
        <div class="nexus-pilot-body">
          <section class="nexus-pilot-consent" data-granted="${consent.granted}">
            <strong>${consent.granted ? "✅ Minimum pilot measurement is on" : "🔒 Pilot measurement is off"}</strong>
            <p>${consent.granted ? "Only the approved minimum metadata is stored on this device. Research reuse is not automatically allowed." : "Nothing is recorded until a person explicitly agrees. Care and Nexus access do not depend on consent."}</p>
            <div class="nexus-pilot-actions"><button data-pilot-action="grant">I agree to minimum measurement</button><button data-pilot-action="withdraw">Withdraw consent</button></div>
          </section>
          <section class="nexus-pilot-metrics">
            <div class="nexus-pilot-metric"><strong>${summary.total}</strong><span>Permitted sessions</span></div>
            <div class="nexus-pilot-metric"><strong>${summary.completionRate}%</strong><span>Completed</span></div>
            <div class="nexus-pilot-metric"><strong>${summary.metadataRate}%</strong><span>Metadata complete</span></div>
            <div class="nexus-pilot-metric"><strong>${summary.helpfulRate}%</strong><span>Helpful feedback</span></div>
          </section>
          <div class="nexus-pilot-grid">
            <section class="nexus-pilot-panel"><h2>🛡️ Privacy controls</h2><ul><li>No transcripts or conversation text</li><li>No names, phone numbers, symptoms, medicines, readings, or provider-card contents</li><li>Separate consent required for research reuse</li><li>Local records capped at 500 events</li></ul></section>
            <section class="nexus-pilot-panel"><h2>🧭 Performance</h2><ul><li>Major failures: ${summary.majorFailures}</li><li>Recovered sessions: ${summary.recovered}</li><li>Feedback responses: ${summary.feedbackCount}</li><li>Targets: 80–90% completion; 70% metadata completeness</li></ul></section>
            <section class="nexus-pilot-panel"><h2>📚 Source register</h2><ul><li>Source owner and publication</li><li>Jurisdiction and review date</li><li>Clinical or program approval status</li><li>Freshness and permitted-use status</li></ul><p>Only formally approved sources may be marked approved.</p></section>
            <section class="nexus-pilot-panel"><h2>🌍 Scale-up options</h2><ol><li>Deepen one-county coverage</li><li>Expand to one neighboring county</li><li>Create a governed multi-county hub</li></ol><p>Each option requires staffing, devices, connectivity, training, partners, privacy review, and cost estimates.</p></section>
          </div>
          <div class="nexus-pilot-actions"><button data-pilot-action="feedback-helpful">👍 Mark latest session helpful</button><button data-pilot-action="feedback-partly">➖ Partly helpful</button><button data-pilot-action="feedback-not">👎 Not helpful</button><button data-pilot-action="download">⬇ Download learning brief</button><button data-pilot-action="print">🖨 Print / Save PDF</button></div>
          <div class="nexus-pilot-boundary">Nexus does not approve consent language, research, clinical policy, data retention, Kenyan legal compliance, or ethical review. Those decisions remain with authorized human organizations and reviewers.</div>
        </div>
      </article>`;
    shell.addEventListener("click", event => {
      const action = event.target?.closest?.("[data-pilot-action]")?.dataset?.pilotAction;
      if (!action) return;
      if (action === "close") shell.remove();
      if (action === "grant") { setPilotEvidenceConsent(true); openPilotEvidenceDashboard({ source: "consent-granted" }); }
      if (action === "withdraw") { setPilotEvidenceConsent(false); openPilotEvidenceDashboard({ source: "consent-withdrawn" }); }
      if (action === "download") downloadPilotReport();
      if (action === "print") global.print?.();
      if (action?.startsWith("feedback-")) {
        const feedback = action === "feedback-helpful" ? "helpful" : action === "feedback-partly" ? "partly-helpful" : "not-helpful";
        recordPilotEvidence({ topic: "general", outcome: "completed", pathway: "workspace", feedback, language: document.documentElement.lang || "unknown" });
        openPilotEvidenceDashboard({ source: "feedback" });
      }
    });
    document.body.appendChild(shell);
    global.dispatchEvent?.(new global.CustomEvent("nexus.pilot-evidence.opened", { detail: { source: options.source || "command", recordCount: records.length } }));
    return { opened: true, summary, consent };
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
    recordPilotEvidence({
      topic: audience === "pharmacist" ? "pharmacy" : "health",
      outcome: "completed",
      pathway: "provider-card",
      language: card.language,
      durationBand: "unknown"
    });
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
      if (pilotEvidenceRequest(command)) setTimeout(() => openPilotEvidenceDashboard({ source: "typed-command" }), 0);
      if (weatherRequest(command)) setTimeout(() => void openLiveWeatherCard(command, { source: "typed-command" }), 0);
      if (visualExperienceIntent(command)) setTimeout(() => void openVisualExperience(command, { source: "typed-command" }), 0);
    }, true);
    document.addEventListener("keydown", event => {
      if (event.key !== "Enter" || event.shiftKey) return;
      const input = event.target?.closest?.("#nexusCommandCenterInput");
      const command = text(input?.value);
      if (providerQuestionRequest(command)) setTimeout(() => openRuralProviderCard(command, { source: "typed-command-enter" }), 0);
      if (pilotEvidenceRequest(command)) setTimeout(() => openPilotEvidenceDashboard({ source: "typed-command-enter" }), 0);
      if (weatherRequest(command)) setTimeout(() => void openLiveWeatherCard(command, { source: "typed-command-enter" }), 0);
      if (visualExperienceIntent(command)) setTimeout(() => void openVisualExperience(command, { source: "typed-command-enter" }), 0);
    }, true);
  }
  global.addEventListener?.("genesis.workspace.acknowledged", event => {
    const detail = event?.detail || {};
    const completed = detail.opened === true && detail.visible !== false;
    recordPilotEvidence({
      topic: pilotTopicFromWorkspace(detail.workspace),
      outcome: completed ? "completed" : "failed",
      pathway: "workspace",
      recovery: completed ? "none" : "not-recovered",
      durationBand: "under-2-min",
      language: document?.documentElement?.lang || "unknown",
      majorFailure: !completed
    });
  });
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
    const pilotDashboard = pilotEvidenceRequest(transcript)
      ? openPilotEvidenceDashboard({ source: "voice-final-transcript" })
      : null;
    const weatherCardRequested = weatherRequest(transcript);
    if (weatherCardRequested) void openLiveWeatherCard(transcript, { source: "voice-final-transcript" });
    const visualIntent = visualExperienceIntent(transcript);
    if (visualIntent) void openVisualExperience(transcript, { source: "voice-final-transcript" });
    const action = typeof actionBuilder === "function" ? actionBuilder(transcript) : null;
    if (!action && !providerCard?.opened && !pilotDashboard?.opened && !weatherCardRequested && !visualIntent) return { handled: false };
    seen.set(sessionId + ":" + transcriptId, now);
    return { handled: true, ...(action || {}), providerCardOpened: providerCard?.opened === true, pilotDashboardOpened: pilotDashboard?.opened === true, weatherCardRequested, visualIntent, transcriptId, sessionId, originalTranscript: transcript };
  }
  global.NexusBrowserActionController = Object.freeze({
    handleFinalUserTranscript,
    isRuralProviderCardRequest: providerQuestionRequest,
    openRuralProviderCard,
    isPilotEvidenceRequest: pilotEvidenceRequest,
    openPilotEvidenceDashboard,
    isWeatherRequest: weatherRequest,
    getWeatherLocation: weatherLocation,
    openLiveWeatherCard,
    getVisualExperienceIntent: visualExperienceIntent,
    openVisualExperience,
    openReliableMap,
    openAgricultureHelp,
    openMaizeDiseaseImages,
    openResumeBuilder,
    openSourceWebsites,
    setPilotEvidenceConsent,
    recordPilotEvidence,
    getPilotEvidenceSummary: pilotEvidenceSummary,
    getPilotReportText: pilotReportText
  });
})(window);
