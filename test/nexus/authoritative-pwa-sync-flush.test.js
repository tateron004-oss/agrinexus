"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");

// A minimal, faithful-enough in-memory IndexedDB fake -- just the operations
// nexus-authoritative-pwa-runtime.js actually uses (a single object store,
// put/getAll/delete, transaction completion) -- so the real module can be
// loaded and its real flush() function executed end to end, rather than
// only regex-matched as static source text (which is all the existing
// authoritative-pwa-contract.test.js does, and which is exactly how this
// bug survived undetected).
function fakeIndexedDB() {
  const store = new Map();
  function fireAsync(fn) { queueMicrotask(fn); }
  return {
    open(name, version) {
      const request = { result: null, onupgradeneeded: null, onsuccess: null, onerror: null };
      fireAsync(() => {
        const db = {
          objectStoreNames: { contains: () => true },
          createObjectStore: () => {},
          transaction: (_storeNames, _mode) => {
            const tx = { oncomplete: null, onerror: null };
            const objectStore = {
              put: value => { store.set(value.operationId, value); },
              getAll: () => { const req = { onsuccess: null, onerror: null, result: null }; fireAsync(() => { req.result = [...store.values()]; req.onsuccess?.(); }); return req; },
              delete: id => { store.delete(id); }
            };
            tx.objectStore = () => objectStore;
            fireAsync(() => tx.oncomplete?.());
            return tx;
          }
        };
        request.result = db;
        request.onupgradeneeded?.();
        request.onsuccess?.();
      });
      return request;
    },
    __store: store
  };
}

function loadModule({ fetchImpl, online = true }) {
  const source = fs.readFileSync(path.join(__dirname, "../../public/nexus-authoritative-pwa-runtime.js"), "utf8");
  const listeners = {};
  const sandbox = {
    indexedDB: fakeIndexedDB(),
    localStorage: (() => { const m = new Map(); return { getItem: k => m.get(k) ?? null, setItem: (k, v) => m.set(k, v) }; })(),
    navigator: { onLine: online, serviceWorker: { ready: Promise.resolve({ sync: null }), addEventListener: () => {} } },
    crypto: { randomUUID: () => crypto.randomUUID() },
    CustomEvent: class CustomEvent { constructor(type, init) { this.type = type; this.detail = init?.detail; } },
    fetch: fetchImpl,
    console
  };
  sandbox.window = sandbox;
  sandbox.dispatchEvent = event => { (listeners[event.type] || []).forEach(fn => fn(event)); };
  sandbox.addEventListener = (type, fn) => { listeners[type] = listeners[type] || []; listeners[type].push(fn); };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return { pwa: sandbox.window.NexusAuthoritativePwa, store: sandbox.indexedDB.__store };
}

// Found live (situational-awareness/sync/memory follow-up audit): the
// server's real rows (SyncRepository.apply()'s `returning *`) come back
// snake_case straight from Postgres -- `state`, `operation_id` -- but
// flush() checked result.status/result.operationId/result.clientOperationId,
// fields that never existed on the response. Every result was therefore
// always treated as "not a conflict", the resulting accepted list was
// always empty, and that fell through to a fallback that unconditionally
// deleted EVERY queued operation from the local outbox -- including ones
// the server had just reported as a real conflict. A conflicting offline
// edit was silently discarded with no retry and no visible error.
test("flush() keeps a conflicting operation in the outbox instead of silently deleting it", async () => {
  const { pwa, store } = loadModule({
    fetchImpl: async () => ({ ok: true, json: async () => ({ results: [
      { sync_id: "s1", operation_id: "op-applied", state: "applied" },
      { sync_id: "s2", operation_id: "op-conflict", state: "conflict" }
    ] }) })
  });
  await pwa.queue({ operationId: "op-applied", entityType: "record" });
  await pwa.queue({ operationId: "op-conflict", entityType: "record" });
  const result = await pwa.flush();
  assert.equal(result.synchronized, true);
  assert.equal(store.has("op-applied"), false, "an applied operation must be removed from the outbox");
  assert.equal(store.has("op-conflict"), true, "a conflicting operation must be RETAINED, not silently discarded");
});

test("flush() reports the real accepted count and the real conflict list, not a fabricated total", async () => {
  const { pwa } = loadModule({
    fetchImpl: async () => ({ ok: true, json: async () => ({ results: [
      { sync_id: "s1", operation_id: "op-1", state: "applied" },
      { sync_id: "s2", operation_id: "op-2", state: "conflict" },
      { sync_id: "s3", operation_id: "op-3", state: "conflict" }
    ] }) })
  });
  await pwa.queue({ operationId: "op-1" }); await pwa.queue({ operationId: "op-2" }); await pwa.queue({ operationId: "op-3" });
  const result = await pwa.flush();
  assert.equal(result.results.filter(r => r.state === "applied").length, 1);
  assert.equal(result.results.filter(r => r.state === "conflict").length, 2);
});

test("flush() removes nothing when every operation conflicts", async () => {
  const { pwa, store } = loadModule({
    fetchImpl: async () => ({ ok: true, json: async () => ({ results: [{ sync_id: "s1", operation_id: "op-1", state: "conflict" }] }) })
  });
  await pwa.queue({ operationId: "op-1" });
  await pwa.flush();
  assert.equal(store.has("op-1"), true, "the only operation, which conflicted, must still be queued for retry/resolution");
});
