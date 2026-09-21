"use strict";

const { encodePlusCode } = require("../../public/kyro-navigation.js");

// A person's location, sent to their circle in an emergency they triggered. Three rules, all enforced here and not left to the phone:
//  1. Only after the person asked for urgent help: it must follow an open alert of theirs (safety.js), within the hour, and it stops the moment they
//     say they are safe.
//  2. Only to members the person chose ("share my location in emergencies"), and only those who were alerted and are still in the circle. Nobody else,
//     ever: leaving the circle stops it at once.
//  3. Kyro does not keep the position. It is put into the push message and forgotten; only a count and a time are kept on the alert.
// The phone sends a position every couple of minutes for a while (see public/kyro-emergency.js); this refuses anything faster, or more than 30 in all.
const MIN_GAP_MS = 45 * 1000;
const MAX_UPDATES = 30;
const MAX_FIX_AGE_SECONDS = 600;
const fail = (status, code, message, extra = {}) => Object.assign(new Error(message), { status, code, ...extra });

const number = (value, low, high) => { const n = Number(value); return Number.isFinite(n) && n >= low && n <= high ? n : null; };
const mapLink = (lat, lng) => `https://www.google.com/maps?q=${lat.toFixed(6)},${lng.toFixed(6)}`;

function createEmergencyLocation({ circle, pushWithLink, now = () => new Date() } = {}) {
  return Object.freeze({
    // -> { status: 200, body: { shared: [names], updates, done } }; throws { status, code } for anything wrong.
    async share({ tenantId, userId, userName, alertId, position }) {
      const lat = number(position?.lat, -90, 90); const lng = number(position?.lng, -180, 180);
      if (lat === null || lng === null) throw fail(400, "invalid_position", "A position is required.");
      const accuracy = number(position?.accuracy, 0, 100000); const ageSeconds = number(position?.ageSeconds ?? 0, 0, 1e6) ?? 0;
      if (ageSeconds > MAX_FIX_AGE_SECONDS) throw fail(400, "stale_position", "That position is too old to be useful.");
      const at = now(); const alert = circle?.latestAlert ? await circle.latestAlert({ tenantId, userId, now: at }) : null;
      if (!alert || alert.alertId !== String(alertId || "")) throw fail(409, "no_active_alert", "There is no open emergency alert to send a location to.");
      if (alert.ended) throw fail(409, "alert_ended", "That emergency has been closed.", { ended: true });
      if (alert.lastUpdateAt && at.getTime() - Date.parse(alert.lastUpdateAt) < MIN_GAP_MS) return { status: 200, body: { shared: [], updates: alert.updates || 0, throttled: true, done: false } };
      if ((alert.updates || 0) >= MAX_UPDATES) return { status: 200, body: { shared: [], updates: alert.updates, done: true } };

      // Only members who were alerted, are still in the circle, and were chosen by the person to receive it.
      const current = circle.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }) : [];
      const alertedIds = new Set((alert.alerted || []).map(entry => entry.id));
      const recipients = current.filter(member => alertedIds.has(member.otherId) && member.shares?.emergencyLocation === true);
      if (!recipients.length) return { status: 200, body: { shared: [], updates: alert.updates || 0, done: true, reason: "nobody_chose_to_receive_it" } };

      const number_ = (alert.updates || 0) + 1; const name = userName || "Someone in your circle";
      const code = encodePlusCode(lat, lng);
      const body = `${number_ === 1 ? `${name} asked Kyro for urgent help, and their phone says they are` : `${name}'s location has been updated: they are now`} at ${code} (${lat.toFixed(5)}, ${lng.toFixed(5)})${accuracy !== null ? `, within about ${Math.max(5, Math.round(accuracy))} meters` : ""}${ageSeconds > 60 ? `, from about ${Math.round(ageSeconds / 60)} minutes ago` : ""}. Tap to open the map. If you can't reach them, call for help.`;
      const shared = [];
      for (const member of recipients) {
        try { await pushWithLink({ toUserId: member.otherId, title: `Emergency: ${name}'s location`, body, url: mapLink(lat, lng), key: `emergency-location:${alert.alertId}:${member.otherId}:${number_}` }); shared.push(member.otherName); }
        catch { /* one failed push must not stop the others */ }
      }
      // What is kept on the alert is a count and a time. Never the position.
      await circle.updateAlert({ tenantId, userId, memoryId: alert.memoryId, change: content => ({ ...content, updates: number_, lastUpdateAt: at.toISOString() }) });
      return { status: 200, body: { shared, updates: number_, done: number_ >= MAX_UPDATES } };
    }
  });
}

module.exports = Object.freeze({ createEmergencyLocation, MIN_GAP_MS, MAX_UPDATES, mapLink });
