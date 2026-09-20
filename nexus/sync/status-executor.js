"use strict";

// Real executor for "offline.sync". It used to be answered by the scripts/provider-engines.js stand-in, which returned
// { syncState: "synchronized", serverAcknowledged: true } for any request without looking at anything, so "sync my offline
// queue" always claimed success.
//
// The offline queue itself is real and lives on each device (IndexedDB, flushed automatically to /api/nexus/runtime/sync/push
// by public/nexus-authoritative-pwa-runtime.js). What the server can honestly report is its own view of that: how many changes
// from this person's devices it has applied, how many hit a conflict that needs their review, and how many are still pending.
// This executor reads exactly that from nexus_sync_operations and says nothing about what a device has not yet uploaded.

function createOfflineSyncStatusExecutor({ sync }) {
  if (!sync?.summary) throw new Error("A sync repository is required.");
  return async function execute({ context, taskId }) {
    const summary = await sync.summary({ tenantId: context.tenantId, userId: context.userId });
    const { applied, conflicts, pending, rejected } = summary;
    const syncState = conflicts > 0 ? "conflicts_need_review" : pending > 0 ? "pending_on_server" : "synchronized";
    const note = conflicts > 0
      ? `${conflicts} change${conflicts === 1 ? "" : "s"} from your devices conflict with newer server data and need your review.`
      : pending > 0 ? `${pending} change${pending === 1 ? " is" : "s are"} received but not yet applied.`
        : `The server has applied ${applied} change${applied === 1 ? "" : "s"} from your devices and none are waiting.`;
    return {
      operationId: `sync-status-${taskId}`, syncState, serverAcknowledged: true,
      applied, conflicts, pending, rejected, lastAppliedAt: summary.lastAppliedAt, checkedAt: new Date().toISOString(),
      note: `${note} Changes made offline on a device upload automatically when it is back online.`
    };
  };
}

function verifyOfflineSyncStatusOutcome({ result }) {
  const counts = ["applied", "conflicts", "pending", "rejected"].every(key => Number.isInteger(result?.[key]) && result[key] >= 0);
  const verified = counts && result?.serverAcknowledged === true && typeof result?.operationId === "string" && result.operationId.length > 0
    && ["synchronized", "conflicts_need_review", "pending_on_server"].includes(result?.syncState);
  return { verified, method: "real_server_state", reason: verified ? null : "offline_sync_state_not_read" };
}

module.exports = Object.freeze({ createOfflineSyncStatusExecutor, verifyOfflineSyncStatusOutcome });
