"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
const { ArtifactRepository } = require("../../nexus/storage/artifact-repository.js");

// POST /api/nexus/runtime/artifacts stores a file in the shared bucket. It had no permission check (a guest session, which anyone can start, could use it), no limit on the file or its labels, no
// check that an attached task is the caller's, and no allowance per person.

const full = { id: "u1", tenantId: "t1", role: "standard-user", permissions: ["tasks:create", "tasks:read", "tasks:execute", "memory:read", "memory:write"] };
const guest = { id: "g1", tenantId: "t1", role: "standard-user", guest: true, permissions: ["tasks:create", "tasks:read", "tasks:execute", "memory:read", "guest:restricted"] };

function setup({ user = full, body, env = {}, usage = { count: 0, bytes: 0 }, task = null } = {}) {
  const stored = []; const created = [];
  const runtime = {
    engine: { tasks: {} },
    tasks: { get: async () => task },
    objectStorage: { key: ({ filename }) => `k/${filename}`, put: async ({ body: bytes }) => { stored.push(bytes); return { checksum: "abc", sizeBytes: bytes.length }; } },
    artifacts: { usage: async () => usage, create: async item => { created.push(item); return { artifact_id: item.artifactId }; } }
  };
  const adapter = createServerRuntimeAdapter({ env, resolveUser: async () => user, readJson: async () => body, createRuntimeFn: () => runtime });
  const out = {};
  const run = async () => { await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/artifacts"), (_res, status, payload) => { out.status = status; out.body = payload; }); return out; };
  return { run, stored, created };
}
const b64 = text => Buffer.from(text).toString("base64");

test("a signed-in account can store a small file", async () => {
  const { run, stored, created } = setup({ body: { contentBase64: b64("hello"), filename: "a.txt", title: "Note", contentType: "text/plain" } });
  const out = await run();
  assert.equal(out.status, 201);
  assert.equal(stored.length, 1);
  assert.equal(created[0].title, "Note");
});

test("a guest session cannot store files", async () => {
  const { run, stored } = setup({ user: guest, body: { contentBase64: b64("hello") } });
  const out = await run();
  assert.equal(out.status, 403);
  assert.equal(stored.length, 0, "nothing reached the bucket");
});

test("a file over the size limit is refused before it is decoded or stored", async () => {
  const { run, stored } = setup({ env: { NEXUS_ARTIFACT_MAX_BYTES: "1000" }, body: { contentBase64: b64("x".repeat(2000)) } });
  const out = await run();
  assert.equal(out.status, 413);
  assert.equal(out.body.code, "artifact_too_large");
  assert.equal(stored.length, 0);
});

test("missing, empty and non-text content is refused", async () => {
  for (const contentBase64 of [undefined, "", 12345, { a: 1 }]) {
    const out = await setup({ body: { contentBase64 } }).run();
    assert.equal(out.status, 400, JSON.stringify(contentBase64));
  }
});

test("labels that are not text, and a large or non-object metadata, are refused; long labels are cut", async () => {
  for (const extra of [{ title: { a: 1 } }, { kind: 5 }, { filename: ["x"] }, { metadata: "text" }, { metadata: [1] }, { metadata: { big: "x".repeat(9000) } }]) {
    const out = await setup({ body: { contentBase64: b64("hi"), ...extra } }).run();
    assert.equal(out.status, 400, JSON.stringify(extra).slice(0, 40));
  }
  const { run, created } = setup({ body: { contentBase64: b64("hi"), title: "t".repeat(5000), kind: "k".repeat(500) } });
  assert.equal((await run()).status, 201);
  assert.equal(created[0].title.length, 200);
  assert.equal(created[0].kind.length, 60);
});

test("a file cannot be attached to someone else's task, or to one that does not exist", async () => {
  const other = await setup({ body: { contentBase64: b64("hi"), taskId: "tsk_1" }, task: { taskId: "tsk_1", ownerId: "someone-else" } }).run();
  assert.equal(other.status, 404);
  const missing = await setup({ body: { contentBase64: b64("hi"), taskId: "tsk_2" }, task: null }).run();
  assert.equal(missing.status, 404);
  const own = setup({ body: { contentBase64: b64("hi"), taskId: "tsk_3" }, task: { taskId: "tsk_3", ownerId: "u1" } });
  assert.equal((await own.run()).status, 201);
  assert.equal(own.created[0].taskId, "tsk_3");
});

test("each person has a storage allowance, by number of files and by bytes", async () => {
  const byCount = await setup({ env: { NEXUS_ARTIFACT_MAX_PER_PERSON: "3" }, usage: { count: 3, bytes: 10 }, body: { contentBase64: b64("hi") } }).run();
  assert.equal(byCount.status, 413);
  assert.equal(byCount.body.code, "artifact_quota_exceeded");
  const byBytes = await setup({ env: { NEXUS_ARTIFACT_MAX_BYTES_PER_PERSON: "100" }, usage: { count: 1, bytes: 99 }, body: { contentBase64: b64("hi") } }).run();
  assert.equal(byBytes.status, 413);
  const within = await setup({ env: { NEXUS_ARTIFACT_MAX_PER_PERSON: "3" }, usage: { count: 2, bytes: 10 }, body: { contentBase64: b64("hi") } }).run();
  assert.equal(within.status, 201);
});

test("the repository counts only this person's live files in this business", async () => {
  const calls = [];
  const repo = new ArtifactRepository({ query: async (sql, params) => { calls.push({ sql, params }); return { rows: [{ count: 4, bytes: 2048 }] }; } });
  assert.deepEqual(await repo.usage({ tenantId: "t1", ownerId: "u1" }), { count: 4, bytes: 2048 });
  assert.match(calls[0].sql, /tenant_id=\$1 and owner_id=\$2 and deleted_at is null/);
  assert.deepEqual(calls[0].params, ["t1", "u1"]);
});
