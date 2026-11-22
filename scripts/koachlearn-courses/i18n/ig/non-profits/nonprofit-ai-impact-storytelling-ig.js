"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-impact-storytelling.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-impact-storytelling-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-impact-storytelling",
  category: "Non Profits",
  name: "AI maka Ịkọ Akụkọ Mgbanwe n'Obodo",
  skills: "Inweta nkwenye ama ama, Ịnakọta akụkọ n'ugwu, Ịhazi akụkọ n'usoro dị mfe, Itinye nọmba eziokwu, Iji AI dee ma gbanwee akụkọ, Ịlele akụkọ maka eziokwu na nkwanye ugwu",
  outcome: "inweta nkwenye e dere ede site n'aka onye mmemme gị na-enyere aka, hazie akụkọ ya n'usoro dị mfe nwere otu nọmba eziokwu, jiri ngwa enyemaka AI dee ma gbanwee ya maka akwụkwọ ozi (newsletter), ozi soshal midia na akụkọ grant, ma lelee ya maka eziokwu na ugwu tupu i kesaa ya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ, ndị ọrụ afọ ofufo na ndị ndu n'ụlọ ọrụ na-anaghị achọ uru (nonprofit) na nke okpukpe, ndị na-egosi ndị na-enye onyinye, ndị na-enye ego (funders), ndị otu na ọha mgbanwe ọrụ ha na-eweta.",
    "Akụkọ na-akpali ndị mmadụ inye onyinye na inye aka, mana akụkọ ahụ bụ nke ndị nọ n'ime ya. Ị ga-amụta ịrịọ ikike n'ụzọ kwesịrị ekwesị, ịkọ akụkọ n'ugwu, iji nọmba eziokwu kwado ya, na iji AI (dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) dee ma gbanwee ya n'etinyeghị ozi nzuzo onye ọ bụla n'ime AI.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Were otu ezi akụkọ mmemme (nwere nkwenye e dere ede) ma ọ bụ akụkọ omume e chepụtara kpam kpam. Dee eziokwu ya n'usoro Tupu, Oge mgbanwe, Mgbe e mesịrị, ma tinye otu nọmba mmemme nke eziokwu. Jiri AI na ihe nnọchi dee akụkọ akwụkwọ ozi nwere okwu 150, ozi soshal midia nwere okwu 40 na paragraf akụkọ grant nwere okwu 100. Lelee ha atọ n'akwụkwọ nkwenye na ndepụta nlele ugwu, ma dozie ihe ọ bụla na-agafeghị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ, ndị ọrụ afọ ofufo na ndị ndu n'ụlọ ọrụ nonprofit na nke okpukpe, ndị na-egosi ndị na-enye onyinye, ndị na-enye ego, ndị otu na ọha mgbanwe ọrụ ha na-eweta.",
    startingPoint: "Ha na-anụ akụkọ dị ike site n'aka ndị ha na-enyere aka ma na-ekesa ụfọdụ n'akwụkwọ ozi ma ọ bụ na soshal midia. Ọtụtụ enweghị usoro nkwenye e dere ede, echebeghịkwa banyere ugwu n'okwu ha na-eji ma ọ bụ ihe egwu dị n'iji AI na ezi akụkọ.",
    gap: "Akụkọ na-akpali ndị na-enye onyinye na ndị na-enye ego, mana akụkọ e kesara na-enweghị nkwenye, nwere okwu ọmịiko ma ọ bụ ihe e chepụtara echepụta nwere ike imerụ onye ahụ ma mebie ntụkwasị obi ndị mmadụ nwere n'ụlọ ọrụ ahụ. Ndị na-amụ ihe chọrọ usoro n'enweghị nsogbu site na nkwenye ruo na nlele ikpeazụ, na-eji AI dee ma gbanwee akụkọ n'ekpugheghị onye ọ bụla.",
    constraints: [
      "Nkwenye ama ama e dere ede tupu e jiri akụkọ, foto ma ọ bụ okwu onye ọ bụla; nne na nna ma ọ bụ onye nlekọta maka ụmụaka",
      "E nwere akụkọ ndị a na-ekwesịghị ịkọ ọbụlagodi na e nwere nkwenye, dị ka nke ndị lanarịrị mmekpa ahụ ma ọ bụ ndị nọ n'okwu mbata (immigration)",
      "Nzuzo: enweghị aha zuru ezu, adreesị, ozi ahụike ma ọ bụ ndetu okwu (case notes) na ngwa AI",
      "A na-akpọ foto AI mere aha na ọ bụ AI mere ya, ọ naghị anọchikwa anya ezi ndị a na-enyere aka",
      "Oge: ihe dị ka nkeji 60 n'ozuzu, na nkuzi nkeji 5"
    ],
    prerequisites: "\"Mmalite AI maka Otu Na-adịghị Achọ Uru\", ma ọ bụ ụfọdụ ahụmịhe n'iji ngwa enyemaka AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Tupu i jiri akụkọ, foto ma ọ bụ okwu onye ọ bụla", action: "ịrịọ ma dekọọ nkwenye ama ama e dere ede, gụnyere ebe a ga-ekesa ya na otu ọ chọrọ ka a kpọọ aha ya", standard: "ma gwa onye ahụ na o nwere ike ịsị mba ma ọ bụ gbanwee obi ya n'atụfughị enyemaka ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị akụkọ mbụ (draft)", action: "idegharị ya ka onye ahụ bụrụ dike, na-eji okwu na-ebu mmadụ ụzọ na-enweghị okwu ọmịiko", standard: "ma hapụ ihe ndị nwere ike ime ka a mata ya ma ọ bụ mee ka ihere mee ya" },
    { id: "O3", condition: "Mgbe e nyere gị ndetu akụkọ", action: "ịhazi akụkọ ahụ dị ka Tupu, Oge mgbanwe, Mgbe e mesịrị, ma tinye otu nọmba mmemme nke eziokwu", standard: "ebe e si n'akwụkwọ ndekọ nke gị e lelere enweta nọmba ahụ" },
    { id: "O4", condition: "Mgbe e nyere gị ndetu akụkọ gị", action: "ide prompt AI nwere ihe nnọchi na ozi n'ozuzu iji nweta akụkọ mbụ", standard: "n'enweghị aha zuru ezu, adreesị, ozi ahụike ma ọ bụ ndetu okwu na prompt ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị otu akụkọ mbụ", action: "ịgbanwe ya ka ọ bụrụ akụkọ akwụkwọ ozi, ozi soshal midia na paragraf akụkọ grant", standard: "na-eji ụdị nke ọ bụla naanị ebe akwụkwọ nkwenye kwere" },
    { id: "O6", condition: "Tupu akụkọ apụta", action: "ịlele ya maka eziokwu, nkwenye, ugwu na nọmba, ma dozie ihe ọ bụla na-agafeghị", standard: "ebe ihe ọ bụla dabara na ndetu gị na akwụkwọ nkwenye" }
  ],
  chapters: [
    {
      name: "Isi 1: Akụkọ na-asọpụrụ ndị mmadụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nkwenye na-ebu ụzọ",
          minutes: 5,
          goal: "Rịọ ma dekọọ nkwenye ama ama tupu i jiri akụkọ, foto ma ọ bụ okwu onye ọ bụla.",
          text: [
            "Akụkọ mmadụ bụ nke ya. Tupu i kesaa ya, rịọ nkwenye ama ama: ọ ghọtara ihe ị ga-ekesa, ebe (akwụkwọ ozi, weebụsaịtị, soshal midia, akụkọ grant), ruo ogologo oge ole, na na o nwere ike ịsị mba ma ọ bụ gbanwee obi ya n'atụfughị enyemaka ọ bụla.",
            "Nweta nkwenye ahụ n'ederede site na fọm dị mfe, ma maka ụmụaka, nweta nkwenye nne ma ọ bụ nna ma ọ bụ onye nlekọta. Hapụ onye ahụ ka ọ họrọ: ezi aha ya, naanị aha mbụ ya, ma ọ bụ aha e gbanwere; foto ma ọ bụ enweghị foto. Dee ihe o kwere ma debe ya na akụkọ ahụ.",
            "E nwere akụkọ ndị a na-ekwesịghị ịkọ ọbụlagodi na e nwere nkwenye ma ọ bụrụ na ikesa ha nwere ike itinye onye ahụ n'ihe egwu, dịka ọmụmaatụ ndị lanarịrị mmekpa ahụ, ndị nọ n'okwu mbata (immigration) ma ọ bụ ndị na-agbake site n'iṅụ ọgwụ ike. Mgbe obi abụọ dị, jụọ onye isi gị (director). Ụlọ ọrụ gị nwere ike inwe fọm nkwenye nke ya; jiri ya. Jụọ ọka iwu ma ọ bụ otu na-elekọta ụlọ ọrụ ndị dị ka nke gị ma ọ bụrụ na ị chọrọ ka e nyochaa fọm."
          ],
          steps: ["Kọwaa ihe ị ga-ekesa, ebe na ruo ogologo oge ole.", "Mee ka o doo anya na o nwere ike ịsị mba n'atụfughị enyemaka ọ bụla.", "Hapụ ya ka ọ họrọ aha, foto na ihe ndị ọzọ.", "Nweta mbịanye aka (nne ma ọ bụ nna ma ọ bụ onye nlekọta maka ụmụaka).", "Debe fọm ahụ na akụkọ ahụ ma sọpụrụ ma ọ bụrụ na ọ gbanwere obi ya."],
          words: [["Nkwenye ama ama (informed consent)", "\"ee\" doro anya site n'aka onye ghọtara nke ọma otu a ga-esi jiri akụkọ ya."], ["Onye nlekọta (guardian)", "okenye iwu kwuru na ọ na-elekọta nwatakịrị."]],
          slides: [
            { title: "Akụkọ ahụ bụ nke ha", bullets: ["Rịọ tupu i kesaa", "Ịsị mba anaghị emetụta enyemaka ha mgbe ọ bụla"] },
            { title: "Nkwenye ama ama gụnyere", bullets: ["Ihe ị ga-ekesa", "Ebe na ruo ogologo oge ole", "Nhọrọ aha na foto", "Ikike ịgbanwe obi ha"] },
            { title: "Nweta ya n'ederede", bullets: ["Fọm dị mfe e bịanyere aka", "Nne ma ọ bụ nna ma ọ bụ onye nlekọta maka ụmụaka", "Debe ya na akụkọ ahụ"] },
            { title: "Mgbe ị na-agaghị ekesa", bullets: ["Ọ bụrụ na ikesa nwere ike itinye ha n'ihe egwu", "Mgbe obi abụọ dị, jụọ onye isi gị"] }
          ],
          tryIt: "Dee ndepụta nlele nkwenye nwere ahịrị ise maka ụlọ ọrụ gị: ihe, ebe, ogologo oge, nhọrọ aha na foto, na ikike ịsị mba. Tụnyere ya na fọm ọ bụla ụlọ ọrụ gị na-eji ugbu a.",
          youCanNow: "ịrịọ ma dekọọ nkwenye ama ama tupu i kesaa akụkọ mmadụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu nhọrọ aha e kwesịrị inye onye ahụ?", options: ["Ezi aha, naanị aha mbụ, ma ọ bụ aha e gbanwere", "Naanị aha iwu ya zuru ezu", "Naanị foto na-enweghị aha", "Ihe ọ bụla ndị ọrụ chọrọ"], answer: 0, why: "Hapụ onye ahụ ka ọ họrọ otu a ga-esi kpọọ aha ya, na ma a ga-eji foto." },
            { objective: "O1", q: "Nwanyị lanarịrị mmekpa ahụ chọrọ ikesa akụkọ ya, mana ikesa ya nwere ike itinye ya n'ihe egwu. Gịnị ka ị ga-eme?", options: ["Kesaa ya, ebe ọ kwere", "Jụọ onye isi gị, n'ihi na e nwere akụkọ a na-ekwesịghị ịkọ ọbụlagodi na e nwere nkwenye", "Kesaa ya na aha ya zuru ezu", "Tinye ya naanị na soshal midia"], answer: 1, why: "E nwere akụkọ a na-ekwesịghị ịkọ ọbụlagodi na e nwere nkwenye ma ọ bụrụ na ikesa ha nwere ike itinye onye ahụ n'ihe egwu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịkọ akụkọ n'ugwu",
          minutes: 5,
          goal: "Degharịa akụkọ ka onye ahụ bụrụ dike, ọ bụghị onye a na-emegbu.",
          text: [
            "Ugwu pụtara igosi ndị mmadụ dị ka ndị nwere ike, ndị nwere ike nke ha na nhọrọ nke ha, ọ bụghị dị ka ndị enweghị enyemaka ọ bụla. Onye ahụ bụ dike nke akụkọ ahụ; ụlọ ọrụ gị bụ onye na-enye aka.",
            "Jiri okwu na-ebu mmadụ ụzọ (\"nwoke na-enweghị ebe obibi ugbu a\", ọ bụghị \"onye enweghị ụlọ\"). Zere okwu ọmịiko dị ka \"ogbenye\", \"na-ata ahụhụ\" ma ọ bụ \"mebiri emebi\". Ekwubigala okwu ókè. Jiri okwu nke ya n'akara ntinye okwu mgbe o kwere.",
            "Hapụ ihe ndị na-adịghị mkpa nke nwere ike ime ka a mata ya ma ọ bụ mee ka ihere mee ya: adreesị ụlọ ya, ozi ahụike, nsogbu iwu, aha ụlọ akwụkwọ ụmụ ya."
          ],
          steps: ["Mee ka onye ahụ bụrụ onye isi na-eme ihe n'akụkọ ahụ.", "Jiri okwu na-ebu mmadụ ụzọ.", "Wepụ okwu ọmịiko na ikwubiga okwu ókè.", "Wepụ ihe ndị na-adịghị mkpa.", "Jiri okwu nke ya ma ọ bụrụ na o kwere."],
          words: [["Ugwu (dignity)", "igosi ndị mmadụ na nkwanye ugwu, dị ka ndị nwere ike nwere ike nke ha."], ["Okwu na-ebu mmadụ ụzọ", "ịkpọ mmadụ aha tupu ọnọdụ ya, dị ka \"nwanyị na-enweghị ebe obibi ugbu a\"."]],
          slides: [
            { title: "Onye ahụ bụ dike", bullets: ["Ha na-eme ihe ma na-ahọrọ", "Ụlọ ọrụ gị na-enye aka"] },
            { title: "Okwu dị mkpa", bullets: ["Mmadụ ụzọ: \"nwoke na-enweghị ebe obibi ugbu a\"", "Enweghị okwu ọmịiko: ogbenye, na-ata ahụhụ, mebiri emebi", "Enweghị ikwubiga okwu ókè"] },
            { title: "Hapụ", bullets: ["Adreesị ụlọ", "Ozi ahụike na nke iwu", "Aha ụlọ akwụkwọ ụmụaka"] }
          ],
          tryIt: "Degharịa ahịrịokwu a n'ugwu: \"Maria ogbenye, onye mebiri emebi, enweghị ụlọ, enweghịkwa enyemaka ọ bụla ruo mgbe anyị zọpụtara ya.\" Mee ka Maria bụrụ dike ma wepụ okwu ọmịiko.",
          youCanNow: "ide banyere ndị ị na-enyere aka n'ugwu na nkwanye ugwu.",
          quickCheck: [
            { objective: "O2", q: "N'akụkọ e dere n'ugwu, gịnị bụ ọrụ ụlọ ọrụ gị?", options: ["Dike", "Onye a na-emegbu", "Onye na-enye aka", "Onye ikpe"], answer: 2, why: "Onye ahụ bụ dike; ụlọ ọrụ gị bụ onye na-enye aka." },
            { objective: "O2", q: "Akụkọ mbụ kwuru \"Nwunye [Aha] ogbenye na-ata ahụhụ.\" Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-akpali ndị na-enye onyinye", "Tinyekwuo okwu ọmịiko", "Mee ka ọ dị ogologo", "Wepụ okwu ọmịiko ma gosi ike ya na nhọrọ ya"], answer: 3, why: "Zere okwu ọmịiko dị ka \"ogbenye\" na \"na-ata ahụhụ\"; gosi ndị mmadụ dị ka ndị nwere ike." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usoro akụkọ dị mfe na otu nọmba eziokwu",
          minutes: 5,
          goal: "Hazie akụkọ dị ka Tupu, Oge mgbanwe, Mgbe e mesịrị, ma tinye otu nọmba mmemme nke eziokwu.",
          text: [
            "Usoro dị mfe na-eme ka akụkọ dị mfe ịgbaso. Tupu: otu ndụ dị na ihe onye ahụ chọrọ. Oge mgbanwe: ihe o mere, site n'enyemaka mmemme gị. Mgbe e mesịrị: ihe gbanwere, n'ụzọ a pụrụ ịhụ anya.",
            "Wee tinye otu nọmba eziokwu iji gosi na akụkọ ahụ so n'ihe ka ukwuu: \"Maria bụ otu n'ime ndị nne na nna 84 mechara mmemme ọzụzụ ọrụ anyị n'afọ a.\" Jiri nọmba si n'akwụkwọ ndekọ nke gị, ma emela ka ọ karịa ma ọ bụ chee ya echiche.",
            "Akụkọ otu onye na-eme ka obi ndị mmadụ metụ; nọmba ahụ na-egosi ịdị ukwuu nke mgbanwe gị. Ndị na-enye ego chọrọ ha abụọ."
          ],
          steps: ["Dee Tupu: ndụ na ebumnuche.", "Dee Oge mgbanwe: ihe o mere site n'enyemaka gị.", "Dee Mgbe e mesịrị: mgbanwe a pụrụ ịhụ anya.", "Tinye otu nọmba eziokwu si n'akwụkwọ ndekọ gị.", "Lelee nọmba ahụ n'aka onye na-edebe data gị."],
          words: [["Mgbanwe (impact)", "ezi mgbanwe ọrụ gị na-eweta na ndụ ndị mmadụ."], ["Nsonaazụ (outcome)", "ihe si na ya pụta a pụrụ ịtụ, dị ka \"ndị nne na nna 84 mechara ọzụzụ\"."]],
          slides: [
            { title: "Tupu, Oge mgbanwe, Mgbe e mesịrị", bullets: ["Tupu: ndụ na ebumnuche", "Oge mgbanwe: ihe ha mere, enyemaka gị", "Mgbe e mesịrị: mgbanwe a pụrụ ịhụ anya"] },
            { title: "Tinye otu nọmba eziokwu", bullets: ["Site n'akwụkwọ ndekọ nke gị", "Emela ka ọ karịa, echekwala ya echiche"] },
            { title: "Ihe mere ha abụọ", bullets: ["Akụkọ ahụ na-eme ka obi ndị mmadụ metụ", "Nọmba ahụ na-egosi ịdị ukwuu nke mgbanwe"] }
          ],
          tryIt: "Site n'iji akụkọ nwere nkwenye ma ọ bụ akụkọ omume e chepụtara, dee ahịrị atọ dị mkpụmkpụ (Tupu, Oge mgbanwe, Mgbe e mesịrị) na otu nọmba eziokwu site na mmemme gị.",
          youCanNow: "ịhazi akụkọ n'usoro doro anya ma were nọmba eziokwu kwado ya.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-aba n'Oge mgbanwe?", options: ["Ihe onye ahụ mere, site n'enyemaka mmemme gị", "Adreesị onye ahụ", "Mmefu ego gị (budget)", "Ndepụta ndị na-enye onyinye"], answer: 0, why: "Oge mgbanwe bụ ihe ha mere, site n'enyemaka mmemme gị." },
            { objective: "O3", q: "Ị chere na ihe dị ka mmadụ 90 mechara mmemme ahụ, mana akwụkwọ ndekọ gị kwuru 84. Kedu nke ị ga-eji?", options: ["Ihe dị ka 90, ka ọ karịa", "84, site n'akwụkwọ ndekọ gị", "100, ka ọ dị ka ihe ukwuu", "Enweghị nọmba ọ bụla"], answer: 1, why: "Jiri nọmba si n'akwụkwọ ndekọ nke gị; emela ka ọ karịa, echekwala ya echiche." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Akụkọ na-asọpụrụ ndị mmadụ",
        questions: [
          { objective: "O1", q: "Gịnị ka ị ga-enwerịrị tupu i kesaa akụkọ onye ị na-enyere aka?", options: ["Ezigbo foto", "Nkwado onye na-enye onyinye", "Nkwenye ama ama ya", "Akụkọ mbụ AI dere"], answer: 2, why: "Akụkọ ahụ bụ nke onye ahụ; o kwesịrị ibu ụzọ kwenye." },
          { objective: "O1", q: "Onye ị na-enyere aka sịrị mba n'ikesa akụkọ ya. Gịnị na-eme enyemaka ya?", options: ["Ọ dịghị ihe gbanwere; ọ ka na-enweta enyemaka", "Ọ na-akwụsị", "A na-ebelata ya", "Ọ ga-akwụ ụgwọ"], answer: 0, why: "Nkwenye ga-abụrịrị n'efu; ịsị mba anaghị emetụta enyemaka mgbe ọ bụla." },
          { objective: "O2", q: "Kedu nke bụ okwu na-ebu mmadụ ụzọ?", options: ["\"onye enweghị ụlọ\"", "\"ndị enweghị ụlọ\"", "\"nwoke ogbenye mebiri emebi\"", "\"nwoke na-enweghị ebe obibi ugbu a\""], answer: 3, why: "Ọ na-akpọ mmadụ aha tupu ọnọdụ ya." },
          { objective: "O3", q: "N'usoro Tupu, Oge mgbanwe, Mgbe e mesịrị, gịnị na-aba na Mgbe e mesịrị?", options: ["Aha onye na-enye onyinye", "Mgbanwe a pụrụ ịhụ anya", "Adreesị ụlọ ọrụ ahụ", "Mmefu ego (budget)"], answer: 1, why: "Mgbe e mesịrị na-egosi ihe gbanwere." },
          { objective: "O3", q: "Kedu nọmba kwesịrị ekwesị iji?", options: ["Echiche nke dị ka ihe ukwuu", "Nọmba si n'akwụkwọ ndekọ nke gị, e lelere ya", "Nọmba e mere ka ọ karịa", "Nọmba AI chepụtara"], answer: 1, why: "Nọmba eziokwu na-esi n'akwụkwọ ndekọ nke gị e lelere." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI dee ma kesaa akụkọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI dee akụkọ n'enweghị nsogbu",
          minutes: 5,
          goal: "Jiri AI mee ndetu akụkọ gị ka ọ bụrụ akụkọ mbụ n'ekesaghị ozi nzuzo.",
          text: [
            "AI nwere ike ime ndetu Tupu, Oge mgbanwe, Mgbe e mesịrị gị ka ọ bụrụ akụkọ mbụ dị nro n'ime sekọnd ole na ole. Mana etinyela aha zuru ezu, adreesị, ozi ahụike ma ọ bụ ndetu okwu nke ezi mmadụ na ngwa AI mgbe ọ bụla. Ọtụtụ ngwa AI nwere ike idebe ihe ị dere.",
            "Jiri ihe nnọchi na ozi n'ozuzu: \"Dee akụkọ akwụkwọ ozi nwere okwu 150. [Aha], nne ma ọ bụ nna na-azụ ụmụ naanị ya, chọrọ ọrụ kwụsiri ike. O mechara ọzụzụ ọrụ anyị nke izu 10, ma ugbu a ọ na-arụ ọrụ dị ka onye enyemaka n'ọfịs ahụike. Ndị nne na nna 84 mechara mmemme ahụ n'afọ a. Okwu dị ọkụ n'obi, nwere nkwanye ugwu, na-ebu mmadụ ụzọ, na-enweghị okwu ọmịiko.\"",
            "Mgbe i nwetara akụkọ mbụ ahụ, tinye ezi ozi n'onwe gị, mana naanị ndị onye ahụ kwere n'akwụkwọ nkwenye."
          ],
          steps: ["Malite site na ndetu gị a haziri ahazi.", "Were ihe nnọchi dochie aha na ozi nzuzo.", "Rịọ maka ogologo, ụda okwu na okwu na-ebu mmadụ ụzọ.", "Rịọ maka otu mgbanwe ma ọ bụ abụọ.", "Tinye n'onwe gị naanị ezi ozi e kwere."],
          words: [["Ihe nnọchi (placeholder)", "ihe na-anọchi anya dị ka [Aha] nke ị ga-edochi ma emesịa."], ["Akụkọ mbụ (draft)", "ụdị mbụ ị ga-elele ma mee ka ọ ka mma."]],
          slides: [
            { title: "Etinyela ihe ndị a na AI", bullets: ["Aha zuru ezu na adreesị", "Ozi ahụike ma ọ bụ ndetu okwu", "Ozi gbasara ụmụaka"] },
            { title: "Prompt akụkọ n'enweghị nsogbu", bullets: ["Ihe nnọchi dị ka [Aha]", "Ndetu Tupu, Oge mgbanwe, Mgbe e mesịrị gị", "Ogologo, ụda okwu, okwu na-ebu mmadụ ụzọ"] },
            { title: "Mgbe akụkọ mbụ gasịrị", bullets: ["Tinye naanị ozi ha kwere", "Lelee ya n'akwụkwọ nkwenye"] }
          ],
          tryIt: "Mee ndetu gị site na Nkuzi 3 ka ọ bụrụ prompt n'enweghị nsogbu nwere ihe nnọchi, ma rịọ AI ka o dee akụkọ akwụkwọ ozi nwere okwu 150. Rịọ maka otu mgbanwe, wee tinye naanị ozi e kwere.",
          youCanNow: "iji AI dee akụkọ mgbanwe ma na-echebe nzuzo onye ahụ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere ị ga-eji wepụ ezi aha na ndetu okwu na ngwa AI?", options: ["AI anaghị agụ aha", "Ọ na-eme ka akụkọ dị ogologo", "Ọtụtụ ngwa AI nwere ike idebe ihe ị dere", "AI na-ede naanị na mkpụrụ akwụkwọ ukwu"], answer: 2, why: "Ọtụtụ ngwa AI nwere ike idebe ihe ị dere." },
            { objective: "O4", q: "Onye ahụ kwere ka e kesaa aha mbụ ya mana ọ bụghị ọrụ ya. Gịnị ka ị ga-etinye n'akụkọ mbụ AI dere?", options: ["Aha ya zuru ezu na ọrụ ya", "Adreesị ya", "Ọ dịghị ihe ọ bụla", "Naanị aha mbụ ya"], answer: 3, why: "Tinye naanị ezi ozi onye ahụ kwere n'akwụkwọ nkwenye." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịgbanwe otu akụkọ maka ndị na-agụ ya dị iche iche",
          minutes: 5,
          goal: "Mee otu akụkọ ka ọ bụrụ akụkọ akwụkwọ ozi, ozi soshal midia na paragraf akụkọ grant.",
          text: [
            "Ndị na-agụ ihe dị iche iche chọrọ ụdị dị iche iche. Ndị na-enye onyinye na-agụ akwụkwọ ozi chọrọ okwu dị ọkụ n'obi na ụzọ ha ga-esi nye aka. Soshal midia chọrọ okwu dị mkpụmkpụ na otu ihe doro anya a ga-eme. Akụkọ grant chọrọ eziokwu, nsonaazụ na otu ego onye na-enye ego si nye aka.",
            "Rịọ AI ka ọ gbanwee akụkọ mbụ ahụ: \"Mee akụkọ a ka ọ bụrụ ozi soshal midia nwere okwu 40 nwere otu oku ime ihe (call to action), na paragraf akụkọ grant nwere okwu 100 na-ekwu nsonaazụ na nọmba ahụ.\" Jiri akụkọ ahụ naanị n'ebe onye ahụ kwere.",
            "Foto AI mere ekwesịghị ime ka ọ bụ ezi ndị ị na-enyere aka mgbe ọ bụla. Ọ bụrụ na i jiri foto AI mere, dee na ọ bụ AI mere ya, ejikwala ya nọchite anya ezi onye ị na-enyere aka."
          ],
          steps: ["Lelee akwụkwọ nkwenye maka ebe i nwere ike ikesa.", "Rịọ AI maka ụdị soshal midia dị mkpụmkpụ nwere otu ihe a ga-eme.", "Rịọ AI maka ụdị akụkọ grant nwere nsonaazụ na nọmba ahụ.", "Tụnyere ụdị ndị ahụ maka eziokwu.", "Dee na foto ọ bụla AI mere bụ AI mere ya."],
          words: [["Ndị na-agụ (audience)", "ndị ga-agụ ma ọ bụ hụ ihe ị kesara."], ["Akụkọ grant", "akụkọ e zigara onye na-enye ego na-egosi ihe ego ya rụrụ."]],
          slides: [
            { title: "Otu akụkọ, ụdị atọ", bullets: ["Akwụkwọ ozi: ọkụ n'obi, ụzọ inye aka", "Soshal midia: mkpụmkpụ, otu ihe a ga-eme", "Akụkọ grant: eziokwu na nsonaazụ"] },
            { title: "Naanị ebe ha kwere", bullets: ["Buru ụzọ lelee akwụkwọ nkwenye", "Ee maka weebụsaịtị apụtaghị ee maka soshal midia"] },
            { title: "Foto AI", bullets: ["Emela ka ha gosi ezi ndị ị na-enyere aka", "Dee na ọ bụ AI mere foto ahụ"] }
          ],
          tryIt: "Rịọ AI ka ọ gbanwee akụkọ akwụkwọ ozi gị ka ọ bụrụ ozi soshal midia nwere okwu 40 na paragraf akụkọ grant nwere okwu 100. Lelee na akwụkwọ nkwenye kwere ebe ọ bụla.",
          youCanNow: "ịgbanwe otu akụkọ maka ndị na-enye onyinye, soshal midia na ndị na-enye ego.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ndị na-enye onyinye na-agụ akwụkwọ ozi chọrọ?", options: ["Okwu dị ọkụ n'obi na ụzọ inye aka", "Tebụl mmefu ego", "Okwu iwu", "Naanị nọmba"], answer: 0, why: "Ndị na-enye onyinye na-agụ akwụkwọ ozi chọrọ okwu dị ọkụ n'obi na ụzọ inye aka." },
            { objective: "O5", q: "I nweghị foto ezi onye ahụ, ya mere AI mere foto ezinụlọ na-amụmụ ọnụ ọchị. Kedu otu ị ga-esi jiri ya?", options: ["Kwuo na ọ bụ ezinụlọ i nyeere aka", "Dee na ọ bụ AI mere ya, egosikwala ya dị ka ezi onye ị na-enyere aka", "Jiri ya n'edeghị ihe ọ bụla", "Dee aha onye ahụ n'okpuru ya"], answer: 1, why: "A ga-ede na ọ bụ AI mere foto ahụ, ọ gaghịkwa anọchite anya ezi onye ị na-enyere aka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịlele akụkọ tupu ọ pụta",
          minutes: 5,
          goal: "Jiri obere ndepụta nlele chọpụta mperi, ihe e chepụtara echepụta na nsogbu ugwu.",
          text: [
            "AI na-etinye mgbe ụfọdụ ihe na-abụghị eziokwu: nwatakịrị ọzọ, aha ọrụ onye ahụ enwetụbeghị, okwu ọ na-ekwughị. Ihe ndị a nwere ike imerụ onye ahụ ma mebie ntụkwasị obi ndị mmadụ nwere n'ụlọ ọrụ gị.",
            "Tupu i kesaa, lelee: Eziokwu (ọ bụ ihe niile bụ eziokwu, ha dịkwa na ndetu gị?), Nkwenye (e kwere ihe ọ bụla na ebe ọ bụla?), Ugwu (onye ahụ ọ bụ dike, nwere okwu na-ebu mmadụ ụzọ?), na Nọmba (nọmba ahụ ọ si n'akwụkwọ ndekọ gị?). Ọ bụrụ na ị nwere ike, hapụ onye ahụ ka ọ gụọ akụkọ ya tupu ọ pụta.",
            "Debe otu nnomi nke ụdị ikpeazụ na akwụkwọ nkwenye, ma wepụ akụkọ ahụ ma ọ bụrụ na onye ahụ rịọrọ."
          ],
          steps: ["Eziokwu: tụnyere ihe ọ bụla na ndetu gị; wepụ ihe ọ bụla AI tinyere.", "Nkwenye: lelee ihe ọ bụla na ebe ọ bụla n'akwụkwọ nkwenye.", "Ugwu: dike, okwu na-ebu mmadụ ụzọ, enweghị ọmịiko.", "Nọmba: kwado ya site n'akwụkwọ ndekọ gị.", "Hapụ onye ahụ ka ọ gụọ ya ma ọ bụrụ na ị nwere ike, wee debe ya na akwụkwọ nkwenye."],
          words: [["Ihe e chepụtara echepụta (fabrication)", "ihe e chepụtara nke e gosiri dị ka eziokwu."], ["Ndepụta nlele (checklist)", "ndepụta ihe ị na-elele oge ọ bụla."]],
          slides: [
            { title: "AI nwere ike itinye ihe na-abụghị eziokwu", bullets: ["Ndị mmadụ ma ọ bụ ihe omume ọzọ", "Aha ọrụ ma ọ bụ okwu a na-ekwughị"] },
            { title: "Nlele anọ", bullets: ["Eziokwu", "Nkwenye", "Ugwu", "Nọmba"] },
            { title: "Mechaa nke ọma", bullets: ["Hapụ onye ahụ ka ọ gụọ ya ma ọ bụrụ na ị nwere ike", "Debe ya na akwụkwọ nkwenye", "Wepụ ya ma ọ bụrụ na ha rịọrọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: were ụdị atọ gị (akwụkwọ ozi, ozi soshal midia, paragraf grant) gafee nlele anọ ahụ. Dozie ihe ọ bụla na-agafeghị ma dee ihe ị gbanwere.",
          youCanNow: "ịlele akụkọ mgbanwe maka eziokwu, nkwenye, ugwu na nọmba eziokwu tupu i kesaa ha.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ otu n'ime nlele anọ tupu i kesaa?", options: ["Ogologo", "Ụdị mkpụrụ akwụkwọ (font)", "Nkwenye", "Agba"], answer: 2, why: "Nlele anọ ahụ bụ Eziokwu, Nkwenye, Ugwu na Nọmba." },
            { objective: "O6", q: "Otu ezinụlọ rịọrọ gị ka i wepụ akụkọ ha otu ọnwa mgbe e tinyere ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ha bịanyere aka na fọm ahụ", "Rịọ ha ka ha kwụọ ụgwọ ka e wepụ ya", "Gbanwee otu okwu", "Wepụ akụkọ ahụ"], answer: 3, why: "Wepụ akụkọ ahụ ma ọ bụrụ na onye ahụ rịọrọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI dee ma kesaa akụkọ",
        questions: [
          { objective: "O4", q: "Gịnị dị mma itinye na prompt akụkọ AI?", options: ["Ndetu okwu onye ị na-enyere aka", "Adreesị ụlọ ya", "Akwụkwọ ndekọ ahụike ya", "Ihe nnọchi na ozi n'ozuzu"], answer: 3, why: "Ihe nnọchi na-eme ka ozi nzuzo ghara ịbanye na AI." },
          { objective: "O5", q: "Akwụkwọ nkwenye kwere weebụsaịtị mana ọ kweghị soshal midia. Gịnị ka ị ga-eme?", options: ["Jiri akụkọ ahụ naanị na weebụsaịtị", "Tinye ya na soshal midia n'agbanyeghị", "Jụọ AI", "Gbanwee aha ma tinye ya ebe niile"], answer: 0, why: "Kesaa naanị ebe onye ahụ kwere." },
          { objective: "O6", q: "AI tinyere okwu onye ahụ na-ekwughị. Gịnị ka ị ga-eme?", options: ["Hapụ ya, ọ dị mma ịnụ", "Tinyekwuo okwu ndị ọzọ", "Wepụ ya", "Jụọ onye na-enye onyinye"], answer: 2, why: "Ihe e chepụtara echepụta na-emebi ntụkwasị obi, a ga-ewepụrịrị ha." },
          { objective: "O5", q: "Kedu ụdị chọrọ nsonaazụ na otu ego onye na-enye ego si nye aka?", options: ["Ozi soshal midia", "Mpempe akwụkwọ mgbasa ozi mmemme", "Kaadị ekele", "Akụkọ grant"], answer: 3, why: "Ndị na-enye ego chọrọ nsonaazụ jikọrọ na enyemaka ha." },
          { objective: "O5", q: "Kedu otu e kwesịrị isi jiri foto AI mere?", options: ["Gosi ya dị ka ezi onye a na-enyere aka", "Zoo ya n'azụ", "Dee na ọ bụ AI mere ya, ọ naghịkwa anọchite anya ezi onye a na-enyere aka", "Jiri ya maka nkwenye"], answer: 2, why: "Foto AI ekwesịghị ime ka ọ bụ ezi ndị ị na-enyere aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịkọ Akụkọ Mgbanwe n'Obodo",
    questions: [
      { objective: "O1", q: "Onye nwe akụkọ onye a na-enyere aka?", options: ["Ụlọ ọrụ ahụ", "Onye a na-enyere aka", "Onye na-enye onyinye", "Ngwa AI"], answer: 1, why: "Ọ bụ ndụ ya na akụkọ ya." },
      { objective: "O1", q: "Nkwenye ama ama pụtara na onye ahụ ghọtara:", options: ["Ihe ị ga-ekesa, ebe na ruo ogologo oge ole", "Naanị na a ga-ese foto", "Ọ dịghị ihe; mbịanye aka zuru ezu", "Mmefu ego ụlọ ọrụ ahụ"], answer: 0, why: "Nkwenye bụ nke ama ama naanị mgbe ha maara otu a ga-esi jiri ya." },
      { objective: "O1", q: "Maka akụkọ nwatakịrị, onye na-enye nkwenye?", options: ["Onye nkuzi nwatakịrị ahụ", "Onye ọrụ afọ ofufo", "Nne ma ọ bụ nna ma ọ bụ onye nlekọta", "Ọ dịghị onye"], answer: 2, why: "Nne ma ọ bụ nna ma ọ bụ onye nlekọta ga-ekwerịrị maka nwatakịrị." },
      { objective: "O1", q: "Onye kwere n'ọnwa gara aga na-arịọ ugbu a ka i wepụ akụkọ ya. Ị ga:", options: ["Wepụ ya", "Jụ", "Rịọ ya ka ọ kwụọ ụgwọ", "Mee ka ọ dị mkpụmkpụ"], answer: 0, why: "Ndị mmadụ nwere ike ịgbanwe obi ha." },
      { objective: "O1", q: "Olee mgbe a na-agaghị ekesa akụkọ ọbụlagodi na e nwere nkwenye?", options: ["Mgbe ọ dị mkpụmkpụ nke ukwuu", "Mgbe ọ bụ ụbọchị Mọnde", "Ọ dịghị mgbe", "Mgbe ikesa ya nwere ike itinye onye ahụ n'ihe egwu"], answer: 3, why: "Nchekwa na-ebu ụzọ tupu ezigbo akụkọ." },
      { objective: "O2", q: "N'akụkọ e dere n'ugwu, dike bụ:", options: ["Ụlọ ọrụ ahụ", "Onye ị na-enyere aka", "Onye na-enye onyinye", "AI"], answer: 1, why: "Onye ahụ na-eme ihe ma na-ahọrọ; ị na-enye aka." },
      { objective: "O2", q: "Kedu okwu ị kwesịrị izere?", options: ["\"mechara\"", "\"mebiri emebi\"", "\"họọrọ\"", "\"malitere\""], answer: 1, why: "\"Mebiri emebi\" bụ okwu ọmịiko." },
      { objective: "O2", q: "Kedu ihe a na-ahapụkarị?", options: ["Mgbanwe a pụrụ ịhụ anya", "Mmemme o sonyere", "Ebumnuche ya", "Adreesị ụlọ ya"], answer: 3, why: "Adreesị nwere ike ime ka a mata ndị mmadụ ma ọ bụ tinye ha n'ihe egwu." },
      { objective: "O3", q: "Akụkụ atọ nke usoro akụkọ ahụ bụ:", options: ["Tupu, Oge mgbanwe, Mgbe e mesịrị", "Isiokwu, Akara (logo), Arịrịọ", "Aha, Adreesị, Ekwentị", "Nsogbu, Ọnụ ahịa, Uru"], answer: 0, why: "Usoro dị mfe a dị mfe ịgbaso." },
      { objective: "O3", q: "Gịnị mere a ga-eji tinye otu nọmba eziokwu?", options: ["Ka ọ dị ogologo", "N'ihi na AI chọrọ ya", "Iji gosi na akụkọ ahụ so na mgbanwe ka ukwuu", "Iji dochie nkwenye"], answer: 2, why: "Nọmba ahụ na-egosi ịdị ukwuu nke mgbanwe gị." },
      { objective: "O3", q: "Ebee ka nọmba mmemme gị kwesịrị isi?", options: ["Echiche", "AI", "Weebụsaịtị onye asọmpi gị", "Akwụkwọ ndekọ nke gị e lelere"], answer: 3, why: "Nọmba eziokwu na-esi n'akwụkwọ ndekọ gị." },
      { objective: "O4", q: "Kedu prompt dị mma?", options: ["\"Maria Lopez, 123 Main St, a chọpụtara na o nwere...\"", "\"Lee ndetu okwu ya...\"", "\"[Aha], nne ma ọ bụ nna na-azụ ụmụ naanị ya, mechara ọzụzụ anyị ma ugbu a ọ na-arụ ọrụ n'ọfịs ahụike.\"", "\"Lee ụlọ akwụkwọ nwa ya...\""], answer: 2, why: "Ọ na-eji ihe nnọchi, o nweghịkwa ozi nzuzo." },
      { objective: "O4", q: "Mgbe AI dechara akụkọ mbụ, kedu ezi ozi ị ga-etinye?", options: ["Ozi niile ị maara", "Naanị ndị onye ahụ kwere", "Nọmba ekwentị ya", "Ihe ọ bụla AI tụrụ aro"], answer: 1, why: "Akwụkwọ nkwenye na-akpa oke ihe ị ga-ekesa." },
      { objective: "O5", q: "Ụdị soshal midia kwesịrị ịbụ:", options: ["Mkpụmkpụ nwere otu ihe doro anya a ga-eme", "Ogologo dị ka akụkọ grant", "Jupụtara n'ozi okwu", "Na-enweghị arịrịọ ọ bụla"], answer: 0, why: "Ozi mkpụmkpụ nwere otu ihe a ga-eme na-arụ ọrụ kacha mma." },
      { objective: "O5", q: "Ụdị akụkọ grant na-elekwasị anya na:", options: ["Njakịrị", "Okwu ọmịiko", "Eziokwu, nsonaazụ na otu ego ahụ si nye aka", "Adreesị onye ahụ"], answer: 2, why: "Ndị na-enye ego chọrọ nsonaazụ." },
      { objective: "O5", q: "Tupu i tinye akụkọ na soshal midia, lelee:", options: ["Na akwụkwọ nkwenye kwere soshal midia", "Naanị nsụpe okwu", "Ihu igwe", "Ndepụta ndị na-enye onyinye"], answer: 0, why: "Nkwenye na-ekpuchi ebe ọ bụla iche iche." },
      { objective: "O5", q: "E dere n'okpuru foto AI mere nke ezinụlọ na-amụmụ ọnụ ọchị \"ezinụlọ anyị nyeere aka\". Nke a bụ:", options: ["Ọ dị mma", "Ọ dị mkpa", "Ọ ka foto ezi mmadụ mma", "Ọ na-eduhie ndị mmadụ; dee na ọ bụ AI mere ya, egosikwala ya dị ka ezi onye a na-enyere aka"], answer: 3, why: "Foto AI ekwesịghị ime ka ọ bụ ezi ndị a na-enyere aka." },
      { objective: "O6", q: "Kedu nke bụ otu n'ime nlele anọ ahụ?", options: ["Ọsọ", "Eziokwu", "Ọnụ ahịa", "Ụdị mkpụrụ akwụkwọ (font)"], answer: 1, why: "Eziokwu, Nkwenye, Ugwu na Nọmba bụ nlele anọ ahụ." },
      { objective: "O6", q: "AI dere na onye ahụ \"nwere ụmụ atọ\" mana ndetu gị kwuru otu. Ị ga:", options: ["Hapụ ya", "Dozie ya ka o kwekọọ na ndetu gị", "Jụọ AI ọzọ ma tụkwasị ya obi", "Wepụ nkwenye onye ahụ"], answer: 1, why: "Ihe ọ bụla ga-ekwekọrịrị na ndetu gị." },
      { objective: "O6", q: "Ebee ka ị na-edebe akụkọ ikpeazụ?", options: ["Naanị na mkparịta ụka AI", "Ọ dịghị ebe", "Na draịv ọha", "Ya na akwụkwọ nkwenye e bịanyere aka"], answer: 3, why: "Idebe ha ọnụ na-egosi ihe e kwere." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 5, 8, 11, 14, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nkwenye", objective: "O1", notYet: "Enweghị nkwenye e dere ede maka ezi akụkọ, ma ọ bụ e jiri ozi a na-ekweghị.", meets: "Nkwenye e dere ede, ma ọ bụ akụkọ omume e chepụtara kpam kpam, ebe e dekọrọ aha na ebe a ga-ekesa ya.", exceeds: "Onye ahụ gụrụ akụkọ ya tupu ọ pụta." },
      { name: "Usoro na nọmba", objective: "O3", notYet: "Otu akụkụ akụkọ adịghị, ma ọ bụ e chere nọmba ahụ echiche.", meets: "Tupu, Oge mgbanwe na Mgbe e mesịrị, gbakwunye otu nọmba si n'akwụkwọ ndekọ e lelere.", exceeds: "Akụkụ Mgbe e mesịrị na-egosi mgbanwe a pụrụ ịhụ anya n'okwu onye ahụ n'onwe ya, site n'ikike ya." },
      { name: "Prompt AI n'enweghị nsogbu", objective: "O4", notYet: "Prompt ahụ nwere aha zuru ezu, adreesị, ozi ahụike ma ọ bụ ndetu okwu.", meets: "Prompt na-eji naanị ihe nnọchi na ozi n'ozuzu.", exceeds: "Ọ na-arịọ AI maka okwu na-ebu mmadụ ụzọ na-enweghị okwu ọmịiko." },
      { name: "Ụdị atọ", objective: "O5", notYet: "Otu ụdị adịghị, ma ọ bụ e jiri ya ebe nkwenye na-ekweghị.", meets: "Akwụkwọ ozi nwere ihe dị ka okwu 150, ozi soshal midia nwere okwu 40 na paragraf grant nwere okwu 100, nke ọ bụla ebe nkwenye kwere.", exceeds: "Ụdị ọ bụla dabara ndị na-agụ ya: ọkụ n'obi, otu ihe a ga-eme, ma ọ bụ nsonaazụ na ego." },
      { name: "Nlele ikpeazụ", objective: "O6", notYet: "Ihe na-abụghị eziokwu, okwu ọmịiko ma ọ bụ nọmba e leleghị ka dị.", meets: "Ha atọ gafere Eziokwu, Nkwenye, Ugwu na Nọmba.", exceeds: "Ọ na-edepụta ihe e dozịrị ma debe nnomi ikpeazụ ya na akwụkwọ nkwenye." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ụlọ ọrụ ndị malitere iji fọm nkwenye akụkọ e dere ede n'ime ụbọchị 60 (nnyocha nsochi)",
      "Akụkọ e kesara n'akwụkwọ ozi, soshal midia ma ọ bụ akụkọ grant nwere nkwenye e debere",
      "Ndị na-amụ ihe malitere ihe ọmụmụ nonprofit ọzọ nke Koach Learn n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu",
      "Fọm nkwenye ụlọ ọrụ gị, ma ọ bụ fọm ọmụmaatụ dị mfe",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Jiri akụkọ omume e chepụtara kpam kpam na klas belụsọ na ezi akụkọ nwere nkwenye e dere ede.",
      "Meenụ omume otu ebe a na-edegharị okwu ọmịiko ka ọ bụrụ okwu na-ebu mmadụ ụzọ.",
      "Bute fọm nkwenye ụlọ ọrụ ahụ ka ndị na-amụ ihe nwee ike ịtụnyere ụdị ọ bụla na ihe e kwere.",
      "Chetara ndị na-amụ ihe ka ha jụọ onye isi ha tupu ha akọọ akụkọ ndị mmadụ nwere ike ịbanye n'ihe egwu.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
