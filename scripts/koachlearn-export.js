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
// Arial has no Ethiopic letters, so Amharic courses are drawn in Ebrima (also a Windows font)
const FONTS_BY_LANG = { am: { [BOLD]: "/Windows/Fonts/ebrimabd.ttf", [PLAIN]: "/Windows/Fonts/ebrima.ttf" } };
// Yoruba and Igbo stack tone marks on dotted vowels (ẹ̀ ọ́), which Arial places badly; Segoe UI places them well
FONTS_BY_LANG.yo = FONTS_BY_LANG.ig = { [BOLD]: "/Windows/Fonts/segoeuib.ttf", [PLAIN]: "/Windows/Fonts/segoeui.ttf" };
let fontSwap = null;
const fontOf = f => (fontSwap && fontSwap[f]) || f;

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
    filters.push(`drawtext=fontfile='${fontOf(block.font || BOLD)}':textfile='${file}':expansion=none:fontsize=${block.size}:fontcolor=${block.color || "white"}:line_spacing=${lineHeight - block.size}:${place}:y=${y}`);
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
  en: { lesson: "Lesson", of: "of", goal: "Goal:", tryIt: "Try it now", youCanNow: "You can now", byTheEnd: "By the end you will be able to", minutes: m => `about ${m} minutes`, steps: "Step by step:", words: "Words to know:", sources: "Official sources:", finalTask: "Final task:", byEndCourse: "By the end of this course you will be able to", skills: "Skills:", intro: "Introduction video",
    objectives: "What you will be able to do:", youWill: "you will", buildsToward: "This lesson builds toward:", quickCheck: n => `Quick Check: Lesson ${n}`, rubric: "How your final task is checked:", criterion: "What we look at", notYet: "Not yet", meets: "Meets", exceeds: "Exceeds", mastery: "To pass:" },
  es: { lesson: "Lección", of: "de", goal: "Objetivo:", tryIt: "Pruébalo ahora", youCanNow: "Ahora puedes", byTheEnd: "Al final podrás", minutes: m => `unos ${m} minutos`, steps: "Paso a paso:", words: "Palabras clave:", sources: "Fuentes oficiales:", finalTask: "Tarea final:", byEndCourse: "Al terminar este curso podrás", skills: "Habilidades:", intro: "Video de introducción",
    objectives: "Lo que podrás hacer:", youWill: "podrás", buildsToward: "Esta lección te prepara para:", quickCheck: n => `Comprobación rápida: Lección ${n}`, rubric: "Cómo se revisa tu tarea final:", criterion: "Qué revisamos", notYet: "Todavía no", meets: "Cumple", exceeds: "Supera", mastery: "Para aprobar:" },
  fr: { lesson: "Leçon", of: "sur", goal: "Objectif :", tryIt: "Essayez maintenant", youCanNow: "Vous savez maintenant", byTheEnd: "À la fin, vous saurez", minutes: m => `environ ${m} minutes`, steps: "Étape par étape :", words: "Mots à connaître :", sources: "Sources officielles :", finalTask: "Tâche finale :", byEndCourse: "À la fin de ce cours, vous saurez", skills: "Compétences :", intro: "Vidéo d'introduction",
    objectives: "Ce que vous saurez faire :", youWill: "vous saurez", buildsToward: "Cette leçon vous prépare à :", quickCheck: n => `Contrôle rapide : Leçon ${n}`, rubric: "Comment votre tâche finale est évaluée :", criterion: "Ce que nous regardons", notYet: "Pas encore", meets: "Atteint", exceeds: "Dépasse", mastery: "Pour réussir :" },
  ar: { lesson: "الدرس", of: "من", goal: "الهدف:", tryIt: "جرّب الآن", youCanNow: "يمكنك الآن", byTheEnd: "في النهاية ستتمكن من", minutes: m => `حوالي ${m} دقائق`, steps: "خطوة بخطوة:", words: "كلمات مهمة:", sources: "مصادر رسمية:", finalTask: "المهمة النهائية:", byEndCourse: "في نهاية هذه الدورة ستتمكن من", skills: "المهارات:", intro: "فيديو تعريفي",
    comma: "، ", objectives: "ما ستتمكن من فعله:", youWill: "ستتمكن من", buildsToward: "هذا الدرس يعدّك لـ:", quickCheck: n => `تحقق سريع: الدرس ${n}`, rubric: "كيف تُقيَّم مهمتك النهائية:", criterion: "ما ننظر إليه", notYet: "ليس بعد", meets: "يحقق", exceeds: "يتجاوز", mastery: "للنجاح:" },
  sw: { lesson: "Somo", of: "kati ya", goal: "Lengo:", tryIt: "Jaribu sasa", youCanNow: "Sasa unaweza", byTheEnd: "Mwishoni utaweza", minutes: m => `takriban dakika ${m}`, steps: "Hatua kwa hatua:", words: "Maneno ya kujua:", sources: "Vyanzo rasmi:", finalTask: "Kazi ya mwisho:", byEndCourse: "Mwishoni mwa kozi hii utaweza", skills: "Ujuzi:", intro: "Video ya utangulizi",
    objectives: "Utakachoweza kufanya:", youWill: "utaweza", buildsToward: "Somo hili linakuandaa kwa:", quickCheck: n => `Jaribio fupi: Somo ${n}`, rubric: "Jinsi kazi yako ya mwisho inavyokaguliwa:", criterion: "Tunachoangalia", notYet: "Bado", meets: "Inafikia", exceeds: "Inazidi", mastery: "Ili kufaulu:" },
  ha: { lesson: "Darasi", of: "cikin", goal: "Manufa:", tryIt: "Gwada yanzu", youCanNow: "Yanzu za ku iya", byTheEnd: "A ƙarshe za ku iya", minutes: m => `kusan minti ${m}`, steps: "Mataki-mataki:", words: "Kalmomin da za ku sani:", sources: "Majiyoyi na hukuma:", finalTask: "Aiki na ƙarshe:", byEndCourse: "A ƙarshen wannan kwas za ku iya", skills: "Ƙwarewa:", intro: "Bidiyon gabatarwa",
    objectives: "Abin da za ku iya yi:", youWill: "za ku iya", buildsToward: "Wannan darasi yana shirya ku don:", quickCheck: n => `Gwaji mai sauri: Darasi ${n}`, rubric: "Yadda ake duba aikinku na ƙarshe:", criterion: "Abin da muke dubawa", notYet: "Har yanzu bai kai ba", meets: "Ya cika", exceeds: "Ya wuce", mastery: "Don cin nasara:" },
  am: { lesson: "ትምህርት", of: "ከ", goal: "ግብ:", tryIt: "አሁን ይሞክሩ", youCanNow: "አሁን", byTheEnd: "በመጨረሻ", minutes: m => `${m} ደቂቃ ገደማ`, steps: "ደረጃ በደረጃ:", words: "ሊያውቋቸው የሚገቡ ቃላት:", sources: "ኦፊሴላዊ ምንጮች:", finalTask: "የመጨረሻ ተግባር:", byEndCourse: "በዚህ ኮርስ መጨረሻ", skills: "ክህሎቶች:", intro: "የመግቢያ ቪዲዮ",
    comma: "፣ ", stop: "።", after: " ይችላሉ።", objectives: "ማድረግ የሚችሉት:", youWill: "", buildsToward: "ይህ ትምህርት የሚያዘጋጅዎት ለ:", quickCheck: n => `ፈጣን ፍተሻ: ትምህርት ${n}`, rubric: "የመጨረሻ ተግባርዎ እንዴት እንደሚገመገም:", criterion: "የምንመለከተው", notYet: "ገና ነው", meets: "ያሟላል", exceeds: "ይበልጣል", mastery: "ለማለፍ:" },
  yo: { lesson: "Ẹ̀kọ́", of: "nínú", goal: "Àfojúsùn:", tryIt: "Gbìyànjú báyìí", youCanNow: "Báyìí o lè", byTheEnd: "Ní ìparí, o máa lè", minutes: m => `bí ìṣẹ́jú ${m}`, steps: "Ìgbésẹ̀ kọ̀ọ̀kan:", words: "Àwọn ọ̀rọ̀ tó yẹ kí o mọ̀:", sources: "Àwọn orísun tó ṣeé gbẹ́kẹ̀lé:", finalTask: "Iṣẹ́ ìkẹyìn:", byEndCourse: "Ní ìparí ẹ̀kọ́ yìí, o máa lè", skills: "Àwọn ọgbọ́n:", intro: "Fídíò ìfihàn",
    objectives: "Ohun tí o máa lè ṣe:", youWill: "o máa lè", buildsToward: "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀ fún:", quickCheck: n => `Ìdánwò kíákíá: Ẹ̀kọ́ ${n}`, rubric: "Bí a ṣe ń ṣàyẹ̀wò iṣẹ́ ìkẹyìn rẹ:", criterion: "Ohun tí a ń wò", notYet: "Kò tíì tó", meets: "Ó tó", exceeds: "Ó ju bẹ́ẹ̀ lọ", mastery: "Láti yege:" },
  ig: { lesson: "Ihe ọmụmụ", of: "n'ime", goal: "Ebumnuche:", tryIt: "Nwaa ugbu a", youCanNow: "Ugbu a ị nwere ike", byTheEnd: "Na njedebe, ị ga-enwe ike", minutes: m => `ihe dị ka nkeji ${m}`, steps: "Nzọụkwụ n'otu n'otu:", words: "Okwu ị kwesịrị ịmara:", sources: "Ebe ozi a pụrụ ịtụkwasị obi:", finalTask: "Ọrụ ikpeazụ:", byEndCourse: "Na njedebe nke ọmụmụ a, ị ga-enwe ike", skills: "Nkà:", intro: "Vidiyo mmeghe",
    objectives: "Ihe ị ga-enwe ike ime:", youWill: "ị ga-enwe ike", buildsToward: "Ihe ọmụmụ a na-akwado gị maka:", quickCheck: n => `Nnwale ngwa ngwa: Ihe ọmụmụ ${n}`, rubric: "Otu e si enyocha ọrụ ikpeazụ gị:", criterion: "Ihe anyị na-ele anya", notYet: "Ọ bụbeghị", meets: "O ruru", exceeds: "O karịrị", mastery: "Iji gafee:" },
  pt: { lesson: "Lição", of: "de", goal: "Objetivo:", tryIt: "Experimente agora", youCanNow: "Agora você consegue", byTheEnd: "No final, você poderá", minutes: m => `cerca de ${m} minutos`, steps: "Passo a passo:", words: "Palavras para saber:", sources: "Fontes oficiais:", finalTask: "Tarefa final:", byEndCourse: "Ao final deste curso, você poderá", skills: "Habilidades:", intro: "Vídeo de introdução",
    objectives: "O que você poderá fazer:", youWill: "você poderá", buildsToward: "Esta lição prepara você para:", quickCheck: n => `Verificação rápida: Lição ${n}`, rubric: "Como sua tarefa final é avaliada:", criterion: "O que observamos", notYet: "Ainda não", meets: "Atende", exceeds: "Supera", mastery: "Para ser aprovado:" }
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
  // ADDIE parts: the same objectives, the same tags on lessons and questions, the same quick-check answers, pre-test and rubric rows
  if (en.objectives) {
    const same = (x, y) => JSON.stringify(x) === JSON.stringify(y);
    need(same((c.objectives || []).map(o => o.id), en.objectives.map(o => o.id)), `objectives: the same ids as the English (${en.objectives.map(o => o.id).join(", ")})`);
    need(c.analysis && c.implementation && c.evaluation, "analysis, implementation and evaluation: translate them too");
    en.chapters.forEach((ch, ci) => {
      const t = (c.chapters || [])[ci] || { lessons: [], check: { questions: [] } };
      ch.lessons.forEach((l, li) => {
        const tl = t.lessons[li] || {};
        need(same(tl.objectives, l.objectives), `chapter ${ci + 1} lesson ${li + 1}: objectives must stay ${JSON.stringify(l.objectives)}`);
        (l.quickCheck || []).forEach((q, qi) => { const tq = (tl.quickCheck || [])[qi] || {}; need(tq.answer === q.answer && tq.objective === q.objective, `chapter ${ci + 1} lesson ${li + 1} quick check ${qi + 1}: answer ${q.answer} and objective ${q.objective} like the English`); });
      });
      ch.check.questions.forEach((q, qi) => need(((t.check.questions || [])[qi] || {}).objective === q.objective, `chapter ${ci + 1} check question ${qi + 1}: objective must stay ${q.objective}`));
    });
    en.quiz.questions.forEach((q, qi) => need((((c.quiz && c.quiz.questions) || [])[qi] || {}).objective === q.objective, `quiz question ${qi + 1}: objective must stay ${q.objective}`));
    need(same(c.pretest && c.pretest.from, en.pretest.from), `pretest.from must stay ${JSON.stringify(en.pretest.from)}`);
    need(same(((c.rubric && c.rubric.criteria) || []).map(k => k.objective), en.rubric.criteria.map(k => k.objective)), "rubric: the same rows, with the same objectives, as the English");
  }
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
  if (c.objectives || c.analysis) problems.push(...addieProblems(c, question));
  return problems;
}

