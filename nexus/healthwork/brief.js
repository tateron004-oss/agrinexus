"use strict";

const { visitsDigest } = require("./visits.js");
const { immunisationDigest } = require("./immunisation.js");
const { pregnancyDigest } = require("./pregnancy.js");
const { suppliesDigest } = require("./supplies.js");

// One short line for the morning brief. COUNTS ONLY: the brief is sent as a push notification, so no patient's name or detail ever appears in it.
// Says nothing when nothing is due.
function healthWorkLine(records, today) {
  if (!records?.length) return "";
  const visits = visitsDigest(records, today); const doses = immunisationDigest(records, today); const births = pregnancyDigest(records, today); const supplies = suppliesDigest(records, today);
  const parts = [];
  if (visits.due.length) parts.push(`${visits.due.length} ${visits.due.length === 1 ? "follow-up" : "follow-ups"} due`);
  if (doses.due.length) parts.push(`${doses.due.length} ${doses.due.length === 1 ? "vaccination" : "vaccinations"} due this week`);
  if (births.soon.length) parts.push(`${births.soon.length} ${births.soon.length === 1 ? "delivery" : "deliveries"} expected within two weeks`);
  if (supplies.out.length) parts.push(`${supplies.out.length} ${supplies.out.length === 1 ? "medicine" : "medicines"} out of stock`);
  if (supplies.low.length) parts.push(`${supplies.low.length} low`);
  if (supplies.expiring.length) parts.push(`${supplies.expiring.length} expiring within two months`);
  return parts.length ? `Health work: ${parts.join("; ")}.` : "";
}

module.exports = Object.freeze({ healthWorkLine });
