"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const vm = require("node:vm");
const path = require("node:path");

// The live voice test (scripts/live-voice-suite) is itself checked here, without a browser: its cases are well formed, its judging is right, its pieces behave.
const suite = path.join(__dirname, "../../scripts/live-voice-suite");
const { ALL, select } = require(path.join(suite, "cases/index.js"));
const { evaluate, REFUSAL, makeEvaluator } = require(path.join(suite, "expect.js"));
const { parseArgs, summarise, formatResult } = require(path.join(suite, "run.js"));
const { CdpClient } = require(path.join(suite, "cdp.js"));
const { findChrome, chromeArguments } = require(path.join(suite, "chrome.js"));
const { buildInstallScript } = require(path.join(suite, "rig-page.js"));

const STEP_KEYS = new Set(["tap", "nth", "type", "choose", "say", "wait", "expect", "timeoutMs"]);
const EXPECT_KEYS = new Set(["screen", "app", "text", "notText", "keep", "buttons", "fields", "images", "frames", "links", "download", "intake", "orb", "said", "notSaid", "player", "model", "tool", "typed", "heard", "section", "allowRefusal"]);

test("every case has a unique id, an area, something to say, and an expectation that only uses known fields", () => {
  const ids = new Set();
  for (const entry of ALL) {
    assert.ok(entry.id && !ids.has(entry.id), `unique id: ${entry.id}`); ids.add(entry.id);
    assert.ok(entry.area, `${entry.id} has an area`);
    assert.ok(typeof (entry.say || entry.typed) === "string" && (entry.say || entry.typed).length > 2, `${entry.id} says something`);
    assert.ok(entry.expect && Object.keys(entry.expect).length, `${entry.id} expects something`);
    for (const key of Object.keys(entry.expect)) assert.ok(EXPECT_KEYS.has(key), `${entry.id}: unknown expectation ${key}`);
    for (const step of entry.then || []) {
      for (const key of Object.keys(step)) assert.ok(STEP_KEYS.has(key), `${entry.id}: unknown step field ${key}`);
      for (const key of Object.keys(step.expect || {})) assert.ok(EXPECT_KEYS.has(key), `${entry.id}: unknown expectation ${key} in a step`);
    }
  }
  assert.ok(ALL.length >= 80, "a broad list of cases");
});

test("every pattern in every case is a valid regular expression", () => {
  const patternKeys = ["text", "notText", "said", "notSaid", "tool", "typed", "heard", "section"];
  const check = (id, expect = {}) => {
    for (const key of patternKeys) if (typeof expect[key] === "string") assert.doesNotThrow(() => new RegExp(expect[key], "i"), `${id}.${key}`);
    for (const label of [].concat(expect.buttons || [])) assert.doesNotThrow(() => new RegExp(label, "i"), `${id}.buttons`);
    if (typeof expect.intake === "string") assert.doesNotThrow(() => new RegExp(expect.intake, "i"), `${id}.intake`);
    if (expect.player && typeof expect.player.state === "string") assert.doesNotThrow(() => new RegExp(expect.player.state, "i"), `${id}.player.state`);
  };
  for (const entry of ALL) { check(entry.id, entry.expect); for (const step of entry.then || []) { check(entry.id, step.expect); if (typeof step.tap === "string") assert.doesNotThrow(() => new RegExp(step.tap, "i"), `${entry.id}.tap`); } }
});

test("by default only the cases that change nothing run; --writes, --risky, --only, --area and --no-sound change that", () => {
  const plain = select({});
  assert.ok(plain.length > 40 && plain.every(entry => !entry.writes && !entry.risky));
  assert.ok(select({ writes: true }).some(entry => entry.writes) && select({ writes: true }).every(entry => !entry.risky));
  assert.ok(select({ risky: true }).some(entry => entry.risky));
  assert.deepEqual(select({ only: "docs-open,hello" }).map(entry => entry.id), ["docs-open", "hello"]);
  assert.ok(select({ area: "music" }).every(entry => entry.area === "music") && select({ area: "music" }).length >= 5);
  assert.ok(select({ sound: false }).every(entry => entry.needs !== "sound"));
  assert.ok(select({ only: "biz-plan-write" }).length === 1, "an id named with --only runs even if it writes");
});

