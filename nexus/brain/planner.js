"use strict";

const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
const { createInteractionProfile } = require("../experience/interaction-profile.js");
const businessVoiceDispatch = require("../business/voice-dispatch.js");
// the business requests the farm and shop books must not answer for a person who has a workspace (see the check before the toolkits in plan())
const WORKSPACE_FIRST_INTENTS = new Set(["listInvoices", "listLeads", "addLead", "billsDue", "listListings"]);
const businessInsights = require("../business/insights.js");
const { normalizeRecipient, normalizeSendRequest } = require("../communications/send-request.js");
const automationCommands = require("../../public/kyro-automation-commands.js");
const { sameName: automationSameName } = require("../automations/connection.js");
const { WORKSPACE_ID: automationWorkspace, RECORD_TYPE: automationRecordType } = require("../automations/executor.js");
const { accepted: acceptedAlertOffer } = require("../companion/offer.js");
const { farmLogTurn } = require("../farm/log.js");
const { farmWorkTurn } = require("../farmwork/index.js");
const { healthWorkTurn } = require("../healthwork/index.js");
const { storeReadingsTurn, manageIntent: healthReadingsIntent } = require("../health/store-readings.js");
const { wellnessTurn } = require("../wellness/log.js");
const { communityTurn } = require("../community/desk.js");
const { feedbackTurn } = require("../quality/feedback.js");
const { parseWeeklyControl, WEEKDAYS } = require("../brief/weekly.js");
const { extractProfileStatement, extractForgetRequest, savedNotice, forgottenNotice, sentenceFor, isFact } = require("../memory/profile-facts.js");
const { professionalAdviceTopic, professionalAdviceReply, professionalAdviceGoal, withProfessionalAdviceNote } = require("../guardrails/professional-advice.js");
const { usSmallBusinessTopic, usSmallBusinessAnswer, isUsContext, UNIVERSAL_TOPICS } = require("../knowledge/us-small-business.js");
const { language: guideLanguage } = require("../../public/kyro-business-topics.js");
const { communityTopic, communityAnswer, isCommunityUs } = require("../knowledge/us-community-support.js");
const { africaTopic, africaAnswer, africaCountry, africaNamed } = require("../knowledge/africa-small-business.js");
const { technologyTopic, technologyAnswer } = require("../knowledge/small-business-technology.js");
const { aiToolsTopic, aiToolsAnswer } = require("../knowledge/ai-tools-for-business.js");
const { womensHealthTopic } = require("../knowledge/womens-health-topics.js");
const { womensHealthAnswer } = require("../knowledge/womens-health.js");
const { chronicTopic } = require("../../public/kyro-chronic-topics.js");
const { chronicConditionAnswer } = require("../knowledge/chronic-conditions.js");
const { parentsTopic } = require("../../public/kyro-parents-topics.js");
const { parentsGuideAnswer } = require("../knowledge/parents-guide.js");
const { readSafetyDetailed } = require("../companion/safety.js");
const { prTopic } = require("../../public/kyro-pr-topics.js");
const { prEventsAnswer } = require("../knowledge/pr-events-guide.js");
const { churchTopic } = require("../../public/kyro-church-topics.js");
const { churchAnswer } = require("../knowledge/church-guide.js");
const { athleteTopic } = require("../../public/kyro-athlete-topics.js");
const { athleteAnswer } = require("../knowledge/athlete-guide.js");
const { moneyTopic } = require("../../public/kyro-money-topics.js");
const { howtoTopic } = require("../../public/kyro-howto-topics.js");
const { safetyTopic } = require("../../public/kyro-safety-topics.js");
const { safetyAnswer } = require("../knowledge/safety-guide.js");
const { specialEdTopic, placeOf: specialEdPlace } = require("../../public/kyro-special-ed-topics.js");
const { specialEdAnswer } = require("../knowledge/special-ed-guide.js");
const { reentryTopic, placeOf: reentryPlace } = require("../../public/kyro-reentry-topics.js");
const { reentryAnswer } = require("../knowledge/reentry-guide.js");
const { tripRequest } = require("../../public/kyro-trip-topics.js");
const { tripGoal, parseTripAnswer, outlineContent, tripDocument, needsPlaceAnswer, TRIP_INSTRUCTIONS } = require("../trips/itinerary.js");
const { moneyAnswer } = require("../knowledge/money-guide.js");
const { moneyWalkthrough, WALK_OF_TOPIC: MONEY_WALK_OF_TOPIC, moneyWalkthroughFor } = require("../knowledge/money-walkthroughs.js");
const { athleteWalkthrough, WALK_OF_TOPIC: ATHLETE_WALK_OF_TOPIC, athleteWalkthroughFor } = require("../knowledge/athlete-walkthroughs.js");
const { prWalkthrough, WALK_OF_TOPIC: PR_WALK_OF_TOPIC } = require("../knowledge/pr-walkthroughs.js");
const { childHelpTopic } = require("../../public/kyro-child-help.js");
const { childHelpAnswer } = require("../knowledge/child-help.js");
const { stateEntityIntent, stateEntityAnswer, stripWakeWord } = require("../knowledge/state-entities.js");
const { sourcesPageRequest, sourcesPageAnswer } = require("../knowledge/sources-page.js");
const { californiaTopic, californiaAnswer } = require("../knowledge/california-business.js");
const { californiaWalkthrough, walkthroughAsk } = require("../knowledge/california-walkthroughs.js");
const { usWalkthrough, usWalkTopic } = require("../knowledge/us-walkthroughs.js");
const { guideWalkthrough, walkthroughForText: guideWalkthroughForText } = require("../knowledge/guide-walkthroughs.js");
const { offersFor, offerLine, checklistAsk } = require("../knowledge/offers.js");
const { feedRequest, grantsAnswer, rulesAnswer } = require("../knowledge/live-feeds.js");
const { templateRequest, consultingTemplate } = require("../knowledge/consulting-templates.js");
// how a starter document is named when it is spoken back (the title in lower case, except where that reads wrongly)
const SPOKEN_TEMPLATE_NAMES = Object.freeze({ "ai-use-policy": "AI use policy", "vendor-questions": "list of questions for a web host, designer or developer", "app-brief": "app brief" });
const { DEMONYM: CONTACT_DEMONYM, extractContactStatement, extractContactRequest, resolveContact, describeContact, contactName, cleanContactName, spokenPhone, localPhoneToE164 } = require("../memory/contacts.js");
const { parseTimeOfDay, formatTimeOfDay } = require("../brief/schedule.js");
const { parseWeatherQuestion, weatherAnswer, daysNeeded } = require("../brief/weather-answer.js");
const { validTimeZone, DEFAULT_TIME_ZONE, localDay } = require("../brief/compose.js");
const { personalTurn } = require("../personal/items.js");
const { hasReminderTimePhrase, resolveReminderTime, extractAssistantReminderTask } = require("../reminders/time-phrase.js");
const { repeatReminderTurn } = require("../reminders/repeat-service.js");
const { completeAmbiguousHour } = require("../reminders/pending-hour.js");
const { assessBloodPressure, invalidReadingReply } = require("../../server/providers/bloodPressure.js");
const { resolveGlucose, toMgdl, invalidGlucoseReply, ambiguousUnitReply } = require("../../server/providers/bloodGlucose.js");
const { parseReading: parseSpokenReading } = require("../health/vitals-speech.js");
const { contentGuardReply } = require("./content-guard.js");
const KyroMediaCommands = require("../../public/kyro-media-commands.js");
const { emergencyNumberAnswer } = require("../companion/emergency-number.js");
const { parseNearbyPlacesRequest, animalServiceRequest: animalServiceRequestFor, countryEntry, placeMentionedIn } = require("../../server/providers/placesLocation.js");
const { normaliseSpoken } = require("../speech/normalise.js");
const { parseSwahiliReminder, parseSwahiliRepeating, parseSwahiliStop, parseSwahiliList, parseSwahiliCalendar, NEED_TIME_SW, NEED_TASK_SW, NEED_DAY_SW, UNSUPPORTED_REPEAT_SW, NEED_EVENT_DAY_SW, NEED_EVENT_TITLE_SW, stoppedReplySw } = require("../reminders/swahili-reminder.js");

class OpenEndedPlanner {
  constructor({ model, tools, applications, memory, brief, alerts, weekly, companion, wellnessStore, repeatReminders, community, farmWork, healthWork, healthReadings, businessWorkspaces, documents, automationRecords, liveFeeds, maxRepairAttempts = 2 }) {
    if (!model?.plan) throw new Error("A planning model is required.");
    Object.assign(this, { model, tools, applications, memory, brief, alerts, weekly, companion, wellnessStore, repeatReminders, community, farmWork, healthWork, healthReadings, businessWorkspaces, documents, automationRecords, liveFeeds, maxRepairAttempts });
  }

  // The no-workspace answer for a business/nonprofit request, or null when the person has a workspace (or this cannot be told: then the request goes on as before and the executor's own check still applies).
  async noBusinessWorkspaceAnswer(text, context) {
    if (!this.businessWorkspaces?.count || context?.deterministicOnly === true) return null;
    const intent = businessVoiceDispatch.classify(text);
    if (!businessVoiceDispatch.needsWorkspace(intent)) return null;
    let count = null;
    try { count = await this.businessWorkspaces.count(context); } catch { return null; }
    return count === 0 ? businessVoiceDispatch.noWorkspaceReply(intent) : null;
  }

