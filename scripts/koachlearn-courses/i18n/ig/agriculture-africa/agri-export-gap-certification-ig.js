"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-export-gap-certification.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const GGAP_IFA = { name: "GLOBALG.A.P.: Integrated Farm Assurance (IFA) maka mkpụrụ osisi na akwụkwọ nri (isiokwu, nhọrọ otu ndị ọrụ ugbo, akụkụ ego, nzọụkwụ ruo asambodo)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P.: Supply Chain Portal (lelee asambodo site na nọmba GLOBALG.A.P.)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "European Commission: EU Pesticides Database (oke kachasị elu nke ọgwụ fọdụrụ n'ihe oriri, dị ka nri na ọgwụ si dị)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/WHO): ụkpụrụ nri mba ụwa, gụnyere oke ọgwụ fọdụrụ n'ihe oriri", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (data KNBS, akụkọ AFA): ego Kenya na-enweta n'ire akwụkwọ nri na mba ọzọ dara n'ihi iwu ọgwụ EU; njide MRL si na 25 (2023) rịgoro 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: ndepụta ọgwụ ahụhụ e debara aha n'Afrịka", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Kenya Agriculture and Food Authority (AFA), Horticultural Crops Directorate: ikike ire na mba ọzọ na ndebanye aha (lelee iwu ugbu a)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Kenya): ọrụ ahụike osisi na asambodo ire na mba ọzọ", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Nigerian Export Promotion Council: ndebanye aha ndị na-ere na mba ọzọ n'ịntanetị", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Ghana Export Promotion Authority (GEPA): debanye aha dị ka onye na-ere na mba ọzọ", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification-ig",
  lang: "ig",
  translationOf: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Ire n'Ụlọ Ahịa Ukwu, nye Ndị Na-emezi Nri na Ndị Na-azụ Maka Mba Ọzọ: Ụkpụrụ na Asambodo",
  skills: "Ịgụ ihe onye na-azụ chọrọ, Iji Good Agricultural Practices, Idebe ndekọ nchọpụta, Ịtụle asambodo, Igbo iwu oke ọgwụ na iwu ire na mba ọzọ, Ide onyinye inye ngwaahịa",
  outcome: "ịlele ma ugbo gị ma ọ bụ otu gị ọ dịla njikere inye ụlọ ahịa ukwu (supermarket), onye na-emezi nri ma ọ bụ onye na-azụ maka mba ọzọ ngwaahịa, imechi oghere ndị bụ isi n'omume, ndekọ na asambodo, na ide onyinye inye ngwaahịa ị ga-eguzosi ike na ya.",
  about: [
    "Ụlọ ahịa ukwu (supermarket), ndị na-emezi nri (processor) na ndị na-azụ maka mba ọzọ nwere ike ịzụta ihe karịrị ahịa obodo nke ukwuu, ha na-akwụkwa ụgwọ karịa maka ogo na-adịgide adịgide. Mana ha na-arịọ ihe ọtụtụ obere ugbo na-emebeghị: ọtụtụ ngwaahịa mgbe niile, otu ogo oge ọ bụla, ndekọ na-egosi ebe igbe ọ bụla si, nchekwa nri, na mgbe ụfọdụ asambodo dị ka GLOBALG.A.P. Ihe ọmụmụ a bụ maka ndị ọrụ ugbo azụmahịa na-eto eto, otu ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ọrụ extension na Kenya, Naịjirịa, Ghana, Senegal na n'Afrịka niile.",
    "Ị ga-amụta ihe ndị na-azụ ukwu chọrọ, Good Agricultural Practices (omume ugbo ọma) dị n'azụ ya, otu esi edebe ndekọ na-egosi ebe ngwaahịa si n'ubi, ihe asambodo na-efu na ihe ọ na-ewete, ihe mere e ji ajụ ngwaahịa e zigara mba ọzọ n'ihi ọgwụ fọdụrụ na ya, ụlọ ọrụ mba ndị na-achịkwa ire na mba ọzọ, na otu esi ezute onye na-azụ, kpaa nkwekọrịta inye ngwaahịa ma tụlee atụmatụ outgrower.",
    "Ọ na-ewuli elu n'ihe ọmụmụ \"Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa\", nke na-akụzi ire dị ka otu na ịgụ nkwekọrịta. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". Iwu, ụgwọ na oke na-agbanwe, ya mere nkuzi ọ bụla na-agwa gị ebe ị ga-elele. Ọnụ ego niile bụ naanị ọmụmaatụ."
  ],
  finalTask: "Mee ndepụta njikere maka onye na-azụ (buyer-readiness checklist) maka ugbo gị ma ọ bụ otu gị, maka otu ihe ọkụkụ na otu ụdị onye na-azụ (ụlọ ahịa ukwu, onye na-emezi nri ma ọ bụ onye na-ere na mba ọzọ), ka ị kaa akara ihe ị na-emezu ugbu a na ihe ị ga-edozi, wee dee onyinye inye ngwaahịa nke otu peeji nye onye na-azụ ahụ: ihe ọkụkụ na ogo ya, ole na oge inye ya, otu ị si edebe ngwaahịa ka ọ dị nchebe ma nwee ike ịchọpụta ebe o si, asambodo ọ bụla, otu e si ahazi ọnụ ahịa, na usoro ị chọrọ na nkwekọrịta ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo azụmahịa na-eto eto, otu ndị ọrụ ugbo na cooperative, ndị njikwa ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ọrụ extension na Kenya, Naịjirịa, Ghana, West Africa na-asụ French na n'Afrịka niile, ndị na-ere ihe ọkụkụ ubi (French beans, ube oyibo, mango, painapụl, tomato) ma ọ bụ nri bụ isi (akpụ, ọka, ọka mmịrị, osikapa) nye ndị na-azụ ukwu.",
    startingPoint: "Ha nwere ike ịkụ ezigbo ihe ọkụkụ ma ree ya n'ahịa obodo ma ọ bụ site n'otu. Ụfọdụ na-edebe ndekọ ugbo dị mfe. Mmadụ ole na ole maara ihe ụlọ ahịa ukwu ma ọ bụ onye na-ere na mba ọzọ na-enyocha, otu asambodo si arụ ọrụ, ma ọ bụ ihe oke ọgwụ fọdụrụ (residue limit) bụ.",
    gap: "Ndị na-azụ ukwu na-ajụ ndị ọrụ ugbo na-enweghị ike igosi ọtụtụ ngwaahịa na ogo na-adịgide adịgide, ndekọ e nwere ike ịchọpụta na iji ọgwụ ahụhụ n'ụzọ dị nchebe. Onye na-achịkwa ya na Kenya n'onwe ya kwuru na ego e nwetara n'ire akwụkwọ nri na mba ọzọ dara nke ukwuu, tumadi n'ihi njide EU maka ọgwụ fọdụrụ n'ime ya. Ndị ọrụ ugbo kwesịrị ịhụ oghere ha, dozie omume na ndekọ, tụlee asambodo ma nye onyinye ha nwere ike imezu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-asụ Bekee dị ka asụsụ nke abụọ",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone; akwụkwọ ndekọ e dere n'aka",
      "Ego: asambodo na nnwale na-efu ego; nhọrọ otu dị mkpa maka obere ugbo",
      "Iwu: ikike ire na mba ọzọ, oke ọgwụ fọdụrụ na iwu asambodo na-agbanwe ma dị iche site na mba na ahịa; ndị na-amụ ihe na-elele isi iyi gọọmentị",
      "Nchekwa: naanị ọgwụ ahụhụ e debara aha, e ji dị ka akara (label) ya si kwuo, ya na ihe nchebe; enweghị ọnụọgụ dose n'ihe ọmụmụ a"
    ],
    prerequisites: "Ọ ga-enyere aka: \"Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa\", na Farm Records and Business Basics (\"Azụmahịa Ugbo na Nlekọta Ugbo\"). Ịgụ akwụkwọ na ịgbakọ ọnụ dị mfe."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ihe ụlọ ahịa ukwu, onye na-emezi nri ma ọ bụ onye na-azụ maka mba ọzọ chọrọ", action: "idepụta ihe onye na-azụ ahụ na-arịọ ma tụnyere ya na ihe ugbo gị ma ọ bụ otu gị na-enye ugbu a", standard: "gụnyere ole, ịdịgide adịgide, ogo, nchọpụta na nchekwa nri, ma kaa akara oghere ọ bụla" },
    { id: "O2", condition: "Maka otu ihe ọkụkụ n'ugbo gị", action: "ide Good Agricultural Practices ị ga-agbaso", standard: "gụnyere ọgwụ ahụhụ e debara aha e ji dị ka akara ya si kwuo, ihe nchebe, oge nchere tupu owuwe ihe ubi dị n'akara ahụ, mmiri dị ọcha, ịdị ọcha n'oge owuwe na nchekwa ndị ọrụ" },
    { id: "O3", condition: "Mgbe e nyere gị asambodo dị ka GLOBALG.A.P.", action: "ịtụnyere ihe ọ na-efu na uru ọ na-ewete maka ugbo gị ma ọ bụ otu gị ma kpọọ aha ụzọ ị ga-esi", standard: "na-akpọ aha akụkụ ego atọ ahụ, nzọụkwụ ruo nnyocha (audit) na ma nhọrọ otu ọ dabara" },
    { id: "O4", condition: "Maka otu oge ihe ọkụkụ nke otu ihe ọkụkụ", action: "ịhazi ndekọ nchọpụta na-ejikọ lot ọ bụla na ubi ya, ihe e tinyere na ya na ụbọchị owuwe ya", standard: "nke mere na e nwere ike ịchọpụta igbe ọ bụla ruo n'ubi ahụ na ọgwụ ọ bụla a gbara n'ime nkeji ole na ole" },
    { id: "O5", condition: "Mgbe e nyere gị ahịa mba ọzọ ị chọrọ ire na ya", action: "ịlele oke ọgwụ fọdụrụ na ụlọ ọrụ mba na-ahụ maka ire na mba ọzọ metụtara gị", standard: "na-akpọ aha ebe a na-ahụ oke ndị ahụ (dịka ọmụmaatụ EU Pesticides Database ma ọ bụ Codex) na ụlọ ọrụ ire na mba ọzọ na ahụike osisi nke mba gị" },
    { id: "O6", condition: "Mgbe e nyere gị nzukọ ya na onye na-azụ ma ọ bụ onyinye atụmatụ outgrower", action: "ide onyinye inye ngwaahịa na usoro nkwekọrịta ị chọrọ", standard: "na-ekwu ogo, ole, oge, otu e si ahazi ọnụ ahịa, iwu ịjụ ngwaahịa, usoro ịkwụ ụgwọ na ihe ga-eme ma otu n'ime unu emezughị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe ndị na-azụ ukwu chọrọ, na ime ka ugbo gị dị njikere",
      lessons: [
        {
          title: "Ihe ụlọ ahịa ukwu, ndị na-emezi nri na ndị na-ere na mba ọzọ chọrọ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta ihe onye na-azụ ukwu chọrọ ma kaa akara ebe ugbo gị na-erughị.",
          text: [
            "Ndị na-azụ ukwu na-ere nye ndị ahịa na-atụ anya otu ngwaahịa ahụ, nke dị nchebe ma dị n'ebe a na-edowe ya, izu ọ bụla. Ya mere ha chọrọ ihe ise n'aka gị: ole (nke zuru imezu ihe ha nyere iwu), ịdịgide adịgide (inye izu ka izu, ọ bụghị naanị n'oge owuwe), ogo (nha, agba, ịcha na ntụpọ dị ka nkọwa ha si dị), nchọpụta (ha nwere ike ịchọta ugbo na ubi igbe si) na nchekwa nri (enweghị ọgwụ fọdụrụ na-emerụ ahụ, nje ma ọ bụ unyi).",
            "Onye na-azụ ọ bụla dị iche. Ụlọ ahịa ukwu na Nairobi ma ọ bụ Accra nwere ike ịchọ tomato nwere otu nha na n'otu ụdị igbe, a na-ebuga ugboro abụọ n'izu. Onye na-emezi nri na Naịjirịa na-azụ akpụ maka starch ma ọ bụ tomato maka paste chọrọ ọtụtụ ngwaahịa n'otu ogo, ma eleghị anya ọ dịghị echegbu onwe ya maka ọdịdị. Onye na-ezi French beans site na Kenya ma ọ bụ mango site na Senegal gaa Europe ga-agbaso iwu mba na-anabata ya, ọ na-arịọkarịkwa asambodo.",
            "Rịọ onye na-azụ ka o dee nkọwa ihe ọ chọrọ (specification) n'akwụkwọ. Wee tụnyere ya, n'otu n'otu, na ihe ị na-enye ugbu a. Oghere ị chọtara bụ atụmatụ ọrụ gị. Ọtụtụ obere ugbo na-emechi oghere ole na ịdịgide adịgide site n'ịrụkọ ọrụ dị ka otu na ịkụ ihe n'ụbọchị dị iche iche."
          ],
          steps: ["Rịọ otu onye na-azụ ka o dee nkọwa ihe ọ chọrọ na ole ọ na-azụ.", "Depụta ihe ọ chọrọ n'okpuru ole, ịdịgide adịgide, ogo, nchọpụta na nchekwa nri.", "N'akụkụ nke ọ bụla, dee ihe ugbo gị ma ọ bụ otu gị na-enye ugbu a.", "Kaa akara oghere ọ bụla na otu i nwere ike isi mechie ya (dịka ọmụmaatụ dị ka otu ma ọ bụ site n'ịkụ ihe n'ụbọchị dị iche iche)."],
          words: [["Nkọwa ihe a chọrọ (specification)", "nkọwa e dere ede nke ngwaahịa onye na-azụ chọrọ: nha, agba, ịcha, ngwugwu na ntụpọ a na-anabata."], ["Nchọpụta (traceability)", "inwe ike iso ngwaahịa laghachi n'ugbo, ubi na ihe e tinyere na ya ebe o si."], ["Ịdịgide adịgide (consistency)", "inye otu ogo na otu ole, n'oge, ugboro ugboro."]],
          slides: [
            { title: "Ihe ise ndị na-azụ ukwu chọrọ", bullets: ["Ole na ịdịgide adịgide", "Ogo dị ka nkọwa ha si dị", "Nchọpụta na nchekwa nri"] },
            { title: "Ndị na-azụ dị iche", bullets: ["Ụlọ ahịa ukwu: otu nha, otu igbe, ugboro abụọ n'izu", "Onye na-emezi nri: ọtụtụ ngwaahịa, otu ogo", "Onye na-ere na mba ọzọ: iwu mba ahụ, ọ na-arịọkarị asambodo"] },
            { title: "Chọta oghere gị", bullets: ["Nweta nkọwa ihe ọ chọrọ n'akwụkwọ", "Tụnyere ya n'otu n'otu na ihe ị na-enye", "Oghere = atụmatụ ọrụ gị; otu nwere ike imechi oghere ole"] }
          ],
          tryIt: "Họrọ otu onye na-azụ ukwu dị nso gị (ụlọ ahịa ukwu, onye na-emezi nri ma ọ bụ onye na-ere na mba ọzọ). Dee ihe ọ chọrọ n'okpuru isiokwu ise ahụ, ihe ị na-enye ugbu a n'akụkụ nke ọ bụla, ma kaa akara oghere ndị ahụ. Nke a bụ mmalite ndepụta njikere gị maka onye na-azụ.",
          youCanNow: "idepụta ihe onye na-azụ ukwu chọrọ ma kaa akara ebe ugbo gị ma ọ bụ otu gị na-erughị.",
          quickCheck: [
            { objective: "O1", q: "Ụlọ ahịa ukwu chọrọ tomato izu ọ bụla n'afọ niile. Ị na-awụta ihe naanị otu ugboro n'oge ihe ọkụkụ. Kedu ihe ị na-erughị?", options: ["Ogo", "Ịdịgide adịgide n'inye ngwaahịa", "Nchọpụta", "Nchekwa nri"], answer: 1, why: "Inye izu ọ bụla, ọ bụghị naanị n'oge owuwe, bụ ịdịgide adịgide." },
            { objective: "O1", q: "Kedu ụzọ kacha mma isi mara kpọmkwem ihe onye na-azụ chọrọ?", options: ["Chepụta ya site n'ihe dị n'ụlọ ahịa ha", "Jụọ onye agbata obi rere ha ihe otu mgbe", "Zigara ha ngwaahịa ka ị hụ ma ha ga-anabata ya", "Rịọ ka ha dee nkọwa ihe ha chọrọ n'akwụkwọ"], answer: 3, why: "Nkọwa e dere ede na-egosi kpọmkwem nha, ogo na ngwugwu onye na-azụ ga-anabata." }
          ]
        },
        {
          title: "Good Agricultural Practices n'ugbo gị",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dee Good Agricultural Practices ị ga-agbaso maka otu ihe ọkụkụ.",
          text: [
            "Good Agricultural Practices (GAP) bụ omume ugbo na-eme ka ngwaahịa dị nchebe, na-echebe ndị ọrụ na gburugburu ebe obibi, ma na-eme ka ogo dịgide. Atụmatụ asambodo na ndị na-azụ na-enyocha ha. Ị nwere ike ịmalite ọtụtụ n'ime ha n'obere ego.",
            "Ọgwụ ahụhụ: jiri naanị ọgwụ ụlọ ọrụ mba gị debara aha (dịka ọmụmaatụ Pest Control Products Board nke Kenya, NAFDAC nke Naịjirịa ma ọ bụ EPA nke Ghana), lelee ndepụta ha ugbu a, ma jiri ha kpọmkwem dị ka akara (label) ahụ si kwuo. Yiri ihe nchebe akara ahụ na-arịọ, debe kemịkal n'ebe a kpọchiri akpọchi, n'ebe dị anya na nri, ma sọpụrụ oge nchere tupu owuwe dị n'akara ahụ (pre-harvest interval), ya bụ oge ichere n'etiti ọgwụ ikpeazụ a gbara na owuwe. Ịgba ọgwụ mgbe owuwe dị nso nke ukwuu bụ isi ihe na-eme ka a jụ ngwaahịa n'ihi ọgwụ fọdụrụ. Jiri integrated pest management ka ị ghara ịgba ọgwụ ọtụtụ.",
            "Ọzọkwa: mmiri dị ọcha maka ịgba ọgwụ, ịsa na ịgba mmiri n'ubi; igbe owuwe dị ọcha nke a na-edoghị n'ala; mposi na ebe ịsa aka maka ndị ọrụ; enweghị anụmanụ ma ọ bụ nsị anụmanụ n'akụkụ ngwaahịa obere oge tupu owuwe; enyemaka mbụ na ọzụzụ maka ndị ọrụ; na iwepụ akpa na karama efu n'ụzọ dị nchebe dị ka akara ahụ ma ọ bụ ụlọ ọrụ mba gị si kwuo. Dee ihe ndị a dị ka iwu GAP nke ugbo gị."
          ],
          steps: ["Lelee na ọgwụ ahụhụ ọ bụla ị na-eji dị na ndepụta ụlọ ọrụ mba gị.", "Dee ihe nchebe na oge nchere tupu owuwe dị n'akara ahụ n'akụkụ ọgwụ ọ bụla.", "Hazie ebe ịsa aka, mposi na igbe dị ọcha maka owuwe.", "Dee iwu GAP gị ma zụọ onye ọrụ ọ bụla na ha."],
          words: [["Good Agricultural Practices (GAP)", "omume ugbo na-eme ka ngwaahịa dị nchebe ma na-echebe ndị ọrụ na gburugburu ebe obibi."], ["Oge nchere tupu owuwe (pre-harvest interval)", "oge ichere dị n'akara ọgwụ n'etiti ọgwụ ikpeazụ a gbara na owuwe."], ["Ọgwụ ahụhụ e debara aha", "ọgwụ ụlọ ọrụ mba gị kwadoro maka ihe ọkụkụ ahụ na ọrụ ahụ."], ["Integrated pest management", "ịchịkwa ahụhụ site n'ọtụtụ ụzọ ka ị gbaa ọgwụ naanị mgbe ọ dị mkpa."]],
          slides: [
            { title: "Ihe GAP na-ekpuchi", bullets: ["Ngwaahịa dị nchebe", "Nchekwa na ọdịmma ndị ọrụ", "Gburugburu ebe obibi na ogo na-adịgide"] },
            { title: "Iji ọgwụ ahụhụ n'ụzọ ziri ezi", bullets: ["Naanị ọgwụ e debara aha: lelee ndepụta PCPB, NAFDAC, Ghana EPA", "Kpọmkwem dị ka akara ya si kwuo, ya na ihe nchebe", "Sọpụrụ oge nchere tupu owuwe dị n'akara ahụ"] },
            { title: "Owuwe dị ọcha", bullets: ["Mmiri dị ọcha; igbe adịghị n'ala", "Mposi na ebe ịsa aka maka ndị ọrụ", "Enweghị anụmanụ ma ọ bụ nsị n'akụkụ ngwaahịa n'oge owuwe"] },
            { title: "Dee ya ma zụọ ndị ọrụ", bullets: ["Iwu GAP nke ugbo gị n'otu peeji", "Zụọ onye ọrụ ọ bụla", "Debe kemịkal n'ebe a kpọchiri, anya na nri"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Dee iwu GAP nke ugbo gị maka otu ihe ọkụkụ n'otu peeji: ọgwụ ahụhụ e debara aha ị na-eji, ya na ihe nchebe na oge nchere tupu owuwe dị n'akara ha, otu ị si edebe mmiri na owuwe ka ha dị ọcha, na nchekwa ndị ọrụ. Tinye oghere ndị ahụ na ndepụta njikere gị.",
          youCanNow: "ide iwu Good Agricultural Practices maka otu ihe ọkụkụ, gụnyere iji ọgwụ ahụhụ e debara aha n'ụzọ dị nchebe.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka ị ga-ahụ oge ole ị ga-echere n'etiti ọgwụ ikpeazụ na owuwe?", options: ["N'akara ọgwụ ahụ (oge nchere tupu owuwe)", "N'aka onye na-anya ụgbọ ala onye na-azụ", "N'ihe onye agbata obi chetara", "Ọ dịghị mkpa maka ire na mba ọzọ"], answer: 0, why: "Akara ahụ na-enye oge nchere tupu owuwe; ịsọpụrụ ya na-eme ka ọgwụ fọdụrụ ghara ịgafe oke." },
            { objective: "O2", q: "Onye ahịa na-enye gị ọgwụ ahụhụ dị ọnụ ala na-enweghị nọmba ndebanye aha. Gịnị ka ị ga-eme?", options: ["Zụta ya ma ọ bụrụ na ọ dị ọnụ ala", "Gwakọta ya na nke e debara aha", "Ejila ya; jiri naanị ọgwụ dị na ndepụta mba gị", "Jiri ọkara ya"], answer: 2, why: "Ọgwụ a na-edebanyeghị aha nwere ike ịbụ adịgboroja ma ọ bụ nke a machiri, ọ pụkwara ime ka a jụ ngwaahịa gị ma merụọ mmadụ ahụ." }
          ]
        },
        {
          title: "Ndekọ na-achọpụta ebe igbe ọ bụla si",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hazie ndekọ na-achọpụta igbe ruo n'ubi ya, ihe e tinyere na ya na ụbọchị owuwe ya.",
          text: [
            "Ọ bụrụ na onye na-azụ ahụ ọgwụ fọdụrụ ma ọ bụ nsogbu, ọ ga-ajụ: kedu ugbo, kedu ubi, gịnị ka a gbara na mgbe ole? Ndekọ nchọpụta na-aza ya n'ime nkeji ole na ole. Na-enweghị ha, onye na-azụ nwere ike ịhapụ otu ahụ dum.",
            "Nye ubi ọ bụla ma ọ bụ ala ọ bụla koodu, dịka ọmụmaatụ KB-F2 maka ugbo Kiambu, ubi 2. Debe ndekọ ọgwụ na ihe e tinyere maka ubi ọ bụla: ụbọchị, aha ọgwụ na nọmba ndebanye aha ya, ole, onye gbara ya na oge nchere tupu owuwe dị n'akara ya. Debe ndekọ owuwe: ụbọchị, koodu ubi, ọnụọgụ igbe ma ọ bụ kilo, na nọmba lot. Dee nọmba lot ahụ n'igbe ọ bụla ma ọ bụ n'akwụkwọ nnyefe ọ bụla.",
            "Debe ndekọ ndị ahụ n'akwụkwọ ndetu ma ọ bụ na spreadsheet dị mfe na ekwentị, ma debe akwụkwọ nnata ego maka ihe ị zụtara. Otu ndị ọrụ ugbo na-edebe ndepụta ndị otu na ndekọ onye otu ọ bụla. Kenya na-amalite ịse map na idebanye aha ugbo ndị na-ere na mba ọzọ n'ụzọ dijitalụ, ya mere jụọ AFA ihe ihe ọkụkụ gị chọrọ."
          ],
          steps: ["Nye ubi ọ bụla ma ọ bụ ala ọ bụla obere koodu.", "Debe ndekọ ọgwụ na ihe e tinyere maka ubi ọ bụla: ụbọchị, ọgwụ, nọmba ndebanye aha, ole, onye gbara ya, oge nchere tupu owuwe.", "Debe ndekọ owuwe nwere nọmba lot maka owuwe ọ bụla.", "Dee nọmba lot ahụ n'igbe ọ bụla ma ọ bụ n'akwụkwọ nnyefe ọ bụla.", "Mee omume: họrọ otu igbe ma chọpụta ebe o si n'ime nkeji ole na ole."],
          words: [["Nọmba lot", "koodu maka otu owuwe site n'otu ubi n'otu ụbọchị, e dere n'igbe ndị ahụ."], ["Ndekọ ọgwụ (spray record)", "ndepụta e dere ede nke ọgwụ ahụhụ ọ bụla e ji: mgbe, gịnị, ole na onye."], ["Nnyocha (audit)", "nlele onye na-azụ ma ọ bụ onye na-enye asambodo na-eme iji hụ na ị na-eme ihe i kwuru."]],
          slides: [
            { title: "Gịnị mere ị ga-eji chọpụta?", bullets: ["Onye na-azụ hụrụ nsogbu: kedu ubi, kedu ọgwụ, mgbe ole?", "Ezi ndekọ na-aza n'ime nkeji ole na ole", "Enweghị ndekọ: a pụrụ ịhapụ otu ahụ dum"] },
            { title: "Ndekọ atọ", bullets: ["Koodu ubi (dịka ọmụmaatụ KB-F2)", "Ndekọ ọgwụ na ihe e tinyere maka ubi ọ bụla", "Ndekọ owuwe nwere nọmba lot"] },
            { title: "Mee ka ọ na-arụ ọrụ", bullets: ["Nọmba lot n'igbe ọ bụla", "Akwụkwọ ndetu ma ọ bụ spreadsheet na ekwentị; debe akwụkwọ nnata", "Mee omume ịchọpụta ebe otu igbe si"] }
          ],
          sources: [KE_AFA],
          tryIt: "Dee ndekọ atọ ahụ maka otu ihe ọkụkụ: koodu ubi, ndekọ ọgwụ na ihe e tinyere, na ndekọ owuwe nwere nọmba lot. Dejupụta otu ahịrị n'ezie ma ọ bụ nke omume n'ime nke ọ bụla, wee chọpụta igbe ahụ ruo n'ubi ya na ọgwụ ikpeazụ a gbara.",
          youCanNow: "idebe ndekọ ubi, ọgwụ na owuwe na-achọpụta igbe ọ bụla ruo n'ubi ya na ihe e tinyere na ya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị na-ejikọ igbe dị n'ụlọ ahịa onye na-azụ na ubi gị?", options: ["Agba igbe ahụ", "Aha onye na-anya ụgbọ ala", "Ọnụ ahịa n'ahịa", "Nọmba lot e dere n'igbe ahụ na n'ndekọ owuwe gị"], answer: 3, why: "Nọmba lot dị n'igbe na n'ndekọ gị na-achọpụta ya ruo n'ubi na ụbọchị." },
            { objective: "O4", q: "Kedu ozi kwesịrị ịdị n'ndekọ ọgwụ?", options: ["Nọmba ekwentị onye na-azụ", "Ụbọchị, ọgwụ, nọmba ndebanye aha, ole na onye gbara ya", "Amụma ihu igwe maka ọnwa na-abịa", "Ọnụ ahịa ihe ọkụkụ ahụ"], answer: 1, why: "Ozi ndị a na-egosi ihe a gbara na mgbe a gbara ya, nke ndị na-azụ na ndị na-enye asambodo na-elele." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe ndị na-azụ ukwu chọrọ, na ime ka ugbo gị dị njikere",
        questions: [
          { objective: "O1", q: "Kedu nke Ọ BỤGHỊ otu n'ime ihe ise ndị na-azụ ukwu na-achọkarị?", options: ["Ole", "Nchọpụta", "Onyinye maka onye na-azụ", "Nchekwa nri"], answer: 2, why: "Ndị na-azụ chọrọ ole, ịdịgide adịgide, ogo, nchọpụta na nchekwa nri; onyinye abụghị ihe a chọrọ." },
          { objective: "O1", q: "Otu gị nwere ike imezu naanị ọkara ihe onye na-azụ na-enye iwu kwa izu. Gịnị nwere ike imechi oghere ahụ?", options: ["Ndị otu ọzọ na ịkụ ihe n'ụbọchị dị iche iche", "Iziga ngwaahịa ogo ya dị ala", "Ikwe nkwa karịa ihe i nwere", "Ileghara ole ahụ anya"], answer: 0, why: "Ndị ọrụ ugbo ọzọ na ịkụ ihe n'ụbọchị dị iche iche na-abawanye ole ma na-eme ka inye dịgide." },
          { objective: "O2", q: "Kedu omume bụ akụkụ nke GAP?", options: ["Idebe ọgwụ ahụhụ n'akụkụ nri", "Ịgba ọgwụ ụbọchị tupu owuwe n'agbanyeghị ihe akara kwuru", "Ịhapụ ewu ka ha rie ahịhịa n'akụkụ ngwaahịa n'oge owuwe", "Iyi ihe nchebe akara ahụ na-arịọ"], answer: 3, why: "Ịgbaso akara ahụ, gụnyere ihe nchebe, na-echebe ndị ọrụ na ngwaahịa." },
          { objective: "O4", q: "Gịnị bụ nọmba lot?", options: ["Ọnụ ahịa otu igbe", "Koodu maka otu owuwe site n'otu ubi n'otu ụbọchị", "Ọnụọgụ ndị ọrụ", "Ịdị ukwuu nke ugbo ahụ"], answer: 1, why: "Nọmba lot na-egosi otu owuwe ka e wee nwee ike ịchọpụta ya." },
          { objective: "O4", q: "Onye na-azụ kwuru na ọ hụrụ ọgwụ fọdụrụ n'otu nnyefe. Ezi ndekọ na-enyere gị aka:", options: ["Ịta onye na-azụ ụta", "Ịgbanwe ndekọ ndị ahụ", "Ịchọpụta ya ruo n'ubi na ọgwụ ahụ, ma dozie ihe kpatara ya", "Ịkwụsị ire nye onye ọ bụla"], answer: 2, why: "Nchọpụta na-egosi ebe nsogbu ahụ malitere ka i wee dozie ya ma debe onye na-azụ." }
        ]
      }
    },
    {
      name: "Isi 2: Asambodo, iwu ire na mba ọzọ na nkwekọrịta inye ngwaahịa",
      lessons: [
        {
          title: "GLOBALG.A.P. na asambodo: ihe ọ na-efu na uru ya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tụnyere ihe asambodo na-efu na uru ọ na-ewete maka ugbo gị ma họrọ ụzọ ị ga-esi.",
          text: [
            "Asambodo (certification) pụtara na otu ụlọ ọrụ kwụụrụ onwe ya na-enyocha ugbo gị megide ụkpụrụ ma nye gị asambodo ma ọ bụrụ na i gafere. GLOBALG.A.P. bụ ụkpụrụ ugbo a kacha mara nke ọtụtụ ụlọ ahịa ukwu na ndị na-ere na mba ọzọ na Europe na-arịọ. Ụkpụrụ Integrated Farm Assurance (IFA) ya maka mkpụrụ osisi na akwụkwọ nri na-ekpuchi nchekwa nri na nchọpụta, ahụike, nchekwa na ọdịmma ndị ọrụ, na gburugburu ebe obibi (mmiri, fatịlaịza, ịchịkwa ahụhụ na ọgwụ nchekwa osisi). Ụfọdụ ndị na-azụ na-arịọ ụkpụrụ ndị ọzọ, dị ka atụmatụ organic ma ọ bụ fair-trade.",
            "GLOBALG.A.P. kwuru na e nwere akụkụ ego atọ: ego nke gị iji kwado (ọzụzụ, mposi, ebe nchekwa kemịkal, ndekọ); ụgwọ ụlọ ọrụ na-enye asambodo maka nnyocha na njem; na ụgwọ ndebanye aha na ikike nke GLOBALG.A.P., nke dabere n'ebe i bi na nhọrọ gị. A na-enyocha kwa afọ, asambodo na-adịkwa otu afọ. E nwere nhọrọ maka otu ndị ọrụ ugbo, gụnyere ndị nwere obere ugbo, ebe otu asambodo otu na-ekpuchi ndị otu na-agbaso otu usoro ogo ha na-eketa, ya na nnyocha n'ime otu.",
            "Nzọụkwụ ndị ahụ: budata iwu na ndepụta nlele n'efu, tinye ihe ndị a chọrọ n'ọrụ, nyochaa onwe gị, rịọ ụlọ ọrụ na-enye asambodo a kwadoro nke na-arụ ọrụ na mba gị ka ha mee nnyocha, dozie nsogbu ọ bụla n'oge e nyere gị, wee nata asambodo ahụ. Ndị na-azụ nwere ike ilele asambodo na Supply Chain Portal nke GLOBALG.A.P. Tupu ị kwụọ ụgwọ, jụọ onye na-azụ gị: ị chọrọ asambodo a, ị ga-azụkwu ma ọ bụ kwụọ karịa ma ọ bụrụ na m nwere ya? Nweta ọnụ ahịa site n'ihe karịrị otu ụlọ ọrụ na-enye asambodo."
          ],
          steps: ["Jụọ onye na-azụ gị asambodo ọ chọrọ, ma ọ bụrụ na ọ chọrọ.", "Budata iwu na ndepụta nlele ụkpụrụ ahụ n'efu ma nyochaa onwe gị.", "Depụta akụkụ ego atọ ahụ ma nweta ọnụ ahịa site n'ụlọ ọrụ na-enye asambodo a kwadoro.", "Tụnyere ego ahụ na uru ya: ndị na-azụ ọhụrụ, ọtụtụ ngwaahịa ma ọ bụ ọnụ ahịa ka mma.", "Kpebie: nweta asambodo naanị gị, dị ka otu, ma ọ bụ ọ bụghị ugbu a."],
          words: [["Asambodo (certification)", "nlele kwụụrụ onwe ya na-egosi na ugbo na-emezu ụkpụrụ, nke asambodo na-egosi."], ["Ụlọ ọrụ na-enye asambodo (certification body)", "ụlọ ọrụ a kwadoro nke na-enyocha ugbo gị ma nye asambodo."], ["Asambodo otu (group certification)", "otu asambodo maka otu ndị ọrụ ugbo ndị otu ya na-agbaso otu usoro ogo ha na-eketa."], ["Nnyocha onwe (self-assessment)", "ịlele ugbo gị n'onwe gị megide ndepụta nlele ụkpụrụ ahụ tupu ezigbo nnyocha."]],
          slides: [
            { title: "Ihe GLOBALG.A.P. IFA na-ekpuchi", bullets: ["Nchekwa nri na nchọpụta", "Ahụike, nchekwa na ọdịmma ndị ọrụ", "Gburugburu ebe obibi: mmiri, fatịlaịza, ịchịkwa ahụhụ"] },
            { title: "Akụkụ ego atọ", bullets: ["Ego nke gị iji kwado", "Ụgwọ nnyocha na njem nke ụlọ ọrụ na-enye asambodo", "Ụgwọ ndebanye aha na ikike GLOBALG.A.P."] },
            { title: "Nzọụkwụ ruo asambodo", bullets: ["Iwu na ndepụta nlele n'efu; nnyocha onwe", "Nnyocha site n'ụlọ ọrụ na-enye asambodo a kwadoro", "Dozie nsogbu; asambodo maka otu afọ"] },
            { title: "Ọ bara uru?", bullets: ["Jụọ onye na-azụ ma ọ chọrọ ya", "Ọ ga-azụkwu ma ọ bụ kwụọ karịa?", "Nhọrọ otu maka obere ugbo; nweta ọnụ ahịa ọtụtụ"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "Maka ihe ọkụkụ gị na onye na-azụ gị, dee ndetu ego na uru gbasara asambodo: onye na-azụ ọ chọrọ ya, akụkụ ego atọ ahụ (ya na ọnụ ahịa ma ọ bụrụ na i nwere ike inweta ha), uru ị na-atụ anya ya, na nhọrọ gị: naanị gị, dị ka otu, ma ọ bụ ọ bụghị ugbu a.",
          youCanNow: "ịtụnyere ihe asambodo dị ka GLOBALG.A.P. na-efu na uru ya ma họrọ ụzọ maka ugbo gị ma ọ bụ otu gị.",
          quickCheck: [
            { objective: "O3", q: "Kedu nke bụ otu n'ime akụkụ ego atọ nke GLOBALG.A.P.?", options: ["Ego njem onye na-azụ", "Ụgwọ akwụkwọ gị n'onwe gị", "Ụgwọ nnyocha na njem nke ụlọ ọrụ na-enye asambodo", "Ọnụ ahịa ihe ọkụkụ ahụ"], answer: 2, why: "GLOBALG.A.P. depụtara ego ị na-etinye iji kwado, ụgwọ ụlọ ọrụ na-enye asambodo, na ụgwọ ndebanye aha na ikike nke ya." },
            { objective: "O3", q: "Ndị ọrụ ugbo iri abụọ nwere obere ugbo chọrọ asambodo mana onye ọ bụla enweghị ike ịkwụ ụgwọ nnyocha. Gịnị nwere ike ịdaba?", options: ["Asambodo otu nwere otu usoro ogo ha na-eketa", "Onye ọ bụla na-eṅomi asambodo onye agbata obi", "Ịhapụ nnyocha", "Ịzụta asambodo n'ịntanetị"], answer: 0, why: "Nhọrọ otu ndị ọrụ ugbo na-ekwe ka otu asambodo kpuchie ndị otu na-agbaso otu usoro, ya na nnyocha n'ime otu." }
          ]
        },
        {
          title: "Oke ọgwụ fọdụrụ, iwu ire na mba ọzọ na ihe mere e ji ajụ ngwaahịa",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lelee oke ọgwụ fọdụrụ na ụlọ ọrụ ire na mba ọzọ metụtara ihe ọkụkụ gị na ahịa gị.",
          text: [
            "Maximum residue level (MRL) bụ oke kachasị elu nke ọgwụ ahụhụ a na-ekwe ka ọ fọdụ n'ihe oriri. Ahịa mba ọ bụla na-anabata ngwaahịa na-esetịpụ nke ya. European Union na-edepụta oke ya na EU Pesticides Database; Codex Alimentarius na-esetịpụ oke mba ụwa nke ọtụtụ mba na-eji. Ngwaahịa nwere ike ịdị n'iwu n'ụlọ ma ka gafee oke ahụ na Europe, ma ọ bụ ọ ga-abụ na a naghị anabata ọgwụ ahụ ma ọlị n'ebe ahụ.",
            "Nke a abụghị obere ihe egwu. Agriculture and Food Authority nke Kenya kwuru na ego e nwetara n'ire akwụkwọ nri na mba ọzọ dara nke ukwuu, tumadi n'ihi njide EU maka ọgwụ fọdụrụ, nke si na okwu 25 n'afọ 2023 rịgoro 57 n'afọ 2024, EU wee mụbaa nlele ya na beans na peas si Kenya. Ihe ndị na-akpatakarị ya: ịgba ọgwụ mgbe owuwe dị nso nke ukwuu, iji ọgwụ a na-anabataghị n'ahịa ahụ, ịgwakọta ya n'ụzọ na-ezighị ezi, ọgwụ si n'ubi onye agbata obi efepụta, na ịgwakọta ngwaahịa si n'ugbo a na-enweghị ike ịchọpụta.",
            "Ire na mba ọzọ chọkwara nkwado mba. Na Kenya, Horticultural Crops Directorate nke AFA na-enye ndị na-ere na mba ọzọ ikike ma na-edebanye aha ndị nnọchiteanya, KEPHIS na-enyekwa asambodo phytosanitary. Na Naịjirịa, ndị na-ere na mba ọzọ na-edebanye aha na Nigerian Export Promotion Council (NEPC). Na Ghana, ndị na-ere na mba ọzọ na-edebanye aha na Ghana Export Promotion Authority (GEPA). Ụlọ ọrụ nchekwa osisi nke mba ọ bụla na-eme nlele ahụike osisi. Iwu na-agbanwe, ya mere lelee ụlọ ọrụ ọ bụla tupu oge ihe ọkụkụ amalite."
          ],
          steps: ["Kpọọ aha ahịa ị chọrọ ire na ya (dịka ọmụmaatụ EU, UK ma ọ bụ ahịa mpaghara).", "Chọọ oke ọgwụ fọdụrụ maka ihe ọkụkụ gị na database ahịa ahụ ma ọ bụ na Codex.", "Lelee na a na-anabata ọgwụ ọ bụla ị na-eji n'ebe ahụ, ma gbasoo oge nchere tupu owuwe dị n'akara ya.", "Jụọ onye na-azụ gị ma a chọrọ nnwale ọgwụ fọdụrụ tupu e zipu ya.", "Depụta ụlọ ọrụ ire na mba ọzọ na ahụike osisi nke mba gị na ihe ha chọrọ."],
          words: [["Maximum residue level (MRL)", "oke kachasị elu nke ọgwụ ahụhụ a na-ekwe ka ọ fọdụ n'ihe oriri n'otu ahịa."], ["Njide (interception)", "mgbe mba na-anabata ngwaahịa kwụsịrị ya n'ókè n'ihi na ọ mebiri iwu."], ["Asambodo phytosanitary", "akwụkwọ gọọmentị na-ekwu na ngwaahịa osisi enweghị ahụhụ na ọrịa ndị e depụtara."]],
          slides: [
            { title: "Ihe MRL bụ", bullets: ["Oke kachasị elu nke ọgwụ a na-ekwe n'ihe oriri", "Ahịa ọ bụla na-esetịpụ nke ya", "EU Pesticides Database; oke Codex"] },
            { title: "Ihe mere e ji ajụ ngwaahịa", bullets: ["A gbara ọgwụ mgbe owuwe dị nso nke ukwuu", "Ọgwụ a na-anabataghị n'ahịa ahụ", "Ịgwakọta n'ụzọ na-ezighị ezi, ọgwụ efepụtara, ngwaahịa a na-enweghị ike ịchọpụta"] },
            { title: "Ịdọ aka na ntị nke Kenya", bullets: ["AFA: njide EU maka ọgwụ fọdụrụ si na 25 (2023) rịgoro 57 (2024)", "Ego ire akwụkwọ nri na mba ọzọ dara nke ukwuu", "EU mụbara nlele na beans na peas"] },
            { title: "Ụlọ ọrụ ire na mba ọzọ (lelee iwu ugbu a)", bullets: ["Kenya: AFA Horticultural Crops Directorate; KEPHIS", "Naịjirịa: ndebanye aha na NEPC", "Ghana: ndebanye aha na GEPA; ụlọ ọrụ nchekwa osisi"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "Maka ihe ọkụkụ gị na ahịa ị chọrọ, chọta ebe e depụtara oke ọgwụ fọdụrụ ma lelee ọgwụ ahụhụ abụọ ị na-eji. Wee depụta ụlọ ọrụ ire na mba ọzọ na ahụike osisi nke mba gị na otu ajụjụ ị ga-ajụ nke ọ bụla. Tinye ihe ị chọpụtara na ndepụta gị.",
          youCanNow: "ịchọta oke ọgwụ fọdụrụ maka ahịa gị ma kpọọ aha ụlọ ọrụ ire na mba ọzọ na ahụike osisi ị ga-arụkọ ọrụ na ha.",
          quickCheck: [
            { objective: "O5", q: "E debara ọgwụ ahụhụ gị aha na mba gị. A ka nwere ike ịjụ ngwaahịa ahụ na Europe?", options: ["Mba, ndebanye aha n'ụlọ zuru ezu", "Ee, ma ọ bụrụ na ọgwụ fọdụrụ gafere oke EU ma ọ bụ na a naghị anabata ọgwụ ahụ n'ebe ahụ", "Naanị ma ọ bụrụ na igbe ndị ahụ ruru unyi", "Naanị maka okooko osisi"], answer: 1, why: "Ahịa ọ bụla na-esetịpụ oke nke ya, ya mere ngwaahịa dị n'iwu n'ụlọ nwere ike imebi iwu EU." },
            { objective: "O5", q: "Na Kenya, onye na-enye asambodo phytosanitary maka ihe a na-ere na mba ọzọ?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "KEPHIS na-ahụ maka nlele ahụike osisi na asambodo phytosanitary maka ihe Kenya na-ere na mba ọzọ." }
          ]
        },
        {
          title: "Izute ndị na-azụ, nkwekọrịta inye ngwaahịa na atụmatụ outgrower",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee onyinye inye ngwaahịa ma depụta usoro nkwekọrịta ị chọrọ n'aka onye na-azụ.",
          text: [
            "Mgbe ị na-ezute onye na-azụ, bịa njikere: ihe ọkụkụ gị, ogo ya, ole ị nwere ike inye na mgbe, otu ị si edebe ngwaahịa ka ọ dị nchebe ma nwee ike ịchọpụta ya, asambodo ọ bụla, na ihe nlele (samples). Kwe naanị nkwa ihe ị nwere ike imezu. Nnyefe ị gbaghara na-emebi ntụkwasị obi karịa onyinye dị obere.",
            "Kpaa usoro ndị ahụ, ọ bụghị naanị ọnụ ahịa. Kwekọrịta na ogo na otu a ga-esi lelee ya, ole na oge, ọnụ ahịa ma ọ bụ otu a ga-esi ahazi ya (a kara aka, ma ọ bụ jikọtara ya na ọnụ ahịa n'ahịa), onye ga-akwụ ụgwọ njem na ngwugwu, iwu ịjụ ngwaahịa (onye na-elele, mgbe, na ihe ga-eme ngwaahịa a jụrụ), ụbọchị na ụzọ ịkwụ ụgwọ, na ihe ga-eme ma ọ bụrụ na ihe ubi gị mebiri ma ọ bụ onye na-azụ abịaghị bulie ya. Side-selling (ire ngwaahịa e kwere nkwa ya nye onye ọzọ) na-emebi ntụkwasị obi, ọ na-emebikarịkwa nkwekọrịta ahụ.",
            "N'atụmatụ outgrower, ụlọ ọrụ dị ka onye na-emezi nri ma ọ bụ onye na-ere na mba ọzọ na-enye ọtụtụ obere ndị ọrụ ugbo nkwekọrịta, na-enyekarị mkpụrụ, ihe ọrụ ugbo, ọzụzụ ma ọ bụ mbinye ego ma na-azụta ihe ọkụkụ ahụ. O nwere ike imeghe ahịa na-adịgide adịgide, mana lelee: a na-ewepụ ego ihe ọrụ ugbo ahụ n'ụgwọ gị, n'ọnụ ahịa ole, onye na-ekpebi ogo, gịnị ga-eme ma ọnụ ahịa rịgoro, ị nwekwara ike ịpụ? Gụọ nkwekọrịta ọ bụla niile, debe otu mbipụta ya, ma jụọ onye ndụmọdụ ị tụkwasịrị obi, onye ọrụ extension ma ọ bụ onye ọrụ cooperative tupu ị bịanye aka."
          ],
          steps: ["Kwadoo onyinye gị: ihe ọkụkụ, ogo, ole, oge, nchekwa na nchọpụta, asambodo, ihe nlele.", "Depụta usoro ị chọrọ: nlele ogo, otu e si ahazi ọnụ ahịa, njem, iwu ịjụ ngwaahịa, ụbọchị ịkwụ ụgwọ, usoro maka ọdịda.", "Maka atụmatụ outgrower, jụọ otu e si agụ ego ihe ọrụ ugbo, onye na-ekpebi ogo, na otu ị ga-esi pụọ.", "Gụọ nkwekọrịta ahụ niile ma jụọ onye ndụmọdụ ị tụkwasịrị obi tupu ị bịanye aka.", "Debe otu mbipụta ma nye kpọmkwem ihe i kwere nkwa ya."],
          words: [["Onyinye inye ngwaahịa (supply offer)", "onyinye e dere ede nye onye na-azụ nke ihe ị nwere ike inye, mgbe na n'usoro dị aṅaa."], ["Atụmatụ outgrower", "ndokwa ebe otu ụlọ ọrụ na-enye ọtụtụ obere ndị ọrụ ugbo nkwekọrịta ka ha kụọrọ ya ihe, na-enyekarị ihe ọrụ ugbo ma na-azụta ihe ọkụkụ ahụ."], ["Side-selling", "ire ngwaahịa e nwere nkwekọrịta maka ya nye onye na-azụ ọzọ."], ["Iwu ịjụ ngwaahịa", "iwu e kwekọrịtara maka ilele ngwaahịa na ihe ga-eme ngwaahịa onye na-azụ jụrụ."]],
          slides: [
            { title: "Bịa njikere", bullets: ["Ihe ọkụkụ, ogo, ole na oge", "Otu ị si edebe ngwaahịa ka ọ dị nchebe ma nwee ike ịchọpụta ya", "Asambodo na ihe nlele; kwe naanị nkwa ihe ị ga-emezu"] },
            { title: "Kpaa usoro ndị ahụ", bullets: ["Nlele ogo, otu e si ahazi ọnụ ahịa, njem", "Iwu ịjụ ngwaahịa na ụbọchị ịkwụ ụgwọ", "Gịnị ga-eme ma ihe ubi mebie ma ọ bụ onye na-azụ abịaghị?"] },
            { title: "Atụmatụ outgrower", bullets: ["Ahịa na-adịgide; ihe ọrụ ugbo, ọzụzụ ma ọ bụ mbinye ego", "Lelee: ego ihe ọrụ ugbo, onye na-ekpebi ogo, ị nwere ike ịpụ?", "Side-selling na-emebi ntụkwasị obi na nkwekọrịta"] },
            { title: "Tupu ị bịanye aka", bullets: ["Gụọ ahịrị ọ bụla; debe otu mbipụta", "Jụọ onye ọrụ extension, cooperative ma ọ bụ onye ndụmọdụ", "Nye kpọmkwem ihe i kwere nkwa ya"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa ndepụta njikere gị maka onye na-azụ, kaa akara ihe ị na-emezu na ihe ị ga-edozi. Wee dee onyinye inye ngwaahịa nke otu peeji nye onye na-azụ ahụ: ihe ọkụkụ na ogo, ole na oge, nchekwa na nchọpụta, asambodo, otu e si ahazi ọnụ ahịa na usoro nkwekọrịta ị chọrọ.",
          youCanNow: "inye onye na-azụ ukwu onyinye inye ngwaahịa ma depụta usoro nkwekọrịta na-echebe gị, gụnyere n'atụmatụ outgrower.",
          quickCheck: [
            { objective: "O6", q: "Kedu usoro na-echebe gị ma ọ bụrụ na onye na-azụ jụrụ akụkụ nke nnyefe?", options: ["Iwu ịjụ ngwaahịa doro anya: onye na-elele, mgbe, na ihe ga-eme ngwaahịa a jụrụ", "Akara (logo) onye na-azụ", "Ọnụ ahịa dị ala", "Nnyefe ka ukwuu"], answer: 0, why: "Iwu ịjụ ngwaahịa na-egbochi ịjụ n'ụzọ na-ezighị ezi ma na-ekwu onye ga-ebu ọnwụ ahụ." },
            { objective: "O6", q: "Ụlọ ọrụ outgrower na-enye mkpụrụ na fatịlaịza n'ụgwọ. Gịnị ka ị ga-ebu ụzọ jụọ?", options: ["Agba akpa ndị ahụ", "Ma ndị agbata obi abanyela", "Otu e si agụ ọnụ ahịa ihe ọrụ ugbo ndị ahụ na otu e si ewepụ ya n'ụgwọ gị", "Ma ị nwere ike ime side-selling"], answer: 2, why: "Ego ihe ọrụ ugbo nwere ike iwere ọtụtụ ụgwọ gị, ya mere mara ọnụ ahịa ya na otu e si ewepụ ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Asambodo, iwu ire na mba ọzọ na nkwekọrịta inye ngwaahịa",
        questions: [
          { objective: "O3", q: "Ruo ogologo oge ole ka asambodo GLOBALG.A.P. IFA na-adị?", options: ["Otu afọ, ya na nnyocha kwa afọ", "Ruo mgbe ebighị ebi", "Afọ iri", "Ruo mgbe onye na-azụ gbanwere"], answer: 0, why: "GLOBALG.A.P. kwuru na a na-enyocha kwa afọ, asambodo na-adịkwa otu afọ." },
          { objective: "O3", q: "Tupu ị kwụọ ụgwọ asambodo, gịnị ka ị ga-ajụ onye na-azụ gị?", options: ["Adreesị ụlọ ya", "Ihe ọkụkụ kacha amasị ya", "Ọ dịghị ihe, naanị nweta asambodo", "Ị chọrọ ya, ị ga-azụkwu ma ọ bụ kwụọ karịa ma ọ bụrụ na m nwere ya?"], answer: 3, why: "Asambodo na-efu ego, ya mere lelee na ọ na-ewete ahịa ma ọ bụ ọnụ ahịa ka mma." },
          { objective: "O5", q: "Ebee ka ị nwere ike ịchọ oke ọgwụ fọdụrụ EU maka otu ihe ọkụkụ?", options: ["Ọdụ redio obodo", "EU Pesticides Database", "Akpa mkpụrụ gị", "Status WhatsApp onye na-azụ"], answer: 1, why: "EU Pesticides Database nke European Commission na-edepụta MRL dị ka nri na ọgwụ si dị." },
          { objective: "O6", q: "Gịnị bụ side-selling?", options: ["Ire ihe n'akụkụ okporo ụzọ", "Ire n'ahịa abụọ n'otu oge na ikike", "Ire ngwaahịa e nwere nkwekọrịta maka ya nye onye na-azụ ọzọ", "Ire n'ọtụtụ"], answer: 2, why: "Side-selling na-emebi nkwekọrịta ma na-emebi ntụkwasị obi gị na onye na-azụ." },
          { objective: "O6", q: "Ị nwere ike inye tọn 2 kwa izu. Onye na-azụ rịọrọ 4. Gịnị ka ị ga-eme?", options: ["Kwe nkwa 4 ma nwee olileanya", "Zipu ngwaahịa a na-ahọchaghị ka ọ dị arọ", "Ekwula ihe ọ bụla ma nye 2", "Nye tọn 2, ma ọ bụ rụkọọ ọrụ na otu iji nye karịa"], answer: 3, why: "Kwe naanị nkwa ihe ị nwere ike imezu; otu nwere ike inyere aka iru ole ka ukwuu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ire n'Ụlọ Ahịa Ukwu, nye Ndị Na-emezi Nri na Ndị Na-azụ Maka Mba Ọzọ: Ụkpụrụ na Asambodo",
    questions: [
      { objective: "O1", q: "Kedu otu na-edepụta ihe ndị na-azụ ukwu na-achọkarị?", options: ["Ọnụ ahịa dị ala, ugbo buru ibu, tractor ọhụrụ", "Naanị organic, ọ dịghị ihe ọzọ", "Onyinye, mbinye ego, njem n'efu", "Ole, ịdịgide adịgide, ogo, nchọpụta, nchekwa nri"], answer: 3, why: "Ise ndị a bụ ihe ụlọ ahịa ukwu, ndị na-emezi nri na ndị na-ere na mba ọzọ na-achọkarị." },
      { objective: "O1", q: "Onye na-emezi nri na-azụ akpụ maka starch na-echekarị maka:", options: ["Ọtụtụ ngwaahịa n'otu ogo", "Agba na ọdịdị mara mma", "Obere ngwugwu maka ndị ahịa", "Akara mara mma"], answer: 0, why: "Ndị na-emezi nri chọrọ ole na ogo na-adịgide maka ụlọ ọrụ ha; ọdịdị adịghị mkpa nke ukwuu." },
      { objective: "O1", q: "Ị tụnyere nkọwa ihe onye na-azụ chọrọ na ihe ị na-enye. Gịnị ka oghere ndị ahụ ga-aghọ?", options: ["Ihe mere ị ga-eji kwụsị", "Ihe nzuzo ị na-ezo otu gị", "Atụmatụ ọrụ gị", "Nsogbu onye na-azụ"], answer: 2, why: "Oghere ọ bụla bụ ọrụ ị ga-edozi tupu i nwee ike inye onye na-azụ ahụ." },
      { objective: "O2", q: "Gịnị ka GAP pụtara n'ihe ọmụmụ a?", options: ["Group Agricultural Payment", "Good Agricultural Practices", "Grain and Produce", "Government Approval Permit"], answer: 1, why: "Good Agricultural Practices bụ omume ugbo ndị na-azụ na ndị na-enye asambodo na-elele." },
      { objective: "O2", q: "Kedu ọgwụ ahụhụ ị kwesịrị iji?", options: ["Ọgwụ ọ bụla dị ọnụ ala n'ahịa", "Ọgwụ onye agbata obi tụrụ aro", "Ọgwụ na-enweghị akara n'ime karama ochie", "Ọgwụ ụlọ ọrụ mba gị debara aha, e ji dị ka akara ya si kwuo"], answer: 3, why: "Ọgwụ e debara aha e ji dị ka akara si kwuo na-echebe ndị mmadụ ma na-eme ka ọgwụ fọdụrụ ghara ịgafe oke." },
      { objective: "O2", q: "Gịnị mere ị ga-eji nye ndị ọrụ owuwe mposi na ebe ịsa aka?", options: ["Iji gbochie nje ịbanye na ngwaahịa", "Iji mee ka obi tọọ ndị agbata obi ụtọ", "N'ihi na ndị na-azụ na-enwe mmasị n'ụlọ", "Iji debe kemịkal"], answer: 0, why: "Ịdị ọcha n'oge owuwe na-eme ka ngwaahịa ghara inwe nje, nke ndị na-azụ na-enyocha." },
      { objective: "O4", q: "Gịnị ka koodu ubi na-enyere aka na ya?", options: ["Ịkwụ ndị ọrụ ụgwọ", "Ịchọpụta ngwaahịa ruo kpọmkwem ubi o si", "Ịhọrọ onye na-azụ", "Ịhazi ọnụ ahịa"], answer: 1, why: "Koodu ubi na-ejikọ ndekọ owuwe na nke ọgwụ na otu ubi." },
      { objective: "O4", q: "Ebee ka nọmba lot kwesịrị ịpụta?", options: ["Naanị n'isi gị", "N'ụgbọ ala onye na-azụ", "N'igbe ọ bụla ma ọ bụ n'akwụkwọ nnyefe ọ bụla, na n'ndekọ owuwe gị", "N'akpa mkpụrụ"], answer: 2, why: "Ide ya n'igbe na n'ndekọ na-ekwe ka onye ọ bụla chọpụta ebe ngwaahịa si." },
      { objective: "O4", q: "Kedu ndekọ na-egosi ihe a gbara n'ubi na mgbe a gbara ya?", options: ["Ndepụta ndị otu", "Akwụkwọ ire ahịa", "Akwụkwọ nnyefe", "Ndekọ ọgwụ na ihe e tinyere"], answer: 3, why: "Ndekọ ọgwụ na ihe e tinyere na-edepụta ụbọchị, ọgwụ, ole na onye gbara ya." },
      { objective: "O3", q: "Gịnị ka GLOBALG.A.P. IFA maka mkpụrụ osisi na akwụkwọ nri na-ekpuchi?", options: ["Nchekwa nri, ọdịmma ndị ọrụ na gburugburu ebe obibi", "Naanị agba ngwaahịa", "Naanị ọnụ ahịa", "Naanị ịdị ukwuu nke ugbo"], answer: 0, why: "IFA na-ekpuchi nchekwa nri na nchọpụta, ahụike na ọdịmma ndị ọrụ, na gburugburu ebe obibi." },
      { objective: "O3", q: "Onye na-eme nnyocha GLOBALG.A.P.?", options: ["Onye na-anya ụgbọ ala onye na-azụ gị", "Ụlọ ọrụ na-enye asambodo a kwadoro", "Onye agbata obi", "Ụlọ akụ"], answer: 1, why: "Naanị ụlọ ọrụ na-enye asambodo a kwadoro nke na-arụ ọrụ na mba gị nwere ike inyocha ma nye asambodo." },
      { objective: "O3", q: "Olee otu onye na-azụ ga-esi lelee na asambodo gị bụ ezigbo nke?", options: ["Rịọ gị ka ị ṅụọ iyi", "Lee akara aha ugbo gị", "Na Supply Chain Portal nke GLOBALG.A.P.", "Ha enweghị ike ilele ya"], answer: 2, why: "A na-ahụ ọnọdụ asambodo n'ikpo okwu GLOBALG.A.P. site na nọmba gị." },
      { objective: "O3", q: "Kedu nzọụkwụ mbụ ruo asambodo?", options: ["Kwụọ ụgwọ ndị ahụ ozugbo", "Bipụta asambodo", "Gwa onye na-azụ na i nwere asambodo", "Budata iwu na ndepụta nlele n'efu ma nyochaa onwe gị"], answer: 3, why: "Nnyocha onwe na-egosi oghere gị tupu ị kwụọ ụgwọ nnyocha." },
      { objective: "O5", q: "Gịnị bụ MRL?", options: ["Ụdị fatịlaịza", "Ụdị mkpụrụ", "Oke kachasị elu nke ọgwụ ahụhụ a na-ekwe ka ọ fọdụ n'ihe oriri", "Ikike njem"], answer: 2, why: "Maximum residue level bụ oke iwu kwadoro nke ọgwụ ahụhụ fọdụrụ n'ihe oriri." },
      { objective: "O5", q: "Gịnị ka onye na-achịkwa ya na Kenya kwuru gbasara njide EU maka ọgwụ fọdụrụ?", options: ["Ha dara ruo efu", "Ha si na 25 n'afọ 2023 rịgoro 57 n'afọ 2024", "Ha anaghị eme mgbe ọ bụla", "Ha na-emetụta naanị okooko osisi"], answer: 1, why: "AFA kwuru na njide ndị ahụ karịrị okpukpu abụọ, ma jikọọ ha na mbelata ukwuu n'ego e nwetara n'ire akwụkwọ nri na mba ọzọ." },
      { objective: "O5", q: "Kedu ihe na-akpatakarị ịjụ ngwaahịa n'ihi ọgwụ fọdụrụ?", options: ["Ịgba ọgwụ mgbe owuwe dị nso nke ukwuu", "Idebe ezi ndekọ", "Iji igbe dị ọcha", "Ịzụ ndị ọrụ"], answer: 0, why: "Ileghara oge nchere tupu owuwe anya na-ahapụ ọgwụ fọdụrụ karịrị oke." },
      { objective: "O5", q: "Otu ndị Naịjirịa chọrọ ire zobo (hibiscus) a mịrị amị na mba ọzọ. Ụlọ ọrụ dị aṅaa ka ha ga-edebanye aha na ya dị ka ndị na-ere na mba ọzọ?", options: ["KEPHIS", "GEPA", "AFA", "Nigerian Export Promotion Council (NEPC)"], answer: 3, why: "Ndị na-ere na mba ọzọ na Naịjirịa na-edebanye aha na NEPC, ha kwesịkwara ilele ihe ọ chọrọ ugbu a." },
      { objective: "O6", q: "Gịnị kwesịrị ịdị n'onyinye inye ngwaahịa?", options: ["Ihe ọkụkụ, ogo, ole, oge, nchekwa, asambodo na otu e si ahazi ọnụ ahịa", "Naanị ọnụ ahịa dị ala", "PIN ụlọ akụ gị", "Nkwa inye ole ọ bụla a rịọrọ"], answer: 0, why: "Onyinye doro anya na-egosi onye na-azụ kpọmkwem ihe ị nwere ike inye na otu." },
      { objective: "O6", q: "Tupu ị bịanye aka na nkwekọrịta outgrower, ị kwesịrị:", options: ["Ịbịanye aka ngwa ngwa tupu ndị ọzọ eme ya", "Ịgụ naanị peeji mbụ", "Ịgụ ya niile, idebe otu mbipụta ma jụọ onye ndụmọdụ ị tụkwasịrị obi", "Ikwe ka ụlọ ọrụ ahụ debe naanị otu mbipụta"], answer: 2, why: "Ịgụ ya niile na inweta ndụmọdụ na-echebe gị pụọ n'usoro ị na-atụghị anya ya." },
      { objective: "O6", q: "Ihe ubi gị mebiri mgbe ụkọ mmiri ozuzo gasịrị. Kedu usoro nkwekọrịta dị mkpa ugbu a?", options: ["Akara (logo) onye na-azụ", "Ihe ga-eme ma otu n'ime unu enweghị ike inye", "Agba igbe ndị ahụ", "Oge ọfịs onye na-azụ na-emeghe"], answer: 1, why: "Usoro maka ọdịda na-ekwu ihe ga-eme mgbe ihe ubi mebiri, ka a ghara inye gị ntaramahụhụ n'ụzọ na-ezighị ezi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị marawọrị?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke ndepụta ma ọ bụ onyinye ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ihe onye na-azụ chọrọ na oghere", objective: "O1", notYet: "Ihe onye na-azụ chọrọ edoghị anya, ma ọ bụ a kabeghị akara oghere.", meets: "E depụtara ole, ịdịgide adịgide, ogo, nchọpụta na nchekwa nri, ya na ihe ị na-enye ugbu a, ma kaa akara oghere ọ bụla.", exceeds: "Dabere na nkọwa ihe onye na-azụ chọrọ e dere ede, ya na atụmatụ na ụbọchị imechi oghere ọ bụla." },
      { name: "Good Agricultural Practices", objective: "O2", notYet: "Enweghị iwu GAP e dere ede, ma ọ bụ ọgwụ ahụhụ a na-edebanyeghị aha ma ọ bụ enweghị ihe nchebe.", meets: "Iwu e dere ede: ọgwụ ahụhụ e debara aha e ji dị ka akara si kwuo, ihe nchebe, oge nchere tupu owuwe, mmiri, ịdị ọcha n'oge owuwe na nchekwa ndị ọrụ.", exceeds: "E zụọla ndị ọrụ, a kpọgidekwara iwu ndị ahụ n'ebe ha na-arụ ọrụ." },
      { name: "Ndekọ nchọpụta", objective: "O4", notYet: "Enweghị koodu ubi, ndekọ ọgwụ ma ọ bụ nọmba lot.", meets: "Koodu ubi, ndekọ ọgwụ na ihe e tinyere, na ndekọ owuwe nwere nọmba lot; e nwere ike ịchọpụta otu igbe ruo ebe o si.", exceeds: "A na-edebe ndekọ maka otu ahụ dum, e mekwara nnwale nchọpụta n'ime nkeji ole na ole." },
      { name: "Asambodo na iwu ire na mba ọzọ", objective: "O3", notYet: "E chere na asambodo dị mkpa n'eleghị ya anya ma ọ bụ e leghara ya anya, ma ọ bụ a kpọghị aha ụlọ ọrụ ire na mba ọzọ.", meets: "Ndetu ego na uru na-akpọ aha akụkụ ego atọ ahụ na otu ụzọ (naanị gị, dị ka otu ma ọ bụ ọ bụghị ugbu a).", exceeds: "Gụnyere ezigbo ọnụ ahịa site n'ụlọ ọrụ na-enye asambodo na azịza onye na-azụ ma ọ chọrọ ya." },
      { name: "Oke ọgwụ fọdụrụ", objective: "O5", notYet: "E leleghị oke ọgwụ fọdụrụ nke ahịa ahụ.", meets: "Na-akpọ aha ebe e depụtara oke ndị ahụ ma lelee ọgwụ ahụhụ e ji megide ha, ya na ụlọ ọrụ ire na mba ọzọ na ahụike osisi.", exceeds: "Ajụọla onye na-azụ ma ọ bụ ụlọ nyocha (lab) gbasara nnwale ọgwụ fọdụrụ tupu e zipu ya." },
      { name: "Onyinye inye ngwaahịa na usoro", objective: "O6", notYet: "Enweghị onyinye, ma ọ bụ ọ na-ekwe nkwa karịa ihe ugbo ma ọ bụ otu ahụ nwere ike inye.", meets: "Onyinye nke otu peeji nwere ogo, ole, oge, nchekwa, asambodo, otu e si ahazi ọnụ ahịa na usoro nkwekọrịta a chọrọ.", exceeds: "Gụnyere iwu ịjụ ngwaahịa, usoro maka ọdịda na usoro ịkwụ ụgwọ, e gosikwara ya onye ndụmọdụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ma ọ bụ otu zigara ụlọ ahịa ukwu, onye na-emezi nri ma ọ bụ onye na-ere na mba ọzọ onyinye inye ngwaahịa n'ime ụbọchị 90 (nnyocha nsochi)",
      "Ndị na-amụ ihe ma ọ bụ otu nwetara nkwekọrịta inye ngwaahịa ma ọ bụ nkwekọrịta outgrower n'ime ọnwa isii",
      "Ndị na-amụ ihe na-edebe ndekọ ọgwụ na owuwe nwere nọmba lot maka oge ihe ọkụkụ zuru ezu",
      "Ndị na-amụ ihe ma ọ bụ otu malitere ma ọ bụ mechaa nnyocha onwe maka asambodo, ma ọ bụ nweta asambodo"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị (smartphone ga-enyere aka) na akwụkwọ ndetu maka ndekọ",
      "Ezigbo nkọwa ihe onye na-azụ chọrọ ma ọ bụrụ na ọ ga-ekwe omume (jụọ ụlọ ahịa ukwu, onye na-emezi nri ma ọ bụ onye na-ere na mba ọzọ dị nso)",
      "Akara (label) ọgwụ ahụhụ ndị na-amụ ihe na-eji, iji gụọ ihe nchebe na oge nchere tupu owuwe",
      "Nhọrọ: ndepụta nlele GLOBALG.A.P. n'efu site na globalgap.org",
      "Ihe dị ka nkeji 90 n'ozuzu, n'oge nkenke, gbakwunyere oge ịkpọtụrụ ndị na-azụ na ụlọ ọrụ"
    ],
    facilitatorNotes: [
      "Mee ihe ọmụmụ a na otu ndị ọrụ ugbo mgbe ọ bụla o kwere omume: ole, ndekọ na asambodo otu na-arụ ọrụ nke ọma ọnụ.",
      "Bute ezigbo akara ọgwụ ahụhụ ma mee omume ịchọta ihe nchebe na oge nchere tupu owuwe; enyela ọnụọgụ dose ma ọ bụ oge nchere n'onwe gị mgbe ọ bụla.",
      "Kpọọ onye na-azụ, onye na-ere na mba ọzọ ma ọ bụ ụlọ ọrụ na-enye asambodo ka ha kwuo ihe ha na-enyocha; rịọ ha nkọwa ihe a chọrọ dị ka ọmụmaatụ.",
      "Lelee iwu ugbu a na AFA na KEPHIS (Kenya), NEPC (Naịjirịa), GEPA (Ghana) na ụlọ ọrụ nchekwa osisi nke mba gị tupu nzukọ ahụ; iwu na ụgwọ na-agbanwe.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ; mee egwuregwu nzukọ ya na onye na-azụ ebe 'onye na-azụ' ahụ na-arịọ ole karịrị ihe otu ahụ nwere ike inye."
    ]
  }
};
