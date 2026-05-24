const { describeFoundation } = require("../src/app");

const foundation = describeFoundation();

console.log(`${foundation.name} ${foundation.version}`);
for (const module of foundation.modules) {
  console.log(`- ${module.name}: ${module.routes.length} routes, ${module.tables.length} tables`);
}