  // "Send me a weekly summary on Sunday at 6pm" / "stop my weekly summary" / "do I have a weekly summary?": opt-in, like the morning brief.
  async weeklyControlTurn(command, context, known) {
    const weekly = this.weekly;
    if (!weekly?.schedule || !weekly?.stop || !weekly?.status) return null;
    const request = parseWeeklyControl(command.text);
    if (!request) return null;
    const scope = { tenantId: command.tenantId, userId: command.actorId };
    const answer = response => ({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
    const dayName = index => WEEKDAYS[index].charAt(0).toUpperCase() + WEEKDAYS[index].slice(1);
    try {
      if (request.action === "stop") return answer(await weekly.stop(scope) ? "Done. I've stopped your weekly summary." : "You don't have a weekly summary set up.");
      if (request.action === "status") {
        const current = await weekly.status(scope);
        return answer(current ? `Your weekly summary goes out every ${dayName(current.dayOfWeek)} at ${formatTimeOfDay(current.timeOfDay)} (${current.timeZone} time). Say "stop my weekly summary" any time.`
          : "You don't have a weekly summary set up. Say \"send me a weekly summary on Sunday at 6pm\" to start one.");
      }
      if (!request.timeOfDay) return answer("What time? For example 6pm or 18:30.");
      const zoneGiven = Boolean(context?.timeZone) && validTimeZone(context.timeZone) === context.timeZone;
      const saved = await weekly.schedule({ ...scope, dayOfWeek: request.dayOfWeek, timeOfDay: request.timeOfDay, timeZone: zoneGiven ? context.timeZone : DEFAULT_TIME_ZONE });
      const notes = [
        "It covers what you logged on the farm this week, your open to-dos, and what is coming up.",
        request.dayGiven && request.timeGiven ? "" : `I chose ${dayName(saved.dayOfWeek)} at ${formatTimeOfDay(saved.timeOfDay)} because you did not say; tell me another day or time to change it.`,
        zoneGiven ? "" : `I do not know your time zone, so I used ${saved.timeZone}; tell me if you are elsewhere.`,
        saved.hasPushDevice === false ? "Alerts are not turned on for any of your devices yet, so nothing can be sent until you turn them on." : "",
        'Say "stop my weekly summary" any time.'
      ].filter(Boolean).join(" ");
      return answer(`Done. ${saved.replaced ? "Your weekly summary is now" : "I'll send your weekly summary"} every ${dayName(saved.dayOfWeek)} at ${formatTimeOfDay(saved.timeOfDay)} (${saved.timeZone} time). ${notes}`);
    } catch { return null; }
  }

  async alertsControlTurn(command, context, known) {
    const alerts = this.alerts;
    if (!alerts?.enable || !alerts?.disable || !alerts?.status) return null;
    const request = parseAlertsControl(command.text);
    if (!request) return null;
    const scope = { tenantId: command.tenantId, userId: command.actorId };
    const answer = response => ({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
    try {
      if (request.action === "stop") return answer(await alerts.disable(scope) ? "Done. I've stopped your weather alerts." : "You don't have weather alerts turned on.");
      if (request.action === "status") {
        const current = await alerts.status(scope);
        return answer(current ? 'Weather alerts are on. I watch the forecast for your town and warn you by push about storms, heavy rain, strong wind, heat and frost. Say "stop weather alerts" any time.'
          : 'Weather alerts are off. Say "warn me about storms and heavy rain" to turn them on.');
      }
      const zoneGiven = Boolean(context?.timeZone) && validTimeZone(context.timeZone) === context.timeZone;
      const saved = await alerts.enable({ ...scope, timeZone: zoneGiven ? context.timeZone : DEFAULT_TIME_ZONE });
      const town = saved.location || known?.byKind?.location || "";
      const notes = [
        town ? `I'll watch the forecast for ${town}.` : 'Tell me where you are ("I live in <your town>") and I will start watching; until then there is nothing to check.',
        zoneGiven ? "" : `I do not know your time zone, so I used ${saved.timeZone}; tell me if you are elsewhere.`,
        saved.hasPushDevice === false ? "Alerts are not turned on for any of your devices yet, so nothing can be sent until you turn them on." : "",
        'I stay quiet between 10pm and 5am. Say "stop weather alerts" any time.'
      ].filter(Boolean).join(" ");
      return answer(`Done. ${saved.replaced ? "Weather alerts stay on." : "Weather alerts are on."} I'll warn you by push when storms, heavy rain, strong wind, heat or frost are forecast for today or tomorrow. ${notes}`);
    } catch { return null; }
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
  async profileTurn(command, context = null) {
    const memory = this.memory;
    if (!memory?.saveProfileFact || !memory?.forgetProfile) return null;
    const scope = { tenantId: command.tenantId, userId: command.actorId };
    const answer = response => ({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
    try {
      const forget = extractForgetRequest(command.text);
      // "Forget everything" takes back what Kyro learned about the person, and says that is all it is: notes, contacts, records and reminders are kept, and how to remove them.
      if (forget) return answer(`${forgottenNotice(await memory.forgetProfile({ ...scope, kind: forget.kind }))}${forget.kind === "all" ? ' That is what I had learned about you. Your notes, contacts, records and reminders are kept: to remove everything, open "Privacy and data" in the app.' : ""}`);
      const stated = extractProfileStatement(command.text);
      if (!stated.length) return null;
      const replaced = []; const saved = [];
      for (const { kind, value } of stated) {
        const result = await memory.saveProfileFact({ ...scope, kind, value, sourceText: command.spokenText || command.text,
          // The spoken path (deterministicOnly) writes no conversation row until it has an answer, and a memory row that names a conversation that does not exist yet is refused by the database (a foreign key).
          conversationId: context?.deterministicOnly === true ? null : (command.conversationId || null) });
        saved.push({ kind, value }); replaced.push(...(result?.replaced || []));
      }
      return answer(savedNotice(saved, replaced));
    } catch { return null; }
  }

  // People the person has told Kyro about: "Save Otieno's number as +254...", "Who are my contacts?", "Forget Otieno". Returns an answer
  // plan, or null when the text is none of these (or contacts are unavailable), so normal planning carries on.
  async contactsTurn(command, context = {}) {
    const memory = this.memory;
    if (!memory?.saveContact || !memory?.listContacts || !memory?.forgetContact) return null;
    const scope = { tenantId: command.tenantId, userId: command.actorId };
    const answer = response => ({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
    try {
      const statement = extractContactStatement(command.text, { country: context?.country, timeZone: command.timeZone || context?.timeZone });
      if (statement?.invalid) return answer(`I need ${statement.name}'s number with the country code, like +254712345678 or +14045550123, so I can dial or text it.`);
      if (statement) {
        // A number written the Kenyan way ("0712345678") is saved as +254..., and said so: the same digits could be Ugandan or Tanzanian.
        const { assumedKenya, assumedCountry, ...contact } = statement;
        const saved = await memory.saveContact({ ...scope, ...contact });
        if (saved.full) return answer(`You have too many saved contacts to add another. Say "forget" one first, or ask "who are my contacts?"`);
        // The number is said back so a wrong digit is heard; a number written the local way is turned into +country and that is said too.
        const tookAs = assumedKenya ? "Kenyan" : (CONTACT_DEMONYM[assumedCountry] || "");
        return answer(`${saved.updated ? "Updated" : "Saved"} ${statement.name}: ${describeContact(saved.contact)}.${tookAs ? ` I took it as a ${tookAs} number. For another country, say it with the country code, like "save ${statement.name}'s number as +256712345678".` : ""} Say "forget ${statement.name}" any time, or "who are my contacts?"`);
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
    const loose = parsed ? null : parseLooseMessageRequest(command.text);
    if (!parsed && !loose) return null;
    try {
      const contacts = (await memory.listContacts({ tenantId: command.tenantId, userId: command.actorId })).map(row => row.content);
      const clarify = question => ({ clarification: question });
      if (loose) {
        // "Text John I am late" / "tell mama I am coming" / "mtumie Otieno ujumbe kwamba niko njiani": no "saying", so where the name ends is found by asking which of the
        // first one to three words is a person saved. Only a saved person (or a family word like "mama") is taken for a recipient, so "text me the price" is never this.
        const sw = loose.swahili;
        let chosen = null; let ambiguous = null;
        for (let take = Math.min(3, loose.words.length); take >= 1 && !chosen && !ambiguous; take -= 1) {
          const candidate = loose.words.slice(0, take).join(" ");
          if (cleanContactName(candidate).split(" ").length !== take) continue; // "Otieno the" is one name and a spare word, not a two-word name
          const found = resolveContact(contacts, candidate);
          if (found?.contact) chosen = { contact: found.contact, take };
          else if (found?.ambiguous) ambiguous = { list: found.ambiguous, take };
        }
        if (ambiguous) return clarify(sw ? `Ni yupi: ${ambiguous.list.map(contact => contact.name).join(" au ")}?` : `Which one: ${ambiguous.list.map(contact => contact.name).join(" or ")}?`);
        if (!chosen) {
          const first = cleanContactName(loose.words[0] || "");
          if (first && FAMILY_WORDS.test(first)) return clarify(sw ? `Sina namba ya ${first}. Sema "hifadhi namba ya ${first} kama +254712345678" kwanza, au nipe namba yake.` : `I don't have a contact called ${first}. Say "save ${first}'s number as +254712345678" first, or give me their number.`);
          return null;
        }
        const wantsEmail = loose.channel === "email";
        const value = wantsEmail ? chosen.contact.email : chosen.contact.phone;
        if (!value) return clarify(wantsEmail ? `I don't have an email for ${chosen.contact.name}. Say "save ${chosen.contact.name}'s email as name@example.com" first.`
          : `I don't have a phone number for ${chosen.contact.name}. Say "save ${chosen.contact.name}'s number as +254712345678" first.`);
        const message = loose.words.slice(chosen.take).join(" ").replace(/^(?:ujumbe|text|sms|message)\s+/i, "").replace(/^(?:kwamba|ya kwamba|wa kwamba|that|saying)\s+/i, "").trim();
        if (!message) return clarify(sw ? `Ujumbe kwa ${chosen.contact.name} unasema nini?` : `What should the message to ${chosen.contact.name} say?`);
        return { text: `${loose.channel === "email" ? "email" : loose.channel === "whatsapp" ? "whatsapp" : "text"} ${value} saying ${message}`, contactName: chosen.contact.name };
      }
      const found = resolveContact(contacts, parsed.name);
      if (found?.ambiguous) return clarify(`Which one: ${found.ambiguous.map(contact => contact.name).join(" or ")}?`);
      if (!found?.contact) return clarify(`I don't have a contact called ${parsed.name}. Say "save ${parsed.name}'s number as +254712345678" first, or give me their number.`);
      const value = parsed.wantsEmail ? found.contact.email : found.contact.phone;
      if (!value) return clarify(parsed.wantsEmail ? `I don't have an email for ${found.contact.name}. Say "save ${found.contact.name}'s email as name@example.com" first.`
        : `I don't have a phone number for ${found.contact.name}. Say "save ${found.contact.name}'s number as +254712345678" first.`);
      return { text: `${parsed.before}${value} ${parsed.rest}`, contactName: found.contact.name };
    } catch { return null; }
  }

  // The plan keeps the words the person actually said as its goal (the readers saw the cleaned request; see speech/normalise.js).
  async plan(args) {
    let plan = await this.planCleaned(args);
    const said = normaliseSpoken(args?.command?.text);
    if (plan && typeof plan === "object" && said.changed && plan.goal === said.text) plan = Object.freeze({ ...plan, goal: said.clean });
    // what to offer next after a checked guide's answer (buttons on the screen, phrases to say): see knowledge/offers.js
    if (plan && typeof plan === "object" && plan.knowledge && !plan.offers) {
      const offers = offersFor(plan, { lang: guideLanguage(String(args?.command?.text || "")) });
      if (offers.length) plan = Object.freeze({ ...plan, offers, ...(offerLine(offers) ? { offerLine: offerLine(offers) } : {}) });
    }
    return plan;
  }

  async planCleaned({ command, context, priorTask = null, conversationHistory = [] }) {
    // The one front door for what a person says (see speech/normalise.js): wake words, fillers, polite wrappers, trailing thanks, stutters, rambling lead-ins and
    // invisible characters are cleaned away before the readers below see the request. The safety readers (the companion and the content guard) get the person's own
    // words (invisible characters removed) FIRST and the cleaned request second, so nothing a person said is ever lost to the cleaning; the AI model is given their own words too.
    const spoken = normaliseSpoken(command?.text, { language: command?.locale });
    const saidText = spoken.clean;
    if (command && spoken.text && spoken.text !== String(command.text || "")) command = { ...command, text: spoken.text, spokenText: saidText };
    // "9 am" answering "At 9 in the morning or in the evening?": joined to the reminder it answers (nexus/reminders/pending-hour.js), so the typed and spoken routes can finish what they asked.
    const hourCompleted = completeAmbiguousHour(command?.text, conversationHistory);
    if (hourCompleted) command = { ...command, text: hourCompleted };
    const safetyTexts = [...new Set([saidText, command?.text].filter(Boolean))];
    // Emergencies and crisis first, before anything else: then a person's check-ins and trusted circle (see companion/). Nothing else may
    // answer "I need help now" or "I want to die" before this does.
    if (this.companion?.handle || this.companion?.turn) {
      for (const safetyText of safetyTexts) {
        // handle() also says when an emergency alert went out and a location should follow (plan.emergency, read by the phone); a companion that only has turn() gives just words.
        // A plain "yes" to Kyro's own offer to alert the trusted circle ("say \"alert my circle\" and I'll message ...") IS that request: said so, the circle is alerted.
        const companionCommand = alertOfferAccepted(safetyText, conversationHistory) ? { ...command, text: "alert my circle" } : { ...command, text: safetyText };
        const companionResult = this.companion.handle
          ? await this.companion.handle({ command: companionCommand, context }).catch(() => null)
          : await this.companion.turn({ command: companionCommand, context }).then(words => (words ? { response: words } : null)).catch(() => null);
        // A parent who says "my daughter told me she was raped" or "my daughter is 11 and pregnant, who do I call?" gets the safety words FIRST (unchanged), and then the parents' guide: who to call, what to do now, with its
        // official sources to open. The safety words alone named no number and no source (found by the live voice test). Only when the words are a parent's about a child (public/kyro-parents-topics.js never takes a child
        // speaking for themselves, or anything about harming a child), and never when an emergency alert went out.
        if (companionResult?.response && !companionResult.emergency && ["abuse_other", "abuse"].includes(readSafetyDetailed(safetyText)?.kind)) {
          const parentsSafetyId = parentsTopic(safetyText);
          const parentsSafetyAnswer = parentsSafetyId ? parentsGuideAnswer(parentsSafetyId, {
            us: isUsContext({ timeZone: command.timeZone || context?.timeZone, text: safetyText }),
            country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: safetyText })
          }) : null;
          if (parentsSafetyAnswer) {
            return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: `${companionResult.response}\n\n${parentsSafetyAnswer.text}`, sourceRequired: false, knowledge: `parents-guide:${parentsSafetyId}`, sources: parentsSafetyAnswer.sources, guardrail: "child-safety-information", planningAttempts: 0 });
          }
          // The same for a CHILD speaking for themselves ("my uncle touches me"): the safety words first, then where a child can get help, with the hotlines' own pages to open (nexus/knowledge/child-help.js).
          const childSafetyId = childHelpTopic(safetyText);
          const childSafetyAnswer = childSafetyId ? childHelpAnswer(childSafetyId, {
            us: isUsContext({ timeZone: command.timeZone || context?.timeZone, text: safetyText }),
            country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: safetyText })
          }) : null;
          if (childSafetyAnswer) {
            return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: `${companionResult.response}\n\n${childSafetyAnswer.text}`, sourceRequired: false, knowledge: `child-help:${childSafetyId}`, sources: childSafetyAnswer.sources, guardrail: "child-safety-information", planningAttempts: 0 });
          }
        }
        if (companionResult?.response) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: companionResult.response, ...(companionResult.emergency ? { emergency: Object.freeze({ ...companionResult.emergency }) } : {}), sourceRequired: false, planningAttempts: 0 });
      }
    }
    // A child who says "I am 12 and pregnant", "my uncle touches me" or "how do I tell my mom something happened": where a child can get help, in plain words, with the free hotlines and the pages they come from (see knowledge/child-help.js).
    // The safety reader above answers first when it has words for what was said; this is for what it has none for. Asked before every toolkit, because a pregnancy or a touching is never a record to keep or a task to run.
    // (public/kyro-child-help.js takes only a child speaking for themselves, never a parent, never an adult remembering, never anything about wanting to die or to hurt someone.)
    for (const childSaid of safetyTexts) {
      const childHelpId = childHelpTopic(childSaid);
      const childHelp = childHelpId ? childHelpAnswer(childHelpId, {
        us: isUsContext({ timeZone: command.timeZone || context?.timeZone, text: childSaid }),
        country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: childSaid })
      }) : null;
      if (childHelp) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: childHelp.text, sourceRequired: false, knowledge: `child-help:${childHelpId}`, sources: childHelp.sources, guardrail: "child-safety-information", planningAttempts: 0 });
    }
    // Requests for sexual or explicit material, betting tips, and tricks to hack, fake or scam are answered plainly with what Kyro can do instead, before any tool or AI model sees them (see content-guard.js).
    const guarded = safetyTexts.map(contentGuardReply).find(Boolean);
    if (guarded) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: guarded.reply, sourceRequired: false });
    // "What is the emergency number in Kenya?" / "namba ya dharura Kenya ni ipi?": a question with one right answer (Kenya 999 or 112, never the U.S. number), given the same way on every route. The older
    // command route and the spoken tool route already did; the typed route left it to the AI model, which was the only route where the number depended on the model getting it right.
    const emergencyNumber = safetyTexts.map(said => emergencyNumberAnswer(said, { country: context?.country })).find(Boolean);
    if (emergencyNumber) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: emergencyNumber, sourceRequired: false, planningAttempts: 0 });
    // "Show my blood pressure readings", "delete my last reading", "that was wrong, it was 133/78", "delete all my health records", "who can see my health information": readings saved through the planner live in the
    // record store, so they are shown, deleted and corrected here, by the same conversation the older routes use for the readings kept there (see health/store-readings.js). It asks before every change and says plainly
    // when the store cannot be read. The spoken path (deterministicOnly) leaves this to its own route, which sees both kinds of reading together.
    // Found against the real runtime: on the spoken path, "delete my last reading" reached the farm log's own "delete my last entry" and removed the person's last farm log entry instead of
    // their blood pressure reading (which stayed). The spoken path leaves every health-readings request to its own route, so it is deferred here before any toolkit can claim it.
    if (context?.deterministicOnly === true && isSpokenHealthReadingsRequest(command.text)) {
      return Object.freeze({ deferred: true, goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], planningAttempts: 0 });
    }
    if (this.healthReadings?.records && context?.deterministicOnly !== true) {
      const readings = await storeReadingsTurn({ records: this.healthReadings.records, tenantId: command.tenantId, userId: command.actorId, text: command.text, language: command.locale,
        canWrite: !context?.isRestrictedFrom?.("health-record-write"), timeZone: context?.timeZone }).catch(() => null);
      if (readings?.response) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: readings.response, sourceRequired: false, planningAttempts: 0 });
    }
    // A person who has a business or nonprofit workspace and says "who owes me money", "show my customers" or "add a customer named Grace" means THAT workspace's invoices and contacts. The farm and shop books answered first,
    // because they match the same words ("Nobody owes you anything", "You have no customers yet. Say add a buyer", and a guided "add a contact" question that never reached the workspace). So for those words, and only for
    // a person who has a workspace, the farm and shop books are skipped and the request goes on to the business path (spoken or typed). A person with none (the count is 0, or cannot be told) is unaffected.
    const businessFirst = typeof this.businessWorkspaces?.count === "function" && WORKSPACE_FIRST_INTENTS.has(businessVoiceDispatch.classify(command.text))
      && (await this.businessWorkspaces.count(context).catch(() => null)) > 0;
    // The health worker's record-keeping (patients, visits, immunisations, pregnancies, follow-ups, clinic stock, referral letters, monthly reports:
    // see healthwork/) comes before the farm toolkit; each answers only words plainly for it, and an open guided question is answered first.
    for (const [toolkit, turn, stepId, restriction] of [[this.healthWork, healthWorkTurn, "health-report", "health-record-write"], [this.farmWork, farmWorkTurn, "farm-report", null]]) {
      if (!toolkit?.store) continue;
      if (businessFirst && toolkit === this.farmWork) continue;
      // Found live (healthwork audit): every other real PHI-write surface (the legacy video/injury
      // dispatcher, the cloud-agent tool executor, the direct REST health routes) is gated on
      // userIsRestrictedFrom(user, "health-record-write") -- but plain conversation, the most natural
      // path a person takes, went straight into healthWorkTurn with no restriction check at all, so an
      // Investor/Provider Reviewer account (or a guest) could register, amend, or permanently erase real
      // patient records just by talking to Kyro. Skipping the toolkit entirely (not just its write
      // actions) matches the existing precedent that a restricted account "cannot write or review health
      // records" -- and skipping only this one toolkit, rather than refusing the whole turn, still lets a
      // restricted caller use the farm toolkit or ordinary conversation normally.
      if (restriction && context?.isRestrictedFrom?.(restriction)) continue;
      // A toolkit that asks a long, step-by-step question (the digital health check, a checklist, a lesson) says so, and the page then shows and speaks it whole instead of cutting it to one sentence.
      let longForm = false;
      const work = await turn({ text: command.text, store: toolkit.store, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone, roles: context?.roles || [], memory: this.memory, notifications: toolkit.notifications, nameOf: toolkit.nameOf, country: context?.country || "", onLongForm: () => { longForm = true; } });
      const goal = String(command.text || "").trim();
      // Spoken (no tool steps possible): say the report itself, a screenful at a time, and say where the file can be made.
      if (work?.report && context?.deterministicOnly === true) {
        const lines = String(work.report.content || "").split("\n").filter(line => line.trim() && !/^[-=_ ]{6,}$/.test(line.trim()));
        let spoken = ""; for (const line of lines) { if ((spoken + line).length > 700) break; spoken += `${line.trim()}. `; }
        return Object.freeze({ goal, application: "conversation", riskTier: "low", clarification: null, steps: [], sourceRequired: false, planningAttempts: 0,
          response: `${spoken.trim() || work.report.title} To get it as a file, type "${goal.replace(/[.!?]+$/, "")} as a PDF" on the main screen and I will save it to your documents.` });
      }
      const catalog = work?.report ? await this.catalog() : null;
      if (work?.report && catalog.tools.some(tool => tool.toolId === "documents.create") && catalog.applications.some(app => app.applicationId === "documents")) return Object.freeze({ goal, application: "documents", riskTier: "low", clarification: null, planningAttempts: 0,
        steps: [{ clientStepId: stepId, title: work.report.title, toolId: "documents.create", input: { title: work.report.title, content: work.report.content, format: work.report.format, reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }] });
      if (work?.report) return Object.freeze({ goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response: work.report.content, sourceRequired: false, planningAttempts: 0 });
      if (typeof work === "string") return Object.freeze({ goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response: work, sourceRequired: false, planningAttempts: 0, ...(longForm ? { longForm: true } : {}) });
    }
    // "Remind me every morning at 8 to check the pump" / "show my repeating reminders" / "stop my daily reminder to ...": reminders that repeat (see reminders/repeat-service.js).
    // A reminder that happens once is not taken here; it carries on to reminders.schedule below.
    // The same asked for in Kiswahili ("nikumbushe kila siku saa tatu asubuhi kunywa dawa", "acha kikumbusho cha ...", "onyesha vikumbusho vyangu"): read into the English form the existing service understands, answered in Kiswahili.
    const swahiliRepeat = await swahiliRepeatingTurn({ text: command.text, store: this.repeatReminders, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone });
    if (swahiliRepeat) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: swahiliRepeat, sourceRequired: false, planningAttempts: 0 });
    const repeating = await repeatReminderTurn({ text: command.text, store: this.repeatReminders, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone });
    if (repeating) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: repeating, sourceRequired: false, planningAttempts: 0 });
    // Sleep, mood, workouts (with personal bests), weight and water the person reports, and goals (see wellness/log.js).
    const wellness = await wellnessTurn({ text: command.text, store: this.wellnessStore, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone });
    if (wellness) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: wellness, sourceRequired: false, planningAttempts: 0 });
    // The community desk: citizens report problems and follow them up; staff (admin role) triage and announce (see community/desk.js).
    if (this.community?.store) {
      const desk = await communityTurn({ text: command.text, store: this.community.store, notifications: this.community.notifications, nameOf: this.community.nameOf, tenantId: command.tenantId, userId: command.actorId, roles: context?.roles || [], timeZone: context?.timeZone });
      if (desk) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: desk, sourceRequired: false, planningAttempts: 0 });
    }
    // Rainfall, soil moisture, tank levels and harvests the person reports, and totals on request (see farm/log.js).
    const farm = await farmLogTurn({ text: command.text, memory: this.memory, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone });
    if (farm) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: farm, sourceRequired: false, planningAttempts: 0 });
    // "That was wrong" / "that helped" / "the correct answer is ...": feedback on Kyro's last answer, kept for the team (see quality/feedback.js).
    const answerFeedback = await feedbackTurn({ text: command.text, memory: this.memory, tenantId: command.tenantId, userId: command.actorId, history: conversationHistory, roles: context?.roles || [] });
    if (answerFeedback) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: answerFeedback, sourceRequired: false, planningAttempts: 0 });
    // "Forget everything", "delete all my data": not done by voice, and said plainly. It used to be answered "I don't have that saved, so there is nothing to forget", or reach the AI model.
    const bulk = extractForgetRequest(command.text) ? null : bulkForgetReply(command.text);
    if (bulk) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: bulk, sourceRequired: false, planningAttempts: 0 });
    const profile = await this.profileTurn(command, context);
    if (profile) return Object.freeze({ ...profile, planningAttempts: 0 });
    const contactsAnswer = await this.contactsTurn(command, context);
    if (contactsAnswer) return Object.freeze({ ...contactsAnswer, planningAttempts: 0 });
    const named = await this.namedContactRequest(command);
    if (named?.clarification) return Object.freeze({ goal: String(command.text || "").trim(), application: "communications", riskTier: "regulated", clarification: named.clarification, steps: [], planningAttempts: 0 });
    if (named) command = { ...command, text: named.text };
    // To-do and shopping lists, notes and calendar events the person asks Kyro to keep (see personal/items.js).
    // "Ongeza mkutano kwenye kalenda kesho saa nne asubuhi": a calendar event asked for in Kiswahili, read into the English form and answered in Kiswahili.
    const swahiliCalendar = parseSwahiliCalendar(command.text, { today: localDay(new Date(), validTimeZone(context?.timeZone || DEFAULT_TIME_ZONE)) });
    if (swahiliCalendar) {
      const say = response => Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false, planningAttempts: 0 });
      if (swahiliCalendar.badDate) return say(swahiliCalendar.ask);
      if (swahiliCalendar.needTime) return say(NEED_TIME_SW);
      if (swahiliCalendar.needTitle) return say(NEED_EVENT_TITLE_SW);
      if (swahiliCalendar.needDay) return say(NEED_EVENT_DAY_SW);
      const added = await personalTurn({ text: swahiliCalendar.english, memory: this.memory, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone });
      // The few answers the calendar gives in English that a Kiswahili speaker must not be left with in English.
      if (added) return say(/^Added to your calendar/.test(added) ? swahiliCalendar.replySw
        : /has already passed/.test(added) ? `Siku hiyo (${swahiliCalendar.whenSw}) imepita tayari. Niambie siku iliyo mbele, kwa mfano "kesho" au "tarehe 25 Oktoba". Bado sijaweka chochote.`
        : /is already on your calendar/.test(added) ? `${swahiliCalendar.title} ${swahiliCalendar.whenSw} tayari iko kwenye kalenda yako.` : added);
    }
    const personal = await personalTurn({ text: command.text, memory: this.memory, tenantId: command.tenantId, userId: command.actorId, timeZone: context?.timeZone, history: conversationHistory });
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
    // "Warn me about storms" / "stop weather alerts": opt-in weather warnings, sent by push when the forecast turns serious.
    const weeklyControl = await this.weeklyControlTurn(command, context, known);
    if (weeklyControl) return Object.freeze({ ...weeklyControl, planningAttempts: 0 });
    const alertsControl = await this.alertsControlTurn(command, context, known);
    if (alertsControl) return Object.freeze({ ...alertsControl, planningAttempts: 0 });
    // "How many bags of maize do I have in stock?" was sent to a web search and answered "You have 21 bags", a number
    // taken from an unrelated web page. Nexus holds no such record, so it says so instead of guessing.
    // (a person who has a workspace and says "inventory" is asking about its inventory register, which does hold records)
    const workspaceInventory = typeof this.businessWorkspaces?.count === "function" && /^inventory/.test(businessVoiceDispatch.classify(command.text) || "")
      && (await this.businessWorkspaces.count(context).catch(() => null)) > 0;
    const personalRecord = workspaceInventory ? null : personalRecordQuestionPlan(command.text);
    if (personalRecord) return Object.freeze({ ...personalRecord, planningAttempts: 0 });
    // A business owner's legal, tax, loan, grant, certification, licence, insurance or hiring QUESTION: general information only, said plainly (not a lawyer / tax or financial advisor), with the official place to
    // check, the free counselling that exists, and that Kyro cannot file or apply for anything. Before any app or AI planning, so the AI never answers these as if it were a professional (see guardrails/professional-advice.js).
    // (a question about the person's OWN workspace -- "what grants are we tracking", "who are my donors" -- belongs to the business workspace, never to this)
    // (it is about the person's OWN workspace only when it says so: "what grants are WE tracking", "who are MY donors"; "what grants are available for Black-owned businesses" is a general question)
    // ("show me HOW TO register my business" asks how something is done; it is not "show me my records")
    // (the insight questions -- "which grants have approaching deadlines", "which donors need follow-up", "will we have enough money", "how many people did the program serve" -- are about the person's own records even without "my" or "our")
    const ownWorkspace = (Boolean(businessVoiceDispatch.classify(command.text)) && /\b(?:we|our|my|mine|i have|do i have)\b/i.test(command.text)
      && !/^\s*(?:(?:hey|hi|hello|ok|okay)[,.!]?\s+)?(?:(?:kyro|nexus)[,.:!]?\s+)?(?:please\s+)?(?:show|tell|explain|teach|walk)\s+(?:me|us)\s+(?:through\s+)?how\b/i.test(command.text))
      || businessVoiceDispatch.asksAboutOwnRecords(command.text);
    const askText = stripWakeWord(command.text);
    const usPerson = isUsContext({ timeZone: command.timeZone || context?.timeZone, text: askText });
    // "Show me your sources for small business", "where does your business information come from": the source page, the official pages every guide was read from, to open and read further (see knowledge/sources-page.js).
    if (!ownWorkspace && sourcesPageRequest(askText)) {
      const guide = sourcesPageAnswer(askText);
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: "sources-page", sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // "Walk me through using the shopping list", "teach me to use the farm log": a part of Kyro taught one step at a time (see knowledge/howto-walkthroughs.js). A part-of-Kyro word and a request to be taught are both required (public/kyro-howto-topics.js), so a guide's question
    // and the plain use of a feature ("show my notes") are never taken; without a walkthrough for the topic the request goes on as it did.
    { const howtoWalk = guideWalkthroughPlan(command, askText, "kyro-howto", howtoTopic(askText), "app-help", true); if (howtoWalk) return howtoWalk; }
    // A SIMULATED sample travel itinerary for anywhere ("Plan a 7 day trip to Kenya", "make me a sample itinerary for Paris for five days", "I am traveling to Nairobi from Atlanta, help me with my travel arrangements"), for a travel agent to show a client or for anyone
    // planning a trip (see trips/itinerary.js). Made as a document with a Download button, never only talked about: the days are written by the AI model and the document says they are an illustration (nothing booked, no prices or schedules, official sources to check).
    // A region instead of a place ("a trip to Africa") is asked about, not guessed. Typed route only: the spoken-only route leaves it to the page, which takes the request itself (public/kyro-trip-topics.js is shared with it).
    if (context?.deterministicOnly !== true) {
      const trip = tripRequest(askText);
      if (trip) {
        if (trip.needsPlace) return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: needsPlaceAnswer(trip.region), sourceRequired: false, knowledge: "trip-itinerary:needs-place", planningAttempts: 0 });
        const tripCatalog = await this.catalog();
        if (tripCatalog.tools.some(tool => tool.toolId === "documents.create") && tripCatalog.applications.some(app => app.applicationId === "documents")) {
          let tripContent = null;
          if (typeof this.model.respond === "function") {
            const tripLocale = command.locale || "en";
            const answer = await this.model.respond({ goal: tripGoal(trip), instructions: TRIP_INSTRUCTIONS, maxOutputTokens: 3000, locale: tripLocale, tenantId: command.tenantId,
              interactionProfile: createInteractionProfile({ locale: tripLocale, userPreferences: context?.userPreferences || {}, channel: command.channel }), conversationHistory: [], memories: [], capabilities: [] }).catch(() => null);
            tripContent = parseTripAnswer(answer, trip.days);
          }
          const made = tripDocument(trip, tripContent || outlineContent(trip), { outline: !tripContent });
          return Object.freeze({ goal: command.spokenText || command.text, application: "documents", riskTier: "low", clarification: null, planningAttempts: 1, knowledge: "trip-itinerary",
            steps: [{ clientStepId: "trip-itinerary", title: `Create ${made.title}`, toolId: "documents.create", input: { title: made.title, content: made.content, format: made.format, reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }] });
        }
      }
    }
    // Staying safe online and on the phone (fake messages and calls, passwords and two-step sign-in, a hijacked account, identity theft, locked files, a swapped SIM card, where to report): a checked, sourced, plain answer from the official pages of
    // the United States, Kenya and Nigeria (see knowledge/safety-guide.js). Asked early, before the money, technology and parents' guides, because "someone called asking for my PIN" and "how do I spot a fake text" are this guide's. The matcher
    // (public/kyro-safety-topics.js) leaves to those guides a question about investments, loans, banks and mobile money, a business's own systems, an older person or a child, and never takes an order, a record, a request to do the harm, or a personal emergency.
    // The device's country is given to it: "how do I spot a fake message" asked in Nairobi is the Kenyan topic.
    {
      const safeCountry = africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText });
      // (no step aside for the business dispatcher: it reads "who do I call" as the person's own follow-ups; the matcher itself leaves out a business's records, and never takes an order)
      const safeId = safetyTopic(askText, { country: safeCountry });
      const safeGuide = safeId ? safetyAnswer(safeId, { us: usPerson && !africaNamed(askText), country: safeCountry }) : null;
      if (safeGuide) {
        const safeWalk = guideWalkthroughPlan(command, askText, "safety-guide", safeGuide.topic, "professional-advice", usPerson && !africaNamed(askText));
        if (safeWalk) return safeWalk;
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: safeGuide.text, sourceRequired: false, knowledge: `safety-guide:${safeGuide.topic}`, sources: safeGuide.sources, guardrail: "professional-advice", planningAttempts: 0 });
      }
    }
    // Special education and ADHD, for a parent, a teacher or a school administrator (an evaluation, an IEP or a 504 plan, parent rights, a disagreement with a school, discipline, student records, birth to three, ADHD, autism, dyslexia, resources for teachers, where to get help): a checked,
    // sourced, plain answer from the official pages of the United States, California, Delaware, Kenya and Nigeria (see knowledge/special-ed-guide.js). A person who names California or Delaware gets that state's rule where the guide has one (otherwise the federal rule, with a line saying so); a device in Kenya or Nigeria
    // gets that country's. It never says a child has a condition, never advises on medicine or a dispute, and never takes a child's name or record (public/kyro-special-ed-topics.js leaves orders, records and emergencies to the rest of Kyro).
    {
      const sedCountry = africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText });
      const sedId = specialEdTopic(askText, { country: sedCountry });
      const sedPlace = specialEdPlace(askText, { country: sedCountry });
      const sedState = sedPlace === "ca" || sedPlace === "de" ? sedPlace : null;
      const sedUs = (usPerson || Boolean(sedState)) && !africaNamed(askText);
      const sedGuide = sedId ? specialEdAnswer(sedId, { us: sedUs, country: sedCountry, state: sedState }) : null;
      if (sedGuide) {
        const sedWalk = guideWalkthroughPlan(command, askText, "special-ed-guide", sedGuide.topic, "professional-advice", sedUs);
        if (sedWalk) return sedWalk;
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: sedGuide.text, sourceRequired: false, knowledge: `special-ed-guide:${sedGuide.topic}`, sources: sedGuide.sources, guardrail: "professional-advice", planningAttempts: 0 });
      }
    }
    // Coming home after prison or jail (getting an ID and a Social Security card back, food help, health coverage, Social Security and SSI after release, housing, a bank account, work and a record, clearing a record, supervision, voting, school, a phone, scams, staying safe on a phone
    // or a library computer, where to get help): a checked, sourced, plain answer from the official pages of the United States and California (see knowledge/reentry-guide.js). Taken ONLY when the person says they are coming home or have a record or are under supervision
    // (public/kyro-reentry-topics.js): the same subject asked by anyone else stays with the rest of Kyro. It never gives legal advice, never says what breaks a condition of supervision, and never asks for a record or a case. Kenya and Nigeria are left to the rest of Kyro.
    {
      const reCountry = africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText });
      const reId = reentryTopic(askText, { country: reCountry });
      const reState = reentryPlace(askText) === "ca" ? "ca" : null;
      const reUs = (usPerson || Boolean(reState)) && !africaNamed(askText);
      const reGuide = reId ? reentryAnswer(reId, { us: reUs, state: reState }) : null;
      if (reGuide) {
        const reWalk = guideWalkthroughPlan(command, askText, "reentry-guide", reGuide.topic, "professional-advice", reUs);
        if (reWalk) return reWalk;
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: reGuide.text, sourceRequired: false, knowledge: `reentry-guide:${reGuide.topic}`, sources: reGuide.sources, guardrail: "professional-advice", planningAttempts: 0 });
      }
    }
    // A parent's question about their child's growing up and safety (how to talk with a child about the body and relationships, the signs of abuse, what to do if a child tells you, a young girl who is pregnant, who to call): a checked,
    // sourced, plain answer (see knowledge/parents-guide.js). Asked before the women's health guide below, because "how do I explain a period to my daughter" is this guide's and not the cycle answer. A child speaking for themselves,
    // and anything about harming a child or oneself, is never taken (public/kyro-parents-topics.js); the safety layer, which comes first, answers a person who says they are being hurt.
    // (not held back by the workspace words: "who do I call" in "my daughter is 11 and pregnant, who do I call?" is a question about a child, not a request to the person's own records)
    const parentsId = parentsTopic(askText);
    const parentsAnswer = parentsId ? parentsGuideAnswer(parentsId, { us: usPerson, country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText }) }) : null;
    if (parentsAnswer) {
      { const stepByStep = guideWalkthroughPlan(command, askText, "parents-guide", parentsId, "child-safety-information", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: parentsAnswer.text, sourceRequired: false, knowledge: `parents-guide:${parentsId}`, sources: parentsAnswer.sources, guardrail: "child-safety-information", planningAttempts: 0 });
    }
    // A church leader's or member's question about the church as an organization (does a church have to apply for tax-exempt status, forming one, the annual return, income from a business, receipts for gifts, a pastor's pay and housing
    // allowance, the payroll-tax choice, political campaigns): a checked, sourced, plain answer from the IRS's pages (see knowledge/church-guide.js). Asked before the guides below so a church is not given the general nonprofit
    // answer (apply for exemption, file a Form 990), which a church need not do. Outside the United States no rule is stated. The person's own records ("show my church donors") are never taken (public/kyro-church-topics.js).
    const churchId = ownWorkspace && businessVoiceDispatch.asksAboutOwnRecords(askText) ? null : churchTopic(askText);
    // (a question that names Kenya or Nigeria is about a church there, whatever time zone the device is in: the IRS's rules are not stated for it)
    const churchGuide = churchId ? churchAnswer(churchId, { us: usPerson && !africaNamed(askText), country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText }) }) : null;
    if (churchGuide) {
      { const stepByStep = guideWalkthroughPlan(command, askText, "church-guide", churchId, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: churchGuide.text, sourceRequired: false, knowledge: `church-guide:${churchId}`, sources: churchGuide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // An athlete's question (from a school team to a professional): what to eat and drink, supplements and doping, how much to train, sleep and a strained muscle, a concussion, heat, pressure, abuse in sport, eligibility and recruiting, name-image-
    // likeness deals, agents, taxes, endorsements, starting a business, a youth club, money after sport: a checked, sourced, plain answer from the official pages (see knowledge/athlete-guide.js). Orders ("make me a meal plan", "log a workout") and the
    // person's own records are never taken (public/kyro-athlete-topics.js), so those still do what they did. Outside the United States only what an official page says is stated.
    const athleteId = ownWorkspace && businessVoiceDispatch.asksAboutOwnRecords(askText) ? null : athleteTopic(askText);
    const athleteGuide = athleteId ? athleteAnswer(athleteId, { us: usPerson && !africaNamed(askText), country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText }) }) : null;
    // "Walk me through registering with Athletics Kenya", "step by step, how do I get a US student visa as an athlete": the same process one step at a time for the person to do themselves (see knowledge/athlete-walkthroughs.js; the page shows each step with its
    // official page and reads it out). Kyro never registers, applies, files or signs for them.
    const athleteWalk = athleteGuide && walkthroughAsk(askText) && ATHLETE_WALK_OF_TOPIC[athleteId] ? athleteWalkthrough(ATHLETE_WALK_OF_TOPIC[athleteId]) : null;
    if (athleteWalk) {
      const intro = `Okay, I will walk you through ${athleteWalk.title.charAt(0).toLowerCase()}${athleteWalk.title.slice(1)}, one step at a time. There are ${athleteWalk.steps.length} steps. I only guide you: you do each step yourself, and I never register, apply, file or sign for you.`;
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: intro, sourceRequired: false, knowledge: `athlete-guide:walkthrough:${athleteWalk.id}`, sources: athleteWalk.sources, walkthrough: athleteWalk, guardrail: "professional-advice", planningAttempts: 0 });
    }
    if (athleteGuide) {
      { const stepByStep = guideWalkthroughPlan(command, askText, "athlete-guide", athleteId, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: athleteGuide.text, sourceRequired: false, knowledge: `athlete-guide:${athleteId}`, sources: athleteGuide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // A small business owner's question about PUBLIC RELATIONS and EVENTS (a press release and the media, influencer disclosure, the FTC's advertising rules, a crisis communication plan, planning an event and its permits and accessibility, brand, stakeholders,
    // measuring results, hiring a PR or event firm): a checked, sourced, plain answer (see knowledge/pr-events-guide.js). Only a question that names the thing is taken (public/kyro-pr-topics.js); the calendar, a person's records, fake reviews (the
    // technology guide's) and any personal emergency are never taken here.
    const prId = prTopic(askText);
    const prAnswer = prId ? prEventsAnswer(prId) : null;
    // "Walk me through planning an event", "step by step, how do I prepare a crisis statement": the same process one step at a time for the person to do themselves (see knowledge/pr-walkthroughs.js; the page shows each step with its official
    // page and reads it out). Kyro never sends, books or publishes anything for them.
    const prWalk = prAnswer && walkthroughAsk(askText) && PR_WALK_OF_TOPIC[prId] ? prWalkthrough(PR_WALK_OF_TOPIC[prId]) : null;
    if (prWalk) {
      const intro = `Okay, I will walk you through ${prWalk.title.toLowerCase()}, one step at a time. There are ${prWalk.steps.length} steps. I only guide you: you do each step yourself, and I never send, book or publish anything for you.`;
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: intro, sourceRequired: false, knowledge: `pr-events-guide:walkthrough:${prWalk.id}`, sources: prWalk.sources, walkthrough: prWalk, guardrail: "professional-advice", planningAttempts: 0 });
    }
    if (prAnswer) {
      { const stepByStep = guideWalkthroughPlan(command, askText, "pr-events-guide", prId, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: prAnswer.text, sourceRequired: false, knowledge: `pr-events-guide:${prId}`, sources: prAnswer.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // A woman's question about her own health (cervical screening, breast health, birth control, periods, menopause, prenatal and postnatal care, where to find care): a checked, sourced, plain answer (see knowledge/womens-health.js).
    // Urgent, unsafe and medicine questions are never taken (womens-health-topics.js): the safety layer and the medicine rules answer those.
    const womensTopic = ownWorkspace ? null : womensHealthTopic(askText);
    const womensGuide = womensTopic ? womensHealthAnswer(womensTopic, { us: usPerson, country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText }) }) : null;
    if (womensGuide) {
      { const stepByStep = guideWalkthroughPlan(command, askText, "womens-health", womensTopic, "womens-health-information", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: womensGuide.text, sourceRequired: false, knowledge: `womens-health:${womensTopic}`, sources: womensGuide.sources, guardrail: "womens-health-information", planningAttempts: 0 });
    }
    // A question about diabetes or high blood pressure itself (what it is, the numbers, looking after yourself, checking at home): a checked, sourced, plain answer (see knowledge/chronic-conditions.js). A person's own reading,
    // a reading with symptoms, a medicine or a dose is never taken (public/kyro-chronic-topics.js): the health tool, the safety layer and the medicine rules answer those.
    const chronicId = ownWorkspace ? null : chronicTopic(askText);
    const chronicGuide = chronicId ? chronicConditionAnswer(chronicId, { us: usPerson }) : null;
    if (chronicGuide) {
      { const stepByStep = guideWalkthroughPlan(command, askText, "chronic-conditions", chronicId, "chronic-conditions-information", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: chronicGuide.text, sourceRequired: false, knowledge: `chronic-conditions:${chronicId}`, sources: chronicGuide.sources, guardrail: "chronic-conditions-information", planningAttempts: 0 });
    }
    // The checked United States guide (free help, certifications, loans, grants, taxes, licences, selling to the government, finding local help) answers first, from official sources with the date they were checked.
    // It applies to people in the United States only (their time zone, or a question that names a US programme), never to a farmer in Kenya asking about a loan.
    // A question in the technology and AI vocabulary ("use AI to grow my business", "protect my business email") belongs to the technology guide even when it also names growth or marketing, so it is looked up first and wins.
    // (not held back by the workspace words in a sentence like "what if my customer data was leaked": "customer" there is the person's customers' data, not a request to their own records. Found by the prompt battery.)
    const techTopic = usPerson ? technologyTopic(askText) : null;
    // Choosing AI tools for a job (a business plan, funding, marketing, customer service, operations) and how to choose one: for any owner in any country (see knowledge/ai-tools-for-business.js). A specific technology topic
    // (AI safety, scams, fake reviews, advertising claims, cybersecurity) still goes to the technology guide; the general "getting started with AI" answer gives way to this one.
    const aiToolsTopicId = !ownWorkspace && (!techTopic || techTopic === "ai-getting-started") ? aiToolsTopic(askText) : null;
    if (aiToolsTopicId) {
      const guide = aiToolsAnswer(aiToolsTopicId, { us: usPerson });
      { const stepByStep = guideWalkthroughPlan(command, askText, "ai-tools-for-business", aiToolsTopicId, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `ai-tools-for-business:${aiToolsTopicId}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // The checked guide to official help for veterans, older adults, young people and nonprofits (see knowledge/us-community-support.js): a question about those, on a US device or naming a US programme (VA, Medicare, 988, the IRS ...).
    // Each answer carries the official sources, the date they were read and the "confirm on the official site" warning. A person's own records ("who are my donors") are never taken, and the safety layer answers a person in crisis first.
    // (the topics are specific enough to be taken even when the sentence also reads as a question about the person's own records or about forming a business: "do I have to give donors a receipt" has "I have" in it, "tell me about the GI Bill"
    // read as "my bills" and was answered "your workspace has no bills recorded yet", "who do I call about my grandmother being scammed" read as "who should I follow up with", and "do I need to register my nonprofit to fundraise" was
    // answered with how to form a nonprofit: all found by the live voice test)
    const communityId = !techTopic && (usPerson || isCommunityUs(askText)) ? communityTopic(askText) : null;
    if (communityId) {
      const guide = communityAnswer(communityId);
      { const stepByStep = guideWalkthroughPlan(command, askText, "us-community-support", communityId, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `us-community-support:${communityId}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // A person's own money (a spending plan, income that changes, a bank account, savings, credit, debt and collectors, costly loans, student loans, buying a home, investing and how to choose, fees, retirement accounts, brokerage and children's
    // accounts, scams and keeping accounts safe): a checked, sourced, plain answer from the official pages (see knowledge/money-guide.js). A business's money, a person's records, an order with an amount ("log an expense of 500"), buying or
    // trading coins and forex (the investing guard answers those first), and any personal emergency are never taken (public/kyro-money-topics.js). Asked after the community guide above, which keeps its own free-tax-help and fraud answers.
    // The open question "what should I invest in?" is answered here by teaching how to choose, never by naming a stock, fund, coin, broker or app (nexus/brain/investment-guard.js).
    const moneyId = ownWorkspace && businessVoiceDispatch.asksAboutOwnRecords(askText) ? null : moneyTopic(askText);
    const moneyGuide = moneyId ? moneyAnswer(moneyId, { us: usPerson && !africaNamed(askText), country: africaCountry({ timeZone: command.timeZone || context?.timeZone, country: context?.country, text: askText }) }) : null;
    // "Walk me through making a budget", "step by step, how do I check my credit report", "walk me through getting a KRA PIN": the same process, or a short lesson where the topic explains rather than asks for something to be done, one step at a
    // time for the person to do themselves (see knowledge/money-walkthroughs.js; the page shows each step with its official page and reads it out). Kyro never files, pays, applies or moves any money, and never needs an account number or a password.
    const moneyWalk = moneyGuide && walkthroughAsk(askText) && MONEY_WALK_OF_TOPIC[moneyGuide.topic] ? moneyWalkthrough(MONEY_WALK_OF_TOPIC[moneyGuide.topic]) : null;
    if (moneyWalk) {
      const intro = `Okay, I will walk you through ${moneyWalk.title.charAt(0).toLowerCase()}${moneyWalk.title.slice(1)}, one step at a time. There are ${moneyWalk.steps.length} steps. I only guide you: you do each step yourself, and I never file, apply, pay or move any money for you, and I never need an account number or a password.`;
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: intro, sourceRequired: false, knowledge: `money-guide:walkthrough:${moneyWalk.id}`, sources: moneyWalk.sources, walkthrough: moneyWalk, guardrail: "professional-advice", planningAttempts: 0 });
    }
    if (moneyGuide) {
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: moneyGuide.text, sourceRequired: false, knowledge: `money-guide:${moneyGuide.topic}`, sources: moneyGuide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // A question that names California and is about a business or nonprofit there beyond forming it (state certification, selling to the state, the seller's permit, what a nonprofit does after it is formed, free help, grants, the 2028
    // Games): the checked California guide (see knowledge/california-business.js), asked before the state formation guide below, which answers "how do I register an LLC in California".
    const caTopic = !ownWorkspace && !techTopic ? californiaTopic(askText) : null;
    if (caTopic) {
      // "Walk me through ...": the same process one step at a time, for the person to do themselves (the page shows each step with its official page and reads it out; see public/kyro-walkthrough.js). Kyro never applies for them.
      const walk = walkthroughAsk(askText) ? californiaWalkthrough(caTopic) : null;
      if (walk) {
        const intro = `Okay, I will walk you through ${walk.title}, one step at a time. There are ${walk.steps.length} steps. I only guide you: you do each step yourself, and I never apply for you.`;
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: intro, sourceRequired: false, knowledge: `california-business:walkthrough:${walk.id}`, sources: walk.sources, walkthrough: walk, guardrail: "professional-advice", planningAttempts: 0 });
      }
      { const stepByStep = guideWalkthroughPlan(command, askText, "california-business", caTopic, "professional-advice", true); if (stepByStep) return stepByStep; }
      const guide = californiaAnswer(caTopic, { question: askText, lang: guideLanguage(askText) }); // (the language of the words asked: a question in Spanish is answered in Spanish)
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `california-business:${caTopic}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // "Walk me through the SBA 8(a) program", "step by step, how do I apply for a federal grant on Grants.gov": the same kind of walkthrough for the United States guide's certification and grant processes (see knowledge/us-walkthroughs.js)
    const usWalkId = !ownWorkspace && !techTopic && usPerson ? usWalkTopic(askText) : null;
    if (usWalkId) {
      const walk = usWalkthrough(usWalkId);
      const intro = `Okay, I will walk you through ${walk.title}, one step at a time. There are ${walk.steps.length} steps. I only guide you: you do each step yourself, and I never apply for you.`;
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: intro, sourceRequired: false, knowledge: `us-small-business:walkthrough:${walk.id}`, sources: walk.sources, walkthrough: walk, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // "What federal grants are open right now for nonprofits?", "what is the latest SBA notice?": a real-time list from two free government feeds (Grants.gov and the Federal Register: see knowledge/live-feeds.js), with each listing's own page.
    // It costs nothing per lookup, so it is not metered; if the feed does not answer, the request goes on to the checked guide below. Not for the spoken-only caller, which leaves live lookups to its own route.
    const feed = this.liveFeeds && context?.deterministicOnly !== true && !ownWorkspace ? feedRequest(askText) : null;
    if (feed) {
      try {
        const result = feed.kind === "grants" ? await this.liveFeeds.grants({ keyword: feed.keyword, audience: feed.audience }) : await this.liveFeeds.rules({ term: feed.term, agency: feed.agency });
        const answer = feed.kind === "grants" ? grantsAnswer(result, feed) : rulesAnswer(result, feed);
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: answer.text, sourceRequired: false, knowledge: `live-feeds:${feed.kind}`, sources: answer.sources, guardrail: "professional-advice", planningAttempts: 0 });
      } catch { /* the feed did not answer: the checked guide below answers instead */ }
    }
    // "How do I register an LLC in California?", "what does a nonprofit cost to start in Texas?", "I want to set up my business in Ohio": the state's own fees and steps (see knowledge/state-entities.js). It is a question about forming an
    // entity, so a "my business" in it is not a request for the person's own workspace; a question that names a Kenyan or Nigerian agency, or has no state on a device outside the United States, is left to the guides below.
    const stateIntent = !techTopic && !aiToolsTopicId && !africaNamed(askText) ? stateEntityIntent(askText) : null;
    if (stateIntent && (stateIntent.state || usPerson)) {
      const guide = stateEntityAnswer(stateIntent);
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `state-entities:${guide.topic}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // The checked guide for owners in Kenya and Nigeria (registering a business, taxes, government support, government funding; see knowledge/africa-small-business.js), by the device's time zone, the profile's country or a
    // question that names a Kenyan or Nigerian agency. And, for anyone else outside the United States, the four US topics that hold in any country (a business plan, startup costs, marketing, bookkeeping), with a note.
    const placeZone = command.timeZone || context?.timeZone;
    // (a question that itself names a US term, such as LLC, S corp or the SBA, gets the US answer even on a device in Nairobi, unless it also names a Kenyan or Nigerian agency)
    const africaId = !ownWorkspace && !techTopic && (!isUsContext({ text: askText }) || africaNamed(askText)) ? africaTopic(askText, { timeZone: placeZone, country: context?.country }) : null;
    if (africaId) {
      const guide = africaAnswer(africaId);
      { const stepByStep = guideWalkthroughPlan(command, askText, "africa-small-business", africaId, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `africa-small-business:${africaId}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    const universalId =!ownWorkspace && !usPerson && !techTopic ? usSmallBusinessTopic(askText) : null;
    if (universalId && UNIVERSAL_TOPICS.includes(universalId)) {
      const guide = usSmallBusinessAnswer(universalId, { question: askText, us: false, lang: guideLanguage(askText), country: africaCountry({ timeZone: placeZone, country: context?.country, text: askText }) });
      { const stepByStep = guideWalkthroughPlan(command, askText, "us-small-business", universalId, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `us-small-business:${universalId}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    const usTopic = !ownWorkspace && usPerson && !techTopic ? usSmallBusinessTopic(askText) : null;
    if (usTopic) {
      const guide = usSmallBusinessAnswer(usTopic, { question: askText, lang: guideLanguage(askText) }); // (the language of the words asked: a question in Spanish is answered in Spanish)
      { const stepByStep = guideWalkthroughPlan(command, askText, "us-small-business", usTopic, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `us-small-business:${usTopic}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    // The checked technology and AI guide (using AI tools safely, AI scams, fake reviews, cybersecurity, phishing, email and domain protection, hiring a web host or designer, what Kyro can automate, getting online).
    if (techTopic) {
      const guide = technologyAnswer(techTopic);
      { const stepByStep = guideWalkthroughPlan(command, askText, "small-business-technology", techTopic, "professional-advice", usPerson && !africaNamed(askText)); if (stepByStep) return stepByStep; }
      return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: guide.text, sourceRequired: false, knowledge: `small-business-technology:${techTopic}`, sources: guide.sources, guardrail: "professional-advice", planningAttempts: 0 });
    }
    const adviceTopic = ownWorkspace ? null : professionalAdviceTopic(command.text);
    if (adviceTopic) {
      const say = response => Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false, guardrail: "professional-advice", planningAttempts: 0 });
      if (context?.deterministicOnly === true || typeof this.model.respond !== "function") return say(professionalAdviceReply(adviceTopic, { us: usPerson }));
      const answer = await this.model.respond({ goal: professionalAdviceGoal(adviceTopic, command.text, { us: usPerson }), locale, tenantId: command.tenantId,
        interactionProfile: createInteractionProfile({ locale, userPreferences: context.userPreferences || {}, channel: command.channel }),
        conversationHistory: [], memories: [], capabilities: [] }).catch(() => null);
      return say(typeof answer === "string" && answer.trim() ? withProfessionalAdviceNote(adviceTopic, answer, { us: usPerson }) : professionalAdviceReply(adviceTopic, { us: usPerson }));
    }
    // A caller that only wants the answers Kyro can give and SAVE without the AI model (the spoken path: see
    // nexus/compat/voice-planner-bridge.js) stops here. Everything above is deterministic; everything below may call the model
    // or build tool steps, which that caller leaves to its own pipeline.
    if (context?.deterministicOnly === true) {
      // The person's own business or nonprofit workspace by voice: a READ ("how is my nonprofit doing this month", "which grants are due soon") is answered from the saved records, and a CHANGE ("add a bill from the landlord for
      // 800 dollars due the 1st") is described and made only after a spoken yes (see createBusinessReader). It also takes the yes, the no and the answer to a question it just asked. Found on the live site: by voice every business
      // question got "I couldn't do that one" or an unrelated answer, because this path stopped before the business workspace. Anything it does not recognise comes back null and goes on to the old pipeline, as before.
      if (typeof this.businessWorkspaces?.read === "function" && String(command.text || "").trim().length <= 400) {
        const answer = await this.businessWorkspaces.read({ command: command.text, context }).catch(() => null);
        if (answer) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: answer, sourceRequired: false, knowledge: "business-workspace", planningAttempts: 1 });
      }
      // A starter document asked for by voice ("Draft a business plan"): saving a document needs the screen's document card, which the voice route does not have, so the person is told how, instead of
      // hearing "I couldn't do that one" (see knowledge/consulting-templates.js). Nothing is saved.
      const spokenDocuments = await documentsListPlan(this.documents, command);
      if (spokenDocuments) return Object.freeze({ ...spokenDocuments, planningAttempts: 0 });
      // "Create a document called Farm Plan that says ... and save it": by voice there is no document card to save it from, so the person is told how (it used to become a nine-step plan waiting for approval).
      const spokenDocumentWrite = completeDocumentPlan(command.text, await this.catalog());
      if (spokenDocumentWrite) {
        return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], planningAttempts: 0, sourceRequired: false,
          response: `I can make that document, but I can only save one from the keyboard. Type "${String(command.text || "").trim().replace(/[.!?]+$/, "")}" in the box on the main screen and I will save it to your documents.` });
      }
      const spokenTemplate = templateRequest(command.text);
      if (spokenTemplate) {
        return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], planningAttempts: 0, sourceRequired: false,
          response: `I can make a blank ${SPOKEN_TEMPLATE_NAMES[spokenTemplate.kind] || consultingTemplate(spokenTemplate.kind).title.toLowerCase()} for you to fill in, but I can only save a document from the keyboard. Type "${String(command.text || "").trim().replace(/[.!?]+$/, "")}" in the box on the screen and I will save it and show a Download button. Nothing was saved yet.` });
      }
      return Object.freeze({ deferred: true, goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], planningAttempts: 0 });
    }
    // Jokes and riddles are not web searches ("Tell me a joke" returned a stitched-together search snippet).
    if (isLightChatRequest(command.text) && typeof this.model.respond === "function") {
      const answer = await this.model.respond({ goal: command.spokenText || command.text, locale, tenantId: command.tenantId,
        interactionProfile: createInteractionProfile({ locale, userPreferences: context.userPreferences || {}, channel: command.channel }),
        conversationHistory: conversationHistory.slice(-24).map(safeTurn), memories: known.memories, capabilities: [] }).catch(() => null);
      if (typeof answer === "string" && answer.trim()) {
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [],
          response: answer.trim(), sourceRequired: false, modelAnswered: true, planningAttempts: 0 });
      }
    }
    // "Translate good morning to Kiswahili": a plain answer, never an app (found on the live site: the AI planner sent it to the learning window and nothing was translated).
    const translation = translationRequest(command.text);
    if (translation && typeof this.model.respond === "function") {
      const answer = await this.model.respond({ goal: `Translate this into ${translation.language} and reply with ONLY the translation, nothing else: ${translation.text}`, locale, tenantId: command.tenantId,
        interactionProfile: createInteractionProfile({ locale, userPreferences: context.userPreferences || {}, channel: command.channel }),
        conversationHistory: [], memories: [], capabilities: [] }).catch(() => null);
      if (typeof answer === "string" && answer.trim()) {
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [],
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
    // "Nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe": a reminder asked for in Kiswahili (Swahili clock and day words), scheduled by the same scheduler.
    const swahiliReminder = completeSwahiliReminderPlan(command.text, catalog);
    if (swahiliReminder) return Object.freeze({ ...swahiliReminder, planningAttempts: 1 });
    const completeTelehealthIntake = completeTelehealthIntakePlan(command.text, catalog);
    if (completeTelehealthIntake) return Object.freeze({ ...completeTelehealthIntake, planningAttempts: 1 });
    const completeMarketplaceSearch = completeMarketplaceSearchPlan(command.text, catalog);
    if (completeMarketplaceSearch) return Object.freeze({ ...completeMarketplaceSearch, planningAttempts: 1 });
    const completeLogisticsTrack = completeLogisticsTrackPlan(command.text, catalog);
    if (completeLogisticsTrack) return Object.freeze({ ...completeLogisticsTrack, planningAttempts: 1 });
    const completeMediaExtended = completeMediaExtendedPlan(command.text, catalog);
    if (completeMediaExtended) return Object.freeze({ ...completeMediaExtended, planningAttempts: 1 });
    const completeImageSearch = completeImageSearchPlan(command.text, catalog);
    if (completeImageSearch) return Object.freeze({ ...completeImageSearch, planningAttempts: 1 });
    const completeVideoSearch = completeVideoSearchPlan(command.text, catalog);
    if (completeVideoSearch) return Object.freeze({ ...completeVideoSearch, planningAttempts: 1 });
    const followUpGoal = followUpGoalFrom(command.text, conversationHistory);
    const agricultureAdvice = agricultureAdvicePlan(followUpGoal || command.text, catalog);
    if (agricultureAdvice) return Object.freeze({ ...personalizedSearch(agricultureAdvice, known.byKind), planningAttempts: 1 });
    const completeLiveKnowledge = completeLiveKnowledgePlan(followUpGoal || command.text, catalog);
    if (completeLiveKnowledge) return Object.freeze({ ...personalizedSearch(completeLiveKnowledge, known.byKind), planningAttempts: 1 });
    const completeMobileClinic = completeMobileClinicPlan(command.text, catalog);
    if (completeMobileClinic) return Object.freeze({ ...completeMobileClinic, planningAttempts: 1 });
    const completeNearbyPlaces = completeNearbyPlacesPlan(command.text, catalog);
    if (completeNearbyPlaces) return Object.freeze({ ...completeNearbyPlaces, planningAttempts: 1 });
    const completeMediaPlayback = completeMediaPlaybackPlan(command.text, catalog);
    if (completeMediaPlayback) return Object.freeze({ ...completeMediaPlayback, planningAttempts: 1 });
    const resume = resumePlan(command.text, catalog, known.byKind);
    if (resume) return Object.freeze({ ...resume, planningAttempts: 1 });
    // Found live: completeBusinessPlan delegates its own matching entirely to
    // businessVoiceDispatch.precheck() and returns null (a clean no-op) for
    // anything it doesn't recognize as genuine business/nonprofit intent --
    // so checking it AFTER the generic lists/"remaining workspace" matchers
    // below let those two broader gates permanently intercept real business
    // requests first. Confirmed live: "Create an application checklist for
    // my nonprofit" (this tool's own advertised example phrase) matched
    // completeListsPlan's bare /\b(list|checklist)\b/ + /\b(create|...)\b/
    // gate and silently created an empty generic to-do checklist instead of
    // the real service-agreement/intake-form/checklist document bundle;
    // "Help with a financial literacy plan for my business" matched
    // completeRemainingWorkspacePlan's "learning" bucket and was routed to a
    // generic lesson-content search instead of the real Financial Literacy
    // Agent. Moved ahead of both, matching the "real handler before generic
    // classifier" fix already applied throughout this codebase.
    // Found live (business/CRM audit): completeDocumentPlan was never
    // included in that same reordering, so a request like "Create a service
    // agreement document for my landscaping business and save it" (create +
    // document + save) still matched completeDocumentPlan's generic gate
    // first, routing to a plain documents.create call with the raw spoken
    // sentence as file content -- never reaching wantsGenerateDocuments'
    // real, business-specific Service_Agreement.md/Client_Intake_Form.md/
    // Application_Checklist.md templates, or wantsGenerateBusinessPlanPdf's
    // real filled-in business-plan PDF export. completeBusinessPlan's own
    // gates (wantsGenerateDocuments requires "service agreement"/"contract"/
    // "intake form"/"client intake"/"application checklist"; the business
    // plan PDF path requires the literal phrase "business plan") are narrow
    // enough that an unrelated generic document request still falls through
    // to completeDocumentPlan below, unaffected.
    const completeBusiness = completeBusinessPlan(command.text, catalog);
    if (completeBusiness) {
      // Found by the phrase sweep: a person with no business workspace was asked "Should I go ahead?" and only after the yes told there is none. Say it first, with no model and before any confirmation.
      const noWorkspace = await this.noBusinessWorkspaceAnswer(command.text, context);
      if (noWorkspace) return Object.freeze({ goal: String(command.text || "").trim(), application: "conversation", riskTier: "low", clarification: null, steps: [], response: noWorkspace, sourceRequired: false, planningAttempts: 0 });
      return Object.freeze({ ...completeBusiness, planningAttempts: 1 });
    }
    // Ahead of completeDocumentPlan for the same reason completeBusinessPlan is:
    // "save this conversation as a document" contains "save"+"document" and would
    // otherwise match completeDocumentPlan's generic gate, which just echoes the raw
    // command sentence as file content -- producing a document whose "content" is
    // literally the words "save this conversation as a document", not the actual
    // conversation. This matcher needs the real conversationHistory the generic one
    // never receives, so it must run first and own this phrasing outright.
    const completeSaveConversation = completeSaveConversationPlan(command.text, catalog, conversationHistory);
    if (completeSaveConversation) return Object.freeze({ ...completeSaveConversation, planningAttempts: 1 });
    // "Draft a website brief for Grace's Bakery", "Create a technology roadmap", "Make an automation audit as a PDF": a fixed starter document with blanks to complete (see knowledge/consulting-templates.js).
    // Not written by the AI and not claiming to know anything about the client, so it is made directly, with no model call.
    const template = templateRequest(command.text);
    if (template && catalog.tools.some(tool => tool.toolId === "documents.create") && catalog.applications.some(app => app.applicationId === "documents")) {
      const made = consultingTemplate(template.kind, { client: template.client });
      return Object.freeze({ goal: String(command.text || "").trim(), application: "documents", riskTier: "low", clarification: null, planningAttempts: 1,
        steps: [{ clientStepId: "consulting-template", title: `Create ${made.title}`, toolId: "documents.create", input: { title: made.title, content: made.content, format: template.format, reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }] });
    }
    // "Export it as a PDF" right after a document was saved: the same text again, in the file type asked for (found on production: nothing handled this sentence, so it went to the AI model).
    const exportFormat = exportLatestDocumentFormat(command.text);
    if (exportFormat && this.documents?.list && catalog.tools.some(tool => tool.toolId === "documents.create") && catalog.applications.some(app => app.applicationId === "documents")) {
      const exported = await exportLatestDocumentPlan(this.documents, { text: command.text, format: exportFormat, tenantId: command.tenantId, ownerId: command.actorId });
      if (exported) return Object.freeze({ ...exported, planningAttempts: 1 });
    }
    // "Show my documents", "what documents do I have": the titles of the person's own saved documents, newest first.
    const documentsListed = await documentsListPlan(this.documents, command);
    if (documentsListed) return Object.freeze({ ...documentsListed, planningAttempts: 1 });
    // "Send new customer Grace to my sales sheet automation", "show my automations": only an automation the person connected, and a send is always a request they must say yes to.
    const automation = await automationPlan(this.automationRecords, command, catalog);
    if (automation) return Object.freeze({ ...automation, planningAttempts: 1 });
    const documentChanges = documentSaveChangesPlan(command.text, catalog);
    if (documentChanges) return Object.freeze({ ...documentChanges, planningAttempts: 1 });
    const completeDocument = completeDocumentPlan(command.text, catalog);
    if (completeDocument) return Object.freeze({ ...completeDocument, planningAttempts: 1 });
    const listUpdate = listUpdatePlan(command.text, catalog);
    if (listUpdate) return Object.freeze({ ...listUpdate, planningAttempts: 1 });
    // "Save the steps for getting a seller's permit in California as a checklist" (the offer after the answer): the walkthrough's steps as a real checklist, made the way any checklist is made
    const walkChecklist = walkthroughChecklistPlan(command.text, catalog);
    if (walkChecklist) return Object.freeze({ ...walkChecklist, planningAttempts: 1 });
    const completeLists = completeListsPlan(command.text, catalog);
    if (completeLists) return Object.freeze({ ...completeLists, planningAttempts: 1 });
    const completeCommunication = completeCommunicationPlan(command.text, catalog);
    if (completeCommunication) return Object.freeze({ ...completeCommunication, planningAttempts: 1 });
    const sendMessage = sendMessagePlan(command.text, catalog, { country: context?.country, timeZone: command.timeZone || context?.timeZone });
    if (sendMessage) return Object.freeze({ ...withContactName(sendMessage, named?.contactName), planningAttempts: 1 });
    const placeCall = callPlan(command.text, catalog, { country: context?.country, timeZone: command.timeZone || context?.timeZone });
    if (placeCall) return Object.freeze({ ...withContactName(placeCall, named?.contactName), planningAttempts: 1 });
    const completeRemainingWorkspace = completeRemainingWorkspacePlan(command.text, catalog);
    if (completeRemainingWorkspace) return Object.freeze({ ...withJobsPlace(completeRemainingWorkspace, command.text, context?.country), planningAttempts: 1 });
    const request = { schema: "nexus.planning-request.v1", goal: command.spokenText || command.text, locale: interactionProfile.locale,
      channel: command.channel, priorTask: summarizeTask(priorTask),
      interactionProfile, tenantId: command.tenantId,
      conversationHistory: conversationHistory.slice(-24).map(safeTurn),
      memories: memories.map(safeMemory), catalog };
    let feedback = [];
    let emptyPlans = 0;
    let attemptsUsed = 0;
    for (let attempt = 0; attempt <= this.maxRepairAttempts; attempt += 1) {
      attemptsUsed = attempt + 1;
      const candidate = canonicalizeExplicitApplication(await this.model.plan({ ...request, feedback, attempt }), command.text, catalog);
      const validation = validatePlan(candidate, catalog, context);
      if (validation.valid) return Object.freeze({ ...personalizedSearch(withClearReminderTime(validation.plan, command.text, locale), known.byKind), planningAttempts: attempt + 1 });
      feedback = validation.errors;
      // A plan with no steps and no question means the model found no tool that fits. It is asked once more with that feedback (it may then pick a tool), but a second empty plan is the answer: asking a third time
      // (each one a full model call, measured at about 3 to 5 seconds) only delays the direct answer below.
      if (Array.isArray(candidate?.steps) && !candidate.steps.length && !String(candidate?.clarification || "").trim()) {
        emptyPlans += 1;
        if (emptyPlans >= 2) break;
      }
    }
    // No registered application or tool fits (a general question, arithmetic, "what do you remember about me").
    // That is not an error for the person asking: answer it directly, without tools and without claiming any
    // action or live data (see OpenAiPlanningModel.respond). Only if that also fails is the original error raised.
    if (typeof this.model.respond === "function") {
      const answer = await this.model.respond({ goal: command.spokenText || command.text, locale: interactionProfile.locale, interactionProfile, tenantId: command.tenantId,
        conversationHistory: request.conversationHistory, memories: request.memories,
        capabilities: catalog.applications.map(app => app.applicationId) }).catch(() => null);
      if (typeof answer === "string" && answer.trim()) {
        return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [],
          response: answer.trim(), sourceRequired: false, modelAnswered: true, planningAttempts: attemptsUsed });
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

// "Pacific Daylight Time" for America/Los_Angeles, so the zone is something a person can hear (the plain name read aloud was "America Los Angeles time"). Falls back to the plain name.
function zoneName(timeZone, now) {
  try { return new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "long" }).formatToParts(now).find(part => part.type === "timeZoneName")?.value || `${timeZone} time`; } catch { return `${timeZone} time`; }
}

function ordinaryConversationPlan(text, context = {}) {
  const goal = String(text || "").trim();
  const normalized = goal.toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").trim();
  const greeting = /^(?:(?:hello|hi|hey|good (?:morning|afternoon|evening))\s+)?(?:nexus|kyro)(?:[, ]+(?:this is|i am|i'm|its|it's)\s+([a-z][a-z .'-]{0,60}))?$/.exec(normalized) ||
    /^(?:hello|hi|hey|good (?:morning|afternoon|evening))(?:\s+(?:nexus|kyro))?(?:[, ]+(?:this is|i am|i'm|its|it's)\s+([a-z][a-z .'-]{0,60}))?$/.exec(normalized);
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
  // In Spanish: "¿Qué hora es?", "¿Qué día es hoy?" are answered in Spanish (found by the live voice audit, where they were answered in English, with the zone read out as "America Los Angeles").
  const foldedAsk = normalized.normalize("NFD").replace(/[̀-ͯ¿¡]/g, "").trim();
  const spanishTime = /^(?:que hora es|que hora son|me dices la hora|dime la hora|a que hora estamos)(?: ahora| ahorita)?$/.test(foldedAsk);
  const spanishDate = /^(?:que (?:dia|fecha) es(?: hoy)?|cual es la fecha(?: de hoy)?|a que fecha estamos|dime la fecha)$/.test(foldedAsk);
  if ((spanishTime || spanishDate) && context.timeZone && validTimeZone(context.timeZone) === context.timeZone) {
    const now = context.now instanceof Date ? context.now : new Date();
    const zone = context.timeZone;
    const date = new Intl.DateTimeFormat("es-US", { timeZone: zone, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now).replace(/^(\p{L}+),?\s+/u, "$1 ");
    const parts = new Intl.DateTimeFormat("es-US", { timeZone: zone, hour: "numeric", minute: "2-digit", hour12: true, timeZoneName: "long" }).formatToParts(now);
    const pick = type => parts.find(part => part.type === type)?.value || "";
    const hour = Number(pick("hour")); const clock = `${pick("hour")}:${pick("minute")} ${pick("dayPeriod").toLowerCase().replace(/\./g, "").replace(/^(a|p)m$/, "$1. m.")}`;
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], sourceRequired: false, language: "es",
      response: spanishDate ? `Hoy es ${date}.` : `${hour === 1 ? "Es la" : "Son las"} ${clock} del ${date} (${pick("timeZoneName")}).` };
  }
  if (/^(?:(?:what(?:'s| is)?|tell me|give me)\s+)?(?:the\s+)?(?:current\s+)?(?:time|date|day)(?:\s+(?:is it|it is))?(?:\s+(?:now|right now|today))?$/.test(normalized) ||
      /^what (?:time|day|date) is it(?:\s+(?:now|right now|today))?$/.test(normalized) || /^what(?:'s| is) today(?:'s date)?$/.test(normalized) || /^what(?:'s| is) the date today$/.test(normalized)) {
    const now = context.now instanceof Date ? context.now : new Date();
    const at = timeZone => ({ date: new Intl.DateTimeFormat("en-GB", { timeZone, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now),
      time: new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(now) });
    // On the person's own clock when their zone is known (the device's, their saved one, or their country's), not East Africa and UTC.
    if (context.timeZone && validTimeZone(context.timeZone) === context.timeZone) {
      const mine = at(context.timeZone);
      return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], sourceRequired: false,
        response: /\bdate|day\b/.test(normalized) && !/\btime\b/.test(normalized) ? `Today is ${mine.date}.` : `It is ${mine.time} on ${mine.date} (${zoneName(context.timeZone, now)}).` };
    }
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

// "Translate good morning to Kiswahili." / "translate where is the clinic into French" / "Translate this to Swahili: ...". Needs the words to translate AND a language; a bare "translate this" with
// nothing to translate (or "translate my document") is left to the rest of the planner.
const TRANSLATE_REQUEST = /^\s*(?:please\s+|can you\s+|could you\s+)?translate\s*:?\s+(.+?)\s+(?:into|to|in)\s+(English|Spanish|French|Swahili|Kiswahili|Arabic|Portuguese|German|Italian|Luganda|Hausa|Yoruba|Igbo|Amharic|Somali|Zulu)\s*[.!?]*\s*$/i;
const TRANSLATE_SOURCE_NOT_TEXT = /^(?:this|that|it|the document|my document|the last document|the latest document|this document|this conversation|this chat)$/i;
function translationRequest(text) {
  const match = TRANSLATE_REQUEST.exec(String(text || "").trim());
  if (!match) return null;
  const words = match[1].trim().replace(/^["'“”]+|["'“”]+$/g, "");
  if (!words || words.length > 600 || TRANSLATE_SOURCE_NOT_TEXT.test(words)) return null;
  const language = /^kiswahili$/i.test(match[2]) ? "Swahili" : match[2];
  return { text: words, language };
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
  // Found live: "Check my maize crop for pests, the leaves have holes and I
  // see caterpillars" -- a plain, real crop-issue report with no question
  // word, "?", or any of the original symptom words -- matched
  // agricultureSubject (via "crop") but not adviceRequest, so it never
  // reached this real knowledge.search-backed plan and instead fell through
  // to a decorative classifier. Widened with concrete pest/disease-report
  // words from that exact example, not a blanket verb like "check" (which
  // would risk misrouting an unrelated "check the weather for my farm"
  // question here instead of to the weather tool).
  const adviceRequest = /[?]|\b(why|what|how|when|where|help|advise|advice|assess|diagnose|inspect|treat|prevent|manage|improve|yellow|wilting|spots?|dying|pests?|infestation|infested|damage|damaged|diseased|caterpillars?|worms?|insects?|holes? in)\b/i.test(goal);
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
  const redFlag = /\b(chest pain|pressure (?:in|on) (?:my|the) chest|trouble breathing|cannot breathe|can't breathe|shortness of breath|face droop|one-sided weakness|(?:weak|weakness|numb|numbness) (?:on )?(?:my |the )?(?:one|left|right) side|one side (?:feels? )?(?:weak|numb)|slurred speech|sudden confusion|passed out|unconscious|unresponsive|seizure|heavy bleeding|(?:not|isn't|stopped|stops|stop) breathing|overdos(?:e|ed|ing)|took too (?:many|much)|swallowed (?:poison|bleach|pesticide|kerosene|paraffin)|poisoned|choking)\b/i.test(normalized);
  const explicitEmergency = /\b(medical emergency|health emergency|call (?:911|emergency services)|need (?:an |the )?ambulance)\b/i.test(normalized);
  if (!(redFlag || explicitEmergency || hypertensiveCrisis)) return null;
  // A very high reading said plainly ("my blood pressure is 190 over 125") still gets the emergency guidance alone, straight away. When the person ALSO asks to save it
  // ("...please save it") it is recorded, and the confirmation opens with the same urgent guidance, so they are told and the reading is kept. Numbers that cannot be a real
  // reading ("400 over 20") are not an emergency at all: completeHealthRecordPlan says so and saves nothing.
  const asksToSave = /\b(record|log|save|add|capture)\b/.test(normalized);
  if (!redFlag && !explicitEmergency && bloodPressure && /\b(?:blood\s*pressure|bp)\b/.test(normalized)
    && (asksToSave || !assessBloodPressure(bloodPressure[1], bloodPressure[2]).valid)) return null;
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
const VITAL_VALUE_CONNECTOR = "(?:(?:today|right now|currently|now|this morning|is|was|of|as|to|reads|reading|at|=|:)\\s*)*";

// A spoken request about the person's saved health readings ("delete my last reading", "show my blood pressure readings", "delete all my health records", "that was wrong, it was 133/78"). Not the generic
// "that was wrong" (that is feedback about Kyro's last answer) and not a bare "delete my last entry" (no health word: the farm log's own undo).
function isSpokenHealthReadingsRequest(text) {
  const intent = healthReadingsIntent(text);
  if (!intent || intent.intent === "wrong") return false;
  return !intent.weak || /\b(?:readings?|records?|vitals?|vipimo|kipimo)\b/i.test(String(text || ""));
}

function completeHealthRecordPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!catalog.tools.some(tool => tool.toolId === "health.record") ||
      !catalog.applications.some(app => app.applicationId === "health")) return null;
  const wantsRecord = /\b(record|log|save|add|capture)\b/i.test(goal);
  const isReported = vitalPhrase => wantsRecord || new RegExp(`\\bmy\\s+${vitalPhrase}\\b`, "i").test(goal);
  const notARealReading = response => ({ goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
  const makePlan = (readingType, input) => ({ goal, application: "health", riskTier: "regulated", clarification: null,
    steps: [{ clientStepId: "record-reading", title: `Record ${readingType.replace(/-/g, " ")} reading`,
      toolId: "health.record", input: { intakeType: readingType, readingType, ...input },
      dependsOn: [], fallbackToolIds: [] }] });

  // The ways a reading is SAID that the patterns below do not read: number words ("one forty over ninety"), "140 by 90", "my sugar is 9.4" (no "blood"), a decimal comma ("8,5") or a spoken
  // "point" ("7 point 2"), and Kiswahili ("presha yangu ni 160 juu ya 100", "sukari yangu 7.5"). The same reader the spoken route uses. Anything it cannot read whole is asked about, never saved cut short.
  const fromSpokenForm = () => {
    const spoken = parseSpokenReading(goal);
    if (spoken && !spoken.ask && spoken.form !== "bare") {
      if (spoken.vital === "bp") {
        if (!assessBloodPressure(spoken.systolic, spoken.diastolic).valid) return notARealReading(invalidReadingReply(spoken.systolic, spoken.diastolic));
        return makePlan("blood-pressure", { systolic: spoken.systolic, diastolic: spoken.diastolic });
      }
      if (spoken.vital === "glucose") {
        const resolved = resolveGlucose(spoken.value, spoken.unit || "");
        if (resolved.invalid) return notARealReading(invalidGlucoseReply(spoken.valueText));
        if (resolved.ambiguous) return notARealReading(ambiguousUnitReply(spoken.valueText));
        return makePlan("blood-glucose", { glucose: Math.round(toMgdl(resolved)), glucoseUnit: resolved.unit, glucoseSaid: resolved.value });
      }
      if (spoken.vital === "pulse" && spoken.value >= 20 && spoken.value <= 250) return makePlan("pulse", { pulse: spoken.value });
      if (spoken.vital === "oxygen" && spoken.value >= 50 && spoken.value <= 100) return makePlan("oxygen-saturation", { oxygenSaturation: spoken.value });
      if (spoken.vital === "temperature") {
        const unit = spoken.unit || (spoken.value >= 30 && spoken.value <= 45 ? "C" : spoken.value >= 70 && spoken.value <= 115 ? "F" : "");
        if (unit === "C" && spoken.value >= 30 && spoken.value <= 45) return makePlan("temperature", { temperature: spoken.value, temperatureUnit: "C" });
        if (unit === "F" && spoken.value >= 70 && spoken.value <= 115) return makePlan("temperature", { temperature: spoken.value, temperatureUnit: "F" });
      }
    } else if (spoken && spoken.ask && spoken.ask !== "several" && (wantsRecord || /\bmy\b|\byangu\b|\bwangu\b/i.test(goal))) {
      return notARealReading("I could not read that reading clearly (there was more than one number, or part of it was cut off), so nothing has been saved. Please say it again with just the one reading, for example \"my blood sugar is 7.2 mmol\" or \"my blood pressure is 140 over 90\".");
    }
    return null;
  };
  // A decimal comma ("8,5") or a spoken "point" is read by the patterns below as the part before it only ("8"), which would be recorded as a different reading. Those forms go to the whole-number reader first.
  if (/\d,\d{1,2}(?!\d)|\b(?:point|nukta)\b/i.test(goal)) {
    const early = fromSpokenForm();
    if (early) return early;
  }

  // Two readings in one sentence ("my sugar is 8 and my BP is 140/90"): only the first used to be saved and the other was dropped without a word. Each reading is saved on its own, so each one is
  // checked and confirmed on its own: say so, and save nothing yet, rather than silently keep one.
  const given = [];
  if (/\b(?:blood\s*pressure|bp)\b[^\d]{0,40}\d{2,3}\s*(?:over|\/)\s*\d{2,3}\b/i.test(goal) || /\b\d{2,3}\s*(?:over|\/)\s*\d{2,3}\b[^.]{0,40}\b(?:blood\s*pressure|bp)\b/i.test(goal)) given.push({ name: "blood pressure", example: "my blood pressure as 140 over 90" });
  if (/\b(?:blood\s*sugar|glucose|sugar)\b[^\d.]{0,25}\d/i.test(goal)) given.push({ name: "blood sugar", example: "my blood sugar as 8 mmol" });
  if (/\b(?:oxygen|o2|spo2|pulse\s*ox)\b[^\d]{0,25}\d{2,3}\b/i.test(goal)) given.push({ name: "oxygen", example: "my oxygen as 96" });
  if (/\b(?:pulse|heart\s*rate)\b[^\d]{0,25}\d{2,3}\b/i.test(goal)) given.push({ name: "pulse", example: "my pulse as 78" });
  if (given.length >= 2 && (wantsRecord || /\bmy\b/i.test(goal))) {
    return notARealReading(`You gave me ${given.length} readings (${given.map(item => item.name).join(" and ")}). I save one reading at a time so each is checked on its own, and nothing has been saved yet. Say, for example, "record ${given[0].example}", and then the next one.`);
  }

  if (isReported("(?:blood\\s*pressure|bp)") && /\b(?:blood\s*pressure|bp)\b/i.test(goal)) {
    const bpMatch = goal.match(/\b(?:blood\s*pressure|bp)\b[^\d]{0,40}(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/i) ||
      goal.match(/\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b[^.]{0,40}\b(?:blood\s*pressure|bp)\b/i);
    if (bpMatch) {
      const systolic = Number(bpMatch[1]); const diastolic = Number(bpMatch[2]);
      // Numbers that cannot be a real reading ("400 over 20", "120 over 130") are said so and nothing is saved, the same as when the reading is spoken.
      if (!assessBloodPressure(systolic, diastolic).valid) return notARealReading(invalidReadingReply(systolic, diastolic));
      return makePlan("blood-pressure", { systolic, diastolic });
    }
  }
  if (isReported("(?:blood\\s*sugar|glucose)")) {
    // A number with its unit when one is said ("7.2 mmol", "130 mg per dL"); mmol per litre is common in East Africa. The unit is taken from the words, else from the size of the
    // number, and a number that could be either is asked about instead of saved.
    const match = goal.match(new RegExp(`\\b(?:blood\\s*sugar|glucose)\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d+(?:\\.\\d+)?)\\s*(mmol(?:\\s*(?:/|per)\\s*l(?:it(?:er|re)s?)?)?|mg\\s*(?:/|per)?\\s*d?l?)?`, "i"));
    if (match) {
      const resolved = resolveGlucose(match[1], (match[2] || "").trim());
      if (resolved.invalid) return notARealReading(invalidGlucoseReply(match[1]));
      if (resolved.ambiguous) return notARealReading(ambiguousUnitReply(match[1]));
      return makePlan("blood-glucose", { glucose: Math.round(toMgdl(resolved)), glucoseUnit: resolved.unit, glucoseSaid: resolved.value });
    }
  }
  if (isReported("(?:oxygen|o2|spo2|pulse\\s*ox)")) {
    const match = goal.match(new RegExp(`\\b(?:oxygen|o2|spo2|pulse\\s*ox)\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d{2,3})\\b`, "i"));
    if (match) { const value = Number(match[1]); if (value >= 50 && value <= 100) return makePlan("oxygen-saturation", { oxygenSaturation: value }); }
  }
  if (isReported("temp(?:erature)?")) {
    const match = goal.match(new RegExp(`\\btemp(?:erature)?\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d{2,3}(?:\\.\\d)?)(?:\\s*°?\\s*(f|c|fahrenheit|celsius)\\b)?`, "i"));
    if (match) {
      const value = Number(match[1]);
      // The unit is what was said ("37.5 C", "100.4 F"), else the size of the number: 30 to 45 can only be Celsius and 70 to 115 only Fahrenheit. Anything between is asked about, not saved.
      const said = (match[2] || "").toLowerCase()[0];
      const unit = said || (value >= 30 && value <= 45 ? "c" : value >= 70 && value <= 115 ? "f" : "");
      if (unit === "c" && value >= 30 && value <= 45) return makePlan("temperature", { temperature: value, temperatureUnit: "C" });
      if (unit === "f" && value >= 70 && value <= 115) return makePlan("temperature", { temperature: value, temperatureUnit: "F" });
      return notARealReading(`I did not save this: ${value}${said ? ` ${said.toUpperCase()}` : ""} cannot be a real body temperature (about 30 to 45 in Celsius, or 70 to 115 in Fahrenheit). Please check the thermometer and tell me again, for example "my temperature is 37.5 C".`);
    }
  }
  if (isReported("(?:pulse|heart\\s*rate)")) {
    const match = goal.match(new RegExp(`\\b(?:pulse|heart\\s*rate)\\b\\s*${VITAL_VALUE_CONNECTOR}(\\d{2,3})\\b`, "i"));
    if (match) { const value = Number(match[1]); if (value >= 20 && value <= 250) return makePlan("pulse", { pulse: value }); }
  }
  return fromSpokenForm();
}

// Wiping everything Kyro knows cannot be undone, so it is not done by a spoken or typed sentence. The person is told plainly, and shown the one-at-a-time way that does work.
const BULK_FORGET = /^(?:please |kyro,? )*(?:forget|delete|erase|clear|wipe|remove|reset)\s+(?:absolutely |literally )?(?:everything(?: (?:you know|you have|you remember|that i(?:'ve| have)? (?:told|said to) you))?(?: about me)?|all of (?:it|that|this)|all (?:of )?(?:that|it)|all my (?:data|memory|memories|history|information|info|personal (?:data|information|details)|details|account)|my (?:whole |entire )?(?:account|data|memory|memories|history)|what i (?:told|said to) you|everything i (?:told|said to) you|(?:all )?(?:the )?things? i (?:told|said to) you)(?: and (?:everything|all(?: of it)?|my data))?(?: please)?$/i;
function bulkForgetReply(text) {
  const t = String(text || "").trim().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").replace(/\s+/g, " ");
  if (!t || t.length > 90 || !BULK_FORGET.test(t)) return null;
  return 'I can\'t clear everything by voice or by typing here, because it can\'t be undone and I want to be sure it is you. To remove your data, open "Privacy and data" in the app and delete it there. To take back one thing at a time, say, for example, "forget that I keep chickens" or "forget Otieno". Nothing was deleted.';
}

// A plain yes to the offer to alert the trusted circle: see companion/offer.js (the offer is the last sentence, as a question, and the yes is the very next message).
const alertOfferAccepted = acceptedAlertOffer;

// Repeating reminders in Kiswahili: read into the English sentence the existing service understands; the answer is Kiswahili when it worked, and the service's own words when it did not.
async function swahiliRepeatingTurn({ text, store, tenantId, userId, timeZone }) {
  if (!store?.add) return null;
  const repeat = parseSwahiliRepeating(text);
  if (repeat) {
    if (repeat.needTime) return NEED_TIME_SW;
    if (repeat.needTask) return NEED_TASK_SW;
    if (repeat.needDay) return NEED_DAY_SW;
    if (repeat.unsupported) return UNSUPPORTED_REPEAT_SW;
    const reply = await repeatReminderTurn({ text: repeat.english, store, tenantId, userId, timeZone });
    return /^Okay\. I will/.test(reply || "") ? repeat.replySw : reply;
  }
  const stop = parseSwahiliStop(text);
  if (stop) {
    const reply = await repeatReminderTurn({ text: stop.english, store, tenantId, userId, timeZone });
    return /^Done|stopped/i.test(reply || "") ? stoppedReplySw(stop.task) : reply;
  }
  const list = parseSwahiliList(text);
  return list ? repeatReminderTurn({ text: list.english, store, tenantId, userId, timeZone }) : null;
}

// A Kiswahili reminder the clock-and-day reader above did not take: a length of time ("nikumbushe baada ya dakika ishirini kunywa dawa", "nusu saa"), or a time it could not read. The general time reader decides.
const SWAHILI_REMIND_LEAD = /^(?:tafadhali\s+|naomba\s+)?(?:nikumbushe|nikumbushie|nikumbusheni|unikumbushe|niwekee\s+kikumbusho|weka\s+kikumbusho)\b/i;
function swahiliGeneralReminder(goal) {
  if (!SWAHILI_REMIND_LEAD.test(goal) || /\bkila\b/i.test(goal)) return null;
  const timing = resolveReminderTime(goal, { language: "sw" });
  if (timing.status === "ok") {
    const task = extractAssistantReminderTask(goal);
    return task === "follow up" ? { needTask: true } : { task, when: goal };
  }
  return { needTime: true, ask: timing.ask?.sw };
}

// A reminder whose time is unclear (a bare "at 6": morning or evening?) or missing is asked about, never set at a guessed time.
function clarifyReminderTime(goal, locale = "en") {
  const timing = resolveReminderTime(goal, { language: /^sw/i.test(locale) ? "sw" : undefined });
  if (timing.status === "ok") return null;
  return { goal, application: "reminders", riskTier: "low", clarification: timing.language === "sw" || /^sw/i.test(locale) ? timing.ask.sw : timing.ask.en, steps: [], sourceRequired: false };
}
// The same for a plan the AI model wrote: its reminder step is checked against what the person actually said.
function withClearReminderTime(plan, goal, locale = "en") {
  const step = (plan?.steps || []).find(item => item?.toolId === "reminders.schedule");
  if (!step) return plan;
  const input = step.input || {};
  const offset = Number(input.timeOffsetMinutes);
  if (Number.isFinite(offset) && offset > 0) return plan;
  const said = String(input.when || input.reminder || input.text || input.message || input.title || goal || "").trim();
  if (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(said)) return plan;
  const timing = resolveReminderTime(said, { language: /^sw/i.test(locale) ? "sw" : undefined });
  if (timing.status === "ok") return plan;
  return { goal: plan.goal || goal, application: "reminders", riskTier: "low", clarification: timing.language === "sw" || /^sw/i.test(locale) ? timing.ask.sw : timing.ask.en, steps: [], sourceRequired: false };
}

function completeSwahiliReminderPlan(text, catalog) {
  const goal = String(text || "").trim();
  let parsed = parseSwahiliReminder(goal);
  if (!parsed) parsed = swahiliGeneralReminder(goal);
  if (!parsed) return null;
  if (!catalog.tools.some(tool => tool.toolId === "reminders.schedule") || !catalog.applications.some(app => app.applicationId === "reminders")) return null;
  if (parsed.needTime || parsed.needTask) return { goal, application: "reminders", riskTier: "low", clarification: parsed.needTask ? NEED_TASK_SW : (parsed.ask || NEED_TIME_SW), steps: [], sourceRequired: false };
  return { goal, application: "reminders", riskTier: "low", clarification: null, sourceRequired: false,
    steps: [{ clientStepId: "reminders-schedule", title: "Persist governed reminder", toolId: "reminders.schedule",
      input: { reminder: parsed.task, when: parsed.when, language: "sw", ...(parsed.whenSw ? { whenSw: parsed.whenSw } : {}) }, dependsOn: [], fallbackToolIds: [] }] };
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

// Item 12 of the 2026-09-22 capability audit: "logistics tracking" had no path at all through the
// primary/authoritative runtime -- only the legacy voice-only path could reach it, and even there,
// production's real deployed provider is AgriNexus's own decorative mock (see
// nexus/logistics/executor.js's header for the full honest accounting of what is and isn't real here).
function completeLogisticsTrackPlan(text, catalog) {
  const goal = String(text || "").trim();
  // ("Estimate the delivery time from Stockton to Fresno": estimate, calculate and work out are asks too; it went to the voice model's map tool, which answered "the route details weren't accepted")
  if (!/\b(track|where is|when will|how long|estimate|calculate|work out)\b/i.test(goal) || !/\b(shipment|delivery|order|package|parcel)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "logistics.track") ||
      !catalog.applications.some(app => app.applicationId === "logistics")) return null;
  const match = /\bfrom\s+(.+?)\s+(?:to|arriving in|arriving at)\s+(.+?)(?:\s+(?:arrive|arrives|get there|gets there)\b.*)?(?:[.?!]|$)/i.exec(goal);
  if (!match) return null;
  return { goal, application: "logistics", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "track-logistics", title: "Estimate delivery time and distance", toolId: "logistics.track",
      input: { origin: match[1].trim(), destination: match[2].trim() }, dependsOn: [], fallbackToolIds: [] }] };
}

// What to search for in "Find a picture of a maize armyworm" or "Show me videos about drip irrigation": the topic alone. The older cleaning took out only the verb and the noun, so the search provider was asked for
// "a of a maize armyworm" and "about drip irrigation." (found testing production). The leading "a picture of", "some videos about", the noun anywhere else ("maize armyworm pictures") and the closing full stop are removed;
// if nothing is left ("show me pictures") the whole request is the query, as before.
function cleanVisualSearchQuery(goal, verbs, nouns) {
  const query = String(goal || "")
    .replace(new RegExp(`^\\s*(?:nexus[,:]?\\s*)?(?:please\\s+)?(?:${verbs})\\s+(?:for\\s+)?(?:me\\s+)?`, "i"), "")
    .replace(new RegExp(`^(?:(?:a|an|the|some|any|more|a few)\\s+)?(?:(?:good|nice|clear|real|recent)\\s+)?(?:${nouns})\\s*(?:of|for|about|showing|on|with)?\\s*`, "i"), "")
    .replace(new RegExp(`\\b(?:${nouns})\\b`, "ig"), "")
    .replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim();
  return query || String(goal || "").trim();
}

function completeImageSearchPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(show|find|search|display|open)\b/i.test(goal) || !/\b(images?|pictures?|photos?)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "images.search") ||
      !catalog.applications.some(app => app.applicationId === "images")) return null;
  const query = cleanVisualSearchQuery(goal, "show|find|search|display|open", "images?|pictures?|photos?");
  return { goal, application: "images", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "search-images", title: "Search governed images", toolId: "images.search",
      input: { query, requireSources: true }, dependsOn: [], fallbackToolIds: [] }] };
}

// The 2026-09-22 capability audit's item 18 finding: "show me videos of X" had no path at all through
// the authoritative runtime -- only images.search existed here, with nothing for video. The real video
// search itself already existed (server.js's legacy nexus_visual_analysis tool), now shared via
// server/providers/videoSearchProvider.js so this fast path and that legacy one call the same real code.
function completeVideoSearchPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(show|find|search|watch|play|display|open)\b/i.test(goal) || !/\bvideos?\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "videos.search") ||
      !catalog.applications.some(app => app.applicationId === "videos")) return null;
  const query = cleanVisualSearchQuery(goal, "show|find|search|watch|play|display|open", "videos?");
  return { goal, application: "videos", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "search-videos", title: "Search governed videos", toolId: "videos.search",
      input: { query }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeLiveKnowledgePlan(text, catalog) {
  const goal = String(text || "").trim();
  // Found live: this detector was narrower than the client's own definition
  // of a live-knowledge question (isNexusLiveKnowledgeQuestion in
  // public/app.js) -- "What's the market price for maize?" satisfies the
  // client's definition ("market price") but not this one (no
  // current/latest/live/sources), so any caller relying on this server-side
  // planner alone (without a client-side pre-check) never resolved it to a
  // real search. Added only these two specific phrases from that real
  // example -- "today"/"now"/"recent" were tried first and reverted: they
  // collided with completeWeatherForecastPlan's own bare "today"/"now"
  // phrasing (confirmed by two real test failures), so this stays narrow
  // rather than broadly matching the client's full vocabulary.
  if (!/[?]|\b(why|what|how|when|where|who)\b/i.test(goal) || !/\b(current|latest|live|sources?|market price|price for)\b/i.test(goal)) return null;
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

// "Find a pharmacy near me", "Find a clinic near Kisumu", "Where is the nearest hospital?", "Tafuta duka la dawa karibu na Kisumu". Found by the phrase sweep: on the typed route these went to
// the AI model (no place was ever searched). The place named is passed on; "near me" passes none and the search then uses the person's saved town or their country (and says so) or asks which town.
function completeNearbyPlacesPlan(text, catalog) {
  const goal = String(text || "").trim();
  // A vet or livestock service is not on the list of clinics and pharmacies for people, and was answered with a human health post or a list of chemists: say so, and say what to do instead.
  if (animalServiceRequestFor(goal)) {
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], sourceRequired: false,
      response: "I can only look up clinics and pharmacies for people, so I will not guess at a vet. To find a vet or animal clinic, say, for example, \"search the web for a vet in Nakuru\", or ask your local livestock officer." };
  }
  const request = parseNearbyPlacesRequest(goal);
  if (!request) return null;
  const { kind, place, nearest } = request;
  const toolId = kind === "pharmacy" ? "pharmacy.find" : "clinic.find"; const application = kind === "pharmacy" ? "pharmacy" : "mobile-clinic";
  if (!catalog.tools.some(tool => tool.toolId === toolId) || !catalog.applications.some(app => app.applicationId === application)) return null;
  return { goal, application, riskTier: "low", clarification: null,
    steps: [{ clientStepId: `find-${kind}`, title: kind === "pharmacy" ? "Find pharmacies nearby" : "Find clinics nearby", toolId,
      input: { ...(kind === "pharmacy" ? { query: goal } : {}), ...(place ? { location: place } : {}), selectClosest: nearest }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeMediaPlaybackPlan(text, catalog) {
  const goal = String(text || "").trim();
  const requestedMedia = goal.replace(/^\s*(?:nexus[,:]?\s*)?play\s+/i, "").replace(/\s+and\s+confirm\b.*$/i, "").trim();
  if (!/^\s*(?:nexus[,:]?\s*)?play\b/i.test(goal) || !requestedMedia) return null;
  if (!catalog.tools.some(tool => tool.toolId === "media.play") ||
      !catalog.applications.some(app => app.applicationId === "music-media")) return null;
  return { goal, application: "music-media", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "play-media", title: "Play requested media", toolId: "media.play",
      input: { action: "play", requestedMedia, resolvedMedia: requestedMedia, kind: "music", playbackState: "playing" },
      dependsOn: [], fallbackToolIds: [] }] };
}

// The rest of the music/video vocabulary (public/kyro-media-commands.js is the one place that understands it, shared with the phone):
// "play radio ...", "watch ...", "cheza ...", "weka redio ...", "angalia video ya ...", "open YouTube and play ...", and the controls
// ("pause the music", "stop the music", "next song", "volume up", "sitisha muziki", "ongeza sauti"). A plain English "play <song>" and the
// plural "show me videos of ..." gallery are left to the matchers that already own them. A bare "pause"/"next" is not claimed here: only the
// phone knows whether anything is playing (it handles those itself while a player is open), so the server acts on controls that name music.
function completeMediaExtendedPlan(text, catalog) {
  const goal = String(text || "").trim().replace(/\s+and\s+confirm\b.*$/i, "");
  const parsed = KyroMediaCommands.parse(goal);
  if (!parsed || !catalog.applications.some(app => app.applicationId === "music-media")) return null;
  if (parsed.type === "control") {
    if (!parsed.explicit || !catalog.tools.some(tool => tool.toolId === "media.control")) return null;
    return { goal, application: "music-media", riskTier: "low", clarification: null,
      steps: [{ clientStepId: "control-media", title: "Control the music or video that is playing", toolId: "media.control",
        input: { action: "control", control: parsed.control, language: parsed.lang }, dependsOn: [], fallbackToolIds: [] }] };
  }
  if (parsed.type !== "play" || !catalog.tools.some(tool => tool.toolId === "media.play")) return null;
  if (parsed.kind === "music" && !parsed.handoff && parsed.lang === "en" && parsed.query) return null;
  const requestedMedia = parsed.query || (parsed.kind === "radio" ? "radio" : parsed.kind === "music" ? "music" : "");
  if (!requestedMedia) return null;
  return { goal, application: "music-media", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "play-media", title: parsed.handoff ? "Queue on YouTube" : "Play requested media", toolId: "media.play",
      input: { action: "play", requestedMedia, resolvedMedia: requestedMedia, kind: parsed.kind, handoff: parsed.handoff === true,
        language: parsed.lang, allowEmpty: !parsed.query, playbackState: parsed.handoff ? "queued" : "playing" },
      dependsOn: [], fallbackToolIds: [] }] };
}

// "Make my resume", "Create a resume for Amina Wanjiru. Skills: crop planning, irrigation. Experience: 5 years managing a maize farm.":
// a resume built from what the person says plus what Kyro already knows about them (see resume/executor.js). Questions about resumes
// ("how do I write a resume?") are not requests to make one, and a resume with nothing to put in it is asked about rather than invented.
// Found live: "Give me a resume for a warehouse job" and "I need a resume
// for a construction job" use "give"/"need," which weren't in the verb
// list, so a real, working request fell through to the free-form AI
// planner instead of this deterministic fast path.
const RESUME_REQUEST = /^\s*(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*(?:make|create|build|write|prepare|draft|generate|give me|i need|need)\b[^.?!]{0,40}\b(?:resume|résumé|cv|curriculum vitae)\b/i;
// Found live: this used to also treat ANY sentence ending in "?" as a question, to catch phrasings beyond
// its own explicit how/what/.../do-i openers -- but RESUME_REQUEST already requires one of its own leading
// action verbs (make/create/build/write/...), which a genuine question about resumes never starts with, so
// that catch-all was never actually needed to exclude a real question. It instead caught the ordinary polite
// phrasing of a REAL request -- including the exact "can you"/"could you"/"would you" openers RESUME_REQUEST
// itself explicitly allows -- so "Can you make a resume for me?" silently fell through to the free-form AI
// planner instead of this deterministic, well-tested fast path.
const RESUME_QUESTION = /^\s*(?:how|what|why|when|where|should|can you explain|tips|is it|do i)\b/i;
// The same request in Kiswahili ("nataka CV", "tengeneza wasifu wangu", "nitengenezee CV", "nipe CV yangu"); a question about CVs ("CV ni nini?", "jinsi ya kuandika CV")
// and a request to download one that is already saved ("pakua CV yangu") are not requests to make one. The clarifying questions are then asked in Kiswahili too.
const RESUME_REQUEST_SW = /^\s*(?:(?:tafadhali|kyro|nexus)[, ]+)*(?:tengeneza|nitengenezee|unitengenezee|niandikie|andika|nipe|naomba|nataka|ninataka|ninahitaji|nahitaji|nisaidie kutengeneza)\b[^.?!]{0,40}\b(?:cv|wasifu)\b/i;
const RESUME_QUESTION_SW = /\b(?:ni nini|maana|jinsi ya|namna ya|nawezaje|ninawezaje|nifanyeje|pakua|niipakue|download)\b/i;
function resumeField(text, label) {
  const match = new RegExp(`\\b${label}\\s*(?:are|is|include|includes|ni)?\\s*[:\\-]\\s*(.+?)(?=(?:\\.|;|,)?\\s+(?:skills?|ujuzi|experience|uzoefu|education|elimu|languages?|lugha|phone|simu|email)\\s*[:\\-]|\\.\\s|$)`, "i").exec(text);
  return match ? match[1].trim().replace(/[.]+$/, "") : "";
}
function resumePlan(text, catalog, byKind = {}) {
  const goal = String(text || "").trim();
  const swahili = RESUME_REQUEST_SW.test(goal) && !RESUME_QUESTION_SW.test(goal);
  if (!goal || goal.length > 600 || !(RESUME_REQUEST.test(goal) || swahili) || RESUME_QUESTION.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "resume.create") || !catalog.applications.some(app => app.applicationId === "workforce")) return null;
  const clarify = question => ({ goal, application: "workforce", riskTier: "low", clarification: question, steps: [] });
  const name = /\b(?:for|named|called|name is|jina langu ni|naitwa|ninaitwa|kwa ajili ya)\s+([A-Z][A-Za-z'’-]+(?:\s+[A-Z][A-Za-z'’-]+){0,2})\b/.exec(goal)?.[1] || byKind.name || "";
  if (!name) return clarify(swahili
    ? 'Jina gani liwe kwenye CV yako? Unaweza pia kuniambia mara moja kwa "jina langu ni …" nami nitalikumbuka.'
    : 'What name should go on your resume? You can also tell me once with "my name is …" and I will remember it.');
  // An Oxford comma before "and" ("irrigation, and livestock management") leaves a stray "and "
  // stuck to the last item -- the comma already consumes the split point before it, so strip it
  // after splitting. These arrays reach build.js's items() as-is (it only re-splits strings), so
  // this is the one place that needs to get it right for the skills/languages path.
  const splitList = value => value.split(/\s*,\s*|\s+and\s+|\s+na\s+/).map(item => item.trim().replace(/^and\s+/i, "")).filter(Boolean);
  const skills = splitList(resumeField(goal, "(?:skills?|ujuzi)"));
  const experience = resumeField(goal, "(?:experience|uzoefu)").split(/\s*;\s*/).filter(Boolean);
  const education = resumeField(goal, "(?:education|elimu)").split(/\s*;\s*/).filter(Boolean);
  const languages = splitList(resumeField(goal, "(?:languages?|lugha)"));
  const known = Boolean(byKind.crops || byKind.livestock);
  if (!skills.length && !experience.length && !education.length && !known)
    return clarify(swahili
      ? 'CV iseme nini? Niambie ujuzi na uzoefu wako, kwa mfano: "ujuzi: kupanga mazao, umwagiliaji; uzoefu: miaka 5 ya kusimamia shamba la mahindi".'
      : 'What should it say? Tell me your skills and experience, for example: "skills: crop planning, irrigation; experience: 5 years managing a maize farm".');
  const phone = SEND_PHONE.exec(goal)?.[0]?.replace(/[\s().-]/g, ""); const email = SEND_EMAIL.exec(goal)?.[0]?.replace(/[.,;:!?]+$/, "");
  const input = { name, ...(phone ? { phone } : {}), ...(email ? { email } : {}), skills, experience, education, languages };
  return { goal, application: "workforce", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "create-resume", title: "Create your resume", toolId: "resume.create", input, dependsOn: [], fallbackToolIds: [] }] };
}

// "as a PDF"/"as a Word document"/etc, so a plainly-requested format isn't silently
// dropped to documents.create's own default (txt) -- confirmed live, 2026-09-22 audit:
// "save this as a PDF" produced a real .txt file because this fast path never looked.
const DOCUMENT_FORMAT_WORDS = Object.freeze({
  pdf: "pdf", docx: "docx", "word document": "docx", word: "docx", markdown: "md", md: "md",
  txt: "txt", "text file": "txt", "plain text": "txt", json: "json"
});
function requestedDocumentFormat(goal) {
  const match = /\bas\s+(?:an?\s+)?(pdf|docx|word document|word|markdown|md|text file|plain text|txt|json)\b/i.exec(goal);
  return match ? DOCUMENT_FORMAT_WORDS[match[1].toLowerCase()] : null;
}

// "Can you save this conversation?" / "export our chat as a PDF" / "get me a copy of
// this discussion". Confirmed with the user (2026-09-28) that no such feature existed:
// Kyro genuinely keeps recent conversation history (nexus/data/conversation-repository.js,
// read back into every plan() call as conversationHistory), but nothing ever turned that
// history into a document the person could keep. The gate is two-part -- an action verb
// and a target noun -- specifically so it doesn't fire on unrelated "save"/"export"
// requests (save a reminder, export a report) that don't mention the conversation itself.
const SAVE_CONVERSATION_ACTION = /\b(save|export|download|keep(?:\s+a)?\s+copy\s+of|get\s+me\s+a\s+copy\s+of|give\s+me\s+a\s+copy\s+of)\b/i;
const SAVE_CONVERSATION_TARGET = /\b(conversation|chat|discussion|transcript)\b/i;
function formatConversationTranscript(history) {
  return history.map(turn => {
    const who = turn.role === "assistant" ? "Nexus" : turn.role === "user" ? "You" : String(turn.role || "Note");
    const when = turn.created_at || turn.occurredAt;
    const timestamp = when ? new Date(when).toISOString() : null;
    return `${timestamp ? `[${timestamp}] ` : ""}${who}: ${String(turn.content || "").trim()}`;
  }).join("\n\n");
}
function completeSaveConversationPlan(text, catalog, conversationHistory = []) {
  const goal = String(text || "").trim();
  if (!SAVE_CONVERSATION_ACTION.test(goal) || !SAVE_CONVERSATION_TARGET.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "documents.create") ||
      !catalog.applications.some(app => app.applicationId === "documents")) return null;
  if (!conversationHistory.length) return { goal, application: "conversation", riskTier: "low", clarification: null,
    steps: [], response: "There's no conversation history yet in this session to save.", sourceRequired: false };
  const format = requestedDocumentFormat(goal);
  const content = formatConversationTranscript(conversationHistory);
  return { goal, application: "documents", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "save-conversation", title: "Save this conversation",
      toolId: "documents.create", input: { title: "Nexus conversation transcript", content, reopenAfterSave: true, ...(format ? { format } : {}) },
      dependsOn: [], fallbackToolIds: [] }] };
}

// "Export it as a PDF." / "Convert that to Word." / "Save the document as a text file." Only a bare "it / that / this / the document" counts, so "export this chat as a PDF" (the conversation matcher above)
// and "export my report as a PDF" (a different request) are not taken.
const EXPORT_LATEST_DOCUMENT = /^\s*(?:please\s+|can you\s+|could you\s+)?(?:export|convert|save|download|turn|make|give me|send me)\s+(?:(?:it|that|this|the (?:last |latest )?document|my (?:last |latest )?document)\s+)?(?:as|to|into|in)\s+(?:an?\s+)?(pdf|word document|word|docx|markdown|md|text file|plain text|txt)\b[\s.!?]*$/i;
function exportLatestDocumentFormat(text) {
  const goal = String(text || "").trim();
  if (SAVE_CONVERSATION_TARGET.test(goal)) return null;
  const match = EXPORT_LATEST_DOCUMENT.exec(goal);
  return match ? DOCUMENT_FORMAT_WORDS[match[1].toLowerCase()] || null : null;
}
const DOCUMENTS_LIST_REQUEST = /^(?:please\s+)?(?:(?:kyro|nexus)[,.]?\s+)?(?:(?:show|list|read|open|see)(?:\s+me)?\s+(?:all\s+)?(?:of\s+)?(?:(?:my|the)\s+)?(?:saved\s+)?(?:documents|docs|files)|what\s+(?:documents|docs|files)\s+do\s+i\s+have|(?:do\s+i\s+have\s+any|what\s+have\s+i\s+saved\s+in\s+my)\s+(?:saved\s+)?(?:documents|docs))\s*[.?!]*$/i;
// "Show my documents", "what documents do I have": the titles of the person's own saved documents, newest first (null when it is not that request or the documents cannot be read).
// "Show my resumes", "open my CV": the saved documents that are résumés (they are saved as "Resume - <name>"). Found sweeping: "open my resume" listed the business plans, as raw fields.
const RESUMES_LIST_REQUEST = /^(?:please\s+)?(?:(?:kyro|nexus)[,.]?\s+)?(?:(?:show|list|read|open|see|view|find|get)(?:\s+me)?\s+(?:all\s+)?(?:of\s+)?(?:my|the)\s+(?:saved\s+)?(?:resumes?|résumés?|resumés?|cvs?|curriculum vitae)|(?:do\s+i\s+have|where\s+is)\s+(?:a|an|any|my)\s+(?:saved\s+)?(?:resumes?|résumés?|cvs?))[.?!\s]*$/i;
async function documentsListPlan(documents, command) {
  const goal = String(command.text || "").trim();
  const resumes = RESUMES_LIST_REQUEST.test(goal);
  if (!documents?.list || !(resumes || DOCUMENTS_LIST_REQUEST.test(goal))) return null;
  let rows = null;
  try { rows = await documents.list({ tenantId: command.tenantId, ownerId: command.actorId, limit: resumes ? 50 : 8 }); } catch { return null; }
  if (!Array.isArray(rows)) return null;
  if (resumes) {
    const mine = rows.filter(row => /\b(?:resume|résumé|resumé|cv|curriculum vitae)\b/i.test(String(row.title || ""))).slice(0, 8);
    const said = mine.length
      ? `Your résumés, newest first: ${mine.map((row, index) => `${index + 1}, ${row.title}`).join("; ")}. Say "build my resume" to make a new one.`
      : 'You have no saved résumé yet. Say "build my resume" and I will ask you a few short questions.';
    return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response: said, sourceRequired: false };
  }
  const response = rows.length
    ? `Your saved documents, newest first: ${rows.map((row, index) => `${index + 1}, ${row.title || "untitled"}`).join("; ")}. Say "export the latest document as a PDF" to get a file.`
    : 'You have no saved documents yet. Say, for example, "Create a document called Maize Sales that says Sold 3 sacks of maize, and save it."';
  return { goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false };
}

const AUTOMATION_START = 'You have no automations connected yet. Say "open automations" to connect one with the link from Zapier, Make, n8n or IFTTT.';
async function automationPlan(records, command, catalog) {
  if (!records?.list) return null;
  const goal = String(command.text || "").trim();
  const trigger = automationCommands.parseTrigger(goal);
  const listing = !trigger && automationCommands.isList(goal);
  if (!trigger && !listing) return null;
  const say = response => ({ goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
  let rows = null;
  try { rows = await records.list({ tenantId: command.tenantId, ownerId: command.actorId, workspaceId: automationWorkspace, recordType: automationRecordType, limit: 50 }); } catch { return null; }
  if (!Array.isArray(rows)) return null;
  const names = rows.map(row => row.data?.name).filter(Boolean);
  if (listing) {
    return say(names.length ? `You have ${names.length} automation${names.length === 1 ? "" : "s"}: ${names.join("; ")}. Say "send" and your words, then "to my" and the name, then "automation", to use one.` : AUTOMATION_START);
  }
  const found = rows.find(row => automationSameName(row.data?.name, trigger.connection));
  if (!found) return say(`I could not find an automation called ${trigger.connection}, so nothing was sent. ${names.length ? `You have: ${names.join("; ")}.` : AUTOMATION_START}`);
  if (!catalog?.tools?.some(tool => tool.toolId === "automations.trigger") || !catalog.applications?.some(app => app.applicationId === "communications")) return null;
  return { goal, application: "communications", riskTier: "regulated", clarification: null,
    steps: [{ clientStepId: "send-automation", title: `Send to ${found.data.name}`, toolId: "automations.trigger", input: { connection: found.data.name, text: trigger.text }, dependsOn: [], fallbackToolIds: [] }] };
}

async function exportLatestDocumentPlan(documents, { text, format, tenantId, ownerId }) {
  const goal = String(text || "").trim();
  const say = response => ({ goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
  let latest = null;
  try { latest = (await documents.list({ tenantId, ownerId, limit: 1 }))[0] || null; } catch { return null; }
  if (!latest) return say('You have no saved document yet. Say, for example, "Create a document called Maize Sales that says Sold 3 sacks of maize, and save it."');
  const source = typeof documents.getSource === "function" ? await documents.getSource({ tenantId, ownerId, documentId: latest.document_id }).catch(() => null) : null;
  if (!source?.sourceText) return say(`I cannot convert "${latest.title}" because it was saved before I kept its text. Create it again with "Create a document called ${latest.title} that says ...", and then I can export it.`);
  return { goal, application: "documents", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "export-document", title: `Export "${latest.title}" as ${format}`, toolId: "documents.create",
      input: { title: latest.title, content: source.sourceText, format, reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }] };
}

// What the document screen's Save changes button says: "Save changes to document doc_a1b2c3: the new words". The document is named by its own id, so the right one gets the new version.
const DOCUMENT_SAVE_CHANGES = /^\s*save changes to document (doc_[a-z0-9_-]{4,60})\s*:\s*([\s\S]+?)\s*$/i;
function documentSaveChangesPlan(text, catalog) {
  const goal = String(text || "");
  const match = DOCUMENT_SAVE_CHANGES.exec(goal);
  if (!match || !match[2].trim()) return null;
  if (!catalog?.tools?.some(tool => tool.toolId === "documents.create") || !catalog.applications?.some(app => app.applicationId === "documents")) return null;
  return { goal: goal.slice(0, 200), application: "documents", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "save-document-changes", title: "Save changes to the document", toolId: "documents.create",
      input: { documentId: match[1], content: match[2].slice(0, 20000), reopenAfterSave: true }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeDocumentPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(create|write|draft|make)\b/i.test(goal) || !/\b(document|plan|report|resume|résumé)\b/i.test(goal) ||
      !/\b(save|reopen|open again|persist)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "documents.create") ||
      !catalog.applications.some(app => app.applicationId === "documents")) return null;
  const namedTitle = goal.match(/(?:called|titled|named)\s+["']?(.+?)(?=["']?(?:,|:|\s+then\b|\s+and\s+(?:save|open|reopen)\b|\s+(?:that|which)\s+(?:says|reads)\b|\s+saying\b|\s+containing\b|\s+with the (?:text|words|content)\b|\.|$))/i)?.[1]?.trim();
  const format = requestedDocumentFormat(goal);
  // Found live: this fast path (unlike the LLM planning path, and unlike
  // nexusOpenAiNativeExtractExportArgs's own 4000-char sanitizePilotText cap)
  // put the ENTIRE raw command straight into documents.create's content with
  // no length limit at all -- a multi-megabyte command (well within the
  // request body's own 20MB cap) reaches exportProvider's synchronous
  // PDF/DOCX rendering with no row/length cap of its own, tying up the
  // single Node event loop for the whole process. Matches the same 4000-char
  // ceiling already used for free-text document content elsewhere.
  // "Create a document called Farm Plan that says: I will plant maize in March, and save it": the document holds what it should say, not the
  // whole spoken request. With no body named, the sentence is kept as before.
  const body = goal.match(/\b(?:that says|which says|saying|that reads|containing|with the (?:text|words|content))\s*[:,]?\s+(.+?)(?:[,.]?\s+(?:and|then)\s+(?:save|open|reopen|persist)\b.*)?$/i)?.[1]?.trim().replace(/^["']|["']$/g, "");
  // "Make me a report about maize prices and save it" names a subject but not what the report says. Saving the request sentence and calling it a report would be a document
  // with nothing in it, so Kyro asks what it should say instead. A request with no subject ("Create and save a farming plan document") is kept as before.
  if (!(body && body.length >= 2) && !namedTitle && /\b(?:about|regarding|covering|concerning)\s+\S/i.test(goal)) {
    return { goal, application: "documents", riskTier: "low", steps: [],
      clarification: "I can save a document, but I do not write it for you: saving that would only copy your request into it. What should it say? For example: \"Create a document called Maize Prices that says the prices I noted this week, and save it\"." };
  }
  const content = body && body.length >= 2 ? body.slice(0, 4000) : (goal.length > 4000 ? goal.slice(0, 4000) : goal);
  return { goal, application: "documents", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "create-document", title: "Create, save, and verify document",
      toolId: "documents.create", input: { title: namedTitle || "Nexus document", content, reopenAfterSave: true, ...(format ? { format } : {}) },
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
// What the checklist screen's own buttons say (the id is the list's own, so the right list is changed whatever the titles are): "Add to checklist rec_a1b2c3: milk", "Mark item 2 done on checklist rec_a1b2c3",
// "Remove item 2 from checklist rec_a1b2c3". Items are counted from 1, as the screen shows them.
const LIST_ID = "(rec_[a-z0-9_-]{4,60})";
const LIST_ADD_ITEM = new RegExp(`^\\s*add to checklist ${LIST_ID}\\s*:\\s*(.+?)\\s*$`, "i");
const LIST_TOGGLE_ITEM = new RegExp(`^\\s*mark item (\\d{1,3}) (?:done|not done|done or not done) on checklist ${LIST_ID}\\s*$`, "i");
const LIST_REMOVE_ITEM = new RegExp(`^\\s*remove item (\\d{1,3}) from checklist ${LIST_ID}\\s*$`, "i");
function listUpdatePlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!goal || !catalog?.tools?.some(tool => tool.toolId === "lists.update") || !catalog.applications?.some(app => app.applicationId === "lists")) return null;
  let input = null; let title = "";
  let match = LIST_ADD_ITEM.exec(goal);
  if (match) {
    const items = match[2].split(/\s*[,;]\s*|\s+and\s+/i).map(item => item.trim()).filter(Boolean).slice(0, 20);
    if (!items.length) return null;
    input = { listId: match[1], addItems: items }; title = "Add to a checklist";
  } else if ((match = LIST_TOGGLE_ITEM.exec(goal))) {
    input = { listId: match[2], toggleIndexes: [Number(match[1]) - 1] }; title = "Tick or untick a checklist item";
  } else if ((match = LIST_REMOVE_ITEM.exec(goal))) {
    input = { listId: match[2], removeIndexes: [Number(match[1]) - 1] }; title = "Take an item off a checklist";
  }
  if (!input) return null;
  return { goal, application: "lists", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "update-list", title, toolId: "lists.update", input, dependsOn: [], fallbackToolIds: [] }] };
}

// "Walk me through forming a church", "step by step, how do I get ready for a doctor's visit": a guide's topic with a walkthrough (see knowledge/guide-walkthroughs.js) asked for one step at a time. The person does each step; Kyro never files,
// applies, signs, pays or sends anything for them. The plan carries the walkthrough, which the page shows one step at a time with the official page for the step, and reads out.
function guideWalkthroughPlan(command, askText, label, topic, guardrail, usPerson) {
  if (!topic || !walkthroughAsk(askText)) return null;
  const walk = guideWalkthrough(label, topic);
  // (a walkthrough of United States rules is for a person in the United States; anyone else gets the guide's ordinary answer, which says what is and is not known for their country)
  if (!walk || (walk.us && !usPerson)) return null;
  const intro = `Okay, I will walk you through ${walk.title.charAt(0).toLowerCase()}${walk.title.slice(1)}, one step at a time. There are ${walk.steps.length} steps. I only guide you: you do each step yourself, and I never file, apply, sign, pay or send anything for you.`;
  return Object.freeze({ goal: command.spokenText || command.text, application: "conversation", riskTier: "low", clarification: null, steps: [], response: intro, sourceRequired: false, knowledge: `${label}:walkthrough:${walk.id}`, sources: walk.sources, walkthrough: walk, guardrail, planningAttempts: 0 });
}

// The steps of a California walkthrough as a checklist: the title is the process, the items are the steps (each one the person ticks off when they have done it).
function walkthroughChecklistPlan(text, catalog) {
  const ask = checklistAsk(text);
  if (!ask) return null;
  // (the process is found the way a request to be walked through it is: a California one first, then the United States guide's)
  const asked = `Walk me through ${ask.rest}`;
  const topic = californiaTopic(asked);
  const usTopic = topic ? null : usWalkTopic(asked);
  const walk = topic ? (californiaWalkthrough(topic) || guideWalkthroughForText(asked)) : usTopic ? usWalkthrough(usTopic) : (guideWalkthroughForText(asked) || moneyWalkthroughFor(asked) || athleteWalkthroughFor(asked) || guideWalkthroughForText(asked, { late: true }));
  if (!walk) return null;
  if (!catalog.tools.some(tool => tool.toolId === "lists.create") || !catalog.applications.some(app => app.applicationId === "lists")) return null;
  return { goal: String(text || "").trim(), application: "lists", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "create-list", title: "Create a checklist of the steps", toolId: "lists.create", input: { title: walk.title.slice(0, 120), items: walk.steps.map(step => step.title), command: String(text || "").trim() }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeListsPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(list|checklist)\b/i.test(goal)) return null;
  if (!/\b(create|make|start|save)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "lists.create") ||
      !catalog.applications.some(app => app.applicationId === "lists")) return null;
  const namedTitle = goal.match(/(?:called|titled|named|for)\s+["']?(.+?)(?=["']?(?:,|\s+with\b|\s+including\b|\.|$))/i)?.[1]?.trim();
  const itemsClause = goal.match(/\b(?:with|including)\s+(?:items?\s*[:]?\s*)?(.+?)(?:\.|$)/i)?.[1];
  const items = itemsClause ? itemsClause.split(/,|\band\b/i).map(item => item.trim()).filter(Boolean) : [];
  // "Make me a checklist of what to bring to a clinic visit": no name and nothing on it. An empty list called "Nexus checklist" was made (found by the spoken-document probe on 27 October 2026); Kyro does not write the items for the person, so it asks.
  if (!namedTitle && !items.length) return { goal, application: "lists", riskTier: "low", steps: [], clarification: "I can make that list, but I need to know what goes on it, because I do not make up the items. For example: \"Create a checklist called Clinic Visit with items ID, insurance card and medicines\". What should it be called, and what should be on it?" };
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
// A number said the way people say it at home ("0712 345 678", "08031234567") becomes +254... / +234... before the request is read, so the person is shown the full number to confirm.
function localNumbersToInternational(goal, where = {}) {
  if (/\+\d/.test(goal)) return goal;
  return goal.replace(/(?<![\d+])\d[\d\s().-]{6,16}\d(?![\d])/g, run => localPhoneToE164(run, where)?.phone || run);
}
const SEND_PHONE = /\+\d[\d\s().-]{6,18}\d/;
const SEND_EMAIL = /[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+/;

function sendMessagePlan(text, catalog, where = {}) {
  const goal = localNumbersToInternational(String(text || "").trim(), where);
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
// A number-shaped run of digits with no leading "+" (e.g. a local "0712345678", never typed with a
// country code by someone used to dialing it at home) -- distinct from no digits at all ("call me a
// taxi", "call it a day"), which must stay untouched below.
const PHONE_LIKE = /\b\d[\d\s().-]{6,18}\d\b/;

function callPlan(text, catalog, where = {}) {
  const goal = localNumbersToInternational(String(text || "").trim(), where);
  if (!CALL_OPENER.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "communications.send") ||
      !catalog.applications.some(app => app.applicationId === "communications")) return null;
  const phone = SEND_PHONE.exec(goal)?.[0];
  const base = { goal, application: "communications", riskTier: "regulated" };
  // Found live: a number was required to start with "+" to be recognized at all here -- a local-format
  // number with no country code (overwhelmingly the natural way someone dials their own country's numbers)
  // fell all the way through to the free-form AI planner with no guidance, even though sendMessagePlan
  // already asks for the country code in this exact situation for a text/WhatsApp/email send.
  if (!phone) return PHONE_LIKE.test(goal)
    ? { ...base, clarification: "I need the full phone number with the country code to place a call, like +254712345678.", steps: [] }
    : null;
  const clause = CALL_MESSAGE_CLAUSE.exec(goal.slice(goal.indexOf(phone) + phone.length));
  const words = clause?.[1]?.replace(/\s+/g, " ").replace(/^that\s+/i, "").trim();
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
  // Broadened from a narrow "lesson|literacy|learning" + explicit "save/progress"
  // match: real requests like "help this youth learn to read" or "give my
  // student a lesson" have no save/progress verb at all and were falling
  // through to the free AI-planner guess. saveProgress: true is still set
  // regardless of the words actually spoken -- the "learning" application's
  // real completion contract (nexus/apps/capability-completion-contracts.js)
  // requires it on the executor's output, not on the user's own phrasing.
  if (/\b(create|make|prepare|help|teach|give|start|tutor)\b/i.test(goal) &&
      /\b(lesson|literacy|learning|education|youth|student|homework|study|tutor(?:ing)?|curriculum)\b/i.test(goal))
    return plan("learning", "knowledge.search", "Create and save governed learning content",
      { query: goal, lesson: goal, content: goal, saveProgress: true });
  // Found live: "Find me a job in construction," "Search for jobs near me,"
  // and "Show me available work" all lack a select/listing/sources word and
  // fell through to the free-form AI planner instead of this deterministic
  // fast path. Widened with the natural ways a real job search is actually
  // phrased (a field/location, "near me," "available," "hiring").
  if (/\b(find|search|show|looking for|apply for)\b/i.test(goal) && /\b(jobs?|work|opportunities)\b/i.test(goal) && /\b(select|listing|sources?|near me|available|openings?|hiring|in\s+\w+|for\s+\w+)\b/i.test(goal))
    return plan("workforce", "jobs.search", "Find governed workforce listings", { query: goal, selectListing: true });
  if (/\b(show|map|route|directions?|get|take|travel)\b/i.test(goal) && /\bfrom\b/i.test(goal) && /\bto\b/i.test(goal)) {
    // "...to Nakuru via Naivasha", "...through Naivasha and Gilgil", "...stopping at Nakuru and Kericho": the places named after the stopping words are the stops, in order, not part of the destination
    // (the spoken route has always read them; typed, "Nakuru via Naivasha" was looked up as one place and nothing came back).
    const viaClause = /[,\s]+(?:via|through|by way of|passing through|stopping (?:at|by|in)|with (?:a )?stops? (?:at|in))\s+(.+?)(?:\s+(?:by|at|before)\s+\d.*)?[.!?\s]*$/i.exec(goal);
    const stops = viaClause ? viaClause[1].split(/\s*,\s*(?:and\s+)?|\s+and\s+/i).map(item => item.trim()).filter(Boolean).slice(0, 8) : [];
    const endpoints = (viaClause ? goal.slice(0, viaClause.index) : goal).match(/\bfrom\s+(.+?)\s+to\s+(.+?)(?:\s+with\b|[,.]|$)/i);
    return plan("maps", "maps.view", "Render governed route", { origin: endpoints?.[1]?.trim() || "Nairobi",
      destination: endpoints?.[2]?.trim() || "Nakuru", ...(stops.length ? { waypoints: stops } : {}), requireRouteGeometry: true });
  }
  // Every phrase parseAssistantReminderTime (nexus/reminders/time-phrase.js) understands must route here.
  // "in 2 minutes" and weekdays used to be missing, so "Remind me to ... in 2 minutes" fell through to the
  // AI planner, whose invented input shape was ignored and which was silently scheduled for tomorrow.
  // ("Wake me up tomorrow at six with a reminder to check the irrigation": "reminder" is not "remind", and "wake me up" is a reminder too; a bare "six" is asked about, not guessed)
  if (/\b(remind|reminder|wake me up)\b/i.test(goal) &&
      hasReminderTimePhrase(goal) &&
      /\b(save|schedule|remind|reminder|wake me up)\b/i.test(goal)) {
    const scheduled = plan("reminders", "reminders.schedule", "Persist governed reminder", { reminder: goal, when: goal });
    // A time that is unclear ("at 6": morning or evening?) is asked about instead of being set at a guess.
    return scheduled && (clarifyReminderTime(goal) || scheduled);
  }
  // "Open the offline queue", "Show my offline work", "What is my sync status": the server's own count of what it has applied from the person's devices (nexus/sync/status-executor.js).
  if (/^\s*(?:(?:nexus|kyro)[,:]?\s+)?(?:please\s+)?(?:open|show|check|see|view|what(?:'s| is) in|what(?:'s| is))\s+(?:me\s+)?(?:(?:the|my|our)\s+)?(?:offline\s+(?:queue|work|changes|sync(?:\s+status)?)|(?:sync|offline)\s+status|queued\s+(?:offline\s+)?(?:work|changes))[.?!\s]*$/i.test(goal))
    return plan("offline-queue", "offline.sync", "Check the offline sync status", { operation: "status", requireServerAcknowledgement: true });
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
// A message to a saved person with nothing between the name and the words: "Text John I am late", "WhatsApp Mama the meeting is at 3", "tell mama I am coming" (said to a
// contact, never a health question), "mtumie Otieno ujumbe kwamba niko njiani", "tuma text kwa Otieno niko njiani". { channel, words, swahili } or null; the caller
// decides where the name ends by looking at who is saved. A number or an email address as the recipient is left to the plain send request.
const FAMILY_WORDS = /^(?:mama|mum|mummy|mom|mother|dad|daddy|baba|father|wife|husband|brother|sister|son|daughter|boss|auntie|aunt|uncle|grandma|grandmother|grandpa|grandfather|bibi|babu|shangazi|mjomba|dada|kaka|rafiki|mke|mume|mwanangu)$/i;
const LOOSE_MESSAGE_REQUEST = [
  [/^(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*(text|sms|whats ?app|e-?mail|message)\s+(?:to\s+)?(.+)$/is, 1, false],
  [/^(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*send\s+(?:an?\s+|the\s+)?(text|sms|whats ?app|e-?mail|message)(?:\s+message)?\s+to\s+(.+)$/is, 1, false],
  [/^(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)*tell\s+(?!me\b|us\b|you\b|them\b|him\b|her\b|everyone\b|people\b|anyone\b)(.+)$/is, 0, false],
  [/^(?:mwambie|niambie|mwambieni)\s+(.+)$/is, 0, true],
  [/^(?:mtumie|nitumie|mtumieni)\s+(.+)$/is, 0, true],
  [/^tuma\s+(?:text|sms|ujumbe|message)\s+kwa\s+(.+)$/is, 0, true]
];
function parseLooseMessageRequest(text) {
  const t = String(text || "").trim();
  if (!t || /[\d@]/.test(t.split(/\s+/).slice(0, 2).join(" "))) return null;
  for (const [pattern, channelGroup, swahili] of LOOSE_MESSAGE_REQUEST) {
    const m = pattern.exec(t);
    if (!m) continue;
    const verb = channelGroup ? m[channelGroup].toLowerCase().replace(/\s+/g, "") : "text";
    const rest = String(m[channelGroup ? 2 : 1] || "").trim();
    const words = rest.split(/\s+/).filter(Boolean);
    if (words.length < 1 || /^[\d+@]/.test(words[0])) return null;
    return { channel: /whatsapp/.test(verb) ? "whatsapp" : /e-?mail/.test(verb) ? "email" : "sms", words, swahili };
  }
  return null;
}
// "Find jobs near me" searched the web with no place at all and listed jobs in Las Vegas. A job search that names no place is a search in the country on the person's account.
function withJobsPlace(plan, text, country) {
  const place = countryEntry(country)?.name;
  if (!place || !plan?.steps?.length || placeMentionedIn(text)) return plan;
  return { ...plan, steps: plan.steps.map(step => {
    if (step?.toolId !== "jobs.search" || !step.input?.query) return step;
    const query = String(step.input.query).replace(/\b(?:near me|nearby|around here|close to me|in my area)\b/gi, "").replace(/\s+/g, " ").trim();
    return { ...step, input: { ...step.input, query: `${query} in ${place}` } };
  }) };
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
// Weather alerts: "warn me about storms", "turn on weather alerts", "stop weather alerts", "are my weather alerts on?". "Warn me if the tank
// drops below 20 percent" is a farm-log level, not this, so the weather words are required.
const ALERT_SUBJECT = "(?:severe |bad |extreme |dangerous |heavy |strong )?(?:weather|storms?|rain|rains|heat|hot weather|frost|winds?|floods?|flooding|thunderstorms?)";
const ALERT_SETUP = [
  new RegExp(`^(?:please )?(?:turn on|enable|start|switch on|activate|set up) (?:my |the )?(?:severe )?weather (?:alerts?|warnings?)$`),
  new RegExp(`^(?:please )?(?:warn|alert|notify|tell|let) me (?:about|of|when there(?:'s| is| will be)|if there(?:'s| is| will be)|if|when) (?:any |a |an )?${ALERT_SUBJECT}(?:(?:,| and| or) (?:any )?${ALERT_SUBJECT})*(?: is| are)?(?: coming| ahead| forecast| expected)?(?: to me)?$`)
];
const ALERT_STOP = /^(?:please )?(?:(?:turn off|disable|stop|switch off|cancel|end|pause) (?:my |the |all )?(?:severe )?weather (?:alerts?|warnings?)|stop (?:warning|alerting|notifying) me about (?:the )?(?:severe )?(?:weather|storms?))$/;
const ALERT_STATUS = [/^(?:are|do i have) (?:my )?(?:weather )?(?:alerts?|warnings?) (?:on|turned on|set up|enabled|active)$/, /^(?:are|do i have) (?:my )?weather (?:alerts?|warnings?)(?: (?:on|turned on|set up|enabled|active))?$/, /^(?:what|which) weather (?:alerts?|warnings?) do i have$/];
function parseAlertsControl(text) {
  const normalized = String(text || "").toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim();
  if (!normalized || normalized.length > 140) return null;
  if (ALERT_STOP.test(normalized)) return { action: "stop" };
  if (ALERT_STATUS.some(pattern => pattern.test(normalized))) return { action: "status" };
  if (ALERT_SETUP.some(pattern => pattern.test(normalized))) return { action: "enable" };
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

module.exports = Object.freeze({ OpenEndedPlanner, parseAlertsControl, resumePlan, ordinaryConversationPlan, isMemoryRecallQuestion, memoryRecallPlan, isAssistantIntroductionRequest, assistantIntroductionPlan, agricultureAdvicePlan, canonicalizeExplicitApplication, emergencyHealthGuidancePlan, completeHealthRecordPlan,
  completeTelehealthIntakePlan, completeMarketplaceSearchPlan, completeLiveKnowledgePlan,
  completeMobileClinicPlan, completeNearbyPlacesPlan, completeMediaPlaybackPlan, completeMediaExtendedPlan, completeImageSearchPlan, completeVideoSearchPlan, completeLogisticsTrackPlan, completeDocumentPlan, completeSaveConversationPlan, translationRequest, exportLatestDocumentFormat, exportLatestDocumentPlan, completeListsPlan, completeCommunicationPlan, sendMessagePlan, callPlan, personalRecordQuestionPlan, isLightChatRequest, isBriefRequest, parseBriefControl,
  completeRemainingWorkspacePlan, withJobsPlace, documentsListPlan, listUpdatePlan, documentSaveChangesPlan, completeBusinessPlan, completeRemindersManagePlan, validatePlan });
