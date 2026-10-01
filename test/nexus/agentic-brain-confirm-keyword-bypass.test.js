"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { handleCommand } = require("../../server/nexusAgenticBrainRuntime");

// handleCommand() decided whether to run productionRuntime.execute() with
// confirmed:true using `body.confirmed === true || parts.includes("confirm")`
// -- and `parts.includes("confirm")` is just a `/confirm/.test(text)` match
// against the SAME free-text goal that creates the task. A brand-new task
// that has never been shown to the user for confirmation could be created
// and immediately force-executed in one turn merely because the goal text
// happened to contain the substring "confirm" (e.g. "...please confirm this
// for my provider"), for capabilities (medical.chronicCare/rpm/etc.) that are
// marked requiresConfirmation:true in the capability registry precisely to
// prevent that.
test("the word 'confirm' inside the very message that creates a task must not itself count as confirmation", async () => {
  const db = {};
  const result = await handleCommand({
    command: "My blood pressure is 150 over 95, please confirm this for my provider."
  }, db, process.env);

  assert.equal(result.task.status, "waiting_for_confirmation",
    "a capability that requiresConfirmation must stay pending until a separate, explicit confirm step");
  assert.equal(result.execution, null,
    "no execution should be attempted just because the task-creating message contains the word 'confirm'");
});

test("explicitly confirming an already-pending task (separate turn) still executes", async () => {
  const db = {};
  const created = await handleCommand({
    command: "My blood pressure is 150 over 95, note it for my provider."
  }, db, process.env);
  assert.equal(created.task.status, "waiting_for_confirmation");

  const confirmed = await handleCommand({
    command: "confirm",
    taskId: created.task.taskId
  }, db, process.env);

  assert.ok(confirmed.execution, "a genuine confirm turn on an already-pending task must still be allowed to execute");
});

// Separately: createTask() recomputed task.status after logging an RPM/RTM
// reading using `task.requiresConfirmation` -- a property that is never set
// on the task object (it only exists on the `plan` object) -- so it always
// read as undefined/false and silently downgraded the task to "active"
// even when the plan actually required confirmation.
test("a task created with an RPM reading already present keeps waiting_for_confirmation when the plan requires it", async () => {
  const db = {};
  const result = await handleCommand({
    command: "My blood pressure is 150 over 95, note it for my provider."
  }, db, process.env);

  assert.equal(result.task.status, "waiting_for_confirmation",
    "logging the RPM reading must not silently flip a confirmation-required task to active");
});
