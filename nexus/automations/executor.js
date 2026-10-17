"use strict";

// The "automations.trigger" and "automations.list" tools. A connection (a name the person says, and the secret link behind it) is a record on the person's own account; see connection.js for what a link may be.
// Sending is a governed, confirmed action: the planner only ever proposes it, the person hears "I can send this to your automation <name>: <words>" and says yes, and only then does this run (see
// consent/user-confirmable-consents.js, which also caps how many a day). The link never appears in a step, a prompt, a log or an answer: only the name does.
const https = require("node:https");
const dns = require("node:dns");
const { checkLink, assertPublicHost, isPublicAddress, normalizeName, sameName, signBody } = require("./connection.js");

const WORKSPACE_ID = "automations";
const RECORD_TYPE = "automation_connection";
const MAX_TEXT = 1500;
const TIMEOUT_MS = 8000;
const MAX_RESPONSE_BYTES = 4096;

const clip = (value, limit) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, limit);

// A lookup that is used by the connection itself, so the address checked is the address connected to (a name that points somewhere public when checked and somewhere private when connected, "DNS rebinding", is refused).
// Node asks a connection's lookup for ALL of the addresses ({ all: true }, from Node 20 on) or for one; the answer must have the shape that was asked for. (Answering one address when a list was asked for failed every send with
// ERR_INVALID_IP_ADDRESS: found by the first real send to a real outside service, which the stubbed tests could not catch.)
function guardedLookup(hostname, options, callback) {
  const done = typeof options === "function" ? options : callback;
  const wantsAll = Boolean(options && typeof options === "object" && options.all === true);
  dns.lookup(hostname, { all: true, verbatim: true }, (error, addresses) => {
    if (error) return done(error);
    const list = (addresses || []).filter(item => item?.address);
    if (!list.length || !list.every(item => isPublicAddress(item.address))) return done(Object.assign(new Error("private address"), { code: "EKYROPRIVATE" }));
    if (wantsAll) return done(null, list.map(item => ({ address: item.address, family: item.family })));
    return done(null, list[0].address, list[0].family);
  });
}

// One POST of JSON over https. Never follows a redirect, never reads more than a few KB of the answer, gives up after a few seconds.
function postJson({ url, body, headers }, { lookup = guardedLookup, timeoutMs = TIMEOUT_MS } = {}) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    const request = https.request({ method: "POST", hostname: target.hostname, port: 443, path: `${target.pathname}${target.search}`, lookup, timeout: timeoutMs, headers: { ...headers, "content-length": Buffer.byteLength(body) } }, response => {
      let size = 0;
      response.on("data", chunk => { size += chunk.length; if (size > MAX_RESPONSE_BYTES) response.destroy(); });
      response.on("end", () => resolve({ status: response.statusCode }));
      response.on("close", () => resolve({ status: response.statusCode }));
      response.on("error", () => resolve({ status: response.statusCode }));
    });
    request.on("timeout", () => request.destroy(Object.assign(new Error("timeout"), { code: "ETIMEDOUT" })));
    request.on("error", reject);
    request.end(body);
  });
}

// Extra fields a step may carry, kept only when they are a plain object that stays small.
function smallObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const text = JSON.stringify(value);
  return text.length <= 4000 ? JSON.parse(text) : {};
}

async function findConnection(records, context, name) {
  const rows = await records.list({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: 50 });
  return rows.find(row => sameName(row.data?.name, name)) || null;
}

function summary(row) {
  return { name: row.data?.name || "", host: row.data?.host || "", createdAt: row.created_at, lastSentAt: row.data?.lastSentAt || null, lastStatus: row.data?.lastStatus ?? null };
}

