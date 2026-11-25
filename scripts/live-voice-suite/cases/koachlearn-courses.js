"use strict";
// Finding a Koach Learn course by voice (nexus/knowledge/koachlearn-courses.js): the real courses from the catalogue learners browse, in the language asked for, each with its own page.
// The rig speaks English and Spanish, so the other languages are asked for by name ("Hausa courses ..."); the screen must show the courses in that language. They change nothing on the account.
const course = (id, say, text) => ({ id: `kl-${id}`, area: "courses", say, timeoutMs: 50000, expect: { screen: ["text", "list"], text, notText: "I cannot find|not sure what you|could not read the Koach Learn" } });

module.exports = Object.freeze([
  course("farming", "Find me a course on farming.", "Koach Learn courses in English about"),
  course("hausa", "Show me Hausa courses about farming.", "Koach Learn courses in Hausa"),
  course("amharic", "What Koach Learn courses are there in Amharic?", "courses in Amharic, in these topics"),
  course("yoruba-business", "Find Yoruba courses about small business.", "Koach Learn courses in Yoruba"),
  course("spanish", "¿Qué cursos hay sobre agricultura?", "cursos de Koach Learn en español")
]);
