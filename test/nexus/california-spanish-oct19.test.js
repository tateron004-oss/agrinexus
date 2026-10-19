"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const california = require("../../nexus/knowledge/california-business.js");
const spanish = require("../../nexus/knowledge/california-business-es.js");
const topics = require("../../public/kyro-business-topics.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");

// The Spanish for the California guide (a preliminary translation, to be reviewed by a fluent speaker: see california-business-es.js). The English topics stay the source of truth.

test("every English topic has a Spanish one, and the Spanish has none the English does not", () => {
  assert.deepEqual(Object.keys(spanish.TOPICS_ES).sort(), Object.keys(california.TOPICS).sort());
  for (const [id, topic] of Object.entries(spanish.TOPICS_ES)) {
    assert.ok(topic.title.length >= 8 && topic.text.length >= 200, id);
    assert.notEqual(topic.text, california.TOPICS[id].text, `${id} is translated`);
  }
});

// Nothing was added or lost in translation: every figure, phone number, e-mail address, web address, form number and program name in an English topic is in its Spanish topic.
const figures = text => [...new Set((String(text).match(/\d[\d,.]*\d|\d/g) || []).map(token => token.replace(/[,.]$/, "")))];
const emails = text => String(text).match(/[A-Za-z.]+@[a-z.]+\.[a-z]+/g) || [];
const addresses = text => String(text).match(/\b(?:[a-z0-9-]+\.)+(?:gov|org|com)\b|\b(?:Grants\.gov|SAM\.gov)\b/g) || [];
const forms = text => [...String(text).matchAll(/\bForm (3500A|3500|CT-1)\b/g)].map(match => match[1]);
const programs = text => String(text).match(/\b(?:Cal eProcure|CalOSBA|Caltrans|CDTFA|FTB|OSDS|DGS|CUCP|DBE|FEIN|TTY|MyFTB|FI\$Cal|RAMP LA|California Dream Fund|Get Certified|Register Online|Register a New Business Activity|SAM\.gov|Grants\.gov)\b/g) || [];
test("every figure, phone number, address, form number and program name in an English topic is in the Spanish one", () => {
  const problems = [];
  for (const [id, topic] of Object.entries(california.TOPICS)) {
    const es = spanish.TOPICS_ES[id].text;
    for (const figure of figures(topic.text)) if (!es.includes(figure)) problems.push(`${id}: figure ${figure}`);
    for (const email of emails(topic.text)) if (!es.includes(email)) problems.push(`${id}: e-mail ${email}`);
    for (const address of addresses(topic.text)) if (!es.includes(address)) problems.push(`${id}: address ${address}`);
    for (const form of forms(topic.text)) if (!es.includes(form)) problems.push(`${id}: form ${form}`);
    for (const name of new Set(programs(topic.text))) if (!es.includes(name)) problems.push(`${id}: name ${name}`);
  }
  assert.deepEqual(problems, []);
});

test("a Spanish answer has the same sources, the date, says it is a preliminary translation, and keeps the closing warning", () => {
  for (const id of Object.keys(california.TOPICS)) {
    const en = california.californiaAnswer(id, { question: "x" });
    const es = california.californiaAnswer(id, { question: "x", lang: "es" });
    assert.equal(es.language, "es", id);
    assert.deepEqual(es.sources.map(source => source.url), en.sources.map(source => source.url), `${id}: same sources`);
    assert.match(es.text, /Fuentes: .+ \(revisado el 19 de octubre de 2026\)\. Traducción preliminar: puede tener errores, así que confirme en el sitio oficial\. Esta es información general, no asesoría legal, de impuestos ni financiera, y las reglas cambian, así que confirme en el sitio oficial\. No puedo presentar solicitudes ni trámites por usted\.$/, id);
    assert.doesNotMatch(es.text, /Sources:|checked 19 October/, id);
  }
  // the certification and grants answers carry the national guide's answer, in Spanish too
  const cert = california.californiaAnswer("ca-certification", { question: "x", lang: "es" });
  assert.match(cert.text, /Más allá de California: /);
  assert.ok(cert.sources.some(source => /NMSDC/.test(source.name)));
  assert.doesNotMatch(cert.text, /Beyond California|There are several different certifications/);
  // English is unchanged
  assert.match(california.californiaAnswer("ca-seller-permit", { question: "x" }).text, /^A California seller's permit is registered/);
  assert.equal(california.californiaAnswer("ca-seller-permit", { question: "x", lang: "en" }).language, undefined);
});

test("California questions asked in Spanish pick the topic; formation, general and non-business questions are left alone", () => {
  const picks = {
    "¿Cómo me certifico como negocio de minoría en California?": "ca-certification",
    "¿Cómo obtengo un permiso de vendedor en California?": "ca-seller-permit",
    "¿Cómo puedo ser proveedor de LA28?": "ca-la28",
    "Quiero vender mis productos al gobierno de California.": "ca-state-vendor",
    "¿Dónde encuentro ayuda gratuita para mi negocio en California?": "ca-free-help",
    "¿Hay subvenciones para negocios latinos en California?": "ca-grants",
    "¿Qué hago después de formar mi organización sin fines de lucro en California para la exención de impuestos?": "ca-nonprofit-state",
    "¿Qué es una certificación DBE en California?": "ca-dbe"
  };
  for (const [say, id] of Object.entries(picks)) assert.equal(topics.californiaTopic(say), id, say);
  for (const say of ["¿Cómo registro mi negocio en California?", "¿Cuál es la capital de California?", "¿Dónde puedo encontrar un préstamo para mi pequeño negocio?", "Anota un pago de impuestos de $300 en California"]) assert.equal(topics.californiaTopic(say), null, say);
});

test("through the planner, with no AI model: a question in Spanish is answered in Spanish, and one in English still in English", async () => {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const p = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
  const ask = text => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Los_Angeles", deterministicOnly: true } });
  const es = await ask("¿Cómo obtengo un permiso de vendedor en California?");
  assert.equal(es.knowledge, "california-business:ca-seller-permit");
  assert.match(es.response, /^El permiso de vendedor de California/);
  assert.match(es.response, /Traducción preliminar/);
  assert.ok(es.sources.length >= 1);
  const en = await ask("How do I get a seller's permit in California?");
  assert.match(en.response, /^A California seller's permit is registered/);
});
