"use strict";

// Adds the ADDIE parts (owner, 28 October 2026: "the courses should be utlizing the addie methodolgy") to a Koach Learn course that does not have them yet, without retyping the course.
// The writer supplies only the new parts as a JSON patch; this inserts them into the course file in place (the rest of the file is untouched) and saves only if the result passes the checker.
//
//   node scripts/koachlearn-addie.js summary <course.js>            what the writer needs: lessons, goals, practice tasks, every question with its right answer
//                                                                   (for a translation: also the English ADDIE parts to translate)
//   node scripts/koachlearn-addie.js apply <course.js> <patch.json>  insert the parts; prints the checker's problems and leaves the file alone if there are any
//
// English patch:     { analysis, objectives, lessons: [6 x { objectives, quickCheck: [2 x { q, options, answer, why }], goal? }], checkTags: [[5], [5]], quizTags: [20], pretest, rubric, evaluation, implementation }
//                    (goal only when the old goal does not start with a verb you can see someone do; a quick-check question's objective is the lesson's first objective unless it has its own)
// Translation patch: the same, but only the words: objectives [{ condition, action, standard }], quickCheck [{ q, options, why }], pretest { title }, rubric { mastery, criteria [{ name, notYet, meets, exceeds }] }
//                    and goal where the English goal changed. Ids, tags, answers, pretest.from and rubric objectives are copied from the English course.

const fs = require("fs");
const path = require("path");
const { validateCourse, parityProblems, englishOf, loadCourse } = require("./koachlearn-export.js");

// lessons whose goal the English conversion rewrote, so the translations rewrite theirs too
const GOALS_DIR = path.join(__dirname, "..", "output", "koachlearn", ".addie-goals");
const J = s => JSON.stringify(s);
// the same value with keys in a fixed order, to compare two courses whatever order their keys were written in
const canon = v => JSON.stringify(v, (k, x) => (x && typeof x === "object" && !Array.isArray(x) ? Object.fromEntries(Object.keys(x).sort().map(key => [key, x[key]])) : x));

function summary(file) {
  const c = loadCourse(file);
  const lessons = c.chapters.flatMap(ch => ch.lessons);
  const out = {
    file: path.relative(process.cwd(), file), id: c.id, lang: c.lang || "en", category: c.category, name: c.name, outcome: c.outcome, finalTask: c.finalTask, about: c.about,
    hasAddie: !!c.objectives,
    lessons: lessons.map((l, i) => ({ n: i + 1, title: l.title, goal: l.goal, tryIt: l.tryIt, youCanNow: l.youCanNow })),
    checks: c.chapters.map(ch => ch.check.questions.map((q, i) => ({ i, q: q.q, right: q.options[q.answer] }))),
    quiz: c.quiz.questions.map((q, i) => ({ i, q: q.q, right: q.options[q.answer] }))
  };
  if (c.translationOf) {
    const en = loadCourse(englishOf(file, c));
    if (!en.objectives) throw new Error(`the English course ${en.id} has no ADDIE parts yet; convert it first`);
    let changed = [];
    try { changed = JSON.parse(fs.readFileSync(path.join(GOALS_DIR, `${en.id}.json`), "utf8")); } catch (_) { /* no goals were rewritten */ }
    out.english = {
      analysis: en.analysis, objectives: en.objectives, pretest: { title: en.pretest.title }, rubric: en.rubric, evaluation: en.evaluation, implementation: en.implementation,
      lessons: en.chapters.flatMap(ch => ch.lessons).map((l, i) => ({ n: i + 1, objectives: l.objectives, quickCheck: l.quickCheck, ...(changed.includes(i) ? { goalChangedTo: l.goal } : {}) }))
    };
  }
  return out;
}

