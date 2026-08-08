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
  async operationalView({tenantId,windowMinutes=60}) {
    const summary=await this.summary({tenantId,windowMinutes});
    const [workers,jobs,release]=await Promise.all([
      this.db.query(`select worker_id,release_sha,status,last_job_id,last_heartbeat_at from nexus_worker_instances order by last_heartbeat_at desc limit 20`),
      this.db.query(`select state,count(*)::int as count from nexus_worker_jobs where tenant_id=$1 group by state order by state`,[tenantId]),
      this.db.query(`select release_sha,state,activated_at,updated_at from nexus_release_activations order by updated_at desc limit 5`)
    ]);
    const series=summary.series;
    return {ok:true,generatedAt:new Date().toISOString(),windowMinutes:summary.windowMinutes,
      release:(release.rows||release)[0]||null,services:(workers.rows||workers),queues:(jobs.rows||jobs),
      errors:series.filter(item=>item.outcome==="failed"||item.outcome==="error"),
      providers:series.filter(item=>item.provider),traces:series.filter(item=>item.event_type||item.trace_id),
      costMicros:series.reduce((sum,item)=>sum+Number(item.cost_micros||0),0),series};
  }
}
module.exports=Object.freeze({ObservabilityRepository});
