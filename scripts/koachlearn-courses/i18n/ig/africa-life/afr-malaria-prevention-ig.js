"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-malaria-prevention.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const WHO_MALARIA = { name: "Òtù Ahụike Ụwa (WHO): Akwụkwọ eziokwu gbasara ịba (otu o si agbasa, ihe ịrịba ama, ihe ịdọ aka na ntị, net, ịgba ọgwụ, ọgwụ mgbochi, vaksin, nnwale)", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" };
const CDC_MALARIA = { name: "CDC: Banyere ịba (anwụnta na-ata n'abalị, ihe ịrịba ama, gaa nweta enyemaka ngwa ngwa)", url: "https://www.cdc.gov/malaria/about/index.html" };
const WHO_WATER = { name: "Òtù Ahụike Ụwa (WHO): Akwụkwọ eziokwu gbasara mmiri ọṅụṅụ (ite mmiri n'ụlọ bụ ebe anwụnta na-amụ; kpuchie ha)", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };

module.exports = {
  id: "afr-malaria-prevention-ig",
  lang: "ig",
  translationOf: "afr-malaria-prevention",
  category: "Africa: Life and Work",
  name: "Igbochi Ịba n'Ezinụlọ Gị",
  skills: "Ịmara otu ịba si agbasa na ndị ọ na-atụ egwu karịa, Ihi ụra n'okpuru net e tinyere ọgwụ kwa abalị, Ibelata anwụnta gburugburu ụlọ, Iji ọrụ ụlọọgwụ maka ndị inyom dị ime na ụmụaka, Ime nnwale maka ahụ ọkụ ọ bụla n'otu ụbọchị ahụ, Ịmata ihe ịdọ aka na ntị nke ịba siri ike",
  outcome: "ichebe ezinụlọ gị pụọ n'ịba: ihi ụra n'okpuru net e tinyere ọgwụ kwa abalị, ibelata anwụnta gburugburu ụlọ gị, iji ọrụ ụlọọgwụ maka ndị inyom dị ime na ụmụntakịrị, ime ka a nwalee ahụ ọkụ ọ bụla n'otu ụbọchị ahụ, na ịmata ihe ịdọ aka na ntị na-egosi na ị ga-aga ụlọọgwụ ugbu a.",
  about: [
    "Ọ bụ ata anwụnta na-agbasa ịba, Afrịka nwekwara ọtụtụ n'ime ndị ọ na-arịa na ndị ọ na-egbu n'ụwa. WHO kwuru na n'afọ 2024, mpaghara Afrịka nke WHO nwere ihe dị ka 95% nke ndị ịba rịara na ndị ọ gburu n'ụwa niile, na ụmụaka na-erubeghị afọ 5 bụ ihe dị ka atọ n'ime anọ ọ bụla n'ime ndị nwụrụ n'ebe ahụ. Enwere ike igbochi ịba, a pụkwara ịgwọ ya mgbe a chọpụtara ya n'oge. Ihe ọmụmụ a bụ maka ndị nne, ndị nna, nne na nna ochie, ndị na-elekọta ụmụaka na ndị ntorobịa na Naịjirịa, DR Congo, Kenya, Ghana, Burkina Faso, Mali, Cameroon na Afrịka niile.",
    "Ị ga-amụta otu ịba si agbasa na ndị ọ na-atụ egwu karịa, otu esi akwụnye ma lekọta net e tinyere ọgwụ, otu esi ebelata ebe anwụnta na-amụ ma na-ata gburugburu ụlọ gị, ọrụ ụlọọgwụ ndị na-echebe ndị inyom dị ime na ụmụntakịrị, otu esi eme ka a nwalee ahụ ọkụ ọ bụla n'otu ụbọchị ahụ, na otu esi amata ihe ịdọ aka na ntị nke ịba siri ike.",
    "Ihe ọmụmụ a na-akụzi mgbochi na mgbe ị ga-achọ enyemaka. Ọ naghị agwa gị ọgwụ ị ga-aṅụ ma ọ bụ ole: ọ bụ naanị onye ọrụ ahụike nwere ike ịnwale maka ịba ma kpebie ọgwụgwọ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\", ha niile ọnụ na-ewulite atụmatụ ịba nke ezinụlọ gị."
  ],
  finalTask: "Mee atụmatụ ịba nke ezinụlọ gị n'otu peeji: ndị nọ n'ụlọ gị ọ na-atụ egwu karịa; net e tinyere ọgwụ ole i nwere na ole ị chọrọ, ebe onye ọ bụla na-ehi ụra n'okpuru otu, na otu ị ga-esi lekọta ha; ihe atọ ị ga-eme iji belata anwụnta gburugburu ụlọ gị; nleta ụlọọgwụ e mere atụmatụ maka nwanyị ọ bụla dị ime ma ọ bụ nwatakịrị ọ bụla; ihe ị ga-eme n'otu ụbọchị ahụ mgbe onye ọ bụla nwere ahụ ọkụ; na kaadị ihe ịdọ aka na ntị nwere aha na nọmba ekwentị nke ụlọọgwụ kacha nso gị ma ọ bụ onye ọrụ ahụike obodo.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nne, ndị nna, nne na nna ochie, ndị na-elekọta ụmụaka na ndị ntorobịa na Afrịka niile, karịsịa n'ebe ịba juru, n'obodo nta, n'obodo mepere emepe na n'ebe obibi ndị ogbenye. Ọtụtụ n'ime ha arịala ịba n'onwe ha, ha na-elekọtakwa ụmụntakịrị ma ọ bụ onye ezinụlọ dị ime.",
    startingPoint: "Ha maara na anwụnta na-ebute ịba, ọtụtụ nwekwara net. Mana a naghị eji net kwa abalị ma ọ bụ onye ọ bụla, net nwere oghere, mmiri na-akwụ ọtọ gburugburu ụlọ, a na-agwọ ahụ ọkụ n'ụlọ site n'ọgwụ fọdụrụ ma ọ bụ nke ahịa n'enweghị nnwale, a naghịkwa ahụ ihe ịdọ aka na ntị ruo mgbe oge gafere.",
    gap: "Ịba ka na-egbu ọtụtụ ụmụntakịrị ma na-emerụ ndị inyom dị ime na ụmụ ha ahụ. Ezinụlọ chọrọ omume kwa ụbọchị dị mfe (net kwa abalị, anwụnta belatara) na mmeghachi ngwa ngwa (nnwale maka ahụ ọkụ ọ bụla, ụlọọgwụ ozugbo maka ihe ịdọ aka na ntị) iji gbochie ọnwụ. Omume ndị a anaghị efu ego ma ọ bụ na-efu obere ego, ha na-arụkwa ọrụ nke ọma mgbe a na-eme ha ọnụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-asụ bekee dị ka asụsụ nke abụọ",
      "Ngwaọrụ: ekwentị nkịtị nwere data dị oke ọnụ; nkuzi na-arụ ọrụ n'enweghị ịntanetị mgbe e budatara ha",
      "Ego: obere ego; ọtụtụ net, nnwale na ọrụ dị n'efu ma ọ bụ dị ọnụ ala site n'ụlọọgwụ na mmemme mba, mana nke a dị iche n'ebe dị iche iche",
      "Ahụike: naanị mgbochi na ihe ịdọ aka na ntị; enweghị aha ọgwụ maka ịgwọ onwe, enweghị ọnụọgụ ọgwụ, enweghị atụmatụ ọgwụgwọ, enweghị nchọpụta ọrịa; ndị na-amụ ihe na-agbaso ụlọọgwụ ha, onye ọrụ ahụike obodo na ministri ahụike",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ ụlọ na ọrụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-ele ezinụlọ gị", action: "ịkọwa otu ịba si agbasa ma depụta ndị nọ n'ụlọ gị ọ na-atụ egwu karịa", standard: "na-akpọ aha ata anwụnta n'abalị ma na-akpọ aha ụmụntakịrị na ndị inyom dị ime" },
    { id: "O2", condition: "Mgbe e nyere gị net e tinyere ọgwụ na ebe ezinụlọ gị na-ehi ụra", action: "ịkwụnye net e tinyere ọgwụ, itinye ọnụ ya n'okpuru ma kwachie oghere ọ bụla", standard: "ka onye ọ bụla, malite n'ụmụntakịrị na ndị inyom dị ime, na-ehi ụra n'okpuru net kwa abalị" },
    { id: "O3", condition: "Mgbe ị na-ele gburugburu ụlọ gị", action: "iwepụ ma ọ bụ kpuchie ebe anwụnta na-amụ ma gbochie ụzọ ha si abata n'ụlọ", standard: "na-eme opekata mpe ihe atọ n'otu izu" },
    { id: "O4", condition: "Mgbe nwanyị dị ime ma ọ bụ nwatakịrị nọ n'ezinụlọ gị", action: "idepụta ọrụ ịba ụlọọgwụ gị na-enye ha ma mee atụmatụ nleta", standard: "na-akpọ aha nleta ime n'oge ma na-ajụ maka vaksin na ọgwụ mgbochi ebe a na-enye ha" },
    { id: "O5", condition: "Mgbe onye ezinụlọ nwere ahụ ọkụ n'ebe ịba dị", action: "ịkpọga onye ahụ ka e nwalee ya maka ịba n'otu ụbọchị ahụ ma gbasoo ọgwụgwọ onye ọrụ ahụike nyere", standard: "n'ejighị ọgwụ fọdụrụ ma ọ bụ ọgwụ a na-amaghị agwọ ya, n'akwụsịghịkwa ya n'oge" },
    { id: "O6", condition: "Mgbe onye ezinụlọ na-arịa ọrịa", action: "ịmata ihe ịdọ aka na ntị nke ịba siri ike ma kpọga onye ahụ n'ụlọọgwụ ozugbo", standard: "na-akpọ aha opekata mpe ihe ịdọ aka na ntị anọ na ụlọọgwụ kacha nso ma ọ bụ onye ọrụ ahụike obodo" }
  ],
  chapters: [
    {
      name: "Isi 1: Igbochi ata anwụnta",
      lessons: [
        {
          title: "Otu ịba si agbasa na ndị ọ na-atụ egwu karịa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọwaa otu ịba si agbasa ma depụta ndị nọ n'ụlọ gị ọ na-atụ egwu karịa.",
          text: [
            "Ọ bụ obere nje (parasite) na-ebute ịba. Ọ bụ ata ụfọdụ anwụnta nwanyị (Anopheles) na-agbasa ya. Anwụnta na-ata onye nwere ịba, wee taa onye ọzọ ma bufee ya. Ọ naghị esi n'otu onye gaa n'onye ọzọ site n'imetụ aka, nri ma ọ bụ ikuku.",
            "Anwụnta ndị a na-ata karịsịa n'anyasị na n'abalị, ọtụtụ mgbe ndị mmadụ na-ehi ụra. Ihe ịrịba ama ịba na-amalitekarị ụbọchị 10 ruo 15 mgbe ata ahụ gasịrị, ya na ahụ ọkụ, oyi na-atụ na isi ọwụwa.",
            "WHO kwuru na ndị ịba siri ike na-atụ egwu karịa bụ ụmụ ọhụrụ na ụmụaka na-erubeghị afọ 5, ndị inyom dị ime, ndị nwere HIV, na ndị njem si ebe ịba na-adịghị. N'Afrịka, ọtụtụ ndị ịba na-egbu bụ ụmụntakịrị. WHO kọrọ na Naịjirịa na DR Congo naanị ha nwere ihe karịrị 40% nke ndị ịba gburu na mpaghara ahụ n'afọ 2024. N'ọtụtụ akụkụ North Africa, ịba anaghị adịkarị, mana ndị si Morocco, Egypt ma ọ bụ Tunisia na-aga ebe ịba dị nọ n'ihe egwu dị elu, ha kwesịkwara ịhụ onye ọrụ ahụike tupu ha aga."
          ],
          words: [["Parasite (nje)", "obere ihe dị ndụ na-ebi n'ahụ ọzọ ma na-emerụ ya ahụ."], ["Anopheles", "ụdị anwụnta na-agbasa ịba."], ["Ihe egwu karịa (at risk)", "o yikarịrị ka ọ ga-arịa ọrịa ma ọ bụ rịa ya nke ukwuu."]],
          slides: [
            { title: "Otu ịba si agbasa", bullets: ["Nje nke anwụnta Anopheles na-ebu", "Ọ na-ata onye na-arịa ọrịa, wee taa onye ọzọ", "Ọ bụghị site n'imetụ aka, nri ma ọ bụ ikuku"] },
            { title: "Mgbe ha na-ata", bullets: ["Karịsịa n'anyasị na n'abalị", "Ihe ịrịba ama na-amalite ụbọchị 10 ruo 15 mgbe ata gasịrị", "Ahụ ọkụ, oyi na-atụ, isi ọwụwa"] },
            { title: "Ndị ọ na-atụ egwu karịa", bullets: ["Ụmụ ọhụrụ na ụmụaka na-erubeghị afọ 5", "Ndị inyom dị ime", "Ndị nwere HIV; ndị njem si ebe ịba na-adịghị"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Dee aha onye ọ bụla na-ehi ụra n'ụlọ gị. Gbaa gburugburu ndị ọ na-atụ egwu karịa: ụmụaka na-erubeghị afọ 5, nwanyị ọ bụla dị ime, onye ọ bụla nwere HIV, na ndị ọbịa si ebe ịba na-adịghị.",
          youCanNow: "ịkọwa otu ịba si agbasa na ikwu ndị nọ n'ụlọ gị ọ na-atụ egwu karịa.",
          quickCheck: [
            { objective: "O1", q: "Kedu otu ịba si agbasa?", options: ["Site n'ịkwe aka", "Site n'ata ụfọdụ anwụnta", "Site n'iri mangoro", "Site na mmiri ozuzo oyi"], answer: 1, why: "Ọ bụ ata anwụnta Anopheles nwere nje na-ebufe ịba, ọ bụghị imetụ aka, nri ma ọ bụ ihu igwe." },
            { objective: "O1", q: "Ndị ole n'ezinụlọ ka ịba siri ike na-atụ egwu karịa?", options: ["Ụmụntakịrị na-erubeghị afọ 5 na ndị inyom dị ime", "Naanị ụmụ nwoke na-eto eto", "Naanị nne na nna ochie", "Ọ dịghị onye ọ na-atụ egwu karịa"], answer: 0, why: "WHO na-akpọ ụmụntakịrị na ndị inyom dị ime n'etiti ndị ọ na-atụ egwu karịa." }
          ]
        },
        {
          title: "Net e tinyere ọgwụ kwa abalị",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kwụnye net e tinyere ọgwụ, tinye ọnụ ya n'okpuru ma kwachie oghere ọ bụla.",
          text: [
            "Net akwa e tinyere ọgwụ na-egbu ụmụ ahụhụ (a na-akpọkarị ya ITN ma ọ bụ net na-adịte aka) bụ otu n'ime ụzọ ndị bụ isi WHO na-atụ aro iji gbochie ịba. Net ahụ na-egbochi anwụnta iru gị mgbe ị na-ehi ụra, ọgwụ ahụ na-egbukwa ma ọ bụ mee ka ndị na-ebe na ya daa mbà. WHO kwuru na ụdị net ọhụrụ na-echebe nke ọma karịa n'ebe ọgwụ ochie anaghịzi egbu anwụnta.",
            "Net na-arụ ọrụ naanị mgbe a na-eji ya kwa abalị, n'afọ niile, ọ bụghị naanị n'oge udu mmiri. Kwụnye ya n'elu akwa ma ọ bụ ute ka o ruo n'ala, tinye ọnụ ya n'okpuru matrass ma ọ bụ ute tupu ọchịchịrị, ma banye n'enweghị oghere ọ bụla. Ọ bụrụ na net ezughị onye ọ bụla, ụmụntakịrị na ndị inyom dị ime na-ebu ụzọ ehi ụra n'okpuru otu, wee gbalịa nweta net maka ndị fọdụrụ.",
            "Lekọta ya: lelee ma o nwere oghere kwa izu ma kwachie ha ozugbo site n'ịkwa ma ọ bụ ịkee eriri. Saa ya nwayọọ, ọ bụghị oge niile, ma kpọọ ya n'ọnyịnyo, dị ka ntụziaka dị n'akpa ya ma ọ bụ nke onye ọrụ ahụike gị si dị. Ejila net egbu azụ, gbaa ogige ma ọ bụ mee ubi. Ọtụtụ mmemme mba na-enye net n'efu n'ụlọọgwụ, na nleta ime, n'ụlọ akwụkwọ ma ọ bụ n'oge mkpọsa: jụọ ụlọọgwụ gị ma ọ bụ onye ọrụ ahụike obodo."
          ],
          steps: ["Kwụnye net n'elu akwa ma ọ bụ ute ka o ruo n'ala.", "Tinye ọnụ ya n'okpuru matrass ma ọ bụ ute tupu ọchịchịrị.", "Banye n'enweghị oghere, kwa abalị.", "Lelee oghere kwa izu ma kwachie ha ozugbo.", "Saa ya nwayọọ, ọ bụghị oge niile, ma kpọọ ya n'ọnyịnyo.", "Jụọ ụlọọgwụ gị ma ọ bụ onye ọrụ ahụike obodo maka net n'efu."],
          words: [["Ọgwụ ụmụ ahụhụ (insecticide)", "kemịkalụ na-egbu ụmụ ahụhụ."], ["ITN (net e tinyere ọgwụ)", "net akwa e tinyere ọgwụ iji chụpụ ma gbuo anwụnta."], ["Mkpọsa (campaign)", "oge ndị ọrụ ahụike na-enye ọtụtụ mmadụ net ma ọ bụ ọrụ."]],
          slides: [
            { title: "Ihe mere net e tinyere ọgwụ ji arụ ọrụ", bullets: ["Ọ na-egbochi anwụnta mgbe ị na-ehi ụra", "Ọgwụ ahụ na-egbu ha ma ọ bụ mee ka ha daa mbà", "Otu n'ime ụzọ ndị bụ isi WHO maka igbochi ịba"] },
            { title: "Kwa abalị, n'afọ niile", bullets: ["Net na-eru n'ala", "Tinye ya n'okpuru tupu ọchịchịrị, enweghị oghere", "Net ezughị? Ụmụntakịrị na ndị inyom dị ime na-ebu ụzọ"] },
            { title: "Lekọta ya", bullets: ["Lelee oghere kwa izu; kwachie ha", "Saa ya nwayọọ, ọ bụghị oge niile; kpọọ ya n'ọnyịnyo", "Ejila ya egbu azụ ma ọ bụ mee ubi"] },
            { title: "Ịnweta net", bullets: ["Ụlọọgwụ, nleta ime, ụlọ akwụkwọ, mkpọsa", "Jụọ ụlọọgwụ gị ma ọ bụ onye ọrụ ahụike obodo"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Taa n'abalị, lelee net ọ bụla dị n'ụlọ gị. Kwụnye nke ọ bụla ka o ruo n'ala, tinye ọnụ ya n'okpuru ma kwachie oghere ọ bụla. Gụọ net ole ọzọ ezinụlọ gị chọrọ.",
          youCanNow: "ịkwụnye, itinye n'okpuru ma lekọta net e tinyere ọgwụ ka onye ọ bụla, malite na ndị ọ na-atụ egwu karịa, na-ehi ụra n'okpuru otu kwa abalị.",
          quickCheck: [
            { objective: "O2", q: "Olee mgbe ezinụlọ gị kwesịrị ihi ụra n'okpuru net?", options: ["Naanị n'oge udu mmiri", "Naanị mgbe mmadụ na-arịa ọrịa", "Kwa abalị, n'afọ niile", "Naanị na ngwụcha izu"], answer: 2, why: "Anwụnta nwere ike ịta ma gbasaa ịba n'afọ niile; net na-arụ ọrụ naanị mgbe a na-eji ya kwa abalị." },
            { objective: "O2", q: "Ị hụrụ obere oghere na net. Gịnị ka ị ga-eme?", options: ["Tụfuo net ahụ", "Jiri ya gbuo azụ", "Chere ruo mgbe oghere ahụ ga-ebuwanye ibu", "Kwachie ya ozugbo site n'ịkwa ma ọ bụ ịkee eriri"], answer: 3, why: "Anwụnta na-esi n'obere oghere abata; ikwachie ha ozugbo na-eme ka net ahụ na-arụ ọrụ." }
          ]
        },
        {
          title: "Anwụnta belatara na ata belatara gburugburu ụlọ",
          objectives: ["O3"],
          minutes: 5,
          goal: "Wepụ ma ọ bụ kpuchie ebe anwụnta na-amụ ma gbochie ụzọ ha si abata n'ụlọ.",
          text: [
            "Anwụnta na-eyi akwa ha na mmiri na-akwụ ọtọ. Mmiri na-adọkpụ n'ala, taya ochie, kom, ite gbajiri agbaji, ọwa mmiri mechiri emechi, drọm mmiri na bọket a na-ekpuchighị nwere ike ịghọ ebe ha na-amụ n'akụkụ ebe ezinụlọ gị na-ehi ụra.",
            "Gburugburu ụlọ: wụpụ ma ọ bụ tụgharịa ihe ndị na-ejide mmiri; kpuchie drọm mmiri, bọket na tankị site n'ihe mkpuchi ma ọ bụ akwa e kechiri nke ọma; kpochapụ ọwa mmiri na gọta mechiri emechi; jiri aja mejupụta mmiri na-adọkpụ. Mee nke a kwa izu, karịsịa n'oge udu mmiri, ma soro ndị agbata obi rụkọọ ọrụ, n'ihi na anwụnta na-efe n'etiti ụlọ.",
            "Chụpụ ha ma zere ata: mechie ụzọ na windo n'uhuruchi, ma tinye net windo na n'elu mgbidi ma ọ bụrụ na ị nwere ike. N'anyasị, yiri uwe aka ogologo na traụza ogologo ma ọ bụ akwa ogologo. Ọgwụ na-achụ anwụnta nwere DEET, IR3535 ma ọ bụ icaridin nwere ike inye aka mgbe uhuruchi gasịrị; jiri ha dị ka akwụkwọ dị na ya si kwuo. Ọgwụ anwụnta a na-akpọ ọkụ (coil) na nke na-agba uzuoku nwekwara ike inye aka, mana ha anaghị anọchi anya net. Ọ bụrụ na ndị otu na-agba ọgwụ si mmemme ahụike bịa ịgba ọgwụ n'ime ụlọ (indoor residual spraying), kwe ka ha banye ma gbasoo ndụmọdụ ha gbasara ịghara ịsa ma ọ bụ ite mgbidi agba mgbe e mechara."
          ],
          steps: ["Gaa gburugburu ụlọ gị ma chọta ihe ọ bụla na-ejide mmiri na-akwụ ọtọ.", "Wụpụ ya, tụgharịa ya, kpuchie ya ma ọ bụ wepụ ya.", "Kpochapụ ọwa mmiri mechiri emechi ma mejupụta mmiri na-adọkpụ.", "Mechie ụzọ na windo n'uhuruchi; tinye net windo ma ọ bụrụ na ị nwere ike.", "Kpuchie aka na ụkwụ n'anyasị; jiri ọgwụ na-achụ anwụnta dị ka akwụkwọ ya si kwuo.", "Kwe ka ndị otu na-agba ọgwụ nke mmemme ahụike banye."],
          words: [["Ebe anwụnta na-amụ", "mmiri na-akwụ ọtọ ebe anwụnta na-eyi akwa."], ["Ọgwụ na-achụ anwụnta (repellent)", "ude ma ọ bụ ihe a na-agba agba na-eme ka anwụnta ghara ịbịaru akpụkpọ ahụ gị."], ["Ịgba ọgwụ n'ime ụlọ (IRS)", "ndị ọrụ ahụike na-agba ọgwụ ụmụ ahụhụ na mgbidi ime ụlọ iji gbuo anwụnta na-ezu ike n'ebe ahụ."]],
          slides: [
            { title: "Anwụnta na-amụ na mmiri na-akwụ ọtọ", bullets: ["Mmiri na-adọkpụ, taya, kom, ite gbajiri agbaji", "Ọwa mmiri mechiri emechi, drọm na bọket ghere oghe"] },
            { title: "Kwa izu gburugburu ụlọ", bullets: ["Wụpụ ma ọ bụ tụgharịa ihe na-ejide mmiri", "Kpuchie drọm, bọket na tankị", "Kpochapụ ọwa mmiri; mejupụta mmiri na-adọkpụ; soro ndị agbata obi"] },
            { title: "Chụpụ ha, zere ata", bullets: ["Mechie ụzọ na windo n'uhuruchi; net windo", "Uwe aka ogologo na traụza ogologo n'anyasị", "Ọgwụ na-achụ anwụnta dị ka akwụkwọ si kwuo; ọ dịghị anọchi net"] },
            { title: "Ndị otu na-agba ọgwụ", bullets: ["Ịgba ọgwụ n'ime ụlọ na-egbu anwụnta na-ezu ike", "Kwe ka ndị otu mmemme ahụike banye", "Gbasoo ndụmọdụ ha mgbe e mechara"] }
          ],
          sources: [WHO_MALARIA, WHO_WATER],
          tryIt: "Gaa gburugburu ụlọ gị ugbu a. Dee ebe ọ bụla nwere mmiri na-akwụ ọtọ. Wụpụ, kpuchie ma ọ bụ wepụ opekata mpe atọ taa, ma mee atụmatụ ilele ọzọ kwa izu.",
          youCanNow: "iwepụ ebe anwụnta na-amụ gburugburu ụlọ gị ma belata ata n'anyasị.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka anwụnta na-eyi akwa ha?", options: ["N'ájá kpọrọ nkụ", "Na mmiri na-akwụ ọtọ dị ka mmiri na-adọkpụ, taya na bọket ghere oghe", "N'ọkụ esi nri", "Na achịcha"], answer: 1, why: "Anwụnta chọrọ mmiri na-akwụ ọtọ iji yie akwa ha." },
            { objective: "O3", q: "Ị na-amụnye ọgwụ anwụnta (coil) n'anyasị. Gịnị bụ eziokwu?", options: ["Ọ nwere ike inye aka, mana ị ka na-ehi ụra n'okpuru net", "Ị chọghịzi net", "Ọ na-agwọ ịba", "Ọ ga-enwu abalị niile n'akụkụ nwa ọhụrụ"], answer: 0, why: "Coil na ọgwụ na-achụ anwụnta na-agbakwụnye nchebe mana ha anaghị anọchi anya net." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Igbochi ata anwụnta",
        questions: [
          { objective: "O1", q: "Olee mgbe anwụnta ịba na-atakarị?", options: ["N'ehihie", "Naanị n'ụtụtụ", "N'anyasị na n'abalị", "Naanị n'oge ọkọchị"], answer: 2, why: "Anwụnta Anopheles na-ata karịsịa n'anyasị na n'abalị, ọtụtụ mgbe ndị mmadụ na-ehi ụra." },
          { objective: "O2", q: "Ezinụlọ gị nwere net atọ na mmadụ ise. Ndị ole na-ebu ụzọ ehi ụra n'okpuru net?", options: ["Nna na ụmụ nwoke kacha okenye", "Ndị ọbịa", "Onye ọ bụla buru ụzọ dinara", "Ụmụntakịrị na nwanyị dị ime"], answer: 3, why: "Ụmụntakịrị na ndị inyom dị ime bụ ndị ọ na-atụ egwu karịa, ya mere ha na-ebu ụzọ mgbe ị na-achọ net ndị ọzọ." },
          { objective: "O2", q: "Kedu otu e kwesịrị isi kwụnye net?", options: ["Ka o ruo n'ala, e tinyekwa ya n'okpuru tupu ọchịchịrị", "E fụkọtara ya n'elu akwa", "Ọkara ya n'elu akwa", "Naanị n'elu ihu"], answer: 0, why: "Net ruru n'ala, e tinyekwa ya n'okpuru, anaghị ahapụ oghere maka anwụnta." },
          { objective: "O3", q: "Taya ochie jupụtara na mmiri ozuzo dị n'azụ ụlọ gị. Gịnị ka ị ga-eme?", options: ["Hapụ ha; ha abụghị nke gị", "Wụpụ mmiri dị na ha ma debe ha ebe kpọrọ nkụ, ma ọ bụ wepụ ha", "Gbakwunye mmiri", "Jiri net kpuchie ha"], answer: 1, why: "Mmiri dị na taya bụ ebe anwụnta na-amụ; iwụpụ ma ọ bụ iwepụ ha na-akwụsị anwụnta ịmụ." },
          { objective: "O3", q: "Ndị ọrụ ahụike bịara ịgba ọgwụ na mgbidi ime ụlọ gị. Gịnị ka ị ga-eme?", options: ["Jụ ha", "Saa mgbidi ahụ ozugbo", "Kwe ka ha banye ma gbasoo ndụmọdụ ha mgbe e mechara", "Tee agba n'elu ọgwụ ahụ n'otu ụbọchị ahụ"], answer: 2, why: "Ịgba ọgwụ n'ime ụlọ bụ otu n'ime ihe ndị bụ isi WHO; ịsa ma ọ bụ ite mgbidi agba na-eme ka ọ ghara ịrụ ọrụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ichebe ndị ọ na-atụ egwu karịa na ime ngwa ngwa",
      lessons: [
        {
          title: "Ichebe ndị inyom dị ime na ụmụntakịrị",
          objectives: ["O4"],
          minutes: 5,
          goal: "Depụta ọrụ ịba ụlọọgwụ gị na-enye ndị inyom dị ime na ụmụntakịrị ma mee atụmatụ nleta.",
          text: [
            "Ịba n'oge ime nwere ike imerụ nne na nwa ahụ: WHO kwuru na o nwere ike ime ka a mụọ nwa tupu oge eruo ma ọ bụ ka ọ dị obere. Nwanyị dị ime kwesịrị ịmalite nleta ime (antenatal) n'oge ma gaa nke ọ bụla. Na nleta ime n'ọtụtụ mba, o nwere ike inweta net e tinyere ọgwụ, nnwale ịba na, ebe mmemme mba na-enye ya, ọgwụ mgbochi ịba n'oge ime (WHO na-akpọ nke a IPTp). Onye ọrụ ahụike na-ekpebi ihe ọ chọrọ na mgbe ọ chọrọ ya. Aṅụla ọgwụ ịba mgbe ị dị ime n'enweghị onye ọrụ ahụike.",
            "Maka ụmụntakịrị: WHO na-atụ aro vaksin ịba abụọ (RTS,S na R21) maka ụmụaka n'ebe ịba juru, a na-etinyekwa ha n'ọgwụ mgbochi ụmụaka a na-enye mgbe niile n'ọtụtụ mba Afrịka. N'ụfọdụ ebe, dịka ọmụmaatụ akụkụ Sahel dị ka Burkina Faso na Mali, ndị ọrụ ahụike na-enyekwa ụmụntakịrị ọgwụ mgbochi n'oge udu mmiri (seasonal malaria chemoprevention). Jụọ ụlọọgwụ gị ihe a na-enye ebe ị bi ma mee ka kaadị ahụike nwa ahụ dị ọhụrụ.",
            "Vaksin na ọgwụ mgbochi na-agbakwụnye nchebe, mana WHO kwuru na ha na-arụ ọrụ nke ọma mgbe e jikọtara ha na net. Nọgide na-eji net kwa abalị. Dee ụbọchị ụlọọgwụ n'atụmatụ gị, ma jụọ onye ọrụ ahụike obodo gị ma ọ bụrụ na ị nweghị ike iru ụlọọgwụ."
          ],
          steps: ["Nwanyị dị ime: malite nleta ime n'oge ma gaa nke ọ bụla.", "Na nleta ime, jụọ maka net, nnwale na ọgwụ mgbochi ịba.", "Nwatakịrị: jụọ ụlọọgwụ ma a na-enye vaksin ịba ebe ị bi ma mee ka kaadị ahụike dị ọhụrụ.", "Jụọ ma e nwere mkpọsa ọgwụ mgbochi n'oge udu mmiri n'ebe ị bi.", "Dee ụbọchị ụlọọgwụ ọ bụla n'atụmatụ gị ma nọgide na-eji net."],
          words: [["Nleta ime (antenatal care)", "nlele ahụike nwanyị n'oge ọ dị ime."], ["Vaksin", "ọgwụ, nke a na-agbakarị n'ọnwụ, na-enyere ahụ aka ichebe onwe ya pụọ n'ọrịa."], ["Ọgwụ mgbochi", "ọgwụ onye ọrụ ahụike na-enye iji gbochie ọrịa tupu ọ malite."], ["Kaadị ahụike", "kaadị ma ọ bụ obere akwụkwọ ebe ụlọọgwụ na-edekọ vaksin na nlele nwatakịrị."]],
          slides: [
            { title: "Ịba n'oge ime", bullets: ["O nwere ike imerụ nne na nwa", "A mụọ nwa tupu oge eruo ma ọ bụ ọ dị obere", "Malite nleta ime n'oge; gaa nke ọ bụla"] },
            { title: "Na nleta ime, jụọ maka", bullets: ["Net e tinyere ọgwụ na nnwale ịba", "Ọgwụ mgbochi ebe a na-enye ya (IPTp)", "Aṅụla ọgwụ ịba n'enweghị onye ọrụ ahụike"] },
            { title: "Ụmụntakịrị", bullets: ["Vaksin ịba RTS,S na R21 ebe a na-enye ha", "Ọgwụ mgbochi n'oge udu mmiri n'ụfọdụ ebe", "Mee ka kaadị ahụike dị ọhụrụ"] },
            { title: "Ka jiri net", bullets: ["Vaksin na ọgwụ na-arụ ọrụ nke ọma na net", "Dee ụbọchị ụlọọgwụ n'atụmatụ gị", "Jụọ onye ọrụ ahụike obodo gị maka enyemaka"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Ọ bụrụ na onye ọ bụla n'ụlọ gị dị ime ma ọ bụ erubeghị afọ 5, dee ụbọchị ụlọọgwụ ọzọ maka onye ọ bụla na ajụjụ ị ga-ajụ gbasara net, vaksin na ọgwụ mgbochi. Ọ bụrụ na ọ dịghị onye, dee ya maka onye agbata obi ma ọ bụ onye ikwu ị nwere ike inyere aka.",
          youCanNow: "ịkpọ aha ọrụ ụlọọgwụ ndị na-echebe ndị inyom dị ime na ụmụntakịrị pụọ n'ịba ma mee atụmatụ nleta.",
          quickCheck: [
            { objective: "O4", q: "Otu nwanyị n'ezinụlọ gị dị ime. Gịnị bụ nzọụkwụ mbụ iji chebe ya pụọ n'ịba?", options: ["Chere ruo ọnwa ikpeazụ", "Zụta ọgwụ ịba n'ahịa", "Malite nleta ime n'oge, hie ụra n'okpuru net ma jụọ maka nchebe ịba", "Kwụsị iri mkpụrụ osisi"], answer: 2, why: "Nleta ime n'oge na net na-enye ya nchebe ụlọọgwụ na-enye." },
            { objective: "O4", q: "Nwa gị nwetara vaksin ịba. Kedu maka net?", options: ["Tụfuo ya", "Jiri ya naanị n'oge udu mmiri", "Nye ndị agbata obi ya", "Nọgide na-eji ya kwa abalị; vaksin na-arụ ọrụ nke ọma na net"], answer: 3, why: "WHO kwuru na vaksin na-enye uru kacha ukwuu mgbe e jikọtara ha na net na ihe ndị ọzọ." }
          ]
        },
        {
          title: "Ahụ ọkụ: mee nnwale n'otu ụbọchị ahụ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kpọga onye ezinụlọ nwere ahụ ọkụ ka e nwalee ya maka ịba n'otu ụbọchị ahụ.",
          text: [
            "N'ebe ịba dị, were ahụ ọkụ ọ bụla dị ka o nwere ike ịbụ ịba ruo mgbe nnwale kwuru na ọ bụghị ya. Ịba na-amalitekarị dị ka ọtụtụ ọrịa ndị ọzọ, ya na ahụ ọkụ, oyi na-atụ, isi ọwụwa na ahụ mgbu, ya mere ị pụghị ịmata site n'ile anya. WHO na-atụ aro ka e jiri nnwale kwado ọrịa ọ bụla a na-enyo enyo, nnwale ngwa ngwa (rapid diagnostic test) ma ọ bụ microscope, tupu ọgwụgwọ.",
            "Gaa n'otu ụbọchị ahụ n'ụlọọgwụ, ebe ahụike ma ọ bụ n'aka onye ọrụ ahụike obodo a zụrụ azụ nwere ike ịnwale. Nnwale ngwa ngwa na-ewe otu ntụpọ ọbara site na mkpịsị aka ma nye nsonaazụ n'ime nkeji ole na ole. Na nwatakịrị na-erubeghị afọ 5, ahụ ọkụ ekwesịghị ichere ruo echi mgbe ọ bụla.",
            "Ọ bụrụ na nnwale gosiri ịba, onye ọrụ ahụike na-ahọrọ ọgwụ ma gwa gị otu ị ga-esi aṅụ ya. Ṅụchaa ya niile, kpọmkwem otu e si gwa gị, ọbụlagodi ma ọ bụrụ na ahụ dịrị onye ahụ mma. Ejila ọgwụ fọdụrụ, ọgwụ e debere maka onye ọzọ, ma ọ bụ ọgwụ a na-amaghị site n'ahịa ma ọ bụ n'aka onye na-ere n'okporo ụzọ: ọ nwere ike ịbụ ụdị ezighi ezi, nke ezughị ezu ma ọ bụ nke adịgboroja. Ọ bụrụ na nnwale ahụ egosighị ịba, onye ọrụ ahụike ga-achọ ihe ọzọ kpatara ya. Ọ bụrụ na ahụ adịghị onye ahụ mma, ma ọ bụ na ọ na-akawanye njọ, laghachi."
          ],
          steps: ["Ahụ ọkụ n'ebe ịba dị? Were ya dị ka o nwere ike ịbụ ịba.", "Gaa n'otu ụbọchị ahụ n'ụlọọgwụ ma ọ bụ n'aka onye ọrụ ahụike obodo nwere ike ịnwale.", "Ọ bụrụ na a chọtara ịba: ṅụọ ọgwụ ahụ kpọmkwem otu onye ọrụ ahụike si kwuo, ya niile.", "Ejila ọgwụ fọdụrụ, nke e bitere ma ọ bụ nke a na-amaghị.", "Ahụ adịghị mma ma ọ bụ na-akawanye njọ? Laghachi ozugbo."],
          words: [["Nnwale ngwa ngwa (RDT)", "nnwale dị ngwa site n'otu ntụpọ ọbara si na mkpịsị aka nke na-egosi ịba n'ime nkeji ole na ole."], ["Nsonaazụ adịghị (negative)", "nnwale ahụ achọtaghị ịba."], ["Ọgwụ adịgboroja", "ọgwụ yiri ezi ọgwụ mana o nwere ọnụọgụ ezighi ezi ma ọ bụ o nweghị ihe na-arụ ọrụ."]],
          slides: [
            { title: "Ahụ ọkụ ọ bụla nwere ike ịbụ ịba", bullets: ["Ahụ ọkụ, oyi na-atụ, isi ọwụwa, ahụ mgbu", "Ị pụghị ịmata site n'ile anya", "WHO: nwalee tupu ọgwụgwọ"] },
            { title: "Nwalee n'otu ụbọchị ahụ", bullets: ["Ụlọọgwụ ma ọ bụ onye ọrụ ahụike obodo a zụrụ azụ", "Nnwale ngwa ngwa: otu ntụpọ ọbara, nkeji ole na ole", "Nwatakịrị na-erubeghị afọ 5: echerela ruo echi mgbe ọ bụla"] },
            { title: "Ọ bụrụ na ọ bụ ịba", bullets: ["Onye ọrụ ahụike na-ahọrọ ọgwụ", "Ṅụchaa ya niile kpọmkwem otu e si gwa gị", "Ahụ adịghị mma ma ọ bụ na-akawanye njọ? Laghachi"] },
            { title: "Mgbe ọ bụla, ejila", bullets: ["Ọgwụ fọdụrụ ma ọ bụ nke e bitere", "Ọgwụ a na-amaghị site n'aka onye na-ere n'okporo ụzọ", "Ọ nwere ike ịbụ nke ezighi ezi, nke ezughị ezu ma ọ bụ adịgboroja"] }
          ],
          sources: [WHO_MALARIA, CDC_MALARIA],
          tryIt: "Chọpụta ebe ezinụlọ gị nwere ike inweta nnwale ịba n'otu ụbọchị ahụ: ụlọọgwụ kacha nso ma ọ bụ onye ọrụ ahụike obodo, oge ha na-emeghe, na otu ị ga-esi ruo ebe ahụ. Dee ya n'atụmatụ gị.",
          youCanNow: "ime ka a nwalee ahụ ọkụ ọ bụla n'otu ụbọchị ahụ ma gbasoo naanị ọgwụgwọ onye ọrụ ahụike nyere, ya niile.",
          quickCheck: [
            { objective: "O5", q: "Nwa gị nwere ahụ ọkụ n'uhuruchi. Gịnị ka ị ga-eme?", options: ["Mee nnwale ịba n'otu ụbọchị ahụ n'ụlọọgwụ ma ọ bụ n'aka onye ọrụ ahụike obodo", "Chere ụbọchị atọ", "Nye ya ọgwụ fọdụrụ site na mbụ", "Zụta ọgwụ n'aka onye na-ere n'okporo ụzọ"], answer: 0, why: "WHO na-adụ ọdụ ka a nwalee tupu ọgwụgwọ, ahụ ọkụ nwatakịrị ekwesịghịkwa ichere." },
            { objective: "O5", q: "Mgbe ụbọchị abụọ nke ọgwụ ịba gasịrị, ahụ dịrị di gị mma. Gịnị ka o kwesịrị ime?", options: ["Kwụsị ma debe ndị fọdụrụ maka oge ọzọ", "Ṅụchaa ya niile kpọmkwem otu onye ọrụ ahụike si kwuo", "Nye onye agbata obi ndị fọdụrụ", "Ṅụọ okpukpu abụọ n'oge ọzọ"], answer: 1, why: "Ịkwụsị n'oge nwere ike ime ka ịba laghachi; ṅụọ ya niile dị ka e si gwa gị." }
          ]
        },
        {
          title: "Ihe ịdọ aka na ntị nke ịba siri ike na atụmatụ ezinụlọ gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Mata ihe ịdọ aka na ntị nke ịba siri ike ma kpọga onye ahụ n'ụlọọgwụ ozugbo.",
          text: [
            "Ịba nwere ike ịghọ nke siri ike ngwa ngwa, karịsịa n'ụmụntakịrị na ndị inyom dị ime. Ịba siri ike bụ ihe mberede.",
            "WHO depụtara ihe ịdọ aka na ntị ndị a. Gaa n'ụlọọgwụ ma ọ bụ ụlọ ọgwụ UGBU A, ehihie ma ọ bụ abalị, ma ọ bụrụ na onye ahụ: ike gwụrụ ya nke ukwuu ma ọ bụ na ọ dị mbà, ma ọ bụ na ọ pụghị ịnọdụ ala ma ọ bụ iguzo; isi na-agbagwoju ya, ụra na-atụ ya nke ukwuu ma ọ bụ na o siri ike ịkpọte ya; ọ na-adọ (convulsions), karịsịa karịa otu ugboro; o siri ya ike iku ume; mamịrị ya gbara oji ma ọ bụ nwee ọbara; anya ya ma ọ bụ akpụkpọ ahụ ya na-acha odo odo; ma ọ bụ ọ na-agba ọbara n'ụzọ na-adịghị mma. Nwatakịrị na-enweghị ike ịṅụ ihe ma ọ bụ ịṅụ ara, ma ọ bụ na-agbọpụta ihe niile, chọkwara ụlọọgwụ ugbu a.",
            "Jikere tupu ọ mee: dee ihe ịdọ aka na ntị ndị a na aha, ebe na nọmba ekwentị nke ụlọọgwụ, ụlọ ọgwụ na onye ọrụ ahụike obodo kacha nso gị n'otu kaadị na mgbidi; mara otu ị ga-esi ruo ebe ahụ n'abalị; ma debe ego ụgbọ ma ọ bụrụ na ị nwere ike. Wee tinye ihe niile sitere n'ihe ọmụmụ a n'atụmatụ ịba nke ezinụlọ gị."
          ],
          steps: ["Mụta ihe ịdọ aka na ntị.", "Ọ bụrụ na ị hụrụ otu n'ime ha: gaa n'ụlọọgwụ ma ọ bụ ụlọ ọgwụ ugbu a, ehihie ma ọ bụ abalị.", "Mee kaadị nwere ihe ịdọ aka na ntị na aha na nọmba ụlọọgwụ na onye ọrụ ahụike kacha nso gị.", "Mee atụmatụ otu ị ga-esi aga n'abalị ma debe ego ụgbọ ma ọ bụrụ na ị nwere ike.", "Dee atụmatụ ịba nke ezinụlọ gị."],
          words: [["Ịba siri ike", "ịba ghọrọ ihe egwu nye ndụ ma chọọ ụlọ ọgwụ ma ọ bụ ụlọọgwụ ozugbo."], ["Ịdọ (convulsions)", "ịma jijiji ahụ na mberede nke onye ahụ na-enweghị ike ijide."], ["Jaundice (ọcha odo)", "agba odo n'anya ma ọ bụ n'akpụkpọ ahụ."]],
          slides: [
            { title: "Ịba siri ike bụ ihe mberede", bullets: ["O nwere ike ime ngwa ngwa", "Ọ kacha dị egwu nye ụmụntakịrị na ndị inyom dị ime"] },
            { title: "Gaa UGBU A, ehihie ma ọ bụ abalị, ma ọ bụrụ", bullets: ["Mbà dị oke; isi na-agbagwoju ya ma ọ bụ o siri ike ịkpọte ya", "Ịdọ (convulsions); o siri ike iku ume", "Mamịrị gbara oji ma ọ bụ nwee ọbara; anya ma ọ bụ akpụkpọ na-acha odo; ọbara", "Nwatakịrị apụghị ịṅụ ihe ma ọ bụ ịṅụ ara, ma ọ bụ na-agbọpụta ihe niile"] },
            { title: "Jikere", bullets: ["Kaadị ihe ịdọ aka na ntị na mgbidi", "Nọmba ụlọọgwụ, ụlọ ọgwụ na onye ọrụ ahụike", "Atụmatụ ụgbọ n'abalị; debe ego ma ọ bụrụ na ị nwere ike"] }
          ],
          sources: [WHO_MALARIA],
          tryIt: "Mee kaadị ihe ịdọ aka na ntị gị ugbu a nwere opekata mpe ihe ịdọ aka na ntị anọ na aha na nọmba ụlọọgwụ ma ọ bụ onye ọrụ ahụike obodo kacha nso gị. Wee dee atụmatụ ịba zuru ezu nke ezinụlọ gị site n'ọrụ ikpeazụ.",
          youCanNow: "ịmata ihe ịdọ aka na ntị nke ịba siri ike, inweta enyemaka ozugbo, na idebe atụmatụ ịba nke ezinụlọ gị.",
          quickCheck: [
            { objective: "O6", q: "Nwatakịrị nwere ịba malitere ịdọ. Gịnị ka ị ga-eme?", options: ["Chere ka ị hụ ma ọ ga-akwụsị", "Nye ya ọgwụ ahụ ọzọ", "Gaa n'ụlọọgwụ ma ọ bụ ụlọ ọgwụ ugbu a", "Hapụ nwatakịrị ahụ ka o hie ụra"], answer: 2, why: "Ịdọ bụ ihe ịdọ aka na ntị nke ịba siri ike; ọ bụ ihe mberede." },
            { objective: "O6", q: "Kedu nke bụ ihe ịdọ aka na ntị nke ịba siri ike?", options: ["Obere isi ọwụwa", "Ahụ na-ekpo ọkụ ntakịrị mgbe ọrụ gasịrị", "Ịchọ iri nri", "Anya na-acha odo odo, ma ọ bụ mamịrị gbara oji ma ọ bụ nwee ọbara"], answer: 3, why: "WHO depụtara jaundice na mamịrị gbara oji ma ọ bụ nwee ọbara dị ka ihe ịdọ aka na ntị chọrọ enyemaka mberede." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ichebe ndị ọ na-atụ egwu karịa na ime ngwa ngwa",
        questions: [
          { objective: "O4", q: "Gịnị ka nwanyị dị ime nwere ike inweta na nleta ime n'ọtụtụ mba?", options: ["Net egbu azụ n'efu", "Net e tinyere ọgwụ, nnwale ịba na ọgwụ mgbochi ebe mmemme ahụ na-enye ya", "Ọgwụ ịba ọ ga-edebe n'ụlọ", "Ọ dịghị ihe gbasara ịba"], answer: 1, why: "Nleta ime bụ ebe ọtụtụ mmemme na-enye net, nnwale na ọgwụ mgbochi n'oge ime." },
          { objective: "O4", q: "Vaksin ndị ole ka WHO na-atụ aro megide ịba maka ụmụaka n'ebe ịba juru?", options: ["RTS,S na R21", "Polio na measles (akpata)", "Naanị tetanus", "Enweghị vaksin ịba"], answer: 0, why: "WHO na-atụ aro RTS,S (kemgbe 2021) na R21 (kemgbe 2023) maka ụmụaka n'ebe ịba dị n'ọkwa etiti ruo n'ọkwa dị elu." },
          { objective: "O5", q: "Gịnị mere a ga-eji nwalee tupu a gwọọ ahụ ọkụ?", options: ["Nnwale na-atọ ụtọ", "Ka i wee ree ọgwụ ahụ", "N'ihi na ọtụtụ ọrịa yiri ịba; nnwale na-egosi ma ọ bụ ya", "Nnwale na-anọchi net"], answer: 2, why: "Ịba yiri ahụ ọkụ ndị ọzọ; nnwale na-eme ka e nye ọgwụgwọ ziri ezi." },
          { objective: "O5", q: "Onye na-ere n'okporo ụzọ na-enye gị mkpụrụ ọgwụ ịba dị ọnụ ala. Gịnị ka ị ga-eme?", options: ["Zụta ha maka ezinụlọ", "Zụta ha naanị maka ụmụaka", "Kekọrịta ha na ndị agbata obi", "Azụtala; mee nnwale ma nweta ọgwụgwọ n'aka onye ọrụ ahụike"], answer: 3, why: "Ọgwụ a na-amaghị nwere ike ịbụ nke ezighi ezi ma ọ bụ adịgboroja; nnwale na ọgwụgwọ onye ọrụ ahụike enweghị nsogbu." },
          { objective: "O6", q: "N'etiti abalị, isi na-agbagwoju nwa gị nwanyị nwere ịba, o sikwa ike ịkpọte ya. Gịnị ka ị ga-eme?", options: ["Gaa n'ụlọọgwụ ma ọ bụ ụlọ ọgwụ ugbu a", "Chere ruo ụtụtụ", "Nye ya ọgwụ ọzọ", "Tinye ya n'okpuru net ka o hie ụra"], answer: 0, why: "Isi ịgbagwoju na isi ike ịkpọte bụ ihe ịdọ aka na ntị; gaa ugbu a, ehihie ma ọ bụ abalị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Igbochi Ịba n'Ezinụlọ Gị",
    questions: [
      { objective: "O1", q: "Gịnị na-ebufe ịba site n'otu onye gaa n'onye ọzọ?", options: ["Ijiji", "Ụfọdụ anwụnta (Anopheles)", "Mmiri ruru unyi", "Ụkwara"], answer: 1, why: "Ọ bụ ata anwụnta Anopheles nwere nje na-ebufe ịba." },
      { objective: "O1", q: "Ihe dị ka ogologo oge ole mgbe ata gasịrị ka ihe ịrịba ama ịba na-amalitekarị?", options: ["N'otu elekere ahụ", "Mgbe otu afọ gasịrị", "Ụbọchị 10 ruo 15", "Ọ dịghị mgbe"], answer: 2, why: "WHO kwuru na ihe ịrịba ama na-apụtakarị ụbọchị 10 ruo 15 mgbe ata anwụnta nwere nje gasịrị." },
      { objective: "O1", q: "Nwanne gị nwanyị si Tunisia, ebe ịba anaghị adịkarị, bịara eleta gị n'ebe ịba dị. Gịnị bụ eziokwu?", options: ["Ọ dị mma n'ihi na ọ bụ okenye", "Ọ pụghị ịrịa ịba", "Ọ chọrọ net naanị n'oge udu mmiri", "Ọ nọ n'ihe egwu dị elu, o kwesịrị ịhụ onye ọrụ ahụike tupu njem ma hie ụra n'okpuru net"], answer: 3, why: "Ndị njem si ebe ịba na-adịghị nọ n'ihe egwu dị elu, ya mere ha na-eso onye ọrụ ahụike eme atụmatụ." },
      { objective: "O2", q: "Gịnị ka ọgwụ dị na net e tinyere ọgwụ na-eme?", options: ["Ọ na-egbu ma ọ bụ mee ka anwụnta na-ebe na ya daa mbà", "Ọ na-eme ka net na-esi ísì ụtọ", "Ọ na-agwọ ịba", "Ọ na-eme ka net dị ọcha"], answer: 0, why: "Ọgwụ ahụ na-egbu ma ọ bụ mee ka anwụnta daa mbà, ya mere net ahụ na-echebe karịa." },
      { objective: "O2", q: "Kedu otu ị ga-esi kpọọ net i sara?", options: ["N'anwụ na-acha nke ukwuu otu izu", "N'ọnyịnyo, mgbe i sachara ya nwayọọ", "N'elu ọkụ esi nri", "Ka ọ dị mmiri mmiri, n'elu akwa"], answer: 1, why: "Ịsa nwayọọ na ịkpọ ya n'ọnyịnyo na-enyere net aka ịnọgide na-arụ ọrụ." },
      { objective: "O2", q: "Kedu ojiji net ezighi ezi?", options: ["N'elu ute ụra", "N'elu akwa nwa ọhụrụ", "Iji ya gbaa ogige ubi akwụkwọ nri", "N'elu akwa nwanyị dị ime"], answer: 2, why: "Net bụ maka ihi ụra n'okpuru ya; iji ya mee ubi ma ọ bụ gbuo azụ na-ahapụ ndị mmadụ n'enweghị nchebe." },
      { objective: "O3", q: "Kedu ọrụ na-ebelata ebe anwụnta na-amụ n'ụlọ?", options: ["Ịhapụ bọket n'ekpuchighị ha", "Idebe taya ochie n'ogige", "Ihi ụra n'èzí", "Iwụpụ, ikpuchi ma ọ bụ iwepụ ihe na-ejide mmiri na-akwụ ọtọ"], answer: 3, why: "Iwepụ mmiri na-akwụ ọtọ na-ewepụ ebe anwụnta na-eyi akwa." },
      { objective: "O3", q: "Olee mgbe ị ga-emechi ụzọ na windo iji chụpụ anwụnta?", options: ["N'uhuruchi", "N'ehihie", "Naanị na Sọnde", "Ọ dịghị mgbe"], answer: 0, why: "Anwụnta ịba na-ata karịsịa site n'anyasị ruo n'abalị." },
      { objective: "O3", q: "Gịnị mere ị ga-eji soro ndị agbata obi rụọ ọrụ gbasara mmiri na-akwụ ọtọ?", options: ["Iji bite taya ha", "N'ihi na anwụnta na-efe n'etiti ụlọ", "Ka ha kwụọ ụgwọ ya", "Ọ dịghị mkpa"], answer: 1, why: "Ebe anwụnta na-amụ n'ụlọ dị n'akụkụ ka na-ezite anwụnta n'ụlọ gị." },
      { objective: "O4", q: "WHO kwuru na ịba n'oge ime nwere ike ime ka...", options: ["Ọ dịghị ihe ọ bụla", "A mụọ ejima", "A mụọ nwa tupu oge eruo ma ọ bụ ka ọ dị obere", "Naanị obere oyi"], answer: 2, why: "Ịba n'oge ime nwere ike ime ka a mụọ nwa n'oge na nwa nwere obere ịdị arọ." },
      { objective: "O4", q: "Ebee ka ị ga-achọpụta ma a na-enye ụmụaka vaksin ịba ebe ị bi?", options: ["Ihe e dere na soshal midia", "Ahịa", "Ịkọ nkọ onye agbata obi", "Ụlọọgwụ gị ma ọ bụ onye ọrụ ahụike obodo"], answer: 3, why: "Mmemme vaksin dị iche n'ebe dị iche iche; ụlọọgwụ maara ihe a na-enye." },
      { objective: "O4", q: "N'akụkụ Sahel ụfọdụ, gịnị ka ndị ọrụ ahụike na-enye ụmụntakịrị n'oge udu mmiri?", options: ["Ọgwụ mgbochi ịba site na mkpọsa", "Ekwentị n'efu", "Net egbu azụ", "Ọ dịghị ihe"], answer: 0, why: "A na-enye ụmụntakịrị ọgwụ mgbochi ịba n'oge udu mmiri (seasonal malaria chemoprevention) n'oge ihe egwu dị elu n'ụfọdụ ebe." },
      { objective: "O5", q: "Gịnị ka WHO na-atụ aro tupu a gwọọ onye a na-enyo enyo na o nwere ịba?", options: ["Chere otu izu", "Nnwale site na nnwale ngwa ngwa ma ọ bụ microscope", "Jụọ onye agbata obi", "Zụta ụdị ọgwụ abụọ"], answer: 1, why: "WHO na-atụ aro ka e jiri nnwale kwado onye ọ bụla a na-enyo enyo tupu ọgwụgwọ." },
      { objective: "O5", q: "I nwere mkpụrụ ọgwụ fọdụrụ site n'ịba afọ gara aga. Nwa gị nwoke nwere ahụ ọkụ. Gịnị ka ị ga-eme?", options: ["Nye ya mkpụrụ ọgwụ ochie ahụ", "Nye ya ọkara mkpụrụ ọgwụ ochie ahụ", "Kpọga ya ka e nwalee ya taa; ejila ọgwụ fọdụrụ", "Chere ka ị hụ"], answer: 2, why: "Ọgwụ fọdụrụ nwere ike ịbụ ụdị ezighi ezi ma ọ bụ ezughị ezu; buru ụzọ nwalee ma gbasoo onye ọrụ ahụike." },
      { objective: "O5", q: "Nnwale ịba egosighị ịba mana nwa gị ka nwere ahụ ọkụ mgbe ụbọchị abụọ gasịrị. Gịnị ka ị ga-eme?", options: ["Kwụsị ichegbu onwe gị", "Nye ya ọgwụ ịba n'agbanyeghị", "Chere izu ọzọ", "Laghachi n'aka onye ọrụ ahụike"], answer: 3, why: "Ọ bụrụ na ahụ ọkụ ahụ na-aga n'ihu ma ọ bụ na-akawanye njọ, onye ọrụ ahụike kwesịrị ilegharị ya anya ọzọ." },
      { objective: "O5", q: "Onye na-ekpebi ọgwụ ịba a ga-aṅụ na ole?", options: ["Onye ọrụ ahụike a zụrụ azụ mgbe nnwale gasịrị", "Onye na-arịa ọrịa", "Onye na-ere n'ahịa", "Ozi ederede"], answer: 0, why: "Ọ bụ naanị onye ọrụ ahụike nwere ike ịhọrọ ọgwụ ziri ezi na ọnụọgụ ya mgbe nnwale gasịrị." },
      { objective: "O6", q: "Kedu n'ime ndị a pụtara gaa n'ụlọọgwụ ugbu a?", options: ["Imi na-agba", "Isi ike iku ume", "Agụụ na-agụ gị", "Obere ọnyá"], answer: 1, why: "Isi ike iku ume bụ ihe ịdọ aka na ntị nke ịba siri ike." },
      { objective: "O6", q: "Nwa ọhụrụ nwere ahụ ọkụ anaghị aṅụ ara, ọ na-agbọpụtakwa ihe niile. Gịnị ka ị ga-eme?", options: ["Nwaa ọzọ echi", "Nye naanị mmiri ma chere", "Gaa n'ụlọọgwụ ugbu a", "Nye ọgwụ okenye"], answer: 2, why: "Nwatakịrị na-enweghị ike ịṅụ ihe ma ọ bụ na-agbọpụta ihe niile chọrọ ụlọọgwụ ozugbo." },
      { objective: "O6", q: "Gịnị na-enyere gị aka ime ngwa ngwa n'abalị mgbe ihe mberede mere?", options: ["Ọ dịghị ihe; ị ga-echeta", "Ndepụta ọgwụ na ọnụọgụ ha", "PIN ego ekwentị gị", "Kaadị ihe ịdọ aka na ntị nwere nọmba ụlọọgwụ na atụmatụ ụgbọ n'abalị"], answer: 3, why: "Ịmara ihe ịdọ aka na ntị, onye ị ga-akpọ na otu ị ga-esi ruo ebe ahụ na-azọpụta oge." },
      { objective: "O1", q: "Ịba ọ nwere ike isi n'otu onye gaa n'onye ọzọ site n'imetụ aka ma ọ bụ ikekọrịta nri?", options: ["Mba; ọ bụ ata anwụnta na-agbasa ya", "Ee, site n'imetụ aka", "Ee, site n'ikekọrịta nri", "Ee, site n'ikuku"], answer: 0, why: "WHO kwuru na ịba anaghị esi n'otu onye gaa n'onye ọzọ ozugbo; ọ bụ anwụnta na-ebu ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 3, 6, 9, 12, 13, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ndị ọ na-atụ egwu", objective: "O1", notYet: "Ọ dịghị onye e dere dị ka onye ọ na-atụ egwu karịa, ma ọ bụ atụmatụ ahụ ekwughị otu ịba si agbasa.", meets: "A kpọrọ aha ụmụntakịrị, ndị inyom dị ime na ndị ọzọ ọ na-atụ egwu karịa n'ụlọ, ya na ata anwụnta n'abalị dị ka ihe kpatara ya.", exceeds: "O mekwara atụmatụ maka ndị ọbịa ma ọ bụ ndị njem si ebe ịba na-adịghị." },
      { name: "Net kwa abalị", objective: "O2", notYet: "A gụrụ net mana edeghị ndị na-ehi ụra n'okpuru ha, ma ọ bụ e kwughị maka oghere.", meets: "E depụtara ebe ụra ọ bụla nwere net, ndị ọ na-atụ egwu karịa na-ebu ụzọ, ya na nlele oghere kwa izu na nlekọta nwayọọ.", exceeds: "A gụrụ net ndị na-adịghị, onye na-amụ ihe ajụọla ụlọọgwụ ma ọ bụ onye ọrụ ahụike obodo otu esi enweta ha." },
      { name: "Anwụnta belatara", objective: "O3", notYet: "Ihe na-erughị atọ, ma ọ bụ ihe ndị na-anaghị ewepụ mmiri na-akwụ ọtọ ma ọ bụ gbochie ata.", meets: "Opekata mpe ihe atọ, dị ka iwụpụ ihe na-ejide mmiri, ikpuchi drọm, ikpochapụ ọwa mmiri na imechi ụzọ n'uhuruchi.", exceeds: "E debere ụbọchị nlele kwa izu, ndị agbata obi sokwa." },
      { name: "Ọrụ ụlọọgwụ", objective: "O4", notYet: "Enweghị nleta ụlọọgwụ e mere atụmatụ maka nwanyị dị ime ma ọ bụ nwatakịrị nọ n'ụlọ.", meets: "E dere ụbọchị nleta ime na ụbọchị ụlọọgwụ nwatakịrị, ya na ajụjụ gbasara net, vaksin na ọgwụ mgbochi.", exceeds: "E debanyere ma ọ bụ e meela nleta ndị ahụ, kaadị ahụike nwatakịrị dịkwa ọhụrụ." },
      { name: "Ihe a ga-eme maka ahụ ọkụ", objective: "O5", notYet: "Atụmatụ ahụ gụnyere ịgwọ n'ụlọ site n'ọgwụ fọdụrụ ma ọ bụ nke ahịa, ma ọ bụ ichere ka a hụ.", meets: "Nnwale n'otu ụbọchị ahụ n'ụlọọgwụ ma ọ bụ n'aka onye ọrụ ahụike obodo a kpọrọ aha, na ọgwụgwọ zuru ezu dị ka onye ọrụ ahụike si kwuo.", exceeds: "E dekwara oge mmeghe na ebe ọzọ a ga-anwale ma ọ bụrụ na nke mbụ adịghị." },
      { name: "Kaadị ihe ịdọ aka na ntị", objective: "O6", notYet: "Ihe ịdọ aka na ntị na-erughị anọ, ma ọ bụ enweghị nọmba ụlọọgwụ.", meets: "Opekata mpe ihe ịdọ aka na ntị anọ na aha na nọmba ụlọọgwụ ma ọ bụ onye ọrụ ahụike kacha nso.", exceeds: "Atụmatụ ụgbọ n'abalị dịkwa, ma enweghị aha ọgwụ ma ọ bụ ọnụọgụ ọgwụ na kaadị ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ụlọ ebe onye ọ bụla, malite n'ụmụntakịrị na ndị inyom dị ime, na-ehi ụra n'okpuru net ụbọchị 30 ka e mechara (nnyocha nsochi)",
      "Ezinụlọ na-eme nnwale ịba n'otu ụbọchị ahụ maka ahụ ọkụ nwatakịrị, dị ka ezinụlọ ma ọ bụ ndị ọrụ ahụike obodo si kọọ",
      "Ndị inyom dị ime na-amalite nleta ime n'oge na-abawanye, ụmụaka nwetara vaksin ha niile na-abawanye ebe a na-enye vaksin ịba",
      "Ụmụaka na-erute ụlọọgwụ n'azụ oge ya na ịba siri ike na-ebelata n'oge udu mmiri na-esote"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Net e tinyere ọgwụ maka ịmụ ịkwụnye na ilele ya (ma ọ bụ nke onye na-amụ ihe n'onwe ya)",
      "Agịga na eriri maka ikwachi oghere",
      "Akwụkwọ na mkpịsị ode maka atụmatụ ezinụlọ na kaadị ihe ịdọ aka na ntị",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ọ na-arụ ọrụ nke ọma n'otu ndị nne, otu nleta ime, ụlọ akwụkwọ, otu okpukpe, otu ndị ọrụ ugbo na nleta onye ọrụ ahụike obodo; meenụ ule mbido ọnụ.",
      "Kwụnyenụ net ọnụ na Nkuzi 2, ma gaanụ gburugburu ebe nzukọ ahụ ịchọta mmiri na-akwụ ọtọ na Nkuzi 3.",
      "Kpọọ onye ọrụ ahụike obodo ma ọ bụ nọọsụ ụlọọgwụ ka o kwuo ihe ụlọọgwụ na-enye: net n'efu, nnwale, vaksin na ọgwụ mgbochi dị iche site na mba gaa na mba na site n'ebe gaa n'ebe.",
      "Akpọla aha ọgwụ ịba ma ọ bụ nye ọnụọgụ ọgwụ; zipu ajụjụ niile gbasara ọgwụgwọ n'ụlọọgwụ, onye ọrụ ahụike obodo ma ọ bụ ministri ahụike.",
      "Jiri ozi ọhụrụ nke mmemme ịba mba n'oge mkpọsa na n'oge udu mmiri.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
