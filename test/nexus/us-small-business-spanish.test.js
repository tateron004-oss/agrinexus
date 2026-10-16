"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const guide = require("../../nexus/knowledge/us-small-business.js");
const spanish = require("../../nexus/knowledge/us-small-business-es/index.js");
const topics = require("../../public/kyro-business-topics.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// The Spanish version of the checked small-business guide (a preliminary translation, to be reviewed by a fluent speaker: see us-small-business-es/index.js). The English topics stay the source of truth.

test("every English topic has a Spanish one, and the Spanish has none the English does not", () => {
  assert.deepEqual(Object.keys(spanish.TOPICS_ES).sort(), Object.keys(guide.TOPICS).sort());
  for (const [id, topic] of Object.entries(spanish.TOPICS_ES)) {
    assert.ok(topic.title.length >= 8 && topic.text.length >= 150, id);
    assert.notEqual(topic.text, guide.TOPICS[id].text, `${id} is translated`);
  }
});

// Nothing was added or lost in translation: every figure, form number, date and web address in an English topic is in its Spanish topic.
const figures = text => [...new Set((String(text).match(/\d[\d,.]*\d|\d/g) || []).map(token => token.replace(/[,.]$/, "")))];
const names = text => [...new Set(String(text).match(/\b(?:1040-ES|1065|1120|8832|2553|1023-EZ|1023|990-T|W-4|I-9|1099-MISC|1099-NEC|SAM\.gov|sba\.gov\/local-assistance|score\.org|cdfifund\.gov|nmsdc\.org|certifications\.sba\.gov|Grants\.gov|AnnualCreditReport\.com|samregistration\.com|Pay\.gov|Schedule C|NAICS|HUBZone|SBIC|SBIR|STTR|CDFI|SBDC|SCORE|MBDA|NMSDC|DBE|WOSB|EIN|USPTO|SEC|IRS|SBA|GAAP|CPA|DBA|Dun & Bradstreet|Experian|Equifax|Lender Match|Regulation D|Regulation Crowdfunding|Regulation A|ZIP)\b/g) || [])];
test("every figure, form number, program name and web address in an English topic is in the Spanish one", () => {
  const problems = [];
  for (const [id, topic] of Object.entries(guide.TOPICS)) {
    const es = spanish.TOPICS_ES[id].text;
    for (const figure of figures(topic.text)) if (!es.includes(figure)) problems.push(`${id}: figure ${figure}`);
    for (const name of names(topic.text)) {
      // (the Spanish says "código postal" for ZIP code, and "Regulación" for Regulation)
      if (name === "ZIP" || /^Regulation/.test(name)) continue;
      if (!es.includes(name)) problems.push(`${id}: name ${name}`);
    }
  }
  assert.ok(spanish.TOPICS_ES["startup-funding"].text.includes("Formulario C"), "Form C is Formulario C");
  assert.deepEqual(problems, []);
});

test("a Spanish answer has the same sources and date, says it is a preliminary translation, and keeps the closing warning", () => {
  for (const id of Object.keys(guide.TOPICS)) {
    const english = guide.usSmallBusinessAnswer(id, { question: "x" });
    const answer = guide.usSmallBusinessAnswer(id, { question: "x", lang: "es" });
    assert.equal(answer.language, "es"); assert.equal(answer.topic, id);
    assert.deepEqual(answer.sources, english.sources, `${id} has the same sources`);
    assert.match(answer.text, /Fuentes: /); assert.match(answer.text, /\(revisado el 9 de octubre de 2026\)/);
    for (const source of english.sources) assert.ok(answer.text.includes(source.name), `${id}: ${source.name}`);
    assert.match(answer.text, /Traducción preliminar: puede tener errores, así que confirme en el sitio oficial\./);
    assert.match(answer.text, /no asesoría legal, de impuestos ni financiera/); assert.match(answer.text, /No puedo presentar solicitudes ni trámites por usted\.$/);
    assert.equal(/Sources: |checked 9 October/.test(answer.text), false, `${id} has no English left over`);
    assert.equal(english.language, undefined, "the English answer is unchanged");
    assert.match(english.text, /Sources: .*\(checked 9 October 2026\)/);
  }
});

test("finding help near you repeats the ZIP code in Spanish, and a person outside the United States is told these are US sources", () => {
  assert.match(guide.usSmallBusinessAnswer("local-help", { question: "Encuentra un mentor de SCORE cerca de 30303", lang: "es" }).text, /^Para el código postal 30303: /);
  const kenya = guide.usSmallBusinessAnswer("business-plan", { question: "¿Cómo hago un plan de negocios?", lang: "es", us: false, country: "ke" }).text;
  assert.match(kenya, /Estas son fuentes del gobierno de EE\. UU\./); assert.match(kenya, /Autoridad de Micro y Pequeñas Empresas, MSEA/);
});

// The questions a Spanish-speaking owner asks, each reaching the topic its English twin reaches.
const SPOKEN = Object.freeze([
  ["¿Cómo me certifico como negocio de propiedad de minorías?", "certification"],
  ["¿Qué es el programa 8(a)?", "8a"],
  ["Dime qué es NMSDC", "nmsdc"],
  ["¿Es MBDA todavía abierta?", "mbda"],
  ["¿Cómo obtengo un préstamo de la SBA?", "loans"],
  ["¿Qué subvenciones hay para negocios de propietarios negros?", "grants"],
  ["¿Dónde puedo conseguir ayuda gratis para mi negocio?", "free-help"],
  ["Encuentra un mentor de SCORE cerca de 30303", "local-help"],
  ["¿Cómo inicio un negocio?", "startup-steps"],
  ["Quiero iniciar un negocio, ¿qué pasos debo seguir?", "startup-steps"],
  ["¿Cómo hago un plan de negocios?", "business-plan"],
  ["¿Cuánto cuesta abrir un negocio?", "startup-costs"],
  ["¿Cómo puedo financiar mi negocio?", "startup-funding"],
  ["¿Cuál es la diferencia entre una LLC y una corporación S?", "llc-vs-corp"],
  ["¿Cómo consigo un EIN para mi negocio?", "ein-registration"],
  ["¿Necesito una licencia comercial para vender comida?", "licenses"],
  ["¿Cómo abro una cuenta bancaria comercial?", "business-bank-account"],
  ["¿Cómo contrato a mi primer empleado?", "hiring-employees"],
  ["¿Qué seguro necesita un negocio pequeño?", "business-insurance"],
  ["¿Cómo consigo clientes para mi negocio?", "marketing-visibility"],
  ["¿Qué es la contabilidad y cómo la llevo?", "bookkeeping-accounting"],
  ["¿Cómo construyo crédito comercial?", "business-credit"],
  ["¿Cómo le vendo al gobierno?", "contracting"],
  ["¿Debo pagar impuestos estimados por mis ingresos de catering?", "estimated-tax"],
  ["¿Puedo obtener la certificación WOSB?", "certification"],
  ["¿Cómo registro mi negocio?", "ein-registration"],
  ["¿Dónde debo abrir mi negocio? Necesito elegir una ubicación", "business-location"],
  ["¿Qué es un 1099?", "1099"],
  ["¿Cómo hago crecer mi negocio?", "growth-scaling"],
  ["¿Qué impuestos paga un negocio?", "business-taxes"],
  ["¿Cuál es el nombre comercial y cómo registro una marca?", "name-trademark"],
  ["¿Cómo compro una franquicia?", "buy-business-franchise"],
  ["¿Qué es una corporación sin fines de lucro?", "for-profit-nonprofit"],
  ["¿Qué tipo de negocio debo elegir?", "business-structure"],
  ["¿Qué es una corporación S?", "s-corp"]
]);

test("a Spanish question reaches the topic its English twin reaches, with or without the accents the speech-to-text may leave out", () => {
  for (const [say, expected] of SPOKEN) {
    assert.equal(topics.language(say), "es", say);
    assert.equal(topics.topic(say), expected, say);
    assert.ok(topics.isBusinessQuestion(say), `${say} is about a business`);
    const plain = say.normalize("NFD").replace(/[̀-ͯ¿¡]/g, "");
    assert.equal(topics.topic(plain), expected, `without accents: ${plain}`);
  }
});

test("Spanish talk that is not a question about a business is left alone, and English still works the same", () => {
  for (const other of ["¿Cómo está el clima hoy?", "Registra una venta de $50", "Abre los documentos", "¿Cómo siembro maíz?", "Recuérdame llamar a Grace mañana", "Hola, buenos días", "¿Qué hora es?"]) {
    assert.equal(topics.topic(other), null, other);
  }
  assert.equal(topics.language("How do I start a business?"), "en");
  assert.equal(topics.language("What is the 8(a) program?"), "en");
  assert.equal(topics.language("Is MBDA still open?"), "en");
  assert.equal(topics.topic("How do I start a business?"), "startup-steps");
  assert.equal(topics.language("¿Qué es una LLC?"), "es");
  assert.equal(topics.language("send hello to my sales sheet automation"), "en");
  assert.equal(topics.language("Do I need an LLC in Los Angeles?"), "en", "one Spanish-looking word in an English sentence does not make it Spanish");
  assert.equal(topics.language("How do I get an EIN in La Jolla?"), "en");
});

test("through the planner: a question in Spanish gets the Spanish guide, and the same question in English is unchanged", async () => {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); } };
  const planner = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: { recent: async () => [], search: async () => [] } });
  const ask = text => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
  const es = await ask("¿Qué es el programa 8(a)?");
  assert.equal(es.knowledge, "us-small-business:8a"); assert.match(es.response, /^El programa 8\(a\) ayuda a las pequeñas empresas/); assert.match(es.response, /Fuentes: .*SBA 8\(a\)/); assert.match(es.response, /Traducción preliminar/);
  const en = await ask("What is the 8(a) program?");
  assert.equal(en.knowledge, "us-small-business:8a"); assert.match(en.response, /^The 8\(a\) program helps small businesses/); assert.doesNotMatch(en.response, /Traducción/);
  const nairobi = await ask("¿Cómo hago un plan de negocios?");
  assert.equal(nairobi.knowledge, "us-small-business:business-plan");
});

