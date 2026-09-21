"use strict";

const { taskDigest } = require("./tasks.js");
const { stockDigest } = require("./inventory.js");
const { livestockDigest } = require("./livestock.js");
const { partiesDigest } = require("./parties.js");
const { journalDigest } = require("./journal.js");

// One short line for the morning brief from the farmer's own records: jobs due or late, stock running low or expiring, animals due for a
// vaccination or expected to give birth, buyers to follow up, and open pest notes. Says nothing when there is nothing to say.
const names = (rows, pick, limit = 3) => { const list = rows.slice(0, limit).map(pick); return `${list.join(", ")}${rows.length > limit ? ` and ${rows.length - limit} more` : ""}`; };

function farmWorkLine(records, today) {
  if (!records?.length) return "";
  const tasks = taskDigest(records, today); const stock = stockDigest(records, today); const animals = livestockDigest(records, today); const parties = partiesDigest(records, today); const pests = journalDigest(records);
  const parts = [];
  if (tasks.overdue.length) parts.push(`${tasks.overdue.length} farm ${tasks.overdue.length === 1 ? "job is" : "jobs are"} overdue (${names(tasks.overdue, row => row.data.title)})`);
  if (tasks.dueToday.length) parts.push(`due today on the farm: ${names(tasks.dueToday, row => row.data.title)}`);
  if (animals.due.length) parts.push(`animal care due: ${names(animals.due, row => `${row.data.animal} ${row.data.type}`)}`);
  if (animals.births.length) parts.push(`${animals.births.length === 1 ? "a birth" : `${animals.births.length} births`} expected soon (${names(animals.births, row => row.data.animal)})`);
  if (stock.low.length) parts.push(`stock running low: ${names(stock.low, row => row.data.name)}`);
  if (stock.expiring.length) parts.push(`expiring within a month: ${names(stock.expiring, row => row.data.name)}`);
  if (parties.follow.length) parts.push(`follow up with ${names(parties.follow, row => row.data.party)}`);
  if (parties.orders.length) parts.push(`${parties.orders.length === 1 ? "an order is" : `${parties.orders.length} orders are`} due within three days`);
  if (pests.open.length) parts.push(`${pests.open.length} open pest or disease ${pests.open.length === 1 ? "note" : "notes"}`);
  return parts.length ? `On the farm: ${parts.join("; ")}.` : "";
}

module.exports = Object.freeze({ farmWorkLine });
