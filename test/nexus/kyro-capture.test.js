"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Capture = require("../../public/kyro-capture.js");

// "Look at this", "what is wrong with this plant", "read this letter": Kyro opens the camera, says to hold it up, counts down, takes the picture, and the caller asks about it. With no camera it says so and offers a file
// chooser. The way to ask about a photo used to be an Upload button only.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");
const stage = fs.readFileSync(path.join(root, "public/kyro-task-stage.js"), "utf8");

test("what counts as a request to look at something, and what does not", () => {
  for (const text of ["look at this", "what is wrong with this plant", "what is wrong with this leaf", "Hey Kyro, can you look at this tomato", "read this letter", "read this label for me", "take a photo", "take a picture of this",
    "what does this say", "describe this photo", "I want to show you something", "is there something wrong with this maize", "scan this document", "identify this insect", "translate this paper", "what is this plant"]) assert.equal(Capture.isLookRequest(text), true, text);
  for (const text of ["find a picture of a maize armyworm", "show me pictures of tomato blight", "how do I take a photo", "what is a leaf", "show me videos about irrigation", "tell me about maize", "what is the weather", "read my notes",
    "look at the weather", "hello", "what does the board say", "who is this", ""]) assert.equal(Capture.isLookRequest(text), false, text);
});

function fakeDom() {
  const made = [];
  const make = tag => {
    const e = { tag, children: [], attrs: {}, listeners: {}, className: "", textContent: "", removed: false, hidden: false, muted: false, autoplay: false, videoWidth: 1920, videoHeight: 1080, srcObject: null,
      setAttribute(n, v) { this.attrs[n] = String(v); }, appendChild(c) { this.children.push(c); return c; }, addEventListener(type, fn) { this.listeners[type] = fn; }, remove() { this.removed = true; },
      play() { return Promise.resolve(); }, getContext() { return { drawImage() {} }; }, toBlob(cb) { cb({ size: 1234, type: "image/jpeg" }); } };
    made.push(e); return e;
  };
  const body = make("body"); const head = make("head");
  return { made, doc: { body, head, createElement: make, getElementById: id => made.find(e => e.id === id && !e.removed) || null, querySelectorAll: s => (s === "[data-kyro-capture]" ? made.filter(e => e.attrs["data-kyro-capture"] !== undefined && !e.removed) : []) } };
}
const flush = () => new Promise(resolve => setImmediate(resolve));

test("it opens the camera, counts 3, 2, 1, takes the picture, stops the camera, and hands over the picture", async () => {
  const { doc, made } = fakeDom(); const waits = []; const photos = []; let stopped = 0;
  const track = { stop() { stopped += 1; } };
  const nav = { mediaDevices: { getUserMedia: async constraints => { assert.deepEqual(constraints, { video: { facingMode: { ideal: "environment" } }, audio: false }, "the back camera, no sound"); return { getTracks: () => [track] }; } } };
  const controller = Capture.open(doc, nav, { onPhoto: blob => photos.push(blob) }, { wait: (fn, ms) => waits.push({ fn, ms }) });
  assert.ok(controller && controller.cancel);
  const screen = made.find(e => e.attrs["data-kyro-capture"] !== undefined);
  assert.equal(screen.attrs.role, "dialog");
  const line = screen.children.find(c => c.className === "kyro-capture-line"); const count = screen.children.find(c => c.className === "kyro-capture-count");
  assert.equal(line.textContent, "Hold it up to the camera. I will take the picture in 3.");
  await flush();
  assert.equal(count.textContent, "3"); assert.equal(waits.length, 1); assert.equal(waits[0].ms, 1000);
  waits.shift().fn(); assert.equal(count.textContent, "2");
  waits.shift().fn(); assert.equal(count.textContent, "1");
  waits.shift().fn();
  assert.equal(photos.length, 1); assert.equal(photos[0].type, "image/jpeg");
  assert.equal(stopped, 1, "the camera is switched off as soon as the picture is taken");
  assert.equal(made.filter(e => e.attrs["data-kyro-capture"] !== undefined && !e.removed).length, 0, "and the screen comes down");
});

