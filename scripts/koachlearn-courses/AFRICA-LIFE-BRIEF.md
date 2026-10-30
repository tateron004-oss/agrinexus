# Brief: Africa — Life and Work courses (30 October 2026)

The owner asked: "are there any more courses africans can use to support there lives". Our Africa offer was farming (the Agriculture (Africa) category). These 15 courses cover everyday money, income, trades and family health. They go in a new category, `Africa: Life and Work`, folder `scripts/koachlearn-courses/africa-life/` (listed in catalog.js).

## Read first
1. `scripts/koachlearn-courses/README.md`: the shape, the writing rules and the **ADDIE** section. Every course here MUST have all the ADDIE parts.
2. `scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js`: the model for the ADDIE parts.
3. A farmer course for the African voice and examples, for example `agriculture-africa/agri-cooperatives-markets.js`, `agriculture-africa/agri-farm-finance.js` and `agriculture-africa/agri-value-addition-marketing.js`. Don't repeat their lessons.

## Files and fields
- One file per course: `scripts/koachlearn-courses/africa-life/<id>.js`, `category: "Africa: Life and Work"`, `name` exactly as in catalog.js.

## Audience and style
- **Learners:** adults and young people across Africa, in towns and villages: traders, artisans, mothers and fathers, job seekers, small business owners. Many use a basic Android phone with costly data. Plain words, short sentences.
- **Examples:** Kenya, Nigeria and Ghana, plus at least one francophone West or Central African example (Senegal, Côte d'Ivoire, Cameroon, Burkina Faso, Mali or DR Congo) and, where it fits, one North African example (Morocco, Egypt or Tunisia), because the course is translated into French and Arabic.
- **Money:** local currency examples (KES, NGN, GHS, XOF, XAF, MAD, EGP) and say figures are examples. Don't invent fees, tariffs, interest rates or prices.

## Facts and safety
- Confirm facts that can change with WebFetch on official sources: central banks and regulators (Central Bank of Kenya, Central Bank of Nigeria, Bank of Ghana, BCEAO), business registries (Kenya's Business Registration Service through eCitizen, Nigeria's Corporate Affairs Commission, Ghana's Office of the Registrar of Companies, Senegal's APIX), the AfCFTA Secretariat (au-afcfta.org), WHO, UNICEF, national ministries of health, and Clean Cooking Alliance / IEA for cooking. List them in `sources`. If a site blocks you, do not work around the block; say where to check instead.
- **Money courses:** explain how products work and their risks; no investment advice. Teach scam warning signs (fake reversal requests, PIN requests, "wrong number" sends, fake job offers that ask for a fee). Never ask learners to share a PIN or password, and say that a real provider never asks for the PIN.
- **Health courses** (water and hygiene, malaria, mother and child, nutrition, clean cooking): teach prevention, healthy habits and the warning signs that mean "go to the clinic now". Never give medicine doses, treatment plans or diagnosis. Point to the local clinic, community health worker or ministry of health, and follow WHO/UNICEF guidance (cite it).
- **Trades** (phone repair, solar home systems, tailoring): safety first (batteries, heat, electricity, tools). Solar: small home systems only, no work on the grid. Phone repair: lithium battery dangers and customer data privacy.

## Rules
- Run `node scripts/koachlearn-export.js --check scripts/koachlearn-courses/africa-life/<id>.js` until it passes. It enforces the ADDIE parts. Do NOT build videos.
- Spread right answers across A to D, and across the quick checks too.
- Objectives: 4 to 6 per course. Each `action` starts with an observable verb and makes sense alone, because the intro video shows it.
- The rubric scores the course's `finalTask`, a real product the learner makes for their own life or business (a monthly savings plan, a price list, a product listing, a registration checklist, a household malaria plan, a weekly meal plan).
- Touch ONLY your own course files. Do not edit catalog.js, the README, the builder, this brief or other courses. Run no git commands, and do not start your own helper agents.
- Finish with a short report: the files written, that each passes `--check`, facts you could not confirm, and anything a reviewer should look at.
