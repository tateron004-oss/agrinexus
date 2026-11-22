"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-mechanization.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_HIRE = { name: "FAO: Ọrụ mgbazinye igwe dị ka azụmahịa (igwe ọrụ ugbo na-adigide)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO: Ọrụ mgbazinye igwe dị ka azụmahịa (akwụkwọ ọzụzụ)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO na African Union Commission: Sustainable Agricultural Mechanization: A Framework for Africa (2018), atụmatụ igwe ọrụ ugbo maka Africa", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO: Igwe ọrụ ugbo na-adigide (site na ngwa aka ruo igwe nwere injin)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor: ịkwụ ụgwọ traktọ site n'app, weebụ ma ọ bụ onye nnọchite; nsochi traktọ; ịkwụ ụgwọ nwayọọ ruo mgbe ị nwere ya", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "ILO: Iwu maka ime na iji traktọ n'enweghị ihe egwu (code of practice)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Pest Control Products Board (Kenya): ọgwụ ahụhụ e debanyere aha", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Naịjirịa)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization-ig",
  lang: "ig",
  translationOf: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Igwe Ọrụ Ugbo na Ọrụ Mgbazinye Igwe",
  skills: "Ịhọrọ ọrụ ugbo kwesịrị iji igwe rụọ, Ịtụnyere ego mgbazinye na ego ịnwe igwe, Ịkwụ ụgwọ na ilele ọrụ mgbazinye traktọ, Ịhọrọ obere igwe, Ịrụ ọrụ n'enweghị ihe egwu na idebe akwụkwọ ndekọ nlekọta, Ime atụmatụ azụmahịa mgbazinye igwe",
  outcome: "ikpebi, site na nọmba, ma ị ga-agbazinye ma ọ bụ zụta igwe maka otu ọrụ ugbo: ịhọrọ ọrụ ndị kwesịrị iji igwe rụọ, ịtụnyere ego mgbazinye na ego ịnwe ya, ịkwụ ụgwọ na ilele ọrụ mgbazinye, ịhọrọ obere igwe kwesịrị ekwesị, iji ya n'enweghị ihe egwu ya na akwụkwọ ndekọ nlekọta, na ime atụmatụ ọrụ mgbazinye maka ndị agbata obi gị ma ọ bụrụ na ịnwe ya na-akwụ ụgwọ naanị n'ụzọ ahụ.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị na-eto eto, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ugbo (agripreneurs) na ndị ọrụ ndụmọdụ ugbo (extension workers) na Naịjirịa, Ghana, Kenya, Senegal, Burkina Faso na Africa niile. A ka na-eji aka arụ ọtụtụ ọrụ ugbo n'Africa. Igwe nwere ike ịkụ ihe n'oge, belata ọrụ siri ike ma belata ihe na-efu, mana igwe na-anọ nkịtị ọtụtụ ọnwa n'afọ nwere ike itinye ugbo n'ụgwọ.",
    "Isi 1 bụ maka mkpebi: ọrụ ndị kwesịrị iji igwe rụọ, mgbazinye ma ọ bụ ịnwe ya ya na ọmụmaatụ mgbakọ ego, na ịkwụ ụgwọ ọrụ mgbazinye traktọ, gụnyere ndị na-eji app dị ka Hello Tractor. Isi 2 bụ maka iji igwe: obere igwe dị ka traktọ nwere wiil abụọ, igwe na-ehopụta ọka, igwe na-azọ mkpụrụ na igwe na-agba ọgwụ nwere injin; nchekwa na akwụkwọ ndekọ nlekọta; na ịmalite azụmahịa ọrụ igwe maka ndị agbata obi gị. Ikekọrịta igwe dị ka otu dị n'ihe ọmụmụ \"Ịchịkọta Obodo: Ịkekọrịta Igwe Ọrụ Ugbo na Ịkpa Ụka maka Ihe Ọrụ Ugbo\".",
    "Ọnụ ego niile n'ihe ọmụmụ a bụ naanị ọmụmaatụ; jiri ezi ọnụ ahịa site n'aka ndị na-ere igwe, ndị na-agbazinye ya na ndị na-agbazinye ego. Ihe ọmụmụ a na-akọwa otu mgbazinye ego (loan) na nkwekọrịta lease si arụ ọrụ, mana ọ dịghị enye ndụmọdụ itinye ego: gụchaa nkwekọrịta ọ bụla ma jụọ onye ndụmọdụ ị tụkwasịrị obi. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ maka ugbo gị. Obere nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Mee akwụkwọ mkpebi \"gbazinye ma ọ bụ zụta\" maka otu igwe na otu ọrụ n'ugbo gị (ma ọ bụ ọmụmaatụ dị ka traktọ maka ịkọ hekta 10 nke ọka na Kaduna, ma ọ bụ igwe na-ehopụta ọka maka otu ndị ọrụ ugbo dị nso Tamale): ọrụ ahụ na ihe mere iji igwe rụọ ya ji akwụ ụgwọ; ego ịnwe ya kwa afọ (ego a na-akwụ kwa afọ na ego kwa hekta); ego mgbazinye; ala nha nhata (break-even); mkpebi gị; na iwu nchekwa na akwụkwọ ndekọ nlekọta ị ga-eji. Ọ bụrụ na i kpebie ịzụta, tinye atụmatụ otu peeji iji gbazinye igwe ahụ ndị agbata obi: ọrụ, ndị ahịa na hekta, ọnụ ahịa, ego a na-efu, ala nha nhata, ịkwụ ụgwọ ọrụ na ịkwụ ego, na ihe egwu ndị bụ isi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị na-eto eto, ndị ọrụ n'ugbo, ndị isi otu ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ọrụ ndụmọdụ ugbo na Naịjirịa, Ghana, Kenya, West Africa na-asụ French na ebe ndị ọzọ n'Africa, ndị na-agbazinye ma ọ bụ na-eche ịzụta traktọ ma ọ bụ obere igwe.",
    startingPoint: "Ha na-eji aka ma ọ bụ ehi arụ ọtụtụ ọrụ, ma na-agbazinye traktọ mgbe ụfọdụ site n'aka onye etiti (broker). Ọ bụ mmadụ ole na ole tụnyere ego niile nke ịnwe igwe na nke mgbazinye ya, lelee ọrụ ha kwụrụ ụgwọ ya, ma ọ bụ debe akwụkwọ ndekọ nlekọta. Ụfọdụ ndị ntorobịa na-ahụ mgbazinye igwe dị ka azụmahịa mana ha agbakọbeghị ego ya.",
    gap: "Ndị ọrụ ugbo na-azụta igwe ndị a naghị eji nke ọma, ndị na-efu ego nke ukwuu iji ha, ma ọ bụ na-echere traktọ na-abịa n'oge na-adịghị ma kụọ ihe n'oge na-adịghị. Ha kwesịrị ịhọrọ ọrụ ndị kwesịrị iji igwe rụọ, tụnyere mgbazinye na ịnwe ya site n'ezi nọmba, kwụọ ụgwọ ma lelee ọrụ mgbazinye, jiri igwe n'enweghị ihe egwu, ma ọ bụrụ na ha zụta, nweta ego site n'ọrụ ndị agbata obi ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone na igwe mgbakọ; app ịkwụ ụgwọ ọrụ chọrọ smartphone ma ọ bụ onye nnọchite (booking agent)",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ ugbo",
      "Ọnụ ego bụ ọmụmaatụ; ọnụ ahịa, ọmụrụ nwa ego (interest) na ego mgbazinye dị iche site n'otu ebe gaa n'ọzọ ma na-agbanwe",
      "Ego: kọwaa mgbazinye ego na lease na ihe egwu ha; enweghị ndụmọdụ itinye ego",
      "Nchekwa: igwe nwere ike igbu mmadụ; ụmụaka agaghị arụ ọrụ n'akụkụ igwe; jiri igwe ọgwụ naanị ọgwụ ahụhụ e debanyere aha, dị ka akara ya si kwuo"
    ],
    prerequisites: "Ọ dịghị. \"Agribusiness and Farm Management\" (Azụmahịa Ugbo na Nlekọta Ugbo) na-enyere aka n'ịgbakọ ego."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ ndị dị n'ugbo gị", action: "ịmata ọrụ ndị kwesịrị iji igwe rụọ", standard: "na-enye ihe kpatara ya maka nke ọ bụla: oge kwesịrị ekwesị, ndị ọrụ, ihe na-efu ma ọ bụ ọtụtụ ọrụ" },
    { id: "O2", condition: "Mgbe e nyere gị ọnụ ahịa igwe, ego iji ya na ego mgbazinye ya", action: "ịgbakọ ego ịnwe ya kwa afọ, ego mgbazinye na ala nha nhata", standard: "na mgbakọ ziri ezi na mkpebi doro anya ịgbazinye ma ọ bụ ịzụta" },
    { id: "O3", condition: "Mgbe ị na-agbazinye traktọ ma ọ bụ ọrụ igwe", action: "ikwekọrịta ọnụ ahịa, ala, ụbọchị na ịdị mma ọrụ tupu oge eruo ma lelee ọrụ ahụ tupu ị kwụọ ụgwọ", standard: "na-atụ ala ahụ ma na-enweta akwụkwọ nnata ego (receipt)" },
    { id: "O4", condition: "Mgbe e nyere gị otu ọrụ ugbo na ahịa dị n'obodo gị", action: "ịhọrọ obere igwe dabara ọrụ ahụ, ọtụtụ ọrụ ahụ, na akụkụ igwe na ndị mekanik dị nso", standard: "na-edepụta opekata mpe ihe anọ ị ga-elele tupu ị zụta" },
    { id: "O5", condition: "Tupu na mgbe ọ bụla i jiri igwe", action: "ime nlele nchekwa ma dee ọrụ na nlekọta n'akwụkwọ ndekọ", standard: "na-ahapụghị iwu nchekwa ọ bụla, ya na ụbọchị n'ihe ọ bụla e dere" },
    { id: "O6", condition: "Mgbe e nyere gị otu igwe na ugbo ndị gbara gị gburugburu", action: "ide atụmatụ otu peeji maka ọrụ mgbazinye igwe", standard: "nwere ọrụ, ndị ahịa, ọnụ ahịa, ego a na-efu, ala nha nhata na ihe egwu" }
  ],
  chapters: [
    {
      name: "Isi 1: Gbazinye ma ọ bụ zụta?",
      lessons: [
        {
          title: "Ọrụ ndị kwesịrị iji igwe rụọ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Mata ọrụ ndị dị n'ugbo gị kwesịrị iji igwe rụọ.",
          text: [
            "Igwe ọrụ ugbo (mechanization) pụtara iji ngwa na igwe arụ ọrụ ugbo, site na ngwa aka ka mma na anụmanụ na-adọ ihe ruo traktọ na igwe nwere injin. FAO na-ekwusi ike na ị ga-ahọrọ ihe dabara ugbo ahụ, ndị mmadụ na ebe ahụ. Igwe na-akwụ ụgwọ mgbe ọ na-enweta ma ọ bụ na-echekwa ego karịa ihe ọ na-efu.",
            "Ọrụ ndị na-akwụkarị ụgwọ: ịkwado ala, mgbe ịkọ ala ma ọ bụ ịgwụ ala n'oge mgbe mmiri mbụ zochara na-eme ka ị kụọ ihe n'oge; ịzọ mkpụrụ na ịhopụta ọka, ebe igwe na-arụ n'awa ole na ole ihe na-ewe ọtụtụ mmadụ ọtụtụ ụbọchị, ma mkpụrụ na-efu n'ala na-ebelata; ibu ihe owuwe ihe ubi na ihe ọrụ ugbo; ịgbapụta mmiri; na ịkwadebe ihe dị ka ịgwọ akpụ ma ọ bụ igwe nri. Ọrụ ndị na-adịghị akwụ ụgwọ nke ukwuu: obere ala, ọrụ dị ọnụ ala ma dị ngwa n'aka, ma ọ bụ ọrụ ị na-arụ naanị otu ugboro n'afọ maka awa ole na ole.",
            "Jụọ ajụjụ anọ maka ọrụ ọ bụla. Oge kwesịrị ekwesị: ime ya n'oge na-adịghị ọ na-ebelata owuwe ihe ubi? Ndị ọrụ: ndị ọrụ ọ dị ụkọ ma ọ bụ dị oke ọnụ n'oge ahụ? Ihe na-efu: iji aka rụọ ya ọ na-eme ka ihe ubi fuo? Ọtụtụ ọrụ: ọrụ ọ zuru ezu iji mee ka igwe nọgide na-arụ ọrụ? Wee tụnyere ego iji aka na ego iji igwe. Ọmụmaatụ (ọnụ ego bụ naanị ọmụmaatụ): ịkọ hekta 1 n'aka na-ewe ụbọchị ọrụ 25 n'ụgwọ GHS 50 = GHS 1,250, ebe mgbazinye traktọ na-efu GHS 600 kwa hekta."
          ],
          steps: ["Depụta ọrụ ukwu ọ bụla n'ugbo gị n'afọ niile.", "Maka nke ọ bụla, jụọ: oge kwesịrị ekwesị, ndị ọrụ, ihe na-efu, ọtụtụ ọrụ.", "Gbakọọ ego iji aka: ụbọchị ọrụ x ụgwọ ụbọchị.", "Chọta ego iji igwe: ego mgbazinye x hekta.", "Kaa akara n'ọrụ ndị igwe na-efu obere ego ma ọ bụ na-enweta karịa."],
          words: [["Igwe ọrụ ugbo (Mechanization)", "iji ngwa na igwe, site na ngwa aka ka mma ruo traktọ, arụ ọrụ ugbo."], ["Oge kwesịrị ekwesị (Timeliness)", "ime ọrụ n'oge ziri ezi, dị ka ịkụ ihe obere oge mgbe mmiri malitere izo."], ["Ụbọchị ọrụ (Person-day)", "ọrụ otu onye na-arụ n'otu ụbọchị."]],
          slides: [
            { title: "Mgbe igwe na-akwụ ụgwọ", bullets: ["Ọ na-enweta ma ọ bụ na-echekwa ego karịa ihe ọ na-efu", "Site na ngwa aka ka mma ruo traktọ", "Dabara ugbo, ndị mmadụ na ebe ahụ"] },
            { title: "Ọrụ ndị na-akwụkarị ụgwọ", bullets: ["Ịkwado ala n'oge", "Ịzọ mkpụrụ na ịhopụta ọka: ngwa ngwa, obere ihe na-efu", "Ibu ihe, ịgbapụta mmiri, ịkwadebe ihe"] },
            { title: "Ajụjụ anọ", bullets: ["Oge: ime ya n'oge na-adịghị ọ na-ebelata owuwe?", "Ndị ọrụ: ha dị ụkọ ma ọ bụ dị oke ọnụ?", "Ihe na-efu? Ọtụtụ ọrụ?"] },
            { title: "Tụnyere ego", bullets: ["N'aka: ụbọchị ọrụ x ụgwọ", "Ọmụmaatụ: ụbọchị 25 x GHS 50 = GHS 1,250 kwa ha", "Ọmụmaatụ mgbazinye igwe: GHS 600 kwa ha"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "Depụta ọrụ ukwu ise n'ugbo gị. Maka nke ọ bụla, zaa ajụjụ anọ ahụ (oge, ndị ọrụ, ihe na-efu, ọtụtụ ọrụ) ma tụnyere ego iji aka na ego iji igwe. Gbaa gburugburu ọrụ abụọ kacha akwụ ụgwọ iji igwe rụọ.",
          youCanNow: "ịhọrọ ọrụ ndị dị n'ugbo gị kwesịrị iji igwe rụọ ma kwuo ihe kpatara ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ịkọ ala n'oge ji akwụkarị ụgwọ?", options: ["Traktọ dị ọnụ ala n'oge ọkọchị", "Ịkụ ihe n'oge mgbe mmiri zochara nwere ike ịbawanye owuwe", "Ịkọ ala n'oge na-adịghị na-egbu ahịhịa karịa", "Ọ na-eme ka ubi dị mma n'anya"], answer: 1, why: "Oge dị mkpa: ịkụ ihe n'oge na-adịghị na-ebelatakarị owuwe ihe ubi." },
            { objective: "O1", q: "Ịhopụta tọn 2 nke ọka n'aka na-ewe ụbọchị ọrụ 20 n'ụgwọ NGN 4,000. Ọrụ igwe na-ehopụta ọka na-efu NGN 50,000. Kedu nke dị ọnụ ala?", options: ["Ọrụ igwe na-ehopụta ọka", "Ịhopụta n'aka", "Ha na-efu otu ego ahụ", "Ị pụghị ịmata"], answer: 0, why: "Ịhopụta n'aka na-efu 20 x 4,000 = NGN 80,000, karịa NGN 50,000." }
          ]
        },
        {
          title: "Mgbazinye ma ọ bụ ịnwe igwe: ọmụmaatụ mgbakọ ego",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gbakọọ ego ịnwe igwe na ego mgbazinye ya ma chọta ala nha nhata.",
          text: [
            "Ịnwe igwe nwere ego a na-akwụ kwa afọ (fixed costs) ọbụlagodi ma ọ dịghị mgbe ọ na-arụ ọrụ: uru ọ na-efu ka ọ na-aka nka (depreciation), ọmụrụ nwa ego mgbazinye (loan) ma ọ bụ ihe ego ahụ gaara enweta n'ebe ọzọ, inshọransị, na ụlọ ndebe ya. O nwekwara ego iji ya kwa hekta: mmanụ ụgbọ, mmanụ igwe, mmezi na onye na-anya ya. Mgbazinye nwere naanị otu ego: ego mgbazinye kwa hekta.",
            "Ọmụmaatụ mgbakọ maka traktọ na ngwa ịkọ ala na Naịjirịa (ọnụ ego niile bụ naanị ọmụmaatụ; jiri ezi ọnụ ahịa na ezi ọmụrụ nwa ego nke onye na-agbazinye gị ego): ọnụ ahịa NGN 30,000,000, uru ya ga-abụ NGN 6,000,000 mgbe afọ 10 gachara, ya mere depreciation = (30,000,000 - 6,000,000) / 10 = NGN 2,400,000 kwa afọ. Ọmụrụ nwa ego (ọmụmaatụ) NGN 1,800,000 kwa afọ, inshọransị na ụlọ ndebe NGN 600,000. Ego a na-akwụ kwa afọ = NGN 4,800,000 kwa afọ. Ego iji ya = NGN 25,000 kwa hekta. Ego mgbazinye = NGN 60,000 kwa hekta.",
            "Hekta ọ bụla i ji traktọ nke gị kọọ na-echekwa 60,000 - 25,000 = NGN 35,000 ma e jiri ya tụnyere mgbazinye. Ala nha nhata = ego a na-akwụ kwa afọ / ego e chekwara kwa hekta = 4,800,000 / 35,000 = ihe dị ka hekta 137 kwa afọ. Onye ọrụ ugbo nwere hekta 10 kwesịrị ịgbazinye; ịnwe ya na-akwụ ụgwọ naanị ma ọ bụrụ na traktọ ahụ na-arụkwa ọrụ n'ugbo ndị agbata obi. Chebarakwa ihe nọmba anaghị egosi echiche: ịnwe ya pụtara na ị ga-akọ ala n'oge, ebe mgbazinye pụtara enweghị mgbazinye ego na enweghị mmezi. Lease na nkwekọrịta ịkwụ ụgwọ nwayọọ (pay-as-you-go) bụ nhọrọ ndị ọzọ; gụchaa nkwekọrịta ọ bụla ma jụọ onye ndụmọdụ ị tụkwasịrị obi."
          ],
          steps: ["Depreciation kwa afọ = (ọnụ ahịa - uru ya na njedebe) / afọ ole a ga-eji ya.", "Gbakwunye ọmụrụ nwa ego, inshọransị na ụlọ ndebe: ndị a bụ ego a na-akwụ kwa afọ.", "Gbakwunye mmanụ ụgbọ, mmanụ igwe, mmezi na onye na-anya ya kwa hekta: ego iji ya.", "Ego e chekwara kwa hekta = ego mgbazinye - ego iji ya.", "Ala nha nhata = ego a na-akwụ kwa afọ / ego e chekwara kwa hekta.", "Tụnyere ya na hekta gị ma kpebie; detu oge kwesịrị ekwesị na ihe egwu."],
          words: [["Depreciation", "uru igwe na-efu kwa afọ ka ọ na-aka nka."], ["Ego a na-akwụ kwa afọ (Fixed costs)", "ego ị na-akwụ kwa afọ ma igwe ahụ rụrụ ọrụ ma ọ bụ na ọ rụghị."], ["Ala nha nhata (Break-even area)", "hekta kwa afọ mgbe ịnwe igwe na-efu otu ego ahụ dị ka mgbazinye ya."]],
          slides: [
            { title: "Ego ịnwe igwe", bullets: ["Kwa afọ: depreciation, ọmụrụ nwa ego, inshọransị, ụlọ ndebe", "Iji ya kwa hekta: mmanụ ụgbọ, mmanụ igwe, mmezi, onye na-anya ya", "Mgbazinye: otu ego mgbazinye kwa hekta"] },
            { title: "Ọmụmaatụ: traktọ na Naịjirịa", bullets: ["Depreciation (30M - 6M) / 10 = NGN 2.4M kwa afọ", "Ego a na-akwụ kwa afọ niile: NGN 4.8M", "Iji ya NGN 25,000 kwa ha; mgbazinye NGN 60,000 kwa ha"] },
            { title: "Ala nha nhata", bullets: ["Ego e chekwara kwa ha: 60,000 - 25,000 = 35,000", "4,800,000 / 35,000 = ihe dị ka ha 137 kwa afọ", "Ugbo ha 10: gbazinye. Naanị ọmụmaatụ"] },
            { title: "Karịa nọmba", bullets: ["Ịnwe ya: ị na-akọ ala n'oge", "Mgbazinye: enweghị mgbazinye ego, enweghị mmezi", "Lease na loan: gụchaa ya, jụọ onye ndụmọdụ"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Nweta ezi ọnụ ahịa maka otu igwe ị na-eche ịzụta (ọnụ ahịa, afọ ole ọ ga-adịru na uru ya na njedebe, ego iji ya na ego mgbazinye n'obodo gị). Gbakọọ ego a na-akwụ kwa afọ, ego e chekwara kwa hekta na ala nha nhata, ma dee ma ị ga-agbazinye ma ọ bụ zụta.",
          youCanNow: "ịtụnyere ego ịnwe igwe na ego mgbazinye ya ma chọta ala nha nhata.",
          quickCheck: [
            { objective: "O2", q: "Igwe na-ehopụta ọka na-efu GHS 20,000, uru ya ga-abụ GHS 4,000 mgbe afọ 8 gachara. Kedu depreciation ya kwa afọ?", options: ["GHS 1,500", "GHS 2,500", "GHS 2,000", "GHS 3,000"], answer: 2, why: "(20,000 - 4,000) / 8 = 2,000 kwa afọ." },
            { objective: "O2", q: "Ego a na-akwụ kwa afọ bụ KES 300,000, ịnwe ya na-echekwa KES 6,000 kwa hekta. Kedu ala nha nhata?", options: ["Hekta 30", "Hekta 40", "Hekta 60", "Hekta 50"], answer: 3, why: "300,000 / 6,000 = hekta 50 kwa afọ." }
          ]
        },
        {
          title: "Mgbazinye traktọ na ọrụ ndị na-eji app",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kwụọ ụgwọ ọrụ mgbazinye ma lelee ọrụ ahụ tupu ị kwụọ ego.",
          text: [
            "Ị nwere ike ịgbazinye igwe n'aka onye agbata obi ma ọ bụ onye nwe traktọ, otu mmekọ (cooperative) ma ọ bụ otu ndị ọrụ ugbo, ebe mgbazinye nke gọọmentị ma ọ bụ nke onwe, ma ọ bụ ọrụ na-eji app. Hello Tractor bụ otu ọmụmaatụ: ndị ọrụ ugbo na-akwụ ụgwọ ọrụ traktọ site na app ekwentị ya ma ọ bụ app weebụ ya, ma ọ bụ site n'aka ndị nnọchite (booking agents: ndị ọrụ ndụmọdụ na ndị ọrụ n'ubi na-akwụ ụgwọ maka ndị ọrụ ugbo), ndị nwe traktọ na-ejikwa ya esochi traktọ ha na mmanụ ụgbọ site na GPS. Ọ na-enyekwa nkwekọrịta ịkwụ ụgwọ nwayọọ (pay-as-you-go) iji nyere ndị mmadụ aka ịnwe traktọ. Ụlọ ọrụ ahụ na-ekwu na ọ na-arụ ọrụ na mba Africa karịrị 20, gụnyere Naịjirịa; lelee ihe dị n'obodo gị.",
            "Traktọ na-ebu ụzọ aga ebe ọrụ dị ukwuu n'otu ebe. Ịkwụ ụgwọ ọnụ na ndị agbata obi gị, ka traktọ ahụ wee rụọ ọtụtụ ugbo n'otu njem, na-eme ka o yikarịa na ọ ga-abịa n'oge.",
            "Tupu ọrụ amalite, kwekọrịta n'ederede ma ọ bụ site n'ozi: ọnụ ahịa kwa acre ma ọ bụ hekta, otu a ga-esi tụọ ala ahụ, ụbọchị, omimi na ụdị ọrụ, na onye ga-akwụ ụgwọ mmanụ ụgbọ. Tụọ ala ahụ n'onwe gị, site na teepu ma ọ bụ app GPS dị n'ekwentị. Mgbe ọrụ gachara, lelee ya: omimi ziri ezi, ọ dịghị ahịrị a hapụrụ, a rụchara ubi ahụ niile. Kwụọ ụgwọ naanị mgbe i lelechara, site n'ezi app ahụ, ego ekwentị (mobile money) ma ọ bụ ya na akwụkwọ nnata ego. Akwụla onye ị na-amaghị ụgwọ tupu oge eruo na mpụga ezi app ahụ, ekesakwala PIN ma ọ bụ koodu mgbe ọ bụla."
          ],
          steps: ["Họrọ ọrụ: onye agbata obi, otu, ebe mgbazinye ma ọ bụ app (dịka ọmụmaatụ Hello Tractor).", "Kwụọ ụgwọ ọrụ n'oge, ọnụ na ndị agbata obi ma ọ bụrụ na ị nwere ike.", "Kwekọrịta ọnụ ahịa, otu a ga-esi tụọ ala, ụbọchị, omimi na mmanụ ụgbọ tupu oge eruo.", "Tụọ ala ahụ n'onwe gị.", "Lelee ọrụ ahụ: omimi, ọ dịghị ahịrị a hapụrụ, ubi ahụ niile.", "Kwụọ ego mgbe i lelechara; nweta akwụkwọ nnata ego ma ọ bụ ndekọ app; ekesala PIN mgbe ọ bụla."],
          words: [["Onye nnọchite (Booking agent)", "onye na-akwụ ụgwọ ọrụ igwe maka ndị ọrụ ugbo, na-ejikarị app."], ["Ịkwụ ụgwọ nwayọọ (Pay-as-you-go, PAYG)", "ịkwụ ụgwọ maka ihe n'obere ego n'ime oge ka ị na-eji ya, ruo mgbe ọ ghọrọ nke gị."], ["Ego mgbazinye (Hire rate)", "ọnụ ahịa ọrụ ahụ na-ana, na-abụkarị kwa acre ma ọ bụ kwa hekta."]],
          slides: [
            { title: "Ebe ị ga-agbazinye", bullets: ["Ndị agbata obi, otu, ebe mgbazinye", "App dị ka Hello Tractor: app, weebụ ma ọ bụ onye nnọchite", "Lelee ihe na-arụ ọrụ n'obodo gị"] },
            { title: "Mee ka traktọ bịa n'oge", bullets: ["Kwụọ ụgwọ ọrụ n'oge", "Kwụọ ụgwọ ọnụ na ndị agbata obi", "Ọtụtụ ugbo n'otu njem"] },
            { title: "Kwekọrịta tupu ọrụ", bullets: ["Ọnụ ahịa kwa acre ma ọ bụ hekta; otu a ga-esi tụọ ala", "Ụbọchị, omimi, ụdị ọrụ, mmanụ ụgbọ", "N'ederede ma ọ bụ site n'ozi"] },
            { title: "Lelee, wee kwụọ ụgwọ", bullets: ["Tụọ ala ahụ n'onwe gị", "Omimi ziri ezi; ọ dịghị ahịrị a hapụrụ", "Kwụọ site n'app, ego ekwentị ma ọ bụ akwụkwọ nnata; enweghị PIN"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Chọta ọrụ mgbazinye abụọ dị nso gị (onye nwe traktọ, otu, ebe mgbazinye ma ọ bụ app). Jụọ nke ọ bụla ọnụ ahịa kwa hekta, otu ha si atụ ala, mgbe ha nwere ike ịbịa, na otu ị ga-esi kwụọ ụgwọ. Dee obere ozi ịkwụ ụgwọ ọrụ nke na-edepụta usoro niile.",
          youCanNow: "ịkwụ ụgwọ ọrụ traktọ ma ọ bụ igwe nwere usoro doro anya ma lelee ọrụ ahụ tupu ị kwụọ ego.",
          quickCheck: [
            { objective: "O3", q: "Olee mgbe ị ga-akwụ ụgwọ ịkọ ala site na traktọ?", options: ["Mgbe i lelechara ọrụ na ala ahụ, ya na akwụkwọ nnata ego ma ọ bụ ndekọ app", "Tupu traktọ abịa, n'ego aka nye onye ọ bụla kpọrọ oku", "Ọkara nye onye ị na-amaghị site n'ozi ederede", "Ọ dịghị mgbe ọ bụla"], answer: 0, why: "Ibu ụzọ lelee na inweta ndekọ na-echebe gị pụọ n'ọrụ ọjọọ na aghụghọ." },
            { objective: "O3", q: "Kedu otu ị ga-esi mee ka traktọ i gbazinyere yikarịa ịbịa n'oge?", options: ["Kwụọ ụgwọ ọrụ n'oge ikpeazụ", "Kwụọ ụgwọ naanị gị maka obere ala", "Kwụọ ụgwọ ọrụ n'oge, ọnụ na ndị agbata obi", "Kwụọ onye ị na-amaghị ego mgbakwunye tupu oge eruo"], answer: 2, why: "Ọtụtụ ugbo n'otu ebe na-eme ka njem ahụ baa uru nye onye nwe traktọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Gbazinye ma ọ bụ zụta?",
        questions: [
          { objective: "O1", q: "Kedu ọrụ na-akwụkarị ụgwọ KACHA NTAKỊRỊ iji igwe rụọ?", options: ["Ịkọ hekta 20 n'oge", "Ịzọ owuwe osikapa buru ibu", "Ọrụ otu awa otu ugboro n'afọ n'obere ala", "Ibu ihe owuwe gaa ahịa"], answer: 2, why: "Igwe maka obere ọrụ na-adịghị adịkarị na-efu karịa ihe ọ na-echekwa." },
          { objective: "O1", q: "Kedu ajụjụ na-elele oge kwesịrị ekwesị?", options: ["Igwe ahụ ọ na-acha uhie uhie?", "Ime ọrụ ahụ n'oge na-adịghị ọ na-ebelata owuwe?", "Onye na-ere igwe ọ dị mma n'omume?", "Afọ ole ka onye ọrụ ugbo dị?"], answer: 1, why: "Oge kwesịrị ekwesị bụ maka ma ime ọrụ n'oge na-adịghị na-ebelata owuwe." },
          { objective: "O2", q: "Kedu nke bụ ego a na-akwụ kwa afọ maka ịnwe traktọ?", options: ["Inshọransị", "Mmanụ ụgbọ kwa hekta", "Ụgwọ onye na-anya ya kwa hekta", "Mmanụ igwe kwa awa"], answer: 0, why: "A na-akwụ inshọransị kwa afọ ma traktọ rụrụ ọrụ ma ọ bụ na ọ rụghị." },
          { objective: "O2", q: "Ala nha nhata bụ hekta 137 kwa afọ, ị na-akọ hekta 10. Gịnị ka ị ga-eme?", options: ["Zụta ozugbo", "Zụta traktọ abụọ", "Kwụsị ọrụ ugbo", "Gbazinye, ma ọ bụ zụta naanị ma ọ bụrụ na ị nwekwara ike ịrụrụ ndị agbata obi"], answer: 3, why: "Mgbe ị dị nnọọ n'okpuru ala nha nhata, ịnwe ya na-efu karịa mgbazinye ma ọ bụrụ na igwe ahụ anaghị arụkwa ọrụ n'ebe ọzọ." },
          { objective: "O3", q: "Tupu traktọ i gbazinyere amalite, gịnị ka ị ga-ekwekọrịta?", options: ["Naanị aha onye na-anya ya", "Ọnụ ahịa kwa hekta, otu a ga-esi tụọ ala, ụbọchị, omimi na mmanụ ụgbọ", "Ọ dịghị ihe; tụkwasị ha obi", "PIN ego ekwentị gị"], answer: 1, why: "Usoro doro anya na-egbochi esemokwu na ọrụ ọjọọ; a naghị ekesa PIN mgbe ọ bụla." }
        ]
      }
    },
    {
      name: "Isi 2: Iji igwe na azụmahịa ọrụ igwe",
      lessons: [
        {
          title: "Obere igwe maka obere ndị ọrụ ugbo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Họrọ obere igwe dabara ọrụ gị na obodo gị.",
          text: [
            "Ọ bụghị ugbo ọ bụla chọrọ traktọ nwere wiil anọ. Traktọ nwere wiil abụọ (power tiller) nwere ike ịkọ ala, igwe ala (rotavate), ịgbapụta mmiri ma dọkpụ trela n'obere ala. Igwe nwere injin na-ehopụta ọka ma ọ bụ igwe na-azọ ọtụtụ ụdị mkpụrụ (maka osikapa, ọka okpoko (sorghum), ọka millet, agwa ma ọ bụ soya) na-echekwa ọtụtụ ụbọchị ọrụ ma mkpụrụ na-efu na-ebelata. Igwe ọgwụ nwere injin a na-ebu n'azụ ma ọ bụ mistblower na-agba ebe ka ukwuu karịa igwe ọgwụ aka. Ọmụmaatụ ndị ọzọ bụ igwe na-egwe akpụ, igwe na-ewe osikapa na igwe na-egbutu nri anụmanụ.",
            "Tupu ị zụta, lelee: Ọrụ ọ zuru ezu, n'ugbo gị na nke ndị agbata obi gị, iji mee ka ọ na-arụ ọrụ? Mekanik nọ nso ọ nwere ike imezi ya, a na-erekwa akụkụ igwe ya nso gị? Onye na-ere ya ọ na-akụziri gị ma nye nkwa (warranty)? E nwere ike ibuga ya site n'otu ugbo gaa n'ọzọ? Ndị ga-eji ya, gụnyere ndị inyom na ndị ntorobịa, hà nwere ike iji ya n'enweghị ihe egwu? FAO ebipụtala ndepụta igwe kwesịrị ndị inyom na-arụ ọrụ ugbo.",
            "Igwe ọgwụ: jiri naanị ọgwụ ahụhụ e debanyere aha na mba gị, dị ka akara ya si kwuo, ya na ngwa nchebe. Na Kenya lelee ndepụta Pest Control Products Board; na Naịjirịa, NAFDAC. Igwe ọgwụ nwere injin na-agba ọgwụ karịa ngwa ngwa, ya mere dozie ya (calibrate) dị ka akwụkwọ ntụziaka ya si kwuo tupu oge ọ bụla."
          ],
          steps: ["Kpọọ aha ọrụ ahụ na hekta ma ọ bụ tọn ole kwa afọ.", "Họrọ ụdị igwe maka ọrụ ahụ.", "Lelee akụkụ igwe na mekanik dị nso gị.", "Jụọ onye na-ere ya maka ọzụzụ na nkwa (warranty).", "Lelee na e nwere ike ibuga ya ma na ndị na-anya ya nwere ike iji ya n'enweghị ihe egwu.", "Maka igwe ọgwụ: naanị ọgwụ ahụhụ e debanyere aha, akara ya na ngwa nchebe."],
          words: [["Traktọ nwere wiil abụọ (Two-wheel tractor)", "obere traktọ a na-eje ije n'azụ ya, a na-akpọkwa power tiller, nke na-adọkpụ ngwa ma na-akwọ igwe mmiri."], ["Igwe na-azọ mkpụrụ (Thresher)", "igwe na-ekewapụ mkpụrụ n'osisi ya."], ["Ịdozi igwe ọgwụ (Calibrate)", "ịhazi igwe ọgwụ ka ọ gbaa ọgwụ ziri ezi, dị ka akwụkwọ ntụziaka ya na akara ọgwụ ahụ si kwuo."]],
          slides: [
            { title: "Obere igwe", bullets: ["Traktọ wiil abụọ: ịkọ ala, igwe mmiri, trela", "Igwe na-ehopụta ọka; igwe na-azọ ọtụtụ mkpụrụ", "Igwe ọgwụ nwere injin; igwe akpụ; igwe nri anụmanụ"] },
            { title: "Tupu ị zụta", bullets: ["Ọrụ ọ zuru ezu iji mee ka ọ na-arụ ọrụ?", "Akụkụ igwe na mekanik dị nso?", "Ọzụzụ, nkwa (warranty), ọ dị mfe ibuga?"] },
            { title: "Onye ga-eji ya?", bullets: ["Ọ dị mma maka ndị na-anya ya", "Ndị inyom na ndị ntorobịa kwa", "Ndepụta igwe FAO maka ndị inyom na-arụ ọrụ ugbo"] },
            { title: "Igwe ọgwụ", bullets: ["Naanị ọgwụ ahụhụ e debanyere aha, dị ka akara si kwuo", "Kenya: ndepụta PCPB. Naịjirịa: NAFDAC", "Ngwa nchebe; buru ụzọ dozie ya"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Họrọ otu ọrụ site na Nkuzi 1. Họrọ obere igwe maka ya ma gaa leta ma ọ bụ kpọọ onye na-ere ya. Jụọ ọnụ ahịa, ebe akụkụ igwe na mmezi dị, ọzụzụ na nkwa ha na-enye, na ọrụ ole ọ nwere ike ịrụ n'otu ụbọchị. Dee azịza ha.",
          youCanNow: "ịhọrọ obere igwe dabara ọrụ gị, obodo gị na ndị ga-eji ya.",
          quickCheck: [
            { objective: "O4", q: "Kedu igwe dabara ịkọ ala na ịgbapụta mmiri n'obere ala?", options: ["Combine harvester (igwe owuwe buru ibu)", "Traktọ nwere wiil abụọ (power tiller)", "Igwe na-ehopụta ọka", "Igwe na-egbutu nri anụmanụ"], answer: 1, why: "Power tiller na-akọ obere ala ma nwee ike ịkwọ igwe mmiri." },
            { objective: "O4", q: "Igwe na-ehopụta ọka kacha dị ọnụ ala enweghị akụkụ igwe ma ọ bụ mekanik n'ime km 200. Kedu ihe egwu ya?", options: ["Ọ dịghị; igwe anaghị emebi", "Ọ ga-ehopụta ngwa ngwa nke ukwuu", "Mgbe o mebiri, o nwere ike ịnọ nkịtị ọtụtụ izu", "Ọ ga-eji obere mmanụ ụgbọ nke ukwuu"], answer: 2, why: "Igwe na-enweghị akụkụ igwe ma ọ bụ mmezi dị nso nwere ike ịnọ nkịtị mgbe ị kacha chọọ ya." }
          ]
        },
        {
          title: "Nchekwa na akwụkwọ ndekọ nlekọta",
          objectives: ["O5"],
          minutes: 6,
          goal: "Jiri igwe n'enweghị ihe egwu ma debe akwụkwọ ndekọ nlekọta ya.",
          text: [
            "Igwe nwere ike igbu ma ọ bụ merụọ mmadụ ahụ n'ime sekọnd ole na ole. Traktọ ịtụgharị, ndị mmadụ ịda n'okpuru wiil, na uwe ịbanye n'osisi igwe na-agba gburugburu bụ ihe na-akpatakarị ọnwụ n'ugbo. ILO na-ebipụta iwu (code of practice) maka iji traktọ n'enweghị ihe egwu. Iwu ndị bụ isi: naanị ndị okenye a zụrụ azụ na-anya igwe; ụmụaka agaghị anọ n'akụkụ igwe na-arụ ọrụ; ọ dịghị onye ọzọ na-agba traktọ ma ọ bụ ngwa ya; jiri ihe nchebe ịtụgharị (roll-over protection) na eriri oche ebe ha dị; jee nwayọọ ma kwụ ọtọ n'ugwu ma zere olulu; debe ihe nchebe (guards) niile n'ọnọdụ ha, karịsịa n'osisi PTO (power take-off); ma yiri uwe dabara ahụ, kekọọ ntutu isi.",
            "Igwe na-azọ mkpụrụ na igwe na-ehopụta ọka: etinyela aka gị n'ọnụ ebe a na-atụnye ihe ma ọ bụ n'ebe ihe kpọchiri. Gbanyụọ injin ma chere ka akụkụ niile kwụsị tupu i wepụ ya. Chebe ntị na ngụgụ gị pụọ n'ụzụ na uzuzu. Tinye mmanụ ụgbọ naanị mgbe injin gbanyụrụ ma jụọ oyi, n'enweghị ise anwụrụ. Debe igbe ọgwụ enyemaka mbụ na ekwentị nso.",
            "Igwe e lekọtara anya na-adịte aka ma na-emebi obere n'oge ọrụ siri ike. Mee nlele kwa ụbọchị tupu ọrụ: mmanụ injin, mmanụ ụgbọ, mmiri ma ọ bụ coolant, ihe nzacha ikuku (air filter), taya, nọt na bọlt tọrọ atọ, na ebe a na-ete grease. Lekọta ya dị ka awa dị na mita ya si dị, dị ka akwụkwọ ntụziaka si kwuo. Debe akwụkwọ ndekọ nwere: ụbọchị, awa, ọrụ na hekta ma ọ bụ tọn, mmanụ ụgbọ, mmezi na akụkụ igwe, ego, na aha onye na-anya ya. Akwụkwọ ndekọ ahụ na-egosi ezi ego iji ya kwa hekta."
          ],
          steps: ["Naanị onye okenye a zụrụ azụ na-anya ya; ọ dịghị ụmụaka, ọ dịghị ndị njem.", "Ihe nchebe (guards) dị n'ọnọdụ ha; jiri ihe nchebe ịtụgharị na eriri oche ebe ha dị.", "Jee nwayọọ n'ugwu; zere olulu.", "Gbanyụọ injin ma chere tupu i wepụ ihe kpọchiri.", "Nlele kwa ụbọchị: mmanụ, mmanụ ụgbọ, coolant, air filter, taya, bọlt, grease.", "Dee ọrụ ụbọchị ọ bụla, mmanụ ụgbọ, mmezi na ego n'akwụkwọ ndekọ."],
          words: [["Osisi PTO (power take-off)", "osisi na-agba gburugburu na traktọ nke na-akwọ ngwa; ọ nwere ike ijide uwe ma gbuo mmadụ."], ["Ihe nchebe ịtụgharị (Roll-over protection)", "ihe e wuru n'elu oche onye na-anya ya nke na-echebe ya ma traktọ tụgharịa."], ["Akwụkwọ ndekọ (Logbook)", "akwụkwọ ebe ị na-ede ọrụ ọ bụla, mmanụ ụgbọ, mmezi na ego maka igwe."]],
          slides: [
            { title: "Ndị mmadụ bụ isi", bullets: ["Naanị ndị okenye a zụrụ azụ; ụmụaka anọla nso", "Ọ dịghị ndị njem", "Ihe nchebe ịtụgharị na eriri oche"] },
            { title: "Ebe ihe egwu dị", bullets: ["Ugwu na olulu: jee nwayọọ", "Osisi PTO: ihe nchebe dị; uwe dabara ahụ, kekọọ ntutu", "Ihe kpọchiri: gbanyụọ injin, chere, wee wepụ ya"] },
            { title: "Nlele kwa ụbọchị", bullets: ["Mmanụ, mmanụ ụgbọ, coolant, air filter", "Taya, nọt na bọlt, grease", "Lekọta ya dị ka awa si dị, dị ka akwụkwọ ntụziaka"] },
            { title: "Akwụkwọ ndekọ", bullets: ["Ụbọchị, awa, ọrụ, hekta ma ọ bụ tọn", "Mmanụ ụgbọ, mmezi, akụkụ igwe, ego, onye na-anya ya", "Ọ na-egosi ezi ego kwa hekta"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Mee ndepụta nlele nchekwa otu peeji maka otu igwe ị na-eji ma ọ bụ na-agbazinye, na peeji akwụkwọ ndekọ nwere kọlụm maka ụbọchị, awa, ọrụ, hekta ma ọ bụ tọn, mmanụ ụgbọ, mmezi na akụkụ igwe, ego, na onye na-anya ya. Dejupụta otu ahịrị site n'ezi ọrụ ma ọ bụ ọmụmaatụ.",
          youCanNow: "iji igwe na-agbaso iwu nchekwa ndị bụ isi ma debe akwụkwọ ndekọ nlekọta na-egosi ezi ego iji ya.",
          quickCheck: [
            { objective: "O5", q: "Igwe na-azọ mkpụrụ akpọchiela. Gịnị ka ị ga-eme?", options: ["Jiri aka gị tinye ihe ubi ahụ ka ọ na-arụ ọrụ", "Gwa nwata ka o wepụ ya", "Gbaa igwe ahụ ụkwụ", "Gbanyụọ injin, chere ka akụkụ niile kwụsị, wee wepụ ya"], answer: 3, why: "Akụkụ na-agagharị nwere ike iwere aka n'otu sekọnd; wepụ ihe naanị mgbe igwe kwụsịrị." },
            { objective: "O5", q: "Kedu ihe kwesịrị ịdị n'akwụkwọ ndekọ igwe?", options: ["Ụbọchị, awa, ọrụ, mmanụ ụgbọ, mmezi na ego", "PIN ego ekwentị onye na-anya ya", "Naanị agba igwe ahụ", "Ọ dịghị ihe; icheta zuru ezu"], answer: 0, why: "Ndekọ ndị a na-egosi ezi ego iji ya na mgbe nlekọta ruru." }
          ]
        },
        {
          title: "Ịmalite azụmahịa ọrụ igwe",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee atụmatụ otu peeji maka ọrụ mgbazinye igwe.",
          text: [
            "Ọ bụ ndị ọrụ ugbo zụtara igwe maka ugbo nke ha na-arụ ọtụtụ ọrụ mgbazinye, wee nye ndị agbata obi ha ya, maka ego ma ọ bụ n'ọnọdụ ọrụ ọzọ ma ọ bụ ihe ubi. Atụmatụ igwe ọrụ ugbo maka Africa nke FAO na African Union na-ahụ ndị ntorobịa na-arụ ọrụ mgbazinye dị ka ụzọ bụ isi isi weta igwe nye obere ndị ọrụ ugbo. FAO na-ebipụtakwa akwụkwọ ọzụzụ maka ọrụ mgbazinye dị ka azụmahịa.",
            "Atụmatụ otu peeji na-aza: Ọrụ ndị ole, n'oge ole (ịkọ ala, ịhopụta ọka, ịzọ mkpụrụ, ibu ihe, ịgbapụta mmiri)? Ndị ole bụ ndị ahịa, hekta ma ọ bụ tọn ole n'ozuzu? Ọnụ ahịa ole, olee otu o si dị ma e jiri ya tụnyere ọrụ ndị ọzọ? Ego ole na-efu (nke kwa afọ na nke iji ya kwa hekta, site na Nkuzi 2 na 5)? Kedu ala nha nhata? Olee otu ị ga-esi nabata ịkwụ ụgwọ ọrụ na ego (ego mbụ (deposit), ego ekwentị, akwụkwọ nnata ego)? Onye bụ onye na-anya ya, a zụrụ ya azụ? Kedu ihe egwu: igwe imebi n'oge ọrụ kacha ukwuu, ọrụ a na-akwụghị ụgwọ ya, ihe mberede, ohi? Olee otu ị ga-esi belata ha (nlekọta, usoro e dere ede, inshọransị, ihe nsochi GPS)?",
            "Ọmụmaatụ maka ọrụ power tiller na Senegal ma ọ bụ Burkina Faso (ọnụ ego niile bụ naanị ọmụmaatụ): ego kwa afọ XOF 600,000, ego iji ya XOF 15,000 kwa hekta, ọnụ ahịa XOF 35,000 kwa hekta. Ala nha nhata = 600,000 / (35,000 - 15,000) = hekta 30. Ma ọ bụrụ na a kwụrụ ụgwọ hekta 50, uru = 50 x 20,000 - 600,000 = XOF 400,000. Chịkọta ugbo ndị dị nso ọnụ iji belata njem, ma tinye ọrụ mgbe oge ugbo gachara dị ka ịhopụta ọka na ibu ihe. Nhọrọ ego gụnyere mgbazinye ego (loan), lease na nkwekọrịta ịkwụ ụgwọ nwayọọ: gụchaa nkwekọrịta ọ bụla ma jụọ onye ndụmọdụ ị tụkwasịrị obi."
          ],
          steps: ["Depụta ọrụ gị na oge ha.", "Depụta ndị ahịa na hekta ma ọ bụ tọn n'ozuzu.", "Tinye ọnụ ahịa na-akwụ ego kwa hekta gbakwunyere uru; tụnyere ya na nke ndị ọzọ.", "Gbakọọ ala nha nhata: ego kwa afọ / (ọnụ ahịa - ego iji ya kwa hekta).", "Mee atụmatụ ịkwụ ụgwọ ọrụ, onye na-anya ya, ịkwụ ego na ndekọ.", "Depụta ihe egwu na otu ị ga-esi belata nke ọ bụla."],
          words: [["Ọrụ mgbazinye (Hire service)", "azụmahịa na-eji igwe ya arụrụ ndị ọrụ ugbo ndị ọzọ ọrụ, maka ụgwọ."], ["Uru (Margin)", "akụkụ ọnụ ahịa fọdụrụ mgbe e wepụrụ ego a na-efu."], ["Ọrụ mgbe oge ugbo gachara (Off-season work)", "ọrụ igwe nwere ike ịrụ na mpụga oge ugbo bụ isi, dị ka ibu ihe ma ọ bụ ịhopụta ọka."]],
          slides: [
            { title: "Ọrụ mgbazinye", bullets: ["Ndị ọrụ ugbo na-arụrụ ndị agbata obi maka ụgwọ", "Ụzọ bụ isi isi weta igwe nye obere ndị ọrụ ugbo", "Akwụkwọ ọzụzụ FAO: ọrụ mgbazinye dị ka azụmahịa"] },
            { title: "Atụmatụ otu peeji", bullets: ["Ọrụ, oge, ndị ahịa, hekta", "Ọnụ ahịa, ego a na-efu, ala nha nhata", "Ịkwụ ụgwọ ọrụ, onye na-anya ya, ịkwụ ego, ihe egwu"] },
            { title: "Ọmụmaatụ: power tiller (XOF)", bullets: ["Kwa afọ 600,000; iji ya 15,000 kwa ha; ọnụ ahịa 35,000", "Ala nha nhata 600,000 / 20,000 = ha 30", "Ha 50: uru XOF 400,000. Naanị ọmụmaatụ"] },
            { title: "Mee ka ọ rụọ ọrụ", bullets: ["Chịkọta ugbo ndị dị nso; belata njem", "Tinye ọrụ mgbe oge ugbo gachara", "Loan na lease: gụchaa ya, jụọ onye ndụmọdụ"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Ọrụ ikpeazụ: mee akwụkwọ mkpebi \"gbazinye ma ọ bụ zụta\" maka otu igwe na otu ọrụ. Ọ bụrụ na ịnwe ya na-akwụ ụgwọ naanị site n'ọrụ ndị agbata obi, tinye atụmatụ ọrụ mgbazinye otu peeji: ọrụ, ndị ahịa na hekta, ọnụ ahịa, ego a na-efu, ala nha nhata, ịkwụ ụgwọ ọrụ na ịkwụ ego, na ihe egwu ndị bụ isi.",
          youCanNow: "ime atụmatụ ọrụ mgbazinye igwe nwere ọnụ ahịa, ego a na-efu, ala nha nhata na ihe egwu.",
          quickCheck: [
            { objective: "O6", q: "Ego kwa afọ bụ XOF 400,000, ego iji ya XOF 10,000 kwa hekta, ọnụ ahịa XOF 30,000 kwa hekta. Kedu ala nha nhata?", options: ["Hekta 10", "Hekta 13", "Hekta 40", "Hekta 20"], answer: 3, why: "400,000 / (30,000 - 10,000) = hekta 20." },
            { objective: "O6", q: "Kedu nzọụkwụ na-ebelata ego njem nke ọrụ mgbazinye traktọ?", options: ["Ịchịkọta ịkwụ ụgwọ ọrụ site n'ugbo ndị dị nso", "Ịnabata ọrụ dị anya n'ibe ha n'otu ụbọchị", "Ịjụ obere ugbo", "Ọ dịghị mgbe ime atụmatụ ịkwụ ụgwọ ọrụ"], answer: 0, why: "Ịrụ ugbo ndị dị nso ọnụ na-echekwa mmanụ ụgbọ na oge n'okporo ụzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji igwe na azụmahịa ọrụ igwe",
        questions: [
          { objective: "O4", q: "Tupu ị zụta obere igwe, kedu nlele kacha mkpa iji mee ka ọ na-arụ ọrụ?", options: ["Agba ya", "Akụkụ igwe na mekanik dị nso gị", "Ihe onye agbata obi kwụrụ", "Akara aha ụlọ ọrụ ya"], answer: 1, why: "Na-enweghị akụkụ igwe na mmezi dị nso, igwe mebiri emebi na-anọ nkịtị." },
          { objective: "O4", q: "Ị ga-eji igwe ọgwụ nwere injin. Kedu nke ziri ezi?", options: ["Ọgwụ ahụhụ ọ bụla site n'ahịa", "Gwakọta ọgwụ ahụhụ abụọ iji chekwaa oge", "Naanị ọgwụ ahụhụ e debanyere aha, dị ka akara si kwuo, ya na ngwa nchebe", "Gbaa ọgwụ n'edozighị igwe ahụ"], answer: 2, why: "Naanị ọgwụ e debanyere aha, e jiri ya dị ka akara si kwuo, bụ ihe dị mma ma kwado iwu." },
          { objective: "O5", q: "Kedu nke bụ iwu nchekwa traktọ?", options: ["Ọ dịghị onye njem na traktọ ma ọ bụ ngwa ya", "Ụmụaka nwere ike ịgba ya ma ọ bụrụ na ha kpachara anya", "Wepụ ihe nchebe PTO iji rụọ ọrụ ngwa ngwa", "Gbaa ọsọ n'ugwu"], answer: 0, why: "Ndị njem na-ada n'okpuru wiil; nke a bụ ihe na-akpatakarị ọnwụ n'ugbo." },
          { objective: "O5", q: "Gịnị mere ị ga-eji debe akwụkwọ ndekọ igwe?", options: ["Ọ bụ naanị maka ụlọ akụ", "Iji gosi agba igwe ahụ", "Iji mee ka onye na-anya ya rụọ ọrụ nwayọọ", "Iji hụ ezi ego kwa hekta na mgbe nlekọta ruru"], answer: 3, why: "Ide ọrụ, mmanụ ụgbọ na mmezi na-egosi ezi ego na oge nlekọta." },
          { objective: "O6", q: "Kedu ihe kwesịrị ịdị n'atụmatụ ọrụ mgbazinye?", options: ["Naanị ọnụ ahịa igwe ahụ", "Ọrụ, ndị ahịa, ọnụ ahịa, ego a na-efu, ala nha nhata na ihe egwu", "PIN onye nwe ya", "Naanị akara (logo)"], answer: 1, why: "Atụmatụ na-egosi ma ọrụ ahụ na-enweta karịa ihe ọ na-efu na otu a ga-esi lekọta ihe egwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Igwe Ọrụ Ugbo na Ọrụ Mgbazinye Igwe",
    questions: [
      { objective: "O1", q: "Igwe ọrụ ugbo (mechanization) gụnyere:", options: ["Naanị traktọ buru ibu", "Naanị igwe e si mba ọzọ bubata", "Ngwa na igwe site na ngwa aka ka mma ruo traktọ", "Naanị drone"], answer: 2, why: "FAO na-agụ ọkwa ọ bụla, site na ngwa aka ruo igwe nwere injin." },
      { objective: "O1", q: "Kedu ezigbo ihe kpatara iji igwe zọọ mkpụrụ?", options: ["Ọ na-arụ n'awa ole na ole ihe na-ewe ọtụtụ mmadụ ọtụtụ ụbọchị, mkpụrụ na-efukwa obere", "Igwe dị ka ihe ọgbara ọhụrụ", "Iji aka azọ mkpụrụ megidere iwu", "Ndị agbata obi nwere igwe"], answer: 0, why: "Oge e chekwara na mkpụrụ na-efu obere na-eme ka ịzọ mkpụrụ bụrụ ezigbo ọrụ iji igwe rụọ." },
      { objective: "O1", q: "Iji aka gbuo ahịhịa n'hekta 1 na-efu KES 6,000, ọrụ igwe na-efu KES 9,000. Ma ọ bụrụ naanị ego:", options: ["Igwe dị ọnụ ala", "Ha hà nhata", "Ị pụghị ịtụnyere ha", "Iji aka gbuo ahịhịa dị ọnụ ala"], answer: 3, why: "KES 6,000 dị obere karịa KES 9,000, ya mere igwe anaghị akwụ ụgwọ ma ọ bụrụ naanị ego." },
      { objective: "O2", q: "Depreciation bụ:", options: ["Mmanụ ụgbọ igwe na-eji", "Uru igwe na-efu kwa afọ", "Ego mgbazinye", "Ụgwọ onye na-anya ya"], answer: 1, why: "Depreciation na-ekesa uru na-efu n'ime ndụ igwe ahụ niile." },
      { objective: "O2", q: "Kedu nke bụ ego iji igwe kwa hekta?", options: ["Inshọransị", "Ụlọ ndebe", "Mmanụ ụgbọ", "Ọmụrụ nwa ego kwa afọ"], answer: 2, why: "Mmanụ ụgbọ na-arịgo na hekta ọ bụla a rụrụ; ndị ọzọ bụ ego kwa afọ." },
      { objective: "O2", q: "Ego kwa afọ NGN 2,000,000; ego mgbazinye NGN 50,000 kwa ha; ego iji ya NGN 25,000 kwa ha. Ala nha nhata?", options: ["Hekta 80", "Hekta 40", "Hekta 50", "Hekta 100"], answer: 0, why: "2,000,000 / (50,000 - 25,000) = hekta 80." },
      { objective: "O2", q: "Kedu uru ịnwe igwe nke nọmba ego anaghị egosikarị?", options: ["Ịkwụ ọmụrụ nwa ego karịa", "Ịkọ ala n'oge n'echereghị traktọ a gbazinyere", "Inshọransị dị elu", "Mmezi karịa"], answer: 1, why: "Oge kwesịrị ekwesị bara uru ọbụlagodi mgbe mgbazinye dị ọnụ ala n'akwụkwọ." },
      { objective: "O3", q: "Hello Tractor na-ekwe ka ndị ọrụ ugbo kwụọ ụgwọ ọrụ traktọ:", options: ["Naanị site n'akwụkwọ ozi post", "Naanị n'ụlọ akụ", "Naanị n'onwe ha n'ụlọ ọrụ mmepụta", "Site n'app ekwentị, app weebụ ma ọ bụ ndị nnọchite"], answer: 3, why: "Hello Tractor na-ekwu na ndị ọrụ ugbo na-akwụ ụgwọ ọrụ site n'app ya ma ọ bụ ndị nnọchite." },
      { objective: "O3", q: "Olee otu ị ga-esi tụọ ubi maka ọrụ mgbazinye?", options: ["Tụkwasị obi n'echiche onye na-anya ya", "Tụọ ya n'onwe gị site na teepu ma ọ bụ app GPS dị n'ekwentị", "Gụọ osisi", "Atụla ya"], answer: 1, why: "Ịtụ ya n'onwe gị na-echebe gị pụọ n'ịkwụ ụgwọ ala karịrị nke a rụrụ." },
      { objective: "O3", q: "Onye kpọrọ oku kwuru na ọ bụ onye nnọchite traktọ ma rịọ ka ị kwụọ ego niile tupu oge eruo site n'ego ekwentị. Ị ga:", options: ["Kwụọ ozugbo", "Ziga PIN gị", "Kwụọ ụgwọ ọrụ site n'ezi app ma ọ bụ onye nnọchite ị maara, ma kwụọ ego mgbe i lelechara ọrụ ahụ", "Kwụọ okpukpu abụọ ka i ji n'aka"], answer: 2, why: "Ndị ị na-amaghị na-akpọ oku na-arịọ ego tupu oge eruo bụ aghụghọ a na-ahụkarị." },
      { objective: "O4", q: "Igwe na-azọ ọtụtụ ụdị mkpụrụ nwere ike ịzọ:", options: ["Osikapa, ọka okpoko, ọka millet, agwa ma ọ bụ soya", "Naanị akpụ", "Naanị kọfị", "Naanị ahịhịa"], answer: 0, why: "Igwe na-azọ ọtụtụ ụdị mkpụrụ na-arụ ọrụ na ọtụtụ mkpụrụ na agwa." },
      { objective: "O4", q: "Kedu nke ABỤGHỊ nlele dị mkpa tupu ị zụta obere igwe?", options: ["Akụkụ igwe dị nso", "Ọzụzụ na nkwa (warranty) site n'aka onye na-ere ya", "Ọrụ zuru ezu iji mee ka ọ na-arụ ọrụ", "Agba ihe e tere ya"], answer: 3, why: "Akụkụ igwe, ọzụzụ na iji ya na-ekpebi uru ya; agba ya anaghị ekpebi ya." },
      { objective: "O4", q: "Na Kenya, ndepụta ụlọ ọrụ ole na-egosi ọgwụ ahụhụ e debanyere aha maka igwe ọgwụ?", options: ["Kenya Dairy Board", "Kenya Fisheries Service", "Pest Control Products Board", "Kenya Wildlife Service"], answer: 2, why: "Pest Control Products Board na-edebanye aha ọgwụ ahụhụ na Kenya." },
      { objective: "O5", q: "Onye nwere ike ịnya traktọ?", options: ["Nwata ọ bụla na-akpachara anya", "Onye okenye a zụrụ azụ", "Onye ọ bụla nwere ekwentị", "Onye njem"], answer: 1, why: "Naanị ndị okenye a zụrụ azụ kwesịrị iji igwe." },
      { objective: "O5", q: "Gịnị mere ihe nchebe ga-eji nọgide n'osisi PTO?", options: ["Osisi na-agba gburugburu nwere ike ijide uwe ma gbuo mmadụ", "Ha na-eme ka traktọ gaa ọsọ", "Ha bụ naanị ihe ịchọ mma", "Ha na-echekwa mmanụ ụgbọ"], answer: 0, why: "PTO ijide mmadụ bụ ihe na-akpatakarị mmerụ ahụ siri ike na ọnwụ n'ugbo." },
      { objective: "O5", q: "Olee mgbe ị ga-etinye mmanụ ụgbọ n'igwe?", options: ["Mgbe ọ na-arụ ọrụ", "Mgbe ị na-ese anwụrụ", "N'akụkụ ọkụ ghere oghe", "Mgbe injin gbanyụrụ ma jụọ oyi, n'enweghị ise anwụrụ"], answer: 3, why: "Mmanụ ụgbọ n'injin dị ọkụ ma ọ bụ n'akụkụ ọkụ nwere ike ịgba ọkụ." },
      { objective: "O5", q: "Ugboro ole ka ị ga-eme nlele ndị bụ isi (mmanụ, mmanụ ụgbọ, coolant, taya, bọlt)?", options: ["Otu ugboro n'afọ", "Naanị mgbe o mebiri", "Kwa ụbọchị tupu ọrụ", "Ọ dịghị mgbe"], answer: 2, why: "Nlele kwa ụbọchị na-ahụ obere nsogbu tupu ha akwụsị igwe n'oge ọrụ siri ike." },
      { objective: "O6", q: "Ego kwa afọ XOF 500,000; ego iji ya XOF 15,000 kwa ha; ọnụ ahịa XOF 40,000 kwa ha. Ala nha nhata?", options: ["Hekta 12", "Hekta 20", "Hekta 25", "Hekta 33"], answer: 1, why: "500,000 / (40,000 - 15,000) = hekta 20." },
      { objective: "O6", q: "Kedu nke na-ebelata ihe egwu igwe imebi n'oge ọrụ kacha ukwuu?", options: ["Ịhapụ nlekọta iji chekwaa ego", "Ịgbazinye ya n'enweghị akwụkwọ ndekọ", "Nlekọta mgbe niile na akụkụ igwe dị n'aka", "Iji ya ehihie na abalị n'enweghị nlele"], answer: 2, why: "Nlekọta na akụkụ igwe dị n'aka na-eme ka igwe na-arụ ọrụ mgbe ndị ahịa kacha chọọ ya." },
      { objective: "O6", q: "Tupu ị bịanye aka na lease ma ọ bụ loan maka igwe, ị kwesịrị:", options: ["Ịgụ nkwekọrịta ahụ niile ma jụọ onye ndụmọdụ ị tụkwasịrị obi", "Ịbịanye aka ngwa ngwa tupu onyinye ahụ agwụ", "Ịgụ naanị peeji mbụ", "Ikwe ka onye na-ere ya dejupụta ya maka gị"], answer: 0, why: "Nkwekọrịta nwere ego na ihe egwu; gụchaa ha ma nweta ndụmọdụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nhọrọ ọrụ", objective: "O1", notYet: "Ọ dịghị ihe kpatara e nyere maka iji igwe rụọ ọrụ ahụ.", meets: "A họrọ ọrụ ahụ ya na ihe kpatara ya (oge kwesịrị ekwesị, ndị ọrụ, ihe na-efu ma ọ bụ ọtụtụ ọrụ) na ego iji aka.", exceeds: "Na-atụnyere ọrụ abụọ ma ọ bụ karịa ma kọwaa ihe mere nke a ji akwụ ụgwọ karịa." },
      { name: "Ntụnyere ego", objective: "O2", notYet: "Ego kwa afọ ma ọ bụ ego iji ya adịghị, ma ọ bụ mgbakọ ezighi ezi.", meets: "Depreciation, ego kwa afọ, ego iji ya, ego mgbazinye na ala nha nhata ziri ezi, ya na mkpebi doro anya.", exceeds: "Na-eji ezi ọnụ ahịa ma detu oge kwesịrị ekwesị na ihe egwu n'akụkụ nọmba ndị ahụ." },
      { name: "Nlele igwe na mgbazinye", objective: "O4", notYet: "Ọ dịghị nlele maka akụkụ igwe, mmezi ma ọ bụ ọrụ mgbazinye.", meets: "Na-edepụta nlele maka akụkụ igwe, mekanik, ọzụzụ na nkwa, ma ọ bụ usoro ọrụ mgbazinye.", exceeds: "Ajụọla onye na-ere igwe ma ọ bụ ọrụ mgbazinye ma dee azịza ha." },
      { name: "Nchekwa na nlekọta", objective: "O5", notYet: "Ọ dịghị iwu nchekwa ma ọ bụ ọ dịghị akwụkwọ ndekọ.", meets: "Iwu nchekwa ndị bụ isi na akwụkwọ ndekọ nwere ụbọchị, awa, ọrụ, mmanụ ụgbọ, mmezi na ego.", exceeds: "Na-akpọ aha onye a zụrụ azụ ịnya ya na mgbe nlekọta mbụ ruru." },
      { name: "Mkpebi na atụmatụ azụmahịa", objective: "O6", notYet: "Ọ dịghị mkpebi, ma ọ bụ mkpebi ịzụta n'enweghị atụmatụ iji mee ka igwe na-arụ ọrụ.", meets: "Mkpebi doro anya; ọ bụrụ ịzụta, atụmatụ mgbazinye otu peeji nwere ọrụ, ndị ahịa, ọnụ ahịa, ego a na-efu, ala nha nhata na ihe egwu.", exceeds: "Na-egosi na atụmatụ ahụ ka na-arụ ọrụ ma ọ bụrụ na hekta a kwụrụ ụgwọ ha belatara 20%, ma ọ bụ kwuo ihe ga-agbanwe." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere mkpebi ịgbazinye ma ọ bụ ịzụta site n'iji akwụkwọ mkpebi ahụ n'ime ọnwa 3 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha kụrụ ihe n'oge n'ihi igwe ha kwụrụ ụgwọ ya ma ọ bụ nwere n'oge ugbo na-esote",
      "Ndị na-amụ ihe malitere ma ọ bụ mere ka ọrụ mgbazinye too, na hekta ha na-arụ, n'ime ọnwa 12",
      "Mmerụ ahụ metụtara igwe ndị na-amụ ihe kọrọ (ebumnuche: ọ dịghị)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, ma ọ bụ ekwentị nwere spreadsheet ma ọ bụ app ndetu",
      "Igwe mgbakọ (igwe mgbakọ dị n'ekwentị dị mma)",
      "Teepu ịtụ ihe ma ọ bụ ekwentị nwere app GPS ịtụ ala",
      "Ezi ọnụ ahịa site n'aka onye na-ere igwe n'obodo na ọrụ mgbazinye, nke a chịkọtara n'oge ihe ọmụmụ a",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke, gbakwunyere ileta otu igwe"
    ],
    facilitatorNotes: [
      "Hazie ngosi na ọrụ mgbazinye ma ọ bụ onye na-ere igwe n'obodo: nlele kwa ụbọchị, ihe nchebe (guards), na otu esi ewepụ ihe kpọchiri n'igwe na-ehopụta ọka ma ọ bụ igwe na-azọ mkpụrụ n'enweghị ihe egwu mgbe injin gbanyụrụ.",
      "Dochie ọnụ ahịa ọmụmaatụ ndị ahụ na ọnụ ahịa obodo tupu Nkuzi 2 na 6, ma kwuo n'ụzọ doro anya na ha bụ ọmụmaatụ.",
      "Kọwaa loan, lease na nkwekọrịta ịkwụ ụgwọ nwayọọ na ihe egwu ha, mana enyela ndụmọdụ itinye ego; zie ndị na-amụ ihe n'ebe onye ndụmọdụ ha tụkwasịrị obi nọ.",
      "Mee ka ụmụaka nọrọ ebe dị anya site na ngosi igwe niile.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Jikọọ otu chọrọ ikekọrịta igwe na \"Ịchịkọta Obodo: Ịkekọrịta Igwe Ọrụ Ugbo na Ịkpa Ụka maka Ihe Ọrụ Ugbo\"."
    ]
  }
};
