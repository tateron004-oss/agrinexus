"use strict";

// Spanish for the checked small-business guide (nexus/knowledge/us-small-business.js): the 32 topics, and the sentences that go around an answer.
//
// A FIRST DRAFT, WRITTEN TO BE REVIEWED BY A FLUENT SPANISH SPEAKER BEFORE IT IS RELIED ON (the same rule as the Kiswahili wording). It is a translation of the English topics, not new content: every fact, figure,
// date and source is the English topic's, and the English file stays the source of truth (a test fails if a topic is missing here, or if a figure in the English text is missing from the Spanish). Every Spanish answer
// says that it is a preliminary translation. Please check above all: the register (usted, neutral Latin American Spanish), the legal and tax terms (corporación S, compañía de responsabilidad limitada, impuesto de trabajo
// por cuenta propia ...), that the names of programmes and forms are kept as the official English names with a Spanish gloss on first use, and that no sentence promises something Kyro cannot do in Spanish.
// Not covered here: health and safety wording, texting and calling, and the other guides (see docs/SPANISH.md).
const part1 = require("./part1.js");
const part2 = require("./part2.js");
const part3 = require("./part3.js");

const TOPICS_ES = Object.freeze({ ...part1, ...part2, ...part3 });

const CHECKED_ON_ES = "9 de octubre de 2026";
const SOURCES_LABEL = "Fuentes";
const PRELIMINARY = "Traducción preliminar: puede tener errores, así que confirme en el sitio oficial.";
const CLOSING = "Esta es información general, no asesoría legal, de impuestos ni financiera, y las reglas cambian, así que confirme en el sitio oficial. No puedo presentar solicitudes ni trámites por usted.";
const ZIP_LEAD = zip => `Para el código postal ${zip}: `;
const OUTSIDE = office => ` Estas son fuentes del gobierno de EE. UU.: los programas mencionados (SBA, SBDC, SCORE) son estadounidenses, y las leyes y las reglas son distintas en su país, así que consulte también a la oficina local de apoyo a pequeños negocios${office || ""}.`;
const LOCAL_OFFICE = Object.freeze({ ke: " (en Kenia, la Autoridad de Micro y Pequeñas Empresas, MSEA)", ng: " (en Nigeria, SMEDAN)" });

module.exports = Object.freeze({ TOPICS_ES, CHECKED_ON_ES, SOURCES_LABEL, PRELIMINARY, CLOSING, ZIP_LEAD, OUTSIDE, LOCAL_OFFICE });