function createAutomationsListExecutor({ records }) {
  if (!records?.list) throw new Error("A record repository is required.");
  return async function execute({ context }) {
    const rows = await records.list({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: 50 });
    return { found: rows.length > 0, automations: rows.map(summary) };
  };
}
function verifyAutomationsListOutcome({ result }) {
  const ok = Array.isArray(result?.automations) && typeof result?.found === "boolean";
  return { verified: ok, method: "real_record_lookup", reason: ok ? null : "automation_list_incomplete" };
}

function createAutomationTriggerExecutor({ records, transport = postJson, now = () => new Date() } = {}) {
  if (!records?.list || !records?.update) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context }) {
    if (context?.isRestrictedFrom?.("communications-send")) {
      throw Object.assign(new Error("This account type cannot send to outside tools."), { code: "automation_restricted", status: 403 });
    }
    const name = normalizeName(input.connection || input.name);
    const text = clip(input.text || input.message, MAX_TEXT);
    if (!name || !text) throw Object.assign(new Error("I need the name of the automation and what to send."), { code: "automation_incomplete", status: 422 });
    const row = await findConnection(records, context, name);
    if (!row) throw Object.assign(new Error(`I could not find an automation called ${name}, so nothing was sent. Say "show my automations" to hear yours.`), { code: "automation_not_found", status: 404 });
    // The link is checked again now, not trusted from when it was saved.
    const link = checkLink(row.data?.url);
    if (!link.ok) throw Object.assign(new Error(`The link for ${row.data.name} cannot be used (${link.message}), so nothing was sent.`), { code: "automation_blocked", status: 422 });
    const sentAt = now().toISOString();
    const body = JSON.stringify({ source: "kyro", event: "kyro.message", connection: row.data.name, sentAt, text, data: smallObject(input.data) });
    const headers = { "content-type": "application/json", "user-agent": "Kyro-Automations/1", "x-kyro-event": "kyro.message" };
    if (row.data.secret) headers["x-kyro-signature"] = signBody(row.data.secret, body);
    let status = null; let failure = null;
    try { status = (await transport({ url: link.url, body, headers })).status; } catch (error) {
      failure = error?.code === "EKYROPRIVATE" ? "automation_blocked" : error?.code === "ETIMEDOUT" ? "automation_timeout" : "automation_unreachable";
    }
    // What happened is kept on the connection (no link, no words), so "did it go through?" can be answered later.
    try { await records.update({ tenantId: context.tenantId, recordId: row.record_id, expectedVersion: row.version, actorId: context.userId, data: { ...row.data, lastSentAt: sentAt, lastStatus: failure || status }, provenance: { ...row.provenance, eventType: "automation.sent" } }); } catch { /* the result below still stands */ }
    if (failure === "automation_blocked") throw Object.assign(new Error("That link points to a private address, so nothing was sent."), { code: "automation_blocked", status: 422 });
    if (failure === "automation_timeout") throw Object.assign(new Error(`${row.data.name} did not answer in time, so I cannot say it arrived.`), { code: "automation_timeout", status: 504 });
    if (failure) throw Object.assign(new Error(`I could not reach ${row.data.name}, so nothing was sent.`), { code: "automation_unreachable", status: 502 });
    if (!(status >= 200 && status < 300)) throw Object.assign(new Error(`${row.data.name} answered with an error (${status}), so it did not accept the message.`), { code: "automation_rejected", status: 502 });
    return { sent: true, connection: row.data.name, host: row.data.host, status, sentAt };
  };
}
function verifyAutomationTriggerOutcome({ result }) {
  const ok = result?.sent === true && Number(result?.status) >= 200 && Number(result?.status) < 300 && typeof result?.connection === "string";
  return { verified: ok, method: "real_outside_post", reason: ok ? null : "automation_not_accepted" };
}

module.exports = Object.freeze({ WORKSPACE_ID, RECORD_TYPE, guardedLookup, postJson, findConnection, summary, assertPublicHost,
  createAutomationsListExecutor, verifyAutomationsListOutcome, createAutomationTriggerExecutor, verifyAutomationTriggerOutcome });
