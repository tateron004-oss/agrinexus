"use strict";

// Turns a guide's step-by-step walkthroughs (nexus/knowledge/guide-walkthroughs.js) into a course for Koach Learn (koachlearn.com), the owner's own learning site, asked for on 27 October 2026 ("i like to use the micro
// learn approach where we have text, and videos to reinforce the learning"). Koach Learn's admin dashboard builds a course as Category -> Course -> Chapters -> Videos, where every lesson is a video with a title and a
// written description; there is no way to add lessons from a program, so this script only writes the files and the administrator (or Claude in their signed-in Chrome) adds them in the dashboard.
//
//   one walkthrough = one chapter        one step = one micro-lesson: the step's full text as the lesson's description, and a short recap video of the step (its title, when you are finished, the words to know)
//
// node scripts/koachlearn-export.js reentry [--out output/koachlearn]  ->  output/koachlearn/reentry/
//   course.json        what to type into each dashboard form, in order (category, course name, skills, description, picture, intro video, then every chapter and lesson)
//   picture.png        the course's 16:9 picture          intro.mp4    the course's introduction video
//   NN-<walkthrough>/MM.mp4, MM.html    each lesson's recap video and description
//   preview.html       the whole course on one page, to read it over before anything is added to the live site
//
// The videos are made with ffmpeg (on the PATH) and the Arial fonts that come with Windows; they have a silent sound track because some players will not play a video without one.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { FAMILIES } = require("../nexus/knowledge/guide-walkthroughs.js");

// The Koach Learn category each guide's course goes in, and the course's own words. A guide that is not here has no course yet.
const COURSES = {
  reentry: {
    category: "Re-Entry",
    name: "Coming Home: Step-by-Step Lessons",
    skills: "Getting ID and a Social Security card, Food and health coverage, Housing and banking, Looking for work with a record, Background reports and record clearing, Voting, Staying safe from scams, California steps",
    about: [
      "Short lessons for people coming home from prison or jail in the United States, with extra lessons for California.",
      "Each chapter is one task, such as getting a replacement Social Security card or applying for food help. Each lesson is one small step: read what to do, watch the short recap, and do the step yourself before going on.",
      "Every step comes from an official government page, and each lesson links to that page so you can read it for yourself."
    ]
  }
};

const W = 1280, H = 720;
const NAVY = "0x0f172a", RED = "0xe11d48", GREY = "0xcbd5e1";
const BOLD = "/Windows/Fonts/arialbd.ttf", PLAIN = "/Windows/Fonts/arial.ttf";

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const pad = n => String(n).padStart(2, "0");

// the lines a piece of text takes at a given width in characters (so each line can be centered and the blocks stacked)
function wrap(text, width, maxLines) {
  const lines = [];
  let line = "";
  for (const word of String(text).split(/\s+/).filter(Boolean)) {
    if (line && (line + " " + word).length > width) { lines.push(line); line = word; } else line = line ? line + " " + word : word;
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) { lines.length = maxLines; lines[maxLines - 1] = lines[maxLines - 1].replace(/[\s,;:.]*$/, "") + "..."; }
  return lines;
}

