# Brief: wave 3 courses — the rest of workforce development, for youth and adults, in the US and abroad (30 October 2026)

The owner asked whether Koach Learn has "all of the courses we need for workforce development for youth and adults here and abroad". These 28 courses fill the gaps: big hiring sectors (early childhood, construction, manufacturing, hospitality, retail, restaurants, security), first-job and job-program skills for young people, credentials adults pay for elsewhere, and courses for job seekers outside the US. They are listed in `catalog.js` (SHARED, plus the WAVE3 placements).

## Read first
1. `scripts/koachlearn-courses/README.md`: the shape, the writing rules and the **ADDIE** section. Every course here MUST have all the ADDIE parts.
2. `scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js`: the model for the ADDIE parts.
3. `scripts/koachlearn-courses/WAVE1-COURSES-BRIEF.md`: the rules for certification-prep courses (they apply here too).
4. Existing courses near your topic, so you go deeper and don't repeat them, for example: `shared/skilled-trades-careers.js`, `workforce/workforce-osha-safety.js`, `workforce/workforce-food-handler.js`, `shared/resume-linkedin-interviews.js`, `shared/customer-service-excellence.js`, `shared/bookkeeping-basics.js`, `shared/agile-project-management.js`, `shared/ai-customer-service-careers.js`, `africa-life/afr-online-freelancing.js`.

## Files and fields
- One file per course: `scripts/koachlearn-courses/shared/<id>.js`, `category: "Workforce Development"`, `name` exactly as in catalog.js.

## What each course must be
- A real step toward a job, a credential or a safer path. Name the real credential and who grants it where there is one (for example the CDA Council, NCCER, ASQ or IASSC for Six Sigma, PMI for CAPM, the state real-estate and insurance regulators, the state guard-card agency, the American Red Cross and American Heart Association for CPR, Intuit for QuickBooks certification, USAJOBS / OPM, apprenticeship.gov). Say plainly the course PREPARES the learner and does not grant the license. Check current requirements on the official page (in `sources`); don't state fees, hours or pass marks you cannot confirm.
- The final task is a real product the learner makes for their own path (a training-and-test plan with dates, a practice application, a lesson plan for a toddler activity, a cut list, a shift checklist, a design portfolio piece, a CV, a migration checklist).
- Hands-on tryIts that work at home with free tools or paper.

## Topic notes and safety
- **Hands-on and safety-critical skills** (CPR and first aid, carpentry, plumbing, CNC, manufacturing, construction): teach knowledge, steps and safety; say the hands-on part is learned and certified in person with a qualified instructor. First aid: follow American Red Cross / AHA guidance at a general level, always "call 911 (or your local emergency number) first"; no medicine doses.
- **Early childhood and teacher's aide**: child safety and mandated reporting, licensing by state, the CDA from the Council for Professional Recognition, the ParaPro or state paraprofessional requirement (check ets.org and the state).
- **Youth first job**: US child labor rules (dol.gov/youthrules), work permits vary by state, reading a paystub, workplace rights and safety for teens.
- **Real estate and insurance license prep**: licensing is by state; teach the core concepts and how to find the state's exam outline; no investment advice.
- **Typing**: free practice sites only if you can confirm they are free; otherwise teach technique and drills on paper and any text editor.
- **QuickBooks, Canva, video editing**: free or trial versions; don't invent menu names you are not sure of.
- **Abroad courses** (`international-cv-writing`, `call-center-bpo-careers`, `data-annotation-online-work`, `tvet-choosing-a-program`, `safe-labor-migration`): global examples — Kenya, Nigeria, Ghana, the Philippines, India, Mexico, Colombia, Morocco, Egypt, plus at least one francophone African example — because these are translated into ten languages. Teach scam and fake-recruiter warning signs (never pay to get a job, keep your own passport and documents). Migration: legal routes only, the ILO and IOM guidance on fair recruitment, how to check a recruitment agency is licensed, embassy and hotline help, and the signs of trafficking (cite ILO, IOM or UNODC). No legal advice on visas: point to official government and embassy pages.
- **Data annotation / micro-jobs**: real platforms only if you confirm them; explain pay is uneven, never pay a fee to start, and protect personal data.

## Rules
- Run `node scripts/koachlearn-export.js --check scripts/koachlearn-courses/shared/<id>.js` until it passes. Do NOT build videos.
- Spread right answers across A to D, and across the quick checks too. Objectives: 4 to 6, each `action` an observable verb that makes sense alone.
- Confirm facts that can change with WebFetch on official pages; if a site blocks you, do not work around it — say where to check.
- Touch ONLY your own course file. Do not edit catalog.js, the README, the builder, this brief or other courses. No git, no helper agents.
- Finish with a short report: the file, that it passes `--check`, facts you could not confirm, and what a reviewer should look at.
