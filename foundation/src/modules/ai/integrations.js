function createAiProvider(config = {}) {
  const ai = config.ai || {};
  if (ai.openaiApiKey) return new OpenAiResponsesProvider({ apiKey: ai.openaiApiKey, model: ai.model });
  return new OfflineAiProvider({ model: ai.model });
}

class OpenAiResponsesProvider {
  constructor({ apiKey, model }) {
    this.apiKey = apiKey;
    this.model = model || "gpt-5.4-mini";
    this.provider = "openai";
  }

  async run({ runType, prompt }) {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        authorization: `Bearer ${this.apiKey}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: this.model,
        input: [
          {
            role: "system",
            content: "You are AgriNexus operational intelligence. Return concise, actionable guidance for trained operators."
          },
          {
            role: "user",
            content: JSON.stringify({ runType, prompt })
          }
        ]
      })
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.error?.message || "OpenAI Responses API request failed.");
    return {
      text: extractResponseText(body),
      provider: this.provider,
      model: this.model,
      metadata: { responseId: body.id, status: body.status }
    };
  }
}

class OfflineAiProvider {
  constructor({ model } = {}) {
    this.model = model || "offline-fallback";
    this.provider = "offline-ai";
  }

  async run({ runType, prompt }) {
    const country = prompt.countryName || prompt.country?.name || "the selected market";
    const topic = {
      "ai.command_center": "Command center",
      "ai.price_guidance": "Price guidance",
      "ai.route_risk": "Route risk",
      "ai.care_plan": "Care plan"
    }[runType] || "AI review";
    return {
      text: `${topic} for ${country}: prioritize high-risk queues, verify current field data, and escalate operator review before autonomous action.`,
      provider: this.provider,
      model: this.model,
      metadata: { fallback: true }
    };
  }
}

function extractResponseText(body) {
  if (body.output_text) return body.output_text;
  const output = Array.isArray(body.output) ? body.output : [];
  return output
    .flatMap(item => Array.isArray(item.content) ? item.content : [])
    .map(content => content.text || "")
    .filter(Boolean)
    .join("\n")
    || "OpenAI returned an empty response.";
}

module.exports = {
  createAiProvider,
  OpenAiResponsesProvider,
  OfflineAiProvider,
  extractResponseText
};
