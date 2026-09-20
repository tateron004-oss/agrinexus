"use strict";

const { createBusinessApi } = require("./api.js");
const voiceDispatch = require("./voice-dispatch.js");

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
      command: String(input?.command || ""), args: input?.args || {}, confirmed: true, businessRequest
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

function verifyBusinessOutcome({ result }) {
  const verified = result?.verified === true && typeof result?.response === "string" && result.response.length > 0;
  return { verified, method: "real_business_workspace_write", reason: verified ? null : "business_outcome_incomplete" };
}

module.exports = Object.freeze({ createBusinessExecutor, verifyBusinessOutcome });
