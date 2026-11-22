# Brief: farmer courses for Africa (29 October 2026)

The owner asked: "can you add learning for farmers in africa that include these classes and beyond". The list covered:
- agribusiness and financial management: farm accounting and investment, risk management and hedging, supply chain and agri-marketing;
- climate-smart and sustainable farming: climate-resilient agribusiness, agroecology and soil regeneration, water and irrigation;
- advanced crop and livestock production: modern crop husbandry, animal science and biosecurity including artificial insemination, African Swine Fever and avian flu, and livestock nutrition with local feeds;
- agri-tech: data-driven farm management and precision agriculture;
- extension and community: mobilizing communities, cooperatives, pooling machinery, bargaining for inputs, and training farmers to become Farmer Business Advisors who teach their neighbours.

## Read first
1. `scripts/koachlearn-courses/README.md`: the shape, the writing rules and the **ADDIE** section. Every course here MUST have all the ADDIE parts.
2. `scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js`: the model for the ADDIE parts (analysis, objectives, lesson `objectives` and `quickCheck`, `objective` on every question, pretest, rubric, evaluation, implementation).
3. The existing agriculture courses in `scripts/koachlearn-courses/agriculture-africa/` that touch your topics. Go deeper than they do and don't repeat their lessons. Already covered:
   - soil health and fertility;
   - irrigation and water, including rainwater harvesting, solar drip and pumps;
   - climate-smart basics (forecasts, climate-risk calendar);
   - farm records and gross margin, cooperatives and selling together, post-harvest storage and aflatoxin;
   - livestock health basics (signs of illness, Newcastle disease), crop and horticulture basics, farm data on a phone;
   - 10 drone courses.

## Audience and style
- **Learners:** smallholder and growing commercial farmers, farm workers, young agripreneurs and extension workers across Africa. Use examples from Kenya, Nigeria and Ghana, plus at least one francophone West African example (Senegal, Côte d'Ivoire, Burkina Faso or Cameroon), because the course is translated into French. Local crops and animals: maize, cassava, rice, sorghum, beans, groundnuts, tomatoes, coffee, cocoa, cattle, goats, pigs, poultry and tilapia.
- **Methods:** low-cost and practical. A phone and simple AI tools can help, but the course teaches the farming or business skill.
- **Money:** use local currency examples, KES, NGN, GHS and XOF, and say figures are examples. Don't invent prices, interest rates or subsidies.

## Facts and safety
- Confirm facts that can change with WebFetch on official or expert sources (FAO, CGIAR centres such as ILRI, IITA, CIMMYT, ICIPE and WorldFish; national ministries and research institutes such as KALRO; WOAH; AU-IBAR). Put them in `sources`. If a site blocks you, do not work around the block, for example by spoofing a browser user agent. Instead, say where to check.
- **Animal health:** never give drug, vaccine or hormone doses, and never give withdrawal periods as numbers. Say to follow the vet and the product label. African Swine Fever and avian flu are notifiable: say to report suspected cases to the vet or veterinary authority at once.
- **Pesticides:** only registered products, used as the label says, with protective equipment. Name the national registration body (for example Kenya's Pest Control Products Board and Nigeria's NAFDAC) and say to check its list.
- **Finance:** explain how loans, insurance, hedging and contracts work, plus their risks, with no investment advice. Say to read contracts fully and ask a trusted adviser.

## Rules
- Run `node scripts/koachlearn-export.js --check <your file>` until it passes. It enforces the ADDIE parts. Do NOT build videos.
- Spread right answers across A to D, and across the quick checks too.
- Objectives: 4 to 6 per course. Each `action` starts with an observable verb and makes sense alone, because the intro video shows it.
- The rubric scores the course's `finalTask`, which should be a real product the farmer makes for their own farm, such as a cost sheet, a feed ration, a biosecurity plan or a pitch to a buyer.
- Touch ONLY your own course files. Do not edit catalog.js, the README, the builder, this brief or other courses. Run no git commands, and do not start your own helper agents.
- Finish with a short report: the files written, that each passes `--check`, facts you could not confirm, and anything a reviewer should look at.
