"use strict";

const assert = require("node:assert/strict");
const http = require("node:http");
const { once } = require("node:events");
const { NexusSessionAuthority } = require("../nexus-core/session-authority");
const { NexusVoiceSessionService } = require("../nexus-core/voice-session-service");
const { NexusOpenAIRealtimeProvider } = require("../nexus-core/openai-provider");
const { createNexusCleanHttpHandler } = require("../nexus-core/http-app");

async function main() {
  const providerRequests = [];
  const provider = new NexusOpenAIRealtimeProvider({
    apiKey: "server-only-key",
    fetchImpl: async (url, options) => {
      providerRequests.push({ url, options });
      return {
        ok: true,
        async json() {
          return {
            value: "ek_http",
            expires_at: 9999999999,
            session: { id: "rt-http-1" }
          };
        }
      };
    }
  });
  const authority = new NexusSessionAuthority({
    secret: "nexus-clean-http-test-secret-0000000001"
  });
  const service = new NexusVoiceSessionService({
    sessionAuthority: authority,
    createRealtimeSession: (input) => provider.createSession(input)
  });
  const evidenceReceipts = new Map();
  const evidenceService = {
    async research({ question, parentReceiptId, userId }) {
      const value = {
        id: "evr_http_1",
        question,
        parentReceiptId,
        userId,
        domain: "government",
        status: "cross-source-verified",
        verified: true,
        claims: [{ text: "Verified finding", citations: ["S1"] }],
        sources: [{ id: "S1", url: "https://knbs.or.ke/" }]
      };
      evidenceReceipts.set(value.id, value);
      return value;
    },
    getReceipt(id) {
      return evidenceReceipts.get(id) || null;
    }
  };
  const receipts = [];
  const server = http.createServer(createNexusCleanHttpHandler({
    voiceSessionService: service,
    evidenceService,
    sessionAuthority: authority,
    onReceipt: (value) => receipts.push(value)
  }));
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const baseUrl = `http://127.0.0.1:${server.address().port}`;

  try {
    const health = await fetch(`${baseUrl}/health`);
    assert.equal(health.status, 200);
    assert.equal((await health.json()).service, "nexus-genesis-clean-voice");
    assert.equal(health.headers.get("cache-control"), "no-store");

    const denied = await fetch(`${baseUrl}/api/voice/session`, { method: "POST" });
    assert.equal(denied.status, 401);
    assert.equal((await denied.json()).error, "unauthorized");
    assert.equal(providerRequests.length, 0);

    const issued = authority.issue({ userId: "ron" });
    const response = await fetch(`${baseUrl}/api/voice/session`, {
      method: "POST",
      headers: { authorization: `Bearer ${issued.token}` }
    });
    assert.equal(response.status, 201);
    const body = await response.json();
    assert.equal(body.sessionId, "rt-http-1");
    assert.equal(body.clientSecret, "ek_http");
    assert.equal(providerRequests.length, 1);
    assert.equal(providerRequests[0].url, "https://api.openai.com/v1/realtime/client_secrets");
    assert.equal(providerRequests[0].options.headers.authorization, "Bearer server-only-key");
    assert.ok(!JSON.stringify(body).includes("server-only-key"));
    const providerBody = JSON.parse(providerRequests[0].options.body);
    assert.equal(providerBody.session.type, "realtime");
    assert.equal(providerBody.session.model, "gpt-realtime");
    assert.ok(receipts.some((value) => value.type === "voice-session.issued"));

    const deniedEvidence = await fetch(`${baseUrl}/api/evidence/research`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: "What is Kenya's government status?" })
    });
    assert.equal(deniedEvidence.status, 401);

    const evidenceResponse = await fetch(`${baseUrl}/api/evidence/research`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${issued.token}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({ question: "What is Kenya's government status?" })
    });
    assert.equal(evidenceResponse.status, 201);
    const evidence = await evidenceResponse.json();
    assert.equal(evidence.id, "evr_http_1");
    assert.equal(evidence.status, "cross-source-verified");
    assert.ok(receipts.some((value) => value.type === "evidence.research-completed"));

    const receiptResponse = await fetch(`${baseUrl}/api/evidence/receipts/${evidence.id}`, {
      headers: { authorization: `Bearer ${issued.token}` }
    });
    assert.equal(receiptResponse.status, 200);
    assert.equal((await receiptResponse.json()).question, "What is Kenya's government status?");

    console.log("Nexus clean HTTP session end-to-end: PASS");
  } finally {
    server.close();
    await once(server, "close");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