// blocks: [{ text, size, font, color, width, maxLines, gap }] stacked from the top and centered across the frame
function card(dir, name, blocks, seconds, { still = false } = {}) {
  const filters = [`drawbox=x=0:y=0:w=${W}:h=12:color=${RED}:t=fill`];
  let y = 70;
  blocks.forEach((block, b) => {
    const lines = wrap(block.text, block.width, block.maxLines || 4);
    const file = `${name}.t${b}.txt`;
    fs.writeFileSync(path.join(dir, file), lines.join("\n"));
    const lineHeight = Math.round(block.size * 1.3);
    const place = block.align === "left" ? "text_align=L:x=110" : block.align === "right" ? "text_align=R:x=w-text_w-110" : "text_align=C:x=(w-text_w)/2";
    filters.push(`drawtext=fontfile='${block.font || BOLD}':textfile='${file}':expansion=none:fontsize=${block.size}:fontcolor=${block.color || "white"}:line_spacing=${lineHeight - block.size}:${place}:y=${y}`);
    y += lines.length * lineHeight + (block.gap == null ? 40 : block.gap);
  });
  const vf = filters.join(",");
  const out = still ? `${name}.png` : `${name}.mp4`;
  const args = still
    ? ["-y", "-loglevel", "error", "-f", "lavfi", "-i", `color=c=${NAVY}:s=${W}x${H}`, "-vf", vf, "-frames:v", "1", out]
    : ["-y", "-loglevel", "error", "-f", "lavfi", "-i", `color=c=${NAVY}:s=${W}x${H}:r=30:d=${seconds}`, "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo",
      "-vf", vf, "-c:v", "libx264", "-tune", "stillimage", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "64k", "-shortest", "-movflags", "+faststart", out];
  execFileSync("ffmpeg", args, { cwd: dir, stdio: "inherit" });
  for (let b = 0; b < blocks.length; b++) fs.unlinkSync(path.join(dir, `${name}.t${b}.txt`));
  return out;
}

// a lesson's description, in the few kinds of formatting the dashboard's editor has
function lessonHtml(step, n, total, checkedOn) {
  const parts = [`<p><strong>Step ${n} of ${total}.</strong> ${esc(step.text)}</p>`];
  if (step.gather.length) parts.push(`<p><strong>Have ready:</strong></p><ul>${step.gather.map(g => `<li>${esc(g)}</li>`).join("")}</ul>`);
  if (step.done) parts.push(`<p><strong>You are finished with this step when</strong> ${esc(step.done)}</p>`);
  if (step.words.length) parts.push(`<p><strong>Words to know:</strong></p><ul>${step.words.map(w => `<li><strong>${esc(w.term)}:</strong> ${esc(w.means)}</li>`).join("")}</ul>`);
  if (step.link) parts.push(`<p><strong>Official page:</strong> <a href="${esc(step.link.url)}">${esc(step.link.name)}</a></p>`);
  parts.push(`<p><em>Checked against the official pages on ${esc(checkedOn)}.</em></p>`);
  return parts.join("\n");
}

// long enough to read the card at an easy pace
const readingSeconds = words => Math.max(8, Math.min(20, Math.round(5 + words / 2.5)));

