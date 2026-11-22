"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-learning-hobbies.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-learning-hobbies-ig",
  lang: "ig",
  translationOf: "seniors-ai-learning-hobbies",
  category: "Seniors and Technology",
  name: "AI maka Ịmụ Ihe na Ihe Ntụrụndụ",
  skills: "Ịrịọ AI ka ọ kụziere gị nzọụkwụ n'otu n'otu, Iji AI nwalee onwe gị, Ime atụmatụ mmụta, Ịchọta vidiyo nkuzi dị mma, Iji AI mee ọrụ ihe ntụrụndụ",
  outcome: "iji ngwa enyemaka AI mee atụmatụ dị mfe nke izu abụọ iji mụta ihe ntụrụndụ ma ọ bụ isiokwu masịrị gị, mee ka ọ kụziere gị ma nwalee gị nzọụkwụ n'otu n'otu, ma mechaa omume mbụ gị.",
  about: [
    "Ọ dịghị mgbe ọ na-agafe oge ịmụ ihe. Ihe ọmụmụ a bụ maka ndị okenye chọrọ ịmalite ihe ntụrụndụ ọhụrụ, ịlaghachi n'nke ochie, ma ọ bụ ịmụta ihe ha na-achọ ịmata kemgbe: ịkọ ubi, akụkọ ezinụlọ, ise ihe, asụsụ ọhụrụ, nnụnụ, egwu ma ọ bụ akụkọ ihe mere eme.",
    "Ị ga-eji ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini dị ka onye nkuzi nwere ndidi nke ike anaghị agwụ ikwughachi ihe. Ị ga-arịọ ya ka ọ kụziere gị n'obere nzọụkwụ, nwalee gị, hazie omume gị, ma nyere gị aka n'ezi ọrụ ihe ntụrụndụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Mee ọrụ \"Nwalee ya ugbu a\" oge ọ bụla; ha na-ewuli atụmatụ mmụta nke gị. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Họrọ otu ihe ntụrụndụ ma ọ bụ isiokwu. Rịọ ngwa enyemaka AI maka atụmatụ mmụta izu abụọ nwere obere omume kwa ụbọchị, rịọ ya ka ọ kụziere gị nkuzi mbụ nzọụkwụ n'otu n'otu, kwe ka o jiri ajụjụ atọ nwalee gị, ma dee otu ihe ị ga-eme omume ya echi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye, ọtụtụ ndị lara ezumike nka, nwere oge ka ukwuu ma chọọ ịmụta ihe ọhụrụ ma ọ bụ ịlaghachi n'ihe ntụrụndụ: ịkọ ubi, ise ihe, egwu, ọrụ aka, ilele nnụnụ ma ọ bụ akụkọ ezinụlọ.",
    startingPoint: "Ha nwere ike iji ekwentị, tablet ma ọ bụ kọmputa kpọọ oku, ziga email ma leta ụfọdụ weebụsaịtị. Ọtụtụ ejibeghị ngwa enyemaka AI dị ka onye nkuzi ma ọ bụ chọọ vidiyo nkuzi na YouTube.",
    gap: "Ịmụta ihe ntụrụndụ ọhụrụ na-eme ka uche rụsie ọrụ ike ma na-ejikọta ndị mmadụ, mana klaasị nwere ike ịdị oke ọnụ, dị anya ma ọ bụ na-aga ngwa ngwa. Ngwa enyemaka AI nwere ike ịkụzi ihe n'ụkwụ onye na-amụ ihe, nwalee ya ma mee atụmatụ, ma ọ bụrụ na ọ na-elelekwa eziokwu gbasara nchekwa ma ghara ịtụkwasị ya obi maka akụkọ ezinụlọ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị; ihuenyo ka ukwuu na-enyere aka maka vidiyo",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, na obere omume kwa ụbọchị",
      "Ike na ahụike dị iche iche; atụmatụ ga-ekwe ka omume dị mkpụmkpụ ma nwee ụbọchị izu ike",
      "Nzuzo: edela ozi nzuzo nke ndị ikwu dị ndụ n'ime AI"
    ],
    prerequisites: "\"AI maka Ndị Okenye: Iji Ngwa Enyemaka AI\" na-enyere aka ka e buru ya ụzọ, mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ịrịọ ya ka ọ kụzie isiokwu nzọụkwụ n'otu n'otu, na-ekwu ihe ị maraworị ma na-arịọ ya ka o chere \"next\"", standard: "na-enweta obere nzọụkwụ ị nwere ike ịgbaso n'ụkwụ gị" },
    { id: "O2", condition: "Mgbe obere nkuzi gachara", action: "ịrịọ ngwa enyemaka ahụ ka o jiri otu ajụjụ n'otu oge nwalee gị ma kọwaghachi ihe ọ bụla i mehiere", standard: "na-aza opekata mpe 2 n'ime ajụjụ 3 n'okwu nke gị" },
    { id: "O3", condition: "Mgbe e nyere gị ihe ntụrụndụ ma ọ bụ isiokwu masịrị gị", action: "ịrịọ maka atụmatụ mmụta izu abụọ dabara oge gị, ngwa gị na ike gị", standard: "nwere otu obere ebumnuche kwa ụbọchị, e dere na kalenda gị ma ọ bụ n'akwụkwọ" },
    { id: "O4", condition: "Mgbe e nyere gị nka dị mfe ịmụta site n'ilele anya", action: "ịchọ vidiyo nkuzi maka ndị mbido na YouTube ma gafere mgbasa ozi na njikọ ndebanye aha", standard: "na-ahọrọ vidiyo doro anya maka ndị mbido" },
    { id: "O5", condition: "Mgbe e nyere gị ọrụ ihe ntụrụndụ dị ka ubi ma ọ bụ akwụkwọ foto", action: "ịrịọ maka ndepụta ngwa na nzọụkwụ dị mfe, ma lelee eziokwu gbasara nchekwa na leebụl ma ọ bụ isi iyi a tụkwasịrị obi", standard: "tupu ị zụta ma ọ bụ jiri ihe ọ bụla dị ize ndụ" },
    { id: "O6", condition: "Mgbe e nyere gị ncheta ezinụlọ", action: "ide obere akụkọ ezinụlọ n'olu gị site n'enyemaka AI, na-achọ ndekọ na saịtị a tụkwasịrị obi kama n'AI", standard: "n'enweghị ozi nzuzo ọ bụla nke ndị ikwu dị ndụ" }
  ],
  chapters: [
    {
      name: "Isi 1: AI dị ka onye nkuzi gị nwere ndidi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịrịọ AI ka ọ kụziere gị, otu nzọụkwụ n'otu oge",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka ọ kụzie isiokwu n'obere nzọụkwụ doro anya, n'ụkwụ gị.",
          text: [
            "Ngwa enyemaka AI nwere ike ịdị ka onye nkuzi nwere ndidi. Ọ ga-akọwa ihe ugboro ole ọ bụla ị chọrọ, n'ụzọ dị iche iche ị chọrọ, ike anaghị agwụkwa ya maka ajụjụ.",
            "Gwa ya ihe ị chọrọ ịmụta, ihe ị maraworị, na otu ọ na-adịrị gị mfe ịmụ ihe. Dịka ọmụmaatụ: \"Achọrọ m ịmalite ilele nnụnụ n'azụ ụlọ m. Abụ m onye mbido kpam kpam. Kụziere m ihe atọ mbụ m kwesịrị ịmata, otu n'otu oge, n'ahịrịokwu dị mkpụmkpụ. Chere ka m kwuo 'next' tupu ị gaa n'ihu.\"",
            "Ịrịọ ya ka o chere \"next\" na-eme ka nzọụkwụ ọ bụla dị obere, ka i wee nwalee ya ma ọ bụ chee banyere ya tupu ị gaa n'ihu."
          ],
          steps: ["Kwuo ihe ị chọrọ ịmụta.", "Kwuo ihe ị maraworị, ọbụlagodi na ọ dịghị ihe.", "Rịọ maka nzọụkwụ dị mkpụmkpụ, dị mfe.", "Rịọ ya ka o chere ka ị kwuo \"next\"."],
          words: [["Onye nkuzi (tutor)", "onye nkuzi na-enyere otu onye aka ịmụ ihe n'ụkwụ nke ya."]],
          slides: [
            { title: "Onye nkuzi nwere ndidi", bullets: ["Na-akọwa ugboro ole ọ bụla ị chọrọ", "Ike anaghị agwụ ya maka ajụjụ"] },
            { title: "Gwa ya", bullets: ["Ihe ị chọrọ ịmụta", "Ihe ị maraworị", "Otu ọ na-adịrị gị mfe ịmụ ihe"] },
            { title: "Mee ka nzọụkwụ dị obere", bullets: ["\"Kụziere m otu ihe n'otu oge.\"", "\"Chere ka m kwuo 'next'.\""] }
          ],
          tryIt: "Họrọ isiokwu ị na-achọ ịmata. Rịọ ngwa enyemaka ka ọ kụziere gị ihe atọ mbụ ị kwesịrị ịmata, otu n'otu oge, na-echere ka ị kwuo \"next\". Gaa n'ime ha atọ.",
          youCanNow: "ịrịọ ngwa enyemaka AI ka ọ kụziere gị isiokwu n'obere nzọụkwụ n'ụkwụ nke gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ngwa enyemaka AI ji nwee ike ịbụ ezigbo onye nkuzi?", options: ["Ọ maara ihe niile gbasara gị", "Ọ na-akọwaghachi ugboro ole na n'ụzọ ọ bụla ị chọrọ, ike anaghị agwụ ya", "Ọ na-enye gị akara dị ka ụlọ akwụkwọ", "Ọ na-arụ ọrụ naanị maka ụmụaka"], answer: 1, why: "Nkuzi ahụ kwuru na ngwa enyemaka dị ka onye nkuzi nwere ndidi nke ike anaghị agwụ maka ajụjụ." },
            { objective: "O1", q: "Ị chọrọ ịmụta ịkpọ harmonica, ị nwatabeghịkwa ya. Gịnị ka ị ga-agwa ngwa enyemaka ahụ?", options: ["\"Harmonica.\"", "\"Gwa m ihe niile gbasara egwu.\"", "\"Abụ m onye mbido kpam kpam. Kụziere m ihe atọ mbụ, otu n'otu oge. Chere ka m kwuo next.\"", "\"Kpọọrọ m otu egwu.\""], answer: 2, why: "Ikwu ihe ị maara na ịrịọ obere nzọụkwụ na-echere \"next\" na-eme ka mmụta dị n'ụkwụ gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịnwale onwe gị ka i cheta ihe karịa",
          minutes: 4,
          goal: "Rịọ ngwa enyemaka AI ka ọ nwalee gị n'ihe ị mụtara ugbu a.",
          text: [
            "Anyị na-echeta ihe karịa mgbe anyị nwara icheta ya, ọ bụghị naanị ịgụghachi ya. Obere nnwale bụ otu n'ime ụzọ kacha mma isi mee ka ihe ọhụrụ ị mụtara nọgide n'uche.",
            "Mgbe nkuzi gachara, jụọ: \"Jiri ajụjụ atọ dị mfe nwalee m banyere ihe ị kụziri m ugbu a. Jụọ otu n'otu oge ma gwa m ma m zara nke ọma.\" Zaa n'okwu nke gị. Ọ bụrụ na i mehiere otu, rịọ ya ka ọ kọwaghachi ya n'ụzọ ọzọ.",
            "Nwalee otu nnwale ahụ ọzọ n'echi ya. Obere omume e kesara n'ọtụtụ ụbọchị na-arụ ọrụ karịa ọtụtụ omume n'otu oge."
          ],
          steps: ["Mechaa obere nkuzi.", "Rịọ maka ajụjụ atọ dị mfe, otu n'otu oge.", "Zaa n'okwu nke gị.", "Rịọ maka nkọwa ọhụrụ nke ihe ọ bụla i mehiere.", "Megharịa nnwale ahụ echi."],
          words: [["Ncheta (recall)", "iweghachi ihe n'uche site na ncheta."]],
          slides: [
            { title: "Nnwale na-enyere gị aka icheta", bullets: ["Icheta ka mma karịa ịgụghachi", "Obere ma na-emekarị bụ nke kacha mma"] },
            { title: "Rịọ maka nnwale", bullets: ["\"Jiri ajụjụ atọ dị mfe nwalee m.\"", "\"Otu n'otu oge; gwa m ma m zara nke ọma.\""] },
            { title: "I mehiere otu?", bullets: ["Rịọ maka nkọwa dị iche", "Nwaa ọzọ echi"] }
          ],
          tryIt: "Rịọ ngwa enyemaka ahụ ka o jiri ajụjụ atọ nwalee gị banyere ihe ọ kụziiri gị na Nkuzi 1. Zaa ha otu n'otu oge.",
          youCanNow: "iji AI nwalee onwe gị ma cheta ihe karịa n'ihe ị mụtara.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere obere nnwale ji enyere gị aka ịmụ ihe?", options: ["Ịnwa icheta ihe na-enyere gị aka icheta ya", "Ọ na-eme ka nkuzi ahụ dị ogologo", "Ọ na-enye gị akara maka ndekọ gị", "Ọ na-anọchi omume"], answer: 0, why: "Anyị na-echeta ihe karịa mgbe anyị nwara icheta ya, ọ bụghị naanị ịgụghachi ya." },
            { objective: "O2", q: "I mehiere otu ajụjụ nnwale gbasara olu nnụnụ. Gịnị ka ị ga-eme?", options: ["Kwụsị ịmụ isiokwu ahụ", "Gafere ya gaa n'ihu", "Were iwe megide ngwa enyemaka ahụ", "Rịọ ya ka ọ kọwaghachi akụkụ ahụ n'ụzọ ọzọ"], answer: 3, why: "Rịọ maka nkọwa ọhụrụ nke ihe ọ bụla i mehiere, wee nwaa ọzọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime atụmatụ mmụta dị mfe",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI maka atụmatụ mmụta dị mkpụmkpụ nke ga-ekwe omume.",
          text: [
            "Atụmatụ na-eme ka \"otu ụbọchị\" ghọọ \"taa\". Rịọ ngwa enyemaka ahụ maka atụmatụ izu abụọ nwere obere omume dabara ike gị na usoro oge gị.",
            "Dịka ọmụmaatụ: \"Meere m atụmatụ izu abụọ iji mụta ise ihe watercolor (agba mmiri) nke mbido. Enwere m ike ime omume nkeji 20 kwa ụbọchị, ụbọchị ise n'izu. Enwere m obere igbe agba na akwụkwọ. Mee ka ụbọchị ọ bụla nwee naanị otu obere ebumnuche.\"",
            "Lelee atụmatụ ahụ ma gbanwee ihe ọ bụla na-adabaghị. Rịọ ya ka o mee ka ụbọchị ndị ahụ dị mfe karị, dị mkpụmkpụ, ma ọ bụ tinye ụbọchị izu ike. Wee dee atụmatụ ahụ na kalenda gị ma ọ bụ n'akwụkwọ dị n'akụkụ oche gị."
          ],
          steps: ["Kwuo ihe ị chọrọ ịmụta na ogologo oge ọ ga-ewe.", "Kwuo nkeji ole na ụbọchị ole ị nwere ike ime omume.", "Kwuo ngwa ndị i nweburu.", "Rịọ maka otu obere ebumnuche kwa ụbọchị.", "Gbanwee atụmatụ ahụ, wee dee ya."],
          words: [["Atụmatụ mmụta", "ndepụta ihe ị ga-eme omume ya kwa ụbọchị iji ruo n'ebumnuche."]],
          slides: [
            { title: "Site n'otu ụbọchị ruo taa", bullets: ["Atụmatụ dị mkpụmkpụ, nke ga-ekwe omume", "Otu obere ebumnuche kwa ụbọchị"] },
            { title: "Gwa ngwa enyemaka ahụ", bullets: ["Ihe ị chọrọ ịmụta na ogologo oge", "Nkeji na ụbọchị ị nwere ike ime omume", "Ngwa ndị i nweburu"] },
            { title: "Mee ka ọ dabara gị", bullets: ["Rịọ maka ụbọchị dị mfe ma ọ bụ dị mkpụmkpụ", "Tinye ụbọchị izu ike", "Dee ya na kalenda gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka maka atụmatụ mmụta izu abụọ maka isiokwu gị, nwere otu obere ebumnuche kwa ụbọchị na oge ị nwere ike inye. Mee otu mgbanwe ka ọ dabakwuo gị, wee dee ụbọchị atọ mbụ.",
          youCanNow: "iji AI mee atụmatụ mmụta ga-ekwe omume nke dabara oge gị na ike gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ezigbo atụmatụ mmụta kwesịrị inwe kwa ụbọchị?", options: ["Ọtụtụ awa omume", "Otu obere ebumnuche dabara oge gị", "Ule", "Ihe ntụrụndụ ọhụrụ"], answer: 1, why: "Otu obere ebumnuche kwa ụbọchị na-eme ka \"otu ụbọchị\" ghọọ \"taa\"." },
            { objective: "O3", q: "Atụmatụ AI nyere gị na-agwụ gị ike nke ukwuu. Gịnị ka ị ga-eme?", options: ["Hapụ ihe ntụrụndụ ahụ", "Gbasoo ya otu o sila dị", "Rịọ ya ka o mee ka ụbọchị dị mkpụmkpụ ma ọ bụ tinye ụbọchị izu ike", "Malite ihe ntụrụndụ ọhụrụ"], answer: 2, why: "Ị nwere ike ịrịọ ngwa enyemaka ahụ ka ọ gbanwee atụmatụ ahụ ka ọ dabara ike gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: AI dị ka onye nkuzi gị nwere ndidi",
        questions: [
          { objective: "O1", q: "Gịnị mere ị ga-eji rịọ ngwa enyemaka ahụ ka o chere ka ị kwuo \"next\"?", options: ["Ka ọ kwụsị ịrụ ọrụ", "Ka o mee ngwa ngwa", "Ka nzọụkwụ ọ bụla dị obere ma i nwee ike iche banyere ya", "Ọ bụ iwu maka ịbanye (sign in)"], answer: 2, why: "Obere nzọụkwụ n'ụkwụ gị dị mfe ịmụta." },
          { objective: "O1", q: "Gịnị ka ị kwesịrị ịgwa ngwa enyemaka ahụ mgbe ị chọrọ ịmụta ihe?", options: ["Ihe ị chọrọ ịmụta, ihe ị maraworị, na otu ọ na-adịrị gị mfe ịmụ ihe", "Nọmba ụlọ akụ gị", "Naanị otu okwu", "Okwuntughe gị"], answer: 0, why: "Ozi ndị a na-enyere ya aka ịkụzi n'ọkwa kwesịrị ekwesị." },
          { objective: "O2", q: "Kedu nke na-enyere gị aka icheta ihe karịa?", options: ["Ịgụ otu peeji ahụ ugboro iri", "Ịmụta ihe niile n'otu ụbọchị", "Ịghara ime omume", "Ịza obere nnwale"], answer: 3, why: "Icheta azịza na-eme ka ihe ị mụtara nọgide." },
          { objective: "O2", q: "I zighi otu ajụjụ nnwale nke ọma. Gịnị bụ ezigbo nzọụkwụ ọzọ?", options: ["Hapụ ihe ntụrụndụ ahụ", "Rịọ ya ka ọ kọwaghachi n'ụzọ ọzọ", "Hichapụ app ahụ", "Gafere isiokwu ahụ ruo mgbe ebighị ebi"], answer: 1, why: "Nkọwa ọhụrụ na-emekarị ka ihe ahụ doo gị anya." },
          { objective: "O3", q: "Ezigbo atụmatụ mmụta nwere:", options: ["Awa iri ọrụ kwa ụbọchị", "Otu obere ebumnuche kwa ụbọchị dabara oge gị", "Enweghị ụbọchị ọ bụla", "Naanị nnukwu ebumnuche"], answer: 1, why: "Obere ebumnuche ga-ekwe omume na-eme ka ị nọgide na-aga n'ihu." }
        ]
      }
    },
    {
      name: "Isi 2: Ịnụ ụtọ ihe ntụrụndụ gị site n'AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchọta vidiyo nkuzi dị mma",
          minutes: 5,
          goal: "Chọọ vidiyo nkuzi bara uru ma kpebie ma ọ dị mma.",
          text: [
            "Ụfọdụ nka dị mfe ịmụta site n'ilele anya: otu ụdị ịkpa akwa (knitting), ịkwacha osisi rose, otu akara egwu na guitar. YouTube nwere vidiyo nkuzi n'efu maka fọrọ nke nta ka ihe ntụrụndụ niile.",
            "Buru ụzọ rịọ ngwa enyemaka AI maka ezigbo okwu ọchụchọ: \"Gịnị ka m ga-achọ na YouTube iji mụta otu ụdị ịkpa akwa nke mbido?\" Wee meghee YouTube, pịa igbe ọchụchọ (iko ihe ndoro anya), ma dee okwu ndị ahụ. Chọọ vidiyo e mere maka ndị mbido, nwere aha doro anya na nkọwa (comments) bara uru.",
            "Ị nwere ike ịkwụsịtụ, laghachi azụ ma lee ya ọzọ ugboro ole ọ bụla masịrị gị. Kpachara anya maka mgbasa ozi na njikọ dị na nkọwa vidiyo na-arịọ gị ka ị zụta ihe ma ọ bụ debanye aha; ị chọghị ha iji mụta ihe."
          ],
          steps: ["Rịọ AI maka ezigbo okwu ọchụchọ.", "Meghee YouTube ma pịa iko ihe ndoro anya.", "Dee okwu ndị ahụ ma chọọ vidiyo maka ndị mbido.", "Kwụsịtụ ma lee ọzọ ugboro ole ị chọrọ.", "Gafere mgbasa ozi na njikọ na-arịọ gị ka ị zụta ma ọ bụ debanye aha."],
          words: [["YouTube", "weebụsaịtị na app n'efu nwere vidiyo maka fọrọ nke nta ka isiokwu niile."], ["Igbe ọchụchọ (search box)", "ebe ị na-ede okwu iji chọta ihe; a na-egosikarị ya site na iko ihe ndoro anya."]],
          slides: [
            { title: "Mụta site n'ilele anya", bullets: ["Ịkpa akwa, ịkọ ubi, egwu na ihe ndị ọzọ", "N'efu na YouTube"] },
            { title: "Chọta ezigbo vidiyo", bullets: ["Rịọ AI maka okwu ọchụchọ", "Pịa iko ihe ndoro anya ma dee", "Họrọ vidiyo maka ndị mbido"] },
            { title: "Lee ya n'ụzọ nke gị", bullets: ["Kwụsịtụ ma lee ọzọ", "Gafere mgbasa ozi na njikọ \"zụta ugbu a\""] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI ihe ị ga-achọ na YouTube maka ụbọchị mbụ nke atụmatụ mmụta gị. Chọọ ya, lee otu vidiyo maka ndị mbido, ma kwụsịtụ ya opekata mpe otu ugboro iji nwalee otu nzọụkwụ.",
          youCanNow: "ịchọta vidiyo bara uru maka ndị mbido ma mụta ihe na ya n'ụkwụ nke gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka iko ihe ndoro anya dị na YouTube na-eme?", options: ["Ọ na-eme ka vidiyo buo ibu", "Ọ na-emeghe igbe ọchụchọ", "Ọ na-eme ka olu dị elu", "Ọ na-azụta vidiyo ahụ"], answer: 1, why: "Iko ihe ndoro anya bụ bọtịnụ ọchụchọ ebe ị na-ede okwu gị." },
            { objective: "O4", q: "Vidiyo ịkpa akwa na-egosi njikọ \"zụta ihe ọmụmụ zuru ezu\". Gịnị ka ị ga-eme?", options: ["Gafere ya; ị chọghị ya iji mụta ihe", "Zụta ya ozugbo", "Dee nọmba kaadị gị ka ị hụkwuo ihe", "Kwụsị ilele vidiyo"], answer: 0, why: "Mgbasa ozi na njikọ na-arịọ gị ka ị zụta ma ọ bụ debanye aha adịghị mkpa iji mụta ihe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji AI mee ọrụ ihe ntụrụndụ",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI hazie ezi ọrụ ihe ntụrụndụ site na mmalite ruo na njedebe.",
          text: [
            "AI nwere ike inyere gị aka ịhazi ọrụ: obere ubi akwụkwọ nri, akwụkwọ foto maka ụbọchị ọmụmụ nwa nwa gị, akwụkwọ nri ezinụlọ, ma ọ bụ ụlọ nnụnụ.",
            "Kọwaa ọrụ ahụ ma rịọ maka ndepụta ngwa na nzọụkwụ: \"Nyere m aka mee obere akwụkwọ foto nke afọ mbụ nwa nwa m nwanyị. Depụta ngwa na nzọụkwụ. Mee ka ọ dị mfe.\" Maka ubi, tinye mpaghara gị na oge n'afọ: \"Ebi m na Ohio, enwekwara m ebe anwụ na-acha n'azụ ụlọ m. Kedu akwụkwọ nri atọ dị mfe ịkụ n'ite n'oge opupu ihe ubi a?\"",
            "Maka ihe ọ bụla gbasara nchekwa, dị ka ngwaọrụ, kemịkalụ ma ọ bụ osisi nwere ike imerụ anụ ụlọ ahụ, lelee leebụl ya ma ọ bụ isi iyi a tụkwasịrị obi dị ka ebe a na-ere ihe ubi dị nso gị ma ọ bụ ọba akwụkwọ."
          ],
          steps: ["Kọwaa ọrụ ahụ na onye ọ bụ maka ya.", "Tinye mpaghara gị, oge n'afọ ma ọ bụ oghere ma ọ bụrụ na ọ dị mkpa.", "Rịọ maka ndepụta ngwa na nzọụkwụ dị mfe.", "Lelee eziokwu gbasara nchekwa na leebụl ma ọ bụ isi iyi a tụkwasịrị obi."],
          words: [["Ndepụta ngwa", "ihe ndị ị chọrọ ịchịkọta tupu ịmalite ọrụ."]],
          slides: [
            { title: "Hazie ezi ọrụ", bullets: ["Ubi, akwụkwọ foto, akwụkwọ nri, ụlọ nnụnụ"] },
            { title: "Rịọ maka", bullets: ["Ndepụta ngwa", "Nzọụkwụ dị mfe", "Echiche dabara mpaghara gị na oge n'afọ"] },
            { title: "Nọrọ na nchekwa", bullets: ["Lelee leebụl ngwaọrụ na kemịkalụ", "Jụọ ebe a na-ere ihe ubi ma ọ bụ ọba akwụkwọ"] }
          ],
          tryIt: "Họrọ obere ọrụ metụtara isiokwu gị. Rịọ ngwa enyemaka maka ndepụta ngwa na nzọụkwụ dị mfe, ma gbaa okirikiri gburugburu ngwa ndị i nweburu.",
          youCanNow: "iji AI hazie ọrụ ihe ntụrụndụ, site na ngwa ruo na nzọụkwụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ ndepụta ngwa?", options: ["Ndepụta ụlọ ahịa dị nso gị", "Akwụkwọ ụgwọ ịzụ ahịa", "Ndepụta ndị enyi nwere ike inye aka", "Ihe ndị ị chọrọ tupu ịmalite ọrụ"], answer: 3, why: "Ndepụta ngwa na-egosi ihe ị chọrọ tupu ịmalite." },
            { objective: "O5", q: "AI tụrụ aro otu osisi maka azụ ụlọ gị, i nwekwara pusi. Gịnị ka ị ga-eme?", options: ["Zụta ya ozugbo", "Jụọ AI ma o ji n'aka", "Lelee n'ebe a na-ere ihe ubi ma ọ bụ na leebụl osisi ahụ ma ọ dị mma maka anụ ụlọ", "Leghara ajụjụ ahụ anya"], answer: 2, why: "Eziokwu gbasara nchekwa, dị ka osisi nwere ike imerụ anụ ụlọ ahụ, ka a na-elele na leebụl ma ọ bụ isi iyi a tụkwasịrị obi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inyocha akụkọ ezinụlọ na akụkọ ndụ",
          minutes: 5,
          goal: "Jiri AI nyere aka dee akụkọ ezinụlọ ị ga-ekesa.",
          text: [
            "Ọtụtụ ndị okenye na-enwe mmasị inyocha akụkọ ezinụlọ ma na-enyefe ụmụ ụmụ ha akụkọ. AI nwere ike inyere gị aka ime ka ncheta ghọọ obere akụkọ ndị ọzọ ga-enwe obi ụtọ ịgụ.",
            "Gwa ya otu ncheta n'okwu nke gị: \"Nna m nwere ụlọ ebe a na-eme achịcha na Chicago n'afọ 1950s. M na-enyere aka na Satọde. Nyere m aka dee nke a dị ka akụkọ otu peeji maka ụmụ ụmụ m, n'olu m.\" Wee mee mgbanwe ka ọ dị ka okwu gị.",
            "AI amaghị ezi akụkọ ezinụlọ gị, ya mere arịọla ya ka o dejupụta eziokwu gbasara ndị nna nna gị; o nwere ike ịchepụta ha. Maka ndekọ, weebụsaịtị dị ka FamilySearch (n'efu) ma ọ bụ ebe enyemaka genealogy nke ọba akwụkwọ dị nso gị bụ ebe ka mma ilele. Edela ozi nzuzo nke ndị ikwu dị ndụ n'ime AI."
          ],
          steps: ["Gwa AI otu ncheta n'okwu nke gị.", "Rịọ maka akụkọ otu peeji n'olu gị.", "Gbanwee ihe ọ bụla na-adịghị ka okwu gị.", "Chọọ ndekọ na saịtị a tụkwasịrị obi, ọ bụghị n'AI.", "Kesaa akụkọ ahụ na ezinụlọ gị."],
          words: [["Genealogy", "ọmụmụ akụkọ ezinụlọ na ndị nna nna."], ["Nna nna (ancestor)", "onye ezinụlọ si n'oge gara aga, dị ka nne nne ma ọ bụ nna nna nne gị ma ọ bụ nna gị."]],
          slides: [
            { title: "Mee ka ncheta ghọọ akụkọ", bullets: ["Gwa AI ncheta ahụ n'okwu nke gị", "Rịọ maka obere akụkọ n'olu gị"] },
            { title: "Eziokwu na-esi na ndekọ", bullets: ["AI nwere ike ịchepụta eziokwu ezinụlọ", "Nwaa FamilySearch ma ọ bụ ọba akwụkwọ gị"] },
            { title: "Kesaa ya", bullets: ["Edela ozi nzuzo nke ndị ikwu dị ndụ", "Gụọrọ ụmụ ụmụ gị ya n'olu dị elu"] }
          ],
          tryIt: "Ọrụ ikpeazụ: họrọ otu ihe ntụrụndụ ma ọ bụ isiokwu, rịọ ngwa enyemaka AI maka atụmatụ izu abụọ, mee ka ọ kụziere gị nkuzi mbụ nzọụkwụ n'otu n'otu, kwe ka o jiri ajụjụ atọ nwalee gị, ma dee otu ihe ị ga-eme omume ya echi.",
          youCanNow: "iji AI mụta ihe, hazie ọrụ ihe ntụrụndụ ma dekọọ akụkọ ezinụlọ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ genealogy?", options: ["Ọmụmụ akụkọ ezinụlọ", "Ụdị ubi", "Ụdị ise ihe", "App vidiyo"], answer: 0, why: "Genealogy bụ ọmụmụ akụkọ ezinụlọ." },
            { objective: "O6", q: "Ị chọrọ ịmata ebe a mụrụ nne nne nne gị. Ebee ka ị ga-ele?", options: ["Rịọ AI ka o dejupụta ya", "Chee echiche ma dee ya n'akụkọ ahụ", "Tinye ozi ndị ikwu gị n'ịntanetị", "FamilySearch ma ọ bụ ebe enyemaka genealogy nke ọba akwụkwọ gị"], answer: 3, why: "AI nwere ike ịchepụta eziokwu ezinụlọ; ezi ndekọ dị na saịtị a tụkwasịrị obi ma ọ bụ n'ọba akwụkwọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịnụ ụtọ ihe ntụrụndụ gị site n'AI",
        questions: [
          { objective: "O4", q: "Olee otu AI nwere ike isi nyere gị aka ịchọta ezigbo vidiyo nkuzi?", options: ["Ọ na-ehichapụ mgbasa ozi", "Ọ na-ese vidiyo ahụ", "Ọ na-akwụ ụgwọ ya", "Ọ na-atụ aro ezigbo okwu ọchụchọ"], answer: 3, why: "Ezigbo okwu ọchụchọ na-eduga na vidiyo ka mma." },
          { objective: "O4", q: "Njikọ dị na nkọwa vidiyo na-ekwu \"Zụta ihe ọmụmụ zuru ezu ugbu a\". Ị chọrọ ya iji mụta ihe?", options: ["Mba, ị nwere ike ịgafe ya", "Ee, mgbe niile", "Ee, ọ bụ iwu", "Naanị na ngwụcha izu"], answer: 0, why: "Vidiyo n'efu na-akụzi ọtụtụ ihe; ọ dịghị mkpa ka ị zụta." },
          { objective: "O5", q: "Maka atụmatụ ubi akwụkwọ nri, gịnị ka ị kwesịrị ịgwa AI?", options: ["Okwuntughe gị", "Nọmba ụlọ akụ gị", "Mpaghara gị, oge n'afọ na oghere gị", "Ọ dịghị ihe"], answer: 2, why: "Mpaghara, oge n'afọ na oghere na-emetụta ihe na-eto nke ọma." },
          { objective: "O5", q: "AI tụrụ aro otu ọgwụ a na-agba n'ubi. Olee otu ị ga-esi lelee ma ọ dị mma?", options: ["Tụkwasị AI obi", "Jụọ onye ị na-amaghị", "Gbaa ya karịa", "Gụọ leebụl ma ọ bụ jụọ ebe a na-ere ihe ubi"], answer: 3, why: "Eziokwu gbasara nchekwa kwesịrị isi na leebụl ma ọ bụ isi iyi a tụkwasịrị obi." },
          { objective: "O6", q: "Gịnị mere ị na-agaghị arịọ AI eziokwu gbasara nne na nna nne na nna gị?", options: ["Ọ na-efu ego", "Ọ na-adị nwayọọ nke ukwuu", "O nwere ike ịchepụta ha", "Ọ na-asụ naanị French"], answer: 2, why: "AI amaghị akụkọ ezinụlọ gị; ndekọ ma ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịmụ Ihe na Ihe Ntụrụndụ",
    questions: [
      { objective: "O1", q: "Ngwa enyemaka AI nwere ike ịdị ka:", options: ["Dọkịta gị", "Onye nkuzi nwere ndidi", "Ụlọ akụ gị", "Onye na-ere ọgwụ"], answer: 1, why: "Ọ na-akọwa ihe ugboro ole ọ bụla ị chọrọ." },
      { objective: "O1", q: "Kedu arịrịọ ga-akụziri gị nke ọma karịa?", options: ["\"Abụ m onye mbido. Kụziere m ihe atọ gbasara nnụnụ dị n'azụ ụlọ, otu n'otu oge.\"", "\"nnụnụ\"", "\"kụzie\"", "\"ihe niile\""], answer: 0, why: "Ọ na-ekwu isiokwu ahụ, ọkwa gị na ụkwụ ị chọrọ." },
      { objective: "O1", q: "Ikwu \"chere ka m kwuo next\" na-enyere aka site n':", options: ["Ime ka nzọụkwụ ọ bụla dị obere", "Ime ka olu dị elu", "Ịgbanyụ ngwaọrụ ahụ", "Ịkwụ obere ego"], answer: 0, why: "Obere nzọụkwụ na-ekwe ka i chee echiche tupu ị gaa n'ihu." },
      { objective: "O1", q: "Onye nkuzi (tutor) bụ:", options: ["Ụdị ekwentị", "Onye nkuzi na-enyere otu onye aka n'ụkwụ nke ya", "Ọgwụgwụ weebụsaịtị", "Vidiyo"], answer: 1, why: "Ndị nkuzi dị otu a na-akụziri otu onye n'otu oge." },
      { objective: "O2", q: "Kedu nke na-enyere gị aka icheta ihe ọhụrụ ị mụtara?", options: ["Ịmụta ya niile n'otu abalị", "Ịghara ilegharị ya anya", "Ịnwale onwe gị", "Ịgafe omume"], answer: 2, why: "Icheta azịza na-eme ka ncheta sie ike." },
      { objective: "O2", q: "Olee otu AI kwesịrị isi nwalee gị?", options: ["N'enweghị nzaghachi", "Ajụjụ iri ise n'otu oge", "Naanị ajụjụ siri ike", "Otu ajụjụ n'otu oge ma gwa gị ma i zara nke ọma"], answer: 3, why: "Otu n'otu oge nwere nzaghachi kacha dị mfe." },
      { objective: "O2", q: "Omume na-arụ ọrụ nke ọma mgbe ọ:", options: ["Bụ otu ugboro n'afọ", "Bụ ha niile n'otu oge", "Dị mkpụmkpụ ma e kesaa ya n'ọtụtụ ụbọchị", "Bụ naanị mgbe ike gwụrụ gị"], answer: 2, why: "Omume e kesara n'ụbọchị dị iche iche na-enyere ncheta aka." },
      { objective: "O3", q: "Ezigbo atụmatụ mmụta gụnyere:", options: ["Otu obere ebumnuche kwa ụbọchị", "Enweghị ebumnuche", "Ọtụtụ awa omume kwa ụbọchị", "Naanị ule ikpeazụ"], answer: 0, why: "Obere ebumnuche kwa ụbọchị ga-ekwe omume." },
      { objective: "O3", q: "Ọ bụrụ na atụmatụ ahụ siri gị ike nke ukwuu, ị nwere ike:", options: ["Ihichapụ atụmatụ ahụ", "Ịkwụsị", "Ime ya niile otu o sila dị", "Ịrịọ AI ka o mee ka ụbọchị dị mfe ma ọ bụ tinye ụbọchị izu ike"], answer: 3, why: "Atụmatụ kwesịrị ịdabara gị." },
      { objective: "O3", q: "Gịnị ka ị kwesịrị ịgwa AI mgbe ị na-arịọ maka atụmatụ?", options: ["Okwuntughe gị", "Nkeji na ụbọchị ị nwere ike ime omume", "Nọmba ụlọ akụ gị", "Nọmba Medicare gị"], answer: 1, why: "Oge i nwere na-akpụ atụmatụ ahụ." },
      { objective: "O4", q: "Iko ihe ndoro anya dị na YouTube bụ:", options: ["Olu", "Bọtịnụ ọchụchọ", "Bọtịnụ ọkụ", "Igwefoto"], answer: 1, why: "Ọ na-emeghe igbe ọchụchọ." },
      { objective: "O4", q: "Mgbe ị na-ele vidiyo nkuzi, ị nwere ike:", options: ["Ọ gaghị ekwe ka ị laghachi azụ", "Lee ya naanị otu ugboro", "Ọ gaghị ekwe ka ị kwụsị ya", "Kwụsịtụ ma lee ọzọ ugboro ole masịrị gị"], answer: 3, why: "Ịkwụsịtụ na-ekwe ka i nwalee nzọụkwụ ọ bụla." },
      { objective: "O4", q: "Mgbasa ozi na-arịọ gị ka ị debanye aha ma ọ bụ zụta ihe bụ:", options: ["Ihe na-adịghị mkpa iji mụta ihe", "Iwu", "Site n'aka gọọmentị", "Akụkụ nke nkuzi ahụ"], answer: 0, why: "Ị nwere ike ịmụta ihe n'enweghị ha." },
      { objective: "O5", q: "Maka ọrụ ihe ntụrụndụ, AI nwere ike inye gị:", options: ["Ego dị n'akaụntụ ụlọ akụ gị", "Ngwa ndị ahụ n'onwe ha", "Ndepụta ngwa na nzọụkwụ dị mfe", "Akwụkwọ dọkịta"], answer: 2, why: "Ọ nwere ike ịhazi; gị na-achịkọta ma na-eme." },
      { objective: "O5", q: "Ndepụta ngwa bụ:", options: ["Nọmba ekwentị", "Akwụkwọ ụgwọ nri", "Okwuntughe", "Ihe ndị ị chọrọ tupu ịmalite"], answer: 3, why: "Ọ na-edepụta ihe ị ga-achịkọta." },
      { objective: "O5", q: "Eziokwu gbasara nchekwa ngwaọrụ ma ọ bụ kemịkalụ ka a ga-elele:", options: ["Mgbe ọ bụla", "Naanị n'AI", "Na leebụl ma ọ bụ n'isi iyi a tụkwasịrị obi", "N'aka onye ị na-amaghị"], answer: 2, why: "Leebụl na ndị ọkachamara bụ ndị a pụrụ ịtụkwasị obi." },
      { objective: "O6", q: "Genealogy bụ:", options: ["Osisi ubi", "Ọmụmụ akụkọ ezinụlọ", "App ekwentị", "Ụdị agba"], answer: 1, why: "Genealogy na-achọpụta ndị nna nna." },
      { objective: "O6", q: "AI nwere ike inyere gị aka n'akụkọ ezinụlọ site n':", options: ["Ime ka ncheta gị ghọọ obere akụkọ n'olu gị", "Ịmara ụbọchị ọmụmụ ndị nna nna gị", "Ịchọta adreesị ndị ikwu gị", "Ịbịanye aka n'akwụkwọ"], answer: 0, why: "Ọ na-ahazi okwu gị; gị na-enye ncheta ahụ." },
      { objective: "O6", q: "Ebee ka ị kwesịrị ịchọ ezi ndekọ ezinụlọ?", options: ["FamilySearch ma ọ bụ enyemaka genealogy nke ọba akwụkwọ gị", "Naanị n'AI", "Mgbasa ozi na-apụta na mberede", "Asịrị na soshal midia"], answer: 0, why: "Ndekọ na-esi n'isi iyi ndekọ a tụkwasịrị obi." },
      { objective: "O6", q: "Gịnị ka ị kwesịrị ịhapụ n'AI mgbe ị na-ede akụkọ ezinụlọ?", options: ["Agba kacha amasị gị", "Ozi nzuzo nke ndị ikwu dị ndụ", "Aha anụ ụlọ", "Oge n'afọ"], answer: 1, why: "Ozi nzuzo nke ndị ikwu dị ndụ kwesịrị nchekwa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      4,
      7,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Atụmatụ izu abụọ",
        objective: "O3",
        notYet: "Enweghị atụmatụ, ma ọ bụ atụmatụ na-adabaghị oge gị ma ọ bụ ngwa gị.",
        meets: "Atụmatụ izu abụọ nwere obere omume kwa ụbọchị na otu obere ebumnuche kwa ụbọchị.",
        exceeds: "Gbanwere atụmatụ ahụ iji tinye ụbọchị izu ike ma ọ bụ ụbọchị dị mfe, ma dee ya."
      },
      {
        name: "Nkuzi mbụ nzọụkwụ n'otu n'otu",
        objective: "O1",
        notYet: "Rịọrọ maka ihe niile n'otu oge.",
        meets: "Rịọrọ ngwa enyemaka ahụ ka ọ kụzie nkuzi mbụ nzọụkwụ n'otu n'otu n'ụkwụ gị.",
        exceeds: "Kwuru ihe ị maraworị ka nzọụkwụ ndị ahụ malite n'ọkwa kwesịrị ekwesị."
      },
      {
        name: "Nwalere onwe gị",
        objective: "O2",
        notYet: "Gafere nnwale ahụ.",
        meets: "Zara ajụjụ nnwale atọ, otu n'otu oge, n'okwu nke gị.",
        exceeds: "Rịọrọ maka nkọwa ọhụrụ nke ihe ọ bụla i mehiere ma nwaa ọzọ."
      },
      {
        name: "Omume ọzọ",
        objective: "O3",
        notYet: "Ọ dịghị ihe e dere maka echi.",
        meets: "Dere otu ihe ị ga-eme omume ya echi.",
        exceeds: "Họọrọ oge maka ya ma tinye ya na kalenda gị."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka na-eme omume ihe ntụrụndụ ha na nsochi ụbọchị 30",
      "Ndị na-amụ ihe kesara ọrụ ma ọ bụ akụkọ ezinụlọ na ezinụlọ ha ma ọ bụ otu",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone, tablet ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) na YouTube",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ kalenda, maka atụmatụ mmụta",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke na-enweghị nrụgide: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ onye ọ bụla na-amụ ihe ka ọ họrọ ihe ntụrụndụ masịrị ya tupu nnọkọ mbụ; ọ na-akpali ha.",
      "Gosi YouTube na nnukwu ihuenyo ma gosi mgbasa ozi na njikọ ndebanye aha tupu ndị na-amụ ihe achọọ ihe n'onwe ha.",
      "Chetara ndị na-amụ ihe ka ha lelee eziokwu gbasara nchekwa ngwaọrụ, kemịkalụ na osisi na leebụl ma ọ bụ n'ebe a na-ere ihe ubi.",
      "Maka akụkọ ezinụlọ, chetara ndị na-amụ ihe na AI nwere ike ịchepụta eziokwu ezinụlọ, ma ha debe ozi ndị ikwu dị ndụ na nzuzo.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