// ---- ADDIE (owner, 28 October 2026: "the courses should be utlizing the addie methodolgy. that is the standard for training"; "quizzes as needed to support learning") ----------------------------------------------------
// Analysis: who the learners are and the gap. Design: measurable objectives (condition, action, standard), every lesson and every question tied to one. Development: the lessons. Implementation: materials and notes.
// Evaluation: a pre-test (diagnostic), a 2-question quick check after every lesson and the chapter checks (formative), the quiz (summative), a rubric for the final task (performance), plus the standard
// reaction survey (Kirkpatrick level 1) and 30-day follow-up (level 3) below and the course's own results to track (level 4).

// an objective must name something a person can be seen doing, so it can be tested (Bloom's taxonomy action verbs); these verbs cannot be observed
const VAGUE_VERBS = /^(understand|know|learn|appreciate|be aware|become aware|be familiar|become familiar|grasp|realize|believe|feel|think about|gain|have)\b/i;

function addieProblems(c, question) {
  const problems = [];
  const need = (ok, what) => { if (!ok) problems.push(what); };
  const text = v => typeof v === "string" && v.trim().length > 0;
  const a = c.analysis || {};
  for (const k of ["learners", "startingPoint", "gap"]) need(text(a[k]), `analysis.${k} is missing`);
  need(Array.isArray(a.constraints) && a.constraints.length >= 1 && a.constraints.every(text), "analysis.constraints: at least 1 (reading level, devices, time, language)");
  const objs = c.objectives || [];
  need(objs.length >= 3 && objs.length <= 6, "objectives: 3 to 6");
  const ids = new Set();
  objs.forEach((o, i) => {
    need(/^O[1-9]$/.test(o.id) && !ids.has(o.id), `objective ${i + 1}: id O1, O2, ... (unique)`);
    ids.add(o.id);
    for (const k of ["condition", "action", "standard"]) need(text(o[k]), `objective ${o.id}: ${k} is missing`);
    need(!VAGUE_VERBS.test(String(o.action || "").trim()), `objective ${o.id}: start the action with a verb you can see someone do (not "${String(o.action).split(" ")[0]}")`);
  });
  const tagged = (q, where) => need(ids.has(q.objective), `${where}: objective must be one of ${[...ids].join(", ")}`);
  const taught = new Set(), tested = {};
  const count = q => { tested[q.objective] = (tested[q.objective] || 0) + 1; };
  (c.chapters || []).forEach((ch, ci) => {
    (ch.lessons || []).forEach((l, li) => {
      const at = `chapter ${ci + 1} lesson ${li + 1}`;
      need(Array.isArray(l.objectives) && l.objectives.length >= 1 && l.objectives.every(id => ids.has(id)), `${at}: objectives (which of ${[...ids].join(", ")} it teaches)`);
      (l.objectives || []).forEach(id => taught.add(id));
      need(!VAGUE_VERBS.test(String(l.goal || "").trim()), `${at}: start the goal with a verb you can see someone do`);
      need(Array.isArray(l.quickCheck) && l.quickCheck.length === 2, `${at}: quickCheck with exactly 2 questions`);
      (l.quickCheck || []).forEach((q, qi) => { question(q, `${at} quick check ${qi + 1}`); tagged(q, `${at} quick check ${qi + 1}`); });
    });
    ((ch.check && ch.check.questions) || []).forEach((q, qi) => { tagged(q, `chapter ${ci + 1} check question ${qi + 1}`); count(q); });
  });
  ((c.quiz && c.quiz.questions) || []).forEach((q, qi) => { tagged(q, `quiz question ${qi + 1}`); count(q); });
  for (const id of ids) {
    need(taught.has(id), `objective ${id}: no lesson teaches it`);
    need((tested[id] || 0) >= 3, `objective ${id}: tested by ${tested[id] || 0} check and quiz questions (at least 3)`);
  }
  const quizN = ((c.quiz && c.quiz.questions) || []).length;
  const pre = c.pretest || {};
  need(text(pre.title) && Array.isArray(pre.from) && pre.from.length >= 6 && pre.from.length <= 10 && new Set(pre.from).size === pre.from.length && pre.from.every(i => Number.isInteger(i) && i >= 0 && i < quizN), "pretest: title and from (6 to 10 different quiz question numbers, counting from 0)");
  const preCovers = new Set((pre.from || []).map(i => ((c.quiz.questions || [])[i] || {}).objective));
  for (const id of ids) need(preCovers.has(id), `pretest: add a question for objective ${id}`);
  const r = c.rubric || {};
  need(text(r.mastery), "rubric.mastery: what counts as passing the final task");
  need(Array.isArray(r.criteria) && r.criteria.length >= 3 && r.criteria.length <= 6, "rubric: 3 to 6 criteria");
  (r.criteria || []).forEach((k, ki) => {
    for (const f of ["name", "notYet", "meets", "exceeds"]) need(text(k[f]), `rubric criterion ${ki + 1}: ${f} is missing`);
    need(ids.has(k.objective), `rubric criterion ${ki + 1}: objective must be one of ${[...ids].join(", ")}`);
  });
  const ev = c.evaluation || {};
  need(Array.isArray(ev.results) && ev.results.length >= 2 && ev.results.every(text), "evaluation.results: at least 2 results to track (Kirkpatrick level 4)");
  const im = c.implementation || {};
  need(Array.isArray(im.materials) && im.materials.length >= 1 && im.materials.every(text), "implementation.materials: what a learner needs");
  need(Array.isArray(im.facilitatorNotes) && im.facilitatorNotes.length >= 1 && im.facilitatorNotes.every(text), "implementation.facilitatorNotes: at least 1 note for a teacher or program running the course");
  return problems;
}