function exportCourse(prefix, outRoot) {
  const course = COURSES[prefix];
  if (!course) throw new Error(`no Koach Learn course is set up for "${prefix}" (set up: ${Object.keys(COURSES).join(", ")})`);
  const family = FAMILIES.find(f => f.prefix === prefix);
  if (!family) throw new Error(`no walkthroughs with the prefix "${prefix}"`);
  const dir = path.join(outRoot, prefix);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  const walks = Object.keys(family.WALKTHROUGHS).map(id => family.walkthrough(id));
  const descriptionHtml = course.about.map(p => `<p>${esc(p)}</p>`).join("\n")
    + `\n<p><strong>Chapters:</strong></p><ol>${walks.map(w => `<li>${esc(w.title)}</li>`).join("")}</ol>`;

  card(dir, "picture", [
    { text: course.category.toUpperCase(), size: 34, color: RED, width: 50, gap: 60 },
    { text: course.name, size: 72, width: 26, maxLines: 3 }
  ], 0, { still: true });
  card(dir, "intro", [
    { text: course.category.toUpperCase(), size: 34, color: RED, width: 50, gap: 50 },
    { text: course.name, size: 64, width: 30, maxLines: 3, gap: 50 },
    { text: `${walks.length} chapters. One small step in each lesson: read it, watch the recap, then do it yourself.`, size: 34, font: PLAIN, color: GREY, width: 56 }
  ], 10);

  const chapters = walks.map((walk, c) => {
    const chapterDir = path.join(dir, `${pad(c + 1)}-${walk.id}`);
    fs.mkdirSync(chapterDir);
    const lessons = walk.steps.map((step, s) => {
      const n = s + 1, base = pad(n);
      const words = step.words.slice(0, 2);
      const blocks = [
        { text: `${walk.title.replace(/,? step by step$/i, "")}  |  Step ${n} of ${walk.steps.length}`, size: 26, font: PLAIN, color: GREY, width: 70, maxLines: 2, gap: 36 },
        { text: step.title, size: 58, width: 32, maxLines: 3, gap: 44 }
      ];
      if (step.done) blocks.push({ text: `You are finished when ${step.done}`, size: 36, font: PLAIN, width: 52, maxLines: 4, gap: 36 });
      for (const w of words) blocks.push({ text: `${w.term}: ${w.means}`, size: 28, font: PLAIN, color: RED, width: 66, maxLines: 2, gap: 16 });
      const wordCount = blocks.reduce((sum, b) => sum + b.text.split(/\s+/).length, 0);
      card(chapterDir, base, blocks, readingSeconds(wordCount));
      const html = lessonHtml(step, n, walk.steps.length, walk.checkedOn);
      fs.writeFileSync(path.join(chapterDir, `${base}.html`), html);
      return { title: `Step ${n}: ${step.title}`, video: path.relative(dir, path.join(chapterDir, `${base}.mp4`)).replace(/\\/g, "/"), description: path.relative(dir, path.join(chapterDir, `${base}.html`)).replace(/\\/g, "/"), descriptionHtml: html };
    });
    return { name: walk.title, walkthrough: walk.id, unitedStatesOnly: walk.us, lessons };
  });

  const manifest = { category: course.category, name: course.name, skills: course.skills, picture: "picture.png", introVideo: "intro.mp4", descriptionHtml, chapters };
  fs.writeFileSync(path.join(dir, "course.json"), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(dir, "preview.html"), previewHtml(manifest));
  return { dir, chapters: chapters.length, lessons: chapters.reduce((sum, c) => sum + c.lessons.length, 0) };
}

