# Koach Learn courses

Skill-building courses for Koach Learn (koachlearn.com), the owner's learning site. The owner's brief (27 October 2026):

> this is a skill building educational site so each course needs to respond like a lesson that at the end the students will be able to perform that skill being taught and can have knowledge checks and quizzes, and that will be reinforced with text, videos, and slides.
> each course has to have two knowledge checks ... to assist with retention and a 20 question quiz at the end of each course

- `catalog.js` lists every course (id, name, folder, which categories it goes in). `node scripts/koachlearn-courses/catalog.js` shows which are written.
- One course = one file: `scripts/koachlearn-courses/<folder>/<id>.js`, exporting one object.
- The model to copy: `re-entry/reentry-ai-digital-confidence.js`.
- Check a course: `node scripts/koachlearn-export.js --check scripts/koachlearn-courses/<folder>/<id>.js` (fast, no video).
- Build the videos, slides and preview page: `node scripts/koachlearn-export.js scripts/koachlearn-courses/<folder>/<id>.js` -> `output/koachlearn/<category>/<id>/` (about a minute per course).

## Shape (the checker enforces the counts)

```
{
  id, category,            // id from catalog.js; category: the first category catalog.js gives it
  name, skills,            // skills: 4-6 short skills, comma-separated
  outcome,                 // finishes "By the end you will be able to ..." : one concrete, doable skill
  about: [2-4 paragraphs], // who it is for, what they will do, how the course works
  finalTask,               // the hands-on task that proves the skill (the last lesson's tryIt builds to it)
  chapters: [ 2 chapters, each:
    { name: "Chapter 1: ...", lessons: [ 3 lessons ], check: { title: "Knowledge Check 1: ...", questions: [ 5 ] } } ],
  quiz: { title: "Final Quiz: <course name>", questions: [ 20 ] }
}
lesson:   { title, minutes (3-6), goal (one doable thing), text: [2-4 short paragraphs], steps: [how-to steps] (when it teaches a procedure),
            words: [[term, plain meaning]], slides: [3-5 { title (<= 60 chars), bullets: [1-4, each <= 110 chars] }],
            sources: [{ name, url }] (required for facts that can change: laws, fees, forms, agencies, regulations),
            tryIt (a hands-on practice the student does now), youCanNow (finishes "You can now ...") }
question: { q, options: [4], answer: 0-3, why (one sentence: why the right answer is right) }
```

## Writing rules

