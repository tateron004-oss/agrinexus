"use strict";

class NexusOpenAIRealtimeProvider {
  constructor({
    apiKey,
    fetchImpl = globalThis.fetch,
    baseUrl = "https://api.openai.com/v1",
    voice = "marin"
  } = {}) {
    if (!apiKey) throw new Error("OPENAI_API_KEY is required.");
    if (typeof fetchImpl !== "function") throw new Error("A fetch implementation is required.");
    this.apiKey = apiKey;
    this.fetchImpl = fetchImpl;
    this.baseUrl = baseUrl.replace(/\/$/, "");
    this.voice = voice;
  }

  async createSession({ model = "gpt-realtime" } = {}) {
    const response = await this.fetchImpl(`${this.baseUrl}/realtime/client_secrets`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${this.apiKey}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        session: {
          type: "realtime",
          model,
          audio: { output: { voice: this.voice } }
        }
      })
    });
    if (!response.ok) {
      const detail = await safeText(response);
      throw new Error(`OpenAI Realtime session failed (${response.status}): ${detail || "no response detail"}`);
    }
    return response.json();
  }
}

async function safeText(response) {
  try {
    return String(await response.text()).slice(0, 500);
  } catch {
    return "";
  }
}

module.exports = { NexusOpenAIRealtimeProvider };