const screen = (over = {}) => ({ kind: "list", app: "", keep: true, text: "YOUR SAVED DOCUMENTS 1, Field Notes", buttons: ["×", "Save document", "Field Notes"], fields: ["title", "textarea"], images: 0, frames: 0, links: 0, hasDownload: false, ...over });
const state = (over = {}) => ({ screens: [screen()], intake: "", modelSaid: ["Your saved documents, newest first: Field Notes."], pageLines: [], heard: ["Open documents."], tools: [], typed: [], player: { active: false, state: "", status: "", frames: 0 }, section: "dashboard", voiceActive: true, ...over });

test("the judging: kind, words, buttons, keep, pictures, downloads, forms, the orb, the player and the model's lines", () => {
  assert.equal(evaluate({ screen: "list", text: "saved documents", keep: true, buttons: ["Save document"] }, state()).pass, true);
  assert.match(evaluate({ screen: "checklists" }, state()).failures[0], /expected a checklists screen, found list/);
  assert.match(evaluate({ text: "reminders" }, state()).failures[0], /did not match/);
  assert.match(evaluate({ keep: false }, state()).failures[0], /go back by itself/);
  assert.match(evaluate({ buttons: ["Download"] }, state()).failures[0], /no button matching/);
  assert.equal(evaluate({ images: 2 }, state({ screens: [screen({ kind: "gallery", images: 5 })] })).pass, true);
  assert.match(evaluate({ images: 2 }, state()).failures[0], /found 0/);
  assert.equal(evaluate({ download: true }, state({ screens: [screen({ hasDownload: true })] })).pass, true);
  assert.equal(evaluate({ orb: true }, state({ screens: [] })).pass, true); assert.match(evaluate({ orb: true }, state()).failures[0], /expected the orb/);
  assert.equal(evaluate({ intake: "Question 1 of" }, state({ intake: "Your résumé Question 1 of 8 What is your full name" })).pass, true);
  assert.equal(evaluate({ intake: false }, state()).pass, true); assert.match(evaluate({ intake: false }, state({ intake: "Telehealth request Question 2" })).failures[0], /still on the screen/);
  assert.equal(evaluate({ player: { active: true, state: "playing" } }, state({ player: { active: true, state: "playing" } })).pass, true);
  assert.match(evaluate({ player: { active: true } }, state()).failures[0], /to be playing/);
  assert.equal(evaluate({ said: "Field Notes" }, state()).pass, true); assert.match(evaluate({ said: "weather" }, state()).failures[0], /nothing said aloud matched/);
  assert.equal(evaluate({ model: true }, state({ modelSaid: [], pageLines: ["Here are your notes."] })).pass, true); assert.match(evaluate({ model: true }, state({ modelSaid: [] })).failures[0], /nothing was said aloud/);
  assert.equal(evaluate({ tool: "records" }, state({ tools: ["nexus_everyday_records"] })).pass, true);
  assert.equal(evaluate({ section: "map" }, state({ section: "map" })).pass, true);
  assert.equal(evaluate({ text: "Persisted", notText: "Persisted" }, state({ screens: [screen({ text: "Persisted: true" })] })).pass, false);
});

test("a screen that opened is a failure when the voice says it cannot open or see it (the refusals found in the owner's test), and ordinary answers are not", () => {
  for (const line of ["I can't open documents from here.", "I can't see a current to-do list from here.", "I cannot show the grants screen details.", "Please open your Documents screen on your device.", "I can\u2019t directly open the calendar from here, but you can open it on your screen.", "I'm unable to access your notes."]) {
    assert.ok(REFUSAL.test(line), line);
    assert.match(evaluate({ screen: "list" }, state({ modelSaid: [line] })).failures.join(" "), /the voice said it could not do it/, line);
  }
  for (const line of ["Your saved documents, newest first: 1, Field Notes.", "I can help with that. Here are your notes.", "I cannot diagnose, but I can record the reading.", "I can't tell you the exact dose."]) {
    assert.ok(!REFUSAL.test(line), line);
    assert.equal(evaluate({ screen: "list" }, state({ modelSaid: [line] })).pass, true, line);
  }
  assert.equal(evaluate({ screen: "list", allowRefusal: true }, state({ modelSaid: ["I can't open that."] })).pass, true);
  assert.equal(evaluate({ orb: true }, state({ screens: [], modelSaid: ["I can't open that."] })).pass, true, "the orb is the expected end: nothing was opened");
});

test("what the speech-to-text wrote is a warning, never a failure; a dropped voice session is a failure", () => {
  const result = evaluate({ screen: "list", heard: "show my notes" }, state({ heard: ["Go my notes."] }));
  assert.equal(result.pass, true); assert.match(result.warnings[0], /wrote "Go my notes\."/);
  assert.match(evaluate({ screen: "list" }, state({ voiceActive: false }), { requireVoiceActive: true }).failures.join(" "), /no longer connected/);
});