test("the page takes a Spanish business question on a US device or when it names a US programme, and not otherwise", () => {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const start = app.indexOf("function kyroBusinessQuestion("); const fn = app.slice(start, app.indexOf("\n}\n", start) + 3);
  const owns = (text, zone) => new vm.Script(fn + "\nkyroBusinessQuestion").runInNewContext({ window: { KyroBusinessTopics: topics }, kyroDeviceTimeZone: () => zone, Boolean })(text);
  assert.equal(owns("¿Cómo obtengo un préstamo de la SBA?", "America/Chicago"), true);
  assert.equal(owns("¿Cómo inicio un negocio?", "America/Los_Angeles"), true, "a US device");
  assert.equal(owns("¿Cómo inicio un negocio?", "Africa/Nairobi"), false, "no US agencies for a person elsewhere");
  assert.equal(owns("¿Qué es el programa 8(a)?", "Africa/Nairobi"), true, "it names a US programme");
  assert.equal(owns("¿Cómo siembro maíz?", "America/Chicago"), false);
});

test("the review sheet for a fluent speaker lists every topic with the English beside the Spanish", () => {
  const sheet = fs.readFileSync(path.join(__dirname, "../../docs/spanish/Spanish-Review-Sheet.csv"), "utf8");
  for (const id of Object.keys(guide.TOPICS)) assert.ok(sheet.includes(`\n"${id}",`), `${id} is on the sheet`);
  assert.match(sheet.split("\n")[0], /topic,english title,spanish title,english text,spanish text,reviewer notes/);
});