function previewHtml(m) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(m.name)}</title>
<style>body{font:16px/1.5 Arial,sans-serif;max-width:900px;margin:0 auto;padding:16px;background:#f8fafc;color:#0f172a}h1{margin-bottom:4px}.cat{color:#e11d48;font-weight:bold}
details{background:#fff;border:1px solid #e2e8f0;border-radius:8px;margin:10px 0;padding:8px 14px}summary{font-weight:bold;cursor:pointer}.lesson{border-top:1px solid #e2e8f0;padding:12px 0}video,img{width:100%;max-width:640px;border-radius:6px}</style></head><body>
<div class="cat">${esc(m.category)}</div><h1>${esc(m.name)}</h1><p><strong>Skills:</strong> ${esc(m.skills)}</p><img src="${m.picture}" alt=""><h2>Introduction video</h2><video src="${m.introVideo}" controls></video>${m.descriptionHtml}
<h2>Chapters</h2>${m.chapters.map((c, i) => `<details><summary>${i + 1}. ${esc(c.name)} (${c.lessons.length} lessons)</summary>${c.lessons.map(l => `<div class="lesson"><h3>${esc(l.title)}</h3><video src="${l.video}" controls preload="none"></video>${l.descriptionHtml}</div>`).join("")}</details>`).join("")}
</body></html>`;
}

// ---- Written courses (scripts/koachlearn-courses/**/<id>.js) --------------------------------------------------------------------------------------------------------------------------------------------------------
// A skill-building course written for Koach Learn (asked for on 27 October 2026: "each course needs to respond like a lesson that at the end the students will be able to perform that skill being taught ... reinforced
// with text, videos, and slides", "two knowledge checks ... and a 20 question quiz at the end of each course"). The shape is in scripts/koachlearn-courses/README.md; validateCourse says what every course must have.

const COURSES_DIR = path.join(__dirname, "koachlearn-courses");
const I18N_DIR = path.join(COURSES_DIR, "i18n");

// Koach Learn keeps one language per course, so each translation is its own course (asked for on 27 October 2026: "the site translates to spanish, french, arabic and english. i need to courses and the videos to be able
// to do the same"). A translation lives at i18n/<lang>/<folder>/<id>-<lang>.js with lang and translationOf (the English id); these are the words the builder itself puts on slides and pages.
const LABELS = {
  en: { lesson: "Lesson", of: "of", goal: "Goal:", tryIt: "Try it now", youCanNow: "You can now", byTheEnd: "By the end you will be able to", minutes: m => `about ${m} minutes`, steps: "Step by step:", words: "Words to know:", sources: "Official sources:", finalTask: "Final task:", byEndCourse: "By the end of this course you will be able to", skills: "Skills:", intro: "Introduction video" },
  es: { lesson: "Lección", of: "de", goal: "Objetivo:", tryIt: "Pruébalo ahora", youCanNow: "Ahora puedes", byTheEnd: "Al final podrás", minutes: m => `unos ${m} minutos`, steps: "Paso a paso:", words: "Palabras clave:", sources: "Fuentes oficiales:", finalTask: "Tarea final:", byEndCourse: "Al terminar este curso podrás", skills: "Habilidades:", intro: "Video de introducción" },
  fr: { lesson: "Leçon", of: "sur", goal: "Objectif :", tryIt: "Essayez maintenant", youCanNow: "Vous savez maintenant", byTheEnd: "À la fin, vous saurez", minutes: m => `environ ${m} minutes`, steps: "Étape par étape :", words: "Mots à connaître :", sources: "Sources officielles :", finalTask: "Tâche finale :", byEndCourse: "À la fin de ce cours, vous saurez", skills: "Compétences :", intro: "Vidéo d'introduction" },
  ar: { lesson: "الدرس", of: "من", goal: "الهدف:", tryIt: "جرّب الآن", youCanNow: "يمكنك الآن", byTheEnd: "في النهاية ستتمكن من", minutes: m => `حوالي ${m} دقائق`, steps: "خطوة بخطوة:", words: "كلمات مهمة:", sources: "مصادر رسمية:", finalTask: "المهمة النهائية:", byEndCourse: "في نهاية هذه الدورة ستتمكن من", skills: "المهارات:", intro: "فيديو تعريفي" }
};
const RTL = new Set(["ar"]);
const RLM = "‏";

// the English course a translation was made from (same folder under the courses directory)
function englishOf(file, c) {
  const folder = path.basename(path.dirname(file));
  return path.join(COURSES_DIR, folder, `${c.translationOf}.js`);
}

// a translation must keep the English course's structure and right answers, so the courses teach and test the same thing
function parityProblems(c, en) {
  const problems = [];
  const need = (ok, what) => { if (!ok) problems.push(what); };
  need(c.category === en.category, `category must stay "${en.category}" (the dashboard's category names are English)`);
  need(c.id === `${en.id}-${c.lang}`, `id must be ${en.id}-${c.lang}`);
  (en.chapters || []).forEach((ch, ci) => {
    const t = (c.chapters || [])[ci] || { lessons: [], check: { questions: [] } };
    ch.lessons.forEach((l, li) => {
      const tl = t.lessons[li] || {};
      need((tl.slides || []).length === l.slides.length, `chapter ${ci + 1} lesson ${li + 1}: ${l.slides.length} slides like the English`);
      need((tl.steps || []).length === (l.steps || []).length, `chapter ${ci + 1} lesson ${li + 1}: ${(l.steps || []).length} steps like the English`);
      need((tl.sources || []).length === (l.sources || []).length, `chapter ${ci + 1} lesson ${li + 1}: keep the ${(l.sources || []).length} sources`);
    });
    ch.check.questions.forEach((q, qi) => need(((t.check.questions || [])[qi] || {}).answer === q.answer, `chapter ${ci + 1} check question ${qi + 1}: answer must stay ${q.answer}`));
  });
  ((en.quiz && en.quiz.questions) || []).forEach((q, qi) => need((((c.quiz && c.quiz.questions) || [])[qi] || {}).answer === q.answer, `quiz question ${qi + 1}: answer must stay ${q.answer}`));
  return problems;
}

function validateCourse(c) {
  const problems = [];
  const need = (ok, what) => { if (!ok) problems.push(what); };
  const text = v => typeof v === "string" && v.trim().length > 0;
  need(text(c.id) && /^[a-z0-9-]+$/.test(c.id), "id: lower-case letters, digits and dashes");
  const lang = c.lang || "en";
  need(LABELS[lang], `lang must be one of ${Object.keys(LABELS).join(", ")}`);
  need(lang === "en" || text(c.translationOf), "a translation needs translationOf (the English course id)");
  // translated words run longer than English
  const titleMax = lang === "en" ? 60 : 72, bulletMax = lang === "en" ? 110 : 135;
  for (const k of ["category", "name", "skills", "outcome", "finalTask"]) need(text(c[k]), `${k} is missing`);
  need(Array.isArray(c.about) && c.about.length >= 2, "about: at least 2 paragraphs");
  need(Array.isArray(c.chapters) && c.chapters.length === 2, "chapters: exactly 2 (each ends with a knowledge check)");
  const question = (q, where) => {
    need(text(q.q), `${where}: question text`);
    need(Array.isArray(q.options) && q.options.length === 4 && q.options.every(text), `${where}: exactly 4 options`);
    need(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, `${where}: answer must be 0-3`);
    need(text(q.why), `${where}: why is missing`);
  };
  (c.chapters || []).forEach((ch, ci) => {
    need(text(ch.name), `chapter ${ci + 1}: name`);
    need(Array.isArray(ch.lessons) && ch.lessons.length === 3, `chapter ${ci + 1}: exactly 3 lessons`);
    (ch.lessons || []).forEach((l, li) => {
      const at = `chapter ${ci + 1} lesson ${li + 1}`;
      for (const k of ["title", "goal", "tryIt", "youCanNow"]) need(text(l[k]), `${at}: ${k} is missing`);
      need(Array.isArray(l.text) && l.text.length >= 2 && l.text.every(text), `${at}: text needs at least 2 paragraphs`);
      need(Array.isArray(l.slides) && l.slides.length >= 3 && l.slides.length <= 5, `${at}: 3 to 5 slides`);
      (l.slides || []).forEach((s, si) => {
        need(text(s.title) && s.title.length <= titleMax, `${at} slide ${si + 1}: title of at most ${titleMax} characters`);
        need(Array.isArray(s.bullets) && s.bullets.length >= 1 && s.bullets.length <= 4 && s.bullets.every(b => text(b) && b.length <= bulletMax), `${at} slide ${si + 1}: 1 to 4 bullets of at most ${bulletMax} characters`);
      });
      need(!l.steps || (Array.isArray(l.steps) && l.steps.every(text)), `${at}: steps must be strings`);
      need(!l.words || (Array.isArray(l.words) && l.words.every(w => Array.isArray(w) && w.length === 2 && w.every(text))), `${at}: words are [term, meaning] pairs`);
    });
    need(ch.check && text(ch.check.title) && Array.isArray(ch.check.questions) && ch.check.questions.length === 5, `chapter ${ci + 1}: knowledge check with exactly 5 questions`);
    ((ch.check && ch.check.questions) || []).forEach((q, qi) => question(q, `chapter ${ci + 1} check question ${qi + 1}`));
  });
  need(c.quiz && text(c.quiz.title) && Array.isArray(c.quiz.questions) && c.quiz.questions.length === 20, "quiz: exactly 20 questions");
  ((c.quiz && c.quiz.questions) || []).forEach((q, qi) => question(q, `quiz question ${qi + 1}`));
  return problems;
}

const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// one slide as a short clip; the clips of a lesson are joined into the lesson's video
// (Arabic reads right to left: its bullets sit on the right, and a right-to-left mark keeps the dot at the start of the line)
function slideBlocks(kicker, title, bullets, rtl = false) {
  return [
    { text: kicker, size: 26, font: PLAIN, color: GREY, width: 70, maxLines: 1, gap: 30 },
    { text: title, size: 54, width: 34, maxLines: 2, gap: 44 },
    ...bullets.map(b => ({ text: rtl ? `${RLM}•  ${b}` : `•  ${b}`, size: 38, font: PLAIN, width: 52, maxLines: 3, gap: 22, align: rtl ? "right" : "left" }))
  ];
}

function lessonVideo(dir, base, kicker, lesson, L = LABELS.en, rtl = false) {
  const scenes = [
    [{ text: kicker, size: 28, font: PLAIN, color: GREY, width: 70, gap: 60 }, { text: lesson.title, size: 64, width: 30, maxLines: 3, gap: 50 }, { text: `${L.goal} ${lesson.goal}`, size: 36, font: PLAIN, color: RED, width: 56, maxLines: 3 }],
    ...lesson.slides.map(s => slideBlocks(kicker, s.title, s.bullets, rtl)),
    slideBlocks(kicker, L.tryIt, [lesson.tryIt], rtl),
    slideBlocks(kicker, L.youCanNow, [lesson.youCanNow], rtl)
  ];
  // each slide is drawn once as a picture; the video shows the pictures in turn, encoded once at a low frame rate (the slides do not move)
  const slidesDir = path.join(dir, `${base}-slides`);
  fs.mkdirSync(slidesDir, { recursive: true });
  const shown = scenes.map((blocks, i) => {
    card(slidesDir, pad(i + 1), blocks, 0, { still: true });
    return { file: `${base}-slides/${pad(i + 1)}.png`, seconds: readingSeconds(blocks.reduce((sum, b) => sum + b.text.split(/\s+/).length, 0)) };
  });
  const list = [...shown.map(s => `file '${s.file}'\nduration ${s.seconds}`), `file '${shown[shown.length - 1].file}'`].join("\n");
  fs.writeFileSync(path.join(dir, `${base}.list`), list);
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", `${base}.list`, "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo",
    "-vf", "fps=5,format=yuv420p", "-c:v", "libx264", "-tune", "stillimage", "-c:a", "aac", "-b:a", "64k", "-shortest", "-movflags", "+faststart", `${base}.mp4`], { cwd: dir, stdio: "inherit" });
  fs.unlinkSync(path.join(dir, `${base}.list`));
  return { video: `${base}.mp4`, slides: `${base}-slides`, slideCount: scenes.length };
}

