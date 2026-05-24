const { authModule } = require("./modules/auth/module");
const { coreModule } = require("./modules/core/module");
const { learningModule } = require("./modules/learning/module");
const { workforceModule } = require("./modules/workforce/module");
const { healthModule } = require("./modules/health/module");
const { tradeModule } = require("./modules/trade/module");
const { aiModule } = require("./modules/ai/module");
const { mapsModule } = require("./modules/maps/module");
const { systemModule } = require("./modules/system/module");
const { adminModule } = require("./modules/admin/module");
const { createFoundationRouter } = require("./routes");

const modules = [
  authModule,
  coreModule,
  learningModule,
  workforceModule,
  healthModule,
  tradeModule,
  aiModule,
  mapsModule,
  systemModule,
  adminModule
];

function describeFoundation() {
  return {
    name: "AgriNexus Foundation",
    version: "0.1.0",
    modules: modules.map(module => module.describe())
  };
}

module.exports = { modules, describeFoundation, createFoundationRouter };
