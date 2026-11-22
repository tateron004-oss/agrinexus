"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-extension-farmer-trainer.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_FFS = { name: "FAO Global Farmer Field School Platform: nkọwa n'ozuzu (ụlọ akwụkwọ ndị ọrụ ugbo n'ubi)", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE: Farm Business Advisors (ndị ndụmọdụ azụmahịa ugbo)", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ: Sustainable Smallholder Agribusiness (Farmer Business School, West na Central Africa)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF: Ụzọ ndị nkuzi ọrụ ugbo afọ ofufo na East Africa", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "National Agricultural Extension and Research Liaison Services (NAERLS), Nigeria", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const PCPB = { name: "Pest Control Products Board (Kenya): ọgwụ e debanyere aha", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria): ndebanye aha ọgwụ ugbo (agrochemicals)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya): nchebe ozi nzuzo", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC): nchebe ozi nzuzo", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer-ig",
  lang: "ig",
  translationOf: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Ịghọ Onye Nkuzi Ndị Ọrụ Ugbo: Ndụmọdụ Ugbo (Extension) na Ndị Ndụmọdụ Azụmahịa Ugbo",
  skills: "Ịmata ọrụ dị iche iche na ndụmọdụ ugbo, Ịhazi nkuzi gosi-nwaa-kpaa nkata, Iduzi ubi ngosi na nnọkọ ụlọ akwụkwọ n'ubi, Inye ndụmọdụ n'ụzọ kwesịrị ekwesị na iziga onye ọkachamara, Ịkpata ego n'ụzọ ziri ezi site n'ihe ọrụ ugbo na ọrụ, Idebe ndekọ nkuzi",
  outcome: "ịhazi na iduzi obere ụbọchị nkuzi maka ndị ọrụ ugbo n'obodo gị: nkuzi a na-eji aka eme, nke dabere na gosi, nwaa na kpaa nkata; ubi ngosi na-atụnyere omume a na-eme mgbe niile na nke ka mma; ndụmọdụ eziokwu nke maara mgbe ọ ga-eziga onye ọkachamara; na ndekọ ndị ị kuziri na ihe gbanwere.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo chọrọ ịkụzi ndị agbata obi ha: ndị isi ọrụ ugbo (lead farmers), ndị nkuzi ọrụ ugbo afọ ofufo, ndị chọrọ ịghọ Farmer (ma ọ bụ Farm) Business Advisors, ndị ntorobịa na-azụ ahịa ugbo, ndị isi otu mmekọ (cooperative) na ndị ọhụrụ n'ọrụ ndụmọdụ ugbo na Kenya, Nigeria, Ghana, Côte d'Ivoire, Cameroon na Africa niile.",
    "Ị ga-amụta otu ndụmọdụ ugbo (extension) si arụ ọrụ na ebe ị dabara, otu ndị okenye si amụta ihe nke ọma, otu esi eduzi ubi ngosi na nnọkọ ụlọ akwụkwọ ndị ọrụ ugbo n'ubi, otu esi ahazi obere nkuzi, otu esi eji ekwentị na vidiyo eru ọtụtụ ndị ọrụ ugbo, otu esi enye ndụmọdụ n'ụzọ kwesịrị ekwesị na mgbe ị ga-eziga onye ọkachamara, otu esi akpata ego n'ụzọ ziri ezi site n'ire ihe ọrụ ugbo na ọrụ, na otu esi edebe ndekọ ndị ị kuziri na ihe gbanwere.",
    "Ị ga-emecha site n'ide atụmatụ nkuzi na atụmatụ ubi ngosi maka ezi ụbọchị nkuzi n'obodo gị. Ọnụ ego niile bụ naanị ọmụmaatụ. Nkuzi ọ bụla na-ejedebe n'ọrụ; e nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Hazie ụbọchị nkuzi maka ndị ọrụ ugbo 15 ruo 25 n'obodo gị gbasara otu omume ị maara nke ọma (dịka ọmụmaatụ ịkọ ọka n'ahịrị ya na kompost, ichekwa mkpụrụ n'akpa na-anaghị ekwe ikuku ịbanye (hermetic), ma ọ bụ ịgba ọkụkọ ọgwụ mgbochi site n'aka dọkịta anụmanụ). Dee: (1) atụmatụ nkuzi nke nkeji 60 ruo 90 na-agbaso gosi, nwaa, kpaa nkata, ya na otu nka ahụ, ihe a ga-eji, oge nke ọ bụla, na otu ị ga-esi lelee na onye ọrụ ugbo ọ bụla nwere ike ime ya; (2) atụmatụ ubi ngosi nwere ubi abụọ dị n'akụkụ ibe ha (omume a na-eme mgbe niile na omume ọhụrụ), otu nha, e dere aha ha, ya na ihe ị ga-edekọ na ụbọchị nleta ubi; (3) ndepụta ndị ị ga-eziga mmadụ (dọkịta anụmanụ, ọfịs ndụmọdụ ugbo, ụlọ ọrụ na-ahụ maka ihe ọrụ ugbo) na ihe ị gaghị enye ndụmọdụ na ya; (4) akwụkwọ ndekọ nkuzi nwere nkwenye na ụbọchị nsochi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi ọrụ ugbo, ndị nkuzi ọrụ ugbo afọ ofufo, ndị chọrọ ịghọ Farmer ma ọ bụ Farm Business Advisors, ndị ntorobịa na-azụ ahịa ugbo, ndị isi otu mmekọ na ndị ọhụrụ n'ọrụ ndụmọdụ ugbo na Africa niile, gụnyere Kenya, Nigeria, Ghana, Côte d'Ivoire na Cameroon. Ọtụtụ n'ime ha bụ ndị ọrụ ugbo a na-asọpụrụ nwere nka n'ọrụ aka, mana ha amụtabeghị otu esi akụzi ma ọ bụ enye ndụmọdụ.",
    startingPoint: "Ha maara ịkọ ihe ubi ma ọ bụ ịzụ anụmanụ nke ọma, ha na-enyekarịkwa ndị agbata obi ha ndụmọdụ n'ụzọ nkịtị. Ọ bụ mmadụ ole na ole hazirila nkuzi, guzobe ubi ntụnyere ziri ezi, dekọọ ndị ha kuziri, ma ọ bụ chee echiche banyere ebe ndụmọdụ ha kwesịrị ịkwụsị. Ụfọdụ na-ere ihe ọrụ ugbo ma ha amaghị otu esi eme ya n'ụzọ ziri ezi.",
    gap: "Ndị ọrụ ndụmọdụ ugbo dị ntakịrị nke ukwuu ma e jiri ha tụnyere ọnụ ọgụgụ ndị ọrụ ugbo, ya mere ndị nkuzi ọrụ ugbo na ndị ndụmọdụ na-ebu ọtụtụ ibu ahụ. Ọ bụrụ na ha enweghị nka nkuzi, oke eziokwu na ndekọ, enyemaka ha anaghị arụ ọrụ nke ọma, ọ nwekwara ike imebi ihe (ọgwụ ezighi ezi, ngwaahịa e debanyeghị aha, ịmanye mmadụ ịzụ ihe). Ndị na-amụ ihe kwesịrị ịkụzi n'ụzọ ga-adịgide, nye ndụmọdụ n'enweghị nsogbu, kpata ego n'ụzọ ziri ezi, ma gosi ihe si na ya pụta.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: smartphone nkịtị; ndị ọrụ ugbo ha na-akụzi nwere ike inwe naanị ekwentị nkịtị",
      "Ebe nkuzi: a na-akụzi n'ubi, nwere ngwaọrụ ole na ole, ọ dịghịkwa projektọ",
      "Nchekwa: ọ dịghị ọnụọgụ ọgwụ, ọgwụ mgbochi ma ọ bụ homonụ ọ bụla, ọ dịghịkwa oge nchere (withdrawal period); naanị ọgwụ ahụhụ e debanyere aha, dị ka akara ya si kwuo",
      "Ego: ọnụ ego niile bụ ọmụmaatụ; ndụmọdụ banyere ịkpata ego bụ maka ime ihe n'ụzọ ziri ezi, ọ bụghị itinye ego n'azụmahịa",
      "Iwu nchebe ozi nzuzo nke mba ọ bụla na-echebe ozi nzuzo ndị ọrụ na ndị ọrụ ugbo"
    ],
    prerequisites: "Ahụmịhe n'ọrụ aka na opekata mpe otu ihe ubi ma ọ bụ ụdị anụmanụ. Ihe ọmụmụ gbasara ihe ubi ma ọ bụ anụmanụ n'ime ndepụta a ga-enyere gị aka ịkwado ihe ị ga-akụzi."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndị na-akwado ndị ọrụ ugbo n'ógbè gị", action: "ịkọwa ọrụ onye isi ọrụ ugbo, Farmer Business Advisor na onye ọrụ ndụmọdụ ugbo (extension agent), na ndị ị ga-ejikọ aka na ha", standard: "na-akpọ aha otu onye ma ọ bụ otu ọfịs n'obodo maka nke ọ bụla ebe ha dị" },
    { id: "O2", condition: "Mgbe e nyere gị otu omume ị maara nke ọma", action: "ịhazi nkuzi nkeji 60 ruo 90 na-agbaso gosi, nwaa, kpaa nkata", standard: "nwere otu nka doro anya, oge, ihe a ga-eji, na nlele na onye ọrụ ugbo ọ bụla nwere ike ime ya" },
    { id: "O3", condition: "Maka omume ị chọrọ ka ndị ọrụ ugbo nabata", action: "ịhazi ubi ngosi na-atụnyere omume a na-eme mgbe niile na omume ọhụrụ", standard: "nwere ubi otu nha, e dere aha ha, e dekọrọ ha, a na-elekwa ha n'ụbọchị a kara aka" },
    { id: "O4", condition: "Mgbe onye ọrụ ugbo jụrụ ndụmọdụ karịrị ihe a kụziri gị", action: "inye naanị ndụmọdụ a kụziri gị ma ziga onye ọrụ ugbo ahụ n'aka ezi onye ọkachamara", standard: "na-eji ndepụta e dere ede, na-enyeghịkwa ọnụọgụ ọgwụ ma ọ bụ na-atụ aro ọgwụ ahụhụ e debanyeghị aha mgbe ọ bụla" },
    { id: "O5", condition: "Ọ bụrụ na ị na-ere ihe ọrụ ugbo ma ọ bụ ọrụ nye ndị ọrụ ugbo ị na-akụzi", action: "ịkọwa otu ị na-esi akpata ego na iwu ziri ezi ị na-agbaso", standard: "nwere ọnụ ahịa e dere ede, na-ekwupụta kọmịshọn, na-amanyeghịkwa onye ọ bụla ịzụ ihe" },
    { id: "O6", condition: "Mgbe nkuzi ọ bụla gasịrị", action: "idekọ ndị ị kuziri, ihe ị kuziri ha, na ihe si na ya pụta", standard: "na nkwenye ha, na-echebe ya n'nzuzo, ma na-esochi ha opekata mpe otu ugboro" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkụzi ndị ọrụ ugbo ka ọ dịgide",
      lessons: [
        {
          title: "Ndị isi ọrụ ugbo, Farmer Business Advisors na ndị ọrụ ndụmọdụ ugbo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọwaa ọrụ dị iche iche na ndụmọdụ ugbo ma kpọọ aha ndị ị ga-ejikọ aka na ha.",
          text: [
            "Ndụmọdụ ugbo (extension) pụtara inyere ndị ọrụ ugbo aka ịmụta na iji omume ka mma. Ndị ọrụ ndụmọdụ ugbo nke gọọmentị (na Nigeria, Agricultural Development Programmes nke steeti, nke NAERLS na-akwado; na Kenya, ndị ọrụ ugbo nke county na-arụkọ ọrụ na ụlọ ọrụ nchọpụta dị ka KALRO) bụ ndị ndụmọdụ a zụrụ azụ, mana onye ọ bụla n'ime ha na-elekọta ọtụtụ ndị ọrụ ugbo. Ya mere ndị ọrụ ugbo n'onwe ha na-ebu ọtụtụ ọrụ nkuzi.",
            "Onye isi ọrụ ugbo (lead farmer) ma ọ bụ onye nkuzi ọrụ ugbo afọ ofufo bụ onye ọrụ ugbo a na-asọpụrụ nke na-eme ngosi ma na-akụzi ndị agbata obi ya; ọtụtụ mgbe, otu atụmatụ (project) ma ọ bụ ọfịs ndụmọdụ ugbo zụrụ ya ma na-akwado ya. Na East Africa, ICRAF na ndị mmekọ ya ejirila ndị nkuzi ọrụ ugbo afọ ofufo n'ọtụtụ ebe, dịka ọmụmaatụ n'ịzụ ehi mmiri ara; nnyocha e mere na Uganda chọpụtara na ihe ọmụma ndị ọrụ ugbo, mmiri ara ehi ha na ego ha nwetara ka mma.",
            "Farm Business Advisor (FBA), a na-akpọkwa Farmer Business Advisor, bụ onye azụmahịa n'obodo na-ere ihe ọrụ ugbo ma na-enye ndị ọrụ ugbo nọ nso ndụmọdụ, ma na-akpata ego site na kọmịshọn na ụgwọ ọrụ. iDE na-azụ FBA na Zambia na Mozambique; onye ọ bụla na-elekọta ihe dị ka ndị ọrụ ugbo 80 ruo 120. Na West na Central Africa, Farmer Business School nke GIZ azụọla ndị na-akọ koko na ihe oriri na Côte d'Ivoire, Ghana, Togo, Nigeria na Cameroon nka azụmahịa ugbo, na-arụkọ ọrụ na ndị ndụmọdụ ugbo. Aha ọ bụla ị na-aza, ị na-enyere onye ọrụ ndụmọdụ ugbo aka; ị naghị anọchi ya."
          ],
          steps: ["Depụta ndị na-akwado ndị ọrụ ugbo n'ógbè gị: ọfịs ndụmọdụ ugbo, atụmatụ (projects), otu mmekọ, ụlọ ahịa ọgwụ ugbo (agrovets).", "Kpebie ọrụ dabara gị: onye isi ọrụ ugbo, FBA, ma ọ bụ ha abụọ.", "Hụ onye ọrụ ndụmọdụ ugbo nọ n'obodo gị ma kọwaara ya ihe ị chọrọ ime.", "Dee otu onye ị ga-akpọ maka ọrụ ọ bụla na mgbe ị ga-agwa ya okwu ọzọ."],
          words: [["Ndụmọdụ ugbo (Extension)", "ọrụ na-enyere ndị ọrụ ugbo aka ịmụta na iji omume ka mma."], ["Onye isi ọrụ ugbo (Lead farmer)", "onye ọrụ ugbo a na-asọpụrụ nke na-eme ngosi ma na-akụzi ndị agbata obi ya, ọtụtụ mgbe na nkwado atụmatụ ma ọ bụ ọfịs ndụmọdụ ugbo."], ["Farm (ma ọ bụ Farmer) Business Advisor (FBA)", "onye azụmahịa n'obodo na-ere ihe ọrụ ugbo ma na-enye ndị ọrụ ugbo nọ nso ndụmọdụ maka kọmịshọn ma ọ bụ ụgwọ ọrụ."]],
          slides: [
            { title: "Ndị ọrụ ndụmọdụ ugbo", bullets: ["Ndị ndụmọdụ gọọmentị a zụrụ azụ", "Nigeria: ADPs, NAERLS; Kenya: ndị ọrụ county, KALRO", "Onye ọ bụla na-elekọta ọtụtụ ndị ọrụ ugbo"] },
            { title: "Ndị isi ọrụ ugbo na ndị nkuzi afọ ofufo", bullets: ["Ha na-eme ngosi, na-akụzi ndị agbata obi", "A na-eji ha n'ọtụtụ ebe na East Africa (ICRAF, ehi mmiri ara)"] },
            { title: "Farm Business Advisors", bullets: ["Ndị azụmahịa n'obodo: ihe ọrụ ugbo na ndụmọdụ", "iDE: Zambia, Mozambique; ndị ọrụ ugbo 80-120 kwa onye", "GIZ Farmer Business School: West na Central Africa"] },
            { title: "Rụkọọ ọrụ ọnụ", bullets: ["Ị na-enyere onye ọrụ ndụmọdụ ugbo aka", "Buru ụzọ hụ ọfịs dị n'obodo gị"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Mee tebụl nke ndị na-akwado ndị ọrụ ugbo n'ógbè gị: ọfịs ndụmọdụ ugbo, atụmatụ ma ọ bụ otu mmekọ ọ bụla, na ụlọ ahịa ọgwụ ugbo ma ọ bụ onye na-ere ihe ọrụ ugbo kacha nso. Dee ọrụ ị ga-arụ (onye isi ọrụ ugbo, FBA ma ọ bụ ha abụọ) na otu onye ị ga-akpọ maka ọrụ ọ bụla.",
          youCanNow: "ịkọwa ọrụ dị iche iche na ndụmọdụ ugbo na ebe ị dabara.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ isi ihe dị iche n'etiti Farm Business Advisor na onye isi ọrụ ugbo afọ ofufo?", options: ["FBA na-akpata ego site n'ire ihe ọrụ ugbo na ọrụ", "FBA bụ onye ọrụ gọọmentị", "FBA anaghị enye ndụmọdụ mgbe ọ bụla", "FBA na-arụ ọrụ naanị n'obodo mepere emepe"], answer: 0, why: "FBA bụ ndị azụmahịa n'obodo na-akpata ego site na kọmịshọn na ụgwọ ọrụ." },
            { objective: "O1", q: "Ị chọrọ ịmalite ịkụzi ndị agbata obi gị. Onye ka ị ga-ebu ụzọ hụ?", options: ["Onye na-azụ ihe n'obodo mepere emepe", "Ụlọ ọrụ redio", "Onye ọrụ ndụmọdụ ugbo nọ n'obodo gị", "Ọ dịghị onye; naanị malite"], answer: 2, why: "Ịrụkọ ọrụ na ndụmọdụ ugbo na-eme ka ndụmọdụ gị bụrụ nke ọhụrụ ma na-ewulite nkwado." }
          ]
        },
        {
          title: "Otu ndị okenye si amụta ihe, na ịhazi obere nkuzi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hazie nkuzi nkeji 60 ruo 90 na-agbaso gosi, nwaa, kpaa nkata.",
          text: [
            "Ndị ọrụ ugbo bụ ndị okenye na-amụta ihe nke ọma site n'ime ya, n'aka ndị ha tụkwasịrị obi, banyere nsogbu ha nwere ugbu a. Ha nwere ahụmịhe: sọpụrụ ya ma jụọ ihe ha na-eme ugbu a. A na-echefu okwu ogologo; a na-echeta ihe mmadụ ji aka ya mee. Jiri nzọụkwụ atọ: gosi (ị na-egosi nka ahụ nwayọọ, na-akọwa ihe kpatara ya), nwaa (onye ọrụ ugbo ọ bụla na-eme ya mgbe ị na-ele ma na-enye aka), kpaa nkata (otu ahụ na-ekwu ihe ha hụrụ, ihe siri ike, na ma ọ ga-arụ ọrụ n'ubi ha).",
            "Kụzie otu nka n'otu nnọkọ, dị ka \"tụọ ma kọọ ọka n'ahịrị, otu aka kompost n'olulu ọ bụla\", ọ bụghị \"ihe niile gbasara ọka\". Hazie ya: nka ahụ; ihe onye ọ bụla ga-eji nwaa; oge (dịka ọmụmaatụ nkeji 10 nnabata na ihe unu na-eme ugbu a, 15 gosi, 30 nwaa, 20 kpaa nkata, 10 atụmatụ na nlele); na otu ị ga-esi lelee na onye ọrụ ugbo ọ bụla nwere ike ime ya, dị ka ilele onye ọ bụla ka ọ kọọ olulu atọ nke ọma.",
            "Họrọ oge dabara ndị ọrụ ugbo (mgbe ọrụ ụtụtụ gwụrụ, ọ bụghị n'ụbọchị ahịa), ebe ha nwere ike iru, na asụsụ ha na-asụ. Gụnye ndị inyom na ndị ntorobịa: jụọ onye na-arụ ọrụ ahụ n'ụlọ ma kpọọ ha. Mee ka otu ahụ pere mpe ka onye ọ bụla nwee ike ịnwa, ihe dị ka mmadụ 15 ruo 25 kwa onye nkuzi."
          ],
          steps: ["Họrọ otu nka ndị ọrụ ugbo chọrọ ugbu a.", "Hazie gosi, nwaa na kpaa nkata, ya na oge.", "Depụta ihe a ga-eji ka onye ọ bụla nwee ike ịnwa.", "Kpebie otu ị ga-esi lelee na onye ọrụ ugbo ọ bụla nwere ike ime ya.", "Họrọ oge, ebe na asụsụ dabara ndị ọrụ ugbo."],
          words: [["Gosi, nwaa, kpaa nkata", "ụzọ nkuzi: gosi ya, kwe ka onye ọ bụla mee ya, wee kparịta ya."], ["Atụmatụ nkuzi (Lesson plan)", "obere atụmatụ e dere ede nke ihe ị ga-akụzi, otu, jiri gịnị, na oge akụkụ ọ bụla ga-ewe."], ["Ịmụta site n'ime", "ịmụta nka site n'iji aka gị mee ya."]],
          slides: [
            { title: "Otu ndị okenye si amụta ihe", bullets: ["Site n'ime ya, n'aka ndị ha tụkwasịrị obi", "Banyere nsogbu ha nwere ugbu a", "Sọpụrụ ihe ha maraworị"] },
            { title: "Gosi, nwaa, kpaa nkata", bullets: ["Gosi: gosi ya nwayọọ, kwuo ihe kpatara ya", "Nwaa: onye ọ bụla na-eme ya", "Kpaa nkata: gịnị siri ike, ọ ga-arụ ọrụ ebe a?"] },
            { title: "Otu nka n'otu nnọkọ", bullets: ["Ọmụmaatụ: ahịrị nwere kompost n'olulu ọ bụla", "Oge, ihe a ga-eji, nlele maka onye ọ bụla"] },
            { title: "Mee ka ọ dị mfe ịbịa", bullets: ["Oge na ebe dabara", "Asụsụ ndị ọrụ ugbo n'onwe ha", "Kpọọ ndị inyom na ndị ntorobịa"] }
          ],
          tryIt: "Dee atụmatụ nkuzi maka otu nka ị maara nke ọma: nka ahụ n'otu ahịrịokwu, ihe a ga-eji, oge gosi-nwaa-kpaa nkata maka nkeji 60 ruo 90, na otu ị ga-esi lelee na onye ọrụ ugbo ọ bụla nwere ike ime ya.",
          youCanNow: "ịhazi obere nkuzi na-akụzi otu nka site na gosi, nwaa na kpaa nkata.",
          quickCheck: [
            { objective: "O2", q: "Kedu nka kacha mma maka otu nnọkọ nkeji 90?", options: ["Ihe niile gbasara ọka", "Ahụike anụmanụ niile", "Ọrụ ugbo n'ozuzu", "Ịkọ ọka n'ahịrị, otu aka kompost n'olulu ọ bụla"], answer: 3, why: "Otu nka doro anya nwere ike igosi, mee ma lelee n'otu nnọkọ." },
            { objective: "O2", q: "Gịnị na-eme na nzọụkwụ \"nwaa\"?", options: ["Onye nkuzi na-ekwu okwu ogologo", "Onye ọrụ ugbo ọ bụla na-eme nka ahụ mgbe onye nkuzi na-ele ma na-enye aka", "Ndị ọrụ ugbo na-ala ụlọ", "Otu ahụ na-ere ihe ọrụ ugbo"], answer: 1, why: "Iji aka ha mee ya bụ otu ndị okenye si echeta." }
          ]
        },
        {
          title: "Ubi ngosi na ụlọ akwụkwọ ndị ọrụ ugbo n'ubi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Hazie ubi ngosi na-atụnyere omume a na-eme mgbe niile na nke ọhụrụ n'ụzọ ziri ezi.",
          text: [
            "Ndị ọrụ ugbo na-ekwere ihe ha hụrụ n'ubi yiri nke ha. Ubi ngosi (demonstration plot) na-egosi omume ọhụrụ n'akụkụ nke a na-eme mgbe niile. Họrọ ebe a na-ahụ anya nso ụzọ, nwere ala dị otu. Kaa ubi abụọ otu nha (dịka ọmụmaatụ 10 m x 10 m nke ọ bụla): ubi A, omume a na-eme mgbe niile; ubi B, omume ọhụrụ. Gbanwee naanị otu ihe n'etiti ha, dị ka ụdị mkpụrụ, oghere n'etiti osisi ma ọ bụ kompost, ka ihe dị iche nwee otu ihe kpatara ya. Tinye akara doro anya n'ubi nke ọ bụla.",
            "Debe ndekọ site na mbido: ụbọchị a kọrọ, ihe ọrụ ugbo na ọrụ aka maka ubi nke ọ bụla, foto kwa izu abụọ, nsogbu, na ihe owuwe ihe ubi a tụrụ iche iche. Hazie ụbọchị nleta ubi n'oge ndị dị mkpa (mgbe ha pụtara, mgbe ha na-eme ifuru, n'oge owuwe ihe ubi) ka ndị ọrụ ugbo hụ ma tụnyere. Kwuo eziokwu ma ọ bụrụ na omume ọhụrụ ahụ emeghị nke ọma: nke ahụ bụkwa ihe ọmụmụ bara uru.",
            "Farmer Field School (FFS), ụlọ akwụkwọ ndị ọrụ ugbo n'ubi, na-aga n'ihu karịa. FAO kọwara ya dị ka otu ndị ọrụ ugbo na-ezukọ mgbe niile n'ubi n'oge niile nke otu oge ịkọ ihe ruo owuwe ihe ubi, nke onye nduzi a zụrụ azụ na-eduzi. Ha na-atụnyere ubi (omume obodo na omume ka mma a tụrụ aro) ma na-eme Agro-Ecosystem Analysis: n'obere otu, ha na-ele osisi, ahụhụ, anụ na-eri ahụhụ ndị ahụ, ala na ihu igwe, na-ese ihe ha hụrụ, ma na-ekpebi ọnụ ihe ha ga-eme. E jirila FFS mee ihe n'ihe karịrị mba 90. Ọ bụrụ na ị chọrọ iduzi otu, jụọ ọfịs ndụmọdụ ugbo gị ma ọ bụ otu atụmatụ maka ọzụzụ ndị nduzi."
          ],
          steps: ["Họrọ ebe a na-ahụ anya nwere ala dị otu.", "Kaa ubi abụọ otu nha: omume a na-eme mgbe niile na omume ọhụrụ.", "Gbanwee naanị otu ihe n'etiti ha; dee aha ha abụọ.", "Dekọọ ụbọchị, ihe ọrụ ugbo, ọrụ aka, foto na ihe owuwe ihe ubi maka ubi nke ọ bụla.", "Hazie ụbọchị nleta ubi mgbe ha pụtara, mgbe ha na-eme ifuru na n'oge owuwe ihe ubi."],
          words: [["Ubi ngosi (Demonstration plot)", "obere ubi na-egosi otu omume ka ndị ọrụ ugbo hụ ka ọ na-arụ ọrụ."], ["Farmer Field School (FFS)", "otu na-ezukọ mgbe niile n'ubi n'otu oge ịkọ ihe, nke onye nduzi na-eduzi, iji mụta ihe site n'ile anya na ịnwale."], ["Agro-Ecosystem Analysis (AESA)", "ile osisi, ahụhụ, anụ na-eri ahụhụ, ala na ihu igwe n'ubi, wee kpebie ọnụ ihe a ga-eme."]],
          slides: [
            { title: "Ịhụ bụ ikwere", bullets: ["Omume a na-eme mgbe niile n'akụkụ omume ọhụrụ", "Otu nha, a na-ahụ ya anya, e dere aha"] },
            { title: "Ntụnyere ziri ezi", bullets: ["Gbanwee naanị otu ihe", "Ala dị otu, otu nlekọta n'ihe ndị ọzọ"] },
            { title: "Dekọọ ma gosi", bullets: ["Ụbọchị, ihe ọrụ ugbo, ọrụ aka, foto", "Tụọ ihe owuwe ihe ubi maka ubi nke ọ bụla", "Ụbọchị nleta ubi n'oge ndị dị mkpa"] },
            { title: "Farmer Field School (FAO)", bullets: ["Na-ezukọ mgbe niile n'oge ịkọ ihe niile", "Onye nduzi a zụrụ azụ, tụnyere ubi", "Agro-Ecosystem Analysis, kpebie ọnụ"] }
          ],
          sources: [FAO_FFS],
          tryIt: "See nhazi ubi ngosi maka nka ị hazịrị na Nkuzi 2: ubi abụọ otu nha, otu ihe dị iche, akara, ihe ị ga-edekọ, na ụbọchị nleta ubi atọ.",
          youCanNow: "ịhazi ubi ngosi ziri ezi na ịkọwa otu ụlọ akwụkwọ ndị ọrụ ugbo n'ubi si arụ ọrụ.",
          quickCheck: [
            { objective: "O3", q: "N'ubi ngosi gị, ubi B nwere ụdị mkpụrụ ọhụrụ NA kompost NA oghere sara mbara. Gịnị bụ nsogbu?", options: ["Ọ dịghị; mgbanwe ka ukwuu ka mma", "Ubi ndị ahụ pere mpe nke ukwuu", "Ị gaghị ama mgbanwe mere ka ihe dị iche", "Ndị ọrụ ugbo anaghị achọ akara"], answer: 2, why: "Gbanwee otu ihe ka ihe dị iche nwee otu ihe kpatara ya." },
            { objective: "O3", q: "Gịnị ka ndị ọrụ ugbo nọ n'ụlọ akwụkwọ ndị ọrụ ugbo n'ubi nke FAO na-eme na Agro-Ecosystem Analysis?", options: ["Ha na-ele ubi n'obere otu ma kpebie ọnụ ihe ha ga-eme", "Ha na-ege naanị okwu nkuzi", "Ha na-azụ ihe ọrụ ugbo", "Ha na-ejupụta fọm mbinye ego"], answer: 0, why: "AESA bụ ile osisi, ahụhụ, ala na ihu igwe, wee kpebie dị ka otu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkụzi ndị ọrụ ugbo ka ọ dịgide",
        questions: [
          { objective: "O1", q: "Gịnị mere ndị nkuzi ọrụ ugbo ji dị mkpa nke ukwuu na ndụmọdụ ugbo n'Africa?", options: ["A zụghị ndị ọrụ ndụmọdụ ugbo", "Onye ọrụ ndụmọdụ ugbo ọ bụla na-elekọta ọtụtụ ndị ọrụ ugbo", "Ndị ọrụ ugbo anaghị achọ ndị ọkachamara", "Iwu chọrọ ha"], answer: 1, why: "Ndị nkuzi ọrụ ugbo na-enyere ndụmọdụ ugbo aka iru ọtụtụ mmadụ." },
          { objective: "O1", q: "Na mba ndị ole ka Farmer Business School nke GIZ rụrụ ọrụ na ndị na-akọ koko?", options: ["Naanị Kenya", "Naanị n'Asia", "Naanị Zambia na Mozambique", "Côte d'Ivoire, Ghana, Togo, Nigeria na Cameroon"], answer: 3, why: "Atụmatụ ahụ gụnyere mba ise ndị ahụ dị na West na Central Africa." },
          { objective: "O2", q: "Kedu nzọụkwụ atọ nke ụzọ nkuzi n'ihe ọmụmụ a?", options: ["Gosi, nwaa, kpaa nkata", "Kwuo, kwuo, nwalee", "Gụọ, dee, bịanye aka", "Zụta, ree, kwụọ ụgwọ"], answer: 0, why: "Gosi ya, mee ya, wee kparịta ya." },
          { objective: "O2", q: "Kedu otu ị ga-esi mara na nkuzi rụrụ ọrụ?", options: ["Gụọ ọnụ ọgụgụ ndị bịara", "Jụọ ma ọ tọrọ ha ụtọ", "Lee onye ọrụ ugbo ọ bụla ka ọ na-eme nka ahụ nke ọma", "Nye ha akwụkwọ ogologo"], answer: 2, why: "Ule nkuzi nka bụ na onye ọrụ ugbo ọ bụla nwere ike ime nka ahụ." },
          { objective: "O3", q: "Ebee ka e kwesịrị itinye ubi ngosi?", options: ["N'azụ ụlọ ebe a na-adịghị ahụ ya", "N'ebe a na-ahụ anya nso ụzọ, nwere ala dị otu", "Naanị n'ala kacha njọ", "N'ebe dị anya n'ebe ndị ọrụ ugbo nọ"], answer: 1, why: "Ndị ọrụ ugbo ga-ahụrịrị ya, ala dị otu na-emekwa ka ntụnyere ziri ezi." }
        ]
      }
    },
    {
      name: "Isi 2: Inye ndụmọdụ, ịkpata ego na igosi ihe si na ya pụta",
      lessons: [
        {
          title: "Iru ndị ọrụ ugbo site n'ekwentị, na ịmata mgbe ị ga-eziga onye ọkachamara",
          objectives: ["O4"],
          minutes: 6,
          goal: "Nye naanị ndụmọdụ a kụziri gị ma ziga ndị ọrụ ugbo n'aka ezi onye ọkachamara.",
          text: [
            "Ekwentị na-enyere gị aka iru ọtụtụ ndị ọrụ ugbo n'etiti nleta. Jiri ekwentị gị see obere vidiyo (nkeji otu ruo abụọ) nke nzọụkwụ \"gosi\" ma kesaa ya n'otu WhatsApp; zipu ncheta site na SMS maka ndị ọrụ ugbo nwere ekwentị nkịtị; jiri ozi olu (voice notes) n'asụsụ obodo; mee obere oku otu tupu ụbọchị nleta ubi. Jụọ ikike tupu i see mmadụ ma ọ bụ ubi ha foto ma ọ bụ vidiyo, ma debe otu ahụ naanị maka okwu ọrụ ugbo.",
            "Ndụmọdụ nwere ike inyere aka ma ọ bụ imebi ihe. Nye naanị ndụmọdụ banyere ihe a kụziri gị na ihe ị hụrụ ka ọ na-arụ ọrụ. Enyela ọnụọgụ ọgwụ anụmanụ, ọgwụ mgbochi ma ọ bụ homonụ mgbe ọ bụla, ma enyekwala oge nchere (withdrawal period): kwuo \"soro ihe dọkịta anụmanụ na akara ọgwụ ahụ kwuru\". Tụọ aro naanị ọgwụ ahụhụ e debanyere aha na mba gị (dịka ọmụmaatụ na Pest Control Products Board nke Kenya ma ọ bụ NAFDAC nke Nigeria), nke a na-eji dị ka akara ya si kwuo, ya na uwe nchebe. Lelee ndepụta ụlọ ọrụ ndebanye aha ahụ ma ọ bụrụ na o doghị gị anya.",
            "Ziga ngwa ngwa mgbe ihe karịrị gị: anụmanụ na-arịa ọrịa ma ọ bụ na-anwụ na-aga n'aka dọkịta anụmanụ; ọnwụ mberede nke ezi ma ọ bụ ọkụkọ nwere ike ịbụ African Swine Fever ma ọ bụ avian flu (ọrịa ọkụkọ), nke iwu chọrọ ka a kọọ, ya mere gwa onye ọrụ ugbo ahụ ka ọ kọọrọ dọkịta anụmanụ ma ọ bụ ndị ọchịchị anụmanụ ozugbo ma ghara ibuga ma ọ bụ ree anụmanụ ndị ahụ. Ahụhụ ma ọ bụ ọrịa ihe ubi a na-amaghị na-aga n'ọfịs ndụmọdụ ugbo ma ọ bụ ụlọ ọrụ nchọpụta. Mbinye ego na nkwekọrịta na-aga n'aka onye ndụmọdụ a tụkwasịrị obi. Debe ndepụta e dere ede nwere aha na nọmba ekwentị, ma soro hụ ihe mere."
          ],
          steps: ["Kesaa obere vidiyo, ncheta SMS na ozi olu; jụọ ikike tupu i see vidiyo.", "Nye ndụmọdụ naanị banyere ihe a kụziri gị.", "Ọ dịghị ọnụọgụ ọgwụ ma ọ bụ oge nchere: naanị dọkịta anụmanụ na akara ọgwụ.", "Naanị ọgwụ ahụhụ e debanyere aha, dị ka akara ya si kwuo.", "Ziga ngwa ngwa site na ndepụta gị e dere ede, ma soro hụ ihe mere."],
          words: [["Iziga onye ọkachamara (Referral)", "iziga onye ọrụ ugbo n'aka onye ọkachamara nwere ike inye aka n'ihe karịrị nka gị."], ["Ọrịa a ga-akọrịrị (Notifiable disease)", "ọrịa iwu chọrọ ka a kọọrọ ndị ọchịchị anụmanụ, dị ka African Swine Fever ma ọ bụ avian flu."], ["Ọgwụ ahụhụ e debanyere aha", "ngwaahịa ụlọ ọrụ na-ahụ maka ya na mba ahụ kwadoro maka iji ya."]],
          slides: [
            { title: "Ekwentị na-eru ọtụtụ ndị ọrụ ugbo", bullets: ["Vidiyo nkeji 1-2 nke nzọụkwụ \"gosi\"", "Ncheta SMS, ozi olu, oku otu", "Jụọ tupu i see vidiyo"] },
            { title: "Nye ndụmọdụ n'ime ihe a kụziri gị", bullets: ["Ọ dịghị ọnụọgụ ọgwụ, ọgwụ mgbochi ma ọ bụ homonụ", "Naanị dọkịta anụmanụ na akara ọgwụ", "Ọgwụ ahụhụ e debanyere aha, dị ka akara si kwuo"] },
            { title: "Ziga ngwa ngwa", bullets: ["Anụmanụ na-arịa ọrịa: dọkịta anụmanụ", "Ọnwụ ezi ma ọ bụ ọkụkọ: kọọ ya ozugbo", "Nsogbu ihe ubi a na-amaghị: ndụmọdụ ugbo"] },
            { title: "Ndepụta ndị ị ga-eziga mmadụ", bullets: ["Aha na nọmba ekwentị", "Soro hụ ihe mere"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Dee ndepụta ndị ị ga-eziga mmadụ: dọkịta anụmanụ ma ọ bụ ọfịs anụmanụ kacha nso, ọfịs ndụmọdụ ugbo, ụlọ ọrụ ndebanye aha ọgwụ ahụhụ nke mba gị, na onye ndụmọdụ a tụkwasịrị obi maka ego na nkwekọrịta, ya na nọmba ekwentị. Wee dee ajụjụ atọ ị GAGHỊ aza n'onwe gị na onye ị ga-eziga ha.",
          youCanNow: "iru ndị ọrụ ugbo site n'ekwentị ma nye ndụmọdụ n'ime oke gị, na-eziga ihe fọdụrụ n'aka ezi onye ọkachamara.",
          quickCheck: [
            { objective: "O4", q: "Onye ọrụ ugbo jụrụ ole ọgwụ nje (antibiotic) ọ ga-enye ewu na-arịa ọrịa. Ị na-asị:", options: ["\"Nye ngaji abụọ kwa ụbọchị.\"", "\"Jiri nke ọ bụla kacha dị ọnụ ala.\"", "\"Nye ya okpukpu abụọ ka ọ dị mma.\"", "\"Kpọọ dọkịta anụmanụ ma soro akara ọgwụ ahụ; enweghị m ike inye ọnụọgụ ọgwụ.\""], answer: 3, why: "Ọnụọgụ ọgwụ na-esi n'aka dọkịta anụmanụ na akara ọgwụ, ọ bụghị n'aka onye nkuzi ọrụ ugbo." },
            { objective: "O4", q: "Ọtụtụ ezi n'otu obodo nwụrụ na mberede. Gịnị ka ị na-agwa ndị ọrụ ugbo?", options: ["Reenụ ndị fọdụrụ ngwa ngwa", "Kọọrọ dọkịta anụmanụ ma ọ bụ ndị ọchịchị anụmanụ ozugbo, unu ebugakwala ezi ndị ahụ", "Chere otu izu", "Rie anụ ahụ"], answer: 1, why: "Ọ nwere ike ịbụ African Swine Fever, ọrịa a ga-akọrịrị ozugbo." }
          ]
        },
        {
          title: "Ịkpata ego dị ka Farmer Business Advisor, n'ụzọ ziri ezi",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọwaa otu ị ga-esi akpata ego site n'ihe ọrụ ugbo na ọrụ, na iwu ziri ezi ị ga-agbaso.",
          text: [
            "FBA na-akpata ego site n'iwetara ndị ọrụ ugbo nọ anya n'ụlọ ahịa ihe ọrụ ugbo na ọrụ: kọmịshọn n'elu mkpụrụ, fatịlaịza, akpa nchekwa hermetic ma ọ bụ ngwaọrụ e rere; ụgwọ ọrụ dị ka ịgba ọgwụ na ngwaọrụ kwesịrị ekwesị, ịkọ ala, ịnara ala maka nnyocha, ịchịkọta ihe owuwe ihe ubi maka ndị na-azụ ya, ma ọ bụ idebe ndekọ. iDE kwuru na mmekọrịta ogologo oge FBA na obodo na-enye ya ezigbo ihe kpatara ọ ga-eji tụọ aro naanị ngwaahịa na-abara ndị ọrụ ugbo uru.",
            "Ime ihe n'ụzọ ziri ezi bụ ezigbo azụmahịa. Ree naanị ezi ngwaahịa e debanyere aha site n'aka ndị na-ebubata ihe nwere ikike (licence). Dee ọnụ ahịa gị ma gwa ndị ọrụ ugbo mgbe ị na-enweta kọmịshọn. Tụọ aro ihe onye ọrụ ugbo chọrọ, ọ bụghị ihe na-akwụ gị ụgwọ kacha; kwuo n'ụzọ doro anya mgbe azịza kacha mma bụ \"ọ dịghị ihe ị ga-azụ\". Amanyela mmadụ mgbe ọ bụla, erela ihe na mbinye ị maara na ha agaghị enwe ike ịkwụghachi, ma kewaa nkuzi na ire ihe: onye ọ bụla nwere ike ịbịa nkuzi ma ọ zụtara ma ọ zụtaghị.",
            "Mara ọnụ ọgụgụ gị. Naanị ọmụmaatụ: ọ bụrụ na ị na-enweta kọmịshọn XOF 500 kwa akpa ma ree akpa 120 n'otu oge, nke ahụ bụ XOF 60,000, tupu ụgwọ njem na oge gị. Debe ndekọ dị mfe nke ire ihe, kọmịshọn na ụgwọ ọrụ, ma lelee ma ndebanye aha azụmahịa ma ọ bụ ikike (licence) ọ bụla dị mkpa na mba gị maka ire ihe ọrụ ugbo, karịsịa ọgwụ ugbo (agrochemicals)."
          ],
          steps: ["Depụta ihe ọrụ ugbo na ọrụ ị nwere ike inye.", "Dee ọnụ ahịa gị na kọmịshọn gị n'elu nke ọ bụla.", "Dee iwu ziri ezi gị: ezi ngwaahịa, kwupụta kọmịshọn, amanyela onye ọ bụla, nkuzi ghere oghe maka mmadụ niile.", "Dekọọ ire ihe, kọmịshọn na ụgwọ ọrụ.", "Lelee iwu ndebanye aha na ikike (licence) maka ndị na-ere ihe ọrụ ugbo."],
          words: [["Kọmịshọn (Commission)", "ego onye na-ere ihe na-enweta maka ihe ọ bụla o rere, nke onye na-ebubata ihe na-akwụ."], ["Ụgwọ ọrụ (Service fee)", "ego a na-ana maka ime otu ọrụ, dị ka ịgba ọgwụ ma ọ bụ ịkọ ala."], ["Esemokwu ọdịmma (Conflict of interest)", "mgbe ihe na-akwụ gị ụgwọ kacha abụghị ihe kacha mma maka onye ị na-enye ndụmọdụ."]],
          slides: [
            { title: "Otu FBA si akpata ego", bullets: ["Kọmịshọn n'elu ihe ọrụ ugbo e rere", "Ụgwọ ọrụ: ịgba ọgwụ, ịkọ ala, ịchịkọta ihe owuwe", "Iwetara ndị ọrụ ugbo ihe ọrụ ugbo nso"] },
            { title: "Ime ihe ziri ezi bụ ezigbo azụmahịa", bullets: ["Naanị ezi ngwaahịa e debanyere aha", "Ọnụ ahịa e dere ede, kọmịshọn a kwupụtara", "Ndụmọdụ buru ụzọ, ire ihe esoro"] },
            { title: "Amanyela onye ọ bụla", bullets: ["\"Ọ dịghị ihe ị ga-azụ\" bụ azịza kwere ekwe", "Nkuzi ghere oghe maka mmadụ niile, ndị zụrụ ma ọ bụ ndị azụghị", "Erela na mbinye ndị mmadụ na-agaghị akwụghachi"] },
            { title: "Mara ọnụ ọgụgụ gị", bullets: ["Naanị ọmụmaatụ: XOF 500 x akpa 120 = XOF 60,000", "Wepụ ụgwọ njem na oge", "Lelee iwu ikike (licence)"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Dee ndetu azụmahịa FBA nke otu peeji: ihe ọrụ ugbo ma ọ bụ ọrụ atọ ị nwere ike inye, ọmụmaatụ ọnụ ahịa na kọmịshọn maka nke ọ bụla, ọmụmaatụ ego ị ga-enweta n'otu oge, na iwu ziri ezi gị ise.",
          youCanNow: "ịhazi otu ị ga-esi akpata ego dị ka FBA site n'ihe ọrụ ugbo na ọrụ ma na-echekwa ntụkwasị obi ndị ọrụ ugbo.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ iwu ziri ezi maka FBA?", options: ["Gwa ndị ọrụ ugbo mgbe ị na-enweta kọmịshọn", "Kụzie naanị ndị na-azụ ihe n'aka gị", "Manye ha ịzụ ngwaahịa nwere kọmịshọn kacha elu", "Ree ngwaahịa e debanyeghị aha ma ọ bụrụ na ọ dị ọnụ ala"], answer: 0, why: "Ikwupụta kọmịshọn na-eme ka ndụmọdụ bụrụ eziokwu ma na-ewulite ntụkwasị obi." },
            { objective: "O5", q: "Ihe ubi onye ọrụ ugbo achọghị fatịlaịza n'oge a. Ị kwesịrị:", options: ["Ree ya n'agbanyeghị", "Ekwula ihe ọ bụla ma ree obere akpa", "Gwa ya n'eziokwu na ọ dịghị mkpa ka ọ zụta ya", "Ajụ ileta ya ọzọ"], answer: 2, why: "Ntụkwasị obi ogologo oge bara uru karịa otu ihe a rere." }
          ]
        },
        {
          title: "Idebe ndekọ nkuzi na ịhazi ụbọchị nkuzi gị",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Debe akwụkwọ ndekọ nkuzi nwere nkwenye ma hazie ụbọchị nkuzi zuru ezu.",
          text: [
            "Ndekọ na-egosi ihe ọrụ gị rụzuru, na-enyere gị aka isochi ndị ọrụ ugbo, ọ bụkwa ihe atụmatụ, otu mmekọ na ndị were mmadụ n'ọrụ na-arịọ. Debe akwụkwọ ndekọ nkuzi (training register) maka nnọkọ ọ bụla: ụbọchị, ebe, isiokwu, aha onye ọrụ ugbo ọ bụla, nwoke ma ọ bụ nwaanyị, ọgbọ afọ (onye ntorobịa ma ọ bụ na ọ bụghị) na obodo, na nọmba ekwentị naanị ma ọ bụrụ na ha kwere. Dee ma onye ọrụ ugbo ọ bụla nwere ike ime nka ahụ mgbe nkuzi gwụrụ.",
            "Soro ha opekata mpe otu ugboro, dịka ọmụmaatụ otu ọnwa ka e mesịrị ma ọ bụ n'oge owuwe ihe ubi: hà jiri omume ahụ mee ihe, n'ala ha ruru ole ma ọ bụ anụmanụ ole, gịnị mekwara? Dekọọ ihe si n'ubi ngosi pụta maka ubi nke ọ bụla. Ka oge na-aga, ị nwere ike ikwu, dịka ọmụmaatụ, \"Akụziri m ndị ọrụ ugbo 60; 35 na-akọ n'ahịrị ugbu a; ihe ọka ha na-amị rịrị elu n'ozuzu\", nke ndekọ na-akwado. Echepụtala ọnụ ọgụgụ: ọ bụrụ na ị tụghị ya, kwuo ya.",
            "Jụọ ikike tupu i dekọọ ozi mmadụ, kọwaa ihe kpatara ya, ma debe akwụkwọ ndekọ ahụ n'nzuzo: n'akwụkwọ n'ebe dị nchebe ma ọ bụ n'ekwentị e kpọchiri akpọchi, ọ bụghị n'otu WhatsApp ọha. Kenya, Nigeria na mba ndị ọzọ nwere iwu nchebe ozi nzuzo. Ugbu a, jikọta ihe niile maka ụbọchị nkuzi gị: atụmatụ nkuzi, ubi ngosi, ndepụta ndị ị ga-eziga mmadụ, na akwụkwọ ndekọ a."
          ],
          steps: ["Mee akwụkwọ ndekọ: ụbọchị, ebe, isiokwu, aha, nwoke ma ọ bụ nwaanyị, ọgbọ afọ, obodo, ekwentị na nkwenye.", "Dee onye nwere ike ime nka ahụ mgbe nkuzi gwụrụ.", "Soro ha opekata mpe otu ugboro ma dekọọ ihe gbanwere.", "Dekọọ ihe si n'ubi ngosi pụta maka ubi nke ọ bụla.", "Debe akwụkwọ ndekọ ahụ n'nzuzo; buru ụzọ jụọ ikike."],
          words: [["Akwụkwọ ndekọ nkuzi (Training register)", "ndepụta ndị bịara nkuzi, ihe a kuziri ha, na ihe si na ya pụta."], ["Nsochi (Follow-up)", "ilele ma e mesịa ma ndị ọrụ ugbo jiri ihe ha mụtara mee ihe na ihe mere."], ["Nkwenye (Consent)", "ikike mmadụ nyere ka a dekọọ ma ọ bụ kesaa ozi ya."]],
          slides: [
            { title: "Ihe kpatara idebe ndekọ", bullets: ["Gosi ihe ọrụ gị rụzuru", "Soro ndị ọrụ ugbo", "Atụmatụ na ndị were mmadụ n'ọrụ na-arịọ ya"] },
            { title: "Akwụkwọ ndekọ nkuzi", bullets: ["Ụbọchị, ebe, isiokwu", "Aha, nwoke ma ọ bụ nwaanyị, ọgbọ afọ, obodo", "Ekwentị naanị na nkwenye; hà nwere ike ime ya?"] },
            { title: "Soro ha", bullets: ["Opekata mpe otu ugboro: otu ọnwa ma ọ bụ n'oge owuwe", "Hà jiri ya mee ihe? Gịnị mere?", "Echepụtala ọnụ ọgụgụ mgbe ọ bụla"] },
            { title: "Debe ya n'nzuzo", bullets: ["Jụọ ikike, kọwaa ihe kpatara ya", "Akwụkwọ n'ebe nchebe ma ọ bụ ekwentị e kpọchiri", "Ọ bụghị n'otu ọha"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Ọrụ ikpeazụ: hazie ụbọchị nkuzi gị. Dee atụmatụ nkuzi nkeji 60 ruo 90 (gosi, nwaa, kpaa nkata, ya na nka ahụ, ihe a ga-eji, oge na nlele), atụmatụ ubi ngosi (ubi abụọ otu nha e dere aha ha, otu ihe dị iche, ndekọ na ụbọchị nleta ubi), ndepụta ndị ị ga-eziga mmadụ na ihe ị gaghị enye ndụmọdụ na ya, na akwụkwọ ndekọ nkuzi nwere ahịrị nkwenye na ụbọchị nsochi.",
          youCanNow: "ịhazi ụbọchị nkuzi zuru ezu na idebe ndekọ na-egosi ndị ị kuziri na ihe gbanwere.",
          quickCheck: [
            { objective: "O6", q: "Tupu i dee nọmba ekwentị onye ọrụ ugbo n'akwụkwọ ndekọ gị, ị kwesịrị:", options: ["Tinye ya n'otu ahụ", "Jụọ ikike ya ma kọwaa ihe kpatara ya", "Detuo ya n'aka onye ọzọ", "Dee ya n'ajụghị"], answer: 1, why: "A chọrọ nkwenye iji dekọọ ozi nzuzo mmadụ." },
            { objective: "O6", q: "Ị tụghị ihe ubi a mịrị mgbe nkuzi gasịrị. N'akụkọ gị, ị kwesịrị:", options: ["Chepụta ọnụ ọgụgụ dị elu", "Detuo ọnụ ọgụgụ onye nkuzi ọzọ", "Hapụ nkuzi ahụ n'akụkọ", "Kwuo na a tụghị ihe a mịrị"], answer: 3, why: "Ndekọ eziokwu bara uru karịa ihe e chepụtara echepụta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Inye ndụmọdụ, ịkpata ego na igosi ihe si na ya pụta",
        questions: [
          { objective: "O4", q: "Kedu ọgwụ ahụhụ onye nkuzi ọrụ ugbo nwere ike ịtụ aro?", options: ["Nke ọ bụla dị ọnụ ala n'ahịa", "Ngwaahịa e debanyere aha na mba ahụ, nke a na-eji dị ka akara ya si kwuo", "Ngwakọta ọtụtụ ọgwụ e mere n'ụlọ", "Ihe ọ bụla onye agbata obi jiri"], answer: 1, why: "Naanị ngwaahịa e debanyere aha, nke a na-eji dị ka akara si kwuo, ya na uwe nchebe." },
          { objective: "O4", q: "Tupu i see onye ọrụ ugbo vidiyo maka nkuzi, ị:", options: ["Jụọ ikike ya", "See ya na nzuzo", "Buru ụzọ tinye ya, jụọ ma e mesịa", "Agwala ya mgbe ọ bụla"], answer: 0, why: "Ikike na-asọpụrụ ndị mmadụ na ubi ha." },
          { objective: "O5", q: "Nkuzi kwesịrị ịbụ:", options: ["Naanị maka ndị na-azụ ihe n'aka gị", "Nke a na-akwụ naanị site na kọmịshọn", "Ghere oghe maka mmadụ niile, ma ha zụtara ma ha azụtaghị", "Nke a kagburu ma ọ bụrụ na ire ihe adịghị mma"], answer: 2, why: "Ikewa nkuzi na ire ihe na-echebe ntụkwasị obi." },
          { objective: "O5", q: "Naanị ọmụmaatụ: kọmịshọn XOF 500 kwa akpa, e rere akpa 120. Kọmịshọn niile bụ:", options: ["XOF 6,000", "XOF 600", "XOF 620", "XOF 60,000"], answer: 3, why: "500 x 120 = 60,000, tupu ụgwọ ndị ọzọ." },
          { objective: "O6", q: "Ebee ka e kwesịrị idebe akwụkwọ ndekọ nkuzi?", options: ["N'nzuzo: akwụkwọ n'ebe nchebe ma ọ bụ ekwentị e kpọchiri", "N'otu WhatsApp ọha", "N'ebe a na-akpọgide ọkwa", "Nye onye ọ bụla na-azụ ihe"], answer: 0, why: "A ga-echebe ozi nzuzo mmadụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịghọ Onye Nkuzi Ndị Ọrụ Ugbo: Ndụmọdụ Ugbo (Extension) na Ndị Ndụmọdụ Azụmahịa Ugbo",
    questions: [
      { objective: "O1", q: "Ndụmọdụ ugbo (extension) pụtara:", options: ["Ime ka ugbo buo ibu", "Inyere ndị ọrụ ugbo aka ịmụta na iji omume ka mma", "Ire ala", "Ibinye ego"], answer: 1, why: "Ndụmọdụ ugbo bụ ndụmọdụ na mmụta maka ndị ọrụ ugbo." },
      { objective: "O1", q: "Onye isi ọrụ ugbo (lead farmer) na-abụkarị:", options: ["Onye ọrụ ugbo a na-asọpụrụ nke na-eme ngosi ma na-akụzi ndị agbata obi", "Onye ọrụ ụlọ akụ", "Onye minista gọọmentị", "Onye na-azụ ihe"], answer: 0, why: "Ndị isi ọrụ ugbo na-akụzi site n'ihe ha na-eme n'ubi nke ha." },
      { objective: "O1", q: "Kedu ụlọ ọrụ na-azụ Farm Business Advisors na Zambia na Mozambique?", options: ["NAFDAC", "Kenya Meteorological Department", "iDE", "WOAH"], answer: 2, why: "iDE na-eduzi otu FBA n'ebe ahụ." },
      { objective: "O2", q: "Ndị okenye na-amụta nka ọrụ ugbo nke ọma site n':", options: ["Ịge okwu ogologo", "Ịgụ akwụkwọ ogologo", "Ile televishọn", "Iji aka ha mee ya"], answer: 3, why: "A na-echeta ihe a mụtara site n'ime ya." },
      { objective: "O2", q: "N'ime nnọkọ nkeji 90, oge kacha ukwuu kwesịrị ịga na:", options: ["Nnabata", "Ịnwa nka ahụ", "Ire ihe ọrụ ugbo", "Ichere"], answer: 1, why: "Ime ya bụ ebe a na-amụta nka ahụ." },
      { objective: "O2", q: "Gịnị na-enyere ndị inyom na ndị ntorobịa aka ịbịa?", options: ["Ịjụ onye na-arụ ọrụ ahụ n'ụlọ ma kpọọ ha, n'oge dabara", "Ime ya n'ụbọchị ahịa", "Iji asụsụ ha anaghị asụ", "Ịkpọ naanị ndị isi ezinụlọ"], answer: 0, why: "Ịkpọ ndị na-arụ ọrụ ahụ, n'oge dabara, na-eme ka nkuzi ruo ha." },
      { objective: "O3", q: "Ubi ngosi ziri ezi na-atụnyere:", options: ["Ubi abụọ nwere ọtụtụ ihe dị iche", "Naanị otu ubi", "Ubi otu nha dị iche naanị n'otu omume", "Ugbo gị na nke onye agbata obi"], answer: 2, why: "Gbanwee otu ihe ka ihe si na ya pụta nwee otu ihe kpatara ya." },
      { objective: "O3", q: "Olee mgbe ị ga-eme ụbọchị nleta ubi n'ubi ngosi?", options: ["Naanị mgbe owuwe ihe ubi gasịrị", "Ọ dịghị mgbe", "Naanị tupu ịkọ ihe", "N'oge ndị dị mkpa dị ka mgbe ha pụtara, mgbe ha na-eme ifuru na n'oge owuwe"], answer: 3, why: "Ndị ọrụ ugbo na-ahụ ihe dị iche ka ihe ubi na-eto." },
      { objective: "O3", q: "Dị ka FAO si kwuo, Farmer Field School na-ezukọ:", options: ["Mgbe niile n'oge niile nke otu oge ịkọ ihe ruo owuwe, ya na onye nduzi a zụrụ azụ", "Otu ugboro, maka otu awa", "Naanị n'ịntanetị", "Naanị n'ime klasị"], answer: 0, why: "Otu FFS na-amụta ihe n'ubi n'oge niile ahụ." },
      { objective: "O4", q: "Onye nkuzi ọrụ ugbo kwesịrị inye ọnụọgụ ọgwụ ma ọ bụ ọgwụ mgbochi:", options: ["Mgbe a jụrụ ya", "Ọ dịghị mgbe; ziga onye ọrụ ugbo n'aka dọkịta anụmanụ na akara ọgwụ", "Naanị maka ọkụkọ", "Ma ọ bụrụ na onye ọrụ ugbo siri ọnwụ"], answer: 1, why: "Ọnụọgụ ọgwụ na-esi n'aka dọkịta anụmanụ na akara ọgwụ." },
      { objective: "O4", q: "Ọtụtụ ọkụkọ nwụrụ na mberede n'otu ugbo. Ị na-agwa onye ọrụ ugbo ka ọ:", options: ["Ree ndị fọdụrụ n'ahịa", "Chere ma hụ", "Kọọrọ dọkịta anụmanụ ma ọ bụ ndị ọchịchị anụmanụ ozugbo", "Lie ha ma ghara ikwu ihe ọ bụla"], answer: 2, why: "Ọ nwere ike ịbụ avian flu, ọrịa a ga-akọrịrị." },
      { objective: "O4", q: "Na Nigeria, onye na-edebanye aha ọgwụ ugbo (agrochemicals) bụ:", options: ["Central Bank", "NiMet", "Ndị uwe ojii", "NAFDAC"], answer: 3, why: "NAFDAC na-edebanye aha ọgwụ ugbo na Nigeria." },
      { objective: "O4", q: "Onye ọrụ ugbo jụrụ gị banyere nkwekọrịta mbinye ego. Ị:", options: ["Gwa ya ka ọ bịanye aka ngwa ngwa", "Ziga ya n'aka onye ndụmọdụ a tụkwasịrị obi ma tụọ aro ka ọ gụchaa ya", "Bịanye aka n'aha ya", "Dụọ ya ọdụ ka ọ binye karịa"], answer: 1, why: "Ego na nkwekọrịta karịrị ọrụ onye nkuzi ọrụ ugbo." },
      { objective: "O5", q: "FBA na-akpatakarị ego site na:", options: ["Kọmịshọn n'elu ihe ọrụ ugbo na ụgwọ ọrụ", "Naanị ụgwọ ọnwa gọọmentị", "Ntaramahụhụ ego n'aka ndị ọrụ ugbo", "Ire ozi ndị ọrụ ugbo"], answer: 0, why: "FBA bụ ndị azụmahịa a na-akwụ site na kọmịshọn na ụgwọ ọrụ." },
      { objective: "O5", q: "Gịnị bụ esemokwu ọdịmma (conflict of interest) maka FBA?", options: ["Ire ezi mkpụrụ", "Idekọ ire ihe", "Mgbe ngwaahịa na-akwụ gị ụgwọ kacha abụghị nke kacha mma maka onye ọrụ ugbo", "Inye nkuzi"], answer: 2, why: "Iwu ziri ezi dị iji jikwaa esemokwu a." },
      { objective: "O5", q: "Kedu nke bụ ezigbo omume FBA?", options: ["Zoo kọmịshọn gị", "Ree na mbinye ndị mmadụ na-agaghị akwụghachi", "Ree ngwaahịa na-enweghị akara", "Dee ọnụ ahịa gị"], answer: 3, why: "Ọnụ ahịa e dere ede na-eme ka ire ihe bụrụ nke ziri ezi ma doo anya." },
      { objective: "O6", q: "Akwụkwọ ndekọ nkuzi kwesịrị inwe:", options: ["Ụbọchị, isiokwu, aha, na ma onye ọrụ ugbo ọ bụla nwere ike ime nka ahụ", "PIN ego ekwentị (mobile money) ndị ọrụ ugbo", "Naanị aha onye nkuzi", "Ọ dịghị ihe; icheta ihe zuru ezu"], answer: 0, why: "Nke a na-egosi ndị a kuziri na otu ha si mụta nke ọma." },
      { objective: "O6", q: "Gịnị mere ị ga-eji soro ndị ọrụ ugbo mgbe nkuzi gasịrị?", options: ["Iji ree ihe ọzọ", "Iji hụ ma ha jiri omume ahụ mee ihe na ihe mere", "N'ihi na ha ji gị ụgwọ", "Ọ dịghị mkpa"], answer: 1, why: "Nsochi na-egosi ihe si na ya pụta na ebe a ga-enyekwu aka." },
      { objective: "O6", q: "Ọ bụrụ na ị tụghị ihe si na ya pụta, ị kwesịrị:", options: ["Chepụta ọnụ ọgụgụ mara mma", "Jiri ọnụ ọgụgụ afọ gara aga", "Kwuo na a tụghị ha", "Detuo akụkọ ọzọ"], answer: 2, why: "Echepụtala ihe si na ya pụta mgbe ọ bụla." },
      { objective: "O6", q: "Idekọ nọmba ekwentị onye ọrụ ugbo chọrọ:", options: ["Ọ dịghị ihe", "Ịkwụ ụgwọ", "Nkwado onye na-azụ ihe", "Nkwenye ya"], answer: 3, why: "A na-edekọ ozi nzuzo mmadụ naanị na ikike ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ nkuzi", objective: "O2", notYet: "Okwu na-enweghị omume, ma ọ bụ ọtụtụ nka n'otu oge.", meets: "Otu nka, gosi-nwaa-kpaa nkata nwere oge na ihe a ga-eji, dabara nkeji 60 ruo 90, ya na nlele na onye ọrụ ugbo ọ bụla nwere ike ime ya.", exceeds: "Na-ahazikwa ka ndị inyom na ndị ntorobịa bịa, ma gụnye obere vidiyo ekwentị ma ọ bụ nsochi SMS." },
      { name: "Ubi ngosi", objective: "O3", notYet: "Ọ dịghị ntụnyere, ma ọ bụ ubi ndị ahụ dị iche n'ọtụtụ ụzọ.", meets: "Ubi abụọ otu nha e dere aha ha, dị iche n'otu omume, ya na ndekọ na ụbọchị nleta ubi.", exceeds: "Gụnyere otu a ga-esi tụọ ihe owuwe ihe ubi maka ubi nke ọ bụla ma kesaa ya n'eziokwu, ọbụlagodi ma omume ọhụrụ ahụ emeghị nke ọma." },
      { name: "Ndụmọdụ n'enweghị nsogbu na iziga onye ọkachamara", objective: "O4", notYet: "Na-enye ọnụọgụ ọgwụ ma ọ bụ na-akpọ ngwaahịa e debanyeghị aha; ọ dịghị ndepụta ndị a ga-eziga mmadụ.", meets: "Ndepụta ndị a ga-eziga mmadụ nwere nọmba, na ihe onye nkuzi ahụ agaghị enye ndụmọdụ na ya, gụnyere ọrịa a ga-akọrịrị.", exceeds: "Na-akpọ aha ụlọ ọrụ ndebanye aha ọgwụ ahụhụ nke mba ahụ na otu esi elele ndepụta ya." },
      { name: "Ịkpata ego n'ụzọ ziri ezi", objective: "O5", notYet: "E jikọrọ nkuzi na ịzụ ihe, ma ọ bụ e zoro kọmịshọn.", meets: "Ọ bụrụ na ọ na-ere ihe: ọnụ ahịa e dere ede, kọmịshọn a kwupụtara, na nkuzi ghere oghe maka mmadụ niile.", exceeds: "Gụnyere ọmụmaatụ ego a ga-enweta n'otu oge mgbe e wepụrụ ụgwọ, na iwu maka ikwu \"ọ dịghị ihe ị ga-azụ\"." },
      { name: "Ndekọ na ọrụ dị iche iche", objective: "O6", notYet: "Ọ dịghị akwụkwọ ndekọ, ma ọ bụ e kesara ozi nzuzo mmadụ n'ihu ọha.", meets: "Akwụkwọ ndekọ nwere nkwenye, ụbọchị nsochi na ebe nchekwa nzuzo; a kpọrọ aha onye ndụmọdụ ugbo nọ n'obodo.", exceeds: "Na-edekọ ma ihe si n'ubi ngosi pụta ma ndị ọrụ ugbo nabatara omume ahụ n'oge nsochi." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere opekata mpe otu ụbọchị nkuzi n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ọnụ ọgụgụ ndị ọrụ ugbo onye na-amụ ihe ọ bụla kuziri, site n'akwụkwọ ndekọ nkuzi",
      "Akụkụ ndị ọrụ ugbo a kuziri na-eji omume ahụ n'oge nsochi",
      "Ihe si n'ubi ngosi pụta e jiri tụnyere omume a na-eme mgbe niile mgbe otu oge ịkọ ihe gasịrị",
      "Ndị na-amụ ihe na-arụkọ ọrụ na ọfịs ndụmọdụ ugbo nọ n'obodo ha ma ọ bụ otu mmemme dị ka ndị isi ọrụ ugbo ma ọ bụ FBA"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone maka obere vidiyo, SMS na WhatsApp",
      "Akwụkwọ, mkpịsị ode na akwụkwọ ndetu maka atụmatụ nkuzi, atụmatụ ubi ngosi na akwụkwọ ndekọ",
      "Obere ala maka ubi ngosi, osisi nkwado, eriri na akara",
      "Nọmba na adreesị ọfịs ndụmọdụ ugbo nọ n'obodo, dọkịta anụmanụ na ụlọ ọrụ ndebanye aha ọgwụ ahụhụ nke mba ahụ",
      "Ihe dị ka nkeji 90 n'ozuzu, gbakwunyere oge iduzi ụbọchị nkuzi ahụ"
    ],
    facilitatorNotes: [
      "Kụzie ihe ọmụmụ a n'ụzọ ọ na-arịọ ndị na-amụ ihe ka ha kụzie: gosi, nwaa, kpaa nkata, ya na atụmatụ nkuzi na nhazi ubi ngosi e mere n'oge nnọkọ ahụ.",
      "Gụnye ọfịs ndụmọdụ ugbo nọ n'obodo; kpọọ onye ọrụ ndụmọdụ ugbo ka ọ bịa Nkuzi 1 ma ọ bụrụ na o kwere omume.",
      "Ekwela ka ndị na-amụ ihe nye ọnụọgụ ọgwụ anụmanụ, ọgwụ mgbochi ma ọ bụ homonụ ma ọ bụ oge nchere n'egwuregwu ime ihe (role play); mee ka ha mụọ iziga onye ọkachamara kama.",
      "Maka ndị chọrọ ịghọ FBA, mee egwuregwu ime ihe nke mkparịta ụka ire ihe ebe azịza ziri ezi bụ \"ọ dịghị ihe ị ga-azụ\".",
      "Lelee na akwụkwọ ndekọ omume na-eji aha e chepụtara echepụta belụsọ ma ezi ndị ọrụ ugbo enyela nkwenye.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
