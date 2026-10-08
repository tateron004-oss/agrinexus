#!/usr/bin/env node
"use strict";

// Read-only. Summarises voice stall reports from a server log, so the real cause of "the orb went quiet" can be read from production.
//   node scripts/voice-stall-summary.js path/to/render-log.txt [more.txt ...]
//   some-log-command | node scripts/voice-stall-summary.js -
// (The same summary, from the reports the server keeps itself, is at GET /api/admin/voice/stall-summary for the owner account.)
// A report holds states, numbers and event type names only: no speech, names or keys.

const fs = require("node:fs");
const { parseStallLogLines, summariseStallReports } = require("../server/voice-stall-reports.js");

function readInputs(args) {
  if (!args.length) return null;
  return args.map(arg => (arg === "-" ? fs.readFileSync(0, "utf8") : fs.readFileSync(arg, "utf8"))).join("\n");
}

function formatSeconds(ms) { return ms ? `${(ms / 1000).toFixed(1)}s` : "-"; }
function table(title, rows) {
  if (!rows.length) return "";
  return `\n${title}\n${rows.map(row => `  ${String(row.count).padStart(4)}  ${row.name}`).join("\n")}\n`;
}

function render(summary) {
  if (!summary.total) return "No [voice-stall] lines found.\n";
  return [
    `Voice stall reports: ${summary.total} (${summary.distinctSessions} sessions)${summary.first ? `, ${summary.first} to ${summary.last}` : ""}`,
    "",
    summary.readout,
    table("By phase (what the session was doing)", summary.byPhase),
    table("By kind", summary.byKind),
    table("By tool that was running", summary.byTool),
    table("By last event the session saw", summary.byLastEventInRing),
    table("By connection (peer/ice/data channel)", summary.byConnection),
    table("By page visibility", summary.byTabVisible),
    `\nWaited before the report: median ${formatSeconds(summary.waitedMs.median)}, 90th percentile ${formatSeconds(summary.waitedMs.p90)}, longest ${formatSeconds(summary.waitedMs.max)}`,
    `Session age at report: median ${formatSeconds(summary.sessionAgeMs.median)}, 90th percentile ${formatSeconds(summary.sessionAgeMs.p90)}, longest ${formatSeconds(summary.sessionAgeMs.max)}`,
    `Offline at report: ${summary.offline}. Automatic reply was off: ${summary.autoResponseOff}. Back from the background (5s+): ${summary.afterBackground}. Start key already expired: ${summary.keyExpiredBeforeStall} of ${summary.keyKnownReports} that reported it.`,
    ""
  ].join("\n");
}

if (require.main === module) {
  const input = readInputs(process.argv.slice(2));
  if (input === null) { console.error("Usage: node scripts/voice-stall-summary.js <server log file> [...]   (use - for standard input)"); process.exit(2); }
  process.stdout.write(render(summariseStallReports(parseStallLogLines(input))));
}

module.exports = { render };
