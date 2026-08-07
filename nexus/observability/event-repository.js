"use strict";
const { createId } = require("../contracts/identifiers.js");
const { redact, RELEASE_SHA } = require("./logger.js");

class ObservabilityRepository {
  constructor(db) { if(!db?.query) throw new Error("A database runtime is required."); this.db=db; }
  async record(event) {
    const metadata=redact(event.metadata||{});
    await this.db.query(`insert into nexus_observability_events
      (event_id,tenant_id,actor_id,trace_id,correlation_id,task_id,component,event_type,outcome,duration_ms,provider,cost_micros,release_sha,metadata)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
    [event.eventId||createId("event"),event.tenantId||null,event.actorId||null,event.traceId,event.correlationId,
      event.taskId||null,event.component,event.eventType,event.outcome,event.durationMs??null,event.provider||null,
      event.costMicros??null,event.releaseSha||RELEASE_SHA,metadata]);
  }
  async summary({tenantId,windowMinutes=60}) {
    const minutes=Math.min(Math.max(Number(windowMinutes)||60,1),10080);
    const result=await this.db.query(`select component,event_type,outcome,count(*)::int as count,
      coalesce(round(avg(duration_ms))::int,0) as average_duration_ms,coalesce(sum(cost_micros),0)::bigint as cost_micros
      from nexus_observability_events where tenant_id=$1 and occurred_at>=now()-make_interval(mins=>$2)
      group by component,event_type,outcome order by component,event_type,outcome`,[tenantId,minutes]);
    return {windowMinutes:minutes,series:result.rows||result};
  }
}
module.exports=Object.freeze({ObservabilityRepository});
