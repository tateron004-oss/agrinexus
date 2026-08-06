"use strict";

function createNexusCleanHttpHandler({ voiceSessionService, evidenceService = null, mapProvider = null, visualDataService = null, sessionAuthority = null, onReceipt = () => {} } = {}) {
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
    if (request.method === "POST" && url.pathname === "/api/evidence/research") {
      if (!evidenceService || !sessionAuthority) {
        return json(response, 503, { error: "evidence-unavailable", message: "Approved evidence retrieval is not configured." });
      }
      try {
        const session = sessionAuthority.verify(readBearer(request.headers.authorization));
        const body = await readJson(request);
        const result = await evidenceService.research({
          question: body.question,
          parentReceiptId: body.parentReceiptId || null,
          userId: session.userId
        });
        onReceipt(receipt("evidence.research-completed", {
          receiptId: result.id,
          status: result.status,
          domain: result.domain
        }));
        return json(response, 201, result);
      } catch (error) {
        const unauthorized = /Bearer|token|signature|expired|session contract/i.test(error.message);
        onReceipt(receipt("evidence.research-failed", { message: error.message }));
        return json(response, unauthorized ? 401 : 422, {
          error: unauthorized ? "unauthorized" : "evidence-research-failed",
          message: unauthorized ? "A valid signed-in Nexus session is required." : error.message
        });
      }
    }
    if (request.method === "POST" && url.pathname === "/api/maps/resolve") {
      if (!mapProvider || !sessionAuthority) {
        return json(response, 503, { error: "maps-unavailable", message: "Live map retrieval is not configured." });
      }
      try {
        sessionAuthority.verify(readBearer(request.headers.authorization));
        const body = await readJson(request);
        const result = await mapProvider(body.parameters && body.parameters.action ? body.parameters : body.command);
        onReceipt(receipt("map.visible-result-ready", { type: result.type, status: result.status }));
        return json(response, 200, result);
      } catch (error) {
        const unauthorized = /Bearer|token|signature|expired|session contract/i.test(error.message);
        return json(response, unauthorized ? 401 : 422, {
          error: unauthorized ? "unauthorized" : "map-resolution-failed",
          message: unauthorized ? "A valid signed-in Nexus session is required." : error.message
        });
      }
    }
    if (request.method === "POST" && ["/api/visual/weather", "/api/visual/images", "/api/visual/content"].includes(url.pathname)) {
      if (!visualDataService || !sessionAuthority) {
        return json(response, 503, { error: "visual-data-unavailable", message: "Live visual data retrieval is not configured." });
      }
      try {
        const session = sessionAuthority.verify(readBearer(request.headers.authorization));
        const body = await readJson(request);
        let result = url.pathname.endsWith("/weather")
          ? await visualDataService.weather(body.command)
          : url.pathname.endsWith("/images")
            ? await visualDataService.images(body.command)
            : await visualDataService.content(body, {
              research: evidenceService
                ? ({ question, parentReceiptId }) => evidenceService.research({ question, parentReceiptId, userId: session.userId })
                : null,
              map: mapProvider ? (command) => mapProvider(command) : null
            });
        if (url.pathname.endsWith("/content")) {
          const requestId = String(body.requestId || "").trim();
          if (!requestId) throw new Error("A request-owned content ID is required.");
          result = { ...result, requestId };
        }
        onReceipt(receipt("visual-data.ready", { status: result.status }));
        return json(response, 200, result);
      } catch (error) {
        const unauthorized = /Bearer|token|signature|expired|session contract/i.test(error.message);
        return json(response, unauthorized ? 401 : 422, {
          error: unauthorized ? "unauthorized" : "visual-data-failed",
          message: unauthorized ? "A valid signed-in Nexus session is required." : error.message
        });
      }
    }
    if (request.method === "GET" && url.pathname.startsWith("/api/evidence/receipts/")) {
      if (!evidenceService || !sessionAuthority) {
        return json(response, 503, { error: "evidence-unavailable" });
      }
      try {
        sessionAuthority.verify(readBearer(request.headers.authorization));
        const id = decodeURIComponent(url.pathname.slice("/api/evidence/receipts/".length));
        const result = evidenceService.getReceipt(id);
        return result ? json(response, 200, result) : json(response, 404, { error: "receipt-not-found" });
      } catch (error) {
        return json(response, 401, { error: "unauthorized", message: "A valid signed-in Nexus session is required." });
      }
    }
    return json(response, 404, { error: "not-found" });
  };
}

function readBearer(value) {
  const match = /^Bearer\s+(.+)$/i.exec(String(value || "").trim());
  if (!match) throw new Error("A Bearer Nexus session token is required.");
  return match[1];
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 64 * 1024) throw new Error("Evidence request is too large.");
  }
  try {
    return JSON.parse(body || "{}");
  } catch {
    throw new Error("Evidence request must contain valid JSON.");
  }
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
