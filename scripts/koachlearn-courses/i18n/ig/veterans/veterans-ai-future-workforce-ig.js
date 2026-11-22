"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-ai-future-workforce.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-future-workforce-ig",
  lang: "ig",
  translationOf: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Mmalite AI na Ọrụ n'Ọdịnihu",
  skills: "Ịkọwa ihe AI bụ, Imeghe ngwa enyemaka AI n'efu, Ide prompt doro anya, Ịtụgharị ọrụ agha ka ọ bụrụ okwu ndị nkịtị, Ịlele azịza AI, Ichebe ozi nzuzo na ozi dị nro",
  outcome: "iji ngwa enyemaka AI n'efu tụgharịa otu n'ime ọrụ i rụrụ n'agha ka ọ bụrụ okwu ọrụ ndị nkịtị (civilian), lelee ya na isi iyi ọrụ gọọmentị, ma debe ozi nzuzo na ozi dị nro n'ebe ọ na-adịghị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị agha mbụ (veterans) na ndị agha na-ahapụ ọrụ agha, ndị chọrọ ịghọta otu artificial intelligence (AI) si agbanwe ọrụ ndị nkịtị, na otu ha ga-esi jiri ya rite uru. Ọ dịghị mkpa ka ị mara ihe gbasara teknụzụ.",
    "Ị ga-amụta ihe AI bụ, otu esi emeghe ngwa enyemaka AI n'efu, otu esi enye ya ntụziaka doro anya (dị ka iwu doro anya n'agha: ọrụ, ọnọdụ, ọkwa), na otu esi edebe ozi nzuzo na ozi dị nro n'ebe ọ na-adịghị. Mgbe ahụ, ị ga-eji ya tụgharịa ahụmahụ agha gị ka ọ bụrụ okwu ndị were mmadụ n'ọrụ na-aghọta, ma lelee ihe ọ dere.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise: gụọ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu ọrụ i rụrụ n'agha. Jiri ngwa enyemaka AI dee ya ọzọ ka ọ bụrụ isi okwu résumé atọ maka ọrụ ndị nkịtị, rịọ maka otu mgbanwe ga-eme ka ọ ka mma, chọọ ọrụ agha gị na O*NET Military Crosswalk iji lelee aha ọrụ ndị nkịtị ọ tụrụ aro, ma wepụ ozi nzuzo ma ọ bụ ozi dị nro ọ bụla tupu i chekwaa isi okwu ndị ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha mbụ na ndị agha na-ahapụ ọrụ agha, ndị na-achọ ọrụ ndị nkịtị. Afọ ndụ ha na ọkwa ha dị iche iche nke ukwuu; ọtụtụ nwere ezigbo nka ọrụ mana ha na-akọwa ya n'okwu agha.",
    startingPoint: "Ha maara iwu, usoro na ọkwa nke ọma, ma nwee ike iji smartphone ma ọ bụ kọmputa. Ha anaghị eji ngwa enyemaka AI, ma ọ bụ na-eji ya ntakịrị, ha amabeghịkwa ịkọwa ọrụ agha n'okwu ndị nkịtị.",
    gap: "Ndị were mmadụ n'ọrụ na-agụ résumé n'asụsụ nke ha, ha na-atụkwa anya karịa na mbụ ka ndị ọrụ jiri ngwa AI. Ndị na-amụ ihe kwesịrị iji ngwa enyemaka AI n'efu n'enweghị nsogbu tụgharịa ọrụ agha ha ka ọ bụrụ okwu ọrụ ndị nkịtị, ma lelee ihe ọ dere na isi iyi ọrụ gọọmentị, ka a ghọta ahụmahụ ha ma ka azịza ezighi ezi ghara iduhie ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; anaghị atụ anya ka ha mara ihe gbasara teknụzụ",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa nwere ịntanetị; ụfọdụ na-eji kọmputa ọha n'ogige agha, n'ọba akwụkwọ ma ọ bụ na TAP",
      "Oge: nkuzi dị ka nkeji 5 nke dabara n'etiti oge ịhụ ndị na-enyere aka n'ịhapụ agha na oge ọrụ",
      "OPSEC na nzuzo: ọ dịghị ozi nzuzo agha (classified), ozi a na-achịkwa ma ọ bụ ozi mission, na ọ dịghị nọmba Social Security ma ọ bụ nọmba faịlụ VA n'ime prompt ọ bụla",
      "Ụgwọ ọnwa na iwu mmemme na-agbanwe, ya mere ndị na-amụ ihe na-elele isi iyi gọọmentị (O*NET, BLS, VA) tupu ha emee ihe"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ", action: "ịkọwa ihe AI bụ, ịkpọ aha ụzọ ọ na-esi agbanwe ọrụ ndị nkịtị, na ịmata nka ndị ọ naghị anọchi", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji ekwentị ma ọ bụ kọmputa", action: "imeghe ngwa enyemaka AI n'efu ma dee prompt nwere ọrụ, ọnọdụ na ọkwa", standard: "nke mere na azịza mbụ ga-aba uru" },
    { id: "O3", condition: "Tupu i zipu prompt ọ bụla", action: "ịlele ya maka ozi nzuzo na ozi dị nro, ma wepụ ya ma ọ bụ dochie ya na ihe nnọchi", standard: "n'ekesaghị nọmba nzuzo ọ bụla, na n'ekesaghị ozi nzuzo agha, ozi a na-achịkwa ma ọ bụ ozi mission" },
    { id: "O4", condition: "Mgbe e nyere gị koodu ma ọ bụ aha ọrụ agha gị", action: "ịchọ ọrụ agha gị na O*NET Military Crosswalk ma depụta ọrụ ndị nkịtị dabara ya", standard: "nwere opekata mpe aha ọrụ ndị nkịtị atọ na ọrụ abụọ maka nke ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị otu ọrụ i rụrụ n'agha", action: "iji ngwa enyemaka AI dee ọrụ ahụ ọzọ ka ọ bụrụ isi okwu résumé ndị nkịtị nwere nha na nsonaazụ", standard: "n'enweghị okwu nzuzo ndị agha (slang), na ihe niile e kwuru bụ eziokwu" },
    { id: "O6", condition: "Mgbe e nyere gị azịza AI gbasara ọrụ, ụgwọ ọnwa ma ọ bụ mmemme", action: "ịlele azịza ahụ na isi iyi gọọmentị ma họrọ otu nka na otu mmemme maka nzọụkwụ gị ọzọ", standard: "tupu i jiri ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe ndabere AI maka ọrụ dị n'ihu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe AI bụ na otu ọ na-esi agbanwe ọrụ",
          minutes: 4,
          goal: "Kọwaa n'okwu nke gị ihe AI bụ ma kpọọ aha ụzọ abụọ ọ na-esi agbanwe ọrụ ndị nkịtị.",
          text: [
            "AI, ma ọ bụ artificial intelligence (ọgụgụ isi arụrụ arụ), pụtara mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ, dị ka ide ihe, ịchịkọta ihe n'obere, ịhazi ozi ma ọ bụ ịhụ usoro. Ngwa enyemaka AI bụ nke ị na-akparịta ụka na ya n'okwu nkịtị. Ndị a ma ama na-akwụghị ụgwọ gụnyere ChatGPT, Microsoft Copilot na Google Gemini.",
            "N'ọrụ ndị nkịtị, a na-eji AI ugbu a ede ihe mbụ nke email na akụkọ, ịchịkọta akwụkwọ ogologo n'obere, ịhazi oge na ụzọ, ịza ajụjụ ndị ahịa, na ịchọta nsogbu n'ime data. Na logistics, ọ na-enyere aka ịkọ ihe a ga-achọ; na mmezi igwe, ọ na-enyere aka ịhụ akụkụ nwere ike imebi; n'ọfịs, ọ na-ede ihe mbụ.",
            "AI anaghị anọchi ikpe ezi ikpe, idu ndú ma ọ bụ ibu ọrụ. Ndị a bụ nka i wuru mgbe ị nọ n'agha. Ndị were mmadụ n'ọrụ chọrọ ndị nwere ike iji AI dị ka ngwaọrụ ma ka na-eme mkpebi, lelee ọrụ ahụ ma duo otu ahụ."
          ],
          words: [["AI", "mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ."], ["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu."]],
          slides: [
            { title: "AI bụ...", bullets: ["Mmemme na-ede, na-achịkọta, na-ahazi ma na-ahụ usoro", "Ngwa enyemaka ị na-akparịta ụka na ya: ChatGPT, Copilot, Gemini"] },
            { title: "Otu AI si agbanwe ọrụ", bullets: ["Ide ihe mbụ nke email na akụkọ", "Ịkọ ihe a ga-achọ na ịhazi ụzọ", "Ịhụ igwe nwere ike imebi"] },
            { title: "Ihe AI anaghị anọchi", bullets: ["Ikpe ezi ikpe na ibu ọrụ", "Idu ndú", "Ịlele ọrụ ahụ: gị ka na-eme mkpebi"] }
          ],
          tryIt: "Dee ọrụ abụọ site n'ọrụ agha gị na ọrụ abụọ site n'ọrụ ndị nkịtị ị chọrọ. N'akụkụ nke ọ bụla, dee otu ụzọ AI nwere ike isi nyere aka.",
          youCanNow: "ịkọwa ihe AI bụ, ịkpọ aha ụzọ ọ na-esi agbanwe ọrụ, na ikwu nka ndị AI anaghị anọchi.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ AI kacha mara ime n'ọrụ ndị nkịtị?", options: ["Ide ụdị mbụ nke akụkọ", "Ibu ọrụ maka mkpebi ikpeazụ", "Inweta ntụkwasị obi otu", "Idu ndị mmadụ n'oge nsogbu"], answer: 0, why: "AI nwere ike ide ihe mbụ ma hazie ozi, mana ikpe ezi ikpe, ntụkwasị obi na idu ndú ka dị n'aka ndị mmadụ." },
            { objective: "O1", q: "Onye gị na ya na-arụ ọrụ kwuru na AI ga-eme ka nka idu ndú gị ghara ịba uru. Gịnị ka ị ga-ekwu?", options: ["Kwenye ma kwụsị ide idu ndú", "Kwuo na AI anaghị anọchi ikpe ezi ikpe, idu ndú ma ọ bụ ibu ọrụ", "Kwuo na a na-eji AI naanị n'agha", "Kwuo na AI na-eziri ezi mgbe niile, ya mere ndị mmadụ na-ede naanị ede"], answer: 1, why: "AI na-agbanwe ọrụ, mana ndị mmadụ ka na-edu, na-ekpebi ma na-ebu ọrụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Imeghe ngwa enyemaka na inye iwu doro anya",
          minutes: 5,
          goal: "Meghee ngwa enyemaka AI n'efu ma dee prompt nwere ọrụ, ọnọdụ na ọkwa.",
          text: [
            "Na ekwentị, wụnye ezi app site n'ụlọ ahịa app (OpenAI maka ChatGPT, Microsoft maka Copilot, Google maka Gemini). Na kọmputa, dee chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com na browser.",
            "Ihe ị na-ede ka a na-akpọ prompt. Ị maralarị otu esi enye iwu doro anya. Jiri otu echiche ahụ: ọrụ (ihe ị chọrọ), ọnọdụ (ọnọdụ gị), na ọkwa (otu ezigbo azịza ga-adị: ogologo, ụdị, ụda olu).",
            "Ọmụmaatụ: \"Ọrụ: depụta ọrụ ndị nkịtị na-eji nka mmezi ụgbọala. Ọnọdụ: Abụ m onye mmezi ụgbọala nta (light-wheel) n'ime Army afọ 6. Ọkwa: aha ọrụ 5, otu ahịrị maka nke ọ bụla, okwu dị mfe.\""
          ],
          steps: ["Meghee ezi app ma ọ bụ weebụsaịtị.", "Dee ọrụ: ihe ị chọrọ.", "Tinye ọnọdụ: ọnọdụ gị, n'enweghị ozi nzuzo.", "Tinye ọkwa: ogologo, ụdị na ụda olu.", "Zipu ya ma gụọ azịza ya."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."], ["Ụdị (format)", "ọdịdị azịza ahụ, dị ka ndepụta, tebụl ma ọ bụ obere paragraf."]],
          slides: [
            { title: "Ebe ị ga-emeghe ya", bullets: ["Ekwentị: ezi app site n'ụlọ ahịa app", "Kọmputa: chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "Prompt bụ iwu doro anya", bullets: ["Ọrụ: ihe ị chọrọ", "Ọnọdụ: ọnọdụ gị", "Ọkwa: otu ezigbo azịza ga-adị"] },
            { title: "Ọmụmaatụ", bullets: ["Ọrụ: ọrụ ndị nkịtị na-eji nka mmezi ụgbọala", "Ọnọdụ: afọ 6 dị ka onye mmezi ụgbọala nta", "Ọkwa: aha 5, otu ahịrị maka nke ọ bụla, okwu dị mfe"] }
          ],
          tryIt: "Meghee ngwa enyemaka AI n'efu. Dee prompt nwere ọrụ, ọnọdụ na ọkwa, na-arịọ aha ọrụ ndị nkịtị ise na-eji nka sitere n'ọrụ agha gị. Gụọ azịza ya.",
          youCanNow: "imeghe ngwa enyemaka AI n'efu ma dee prompt nwere ọrụ, ọnọdụ na ọkwa.",
          quickCheck: [
            { objective: "O2", q: "N'ime prompt iwu doro anya, gịnị bụ ọrụ?", options: ["Ozi nzuzo gị", "Otu ogologo azịza ahụ ga-adị", "Ihe ị chọrọ ka AI mee", "Aha ngwa AI ahụ"], answer: 2, why: "Ọrụ bụ ihe ị na-enye AI ka o mee; ọnọdụ na ọkwa na-eso ya." },
            { objective: "O2", q: "Ị chọrọ echiche ọrụ ndị nkịtị site na ngwa enyemaka AI. Kedu prompt ị ga-ezipu?", options: ["\"Ọrụ?\"", "\"Gwa m ihe niile gbasara ọrụ.\"", "\"Dee akụkọ ndụ m niile.\"", "\"Ọrụ: depụta ọrụ ndị nkịtị. Ọnọdụ: afọ 4 dị ka onye na-ahụ maka ngwa (supply). Ọkwa: aha 5, otu ahịrị maka nke ọ bụla.\""], answer: 3, why: "Prompt nwere ọrụ, ọnọdụ na ọkwa na-enweta azịza mbụ bara uru." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Idebe ozi nzuzo na ozi dị nro n'ebe ọ na-adịghị",
          minutes: 5,
          goal: "Lelee prompt maka ozi nzuzo ma ọ bụ ozi dị nro ma wepụ ya tupu i zipu ya.",
          text: [
            "Ngwa enyemaka AI ọha nwere ike ichekwa ihe ị na-ede. Edela nọmba Social Security gị, nọmba ndị dị na DD-214 gị, nọmba faịlụ ma ọ bụ nọmba arịrịọ VA gị, nọmba ụlọ akụ ma ọ bụ kaadị, okwuntughe, ma ọ bụ ozi ahụike ị na-achọghị ka e kesaa.",
            "Otu ịdọ onwe gị aka na ntị i ji mee operational security (OPSEC) ka dị mkpa. Edela ozi nzuzo agha (classified) ma ọ bụ ozi a na-achịkwa, ebe otu agha gị nọ, ozi mission, ma ọ bụ ihe ọ bụla a gwara gị ka ị ghara ikesa. Kọwaa ọrụ gị n'ozuzu: \"lekọtara otu mmezi nwere mmadụ 12\" dị mma; aha otu agha na mission adịghị mkpa.",
            "Ọ bụrụ na ị chọrọ nọmba n'akwụkwọ, dee ihe nnọchi dị ka \"[nọmba m]\" ma dejupụta ya n'onwe gị mgbe e mesịrị, mgbe ị nọghị n'ịntanetị."
          ],
          steps: ["Gụọ prompt gị tupu i zipu ya.", "Wepụ nọmba nzuzo, ozi akaụntụ na okwuntughe.", "Wepụ ozi nzuzo agha, ozi a na-achịkwa ma ọ bụ ozi mission.", "Jiri ihe nnọchi dị ka \"[nọmba m]\" ebe ọ dị mkpa."],
          words: [["OPSEC", "operational security: ichebe ozi onye iro nwere ike iji."], ["Ihe nnọchi (placeholder)", "ihe na-anọchi anya dị ka \"[nọmba m]\" nke ị ga-edochi n'onwe gị mgbe e mesịrị."], ["DD-214", "akwụkwọ na-edekọ ọrụ agha gị na mgbe ị hapụrụ agha."]],
          slides: [
            { title: "Edela ihe ndị a n'ime AI ọha", bullets: ["Nọmba Social Security, DD-214 ma ọ bụ faịlụ VA", "Nọmba ụlọ akụ ma ọ bụ kaadị na okwuntughe", "Ozi ahụike nzuzo"] },
            { title: "OPSEC ka dị mkpa", bullets: ["Ọ dịghị ozi nzuzo agha ma ọ bụ ozi a na-achịkwa", "Ọ dịghị ebe otu agha nọ ma ọ bụ ozi mission", "Kọwaa ọrụ gị n'ozuzu"] },
            { title: "Jiri ihe nnọchi", bullets: ["Dee \"[nọmba m]\" n'ọnọdụ ya", "Dejupụta ya n'onwe gị mgbe e mesịrị, n'enweghị ịntanetị"] }
          ],
          tryIt: "Dee prompt na-akọwa ọrụ agha ikpeazụ gị n'ụzọ ị ga-enwe ike ikesa ya na onye ọ bụla were mmadụ n'ọrụ. Gụọ ya otu ahịrị n'otu oge ma wepụ ihe ọ bụla nzuzo ma ọ bụ dị nro tupu i zipu ya.",
          youCanNow: "ịlele prompt maka ozi nzuzo na ozi dị nro ma wepụ ya tupu i zipu ya.",
          quickCheck: [
            { objective: "O3", q: "Ị na-eji AI ede akwụkwọ ozi ịrịọ ọrụ (cover letter) ma chọọ nọmba ekwentị gị n'ime ya. Gịnị ka ị ga-eme?", options: ["Dee ezi nọmba ahụ ka akwụkwọ ozi ahụ zuo ezu", "Dee \"[ekwentị m]\" ma tinye ezi nọmba ahụ n'onwe gị mgbe e mesịrị", "Dee nọmba Social Security gị kama", "Rịọ AI ka o chepụta nọmba"], answer: 1, why: "Ihe nnọchi na-enye gị enyemaka n'etinyeghị nọmba nzuzo n'ime AI." },
            { objective: "O3", q: "Kedu ozi dị mma itinye na prompt AI ọha?", options: ["\"Zụrụ ndị otu ọhụrụ 8 n'ilele nchekwa\"", "Ụbọchị na ebe otu agha gị gara agha", "Ozi sitere na nzukọ nzuzo agha (classified)", "Nọmba faịlụ VA gị"], answer: 0, why: "Ọrụ n'ozuzu nwere nọmba dị mma; ozi mission na nọmba nzuzo anaghị abanye." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe ndabere AI maka ọrụ dị n'ihu",
        questions: [
          { objective: "O1", q: "Kedu nke kacha kọwaa ngwa enyemaka AI?", options: ["Onye na-achọ ndị ọrụ na-agụ ozi gị", "Mmemme kọmputa ị na-akparịta ụka na ya n'okwu nkịtị", "Ọfịs enyemaka gọọmentị", "Netwọk agha echekwara"], answer: 1, why: "Ngwa enyemaka AI bụ mmemme ị na-ede ihe na ya ma ọ bụ gwa okwu; ọ na-ede azịza." },
          { objective: "O1", q: "Kedu nka AI anaghị anọchi n'ọrụ?", options: ["Ide email mbụ", "Ịchịkọta akụkọ ogologo n'obere", "Ikpe ezi ikpe na ibu ọrụ maka mkpebi ahụ", "Ịhazi ndepụta"], answer: 2, why: "AI nwere ike ide ihe mbụ ma hazie ihe, mana mmadụ ka na-eme mkpebi ma na-ebu ọrụ maka nsonaazụ ya." },
          { objective: "O2", q: "N'ime prompt \"iwu doro anya\", gịnị bụ ọnọdụ?", options: ["Ọnọdụ gị, n'enweghị ozi nzuzo", "Ogologo na ụdị azịza ahụ", "Aha app ahụ", "Okwuntughe gị"], answer: 0, why: "Ọnọdụ na-akọwa ọnọdụ gị ka ngwa enyemaka ahụ wee mee ka azịza ya dabara gị." },
          { objective: "O3", q: "Kedu ozi dị mma ide n'ime ngwa enyemaka AI ọha?", options: ["Nọmba dị na DD-214 gị", "Ebe otu agha gị nọ ugbu a", "\"Lekọtara otu mmezi nwere mmadụ 12\"", "Nọmba arịrịọ VA gị"], answer: 2, why: "Nkọwa ọrụ gị n'ozuzu dị mma; nọmba na ozi mission adịghị mma." },
          { objective: "O3", q: "Ị chọrọ nọmba faịlụ VA gị n'akwụkwọ ozi ị na-eji AI ede. Gịnị ka ị ga-eme?", options: ["Dee ezi nọmba ahụ", "Dee ọkara ya", "Rịọ AI ka o chepụta ya", "Dee \"[nọmba m]\" ma dejupụta ya n'onwe gị mgbe e mesịrị"], answer: 3, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị nọmba nzuzo." }
        ]
      }
    },
    {
      name: "Isi 2: Ịtụgharị ọrụ agha gị ka ọ bụrụ ọrụ ndị nkịtị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchọta ọrụ ndị nkịtị dabara ọrụ agha gị",
          minutes: 5,
          goal: "Chọọ ọrụ agha gị na O*NET Military Crosswalk ma depụta ọrụ ndị nkịtị dabara ya.",
          text: [
            "O*NET OnLine nke U.S. Department of Labor (Ngalaba Ọrụ US) nwere Military Crosswalk Search. Ị na-ahọrọ ngalaba agha gị (MOS nke Army ma ọ bụ Marine Corps, rating nke Navy ma ọ bụ Coast Guard, AFSC nke Air Force, SFSC nke Space Force), dee koodu ma ọ bụ aha ọrụ gị, ọ ga-egosi ọrụ ndị nkịtị dabara ya.",
            "Ọrụ ndị nkịtị ọ bụla dị na O*NET na-edepụta ọrụ ya, ngwaọrụ ya na nka ya. Nke ahụ bụ asụsụ ndị were mmadụ n'ọrụ na-eji. Mgbe ahụ, ị nwere ike ịrịọ ngwa enyemaka AI ka ọ kọwaa ọrụ ndị ahụ n'okwu dị mfe, mana ndepụta ahụ n'onwe ya na-esi n'isi iyi gọọmentị.",
            "CareerOneStop, nke Department of Labor na-akwadokwa, nwere Veterans Job Matcher na-eme ihe yiri ya. Nwaa ha abụọ ma tụnyere ha."
          ],
          steps: ["Gaa na onetonline.org ma meghee Military Crosswalk Search.", "Họrọ ngalaba agha gị.", "Dee koodu gị (dịka ọmụmaatụ 88M ma ọ bụ rating Navy) ma ọ bụ aha ọrụ gị.", "Meghee ọrụ ndị nkịtị abụọ ma ọ bụ atọ dabara ya ma gụọ ọrụ ha.", "Dee aha ọrụ ndị masịrị gị."],
          words: [["MOS / rating / AFSC", "koodu ọrụ agha gị n'Army na Marines, Navy na Coast Guard, na Air Force."], ["Crosswalk", "ngwaọrụ na-ejikọta ọrụ agha na ọrụ ndị nkịtị."], ["O*NET", "ebe nchekwa data nke Department of Labor maka ọrụ ndị nkịtị na nka ha chọrọ."]],
          slides: [
            { title: "O*NET Military Crosswalk", bullets: ["U.S. Department of Labor na-elekọta ya", "Họrọ ngalaba agha gị, dee koodu ma ọ bụ aha gị", "Hụ ọrụ ndị nkịtị dabara ya"] },
            { title: "Gụọ ọrụ ndị nkịtị", bullets: ["Ọrụ ọ bụla na-edepụta ọrụ, ngwaọrụ na nka", "Nke ahụ bụ asụsụ ndị were mmadụ n'ọrụ na-eji"] },
            { title: "Nwakwaa", bullets: ["CareerOneStop Veterans Job Matcher", "Tụnyere ndepụta abụọ ahụ"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Chọọ MOS, rating ma ọ bụ AFSC gị na O*NET Military Crosswalk. Dee aha ọrụ ndị nkịtị atọ ọ tụrụ aro na ọrụ abụọ site na nke ọ bụla.",
          youCanNow: "iji O*NET Military Crosswalk chọta ọrụ ndị nkịtị dabara ọrụ agha gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ị ga-ede na O*NET Military Crosswalk iji chọta ọrụ dabara?", options: ["Nọmba Social Security gị", "Adreesị ụlọ gị", "Ụlọ ọrụ ndị nkịtị kacha masị gị", "Koodu ma ọ bụ aha ọrụ agha gị"], answer: 3, why: "Crosswalk na-achọ site na koodu ma ọ bụ aha ọrụ agha ma gosi ọrụ ndị nkịtị dabara ya." },
            { objective: "O4", q: "Crosswalk gosiri ọtụtụ ọrụ ndị nkịtị maka koodu gị. Gịnị ka ị ga-eme ọzọ?", options: ["Họrọ nke mbụ n'agụghị ya", "Leghara ndepụta ahụ anya ma jụọ enyi gị", "Dee aha ọrụ atọ na ọrụ abụọ maka nke ọ bụla", "Mechie ya ma chepụta aha ọrụ"], answer: 2, why: "Ide aha ọrụ na ọrụ ha na-enye gị okwu ndị nkịtị ị ga-eji na résumé gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ide ọrụ agha ọzọ n'okwu ndị nkịtị",
          minutes: 5,
          goal: "Jiri AI dee otu ọrụ agha ọzọ ka ọ bụrụ isi okwu résumé ndị nkịtị nwere nsonaazụ.",
          text: [
            "Ndị isi na-ewe mmadụ n'ọrụ nwere ike ghara ịma ihe platoon sergeant, PMCS ma ọ bụ CONEX bụ. Ọrụ gị bụ ikwu otu ihe ahụ n'okwu nke ha: ihe i mere, otu o si buo ibu, na nsonaazụ o wetara.",
            "Nye AI ọrụ gị n'okwu dị mfe na ọrụ ndị nkịtị ị na-achọ. Ọmụmaatụ prompt: \"Dee nke a ọzọ maka résumé onye isi ụlọ nkwakọba ngwaahịa (warehouse supervisor): Ana m ahụ maka ụlọ ngwa (supply room), ngwa 300 dị iche iche, nyere ndị agha 120 ngwa, enweghị ihe furu efu na nyocha ngwa (inventory) 2. Nye m isi okwu 3 na-amalite n'ngwaa siri ike ma nwee nọmba.\"",
            "Mgbe ahụ, mee ka ọ ka mma site n'ajụjụ nsochi: \"Wepụ okwu nzuzo ndị agha (slang).\" \"Jiri okwu dị na mgbasa ozi ọrụ a.\" \"Mee ka ọ dị mkpụmkpụ.\" Azịza mbụ bụ ihe mbụ (draft); gị bụ onye nhazi ya."
          ],
          steps: ["Dee ọrụ ahụ n'okwu dị mfe: gịnị, otu o si buo ibu, nsonaazụ ya.", "Kpọọ aha ọrụ ndị nkịtị ị na-achọ.", "Rịọ maka isi okwu 3 nwere ngwaa siri ike na nọmba.", "Rịọ maka otu mgbanwe, dị ka \"wepụ okwu nzuzo ndị agha\".", "Gụọ ya ma hụ na okwu ọ bụla bụ eziokwu."],
          words: [["Isi okwu résumé (bullet)", "otu obere ahịrị na résumé na-egosi ihe i mere na nsonaazụ ya."], ["Acronym", "okwu e mere site na mkpụrụ edemede mbụ, dị ka PMCS; ndị nkịtị anaghị amakarị nke ndị agha."]],
          slides: [
            { title: "Kwuo ya n'okwu nke ha", bullets: ["Ihe i mere", "Otu o si buo ibu: ndị mmadụ, ego, ngwaọrụ", "Nsonaazụ o wetara"] },
            { title: "Ọmụmaatụ prompt", bullets: ["\"Dee ọzọ maka résumé onye isi ụlọ nkwakọba ngwaahịa\"", "Ụlọ ngwa, ngwa 300, ndị agha 120, ihe efughị efu", "\"Isi okwu 3, ngwaa siri ike, nọmba\""] },
            { title: "Wee hazie ya", bullets: ["\"Wepụ okwu nzuzo ndị agha.\"", "\"Jiri okwu dị na mgbasa ozi ọrụ a.\"", "Lelee na okwu ọ bụla bụ eziokwu"] }
          ],
          tryIt: "Họrọ otu ọrụ i rụrụ n'agha. Rịọ ngwa enyemaka AI ka o dee ya ọzọ ka ọ bụrụ isi okwu résumé ndị nkịtị atọ maka otu aha ọrụ site na Nkuzi 4. Rịọ ya ka o wepụ okwu nzuzo ndị agha.",
          youCanNow: "ide ọrụ agha ọzọ ka ọ bụrụ isi okwu résumé ndị nkịtị doro anya nwere nọmba na nsonaazụ.",
          quickCheck: [
            { objective: "O5", q: "Kedu isi okwu résumé e dere maka onye were mmadụ n'ọrụ nke ndị nkịtị?", options: ["\"Duru otu mmadụ 10 belatara oge mmezi ngwaọrụ site na 20%\"", "\"Served as NCOIC of the motor pool IAW SOP\"", "\"Rụrụ ọrụ dị iche iche e nyere m\"", "\"Na-ahụ maka ihe\""], answer: 0, why: "Ọ na-eji okwu dị mfe ma gosi ihe i mere, otu o si buo ibu na nsonaazụ ya." },
            { objective: "O5", q: "Isi okwu AI ka na-ekwu \"CONUS\" na \"PCS\". Gịnị ka ị ga-arịọ ọzọ?", options: ["\"Tinyekwuo acronym.\"", "\"Mee ka ọ dị ogologo.\"", "\"Wepụ okwu nzuzo ndị agha ma jiri okwu ndị nkịtị dị mfe.\"", "\"Dee ya dị ka abụ uri.\""], answer: 2, why: "Ajụjụ nsochi na-arịọ ka e wepụ okwu nzuzo ndị agha na-eme ka ihe mbụ ahụ bụrụ okwu onye nkịtị na-aghọta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịlele azịza na ịhazi nka gị ọzọ",
          minutes: 5,
          goal: "Lelee azịza AI na isi iyi gọọmentị ma họrọ otu nka ị ga-ewulite ọzọ.",
          text: [
            "AI nwere ike ịchepụta ihe: aha ọrụ na-adabaghị, asambodo (certification) na-adịghị adị, ma ọ bụ ụgwọ ọnwa ezighi ezi. A na-akpọ nke a hallucination. Lelee aha ọrụ na O*NET, ma lelee ụgwọ ọnwa na ọdịnihu ọrụ na Occupational Outlook Handbook nke Bureau of Labor Statistics (bls.gov/ooh).",
            "Hụ na isi okwu gị bụ eziokwu. Ekwela ka AI mee ka ọkwa gị, nọmba gị ma ọ bụ onyinye nsọpụrụ (awards) gị buru ibu karịa ka ha dị. Onye were mmadụ n'ọrụ nwere ike ilele ya, ntụkwasị obi siri ike ịnwetaghachi.",
            "Mgbe ahụ, hazie otu nka ị ga-ewulite. Enyemaka gọọmentị n'efu gụnyere mmemme Personalized Career Planning and Guidance nke VA (ndụmọdụ ọrụ n'efu maka ndị agha mbụ na ndị agha ruru eru) na Transition Assistance Program nke Department of Labor. Maka ọzụzụ teknụzụ dị elu, mmemme VET TEC 2.0 nke VA na-akwụ ụgwọ ụfọdụ ọmụmụ teknụzụ na-abụghị digrii maka ndị agha mbụ ruru eru. Lelee ndị ruru eru ugbu a na va.gov."
          ],
          steps: ["Lelee aha ọrụ ọ bụla na O*NET.", "Lelee ụgwọ ọnwa na ọdịnihu na Occupational Outlook Handbook.", "Hụ na nọmba na ihe ọ bụla e kwuru n'isi okwu gị bụ eziokwu.", "Họrọ otu nka ị ga-ewulite na otu mmemme gọọmentị nwere ike inyere aka."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Occupational Outlook Handbook", "akwụkwọ ntuziaka n'efu nke Bureau of Labor Statistics gbasara ụgwọ ọnwa, uto ọrụ na otu esi abanye n'ọrụ ọ bụla."]],
          slides: [
            { title: "Lelee azịza AI", bullets: ["Aha ọrụ: O*NET", "Ụgwọ ọnwa na ọdịnihu: bls.gov/ooh", "Emela ka ọkwa, nọmba ma ọ bụ onyinye nsọpụrụ buru ibu"] },
            { title: "Enyemaka gọọmentị n'efu", bullets: ["VA Personalized Career Planning and Guidance", "DOL Transition Assistance Program (TAP)", "VA VET TEC 2.0 maka ọzụzụ teknụzụ dị elu"] },
            { title: "Nzọụkwụ gị ọzọ", bullets: ["Họrọ otu nka ị ga-ewulite", "Họrọ otu mmemme nwere ike inyere aka", "Lelee ma ị ruru eru na va.gov"] }
          ],
          sources: [
            { name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Ọrụ ikpeazụ: were isi okwu atọ gị site na Nkuzi 5. Lelee aha ọrụ ndị ahụ na O*NET Military Crosswalk, rịọ AI maka otu mgbanwe ga-eme ka ọ ka mma, wepụ ozi nzuzo ma ọ bụ ozi dị nro ọ bụla, ma chekwaa isi okwu ikpeazụ ahụ.",
          youCanNow: "ịlele azịza AI gbasara ọrụ na isi iyi gọọmentị ma họrọ otu nka na otu mmemme maka nzọụkwụ gị ọzọ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ hallucination nke AI?", options: ["Azịza AI na-eziri ezi mgbe niile", "Ngwa AI ọhụrụ maka ndị agha mbụ", "Ụzọ e si eme ka prompt dị mkpụmkpụ", "Ihe AI dere dị ka eziokwu mana e chepụtara ya"], answer: 3, why: "AI nwere ike ịchepụta ihe ma ka dị ka o ji n'aka, ya mere ị na-elele eziokwu na isi iyi gọọmentị." },
            { objective: "O6", q: "AI gwara gị ụgwọ ọnwa nkezi maka otu ọrụ ndị nkịtị. Gịnị ka ị ga-eme tupu i jiri ya?", options: ["Tinye ya na résumé gị", "Lelee ya na Occupational Outlook Handbook nke Bureau of Labor Statistics", "Jụọ AI ma o ji n'aka", "Kesaa ya ndị enyi gị dị ka eziokwu"], answer: 1, why: "Ọnụ ọgụgụ ụgwọ ọnwa na-esi n'isi iyi gọọmentị dị ka Occupational Outlook Handbook, ọ bụghị AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịtụgharị ọrụ agha gị ka ọ bụrụ ọrụ ndị nkịtị",
        questions: [
          { objective: "O4", q: "Gịnị ka O*NET Military Crosswalk na-eme?", options: ["Ọ na-ejikọta koodu ọrụ agha gị na ọrụ ndị nkịtị", "Ọ na-etinye arịrịọ VA gị", "Ọ na-ezigara ndị were mmadụ n'ọrụ résumé gị", "Ọ na-akwụ ụgwọ ọzụzụ"], answer: 0, why: "Ị na-etinye MOS, rating ma ọ bụ AFSC gị, ọ ga-egosi ọrụ ndị nkịtị dabara ya." },
          { objective: "O5", q: "Kedu isi okwu résumé kacha mma maka onye were mmadụ n'ọrụ nke ndị nkịtị?", options: ["\"Did PMCS on MTVs\"", "\"Lekọtara gwongworo 40 site n'ilele mgbochi; belatara mmebi site na 30%\"", "\"Nọ na motor pool\"", "\"Hooah\""], answer: 1, why: "Ọ na-eji okwu ndị nkịtị, nọmba na nsonaazụ." },
          { objective: "O5", q: "Ihe mbụ AI dere tinyere onyinye nsọpụrụ ị na-enwetaghị. Gịnị ka ị ga-eme?", options: ["Hapụ ya, ọ dị mma ịnụ", "Mee ka onyinye ahụ buru ibu karịa", "Wepụ ya; ihe ọ bụla e kwuru ga-abụrịrị eziokwu", "Jụọ enyi gị ma ọ dị mma"], answer: 2, why: "A nwere ike ilele ihe e mere ka ọ buru ibu, o nwekwara ike ime ka ị tufuo ọrụ ahụ." },
          { objective: "O6", q: "Ebee ka ị ga-elele ụgwọ ọnwa na ọdịnihu nke ọrụ ndị nkịtị?", options: ["Ozi na soshal midia", "Azịza mbụ AI", "Mgbasa ozi na-apụta na mberede", "Occupational Outlook Handbook nke Bureau of Labor Statistics"], answer: 3, why: "Occupational Outlook Handbook bụ isi iyi gọọmentị maka ụgwọ ọnwa na ọdịnihu ọrụ." },
          { objective: "O6", q: "Kedu mmemme VA na-enye ndị agha mbụ ruru eru ndụmọdụ ọrụ n'efu?", options: ["Personalized Career Planning and Guidance", "Military Crosswalk", "Google Gemini", "Occupational Outlook Handbook"], answer: 0, why: "VA na-edepụta Personalized Career Planning and Guidance dị ka ndụmọdụ ọrụ na agụmakwụkwọ n'efu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite AI na Ọrụ n'Ọdịnihu",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa AI bụ:", options: ["Mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ", "Ngalaba agha ọhụrụ", "Ụdị ekwentị", "Ebe gọọmentị na-etinye ọrụ"], answer: 0, why: "Mmemme AI na-ede, na-achịkọta, na-ahazi ma na-ahụ usoro." },
      { objective: "O1", q: "Kedu ụzọ a na-eji AI na logistics ndị nkịtị?", options: ["Ịbịanye aka na nkwekọrịta maka ụlọ ọrụ", "Ịkọ ihe a ga-achọ", "Iwe ndị isi n'ọrụ", "Ịnya gwongworo ọ bụla"], answer: 1, why: "AI na-enyere aka ịkọ ngwa a ga-achọ." },
      { objective: "O1", q: "Mgbe a na-eji AI n'ọrụ, onye na-ebu ọrụ maka mkpebi ahụ?", options: ["AI", "Ụlọ ọrụ mere mmemme ahụ", "Onye na-eji ya", "Ọ dịghị onye"], answer: 2, why: "AI bụ ngwaọrụ; mmadụ ka na-eme mkpebi." },
      { objective: "O2", q: "Kedu adreesị weebụ na-emeghe ngwa enyemaka AI n'efu?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com bụ ezi adreesị Google maka Gemini." },
      { objective: "O2", q: "N'ime prompt \"iwu doro anya\", ọkwa bụ:", options: ["Otu ezigbo azịza ga-adị: ogologo, ụdị, ụda olu", "Ọkwa gị n'agha", "Okwuntughe gị", "Ụlọ ahịa app"], answer: 0, why: "Ọkwa na-agwa ngwa enyemaka ahụ otu azịza ahụ kwesịrị ịdị." },
      { objective: "O2", q: "Kedu prompt ga-enweta azịza kacha baa uru?", options: ["\"ọrụ\"", "\"Ọrụ: ọrụ ndị nkịtị na-eji nka m. Ọnọdụ: afọ 6 dị ka onye mmezi ụgbọala. Ọkwa: aha 5, otu ahịrị maka nke ọ bụla.\"", "\"nyere m aka\"", "\"ihe agha\""], answer: 1, why: "Ọ na-enye ọrụ, ọnọdụ na ọkwa." },
      { objective: "O3", q: "Kedu nke ị na-ekwesịghị ide MGBE Ọ BỤLA n'ime ngwa enyemaka AI ọha?", options: ["\"Mee ka ọ dị mkpụmkpụ\"", "\"Duru otu mmadụ 8\"", "Nọmba Social Security gị", "\"Onye isi ụlọ nkwakọba ngwaahịa\""], answer: 2, why: "Nọmba Social Security bụ nzuzo, ekwesịghị itinye ya mgbe ọ bụla n'ime AI ọha." },
      { objective: "O3", q: "OPSEC na mkparịta ụka AI nke ndị nkịtị pụtara:", options: ["Ikesa ozi mission ka ị nweta azịza ka mma", "Ide ebe otu agha gị nọ", "Iji ọkwa gị dị ka okwuntughe", "Idebe ozi nzuzo agha, ozi a na-achịkwa na ozi mission n'ebe ọ na-adịghị"], answer: 3, why: "Otu ịdọ onwe gị aka na ntị ahụ na-echebe ozi dị nro ọbụlagodi mgbe ị hapụrụ agha." },
      { objective: "O3", q: "Ihe nnọchi dị ka \"[nọmba m]\" na-enyere gị aka:", options: ["Inweta enyemaka n'edeghị ezi nọmba ahụ", "Izobe AI n'anya onye were gị n'ọrụ", "Inweta ụgwọ ngwa ngwa", "Ịwụfe nzọụkwụ ilele"], answer: 0, why: "Ị na-edejupụta ezi nọmba ahụ n'onwe gị mgbe e mesịrị, n'enweghị ịntanetị." },
      { objective: "O4", q: "Onye na-elekọta O*NET Military Crosswalk?", options: ["Onye nkeonwe na-achọ ndị ọrụ", "U.S. Department of Labor", "Otu agha gị mbụ", "Ụlọ ọrụ AI"], answer: 1, why: "O*NET OnLine bụ saịtị nke Department of Labor." },
      { objective: "O4", q: "Na Military Crosswalk, onye agha mbụ nke Navy ga-achọ site na:", options: ["Koodu zip", "Nọmba Social Security", "Koodu rating ma ọ bụ aha ọrụ", "Ụbọchị ọ hapụrụ agha"], answer: 2, why: "Ị na-ahọrọ ngalaba agha gị ma dee rating ma ọ bụ aha ọrụ gị." },
      { objective: "O4", q: "Ngwaọrụ ọzọ Department of Labor na-akwado nke na-ejikọta ọrụ agha na ọrụ ndị nkịtị bụ:", options: ["Weebụsaịtị lọtrị", "App kaadị kredit", "Egwuregwu vidiyo", "Veterans Job Matcher nke CareerOneStop"], answer: 3, why: "Veterans Job Matcher nke CareerOneStop na-ejikọta ọrụ agha na ọrụ ndị nkịtị." },
      { objective: "O5", q: "Isi okwu résumé ndị nkịtị siri ike nwere:", options: ["Ihe i mere, otu o si buo ibu na nsonaazụ ya", "Naanị acronym ndị agha", "Mission otu agha gị", "Adreesị ụlọ gị"], answer: 0, why: "Ndị were mmadụ n'ọrụ nke ndị nkịtị na-achọ omume, nha na nsonaazụ." },
      { objective: "O5", q: "Kedu ajụjụ nsochi na-enyere aka ịtụgharị ihe mbụ maka ndị nkịtị?", options: ["\"Tinyekwuo acronym.\"", "\"Wepụ okwu nzuzo ndị agha.\"", "\"Tinye nọmba DD-214 m.\"", "\"Chepụta onyinye nsọpụrụ.\""], answer: 1, why: "Iwepụ okwu nzuzo ndị agha na-eme ka ndị nkịtị ghọta ahụmahụ gị nke ọma." },
      { objective: "O5", q: "Ihe mbụ AI dere maka isi okwu gị bụ:", options: ["Nke ikpeazụ na nke zuru oke", "Ihe ị ga-ezipu n'agụghị ya", "Ihe mbụ ị ga-ahazi ma lelee", "Nke na-ezighi ezi mgbe niile"], answer: 2, why: "Gị bụ onye nhazi; azịza mbụ bụ ihe mbụ (draft)." },
      { objective: "O6", q: "Mgbe AI dere ihe dị ka eziokwu mana e chepụtara ya, a na-akpọ ya:", options: ["Briefing", "Crosswalk", "Ihe nnọchi", "Hallucination"], answer: 3, why: "Nke ahụ bụ aha a na-akpọkarị azịza AI e chepụtara echepụta." },
      { objective: "O6", q: "Ebee ka ị ga-elele ụgwọ ọnwa nke ọrụ tupu i kwere nọmba AI nyere?", options: ["Occupational Outlook Handbook nke Bureau of Labor Statistics", "Ozi ederede site n'aka onye ị na-amaghị", "Azịza nke abụọ AI", "Foto njakịrị (meme)"], answer: 0, why: "Occupational Outlook Handbook na-enye ọnụ ọgụgụ gọọmentị gbasara ụgwọ ọnwa na ọdịnihu ọrụ." },
      { objective: "O6", q: "Mmemme VET TEC 2.0 nke VA na-enyere ndị agha mbụ ruru eru aka na:", options: ["Mbinye ego ụlọ", "Ọzụzụ teknụzụ dị elu na-abụghị digrii", "Nlekọta ahụike", "Mmezi ụgbọala"], answer: 1, why: "VET TEC 2.0 na-akwụ ụgwọ ụfọdụ mmemme ọzụzụ teknụzụ dị elu na-abụghị digrii." },
      { objective: "O6", q: "Kedu mmemme Department of Labor na-enyere ndị agha aka ịbanye n'ọrụ ndị nkịtị?", options: ["Naanị O*NET Crosswalk", "Google Gemini", "Transition Assistance Program (TAP)", "Bootcamp nkeonwe"], answer: 2, why: "TAP na-enye ndị agha na-ahapụ ọrụ agha ozi, ngwaọrụ na ọzụzụ." },
      { objective: "O6", q: "Tupu i chekwaa isi okwu résumé ikpeazụ gị, ị kwesịrị:", options: ["Itinye nọmba ụlọ akụ gị", "Ime ka nọmba gị buru ibu karịa", "Ịwụfe ilele", "Ịlele aha ọrụ, hụ na ihe ọ bụla e kwuru bụ eziokwu ma wepụ ozi nzuzo"], answer: 3, why: "Nke ahụ bụ ilele zuru ezu: ziri ezi, bụ eziokwu, ma enweghị nsogbu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 5, 6, 9, 12, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Prompt doro anya", objective: "O2", notYet: "Prompt ahụ edoghị anya, dịka ọmụmaatụ \"dozie résumé m\".", meets: "Prompt ahụ nwere ọrụ, ọnọdụ na ọkwa.", exceeds: "Ọ na-akpọkwa aha ọrụ ndị nkịtị ahụ, azịza mbụ ahụ fọrọ nke nta ka ọ dị njikere." },
      { name: "Okwu ndị nkịtị", objective: "O5", notYet: "Isi okwu ahụ ka na-eji okwu nzuzo ndị agha ma ọ bụ enweghị nsonaazụ.", meets: "Isi okwu atọ n'okwu ndị nkịtị dị mfe, nke ọ bụla nwere ihe i mere na nha ma ọ bụ nsonaazụ.", exceeds: "Onye na-amụ ihe rịọrọ maka otu mgbanwe ma nwee ike ikwu ihe o dozire." },
      { name: "E lelere aha ọrụ", objective: "O4", notYet: "E detuuru aha ọrụ site n'AI n'eleleghị ha.", meets: "E lelere aha ọrụ ndị ahụ na O*NET Military Crosswalk.", exceeds: "Onye na-amụ ihe lelekwara ụgwọ ọnwa ma ọ bụ ọdịnihu ọrụ na Occupational Outlook Handbook." },
      { name: "Ozi nzuzo na ozi dị nro adịghị n'ime ya", objective: "O3", notYet: "Prompt ma ọ bụ isi okwu ahụ nwere nọmba nzuzo ma ọ bụ ozi mission.", meets: "Ọ dịghị nọmba nzuzo, ọ dịghịkwa ozi nzuzo agha, ozi a na-achịkwa ma ọ bụ ozi mission.", exceeds: "Jiri ihe nnọchi ma nwee ike ịkọwa ihe mere e ji wepụ ozi ọ bụla e wepụrụ." },
      { name: "Ihe niile e kwuru bụ eziokwu", objective: "O6", notYet: "Isi okwu nwere ihe e kwuru, nọmba ma ọ bụ onyinye nsọpụrụ na-abụghị eziokwu.", meets: "Ihe niile e kwuru na nọmba niile n'isi okwu ahụ bụ eziokwu.", exceeds: "Onye na-amụ ihe kpọrọ aha otu nka na otu mmemme maka nzọụkwụ ọzọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri isi okwu ọhụrụ ha n'arịrịọ ọrụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara ajụjụ ọnụ ma ọ bụ ọrụ ndị nkịtị n'ime ụbọchị 90",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị agha mbụ ma ọ bụ mmemme ọzụzụ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Weebụsaịtị O*NET Military Crosswalk na Occupational Outlook Handbook nke Bureau of Labor Statistics, n'efu",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ app ndetu, maka ọrụ \"Nwalee ya ugbu a\"",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Na klaasị ịhapụ agha ma ọ bụ n'ebe enyemaka ndị agha mbụ: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" n'otu oge ahụ.",
      "Chetara ndị na-amụ ihe banyere OPSEC tupu prompt mbụ: ọ dịghị ozi nzuzo agha, ozi a na-achịkwa ma ọ bụ ozi mission, ọ dịghịkwa nọmba nzuzo.",
      "Jikọta ndị na-amụ ihe si n'ngalaba agha dị iche iche ka ha kọwaara ibe ha isi okwu ha n'okwu ndị nkịtị dị mfe.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Duzie ndị na-amụ ihe gaa TAP na ndụmọdụ ọrụ VA maka enyemaka otu-na-otu mgbe ihe ọmụmụ ahụ gwụrụ."
    ]
  }
};
