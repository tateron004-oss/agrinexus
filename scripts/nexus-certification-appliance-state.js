"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SCHEMA = "nexus.windows-certification-appliance.v1";
const INFRASTRUCTURE_PATTERNS = [
  /browser.*(closed|crash|launch|timeout)/i,
  /chrome.*(not installed|failed|unavailable)/i,
  /deployment[_ -]not[_ -]ready/i,
  /econn(reset|refused)/i,
  /enotfound/i,
  /identity endpoint returned http 5\d\d/i,
  /microphone.*(busy|not live|unavailable)/i,
  /audio.*(endpoint|device).*(missing|not found|unavailable|unhealthy)/i,
  /healthy microphone and speaker endpoints/i,
  /interactive windows desktop session/i,
  /network.*(timeout|unavailable)/i,
  /speaker.*(busy|unavailable)/i,
  /target page, context or browser has been closed/i
];
const PROVIDER_PATTERNS = [
  /credit_balance_exhausted/i,
  /insufficient_quota/i,
  /provider.*(outage|timeout|unavailable)/i,
  /realtime.*429/i
];

function now() {
  return new Date().toISOString();
}

function canonicalSha(value) {
  const sha = String(value || "").trim().toLowerCase();
  if (!/^[a-f0-9]{7,40}$/.test(sha)) throw new Error("A 7-40 character Git commit SHA is required.");
  return sha;
}

function canonicalHost(value) {
  const url = new URL(String(value || ""));
  if (url.protocol !== "https:") throw new Error("Certification host must use HTTPS.");
  if (url.pathname !== "/" || url.search || url.hash) throw new Error("Certification host must not include a path, query, or fragment.");
  return url.origin;
}

function classifyFailure(message) {
  const text = String(message || "unknown failure");
  if (PROVIDER_PATTERNS.some((pattern) => pattern.test(text))) return "provider";
  if (INFRASTRUCTURE_PATTERNS.some((pattern) => pattern.test(text))) return "infrastructure";
  return "nexus";
}

function atomicWrite(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  fs.renameSync(temporary, file);
}

function readLedger(file) {
  if (!fs.existsSync(file)) return null;
  const ledger = JSON.parse(fs.readFileSync(file, "utf8"));
  if (ledger.schema !== SCHEMA) throw new Error(`Unsupported appliance ledger schema: ${ledger.schema}`);
  return ledger;
}

function initializeLedger({ file, releaseSha, host, requiredPasses = 3 }) {
  releaseSha = canonicalSha(releaseSha);
  host = canonicalHost(host);
  const existing = readLedger(file);
  if (existing && existing.releaseSha === releaseSha && existing.host === host && !existing.certified) return existing;
  const ledger = {
    schema: SCHEMA,
    releaseSha,
    host,
    requiredConsecutivePasses: Number(requiredPasses),
    consecutivePasses: 0,
    certified: false,
    createdAt: now(),
    updatedAt: now(),
    machine: { hostname: os.hostname(), platform: os.platform(), arch: os.arch() },
    attempts: []
  };
  atomicWrite(file, ledger);
  return ledger;
}

function recordAttempt({ file, attempt }) {
  const ledger = readLedger(file);
  if (!ledger) throw new Error("Appliance ledger has not been initialized.");
  const normalized = { ...attempt, recordedAt: attempt.recordedAt || now() };
  if (normalized.releaseSha !== ledger.releaseSha || normalized.host !== ledger.host) {
    throw new Error("Attempt identity does not match the frozen appliance release.");
  }
  ledger.attempts.push(normalized);
  if (normalized.outcome === "passed") ledger.consecutivePasses += 1;
  else if (normalized.classification === "nexus") ledger.consecutivePasses = 0;
  ledger.certified = ledger.consecutivePasses >= ledger.requiredConsecutivePasses;
  ledger.updatedAt = now();
  if (ledger.certified && !ledger.certifiedAt) ledger.certifiedAt = now();
  atomicWrite(file, ledger);
  return ledger;
}

function acquireLock(file, metadata = {}) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  try {
    const descriptor = fs.openSync(file, "wx");
    fs.writeFileSync(descriptor, `${JSON.stringify({ pid: process.pid, acquiredAt: now(), ...metadata }, null, 2)}\n`);
    return () => {
      try { fs.closeSync(descriptor); } catch {}
      try { fs.unlinkSync(file); } catch {}
    };
  } catch (error) {
    if (error.code === "EEXIST") throw new Error(`CERTIFICATION_LOCKED: ${file}`);
    throw error;
  }
}

function commandLine() {
  const [command, ...args] = process.argv.slice(2);
  const values = Object.fromEntries(args.map((entry) => {
    const index = entry.indexOf("=");
    return index === -1 ? [entry, true] : [entry.slice(0, index), entry.slice(index + 1)];
  }));
  if (command === "init") {
    console.log(JSON.stringify(initializeLedger({ file: values.file, releaseSha: values.sha, host: values.host, requiredPasses: values.passes || 3 })));
    return;
  }
  if (command === "classify") {
    console.log(classifyFailure(values.message));
    return;
  }
  if (command === "record") {
    const attempt = JSON.parse(fs.readFileSync(values.attempt, "utf8"));
    console.log(JSON.stringify(recordAttempt({ file: values.file, attempt })));
    return;
  }
  throw new Error("Usage: nexus-certification-appliance-state.js <init|classify|record> key=value...");
}

if (require.main === module) {
  try { commandLine(); } catch (error) { console.error(error.stack || error.message); process.exitCode = 1; }
}

module.exports = {
  SCHEMA,
  acquireLock,
  canonicalHost,
  canonicalSha,
  classifyFailure,
  initializeLedger,
  readLedger,
  recordAttempt
};
