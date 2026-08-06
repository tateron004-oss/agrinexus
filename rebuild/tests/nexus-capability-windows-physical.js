"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { chromium } = require("playwright");
const { productionUrlFromEnv } = require("../../scripts/nexus-canonical-production-target");

const BASE_URL = productionUrlFromEnv();
const EXPECTED_RELEASE = process.env.NEXUS_EXPECTED_RELEASE_SHA;
if (!/^[a-f0-9]{40}$/.test(String(EXPECTED_RELEASE || ""))) throw new Error("Exact NEXUS_EXPECTED_RELEASE_SHA is required");
const OUTPUT = path.resolve("output/nexus-capability-windows-physical");

const allMatrix = [
  { id: "live-sources", command: "Nexus, what do current reputable sources say about community solar policy in Barbados?", capability: "search", check: "sources" },
  { id: "source-follow-up", command: "Show me another reputable source with a different perspective.", capability: "search", check: "sources" },
  { id: "images", command: "Bring up source-labeled pictures of wooden architecture in Paramaribo.", capability: "images", check: "images" },
  { id: "map", command: "Put La Paz, Bolivia on a live map for me.", capability: "map", check: "map" },
  { id: "listings", command: "Find bicycle repair shops near Windhoek, Namibia.", capability: "listings", check: "sources" },
  { id: "music", command: "Play Cesaria Evora morna from Cabo Verde.", capability: "music", check: "music" },
  { id: "music-follow-up", command: "Play something different by a Japanese city pop artist.", capability: "music", check: "music" },
  { id: "music-stop", command: "That is enough, make it quiet now.", capability: "media-control", check: "stopped" },
  { id: "reminder", command: "Remind me next Tuesday morning to renew the greenhouse water filter.", capability: "reminder", check: "artifact" },
  { id: "reminder-follow-up", command: "What reminder did I just set?", capability: "reminder", check: "artifact" },
  { id: "marketplace", command: "Make an editable marketplace draft for eighteen sacks of red beans in Kigali.", capability: "marketplace-draft", check: "form" },
  { id: "marketplace-follow-up", command: "Put the price at sixty-five dollars per sack and say collection only.", capability: "marketplace-draft", check: "form" },
  { id: "report", command: "Create a one-page field report about salt damage in a coastal rice plot.", capability: "report", check: "document" },
  { id: "resume", command: "Build an editable resume for a marine electrician changing careers into solar installation.", capability: "resume", check: "form" },
  { id: "resume-follow-up", command: "Add three years maintaining shipboard power systems to my experience.", capability: "resume", check: "form" },
  { id: "intake", command: "Set up an intake form for a traveler returning from Peru.", capability: "intake", check: "form" },
  { id: "field-completion", command: "Fill the main concern with fever and joint pain that started yesterday.", capability: "intake", check: "filled-form" },
  { id: "question-card", command: "Make a question card I can use when asking a clinician about recurring migraines.", capability: "question-card", check: "document" },
  { id: "truthful-failure", command: "Show source-labeled photographs of the purple library on Mars colony seven.", capability: "images", check: "failure", expectFailure: true }
];
const requestedIds = new Set(String(process.env.NEXUS_CERT_ONLY || "").split(",").map((value) => value.trim()).filter(Boolean));
const matrix = requestedIds.size ? allMatrix.filter((test) => requestedIds.has(test.id)) : allMatrix;

function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

async function poll(fn, message, timeout = 180000, interval = 250) {
  const deadline = Date.now() + timeout;
  let lastError = null;
  while (Date.now() < deadline) {
    try {
      const value = await fn();
      if (value) return value;
    } catch (error) {
      lastError = error;
    }
    await wait(interval);
  }
  throw new Error(`${message}${lastError ? `: ${lastError.message}` : ""}`);
}

