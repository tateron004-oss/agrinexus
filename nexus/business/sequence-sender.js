"use strict";

// Sending the next step of a follow-up sequence when its day comes, with no one there (9 November 2026). The background worker calls sendDue() about once a minute (nexus/workers/process.js), next to the scheduled campaigns.
// The steps and the people running through them are in the workspace (sequences-voice.js: sequences, sequenceSteps, sequenceRuns). What keeps it safe, the same way a scheduled campaign is:
//   * a run is looked at only when its sequence is running (not paused), the run is "active" and its day (dueOn) has come in the owner's own time zone, and only between 8 AM and 8 PM there;
//   * a person is sent to only while they still agree to get messages and still have a usable address or number; a person who has said stop, or replied, is stopped, never sent another step;
//   * the step is CLAIMED first (a versioned write that marks the run), so two workers, or one worker twice, can never send the same step; if the claim is lost, nothing is sent;
//   * every message goes through the same governed sender as a message sent by hand, ends with the line telling the person how to stop, and counts as sent only when the provider really sent it; a failure is logged as failed and the run
//     stops, with the reason, instead of trying again by itself (some failures are the same for everyone);
//   * a step that is more than three days late (the server was down) is NOT sent: it would be stale, so the run is stopped and the owner told;
//   * a claim that was never finished (the worker stopped half way) is not tried again: at most once, never twice;
//   * at most 50 messages go out in one pass for one workspace; the rest wait for the next pass;
//   * what was sent is logged with the campaigns' sent log (so "who did I message" and the contact's history show it), and the owner is told when a person finishes a sequence or a run stops.

const campaignVoice = require("./campaigns-voice.js");
const { localClock } = require("../brief/schedule.js");
const { addDays } = require("../personal/dates.js");
const { normalizeEditable } = require("./service.js");

const lower = value => String(value || "").toLowerCase();
const SEND_FROM = 8 * 60;
const SEND_UNTIL = 20 * 60;
const MAX_LATE_DAYS = 3;
const PASS_CAP = 50;
const CLAIM_STALE_MS = 30 * 60 * 1000;
const SAVE_ATTEMPTS = 4;
const SAME_FOR_EVERYONE = /not set up|restricted|cannot send|not available|disabled/i;
const dayNumber = day => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(day || "")); return m ? Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])) / 86400000 : null; };

