"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FTC_ADS = { name: "FTC: Ihe ndị bụ isi gbasara mgbasa ozi na ire ahịa (Advertising and Marketing basics)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC: Iwu gbasara nyocha ndị ahịa na ịgba akaebe (Consumer Reviews and Testimonials Rule), ajụjụ na azịza", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC: Iwu CAN-SPAM, akwụkwọ ntụzi maka azụmahịa", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "AI n'Ire Ahịa maka Obere Azụmahịa",
  skills: "Ide ozi ire ahịa, Iji AI mee post soshal midia, Ịhazi akwụkwọ mgbasa ozi (flyer), Ịhazi kalenda ihe ị ga-ebipụta, Idebe okwu gị n'eziokwu, Ịlele ihe na-arụ ọrụ",
  outcome: "iji enyemaka AI hazie ma mee ire ahịa otu ọnwa maka azụmahịa gị: ozi isi doro anya, kalenda izu anọ, otu ìgwè post soshal midia na otu flyer, ha niile nwere okwu eziokwu, na ụzọ dị mfe isi hụ post ndị kpọtaara gị ndị ahịa.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa na-eme ire ahịa nke ha: ụlọ nri na ụgbọala na-ere nri, ụlọ ịkpa isi na ụlọ ịkpụ isi, ụlọ ahịa, ọrụ nhicha na ndozi, na azụmahịa a na-eme n'ụlọ. Ọtụtụ ndị na-amụ ihe anyị nwe azụmahịa nke ndị pere mpe (minority-owned) na-ere ahịa n'agbata obi na obodo ha.",
    "Ị ga-eji ngwa AI n'efu chọta ozi isi gị, dee post na caption, hazie flyer, hazie ihe ị ga-ebipụta otu ọnwa, debe okwu gị n'eziokwu dị ka iwu FTC si dị, ma soro ihe na-akpọtara gị ndị ahịa n'ezie.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọrụ ndị ahụ na-agbakọ ghọọ ire ahịa otu ọnwa dị njikere ibipụta."
  ],
  finalTask: "Mee ire ahịa otu ọnwa: dee ozi isi gị, kalenda izu anọ nwere opekata mpe post asatọ, caption emechara emecha maka anọ n'ime ha, otu flyer e mere na ngwa nhazi, na tebụl nsoro na-egosi otu ị ga-esi mata post ndị kpọtara ndị ahịa. Lelee na okwu ọ bụla bụ eziokwu, na foto ọ bụla bụ nke i nwere ike iji.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na-eme ire ahịa nke ha: ụlọ nri na ụgbọala na-ere nri, ụlọ ịkpa isi na ụlọ ịkpụ isi, ụlọ ahịa, ọrụ nhicha na ndozi, na azụmahịa a na-eme n'ụlọ. Ọtụtụ nwe azụmahịa nke ndị pere mpe na-ere ahịa n'agbata obi na obodo ha.",
    startingPoint: "Ha na-ebipụta ihe na soshal midia mgbe ụfọdụ, ụfọdụ emeela flyer. Ha enweghị ozi isi, kalenda ihe ha ga-ebipụta ma ọ bụ nsoro, ha anaghịkwa eji AI eme ire ahịa nke ukwuu.",
    gap: "Post a na-eme n'enweghị atụmatụ na-ewe oge ma anaghị akpọtakarị ndị ahịa, AI nwekwara ike itinye okwu ma ọ bụ foto na-abụghị eziokwu, nke nwere ike imebi iwu FTC ma mebie ntụkwasị obi. Ndị nwe azụmahịa chọrọ ozi doro anya, ihe a haziri ahazi nke eziokwu maka otu ọnwa, na ụzọ dị mfe isi hụ ihe na-akpọta ndị ahịa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: smartphone nwere igwefoto; kọmputa na-enyere aka maka flyer na tebụl",
      "Oge: nkuzi dị ihe dị ka nkeji 5 nke dabara n'ụbọchị ọrụ juru eju",
      "Iwu: iwu FTC gbasara eziokwu na mgbasa ozi, iwu FTC gbasara nyocha ndị ahịa, na CAN-SPAM maka email ire ahịa",
      "Nzuzo na ikike: nweta ikike tupu i bipụta foto onye ahịa, ma debe aha ndị ahịa n'ebe AI na-adịghị"
    ],
    prerequisites: "\"Mmalite AI maka Obere Azụmahịa\" na-enyere aka, mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji usoro ozi isi na ngwa enyemaka AI", action: "ide ozi isi na-ekwu ndị ị na-ejere ozi, ihe ị na-eme na ihe mere i ji dị iche", standard: "n'otu ahịrịokwu ma ọ bụ abụọ nke eziokwu, nke dị ka okwu gị" },
    { id: "O2", condition: "Mgbe e nyere gị ozi isi gị", action: "ide post na caption soshal midia site n'enyemaka AI", standard: "ya na ezi ihe e tinyere na nke ọ bụla, ọ dịghị ihe na-abụghị eziokwu, na ikike maka foto onye ahịa ọ bụla" },
    { id: "O3", condition: "Site n'iji ngwa nhazi n'efu", action: "ime flyer maka otu onyinye ma ọ bụ otu mmemme", standard: "nwere isi okwu (headline), otu ezi foto, ihe atọ e kwuru na oku ime ihe (call to action), ha niile elelere" },
    { id: "O4", condition: "Site n'iji ngwa enyemaka AI na tebụl", action: "ịhazi kalenda ihe ị ga-ebipụta izu anọ", standard: "nwere ọnụ ọgụgụ post ị nwere ike ime, ụdị post dị iche iche, na ụbọchị ọ bụla elelere" },
    { id: "O5", condition: "Mgbe e nyere gị caption na flyer gị", action: "ịlele ire ahịa gị maka okwu ị na-enweghị ike igosi na ọ bụ eziokwu, nyocha adịgboroja na iwu email", standard: "ma gbanwee ma ọ bụ wepụ okwu ọ bụla e gosighi na ọ bụ eziokwu" },
    { id: "O6", condition: "Mgbe e nyere gị post na flyer gị", action: "ime tebụl nsoro na-egosi ire ahịa na-akpọta ndị ahịa", standard: "nwere koodu mbelata ọnụ ahịa (promo code) n'otu onyinye, na usoro ọ bụla AI hụrụ ka elelere na tebụl" }
  ],
  chapters: [
    {
      name: "Isi 1: Ozi gị na post gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta ozi isi ire ahịa gị",
          minutes: 5,
          goal: "Dee otu ahịrịokwu ma ọ bụ abụọ na-ekwu ndị ị na-ejere ozi, ihe ị na-eme na ihe mere i ji dị iche.",
          text: [
            "Ozi isi gị bụ azịza dị mkpụmkpụ nye ajụjụ a: \"Gịnị mere m ga-eji họrọ gị?\" Post, flyer na akara ọ bụla kwesịrị ikwughachi ya n'okwu dị iche iche.",
            "Usoro dị mfe: Anyị na-enyere [ndị] aka inweta [ihe] site na [ihe mere anyị ji dị iche]. Ọmụmaatụ: \"Anyị na-enyere ezinụlọ ndị na-arụsi ọrụ ike na South Sacramento aka inweta nri ndị Filipino dị ka nke ụlọ, dị njikere n'ime nkeji 10, nke otu ezinụlọ ahụ na-esi kemgbe 2009.\"",
            "Rịọ AI ka o nyere gị aka ịchọta ya: \"Nke a bụ ihe ndị ahịa na-ekwu banyere ụlọ ahịa m na ihe m na-eme n'ụzọ dị iche. Dee ụdị ise nke ozi isi nwere otu ahịrịokwu.\" Họrọ nke bụ eziokwu ma dị ka okwu gị."
          ],
          steps: ["Dee ndị ị na-ejere ozi.", "Dee ihe ha na-enweta.", "Dee ihe mere i ji dị iche (eziokwu, doro anya).", "Rịọ AI maka ụdị ise ma họrọ otu."],
          words: [["Ozi isi (core message)", "okwu dị mkpụmkpụ na-ekwu ihe mere ndị ahịa ga-eji họrọ gị."], ["Ihe dị iche (differentiator)", "ihe eziokwu mere i ji dị iche na ndị gị na ha na-asọ mpi."]],
          slides: [
            { title: "Gịnị mere m ga-eji họrọ gị?", bullets: ["Ozi isi gị na-aza ya", "Kwughachi ya na post na flyer ọ bụla"] },
            { title: "Usoro ahụ", bullets: ["Anyị na-enyere [ndị] aka", "inweta [ihe]", "site na [ihe mere anyị ji dị iche]"] },
            { title: "Jiri AI chọọ", bullets: ["Kọọ ihe ndị ahịa na-ekwu banyere gị", "Rịọ maka ụdị ise", "Họrọ nke bụ eziokwu ma dị ka okwu gị"] }
          ],
          tryIt: "Dejupụta usoro ahụ maka azụmahịa gị. Wee rịọ ngwa enyemaka AI maka ụdị ise ma họrọ nke kacha mma.",
          youCanNow: "ide ozi isi doro anya maka azụmahịa gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ajụjụ ozi isi na-aza maka ndị ahịa?", options: ["Kedu oge ị na-emechi?", "Ndị ọrụ ole ka i nwere?", "Gịnị mere m ga-eji họrọ gị?", "Ebee ka ị zụtara ngwaọrụ gị?"], answer: 2, why: "Ozi isi na-agwa ndị ahịa ihe mere ha ga-eji họrọ gị." },
            { objective: "O1", q: "AI nyere gị ụdị ise nke ozi isi, nke kacha mma na-ekwu na ị bụ \"ụlọ ịkpa isi nke mbụ n'obodo mepere emepe\". Gịnị ka ị ga-eme?", options: ["Jiri ya n'ihi na ọ dị ike", "Họrọ ụdị bụ eziokwu ma dị ka okwu gị", "Jiri ise ahụ niile", "Tinye \"ma eleghị anya\" n'ime ya"], answer: 1, why: "Ozi isi gị ga-abụrịrị eziokwu ma dị ka okwu gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI ede post na caption soshal midia",
          minutes: 5,
          goal: "Mee ka ozi isi gị ghọọ ọtụtụ post soshal midia n'olu nke gị.",
          text: [
            "Ezigbo post obere azụmahịa na-egosi ezi ihe: nri pụrụ iche nke taa, isi tupu e kpụọ na mgbe e kpụchara, onye ahịa obi dị ụtọ (ya na ikike ya), ndị ọrụ gị, ihe na-eme n'azụ, ndụmọdụ, mmemme. Ndị mmadụ na-eso mmadụ.",
            "Rịọ AI maka ihe mbụ (draft): \"Dee caption Instagram anọ dị mkpụmkpụ maka ụlọ ịkpụ isi m. Ozi isi: [ozi gị]. Otu gbasara oge anyị na Satọdee, otu gbasara fade, otu na-ewebata onye ọkpụ isi ọhụrụ anyị Marcus, otu nwere ndụmọdụ nlekọta ntutu. Nke enyi, ahịrịokwu 2 n'otu, hashtag 3.\"",
            "Wee dezie ya. Tinye ezi ihe naanị gị maara. Wepụ ihe ọ bụla na-adị ka ụgha ma ọ bụ nke karịrị akarị. Nweta ikike mgbe niile tupu i bipụta foto ma ọ bụ aha onye ahịa."
          ],
          steps: ["Họrọ ụdị post anọ: onyinye, ihe na-eme n'azụ, ndị ọrụ, ndụmọdụ.", "Rịọ AI maka caption nwere ozi isi gị na olu gị.", "Tinye ezi ihe ma wepụ ihe ọ bụla bụ ụgha.", "Nweta ikike maka foto ma ọ bụ aha onye ahịa ọ bụla."],
          words: [["Caption", "okwu e dere ya na foto ma ọ bụ vidiyo soshal midia."], ["Hashtag", "okwu nwere # n'ihu ya, e ji achịkọta post gbasara otu isiokwu."]],
          slides: [
            { title: "Bipụta ezi ihe", bullets: ["Nri pụrụ iche nke taa ma ọ bụ tupu na mgbe", "Ndị ọrụ gị na ihe na-eme n'azụ", "Ndụmọdụ na mmemme"] },
            { title: "Rịọ AI maka ihe mbụ", bullets: ["Nye ozi isi gị na olu gị", "Kwuo ụdị post na ogologo ya", "Rịọ maka hashtag ole na ole"] },
            { title: "Wee mee ka ọ bụrụ ezi ihe", bullets: ["Tinye ihe naanị gị maara", "Wepụ ihe ụgha ma ọ bụ nke karịrị akarị", "Ikike tupu foto ma ọ bụ aha onye ahịa"] }
          ],
          tryIt: "Rịọ AI maka caption anọ maka azụmahịa gị nwere ozi isi gị. Dezie nke ọ bụla ka i tinye ezi ihe ma wepụ ihe ọ bụla na-abụghị eziokwu.",
          youCanNow: "iji enyemaka AI ede post soshal midia nke bụ ezi ihe ma dị ka azụmahịa gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ caption?", options: ["Okwu e dere ya na foto ma ọ bụ vidiyo soshal midia", "Akwụkwọ ikike azụmahịa", "Ụdị flyer", "Nyocha onye ahịa"], answer: 0, why: "Caption bụ okwu e dere ya na post foto ma ọ bụ vidiyo gị." },
            { objective: "O2", q: "Ị chọrọ ibipụta foto mara mma nke ntutu ọhụrụ onye ahịa. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Bipụta ya ma kpọọ aha ha (tag)", "Mee ka o ghara ịdị nkọ ma bipụta ya", "Jụọ AI ma ọ dị mma", "Nweta ikike onye ahịa ahụ"], answer: 3, why: "Ị chọrọ ikike onye ahịa tupu i bipụta foto ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhazi flyer ma ọ bụ foto mgbasa ozi",
          minutes: 5,
          goal: "Mee flyer ma ọ bụ foto mgbasa ozi doro anya maka otu onyinye ma ọ bụ otu mmemme.",
          text: [
            "Flyer na-arụ ọrụ n'elu tebụl ịkwụ ụgwọ, n'ebe obodo na-amanye ọkwa, n'akwụkwọ ọkwa ụka ma ọ bụ dị ka post soshal midia. Jiri ngwa nhazi n'efu dị ka Canva ma ọ bụ Adobe Express, malite na template (ihe atụ e mere emere).",
            "Mee ka akụkụ ya doo anya: isi okwu buru ibu (onyinye ahụ), otu foto, ihe atọ dị mkpụmkpụ (gịnị, oge ole, ebee), na oku ime ihe (\"Kpọọ ka i dee oge\", \"Zụta n'ịntanetị\"). Tinye ozi isi gị n'obere mkpụrụ okwu n'ala.",
            "Ọ bụrụ na i ji foto AI mere, hụ na ha anaghị egosi nri, ọrụ ma ọ bụ ihe ọ rụpụtara ị na-adịghị enye n'ezie. Jiri foto nke gị mgbe ị nwere ike; ndị ahịa na-atụkwasị ezi foto obi."
          ],
          steps: ["Meghee ngwa nhazi ma họrọ template.", "Dee isi okwu buru ibu nwere onyinye ahụ.", "Tinye otu foto, ihe atọ na oku ime ihe.", "Lelee mkpoputa, nọmba ekwentị, ụbọchị na adreesị.", "Budata ma ọ bụ kesaa ya."],
          words: [["Oku ime ihe (call to action)", "okwu na-agwa ndị mmadụ ihe ha ga-eme ọzọ, dị ka \"Kpọọ ka i dee oge\"."], ["Isi okwu (headline)", "okwu kacha ibu na flyer ma ọ bụ mgbasa ozi."]],
          slides: [
            { title: "Akụkụ nke flyer doro anya", bullets: ["Isi okwu buru ibu: onyinye ahụ", "Otu foto", "Gịnị, oge ole, ebee", "Oku ime ihe"] },
            { title: "Ngwa nhazi n'efu", bullets: ["Canva ma ọ bụ Adobe Express", "Malite na template"] },
            { title: "Foto ndị ahịa na-atụkwasị obi", bullets: ["Jiri foto nke gị mgbe ị nwere ike", "Foto AI ekwesịghị igosi ihe ị na-adịghị enye"] }
          ],
          tryIt: "Mee flyer maka otu ezi onyinye ma ọ bụ mmemme nwere isi okwu, otu foto, ihe atọ na oku ime ihe. Lelee ihe ọ bụla tupu i chekwaa ya.",
          youCanNow: "ịhazi flyer ma ọ bụ foto mgbasa ozi doro anya maka azụmahịa gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ oku ime ihe (call to action)?", options: ["Oku ekwentị nye onye ahịa", "Isi okwu buru ibu", "Okwu na-agwa ndị mmadụ ihe ha ga-eme ọzọ", "Ndepụta ọnụ ahịa"], answer: 2, why: "Oku ime ihe na-agwa ndị mmadụ nzọụkwụ na-esote, dị ka \"Kpọọ ka i dee oge\"." },
            { objective: "O3", q: "Flyer gị nwere foto AI nke achịcha ị na-adịghị eme. Gịnị ka ị ga-eme?", options: ["Hapụ ya n'ihi na ọ mara mma", "Mee ka ọ dị obere", "Tinye okwu na-ekwu na ọ bụ AI", "Were ezi foto nke ihe ị na-ere dochie ya"], answer: 3, why: "Foto kwesịrị igosi ihe ị na-ere n'ezie." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ozi gị na post gị",
        questions: [
          { objective: "O1", q: "Gịnị ka ozi isi na-aza?", options: ["Kedu okwuntughe gị?", "Gịnị mere m ga-eji họrọ gị?", "Ebee ka ụlọ akụ dị?", "Afọ ole ka onye nwe ya dị?"], answer: 1, why: "Ozi isi na-ekwu ihe mere ndị ahịa ga-eji họrọ gị." },
          { objective: "O1", q: "Kedu nke bụ ozi isi siri ike?", options: ["\"Anyị kacha mma.\"", "\"Bata.\"", "\"Nri.\"", "\"Anyị na-enyere ezinụlọ ndị na-arụsi ọrụ ike na South Sacramento aka inweta nri ndị Filipino dị ka nke ụlọ n'ime nkeji 10.\""], answer: 3, why: "Ọ na-ekwu ndị, ihe na ihe dị iche." },
          { objective: "O2", q: "Tupu i bipụta foto onye ahịa, ị ga-ebu ụzọ:", options: ["Nweta ikike ya", "Tinye filter", "Jụọ AI", "Bipụta ya n'abalị"], answer: 0, why: "Ikike na-akwanyere ndị ahịa ugwu ma na-egbochi nsogbu." },
          { objective: "O3", q: "Gịnị bụ oku ime ihe (call to action)?", options: ["Hashtag", "Ụgwọ ekwentị", "Okwu na-agwa ndị mmadụ ihe ha ga-eme ọzọ", "Akara azụmahịa (logo)"], answer: 2, why: "Ọ na-agwa ndị mmadụ nzọụkwụ na-esote, dị ka \"Kpọọ ka i dee oge\"." },
          { objective: "O3", q: "Foto AI na-egosi nri ị na-adịghị ere. Gịnị ka ị ga-eme?", options: ["Jiri ya agbanyeghị", "Tinyekwuo nri adịgboroja", "Were ezi foto ma ọ bụ foto nke ihe ị na-ere dochie ya", "Bipụta ya ugboro abụọ"], answer: 2, why: "Foto ekwesịghị iduhie ndị ahịa." }
        ]
      }
    },
    {
      name: "Isi 2: Atụmatụ, eziokwu na ihe ọ rụpụtara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi kalenda ihe ị ga-ebipụta kwa ọnwa",
          minutes: 5,
          goal: "Hazie post izu anọ na kalenda dị mfe.",
          text: [
            "Kalenda ihe ị ga-ebipụta (content calendar) bụ tebụl na-ekwu ihe ị ga-ebipụta na mgbe ị ga-ebipụta ya. Ọ na-akwụsị ụjọ \"gịnị ka m ga-ebipụta taa?\".",
            "Mee kọlụm ndị a: Ụbọchị, Ikpo okwu (platform), Ụdị post, Echiche, Caption emechala?, Foto emechala?. Hazie post abụọ ma ọ bụ atọ kwa izu nke ị nwere ike ime n'ezie. Gwakọta ụdị: onyinye, ndụmọdụ, ndị ọrụ, ndị ahịa (ya na ikike) na mmemme obodo.",
            "Jụọ AI: \"Mee kalenda post izu anọ maka azụmahịa nhicha m, post abụọ kwa izu, na-agwakọta onyinye, ndụmọdụ na post ndị ọrụ. Ozi isi anyị bụ [...]. Tinye ezumike na mmemme obodo dị na [obodo] n'ọnwa [ọnwa] nke m kwesịrị ilele.\" Wee lelee ụbọchị na mmemme ọ bụla n'onwe gị."
          ],
          steps: ["Mee tebụl kalenda nwere kọlụm isii.", "Họrọ post ole kwa izu ị nwere ike ime.", "Rịọ AI maka echiche izu anọ.", "Lelee ụbọchị na mmemme obodo n'onwe gị.", "Kaa akara na post emechala ka ị na-aga."],
          words: [["Kalenda ihe ị ga-ebipụta (content calendar)", "usoro na-egosi ihe ị ga-ebipụta na mgbe."], ["Ikpo okwu (platform)", "saịtị ma ọ bụ app soshal midia, dị ka Instagram, Facebook ma ọ bụ TikTok."]],
          slides: [
            { title: "Ihe mere kalenda ji dị mkpa", bullets: ["Ọ dịghịzi \"gịnị ka m ga-ebipụta taa?\"", "Tebụl nke ihe na mgbe"] },
            { title: "Kọlụm", bullets: ["Ụbọchị, Ikpo okwu, Ụdị post", "Echiche, Caption emechala?, Foto emechala?"] },
            { title: "Jiri AI hazie", bullets: ["Post abụọ ma ọ bụ atọ kwa izu ị nwere ike ime", "Gwakọta onyinye, ndụmọdụ, ndị ọrụ, obodo", "Lelee ụbọchị na mmemme ọ bụla n'onwe gị"] }
          ],
          tryIt: "Rịọ AI maka kalenda izu anọ, post abụọ kwa izu, maka azụmahịa gị. Tinye ya na tebụl ma lelee ụbọchị ọ bụla.",
          youCanNow: "ịhazi post otu ọnwa na kalenda ihe ị ga-ebipụta.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ kalenda ihe ị ga-ebipụta?", options: ["Usoro nke ihe ị ga-ebipụta na mgbe", "Ndepụta ezumike", "Akụkọ ire ahịa", "Oge ị na-emeghe"], answer: 0, why: "Kalenda ihe ị ga-ebipụta na-ahazi post gị site n'ụbọchị." },
            { objective: "O4", q: "Kalenda AI na-ahazi post abụọ kwa ụbọchị, mana i nwere oge maka abụọ kwa izu. Gịnị ka ị ga-eme?", options: ["Gbalịa ibipụta kwa ụbọchị agbanyeghị", "Belata ya ruo ọnụ ọgụgụ ị nwere ike ime n'ezie", "Hapụ kalenda ahụ", "Were ụlọ ọrụ ire ahịa n'ọrụ"], answer: 1, why: "Hazie ọnụ ọgụgụ post ị nwere ike ime n'ezie." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Idebe ire ahịa gị n'eziokwu na n'iwu",
          minutes: 5,
          goal: "Lelee ire ahịa gị maka okwu ị na-enweghị ike igosi na ọ bụ eziokwu, nyocha adịgboroja na iwu email.",
          text: [
            "Federal Trade Commission (FTC, ụlọ ọrụ gọọmentị US na-ahụ maka azụmahịa) kwuru na mgbasa ozi ga-abụrịrị eziokwu, ghara iduhie mmadụ, na ị ga-enwerịrị ihe akaebe maka okwu ị na-ekwu. \"Taco kacha mma na LA\" bụ echiche, mana \"Nhicha anyị na-egbu 99% nke nje\" ma ọ bụ \"Felata kilo 10 (pound 10)\" bụ okwu ị ga-enwerịrị ike igosi.",
            "AI hụrụ okwu ukwu n'anya: \"e kwere nkwa (guaranteed)\", \"meriri ihe nrite (award-winning)\", \"nke mbụ\". Wepụ nke ọ bụla ị na-enweghị ike igosi. Ebipụtala nyocha ma ọ bụ akaebe adịgboroja mgbe ọ bụla; iwu FTC gbasara nyocha machibidoro ha, gụnyere ndị AI dere.",
            "Email ire ahịa ga-agbasorịrị CAN-SPAM: onye ziri ya na isiokwu ya ga-abụ eziokwu, kwuo na ọ bụ mgbasa ozi, tinye adreesị nzipu ozi gị na ụzọ dị mfe isi kwụsị ịnata ya (unsubscribe), ma kwanyere arịrịọ ịkwụsị ndị ahụ ugwu n'ime ụbọchị ọrụ 10."
          ],
          steps: ["Dee ahịrị n'okpuru okwu ọ bụla dị na post ma ọ bụ flyer gị.", "Jụọ: enwere m ike igosi nke a?", "Wepụ ma ọ bụ gbanwee okwu ị na-enweghị ike igosi.", "Enweghị nyocha ma ọ bụ akaebe adịgboroja.", "Lelee email ire ahịa maka ihe ndị bụ isi nke CAN-SPAM."],
          words: [["Okwu nkwupụta (claim)", "okwu na-ekwu eziokwu na mgbasa ozi, dị ka \"na-egbu 99% nke nje\"."], ["Iduhie (misleading)", "inwe ike inye ndị mmadụ echiche ezighi ezi."], ["Akaebe onye ahịa (testimonial)", "okwu onye ahịa na-eto azụmahịa gị, nke e ji eme ire ahịa."]],
          slides: [
            { title: "FTC: mgbasa ozi nke eziokwu", bullets: ["Mgbasa ozi ekwesịghị iduhie", "Ị chọrọ ihe akaebe maka okwu gị"] },
            { title: "Wepụ okwu ukwu ị na-enweghị ike igosi", bullets: ["\"E kwere nkwa\", \"meriri ihe nrite\", \"nke mbụ\"", "Enweghị nyocha adịgboroja, ọbụlagodi nke AI dere"] },
            { title: "Email ire ahịa (CAN-SPAM)", bullets: ["Onye ziri ya na isiokwu nke eziokwu; kwuo na ọ bụ mgbasa ozi", "Adreesị nzipu ozi na ụzọ dị mfe isi kwụsị ịnata ya", "Kwanyere arịrịọ ịkwụsị ugwu n'ime ụbọchị ọrụ 10"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Were caption anọ gị na flyer gị. Dee ahịrị n'okpuru okwu ọ bụla, ma gbanwee ma ọ bụ wepụ nke ọ bụla ị na-enweghị ike igosi.",
          youCanNow: "ịlele ire ahịa gị maka okwu a na-enweghị ike igosi, nyocha adịgboroja na nsogbu iwu email.",
          quickCheck: [
            { objective: "O5", q: "Dị ka FTC si kwuo, gịnị ka mgbasa ozi ga-abụrịrị?", options: ["Ihe ọchị", "Mkpụmkpụ", "Eziokwu na nke na-anaghị eduhie", "A na-ebipụta ya kwa ụbọchị"], answer: 2, why: "Iwu FTC kwuru na mgbasa ozi ga-abụrịrị eziokwu ma ghara iduhie." },
            { objective: "O5", q: "AI dere \"A tụrụ vootu na ọ bụ taco kacha mma na LA\" na caption gị, mana ọ dịghị vootu e mere. Gịnị ka ị ga-eme?", options: ["Wepụ ya", "Hapụ ya; onye ọ bụla na-ekwu ya", "Gbanwee ya ka ọ bụrụ \"A tụrụ vootu na ọ bụ taco kacha mma n'obodo\"", "Rịọ ndị enyi ka ha tụọ vootu ugbu a"], answer: 0, why: "A ga-ewepụrịrị okwu ị na-enweghị ike igosi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhụ ihe na-arụ ọrụ",
          minutes: 5,
          goal: "Soro post na flyer ndị na-akpọta ndị ahịa.",
          text: [
            "Likes dị mma, mana ndị ahịa ka mkpa. Soro ihe ịrịba ama dị mfe: ozi na oku, ndebanye oge (bookings), ndị na-akpọ aha post, na iji koodu pụrụ iche (\"Kwuo FLYER10 ka i nweta mbelata 10%\").",
            "Ọtụtụ ikpo okwu soshal midia na-egosi akaụntụ azụmahịa nọmba n'efu, dị ka reach na nleta profaịlụ; chọọ ngalaba insights ma ọ bụ analytics. Dee nọmba ndị bụ isi na tebụl nsoro kwa izu.",
            "Otu ugboro n'ọnwa, tinye tebụl gị (n'enweghị aha ndị ahịa) n'ime ngwa enyemaka AI ma jụọ: \"Kedu ụdị post kpọtara ndebanye oge kacha ọtụtụ? Gịnị ka m kwesịrị ime karịa?\" Kwado ya na tebụl gị, wee hazie ọnwa na-abịa."
          ],
          steps: ["Họrọ ihe ịrịba ama: ozi, ndebanye oge, ndị kpọrọ aha post, iji koodu.", "Tinye koodu pụrụ iche n'otu onyinye.", "Dee nọmba ndị ahụ kwa izu na tebụl.", "Rịọ AI ka ọ chọta usoro otu ugboro n'ọnwa ma kwado ha."],
          words: [["Reach", "ọnụ ọgụgụ ndị hụrụ post."], ["Insights", "nọmba ikpo okwu na-egosi banyere otu post gị si mee."], ["Koodu mbelata ọnụ ahịa (promo code)", "okwu ndị ahịa na-ekwu ma ọ bụ na-ede iji nweta onyinye, nke na-enyere gị aka iso ya."]],
          slides: [
            { title: "Ndị ahịa karịa likes", bullets: ["Ozi, oku na ndebanye oge", "Ndị na-akpọ aha post", "Koodu pụrụ iche dị ka FLYER10"] },
            { title: "Nọmba n'efu", bullets: ["Akaụntụ azụmahịa na-egosi insights", "Reach na nleta profaịlụ", "Dee ha na tebụl kwa izu"] },
            { title: "Nyocha kwa ọnwa ya na AI", bullets: ["Tinye tebụl ahụ, enweghị aha", "Jụọ ihe kpọtara ndebanye oge kacha ọtụtụ", "Kwado ya, wee hazie ọnwa na-abịa"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa ire ahịa otu ọnwa gị: ozi isi, kalenda izu anọ, caption anọ emechara emecha, otu flyer, na tebụl nsoro nwere koodu mbelata ọnụ ahịa n'otu onyinye. Lelee okwu na foto ọ bụla.",
          youCanNow: "ịhazi, ime na ịtụ ire ahịa otu ọnwa nke eziokwu maka azụmahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka reach pụtara?", options: ["Ọnụ ọgụgụ ndị zụtara ihe", "Ọnụ ọgụgụ ndị hụrụ post", "Otu ndị ahịa si eme njem tere aka", "Ọnụ ọgụgụ post i mere"], answer: 1, why: "Reach bụ ọnụ ọgụgụ ndị hụrụ post." },
            { objective: "O6", q: "Ị chọrọ ịmata ma flyer gị kpọtara ndị ahịa. Gịnị ka ị ga-eme?", options: ["Chee ya site n'otu ọ dị ka ọ na-adị ọrụ", "Rịọ AI ka o chee ya", "Gụọ likes gị", "Tinye koodu mbelata pụrụ iche na flyer ma soro ya"], answer: 3, why: "Koodu pụrụ iche na-egosi ire ahịa kpọtara onye ahịa ọ bụla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Atụmatụ, eziokwu na ihe ọ rụpụtara",
        questions: [
          { objective: "O4", q: "Gịnị bụ kalenda ihe ị ga-ebipụta?", options: ["Usoro nke ihe ị ga-ebipụta na mgbe", "Kalenda ụtụ isi", "Usoro oge ndị ọrụ", "Elekere mgbidi"], answer: 0, why: "Ọ na-ahazi post gị." },
          { objective: "O4", q: "Kalenda AI dere ememme obodo n'otu ụbọchị. Gịnị ka ị ga-eme?", options: ["Hichapụ kalenda ahụ", "Tụkwasị ya obi", "Bipụta ihe gbasara ya n'eleleghị ya", "Lelee ụbọchị ahụ n'onwe gị"], answer: 3, why: "AI nwere ike ime mperi n'ụbọchị na mmemme." },
          { objective: "O5", q: "Kedu okwu chọrọ ihe akaebe?", options: ["\"Bịa kelee anyị\"", "\"Nhicha anyị na-egbu 99% nke nje\"", "\"Anyị hụrụ agbata obi anyị n'anya\"", "\"Anyị na-emeghe na Satọdee\""], answer: 1, why: "Okwu eziokwu doro anya chọrọ ihe akaebe." },
          { objective: "O6", q: "Kedu ihe ịrịba ama kacha mma na post rụrụ ọrụ?", options: ["Ndebanye oge ọhụrụ site n'aka ndị kpọrọ aha ya", "Otu like ọzọ", "Agba mara mma", "Caption dị ogologo"], answer: 0, why: "Ndị ahịa ka likes mkpa." },
          { objective: "O6", q: "Gịnị mere ị ga-eji tinye koodu pụrụ iche dị ka FLYER10?", options: ["Iwu chọrọ ya", "Ime ka ndị ahịa ghara ịghọta", "Iso ire ahịa kpọtara ndị ahịa", "Izochi ọnụ ahịa"], answer: 2, why: "Koodu na-egosi akụkụ rụrụ ọrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI n'Ire Ahịa maka Obere Azụmahịa",
    questions: [
      { objective: "O1", q: "Usoro ozi isi bụ: Anyị na-enyere [ndị] aka inweta [ihe] site na...", options: ["Okwuntughe anyị", "Ihe mere anyị ji dị iche", "Mbelata ọnụ ahịa mgbe niile", "Aha onye anyị na ya na-asọ mpi"], answer: 1, why: "Ihe dị iche na-emezu ya." },
      { objective: "O1", q: "Ozi isi gị kwesịrị ịbụ:", options: ["Ihe nzuzo", "Nke kacha ibu o kwere omume", "Nke e detuuru n'aka onye ị na-asọ mpi", "Eziokwu ma dị ka okwu gị"], answer: 3, why: "Ndị ahịa na-atụkwasị ozi eziokwu obi." },
      { objective: "O1", q: "Ebee ka ozi isi gị kwesịrị ịpụta?", options: ["Ebe ọ bụla", "Naanị n'isi gị", "Naanị n'ụtụ isi", "Na post, flyer na akara gị"], answer: 3, why: "Ikwughachi ya na-eme ka ndị mmadụ mata gị." },
      { objective: "O2", q: "Kedu nke bụ ezigbo post obere azụmahịa?", options: ["Foto osimiri e zụrụ n'ịntanetị (stock photo)", "Ntutu tupu na mgbe e kpụchara, ya na ikike", "Nyocha adịgboroja", "Foto onye ị na-asọ mpi"], answer: 1, why: "Ezi ọrụ na-ewu ntụkwasị obi." },
      { objective: "O2", q: "Mgbe AI dechara caption, ị kwesịrị:", options: ["Itinyekwu okwu ukwu", "Ibipụta ha n'agbanweghị ha", "Itinye ezi ihe ma wepụ ihe ọ bụla bụ ụgha", "Ihichapụ peeji gị"], answer: 2, why: "Idezi ha na-eme ka ha bụrụ ezi ihe ma ziri ezi." },
      { objective: "O2", q: "Gịnị bụ caption?", options: ["Okwu e dere ya na foto ma ọ bụ vidiyo soshal midia", "Risiiti", "Akara ọnụ ahịa", "Akara azụmahịa (logo)"], answer: 0, why: "Caption na-akọwa post." },
      { objective: "O3", q: "Kedu ngwa n'efu nwere ike ime flyer?", options: ["Igwe ịnakọta ego", "Igwe mgbakọ", "Canva ma ọ bụ Adobe Express", "Chaja ekwentị"], answer: 2, why: "Ha bụ ngwa nhazi nwere template." },
      { objective: "O3", q: "Isi okwu flyer kwesịrị ịbụ:", options: ["Nke buru ibu ma gbasara onyinye ahụ", "Nke dị obere nke ukwuu", "Nke na-adịghị", "Okwuntughe gị"], answer: 0, why: "Isi okwu na-adọta uche." },
      { objective: "O3", q: "Kedu foto ndị ahịa kacha atụkwasị obi?", options: ["Foto AI nke ihe ị na-adịghị ere", "Ezi foto nke gị", "Foto ọ bụla si n'ịntanetị", "Foto ndị gị na ha na-asọ mpi"], answer: 1, why: "Ezi foto na-ewu ntụkwasị obi." },
      { objective: "O4", q: "Post ole kwa izu ka ị kwesịrị ịhazi?", options: ["Ọnụ ọgụgụ ọ bụla AI tụrụ aro", "Iri ise", "Ọ dịghị", "Ọnụ ọgụgụ ị nwere ike ime n'ezie"], answer: 3, why: "Ime ya mgbe niile ka ike ịgwụ mma." },
      { objective: "O4", q: "Kedu nke bụ kọlụm kalenda ihe ị ga-ebipụta?", options: ["Ụdị post", "Nọmba kaadị onye ahịa", "Okwuntughe", "PIN ụlọ akụ"], answer: 0, why: "Ụdị post na-enyere gị aka ịgwakọta ihe ị na-ebipụta." },
      { objective: "O4", q: "Ịgwakọta ụdị post pụtara:", options: ["Naanị ibipụtaghachi ihe ndị ọzọ", "Naanị mbelata ọnụ ahịa", "Naanị selfie", "Post onyinye, ndụmọdụ, ndị ọrụ na obodo"], answer: 3, why: "Ụdị dị iche iche na-eme ka ndị na-eso gị nwee mmasị." },
      { objective: "O5", q: "Dị ka FTC si kwuo, mgbasa ozi ga-abụrịrị:", options: ["Ogologo", "Ihe ọchị", "Eziokwu na nke na-anaghị eduhie", "N'agba"], answer: 2, why: "Nke ahụ bụ iwu FTC bụ isi." },
      { objective: "O5", q: "AI tinyere \"meriri ihe nrite\" mana ị nweghị ihe nrite ọ bụla. Ị ga-:", options: ["Hapụ ya", "Wepụ ya", "Chepụta ihe nrite", "Tinye \"e kwere nkwa\""], answer: 1, why: "Okwu a na-enweghị ike igosi na-eduhie." },
      { objective: "O5", q: "Nyocha adịgboroja AI dere bụ:", options: ["Iwu chọrọ ha", "Ọ dị mma ma ọ bụrụ na ọ dị mkpụmkpụ", "Ọ dị mma na ngwụcha izu", "E machibidoro ha n'iwu FTC gbasara nyocha"], answer: 3, why: "Iwu ahụ gụnyere ndị adịgboroja AI mere." },
      { objective: "O5", q: "Email ire ahịa CAN-SPAM ga-enwerịrị:", options: ["Onye ziri ya adịgboroja", "Nọmba kaadị onye ahịa", "Adreesị nzipu ozi gị na ụzọ isi kwụsị ịnata ya", "Enweghị isiokwu"], answer: 2, why: "A chọrọ ha abụọ." },
      { objective: "O6", q: "Reach pụtara:", options: ["Ọnụ ọgụgụ ndị hụrụ post", "Ọnụ ọgụgụ ndị zụtara", "Ọnụ ọgụgụ ndị ọrụ", "Ike Wi-Fi gị"], answer: 0, why: "Reach na-agụ ndị hụrụ ya." },
      { objective: "O6", q: "Ebee ka ị na-ahụ nọmba post n'efu n'akaụntụ azụmahịa?", options: ["Igwe mbipụta risiiti gị", "Ngalaba insights ma ọ bụ analytics", "Ụlọ akụ gị", "Ebe ọ bụla"], answer: 1, why: "Ikpo okwu na-egosi akaụntụ azụmahịa insights." },
      { objective: "O6", q: "Tupu i tinye nọmba nsoro n'ime AI, wepụ:", options: ["Ụbọchị", "Aha ndị ahịa", "Ụdị post", "Ngụkọta"], answer: 1, why: "Aha ndị ahịa bụ ozi nzuzo." },
      { objective: "O6", q: "Mgbe AI kwuru na post ndụmọdụ na-akpọta ndebanye oge kacha ọtụtụ, ị ga-:", options: ["Kwado ya na tebụl gị, wee hazie ndị ọzọ", "Kwụsị post ndụmọdụ niile", "Leghara ya anya", "Hichapụ akaụntụ gị"], answer: 0, why: "Kwado ya, wee mee ihe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 4, 5, 7, 8, 9, 12, 13, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ozi isi", objective: "O1", notYet: "Ọ doghị anya, ma ọ bụ na-ekwu ihe na-abụghị eziokwu.", meets: "Otu ahịrịokwu ma ọ bụ abụọ nke eziokwu: ndị ị na-ejere ozi, ihe ị na-eme, ihe mere i ji dị iche.", exceeds: "Ọ pụtara na post na na flyer." },
      { name: "Kalenda ihe ị ga-ebipụta", objective: "O4", notYet: "Post na-erughị asatọ, ma ọ bụ e leleghị ụbọchị.", meets: "Izu anọ nwere opekata mpe post asatọ, e lelere ụbọchị.", exceeds: "Ọ na-agwakọta post onyinye, ndụmọdụ, ndị ọrụ na obodo." },
      { name: "Caption", objective: "O2", notYet: "Ha erughị anọ, ma ọ bụ ha nwere ihe na-abụghị eziokwu.", meets: "Caption anọ emechara emecha nwere ezi ihe n'ime nke ọ bụla.", exceeds: "Nke ọ bụla nwere oku ime ihe doro anya ma dị ka okwu onye nwe azụmahịa ahụ." },
      { name: "Flyer", objective: "O3", notYet: "Isi okwu, ihe e kwuru ma ọ bụ oku ime ihe adịghị.", meets: "Isi okwu, otu ezi foto, ihe atọ na oku ime ihe, ha niile elelere.", exceeds: "Ọ gụnyere koodu mbelata ọnụ ahịa maka nsoro." },
      { name: "Okwu na foto nke eziokwu", objective: "O5", notYet: "Enweghị ike igosi otu okwu, ma ọ bụ otu foto abụghị nke i nwere ike iji.", meets: "Enwere ike igosi okwu ọ bụla, foto ọ bụla bụkwa nke gị ma ọ bụ nke e nyere gị ikike iji.", exceeds: "Onye nwe azụmahịa ahụ nwere ike ikwu otu e si akwado okwu ọ bụla." },
      { name: "Tebụl nsoro", objective: "O6", notYet: "Enweghị ụzọ isi mata post rụrụ ọrụ.", meets: "Tebụl iji dee ihe ọ rụpụtara, ya na koodu mbelata ọnụ ahịa n'otu onyinye.", exceeds: "Ọ na-eji nọmba insights n'efu ma hazie ilele ihe ọ rụpụtara na njedebe ọnwa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa na-ebipụta ihe dị ka kalenda ha si dị ọnwa niile (nnyocha nsochi ụbọchị 30)",
      "Ndị nwe azụmahịa nwere ike ịkpọ aha post ma ọ bụ flyer kpọtara ndị ahịa ọhụrụ, site na tebụl nsoro ha",
      "Ndị nwe azụmahịa na-akọ na ndebanye oge ma ọ bụ ire ahịa ha mụbara mgbe ọnwa ahụ gachara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere igwefoto na ịntanetị; kọmputa na-enyere aka maka flyer na tebụl",
      "Ngwa enyemaka AI n'efu na ngwa nhazi n'efu dị ka Canva ma ọ bụ Adobe Express",
      "Ezi foto nke azụmahịa gị, ngwaahịa gị ma ọ bụ ọrụ gị",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ ndị nwe azụmahịa ka ha bute ezi foto ole na ole na otu onyinye ma ọ bụ mmemme na-abịa abịa na nnọkọ ahụ.",
      "Chetara ndị nwe azụmahịa ka ha nweta ikike tupu ha ebipụta foto onye ahịa ọ bụla.",
      "Mee ka ndị nwe azụmahịa dee ahịrị n'okpuru okwu ọ bụla dị na caption na flyer ha ọnụ, wee kọọ otu ha ga-esi gosi nke ọ bụla.",
      "Aha ndị ahịa ga-anọ n'ebe ngwa AI na-adịghị mgbe a na-etinye nọmba nsoro.",
      "Jiri rubric tụọ akara ire ahịa otu ọnwa ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
