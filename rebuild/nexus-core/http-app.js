"use strict";

function createNexusCleanHttpHandler({ voiceSessionService, onReceipt = () => {} } = {}) {
  if (!voiceSessionService || typeof voiceSessionService.issue !== "function") {
    throw new Error("A voice session service is required.");
  }
  return async function nexusCleanHttpHandler(request, response) {
    setSecurityHeaders(response);
    const url = new URL(request.url, "http://nexus.local");
    if (request.method === "GET" && url.pathname === "/health") {
      return json(response, 200, {
        ok: true,
        service: "nexus-genesis-clean-voice",
        schema: "nexus.clean.health.v1"
      });
    }
    if (request.method === "POST" && url.pathname === "/api/voice/session") {
      try {
        const issued = await voiceSessionService.issue({
          authorization: request.headers.authorization
        });
        onReceipt(receipt("voice-session.issued", { sessionId: issued.sessionId }));
        return json(response, 201, issued);
      } catch (error) {
        const unauthorized = /Bearer|token|signature|expired|session contract/i.test(error.message);
        onReceipt(receipt("voice-session.failed", {
          code: unauthorized ? "unauthorized" : "provider-failed",
          message: error.message
        }));
        return json(response, unauthorized ? 401 : 502, {
          error: unauthorized ? "unauthorized" : "realtime-unavailable",
          message: unauthorized ? "A valid signed-in Nexus session is required." : "Nexus voice is temporarily unavailable."
        });
      }
    }
    return json(response, 404, { error: "not-found" });
  };
}

function setSecurityHeaders(response) {
  response.setHeader("cache-control", "no-store");
  response.setHeader("content-security-policy", "default-src 'none'");
  response.setHeader("x-content-type-options", "nosniff");
  response.setHeader("referrer-policy", "no-referrer");
}

function json(response, status, value) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.end(JSON.stringify(value));
}

function receipt(type, detail) {
  return Object.freeze({
    schema: "nexus.server.receipt.v1",
    type,
    detail: Object.freeze({ ...detail }),
    at: new Date().toISOString()
  });
}

module.exports = { createNexusCleanHttpHandler };
