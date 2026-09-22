"use strict";

const { circleTurn, readCircleRequest } = require("./circle.js");
const { safetyTurn, safeTurn, readSafety, readSafe } = require("./safety.js");
const { createEmergencyLocation } = require("./emergency-location.js");
const { createCheckinService, parseCheckinControl, readCheckinAnswer } = require("./checkins.js");
const { createMedicationService, readMedicationRequest } = require("./medications.js");
const { readAudienceIntro, audienceIntroReply } = require("./audience.js");
const { formatTimeOfDay } = require("../brief/schedule.js");
const { validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");

// The companion core: a person's trusted circle, daily check-ins, and emergency handling, as one service the planner asks first (safety
// before anything else). Every answer is a plain conversational reply; the worker sweep does the proactive part (see checkins.js).
function createCompanion({ circle, checkinSettings, checkinState, medicationStore = null, memory = null, notifications, devices = null, autonomyControl = null, logger = null, now = () => new Date() } = {}) {
  // Every push names its tenant explicitly: links never cross communities, and nothing here is shared between concurrent requests.
  const checkins = createCheckinService({ settings: checkinSettings, state: checkinState, circle, notifications, devices, autonomyControl, logger, now,
    push: ({ tenantId, userId, title, body, key }) => notifications.enqueue({ tenantId, userId, channel: "push", scheduledAt: now(), idempotencyKey: key, content: { title, body, kind: "circle" } }),
    memoryUserName: args => circle.userName(args) });
  const medications = medicationStore ? createMedicationService({ store: medicationStore, circle, notifications, devices, autonomyControl, logger, now,
    push: ({ tenantId, userId, title, body, key }) => notifications.enqueue({ tenantId, userId, channel: "push", scheduledAt: now(), idempotencyKey: key, content: { title, body, kind: "medication" } }),
    memoryUserName: args => circle.userName(args) }) : null;

  // A push that opens a page when tapped (the emergency location opens a map).
  const pushWithLink = ({ tenantId, toUserId, title, body, url, key }) => notifications.enqueue({ tenantId, userId: toUserId, channel: "push", scheduledAt: now(), idempotencyKey: key, content: { title, body, url, kind: "circle" } });

  return {
    circle,
    checkins,
    medications,
    // Send a person's location to the members they chose, after an emergency alert they triggered (see emergency-location.js).
    async shareEmergencyLocation({ tenantId, userId, alertId, position }) {
      const userName = await circle.userName({ tenantId, userId });
      const service = createEmergencyLocation({ circle, now, pushWithLink: args => pushWithLink({ ...args, tenantId }) });
      return service.share({ tenantId, userId, userName, alertId, position });
    },
    // One sweep for everything proactive in the companion: check-ins, then medicine reminders. Counts are kept apart.
    sendDue: async args => ({ ...(await checkins.sendDue(args)), medications: medications ? await medications.sendDue(args) : null }),

    // The words to answer with, or null when the text is nothing for the companion; plus, for an emergency alert, { emergency } so the phone knows a
    // location should follow (only ever when someone in the circle has chosen to receive it).
    async handle({ command, context }) {
      const outcome = {};
      const response = await run({ command, context, outcome });
      return response ? { response, ...(outcome.emergency ? { emergency: outcome.emergency } : {}) } : null;
    },
    async turn(args) { return (await this.handle(args))?.response ?? null; }
  };

  async function run({ command, context, outcome }) {
      // Most messages are nothing for the companion: decide from the words alone, before any lookup.
      const audienceKind = readAudienceIntro(command.text);
      const needsName = Boolean(readSafety(command.text) || readSafe(command.text) || readCheckinAnswer(command.text) || parseCheckinControl(command.text) || readCircleRequest(command.text));
      if (!needsName && !audienceKind && !(medications && readMedicationRequest(command.text))) return null;
      const tenantId = command.tenantId; const userId = command.actorId;
      // The person's display name is only looked up when what they said needs it (an alert, an invitation); "I had lunch" does not.
      const userName = needsName ? await circle.userName({ tenantId, userId }) : "";
      const scope = { tenantId, userId, userName };
      const send = (toUserId, title, body, key) => notifications.enqueue({ tenantId, userId: toUserId, channel: "push", scheduledAt: now(), idempotencyKey: key, content: { title, body, kind: "circle" } });

      // "I'm safe" only means something while an alert of theirs is open; otherwise it falls through to an ordinary answer.
      const allClear = await safeTurn({ text: command.text, circle, push: send, ...scope, now: now(), outcome, locale: command.locale });
      if (allClear) return allClear;

      const safety = await safetyTurn({ text: command.text, circle, push: send, ...scope, now: now(), outcome, locale: command.locale, recordAlert: circle.recordAlert ? args => circle.recordAlert(args) : null });
      if (safety) return safety;

      // A veteran or elderly person self-identifying: real, already-built features surfaced honestly (see audience.js) -- never a
      // fabricated persona or crisis script. Checked after safety (so an actual emergency is never shadowed by this) and before
      // the check-in/circle handlers, since it is its own distinct statement, not an answer to something else Kyro asked.
      if (audienceKind) return audienceIntroReply(audienceKind, { hasMedications: Boolean(medications) });

      const answered = await checkins.answer({ ...scope, text: command.text, at: now() });
      if (answered) return answered;

      const medicine = medications ? await medications.turn({ ...scope, text: command.text, timeZone: context?.timeZone, at: now() }) : null;
      if (medicine) return medicine;

      const control = parseCheckinControl(command.text);
      if (control) {
        if (control.action === "stop") return await checkins.disable(scope) ? "Done. I've stopped your daily check-ins." : "You don't have daily check-ins set up.";
        if (control.action === "status") {
          const current = await checkins.status(scope);
          return current ? `I check in on you every day at ${formatTimeOfDay(current.timeOfDay)} (${current.timeZone} time). Say "stop my check-ins" any time.` : 'You don\'t have daily check-ins. Say "check in on me every morning at 8" to start.';
        }
        if (!control.timeOfDay) return "What time each day? For example 8am or 7:30.";
        const zoneGiven = Boolean(context?.timeZone) && validTimeZone(context.timeZone) === context.timeZone;
        const saved = await checkins.enable({ ...scope, timeOfDay: control.timeOfDay, timeZone: zoneGiven ? context.timeZone : DEFAULT_TIME_ZONE });
        const notes = [
          saved.sharingWith?.length
            ? `If I can't reach you and you say nothing to me for ${saved.graceHours} hours, I'll tell ${saved.sharingWith.join(", ")} — only that, never your answers.`
            : 'Nobody will be told anything. If you want someone to know when you miss one, invite them ("add name@example.com to my circle") and then say "share my check-ins with <name>".',
          control.timeGiven ? "" : `I chose ${formatTimeOfDay(saved.timeOfDay)}; tell me another time to change it.`,
          zoneGiven ? "" : `I do not know your time zone, so I used ${saved.timeZone}; tell me if you are elsewhere.`,
          saved.hasPushDevice === false ? "Alerts are not turned on for any of your devices yet, so I can't ask you until you turn them on." : "",
          'Say "stop my check-ins" any time.'
        ].filter(Boolean).join(" ");
        return `Done. ${saved.replaced ? "Your check-in is now" : "I'll check in on you"} every day at ${formatTimeOfDay(saved.timeOfDay)} (${saved.timeZone} time). ${notes}`;
      }

      return circleTurn({ text: command.text, circle, memory, push: send, locale: command.locale, ...scope });
  }
}

module.exports = Object.freeze({ createCompanion });