function writtenLessonHtml(lesson, n, total, L = LABELS.en) {
  const parts = [`<p><strong>${L.lesson} ${n} ${L.of} ${total} · ${L.minutes(lesson.minutes || 5)}</strong></p>`, `<p><strong>${L.goal}</strong> ${esc(lesson.goal)}</p>`];
  parts.push(...lesson.text.map(p => `<p>${esc(p)}</p>`));
  if (lesson.steps && lesson.steps.length) parts.push(`<p><strong>${L.steps}</strong></p><ol>${lesson.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>`);
  if (lesson.words && lesson.words.length) parts.push(`<p><strong>${L.words}</strong></p><ul>${lesson.words.map(([t, m]) => `<li><strong>${esc(t)}:</strong> ${esc(m)}</li>`).join("")}</ul>`);
  if (lesson.sources && lesson.sources.length) parts.push(`<p><strong>${L.sources}</strong></p><ul>${lesson.sources.map(s => `<li><a href="${esc(s.url)}">${esc(s.name)}</a></li>`).join("")}</ul>`);
  parts.push(`<p><strong>${L.tryIt}:</strong> ${esc(lesson.tryIt)}</p>`, `<p><strong>${L.youCanNow}</strong> ${esc(lesson.youCanNow)}</p>`);
  return parts.join("\n");
}

