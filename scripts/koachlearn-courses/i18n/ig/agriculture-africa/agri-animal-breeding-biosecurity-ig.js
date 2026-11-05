"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-animal-breeding-biosecurity.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const WOAH_ASF = { name: "World Organisation for Animal Health (WOAH): African swine fever (ọrịa ezi)", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (June 2025): jiri naanị ọgwụ mgbochi ASF dị elu nke ruru ọkwa ọhụrụ ahụ", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO: African swine fever (enweghị ezi ọgwụ mgbochi ma ọ bụ ọgwụgwọ; mgbochi bụ naanị ụzọ)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "World Organisation for Animal Health (WOAH): Avian influenza (ọrịa ọkụkọ)", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Avian influenza (ihe ịrịba ama n'ọkụkọ)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO: Ezi omume nchekwa ọrịa n'ọrụ ịzụ ezi (Animal Production and Health Paper 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO: Ezi omume nchekwa ọrịa n'ịzụ ọkụkọ n'obere ugbo na ọkụkọ na-agagharị na Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "University of Georgia Extension: Otu esi ahụ oge ọchịchọ n'ehi mmiri ara (standing heat, iwu AM-PM)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Kenya Animal Genetic Resources Centre (KAGRC): mkpụrụ oke na ngwa AI", url: "https://kagrc.go.ke/" };
const KVB = { name: "Kenya Veterinary Board (ndepụta dọkịta anụmanụ na ndị inyeaka ha)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (ndepụta dọkịta anụmanụ e debanyere aha)", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI: Ọzụzụ ndị na-eme AI n'obodo (community-based artificial insemination)", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS: Ozi gbasara ụdị anụ ụlọ na mba ọ bụla (Domestic Animal Diversity Information System)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity-ig",
  lang: "ig",
  translationOf: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Ịzụ Anụ Ụlọ, Ịmụba Ha na Nchekwa Ọrịa n'Ugbo",
  skills: "Ịhọrọ ụdị anụ dabara ihu igwe na ahịa gị, Ịhụ oge ọchịchọ na idebe ndekọ ịmụ anụ, Ịhazi AI site n'aka onye a zụrụ azụ, Igbochi ịmụ nwa n'etiti ndị ikwu, Ide atụmatụ nchekwa ọrịa n'ugbo, Ịhụ na ịkọ African Swine Fever na avian influenza",
  outcome: "ịmụba ehi, ewu, ezi ma ọ bụ ọkụkọ gị n'ụzọ i chere echiche ma gbochie ọrịa: ịhọrọ ụdị dabara ihu igwe na ahịa gị, ịhụ oge ọchịchọ ma dee ụzọ ọ bụla a kwara ha, iji onye AI a zụrụ azụ, igbochi ịmụ nwa n'etiti ndị ikwu, iso atụmatụ nchekwa ọrịa e dere ede, na ịkọrọ dọkịta anụmanụ ozugbo ma ọ bụrụ na i chere na ọ bụ African Swine Fever ma ọ bụ avian influenza.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo nwere obere ugbo na ndị ugbo ha na-eto, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ndụmọdụ ọrụ ugbo na Kenya, Nigeria, Ghana, Senegal, Cameroon na n'Afrịka niile, ndị na-azụ ehi mmiri ara, ewu, ezi ma ọ bụ ọkụkọ ma chọọ ka igwe anụ ha baa ụba n'ebubataghị ọrịa.",
    "Isi 1 bụ maka ịmụba anụ nke ọma: ịhọrọ ụdị ziri ezi, ịhụ oge ọchịchọ na idebe ndekọ, na iji artificial insemination (AI) site n'aka onye a zụrụ azụ ma na-egbochi ịmụ nwa n'etiti ndị ikwu. Isi 2 bụ maka igbochi ọrịa: atụmatụ nchekwa ọrịa nwere mpaghara, efere ịsa ụkwụ na iwu ndị ọbịa, ikewapụ anụ ọhụrụ, iwepụ ozu anụmanụ n'ụzọ dị mma, na ọrịa abụọ onye ọ bụla na-azụ ezi ma ọ bụ ọkụkọ ga-amarịrị: African Swine Fever na avian influenza.",
    "Ihe ọmụmụ a na-ewuli elu na \"Livestock Health and Management\" (Ahụike na Nlekọta Anụ Ụlọ), nke na-akụzi nlele ahụike kwa ụbọchị, ọgwụ mgbochi site n'aka dọkịta anụmanụ na ọrịa Newcastle. Ọ naghị enye ọnụ ọgwụ ọ bụla, ọgwụ mgbochi ma ọ bụ homonụ: soro dọkịta anụmanụ gị na akwụkwọ dị n'elu ọgwụ mgbe niile. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ n'ugbo gị. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Dee atụmatụ nchekwa ọrịa otu peeji maka ugbo gị (ugbo gị, ma ọ bụ ọmụmaatụ dị ka ezi 20 dị nso Abeokuta, ọkụkọ na-eyi akwa 500 dị nso Kumasi, ehi mmiri ara 4 na Nyeri ma ọ bụ ọkụkọ anụ 300 dị nso Thies): eserese nwere mpaghara dị ọcha, mpaghara etiti na mpaghara ruru unyi, na otu ọnụ ụzọ mbata; iwu efere ịsa ụkwụ na ịsa aka gị; iwu ndị ọbịa na ụgbọala gị nwere akwụkwọ ndekọ ndị ọbịa; otu ị ga-esi kewapụ anụ ọhụrụ; otu ị ga-esi wepụ ozu anụmanụ; ihe ịrịba ama nke African Swine Fever ma ọ bụ avian influenza na ihe ị ga-eme n'awa mbụ, ya na aha na nọmba ekwentị nke dọkịta anụmanụ gị ma ọ bụ ọfịs ọrụ anụmanụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo nwere obere ugbo na ndị ugbo azụmahịa na-eto eto, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ndụmọdụ ọrụ ugbo n'Ọwụwa Anyanwụ, Ọdịda Anyanwụ na Etiti Afrịka (gụnyere mba ndị na-asụ French) ndị na-azụ ehi mmiri ara, ewu, ezi ma ọ bụ ọkụkọ.",
    startingPoint: "Ha nwere ike inye anụ nri, lekọta ha, ma mara anụ dị ka ọ na-arịa ọrịa. Ọtụtụ na-eji oke ọ bụla dị nso amụba anụ, na-edebe obere ndekọ e dere ede, ma na-ekwe ka ndị ọbịa, ndị ahịa na anụ ọhụrụ bata n'ugbo n'enweghị iwu ọ bụla.",
    gap: "Ndị ugbo chọrọ mmiri ara, anụ ma ọ bụ akwa karịa na-azụtakarị ụdị anụ na-adabaghị ihu igwe ma ọ bụ nri ha, na-agbaghara oge ọchịchọ, na-emefu ọrụ AI, ma na-ekwe ka ịmụ nwa n'etiti ndị ikwu banye nwayọọ. Otu onye ọbịa, otu ụgbọala ma ọ bụ otu ezi ọhụrụ nwere ike ibubata African Swine Fever, nke na-enweghị ezi ọgwụ mgbochi ma ọ bụ ọgwụgwọ, ma ọ bụ avian influenza, nke nwere ike igbu ihe ka ọtụtụ n'ọkụkọ. Usoro ịmụ anụ e dere ede na atụmatụ nchekwa ọrịa na-echebe ugbo ahụ na ndị agbata obi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-agụ Bekee dị ka asụsụ nke abụọ, ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone, akwụkwọ na mkpịsị ode; data dị ntakịrị",
      "Ego: ihe ndị na-adịghị ọnụ ahịa ka a na-ebu ụzọ; ọnụ ego na KES, NGN, GHS na XOF bụ naanị ọmụmaatụ",
      "Iwu ahụike anụmanụ: enweghị ọnụ ọgwụ, ọgwụ mgbochi ma ọ bụ homonụ, enweghịkwa oge ichere mgbe e nyere ọgwụ (withdrawal period); soro dọkịta anụmanụ na akwụkwọ dị n'elu ọgwụ",
      "A ga-akọrịrị ASF na avian influenza: a na-akọrọ dọkịta anụmanụ ma ọ bụ ndị isi ọrụ anụmanụ ozugbo ọ bụla e chere na ha dị, iwu mba ọ bụla dịkwa iche"
    ],
    prerequisites: "Nlekọta anụ ụlọ nkịtị. A na-atụ aro ka e bu ụzọ were \"Livestock Health and Management\" (Agriculture (Africa))."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị matara ihu igwe gị, nri ị nwere na ahịa gị", action: "ịhọrọ ụdị anụ ma ọ bụ ngwakọ maka ugbo gị ma kọwaa ihe mere i ji họrọ ya", standard: "na-akpọ opekata mpe ihe atọ dabara ugbo gị" },
    { id: "O2", condition: "Site n'iji akwụkwọ ndetu ma ọ bụ ekwentị mgbe ị na-elele anụ ugboro abụọ kwa ụbọchị", action: "ide ihe ịrịba ama oge ọchịchọ, ụzọ a kwara ha na ụbọchị a tụrụ anya ọmụmụ maka nne anụ ọ bụla", standard: "n'enweghị ụbọchị ọ bụla fọdụrụ maka anụ ndị ị na-amụba" },
    { id: "O3", condition: "Mgbe ehi ma ọ bụ ewu guzoro nwayọọ n'oge ọchịchọ (standing heat)", action: "ịhazi artificial insemination site n'aka onye AI a zụrụ azụ, e debanyere aha, n'oge kwesịrị ekwesị", standard: "na-akpọ onye ahụ n'otu ụbọchị ahụ ma na-ede ozi mkpụrụ oke ma ọ bụ nna anụ ahụ" },
    { id: "O4", condition: "Mgbe ị nwere ndekọ ịmụ anụ gị", action: "ịhazi ọlụlụ anụ nke na-ezere ịkwa ndị ikwu dị nso", standard: "n'enweghị ọlụlụ nne ma ọ bụ nna na nwa ya, ma ọ bụ nwanne na nwanne, n'atụmatụ ahụ" },
    { id: "O5", condition: "Maka ugbo gị ma ọ bụ ebe ị na-azụ anụ", action: "ide atụmatụ nchekwa ọrịa nwere mpaghara, efere ịsa ụkwụ, iwu ndị ọbịa, ikewapụ anụ na iwepụ ozu anụmanụ", standard: "na-ekpuchi akụkụ ise ahụ niile n'otu peeji" },
    { id: "O6", condition: "Mgbe ezi ma ọ bụ ọkụkọ gosiri ihe ịdọ aka na ntị ma ọ bụ nwụọ na mberede", action: "ịmata ihe ịrịba ama nke African Swine Fever ma ọ bụ avian influenza ma kọọrọ ha dọkịta anụmanụ ma ọ bụ ndị isi ọrụ anụmanụ", standard: "ozugbo, n'ebughị anụ ndị ahụ, n'erereghị ha, n'erighịkwa ha" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmụba anụ maka igwe anụ ka mma",
      lessons: [
        {
          title: "Ịhọrọ ụdị anụ dabara ihu igwe na ahịa gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ ụdị anụ ma ọ bụ ngwakọ dabara ihu igwe gị, nri gị na ndị na-azụ n'aka gị.",
          text: [
            "Ụdị anụ kacha mma bụ nke na-eweta ego n'ugbo gị, ọ bụghị nke nwere nọmba kacha ukwuu n'akwụkwọ mgbasa ozi. Ehi mmiri ara si mba ọzọ nke na-enye ọtụtụ mmiri ara chọrọ ọtụtụ ezigbo nri, mmiri dị ọcha, ndò na nlekọta ahụike nke ọma. N'ebe na-ekpo ọkụ, kpọrọ nkụ, nke ahịhịa ya adịghị mma, o nwere ike inye mmiri ara pere mpe karịa ngwakọ obodo siri ike ma na-arịakwa ọrịa ugboro ugboro.",
            "Ụdị anụ obodo, dị ka East African Zebu, ewu West African Dwarf ma ọ bụ ehi N'Dama nke Ọdịda Anyanwụ Afrịka, na-anagide okpomọkụ, akọrọ (ticks) na nri na-adịghị mma, mana ha anaghị eto ngwa ngwa ma na-enye ntakịrị. Ụdị si mba ọzọ, dị ka ehi mmiri ara Friesian ma ọ bụ Ayrshire, ezi Large White ma ọ bụ ọkụkọ ngwakọ azụmahịa, na-enye karịa mgbe ị nwere ike inye ha nri ma chebe ha nke ọma. Ngwakọ na-anọkarị n'etiti.",
            "Malite n'ahịa gị: onye na-azụ, ihe ọ na-akwụ ụgwọ maka ya (mmiri ara, ịdị arọ anụ dị ndụ, anụ na-enweghị abụba, akwa, ewu ememme) na mgbe ọ na-azụ. Wee lelee ihe ị nwere ike inye n'afọ niile: nri, mmiri, ụlọ anụ, ndị ọrụ na dọkịta anụmanụ. Jụọ onye ndụmọdụ ọrụ ugbo gị (extension officer), otu ndị na-amụba anụ ma ọ bụ ụlọ ọrụ nchọpụta mba gị ụdị anụ na-eme nke ọma n'ebe gị. Ebe nchekwa ozi DAD-IS nke FAO na-edepụta ụdị anụ a na-azụ na mba ọ bụla."
          ],
          steps: ["Dee ihe ndị na-azụ n'aka gị chọrọ na ihe ha na-akwụ ụgwọ maka ya.", "Dee ihe ị nwere ike inye n'afọ niile: nri, mmiri, ụlọ anụ, ndị ọrụ, dọkịta anụmanụ.", "Depụta ụdị anụ ma ọ bụ ngwakọ abụọ ma ọ bụ atọ ndị ugbo dị nso gị na-azụ.", "Jụọ onye ndụmọdụ ọrụ ugbo gị ma ọ bụ otu ndị na-amụba anụ maka nke ọ bụla.", "Họrọ ụdị dabara ndepụta abụọ ahụ, ma dee ihe atọ mere i ji họrọ ya."],
          words: [["Ụdị anụ (breed)", "otu anụ nke otu ụdị nwere otu ọdịdị na àgwà, nke si n'aka nne na nna ha gaa n'ụmụ ha."], ["Ụdị si mba ọzọ (exotic breed)", "ụdị anụ e mepụtara n'akụkụ ụwa ọzọ, nke na-enyekarị karịa mana anaghị anagide okpomọkụ, ọrịa na nri obodo nke ọma."], ["Ngwakọ (cross)", "anụ nne na nna ya si n'ụdị abụọ dị iche iche."]],
          slides: [
            { title: "Ụdị ziri ezi na-eweta ego n'ugbo GỊ", bullets: ["Nọmba ukwu n'akwụkwọ mgbasa ozi chọrọ ọtụtụ ihe", "Nri na-adịghị mma na okpomọkụ na-ebelata ihe ọ na-enye ngwa ngwa", "Họrọ maka ugbo gị, ọ bụghị maka foto"] },
            { title: "Nke obodo, nke si mba ọzọ ma ọ bụ ngwakọ", bullets: ["Nke obodo: siri ike, na-anagide okpomọkụ, akọrọ na nri na-adịghị mma", "Nke si mba ọzọ: na-enye ọtụtụ, chọrọ ezigbo nri na nlekọta", "Ngwakọ: na-anọkarị n'etiti"] },
            { title: "Malite n'ahịa", bullets: ["Gịnị ka ndị na-azụ na-akwụ ụgwọ maka ya: mmiri ara, anụ, akwa?", "Olee mgbe ha na-azụ?", "Gịnị ka ị nwere ike inye n'afọ niile?"] },
            { title: "Jụọ tupu ị zụta", bullets: ["Onye ndụmọdụ ọrụ ugbo ma ọ bụ otu ndị na-amụba anụ", "Ndị ugbo dị nso gị nwere ụdị ahụ", "FAO DAD-IS na-edepụta ụdị anụ dị na mba ọ bụla"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Dee ndepụta mkpụmkpụ abụọ maka ugbo gị: ihe ndị na-azụ n'aka gị chọrọ, na ihe ị nwere ike inye n'afọ niile. Kpọọ aha ụdị anụ ma ọ bụ ngwakọ abụọ ma họrọ otu, ya na ihe atọ mere i ji họrọ ya.",
          youCanNow: "ịhọrọ ụdị anụ ma ọ bụ ngwakọ dabara ihu igwe gị, nri gị na ahịa gị, ma kọwaa ihe mere.",
          quickCheck: [
            { objective: "O1", q: "Onye ọrụ ugbo nọ n'ebe na-ekpo ọkụ, kpọrọ nkụ, nke ahịhịa ya adịghị mma chọrọ ehi mmiri ara. Kedu nhọrọ kacha dabara?", options: ["Ehi si mba ọzọ kacha enye mmiri ara ọ ga-ahụ", "Ehi ọ bụla kacha dị ọnụ ala n'ahịa", "Ngwakọ obodo siri ike nke dabara okpomọkụ na nri ahụ", "Ụdị a họọrọ site na foto n'akwụkwọ mgbasa ozi"], answer: 2, why: "Ụdị na-anagide okpomọkụ na nri o nwere n'ezie ga-enye karịa n'oge ka ụdị chọrọ ihe ọ na-enweghị ike inye." },
            { objective: "O1", q: "Gịnị ka ị ga-EBU ỤZỌ dee mgbe ị na-ahọrọ ụdị anụ?", options: ["Aha ụdị anụ onye agbata obi gị hụrụ n'anya", "Ihe ndị na-azụ n'aka gị chọrọ na ihe ha na-akwụ ụgwọ maka ya", "Agba ị kacha hụ n'anya", "Ụdị nwere anụ kacha buo ibu"], answer: 1, why: "Ahịa na-ekpebi ihe na-eweta ego; wee lelee ihe ugbo gị nwere ike inye." }
          ]
        },
        {
          title: "Ịhụ oge ọchịchọ na ndekọ ịmụ anụ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hụ nne anụ nọ n'oge ọchịchọ ma dee oge ọchịchọ, ụzọ a kwara ya na ụbọchị ọmụmụ.",
          text: [
            "Ehi, ewu ma ọ bụ nne ezi nwere ike ịtụrụ ime naanị n'obere oge mgbe ọ nọ n'\"oge ọchịchọ\" (heat). Ọ bụrụ na ị gbaghara ya, ị ga-echere ihe dị ka izu atọ maka nke ọzọ, ma ị ka na-enye ya nri. Ehi, ewu na ezi na-abịakarị n'oge ọchịchọ ihe dị ka ụbọchị 21 ọ bụla, mana nke a na-adị iche, ya mere lezie anya nke ọma.",
            "Ihe ịrịba ama kacha doo anya n'ehi bụ standing heat: ọ na-eguzo nwayọọ mgbe anụ ọzọ rigooro ya n'azụ. Ihe ịrịba ama ndị ọzọ bụ ịrigoro anụ ndị ọzọ, enweghị izu ike, ịkwa ụda, mmiri doro anya na-arapara arapara na-esi n'ọtụ ya apụta, na mmiri ara na-ebelata. Ewu na-efegharị ọdụ ya, na-ebe ákwá, ma na-achọ oke ewu. Nne ezi nọ n'oge ọchịchọ na-eguzo nwayọọ mgbe ị pịrị ya n'azụ. Lelee opekata mpe ugboro abụọ kwa ụbọchị, n'isi ụtụtụ na mgbede, nkeji 20 ruo 30, mgbe anụ dị jụụ.",
            "Ndekọ na-eme ka echiche ghọọ atụmatụ. Maka nne anụ ọ bụla dee: njirimara ya (ID), ụbọchị na oge nke oge ọchịchọ ọ bụla, ụbọchị a kwara ya, oke ehi, oke ewu ma ọ bụ oke ezi ole ma ọ bụ straw AI ole, na ụbọchị a tụrụ anya na ọ ga-amụ. Mgbe ahụ ị ga-ama mgbe ị ga-elele ma ọ laghachiri n'oge ọchịchọ ihe dị ka izu 3 ka e mesịrị, mgbe ị ga-akwụsị ịra ehi mmiri ara, na nne anụ ndị na-anọgide na-adịghị atụrụ ime. Oge ime bụ ihe dị ka ọnwa 9 maka ehi, ihe dị ka ọnwa 5 maka ewu, na ihe dị ka ọnwa 3, izu 3 na ụbọchị 3 maka nne ezi; dọkịta anụmanụ gị ma ọ bụ onye ndụmọdụ ọrụ ugbo nwere ike inye gị nọmba kpọmkwem maka ụdị gị."
          ],
          steps: ["Nye nne anụ ọ bụla ị na-amụba njirimara: mkpado ntị, aha ma ọ bụ nọmba.", "Lelee oge ọchịchọ ugboro abụọ kwa ụbọchị, ụtụtụ na mgbede.", "Dee ụbọchị, oge na ihe ịrịba ama ị hụrụ.", "Dee ụbọchị a kwara ya na oke ma ọ bụ straw AI e jiri.", "Tinye ụbọchị ị ga-elele ma ọ laghachiri n'oge ọchịchọ, ihe dị ka izu 3 ka e mesịrị.", "Dee ụbọchị a tụrụ anya ọmụmụ, ma lelee ime ya na dọkịta anụmanụ gị ma ọ bụ onye AI."],
          words: [["Oge ọchịchọ (heat, oestrus)", "obere oge nne anụ na-anabata oke ma nwee ike ịtụrụ ime."], ["Standing heat", "mgbe ehi na-eguzo nwayọọ ka a rigoro ya n'azụ; ihe ịrịba ama kacha doo anya na ọ nọ n'oge ọchịchọ."], ["Ịkwa (service)", "ọlụlụ, site n'oke ma ọ bụ site n'artificial insemination."], ["Oge ime (gestation)", "oge site mgbe ọ tụrụ ime ruo mgbe ọ mụrụ."]],
          slides: [
            { title: "Oge ọchịchọ dị mkpụmkpụ; ịgbaghara ya na-efu izu 3", bullets: ["Ehi, ewu na ezi: ihe dị ka ụbọchị 21 ọ bụla", "Ịgbaghara oge ọchịchọ = izu nri n'enweghị ime"] },
            { title: "Ihe ịrịba ama oge ọchịchọ", bullets: ["Ehi: na-eguzo ka a rigoro ya (ihe ịrịba ama kacha doo anya)", "Ịrigoro ndị ọzọ, enweghị izu ike, mmiri doro anya", "Ewu: na-efegharị ọdụ; nne ezi: na-eguzo mgbe a pịrị ya"] },
            { title: "Lelee ugboro abụọ kwa ụbọchị", bullets: ["N'isi ụtụtụ na mgbede", "Nkeji 20 ruo 30, mgbe anụ dị jụụ"] },
            { title: "Ndekọ ịmụ anụ", bullets: ["ID, ụbọchị na oge ọchịchọ, ụbọchị a kwara ya", "Oke ma ọ bụ straw AI e jiri", "Ụbọchị ilele ọlaghachi n'oge ọchịchọ na ụbọchị ọmụmụ"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Mee peeji ndekọ ịmụ anụ n'akwụkwọ ma ọ bụ na ndetu ekwentị nwere kọlụm ndị a: ID anụ, ụbọchị na oge ọchịchọ, ihe ịrịba ama a hụrụ, ụbọchị a kwara ya, oke ma ọ bụ straw AI, ilele ọlaghachi n'oge ọchịchọ, ụbọchị ọmụmụ. Dejupụta ya maka otu n'ime nne anụ gị, ma ọ bụ ehi ọmụmaatụ.",
          youCanNow: "ịhụ ihe ịrịba ama oge ọchịchọ na idebe ndekọ ịmụ anụ nwere oge ọchịchọ, ụzọ a kwara ha na ụbọchị ọmụmụ.",
          quickCheck: [
            { objective: "O2", q: "Kedu ihe ịrịba ama kacha doo anya na ehi nọ n'oge ọchịchọ?", options: ["Ọ na-eri karịa ka o si eri", "Ọ na-edina ala ọtụtụ oge", "Ọ na-eguzo nwayọọ mgbe anụ ọzọ rigooro ya n'azụ", "Ajị ya na-egbuke egbuke"], answer: 2, why: "Iguzo ka a rigoro ya bụ ihe ịrịba ama kacha doo anya; ihe ịrịba ama ndị ọzọ na-egosi naanị na o nwere ike ịbụ." },
            { objective: "O2", q: "A kwara ewu gị na 1 March. Olee mgbe ị ga-elele ma ọ laghachiri n'oge ọchịchọ?", options: ["Ihe dị ka izu 3 ka e mesịrị, gburugburu 22 March", "N'echi ya", "Mgbe ọnwa 6 gachara", "Ọ dịghị mgbe; ọ ga-atụrịrị ime"], answer: 0, why: "Oge ọchịchọ na-abịa ihe dị ka ụbọchị 21 ọ bụla, ya mere nne anụ na-atụrụghị ime na-egosi ya ọzọ ihe dị ka izu 3 ka e mesịrị." }
          ]
        },
        {
          title: "Artificial insemination na igbochi ịmụ nwa n'etiti ndị ikwu",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Hazie AI site n'aka onye a zụrụ azụ n'oge kwesịrị ekwesị, ma hazie ọlụlụ na-ezere ndị ikwu dị nso.",
          text: [
            "Artificial insemination (AI) na-etinye mkpụrụ oke (semen) nke oke a nwalere anwale n'ime akụkụ ọmụmụ nne anụ. Ọ na-enye obere onye ọrụ ugbo mkpụrụ ndụ (genes) nke oke ehi ma ọ bụ oke ewu kacha mma n'azụghị nke ya, ọ na-ebelatakwa ihe egwu ọrịa ndị na-agbasa site n'ọlụlụ. Ọ bụ onye AI a zụrụ azụ ma ọ bụ dọkịta anụmanụ na-eme AI, ọ bụghị onye ọrụ ugbo. Ụzọ ezighi ezi nwere ike imerụ anụ ahụ ahụ, a ga-edebekwa mkpụrụ oke ka ọ kpụkọọ n'ime liquid nitrogen ruo mgbe a ga-eji ya, ma ọ bụghị ya ọ ga-anwụ.",
            "Chọta onye AI a zụrụ azụ ma debanye aha: jụọ ọfịs ọrụ anụ ụlọ nke county ma ọ bụ mpaghara gị, otu ndị na-ere mmiri ara gị (cooperative) ma ọ bụ dọkịta anụmanụ e debanyere aha. Na Kenya, KAGRC na-ere mkpụrụ oke site n'aka ndị nnọchiteanya a họpụtara, ndị AI kwesịrị ịdebanye aha na Kenya Veterinary Board; na Nigeria, lelee na dọkịta anụmanụ ahụ dị na ndepụta Veterinary Council of Nigeria. Iwu a na-ejikarị maka ehi bụ AM-PM: ehi a hụrụ na mbụ n'standing heat n'ụtụtụ ka a na-akwa n'ehihie ma ọ bụ mgbede ụbọchị ahụ; nke a hụrụ na mbụ n'ehihie ka a na-akwa n'ụtụtụ echi ya. Kpọọ onye AI ahụ ozugbo ị hụrụ oge ọchịchọ, ma dee aha ma ọ bụ koodu oke ehi dị na straw ahụ.",
            "Ịmụ nwa n'etiti ndị ikwu (inbreeding) pụtara ịkwa ndị ikwu dị nso: nna na ada ya, nne na nwa ya nwoke, ma ọ bụ nwanne nwoke na nwanne ya nwanyị. Ụmụ ha na-adịkarị ike, na-eto nwayọọ, na-arịa ọrịa karịa, ma nwee ike ịmụ ha nwere nkwarụ. Ọ na-eme nwayọọ mgbe otu oke ehi, oke ewu, oke ezi ma ọ bụ oke ọkụkọ nọ n'ugbo ọtụtụ afọ. Gbochie ya: debe ndekọ nne na nna anụ ọ bụla, gbanwee ma ọ bụ ree oke gị tupu ụmụ ya nwanyị eruo ịmụ nwa, binye ma ọ bụ gbanwerịta oke na ndị ugbo anụ ha na nke gị enweghị njikọ, ma jiri straw AI si n'oke ehi dị iche oge ọ bụla ị na-amụba ada ya."
          ],
          steps: ["Hụ standing heat: dee oge ahụ.", "Kpọọ onye AI gị e debanyere aha ozugbo.", "Jiri iwu AM-PM maka ehi, ma ọ bụ ndụmọdụ onye AI ahụ.", "Lelee na straw ahụ si n'oke ehi a ma ama ma dee aha ya ma ọ bụ koodu ya.", "Tupu ọlụlụ ọ bụla, lelee ndekọ: oke a ọ bụ nna ya, nwa ya nwoke ma ọ bụ nwanne ya nwoke?", "Ọ bụrụ ee, jiri oke ọzọ ma ọ bụ oke ehi AI dị iche."],
          words: [["Artificial insemination (AI)", "itinye mkpụrụ oke nke oke a họọrọ n'ime nne anụ site n'aka, nke onye a zụrụ azụ na-eme."], ["Straw", "obere tube dị gịrịgịrị nwere otu ọnụ mkpụrụ oke kpụkọrọ akpụkọ, nwere aha ma ọ bụ koodu oke ehi ahụ."], ["Liquid nitrogen", "mmiri oyi nke ukwuu na-eme ka mkpụrụ oke nọrọ na-akpụkọ ruo mgbe a ga-eji ya."], ["Ịmụ nwa n'etiti ndị ikwu (inbreeding)", "ịkwa ndị ikwu dị nso, nke na-eme ka ụmụ adịghị ike ma nwee nkwarụ karịa."]],
          slides: [
            { title: "Ihe mere AI", bullets: ["Mkpụrụ ndụ kacha mma n'azụghị oke ehi", "Ihe egwu ọrịa ndị na-agbasa site n'ọlụlụ na-ebelata", "Onye a zụrụ azụ na-eme ya, ọ bụghị onye ọrụ ugbo"] },
            { title: "Chọta onye AI e debanyere aha", bullets: ["Ọfịs ọrụ anụ ụlọ, cooperative mmiri ara ma ọ bụ dọkịta anụmanụ", "Kenya: ndị nnọchiteanya KAGRC, Kenya Veterinary Board", "Nigeria: ndepụta Veterinary Council of Nigeria"] },
            { title: "Oge: iwu AM-PM maka ehi", bullets: ["Oge ọchịchọ a hụrụ n'ụtụtụ: kwaa ya n'ehihie ahụ", "Oge ọchịchọ a hụrụ n'ehihie: kwaa ya n'ụtụtụ echi", "Dee aha ma ọ bụ koodu oke ehi dị na straw"] },
            { title: "Zere ịmụ nwa n'etiti ndị ikwu", bullets: ["Ọ dịghị nna na ada, nne na nwa nwoke, nwanne na nwanne", "Gbanwee oke gị tupu ụmụ ya nwanyị amụọ nwa", "Jiri oke ehi AI dị iche maka ada ọ bụla"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Dee aha na nọmba ekwentị nke onye AI a zụrụ azụ, e debanyere aha, nọ nso gị (jụọ ọfịs ọrụ anụ ụlọ gị ma ọ bụ cooperative). Wee lee anụ gị: depụta nne anụ ọ bụla nwere njikọ dị nso na oke ị na-eji amụba anụ ugbu a, ma dee otu ị ga-esi amụba ya kama.",
          youCanNow: "ịhazi AI site n'aka onye a zụrụ azụ n'oge kwesịrị ekwesị na ịhazi ọlụlụ na-ezere ndị ikwu dị nso.",
          quickCheck: [
            { objective: "O3", q: "Ehi gosiri standing heat n'elekere 7 nke ụtụtụ. Site n'iwu AM-PM, olee mgbe a ga-akwa ya?", options: ["N'ụbọchị abụọ", "N'ehihie ma ọ bụ mgbede ụbọchị ahụ", "N'izu na-abịa", "Naanị mgbe ọ kwụsịrị igosi oge ọchịchọ"], answer: 1, why: "Ehi a hụrụ na mbụ n'oge ọchịchọ n'ụtụtụ ka a na-akwa n'ehihie ma ọ bụ mgbede ụbọchị ahụ." },
            { objective: "O4", q: "Oke ehi gị anọọla n'ugbo afọ anọ, ụmụ ya nwanyị adịkwala njikere ịmụ nwa. Gịnị ka ị ga-eme?", options: ["Gaa n'ihu na-eji ya kwaa ha niile", "Jiri ya naanị maka ụmụ ya nwanyị kacha buo ibu", "Kwụsị ịmụba anụ otu afọ", "Jiri oke ehi ọzọ ma ọ bụ AI si n'oke ehi na-enweghị njikọ maka ụmụ ya nwanyị"], answer: 3, why: "Ịkwa oke ehi na ụmụ ya nwanyị bụ ịmụ nwa n'etiti ndị ikwu; oke na-enweghị njikọ ma ọ bụ oke ehi AI dị iche na-ezere ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmụba anụ maka igwe anụ ka mma",
        questions: [
          { objective: "O1", q: "Gịnị mere ụdị si mba ọzọ na-enye ọtụtụ ji nwee ike iweta ego pere mpe karịa ngwakọ obodo n'ụfọdụ ugbo?", options: ["Ụdị si mba ọzọ anaghị enye ọtụtụ mmiri ara mgbe ọ bụla", "Anụ obodo na-ere ọnụ karịa mgbe niile", "Enweghị ike inye ụdị si mba ọzọ ahịhịa", "Ọ chọrọ nri, mmiri na nlekọta ugbo ahụ enweghị ike inye, ya mere ọ na-enye ntakịrị ma na-arịa ọrịa karịa"], answer: 3, why: "Ọtụtụ ihe ọ na-enye dabere n'ezigbo nri na nlekọta; n'enweghị ha, ngwakọ siri ike na-emekarị nke ọma karịa." },
          { objective: "O2", q: "Ugboro ole ka ị kwesịrị ilele ihe ịrịba ama oge ọchịchọ?", options: ["Opekata mpe ugboro abụọ kwa ụbọchị, ụtụtụ na mgbede", "Otu ugboro n'izu", "Naanị mgbe anụ ahụ na-arịa ọrịa", "Otu ugboro n'ọnwa"], answer: 0, why: "Oge ọchịchọ dị mkpụmkpụ, ya mere ilele ugboro abụọ kwa ụbọchị mgbe anụ dị jụụ na-ahụ ihe ka ọtụtụ n'ime ha." },
          { objective: "O2", q: "Kedu n'ime ndị a kwesịrị ịdị na ndekọ ịmụ anụ?", options: ["Ihu igwe kwa ụbọchị", "Ụbọchị a kwara ya na oke ma ọ bụ straw AI e jiri", "Agba ụlọ anụ", "Ọnụ ahịa mmanụ ụgbọala"], answer: 1, why: "Ụbọchị a kwara ya na oke ahụ na-enyere gị aka ilele ọlaghachi n'oge ọchịchọ, ịma ụbọchị ọmụmụ, na izere ịmụ nwa n'etiti ndị ikwu." },
          { objective: "O3", q: "Onye kwesịrị ime artificial insemination?", options: ["Onye ọrụ ugbo ọ bụla lerela vidiyo", "Onye na-ere ehi ahụ", "Onye AI a zụrụ azụ, e debanyere aha, ma ọ bụ dọkịta anụmanụ", "Onye agbata obi nwere aka siri ike"], answer: 2, why: "AI chọrọ ọzụzụ: ụzọ ezighi ezi nwere ike imerụ anụ ahụ, a ga-ejikwa mkpụrụ oke n'ụzọ ziri ezi." },
          { objective: "O4", q: "Kedu ọlụlụ bụ ịmụ nwa n'etiti ndị ikwu?", options: ["Ehi na oke ehi AI na-enweghị njikọ", "Nne ewu na oke ewu e binyere n'obodo ọzọ", "Nwa nne ezi na oke ezi e zụtara n'ugbo dị anya", "Ebule na ada ya"], answer: 3, why: "Nna na ada ya bụ ọlụlụ ndị ikwu dị nso, nke bụ ịmụ nwa n'etiti ndị ikwu." }
        ]
      }
    },
    {
      name: "Isi 2: Igbochi ọrịa ịbata",
      lessons: [
        {
          title: "Atụmatụ nchekwa ọrịa gị: mpaghara, efere ịsa ụkwụ na ndị ọbịa",
          objectives: ["O5"],
          minutes: 5,
          goal: "See mpaghara nchekwa ọrịa nke ugbo gị ma dee iwu maka efere ịsa ụkwụ na ndị ọbịa.",
          text: [
            "Nchekwa ọrịa (biosecurity) pụtara ihe niile ị na-eme iji gbochie nje ịbata n'ugbo gị, ịgbasa n'ime ya, na ịpụ na ya. Ọtụtụ ọrịa na-abịa site n'anụ, ndị mmadụ, akpụkpọ ụkwụ, uwe, ụgbọala, igbe ebu anụ, akpa nri ma ọ bụ ngwaọrụ. Ọtụtụ n'ime ihe kacha mma anaghị efu ego ukwuu: ngere, ọnụ ụzọ ama, efere ịsa ụkwụ, ncha, na iwu a na-edebe kwa ụbọchị.",
            "Kewaa ugbo ahụ ka ọ bụrụ mpaghara. Mpaghara dị ọcha bụ ebe anụ bi: naanị ndị na-elekọta ha na-abanye. Mpaghara etiti gbara ya gburugburu: ụlọ nkwakọba ihe, ebe a na-agbanwe uwe, efere ịsa ụkwụ. Mpaghara ruru unyi dị n'èzí: okporo ụzọ, ebe a na-adọba ụgbọala, igbe ebu anụ si n'ahịa. Nwee OTU ọnụ ụzọ mbata n'ebe anụ bi, nwere ọnụ ụzọ ama ị nwere ike imechi. Ụgbọala ndị ahịa na-anọ n'èzí ngere; bunye ma budata ihe n'oke ugbo.",
            "N'ọnụ ụzọ mbata, tinye efere ịsa ụkwụ nwere ọgwụ na-egbu nje (disinfectant) nke ugbo, nke e gwakọtara dị ka akwụkwọ dị n'elu ya kwuru, ma gbanwee ya mgbe ọ ruru unyi ma ọ bụ mgbe mmiri zochara; unyi na-akwụsị ọgwụ ahụ ịrụ ọrụ, ya mere buru ụzọ hichapụ apịtị n'akpụkpọ ụkwụ. Nke ka mma, debe akpụkpọ ụkwụ na uwe a na-eji naanị n'ugbo n'ọnụ ụzọ mbata. Nwee ncha na mmiri maka ịsa aka. Kwe ka naanị ndị ọbịa ga-abịarịrị bata, jụọ ha ebe ha nọ na anụ, ma dee nleta ọ bụla n'akwụkwọ ndekọ ndị ọbịa: ụbọchị, aha, ekwentị, ihe kpatara nleta na ugbo ikpeazụ ha letara."
          ],
          steps: ["See ugbo gị: ụlọ, ebe anụ bi, ụlọ nkwakọba ihe, ọnụ ụzọ ama na okporo ụzọ.", "Kaa mpaghara dị ọcha, mpaghara etiti na mpaghara ruru unyi akara.", "Họrọ otu ọnụ ụzọ mbata n'ebe anụ bi, nwere ọnụ ụzọ ama.", "Tinye efere ịsa ụkwụ na ebe ịsa aka n'ọnụ ụzọ ahụ.", "Debe akpụkpọ ụkwụ na uwe a na-eji naanị n'ugbo n'ebe ahụ ma ọ bụrụ na ị nwere ike.", "Malite akwụkwọ ndekọ ndị ọbịa ma debe ụgbọala ndị ahịa n'èzí ngere."],
          words: [["Nchekwa ọrịa (biosecurity)", "usoro na-egbochi nje ịbata n'ugbo, ịgbasa n'ime ya na ịpụ na ya."], ["Efere ịsa ụkwụ (footbath)", "efere na-adịghị omimi nwere ọgwụ na-egbu nje nke ndị mmadụ na-azọba ụkwụ iji hichaa akpụkpọ ụkwụ ha."], ["Ọgwụ na-egbu nje (disinfectant)", "kemịkal na-egbu nje; jiri ngwaahịa ugbo e gwakọtara dị ka akwụkwọ dị n'elu ya kwuru."], ["Akwụkwọ ndekọ ndị ọbịa (visitor log)", "akwụkwọ ebe ị na-ede aha onye ọbịa ọ bụla, otu e si akpọtụrụ ya, ihe kpatara nleta na ugbo ikpeazụ ọ letara."]],
          slides: [
            { title: "Nje na-abịa site na...", bullets: ["Anụ ọhụrụ, ndị mmadụ, akpụkpọ ụkwụ na uwe", "Ụgbọala, igbe ebu anụ, akpa nri na ngwaọrụ", "Ọtụtụ ezigbo usoro anaghị efu ego ukwuu"] },
            { title: "Mpaghara atọ", bullets: ["Dị ọcha: ebe anụ bi", "Etiti: ụlọ nkwakọba ihe, ebe ịgbanwe uwe, efere ịsa ụkwụ", "Ruru unyi: okporo ụzọ, ebe ịdọba ụgbọala, igbe ahịa"] },
            { title: "Otu ọnụ ụzọ mbata, nwere efere ịsa ụkwụ", bullets: ["Otu ọnụ ụzọ ama n'ebe anụ bi", "Hichapụ apịtị, wee zọba n'efere ịsa ụkwụ", "Ọgwụ na-egbu nje e gwakọtara dị ka akwụkwọ ya kwuru"] },
            { title: "Ndị ọbịa", bullets: ["Naanị ndị ga-abịarịrị", "Akpụkpọ ụkwụ ugbo na ịsa aka", "Dee ụbọchị, aha, ekwentị, ihe kpatara ya, ugbo ikpeazụ"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "See ugbo gị n'akwụkwọ. Kaa mpaghara dị ọcha, mpaghara etiti na mpaghara ruru unyi akara, otu ọnụ ụzọ mbata, efere ịsa ụkwụ na ebe ụgbọala ga-akwụsị. Dee iwu ndị ọbịa atọ n'okpuru eserese ahụ.",
          youCanNow: "ise mpaghara nchekwa ọrịa maka ugbo gị na ịtọ iwu maka efere ịsa ụkwụ, ịsa aka na ndị ọbịa.",
          quickCheck: [
            { objective: "O5", q: "Onye ahịa ezi bịara ịzụ ụmụ ezi a napụrụ ara. Ebee ka ụgbọala ya kwesịrị ịkwụsị?", options: ["N'èzí ngere, na-ebunye ihe n'oke ugbo", "N'akụkụ ebe ezi bi", "N'ime ụlọ nkwakọba nri", "Ebe ọ bụla masịrị ya"], answer: 0, why: "Ụgbọala na-eleta ọtụtụ ugbo na-ebu nje, ya mere ha na-anọ na mpaghara ruru unyi n'èzí ngere." },
            { objective: "O5", q: "Efere ịsa ụkwụ gị jupụtara n'apịtị mgbe mmiri zochara. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ ka na-arụ ọrụ", "Tinye naanị mmiri ọzọ", "Wụpụ ya, hichaa ya, ma jupụta ya ọzọ n'ọgwụ na-egbu nje e gwakọtara dị ka akwụkwọ ya kwuru", "Wepụ ya ruo oge ọkọchị"], answer: 2, why: "Unyi na mmiri gbakwụnyere na-akwụsị ọgwụ na-egbu nje ịrụ ọrụ, ya mere a ga-ehicha efere ruru unyi ma jupụta ya ọzọ." }
          ]
        },
        {
          title: "Ikewapụ anụ ọhụrụ na iwepụ ozu anụmanụ n'ụzọ dị mma",
          objectives: ["O5"],
          minutes: 5,
          goal: "Hazie ebe ikewapụ anụ ọhụrụ na ụzọ dị mma isi wepụ ozu anụmanụ.",
          text: [
            "Anụ ọhụrụ bụ ụzọ a na-ahụkarị ọrịa si abata n'ugbo. Anụ nwere ike ịdị ka ahụ dị ya mma ma ka bu nje ma ọ bụ ikpuru. Zụta n'ugbo a ma ama, ndị anụ ha dị mma, jụọ akụkọ ọgwụ mgbochi na ọgwụgwọ anụ ahụ, ma zere anụ si n'ahịa ma ọ bụ n'ebe a kọrọ ọrịa.",
            "Ikewapụ (quarantine) pụtara idebe anụ ọhụrụ ma ọ bụ anụ na-alọghachi n'ebe ha nọ iche, pụọ n'igwe anụ gị, ruo oge dọkịta anụmanụ gị kwuru, nke na-adịkarị izu ole na ole. Lekọta ha ikpeazụ kwa ụbọchị, jiri akpụkpọ ụkwụ na ngwaọrụ dị iche, ma lelee ha kwa ụbọchị. Jụọ dọkịta anụmanụ gị ma ị ga-anwale ha, gwọọ ha ma ọ bụ nye ha ọgwụ mgbochi tupu ha esonyere ndị ọzọ. Anụ ndị a na-erereghị n'ahịa ma ọ bụ ngosi, ndị lọghachiri, na-abakwa n'ebe ikewapụ.",
            "Ozu anụmanụ na-agbasa ọrịa nye anụ gị, nkịta, anụ ọhịa na ndị agbata obi. Erela, erila ma ọ bụ nye onye ọ bụla anụ nwụrụ site n'ihe a na-amaghị. Jiri uwe aka (gloves) metụ ozu, wee wepụ ya dị ka dọkịta anụmanụ gị ma ọ bụ iwu obodo kwuru: ọtụtụ mgbe olulu dị omimi, dị anya na mmiri na ụlọ, nke nkịta na anụ ọhịa na-enweghị ike igwupụta. Ọ bụrụ na anụ nwụrụ na mberede, ma ọ bụ na ọtụtụ na-arịa ọrịa, ewepụla ozu ahụ ma ọ bụ bupụ ya n'ugbo: buru ụzọ kpọọ dọkịta anụmanụ, n'ihi na ọ nwere ike ịbụ ọrịa a ga-akọrịrị ma ọ bụ anthrax."
          ],
          steps: ["Zụta naanị n'ugbo a ma ama, nke anụ ha dị mma; jụọ akụkọ ahụike ha.", "Kwadebe ebe ikewapụ dị iche, pụọ n'igwe anụ.", "Debe anụ ọhụrụ na anụ na-alọghachi n'ebe ahụ ruo oge dọkịta anụmanụ gị kwuru.", "Lekọta ha ikpeazụ kwa ụbọchị, jiri akpụkpọ ụkwụ na ngwaọrụ dị iche.", "Gị na dọkịta anụmanụ gị họrọ ebe a ga-ewepụ ozu, dị anya na mmiri na ụlọ.", "Ọnwụ mberede ma ọ bụ nke a na-amaghị ihe kpatara ya: ewepụla ma ọ bụ bupụ ozu ahụ; kpọọ dọkịta anụmanụ."],
          words: [["Ikewapụ (quarantine)", "idebe anụ ọhụrụ ma ọ bụ anụ na-alọghachi iche ruo oge ụfọdụ iji hụ ma ha bu ọrịa."], ["Ozu anụmanụ (carcass)", "ahụ anụ nwụrụ anwụ."], ["Ọrịa a ga-akọrịrị (notifiable disease)", "ọrịa iwu kwuru na a ga-akọrịrị ndị isi ọrụ anụmanụ."]],
          slides: [
            { title: "Anụ ọhụrụ na-ebubata ọrịa", bullets: ["Anụ dị ka ahụ dị ya mma nwere ike ibu nje", "Zụta n'ugbo a ma ama, nke anụ ha dị mma", "Jụọ akụkọ ahụike ha"] },
            { title: "Ikewapụ", bullets: ["Ebe dị iche, pụọ n'igwe anụ", "Ruo oge dọkịta anụmanụ gị kwuru", "Lekọta ha ikpeazụ, jiri akpụkpọ ụkwụ na ngwaọrụ dị iche"] },
            { title: "Ozu anụmanụ", bullets: ["Erela, erila, enyekwala onye ọ bụla", "Uwe aka; wepụ ya dị ka dọkịta ma ọ bụ iwu obodo kwuru", "Olulu dị omimi, dị anya na mmiri; nkịta enweghị ike igwupụta ya"] },
            { title: "Ọnwụ mberede", bullets: ["Ewepụla ma ọ bụ bupụ ozu ahụ", "Buru ụzọ kpọọ dọkịta anụmanụ"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Kaa ebe ikewapụ akara n'eserese ugbo gị, dị anya n'anụ gị dị ka i nwere ike, ma dee ogologo oge dọkịta anụmanụ gị kwuru ka e debe anụ ọhụrụ n'ebe ahụ (jụọ ma ọ bụrụ na ị maghị). Wee kaa ebe na otu ị ga-esi wepụ ozu anụmanụ akara, ma dee iwu maka ọnwụ mberede.",
          youCanNow: "ikewapụ anụ ọhụrụ na iwepụ ozu anụmanụ n'ụzọ dị mma, ma mara mgbe ị ga-akpọ dọkịta anụmanụ tupu ị metụ ozu aka.",
          quickCheck: [
            { objective: "O5", q: "Ị zụtara ewu atọ n'ahịa. Gịnị ka ị ga-eme mgbe i ruru ụlọ?", options: ["Tinye ha ozugbo n'igwe anụ gị", "Debe ha n'ebe dị iche ruo oge dọkịta anụmanụ gị kwuru", "Ree ha ozugbo", "Kwe ka ha soro ewu onye agbata obi taa nri"], answer: 1, why: "Ikewapụ na-egosi ma anụ ọhụrụ bu ọrịa tupu ha enwee ike ibunye igwe anụ gị ya." },
            { objective: "O5", q: "Otu ezi nwụrụ na mberede n'abalị. Gịnị bụ nzọụkwụ mbụ ziri ezi?", options: ["Wepe ya iji hụ ihe mere", "Ree anụ ya ngwa ngwa", "Hapụ ozu ahụ ebe ọ dị, debe ndị mmadụ na anụ anya na ya, ma kpọọ dọkịta anụmanụ", "Tụba ya n'iyi"], answer: 2, why: "Ọnwụ mberede nwere ike ịbụ ọrịa a ga-akọrịrị; iwepe ma ọ bụ ibugharị ozu ahụ nwere ike ịgbasa ya." }
          ]
        },
        {
          title: "African Swine Fever na avian influenza: hụ, kwụsị, kọọ",
          objectives: ["O6"],
          minutes: 6,
          goal: "Mata ihe ịdọ aka na ntị nke African Swine Fever na avian influenza ma kọọrọ dọkịta anụmanụ ha ozugbo.",
          text: [
            "African Swine Fever (ASF) bụ ọrịa nje virus nke ezi nke kpatara nnukwu mfu n'ọtụtụ mba Afrịka, gụnyere Nigeria. WOAH depụtara oke ahụ ọkụ, ike ọgwụgwụ, enweghị agụụ, ntụpọ uhie ma ọ bụ odo odo na akpụkpọ ahụ, ịgbọ agbọ, afọ ọsịsa, ime ịpụ na nne ezi, na ọnwụ, ebe ihe ruru pasent 100 nke ezi na-anwụ n'ụdị ya siri ike. Ọ na-agbasa site n'imetụ ezi na-arịa ọrịa, anụ ezi na nri fọdụrụ (swill) si n'ezi butere ya, uwe, akpụkpọ ụkwụ, ụgbọala na ngwaọrụ ruru unyi, na akọrọ dị nro (soft ticks) n'ebe ha dị. Virus ahụ na-adịte aka n'anụ ezi na gburugburu. Ọ naghị ebute mmadụ ọrịa. FAO kwuru na enweghị ezi ọgwụ mgbochi ma ọ bụ ọgwụgwọ, ya mere mgbochi bụ naanị ụzọ e si achịkwa ya; WOAH na-adọ aka na ntị megide ọgwụ mgbochi na-eruteghị ọkwa, ya mere ejila mgbe ọ bụla \"ọgwụ mgbochi ASF\" ndị isi ọrụ anụmanụ mba gị akwadoghị.",
            "Avian influenza (bird flu, ọrịa ọkụkọ) bụ ọrịa nje virus nke nnụnụ. Ụdị ya siri ike nwere ike igbu ihe ka ọtụtụ n'ọkụkọ n'ime ụbọchị ole na ole. Ihe ịrịba ama USDA APHIS depụtara gụnyere ọnwụ mberede n'enweghị ịdọ aka na ntị, ọkụkọ na-adịghị ike ma kwụsị iri nri, akwa na-ebelata ma ọ bụ akwa nwere ọkpụkpụ dị nro, okpu isi (comb), akpụkpọ agba (wattles) na ụkwụ zara aza ma gbaa odo odo, iku ume n'ike, ụkwara, na olu gbagọrọ agbagọ. Ọ na-agbasa site na nnụnụ ọhịa, ọkụkọ na-arịa ọrịa, ahịa ọkụkọ dị ndụ, nsị, igbe ebu ọkụkọ, nri, mmiri na ngwaọrụ. Ọ na-adịkarịghị ka mmadụ butere ya, ọ na-abụkarị site n'imetụ ọkụkọ na-arịa ọrịa nso, ya mere ejila aka efu metụ ọkụkọ na-arịa ọrịa ma ọ bụ nwụrụ anwụ mgbe ọ bụla.",
            "A ga-akọrịrị ọrịa abụọ ahụ: a ga-akọrọ dọkịta anụmanụ gị ma ọ bụ ndị isi ọrụ anụmanụ ozugbo ọ bụla e chere na ha dị. Naanị nnwale ụlọ nyocha (laboratory) nwere ike ịkwado ha, n'ihi na ọrịa ndị ọzọ yiri ha. Iji gbochie ha: enyela ezi nri fọdụrụ a na-esighị esi, zụta naanị n'ugbo nke anụ ha dị mma, debe ezi n'ime ebe obibi ha ma debe ọkụkọ n'ime ụlọ pụọ na nnụnụ ọhịa, ma jiri atụmatụ nchekwa ọrịa gị kwa ụbọchị. Ọ bụrụ na i chere na ọ bụ otu n'ime ọrịa abụọ ahụ: debe anụ niile n'ime, kwụsị ire na ibugharị anụ, anụ, akwa na nsị anụ, gbochie ndị ọbịa, ma kpọọ dọkịta anụmanụ."
          ],
          steps: ["Mara ihe ịrịba ama ASF (ezi) na avian influenza (ọkụkọ).", "Lelee anụ gị kwa ụbọchị.", "Ọ bụrụ na i chere na ọ dị: debe anụ niile n'ebe obibi ma ọ bụ ụlọ ha.", "Kwụsị ire na ibugharị ihe niile: anụ dị ndụ, anụ, akwa, nsị anụ, ngwaọrụ.", "Ewepela, erela, erila anụ na-arịa ọrịa ma ọ bụ nwụrụ anwụ; ejila aka efu.", "Kpọọ dọkịta anụmanụ gị ma ọ bụ ọfịs ọrụ anụmanụ ozugbo ma soro ntụziaka ha."],
          words: [["African Swine Fever (ASF)", "ọrịa virus na-egbu egbu nke ezi, na-enweghị ezi ọgwụ mgbochi ma ọ bụ ọgwụgwọ; ọ naghị ebute mmadụ."], ["Avian influenza", "bird flu (ọrịa ọkụkọ): ọrịa virus nke nnụnụ; ụdị ya siri ike na-egbu ihe ka ọtụtụ n'ọkụkọ."], ["Nri fọdụrụ (swill)", "nri fọdụrụ a na-enye ezi; nri fọdụrụ a na-esighị esi nwere anụ ezi nwere ike ịgbasa ASF."], ["Ndị isi ọrụ anụmanụ (veterinary authority)", "ọfịs gọọmentị na-ahụ maka ọrịa anụmanụ, dị ka ọrụ anụmanụ nke mba ma ọ bụ nke county."]],
          slides: [
            { title: "African Swine Fever (ezi)", bullets: ["Oke ahụ ọkụ, ike ọgwụgwụ, enweghị agụụ, akpụkpọ uhie ma ọ bụ odo odo", "Ịgbọ agbọ, afọ ọsịsa, ime ịpụ, ọnwụ mberede", "Enweghị ezi ọgwụ mgbochi ma ọ bụ ọgwụgwọ (FAO)"] },
            { title: "Otu ASF si agbasa", bullets: ["Ezi na-arịa ọrịa, anụ ezi na nri fọdụrụ a na-esighị esi", "Akpụkpọ ụkwụ, uwe, ụgbọala na ngwaọrụ", "Ọ naghị ebute mmadụ"] },
            { title: "Avian influenza (ọkụkọ)", bullets: ["Ọnwụ mberede; ọkụkọ adịghị ike; akwa na-ebelata", "Okpu isi na akpụkpọ agba zara aza, gbaa odo odo; iku ume n'ike", "Nnụnụ ọhịa, ahịa, igbe ebu ọkụkọ, nsị na-agbasa ya"] },
            { title: "A ga-akọrịrị ya: kọọ ozugbo", bullets: ["Debe anụ niile n'ime; kwụsị ire na ibugharị ihe niile", "Ejila aka efu; ewepela, erela, erila", "Kpọọ dọkịta anụmanụ ma ọ bụ ọfịs ọrụ anụmanụ ugbu a"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nchekwa ọrịa gị otu peeji. Jiri eserese ugbo gị nwere mpaghara, efere ịsa ụkwụ na iwu ndị ọbịa, ikewapụ na iwepụ ozu anụmanụ, wee tinye ihe ịdọ aka na ntị nke ASF ma ọ bụ avian influenza, ihe ị ga-eme n'awa mbụ, na aha na nọmba ekwentị dọkịta anụmanụ gị.",
          youCanNow: "ịmata ihe ịdọ aka na ntị nke African Swine Fever na avian influenza, ịkwụsị ibugharị ihe niile, na ịkọrọ dọkịta anụmanụ ozugbo ma ọ bụrụ na i chere na ha dị.",
          quickCheck: [
            { objective: "O6", q: "Ọtụtụ n'ime ezi gị nwere oke ahụ ọkụ, ntụpọ odo odo na akpụkpọ ahụ, abụọ nwụkwara n'abalị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Ree ndị fọdụrụ ngwa ngwa tupu ha anwụọ", "Zụta ọgwụ mgbochi ASF n'ahịa", "Gwọọ ha n'ọgwụ fọdụrụ", "Debe ezi niile n'ime, kwụsị ibugharị na ire ihe niile, ma kpọọ dọkịta anụmanụ ozugbo"], answer: 3, why: "Ndị a bụ ihe ịdọ aka na ntị nke ASF, ọrịa a ga-akọrịrị: kwụsị ibugharị ihe ma kọọ ya ozugbo." },
            { objective: "O6", q: "Kedu omume na-enyere aka igbochi African Swine Fever?", options: ["Ịghara inye ezi nri fọdụrụ a na-esighị esi mgbe ọ bụla", "Inye ezi nri fọdụrụ si n'ụlọ oriri", "Ikwe ka ezi na-agagharị n'obodo", "Ịzụta ezi n'aka onye ahịa ọ bụla na-agafe"], answer: 0, why: "Nri fọdụrụ a na-esighị esi nwere ike inwe anụ ezi nwere virus ASF, nke na-adịte aka n'anụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Igbochi ọrịa ịbata",
        questions: [
          { objective: "O5", q: "N'atụmatụ nchekwa ọrịa, kedu ebe bụ mpaghara dị ọcha?", options: ["Okporo ụzọ dị n'èzí ugbo", "Ebe a na-adọba ụgbọala", "Ebe anụ bi", "Ahịa"], answer: 2, why: "Mpaghara dị ọcha bụ ebe anụ bi, ebe naanị ndị na-elekọta anụ na-aga." },
          { objective: "O5", q: "Gịnị bụ isi ihe akwụkwọ ndekọ ndị ọbịa maka?", options: ["Ịnara ndị ọbịa ego", "Ịmara onye bịara, mgbe ọ bịara na ebe o si bịa ma ọ bụrụ na ọrịa apụta", "Ịgụ ọnụ ọgụgụ ndị enyi gị", "Ịkpọsa ugbo ahụ"], answer: 1, why: "Ọ bụrụ na ọrịa apụta, akwụkwọ ndekọ ahụ na-enyere dọkịta anụmanụ aka ịchọpụta ebe o nwere ike isi bịa." },
          { objective: "O5", q: "Olee otu ị ga-esi wepụ ewu nwụrụ site n'ihe a na-amaghị?", options: ["Ree anụ ya ọnụ ala", "Nye nkịta ya", "Hapụ ya n'ọhịa", "Jiri uwe aka ma wepụ ya dị ka dọkịta anụmanụ ma ọ bụ iwu obodo kwuru, dị anya na mmiri"], answer: 3, why: "Ozu anụmanụ na-agbasa ọrịa; iwepụ ya n'ụzọ dị mma dị ka dọkịta anụmanụ kwuru na-echebe anụ, ndị mmadụ na mmiri." },
          { objective: "O6", q: "Ọ dị ezi ọgwụ mgbochi ma ọ bụ ọgwụgwọ ị nwere ike iji megide African Swine Fever?", options: ["Mba; FAO kwuru na mgbochi site na nchekwa ọrịa bụ naanị ụzọ", "Ee, antibiotic ọ bụla na-agwọ ya", "Ee, a na-ere ya n'ahịa ọ bụla", "Ee, ngwakọ mkpa akwụkwọ na-agwọ ya"], answer: 0, why: "FAO kwuru na enweghị ezi ọgwụ mgbochi ma ọ bụ ọgwụgwọ maka ASF, ya mere mgbochi bụ ụzọ e si achịkwa ya." },
          { objective: "O6", q: "Ọkụkọ gị na-eyi akwa kwụsịrị iyi akwa na mberede, okpu isi ụfọdụ zara aza ma gbaa odo odo, ọtụtụ nwụkwara n'otu ụbọchị. Gịnị ka ị ga-eme?", options: ["Ree akwa na ọkụkọ n'ahịa taa", "Lie ọkụkọ nwụrụ anwụ ma ghara ikwu ihe ọ bụla", "Debe ọkụkọ n'ime, kwụsị ibugharị ihe niile, zere iji aka efu metụ ha, ma kọọrọ dọkịta anụmanụ ozugbo", "Hapụ ọkụkọ ka ha pụọ n'èzí"], answer: 2, why: "Ihe ịrịba ama ndị a na-egosi avian influenza, nke a ga-akọrịrị ma kọọ ya ozugbo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịzụ Anụ Ụlọ, Ịmụba Ha na Nchekwa Ọrịa n'Ugbo",
    questions: [
      { objective: "O1", q: "Gịnị kwesịrị ịkacha duzie nhọrọ ụdị anụ gị?", options: ["Ihe ndị na-azụ n'aka gị chọrọ na ihe ugbo gị nwere ike inye n'afọ niile", "Ụdị dị na mgbasa ozi kacha ọhụrụ", "Ụdị nwere anụ kacha buo ibu", "Anụ kacha dị ọnụ ala n'ahịa"], answer: 0, why: "Ụdị anụ na-eweta ego naanị mgbe ọ dabara ahịa, ugbo gị nwekwara ike inye ya nri ma lekọta ya." },
      { objective: "O1", q: "Kedu ike ọtụtụ ụdị anụ obodo dị ka ewu West African Dwarf ma ọ bụ ehi N'Dama nwere?", options: ["Ha na-enye mmiri ara kacha ukwuu n'ụwa", "Ha na-anagide okpomọkụ, akọrọ na nri na-adịghị mma", "Ha anaghị arịa ọrịa mgbe ọ bụla", "Ha achọghị mmiri"], answer: 1, why: "Ụdị anụ obodo siri ike; ihe ha na-efu bụ na ha anaghị eto ngwa ngwa ma na-enye ntakịrị." },
      { objective: "O1", q: "Ebee ka ị nwere ike ịjụ ụdị anụ na-eme nke ọma n'ebe gị?", options: ["Ihe ọ bụla e dere na soshal midia", "Onye ahịa na-ere naanị otu ụdị", "Onye ndụmọdụ ọrụ ugbo gị, otu ndị na-amụba anụ ma ọ bụ ụlọ ọrụ nchọpụta", "Ọ dịghị onye; naanị zụta ma hụ"], answer: 2, why: "Ndị ọkachamara obodo na ndị ugbo maara ụdị anụ na-eme nke ọma n'ọnọdụ gị." },
      { objective: "O2", q: "Ihe dị ka ugboro ole ka ehi, ewu na ezi na-abịa n'oge ọchịchọ ma ọ bụrụ na ha atụrụghị ime?", options: ["Ụbọchị 3 ọ bụla", "Ọnwa 6 ọ bụla", "Otu ugboro n'afọ", "Ihe dị ka ụbọchị 21 ọ bụla"], answer: 3, why: "Usoro a na-ahụkarị bụ ihe dị ka ụbọchị 21, ọ bụ ezie na ọ na-adị iche." },
      { objective: "O2", q: "Olee oge kacha mma ilele oge ọchịchọ?", options: ["Naanị n'etiti ehihie", "N'isi ụtụtụ na mgbede, mgbe anụ dị jụụ", "Naanị n'oge nri n'ụbọchị ahịa", "Otu ugboro n'izu"], answer: 1, why: "Ihe ịrịba ama oge ọchịchọ na-adịkarị mfe ịhụ mgbe anụ dị jụụ, opekata mpe ugboro abụọ kwa ụbọchị." },
      { objective: "O2", q: "Gịnị mere a ga-eji dee ụbọchị a kwara anụ?", options: ["Iji lelee ọlaghachi n'oge ọchịchọ ma mara ụbọchị ọmụmụ", "N'ihi na iwu chọrọ foto", "Iji tọọ ọnụ ahịa mmiri ara", "Iji họrọ ụdị nri"], answer: 0, why: "Ụbọchị a kwara ya na-agwa gị mgbe ị ga-elele ọlaghachi n'oge ọchịchọ na mgbe ọ ga-amụ." },
      { objective: "O2", q: "Ihe dị ka ogologo oge ole ka ime nne ezi na-ewe?", options: ["Ihe dị ka ọnwa 9", "Ihe dị ka izu 3", "Ihe dị ka ọnwa 3, izu 3 na ụbọchị 3", "Ihe dị ka afọ 1"], answer: 2, why: "Oge ime nne ezi bụ ihe dị ka ọnwa 3, izu 3 na ụbọchị 3; lelee ụdị gị na dọkịta anụmanụ gị." },
      { objective: "O3", q: "Kedu otu nnukwu uru artificial insemination nwere nye obere onye ọrụ ugbo?", options: ["Ọ na-anọchi inye nri niile", "Ọ pụtara na ndekọ adịghị mkpa", "Ọ na-ewepụ ọrịa niile", "Inweta mkpụrụ ndụ kacha mma n'azụghị oke ehi"], answer: 3, why: "AI na-ebute mkpụrụ ndụ a nwalere anwale n'obere ugbo ndị na-enweghị ike ịzụ oke kacha mma." },
      { objective: "O3", q: "Ehi gosiri standing heat na mbụ n'ehihie. Olee mgbe onye AI kwesịrị ịkwa ya?", options: ["N'ụtụtụ echi ya", "Ozugbo n'abalị", "N'otu izu", "N'oge ọchịchọ na-esote"], answer: 0, why: "Site n'iwu AM-PM, oge ọchịchọ a hụrụ na mbụ n'ehihie ka a na-akwa n'ụtụtụ echi ya." },
      { objective: "O3", q: "Olee otu ị ga-esi chọta onye AI a pụrụ ịtụkwasị obi?", options: ["Onye ọ bụla nwere karama mkpụrụ oke", "Onye a zụrụ azụ, e debanyere aha, site n'ọfịs ọrụ anụ ụlọ, cooperative ma ọ bụ dọkịta anụmanụ", "Onye kacha dị ọnụ ala n'ahịa", "Vidiyo nkuzi"], answer: 1, why: "Ọzụzụ na ndebanye aha na-echebe anụ gị na ego gị." },
      { objective: "O3", q: "Gịnị mere mkpụrụ oke ga-eji nọrọ na liquid nitrogen ruo mgbe a ga-eji ya?", options: ["Iji mee ka ọ dị arọ", "Iji gbanwee agba ya", "N'ihi na ọ na-anwụ ma ọ bụrụ na ọ kpọrọ ọkụ", "Iji tinye vitamin"], answer: 2, why: "Mkpụrụ oke kpụkọrọ akpụkọ na-anwụ ma ọ bụrụ na e debeghị ya n'oyi nke ukwuu ruo mgbe a ga-etinye ya." },
      { objective: "O4", q: "Gịnị na-eme ụmụ nne na nna ha bụ ndị ikwu dị nso?", options: ["Ha na-esi ike karịa mgbe niile", "Ha na-eto ngwa ngwa", "Ha chọrọ obere nri", "Ha na-adịkarị ike, na-arịa ọrịa karịa ma nwee ike inwe nkwarụ"], answer: 3, why: "Ịmụ nwa n'etiti ndị ikwu na-eme ka ụmụ adịghị ike, na-arịa ọrịa ma nwee nkwarụ karịa." },
      { objective: "O4", q: "Kedu ụzọ dị mfe isi gbochie ịmụ nwa n'etiti ndị ikwu n'oke nke gị?", options: ["Gbanwee ma ọ bụ ree ya tupu ụmụ ya nwanyị eruo ịmụ nwa", "Debe ya ruo ọnwụ ya", "Jiri ya naanị n'oge udu mmiri", "Nye ya nri karịa"], answer: 0, why: "Ịgbanwe oke ahụ tupu ụmụ ya nwanyị amụọ nwa na-akwụsị ọlụlụ nna na ada ya." },
      { objective: "O4", q: "Kedu ndekọ na-enyere gị aka izere ịmụ nwa n'etiti ndị ikwu?", options: ["Ọnụ ahịa nri", "Mmiri ozuzo", "Nne na nna anụ ọ bụla", "Aha ndị ọbịa"], answer: 2, why: "Ịmara nne na nna na-egosi anụ ndị nwere njikọ." },
      { objective: "O5", q: "Ọnụ ụzọ mbata ole ka ebe anụ bi kwesịrị inwe?", options: ["Ọtụtụ dị ka o kwere omume", "Otu, nwere ọnụ ụzọ ama, efere ịsa ụkwụ na ebe ịsa aka", "Ọ dịghị; anụ na-agagharị", "Otu maka onye ọbịa ọ bụla"], answer: 1, why: "Otu ọnụ ụzọ mbata a na-achịkwa na-eme ka iwu nchekwa ọrịa dị mfe idebe." },
      { objective: "O5", q: "Gịnị mere a ga-eji hichapụ apịtị n'akpụkpọ ụkwụ tupu efere ịsa ụkwụ?", options: ["Unyi na-akwụsị ọgwụ na-egbu nje ịrụ ọrụ", "Iji chekwaa mmiri", "Apịtị na-eme ka akpụkpọ ụkwụ dị arọ", "Ọ dịghị mkpa"], answer: 0, why: "Ọgwụ na-egbu nje anaghị arụ ọrụ nke ọma n'elu ruru unyi." },
      { objective: "O5", q: "Ezi lọghachiri n'ahịa n'erereghị ha. Gịnị ka ị ga-eme?", options: ["Tinye ha ozugbo na ndị ọzọ", "Nye ha onye ọ bụla n'ọnụ ụzọ ama", "Hapụ ha n'obodo", "Kewapụ ha dị ka a ga-asị na ha bụ anụ ọhụrụ"], answer: 3, why: "Anụ si n'ahịa nwere ike ibute ọrịa, ya mere a na-ekewapụ ha." },
      { objective: "O6", q: "Kedu n'ime ndị a na-agbasa African Swine Fever?", options: ["Mmiri ozuzo n'elu ụlọ", "Inye ezi ntụ ọka (maize bran)", "Anụ ezi dị na nri fọdụrụ a na-esighị esi, ezi na-arịa ọrịa na akpụkpọ ụkwụ ma ọ bụ ụgbọala ruru unyi", "Mmiri ọṅụṅụ dị ọcha"], answer: 2, why: "ASF na-agbasa site n'ezi butere ya, ngwaahịa anụ ezi, nri fọdụrụ na ihe ndị ruru unyi." },
      { objective: "O6", q: "African Swine Fever ọ na-ebute mmadụ ọrịa?", options: ["Ee, mgbe niile", "Naanị ụmụaka", "Naanị ndị ọrụ ugbo", "Mba, ọ naghị ebute mmadụ"], answer: 3, why: "WOAH kwuru na ASF anaghị emetụta ahụike mmadụ, mana ọ na-egbu ezi." },
      { objective: "O6", q: "Gịnị mere a ga-eji kọọ avian influenza ozugbo e chere na ọ dị?", options: ["A ga-akọrịrị ya, ọ na-agbasakwa ngwa ngwa n'etiti ugbo", "Iji nweta ọgwụ mgbochi n'efu oge ọ bụla", "N'ihi na ọkụkọ na-akwụsị iri nri", "Iji gbanwee ọnụ ahịa n'ahịa"], answer: 0, why: "A ga-akọrịrị ọrịa ndị a ka ndị isi ọrụ anụmanụ nwee ike ịkwụsị mgbasa ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Mpaghara na ọnụ ụzọ mbata", objective: "O5", notYet: "Enweghị eserese, ma ọ bụ anụ na ụgbọala na-agwakọta n'enweghị mpaghara e kara akara.", meets: "Eserese na-egosi mpaghara dị ọcha, mpaghara etiti na mpaghara ruru unyi, otu ọnụ ụzọ mbata na ebe ụgbọala na-akwụsị.", exceeds: "Ọ na-egosikwa ụzọ nri, nsị anụ na ozu anụmanụ na-esi ka ha ghara ịgafe mpaghara dị ọcha mgbe ọ bụla." },
      { name: "Efere ịsa ụkwụ na iwu ndị ọbịa", objective: "O5", notYet: "Enweghị efere ịsa ụkwụ ma ọ bụ iwu ndị ọbịa, ma ọ bụ iwu ọ dịghị onye nwere ike idebe.", meets: "Efere ịsa ụkwụ nwere ọgwụ na-egbu nje e gwakọtara dị ka akwụkwọ ya kwuru, ịsa aka, na akwụkwọ ndekọ ndị ọbịa nwere ugbo ikpeazụ ha letara.", exceeds: "Akpụkpọ ụkwụ na uwe a na-eji naanị n'ugbo, na onye a kpọrọ aha na-elele iwu ndị ahụ kwa ụbọchị." },
      { name: "Ikewapụ na ozu anụmanụ", objective: "O5", notYet: "Anụ ọhụrụ na-esonye n'igwe anụ ozugbo, ma ọ bụ a na-ere, eri ma ọ bụ tụpụ ozu anụmanụ.", meets: "Ebe ikewapụ dị iche ruo oge dọkịta anụmanụ kwuru, na ebe dị mma e si ewepụ ozu nke e kwekọrịtara na dọkịta anụmanụ.", exceeds: "Ọ na-ekpuchikwa anụ na-alọghachi n'ahịa na iwu na a gaghị ewepe anụ nwụrụ na mberede mgbe ọ bụla." },
      { name: "Nzaghachi ASF ma ọ bụ avian influenza", objective: "O6", notYet: "Ihe ịdọ aka na ntị adịghị, ma ọ bụ atụmatụ ahụ na-ekwu ka e ree, gwọọ ma ọ bụ chere.", meets: "Ọ na-edepụta ihe ịdọ aka na ntị na ihe a ga-eme n'awa mbụ: debe anụ n'ime, kwụsị ibugharị ihe niile, kọọ ozugbo.", exceeds: "Ọ na-akpọ aha ọfịs ọrụ anụmanụ, nọmba ekwentị na onye ga-akpọ oku, na iwu enweghị nri fọdụrụ ma ọ bụ iwu nnụnụ ọhịa." },
      { name: "Ịmụba anụ na anụ ọhụrụ", objective: "O4", notYet: "A na-azụta anụ ọhụrụ maka ịmụba n'enweghị nlele, ma ọ bụ atụmatụ ahụ na-ekwe ka ndị ikwu lụọ.", meets: "Anụ ọhụrụ maka ịmụba si n'ugbo a ma ama, nke anụ ha dị mma, atụmatụ ahụ na-ezerekwa ọlụlụ ndị ikwu.", exceeds: "Ọ na-eji AI si n'oke ehi na-enweghị njikọ ma ọ bụ atụmatụ ịgbanwerịta oke, ya na ndekọ nne na nna." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ugbo nwere efere ịsa ụkwụ, otu ọnụ ụzọ mbata a na-achịkwa na akwụkwọ ndekọ ndị ọbịa a na-eji ụbọchị 30 mgbe ihe ọmụmụ a gachara (nnyocha nsochi ma ọ bụ nleta onye ndụmọdụ ọrụ ugbo)",
      "Ndị na-amụ ihe na-edebe ndekọ ịmụ anụ ma kọọ na oge ọchịchọ ha gbaghara ma ọ bụ ịkwa ugboro ugboro belatara",
      "Ọrịa ASF ma ọ bụ avian influenza e chere na ọ dị nke ndị na-amụ ihe kọọrọ dọkịta anụmanụ n'ime otu ụbọchị",
      "Ọnwụ ole na ole site n'ọrịa n'igwe anụ na ọkụkọ ndị na-amụ ihe n'ime afọ na-esote"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, ma ọ bụ ndetu ekwentị ma ọ bụ spreadsheet, maka ndekọ ịmụ anụ na akwụkwọ ndekọ ndị ọbịa",
      "Akwụkwọ maka eserese ugbo",
      "Aha na nọmba ekwentị nke dọkịta anụmanụ obodo, ọfịs ọrụ anụmanụ na onye AI e debanyere aha",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ya na otu ndị ọrụ ugbo ma ọ bụ cooperative: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" n'ezi ugbo ebe o kwere omume.",
      "Kpọọ dọkịta anụmanụ obodo ma ọ bụ onye ọrụ ahụike anụmanụ ka ọ bịa na nnọkọ Isi 2 kọwaa otu e si akọ ASF na avian influenza na mba gị na iwu obodo maka iwepụ ozu anụmanụ.",
      "Enyela ma ọ bụ kparịta ụka gbasara ọnụ ọgwụ, ọgwụ mgbochi ma ọ bụ homonụ ma ọ bụ oge ichere mgbe e nyere ọgwụ (withdrawal period) mgbe ọ bụla; zipu ajụjụ ọ bụla dị otu a nye dọkịta anụmanụ na akwụkwọ dị n'elu ọgwụ.",
      "Ekwela ka otu ahụ leta ọtụtụ ugbo ezi ma ọ bụ ọkụkọ n'otu ụbọchị; meenụ nchekwa ọrịa n'ọzụzụ ahụ n'onwe ya.",
      "Jiri rubric tụọ akara atụmatụ nchekwa ọrịa nke onye ọ bụla na-amụ ihe, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
