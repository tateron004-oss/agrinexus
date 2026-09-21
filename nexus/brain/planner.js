"use strict";

const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
const { createInteractionProfile } = require("../experience/interaction-profile.js");
const businessVoiceDispatch = require("../business/voice-dispatch.js");
const { normalizeRecipient, normalizeSendRequest } = require("../communications/send-request.js");
const { extractProfileStatement, extractForgetRequest, savedNotice, forgottenNotice, sentenceFor, isFact } = require("../memory/profile-facts.js");
const { extractContactStatement, extractContactRequest, resolveContact, describeContact, contactName } = require("../memory/contacts.js");
const { parseTimeOfDay, formatTimeOfDay } = require("../brief/schedule.js");
const { parseWeatherQuestion, weatherAnswer, daysNeeded } = require("../brief/weather-answer.js");
const { validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");
const { personalTurn } = require("../personal/items.js");

class OpenEndedPlanner {
  constructor({ model, tools, applications, memory, brief, maxRepairAttempts = 2 }) {
    if (!model?.plan) throw new Error("A planning model is required.");
    Object.assign(this, { model, tools, applications, memory, brief, maxRepairAttempts });
  }

  async briefControlTurn(command, context, known) {
    const brief = this.brief;
    if (!brief?.schedule || !brief?.stop || !brief?.status) return null;
    const request = parseBriefControl(command.text);
    if (!request) return null;
    const scope = { tenantId: command.tenantId, userId: command.actorId };
    const answer = response => ({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
    try {
      if (request.action === "stop") return answer(await brief.stop(scope) ? "Done. I've stopped your morning brief." : "You don't have a morning brief set up.");
      if (request.action === "status") {
        const current = await brief.status(scope);
        return answer(current ? `Your morning brief goes out every morning at ${formatTimeOfDay(current.timeOfDay)} (${current.timeZone} time). Say "stop my morning brief" any time.`
          : 'You don\'t have a morning brief set up. Say "send me a morning brief at 7am" to start one.');
      }
      if (!request.timeOfDay) return answer("What time each morning? For example 7am or 6:30.");
      const zoneGiven = Boolean(context?.timeZone) && validTimeZone(context.timeZone) === context.timeZone;
      const saved = await brief.schedule({ ...scope, timeOfDay: request.timeOfDay, timeZone: zoneGiven ? context.timeZone : DEFAULT_TIME_ZONE });
      const town = saved.location || known?.byKind?.location || "";
      const notes = [
        town ? `It uses your saved town (${town}) and the reminders due that day.` : 'Tell me where you are ("I live in <your town>") and I will add the weather; for now it has your reminders due that day.',
        zoneGiven ? "" : `I do not know your time zone, so I used ${saved.timeZone}; tell me if you are elsewhere.`,
        saved.hasPushDevice === false ? "Alerts are not turned on for any of your devices yet, so nothing can be sent until you turn them on." : "",
        'Say "stop my morning brief" any time.'
      ].filter(Boolean).join(" ");
      return answer(`Done. ${saved.replaced ? "Your brief is now" : "I'll send your brief"} every morning at ${formatTimeOfDay(saved.timeOfDay)} (${saved.timeZone} time). ${notes}`);
    } catch { return null; }
  }

  // The facts Kyro has saved about this person: the list, by kind, and the same facts as planner memories. Never throws and never
  // blocks a turn: with no memory, or a failing store, nothing is known and planning is unchanged.
  async knownAboutPerson(command) {
    const empty = { list: [], byKind: {}, memories: [] };
    if (!this.memory?.profile) return empty;
    try {
      const rows = await this.memory.profile({ tenantId: command.tenantId, userId: command.actorId });
      const list = rows.map(row => row.content).filter(isFact);
      const byKind = {}; for (const fact of [...list].reverse()) byKind[fact.kind] = fact.value;
      const memories = list.map(fact => ({ kind: "profile", content: { kind: fact.kind, value: fact.value }, confidence: 0.9, provenance: { source: "user-statement" } }));
      return { list, byKind, memories };
    } catch { return empty; }
  }

  // A plain statement about the person ("I grow maize in Kisumu") is saved and announced; "forget that" takes it back. Returns a
  // conversational answer plan, or null when the text is neither (or memory is unavailable), so normal planning carries on.
  async profileTurn(command) {
    const memory = this.memory;
    if (!memory?.saveProfileFact || !memory?.forgetProfile) return null;
    const scope = { tenantId: command.tenantId, userId: command.actorId };
    const answer = response => ({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
    try {
      const forget = extractForgetRequest(command.text);
      if (forget) return answer(forgottenNotice(await memory.forgetProfile({ ...scope, kind: forget.kind })));
      const stated = extractProfileStatement(command.text);
      if (!stated.length) return null;
      const replaced = []; const saved = [];
      for (const { kind, value } of stated) {
        const result = await memory.saveProfileFact({ ...scope, kind, value, sourceText: command.text, conversationId: command.conversationId || null });
        saved.push({ kind, value }); replaced.push(...(result?.replaced || []));
      }
      return answer(savedNotice(saved, replaced));
    } catch { return null; }
  }

  // People the person has told Kyro about: "Save Otieno's number as +254...", "Who are my contacts?", "Forget Otieno". Returns an answer
  // plan, or null when the text is none of these (or contacts are unavailable), so normal planning carries on.
  async contactsTurn(command) {
    const memory = this.memory;
    if (!memory?.saveContact || !memory?.listContacts || !memory?.forgetContact) return null;
    const scope = { tenantId: command.tenantId, userId: command.actorId };
    const answer = response => ({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
    try {
      const statement = extractContactStatement(command.text);
      if (statement?.invalid) return answer(`I need ${statement.name}'s number with the country code, like +254712345678, so I can dial or text it.`);
      if (statement) {
        const saved = await memory.saveContact({ ...scope, ...statement });
        return answer(`${saved.updated ? "Updated" : "Saved"} ${statement.name}: ${describeContact(saved.contact)}. Say "forget ${statement.name}" any time, or "who are my contacts?"`);
      }
      const request = extractContactRequest(command.text);
      if (!request) return null;
      if (request.action === "forget") {
        const forgotten = await memory.forgetContact({ ...scope, name: request.name });
        return answer(forgotten ? `Done. I've forgotten ${forgotten.name}.` : `I don't have a contact called ${request.name}.`);
      }
      const contacts = (await memory.listContacts(scope)).map(row => row.content);
      if (request.action === "list") {
        if (!contacts.length) return answer('You have no saved contacts. Say "save Otieno\'s number as +254712345678" to add one.');
        const shown = contacts.slice(0, 20).map(contact => `${contact.name} (${describeContact(contact)})`).join("; ");
        return answer(`Your contacts: ${shown}${contacts.length > 20 ? ` and ${contacts.length - 20} more` : ""}.`);
      }
      const found = resolveContact(contacts, request.name);
      if (found?.contact) return answer(`${found.contact.name}: ${describeContact(found.contact)}.`);
      return answer(found?.ambiguous ? `Which one: ${found.ambiguous.map(contact => contact.name).join(" or ")}?` : `I don't have a contact called ${request.name}.`);
    } catch { return null; }
  }

  // "Text Otieno saying I'm on my way", "Call my brother and say hi": when the person names someone they saved instead of giving a
  // number, the name becomes that person's number (or email) so the normal, confirmed send or call plans as usual. Returns
  // { text, contactName } to plan with, { clarification } to ask, or null to leave the request alone.
  async namedContactRequest(command) {
    const memory = this.memory;
    if (!memory?.listContacts) return null;
    const parsed = parseNamedContactRequest(command.text);
    if (!parsed) return null;
    try {
      const contacts = (await memory.listContacts({ tenantId: command.tenantId, userId: command.actorId })).map(row => row.content);
      const found = resolveContact(contacts, parsed.name);
      const clarify = question => ({ clarification: question });
      if (found?.ambiguous) return clarify(`Which one: ${found.ambiguous.map(contact => contact.name).join(" or ")}?`);
      if (!found?.contact) return clarify(`I don't have a contact called ${parsed.name}. Say "save ${parsed.name}'s number as +254712345678" first, or give me their number.`);
      const value = parsed.wantsEmail ? found.contact.email : found.contact.phone;
      if (!value) return clarify(parsed.wantsEmail ? `I don't have an email for ${found.contact.name}. Say "save ${found.contact.name}'s email as name@example.com" first.`
        : `I don't have a phone number for ${found.contact.name}. Say "save ${found.contact.name}'s number as +254712345678" first.`);
      return { text: `${parsed.before}${value} ${parsed.rest}`, contactName: found.contact.name };
    } catch { return null; }
  }

  async plan({ command, context, priorTask = null, conversationHistory = [] }) {
    const profile = await this.profileTurn(command);
    if (profile) return Object.freeze({ ...profile, planningAttempts: 0 });
    const contactsAnswer = await this.contactsTurn(command);
    if (contactsAnswer) return Object.freeze({ ...contactsAnswer, planningAttempts: 0 });
    const named = await this.namedContactRequest(command);
    if (named?.clarification) return Object.freeze({ goal: String(command.text || "").trim(), application: "communications", riskTier: "regulated", clarification: named.clarification, steps: [], planningAttempts: 0 });
    if (named) command = { ...command, text: named.text };
    // To-do and shopping lists, notes and calendar events the person asks Kyro to keep (see personal/items.js).
    const personal = await personalTurn({ text: command.text, memory: this.memory, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone });
    if (personal) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: personal, sourceRequired: false, planningAttempts: 0 });
    // What Kyro has learned about this person (see memory/profile-facts.js) is used wherever it helps: their first name in greetings,
    // their town for a bare "weather" and for local farming searches, their language for direct answers, and as context for the planner.
    const known = await this.knownAboutPerson(command);
    context = { ...context, ...(known.byKind.name && !context?.preferredName ? { preferredName: known.byKind.name.split(" ")[0] } : {}) };
    command = withSavedLocationForWeather(command, known.byKind);
    const locale = LANGUAGE_LOCALES[known.byKind.language] || command.locale;
    // "What's the weather in Nakuru tomorrow?" / "Will it rain in Kisumu?": answered from a real forecast in degrees Celsius. If the forecast
    // cannot be had, planning carries on as before (the live web search).
    const weatherQuestion = this.brief?.forecast ? parseWeatherQuestion(command.text) : null;
    if (weatherQuestion) {
      const forecast = await this.brief.forecast({ place: weatherQuestion.place, days: daysNeeded(weatherQuestion) }).catch(() => null);
      const response = weatherAnswer(weatherQuestion, forecast);
      if (response) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false, planningAttempts: 0 });
    }
    const ordinaryConversation = ordinaryConversationPlan(command.text, context);
    if (ordinaryConversation) return Object.freeze({ ...ordinaryConversation, planningAttempts: 0 });
    if (isAssistantIntroductionRequest(command.text)) {
      return Object.freeze({ ...assistantIntroductionPlan(command.text, await this.catalog()), planningAttempts: 0 });
    }
    // "What do you remember about me?" was sent to a web search and answered "I'm an AI built by a team of inventors at
    // Amazon". It is answered from what is actually saved for this person, and nothing else.
    if (isMemoryRecallQuestion(command.text)) {
      const saved = this.memory?.recent ? await this.memory.recent({ tenantId: command.tenantId, userId: command.actorId,
        purpose: "task_planning", roles: context.roles || [], limit: 10 }) : [];
      return Object.freeze({ ...memoryRecallPlan(command.text, saved), planningAttempts: 0 });
    }
    // "Give me my brief": today's weather for the person's saved town and the reminders due today, composed from what is real right
    // now. It only reads; nothing is sent or scheduled.
    if (isBriefRequest(command.text) && this.brief?.compose) {
      const text = await this.brief.compose({ tenantId: command.tenantId, userId: command.actorId, known: known.byKind, timeZone: context?.timeZone }).catch(() => null);
      return Object.freeze({ ...briefPlan(command.text, text, known.byKind), planningAttempts: 0 });
    }
    // "Send me a morning brief at 7am" / "stop my morning brief" / "when is my brief?": the person turns their own brief on, changes,
    // stops or asks about it. Opt-in only: nothing is ever scheduled without this request.
    const briefControl = await this.briefControlTurn(command, context, known);
    if (briefControl) return Object.freeze({ ...briefControl, planningAttempts: 0 });
    // "How many bags of maize do I have in stock?" was sent to a web search and answered "You have 21 bags", a number
    // taken from an unrelated web page. Nexus holds no such record, so it says so instead of guessing.
    const personalRecord = personalRecordQuestionPlan(command.text);
    if (personalRecord) return Object.freeze({ ...personalRecord, planningAttempts: 0 });
    // Jokes and riddles are not web searches ("Tell me a joke" returned a stitched-together search snippet).
    if (isLightChatRequest(command.text) && typeof this.model.respond === "function") {
      const answer = await this.model.respond({ goal: command.text, locale,
        interactionProfile: createInteractionProfile({ locale, userPreferences: context.userPreferences || {}, channel: command.channel }),
        conversationHistory: conversationHistory.slice(-24).map(safeTurn), memories: known.memories, capabilities: [] }).catch(() => null);
      if (typeof answer === "string" && answer.trim()) {
        return Object.freeze({ goal: command.text, application: "conversation", riskTier: "low", clarification: null, steps: [],
          response: answer.trim(), sourceRequired: false, modelAnswered: true, planningAttempts: 0 });
      }
    }
    const searched = this.memory ? await this.memory.search({ tenantId: command.tenantId, userId: command.actorId,
      purpose: "task_planning", query: command.text, roles: context.roles || [], limit: 8 }) : [];
    const memories = [...known.memories, ...searched];
    const catalog = await this.catalog();
    const interactionProfile = createInteractionProfile({ locale,
      userPreferences: context.userPreferences || {}, channel: command.channel });
    const emergencyHealth = emergencyHealthGuidancePlan(command.text, catalog);
    if (emergencyHealth) return Object.freeze({ ...emergencyHealth, planningAttempts: 1 });
    const completeHealthRecord = completeHealthRecordPlan(command.text, catalog);
    if (completeHealthRecord) return Object.freeze({ ...completeHealthRecord, planningAttempts: 1 });
    // Before every other matcher: "list/cancel my reminders" must never fall
    // through to reminders.schedule (which would create one) or to the lists
    // matcher, and a cancel phrase can itself contain a time or a
    // communications word.
    const remindersManage = completeRemindersManagePlan(command.text, catalog);
    if (remindersManage) return Object.freeze({ ...remindersManage, planningAttempts: 1 });
    const completeTelehealthIntake = completeTelehealthIntakePlan(command.text, catalog);
    if (completeTelehealthIntake) return Object.freeze({ ...completeTelehealthIntake, planningAttempts: 1 });
    const completeMarketplaceSearch = completeMarketplaceSearchPlan(command.text, catalog);
    if (completeMarketplaceSearch) return Object.freeze({ ...completeMarketplaceSearch, planningAttempts: 1 });
    const completeImageSearch = completeImageSearchPlan(command.text, catalog);
    if (completeImageSearch) return Object.freeze({ ...completeImageSearch, planningAttempts: 1 });
    const followUpGoal = followUpGoalFrom(command.text, conversationHistory);
    const agricultureAdvice = agricultureAdvicePlan(followUpGoal || command.text, catalog);
    if (agricultureAdvice) return Object.freeze({ ...personalizedSearch(agricultureAdvice, known.byKind), planningAttempts: 1 });
    const completeLiveKnowledge = completeLiveKnowledgePlan(followUpGoal || command.text, catalog);
    if (completeLiveKnowledge) return Object.freeze({ ...personalizedSearch(completeLiveKnowledge, known.byKind), planningAttempts: 1 });
    const completeMobileClinic = completeMobileClinicPlan(command.text, catalog);
    if (completeMobileClinic) return Object.freeze({ ...completeMobileClinic, planningAttempts: 1 });
    const completeMediaPlayback = completeMediaPlaybackPlan(command.text, catalog);
    if (completeMediaPlayback) return Object.freeze({ ...completeMediaPlayback, planningAttempts: 1 });
    const completeDocument = completeDocumentPlan(command.text, catalog);
    if (completeDocument) return Object.freeze({ ...completeDocument, planningAttempts: 1 });
    const completeLists = completeListsPlan(command.text, catalog);
    if (completeLists) return Object.freeze({ ...completeLists, planningAttempts: 1 });
    const completeCommunication = completeCommunicationPlan(command.text, catalog);
    if (completeCommunication) return Object.freeze({ ...completeCommunication, planningAttempts: 1 });
    const sendMessage = sendMessagePlan(command.text, catalog);
    if (sendMessage) return Object.freeze({ ...withContactName(sendMessage, named?.contactName), planningAttempts: 1 });
    const placeCall = callPlan(command.text, catalog);
    if (placeCall) return Object.freeze({ ...withContactName(placeCall, named?.contactName), planningAttempts: 1 });
    const completeRemainingWorkspace = completeRemainingWorkspacePlan(command.text, catalog);
    if (completeRemainingWorkspace) return Object.freeze({ ...completeRemainingWorkspace, planningAttempts: 1 });
    const completeBusiness = completeBusinessPlan(command.text, catalog);
    if (completeBusiness) return Object.freeze({ ...completeBusiness, planningAttempts: 1 });
    const request = { schema: "nexus.planning-request.v1", goal: command.text, locale: interactionProfile.locale,
      channel: command.channel, priorTask: summarizeTask(priorTask),
      interactionProfile,
      conversationHistory: conversationHistory.slice(-24).map(safeTurn),
      memories: memories.map(safeMemory), catalog };
    let feedback = [];
    for (let attempt = 0; attempt <= this.maxRepairAttempts; attempt += 1) {
      const candidate = canonicalizeExplicitApplication(await this.model.plan({ ...request, feedback, attempt }), command.text, catalog);
      const validation = validatePlan(candidate, catalog, context);
      if (validation.valid) return Object.freeze({ ...personalizedSearch(validation.plan, known.byKind), planningAttempts: attempt + 1 });
      feedback = validation.errors;
    }
    // No registered application or tool fits (a general question, arithmetic, "what do you remember about me").
    // That is not an error for the person asking: answer it directly, without tools and without claiming any
    // action or live data (see OpenAiPlanningModel.respond). Only if that also fails is the original error raised.
    if (typeof this.model.respond === "function") {
      const answer = await this.model.respond({ goal: command.text, locale: interactionProfile.locale, interactionProfile,
        conversationHistory: request.conversationHistory, memories: request.memories,
        capabilities: catalog.applications.map(app => app.applicationId) }).catch(() => null);
      if (typeof answer === "string" && answer.trim()) {
        return Object.freeze({ goal: command.text, application: "conversation", riskTier: "low", clarification: null, steps: [],
          response: answer.trim(), sourceRequired: false, modelAnswered: true, planningAttempts: this.maxRepairAttempts + 1 });
      }
    }
    throw new NexusRuntimeError("plan_invalid", "Nexus could not produce a safe executable plan.", 422, { feedback });
  }

  async catalog() {
    const [tools, applications] = await Promise.all([this.tools.list(), Promise.resolve(this.applications.list())]);
    return { tools: tools.filter(tool => tool.availability !== "unavailable").map(tool => ({ toolId: tool.tool_id,
      domain: tool.domain, description: tool.description, riskTier: tool.risk_tier,
      requiredPermission: tool.required_permission || null,
      confirmationRequired: tool.confirmation_required, consentScope: tool.consent_scope })),
    applications: applications.map(app => ({ applicationId: app.applicationId, capabilities: app.capabilities, riskTiers: app.riskTiers })) };
  }
}

function ordinaryConversationPlan(text, context = {}) {
  const goal = String(text || "").trim();
  const normalized = goal.toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").trim();
  const greeting = /^(?:(?:hello|hi|hey|good (?:morning|afternoon|evening))\s+)?nexus(?:[, ]+(?:this is|i am|i'm|its|it's)\s+([a-z][a-z .'-]{0,60}))?$/.exec(normalized) ||
    /^(?:hello|hi|hey|good (?:morning|afternoon|evening))(?:\s+nexus)?(?:[, ]+(?:this is|i am|i'm|its|it's)\s+([a-z][a-z .'-]{0,60}))?$/.exec(normalized);
  if (greeting) {
    const suppliedName = String(greeting[1] || "").trim().split(/\s+/)[0];
    const knownName = String(context.userPreferences?.preferredName || context.preferredName || "").trim().split(/\s+/)[0];
    const rawName = suppliedName || knownName;
    const name = rawName ? `${rawName.charAt(0).toUpperCase()}${rawName.slice(1)}` : "";
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [],
      response: `Hello${name ? ` ${name}` : ""}, how can I help?`, sourceRequired: false };
  }
  // Keyboard mashing ("asdf qwerty") was searched on the web and answered "ASDF is a compiler for Qwerty, a quantum
  // programming language".
  if (/^(?:(?:asdf|qwer|zxcv|hjkl|sdfg|dfgh|fghj|wert|erty|rtyu)[a-z]*\s*){1,4}$/.test(normalized) || /^(.)\1{4,}$/.test(normalized)) {
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [],
      response: "I didn't catch that. What would you like help with?", sourceRequired: false };
  }
  // Swahili greetings and thanks were answered with a dictionary definition of "Habari".
  if (/^(?:habari(?: yako| za (?:asubuhi|mchana|jioni))?|jambo|hujambo|mambo|shikamoo)(?:\s+nexus|\s+kyro)?$/.test(normalized))
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response: "Habari! Naweza kukusaidia vipi?", sourceRequired: false };
  if (/^(?:asante|ahsante)(?: sana)?$/.test(normalized))
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response: "Karibu sana.", sourceRequired: false };
  // The date and time come from the server clock, not a web search (which answered "It is a Tuesday" for a Sunday and
  // gave two contradictory times). Nexus does not know the person's time zone, so it says which zone each time is in.
  if (/^(?:(?:what(?:'s| is)?|tell me|give me)\s+)?(?:the\s+)?(?:current\s+)?(?:time|date|day)(?:\s+(?:is it|it is))?(?:\s+(?:now|right now|today))?$/.test(normalized) ||
      /^what (?:time|day|date) is it(?:\s+(?:now|right now|today))?$/.test(normalized) || /^what(?:'s| is) today(?:'s date)?$/.test(normalized) || /^what(?:'s| is) the date today$/.test(normalized)) {
    const now = context.now instanceof Date ? context.now : new Date();
    const at = timeZone => ({ date: new Intl.DateTimeFormat("en-GB", { timeZone, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now),
      time: new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(now) });
    const nairobi = at("Africa/Nairobi"), utc = at("UTC");
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], sourceRequired: false,
      response: `It is ${nairobi.time} on ${nairobi.date} in Nairobi (East Africa Time). In UTC that is ${utc.time}${utc.date === nairobi.date ? "" : ` on ${utc.date}`}. I do not know your time zone, so tell me if you are elsewhere.` };
  }
  // "weather" on its own was answered for Chicago and an Italian region. Ask where.
  if (/^(?:(?:what(?:'s| is)?|how(?:'s| is))\s+)?(?:the\s+)?(?:weather|forecast|temperature|hali ya hewa)(?:\s+like)?(?:\s+(?:today|tomorrow|now|right now|leo|kesho))?$/.test(normalized))
    // A clarification is rendered as a workspace outcome, so it must name a registered application ("conversation" is not one).
    return { goal, application: "live-knowledge", riskTier: "low", clarification: "Which town or place should I check the weather for? (Tell me \"I live in <your town>\" once and I will remember it.)", steps: [], sourceRequired: false };
  // Mouldy grain is a real poisoning risk (aflatoxin); a web snippet answered "usually safe to eat".
  if (/\b(?:safe|okay|ok|fine|alright)\b.*\b(?:eat|eating|feed|feeding|consume|consuming)\b|\b(?:can|could|should) (?:i|we|my)\b.*\b(?:eat|feed|consume)\b/.test(normalized) &&
      /\b(?:mou?ld|mou?ldy|fung(?:us|al)|rotten|black spots?|green spots?|discou?lou?red|musty|damp)\b/.test(normalized) &&
      /\b(?:maize|corn|grain|grains|beans|groundnuts?|peanuts?|millet|sorghum|rice|flour|wheat|cassava)\b/.test(normalized))
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], sourceRequired: false,
      response: "Be careful. Grain with mould, black or green spots or a musty smell can carry aflatoxin and other toxins that harm people and animals, and cooking or drying does not remove them. If you cannot be sure it is clean, do not eat it or feed it to animals. Sort out and throw away any discoloured or mouldy kernels, and store grain dry and off the floor. If you or your animals already ate it and feel unwell, see a health worker or a vet. For a particular batch, ask your local agricultural extension officer." };
  if (/^(?:thank you|thanks|thank you nexus|thanks nexus|okay thanks|ok thanks)$/.test(normalized)) {
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [],
      response: "You're welcome.", sourceRequired: false };
  }
  return null;
}

const LIGHT_CHAT = /^(?:please\s+)?(?:(?:tell|give|say)\s+me|can you tell me|do you know)\s+(?:a|an|another|one)\s+(?:(?:good|funny|short|clean)\s+)?(?:joke|riddle|proverb|pun|fun fact)\b/i;
function isLightChatRequest(text) { return LIGHT_CHAT.test(String(text || "").trim()); }

// Questions about the person's OWN holdings and money ("how many bags of maize do I have in stock", "show me my farm
// expenses"). Nexus only knows what was saved with it, and it keeps no stock or expense ledger it can read back, so the
// truthful answer is that it has no record, with the way to start one that it really does have.
// Money nouns (expenses, income, sales, profit) are NOT here: those are answered from the business workspace's income and expense log.
const PERSONAL_RECORD_NOUN = /\b(stock|inventory|balance|savings|debts?|harvest|yield|livestock|cattle|cows|goats|chickens|sheep|pigs)\b/i;
const PERSONAL_RECORD_OPENER = /^(?:please\s+)?(?:how (?:many|much)|what(?:'s| is| are| was| were)|show|tell|check|give)\b/i;
const PERSONAL_RECORD_OWNERSHIP = /\b(?:my|our|i have|do i have|did i|i've got|do we have|did we)\b/i;
const PERSONAL_RECORD_OTHER_TOOL = /\b(reminders?|lists?|checklists?|documents?|records?|health|readings?|weather|price|prices|market|forecast|business)\b/i;
function personalRecordQuestionPlan(text) {
  const goal = String(text || "").trim();
  if (!PERSONAL_RECORD_OPENER.test(goal) || !PERSONAL_RECORD_OWNERSHIP.test(goal) || PERSONAL_RECORD_OTHER_TOOL.test(goal)) return null;
  const noun = PERSONAL_RECORD_NOUN.exec(goal)?.[1]?.toLowerCase();
  if (!noun) return null;
  return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], sourceRequired: false,
    response: `I don't have your ${noun} on record, so I can't say without guessing. I only know what you have saved with me.${/^(?:balance|savings|debts?)$/.test(noun) ? "" : ` You can keep it with me, for example: "Create a list called ${noun === "stock" || noun === "inventory" ? "Stock" : "Farm"} with maize, beans", and I can read it back later.`}` };
}

// "Who are you?", "What can you do for me?", "help": answered from the catalog, so it is always accurate and
// costs no model call. (These used to be sent to the model, which routed "Who are you?" to the learning app and
// failed "what can you do" with a 422.)
const INTRODUCTION_PHRASES = [
  /^(?:who|what) (?:are|r) you$/, /^what(?:'s| is) your name$/, /^what can you do(?: for me)?$/, /^what do you do$/,
  /^(?:how|what) can you help(?: me)?$/, /^help(?: me)?$/, /^what can i (?:ask|say to) (?:you|kyro|nexus)$/,
  /^what (?:are )?your (?:capabilities|features|abilities)$/, /^(?:introduce yourself|tell me about yourself)$/
];

function normalizedIntroduction(text) {
  return String(text || "").toLowerCase().replace(/[\u2019]/g, "'").replace(/[.!?]+$/g, "").trim()
    .replace(/^(?:(?:hello|hi|hey)[, ]+)?(?:(?:kyro|nexus)[, ]+)?/, "").replace(/[, ]+(?:kyro|nexus)$/, "").trim();
}

function isAssistantIntroductionRequest(text) {
  const normalized = normalizedIntroduction(text);
  return Boolean(normalized) && INTRODUCTION_PHRASES.some(pattern => pattern.test(normalized));
}

const CAPABILITY_PHRASES = [
  ["agriculture", "crop and farm advice with sources"], ["live-knowledge", "up-to-date answers with sources"],
  ["health", "recording health readings"], ["telehealth", "preparing telehealth visits"],
  ["pharmacy", "finding nearby pharmacies"], ["mobile-clinic", "finding nearby clinics"],
  ["workforce", "finding jobs"], ["marketplace", "finding marketplace listings"], ["maps", "routes on a map"],
  ["images", "current images"], ["documents", "documents"], ["lists", "lists"], ["reminders", "reminders"],
  ["learning", "short lessons"], ["business", "business workspaces"], ["music-media", "playing music"],
  ["communications", "drafting messages"]
];

const MEMORY_RECALL_PHRASES = [
  /^(?:what|which)\s+(?:do|did|can|could)\s+you\s+(?:remember|know|recall|learn|save|store|note)\s+about\s+me$/,
  /^(?:what|which)\s+(?:have|has)\s+you\s+(?:saved|stored|learned|learnt|remembered|noted)\s+about\s+me$/,
  /^(?:what|which)\s+(?:things|notes|facts)\s+do\s+you\s+(?:remember|know|have)\s+about\s+me$/,
  /^do\s+you\s+(?:remember|know)\s+(?:me|anything about me)$/,
  /^what(?:'s| is)\s+in\s+your\s+memory\s+(?:about|of)\s+me$/
];

function isMemoryRecallQuestion(text) {
  const normalized = normalizedIntroduction(text);
  return Boolean(normalized) && MEMORY_RECALL_PHRASES.some(pattern => pattern.test(normalized));
}

function memoryRecallPlan(text, saved) {
  const notes = (Array.isArray(saved) ? saved : []).map(item => {
    if (isFact(item?.content)) return sentenceFor(item.content);
    const content = typeof item?.content === "string" ? item.content : JSON.stringify(item?.content ?? "");
    return String(content).replace(/\s+/g, " ").trim().slice(0, 200);
  }).filter(Boolean).slice(0, 8);
  const response = notes.length
    ? `Here is what I have saved about you: ${notes.map((note, index) => `${index + 1}. ${note}`).join(" ")} I do not list health details here.`
    : "I do not have any saved notes about you to show here.";
  return { goal: String(text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false };
}

function assistantIntroductionPlan(text, catalog) {
  const present = new Set((catalog?.applications || []).map(app => app.applicationId));
  const phrases = CAPABILITY_PHRASES.filter(([id]) => present.has(id)).map(([, phrase]) => phrase);
  const list = phrases.length > 1 ? `${phrases.slice(0, -1).join(", ")}, and ${phrases.at(-1)}` : phrases[0] || "answering questions";
  return { goal: String(text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [],
    response: `I'm Kyro, your AgriNexus assistant. I can help with ${list}. I always ask before I save or send anything. Just tell me what you need.`,
    sourceRequired: false };
}

// "And what about beans?" after "Why do maize leaves turn yellow?" used to search for "And what about beans?" alone
// and answer generically. Join a short follow-up opener to the previous user question; used only by the farm-advice
// and live-knowledge matchers, which take the whole sentence as their search query.
const FOLLOW_UP_OPENER = /^(?:(?:and|also|ok|okay)[, ]+)?(?:what|how) about\b|^and\b/i;

function followUpGoalFrom(text, history) {
  const current = String(text || "").trim();
  if (!current || current.length > 80 || !FOLLOW_UP_OPENER.test(current)) return null;
  const previous = [...(history || [])].reverse().find(turn => turn?.role === "user" && String(turn.content || "").trim());
  return previous ? `${String(previous.content).trim()} ${current}` : null;
}

function agricultureAdvicePlan(text, catalog) {
  const goal = String(text || "").trim();
  const agricultureSubject = /\b(maize|corn|cassava|rice|wheat|sorghum|millet|beans?|crop|farm|farmer|soil|irrigation|pest|plant disease|livestock|harvest)\b/i.test(goal);
  const adviceRequest = /[?]|\b(why|what|how|when|where|help|advise|advice|assess|diagnose|inspect|treat|prevent|manage|improve|yellow|wilting|spots?|dying)\b/i.test(goal);
  if (!agricultureSubject || !adviceRequest) return null;
  // Confirmed live: "Why do maize leaves turn yellow? Answer with current
  // sources." was misrouted to agriculture -- this matcher runs first in
  // OpenEndedPlanner.plan() and a crop name plus a symptom/question word is
  // broad enough to also swallow an explicit request for sourced, current
  // knowledge. Defer to completeLiveKnowledgePlan's own narrower trigger
  // (a question word/"?" plus an explicit current/latest/live/sources
  // request) whenever it would also match this text, instead of duplicating
  // and risking drifting from its regex. If live-knowledge isn't available
  // in this catalog, completeLiveKnowledgePlan returns null and agriculture
  // still handles the request as a reasonable fallback.
  if (completeLiveKnowledgePlan(text, catalog)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "knowledge.search") ||
      !catalog.applications.some(app => app.applicationId === "agriculture")) return null;
  const crop = goal.match(/\b(maize|corn|cassava|rice|wheat|sorghum|millet|beans?)\b/i)?.[1]?.toLowerCase() || "crop";
  return { goal, application: "agriculture", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "retrieve-agriculture-guidance", title: "Retrieve authoritative agriculture guidance",
      toolId: "knowledge.search", input: { query: goal, crop, requireCurrentSources: true,
        sourcePolicy: "authoritative-agriculture", domainFilterRequired: true,
        includeDomains: ["fao.org", "cgiar.org", "cimmyt.org", "extension.org", "edu"] },
      dependsOn: [], fallbackToolIds: [] }] };
}

function emergencyHealthGuidancePlan(text, catalog) {
  const goal = String(text || "").trim();
  const normalized = goal.toLowerCase().replace(/[’]/g, "'");
  const bloodPressure = normalized.match(/\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/);
  const hypertensiveCrisis = bloodPressure && (Number(bloodPressure[1]) >= 180 || Number(bloodPressure[2]) >= 120);
  const redFlag = /\b(chest pain|pressure (?:in|on) (?:my|the) chest|trouble breathing|cannot breathe|can't breathe|shortness of breath|face droop|one-sided weakness|(?:weak|weakness|numb|numbness) (?:on )?(?:my |the )?(?:one|left|right) side|one side (?:feels? )?(?:weak|numb)|slurred speech|sudden confusion|passed out|unconscious|seizure|heavy bleeding)\b/i.test(normalized);
  const explicitEmergency = /\b(medical emergency|health emergency|call (?:911|emergency services)|need (?:an |the )?ambulance)\b/i.test(normalized);
  if (!(redFlag || explicitEmergency || hypertensiveCrisis)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "health.emergency-guidance") ||
      !catalog.applications.some(app => app.applicationId === "health")) return null;
  return { goal, application: "health", riskTier: "critical", clarification: null,
    steps: [{ clientStepId: "emergency-guidance", title: "Show urgent emergency guidance",
      toolId: "health.emergency-guidance", input: {
        userStatement: goal,
        systolic: bloodPressure ? Number(bloodPressure[1]) : null,
        diastolic: bloodPressure ? Number(bloodPressure[2]) : null,
        redFlagObserved: redFlag,
        emergencyServicesNotDispatched: true
      }, dependsOn: [], fallbackToolIds: [] }] };
}

function canonicalizeExplicitApplication(candidate, text, catalog) {
  if (!candidate || typeof candidate !== "object") return candidate;
  const goal = String(text || "").toLowerCase();
  const explicit = catalog.applications.slice().sort((a, b) => b.applicationId.length - a.applicationId.length).find(app => {
    const phrase = app.applicationId.replace(/-/g, " ").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${phrase.replace(/\s+/g, "\\s+(?:and\\s+)?")}\\b`, "i").test(goal);
  });
  if (!explicit || candidate.application === explicit.applicationId) return candidate;
  const capabilities = new Set(explicit.capabilities || []);
  const toolsCompatible = (candidate.steps || []).every(step => !step.toolId || capabilities.has(step.toolId));
  return toolsCompatible ? { ...candidate, application: explicit.applicationId } : candidate;
}

// Confirmed live: "My temperature is 101." and even "My blood pressure is
// 120 over 80." (a normal, healthy reading) fell all the way through this
// deterministic planner to the real AI-based planning model, which then
// treated ANY reported vital sign as a medical emergency requiring 911 --
// because this function previously only recognized command-style phrasing
// ("record/log my BP") for blood pressure alone. Nobody actually reports a
// vital that way; the natural, first-person "my X is Y" statement is how
// real voice/typed RPM logging is used, and it never matched anything
// deterministic here, so it fell through to the AI's own (wrong) judgment
// every time. Widened to accept a plain first-person statement ("my
// <vital> is/was ...") in addition to the original command-verb phrasing,
// and added temperature/pulse/oxygen/glucose alongside the existing
// blood-pressure handling. The number-extraction for the four new types
// mirrors server.js's nexus_health_preparation dispatcher's own
// VITAL_VALUE_CONNECTOR fix: the number must follow the trigger word
// through only a short, specific set of real connector words, never an
// arbitrary noun -- so a completely unrelated "temp file 42" style
// sentence (which also lacks the required "my" prefix or record/log verb)
// still cannot fabricate a reading here either.
const VITAL_VALUE_CONNECTOR = "(?:(?:today|right now|currently|now|this morning|is|was|of|reads|reading|at|=|:)\\s*)*";

function completeHealthRecordPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!catalog.tools.some(tool => tool.toolId === "health.record") ||
      !catalog.applications.some(app => app.applicationId === "health")) return null;
  const wantsRecord = /\b(record|log|save|add|capture)\b/i.test(goal);
  const isReported = vitalPhrase => wantsRecord || new RegExp(`\\bmy\\s+${vitalPhrase}\\b`, "i").test(goal);
  const makePlan = (readingType, input) => ({ goal, application: "health", riskTier: "regulated", clarification: null,
    steps: [{ clientStepId: "record-reading", title: `Record ${readingType.replace(/-/g, " ")} reading`,
      toolId: "health.record", input: { intakeType: readingType, readingType, ...input },
      dependsOn: [], fallbackToolIds: [] }] });

  if (isReported("(?:blood\\s*pressure|bp)") && /\b(?:blood\s*pressure|bp)\b/i.test(goal)) {
    const bpMatch = goal.match(/\b(?:blood\s*pressure|bp)\b[^\d]{0,40}(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/i) ||
      goal.match(/\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b[^.]{0,40}\b(?:blood\s*pressure|bp)\b/i);
    if (bpMatch) {
      const systolic = Number(bpMatch[1]); const diastolic = Number(bpMatch[2]);
      if (systolic >= 40 && systolic <= 300 && diastolic >= 20 && diastolic <= 200) return makePlan("blood-pressure", { systolic, diastolic });
    }
  }
  if (isReported("(?:blood\\s*sugar|glucose)")) {
    const match = goal.match(new RegExp(`\\b(?:blood\\s*sugar|glucose)\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d{2,3})\\b`, "i"));
    if (match) { const value = Number(match[1]); if (value >= 20 && value <= 600) return makePlan("blood-glucose", { glucose: value }); }
  }
  if (isReported("(?:oxygen|o2|spo2|pulse\\s*ox)")) {
    const match = goal.match(new RegExp(`\\b(?:oxygen|o2|spo2|pulse\\s*ox)\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d{2,3})\\b`, "i"));
    if (match) { const value = Number(match[1]); if (value >= 50 && value <= 100) return makePlan("oxygen-saturation", { oxygenSaturation: value }); }
  }
  if (isReported("temp(?:erature)?")) {
    const match = goal.match(new RegExp(`\\btemp(?:erature)?\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d{2,3}(?:\\.\\d)?)\\s*°?\\s*(?:f|c|fahrenheit|celsius)?\\b`, "i"));
    if (match) { const value = Number(match[1]); if (value >= 70 && value <= 115) return makePlan("temperature", { temperature: value }); }
  }
  if (isReported("(?:pulse|heart\\s*rate)")) {
    const match = goal.match(new RegExp(`\\b(?:pulse|heart\\s*rate)\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d{2,3})\\b`, "i"));
    if (match) { const value = Number(match[1]); if (value >= 20 && value <= 250) return makePlan("pulse", { pulse: value }); }
  }
  return null;
}

function completeTelehealthIntakePlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\btelehealth\b/i.test(goal) || !/\b(save|prepare|create|start|record)\b/i.test(goal) ||
      !/\b(intake|concern|visit|consultation|appointment)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "telehealth.prepare") ||
      !catalog.applications.some(app => app.applicationId === "telehealth")) return null;
  return { goal, application: "telehealth", riskTier: "regulated", clarification: null,
    steps: [{ clientStepId: "prepare-telehealth-intake", title: "Save telehealth intake",
      toolId: "telehealth.prepare", input: { concern: goal, requestedNextStep: true },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeMarketplaceSearchPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\bmarketplace\b/i.test(goal) || !/\b(find|search|show|browse)\b/i.test(goal) ||
      !/\b(listing|listings|product|products|offer|offers)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "marketplace.search") ||
      !catalog.applications.some(app => app.applicationId === "marketplace")) return null;
  const crop = goal.match(/\b(maize|corn|cassava|rice|wheat|sorghum|millet|beans?)\b/i)?.[1] || "agriculture";
  return { goal, application: "marketplace", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "search-marketplace", title: "Search marketplace listings",
      toolId: "marketplace.search", input: { query: crop, selectListing: /\bselect\b/i.test(goal) },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeImageSearchPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(show|find|search|display|open)\b/i.test(goal) || !/\b(images?|pictures?|photos?)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "images.search") ||
      !catalog.applications.some(app => app.applicationId === "images")) return null;
  const query = goal.replace(/^\s*(?:nexus[,:]?\s*)?(?:show|find|search|display|open)\s+(?:me\s+)?/i, "")
    .replace(/\b(images?|pictures?|photos?)\b/ig, "").replace(/\s+/g, " ").trim() || goal;
  return { goal, application: "images", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "search-images", title: "Search governed images", toolId: "images.search",
      input: { query, requireSources: true }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeLiveKnowledgePlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/[?]|\b(why|what|how|when|where|who)\b/i.test(goal) || !/\b(current|latest|live|sources?)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "knowledge.search") ||
      !catalog.applications.some(app => app.applicationId === "live-knowledge")) return null;
  return { goal, application: "live-knowledge", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "search-live-knowledge", title: "Search current governed sources",
      toolId: "knowledge.search", input: { query: goal, requireCurrentSources: true }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeMobileClinicPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\bmobile\s+clinic\b/i.test(goal) || !/\b(find|search|show|locate)\b/i.test(goal) ||
      !/\b(location|locations|near|nearest|closest)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "clinic.find") ||
      !catalog.applications.some(app => app.applicationId === "mobile-clinic")) return null;
  const location = goal.match(/\b(?:near|in|around)\s+([a-z][a-z .'-]*?)(?=\s+(?:and|then|with)\b|[,.]|$)/i)?.[1]?.trim() || "current location";
  return { goal, application: "mobile-clinic", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "find-mobile-clinic", title: "Find mobile clinic locations",
      toolId: "clinic.find", input: { location, selectClosest: /\b(nearest|closest|select)\b/i.test(goal) },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeMediaPlaybackPlan(text, catalog) {
  const goal = String(text || "").trim();
  const requestedMedia = goal.replace(/^\s*(?:nexus[,:]?\s*)?play\s+/i, "").replace(/\s+and\s+confirm\b.*$/i, "").trim();
  if (!/^\s*(?:nexus[,:]?\s*)?play\b/i.test(goal) || !requestedMedia) return null;
  if (!catalog.tools.some(tool => tool.toolId === "media.play") ||
      !catalog.applications.some(app => app.applicationId === "music-media")) return null;
  return { goal, application: "music-media", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "play-media", title: "Play requested media", toolId: "media.play",
      input: { action: "play", requestedMedia, resolvedMedia: requestedMedia, playbackState: "playing" },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeDocumentPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(create|write|draft|make)\b/i.test(goal) || !/\b(document|plan|report|resume|résumé)\b/i.test(goal) ||
      !/\b(save|reopen|open again|persist)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "documents.create") ||
      !catalog.applications.some(app => app.applicationId === "documents")) return null;
  const namedTitle = goal.match(/(?:called|titled|named)\s+["']?(.+?)(?=["']?(?:,|\s+then\b|\s+and\s+(?:save|open|reopen)\b|\.|$))/i)?.[1]?.trim();
  return { goal, application: "documents", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "create-document", title: "Create, save, and verify document",
      toolId: "documents.create", input: { title: namedTitle || "Nexus document", content: goal, reopenAfterSave: true },
      dependsOn: [], fallbackToolIds: [] }] };
}

// Confirmed by production capability audit: lists.create/read/update had
// real executors and real tests but no fast-path matcher at all, so every
// list request depended on the LLM planning model -- which, unlike a
// fast-path, produces a channel-sensitive prompt (see
// nexus/experience/interaction-profile.js's voiceOnly/conciseSpokenPrompts),
// meaning voice and typed weren't guaranteed to plan identically for this
// domain. A deterministic matcher makes lists channel-blind by construction,
// the same way documents/maps/images already are.
function completeListsPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(list|checklist)\b/i.test(goal)) return null;
  if (!/\b(create|make|start|save)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "lists.create") ||
      !catalog.applications.some(app => app.applicationId === "lists")) return null;
  const namedTitle = goal.match(/(?:called|titled|named|for)\s+["']?(.+?)(?=["']?(?:,|\s+with\b|\s+including\b|\.|$))/i)?.[1]?.trim();
  const itemsClause = goal.match(/\b(?:with|including)\s+(?:items?\s*[:]?\s*)?(.+?)(?:\.|$)/i)?.[1];
  const items = itemsClause ? itemsClause.split(/,|\band\b/i).map(item => item.trim()).filter(Boolean) : [];
  return { goal, application: "lists", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "create-list", title: "Create a checklist",
      toolId: "lists.create", input: { title: namedTitle || "Nexus checklist", items, command: goal },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeCommunicationPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(message|communication|follow-up)\b/i.test(goal) || !/\b(draft|write|prepare)\b/i.test(goal) ||
      !/\b(consent|permission|approval)\b/i.test(goal) || !/\b(send|deliver)\b/i.test(goal) ||
      !/\b(receipt|confirmation|proof)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "communications.send") ||
      !catalog.applications.some(app => app.applicationId === "communications")) return null;
  return { goal, application: "communications", riskTier: "medium", clarification: null,
    steps: [{ clientStepId: "send-communication", title: "Draft and deliver consented communication",
      toolId: "communications.send", input: { draft: goal, consentRequired: true, returnDeliveryReceipt: true },
      dependsOn: [], fallbackToolIds: [] }] };
}

// "Text +254712345678 saying I'm on my way", "Email amina@example.com saying the delivery is ready". The recipient must be
// a phone number with country code or an email address given in the request, and the words must be given too; the person
// is then shown both and must say yes before anything is sent (see consent/user-confirmable-consents.js). A request that
// starts like a send but lacks either gets a question, never a guess.
const SEND_OPENER = /^\s*(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*(?:(text|sms|whatsapp|whats app|e-?mail)\b|send\s+(?:an?\s+|the\s+)?(text(?:\s+message)?|sms|whatsapp(?:\s+message)?|e-?mail|message)\b)/i;
const SEND_MESSAGE_CLAUSE = /(?:\b(?:saying|says|that says|to say|with the (?:message|text))\b[:,]?|:)\s*["“']?(.+?)["”']?\s*$/is;
const SEND_PHONE = /\+\d[\d\s().-]{6,18}\d/;
const SEND_EMAIL = /[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+/;

function sendMessagePlan(text, catalog) {
  const goal = String(text || "").trim();
  const opener = SEND_OPENER.exec(goal);
  if (!opener) return null;
  if (!catalog.tools.some(tool => tool.toolId === "communications.send") ||
      !catalog.applications.some(app => app.applicationId === "communications")) return null;
  const message = SEND_MESSAGE_CLAUSE.exec(goal);
  const before = message ? goal.slice(0, message.index) : goal;
  const email = SEND_EMAIL.exec(before)?.[0].replace(/[.,;:!?]+$/, "");
  const phone = email ? null : SEND_PHONE.exec(before)?.[0];
  const asked = String(opener[1] || opener[2] || "").toLowerCase().replace(/\s+/g, " ");
  const clarify = question => ({ goal, application: "communications", riskTier: "regulated", clarification: question, steps: [] });
  if (!email && !phone) return clarify("Who should I send it to? Give me their phone number with the country code, like +254712345678, or their email address.");
  const words = message?.[1]?.replace(/\s+/g, " ").trim();
  if (!words) return clarify("What should the message say?");
  const channel = email ? "email" : /whatsapp|whats app/.test(asked) ? "whatsapp" : "sms";
  return { goal, application: "communications", riskTier: "regulated", clarification: null,
    steps: [{ clientStepId: "send-message", title: `Send a ${channel === "email" ? "email" : channel === "whatsapp" ? "WhatsApp message" : "text message"}`,
      toolId: "communications.send", input: { channel, to: email || phone.replace(/[\s().-]/g, ""), message: words },
      dependsOn: [], fallbackToolIds: [] }] };
}

// "Call +15105019401 and say I am on my way", "Phone +254712345678 saying the delivery is ready". Only when a phone number is given in
// the request, so "call me a taxi" or "call it a day" are never taken for a call. The person is shown the number and the words the
// computer voice will say and must say yes before the call is placed (see consent/user-confirmable-consents.js).
const CALL_OPENER = /^\s*(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*(?:call|phone|ring|dial)\b/i;
const CALL_MESSAGE_CLAUSE = /(?:\b(?:and|then)?\s*(?:say|saying|says|tell (?:them|him|her)|tell (?:them|him|her) that|with the message|to say)\b[:,]?|:)\s*["“']?(.+?)["”']?\s*$/is;

function callPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!CALL_OPENER.test(goal)) return null;
  const phone = SEND_PHONE.exec(goal)?.[0];
  if (!phone) return null;
  if (!catalog.tools.some(tool => tool.toolId === "communications.send") ||
      !catalog.applications.some(app => app.applicationId === "communications")) return null;
  const clause = CALL_MESSAGE_CLAUSE.exec(goal.slice(goal.indexOf(phone) + phone.length));
  const words = clause?.[1]?.replace(/\s+/g, " ").replace(/^that\s+/i, "").trim();
  const base = { goal, application: "communications", riskTier: "regulated" };
  // A number that can never be called (premium-rate or special range, or not a full international number) is refused here, before
  // anyone is asked to confirm something that would be refused afterwards.
  if (!normalizeRecipient("call", phone)) return { ...base, clarification: "I cannot place a call to that number. Give me a regular phone number with the country code, like +15105019401.", steps: [] };
  if (!words) return { ...base, clarification: "What should the call say?", steps: [] };
  return { ...base, clarification: null,
    steps: [{ clientStepId: "place-call", title: "Place a phone call", toolId: "communications.send",
      input: { channel: "call", to: phone.replace(/[\s().-]/g, ""), message: words }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeRemainingWorkspacePlan(text, catalog) {
  const goal = String(text || "").trim();
  const has = (toolId, application) => catalog.tools.some(tool => tool.toolId === toolId) &&
    catalog.applications.some(app => app.applicationId === application);
  const plan = (application, toolId, title, input, riskTier = "low") => has(toolId, application) ?
    { goal, application, riskTier, clarification: null, steps: [{ clientStepId: `${application}-action`, title,
      toolId, input, dependsOn: [], fallbackToolIds: [] }] } : null;
  if (/\b(assess|diagnose|inspect)\b/i.test(goal) && /\b(crop|maize|corn|cassava|rice|wheat|leaves?)\b/i.test(goal) && /\bsources?\b/i.test(goal))
    return plan("agriculture", "knowledge.search", "Assess crop condition with governed sources",
      { query: goal, crop: goal.match(/\b(maize|corn|cassava|rice|wheat)\b/i)?.[1] || "crop", observations: [goal] });
  if (/\b(find|search|show|locate)\b/i.test(goal) && /\bpharmacy\b/i.test(goal) && /\b(safety|sources?|medication|metformin)\b/i.test(goal)) {
    // A pharmacy search needs a real place to look near; without one the tool can only
    // consult its empty local catalog. Take it from "near/in/around <place>" when given.
    const place = goal.match(/\b(?:near|in|around)\s+([a-z][a-z .'-]*?)(?=\s+(?:and|then|with)\b|[,.?]|$)/i)?.[1]?.trim();
    return plan("pharmacy", "pharmacy.find", "Find governed pharmacy support", { query: goal, ...(place ? { location: place } : {}) });
  }
  if (/\b(create|make|prepare)\b/i.test(goal) && /\b(lesson|literacy|learning)\b/i.test(goal) && /\b(save|progress)\b/i.test(goal))
    return plan("learning", "knowledge.search", "Create and save governed learning content",
      { query: goal, lesson: goal, content: goal, saveProgress: true });
  if (/\b(find|search|show)\b/i.test(goal) && /\b(jobs?|work|opportunities)\b/i.test(goal) && /\b(select|listing|sources?)\b/i.test(goal))
    return plan("workforce", "jobs.search", "Find governed workforce listings", { query: goal, selectListing: true });
  if (/\b(show|map|route|directions?|get|take|travel)\b/i.test(goal) && /\bfrom\b/i.test(goal) && /\bto\b/i.test(goal)) {
    const endpoints = goal.match(/\bfrom\s+(.+?)\s+to\s+(.+?)(?:\s+with\b|[,.]|$)/i);
    return plan("maps", "maps.view", "Render governed route", { origin: endpoints?.[1]?.trim() || "Nairobi",
      destination: endpoints?.[2]?.trim() || "Nakuru", requireRouteGeometry: true });
  }
  // Every phrase parseAssistantReminderTime (nexus/reminders/time-phrase.js) understands must route here.
  // "in 2 minutes" and weekdays used to be missing, so "Remind me to ... in 2 minutes" fell through to the
  // AI planner, whose invented input shape was ignored and which was silently scheduled for tomorrow.
  if (/\b(remind|reminder)\b/i.test(goal) &&
      /\b(tomorrow|today|tonight|later today|this afternoon|in\s+\d{1,3}\s*(?:minutes?|mins?|hours?|hrs?|days?|weeks?)|(?:sunday|monday|tuesday|wednesday|thursday|friday|saturday)|\d{1,2}(?::\d{2})?\s*(?:am|pm))\b/i.test(goal) &&
      /\b(save|schedule|remind)\b/i.test(goal))
    return plan("reminders", "reminders.schedule", "Persist governed reminder", { reminder: goal, when: goal });
  if (/\b(queue|queued)\b/i.test(goal) && /\boffline\b/i.test(goal) && /\b(sync|synchronize|synchronise)\b/i.test(goal) &&
      /\b(acknowledg(?:e|ement)|server|receipt|confirm)\b/i.test(goal))
    return plan("offline-queue", "offline.sync", "Synchronize governed offline operation",
      { operation: "sync", observation: goal, requireServerAcknowledgement: true });
  if (/\b(prepare|plan|create)\b/i.test(goal) && /\b(field\s+operation|operation)\b/i.test(goal) && /\b(approval|receipt)\b/i.test(goal))
    return plan("operations", "drone.plan", "Prepare governed field operation", { operation: goal, recordApproval: true }, "medium");
  return null;
}

// Confirmed live (2026-09-18): a real user's typed command for any of the
// 10 business/nonprofit tools (add a customer/donor, log a transaction,
// invoices, grants, tasks, appointments, generate documents/plan/marketing,
// the performance dashboard) never reached nexus/business/* at all -- with
// no deterministic matcher and no canonical business tool in this catalog,
// the AI planning model guessed the nearest unrelated tool (documents.create)
// and silently created a fabricated document instead of the real action.
// Delegates classification and field extraction to
// nexus/business/voice-dispatch.js's pure, no-database helpers -- the SAME
// module the real executor (nexus/runtime/create-runtime.js) and the legacy
// nexus_business_assistant OpenAI-native tool (server.js) both use, so this
// deterministic fast path, real voice, and real execution never drift apart
// on what counts as a valid command.
// Deterministic fast path for reminders.list / reminders.cancel. "Remind me
// to ..." is left to the schedule matcher; only explicit show/list/cancel
// requests about reminders land here.
function completeRemindersManagePlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\breminders?\b/i.test(goal)) return null;
  const has = toolId => catalog.tools.some(tool => tool.toolId === toolId);
  if (!catalog.applications.some(app => app.applicationId === "reminders")) return null;
  const build = (toolId, title, input) => ({ goal, application: "reminders", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "reminders-manage", title, toolId, input, dependsOn: [], fallbackToolIds: [] }] });
  if (/\b(cancel|delete|remove|clear|forget|scrap)\b/i.test(goal)) {
    if (!has("reminders.cancel")) return null;
    const idMatch = goal.match(/\bntf_[a-z0-9-]+/i);
    const subject = (goal.match(/\breminders?\s+(?:to|about|for|of)\s+(.+?)[.?!]*$/i)
      || goal.match(/\b(?:cancel|delete|remove|clear|forget|scrap)\s+(?:my|the|that|this)?\s*(.+?)\s+reminders?\b/i))?.[1]?.trim() || "";
    return build("reminders.cancel", "Cancel one upcoming reminder", { intent: "cancel_reminder", reminder: subject, ...(idMatch ? { reminderId: idMatch[0] } : {}) });
  }
  if (/\b(show|list|view|see|check|what|which|do i have|display|read)\b/i.test(goal) && !/\bremind\s+me\b/i.test(goal)) {
    if (!has("reminders.list")) return null;
    return build("reminders.list", "List the user's upcoming reminders", { intent: "list_reminders" });
  }
  return null;
}

function completeBusinessPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!catalog.tools.some(tool => tool.toolId === "business.manage") ||
      !catalog.tools.some(tool => tool.toolId === "business.query") ||
      !catalog.applications.some(app => app.applicationId === "business")) return null;
  const { intent, toolId, clarification } = businessVoiceDispatch.precheck(goal, {});
  if (!intent) return null;
  if (clarification) return { goal, application: "business", riskTier: "low", clarification, steps: [] };
  return { goal, application: "business", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "business-action", title: "Handle the business/nonprofit workspace request",
      toolId, input: { command: goal }, dependsOn: [], fallbackToolIds: [] }] };
}

// The model sometimes selects a tool that cannot run on what the user asked for: 2026-09-19 "Give me a 3-step plan
// for starting a small poultry business" was planned as maps.view with no route, and surfaced as a 502
// "verifier rejected the maps.view outcome". Rejecting it here lets the repair loop (with this feedback) or the
// direct-answer fallback handle it.
const REQUIRED_STEP_INPUTS = Object.freeze({ "maps.view": Object.freeze(["origin", "destination"]) });

function validatePlan(candidate, catalog, context) {
  const errors = []; const toolIds = new Set(catalog.tools.map(tool => tool.toolId));
  const applicationIds = new Set(catalog.applications.map(app => app.applicationId));
  if (!candidate || typeof candidate !== "object") errors.push("Plan must be an object.");
  if (!String(candidate?.goal || "").trim()) errors.push("Plan goal is required.");
  if (!applicationIds.has(candidate?.application)) errors.push(`Unknown application: ${candidate?.application || "missing"}.`);
  const clarification = String(candidate?.clarification || "").trim();
  if (!Array.isArray(candidate?.steps) || (!candidate.steps.length && !clarification)) errors.push("At least one plan step or a clarification is required.");
  const ids = new Set();
  for (const [index, step] of (candidate?.steps || []).entries()) {
    const id = String(step.id || `step_${index + 1}`); if (ids.has(id)) errors.push(`Duplicate step id: ${id}.`); ids.add(id);
    if (!String(step.title || "").trim()) errors.push(`Step ${id} requires a title.`);
    if (!clarification && !step.toolId) errors.push(`Step ${id} requires an executable tool.`);
    if (step.toolId && !toolIds.has(step.toolId)) errors.push(`Step ${id} references unavailable tool ${step.toolId}.`);
    const missingInput = (REQUIRED_STEP_INPUTS[step.toolId] || []).filter(key => !String(step.input?.[key] ?? "").trim());
    if (missingInput.length) errors.push(`Step ${id} uses ${step.toolId} but is missing required input: ${missingInput.join(", ")}. Choose a different tool or ask for the missing detail.`);
    // A send or call with no usable recipient or words used to reach a generic "I prepared the request" confirmation and then be
    // refused ("Call my brother and say hi"). Only the deploy's draft-only shape is exempt (see completeCommunicationPlan).
    if (step.toolId === "communications.send" && !normalizeSendRequest(step.input) && !(step.input?.draft && step.input?.consentRequired === true))
      errors.push(`Step ${id} uses communications.send but has no usable recipient and message. Ask the user for the recipient (a phone number with the country code, or an email address) and the exact words; never guess a number or address.`);
    if (step.requiredPermission && !context.can(step.requiredPermission)) errors.push(`Step ${id} requires unavailable permission ${step.requiredPermission}.`);
  }
  for (const step of candidate?.steps || []) for (const dependency of step.dependsOn || []) if (!ids.has(String(dependency))) errors.push(`Unknown dependency ${dependency}.`);
  if (hasCycle(candidate?.steps || [])) errors.push("Plan dependencies contain a cycle.");
  if (errors.length) return { valid: false, errors };
  return { valid: true, plan: { goal: candidate.goal.trim(), application: candidate.application,
    riskTier: candidate.riskTier || "low", clarification: clarification || null,
    steps: candidate.steps.map((step, index) => ({ clientStepId: String(step.id || `step_${index + 1}`), title: step.title.trim(),
      toolId: step.toolId || null, input: step.input || {}, dependsOn: step.dependsOn || [], fallbackToolIds: step.fallbackToolIds || [] })) } };
}

function hasCycle(steps) {
  const graph = new Map(steps.map((step, index) => [String(step.id || `step_${index + 1}`), (step.dependsOn || []).map(String)]));
  const active = new Set(); const done = new Set();
  function visit(id) { if (active.has(id)) return true; if (done.has(id)) return false; active.add(id); for (const dep of graph.get(id) || []) if (visit(dep)) return true; active.delete(id); done.add(id); return false; }
  return [...graph.keys()].some(visit);
}
function summarizeTask(task) { return task ? { taskId: task.taskId, goal: task.goal, application: task.application, state: task.state, outcome: task.outcome || null } : null; }
// "give me my brief", "what's my morning brief", "brief me". Anchored, so a request to SCHEDULE one ("send me a brief at 7am") is not this.
const BRIEF_REQUEST = [
  /^(?:please )?(?:give me|show me|tell me|get me|read me|what(?:'s| is)) (?:my|the) (?:(?:daily|morning|today's|todays) )*(?:brief|briefing|update|rundown)(?: for today| today| now| please)?$/,
  /^(?:please )?brief me(?: now| today| please)?$/,
  /^(?:my )?(?:(?:daily|morning) )+brief(?:ing)?(?: now| today| please)?$/
];
function isBriefRequest(text) {
  const normalized = String(text || "").toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim();
  return Boolean(normalized) && BRIEF_REQUEST.some(pattern => pattern.test(normalized));
}
// "Text Otieno saying hi", "Email Amina Wanjiru saying the delivery is ready", "Call my brother and say I am late": a saved person's name where a
// number would be. Only when the name is followed by the words to send or say, so "call me a taxi" and "text me" are never this.
const NAMED_CONTACT_REQUEST = /^((?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*)(text|sms|whats ?app|e-?mail|call|phone|ring|dial|send (?:an? |the )?(?:(?:text|sms|whats ?app|e-?mail)(?: message)?|message) to)\s+(?:to )?(.+?)\s+((?:and say|and tell (?:them|him|her)|saying|says|to say|tell (?:them|him|her)|with the message)\b.*|:.*)$/is;
function parseNamedContactRequest(text) {
  const match = NAMED_CONTACT_REQUEST.exec(String(text || "").trim());
  if (!match || /[\d@]/.test(match[3])) return null;
  const name = contactName(match[3]);
  if (!name) return null;
  return { name, before: `${match[1]}${match[2]} `, rest: match[4], wantsEmail: /e-?mail/i.test(match[2]) };
}
function withContactName(plan, name) {
  if (!name || !plan?.steps?.length) return plan;
  return { ...plan, steps: plan.steps.map(step => (step?.toolId === "communications.send" ? { ...step, input: { ...step.input, contactName: name } } : step)) };
}

// Setting up, changing, stopping and asking about a scheduled brief. Anchored patterns: "Give me a brief history of maize" and
// "Brief my supplier" are never this. A setup with no time asks for one; a time that cannot be read is treated as no time.
const BRIEF_NOUN = "(?:(?:daily|morning) )+brief(?:ing)?s?";
const BRIEF_SETUP = [
  new RegExp(`^(?:please )?(?:send|give|push|text) me (?:a |my )?${BRIEF_NOUN}(?: every (?:day|morning))?(?:\\s+(?:at|for|by)\\s+(.+))?$`),
  new RegExp(`^(?:please )?(?:set up|start|turn on|schedule|enable) (?:a |my )?${BRIEF_NOUN}(?: every (?:day|morning))?(?:\\s+(?:at|for|by)\\s+(.+))?$`),
  new RegExp(`^(?:please )?change my ${BRIEF_NOUN.replace("+", "*")} to\\s+(.+)$`),
  new RegExp(`^(?:every|each) (?:day|morning),? (?:at )?(.+?),? (?:please )?(?:send|give|push) me (?:a |my )?${BRIEF_NOUN.replace("+", "*")}$`)
];
const BRIEF_STOP = new RegExp(`^(?:please )?(?:stop|cancel|turn off|disable|end|remove|pause) (?:sending )?(?:my |the )?${BRIEF_NOUN.replace("+", "*")}(?: please)?$|^no more ${BRIEF_NOUN}$`);
const BRIEF_STATUS = [
  new RegExp(`^(?:when|what time) (?:is|does) my ${BRIEF_NOUN.replace("+", "*")}(?: (?:come|arrive|go out|get sent|send|start))?$`),
  new RegExp(`^is my ${BRIEF_NOUN.replace("+", "*")} (?:on|set up|scheduled|active|turned on)$`),
  new RegExp(`^do i have a ${BRIEF_NOUN.replace("+", "*")}(?: set up| scheduled)?$`)
];
function parseBriefControl(text) {
  const normalized = String(text || "").toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim();
  if (!normalized || normalized.length > 120) return null;
  if (BRIEF_STOP.test(normalized)) return { action: "stop" };
  if (BRIEF_STATUS.some(pattern => pattern.test(normalized))) return { action: "status" };
  for (const pattern of BRIEF_SETUP) {
    const match = pattern.exec(normalized);
    if (match) return { action: "schedule", timeOfDay: match[1] ? parseTimeOfDay(match[1]) : null };
  }
  return null;
}
function briefPlan(goal, text, byKind = {}) {
  const response = text || (byKind.location
    ? `I could not reach the weather for ${byKind.location} just now, and you have no reminders due today, so I have nothing to brief you on.`
    : 'I have nothing to brief you on yet. Tell me where you are ("I live in <your town>") and set a reminder, and I will have something to say.');
  return { goal: String(goal || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false };
}

// The languages a person can say they prefer, as the locale their direct answers are written in.
const LANGUAGE_LOCALES = Object.freeze({ Swahili: "sw", French: "fr", Hausa: "ha", Yoruba: "yo", Igbo: "ig", Amharic: "am", Arabic: "ar", Portuguese: "pt", Somali: "so", Zulu: "zu", Xhosa: "xh" });

// "weather" on its own asks which town; when the person has told Kyro where they are, it just answers for that town.
const BARE_WEATHER = /^(?:(?:what(?:'s| is)?|how(?:'s| is))\s+)?(?:the\s+)?(?:weather|forecast|temperature|hali ya hewa)(?:\s+like)?(?:\s+(?:today|tomorrow|now|right now|leo|kesho))?$/;
function withSavedLocationForWeather(command, byKind) {
  const normalized = String(command?.text || "").toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").trim();
  if (!byKind?.location || !BARE_WEATHER.test(normalized)) return command;
  const when = /\b(tomorrow|kesho)\b/.test(normalized) ? "tomorrow" : /\bnow\b/.test(normalized) ? "right now" : "today";
  return { ...command, text: `What's the weather in ${byKind.location} ${when}?` };
}

// Searches about farming, weather or prices are local. When the person has told Kyro where they are and the question names no
// place, the search asks about their town; "my crops" becomes the crops they said they grow. The question shown to the person
// (the plan's goal) is left as they asked it.
const LOCAL_TOPIC = /\b(plant|planting|sow|sowing|harvest|rain|rains|rainy|weather|season|seasons|fertili[sz]er|pest|pests|price|prices|market|yield|soil|irrigat\w*|drought|frost|forecast)\b/i;
const NAMES_A_PLACE = /\b(?:in|near|around|at|for)\s+[A-Za-z]/i;
function personalizedQuery(query, byKind) {
  let text = String(query || "");
  if (byKind?.crops && /\bmy (?:crops?|plants?|harvest|farm)\b/i.test(text)) text += ` (I grow ${byKind.crops})`;
  if (byKind?.location && LOCAL_TOPIC.test(text) && !NAMES_A_PLACE.test(text)) text += ` in ${byKind.location}`;
  return text;
}
function personalizedSearch(plan, byKind) {
  if (!plan?.steps?.length || !byKind || !Object.keys(byKind).length) return plan;
  return { ...plan, steps: plan.steps.map(step => step?.toolId === "knowledge.search" && typeof step.input?.query === "string" && step.input.query
    ? { ...step, input: { ...step.input, query: personalizedQuery(step.input.query, byKind) } } : step) };
}

function safeMemory(item) { return { kind: item.kind, content: item.content, confidence: item.confidence, provenance: item.provenance, occurredAt: item.occurred_at || item.occurredAt }; }
function safeTurn(item) { return { role: item.role, content: item.content, occurredAt: item.created_at || item.occurredAt }; }

module.exports = Object.freeze({ OpenEndedPlanner, ordinaryConversationPlan, isMemoryRecallQuestion, memoryRecallPlan, isAssistantIntroductionRequest, assistantIntroductionPlan, agricultureAdvicePlan, canonicalizeExplicitApplication, emergencyHealthGuidancePlan, completeHealthRecordPlan,
  completeTelehealthIntakePlan, completeMarketplaceSearchPlan, completeLiveKnowledgePlan,
  completeMobileClinicPlan, completeMediaPlaybackPlan, completeImageSearchPlan, completeDocumentPlan, completeListsPlan, completeCommunicationPlan, sendMessagePlan, callPlan, personalRecordQuestionPlan, isLightChatRequest, isBriefRequest, parseBriefControl,
  completeRemainingWorkspacePlan, completeBusinessPlan, completeRemindersManagePlan, validatePlan });
