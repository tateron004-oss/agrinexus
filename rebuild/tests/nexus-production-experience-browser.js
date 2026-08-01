"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const BASE_URL = process.env.NEXUS_PRODUCTION_REPAIR_BASE_URL || "http://127.0.0.1:4391";
const OUTPUT = path.resolve(process.env.NEXUS_PRODUCTION_REPAIR_OUTPUT || "output/nexus-production-experience-repair");
const matrix = [
  { id: "reported-maize-images", command: "Nexus, research maize diseases in Kenya. Show me pictures of common symptoms and explain how to tell them apart.", capability: "images", check: "images", words: ["maize"] },
  { id: "reported-nairobi-route", command: "Nexus, show me a map of Nairobi, Kenya and give me directions to Nakuru.", capability: "map", check: "map", words: ["Nairobi", "Nakuru"] },
  { id: "reported-farming-resume", command: "Nexus, help me create a résumé for someone with five years of farming experience.", capability: "resume", check: "form", words: ["résumé", "experience"] },
  { id: "resume-follow-up", command: "Add three years coordinating harvest crews to the work experience.", capability: "resume", check: "filled-form", words: ["harvest crews"] },
  { id: "reported-pharmacist-card", command: "Create a visual list of questions I should ask my pharmacist about a new blood-pressure medicine.", capability: "question-card", check: "card", words: ["pharmacist", "medicine"] },
  { id: "reported-stevie-wonder", command: "Nexus, find and play some Stevie Wonder music.", capability: "music", check: "music", words: ["Stevie Wonder"] },
  { id: "variant-cassava-images", command: "Compare source-attributed photos of cassava diseases seen in Uganda and explain the visible differences.", capability: "images", check: "images", words: ["cassava"] },
  { id: "variant-rwanda-route", command: "Plot a driving route from Kigali, Rwanda to Musanze, Rwanda on a fresh map.", capability: "map", check: "map", words: ["Kigali", "Musanze"] },
  { id: "variant-welder-resume", command: "Prepare an editable CV for a welder with six years repairing industrial equipment.", capability: "resume", check: "form", words: ["welder", "experience"] },
  { id: "variant-diabetes-card", command: "Make a printable question checklist for a clinician about a newly prescribed diabetes medicine.", capability: "question-card", check: "card", words: ["medicine", "questions"] },
  { id: "variant-fela-kuti", command: "Find and play an authorized Fela Kuti track, and show me the source choices.", capability: "music", check: "music", words: ["Fela Kuti"] }
];

function contrastRatio(first, second) {
  const parse = value => {
    const rgb = String(value).match(/[\d.]+/g)?.slice(0, 3).map(Number) || [0, 0, 0];
    return rgb.map(component => {
      const channel = component / 255;
      return channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4;
    });
  };
  const luminance = rgb => .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
  const left = luminance(parse(first)); const right = luminance(parse(second));
  return (Math.max(left, right) + .05) / (Math.min(left, right) + .05);
}

