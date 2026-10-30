# Brief: translating the wave 1 and Africa courses (30 October 2026)

Each English course becomes 3 translations: Spanish (`es`), French (`fr`) and Arabic (`ar`). The file for each is `scripts/koachlearn-courses/i18n/<lang>/<folder>/<id>-<lang>.js`, where `<folder>/<id>.js` is the English course (`shared/` for wave 1, `africa-life/` for the Africa courses).

## Read first
1. `scripts/koachlearn-courses/README.md`: the "ADDIE" and "Translations" sections. Follow them exactly, including the ADDIE bullet in Translations.
2. Your models for a translated course with all the ADDIE parts: `scripts/koachlearn-courses/i18n/es/re-entry/reentry-ai-digital-confidence-es.js` and the matching `fr` and `ar` files. For African wording, also see `scripts/koachlearn-courses/i18n/{fr,ar}/agriculture-africa/agri-climate-smart-*.js`.

## Rules
- Translate everything a learner or reviewer reads, ADDIE parts included. Keep every `id`, `objective` tag, lesson `objectives` list, `pretest.from`, `answer` index, URL, number and unit exactly as in the English.
- **Objectives:** the `action` must follow "podrás", "vous saurez" or "ستتمكن من" in the objective sentence. Use an infinitive in Spanish and French, and a verbal noun (مصدر) in Arabic. It must also make sense alone, because it appears by itself on the intro video.
- **Check and quiz titles:**
  - Spanish: "Comprobación de conocimientos N: ..." and "Examen final: ...".
  - French: "Contrôle des connaissances N : ..." and "Quiz final : ...", with a space before `: ? !`.
  - Arabic: "اختبار المعرفة N: ..." and "الاختبار النهائي: ...".
- **French:** clear international French, using "vous", plain words understood in Africa as well as France. Write thousands with a space (30 000).
- **Arabic:** Modern Standard Arabic, Western digits, no left or right screen directions.
- **Names:** keep organization, agency, exam and product names as written (CompTIA, NHA, PTCB, FMCSA, OSHA, GED, HiSET, NABCEP, ASE, M-Pesa, MTN MoMo, Orange Money, Wave, AfCFTA, WHO, UNICEF), with a short explanation the first time.
- **ESL courses** (`esl-everyday-english`, `esl-workplace-english`): every English phrase being taught is inside double quotes (in the text, slides, `words` and questions). Keep those quoted phrases in ENGLISH, exactly as written; translate only the explanations around them. That is the point of the course: the learner reads instructions in their own language and learns the English phrases.
- **GED and US-specific courses:** the content stays about the US tests and rules (they are what the learner will sit). Translate the explanations; keep US names.
- **Safety and money:** never add doses, prices, fees or facts that are not in the English.

## Checking
- Run `node scripts/koachlearn-export.js --check <file>` on each translation until it passes. It compares structure, answers and ADDIE tags with the English.
- Do NOT build videos.
- Touch only your own translation files. Run no git commands, and do not start helper agents.
- Finish with a short report: the files written, that all pass `--check`, and the wording a native speaker should review.
