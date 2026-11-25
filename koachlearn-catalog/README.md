# Koach Learn course catalogue (language-first)

A small web page that lists every Koach Learn course by language. It does not change koachlearn.com (SanshTech's code is not available); it reads the site's public, read-only course list and presents it so a learner:

- picks a language once (all 10: English, Español, Français, العربية, Kiswahili, Hausa, አማርኛ, Yorùbá, Igbo, Português) and the whole page switches: menus, topic names, and the courses themselves;
- browses one topic at a time, 24 cards per page (a course that sits in several topics shows once under "All topics");
- searches in any script (no need for accents, tone marks, Hausa hooked letters or Arabic hamza/vowel marks);
- jumps between translations of the same course ("Also in: …");
- goes to Koach Learn's sign-in to start the course.

Arabic pages read right to left. Languages not uploaded yet show "Coming soon" and fill in automatically as courses are uploaded.

## Files

- `site/` — the page (`index.html`, `app.js`, `style.css`, `i18n.js` page words in 10 languages) and `site/data/` (one JSON file per language, built).
- `build/build-data.js` — fetches https://www.dashboard.koachlearn.com/api/categories and writes `site/data/`.
- `build/lang-map.json` — which uploaded course is in which language and which courses are translations of each other. Made by `build/make-lang-map.js --plans <folder of review plans>` (keyed by the site's own course id, so a renamed course keeps its language), or from the upload bundles without `--plans`; rerun it after new courses are uploaded.
- Kyro reads this catalogue's `site/data/` files to find courses in the person's language (`nexus/knowledge/koachlearn-courses.js` in the AgriNexus repository), so a fix here reaches Kyro within the hour.
- `build/serve.js` — local preview on http://localhost:4318.
- `.github/workflows/publish.yml` — refreshes the data every hour and publishes on GitHub Pages.

## Still to review

The page words and the 13 topic names were translated without a native speaker; review them along with the course translations.
