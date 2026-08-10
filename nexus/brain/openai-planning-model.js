"use strict";

class OpenAiPlanningModel {
  constructor({ apiKey, model = "gpt-5.4-mini", fetchFn = globalThis.fetch }) {
    if (!apiKey) throw new Error("OPENAI_API_KEY is required for the production planning model.");
    if (typeof fetchFn !== "function") throw new Error("A fetch implementation is required.");
    Object.assign(this, { apiKey, model, fetchFn });
  }

  async plan(request) {
    const response = await this.fetchFn("https://api.openai.com/v1/responses", { method: "POST",
      headers: { authorization: `Bearer ${this.apiKey}`, "content-type": "application/json" },
      body: JSON.stringify({ model: this.model,
        instructions: "Plan the user's open-ended goal using only the supplied application and tool catalog. Use conversation history, the prior task, and verified memories to resolve follow-ups and corrections. Follow the supplied interaction profile across every step: preserve its language, accessibility requirements, names and identifiers, and safety meaning. Use concise plain language when requested. Ask exactly one concise clarification only when essential; a clarification plan may have zero steps. Never claim execution or invent a provider result. Return JSON matching the schema.",
        input: JSON.stringify(request), text: { format: { type: "json_schema", name: "nexus_task_plan", strict: true, schema: PLAN_SCHEMA } } }) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) { const error = new Error(body.error?.message || "Planning provider request failed."); error.code = body.error?.code || "planning_provider_failed"; throw error; }
    const text = body.output_text || (body.output || []).flatMap(item => item.content || []).map(item => item.text || "").join("");
    if (!text) throw new Error("Planning provider returned no structured plan.");
    try { return JSON.parse(text); } catch { const error = new Error("Planning provider returned invalid JSON."); error.code = "planning_response_invalid"; throw error; }
  }
}

const STEP = { type: "object", additionalProperties: false, required: ["id", "title", "toolId", "input", "dependsOn", "fallbackToolIds", "requiredPermission"],
  properties: { id: { type: "string" }, title: { type: "string" }, toolId: { type: ["string", "null"] }, input: { type: "object" },
    dependsOn: { type: "array", items: { type: "string" } }, fallbackToolIds: { type: "array", items: { type: "string" } }, requiredPermission: { type: ["string", "null"] } } };
const PLAN_SCHEMA = Object.freeze({ type: "object", additionalProperties: false,
  required: ["goal", "application", "riskTier", "clarification", "steps"], properties: {
    goal: { type: "string" }, application: { type: "string" }, riskTier: { enum: ["low", "medium", "high", "regulated"] },
    clarification: { type: ["string", "null"] }, steps: { type: "array", items: STEP }
  } });

module.exports = Object.freeze({ OpenAiPlanningModel, PLAN_SCHEMA });
