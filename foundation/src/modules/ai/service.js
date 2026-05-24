const { recordAuditEvent } = require("../../runtime/audit");

class AiService {
  constructor({ repository, db, provider }) {
    this.repository = repository;
    this.db = db;
    this.provider = provider;
  }

  async run({ context, runType, prompt }) {
    const result = await this.provider.run({ runType, prompt });
    const aiRun = await this.repository.createRun({
      tenantId: context.tenantId,
      userId: context.userId,
      runType,
      provider: result.provider,
      model: result.model,
      prompt,
      responseText: result.text,
      responseMetadata: result.metadata
    });
    await recordAuditEvent(this.db, context, {
      action: `${runType}.completed`,
      entityType: "ai",
      entityId: aiRun && aiRun.id,
      metadata: { provider: result.provider, model: result.model }
    });
    return { aiRun, recommendation: result.text };
  }

  commandCenter({ context, prompt }) {
    return this.run({ context, runType: "ai.command_center", prompt });
  }

  priceGuidance({ context, prompt }) {
    return this.run({ context, runType: "ai.price_guidance", prompt });
  }

  routeRisk({ context, prompt }) {
    return this.run({ context, runType: "ai.route_risk", prompt });
  }

  carePlan({ context, prompt }) {
    return this.run({ context, runType: "ai.care_plan", prompt });
  }
}

module.exports = { AiService };
