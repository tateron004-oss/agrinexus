"use strict";

// Koach Learn course (Igbo translation of shared/ai-in-finance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-in-finance-ig",
  lang: "ig",
  translationOf: "ai-in-finance",
  category: "Small Business",
  name: "AI na Njikwa Ego",
  skills: "Ichebe ozi ego mgbe ị na-eji AI, Ikewa ego na-abata na ego na-apụ n'otu n'otu, Ime budget kwa ọnwa, Itụnyere budget na ihe mere n'ezie, Ịkọ amụma mbata na mpụta ego, Ịkọwa ọnụ ọgụgụ",
  outcome: "iji ngwa enyemaka AI na spreadsheet kewaa ego na-abata na ego na-apụ n'otu ọnwa, mee budget ma tụnyere ya na ihe mere n'ezie, mee amụma mbata na mpụta ego nke izu 13, ma kọwaa nsonaazụ ya n'okwu dị mfe, n'ekesaghị ozi ego nzuzo ọ bụla.",
  about: [
    "Ajụjụ gbasara ego na-eme ka ndị nwe azụmahịa na ndị isi otu enyemaka (nonprofit) ghara ihi ụra: Ànyị ga-enwe ike ịkwụ ndị ọrụ ụgwọ? Ebee ka ego ahụ gara? Ànyị nwere ike iwe onye ọrụ ọhụrụ ma ọ bụ malite mmemme ọhụrụ? Ngwa AI nwere ike inyere gị aka hazie ọnụ ọgụgụ, mee spreadsheet ma kọwaa ihe ha pụtara.",
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa, ndị isi otu enyemaka, ndị na-elekọta ego otu (treasurer) na ndị na-amụ ide akwụkwọ ego (bookkeeping). Ọmụmaatụ gụnyere ụgbọala na-ere nri (food truck), ụlọ ọrụ na-ehicha ụlọ, otu enyemaka egwuregwu ụmụaka na ozi nri nke ụka.",
    "Ị ga-eji ngwa n'efu dị ka Google Sheets ma ọ bụ Excel, ya na ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini. Ị ga-eji ọnụ ọgụgụ ọmụmaatụ ma ọ bụ nke e hichara emee omume, ọ bụghị nọmba akaụntụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\", nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ na ule nwere ajụjụ 20 na njedebe. Ihe ọmụmụ a abụghị ndụmọdụ ụtụ isi, iwu ma ọ bụ itinye ego (investment); maka ndị ahụ, hụ ọkachamara nwere ikike na irs.gov."
  ],
  finalTask: "Were otu ọnwa azụmahịa ego (transactions) n'ezie ma ọ bụ nke ọmụmaatụ, nke e wepụrụ nọmba akaụntụ na aha niile, mee spreadsheet nke na-ekewa ego na-abata na ego na-apụ n'otu n'otu (categories), tebụl budget na ihe mere n'ezie nke na-akọwa ọdịiche atọ kacha ukwuu, na amụma mbata na mpụta ego nke izu 13 nke e gosiri izu kacha ala. Wee dee ozi ego nwere ahịrịokwu ise n'okwu dị mfe maka onye nwe ya, onye mmekọ ma ọ bụ ndị board.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa, ndị na-ede akwụkwọ ego, ndị njikwa ọfịs na ndị na-elekọta ego ma ọ bụ ndị ọrụ otu enyemaka bụ ndị na-ejikwa ego mana ha amụghị akaụntụ (accountant).",
    startingPoint: "Ha nwere ike ịgụ akwụkwọ ụlọ akụ (bank statement) ma jiri ekwentị ma ọ bụ kọmputa; ụfọdụ na-edebe ndekọ na spreadsheet ma ọ bụ app akwụkwọ ego. Ọ bụ mmadụ ole na ole na-eme budget, amụma mbata na mpụta ego ma ọ bụ formula, ọtụtụ ejibeghịkwa AI maka ọrụ ego n'enweghị nsogbu.",
    gap: "Ọtụtụ obere otu na-achọpụta nsogbu ego mgbe oge gafere, na-ahụghị ụgwọ a kwụrụ ugboro abụọ ma ọ bụ aghụghọ, ma na-esiri ha ike ịkọwa ọnụ ọgụgụ ha nye ndị mmekọ ma ọ bụ board. Ndị na-amụ ihe kwesịrị iji AI na spreadsheet kewaa, mee atụmatụ, kọọ amụma ma kọwaa ego, ma na-ewepụ ozi ego nzuzo n'ime ngwa AI ma na-elele ọnụ ọgụgụ ọ bụla.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu gbasara ego na nke mbụ",
      "Ngwaọrụ: kọmputa kacha mma maka spreadsheet; ọrụ a na-esi ike na ekwentị",
      "Nzuzo: tinyela nọmba akaụntụ, routing, kaadị, Social Security ma ọ bụ tax ID, okwuntughe ma ọ bụ aha ndị mmadụ n'ime ngwa AI",
      "Ọ dịghị ndụmọdụ ụtụ isi, ụgwọ ndị ọrụ (payroll), iwu ma ọ bụ itinye ego: kwado ya na irs.gov, ụlọ ọrụ ụtụ isi steeti ma ọ bụ ọkachamara nwere ikike",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu gbakwunyere oge iji mee spreadsheet"
    ],
    prerequisites: "Ọ dịghị. Ọ ga-enyere aka ma ọ bụrụ na ị maara ntakịrị spreadsheet (ide ihe n'ime cell, SUM dị mfe)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị azụmahịa ego otu ọnwa e si n'ụlọ akụ wepụta", action: "ịkwadebe ozi ahụ maka AI site n'iwepụ nọmba akaụntụ na iji akara nnọchi dochie aha", standard: "nke mere na ọ dịghị ozi ego nzuzo fọdụrụ, e lelekwala mgbakọ AI na spreadsheet" },
    { id: "O2", condition: "Mgbe e nyere gị azụmahịa e hichara ehicha na ndepụta categories", action: "itinye azụmahịa ọ bụla n'otu category ma jiri SUMIF gbakọọ nke ọ bụla", standard: "nke mere na ngụkọta categories niile ruru ngụkọta zuru ezu" },
    { id: "O3", condition: "Mgbe e nyere gị budget kwa ọnwa na ngụkọta ihe mere n'ezie", action: "ime tebụl budget na ihe mere n'ezie nwere ọdịiche (variance) na pasent o ji dị iche", standard: "ma kọwaa ọdịiche atọ kacha ukwuu n'otu ahịrịokwu nke ọ bụla" },
    { id: "O4", condition: "Mgbe e nyere gị ego dị n'aka taa na ego a tụrụ anya ka ọ bata na ka ọ pụọ", action: "ime amụma mbata na mpụta ego nke izu 13 ma gosi izu kacha ala", standard: "nke mere na ego fọdụrụ na njedebe izu ọ bụla ga-aga n'izu na-esote" },
    { id: "O5", condition: "Mgbe e nyere gị azụmahịa otu ọnwa e hichara na arịrịọ ịkwụ ụgwọ", action: "ịchọpụta ụgwọ nwere ike ịbụ nke a kwụrụ ugboro abụọ, mmefu ego dị iche na aghụghọ ịkwụ ụgwọ", standard: "ma kwado mgbanwe ọ bụla nke nkọwa ụlọ akụ site n'ịkpọ nọmba ị maralarị" },
    { id: "O6", condition: "Mgbe e nyere gị nsonaazụ spreadsheet gị", action: "ide ozi ego nwere ahịrịokwu ise n'okwu dị mfe ma mee atụmatụ oge ole a ga-edebe ndekọ", standard: "ma lelee ọnụ ọgụgụ ọ bụla na spreadsheet" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi ego",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI maka ego n'enweghị nsogbu",
          minutes: 5,
          goal: "Kwadebe ozi ego ka i nweta enyemaka AI n'egosighị ozi nzuzo.",
          text: [
            "Ngwa enyemaka AI maara nke ọma formula spreadsheet, nhazi, ịchọpụta usoro na ịkọwa okwu dị ka \"accrual\" ma ọ bụ \"gross margin\". Ha abụghị ndị akaụntụ, ha nwere ike ime mperi n'ịgbakọ ego, ha amaghịkwa iwu ụtụ isi maka ọnọdụ gị kpọmkwem.",
            "Etinyela nọmba akaụntụ ụlọ akụ ma ọ bụ kaadị, nọmba routing, okwuntughe, nọmba Social Security ma ọ bụ tax ID, ma ọ bụ aha ndị ahịa, ndị na-enye onyinye ma ọ bụ ndị ọrụ n'ime ngwa AI nkịtị. Kama nke ahụ, wepụta azụmahịa ego gaa na spreadsheet, hichapụ kọlụm ndị ahụ, ma jiri akara nkịtị dị ka \"Customer A\" ma ọ bụ \"Supplier 1\" dochie aha.",
            "Jiri spreadsheet n'onwe ya lelee mgbakọ AI. Rịọ AI ka o nye gị formula, hapụ spreadsheet ka ọ gbakọọ, ma jiri aka lelee ngụkọta ole na ole. Maka ajụjụ ụtụ isi, payroll na iwu, kwado ya na irs.gov, ụlọ ọrụ ụtụ isi steeti gị ma ọ bụ onye akaụntụ nwere ikike."
          ],
          steps: ["Wepụta azụmahịa ego site n'ụlọ akụ gị ma ọ bụ ngwa akwụkwọ ego gaa na spreadsheet.", "Hichapụ nọmba akaụntụ na nọmba ID ọ bụla.", "Jiri akara dị ka \"Customer A\" dochie aha ndị mmadụ.", "Jiri AI maka formula na nkọwa, ọ bụghị maka azịza ụtụ isi ikpeazụ.", "Jiri spreadsheet lelee mgbakọ AI."],
          words: [["Wepụta (export)", "ịchekwa ozi site n'otu mmemme gaa na faịlụ mmemme ọzọ nwere ike imeghe."], ["Azụmahịa ego (transaction)", "otu mbata ma ọ bụ mpụta ego, dị ka ire ihe ma ọ bụ ịkwụ ụgwọ."]],
          slides: [
            { title: "AI maara nke ọma", bullets: ["Formula spreadsheet na nhazi", "Ịchọpụta usoro", "Ịkọwa okwu gbasara ego"] },
            { title: "Etinyela ihe ndị a n'ime AI", bullets: ["Nọmba akaụntụ ụlọ akụ, kaadị ma ọ bụ routing", "Okwuntughe, SSN, nọmba tax ID", "Aha ndị ahịa, ndị na-enye onyinye ma ọ bụ ndị ọrụ"] },
            { title: "Hichaa, wee lelee", bullets: ["Hichapụ nọmba, dochie aha na akara", "Hapụ spreadsheet ka ọ gbakọọ", "Ajụjụ ụtụ isi: irs.gov ma ọ bụ onye akaụntụ"] }
          ],
          tryIt: "Wepụta ma ọ bụ dee azụmahịa ego 20 site n'otu ọnwa n'ezie ma ọ bụ nke ọmụmaatụ n'ime spreadsheet. Wepụ nọmba akaụntụ niile ma jiri akara dochie aha.",
          youCanNow: "ịkwadebe ozi ego maka enyemaka AI n'egosighị ozi nzuzo.",
          quickCheck: [
            { objective: "O1", q: "Kedu kọlụm ị ga-ehichapụ tupu itinye azụmahịa ego n'ime ngwa AI?", options: ["Ụbọchị", "Ego ole", "Nkọwa ihe a zụrụ", "Nọmba akaụntụ"], answer: 3, why: "Nọmba akaụntụ bụ nzuzo, a gaghịkwa etinye ya n'ime ngwa AI nkịtị mgbe ọ bụla." },
            { objective: "O1", q: "Azụmahịa gị nwere aha onye ahịa bụ \"Maria Lopez\". Gịnị ka ị ga-eme tupu ịrịọ AI enyemaka?", options: ["Hapụ aha ahụ; AI na-edebe ya na nzuzo", "Jiri akara dị ka \"Customer A\" dochie ya", "Tinyekwa nọmba ekwentị ya", "Hichapụ azụmahịa ahụ niile"], answer: 1, why: "Iji akara dochie aha na-echebe nzuzo, AI ka na-enyekwa aka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ikewa ego na-abata na ego na-apụ n'otu n'otu",
          minutes: 5,
          goal: "Jiri AI tụọ aro categories ma jiri spreadsheet gbakọọ nke ọ bụla.",
          text: [
            "Categories na-eme ka ogologo ndepụta azụmahịa ego ghọọ foto doro anya. Categories azụmahịa a na-ahụkarị: ire ihe (sales), ọnụ ahịa ngwaahịa (ihe e ji eme nri, ihe e ji eme ngwaahịa), ụgwọ ụlọ, ụgwọ ndị ọrụ, mgbasa ozi, software, ụgbọala na mmanụ ụgbọala, inshọransị na ụgwọ ọrụ. Otu enyemaka na-agbakwunyekarị onyinye, grant, ego mmemme na ego e ji achọ onyinye.",
            "Tinye kọlụm nkọwa na ego ole e hichara n'ime ngwa enyemaka AI ma jụọ: \"Suggest a category for each line from this list: [your categories]. Return a table.\" (Tụọ aro category maka ahịrị ọ bụla site na ndepụta a, nye m ya dị ka tebụl.) Wee detuo tebụl ahụ laghachi na spreadsheet gị ma dozie ndị o mehiere.",
            "Rịọ AI ka o nye gị formula iji gbakọọ category ọ bụla. Na Google Sheets na Excel, SUMIF na-agbakọ ego ndị dabara n'otu akara, dịka ọmụmaatụ =SUMIF(C:C, \"Rent\", D:D)."
          ],
          steps: ["Dee ndepụta categories gị.", "Rịọ AI ka ọ tụọ aro category maka azụmahịa ọ bụla e hichara.", "Tinye categories ahụ na spreadsheet gị ma dozie mperi.", "Jiri SUMIF gbakọọ category ọ bụla.", "Lelee na ngụkọta categories ruru ngụkọta zuru ezu."],
          words: [["Category", "otu azụmahịa ego yitere onwe ha, dị ka ụgwọ ụlọ ma ọ bụ mgbasa ozi."], ["SUMIF", "formula spreadsheet na-agbakọ ego ndị dabara n'otu ọnọdụ."], ["Ọnụ ahịa ngwaahịa (cost of goods)", "ego ị na-eji eme ma ọ bụ zụta ngwaahịa ị na-ere."]],
          slides: [
            { title: "Categories a na-ahụkarị", bullets: ["Ire ihe, ọnụ ahịa ngwaahịa, ụgwọ ụlọ, ụgwọ ndị ọrụ", "Mgbasa ozi, software, mmanụ ụgbọala, inshọransị", "Otu enyemaka: onyinye, grant, mmemme"] },
            { title: "AI na-atụ aro, gị na-edozi", bullets: ["Tinye nkọwa na ego ole e hichara", "Rịọ category site na ndepụta gị", "Dozie ndị o mehiere"] },
            { title: "Jiri SUMIF gbakọọ", bullets: ["=SUMIF(C:C, \"Rent\", D:D)", "Ngụkọta categories ga-aha nhata ngụkọta zuru ezu"] }
          ],
          tryIt: "Mee ka AI tụọ aro categories maka azụmahịa ego 20 i hichara, dozie ha, ma jiri SUMIF gbakọọ category ọ bụla. Kwado na ngụkọta ndị ahụ dabara na ngụkọta niile.",
          youCanNow: "ikewa azụmahịa ego n'otu n'otu ma jiri formula spreadsheet gbakọọ ha.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka SUMIF na-eme na spreadsheet?", options: ["Ọ na-agbakọ ego ndị dabara n'otu akara", "Ọ na-ahazi ahịrị site n'ụbọchị", "Ọ na-ehichapụ cell ndị tọgbọrọ chakoo", "Ọ na-agụ ọnụ ọgụgụ kọlụm"], answer: 0, why: "SUMIF na-agbakọ ego ndị akara ha dabara, dị ka ahịrị Rent niile." },
            { objective: "O2", q: "Ngụkọta categories gị bụ $4,800, mana ngụkọta zuru ezu bụ $5,000. Gịnị ka ị ga-eme?", options: ["Lefuo ọdịiche ahụ anya", "Gbanwee ngụkọta zuru ezu ka ọ bụrụ $4,800", "Chọta azụmahịa ndị na-enweghị category ma ọ bụ nwere akara ezighi ezi", "Rịọ AI ka o mee ka ọnụ ọgụgụ ahụ dabara"], answer: 2, why: "Ngụkọta categories kwesịrị ịha nhata ngụkọta zuru ezu, ya mere chọọ ahịrị fọdụrụ ma ọ bụ nwere akara ezighi ezi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime budget na itụnyere ya na ihe mere n'ezie",
          minutes: 6,
          goal: "Mee budget kwa ọnwa na tebụl budget na ihe mere n'ezie nke na-egosi ebe ị dị iche.",
          text: [
            "Budget bụ atụmatụ gị maka ego na-abata na ego na-apụ n'otu oge. Budget na ihe mere n'ezie (budget versus actual) na-atụnyere atụmatụ ahụ na ihe mere n'ezie. A na-akpọ ọdịiche dị n'etiti ha variance.",
            "Hazie kọlụm: category, budget, ihe mere n'ezie (actual), variance (actual wepụ budget) na pasent o ji dị iche. Jụọ AI: \"Give me Google Sheets formulas for variance and percent variance.\" (Nye m formula Google Sheets maka variance na pasent variance.) Wee chọọ variance kacha ukwuu, na dọla na na pasent.",
            "Kọwaa variance ukwu ọ bụla n'otu ahịrịokwu. \"Mmanụ ụgbọala karịrị budget ji $300 n'ihi na anyị tinyere ụzọ nnyefe nke abụọ.\" AI nwere ike inyere gị aka n'ịhọrọ okwu, mana ọ bụ naanị gị maara ezi ihe kpatara ya."
          ],
          steps: ["Depụta categories na ego budget maka nke ọ bụla.", "Webata ngụkọta ihe mere n'ezie site na Nkuzi 2.", "Tinye variance = actual wepụ budget.", "Tinye pasent o ji dị iche = variance kee budget.", "Kọwaa variance atọ kacha ukwuu n'otu ahịrịokwu nke ọ bụla."],
          words: [["Budget", "atụmatụ maka ego na-abata na ego na-apụ."], ["Variance", "ọdịiche dị n'etiti budget na ihe mere n'ezie."]],
          slides: [
            { title: "Budget na ihe mere n'ezie", bullets: ["Budget: atụmatụ", "Actual: ihe mere n'ezie", "Variance: ọdịiche"] },
            { title: "Hazie tebụl ahụ", bullets: ["Category, budget, actual", "Variance na pasent o ji dị iche"] },
            { title: "Kọwaa ndị kacha ukwuu", bullets: ["Ọdịiche atọ kacha ukwuu", "Otu ahịrịokwu nke ọ bụla nwere ezi ihe kpatara ya"] }
          ],
          tryIt: "Mee tebụl budget na ihe mere n'ezie maka ọnwa gị nwere variance na pasent o ji dị iche. Kọwaa variance atọ kacha ukwuu n'otu ahịrịokwu nke ọ bụla.",
          youCanNow: "ime budget, itụnyere ya na nsonaazụ n'ezie ma kọwaa ọdịiche ndị ahụ.",
          quickCheck: [
            { objective: "O3", q: "Na budget na ihe mere n'ezie, kedu otu esi agbakọ variance n'ihe ọmụmụ a?", options: ["Budget gbakwunyere actual", "Budget kee actual", "Actual wepụ budget", "Actual mụbaa budget"], answer: 2, why: "Variance bụ actual wepụ budget." },
            { objective: "O3", q: "Ihe ọrụ (supplies) karịrị budget ji $200. AI na-atụ aro \"ọnụ ahịa rịrị elu\", mana ị maara na ị zụtakwuru maka otu mmemme. Gịnị ka ị ga-ede?", options: ["Ezi ihe kpatara ya: e zụtakwuru ihe ọrụ maka mmemme ahụ", "Ihe AI kwuru, n'ihi na ọ dị mma ịnụ", "Ọ dịghị ihe kpatara ya", "Na budget ahụ ezighi ezi"], answer: 0, why: "Ọ bụ naanị gị maara ezi ihe kpatara ya; AI nwere ike inye aka n'okwu, ọ bụghị n'eziokwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi ego",
        questions: [
          { objective: "O1", q: "Kedu nke ị na-ekwesịghị itinye MGBE Ọ BỤLA n'ime ngwa AI nkịtị?", options: ["Ndepụta categories", "Tebụl ego ole e hichara", "Nọmba akaụntụ ụlọ akụ gị na nọmba routing", "Ajụjụ banyere ihe \"variance\" pụtara"], answer: 2, why: "Nọmba akaụntụ bụ ozi ego nzuzo." },
          { objective: "O1", q: "AI nyere ngụkọta yiri ka ọ ezighi ezi. Gịnị ka ị ga-eme?", options: ["Hapụ spreadsheet ka ọ gbakọọ ma jiri aka lelee ụfọdụ", "Tụkwasị AI obi", "Hichapụ ozi ahụ", "Zigara ya ndị board"], answer: 0, why: "AI nwere ike ime mperi n'ịgbakọ; spreadsheet na nlele aka na-akwado ya." },
          { objective: "O2", q: "Gịnị ka =SUMIF(C:C, \"Rent\", D:D) na-eme?", options: ["Ọ na-ehichapụ ahịrị ụgwọ ụlọ", "Ọ na-agụ ndị ahịa", "Ọ na-ahazi site n'ụbọchị", "Ọ na-agbakọ ego dị na kọlụm D ebe kọlụm C kwuru Rent"], answer: 3, why: "SUMIF na-agbakọ ego dabara n'otu ọnọdụ." },
          { objective: "O3", q: "Budget mmanụ ụgbọala bụ $500; ihe mere n'ezie bụ $800. Gịnị bụ variance?", options: ["$1,300", "$300 karịrị", "$300 erughị", "$500"], answer: 1, why: "Actual wepụ budget = 800 - 500 = 300 karịrị." },
          { objective: "O3", q: "Onye kwesịrị ịkọwa ihe kpatara variance?", options: ["Naanị AI", "Gị, site n'ihe mere n'ezie", "Ọ dịghị onye", "Weebụsaịtị ọ bụla"], answer: 1, why: "Ọ bụ naanị gị maara ezi ihe kpatara ọnụ ọgụgụ ndị ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ime atụmatụ na ịkọwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịkọ amụma mbata na mpụta ego maka izu 13 na-abịa",
          minutes: 6,
          goal: "Mee amụma mbata na mpụta ego nke izu 13 ma chọta izu ego kacha dị mkpa.",
          text: [
            "Uru (profit) na ego dị n'aka (cash) abụghị otu ihe. Ị nwere ike inwe uru n'akwụkwọ ma ego ka gwụ gị ma ọ bụrụ na ndị ahịa akwụghị ụgwọ n'oge ma ọ bụ ụgwọ ukwu eruo. Amụma mbata na mpụta ego (cash flow forecast) na-egosi mgbe ego na-abata na mgbe ọ na-apụ, izu n'izu.",
            "Amụma izu 13 (ihe dị ka ọnwa atọ) bụ ngwa a na-ejikarị. Ahịrị: ego mmalite, ego na-abata (ire ihe, ụgwọ a kwụrụ, onyinye, grant), ego na-apụ (ụgwọ ndị ọrụ, ụgwọ ụlọ, ndị na-ebubata ngwa, ụgwọ mbinye), na ego fọdụrụ na njedebe. Ego fọdụrụ na njedebe izu ọ bụla na-aghọ ego mmalite izu na-esote.",
            "Rịọ AI ka o mee template: \"Make a 13-week cash flow forecast table for Google Sheets with formulas where each week's ending cash becomes the next week's starting cash.\" (Mee tebụl amụma izu 13 maka Google Sheets nwere formula ebe ego njedebe izu ọ bụla na-aghọ ego mmalite izu na-esote.) Dejupụta ọnụ ọgụgụ ị tụrụ anya, wee chọta izu kacha ala. Ọ bụ mgbe ahụ ka ị nwere ike ịkwụsịtụ ịzụ ihe, ịchụso ụgwọ a ga-akwụ gị ma ọ bụ ịhazi line of credit."
          ],
          steps: ["Rịọ AI maka template mbata na mpụta ego nke izu 13 nwere formula.", "Tinye ego dị n'aka taa dị ka ego mmalite izu 1.", "Tinye ego ị tụrụ anya ka ọ bata na ka ọ pụọ maka izu ọ bụla.", "Lelee na ego njedebe na-aga n'izu na-esote.", "Gosi izu kacha ala ma mee atụmatụ maka ya."],
          words: [["Mbata na mpụta ego (cash flow)", "oge ego na-abata na oge ọ na-apụ."], ["Amụma (forecast)", "ezigbo ntụle nke ọnụ ọgụgụ ga-abịa n'ọdịnihu."], ["Line of credit", "ego a kara aka ụlọ akụ na-ekwe ka ị binye mgbe ị chọrọ ya."]],
          slides: [
            { title: "Uru abụghị ego dị n'aka", bullets: ["Ụgwọ a kwụrụ n'oge gafere na ụgwọ ukwu", "Ego nwere ike ịgwụ gị ọbụlagodi mgbe i nwere uru"] },
            { title: "Ahịrị amụma izu 13", bullets: ["Ego mmalite", "Ego na-abata na ego na-apụ", "Ego njedebe na-aga n'izu na-esote"] },
            { title: "Chọta izu kacha ala", bullets: ["Kwụsịtụ ịzụ ihe", "Chụso ụgwọ a ga-akwụ gị", "Hazie mbinye ego n'oge"] }
          ],
          tryIt: "Jiri enyemaka AI mee amụma mbata na mpụta ego nke izu 13. Dejupụta ọnụ ọgụgụ n'ezie ma ọ bụ nke ọmụmaatụ ma gosi izu kacha ala na otu ihe ị ga-eme.",
          youCanNow: "ime amụma mbata na mpụta ego nke izu 13 ma mee atụmatụ maka izu ego kacha dị mkpa.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka amụma mbata na mpụta ego na-egosi?", options: ["Uru gị n'afọ gara aga", "Mgbe ego na-abata na mgbe ọ na-apụ, izu n'izu", "Akara credit gị", "Ụgwọ ụtụ isi gị"], answer: 1, why: "Amụma mbata na mpụta ego na-egosi ego na-abata na ego na-apụ izu n'izu." },
            { objective: "O4", q: "Amụma gị na-egosi na ego ga-adị n'okpuru efu n'izu 7. Gịnị ka ị nwere ike ime?", options: ["Ọ dịghị ihe; ọ bụ naanị amụma", "Zoo izu 7 ka ndị board ghara ịhụ ya", "Mefukwuo ego n'izu 6", "Kwụsịtụ ịzụ ihe, chụso ụgwọ a ga-akwụ gị ma ọ bụ hazie line of credit"], answer: 3, why: "Izu kacha ala bụ mgbe ị na-ebu ụzọ mee atụmatụ iji kpuchie oghere ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji AI chọpụta nsogbu na aghụghọ",
          minutes: 5,
          goal: "Jiri AI na nlele dị mfe chọpụta mmefu ego dị iche, ụgwọ a kwụrụ ugboro abụọ na aghụghọ.",
          text: [
            "AI na spreadsheet nwere ike igosi ihe onye na-arụsi ọrụ ike na-ahụghị: ụgwọ a kwụrụ ugboro abụọ, subscription i chefuru, mmụba na mberede n'otu category, ma ọ bụ onye na-ebubata ngwa ị na-amaghị.",
            "Jụọ: \"Look at this cleaned table. List possible duplicates, unusual amounts and categories that changed a lot from last month.\" (Lee tebụl a e hichara. Depụta ụgwọ nwere ike ịbụ nke e mere ugboro abụọ, ego dị iche na categories gbanwere nke ukwuu site n'ọnwa gara aga.) Wee nyochaa ihe ọ bụla n'onwe gị.",
            "Kpachara anya maka aghụghọ a na-eme azụmahịa na otu enyemaka: invoice adịgboroja, email na-arịọ gị ka ị gbanwee nkọwa ụlọ akụ onye na-ebubata ngwa, na arịrịọ ịkwụ ụgwọ ngwa ngwa nke yiri ka ọ si n'aka onye isi. Kwado ya mgbe niile site n'ịkpọ nọmba ekwentị ị maralarị. Kọọ aghụghọ na ReportFraud.ftc.gov."
          ],
          steps: ["Rịọ AI ka ọ depụta ụgwọ nwere ike ịbụ nke ugboro abụọ na ego dị iche.", "Tụnyere categories na ọnwa gara aga.", "Nyochaa ihe ọ bụla e gosiri n'onwe gị.", "Kwado mgbanwe nkọwa ụlọ akụ ọ bụla site n'ịkpọ nọmba ị maara.", "Kọọ aghụghọ nye FTC."],
          words: [["Ụgwọ a kwụrụ ugboro abụọ (duplicate payment)", "ịkwụ otu ụgwọ ahụ ugboro abụọ."], ["Invoice", "akwụkwọ ụgwọ na-arịọ ka a kwụọ ego."], ["Aghụghọ ịkwụ ụgwọ (payment fraud)", "ịghọgbu mmadụ ka o ziga ego n'ebe ezighi ezi."]],
          slides: [
            { title: "Ihe AI nwere ike igosi", bullets: ["Ụgwọ a kwụrụ ugboro abụọ", "Subscription i chefuru", "Mmụba na mberede ma ọ bụ ndị na-ebubata ngwa ị na-amaghị"] },
            { title: "Aghụghọ azụmahịa", bullets: ["Invoice adịgboroja", "\"Biko melite nkọwa ụlọ akụ anyị\"", "Arịrịọ ngwa ngwa yiri ka ọ si n'aka onye isi"] },
            { title: "Chebe ego ahụ", bullets: ["Kpọọ nọmba ị maralarị", "Nyochaa ihe ọ bụla e gosiri", "Kọọ ya na ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Otu esi amata ma zere aghụghọ phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Rịọ AI ka ọ lelee azụmahịa ego gị e hichara maka ụgwọ ugboro abụọ na ego dị iche. Nyochaa ihe ọ bụla o gosiri ma dee ihe ị chọpụtara.",
          youCanNow: "iji AI na nlele dị mfe chọpụta mmefu ego dị iche na aghụghọ ịkwụ ụgwọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ aghụghọ a na-ahụkarị nke a na-eme azụmahịa na otu enyemaka?", options: ["Onye ahịa na-akwụ ụgwọ n'oge", "Ụgwọ ụlọ kwa ọnwa", "Akwụkwọ ụlọ akụ na-abịa site n'ozi post", "Email na-arịọ gị ka ị gbanwee nkọwa ụlọ akụ onye na-ebubata ngwa"], answer: 3, why: "Arịrịọ ịgbanwe nkọwa ụlọ akụ onye na-ebubata ngwa bụ aghụghọ a na-ahụkarị." },
            { objective: "O5", q: "AI gosiri ụgwọ abụọ hà nhata nye otu onye na-ebubata ngwa n'otu ụbọchị. Gịnị ka ị ga-eme?", options: ["Kwere na AI ziri ezi ma kagbuo ha abụọ", "Nyochaa ya n'onwe gị, dị ka ilele invoice ndị ahụ", "Lefuo ya anya", "Kwụọ onye ahụ ụgwọ ugboro atọ"], answer: 1, why: "AI na-egosi nsogbu nwere ike ịdị; gị na-enyocha nke ọ bụla n'onwe gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọwa ọnụ ọgụgụ na idebe ezigbo ndekọ",
          minutes: 5,
          goal: "Dee ozi ego n'okwu dị mfe ma mara oge ole a ga-edebe ndekọ.",
          text: [
            "Ndị nwe ya, ndị mmekọ na ndị board chọrọ ozi dị mkpụmkpụ ma doo anya, ọ bụghị nnukwu spreadsheet. Ezigbo ozi nwere ahịrịokwu ise: ego ole batara, ego ole pụrụ, variance kacha ukwuu na ihe kpatara ya, ọnọdụ ego n'ihu site n'amụma gị, na otu mkpebi ma ọ bụ ihe a ga-eme.",
            "Rịọ AI ka o mee ka ọnụ ọgụgụ gị ghọọ ihe mbụ (draft), wee lelee ọnụ ọgụgụ ọ bụla na spreadsheet. Wepụ ihe ọ bụla AI tinyere nke na-abụghị eziokwu.",
            "Debe ndekọ. IRS na-ekwu ka i debe ndekọ na-akwado ego e nwetara na mwepu (deductions) ruo mgbe oge njedebe (period of limitations) maka nkwupụta ụtụ isi ahụ gwụrụ, na-abụkarị afọ 3, oge ka ogologo n'ọnọdụ ụfọdụ, na opekata mpe afọ 4 maka ndekọ ụtụ isi ndị ọrụ (employment tax). Lelee irs.gov ma ọ bụ onye akaụntụ maka ọnọdụ gị."
          ],
          steps: ["Dee ahịrịokwu ise: ego batara, ego pụrụ, variance kacha ukwuu, ọnọdụ ego n'ihu, mkpebi a chọrọ.", "Mee ka AI dozie okwu ya.", "Lelee ọnụ ọgụgụ ọ bụla na spreadsheet.", "Chekwaa spreadsheet na nnata ego (receipts) n'ime folda echekwara nke e nwere nkwado (backup).", "Lelee irs.gov maka oge ole a ga-edebe ha."],
          words: [["Board", "otu ndị na-elekọta otu enyemaka ma ọ bụ ụlọ ọrụ."], ["Oge njedebe (period of limitations)", "oge IRS nwere iji nyochaa ma ọ bụ gbanwee nkwupụta ụtụ isi."]],
          slides: [
            { title: "Ozi nwere ahịrịokwu ise", bullets: ["Ego batara na ego pụrụ", "Variance kacha ukwuu na ihe kpatara ya", "Ọnọdụ ego n'ihu na mkpebi a chọrọ"] },
            { title: "AI na-ede draft, gị na-elele", bullets: ["Lelee ọnụ ọgụgụ ọ bụla", "Wepụ ihe ọ bụla na-abụghị eziokwu"] },
            { title: "Debe ndekọ (IRS)", bullets: ["Na-abụkarị afọ 3; ka ogologo n'ọnọdụ ụfọdụ", "Opekata mpe afọ 4 maka ndekọ ụtụ isi ndị ọrụ", "Lelee irs.gov ma ọ bụ onye akaụntụ"] }
          ],
          sources: [{ name: "IRS: Oge ole ka m ga-edebe ndekọ?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Ọrụ ikpeazụ: dee ozi ego nwere ahịrịokwu ise site n'ọnwa gị e kewara, tebụl budget na ihe mere n'ezie na amụma izu 13. Lelee ọnụ ọgụgụ ọ bụla, wee chekwaa faịlụ niile n'ime folda nwere backup.",
          youCanNow: "ịhazi, ime atụmatụ na ịkọwa ego otu ọrụ site n'enyemaka AI ma na-echebe ozi.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke dabara n'ozi ego nwere ahịrịokwu ise?", options: ["Ọnọdụ ego n'ihu site n'amụma gị", "Azụmahịa ego niile nke ọnwa ahụ", "Nọmba akaụntụ ụlọ akụ", "Adreesị ụlọ ndị ọrụ"], answer: 0, why: "Ozi ahụ na-ekwu ego batara, ego pụrụ, variance kacha ukwuu, ọnọdụ ego n'ihu na mkpebi a chọrọ." },
            { objective: "O6", q: "Draft AI kwuru na ego batara rịrị elu 20%, mana spreadsheet gị na-egosi 12%. Gịnị ka ị ga-eme?", options: ["Zipu ya; ọ dị nso", "Mee ya 15%", "Dozie ya ka o dabara na spreadsheet tupu i zipu ya", "Wepụ ọnụ ọgụgụ niile"], answer: 2, why: "Lelee ọnụ ọgụgụ ọ bụla na spreadsheet ma wepụ ihe ọ bụla na-abụghị eziokwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime atụmatụ na ịkọwa",
        questions: [
          { objective: "O4", q: "Gịnị mere azụmahịa nwere uru ji enwe ike ịgwụ ego n'aka?", options: ["Uru na ego dị n'aka na-aha nhata mgbe niile", "Ụlọ akụ na-ejide uru niile", "O nweghị ike ime", "Ụgwọ a na-akwụ ya na-abịa n'oge gafere mgbe ụgwọ ọ ga-akwụ eruola"], answer: 3, why: "Oge ego na-abata na oge ọ na-apụ dị mkpa." },
          { objective: "O4", q: "N'amụma mbata na mpụta ego, ego mmalite izu na-abịa hà nhata:", options: ["Ego njedebe izu a", "Uru afọ gara aga", "Budget", "Efu"], answer: 0, why: "Izu ọ bụla na-aga n'ihu n'izu na-esote." },
          { objective: "O5", q: "Email si n'aka onye na-ebubata ngwa na-arịọ gị ka ị na-ezigazi ụgwọ n'akaụntụ ụlọ akụ ọhụrụ. Gịnị ka ị ga-eme?", options: ["Melite ya ozugbo", "Zaghachi ya na nbanye ụlọ akụ gị", "Kpọọ onye ahụ na nọmba ị maralarị iji kwado ya", "Zigara ya ndị ọrụ niile"], answer: 2, why: "Arịrịọ ịgbanwe nkọwa ụlọ akụ bụ aghụghọ a na-ahụkarị." },
          { objective: "O6", q: "Gịnị ka IRS kwuru bụ oge a na-edebekarị ndekọ na-akwado nkwupụta ụtụ isi?", options: ["Otu izu", "Edebela ha ma ọlị", "Kpọmkwem afọ 50", "Na-abụkarị afọ 3, ka ogologo n'ọnọdụ ụfọdụ"], answer: 3, why: "Nduzi IRS na-enye afọ 3 dị ka oge nkịtị, nwere ọnọdụ dị iche." },
          { objective: "O6", q: "AI dere draft ozi ego maka ndị board. Gịnị ka ị ga-eme tupu i zipu ya?", options: ["Zipu ya n'agụghị ya", "Tinyekwuo ọnụ ọgụgụ ka o yie ihe ọma", "Lelee ọnụ ọgụgụ ọ bụla na spreadsheet", "Hichapụ spreadsheet"], answer: 2, why: "AI nwere ike ime mperi n'ọnụ ọgụgụ; gị na-elele ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI na Njikwa Ego",
    questions: [
      { objective: "O1", q: "Kedu ihe AI maara nke ọma n'ọrụ ego?", options: ["Inye mkpebi ụtụ isi ikpeazụ", "Ide formula spreadsheet na ịkọwa okwu", "Ikwe nkwa uru itinye ego", "Ịbịanye aka n'akwụkwọ ụlọ akụ"], answer: 1, why: "AI na-enyere aka na formula na nkọwa, ọ bụghị azịza ụtụ isi ma ọ bụ iwu ikpeazụ." },
      { objective: "O1", q: "Tupu itinye azụmahịa ego n'ime AI, ị kwesịrị:", options: ["Iwepụ nọmba akaụntụ ma jiri akara dochie aha", "Itinye okwuntughe gị", "Itinye nọmba ekwentị ndị na-enye onyinye", "Itinye nọmba Social Security"], answer: 0, why: "Ozi e hichara na-echebe nzuzo." },
      { objective: "O1", q: "\"Customer A\" n'ọnọdụ ezi aha bụ:", options: ["Mperi ide ihe", "Category", "Akara na-echebe nzuzo", "Variance"], answer: 2, why: "Akara na-ezo aha nzuzo." },
      { objective: "O1", q: "Ebee ka ị ga-akwado ajụjụ ụtụ isi?", options: ["irs.gov, ụlọ ọrụ ụtụ isi steeti gị ma ọ bụ onye akaụntụ nwere ikike", "Ihe e dere na soshal midia", "Naanị mkparịta ụka AI", "Ntụle enyi gị"], answer: 0, why: "Isi iyi gọọmentị na ndị ọkachamara na-enye azịza ụtụ isi a pụrụ ịtụkwasị obi." },
      { objective: "O2", q: "Kedu nke bụ category ego na-abata a na-ahụkarị n'otu enyemaka?", options: ["Ọnụ ahịa ngwaahịa", "Mmanụ ụgbọala", "Ụgwọ ụlọ", "Grant"], answer: 3, why: "Grant na onyinye bụ ego na-abata n'otu enyemaka." },
      { objective: "O2", q: "Gịnị bụ azụmahịa ego (transaction)?", options: ["Ụdị budget", "Otu mbata ma ọ bụ mpụta ego", "Fọm ụtụ isi", "Okwuntughe ụlọ akụ"], answer: 1, why: "Ire ihe ma ọ bụ ịkwụ ụgwọ ọ bụla bụ azụmahịa ego." },
      { objective: "O2", q: "Mgbe AI tụrụ aro categories, ị kwesịrị:", options: ["Ịnabata ha niile", "Idozi ndị o mehiere", "Ihichapụ spreadsheet", "Iziga ha ndị ahịa site n'email"], answer: 1, why: "Aro AI chọrọ nlele." },
      { objective: "O2", q: "Ngụkọta categories kwesịrị:", options: ["Ịkarị ngụkọta zuru ezu", "Ịbụ ihe ọ bụla", "Ịtọgbọ chakoo", "Ịha nhata ngụkọta zuru ezu"], answer: 3, why: "Nlele a na-achọpụta ahịrị fọdụrụ ma ọ bụ nke a gụrụ ugboro abụọ." },
      { objective: "O3", q: "Budget bụ:", options: ["Atụmatụ maka ego na-abata na ego na-apụ", "Akaụntụ ụlọ akụ", "Nkwupụta ụtụ isi", "Mbinye ego"], answer: 0, why: "Ọ bụ atụmatụ ego maka otu oge." },
      { objective: "O3", q: "Budget mgbasa ozi bụ $1,000; ihe mere n'ezie bụ $700. Variance bụ:", options: ["$300 karịrị budget", "$1,700", "$300 erughị budget", "$700"], answer: 2, why: "700 - 1,000 = -300, ya mere $300 erughị." },
      { objective: "O3", q: "Gịnị mere a ga-eji kọwaa variance ukwu ọ bụla?", options: ["Ka akụkọ ahụ dị ogologo", "Ọ dịghị mkpa mgbe ọ bụla", "Iji zoo mperi", "Ka ndị na-eme mkpebi mara ihe mere na ihe kpatara ya"], answer: 3, why: "Nkọwa na-eme ka ọnụ ọgụgụ ghọọ mkpebi." },
      { objective: "O4", q: "Izu ole ka amụma mbata na mpụta ego n'ihe ọmụmụ a na-ekpuchi?", options: ["2", "13", "52", "100"], answer: 1, why: "Amụma izu 13 na-ekpuchi ihe dị ka ọnwa atọ." },
      { objective: "O4", q: "Izu kacha ala n'amụma gị na-agwa gị:", options: ["Uru gị niile", "Mgbe ego ga-akacha dị mkpa, ka i wee mee atụmatụ", "Ụgwọ ụtụ isi gị", "Ọ dịghị ihe bara uru"], answer: 1, why: "Ọ na-egosi mgbe ị ga-ebu ụzọ mee ihe." },
      { objective: "O4", q: "Line of credit bụ:", options: ["Ego a kara aka ụlọ akụ na-ekwe ka ị binye mgbe ị chọrọ ya", "Ahịrị spreadsheet", "Ụdị onyinye", "Mwepu ụtụ isi"], answer: 0, why: "O nwere ike ikpuchi oghere ego nke oge nta." },
      { objective: "O5", q: "Kedu ihe AI nwere ike inye aka gosi n'azụmahịa ego gị?", options: ["Lọtrị ị ga-emeri n'ọdịnihu", "Kpọmkwem ụtụ isi ị ga-akwụ", "Ụgwọ nwere ike ịbụ nke a kwụrụ ugboro abụọ", "Okwuntughe ndị ahịa"], answer: 2, why: "AI nwere ike ịhụ usoro dị ka ụgwọ ugboro abụọ." },
      { objective: "O5", q: "Email ngwa ngwa yiri ka ọ si n'aka onye isi gị na-arịọ ka i ziga ego (wire) taa. Ị kwesịrị:", options: ["Ịkwado ya site n'ekwentị na nọmba ị maralarị", "Iziga ya ozugbo", "Ịzaghachi ya na nkọwa ụlọ akụ", "Ịghara ige onye isi ntị ruo mgbe ebighị ebi"], answer: 0, why: "Arịrịọ ịkwụ ụgwọ ngwa ngwa bụ aghụghọ a na-ahụkarị." },
      { objective: "O5", q: "Ebee ka ị nwere ike ịkọ aghụghọ na U.S.?", options: ["Ebe mkparịta ụka ọ bụla n'ịntanetị", "Email onye aghụghọ ahụ", "Ọ dịghị ebe", "ReportFraud.ftc.gov"], answer: 3, why: "FTC na-anakọta akụkọ aghụghọ." },
      { objective: "O6", q: "Ezigbo ozi ego maka ndị board bụ:", options: ["Naanị spreadsheet otu o si dị", "Ahịrịokwu ise doro anya nwere ọnụ ọgụgụ dị mkpa na mkpebi", "Akụkọ nwere peeji 40", "Enweghị ọnụ ọgụgụ ọ bụla"], answer: 1, why: "Ozi dị mkpụmkpụ ma doo anya na-enyere ndị mmadụ aka ime mkpebi." },
      { objective: "O6", q: "Dị ka IRS si kwuo, a ga-edebe ndekọ ụtụ isi ndị ọrụ opekata mpe:", options: ["Otu ọnwa", "Afọ 4", "Otu afọ", "Ọ dịghị oge"], answer: 1, why: "IRS kwuru opekata mpe afọ 4 maka ndekọ ụtụ isi ndị ọrụ." },
      { objective: "O1", q: "Ihe ọmụmụ a na-enye ndụmọdụ itinye ego (investment).", options: ["Eziokwu: zụta ihe AI tụrụ aro", "Eziokwu: tinye ego grant mgbe niile", "Eziokwu: AI na-ahọrọ stock", "Ụgha: hụ ọkachamara nwere ikike maka nke ahụ"], answer: 3, why: "Ihe ọmụmụ a na-akụzi njikwa ego, ọ bụghị ndụmọdụ itinye ego." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [1, 3, 6, 7, 9, 11, 12, 15, 17, 18]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "E wepụrụ ozi nzuzo", objective: "O1", notYet: "Ozi ahụ ka nwere nọmba akaụntụ, nọmba ID ma ọ bụ ezi aha.", meets: "E wepụrụ nọmba akaụntụ na ID niile, ma jiri akara dochie aha.", exceeds: "Nwere ike igosi otu e si lelee mgbakọ AI na spreadsheet." },
      { name: "Categories na ngụkọta", objective: "O2", notYet: "E kewaghị azụmahịa ego, ma ọ bụ ngụkọta adabaghị na ngụkọta zuru ezu.", meets: "Azụmahịa ọ bụla nwere category, SUMIF gbakọrọ nke ọ bụla, ha niile ruru ngụkọta zuru ezu.", exceeds: "Achọpụtara ma dozie categories AI mehiere, ya na ndetu na-ekwu ndị ọ bụ." },
      { name: "Budget na ihe mere n'ezie", objective: "O3", notYet: "Enweghị kọlụm variance, ma ọ bụ a kọwaghị variance ndị kacha ukwuu.", meets: "Variance na pasent o ji dị iche maka category ọ bụla, e kọwakwara atọ kacha ukwuu n'otu ahịrịokwu nke ọ bụla.", exceeds: "Nkọwa ọ bụla na-ekwu ihe a ga-eme banyere ya n'ọnwa na-abịa." },
      { name: "Amụma izu 13", objective: "O4", notYet: "Ego njedebe anaghị aga n'izu na-esote, ma ọ bụ e gosighị izu kacha ala.", meets: "Izu 13 nwere ego na-abata, ego na-apụ na ego njedebe na-aga n'ihu, e gosikwara izu kacha ala.", exceeds: "Nwere atụmatụ maka izu kacha ala." },
      { name: "Ozi ego", objective: "O6", notYet: "Ọ dịghị ya, ọ dị ogologo karịa ka ọ dị mkpa, ma ọ bụ nwere ọnụ ọgụgụ adabaghị na spreadsheet.", meets: "Ahịrịokwu ise: ego batara, ego pụrụ, variance kacha ukwuu, ọnọdụ ego n'ihu na mkpebi, ha niile dabara na spreadsheet.", exceeds: "O doro anya nke ọma nye onye na-amaghị ihe gbasara ego, ma na-ekwu ebe a na-edebe ndekọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu ndị na-emelite budget na ihe mere n'ezie na amụma izu 13 kwa ọnwa ruo ọnwa atọ (nnyocha nsochi)",
      "Ụgwọ a kwụrụ ugboro abụọ, subscription a chefuru ma ọ bụ aghụghọ a chọpụtara ma kwụsị n'ime ụbọchị 60",
      "Ndị nwe ya ma ọ bụ ndị board na-akọ na ha na-enweta ozi ego doro anya kwa ọnwa"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere Google Sheets ma ọ bụ Excel",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Azụmahịa ego otu ọnwa e si n'ụlọ akụ ma ọ bụ ngwa akwụkwọ ego wepụta, ma ọ bụ ozi ọmụmaatụ nke ihe ọmụmụ a",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere oge iji mee spreadsheet"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; meenụ formula SUMIF na amụma n'ihuenyo ọha.",
      "Nye ọnwa ozi ọmụmaatụ e chepụtara echepụta maka ndị na-amụ ihe na-achọghị iji ezi ozi.",
      "Lelee na onye ọ bụla na-amụ ihe wepụrụ nọmba akaụntụ na aha tupu itinye ihe ọ bụla n'ime AI.",
      "Enyela ndụmọdụ ụtụ isi, payroll, iwu ma ọ bụ itinye ego; zipu ajụjụ ndị ahụ na irs.gov, ụlọ ọrụ ụtụ isi steeti ma ọ bụ ọkachamara nwere ikike.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
