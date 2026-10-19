"use strict";
// Questions a small, minority-owned or nonprofit owner in California asks, spoken in English and in Spanish, answered from the checked California guide (nexus/knowledge/california-business.js) with the official pages as buttons.
// Each must put the key fact for its topic on the screen and show the pages behind the answer as links (the rig counts those buttons). The Spanish ones also carry the preliminary-translation note, which is in the answer's last lines
// and so beyond what the rig reads: the key Spanish fact is checked here, the note by test/nexus/california-spanish-oct19.test.js.
const english = (id, say, key, links = 1) => ({ id: `ca-${id}`, area: "california", say, timeoutMs: 60000, expect: { screen: ["text", "list"], text: key, links, notText: "I cannot find|not sure what you" } });
const spanish = (id, say, key, links = 1) => ({ id: `ca-es-${id}`, area: "california", say, timeoutMs: 60000, expect: { screen: ["text", "list"], text: key, links, notText: "I cannot find|not sure what you" } });

module.exports = Object.freeze([
  english("certified", "How do I get certified as a minority-owned business in California?", "Small Business", 3),
  english("seller-permit", "How do I get a seller's permit in California?", "seller's permit", 1),
  english("state-vendor", "How do I become a vendor for the State of California?", "Cal eProcure", 1),
  english("la28", "What is LA28 and how can my business get a contract?", "RAMP LA", 3),
  english("free-help", "Where can I get free help starting a business in California?", "30 languages", 1),
  english("nonprofit-after", "What do I do after forming a California nonprofit to be tax exempt?", "Franchise Tax Board", 2),
  english("grants", "Where can I find grants for Latino-owned businesses in California?", "Dream Fund", 2),
  english("source-page", "Show me your sources for small business.", "official pages", 20),
  spanish("seller-permit", "¿Cómo obtengo un permiso de vendedor en California?", "permiso de vendedor", 1),
  spanish("certified", "¿Cómo me certifico como negocio de minoría en California?", "Cal eProcure", 3),
  spanish("free-help", "¿Dónde encuentro ayuda gratuita para mi negocio en California?", "30 idiomas", 1)
]);
