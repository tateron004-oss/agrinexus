"use strict";

// The upload plan for one built course: everything the Koach Learn dashboard needs, in the order its forms take it (koachlearn-uploader.js fills them in).
// Koach Learn allows one knowledge check per chapter, so the course becomes: Start Here (pre-test), one chapter per lesson (video + quick check),
// a review chapter after each part (its knowledge check), then the course quiz.
//   node scripts/koachlearn-upload-plan.js <output/koachlearn/<category>/<id>>   -> writes upload-plan.json in that folder

const fs = require("fs");
const path = require("path");

const WORDS = {
  en: { start: "Start Here: Pre-Test", review: n => `Chapter ${n} Review` },
  es: { start: "Empieza aquí: prueba inicial", review: n => `Repaso del capítulo ${n}` },
  fr: { start: "Pour commencer : test de départ", review: n => `Révision du chapitre ${n}` },
  ar: { start: "ابدأ هنا: الاختبار القبلي", review: n => `مراجعة الفصل ${n}` }
};

const strip = s => s.replace(/^[^:：]*[:：]\s*/, ""); // "Chapter 1: Getting started" -> "Getting started"
const q = x => ({ q: x.q, options: x.options, answer: x.answer });

function plan(dir) {
  const m = JSON.parse(fs.readFileSync(path.join(dir, "course.json"), "utf8"));
  const W = WORDS[m.lang || "en"];
  const rtl = m.lang === "ar";
  const wrap = html => (rtl ? `<div dir="rtl">${html}</div>` : html);
  const chapters = [{ name: W.start, check: { title: m.pretest.title, questions: m.pretest.questions.map(q) } }];
  m.chapters.forEach((ch, ci) => {
    ch.lessons.forEach(l => {
      chapters.push({
        name: l.title,
        video: { title: l.title, html: l.descriptionHtml, file: path.basename(l.video) },
        check: { title: l.quickCheck.title, questions: l.quickCheck.questions.map(q) }
      });
    });
    chapters.push({ name: `${W.review(ci + 1)}: ${strip(ch.name)}`, check: { title: ch.check.title, questions: ch.check.questions.map(q) } });
  });
  const p = {
    id: m.id, lang: m.lang || "en", category: m.category, name: m.name, skills: m.skills,
    picture: "picture.png", introVideo: "intro.mp4", descriptionHtml: wrap(m.descriptionHtml.replace(/^<div dir="rtl">\n?|\n?<\/div>$/g, "")),
    chapters, quiz: { title: m.quiz.title, questions: m.quiz.questions.map(q) }
  };
  p.files = [p.picture, p.introVideo, ...chapters.filter(c => c.video).map(c => c.video.file)];
  p.questionCount = chapters.reduce((s, c) => s + c.check.questions.length, 0) + p.quiz.questions.length;
  return p;
}

if (require.main === module) {
  const dir = path.resolve(process.argv[2] || "");
  const p = plan(dir);
  fs.writeFileSync(path.join(dir, "upload-plan.json"), JSON.stringify(p));
  console.log(`${p.id}: ${p.chapters.length} chapters, ${p.files.length} files, ${p.questionCount} questions -> ${path.join(dir, "upload-plan.json")}`);
}

module.exports = { plan };
