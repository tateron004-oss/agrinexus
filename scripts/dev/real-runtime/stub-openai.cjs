// Preload for the in-memory database harness ONLY. Every fetch to an OpenAI host is answered locally and deterministically, so no key and no internet are needed and the DETERMINISTIC front doors
// (bookkeeping, lists, notes, contacts, reminders, health readings, safety) run exactly as in production, before any model. Every call is appended to STUB_LOG.
//  - the planner's structured plan call (json_schema "nexus_task_plan"): a harmless "no steps, clarification: STUBMODEL" plan -- except "remind me ..." (not "every"), which gets the plan a real
//    model would give (the reminders.schedule tool), so that tool's executor and the delivery store behind it are exercised
//  - the planner's tool-less answer call: "STUBMODEL-REPLY"
//  - the older route's AI agent call (the request carries `tools`): a stand-in model that calls the tool the server itself suggested (toolHint) with the person's words, then answers with exactly
//    that tool's own "response" text
//  - STUB_MODEL_FAIL=1 (or the file named by STUB_FAIL_FILE existing) makes EVERY OpenAI call fail like a provider outage (HTTP 503), to show what still works with no model at all
//  - every OTHER call (translation and so on) fails like an unreachable provider, unless STUB_OTHER=reply
// Any request to a host other than OpenAI or this machine is logged as kind "network" (and sent on), so a run can prove that nothing reached, say, a messaging provider.
const fs = require("node:fs");
const realFetch = globalThis.fetch;
const log = process.env.STUB_LOG;
let counter = 0;
const json = (payload, status = 200) => new Response(JSON.stringify(payload), { status, headers: { "content-type": "application/json" } });
const textResponse = text => json({ id: `resp_stub_${++counter}`, object: "response", output_text: text, output: [{ type: "message", content: [{ type: "output_text", text }] }], usage: { input_tokens: 1, output_tokens: 1 } });

globalThis.fetch = async function (input, init) {
  const url = typeof input === "string" ? input : input?.url || String(input);
  if (!/^https:\/\/api\.openai\.com\//.test(url)) {
    if (log && !/^http:\/\/(127\.0\.0\.1|localhost)/.test(url)) fs.appendFileSync(log, `${JSON.stringify({ t: new Date().toISOString(), url: url.slice(0, 120), kind: "network" })}\n`);
    return realFetch.apply(this, arguments);
  }
  let body = {}; try { body = JSON.parse(init?.body || "{}"); } catch { /* not JSON */ }
  // Simulated provider outage: STUB_MODEL_FAIL=1, or the file named by STUB_FAIL_FILE existing (so a run can switch the outage on and off without a restart). Harness only.
  if (process.env.STUB_MODEL_FAIL === "1" || (process.env.STUB_FAIL_FILE && fs.existsSync(process.env.STUB_FAIL_FILE))) {
    if (log) fs.appendFileSync(log, `${JSON.stringify({ t: new Date().toISOString(), url, kind: "outage" })}\n`);
    return json({ error: { message: "stand-in model: simulated provider outage", code: "stand_in_outage" } }, 503);
  }
  const instructions = String(body.instructions || "");
  const structured = Boolean(body.text?.format?.schema) && body.text.format.name === "nexus_task_plan";
  const respond = !structured && /^You are Kyro, the assistant inside AgriNexus/.test(instructions);
  const native = !structured && !respond && Array.isArray(body.tools) && body.tools.length > 0 && !body.previous_response_id;
  const nativeSecond = !structured && !respond && Boolean(body.previous_response_id);
  let goal = ""; try { const parsed = JSON.parse(body.input); goal = parsed.goal || parsed.question || ""; } catch { goal = String(typeof body.input === "string" ? body.input : JSON.stringify(body.input || "")).slice(0, 200); }
  const kind = structured ? "plan" : respond ? "respond" : native ? "native" : nativeSecond ? "native-second" : "other";
  if (log) fs.appendFileSync(log, `${JSON.stringify({ t: new Date().toISOString(), url, kind, goal: goal.slice(0, 200) })}\n`);

  if (native) {
    let user = {}; try { user = JSON.parse((body.input || []).find(item => item.role === "user")?.content || "{}"); } catch { /* not JSON */ }
    return json({ id: `resp_stub_${++counter}`, object: "response", output: [{ type: "function_call", call_id: `call_stub_${counter}`, name: user.toolHint || "nexus_general_conversation", arguments: JSON.stringify({ command: user.command || "" }) }], usage: { input_tokens: 1, output_tokens: 1 } });
  }
  if (nativeSecond) {
    let text = "STUBMODEL-REPLY";
    try { text = String(JSON.parse((body.input || [])[0]?.output || "{}").response || text); } catch { /* keep the marker */ }
    return textResponse(text);
  }
  if (kind === "other" && process.env.STUB_OTHER !== "reply") return json({ error: { message: "stand-in model: provider unavailable", code: "stand_in_unavailable" } }, 503);
  if (structured) {
    let plan = { goal: goal || "stand-in", application: "conversation", riskTier: "low", clarification: "STUBMODEL: I cannot plan that.", steps: [] };
    if (/^\s*remind me\b/i.test(goal) && !/\bevery\b/i.test(goal)) {
      let tool = null; try { tool = (JSON.parse(body.input).catalog?.tools || []).find(item => item.toolId === "reminders.schedule"); } catch { /* no catalog */ }
      if (tool) plan = { goal, application: "reminders", riskTier: "low", clarification: null, steps: [{ id: "s1", title: "Schedule the reminder", toolId: "reminders.schedule", input: JSON.stringify({ reminder: goal, when: goal }), dependsOn: [], fallbackToolIds: [], requiredPermission: tool.requiredPermission || null }] };
    }
    return textResponse(JSON.stringify(plan));
  }
  return textResponse("STUBMODEL-REPLY");
};
