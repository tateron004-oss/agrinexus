"use strict";
// Questions a Spanish-speaking owner asks about a small business, spoken in Spanish and answered in Spanish from the checked guide (nexus/knowledge/us-small-business-es/: a preliminary translation, see docs/SPANISH.md).
// Each must put the Spanish sources line and the preliminary-translation note on the screen. They change nothing on the account. What the speech-to-text wrote is only ever a warning.
const strict = (id, say, key) => ({ id: `es-biz-${id}`, area: "spanish", say, timeoutMs: 50000, expect: { screen: ["text", "list"], text: `Fuentes: [^]*${key}|${key}[^]*Fuentes: `, notText: "I cannot find|not sure what you|Sources: " } });

module.exports = Object.freeze([
  strict("8a", "¿Qué es el programa 8(a)?", "8\\(a\\)"),
  strict("certified", "¿Cómo me certifico como negocio de propiedad de minorías?", "certificaciones"),
  strict("sba-loan", "¿Cómo obtengo un préstamo de la SBA?", "prestamistas"),
  strict("start", "¿Cómo inicio un negocio?", "plan de negocios"),
  strict("costs", "¿Cuánto cuesta abrir un negocio?", "costos"),
  strict("plan", "¿Cómo hago un plan de negocios?", "plan"),
  strict("ein", "¿Cómo consigo un EIN para mi negocio?", "EIN"),
  strict("free-help", "¿Dónde puedo conseguir ayuda gratis para mi negocio?", "SCORE"),
  strict("government", "¿Cómo le vendo al gobierno?", "SAM\\.gov"),
  strict("hire", "¿Cómo contrato a mi primer empleado?", "W-4"),
  strict("tax", "¿Debo pagar impuestos estimados por mis ingresos de catering?", "1040-ES"),
  strict("llc", "¿Cuál es la diferencia entre una LLC y una corporación S?", "LLC")
]);
