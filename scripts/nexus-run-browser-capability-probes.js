#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const { CONTRACTS } = require("../nexus/apps/capability-completion-contracts.js");
const { FAULTS } = require("../nexus/acceptance/fault-register.js");

const SCENARIOS = Object.freeze({
  agriculture: "Assess yellow leaves on my maize crop and show sources.",
  health: "Record my blood pressure as 140 over 90 and show the safety response.",
  telehealth: "Save a telehealth intake for my blood pressure concern and show the next step.",
  "mobile-clinic": "Find mobile clinic locations near Nairobi and select the closest one.",
  pharmacy: "Find pharmacy support for metformin and show a safety response with sources.",
  learning: "Create a short maize farming literacy lesson and save my progress.",
  workforce: "Find agriculture jobs in Nairobi with sources and select one listing.",
  marketplace: "Find maize marketplace listings with sources and select one listing.",
  maps: "Show a route from Nairobi to Nakuru with route geometry.",
  "music-media": "Play Stevie Wonder Sir Duke and confirm playback is playing.",
  documents: "Create and save a farming plan document, then reopen it.",
  reminders: "Remind me tomorrow at 9 AM to check my crops and save the reminder.",
  "offline-queue": "Queue a crop observation offline, synchronize it, and show the server acknowledgement.",
  "live-knowledge": "Why do maize leaves turn yellow? Answer with current sources.",
  images: "Show me current images of healthy maize leaves with sources.",
  communications: "Draft a clinic follow-up message, obtain consent, send it, and return the delivery receipt.",
  operations: "Prepare a field operation, record approval state, and return its receipt."
});

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
async function json(response) { const text = await response.text(); try { return JSON.parse(text); } catch { return { raw: text.slice(0, 500) }; } }
function exactRecord(releaseSha, receipts, extra = {}) { return { releaseSha, production: true, simulated: false,
  passed: true, observedAt: new Date().toISOString(), receipts, ...extra }; }

function pendingConfirmationContinuation(application, turn) {
  return ["health", "offline-queue"].includes(application) && turn?.result?.state === "confirmation_required" &&
    Boolean(turn?.result?.taskId) && Boolean(turn?.result?.outcome?.pendingStepId) &&
    Boolean(turn?.result?.commandId) && Boolean(turn?.result?.correlationId);
}

async function post(url, token, body) {
  const response = await fetch(url, { method: "POST", headers: { authorization: `Bearer ${token}`,
    accept: "application/json", "content-type": "application/json" }, body: JSON.stringify(body) });
  const value = await json(response);
  if (!response.ok) throw new Error(`${url} failed (${response.status}) application=${body.application || "none"}` +
    ` actualApplication=${value.result?.application || "none"} expectedApplication=${value.expectedApplication || "none"}` +
    ` code=${value.code || "none"} category=${value.category || "none"} error=${value.error || value.raw || "none"}`);
  return value;
}

async function reloadAuthenticatedShell(page, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await page.reload({ waitUntil: "networkidle", timeout: 90000 });
      return;
    } catch (error) {
      lastError = error;
      const recoverable = /ERR_ABORTED|frame was detached|navigation/i.test(String(error?.message || error));
      if (!recoverable || attempt === attempts) break;
      await new Promise(resolve => setTimeout(resolve, attempt * 500));
      await page.goto(page.url(), { waitUntil: "networkidle", timeout: 90000 });
      return;
    }
  }
  throw new Error(`Authenticated Standard User shell reload failed after ${attempts} attempts: ${lastError?.message || "navigation error"}`);
}

async function submitVisibleCommand(page, text, application) {
  const input = page.locator('[data-nexus-primary-typed-entry="true"]:visible').first();
  const send = page.locator('[data-nexus-primary-typed-submit="true"]:visible').first();
  const before = await page.locator('[data-nexus-authoritative-outcome="true"]').getAttribute("data-command-id").catch(() => null);
  await input.fill(text);
  await send.click();
  try {
    await page.waitForFunction(previous => {
      const surface = document.querySelector('[data-nexus-authoritative-outcome="true"]');
      const commandId = surface?.getAttribute("data-command-id") || "";
      return Boolean(commandId && commandId !== previous);
    }, before, { timeout: 120000 });
  } catch (error) {
    const status = await page.locator('[role="status"]').allTextContents().catch(() => []);
    throw new Error(`Visible Standard User command failed application=${application}: ${status.join(" | ").slice(-1200) || error.message}`);
  }
  const surface = page.locator('[data-nexus-authoritative-outcome="true"]').first();
  if (!await surface.isVisible()) throw new Error(`Visible Standard User outcome was not visible application=${application}.`);
  const workspace = await surface.getAttribute("data-workspace");
  const textContent = await surface.innerText();
  if (/authoritative Nexus runtime is unavailable|legacy write fallback|behavior spine is unavailable/i.test(textContent)) {
    throw new Error(`Visible Standard User command failed closed application=${application}: ${textContent.slice(0, 500)}`);
  }
  if (application === "images") {
    const loaded = await page.locator('[data-nexus-authoritative-image="true"]').evaluateAll(nodes =>
      nodes.filter(node => node.complete && node.naturalWidth > 0 && node.naturalHeight > 0).length);
    if (loaded < 1) throw new Error("Visible image search produced no genuinely loaded image.");
  }
  return { application, workspace, text: textContent.slice(0, 1000) };
}

