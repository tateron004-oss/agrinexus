"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const dispatch = require("../../nexus/business/voice-dispatch.js");

// Found by the live voice test: the voice model asks for "a business summary for Kyro Test Workspace" (it adds the workspace's name) and the business module refused it as not understood (HTTP 422),
// so the voice said "I can't generate a business summary" while the plain sentence worked.
test("a business summary, in the ways it is asked and with the workspace's name added, is the business dashboard", () => {
  for (const said of ["Give me a business summary", "Give me a business summary for Kyro Test Workspace", "Give me a summary of my business", "Give me a summary of my church", "Show the summary for Kyro Test Workspace", "An overview of the Umoja workspace", "Show my business dashboard", "How is my business doing"]) {
    assert.equal(dispatch.classify(said), "dashboard", said);
  }
  for (const said of ["Give me a summary of the farm workspace", "Show me a health summary for my workspace", "Create a business plan", "Add a client named Amina", "Open the business workspace"]) assert.notEqual(dispatch.classify(said), "dashboard", said);
});
