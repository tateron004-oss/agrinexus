"use strict";

// Sending a scheduled campaign when its time comes, with no one there (6 November 2026). The background worker calls sendDue() about once a minute (nexus/workers/process.js).
//
// The owner chose the day and time by voice and said yes to it (campaigns-voice.js, "scheduleCampaign"). What this does, and what keeps it safe:
//   * it looks only at campaigns whose status is "scheduled" (or "sending", to find a send that was cut off);
//   * a campaign is sent only in its window: from its chosen time until 3 hours later, and never from 9 PM on. A send that is later than that is NOT sent (a message that says "this Saturday" is stale on Sunday): it is marked "missed"
//     and the owner is told;
//   * it is CLAIMED first (a versioned write that sets the status to "sending"), so two workers, or one worker twice, can never send the same campaign. If the claim is lost, nothing is sent;
//   * the list of people is worked out AGAIN at send time (campaigns-voice.js sendPlanFor): a person who said stop since is left out, a person already sent it is skipped, and at most 50 go out;
//   * every message goes through the same governed sender as a message sent by hand, and counts as sent only when the provider really sent it; a failure is logged as failed, never hidden;
//   * if a send is cut off half way (the worker stops), the campaign stays "sending" and, half an hour later, is marked "interrupted" and is NEVER retried by itself, because some people may already have it. At most once, never twice;
//   * the owner is told the outcome by a push notification, and it is saved in the workspace for "what is scheduled" and "how did it do";
//   * an account that may not send messages cannot schedule one in the first place (the worker cannot see the account), and a tenant that has paused Kyro's autonomous actions is skipped.

const campaignVoice = require("./campaigns-voice.js");
const { normalizeEditable } = require("./service.js");

const lower = value => String(value || "").toLowerCase();
const plural = (count, word) => `${count} ${count === 1 ? word : `${word}s`}`;
// a failure that would be the same for every message (sending switched off, not set up, refused for this account): stop at the first instead of failing fifty times
const SAME_FOR_EVERYONE = /not set up|restricted|cannot send|not available|disabled/i;
const SAVE_ATTEMPTS = 4;

const patchCampaign = (editable, name, patch) => ({ ...editable, campaigns: (editable.campaigns || []).map(row => (lower(row.name) === lower(name) ? { ...row, ...patch } : row)) });
const CLEARED = Object.freeze({ sendOn: "", sendTime: "", scheduleZone: "", claimedAt: "" });

