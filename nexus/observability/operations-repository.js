const crypto = require("node:crypto");
const { ObservabilityRepository: EventRepository } = require("./event-repository.js");
const { redact } = require("./logger.js");

class CostLimitError extends Error {
  constructor(message, details) { super(message); this.name = "CostLimitError"; this.code = "cost_limit_exceeded"; this.status = 429; this.details = details; }
}

class ObservabilityRepository extends EventRepository {
  constructor(db, { dailyCostLimitCents = 0 } = {}) {
    super(db);
    this.dailyCostLimitCents = nonnegative(dailyCostLimitCents);
  }

  async startSpan({ traceId, parentSpanId = null, tenantId = null, taskId = null, service = "nexus-runtime", operation, attributes = {} }) {
    const span = { spanId: `spn_${crypto.randomUUID()}`, traceId: traceId || `trc_${crypto.randomUUID()}`, startedAt: new Date() };
    await this.db.query(`insert into nexus_trace_spans
      (span_id,trace_id,parent_span_id,tenant_id,task_id,service,operation,state,attributes,started_at)
      values ($1,$2,$3,$4,$5,$6,$7,'running',$8,$9)`,
    [span.spanId,span.traceId,parentSpanId,tenantId,taskId,service,required(operation,"operation"),redact(attributes),span.startedAt]);
    return span;
  }

  async finishSpan(span, { state = "ok", error = null, attributes = {} } = {}) {
    const finishedAt = new Date();
    const durationMs = Math.max(0, finishedAt.getTime() - new Date(span.startedAt).getTime());
    await this.db.query(`update nexus_trace_spans set state=$2,duration_ms=$3,attributes=attributes || $4::jsonb,
      error=$5,finished_at=$6 where span_id=$1`, [span.spanId,state,durationMs,JSON.stringify(redact(attributes)),redact(error),finishedAt]);
    return { ...span, state, durationMs, finishedAt };
  }

  async assertCostAllowed({ tenantId, estimatedCostCents = 0, operationLimitCents = 0 }) {
    const estimate = nonnegative(estimatedCostCents); const operationLimit = nonnegative(operationLimitCents);
    if (operationLimit && estimate > operationLimit) throw new CostLimitError("The estimated provider cost exceeds the tool limit.", { estimate, operationLimit });
    if (!this.dailyCostLimitCents) return { allowed: true, spentCents: 0, remainingCents: null };
    const result = await this.db.query(`select coalesce(sum(estimated_cost_cents),0)::integer as spent_cents
      from nexus_cost_events where tenant_id=$1 and occurred_at >= date_trunc('day',now())`, [tenantId]);
    const spentCents = Number((result.rows || result)[0]?.spent_cents || 0);
    if (spentCents + estimate > this.dailyCostLimitCents) throw new CostLimitError("The tenant daily provider budget would be exceeded.",
      { estimate, spentCents, dailyLimitCents: this.dailyCostLimitCents });
    return { allowed: true, spentCents, remainingCents: this.dailyCostLimitCents - spentCents - estimate };
  }

  async recordCost({ tenantId, taskId = null, toolId = null, provider = "unknown", category = "execution", quantity = 1, unit = "request", estimatedCostCents = 0, metadata = {} }) {
    const id = `cst_${crypto.randomUUID()}`;
    await this.db.query(`insert into nexus_cost_events
      (cost_event_id,tenant_id,task_id,tool_id,provider,category,quantity,unit,estimated_cost_cents,metadata)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
    [id,tenantId,taskId,toolId,required(provider,"provider"),category,Number(quantity),unit,nonnegative(estimatedCostCents),redact(metadata)]);
    return { costEventId: id };
  }

  async recordProviderHealth({ tenantId, providerId, successful, latencyMs = null, statusCode = null, errorCode = null, details = {} }) {
    const state = successful ? "healthy" : "degraded";
    const result = await this.db.query(`insert into nexus_provider_health
      (provider_id,state,consecutive_failures,latency_ms,last_status_code,last_error_code,checked_at,details,tenant_id)
      values ($1,$2,$3,$4,$5,$6,now(),$7,$8)
      on conflict (tenant_id,provider_id) do update set state=excluded.state,
      consecutive_failures=case when excluded.state='healthy' then 0 else nexus_provider_health.consecutive_failures+1 end,
      latency_ms=excluded.latency_ms,last_status_code=excluded.last_status_code,last_error_code=excluded.last_error_code,
      checked_at=excluded.checked_at,details=excluded.details,updated_at=now() returning *`,
    [required(providerId,"providerId"),state,successful ? 0 : 1,latencyMs,statusCode,errorCode,redact(details),required(tenantId,"tenantId")]);
    return (result.rows || result)[0] || null;
  }

  async alert({ tenantId = null, alertKey, severity = "warning", summary, evidence = {} }) {
    const id = `alt_${crypto.randomUUID()}`;
    const result = await this.db.query(`insert into nexus_alert_events
      (alert_id,tenant_id,alert_key,severity,state,summary,evidence,first_observed_at,last_observed_at)
      values ($1,$2,$3,$4,'open',$5,$6,now(),now())
      on conflict (tenant_id,alert_key,state) do update set severity=excluded.severity,summary=excluded.summary,
      evidence=excluded.evidence,last_observed_at=now() returning *`, [id,tenantId,required(alertKey,"alertKey"),severity,required(summary,"summary"),redact(evidence)]);
    return (result.rows || result)[0] || null;
  }

  async snapshot({ tenantId, taskId = null }) {
    const taskFilter = taskId ? " and task_id=$2" : ""; const params = taskId ? [tenantId,taskId] : [tenantId];
    const [costs, alerts, providers, progress] = await Promise.all([
      this.db.query(`select coalesce(sum(estimated_cost_cents),0)::integer as today_cents from nexus_cost_events where tenant_id=$1 and occurred_at>=date_trunc('day',now())${taskFilter}`, params),
      this.db.query("select alert_key,severity,summary,last_observed_at from nexus_alert_events where tenant_id=$1 and state='open' order by last_observed_at desc limit 50", [tenantId]),
      this.db.query("select provider_id,state,consecutive_failures,latency_ms,checked_at from nexus_provider_health where tenant_id=$1 order by provider_id", [tenantId]),
      taskId ? this.db.query(`select t.task_id,t.state,count(s.step_id)::integer as total_steps,
        count(*) filter (where s.state='completed')::integer as completed_steps,
        count(*) filter (where s.state='failed')::integer as failed_steps
        from nexus_tasks t left join nexus_task_steps s on s.task_id=t.task_id and s.tenant_id=t.tenant_id
        where t.tenant_id=$1 and t.task_id=$2 group by t.task_id,t.state`, [tenantId,taskId]) : Promise.resolve({ rows: [] })
    ]);
    return { costs: (costs.rows || costs)[0] || { today_cents: 0 }, alerts: alerts.rows || alerts,
      providers: providers.rows || providers, progress: (progress.rows || progress)[0] || null };
  }
}

function required(value, name) { const text = String(value || "").trim(); if (!text) throw new Error(`${name} is required.`); return text; }
function nonnegative(value) { const number = Number(value || 0); if (!Number.isFinite(number) || number < 0) throw new Error("Cost values must be non-negative numbers."); return Math.round(number); }

module.exports = Object.freeze({ ObservabilityRepository, CostLimitError });
