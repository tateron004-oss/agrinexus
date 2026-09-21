"use strict";

const { localDay, validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");
const { continueGuided, expired, YES, NO } = require("../farmwork/guided.js");
const { clean } = require("../farmwork/parse.js");
const profile = require("./profile.js");
const patients = require("./patients.js");
const visits = require("./visits.js");
const immunisation = require("./immunisation.js");
const pregnancy = require("./pregnancy.js");
const supplies = require("./supplies.js");
const privacy = require("./privacy.js");
const referrals = require("./referrals.js");
const reports = require("./reports.js");
const swahili = require("./swahili.js");

// The health worker's record-keeping front door (community health workers, nurses, midwives, clinical officers, clinic staff). Same shape as the farm
// toolkit: an open guided question first, then each tool in turn, and a tool answers only when the words are plainly for it and (for anything about a
// patient) the patient is one of this person's own. Everything else carries on to normal planning. Kyro records what the worker says; it does not
// diagnose, interpret a reading, or suggest treatment. A tool may answer with a string, or { report } (a printable letter or report).
const MODULES = [swahili, profile, privacy, patients, visits, immunisation, pregnancy, supplies, referrals, reports];
const TEMPLATES = Object.assign({}, ...MODULES.map(mod => mod.templates || {}));
const CONFIRMS = Object.assign({
  "remove-record": async (ctx, action) => (await ctx.store.remove({ tenantId: ctx.tenantId, userId: ctx.userId, memoryId: action.memoryId }) ? `Done. I've removed ${action.label}.` : `I couldn't find ${action.label} any more.`)
}, ...MODULES.map(mod => mod.confirms || {}));

// Which people have a guided conversation open (in this process), per store, so a message with none open costs no lookup. A lost one simply expires.
const openByStore = new WeakMap();
const sessionsOf = store => { let map = openByStore.get(store); if (!map) { map = new Map(); openByStore.set(store, map); } return map; };
const keyOf = args => `${args.tenantId}:${args.userId}`;
function track(store) {
  const open = sessionsOf(store);
  return new Proxy(store, { get(target, prop) {
    if (prop === "setSession") return async args => { open.set(keyOf(args), Date.now() + 31 * 60000); return target.setSession(args); };
    if (prop === "clearSession") return async args => { open.delete(keyOf(args)); return target.clearSession(args); };
    const value = target[prop]; return typeof value === "function" ? value.bind(target) : value;
  } });
}

async function healthWorkTurn({ text, store, tenantId, userId, now = new Date(), timeZone, roles = [], memory = null, notifications = null, nameOf = null }) {
  if (!store?.getSession || !text) return null;
  const wrapped = track(store); const open = sessionsOf(store);
  const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
  let hasData = null;
  const ctx = { text: clean(text), store: wrapped, tenantId, userId, now, zone, today: localDay(now, zone), roles, memory, notifications, nameOf,
    hasHealthData: async () => { if (hasData === null) { try { hasData = (await store.listAll({ tenantId, userId, limit: 50 })).some(row => row.collection !== "audit"); } catch { hasData = false; } } return hasData; },
    // Calendar items are made by the modules with a patient number only, never a name (see visits.js).
    personal: memory?.addPersonalItem ? { add: content => memory.addPersonalItem({ tenantId, userId, content }) } : null };
  try {
    if ((open.get(keyOf({ tenantId, userId })) || 0) > Date.now()) {
      const session = await store.getSession({ tenantId, userId });
      if (session && !expired(session)) {
        if (session.collection === "_confirm") {
          const action = session.action;
          // Something that cannot be undone may ask for an exact phrase: only those words go ahead, and a plain "yes" is asked again.
          if (action?.phrase) {
            if (ctx.text.toLowerCase() === action.phrase && CONFIRMS[action.type]) { await wrapped.clearSession({ tenantId, userId }); return await CONFIRMS[action.type](ctx, action); }
            if (YES.test(ctx.text)) return `To be sure, type exactly: ${action.phrase.toUpperCase()}. Or say no to leave everything as it is.`;
          } else if (YES.test(ctx.text) && CONFIRMS[action?.type]) { await wrapped.clearSession({ tenantId, userId }); return await CONFIRMS[action.type](ctx, action); }
          await wrapped.clearSession({ tenantId, userId });
          if (NO.test(ctx.text)) return "Okay, I've left it as it is.";
        } else if (TEMPLATES[session.collection]) {
          const answer = await continueGuided(ctx, session, TEMPLATES[session.collection]);
          if (answer) return answer;
        } else await wrapped.clearSession({ tenantId, userId });
      } else { await wrapped.clearSession({ tenantId, userId }); }
    }
    for (const mod of MODULES) { const answer = await mod.handle(ctx); if (answer) return answer; }
  } catch { return null; }
  return null;
}

module.exports = Object.freeze({ healthWorkTurn, MODULES, TEMPLATES });