// the same reaction survey (level 1) and 30-day follow-up (level 3) for every course; {skill} is the course's outcome
const SURVEY = {
  en: {
    title: "Course survey",
    scale: ["Strongly disagree", "Disagree", "Not sure", "Agree", "Strongly agree"],
    rate: ["The lessons were easy to follow.", "The videos and slides helped me learn.", "The \"Try it now\" tasks helped me practise.", "The quick checks and quizzes helped me see what I had learned.", "I can use what I learned in my own life or work.", "I would recommend this course to a friend."],
    open: ["What was the most useful part of this course?", "What should we change to make it better?"]
  },
  es: {
    title: "Encuesta del curso",
    scale: ["Totalmente en desacuerdo", "En desacuerdo", "No estoy seguro", "De acuerdo", "Totalmente de acuerdo"],
    rate: ["Las lecciones fueron fáciles de seguir.", "Los videos y las diapositivas me ayudaron a aprender.", "Las tareas \"Pruébalo ahora\" me ayudaron a practicar.", "Las comprobaciones rápidas y los exámenes me ayudaron a ver lo que aprendí.", "Puedo usar lo que aprendí en mi vida o en mi trabajo.", "Recomendaría este curso a un amigo."],
    open: ["¿Qué fue lo más útil de este curso?", "¿Qué deberíamos cambiar para mejorarlo?"]
  },
  fr: {
    title: "Questionnaire du cours",
    scale: ["Pas du tout d'accord", "Pas d'accord", "Je ne sais pas", "D'accord", "Tout à fait d'accord"],
    rate: ["Les leçons étaient faciles à suivre.", "Les vidéos et les diapositives m'ont aidé à apprendre.", "Les activités « Essayez maintenant » m'ont aidé à m'exercer.", "Les contrôles rapides et les quiz m'ont aidé à voir ce que j'ai appris.", "Je peux utiliser ce que j'ai appris dans ma vie ou mon travail.", "Je recommanderais ce cours à un ami."],
    open: ["Quelle partie de ce cours vous a été la plus utile ?", "Que devrions-nous changer pour l'améliorer ?"]
  },
  ar: {
    title: "استبيان الدورة",
    scale: ["لا أوافق بشدة", "لا أوافق", "لست متأكدًا", "أوافق", "أوافق بشدة"],
    rate: ["كان من السهل متابعة الدروس.", "ساعدتني الفيديوهات والشرائح على التعلم.", "ساعدتني مهام \"جرّب الآن\" على التدرب.", "ساعدتني اختبارات التحقق السريع والاختبارات على معرفة ما تعلمته.", "أستطيع استخدام ما تعلمته في حياتي أو عملي.", "سأوصي صديقًا بهذه الدورة."],
    open: ["ما أكثر جزء مفيد في هذه الدورة؟", "ما الذي يجب أن نغيره لتحسينها؟"]
  },
  sw: {
    title: "Dodoso la kozi",
    scale: ["Sikubaliani kabisa", "Sikubaliani", "Sina uhakika", "Nakubali", "Nakubali kabisa"],
    rate: ["Masomo yalikuwa rahisi kufuata.", "Video na slaidi zilinisaidia kujifunza.", "Kazi za \"Jaribu sasa\" zilinisaidia kufanya mazoezi.", "Majaribio mafupi na mitihani vilinisaidia kuona nilichojifunza.", "Ninaweza kutumia nilichojifunza katika maisha au kazi yangu.", "Ningempendekezea rafiki kozi hii."],
    open: ["Ni sehemu gani ya kozi hii iliyokuwa na manufaa zaidi?", "Tubadilishe nini ili kuiboresha?"]
  },
  ha: {
    title: "Tambayoyin ra'ayi kan kwas",
    scale: ["Ban yarda ba ko kaɗan", "Ban yarda ba", "Ban tabbata ba", "Na yarda", "Na yarda sosai"],
    rate: ["Darussan sun yi sauƙin bi.", "Bidiyoyi da hotunan nunin sun taimake ni na koya.", "Ayyukan \"Gwada yanzu\" sun taimake ni na yi atisaye.", "Gwaje-gwaje masu sauri da jarabawa sun taimake ni na ga abin da na koya.", "Zan iya amfani da abin da na koya a rayuwata ko aikina.", "Zan ba aboki shawarar wannan kwas."],
    open: ["Wane ɓangare na wannan kwas ya fi amfani?", "Me ya kamata mu canza don mu inganta shi?"]
  },
  am: {
    title: "የኮርሱ መጠይቅ",
    scale: ["በፍጹም አልስማማም", "አልስማማም", "እርግጠኛ አይደለሁም", "እስማማለሁ", "በጣም እስማማለሁ"],
    rate: ["ትምህርቶቹ ለመከታተል ቀላል ነበሩ።", "ቪዲዮዎቹና ስላይዶቹ እንድማር ረድተውኛል።", "የ\"አሁን ይሞክሩ\" ተግባራት እንድለማመድ ረድተውኛል።", "ፈጣን ፍተሻዎቹና ፈተናዎቹ የተማርኩትን እንዳይ ረድተውኛል።", "የተማርኩትን በሕይወቴ ወይም በሥራዬ መጠቀም እችላለሁ።", "ይህን ኮርስ ለጓደኛዬ እመክራለሁ።"],
    open: ["የዚህ ኮርስ በጣም ጠቃሚው ክፍል ምን ነበር?", "የተሻለ ለማድረግ ምን እንቀይር?"]
  },
  yo: {
    title: "Ìwádìí nípa ẹ̀kọ́ náà",
    scale: ["Mi ò fara mọ́ rárá", "Mi ò fara mọ́", "Kò dá mi lójú", "Mo fara mọ́", "Mo fara mọ́ gidigidi"],
    rate: ["Àwọn ẹ̀kọ́ náà rọrùn láti tẹ̀lé.", "Àwọn fídíò àti àwọn àwòrán ìfihàn ràn mí lọ́wọ́ láti kọ́.", "Àwọn iṣẹ́ \"Gbìyànjú báyìí\" ràn mí lọ́wọ́ láti ṣe àṣà.", "Àwọn ìdánwò kíákíá àti àwọn ìdánwò ràn mí lọ́wọ́ láti rí ohun tí mo ti kọ́.", "Mo lè lo ohun tí mo kọ́ nínú ìgbésí ayé tàbí iṣẹ́ mi.", "Mo máa gba ọ̀rẹ́ mi níyànjú láti ṣe ẹ̀kọ́ yìí."],
    open: ["Apá wo nínú ẹ̀kọ́ yìí ló wúlò jù?", "Kí ni ká yí padà kí ó lè dára sí i?"]
  },
  ig: {
    title: "Ajụjụ banyere ọmụmụ a",
    scale: ["Ekwenyeghị m ma ọlị", "Ekwenyeghị m", "Amaghị m nke ọma", "Ekwenyere m", "Ekwenyesiri m ike"],
    rate: ["Ihe ọmụmụ ndị ahụ dị mfe ịgbaso.", "Vidiyo na slaịdị nyeere m aka ịmụta.", "Ọrụ \"Nwaa ugbu a\" nyeere m aka ime omume.", "Nnwale ngwa ngwa na ule nyeere m aka ịhụ ihe m mụtara.", "Enwere m ike iji ihe m mụtara na ndụ m ma ọ bụ n'ọrụ m.", "Aga m atụ aro ọmụmụ a nye enyi m."],
    open: ["Kedu akụkụ ọmụmụ a bara uru karịa?", "Gịnị ka anyị kwesịrị ịgbanwe iji mee ka ọ ka mma?"]
  },
  pt: {
    title: "Questionário do curso",
    scale: ["Discordo totalmente", "Discordo", "Não tenho certeza", "Concordo", "Concordo totalmente"],
    rate: ["As lições foram fáceis de acompanhar.", "Os vídeos e os slides me ajudaram a aprender.", "As tarefas \"Experimente agora\" me ajudaram a praticar.", "As verificações rápidas e os questionários me ajudaram a ver o que aprendi.", "Consigo usar o que aprendi na minha vida ou no meu trabalho.", "Eu recomendaria este curso a um amigo."],
    open: ["Qual foi a parte mais útil deste curso?", "O que devemos mudar para melhorá-lo?"]
  }
};
const FOLLOW_UP = {
  en: {
    title: "30 days later: are you using it?",
    questions: ["This course taught you to {skill}. In the last 30 days, have you used it? (Yes / No)", "How often? (Not yet / Once / A few times / Every week)", "Tell us one time you used it, and what happened.", "If you have not used it yet, what got in the way?", "What would help you use it more?"]
  },
  es: {
    title: "30 días después: ¿lo estás usando?",
    questions: ["Este curso te enseñó a {skill}. En los últimos 30 días, ¿lo usaste? (Sí / No)", "¿Con qué frecuencia? (Todavía no / Una vez / Algunas veces / Cada semana)", "Cuéntanos una vez que lo usaste y qué pasó.", "Si todavía no lo has usado, ¿qué te lo impidió?", "¿Qué te ayudaría a usarlo más?"]
  },
  fr: {
    title: "30 jours plus tard : l'utilisez-vous ?",
    questions: ["Ce cours vous a appris à {skill}. Au cours des 30 derniers jours, l'avez-vous utilisé ? (Oui / Non)", "À quelle fréquence ? (Pas encore / Une fois / Quelques fois / Chaque semaine)", "Racontez-nous une fois où vous l'avez utilisé, et ce qui s'est passé.", "Si vous ne l'avez pas encore utilisé, qu'est-ce qui vous en a empêché ?", "Qu'est-ce qui vous aiderait à l'utiliser davantage ?"]
  },
  ar: {
    title: "بعد 30 يومًا: هل تستخدم ما تعلمته؟",
    questions: ["علّمتك هذه الدورة {skill}. خلال آخر 30 يومًا، هل استخدمت ذلك؟ (نعم / لا)", "كم مرة؟ (ليس بعد / مرة واحدة / بضع مرات / كل أسبوع)", "أخبرنا عن مرة استخدمته فيها، وماذا حدث.", "إذا لم تستخدمه بعد، فما الذي منعك؟", "ما الذي سيساعدك على استخدامه أكثر؟"]
  },
  sw: {
    title: "Siku 30 baadaye: unatumia ulichojifunza?",
    questions: ["Kozi hii ilikufundisha {skill}. Katika siku 30 zilizopita, umetumia ujuzi huu? (Ndiyo / Hapana)", "Mara ngapi? (Bado / Mara moja / Mara chache / Kila wiki)", "Tueleze wakati mmoja ulipoutumia, na kilichotokea.", "Kama bado hujautumia, ni nini kilikuzuia?", "Nini kingekusaidia kuutumia zaidi?"]
  },
  ha: {
    title: "Bayan kwana 30: kuna amfani da abin da kuka koya?",
    questions: ["Wannan kwas ya koya muku {skill}. A cikin kwana 30 da suka wuce, kun yi amfani da shi? (I / A'a)", "Sau nawa? (Har yanzu ba / Sau ɗaya / Sau kaɗan / Kowane mako)", "Ku faɗa mana lokaci ɗaya da kuka yi amfani da shi, da abin da ya faru.", "Idan har yanzu ba ku yi amfani da shi ba, me ya hana ku?", "Me zai taimaka muku ku ƙara amfani da shi?"]
  },
  am: {
    title: "ከ30 ቀናት በኋላ፦ የተማሩትን እየተጠቀሙበት ነው?",
    questions: ["ይህ ኮርስ {skill} አስተምሮዎታል። ባለፉት 30 ቀናት ተጠቅመውበታል? (አዎ / አይ)", "ምን ያህል ጊዜ? (ገና / አንድ ጊዜ / ጥቂት ጊዜ / በየሳምንቱ)", "የተጠቀሙበትን አንድ ጊዜና የሆነውን ይንገሩን።", "እስካሁን ካልተጠቀሙበት፣ ምን አገደዎት?", "የበለጠ እንዲጠቀሙበት ምን ይረዳዎታል?"]
  },
  yo: {
    title: "Lẹ́yìn ọgbọ̀n ọjọ́: ṣé o ń lò ó?",
    questions: ["Ẹ̀kọ́ yìí kọ́ ọ láti {skill}. Láàárín ọgbọ̀n ọjọ́ tó kọjá, ṣé o ti lò ó? (Bẹ́ẹ̀ ni / Rárá)", "Ìgbà mélòó? (Kò tíì / Ẹ̀ẹ̀kan / Ìgbà díẹ̀ / Ọ̀sẹ̀ kọ̀ọ̀kan)", "Sọ fún wa nípa ìgbà kan tí o lò ó, àti ohun tó ṣẹlẹ̀.", "Tí o kò bá tíì lò ó, kí ló dí ọ lọ́wọ́?", "Kí ló máa ràn ọ́ lọ́wọ́ láti lò ó sí i?"]
  },
  ig: {
    title: "Mgbe ụbọchị 30 gachara: ị na-eji ya?",
    questions: ["Ọmụmụ a kụziri gị {skill}. N'ime ụbọchị 30 gara aga, ị jirila ya? (Ee / Mba)", "Ugboro ole? (Ọ bụbeghị / Otu ugboro / Ugboro ole na ole / Kwa izu)", "Gwa anyị otu oge i jiri ya, na ihe mere.", "Ọ bụrụ na i jibeghị ya, gịnị gbochiri gị?", "Gịnị ga-enyere gị aka iji ya karịa?"]
  },
  pt: {
    title: "30 dias depois: você está usando?",
    questions: ["Este curso ensinou você a {skill}. Nos últimos 30 dias, você usou isso? (Sim / Não)", "Com que frequência? (Ainda não / Uma vez / Algumas vezes / Toda semana)", "Conte uma vez em que você usou, e o que aconteceu.", "Se ainda não usou, o que atrapalhou?", "O que ajudaria você a usar mais?"]
  }
};

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
    slideBlocks(kicker, L.youCanNow, [lesson.youCanNow + (L.after || "")], rtl)
  ];
  return stillsVideo(dir, base, scenes);
}

