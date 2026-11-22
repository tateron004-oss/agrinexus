"use strict";

// Koach Learn course (Igbo translation of shared/ai-project-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-project-management-ig",
  lang: "ig",
  translationOf: "ai-project-management",
  category: "Veterans (military)",
  name: "Njikwa Ọrụ (Project Management) site n'AI",
  skills: "Ide project charter site n'AI, Ikewa ọrụ n'ime WBS, Ime usoro oge nwere milestone, Ikenye ọrụ site na chaatị RACI, Idebe ndekọ ihe egwu, Ide akụkọ ọnọdụ na ihe mmụta",
  outcome: "iji ngwa enyemaka AI hazie ma duzie obere ọrụ (project) site na mmalite ruo njedebe: charter otu peeji, nkewa ọrụ, usoro oge nwere milestone, chaatị RACI, ndekọ ihe egwu, akụkọ ọnọdụ kwa izu na nnyocha ihe mmụta na njedebe, ma na-elele ihe mbụ ọ bụla AI dere n'onwe gị.",
  about: [
    "Ndị na-elekọta ọrụ (project managers) na-ahazi ọrụ, na-achịkọta ndị mmadụ ma na-agwa onye ọ bụla ihe na-eme ruo mgbe ọrụ ahụ gwụrụ. Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot na Google Gemini nwere ike ide akwụkwọ ndị a n'ime nkeji ole na ole, ka i were oge gị kpebie ihe ma lekọta ndị mmadụ.",
    "Ihe ọmụmụ a bụ maka ndị agha ochie (veterans) na-abanye n'ọrụ project na ndụ nkịtị (ọtụtụ edugaworị mmemme agha, ịkpọga ngwa na ndị otu), ndị nọ na mmemme ọzụzụ ọrụ na-achọ ọrụ coordinator ma ọ bụ onye enyemaka project, na onye ọ bụla na-edu project n'ọrụ ma ọ bụ n'obodo.",
    "Ị ga-ahazi otu ezi project ma ọ bụ nke omume site na charter ruo na njedebe. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma nwee ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Site n'enyemaka AI, hazie ezi project ma ọ bụ nke omume nke izu anọ ruo iri na abụọ (dịka ọmụmaatụ ihe ngosi ọrụ n'obodo, ịkwaga ọfịs ma ọ bụ imepe weebụsaịtị): charter otu peeji, nkewa ọrụ (WBS), usoro oge nwere opekata mpe milestone anọ, chaatị RACI, ndekọ ihe egwu nwere ihe egwu ise, otu akụkọ ọnọdụ kwa izu na ụkpụrụ ihe mmụta. Kaa akara n'ebe ọ bụla i doziri AI.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha ochie (veterans) na-abanye n'ọrụ project na ndụ nkịtị, ndị nọ na mmemme ọzụzụ ọrụ na-achọ ọrụ coordinator ma ọ bụ onye enyemaka project, na onye ọ bụla na-edu project n'ọrụ ma ọ bụ n'obodo.",
    startingPoint: "Ọtụtụ edugaworị mmemme agha, ịkpọga ngwa ma ọ bụ ndị otu, ma nwee ike ịhazi ndị mmadụ na ọrụ. Ọtụtụ ejibeghị akwụkwọ project nke ndụ nkịtị dị ka charter, chaatị RACI ma ọ bụ ndekọ ihe egwu, ma ọ bụ jiri AI dee ha.",
    gap: "Ndị were mmadụ n'ọrụ na ndụ nkịtị na-atụ anya ka ndị ọrụ project mee akwụkwọ atụmatụ a na-ejikarị na akụkọ ọnọdụ doro anya. Ndị na-amụ ihe kwesịrị ịhazi project site na charter ruo njedebe site n'ihe mbụ AI dere nke ha lelere n'onwe ha, ka ha nwee ike igosi nka project n'ajụjụ ọnụ na n'ọrụ.",
    constraints: [
      "Oge: nkuzi ihe dị ka nkeji ise nwere obere ọrụ omume",
      "Ngwaọrụ: kọmputa ma ọ bụ ekwentị nwere ngwa enyemaka AI n'efu na spreadsheet",
      "Ozi nzuzo nke onye were gị n'ọrụ ma ọ bụ nke ndị agha adịghị na prompt AI ọ bụla",
      "A ga-elele atụmatụ na nọmba AI; iwu na ụgwọ asambodo na-esi na pmi.org",
      "Okwu ndụ nkịtị dị mfe; a na-akọwa okwu ndị agha, a naghị eche na onye ọ bụla ma ha"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'ngwa AI nwere ike ibu ụzọ were \"Mmalite AI na Obi Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị isi ihe gbasara ezi project ma ọ bụ nke omume", action: "ide charter otu peeji nke na-ekwu ebumnuche, oke ọrụ (scope), sponsor, ego, ụbọchị njedebe na ihe ga-egosi ihe ịga nke ọma", standard: "ma dozie mperi AI ọ bụla ma dee na sponsor kwetara" },
    { id: "O2", condition: "Site na charter gị", action: "ime nkewa ọrụ (WBS) na usoro oge nwere ogologo oge ọrụ, ọrụ ndị dabere n'ibe ha na milestone", standard: "nwere opekata mpe milestone anọ na atụmatụ oge AI e lelere" },
    { id: "O3", condition: "Mgbe e nyere gị isi ọrụ nke project ahụ", action: "iwu chaatị RACI nke na-egosi onye bụ Responsible, Accountable, Consulted na Informed", standard: "nwere naanị otu onye Accountable n'ọrụ ọ bụla na ọrụ kesara nke ọma" },
    { id: "O4", condition: "Mgbe e nyere gị ihe egwu project AI chepụtara", action: "ịtụ ọkwa ihe egwu ise kacha bụrụ eziokwu ma họrọ nzaghachi na onye nwe ya maka nke ọ bụla", standard: "na-eji avoid, reduce, transfer ma ọ bụ accept nke ọma" },
    { id: "O5", condition: "Maka otu izu nke project ahụ", action: "ide akụkọ ọnọdụ ọkara peeji nwere ọnọdụ uhie, odo ma ọ bụ akwụkwọ ndụ n'eziokwu na mkpebi a chọrọ", standard: "ma lelee ụbọchị na nọmba ọ bụla" },
    { id: "O6", condition: "Na njedebe nke project", action: "ime nnyocha ihe mmụta n'enweghị ịta ụta ma mechie project ahụ site n'iji ya tụnyere charter", standard: "na-aza ajụjụ nnyocha anọ niile ma na-echekwa faịlụ ndị ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi project ahụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide project charter site n'AI",
          minutes: 5,
          goal: "Dee charter otu peeji nke na-akọwa ebumnuche project, oke ọrụ ya na ihe ịga nke ọma.",
          text: [
            "Project charter bụ asambodo ọmụmụ nke project. Ọ na-ekwu ihe mere project ahụ ji dị, ihe ọ ga-enye, ihe dị n'ime na n'èzí oke ọrụ ya, onye bụ sponsor, ego na ụbọchị njedebe a tụrụ anya, na otu ị ga-esi mara na ọ gara nke ọma. Ọ dị ka iwu mmemme agha (mission order): ebumnuche, ọnọdụ njedebe, oke.",
            "Nye AI eziokwu ka o dee ihe mbụ: \"Dee project charter otu peeji. Project: ihe ngosi ọrụ maka veterans n'ụlọ obodo na March 15. Ebumnuche: ndị were mmadụ n'ọrụ 30, ndị bịara 200. Ego: $3,000. Sponsor: onye isi ụlọ obodo ahụ. N'èzí oke: nri karịa kọfị.\"",
            "Wee dozie ya. AI nwere ike ichepụta nọmba, ndị metụtara project ma ọ bụ ebumnuche. Eziokwu ọ bụla ga-abụ nke gị. Mee ka sponsor kweta na charter tupu ọrụ amalite; ọ na-egbochi esemokwu e mesịa gbasara ihe project ahụ kwesịrị ime."
          ],
          steps: ["Dee ebumnuche, ihe mgbaru ọsọ, ụbọchị njedebe, ego na sponsor.", "Depụta ihe dị n'ime na n'èzí oke ọrụ.", "Rịọ AI ka o dee charter otu peeji.", "Dozie ihe ọ bụla AI chepụtara.", "Nweta nkwenye sponsor."],
          words: [["Project charter", "obere akwụkwọ na-enye ikike ka project malite ma na-ekwu ebumnuche ya, oke ọrụ ya na oke ya."], ["Scope (oke ọrụ)", "ọrụ project ahụ ga-arụ na nke ọ gaghị arụ."], ["Sponsor", "onye na-akwado ma na-akwado project ahụ n'ikike."], ["Stakeholder", "onye ọ bụla project ahụ metụtara ma ọ bụ nọ n'ime ya."]],
          slides: [
            { title: "Charter bụ iwu mmemme (mission order)", bullets: ["Ebumnuche na ihe mgbaru ọsọ", "Oke ọrụ: ihe dị n'ime na n'èzí", "Sponsor, ego, ụbọchị njedebe, ihe ịga nke ọma"] },
            { title: "AI na-ede site n'eziokwu gị", bullets: ["Nye ya ezi nọmba", "Rịọ maka otu peeji"] },
            { title: "Dozie ma kwado", bullets: ["Wepụ eziokwu a chepụtara", "Sponsor kwetara tupu ọrụ amalite"] }
          ],
          tryIt: "Họrọ ezi project ma ọ bụ nke omume. Dee isi eziokwu ya, mee ka AI dee charter otu peeji, ma kaa akara n'ihe niile i doziri.",
          youCanNow: "ide project charter otu peeji site n'enyemaka AI.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka scope (oke ọrụ) pụtara na project charter?", options: ["Ego project ahụ ga-efu", "Ihe project ahụ ga-eme na nke ọ gaghị eme", "Ndị nọ n'otu ahụ", "Ụbọchị project ahụ ga-agwụ"], answer: 1, why: "Scope na-egosi oke project ahụ: ihe dị n'ime na ihe dị n'èzí." },
            { objective: "O1", q: "Charter AI dere nwere ego ị na-enyeghị ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya n'ihi na ọ dị ka ọ ziri ezi", "Wepụ ahịrị ego n'akwụkwọ niile", "Jiri ezi ego sitere n'aka sponsor dochie ya ma kaa akara na i doziri ya", "Gwa ndị otu ka ha tụọ vootu maka ego"], answer: 2, why: "AI na-eji nkọ jupụta oghere; ezi ego na-esi n'aka sponsor." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ikewa ọrụ na ịhazi oge ya",
          minutes: 6,
          goal: "Gbanwee charter ka ọ bụrụ nkewa ọrụ (WBS) na usoro oge nwere milestone.",
          text: [
            "Work breakdown structure (WBS) na-ekewa project niile n'iberibe ndị pere mpe ruo mgbe iberibe ọ bụla bụ ọrụ otu onye nwere ike ịrụ n'ime ụbọchị ole na ole. Maka ihe ngosi ọrụ: ebe a ga-eme ya, ndị were mmadụ n'ọrụ, mgbasa ozi, ndị ọrụ afọ ofufo, ihe a ga-eme n'ụbọchị ahụ, nsochi; nke ọ bụla kewara n'ọrụ.",
            "Jụọ AI: \"Site na charter a, mee WBS nwere usoro na ọrụ. Wee tụọ ogologo oge ọrụ ọ bụla ga-ewe ma depụta ọrụ ndị dabere n'ọrụ ndị ọzọ.\" Ọrụ ndị dabere n'ibe ha dị mkpa: ị pụghị ibipụta flaya ruo mgbe e kwadoro ebe na ụbọchị.",
            "Tinye ya n'usoro oge na spreadsheet ma ọ bụ ngwa n'efu, na-amalite na ụbọchị njedebe na-alaghachi azụ. Kaa akara milestone, ya bụ isi ebe nlele dị ka \"e nwetala ebe\" ma ọ bụ \"ndị were mmadụ n'ọrụ 20 ekwetala\". Jiri ahụmahụ gị lelee atụmatụ oge AI; ọ na-echekarị na ihe ga-adị ngwa karịa ka ọ dị."
          ],
          steps: ["Rịọ AI maka WBS nwere usoro na ọrụ.", "Kewaa ọrụ ọ bụla karịrị ụbọchị ole na ole.", "Tinye ogologo oge na ọrụ ndị dabere n'ibe ha.", "Hazie oge site na ụbọchị njedebe na-alaghachi azụ.", "Kaa akara opekata mpe milestone anọ."],
          words: [["WBS", "work breakdown structure: project niile e kewara n'obere ọrụ."], ["Dependency (ọrụ dabere n'ọzọ)", "ọrụ na-enweghị ike ịmalite ruo mgbe ọrụ ọzọ gwụrụ."], ["Milestone", "isi ebe nlele n'ime project."]],
          slides: [
            { title: "Nkewa ọrụ (WBS)", bullets: ["Project niile gaa n'usoro, wee gaa n'ọrụ", "Ọrụ ọ bụla: otu onye, ụbọchị ole na ole"] },
            { title: "Ogologo oge na ọrụ dabere n'ibe ha", bullets: ["Oge ọrụ ọ bụla ga-ewe", "Ihe ga-ebu ụzọ gwụ"] },
            { title: "Usoro oge na milestone", bullets: ["Malite na ụbọchị njedebe laghachi azụ", "Kaa akara isi ebe nlele", "Atụmatụ oge AI na-adị ngwa karịa ka ọ dị"] }
          ],
          tryIt: "Jiri AI mee WBS maka project gị, wee wuo usoro oge dị mfe na spreadsheet nwere ogologo oge, ọrụ dabere n'ibe ha na opekata mpe milestone anọ.",
          youCanNow: "ikewa project n'ọrụ ma hazie oge ha nwere milestone.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ milestone?", options: ["Isi ebe na-egosi na nnukwu akụkụ agwụla", "Ọrụ kacha ogologo n'usoro oge", "Nzukọ ya na sponsor", "Ihe egwu mere eme"], answer: 0, why: "Milestone na-egosi isi ihe e mezuru, dị ka \"e nwetala ebe\"." },
            { objective: "O2", q: "WBS gị nwere ọrụ a kpọrọ \"Hazie mmemme ahụ\" nke ga-ewe izu isii. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ bụrụ otu ọrụ", "Wepụ ya n'atụmatụ", "Nye ya sponsor", "Kewaa ya n'obere ọrụ otu onye nwere ike ịrụ n'ime ụbọchị ole na ole"], answer: 3, why: "Ọrụ WBS kwesịrị ịdị obere nke na otu onye ga-arụ ya n'ime ụbọchị ole na ole." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ikenye ọrụ site na chaatị RACI",
          minutes: 5,
          goal: "Wuo chaatị RACI ka onye ọ bụla mara onye na-arụ, onye na-ekpebi na onye a na-agwa.",
          text: [
            "Mgbagwoju anya gbasara onye na-eme gịnị na-emebi project. Chaatị RACI na-edepụta ọrụ n'akụkụ, ndị mmadụ n'elu, ma na-akaa akara n'igbe ọ bụla: R maka Responsible (na-arụ ọrụ ahụ), A maka Accountable (nwe ihe si na ya pụta ma bịanye aka; naanị otu n'ọrụ ọ bụla), C maka Consulted (na-enye echiche) na I maka Informed (a na-agwa ihe na-eme).",
            "Jụọ AI: \"Mee chaatị RACI maka ọrụ na ọrụ ndị a: [ọrụ], [ndị mmadụ ma ọ bụ ọrụ ha].\" Wee lelee: ọrụ ọ bụla ọ nwere naanị otu A? Onye ọ bụla ọ nwere R karịrị akarị? Ọ dị onye a na-ajụ (Consulted) maka ihe niile, na-eme ka ihe nwayọọ?",
            "Kesaa RACI ahụ ndị otu na sponsor. Mgbe ajụjụ biara, dị ka onye na-akwado flaya, gosi chaatị ahụ."
          ],
          steps: ["Depụta isi ọrụ na ndị mmadụ ma ọ bụ ọrụ ha.", "Rịọ AI ka o dee chaatị RACI.", "Lelee na ọrụ ọ bụla nwere naanị otu A.", "Kesaa R nke ọma ka o buru onye ọ bụla ibu karịa.", "Kesaa ya ndị otu na sponsor."],
          words: [["Chaatị RACI", "tebụl na-egosi onye bụ Responsible, Accountable, Consulted na Informed maka ọrụ ọ bụla."], ["Accountable", "otu onye nwe ihe si n'ọrụ pụta ma bịanye aka."]],
          slides: [
            { title: "RACI", bullets: ["R: Responsible, na-arụ ọrụ ahụ", "A: Accountable, nwe ya; naanị otu", "C: Consulted; I: Informed"] },
            { title: "Lelee chaatị ahụ", bullets: ["Naanị otu A n'ọrụ ọ bụla", "R ebughị onye ọ bụla ibu karịa", "A naghị ajụ onye ọ bụla maka ihe niile"] },
            { title: "Jiri ya", bullets: ["Kesaa ndị otu na sponsor", "Gosi ya mgbe ajụjụ biara"] }
          ],
          tryIt: "Mee ka AI dee chaatị RACI maka isi ọrụ project gị. Dozie ya ka ọrụ ọ bụla nwee naanị otu A ma ọrụ kesaa nke ọma.",
          youCanNow: "iwu na ilele chaatị RACI nke na-eme ka ọrụ onye ọ bụla doo anya.",
          quickCheck: [
            { objective: "O3", q: "Na chaatị RACI, gịnị ka \"C\" pụtara?", options: ["Completed (agwụla)", "Consulted: a na-ajụ ya echiche tupu mkpebi", "Controlled: na-arụ ọrụ niile", "Cancelled (a kagburu)"], answer: 1, why: "Ndị Consulted na-enye echiche tupu ọrụ ma ọ bụ mkpebi." },
            { objective: "O3", q: "A kaara mmadụ abụọ akara Accountable n'otu ọrụ. Gịnị ka ị ga-eme?", options: ["Họrọ otu onye ka ọ bụrụ Accountable", "Hapụ ha abụọ ka ọrụ gwụ", "Kaa ha abụọ akara Informed", "Wepụ ọrụ ahụ"], answer: 0, why: "Ọrụ ọ bụla chọrọ naanị otu onye Accountable nwe ihe si na ya pụta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi project ahụ",
        questions: [
          { objective: "O1", q: "Gịnị ka project charter na-akọwa?", options: ["Naanị nri ehihie ndị otu ga-eri", "Akwụkwọ ụtụ isi ụlọ ọrụ ahụ", "Ebumnuche project, oke ọrụ, sponsor, ego, ụbọchị njedebe na ihe ịga nke ọma", "Ọrụ ọ bụla n'uju"], answer: 2, why: "Charter na-atọ ntọala project ahụ." },
          { objective: "O1", q: "AI tinyere ebumnuche \"ndị were mmadụ n'ọrụ 100\" na charter gị, mana i kwuru 30. Gịnị ka ị ga-eme?", options: ["Dozie ya ka ọ bụrụ ezi ebumnuche gị", "Hapụ ya", "Kee ha n'etiti", "Hichapụ charter ahụ"], answer: 0, why: "Eziokwu ọ bụla na charter ga-abụ nke gị." },
          { objective: "O2", q: "Dependency (ọrụ dabere n'ọzọ) bụ:", options: ["Onye otu", "Ahịrị ego", "Milestone", "Ọrụ na-enweghị ike ịmalite ruo mgbe ọrụ ọzọ gwụrụ"], answer: 3, why: "Ọrụ ndị dabere n'ibe ha na-ekpebi usoro ọrụ." },
          { objective: "O3", q: "Mmadụ ole kwesịrị ịbụ Accountable (A) maka otu ọrụ na chaatị RACI?", options: ["Onye ọ bụla", "Naanị otu", "Ọ dịghị onye", "Opekata mpe ise"], answer: 1, why: "Otu onye nwe ya na-egbochi mgbagwoju anya." },
          { objective: "O2", q: "AI chere na ịchọta ebe ga-ewe otu awa. Dabere n'ihe ọmụmụ a, ị ga:", options: ["Nabata ya", "Jiri ahụmahụ gị lelee ya; atụmatụ oge AI na-adị ngwa karịa ka ọ dị", "Mee ya efu", "Hapụ ịhazi oge"], answer: 1, why: "Jiri uche gị kpebie ogologo oge." }
        ]
      }
    },
    {
      name: "Isi 2: Iduzi na imechi project ahụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Idebe ndekọ ihe egwu",
          minutes: 5,
          goal: "Chọpụta, tụọ ọkwa ma hazie nzaghachi maka ihe egwu project site n'enyemaka AI.",
          text: [
            "Ihe egwu (risk) bụ ihe nwere ike ime ma metụta project ahụ. Ndekọ ihe egwu (risk register) na-edepụta ihe egwu ọ bụla, ka o nwere ike isi mee, otu mmetụta ya ga-esi njọ, atụmatụ nzaghachi na onye nwe ya na-eche ya nche.",
            "Jụọ AI: \"Depụta ihe egwu iri maka project a [tinye charter], tụọ ohere na mmetụta dị ka low, medium ma ọ bụ high, ma tụọ aro nzaghachi maka nke ọ bụla.\" Nzaghachi: zere ya (avoid), belata ya (reduce), nyefee ya (transfer, dịka ọmụmaatụ inshọransị ma ọ bụ nkwekọrịta) ma ọ bụ nabata ya (accept) nwere atụmatụ ndabere.",
            "Debe naanị ihe egwu ndị bụ eziokwu maka project gị, tinye ndị AI hapụrụ, ma lelee ndekọ ahụ kwa izu. Ndị na-ahazi agha na-akpọ nke a iche echiche banyere alaka na ihe ga-esote (branches and sequels); ndị nkịtị na-akpọ ya njikwa ihe egwu."
          ],
          steps: ["Rịọ AI ka o chepụta ihe egwu site na charter gị.", "Tụọ ohere na mmetụta.", "Họrọ nzaghachi: avoid, reduce, transfer ma ọ bụ accept.", "Nye ihe egwu ọ bụla onye nwe ya.", "Lelee ndekọ ahụ kwa izu."],
          words: [["Ihe egwu (risk)", "ihe nwere ike ime ma metụta project ahụ."], ["Ndekọ ihe egwu (risk register)", "ndepụta ihe egwu nwere ọkwa, nzaghachi na ndị nwe ha."], ["Mitigation", "nzọụkwụ iji belata ohere ma ọ bụ mmetụta nke ihe egwu."]],
          slides: [
            { title: "Kọlụm ndekọ ihe egwu", bullets: ["Ihe egwu, ohere, mmetụta", "Nzaghachi na onye nwe ya"] },
            { title: "Nzaghachi anọ", bullets: ["Zere ya (avoid) ma ọ bụ belata ya (reduce)", "Nyefee ya (transfer: inshọransị, nkwekọrịta)", "Nabata ya (accept) nwere atụmatụ ndabere"] },
            { title: "Mee ka ọ bụrụ eziokwu", bullets: ["Wepụ ihe egwu na-emetụtaghị gị", "Tinye ihe AI hapụrụ", "Lelee kwa izu"] }
          ],
          tryIt: "Mee ka AI chepụta ihe egwu maka project gị. Debe ise kacha bụrụ eziokwu, tụọ ọkwa ha, họrọ nzaghachi ma nye ha ndị nwe ha.",
          youCanNow: "iwu na idebe ndekọ ihe egwu site n'enyemaka AI.",
          quickCheck: [
            { objective: "O4", q: "Kedu nzaghachi ihe egwu pụtara ime ka ihe egwu ghara ime ngwa ngwa ma ọ bụ mebie obere?", options: ["Avoid (zere)", "Transfer (nyefee)", "Reduce (belata)", "Accept (nabata)"], answer: 2, why: "Ibelata na-eme ka ohere ma ọ bụ mmebi nke ihe egwu dị ala." },
            { objective: "O4", q: "AI depụtara ihe egwu 25 nwere ike ime maka ihe ngosi ọrụ gị. Gịnị ka ị ga-eme?", options: ["Tinye 25 niile n'ndekọ", "Leghara ha niile anya", "Họrọ nke mbụ AI depụtara", "Debe ise kacha bụrụ eziokwu, tụọ ọkwa ha ma nye ha ndị nwe ha"], answer: 3, why: "Ndekọ bara uru na-elekwasị anya n'ihe egwu kacha bụrụ eziokwu, nke ọ bụla nwere nzaghachi na onye nwe ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ide akụkọ ọnọdụ ndị mmadụ na-agụ",
          minutes: 5,
          goal: "Dee obere akụkọ ọnọdụ kwa izu nwere ọnọdụ uhie, odo ma ọ bụ akwụkwọ ndụ doro anya.",
          text: [
            "Akụkọ ọnọdụ (status report) na-agwa sponsor na ndị otu ihe na-eme. Mee ka ọ bụrụ ọkara peeji: ọnọdụ n'ozuzu (akwụkwọ ndụ na-aga nke ọma, odo nọ n'ihe egwu, uhie apụọla n'ụzọ), ihe e mere n'izu a, ihe na-esote, ihe egwu na nsogbu, na mkpebi a chọrọ n'aka sponsor.",
            "Tinye mmelite usoro oge gị na ndetu gị n'AI ma jụọ: \"Dee akụkọ ọnọdụ kwa izu ọkara peeji nwere agba ọnọdụ n'ozuzu, ihe e mezuru, nzọụkwụ na-esote, ihe egwu na nsogbu, na mkpebi a chọrọ. Kwuo ya ozugbo.\"",
            "Kwuo eziokwu banyere odo na uhie. Akụkọ ọjọọ n'oge bụ onyinye: ọ na-enye sponsor oge inyere aka. Izo nsogbu ruo ụbọchị njedebe bụ ụzọ kacha ngwa isi tufuo ntụkwasị obi. Lelee ụbọchị na nọmba ọ bụla AI dere."
          ],
          steps: ["Melite usoro oge na ndekọ ihe egwu.", "Tinye ndetu na mmelite n'AI.", "Rịọ maka akụkọ ọkara peeji nwere agba ọnọdụ.", "Lelee ụbọchị na nọmba ọ bụla.", "Ziga ya n'otu ụbọchị kwa izu."],
          words: [["Akụkọ ọnọdụ (status report)", "mmelite a na-enye mgbe niile gbasara ọganihu, ihe egwu na mkpa project."], ["Issue (nsogbu)", "nsogbu na-eme ugbu a, n'adịghị ka ihe egwu nwere ike ime."], ["RAG status", "red, amber (odo) ma ọ bụ green: ngosi ngwa ngwa nke ahụike project."]],
          slides: [
            { title: "Ọkara peeji", bullets: ["Agba ọnọdụ: akwụkwọ ndụ, odo, uhie", "Ihe e mere n'izu a na nzọụkwụ na-esote", "Ihe egwu, nsogbu, mkpebi a chọrọ"] },
            { title: "AI na-ede site na ndetu gị", bullets: ["Tinye mmelite usoro oge", "Rịọ ka o kwuo ya ozugbo", "Lelee ụbọchị na nọmba"] },
            { title: "Akụkọ ọjọọ n'oge", bullets: ["Na-enye sponsor oge inyere aka", "Izo nsogbu na-eme ka ntụkwasị obi furu"] }
          ],
          tryIt: "Site n'enyemaka AI, dee akụkọ ọnọdụ kwa izu maka project gị (izu 3 n'ezie ma ọ bụ nke e chepụtara). Tinye agba ọnọdụ n'eziokwu na opekata mpe otu mkpebi a chọrọ.",
          youCanNow: "ide akụkọ ọnọdụ kwa izu doro anya ma bụrụ eziokwu site n'enyemaka AI.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ọnọdụ odo na-apụtakarị?", options: ["Project ahụ agwụla", "E nwere nsogbu nwere ike imetụta atụmatụ ma ọ bụrụ na e dozighị ya", "Ihe niile na-aga nke ọma", "A kagburu project ahụ"], answer: 1, why: "Odo bụ ịdọ aka na ntị: ọ nọ n'ihe egwu mana a ka nwere ike idozi ya." },
            { objective: "O5", q: "Ị chọrọ ka sponsor kwado ego ọzọ n'izu a. Gịnị ka ị ga-eme n'akụkọ ọnọdụ?", options: ["Hapụ ya ka akụkọ ahụ nọgide na akwụkwọ ndụ", "Tinye ya na peeji nke atọ", "Kwuo ya naanị ihu na ihu n'ọnwa na-abịa", "Depụta ya nke ọma n'okpuru mkpebi a chọrọ"], answer: 3, why: "Mkpebi a chọrọ kwesịrị ịdị mfe ịhụ ka sponsor nwee ike ime ihe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Imechi project na ịchịkọta ihe mmụta",
          minutes: 5,
          goal: "Mechie project nke ọma ma mee nnyocha ihe mmụta.",
          text: [
            "Ọtụtụ project na-akwụsị otu a. Imechi ya nke ọma na-akwado na e mezuru ebumnuche (tụnyere ya na charter), na-enyefe ihe ọ bụla na-aga n'ihu, na-akwụ ụgwọ ikpeazụ, na-ekele ndị otu ma na-echekwa faịlụ ebe ndị ọzọ ga-ahụ ha.",
            "Nnyocha ihe mmụta (lessons learned), dị ka nnyocha mgbe mmemme gachara (after-action review), na-ajụ: gịnị ka anyị zubere, gịnị mere, gịnị kpatara ya, gịnị ka anyị kwesịrị ime n'ụzọ ọzọ oge ọzọ? Nakọta echiche n'aka onye ọ bụla, gụnyere ihe gara nke ọma.",
            "AI nwere ike ịhazi echiche ndị ahụ: \"Kpokọta okwu ihe mmụta ndị a n'isiokwu ma dee ndụmọdụ atọ maka project ndị ga-abịa.\" Mee ka ọ bụrụ n'enweghị ịta ụta, lekwasị anya n'usoro, ma lelee na nchịkọta ahụ ziri ezi. Ọ bụrụ na ị chọrọ ito na njikwa project, Project Management Institute (PMI) na-enye asambodo dị ka CAPM, PMP na PMI-CPMAI gbasara AI; lelee pmi.org maka ihe a chọrọ na ụgwọ ugbu a."
          ],
          steps: ["Tụnyere ihe si na ya pụta na ebumnuche charter.", "Nyefee ọrụ na-aga n'ihu ma kwụọ ụgwọ ikpeazụ.", "Mee nnyocha ihe mmụta n'enweghị ịta ụta.", "Jiri AI kpokọta okwu ma dee ndụmọdụ mbụ.", "Chekwaa faịlụ niile ma kele ndị otu."],
          words: [["Closeout (mmechi)", "njedebe project n'usoro kwesịrị ekwesị."], ["Ihe mmụta (lessons learned)", "ihe ndị otu mụtara nke kwesịrị ịgbanwe otu a ga-esi duzie project ndị ga-abịa."], ["After-action review", "nlegharị anya azụ nwere usoro: e zubere, mere, ihe kpatara, ihe a ga-agbanwe."]],
          slides: [
            { title: "Mechie ya nke ọma", bullets: ["Tụnyere ihe si na ya pụta na charter", "Nyefee, kwụọ ụgwọ, chekwaa faịlụ", "Kele ndị otu"] },
            { title: "Ihe mmụta", bullets: ["E zubere, mere, ihe kpatara, ihe a ga-agbanwe", "Ihe gara nke ọma, kwa", "N'enweghị ịta ụta"] },
            { title: "Too n'ọrụ gị", bullets: ["Asambodo PMI: CAPM, PMP, PMI-CPMAI", "Lelee pmi.org maka iwu na ụgwọ ugbu a"] }
          ],
          sources: [{ name: "Project Management Institute: asambodo (certifications)", url: "https://www.pmi.org/certifications" }],
          tryIt: "Ọrụ ikpeazụ: mezuo atụmatụ project gị nwere charter, WBS, usoro oge nwere milestone, RACI, ndekọ ihe egwu na otu akụkọ ọnọdụ, wee dee ụkpụrụ ihe mmụta nwere ajụjụ nnyocha anọ ahụ. Kaa akara n'ebe ọ bụla i doziri AI.",
          youCanNow: "ịhazi, iduzi na imechi project site n'iji AI dee akwụkwọ mbụ mgbe gị onwe gị na-ekpebi ihe.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ebumnuche nnyocha ihe mmụta?", options: ["Ịchọta onye a ga-ata ụta", "Ime ka usoro ka mma maka project na-esote", "Imechi project n'enweghị akwụkwọ", "Inye ihe nrite"], answer: 1, why: "Ihe mmụta enweghị ịta ụta ma na-elekwasị anya n'ihe a ga-agbanwe oge ọzọ." },
            { objective: "O6", q: "Project ahụ agwụla. Gịnị ka ị ga-eme tupu i kwuo na e mechiela ya?", options: ["Hichapụ faịlụ project ahụ", "Malite project na-esote ozugbo", "Tụnyere ihe si na ya pụta na charter ma chekwaa faịlụ", "Ziga naanị ozi ekele"], answer: 2, why: "Mmechi na-elele ihe si na ya pụta megide charter ma chekwaa ndekọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iduzi na imechi project ahụ",
        questions: [
          { objective: "O4", q: "Gịnị bụ ọdịiche dị n'etiti ihe egwu (risk) na nsogbu (issue)?", options: ["Ọ dịghị ọdịiche", "Nsogbu na-adị mma mgbe niile", "Ihe egwu bụ naanị maka ego", "Ihe egwu nwere ike ime; nsogbu na-eme ugbu a"], answer: 3, why: "Ihe egwu nwere ike ime; nsogbu bụ ihe na-eme ugbu a." },
          { objective: "O4", q: "Ịzụ inshọransị megide mfu nwere ike ime bụ kedu nzaghachi ihe egwu?", options: ["Transfer (nyefee)", "Avoid (zere)", "Accept (nabata)", "Ignore (leghara anya)"], answer: 0, why: "Inshọransị na-ebufe mmetụta ahụ n'aka onye ọzọ." },
          { objective: "O5", q: "O yikarịrị ka project gị ga-agafe otu milestone. Kedu ọnọdụ akụkọ gị kwesịrị igosi?", options: ["Akwụkwọ ndụ ka onye ọ bụla ghara ichegbu onwe ya", "Enweghị ọnọdụ", "Odo ma ọ bụ uhie, n'eziokwu", "Odo mmanya (purple)"], answer: 2, why: "Akụkọ ọjọọ n'oge na-enye sponsor ohere inyere aka." },
          { objective: "O6", q: "Nnyocha ihe mmụta kwesịrị ịbụ:", options: ["Ịchọ onye a ga-achụ n'ọrụ", "Ihe a na-awụfe", "Naanị banyere ihe gara njọ", "N'enweghị ịta ụta ma lekwasị anya n'usoro"], answer: 3, why: "Nnyocha n'enweghị ịta ụta na-enweta echiche n'eziokwu." },
          { objective: "O6", q: "Ebee ka ị ga-elele ihe a chọrọ na ụgwọ asambodo PMI ugbu a?", options: ["Ọgbakọ ọ bụla n'ịntanetị", "Nkọ AI", "pmi.org", "Flaya"], answer: 2, why: "Ihe a chọrọ n'ikike na-agbanwe; lelee ebe o si." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Njikwa Ọrụ (Project Management) site n'AI",
    questions: [
      { objective: "O1", q: "Isi ọrụ onye na-elekọta project bụ:", options: ["Ịrụ ọrụ niile naanị ya", "Ịhazi ọrụ, ịchịkọta ndị mmadụ na ịgwa onye ọ bụla ihe na-eme", "Naanị ịkwado ego", "Ide koodu"], answer: 1, why: "Ndị PM na-ahazi, na-achịkọta ma na-ekwurịta okwu." },
      { objective: "O1", q: "N'ihe ọmụmụ a, ọrụ AI bụ:", options: ["Ide akwụkwọ mbụ mgbe ị na-ekpebi ihe", "Ime mkpebi niile", "Ịnọchi sponsor", "Ịkwado ego"], answer: 0, why: "AI na-ede ihe mbụ; PM na-ekpebi." },
      { objective: "O1", q: "Charter yiri kedu akwụkwọ ndị agha?", options: ["Fọm ezumike", "Ndepụta uwe agha", "Iwu mmemme (mission order)", "Akwụkwọ ụgwọ ọnwa"], answer: 2, why: "Ha abụọ na-enye ebumnuche, ọnọdụ njedebe na oke." },
      { objective: "O1", q: "\"Nri karịa kọfị\" e depụtara dị ka n'èzí oke ọrụ pụtara:", options: ["Project ahụ agaghị enye ya", "Ọ bụ isi ebumnuche", "Ọ bụ ihe egwu", "Ọ bụ milestone"], answer: 0, why: "Ọrụ dị n'èzí oke abụghị akụkụ project ahụ." },
      { objective: "O1", q: "Onye kwesịrị ikwenye na charter tupu ọrụ amalite?", options: ["Ọ dịghị onye", "Naanị AI", "Onye ọrụ ọ bụla", "Sponsor"], answer: 3, why: "Nkwenye sponsor na-egbochi esemokwu e mesịa." },
      { objective: "O2", q: "WBS na-ekewa project n'ime:", options: ["Naanị ahịrị ego", "Obere ọrụ otu onye nwere ike ịrụ n'ime ụbọchị ole na ole", "Foto ndị otu", "Ọnụ ụlọ ọfịs"], answer: 1, why: "Obere ọrụ dị mfe ịhazi na isochi." },
      { objective: "O2", q: "Ị pụghị ibipụta flaya ruo mgbe e kwadoro ebe. Nke a bụ:", options: ["Milestone", "Dependency (ọrụ dabere n'ọzọ)", "Sponsor", "Nzaghachi ihe egwu"], answer: 1, why: "Otu ọrụ dabere n'ọrụ ọzọ ịgwụ." },
      { objective: "O2", q: "\"Ndị were mmadụ n'ọrụ 20 ekwetala\" bụ ezigbo ọmụmaatụ nke:", options: ["Ogologo oge ọrụ", "Ọrụ RACI", "Agba ọnọdụ", "Milestone"], answer: 3, why: "Milestone bụ isi ebe nlele." },
      { objective: "O2", q: "Ụzọ kacha mma isi wuo usoro oge na-abụkarị:", options: ["Ịmalite na ụbọchị njedebe na-alaghachi azụ", "Ịkọ nkọ", "Ịmalite naanị na ọrụ ikpeazụ", "Ịhapụ ụbọchị"], answer: 0, why: "Ịlaghachi azụ na-egosi ihe ga-amalite mgbe ọ bụla." },
      { objective: "O3", q: "Na RACI, \"R\" pụtara:", options: ["Retired (lara ezumike nka)", "Naanị onye nyocha", "Responsible: na-arụ ọrụ ahụ", "Rejected (a jụrụ)"], answer: 2, why: "R bụ onye na-arụ ọrụ ahụ." },
      { objective: "O3", q: "Na RACI, \"I\" pụtara:", options: ["In charge (na-achị)", "Inspector (onye nyocha)", "Ignored (a leghaara anya)", "Informed: a na-agwa ihe na-eme"], answer: 3, why: "Ndị Informed na-enweta mmelite." },
      { objective: "O3", q: "Chaatị RACI na-egosi otu onye nwere R n'ọrụ 15. Ị ga:", options: ["Tinyekwuo ya R", "Wepụ chaatị ahụ", "Kesaa ọrụ ahụ ọzọ nke ọma", "Leghara ya anya"], answer: 2, why: "Ndị ibu karịrị na-eme ka project nwayọọ." },
      { objective: "O4", q: "Ndekọ ihe egwu nwere:", options: ["Naanị ego", "Ihe egwu, ohere, mmetụta, nzaghachi na onye nwe ya", "Ụbọchị ọmụmụ ndị otu", "Nyocha ndị ahịa"], answer: 1, why: "Kọlụm ndị a na-eme ka e nwee ike ijikwa ihe egwu." },
      { objective: "O4", q: "Ịgbanwe atụmatụ ka ihe egwu ghara inwe ike ime bụ kedu nzaghachi?", options: ["Avoid (zere)", "Transfer (nyefee)", "Accept (nabata)", "Report (kọọ)"], answer: 0, why: "Izere na-ewepụ ihe egwu ahụ." },
      { objective: "O4", q: "Ugboro ole ka a ga-elele ndekọ ihe egwu?", options: ["Ọ dịghị mgbe", "Otu ugboro na njedebe", "Kwa izu", "Kwa afọ iri"], answer: 2, why: "Ihe egwu na-agbanwe ka project na-aga n'ihu." },
      { objective: "O5", q: "Akụkọ ọnọdụ kwesịrị ịdị ihe dị ka:", options: ["Ọkara peeji", "Peeji iri ise", "Otu okwu", "Ogologo dịka o kwere mee"], answer: 0, why: "A na-agụ akụkọ dị mkpụmkpụ." },
      { objective: "O5", q: "Ọnọdụ akwụkwọ ndụ pụtara:", options: ["Apụọla n'ụzọ", "A kagburu ya", "A maghị", "Na-aga nke ọma"], answer: 3, why: "Akwụkwọ ndụ na-egosi na project na-aga nke ọma." },
      { objective: "O5", q: "Tupu i ziga akụkọ ọnọdụ AI dere, ị ga:", options: ["Tinyekwuo agba", "Lelee ụbọchị na nọmba ọ bụla", "Wepụ akụkụ mkpebi", "Ziga ya n'agụghị ya"], answer: 1, why: "AI nwere ike ime mperi n'nkọwa." },
      { objective: "O6", q: "Nnyocha ihe mmụta na-ajụ:", options: ["Onye a ga-ata ụta", "Ihe anyị zubere, ihe mere, ihe kpatara ya na ihe a ga-agbanwe", "Otu esi ezo mperi", "Ọ dịghị ihe"], answer: 1, why: "Ọ yiri nnyocha mgbe mmemme gachara (after-action review)." },
      { objective: "O6", q: "Mmechi kwesịrị ekwesị gụnyere:", options: ["Ịhapụ ya pụọ", "Ihichapụ ndekọ niile", "Ịmalite project ọhụrụ n'enweghị nnyocha", "Ịtụnyere ihe si na ya pụta na charter na ichekwa faịlụ"], answer: 3, why: "Imechi nke ọma na-echekwa uru na ihe mmụta." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 5, 7, 9, 11, 12, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Charter", objective: "O1", notYet: "Ebumnuche, oke ọrụ, sponsor, ụbọchị njedebe ma ọ bụ ihe ịga nke ọma adịghị, ma ọ bụ nkọ AI ka dị n'ime ya.", meets: "Otu peeji nwere akụkụ niile, ma kaa akara n'ebe ọ bụla e doziri AI.", exceeds: "Ọ na-edepụtakwa ihe dị n'èzí oke ọrụ na otu a ga-esi tụọ ihe ịga nke ọma." },
      { name: "WBS na usoro oge", objective: "O2", notYet: "Ọrụ buru ibu nke ukwuu, ma ọ bụ milestone erughị anọ.", meets: "Obere ọrụ, ọrụ dabere n'ibe ha na opekata mpe milestone anọ, ma lelee atụmatụ oge AI.", exceeds: "E wuru usoro oge site na ụbọchị njedebe na-alaghachi azụ, nwere oge ndabere." },
      { name: "Chaatị RACI", objective: "O3", notYet: "Otu ọrụ enweghị onye Accountable ma ọ bụ nwere karịa otu.", meets: "Naanị otu A n'ọrụ ọ bụla na ọrụ kesara n'ụzọ kwesịrị ekwesị.", exceeds: "Ọ na-edekwa onye a ga-ajụ tupu isi mkpebi." },
      { name: "Ndekọ ihe egwu", objective: "O4", notYet: "Ihe egwu erughị ise, ma ọ bụ enweghị nzaghachi ma ọ bụ ndị nwe ha.", meets: "Ihe egwu ise bụ eziokwu e tụrụ ọkwa ha, nke ọ bụla nwere nzaghachi na onye nwe ya.", exceeds: "Ọ na-egosi mgbe a ga-elele ihe egwu ọ bụla na ihe ga-eme ka a malite ime ihe." },
      { name: "Akụkọ ọnọdụ", objective: "O5", notYet: "Agba ọnọdụ abụghị eziokwu, ma ọ bụ e leleghị ụbọchị na nọmba.", meets: "Ọkara peeji nwere agba n'eziokwu, ọganihu, nzọụkwụ na-esote na mkpebi a chọrọ.", exceeds: "Sponsor nwere ọrụ n'aka nwere ike ime ihe site na ya n'ime ihe na-erughị otu nkeji." },
      { name: "Mmechi na ihe mmụta", objective: "O6", notYet: "Enweghị ụkpụrụ ihe mmụta, ma ọ bụ ọ na-ata ndị mmadụ ụta.", meets: "Ụkpụrụ n'enweghị ịta ụta nwere ajụjụ nnyocha anọ ahụ.", exceeds: "Ọ na-ahazikwa otu a ga-esi tụnyere ihe si na ya pụta na charter na ebe a ga-echekwa faịlụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe jiri atụmatụ ahụ duzie ezi project n'ọrụ ma ọ bụ n'obodo (nnyocha nsochi)",
      "Ndị na-amụ ihe rịọrọ ọrụ project coordinator ma ọ bụ onye enyemaka n'ime ụbọchị 90",
      "Ndị na-amụ ihe malitere ụzọ asambodo njikwa project ma ọ bụ ihe ọmụmụ Koach Learn ọzọ n'ime ụbọchị 30",
      "Ndị na-amụ ihe gafere ọrụ ikpeazụ site na rubric"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ ekwentị nwere ịntanetị",
      "Ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Spreadsheet n'efu dị ka Google Sheets ma ọ bụ Microsoft Excel",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge iji mezuo atụmatụ project ahụ"
    ],
    facilitatorNotes: [
      "Rịọ onye ọ bụla na-amụ ihe ka ọ họrọ ezi project ma ọ bụ nke obodo n'oge ka ọrụ ọ bụla wuo n'otu atụmatụ ahụ.",
      "Nyere veterans aka ịkọwa ahụmahụ agha ha (mission orders, ịkpọga ngwa) n'okwu project ndụ nkịtị.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye ozi nzuzo nke onye were ha n'ọrụ ma ọ bụ nke ndị agha n'ngwa AI.",
      "Lelee na ndị na-amụ ihe kaara akara n'ebe ha doziri AI; nke a bụ isi nka ndị were mmadụ n'ọrụ chọrọ ịhụ.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
