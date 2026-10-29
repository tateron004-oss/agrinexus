# Brief: adding the ADDIE parts to existing courses (29 October 2026)

The owner asked for every course to use ADDIE: "the courses should be utlizing the addie methodolgy. that is the standard for training", with "quizzes as needed to support learning". The course content stays as it is. You add the ADDIE parts with a tool that inserts them and saves only if the course passes the checker.

## Read first
1. `scripts/koachlearn-courses/README.md`: the "ADDIE" section, and for translations the "Translations" section.
2. A finished course as your model: `scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js`, and the farmer courses in `scripts/koachlearn-courses/agriculture-africa/agri-farm-*.js`. Their `analysis`, `objectives`, lesson `objectives` and `quickCheck`, `objective` tags, `pretest`, `rubric`, `evaluation` and `implementation` show what good looks like.

## For each course on your list
1. Run `node scripts/koachlearn-addie.js summary <course file>`. It shows the lessons, goals, practice tasks and every question with its right answer. For a translation it also shows the English ADDIE parts.
2. Write the patch as JSON to `output/koachlearn/.addie-patches/<course id>.json` (make the folder if needed). The shape is below.
3. Run `node scripts/koachlearn-addie.js apply <course file> output/koachlearn/.addie-patches/<course id>.json`.
4. If it prints "NOT changed", fix the patch and apply again until it says the course passes. **Never edit a course file by hand.**

## English patch
```
{
  "analysis": { "learners", "startingPoint", "gap", "constraints": [..], "prerequisites" },
  "objectives": [ { "id": "O1", "condition", "action", "standard" }, ... ],
  "lessons": [ six entries, one per lesson in order:
    { "objectives": ["O1"], "quickCheck": [ { "q", "options": [4], "answer": 0-3, "why" }, { ... } ], "goal": "only if rewritten" } ],
  "checkTags": [ [5 objective ids for check 1], [5 for check 2] ],
  "quizTags": [ 20 objective ids, one per quiz question in order ],
  "pretest": { "title": "Pre-Test: What Do You Already Know?", "from": [6 to 10 quiz question numbers, counting from 0] },
  "rubric": { "mastery", "criteria": [ { "name", "objective", "notYet", "meets", "exceeds" }, ... ] },
  "evaluation": { "results": [..] },
  "implementation": { "materials": [..], "facilitatorNotes": [..] }
}
```
- **analysis:**
  - `learners`: who takes this course; the category's audience is in the summary.
  - `startingPoint`: what they can already do.
  - `gap`: the skill gap and why it matters to them.
  - `constraints`: 3 to 5 limits, such as reading level, devices, time, rules and privacy.
  - `prerequisites`: a course to take first, or "None".
- **objectives:**
  - 4 to 6 objectives, together covering the course's `outcome` and `finalTask`. Each one reads as "*condition*, you will *action*, *standard*."
  - `action` starts with a verb you can see someone do (identify, list, open, write, explain, calculate, compare, check, create, choose, plan, describe, demonstrate), never understand, know, learn or be aware.
  - `action` must also make sense alone, because the intro video shows it on its own. Write "identify which tasks an AI assistant can help with", not "sort which ones".
  - `standard` says what counts as success, such as "without help", "getting at least 4 of 5 right" or "with every required part".
- **lessons:**
  - Each lesson teaches one or more objectives. Every objective must be taught by at least one lesson.
  - The 2 `quickCheck` questions are NEW questions about that lesson, not copies of the existing check or quiz questions. Use one "what is" and one "what would you do". Each has one clearly right answer, plausible wrong ones, a one-sentence `why`, and no "all of the above". Spread the right answers across A to D over the course.
- **goal:** rewrite a lesson's goal only if it starts with a vague verb (understand, know, learn, appreciate, be aware, be familiar, grasp, realize, believe, feel, think about, gain, have). The new goal starts with a verb you can see someone do and keeps the lesson's meaning.
- **checkTags and quizTags:** tag each existing question with the objective it tests. Every objective must be tested by at least 3 check and quiz questions. If an objective falls short, change the objectives, not the questions.
- **pretest.from:** pick 6 to 10 quiz questions that cover every objective.
- **rubric:** 3 to 6 rows that score the course's `finalTask`. Each row has an objective and three short levels: Not yet, Meets and Exceeds. `mastery` is usually "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again."
- **evaluation.results:** 2 to 4 real-world results the owner or a partner can track for this audience, such as jobs, a business started, scams avoided, harvest or income, or the next course taken.
- **implementation.materials:** what a learner needs, such as a device, a free tool or paper. Use about 60 minutes in total unless the course is longer.
- **implementation.facilitatorNotes:** 3 to 5 practical notes for a teacher or program running it with a group, including safety notes where they fit.
- **Facts:** add no new facts that need a source, such as prices, laws or doses. Quick-check questions test only what the lesson teaches.

## Translation patch
Only the words go in the patch. The tool copies the ids, tags, answers, `pretest.from` and rubric objectives from the English course. Translate the English ADDIE parts shown by `summary`:
```
{
  "analysis": {..}, "evaluation": {..}, "implementation": {..},
  "objectives": [ { "condition", "action", "standard" }, ... same order as the English ],
  "lessons": [ six entries: { "quickCheck": [ { "q", "options": [4 in the SAME order as the English], "why" }, { ... } ], "goal": "only when the summary shows goalChangedTo" } ],
  "pretest": { "title" },
  "rubric": { "mastery", "criteria": [ { "name", "notYet", "meets", "exceeds" }, ... same order ] }
}
```
- **Objective `action`:** it follows "podrás", "vous saurez" or "ستتمكن من". Write an infinitive in Spanish and French, and a verbal noun (مصدر) in Arabic. It must make sense alone.
- **goalChangedTo:** when a lesson shows it, translate that new goal into the lesson's `goal`.
- **Pre-test title:** "Prueba inicial: ¿qué sabes ya?", "Test de départ : que savez-vous déjà ?" or "الاختبار القبلي: ماذا تعرف مسبقًا؟".
- **Rubric levels:** the builder labels these itself. When `mastery` names a level, use the builder's exact label:
  - Spanish: "Todavía no", "Cumple", "Supera"
  - French: « Pas encore », « Atteint », « Dépasse »
  - Arabic: «ليس بعد»، «يحقق»، «يتجاوز»
- **Language rules:**
  - Spanish: neutral Latin American Spanish, using "tú".
  - French: plain French for Africa and France, using "vous", with a space before `: ? !`, no France-only slang, and thousands written with a space.
  - Arabic: Modern Standard Arabic, Western digits, and no left or right screen directions.
- **Keep unchanged:** names of tools, agencies and programmes, and every number.

## Rules
- Touch ONLY the courses on your list and their patch files. Do not edit catalog.js, the README, the builder, the tool, this brief or other courses.
- Run no git commands, do not build videos, and do not start helper agents.
- Finish with a short report: how many of your courses now pass, any that you could not convert and why, and anything a reviewer should look at.