1. **Teach a skill, not a topic.** Every lesson has a goal the student can DO and a `tryIt` that makes them do it. The six lessons build to `finalTask`.
2. **Plain words, short sentences.** Many students are beginners, seniors, people coming home from prison, young people, or second-language speakers. Explain every technical word in `words`. Advanced courses (Python, machine learning, agents, drones) can go deeper but still define terms.
3. **Micro-learning.** 3-6 minutes per lesson. Slides repeat the lesson's key points; they don't add new material.
4. **Free tools first.** Use real, current tools (e.g. ChatGPT, Microsoft Copilot, Google Gemini, Canva, Google Docs, Microsoft 365, Python and Google Colab). Don't invent features, prices or menu names you are not sure of; describe the action instead ("open the menu and choose Share").
5. **Facts that change need a source.** Fees, laws, forms, agency names, licensing and drone rules: check the official page (WebFetch) and put it in the lesson's `sources`. If you cannot confirm a number, say where to find it instead of giving it. California business and nonprofit costs: use sos.ca.gov, ftb.ca.gov, oag.ca.gov, irs.gov. Drones in Africa: name the national civil aviation authority (e.g. KCAA in Kenya, NCAA in Nigeria) and tell students to check its current rules.
6. **Safety.** Never ask students to type private numbers, passwords or bank details into AI tools. Money, health and legal lessons say to check with an official source or a professional. No investment advice (crypto courses explain how it works and its risks; they don't recommend buying).
7. **Questions test the skill.** Mix "what is" with "what would you do" questions. One clearly right answer, plausible wrong ones, no "all of the above". Spread the right answers across A-D. The quiz covers all six lessons (about 3 per lesson) and may reuse a knowledge-check idea in new words.
8. **Fit the category.** A course listed for a category uses that audience's examples (athletes: training, NIL, sponsors; nonprofits: donors, volunteers, grants; seniors: family, doctors, grandchildren). Shared courses use mixed, everyday examples.
9. Plain ASCII quotes inside strings must be escaped (`\"`). Every file must pass `--check`.

## ADDIE (owner, 28 October 2026)

> the courses should be utlizing the addie methodolgy. that is the standard for training ... quizzes as needed to support learning

The model is the pilot, `re-entry/reentry-ai-digital-confidence.js`. Once a course has `objectives`, `--check` requires all of the following:

- **Analysis** `analysis: { learners, startingPoint, gap, constraints: [..], prerequisites }`: who the learners are, what they can already do, the gap and why it matters, and the limits (reading level, devices, time, rules).
- **Design** `objectives: [{ id: "O1", condition, action, standard }]`, 3 to 6 of them. They read as one sentence: "*condition*, you will *action*, *standard*." The action starts with a verb you can see someone do (identify, open, write, ask, check, list, explain), never understand, know or learn. It must also make sense on its own, because the intro video shows the actions alone.
- **Lessons:** every lesson has `objectives: ["O2"]` and a `quickCheck` of exactly 2 questions taken right after it. The lesson's `goal` also starts with an observable verb.
- **Questions:** every quick-check, knowledge-check and quiz question has `objective`. Each objective is taught by at least one lesson and tested by at least 3 check and quiz questions.
- **Pre-test** `pretest: { title, from: [quiz question numbers, counting from 0] }`: 6 to 10 quiz questions covering every objective. Learners take it before Lesson 1, and the quiz then shows how much they gained.
- **Rubric** for the final task: `rubric: { mastery, criteria: [{ name, objective, notYet, meets, exceeds }] }`, with 3 to 6 rows.
- **Evaluation** `evaluation: { results: [..] }`: what to track for Kirkpatrick level 4. The builder adds the same reaction survey (level 1) and 30-day follow-up (level 3) to every course.
- **Implementation** `implementation: { materials: [..], facilitatorNotes: [..] }`: what a learner needs, and notes for a teacher or program running the course with a group.

The builder writes `design-document.html` (the ADDIE design document), `pretest.json`, `NN-quick-check.json` after each lesson, and `survey.json`. The design document lists the order to load everything on Koach Learn.

## Translations (Spanish, French, Arabic)

Koach Learn keeps one language per course, so each translation is its own course (owner, 27 October 2026: "the site translates to spanish, french, arabic and english. i need to courses and the videos to be able to do the same").

- File: `i18n/<lang>/<folder>/<id>-<lang>.js`, where `<folder>/<id>.js` is the English course. Languages: `es`, `fr`, `ar`.
- Add `lang: "<lang>"` and `translationOf: "<english id>"`; set `id` to `<english id>-<lang>`. Keep `category` in English exactly (the dashboard's category names are English).
- Translate every other string: name, skills, outcome, about, finalTask, chapter names, lesson fields, slides, words, knowledge checks, quiz.
- Keep the structure identical: the same number of chapters, lessons, slides, steps and sources, and the SAME `answer` index on every question (translate the options in the same order). `--check` compares each translation with its English course and fails on any difference.
- The builder adds fixed words itself. `outcome` must finish the sentence "Al final podrás ..." / "À la fin, vous saurez ..." / "في النهاية ستتمكن من ..."; `youCanNow` must finish "Ahora puedes ..." / "Vous savez maintenant ..." / "يمكنك الآن ...". Chapter names and check/quiz titles are written out in full in the target language (e.g. "Capítulo 1: ...", "Comprobación de conocimientos 1: ...", "Examen final: ...").
- Keep as they are: URLs, product and tool names (ChatGPT, Microsoft 365, Python), code, and US agency names (IRS, FTC, SBA), with a short explanation in the target language the first time. Source `name`s may be translated; `url`s never change.
- Spanish: clear, neutral Latin American Spanish, using "tú". French: clear international French, using "vous", understandable in Africa as well as France. Arabic: simple Modern Standard Arabic. Use Western digits (0-9) in all three.
- Slides: titles at most 72 characters, bullets at most 135.
- ADDIE parts, when the English course has them: translate `analysis`, objectives (`condition`, `action`, `standard`), quick checks, `pretest.title`, the rubric (`mastery` and every cell), `evaluation.results` and `implementation`. Keep every `id`, `objective` tag, lesson `objectives` list, `pretest.from` and every `answer` exactly as in the English; `--check` compares them. The objective is shown as one sentence: "*condition*, podrás *action*, *standard*." / "*condition*, vous saurez *action*, *standard*." / "*condition*، ستتمكن من *action*، *standard*." So write `action` to follow those words: an infinitive in Spanish and French, a verbal noun (مصدر) in Arabic. Each `action` must also make sense alone, because it appears by itself on the intro video.
- Write naturally, as a teacher who speaks the language would; don't translate word for word. Keep sentences short and plain, as in the English.
