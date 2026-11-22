"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-risk-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), Ministry of Agriculture nke Kenya: ọnụahịa ahịa", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "National Bureau of Statistics, Naịjirịa (akụkọ ọnụahịa nri kwa ọnwa, Selected Food Prices Watch, na inflation)", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 March 2026): Cote d'Ivoire kara ọnụahịa koko n'ugbo maka oge etiti na 1,200 FCFA/kg", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Purdue University: akpa hermetic Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Nigeria Commodity Exchange (NCX): banyere anyị (Securities and Exchange Commission nyere ya ikike)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Ghana Commodity Exchange (GCX), weebụsaịtị gọọmentị ya", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline: Ghana Commodity Exchange mere ahịa elektrọnik mbụ ya (nkwekọrịta spot ọka, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa: inshọransị weather index (onye etiti inshọransị nwere ikike)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI: Index-Based Livestock Insurance (IBLI) na Kenya Livestock Insurance Programme (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI: Eyes in the sky: gọọmentị Kenya na-enye ndị na-azụ anụ inshọransị anụ ụlọ site na foto satịlaịtị", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Compagnie Nationale d'Assurance Agricole du Senegal (ụlọ ọrụ inshọransị ọrụ ugbo nke Senegal)", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Central Bank of West African States: ihe ngosi ndị bụ isi, gụnyere inflation", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Central Bank of Kenya (inflation na ụlọ ọrụ nwere ikike)", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Kenya: ndepụta SACCO nwere ikike ịnara ego nchekwa", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management-ig",
  lang: "ig",
  translationOf: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Njikwa Ihe Egwu n'Ọrụ Ugbo: Ọnụahịa, Ihu Igwe na Inshọransị",
  skills: "Ịhazi ihe egwu ugbo n'usoro na risk register, Idekọ ọnụahịa na ịgụ ụzọ ahịa na-aga, Ịgbasa ihe egwu site n'ọrụ dị iche iche, ire n'akụkụ na nchekwa, Ịtụle nkwekọrịta ọnụahịa a kara aka na hedging, Ịlele onyinye inshọransị index, Ichebe ego nchekwa pụọ n'inflation",
  outcome: "idepụta ma hazie ihe egwu ndị ugbo gị na-eche ihu, idekọ ọnụahịa ma gụọ ụzọ ha na-aga, ikpebi mgbe ichekwa ihe ubi na ire ya n'akụkụ bara uru, ilele nkwekọrịta ọnụahịa a kara aka na onyinye inshọransị index tupu i bịanye aka, na ichebe ego nchekwa gị pụọ n'inflation, ma dee ha niile n'atụmatụ ihe egwu ugbo nke peeji otu.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị na-azụ anụ, ndị ntorobịa na-arụ azụmahịa ugbo, ndị isi otu mmekọ (cooperative) na ndị ọrụ ndụmọdụ ugbo (extension) na Kenya, Naịjirịa, Ghana, Senegal, Cote d'Ivoire na n'Afrịka niile. Ihu igwe ọjọọ, ọnụahịa na-ada, anụ na-arịa ọrịa na ụgwọ na-arị elu nwere ike imebi ọrụ otu afọ dum. Ị pụghị iwepụ ihe egwu kpamkpam, mana ị nwere ike ịhụ ya ka ọ na-abịa, gbasaa ya ma nyefee akụkụ ya n'aka ndị ọzọ.",
    "Isi 1 na-ekwu maka ịhụ na ịgbasa ihe egwu: ụdị ihe egwu ugbo na risk register (ndepụta ihe egwu), mgbanwe ọnụahịa na ụzọ ahịa na-aga, na ịgbasa ihe egwu site n'ọrụ dị iche iche, ire n'akụkụ na nchekwa. Isi 2 na-ekwu maka inyefe ihe egwu n'aka ndị ọzọ na ichebe ego gị: nkwekọrịta ọnụahịa a kara aka na ihe hedging na commodity exchange pụtara, inshọransị index maka ihe ọkụkụ na anụ ụlọ, na inflation na ego nchekwa.",
    "Ihe ọmụmụ a na-akọwa otu nkwekọrịta, commodity exchange, inshọransị na ego nchekwa si arụ ọrụ, na ihe egwu dị na ha. Ọ naghị enye ndụmọdụ itinye ego (investment), ọ naghịkwa akwado ịzụ ahịa na exchange ọ bụla. Gụchaa nkwekọrịta na akwụkwọ inshọransị ọ bụla, lelee na ụlọ ọrụ ahụ nwere ikike, ma jụọ onye ndụmọdụ ị tụkwasịrị obi dị ka otu mmekọ gị, onye ọrụ extension ma ọ bụ ọka iwu tupu i bịanye aka. Ọnụ ego niile bụ ọmụmaatụ ma ọ bụrụ na e nyeghị isi iyi."
  ],
  finalTask: "Dee atụmatụ ihe egwu nke peeji otu maka ugbo gị (ma ọ bụ ugbo ọmụmaatụ): ihe egwu ise kacha njọ, n'usoro site n'ohere ọ ga-eme na mmebi ọ ga-eme, ya na otu ihe ị ga-eme maka nke ọ bụla; ndekọ ọnụahịa izu anọ maka isi ihe ọkụkụ ma ọ bụ anụ gị site n'opekata mpe isi iyi abụọ, ya na ụzọ ị hụrụ ọnụahịa na-aga; atụmatụ ire ahịa na-ekwu ole ị ga-ere n'oge owuwe ihe ubi na ole ị ga-echekwa, ya na storage break-even price; ajụjụ ị ga-ajụ tupu i bịanye aka na nkwekọrịta ọnụahịa a kara aka ma ọ bụ zụta inshọransị index; na otu ị ga-esi chebe ego nchekwa gị pụọ n'inflation.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị na-azụ anụ na-akwagharị, ndị ntorobịa na-arụ azụmahịa ugbo, ndị isi otu mmekọ na ndị ọrụ extension na Kenya, Naịjirịa, Ghana na mba West Africa na-asụ French, na-akọ ihe dị ka ọka, osikapa, sorghum, agwa, ahụekere, tomato, kọfị na koko, ma ọ bụ na-azụ ehi, ewu, ezi, ọkụkọ ma ọ bụ azụ.",
    startingPoint: "Ha matara site n'ahụmịhe na ihu igwe, ọnụahịa na ọrịa nwere ike imebi otu oge ọrụ. Ọtụtụ na-ere n'oge owuwe ihe ubi nye onye mbụ bịara ịzụ, na-echekwa ego n'aka, n'anụ ụlọ ma ọ bụ n'ọka, ha agụbeghịkwa akwụkwọ inshọransị ma ọ bụ nkwekọrịta ọnụahịa a kara aka. Ụfọdụ anụla maka commodity exchange ma ọ bụ inshọransị index mana ha amaghị otu ha si arụ ọrụ.",
    gap: "Na-enweghị atụmatụ, otu ụkọ mmiri ozuzo, ọdịda ọnụahịa ma ọ bụ ọrịa na-efe efe nwere ike ime ka ndị ọrụ ugbo ree anụ na ala ha, gbazite ego n'ọmụrụ nwa dị elu ma ọ bụ hapụ ọrụ ugbo. Ndị ọrụ ugbo na-edekọ ọnụahịa, na-agbasa ihe egwu, na-agụ okwu nkwekọrịta na inshọransị, ma na-echebe ego nchekwa ha na-agbake ngwa ngwa, ndị na-azụ na ndị na-agbazinye ego na-atụkwasịkwa ha obi karịa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ego ọ bụla",
      "Ngwaọrụ: ekwentị nkịtị maka ọnụahịa site na SMS, redio ma ọ bụ oku; akwụkwọ ndetu maka ndekọ ọnụahịa",
      "Oge: nkuzi nkeji 5 ruo 6 nke dabara n'etiti ọrụ ugbo",
      "Inshọransị, exchange na mmemme dị iche site na mba ruo mba ma na-agbanwe; ndị na-amụ ihe na-elele onyinye nke ugbu a na onye na-achịkwa ya (regulator)",
      "Enweghị ndụmọdụ itinye ego na enweghị ndụmọdụ ịzụ ahịa; ndị na-amụ ihe na-ajụ onye ndụmọdụ ha tụkwasịrị obi tupu ha abịanye aka n'ihe ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Azụmahịa Ugbo na Nlekọta Ugbo\" na \"Ndekọ Ego Ugbo na Nlekọta Itinye Ego\" (break-even price) na-enyere aka na ọnụọgụgụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-eche maka ugbo gị na ezinụlọ gị", action: "idepụta isi ihe egwu ndị ị na-eche ihu ma hazie ha na risk register site n'ohere ha ga-eme na mmebi ha ga-eme", standard: "ya na opekata mpe otu ihe egwu n'ụdị ọ bụla (mmepụta, ahịa, ego, iwu na ndị mmadụ) na otu ihe ị ga-eme maka nke ọ bụla n'ime ise kacha njọ" },
    { id: "O2", condition: "Maka isi ihe ọkụkụ ma ọ bụ anụ gị, n'ime izu anọ", action: "idekọ ọnụahịa kwa izu site n'opekata mpe isi iyi abụọ, gụnyere ọrụ ozi ahịa gọọmentị ebe ọ dị, ma kọwaa ụzọ ọnụahịa na-aga", standard: "na otu ngwaahịa, otu ọkwa (grade) na otu nha kwa izu" },
    { id: "O3", condition: "Mgbe e nyere gị owuwe ihe ubi, ọnụahịa taa, ọnụahịa a na-atụ anya n'ọdịnihu na ụgwọ nchekwa", action: "ịgbakọ storage break-even price ma dee atụmatụ ire n'akụkụ na ịgbasa ihe egwu", standard: "na ọnụọgụgụ ziri ezi, na ego ị chọrọ n'oge owuwe ihe ubi kpuchiri" },
    { id: "O4", condition: "Mgbe e nyere gị onyinye nkwekọrịta forward ma ọ bụ nkwekọrịta ọnụahịa a kara aka", action: "idepụta okwu ndị a ga-elele ma kọwaa ihe ị ga-enweta na ihe ị ga-ahapụ, gụnyere otu hedging na commodity exchange si arụ ọrụ", standard: "na-akpọ opekata mpe okwu ise, na otu uru na otu ihe egwu" },
    { id: "O5", condition: "Mgbe e nyere gị onyinye inshọransị index maka ihe ọkụkụ ma ọ bụ anụ ụlọ", action: "ilele index ahụ, trigger, premium, basis risk na ikike ụlọ ọrụ inshọransị ahụ", standard: "tupu i kwụọ ụgwọ, na-ede azịza nke ọ bụla" },
    { id: "O6", condition: "Mgbe e nyere gị ego nchekwa gị na ọnụ inflation nke ugbu a", action: "itụnyere opekata mpe ụzọ atọ isi chekwaa ego ma họrọ ngwakọta na-echebe ya pụọ n'inflation na izu ohi", standard: "na-akpọ otu ihe egwu maka ụzọ ọ bụla ma lelee na SACCO, ụlọ akụ ma ọ bụ ụlọ ọrụ microfinance ọ bụla nwere ikike" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhụ na ịgbasa ihe egwu",
      lessons: [
        {
          title: "Ụdị ihe egwu ugbo na risk register",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta isi ihe egwu ugbo gị ma hazie ha na risk register dị mfe.",
          text: [
            "Ihe egwu ugbo dị n'ụdị ise. Ihe egwu mmepụta: ụkọ mmiri ozuzo, idei mmiri, ụmụ ahụhụ dị ka fall armyworm, ọrịa n'ihe ọkụkụ na anụ, izu ohi. Ihe egwu ahịa: ọnụahịa na-ada, ndị na-azụ anaghị akwụ ụgwọ ma ọ bụ anaghị abịa iburu, ọnụahịa ihe ọrụ ugbo (input) na-arị elu. Ihe egwu ego: ụgwọ ị na-enweghị ike ịkwụ, ego nchekwa furu efu, inflation, ọnụ mgbanwe ego maka ihe a na-ebuga mba ọzọ dị ka kọfị na koko. Ihe egwu iwu: ụtụ isi ọhụrụ, mmachi ibuga ihe mba ọzọ, mgbanwe n'iwu ala ma ọ bụ ahịa. Ihe egwu ndị mmadụ: ọrịa, mmerụ ahụ ma ọ bụ ọnwụ n'ezinụlọ, ma ọ bụ ịtụfu onye ọrụ dị mkpa.",
            "Risk register bụ tebụl nwere otu ahịrị maka ihe egwu ọ bụla. Maka nke ọ bụla, nye akara maka ohere ọ ga-eme (1 dị ala, 2 n'etiti, 3 dị elu) na mmebi ọ ga-eme (1 nta, 2 n'etiti, 3 buru ibu). Mụbaa abụọ ahụ ka i nweta akara site na 1 ruo 9. Akara kacha elu na-ebu ụzọ.",
            "Maka ihe egwu ọ bụla dị n'elu, họrọ ihe ị ga-eme: zere ya (akọla tomato n'ọnwa mmiri kacha ezo), belata ya (mkpụrụ na-anagide ụkọ mmiri, ọgwụ mgbochi dị ka dọkịta anụmanụ si kwuo, nchekwa), kesaa ma ọ bụ nyefee ya (inshọransị, nkwekọrịta, otu mmekọ), ma ọ bụ nabata ya ma chekwaa ego maka ya. Lelee register ahụ ọzọ tupu oge ọkụkụ ọ bụla."
          ],
          steps: ["Depụta ihe egwu n'ụdị ọ bụla: mmepụta, ahịa, ego, iwu, ndị mmadụ.", "Nye akara maka ohere nke ọ bụla ga-eme: 1, 2 ma ọ bụ 3.", "Nye akara maka mmebi nke ọ bụla ga-eme: 1, 2 ma ọ bụ 3.", "Mụbaa akara ndị ahụ ma hazie ihe egwu ndị ahụ n'usoro.", "Maka ise kacha elu, họrọ zere, belata, kesaa ma ọ bụ nabata, na otu ihe ị ga-eme.", "Lelee ya ọzọ tupu oge ọkụkụ ọ bụla."],
          words: [["Ihe egwu (risk)", "ihe nwere ike ime nke ga-emebi ugbo gị ma ọ bụ ego ị na-enweta."], ["Risk register", "tebụl na-edepụta ihe egwu gị, ohere nke ọ bụla ga-eme, mmebi ọ ga-eme, na ihe ị ga-eme."], ["Ohere (likelihood)", "otu o si dị ka ihe ga-eme."], ["Mmebi (impact)", "ole mmebi ọ ga-eme ma ọ bụrụ na o mee."]],
          slides: [
            { title: "Ụdị ihe egwu ugbo ise", bullets: ["Mmepụta: ihu igwe, ụmụ ahụhụ, ọrịa, izu ohi", "Ahịa: ọnụahịa, ndị na-azụ, ụgwọ ihe ọrụ ugbo", "Ihe egwu ego, iwu na ndị mmadụ"] },
            { title: "Nye ihe egwu ọ bụla akara", bullets: ["Ohere 1-3 x mmebi 1-3 = akara 1-9", "Akara kacha elu na-ebu ụzọ"] },
            { title: "Ụzọ anọ isi zaghachi", bullets: ["Zere ya", "Belata ya", "Kesaa ma ọ bụ nyefee ya: inshọransị, nkwekọrịta, otu", "Nabata ya ma chekwaa ego maka ya"] }
          ],
          tryIt: "Dee risk register maka ugbo gị nwere opekata mpe ihe egwu asatọ na-ekpuchi ụdị ise ahụ niile. Nye nke ọ bụla akara, hazie ha n'usoro, ma dee ihe ị ga-eme (zere, belata, kesaa ma ọ bụ nabata) maka ise kacha elu.",
          youCanNow: "idepụta ihe egwu ugbo gị, ịhazi ha n'usoro na ịhọrọ ihe ị ga-eme maka ndị kacha njọ.",
          quickCheck: [
            { objective: "O1", q: "Ọnụahịa ọka dara ọkara n'oge owuwe ihe ubi. Kedu ụdị ihe egwu nke a bụ?", options: ["Ihe egwu mmepụta", "Ihe egwu ndị mmadụ", "Ihe egwu ahịa", "Ihe egwu iwu"], answer: 2, why: "Mgbanwe ọnụahịa bụ ihe egwu ahịa." },
            { objective: "O1", q: "Ihe egwu nwere ohere 3 na mmebi 2. Gịnị bụ akara ya?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "Mgbanwe ọnụahịa na ịgụ ụzọ ahịa na-aga",
          objectives: ["O2"],
          minutes: 6,
          goal: "Debe ndekọ ọnụahịa kwa izu site n'opekata mpe isi iyi abụọ ma kọwaa ụzọ ọ na-aga.",
          text: [
            "Ọnụahịa ihe ọkụkụ na anụ na-arị elu ma na-ada site n'oge, ihu igwe, ihe a na-ebubata na ihe a na-ebupụ, ọnụ mmanụ ụgbọala na ọchịchọ ndị mmadụ. Ọnụahịa ọtụtụ nri ndị bụ isi na-adị ala n'oge owuwe ihe ubi, mgbe onye ọ bụla na-ere, ma na-adị elu n'ọnwa ndị tupu owuwe ihe ubi ọzọ. Ọbụna ọnụahịa gọọmentị kara aka nwere ike ịgbanwe nke ukwuu n'etiti oge abụọ: na Cote d'Ivoire, ọnụahịa koko e kwere nkwa n'ugbo bụ 2,800 CFA francs kwa kg n'isi oge 2025-2026, gọọmentị wee kaa ya na 1,200 kwa kg maka oge etiti site na March 2026, mgbe ọnụahịa koko n'ụwa dara.",
            "Jiri ọrụ ozi ahịa gọọmentị ebe ha dị. Na Kenya, KAMIS nke Ministry of Agriculture na-ebipụta ọnụahịa ahịa. Na Naịjirịa, National Bureau of Statistics na-ebipụta akụkọ ọnụahịa nri kwa ọnwa site na steeti ruo steeti. Na Ghana, Ghana Commodity Exchange na-ebipụta ọnụahịa ahịa ọ na-azụ. Tinyekwa akụkọ ahịa redio, otu mmekọ gị na opekata mpe ndị na-azụ abụọ.",
            "Debe ndekọ ọnụahịa: kwa izu, dee ụbọchị, ahịa ma ọ bụ isi iyi, ngwaahịa, ọkwa (grade) na nha (dịka ọmụmaatụ akpa ọka kpọrọ nkụ nke 90 kg), na ọnụahịa. Mgbe izu anọ ma ọ bụ karịa gachara, lee ụzọ ọ na-aga: na-arị elu, na-ada ma ọ bụ kwụ otu ebe. Ọ bụrụ na ị nwere ike, tụnyere ya na otu ọnwa ahụ n'afọ gara aga. Ụzọ ahịa na-aga (trend) bụ ihe nduzi, ọ bụghị nkwa: ọnụahịa nwere ike ịgbanwe ngwa ngwa."
          ],
          steps: ["Họrọ isi ngwaahịa gị, ọkwa ya na nha ya.", "Họrọ opekata mpe isi iyi abụọ, gụnyere ọrụ gọọmentị ebe ọ dị.", "Kwa izu dee: ụbọchị, isi iyi, ngwaahịa, ọkwa, nha, ọnụahịa.", "Mgbe izu anọ gachara, dee ụzọ ọ na-aga: na-arị elu, na-ada ma ọ bụ kwụ otu ebe.", "Tụnyere ya na otu ọnwa ahụ n'afọ gara aga.", "Kesaa ndekọ ahụ na otu gị."],
          words: [["Ọrụ ozi ahịa", "ọrụ na-achịkọta ma na-ekesa ọnụahịa site n'ahịa, site na weebụsaịtị, SMS ma ọ bụ redio."], ["Trend (ụzọ ọnụahịa na-aga)", "ụzọ ọnụahịa na-aga n'ozuzu n'ime ọtụtụ izu ma ọ bụ ọnwa."], ["Farmgate price (ọnụahịa n'ugbo)", "ọnụahịa a na-akwụ onye ọrụ ugbo n'ugbo, tupu e buga ya n'ahịa."]],
          slides: [
            { title: "Ihe mere ọnụahịa ji agbanwe", bullets: ["Oge, ihu igwe, ihe a na-ebubata na ihe a na-ebupụ", "Ọnụ mmanụ ụgbọala na ọchịchọ", "Ọ na-adịkarị ala n'oge owuwe ihe ubi"] },
            { title: "Ọbụna ọnụahịa a kara aka na-agbanwe", bullets: ["Koko Cote d'Ivoire: 2,800 CFA/kg, isi oge 2025-26", "E kara ya na 1,200 CFA/kg site na March 2026", "Mgbe ọnụahịa n'ụwa dara"] },
            { title: "Ebe ị ga-achọta ọnụahịa", bullets: ["Kenya: KAMIS", "Naịjirịa: ọnụahịa nri NBS kwa ọnwa", "Ghana: ahịa Commodity Exchange; redio; ndị na-azụ"] },
            { title: "Ndekọ ọnụahịa gị kwa izu", bullets: ["Ụbọchị, isi iyi, ngwaahịa, ọkwa, nha, ọnụahịa", "Mgbe izu 4 gachara: ọ na-arị elu, na-ada ka ọ kwụ otu ebe?", "Trend bụ ihe nduzi, ọ bụghị nkwa"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Malite ndekọ ọnụahịa maka isi ihe ọkụkụ ma ọ bụ anụ gị taa. Dee ọnụahịa izu a site n'isi iyi abụọ, ya na ngwaahịa, ọkwa na nha, ma tọọ ncheta n'ekwentị gị maka otu ụbọchị ahụ kwa izu.",
          youCanNow: "idebe ndekọ ọnụahịa kwa izu site n'isi iyi gọọmentị na nke obodo na ịkọwa ụzọ ọnụahịa na-aga.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ị ga-eji dee ọkwa na nha ya na ọnụahịa ọ bụla na ndekọ gị?", options: ["Ka ndekọ ahụ yie nke gọọmentị", "Ndị na-azụ kwesịrị ịhụ ya", "Ọ dịghị mkpa", "Ka ị tụnyere otu ihe ahụ kwa izu"], answer: 3, why: "Ị pụghị itụnyere ọnụahịa akpa ọka mmiri nke 50 kg na akpa ọka kpọrọ nkụ nke 90 kg." },
            { objective: "O2", q: "N'ime izu ise, ọnụahịa tomato n'otu ahịa bụ 400, 420, 450, 470, 500 kwa igbe. Gịnị bụ trend ya?", options: ["Ọ na-ada", "Ọ na-arị elu", "Ọ kwụ otu ebe", "A pụghị ịmata"], answer: 1, why: "Kwa izu, ọnụahịa ahụ dị elu karịa nke izu gara aga." }
          ]
        },
        {
          title: "Ịgbasa ihe egwu: ọrụ dị iche iche, ire n'akụkụ na nchekwa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gbakọọ ma nchekwa ọ ga-aba uru ma dee atụmatụ ire n'akụkụ.",
          text: [
            "Diversification pụtara ịghara itinye akwa niile n'otu nkata: ihe ọkụkụ abụọ ma ọ bụ karịa nwere oge ma ọ bụ ahịa dị iche, ewu ma ọ bụ ọkụkọ ole na ole, azụ, osisi, ma ọ bụ ego ị na-enweta na-abụghị n'ugbo. Mgbe otu dara, nke ọzọ nwere ike ịka na-ewete ego. Agbasala onwe gị nke ukwuu nke na ị gaghị elekọta nke ọ bụla nke ọma.",
            "Ire n'akụkụ (staged selling) pụtara ire akụkụ nke owuwe ihe ubi n'oge dị iche iche kama ire ya niile otu mgbe. Dịka ọmụmaatụ, ree otu ụzọ n'ụzọ atọ n'oge owuwe ihe ubi iji kwụọ ụgwọ ụlọ akwụkwọ na ụgwọ ndị ọzọ, otu ụzọ n'ụzọ atọ ọnwa abụọ ka e mesịrị, na otu ụzọ n'ụzọ atọ ọnwa anọ ka e mesịrị. Ị gaghị ere ihe niile n'ọnụahịa kacha ala, ị gaghịkwa atụkwasị ihe niile n'olileanya ọnụahịa dị elu nke nwere ike ghara ịbịa.",
            "Nchekwa na-aba uru naanị ma ọ bụrụ na ọnụahịa e mesịrị kpuchiri ụgwọ nchekwa na ihe furu efu. Storage break-even price = (ọnụahịa owuwe ihe ubi x akpa + ụgwọ nchekwa) / akpa ị ga-ere e mesịa. Ọmụmaatụ (ọnụọgụgụ e chepụtara echepụta, na shilling Kenya): akpa ọka 10, ọnụahịa owuwe ihe ubi 3,000 kwa akpa, ụgwọ nchekwa 3,000 maka ọnwa anọ (akpa hermetic, ụlọ nchekwa, nlele). Break-even = (30,000 + 3,000) / 10 = 3,300 kwa akpa. Ọ bụrụ na ọnụahịa eruo 4,200, ị ritere uru; ọ bụrụ na ọ ruru naanị 3,200, ị tụfuru ego. Chekwaa naanị ọka dị ọcha, kpọrọ nkụ n'akpa hermetic ma ọ bụ n'ụlọ nchekwa e nyere asambodo, ma lelee ya maka ụmụ ahụhụ na ebu (mould)."
          ],
          steps: ["Depụta ihe ọzọ ị nwere ike ịkọ, ịzụ ma ọ bụ ịrụ ka otu ọdịda ghara imebi gị.", "Gbakọọ ego ole ị chọrọ n'oge owuwe ihe ubi.", "Zube ire ihe zuru maka ego ahụ n'oge owuwe ihe ubi, ma chekwaa nke fọdụrụ ka ị ree ya n'akụkụ.", "Storage break-even = (ọnụahịa owuwe ihe ubi x akpa + ụgwọ nchekwa) / akpa.", "Tụnyere ya na trend dị na ndekọ ọnụahịa gị.", "Chekwaa naanị ihe ubi dị ọcha, kpọrọ nkụ n'enweghị nsogbu, ma lelee ya."],
          words: [["Diversification", "ịgbasa ọrụ ugbo na ego ị na-enweta n'ọrụ dị iche iche ka otu ọdịda ghara imebi gị."], ["Ire n'akụkụ (staged selling)", "ire owuwe ihe ubi n'akụkụ n'oge dị iche iche kama ire ya niile otu mgbe."], ["Storage break-even price", "ọnụahịa e mesịrị ị chọrọ iji kpuchie ọnụahịa owuwe ihe ubi ị hapụrụ gbakwunyere ụgwọ nchekwa."], ["Akpa hermetic", "akpa nchekwa ikuku anaghị abanye, nke na-egbochi ụmụ ahụhụ iku ume, ka ọka e chekwara nọrọ n'enweghị nsogbu na-enweghị ọgwụ."]],
          slides: [
            { title: "Gbasaa ọrụ gị", bullets: ["Ihe ọkụkụ nwere oge ma ọ bụ ahịa dị iche", "Obere anụ ụlọ, azụ, osisi, ego na-abụghị n'ugbo", "Ọ bụghị ọtụtụ nke na ị gaghị elekọta ha"] },
            { title: "Ree n'akụkụ", bullets: ["Otu ụzọ n'ụzọ atọ n'oge owuwe ihe ubi maka ego ị chọrọ", "Otu ụzọ n'ụzọ atọ mgbe ọnwa 2 gachara, otu mgbe ọnwa 4 gachara", "Etinyela ihe niile n'olileanya otu ọnụahịa"] },
            { title: "Nchekwa ọ na-aba uru? (ọmụmaatụ KES)", bullets: ["(3,000 x 10 + 3,000) / 10 = 3,300 kwa akpa", "Ọnụahịa 4,200: uru; ọnụahịa 3,200: mfu", "Tụnyere ya na ndekọ ọnụahịa gị"] },
            { title: "Chekwaa n'enweghị nsogbu", bullets: ["Naanị ọka dị ọcha, kpọrọ nkụ", "Akpa hermetic ma ọ bụ ụlọ nchekwa e nyere asambodo", "Lelee maka ụmụ ahụhụ na ebu"] }
          ],
          sources: [PICS],
          tryIt: "Maka isi ihe ọkụkụ gị, dee akpa ma ọ bụ kg ole ị na-atụ anya, ego ole ị chọrọ n'oge owuwe ihe ubi, na ole ị ga-ere n'oge owuwe ihe ubi, mgbe ọnwa abụọ gachara na mgbe ọnwa anọ gachara. Gbakọọ storage break-even price maka akụkụ ị ga-echekwa.",
          youCanNow: "ịgbakọ ma nchekwa ọ na-aba uru, ịzube ire n'akụkụ na ịgbasa ihe egwu n'ọrụ karịrị otu.",
          quickCheck: [
            { objective: "O3", q: "Ọnụahịa owuwe ihe ubi 5,000 kwa akpa, akpa 20, ụgwọ nchekwa 10,000. Gịnị bụ storage break-even price?", options: ["5,000", "10,500", "5,500", "500"], answer: 2, why: "(5,000 x 20 + 10,000) / 20 = 110,000 / 20 = 5,500 kwa akpa." },
            { objective: "O3", q: "Gịnị bụ isi uru ire n'akụkụ?", options: ["Ị gaghị ere ihe niile n'ọnụahịa kacha ala ma ọ bụ tụkwasị ihe niile n'olileanya ọnụahịa dị elu", "Ndị na-azụ na-akwụ ụgwọ karịa mgbe niile maka obere ihe", "Ị gaghị achọ nchekwa mgbe ọ bụla", "Ọ na-ewepụ ihe egwu ọnụahịa niile"], answer: 0, why: "Ire n'akụkụ na-agbasa ihe egwu ọnụahịa n'ọtụtụ ụbọchị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhụ na ịgbasa ihe egwu",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ihe egwu mmepụta?", options: ["Ụtụ isi ọhụrụ maka ibupụ ihe", "Onye na-azụ na-akwụ ụgwọ n'oge na-adịghị mma", "Inflation", "Fall armyworm n'ọka gị"], answer: 3, why: "Ụmụ ahụhụ na ihu igwe na-emetụta ihe ị na-emepụta, ya mere ha bụ ihe egwu mmepụta." },
          { objective: "O1", q: "Ịzụta inshọransị index maka ụkọ mmiri ozuzo bụ kedu ụzọ isi zaghachi ihe egwu?", options: ["Izere ya", "Ikesa ma ọ bụ inyefe ya", "Ịnabata ya", "Ileghara ya anya"], answer: 1, why: "Inshọransị na-ebufe akụkụ nke mfu ahụ n'aka ụlọ ọrụ inshọransị." },
          { objective: "O2", q: "Kedu nke bụ ọrụ ọnụahịa ahịa gọọmentị na Kenya?", options: ["KAMIS site na Ministry of Agriculture", "Status WhatsApp nke onye ahịa", "Ịkọ nkọ nke onye agbata obi", "Akwụkwọ nnata afọ gara aga"], answer: 0, why: "KAMIS bụ usoro ozi ahịa nke Ministry of Agriculture." },
          { objective: "O3", q: "Ọnụahịa owuwe ihe ubi 2,000 kwa akpa, akpa 10, ụgwọ nchekwa 4,000. Ọnụahịa e mesịrị bụ 2,300. Ichekwa ọ bara uru?", options: ["Ee, n'ihi na 2,300 karịrị 2,000", "Ee, ichekwa na-aba uru mgbe niile", "Mba, break-even bụ 2,400, ya mere ọ bụ mfu", "A pụghị ịgbakọ ya"], answer: 2, why: "(2,000 x 10 + 4,000) / 10 = 2,400; 2,300 dị n'okpuru ya." },
          { objective: "O3", q: "Onye ọrụ ugbo na-akọ naanị tomato maka otu onye na-azụ. Gịnị ga-agbasa ihe egwu ahụ?", options: ["Ịkọkwu tomato maka otu onye na-azụ ahụ", "Itinye ihe ọkụkụ nwere oge dị iche na ịchọta onye nke abụọ na-azụ", "Ire ihe niile n'ụbọchị owuwe ihe ubi", "Ịkwụsị idebe ndekọ"], answer: 1, why: "Ihe ọkụkụ nke abụọ na onye nke abụọ na-azụ pụtara na otu ọdịda agaghị ewere ihe niile." }
        ]
      }
    },
    {
      name: "Isi 2: Inyefe ihe egwu na ichebe ego gị",
      lessons: [
        {
          title: "Nkwekọrịta ọnụahịa a kara aka, hedging na commodity exchange",
          objectives: ["O4"],
          minutes: 6,
          goal: "Depụta okwu ndị a ga-elele na nkwekọrịta ọnụahịa a kara aka ma kọwaa ihe hedging pụtara.",
          text: [
            "Nkwekọrịta forward ma ọ bụ nkwekọrịta ọnụahịa a kara aka bụ nkwekọrịta ugbu a ire ọnụọgụ na ụdị a kara aka n'ọnụahịa a kara aka n'ụbọchị e mesịrị. Ị na-enweta ịdị n'aka: ị maara ọnụahịa gị tupu owuwe ihe ubi, nke na-enyere gị aka ịzụ atụmatụ na ịgbazite ego. Ị na-ahapụ ihe: ọ bụrụ na ọnụahịa ahịa arịa elu, ị ka na-enweta ọnụahịa e kwekọrịtara. Ọ bụrụ na owuwe ihe ubi gị dara ma ọ bụ ị reere ya onye ọzọ (side-selling), i nwere ike imebi nkwekọrịta ahụ ma ji ụgwọ ntaramahụhụ. Tupu i bịanye aka, lelee: ngwaahịa na ọkwa ya, ọnụọgụ, ọnụahịa ma ọ bụ otu a ga-esi kaa ya, ụbọchị na ebe a ga-ebunye ya, onye ga-akwụ ụgwọ ibu ya, nlele ịdị mma na ịjụ ya, ụbọchị na ụzọ ịkwụ ụgwọ, na ihe ga-eme ma ọ bụrụ na owuwe ihe ubi dara ma ọ bụ onye na-azụ abịaghị iburu ya.",
            "Hedging pụtara ịnara ọnọdụ (position) na-enweta uru mgbe ihe ọkụkụ gị na-efu uru, ka ha abụọ hazie onwe ha. Na commodity exchange, ndị ahịa buru ibu na ndị na-edozi ihe ubi (processors) na-eme nke a site na futures: nkwekọrịta a haziri ahazi ịzụ ma ọ bụ ire e mesịa n'ọnụahịa e kwekọrịtara taa. Ọ bụrụ na ọnụahịa adaa, ọnọdụ futures ahụ na-enweta uru ma ihe ọkụkụ ahụ na-enweta obere ego; ọ bụrụ na ọnụahịa arịa elu, ọnọdụ futures ahụ na-efu ego ma ihe ọkụkụ ahụ na-enweta ego karịa. Ọ chọrọ broker, ego nkwụnye a na-akpọ margin nke a nwere ike ịrịọ n'oge na-adịghị anya, na nka. O nwere ike ime ka ị tụfuo ego, ọ bụghịkwa ihe ị ga-anwale na-enweghị ọzụzụ na ndụmọdụ.",
            "N'Afrịka, Nigeria Commodity Exchange (NCX) nwere ikike site na Securities and Exchange Commission nke Naịjirịa, ọ na-enyekwa ohere ịzụ ahịa, ịchọpụta ọnụahịa, nchekwa na ịhazi ngwaahịa n'ọkwa. Ghana Commodity Exchange (GCX), nke Securities and Exchange Commission nke Ghana na-achịkwa, malitere ahịa spot elektrọnik nke ọka na 2018 ma na-ejikọ ndị ọrụ ugbo na ụlọ nchekwa e nyere asambodo. Ọtụtụ obere ndị ọrụ ugbo na-eru exchange site n'otu mmekọ, onye na-achịkọta ihe ubi (aggregator) ma ọ bụ ụlọ nchekwa e nyere asambodo, ọ bụghị site n'ịzụ ahịa n'onwe ha. Ihe ọmụmụ a anaghị akwado ịzụ ahịa. Onye ọ bụla na-ekwe gị nkwa uru site n'ịzụ ahịa commodity nwere ike ịbụ onye aghụghọ: lelee ya n'aka onye na-achịkwa securities (regulator)."
          ],
          steps: ["Gụchaa nkwekọrịta ahụ, gụpụta ya n'olu dị elu ya na otu gị ma ọ bụrụ na ọ ga-ekwe omume.", "Lelee ngwaahịa, ọkwa, ọnụọgụ, ọnụahịa, ụbọchị na ebe ibunye ya, na ibu ya.", "Lelee nlele ịdị mma, ịjụ ya, ụbọchị na ụzọ ịkwụ ụgwọ.", "Jụọ ihe ga-eme ma ọ bụrụ na owuwe ihe ubi dara ma ọ bụ onye na-azụ abịaghị iburu ya.", "Tụnyere ọnụahịa a kara aka na break-even price gị na ndekọ ọnụahịa gị.", "Jụọ otu mmekọ gị, onye ọrụ extension ma ọ bụ ọka iwu tupu i bịanye aka."],
          words: [["Nkwekọrịta forward", "nkwekọrịta ugbu a ire ọnụọgụ a kara aka n'ọnụahịa a kara aka n'ụbọchị e mesịrị."], ["Hedging", "ịnara ọnọdụ na-enweta uru mgbe ihe ọkụkụ gị na-efu uru, ka mfu ndị ahụ hazie onwe ha."], ["Futures", "nkwekọrịta a haziri ahazi a na-azụ na exchange iji zụta ma ọ bụ ree ngwaahịa e mesịa n'ọnụahịa e kwekọrịtara ugbu a."], ["Commodity exchange", "ahịa a na-achịkwa ebe ndị na-azụ na ndị na-ere na-azụ ihe ọkụkụ na ngwaahịa ndị ọzọ site n'ọkwa na iwu e kwekọrịtara."], ["Side-selling", "ire ihe ubi e kwere otu onye na-azụ nkwa nye onye ọzọ."]],
          slides: [
            { title: "Nkwekọrịta ọnụahịa a kara aka", bullets: ["Ọnụọgụ, ụdị na ọnụahịa a kara aka maka e mesịa", "Uru: ọnụahịa ị maara iji zụọ atụmatụ ma gbazite ego", "Ihe ị na-ahapụ: ego ọzọ ma ọnụahịa rịa elu"] },
            { title: "Lelee okwu ọ bụla", bullets: ["Ngwaahịa, ọkwa, ọnụọgụ, ọnụahịa", "Ụbọchị ibunye, ebe, ibu ya", "Nlele ịdị mma, ịjụ ya, ịkwụ ụgwọ", "Owuwe ihe ubi dara; onye na-azụ abịaghị iburu"] },
            { title: "Ihe hedging pụtara", bullets: ["Ọnọdụ na-enweta uru mgbe ihe ọkụkụ gị na-efu uru", "Futures chọrọ broker, margin na nka", "O nwere ike ime ka ị tụfuo ego: ọ bụghị maka ndị mbido"] },
            { title: "Exchange n'Afrịka", bullets: ["Naịjirịa: NCX, SEC nyere ya ikike", "Ghana: GCX, ahịa spot ọka kemgbe 2018", "Ọtụtụ ndị ọrụ ugbo na-abanye site n'otu mmekọ ma ọ bụ ụlọ nchekwa"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Were ezi nkwekọrịta onye na-azụ ma ọ bụ nke ọmụmaatụ. Dee okwu asatọ ahụ dị na nzọụkwụ ndị ahụ na ihe nkwekọrịta ahụ kwuru (ma ọ bụ \"ọ dịghị\"). Wee dee otu ihe ị ga-enweta na otu ihe egwu ị ga-anara ma ọ bụrụ na i bịanye aka na ya.",
          youCanNow: "ilele nkwekọrịta ọnụahịa a kara aka okwu n'okwu na ịkọwa ihe hedging na commodity exchange pụtara na ihe mere o ji nwee ihe egwu.",
          quickCheck: [
            { objective: "O4", q: "I bịanyere aka na ọnụahịa a kara aka nke 30,000 kwa akpa. N'oge ibunye ya, ọnụahịa ahịa bụ 36,000. Gịnị ka ị ga-enweta?", options: ["36,000 kwa akpa", "33,000 kwa akpa", "Ọ dịghị ihe", "30,000 kwa akpa, ọnụahịa e kwekọrịtara"], answer: 3, why: "Nkwekọrịta ọnụahịa a kara aka na-akwụ ọnụahịa e kwekọrịtara ọbụna ma ahịa rịa elu." },
            { objective: "O4", q: "Onye ị na-amaghị kwere ịzụrụ gị futures commodity nwere \"uru e kwere nkwa\". Gịnị ka ị ga-eme?", options: ["Jụ ya ma lelee ụlọ ọrụ ahụ n'aka onye na-achịkwa securities", "Zipu obere ego nkwụnye iji nwalee ya", "Nye PIN mobile money gị ka ha zụọ ahịa", "Bịanye aka ngwa ngwa tupu onyinye ahụ agwụ"], answer: 0, why: "Ọ dịghị onye nwere ike ikwe nkwa uru ahịa; nke a bụ ihe ịrịba ama nke aghụghọ." }
          ]
        },
        {
          title: "Inshọransị index maka ihe ọkụkụ na anụ ụlọ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lelee onyinye inshọransị index maka index ya, trigger, premium, basis risk na ikike.",
          text: [
            "Inshọransị nkịtị na-ezite mmadụ ka ọ tụọ mfu dị n'ugbo gị. Inshọransị index na-akwụ ụgwọ mgbe index gafere ọkwa a kara aka, a na-akpọ trigger: dịka ọmụmaatụ mmiri ozuzo a tụrụ site na satịlaịtị ma ọ bụ ọdụ ihu igwe dara n'okpuru nke nkịtị, ọnụ owuwe ihe ubi n'ozuzu n'ogbe gị dara, ma ọ bụ foto satịlaịtị na-egosi na ahịhịa anụ na-akpọ nkụ. Ọ dịghị onye na-abịa n'ubi gị, ya mere ọ nwere ike ịdị ọnụ ala ma kwụọ ụgwọ ngwa ngwa.",
            "Ọmụmaatụ: ACRE Africa, onye etiti inshọransị nwere ikike nke dị na Kenya, na-arụ ọrụ na ụlọ ọrụ inshọransị obodo iji nye inshọransị weather index, area yield index na inshọransị anụ ụlọ dabere na index, nke a na-erekarị site n'otu ndị ọrụ ugbo ma na-akwụ ụgwọ site na mobile money. Gọọmentị Kenya na-eme Kenya Livestock Insurance Programme (KLIP), nke a malitere na 2015 site n'iji inshọransị anụ ụlọ dabere na index e mepụtara ya na ILRI: gọọmentị na-akwụ premium maka ndị na-azụ anụ na-enweghị ike nke e debanyere aha, a na-akwụkwa ụgwọ mgbe foto satịlaịtị gosiri na ahịhịa anụ na-ada, ka ndị na-azụ anụ nweta ego iji debe anụ ha ndụ. Na Senegal, ụlọ ọrụ inshọransị ọrụ ugbo nke mba ahụ, CNAAS, na-enye inshọransị maka ihe ọkụkụ na anụ ụlọ ma na-enye inshọransị index.",
            "Isi adịghị ike ya bụ basis risk: index ahụ nwere ike ọ gaghị adaba n'ubi gị. Ihe ọkụkụ gị nwere ike ịnwụ site na mmiri ice (hail) na-ezo naanị n'ogbe gị ma mmiri ozuzo ogbe ahụ dị ka nke nkịtị, ya mere ọ dịghị ụgwọ a ga-akwụ, ma ọ bụ index ahụ nwere ike ịkpali ịkwụ ụgwọ mgbe ubi gị mere nke ọma. Tupu i kwụọ ụgwọ, jụọ: kedu ihe egwu ọ na-ekpuchi, kedu index na ebee ka a na-atụ ya, gịnị bụ trigger, ole ka a ga-akwụ, gịnị bụ premium na ụbọchị ikpeazụ ịzụta ya, otu na mgbe ọ ga-akwụ ụgwọ, ma ụlọ ọrụ inshọransị ahụ nwere ikike (Kenya: Insurance Regulatory Authority; Naịjirịa: NAICOM; Ghana: National Insurance Commission; mba CFA franc: CIMA na ọfịs inshọransị mba ahụ)."
          ],
          steps: ["Jụọ ihe egwu ọ na-ekpuchi: ụkọ mmiri ozuzo, mmiri ozuzo karịrị akarị, mfu owuwe ihe ubi n'ogbe ma ọ bụ ọdịda ahịhịa anụ.", "Jụọ ihe index ahụ bụ na ebe a na-atụ ya.", "Jụọ trigger na ego a ga-akwụ.", "Jụọ premium, ụbọchị ikpeazụ ịzụta ya na otu ụgwọ ga-esi eru gị aka.", "Chee maka basis risk: index ahụ ọ ga-adaba n'ubi gị?", "Lelee na ụlọ ọrụ inshọransị ma ọ bụ onye nnọchi anya ya nwere ikike site n'aka onye na-achịkwa inshọransị."],
          words: [["Inshọransị index", "inshọransị na-akwụ ụgwọ mgbe index a tụrụ, dị ka mmiri ozuzo ma ọ bụ ahịhịa anụ, gafere ọkwa a kara aka, ọ bụghị site n'ileta ugbo gị."], ["Trigger", "ọkwa index nke na-eme ka ụlọ ọrụ inshọransị kwụọ ụgwọ."], ["Premium", "ọnụahịa ị na-akwụ maka nkpuchi inshọransị."], ["Basis risk", "ohere na index ahụ agaghị adaba n'ihe mere n'ezie n'ugbo gị."]],
          slides: [
            { title: "Otu inshọransị index si arụ ọrụ", bullets: ["Ọ na-akwụ ụgwọ mgbe index gafere trigger", "Mmiri ozuzo, owuwe ihe ubi ogbe ma ọ bụ ahịhịa anụ site na satịlaịtị", "Ọ dịghị nleta ubi: ọnụ ala ma dị ngwa"] },
            { title: "Ọmụmaatụ", bullets: ["ACRE Africa: index ihu igwe, owuwe ihe ubi ogbe, anụ ụlọ", "KLIP Kenya: gọọmentị na-akwụ premium maka ndị na-azụ anụ", "Senegal: CNAAS, inshọransị ihe ọkụkụ na anụ ụlọ"] },
            { title: "Basis risk", bullets: ["Index nwere ike ọ gaghị adaba n'ubi gị", "Mmiri ice n'ogbe gị: mfu mana ọ dịghị ụgwọ", "Jụọ ma ebe a na-atụ ya ọ dị nso"] },
            { title: "Jụọ tupu i kwụọ ụgwọ", bullets: ["Ihe egwu, index, trigger, ego a ga-akwụ", "Premium, ụbọchị ikpeazụ, otu ọ ga-esi akwụ", "Ọ nwere ikike? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Jụọ otu mmekọ gị, onye na-ere ihe ọrụ ugbo ma ọ bụ onye ọrụ extension maka otu inshọransị index dị nso gị (ma ọ bụ jiri ọmụmaatụ). Dee azịza ajụjụ asatọ ahụ dị na nzọụkwụ ndị ahụ, ma dee otu ụzọ basis risk nwere ike isi metụta ugbo gị.",
          youCanNow: "ilele onyinye inshọransị index maka index ya, trigger, premium, basis risk na ikike tupu i kwụọ ụgwọ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-eme ka inshọransị index kwụọ ụgwọ?", options: ["Ụlọ ọrụ inshọransị ileta ubi gị", "Index ahụ ịgafe ọkwa trigger", "Gị ịrịọ ka a kwụọ gị", "Mfu ọ bụla i kọrọ"], answer: 1, why: "Inshọransị index na-akwụ ụgwọ dabere n'index a tụrụ, ọ bụghị site na nleta ubi." },
            { objective: "O5", q: "Mmiri ice zoro naanị n'ogbe gị bibiri ọka gị, mana index mmiri ozuzo ogbe ahụ dị ka nke nkịtị. Gịnị ka a na-akpọ nke a?", options: ["Premium", "Trigger", "Basis risk", "Hedging"], answer: 2, why: "Basis risk bụ mgbe index ahụ na-adabaghị n'ihe mere n'ugbo gị." }
          ]
        },
        {
          title: "Inflation na ichekwa ego gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Tụnyere ụzọ isi chekwaa ego ma họrọ ngwakọta na-echebe ya pụọ n'inflation na izu ohi.",
          text: [
            "Inflation pụtara na ọnụahịa ihe n'ozuzu na-arị elu, ya mere otu ego ahụ na-azụta obere ihe. Ọmụmaatụ: ọ bụrụ na ọnụahịa arịa elu 10% n'otu afọ, 10,000 e debere n'ime tin n'ụlọ ga-azụta naanị ihe dị ka 9,100 na-azụta taa. Chọta ọnụ inflation nke ugbu a site n'ụlọ akụ etiti (central bank) ma ọ bụ ọfịs ọnụọgụgụ (Kenya: Central Bank of Kenya; Naịjirịa: National Bureau of Statistics; mba CFA franc na West Africa: BCEAO).",
            "Ụzọ ọ bụla isi chekwaa ego nwere ihe egwu. Ego n'aka n'ụlọ: ọ dị mfe iru ya, mana inflation na-eri uru ya, a pụkwara izu ya. Otu nchekwa ego ma ọ bụ VSLA: ọ na-ewulite omume ichekwa ego, o nwekwara ike ikesa ego n'ọgwụgwụ afọ, mana ọ dabere na ndekọ eziokwu. Akaụntụ SACCO, ụlọ akụ ma ọ bụ microfinance nwere ikike: ọ ka nchekwa, o nwekwara ike ịkwụ interest, mana tụnyere interest ahụ na inflation ma lelee ụgwọ ha na-ana. Anụ ụlọ: ha nwere ike ịbawanye uru, mana ha nwere ike ịnwụ site n'ụkọ mmiri ozuzo ma ọ bụ ọrịa. Ọka e chekwara: ọnụahịa ya nwere ike ịrị elu, mana o nwere ike imebi ma ọ bụ ọnụahịa ya ada. Ịzụta ihe ọrụ ugbo dị mkpa n'oge: ọ na-ezere ịrị elu ọnụahịa, mana ọ chọrọ ebe nchekwa dị mma.",
            "Gbasaa ego nchekwa gị n'ụzọ karịrị otu. Debe ego ihe mberede ị nwere ike iru ngwa ngwa. Lelee na SACCO, ụlọ akụ ma ọ bụ ụlọ ọrụ microfinance ọ bụla nwere ikike (na Kenya, SASRA na-edepụta SACCO nwere ikike ịnara ego nchekwa). Kpachara anya nke ukwuu maka atụmatụ ọ bụla na-ekwe nkwa uru dị elu na ngwa ngwa: ọ na-abụkarị aghụghọ. Nkuzi a na-akọwa otu ichekwa ego si arụ ọrụ; ọ bụghị ndụmọdụ itinye ego. Jụọ onye ndụmọdụ ị tụkwasịrị obi maka ọnọdụ gị."
          ],
          steps: ["Chọta ọnụ inflation nke ugbu a site n'ụlọ akụ etiti ma ọ bụ ọfịs ọnụọgụgụ.", "Depụta ebe ego nchekwa gị dị ugbu a: n'aka, otu, SACCO, ụlọ akụ, anụ ụlọ, ọka.", "Dee otu ihe egwu maka nke ọ bụla.", "Họrọ ngwakọta nke opekata mpe atọ, ya na ego ihe mberede ị nwere ike iru ngwa ngwa.", "Lelee na SACCO, ụlọ akụ ma ọ bụ ụlọ ọrụ microfinance ọ bụla nwere ikike.", "Jụ atụmatụ na-ekwe nkwa uru dị elu na ngwa ngwa."],
          words: [["Inflation", "ịrị elu ọnụahịa n'ozuzu, ya mere otu ego ahụ na-azụta obere ihe."], ["Interest", "ego ụlọ akụ ma ọ bụ SACCO na-akwụ gị maka idebe ego nchekwa gị, ma ọ bụ nke ị na-akwụ mgbe ị gbaziri ego."], ["Ego ihe mberede", "ego e chekwara maka nsogbu na-abịa na mberede, dị ka ọrịa ma ọ bụ owuwe ihe ubi dara, nke ị nwere ike iru ngwa ngwa."], ["VSLA", "village savings and loan association (otu nchekwa na mgbazinye ego nke obodo): otu na-echekwa ego ọnụ, na-agbazinye ndị otu ego, ma na-ekesa ego nchekwa na uru."]],
          slides: [
            { title: "Inflation na-eri ego n'aka", bullets: ["Ọnụahịa rịrị elu 10%: 10,000 na-azụta ihe dị ka 9,100 na-azụta ugbu a", "Chọta ọnụ ya: ụlọ akụ etiti ma ọ bụ ọfịs ọnụọgụgụ"] },
            { title: "Ụzọ ọ bụla isi chekwaa ego nwere ihe egwu", bullets: ["Ego n'aka: inflation na izu ohi", "Otu, SACCO, ụlọ akụ: ndekọ, ụgwọ, interest ma e tụnyere ya na inflation", "Anụ ụlọ na ọka: ọrịa, imebi, ọnụahịa"] },
            { title: "Chebe ego nchekwa gị", bullets: ["Gbasaa ya n'opekata mpe ụzọ atọ", "Debe ego ihe mberede ị nwere ike iru", "Lelee ikike (Kenya: ndepụta SASRA)", "Uru dị elu na ngwa ngwa? Ọ na-abụkarị aghụghọ"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ihe egwu ugbo gị nke peeji otu: ihe egwu ise kacha njọ ya na ihe ị ga-eme, ndekọ ọnụahịa izu anọ na trend ya, atụmatụ ire ahịa na nchekwa gị ya na storage break-even price, ajụjụ gị maka nkwekọrịta na maka inshọransị index, na ngwakọta ego nchekwa gị megide inflation.",
          youCanNow: "ichebe ego nchekwa gị pụọ n'inflation site na ngwakọta nwere ikike, gbasara agbasa, na ịchịkọta ngwa njikwa ihe egwu gị niile n'otu atụmatụ.",
          quickCheck: [
            { objective: "O6", q: "Ọnụahịa rịrị elu 10% n'afọ a. Gịnị mere 10,000 e debere n'ime tin n'ụlọ?", options: ["Ọ na-azụta obere ihe karịa afọ gara aga", "Ọ na-azụta ihe karịa nke mbụ", "O toro ruo 11,000", "Ọ dịghị ihe gbanwere"], answer: 0, why: "Otu ego ahụ na-azụta obere ihe mgbe ọnụahịa rịrị elu." },
            { objective: "O6", q: "Otu otu kwere nkwa na ọ ga-eme ka ego nchekwa gị baa okpukpu abụọ n'ime ọnwa atọ. Gịnị ka nke a nwere ike igosi?", options: ["Ezigbo SACCO", "Onyinye ụlọ akụ nkịtị", "Enyemaka gọọmentị", "Aghụghọ: uru dị elu na ngwa ngwa bụ ihe ịdọ aka na ntị"], answer: 3, why: "Nkwa uru dị elu na ngwa ngwa bụ ihe ịrịba ama aghụghọ a na-ahụkarị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Inyefe ihe egwu na ichebe ego gị",
        questions: [
          { objective: "O4", q: "Gịnị ka ị na-ahapụ mgbe i bịanyere aka na nkwekọrịta ọnụahịa a kara aka?", options: ["Ego ọzọ ma ọnụahịa ahịa rịa elu", "Ala gị", "Ihe ọkụkụ gị ndị ọzọ niile", "Ọ dịghị ihe ọ bụla"], answer: 0, why: "E kara ọnụahịa ahụ aka, ya mere ị gaghị enweta uru ma ahịa rịa elu." },
          { objective: "O4", q: "Kedu ụlọ ọrụ nyere Nigeria Commodity Exchange ikike?", options: ["Nigerian Meteorological Agency", "Securities and Exchange Commission", "NAFDAC", "Central Bank of Kenya"], answer: 1, why: "NCX kwuru na Securities and Exchange Commission nyere ya ikike." },
          { objective: "O5", q: "Gịnị ka KLIP na Kenya na-eji ekpebi mgbe a ga-akwụ ndị na-azụ anụ ụgwọ?", options: ["Dọkịta anụmanụ ileta igwe anụ ọ bụla", "Ọnụahịa ehi n'ahịa", "Foto satịlaịtị na-egosi na ahịhịa anụ na-ada", "Ọnụọgụ anụ e rere"], answer: 2, why: "KLIP dabere na index: nha ahịhịa anụ site na satịlaịtị na-akpali ịkwụ ụgwọ." },
          { objective: "O5", q: "Kedu ajụjụ na-elele basis risk?", options: ["Gịnị bụ agba akwụkwọ inshọransị ahụ?", "Onye nnọchi anya ahụ ọ dị ngwa?", "Onye ọzọ zụtara ya?", "Ebee ka a na-atụ index ahụ, ọ dịkwa nso n'ubi m?"], answer: 3, why: "Ka ebe a na-atụ ya dị anya, ka index ahụ nwere ike ịdị iche n'ubi gị." },
          { objective: "O6", q: "Kedu ụzọ bara uru isi chekwaa ego nchekwa nke ọma?", options: ["Gbasaa ya n'akaụntụ nwere ikike, otu na ụzọ ndị ọzọ, ya na ego ihe mberede", "Debe ego niile n'otu tin", "Tinye ihe niile n'atụmatụ na-ekwe nkwa uru kacha elu", "Gbazinye ya niile otu onye ị na-amaghị"], answer: 0, why: "Ịgbasa ego nchekwa n'ebe e lelere na-ebelata mmebi site na mfu ọ bụla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Njikwa Ihe Egwu n'Ọrụ Ugbo: Ọnụahịa, Ihu Igwe na Inshọransị",
    questions: [
      { objective: "O1", q: "Ọrịa n'ezinụlọ nke na-akwụsị ọrụ ugbo bụ kedu ụdị ihe egwu?", options: ["Ihe egwu ahịa", "Ihe egwu iwu", "Ihe egwu ndị mmadụ", "Ihe egwu mmepụta"], answer: 2, why: "Ihe egwu metụtara ndị na-arụ ugbo ahụ bụ ihe egwu ndị mmadụ." },
      { objective: "O1", q: "Ohere 2 na mmebi 3 na-enye akara ihe egwu nke:", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Ikpebi ịghara ịkọ tomato n'ọnwa mmiri kacha ezo bụ kedu ụzọ isi zaghachi?", options: ["Ikesa ya", "Ịnabata ya", "Ileghara ya anya", "Izere ya"], answer: 3, why: "Ị na-ezere ihe egwu ahụ site n'ịghara ịnara ya." },
      { objective: "O1", q: "Olee mgbe ị kwesịrị ilele risk register gị ọzọ?", options: ["Ọ dịghị mgbe", "Tupu oge ọkụkụ ọ bụla", "Naanị mgbe ọdachi mere", "Kwa afọ iri"], answer: 1, why: "Ihe egwu na-agbanwe, ya mere lelee ya tupu mkpebi oge ọkụkụ ọ bụla." },
      { objective: "O2", q: "Ọnụahịa ọtụtụ isi nri na-adịkarị ala kacha:", options: ["Obere oge tupu ịkọ ihe", "N'ọnwa agụụ", "Ozugbo owuwe ihe ubi gachara", "Ha anaghị agbanwe mgbe ọ bụla"], answer: 2, why: "N'oge owuwe ihe ubi, ọtụtụ ndị ọrụ ugbo na-ere otu mgbe, nke na-eme ka ọnụahịa daa." },
      { objective: "O2", q: "Na Naịjirịa, kedu ụlọ ọrụ na-ebipụta akụkọ ọnụahịa nri kwa ọnwa site na steeti ruo steeti?", options: ["National Bureau of Statistics", "Nigerian Meteorological Agency", "NAFDAC", "Securities and Exchange Commission"], answer: 0, why: "NBS na-ebipụta Selected Food Prices Watch kwa ọnwa." },
      { objective: "O2", q: "Gịnị ka mgbanwe ọnụahịa koko Cote d'Ivoire site na 2,800 ruo 1,200 CFA francs kwa kg na-egosi?", options: ["Ọnụahịa a kara aka anaghị agbanwe mgbe ọ bụla", "Koko enweghị ihe egwu", "Naanị ndị ahịa na-eche ihe egwu ọnụahịa ihu", "Ọbụna ọnụahịa gọọmentị kara aka nwere ike ịgbanwe nke ukwuu n'etiti oge abụọ"], answer: 3, why: "E belatara ọnụahịa n'ugbo mgbe ọnụahịa koko n'ụwa dara." },
      { objective: "O2", q: "Ụzọ kacha mma isi kọwaa trend ọnụahịa bụ:", options: ["Nkwa maka ọnụahịa ọnwa ọzọ", "Ụzọ ọnụahịa na-aga n'ozuzu n'ime izu ma ọ bụ ọnwa", "Onyinye otu onye na-azụ", "Ọnụahịa gọọmentị"], answer: 1, why: "Trend bụ ihe nduzi site n'ọnụahịa gara aga, ọ bụghị nkwa." },
      { objective: "O3", q: "Diversification pụtara:", options: ["Ịkọ naanị ihe ọkụkụ kacha mma gị", "Ire ihe niile n'oge owuwe ihe ubi", "Ịgbasa ọrụ ugbo na ego ị na-enweta n'ọrụ dị iche iche", "Ịgbazitekwu ego"], answer: 2, why: "Ọrụ dị iche iche pụtara na otu ọdịda agaghị emebi gị." },
      { objective: "O3", q: "Ọnụahịa owuwe ihe ubi 4,000 kwa akpa, akpa 10, ụgwọ nchekwa 2,000. Gịnị bụ storage break-even price?", options: ["4,200", "4,000", "2,000", "6,000"], answer: 0, why: "(4,000 x 10 + 2,000) / 10 = 4,200 kwa akpa." },
      { objective: "O3", q: "Tupu i chekwaa ọka iji ree ya e mesịa, ị ga-ebu ụzọ:", options: ["Chekwaa ya mgbe ọ ka dị mmiri ka ịdị arọ ya ghara ibelata", "Gwakọta ya na ọka afọ gara aga", "Ree ihe ga-ezu ego ị chọrọ n'oge owuwe ihe ubi ma chekwaa naanị ọka dị ọcha, kpọrọ nkụ n'enweghị nsogbu", "Chekwaa ya niile, ọbụna ma ọ bụrụ na ị chọrọ ego ugbu a"], answer: 2, why: "Ikpuchi ego ị chọrọ na ichekwa naanị ọka dị ọcha, kpọrọ nkụ na-ezere ire ihe n'ike na imebi ya." },
      { objective: "O4", q: "Nkwekọrịta forward bụ:", options: ["Ego e gbaziri n'ụlọ akụ", "Nkwekọrịta ugbu a ire ọnụọgụ a kara aka n'ọnụahịa a kara aka e mesịa", "Akwụkwọ inshọransị", "Akaụntụ nchekwa ego"], answer: 1, why: "Ọ na-akara ọnụọgụ na ọnụahịa aka taa maka ire e mesịa." },
      { objective: "O4", q: "Kedu okwu nkwekọrịta ọnụahịa a kara aka ga-ekpuchirịrị?", options: ["Ihe ọkụkụ onye na-azụ kacha hụ n'anya", "Naanị agba akpa ndị ahụ", "Ọnụọgụ ezinụlọ gị", "Ihe ga-eme ma ọ bụrụ na owuwe ihe ubi dara ma ọ bụ onye na-azụ abịaghị iburu ya"], answer: 3, why: "Ọnọdụ ndị a na-ekpebi onye ga-ebu mfu mgbe ihe gara njọ." },
      { objective: "O4", q: "Gịnị mere hedging site na futures abụghị maka ndị mbido?", options: ["Ọ chọrọ broker, ego nkwụnye margin na nka, o nwekwara ike ime ka ị tụfuo ego", "Ọ bụ ihe megidere iwu n'Afrịka", "Ọ na-arụ ọrụ naanị maka koko", "Ọ na-ewete ego mgbe niile"], answer: 0, why: "Ọnọdụ futures nwere ike ime ka ị tụfuo ego ma chọọ ego nkwụnye n'oge na-adịghị anya." },
      { objective: "O4", q: "Olee otu ọtụtụ obere ndị ọrụ ugbo si eru commodity exchange dị ka GCX?", options: ["Site n'ịzụ futures n'ekwentị ha", "Site n'otu mmekọ, onye na-achịkọta ihe ubi ma ọ bụ ụlọ nchekwa e nyere asambodo", "Site n'ileta exchange kwa ụbọchị", "Ha apụghị iji ya ma ọlị"], answer: 1, why: "Otu na ụlọ nchekwa na-ebuga ihe ubi ndị ọrụ ugbo n'exchange." },
      { objective: "O5", q: "Inshọransị index na-akwụ ụgwọ mgbe:", options: ["I kọrọ mfu", "Onye nnọchi anya letara ugbo gị", "Index a tụrụ gafere trigger", "A kwụrụ premium"], answer: 2, why: "Ịkwụ ụgwọ na-eso index ahụ, ọ bụghị nleta ubi." },
      { objective: "O5", q: "Onye na-akwụ premium na KLIP nke Kenya maka ndị na-azụ anụ na-enweghị ike e debanyere aha?", options: ["Ndị na-azụ anụ n'onwe ha", "Onye na-azụ anụ ụlọ", "Ụlọ akụ", "Gọọmentị"], answer: 3, why: "KLIP bụ mmemme gọọmentị na-azụtara ha nkpuchi ahụ." },
      { objective: "O5", q: "Tupu ị zụta inshọransị index, ị kwesịrị ilele na ụlọ ọrụ inshọransị ahụ nwere ikike. Na Naịjirịa, onye na-achịkwa ya bụ:", options: ["NAICOM", "NAFDAC", "NiMet", "NBS"], answer: 0, why: "NAICOM, National Insurance Commission, na-achịkwa ụlọ ọrụ inshọransị na Naịjirịa." },
      { objective: "O6", q: "Ebee ka ị ga-achọta ọnụ inflation nke ugbu a?", options: ["Onye ahịa n'ahịa", "Ụlọ akụ etiti gị ma ọ bụ ọfịs ọnụọgụgụ mba gị", "Ozi na social media", "Onye nnọchi anya inshọransị"], answer: 1, why: "Ụlọ akụ etiti na ọfịs ọnụọgụgụ na-ebipụta ọnụ inflation gọọmentị." },
      { objective: "O6", q: "Gịnị bụ ihe egwu nke ichekwa ego n'anụ ụlọ?", options: ["Anụ ụlọ anaghị agbanwe uru mgbe ọ bụla", "Ụlọ akụ agaghị anara ha", "Ha nwere ike ịnwụ site n'ụkọ mmiri ozuzo ma ọ bụ ọrịa", "Ọ dịghị ihe egwu"], answer: 2, why: "Ụkọ mmiri ozuzo na ọrịa nwere ike ikpochapụ ego nchekwa e debere n'anụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Risk register", objective: "O1", notYet: "Ihe egwu na-erughị ise, ma ọ bụ e nyeghị ihe egwu akara ma ọ bụ ha enweghị ihe a ga-eme.", meets: "Opekata mpe ihe egwu asatọ na-ekpuchi ụdị ise ahụ niile, e nyere akara ma hazie n'usoro, ya na ihe a ga-eme maka nke ọ bụla n'ime ise kacha elu.", exceeds: "Ihe a ga-eme nwere ụbọchị na ego ọ ga-efu, atụmatụ ahụ na-ekwukwa mgbe a ga-elele register ahụ ọzọ." },
      { name: "Ndekọ ọnụahịa na trend", objective: "O2", notYet: "Na-erughị izu anọ, naanị otu isi iyi, ma ọ bụ nha na ọkwa gwakọtara agwakọta.", meets: "Izu anọ site n'opekata mpe isi iyi abụọ, otu ngwaahịa, otu ọkwa na otu nha, ya na trend a kọwara.", exceeds: "Ọ gụnyere ọrụ gọọmentị na otu ọnwa ahụ n'afọ gara aga, ma na-ekwu ihe trend ahụ pụtara maka ire ahịa." },
      { name: "Atụmatụ ire ahịa na nchekwa", objective: "O3", notYet: "Enweghị storage break-even price, ma ọ bụ e leghaara ego a chọrọ n'oge owuwe ihe ubi anya.", meets: "Storage break-even price ziri ezi, ego a chọrọ n'oge owuwe ihe ubi kpuchiri, na ire n'akụkụ e zubere.", exceeds: "Ọ tinyekwara ọrụ nke abụọ ma ọ bụ ahịa nke abụọ iji gbasaa ihe egwu, na nzọụkwụ nchekwa dị mma." },
      { name: "Ajụjụ nkwekọrịta na inshọransị", objective: "O4", notYet: "Okwu nkwekọrịta na-erughị ise, ma ọ bụ enweghị ajụjụ inshọransị.", meets: "Opekata mpe okwu nkwekọrịta asatọ ya na otu uru na otu ihe egwu, na ihe hedging pụtara n'otu ahịrịokwu.", exceeds: "Ọ tụnyere ọnụahịa a kara aka na break-even price na ndekọ ọnụahịa." },
      { name: "Nlele inshọransị index", objective: "O5", notYet: "Index, trigger, premium ma ọ bụ basis risk adịghị.", meets: "E zara index, trigger, ego a ga-akwụ, premium, ụbọchị ikpeazụ, basis risk na nlele ikike niile.", exceeds: "Azịza ndị ahụ si n'ezi onyinye dị nso n'ugbo ahụ, ya na aha onye na-achịkwa ya." },
      { name: "Ego nchekwa megide inflation", objective: "O6", notYet: "Naanị otu ụzọ isi chekwaa ego, ma ọ bụ a kpọghị ihe egwu ọ bụla.", meets: "Opekata mpe ụzọ atọ e tụnyere, nke ọ bụla ya na ihe egwu, e dere ọnụ inflation ma lelee ikike.", exceeds: "Ọ gụnyere ego ole a ga-edebe maka ihe mberede na ụbọchị a ga-elele ngwakọta ahụ ọzọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ ihe egwu ugbo",
      "Ndị na-amụ ihe ka na-edebe ndekọ ọnụahịa kwa izu ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha rere n'akụkụ ma ọ bụ chekwaa n'enweghị nsogbu kama ire ihe niile n'oge owuwe ihe ubi",
      "Ndị na-amụ ihe kwuru na ha gụrụ nkwekọrịta ma ọ bụ onyinye inshọransị okwu n'okwu, ma ọ bụ jụ onye na-agbazinye ego, ụlọ ọrụ inshọransị ma ọ bụ atụmatụ ahịa na-enweghị ikike",
      "Otu mmekọ ndị mmekọ na-akọ na ndị otu ole na ole ka a manyere ire anụ ma ọ bụ ala mgbe oge ọjọọ gachara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, na ekwentị nkịtị maka ọnụahịa site na SMS, oku ma ọ bụ redio",
      "Igwe mgbakọ dị n'ekwentị",
      "Ezi nkwekọrịta onye na-azụ ma ọ bụ nke ọmụmaatụ na akwụkwọ ozi inshọransị index si n'obodo ahụ, ma ọ bụrụ na ha dị",
      "Ihe dị ka nkeji 80 n'ozuzu, n'oge nkenke, gbakwunyere izu anọ nke idekọ ọnụahịa maka ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ nnọkọ extension: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; buru ụzọ mee risk register n'obere otu.",
      "Gwa ndị na-amụ ihe ka ha malite ndekọ ọnụahịa mgbe Nkuzi 2 gachara ka ha nwee izu anọ maka ọrụ ikpeazụ; chịkọtanụ ọnụahịa dị ka otu ma kesaa ha.",
      "Kpọọ ụlọ ọrụ inshọransị nwere ikike, otu mmekọ ma ọ bụ onye na-elekọta ụlọ nchekwa ka ọ kọwaa ezi ngwaahịa, mana akwadola ụlọ ọrụ ọ bụla; hapụ ndị na-amụ ihe ka ha jụọ ajụjụ nkuzi ahụ.",
      "Akwadola ịzụ ahịa na exchange ọ bụla ma ọ bụ ịzụta ngwaahịa ego ọ bụla; kwuo n'ụzọ doro anya na ihe ọmụmụ a na-akọwa otu ihe si arụ ọrụ na ihe egwu dị na ha.",
      "Jiri rubric tụọ akara atụmatụ ihe egwu ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
