"use strict";

// A plain-text resume from what the person told Kyro: their name, how to reach them, where they are, their skills, experience and
// education, and the languages they speak. Nothing is invented: a section with nothing in it is left out, and the summary only restates what
// the other sections already say.
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const MAX_ITEMS = 12;
const items = (value, limit = 120) => (Array.isArray(value) ? value : typeof value === "string" ? value.split(/\s*[;\n]\s*/) : [])
  .map(item => clean(item).replace(/^[-*•]\s*/, "").slice(0, limit)).filter(Boolean).slice(0, MAX_ITEMS);

// Returns { name, text, sections } or throws a coded error when there is not enough to write.
function buildResume(input = {}) {
  const name = clean(input.name).slice(0, 60);
  const skills = items(input.skills, 80); const experience = items(input.experience); const education = items(input.education); const languages = items(input.languages, 40);
  const location = clean(input.location).slice(0, 60); const phone = clean(input.phone).slice(0, 30); const email = clean(input.email).slice(0, 80);
  if (!name) throw Object.assign(new Error("A resume needs the person's name."), { code: "resume_name_required" });
  if (!skills.length && !experience.length && !education.length)
    throw Object.assign(new Error("A resume needs at least some skills, experience or education."), { code: "resume_content_required" });
  const contact = [location, phone, email].filter(Boolean).join(" | ");
  const summary = skills.length ? `${location ? `Based in ${location}. ` : ""}Skilled in ${skills.slice(0, 4).join(", ")}${experience.length ? `, with experience including ${experience[0].replace(/[.]+$/, "")}` : ""}.` : "";
  const section = (title, lines, bullets = true) => (lines.length ? [title, ...lines.map(line => (bullets ? `- ${line}` : line)), ""] : []);
  const lines = [name.toUpperCase(), contact, "", ...section("SUMMARY", summary ? [summary] : [], false), ...section("SKILLS", skills), ...section("EXPERIENCE", experience),
    ...section("EDUCATION", education), ...section("LANGUAGES", languages)];
  return { name, text: lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n", sections: { skills, experience, education, languages }, contact };
}

module.exports = Object.freeze({ buildResume });
