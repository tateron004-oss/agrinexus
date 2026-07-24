const { test, expect } = require("@playwright/test");

const journeys = [
  {
    name: "Maps",
    workspace: "map",
    command: "Nexus, open Maps and plan a route from Nairobi to Nakuru.",
    expected: { origin: "Nairobi", destination: "Nakuru" }
  },
  {
    name: "Workforce",
    workspace: "workforce",
    command: "Nexus, open Workforce and search for farming jobs in Kenya.",
    expected: { jobType: "farming", country: "Kenya" }
  },
  {
    name: "Marketplace",
    workspace: "trade",
    command: "Nexus, open Marketplace and sell 50 bags of maize.",
    expected: { action: "sell", quantity: "50", unit: "bags", product: "maize" }
  },
  {
    name: "Health",
    workspace: "health",
    command: "Nexus, open Health and record blood pressure 140 over 90.",
    expected: { intakeType: "blood-pressure", systolic: "140", diastolic: "90" }
  }
];

async function installBoundaryObserver(page) {
  await page.addInitScript(() => {
    const evidence = {
      finalTranscripts: [],
      controllerCalls: [],
      acknowledgements: [],
      errors: []
    };
    window.__NEXUS_PLAYWRIGHT_EVIDENCE__ = evidence;
    window.addEventListener("genesis.workspace.acknowledged", event => {
      evidence.acknowledgements.push({
        at: Date.now(),
        ...event.detail
      });
    });
    window.addEventListener("error", event => {
      evidence.errors.push(String(event.error?.stack || event.message || "browser-error"));
    });
    window.addEventListener("unhandledrejection", event => {
      evidence.errors.push(String(event.reason?.stack || event.reason || "unhandled-rejection"));
    });

    let controller;
    Object.defineProperty(window, "NexusBrowserActionController", {
      configurable: true,
      enumerable: true,
      get: () => controller,
      set(value) {
        controller = {
          actionFor: typeof value.actionFor === "function" ? value.actionFor.bind(value) : undefined,
          handleFinalUserTranscript(input, actionBuilder) {
            const result = value.handleFinalUserTranscript(input, actionBuilder);
            evidence.controllerCalls.push({
              at: Date.now(),
              transcript: String(input?.transcript || ""),
              transcriptId: String(input?.transcriptId || ""),
              handled: result?.handled === true,
              duplicate: result?.duplicate === true,
              workspace: String(result?.workspace || result?.action?.workspace || ""),
              requestId: String(result?.requestId || result?.action?.requestId || "")
            });
            return result;
          }
        };
      }
    });
  });
}

async function login(page) {
  await page.waitForFunction(() =>
    typeof window.NexusGenesisRealtimeClientStatus === "function"
    && typeof window.executeGenesisWorkspaceFromFinalTranscript === "function"
  );
  const email = process.env.NEXUS_PLAYWRIGHT_EMAIL || "user@agrinexus.org";
  const password = process.env.NEXUS_PLAYWRIGHT_PASSWORD || "User2026!";
  await page.locator("#email").fill(email);
  await page.locator("#password").fill(password);
  await Promise.all([
    page.locator("#loginForm").waitFor({ state: "hidden" }),
    page.locator("#loginForm").evaluate(form => form.requestSubmit())
  ]);
  await expect(
    page.locator("#nexusPermanentMicrophoneBtn"),
    "Production UI login must render the authenticated app before voice acceptance"
  ).toBeEnabled();
}

async function realtimeStatus(page) {
  return page.evaluate(() => {
    const status = window.NexusGenesisRealtimeClientStatus?.() || {};
    const microphone = document.querySelector("#nexusPermanentMicrophoneBtn");
    return {
      activeRuntime: String(status.activeRuntime || ""),
      connectionState: String(status.connectionState || ""),
      liveMicrophoneTrack: status.liveMicrophoneTrack === true,
      controllerState: String(status.controllerState || status.state || ""),
      microphoneLabel: String(microphone?.getAttribute("aria-label") || microphone?.textContent || "")
    };
  });
}

