const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "exports", "investor-screenshots");
const port = process.env.PORT || "4185";
const base = `http://127.0.0.1:${port}`;
const debuggingPort = process.env.CDP_PORT || "9225";
const chromePath = process.env.CHROME_PATH
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const requestedBrowserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

const sections = [
  {
    id: "dashboard",
    file: "01-dashboard-command-center.png",
    title: "Command Dashboard",
    explanation: "The opening workspace shows the whole operating picture: learning, workforce, health, trade, map intelligence, integrations, and profile evidence. For investors, this proves the platform is coordinated around workflows instead of separate landing pages."
  },
  {
    id: "learning",
    file: "02-learning-development.png",
    title: "Learning & Development",
    explanation: "This module supports course enrollment, lesson completion, quizzes, certificates, AI tutoring, and accessible learning packets. It shows how learners can build verified skills that later connect to workforce opportunities."
  },
  {
    id: "workforce",
    file: "03-workforce-pipeline.png",
    title: "Workforce Pipeline",
    explanation: "The workforce workspace turns training progress into candidate readiness, applications, interviews, mentor support, shift scheduling, role matching, and earnings evidence."
  },
  {
    id: "health",
    file: "04-afayai-health-telehealth.png",
    title: "AFAYAI Health / Telehealth",
    explanation: "The telehealth module supports patient intake, representative connection, safety review, AI-assisted care planning, and accessibility support for hearing-impaired, visually-impaired, and low-bandwidth users."
  },
  {
    id: "trade",
    file: "05-agritrade-market-operations.png",
    title: "AgriTrade",
    explanation: "AgriTrade coordinates product lots, buyer orders, wallet transactions, market activity, and logistics movement. It demonstrates how rural farmers and cooperatives can connect to structured commerce."
  },
  {
    id: "map",
    file: "06-map-ai-command.png",
    title: "Map & AI",
    explanation: "The map connects country context, routes, checkpoints, facilities, health pressure, logistics activity, and AI recommendations. It gives operators a geographic command view instead of a static map."
  },
  {
    id: "integrations",
    file: "07-integrations-provider-layer.png",
    title: "Integrations",
    explanation: "The integrations workspace shows the provider layer for AI, learning certificates, workforce systems, telehealth, notifications, payments, logistics, market data, maps, and persistence."
  },
  {
    id: "admin",
    file: "08-admin-governance.png",
    title: "Admin Control Room",
    explanation: "Admin gives operators visibility into module health, users, audit events, AI governance, notifications, provider readiness, and production setup status."
  },
  {
    id: "profile",
    file: "09-unified-profile.png",
    title: "Unified Profile",
    explanation: "The profile is the proof layer. Learning, workforce, health, wallet, trade, and AI activity all roll into one operating record that funders and partners can review."
  }
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitFor(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await wait(250);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function cdpConnect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result || {});
    }
  };
  return {
    send(method, params = {}) {
      id += 1;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() {
      ws.close();
    }
  };
}

async function browserWebSocket() {
  await waitFor(`http://127.0.0.1:${debuggingPort}/json/list`, 40);
  for (let i = 0; i < 20; i += 1) {
    const targets = await fetch(`http://127.0.0.1:${debuggingPort}/json/list`).then((res) => res.json());
    const page = targets.find((target) => target.type === "page" && target.webSocketDebuggerUrl);
    if (page) return page.webSocketDebuggerUrl;
    await wait(250);
  }
  throw new Error("No Chrome page target was available for screenshot capture.");
}

function imageMarkdown(file) {
  return `![${file}](exports/investor-screenshots/${file})`;
}

function writeWalkthrough() {
  const lines = [
    "# AgriNexus Investor Screenshot Walkthrough",
    "",
    "Use this document as the visual companion to the investor demo video. Each screenshot shows a real platform section and includes the core explanation to speak over that screen.",
    ""
  ];

  sections.forEach((section, index) => {
    lines.push(`## ${index + 1}. ${section.title}`);
    lines.push("");
    lines.push(imageMarkdown(section.file));
    lines.push("");
    lines.push(section.explanation);
    lines.push("");
  });

  lines.push("## Suggested Investor Flow");
  lines.push("");
  lines.push("Start with the Dashboard, then move through Learning, Workforce, AFAYAI Health, AgriTrade, Map & AI, Integrations, Admin, and Profile. The story is simple: AgriNexus moves a rural user from learning to work, care, commerce, and evidence inside one coordinated platform.");
  lines.push("");

  fs.writeFileSync(path.join(root, "AGRINEXUS_INVESTOR_SCREENSHOT_WALKTHROUGH.md"), lines.join("\n"), "utf8");
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: port },
    stdio: "ignore",
    windowsHide: true
  });

  const userDataDir = path.join(outDir, "chrome-profile");
  fs.rmSync(userDataDir, { recursive: true, force: true });

  function launchBrowser(exePath) {
    return spawn(exePath, [
    "--headless=new",
    `--remote-debugging-port=${debuggingPort}`,
    `--user-data-dir=${userDataDir}`,
    "--window-size=1440,1100",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
      `${base}/`
    ], { stdio: "ignore", windowsHide: true });
  }

  let browser = launchBrowser(requestedBrowserPath);

  try {
    await waitFor(`${base}/`, 60);
    try {
      await waitFor(`http://127.0.0.1:${debuggingPort}/json/list`, 24);
    } catch (error) {
      browser.kill();
      if (requestedBrowserPath !== edgePath && fs.existsSync(edgePath)) {
        browser = launchBrowser(edgePath);
        await waitFor(`http://127.0.0.1:${debuggingPort}/json/list`, 40);
      } else {
        throw error;
      }
    }
    const cdp = await cdpConnect(await browserWebSocket());
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1100,
      deviceScaleFactor: 1,
      mobile: false
    });
    await cdp.send("Page.navigate", { url: `${base}/` });
    await wait(1500);
    await cdp.send("Runtime.evaluate", {
      awaitPromise: true,
      expression: `
        fetch('/api/login', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ email: 'demo@agrinexus.org', password: 'Prototype2026!' })
        }).then(() => fetch('/api/demo/wow', { method: 'POST', credentials: 'same-origin' }))
      `
    });
    await cdp.send("Page.navigate", { url: `${base}/` });
    await wait(2500);

    for (const section of sections) {
      await cdp.send("Runtime.evaluate", {
        awaitPromise: true,
        expression: `
          (() => {
            const button = document.querySelector('[data-section="${section.id}"]');
            if (button) button.click();
            window.scrollTo(0, 0);
            return true;
          })()
        `
      });
      await wait(section.id === "map" ? 2500 : 1000);
      const shot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        fromSurface: true,
        captureBeyondViewport: false
      });
      fs.writeFileSync(path.join(outDir, section.file), Buffer.from(shot.data, "base64"));
    }

    cdp.close();
    writeWalkthrough();
    console.log(`Created ${sections.length} screenshots in ${outDir}`);
    console.log(`Created ${path.join(root, "AGRINEXUS_INVESTOR_SCREENSHOT_WALKTHROUGH.md")}`);
  } finally {
    browser.kill();
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