async function main() {
  fs.mkdirSync(OUTPUT, { recursive: true });
  const evidence = { schema: "nexus.production-experience.browser.v1", baseUrl: BASE_URL, startedAt: new Date().toISOString(), turns: [], accessibility: {}, passed: false };
  const browser = await chromium.launch({ channel: "chrome", headless: true, args: ["--autoplay-policy=no-user-gesture-required"] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(String(error.message || error)));
  try {
    await page.addInitScript(() => {
      window.__productionRepairStages = [];
      window.addEventListener("nexus.capability.stage", event => window.__productionRepairStages.push(event.detail));
    });
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.getByLabel("Password").fill("User2026!");
    const loginNavigation = page.waitForNavigation({ waitUntil: "domcontentloaded", timeout: 5000 }).catch(() => null);
    await page.getByRole("button", { name: "Enter platform" }).click();
    await loginNavigation;
    await page.waitForFunction(async () => {
      try { return (await fetch("/api/state", { cache: "no-store" })).status === 200; } catch { return false; }
    }, null, { timeout: 20000 });
    await page.waitForTimeout(700);
    await page.waitForFunction(async () => {
      try {
        const response = await fetch("/api/capability/content", { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: JSON.stringify({ command: "Nexus capability authentication readiness check" }) });
        return response.status === 200;
      } catch { return false; }
    }, null, { timeout: 20000 });
    assert.equal(await page.evaluate(() => Boolean(window.NexusProductionCapabilityBridge)), true, "Production capability bridge did not load");

    for (const test of matrix) {
      const beforeStages = await page.evaluate(() => window.__productionRepairStages.length);
      const startedAt = Date.now();
      const result = await page.evaluate(command => window.NexusProductionCapabilityBridge.execute(command), test.command);
      const proof = await page.evaluate(({ beforeStages, resultId }) => {
        const root = document.querySelector(`[data-nexus-capability-result="${CSS.escape(resultId)}"]`);
        const surface = document.getElementById("nexus-capability-surface");
        const samples = [...root.querySelectorAll("h1,h2,h3,p,li,label,a,button,input,textarea,select")].filter(element => {
          const style = getComputedStyle(element);
          return style.display !== "none" && style.visibility !== "hidden" && element.getBoundingClientRect().width > 0;
        }).slice(0, 120).map(element => {
          const style = getComputedStyle(element);
          let background = style.backgroundColor;
          let parent = element.parentElement;
          while (parent && /rgba?\(0, 0, 0, 0\)/.test(background)) { background = getComputedStyle(parent).backgroundColor; parent = parent.parentElement; }
          return { tag: element.tagName, text: String(element.textContent || element.value || "").trim().slice(0, 100), color: style.color, background };
        });
        return {
          exists: Boolean(root), visibleText: String(root && root.innerText || "").replace(/\s+/g, " ").trim().slice(0, 6000),
          status: root && root.dataset.resultStatus, artifactKind: root && root.dataset.artifactKind,
          itemCount: root ? root.querySelectorAll("[data-nexus-item]").length : 0,
          imageCount: root ? [...root.querySelectorAll("img[src]")].filter(image => image.naturalWidth >= 120 && image.naturalHeight >= 90).length : 0,
          linkCount: root ? root.querySelectorAll("a[href]").length : 0,
          controlValues: root ? [...root.querySelectorAll("input,textarea,select")].map(field => ({ name: field.name, value: field.type === "checkbox" ? String(field.checked) : field.value })) : [],
          mapLayers: root ? root.querySelectorAll("#nexus-capability-map .leaflet-tile-pane, #nexus-capability-map .leaflet-overlay-pane").length : 0,
          audioSources: root ? root.querySelectorAll("#nexus-capability-audio[src]").length : 0,
          spinnerCount: surface ? surface.querySelectorAll(".nexus-capability-spinner").length : 0,
          samples,
          stages: window.__productionRepairStages.slice(beforeStages)
        };
      }, { beforeStages, resultId: result.requestId });
      const screenshot = path.join(OUTPUT, `${String(evidence.turns.length + 1).padStart(2, "0")}-${test.id}.png`);
      await page.screenshot({ path: screenshot });
      const ratios = proof.samples.map(sample => ({ ...sample, ratio: contrastRatio(sample.color, sample.background) }));
      const minimumContrast = ratios.length ? Math.min(...ratios.map(sample => sample.ratio)) : 0;
      const record = { ...test, startedAt: new Date(startedAt).toISOString(), elapsedMs: Date.now() - startedAt, result, proof: { ...proof, samples: ratios }, minimumContrast, screenshot, passed: false };
      evidence.turns.push(record);
      fs.writeFileSync(path.join(OUTPUT, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`);

      assert.equal(result.status, "ready", `${test.id}: request did not succeed`);
      assert.equal(result.capability, test.capability, `${test.id}: wrong conversational goal`);
      assert.equal(proof.exists, true, `${test.id}: no visual result`);
      assert.equal(proof.status, "ready", `${test.id}: visual result not ready`);
      assert.ok(proof.visibleText.length >= 70, `${test.id}: empty or under-populated visual shell`);
      assert.equal(proof.spinnerCount, 0, `${test.id}: indefinite spinner remained`);
      const visibleEvidenceText = `${proof.visibleText} ${JSON.stringify(proof.controlValues)}`.toLowerCase();
      assert.ok(test.words.every(word => visibleEvidenceText.includes(word.toLowerCase())), `${test.id}: expected current-request content is absent`);
      const stageNames = proof.stages.map(stage => stage.type);
      assert.ok(stageNames.indexOf("provider.progress-visible") >= 0, `${test.id}: no honest visible progress`);
      assert.ok(stageNames.indexOf("renderer.visible") > stageNames.indexOf("provider.returned"), `${test.id}: renderer ordering failed`);
      assert.ok(stageNames.indexOf("renderer.acknowledged") > stageNames.indexOf("renderer.visible"), `${test.id}: acknowledgement preceded visibility`);
      if (["images", "map", "music"].includes(test.capability)) assert.ok(Array.isArray(result.providerTrace) && result.providerTrace.length >= 1, `${test.id}: no current provider/network evidence`);
      if (test.check === "images") assert.ok(proof.imageCount >= 1 && proof.itemCount >= 1 && proof.linkCount >= 1, `${test.id}: no useful source-attributed thumbnail`);
      if (test.check === "map") assert.ok(proof.mapLayers >= 1 && result.artifact.media.route.coordinates.length >= 2 && proof.linkCount >= 1, `${test.id}: actual route was not plotted`);
      if (test.check === "form") assert.ok(proof.controlValues.length >= 5, `${test.id}: no editable document fields`);
      if (test.check === "filled-form") assert.ok(proof.controlValues.some(field => /harvest crews/i.test(field.value)), `${test.id}: contextual voice-style field update failed`);
      if (test.check === "card") assert.ok(["card", "document"].includes(proof.artifactKind) && proof.linkCount >= 3 && /not medical advice|do not start, stop/i.test(proof.visibleText), `${test.id}: medication-safety card incomplete`);
      if (test.check === "music") assert.ok(proof.audioSources >= 1 && proof.itemCount >= 1 && proof.linkCount >= 1, `${test.id}: playable authorized music choices absent`);
      assert.ok(minimumContrast >= 4.5, `${test.id}: text contrast fell below WCAG AA (${minimumContrast.toFixed(2)}:1)`);
      record.passed = true;
    }

    assert.deepEqual(errors, []);
    evidence.accessibility = {
      standard: "WCAG 2.x AA normal text contrast",
      minimumMeasuredContrast: Math.min(...evidence.turns.map(turn => turn.minimumContrast)),
      allTurnsAtLeast4_5: evidence.turns.every(turn => turn.minimumContrast >= 4.5),
      responsiveScrollContainer: await page.locator("#nexus-capability-body").evaluate(element => getComputedStyle(element).overflowY === "auto" || getComputedStyle(element).overflowY === "scroll")
    };
    assert.equal(evidence.accessibility.responsiveScrollContainer, true);
    evidence.passed = true;
  } catch (error) {
    evidence.failure = { name: error.name, message: error.message, stack: error.stack };
    throw error;
  } finally {
    evidence.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(OUTPUT, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`);
    await context.close().catch(() => {});
    await browser.close().catch(() => {});
  }
  console.log(`Nexus production-experience browser acceptance: PASS (${matrix.length} reported and novel turns)`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
