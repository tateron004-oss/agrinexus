"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const runtime = require("../../server/nexusAgenticBrainRuntime.js");

// Found live (legacy server.js route sweep, 2026-09-30): nexusAgenticBrainRuntime persists real
// chronic-care/RPM task content (userGoal, chronicIntake.userConcern, readings, providerReport) into a
// single shared, non-per-user db.profile array, with NO ownerId captured anywhere. listTasks(),
// updateTask(), providerRespond(), and verifyTask() all operated across every user's tasks -- any
// signed-in, non-restricted user could list, read, and mutate every other user's emergency-flagged
// healthcare tasks by taskId (which listTasks() itself handed them). Fixed end to end with an ownerId
// captured at task creation and threaded through every lookup/mutation/list path.

test("a task created by one account is invisible to listTasks() for a different account", async () => {
  const db = {};
  const created = await runtime.handleCommand({ command: "I take metformin daily for my diabetes and my blood sugar was 140 this morning" }, db, {}, "user-a");
  assert.ok(created.task, "a real task must have been created");

  const ownTasks = runtime.listTasks(db, "user-a").tasks;
  const otherTasks = runtime.listTasks(db, "user-b").tasks;
  assert.equal(ownTasks.length, 1, "the creating account must see its own task");
  assert.equal(otherTasks.length, 0, "a different account must not see another account's task");
});

test("a different account cannot cancel, complete, or otherwise mutate someone else's task by guessing its taskId", async () => {
  const db = {};
  const created = await runtime.handleCommand({ command: "I take metformin daily for my diabetes and my blood sugar was 140 this morning" }, db, {}, "user-a");
  const taskId = created.task.taskId;

  const hijackAttempt = runtime.updateTask({ taskId, status: "cancelled" }, db, "user-b");
  assert.equal(hijackAttempt.status, "not_found", "a cross-account update must be refused as not_found, not silently succeed");

  const stillActive = runtime.listTasks(db, "user-a").tasks.find(task => task.taskId === taskId);
  assert.notEqual(stillActive.status, "cancelled", "the real owner's task must be untouched by another account's attempt");

  const legitimate = runtime.updateTask({ taskId, status: "cancelled" }, db, "user-a");
  assert.equal(legitimate.status, "cancelled", "the real owner can still update their own task");
});

test("a different account cannot inject a fake provider response into someone else's task", async () => {
  const db = {};
  const created = await runtime.handleCommand({ command: "please prepare a provider report for my chronic care follow up" }, db, {}, "user-a");
  assert.ok(created.task?.providerQueueId, "this goal must produce a real provider-queue item to attack");

  const hijackAttempt = runtime.providerRespond({ queueId: created.task.providerQueueId, response: "forged by user-b" }, db, "user-b");
  assert.equal(hijackAttempt.status, "not_found", "a cross-account provider-respond must be refused as not_found");

  const legitimate = runtime.providerRespond({ queueId: created.task.providerQueueId, response: "real reviewer note" }, db, "user-a");
  assert.equal(legitimate.status, "local_response_recorded");
});

test("a different account cannot verify someone else's task, and each account's activity log is isolated", async () => {
  const db = {};
  const createdA = await runtime.handleCommand({ command: "I take metformin daily for my diabetes and my blood sugar was 140 this morning" }, db, {}, "user-a");
  await runtime.handleCommand({ command: "help me prepare for my agriculture cooperative meeting" }, db, {}, "user-b");

  const hijackAttempt = runtime.verifyTask({ taskId: createdA.task.taskId }, db, {}, "user-b");
  assert.equal(hijackAttempt.status, "not_found", "a cross-account verify must be refused as not_found");

  const activityA = runtime.listTasks(db, "user-a").activity;
  const activityB = runtime.listTasks(db, "user-b").activity;
  assert.ok(activityA.every(event => !activityB.includes(event)), "activity logs must not mix between accounts");
  assert.ok(activityA.some(event => event.eventType === "task_created"));
  assert.ok(activityB.some(event => event.eventType === "task_created"));
});