function questionsHtml(title, questions) {
  return `<h3>${esc(title)}</h3><ol>${questions.map(q => `<li><p>${esc(q.q)}</p><ol type="A">${q.options.map((o, i) => `<li>${i === q.answer ? `<strong>${esc(o)}</strong> ✓` : esc(o)}</li>`).join("")}</ol><p><em>${esc(q.why)}</em></p></li>`).join("")}</ol>`;
}

function loadCourse(file) {
  delete require.cache[require.resolve(file)];
  return require(file);
}

function exportWritten(file, outRoot) {
  const c = loadCourse(file);
  const problems = validateCourse(c);
  if (c.translationOf) problems.push(...parityProblems(c, loadCourse(englishOf(file, c))));
  if (problems.length) throw new Error(`${path.basename(file)}:\n  ${problems.join("\n  ")}`);
  const L = LABELS[c.lang || "en"], rtl = RTL.has(c.lang);
  const dir = path.join(outRoot, slug(c.category), c.id);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  card(dir, "picture", [{ text: c.category.toUpperCase(), size: 34, color: RED, width: 50, gap: 60 }, { text: c.name, size: 72, width: 26, maxLines: 3 }], 0, { still: true });
  card(dir, "intro", [
    { text: c.category.toUpperCase(), size: 30, color: RED, width: 50, gap: 40 },
    { text: c.name, size: 60, width: 32, maxLines: 3, gap: 44 },
    { text: `${L.byTheEnd} ${c.outcome}`, size: 34, font: PLAIN, width: 58, maxLines: 6 }
  ], 14);
  const total = c.chapters.reduce((s, ch) => s + ch.lessons.length, 0);
  let n = 0;
  const chapters = c.chapters.map((ch, ci) => {
    const chDir = path.join(dir, `chapter-${ci + 1}`);
    fs.mkdirSync(chDir);
    const lessons = ch.lessons.map(l => {
      n += 1;
      const base = pad(n);
      const v = lessonVideo(chDir, base, `${c.name}  |  ${L.lesson} ${n} ${L.of} ${total}`, l, L, rtl);
      const html = rtl ? `<div dir="rtl">\n${writtenLessonHtml(l, n, total, L)}\n</div>` : writtenLessonHtml(l, n, total, L);
      fs.writeFileSync(path.join(chDir, `${base}.html`), html);
      return { title: `${L.lesson} ${n}: ${l.title}`, video: `chapter-${ci + 1}/${v.video}`, slides: `chapter-${ci + 1}/${v.slides}`, descriptionHtml: html };
    });
    fs.writeFileSync(path.join(chDir, "knowledge-check.json"), JSON.stringify(ch.check, null, 2));
    return { name: ch.name, lessons, check: ch.check };
  });
  fs.writeFileSync(path.join(dir, "quiz.json"), JSON.stringify(c.quiz, null, 2));
  const about = c.about.map(p => `<p>${esc(p)}</p>`).join("\n") + `\n<p><strong>${L.byEndCourse}</strong> ${esc(c.outcome)}</p>\n<p><strong>${L.finalTask}</strong> ${esc(c.finalTask)}</p>`;
  const descriptionHtml = rtl ? `<div dir="rtl">\n${about}\n</div>` : about;
  const manifest = { id: c.id, lang: c.lang || "en", translationOf: c.translationOf || null, category: c.category, name: c.name, skills: c.skills, picture: "picture.png", introVideo: "intro.mp4", descriptionHtml, chapters, quiz: c.quiz };
  fs.writeFileSync(path.join(dir, "course.json"), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(dir, "preview.html"), writtenPreviewHtml(manifest));
  return { dir, lessons: total };
}

