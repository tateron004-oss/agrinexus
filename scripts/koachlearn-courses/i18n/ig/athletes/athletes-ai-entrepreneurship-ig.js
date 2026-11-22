"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-entrepreneurship.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-entrepreneurship-ig",
  lang: "ig",
  translationOf: "athletes-ai-entrepreneurship",
  category: "Athletes",
  name: "Ịmalite Azụmahịa site n'AI maka Ndị Egwuregwu",
  skills: "Ịchọta echiche azụmahịa site n'egwuregwu gị, Ịnwale echiche n'ebe ezi ndị mmadụ nọ, Iji AI dee atụmatụ azụmahịa peeji otu, Ime atụmatụ ego mmalite dị mfe, Ịmara iwu: NIL, akara azụmahịa (trademark), ndekọ na ụtụ isi",
  outcome: "ime ka otu echiche sitere n'egwuregwu gị ghọọ echiche azụmahịa a nwalere: ịgwa ndị nwere ike ịzụ ihe ise okwu, iji AI dee atụmatụ azụmahịa peeji otu na atụmatụ ego mmalite, na ide iwu ị ga-elele tupu i malite.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu na ndị coach nwere echiche azụmahịa, ma ọ bụ ndị chọrọ otu: azụmahịa nkuzi egwuregwu, echiche app, ngwaahịa na-edozi nsogbu i hụrụ n'egwuregwu, ma ọ bụ ọrụ maka otu egwuregwu dị n'obodo gị.",
    "Ndị na-amalite azụmahịa na-edozi nsogbu ndị mmadụ ga-akwụ ụgwọ maka ya. Ị ga-achọta ezi nsogbu, nwalee ma ndị mmadụ chọrọ ihe ị ga-eji dozie ya tupu i mefuo ego, ma jiri AI dee atụmatụ peeji otu na atụmatụ ego.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwere ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Nke a bụ agụmakwụkwọ n'ozuzu; maka ajụjụ gbasara iwu, ụtụ isi na NIL, lelee isi iyi gọọmentị ma gwa ọfịs compliance gị, nne na nna gị ma ọ bụ onye nlekọta gị, na ọkachamara okwu."
  ],
  finalTask: "Dee atụmatụ azụmahịa peeji otu maka otu echiche sitere n'egwuregwu gị: nsogbu ahụ, ihe ị ga-eji dozie ya, onye ga-azụ ya, ihe ezi ndị mmadụ ise gwara gị, otu ị ga-esi ruo ndị na-azụ ihe, atụmatụ ego mmalite e mere na spreadsheet, na ndepụta iwu (NIL, ịchọ akara azụmahịa, ndekọ na ụtụ isi) nwere aha ndị gị na ha lelere ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na mmalite ọrụ ha, na ndị coach, ndị nwere echiche azụmahịa ma ọ bụ chọrọ otu: azụmahịa nkuzi egwuregwu, echiche app, ngwaahịa maka nsogbu a hụrụ n'egwuregwu, ma ọ bụ ọrụ maka otu egwuregwu dị n'obodo.",
    startingPoint: "Ha maara egwuregwu ha nke ọma ma na-ahụ nsogbu ya nso nso, ha na-ejikwa smartphone, ma eleghị anya spreadsheet. Ole na ole agwala ndị na-azụ ihe okwu, nwalee echiche n'ọnụ ala, dee atụmatụ azụmahịa ma ọ bụ atụmatụ ego, ma ọ bụ lelee iwu NIL, akara azụmahịa, ikike azụmahịa na ụtụ isi.",
    gap: "Ndị egwuregwu na-ewukarị ma ọ bụ zụta ihe tupu ha elele ma onye ọ bụla chọrọ echiche ahụ, ma ọ bụ malite n'eleleghị iwu, wee tufuo ego ma ọ bụ ikike isonye n'egwuregwu (eligibility). Ịnwale n'ebe ezi ndị na-azụ ihe nọ, atụmatụ peeji otu, ezi atụmatụ ego na ndepụta iwu na-enye ha mmalite n'enweghị nsogbu na n'ọnụ ala.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 8",
      "Ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu na Google Sheets",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunye oge iji gwa mmadụ ise okwu",
      "Iwu NIL, akara azụmahịa, ikike azụmahịa (business license) na ụtụ isi; lelee ya na ọfịs compliance, otu egwuregwu steeti ma ọ bụ gọọmentị obodo",
      "Ọ bụghị ndụmọdụ ego ma ọ bụ ụtụ isi; ndị egwuregwu na-erubeghị afọ 18 chọrọ nne na nna ma ọ bụ onye nlekọta maka akaụntụ, nkwekọrịta na ịgbazinye ego ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Ikpo Okwu Azụmahịa n'Ịntanetị (E-commerce) na AI maka Ndị Egwuregwu\" bụ ezigbo nzọụkwụ ọzọ maka ire ihe n'ịntanetị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nsogbu i hụrụ n'egwuregwu gị", action: "idepụta nsogbu ndị ahụ ma tụọ ha akara site n'ọnụ ọgụgụ ndị nwere ha, otu ha si egbu mgbu, na ma ndị mmadụ na-akwụlarị ụgwọ, wee họrọ otu", standard: "nke nsogbu a họrọ bụ nke i hụrụ n'ezie" },
    { id: "O2", condition: "Mgbe e nyere gị mmadụ ise nwere nsogbu ahụ", action: "ịjụ ha ajụjụ gbasara ihe ha mere n'oge gara aga ma dee ihe ha kwuru", standard: "n'ajụghị ajụjụ \"Ị ga-azụ ya?\" ọ bụla, ma dee ihe na-emekarị n'etiti mmadụ ise ahụ" },
    { id: "O3", condition: "Site n'iji ihe ndị na-azụ ihe gwara gị", action: "ide ihe ị ga-eji dozie nsogbu ahụ n'otu ahịrịokwu ma họrọ nnwale kacha dị mfe ị nwere ike ime n'izu abụọ", standard: "nwere nọmba ga-egosi ma nnwale ahụ gara nke ọma" },
    { id: "O4", condition: "Site n'iji ndetu gị na ngwa enyemaka AI", action: "ide atụmatụ azụmahịa peeji otu nwere nsogbu, ihe ị ga-eji dozie ya, onye ga-azụ ya, ihe ndị na-azụ ihe kwuru, otu ị ga-esi ruo ha, ego na nzọụkwụ ndị ọzọ", standard: "ewepụrụ nọmba e chepụtara echepụta ma ọ bụ kaa ha akara dị ka nkọ, ma nweta ndụmọdụ n'aka onye ndụmọdụ (mentor)" },
    { id: "O5", condition: "Site n'iji Google Sheets", action: "ime atụmatụ ego mmalite nwere ihe ị ga-efu, ego ị tụrụ anya inweta, ngụkọta na uru", standard: "nwere ezi ọnụ ahịa ndị na-ere ahịa, formula e lelere, na nyocha ya na onye okenye ị tụkwasịrị obi tupu i mefuo ego" },
    { id: "O6", condition: "Tupu i malite", action: "ide ndepụta iwu gụnyere NIL, aha na akara (logo), ikike azụmahịa, ndekọ na ụtụ isi", standard: "e mere nchọ USPTO, ma dee aha onye gị na ya lelere iwu ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịchọta na ịnwale echiche",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta nsogbu kwesịrị idozi",
          minutes: 5,
          goal: "Depụta nsogbu i hụrụ n'egwuregwu ma họrọ otu kwesịrị idozi.",
          text: [
            "Ezigbo echiche azụmahịa na-amalite site na nsogbu, ọ bụghị ngwaahịa. Ndị egwuregwu na-ahụ ọtụtụ nsogbu nso nso: nne na nna na-enweghị ike ịchọta ezigbo nkuzi maka ndị mbido, otu egwuregwu na-efunahụ ngwa ọrụ, ndị egwuregwu na-enweghị ike ịkwụ ụgwọ ezigbo mmega ahụ, ndị coach nhazi oge kara aka.",
            "Dee nsogbu gị, ndị otu gị, nne na nna ma ọ bụ ndị coach na-eme mkpesa banyere ya. Maka nke ọ bụla, jụọ: Mmadụ ole nwere nsogbu a? Ọ na-egbu mgbu ole? Ha na-akwụlarị ụgwọ maka ụzọ ọjọọ e ji edozi ya?",
            "Jiri ngwa enyemaka AI chepụta echiche: \"Abụ m onye na-egwu volleyball n'ụlọ akwụkwọ sekọndrị. Depụta nsogbu 15 ndị egwuregwu, nne na nna na ndị coach nwere nke obere azụmahịa nwere ike idozi.\" Wee gbaa okirikiri na ndị i hụrụ n'ezie."
          ],
          steps: ["Dee nsogbu i hụrụ n'egwuregwu gị.", "Rịọ AI ka o chepụtakwuo.", "Gbaa okirikiri na ndị i hụrụ na ndụ n'ezie.", "Tụọ nke ọ bụla akara: mmadụ ole, mgbu ole, ha na-akwụlarị ụgwọ?", "Họrọ otu."],
          words: [["Onye na-amalite azụmahịa (entrepreneur)", "onye na-amalite azụmahịa iji dozie nsogbu."], ["Ebe mgbu (pain point)", "nsogbu na-enye ndị mmadụ nsogbu nke ukwuu nke na ha chọrọ ka e dozie ya."]],
          slides: [
            { title: "Malite na nsogbu", bullets: ["Ọ bụghị ngwaahịa", "Ndị egwuregwu na-ahụ nsogbu nso nso"] },
            { title: "Tụọ nsogbu ọ bụla akara", bullets: ["Mmadụ ole nwere ya?", "Ọ na-egbu mgbu ole?", "Ha na-akwụlarị ụgwọ maka ụzọ ọjọọ?"] },
            { title: "AI na-echepụta, gị na-ahọrọ", bullets: ["Rịọ maka nsogbu 15", "Gbaa okirikiri na ndị i hụrụ"] }
          ],
          tryIt: "Depụta nsogbu ise sitere n'egwuregwu gị, jiri AI tinyekwuo, tụọ ha akara, ma họrọ nke ị ga-arụ ọrụ na ya.",
          youCanNow: "ịchọta na ịhọrọ ezi nsogbu kwesịrị idozi.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe na-egosi nsogbu kwesịrị idozi?", options: ["Ọ bụ naanị gị nwere ya", "Ndị mmadụ na-akwụlarị ụgwọ maka ụzọ ọjọọ e ji edozi ya", "Ọ na-atọ ụtọ ikwu maka ya", "Ọ dịghị onye na-eme mkpesa banyere ya"], answer: 1, why: "Ọ bụrụ na ndị mmadụ na-akwụlarị ụgwọ maka ụzọ ọjọọ, nsogbu ahụ dị ha mkpa." },
            { objective: "O1", q: "AI depụtara nsogbu 15 maka egwuregwu gị. Gịnị ka ị ga-eme?", options: ["Họrọ nke kacha atọ ụtọ", "Wuo ha niile 15", "Gbaa okirikiri na ndị i hụrụ n'ezie", "Rịọ AI ka ọ họrọ maka gị"], answer: 2, why: "Debe nsogbu ndị i hụrụ na ndụ n'ezie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgwa ezi ndị na-azụ ihe okwu",
          minutes: 6,
          goal: "Jụọ mmadụ ise nwere ike ịzụ ihe ajụjụ banyere nsogbu ahụ tupu i wuo ihe ọ bụla.",
          text: [
            "Tupu i mefuo ego, gwa ndị nwere nsogbu ahụ okwu. Ebumnuche gị bụ ịmụta ihe, ọ bụghị ire ihe. Jụọ banyere ihe ha mere n'oge gara aga, ọ bụghị ihe ha nwere ike ime otu ụbọchị.",
            "Ezigbo ajụjụ: \"Gwa m maka oge ikpeazụ nke a mere.\" \"Gịnị ka i mere banyere ya?\" \"Ego ole ka o furu gị?\" \"Gịnị na-ewe gị iwe n'ụzọ ndị dị ugbu a?\" Zere \"Ị ga-azụ echiche m?\" n'ihi na ndị mmadụ na-asị ee ka ha ghara iwe gị iwe.",
            "Gwa mmadụ ise okwu. Dee ihe ha kwuru n'okwu ha. Ọ bụrụ na ọtụtụ n'ime ha achọghị ya, nke ahụ bụ ozi ọma: i chekwara oge na ego. Họrọ nsogbu ọhụrụ ma ọ bụ gbanwee echiche gị."
          ],
          steps: ["Depụta mmadụ ise nwere nsogbu ahụ.", "Jụọ banyere oge ikpeazụ o mere.", "Jụọ ihe ha mere na ego ole o furu ha.", "Dee okwu ha.", "Chọọ ihe na-emekarị n'etiti mmadụ ise ahụ."],
          words: [["Ajụjụ ọnụ onye na-azụ ihe (customer interview)", "obere mkparịta ụka iji mụta banyere nsogbu mmadụ."], ["Ịkwado (validate)", "ilele na nsogbu na ihe e ji edozi ya bụ eziokwu tupu i wuo ihe."]],
          slides: [
            { title: "Mụta ihe, erela ihe", bullets: ["Gwa ndị nwere nsogbu ahụ okwu", "Tupu i mefuo ego"] },
            { title: "Ezigbo ajụjụ", bullets: ["\"Gwa m maka oge ikpeazụ...\"", "\"Gịnị ka i mere? Ego ole ka o furu gị?\"", "Ọ bụghị: \"Ị ga-azụ echiche m?\""] },
            { title: "Mgbe mkparịta ụka ise gasịrị", bullets: ["Dee okwu ha", "Chọọ ihe na-emekarị", "Ọ dịghị onye chọrọ ya? I chekwara ego"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o nyere gị aka dee ajụjụ ise gbasara ihe ndị mmadụ mere n'oge gara aga. Jụọ opekata mpe mmadụ abụọ n'izu a, ma dee ihe ha kwuru.",
          youCanNow: "ịjụ ndị nwere ike ịzụ ihe ajụjụ iji nwalee ma nsogbu bụ eziokwu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ebumnuche gị n'ajụjụ ọnụ onye na-azụ ihe?", options: ["Ịmụta ihe", "Ire ihe", "Inweta nkwa na ha ga-azụ", "Igosipụta echiche gị"], answer: 0, why: "Kparịta ụka iji mụta banyere nsogbu ahụ, ọ bụghị ire ihe." },
            { objective: "O2", q: "Otu nne kwuru, \"Aga m azụ ya otu ụbọchị.\" Gịnị ka ị ga-ajụ ọzọ?", options: ["\"Ọ dị mma, ka m dee aha gị?\"", "\"Ego ole ka ị ga-akwụ?\"", "\"Ndị enyi gị ga-azụkwa ya?\"", "\"Gwa m maka oge ikpeazụ nsogbu a mere.\""], answer: 3, why: "Jụọ banyere ihe ha mere n'oge gara aga, n'ihi na ndị mmadụ na-asị ee ka ha ghara iwe gị iwe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhazi ihe ị ga-eji dozie ya na ihe ị na-enye",
          minutes: 5,
          goal: "Dee ihe ị ga-eji dozie nsogbu ahụ n'otu ahịrịokwu na ụdị kacha dị mfe ị nwere ike ịnwale.",
          text: [
            "Ugbu a, kọwaa ihe ị ga-eji dozie ya n'otu ahịrịokwu: \"Nkuzi basketball ụbọchị Satọdee maka ụmụaka dị afọ 6 ruo 9 na-amalite, nke ndị egwuregwu varsity ụlọ akwụkwọ sekọndrị na-eduzi, n'ọnụ ahịa nne na nna nwere ike ịkwụ.\"",
            "Malite na nnwale kacha dị mfe ị nwere ike ime, nke a na-akpọ mgbe ụfọdụ minimum viable product: otu nkuzi kama ụlọ akwụkwọ egwuregwu zuru ezu, fọm ndebanye aha kama app, uwe elu iri kama 500.",
            "AI nwere ike inyere gị aka chee echiche banyere ụdị kacha dị mfe: \"Nke a bụ echiche m na ihe ndị na-azụ ihe ise gwara m. Kedu ụzọ kacha nta na kacha dị ọnụ ala isi nwalee ya n'izu abụọ?\" Wee họrọ ihe ị nwere ike ime n'ezie."
          ],
          steps: ["Dee ihe ị ga-eji dozie ya n'otu ahịrịokwu.", "Rịọ AI maka nnwale kacha nta ị nwere ike ime.", "Họrọ nnwale ị nwere ike ime n'izu abụọ.", "Kpebie otu ị ga-esi mara na ọ gara nke ọma (dịka ọmụmaatụ, ndebanye aha 8)."],
          words: [["Minimum viable product (MVP)", "ụdị kacha dị mfe nke echiche gị nke na-ekwe ka i nwalee ya n'ebe ezi ndị na-azụ ihe nọ."], ["Ihe ị na-enye (offer)", "kpọmkwem ihe ndị na-azụ ihe na-enweta na ego ọ na-efu."]],
          slides: [
            { title: "Ihe idozi n'otu ahịrịokwu", bullets: ["Onye ọ bụ maka ya", "Ihe ha na-enweta", "Ihe mere o ji ka mma"] },
            { title: "Buru ụzọ nwalee obere", bullets: ["Otu nkuzi, ọ bụghị ụlọ akwụkwọ egwuregwu", "Fọm, ọ bụghị app", "Uwe elu 10, ọ bụghị 500"] },
            { title: "Kọwaa ihe ịga nke ọma bụ", bullets: ["Nnwale kacha nta n'izu abụọ", "Nọmba na-egosi na ọ gara nke ọma"] }
          ],
          tryIt: "Dee ihe ị ga-eji dozie ya n'otu ahịrịokwu. Jiri AI chọta nnwale kacha nta n'izu abụọ, ma dee nọmba ga-egosi na ọ gara nke ọma.",
          youCanNow: "ịkọwa ihe ị ga-eji dozie nsogbu ma hazie obere nnwale dị ọnụ ala.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ minimum viable product?", options: ["Ụdị gị kacha dị oke ọnụ", "App zuru ezu", "Ụdị kacha dị mfe nke na-ekwe ka i nwalee ya n'ebe ezi ndị na-azụ ihe nọ", "Atụmatụ azụmahịa ogologo"], answer: 2, why: "MVP bụ nnwale kacha nta ị nwere ike ime n'ebe ezi ndị na-azụ ihe nọ." },
            { objective: "O3", q: "Ị chọrọ ịmalite ụlọ akwụkwọ mmega egwuregwu. Kedu nnwale mbụ kacha mma?", options: ["Gbazite ụlọ otu afọ", "Mee otu nkuzi nwere fọm ndebanye aha", "Wuo app pụrụ iche", "Bipụta uwe elu 500"], answer: 1, why: "Malite na nnwale kacha dị mfe ị nwere ike ime n'izu abụọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịchọta na ịnwale echiche",
        questions: [
          { objective: "O1", q: "Ezigbo echiche azụmahịa na-amalite site na:", options: ["Akara (logo) mara mma", "Nnukwu mbinye ego", "Nsogbu ndị mmadụ nwere", "App dị oke ọnụ"], answer: 2, why: "Idozi ezi nsogbu bụ ihe ndị mmadụ na-akwụ ụgwọ maka ya." },
          { objective: "O2", q: "Kedu ajụjụ kacha mma n'ajụjụ ọnụ?", options: ["\"Gwa m maka oge ikpeazụ nke a mere.\"", "\"Ị ga-azụ echiche m?\"", "\"Echiche m ọ dịghị mma?\"", "\"Ego ole ka ị ga-akwụ otu ụbọchị?\""], answer: 0, why: "Ihe ndị mmadụ mere n'oge gara aga na-ekwu eziokwu karịa ihe ha chere na ha ga-eme." },
          { objective: "O2", q: "Ọtụtụ ndị ị jụrụ ajụjụ achọghị maka nsogbu ahụ. Nke a pụtara:", options: ["Ị dara", "Wuo ya n'agbanyeghị", "Jụọ ha ajụjụ ruo mgbe ha kwenyere", "I chekwara oge na ego; gbanwee ma ọ bụ họrọ nsogbu ọhụrụ"], answer: 3, why: "Ịmụta ihe n'oge bụ mmeri." },
          { objective: "O3", q: "MVP bụ:", options: ["Onye egwuregwu kacha baa uru", "Ụdị kacha dị mfe nke na-ekwe ka i nwalee ya n'ebe ezi ndị na-azụ ihe nọ", "Nnukwu mmalite", "Akara azụmahịa (trademark)"], answer: 1, why: "N'azụmahịa, MVP pụtara minimum viable product." },
          { objective: "O3", q: "Kedu nnwale mbụ kacha mma maka echiche kamp egwuregwu?", options: ["Ịgbazite ama egwuregwu otu ọnwa", "Otu nkuzi ụbọchị Satọdee nwere fọm ndebanye aha", "Iwu app", "Ibipụta uwe elu 500"], answer: 1, why: "Obere nnwale dị ọnụ ala ma dị ngwa." }
        ]
      }
    },
    {
      name: "Isi 2: Atụmatụ, ego na iwu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Atụmatụ azụmahịa peeji otu site n'AI",
          minutes: 5,
          goal: "Dee atụmatụ azụmahịa peeji otu site n'enyemaka AI.",
          text: [
            "Atụmatụ peeji otu na-eme ka uche gị dị n'otu ebe. Akụkụ ya: Nsogbu, Ihe idozi ya, Onye na-azụ ya, Ihe ndị na-azụ ihe gwara m, Otu m ga-esi ruo ha, Ego (ihe ọ ga-efu na ọnụ ahịa), Nzọụkwụ ndị ọzọ.",
            "Nye ngwa enyemaka AI ndetu gị na ihe ajụjụ ọnụ gị gosiri, ma jụọ: \"Mee ka ndetu ndị a ghọọ atụmatụ azụmahịa peeji otu nwere akụkụ ndị a. Jiri okwu dị mfe. Kaa akara n'ihe ọ bụla bụ nkọ.\"",
            "Gụọ ya nke ọma. AI nwere ike ime ka echiche gị dị ka ọ ka ukwuu karịa ka ọ dị, ma ọ bụ chepụta nọmba. Debe naanị ihe bụ eziokwu ma ọ bụ nke e kara akara nke ọma dị ka nkọ, ma gosi onye ndụmọdụ, coach ma ọ bụ onye nkuzi ya maka ndụmọdụ."
          ],
          steps: ["Chịkọta nsogbu gị, ihe idozi ya na ndetu ajụjụ ọnụ.", "Rịọ AI maka atụmatụ peeji otu nwere akụkụ a kara aka.", "Wepụ nọmba e chepụtara echepụta ma ọ bụ kaa ha akara dị ka nkọ.", "Gosi onye ndụmọdụ ya maka ndụmọdụ."],
          words: [["Atụmatụ azụmahịa (business plan)", "nchịkọta e dere ede nke otu azụmahịa ga-esi arụ ọrụ ma kpata ego."], ["Onye ndụmọdụ (mentor)", "onye nwere ahụmahụ na-enye gị ndụmọdụ."]],
          slides: [
            { title: "Akụkụ atụmatụ peeji otu", bullets: ["Nsogbu, Ihe idozi ya, Onye na-azụ ya", "Ihe ndị na-azụ ihe gwara m", "Otu m ga-esi ruo ha, Ego, Nzọụkwụ ndị ọzọ"] },
            { title: "AI na-ede ihe mbụ", bullets: ["Site na ndetu gị na ajụjụ ọnụ", "\"Kaa akara n'ihe ọ bụla bụ nkọ\""] },
            { title: "Gị na-elele ya", bullets: ["Ọ dịghị nọmba e chepụtara echepụta", "Gosi onye ndụmọdụ"] }
          ],
          tryIt: "Jiri AI mee ka ndetu gị ghọọ atụmatụ peeji otu. Kaa akara na nkọ ọ bụla, wee rịọ onye ndụmọdụ, coach ma ọ bụ onye nkuzi maka otu ndụmọdụ.",
          youCanNow: "ide atụmatụ azụmahịa peeji otu site n'AI ma lelee na ọ bụ eziokwu.",
          quickCheck: [
            { objective: "O4", q: "Kedu akụkụ dị n'atụmatụ peeji otu gị?", options: ["Ihe ndị na-azụ ihe gwara m", "Ndị egwuregwu ị kacha hụ n'anya", "Akụkọ ndụ gị niile", "Usoro mmega ahụ gị"], answer: 0, why: "Atụmatụ ahụ gụnyere ihe ajụjụ ọnụ ise gị gosiri." },
            { objective: "O4", q: "Atụmatụ AI kwuru na ị ga-enweta ndị na-azụ ihe 500 n'ọnwa mbụ, mana ị nweghị ihe akaebe. Gịnị ka ị ga-eme?", options: ["Debe ya ka ọ tọọ ndị mmadụ ụtọ", "Mee ya okpukpu abụọ", "Bulie ya n'elu", "Wepụ ya ma ọ bụ kaa ya akara dị ka nkọ"], answer: 3, why: "Debe naanị ihe bụ eziokwu ma ọ bụ nke e kara akara nke ọma dị ka nkọ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime atụmatụ ego mmalite",
          minutes: 5,
          goal: "Mee atụmatụ ego mmalite dị mfe na spreadsheet.",
          text: [
            "Atụmatụ ego mmalite na-edepụta ihe ị ga-emefu tupu na n'oge nnwale mbụ gị, na ihe ị tụrụ anya inweta. Mee ka ọ dị nta na mbụ.",
            "Na Google Sheets, depụta ihe ọ ga-efu (ngwa ọrụ, ebe ọrụ, ụgwọ weebụsaịtị ma ọ bụ ikpo okwu (platform), mbipụta, mkpuchi (insurance) ma ọ bụrụ na ọ dị mkpa, mgbasa ozi) na ego ị tụrụ anya inweta (ọnụ ahịa mụbaa ọnụ ọgụgụ ndị na-azụ ihe ị tụrụ anya). Chọta ezi ọnụ ahịa n'aka ndị na-ere ahịa, ọ bụghị nkọ.",
            "Rịọ AI ka o hazie formula maka ngụkọta na uru, ma lelee ha n'onwe gị. Ebinyela ego ma ọ bụ jiri kaadị mbinye ego (credit card) maka nnwale azụmahịa n'agwaghị nne na nna gị, onye nlekọta gị ma ọ bụ onye ndụmọdụ ị tụkwasịrị obi. Nke a abụghị ndụmọdụ ego."
          ],
          steps: ["Depụta ihe niile mmalite ga-efu.", "Chọọ ezi ọnụ ahịa.", "Tụọ ego ị ga-enweta: ọnụ ahịa mụbaa ndị na-azụ ihe.", "Jiri formula tinye ngụkọta na uru.", "Gosi onye okenye ị tụkwasịrị obi ya tupu i mefuo ego."],
          words: [["Atụmatụ ego mmalite (start-up budget)", "atụmatụ nke ego dị mkpa iji malite na ihe ị tụrụ anya inweta."], ["Mmefu (expense)", "ego ị na-emefu iji rụọ azụmahịa ahụ."]],
          slides: [
            { title: "Ihe ọ ga-efu", bullets: ["Ngwa ọrụ na ebe ọrụ", "Ụgwọ ikpo okwu ma ọ bụ weebụsaịtị", "Mbipụta, mkpuchi, mgbasa ozi"] },
            { title: "Ego a ga-enweta", bullets: ["Ọnụ ahịa x ndị na-azụ ihe a tụrụ anya", "Jiri ezi ọnụ ahịa, ọ bụghị nkọ"] },
            { title: "Kpachara anya", bullets: ["AI na-ede formula; gị na-elele", "Ebinyela ego na-enweghị onye okenye ị tụkwasịrị obi"] }
          ],
          tryIt: "Mee atụmatụ ego mmalite maka nnwale izu abụọ gị na Google Sheets nwere ezi ọnụ ahịa. Rịọ AI ka o dee formula ngụkọta na uru, ma lelee ha.",
          youCanNow: "ime atụmatụ ego mmalite dị mfe nwere ezi nọmba.",
          quickCheck: [
            { objective: "O5", q: "Kedu otu ị ga-esi tụọ ego ị tụrụ anya inweta?", options: ["Ọnụ ahịa mụbaa ndị na-azụ ihe a tụrụ anya", "Ihe ọ ga-efu wepụ ọnụ ahịa", "Ndị na-eso gị mụbaa likes", "Kọọ nọmba gbara okirikiri"], answer: 0, why: "Ego a tụrụ anya bụ ọnụ ahịa mụbaa ndị na-azụ ihe a tụrụ anya." },
            { objective: "O5", q: "Atụmatụ ego gị gosiri na ị ga-azụ ngwa ọrụ. Gịnị ka ị ga-eme tupu i mefuo ego?", options: ["Jiri kaadị mbinye ego kwụọ ya", "Binye ego n'aka enyi", "Gosi nne na nna gị, onye nlekọta gị ma ọ bụ onye ndụmọdụ ị tụkwasịrị obi atụmatụ ego ahụ", "Zụta nke kacha dị ọnụ ala n'ịntanetị ugbu a"], answer: 2, why: "Gwa onye okenye ị tụkwasịrị obi okwu tupu i binye ego ma ọ bụ mefuo ego na nnwale." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iwu onye egwuregwu na-amalite azụmahịa ga-elele",
          minutes: 6,
          goal: "Dee ndepụta iwu maka azụmahịa gị.",
          text: [
            "NIL: ọ bụrụ na azụmahịa gị na-eji aha gị, onyinyo gị ma ọ bụ ihe yiri gị (name, image, likeness), ọ nwere ike ịgụ dị ka ọrụ NIL. Ndị egwuregwu mahadum nwere ike ịkọ ya; ndị egwuregwu Division I na-akọ nkwekọrịta ndị ọzọ ruru eru site na NIL Go ka a na-ede nke a. Iwu ụlọ akwụkwọ sekọndrị dị iche site na steeti ruo steeti. Jụọ ọfịs compliance gị ma ọ bụ otu egwuregwu steeti gị.",
            "Aha na akara: ejila akara (logo) ụlọ akwụkwọ, otu egwuregwu ma ọ bụ league n'enweghị ikike. Tupu ị họrọ aha azụmahịa, chọọ ndekọ akara azụmahịa USPTO (ọfịs gọọmentị US na-edebanye akara azụmahịa) na ndekọ aha azụmahịa steeti gị. Obodo gị ma ọ bụ steeti gị nwere ike ịchọ ikike azụmahịa; lelee weebụsaịtị gọọmentị obodo gị.",
            "Ndekọ na ụtụ isi: debe akwụkwọ nnata ego (receipt) na ịkwụ ụgwọ ọ bụla na spreadsheet. IRS (ọfịs ụtụ isi US) kwuru na ị ga-etinye akwụkwọ ụtụ isi ma ọ bụrụ na uru ọrụ nke onwe gị ruru $400 ma ọ bụ karịa. Gwa ọkachamara ụtụ isi okwu. Ọ bụrụ na ị erubeghị afọ 18, nne na nna gị ma ọ bụ onye nlekọta gị ga-enyere aka n'akaụntụ na nkwekọrịta."
          ],
          steps: ["Jụọ compliance ma ọ bụ otu egwuregwu steeti gị banyere iwu NIL.", "Hụ na ị na-eji naanị akara na aha nke gị.", "Chọọ ndekọ USPTO na ndekọ aha azụmahịa steeti.", "Lelee iwu ikike azụmahịa obodo gị.", "Hazie mpempe akwụkwọ nnata ego na ịkwụ ụgwọ.", "Gwa ọkachamara ụtụ isi okwu."],
          words: [["Ikike azụmahịa (business license)", "ikike sitere n'obodo, county ma ọ bụ steeti iji rụọ azụmahịa n'ebe ahụ."], ["Ọrụ nke onwe (self-employment)", "inweta ego site n'azụmahịa nke gị kama site n'aka onye isi ọrụ."]],
          slides: [
            { title: "NIL", bullets: ["Azụmahịa nwere aha gị nwere ike ịbụ NIL", "Mahadum: ị nwere ike ịkọ ya", "Ụlọ akwụkwọ sekọndrị: lelee steeti gị"] },
            { title: "Aha, akara, ikike", bullets: ["Ọ dịghị akara ụlọ akwụkwọ ma ọ bụ league n'enweghị ikike", "Chọọ ndekọ USPTO na ndekọ aha steeti", "Lelee iwu ikike obodo"] },
            { title: "Ndekọ na ụtụ isi", bullets: ["Debe akwụkwọ nnata ego ọ bụla", "IRS: tinye akwụkwọ ma uru SE ruru $400+", "Gwa ọkachamara ụtụ isi okwu"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness (aha, onyinyo na ihe yiri gị)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Ihe mbụ gbasara akara azụmahịa (Trademark basics)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Ebe ụtụ isi ndị na-arụ ọrụ nke onwe (Self-Employed Individuals Tax Center)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ peeji otu gị nwere atụmatụ ego, wee dee ndepụta iwu gị nwere onye ị jụrụ maka NIL, ihe nchọ akara azụmahịa gị gosiri, nlele ikike obodo gị na mpempe ndekọ gị.",
          youCanNow: "ilele iwu ndị dị mkpa tupu i malite azụmahịa dị ka onye egwuregwu.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka ị ga-elele ma obodo gị chọrọ ikike azụmahịa?", options: ["Mgbasa ozi ọha (social media)", "Weebụsaịtị gọọmentị obodo gị", "Chatbot AI", "Otu mkparịta ụka coach gị"], answer: 1, why: "Obodo gị ma ọ bụ steeti gị nwere ike ịchọ ikike; lelee weebụsaịtị gọọmentị obodo gị." },
            { objective: "O6", q: "I họrọla aha azụmahịa. Gịnị ka ị ga-elele tupu i jiri ya?", options: ["Ma ọ na-ada ụda abụ", "Ma ndị enyi gị nwere mmasị na ya", "Ma o nwere mascot", "Ndekọ akara azụmahịa USPTO na ndekọ aha azụmahịa steeti gị"], answer: 3, why: "Chọọ ndekọ akara azụmahịa na ndekọ aha azụmahịa steeti tupu ị họrọ aha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Atụmatụ, ego na iwu",
        questions: [
          { objective: "O4", q: "AI tinyere \"$1 million n'afọ mbụ\" n'atụmatụ gị n'enweghị ihe ndabere. Ị ga:", options: ["Debe ya", "Mee ya $2 million", "Gosi ndị na-etinye ego", "Wepụ ya ma ọ bụ kaa ya akara dị ka nkọ"], answer: 3, why: "Debe naanị ezi nọmba ma ọ bụ nkọ e kara akara nke ọma." },
          { objective: "O5", q: "Ego a tụrụ anya inweta hà nhata:", options: ["Ọnụ ahịa mụbaa ndị na-azụ ihe a tụrụ anya", "Ihe ọ ga-efu mụbaa abụọ", "Ndị na-eso gị mụbaa likes", "Nkọ"], answer: 0, why: "Nke ahụ bụ ụzọ mbụ isi tụọ ego a ga-enweta." },
          { objective: "O5", q: "Tupu i binye ego maka nnwale azụmahịa, ị kwesịrị:", options: ["Iji kaadị mbinye ego ngwa ngwa", "Ịjụ onye ị na-amaghị n'ịntanetị", "Ịgwa nne na nna gị, onye nlekọta gị ma ọ bụ onye ndụmọdụ ị tụkwasịrị obi okwu", "Ịhapụ atụmatụ ego"], answer: 2, why: "Ụgwọ nwere ihe egwu; buru ụzọ nweta ndụmọdụ." },
          { objective: "O6", q: "Gịnị mere ị ga-eji chọọ ndekọ USPTO?", options: ["Iji nweta ndị na-azụ ihe", "Iji chọta coach", "Iji kwụọ ụtụ isi", "Iji zere iji aha onye ọzọ nwere"], answer: 3, why: "Nchọ akara azụmahịa na-egbochi esemokwu." },
          { objective: "O6", q: "Ego uru IRS kara aka maka ndị na-arụ ọrụ nke onwe ịtinye akwụkwọ ụtụ isi bụ:", options: ["$40,000", "$400", "$4", "Ọ dịghị"], answer: 1, why: "Nke ahụ dị na peeji IRS Self-Employed Tax Center." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịmalite Azụmahịa site n'AI maka Ndị Egwuregwu",
    questions: [
      { objective: "O1", q: "Onye na-amalite azụmahịa (entrepreneur):", options: ["Na-egwu naanị egwuregwu", "Na-etinye naanị ego", "Na-amalite azụmahịa iji dozie nsogbu", "Na-arụ ọrụ maka otu egwuregwu"], answer: 2, why: "Idozi nsogbu bụ isi ihe." },
      { objective: "O1", q: "Ebe mgbu (pain point) bụ:", options: ["Nsogbu na-enye ndị mmadụ nsogbu nke na ha chọrọ ka e dozie ya", "Mmerụ ahụ", "Bọọdụ akara egwuregwu", "Ntaramahụhụ"], answer: 0, why: "Ebe mgbu bụ ohere azụmahịa." },
      { objective: "O1", q: "Mgbe ị na-atụ nsogbu akara, jụọ:", options: ["Mmadụ ole nwere ya na otu o si egbu mgbu", "Agba ọ na-acha", "Onye a ma ama", "Likes ole ọ na-enweta"], answer: 0, why: "Ọnụ ọgụgụ na mgbu na-egosi ma o kwesịrị idozi." },
      { objective: "O1", q: "AI chepụtara nsogbu 15. Ị ga:", options: ["Họrọ nke mbụ", "Jiri ha niile 15", "Gbaa okirikiri na ndị i hụrụ na ndụ n'ezie", "Leghara ha anya"], answer: 2, why: "Ahụmahụ n'ezie ka nkọ mma." },
      { objective: "O2", q: "Ajụjụ ọnụ ndị na-azụ ihe bụ maka:", options: ["Ire ihe n'ike", "Ịmụta ihe", "Ịrụ ụka", "Inweta ndị na-eso gị"], answer: 1, why: "Mụta ihe tupu i wuo." },
      { objective: "O2", q: "Gịnị mere ị ga-eji zere \"Ị ga-azụ echiche m?\"", options: ["Ọ bụ enweghị nkwanye ugwu", "Ọ megidere iwu", "Ọ dị mkpụmkpụ nke ukwuu", "Ndị mmadụ na-asị ee ka ha ghara iwe gị iwe"], answer: 3, why: "Ihe ha mere n'oge gara aga na-ekwu eziokwu karịa." },
      { objective: "O2", q: "Opekata mpe mmadụ ole ka ị ga-ajụ ajụjụ?", options: ["Otu", "Ọ dịghị", "Ise", "500"], answer: 2, why: "Mmadụ ise na-egosi ihe na-emekarị na mbụ." },
      { objective: "O2", q: "Ịkwado (validate) pụtara:", options: ["Inweta stampụ ebe a na-adọba ụgbọala", "Imeri egwuregwu", "Ịbịanye aka na nkwekọrịta", "Ilele na nsogbu na ihe e ji edozi ya bụ eziokwu"], answer: 3, why: "Ịkwado na-echekwa oge na ego." },
      { objective: "O3", q: "Kedu nke bụ MVP maka echiche ire uwe (merch)?", options: ["Uwe elu 10 e rere ndị rịọrọ ya", "Uwe elu 500 n'ụlọ nkwakọba", "Ụdị uwe zuru ezu", "Ịgbazite ụlọ ahịa"], answer: 0, why: "Malite obere ma nwalee." },
      { objective: "O3", q: "Nnwale chọrọ:", options: ["Enweghị ebumnuche", "Nọmba na-egosi na ọ gara nke ọma", "Nnukwu ego", "Onye a ma ama"], answer: 1, why: "Ebumnuche doro anya na-egosi ma ọ gara nke ọma." },
      { objective: "O4", q: "Atụmatụ peeji otu gụnyere:", options: ["Naanị akara (logo)", "Nọmba egwuregwu gị", "Nsogbu, ihe idozi ya, onye na-azụ ya, ego, nzọụkwụ ndị ọzọ", "Okwuntughe gị"], answer: 2, why: "Akụkụ ndị ahụ na-akọwa otu o si arụ ọrụ." },
      { objective: "O4", q: "Rịọ AI ka ọ kaa akara na:", options: ["Ihe ọ bụla bụ nkọ", "Ọ dịghị ihe", "Naanị ozi ọma", "Ndị asọmpi gị"], answer: 0, why: "Nkọ e kara akara na-eme ka ị na-ekwu eziokwu." },
      { objective: "O4", q: "Onye ndụmọdụ (mentor) bụ:", options: ["Onye asọmpi", "Onye na-azụ ihe", "Onye ọka ikpe egwuregwu (referee)", "Onye nwere ahụmahụ na-enye ndụmọdụ"], answer: 3, why: "Ndị ndụmọdụ na-enyere gị aka izere mperi." },
      { objective: "O5", q: "Ọnụ ahịa dị n'atụmatụ ego gị kwesịrị isi na:", options: ["Nkọ", "Ezi ọnụ ahịa ndị na-ere ahịa", "Ncheta ochie", "Naanị AI"], answer: 1, why: "Ezi ọnụ ahịa na-eme ezi atụmatụ ego." },
      { objective: "O5", q: "Mmefu (expense) bụ:", options: ["Ego ị na-enweta", "Ego ị na-emefu iji rụọ azụmahịa ahụ", "Iko mmeri", "Onye na-eso gị"], answer: 1, why: "Mmefu bụ ihe ọ na-efu." },
      { objective: "O6", q: "Azụmahịa na-eji aha gị nwere ike ịgụ dị ka:", options: ["Ịkwụ ụgwọ maka egwuregwu (pay-for-play)", "Agụmakwụkwọ n'efu (scholarship)", "Ọ dịghị ihe", "Ọrụ NIL"], answer: 3, why: "Ọ na-eji aha gị, onyinyo gị ma ọ bụ ihe yiri gị." },
      { objective: "O6", q: "Ị nwere ike iji akara ụlọ akwụkwọ gị n'ihe ị na-ere n'efu?", options: ["Mba, ị chọrọ ikike", "Ee, mgbe niile", "Naanị na ngwụsị izu", "Naanị n'ịntanetị"], answer: 0, why: "Ụlọ akwụkwọ na-echebe akara ha." },
      { objective: "O6", q: "Ebee ka ị ga-elele ma ị chọrọ ikike azụmahịa?", options: ["Blọọgụ egwuregwu", "Onye asọmpi", "Weebụsaịtị gọọmentị obodo gị", "Ọ dịghị ebe"], answer: 2, why: "Ikike bụ iwu obodo." },
      { objective: "O6", q: "Gịnị mere ị ga-eji debe akwụkwọ nnata ego ọ bụla?", options: ["Maka ịchọ mma", "Iji tụfuo ya emesịa", "Ọ dịghị mkpa", "Maka ndekọ na ụtụ isi"], answer: 3, why: "Ndekọ na-enyere aka n'ụtụ isi na mkpebi." },
      { objective: "O6", q: "Ọ bụrụ na ị erubeghị afọ 18 ma na-amalite azụmahịa:", options: ["Ị nwere ike ịbịanye aka n'ihe ọ bụla n'onwe gị", "Nne na nna ma ọ bụ onye nlekọta na-enyere aka n'akaụntụ na nkwekọrịta", "Zoo ya", "Jiri afọ adịgboroja"], answer: 1, why: "Ụmụaka na-achọkarị enyemaka onye okenye." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      5,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Nsogbu na onye na-azụ ihe",
        objective: "O1",
        notYet: "Nsogbu ahụ edoghị anya ma ọ bụ ọ bụghị nke onye na-amụ ihe hụrụ.",
        meets: "Otu ezi nsogbu, nke a tụrụ akara maka ọnụ ọgụgụ na mgbu, nwere onye na-azụ ihe doro anya.",
        exceeds: "Ọ na-egosi ihe ndị na-azụ ihe na-akwụlarị maka ụzọ ọjọọ e ji edozi ya."
      },
      {
        name: "Ajụjụ ọnụ ndị na-azụ ihe",
        objective: "O2",
        notYet: "Ihe na-erughị mmadụ ise, ma ọ bụ ndetu ahụ bụ maka ma ha ga-azụ.",
        meets: "Ajụjụ ọnụ ise gbasara ihe ndị mmadụ mere n'oge gara aga, e dere n'okwu ndị na-azụ ihe, nwere ihe na-emekarị e dere.",
        exceeds: "Atụmatụ ahụ gbanwere n'ihi ihe ndị na-azụ ihe kwuru."
      },
      {
        name: "Atụmatụ peeji otu",
        objective: "O4",
        notYet: "Akụkụ ụfọdụ adịghị, ma ọ bụ nọmba e chepụtara echepụta enweghị akara.",
        meets: "Akụkụ asaa niile dị na peeji otu, e kara akara na nkọ, ma nweta ndụmọdụ onye ndụmọdụ.",
        exceeds: "Ọ gụnyere nnwale izu abụọ na nọmba ga-egosi na ọ gara nke ọma."
      },
      {
        name: "Atụmatụ ego mmalite",
        objective: "O5",
        notYet: "Ọnụ ahịa e kọrọ akọ ma ọ bụ formula a na-eleleghị.",
        meets: "Ihe ọ bụla ọ ga-efu nwere ezi ọnụ ahịa, ego a tụrụ anya inweta, ngụkọta na uru, e lelere ma gosi onye okenye a tụkwasịrị obi.",
        exceeds: "Ọ na-egosi ndị na-azụ ihe ole a chọrọ iji kpuchie ego mmalite."
      },
      {
        name: "Ndepụta iwu",
        objective: "O6",
        notYet: "NIL, aha, ikike ma ọ bụ ụtụ isi adịghị, ma ọ bụ e deghị aha onye ọ bụla.",
        meets: "NIL, aha na akara, ikike, ndekọ na ụtụ isi, nke ọ bụla e dere ya na onye onye na-amụ ihe lelere ya na ya.",
        exceeds: "E tinyere ihe nchọ USPTO gosiri na mpempe akwụkwọ nnata ego na ịkwụ ụgwọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara atụmatụ azụmahịa ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe mere nnwale izu abụọ ha n'ime ụbọchị 30 ma kọọ ma o ruru nọmba ya (nnyocha nsochi)",
      "Ndị na-amụ ihe malitere azụmahịa ma ọ bụ kpebie ịghara ime ya mgbe ajụjụ ọnụ ndị na-azụ ihe gasịrị, wee chekwaa ego",
      "Ndị na-amụ ihe kwuru na ha lelere iwu NIL, akara azụmahịa, ikike na ụtụ isi tupu ha amalite"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Akaụntụ Google n'efu maka Google Sheets",
      "Akwụkwọ ndetu ma ọ bụ ndetu ekwentị maka ajụjụ ọnụ ndị na-azụ ihe",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunye oge maka obere ajụjụ ọnụ ise"
    ],
    facilitatorNotes: [
      "Ka ndị na-amụ ihe buru ụzọ mee ajụjụ ọnụ abụọ abụọ ka ha jụọ banyere ihe ndị mmadụ mere n'oge gara aga, ọ bụghị \"Ị ga-azụ ya?\".",
      "Hazie ndị ndụmọdụ, dị ka ndị nwe azụmahịa n'obodo ma ọ bụ ebe enyemaka obere azụmahịa, ka ha nye ndụmọdụ n'atụmatụ.",
      "Ekwela ka ndị na-amụ ihe binye ego ma ọ bụ bịanye aka na nkwekọrịta dị ka akụkụ nke ihe ọmụmụ a; tinye nne na nna ma ọ bụ ndị nlekọta maka onye ọ bụla na-erubeghị afọ 18.",
      "Kpọbata ọfịs compliance maka ajụjụ NIL ma zie ajụjụ ụtụ isi n'aka ọkachamara ụtụ isi.",
      "Mee mmemme maka echiche ndị na-azụ ihe jụrụ: ịchọpụta n'oge bụ ezigbo ihe."
    ]
  }
};