// each slide is drawn once as a picture; the video shows the pictures in turn, encoded once at a low frame rate (the slides do not move)
// NARRATION (scripts/koachlearn-narration.js): with --narrate each slide is read aloud in the course's language and stays up until the voice has finished.
// Building runs in two passes (the voice services are asynchronous, the video builder is not): the first only collects what is to be said, then it is all spoken and kept, and the second builds the videos from the kept audio.
let narration = null; // { lang, module, collect: [] | null }
const PAUSE_AFTER_SPEECH = 1.2;

function stillsVideo(dir, base, scenes) {
  const slidesDir = path.join(dir, `${base}-slides`);
  const spoken = narration ? scenes.map(blocks => narration.module.narrationLines(blocks)) : [];
  if (narration && narration.collect) { spoken.forEach(text => narration.collect.push({ lang: narration.lang, text })); return { video: `${base}.mp4`, slides: `${base}-slides`, slideCount: scenes.length }; }
  fs.mkdirSync(slidesDir, { recursive: true });
  const audios = [];
  const shown = scenes.map((blocks, i) => {
    card(slidesDir, pad(i + 1), blocks, 0, { still: true });
    let seconds = readingSeconds(blocks.reduce((sum, b) => sum + b.text.split(/\s+/).length, 0));
    if (narration) {
      const clip = narration.module.cachedAudio(narration.lang, spoken[i]);
      if (!clip) throw new Error(`${base} slide ${i + 1}: the narration for this slide has not been spoken yet (run the build with --narrate)`);
      seconds = Math.max(seconds, Math.ceil((clip.seconds + PAUSE_AFTER_SPEECH) * 10) / 10);
      audios.push({ clip, seconds });
    }
    return { file: `${base}-slides/${pad(i + 1)}.png`, seconds };
  });
  const list = [...shown.map(s => `file '${s.file}'\nduration ${s.seconds}`), `file '${shown[shown.length - 1].file}'`].join("\n");
  fs.writeFileSync(path.join(dir, `${base}.list`), list);
  const soundInput = ["-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo"];
  if (narration) {
    // each slide's voice is padded with quiet to the length of its slide, then the slides' sound is joined in order
    const parts = audios.map((a, i) => {
      const part = `${base}-voice-${pad(i + 1)}.wav`;
      execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", a.clip.file, "-af", `apad=whole_dur=${a.seconds}`, "-t", String(a.seconds), "-ar", "44100", "-ac", "1", part], { cwd: dir });
      return part;
    });
    fs.writeFileSync(path.join(dir, `${base}.voices`), parts.map(p => `file '${p}'`).join("\n"));
    soundInput.splice(0, soundInput.length, "-f", "concat", "-safe", "0", "-i", `${base}.voices`);
  }
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", `${base}.list`, ...soundInput,
    "-vf", "fps=5,format=yuv420p", "-c:v", "libx264", "-tune", "stillimage", "-c:a", "aac", "-b:a", narration ? "96k" : "64k", "-t", String(shown.reduce((sum, s) => sum + s.seconds, 0)), "-movflags", "+faststart", `${base}.mp4`], { cwd: dir, stdio: "inherit" });
  fs.unlinkSync(path.join(dir, `${base}.list`));
  if (narration) { fs.unlinkSync(path.join(dir, `${base}.voices`)); for (let i = 0; i < audios.length; i += 1) fs.unlinkSync(path.join(dir, `${base}-voice-${pad(i + 1)}.wav`)); }
  return { video: `${base}.mp4`, slides: `${base}-slides`, slideCount: scenes.length };
}

