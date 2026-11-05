"use strict";

// Koach Learn course (Igbo translation of shared/ai-productivity-operations.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-productivity-operations-ig",
  lang: "ig",
  translationOf: "ai-productivity-operations",
  category: "Small Business",
  name: "AI maka Ịrụ Ọrụ Nke Ọma na Nhazi Ọrụ Kwa Ụbọchị",
  skills: "Iji AI hazie izu, Ide usoro ọrụ (SOP), Ime ka nzukọ mepụta ọrụ a ga-arụ, Ịhazi usoro oge ndị ọrụ ma ọ bụ ndị ọrụ afọ ofufo, Ịlekọta ngwongwo na ịzụkwu ha, Ide nyocha ọrụ kwa izu",
  outcome: "iji ngwa enyemaka AI n'efu hazie izu, mee ka ọrụ gbagwojuru anya bụrụ usoro doro anya nzọụkwụ n'otu n'otu, nweta ọrụ a ga-arụ site na nzukọ, hazie usoro oge, lekọta ngwongwo, ma nyochaa izu, ka nzukọ ahụ na-aga nke ọma ma were obere oge gị.",
  about: [
    "Nhazi ọrụ (operations) bụ ọrụ kwa ụbọchị na-eme ka nzukọ na-aga: usoro oge, ngwongwo, usoro ọrụ, nzukọ na nsochi. Mgbe ọ gbagwojuru anya, ndị nwe azụmahịa na ndị isi na-anọ ọtụtụ abalị na-emecha ọrụ. AI nwere ike iburu ọtụtụ n'ime ibu ahụ.",
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa na ndị njikwa, ndị isi nzukọ na-adịghị achọ uru (nonprofit) na ndị na-ahazi ndị ọrụ afọ ofufo. Ihe atụ gụnyere ụlọ nri, ebe a na-elekọta ụmụaka, ndị na-edozi ubi na ogige, ụlọ ahịa ngwongwo ejiri mee ihe na ebe a na-enye nri n'efu.",
    "Ị ga-eji ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini na Google Docs na Sheets ma ọ bụ Microsoft 365. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Mee ngwa nhazi ọrụ kwa izu maka ezi nzukọ ma ọ bụ nke omume: atụmatụ izu nke e hazirila dịka mkpa ha si dị, otu usoro ọrụ (SOP) maka ọrụ a na-emegharị, ndetu nzukọ nwere ọrụ a ga-arụ, onye nwe ọrụ ọ bụla na ụbọchị ọ ga-agwụ, usoro oge otu izu maka ndị ọrụ ma ọ bụ ndị ọrụ afọ ofufo, mpempe ngwongwo nwere ọnụ ọgụgụ ịzụkwu, na obere nyocha njedebe izu nwere otu mmezi maka izu na-abịa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa, ndị isi oge ọrụ na ndị njikwa ọfịs, na ndị na-ahazi nzukọ na-adịghị achọ uru, ụka na mmemme obodo, ndị na-ejikọ ọtụtụ ọrụ, ndị ọrụ ma ọ bụ ndị ọrụ afọ ofufo, nzukọ na ngwongwo.",
    startingPoint: "Ha na-eme ka ebe ahụ na-aga site n'ihe ha chetara, ndepụta n'akwụkwọ, ozi ederede na kalenda; ụfọdụ na-eji spreadsheet, ma nwaala ngwa enyemaka AI. Ọ bụ mmadụ ole na ole dere usoro ọrụ, ndetu nzukọ hazịrị ahazi ma ọ bụ ọnụ ọgụgụ ịzụkwu.",
    gap: "Mgbe ihe niile dị naanị n'isi otu onye, ọrụ na-efu, ndị ọhụrụ na-amụ ihe nwayọọ, ngwongwo na-agwụkwa. Ndị na-amụ ihe chọrọ ngwa dị mfe AI na-enyere aka maka atụmatụ, usoro ọrụ, nzukọ, usoro oge, ngwongwo na nyocha kwa izu, ka ọrụ na-aga nke ọma ma were obere oge ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa; kọmputa ka mfe maka spreadsheet",
      "Nzuzo: naanị aha mbụ ma ọ bụ akara; etinyela ozi ahụike, ụgwọ ọnwa ma ọ bụ ozi nzuzo ndị ọrụ na ngwa AI",
      "Iwu: iwu ọrụ gbasara ezumike na oge ọrụ ụmụaka dị iche iche; ndị na-amụ ihe na-elele ngalaba ọrụ (labor department) steeti ha",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge iji mee ngwa ahụ"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ gbagwojuru anya na ezi awa i nwere", action: "iji AI mee atụmatụ izu ụbọchị n'ụbọchị nke e hazirila dịka mkpa ha si dị", standard: "ya na ọrụ atọ kacha mkpa e debere oge ha na kalenda gị" },
    { id: "O2", condition: "Maka ọrụ nzukọ gị na-emegharị", action: "ide usoro ọrụ (SOP) nwere nọmba, ebumnuche, ngwongwo, nzọụkwụ, ndetu nchekwa na ndepụta nlele", standard: "nke mere na onye ọhụrụ nwere ike ịgbaso ya n'akwụsịghị" },
    { id: "O3", condition: "Mgbe obere nzukọ gasịrị", action: "idepụta mkpebi, ọrụ a ga-arụ na ajụjụ ndị fọdụrụ site na ndetu nzukọ", standard: "ya na ọrụ ọ bụla nwere onye nwe ya na ụbọchị ọ ga-agwụ e kwekọrịtara, zipu n'ime otu ụbọchị" },
    { id: "O4", condition: "Mgbe e nyere gị oge ọrụ, oge ndị mmadụ nwere na iwu", action: "ịhazi usoro oge otu izu maka ndị ọrụ ma ọ bụ ndị ọrụ afọ ofufo nke na-ekpuchi oge ọrụ ọ bụla", standard: "na-agbaso oke awa gị, nka a chọrọ na iwu ọrụ" },
    { id: "O5", condition: "Mgbe e nyere gị ngwongwo gị na otu ị si eji ha ọsọ ọsọ", action: "ime mpempe ngwongwo nwere ọnụ ọgụgụ ịzụkwu na usoro mgbakọ (formula) na-egosi REORDER", standard: "ya na ọnụ ọgụgụ ịzụkwu maka ihe ọ bụla" },
    { id: "O6", condition: "Na njedebe izu", action: "ide obere nyocha nke ihe gara nke ọma, ihe a na-emeghị na nsogbu, ma họrọ otu mmezi", standard: "n'ihe dị ka nkeji 15, ya na mmezi ahụ etinyere n'atụmatụ izu na-abịa" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi onwe gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI hazie izu gị",
          minutes: 5,
          goal: "Mee ka ndepụta ọrụ gbagwojuru anya bụrụ atụmatụ izu e hazirila dịka mkpa ha si dị.",
          text: [
            "Ndepụta ọrụ ogologo nke gwakọtara agwakọta na-eme ka ihe niile yie ihe ngwa ngwa. AI nwere ike ịhazi ya ngwa ngwa. Tinye ọrụ niile na mkparịta ụka ahụ, wee rịọ ya ka ọ hazie ya ma mee atụmatụ.",
            "Prompt bara uru: \"Nke a bụ ndepụta ọrụ m maka izu a. Kewaa ya n'ime: ihe m ga-eme n'izu a, ihe m kwesịrị ime, ihe nwere ike ichere, na ihe m nwere ike inyefe onye ọzọ. Wee mee atụmatụ ụbọchị n'ụbọchị. Enwere m ihe dị ka awa 3 kwa ụbọchị maka ọrụ ọfịs, Tuzde na-ejukwa n'ihi ibuga ngwongwo.\"",
            "Gị bụ onye isi atụmatụ ahụ. Bugharịa ihe ọ bụla AI mehiere, debe oge na kalenda gị maka ọrụ atọ kacha mkpa, ma hapụ ohere maka ihe na-atụghị anya."
          ],
          steps: ["Dee ọrụ ọ bụla, nnukwu na obere, n'otu ndepụta.", "Rịọ AI ka o kewaa ya n'ime ihe ị ga-eme, ihe ị kwesịrị ime, ihe nwere ike ichere na ihe ị ga-enyefe.", "Gwa ya ezi awa i nwere na ụbọchị ndị na-ejupụta.", "Dozie atụmatụ ahụ, wee debe oge na kalenda gị maka ọrụ atọ kacha mkpa."],
          words: [["Ịhazi dịka mkpa si dị (prioritize)", "ikpebi ihe kacha mkpa ma bute ya ụzọ."], ["Inyefe (delegate)", "inye onye ọzọ ọrụ ka o mee ya."]],
          slides: [
            { title: "Wụpụta ndepụta ahụ", bullets: ["Ọrụ ọ bụla, nnukwu na obere", "Otu ebe, otu ndepụta"] },
            { title: "Rịọ AI ka o kewaa ya", bullets: ["Ihe ị ga-eme, ihe ị kwesịrị ime", "Ihe nwere ike ichere, ihe ị ga-enyefe", "Gwa ya ezi awa i nwere"] },
            { title: "Atụmatụ ahụ bụ nke gị", bullets: ["Dozie ihe AI mehiere", "Debe oge maka ọrụ atọ kacha mkpa", "Hapụ ohere maka ihe na-atụghị anya"] }
          ],
          tryIt: "Dee ndepụta ọrụ gị niile maka izu a. Rịọ ngwa enyemaka AI ka o kewaa ya ma mee atụmatụ ụbọchị n'ụbọchị site n'iji ezi awa gị, wee dozie ya ma debe ọrụ atọ kacha mkpa na kalenda.",
          youCanNow: "iji AI mee ka ndepụta ọrụ gbagwojuru anya bụrụ atụmatụ izu e hazirila dịka mkpa ha si dị.",
          quickCheck: [
            { objective: "O1", q: "N'atụmatụ izu nke ihe ọmụmụ a, gịnị ka \"inyefe\" pụtara?", options: ["Ọrụ ị na-ebu ụzọ eme", "Ọrụ onye ọzọ nwere ike ime", "Ọrụ ị na-ehichapụ", "Ọrụ a ga-emerịrị taa"], answer: 1, why: "Ọrụ a na-enyefe bụ ndị onye ọzọ nwere ike ime." },
            { objective: "O1", q: "Atụmatụ AI tinyere ọrụ gị kacha ukwuu na Tuzde, ụbọchị ibuga ngwongwo kacha ejupụta. Gịnị ka ị ga-eme?", options: ["Gbasoo ya; AI maara nke kacha mma", "Hichapụ ọrụ ahụ", "Rịọ AI maka ndepụta ọrụ ọhụrụ", "Bugara ọrụ ahụ n'ụbọchị dị jụụ ma debe oge ahụ na kalenda gị"], answer: 3, why: "Gị bụ onye isi atụmatụ ahụ; dozie ihe AI mehiere." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide usoro ọrụ (SOP)",
          minutes: 6,
          goal: "Mee ka otu i si arụ ọrụ bụrụ usoro doro anya, nzọụkwụ n'otu n'otu, onye ọ bụla nwere ike ịgbaso.",
          text: [
            "Usoro ọrụ (standard operating procedure, SOP) bụ nzọụkwụ e dere ede maka ọrụ a na-emegharị: imeghe ụlọ ahịa, ihicha kichin, ịnabata onye ahịa, ịgụ ego dị n'igbe ego. Site na SOP, ndị ọrụ ọhụrụ ma ọ bụ ndị ọrụ afọ ofufo na-amụ ngwa ngwa, a na-arụkwa ihe n'otu ụzọ ahụ oge niile.",
            "Ụzọ kacha ọsọ: kwuo ya ma ọ bụ dee ya otu ị ga-esi kọwaara onye ọhụrụ ya, ọbụlagodi ma ọ gbagwojuru anya. Wee rịọ AI: \"Mee ka nke a bụrụ SOP nwere nọmba, nwere aha, ebumnuche, ngwongwo a chọrọ, nzọụkwụ nwere otu omume n'otu, ndetu nchekwa na ndepụta nlele ikpeazụ. Jiri okwu dị mfe.\"",
            "Nwalee ya: mee ka onye na-arụbeghị ọrụ ahụ mgbe ọ bụla gbasoo ya ka ị na-ele anya jụụ. Oge ọ bụla ọ kwụsịrị ịtụgharị uche, SOP ahụ chọrọ nzọụkwụ doro anya karị. Dee ụbọchị na ya ma kwuo onye nwe ya."
          ],
          steps: ["Kọwaa ọrụ ahụ n'olu ma ọ bụ n'ide, ọ dịghị mkpa ka ọ dị ọcha.", "Rịọ AI ka o mee ya SOP nwere nọmba, ebumnuche, ngwongwo, nzọụkwụ, ndetu nchekwa na ndepụta nlele.", "Lelee nzọụkwụ ọ bụla ma ọ ziri ezi.", "Mee ka onye ọhụrụ nwalee ya.", "Dozie nzọụkwụ na-edoghị anya, wee dee ụbọchị ma kpọọ onye nwe ya."],
          words: [["SOP", "standard operating procedure (usoro ọrụ): nzọụkwụ e dere ede maka ọrụ a na-emegharị."], ["Ndepụta nlele (checklist)", "ndepụta ihe ị na-akara ka ọ dịghị ihe efuo."]],
          slides: [
            { title: "Ihe mere SOP ji dị mkpa", bullets: ["Ndị ọhụrụ na-amụ ngwa ngwa", "A na-arụ ya n'otu ụzọ oge niile"] },
            { title: "Site na ndetu gbagwojuru anya ruo SOP", bullets: ["Kọwaa ya dị ka ị na-akọwara onye ọhụrụ", "AI na-ahazi: ebumnuche, ngwongwo, nzọụkwụ", "Tinye ndetu nchekwa na ndepụta nlele"] },
            { title: "Nwalee ya", bullets: ["Onye ọhụrụ na-agbaso ya", "Nkwụsị ọ bụla = nzọụkwụ a ga-eme ka o doo anya", "Dee ụbọchị ma kpọọ onye nwe ya"] }
          ],
          tryIt: "Họrọ otu ọrụ ị na-arụ kwa izu. Kọwaa ya n'okwu nke gị, mee ka AI mee ya SOP, lelee ya, ma rịọ mmadụ ka ọ nwaa ịgbaso ya.",
          youCanNow: "ide ma nwalee usoro ọrụ doro anya site n'enyemaka AI.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka SOP pụtara?", options: ["Standard operating procedure (usoro ọrụ)", "Atụmatụ oge ọrụ karịrị akarị", "Usoro ịzụ ngwongwo", "Usoro oge ndị mmadụ"], answer: 0, why: "SOP bụ standard operating procedure: nzọụkwụ e dere ede maka ọrụ a na-emegharị." },
            { objective: "O2", q: "SOP AI mere maka imechi ụlọ ahịa na-ekwu \"kpọchie\" mana ọ hapụrụ ọnụ ụzọ azụ. Gịnị ka ị ga-eme?", options: ["Jiri ya otu ahụ", "Tụfuo SOP ahụ", "Lelee nzọụkwụ ọ bụla ma ọ ziri ezi ma tinye nzọụkwụ fọdụrụ", "Hapụ ndị ọrụ ọhụrụ ka ha chọpụta ya"], answer: 2, why: "Lelee nzọụkwụ ọ bụla ma ọ ziri ezi tupu onye ọ bụla ejiri SOP ahụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime ka nzukọ mepụta ọrụ a ga-arụ",
          minutes: 5,
          goal: "Mee obere nzukọ ma jiri AI mee ka ndetu bụrụ mkpebi na ọrụ a ga-arụ.",
          text: [
            "Ọtụtụ nzukọ na-agwụ ebe onye ọ bụla na-ekwe n'isi, ma ọ dịghị ihe na-eme. Ihe ngwọta dị mfe: nzukọ ọ bụla na-agwụ na ọrụ a ga-arụ, nke ọ bụla nwere onye nwe ya na ụbọchị ọ ga-agwụ.",
            "Jiri usoro nzukọ (agenda) nwere oge. Dee ndetu ngwa ngwa, ma ọ bụ jiri ndetu AI dị n'ime ngwa nzukọ ma ọ bụrụ na nzukọ gị kwere ya, a gwakwala onye ọ bụla. Wee tinye ndetu ahụ na AI: \"Site na ndetu ndị a, depụta mkpebi e mere, ọrụ a ga-arụ nwere onye nwe ya na ụbọchị ọ ga-agwụ, na ajụjụ ndị fọdụrụ.\"",
            "Lelee ndepụta ahụ tupu i zipu ya, n'ihi na AI nwere ike ịkọ onye nwe ọrụ ma ọ bụ ụbọchị a na-ekwekọrịtaghị. Wepụ ihe ọ bụla nzuzo, dị ka ozi ahụike ma ọ bụ ụgwọ ọnwa ndị ọrụ, tupu i kesaa ya. Zipu ya n'ime otu ụbọchị."
          ],
          steps: ["Dee obere usoro nzukọ nwere oge.", "Dee ndetu ma ọ bụ jiri ndetu AI a kwadoro, a gwala onye ọ bụla.", "Rịọ AI ka o wepụta mkpebi, ọrụ a ga-arụ na ajụjụ ndị fọdụrụ.", "Lelee ndị nwe ọrụ na ụbọchị; wepụ ozi nzuzo.", "Zipu ndepụta ọrụ ahụ n'ime otu ụbọchị."],
          words: [["Usoro nzukọ (agenda)", "ndepụta isiokwu nzukọ, n'usoro."], ["Ọrụ a ga-arụ (action item)", "ọrụ si na nzukọ nwere onye nwe ya na ụbọchị ọ ga-agwụ."]],
          slides: [
            { title: "Mechie na ọrụ", bullets: ["Ọrụ ọ bụla nwere onye nwe ya", "Ọrụ ọ bụla nwere ụbọchị ọ ga-agwụ"] },
            { title: "Ka AI wepụta ya", bullets: ["Mkpebi e mere", "Ọrụ a ga-arụ", "Ajụjụ ndị fọdụrụ"] },
            { title: "Tupu i zipu", bullets: ["Lelee ndị nwe ọrụ na ụbọchị", "Wepụ ozi nzuzo", "Zipu n'ime otu ụbọchị"] }
          ],
          tryIt: "Dee ndetu na nzukọ gị na-esote, ma ọ bụ dee ndetu nke nzukọ gara aga na nso nso a. Jiri AI wepụta mkpebi na ọrụ a ga-arụ nwere ndị nwe ha na ụbọchị, lelee ha, ma dee ozi ị ga-ezipu.",
          youCanNow: "ime ka ndetu nzukọ bụrụ ọrụ a ga-arụ e lelere, nwere ndị nwe ha na ụbọchị ha ga-agwụ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-eme ka nzukọ gwụ na ezi nsochi?", options: ["Mkparịta ụka ogologo", "Onye ọ bụla na-ekwe n'isi", "Nzukọ ọzọ n'echi ya", "Ọrụ a ga-arụ, nke ọ bụla nwere onye nwe ya na ụbọchị ọ ga-agwụ"], answer: 3, why: "Ọrụ nwere ndị nwe ha na ụbọchị na-eme ka okwu bụrụ ọrụ." },
            { objective: "O3", q: "Ndetu nzukọ gị kwuru maka ezumike ọrịa otu onye ọrụ. Gịnị ka ị ga-eme tupu i kesaa nchịkọta AI?", options: ["Kesaa ya otu o si dị", "Wepụ ozi ahụike nzuzo ahụ", "Tinyekwuo ozi", "Tinye ya n'ebe a na-akwụnye ọkwa"], answer: 1, why: "Wepụ ozi nzuzo, dị ka ahụike ma ọ bụ ụgwọ ọnwa, tupu i kesaa ndetu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi onwe gị",
        questions: [
          { objective: "O1", q: "Mgbe ị na-arịọ AI ka o hazie izu gị, gịnị ka ị ga-agwa ya?", options: ["Okwuntughe ụlọ akụ gị", "Ọ dịghị ihe; ọ ga-akọ ya", "Ezi awa i nwere na ụbọchị ndị na-ejupụta", "Adreesị ụlọ ndị ọrụ gị"], answer: 2, why: "Ezi oke ndị a na-eme ka atụmatụ ahụ kwe omume." },
          { objective: "O2", q: "Gịnị bụ SOP?", options: ["Nzọụkwụ e dere ede maka ọrụ a na-emegharị", "Ụdị ụtụ isi ụgwọ ọnwa", "Ozi na soshal midia", "Akụkọ ahịa"], answer: 0, why: "Usoro ọrụ na-eme ka a nwee ike imegharị ọrụ n'otu ụzọ." },
          { objective: "O2", q: "Onye ọrụ afọ ofufo ọhụrụ kwụsịrị na nzọụkwụ 4 nke SOP gị. Gịnị ka nke ahụ gwara gị?", options: ["Onye ọrụ afọ ofufo ahụ amaghị ihe", "SOP anaghị arụ ọrụ mgbe ọ bụla", "Hichapụ SOP ahụ", "Nzọụkwụ 4 chọrọ idokwu anya"], answer: 3, why: "Nkwụsị na-egosi ebe nzọụkwụ edoghị anya." },
          { objective: "O3", q: "Ọrụ ọ bụla a ga-arụ kwesịrị inwe:", options: ["Akụkọ ogologo", "Onye nwe ya na ụbọchị ọ ga-agwụ", "Koodu nzuzo", "Ọ dịghị nkọwa"], answer: 1, why: "Ndị nwe ọrụ na ụbọchị na-eme ka ọrụ mee." },
          { objective: "O3", q: "AI dere \"Maria ga-emecha mmefu ego (budget) tupu Fraịde\" mana ọ dịghị onye kwekọrịtara nke ahụ. Gịnị ka ị ga-eme?", options: ["Zipu ya otu ahụ", "Dozie ya tupu i zipu", "Nye Maria ya n'ajụghị ya", "Hichapụ ndetu niile"], answer: 1, why: "AI nwere ike ịkọ; lelee ndị nwe ọrụ na ụbọchị." }
        ]
      }
    },
    {
      name: "Isi 2: Ime ka ọrụ na-aga nke ọma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi usoro oge ndị ọrụ ma ọ bụ ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Jiri AI na spreadsheet hazie usoro oge otu izu ziri ezi nke na-ekpuchi oge ọrụ ọ bụla.",
          text: [
            "Ịhazi usoro oge dị ka egwuregwu nchọpụta: onye nwere oge, oge ọrụ nke chọrọ mmadụ ole, na onye nwere nka ole. AI nwere ike ide nke mbụ n'ime sekọnd ole na ole.",
            "Nye ya iwu n'enweghị ozi nzuzo: \"Mee tebụl usoro oge otu izu. Oge ọrụ: Mọnde-Fraịde 8-12 na 12-4, mmadụ abụọ n'otu. Satọde 9-1, mmadụ atọ. Oge ha nwere: Onye A naanị ụbọchị ọrụ, Onye B ọ bụghị Mọnde... Onye ọ bụla agaghị akarị awa 20. Opekata mpe otu onye nwere ọzụzụ ijikwa nri (food-handler) n'oge ọrụ ọ bụla.\"",
            "Lelee ihe AI dere ma o kwekọrọ n'iwu gị na iwu ọrụ ọ bụla metụtara gị, dị ka ezumike na oge ọrụ ụmụaka; ngalaba ọrụ steeti gị na-edepụta ha. Tinye usoro oge ikpeazụ na spreadsheet a na-ekerịta ka onye ọ bụla hụ mgbanwe."
          ],
          steps: ["Depụta oge ọrụ na mmadụ ole nke ọ bụla chọrọ.", "Depụta oge onye ọ bụla nwere site n'iji aha mbụ ma ọ bụ akara.", "Depụta iwu: oke awa, nka a chọrọ.", "Rịọ AI maka tebụl usoro oge.", "Lelee iwu na iwu ọrụ, wee kesaa ya na spreadsheet."],
          words: [["Oge ọrụ (shift)", "oge ọrụ a kara aka."], ["Oge mmadụ nwere (availability)", "oge mmadụ nwere ike ịrụ ọrụ ma ọ bụ ịrụ ọrụ afọ ofufo."]],
          slides: [
            { title: "Usoro oge dị ka egwuregwu nchọpụta", bullets: ["Oge ndị mmadụ nwere, oge ọrụ, nka"] },
            { title: "Nye AI iwu", bullets: ["Oge ọrụ na mmadụ ole a chọrọ", "Oge mmadụ nwere site n'aha mbụ ma ọ bụ akara", "Oke awa na nka a chọrọ"] },
            { title: "Lelee ma kesaa", bullets: ["Hụ na o kwekọrọ n'iwu gị", "Lelee iwu ọrụ steeti: ezumike, ụmụaka", "Kesaa ya na spreadsheet"] }
          ],
          tryIt: "Dee oge ọrụ, oge ndị mmadụ nwere na iwu maka ezi otu ma ọ bụ otu omume nwere opekata mpe mmadụ anọ. Mee ka AI dee usoro oge otu izu, lelee iwu ọ bụla, ma dozie nsogbu ọ bụla.",
          youCanNow: "ịhazi ma lelee usoro oge izu ziri ezi site n'enyemaka AI.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ị ga-enye AI mgbe ị na-arịọ maka usoro oge?", options: ["Adreesị ụlọ na ekwentị onye ọ bụla", "Naanị okwu \"usoro oge\"", "Oge ọrụ, aha mbụ ma ọ bụ akara, oge ndị mmadụ nwere na iwu", "Ụgwọ ndị ọrụ"], answer: 2, why: "AI chọrọ oge ọrụ, oge ndị mmadụ nwere na iwu, mana ọ bụghị ozi nzuzo." },
            { objective: "O4", q: "Usoro oge AI hapụrụ Satọde n'enweghị onye nwere ọzụzụ ijikwa nri. Gịnị ka ị ga-eme?", options: ["Gbanwee ya ka oge ọrụ ọ bụla nwee onye a zụrụ azụ", "Hapụ ya; ọ bụ naanị otu ụbọchị", "Kagbuo Satọde", "Gwa ndị ọrụ a na-azụghị ka ha kọọ"], answer: 0, why: "Lelee ihe AI dere megide iwu ọ bụla, gụnyere nka a chọrọ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlekọta ngwongwo na ịzụkwu ha",
          minutes: 5,
          goal: "Mee mpempe ngwongwo nwere ọnụ ọgụgụ ịzụkwu ka ihe ghara ịgwụ gị.",
          text: [
            "Ịgwụ iko, uwe aka (gloves), ntụ ọka ma ọ bụ akwa nwa (diapers) na-akwụsị ọrụ. Mpempe ngwongwo dị mfe na-egbochi ya. Kọlụm: ihe, ọtụtụ (unit), ole dị n'aka, ole a na-eji kwa izu, ọnụ ọgụgụ ịzụkwu, ole a ga-azụ na onye na-ere ya.",
            "Ọnụ ọgụgụ ịzụkwu bụ ole na-agwa gị ka ị zụọ ugbu a. Iwu dị mfe: ole a na-eji kwa izu mụbaa na izu ole iziga ngwongwo na-ewe, gbakwunye ntakịrị. Ọ bụrụ na ị na-eji igbe 10 kwa izu, iziga na-ewekwa izu 1, zụkwuo mgbe i nwere ihe dị ka igbe 12.",
            "Rịọ AI maka formula na-egosi ihe a ga-azụkwu: \"In Google Sheets, write a formula that shows REORDER when on-hand is at or below the reorder point.\" (N'asụsụ gị: dee formula na-egosi REORDER mgbe ole dị n'aka ruru ma ọ bụ dị n'okpuru ọnụ ọgụgụ ịzụkwu.) Gụọ ngwongwo n'otu ụbọchị ahụ kwa izu ma melite mpempe ahụ."
          ],
          steps: ["Depụta ihe nwere ọtụtụ ha na onye na-ere ha.", "Kọọ ole a na-eji kwa izu maka nke ọ bụla.", "Debe ọnụ ọgụgụ ịzụkwu: ole a na-eji kwa izu x izu iziga + ntakịrị.", "Rịọ AI maka formula na-egosi REORDER.", "Gụọ kwa izu n'otu ụbọchị ahụ."],
          words: [["Ngwongwo dị n'aka (inventory)", "ngwongwo ma ọ bụ ngwaahịa i nwere n'aka."], ["Ọnụ ọgụgụ ịzụkwu (reorder point)", "ole na-agwa gị na oge eruola ịzụkwu."]],
          slides: [
            { title: "Kọlụm mpempe ngwongwo", bullets: ["Ihe, ọtụtụ, ole dị n'aka", "Ole a na-eji kwa izu, ọnụ ọgụgụ ịzụkwu", "Ole a ga-azụ, onye na-ere ya"] },
            { title: "Ọnụ ọgụgụ ịzụkwu", bullets: ["Ole kwa izu x izu iziga + ntakịrị", "10 kwa izu, iziga izu 1: ihe dị ka 12"] },
            { title: "Ka mpempe ahụ dọọ gị aka na ntị", bullets: ["Formula na-egosi REORDER", "Gụọ n'otu ụbọchị ahụ kwa izu"] }
          ],
          tryIt: "Mee mpempe ngwongwo nwere opekata mpe ihe asatọ, debe ọnụ ọgụgụ ịzụkwu, ma tinye formula AI dere na-egosi ihe a ga-azụkwu.",
          youCanNow: "ilekọta ngwongwo site n'ọnụ ọgụgụ ịzụkwu na akara ịzụkwu na-apụta n'onwe ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ ọnụ ọgụgụ ịzụkwu?", options: ["Adreesị onye na-ere ya", "Ole dị n'aka na-agwa gị ka ị zụọ ugbu a", "Ọnụ ahịa ihe", "Ụbọchị ụlọ ahịa na-emeghe"], answer: 1, why: "Ọnụ ọgụgụ ịzụkwu bụ ole na-agwa gị ka ị zụkwuo." },
            { objective: "O5", q: "Ị na-eji ngwugwu uwe aka 20 kwa izu, iziga na-ewekwa izu 1. Ihe dị ka mgbe ole ka ị ga-azụkwu?", options: ["Mgbe i nwere ngwugwu 0", "Mgbe i nwere ngwugwu 2", "Mgbe i nwere ngwugwu 100", "Mgbe i nwere ihe dị ka ngwugwu 22 ruo 24"], answer: 3, why: "Ole kwa izu mụbaa na izu iziga, gbakwunye ntakịrị, na-enye ihe dị ka ngwugwu 22 ruo 24." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inyocha izu ma meziwanye",
          minutes: 5,
          goal: "Dee obere nyocha njedebe izu ma họrọ otu mmezi.",
          text: [
            "Nyocha nkeji 15 na njedebe izu ọ bụla na-egbochi obere nsogbu ito. Lee ihe e mechara, ihe a na-emeghị, ihe gara n'ụzọ na-ezighi ezi, na ihe a ga-agbanwe.",
            "Nye AI atụmatụ gị, ọrụ ị rụchara na ndetu ole na ole, wee jụọ: \"Dee obere nyocha ọrụ kwa izu: ihe gara nke ọma, ihe a na-emeghị, nsogbu, na otu mmezi maka izu na-abịa.\" Dezie ya ka o kwuo eziokwu ma bụrụ ihe ziri ezi nye otu gị.",
            "Họrọ naanị otu mmezi kwa izu, dị ka SOP ọhụrụ, mmezi usoro oge ma ọ bụ mgbanwe n'ịzụkwu. Obere mmezi kwa izu na-agbakọta mee ka ọrụ na-aga nke ọma karịa n'ime ọnwa ole na ole."
          ],
          steps: ["Chịkọta atụmatụ izu gị, ọrụ a ga-arụ na ndetu.", "Rịọ AI maka obere nyocha: ihe gara nke ọma, ihe a na-emeghị, nsogbu, otu mmezi.", "Dezie ya ka o kwuo eziokwu ma zie ezi.", "Họrọ otu mmezi ma tinye ya n'atụmatụ izu na-abịa."],
          words: [["Nyocha (review)", "ile anya azụ iji mụta ihe rụrụ ọrụ na ihe na-arụghị."], ["Mmezi na-adịgide (continuous improvement)", "ime obere mgbanwe mgbe niile ka ihe ka mma ka oge na-aga."]],
          slides: [
            { title: "Nkeji 15 kwa izu", bullets: ["Ihe e mechara", "Ihe a na-emeghị", "Ihe gara n'ụzọ na-ezighi ezi"] },
            { title: "AI na-ede nyocha mbụ", bullets: ["Ihe gara nke ọma, ihe a na-emeghị, nsogbu", "Otu mmezi", "Ị na-edezi ya ka o kwuo eziokwu ma zie ezi"] },
            { title: "Otu mmezi kwa izu", bullets: ["SOP ọhụrụ, mmezi usoro oge ma ọ bụ mgbanwe ịzụkwu", "Obere mmezi na-agbakọta"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri enyemaka AI dee nyocha njedebe izu gị ma họrọ otu mmezi. Ya na atụmatụ izu gị, SOP, ọrụ a ga-arụ, usoro oge na mpempe ngwongwo, nke a na-emecha ngwa nhazi ọrụ kwa izu gị.",
          youCanNow: "iji enyemaka AI hazie ọrụ otu izu ma na-emeziwanye ya.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka nyocha njedebe izu na-ekpuchi?", options: ["Ihe gara nke ọma, ihe a na-emeghị, nsogbu na otu mmezi", "Naanị ihe gara n'ụzọ na-ezighi ezi", "Mperi onye ọrụ ọ bụla", "Mmefu ego afọ na-abịa"], answer: 0, why: "Obere nyocha na-ekpuchi ihe gara nke ọma, ihe a na-emeghị, nsogbu na otu mmezi." },
            { objective: "O6", q: "Nyocha AI tara otu onye ọrụ afọ ofufo ụta maka ngwongwo bịara n'oge na-adịghị mma, mana ọ bụ mperi onye na-ere ya. Gịnị ka ị ga-eme?", options: ["Zipu ya otu e dere ya", "Họrọ mmezi ise kama", "Dezie ya ka o kwuo eziokwu ma zie ezi nye otu ahụ", "Hapụ nyocha n'izu a"], answer: 2, why: "Dezie ihe AI dere ka o kwuo eziokwu ma zie ezi tupu i kesaa ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime ka ọrụ na-aga nke ọma",
        questions: [
          { objective: "O4", q: "Mgbe ị na-enye AI ozi usoro oge, gịnị ka ị ga-eji maka ndị mmadụ?", options: ["Nọmba Social Security zuru ezu", "Adreesị ụlọ", "Akụkọ ahụike", "Aha mbụ ma ọ bụ akara, enweghị ozi nzuzo"], answer: 3, why: "Usoro oge chọrọ oge ndị mmadụ nwere, ọ bụghị ozi nzuzo." },
          { objective: "O4", q: "Ebee ka ị nwere ike ilele iwu gbasara ezumike na oge ọrụ ụmụaka?", options: ["Ngalaba ọrụ steeti gị", "Blọọgụ ọ bụla", "Naanị mkparịta ụka AI", "Onye asọmpi gị"], answer: 0, why: "Iwu ọrụ si n'ụlọ ọrụ gọọmentị na-ahụ maka ọrụ." },
          { objective: "O5", q: "Ị na-eji igbe 10 kwa izu, iziga na-ewekwa izu 1. Ọnụ ọgụgụ ịzụkwu nwere uche bụ ihe dị ka:", options: ["Igbe 0", "Igbe 1", "Igbe 12", "Igbe 100"], answer: 2, why: "Ole kwa izu x izu iziga gbakwunye ntakịrị." },
          { objective: "O6", q: "Ogologo oge ole ka nyocha kwa izu na-ewe n'ihe ọmụmụ a?", options: ["Otu ụbọchị zuru ezu", "Awa atọ", "Ọ dịghị oge; hapụ ya", "Ihe dị ka nkeji 15"], answer: 3, why: "Obere nyocha kwa izu na-eme ka nsogbu dị obere." },
          { objective: "O6", q: "Mmezi ole ka ị ga-ahọrọ kwa izu?", options: ["Iri abụọ", "Ọ dịghị", "Otu", "Ihe niile n'otu oge"], answer: 2, why: "Otu mmezi kwa izu na-ekwe omume ma na-agbakọta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịrụ Ọrụ Nke Ọma na Nhazi Ọrụ Kwa Ụbọchị",
    questions: [
      { objective: "O1", q: "Nhazi ọrụ (operations) pụtara:", options: ["Naanị ịwa ahụ n'ụlọ ọgwụ", "Ọrụ kwa ụbọchị na-eme ka nzukọ na-aga", "Naanị ire ahịa", "Naanị mgbasa ozi"], answer: 1, why: "Usoro oge, ngwongwo, usoro ọrụ na nsochi." },
      { objective: "O1", q: "Mgbe AI kewara ndepụta ọrụ gị, kedu otu bụ \"inyefe\"?", options: ["Ọrụ onye ọzọ nwere ike ime", "Ọrụ ị ga-eme taa", "Ọrụ a ga-ehichapụ", "Ọrụ AI ga-eme naanị ya"], answer: 0, why: "Inyefe pụtara inye onye ọzọ ọrụ (delegate)." },
      { objective: "O1", q: "Onye nwere okwu ikpeazụ n'atụmatụ izu gị?", options: ["AI", "Ọ dịghị onye", "Gị", "Onye na-ere gị ngwongwo"], answer: 2, why: "Gị na-edozi atụmatụ ahụ, ọ bụkwa nke gị." },
      { objective: "O2", q: "SOP na-enyere aka n'ihi na:", options: ["A na-arụ ọrụ n'otu ụzọ, ndị ọhụrụ na-amụkwa ngwa ngwa", "Ọ na-anọchi ndị ọrụ niile", "A chọrọ ya maka email ọ bụla", "Ọ na-eme ka ọrụ dị nwayọọ"], answer: 0, why: "Nke ahụ bụ ebumnuche SOP." },
      { objective: "O2", q: "Ụzọ kacha ọsọ isi malite SOP bụ:", options: ["Idetuo SOP ụlọ ọrụ ọzọ", "Ichere onye ndụmọdụ", "Ịghara ide ya", "Ịkọwa ọrụ ahụ n'okwu nke gị, wee mee ka AI hazie ya"], answer: 3, why: "Ihe ị maara gbakwunyere nhazi AI dị ọsọ." },
      { objective: "O2", q: "Ezigbo SOP nwere:", options: ["Naanị aha", "Ebumnuche, ngwongwo, nzọụkwụ nwere nọmba, ndetu nchekwa na ndepụta nlele", "Ụgwọ ọnwa ndị ọrụ", "Nọmba ekwentị ndị ahịa"], answer: 1, why: "Akụkụ ndị ahụ na-eme ka o zuo oke." },
      { objective: "O2", q: "Kedu ka ị ga-esi nwalee SOP?", options: ["Gụọ ya otu ugboro n'onwe gị", "Mee ka onye ọhụrụ gbasoo ya ka ị na-ele anya", "Jụọ AI ma ọ dị mma", "Anwalela ya"], answer: 1, why: "Onye ọhụrụ na-egosi nzọụkwụ na-edoghị anya." },
      { objective: "O3", q: "Usoro nzukọ (agenda) bụ:", options: ["Ndepụta nri mmiri nzukọ", "Fọm ụgwọ ọnwa", "Ụdị SOP", "Ndepụta isiokwu nzukọ, n'usoro"], answer: 3, why: "Usoro nzukọ na-eme ka nzukọ lekwasị anya n'ihe dị mkpa." },
      { objective: "O3", q: "Tupu i jiri ndetu nzukọ AI, ị kwesịrị:", options: ["Ịhụ na e kwere ya, a gwakwala onye ọ bụla", "Ịdekọ na nzuzo", "Ikesa ụgwọ ọnwa ndị ọrụ", "Ịhapụ usoro nzukọ"], answer: 0, why: "Ndị mmadụ kwesịrị ịma mgbe a na-edekọ ma ọ bụ na-ede nzukọ." },
      { objective: "O3", q: "Tupu i zipu ndetu nzukọ AI mere, wepụ:", options: ["Ọrụ niile a ga-arụ", "Ụbọchị nzukọ", "Ozi nzuzo dị ka ahụike ma ọ bụ ụgwọ ọnwa ndị ọrụ", "Mkpebi"], answer: 2, why: "A gaghị ekesa ozi nzuzo n'ebe niile." },
      { objective: "O3", q: "A ga-ezipu ọrụ a ga-arụ:", options: ["Otu ọnwa ka e mesịrị", "Ọ dịghị mgbe", "Naanị ma ọ bụrụ na a jụrụ", "N'ime otu ụbọchị"], answer: 3, why: "Nsochi ngwa ngwa na-eme ka ọrụ na-aga n'ihu." },
      { objective: "O4", q: "Oge ọrụ (shift) bụ:", options: ["Naanị otu igodo na kiiboodu", "Ụdị ngwongwo", "Oge ọrụ a kara aka", "Nzukọ"], answer: 2, why: "E ji oge ọrụ ewu usoro oge." },
      { objective: "O4", q: "Usoro oge AI dere nyere otu onye awa 30, mana oke gị bụ 20. Ị kwesịrị:", options: ["Ịhapụ ya otu ahụ", "Idozi usoro oge ahụ ka ọ gbasoo iwu gị", "Ileghara iwu ahụ anya", "Iwepụ onye ahụ"], answer: 1, why: "Lelee ihe AI dere mgbe niile megide iwu gị." },
      { objective: "O4", q: "Gịnị mere a ga-eji kesaa usoro oge ikpeazụ na spreadsheet?", options: ["Onye ọ bụla na-ahụ mgbanwe ọhụrụ", "Iji zoo ya", "Iwu chọrọ spreadsheet", "Ka ọ dịghị onye ga-ahụ ya"], answer: 0, why: "Spreadsheet a na-ekerịta na-eme ka onye ọ bụla mara ihe ọhụrụ." },
      { objective: "O5", q: "Ngwongwo dị n'aka (inventory) pụtara:", options: ["Ndepụta ndị ọrụ", "Ndetu nzukọ", "Ngwongwo ma ọ bụ ngwaahịa dị n'aka", "Echiche ndị ahịa"], answer: 2, why: "Ngwongwo dị n'aka bụ ihe i nwere n'ụlọ ahịa." },
      { objective: "O5", q: "Ọnụ ọgụgụ ịzụkwu na-agwa gị:", options: ["Mgbe oge ruru ịzụkwu", "Ọnụ ahịa ihe", "Onye na-ere ya", "Otu esi esi ya"], answer: 0, why: "Ọ na-akpali ịzụ ọhụrụ." },
      { objective: "O5", q: "Formula na-egosi REORDER na-enyere aka site na:", options: ["Iji kaadị gị zụọ ihe n'onwe ya", "Ihichapụ mpempe ahụ", "Ịgbanwe ndị na-ere ya", "Igosi ihe dị ala n'onwe ya"], answer: 3, why: "Mpempe ahụ na-adọ gị aka na ntị mgbe ngwongwo dị ala." },
      { objective: "O5", q: "Ugboro ole ka ị ga-agụ ngwongwo?", options: ["Otu ugboro n'afọ", "Kwa izu n'otu ụbọchị ahụ", "Ọ dịghị mgbe", "Naanị mgbe ọ gwụrụ"], answer: 1, why: "Ịgụ mgbe niile na-eme ka mpempe ahụ zie ezi." },
      { objective: "O6", q: "Nyocha kwa izu na-ekpuchi:", options: ["Naanị ihe gara nke ọma", "Ihe gara nke ọma, ihe a na-emeghị, nsogbu na otu mmezi", "Naanị ịta ụta", "Ọ dịghị ihe e dere ede"], answer: 1, why: "Nyocha kwesịrị ekwesị na-eduga na mmezi." },
      { objective: "O6", q: "Ime obere mgbanwe mgbe niile ka ihe ka mma ka a na-akpọ:", options: ["Inyefe ọrụ", "Ngwongwo dị n'aka", "Ịhazi usoro oge", "Mmezi na-adịgide"], answer: 3, why: "Obere mmezi mgbe niile na-agbakọta." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      2,
      3,
      6,
      8,
      9,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Atụmatụ izu",
        objective: "O1",
        notYet: "E kewaghị ọrụ, ma ọ bụ atụmatụ ahụ eleghara ezi awa dị anya.",
        meets: "E kewara ọrụ n'ime ihe ị ga-eme, ihe ị kwesịrị ime, ihe nwere ike ichere na ihe ị ga-enyefe, ya na atụmatụ ụbọchị n'ụbọchị dabara n'ezi awa.",
        exceeds: "E debere oge ọrụ atọ kacha mkpa na kalenda, ya na ohere fọdụrụ maka ihe na-atụghị anya."
      },
      {
        name: "Usoro ọrụ (SOP)",
        objective: "O2",
        notYet: "Nzọụkwụ edoghị anya ma ọ bụ adịghị n'usoro, ma ọ bụ enweghị ndepụta nlele.",
        meets: "Aha, ebumnuche, ngwongwo, nzọụkwụ nwere nọmba na otu omume n'otu, ndetu nchekwa, ndepụta nlele, ụbọchị na onye nwe ya.",
        exceeds: "Onye ọhụrụ nwalere ya, e dozikwara nzọụkwụ na-edoghị anya."
      },
      {
        name: "Ọrụ a ga-arụ site na nzukọ",
        objective: "O3",
        notYet: "Ọrụ a ga-arụ enweghị onye nwe ha ma ọ bụ ụbọchị ha ga-agwụ.",
        meets: "Mkpebi, ọrụ a ga-arụ nwere ndị nwe ha na ụbọchị e kwekọrịtara, na ajụjụ ndị fọdụrụ, e wepụrụ ozi nzuzo.",
        exceeds: "E zipụrụ ya n'ime otu ụbọchị, e lelekwara ma dozie ndị nwe ọrụ ma ọ bụ ụbọchị AI kọrọ."
      },
      {
        name: "Usoro oge",
        objective: "O4",
        notYet: "Otu oge ọrụ enweghị onye, ma ọ bụ e mebiri otu iwu.",
        meets: "Oge ọrụ ọ bụla nwere onye, e gbasoro oke awa na nka, e kesakwara ya na spreadsheet.",
        exceeds: "Na-ekwu iwu ọrụ e lelere na ngalaba ọrụ steeti."
      },
      {
        name: "Mpempe ngwongwo",
        objective: "O5",
        notYet: "Enweghị ọnụ ọgụgụ ịzụkwu.",
        meets: "Ihe ọ bụla nwere ole a na-eji kwa izu, ọnụ ọgụgụ ịzụkwu na formula na-egosi REORDER.",
        exceeds: "Gụnyere onye na-ere ya na ụbọchị a kara aka kwa izu iji gụọ."
      },
      {
        name: "Nyocha izu",
        objective: "O6",
        notYet: "Enweghị nyocha, ma ọ bụ a họrọghị mmezi.",
        meets: "Obere nyocha ziri ezi nke ihe gara nke ọma, ihe a na-emeghị na nsogbu, ya na otu mmezi.",
        exceeds: "Mmezi ahụ adịlarị n'atụmatụ izu na-abịa."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Nzukọ nwere opekata mpe SOP atọ e dere ma na-eji n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ngwongwo dị mkpa na-agwụchaghị ugboro ugboro n'ime ụbọchị 60 ka ihe ọmụmụ ahụ gasịrị",
      "Ndị nwe na ndị njikwa na-akọ awa ole ha chekwara kwa izu n'atụmatụ na nhazi"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Kalenda na spreadsheet (Google Sheets ma ọ bụ Excel)",
      "Ezi ndepụta ọrụ, ọrụ a na-emegharị, na ndepụta ngwongwo site na nzukọ onye na-amụ ihe",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere oge iji mee ngwa ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; meenụ formula ịzụkwu na ihuenyo a na-ekerịta.",
      "Mee ka ndị na-amụ ihe gbanwere SOP ha ma gbasoo nzọụkwụ ibe ha iji chọta ndị na-edoghị anya.",
      "Chetara ndị na-amụ ihe ka ha jiri naanị aha mbụ ma ọ bụ akara, ha etinyela ozi ahụike ma ọ bụ ụgwọ ọnwa ndị ọrụ na AI mgbe ọ bụla.",
      "Zipu ndị na-amụ ihe na ngalaba ọrụ steeti ha maka iwu ezumike na oge ọrụ ụmụaka; enyela ndụmọdụ iwu.",
      "Jiri rubric tụọ akara ngwa ikpeazụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
