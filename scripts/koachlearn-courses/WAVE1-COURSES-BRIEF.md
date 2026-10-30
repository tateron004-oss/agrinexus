# Brief: wave 1 courses — job certifications and adult basic education (30 October 2026)

The owner wants Koach Learn to be "the standard for online education". Our catalog was thin on two things a leading platform has: **certification-prep courses that lead straight to a job**, and **adult basic education** (GED prep, everyday math, English as a second language). Wave 1 fills those with 25 courses. Each is listed in `catalog.js` (SHARED, plus the WAVE1 placements).

## Read first
1. `scripts/koachlearn-courses/README.md`: the shape, the writing rules and the **ADDIE** section. Every course here MUST have all the ADDIE parts.
2. `scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js`: the model for the ADDIE parts.
3. Courses that touch your topic, so you go deeper and don't repeat them: `shared/skilled-trades-careers.js`, `workforce/workforce-osha-safety.js`, `shared/excel-spreadsheets.js`, `shared/data-science-beginners.js`, `shared/intro-cybersecurity.js`, `shared/health-literacy.js`, `seniors/seniors-caregiving.js`, `shared/resume-linkedin-interviews.js`.

## Files and fields
- One file per course: `scripts/koachlearn-courses/shared/<id>.js`.
- `category: "Workforce Development"` for every wave 1 course (it is in all their categories). Use the `name` exactly as in catalog.js.
- Learners are mixed: job seekers, people coming home from prison, veterans, young adults, immigrants and adults returning to learning. Use everyday US examples (the certifications and agencies are US ones), plain words and short sentences. Every technical word goes in `words`.

## What each course must be
- **A real step toward the job or test.** Name the actual credential and who grants it (for example CompTIA, NHA, PTCB, state nurse aide registries, FMCSA, the GED Testing Service, NABCEP, the EPA Section 608 certification). Say plainly that the course **prepares** the learner; it does not grant the license or certificate. Tell them where to check current requirements, fees and testing (the official page, in `sources`). Don't state fees, hours or pass marks you cannot confirm on the official page.
- **The final task is a real product the learner makes for their own path**, for example a personal study and test plan with dates, a completed practice claim, a pre-trip inspection checklist, a load plan, a practice essay, a résumé section for the job, or a recorded self-introduction script.
- **Hands-on tryIts** that work at home with free tools or paper: practice problems, scenarios, checklists, role plays, free practice tests (link official ones in `sources`).

## Topic notes and safety
- **IT and data** (it-support-fundamentals, cybersecurity-analyst-entry, data-analytics-excel-sql, data-dashboards): follow the current CompTIA exam objectives at a beginner level (check comptia.org); free tools such as Google Sheets, a free SQL playground (for example SQLite Online or Google BigQuery sandbox, if you can confirm it), Power BI Desktop (free) and Looker Studio. Security: defensive skills only, practice only on your own devices and accounts.
- **Healthcare** (medical-billing-coding, pharmacy-technician-prep, nursing-assistant-cna-prep, home-health-aide, community-health-worker, phlebotomy-prep): requirements differ by state, so point to the state board or registry. Never give medication doses, drug dosing math with real patients, or clinical advice; practice math uses clearly made-up examples and says "practice only". Patient privacy (HIPAA) belongs in every course. Hands-on clinical skills (blood draws, patient transfers) are learned in an approved, supervised program: the course teaches the knowledge, steps and safety, and says so.
- **Trades and driving** (cdl-prep, forklift-operator, hvac-basics, electrical-basics, solar-installer-basics, ev-technician-basics, welding-basics, warehouse-logistics): safety first in every lesson. No live electrical work, no high-voltage EV work, no refrigerant handling and no welding without supervised training and the right protective equipment. Forklift: OSHA requires the employer to train and evaluate operators (29 CFR 1910.178); the course prepares them, it does not certify. CDL: the federal rules are FMCSA's, the test is the state's (check the state DMV manual); entry-level driver training (ELDT) applies. Licensing for electricians and HVAC is by state or city.
- **GED** (ged-math, ged-reasoning-language-arts, ged-science, ged-social-studies): match the four GED test subjects as described on ged.com (check it): what is tested, the kinds of questions, the calculator and formula sheet in math. Mention HiSET as another high school equivalency test where states use it. Teach the skills with many worked examples; tryIts are practice items with answers explained.
- **Everyday math**: fractions, percentages, budgeting, measurement, reading a paystub, unit prices, simple workplace math.
- **ESL** (esl-everyday-english, esl-workplace-english): beginner to low-intermediate English. Short sentences, very common words, many example dialogues. Lessons give phrases to say, how to ask someone to repeat or slow down, and practice by reading aloud or role play. The course will also be translated, so the teaching language around the English examples can change, but every English phrase being taught stays in English: keep them inside double quotes in the text so translators know not to translate them. Themes: everyday life (introductions, shopping, the doctor, phone calls, school, asking for directions) and workplace (job interview, safety words, asking for help, schedules, talking to customers).

## Rules
- Run `node scripts/koachlearn-export.js --check scripts/koachlearn-courses/shared/<id>.js` until it passes. It enforces the ADDIE parts. Do NOT build videos.
- Spread right answers across A to D, and across the quick checks too.
- Objectives: 4 to 6 per course. Each `action` starts with an observable verb and makes sense alone, because the intro video shows it.
- Confirm facts that can change with WebFetch on official pages and list them in `sources`. If a site blocks you, do not work around the block; say where to check instead.
- Touch ONLY your own course files. Do not edit catalog.js, the README, the builder, this brief or other courses. Run no git commands, and do not start your own helper agents.
- Finish with a short report: the files written, that each passes `--check`, facts you could not confirm, and anything a reviewer should look at.