// the full ADDIE parts for this course: an English patch as given, a translation's words joined to the English ids, tags and answers
function fullPatch(c, p, file) {
  if (!c.translationOf) return p;
  const en = loadCourse(englishOf(file, c));
  const enLessons = en.chapters.flatMap(ch => ch.lessons);
  const need = (ok, what) => { if (!ok) throw new Error(what); };
  need(Array.isArray(p.objectives) && p.objectives.length === en.objectives.length, `objectives: ${en.objectives.length} like the English`);
  need(Array.isArray(p.lessons) && p.lessons.length === enLessons.length, `lessons: ${enLessons.length} like the English`);
  need(p.rubric && Array.isArray(p.rubric.criteria) && p.rubric.criteria.length === en.rubric.criteria.length, `rubric.criteria: ${en.rubric.criteria.length} like the English`);
  return {
    analysis: p.analysis, evaluation: p.evaluation, implementation: p.implementation,
    objectives: en.objectives.map((o, i) => ({ id: o.id, condition: p.objectives[i].condition, action: p.objectives[i].action, standard: p.objectives[i].standard })),
    lessons: enLessons.map((l, i) => ({
      objectives: l.objectives, ...(p.lessons[i].goal ? { goal: p.lessons[i].goal } : {}),
      quickCheck: l.quickCheck.map((q, k) => { const t = (p.lessons[i].quickCheck || [])[k] || {}; return { objective: q.objective, q: t.q, options: t.options, answer: q.answer, why: t.why }; })
    })),
    checkTags: en.chapters.map(ch => ch.check.questions.map(q => q.objective)),
    quizTags: en.quiz.questions.map(q => q.objective),
    pretest: { title: p.pretest && p.pretest.title, from: en.pretest.from },
    rubric: { mastery: p.rubric.mastery, criteria: en.rubric.criteria.map((k, i) => ({ name: p.rubric.criteria[i].name, objective: k.objective, notYet: p.rubric.criteria[i].notYet, meets: p.rubric.criteria[i].meets, exceeds: p.rubric.criteria[i].exceeds })) }
  };
}

// the course object with the parts added, to check before anything is written
function merged(c, p) {
  const m = JSON.parse(JSON.stringify(c));
  Object.assign(m, { analysis: p.analysis, objectives: p.objectives, pretest: p.pretest, rubric: p.rubric, evaluation: p.evaluation, implementation: p.implementation });
  let n = 0;
  m.chapters.forEach((ch, ci) => {
    ch.lessons.forEach(l => {
      const pl = p.lessons[n++] || {};
      l.objectives = pl.objectives;
      if (pl.goal) l.goal = pl.goal;
      l.quickCheck = (pl.quickCheck || []).map(q => ({ objective: q.objective || (pl.objectives || [])[0], ...q }));
    });
    ch.check.questions.forEach((q, qi) => { q.objective = ((p.checkTags || [])[ci] || [])[qi]; });
  });
  m.quiz.questions.forEach((q, qi) => { q.objective = (p.quizTags || [])[qi]; });
  return m;
}

// a value as JavaScript in the course files' style: short objects on one line, unquoted keys
function js(v, indent) {
  const one = q => `{ ${Object.entries(q).map(([k, x]) => `${k}: ${J(x)}`).join(", ")} }`;
  if (Array.isArray(v) && v.every(x => x && typeof x === "object" && !Array.isArray(x) && Object.values(x).every(y => typeof y !== "object" || Array.isArray(y) && y.every(z => typeof z === "string")))) {
    return `[\n${v.map(x => `${indent}  ${one(x).replace(/","/g, '", "')}`).join(",\n")}\n${indent}]`;
  }
  return JSON.stringify(v, null, 2).replace(/\n/g, `\n${indent}`).replace(/^(\s*)"(\w+)": /gm, "$1$2: ");
}

