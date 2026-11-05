"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-mother-child-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Safety rule kept from the English: no medicine doses, treatment plans or diagnosis; every lesson points to the clinic, the midwife, the community health worker and the ministry of health.

const WHO_ANC = { name: "WHO (Ụlọ Ọrụ Ahụike Ụwa): Ntụziaka ọhụrụ maka nlekọta ime maka ime dị mma (nleta asatọ, nke mbụ n'ime izu 12 mbụ)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "Akwụkwọ eziokwu WHO: Ọnwụ nne n'oge ime na ọmụmụ (ihe ndị kacha akpata ya; nlekọta site n'aka onye a zụrụ azụ tupu, n'oge na mgbe ọmụmụ gasịrị)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "Akwụkwọ eziokwu WHO: Ọnwụ nwa ọhụrụ (nlekọta nwa ọhụrụ na ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "Akwụkwọ eziokwu WHO: Inye nwa ọhụrụ na nwata nri", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "Akwụkwọ eziokwu WHO: Ọrịa afọ ọsịsa (mgbochi, nlekọta n'ụlọ, ihe ịrịba ama ụkọ mmiri n'ahụ)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "Akwụkwọ eziokwu WHO: Ọgwụ mgbochi (ọrịa ndị ọgwụ mgbochi ụmụaka na-egbochi)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health-ig",
  lang: "ig",
  translationOf: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Ahụike Nne na Nwa: Ime, Ọmụmụ na Afọ Mbụ",
  skills: "Ịhazi nleta ụlọ ọgwụ n'oge ime, Ịmata ihe ịrịba ama ihe egwu n'oge ime na mgbe ọmụmụ gasịrị, Ime atụmatụ ọmụmụ, Ilekọta nwa ọhụrụ n'ụbọchị mbụ, Ịmata ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ ma ọ bụ nwata, Idebe kaadị ahụike nwa ka ọ dị ọhụrụ",
  outcome: "ime atụmatụ ahụike ezinụlọ dị mfe maka ime na maka nwata: mgbe ị ga-aga ụlọ ọgwụ, ebe a ga-amụ nwa ahụ na otu ị ga-esi ruo ebe ahụ, otu ị ga-esi lekọta nwa ọhụrụ, ihe ịrịba ama ihe egwu ndị pụtara \"gaa ụlọ ọgwụ ugbu a\", na otu ị ga-esi debe ọgwụ mgbochi na nleta nlele uto n'oge.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nne na ụmụ nwanyị dị ime, ndị nna, nne nne, ụmụ nne nwanyị ndị okenye na onye ọ bụla na-enyere aka ilekọta nwanyị dị ime ma ọ bụ nwata, n'obodo mepere emepe na n'ime obodo n'Africa niile. Ọ dịghị mkpa ka ị mụọ ihe ahụike na mbụ.",
    "Isi 1 na-ekwu maka ime na ọmụmụ: nleta ụlọ ọgwụ, ihe ịrịba ama ihe egwu ndị pụtara \"gaa ugbu a\", na atụmatụ ọmụmụ. Isi 2 na-ekwu maka ụbọchị mbụ na afọ mbụ nwa: nlekọta nwa ọhụrụ, ihe ịrịba ama ihe egwu n'ahụ ụmụ ọhụrụ na ụmụaka, na nri, ọgwụ mgbochi na nlele uto.",
    "Ihe ọmụmụ a na-akụzi mgbochi ọrịa, omume ahụike dị mma na mgbe ị ga-achọ enyemaka. Ọ naghị agwa gị ọgwụ ị ga-aṅụ ma ọ bụ ole, ọ naghịkwa anọchi anya nọọsụ, onye na-ewe nwa (midwife), dọkịta ma ọ bụ onye ọrụ ahụike obodo. Gbasoo ụlọ ọgwụ gị na ụlọ ọrụ ahụike gọọmentị mba gị mgbe niile. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'otu ọrụ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ ahụike ezinụlọ nke otu peeji maka ime ma ọ bụ nwata n'ezinụlọ gị (ma ọ bụ ọmụmaatụ, dị ka Amina, onye dị ime ọnwa 5 na Kano, ma ọ bụ nwa Kofi, onye dị ọnwa 3 na Kumasi): nleta ụlọ ọgwụ ndị fọdụrụ, atụmatụ ọmụmụ (ebe, onye ọrụ ahụike a zụrụ azụ, ụgbọ, ego e debere, onye ga-eso ya na onye ga-elekọta ụlọ), nzọụkwụ nlekọta nwa ọhụrụ maka ụbọchị mbụ, ihe ịrịba ama ihe egwu maka nne na nwa ya na ụlọ ọgwụ kacha nso na nọmba ekwentị mberede, na ụbọchị ọgwụ mgbochi na nlele uto ọzọ site na kaadị ahụike.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nne na ụmụ nwanyị dị ime, ndị nna, nne nne na ndị ọzọ na-elekọta ụmụaka na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Egypt na n'Africa niile. Ọtụtụ bi n'ebe dị anya site n'ụlọ ọgwụ ukwu, na-eji ekwentị Android nkịtị nke data ya dị oke ọnụ, ma na-anata ndụmọdụ ahụike n'aka ezinụlọ, ndị agbata obi na onye ọrụ ahụike obodo.",
    startingPoint: "Ọtụtụ maara na nwanyị dị ime kwesịrị ịga ụlọ ọgwụ, mana ọtụtụ na-amalite n'oge, na-aga ugboro ole na-erughị ihe a dụrụ ọdụ, ma ọ bụ na-anọ n'ụlọ mgbe ihe ịrịba ama ihe egwu pụtara. Ole na ole nwere atụmatụ ọmụmụ e dere ede, ego e debere maka ụgbọ, ma ọ bụ ndepụta ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ na nwata. Ọtụtụ na-edebe kaadị ahụike nwa mana ha anaghị agụ ụbọchị ọgwụ mgbochi ọzọ dị na ya.",
    gap: "Africa nke dị n'okpuru Sahara nwere ọtụtụ ọnwụ ụwa n'oge ime na ọmụmụ, ọnwa mbụ bụkwa oge kacha dị ize ndụ maka nwa. Ọtụtụ n'ime ọnwụ ndị a na-esite n'ilọ azụ: n'ikpebi ịga, n'iru ebe ahụ, na n'inweta nlekọta. Ezinụlọ ndị na-ebu ụzọ hazie atụmatụ, mara ihe ịrịba ama ihe egwu ma debe nleta n'oge na-eme ngwa ngwa ma na-eme ka nne na ụmụaka nọrọ n'udo.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ahụike ọ bụla",
      "Ngwaọrụ: ekwentị nkịtị; a pụkwara ịkụzi ihe ọmụmụ a n'olu dị elu n'otu ìgwè ma ọ bụ na nzukọ ụmụ nwanyị",
      "Ọrụ ahụike, atụmatụ ọmụmụ nwa n'efu, usoro ọgwụ mgbochi na kaadị ahụike dị iche site na mba ruo mba ma na-agbanwe: ndị na-amụ ihe na-ajụ ụlọ ọgwụ ha ma ọ bụ ụlọ ọrụ ahụike gọọmentị",
      "Enweghị ọnụọgụ ọgwụ, atụmatụ ọgwụgwọ ma ọ bụ nchọpụta ọrịa: ihe ọmụmụ a na-akụzi mgbochi na mgbe ị ga-achọ enyemaka",
      "Nzuzo: ọ dịghị mgbe ndị na-amụ ihe ga-ekwerịrị ikwu maka ime ha ma ọ bụ ahụike ha n'ihu ìgwè"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu ime n'ezinụlọ gị na ọnwa a na-atụ anya ọmụmụ ya", action: "ide atụmatụ nleta ụlọ ọgwụ maka ime ahụ nke na-amalite n'ime izu 12 mbụ", standard: "nwere opekata mpe nleta asatọ dị ka WHO dụrụ ọdụ, ma ọ bụ ọnụọgụ ụlọ ọgwụ gị nyere gị" },
    { id: "O2", condition: "Mgbe e nyere gị ndepụta ihe ịrịba ama n'oge ime ma ọ bụ mgbe ọmụmụ gasịrị", action: "ịhọpụta ihe ịrịba ama ihe egwu ndị pụtara na nwanyị ahụ ga-aga ụlọ ọgwụ ugbu a", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi ma họrọ \"gaa ugbu a\" kama \"chere ka anyị hụ\"" },
    { id: "O3", condition: "Maka ọmụmụ na-abịa", action: "ide atụmatụ ọmụmụ na-akpọ aha ebe a na-agwọ ọrịa, ụgbọ, ego e debere na ndị ga-enyere aka", standard: "ebe e dejupụtara akụkụ ọ bụla ma ezinụlọ kwekọrịta na ya tupu ọnwa ikpeazụ" },
    { id: "O4", condition: "Maka ụbọchị mbụ nwa", action: "idepụta nzọụkwụ nlekọta nwa ọhụrụ: idebe nwa ahụ ka ọ dị ọkụ, inye ya ara n'ime otu awa mbụ na idebe eriri afọ ka ọ dị ọcha ma kpọọ nkụ", standard: "n'usoro ziri ezi na n'enweghị omume na-emerụ ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị nkọwa nwa ọhụrụ ma ọ bụ nwata na-arịa ọrịa", action: "ịmata ihe ịrịba ama ihe egwu ndị pụtara na nwa ahụ ga-aga ụlọ ọgwụ ugbu a", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O6", condition: "Site n'iji kaadị ma ọ bụ obere akwụkwọ ahụike nwa", action: "ịchọta ụbọchị ọgwụ mgbochi na nlele uto ọzọ ma dee nzọụkwụ nri dabara afọ nwa ahụ", standard: "n'ahapụghị nleta ọ bụla a gbaghara n'enweghị atụmatụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ime dị mma na ọmụmụ n'enweghị nsogbu",
      lessons: [
        {
          title: "Nleta ụlọ ọgwụ n'oge ime",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dee atụmatụ nleta ụlọ ọgwụ maka ime, malite n'ime izu 12 mbụ.",
          text: [
            "A na-akpọ nlekọta n'oge ime antenatal care (nlekọta ime). N'oge nleta ọ bụla, nọọsụ ma ọ bụ onye na-ewe nwa na-elele ọbara mgbali nne ahụ, ịdị arọ ya na ọbara ya, na-ege nwa ahụ ntị, ma na-enye nlekọta ụlọ ọgwụ mba gị na-enye. A pụrụ ịchọpụta ọtụtụ nsogbu n'oge, tupu ha aghọọ ihe egwu.",
            "WHO na-adụ ọdụ opekata mpe nleta asatọ na onye ọrụ ahụike n'oge ime, nke mbụ n'ime izu 12 mbụ (ọnwa atọ mbụ). Ya mere, ozugbo nwanyị chere na ọ dị ime, ọ na-aga ụlọ ọgwụ. Ụlọ ọgwụ gị nwere ike inye gị usoro nke ya; gbasoo ya.",
            "N'oge nleta mbụ, ụlọ ọgwụ na-enyekarị obere akwụkwọ ma ọ bụ kaadị ahụike nne na nwa. Aha ya dị iche site na mba ruo mba (dịka ọmụmaatụ, Mother and Child Health Handbook na Kenya ma ọ bụ Maternal and Child Health Record Book na Ghana). Debe ya n'akpa rọba, bute ya na nleta ọ bụla, ma dee ụbọchị ọzọ na kalenda ekwentị gị.",
            "Ndị nna na ezinụlọ na-enyekwa aka: nye aka n'ego ụgbọ, soro ya gaa nleta, ma kwe ka o zuo ike. Jụọ ụlọ ọgwụ ma ọ bụ ọfịs mkpuchi ahụike gị ma nlekọta ime ọ bụ n'efu ma ọ bụ e kpuchiri ya n'ebe ị bi; nke a na-agbanwe, ya mere jụọ oge ọ bụla."
          ],
          steps: ["Gaa ụlọ ọgwụ ozugbo i chere na ị dị ime, nke ka mma n'ime izu 12 mbụ.", "Jụọ ọnụọgụ nleta ụlọ ọgwụ na-ahazi na mgbe ha ga-adị.", "Dee ụbọchị ọ bụla n'obere akwụkwọ ahụ na na kalenda ekwentị gị.", "Bute obere akwụkwọ ahụ na nleta ọ bụla.", "Ọ bụrụ na i gbaghara otu nleta, gaa ozugbo i nwere ike; echela nleta ọzọ."],
          words: [["Antenatal care (nlekọta ime)", "nlele ahụike maka nwanyị n'oge ime, tupu a mụọ nwa ahụ."], ["Nleta (contact)", "nleta ma ọ bụ nzukọ na onye ọrụ ahụike, n'ụlọ ọgwụ ma ọ bụ n'ụlọ."], ["Onye na-ewe nwa (midwife)", "onye ọrụ ahụike a zụrụ azụ na-elekọta ụmụ nwanyị n'oge ime, ọmụmụ na mgbe ọmụmụ gasịrị."]],
          slides: [
            { title: "Nlekọta ime (antenatal care)", bullets: ["Nlele ahụike n'oge ime", "Ọ na-achọpụta nsogbu n'oge", "Ọbara mgbali, ịdị arọ, ọbara na nwa ahụ"] },
            { title: "Mgbe ị ga-aga", bullets: ["Nleta mbụ n'ime izu 12 mbụ", "WHO na-adụ ọdụ opekata mpe nleta 8", "Gbasoo usoro ụlọ ọgwụ gị"] },
            { title: "Debe obere akwụkwọ ahụ", bullets: ["Bute ya na nleta ọ bụla", "Debe ya ka ọ kpọọ nkụ n'akpa rọba", "Dee ụbọchị ọzọ n'ekwentị gị"] },
            { title: "Ezinụlọ nwere ike inye aka", bullets: ["Ego ụgbọ", "Soro ya gaa nleta", "Kwe ka o zuo ike"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Were otu ime n'ezinụlọ gị, ma ọ bụ ọmụmaatụ Fatou na Thiès, Senegal, onye dị ime izu 10. Dee ọnwa nleta mbụ ma depụta ọnwa nleta ndị ọzọ. N'akụkụ nke ọ bụla, dee onye ga-eso ya.",
          youCanNow: "ịhazi nleta ụlọ ọgwụ maka ime, na-amalite n'oge, ma debe ụbọchị ndị ahụ n'ebe ị ga-ahụ ha.",
          quickCheck: [
            { objective: "O1", q: "Olee mgbe nwanyị kwesịrị ịga nleta ụlọ ọgwụ mbụ ya n'oge ime?", options: ["Naanị mgbe nwa ahụ chọrọ ịpụta", "N'ọnwa atọ ikpeazụ", "Ozugbo o chere na ọ dị ime, nke ka mma n'ime izu 12 mbụ", "Naanị ma ọ bụrụ na ahụ adịghị ya"], answer: 2, why: "WHO na-adụ ọdụ nleta mbụ n'ime izu 12 mbụ, ka a chọpụta nsogbu n'oge." },
            { objective: "O1", q: "Nleta ole na onye ọrụ ahụike ka WHO na-adụ ọdụ n'oge ime?", options: ["Opekata mpe asatọ", "Otu", "Abụọ", "Ọ dịghị ma ọ bụrụ na ahụ dị ya mma"], answer: 0, why: "WHO na-adụ ọdụ opekata mpe nleta asatọ; ụlọ ọgwụ gị nwere ike inye usoro nke ya." }
          ]
        },
        {
          title: "Ihe ịrịba ama ihe egwu n'oge ime na mgbe ọmụmụ gasịrị",
          objectives: ["O2"],
          minutes: 5,
          goal: "Mata ihe ịrịba ama ihe egwu ndị pụtara na nwanyị dị ime ma ọ bụ nne mụrụ nwa ọhụrụ ga-aga ụlọ ọgwụ ugbu a.",
          text: [
            "Ọtụtụ ime na-aga nke ọma. Mana ụfọdụ ihe ịrịba ama pụtara ihe egwu maka nne ma ọ bụ nwa ahụ. Mgbe ị hụrụ ha, echela ịhụ ma ha ga-agafe, echekwala nleta ọzọ. Gaa ụlọ ọgwụ ma ọ bụ ụlọ ọgwụ ukwu ugbu a, ehihie ma ọ bụ abalị.",
            "Ihe ịrịba ama ihe egwu n'oge ime: ọbara na-esi n'ọtụ nwanyị (vagina) apụta; isi ọwụwa siri ike na anya na-ahụchaghị ụzọ; ọdịdọ (convulsions); ihu na aka na-aza aza; ahụ ọkụ; mgbu siri ike n'afọ; nwa na-emegharịkwa ahụ nke ukwuu ma ọ bụ na-adịghị emegharị ma ọlị; mmiri na-agbapụ tupu mgbu ọmụmụ amalite; iku ume na-esi ike.",
            "Ihe ịrịba ama ihe egwu mgbe ọmụmụ gasịrị: ọbara ọgbụgba dị ukwuu (na-emiju akwa ma ọ bụ pad ngwa ngwa); ahụ ọkụ; mmiri na-esi ísì ọjọọ na-esi n'ọtụ apụta; isi ọwụwa siri ike, anya na-ahụchaghị ụzọ ma ọ bụ ọdịdọ; mgbu ma ọ bụ aza n'otu ụkwụ; mwute dị ukwuu ma ọ bụ enweghị ike ịnagide ihe ọtụtụ ụbọchị.",
            "Ọbara ọgbụgba dị ukwuu, ọrịa nje na ọbara mgbali dị elu so n'ihe ndị kacha akpata ọnwụ n'oge ime na ọmụmụ, ha nwekwara ike igbu mmadụ ngwa ngwa. Ime ngwa ngwa na-azọpụta ndụ. Kpọọ onye ọrụ ahụike obodo ma ọ bụ nọmba mberede mpaghara gị na-eji ka ị na-aga."
          ],
          steps: ["Mụta ihe ịrịba ama ihe egwu ma mado ndepụta ya na mgbidi n'ụlọ.", "Ọ bụrụ na ị hụ otu, kwụsị ihe ị na-eme.", "Gaa ụlọ ọgwụ ma ọ bụ ụlọ ọgwụ ukwu ugbu a, jiri obere akwụkwọ ahụike.", "Kpọọ tupu i ruo ma ọ bụ kpọọ onye ọrụ ahụike obodo ka ị na-aga."],
          words: [["Ihe ịrịba ama ihe egwu", "ihe na-egosi na nne ma ọ bụ nwa nwere ike ịnọ n'ihe egwu dị ukwuu ma chọọ nlekọta ugbu a."], ["Ọdịdọ (convulsions)", "ahụ na-ama jijiji na mberede nke mmadụ ahụ enweghị ike ijide."], ["Mmiri ọtụ (discharge)", "mmiri na-esi n'ọtụ nwanyị (vagina) apụta."]],
          slides: [
            { title: "Ihe ịrịba ama ihe egwu pụtara gaa UGBU A", bullets: ["Echela ịhụ ma ọ ga-agafe", "Echela nleta ọzọ", "Ehihie ma ọ bụ abalị"] },
            { title: "N'oge ime", bullets: ["Ọbara ọgbụgba, ọdịdọ, ahụ ọkụ, mgbu siri ike n'afọ", "Isi ọwụwa siri ike na anya na-ahụchaghị ụzọ; ihu ma ọ bụ aka na-aza", "Nwa na-emegharịkwa ahụ nke ukwuu; mmiri na-agbapụ n'oge; iku ume na-esi ike"] },
            { title: "Mgbe ọmụmụ gasịrị", bullets: ["Ọbara ọgbụgba dị ukwuu ma ọ bụ ahụ ọkụ", "Mmiri ọtụ na-esi ísì ọjọọ", "Isi ọwụwa siri ike, anya na-ahụchaghị ụzọ ma ọ bụ ọdịdọ", "Mwute dị ukwuu ma ọ bụ enweghị ike ịnagide ọtụtụ ụbọchị"] },
            { title: "Ime ngwa ngwa na-azọpụta ndụ", bullets: ["Were obere akwụkwọ ahụike", "Kpọọ onye ọrụ ahụike ka ị na-aga"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Dee ihe ịrịba ama ihe egwu n'oge ime na mgbe ọmụmụ gasịrị n'otu mpempe akwụkwọ, n'asụsụ nke gị ma ọ bụrụ na ọ masịrị gị. Tinye aha ụlọ ọgwụ kacha nso na nọmba ekwentị mberede. Mado ya na mgbidi ma ọ bụ chekwaa foto ya n'ekwentị gị.",
          youCanNow: "ịhọpụta ihe ịrịba ama ihe egwu n'oge ime na mgbe ọmụmụ gasịrị ma mara na ị ga-aga ụlọ ọgwụ ozugbo.",
          quickCheck: [
            { objective: "O2", q: "Mariam na Bouaké dị ime ọnwa 7, o nwere isi ọwụwa siri ike na anya na-ahụchaghị ụzọ. Gịnị ka o kwesịrị ime?", options: ["Zuo ike ma hụ otu ahụ ga-adị ya echi", "Chere nleta ụlọ ọgwụ ọzọ ya", "Ṅụkwuo mmiri ma dinara ala", "Gaa ụlọ ọgwụ ma ọ bụ ụlọ ọgwụ ukwu ugbu a"], answer: 3, why: "Isi ọwụwa siri ike na anya na-ahụchaghị ụzọ bụ ihe ịrịba ama ihe egwu; ọ nwere ike ịpụta ọbara mgbali dị elu nke dị ize ndụ." },
            { objective: "O2", q: "Kedu nke bụ ihe ịrịba ama ihe egwu mgbe ọmụmụ gasịrị?", options: ["Ike ịgwụ mgbe ọmụmụ gasịrị", "Ọbara ọgbụgba dị ukwuu na-emiju akwa ngwa ngwa", "Ịchọ ihi ụra mgbe nwa na-ehi ụra", "Agụụ ịgụ"], answer: 1, why: "Ọbara ọgbụgba dị ukwuu mgbe ọmụmụ gasịrị bụ otu n'ime ihe ndị kacha egbu ndị nne, ọ chọkwara nlekọta ugbu a." }
          ]
        },
        {
          title: "Ime atụmatụ ọmụmụ",
          objectives: ["O3"],
          minutes: 5,
          goal: "Dee atụmatụ ọmụmụ na-akpọ aha ebe, ụgbọ, ego na ndị ga-enyere aka.",
          text: [
            "Ọtụtụ ihe egwu n'oge ọmụmụ na-eme ngwa ngwa, o sikwa ike ịhụ ha ka ha na-abịa. Nlekọta site n'aka onye ọrụ ahụike a zụrụ azụ (onye na-ewe nwa, nọọsụ ma ọ bụ dọkịta) n'oge na mgbe ọmụmụ gasịrị na-azọpụta ndụ ndị nne na ụmụ ọhụrụ. Ya mere, atụmatụ kacha enweghị nsogbu bụ ịmụ nwa n'ebe a na-agwọ ọrịa.",
            "Atụmatụ ọmụmụ na-aza ajụjụ ndị dị mfe tupu mgbu ọmụmụ amalite: Kedu ebe a na-agwọ ọrịa? Olee otu anyị ga-esi ruo ebe ahụ n'abalị? Onye ga-akwụ ụgwọ ụgbọ, ego ole ka anyị debere? Onye ga-eso ya? Onye ga-elekọta ụmụaka ndị ọzọ? Onye nwere ike inye ọbara ma ọ bụrụ na ọ dị mkpa?",
            "Malite ịchekwa ego n'oge, ntakịrị kwa izu. Dịka ọmụmaatụ, otu ezinụlọ na Kisumu na-edebe KES 200 kwa izu, otu ezinụlọ na Tamale na-edebekwa GHS 20 kwa izu (ndị a bụ ọmụmaatụ; hazie nke gị). Chekwaa nọmba boda boda, okada, tagzi ma ọ bụ ụgbọ ndị ọrịa (ambulance) n'ekwentị ugbu a.",
            "N'ọnwa ikpeazụ, kwakọọ obere akpa: obere akwụkwọ ahụike, akwa dị ọcha, uwe na okpu maka nwa ahụ, na ihe nne ga-achọ. Kwekọrịta na atụmatụ ahụ na ezinụlọ niile ka onye ọ bụla ghara ịrụ ụka mgbe mgbu ọmụmụ malitere."
          ],
          steps: ["Họrọ ebe a na-agwọ ọrịa ma gaa leta ya tupu ọmụmụ ma ọ bụrụ na ị nwere ike.", "Hazie ụgbọ maka ehihie na abalị, ma chekwaa nọmba ndị ahụ.", "Chekwaa ego kwa izu maka ụgbọ na ụgwọ ndị ọzọ.", "Họrọ onye ga-eso ya na onye ga-elekọta ụlọ.", "Kwakọọ akpa ahụ ma kwekọrịta na atụmatụ ahụ na ezinụlọ."],
          words: [["Atụmatụ ọmụmụ", "atụmatụ e dere ede maka ebe na otu a ga-esi mụọ nwa ahụ na otu ị ga-esi ruo ebe ahụ."], ["Onye ọrụ ahụike a zụrụ azụ", "onye na-ewe nwa, nọọsụ ma ọ bụ dọkịta a zụrụ ilekọta ọmụmụ."], ["Mgbu ọmụmụ (labour)", "mgbu na ọrụ ahụ na-eme iji kwapụta nwa ahụ."]],
          slides: [
            { title: "Gịnị mere atụmatụ ọmụmụ", bullets: ["Ihe egwu ọmụmụ nwere ike ịbịa ngwa ngwa", "Nlekọta onye a zụrụ azụ na-azọpụta nne na nwa", "Hazie ya tupu mgbu ọmụmụ amalite"] },
            { title: "Atụmatụ ahụ na-aza", bullets: ["Kedu ebe a na-agwọ ọrịa?", "Ụgbọ, ehihie na abalị?", "Ego e debere?", "Onye ga-eso ya, onye ga-elekọta ụlọ?"] },
            { title: "Chekwaa ego n'oge", bullets: ["Ntakịrị kwa izu (ego ndị a bụ ọmụmaatụ)", "Chekwaa nọmba ụgbọ ugbu a"] },
            { title: "Kwakọọ akpa ahụ", bullets: ["Obere akwụkwọ ahụike", "Akwa dị ọcha, uwe nwa na okpu", "Ihe nne ga-achọ"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Dee atụmatụ ọmụmụ maka otu ime n'ezinụlọ gị, ma ọ bụ maka Amina na Kano onye ga-amụ nwa n'ime ọnwa atọ. Dejupụta: ebe a na-agwọ ọrịa, ụgbọ (ehihie na abalị), ego e debere kwa izu, onye ga-eso ya, onye ga-elekọta ụlọ, na ihe dị n'akpa ahụ.",
          youCanNow: "ide atụmatụ ọmụmụ na-akpọ aha ebe, ụgbọ, ego na ndị ga-enyere aka.",
          quickCheck: [
            { objective: "O3", q: "Kedu ebe kacha enweghị nsogbu ịmụ nwa?", options: ["N'ụlọ n'enweghị onye a zụrụ azụ", "N'ebe ọ bụla mgbu ọmụmụ malitere", "Ebe a na-agwọ ọrịa nwere onye ọrụ ahụike a zụrụ azụ", "N'ụzọ, iji chekwaa oge"], answer: 2, why: "Nlekọta onye a zụrụ azụ n'oge na mgbe ọmụmụ gasịrị na-azọpụta ndụ ndị nne na ụmụ ọhụrụ." },
            { objective: "O3", q: "Olee mgbe ezinụlọ kwesịrị ikwekọrịta na atụmatụ ọmụmụ?", options: ["Mgbe mgbu ọmụmụ malitere", "Tupu ọnwa ikpeazụ nke ime", "Mgbe a mụsịrị nwa ahụ", "Naanị ma ọ bụrụ na e nwere nsogbu"], answer: 1, why: "Ịhazi n'oge na-egbochi ilọ azụ na ịrụ ụka mgbe mgbu ọmụmụ malitere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ime dị mma na ọmụmụ n'enweghị nsogbu",
        questions: [
          { objective: "O1", q: "Salma na Asyut chere na ọ dị ime izu 8. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Gaa ụlọ ọgwụ ugbu a maka nleta mbụ", "Chere ruo mgbe nwa ahụ ga-emegharị ahụ", "Chere ruo ọnwa ikpeazụ", "Jụọ onye agbata obi kama ụlọ ọgwụ"], answer: 0, why: "WHO na-adụ ọdụ nleta mbụ n'ime izu 12 mbụ." },
          { objective: "O1", q: "Gịnị mere a ga-eji bute obere akwụkwọ ahụike nne na nwa na nleta ọ bụla?", options: ["Ụlọ ọgwụ ga-erekwa ya ọzọ", "Ọ bụ naanị maka nna", "O nwere ndekọ nlele niile na ụbọchị ndị ọzọ", "Ọ dịghị mkpa mgbe nleta mbụ gasịrị"], answer: 2, why: "Obere akwụkwọ ahụ na-edebe akụkọ ahụike na ụbọchị nleta ọzọ n'otu ebe." },
          { objective: "O2", q: "Kedu n'ime ndị a bụ ihe ịrịba ama ihe egwu n'oge ime?", options: ["Ịchọ ụfọdụ nri", "Nwa na-emegharịkwa ahụ nke ukwuu ma ọ bụ na-adịghị emegharị ma ọlị", "Ike ịgwụ ntakịrị", "Ịgba mamịrị ugboro ugboro"], answer: 1, why: "Nwa na-emegharịkwa ahụ nke ukwuu nwere ike ịpụta na nwa ahụ nọ n'ihe egwu; gaa ugbu a." },
          { objective: "O2", q: "Akosua nwere ahụ ọkụ na mmiri ọtụ na-esi ísì ọjọọ ụbọchị ise mgbe ọ mụsịrị nwa. Gịnị ka ezinụlọ kwesịrị ime?", options: ["Chere otu izu", "Nye ya tii ma kwe ka o zuo ike", "Kpọga ya ụlọ ọgwụ ugbu a", "Chere nleta ọgwụ mgbochi nwa ahụ"], answer: 2, why: "Ahụ ọkụ na mmiri ọtụ na-esi ísì ọjọọ bụ ihe ịrịba ama ọrịa nje mgbe ọmụmụ gasịrị; ọ chọrọ nlekọta ugbu a." },
          { objective: "O3", q: "Kedu nke bụ akụkụ nke ezigbo atụmatụ ọmụmụ?", options: ["Nọmba ụgbọ e chekwara maka ehihie na abalị", "Ichere ikpebi ruo mgbe mgbu ọmụmụ malitere", "Ibu ụzọ mefuo ego e chekwara", "Ịghara ịgwa ezinụlọ"], answer: 0, why: "Ụgbọ e hazirela, ego na ndị ga-enyere aka na-egbochi ilọ azụ dị ize ndụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ụbọchị mbụ na afọ mbụ nwa gị",
      lessons: [
        {
          title: "Ilekọta nwa ọhụrụ n'ụbọchị mbụ",
          objectives: ["O4"],
          minutes: 5,
          goal: "Depụta nzọụkwụ nlekọta nwa ọhụrụ maka ụbọchị mbụ: okpomọkụ, inye ara n'oge na eriri afọ dị ọcha.",
          text: [
            "Nwa ọhụrụ enweghị ike idebe onwe ya ka ọ dị ọkụ. Hichaa nwa ahụ ka ọ kpọọ nkụ, wee tinye ya akpụkpọ n'akpụkpọ n'obi nne ya, kpuchie ha abụọ n'akwa, ma kpụkwasị ya okpu. Asala ya ahụ ozugbo; jụọ onye ọrụ ahụike mgbe a ga-asa ya ahụ mbụ.",
            "Malite inye nwa ara n'ime otu awa mbụ mgbe a mụrụ ya. Mmiri ara mbụ nke dị oké na odo odo (colostrum) dị mma maka nwa ahụ; atụfula ya. WHO na-adụ ọdụ naanị mmiri ara n'ime ọnwa 6 mbụ: enweghị mmiri, enweghị tii, enweghị mmiri glucose, enweghịkwa ihe ọṅụṅụ ma ọ bụ nri ọzọ.",
            "Debe eriri afọ ka ọ dị ọcha ma kpọọ nkụ. Etinyela ihe ọ bụla na ya ma ọ bụrụ na onye ọrụ ahụike agwaghị gị, ma saa aka gị tupu i metụ ya aka. Jiri ncha saa aka tupu i nye nwa nri na mgbe i gbanwesịrị nwa ahụ.",
            "Ọ bụrụ na ị nwere ike, nọrọ n'ebe a na-agwọ ọrịa ihe dị ka otu ụbọchị mgbe ọmụmụ gasịrị, ma gaa nlele mgbe ọmụmụ gasịrị nke ụlọ ọgwụ hazirela, maka nne na nwa. Debanye aha ọmụmụ nwa ahụ ma malite ọgwụ mgbochi a na-enye mgbe a mụrụ nwa."
          ],
          steps: ["Hichaa nwa ahụ ka ọ kpọọ nkụ ma tinye ya akpụkpọ n'akpụkpọ na nne ya, kpuchie ya, kpụkwasị ya okpu.", "Nye ya ara n'ime otu awa mbụ.", "Nye naanị mmiri ara.", "Debe eriri afọ ka ọ dị ọcha ma kpọọ nkụ; saa aka tupu i metụ ya.", "Gaa nlele mgbe ọmụmụ gasịrị; debanye aha ọmụmụ; malite ọgwụ mgbochi."],
          words: [["Nwa ọhụrụ", "nwa n'ime ụbọchị 28 mbụ ya."], ["Akpụkpọ n'akpụkpọ (skin-to-skin)", "ijide nwa ahụ gba ọtọ n'obi nne ya gba ọtọ iji mee ka nwa ahụ dị ọkụ."], ["Colostrum (mmiri ara mbụ)", "mmiri ara mbụ dị oké na odo odo, nke jupụtara n'ihe nchebe maka nwa ahụ."], ["Eriri afọ", "akụkụ eriri afọ (umbilical cord) fọdụrụ n'afọ nwa ahụ mgbe a mụsịrị ya."]],
          slides: [
            { title: "Debe nwa ahụ ka ọ dị ọkụ", bullets: ["Hichaa nwa ahụ ka ọ kpọọ nkụ", "Akpụkpọ n'akpụkpọ na nne ya, kpuchie ya", "Kpụkwasị ya okpu; asala ya ahụ ozugbo"] },
            { title: "Nye ara n'oge", bullets: ["N'ime otu awa mbụ", "Colostrum dị mma: atụfula ya", "Naanị mmiri ara n'ime ọnwa 6"] },
            { title: "Debe eriri afọ ka ọ dị ọcha", bullets: ["Ọcha ma kpọọ nkụ", "Ọ dịghị ihe na ya ma ọ bụrụ na onye ọrụ ahụike ekwughị", "Buru ụzọ saa aka"] },
            { title: "Mgbe ọmụmụ gasịrị", bullets: ["Nlele maka nne na nwa", "Debanye aha ọmụmụ", "Malite ọgwụ mgbochi ọmụmụ"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Dee nzọụkwụ nlekọta nwa ọhụrụ maka ụbọchị mbụ n'usoro, dị ka obere ndepụta i nwere ike inye nne ọhụrụ ma ọ bụ nne nne. Wee dee otu omume na-emerụ ahụ ị nụrụ na mpaghara gị na nzọụkwụ n'enweghị nsogbu nke na-anọchi ya.",
          youCanNow: "idepụta nzọụkwụ nlekọta nwa ọhụrụ maka ụbọchị mbụ: okpomọkụ, inye ara n'oge, naanị mmiri ara na eriri afọ dị ọcha.",
          quickCheck: [
            { objective: "O4", q: "Olee mgbe a ga-amalite inye nwa ara?", options: ["Mgbe a sachara nwa ahụ ahụ mbụ", "Mgbe ụbọchị atọ gasịrị", "Mgbe mmiri ara ahụ ghọrọ ọcha", "N'ime otu awa mbụ mgbe a mụrụ ya"], answer: 3, why: "WHO na-adụ ọdụ ịmalite n'ime otu awa mbụ; mmiri ara mbụ na-echebe nwa ahụ." },
            { objective: "O4", q: "Otu onye ikwu kwuru ka e nye nwa ọhụrụ mmiri n'ihi na okpomọkụ dị. Gịnị ka WHO na-adụ ọdụ?", options: ["Naanị mmiri ara n'ime ọnwa 6 mbụ", "Mmiri kwa awa", "Mmiri shuga", "Tii na mmiri ara"], answer: 0, why: "Mmiri ara nwere mmiri niile nwa na-erubeghị ọnwa 6 chọrọ; ihe ọṅụṅụ ndị ọzọ nwere ike iburu nje." }
          ]
        },
        {
          title: "Ihe ịrịba ama ihe egwu n'ahụ ụmụ ọhụrụ na ụmụaka",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mata ihe ịrịba ama ihe egwu ndị pụtara na nwa ọhụrụ ma ọ bụ nwata ga-aga ụlọ ọgwụ ugbu a.",
          text: [
            "Ụmụ ọhụrụ na ụmụaka nwere ike ịrịa ọrịa nke ukwuu ngwa ngwa. Ụfọdụ ihe ịrịba ama pụtara gaa ụlọ ọgwụ ugbu a, ọ bụghị echi.",
            "N'ahụ nwa ọhụrụ: ọ naghị aṅụ ara nke ọma ma ọ bụ enweghị ike ịmị ara; ọ naghị emegharị ahụ dị ka o kwesịrị ma ọ bụ ahụ ya dị ngwọrọ; iku ume ngwa ngwa ma ọ bụ na-esi ike; ahụ ọkụ, ma ọ bụ ahụ ya dị oyi; ọdịdọ.",
            "N'ahụ nwata: enweghị ike ịṅụ ihe ma ọ bụ ịṅụ ara; na-agbọpụta ihe niile; ọdịdọ; ụra na-atụ ya nke ukwuu ma ọ bụ o siri ike ịkpọte ya; iku ume ngwa ngwa ma ọ bụ na-esi ike; ahụ ọkụ (n'ebe ịba na-adị, nwalee ya n'otu ụbọchị ahụ); afọ ọsịsa nwere ọbara, ma ọ bụ nke anya nwa ahụ dabara n'ime, akpịrị na-akpọ ya nkụ nke ukwuu ma ọ bụ ike agwụchaala ya.",
            "Mgbe afọ ọsịsa dị, gaa n'ihu na-enye ara, na-enye ihe ọṅụṅụ na nri, ma jụọ onye ọrụ ahụike maka oral rehydration solution (ORS) na zinc. Mana ọ bụrụ na ị hụ ihe ịrịba ama ihe egwu, gaa ugbu a. Ejila ọgwụ si n'ahịa ma ọ bụ n'aka onye agbata obi n'enweghị ndụmọdụ onye ọrụ ahụike."
          ],
          steps: ["Lee anya maka ihe ịrịba ama ihe egwu, ọbụlagodi n'abalị.", "Ọ bụrụ na ị hụ otu, gaa ụlọ ọgwụ ugbu a, jiri kaadị ahụike nwa ahụ.", "Gaa n'ihu na-enye ara na ihe ọṅụṅụ ka ị na-aga.", "Kpọọ onye ọrụ ahụike obodo ma ọ bụrụ na ị nweghị ike iru ebe ahụ."],
          words: [["Ọdịdọ (convulsions)", "ahụ na-ama jijiji na mberede nke nwa ahụ enweghị ike ijide."], ["Ụkọ mmiri n'ahụ (dehydration)", "mgbe ahụ tụfuru mmiri dị ukwuu, dịka ọmụmaatụ site n'afọ ọsịsa ma ọ bụ agbọ."], ["ORS", "oral rehydration solution: ihe ọṅụṅụ nke mmiri dị ọcha, nnu na shuga nke na-eweghachi mmiri e tụfuru n'afọ ọsịsa."]],
          slides: [
            { title: "Gaa ugbu a, ọ bụghị echi", bullets: ["Ụmụaka na-arịa ọrịa nke ukwuu ngwa ngwa", "Were kaadị ahụike nwa ahụ"] },
            { title: "Ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ", bullets: ["Ọ naghị aṅụ ara ma ọ bụ ọ naghị amị ara", "Ahụ dị ngwọrọ ma ọ bụ ọ naghị emegharị ahụ nke ọma", "Iku ume ngwa ngwa ma ọ bụ na-esi ike; ahụ ọkụ ma ọ bụ oyi; ọdịdọ"] },
            { title: "Ihe ịrịba ama ihe egwu n'ahụ nwata", bullets: ["Enweghị ike ịṅụ ihe ma ọ bụ ịṅụ ara; na-agbọpụta ihe niile", "Ọdịdọ; ụra na-atụ ya nke ukwuu ma ọ bụ o siri ike ịkpọte ya", "Iku ume ngwa ngwa ma ọ bụ na-esi ike; ahụ ọkụ; afọ ọsịsa nwere ọbara"] },
            { title: "Afọ ọsịsa", bullets: ["Gaa n'ihu na-enye ara na ihe ọṅụṅụ", "Jụọ onye ọrụ ahụike maka ORS na zinc", "Anya dabara n'ime ma ọ bụ ike agwụchaala ya: gaa ugbu a"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Mee kaadị ihe ịrịba ama ihe egwu maka ụmụ ọhụrụ na ụmụaka: otu kọlụm maka ụmụ ọhụrụ, otu maka ụmụ ọhụrụ toro ntakịrị na ụmụaka. Tinye ụlọ ọgwụ kacha nso, nọmba onye ọrụ ahụike obodo na otu ị ga-esi ruo ebe ahụ n'abalị.",
          youCanNow: "ịhụ ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ ma ọ bụ nwata ma kpọga nwa ahụ ụlọ ọgwụ ozugbo.",
          quickCheck: [
            { objective: "O5", q: "Nwa dị izu 3 na Kumasi kwụsịrị ịmị ara, ahụ ya dịkwa oyi. Gịnị ka ezinụlọ kwesịrị ime?", options: ["Chere ruo ụtụtụ", "Nye nwa ahụ mmiri", "Gaa ụlọ ọgwụ ugbu a", "Nye ya ọgwụ si n'ahịa"], answer: 2, why: "Ịghara ịṅụ ara na ahụ dị oyi bụ ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ nke chọrọ nlekọta ugbu a." },
            { objective: "O5", q: "Nwata dị afọ 2 nwere afọ ọsịsa, anya ya dabara n'ime, ike agwụchakwala ya. Gịnị ziri ezi?", options: ["Kwụsị ihe ọṅụṅụ niile", "Gaa ụlọ ọgwụ ugbu a", "Kwụsị inye ara", "Chere ụbọchị atọ"], answer: 1, why: "Anya dabara n'ime na enweghị ike bụ ihe ịrịba ama ụkọ mmiri n'ahụ, nke nwere ike igbu nwata; gaa ugbu a." }
          ]
        },
        {
          title: "Nri, ọgwụ mgbochi na nlele uto",
          objectives: ["O6"],
          minutes: 6,
          goal: "Chọta ụbọchị ọgwụ mgbochi na nlele uto ọzọ na kaadị ahụike nwa ma dee nzọụkwụ nri dabara afọ nwa ahụ.",
          text: [
            "Kaadị ma ọ bụ obere akwụkwọ ahụike nwa na-egosi ọgwụ mgbochi e nyere, ụbọchị ọgwụ mgbochi ọzọ na chaatị uto. Ọgwụ mgbochi na-echebe nwa pụọ n'ọrịa dị ka measles (akpata), polio, whooping cough (ụkwara nta ụmụaka), tetanus na ụfọdụ ụdị oyi baa (pneumonia) na afọ ọsịsa. Usoro ya dị iche site na mba ruo mba; gbasoo kaadị gị na ụlọ ọgwụ gị.",
            "Nlele uto n'ụlọ ọgwụ ma ọ bụ n'aka onye ọrụ ahụike obodo na-atụ ịdị arọ na ogologo nwa ahụ. Ahịrị uto kwụ ọtọ n'ala ma ọ bụ na-agbada bụ ịdọ aka na ntị: jụọ onye ọrụ ahụike ihe ị ga-eme.",
            "Nri dị ka afọ si dị (WHO): naanị mmiri ara n'ime ọnwa 6 mbụ. Site n'ihe dị ka ọnwa 6, tinye nri ezinụlọ dị nro, nke a gwọrọ agwọ, ma gaa n'ihu na-enye ara ruo afọ 2 ma ọ bụ karịa. Malite na ntakịrị, ma jiri nwayọọ nye karịa, nri dị oké karịa na ụdị dị iche iche. Ụmụ ọhụrụ dị ọnwa 6 ruo 8 chọrọ nri 2 ruo 3 kwa ụbọchị; ụmụaka dị ọnwa 9 ruo 23 chọrọ nri 3 ruo 4, na nri nta 1 ruo 2 ma ọ dị mkpa.",
            "Ọ bụrụ na i gbaghara ụbọchị ọgwụ mgbochi, atụla egwu: gaa ozugbo i nwere ike, ụlọ ọgwụ ga-eme ka nwa ahụ jide ihe o gbaghara. Dee ụbọchị ọ bụla ọzọ na kalenda ekwentị gị."
          ],
          steps: ["Meghee kaadị ahụike nwa ahụ.", "Chọta ọgwụ mgbochi ikpeazụ na ụbọchị nke ọzọ.", "Chọta nlele uto ikpeazụ ma lee ma ahịrị ahụ na-arịgo elu.", "Dee nzọụkwụ nri dabara afọ nwa ahụ.", "Tinye ụbọchị ndị ọzọ na kalenda ekwentị gị."],
          words: [["Ọgwụ mgbochi (vaccine)", "ọgwụ a na-enye nwa iji chebe ya pụọ n'ọrịa tupu ọ bute ya; ụlọ ọgwụ na-enye ya n'usoro."], ["Chaatị uto", "chaatị dị na kaadị nke na-egosi ịdị arọ nwa ahụ ka oge na-aga."], ["Nri mgbakwunye (complementary feeding)", "itinye nri ezinụlọ site n'ihe dị ka ọnwa 6 ka a na-aga n'ihu na-enye ara."]],
          slides: [
            { title: "Kaadị ahụike nwa", bullets: ["Ọgwụ mgbochi e nyere na ụbọchị ndị ọzọ", "Chaatị uto", "Bute ya na nleta ọ bụla"] },
            { title: "Ọgwụ mgbochi na uto", bullets: ["Gbasoo usoro mba gị", "Ahịrị uto kwụ ọtọ ma ọ bụ na-agbada: jụọ onye ọrụ ahụike", "I gbaghara otu ụbọchị? Gaa ozugbo i nwere ike"] },
            { title: "Nri dị ka afọ si dị (WHO)", bullets: ["Ọnwa 0-6: naanị mmiri ara", "Site n'ihe dị ka ọnwa 6: nri ezinụlọ dị nro na mmiri ara", "Ọnwa 6-8: nri 2-3; ọnwa 9-23: nri 3-4, nri nta 1-2"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ahụike ezinụlọ gị nke otu peeji. Tinye nleta ụlọ ọgwụ ndị fọdụrụ, atụmatụ ọmụmụ, nzọụkwụ nwa ọhụrụ maka ụbọchị mbụ, ihe ịrịba ama ihe egwu maka nne na nwa ya na ụlọ ọgwụ na nọmba mberede, na ụbọchị ọgwụ mgbochi na nlele uto ọzọ site na kaadị ya na nzọụkwụ nri dabara afọ nwa ahụ.",
          youCanNow: "ịgụ kaadị ahụike nwa maka ụbọchị ọgwụ mgbochi na nlele uto ọzọ ma hazie nri dabara afọ nwa ahụ.",
          quickCheck: [
            { objective: "O6", q: "Nwa Kofi gbagharara ụbọchị ọgwụ mgbochi ya n'izu gara aga. Gịnị ka ezinụlọ kwesịrị ime?", options: ["Chere ruo afọ ọzọ", "Hapụ ọgwụ mgbochi ahụ", "Malitegharịa site n'ọgwụ mgbochi mbụ", "Gaa ụlọ ọgwụ ozugbo enwere ike ka o jide ihe o gbaghara"], answer: 3, why: "Ụlọ ọgwụ nwere ike ime ka nwa jide ihe o gbaghara; gaa ozugbo i nwere ike." },
            { objective: "O6", q: "N'ihe dị ka afọ ole ka nwa na-amalite iri nri ezinụlọ tinyere mmiri ara?", options: ["Ihe dị ka ọnwa 6", "Izu 2", "Otu ọnwa", "Afọ 2"], answer: 0, why: "WHO na-adụ ọdụ itinye nri ezinụlọ dị nro site n'ihe dị ka ọnwa 6 ka a na-aga n'ihu na-enye ara." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ụbọchị mbụ na afọ mbụ nwa gị",
        questions: [
          { objective: "O4", q: "Gịnị bụ ụzọ kacha mma isi debe nwa ọhụrụ ka ọ dị ọkụ ozugbo a mụrụ ya?", options: ["Akpụkpọ n'akpụkpọ n'obi nne ya, e kpuchiri ya, ya na okpu", "Ịsa ya ahụ na mmiri oyi", "Ịhapụ nwa ahụ n'ekpuchighị ya", "Itinye nwa ahụ n'ime ụlọ ọzọ"], answer: 0, why: "Akpụkpọ n'akpụkpọ na-eme ka nwa ahụ dị ọkụ ma na-enyere aka ịmalite inye ara." },
          { objective: "O4", q: "Gịnị ka a ga-etinye n'eriri afọ?", options: ["Ntụ ma ọ bụ nsị ehi", "Ọ dịghị ihe ma ọ bụrụ na onye ọrụ ahụike ekwughị; debe ya ka ọ dị ọcha ma kpọọ nkụ", "Bọta", "Apịtị"], answer: 1, why: "Eriri afọ dị ọcha ma kpọọ nkụ na-ebelata ihe egwu ọrịa nje." },
          { objective: "O5", q: "Kedu ihe ịrịba ama n'ahụ nwata pụtara gaa ụlọ ọgwụ ugbu a?", options: ["Obere ụkwara mgbe ọ na-eri nri nkịtị", "Nwata ahụ enweghị ike ịṅụ ihe ma ọ bụ ịṅụ ara", "Eze na-apụta", "Imi na-agba mmiri mgbe ọ na-egwu egwu nke ọma"], answer: 1, why: "Enweghị ike ịṅụ ihe ma ọ bụ ịṅụ ara bụ ihe ịrịba ama ihe egwu n'ozuzu." },
          { objective: "O5", q: "Otu nwata na Kano na-eku ume ngwa ngwa na n'ike n'abalị. Gịnị ka ndị mụrụ ya kwesịrị ime?", options: ["Chere ruo ụlọ ọgwụ ụtụtụ", "Nye ya ọgwụ ụkwara si n'ụlọ ahịa", "Gaa ụlọ ọgwụ ma ọ bụ ụlọ ọgwụ ukwu ugbu a", "Tee ya obi ma chere"], answer: 2, why: "Iku ume ngwa ngwa ma ọ bụ na-esi ike nwere ike ịpụta oyi baa (pneumonia) ma chọọ nlekọta ugbu a." },
          { objective: "O6", q: "Ahịrị uto dị na kaadị akwụla ọtọ ọnwa abụọ. Gịnị ka nne ma ọ bụ nna kwesịrị ime?", options: ["Ọ dịghị ihe; ọ bụ ihe nkịtị", "Kwụsị nleta ụlọ ọgwụ", "Nye naanị mmiri", "Jụọ onye ọrụ ahụike banyere ya"], answer: 3, why: "Ahịrị kwụ ọtọ ma ọ bụ na-agbada bụ ịdọ aka na ntị; onye ọrụ ahụike nwere ike inye aka ịchọpụta ihe kpatara ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ahụike Nne na Nwa: Ime, Ọmụmụ na Afọ Mbụ",
    questions: [
      { objective: "O1", q: "A na-akpọ nlekọta nwanyị n'oge ime:", options: ["Antenatal care (nlekọta ime)", "Postnatal care (nlekọta mgbe ọmụmụ gasịrị)", "Enyemaka mbụ (first aid)", "Nlele uto"], answer: 0, why: "Antenatal pụtara tupu ọmụmụ." },
      { objective: "O1", q: "WHO na-adụ ọdụ nleta ime mbụ:", options: ["N'ọnwa ikpeazụ", "N'ime izu 12 mbụ", "Naanị ma mgbu dị", "Mgbe nwa ahụ megharịrị ahụ"], answer: 1, why: "Ịmalite n'oge na-enyere aka ịchọpụta nsogbu n'oge." },
      { objective: "O1", q: "Nwanyị dị ime gbagharara otu nleta ụlọ ọgwụ. Gịnị kacha mma?", options: ["Chere ruo mgbu ọmụmụ", "Kwụsị ịga", "Gaa ozugbo o nwere ike", "Chere nleta na-esote"], answer: 2, why: "Ịga ozugbo enwere ike na-eme ka nlekọta ya ghara ịkwụsị." },
      { objective: "O2", q: "Kedu nke bụ ihe ịrịba ama ihe egwu n'oge ime?", options: ["Agụụ ịgụ", "Ịnụ ka nwa ahụ na-agba ụkwụ", "Ọbara na-esi n'ọtụ apụta", "Ịchọ ihikwu ụra"], answer: 2, why: "Ọbara ọgbụgba n'oge ime nwere ike ịpụta ihe egwu maka nne na nwa." },
      { objective: "O2", q: "Ihu na aka nwanyị dị ime zara na mberede, o nwekwara isi ọwụwa siri ike. O kwesịrị:", options: ["Ịga ụlọ ọgwụ ugbu a", "Iri nnu ole na ole ma chere", "Ichere nleta ọzọ", "Ihi ụra ka ọ gafee"], answer: 0, why: "Ndị a nwere ike ịbụ ihe ịrịba ama ọbara mgbali dị elu nke dị ize ndụ." },
      { objective: "O2", q: "Ụbọchị abụọ mgbe ọmụmụ gasịrị, nne ahụ na-emiju akwa n'ọbara ngwa ngwa. Ezinụlọ kwesịrị:", options: ["Ichere otu ụbọchị", "Inye ya tii", "Ịkpọga ya ụlọ ọgwụ ugbu a", "Ịgwa ya ka o zuo ike"], answer: 2, why: "Ọbara ọgbụgba dị ukwuu mgbe ọmụmụ gasịrị nwere ike igbu mmadụ ngwa ngwa." },
      { objective: "O2", q: "Gịnị mere ị na-agaghị \"echere ka anyị hụ\" mgbe ihe ịrịba ama ihe egwu pụtara?", options: ["Ụlọ ọgwụ na-emechi n'oge", "Ihe ịrịba ama ihe egwu nwere ike ịka njọ ngwa ngwa, ime ngwa ngwa na-azọpụtakwa ndụ", "Ichere dị ọnụ ala", "Ihe ịrịba ama na-apụ mgbe niile"], answer: 1, why: "Ọtụtụ ọnwụ na-esite n'ilọ azụ n'ikpebi ịga na n'iru ebe ahụ." },
      { objective: "O3", q: "Kedu ajụjụ dị n'atụmatụ ọmụmụ?", options: ["Kedu agba uwe nwa ahụ ga-adị?", "Olee otu anyị ga-esi ruo ebe a na-agwọ ọrịa n'abalị?", "Onye ga-esiri ndị ọbịa nri?", "Gịnị ka a ga-akpọ nwa ahụ?"], answer: 1, why: "Ụgbọ, karịsịa n'abalị, bụ akụkụ dị mkpa nke atụmatụ ọmụmụ." },
      { objective: "O3", q: "Otu ezinụlọ na Dakar chọrọ ka ego dị njikere maka ọmụmụ. Ezigbo nzọụkwụ bụ:", options: ["Ịchekwa ntakịrị kwa izu, malite n'oge", "Ịgbazite ego n'ụbọchị ahụ", "Ịtụ anya na onye agbata obi ga-akwụ", "Ichere ruo mgbu ọmụmụ"], answer: 0, why: "Ịchekwa n'oge pụtara na ego ga-adị njikere mgbe mgbu ọmụmụ malitere." },
      { objective: "O3", q: "Kedu ihe dịrị n'akpa ọmụmụ?", options: ["Ọ dịghị ihe; ụlọ ọgwụ nwere ihe niile", "Naanị ego", "Nri maka ezinụlọ niile", "Obere akwụkwọ ahụike, akwa dị ọcha na uwe nwa"], answer: 3, why: "A chọrọ obere akwụkwọ ahụ na ihe dị ọcha maka nne na nwa n'oge ọmụmụ." },
      { objective: "O4", q: "Gịnị bụ colostrum?", options: ["Ọgwụ mgbochi", "Ụdị tii maka ụmụ ọhụrụ", "Mmiri ara mbụ dị oké na odo odo", "Ude nwa"], answer: 2, why: "Colostrum bụ mmiri ara mbụ, ọ na-echebekwa nwa ahụ." },
      { objective: "O4", q: "N'ime ọnwa 6 mbụ, WHO na-adụ ọdụ ka e nye nwa:", options: ["Mmiri ara na mmiri", "Naanị mmiri ara", "Akamụ", "Mmiri ara ehi"], answer: 1, why: "Naanị mmiri ara; enweghị ihe ọṅụṅụ ma ọ bụ nri ọzọ." },
      { objective: "O4", q: "Kedu nzọụkwụ ụbọchị mbụ ziri ezi?", options: ["Saa nwa ahụ ahụ na mmiri oyi ozugbo", "Tinye ntụ n'eriri afọ", "Chere ụbọchị abụọ tupu i nye ara", "Hichaa nwa ahụ ka ọ kpọọ nkụ ma tinye ya akpụkpọ n'akpụkpọ"], answer: 3, why: "Ihicha na akpụkpọ n'akpụkpọ na-eme ka nwa ọhụrụ dị ọkụ." },
      { objective: "O5", q: "Kedu nke bụ ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ?", options: ["Ihi ụra n'etiti oge nri", "Enweghị ike ịmị ara", "Ịzọ uzere otu ugboro", "Ịkwa ákwá tupu nri"], answer: 1, why: "Nwa ọhụrụ na-enweghị ike ịmị ara chọrọ nlekọta ugbu a." },
      { objective: "O5", q: "Nwata na-agbọpụta ihe niile, ụra na-atụkwa ya nke ukwuu. Ezinụlọ kwesịrị:", options: ["Ichere ruo echi", "Inye ọgwụ si n'ahịa", "Ịghara inye ihe ọṅụṅụ", "Ịga ụlọ ọgwụ ugbu a"], answer: 3, why: "Ịgbọpụta ihe niile na ụra na-atụ nke ukwuu bụ ihe ịrịba ama ihe egwu n'ozuzu." },
      { objective: "O5", q: "Nwata nwere afọ ọsịsa nwere ọbara n'ime ya. Ezinụlọ kwesịrị:", options: ["Ịkpọga nwata ahụ ụlọ ọgwụ", "Ịkwụsị nri na ihe ọṅụṅụ niile", "Ichere ka ọ gafee", "Inye ya mkpụrụ ọgwụ onye agbata obi"], answer: 0, why: "Ọbara n'ime nsị bụ ihe kpatara a ga-achọ nlekọta." },
      { objective: "O5", q: "Ka ị na-aga ụlọ ọgwụ na nwata nwere afọ ọsịsa, ị kwesịrị:", options: ["Ịkwụsị inye ara", "Ịga n'ihu na-enye ara na ihe ọṅụṅụ", "Ịghara inye mmiri", "Inye naanị tii siri ike"], answer: 1, why: "Ihe ọṅụṅụ na mmiri ara na-eweghachi mmiri e tụfuru." },
      { objective: "O6", q: "Ebee ka ị na-ahụ ụbọchị ọgwụ mgbochi ọzọ?", options: ["Na kaadị ahụike nwa", "Na redio", "N'aka onye na-ere ahịa", "Ọ dịghị ebe; ị na-eche ya echiche"], answer: 0, why: "Kaadị ahụ na-egosi ọgwụ mgbochi e nyere na ụbọchị ndị ọzọ." },
      { objective: "O6", q: "Nwata dị ọnwa 10 kwesịrị inwe ihe dị ka nri ole kwa ụbọchị, dị ka WHO si dụọ ọdụ?", options: ["Otu", "3 ruo 4, na nri nta 1 ruo 2 ma ọ dị mkpa", "Naanị mmiri ara", "Iri"], answer: 1, why: "WHO na-adụ ọdụ nri 3 ruo 4 maka ọnwa 9 ruo 23, na nri nta ma ọ dị mkpa." },
      { objective: "O6", q: "Ruo afọ ole ka WHO na-adụ ọdụ ka a gaa n'ihu na-enye ara?", options: ["Ọnwa 3", "Ọnwa 6", "Kpọmkwem otu afọ", "Afọ 2 ma ọ bụ karịa"], answer: 3, why: "Inye ara na-aga n'ihu tinyere nri ezinụlọ ruo afọ 2 ma ọ bụ karịa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nleta ụlọ ọgwụ", objective: "O1", notYet: "Enweghị ụbọchị nleta, ma ọ bụ nleta mbụ dị n'oge ime nke ukwuu.", meets: "Ọ na-edepụta nleta ndị fọdụrụ, nke mbụ n'ime izu 12 mbụ, e dere n'obere akwụkwọ ahụike ma ọ bụ n'ekwentị.", exceeds: "Ọ na-ekwukwa onye ga-eso ya na nleta ọ bụla na otu a ga-esi kwụọ ụgwọ ya." },
      { name: "Atụmatụ ọmụmụ", objective: "O3", notYet: "Otu ma ọ bụ karịa n'ime ebe, ụgbọ, ego ma ọ bụ ndị ga-enyere aka adịghị.", meets: "Ọ na-akpọ aha ebe a na-agwọ ọrịa, ụgbọ ehihie na abalị, ego e debere kwa izu, onye ga-eso ya na onye ga-elekọta ụlọ.", exceeds: "E chekwakwara nọmba ụgbọ, kwakọọ akpa ahụ, ezinụlọ kwekọrịtakwa na atụmatụ ahụ." },
      { name: "Ụbọchị mbụ nwa ọhụrụ", objective: "O4", notYet: "Nzọụkwụ adịghị, ha adịghị n'usoro, ma ọ bụ ha nwere omume na-emerụ ahụ.", meets: "Okpomọkụ (akpụkpọ n'akpụkpọ), inye ara n'ime otu awa mbụ, naanị mmiri ara na eriri afọ dị ọcha ma kpọọ nkụ.", exceeds: "Ọ na-akpọkwa aha otu omume na-emerụ ahụ na mpaghara ahụ na nzọụkwụ n'enweghị nsogbu nke na-anọchi ya." },
      { name: "Ihe ịrịba ama ihe egwu", objective: "O2", notYet: "Ndepụta ahụ hapụrụ ihe ịrịba ama dị mkpa ma ọ bụ na-ekwu ka a chere hụ.", meets: "Ọ na-edepụta ihe ịrịba ama ihe egwu ndị bụ isi maka nne na nwa, ya na ụlọ ọgwụ kacha nso na nọmba mberede.", exceeds: "Ọ na-ekwukwa maka ụgbọ abalị na nọmba onye ọrụ ahụike obodo." },
      { name: "Ihe ịrịba ama ihe egwu n'ahụ nwa", objective: "O5", notYet: "Ihe ịrịba ama ihe egwu n'ahụ nwa adịghị ma ọ bụ e jikọtara ha na ihe ịrịba ama nkịtị.", meets: "Ọ na-edepụta ihe ịrịba ama ihe egwu n'ahụ nwa ọhụrụ na nwata ndị pụtara gaa ugbu a.", exceeds: "Ọ na-akọwa ha nke ọma nke na nne nne ma ọ bụ nwanne nke okenye nwere ike iji ha." },
      { name: "Kaadị, ọgwụ mgbochi na nri", objective: "O6", notYet: "Enweghị ụbọchị ndị ọzọ, ma ọ bụ ndụmọdụ nri adabaghị afọ nwa ahụ.", meets: "Ọ na-enye ụbọchị ọgwụ mgbochi na nlele uto ọzọ site na kaadị ahụ na nzọụkwụ nri ziri ezi maka afọ ya.", exceeds: "Ụbọchị ndị ahụ dị na kalenda ekwentị nwere ncheta." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe dị ime ma ọ bụ ndị ezinụlọ ha gara nleta ụlọ ọgwụ mbụ n'ime izu 12 mbụ (nnyocha nsochi ụbọchị 30)",
      "Ezinụlọ ndị na-akọ na ha nwere atụmatụ ọmụmụ e dere ede, ego e debere na ụgbọ e hazirela",
      "Ụmụaka ndị a na-edebe nleta ọgwụ mgbochi na nlele uto ọzọ ha n'oge, dị ka ndị na-amụ ihe ma ọ bụ ụlọ ọgwụ ndị mmekọ si kọọ",
      "Ndị ọrụ ahụike obodo ndị mmekọ na-akọ na ezinụlọ na-abịa ngwa ngwa mgbe ihe ịrịba ama ihe egwu pụtara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nkịtị, ma ọ bụ nnọkọ ìgwè ebe a na-agụpụta nkuzi n'olu dị elu",
      "Obere akwụkwọ ahụike nne na nwa ma ọ bụ kaadị ahụike nwa, ma ọ bụrụ na ezinụlọ nwere ya",
      "Akwụkwọ na mkpịsị ode maka kaadị ihe ịrịba ama ihe egwu, atụmatụ ọmụmụ na atụmatụ ahụike ezinụlọ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Ezigbo ndị mmekọ: ndị ọrụ ahụike obodo, ndị na-ewe nwa n'ụlọ ọgwụ, ìgwè ụmụ nwanyị, ìgwè nchekwa ego na ìgwè okpukpe; kpọọ onye na-ewe nwa ma ọ bụ nọọsụ ka ọ zaa ajụjụ.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha kwuo maka ime ha, ọnọdụ HIV ha ma ọ bụ ozi ahụike ọzọ nke ha n'ihu ìgwè; jiri ọmụmaatụ ndị dị n'ihe ọmụmụ a kama.",
      "Enyela ọnụọgụ ọgwụ ma ọ bụ ndụmọdụ ọgwụgwọ; zipu ajụjụ ndị dị otu ahụ niile n'ụlọ ọgwụ.",
      "Lelee eziokwu mpaghara tupu nnọkọ: ebe a na-agwọ ọrịa kacha nso, nọmba mberede, usoro ọgwụ mgbochi mpaghara na ma nlekọta ọmụmụ nwa ọ bụ n'efu ma ọ bụ e kpuchiri ya.",
      "Kpọọ ndị nna na nne nne: ọ bụ ezinụlọ na-ekpebikarị maka ịga ụlọ ọgwụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
