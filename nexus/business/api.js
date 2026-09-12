"use strict";
const { BusinessRepository } = require("./repository");
const { BusinessService } = require("./service");
const { createBusinessProviders } = require("./providers");
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine");

function createBusinessApi(runtime, options = {}) {
  const service = new BusinessService({ repository: options.repository || new BusinessRepository(runtime.db),
    access: runtime.access, consents: runtime.consents, agent: runtime.agent,
    providers: options.providers || createBusinessProviders(options) });
  return Object.freeze({
    async handle({ method, pathname, context, body = {} }) {
      const root = "/api/nexus/runtime/business";
      if (pathname === root + "/status" && method === "GET") { await service.authorize(context); return { status: 200, body: service.status() }; }
      if (pathname === root + "/consent/grant" && method === "POST") return { status: 200, body: await service.grantConsent(context, body) };
      if (pathname === root + "/consent/revoke" && method === "POST") return { status: 200, body: await service.revokeConsent(context) };
      if (pathname === root + "/clients") {
        if (method === "GET") return { status: 200, body: { clients: await service.list(context) } };
        if (method === "POST") return { status: 201, body: await service.create(context, body) };
      }
      const match = pathname.match(/^\/api\/nexus\/runtime\/business\/clients\/([A-Za-z0-9_-]+)(?:\/(generate|plan|export|package|preview|assistant|checkout|refresh-subscription|delete))?$/);
      if (!match) throw new NexusRuntimeError("business_route_not_found", "Business route not found.", 404);
      const [, recordId, action] = match;
      let result;
      if (!action && method === "GET") result = await service.get(context, recordId);
      else if (!action && method === "PUT") result = await service.update(context, recordId, body);
      else if (action === "package" && method === "GET") {
        const exported = await service.export(context, recordId);
        result = { name: "business-drafts.zip", contentBase64: require("./package").packageFiles(exported.files).toString("base64") };
      }
      else if (action === "export" && method === "GET") result = await service.export(context, recordId);
      else if (method === "POST" && action === "plan") result = await service.plan(context, recordId, body);
      else if (method === "POST" && action === "generate") result = await service.generate(context, recordId, body);
      else if (method === "POST" && action === "preview") result = await service.preview(context, recordId, body);
      else if (method === "POST" && action === "assistant") result = await service.assistant(context, recordId, body);
      else if (method === "POST" && action === "checkout") result = await service.checkout(context, recordId, body);
      else if (method === "POST" && action === "refresh-subscription") result = await service.refreshSubscription(context, recordId);
      else if (method === "POST" && action === "delete") result = await service.remove(context, recordId, body);
      else throw new NexusRuntimeError("business_method_not_allowed", "Method not allowed.", 405);
      return { status: 200, body: result };
    },
    async webhook(req) {
      const chunks = []; let length = 0;
      for await (const chunk of req) { const bytes = Buffer.from(chunk); length += bytes.length;
        if (length > 1024 * 1024) throw new NexusRuntimeError("business_webhook_too_large", "Webhook body exceeds the limit.", 413);
        chunks.push(bytes);
      }
      return service.webhook(Buffer.concat(chunks), req.headers["stripe-signature"]);
    }
  });
}
module.exports = Object.freeze({ createBusinessApi });
