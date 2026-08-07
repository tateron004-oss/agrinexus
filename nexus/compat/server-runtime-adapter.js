"use strict";

const crypto = require("crypto");
const { createRuntime } = require("../runtime/create-runtime.js");
const { checkRuntimeHealth } = require("../runtime/health.js");
const { createTaskApi } = require("./task-api.js");
const { createWorkspaceTaskAdapter } = require("./workspace-task-adapter.js");
const { registerLegacyTools, createLegacyExecutors, verifyLegacyOutcome } = require("./legacy-provider-adapter.js");
const { permissionsForRoles } = require("../../foundation/src/runtime/permissions.js");

function createServerRuntimeAdapter({ env = process.env, resolveUser, readJson, logger = console,
  createRuntimeFn = createRuntime, checkHealthFn = checkRuntimeHealth,
  registerToolsFn = registerLegacyTools, resolveIdentityFn = resolveAuthoritativeIdentity } = {}) {
  let runtimePromise = null;
  async function runtime() {
    if (!runtimePromise) runtimePromise = Promise.resolve().then(async () => {
      const active = await createRuntimeFn({ env, logger, executors: createLegacyExecutors({ env }), verifier: verifyLegacyOutcome });
      await registerToolsFn({ registry: active.tools, env });
      return active;
    }).catch(error => { runtimePromise = null; throw error; });
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
      const active = await runtime();
      const identity = await resolveIdentityFn(active, user);
      if (!identity) { send(res, 403, { error: "The signed-in account is not provisioned in the authoritative identity store.", code: "authoritative_identity_required" }); return true; }
      const api = createTaskApi(active.engine); const workspaceApi = createWorkspaceTaskAdapter({ engine: active.engine });
      const context = requestContext(req, identity);
      const body = ["POST", "PUT", "PATCH"].includes(req.method) ? await readJson(req) : {};
      const request = { context, body, channel: body.channel || "api", locale: body.locale || user.language || "en", params: {} };
      let result = null;
      if (url.pathname === "/api/nexus/runtime/tasks" && req.method === "POST") result = await api.create(request);
      else if (url.pathname === "/api/nexus/runtime/workspaces" && req.method === "GET") {
        result = { status: 200, body: { authoritative: true, workspaces: workspaceApi.list() } };
      }
      else if (url.pathname.match(/^\/api\/nexus\/runtime\/workspaces\/([^/]+)\/tasks$/) && req.method === "POST") {
        const workspaceId = decodeURIComponent(url.pathname.match(/^\/api\/nexus\/runtime\/workspaces\/([^/]+)\/tasks$/)[1]);
        result = await workspaceApi.create({ context, workspaceId, body, channel: request.channel, locale: request.locale });
      }
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

async function resolveAuthoritativeIdentity(runtime, user) {
  const email = String(user?.email || "").trim().toLowerCase();
  if (!email) return null;
  const result = await runtime.db.query(`select u.id,u.tenant_id,u.email,
    coalesce(array_remove(array_agg(distinct r.code),null),'{}') as roles
    from users u left join user_roles ur on ur.user_id=u.id
    left join roles r on r.id=ur.role_id and r.tenant_id=u.tenant_id
    where lower(u.email)=lower($1) and u.status='active'
    group by u.id,u.tenant_id,u.email order by u.tenant_id limit 2`, [email]);
  const rows = result.rows || result;
  if (rows.length !== 1) return null;
  const roles = stringArray(rows[0].roles);
  return { id: rows[0].id, tenantId: rows[0].tenant_id, email: rows[0].email,
    roles, permissions: permissionsForRoles(roles) };
}

function requestContext(req, user) {
  const roles = new Set(stringArray(user.roles || user.role));
  const permissions = new Set(stringArray(user.permissions));
  return Object.freeze({ requestId: String(req.headers["x-request-id"] || crypto.randomUUID()),
    tenantId: requiredIdentity(user.tenantId, "tenantId"), userId: requiredIdentity(user.id, "userId"),
    roles: [...roles], permissions: [...permissions], hasRole: role => roles.has(role),
    can: permission => permissions.has("*") || permissions.has(permission) });
}

function stringArray(value) {
  if (Array.isArray(value)) return value.map(item => String(item).trim()).filter(Boolean);
  if (typeof value === "string") return value.trim() ? [value.trim()] : [];
  if (value && typeof value === "object") return Object.entries(value).filter(([, allowed]) => allowed).map(([name]) => name);
  return [];
}

function requiredIdentity(value, field) {
  const normalized = String(value || "").trim();
  if (!normalized) throw new Error(`Authoritative ${field} is required.`);
  return normalized;
}

module.exports = Object.freeze({ createServerRuntimeAdapter, requestContext, resolveAuthoritativeIdentity, stringArray });
