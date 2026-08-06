"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { once } = require("node:events");
const { chromium } = require("playwright");
const { installRendererOutcomeVerifier } = require("../nexus-core/renderer-outcome-contract");

const browserRoot = path.resolve(__dirname, "..", "browser");
const contentTypes = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8" };
let resultNumber = 0;

function media() { return { kind: "", title: "", provider: "", sourceUrl: "", embedUrl: "", state: "none" }; }
function artifact(kind, title, description = "") { return { kind, title, description, fields: [], sections: [], items: [], links: [], media: media() }; }
function result(capability, operation, workspace, value, acknowledgement = "The requested result is visible.") {
  return { schema: "nexus.content.result.v2", requestId: `browser-result-${++resultNumber}`, status: "ready", capability, operation, workspace, query: value.title, artifact: value, acknowledgement, evidence: null, recovery: null };
}

function resolved(body) {
  const command = String(body.command || "");
  const lower = command.toLowerCase();
  const previous = body.previousArtifact || null;
  if (lower.includes("quiet now") || lower.includes("enough")) {
    const value = artifact("media", "Playback stopped", "The visible media player was cleared.");
    value.media.state = "stopped";
    return result("media-control", "stop", "music", value, "Playback visibly stopped.");
  }
  if (lower.includes("cabo verde") || lower.includes("morna")) {
    const value = artifact("status", "Music provider unavailable", "YouTube credentials are unavailable for this request.");
    return { schema: "nexus.content.result.v2", requestId: `browser-result-${++resultNumber}`, status: "failed", capability: "music", operation: "play", workspace: "music", query: "Cape Verdean morna", artifact: value, acknowledgement: "", evidence: null, recovery: { message: "YouTube credentials are unavailable for this request.", nextActions: ["Try another source when configured.", "Open a reputable page about morna."] } };
  }
  if (lower.includes("addis") || lower.includes("horn-led")) {
    const value = artifact("media", "Now playing: Mulatu Astatke — Ethiopian jazz", "A live result for horn-led music from Addis Ababa.");
    value.media = { kind: "video", title: "Mulatu Astatke — Ethiopian jazz", provider: "YouTube Data API v3", sourceUrl: "https://www.youtube.com/watch?v=ethiopia123", embedUrl: "https://www.youtube-nocookie.com/embed/ethiopia123?autoplay=1", state: "playing" };
    return result("music", "play", "music", value, "The Ethiopian jazz result is visibly playing.");
  }
  if (lower.includes("glossy") || lower.includes("1980s japan") || lower.includes("different direction")) {
    const value = artifact("media", "Now playing: Japanese city pop", "A different live result from 1980s Japan.");
    value.media = { kind: "video", title: "Japanese city pop", provider: "YouTube Data API v3", sourceUrl: "https://www.youtube.com/watch?v=citypop456", embedUrl: "https://www.youtube-nocookie.com/embed/citypop456?autoplay=1", state: "playing" };
    return result("music", "play", "music", value, "The city-pop result is visibly playing.");
  }
  if (lower.includes("cv") || lower.includes("résumé") || lower.includes("resume") || lower.includes("two seasons") || lower.includes("cooperative's books")) {
    const updated = lower.includes("two seasons") || lower.includes("cooperative's books");
    const value = previous && previous.kind === "document" && updated ? structuredClone(previous) : artifact("document", "Warehouse coordinator résumé", "Editable résumé draft based on the conversation.");
    value.title = "Warehouse coordinator résumé";
    value.fields = [{ id: "name", label: "Name", type: "text", value: body.visibleFields?.find((field) => field.id === "name")?.value || "Amina N.", required: true, options: [] }];
    value.sections = [{ heading: "Experience", body: updated ? "Two seasons managing the cooperative's bookkeeping and stock records." : "Add relevant work experience through normal conversation.", items: updated ? ["Maintained weekly books", "Reconciled stock records"] : [] }];
    return result("resume", updated ? "update" : "create", "workforce", value, updated ? "The experience was added to the visible résumé." : "The editable résumé is visible.");
  }
  if (lower.includes("what happened to the soil") || lower.includes("another reputable angle")) {
    const another = lower.includes("another");
    const value = artifact("list", another ? "Another reputable source set" : "Sahel soil-restoration sources", "Current reputable sources, not a stored answer.");
    value.items = another
      ? [{ id: "S3", title: "World Bank land restoration", description: "A second institutional perspective.", sourceName: "World Bank", sourceUrl: "https://www.worldbank.org/example", imageUrl: "", metadata: ["Retrieved today"] }]
      : [{ id: "S1", title: "FAO land and water", description: "Current institutional evidence.", sourceName: "FAO", sourceUrl: "https://www.fao.org/example", imageUrl: "", metadata: ["Retrieved today"] }];
    const answer = result("search", "search", "live-knowledge", value, "The current source links are visible.");
    answer.evidence = { receiptId: another ? "evr-2" : "evr-1", verified: true };
    return answer;
  }
  if (lower.includes("intake") || lower.includes("fever") || lower.includes("started yesterday")) {
    const value = previous && previous.kind === "form" ? structuredClone(previous) : artifact("form", "Travel health intake", "Editable intake; no diagnosis has been made.");
    value.fields = [
      { id: "concern", label: "Main concern", type: "textarea", value: lower.includes("fever") ? "Fever started yesterday" : body.visibleFields?.find((field) => field.id === "concern")?.value || "", required: true, options: [] },
      { id: "country", label: "Country visited", type: "text", value: "Ghana", required: false, options: [] }
    ];
    return result("intake", previous && previous.kind === "form" ? "update" : "create", "telehealth", value, "The visible intake fields were updated.");
  }
  if (lower.includes("street art") || lower.includes("accra")) {
    const value = artifact("list", "Accra street-art images", "Live, source-labeled images for the current request.");
    value.items = [{ id: "img-1", title: "Accra mural", description: "A source-labeled image result.", sourceName: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Accra_mural.jpg", imageUrl: "https://upload.wikimedia.org/example.jpg", metadata: ["CC BY-SA"] }];
    return result("images", "search", "live-knowledge", value, "The image result is visible.");
  }
  if (lower.includes("mwanza") || lower.includes("map")) {
    const value = artifact("map", "Mwanza, Tanzania", "Live OpenStreetMap view.");
    value.links = [{ label: "Open interactive map", url: "https://www.openstreetmap.org/#map=12/-2.516/32.917" }];
    value.media = { kind: "map", title: "Mwanza map", provider: "OpenStreetMap", sourceUrl: value.links[0].url, embedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=32.8%2C-2.6%2C33.0%2C-2.4&marker=-2.516%2C32.917", state: "ready" };
    return result("map", "open", "maps", value, "The live map is visible.");
  }
  if (lower.includes("beans") || lower.includes("buyer") || lower.includes("price")) {
    const value = previous && previous.kind === "draft" ? structuredClone(previous) : artifact("draft", "Bean marketplace draft", "Local editable draft; nothing has been submitted.");
    value.fields = [
      { id: "product", label: "Product", type: "text", value: "red beans", required: true, options: [] },
      { id: "quantity", label: "Quantity", type: "text", value: "18 sacks", required: true, options: [] },
      { id: "price", label: "Price", type: "text", value: lower.includes("price") ? "KSh 6,500 per sack" : "", required: false, options: [] }
    ];
    return result("marketplace-draft", previous && previous.kind === "draft" ? "update" : "create", "marketplace", value, "The editable marketplace draft is visible and has not been submitted.");
  }
  const value = artifact("workspace", "Open Nexus workspace", "Ask naturally for a document, provider result, media, map, listing, or revision.");
  return result("workspace", "open", body.activeWorkspace || body.requestedWorkspace || "live-knowledge", value);
}

async function main() {
  const server = http.createServer((request, response) => {
    const requested = request.url === "/" ? "index.html" : request.url.replace(/^\//, "").split("?")[0];
    const file = path.resolve(browserRoot, requested);
    if (!file.startsWith(`${browserRoot}${path.sep}`) || !fs.existsSync(file)) { response.statusCode = 404; response.end("not found"); return; }
    response.setHeader("content-type", contentTypes[path.extname(file)] || "application/octet-stream");
    response.end(fs.readFileSync(file));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const requests = [];
  const evidenceRoot = path.resolve(__dirname, "..", "..", "output", "nexus-content-population-repair");
  fs.mkdirSync(evidenceRoot, { recursive: true });

  try {
    await context.addInitScript(() => {
      sessionStorage.setItem("nexus.clean.session", "content-test-session");
      class Target { constructor() { this.listeners = {}; } addEventListener(type, callback) { (this.listeners[type] ||= []).push(callback); } emit(type, event = {}) { for (const callback of this.listeners[type] || []) callback(event); } }
      class Channel extends Target { constructor() { super(); this.readyState = "open"; } send() {} close() {} }
      class Peer extends Target { constructor() { super(); this.connectionState = "new"; this.channel = new Channel(); } createDataChannel() { return this.channel; } addTrack() {} async createOffer() { return { type: "offer", sdp: "offer" }; } async setLocalDescription() {} async setRemoteDescription() { this.connectionState = "connected"; this.emit("track", { streams: [new MediaStream()] }); this.emit("connectionstatechange"); } close() {} }
      window.RTCPeerConnection = Peer;
      window.AudioContext = class { constructor() { this.state = "running"; this.destination = {}; } createGain() { return { gain: { value: 1 }, connect() {} }; } createMediaStreamSource() { return { connect() {}, disconnect() {} }; } resume() { return Promise.resolve(); } close() { return Promise.resolve(); } };
      window.webkitAudioContext = window.AudioContext;
      Object.defineProperty(navigator, "mediaDevices", { configurable: true, value: { async getUserMedia() { const track = { id: "content-test-track", readyState: "live", enabled: true, stop() { this.readyState = "ended"; } }; return { getAudioTracks: () => [track], getTracks: () => [track] }; } } });
      HTMLMediaElement.prototype.play = () => Promise.resolve(); HTMLMediaElement.prototype.pause = () => {};
      window.__contentAcks = [];
      window.addEventListener("nexus.clean.workspace.acknowledged", (event) => { if (event.detail?.contentExtension) window.__contentAcks.push(event.detail); });
    });
    await context.addInitScript(installRendererOutcomeVerifier);
    await context.route(`${baseUrl}/api/voice/session`, (route) => route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ sessionId: "rt-content", clientSecret: "ek-content" }) }));
    await context.route("https://api.openai.com/v1/realtime/calls", (route) => route.fulfill({ status: 200, contentType: "application/sdp", body: "answer" }));
    await context.route(`${baseUrl}/api/visual/content`, async (route) => {
      const body = route.request().postDataJSON(); requests.push(body);
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ...resolved(body), requestId: body.requestId }) });
    });
    await context.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: "<html><body>media</body></html>" }));
    await context.route("https://www.openstreetmap.org/export/embed.html**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: "<html><body>map</body></html>" }));
    await context.route("https://upload.wikimedia.org/**", (route) => route.fulfill({ status: 200, contentType: "image/svg+xml", body: "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'></svg>" }));

    const page = await context.newPage();
    await page.goto(baseUrl);
    await page.locator("#nexus-orb").click();
    await page.waitForFunction(() => window.NexusCleanRuntime?.snapshot().state.state === "connected");

    async function say(command, titlePattern, rendererSurface = "content-population") {
      const beforeId = await page.evaluate((surface) => window.NexusRendererOutcomeVerifier.currentResultId(surface), rendererSurface);
      await page.evaluate((value) => window.dispatchEvent(new CustomEvent("nexus.clean.receipt", { detail: { type: "transcript.final", detail: { transcript: value } } })), command);
      await page.waitForFunction(({ previousId, pattern, rendererSurface }) => {
        const resultId = window.NexusRendererOutcomeVerifier.currentResultId(rendererSurface);
        if (!resultId || resultId === previousId) return false;
        const proof = window.NexusRendererOutcomeVerifier.capture(rendererSurface, resultId);
        return proof.exists && proof.visible && new RegExp(pattern, "i").test(proof.visibleText);
      }, { previousId: beforeId, pattern: titlePattern, rendererSurface }, { timeout: 10000 });
      await page.waitForFunction(() => window.NexusContentPopulation.snapshot().pending.length === 0);
    }

    const captures = [];
    async function capture(label, prompt) {
      const screenshot = path.join(evidenceRoot, `${String(captures.length + 1).padStart(2, "0")}-${label}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
      const dom = await page.evaluate(() => ({
        workspace: document.querySelector("#nexus-workspace")?.dataset.workspace || null,
        contentAction: document.querySelector("#nexus-workspace")?.dataset.contentAction || null,
        populated: document.querySelector("#nexus-workspace")?.dataset.populated || null,
        visibleText: String(document.querySelector("#nexus-app-surface")?.innerText || "").replace(/\s+/g, " ").trim().slice(0, 1600),
        links: [...document.querySelectorAll("#nexus-app-surface a[href]")].map((link) => ({ text: link.textContent.trim(), href: link.href })),
        mediaSource: document.querySelector("#nexus-content-music-frame, #nexus-content-map-frame")?.getAttribute("src") || null
      }));
      captures.push({ label, prompt, screenshot, dom });
    }

    await say("Open the editable résumé builder", "R(?:é|e)sum(?:é|e) Builder", "protected-workspace");
    const resumeProof = await page.evaluate(() => window.NexusRendererOutcomeVerifier.captureCurrent("protected-workspace"));
    assert.equal(resumeProof.owner, "protected-workspace-renderer");
    assert.ok(resumeProof.controls.length >= 4, "protected résumé owner did not expose editable fields");
    await capture("protected-resume-owner", "Open the editable résumé builder");

    await say("Take me somewhere horn-led from Addis Ababa", "Mulatu Astatke");
    assert.match(await page.locator("#nexus-content-music-frame").getAttribute("src"), /ethiopia123/);
    await say("Different direction—something glossy from 1980s Japan", "Japanese city pop");
    assert.match(await page.locator("#nexus-content-music-frame").getAttribute("src"), /citypop456/);
    assert.doesNotMatch(await page.locator("#nexus-content-music-frame").getAttribute("src"), /ethiopia123/);
    await capture("music-any-culture-followup", "Different direction—something glossy from 1980s Japan");
    await say("That's enough—make it quiet now", "Playback stopped");
    assert.equal(await page.locator("#nexus-content-music-frame").count(), 0);
    assert.equal(await page.locator("#nexus-music-frame").getAttribute("src"), null);

    await say("What happened to the soil in the Sahel, according to current institutions?", "Sahel soil-restoration sources");
    assert.equal(await page.locator("a[href='https://www.fao.org/example']").count(), 1);
    await say("Give me another reputable angle", "Another reputable source set");
    assert.equal(await page.locator("a[href='https://www.worldbank.org/example']").count(), 1);
    assert.ok(requests.at(-1).previousArtifact.items.some((item) => item.sourceName === "FAO"));
    await capture("live-sources-contextual-alternative", "Give me another reputable angle");

    await say("Set up an intake for a traveler back from Ghana", "Travel health intake");
    await page.locator("textarea[name='concern']").fill("Headache");
    await say("Add that the fever started yesterday", "Fever started yesterday");
    assert.equal(await page.locator("textarea[name='concern']").inputValue(), "Fever started yesterday");
    assert.ok(requests.at(-1).visibleFields.some((field) => field.id === "concern" && field.value === "Headache"));
    await capture("voice-style-visible-field-update", "Add that the fever started yesterday");

    await say("Bring up source-labeled street-art images from Accra", "Accra street-art images");
    assert.equal(await page.locator("img[alt='Accra mural']").count(), 1);
    await capture("live-images-unseen-topic", "Bring up source-labeled street-art images from Accra");

    await say("I need Mwanza on a map", "Mwanza, Tanzania");
    await page.locator("#nexus-content-map-frame[src*='openstreetmap.org']").waitFor({ state: "visible" });
    await capture("live-map-new-country", "I need Mwanza on a map");

    await say("Make a buyer-facing draft for 18 sacks of red beans", "Bean marketplace draft");
    assert.match(await page.locator("#nexus-app-surface").innerText(), /nothing has been submitted/i);
    await say("Put the price at KSh 6,500 per sack", "Bean marketplace draft");
    assert.equal(await page.locator("input[name='price']").inputValue(), "KSh 6,500 per sack");
    await capture("marketplace-natural-revision", "Put the price at KSh 6,500 per sack");

    await say("Put on morna from Cabo Verde", "Music provider unavailable");
    assert.equal(await page.locator("[data-result-status='failed']").count(), 1);
    assert.match(await page.locator("#nexus-app-surface").innerText(), /credentials are unavailable/i);
    assert.equal(await page.locator("#nexus-workspace").getAttribute("data-populated"), "false");

    const evidence = await page.evaluate(() => ({ acknowledgements: window.__contentAcks, snapshot: window.NexusContentPopulation.snapshot() }));
    const successes = evidence.acknowledgements.filter((ack) => ack.outcomeVerified);
    const failures = evidence.acknowledgements.filter((ack) => !ack.outcomeVerified);
    assert.ok(successes.length >= 13, `Expected at least 13 successes, saw ${successes.length}`);
    assert.ok(successes.every((ack) => ack.visible && ack.populated));
    assert.ok(failures.some((ack) => /credentials are unavailable/i.test(ack.recovery?.message || "")));
    assert.equal(evidence.snapshot.pending.length, 0);
    fs.writeFileSync(path.join(evidenceRoot, "browser-evidence.json"), JSON.stringify({ captures, requests, evidence }, null, 2));
    console.log(`Nexus open capability real-browser acceptance: PASS (${successes.length} novel/contextual successes, ${failures.length} truthful provider failure)`);
  } finally {
    await browser.close(); server.close(); await once(server, "close");
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
