const { defineConfig } = require("@playwright/test");

const baseURL = process.env.NEXUS_PLAYWRIGHT_BASE_URL
  || "https://agrinexus-platform.onrender.com";
const wsEndpoint = process.env.NEXUS_PLAYWRIGHT_WS_ENDPOINT || "";

module.exports = defineConfig({
  testDir: "./tests/playwright",
  testMatch: "nexus-workspace-action.spec.js",
  timeout: 120_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [
    ["line"],
    ["json", { outputFile: "test-results/nexus-workspace-action/results.json" }]
  ],
  outputDir: "test-results/nexus-workspace-action/artifacts",
  use: {
    baseURL,
    ...(wsEndpoint ? { connectOptions: { wsEndpoint, timeout: 60_000 } } : {}),
    headless: process.env.NEXUS_PLAYWRIGHT_HEADED !== "true",
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    permissions: ["microphone"],
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    ...(!wsEndpoint ? { launchOptions: {
      args: [
        "--use-fake-device-for-media-stream",
        "--use-fake-ui-for-media-stream",
        "--autoplay-policy=no-user-gesture-required"
      ]
    } } : {})
  }
});
