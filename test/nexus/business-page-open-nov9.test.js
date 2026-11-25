"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// 9 November 2026 (owner: "make sure the grants page opens"): the Business & Grants page (/business-services.html) has its only link in the top bar, which the signed-in screen hides, and Kyro says
// "Open Business services" after saving a customer. Asking for the page, by voice or typing, now opens it; plain "open grants" and "open the business workspace" keep their older meaning.

const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
const line = name => { const m = app.match(new RegExp(`^const ${name} = .*;$`, "m")); assert.ok(m, name); return m[0]; };
const rules = new Function(`${["KYRO_OPEN_LEAD", "KYRO_OPEN_BIZ", "KYRO_OPEN_BUSINESS_PAGE"].map(line).join("\n")}\nreturn { KYRO_OPEN_BIZ, KYRO_OPEN_BUSINESS_PAGE };`)();

test("asking for the grants page or Business and Grants is a request for the page", () => {
  for (const said of ["Open the grants page.", "open grants page", "Open the grants screen", "Show me the grants page.", "Take me to the grants page", "Go to the grants section", "open the funding page",
    "Open Business and Grants.", "open business & grants", "Open Business services", "Take me to business services", "go to the business services page", "Kyro, open the grants and funding page", "Could you open the business and grants page",
    "show my business services page", "pull up the grants tab"]) {
    assert.ok(rules.KYRO_OPEN_BUSINESS_PAGE.test(said), said);
  }
  // the older meanings are left alone: grants read aloud, the customer list, questions and other sentences
  for (const said of ["Open grants.", "open the grants", "Show my grants", "Open the business workspace.", "open my customers", "open the CRM", "how do I find a grants page for veterans", "write a grant proposal", "Open the weather page", "open the map", "what business services are there"]) {
    assert.equal(rules.KYRO_OPEN_BUSINESS_PAGE.test(said), false, said);
  }
});

test("the page rule is tried before the older business rules, goes to the grants table for grants, and the page is reached by assigning the address", () => {
  const start = app.indexOf("function kyroHandleSpokenOpenOnce(");
  const body = app.slice(start, app.indexOf("\nfunction ", start + 20));
  const page = body.indexOf("KYRO_OPEN_BUSINESS_PAGE.test(said)");
  assert.ok(page > 0, "the page rule is in the handler");
  assert.ok(body.includes("window.location.assign(`/business-services.html${toGrants ? \"#grants\" : \"\"}`)"));
  assert.ok(body.includes('"Opening the grants page."') && body.includes('"Opening Business and Grants."'));
  // the rule sits before the map rule; the older business rule must not catch the page sentences first
  assert.ok(page < body.indexOf("const mapPlace = kyroMapPlace(said);"));
  for (const said of ["Open the grants page.", "Open Business and Grants.", "Open Business services"]) assert.equal(rules.KYRO_OPEN_BIZ.test(said), false, `the older rule does not take: ${said}`);
  // the page the rule opens has the grants table to land on
  const html = fs.readFileSync(path.join(__dirname, "..", "..", "public", "business-services.html"), "utf8");
  assert.ok(html.includes('id="grants"'));
});