function waveData(wav) {
  for (let offset = 12; offset + 8 <= wav.length;) {
    const id = wav.toString("ascii", offset, offset + 4);
    const size = wav.readUInt32LE(offset + 4);
    if (id === "data") return wav.subarray(offset + 8, offset + 8 + size);
    offset += 8 + size + (size % 2);
  }
  throw new Error("Synthesized WAV contains no PCM data.");
}

function synthesize(text) {
  const wavPath = path.join(os.tmpdir(), `nexus-capability-${process.pid}-${Date.now()}.wav`);
  const encodedText = Buffer.from(text, "utf16le").toString("base64");
  const encodedPath = Buffer.from(wavPath, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedText}'))`,
    `$p=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedPath}'))`,
    "$f=New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(24000,16,1)",
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.Rate=-1",
    "$v.SetOutputToWaveFile($p,$f)",
    "$v.Speak($t)",
    "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script]);
    let stderr = "";
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("exit", (code) => {
      try {
        if (code !== 0) throw new Error(stderr || `speech synthesis exited ${code}`);
        resolve(waveData(fs.readFileSync(wavPath)));
      } catch (error) {
        reject(error);
      } finally {
        fs.rmSync(wavPath, { force: true });
      }
    });
  });
}

function speakThroughWindows(text) {
  const encoded = Buffer.from(text, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encoded}'))`,
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.Volume=90", "$v.Rate=-1", "$v.Speak($t)", "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script]);
    let stderr = "";
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(stderr || `physical speech exited ${code}`)));
  });
}

async function inject(page, text) {
  await wait(450);
  const pcm = await synthesize(text);
  const chunks = [];
  for (let offset = 0; offset < pcm.length; offset += 16384) chunks.push(pcm.subarray(offset, offset + 16384).toString("base64"));
  await page.evaluate((audioChunks) => window.NexusCleanRuntime.certificationAudio.send(audioChunks), chunks);
}