function apply(file, patchFile) {
  const c = loadCourse(file);
  if (c.objectives) throw new Error(`${c.id} already has its ADDIE parts`);
  const p = fullPatch(c, JSON.parse(fs.readFileSync(patchFile, "utf8")), file);
  const m = merged(c, p);
  const problems = validateCourse(m);
  if (c.translationOf) problems.push(...parityProblems(m, loadCourse(englishOf(file, c))));
  if (problems.length) return { ok: false, problems };

  let src = fs.readFileSync(file, "utf8");
  let at = 0;
  // the position of a string literal found after `at`
  const find = (s, what) => { const i = src.indexOf(J(s), at); if (i < 0) throw new Error(`cannot find ${what} in the file: ${J(s).slice(0, 80)}`); return i; };
  const insertAt = (i, text) => { src = src.slice(0, i) + text + src.slice(i); };
  const indentOf = i => { const start = src.lastIndexOf("\n", i) + 1; return src.slice(start, i).match(/^\s*/)[0]; };
  const lineStart = i => /^\s*$/.test(src.slice(src.lastIndexOf("\n", i) + 1, i));

  // walk the file in order: each chapter's lessons, then its check; then the quiz
  m.chapters.forEach((ch, ci) => {
    c.chapters[ci].lessons.forEach((orig, li) => {
      const l = ch.lessons[li];
      const t = src.lastIndexOf("title:", find(orig.title, "a lesson title"));
      const ind = indentOf(t);
      const objs = `objectives: ${J(l.objectives)},`;
      insertAt(t, lineStart(t) ? `${objs}\n${ind}` : `${objs} `);
      at = t;
      if (l.goal !== orig.goal) { const g = find(orig.goal, "a lesson goal"); src = src.slice(0, g) + J(l.goal) + src.slice(g + J(orig.goal).length); }
      const y = find(orig.youCanNow, "a lesson's youCanNow");
      const end = y + J(orig.youCanNow).length;
      insertAt(end, `,\n${ind}quickCheck: ${js(l.quickCheck, ind)}`);
      at = end;
    });
    ch.check.questions.forEach(q => {
      const i = find(q.q, "a knowledge-check question");
      const b = src.lastIndexOf("{", i);
      insertAt(b + 1, ` objective: ${J(q.objective)},`);
      at = i;
    });
  });
  m.quiz.questions.forEach(q => {
    const i = find(q.q, "a quiz question");
    const b = src.lastIndexOf("{", i);
    insertAt(b + 1, ` objective: ${J(q.objective)},`);
    at = i;
  });
  // analysis and objectives before the chapters
  const ch = src.search(/^\s*chapters:/m);
  const chIdx = src.indexOf("chapters:", ch);
  const ind = indentOf(chIdx);
  insertAt(chIdx, `// ---- ADDIE: Analysis ----\n${ind}analysis: ${js(p.analysis, ind)},\n${ind}// ---- ADDIE: Design (objectives: condition, observable action, standard) ----\n${ind}objectives: ${js(p.objectives, ind)},\n${ind}`);
  // evaluation and implementation at the end of the course object
  const close = src.lastIndexOf("}");
  let k = close - 1;
  while (/\s/.test(src[k])) k--;
  const comma = src[k] === "," ? "" : ",";
  insertAt(k + 1, `${comma}\n${ind}// ---- ADDIE: Evaluation ----\n${ind}pretest: ${js(p.pretest, ind)},\n${ind}rubric: ${js(p.rubric, ind)},\n${ind}evaluation: ${js(p.evaluation, ind)},\n${ind}// ---- ADDIE: Implementation ----\n${ind}implementation: ${js(p.implementation, ind)}`);

  // write, then load it back: it must be the same course plus the parts, and pass the checker
  const before = fs.readFileSync(file, "utf8");
  fs.writeFileSync(file, src);
  try {
    const back = loadCourse(file);
    const again = validateCourse(back);
    if (c.translationOf) again.push(...parityProblems(back, loadCourse(englishOf(file, c))));
    if (canon(back) !== canon(m)) again.push("the file did not come out the same as the checked course (the insertion went wrong)");
    if (again.length) { fs.writeFileSync(file, before); return { ok: false, problems: again }; }
  } catch (e) { fs.writeFileSync(file, before); return { ok: false, problems: [`the file would not load: ${e.message}`] }; }
  if (!c.translationOf) {
    const changed = c.chapters.flatMap(x => x.lessons).map((l, i) => (l.goal !== m.chapters.flatMap(x => x.lessons)[i].goal ? i : -1)).filter(i => i >= 0);
    fs.mkdirSync(GOALS_DIR, { recursive: true });
    fs.writeFileSync(path.join(GOALS_DIR, `${c.id}.json`), J(changed));
  }
  return { ok: true };
}

if (require.main === module) {
  const [cmd, file, patch] = process.argv.slice(2);
  try {
    if (cmd === "summary" && file) console.log(JSON.stringify(summary(path.resolve(file)), null, 1));
    else if (cmd === "apply" && file && patch) {
      const r = apply(path.resolve(file), path.resolve(patch));
      if (r.ok) console.log(`${path.basename(file)}: ADDIE parts added and the course passes the checker`);
      else { console.log(`${path.basename(file)}: NOT changed. Fix the patch:\n  ${r.problems.join("\n  ")}`); process.exit(1); }
    } else { console.error("usage: node scripts/koachlearn-addie.js summary <course.js> | apply <course.js> <patch.json>"); process.exit(1); }
  } catch (e) { console.log(`${path.basename(file || "")}: NOT changed. ${e.message}`); process.exit(1); }
}

module.exports = { summary, apply };