function writtenPreviewHtml(m) {
  const L = LABELS[m.lang || "en"];
  return `<!doctype html><html lang="${m.lang || "en"}" dir="${RTL.has(m.lang) ? "rtl" : "ltr"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(m.name)}</title>
<style>body{font:16px/1.5 Arial,sans-serif;max-width:900px;margin:0 auto;padding:16px;background:#f8fafc;color:#0f172a}.cat{color:#e11d48;font-weight:bold}section{background:#fff;border:1px solid #e2e8f0;border-radius:8px;margin:14px 0;padding:8px 16px}
.lesson{border-top:1px solid #e2e8f0;padding:12px 0}video,img{width:100%;max-width:640px;border-radius:6px}</style></head><body>
<div class="cat">${esc(m.category)}</div><h1>${esc(m.name)}</h1><p><strong>${L.skills}</strong> ${esc(m.skills)}</p><img src="${m.picture}" alt=""><h2>${L.intro}</h2><video src="${m.introVideo}" controls></video>${m.descriptionHtml}
${m.chapters.map(ch => `<section><h2>${esc(ch.name)}</h2>${ch.lessons.map(l => `<div class="lesson"><h3>${esc(l.title)}</h3><video src="${l.video}" controls preload="none"></video>${l.descriptionHtml}</div>`).join("")}<div class="lesson">${questionsHtml(ch.check.title, ch.check.questions)}</div></section>`).join("")}
<section>${questionsHtml(m.quiz.title, m.quiz.questions)}</section></body></html>`;
}