test("four finalized transcripts open and populate existing workspaces exactly once", async ({ page }, testInfo) => {
  const consoleErrors = [];
  page.on("console", message => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", error => consoleErrors.push(error.stack || error.message));

  await installBoundaryObserver(page);
  await page.goto("/?voiceDebug=1&voiceAcceptance=1", { waitUntil: "domcontentloaded" });
  await login(page);

  const microphone = page.locator("#nexusPermanentMicrophoneBtn");
  await expect(microphone).toBeVisible();
  await microphone.click();
  await expect.poll(() => realtimeStatus(page), {
    message: "The existing OpenAI Realtime session and SDK microphone must be live"
  }).toMatchObject({
    activeRuntime: "realtime",
    connectionState: "connected",
    liveMicrophoneTrack: true
  });

  for (const journey of journeys) {
    console.log(`NEXUS_WORKSPACE_PROOF_START ${journey.workspace}`);
    const before = await page.evaluate(() => ({
      calls: window.__NEXUS_PLAYWRIGHT_EVIDENCE__.controllerCalls.length,
      acks: window.__NEXUS_PLAYWRIGHT_EVIDENCE__.acknowledgements.length
    }));

    const execution = await page.evaluate(async ({ command, workspace }) => {
      window.__NEXUS_PLAYWRIGHT_EVIDENCE__.finalTranscripts.push({
        at: Date.now(),
        role: "user",
        final: true,
        transcript: command
      });
      const controllerResult = window.NexusBrowserActionController?.handleFinalUserTranscript({
        transcript: command,
        transcriptId: `playwright-${workspace}-${Date.now()}`,
        sessionId: "playwright-deployed-workspace-proof",
        role: "user",
        isFinal: true
      }, transcript => window.genesisWorkspaceActionFromFinalTranscript(transcript));
      const accepted = controllerResult?.handled === true
        && await window.executeGenesisWorkspaceFromFinalTranscript(controllerResult.originalTranscript);
      return { accepted, handled: controllerResult?.handled === true };
    }, { command: journey.command, workspace: journey.workspace });
    expect(execution.handled, `${journey.name} final transcript must be handled by the Browser Action Controller`).toBe(true);
    expect(execution.accepted, `${journey.name} command must receive verified acknowledgement`).toBe(true);

    await expect.poll(async () => page.evaluate(({ before, workspace }) => {
      const evidence = window.__NEXUS_PLAYWRIGHT_EVIDENCE__;
      const newCalls = evidence.controllerCalls.slice(before.calls);
      const newAcks = evidence.acknowledgements.slice(before.acks);
      return {
        handledCalls: newCalls.filter(item => item.handled && item.workspace === workspace).length,
        verifiedAcks: newAcks.filter(item => item.verified && item.workspace === workspace).length
      };
    }, { before, workspace: journey.workspace })).toEqual({
      handledCalls: 1,
      verifiedAcks: 1
    });

    const proof = await page.evaluate(({ workspace, expected }) => {
      const host = document.querySelector('#nexus-workspace[data-nexus-workspace="true"]');
      const values = Object.fromEntries(
        [...document.querySelectorAll("[data-nexus-realtime-field]")]
          .map(field => [field.dataset.nexusRealtimeField, String(field.value || field.textContent || "")])
      );
      const ack = [...window.__NEXUS_PLAYWRIGHT_EVIDENCE__.acknowledgements]
        .reverse()
        .find(item => item.workspace === workspace);
      return {
        bodyWorkspace: document.body.dataset.genesisWorkspace || "",
        bodyRequestId: document.body.dataset.genesisWorkspaceRequestId || "",
        workspaceVisible: Boolean(host && host.getClientRects().length),
        values,
        acknowledgement: ack,
        expected
      };
    }, { workspace: journey.workspace, expected: journey.expected });

    expect(proof.bodyWorkspace).toBe(journey.workspace);
    expect(proof.bodyRequestId).toBeTruthy();
    expect(proof.workspaceVisible).toBe(true);
    expect(proof.values).toMatchObject(journey.expected);
    expect(proof.acknowledgement).toMatchObject({
      requestId: proof.bodyRequestId,
      workspace: journey.workspace,
      opened: true,
      visible: true,
      microphoneActive: true,
      realtimeConnected: true,
      verified: true,
      error: null
    });

    const afterVoice = await realtimeStatus(page);
    expect(afterVoice).toMatchObject({
      activeRuntime: "realtime",
      connectionState: "connected",
      liveMicrophoneTrack: true
    });
    await page.screenshot({
      path: testInfo.outputPath(`${journey.workspace}-verified.png`),
      fullPage: true
    });
    console.log(`NEXUS_WORKSPACE_PROOF_PASS ${journey.workspace}`);
  }

  const evidence = await page.evaluate(() => window.__NEXUS_PLAYWRIGHT_EVIDENCE__);
  await testInfo.attach("nexus-workspace-evidence", {
    body: Buffer.from(JSON.stringify({ journeys, evidence }, null, 2)),
    contentType: "application/json"
  });
  expect(evidence.finalTranscripts).toHaveLength(journeys.length);
  expect(evidence.controllerCalls.filter(item => item.handled)).toHaveLength(journeys.length);
  expect(evidence.acknowledgements.filter(item => item.verified)).toHaveLength(journeys.length);
  expect(evidence.errors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
