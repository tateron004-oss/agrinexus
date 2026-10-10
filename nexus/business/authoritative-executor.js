"use strict";

const { createBusinessApi } = require("./api.js");
const voiceDispatch = require("./voice-dispatch.js");
const financeVoice = require("./finance-voice.js");

// Real executor for the authoritative runtime's business.manage/business.query
// canonical tools (see nexus/runtime/create-runtime.js's LOCAL_EXECUTORS and
// nexus/brain/planner.js's completeBusinessPlan fast path). Delegates to the
// same voice-dispatch module the legacy nexus_business_assistant OpenAI-
// native tool (server.js) uses, via createBusinessApi -- the identical REST
// handler the web UI's own Business services page already calls over HTTP,
// just invoked in-process here.
//
// `confirmed: true` is always passed: business.manage's canonical tool
// definition sets confirmationRequired: true, so by the time this executor
// ever runs, the authoritative task engine has already paused at
// awaiting_confirmation and only resumed execution once the user approved --
// there is no separate confirmation step for this module to perform.
function createBusinessExecutor({ repository, access, consents, env }) {
  if (!repository) throw new Error("A business record repository is required.");
  const api = createBusinessApi({ access, consents, agent: null }, { env, repository });
  return async function execute({ input, context }) {
    const businessRequest = ({ method, pathname, body = {} }) => api.handle({ method, pathname, context, body });
    // A request this module does not recognize used to fall through to "create a workspace" and ask "What should I call
    // this business?" ("Show me my farm expenses this month"). Say what it can actually do instead.
    if (!voiceDispatch.classify(String(input?.command || ""))) {
      const error = new Error("I could not tell what to do with that in your business records. I can add a customer or donor, log an expense or income, add a task or appointment, or show your business dashboard.");
      error.code = "business_request_not_understood";
      error.status = 422;
      throw error;
    }
    const result = await voiceDispatch.run({
      command: String(input?.command || ""), args: input?.args || {}, confirmed: true, businessRequest, timeZone: context?.timeZone
    });
    // A read with nothing to read yet ("show my business dashboard" before any workspace exists) is a true answer, not a
    // failure: it said so, and how to start, instead of surfacing as a 422 error.
    if (result.status === "needs-input" && voiceDispatch.isReadIntent(voiceDispatch.classify(String(input?.command || "")))) {
      return { verified: true, response: result.response, summary: result.response, businessRecord: null, businessClients: null, businessDashboard: null };
    }
    if (result.status !== "completed") {
      // The deterministic planner fast path already asks for any required
      // field it can check without a database call before confirmation is
      // ever requested (see completeBusinessPlan's clarification handling),
      // so reaching a non-completed result here means something only
      // resolvable at execution time -- no workspace yet, an unresolvable
      // grant/task/appointment reference, or a missing invoice -- surfaced
      // as a real, honest failure rather than a false "done".
      const error = new Error(result.response || "The business request could not be completed.");
      error.code = "business_action_incomplete";
      error.status = 422;
      throw error;
    }
    return {
      verified: true, response: result.response, summary: result.summary || result.response,
      businessRecord: result.businessRecord || null, businessClients: result.businessClients || null,
      businessDashboard: result.businessDashboard || null
    };
  };
}

// How many business/nonprofit workspaces the person has, read through the same REST handler (and the same access check) the business tools use. Lets the planner say "no workspace yet" before it asks for a yes.
// Resolves to null when the count cannot be told, so a caller never mistakes "unknown" for "none".
function createBusinessWorkspaceCounter({ repository, access, consents, env }) {
  let api = null;
  return async function count(context) {
    api ||= createBusinessApi({ access, consents, agent: null }, { env, repository });
    const listed = await api.handle({ method: "GET", pathname: "/api/nexus/runtime/business/clients", context });
    return Array.isArray(listed?.body?.clients) ? listed.body.clients.length : null;
  };
}