async function runTurn(page, test, evidence) {
  const before = await page.evaluate(() => ({
    receipts: window.__physical.receipts.length,
    acknowledgements: window.__physical.acknowledgements.length,
    stages: window.__physical.stages.length
  }));
  await inject(page, test.command);
  const route = await poll(() => page.evaluate(({ before, command }) => {
    const canonical = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    const expected = new Set(canonical(command).split(" ").filter(Boolean));
    return window.__physical.stages.slice(before.stages).find((item) => {
      if (item.type !== "resolver.requested") return false;
      const actual = new Set(canonical(item.detail && item.detail.command).split(" ").filter(Boolean));
      const overlap = [...expected].filter((token) => actual.has(token)).length;
      return overlap / Math.max(1, Math.min(expected.size, actual.size)) >= 0.55;
    }) || null;
  }, { before, command: test.command }), `The physical transcript did not route the requested command for ${test.id}`);
  const acknowledgement = await poll(() => page.evaluate(({ before, requestId }) => {
    return window.__physical.acknowledgements.slice(before.acknowledgements).find((item) => item.requestId === requestId) || null;
  }, { before, requestId: route.detail.requestId }), `No matching content acknowledgement for ${test.id}`);

  const rendered = await poll(() => page.evaluate((requestId) => window.__physical.ackProofs.find((item) => item.requestId === requestId) || null, route.detail.requestId), `No synchronous visible proof for ${test.id}`);
  await poll(() => page.evaluate(({ before }) => window.__physical.receipts.slice(before.receipts).some((item) => item.type === "conversation.return-to-listening"), { before }), `Nexus did not return to continuous listening for ${test.id}`);
  const proof = await page.evaluate(({ before, acknowledgement, rendered }) => {
    return {
      ...rendered,
      transcript: window.__physical.receipts.slice(before.receipts).filter((item) => item.type === "transcript.final").map((item) => item.detail && item.detail.transcript || ""),
      state: window.NexusCleanRuntime.snapshot().state.state,
      recovery: acknowledgement.recovery || null,
      audioViolations: [
        ...window.__physical.audioViolations,
        ...window.__physical.receipts.slice(before.receipts).filter((item) => item.type === "audio.exclusive-owner-violation" || item.type === "audio.exclusive-response-blocked")
      ]
    };
  }, { before, acknowledgement, rendered });
  const screenshot = path.join(OUTPUT, `${String(evidence.turns.length + 1).padStart(2, "0")}-${test.id}.png`);
  const record = { ...test, route, acknowledgement, proof, screenshot, passed: false };
  evidence.turns.push(record);
  fs.writeFileSync(path.join(OUTPUT, "certification.json"), `${JSON.stringify(evidence, null, 2)}\n`);

  assert.equal(proof.state, "connected", `${test.id}: Realtime connection was not preserved`);
  assert.equal(acknowledgement.visible, true, `${test.id}: acknowledgement did not verify a visible result`);
  assert.ok(proof.resultId, `${test.id}: no visible result identity`);
  assert.ok(proof.visibleText.length >= 20, `${test.id}: empty application shell`);
  assert.deepEqual(proof.audioViolations, [], `${test.id}: more than one voice response/output owner`);

  if (test.expectFailure) {
    assert.equal(acknowledgement.outcomeVerified, false, `${test.id}: provider failure fabricated success`);
    assert.equal(acknowledgement.populated, false, `${test.id}: provider failure marked populated`);
    assert.equal(proof.resultStatus, "failed", `${test.id}: failure was not visibly rendered`);
    assert.ok(proof.recovery && proof.recovery.message, `${test.id}: missing truthful recovery`);
  } else {
    assert.equal(acknowledgement.outcomeVerified, true, `${test.id}: success was not outcome-verified`);
    assert.equal(acknowledgement.populated, true, `${test.id}: success was not populated`);
    assert.equal(proof.populated, "true", `${test.id}: shell was not marked populated after rendering`);
    assert.equal(proof.resultStatus, "ready", `${test.id}: rendered status was not ready`);
  }
  if (test.check === "sources") assert.ok(proof.linkCount >= 1 && proof.itemCount >= 1, `${test.id}: no visible website/source results`);
  if (test.check === "images") assert.ok(proof.imageCount >= 1 && proof.linkCount >= 1, `${test.id}: no visible source-labeled image`);
  if (test.check === "map") assert.ok(proof.mapCount >= 1 && proof.linkCount >= 1, `${test.id}: no visible live map`);
  if (test.check === "music") assert.ok(proof.musicCount >= 1, `${test.id}: no visible playable media`);
  if (test.check === "stopped") assert.ok(proof.stoppedCount >= 1 && proof.musicCount === 0, `${test.id}: media was not visibly stopped`);
  if (test.check === "form") assert.ok(proof.controls.length >= 1, `${test.id}: no visible editable fields`);
  if (test.check === "filled-form") assert.ok(proof.controls.some((field) => /fever|joint pain|yesterday/i.test(field.value)), `${test.id}: voice follow-up did not populate a visible field`);
  if (test.check === "document") assert.ok(["document", "card"].includes(proof.artifactKind) && proof.visibleText.length >= 80, `${test.id}: document/card was not populated`);

  await page.screenshot({ path: screenshot, fullPage: true });
  record.passed = true;
  fs.writeFileSync(path.join(OUTPUT, "certification.json"), `${JSON.stringify(evidence, null, 2)}\n`);
  return record;
}

