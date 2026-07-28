"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { once } = require("node:events");
const { chromium } = require("playwright");

const browserRoot = path.resolve(__dirname, "..", "browser");
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

async function main() {
  const server = http.createServer((request, response) => {
    const requested = request.url === "/" ? "index.html" : request.url.replace(/^\//, "");
    const file = path.join(browserRoot, requested);
    if (!file.startsWith(browserRoot) || !fs.existsSync(file)) {
      response.statusCode = 404;
      response.end("not found");
      return;
    }
    response.setHeader("content-type", contentTypes[path.extname(file)] || "application/octet-stream");
    response.end(fs.readFileSync(file));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  try {
    await context.addInitScript(() => {
      sessionStorage.setItem("nexus.clean.session", "opaque-signed-session");
      window.__mediaRequests = 0;
      window.__audioPlayed = 0;
      class Target {
        constructor() { this.listeners = {}; }
        addEventListener(type, callback) {
          (this.listeners[type] ||= []).push(callback);
        }
        emit(type, event = {}) {
          for (const callback of this.listeners[type] || []) callback(event);
        }
      }
      class Channel extends Target {
        constructor() {
          super();
          this.readyState = "open";
          this.sent = [];
        }
        send(value) { this.sent.push(value); }
        close() { this.readyState = "closed"; this.emit("close"); }
      }
      class Peer extends Target {
        constructor() {
          super();
          this.connectionState = "new";
          this.channel = new Channel();
        }
        createDataChannel() { return this.channel; }
        addTrack() {}
        async createOffer() { return { type: "offer", sdp: "browser-offer" }; }
        async setLocalDescription() {}
        async setRemoteDescription() {
          this.connectionState = "connected";
          this.emit("track", { streams: [{ id: "remote-browser-audio" }] });
          this.emit("connectionstatechange");
        }
        close() { this.connectionState = "closed"; }
      }
      window.RTCPeerConnection = Peer;
      const track = {
        id: "browser-microphone-track",
        readyState: "live",
        enabled: true,
        stop() { this.readyState = "ended"; }
      };
      Object.defineProperty(navigator, "mediaDevices", {
        configurable: true,
        value: {
          async getUserMedia() {
            window.__mediaRequests += 1;
            return {
              getAudioTracks: () => [track],
              getTracks: () => [track]
            };
          }
        }
      });
      HTMLMediaElement.prototype.play = function play() {
        window.__audioPlayed += 1;
        return Promise.resolve();
      };
    });
    await context.route(`${baseUrl}/api/voice/session`, async (route) => {
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ sessionId: "rt-browser-1", clientSecret: "ek_browser" })
      });
    });
    await context.route("https://api.openai.com/v1/realtime/calls", async (route) => {
      await route.fulfill({ status: 200, contentType: "application/sdp", body: "browser-answer" });
    });

    const page = await context.newPage();
    await page.goto(baseUrl);
    await page.locator("#nexus-orb").click();
    await page.locator("#nexus-status").waitFor({ state: "visible" });
    await page.waitForFunction(() => document.querySelector("#nexus-status").textContent === "Listening");
    const proof = await page.evaluate(() => ({
      mediaRequests: window.__mediaRequests,
      audioPlayed: window.__audioPlayed,
      pressed: document.querySelector("#nexus-orb").getAttribute("aria-pressed"),
      snapshot: window.NexusCleanRuntime.snapshot()
    }));
    assert.equal(proof.mediaRequests, 1);
    assert.equal(proof.audioPlayed, 1);
    assert.equal(proof.pressed, "true");
    assert.equal(proof.snapshot.state.state, "connected");
    assert.ok(proof.snapshot.receipts.some((receipt) => receipt.type === "audio.remote-attached"));

    const commands = [
      ["agriculture", "Help me diagnose my maize crop"],
      ["health", "Record my blood pressure"],
      ["telehealth", "Start a telehealth intake"],
      ["mobile-clinic", "Find a mobile clinic visit"],
      ["pharmacy", "Open pharmacy support"],
      ["learning", "Find a literacy course"],
      ["workforce", "Search farming jobs in Kenya"],
      ["marketplace", "Sell 50 bags of maize"],
      ["maps", "Show me a map of Kenya"],
      ["music", "Play Kenyan soul music"],
      ["reminders", "Remind me to take my medicine"],
      ["offline", "Show my offline queue"],
      ["live-knowledge", "Search the internet for today's Kenya weather"]
    ];
    for (const [workspace, command] of commands) {
      const result = await page.evaluate((spokenCommand) =>
        window.NexusCleanRuntime.route(spokenCommand), command);
      assert.equal(result.workspace, workspace);
      assert.equal(result.acknowledgement.visible, true);
      await page.waitForFunction((expectedWorkspace) => {
        const host = document.querySelector("#nexus-workspace");
        return host && !host.hidden
          && host.dataset.workspace === expectedWorkspace
          && host.dataset.populated === "true";
      }, workspace);
      assert.equal(await page.locator("#nexus-workspace").evaluate((element) => {
        const style = getComputedStyle(element);
        return style.position === "fixed"
          && style.inset === "0px"
          && element.clientWidth === document.documentElement.clientWidth;
      }), true);
    }
    assert.ok(await page.locator("#nexus-map-frame").getAttribute("src"));
    const musicSource = await page.locator("#nexus-music-frame").getAttribute("src");
    assert.match(musicSource, /youtube-nocookie\.com\/embed/);
    assert.match(musicSource, /autoplay=1/);
    assert.doesNotMatch(musicSource, /listType=search/);
    assert.equal(await page.locator("#nexus-preferences").getAttribute("open"), null);
    await page.locator("#nexus-workspace-close").click();
    assert.equal(await page.locator("#nexus-workspace").isHidden(), true);
    const visibleReceipts = await page.evaluate(() =>
      window.NexusCleanRuntime.snapshot().receipts
        .filter((receipt) => receipt.type === "workspace.visible")
        .map((receipt) => receipt.detail.workspace));
    assert.deepEqual(visibleReceipts.slice(-13), commands.map(([workspace]) => workspace));
    console.log("Nexus clean browser Playwright smoke: PASS");
  } finally {
    await browser.close();
    server.close();
    await once(server, "close");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
