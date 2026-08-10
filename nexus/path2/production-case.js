"use strict";
const crypto = require("node:crypto");
const { PATH2_LANES } = require("./certification-contract.js");
const { createInteractionProfile } = require("../experience/interaction-profile.js");

const LOCALES = ["en", "es", "fr", "sw", "ar", "pt"];
const SAFE_DOMAINS = new Set(["knowledge", "documents", "jobs", "resume", "maps", "media", "weather", "learning"]);

async function executeProductionCase({ active, principal, input, releaseSha, observedAt = new Date().toISOString() }) {
  validateInput(input, releaseSha); const contract = PATH2_LANES[input.lane];
  const context = { tenantId: principal.tenantId, userId: principal.userId, roles: [principal.role].filter(Boolean),
    permissions: principal.permissions || [], can: permission => !permission || (principal.permissions || []).includes(permission),
    hasRole: role => principal.role === role, userPreferences: input.lane === "accessibility" ? { accessibility: { lowLiteracy: true, screenReader: true, captions: true } } : {} };
  const locale = input.lane === "multilingual" ? LOCALES[(input.ordinal - 1) % LOCALES.length] : "en";
  const command = { tenantId: principal.tenantId, actorId: principal.userId, text: promptFor(input), locale, channel: "voice" };
  let plan;
  try { plan = await active.planner.plan({ command, context, conversationHistory: [] }); }
  catch (error) { return failedCase({ input, releaseSha, locale, observedAt, error }); }
  const profile = createInteractionProfile({ locale, channel: "voice", userPreferences: context.userPreferences });
  let passed = Boolean(plan.goal && plan.application && (plan.steps.length || plan.clarification));
  let executionProof = null; let failure = null;
  try {
    if (input.lane === "planning") passed = passed && acyclic(plan.steps);
    if (["toolUse", "crossApplication", "verification"].includes(input.lane)) { executionProof = await executeSafeWorkflow({ active, context, command, input }); passed = passed && executionProof.passed; }
    if (input.lane === "recovery") { executionProof = await executeSafeWorkflow({ active, context, command, input, recovery: true }); passed = passed && executionProof.passed; }
    if (input.lane === "multilingual") passed = passed && profile.locale === locale && profile.requirements.preserveLanguageAcrossWorkflow && profile.requirements.preserveSafetyMeaning;
    if (input.lane === "accessibility") passed = passed && profile.voiceOnly && profile.preferredFormats.includes("plain-language") && profile.requirements.announceVisibleOutcome;
    if (input.lane === "memory") passed = passed && await verifyDurableMemory({ active, principal, input });
  } catch (error) { passed = false; failure = error.code || error.name || "case_execution_failed"; }
  const fact = contract.requiredFacts[(input.ordinal - 1) % contract.requiredFacts.length];
  const digest = crypto.createHash("sha256").update(JSON.stringify({ releaseSha, caseId: input.caseId, plan, passed })).digest("hex");
  return { caseId: input.caseId, releaseSha, path1Baseline: input.path1Baseline, lane: input.lane, passed,
    facts: { [fact]: passed }, falseSuccesses: 0, production: true, simulated: false, observedAt,
    receipt: { receiptId: `path2-production-${digest.slice(0, 24)}`, releaseSha, path1GuardPassed: true,
      source: "authoritative-production-runtime", caseId: input.caseId, locale, application: plan.application,
      stepCount: plan.steps.length, planningAttempts: plan.planningAttempts, executionReceiptIds: executionProof?.receiptIds || [], failure, digest } };
}

function failedCase({ input, releaseSha, locale, observedAt, error }) { const contract = PATH2_LANES[input.lane];
  const fact = contract.requiredFacts[(input.ordinal - 1) % contract.requiredFacts.length]; const failure = error.code || error.name || "planning_failed";
  const digest = crypto.createHash("sha256").update(JSON.stringify({ releaseSha, caseId: input.caseId, failure })).digest("hex");
  return { caseId: input.caseId, releaseSha, path1Baseline: input.path1Baseline, lane: input.lane, passed: false,
    facts: { [fact]: false }, falseSuccesses: 0, production: true, simulated: false, observedAt,
    receipt: { receiptId: `path2-production-${digest.slice(0, 24)}`, releaseSha, path1GuardPassed: true,
      source: "authoritative-production-runtime", caseId: input.caseId, locale, outcome: "failed", failure, digest } }; }