test("closing it cancels, switches the camera off, and no picture is taken; a late camera is switched off too", async () => {
  const { doc, made } = fakeDom(); let cancelled = 0; const photos = []; let stopped = 0; let release;
  const nav = { mediaDevices: { getUserMedia: () => new Promise(resolve => { release = () => resolve({ getTracks: () => [{ stop() { stopped += 1; } }] }); }) } };
  Capture.open(doc, nav, { onCancel: () => { cancelled += 1; }, onPhoto: b => photos.push(b) }, { wait: () => {} });
  const screen = made.find(e => e.attrs["data-kyro-capture"] !== undefined);
  const close = screen.children.find(c => c.className === "kyro-capture-close"); assert.equal(close.attrs["aria-label"], "Close");
  close.listeners.click(); assert.equal(cancelled, 1);
  release(); await flush();
  assert.equal(stopped, 1, "a camera that arrives after the person closed it is not left on"); assert.equal(photos.length, 0);
});

test("with no camera, a refused permission or an old browser it says so and offers to choose a photo instead", async () => {
  for (const nav of [{}, { mediaDevices: {} }, { mediaDevices: { getUserMedia: async () => { const e = new Error("no"); e.name = "NotAllowedError"; throw e; } } }]) {
    const { doc, made } = fakeDom(); const reasons = []; let chose = 0;
    Capture.open(doc, nav, { onUnavailable: r => reasons.push(r), onFile: () => { chose += 1; } }, { wait: () => {} });
    await flush();
    const screen = made.find(e => e.attrs["data-kyro-capture"] !== undefined);
    const line = screen.children.find(c => c.className === "kyro-capture-line");
    assert.equal(line.textContent, "I can't open the camera here. Choose a photo instead.");
    const choose = screen.children.find(c => c.className === "kyro-capture-choose"); assert.equal(choose.textContent, "Choose a photo");
    choose.listeners.click(); assert.equal(chose, 1); assert.equal(reasons.length, 1);
  }
  assert.equal(Capture.TEXT.sw.noCamera, "Siwezi kufungua kamera hapa. Chagua picha badala yake.");
});

test("it is wired: spoken and typed requests open it, the tool-call guard leaves the sentence to it, the picture is uploaded and described by the file-analysis tool, and it never diagnoses", () => {
  assert.match(app, /if \(window\.KyroCapture\?\.isLookRequest\?\.\(trimmed\) && startKyroCapture\(trimmed, \{ source \}\)\) return true;/);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroCapture\?\.isLookRequest\?\.\(text\) && startKyroCapture\(text, \{ source: options\.source \|\| "typed" \}\)\) return true;/);
  assert.match(app, /window\.KyroCapture\?\.isLookRequest\?\.\(command\) \|\| kyroSpokenOpenOwns\(command\)\);/);
  assert.match(app, /return "Kyro is opening the camera for the person to show it, and will describe it\. Say nothing now\."/);
  const ask = app.slice(app.indexOf("async function kyroAskAboutPicture"), app.indexOf("// ---- Answer-first (the Jarvis way)"));
  assert.match(ask, /kyroFetchWithTimeout\("\/api\/nexus\/upload"/); assert.match(ask, /name: "nexus_file_document_analysis"/); assert.match(ask, /fileId: uploaded\.fileId/);
  assert.match(ask, /kyroShowResultScreen\("nexus_file_document_analysis", command, \{ \.\.\.result, ok: true, status: "completed", response: answer \}\)/, "the description is the answer on the screen");
  const closing = app.slice(app.indexOf("function kyroPictureClosing"), app.indexOf("async function kyroAskAboutPicture"));
  assert.match(closing, /I can't diagnose from a picture\. Please show it to a clinician or a pharmacist\./);
  assert.match(closing, /I can't tell you the cause or name a spray from a picture\. Please show it to your local agricultural extension officer\./);
  assert.match(app, /if \(document\.querySelector\("\[data-kyro-capture\]"\)\) return true;/, "while the camera is showing nothing clears it by itself");
  assert.match(app, /KYRO_BODY_SCREEN_SELECTOR = "[^"]*\[data-kyro-capture\]"/, "returning to the orb takes it down");
  assert.ok(stage.includes("[data-kyro-capture]"), "the task stage shows only it");
  const tag = html.indexOf("/kyro-capture.js"); assert.ok(tag > 0 && tag < html.indexOf("/app.js")); assert.ok(sw.includes("/kyro-capture.js"));
});
