"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");

// Found live: nexus_deep_research's real citations (title + real source URL,
// computed by the same backend that powers nexus_live_knowledge) were placed
// only in the sibling `citations` field -- the actual channel this tool is
// invoked through (typed chat, realtime voice) only ever reads back the
// flattened `response` text, which never included them. "Never fabricates
// sources" is the tool's whole differentiator, so the real sources must
// reach the text a person actually sees/hears, not just a side field nothing
// reads.
//
// Full network-backed end-to-end testing would require a real Tavily/Brave/
// Exa/OpenAI-web-search call (this tool has no offline/simulated fallback
// path, unlike Twilio/pharmacy/mobile-clinic), so this verifies the exact
// fix logic directly instead: extracts the response-building expression for
// this tool and evaluates it against representative real and empty citation
// arrays.
test("nexus_deep_research's response includes real citation titles and URLs when sources exist", () => {
  const start = source.indexOf('if (toolName === "nexus_deep_research")');
  assert.ok(start > 0, "could not locate the nexus_deep_research handler");
  const end = source.indexOf("\n  }", start);
  const body = source.slice(start, end);
  const responseLineMatch = body.match(/response: (`\$\{research\.summary[\s\S]*?`),/);
  assert.ok(responseLineMatch, "could not locate the response-building expression");
  // eslint-disable-next-line no-eval -- reconstructing the real, already-reviewed expression from source, not arbitrary input
  const buildResponse = research => eval(responseLineMatch[1]);

  const withSources = buildResponse({
    summary: "Fall armyworm is a major maize pest across East Africa.",
    citations: [
      { title: "FAO Fall Armyworm Guidance", url: "https://fao.org/fall-armyworm" },
      { title: "CABI Pest Alert", url: "https://cabi.org/pest-alert" }
    ]
  });
  assert.match(withSources, /Fall armyworm is a major maize pest/);
  assert.match(withSources, /FAO Fall Armyworm Guidance/);
  assert.match(withSources, /https:\/\/fao\.org\/fall-armyworm/);
  assert.match(withSources, /CABI Pest Alert/);

  const withNoSources = buildResponse({ summary: "No sources were found for that query.", citations: [] });
  assert.equal(withNoSources, "No sources were found for that query.", "no fabricated 'Sources:' section when there are genuinely none");
});
