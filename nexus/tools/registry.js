const AVAILABILITY = Object.freeze(["available", "degraded", "unavailable"]);
const RISK_TIERS = Object.freeze(["low", "medium", "high", "regulated"]);

class ToolRegistry {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async register(tool) {
    for (const field of ["toolId", "description", "domain", "implementation"]) {
      if (!String(tool[field] || "").trim()) throw new Error(`Tool ${field} is required.`);
    }
    if (!AVAILABILITY.includes(tool.availability || "unavailable")) throw new Error("Invalid tool availability.");
    if (!RISK_TIERS.includes(tool.riskTier || "low")) throw new Error("Invalid tool risk tier.");
    const values = normalize(tool);
    const result = await this.db.query(`insert into nexus_tool_definitions
      (tool_id,version,description,domain,input_schema,output_schema,implementation,availability,
       required_permission,required_role,risk_tier,confirmation_required,consent_scope,timeout_ms,
       max_attempts,retry_policy,verification_method,data_classification,cost_limit_cents,feature_flag,metadata)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)
      on conflict (tool_id) do update set version=excluded.version,description=excluded.description,
       domain=excluded.domain,input_schema=excluded.input_schema,output_schema=excluded.output_schema,
       implementation=excluded.implementation,availability=excluded.availability,
       required_permission=excluded.required_permission,required_role=excluded.required_role,
       risk_tier=excluded.risk_tier,confirmation_required=excluded.confirmation_required,
       consent_scope=excluded.consent_scope,timeout_ms=excluded.timeout_ms,max_attempts=excluded.max_attempts,
       retry_policy=excluded.retry_policy,verification_method=excluded.verification_method,
       data_classification=excluded.data_classification,cost_limit_cents=excluded.cost_limit_cents,
       feature_flag=excluded.feature_flag,metadata=excluded.metadata,updated_at=now() returning *`, values);
    return (result.rows || result)[0];
  }

  async get(toolId) {
    const result = await this.db.query("select * from nexus_tool_definitions where tool_id=$1", [toolId]);
    return (result.rows || result)[0] || null;
  }

  async list() {
    const result = await this.db.query("select * from nexus_tool_definitions order by domain, tool_id");
    return result.rows || result;
  }
}

function normalize(tool) {
  return [tool.toolId, Number(tool.version || 1), tool.description.trim(), tool.domain.trim(),
    tool.inputSchema || {}, tool.outputSchema || {}, tool.implementation.trim(), tool.availability || "unavailable",
    tool.requiredPermission || null, tool.requiredRole || null, tool.riskTier || "low",
    Boolean(tool.confirmationRequired), tool.consentScope || null,
    Math.min(Math.max(Number(tool.timeoutMs || 30000), 100), 900000),
    Math.min(Math.max(Number(tool.maxAttempts || 3), 1), 20),
    tool.retryPolicy || { strategy: "exponential", baseDelayMs: 1000 },
    tool.verificationMethod || "result_schema", tool.dataClassification || "internal",
    tool.costLimitCents || null, tool.featureFlag || null, tool.metadata || {}];
}

module.exports = Object.freeze({ ToolRegistry, AVAILABILITY, RISK_TIERS });
