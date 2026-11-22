"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-essential-ai-tools-ig",
  lang: "ig",
  translationOf: "smallbiz-essential-ai-tools",
  category: "Small Business",
  name: "Ngwa AI Ndị Dị Mkpa maka Obere Azụmahịa",
  skills: "Ịhọrọ ngwa AI kwesịrị ekwesị maka ọrụ, Iji ngwa enyemaka mkparịta ụka dee ihe azụmahịa, Iji Canva mee foto na mbipụta, Iji AI n'akwụkwọ na spreadsheet, Ịhazi ngwa AI mbido gị",
  outcome: "ịhọrọ ngwa AI n'efu kwesịrị ekwesị maka ọrụ azụmahịa ma jiri ya: ngwa enyemaka mkparịta ụka maka ide ihe, Canva maka flaya ma ọ bụ post, na ngwa akwụkwọ ma ọ bụ spreadsheet maka ndepụta ọnụahịa ma ọ bụ obere tebụl ire ahịa, wee chịkọta ha n'otu ngwa mbido (toolkit) ị ga-eji n'ezie kwa izu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa chọrọ obere ngwa ole na ole bara uru kama ịchụ app ọhụrụ ọ bụla. Ọmụmaatụ anyị si n'ụlọ ahịa, ụlọ nri, ụlọ ntụgharị isi, ọrụ nhicha na nrụzi, na ụgbọala na-ere nri.",
    "Ị ga-amụta ụdị ngwa AI dị iche iche dị, nwalee ngwa enyemaka mkparịta ụka, ngwa nhazi foto, na enyemaka AI dị n'ime akwụkwọ na spreadsheet, ma mechie site n'ịhazi ngwa nke gị: ngwa nke ọrụ ọ bụla, na ihe ị na-agaghị etinye n'ime ya mgbe ọ bụla.",
    "Ọnụahịa, aha atụmatụ na ihe ngwa na-eme na-agbanwe ọtụtụ mgbe. Anyị na-akọwa ihe ị ga-eme kama aha menu kpọmkwem; lelee weebụsaịtị nke ụlọ ọrụ nwe ngwa ọ bụla maka atụmatụ n'efu ya ugbu a. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwere ọrụ \"Nwalee ya ugbu a\", nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Hazie ngwa AI mbido gị: tebụl otu peeji nwere ngwa atọ ruo ise ị ga-eji, ọrụ nke ọ bụla na-arụ n'azụmahịa gị, ma ị na-eji atụmatụ n'efu, na otu iwu nchekwa maka nke ọ bụla. Wee gosi na ọ na-arụ ọrụ site n'iji ngwa ọ bụla mee otu ezi ihe: ozi nye onye ahịa (ngwa enyemaka mkparịta ụka), flaya ma ọ bụ post (Canva), na ndepụta ọnụahịa ma ọ bụ tebụl ire ahịa (Docs/Word ma ọ bụ Sheets/Excel).",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa chọrọ obere ngwa AI ole na ole bara uru kama ịchụ app ọhụrụ ọ bụla: ụlọ ahịa, ụlọ nri, ụlọ ntụgharị isi, ọrụ nhicha na nrụzi, na ụgbọala na-ere nri.",
    startingPoint: "Ha na-eji ekwentị ma ọ bụ kọmputa ezipu ozi azụmahịa, ụfọdụ nwalerela otu ngwa enyemaka mkparịta ụka AI. Ha enweghị ahụmahụ ukwuu n'iji ngwa nhazi foto, enyemaka AI n'akwụkwọ, ma ọ bụ spreadsheet nwere formula.",
    gap: "Ndị nwe azụmahịa na-ala oge na ego n'ịnwale ọtụtụ app ma ọ bụ ịkwụ ụgwọ maka mgbanwe (upgrade) ha na-achọghị, ha nwekwara ike itinye ozi ndị ahịa n'ime ngwa na-ekwesịghị. Ha chọrọ obere ngwa n'efu, nke ọ bụla nwere ọrụ doro anya na iwu nchekwa, nke ha ga-eji n'ezie kwa izu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa; spreadsheet dị mfe karị na kọmputa",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'ụbọchị ọrụ juru eju",
      "Ọnụahịa, aha atụmatụ na ihe ngwa na-eme na-agbanwe; lelee weebụsaịtị nke ụlọ ọrụ nwe ngwa ọ bụla maka atụmatụ n'efu ya ugbu a",
      "Nzuzo: etinyela nọmba kaadị ndị ahịa, okwuntughe ma ọ bụ aha ha n'ime ngwa AI"
    ],
    prerequisites: "\"Mmalite AI maka Obere Azụmahịa\" na-enye aka, mana ọ dịghị mkpa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ụdị ngwa AI ndị bụ isi", action: "ijikọ ụdị ngwa ọ bụla na otu ọrụ n'azụmahịa gị", standard: "na otu ọrụ maka ụdị anọ ahụ nke ọ bụla" },
    { id: "O2", condition: "Site n'iji ngwa enyemaka mkparịta ụka n'efu", action: "ime ihe azụmahịa atọ dị iche iche n'otu mkparịta ụka", standard: "ebe i nyere ozi azụmahịa gị otu ugboro na mbido ma lelee nọmba ọ bụla" },
    { id: "O3", condition: "Site n'iji template Canva", action: "ime flaya ma ọ bụ post soshal midia maka ezi onyinye ma ọ bụ mmemme", standard: "nwere otu isi ozi, otu e si enweta gị, okwu ọ bụla e lelere, na naanị foto i nwere ikike iji" },
    { id: "O4", condition: "Mgbe e nyere gị ndetu na-ahazighị ahazi na Google Docs ma ọ bụ Microsoft Word", action: "ịgbanwe ndetu ahụ ka ọ bụrụ akwụkwọ azụmahịa dị ọcha site n'enyemaka AI", standard: "nke e chekwara n'akwụkwọ gị, ebe ọkachamara ma ọ bụ isi iyi gọọmentị lelere okwu gbasara iwu" },
    { id: "O5", condition: "Site n'iji Google Sheets ma ọ bụ Microsoft Excel", action: "ime tebụl ire ahịa ma ọ bụ ngwaahịa ma nweta enyemaka AI n'ịgụ ya", standard: "nwere opekata mpe ahịrị 10, formula SUM maka ngụkọta, na azịza AI e kwadoro na spreadsheet ahụ" },
    { id: "O6", condition: "Mgbe e nyere gị ngwa ndị ị nwalere", action: "ime tebụl ngwa mbido nwere ngwa atọ ruo ise, nwere ọrụ na iwu nchekwa maka nke ọ bụla", standard: "na-edepụta ngwa, ọrụ, atụmatụ na iwu nchekwa, ebe e ji atụmatụ n'efu tupu ịkwụ ụgwọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụdị ngwa AI ndị bụ isi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Maapụ ngwa AI maka obere azụmahịa",
          minutes: 5,
          goal: "Kpọọ aha ụdị ngwa AI ndị bụ isi ma jikọọ nke ọ bụla na ọrụ azụmahịa.",
          text: [
            "Ị chọghị ọtụtụ iri app. Ọtụtụ obere azụmahịa na-enweta uru kacha ukwuu site n'ụdị ngwa anọ.",
            "Ngwa enyemaka mkparịta ụka (ChatGPT, Microsoft Copilot, Google Gemini) na-ede ma na-akọwa ihe: azịza, nkọwa, atụmatụ, ndepụta. Ngwa nhazi (Canva na ndị ọzọ) na-eme flaya, post soshal midia, menu na logo, ọtụtụ n'ime ha nwekwara ihe AI na-enyere aka n'ide ihe na foto. Ngwa ọfịs (Google Docs na Sheets, Microsoft Word na Excel) na-echekwa akwụkwọ na nọmba gị, ụlọ ọrụ abụọ ahụ na-etinyekwa enyemaka AI n'ime ha n'ụfọdụ atụmatụ. Ngwa dị n'ime app ndị ọzọ, dị ka sọftwia ire ahịa (POS), ndokwa oge ma ọ bụ email gị, nwekwara ike inwe ihe AI.",
            "Malite site n'otu ngwa maka otu ọrụ. Mụta ya nke ọma tupu i tinye nke ọzọ."
          ],
          words: [["Ngwa enyemaka mkparịta ụka (chat assistant)", "ngwa AI ị na-agwa okwu n'igbe mkparịta ụka, dị ka ChatGPT, Copilot ma ọ bụ Gemini."], ["Ngwa nhazi (design tool)", "app maka ime foto dị ka flaya na post, dị ka Canva."], ["Point-of-sale (POS)", "usoro ị na-eji edekọ ire ahịa."]],
          slides: [
            { title: "Ụdị ngwa anọ", bullets: ["Ngwa enyemaka mkparịta ụka: na-ede ma na-akọwa", "Ngwa nhazi: flaya, post, menu", "Ngwa ọfịs: akwụkwọ na nọmba", "AI n'ime app ndị ị na-eji ugbu a"] },
            { title: "Ọmụmaatụ", bullets: ["ChatGPT, Copilot, Gemini", "Canva", "Google Docs na Sheets; Word na Excel"] },
            { title: "Mee ya ka ọ dị mfe", bullets: ["Otu ngwa maka otu ọrụ", "Bụ ụzọ mụta ya nke ọma", "Tinye nke ọzọ naanị mgbe ị chọrọ ya"] }
          ],
          tryIt: "Dee ụdị ngwa anọ ahụ n'akụkụ peeji. N'akụkụ nke ọ bụla, dee otu ọrụ n'azụmahịa gị ọ nwere ike ịrụ n'ọnwa a.",
          youCanNow: "ịkpọ aha ụdị ngwa AI ndị bụ isi ma jikọọ nke ọ bụla na ọrụ n'azụmahịa gị.",
          quickCheck: [
            { objective: "O1", q: "Ụdị ngwa gịnị ka ChatGPT, Copilot na Gemini bụ?", options: ["Ngwa nhazi", "Spreadsheet", "Ngwa enyemaka mkparịta ụka", "App ndokwa oge"], answer: 2, why: "Ha bụ ngwa enyemaka mkparịta ụka ị na-agwa okwu iji nweta ihe mbụ (draft) na azịza." },
            { objective: "O1", q: "Ị chọrọ ịhazi bọọdụ menu ọhụrụ. Kedu ụdị ngwa ị ga-ahọrọ?", options: ["Ngwa nhazi dị ka Canva", "Spreadsheet", "App ndokwa oge", "Igwe mgbakọ"], answer: 0, why: "Ngwa nhazi nwere template e mere maka menu na flaya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Inweta uru kacha ukwuu n'ngwa enyemaka mkparịta ụka",
          minutes: 5,
          goal: "Jiri ngwa enyemaka mkparịta ụka mee ihe azụmahịa atọ dị iche iche n'otu mkparịta ụka.",
          text: [
            "Ngwa enyemaka mkparịta ụka bụ ngwa kacha agbanwe agbanwe ị nwere. Ọ nwere ike ide, megharịa ide, chịkọta, tụgharịa asụsụ ma mee atụmatụ. Meghee ya n'app ekwentị gị ma ọ bụ na chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com.",
            "Nye ya ozi azụmahịa gị otu ugboro na mbido mkparịta ụka: \"Enwere m ụlọ ntụgharị isi nwere oche abụọ na Long Beach. Ụdị anyị bụ enyi na obodo. Ọnụahịa: ịkpụ isi $30, ịkpụ isi na afụ ọnụ $40.\" Wee rịọ ọtụtụ ihe n'usoro: bọọdụ ọnụahịa, template ozi ncheta, azịza nye nyocha (review).",
            "Rịọ maka nhọrọ na tebụl mgbe ha na-enye aka: \"Nye m ụdị atọ\" ma ọ bụ \"Tinye nke a na tebụl.\" Lelee mgbe niile nọmba ọ na-ekwughachi gị."
          ],
          steps: ["Meghee ngwa enyemaka mkparịta ụka.", "Nye ozi azụmahịa gị otu ugboro na mbido.", "Rịọ maka ihe 1, wee ihe 2, wee ihe 3.", "Rịọ maka nhọrọ ma ọ bụ tebụl ebe ọ na-enye aka.", "Lelee nọmba ọ bụla tupu i jiri ya."],
          words: [["Ịchịkọta (summarize)", "ime ka ihe dị ogologo dị mkpụmkpụ."], ["Template", "ụkpụrụ e meworo emeworo ị na-ejupụta oge ọ bụla."]],
          slides: [
            { title: "Onye enyemaka na-agbanwe agbanwe", bullets: ["Ide, megharịa ide, chịkọta, tụgharịa asụsụ, mee atụmatụ", "App ekwentị ma ọ bụ web browser"] },
            { title: "Hazie ya otu ugboro n'otu mkparịta ụka", bullets: ["Ụdị azụmahịa gị na obodo gị", "Ụdị gị na ọnụahịa gị", "Wee rịọ ihe n'usoro"] },
            { title: "Arịrịọ bara uru", bullets: ["\"Nye m ụdị atọ.\"", "\"Tinye nke a na tebụl.\"", "Lelee nọmba ọ bụla ọ na-ekwughachi"] }
          ],
          tryIt: "N'otu mkparịta ụka, nye ozi azụmahịa gị, wee rịọ maka: bọọdụ ọnụahịa, template ozi ncheta nwere \"[aha onye ahịa]\", na azịza ekele nye ezigbo nyocha (review).",
          youCanNow: "iji otu mkparịta ụka mee ọtụtụ ihe azụmahịa site n'ozi nke gị.",
          quickCheck: [
            { objective: "O2", q: "Olee mgbe ị ga-enye ozi azụmahịa gị na mkparịta ụka?", options: ["Ọ dịghị mgbe ọ bụla", "Ọzọ n'arịrịọ ọ bụla", "Naanị na njedebe", "Otu ugboro na mbido"], answer: 3, why: "Inye ozi otu ugboro na mbido na-eme ka azịza ọ bụla na mkparịta ụka ahụ jiri ya." },
            { objective: "O2", q: "Ngwa enyemaka ahụ mere bọọdụ ọnụahịa gị mana otu ọnụahịa adịghị ka ọ ziri ezi. Gịnị ka ị ga-eme?", options: ["Bipụta ya otu o sila dị", "Tụnyere nọmba ọ bụla na ezi ọnụahịa gị ma dozie ya", "Rịọ maka nhazi ọhụrụ", "Wepụ ọnụahịa niile"], answer: 1, why: "AI nwere ike ikwughachi nọmba n'ụzọ ezighi ezi, ya mere ị na-elele nke ọ bụla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji Canva mee flaya ma ọ bụ post soshal midia",
          minutes: 5,
          goal: "Jiri ngwa nhazi n'efu mee flaya ma ọ bụ post soshal midia dị mfe.",
          text: [
            "Canva bụ ngwa nhazi na-arụ ọrụ na web browser na dị ka app ekwentị. O nwere atụmatụ n'efu na ọtụtụ puku template e meworo emeworo maka flaya, menu, post soshal midia na kaadị azụmahịa. Lelee canva.com maka ihe atụmatụ n'efu ahụ gụnyere taa.",
            "Malite site na template, ọ bụghị peeji efu. Chọọ ihe ị chọrọ (\"restaurant flyer\", \"salon Instagram post\"), họrọ otu, wee gbanwee okwu, agba na foto ka ha bụrụ nke gị. Jiri okwu si n'ngwa enyemaka mkparịta ụka gị.",
            "Jiri foto nke gị ma ọ bụ ndị ngwa ahụ kwere ka i jiri. Mee ya ka ọ dị mfe: otu isi ozi, okwu buru ibu a na-agụ nke ọma, aha azụmahịa gị na otu e si enweta gị. Lelee nsụpe adreesị na nọmba ekwentị gị."
          ],
          steps: ["Meghee Canva ma chọọ template.", "Gbanwee okwu ka ọ bụrụ ozi gị.", "Tinye foto na agba nke gị.", "Tinye aha gị, adreesị na otu e si enweta gị.", "Lelee okwu ọ bụla, wee budata ma ọ bụ kesaa ya."],
          words: [["Template", "nhazi e meworo emeworo ị na-agbanwe ka ọ bụrụ nke gị."], ["Atụmatụ n'efu (free plan)", "ụdị ngwa ị nwere ike iji n'akwụghị ụgwọ, nke na-enwekarị oke ụfọdụ."]],
          slides: [
            { title: "Canva", bullets: ["Browser na app ekwentị", "Atụmatụ n'efu nwere ọtụtụ template", "Lelee canva.com maka ihe n'efu taa"] },
            { title: "Malite site na template", bullets: ["Chọọ \"restaurant flyer\" ma ọ bụ \"salon post\"", "Gbanwee okwu, agba na foto", "Jiri okwu si n'ngwa enyemaka mkparịta ụka gị"] },
            { title: "Mee ka o doo anya", bullets: ["Otu isi ozi, okwu buru ibu", "Aha, adreesị, otu e si enweta gị", "Lelee okwu ọ bụla tupu ịkesa"] }
          ],
          tryIt: "Jiri template Canva mee flaya ma ọ bụ post maka otu ezi onyinye ma ọ bụ mmemme n'azụmahịa gị. Lelee okwu ọ bụla ma chekwaa ya.",
          youCanNow: "ime flaya ma ọ bụ post soshal midia doro anya site na template n'ngwa nhazi n'efu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka flaya doro anya nwere?", options: ["Otu isi ozi na otu e si enweta gị", "Okwu dị ka o nwere ike ịbanye", "Ihe ọ bụla ị na-ere", "Enweghị ozi ọ bụla e ji akpọtụrụ gị"], answer: 0, why: "Otu isi ozi na ozi e ji akpọtụrụ gị na-eme ka ọ dị mfe ime ihe flaya ahụ kwuru." },
            { objective: "O3", q: "Ị hụrụ foto mara mma n'ịntanetị maka flaya gị. Gịnị ka ị ga-eme?", options: ["Jiri ya n'ihi na ọ dị n'ịntanetị", "Bipụ ya ka onye ọ bụla ghara ịhụ", "Jiri foto nke gị ma ọ bụ nke i nwere ikike iji", "Rịọ AI ka o detuo ya"], answer: 2, why: "Ị nwere ike iji naanị foto ị sere ma ọ bụ ndị i nwere ikike iji." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụdị ngwa AI ndị bụ isi",
        questions: [
          { objective: "O1", q: "Kedu ụdị ngwa kacha mma maka ide azịza nye onye ahịa?", options: ["Igwe mbipụta rịsịtị", "Ngwa enyemaka mkparịta ụka", "Igwe na-agụ barcode", "Igwe mgbakọ"], answer: 1, why: "Ngwa enyemaka mkparịta ụka na-ede ma na-emegharị okwu." },
          { objective: "O1", q: "Kedu ngwa a ma ama maka template flaya na post soshal midia?", options: ["Igwe mgbakọ", "Usoro POS", "Naanị Excel", "Canva"], answer: 3, why: "Canva bụ ngwa nhazi nwere template." },
          { objective: "O1", q: "Gịnị bụ ezigbo ụzọ isi malite iji ngwa AI?", options: ["Otu ngwa maka otu ọrụ, nke a mụtara nke ọma", "Wụnye app iri abụọ n'otu oge", "Kwụọ ụgwọ maka atụmatụ ọ bụla", "Zere ngwa niile"], answer: 0, why: "Malite n'ụzọ dị mfe ma mụta otu ngwa nke ọma." },
          { objective: "O2", q: "I nyere ngwa enyemaka ahụ ọnụahịa gị. Gịnị ka ị ga-elele na bọọdụ ọnụahịa o mere?", options: ["Ọ dịghị ihe", "Naanị agba", "Nọmba ọ bụla ọ na-ekwughachi", "Naanị aha isi"], answer: 2, why: "AI nwere ike ikwughachi nọmba n'ụzọ ezighi ezi." },
          { objective: "O3", q: "Mgbe ị na-eme flaya na Canva, ị kwesịrị ịmalite site na:", options: ["Peeji efu oge ọ bụla", "Flaya onye na-asọ mpi na gị", "Template ị na-agbanwe ka ọ bụrụ nke gị", "Foto i nweghị ikike iji"], answer: 2, why: "Template na-echekwa oge; ị na-agbanwe ha ka ha bụrụ nke gị." }
        ]
      }
    },
    {
      name: "Isi 2: AI n'ngwa ọfịs gị kwa ụbọchị, na ngwa mbido gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Enyemaka AI n'akwụkwọ: Google Docs na Microsoft Word",
          minutes: 5,
          goal: "Gbanwee ndetu na-ahazighị ahazi ka ọ bụrụ akwụkwọ azụmahịa dị ọcha.",
          text: [
            "Ọtụtụ azụmahịa na-edebe ndepụta ọnụahịa, iwu azụmahịa na akwụkwọ ozi na Google Docs ma ọ bụ Microsoft Word. Ha abụọ bụ n'efu iji na web browser site n'akaụntụ Google ma ọ bụ Microsoft. Google na Microsoft na-etinye enyemaka AI (Gemini na Copilot) n'ime ha n'ụfọdụ atụmatụ; ihe ị ga-ahụ dabere n'akaụntụ gị.",
            "Ọ bụrụ na app akwụkwọ gị nwere enyemaka AI, ị nwere ike ịrịọ ya ka o dee ma ọ bụ megharịa ide ozugbo na peeji ahụ. Ọ bụrụ na o nweghị, dee ya na ngwa enyemaka mkparịta ụka wee tinye (paste) okwu ahụ. N'ụzọ ọ bụla, akwụkwọ ahụ bụ ebe ị na-edebe ụdị ikpeazụ e lelere.",
            "Ọrụ akwụkwọ dị mma: iwu ịkagbu (cancellation policy), ndepụta mmeghe ụlọ ahịa maka ndị ọrụ, ndepụta ọnụahịa, akwụkwọ ozi nye onye nwe ụlọ gị. Maka iwu azụmahịa na ihe ọ bụla gbasara iwu, mee ka ọkachamara ma ọ bụ isi iyi gọọmentị lelee ya."
          ],
          steps: ["Dee ndetu ihe ị chọrọ n'ụzọ ọ bụla.", "Rịọ enyemaka AI (n'akwụkwọ ahụ ma ọ bụ ngwa enyemaka mkparịta ụka) ka ọ gbanwee ha ka ha bụrụ akwụkwọ dị ọcha.", "Tinye ma ọ bụ debe ya na Docs ma ọ bụ Word.", "Lelee eziokwu ma dozie okwu.", "Chekwaa ya n'aha doro anya."],
          words: [["Google Docs", "ngwa ide akwụkwọ n'efu nke Google na web browser."], ["Microsoft Word", "ngwa ide akwụkwọ nke Microsoft, n'efu na weebụ site n'akaụntụ Microsoft."], ["Iwu azụmahịa (policy)", "iwu e dere ede maka azụmahịa gị, dị ka otu ịkagbu si arụ ọrụ."]],
          slides: [
            { title: "Akwụkwọ gị", bullets: ["Google Docs ma ọ bụ Microsoft Word", "N'efu na browser site n'akaụntụ", "Enyemaka AI n'ụfọdụ atụmatụ"] },
            { title: "Ụzọ abụọ isi jiri AI ebe a", bullets: ["Jiri enyemaka AI dị n'akwụkwọ ahụ, ọ bụrụ na i nwere ya", "Ma ọ bụ dee ya na ngwa enyemaka mkparịta ụka wee tinye ya"] },
            { title: "Ọrụ akwụkwọ dị mma", bullets: ["Iwu ịkagbu", "Ndepụta mmeghe na ndepụta ọnụahịa", "Mee ka ọkachamara lelee okwu gbasara iwu"] }
          ],
          tryIt: "Dee ahịrị ise n'ụzọ ọ bụla gbasara iwu ịkagbu ma ọ bụ ịbịa n'azụ oge. Jiri AI gbanwee ha ka ha bụrụ iwu doro anya, nwere nkwanye ugwu, ma chekwaa ya na Docs ma ọ bụ Word.",
          youCanNow: "ịgbanwe ndetu na-ahazighị ahazi ka ọ bụrụ akwụkwọ azụmahịa dị ọcha site n'iji AI na ngwa ọfịs.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka ụdị ikpeazụ e lelere nke iwu azụmahịa kwesịrị ịdị?", options: ["Naanị na mkparịta ụka AI", "N'akwụkwọ gị na Docs ma ọ bụ Word", "N'obere mpempe akwụkwọ nrapado", "N'ozi i zigaara onwe gị"], answer: 1, why: "Akwụkwọ gị na-echekwa ụdị e lelere n'enweghị nsogbu, ọ dịkwa mfe ịkesa." },
            { objective: "O4", q: "AI gbanwere ndetu gị ka ọ bụrụ iwu nkwụghachi ego nwere okwu iwu. Gịnị ka ị ga-eme?", options: ["Bipụta ya n'ịgụghị ya", "Wepụ okwu iwu ahụ", "Jụọ AI ma ọ dabara n'iwu", "Mee ka ọkachamara ma ọ bụ isi iyi gọọmentị lelee okwu ahụ"], answer: 3, why: "Ọkachamara ma ọ bụ isi iyi gọọmentị kwesịrị ilele okwu gbasara iwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Enyemaka AI na spreadsheet: Sheets na Excel",
          minutes: 5,
          goal: "Mee obere tebụl ire ahịa ma ọ bụ ngwaahịa ma nweta enyemaka AI n'ịgụ ya.",
          text: [
            "Spreadsheet bụ igbe nwere ahịrị na kọlụm maka nọmba. Google Sheets na Microsoft Excel bụ nhọrọ a na-ahụkarị. Obere tebụl, dị ka Date, Item, Quantity, Price, Total (ụbọchị, ihe, ọnụ ọgụgụ, ọnụahịa, ngụkọta), na-agwalarị gị ọtụtụ ihe.",
            "AI nwere ike inyere aka n'ụzọ abụọ. Ọ nwere ike ịgwa gị otu esi eme ihe (\"How do I total column E in Google Sheets?\"), n'ụfọdụ atụmatụ ọ nwekwara ike ịrụ ọrụ n'ime spreadsheet ahụ. Ị nwekwara ike itinye obere tebụl na-enweghị ozi nzuzo n'ngwa enyemaka mkparịta ụka ma jụọ: \"Kedu ihe kacha ree?\"",
            "Lelee mgbakọ. AI ka mma n'ịkọwa ihe karịa ịgụkọ ọnụ, ya mere hapụ spreadsheet ka o mee ngụkọta site na formula SUM, jiri AI kọwaa ma ọ bụ tụọ aro ihe ị ga-elele."
          ],
          steps: ["Mee kọlụm: Date, Item, Quantity, Price, Total.", "Tinye ire ahịa otu izu.", "Jụọ AI otu esi etinye ngụkọta SUM, wee mee ya.", "Jụọ AI kedu ihe kacha ree, wee kwado ya na spreadsheet ahụ."],
          words: [["Spreadsheet", "igbe nwere ahịrị na kọlụm maka nọmba, dị ka Google Sheets ma ọ bụ Excel."], ["Formula", "ntụziaka n'ime cell na-agụkọ ọnụ, dị ka =SUM(E2:E20)."]],
          slides: [
            { title: "Obere tebụl ire ahịa", bullets: ["Date, Item, Quantity, Price, Total", "Google Sheets ma ọ bụ Microsoft Excel"] },
            { title: "Otu AI si enyere aka", bullets: ["Ọ na-akọwa otu esi eme: \"How do I total column E?\"", "Ọ na-arụ ọrụ n'ime spreadsheet n'ụfọdụ atụmatụ", "Ọ na-agụ obere tebụl na-enweghị ozi nzuzo"] },
            { title: "Hapụ spreadsheet ka o mee mgbakọ", bullets: ["Jiri formula SUM maka ngụkọta", "AI na-akọwa; spreadsheet na-agụkọ", "Kwado ihe AI kwuru na data gị"] }
          ],
          tryIt: "Mee tebụl ire ahịa ma ọ bụ ngwaahịa nwere opekata mpe ahịrị 10. Jiri formula SUM maka ngụkọta, ma jụọ AI kedu ihe kacha ree. Kwado azịza ahụ na spreadsheet gị.",
          youCanNow: "ime obere tebụl ire ahịa ma jiri AI nyere gị aka ịgụ ya, ebe spreadsheet na-eme mgbakọ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ =SUM(E2:E20)?", options: ["Formula na-agbakọta kọlụm", "Aha faịlụ", "Prompt mkparịta ụka", "Okwuntughe"], answer: 0, why: "SUM bụ formula spreadsheet na-agbakọta nọmba." },
            { objective: "O5", q: "AI kwuru na ihe kacha ree n'ọnwa gara aga bụ kọfị. Gịnị ka ị ga-eme?", options: ["Zụta kọfị ọzọ ozugbo", "Jụọ AI ọzọ ruo mgbe o kwenyere", "Kwado ya na spreadsheet gị", "Hichapụ tebụl ire ahịa"], answer: 2, why: "Ị na-akwado otu AI si gụọ data gị na spreadsheet ahụ n'onwe ya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhazi ngwa AI mbido gị",
          minutes: 5,
          goal: "Họrọ ngwa atọ ruo ise, nye nke ọ bụla ọrụ, ma debe iwu nchekwa maka nke ọ bụla.",
          text: [
            "Ngwa mbido gị (toolkit) bụ obere ndepụta: ngwa ahụ, ọrụ ya, atụmatụ ole, na iwu. Dịka ọmụmaatụ: ChatGPT (n'efu) maka azịza na nkọwa; Canva (n'efu) maka flaya; Google Sheets maka ire ahịa kwa izu; Google Docs maka iwu azụmahịa.",
            "Tupu ị kwụọ ụgwọ maka mgbanwe (upgrade) ọ bụla, jiri atụmatụ n'efu otu ọnwa ma dee ihe ị nweghị ike ime. Kwụọ ụgwọ naanị maka ihe ị chọrọ n'ezie, ma lelee ọnụahịa ya na weebụsaịtị nke ụlọ ọrụ nwe ngwa ahụ.",
            "Iwu nchekwa na-eso ngwa ọ bụla: etinyela nọmba kaadị ndị ahịa, okwuntughe ma ọ bụ ozi nzuzo; lelee eziokwu ọ bụla tupu ndị ahịa ahụ ya; jiri naanị foto na okwu i nwere ikike iji."
          ],
          steps: ["Depụta ngwa atọ ruo ise.", "Dee otu ọrụ maka nke ọ bụla.", "Dee \"n'efu\" ma ọ bụ atụmatụ ị na-akwụ ụgwọ ya.", "Dee otu iwu nchekwa maka nke ọ bụla.", "Jiri ngwa ọ bụla mee otu ezi ihe."],
          words: [["Ngwa mbido (toolkit)", "obere ndepụta ngwa ị na-eji na ihe nke ọ bụla bụ maka ya."], ["Mgbanwe (upgrade)", "atụmatụ a na-akwụ ụgwọ nwere ihe ndị ọzọ."]],
          slides: [
            { title: "Tebụl ngwa mbido gị", bullets: ["Ngwa | Ọrụ | Atụmatụ | Iwu nchekwa", "Ngwa atọ ruo ise ezuola"] },
            { title: "Tupu ị kwụọ ụgwọ", bullets: ["Jiri atụmatụ n'efu otu ọnwa", "Dee ihe ị nweghị ike ime", "Lelee ọnụahịa na weebụsaịtị nke ụlọ ọrụ nwe ngwa ahụ"] },
            { title: "Iwu maka ngwa ọ bụla", bullets: ["Enweghị nọmba kaadị, okwuntughe ma ọ bụ ozi nzuzo", "Lelee eziokwu tupu ndị ahịa ahụ ha", "Jiri naanị foto i nwere ikike iji"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee tebụl ngwa mbido gị, wee jiri ngwa ọ bụla mee otu ezi ihe: ozi nye onye ahịa, flaya ma ọ bụ post, na ndepụta ọnụahịa ma ọ bụ tebụl ire ahịa.",
          youCanNow: "ịhọrọ, ịhazi ma jiri obere ngwa AI ole na ole n'enweghị nsogbu maka azụmahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka tebụl ngwa mbido gị na-edepụta?", options: ["App ọ bụla dị n'ekwentị gị", "Ngwa, ọrụ, atụmatụ na iwu nchekwa", "Naanị ọnụahịa ngwa", "Aha ndị ahịa gị"], answer: 1, why: "Ahịrị ọ bụla na-ekwu ngwa ahụ, ọrụ ya, atụmatụ ya na iwu nchekwa ya." },
            { objective: "O6", q: "Otu ngwa na-enye mgbanwe (upgrade) a na-akwụ ụgwọ. Olee mgbe ị ga-akwụ ụgwọ ya?", options: ["Ozugbo, ka i wee nọrọ n'udo", "Ọ dịghị mgbe ọ bụla, n'ọnọdụ ọ bụla", "Mgbe enyi gị zụtara ya", "Mgbe ị chọrọ ihe atụmatụ n'efu enweghị"], answer: 3, why: "Kwụọ ụgwọ naanị mgbe atụmatụ n'efu enweghị ihe ị chọrọ n'ezie." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ngwa ọfịs na ngwa mbido gị",
        questions: [
          { objective: "O4", q: "App akwụkwọ gị enweghị enyemaka AI. Gịnị ka ị nwere ike ime?", options: ["Dee ya na ngwa enyemaka mkparịta ụka wee tinye ya", "Kwụsị", "Zụta kọmputa ọhụrụ", "Dee ya na Excel"], answer: 0, why: "Ihe e dere na ngwa enyemaka mkparịta ụka nwere ike ịbanye n'akwụkwọ ọ bụla." },
          { objective: "O4", q: "Onye kwesịrị ilele okwu iwu azụmahịa gbasara iwu?", options: ["Naanị AI", "Ọ dịghị onye", "Onye ahịa", "Ọkachamara ma ọ bụ isi iyi gọọmentị"], answer: 3, why: "Okwu gbasara iwu chọrọ ka ọkachamara lelee ya." },
          { objective: "O5", q: "Gịnị kwesịrị ime ngụkọta na tebụl ire ahịa gị?", options: ["Ihe AI chere", "Formula SUM na spreadsheet", "Mgbakọ n'isi", "Post soshal midia"], answer: 1, why: "Spreadsheet na-agụkọ nke ọma; AI na-akọwa." },
          { objective: "O6", q: "Tupu ị kwụọ ụgwọ maka mgbanwe AI, ị kwesịrị:", options: ["Iji atụmatụ n'efu ruo oge ụfọdụ ma dee ihe ị na-enweghị", "Ịkwụ ụgwọ ozugbo", "Ịjụ mgbasa ozi na-apụta na mberede", "Ịzụta atụmatụ ọ bụla"], answer: 0, why: "Kwụọ ụgwọ naanị maka ihe ị chọrọ n'ezie." },
          { objective: "O6", q: "Kedu nke bụ iwu nchekwa maka ngwa ọ bụla?", options: ["Tinye nọmba kaadị ka i chekwaa oge", "Kesaa okwuntughe gị na ngwa ahụ", "Etinyela nọmba kaadị ndị ahịa ma ọ bụ okwuntughe n'ime ya mgbe ọ bụla", "Jiri foto ọ bụla dị n'ịntanetị"], answer: 2, why: "Ozi nzuzo na-anọ n'èzí ngwa AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI Ndị Dị Mkpa maka Obere Azụmahịa",
    questions: [
      { objective: "O1", q: "ChatGPT, Copilot na Gemini bụ ọmụmaatụ nke:", options: ["Igwe ndekọ ego", "Ngwa enyemaka mkparịta ụka", "App nnyefe ngwaahịa", "Ụlọ akụ"], answer: 1, why: "Ha bụ ngwa enyemaka mkparịta ụka AI." },
      { objective: "O1", q: "Kedu ụdị ngwa kacha mma maka nhazi menu?", options: ["Temometa", "Igwe mgbakọ", "App ụlọ akụ", "Ngwa nhazi dị ka Canva"], answer: 3, why: "Ngwa nhazi na-eme menu na flaya." },
      { objective: "O1", q: "Ihe AI nwekwara ike ịpụta n'ime:", options: ["Ọ dịghị ebe ọzọ", "Naanị ihe egwuregwu ụmụaka", "Naanị igwe mbipụta", "App ndị ị na-eji ugbu a, dị ka sọftwia ndokwa oge ma ọ bụ POS"], answer: 3, why: "Ọtụtụ app azụmahịa na-etinye ihe AI." },
      { objective: "O2", q: "Na mkparịta ụka, olee mgbe ị na-enye ozi azụmahịa gị?", options: ["Ọ dịghị mgbe ọ bụla", "Otu ugboro na mbido", "Naanị na njedebe", "N'okwu ọ bụla"], answer: 1, why: "Ịhazi ha otu ugboro na-ekwe ka ị rịọ ọtụtụ ihe." },
      { objective: "O2", q: "\"Nye m ụdị atọ\" na-enyere gị aka:", options: ["Ịkwụ obere ụtụ isi", "Ihichapụ mkparịta ụka", "Ịhọrọ nhọrọ kacha mma", "Ịkesa okwuntughe"], answer: 2, why: "Nhọrọ na-ekwe ka ị họrọ." },
      { objective: "O2", q: "Template ozi ncheta kwesịrị iji:", options: ["\"[aha onye ahịa]\" dị ka ihe nnọchi", "Nọmba kaadị onye ahịa", "Okwuntughe gị", "Adreesị ezi onye ahịa"], answer: 0, why: "Ihe nnọchi na-ewepụ ozi nzuzo." },
      { objective: "O3", q: "Ebee ka ị na-elele ihe atụmatụ n'efu Canva gụnyere taa?", options: ["Echiche", "Edemede blọọgụ ochie", "canva.com", "Onye na-asọ mpi na gị"], answer: 2, why: "Weebụsaịtị nke ụlọ ọrụ ahụ nwere ozi atụmatụ nke ugbu a." },
      { objective: "O3", q: "Flaya doro anya nwere:", options: ["Otu isi ozi na otu e si enweta gị", "Ozi iri", "Obere okwu", "Enweghị aha azụmahịa"], answer: 0, why: "Ihe dị mfe a na-agụ nke ọma na-arụ ọrụ kacha mma." },
      { objective: "O3", q: "Kedu foto ị kwesịrị iji?", options: ["Foto ọ bụla dị n'ịntanetị", "Nke gị ma ọ bụ ndị i nwere ikike iji", "Nke onye na-asọ mpi na gị", "Foto ọ bụla si na soshal midia"], answer: 1, why: "Jiri naanị foto i nwere ikike iji." },
      { objective: "O4", q: "Google Docs na Microsoft Word bụ:", options: ["Naanị ngwa nhazi", "Ụlọ ọrụ ekwentị", "App ịkwụ ụgwọ", "Ngwa akwụkwọ"], answer: 3, why: "Ha bụ ngwa ide akwụkwọ." },
      { objective: "O4", q: "Ebee ka ụdị ikpeazụ e lelere nke iwu azụmahịa kwesịrị ịdị?", options: ["N'akwụkwọ gị (Docs ma ọ bụ Word)", "Naanị na mkparịta ụka AI", "N'obere mpempe akwụkwọ nrapado", "Ọ dịghị ebe"], answer: 0, why: "Akwụkwọ na-edebe ụdị ikpeazụ ị nwere ike ịkesa ma melite." },
      { objective: "O4", q: "Ezigbo ọrụ akwụkwọ maka enyemaka AI bụ:", options: ["Ịhọrọ ọka iwu", "Ịbịanye aka na nkwekọrịta n'ọnọdụ gị", "Itinye ụtụ isi", "Ndepụta mmeghe ụlọ ahịa"], answer: 3, why: "Ndepụta bụ ide ihe na-enweghị nnukwu ihe egwu." },
      { objective: "O5", q: "Spreadsheet bụ:", options: ["Ngwa enyemaka mkparịta ụka", "Template nhazi", "Igbe nwere ahịrị na kọlụm maka nọmba", "Ụlọ akụ"], answer: 2, why: "Sheets na Excel na-ahazi nọmba." },
      { objective: "O5", q: "=SUM(E2:E20) bụ ọmụmaatụ nke:", options: ["Prompt", "Formula", "Template", "Okwuntughe"], answer: 1, why: "Formula na-agụkọ ọnụ n'ime cell." },
      { objective: "O5", q: "AI kwuru na ihe kacha ree gị bụ tacos. Ị kwesịrị:", options: ["Ịgwa ndị ahịa", "Iche na o ziri ezi", "Ihichapụ spreadsheet", "Ịkwado ya na spreadsheet gị"], answer: 3, why: "Tụnyere ihe AI gụrụ na data gị." },
      { objective: "O5", q: "Tupu i tinye tebụl n'ngwa enyemaka mkparịta ụka, wepụ:", options: ["Aha ihe", "Ụbọchị", "Aha ndị ahịa na nọmba kaadị", "Ngụkọta"], answer: 2, why: "Ozi nzuzo na-anọ n'èzí." },
      { objective: "O6", q: "Ngwa ole ka ngwa mbido kwesịrị inwe?", options: ["Atọ ruo ise", "Iri ise", "Ọ dịghị", "Otu narị"], answer: 0, why: "Obere ndepụta ị na-eji n'ezie." },
      { objective: "O6", q: "Tebụl ngwa mbido gị na-edepụta:", options: ["Okwuntughe", "Ngwa, ọrụ, atụmatụ na iwu nchekwa", "Nọmba kaadị ndị ahịa", "Naanị ọnụahịa"], answer: 1, why: "Kọlụm anọ ndị ahụ na-eme ka ọ baa uru ma dịrị nchekwa." },
      { objective: "O6", q: "Olee mgbe ị ga-akwụ ụgwọ maka mgbanwe (upgrade)?", options: ["Mgbe niile n'ụbọchị mbụ", "Mgbe ị chọrọ ihe atụmatụ n'efu enweghị", "Mgbe mgbasa ozi kwuru", "Ọ dịghị mgbe ị ga-elele ọnụahịa"], answer: 1, why: "Kwụọ ụgwọ naanị maka ezi mkpa, mgbe i lelechara ọnụahịa." },
      { objective: "O6", q: "Kedu iwu dabara na ngwa AI ọ bụla?", options: ["Lelee eziokwu tupu ndị ahịa ahụ ha", "Kesaa okwuntughe ka i chekwaa oge", "Detuo foto ọ bụla", "Tụkwasị obi na nọmba ọ bụla"], answer: 0, why: "Ilele eziokwu na-echebe azụmahịa gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      5,
      7,
      9,
      10,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Tebụl ngwa mbido",
        objective: "O6",
        notYet: "Ngwa na-erughị atọ, ma ọ bụ ọrụ, atụmatụ ma ọ bụ iwu nchekwa na-efu efu.",
        meets: "Ngwa atọ ruo ise, nke ọ bụla nwere ọrụ, atụmatụ na iwu nchekwa.",
        exceeds: "Na-ekwu mgbe onye nwe azụmahịa ga-eche maka ịkwụ ụgwọ maka mgbanwe (upgrade)."
      },
      {
        name: "Ozi nye onye ahịa",
        objective: "O2",
        notYet: "Enweghị ozi, ma ọ bụ o nwere ozi ezi onye ahịa ma ọ bụ eziokwu ezighi ezi.",
        meets: "Ozi nye onye ahịa e lelere, nke e ji ngwa enyemaka mkparịta ụka mee, na-eji ihe nnọchi.",
        exceeds: "Onye nwe azụmahịa tụnyere ihe karịrị otu ụdị ma họrọ nke kacha mma."
      },
      {
        name: "Flaya ma ọ bụ post",
        objective: "O3",
        notYet: "Enweghị flaya, ma ọ bụ o nwere mperi ma ọ bụ foto i nweghị ikike iji.",
        meets: "Flaya ma ọ bụ post nwere otu isi ozi na ozi e ji akpọtụrụ gị, ebe e lelere okwu ọ bụla.",
        exceeds: "Na-eji foto nke onye nwe azụmahịa, ọ dịkwa njikere itinye n'ịntanetị ma ọ bụ ibipụta."
      },
      {
        name: "Ndepụta ọnụahịa ma ọ bụ tebụl ire ahịa",
        objective: "O5",
        notYet: "Enweghị tebụl, ma ọ bụ e ji aka dee ngụkọta.",
        meets: "Ndepụta ọnụahịa na Docs ma ọ bụ Word, ma ọ bụ tebụl ire ahịa nwere formula SUM.",
        exceeds: "E kwadoro na spreadsheet ahụ otu AI si gụọ tebụl ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa na-eji opekata mpe ngwa abụọ n'ime ngwa mbido ha kwa izu (nnyocha nsochi ụbọchị 30)",
      "Ndị nwe azụmahịa kwuru na ha chekwara oge ma ọ bụ ego site n'iji atụmatụ n'efu (nnyocha nsochi)",
      "Ndị nwe azụmahịa malitere ihe ọmụmụ obere azụmahịa Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ smartphone nwere ịntanetị (kọmputa dị mfe karị maka spreadsheet)",
      "Akaụntụ n'efu maka ngwa enyemaka mkparịta ụka, Canva, na Google Docs na Sheets ma ọ bụ Microsoft Word na Excel",
      "Ezi ozi azụmahịa: ọnụahịa, onyinye ma ọ bụ mmemme, na nọmba ire ahịa ma ọ bụ ngwaahịa nke izu ole na ole",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Aha atụmatụ na ihe ngwa na-eme na-agbanwe; meghee weebụsaịtị nke ụlọ ọrụ nwe ngwa ọ bụla ọnụ iji lelee atụmatụ n'efu ya ugbu a.",
      "Mee ka ndị nwe azụmahịa jiri aha ndị ahịa e chepụtara echepụta, na-enweghị nọmba kaadị, na tebụl na ozi omume.",
      "Spreadsheet bụ ihe ọhụrụ nye ọtụtụ ndị nwe azụmahịa; gosi otu formula SUM n'ihu ha tupu ọrụ Nkuzi 5.",
      "Zipu okwu gbasara iwu n'iwu azụmahịa nye ọkachamara ma ọ bụ isi iyi gọọmentị, SCORE ma ọ bụ Small Business Development Center.",
      "Jiri rubric tụọ akara ngwa mbido na ihe ndị e mere, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