// an objective as one sentence a learner reads: condition, action, standard
// "condition, you will action, standard." A language that puts the verb last (Amharic) has no youWill; it adds "can" after the action (L.after).
const objectiveText = (o, L) => { const sep = L.comma || ", "; const act = L.youWill ? `${L.youWill} ${o.action}` : `${o.action}${(L.after || "").replace(/[።.]$/, "")}`; return `${o.condition}${sep}${act}${sep}${o.standard}`.replace(/[.።]*$/, L.stop || "."); };

function rubricHtml(r, L) {
  const head = `<tr><th>${L.criterion}</th><th>${L.notYet}</th><th>${L.meets}</th><th>${L.exceeds}</th></tr>`;
  return `<p><strong>${L.rubric}</strong></p><table border="1" cellpadding="6" style="border-collapse:collapse">${head}${r.criteria.map(k => `<tr><td><strong>${esc(k.name)}</strong></td><td>${esc(k.notYet)}</td><td>${esc(k.meets)}</td><td>${esc(k.exceeds)}</td></tr>`).join("")}</table><p><strong>${L.mastery}</strong> ${esc(r.mastery)}</p>`;
}

function writtenLessonHtml(lesson, n, total, L = LABELS.en, objectives = null) {
  const parts = [`<p><strong>${L.lesson} ${n} ${L.of} ${total} · ${L.minutes(lesson.minutes || 5)}</strong></p>`, `<p><strong>${L.goal}</strong> ${esc(lesson.goal)}</p>`];
  if (objectives && lesson.objectives) parts.push(`<p><strong>${L.buildsToward}</strong> ${lesson.objectives.map(id => esc(objectiveText(objectives.find(o => o.id === id), L))).join(" ")}</p>`);
  parts.push(...lesson.text.map(p => `<p>${esc(p)}</p>`));
  if (lesson.steps && lesson.steps.length) parts.push(`<p><strong>${L.steps}</strong></p><ol>${lesson.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>`);
  if (lesson.words && lesson.words.length) parts.push(`<p><strong>${L.words}</strong></p><ul>${lesson.words.map(([t, m]) => `<li><strong>${esc(t)}:</strong> ${esc(m)}</li>`).join("")}</ul>`);
  if (lesson.sources && lesson.sources.length) parts.push(`<p><strong>${L.sources}</strong></p><ul>${lesson.sources.map(s => `<li><a href="${esc(s.url)}">${esc(s.name)}</a></li>`).join("")}</ul>`);
  parts.push(`<p><strong>${L.tryIt}:</strong> ${esc(lesson.tryIt)}</p>`, `<p><strong>${L.youCanNow}</strong> ${esc(lesson.youCanNow + (L.after || ""))}</p>`);
  return parts.join("\n");
}

