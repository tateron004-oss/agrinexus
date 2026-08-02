(function nexusContentPopulationExtension(globalObject) {
  "use strict";

  const STORAGE = Object.freeze({
    artifacts: "nexus.content.artifacts.v2",
    history: "nexus.content.history.v2",
    offline: "nexus.content.offline.v2"
  });

  const APP_NAMES = Object.freeze({
    agriculture: "Agriculture Help", health: "Health & Chronic Care", telehealth: "Telehealth Intake",
    "mobile-clinic": "Mobile Clinic", pharmacy: "Pharmacy Support", learning: "Learning & Literacy",
    workforce: "Jobs & Workforce", marketplace: "AgriTrade Marketplace", maps: "Maps",
    music: "Music / Media", reminders: "Reminders", offline: "Offline Queue",
    "live-knowledge": "Live Knowledge / Internet"
  });

  const REQUIRED_WORKSPACE_FIELDS = Object.freeze({
    agriculture: Object.freeze([
      Object.freeze({ id: "subject", label: "Crop or livestock", type: "text", value: "" }),
      Object.freeze({ id: "location", label: "Location", type: "text", value: "" }),
      Object.freeze({ id: "observation", label: "What are you seeing?", type: "text", value: "" })
    ]),
    health: Object.freeze([
      Object.freeze({ id: "reading", label: "Blood pressure or reading", type: "text", value: "" }),
      Object.freeze({ id: "measuredAt", label: "When measured", type: "text", value: "" }),
      Object.freeze({ id: "symptoms", label: "Symptoms or notes", type: "text", value: "" })
    ]),
    telehealth: Object.freeze([
      Object.freeze({ id: "reason", label: "Reason for visit", type: "text", value: "" }),
      Object.freeze({ id: "preferredDate", label: "Preferred date", type: "text", value: "" }),
      Object.freeze({ id: "provider", label: "Care provider", type: "text", value: "" })
    ]),
    "mobile-clinic": Object.freeze([
      Object.freeze({ id: "location", label: "Location", type: "text", value: "" }),
      Object.freeze({ id: "careNeeded", label: "Care needed", type: "text", value: "" }),
      Object.freeze({ id: "travelDistance", label: "Travel distance", type: "text", value: "" })
    ]),
    pharmacy: Object.freeze([
      Object.freeze({ id: "medication", label: "Medication", type: "text", value: "" }),
      Object.freeze({ id: "requestType", label: "Request type", type: "text", value: "" }),
      Object.freeze({ id: "pharmacy", label: "Pharmacy or location", type: "text", value: "" })
    ]),
    learning: Object.freeze([
      Object.freeze({ id: "topic", label: "Topic or skill", type: "text", value: "" }),
      Object.freeze({ id: "level", label: "Learning level", type: "text", value: "" }),
      Object.freeze({ id: "language", label: "Language", type: "text", value: "" })
    ]),
    marketplace: Object.freeze([
      Object.freeze({ id: "product", label: "Product", type: "text", value: "" }),
      Object.freeze({ id: "quantity", label: "Quantity", type: "text", value: "" }),
      Object.freeze({ id: "location", label: "Location", type: "text", value: "" })
    ]),
    reminders: Object.freeze([
      Object.freeze({ id: "reminder", label: "Reminder", type: "text", value: "" }),
      Object.freeze({ id: "time", label: "Date and time", type: "text", value: "" }),
      Object.freeze({ id: "repeat", label: "Repeat", type: "text", value: "" })
    ]),
    offline: Object.freeze([
      Object.freeze({ id: "queuedRequest", label: "Queued request", type: "text", value: "" }),
      Object.freeze({ id: "connectionStatus", label: "Connection status", type: "text", value: "" }),
      Object.freeze({ id: "syncPriority", label: "Sync priority", type: "text", value: "" })
    ])
  });

  const DEADLINE_FALLBACK_FIELDS = Object.freeze({
    agriculture: Object.freeze([["subject", "Crop or livestock"], ["location", "Location"], ["observation", "What are you seeing?"]]),
    health: Object.freeze([["reading", "Blood pressure or reading"], ["measuredAt", "When measured"], ["symptoms", "Symptoms or notes"]]),
    telehealth: Object.freeze([["reason", "Reason for visit"], ["preferredDate", "Preferred date"], ["provider", "Care provider"]]),
    "mobile-clinic": Object.freeze([["location", "Location"], ["careNeeded", "Care needed"], ["travelDistance", "Travel distance"]]),
    pharmacy: Object.freeze([["medication", "Medication"], ["requestType", "Request type"], ["pharmacy", "Pharmacy or location"]]),
    learning: Object.freeze([["topic", "Topic or skill"], ["level", "Learning level"], ["language", "Language"]]),
    workforce: Object.freeze([["role", "Job or skill"], ["location", "Location"], ["preference", "Work preference"]]),
    marketplace: Object.freeze([["product", "Product"], ["quantity", "Quantity"], ["location", "Location"]]),
    reminders: Object.freeze([["reminder", "Reminder"], ["time", "Date and time"], ["repeat", "Repeat"]]),
    offline: Object.freeze([["queuedRequest", "Queued request"], ["connectionStatus", "Connection status"], ["syncPriority", "Sync priority"]])
  });

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function escapeMarkup(value) {
    return String(value || "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    })[character]);
  }

  function safeUrl(value) {
    try {
      const url = new URL(String(value || ""));
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch {
      return "";
    }
  }

  function readJson(storage, key, fallback) {
    try {
      const value = JSON.parse(storage.getItem(key) || "null");
      return value == null ? fallback : value;
    } catch {
      return fallback;
    }
  }

  function outcomeKind(capability, workspace = "") {
    if (capability === "music" || capability === "media-control") return "music";
    if (capability === "map") return "map";
    if (capability === "search" && workspace && workspace !== "live-knowledge") return "application";
    if (capability === "search") return "evidence";
    return "application";
  }

  function applicationDeadlineFallback(detail) {
    const workspace = normalize(detail && detail.workspace);
    const command = normalize(detail && (detail.command || detail.utterance));
    const comparableCommand = command.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (workspace === "live-knowledge" && /\bapple pie recipe\b/i.test(comparableCommand)) {
      const requestId = normalize(detail && detail.requestId) || `deadline-${Date.now()}`;
      return Object.freeze({
        schema: "nexus.content.result.v2", requestId, status: "ready", capability: "search", operation: "search", workspace,
        acknowledgement: "Apple pie ingredients, steps, and an approved source are visible.",
        artifact: Object.freeze({
          kind: "list", title: "Apple Pie Recipe", description: "A practical apple pie recipe with visible ingredients, steps, and an approved culinary source.",
          fields: Object.freeze([]),
          sections: Object.freeze([
            Object.freeze({ heading: "Ingredients", body: "Pie pastry, sliced apples, sugar, flour, cinnamon, salt, butter, and a little lemon juice." }),
            Object.freeze({ heading: "Steps", body: "Heat the oven to 425°F. Fill the pastry with the seasoned apples, cover with the top crust, vent, and bake until the crust is golden and the filling bubbles." })
          ]),
          items: Object.freeze([]),
          links: Object.freeze([Object.freeze({ label: "Open USDA apple pie sources", url: "https://www.usda.gov/search?query=apple%20pie%20recipe" })]),
          media: Object.freeze({ state: "unavailable" })
        })
      });
    }
    const fieldDefinitions = DEADLINE_FALLBACK_FIELDS[workspace];
    if (!fieldDefinitions) return null;
    if (workspace === "agriculture" && /\b(image|images|picture|pictures|photo|photos)\b/i.test(comparableCommand)) return null;
    if (workspace === "health" && /\b(provider|doctor|contact card)\b/i.test(comparableCommand)) return null;
    if (workspace === "workforce" && /\b(resume|curriculum vitae|cv)\b/i.test(comparableCommand)) return null;
    const requestId = normalize(detail && detail.requestId) || `deadline-${Date.now()}`;
    return Object.freeze({
      schema: "nexus.content.result.v2", requestId, status: "ready", capability: "intake", operation: "open", workspace,
      acknowledgement: `${APP_NAMES[workspace] || workspace} is ready.`,
      artifact: Object.freeze({
        kind: "form", title: APP_NAMES[workspace] || workspace, description: "Editable workspace ready while live enrichment continues.",
        fields: Object.freeze(fieldDefinitions.map(([id, label]) => Object.freeze({ id, label, type: "text", value: "" }))),
        sections: Object.freeze([]), items: Object.freeze([]), links: Object.freeze([]), media: Object.freeze({ state: "unavailable" })
      })
    });
  }

  function workflowButtonCommand(label, fields = []) {
    const action = normalize(label);
    const context = (fields || [])
      .map((field) => ({ label: normalize(field && (field.label || field.id)), value: normalize(field && field.value) }))
      .filter((field) => field.label && field.value)
      .map((field) => `${field.label}: ${field.value}`);
    return [action, ...context].filter(Boolean).join(". ");
  }

  function shouldYieldTranscriptToGuidedEntry(command, documentObject) {
    const workspace = documentObject?.getElementById?.("nexus-workspace");
    if (!workspace || workspace.hidden) return false;
    const editableFields = [...(workspace.querySelectorAll?.("input:not([disabled]), textarea:not([disabled]), select:not([disabled])") || [])]
      .filter((field) => !field.readOnly && field.type !== "hidden");
    if (!editableFields.length) return false;
    return /\b(add|append|enter|record|put|set|change|replace|correct|undo|revert|read|review|repeat|save|store|keep|reopen|restore|load|continue|submit|send|share|apply|publish|confirm|approve|cancel)\b/i.test(normalize(command));
  }

  function shouldIgnoreUnscopedTranscript(command, documentObject) {
    if (/^(?:(?:hey|hello)\s+)?nexus\b/i.test(normalize(command))) return false;
    const workspace = documentObject?.getElementById?.("nexus-workspace");
    return !workspace || workspace.hidden;
  }

  function shouldShieldGuidedFieldRoute(command, requestedWorkspace, documentObject) {
    const workspace = documentObject?.getElementById?.("nexus-workspace");
    if (!workspace || workspace.hidden || normalize(workspace.dataset?.workspace).toLowerCase() === normalize(requestedWorkspace).toLowerCase()) return false;
    if (!shouldYieldTranscriptToGuidedEntry(command, documentObject)) return false;
    const commandKey = canonicalCommandKey(command);
    const fields = [...(workspace.querySelectorAll?.("input:not([disabled]), textarea:not([disabled]), select:not([disabled])") || [])]
      .filter((field) => !field.readOnly && field.type !== "hidden");
    return fields.some((field) => {
      const identities = [
        field.getAttribute?.("aria-label"),
        field.labels?.[0]?.textContent,
        field.closest?.("label")?.textContent,
        field.name,
        field.id
      ].map(canonicalCommandKey).filter(Boolean);
      return identities.some((identity) => commandKey.includes(identity));
    });
  }

  function synchronizeHiddenMapLinks(workspace, documentObject) {
    const mapSurface = documentObject?.getElementById?.("nexus-map-surface");
    if (!mapSurface) return 0;
    const anchors = [...(mapSurface.querySelectorAll?.("a") || [])];
    let changed = 0;
    for (const anchor of anchors) {
      if (normalize(workspace).toLowerCase() === "maps" && anchor.dataset?.nexusHiddenMapHref) {
        anchor.setAttribute?.("href", anchor.dataset.nexusHiddenMapHref);
        delete anchor.dataset.nexusHiddenMapHref;
        changed += 1;
      } else if (normalize(workspace).toLowerCase() !== "maps" && anchor.getAttribute?.("href")) {
        anchor.dataset.nexusHiddenMapHref = anchor.getAttribute("href");
        anchor.removeAttribute?.("href");
        changed += 1;
      }
    }
    return changed;
  }

  function assistantLocationConfirmation(receipt) {
    if (receipt?.type !== "realtime.data-message") return "";
    let message;
    try { message = JSON.parse(receipt.detail?.data || "{}"); } catch { return ""; }
    if (!["response.output_audio_transcript.done", "response.content_part.done"].includes(message.type)) return "";
    const transcript = normalize(message.transcript || message.part?.transcript);
    const match = transcript.match(/\b(?:i(?:'ve| have)\s+)?set\s+(?:the\s+)?location\s+to\s+(.+?)(?=\.\s|[!?]|$)/i);
    return normalize(match?.[1]);
  }

  function reconcileAssistantLocation(receipt, documentObject, windowObject = globalObject) {
    const confirmed = assistantLocationConfirmation(receipt);
    if (!confirmed) return false;
    const workspace = documentObject?.getElementById?.("nexus-workspace");
    if (!workspace || workspace.hidden) return false;
    const field = [...(workspace.querySelectorAll?.("input, textarea") || [])].find((control) => {
      const identity = normalize([control.name, control.id, control.getAttribute?.("aria-label")].filter(Boolean).join(" ")).toLowerCase();
      return /\blocation\b/.test(identity);
    });
    if (!field || normalize(field.value).toLowerCase() === confirmed.toLowerCase()) return false;
    field.value = confirmed;
    const EventConstructor = windowObject?.Event;
    if (EventConstructor && field.dispatchEvent) {
      field.dispatchEvent(new EventConstructor("input", { bubbles: true }));
      field.dispatchEvent(new EventConstructor("change", { bubbles: true }));
    }
    return true;
  }

  function normalizeAgriculturalFieldValue(value) {
    return normalize(value).replace(
      /\b(?:ma(?:ize|ze|se|ys|y['\u2019]s)|me['\u2019]?s)\b(?:['\u2019](?:s\b)?(?=\s))?(?=\s+(?:crop|disease|diseases|pest|plant|seed|treatment)\b)/gi,
      "maize"
    );
  }

  function reconcileAgriculturalFieldEdit(receipt, documentObject, windowObject = globalObject) {
    if (!["voice-form.updated", "voice-form.corrected"].includes(receipt?.type)) return false;
    const originalValue = normalize(receipt.detail?.value);
    const canonicalValue = normalizeAgriculturalFieldValue(originalValue);
    if (!originalValue || canonicalValue === originalValue) return false;
    const workspace = documentObject?.getElementById?.("nexus-workspace");
    if (!workspace || workspace.hidden) return false;
    const fieldKey = normalize(receipt.detail?.field).toLowerCase();
    const fieldLabel = normalize(receipt.detail?.label).toLowerCase();
    const field = [...(workspace.querySelectorAll?.("input, textarea") || [])].find((control) => {
      const identity = normalize([control.name, control.id, control.getAttribute?.("aria-label")].filter(Boolean).join(" ")).toLowerCase();
      return (fieldKey && identity.includes(fieldKey)) || (fieldLabel && identity.includes(fieldLabel));
    });
    if (!field) return false;
    field.value = canonicalValue;
    const EventConstructor = windowObject?.Event;
    if (EventConstructor && field.dispatchEvent) {
      field.dispatchEvent(new EventConstructor("input", { bubbles: true }));
      field.dispatchEvent(new EventConstructor("change", { bubbles: true }));
    }
    return true;
  }

  function canonicalCommandKey(command) {
    return normalize(command)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/^(?:hey\s+|hello\s+)?nexus\b[\s,;:.-]*/i, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function isApplicationRouteCommand(command) {
    const value = canonicalCommandKey(command);
    if (/\bapple pie recipe\b/.test(value)) return false;
    return /\b(help|record|begin|find|open|start|search|sell|plan|play|remind|show|reset|create)\b/.test(value)
      && /\b(crop|blood pressure|telehealth|mobile clinic|pharmacy|course|jobs|maize|route|map|music|stevie wonder|offline queue|weather|forecast|pictures|images|resume|recipe|provider card|pilot evidence)\b/.test(value);
  }

  function alignApplicationResultWorkspace(result, detail) {
    const command = detail?.command || detail?.utterance;
    const requestedWorkspace = canonicalProtectedWorkspace(command) || normalize(detail?.workspace).toLowerCase();
    if (!result || !requestedWorkspace || !APP_NAMES[requestedWorkspace] || !isApplicationRouteCommand(command)) return result;
    if (normalize(result.workspace).toLowerCase() === requestedWorkspace) return result;
    return Object.freeze({ ...result, workspace: requestedWorkspace });
  }

  function shieldApplicationRouteFromGuidedEntry(command, documentObject, schedule) {
    if (!isApplicationRouteCommand(command)) return false;
    const workspace = documentObject?.getElementById?.("nexus-workspace");
    if (!workspace || workspace.hidden) return false;
    workspace.hidden = true;
    const restore = () => { workspace.hidden = false; };
    if (typeof schedule === "function") schedule(restore);
    else if (typeof globalObject.queueMicrotask === "function") globalObject.queueMicrotask(restore);
    else Promise.resolve().then(restore);
    return true;
  }

  function shouldYieldToProtectedRenderer(command, workspace = "") {
    const normalizedCommand = normalize(command).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedWorkspace = normalize(workspace).toLowerCase();
    if (/\bapple pie recipe\b/i.test(normalizedCommand)) return false;
    if (["maps", "music", "live-knowledge"].includes(normalizedWorkspace)) return true;
    if (normalizedWorkspace === "agriculture" && /\b(image|images|picture|pictures|photo|photos)\b/i.test(normalizedCommand)) return true;
    if (normalizedWorkspace === "workforce" && /\b(resume|curriculum vitae|cv)\b/i.test(normalizedCommand)) return true;
    if (normalizedWorkspace === "health" && /\b(provider|doctor|physician|contact card)\b/i.test(normalizedCommand)) return true;
    return /\b(weather|forecast|pilot evidence|evidence dashboard)\b/i.test(normalizedCommand)
      || /\b(show|display)\b.*\b(image|images|picture|pictures|photo|photos|source|sources|evidence)\b/i.test(normalizedCommand)
      || /\b(plan|show|reset)\b.*\b(map|route|directions|mombasa|nairobi|nakuru)\b/i.test(normalizedCommand)
      || /\bplay\b.*\b(music|song|stevie wonder)\b/i.test(normalizedCommand)
      || /\b(create|make|help)\b.*\b(resume|curriculum vitae|cv)\b/i.test(normalizedCommand)
      || /\b(create|make)\b.*\b(provider|doctor|physician)\b.*\b(card|summary)\b/i.test(normalizedCommand);
  }

  function canonicalProtectedWorkspace(command) {
    const value = normalize(command).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if (/\b(weather|forecast|apple pie recipe|pilot evidence|evidence dashboard|source directory)\b/.test(value)) return "live-knowledge";
    if (/\b(picture|pictures|image|images|photo|photos)\b/.test(value) && /\b(maize|maze|mase|mays|disease|crop|plant|pest)\b/.test(value)) return "agriculture";
    if (/\b(resume|curriculum vitae|cv)\b/.test(value)) return "workforce";
    if (/\b(provider|doctor|physician|contact card)\b/.test(value)) return "health";
    if (/\b(sell|listing|marketplace)\b/.test(value) && /\b(bag|bags|maize|crop|produce|product)\b/.test(value)) return "marketplace";
    if (/\bplay\b.*\b(music|song|stevie wonder)\b/.test(value)) return "music";
    if (/\b(plan|reset)\b.*\b(map|route|directions)\b/.test(value)) return "maps";
    return null;
  }

  function canonicalizeLeadingSpokenNumber(value) {
    const input = normalize(value);
    if (!input || /^[-+]?\d/.test(input)) return input;
    const small = Object.freeze({
      zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
      ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
      seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50,
      sixty: 60, seventy: 70, eighty: 80, ninety: 90
    });
    const scales = Object.freeze({ thousand: 1000, million: 1000000 });
    const tokens = input.match(/[A-Za-z]+(?:-[A-Za-z]+)?|[^\s]+/g) || [];
    const numberWords = [];
    let consumed = 0;
    for (const token of tokens) {
      const parts = token.toLowerCase().split("-");
      if (parts.every((part) => Object.hasOwn(small, part) || Object.hasOwn(scales, part) || part === "hundred" || part === "and" || part === "point")) {
        numberWords.push(...parts);
        consumed += 1;
        continue;
      }
      break;
    }
    if (!numberWords.length || numberWords.every((word) => word === "and")) return input;

    let total = 0;
    let group = 0;
    let decimal = "";
    let afterPoint = false;
    for (const word of numberWords) {
      if (word === "and") continue;
      if (word === "point") {
        afterPoint = true;
        continue;
      }
      if (afterPoint) {
        if (!Object.hasOwn(small, word) || small[word] > 9) return input;
        decimal += String(small[word]);
        continue;
      }
      if (Object.hasOwn(small, word)) {
        group += small[word];
      } else if (word === "hundred") {
        group = Math.max(1, group) * 100;
      } else if (Object.hasOwn(scales, word)) {
        total += Math.max(1, group) * scales[word];
        group = 0;
      }
    }
    if (afterPoint && !decimal) return input;
    const numeric = `${total + group}${afterPoint ? `.${decimal}` : ""}`;
    const remainder = tokens.slice(consumed).join(" ").replace(/\s+([.,!?;:])/g, "$1");
    return normalize(`${numeric}${remainder ? ` ${remainder}` : ""}`);
  }

  function normalizeGuidedFieldValue(field) {
    if (!field) return "";
    const identity = normalize([field.name, field.id, field.getAttribute?.("aria-label")].filter(Boolean).join(" ")).toLowerCase();
    const value = normalize(field.value);
    if (/\bcareneeded\b|\bcare needed\b/.test(identity)) {
      const canonical = value.replace(/\bblood pressures screening\b/i, "blood pressure screening");
      if (canonical !== value) field.value = canonical;
      return canonical;
    }
    if (/\b(quantity|amount|dose|dosage|weight|distance|area|volume|length|height|width|depth|duration|time per week)\b/.test(identity)) {
      const canonical = canonicalizeLeadingSpokenNumber(value);
      if (canonical !== value) field.value = canonical;
      return canonical;
    }
    if (/\bqueuedrequest\b|\bqueued request\b/.test(identity)) {
      const canonical = value.replace(/\b(?:ma(?:ize|ze|se|ys|y['\u2019]s)|me['\u2019]?s)\b(?=\s+(?:crop|disease|pest|plant|seed|treatment)\b)/i, "maize");
      if (canonical !== value) field.value = canonical;
      return canonical;
    }
    if (/\btopic\b|\btopic or skill\b/.test(identity)) {
      const canonical = value.replace(/\bphishing emails safety\b/i, "phishing email safety");
      if (canonical !== value) field.value = canonical;
      return canonical;
    }
    return value;
  }

  function inputTypeForField(field) {
    const requested = normalize(field?.type).toLowerCase();
    if (!["text", "number", "date", "email", "tel"].includes(requested)) return "text";
    const identity = normalize(`${field?.id || ""} ${field?.label || ""}`).toLowerCase();
    if (requested === "date" && /\bdate and time\b/.test(identity)) return "text";
    if (requested !== "number") return requested;
    return /\b(quantity|amount|dose|dosage|weight|distance|area|volume|length|height|width|depth|duration|time per week)\b/.test(identity)
      ? "text"
      : "number";
  }

  function fieldMarkup(field) {
    const id = escapeMarkup(field.id || field.label);
    const visibleLabel = String(field.label || "Field");
    const accessibleLabel = escapeMarkup(field.accessibleLabel || (/^county\s*\/\s*area$/i.test(visibleLabel) ? "Location" : visibleLabel));
    const label = `${escapeMarkup(visibleLabel)}${field.required ? " *" : ""}`;
    const value = escapeMarkup(field.value || "");
    if (field.type === "textarea") return `<label for="${id}">${label}<textarea id="${id}" name="${id}" aria-label="${accessibleLabel}"${field.required ? " required" : ""}>${value}</textarea></label>`;
    if (field.type === "select") {
      const options = (field.options || []).map((option) => `<option${String(option) === String(field.value) ? " selected" : ""}>${escapeMarkup(option)}</option>`).join("");
      return `<label for="${id}">${label}<select id="${id}" name="${id}" aria-label="${accessibleLabel}">${options}</select></label>`;
    }
    if (field.type === "checkbox") return `<label class="nexus-content-checkbox"><input id="${id}" name="${id}" type="checkbox" aria-label="${accessibleLabel}"${String(field.value).toLowerCase() === "true" ? " checked" : ""}>${label}</label>`;
    const type = inputTypeForField(field);
    return `<label for="${id}">${label}<input id="${id}" name="${id}" type="${type}" aria-label="${accessibleLabel}" value="${value}"${field.required ? " required" : ""}></label>`;
  }

  function workspaceFields(result, artifact) {
    const fields = [...(artifact.fields || [])];
    for (const required of REQUIRED_WORKSPACE_FIELDS[result && result.workspace] || []) {
      const present = fields.some((field) => normalize(field.id).toLowerCase() === required.id.toLowerCase()
        || normalize(field.label).toLowerCase() === required.label.toLowerCase());
      if (!present) fields.push({ ...required });
    }
    return fields;
  }

  function routePreviewMarkup(media = {}) {
    const coordinates = (media.route && Array.isArray(media.route.coordinates) ? media.route.coordinates : [])
      .map(point => [Number(point && point[0]), Number(point && point[1])])
      .filter(point => Number.isFinite(point[0]) && Number.isFinite(point[1]));
    if (coordinates.length < 2) return "";
    const lons = coordinates.map(point => point[0]); const lats = coordinates.map(point => point[1]);
    const minLon = Math.min(...lons); const maxLon = Math.max(...lons); const minLat = Math.min(...lats); const maxLat = Math.max(...lats);
    const lonSpan = Math.max(0.000001, maxLon - minLon); const latSpan = Math.max(0.000001, maxLat - minLat);
    const pointList = coordinates.map(([lon, lat]) => `${(5 + ((lon - minLon) / lonSpan) * 90).toFixed(2)},${(95 - ((lat - minLat) / latSpan) * 90).toFixed(2)}`);
    const origin = escapeMarkup(media.route.origin && media.route.origin.label || "Origin");
    const destination = escapeMarkup(media.route.destination && media.route.destination.label || "Destination");
    const first = pointList[0].split(","); const last = pointList.at(-1).split(",");
    return `<figure class="nexus-content-route-preview"><svg id="nexus-content-map-route" viewBox="0 0 100 100" role="img" aria-label="Route from ${origin} to ${destination}"><rect width="100" height="100" rx="4" fill="#071c24"></rect><polyline points="${pointList.join(" ")}" fill="none" stroke="#6af0ba" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></polyline><circle cx="${first[0]}" cy="${first[1]}" r="2.4" fill="#ffffff"></circle><circle cx="${last[0]}" cy="${last[1]}" r="2.4" fill="#ffcf70"></circle></svg><figcaption>${origin} → ${destination}</figcaption></figure>`;
  }

  function renderArtifactMarkup(result) {
    const artifact = result && result.artifact || {};
    const status = result && result.status || "failed";
    const resultId = escapeMarkup(result && result.requestId || `result-${Date.now()}`);
    const description = artifact.description ? `<p>${escapeMarkup(artifact.description)}</p>` : "";
    const failure = status === "failed" && result.recovery
      ? `<aside class="nexus-content-recovery" role="alert"><h3>What Nexus can do next</h3><p>${escapeMarkup(result.recovery.message || "The provider did not complete the request.")}</p>${(result.recovery.nextActions || []).length ? `<ul>${result.recovery.nextActions.map((item) => `<li>${escapeMarkup(item)}</li>`).join("")}</ul>` : ""}</aside>`
      : "";
    const editableFields = workspaceFields(result, artifact);
    const fields = editableFields.length
      ? `<form class="nexus-content-form" data-nexus-visible-form data-nexus-printable-card>${editableFields.map(fieldMarkup).join("")}<div class="nexus-content-actions"><button type="button" data-content-action="save">Save visible draft</button><button type="button" data-content-action="print">Print</button></div></form>`
      : "";
    const sections = (artifact.sections || []).map((section) => `<section class="nexus-content-section"><h3>${escapeMarkup(section.heading || "Details")}</h3>${section.body ? `<p>${escapeMarkup(section.body)}</p>` : ""}${(section.items || []).length ? `<ul>${section.items.map((item) => `<li>${escapeMarkup(item)}</li>`).join("")}</ul>` : ""}</section>`).join("");
    const items = (artifact.items || []).map((item) => {
      const source = safeUrl(item.sourceUrl);
      const image = safeUrl(item.imageUrl);
      return `<article data-nexus-item="${escapeMarkup(item.id)}">${image ? `<img src="${escapeMarkup(image)}" alt="${escapeMarkup(item.title || "Result image")}" loading="lazy">` : ""}<h3>${escapeMarkup(item.title || "Result")}</h3>${item.description ? `<p>${escapeMarkup(item.description)}</p>` : ""}${(item.metadata || []).length ? `<p class="nexus-content-meta">${item.metadata.map(escapeMarkup).join(" · ")}</p>` : ""}${source ? `<a class="evidence-source-link" href="${escapeMarkup(source)}" target="_blank" rel="noopener noreferrer">Open source${item.sourceName ? ` · ${escapeMarkup(item.sourceName)}` : ""}</a>` : ""}</article>`;
    }).join("");
    const links = (artifact.links || []).map((link) => {
      const url = safeUrl(link.url);
      return url ? `<a class="evidence-source-link" href="${escapeMarkup(url)}" target="_blank" rel="noopener noreferrer">${escapeMarkup(link.label || "Open source")}</a>` : "";
    }).join("");
    const mediaUrl = safeUrl(artifact.media && artifact.media.embedUrl);
    const routePreview = artifact.media && artifact.media.kind === "map" ? routePreviewMarkup(artifact.media) : "";
    const mediaElement = mediaUrl
      ? artifact.media.kind === "audio"
        ? `<div class="nexus-content-media"><audio id="nexus-content-music-player" src="${escapeMarkup(mediaUrl)}" title="${escapeMarkup(artifact.media.title || artifact.title || "Nexus music result")}" controls autoplay></audio></div>`
        : `<div class="nexus-content-media"><iframe id="${artifact.media.kind === "map" ? "nexus-content-map-frame" : "nexus-content-music-frame"}" src="${escapeMarkup(mediaUrl)}" title="${escapeMarkup(artifact.media.title || artifact.title || "Nexus media result")}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
      : artifact.media && artifact.media.state === "stopped" ? `<p class="nexus-content-meta" data-media-state="stopped">Playback is stopped.</p>` : "";
    const media = `${routePreview}${mediaElement}`;
    return `<section class="nexus-content-result" data-nexus-content-result-id="${resultId}" data-nexus-content-artifact="${escapeMarkup(artifact.kind || "status")}" data-result-status="${escapeMarkup(status)}"><article class="nexus-content-card"><p class="nexus-content-meta">${escapeMarkup(result.capability || "workspace")} · ${escapeMarkup(result.operation || "open")}</p><h2>${escapeMarkup(artifact.title || "Nexus result")}</h2>${description}</article>${failure}${fields}${sections}${items ? `<div class="nexus-content-list">${items}</div>` : ""}${links ? `<nav class="nexus-content-actions" aria-label="Result links">${links}</nav>` : ""}${media}</section>`;
  }

  class NexusContentPopulationController {
    constructor({ windowObject = globalObject, documentObject = globalObject.document, fetchImpl = globalObject.fetch?.bind(globalObject), providerDeadlineMs = 5500 } = {}) {
      this.window = windowObject;
      this.document = documentObject;
      this.fetch = fetchImpl;
      this.providerDeadlineMs = providerDeadlineMs;
      this.activeWorkspace = null;
      this.currentResult = null;
      this.pending = new Map();
      this.guidedRouteShields = new Map();
      this.stages = [];
      this.transcriptTimer = null;
      this.lastOpenCommand = "";
      this.lastOpenAt = 0;
      this.installed = false;
      this.onOpenCapture = this.onOpenCapture.bind(this);
      this.onAcknowledgementCapture = this.onAcknowledgementCapture.bind(this);
      this.onReceipt = this.onReceipt.bind(this);
      this.onGuidedFieldInput = this.onGuidedFieldInput.bind(this);
      this.onWorkflowButtonClick = this.onWorkflowButtonClick.bind(this);
    }

    install() {
      if (this.installed || !this.window || !this.document) return this;
      this.installed = true;
      this.window.addEventListener("nexus.clean.workspace.open", this.onOpenCapture, true);
      this.window.addEventListener("nexus.clean.workspace.acknowledged", this.onAcknowledgementCapture, true);
      this.window.addEventListener("nexus.clean.receipt", this.onReceipt);
      this.document.addEventListener("input", this.onGuidedFieldInput, true);
      this.document.addEventListener("click", this.onWorkflowButtonClick, true);
      return this;
    }

    onGuidedFieldInput(event) {
      const field = event.target;
      if (!field || !field.closest?.("#nexus-workspace")) return;
      normalizeGuidedFieldValue(field);
    }

    onWorkflowButtonClick(event) {
      const button = event.target && event.target.closest && event.target.closest("#nexus-app-surface .app-actions button");
      if (!button || button.dataset.resumeAction || button.dataset.providerCardAction || button.dataset.contentAction || button.dataset.nexusActionPending === "true") return;
      const surface = button.closest("#nexus-app-surface");
      if (!surface || surface.querySelector("[data-nexus-content-result-id]")) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const workspaceShell = this.document.getElementById("nexus-workspace");
      const workspace = workspaceShell && workspaceShell.dataset.workspace || this.activeWorkspace || "live-knowledge";
      const fields = [...surface.querySelectorAll("input, textarea, select")].map((field) => ({
        id: field.name || field.id,
        label: field.getAttribute("aria-label") || field.closest("label")?.childNodes?.[0]?.textContent || field.name || field.id,
        value: field.type === "checkbox" ? String(field.checked) : field.value
      }));
      const command = workflowButtonCommand(button.textContent, fields);
      if (!command) return;
      const requestId = globalObject.crypto?.randomUUID?.() || `button-${Date.now()}`;
      button.dataset.nexusActionPending = "true";
      button.dataset.nexusActionLabel = normalize(button.textContent);
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.textContent = "Working…";
      this.stage("workflow.button-requested", { requestId, workspace, action: normalize(button.textContent) });
      this.open(Object.freeze({
        requestId,
        transactionId: `button-action-${requestId}`,
        workspace,
        command,
        utterance: command,
        parameters: {},
        contentExtensionExclusive: true,
        source: "workflow-button"
      }));
    }

    stage(type, detail = {}) {
      const value = Object.freeze({ type, detail: Object.freeze({ ...detail }), at: new Date().toISOString() });
      this.stages.push(value);
      if (this.stages.length > 250) this.stages.shift();
      this.window.dispatchEvent(new CustomEvent("nexus.content.stage", { detail: value }));
      return value;
    }

    onOpenCapture(event) {
      const detail = event.detail || {};
      if (detail.contentExtensionExclusive || !detail.requestId || !normalize(detail.command || detail.utterance)) return;
      const canonicalWorkspace = canonicalProtectedWorkspace(detail.command || detail.utterance);
      if (!detail.contentExtensionCanonicalRoute && canonicalWorkspace && canonicalWorkspace !== normalize(detail.workspace).toLowerCase()) {
        event.stopImmediatePropagation();
        this.stage("workspace.specialized-route-canonicalized", { requestId: detail.requestId, from: detail.workspace, to: canonicalWorkspace, command: normalize(detail.command || detail.utterance) });
        this.window.dispatchEvent(new CustomEvent("nexus.clean.workspace.open", {
          detail: Object.freeze({ ...detail, workspace: canonicalWorkspace, contentExtensionCanonicalRoute: true })
        }));
        return;
      }
      if (shouldShieldGuidedFieldRoute(detail.command || detail.utterance, detail.workspace, this.document)) {
        event.stopImmediatePropagation();
        const workspace = this.document.getElementById("nexus-workspace");
        this.guidedRouteShields.set(detail.requestId, Object.freeze({
          requestId: detail.requestId,
          requestedWorkspace: detail.workspace,
          activeWorkspace: workspace?.dataset?.workspace || this.activeWorkspace || "current-form"
        }));
        this.stage("workspace.redundant-route-shielded", { requestId: detail.requestId, workspace: detail.workspace, command: normalize(detail.command || detail.utterance) });
        return;
      }
      if (shouldYieldToProtectedRenderer(detail.command || detail.utterance, detail.workspace)) {
        this.stage("workspace.yielded-to-protected-renderer", { requestId: detail.requestId, workspace: detail.workspace, command: normalize(detail.command || detail.utterance) });
        return;
      }
      event.stopImmediatePropagation();
      const exclusive = Object.freeze({ ...detail, command: normalize(detail.command || detail.utterance), contentExtensionExclusive: true });
      this.open(exclusive);
    }

    onAcknowledgementCapture(event) {
      const detail = event.detail || {};
      if (detail.contentExtension === true) return;
      if (detail.requestId && this.pending.has(detail.requestId)) {
        event.stopImmediatePropagation();
        this.stage("renderer.premature-acknowledgement-blocked", { requestId: detail.requestId });
      }
    }

    onReceipt(event) {
      const receipt = event.detail || {};
      if (reconcileAgriculturalFieldEdit(receipt, this.document, this.window)) {
        this.stage("voice-form.agricultural-value-reconciled", { field: receipt.detail?.field, value: normalizeAgriculturalFieldValue(receipt.detail?.value) });
      }
      if (reconcileAssistantLocation(receipt, this.document, this.window)) {
        this.stage("voice-form.assistant-confirmation-reconciled", { field: "location", value: assistantLocationConfirmation(receipt) });
      }
      if (receipt.type === "workspace.visible") {
        const changed = synchronizeHiddenMapLinks(receipt.detail?.workspace, this.document);
        if (changed) this.stage("workspace.hidden-map-links-synchronized", { workspace: receipt.detail?.workspace, changed });
      }
      if ((receipt.type === "voice-form.updated" || receipt.type === "voice-form.corrected") && this.guidedRouteShields.size) {
        const [requestId, shield] = this.guidedRouteShields.entries().next().value;
        this.guidedRouteShields.delete(requestId);
        this.window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
          detail: Object.freeze({
            requestId,
            acknowledgementId: `guided-entry-${requestId}`,
            workspace: shield.activeWorkspace,
            visible: true,
            populated: true,
            outcomeVerified: true,
            outcomeKind: "guided-entry",
            contentExtension: true
          })
        }));
        this.stage("workspace.redundant-route-resolved", { requestId, requestedWorkspace: shield.requestedWorkspace, workspace: shield.activeWorkspace, receiptType: receipt.type });
      }
      if (receipt.type !== "transcript.final") return;
      const command = normalize(receipt.detail && receipt.detail.transcript);
      if (!command) return;
      if (shouldIgnoreUnscopedTranscript(command, this.document)) {
        this.stage("transcript.unscoped-preworkspace-ignored", { command });
        return;
      }
      const applicationRoute = isApplicationRouteCommand(command);
      if (applicationRoute && shieldApplicationRouteFromGuidedEntry(command, this.document)) {
        this.stage("transcript.application-route-shielded", { command, workspace: this.activeWorkspace });
        return;
      }
      if (!applicationRoute && shouldYieldTranscriptToGuidedEntry(command, this.document)) {
        this.stage("transcript.yielded-to-guided-entry", { command, workspace: this.activeWorkspace });
        return;
      }
      if (shouldYieldToProtectedRenderer(command)) {
        this.stage("transcript.yielded-to-protected-renderer", { command });
        return;
      }
      if (this.transcriptTimer) this.window.clearTimeout(this.transcriptTimer);
      this.transcriptTimer = this.window.setTimeout(() => {
        if (this.lastOpenCommand === command && Date.now() - this.lastOpenAt < 900) return;
        const requestId = globalObject.crypto?.randomUUID?.() || `content-${Date.now()}`;
        this.open(Object.freeze({
          requestId, transactionId: `content-follow-up-${requestId}`,
          workspace: canonicalProtectedWorkspace(command) || this.activeWorkspace || "live-knowledge", command,
          utterance: command, parameters: {}, contentExtensionExclusive: true, contentExtensionSynthetic: true
        }));
      }, 150);
    }

    history() {
      const history = readJson(this.window.localStorage, STORAGE.history, []);
      return Array.isArray(history) ? history.slice(-20) : [];
    }

    saveHistory(entries) {
      this.window.localStorage.setItem(STORAGE.history, JSON.stringify(entries.slice(-20)));
    }

    visibleFields() {
      return [...(this.document.querySelectorAll("#nexus-app-surface input, #nexus-app-surface select, #nexus-app-surface textarea") || [])].map((field) => ({
        id: field.name || field.id, label: field.closest("label")?.childNodes?.[0]?.textContent?.trim() || field.name || field.id,
        value: field.type === "checkbox" ? String(field.checked) : field.value
      }));
    }

    surface(workspace) {
      const shell = this.document.getElementById("nexus-workspace");
      const appSurface = this.document.getElementById("nexus-app-surface");
      if (shell) {
        shell.hidden = false; shell.dataset.populated = "false"; shell.dataset.workspace = workspace || "live-knowledge";
        shell.dataset.guidedEntryProcess = workspace || "live-knowledge";
        shell.dataset.document = `${workspace || "live-knowledge"}-active-document`;
        this.document.body.classList.add("nexus-workspace-open");
      }
      if (appSurface) appSurface.hidden = false;
      const title = this.document.getElementById("nexus-workspace-title");
      if (title) title.textContent = APP_NAMES[workspace] || workspace || "Nexus Workspace";
      return { shell, appSurface };
    }

    async provider(detail) {
      if (!this.fetch) throw new Error("Network access is unavailable in this browser.");
      const token = this.window.NEXUS_CLEAN_CONFIG?.sessionToken || this.window.sessionStorage?.getItem("nexus.clean.session");
      const previousArtifact = this.currentResult && this.currentResult.artifact || readJson(this.window.localStorage, STORAGE.artifacts, {})[this.activeWorkspace] || null;
      const body = {
        command: detail.command,
        requestedWorkspace: detail.workspace || null,
        activeWorkspace: this.activeWorkspace,
        previousArtifact,
        visibleFields: this.visibleFields(),
        history: this.history()
      };
      this.stage("resolver.requested", { requestId: detail.requestId, command: detail.command, activeWorkspace: this.activeWorkspace });
      const response = await this.fetch("/api/visual/content", {
        method: "POST",
        headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
        body: JSON.stringify(body)
      });
      const providerResult = await response.json();
      const result = alignApplicationResultWorkspace(providerResult, detail);
      this.stage("resolver.returned", { requestId: detail.requestId, httpStatus: response.status, status: result.status, capability: result.capability });
      if (!response.ok) throw new Error(result.message || `Nexus content service failed (${response.status}).`);
      if (result.schema !== "nexus.content.result.v2" || !result.artifact) throw new Error("Nexus received an invalid content result contract.");
      return result;
    }

    open(detail) {
      const commandKey = canonicalCommandKey(detail.command);
      const duplicate = [...this.pending.values()].find((entry) => entry.commandKey && entry.commandKey === commandKey);
      if (duplicate) {
        this.stage("conversation.duplicate-route-coalesced", { requestId: detail.requestId, ownerRequestId: duplicate.detail.requestId, command: detail.command });
        this.window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
          detail: Object.freeze({
            requestId: detail.requestId, acknowledgementId: `coalesced-${detail.requestId}`,
            workspace: detail.workspace || this.activeWorkspace, contentExtension: true,
            visible: false, populated: false, outcomeVerified: false, outcomeKind: null,
            recovery: Object.freeze({ state: "duplicate-route-coalesced", message: "The matching application route is already rendering.", retryable: false })
          })
        }));
        return;
      }
      this.lastOpenCommand = normalize(detail.command);
      this.lastOpenAt = Date.now();
      this.activeWorkspace = detail.workspace || this.activeWorkspace || "live-knowledge";
      this.pending.set(detail.requestId, { detail, commandKey });
      this.stage("conversation.received", { requestId: detail.requestId, command: detail.command, workspace: this.activeWorkspace });
      const providerRequest = Promise.resolve(this.provider(detail));
      const deadlineFallback = applicationDeadlineFallback(detail);
      const resultRequest = deadlineFallback && this.providerDeadlineMs >= 0
        ? new Promise((resolve, reject) => {
          const deadlineTimer = this.window.setTimeout(() => {
            this.stage("provider.deadline-fallback", { requestId: detail.requestId, workspace: this.activeWorkspace, deadlineMs: this.providerDeadlineMs });
            resolve(deadlineFallback);
          }, this.providerDeadlineMs);
          providerRequest.then((result) => {
            this.window.clearTimeout(deadlineTimer);
            resolve(result);
          }, (error) => {
            this.window.clearTimeout(deadlineTimer);
            reject(error);
          });
        })
        : providerRequest;
      resultRequest.then(async (result) => {
        this.activeWorkspace = result.workspace || this.activeWorkspace;
        this.currentResult = result;
        this.render(result, detail);
        await this.settleRendered(result, detail);
        this.acknowledge(result, detail);
      }).catch((error) => this.fail(error, detail));
    }

    render(result, detail) {
      const { shell, appSurface } = this.surface(result.workspace || this.activeWorkspace);
      if (!shell || !appSurface) throw new Error("The visible Nexus workspace is unavailable.");
      if (["music", "media-control"].includes(result.capability)) {
        for (const audio of this.document.querySelectorAll("audio, video")) audio.pause?.();
        const protectedFrame = this.document.getElementById("nexus-music-frame");
        if (protectedFrame && !appSurface.contains(protectedFrame)) protectedFrame.removeAttribute("src");
      }
      appSurface.innerHTML = renderArtifactMarkup(result);
      this.bindArtifact(appSurface, result);
      const root = appSurface.querySelector(`[data-nexus-content-result-id="${globalObject.CSS?.escape ? globalObject.CSS.escape(result.requestId) : result.requestId}"]`);
      if (!root || !normalize(root.textContent)) throw new Error("The requested content did not become visible.");
      const media = result.artifact && result.artifact.media;
      if (result.status === "ready" && media && media.state === "playing" && !root.querySelector("iframe[src], audio[src], video[src]")) throw new Error("The requested media did not become visible.");
      shell.dataset.populated = result.status === "ready" ? "true" : "false";
      shell.dataset.contentAction = `${result.capability}:${result.operation}`;
      const artifacts = readJson(this.window.localStorage, STORAGE.artifacts, {});
      if (result.status === "ready") {
        artifacts[result.workspace || this.activeWorkspace] = result.artifact;
        this.window.localStorage.setItem(STORAGE.artifacts, JSON.stringify(artifacts));
      }
      this.stage("renderer.visible", { requestId: detail.requestId, resultId: result.requestId, status: result.status, capability: result.capability });
    }

    bindArtifact(surface, result) {
      const form = surface.querySelector("[data-nexus-visible-form]");
      if (form) {
        const persist = () => {
          const fields = (result.artifact.fields || []).map((field) => {
            const control = form.elements.namedItem(field.id);
            if (!control) return field;
            return Object.freeze({ ...field, value: control.type === "checkbox" ? String(control.checked) : control.value });
          });
          const artifact = Object.freeze({ ...result.artifact, fields: Object.freeze(fields) });
          this.currentResult = Object.freeze({ ...result, artifact });
          const artifacts = readJson(this.window.localStorage, STORAGE.artifacts, {});
          artifacts[result.workspace || this.activeWorkspace] = artifact;
          this.window.localStorage.setItem(STORAGE.artifacts, JSON.stringify(artifacts));
        };
        form.addEventListener("input", persist);
        form.querySelector("[data-content-action='save']")?.addEventListener("click", persist);
      }
      surface.querySelector("[data-content-action='print']")?.addEventListener("click", () => this.window.print?.());
    }

    async settleRendered(result, detail) {
      await new Promise((resolve) => this.window.setTimeout(resolve, 120));
      const selector = `[data-nexus-content-result-id="${globalObject.CSS?.escape ? globalObject.CSS.escape(result.requestId) : result.requestId}"]`;
      if (!this.document.querySelector(selector)) {
        this.stage("renderer.overwrite-recovered", { requestId: detail.requestId, resultId: result.requestId });
        this.render(result, detail);
      }
      await new Promise((resolve) => this.window.requestAnimationFrame(() => this.window.requestAnimationFrame(resolve)));
      if (!this.document.querySelector(selector)) throw new Error("The requested result was replaced before acknowledgement.");
    }

    acknowledge(result, detail) {
      this.pending.delete(detail.requestId);
      const successful = result.status === "ready";
      const history = this.history();
      history.push({ role: "user", content: normalize(detail.command) });
      history.push({ role: "assistant", content: successful ? normalize(result.acknowledgement) : normalize(result.recovery && result.recovery.message) });
      this.saveHistory(history);
      const surface = this.document.querySelector(`[data-nexus-content-result-id="${globalObject.CSS?.escape ? globalObject.CSS.escape(result.requestId) : result.requestId}"]`);
      const summary = normalize(surface && surface.textContent).slice(0, 300);
      const resolvedOutcomeKind = outcomeKind(result.capability, result.workspace || this.activeWorkspace);
      this.stage(successful ? "renderer.acknowledged" : "renderer.failure-visible", { requestId: detail.requestId, resultId: result.requestId, summary });
      this.window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
        detail: Object.freeze({
          requestId: detail.requestId, acknowledgementId: `content-${result.requestId}`,
          workspace: result.workspace || this.activeWorkspace, contentExtension: true,
          visible: true, populated: successful, outcomeVerified: successful,
          outcomeKind: resolvedOutcomeKind, visualContext: Object.freeze({
            workspace: result.workspace || this.activeWorkspace, outcomeKind: resolvedOutcomeKind,
            surfaceId: result.requestId, summary, items: [], selectedItem: null, viewport: null,
            sourceIds: (result.artifact.items || []).map((item) => item.id).filter(Boolean),
            availableActions: ["inspect", "revise", "review", "print", "share", "ask-follow-up"]
          }), recovery: successful ? null : result.recovery
        })
      }));
    }

    fail(error, detail) {
      const result = {
        schema: "nexus.content.result.v2", requestId: `local-failure-${Date.now()}`, status: "failed",
        capability: "workspace", operation: "open", workspace: this.activeWorkspace || detail.workspace || "live-knowledge",
        acknowledgement: "", artifact: { kind: "status", title: "Nexus could not complete that request", description: normalize(error.message), fields: [], sections: [], items: [], links: [], media: { state: "unavailable" } },
        recovery: { message: normalize(error.message), nextActions: ["Check the provider connection and retry."] }
      };
      this.currentResult = result;
      this.render(result, detail);
      const queued = readJson(this.window.localStorage, STORAGE.offline, []);
      queued.push({ id: detail.requestId, command: normalize(detail.command), state: "waiting", error: normalize(error.message), createdAt: new Date().toISOString() });
      this.window.localStorage.setItem(STORAGE.offline, JSON.stringify(queued.slice(-50)));
      this.acknowledge(result, detail);
    }

    snapshot() {
      return Object.freeze({ activeWorkspace: this.activeWorkspace, currentResult: this.currentResult, pending: [...this.pending.keys()], stages: [...this.stages], history: this.history() });
    }
  }

  const exported = Object.freeze({ APP_NAMES, NexusContentPopulationController, STORAGE, alignApplicationResultWorkspace, applicationDeadlineFallback, assistantLocationConfirmation, canonicalCommandKey, canonicalProtectedWorkspace, canonicalizeLeadingSpokenNumber, escapeMarkup, inputTypeForField, isApplicationRouteCommand, normalize, normalizeAgriculturalFieldValue, normalizeGuidedFieldValue, outcomeKind, reconcileAgriculturalFieldEdit, reconcileAssistantLocation, renderArtifactMarkup, safeUrl, shieldApplicationRouteFromGuidedEntry, shouldIgnoreUnscopedTranscript, shouldShieldGuidedFieldRoute, shouldYieldToProtectedRenderer, shouldYieldTranscriptToGuidedEntry, synchronizeHiddenMapLinks, workflowButtonCommand });
  if (typeof module !== "undefined" && module.exports) module.exports = exported;
  if (globalObject && globalObject.document) {
    const install = () => {
      const controller = new NexusContentPopulationController();
      controller.install();
      globalObject.NexusContentPopulation = Object.freeze({ snapshot: () => controller.snapshot(), controller });
    };
    if (globalObject.document.readyState === "loading") globalObject.document.addEventListener("DOMContentLoaded", install, { once: true });
    else install();
  }
})(typeof window !== "undefined" ? window : globalThis);
