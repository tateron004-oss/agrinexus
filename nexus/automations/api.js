"use strict";

// The server side of the "Outside tool automations" screen: list the person's connections, add one, remove one. A connection is a name the person will say and the secret link behind it (see connection.js).
// The link is accepted here and only here; it is never returned by any of these routes (the screen shows the name and the host, such as hooks.zapier.com). The signing secret is returned ONCE, when the link
// is saved, so the person (or whoever sets up the receiving tool) can check that a message really came from Kyro.
const { MAX_CONNECTIONS_PER_ACCOUNT, normalizeName, sameName, checkLink, assertPublicHost, newSigningSecret } = require("./connection.js");
const { WORKSPACE_ID, RECORD_TYPE, summary } = require("./executor.js");

const fail = (status, code, error) => ({ status, body: { error, code } });

function createAutomationsApi({ records, lookup } = {}) {
  if (!records?.list || !records?.createUnlessCapped || !records?.remove) throw new Error("A record repository is required.");
  const scope = context => ({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: 50 });
  const restricted = context => context?.isRestrictedFrom?.("communications-send");

  return Object.freeze({
    async list(request) {
      const rows = await records.list(scope(request.context));
      return { status: 200, body: { automations: rows.map(summary), max: MAX_CONNECTIONS_PER_ACCOUNT, canConnect: !restricted(request.context) } };
    },

    async create(request, body = {}) {
      const { context } = request;
      if (restricted(context)) return fail(403, "automation_restricted", "This account type cannot connect outside tools. Sign in with a full account.");
      const name = normalizeName(body.name);
      if (!name) return fail(422, "automation_name_invalid", "Give it a short name you can say, such as Sales sheet.");
      const link = checkLink(body.url);
      if (!link.ok) return fail(422, link.reason, link.message);
      try { await assertPublicHost(link.host, lookup ? { lookup } : undefined); } catch (error) {
        return fail(error?.status || 422, error?.code || "automation_blocked", error?.message || "That link cannot be used.");
      }
      const existing = await records.list(scope(context));
      if (existing.some(row => sameName(row.data?.name, name))) return fail(409, "automation_name_taken", `You already have an automation called ${name}. Choose another name or remove that one first.`);
      const secret = newSigningSecret();
      const inserted = await records.createUnlessCapped({ tenantId: context.tenantId, ownerId: context.userId, subjectId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, classification: "sensitive",
        data: { name, url: link.url, host: link.host, secret, createdAt: new Date().toISOString() }, provenance: { source: "automations-screen" } }, { maxCount: MAX_CONNECTIONS_PER_ACCOUNT });
      if (inserted.capped) return fail(409, "automation_cap_reached", `You can connect up to ${MAX_CONNECTIONS_PER_ACCOUNT} automations. Remove one first.`);
      return { status: 201, body: { name, host: link.host, signingSecret: secret } };
    },

    async remove(request, body = {}) {
      const { context } = request;
      const rows = await records.list(scope(context));
      const row = rows.find(item => sameName(item.data?.name, body.name));
      if (!row) return fail(404, "automation_not_found", "I could not find that automation.");
      await records.remove({ tenantId: context.tenantId, recordId: row.record_id, actorId: context.userId });
      return { status: 200, body: { removed: row.data.name } };
    }
  });
}

module.exports = Object.freeze({ createAutomationsApi });
