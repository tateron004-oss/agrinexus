"use strict";

const path = require("node:path");
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  globalSetup: require.resolve("./nexus-path-1-physical-global-setup.js"),
  use: {
    storageState: path.resolve("output/nexus-path-1-physical/standard-user-storage.json")
  }
});
