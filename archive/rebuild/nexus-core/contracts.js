"use strict";

const CONNECTION_STATES = Object.freeze([
  "idle",
  "requesting-microphone",
  "microphone-ready",
  "requesting-session",
  "connecting",
  "connected",
  "recovering",
  "closed",
  "failed"
]);

const ALLOWED_TRANSITIONS = Object.freeze({
  idle: ["requesting-microphone", "closed"],
  "requesting-microphone": ["microphone-ready", "failed", "closed"],
  "microphone-ready": ["requesting-session", "failed", "closed"],
  "requesting-session": ["connecting", "failed", "closed"],
  connecting: ["connected", "recovering", "failed", "closed"],
  connected: ["recovering", "failed", "closed"],
  recovering: ["requesting-session", "failed", "closed"],
  failed: ["requesting-microphone", "closed"],
  closed: ["requesting-microphone"]
});

function assertTransition(from, to) {
  if (!CONNECTION_STATES.includes(from) || !CONNECTION_STATES.includes(to)) {
    throw new Error(`Unknown Nexus connection state: ${from} -> ${to}`);
  }
  if (!ALLOWED_TRANSITIONS[from].includes(to)) {
    throw new Error(`Invalid Nexus connection transition: ${from} -> ${to}`);
  }
}

function createReceipt({ sequence, from, to, reason, detail = {}, at = new Date().toISOString() }) {
  return Object.freeze({
    schema: "nexus.connection.receipt.v1",
    sequence,
    from,
    to,
    reason,
    detail: Object.freeze({ ...detail }),
    at
  });
}

module.exports = {
  CONNECTION_STATES,
  ALLOWED_TRANSITIONS,
  assertTransition,
  createReceipt
};