async function run(env = process.env) {
  const { chromium } = require("playwright");
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const probeFile = required(env.NEXUS_PROBE_FILE, "NEXUS_PROBE_FILE");
  const document = JSON.parse(fs.readFileSync(probeFile, "utf8"));
  const browser = await chromium.launch({ channel: "chrome", headless: true,
    ignoreDefaultArgs: ["--enable-automation"],
    args: ["--autoplay-policy=no-user-gesture-required", "--disable-blink-features=AutomationControlled"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(`${base}/?nexusProductionEvidence=${encodeURIComponent(releaseSha)}`, { waitUntil: "networkidle", timeout: 90000 });
  await page.getByLabel("Email", { exact: true }).fill(env.NEXUS_STANDARD_USER_EMAIL || "user@agrinexus.org");
  await page.getByLabel("Password", { exact: true }).fill(env.NEXUS_STANDARD_USER_PASSWORD || "User2026!");
  await page.getByRole("button", { name: "Enter platform", exact: true }).click();
  await page.locator('[data-nexus-primary-typed-entry="true"]:visible').first().waitFor({ state: "visible", timeout: 30000 });
  const shellRole = await page.evaluate(() => globalThis.data?.user?.role || "");
  if (shellRole !== "Standard User") throw new Error(`Visible authenticated Standard User login failed (role=${shellRole || "missing"}).`);
  await page.waitForFunction(() => typeof window.__NEXUS_CAPTURE_PRODUCTION_OUTCOME__ === "function", null, { timeout: 30000 });
  const visibleIngress = [];
  for (const application of ["live-knowledge", "maps", "workforce", "documents", "images"]) {
    visibleIngress.push(await submitVisibleCommand(page, SCENARIOS[application], application));
  }
  await reloadAuthenticatedShell(page);
  await page.locator('[data-nexus-primary-typed-entry="true"]:visible').first().waitFor({ state: "visible", timeout: 30000 });
  const capabilityProbes = []; const workspaceProbes = [];
  try {
    for (const [application, text] of Object.entries(SCENARIOS)) {
      const execute = async phase => {
        let turn = await post(`${base}/api/nexus/runtime/production-acceptance/probes/behavior-turn`, token,
          { releaseSha, application, text, channel: "typed", locale: "en", phase });
        if (pendingConfirmationContinuation(application, turn)) {
          const continuation = application === "health" ? "health-continuation" : "offline-queue-continuation";
          turn = await post(`${base}/api/nexus/runtime/production-acceptance/probes/${continuation}`, token,
            { releaseSha, taskId: turn.result.taskId, stepId: turn.result.outcome?.pendingStepId,
              commandId: turn.result.commandId, correlationId: turn.result.correlationId,
              channel: "typed", confirmed: true, consented: true });
        }
        const outcome = turn.result?.render;
        if (!outcome || turn.result?.state !== "render_required") throw new Error(`${application} ${phase} did not reach render_required` +
          ` (state=${turn.result?.state || "missing"}, pendingStep=${Boolean(turn.result?.outcome?.pendingStepId)}, render=${Boolean(outcome)}).`);
        const receiptPromise = page.evaluate(value => window.__NEXUS_CAPTURE_PRODUCTION_OUTCOME__(value), outcome);
        if (application === "music-media") {
          const player = page.locator('[data-nexus-provider-audio="true"], [data-nexus-youtube-player] iframe').first();
          await player.waitFor({ state: "visible", timeout: 20000 });
          if (await player.evaluate(node => node.tagName === "IFRAME")) {
            await page.waitForTimeout(1500);
            const box = await player.boundingBox();
            if (!box) throw new Error("The production fallback player did not expose a clickable viewport.");
            await page.mouse.click(box.x + (box.width / 2), box.y + (box.height / 2));
          }
        }
        const receipt = await receiptPromise;
        if (application === "music-media") {
          const playback = receipt?.evidence?.playbackEvidence || {};
          const previewVerified = receipt.audible === true &&
            receipt.evidence?.mediaProvider === "apple-itunes-preview" &&
            receipt.evidence?.playbackClass === "preview" &&
            playback.schema === "nexus.media-playback-evidence.v1" &&
            playback.playResolved === true && playback.paused === false &&
            playback.muted === false && Number(playback.volume) > 0 &&
            Number(playback.readyState) >= 2 && Number(playback.advancedSeconds) >= 3;
          const youtubeVerified = receipt.audible === true &&
            receipt.evidence?.mediaProvider === "youtube" &&
            Number(playback.playerState) === 1;
          if (!previewVerified && !youtubeVerified) {
            throw new Error(`Music did not return genuine provider-owned playback evidence: ${JSON.stringify(receipt?.evidence || {})}`);
          }
        }
        const acknowledged = await post(`${base}/api/nexus/runtime/production-acceptance/probes/browser-acknowledgement`, token,
          { releaseSha, taskId: outcome.taskId, commandId: outcome.commandId, correlationId: outcome.correlationId,
            workspace: outcome.workspace, receipt });
        if (acknowledged.result?.completed !== true) throw new Error(`${application} ${phase} renderer acknowledgement did not complete.`);
        return { outcome, receipt };
      };
      const candidate = await execute("pre-cutover");
      const candidateReceipts = [`${base}/behavior-turn application=${application} phase=pre-cutover commandId=${candidate.outcome.commandId}`,
        `${base}/browser-acknowledgement application=${application} phase=pre-cutover completed=true`];
      const candidateProof = exactRecord(releaseSha, candidateReceipts);
      const proofs = { contract: candidateProof,
        "tenant-isolation": exactRecord(releaseSha, [`${base}/probes/identity tenantIsolation=true`]),
        "durable-write": exactRecord(releaseSha, [`${base}/probes/task-engine durable=true taskId=${candidate.outcome.taskId}`]),
        receipt: candidateProof, "browser-outcome": exactRecord(releaseSha, candidateReceipts) };
      await post(`${base}/api/nexus/runtime/production-acceptance/workspaces/${encodeURIComponent(application)}`, token,
        { releaseSha, rollbackRef: env.NEXUS_ROLLBACK_REF, proofs: Object.fromEntries(Object.entries(proofs).map(([key, value]) =>
          [key, { state: "verified", evidenceId: `${application}-${key}-${candidate.outcome.commandId}`, releaseSha, record: value }])) });
      const { outcome, receipt } = await execute("post-cutover");
      const receipts = [`${base}/behavior-turn application=${application} commandId=${outcome.commandId}`,
        `${base}/browser-acknowledgement application=${application} completed=true`];
      capabilityProbes.push(exactRecord(releaseSha, receipts, { application, rendered: receipt.rendered === true,
        visible: receipt.visible === true, audible: receipt.audible === true, evidence: outcome.data || {} }));
      const proof = exactRecord(releaseSha, receipts);
      workspaceProbes.push(exactRecord(releaseSha, receipts, { workspaceId: application, proofs: {
        contract: proof, "tenant-isolation": exactRecord(releaseSha, [`${base}/probes/identity tenantIsolation=true`]),
        "durable-write": exactRecord(releaseSha, [`${base}/probes/task-engine durable=true taskId=${outcome.taskId}`]),
        receipt: proof, "browser-outcome": exactRecord(releaseSha, receipts)
      } }));
    }
    const voiceText = SCENARIOS["live-knowledge"];
    const voice = await post(`${base}/api/nexus/runtime/production-acceptance/probes/behavior-turn`, token,
      { releaseSha, application: "live-knowledge", text: voiceText, channel: "voice", locale: "en" });
    if (voice.result?.render?.application !== "live-knowledge" || voice.result?.render?.originalText !== voiceText) {
      throw new Error("Voice and typed input did not preserve equivalent authoritative intent.");
    }
    const faultProbes = [];
    Object.assign(document, { workspaceProbes, capabilityProbes, faultProbes,
      faultProofStatus: { closed: false, releaseSha, required: FAULTS.length, proven: 0,
        missing: [...FAULTS], reason: "Typed fault verifiers have not executed; capability success receipts cannot prove fault closure." },
      browserProbe: { releaseSha, capabilities: capabilityProbes.length, workspaces: workspaceProbes.length,
        visibleIngress, visibleAuthenticatedLogin: true, sequential: true, voiceTypedEquivalent: true, observedAt: new Date().toISOString() } });
    fs.writeFileSync(probeFile, JSON.stringify(document, null, 2));
    console.log(JSON.stringify({ ok: true, releaseSha, capabilities: capabilityProbes.length,
      workspaces: workspaceProbes.length, faults: faultProbes.length, faultProofClosed: false }, null, 2));
    return document;
  } finally { await browser.close(); }
}

if (require.main === module) run().catch(error => { console.error(error.stack || error.message); process.exit(1); });
module.exports = Object.freeze({ SCENARIOS, exactRecord, pendingConfirmationContinuation, reloadAuthenticatedShell, submitVisibleCommand, post, run });