function questionsHtml(title, questions) {
  return `<h3>${esc(title)}</h3><ol>${questions.map(q => `<li><p>${q.objective ? `<small>[${q.objective}]</small> ` : ""}${esc(q.q)}</p><ol type="A">${q.options.map((o, i) => `<li>${i === q.answer ? `<strong>${esc(o)}</strong> ✓` : esc(o)}</li>`).join("")}</ol><p><em>${esc(q.why)}</em></p></li>`).join("")}</ol>`;
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
  fontSwap = FONTS_BY_LANG[c.lang] || null;
  if (narration) narration.lang = c.lang || "en";
  const dir = path.join(outRoot, slug(c.category), c.id);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  card(dir, "picture", [{ text: c.category.toUpperCase(), size: 34, color: RED, width: 50, gap: 60 }, { text: c.name, size: 72, width: 26, maxLines: 3 }], 0, { still: true });
  const introCard = [
    { text: c.category.toUpperCase(), size: 30, color: RED, width: 50, gap: 40 },
    { text: c.name, size: 60, width: 32, maxLines: 3, gap: 44 },
    { text: `${L.byTheEnd} ${c.outcome}${L.after || ""}`, size: 34, font: PLAIN, width: 58, maxLines: 6 }
  ];
  if (c.objectives) {
    // ADDIE: tell learners up front what they will be able to do (the objectives' actions, three to a slide)
    const actions = c.objectives.map(o => o.action.charAt(0).toUpperCase() + o.action.slice(1));
    const groups = [];
    for (let i = 0; i < actions.length; i += 3) groups.push(actions.slice(i, i + 3));
    stillsVideo(dir, "intro", [introCard, ...groups.map(g => slideBlocks(c.name, L.objectives.replace(/\s*:$/, ""), g, rtl))]);
  } else card(dir, "intro", introCard, 14);
  const total = c.chapters.reduce((s, ch) => s + ch.lessons.length, 0);
  let n = 0;
  const chapters = c.chapters.map((ch, ci) => {
    const chDir = path.join(dir, `chapter-${ci + 1}`);
    fs.mkdirSync(chDir);
    const lessons = ch.lessons.map(l => {
      n += 1;
      const base = pad(n);
      const v = lessonVideo(chDir, base, `${c.name}  |  ${L.lesson} ${n} ${L.of} ${total}`, l, L, rtl);
      let body = writtenLessonHtml(l, n, total, L, c.objectives);
      if (c.rubric && n === total) body += "\n" + rubricHtml(c.rubric, L);
      const html = rtl ? `<div dir="rtl">\n${body}\n</div>` : body;
      fs.writeFileSync(path.join(chDir, `${base}.html`), html);
      const lesson = { title: `${L.lesson} ${n}: ${l.title}`, video: `chapter-${ci + 1}/${v.video}`, slides: `chapter-${ci + 1}/${v.slides}`, descriptionHtml: html };
      if (l.quickCheck) {
        lesson.quickCheck = { title: L.quickCheck(n), questions: l.quickCheck };
        fs.writeFileSync(path.join(chDir, `${base}-quick-check.json`), JSON.stringify(lesson.quickCheck, null, 2));
      }
      return lesson;
    });
    fs.writeFileSync(path.join(chDir, "knowledge-check.json"), JSON.stringify(ch.check, null, 2));
    return { name: ch.name, lessons, check: ch.check };
  });
  fs.writeFileSync(path.join(dir, "quiz.json"), JSON.stringify(c.quiz, null, 2));
  let about = c.about.map(p => `<p>${esc(p)}</p>`).join("\n") + `\n<p><strong>${L.byEndCourse}</strong> ${esc(c.outcome + (L.after || ""))}</p>`;
  if (c.objectives) about += `\n<p><strong>${L.objectives}</strong></p><ul>${c.objectives.map(o => `<li>${esc(objectiveText(o, L))}</li>`).join("")}</ul>`;
  about += `\n<p><strong>${L.finalTask}</strong> ${esc(c.finalTask)}</p>`;
  if (c.rubric) about += "\n" + rubricHtml(c.rubric, L);
  const descriptionHtml = rtl ? `<div dir="rtl">\n${about}\n</div>` : about;
  const manifest = { id: c.id, lang: c.lang || "en", translationOf: c.translationOf || null, category: c.category, name: c.name, skills: c.skills, picture: "picture.png", introVideo: "intro.mp4", descriptionHtml, chapters, quiz: c.quiz };
  if (c.objectives) {
    const lang = c.lang || "en";
    manifest.objectives = c.objectives.map(o => ({ ...o, text: objectiveText(o, L) }));
    manifest.pretest = { title: c.pretest.title, questions: c.pretest.from.map(i => c.quiz.questions[i]) };
    manifest.rubric = c.rubric;
    manifest.survey = SURVEY[lang] || SURVEY.en;
    const fu = FOLLOW_UP[lang] || FOLLOW_UP.en;
    manifest.followUp = { title: fu.title, questions: fu.questions.map(q => q.replace("{skill}", c.outcome.replace(/[.\s]+$/, ""))) };
    fs.writeFileSync(path.join(dir, "pretest.json"), JSON.stringify(manifest.pretest, null, 2));
    fs.writeFileSync(path.join(dir, "survey.json"), JSON.stringify({ survey: manifest.survey, followUp: manifest.followUp }, null, 2));
    fs.writeFileSync(path.join(dir, "design-document.html"), designDocumentHtml(c, manifest));
  }
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
${m.objectives ? `<p><a href="design-document.html">ADDIE design document</a></p><section>${questionsHtml(m.pretest.title, m.pretest.questions)}</section>` : ""}
${m.chapters.map(ch => `<section><h2>${esc(ch.name)}</h2>${ch.lessons.map(l => `<div class="lesson"><h3>${esc(l.title)}</h3><video src="${l.video}" controls preload="none"></video>${l.descriptionHtml}${l.quickCheck ? questionsHtml(l.quickCheck.title, l.quickCheck.questions) : ""}</div>`).join("")}<div class="lesson">${questionsHtml(ch.check.title, ch.check.questions)}</div></section>`).join("")}
<section>${questionsHtml(m.quiz.title, m.quiz.questions)}</section>
${m.survey ? `<section><h3>${esc(m.survey.title)}</h3><p>${m.survey.scale.map(esc).join(" · ")}</p><ol>${[...m.survey.rate, ...m.survey.open].map(q => `<li>${esc(q)}</li>`).join("")}</ol><h3>${esc(m.followUp.title)}</h3><ol>${m.followUp.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ol></section>` : ""}</body></html>`;
}

// the ADDIE design document for a course: for the owner, reviewers, funders and whoever loads the course (English labels; the course content is in the course's language)
function designDocumentHtml(c, m) {
  const L = LABELS[c.lang || "en"];
  const lessons = c.chapters.flatMap((ch, ci) => ch.lessons.map((l, li) => ({ ...l, n: ci * 3 + li + 1, chapter: ci + 1 })));
  const checkQs = c.chapters.flatMap(ch => ch.check.questions), quizQs = c.quiz.questions;
  const quickQs = lessons.flatMap(l => l.quickCheck);
  const seat = lessons.reduce((s, l) => s + (l.minutes || 5), 0);
  const per = (qs, id) => qs.filter(q => q.objective === id).length;
  let categories = [c.category];
  try { const e = require("./koachlearn-courses/catalog.js").allCourses().find(x => x.id === (c.translationOf || c.id)); if (e) categories = e.categories; } catch (_) { /* catalog is optional */ }
  const li = xs => `<ul>${xs.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const a = c.analysis;
  const rows = (cells, th) => `<tr>${cells.map(x => th ? `<th>${x}</th>` : `<td>${x}</td>`).join("")}</tr>`;
  const loadOrder = [`Course: picture, name, skills, intro video (intro.mp4), description (objectives, final task and rubric are in it)`,
    ...c.chapters.flatMap((ch, ci) => [ch.name,
      ...(ci === 0 ? [`  Knowledge check: ${c.pretest.title} (pretest.json, ${c.pretest.from.length} questions; take before Lesson 1, not graded)`] : []),
      ...ch.lessons.flatMap((l, k) => { const n = ci * 3 + k + 1; return [`  Video: ${L.lesson} ${n}: ${l.title} (chapter-${ci + 1}/${pad(n)}.mp4, description ${pad(n)}.html)`, `  Knowledge check: ${L.quickCheck(n)} (chapter-${ci + 1}/${pad(n)}-quick-check.json, 2 questions)`]; }),
      `  Knowledge check: ${ch.check.title} (chapter-${ci + 1}/knowledge-check.json, 5 questions)`]),
    `Quiz: ${c.quiz.title} (quiz.json, 20 questions)`, `After the quiz: course survey and, 30 days later, the follow-up (survey.json)`];
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Design Document: ${esc(c.name)}</title>
<style>body{font:15px/1.5 Arial,sans-serif;max-width:960px;margin:0 auto;padding:24px;color:#0f172a}h1{margin-bottom:0}h2{border-bottom:3px solid #e11d48;padding-bottom:4px;margin-top:32px}table{border-collapse:collapse;width:100%;margin:8px 0}th,td{border:1px solid #cbd5e1;padding:6px 8px;vertical-align:top;text-align:left}th{background:#f1f5f9}.sub{color:#475569}pre{white-space:pre-wrap;background:#f8fafc;padding:12px;border:1px solid #e2e8f0}@media print{h2{break-after:avoid}table{break-inside:auto}}</style></head><body>
<h1>${esc(c.name)}</h1><p class="sub">ADDIE design document · Koach Learn · ${esc(categories.join(", "))} · language: ${esc(c.lang || "en")} · ${lessons.length} lessons, about ${seat} minutes of lessons plus practice and assessments</p>
<h2>1. Analysis</h2>
<table>${rows(["Learners", esc(a.learners)])}${rows(["Starting point", esc(a.startingPoint)])}${rows(["Skill gap and why it matters", esc(a.gap)])}${rows(["Constraints", li(a.constraints)])}${a.prerequisites ? rows(["Prerequisites", esc(a.prerequisites)]) : ""}${rows(["Course goal", `By the end of this course the learner will be able to ${esc(c.outcome)}`])}</table>
<h2>2. Design</h2>
<h3>Learning objectives</h3><p class="sub">Audience: the learner. Each objective names a condition, an action that can be observed, and the standard that counts as success.</p>
<table>${rows(["ID", "Condition", "Action (observable)", "Standard", "Taught in", "Questions that test it"], true)}${c.objectives.map(o => rows([o.id, esc(o.condition), esc(o.action), esc(o.standard), lessons.filter(l => l.objectives.includes(o.id)).map(l => `Lesson ${l.n}`).join(", "), `pre-test ${c.pretest.from.filter(i => quizQs[i].objective === o.id).length} · quick checks ${per(quickQs, o.id)} · chapter checks ${per(checkQs, o.id)} · quiz ${per(quizQs, o.id)} · rubric ${c.rubric.criteria.filter(k => k.objective === o.id).length}`])).join("")}</table>
<h3>Assessment plan</h3>
<table>${rows(["Assessment", "Purpose", "Items", "When"], true)}${rows(["Pre-test", "Diagnostic: what the learner knows before starting; compared with the same questions in the quiz to measure gain", `${c.pretest.from.length} (taken from the final quiz)`, "Before Lesson 1"])}${rows(["Quick checks", "Formative: practice right after each lesson, with the reason for each answer", `${quickQs.length} (2 per lesson)`, "After every lesson"])}${rows(["Knowledge checks", "Formative: review of each chapter", `${checkQs.length} (5 per chapter)`, "End of each chapter"])}${rows(["Final quiz", "Summative: covers every objective", `${quizQs.length}`, "End of course; suggested pass mark 80% (16 of 20)"])}${rows(["Final task + rubric", "Performance: the learner does the skill", `${c.rubric.criteria.length} criteria`, "Lesson " + lessons.length])}</table>
<h3>Lesson sequence</h3>
<table>${rows(["#", "Lesson", "Minutes", "Lesson goal", "Objectives", "Practice (Try it now)"], true)}${lessons.map(l => rows([l.n, esc(l.title), l.minutes || 5, esc(l.goal), l.objectives.join(", "), esc(l.tryIt)])).join("")}</table>
<p class="sub">Each lesson follows the same pattern: state the goal, teach in short text with steps and key words, show the main points on slides in the video, practise with a real task, check with 2 questions, then state what the learner can now do.</p>
<h2>3. Development</h2>
<table>${rows(["#", "Video", "Text", "Steps", "Key words", "Official sources"], true)}${lessons.map(l => rows([l.n, `${l.slides.length + 3} slides`, `${l.text.length} paragraphs`, (l.steps || []).length, (l.words || []).length, (l.sources || []).map(s => `<a href="${esc(s.url)}">${esc(s.name)}</a>`).join("<br>") || "none needed"])).join("")}</table>
<p><strong>Review before release</strong> (tick when done):</p><ul><li>☐ Subject-matter review (facts, steps, safety)</li><li>☐ Plain-language and reading-level review</li><li>☐ Accessibility: videos have no sound, so all teaching is on screen and in the text; check contrast and text size on a phone</li><li>☐ Translations reviewed by a native speaker (Spanish, French, Arabic)</li><li>☐ Pilot with 3-5 learners from the audience; fix what confused them</li></ul>
<h2>4. Implementation</h2>
<p><strong>Delivery:</strong> self-paced on Koach Learn, on a phone or computer. A program or teacher can also run it with a group (notes below).</p>
<p><strong>Learners need:</strong></p>${li(c.implementation.materials)}
<p><strong>Notes for a teacher or program:</strong></p>${li(c.implementation.facilitatorNotes)}
<p><strong>Load order on Koach Learn:</strong></p><pre>${esc(loadOrder.join("\n"))}</pre>
<h2>5. Evaluation</h2>
<table>${rows(["Level", "What we measure", "How"], true)}
${rows(["1. Reaction", "Did learners find it clear and useful?", `Course survey: ${m.survey.rate.length} statements rated ${m.survey.scale[0]} to ${m.survey.scale[m.survey.scale.length - 1]}, and ${m.survey.open.length} open questions`])}
${rows(["2. Learning", "Did they learn it?", "Pre-test compared with the same questions in the final quiz; quick checks and chapter checks; quiz pass mark 80%"])}
${rows(["3. Behavior", "Can they do it, and do they use it?", `Final task scored with the rubric (${esc(c.rubric.mastery)}); 30-day follow-up: ${m.followUp.questions.length} questions`])}
${rows(["4. Results", "What changed for the learner or the program?", li(c.evaluation.results)])}</table>
<h3>Final task rubric</h3><p>${esc(c.finalTask)}</p>
<table>${rows(["Criterion", "Objective", L.notYet, L.meets, L.exceeds], true)}${c.rubric.criteria.map(k => rows([esc(k.name), k.objective, esc(k.notYet), esc(k.meets), esc(k.exceeds)])).join("")}</table>
<h3>Course survey</h3><ol>${[...m.survey.rate, ...m.survey.open].map(q => `<li>${esc(q)}</li>`).join("")}</ol>
<h3>${esc(m.followUp.title)}</h3><ol>${m.followUp.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ol>
</body></html>`;
}

const writtenFiles = () => fs.existsSync(COURSES_DIR)
  ? fs.readdirSync(COURSES_DIR, { recursive: true }).map(f => path.join(COURSES_DIR, f)).filter(f => f.endsWith(".js") && path.dirname(f) !== COURSES_DIR)
  : [];

if (require.main === module) {
  const args = process.argv.slice(2);
  const outAt = args.indexOf("--out");
  const outRoot = path.resolve(outAt >= 0 ? args[outAt + 1] : path.join(__dirname, "..", "output", "koachlearn"));
  const names = args.filter((a, i) => !a.startsWith("--") && (outAt < 0 || i !== outAt + 1) && args[i - 1] !== "--max-dollars" && args[i - 1] !== "--dump-narration");
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
  const targets = all ? writtenFiles() : names;
  // --narrate: speak every slide (needs the voice keys in .env.narration, see scripts/koachlearn-narration.js); --voice-test uses a test tone instead of a voice (for checking the timing only)
  (async () => {
    if (args.includes("--narrate") || args.includes("--voice-test") || args.includes("--estimate")) {
      const module_ = require("./koachlearn-narration.js");
      if (args.includes("--voice-test")) for (const k of Object.keys(module_.VOICES)) module_.VOICES[k] = { provider: "fake", voice: "test-tone", locale: k };
      narration = { lang: "en", module: module_, collect: [] };
      for (const name of targets) if (!COURSES[name]) exportWritten(path.resolve(name), outRoot);
      const planned = narration.collect.length;
      const dump = args.indexOf("--dump-narration"); if (dump >= 0) fs.writeFileSync(args[dump + 1], JSON.stringify(narration.collect));
      const cost = module_.plan(narration.collect);
      console.log(`to speak: ${cost.todo.length} slides, about US$${cost.dollars.toFixed(2)} (estimate; Azure rate is an assumption unless AZURE_PER_MILLION is set)`);
      for (const [l, p] of Object.entries(cost.perLang)) console.log(`  ${l}: ${p.slides} slides, ${p.characters} characters, about US$${p.dollars.toFixed(2)}`);
      if (args.includes("--estimate")) process.exit(0);
      const limit = args.indexOf("--max-dollars");
      const result = await module_.fillCache(narration.collect, { maxDollars: limit >= 0 ? Number(args[limit + 1]) : null, onProgress: (n, total) => { if (n % 25 === 0 || n === total) console.log(`spoken ${n} of ${total}`); } });
      console.log(`narration: ${planned} slides, ${result.spoken} newly spoken (${result.characters} characters), ${result.kept} already kept`);
      narration.collect = null;
    }
    for (const name of targets) {
      if (COURSES[name]) { const r = exportCourse(name, outRoot); console.log(`${name}: ${r.chapters} chapters, ${r.lessons} lessons -> ${r.dir}`); continue; }
      const r = exportWritten(path.resolve(name), outRoot);
      console.log(`${path.basename(name)}: ${r.lessons} lessons -> ${r.dir}`);
    }
  })().catch(error => { console.error(error.message); process.exit(1); });
}

module.exports = { COURSES, exportCourse, exportWritten, validateCourse, parityProblems, englishOf, loadCourse, wrap, lessonHtml };