const writtenFiles = () => fs.existsSync(COURSES_DIR)
  ? fs.readdirSync(COURSES_DIR, { recursive: true }).map(f => path.join(COURSES_DIR, f)).filter(f => f.endsWith(".js") && path.dirname(f) !== COURSES_DIR)
  : [];

if (require.main === module) {
  const args = process.argv.slice(2);
  const outAt = args.indexOf("--out");
  const outRoot = path.resolve(outAt >= 0 ? args[outAt + 1] : path.join(__dirname, "..", "output", "koachlearn"));
  const names = args.filter((a, i) => !a.startsWith("--") && (outAt < 0 || i !== outAt + 1));
  // --check [files]: only validate written courses (fast; no videos)
  if (args.includes("--check")) {
    const files = names.length ? names.map(f => path.resolve(f)) : writtenFiles();
    let bad = 0;
    for (const f of files) {
      const c = loadCourse(f);
      const p = validateCourse(c);
      if (c.translationOf) {
        const en = englishOf(f, c);
        if (fs.existsSync(en)) p.push(...parityProblems(c, loadCourse(en))); else p.push(`no English course at ${path.relative(process.cwd(), en)}`);
      }
      if (p.length) { bad++; console.log(`${path.relative(process.cwd(), f)}:\n  ${p.join("\n  ")}`); }
    }
    console.log(`${files.length - bad} of ${files.length} courses pass`);
    process.exit(bad ? 1 : 0);
  }
  const all = args.includes("--all-written");
  if (!names.length && !all) { console.error(`usage: node scripts/koachlearn-export.js <${Object.keys(COURSES).join("|")}|path/to/course.js ...|--all-written> [--out dir]   or   --check [files]`); process.exit(1); }
  for (const name of all ? writtenFiles() : names) {
    if (COURSES[name]) { const r = exportCourse(name, outRoot); console.log(`${name}: ${r.chapters} chapters, ${r.lessons} lessons -> ${r.dir}`); continue; }
    const r = exportWritten(path.resolve(name), outRoot);
    console.log(`${path.basename(name)}: ${r.lessons} lessons -> ${r.dir}`);
  }
}

module.exports = { COURSES, exportCourse, exportWritten, validateCourse, wrap, lessonHtml };