async function main() {
  fs.mkdirSync(OUTPUT, { recursive: true });
  const evidence = { schema: "nexus.capability.windows.physical.v1", requestedCommit: EXPECTED_RELEASE, startedAt: new Date().toISOString(), turns: [], foundation: {}, failure: null };
  const identity = await fetch(`${BASE_URL}/api/certification/identity`).then((response) => response.json());
  assert.equal(identity.releaseSha, EXPECTED_RELEASE, "Certification server is not serving the requested capability identity");
  evidence.identity = identity;
  const browser = await chromium.launch({ channel: "chrome", headless: false, args: ["--autoplay-policy=no-user-gesture-required"] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  try {
    await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
    await page.addInitScript(() => {
      window.__physical = { receipts: [], acknowledgements: [], ackProofs: [], stages: [], errors: [], sessionUpdates: [], audioViolations: [] };
      window.addEventListener("nexus.clean.receipt", (event) => window.__physical.receipts.push(event.detail));
      window.addEventListener("nexus.clean.workspace.acknowledged", (event) => {
        const acknowledgement = event.detail;
        if (!acknowledgement || !acknowledgement.contentExtension) return;
        window.__physical.acknowledgements.push(acknowledgement);
        const resultId = acknowledgement.visualContext && acknowledgement.visualContext.surfaceId;
        const root = resultId ? document.querySelector(`#nexus-app-surface [data-nexus-content-result-id="${CSS.escape(resultId)}"]`) : null;
        const shell = document.getElementById("nexus-workspace");
        if (!root) return;
        window.__physical.ackProofs.push({
          requestId: acknowledgement.requestId, capturedAt: new Date().toISOString(),
          workspace: shell && shell.dataset.workspace, populated: shell && shell.dataset.populated, action: shell && shell.dataset.contentAction,
          resultId: root.dataset.nexusContentResultId, resultStatus: root.dataset.resultStatus, artifactKind: root.dataset.nexusContentArtifact,
          visibleText: String(root.innerText || "").replace(/\s+/g, " ").trim().slice(0, 3000),
          itemCount: root.querySelectorAll("[data-nexus-item]").length, linkCount: root.querySelectorAll("a[href]").length,
          imageCount: root.querySelectorAll("img[src]").length, mapCount: root.querySelectorAll("#nexus-content-map-frame[src]").length,
          musicCount: root.querySelectorAll("#nexus-content-music-frame[src], #nexus-content-music-player[src]").length,
          stoppedCount: root.querySelectorAll("[data-media-state='stopped']").length,
          controls: [...root.querySelectorAll("input, textarea, select")].map((field) => ({ name: field.name || field.id, value: field.type === "checkbox" ? String(field.checked) : field.value }))
        });
      });
      window.addEventListener("nexus.content.stage", (event) => window.__physical.stages.push(event.detail));
      window.addEventListener("error", (event) => window.__physical.errors.push(String(event.message)));
      window.addEventListener("unhandledrejection", (event) => window.__physical.errors.push(String(event.reason)));
      if (window.speechSynthesis) {
        const originalSpeak = window.speechSynthesis.speak.bind(window.speechSynthesis);
        window.speechSynthesis.speak = (utterance) => {
          window.__physical.audioViolations.push({ type: "browser-speech-synthesis", text: String(utterance && utterance.text || "") });
          return originalSpeak(utterance);
        };
      }
      if (window.RTCDataChannel && window.RTCDataChannel.prototype) {
        const originalSend = window.RTCDataChannel.prototype.send;
        window.RTCDataChannel.prototype.send = function wrappedSend(data) {
          try {
            const value = JSON.parse(data);
            if (value && value.type === "session.update") window.__physical.sessionUpdates.push(value);
          } catch {}
          return originalSend.call(this, data);
        };
      }
    });
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.locator("#nexus-orb").click();
    await poll(() => page.evaluate(() => window.NexusCleanRuntime && window.NexusCleanRuntime.snapshot().state.state === "connected"), "Realtime did not connect", 60000);
    await poll(() => page.evaluate(() => window.__physical.receipts.some((item) => item.type === "microphone.acquired")), "Physical microphone was not acquired", 60000);
    await poll(() => page.evaluate(() => window.__physical.receipts.some((item) => item.type === "audio.remote-attached")), "Remote audio output was not attached", 60000);
    const calibrationBefore = await page.evaluate(() => window.__physical.receipts.length);
    await speakThroughWindows("Nexus, say physical capability calibration complete.");
    await poll(() => page.evaluate(({ before }) => window.__physical.receipts.slice(before).some((item) => item.type === "conversation.return-to-listening"), { before: calibrationBefore }), "Audible physical microphone calibration did not complete", 90000);

    await page.locator("#nexus-audio").evaluate((audio) => { audio.muted = true; });
    await poll(() => page.evaluate(() => Boolean(window.NexusCleanRuntime.certificationAudio)), "Certification audio bridge is unavailable", 10000);
    await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.begin());

    const foundation = await page.evaluate(() => {
      const session = window.__physical.sessionUpdates.find((item) => item.session && item.session.audio && item.session.audio.output);
      return {
        state: window.NexusCleanRuntime.snapshot().state.state,
        microphoneAcquired: window.__physical.receipts.some((item) => item.type === "microphone.acquired"),
        remoteAudioAttached: window.__physical.receipts.some((item) => item.type === "audio.remote-attached"),
        voice: session && session.session.audio.output.voice,
        britishFemaleInstruction: Boolean(session && /natural British woman/i.test(session.session.instructions || "")),
        voiceOutputElements: document.querySelectorAll("#nexus-audio").length,
        certificationEnabled: Boolean(window.NEXUS_CLEAN_CONFIG && window.NEXUS_CLEAN_CONFIG.certification)
      };
    });
    assert.equal(foundation.voice, "marin");
    assert.equal(foundation.britishFemaleInstruction, true);
    assert.equal(foundation.voiceOutputElements, 1);
    assert.equal(foundation.certificationEnabled, true);
    evidence.foundation = foundation;

    for (const test of matrix) await runTurn(page, test, evidence);

    await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.end());
    const bargeBefore = await page.evaluate(() => window.__physical.receipts.length);
    await speakThroughWindows("Nexus, explain the history of ocean navigation in a long detailed answer.");
    await poll(() => page.evaluate(({ before }) => window.__physical.receipts.slice(before).some((item) => item.type === "conversation.response-started"), { before: bargeBefore }), "Barge-in setup response did not start", 60000);
    await speakThroughWindows("Nexus, stop and listen to me now.");
    await poll(() => page.evaluate(({ before }) => window.__physical.receipts.slice(before).some((item) => item.type === "conversation.barge-in"), { before: bargeBefore }), "Physical barge-in was not detected", 60000);
    await poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state === "connected"), "Nexus did not remain continuously connected after barge-in", 60000);
    evidence.foundation.bargeIn = true;
    evidence.foundation.continuousListening = true;
    evidence.foundation.guidedEntry = evidence.turns.some((turn) => turn.id === "field-completion" && turn.passed);
    evidence.foundation.singleAudioOutput = (await page.evaluate(() => window.__physical.audioViolations.length)) === 0;
    assert.equal(evidence.foundation.singleAudioOutput, true);
    assert.deepEqual(await page.evaluate(() => window.__physical.errors), []);
    evidence.passed = true;
  } catch (error) {
    evidence.failure = { name: error.name, message: error.message, stack: error.stack };
    throw error;
  } finally {
    evidence.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(OUTPUT, "certification.json"), `${JSON.stringify(evidence, null, 2)}\n`);
    await page.screenshot({ path: path.join(OUTPUT, evidence.failure ? "failure.png" : "final.png"), fullPage: true }).catch(() => {});
    await page.evaluate(() => { try { window.NexusCleanRuntime && window.NexusCleanRuntime.certificationAudio && window.NexusCleanRuntime.certificationAudio.end(); } catch {} }).catch(() => {});
    await context.close().catch(() => {});
    await browser.close().catch(() => {});
  }
  console.log(`Nexus capability Windows physical certification: PASS (${evidence.turns.length} open-ended turns)`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