function createSequenceSender({ repository, sendMessageFor, now = () => new Date(), notify = null, isPaused = null, logger = null }) {
  if (!repository?.listActiveSequenceWorkspaces || !repository.update || !repository.getOwned) throw new Error("A business record repository that can list running sequences is required.");
  if (typeof sendMessageFor !== "function") throw new Error("A way to build the governed sender for an owner is required.");

  const editableOf = record => normalizeEditable(record.data.info, record.data.editable);
  const write = (record, editable, source) => repository.update({ tenantId: record.tenant_id, recordId: record.record_id, actorId: record.owner_id, expectedVersion: record.version, data: { ...record.data, editable }, provenance: { source } });
  async function persist(record, change, source) {
    let current = record;
    for (let attempt = 0; attempt < SAVE_ATTEMPTS; attempt += 1) {
      try { return await write(current, change(editableOf(current)), source); } catch (error) {
        if (attempt === SAVE_ATTEMPTS - 1) throw error;
        current = await repository.getOwned({ tenantId: record.tenant_id, ownerId: record.owner_id, recordId: record.record_id });
      }
    }
    return null;
  }
  async function tell(record, key, title, body) {
    if (typeof notify !== "function") return;
    try { await notify({ tenantId: record.tenant_id, userId: record.owner_id, key, title, body }); } catch (error) { logger?.error?.("sequence.notify_failed", { error: { code: error.code, message: error.message } }); }
  }
  const sameRun = (a, b) => lower(a.sequence) === lower(b.sequence) && lower(a.customer) === lower(b.customer);
  const patchRun = (editable, run, patch) => ({ ...editable, sequenceRuns: (editable.sequenceRuns || []).map(item => (sameRun(item, run) ? { ...item, ...patch } : item)) });

  // One workspace: every due run, one at a time (each claim changes the version). Returns the record to carry on from.
  async function processRecord(record, stats) {
    const at = now();
    let current = record;
    let editable = editableOf(current);
    let sentThisPass = 0;
    const runs = (editable.sequenceRuns || []).filter(run => run.status === "active");
    for (const run of runs) {
      const sequence = (editable.sequences || []).find(item => lower(item.name) === lower(run.sequence));
      if (!sequence || sequence.status === "paused") continue;
      const clock = localClock(at, run.zone || undefined);
      const lateDays = dayNumber(clock.day) - dayNumber(run.dueOn);
      // a claim that was never finished: at most once, so it is stopped and not tried again
      if (run.claimedAt) {
        const claimedAt = Date.parse(run.claimedAt);
        if (!Number.isFinite(claimedAt) || at.getTime() - claimedAt > CLAIM_STALE_MS) {
          try { current = await write(current, patchRun(editable, run, { status: "stopped", note: "A step was being sent when the server stopped, so I did not try again. Check whether they got it.", claimedAt: "" }), "sequence-interrupted"); editable = editableOf(current); stats.interrupted += 1; }
          catch { stats.conflicts += 1; return current; }
          await tell(record, `sequence-note:${record.record_id}:${lower(run.sequence)}:${lower(run.customer)}:${run.dueOn}`, `${run.sequence} stopped for ${run.customer}`, `A step of the ${run.sequence} sequence was cut off while it was being sent to ${run.customer}, so I did not try again.`);
        }
        continue;
      }
      if (!(lateDays >= 0)) continue; // its day has not come
      if (clock.minutes < SEND_FROM || clock.minutes >= SEND_UNTIL) continue; // outside sending hours: wait for the next pass
      if (sentThisPass >= PASS_CAP) break;
      const steps = (editable.sequenceSteps || []).filter(step => lower(step.sequence) === lower(run.sequence)).sort((a, b) => a.step - b.step);
      const step = steps.find(item => item.step === run.nextStep);
      const lead = (editable.leads || []).find(item => lower(item.name) === lower(run.customer));
      const stop = async (note, why) => {
        try { current = await write(current, patchRun(editable, run, { status: "stopped", note, claimedAt: "" }), "sequence-stopped"); editable = editableOf(current); stats.stopped += 1; } catch { stats.conflicts += 1; return false; }
        await tell(record, `sequence-note:${record.record_id}:${lower(run.sequence)}:${lower(run.customer)}:${run.dueOn}`, `${run.sequence} stopped for ${run.customer}`, `${why} ${note}`);
        return true;
      };
      if (!step) { if (!(await stop("It has no step to send.", `The ${run.sequence} sequence stopped for ${run.customer}.`))) return current; continue; }
      if (lateDays > MAX_LATE_DAYS) { if (!(await stop(`Step ${step.step} was ${lateDays} days late, so I did not send it.`, `The ${run.sequence} sequence stopped for ${run.customer}.`))) return current; continue; }
      if (!lead || lower(lead.messageConsent) !== "yes") { if (!(await stop("They no longer agree to get messages.", `The ${run.sequence} sequence stopped for ${run.customer}.`))) return current; continue; }
      const to = campaignVoice.usable(step.channel, lead.contact);
      if (!to) { if (!(await stop(`They have no usable ${step.channel === "email" ? "email address" : "phone number"} saved.`, `The ${run.sequence} sequence stopped for ${run.customer}.`))) return current; continue; }
      // CLAIM: after this write succeeds this worker, and only this worker, is sending this step
      let claimed;
      try { claimed = await write(current, patchRun(editable, run, { claimedAt: at.toISOString() }), "sequence-claim"); } catch { stats.conflicts += 1; continue; }
      current = claimed; editable = editableOf(current);
      const body = `${step.message} ${campaignVoice.STOP_LINE}`.replace(/\s+/g, " ").trim();
      let failure = "";
      try { await sendMessageFor({ tenantId: record.tenant_id, userId: record.owner_id })({ channel: step.channel, to, message: body, subject: step.subject || run.sequence, customer: run.customer }); }
      catch (error) { failure = String(error?.message || "not sent").replace(/\s+/g, " ").slice(0, 200); }
      const day = clock.day;
      const last = step.step >= steps.length;
      const next = steps.find(item => item.step === step.step + 1);
      const saved = await persist(current, fresh => {
        const log = { campaign: `${run.sequence} (sequence), step ${step.step}`, customer: run.customer, channel: step.channel, to, status: failure ? "failed" : "sent", at: day, note: failure };
        const base = patchRun(fresh, run, failure
          ? { status: "stopped", note: `Step ${step.step} did not go out: ${failure}`, claimedAt: "" }
          : last || !next ? { status: "done", nextStep: step.step, lastSentOn: day, note: "", claimedAt: "" } : { nextStep: next.step, dueOn: addDays(day, next.afterDays), lastSentOn: day, note: "", claimedAt: "" });
        return { ...base, campaignLog: [...(base.campaignLog || []), log].slice(-campaignVoice.LOG_LIMIT), contactNotes: [...(base.contactNotes || []), { contact: run.customer, at: day, kind: "sequence", text: failure ? `${run.sequence} step ${step.step} did not go out: ${failure}` : `${run.sequence} step ${step.step} sent by ${step.channel === "sms" ? "text" : "email"}` }].slice(-2000) };
      }, "sequence-result").catch(error => { logger?.error?.("sequence.result_not_saved", { sequence: run.sequence, customer: run.customer, sent: !failure, error: { code: error.code, message: error.message } }); return null; });
      if (failure) stats.failed += 1; else { stats.messages += 1; sentThisPass += 1; }
      if (failure) {
        await tell(record, `sequence-note:${record.record_id}:${lower(run.sequence)}:${lower(run.customer)}:${run.dueOn}`, `${run.sequence} did not go out to ${run.customer}`, `Step ${step.step} did not go out: ${failure}. The sequence stopped for them.`);
        // a failure that would be the same for everyone: stop here, instead of failing every run
        if (SAME_FOR_EVERYONE.test(failure)) { current = saved || await repository.getOwned({ tenantId: record.tenant_id, ownerId: record.owner_id, recordId: record.record_id }).catch(() => current); return current; }
      } else if (last || !next) {
        await tell(record, `sequence-done:${record.record_id}:${lower(run.sequence)}:${lower(run.customer)}`, `${run.sequence} finished for ${run.customer}`, `${run.customer} has been sent every step of the ${run.sequence} sequence.`);
      }
      current = saved || await repository.getOwned({ tenantId: record.tenant_id, ownerId: record.owner_id, recordId: record.record_id }).catch(() => null);
      if (!current) return null;
      editable = editableOf(current);
    }
    return current;
  }

  return Object.freeze({
    async sendDue({ limit = 50 } = {}) {
      const stats = { checked: 0, messages: 0, failed: 0, stopped: 0, interrupted: 0, conflicts: 0, paused: 0, errors: 0 };
      const records = await repository.listActiveSequenceWorkspaces({ limit });
      const paused = new Map();
      for (const record of records) {
        stats.checked += 1;
        try {
          if (typeof isPaused === "function") {
            if (!paused.has(record.tenant_id)) paused.set(record.tenant_id, Boolean(await isPaused({ tenantId: record.tenant_id })));
            if (paused.get(record.tenant_id)) { stats.paused += 1; continue; }
          }
          await processRecord(record, stats);
        } catch (error) {
          stats.errors += 1;
          logger?.error?.("sequence.sweep_failed", { recordId: record.record_id, error: { code: error.code, message: error.message } });
        }
      }
      return stats;
    }
  });
}

module.exports = Object.freeze({ createSequenceSender, MAX_LATE_DAYS, PASS_CAP });
