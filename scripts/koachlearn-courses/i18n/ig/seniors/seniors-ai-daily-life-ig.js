"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-daily-life-ig",
  lang: "ig",
  translationOf: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "AI maka Ndụ Kwa Ụbọchị",
  skills: "Iji AI mee ndepụta ihe ị ga-azụ n'ahịa, Ịhazi nri dị mfe, Ịtọ ncheta site n'olu, Itinye oge nhọpụta na kalenda, Ịghọta akwụkwọ ozi siri ike",
  outcome: "iji ngwa enyemaka AI na ngwa enyemaka olu dị n'ekwentị gị hazie nri dị mfe maka otu izu, mee ya ka ọ bụrụ ndepụta ihe ị ga-azụ n'ahịa, tọọ ncheta, ma nweta nkọwa akwụkwọ ozi siri ike n'okwu dị mfe.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye chọrọ ka teknụzụ mee ka ọrụ kwa ụbọchị dịtụ mfe: ịzụ ahịa, isi nri, icheta oge nhọpụta na ịghọta akwụkwọ ozi.",
    "Ị ga-eji ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini, na ngwa enyemaka olu dịlarị n'ekwentị gị (Siri na iPhone, ma ọ bụ Google Assistant ma ọ bụ Gemini na Android), iji hazie nri, mee ndepụta, tọọ ncheta ma ghọta akwụkwọ ozi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gaa nwayọọ, megharịa ihe ị chọrọ, ma mee ọrụ \"Nwalee ya ugbu a\" oge ọ bụla. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI hazie nri abalị atọ dị mfe maka izu na-abịa, rịọ ya otu ndepụta ihe ị ga-azụ n'ahịa maka ha atọ, tọọ ncheta n'ekwentị ka ị gaa ahịa, ma tinye otu ezi oge nhọpụta na kalenda ekwentị gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye, ọtụtụ n'ime ha bi naanị ha ma ọ bụ di na nwunye, ndị na-ahazi nri ha, ịzụ ahịa, oge nhọpụta na akwụkwọ ozi ha n'onwe ha, ma chọọ ka ọrụ kwa ụbọchị ghara ịsị ike.",
    startingPoint: "Ha nwere smartphone, nwee ike ịkpọ oku ma zipu ozi. Ọtụtụ ejibeghị ngwa enyemaka AI, ngwa enyemaka olu nke ekwentị ha, ọkwa kalenda ma ọ bụ app Notes.",
    gap: "Ịhazi nri, icheta oge nhọpụta na ịghọta akwụkwọ ozi si n'ụlọ ọrụ inshọransị ma ọ bụ ọfịs nwere ike ịgwụ ike ma kpata nchegbu. Iji ngwa enyemaka AI na ngwa dị n'ekwentị maka ọrụ ndị a na-ebelata ike a na-etinye ma na-enyere ndị okenye aka ịnọgide na-eme ihe n'onwe ha, ma ọ bụrụhaala na ozi nzuzo anọghị n'ime ya, a na-ajụkwa onye zitere akwụkwọ ozi dị mkpa iji kwado ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: smartphone nwere ngwa enyemaka olu na app Calendar; menu iPhone na Android dị iche",
      "Oge: ihe dị ka nkeji 5 kwa nkuzi, nwayọọ nwayọọ, na oge ime omume",
      "Nri pụrụ iche na-esi n'aka dọkịta onye na-amụ ihe, ọ bụghị n'AI",
      "Nzuzo: enweghị aha, nọmba akaụntụ, nọmba Medicare ma ọ bụ Social Security na prompt ma ọ bụ na foto akwụkwọ ozi"
    ],
    prerequisites: "\"AI maka Ndị Okenye: Iji Ngwa Enyemaka AI\" na-enye aka ma i buru ụzọ were ya, mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ịrịọ echiche nri dị mfe nke na-ekwu ọnụ ọgụgụ mmadụ ị na-esiri nri, oge gị, ihe ị na-achọ na ihe ị ga-ezere", standard: "ma nweta echiche atọ dabara mkpa gị na ndụmọdụ dọkịta gị" },
    { id: "O2", condition: "Mgbe e nyere gị echiche nri ole na ole", action: "inweta otu ndepụta ihe ị ga-azụ n'ahịa, nke e haziri dịka ngalaba ụlọ ahịa, na-enweghị ihe ị nweelarị", standard: "nke e chekwara na Notes, e bipụtara ma ọ bụ e dere n'akwụkwọ" },
    { id: "O3", condition: "Site n'iji ngwa enyemaka olu dị n'ekwentị gị", action: "ịtọ ncheta ma ọ bụ taịma site n'ikwu okwu, nwere ụbọchị na oge", standard: "ma lelee n'ihuenyo na ọ tọrọ" },
    { id: "O4", condition: "Mgbe e nyere gị ezi oge nhọpụta", action: "itinye ya na kalenda ekwentị gị nwere ọkwa", standard: "nwere aha, ụbọchị na oge ziri ezi, na ọkwa tupu ya" },
    { id: "O5", condition: "Mgbe e nyere gị akwụkwọ ozi siri ike si n'ụlọ ọrụ inshọransị, ụlọ ọrụ ọkụ na mmiri, ma ọ bụ ọfịs", action: "inweta nkọwa ya n'okwu dị mfe n'etinyeghị ozi nzuzo ọ bụla", standard: "ma kwado ihe ị ga-eme site n'ịkpọ nọmba e biri n'akwụkwọ ozi ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ndepụta, nri na ịzụ ahịa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI hazie nri dị mfe",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI echiche nri ole na ole dị mfe dabara mkpa gị.",
          text: [
            "Ikpebi ihe ị ga-esi kwa ụbọchị nwere ike ịgwụ ike, karịsịa mgbe ị na-esiri otu ma ọ bụ mmadụ abụọ. Ngwa enyemaka AI nwere ike inye echiche n'ime sekọnd ole na ole.",
            "Gwa ya ihe ị na-achọ, ọnụ ọgụgụ mmadụ ị na-esiri nri, oge na ike ole ị chọrọ itinye, na ihe ọ bụla ị ga-ezere. Dịka ọmụmaatụ: \"Ana m esiri naanị m nri. Nye m echiche nri abalị atọ dị mfe nke na-ewe ihe na-erughị nkeji 30, na-eji ihe ole na ole, ma nwee obere nnu.\"",
            "Ọ bụrụ na dọkịta gị nyere gị nri pụrụ iche, soro ndụmọdụ dọkịta gị. Ngwa enyemaka ahụ nwere ike inye echiche, mana ọ maghị ahụike gị."
          ],
          steps: ["Meghee ngwa enyemaka AI gị.", "Kwuo ọnụ ọgụgụ mmadụ ị na-esiri nri.", "Kwuo oge i nwere na ihe ị na-achọ.", "Kwuo ihe ọ bụla ị ga-ezere, dị ka nnu ma ọ bụ shuga karịrị akarị.", "Rịọ echiche atọ."],
          words: [["Ihe e ji esi nri (ingredient)", "otu n'ime nri ndị a na-etinye n'usoro isi nri (recipe)."]],
          slides: [
            { title: "Ka AI nye echiche nri", bullets: ["Echiche n'ime sekọnd ole na ole", "Ọ dị mma mgbe ị na-esiri otu ma ọ bụ mmadụ abụọ"] },
            { title: "Gwa ya", bullets: ["Mmadụ ole", "Oge ole", "Ihe ị na-achọ na ihe ị ga-ezere"] },
            { title: "Dọkịta gị bụ onye mbụ", bullets: ["Soro nri ọ bụla dọkịta gị nyere gị", "AI amaghị ahụike gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI nri abalị atọ dị mfe maka izu na-abịa nke dabara otu ị si achọ iri nri. Dee atọ ndị kacha masị gị.",
          youCanNow: "ịrịọ ngwa enyemaka AI echiche nri dabara mkpa gị.",
          quickCheck: [
            { objective: "O1", q: "Onye na-ekpebi nri pụrụ iche gị ma ọ bụrụ na i nwere otu?", options: ["Ngwa enyemaka AI", "Dọkịta gị", "Ụlọ ahịa nri", "Ihe ngosi isi nri na TV"], answer: 1, why: "Ngwa enyemaka ahụ na-enye echiche mana ọ maghị ahụike gị; soro ndụmọdụ dọkịta gị." },
            { objective: "O1", q: "Ị na-esiri mmadụ abụọ nri, ike anaghịkwa adị gị n'anyasị. Gịnị ka ị ga-etinye n'arịrịọ nri gị?", options: ["\"Mee ka ọ dị ngwa ma dị mfe, maka mmadụ abụọ.\"", "Ọ dịghị ihe; naanị kwuo \"nri\"", "Nọmba Medicare gị", "\"Mee ka ọ mara mma nke ukwuu.\""], answer: 0, why: "Ikwu mmadụ ole na oge na ike ole ị chọrọ itinye na-enweta echiche dabara gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime nri ka ọ bụrụ ndepụta ihe ị ga-azụ",
          minutes: 4,
          goal: "Nweta otu ndepụta ihe ị ga-azụ n'ahịa doro anya maka ọtụtụ nri.",
          text: [
            "Mgbe i nwetara echiche nri, rịọ ngwa enyemaka ahụ ka o mee otu ndepụta ihe ị ga-azụ n'ahịa maka ha niile. Nke a na-eme ka ị ghara ide usoro isi nri ọ bụla.",
            "Rịọ ya ka o hazie ndepụta ahụ dịka akụkụ ụlọ ahịa, dị ka mkpụrụ osisi na akwụkwọ nri, mmiri ara ehi na ihe e ji ya eme, na nri dị n'ime ite (canned goods), ka ị gafee ụlọ ahịa ahụ otu ugboro. Wee gwa ya ihe ị nweelarị n'ụlọ ka o wepụ ha.",
            "Ị nwere ike ibipụta ndepụta ahụ, detuo ya n'app Notes nke ekwentị gị, ma ọ bụ dee ya n'akwụkwọ. Jiri nke kacha dịrị gị mfe."
          ],
          steps: ["Jụọ: \"Mee otu ndepụta ihe m ga-azụ n'ahịa maka nri abalị atọ ndị a.\"", "Rịọ ya ka o hazie ndepụta ahụ dịka ngalaba ụlọ ahịa.", "Gwa ya ihe ị nweelarị.", "Detuo ndepụta ahụ n'ime Notes, bipụta ya, ma ọ bụ dee ya n'akwụkwọ."],
          words: [["App Notes", "app dị n'ekwentị gị maka ide na ichekwa obere ndetu na ndepụta."]],
          slides: [
            { title: "Otu ndepụta maka nri niile", bullets: ["\"Mee otu ndepụta ihe m ga-azụ n'ahịa maka nri abalị atọ ndị a.\""] },
            { title: "Mee ka ịzụ ahịa dị mfe", bullets: ["Hazie ya dịka ngalaba ụlọ ahịa", "Wepụ ihe ị nweelarị"] },
            { title: "Chekwaa ndepụta gị", bullets: ["Detuo ya n'app Notes", "Bipụta ya", "Ma ọ bụ dee ya n'akwụkwọ"] }
          ],
          tryIt: "Rịọ ngwa enyemaka ahụ otu ndepụta ihe ị ga-azụ n'ahịa maka nri abalị atọ gị, nke e hazịrị dịka ngalaba ụlọ ahịa. Gwa ya ihe abụọ ị nweelarị, ma chekwaa ndepụta ikpeazụ ahụ.",
          youCanNow: "ime echiche nri ka ọ bụrụ otu ndepụta ihe ị ga-azụ n'ahịa dabara kichin gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ịhazi ndepụta dịka ngalaba ụlọ ahịa pụtara?", options: ["Ịhazi ihe site na nke kacha dị ọnụ ala ruo nke kacha dị oke ọnụ", "Ide ndepụta ahụ ugboro abụọ", "Itinye ihe ọnụ dịka ebe ha dị, dị ka mmiri ara ehi ma ọ bụ nri dị n'ime ite", "Idepụta naanị otu nri"], answer: 2, why: "Ịhazi ya dịka ngalaba na-eme ka ị gafee ụlọ ahịa otu ugboro." },
            { objective: "O2", q: "I nweelarị osikapa na akwa n'ụlọ. Gịnị ka ị ga-agwa ngwa enyemaka ahụ?", options: ["Ọ dịghị ihe", "Ka o tinyekwuo osikapa na akwa", "Ka o mee atụmatụ nri ọhụrụ", "Na i nweelarị osikapa na akwa, ka o wepụ ha"], answer: 3, why: "Ịgwa ya ihe i nwere na-ewepụ ihe ndị ahụ na ndepụta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji ngwa enyemaka olu ekwentị gị maka ncheta",
          minutes: 6,
          goal: "Tọọ ncheta ma ọ bụ taịma site n'ịgwa ekwentị gị okwu.",
          text: [
            "Ọtụtụ ekwentị nwere ngwa enyemaka olu n'ime ha: Siri na iPhone, na Google Assistant ma ọ bụ Gemini n'ọtụtụ ekwentị Android. Ị na-ekwu okwu, ekwentị ahụ emee obere ọrụ, dị ka ịtọ ncheta, taịma ma ọ bụ mkpu ụtụtụ (alarm).",
            "Iji malite ya, ị nwere ike ikwu \"Hey Siri\" ma ọ bụ \"Hey Google\", ma ọ bụ pịa ma jide bọtịnụ dị n'akụkụ ma ọ bụ bọtịnụ home. Ọ bụrụ na a tọbeghị ya, rịọ onye ezinụlọ gị ka o nyere gị aka gbanwuo ya na Settings.",
            "Wee kwuo okwu nke ọma: \"Remind me to go grocery shopping on Thursday at 10 am\" (Chetara m ịga ahịa na Tọzdee n'elekere 10 nke ụtụtụ). \"Set a timer for 20 minutes\" (Tọọ taịma maka nkeji 20). \"Remind me to call Ruth tomorrow at 5 pm\" (Chetara m ịkpọ Ruth echi n'elekere 5 nke mgbede). Ekwentị ahụ ga-agwa gị ma ọ bụ gosi gị na ọ tọrọ. Ọ bụrụ na asụsụ ekwentị gị bụ Igbo ma ọ bụ asụsụ ọzọ, kwuo ya n'asụsụ ahụ."
          ],
          steps: ["Kwuo \"Hey Siri\" ma ọ bụ \"Hey Google\", ma ọ bụ pịa ma jide bọtịnụ dị n'akụkụ ma ọ bụ bọtịnụ home.", "Chere ụda ma ọ bụ ìhè na ihuenyo.", "Kwuo ihe ị chọrọ, ya na ụbọchị na oge.", "Lelee ihuenyo ka ị hụ na ọ tọrọ."],
          words: [["Ngwa enyemaka olu (voice assistant)", "onye enyemaka dị n'ime ekwentị gị nke na-arụ obere ọrụ mgbe ị gwara ya okwu."], ["Ncheta (reminder)", "ozi ekwentị gị na-egosi gị n'oge ị họọrọ."]],
          slides: [
            { title: "Ekwentị gị nwere ike ige ntị", bullets: ["Siri na iPhone", "Google Assistant ma ọ bụ Gemini na Android"] },
            { title: "Kpọte ya", bullets: ["Kwuo \"Hey Siri\" ma ọ bụ \"Hey Google\"", "Ma ọ bụ pịa ma jide bọtịnụ dị n'akụkụ ma ọ bụ bọtịnụ home"] },
            { title: "Kwuo ihe ị chọrọ", bullets: ["\"Chetara m ịga ahịa na Tọzdee n'elekere 10 nke ụtụtụ.\"", "\"Tọọ taịma maka nkeji 20.\"", "Lelee ihuenyo ka ị hụ na ọ tọrọ"] }
          ],
          tryIt: "Jiri ngwa enyemaka olu ekwentị gị tọọ ncheta ịga ahịa nri n'ụbọchị na oge dabara gị. Lelee na ọ pụtara na ihuenyo.",
          youCanNow: "ịtọ ncheta ma ọ bụ taịma site n'ịgwa ekwentị gị okwu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ngwa enyemaka olu n'ekwentị?", options: ["Mmadụ na-akpọghachi gị", "Onye enyemaka dị n'ime ekwentị ị na-agwa okwu, dị ka Siri ma ọ bụ Google Assistant", "Ihe enyemaka ịnụ ihe", "App ozi ederede"], answer: 1, why: "Siri na Google Assistant na-arụ obere ọrụ, dị ka ncheta na taịma, mgbe ị kwuru okwu." },
            { objective: "O3", q: "Ị chọrọ icheta ịkpọ nwanne gị nwanyị echi n'anyasị. Gịnị ka ị ga-ekwu?", options: ["\"Kpọọ.\"", "\"Nwanne.\"", "\"Chetara m ịkpọ nwanne m nwanyị echi n'elekere 6 nke mgbede.\"", "\"Echi.\""], answer: 2, why: "Arịrịọ doro anya nwere ọrụ, ụbọchị na oge na-atọ ncheta bara uru." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ndepụta, nri na ịzụ ahịa",
        questions: [
          { objective: "O1", q: "Gịnị ka ị ga-agwa ngwa enyemaka AI mgbe ị na-arịọ echiche nri?", options: ["Nọmba ụlọ akụ gị", "Naanị \"nri\"", "Mmadụ ole, oge gị, ihe ị na-achọ na ihe ị ga-ezere", "Okwuntughe dọkịta gị"], answer: 2, why: "Ozi ndị ahụ na-enyere ya aka inye nri dabara gị." },
          { objective: "O1", q: "Dọkịta gị nyere gị nri nwere obere nnu, mana AI na-atụ aro nri nwere nnu nke ukwuu. Gịnị ka ị ga-eme?", options: ["Soro ndụmọdụ dọkịta gị", "Soro AI", "Kwụsị iri nri", "Leghara ha abụọ anya"], answer: 0, why: "Dọkịta gị maara ahụike gị; AI amaghị." },
          { objective: "O2", q: "Gịnị mere ị ga-eji rịọ ngwa enyemaka ahụ ka o hazie ndepụta gị dịka ngalaba ụlọ ahịa?", options: ["Ọ na-eme ka nri dị ọnụ ala", "Ọ bụ iwu", "Ka o bipụta n'agba dị iche iche", "Ka ị gafee ụlọ ahịa otu ugboro"], answer: 3, why: "Ịhazi ya dịka ngalaba na-eme ka ịzụ ahịa dị ngwa." },
          { objective: "O3", q: "Kedu nke bụ ngwa enyemaka olu dị n'ime ọtụtụ ekwentị?", options: ["Igwe mgbakọ", "Siri", "Igwefoto", "Ọkụ ekwentị (flashlight)"], answer: 1, why: "Siri na iPhone na Google Assistant ma ọ bụ Gemini na Android na-ege ntị n'arịrịọ a na-ekwu n'olu." },
          { objective: "O3", q: "Kedu arịrịọ olu ga-atọ ncheta bara uru?", options: ["\"Ịzụ ahịa.\"", "\"Chetara m ịga ahịa na Tọzdee n'elekere 10 nke ụtụtụ.\"", "\"Ndewo.\"", "\"Ekwentị.\""], answer: 1, why: "Ọ na-ekwu ihe a ga-echeta, ụbọchị na oge." }
        ]
      }
    },
    {
      name: "Isi 2: Oge nhọpụta na akwụkwọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Itinye oge nhọpụta na kalenda ekwentị gị",
          minutes: 6,
          goal: "Tinye oge nhọpụta dọkịta na kalenda ekwentị gị nwere ọkwa.",
          text: [
            "Ekwentị gị nwere app Calendar (kalenda) nke nwere ike idebe oge nhọpụta gị niile ma dọọ gị aka na ntị tupu nke ọ bụla. Nke a bara uru maka ịga ịhụ dọkịta, ịkpụ isi na ụbọchị ọmụmụ ndị ezinụlọ.",
            "Ụzọ kacha dị mfe bụ ịrịọ ngwa enyemaka olu gị: \"Add an appointment with Dr. Lee on May 12 at 2 pm\" (Tinye oge nhọpụta na Dr. Lee na Mee 12 n'elekere 2 nke ehihie). Ị nwekwara ike imeghe app Calendar, pịa akara mgbakwunye (+), dee aha ya, họrọ ụbọchị na oge, ma pịa Add ma ọ bụ Save.",
            "Tọọ ọkwa (alert) ka ekwentị chetara gị tupu oge eruo, dị ka otu ụbọchị tupu ya na otu awa tupu ya. Chọọ nhọrọ a na-akpọ Alert ma ọ bụ Notification mgbe ị na-etinye ihe omume ahụ."
          ],
          steps: ["Meghee app Calendar, ma ọ bụ rịọ ngwa enyemaka olu gị.", "Pịa akara mgbakwunye (+) iji tinye ihe omume.", "Dee aha ya, dị ka \"Nlele Dr. Lee\".", "Họrọ ụbọchị na oge.", "Họrọ ọkwa, dị ka ụbọchị 1 tupu ya.", "Pịa Add ma ọ bụ Save."],
          words: [["App Calendar (kalenda)", "app dị n'ekwentị gị nke na-edebe oge nhọpụta gị dịka ụbọchị."], ["Ọkwa (alert)", "ụda ma ọ bụ ozi ekwentị na-enye gị tupu oge nhọpụta."]],
          slides: [
            { title: "Kalenda ekwentị gị", bullets: ["Ọ na-edebe oge nhọpụta gị niile", "Ọ na-adọ gị aka na ntị tupu nke ọ bụla"] },
            { title: "Ụzọ abụọ isi tinye ya", bullets: ["Rịọ ngwa enyemaka olu gị", "Ma ọ bụ meghee Calendar ma pịa +"] },
            { title: "Dejupụta ya", bullets: ["Aha, ụbọchị na oge", "Họrọ ọkwa, dị ka ụbọchị 1 tupu ya", "Pịa Add ma ọ bụ Save"] }
          ],
          tryIt: "Tinye otu ezi oge nhọpụta ma ọ bụ ụbọchị ọmụmụ onye ezinụlọ na kalenda ekwentị gị nwere ọkwa otu ụbọchị tupu ya. Lelee na ọ pụtara n'ụbọchị ziri ezi.",
          youCanNow: "itinye oge nhọpụta na kalenda ekwentị gị ma nweta ncheta tupu ya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ọkwa dị n'oge nhọpụta na kalenda na-eme?", options: ["Ọ na-eme ka ekwentị chetara gị tupu oge nhọpụta", "Ọ na-akagbu oge nhọpụta", "Ọ na-akpọrọ gị dọkịta", "Ọ na-ekesa ya ndị ị na-amaghị"], answer: 0, why: "Ọkwa na-adọ gị aka na ntị tupu oge eruo, dị ka otu ụbọchị ma ọ bụ otu awa tupu ya." },
            { objective: "O4", q: "I ka hazịrị oge nlele maka Tuzde na-abịa. Gịnị bụ nzọụkwụ mbụ iji tinye ya n'app Calendar?", options: ["Gbanyụọ ekwentị gị", "Hichapụ oge nhọpụta ochie", "Dee ya n'ozi ederede nye onwe gị", "Pịa akara mgbakwunye (+) iji tinye ihe omume"], answer: 3, why: "Pịa akara mgbakwunye, wee dee aha ya ma họrọ ụbọchị, oge na ọkwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Inweta nkọwa akwụkwọ ozi siri ike",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka ọ kọwaa akwụkwọ ozi siri ike n'okwu dị mfe, n'ekesaghị ozi nzuzo.",
          text: [
            "Akwụkwọ ozi si n'ụlọ ọrụ inshọransị, ụlọ ọrụ ọkụ na mmiri (utility), ma ọ bụ ọfịs nwere ike ijupụta n'okwu siri ike. Ngwa enyemaka AI nwere ike ịkọwa ha n'okwu dị mfe.",
            "Nke mbụ, kpuchie ma ọ bụ wepụ ozi nzuzo: aha, nọmba akaụntụ, nọmba Medicare ma ọ bụ Social Security, na adreesị gị. Wee dee akụkụ siri ike ahụ, ma ọ bụ kọwaa ya, ma jụọ: \"Kọwaa nke a n'okwu dị mfe. Gịnị, ma ọ bụrụ na e nwere ihe, ka m kwesịrị ime?\"",
            "Ụfọdụ ngwa enyemaka na-ekwe ka ị see foto peeji. Ọ bụrụ na i mee nke a, kpuchie ozi nzuzo tupu i see foto ahụ. Maka ihe ọ bụla gbasara ego, enyemaka gọọmentị (benefits) ma ọ bụ ahụike, kwado ihe ị ga-eme site n'ịkpọ nọmba e biri n'akwụkwọ ozi ahụ n'onwe ya, ma ọ bụ jụọ onye ezinụlọ ị tụkwasịrị obi."
          ],
          steps: ["Kpuchie ma ọ bụ wepụ aha, nọmba na adreesị gị.", "Dee ma ọ bụ kọwaa naanị akụkụ siri ike ahụ.", "Jụọ: \"Kọwaa nke a n'okwu dị mfe. Gịnị ka m kwesịrị ime?\"", "Kwado ya site n'ịkpọ nọmba e biri n'akwụkwọ ozi ahụ."],
          words: [["Okwu dị mfe (plain language)", "okwu nkịtị, nke kwa ụbọchị, dị mfe ịghọta."], ["Nọmba akaụntụ", "nọmba nzuzo ụlọ ọrụ na-eji maka akaụntụ gị; ekesala ya na AI mgbe ọ bụla."]],
          slides: [
            { title: "Akwụkwọ ozi siri ike, okwu dị mfe", bullets: ["Inshọransị, ọkụ na mmiri, ọfịs", "AI nwere ike ịkọwa ha n'ụzọ dị mfe"] },
            { title: "Buru ụzọ chebe onwe gị", bullets: ["Kpuchie aha na nọmba akaụntụ", "Wepụ nọmba Medicare na Social Security", "Wepụ adreesị gị"] },
            { title: "Jụọ ma kwado", bullets: ["\"Kọwaa n'okwu dị mfe. Gịnị ka m kwesịrị ime?\"", "Kpọọ nọmba e biri n'akwụkwọ ozi ahụ iji kwado ya"] }
          ],
          tryIt: "Chọta akwụkwọ ozi ma ọ bụ ụgwọ nwere ahịrịokwu ị ghọtachaghị. Wepụ ozi nzuzo niile, dee naanị ahịrịokwu ahụ n'ime ngwa enyemaka, ma rịọ ya ka ọ kọwaa ya n'okwu dị mfe.",
          youCanNow: "inweta nkọwa akwụkwọ ozi siri ike n'okwu dị mfe ma na-echebe ozi nzuzo gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ okwu dị mfe (plain language)?", options: ["Okwu dị mfe, nke kwa ụbọchị", "Okwu iwu", "Asụsụ mba ọzọ", "Koodu dị mkpụmkpụ nke ukwuu"], answer: 0, why: "Okwu dị mfe pụtara okwu nkịtị, nke kwa ụbọchị, dị mfe ịghọta." },
            { objective: "O5", q: "Ị chọrọ ise foto akwụkwọ ozi inshọransị maka AI. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Mee ka foto ahụ buo ibu", "Kpuchie aha gị, adreesị gị na nọmba akaụntụ", "Tinye nọmba Medicare gị ka o lelee ya", "Ziga ya enyi gị"], answer: 1, why: "Kpuchie ozi nzuzo tupu i see foto ahụ." }
          ]
        },
        {
          objectives: ["O1","O2","O3"],
          title: "Ijikọta ha: izu gị, nke e mere ka ọ dị mfe",
          minutes: 5,
          goal: "Jikọta AI na ekwentị gị iji hazie otu izu.",
          text: [
            "Ugbu a, i nwere ọtụtụ obere nka: ịrịọ echiche nri, ime ndepụta, ịtọ ncheta na itinye oge nhọpụta. Mgbe e jikọtara ha, ha nwere ike ịhazi izu niile.",
            "Usoro dị mfe: na Sọnde, rịọ ngwa enyemaka ahụ nri abalị atọ na otu ndepụta ihe ị ga-azụ n'ahịa. Tọọ ncheta maka ụbọchị ị ga-aga ahịa. Lee kalenda gị ka ị hụ oge nhọpụta izu ahụ, ma tinye ihe ọ bụla ọhụrụ.",
            "Mee ka ọ dị mfe. Jiri ngwa ndị na-enyere gị aka ma hapụ ndị na-anaghị enyere gị aka. Ndepụta n'akwụkwọ ka na-arụ ọrụ nke ọma, ịrịọ onye ezinụlọ enyemaka dịkwa mma mgbe niile."
          ],
          steps: ["Rịọ ngwa enyemaka AI nri abalị atọ.", "Rịọ otu ndepụta ihe ị ga-azụ n'ahịa.", "Tọọ ncheta maka ụbọchị ị ga-aga ahịa.", "Lelee kalenda gị ma tinye oge nhọpụta ọhụrụ."],
          words: [["Usoro (routine)", "nzọụkwụ ị na-eme otu ụzọ ahụ oge ọ bụla."]],
          slides: [
            { title: "Usoro Sọnde dị mfe", bullets: ["Nri abalị atọ site n'AI", "Otu ndepụta ihe ị ga-azụ n'ahịa", "Ncheta ịga ahịa"] },
            { title: "Lelee izu gị", bullets: ["Lee kalenda gị", "Tinye ihe ọ bụla ọhụrụ nwere ọkwa"] },
            { title: "Mee ka ọ dị mfe", bullets: ["Jiri ihe na-enyere gị aka", "Ndepụta n'akwụkwọ ka na-arụ ọrụ", "Rịọ ezinụlọ gị enyemaka mgbe ọ bụla"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri ngwa enyemaka AI hazie nri abalị atọ dị mfe maka izu na-abịa, rịọ otu ndepụta ihe ị ga-azụ n'ahịa, tọọ ncheta n'ekwentị maka ụbọchị ị ga-aga ahịa, ma tinye otu ezi oge nhọpụta na kalenda gị.",
          youCanNow: "iji AI na ekwentị gị ọnụ hazie nri, zụọ ahịa ma soro oge nhọpụta gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ngwa ndị, mgbe e jikọtara ha, nwere ike ịhazi izu gị?", options: ["Naanị kalenda akwụkwọ", "Naanị ngwa enyemaka AI", "Echiche nri, ndepụta ihe ị ga-azụ n'ahịa, ncheta na kalenda gị", "Ọ dịghị nke ọ bụla; ọ siri ike nke ukwuu"], answer: 2, why: "Obere nka ndị dị n'ihe ọmụmụ a na-arụkọ ọrụ ọnụ iji hazie izu niile." },
            { objective: "O1", q: "Ọ bụ Sọnde. Gịnị bụ nzọụkwụ mbụ dị mfe iji hazie izu gị?", options: ["Zụta ihe niile dị n'ụlọ ahịa", "Gbanyụọ ncheta niile", "Gụọ akwụkwọ ozi ochie", "Rịọ ngwa enyemaka ahụ nri abalị atọ na otu ndepụta ihe ị ga-azụ n'ahịa"], answer: 3, why: "Usoro ahụ na-amalite na nri abalị atọ na otu ndepụta, wee ncheta na ilele kalenda." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Oge nhọpụta na akwụkwọ",
        questions: [
          { objective: "O4", q: "N'app Calendar, gịnị ka ị na-apị iji tinye oge nhọpụta?", options: ["Bọtịnụ olu", "Igwefoto", "Akara batrị", "Akara mgbakwunye (+)"], answer: 3, why: "Akara mgbakwunye na-etinye ihe omume ọhụrụ." },
          { objective: "O4", q: "Gịnị mere ị ga-eji tọọ ọkwa n'oge nhọpụta?", options: ["Ka ekwentị chetara gị tupu ya", "Ka ọ dị ọnụ ala", "Ka dọkịta kpọọ gị", "Ọ na-ehichapụ ihe omume ahụ"], answer: 0, why: "Ọkwa na-adọ gị aka na ntị tupu oge eruo." },
          { objective: "O5", q: "Tupu ịjụ AI maka akwụkwọ ozi, ị kwesịrị:", options: ["Ide nọmba akaụntụ gị", "Iziga akwụkwọ ozi ahụ niile nwere aha gị", "Ikpuchi ma ọ bụ iwepụ ozi nzuzo", "Ikesa nọmba Medicare gị"], answer: 2, why: "Ozi nzuzo ekwesịghị ịbanye n'ime ngwa enyemaka AI mgbe ọ bụla." },
          { objective: "O5", q: "AI kọwara akwụkwọ ozi gbasara enyemaka gọọmentị gị. Kedu otu ị ga-esi kwado ihe ị ga-eme?", options: ["Tụkwasị AI obi kpamkpam", "Emela ihe ọ bụla", "Jụọ onye ị na-amaghị n'ịntanetị", "Kpọọ nọmba e biri n'akwụkwọ ozi ahụ"], answer: 3, why: "Ọfịs zitere akwụkwọ ozi ahụ bụ ezi isi iyi." },
          { objective: "O2", q: "Gịnị bụ ezigbo usoro Sọnde site n'ihe ọmụmụ a?", options: ["Hichapụ kalenda gị", "Kesaa okwuntughe gị", "Hazie nri abalị, mee ndepụta, tọọ ncheta ịga ahịa, lelee kalenda gị", "Zụta ekwentị ọhụrụ"], answer: 2, why: "Ọ na-ejikọta nka si na nkuzi ọ bụla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ndụ Kwa Ụbọchị",
    questions: [
      { objective: "O1", q: "Ngwa enyemaka AI nwere ike inyere aka na nri site na:", options: ["Isi ha", "Inye echiche dị mfe dabara gị", "Ịzụrụ gị nri n'ahịa", "Ịmara nri dọkịta gị nyere gị"], answer: 1, why: "Ọ na-enye echiche mgbe ị gwara ya ihe ị chọrọ." },
      { objective: "O1", q: "Kedu arịrịọ nri kacha doo anya?", options: ["\"Ana m esiri naanị m nri. Nye m nri abalị atọ dị mfe, nwere obere nnu, na-erughị nkeji 30.\"", "\"nri\"", "\"nri abalị?\"", "\"rie\""], answer: 0, why: "Ọ na-ekwu mmadụ ole, oge, na ihe a ga-ezere." },
      { objective: "O1", q: "Ọ bụrụ na nri dọkịta gị na echiche AI adabaghị, soro:", options: ["Dọkịta gị", "AI", "Nke ọ bụla dị mfe karị", "Ọ dịghị nke ọ bụla"], answer: 0, why: "Dọkịta gị maara ahụike gị." },
      { objective: "O2", q: "Ihe e ji esi nri (ingredient) bụ:", options: ["Ngwa kichin", "Otu n'ime nri dị n'usoro isi nri", "Ụlọ ahịa", "App"], answer: 1, why: "Ihe e ji esi nri bụ nri ndị a na-etinye n'usoro isi nri." },
      { objective: "O2", q: "Iji nweta otu ndepụta maka nri atọ, ị ga-ajụ:", options: ["\"Gịnị bụ okwuntughe m?\"", "\"Hichapụ nri ndị ahụ.\"", "\"Mee otu ndepụta ihe m ga-azụ n'ahịa maka nri abalị atọ ndị a.\"", "\"Kpọọ ụlọ ahịa.\""], answer: 2, why: "Ngwa enyemaka ahụ na-ejikọta ihe e ji esi nri ka ọ bụrụ otu ndepụta." },
      { objective: "O2", q: "Ịgwa ngwa enyemaka ahụ ihe i nweelarị n'ụlọ na-enyere ya aka:", options: ["Ibipụta n'agba dị iche iche", "Ịnara gị obere ego", "Ịkpọ ezinụlọ gị", "Iwepụ ihe ndị ahụ na ndepụta"], answer: 3, why: "Ọ na-ewepụ ihe ndị ị na-adịghị mkpa ịzụ." },
      { objective: "O2", q: "A na-eji app Notes:", options: ["Ise foto", "Ịkpọ oku", "Ide na ichekwa obere ndetu na ndepụta", "Ịkpọ egwu"], answer: 2, why: "Notes na-edebe ndepụta n'ekwentị gị." },
      { objective: "O3", q: "Siri na Google Assistant bụ:", options: ["Ngwa enyemaka olu dị n'ime ekwentị", "Ụlọ ahịa nri", "Dọkịta", "Adreesị email"], answer: 0, why: "Ha na-arụ obere ọrụ mgbe ị kwuru okwu." },
      { objective: "O3", q: "Otu ụzọ isi kpọte ngwa enyemaka olu bụ:", options: ["Ịma ekwentị jijiji", "Imeghe igwefoto", "Ịgbanyụ ekwentị", "Ikwu \"Hey Siri\" ma ọ bụ \"Hey Google\""], answer: 3, why: "Okwu nkpọte ma ọ bụ ijide bọtịnụ dị n'akụkụ ma ọ bụ bọtịnụ home na-amalite ya." },
      { objective: "O3", q: "Kedu arịrịọ olu na-atọ taịma?", options: ["\"Taịma.\"", "\"Tọọ taịma maka nkeji 20.\"", "\"Ndewo ekwentị.\"", "\"Isi nri.\""], answer: 1, why: "Ọ na-ekwu ihe a ga-eme na ogologo oge ole." },
      { objective: "O3", q: "Mgbe i jiri olu tọọ ncheta, ị kwesịrị:", options: ["Ịgbanyụ ekwentị", "Ilele ihuenyo ka ị hụ na ọ tọrọ", "Ihichapụ app ahụ", "Ọ dịghị ihe"], answer: 1, why: "Ilele ya na-akwado na a tọrọ ya nke ọma." },
      { objective: "O4", q: "App Calendar na-enyere gị aka:", options: ["Igwu egwuregwu", "Ise foto", "Iziga ego", "Idebe oge nhọpụta ma nweta ncheta"], answer: 3, why: "Ọ na-edebe ihe omume dịka ụbọchị ma nwee ike inye gị ọkwa." },
      { objective: "O4", q: "Mgbe ị na-etinye oge nhọpụta, kedu ihe ị ga-ejupụta?", options: ["Aha, ụbọchị na oge", "Nọmba ụlọ akụ gị", "Okwuntughe gị", "Nọmba Medicare gị"], answer: 0, why: "Aha, ụbọchị na oge bụ ihe kalenda chọrọ." },
      { objective: "O4", q: "Ọkwa otu ụbọchị tupu oge nhọpụta pụtara:", options: ["A kagbuola oge nhọpụta ahụ", "Dọkịta ga-akpọ gị", "Ekwentị gị ga-echetara gị n'ụbọchị tupu ya", "Oge nhọpụta ahụ na-agbanwe"], answer: 2, why: "Ọkwa na-adọ gị aka na ntị tupu oge eruo." },
      { objective: "O4", q: "Ị nwekwara ike itinye oge nhọpụta site na:", options: ["Imeghe igwefoto", "Iziga akwụkwọ ozi n'ọfịs nzipu ozi", "Ịgbanyụ ekwentị", "Ịrịọ ngwa enyemaka olu gị"], answer: 3, why: "Ngwa enyemaka olu nwere ike itinye ihe omume na kalenda." },
      { objective: "O5", q: "Tupu i dee akụkụ akwụkwọ ozi n'ime AI, wepụ:", options: ["Okwu siri ike", "Ụbọchị", "Aha, nọmba akaụntụ na adreesị gị", "Ọ dịghị ihe"], answer: 2, why: "Ozi nzuzo anaghị abanye n'ime AI mgbe ọ bụla." },
      { objective: "O5", q: "Ọ bụrụ na ị na-ese foto akwụkwọ ozi maka AI, ị ga-ebu ụzọ:", options: ["Gbanwuo ọkụ igwefoto (flash)", "Kpuchie ozi nzuzo", "Tinye okwuntughe gị", "Dee nọmba Social Security gị na ya"], answer: 1, why: "Ikpuchi ozi ndị ahụ na-echebe nzuzo gị." },
      { objective: "O5", q: "\"Okwu dị mfe\" (plain language) pụtara:", options: ["Okwu dị mfe, nke kwa ụbọchị", "Asụsụ mba ọzọ", "Okwu iwu", "Koodu kọmputa"], answer: 0, why: "Okwu dị mfe dị mfe ịghọta." },
      { objective: "O5", q: "Iji kwado ihe akwụkwọ ozi enyemaka gọọmentị chọrọ ka i mee, ị ga-:", options: ["Kpọọ nọmba e biri n'akwụkwọ ozi ahụ", "Tụkwasị AI obi", "Tinye ya n'ịntanetị", "Leghara ya anya"], answer: 0, why: "Onye zitere ya bụ ezi isi iyi." },
      { objective: "O2", q: "Ọ bụrụ na otu ngwa anaghị enyere gị aka, ihe ọmụmụ a na-atụ aro:", options: ["Zụta ekwentị ọhụrụ karị", "Hapụ ya ma jiri ihe na-arụ ọrụ, ọbụlagodi akwụkwọ", "Kwụsị ịhazi ihe", "Kesaa okwuntughe gị"], answer: 1, why: "Mee ka ọ dị mfe ma jiri ihe na-enyere gị aka." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      2,
      4,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Echiche nri dabara",
        objective: "O1",
        notYet: "Arịrịọ ahụ edoghị anya ma ọ bụ nri ndị ahụ adabaghị mkpa gị.",
        meets: "Nri abalị atọ dabara ọnụ ọgụgụ mmadụ, oge gị, ihe ị na-achọ na ihe ị ga-ezere.",
        exceeds: "Nri ndị ahụ na-agbasokwa nri ọ bụla dọkịta gị nyere gị."
      },
      {
        name: "Otu ndepụta ihe ị ga-azụ n'ahịa",
        objective: "O2",
        notYet: "Enweghị ndepụta, ma ọ bụ ndepụta dị iche iche maka nri ọ bụla.",
        meets: "Otu ndepụta maka nri abalị atọ niile, nke e chekwara na Notes, e bipụtara ma ọ bụ e dere n'akwụkwọ.",
        exceeds: "E hazịrị ya dịka ngalaba ụlọ ahịa, e wepụkwara ihe ị nweelarị."
      },
      {
        name: "Ncheta ịga ahịa",
        objective: "O3",
        notYet: "Enweghị ncheta, ma ọ bụ o nweghị ụbọchị ma ọ bụ oge.",
        meets: "E tọrọ ncheta nwere ụbọchị na oge, e lelekwara ya n'ihuenyo.",
        exceeds: "E tọrọ ya site n'ịgwa ngwa enyemaka olu okwu."
      },
      {
        name: "Oge nhọpụta na kalenda",
        objective: "O4",
        notYet: "Enweghị oge nhọpụta, ma ọ bụ ụbọchị ma ọ bụ oge ezighi ezi.",
        meets: "Otu ezi oge nhọpụta nwere aha, ụbọchị na oge ziri ezi.",
        exceeds: "O nwekwara ọkwa, dị ka otu ụbọchị tupu ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri ncheta ma ọ bụ ọkwa kalenda maka oge nhọpụta n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na oge nhọpụta ha na-efu belatara ma ọ bụ na nchegbu ha gbasara nri na ịzụ ahịa belatara",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ngwa enyemaka olu (Siri, Google Assistant ma ọ bụ Gemini) na app Calendar",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Akwụkwọ ozi ọmụmaatụ na-enweghị ezi ozi nzuzo, maka omume akwụkwọ ozi",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, nwayọọ nwayọọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Nyere ndị na-amụ ihe aka gbanwuo ngwa enyemaka olu ha na Settings tupu Nkuzi 3; a na-agbanyụkarị ya.",
      "Kewaa ndị na-amụ ihe dịka ụdị ekwentị ha (iPhone ma ọ bụ Android) ka nzọụkwụ dị na ihuenyo dabara.",
      "Jiri akwụkwọ ozi ọmụmaatụ maka omume; arịọla ndị na-amụ ihe mgbe ọ bụla ka ha kesaa ezi nọmba akaụntụ ma ọ bụ nọmba Medicare.",
      "Chetara ndị na-amụ ihe na nri pụrụ iche na-esi n'aka dọkịta ha, ajụjụ gbasara enyemaka gọọmentị na-agakwa na nọmba dị n'akwụkwọ ozi ahụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