function createScheduledCampaignSender({ repository, sendMessageFor, now = () => new Date(), notify = null, isPaused = null, logger = null }) {
  if (!repository?.listScheduledCampaignWorkspaces || !repository.update || !repository.getOwned) throw new Error("A business record repository that can list scheduled campaigns is required.");
  if (typeof sendMessageFor !== "function") throw new Error("A way to build the governed sender for an owner is required.");

  const editableOf = record => normalizeEditable(record.data.info, record.data.editable);
  const write = (record, editable, source) => repository.update({ tenantId: record.tenant_id, recordId: record.record_id, actorId: record.owner_id, expectedVersion: record.version,
    data: { ...record.data, editable }, provenance: { source } });

  // Save a change to one workspace made from what is saved NOW: if the owner changed it in the meantime the version no longer matches, so it is read again and the change is made again on top (a few times).
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
    try { await notify({ tenantId: record.tenant_id, userId: record.owner_id, key, title, body }); } catch (error) { logger?.error?.("scheduled_campaign.notify_failed", { error: { code: error.code, message: error.message } }); }
  }

  async function sendOne(record, campaign, at, stats) {
    // CLAIM: after this write succeeds this worker, and only this worker, is sending the campaign.
    let claimed;
    try { claimed = await write(record, patchCampaign(editableOf(record), campaign.name, { status: "sending", claimedAt: at.toISOString() }), "scheduled-campaign-claim"); } catch { stats.conflicts += 1; return null; }
    const editable = editableOf(claimed);
    const row = (editable.campaigns || []).find(item => lower(item.name) === lower(campaign.name)) || campaign;
    const plan = campaignVoice.sendPlanFor(editable, row);
    const state = campaignVoice.dueState(campaign, at);
    const when = campaignVoice.whenWords(campaign, state.day, true);
    const results = [];
    const sendMessage = plan.messages.length ? sendMessageFor({ tenantId: record.tenant_id, userId: record.owner_id }) : null;
    for (const message of plan.messages) {
      try { await sendMessage(message); results.push({ ok: true, message }); } catch (error) {
        results.push({ ok: false, message, error: String(error?.message || "not sent").replace(/\s+/g, " ") });
        if (!results.some(item => item.ok) && SAME_FOR_EVERYONE.test(String(error?.message || ""))) break;
      }
    }
    const ok = results.filter(item => item.ok); const bad = results.filter(item => !item.ok);
    const remaining = Math.max(plan.reachable.length - plan.batch.length, 0);
    const everSent = (editable.campaignLog || []).some(item => lower(item.campaign) === lower(campaign.name) && (item.status === "sent" || item.status === "replied"));
    let status; let note;
    if (!plan.messages.length) {
      status = everSent ? "sent" : "draft";
      note = `When the time came (${when}) nobody who agreed to get messages was left to send to, so nothing was sent.`;
    } else if (ok.length) {
      status = "sent";
      note = [remaining ? `Only the first ${ok.length + bad.length} of ${plan.reachable.length} were sent; say "send the ${campaign.name} campaign" for the rest.` : "", bad.length ? `${plural(bad.length, "message")} failed${bad[0].error ? `: ${bad[0].error.replace(/[.\s]+$/, "")}` : ""}.` : ""].filter(Boolean).join(" ");
    } else {
      status = "draft";
      note = `The scheduled send for ${when} did not go out: ${(bad[0]?.error || "the messages could not be sent").replace(/[.\s]+$/, "")}. Nothing was sent. It is saved as a draft.`;
    }
    const day = state.day || "";
    const saved = await persist(claimed, current => ({ ...patchCampaign(current, campaign.name, { status, sentOn: ok.length ? day : (campaign.sentOn || ""), note, ...CLEARED }),
      campaignLog: [...(current.campaignLog || []), ...results.map(item => ({ campaign: campaign.name, customer: item.message.customer, channel: campaign.channel, to: item.message.to, status: item.ok ? "sent" : "failed", at: day, note: item.ok ? "" : String(item.error || "not sent").slice(0, 200) }))].slice(-campaignVoice.LOG_LIMIT) }),
    "scheduled-campaign-result").catch(error => { logger?.error?.("scheduled_campaign.result_not_saved", { campaign: campaign.name, sent: ok.length, error: { code: error.code, message: error.message } }); return null; });
    stats.messages += ok.length; stats.failed += bad.length; if (ok.length) stats.sent += 1;
    await tell(record, `campaign-result:${record.record_id}:${lower(campaign.name)}:${campaign.sendOn}T${campaign.sendTime}`,
      ok.length ? `${campaign.name} was sent` : `${campaign.name} was not sent`,
      ok.length ? `The ${campaign.name} campaign went to ${plural(ok.length, "customer")}${bad.length ? `, and ${bad.length} failed` : ""}.` : note);
    // the version to carry on from: what was just saved, or, if that save failed, what is saved now
    return saved || repository.getOwned({ tenantId: record.tenant_id, ownerId: record.owner_id, recordId: record.record_id }).catch(() => null);
  }

  async function processRecord(record, stats) {
    const at = now();
    let current = record;
    let editable = editableOf(current);
    // 1. what needs no sending: a send cut off long ago, a send that is too late, a schedule with nothing usable saved
    const notes = [];
    const housekeeping = {};
    for (const campaign of editable.campaigns || []) {
      if (campaign.status === "sending") {
        const claimedAt = Date.parse(campaign.claimedAt);
        if (!Number.isFinite(claimedAt) || at.getTime() - claimedAt > campaignVoice.SENDING_STALE_MS) {
          housekeeping[lower(campaign.name)] = { status: "interrupted", note: "The send was cut off part way, so I did not try again. Some people may already have it; check who got it with \"how did the campaign do\" before sending again.", ...CLEARED };
          notes.push([campaign, "was cut off while sending", `The ${campaign.name} campaign was cut off while it was being sent, so I did not try again. Some people may already have it.`]);
          stats.interrupted += 1;
        }
      } else if (campaign.status === "scheduled") {
        const state = campaignVoice.dueState(campaign, at);
        if (state.state === "missed") {
          const text = `It was scheduled for ${campaignVoice.whenWords(campaign, state.day, true)} but I could not send it on time (${state.late > campaignVoice.LATE_GRACE ? `it was ${Math.round(state.late / 60)} hours late` : "it was too late in the evening"}), so I did not send it. Say "schedule the ${campaign.name} campaign" to pick a new time.`;
          housekeeping[lower(campaign.name)] = { status: "missed", note: text, ...CLEARED };
          notes.push([campaign, "missed its time", `The ${campaign.name} campaign was not sent: ${text}`]);
          stats.missed += 1;
        } else if (state.state === "invalid") {
          housekeeping[lower(campaign.name)] = { status: "draft", note: "The schedule had no usable day and time, so it was cancelled.", ...CLEARED };
        }
      }
    }
    if (Object.keys(housekeeping).length) {
      try {
        current = await write(current, { ...editable, campaigns: editable.campaigns.map(row => (housekeeping[lower(row.name)] ? { ...row, ...housekeeping[lower(row.name)] } : row)) }, "scheduled-campaign-housekeeping");
        editable = editableOf(current);
      } catch { stats.conflicts += 1; return; }
      for (const [campaign, short, text] of notes) await tell(record, `campaign-note:${record.record_id}:${lower(campaign.name)}:${campaign.sendOn || campaign.claimedAt}`, `${campaign.name} ${short}`, text);
    }
    // 2. what is due now, one campaign at a time (each claim changes the version)
    for (const campaign of editable.campaigns || []) {
      if (campaign.status !== "scheduled") continue;
      const state = campaignVoice.dueState(campaign, at);
      if (state.state !== "due") continue;
      current = await sendOne(current, campaign, at, stats);
      if (!current) return;
      editable = editableOf(current);
    }
  }

  return Object.freeze({
    async sendDue({ limit = 50 } = {}) {
      const stats = { checked: 0, sent: 0, messages: 0, failed: 0, missed: 0, interrupted: 0, conflicts: 0, paused: 0, errors: 0 };
      const records = await repository.listScheduledCampaignWorkspaces({ limit });
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
          logger?.error?.("scheduled_campaign.sweep_failed", { recordId: record.record_id, error: { code: error.code, message: error.message } });
        }
      }
      return stats;
    }
  });
}

module.exports = Object.freeze({ createScheduledCampaignSender });
