"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-farm-finance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const VSLA = { name: "VSL Associates: usoro VSLA (òkè, ego mbinye, ego enyemaka, okirikiri otu afọ, ụbọchị nkesa)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: ndepụta SACCO nwere ikike ịnara ego nchekwa", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: iwu maka ụlọ ọrụ microfinance (systemes financiers decentralises) na mba XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Central Bank of Nigeria, Ụlọ Akụ Etiti Naịjirịa: ụlọ akụ microfinance", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Naịjirịa: nkọwa (nkwa nchekwa mbinye ego maka ugbo)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Ghana: GIRSAL na-asọpụrụ ụlọ ọrụ ego na-agbazinye ndị ọrụ ugbo ego", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Warehouse Receipt System Council, Kenya (ụlọ nkwakọba nwere asambodo na akwụkwọ nnata ụlọ nkwakọba)", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 October 2019): GCX na ARB Apex Bank malitere mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba eletrọnịkị", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (June 2023): Adehyeman Savings and Loans na Ghana Commodity Exchange na-arụkọ ọrụ iji kwado ndị ọrụ ugbo", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund: banyere anyị (ego, ihe ọrụ ugbo na ọzụzụ; mba ndị ọ na-arụ)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA: Sudan malitere ENABLE Youth Program (mmemme African Development Bank maka ndị ntorobịa na-arụ azụmahịa ugbo)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Youth Enterprise Development Fund, Kenya (mbinye ego maka azụmahịa ndị ntorobịa, gụnyere Agri-Biz loan)", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Senegal: Delegation generale a l'Entrepreneuriat rapide des Femmes et des Jeunes", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Naịjirịa: ọnọdụ ndebanye aha nke ndị na-agbazinye ego n'ịntanetị (ngwa mbinye ego a kwadoro)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Central Bank of Kenya, Ụlọ Akụ Etiti Kenya: nlekọta ụlọ akụ, gụnyere ndepụta ndị na-enye mbinye ego dijitalụ nwere ikike", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance-ig",
  lang: "ig",
  translationOf: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Ịchọta Ego maka Ugbo Gị: Mbinye Ego, Onyinye Ego na Ndị Itinye Ego",
  skills: "Ịgbakọ ego ole ị chọrọ, Iji otu nchekwa ego, VSLA na SACCO, Ịtụnyere mbinye ego ugbo na atụmatụ ịkwụghachi, Iji akwụkwọ nnata ụlọ nkwakọba na mbinye ihe ọrụ ugbo, Ịchọta ezi onyinye ego na izere aghụghọ, Ide arịrịọ ego nwere otu peeji",
  outcome: "ịgbakọ kpọmkwem ego ole ugbo gị chọrọ na mgbe ọ chọrọ ya, ịtụnyere otu nchekwa ego, SACCO, mbinye ego, akwụkwọ nnata ụlọ nkwakọba, mbinye ihe ọrụ ugbo na onyinye ego, ịmata aghụghọ mbinye ego ma ọ bụ onyinye ego, na ide arịrịọ ego nwere otu peeji nke onye na-agbazinye ego, mmemme ma ọ bụ onye itinye ego nwere ike ịnabata.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo nta na ndị ugbo ha na-eto eto, ndị ntorobịa na-arụ azụmahịa ugbo, otu ụmụ nwanyị na otu ndị ntorobịa, ndị isi otu nkwado (cooperative) na ndị ndụmọdụ ugbo (extension workers) na Kenya, Naịjirịa, Ghana, Senegal, Cote d'Ivoire na Afrịka niile, ndị chọrọ ego iji malite, gaa n'ihu ma ọ bụ mee ka ugbo ha too.",
    "Isi 1 gbasara ego kacha nso gị: ịgbakọ ego ole ị chọrọ na ihe ọ bụ maka ya, otu nchekwa ego, VSLA na SACCO, na mbinye ego ugbo site n'ụlọ akụ microfinance na ụlọ akụ ndị ọzọ. Isi 2 gbasara ụzọ ndị ọzọ: mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba na mbinye ihe ọrụ ugbo site n'aka ndị na-azụ ihe na mmemme nkwekọrịta, onyinye ego na mmemme ndị ntorobịa na otu esi ezere aghụghọ, na ide arịrịọ ego nwere otu peeji. Ọ na-ewulite n'elu \"Azụmahịa Ugbo na Nlekọta Ugbo\", nke na-egosi otu esi agbakọ ọnụ mbinye ego niile.",
    "Ọmụmaatụ ego niile bụ nọmba e mepụtara; ọnụ ọmụrụ nwa (interest), ụgwọ na mmemme na-agbanwe, ya mere lelee ihe e nyere ugbu a. Ihe ọmụmụ a na-akọwa otu ụdị ego ọ bụla si arụ ọrụ na ihe egwu ya. Ọ naghị enye ndụmọdụ mbinye ego ma ọ bụ itinye ego. Gbazite naanị ihe atụmatụ gị chọrọ, gụchaa nkwekọrịta ọ bụla, lelee na onye na-agbazinye ego nwere ikike, ma jụọ onye ndụmọdụ i tụkwasịrị obi, dị ka otu nkwado gị, SACCO, onye ndụmọdụ ugbo ma ọ bụ ọka iwu, tupu ị bịanye aka."
  ],
  finalTask: "Dee arịrịọ ego nwere otu peeji maka ugbo gị (ma ọ bụ ugbo ọmụmaatụ): onye ị bụ na ugbo gị; kpọmkwem ihe ego ahụ bụ maka ya, ego ole n'ozuzu, ego ole ị na-etinye n'onwe gị na oghere ego ị na-arịọ; otu ego ahụ ga-esi mepụta ego (ọnụ otu ihe, gross margin ma ọ bụ oge ịkwụghachi); ụdị ego ị na-arịọ na ihe mere o ji dabara; atụmatụ ịkwụghachi dabara mgbe ego gị na-abata; ihe nchekwa (collateral) ma ọ bụ nkwa gị; ihe egwu gị ndị bụ isi na otu ị na-achịkwa ha; na ndekọ gị ma ọ bụ ihe ị mere na mbụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo nta na ndị ugbo ha na-eto eto, ndị ntorobịa na-arụ azụmahịa ugbo, otu ụmụ nwanyị na otu ndị ntorobịa, ndị isi otu nkwado na ndị ndụmọdụ ugbo na Kenya, Naịjirịa, Ghana na mba West Africa na-asụ French, ndị na-akọ ihe ubi ma ọ bụ na-azụ anụ na azụ, ndị chọrọ ego iji malite, gbasaa ma ọ bụ gafee oge ọrụ ugbo.",
    startingPoint: "Ọtụtụ agbaziteela ego n'aka ezinụlọ, chama ma ọ bụ otu nchekwa ego, ụlọ ahịa ma ọ bụ ngwa mbinye ego n'ekwentị. Ole na ole ka edeela mmefu ego maka mbinye ego, tụnyere ihe e nyere site n'ọnụ ya niile na ụbọchị ịkwụghachi, jiri akwụkwọ nnata ụlọ nkwakọba, ma ọ bụ lelee ma onye na-agbazinye ego ma ọ bụ mmemme ọ bụ eziokwu. E zigaara ụfọdụ ozi onyinye ego na mbinye ego adịgboroja.",
    gap: "Ndị ọrụ ugbo na-agbazitekarị ego ole na-ezighi ezi, n'oge na-ezighi ezi, n'aka onye na-ezighi ezi, na ịkwụghachi na-eru tupu owuwe ihe ubi, ma ọ bụ tụfuo ego n'onyinye ego adịgboroja na ngwa mbinye ego na-enweghị ikike. Ịmata ezi oghere ego ha na ụzọ ndị dabara ha na-enyere ha aka ịgbazite obere ego n'ụzọ ka mma, iji nchekwa ego otu na mbinye ego jikọrọ na owuwe ihe ubi, ma gosi arịrịọ doro anya nke ndị na-agbazinye ego na mmemme ga-elebara anya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ego ọ bụla",
      "Ngwaọrụ: ekwentị nkịtị na ihe mgbakọ (calculator); akwụkwọ ndetu maka mmefu ego na arịrịọ",
      "Oge: nkuzi nkeji 5 ruo 6 nke dabara n'etiti ọrụ ugbo",
      "Ọnụ ọmụrụ nwa, ụgwọ na mmemme na-agbanwe ma dị iche n'otu mba na ibe ya: e nyeghị ọnụ ọmụrụ nwa ma ọ bụ ụbọchị njedebe; ndị na-amụ ihe na-elele ihe e nyere ugbu a na onye nlekọta (regulator)",
      "Enweghị ndụmọdụ mbinye ego ma ọ bụ itinye ego; etinyela PIN, okwuntughe ma ọ bụ ozi ụlọ akụ na ngwa ma ọ bụ ngwa AI maka omume"
    ],
    prerequisites: "Ọ dịghị. \"Azụmahịa Ugbo na Nlekọta Ugbo\" (ndekọ, mbata na mpụta ego, ọnụ mbinye ego) na \"Ndekọ Ego Ugbo na Nlekọta Itinye Ego\" (ọnụ otu ihe, oge ịkwụghachi) na-enyere aka na nọmba."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị atụmatụ ugbo na ọnụ ihe niile ọ ga-eri", action: "ịgbakọ ego niile a chọrọ, ego ị na-etinye n'onwe gị na oghere ego, kewaa ya n'ego ọrụ na ngwaọrụ, ya na ọnwa a chọrọ nke ọ bụla", standard: "na mgbakọ ziri ezi na enweghị mmefu ụlọ a gwakọtara n'ime ya" },
    { id: "O2", condition: "Mgbe e nyere gị otu nchekwa ego, VSLA ma ọ bụ SACCO ị nwere ike isonye", action: "ịkọwa otu nchekwa ego, mbinye ego, nkwa na nkesa si arụ ọrụ n'ime ya ma depụta ihe egwu ya", standard: "na-akpọ opekata mpe iwu atọ ị ga-elele tupu i sonye" },
    { id: "O3", condition: "Mgbe e nyere gị ihe abụọ e nyere maka mbinye ego", action: "ịtụnyere ọnụ ha niile, ihe nchekwa ha na ụbọchị ịkwụghachi ha ma họrọ nke dabara owuwe ihe ubi gị", standard: "na ego niile a ga-akwụghachi gbakọrọ maka nke ọ bụla na ọnwa ịkwụghachi elelere megide mbata na mpụta ego gị" },
    { id: "O4", condition: "Mgbe e nyere gị akwụkwọ nnata ụlọ nkwakọba ma ọ bụ mbinye ihe ọrụ ugbo", action: "idepụta ọnụ ya, ihe ị ga-eme na ihe na-eme ma ọnụahịa ma ọ bụ owuwe ihe ubi daa", standard: "na-akpọ opekata mpe usoro anọ na ihe egwu abụọ" },
    { id: "O5", condition: "Mgbe e nyere gị onyinye ego, mmemme ndị ntorobịa ma ọ bụ mbinye ego", action: "ịlele ya na weebụsaịtị gọọmentị ma ọ bụ ndepụta onye nlekọta ma hụ ihe ịdọ aka na ntị nke aghụghọ", standard: "tupu ị kwụọ ụgwọ, kesaa ozi gị ma ọ bụ tinye akwụkwọ" },
    { id: "O6", condition: "Site n'iji nọmba ugbo nke gị", action: "ide arịrịọ ego nwere otu peeji nke onye na-agbazinye ego, mmemme ma ọ bụ onye itinye ego nwere ike inyocha", standard: "na-ekwu ebumnuche, ego ole, ego nke gị, otu ọ ga-esi mepụta ego, ịkwụghachi, ihe nchekwa na ihe egwu" }
  ],
  chapters: [
    {
      name: "Isi 1: Mkpa gị na ego kacha nso gị",
      lessons: [
        {
          title: "Ego ole ị chọrọ, na ihe ọ bụ maka ya",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gbakọọ ego niile ị chọrọ, ego ị na-etinye n'onwe gị na oghere ego, n'otu ọnwa n'otu ọnwa.",
          text: [
            "Tupu ị chọọ ego, dee kpọmkwem ihe ọ bụ maka ya. Ego ọrụ (working capital) na-akwụ ụgwọ otu okirikiri mmepụta: mkpụrụ, fatịlaịza, nri anụ, ụmụ ọkụkọ ma ọ bụ ụmụ azụ, ndị ọrụ, ọrụ dọkịta anụ na njem. Ọ na-alọghachi mgbe ị rere ihe. Ngwaọrụ na ụlọ (igwe mmiri, ebe anụ, ụlọ nkwakọba) na-adị ọtụtụ afọ ma na-akwụghachi nwayọọ. Ndị na-agbazinye ego na-ele ha anya n'ụzọ dị iche, na ogologo mbinye ego dị iche, ya mere depụta ha iche iche.",
            "Ọmụmaatụ (nọmba e mepụtara na naira), otu ìgwè ọkụkọ broiler na Naịjirịa: ụmụ ọkụkọ, nri, ọrụ dọkịta anụ na ndị ọrụ 1,200,000 (ego ọrụ); ihe ọṅụṅụ mmiri, ihe nri na ndozi ụlọ ọkụkọ 300,000 (ngwaọrụ). Ha niile 1,500,000. Ị chekwala 500,000. Oghere ego = 1,500,000 - 500,000 = 1,000,000. Oghere ahụ, ọ bụghị ego niile, ka ị ga-arịọ.",
            "Wee tinye ọnụ ọ bụla n'ọnwa a chọrọ ya, site n'iji atụmatụ mbata na mpụta ego gị, ka ị rịọ ego mgbe ị chọrọ ya ma ghara ịkwụ ọnụ ọmụrụ nwa n'ego na-anọ nkịtị. Debe obere ego nchekwa maka mgbe ọnụahịa rịrị elu. Agwakọtala mmefu ụlọ dị ka ụgwọ akwụkwọ ụmụaka: gbazite maka ugbo naanị ihe ugbo nwere ike ịkwụghachi."
          ],
          steps: ["Depụta ọnụ ọ bụla dị n'atụmatụ gị.", "Kaa nke ọ bụla akara: ego ọrụ ma ọ bụ ngwaọrụ.", "Gbakọọ ha niile ka ịmata ego niile a chọrọ.", "Wepụ ego ị ga-etinye n'onwe gị.", "Ihe fọdụrụ bụ oghere ego gị.", "Tinye ọnụ ọ bụla n'ọnwa a chọrọ ya, ma tinye obere ego nchekwa."],
          words: [["Ego ọrụ (working capital)", "ego na-akwụ ụgwọ otu okirikiri mmepụta ma na-alọghachi mgbe ị rere ihe."], ["Oghere ego (funding gap)", "ego ị ka chọrọ mgbe i tinyechara nke gị: ego niile a chọrọ - ego nke gị."], ["Ego nke gị (own contribution)", "ego ma ọ bụ ihe ị na-etinye n'atụmatụ ahụ n'onwe gị."]],
          slides: [
            { title: "Ụdị mkpa abụọ", bullets: ["Ego ọrụ: otu okirikiri, na-alọghachi mgbe ị rere ihe", "Ngwaọrụ na ụlọ: na-adị ọtụtụ afọ, na-akwụghachi nwayọọ", "Depụta ha iche iche"] },
            { title: "Ọmụmaatụ ọkụkọ broiler (NGN, e mepụtara)", bullets: ["Ego ọrụ 1,200,000 + ngwaọrụ 300,000 = 1,500,000", "Ego nke gị 500,000", "Oghere ego 1,000,000: rịọ nke a"] },
            { title: "Oge na ịkpachara anya", bullets: ["Tinye ọnụ ọ bụla n'ọnwa ya", "Obere ego nchekwa maka ọnụahịa ịrị elu", "Enweghị mmefu ụlọ n'ime mbinye ego ugbo"] }
          ],
          tryIt: "Maka otu atụmatụ n'ugbo gị, depụta ọnụ ọ bụla, kaa ya akara ego ọrụ ma ọ bụ ngwaọrụ, gbakọọ ha niile, wepụ ego nke gị, ma dee oghere ego na ọnwa a chọrọ akụkụ ọ bụla.",
          youCanNow: "ịgbakọ kpọmkwem ego ole atụmatụ ugbo gị chọrọ, ihe ọ bụ maka ya na mgbe a chọrọ ya, na oghere ego ị ga-achọta.",
          quickCheck: [
            { objective: "O1", q: "Atụmatụ na-eri 800,000, ị nwekwara 300,000 nke gị. Gịnị bụ oghere ego?", options: ["1,100,000", "800,000", "500,000", "300,000"], answer: 2, why: "800,000 - 300,000 = 500,000." },
            { objective: "O1", q: "Kedu nke bụ ego ọrụ maka ọdọ azụ?", options: ["Ụmụ azụ na nri maka otu okirikiri", "Igwu ọdọ azụ", "Igwe na-adọta mmiri", "Ogige"], answer: 0, why: "A na-eji ụmụ azụ na nri n'otu okirikiri, ha na-alọghachikwa mgbe a rere azụ ahụ." }
          ]
        },
        {
          title: "Otu nchekwa ego, VSLA na SACCO",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kọwaa otu VSLA na SACCO si arụ ọrụ ma depụta iwu ị ga-elele tupu i sonye.",
          text: [
            "Otu nchekwa na mbinye ego obodo (VSLA) bụ otu, nke na-enwekarị mmadụ 10 ruo 25, na-ezukọ kwa izu. N'ọgbakọ ọ bụla, ndị otu na-azụ òkè 1 ruo 5 n'ọnụahịa òkè nke otu ahụ kara maka afọ ahụ. Ego nchekwa na-abanye n'ego mbinye. Ndị otu nwere ike ịgbazite ruo ugboro atọ ego nchekwa ha ruo ọnwa atọ, na-akwụ ụgwọ ọrụ nke otu ahụ kara. Ọtụtụ otu na-edebekwa obere ego enyemaka maka ihe mberede. Mgbe ihe dị ka otu afọ gachara, a na-akwụghachi mbinye ego niile, a na-ekesakwa ego ahụ, gụnyere ụgwọ ọrụ ahụ, dịka ego nchekwa onye ọ bụla si dị.",
            "SACCO (otu nkwado nchekwa na mbinye ego; na mba West Africa na-asụ French, mutuelle ma ọ bụ caisse) bụ otu nkwado ego nke ndị otu nwe, nke na-adịkarị ukwuu ma hazie nke ọma. Ị na-echekwa ego mgbe niile, mbinye ego na-adaberekarị n'ego ole i chekwara, ọ na-achọkwa ndị nkwa (guarantors): ndị otu na-ekwe nkwa ịkwụ ụgwọ ma ọ bụrụ na ị kwụghị. Na Kenya, SASRA na-enye SACCO na-anara ego nchekwa ikike ma bipụta ndepụta ha. Na mba CFA franc, ụlọ ọrụ microfinance na otu nkwado ego na-agbaso iwu BCEAO.",
            "Tupu i sonye, lelee: iwu e dere ede (constitution ma ọ bụ by-laws), ọnụahịa òkè ma ọ bụ ego nchekwa, iwu mbinye ego na ụgwọ ya, otu e si echebe ego (igbe ego nwere mkpọchi ma ọ bụ akaụntụ nwere ikike), otu e si edebe ndekọ ma gụpụta ya, na ihe ịbụ onye nkwa pụtara. Ọ bụrụ na i kwere nkwa maka mbinye ego enyi gị ma ọ kwụghị, ị nwere ike ịkwụ ya."
          ],
          steps: ["Rịọ ịhụ iwu e dere ede nke otu ahụ.", "Lelee ọnụahịa òkè ma ọ bụ ego nchekwa na ụbọchị ọgbakọ.", "Lelee ego mbinye ole, ogologo ya na ụgwọ ọrụ ya.", "Lelee otu e si echebe ego na ndekọ.", "Jụọ ihe ịbụ onye nkwa pụtara maka gị.", "Maka SACCO, lelee na e debanyere ya aha ma ọ bụ nwee ikike."],
          words: [["VSLA", "otu nchekwa na mbinye ego obodo: otu na-echekwa ego kwa izu, na-agbazinye ndị otu ego ma na-ekesa ya na njedebe okirikiri."], ["Nkesa (share-out)", "ụbọchị otu ahụ na-akwụ ndị otu ego nchekwa na uru niile dịka ego nchekwa ha si dị."], ["SACCO", "otu nkwado nchekwa na mbinye ego: otu ndị otu nwe nke na-anara ego nchekwa ma na-agbazinye ego."], ["Onye nkwa (guarantor)", "onye na-ekwe nkwa ịkwụ mbinye ego ma ọ bụrụ na onye gbaziri ya akwụghị."]],
          slides: [
            { title: "VSLA: otu o si arụ ọrụ", bullets: ["Ndị otu 10-25 na-ezukọ kwa izu; na-azụ òkè 1-5", "Gbazite ruo ugboro 3 ego nchekwa ruo ọnwa 3", "Nkesa mgbe ihe dị ka otu afọ gachara"] },
            { title: "SACCO", bullets: ["Otu nkwado nchekwa na mbinye ego nke ndị otu nwe", "Mbinye ego jikọrọ n'ego nchekwa; ndị nkwa", "Kenya: lelee ndepụta SASRA nke nwere ikike"] },
            { title: "Lelee tupu i sonye", bullets: ["Iwu e dere ede; ego nchekwa", "Ego mbinye ole, ogologo ya, ụgwọ ya", "Ego na ndekọ echebere; ọrụ onye nkwa"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Jụọ otu nchekwa ego, VSLA ma ọ bụ SACCO dị nso gị (ma ọ bụ jiri ọmụmaatụ) maka iwu ya. Dee ego nchekwa, ego mbinye ole, ogologo mbinye ego, ụgwọ ya, otu e si echebe ego, na ihe onye nkwa ga-eme.",
          youCanNow: "ịkọwa otu otu nchekwa ego, VSLA na SACCO si arụ ọrụ ma lelee iwu ha tupu i sonye ma ọ bụ kwe nkwa maka mbinye ego.",
          quickCheck: [
            { objective: "O2", q: "Na VSLA, kedu otu e si ekesa ego na njedebe okirikiri?", options: ["Nha anya, n'agbanyeghị ihe onye ọ bụla chekwara", "Nye onye isi oche", "Nye onye gbaziri ego kacha", "Dịka ego nchekwa onye ọ bụla si dị"], answer: 3, why: "Ndị otu zụrụ òkè karịa na-enweta akụkụ ka ukwuu n'ego niile." },
            { objective: "O2", q: "I kwere nkwa maka mbinye ego SACCO enyi gị ma ọ kwụsị ịkwụ ụgwọ. Gịnị nwere ike ime?", options: ["Ọ dịghị ihe; nkwa bụ naanị omenala", "Ị nwere ike ịkwụ akụkụ ya ma ọ bụ ya niile", "SACCO ga-akagbu mbinye ego ahụ", "Ezinụlọ enyi gị ga-akwụ ya n'onwe ya"], answer: 1, why: "Onye nkwa na-ekwe nkwa ịkwụ ụgwọ ma ọ bụrụ na onye gbaziri ego akwụghị." }
          ]
        },
        {
          title: "Mbinye ego ugbo site na microfinance na ụlọ akụ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tụnyere ihe abụọ e nyere maka mbinye ego site n'ọnụ ha niile, ihe nchekwa na otu ịkwụghachi si dabara owuwe ihe ubi gị.",
          text: [
            "Ụlọ akụ na ụlọ ọrụ microfinance na-agbazinye obere ego, na-enyekarị otu; ụlọ akụ azụmahịa na nke ugbo na-agbazinye ego ka ukwuu, na-achọkarị nchekwa karịa. Jụọ ma ọnụ ọmụrụ nwa ahụ bụ kwa ọnwa ma ọ bụ kwa afọ, ma ọ bụ flat ma ọ bụ reducing balance. Flat rate na-ana ọnụ ọmụrụ nwa n'ego niile ahụ ruo mgbe mbinye ego gwụrụ; reducing balance na-ana naanị n'ego ị ka ji, ya mere otu nọmba ahụ na-eri obere. Gbakọọ ụgwọ ọ bụla na ụgwọ inshọransị ka ịmata ego niile ị ga-akwụghachi.",
            "Ihe nchekwa (collateral) bụ ihe onye na-agbazinye ego nwere ike iwere ma ọ bụrụ na ị kwụghachighị: akwụkwọ ala, ụgbọala, ngwaọrụ, ego nchekwa onye na-agbazinye ego jidere, nkwa otu, ma ọ bụ akwụkwọ nnata ụlọ nkwakọba. Ụfọdụ gọọmentị na-akwado ndị na-agbazinye ego site na nkwa nchekwa mbinye ego, dị ka NIRSAL na Naịjirịa (ruo 75% nchekwa nye ndị na-agbazinye ego) na GIRSAL na Ghana. Ndị a na-echebe onye na-agbazinye ego ma nwee ike ime ka ụlọ akụ dị njikere ịgbazinye ndị ọrụ ugbo ego, mana ị ka ji mbinye ego ahụ niile.",
            "Mee ka ịkwụghachi dabara owuwe ihe ubi gị. Ọmụmaatụ (nọmba e mepụtara na shilling Kenya), ịgbazite 100,000 maka oge ọka: Nhọrọ A bụ 10,000 kwa ọnwa ruo ọnwa 12 na-amalite ọnwa na-abịa, ha niile 120,000. Nhọrọ B bụ otu ịkwụ ụgwọ nke 112,000 n'ọnwa 6, mgbe owuwe ihe ubi gachara. B na-eri obere ma na-akwụghachi mgbe ego gị na-abata; A na-achọ ịkwụghachi tupu ị reere ihe ọ bụla. Rịọ maka oge izu ike (grace period) ma ọ bụ ịkwụghachi n'oge owuwe ihe ubi, ma lelee na ụlọ akụ etiti nyere onye na-agbazinye ego ikike."
          ],
          steps: ["Jụọ: ọnụ ọmụrụ nwa kwa ọnwa ka ọ bụ kwa afọ? Flat ka ọ bụ reducing balance?", "Gbakọọ ọnụ ọmụrụ nwa, ụgwọ na inshọransị ka ịmata ego niile a ga-akwụghachi.", "Jụọ ihe nchekwa ma ọ bụ nkwa a chọrọ.", "Tinye ụbọchị ịkwụghachi n'atụmatụ mbata na mpụta ego gị.", "Rịọ maka oge izu ike ma ọ bụ ịkwụghachi n'oge owuwe ihe ubi ma ọ dị mkpa.", "Lelee na onye na-agbazinye ego nwere ikike; gụchaa nkwekọrịta ahụ."],
          words: [["Flat rate", "ọnụ ọmụrụ nwa a na-ana n'ego niile a gbaziri ruo mgbe mbinye ego gwụrụ, ọbụlagodi mgbe ị na-akwụghachi."], ["Reducing balance", "ọnụ ọmụrụ nwa a na-ana naanị n'ego ị ka ji."], ["Ihe nchekwa (collateral)", "ihe onye na-agbazinye ego nwere ike iwere ma ọ bụrụ na ị kwụghachighị."], ["Oge izu ike (grace period)", "oge na mmalite mbinye ego mgbe ị na-adịghị akwụghachi."], ["Nkwa nchekwa mbinye ego (credit guarantee)", "nkwa onye nke atọ kwere ikpuchi akụkụ ihe onye na-agbazinye ego tụfuru ma ọ bụrụ na onye gbaziri ego akwụghachighị."]],
          slides: [
            { title: "Mara ọnụ ọmụrụ nwa", bullets: ["Kwa ọnwa ka ọ bụ kwa afọ?", "Flat: ọnụ ọmụrụ nwa n'ego niile oge niile", "Reducing balance: naanị n'ego ị ka ji"] },
            { title: "Ihe nchekwa na nkwa", bullets: ["Akwụkwọ ala, ngwaọrụ, ego nchekwa, nkwa otu", "NIRSAL (Naịjirịa), GIRSAL (Ghana) na-akwado ndị na-agbazinye", "Ị ka ji mbinye ego ahụ niile"] },
            { title: "Mee ka ịkwụghachi dabara owuwe (ọmụmaatụ KES)", bullets: ["A: 10,000 x 12 site n'ọnwa na-abịa = 120,000", "B: 112,000 otu mgbe n'ọnwa 6, mgbe owuwe gachara", "B na-eri obere ma dabara mgbe ego na-abata"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Were ihe abụọ e nyere maka mbinye ego (ezi ma ọ bụ ọmụmaatụ). Maka nke ọ bụla, dee ego ole, ọnụ ọmụrụ nwa (kwa ọnwa ma ọ bụ kwa afọ, flat ma ọ bụ reducing), ụgwọ, ego niile a ga-akwụghachi, ihe nchekwa na ọnwa ịkwụghachi. Kaa ọnwa ịkwụghachi akara n'atụmatụ mbata na mpụta ego gị ma họrọ nke dabara karịa.",
          youCanNow: "ịtụnyere ihe e nyere maka mbinye ego site n'ọnụ ha niile, ihe nchekwa na oge ịkwụghachi ma họrọ nke dabara owuwe ihe ubi gị.",
          quickCheck: [
            { objective: "O3", q: "Mbinye ego abụọ na-egosi otu nọmba, 2% kwa ọnwa. Otu bụ flat, nke ọzọ bụ reducing balance. Kedu nke na-erikarị obere?", options: ["Mbinye ego flat rate", "Ha na-eri otu ihe mgbe niile", "Mbinye ego reducing balance", "Ọ dabere na agba akwụkwọ ahụ"], answer: 2, why: "Reducing balance na-ana naanị n'ego ị ka ji, ya mere ọnụ ọmụrụ nwa niile dị ala." },
            { objective: "O3", q: "A na-ere ọka gị n'ọnwa 6. Kedu atụmatụ ịkwụghachi dabara kacha?", options: ["Ịkwụghachi kwa izu site n'izu 1", "Ịkwụghachi kwa ọnwa site n'ọnwa na-abịa", "Ịkwụghachi kwa ụbọchị", "Oge izu ike na ịkwụghachi mgbe owuwe ihe ubi gachara"], answer: 3, why: "Ịkwụghachi mgbe ego owuwe ihe ubi gị batara na-egbochi ịgafe ụbọchị ịkwụ ụgwọ na ire ihe n'ike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mkpa gị na ego kacha nso gị",
        questions: [
          { objective: "O1", q: "Gịnị mere i ji depụta ego ọrụ na ngwaọrụ iche iche?", options: ["Ndị na-agbazinye ego nwere ike ile ha anya n'ụzọ dị iche n'ihi na ha na-akwụghachi n'oge dị iche", "Ọ na-eme ka ndepụta ahụ dị ogologo", "Ngwaọrụ anaghị achọ ego mgbe ọ bụla", "Ọ dịghị ihe kpatara ya"], answer: 0, why: "Ego ọrụ na-alọghachi n'otu okirikiri; ngwaọrụ na-akwụghachi n'ime ọtụtụ afọ." },
          { objective: "O1", q: "Ị kwesịrị itinye ụgwọ akwụkwọ ụmụaka n'arịrịọ mbinye ego ugbo?", options: ["Ee, mgbe niile", "Ee, ma ọ bụrụ na onye na-agbazinye ego ajụghị", "Mba, gbazite maka ugbo naanị ihe ugbo nwere ike ịkwụghachi", "Naanị n'oge ọkọchị"], answer: 2, why: "Mmefu ụlọ anaghị amịpụta ego, ya mere ọ na-eme ka mbinye ego ugbo sie ike ịkwụghachi." },
          { objective: "O2", q: "Na VSLA nkịtị, ego ole ka onye otu nwere ike ịgbazite?", options: ["Ego ọ bụla", "Ruo ihe dị ka ugboro atọ ego nchekwa ya", "Naanị ego nchekwa nke ya", "Ugboro iri ego nchekwa ya"], answer: 1, why: "Mbinye ego VSLA na-akwụsịkarị n'ihe dị ka ugboro atọ ego nchekwa onye otu ahụ." },
          { objective: "O2", q: "Kedu ụlọ ọrụ na Kenya na-enye SACCO na-anara ego nchekwa ikike?", options: ["KALRO", "KAMIS", "The Kenya Meteorological Department", "SASRA"], answer: 3, why: "SASRA na-enye ikike ma na-elekọta SACCO na-anara ego nchekwa ma depụta ha." },
          { objective: "O3", q: "Gbazite 50,000, kwụghachi 5,000 kwa ọnwa ruo ọnwa 12 gbakwunye ụgwọ 2,000. Gịnị bụ ọnụ mbinye ego ahụ niile?", options: ["12,000", "60,000", "10,000", "2,000"], answer: 0, why: "Ị na-akwụghachi 60,000 + 2,000 = 62,000, nke karịrị ihe i gbaziri ji 12,000." }
        ]
      }
    },
    {
      name: "Isi 2: Ụzọ ndị ọzọ e si enweta ego, na ịrịọ ya",
      lessons: [
        {
          title: "Akwụkwọ nnata ụlọ nkwakọba na mbinye ihe ọrụ ugbo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Depụta ọnụ, ọrụ na ihe egwu nke mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba na mbinye ihe ọrụ ugbo.",
          text: [
            "Mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba: ị na-ebuga ihe ubi dị ọcha, kpọrọ nkụ, a hazịrị n'ọkwa n'ụlọ nkwakọba nwere asambodo. A na-atụ ya ma nwalee ya, ị na-enwetakwa akwụkwọ nnata na-egosi na ị nwe ihe dị otu ọnụọgụ na otu ọkwa ahụ. Ụlọ akụ mmekọ nwere ike ịgbazinye gị ego site n'akwụkwọ nnata ahụ, ka ị nweta ego ugbu a ma ree ya ma emechaa mgbe ọnụahịa nwere ike ịka mma; a na-akwụghachi mbinye ego ahụ site n'ire ya. Na Kenya, Warehouse Receipt System Council na-enye ụlọ nkwakọba asambodo. Na Ghana, Ghana Commodity Exchange na ARB Apex Bank malitere mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba eletrọnịkị na 2019, na 2023 otu ụlọ ọrụ savings and loans sonyekwara inye mbinye ego e ji ihe ubi chekwaa, nke ndị ọrụ ugbo na-akwụghachi mgbe ha rere ihe. Jụọ onye na-agbazinye ego akụkụ ole nke ọnụ ihe ubi ahụ ọ ga-agbazinye na ruo ogologo oge ole.",
            "Ọnụ na ihe egwu: ụgwọ nkwakọba na mbugharị, inshọransị, ọnụ ọmụrụ nwa na njem. Ọ bụrụ na ọnụahịa adaa kama ịrị elu, ire ya nwere ike ọ gaghị ezu ịkwụ mbinye ego na ụgwọ. Ihe ubi ahụ ga-eru ọkwa ahụ, ya mere ịkpọ nkụ ma ọ bụ ịhọcha ya nke ọma na-ebelata uru ya. Gbakọọ ọnụahịa ị chọrọ site n'usoro storage break-even dị n'ihe ọmụmụ nchịkwa ihe egwu.",
            "Mbinye ihe ọrụ ugbo (input credit): onye na-azụ ihe, onye na-emepụta ihe, mmemme outgrower ma ọ bụ otu na-enye mkpụrụ, fatịlaịza ma ọ bụ ụmụ ọkụkọ n'ụgwọ, na-enyekarị ọzụzụ, ị na-akwụghachikwa nke nta nke nta ma ọ bụ a na-ewepụ ọnụ ya n'ego owuwe ihe ubi gị. One Acre Fund na-arụ ọrụ otu a na ndị ọrụ ugbo na Kenya, Naịjirịa na mba ndị ọzọ. Lelee: ọnụahịa ihe ọrụ ugbo ahụ ma e jiri ya tụnyere ọnụahịa ego aka, ụgwọ niile, ego ole a ga-ewepụ n'oge owuwe ihe ubi, ma ị ga-ere naanị ha, ihe na-eme ma owuwe ihe ubi daa, na ntaramahụhụ maka side-selling."
          ],
          steps: ["Akwụkwọ nnata ụlọ nkwakọba: chọta ụlọ nkwakọba nwere asambodo na ndị mmekọ ya na-agbazinye ego.", "Jụọ ụgwọ nkwakọba, mbugharị, inshọransị na mbinye ego.", "Jụọ ego ole ị nwere ike ịgbazite site n'ihe ubi ahụ na ruo ogologo oge ole.", "Gbakọọ ọnụahịa ire ị chọrọ iji kwụghachi ihe niile.", "Mbinye ihe ọrụ ugbo: tụnyere ọnụahịa ihe ọrụ ugbo na ọnụahịa ego aka ma depụta ụgwọ niile.", "Jụọ ihe na-eme ma owuwe ihe ubi daa na ma ị ga-ere naanị ha."],
          words: [["Akwụkwọ nnata ụlọ nkwakọba (warehouse receipt)", "akwụkwọ si n'ụlọ nkwakọba nwere asambodo na-egosi na ị nwe ihe ubi e debere dị otu ọnụọgụ na otu ọkwa."], ["Ụlọ nkwakọba nwere asambodo", "ụlọ nkwakọba e lelere ma kwado ka o debe ihe ubi nke ọma ma nye akwụkwọ nnata."], ["Mbinye ihe ọrụ ugbo (input credit)", "mkpụrụ, fatịlaịza ma ọ bụ ihe ọrụ ugbo ndị ọzọ e nyere ugbu a ma a na-akwụ ụgwọ ha ma emechaa, na-esikarị n'owuwe ihe ubi."], ["Mmemme outgrower", "nhazi ebe ụlọ ọrụ na-enye ndị ọrụ ugbo ihe ọrụ ugbo na ndụmọdụ ma zụta ihe ubi ha."]],
          slides: [
            { title: "Mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba", bullets: ["Buga ihe ubi a hazịrị n'ọkwa; nweta akwụkwọ nnata", "Gbazite ego site na ya; ree ma emechaa", "Kenya: WRS Council; Ghana: ụlọ nkwakọba GCX"] },
            { title: "Ọnụ na ihe egwu", bullets: ["Nkwakọba, mbugharị, inshọransị, ọnụ ọmụrụ nwa", "Ọnụahịa nwere ike ịda kama ịrị elu", "Ihe ubi ga-eru ọkwa ahụ"] },
            { title: "Mbinye ihe ọrụ ugbo", bullets: ["Ihe ọrụ ugbo ugbu a, kwụghachi nke nta nke nta ma ọ bụ n'owuwe", "Ndị na-azụ ihe, ndị na-emepụta ihe, outgrower, One Acre Fund", "Tụnyere ya na ọnụahịa ego aka; depụta ụgwọ niile"] },
            { title: "Jụọ tupu ị bịanye aka", bullets: ["Gịnị ka a ga-ewepụ n'oge owuwe?", "Ị ga-ere naanị ha?", "Ọ bụrụ na owuwe ihe ubi daa, gịnị ga-eme?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Họrọ mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba ma ọ bụ mbinye ihe ọrụ ugbo dị nso gị (ma ọ bụ ọmụmaatụ). Dee opekata mpe usoro anọ (ọnụ, ego ole, ogologo oge, ihe a na-ewepụ ma ọ bụ iwu ire ihe) na ihe egwu abụọ, ma kwuo ma ọ dabara ugbo gị.",
          youCanNow: "ịkọwa otu mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba na mbinye ihe ọrụ ugbo si arụ ọrụ ma lelee ọnụ na ihe egwu ha tupu ị bịanye aka.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka akwụkwọ nnata ụlọ nkwakọba na-egosi?", options: ["Na ị nwe ihe ubi e debere dị otu ọnụọgụ na otu ọkwa", "Na ị kwụọla ụtụ isi gị", "Na ọnụahịa ga-arị elu", "Na ụlọ akụ akwadola mbinye ego"], answer: 0, why: "Akwụkwọ nnata ahụ bụ ihe akaebe na ị nwe ihe ubi a hazịrị n'ọkwa ma debe, nke onye na-agbazinye ego nwere ike ịnabata." },
            { objective: "O4", q: "Mmemme mbinye ihe ọrụ ugbo na-ewepụ ọnụ ihe ọrụ ugbo n'ego owuwe ihe ubi gị. Gịnị ka ị ga-elele?", options: ["Naanị ụdị mkpụrụ", "Ọ dịghị ihe; ụlọ ọrụ ahụ na-ekpebi", "Ọnụahịa ihe ọrụ ugbo ma e jiri ya tụnyere ọnụahịa ego aka, ụgwọ niile na ihe na-eme ma owuwe ihe ubi daa", "Naanị ụbọchị ọzụzụ"], answer: 2, why: "Usoro ndị a na-ekpebi ego ole ị na-akwụ n'ezie na onye na-ebu ọdịda ihe ubi." }
          ]
        },
        {
          title: "Onyinye ego, mmemme ndị ntorobịa na izere aghụghọ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lelee onyinye ego, mmemme ndị ntorobịa ma ọ bụ mbinye ego na isi iyi gọọmentị ma hụ ihe ịrịba ama aghụghọ.",
          text: [
            "A naghị akwụghachi onyinye ego (grant), mana ọtụtụ mmadụ na-asọ mpi maka ya, o nwere iwu gbasara otu ị ga-esi mefu ego ahụ, ọ na-achọkwa akụkọ. Ọtụtụ \"youth funds\" bụ n'ezie mbinye ego ma ọ bụ ọzụzụ. Ọmụmaatụ ị nwere ike ilele: mmemme ENABLE Youth nke African Development Bank na-azụ ma na-akwado ndị ntorobịa na-arụ azụmahịa ugbo n'ọtụtụ mba Afrịka, ya na ndị mmekọ dị ka IITA; Youth Enterprise Development Fund nke Kenya na-agbazinye azụmahịa ndị ntorobịa ego, gụnyere Agri-Biz loan; DER/FJ nke Senegal na-akwado ọrụ ụmụ nwanyị na ndị ntorobịa, gụnyere n'ugbo, karịsịa site na mbinye ego. Mmemme na-emeghe ma mechie ma gbanwee iwu ha: lelee mgbe niile na weebụsaịtị gọọmentị ma ọ bụ ọfịs ha na oku ahụ (call) mepere ugbu a tupu i tinye akwụkwọ.",
            "Ndị aghụghọ na-eṅomi aha na akara (logo) nke ezi mmemme na soshal midia na WhatsApp. Ihe ịdọ aka na ntị: ị ga-akwụ ụgwọ \"processing\" ma ọ bụ \"registration\" tupu ị nweta onyinye ego ma ọ bụ mbinye ego; a na-ekwe nkwa na a ga-akwado ya \"n'ezie\" (guaranteed); a na-eme ka ị mee ngwa ngwa; a na-arịọ PIN gị, koodu otu oge ma ọ bụ foto ID gị site na chat; onye ahụ na-eji nọmba ma ọ bụ email nke ya; ma ọ bụ ngwa mbinye ego chọrọ ịbanye na kọntaktị gị niile. Ezi mmemme anaghị ana ụgwọ maka itinye akwụkwọ, ha anaghịkwa arịọ PIN gị mgbe ọ bụla.",
            "Lelee onye ọ bụla na-agbazinye ego na ngwa mbinye ego ọ bụla: na Kenya, Central Bank of Kenya na-ebipụta ndepụta ndị na-enye mbinye ego dijitalụ nwere ikike, SASRA na-edepụtakwa SACCO nwere ikike; na Naịjirịa, FCCPC na-ebipụta ndekọ ndị na-agbazinye ego dijitalụ a kwadoro, Central Bank of Nigeria na-enyekwa ụlọ akụ microfinance ikike; na mba CFA franc, lelee na BCEAO ma ọ bụ ọfịs microfinance nke mba ahụ. Ọ bụrụ na obi abụọ dị gị, jụọ otu nkwado gị ma ọ bụ onye ndụmọdụ ugbo."
          ],
          steps: ["Chọta mmemme ahụ na weebụsaịtị gọọmentị ma ọ bụ ọfịs ya, ọ bụghị post soshal midia.", "Lelee na oku ahụ mepere ugbu a ma gụọ iwu ya.", "Akwụla ụgwọ ọ bụla maka itinye akwụkwọ ma ọ bụ inweta onyinye ego.", "Ekesala PIN gị, koodu otu oge ma ọ bụ okwuntughe mgbe ọ bụla.", "Lelee ndị na-agbazinye ego na ngwa mbinye ego na ndepụta onye nlekọta.", "Jụọ otu nkwado gị ma ọ bụ onye ndụmọdụ ugbo ma ọ bụrụ na o doghị gị anya."],
          words: [["Onyinye ego (grant)", "ego e nyere maka ebumnuche nke a na-adịghị akwụghachi, nke na-enwekarị iwu na akụkọ."], ["Oku itinye akwụkwọ (call for applications)", "ọkwa na mmemme na-anabata akwụkwọ, nwere ụbọchị mmalite na njedebe."], ["Aghụghọ (scam)", "ụzọ e ji ezu ego ma ọ bụ ozi."], ["Onye nlekọta (regulator)", "ụlọ ọrụ gọọmentị na-enye ma na-elekọta ndị na-agbazinye ego, SACCO ma ọ bụ ụlọ ọrụ inshọransị ikike."]],
          slides: [
            { title: "Onyinye ego na mmemme ndị ntorobịa", bullets: ["Onyinye ego: a naghị akwụghachi, mana a na-asọ mpi, nwere iwu", "Ọtụtụ youth funds bụ mbinye ego ma ọ bụ ọzụzụ", "Lelee na oku ahụ mepere ugbu a, na saịtị gọọmentị"] },
            { title: "Ọmụmaatụ ị ga-elele", bullets: ["AfDB ENABLE Youth (ya na IITA)", "Kenya: mbinye ego Youth Enterprise Development Fund", "Senegal: DER/FJ maka ụmụ nwanyị na ndị ntorobịa"] },
            { title: "Ihe ịrịba ama aghụghọ", bullets: ["Ụgwọ maka itinye akwụkwọ ma ọ bụ inweta ego", "Nkwa nkwado \"guaranteed\"; ime ka ị mee ngwa ngwa", "Ịrịọ PIN, koodu ma ọ bụ foto ID site na chat"] },
            { title: "Lelee onye nlekọta", bullets: ["Kenya: ndị na-agbazinye dijitalụ CBK; SACCO SASRA", "Naịjirịa: ngwa mbinye ego FCCPC; microfinance CBN", "Mba CFA: BCEAO ma ọ bụ ọfịs mba ahụ"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Chọta otu onyinye ego, mmemme ndị ntorobịa ma ọ bụ ngwa mbinye ego ị nụrụ banyere ya. Lelee ya na weebụsaịtị gọọmentị ma ọ bụ ndepụta onye nlekọta, ma dee: ọ bụ eziokwu, ọ mepere ugbu a, ọ bụ onyinye ego ka ọ bụ mbinye ego, na ihe ịdọ aka na ntị ọ bụla ị hụrụ.",
          youCanNow: "ịlele ma onyinye ego, mmemme ma ọ bụ onye na-agbazinye ego ọ bụ eziokwu ma mepee, ma hụ ihe ịdọ aka na ntị nke aghụghọ.",
          quickCheck: [
            { objective: "O5", q: "Ozi WhatsApp kwuru na i nwetala onyinye ego ugbo ma ị ga-akwụ ụgwọ processing 5,000. Gịnị bụ nke a?", options: ["Nzọụkwụ onyinye ego nkịtị", "Ihe ịdọ aka na ntị nke aghụghọ", "Iwu gọọmentị", "Ịkwụghachi mbinye ego"], answer: 1, why: "Ezi onyinye ego anaghị ana gị ụgwọ ka ị nweta ego." },
            { objective: "O5", q: "Na Naịjirịa, ebee ka ị nwere ike ilele ma a kwadoro ngwa mbinye ego?", options: ["Mgbasa ozi ngwa ahụ n'onwe ya", "Echiche enyi gị", "Ọnụọgụ ndị budatara ya", "Ndekọ FCCPC nke ndị na-agbazinye ego dijitalụ"], answer: 3, why: "FCCPC na-ebipụta ndepụta ndị na-agbazinye ego dijitalụ a kwadoro." }
          ]
        },
        {
          title: "Ide arịrịọ ego nwere otu peeji",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee arịrịọ ego nwere otu peeji maka ugbo gị.",
          text: [
            "Arịrịọ ego na-agwa onye na-agbazinye ego, mmemme ma ọ bụ onye itinye ego ihe ị chọrọ, ihe mere, na otu a ga-esi akwụghachi ya ma ọ bụ otu ọ ga-esi mepụta uru. Mee ka ọ bụrụ otu peeji nwere isi okwu doro anya: onye ị bụ na ugbo gị (ebe ọ dị, ala, ụdị ọrụ ugbo, afọ ole i ji rụọ ugbo); ebumnuche na ego ole (ego niile a chọrọ, ego nke gị, oghere ego ị na-arịọ, kewara n'ego ọrụ na ngwaọrụ); otu ọ ga-esi mepụta ego (ọnụ otu ihe, gross margin ma ọ bụ oge ịkwụghachi site na ndekọ gị); ego ị na-arịọ na ihe mere o ji dabara; atụmatụ ịkwụghachi n'otu ọnwa n'otu ọnwa, dabara mbata na mpụta ego gị; ihe nchekwa ma ọ bụ nkwa; ihe egwu na otu ị na-achịkwa ha (inshọransị, nkwekọrịta, ịgbasa ụdị ọrụ ugbo, nkwakọba); na ihe ị mere na mbụ (ndekọ i debere, mbinye ego gara aga i kwụghachiri, ịbụ onye otu).",
            "Ndị itinye ego dị iche na ndị na-agbazinye ego. Onye itinye ego na-etinye ego maka akụkụ nke azụmahịa ahụ na uru ya n'ọdịnihu (equity), kama ka a kwụghachi ya na ọnụ ọmụrụ nwa. Ndị itinye ego equity na-achọkarị azụmahịa na-eto eto dị ka ndị na-emepụta ihe ma ọ bụ ugbo ka ukwuu nwere ndekọ na otu ndị ọrụ. Ị na-ahapụ akụkụ nke inwe ya na ụfọdụ ikike ịchịkwa ya, ya mere nweta ndụmọdụ ọka iwu ma ebinyela aka n'ihe ị na-aghọtaghị mgbe ọ bụla.",
            "Tupu i ziga ya, lelee nọmba ndị ahụ ugboro abụọ, rịọ onye isi otu nkwado, onye ndụmọdụ ugbo ma ọ bụ onye ndụmọdụ ka ọ gụọ ya, ma tinye ndekọ gị. Etinyela okwuntughe, PIN ma ọ bụ ozi ụlọ akụ gị niile n'arịrịọ ahụ; nye ha naanị site n'usoro gọọmentị nke onye na-agbazinye ego."
          ],
          steps: ["Onye ị bụ na ugbo gị.", "Ebumnuche, ego niile a chọrọ, ego nke gị na oghere ego.", "Otu ọ ga-esi mepụta ego: ọnụ otu ihe, margin ma ọ bụ oge ịkwụghachi.", "Ụdị ego na atụmatụ ịkwụghachi n'otu ọnwa n'otu ọnwa.", "Ihe nchekwa ma ọ bụ nkwa; ihe egwu na otu ị na-achịkwa ha.", "Ihe ị mere na mbụ; lelee nọmba ma rịọ onye ndụmọdụ ka ọ gụọ ya."],
          words: [["Arịrịọ ego (funding request)", "obere akwụkwọ na-arịọ onye na-agbazinye ego, mmemme ma ọ bụ onye itinye ego ego, na-egosi ebumnuche, ego ole na ịkwụghachi."], ["Equity", "akụkụ nke inwe azụmahịa nke onye itinye ego na-enweta maka ego ya."], ["Ihe ị mere na mbụ (track record)", "ihe akaebe nke ihe ị meworo, dị ka ndekọ i debere na mbinye ego i kwụghachiri."]],
          slides: [
            { title: "Otu peeji, isi okwu doro anya", bullets: ["Onye ị bụ na ugbo gị", "Ebumnuche, ego niile a chọrọ, ego nke gị, oghere ego", "Otu ọ ga-esi mepụta ego: ọnụ otu ihe, margin, oge ịkwụghachi"] },
            { title: "Ịkwụghachi na nchekwa", bullets: ["Ịkwụghachi n'otu ọnwa n'otu ọnwa, dabara mbata na mpụta ego", "Ihe nchekwa ma ọ bụ nkwa", "Ihe egwu na otu ị na-achịkwa ha"] },
            { title: "Ndị itinye ego dị iche", bullets: ["Ego maka akụkụ nke azụmahịa (equity)", "Ị na-ahapụ akụkụ nke inwe ya na ikike ịchịkwa ya", "Buru ụzọ nweta ndụmọdụ ọka iwu"] },
            { title: "Tupu i ziga ya", bullets: ["Lelee nọmba ugboro abụọ; tinye ndekọ", "Rịọ onye ndụmọdụ ka ọ gụọ ya", "Enweghị PIN ma ọ bụ okwuntughe n'arịrịọ ahụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee arịrịọ ego gị nwere otu peeji nwere ebumnuche, ego niile a chọrọ, ego nke gị na oghere ego, otu ọ ga-esi mepụta ego, ụdị ego na ihe mere, atụmatụ ịkwụghachi kwa ọnwa, ihe nchekwa, ihe egwu na ihe ị mere na mbụ. Rịọ otu onye i tụkwasịrị obi ka ọ gụọ ya.",
          youCanNow: "ide arịrịọ ego doro anya nwere otu peeji, nke nọmba nke gị kwadoro, nke onye na-agbazinye ego, mmemme ma ọ bụ onye itinye ego nwere ike inyocha.",
          quickCheck: [
            { objective: "O6", q: "Kedu ego ole ka arịrịọ gị kwesịrị ịrịọ?", options: ["Oghere ego mgbe i tinyechara ego nke gị", "Ego niile, n'eleghị ego nke gị anya", "Ego niile onye na-agbazinye ego ga-enye", "Okpukpu abụọ ego niile ka ọ dị mma"], answer: 0, why: "Ịrịọ oghere ego na-egosi nraranye gị ma na-eme ka mbinye ego ahụ dị obere ka o kwere mee." },
            { objective: "O6", q: "Gịnị ka onye itinye ego equity na-enweta maka ego ya?", options: ["Naanị ọnụ ọmụrụ nwa a kara aka kwa ọnwa", "Ọ dịghị ihe", "Akụkụ nke azụmahịa na uru ya n'ọdịnihu", "Akwụkwọ ala gị"], answer: 2, why: "Equity pụtara inwe akụkụ nke azụmahịa ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ụzọ ndị ọzọ e si enweta ego, na ịrịọ ya",
        questions: [
          { objective: "O4", q: "Na mbinye ego site n'akwụkwọ nnata ụlọ nkwakọba, gịnị na-eme ma ọnụahịa daa kama ịrị elu?", options: ["Ụlọ akụ na-akagbu mbinye ego ahụ", "Ire ya nwere ike ọ gaghị ezu ịkwụ mbinye ego na ụgwọ", "Ụlọ nkwakọba na-akwụ ndịiche ahụ", "Ọ dịghị ihe na-agbanwe"], answer: 1, why: "Ị ka ji mbinye ego na ụgwọ n'agbanyeghị ọnụahịa." },
          { objective: "O4", q: "Kedu nke bụ iwu a na-ahụkarị na mmemme outgrower ma ọ bụ mbinye ihe ọrụ ugbo?", options: ["Ị naghị akwụghachi mgbe ọ bụla", "Ị ga-ere onye ọ bụla ma ọ bụghị ha", "Ihe ọrụ ugbo na-abụ n'efu mgbe niile", "A na-ewepụ ọnụ ihe ọrụ ugbo n'ego owuwe ihe ubi gị"], answer: 3, why: "Ọtụtụ mmemme na-enweta ọnụ ihe ọrụ ugbo mgbe ha zụrụ ihe ubi gị." },
          { objective: "O5", q: "Tupu i tinye akwụkwọ na mmemme ndị ntorobịa na-arụ azụmahịa ugbo, ị kwesịrị ibu ụzọ:", options: ["Lelee na weebụsaịtị gọọmentị na oku ahụ mepere ugbu a", "Kwụọ ụgwọ registration", "Ziga PIN gị nye ndị na-ahazi ya", "Kesaa ya na soshal midia"], answer: 0, why: "Mmemme na-emeghe ma mechie; saịtị gọọmentị na-egosi ihe bụ eziokwu na nke dị ugbu a." },
          { objective: "O5", q: "Ngwa mbinye ego na-arịọ ịbanye na kọntaktị niile dị n'ekwentị gị. Nke a bụ:", options: ["Iwu ụlọ akụ nkịtị", "Ihe iwu chọrọ", "Ihe ịdọ aka na ntị; buru ụzọ lelee na ngwa ahụ nwere ikike", "Ihe ịrịba ama ezigbo onye na-agbazinye ego"], answer: 2, why: "Ngwa na-enweghị ikike na-eji ndepụta kọntaktị eme ndị gbaziri ego ihere; lelee ndepụta onye nlekọta." },
          { objective: "O6", q: "Kedu nke kwesịrị ịdị n'arịrịọ ego nwere otu peeji?", options: ["PIN mobile money gị", "Atụmatụ ịkwụghachi kwa ọnwa dabara mbata na mpụta ego gị", "Naanị peeji iri nke foto", "Ụgwọ ndị agbata obi gị ji"], answer: 1, why: "Ndị na-agbazinye ego kwesịrị ịhụ otu na mgbe ị ga-akwụghachi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịchọta Ego maka Ugbo Gị: Mbinye Ego, Onyinye Ego na Ndị Itinye Ego",
    questions: [
      { objective: "O1", q: "Ego niile a chọrọ 2,000,000; ego nke gị 600,000. Oghere ego bụ:", options: ["2,600,000", "600,000", "1,400,000", "2,000,000"], answer: 2, why: "2,000,000 - 600,000 = 1,400,000." },
      { objective: "O1", q: "Ego ọrụ bụ ego:", options: ["Na-akwụ ụgwọ otu okirikiri mmepụta ma na-alọghachi mgbe ị rere ihe", "Na-azụ ala", "Na-akwụ ụgwọ akwụkwọ ụmụaka", "A naghị akwụghachi mgbe ọ bụla"], answer: 0, why: "Ọ na-akwụ ụgwọ ihe ọrụ ugbo na ndị ọrụ maka otu okirikiri." },
      { objective: "O1", q: "Gịnị mere i ji tinye ọnụ ọ bụla n'ọnwa a chọrọ ya?", options: ["Ndị na-agbazinye ego na-amasị ndepụta ogologo", "Iji gbazite karịa ihe ị chọrọ", "Ọ dịghị ihe ọ na-agbanwe", "Ka ị nweta ego mgbe ị chọrọ ya ma ghara ịkwụ ọnụ ọmụrụ nwa n'ego na-anọ nkịtị"], answer: 3, why: "Oge kwesịrị ekwesị na-eme ka mbinye ego na ọnụ ọmụrụ nwa dị ala ka o kwere mee." },
      { objective: "O2", q: "Ugboro ole ka VSLA nkịtị na-ezukọ?", options: ["Otu ugboro n'afọ", "Kwa izu", "Naanị n'ụbọchị nkesa", "Ọ dịghị mgbe"], answer: 1, why: "Ọgbakọ kwa izu bụ mgbe ndị otu na-azụ òkè ma na-akwụghachi mbinye ego." },
      { objective: "O2", q: "Gịnị ka ego enyemaka (social fund) VSLA bụ maka ya?", options: ["Ịkwụ onye isi oche ụgwọ", "Ịzụ ala", "Ihe mberede ndị otu", "Naanị oriri"], answer: 2, why: "Ego enyemaka na-enyere ndị otu aka n'ihe mberede." },
      { objective: "O2", q: "Tupu i sonye n'otu nchekwa ego, kedu ihe ị kwesịrị ilele?", options: ["Iwu e dere ede ya, ụgwọ mbinye ego na otu e si echebe ego", "Naanị onye bụ onye isi oche", "Naanị ebe ọgbakọ", "Ọ dịghị ihe"], answer: 0, why: "Iwu doro anya na ego echebere nke ọma na-echebe ego nchekwa gị." },
      { objective: "O3", q: "Reducing balance rate na-ana ọnụ ọmụrụ nwa na:", options: ["Ego niile ahụ ruo mgbe mbinye ego gwụrụ", "Ọ dịghị ihe", "Naanị ụgwọ", "Naanị ego ị ka ji"], answer: 3, why: "Ka ị na-akwụghachi, ọnụ ọmụrụ nwa na-ebelata." },
      { objective: "O3", q: "Gịnị ka mmemme nkwa nchekwa mbinye ego dị ka NIRSAL na-eme?", options: ["Na-akagbu mbinye ego ndị ọrụ ugbo", "Na-ekpuchi akụkụ ihe onye na-agbazinye ego tụfuru ma ọ bụrụ na onye gbaziri ego akwụghachighị", "Na-akwụ ọnụ ọmụrụ nwa ndị ọrụ ugbo", "Na-enye onyinye ego n'efu"], answer: 1, why: "Ọ na-echebe ndị na-agbazinye ego ka ha gbazinye karịa; ị ka ji mbinye ego ahụ niile." },
      { objective: "O3", q: "Kedu nke bụ ihe nchekwa (collateral)?", options: ["Ihe ubi kacha amasị gị", "Akwụkwọ ala ma ọ bụ ngwaọrụ onye na-agbazinye ego nwere ike iwere ma ọ bụrụ na ị kwụghachighị", "Nọmba ekwentị gị", "Ọnụahịa ahịa"], answer: 1, why: "Ihe nchekwa bụ nchekwa maka onye na-agbazinye ego." },
      { objective: "O3", q: "Nhọrọ A: kwụghachi 120,000 kwa ọnwa site n'ọnwa na-abịa. Nhọrọ B: kwụghachi 112,000 otu mgbe mgbe owuwe gachara. Maka onye na-akọ ihe ubi, B:", options: ["Na-eri karịa ma dabaghị nke ọma", "Bụ megidere iwu mgbe niile", "Na-eri obere ma na-akwụghachi mgbe ego owuwe ihe ubi batara", "Dị ka A"], answer: 2, why: "Ego niile nke B dị ala, ọ na-erukwa mgbe onye ọrụ ugbo nwere ego." },
      { objective: "O4", q: "Ebee ka ị na-edebe ihe ubi iji nweta akwụkwọ nnata ụlọ nkwakọba?", options: ["Ụlọ ahịa ọ bụla", "N'ụlọ", "N'aka onye ahịa ị ka zutere", "Ụlọ nkwakọba nwere asambodo"], answer: 3, why: "Naanị ụlọ nkwakọba nwere asambodo na-enye akwụkwọ nnata ndị na-agbazinye ego na-anabata." },
      { objective: "O4", q: "Na Kenya, kedu ụlọ ọrụ na-enye ụlọ nkwakọba asambodo maka akwụkwọ nnata ụlọ nkwakọba?", options: ["The Warehouse Receipt System Council", "KAMIS", "NAFDAC", "The Kenya Meteorological Department"], answer: 0, why: "WRS Council na-enye asambodo ma na-elekọta ụlọ nkwakọba." },
      { objective: "O4", q: "Gịnị bụ side-selling?", options: ["Ire ihe n'akụkụ okporo ụzọ", "Ire ihe ubi e kwere otu onye na-azụ ihe nkwa nye onye ọzọ", "Ire ihe nye otu nkwado", "Ire ihe nke nta nke nta"], answer: 1, why: "Ọ na-emebi nkwekọrịta mbinye ihe ọrụ ugbo ma ọ bụ nkwekọrịta ọzọ, nwekwara ike iweta ntaramahụhụ." },
      { objective: "O5", q: "Ezi mmemme onyinye ego:", options: ["Na-arịọ ụgwọ tupu ọ kwụọ gị", "Na-arịọ PIN gị", "Anaghị ana gị ụgwọ maka itinye akwụkwọ", "Na-ekwe onye ọ bụla nkwa nkwado"], answer: 2, why: "Ụgwọ, ịrịọ PIN na nkwa nkwado bụ ihe ịrịba ama aghụghọ." },
      { objective: "O5", q: "Youth Enterprise Development Fund nke Kenya na-enyekarị:", options: ["Ala n'efu", "Mbinye ego nye azụmahịa ndị ntorobịa", "Inshọransị ihe ubi", "Amụma ihu igwe"], answer: 1, why: "Ọ na-enye mbinye ego, gụnyere Agri-Biz loan, na nkwado azụmahịa." },
      { objective: "O5", q: "Ebee ka ị kwesịrị ilele ngwa mbinye ego dijitalụ nke Kenya?", options: ["Peeji soshal midia ya", "Ọnụọgụ kpakpando ya", "Otu chat enyi gị", "Ndepụta Central Bank of Kenya nke ndị na-enye mbinye ego dijitalụ nwere ikike"], answer: 3, why: "CBK na-enye ndị na-enye mbinye ego dijitalụ ikike ma bipụta ndepụta ha." },
      { objective: "O6", q: "Kedu isi okwu na-egosi onye na-agbazinye ego otu ego ahụ ga-esi mepụta ego?", options: ["Ọnụ otu ihe, gross margin ma ọ bụ oge ịkwụghachi", "Agba kacha amasị gị", "Aha ndị agbata obi gị", "PIN gị"], answer: 0, why: "Nọmba ndị a na-egosi na ego ahụ ga-amịpụta ego iji kwụghachi." },
      { objective: "O6", q: "Ihe ị mere na mbụ (track record) n'arịrịọ ego pụtara:", options: ["Ọsọ ole ị na-agba", "Ihe akaebe nke ihe ị meworo, dị ka ndekọ i debere na mbinye ego i kwụghachiri", "Kọntaktị ekwentị gị", "Ndepụta ihe ị chọrọ"], answer: 1, why: "Ihe ị rụrụ na mbụ na-enyere ndị na-agbazinye ego aka ịtụkwasị atụmatụ gị obi." },
      { objective: "O6", q: "Tupu i ziga arịrịọ ego, ị kwesịrị:", options: ["Tinye PIN gị ka o mee ngwa ngwa", "Mee ka nọmba ndị ahụ buo ibu", "Lelee nọmba ndị ahụ ugboro abụọ ma rịọ onye ndụmọdụ ka ọ gụọ ya", "Ziga ya na nọmba ọ bụla ị hụrụ n'ịntanetị"], answer: 2, why: "Nọmba e lelere na onye nke abụọ gụrụ ya na-eme ka arịrịọ ahụ sie ike ma dị nchekwa karịa." },
      { objective: "O6", q: "Gịnị ka ị na-ahapụ mgbe ị nara equity n'aka onye itinye ego?", options: ["Ọ dịghị ihe", "Ịbụ onye otu nchekwa ego gị", "Ala gị niile n'onwe ya", "Akụkụ nke inwe azụmahịa ahụ na ụfọdụ ikike ịchịkwa ya"], answer: 3, why: "Equity pụtara na onye itinye ego nwe akụkụ nke azụmahịa ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke arịrịọ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Mkpa na oghere ego", objective: "O1", notYet: "Ego ole ahụ bụ nkọ, ma ọ bụ a gwakọtara mmefu ụlọ n'ime ya.", meets: "Ego niile a chọrọ, ego nke gị na oghere ego ziri ezi, kewara n'ego ọrụ na ngwaọrụ, ya na ọnwa.", exceeds: "Nwere obere ego nchekwa ma gosi ebe nọmba ọnụ ọ bụla si." },
      { name: "Ụdị ego kwesịrị ekwesị", objective: "O2", notYet: "E nyeghị ihe kpatara e ji họrọ ụdị ego ahụ.", meets: "Na-akpọ aha ụdị ego ahụ (otu, SACCO, mbinye ego, akwụkwọ nnata ụlọ nkwakọba, mbinye ihe ọrụ ugbo, onyinye ego ma ọ bụ equity) na ihe mere o ji dabara.", exceeds: "Na-atụnyere opekata mpe nhọrọ abụọ, gụnyere nchekwa ego otu, ma kọwaa nhọrọ ahụ." },
      { name: "Atụmatụ ịkwụghachi", objective: "O3", notYet: "Enweghị atụmatụ ịkwụghachi, ma ọ bụ ịkwụghachi na-eru tupu ego ọ bụla abata.", meets: "Ịkwụghachi kwa ọnwa na ọnụ ya niile, dabara atụmatụ mbata na mpụta ego na owuwe ihe ubi.", exceeds: "Na-egosi ihe na-eme n'afọ ọjọọ na otu a ga-esi kwụọ ụgwọ n'agbanyeghị." },
      { name: "Nchekwa na usoro", objective: "O4", notYet: "Ihe nchekwa, nkwa ma ọ bụ usoro ndị bụ isi adịghị.", meets: "A kpọrọ aha ihe nchekwa ma ọ bụ nkwa, ya na usoro ndị bụ isi na ihe egwu abụọ.", exceeds: "Na-akọwa otu akwụkwọ nnata ụlọ nkwakọba, nkwekọrịta ma ọ bụ inshọransị si ebelata ihe egwu onye na-agbazinye ego." },
      { name: "Elelere ma dị nchekwa", objective: "O5", notYet: "E leleghị onye na-agbazinye ego ma ọ bụ mmemme ahụ, ma ọ bụ e tinyere ozi nzuzo dị ka PIN.", meets: "E lelere onye na-agbazinye ego ma ọ bụ mmemme ahụ na saịtị gọọmentị ma ọ bụ ndepụta onye nlekọta, ọ dịghịkwa koodu nzuzo n'ime ya.", exceeds: "Na-edetu ụbọchị e lelere ya na na oku ma ọ bụ ihe e nyere mepere ugbu a." },
      { name: "Arịrịọ doro anya nwere otu peeji", objective: "O6", notYet: "Ọ karịrị otu peeji ma ọ bụ enweghị ebumnuche, ego ole ma ọ bụ otu ọ ga-esi mepụta ego.", meets: "Otu peeji na-ekwu ebumnuche, ego ole, ego nke gị, otu ọ ga-esi mepụta ego, ịkwụghachi, ihe nchekwa, ihe egwu na ihe ị mere na mbụ.", exceeds: "Onye ndụmọdụ gụrụ ya, e tinyere ndekọ, a zakwara ihe o kwuru." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke arịrịọ ego",
      "Ndị na-amụ ihe kwuru na ha sonyere n'otu nchekwa ego ma ọ bụ SACCO, ma ọ bụ rịọ ego site n'arịrịọ e dere ede, n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha họrọ mbinye ego nwere ịkwụghachi mgbe owuwe ihe ubi gachara, ma ọ bụ gbazite obere ego karịa ihe ha bu n'obi na mbụ",
      "Ndị na-amụ ihe kwuru na ha lelere onye na-agbazinye ego, ngwa mbinye ego ma ọ bụ onyinye ego na ndepụta gọọmentị, ma ọ bụ jụ aghụghọ onyinye ego a na-akwụ ụgwọ maka ya",
      "Otu nkwado ma ọ bụ ndị na-agbazinye ego mmekọ na-akọ na ha na-enweta akwụkwọ arịrịọ zuru oke karịa na ịgafe ịkwụghachi belatara n'aka ndị gụchara ihe ọmụmụ a"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, na ekwentị nkịtị nwere ihe mgbakọ",
      "Atụmatụ ugbo, ndekọ na atụmatụ mbata na mpụta ego nke onye na-amụ ihe, ma ọ bụ nọmba ọmụmaatụ nke ihe ọmụmụ a",
      "Ihe e nyere maka mbinye ego (ezi ma ọ bụ ọmụmaatụ), iwu otu nchekwa ego, na akwụkwọ mbinye ihe ọrụ ugbo ma ọ bụ akwụkwọ nnata ụlọ nkwakọba si n'obodo, ma ọ bụrụ na ọ dị",
      "Ihe dị ka nkeji 80 n'ozuzu, n'oge nkenke, gbakwunye oge ide arịrịọ ego"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ nnọkọ ndụmọdụ ugbo: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" abụọ abụọ.",
      "Kpọọ SACCO, VSLA ma ọ bụ onye na-agbazinye ego nwere ikike ka ọ kọwaa iwu ya, mana akwadola onye ọ bụla na-agbazinye ego; hapụ ndị na-amụ ihe ka ha jụọ ajụjụ nkuzi ahụ.",
      "Tupu ị kpọọ aha onyinye ego ma ọ bụ mmemme ndị ntorobịa ọ bụla, lelee na saịtị gọọmentị ya na o mepere; ezigala njikọ si na soshal midia mgbe ọ bụla.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha kesaa PIN, okwuntughe, nọmba ID ma ọ bụ ozi ụlọ akụ n'omume; jiri ihe nnọchi.",
      "Jiri rubric tụọ akara arịrịọ ego ahụ ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge; gbaa ndị na-amụ ihe ume ka ha gosi ya otu nkwado ha ma ọ bụ onye na-agbazinye ego."
    ]
  }
};