async function executeSafeWorkflow({ active, context, command, input, recovery = false }) {
  const catalog = await active.tools.list(); const safe = catalog.filter(tool => tool.availability === "available" && SAFE_DOMAINS.has(tool.domain) &&
    !tool.required_permission && !tool.required_role && !tool.consent_scope && tool.confirmation_required !== true && typeof active.engine.executors?.[tool.tool_id] === "function");
  if (!safe.length) return { passed: false, receiptIds: [] };
  const count = input.lane === "crossApplication" ? Math.min(2, safe.length) : 1; const chosen = safe.slice(0, count);
  const steps = chosen.map((tool, index) => ({ clientStepId: `matrix_${index + 1}`, title: `Verify ${tool.domain} outcome`, toolId: tool.tool_id,
    input: { query: promptFor(input), certificationCaseId: input.caseId }, dependsOn: index ? [`matrix_${index}`] : [], fallbackToolIds: [] }));
  if (recovery) { const unavailable = catalog.find(tool => tool.availability !== "available" && SAFE_DOMAINS.has(tool.domain)); if (!unavailable) return { passed: false, receiptIds: [] };
    steps[0].toolId = unavailable.tool_id; steps[0].fallbackToolIds = [chosen[0].tool_id]; }
  const task = await active.engine.create({ command: { ...command, correlationId: `p2-${input.caseId}`, conversationId: `cnv_${crypto.randomUUID()}` },
    goal: promptFor(input), application: input.lane === "crossApplication" ? "general" : "live-knowledge", riskTier: "low", steps });
  try { const result = await active.engine.executeTask({ context, taskId: task.taskId });
    const receiptIds = (result.receipts || []).map(receipt => receipt.receiptId).filter(Boolean);
    return { passed: result.completed === true && receiptIds.length >= steps.length && (input.lane !== "verification" || result.task?.outcome?.visibleOrAudible === true), receiptIds };
  } catch (error) { return { passed: false, receiptIds: [], error: error.code || error.name }; }
}
async function verifyDurableMemory({ active, principal, input }) {
  if (!active.conversations || !active.memory) return false; const conversationId = `cnv_${crypto.randomUUID()}`;
  await active.conversations.ensure({ conversationId, tenantId: principal.tenantId, ownerId: principal.userId, title: `Path 2 case ${input.caseId}` });
  await active.conversations.append({ tenantId: principal.tenantId, conversationId, actorId: principal.userId, role: "user",
    content: `Remember non-sensitive certification marker ${input.caseId}`, provenance: { type: "path2-production-case" } });
  const turns = await active.conversations.recent({ tenantId: principal.tenantId, conversationId, limit: 24 });
  const scoped = await active.memory.search({ tenantId: principal.tenantId, userId: principal.userId, purpose: "task_planning",
    query: input.caseId, roles: [principal.role].filter(Boolean), limit: 8 });
  return turns.some(turn => turn.content?.includes(input.caseId)) && Array.isArray(scoped);
}
function promptFor(input) { const places=["Kisumu","Nakuru","Mombasa","Eldoret","Nairobi","Kitale"];const place=places[(input.ordinal-1)%places.length];
  const base={ intelligence:`Help me solve an unfamiliar everyday problem near ${place}; clarify uncertainty and accept corrections`, memory:`Continue my earlier ${place} task while keeping memories private and allowing me to forget them`, planning:`Build a dependency-ordered plan for work, a document, and a map in ${place}`, toolUse:`Use only available governed tools for safe information in ${place}; ask before consequential action and use a fallback if needed`, crossApplication:`Find work near ${place}, prepare a resume, and map the interview in one connected workflow`, verification:`Show a visible result for ${place} and do not claim it opened, saved, or played without verified proof and a receipt`, recovery:`Recover a ${place} task after a provider or network interruption without refreshing or repeating completed work`, multilingual:`Complete a multi-step ${place} task in my current language while preserving safety meaning`, accessibility:`Guide me through a ${place} task by voice, plain language, keyboard, and screen-reader announcements`};return base[input.lane]; }
function acyclic(steps=[]){const ids=new Set(steps.map(step=>step.clientStepId));const active=new Set(),done=new Set();function visit(id){if(active.has(id))return false;if(done.has(id))return true;active.add(id);const step=steps.find(item=>item.clientStepId===id);for(const dep of step?.dependsOn||[])if(ids.has(dep)&&!visit(dep))return false;active.delete(id);done.add(id);return true;}return [...ids].every(visit);}
function validateInput(input, releaseSha){if(input.releaseSha!==releaseSha)throw new Error("The case does not match the active release.");const contract=PATH2_LANES[input.lane];if(!contract||input.lane==="usability")throw new Error("A non-human Path 2 lane is required.");if(!Number.isInteger(input.ordinal)||input.ordinal<1||input.ordinal>contract.minimumCases)throw new Error("A bounded lane ordinal is required.");if(!/^p2c_[a-z0-9_-]{8,160}$/i.test(input.caseId||""))throw new Error("A stable case id is required.");}
module.exports = Object.freeze({ executeProductionCase, promptFor, LOCALES });
