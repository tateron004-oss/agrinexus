"use strict";

const { localDay, validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");

// A community desk, for governments, local authorities and any organisation serving a community:
//  * A CITIZEN can report a problem by talking ("Report: the borehole in ward 3 is broken"), gets a report number, is told plainly that the
//    community team can see it, can ask for its status, and is notified when staff update it.
//  * STAFF (the admin role) can list open reports, update one ("Close report 12: pump repaired"), see a summary, and send an ANNOUNCEMENT to
//    the community: prepared first, sent only after "confirm announcement", capped at three a day, only to people whose devices can
//    receive push and who have not opted out ("stop community announcements"). Every announcement is recorded.
// Reports and announcements stay inside one community (tenant). Nothing is sent to anyone outside it.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const STATUS_WORDS = { open: "open", in_progress: "in progress", resolved: "resolved", closed: "closed" };
const PROBLEM = /\b(?:broken|leak(?:ing|s)?|blocked|no water|not working|burst|damaged|dangerous|flood(?:ed|ing)?|outage|overflow(?:ing)?|missing|stolen|dirty|unsafe|contaminated|dead|collapsed|pothole|fault(?:y)?|failed|out of (?:order|stock)|no electricity|no power|no light|closed)\b/i;
const CATEGORIES = [["water", /\b(?:water|borehole|pump|tap|well|leak|pipe|drain|sewer|flood)/i], ["roads", /\b(?:road|bridge|pothole|street(?!\s?light)|drain)/i], ["health", /\b(?:clinic|hospital|health|medicine|ambulance|dispensary)/i],
  ["power", /\b(?:electric|power|light|street\s?light|transformer|outage)/i], ["safety", /\b(?:unsafe|danger|theft|stolen|fire|crime)/i]];
const MAX_OPEN_PER_PERSON = 10;
const MAX_ANNOUNCEMENTS_PER_DAY = 3;
const PENDING_MINUTES = 10;
const category = text => (CATEGORIES.find(([, pattern]) => pattern.test(text)) || ["other"])[0];

// { action, ... } or null
function readDeskRequest(text) {
  const t = clean(text);
  if (!t || t.length > 420) return null;
  const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  let m;
  if ((m = /^(?:please )?(?:i (?:want|would like|need) to )?report(?: a| an)?(?: problem| issue)?\s*:\s*(.{5,300})$/i.exec(t))) return { action: "report", text: clean(m[1]) };
  if ((m = /^(?:please )?(?:i (?:want|would like|need) to )?report (?:a |an |that |the )?(.{5,300})$/i.exec(t)) && PROBLEM.test(m[1]) && !/^(?:on|about|for|to|generation)\b/i.test(m[1])) return { action: "report", text: clean(m[1]) };
  if (/^(?:what(?:'s| is)|show|check|any (?:news|update) on) (?:the )?(?:status of )?my (?:reports?|issues?)$/.test(lower) || /^what is the status of my reports?$/.test(lower)) return { action: "my-reports" };
  if (/^(?:show|list|give me) (?:the )?open reports$/.test(lower)) return { action: "open-reports" };
  if (/^(?:show|give me) (?:the )?report summary$/.test(lower)) return { action: "summary" };
  if ((m = /^(close|resolve|reopen|mark) report #?(\d{1,6})(?: as)?(?: (in progress|resolved|closed|open))?\s*[:,-]?\s*(.*)$/i.exec(t))) {
    const verb = m[1].toLowerCase(); const named = (m[3] || "").toLowerCase().replace(" ", "_");
    const status = named || (verb === "close" ? "closed" : verb === "resolve" ? "resolved" : verb === "reopen" ? "open" : "");
    return status ? { action: "update", number: Number(m[2]), status, note: clean(m[4]).slice(0, 200) } : null;
  }
  if ((m = /^(?:announce|broadcast|send an announcement)(?: to (?:everyone|all))?\s*:\s*(.{5,300})$/i.exec(t))) return { action: "announce", text: clean(m[1]) };
  if (/^confirm (?:the )?announcement$/.test(lower)) return { action: "confirm-announcement" };
  if (/^cancel (?:the )?announcement$/.test(lower)) return { action: "cancel-announcement" };
  if (/^stop (?:community )?announcements$/.test(lower)) return { action: "opt-out" };
  if (/^(?:start|resume|turn on) (?:community )?announcements$/.test(lower)) return { action: "opt-in" };
  if (/^(?:what(?:'s| is) new|any (?:community )?(?:news|announcements)|community news)(?: from the community)?$/.test(lower)) return { action: "news" };
  return null;
}

const first = name => clean(name).split(" ")[0] || "";
const dateWords = iso => String(iso || "").slice(0, 10);

// Returns the words to answer with, or null when the text is not for the desk.
async function communityTurn({ text, store, notifications, tenantId, userId, nameOf = null, roles = [], timeZone, now = new Date() }) {
  if (!store?.addReport) return null;
  const request = readDeskRequest(text);
  if (!request) return null;
  const userName = nameOf ? await nameOf({ tenantId, userId }).catch(() => "") : ""; // only looked up when the words were for the desk
  const staff = roles.includes("admin");
  const today = localDay(now, validTimeZone(timeZone || DEFAULT_TIME_ZONE));
  const push = (toUserId, title, body, key) => notifications?.enqueue?.({ tenantId, userId: toUserId, channel: "push", scheduledAt: now, idempotencyKey: key, content: { title, body, kind: "community" } });
  try {
    switch (request.action) {
      case "report": {
        const mine = await store.listReports({ tenantId, userId });
        if (mine.filter(row => ["open", "in_progress"].includes(row.content.status)).length >= MAX_OPEN_PER_PERSON) return "You already have ten open reports. Please wait for some to be resolved before adding more.";
        const number = await store.addReport({ tenantId, userId, content: { kind: "report", text: request.text.slice(0, 300), category: category(request.text), status: "open", reporter: clean(userName).slice(0, 60), day: today, createdAt: now.toISOString() } });
        return `Thank you. I've logged report #${number}: "${request.text.slice(0, 120)}". The community team can see it, along with your name. I'll tell you when it's updated, or ask "what is the status of my reports?".`;
      }
      case "my-reports": {
        // Found live: this compared against content.day, the report's
        // CREATION day, never refreshed when it's later closed -- so a
        // report open for more than 30 days vanished from "my reports"
        // the instant staff closed it, right when the reporter was just
        // pushed "your report was updated" and told to check this exact
        // list. Falls back to content.day for a record closed before this
        // fix (no updatedDay recorded yet), preserving its existing
        // visibility rather than changing it retroactively.
        const since = dateWords(new Date(now.getTime() - 30 * 86400000).toISOString());
        const mine = (await store.listReports({ tenantId, userId })).filter(row => row.content.status !== "closed" || (row.content.updatedDay || row.content.day) >= since);
        if (!mine.length) return 'You have no reports. Say "report: the borehole in ward 3 is broken" to send one.';
        return `Your reports: ${mine.slice(0, 8).map(row => `#${row.content.number} ${STATUS_WORDS[row.content.status] || row.content.status} — ${row.content.text.slice(0, 60)}${row.content.note ? ` (${row.content.note})` : ""}`).join("; ")}.`;
      }
      case "open-reports": case "summary": case "update": {
        if (!staff) return null; // only the community team; for everyone else this is ordinary talk
        if (request.action === "open-reports") {
          const open = (await store.listReports({ tenantId })).filter(row => ["open", "in_progress"].includes(row.content.status));
          if (!open.length) return "There are no open reports.";
          return `${open.length} open: ${open.slice(0, 10).map(row => `#${row.content.number} (${row.content.category}, ${STATUS_WORDS[row.content.status]}) ${row.content.text.slice(0, 70)} — ${first(row.content.reporter) || "someone"}`).join("; ")}${open.length > 10 ? ` and ${open.length - 10} more` : ""}.`;
        }
        if (request.action === "summary") {
          const rows = await store.listReports({ tenantId }); const since = dateWords(new Date(now.getTime() - 30 * 86400000).toISOString());
          const recent = rows.filter(row => row.content.day >= since);
          if (!recent.length) return "No reports in the last 30 days.";
          const by = key => Object.entries(recent.reduce((acc, row) => { acc[row.content[key]] = (acc[row.content[key]] || 0) + 1; return acc; }, {})).sort((a, b) => b[1] - a[1]).map(([name, count]) => `${count} ${STATUS_WORDS[name] || name}`).join(", ");
          return `Last 30 days: ${recent.length} reports — ${by("status")}. By kind: ${by("category")}.`;
        }
        const found = await store.getReport({ tenantId, number: request.number });
        if (!found) return `I can't find report #${request.number}.`;
        await store.updateReport({ tenantId, memoryId: found.memoryId, content: { ...found.content, status: request.status, note: request.note || found.content.note || "", updatedAt: now.toISOString(), updatedDay: today, updatedBy: clean(userName).slice(0, 60) } });
        if (found.userId && found.userId !== userId) await push(found.userId, "Your report was updated", `Report #${request.number} is now ${STATUS_WORDS[request.status]}${request.note ? `: ${request.note}` : "."}`, `report:${request.number}:${tenantId}:${request.status}:${now.getTime() - (now.getTime() % 60000)}`);
        return `Done. Report #${request.number} is now ${STATUS_WORDS[request.status]}${found.userId !== userId ? ", and the person who reported it has been told" : ""}.`;
      }
      case "announce": {
        if (!staff) return null;
        const sentToday = (await store.listAnnouncements({ tenantId, limit: 20 })).filter(row => row.content.day === today).length;
        if (sentToday >= MAX_ANNOUNCEMENTS_PER_DAY) return `Three announcements have already gone out today, which is the limit. Please try again tomorrow.`;
        const recipients = await store.pushRecipients({ tenantId, limit: 5000 });
        const optedOut = new Set(await store.optOuts({ tenantId }));
        const count = recipients.filter(id => !optedOut.has(id)).length;
        await store.setPending({ tenantId, userId, content: { kind: "pending", text: request.text, expiresAt: new Date(now.getTime() + PENDING_MINUTES * 60000).toISOString() } });
        return `Ready to send to ${count} ${count === 1 ? "person" : "people"} with alerts on (anyone who opted out is left out): "${request.text}". Say "confirm announcement" within ${PENDING_MINUTES} minutes to send it, or "cancel announcement".`;
      }
      case "cancel-announcement": {
        if (!staff) return null;
        return await store.clearPending({ tenantId, userId }) ? "Cancelled. Nothing was sent." : "There is no announcement waiting.";
      }
      case "confirm-announcement": {
        if (!staff) return null;
        const pending = await store.getPending({ tenantId, userId });
        if (!pending || new Date(pending.content.expiresAt).getTime() < now.getTime()) { if (pending) await store.clearPending({ tenantId, userId }); return "There is no announcement waiting (they expire after ten minutes). Say \"announce: …\" to prepare one."; }
        const sentToday = (await store.listAnnouncements({ tenantId, limit: 20 })).filter(row => row.content.day === today).length;
        if (sentToday >= MAX_ANNOUNCEMENTS_PER_DAY) { await store.clearPending({ tenantId, userId }); return "Three announcements have already gone out today, which is the limit. Please try again tomorrow."; }
        const optedOut = new Set(await store.optOuts({ tenantId }));
        const recipients = (await store.pushRecipients({ tenantId, limit: 5000 })).filter(id => !optedOut.has(id));
        const announcementId = await store.addAnnouncement({ tenantId, userId, content: { kind: "announcement", text: pending.content.text, day: today, by: clean(userName).slice(0, 60), recipients: recipients.length, sentAt: now.toISOString() } });
        await store.clearPending({ tenantId, userId });
        let sent = 0;
        for (const id of recipients) { try { await push(id, "Community announcement", pending.content.text, `announce:${announcementId}:${id}`); sent += 1; } catch { /* one failure must not stop the rest */ } }
        return `Sent to ${sent} ${sent === 1 ? "person" : "people"}. It's recorded, and anyone can read it later by asking "what's new from the community?".`;
      }
      case "opt-out": { await store.setOptOut({ tenantId, userId, value: true }); return 'Done. You won\'t get community announcements. Say "start community announcements" to get them again. Emergency alerts from your own circle are separate and unaffected.'; }
      case "opt-in": { await store.setOptOut({ tenantId, userId, value: false }); return "Done. You'll get community announcements again."; }
      case "news": {
        const recent = await store.listAnnouncements({ tenantId, limit: 3 });
        return recent.length ? `Latest from the community: ${recent.map(row => `${row.content.day}: ${row.content.text}`).join(" | ")}` : "There are no community announcements yet.";
      }
      default: return null;
    }
  } catch { return null; }
}

module.exports = Object.freeze({ communityTurn, readDeskRequest, category, MAX_ANNOUNCEMENTS_PER_DAY });
