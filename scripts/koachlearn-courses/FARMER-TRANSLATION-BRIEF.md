# Brief: translating the farmer courses (29 October 2026)

Each English course becomes 3 translations: Spanish (`es`), French (`fr`) and Arabic (`ar`). The file for each is `scripts/koachlearn-courses/i18n/<lang>/agriculture-africa/<id>-<lang>.js`.

## Read first
1. `scripts/koachlearn-courses/README.md`: the "ADDIE" and "Translations" sections. Follow them exactly, including the ADDIE bullet in Translations.
2. Your models:
   - For a translated course with all the ADDIE parts: `scripts/koachlearn-courses/i18n/es/re-entry/reentry-ai-digital-confidence-es.js`, and the matching `fr` and `ar` files.
   - For farming terms: `scripts/koachlearn-courses/i18n/{es,fr,ar}/agriculture-africa/agri-climate-smart-*.js`.

## Rules
- Translate everything a learner or reviewer reads, ADDIE parts included. Keep every `id`, `objective` tag, lesson `objectives` list, `pretest.from`, `answer` index, URL, number and unit exactly as in the English.
- **Objectives:** the `action` must follow "podrás", "vous saurez" or "ستتمكن من" in the objective sentence. Use an infinitive in Spanish and French, and a verbal noun (مصدر) in Arabic. It must also make sense alone, because it appears by itself on the intro video.
- **Check and quiz titles:**
  - Spanish: "Comprobación de conocimientos N: ..." and "Examen final: ...".
  - French: "Contrôle des connaissances N : ..." and "Quiz final : ...", with a space before `: ? !`.
  - Arabic: "اختبار المعرفة N: ..." and "الاختبار النهائي: ...".
- **French:**
  - Readers are mostly farmers in francophone Africa, so use plain words they know and no France-only slang.
  - Write thousands with a space (30 000), because "30,000" reads as 30 in French.
- **Arabic:**
  - Use Modern Standard Arabic and Western digits.
  - Give no left or right screen directions.
- **Names:** keep organization, programme and product names as written (FAO, ILRI, IITA, KALRO, PCPB, NAFDAC, WOAH, GLOBALG.A.P., Sentinel-2), with a short explanation the first time.
- **Safety and money:** never add doses, prices or facts that are not in the English.

## Checking
- Run `node scripts/koachlearn-export.js --check <file>` on each translation until it passes. It compares structure, answers and ADDIE tags with the English.
- Do NOT build videos.
- Touch only your own translation files. Run no git commands, and do not start helper agents.
- Finish with a short report: the files written, that all pass `--check`, and the wording a native speaker should review.
