"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("@playwright/test");

module.exports = async function globalSetup() {
  const baseURL = process.env.NEXUS_CLEAN_BASE_URL || "https://nexus-genesis-certified.onrender.com";
  const storageState = path.resolve("output/nexus-path-1-physical/standard-user-storage.json");
  fs.mkdirSync(path.dirname(storageState), { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.goto(baseURL, { waitUntil: "domcontentloaded" });
    await page.getByRole("textbox", { name: "Your name" }).fill("Ron");
    await page.getByRole("button", { name: "Start as User", exact: true }).click();
    await page.locator("#nexus-orb").waitFor({ state: "visible", timeout: 60000 });
    await context.storageState({ path: storageState });
  } finally {
    await browser.close();
  }
};