test("the judge is one self-contained function (the same source runs in the page)", () => {
  const sandbox = vm.createContext({});
  const inPage = vm.runInContext(`(${makeEvaluator.toString()})()`, sandbox);
  assert.equal(inPage.evaluate({ screen: "list" }, state()).pass, true);
  assert.equal(inPage.evaluate({ screen: "gallery" }, state()).pass, false);
});

test("the page script is valid JavaScript and installs one rig with the run functions", () => {
  const script = buildInstallScript();
  assert.doesNotThrow(() => new vm.Script(script));
  for (const name of ["runCases", "runCase", "runSteps", "startVoice", "settle", "say", "state", "tap", "type", "chooseFile", "cleanup", "until"]) assert.match(script, new RegExp(`rig\\.${name}\\b`), name);
  assert.match(script, /nexusPermanentMicrophoneBtn/); assert.match(script, /\/api\/voice\/speak/);
});

test("the command line, the summary and the printed result", () => {
  assert.deepEqual(parseArgs(["--url", "http://x.test/", "--writes", "--only", "a,b", "--no-sound"]), { url: "http://x.test", writes: true, risky: false, sound: false, show: false, only: "a,b", area: "", out: "" });
  assert.throws(() => parseArgs(["--nope"]), /Unknown option/);
  const results = [{ id: "a", status: "pass", ms: 1500, failures: [], warnings: ["w"] }, { id: "b", status: "fail", ms: 2000, failures: ["no button"], warnings: [] }, { id: "c", status: "error", ms: 10, failures: ["boom"], warnings: [] }];
  assert.deepEqual(summarise(results), { total: 3, passed: 1, failed: 1, errors: 1, warnings: 1 });
  assert.match(formatResult(results[1]), /^FAIL  b  \(2\.0s\)\n {8}- no button$/);
});

test("the Chrome that is started allows sound without a tap and a pretend microphone, in its own profile, and is found where Chrome normally is", () => {
  const args = chromeArguments({ port: 9222, profileDir: "C:\\tmp\\p", headless: true });
  for (const flag of ["--remote-debugging-port=9222", "--autoplay-policy=no-user-gesture-required", "--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream", "--user-data-dir=C:\\tmp\\p", "--headless=new"]) assert.ok(args.includes(flag), flag);
  assert.ok(!chromeArguments({ port: 1, profileDir: "x", headless: false }).includes("--headless=new"));
  assert.equal(findChrome(candidate => candidate === "/usr/bin/chromium"), "/usr/bin/chromium");
  assert.equal(findChrome(() => false), "");
});

test("the DevTools client matches answers to requests, delivers events, rejects errors and reads page values", async () => {
  class FakeSocket {
    constructor() { this.handlers = {}; setTimeout(() => this.handlers.open && this.handlers.open({}), 0); }
    addEventListener(name, fn) { this.handlers[name] = fn; }
    send(text) {
      const message = JSON.parse(text);
      setTimeout(() => {
        if (message.method === "Runtime.evaluate") this.handlers.message({ data: JSON.stringify({ id: message.id, result: message.params.expression === "boom" ? { exceptionDetails: { exception: { description: "Error: boom" } } } : { result: { value: { answer: 42 } } } }) });
        else if (message.method === "Bad.method") this.handlers.message({ data: JSON.stringify({ id: message.id, error: { code: -32601, message: "not found" } }) });
        else { this.handlers.message({ data: JSON.stringify({ method: "Page.loadEventFired", params: { ok: true } }) }); this.handlers.message({ data: JSON.stringify({ id: message.id, result: { fine: true } }) }); }
      }, 0);
    }
    close() { this.closedByTest = true; }
  }
  const client = await new CdpClient("ws://x", { WebSocketImpl: FakeSocket }).open();
  const events = []; client.on("Page.loadEventFired", params => events.push(params));
  assert.deepEqual(await client.send("Page.enable"), { fine: true }); assert.deepEqual(events, [{ ok: true }]);
  assert.deepEqual(await client.evaluate("1+1"), { answer: 42 });
  await assert.rejects(() => client.evaluate("boom"), /Error: boom/);
  await assert.rejects(() => client.send("Bad.method"), /not found \(-32601\)/);
  client.close();
});
