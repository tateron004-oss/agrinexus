"use strict";

class NexusVoiceSessionService {
  constructor({ sessionAuthority, createRealtimeSession, model = "gpt-realtime" } = {}) {
    if (!sessionAuthority || typeof sessionAuthority.verify !== "function") {
      throw new Error("A Nexus session authority is required.");
    }
    if (typeof createRealtimeSession !== "function") {
      throw new Error("A Realtime session provider is required.");
    }
    this.sessionAuthority = sessionAuthority;
    this.createRealtimeSession = createRealtimeSession;
    this.model = model;
  }

  async issue({ authorization } = {}) {
    const token = readBearerToken(authorization);
    const session = this.sessionAuthority.verify(token);
    const realtime = await this.createRealtimeSession({
      model: this.model,
      userId: session.userId
    });
    const clientSecret = realtime && (
      realtime.value
      || realtime.client_secret?.value
      || realtime.clientSecret
    );
    const sessionId = realtime && (
      realtime.session?.id
      || realtime.id
      || realtime.sessionId
    );
    if (!clientSecret || !sessionId) {
      throw new Error("Realtime provider returned an invalid session.");
    }
    return Object.freeze({
      schema: "nexus.voice.session.v1",
      sessionId,
      clientSecret,
      expiresAt: realtime.expires_at
        || realtime.client_secret?.expires_at
        || realtime.expiresAt
        || null
    });
  }
}

function readBearerToken(value) {
  const match = /^Bearer\s+(.+)$/i.exec(String(value || "").trim());
  if (!match) throw new Error("A Bearer Nexus session token is required.");
  return match[1];
}

module.exports = { NexusVoiceSessionService, readBearerToken };
