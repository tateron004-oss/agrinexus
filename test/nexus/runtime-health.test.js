"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { checkRuntimeHealth } = require("../../nexus/runtime/health.js");

test("optional provider absence is isolated from authoritative core health", async () => {
  const db = { query: async () => ({ rows: [{ database: "nexus", version_num: 170000, pgvector: true, migrated: true }] }),
    transaction: async work => work({ query: async (sql, params) => sql.startsWith("select marker")
      ? { rows: [{ marker: params[0] }] } : { rows: [] } }) };
  const health = await checkRuntimeHealth({ db, access: { authorize() {} }, acceptance: { report() {} },
    providers: { definitions: [] }, behavior: null }, { env: { RENDER_GIT_COMMIT: "a".repeat(40) } });
  assert.equal(health.ok, true);
  assert.equal(health.providersConfigured, false);
  assert.equal(health.components.providers, false);
  assert.equal(health.browserBundleCompatible, false);
});

// Confirmed live 2026-09-22 (the capability audit): every provider row reported "configured": true on production
// regardless of any credential -- checkRuntimeHealth used to stamp that literal onto every definition. These pin the
// per-tool truth the fix now reports.
function dbOk() {
  return { query: async () => ({ rows: [{ database: "nexus", version_num: 170000, pgvector: true, migrated: true }] }),
    transaction: async work => work({ query: async (sql, params = []) => sql.startsWith("select marker") ? { rows: [{ marker: params[0] }] } : { rows: [] } }) };
}
const runtimeWith = definitions => ({ db: dbOk(), access: { authorize() {} }, acceptance: { report() {} }, providers: { definitions } });
const byId = (health, toolId) => health.providers.find(item => item.toolId === toolId);

test("media.play is honestly reported as not configured -- it has no real backend regardless of any env var", async () => {
  const health = await checkRuntimeHealth(runtimeWith([{ toolId: "media.play", domain: "media" }]),
    { env: { TAVILY_API_KEY: "x", OPENAI_API_KEY: "x", TWILIO_ACCOUNT_SID: "x", TWILIO_AUTH_TOKEN: "x" } });
  assert.equal(byId(health, "media.play").configured, false);
  assert.match(byId(health, "media.play").reason, /no real media backend/);
});

test("health.emergency-guidance is reported configured with a note that it is static by design, not a live lookup", async () => {
  const health = await checkRuntimeHealth(runtimeWith([{ toolId: "health.emergency-guidance", domain: "health" }]), { env: {} });
  const row = byId(health, "health.emergency-guidance");
  assert.equal(row.configured, true); assert.match(row.reason, /static/);
});

test("the Tavily-backed search tools report unconfigured with no TAVILY_API_KEY, except knowledge.search which also accepts an OpenAI fallback", async () => {
  const definitions = [{ toolId: "knowledge.search", domain: "knowledge" }, { toolId: "images.search", domain: "images" }, { toolId: "jobs.search", domain: "jobs" }, { toolId: "marketplace.search", domain: "trade" }];
  const none = await checkRuntimeHealth(runtimeWith(definitions), { env: {} });
  for (const toolId of ["knowledge.search", "images.search", "jobs.search", "marketplace.search"]) { assert.equal(byId(none, toolId).configured, false, toolId); assert.match(byId(none, toolId).reason, /TAVILY_API_KEY/); }
  const tavilyOnly = await checkRuntimeHealth(runtimeWith(definitions), { env: { TAVILY_API_KEY: "x" } });
  for (const toolId of ["knowledge.search", "images.search", "jobs.search", "marketplace.search"]) assert.equal(byId(tavilyOnly, toolId).configured, true, toolId);
  const openAiOnly = await checkRuntimeHealth(runtimeWith(definitions), { env: { OPENAI_API_KEY: "x" } });
  assert.equal(byId(openAiOnly, "knowledge.search").configured, true, "knowledge.search has a real OpenAI fallback");
  assert.equal(byId(openAiOnly, "images.search").configured, false, "images.search has no OpenAI fallback");
});

test("communications.send is configured if EITHER a real Twilio channel or real email is set up, and unconfigured with neither", async () => {
  const def = [{ toolId: "communications.send", domain: "communications" }];
  const neither = await checkRuntimeHealth(runtimeWith(def), { env: {} });
  assert.equal(byId(neither, "communications.send").configured, false);
  assert.match(byId(neither, "communications.send").reason, /Twilio.*email|email.*Twilio/);
  const smsOnly = await checkRuntimeHealth(runtimeWith(def), { env: { TWILIO_ACCOUNT_SID: "AC1", TWILIO_AUTH_TOKEN: "tok", TWILIO_FROM_NUMBER: "+15551234567", NEXUS_MESSAGES_ENABLED: "true" } });
  assert.equal(byId(smsOnly, "communications.send").configured, true);
  const emailOnly = await checkRuntimeHealth(runtimeWith(def), { env: { RESEND_API_KEY: "re_x", NEXUS_EMAIL_FROM: "kyro@example.com", NEXUS_EMAIL_ENABLED: "true" } });
  assert.equal(byId(emailOnly, "communications.send").configured, true);
});

test("a tool with no external credential requirement (real DB-backed executor) is reported configured with no caveat", async () => {
  const health = await checkRuntimeHealth(runtimeWith([{ toolId: "reminders.schedule", domain: "reminders" }]), { env: {} });
  assert.deepEqual(byId(health, "reminders.schedule"), { toolId: "reminders.schedule", domain: "reminders", configured: true });
});

test("runtime health proves a transactional write and readback", async () => {
  const statements = []; const db = {
    query: async () => ({ rows: [{ database: "nexus", version_num: 170000, pgvector: true, migrated: true }] }),
    transaction: async work => work({ query: async (sql, params = []) => {
      statements.push(sql); return sql.startsWith("select marker") ? { rows: [{ marker: params[0] }] } : { rows: [] };
    } })
  };
  const health = await checkRuntimeHealth({ db, access: { authorize() {} }, acceptance: { report() {} }, providers: { definitions: [] } });
  assert.equal(health.databaseReadWrite, true);
  assert.equal(statements.some(sql => sql.startsWith("insert into nexus_health_write_probe")), true);
  assert.equal(statements.some(sql => sql.startsWith("select marker from nexus_health_write_probe")), true);
});
