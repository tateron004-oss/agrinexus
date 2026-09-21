"use strict";

const { localDay, validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");
const { continueGuided, expired, YES, NO } = require("./guided.js");
const { clean } = require("./parse.js");
const fields = require("./fields.js");
const tasks = require("./tasks.js");
const inventory = require("./inventory.js");
const livestock = require("./livestock.js");
const journal = require("./journal.js");
const money = require("./money.js");
const parties = require("./parties.js");
const budget = require("./budget.js");
const coop = require("./coop.js");
const board = require("./board.js");
const library = require("./library.js");
const reports = require("./reports.js");
const swahili = require("./swahili.js");

// The farm toolkit's front door. Order: an open guided conversation first (the person's words are its answers), then each tool in turn.
// A tool answers only when the words are plainly for it (returns null otherwise), so everything else carries on to normal planning.
// A tool may answer with a string (a conversational reply) or { plan } (a governed step, such as a printable report).
const MODULES = [swahili, fields, tasks, inventory, livestock, journal, money, parties, budget, coop, board, library, reports];
const TEMPLATES = Object.assign({}, ...MODULES.map(mod => mod.templates || {}));
const CONFIRMS = Object.assign({
  // Removing any record (a field, an animal, a buyer...) after the person said yes. Records are soft-deleted.
  "remove-record": async (ctx, action) => (await ctx.store.remove({ tenantId: ctx.tenantId, userId: ctx.userId, memoryId: action.memoryId }) ? `Done. I've removed ${action.label}.` : `I couldn't find ${action.label} any more.`)
}, ...MODULES.map(mod => mod.confirms || {}));

// Which people have a guided conversation open (in this process), so a message with none open costs no lookup at all. A conversation lost
// to a restart simply expires; the person is asked again.
const openSessions = new Map();
const keyOf = args => `${args.tenantId}:${args.userId}`;
function track(store) {
  return new Proxy(store, { get(target, prop) {
    if (prop === "setSession") return async args => { openSessions.set(keyOf(args), Date.now() + 31 * 60000); return target.setSession(args); };
    if (prop === "clearSession") return async args => { openSessions.delete(keyOf(args)); return target.clearSession(args); };
    const value = target[prop]; return typeof value === "function" ? value.bind(target) : value;
  } });
}

async function farmWorkTurn({ text, store, tenantId, userId, now = new Date(), timeZone, roles = [], memory = null, notifications = null, nameOf = null }) {
  if (!store?.getSession || !text) return null;
  const wrapped = track(store);
  const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
  let entries = null; let hasFarm = null;
  const ctx = { text: clean(text), store: wrapped, tenantId, userId, now, zone, today: localDay(now, zone), roles, memory, notifications, nameOf,
    hasFarmData: async () => { if (hasFarm === null) { try { hasFarm = (await store.listAll({ tenantId, userId, limit: 1 })).length > 0; } catch { hasFarm = false; } } return hasFarm; },
    farmEntries: async () => { if (entries === null) { try { entries = memory?.listFarmEntries ? (await memory.listFarmEntries({ tenantId, userId })).map(row => row.content) : []; } catch { entries = []; } } return entries; },
    personal: memory?.addPersonalItem ? { add: content => memory.addPersonalItem({ tenantId, userId, content }), list: async () => (await memory.listPersonalItems({ tenantId, userId })).map(row => row.content) } : null };
  try {
    if ((openSessions.get(keyOf({ tenantId, userId })) || 0) > Date.now()) {
      const session = await store.getSession({ tenantId, userId });
      if (session && !expired(session)) {
        if (session.collection === "_confirm") {
          if (YES.test(ctx.text) && CONFIRMS[session.action?.type]) { await wrapped.clearSession({ tenantId, userId }); return await CONFIRMS[session.action.type](ctx, session.action); }
          await wrapped.clearSession({ tenantId, userId });
          if (NO.test(ctx.text)) return "Okay, I've left it as it is.";
          // anything else is a new request: the question is dropped and the words are handled normally below
        } else if (TEMPLATES[session.collection]) {
          const answer = await continueGuided(ctx, session, TEMPLATES[session.collection]);
          if (answer) return answer; // null: the person moved on to something else, so their words are handled normally below
        } else await wrapped.clearSession({ tenantId, userId });
      } else { await wrapped.clearSession({ tenantId, userId }); }
    }
    for (const mod of MODULES) { const answer = await mod.handle(ctx); if (answer) return answer; }
  } catch { return null; }
  return null;
}

module.exports = Object.freeze({ farmWorkTurn, MODULES, TEMPLATES });
