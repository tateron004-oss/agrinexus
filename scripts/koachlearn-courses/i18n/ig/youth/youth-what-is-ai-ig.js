"use strict";

// Koach Learn course (Igbo translation of youth/youth-what-is-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-what-is-ai-ig",
  lang: "ig",
  translationOf: "youth-what-is-ai",
  category: "Youth",
  name: "Gịnị bụ AI? (maka ndị ntorobịa)",
  skills: "Ịkọwa ihe AI bụ, Ịhụ AI n'app ị na-eji kwa ụbọchị, Ịgbaso oke afọ na iwu ụlọ akwụkwọ, Ịjụ ngwa enyemaka AI ajụjụ doro anya, Ịlele eziokwu dị n'azịza AI",
  outcome: "ịkọwa ihe AI bụ n'okwu nke gị, ịhụ ya n'app ị na-eji ugbu a, na iji ngwa enyemaka AI n'efu n'ụzọ ziri ezi: n'ime oke afọ ya na iwu ụlọ akwụkwọ gị, site n'ajụjụ doro anya, na ịlele azịza ya tupu i kwere ya.",
  about: [
    "AI dịlarị n'ekwentị gị, n'egwuregwu gị, n'app egwu gị na n'ngwa ụlọ akwụkwọ gị. Ihe ọmụmụ a bụ maka ndị ntorobịa dị ihe dị ka afọ 13 ruo 18 chọrọ ịghọta ihe ọ bụ n'ezie na otu esi eji ya nke ọma.",
    "Ị ga-amụta ihe AI bụ na ihe ọ bụghị, ebe o zoro n'app ị na-eji kwa ụbọchị, otu esi agbaso oke afọ na iwu AI nke ụlọ akwụkwọ gị, otu esi ajụ ajụjụ doro anya, na otu esi elele azịza tupu i kwere ya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ ya, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee \"nkọwa AI\" nwere otu peeji maka nwata akwụkwọ nọ n'okpuru gị ma ọ bụ enyi gị: kwuo ihe AI bụ n'ahịrịokwu abụọ, kpọọ aha app atọ ị na-eji nwere AI n'ime ha, ma tinye otu ajụjụ ị jụrụ ngwa enyemaka AI, azịza ya, na otu i si lelee ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa dị ihe dị ka afọ 13 ruo 18, ndị nọ n'ụlọ akwụkwọ ma ọ bụ ndị na-anọghị ya, ndị na-eji ekwentị, egwuregwu na app, chọrọ ịghọta ihe AI bụ n'ezie na otu esi eji ya nke ọma.",
    startingPoint: "Ha na-eji app egwu, vidiyo, egwuregwu na ozi kwa ụbọchị, ụfọdụ anwaala ngwa enyemaka mkparịta ụka. Ọtụtụ n'ime ha enweghị ike ịkọwa otu AI si arụ ọrụ, ebe o zoro n'app ha, ma ọ bụ otu esi elele ihe ọ na-ekwu.",
    gap: "AI dị n'ngwa ndị ntorobịa na-eji maka ụlọ akwụkwọ na egwuregwu, mana ọtụtụ na-eji ya n'amaghị oke afọ ya, iwu ụlọ akwụkwọ ha, ma ọ bụ na o nwere ike ime mperi. Ịmụta ịjụ ajụjụ doro anya, ịlele azịza na ịnọ n'enweghị nsogbu na-enyere ha aka ịmụta nke ọma, zere nsogbu ịghọ aghụghọ n'ule, ma chebe onwe ha na ndị ọzọ.",
    constraints: [
      "Oke afọ: ọtụtụ ngwa AI chọrọ ka onye na-eji ya gbaa afọ 13 ma ọ bụ karịa, ụfọdụ chọkwara ikike nne na nna ma ọ bụ onye nlekọta maka onye na-erubeghị afọ 18",
      "Iwu AI dị iche iche site n'otu ụlọ akwụkwọ ruo n'ọzọ, na site n'otu onye nkuzi ruo n'ọzọ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ; ụfọdụ nwere obere ịntanetị n'ụlọ",
      "Nzuzo na nchekwa: ọ dịghị ozi nzuzo ma ọ bụ foto ezi mmadụ n'ime ngwa AI",
      "Okwu dị mfe na nkuzi dị mkpụmkpụ maka ọkwa ịgụ akwụkwọ dị iche iche"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'okwu nke gị", action: "ịkọwa ihe AI bụ, otu o si amụta ihe site n'ọmụmaatụ, na ihe mere o ji nwee ike ime mperi", standard: "n'ahịrịokwu abụọ nwata akwụkwọ nọ n'okpuru gị ga-aghọta" },
    { id: "O2", condition: "Site n'iji app dị n'ekwentị gị ma ọ bụ kọmputa ụlọ akwụkwọ", action: "ịmata ebe AI na-atụ aro, na-ahazi, na-eche echiche ma ọ bụ na-emepụta ihe, gụnyere generative AI", standard: "na-akpọ aha opekata mpe app atọ na ihe AI na-eme n'ime nke ọ bụla" },
    { id: "O3", condition: "Tupu i jiri ngwa AI ọhụrụ n'ụlọ ma ọ bụ n'ụlọ akwụkwọ", action: "ịlele iwu afọ nke ngwa ahụ na iwu AI nke ụlọ akwụkwọ gị, ma gosi nne na nna gị ma ọ bụ onye nlekọta gị app ahụ", standard: "site n'iji peeji enyemaka ma ọ bụ peeji iwu (terms) nke ụlọ ọrụ ahụ n'onwe ya" },
    { id: "O4", condition: "Mgbe e nyere gị ihe ị chọrọ ịmụta", action: "ide prompt na-ekwu ihe ị chọrọ, ntakịrị banyere ọnọdụ gị, na otu ị chọrọ ka azịza dị", standard: "nke mere na azịza mbụ ga-aba uru" },
    { id: "O5", condition: "Mgbe e nyere gị azịza AI nwere eziokwu n'ime ya", action: "ịlele aha, ụbọchị na nọmba n'isi iyi a pụrụ ịtụkwasị obi", standard: "na-edetu ebe i lelere eziokwu ọ bụla" },
    { id: "O6", condition: "Mgbe ị na-ede prompt ma ọ bụ hụ ihe AI mere", action: "idebe ozi nzuzo n'ebe ọ na-adịghị, ịjụ ime ihe adịgboroja gbasara ezi mmadụ, na ịjụ ajụjụ maka azịza na-ezighi ezi n'ebe ndị ọzọ nọ", standard: "n'ekesaghị ozi nzuzo ọ bụla, na ịgwa okenye ị tụkwasịrị obi maka ihe adịgboroja na-emerụ mmadụ ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe AI bụ na ebe ị na-ahụ ya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe AI bụ, n'okwu dị mfe",
          minutes: 4,
          goal: "Kọwaa n'ahịrịokwu abụọ ihe AI bụ na ihe ọ bụghị.",
          text: [
            "AI bụ mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ). Ọ pụtara mmemme kọmputa na-eme ihe ndị na-achọkarị echiche mmadụ, dị ka ịmata ihu mmadụ, ịghọta okwu, ịtụ aro egwu ma ọ bụ ide azịza.",
            "Ọtụtụ AI na-amụta ihe site n'ọtụtụ ọmụmaatụ. Mmemme hụrụ ọtụtụ nde foto nwamba nwere ike iche ma foto ọhụrụ nwere nwamba n'ime ya. Mmemme gụrụ ọtụtụ ihe e dere ede nwere ike ide ahịrịokwu dị ka nke mmadụ dere.",
            "AI adịghị ndụ, o nweghị mmetụta, ọ ghọtaghịkwa ụwa n'ezie otu ị na-aghọta ya. Ọ na-achọta ụkpụrụ (pattern) ma na-eche echiche kacha mma ya. Ọ bụ ya mere o ji nwee ike ịba uru nke ukwuu ma ka mehie."
          ],
          words: [["AI", "artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa na-eme ọrụ ndị na-achọkarị echiche mmadụ."], ["Ụkpụrụ (pattern)", "ihe na-emegharị onwe ya n'ụzọ mmemme nwere ike ịmụta ma jiri ya chee echiche."]],
          slides: [
            { title: "AI = artificial intelligence (ọgụgụ isi arụrụ arụ)", bullets: ["Mmemme na-eme ọrụ chọrọ echiche", "Ịmata ihu, ịghọta okwu, ide azịza"] },
            { title: "Otu o si amụta ihe", bullets: ["Ọ na-amụ ọtụtụ ọmụmaatụ", "Ọ na-achọta ụkpụrụ", "Ọ na-eche echiche kacha mma ya"] },
            { title: "Ihe AI Ọ BỤGHỊ", bullets: ["Ọ dịghị ndụ, o nweghị mmetụta", "Ọ ghọtaghị ihe otu ị na-aghọta", "O nwere ike ime mperi, ọbụlagodi mgbe o yiri ka o ji n'aka"] }
          ],
          tryIt: "Dee ahịrịokwu abụọ na-akọwa AI nye nwata dị afọ iri. Ejila okwu ọ na-amaghị. Gụọra mmadụ ya ma jụọ ma ọ ghọtara ya.",
          youCanNow: "ịkọwa ihe AI bụ na ihe ọ bụghị n'ahịrịokwu abụọ dị mfe.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ọ pụtara na AI \"na-achọta ụkpụrụ\"?", options: ["Ọ na-enwe mmetụta ị na-enwe", "Ọ maara ihe niile gbasara ụwa", "Ọ na-amụta ihe site n'ọtụtụ ọmụmaatụ ma na-eche echiche kacha mma ya", "Ọ na-agụ uche gị"], answer: 2, why: "AI na-amụta ihe site n'ọtụtụ ọmụmaatụ ma na-eche echiche dabere n'ụkpụrụ ọ chọtara." },
            { objective: "O1", q: "Enyi gị kwuru, \"AI dị ndụ ma ọ na-aghọta m.\" Gịnị ka ị ga-agwa ya?", options: ["AI adịghị ndụ, o nweghị mmetụta; ọ na-eche echiche site n'ụkpụrụ", "Ee, o nwere mmetụta dị ka mmadụ", "Naanị AI a na-akwụ ụgwọ dị ndụ", "AI na-arụ ọrụ naanị n'ekwentị"], answer: 0, why: "AI bụ mmemme na-achọta ụkpụrụ; ọ dịghị ndụ, ọ ghọtaghịkwa ihe n'ezie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhụ AI n'app ị na-eji ugbu a",
          minutes: 5,
          goal: "Kpọọ aha opekata mpe ebe atọ AI na-apụta n'app ị na-eji kwa ụbọchị.",
          text: [
            "Ọ ga-abụ na ị na-eji AI kwa ụbọchị n'akpọghị ya aha ahụ. App egwu na vidiyo na-atụ aro ihe ị ga-egwu ọzọ dabere n'ihe masịrị gị na mbụ. Nke ahụ bụ AI na-achọ ụkpụrụ n'ihe ị na-ahọrọ.",
            "Igwefoto ekwentị na-eji AI eme ka foto doo anya ma mee ka azụ foto ghara ịdị nkọ. Keyboard na-eche okwu ị ga-ede ọzọ. Map na-eche ụgbọala dị n'okporo ụzọ. Egwuregwu na-eji AI achịkwa ndị ị na-egwu megide. App email na ozi na-ewepụ spam (ozi efu).",
            "Ngwa enyemaka mkparịta ụka, dị ka ChatGPT, Microsoft Copilot na Google Gemini, bụ ụdị ọhụrụ a na-akpọ generative AI. Kama ịhazi ma ọ bụ ịtụ aro naanị, ha na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ."
          ],
          steps: ["Meghee app ị na-eji nke ukwuu.", "Jụọ: ọ na-atụ aro, na-ahazi, na-eche echiche ma ọ bụ na-emepụta ihe maka m?", "Ọ bụrụ ee, ọ ga-abụ na ọ bụ AI na-arụ ọrụ.", "Dee aha app ahụ na ihe AI na-eme."],
          words: [["Aro (recommendation)", "ihe app na-atụ aro dabere n'ihe i mere na mbụ."], ["Generative AI", "AI na-emepụta ihe ọhụrụ, dị ka ederede, foto ma ọ bụ egwu."]],
          slides: [
            { title: "AI ị na-eji ugbu a", bullets: ["Aro egwu na vidiyo", "Igwefoto ekwentị na-edozi foto", "Keyboard na-eche okwu ọzọ", "Ndị n'egwuregwu na ihe na-ewepụ spam"] },
            { title: "Jụọ onwe gị", bullets: ["App ahụ ọ na-atụ aro, na-ahazi, na-eche echiche ma ọ bụ na-emepụta?", "Ọ bụrụ ee, ọ ga-abụ AI"] },
            { title: "Generative AI", bullets: ["Na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ", "Ọmụmaatụ: ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Gafee app dị n'ekwentị gị ma ọ bụ kọmputa ụlọ akwụkwọ. Depụta atọ na-eji AI ma dee otu ahịrị maka nke ọ bụla na-ekwu ihe AI na-eme, dịka ọmụmaatụ \"App egwu: na-atụ aro egwu nwere ike ịmasị m\".",
          youCanNow: "ịhụ AI n'app ị na-eji kwa ụbọchị ma kwuo ihe ọ na-eme.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere generative AI ji dị iche n'aro egwu app egwu na-atụ?", options: ["Ọ na-ahazi naanị email", "Ọ na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ", "Ọ na-arụ ọrụ naanị n'enweghị ịntanetị", "Ọ naghị eji ụkpụrụ mgbe ọ bụla"], answer: 1, why: "Generative AI na-emepụta ihe ọhụrụ kama ịhazi ma ọ bụ ịtụ aro naanị." },
            { objective: "O2", q: "Ị chọrọ ịmata ma app na-eji AI. Kedu ajụjụ kacha enyere aka?", options: ["App ahụ ọ bụ n'efu?", "Akara ya ọ na-acha anụnụ anụnụ?", "App ahụ dị afọ ole?", "Ọ na-atụ aro, na-ahazi, na-eche echiche ma ọ bụ na-emepụta ihe maka m?"], answer: 3, why: "Ọ bụrụ na app na-atụ aro, na-ahazi, na-eche echiche ma ọ bụ na-emepụta ihe maka gị, ọ ga-abụ AI na-arụ ọrụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Oke afọ, iwu ụlọ akwụkwọ na nne na nna gị ma ọ bụ onye nlekọta gị",
          minutes: 5,
          goal: "Lelee ma ị nwere ike iji ngwa AI, n'ụlọ na n'ụlọ akwụkwọ, tupu i debanye aha.",
          text: [
            "Ngwa AI ọ bụla nwere iwu gbasara ndị nwere ike iji ya. Ọtụtụ chọrọ ka ị gbaa opekata mpe afọ 13, ụfọdụ na-arịọkwa ikike nne na nna ma ọ bụ onye nlekọta ma ọ bụrụ na i rubeghị afọ 18. Dịka ọmụmaatụ, Google kwuru na ị ga-agbarịrị afọ 13 ma ọ bụ karịa (ma ọ bụ afọ dabara na mba gị) iji jiri Gemini site n'akaụntụ nke gị ma ọ bụ nke ụlọ akwụkwọ. Iwu na-agbanwe, ya mere gụọ peeji iwu (terms) ma ọ bụ peeji enyemaka nke ngwa ahụ n'onwe ya.",
            "Ụlọ akwụkwọ gị nwekwara iwu. Ụfọdụ klaasị na-ekwe ka i jiri AI chọọ echiche ma ọ bụghị ide ọrụ gị. Ụfọdụ machiri ya n'ule. Iji ya megide iwu nwere ike ịbụ ịghọ aghụghọ, ọbụlagodi ma ọ bụrụ na ị bughị ya n'obi. Ọ bụrụ na obi abụọ dị gị, jụọ onye nkuzi gị tupu i jiri ya.",
            "Tupu i mepee akaụntụ n'app ọhụrụ ọ bụla, gwa nne na nna gị ma ọ bụ onye nlekọta gị. Gosi ha app ahụ, iwu afọ ya na ozi ọ na-arịọ. Ọtụtụ ụlọ akwụkwọ na-enyekwa gị akaụntụ ụlọ akwụkwọ maka ngwa ha kwadoro; jiri nke ahụ maka ọrụ ụlọ akwụkwọ."
          ],
          steps: ["Chọta iwu afọ ngwa ahụ na peeji enyemaka ma ọ bụ peeji iwu nke ụlọ ọrụ ahụ n'onwe ya.", "Lelee iwu AI nke ụlọ akwụkwọ gị na nke onye nkuzi gị.", "Gosi nne na nna gị ma ọ bụ onye nlekọta gị app ahụ tupu i debanye aha.", "Jiri akaụntụ ụlọ akwụkwọ gị maka ngwa ụlọ akwụkwọ kwadoro."],
          words: [["Iwu iji ya (terms of use)", "iwu ụlọ ọrụ na-etinye maka iji app ma ọ bụ weebụsaịtị ya."], ["Eziokwu n'ọrụ akwụkwọ (academic integrity)", "ịbụ onye eziokwu banyere ọrụ ụlọ akwụkwọ gị: ọrụ i nyefere na-egosi ihe i mere."]],
          sources: [{ name: "Google Gemini Apps Help: ihe ị chọrọ iji banye (iwu afọ)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Buru ụzọ lelee iwu afọ", bullets: ["Ọtụtụ ngwa AI chọrọ ka ị gbaa afọ 13 ma ọ bụ karịa", "Ụfọdụ chọrọ ikike nne na nna ma ọ bụrụ na i rubeghị afọ 18", "Gụọ peeji enyemaka ma ọ bụ peeji iwu nke ngwa ahụ n'onwe ya"] },
            { title: "Mara iwu ụlọ akwụkwọ gị", bullets: ["Ụfọdụ klaasị na-ekwe ka i jiri AI naanị maka echiche", "Ụfọdụ machiri ya n'ule", "Ị maghị? Buru ụzọ jụọ onye nkuzi gị"] },
            { title: "Gwa nne na nna gị ma ọ bụ onye nlekọta gị", bullets: ["Gosi ha app ahụ tupu i debanye aha", "Leenụ ozi ọ na-arịọ", "Jiri akaụntụ ụlọ akwụkwọ gị maka ngwa ụlọ akwụkwọ"] }
          ],
          tryIt: "Họrọ otu ngwa enyemaka AI. Chọta iwu afọ ya na peeji enyemaka ma ọ bụ peeji iwu nke ụlọ ọrụ ahụ n'onwe ya. Wee dee iwu ụlọ akwụkwọ gị ma ọ bụ nke otu onye nkuzi gbasara AI. Gosi nne na nna gị ma ọ bụ onye nlekọta gị ha abụọ.",
          youCanNow: "ịlele iwu afọ ngwa AI na iwu AI nke ụlọ akwụkwọ gị, ma gwa nne na nna gị ma ọ bụ onye nlekọta gị tupu i debanye aha.",
          quickCheck: [
            { objective: "O3", q: "Ebee bụ ebe kacha mma ịchọta iwu afọ ngwa AI?", options: ["Peeji enyemaka ma ọ bụ peeji iwu nke ngwa ahụ n'onwe ya", "Ihe enyi gị chere", "Okwu mmadụ dere n'okpuru vidiyo", "Kpakpando app ahụ nwetara"], answer: 0, why: "Iwu na-agbanwe, ya mere gụọ ha na peeji enyemaka ma ọ bụ peeji iwu nke ụlọ ọrụ ahụ n'onwe ya." },
            { objective: "O3", q: "Ị maghị ma e kwere AI maka ọrụ klaasị. Gịnị ka ị ga-eme?", options: ["Jiri ya ma tụkwasị obi na ọ dị mma", "Jụọ enyi gị nọ n'ụlọ akwụkwọ ọzọ", "Jiri ya ma agwala onye ọ bụla", "Jụọ onye nkuzi gị tupu i jiri ya"], answer: 3, why: "Iwu ụlọ akwụkwọ dị iche iche, iji AI megide ha nwere ike ịbụ ịghọ aghụghọ, ya mere buru ụzọ jụọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe AI bụ na ebe ị na-ahụ ya",
        questions: [
          { objective: "O1", q: "Kedu ahịrịokwu kacha kọwaa AI?", options: ["Robot nwere mmetụta", "Mmemme kọmputa na-eme ọrụ ndị na-achọkarị echiche mmadụ", "Ụdị chaja ekwentị", "Weebụsaịtị na-eziri ezi mgbe niile"], answer: 1, why: "AI pụtara mmemme na-eme ọrụ chọrọ echiche dị ka ịmata ihe, ịtụ aro na ide ihe." },
          { objective: "O1", q: "Kedu otu ọtụtụ AI si amụta ihe?", options: ["Site n'ịga ụlọ akwụkwọ", "Site n'ịgụ uche gị", "Ọ naghị amụta ihe mgbe ọ bụla", "Site n'ịmụ ọtụtụ ọmụmaatụ na ịchọta ụkpụrụ"], answer: 3, why: "AI na-achọta ụkpụrụ n'ọtụtụ ọmụmaatụ ma jiri ha chee echiche." },
          { objective: "O2", q: "App egwu gị tụrụ aro egwu ọhụrụ nwere ike ịmasị gị. Nke a bụ:", options: ["AI na-atụ aro", "Nje kọmputa (virus)", "Iwu onye nkuzi", "Oku ekwentị"], answer: 0, why: "Aro dabere n'ihe ị họọrọ na mbụ bụ otu ụzọ a na-ejikarị AI." },
          { objective: "O3", q: "Ị chọrọ ịnwale app AI ọhụrụ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Debanye aha site n'ụbọchị ọmụmụ ọ bụla", "Nye ya okwuntughe ụlọ akwụkwọ gị", "Lelee iwu afọ ya ma gosi nne na nna gị ma ọ bụ onye nlekọta gị", "Budata ya site na mgbasa ozi na-apụta na mberede"], answer: 2, why: "Iwu afọ na ikike nne na nna ma ọ bụ onye nlekọta na-abụ ụzọ tupu i debanye aha." },
          { objective: "O3", q: "Onye nkuzi gị kwuru na AI dị mma maka ịchọ echiche ma ọ bụghị maka ide edemede gị. Ị ga-:", options: ["Mee ka AI dee edemede ahụ n'agbanyeghị", "Leghara iwu ahụ anya", "Jiri AI naanị maka echiche, wee dee edemede ahụ n'onwe gị", "Detuo edemede enyi gị"], answer: 2, why: "Ịgbaso iwu onye nkuzi gị na-eme ka ọrụ gị bụrụ nke eziokwu." }
        ]
      }
    },
    {
      name: "Isi 2: Iji ngwa enyemaka AI n'ụzọ amamihe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịjụ ajụjụ doro anya",
          minutes: 5,
          goal: "Dee prompt doro anya nke ga-enweta azịza bara uru na nke mbụ.",
          text: [
            "Ihe ị na-ede nye ngwa enyemaka AI ka a na-akpọ prompt. Prompt doro anya na-enweta azịza ka mma.",
            "Ezigbo prompt nwere akụkụ atọ: ihe ị chọrọ, ntakịrị banyere ọnọdụ gị, na otu ị chọrọ ka azịza dị. Dịka ọmụmaatụ: \"Anọ m na klaasị 9, anyị na-amalite ọmụmụ gbasara usoro mmiri (water cycle). Kọwaa ya na nzọụkwụ 5 dị mkpụmkpụ nwere otu ọmụmaatụ kwa ụbọchị.\"",
            "Prompt na-adịghị ike dị ka \"usoro mmiri\" na-eme ka ngwa enyemaka ahụ chepụta ihe ị chọrọ. Ị ga-enwetakarị azịza ogologo dị n'ozuzu."
          ],
          steps: ["Kwuo ihe ị chọrọ.", "Tinye ntakịrị banyere ọnọdụ gị (klaasị gị, isiokwu ahụ, ihe ị maraworị).", "Kwuo otu ị chọrọ ka ọ dị: nzọụkwụ, ndepụta, mkpụmkpụ, okwu dị mfe ma ọ bụ ọmụmaatụ."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI."]],
          slides: [
            { title: "Prompt bụ arịrịọ gị", bullets: ["Prompt doro anya = azịza ka mma", "Prompt na-edoghị anya = azịza n'ozuzu"] },
            { title: "Akụkụ atọ", bullets: ["1. Ihe ị chọrọ", "2. Ntakịrị banyere ọnọdụ gị", "3. Otu ị chọrọ ka azịza dị"] },
            { title: "Nke na-adịghị ike na nke doro anya", bullets: ["Nke na-adịghị ike: \"usoro mmiri\"", "Nke doro anya: \"Anọ m na klaasị 9. Kọwaa usoro mmiri na nzọụkwụ 5 dị mkpụmkpụ nwere ọmụmaatụ.\""] }
          ],
          tryIt: "Họrọ ihe na-agụ gị agụụ ịmata, dị ka otu injin egwuregwu (game engine) si arụ ọrụ ma ọ bụ ihe mere mbara igwe ji acha anụnụ anụnụ. Dee prompt nwere akụkụ atọ ahụ niile, zipu ya nye ngwa enyemaka AI e kwere ka i jiri, ma gụọ azịza ya.",
          youCanNow: "ide prompt doro anya nwere akụkụ atọ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ akụkụ \"ọnọdụ gị\" nke prompt?", options: ["Agba ihuenyo", "Ntakịrị banyere gị na isiokwu ahụ, dị ka klaasị gị ma ọ bụ ihe ị maraworị", "Okwuntughe gị", "Ntọala app ahụ"], answer: 1, why: "Ọnọdụ gị, dị ka klaasị gị na isiokwu ahụ, na-enyere ngwa enyemaka ahụ aka ime ka azịza dabara gị." },
            { objective: "O4", q: "I dere \"ugwu mgbawa\" wee nweta azịza ogologo dị n'ozuzu. Gịnị ka ị ga-ezipu ọzọ?", options: ["\"ugwu mgbawa\" ọzọ", "Ọ dịghị ihe; kwụsị", "\"Anọ m na klaasị 8. Kọwaa otu ugwu mgbawa si agbawa na nzọụkwụ 4 dị mkpụmkpụ.\"", "Adreesị ụlọ gị"], answer: 2, why: "Itinye ihe ị chọrọ, ọnọdụ gị na ụdị azịza na-eme ka prompt doo anya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele azịza tupu i kwere ya",
          minutes: 5,
          goal: "Lelee azịza AI n'opekata mpe otu isi iyi a pụrụ ịtụkwasị obi.",
          text: [
            "Ngwa enyemaka AI na-echepụta ihe mgbe ụfọdụ. Ha nwere ike ichepụta ụbọchị, okwu mmadụ kwuru, akwụkwọ na-adịghị adị, ma ọ bụ eziokwu dị ka ezi ihe mana ọ bụ ụgha. A na-akpọ nke a hallucination.",
            "Lelee ihe ọ bụla dị mkpa, karịsịa eziokwu gbasara ụlọ akwụkwọ, ahụike, ego na akụkọ. Lee n'akwụkwọ ọgụgụ gị, jụọ onye nkuzi gị ma ọ bụ onye na-elekọta ọba akwụkwọ, ma ọ bụ chọta saịtị a pụrụ ịtụkwasị obi, dị ka ụlọ ngosi ihe mgbe ochie (museum), ụlọ ọrụ sayensị, encyclopedia ụlọ akwụkwọ gị na-eji, ma ọ bụ saịtị na-ejedebe na .gov ma ọ bụ .edu.",
            "Ezigbo omume: tụnyere isi iyi abụọ. Ọ bụrụ na AI na isi iyi a pụrụ ịtụkwasị obi ekwekọghị, kwere isi iyi ahụ, ma eleghị anya gwa onye nkuzi gị ihe AI mehiere."
          ],
          steps: ["Chọta eziokwu ndị dị n'azịza ahụ: aha, ụbọchị, nọmba.", "Chọọ nke ọ bụla n'isi iyi a pụrụ ịtụkwasị obi.", "Ọ bụrụ na ha ekwekọghị, soro isi iyi a pụrụ ịtụkwasị obi.", "Detuo ebe i lelere."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Isi iyi (source)", "ebe ozi si abịa."]],
          slides: [
            { title: "AI nwere ike ịchepụta ihe", bullets: ["Ụbọchị na nọmba ezighi ezi", "Okwu mmadụ ma ọ bụ akwụkwọ adịgboroja", "Eziokwu dị ka ezi ihe mana ọ bụghị"] },
            { title: "Lelee n'isi iyi a pụrụ ịtụkwasị obi", bullets: ["Akwụkwọ ọgụgụ gị, onye nkuzi ma ọ bụ onye ọba akwụkwọ", "Ụlọ ngosi ihe mgbe ochie, ụlọ ọrụ sayensị, saịtị .gov ma ọ bụ .edu"] },
            { title: "Ọ bụrụ na ha ekwekọghị", bullets: ["Kwere isi iyi a pụrụ ịtụkwasị obi", "Dee ebe i lelere"] }
          ],
          tryIt: "Were azịza prompt ikpeazụ gị. Họrọ eziokwu abụọ dị n'ime ya ma lelee nke ọ bụla n'isi iyi a pụrụ ịtụkwasị obi. Dee ma nke ọ bụla ziri ezi na ebe i lelere.",
          youCanNow: "ịhụ eziokwu ndị chọrọ ilele na ịlele ha n'isi iyi a pụrụ ịtụkwasị obi.",
          quickCheck: [
            { objective: "O5", q: "Kedu isi iyi a pụrụ ịtụkwasị obi maka ịlele eziokwu ụlọ akwụkwọ?", options: ["Okwu mmadụ ọ bụla dere n'ịntanetị", "Otu AI ahụ a jụrụ ọzọ", "Meme", "Akwụkwọ ọgụgụ gị ma ọ bụ saịtị na-ejedebe na .edu ma ọ bụ .gov"], answer: 3, why: "Akwụkwọ ọgụgụ, ndị nkuzi, ndị ọba akwụkwọ na saịtị a pụrụ ịtụkwasị obi bụ ebe dị mma ịlele eziokwu." },
            { objective: "O5", q: "AI kpọrọ aha akwụkwọ maka akụkọ gị, mana ị chọtaghị ya ebe ọ bụla. Gịnị ka ị ga-eme?", options: ["Were ya dị ka hallucination nwere ike ịbụ, ma jiri isi iyi ị nwere ike ịchọta", "Tinye ya n'akụkọ gị n'agbanyeghị", "Chepụta nọmba peeji", "Rịọ AI ka o kwe nkwa na ọ bụ ezi akwụkwọ"], answer: 0, why: "AI nwere ike ichepụta akwụkwọ na eziokwu; tụkwasị obi n'isi iyi ị nwere ike ilele n'ezie." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịnọ n'enweghị nsogbu na ime ihe ziri ezi na AI",
          minutes: 5,
          goal: "Jiri AI n'ekesaghị ozi nzuzo na n'emerụghị onye ọ bụla ahụ.",
          text: [
            "Edela ozi nzuzo n'ime ngwa AI: aha gị zuru ezu na adreesị gị, ụlọ akwụkwọ gị na usoro oge gị, nọmba ekwentị, okwuntughe, ma ọ bụ foto ndị enyi gị n'ajụghị ha. Ihe ị dere nwere ike ịbụ nke a ga-echekwa.",
            "AI nwere ike ime foto adịgboroja, olu adịgboroja na vidiyo adịgboroja, a na-akpọ ha mgbe ụfọdụ deepfake. Ejila AI mgbe ọ bụla mee foto adịgboroja ma ọ bụ foto na-eweta ihere gbasara ezi mmadụ. Ọ nwere ike imerụ ha ahụ, mebie iwu ụlọ akwụkwọ ma mebie iwu obodo. Ọ bụrụ na mmadụ emee gị ma ọ bụ enyi gị nke a, gwa okenye ị tụkwasịrị obi.",
            "AI nwekwara ike ime ihe na-ezighi ezi n'ebe ndị mmadụ nọ. Ọ mụtara ihe site n'ihe ndị mmadụ dere, ya mere o nwere ike ikwughachi echiche ọjọọ a na-enwe banyere otu ìgwè mmadụ (stereotype). Ọ bụrụ na azịza yiri ka ọ na-emegide otu ìgwè mmadụ, jụọ ajụjụ banyere ya."
          ],
          steps: ["Gụọ prompt gị tupu i zipu ya ma wepụ ozi nzuzo.", "Emela foto ma ọ bụ olu adịgboroja nke ezi mmadụ mgbe ọ bụla.", "Ọ bụrụ na ị hụ deepfake na-emerụ mmadụ ahụ, gwa okenye ị tụkwasịrị obi.", "Jụọ ajụjụ maka azịza yiri ka ọ na-ezighi ezi."],
          words: [["Deepfake", "foto, olu ma ọ bụ vidiyo adịgboroja e ji AI mee ka ọ dị ka ezi ihe."], ["Ịkpa oke (bias)", "mgbe azịza na-ezighi ezi n'ebe ụfọdụ ndị mmadụ nọ, ọtụtụ mgbe n'ihi ihe AI mụtara."]],
          slides: [
            { title: "Debe ya na nzuzo", bullets: ["Ọ dịghị adreesị, usoro oge ma ọ bụ nọmba ekwentị", "Ọ dịghị okwuntughe", "Ọ dịghị foto ndị enyi n'ajụghị ha"] },
            { title: "Deepfake na-emerụ ahụ", bullets: ["Emela ihe adịgboroja nke ezi mmadụ", "Ọ nwere ike imebi iwu ụlọ akwụkwọ na iwu obodo", "Gwa okenye ị tụkwasịrị obi ma ọ bụrụ na ị hụ otu"] },
            { title: "Kpachara anya maka bias", bullets: ["AI nwere ike ikwughachi echiche ọjọọ banyere ìgwè mmadụ", "Jụọ ajụjụ maka azịza yiri ka ọ na-ezighi ezi"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee \"nkọwa AI\" gị nwere otu peeji: ihe AI bụ n'ahịrịokwu abụọ, app atọ ị na-eji nwere AI, na otu ajụjụ ị jụrụ ngwa enyemaka AI ya na azịza ya na otu i si lelee ya. Hụ na o nweghị ozi nzuzo ọ bụla n'ime ya.",
          youCanNow: "iji AI n'enweghị nsogbu na n'ụzọ ziri ezi, ma kọwaara onye ọzọ AI.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji debe ozi nzuzo n'ebe ngwa AI na-adịghị?", options: ["Ngwa AI dị nwayọọ", "Ihe ị dere nwere ike ịbụ nke a ga-echekwa", "Ọ na-eme ka azịza dị mkpụmkpụ", "Ozi nzuzo na-eme ka AI mara ihe karịa"], answer: 1, why: "Ihe ị dere nwere ike ịbụ nke a ga-echekwa, ya mere ozi nzuzo dị ka adreesị gị na usoro oge gị ga-anọ n'èzí." },
            { objective: "O6", q: "Enyi gị chọrọ iji AI mee foto adịgboroja na-atọ ọchị gbasara onye klaasị unu. Gịnị ka ị ga-eme?", options: ["Nyere aka mee ya ma ekesala ya", "Tinye ya n'ịntanetị, ebe ọ bụ egwuregwu", "Jụ, n'ihi na ihe adịgboroja nke ezi mmadụ nwere ike imerụ ha ahụ ma mebie iwu", "Zipu ya naanị ndị enyi gị nso"], answer: 2, why: "Foto adịgboroja nke ezi mmadụ nwere ike imerụ ha ahụ, mebie iwu ụlọ akwụkwọ ma mebie iwu obodo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji ngwa enyemaka AI n'ụzọ amamihe",
        questions: [
          { objective: "O4", q: "Kedu prompt kacha doo anya?", options: ["\"Anọ m na klaasị 9. Kọwaa usoro mmiri na nzọụkwụ 5 dị mkpụmkpụ nwere ọmụmaatụ.\"", "\"sayensị\"", "\"enyemaka\"", "\"gwa m ihe\""], answer: 0, why: "Ọ na-ekwu ihe ị chọrọ, na-enye ọnọdụ gị, ma na-ekwu otu ị chọrọ ka azịza dị." },
          { objective: "O5", q: "Gịnị bụ \"hallucination\" AI?", options: ["Ọkwa egwuregwu vidiyo", "Ụdị ihuenyo ekwentị", "Iwu ụlọ akwụkwọ", "Mgbe AI chepụtara ihe dị ka eziokwu"], answer: 3, why: "Hallucination bụ azịza e chepụtara echepụta nke dị ka ezi ihe." },
          { objective: "O5", q: "AI nyere gị ụbọchị maka ọrụ akụkọ ihe mere eme. Ị kwesịrị:", options: ["Idetuo ya ozugbo", "Ịlele ya n'akwụkwọ ọgụgụ gị ma ọ bụ isi iyi ọzọ a pụrụ ịtụkwasị obi", "Ịjụ AI ọzọ ma kwere azịza nke abụọ", "Ịhapụ ụbọchị ahụ"], answer: 1, why: "A na-elele eziokwu dị mkpa n'isi iyi a pụrụ ịtụkwasị obi." },
          { objective: "O6", q: "Kedu nke ị na-ekwesịghị ide n'ime ngwa enyemaka AI?", options: ["Adreesị ụlọ gị na usoro oge ụlọ akwụkwọ gị", "\"Kọwaa photosynthesis n'ụzọ dị mfe\"", "\"Nye m echiche 3 maka akwụkwọ mgbasa ozi otu (club)\"", "\"Mee ka ọ dị mkpụmkpụ\""], answer: 0, why: "Adreesị na usoro oge bụ ozi nzuzo." },
          { objective: "O6", q: "Onye klaasị unu ji AI mee foto adịgboroja nke nwata akwụkwọ ọzọ. Gịnị ka ị ga-eme?", options: ["Kesaa ya", "Mee nke ọzọ", "Gwa okenye ị tụkwasịrị obi", "Dee okwu n'okpuru ya"], answer: 2, why: "Deepfake nke ezi mmadụ nwere ike imerụ ha ahụ; okenye ị tụkwasịrị obi nwere ike inyere aka kwụsị ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Gịnị bụ AI? (maka ndị ntorobịa)",
    questions: [
      { objective: "O1", q: "AI bụ mkpụrụ okwu maka:", options: ["Automatic Internet", "Artificial intelligence (ọgụgụ isi arụrụ arụ)", "Advanced information", "App installer"], answer: 1, why: "AI bụ mkpụrụ okwu maka artificial intelligence." },
      { objective: "O1", q: "Kedu nke bụ eziokwu banyere AI?", options: ["O nwere mmetụta", "Ọ na-eziri ezi mgbe niile", "Ọ dị ndụ", "Ọ na-achọta ụkpụrụ ma na-eche echiche kacha mma ya"], answer: 3, why: "AI na-eche echiche site n'ụkpụrụ; ọ dịghị ndụ, o nwekwara ike ime mperi." },
      { objective: "O1", q: "Gịnị mere AI ji nwee ike ime mperi ọbụlagodi mgbe o yiri ka o ji n'aka?", options: ["Ọ dị umengwụ", "Ọ chọrọ ịghọgbu gị", "Ekwentị dị nwayọọ", "Ọ na-eche echiche site n'ụkpụrụ, ọ ghọtaghị ihe n'ezie"], answer: 3, why: "Ọ na-ebu amụma site n'ụkpụrụ, ya mere azịza o ji n'aka ka nwere ike ịbụ nke ezighi ezi." },
      { objective: "O2", q: "Keyboard ekwentị gị na-eche okwu ị ga-ede ọzọ. Nke ahụ bụ:", options: ["Nje kọmputa (virus)", "AI na-arụ ọrụ", "Onye nkuzi", "Okwuntughe"], answer: 1, why: "Iche okwu ọzọ bụ ihe AI na-emekarị." },
      { objective: "O2", q: "Kedu nke bụ ọmụmaatụ generative AI?", options: ["Igwe mgbakọ", "Mgba ọkụ", "Ngwa enyemaka mkparịta ụka na-ede akụkọ", "Map akwụkwọ"], answer: 2, why: "Generative AI na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ." },
      { objective: "O2", q: "App vidiyo na-egosi \"Because you watched...\" (n'ihi na i lere...). Nke ahụ bụ:", options: ["Aro AI mere", "Ozi ederede", "Iwu ụlọ akwụkwọ", "Ihe njikwa egwuregwu"], answer: 0, why: "Ọ na-atụ aro vidiyo site n'ihe i lere na mbụ." },
      { objective: "O3", q: "Ebee ka ị ga-achọta iwu afọ ngwa AI?", options: ["Ihe enyi gị chere", "Peeji enyemaka ma ọ bụ peeji iwu nke ngwa ahụ n'onwe ya", "Mgbasa ozi na-apụta na mberede", "Ọ dịghị ebe, ọ dịghị iwu ọ bụla"], answer: 1, why: "Peeji nke ụlọ ọrụ ahụ n'onwe ya na-enye iwu dị ugbu a." },
      { objective: "O3", q: "Gịnị ka peeji enyemaka Google kwuru gbasara iji Gemini site n'akaụntụ nke gị ma ọ bụ nke ụlọ akwụkwọ?", options: ["Afọ ọ bụla dị mma", "Ị ga-agbarịrị afọ 21", "Naanị ndị nkuzi nwere ike iji ya", "Ị ga-agbarịrị afọ 13 ma ọ bụ karịa, ma ọ bụ afọ dabara na mba gị"], answer: 3, why: "Peeji enyemaka Google na-ekwu afọ 13 ma ọ bụ karịa, ma ọ bụ afọ dabara n'ebe ahụ." },
      { objective: "O3", q: "Tupu i debanye aha n'app ọhụrụ, ị kwesịrị:", options: ["Ịgwa nne na nna gị ma ọ bụ onye nlekọta gị", "Iji ụbọchị ọmụmụ adịgboroja", "Ikesara enyi gị okwuntughe gị", "Ịpị mgbasa ozi ọ bụla"], answer: 0, why: "Nne na nna ma ọ bụ onye nlekọta kwesịrị ịma maka akaụntụ ọhụrụ." },
      { objective: "O3", q: "Iji AI dee ọrụ onye nkuzi gị kwuru ka i dee n'onwe gị bụ:", options: ["Ọ dị mma ma ọ bụrụ na onye ọ bụla ahụghị", "Ihe a chọrọ", "Imebi iwu, ọ nwekwara ike ịbụ ịghọ aghụghọ", "Ezigbo omume ọmụmụ ihe"], answer: 2, why: "Iwu ụlọ akwụkwọ na-ekpebi otu esi eji AI; imebi ha bụ enweghị eziokwu." },
      { objective: "O4", q: "Gịnị bụ prompt?", options: ["Ihe njikwa egwuregwu", "Ụdị okwuntughe", "Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI", "Ụlọ ahịa app"], answer: 2, why: "Prompt bụ arịrịọ gị nye AI." },
      { objective: "O4", q: "Kedu akụkụ na-eme ka prompt doo anya karị?", options: ["Ikwu otu ị chọrọ ka azịza dị, dị ka nzọụkwụ 5 dị mkpụmkpụ", "Ide naanị otu okwu", "Itinye adreesị gị", "Iji mkpụrụ akwụkwọ ukwu niile"], answer: 0, why: "Ikwu ụdị azịza ị chọrọ na-enyere AI aka inye azịza bara uru." },
      { objective: "O4", q: "Prompt na-adịghị ike dị ka \"usoro mmiri\" na-enwetakarị:", options: ["Azịza zuru oke", "Ọ dịghị azịza mgbe ọ bụla", "Nje kọmputa (virus)", "Azịza ogologo dị n'ozuzu"], answer: 3, why: "AI ga-echepụta ihe ị chọrọ, ya mere azịza ahụ ga-adị n'ozuzu." },
      { objective: "O5", q: "Kedu isi iyi kacha bụrụ nke a pụrụ ịtụkwasị obi maka ịlele eziokwu sayensị?", options: ["Okwu mmadụ ọ bụla dere n'ịntanetị", "Ụlọ ọrụ sayensị ma ọ bụ akwụkwọ ọgụgụ gị", "Meme", "Mgbasa ozi na-apụta na mberede"], answer: 1, why: "Akwụkwọ ọgụgụ na saịtị sayensị gọọmentị bụ ebe a pụrụ ịtụkwasị obi." },
      { objective: "O5", q: "AI na akwụkwọ ọgụgụ gị ekwekọghị. Ị kwesịrị:", options: ["Ikwere akwụkwọ ọgụgụ ahụ ma ọ bụ isi iyi a pụrụ ịtụkwasị obi", "Ikwere AI", "Ịtụ mkpụrụ ego (isi ma ọ bụ ọdụ)", "Iji azịza abụọ ahụ"], answer: 0, why: "Isi iyi a pụrụ ịtụkwasị obi ka mma karịa azịza AI a na-eleleghị." },
      { objective: "O5", q: "Kedu eziokwu kacha chọọ ilele?", options: ["Echiche nke gị", "Njakịrị ị rịọrọ", "Ụbọchị, nọmba na aha", "Abụ uri ị rịọrọ"], answer: 2, why: "Eziokwu dị ka ụbọchị na nọmba bụ ebe AI na-emehiekarị." },
      { objective: "O6", q: "Kedu nke bụ ozi nzuzo ị ga-edebe n'ebe AI na-adịghị?", options: ["\"Kọwaa fraction\"", "Okwuntughe gị", "\"Mee ka ọ dị mkpụmkpụ\"", "Agba kacha masị gị"], answer: 1, why: "A gaghị ekesa okwuntughe mgbe ọ bụla." },
      { objective: "O6", q: "Deepfake bụ:", options: ["Ọdọ mmiri miri emi", "Ụdị egwuregwu", "Akwụkwọ nduzi ọmụmụ", "Foto, olu ma ọ bụ vidiyo adịgboroja e ji AI mee"], answer: 3, why: "Deepfake bụ ihe adịgboroja AI mere nke dị ka ezi ihe." },
      { objective: "O6", q: "AI nyere azịza yiri ka ọ na-ezighi ezi n'ebe otu ìgwè mmadụ nọ. Ị kwesịrị:", options: ["Ikesa ya", "Ikwere ya", "Ịghara iji AI ọzọ ruo mgbe ebighị ebi", "Ịjụ ajụjụ banyere ya, n'ihi na AI nwere ike ikwughachi echiche ọjọọ banyere ìgwè mmadụ"], answer: 3, why: "AI nwere ike ibu bias site n'ihe ọ mụtara." },
      { objective: "O6", q: "Ọ bụrụ na mmadụ ji AI mee ihe adịgboroja gbasara gị nke na-emerụ gị ahụ, nzọụkwụ kacha mma bụ:", options: ["Idebe ya na nzuzo", "Ịgwa okenye ị tụkwasịrị obi", "Ime otu megide ha", "Ikesakwu ya"], answer: 1, why: "Okenye ị tụkwasịrị obi nwere ike inyere aka kọọ ya ma kwụsị ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ihe AI bụ",
        objective: "O1",
        notYet: "Nkọwa ahụ adịghị, ọ bụ ụgha, ma ọ bụ ọ siri ike nye nwata akwụkwọ nọ n'okpuru.",
        meets: "Ahịrịokwu abụọ doro anya na-ekwu ihe AI bụ na na o nwere ike ime mperi.",
        exceeds: "Ọ na-ekwukwa otu AI si amụta ihe site n'ọmụmaatụ, n'okwu nwata dị afọ iri ga-aghọta."
      },
      {
        name: "AI n'app m",
        objective: "O2",
        notYet: "App na-erughị atọ, ma ọ bụ enweghị ahịrị na-ekwu ihe AI na-eme.",
        meets: "App atọ, nke ọ bụla nwere otu ahịrị na-ekwu ihe AI na-eme.",
        exceeds: "Ọ na-egosikwa nke bụ generative AI."
      },
      {
        name: "Ajụjụ doro anya",
        objective: "O4",
        notYet: "Prompt ahụ bụ otu okwu ma ọ bụ okwu abụọ.",
        meets: "Prompt ahụ na-ekwu ihe ị chọrọ, ntakịrị banyere ọnọdụ gị na otu ị chọrọ ka azịza dị.",
        exceeds: "Azịza ahụ bara uru na nke mbụ, ma ọ bụ otu ajụjụ nsochi mere ka ọ ka mma."
      },
      {
        name: "E lelere azịza",
        objective: "O5",
        notYet: "E jiri azịza ahụ n'eleleghị ya.",
        meets: "E lelere opekata mpe otu eziokwu n'isi iyi a pụrụ ịtụkwasị obi, a kpọkwara aha isi iyi ahụ.",
        exceeds: "E lelere eziokwu abụọ n'isi iyi abụọ, na ndetu gbasara ihe ọ bụla AI mehiere."
      },
      {
        name: "N'enweghị nsogbu ma kwere ekwe",
        objective: "O6",
        notYet: "Nkọwa ahụ nwere ozi nzuzo, ma ọ bụ e jiri ngwa ahụ megide iwu afọ ya ma ọ bụ iwu ụlọ akwụkwọ.",
        meets: "Ọ dịghị ozi nzuzo, ngwa e jiri dabakwara iwu afọ ya na iwu ụlọ akwụkwọ.",
        exceeds: "Ọ na-agbakwunye ndụmọdụ nye onye na-agụ ya nọ n'okpuru banyere ịnọ n'enweghị nsogbu na AI."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị ntorobịa n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha na-elele azịza AI maka ọrụ ụlọ akwụkwọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nkuzi ma ọ bụ mmemme ndị ntorobịa na-akọ na nsogbu iwu gbasara AI belatara n'etiti ndị na-amụ ihe"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ nwere ịntanetị",
      "Ngwa enyemaka AI n'efu nke onye na-amụ ihe gbara afọ iji ma e kwere ka o jiri, dị ka ngwa ụlọ akwụkwọ kwadoro",
      "Akwụkwọ ma ọ bụ dokumentị maka nkọwa nwere otu peeji",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Lelee iwu afọ nke ngwa AI ọ bụla tupu klaasị, ma jiri akaụntụ ụlọ akwụkwọ kwadoro ebe ha dị.",
      "Kesaa iwu AI nke ụlọ akwụkwọ gị ma ọ bụ mmemme gị na mmalite ka ndị na-amụ ihe mara ihe e kwere.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee ozi nzuzo ma ọ bụ bulite foto ezi mmadụ.",
      "Ndị na-erubeghị oke afọ nwere ike ime ọrụ ndị ahụ n'akwụkwọ ma ọ bụ ka onye nkuzi gosi otu esi eji ngwa ahụ.",
      "Mee ka ndị na-amụ ihe kesaa nkọwa ha na nwata akwụkwọ nọ n'okpuru ha ma ọ bụ onye ha na ya na-arụ, ma jiri rubric tụọ akara ha."
    ]
  }
};
