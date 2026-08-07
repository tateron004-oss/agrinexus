"use strict";

const crypto = require("crypto");
const { createRuntime } = require("../runtime/create-runtime.js");
const { checkRuntimeHealth } = require("../runtime/health.js");
const { createTaskApi } = require("./task-api.js");

function createServerRuntimeAdapter({ env = process.env, resolveUser, readJson, logger = console,
  createRuntimeFn = createRuntime, checkHealthFn = checkRuntimeHealth } = {}) {
  let runtimePromise = null;
  async function runtime() {
    if (!runtimePromise) runtimePromise = Promise.resolve().then(() => createRuntimeFn({ env, logger })).catch(error => { runtimePromise = null; throw error; });
    return runtimePromise;
  }
  async function status() {
    try { return await checkHealthFn(await runtime()); }
    catch (error) { return { ok: false, authoritative: true, durable: false, code: error.code || "authoritative_runtime_unavailable", message: "The authoritative Nexus runtime is unavailable; no legacy write fallback was used.", releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development" }; }
  }
  async function handle(req, res, url, send) {
    if (!url.pathname.startsWith("/api/nexus/runtime")) return false;
    if (url.pathname === "/api/nexus/runtime/status" && req.method === "GET") { const result = await status(); send(res, result.ok ? 200 : 503, result); return true; }
    const user = await resolveUser(req);
    if (!user) { send(res, 401, { error: "Authentication is required for authoritative Nexus tasks." }); return true; }
    try {
      const active = await runtime(); const api = createTaskApi(active.engine); const context = requestContext(req, user);
      const body = ["POST", "PUT", "PATCH"].includes(req.method) ? await readJson(req) : {};
      const request = { context, body, channel: body.channel || "api", locale: body.locale || user.language || "en", params: {} };
      let result = null;
      if (url.pathname === "/api/nexus/runtime/tasks" && req.method === "POST") result = await api.create(request);
      else {
        const match = url.pathname.match(/^\/api\/nexus\/runtime\/tasks\/([^/]+)(?:\/(transition|steps\/([^/]+)\/(approve|execute)))?$/);
        if (!match) { send(res, 404, { error: "Authoritative runtime route not found." }); return true; }
        request.params.taskId = decodeURIComponent(match[1]);
        if (!match[2] && req.method === "GET") result = await api.get(request);
        else if (match[2] === "transition" && req.method === "POST") result = await api.transition(request);
        else if (match[3] && match[4] === "approve" && req.method === "POST") { request.params.stepId = decodeURIComponent(match[3]); result = await api.approve(request); }
        else if (match[3] && match[4] === "execute" && req.method === "POST") { request.params.stepId = decodeURIComponent(match[3]); result = await api.execute(request); }
        else { send(res, 405, { error: "Method not allowed." }); return true; }
      }
      send(res, result.status, result.body);
    } catch (error) {
      logger.error?.("authoritative.runtime.request_failed", { code: error.code || error.name, requestId: req.headers["x-request-id"] || "" });
      send(res, 503, { error: "The authoritative Nexus runtime is unavailable; no legacy write fallback was used.", code: error.code || "authoritative_runtime_unavailable" });
    }
    return true;
  }
  return Object.freeze({ handle, status });
}

function requestContext(req, user) {
  const roles = new Set([user.role, ...(user.roles || [])].filter(Boolean)); const permissions = new Set([...(user.permissions || [])].filter(Boolean));
  return Object.freeze({ requestId: String(req.headers["x-request-id"] || crypto.randomUUID()), tenantId: String(user.tenantId || user.organizationId || "tenant_default"), userId: String(user.id), roles: [...roles], permissions: [...permissions], hasRole: role => roles.has(role), can: permission => permissions.has(permission) });
}

module.exports = Object.freeze({ createServerRuntimeAdapter, requestContext });