// The spoken path to the business or nonprofit workspace, with no plan, no tool step and no AI model: "how is my nonprofit doing this month", "which grants are due soon", and also the changes an owner makes most --
// "add a bill from the landlord for 800 dollars due the 1st", "mark the electric bill paid". The spoken path (see planner.js, deterministicOnly) can only return a finished answer, so it asks for the whole turn directly.
//
// A READ is answered at once. A CHANGE is never made without a yes, exactly as typed: the first call says what it would do and keeps the request for two minutes; "yes" then makes the change and "no" drops it. When a
// detail is missing ("When is it due?"), the next words are taken as the answer ("the 1st") and joined to the request. Anything that makes a document or needs the screen (a business plan PDF, an invoice PDF, a calendar sync)
// is left to the screen-based path, as is anything that is not about the workspace at all. The pending request lives in this process's memory only: if the server restarts between the question and the yes, the yes is not
// understood and nothing is changed.
// Resolves to the spoken answer, or null when this is not for the workspace.
const SPOKEN_WRITES = new Set(["addLead", "performIntake", "logTransaction", "createInvoice", "addInvoiceItem", "addGrant", "updateGrantStatus", "addTask", "updateTaskStatus", "addAppointment", "markInvoicePaid", "setFollowUp",
  "createWorkspace", "addListing", "updateListingStatus", ...financeVoice.FINANCE_WRITE_INTENTS]);
const PENDING_MS = 2 * 60 * 1000;
const YES = /^(?:(?:ok|okay)[,.]?\s+)?(?:yes|yeah|yep|yup|sure|ok|okay|go ahead|do it|confirm|confirmed|correct|that is right|that's right|please do|yes please|sure thing)(?:[ ,.]+(?:please|go ahead|do it|thanks|thank you))?[ .!]*$/i;
const NO = /^(?:no|nope|cancel|stop|never ?mind|don'?t|do not|forget it|not now|no thanks|no thank you)(?:[ ,.]+(?:thanks|please|cancel it|don'?t))?[ .!]*$/i;

function createBusinessReader({ repository, access, consents, env, now = () => Date.now() }) {
  let api = null;
  const pending = new Map();
  const keyOf = context => `${context?.tenantId || ""}:${context?.userId || ""}`;
  const bridge = context => {
    api ||= createBusinessApi({ access, consents, agent: null }, { env, repository });
    return ({ method, pathname, body = {} }) => api.handle({ method, pathname, context, body });
  };
  const runCommand = (text, context, confirmed) => voiceDispatch.run({ command: text, args: {}, confirmed, businessRequest: bridge(context), timeZone: context?.timeZone });
  const spoken = result => (typeof result?.response === "string" && result.response.trim() ? result.response : null);

  async function handle(text, context) {
    const intent = voiceDispatch.classify(text);
    if (!intent) return null;
    const read = voiceDispatch.isReadIntent(intent);
    if (!read && !SPOKEN_WRITES.has(intent)) return null;
    const result = await runCommand(text, context, false);
    if (!result) return null;
    if (result.status === "needs-confirmation") {
      pending.set(keyOf(context), { command: text, stage: "confirm", at: now() });
      return spoken(result);
    }
    if (result.status === "needs-input") {
      // a missing detail on a change: the next words answer it (not when the whole problem is that there is no workspace)
      if (!read && !(result.missingInformation || []).includes("businessName")) pending.set(keyOf(context), { command: text, stage: "clarify", at: now() });
      return spoken(result);
    }
    return result.status === "completed" ? spoken(result) : null;
  }

  return async function reply({ command, context }) {
    const text = String(command || "").replace(/\s+/g, " ").trim();
    if (!text) return null;
    const key = keyOf(context);
    const waiting = pending.get(key);
    if (waiting) {
      pending.delete(key);
      if (now() - waiting.at <= PENDING_MS) {
        if (YES.test(text)) {
          if (waiting.stage !== "confirm") return null;
          const result = await runCommand(waiting.command, context, true);
          return result?.status === "completed" || result?.status === "needs-input" ? spoken(result) : null;
        }
        if (NO.test(text)) return "Okay, I have not changed anything.";
        // an answer to the question that was asked ("the 1st"): joined to the request, once
        if (waiting.stage === "clarify" && !voiceDispatch.classify(text) && text.split(" ").length <= 12) return handle(`${waiting.command} ${text}`, context);
      }
    }
    return handle(text, context);
  };
}

function verifyBusinessOutcome({ result }) {
  const verified = result?.verified === true && typeof result?.response === "string" && result.response.length > 0;
  return { verified, method: "real_business_workspace_write", reason: verified ? null : "business_outcome_incomplete" };
}

module.exports = Object.freeze({ createBusinessExecutor, createBusinessWorkspaceCounter, createBusinessReader, verifyBusinessOutcome });
