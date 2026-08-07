const crypto = require("node:crypto");

const PREFIXES = Object.freeze({
  command: "cmd", conversation: "cnv", message: "msg", event: "evt", task: "tsk",
  step: "stp", attempt: "atm", job: "job", toolCall: "tlc", receipt: "rcp",
  artifact: "art", document: "doc", version: "ver", consent: "cns", memory: "mem",
  notification: "ntf", sync: "syn", webhook: "whk", modelVersion: "mdl",
  prediction: "prd", evidence: "evd", verification: "vfy"
  , record: "rec", recordVersion: "rvn", workspaceMigration: "wsm", deletionRequest: "del", backupEvidence: "bkp"
});

function createId(kind) {
  const prefix = PREFIXES[kind];
  if (!prefix) throw new Error(`Unknown Nexus identifier kind: ${kind}`);
  return `${prefix}_${crypto.randomUUID()}`;
}

function assertId(kind, value) {
  const prefix = PREFIXES[kind];
  if (!prefix || typeof value !== "string" || !value.startsWith(`${prefix}_`)) {
    throw new Error(`Invalid Nexus ${kind} identifier.`);
  }
  return value;
}

module.exports = Object.freeze({ PREFIXES, createId, assertId });
