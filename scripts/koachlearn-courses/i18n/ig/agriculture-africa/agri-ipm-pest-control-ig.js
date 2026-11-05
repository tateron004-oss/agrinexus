"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-ipm-pest-control.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_IPM = { name: "FAO: Njikwa ụmụ ahụhụ jikọtara ọnụ (IPM)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID na ndị mmekọ: Fall Armyworm n'Afrịka: Akwụkwọ ntụziaka maka IPM (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO: app ekwentị maka ịlụ ọgụ megide fall armyworm n'Afrịka (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe: Ụmụ ahụhụ nke ọnwa: ahụhụ na-egwu akwụkwọ tomato, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe: Usoro push-pull kwụsịrị fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe: Nchọpụta ọhụrụ na-egosi otu push-pull si emeri fall armyworm (otu desmodium na brachiaria si arụ ọrụ)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe: Akwụkwọ ntụziaka ndị ọrụ ugbo maka Climate-Smart Push-Pull (mbipụta e degharịrị)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Ụlọ ọrụ na-ahụ maka nri na ọgwụ (NAFDAC, Naịjirịa)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (Ghana)", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH: Kọmitii ọgwụ ụmụ ahụhụ nke Sahel (CSP), akwụkwọ ntụziaka ndebanye aha", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control-ig",
  lang: "ig",
  translationOf: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Njikwa Ụmụ Ahụhụ Jikọtara Ọnụ na Njikwa Ụmụ Ahụhụ n'Ụzọ Okike",
  skills: "Igbochi ụmụ ahụhụ tupu ha amalite, Ilegharị ubi na ịmata fall armyworm na Tuta absoluta, Ikpebi mgbe ị ga-eme ihe site n'oke na ndekọ, Iji push-pull, ndị iro okike, ọnya na njikwa ndụ, Iji ọgwụ ụmụ ahụhụ n'enweghị nsogbu na n'ụzọ iwu kwadoro dị ka nzọụkwụ ikpeazụ",
  outcome: "ide na ime atụmatụ njikwa ụmụ ahụhụ jikọtara ọnụ (IPM) maka otu ihe ọkụkụ n'ugbo gị: igbochi ụmụ ahụhụ, ilegharị ubi kwa izu, iji oke kpebie mgbe ị ga-eme ihe, ibu ụzọ jiri ụzọ njikwa na-abụghị ọgwụ, na iji ọgwụ ụmụ ahụhụ a debanyere aha n'enweghị nsogbu naanị mgbe ọ dị mkpa n'ezie.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị ọrụ ugbo na-eto eto n'ahịa, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ọrụ ugbo, na ndị ndụmọdụ ọrụ ugbo (extension officers) ike gwụrụ ịgba ọgwụ ugboro ugboro ma ka na-atụfu ihe ọkụkụ. Ihe atụ ndị anyị ga-eji bụ ọka, sorghum (ọka okpoko), agwa na tomato na Kenya, Naịjirịa, Ghana na Burkina Faso.",
    "Isi 1 na-akụziri gị ịkwụsị ụmụ ahụhụ n'oge: nzọụkwụ anọ nke IPM (gbochie, lelee, kpebie, mee ihe), otu esi elegharị ubi ma mata iche n'etiti fall armyworm na ahụhụ na-egwu akwụkwọ tomato (Tuta absoluta) na mmebi ndị ọzọ, na otu esi eji oke na ndekọ dị mfe kpebie mgbe ime ihe ga-aba uru. Isi 2 na-akụzi njikwa nwere obere nsi: push-pull nke icipe, ndị iro okike, ọnya, ngwaahịa sitere n'osisi na ngwaahịa ndụ, na, dị ka nzọụkwụ ikpeazụ, iji ọgwụ ụmụ ahụhụ n'enweghị nsogbu na n'ụzọ iwu kwadoro nke na-ebelatakwa nguzogide.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-emechi n'ọrụ \"Nwalee ya ugbu a\" n'ubi gị. Ụmụ ahụhụ na ngwaahịa a kwadoro dị iche site n'otu mba ruo n'ọzọ, ya mere jiri ihe ọmụmụ a na onye ndụmọdụ ọrụ ugbo gị, ụlọ ọgwụ ihe ọkụkụ (plant clinic) na ụlọ ọrụ mba gị na-ahụ maka ọgwụ ụmụ ahụhụ. Obere nnwale na-esote nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee atụmatụ IPM nke otu oge maka otu ihe ọkụkụ n'ugbo gị (dịka ọmụmaatụ ọkara acre nke ọka, ma ọ bụ obere ubi tomato): ụmụ ahụhụ na ọrịa ndị bụ isi ị na-atụ anya, opekata mpe nzọụkwụ mgbochi atọ, usoro ilegharị ubi kwa izu nwere mpempe akwụkwọ ndekọ, oke ime ihe i nwetara n'aka onye ndụmọdụ ọrụ ugbo maka ahụhụ ọ bụla bụ isi, ụzọ njikwa na-abụghị ọgwụ ị ga-ebu ụzọ jiri, na atụmatụ ọgwụ ụmụ ahụhụ dị ka nzọụkwụ ikpeazụ (ngwaahịa i lelere na ndepụta ụlọ ọrụ na-ahụ maka ya, iwu akwụkwọ ntụziaka (label) ị ga-agbaso, ngwa nchekwa ị ga-eyi, na otu ị ga-esi gbanwee otu ọgwụ iji belata nguzogide).",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị ọrụ ugbo na-eto eto n'ahịa, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ọrụ ugbo na ndị ndụmọdụ ọrụ ugbo n'Afrịka niile, ndị na-akọ ọka, sorghum, osikapa, agwa, ahụekere, akwụkwọ nri na tomato. Ọtụtụ n'ime ha ezutewo fall armyworm kemgbe ọ bịarutere Afrịka n'afọ 2016, ndị na-akọ tomato ezutekwala Tuta absoluta.",
    startingPoint: "Ha nwere ike ịkpọ aha ụfọdụ ụmụ ahụhụ ma na-agbakarị ọgwụ mgbe ha hụrụ mmebi, ọtụtụ mgbe ọgwụ ọ bụla onye na-ere ọgwụ ugbo (agro-dealer) tụrụ aro. Ọ bụ mmadụ ole na ole na-elegharị ubi n'usoro a kara aka, na-edekọ ụmụ ahụhụ, na-eji oke, ma ọ bụ maara ndị iro okike na-enyere ha aka. Ọtụtụ na-agba ọgwụ n'eyighị ngwa nchekwa zuru ezu.",
    gap: "Ịgba ọgwụ n'omume na-eri ego, na-egbu ndị iro okike, na-akpata nguzogide, na-emerụ ahụike, ma nwee ike ịhapụ fọdụrụ ọgwụ nke ndị na-azụ ihe na-ajụ. Ndị na-amụ ihe kwesịrị igbochi ụmụ ahụhụ, ilegharị ubi ma dekọọ, ime ihe naanị mgbe oke gosiri na ọ ga-aba uru, ibu ụzọ jiri ụzọ njikwa na-abụghị ọgwụ, na iji ọgwụ a debanyere aha n'enweghị nsogbu dị ka nzọụkwụ ikpeazụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-eji Bekee dị ka asụsụ nke abụọ, ihe ọmụmụ a dịkwa na Spanish, French na Arabic",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone; enyo mbubata (hand lens) na-enye aka ma ọ dịghị mkpa n'ezie",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'etiti ọrụ ubi; omume na-eme n'ubi onye na-amụ ihe n'onwe ya",
      "Iwu dị iche site n'otu mba ruo n'ọzọ: ngwaahịa ga-adị na ndepụta ụlọ ọrụ mba ahụ na-ahụ maka ya (dịka ọmụmaatụ PCPB na Kenya, NAFDAC na Naịjirịa, EPA na Ghana, Kọmitii ọgwụ ụmụ ahụhụ nke Sahel maka mba CILSS dị ka Senegal na Burkina Faso)",
      "Nchekwa: ihe ọmụmụ a anaghị enye aha ngwaahịa, ọnụọgụ ntinye ma ọ bụ oge nchere tupu owuwe ihe ubi mgbe ọ bụla; ndị na-amụ ihe na-agbaso akwụkwọ ntụziaka (label) na onye ndụmọdụ ọrụ ugbo ha"
    ],
    prerequisites: "Ọ dịghị. \"Ịkọ Ihe Ubi na Akwụkwọ Nri n'Ụzọ Ga-adịgide\" na-ebu ụzọ nye nkọwa dị mkpụmkpụ nke IPM, \"Ahụike Ala na Ọmụmụ Ya\" na-enyekwa aka na mgbochi."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka otu ihe ọkụkụ n'ugbo gị", action: "idepụta nzọụkwụ mgbochi na-egbochi ụmụ ahụhụ ịba ụba tupu oge ịkọ ihe amalite", standard: "na-akpọ aha opekata mpe nzọụkwụ atọ dabara n'ihe ọkụkụ gị" },
    { id: "O2", condition: "Mgbe ị na-eje ije n'ubi gị otu ugboro n'izu", action: "ilele ọnụọgụ ihe ọkụkụ a kara aka ma mata fall armyworm, Tuta absoluta na ndị iro okike a na-ahụkarị site n'ihe ịrịba ama ha", standard: "na-elele opekata mpe ihe ọkụkụ 50 (ma ọ bụ osisi tomato 20) ma na-edekọ ihe ị hụrụ" },
    { id: "O3", condition: "Mgbe e nyere gị ọnụọgụ ilegharị ubi gị na oke si n'aka onye ndụmọdụ ọrụ ugbo", action: "ikpebi ma ị ga-eme ihe ugbu a ma ọ bụ ịnọgide na-ele anya, ma dekọọ mkpebi ahụ", standard: "na-agbaso iwu oke ahụ mgbe niile" },
    { id: "O4", condition: "Mgbe e nyere gị nsogbu ụmụ ahụhụ n'ihe ọkụkụ gị", action: "ịhọrọ ma hazie ụzọ njikwa na-abụghị ọgwụ dị ka push-pull, ndị iro okike, ọnya na ngwaahịa ndụ", standard: "tupu e jiri ọgwụ ụmụ ahụhụ e mepụtara n'ụlọ ọrụ ọ bụla" },
    { id: "O5", condition: "Mgbe ọgwụ ụmụ ahụhụ dị mkpa n'ezie", action: "ilele na e debanyere ngwaahịa ahụ aha, gbasoo akwụkwọ ntụziaka ya ma yiri ngwa nchekwa o depụtara", standard: "na-ahapụghị nzọụkwụ ọ bụla" },
    { id: "O6", condition: "N'ofe mkpebi ịgba ọgwụ niile n'otu oge ịkọ ihe", action: "ịgbanwe otu ọgwụ ụmụ ahụhụ ma debe ndekọ ịgba ọgwụ iji belata nguzogide", standard: "na-ejighị otu otu ọgwụ ahụ megide otu ọgbọ ụmụ ahụhụ ugboro abụọ n'usoro" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwụsị ụmụ ahụhụ n'oge",
      lessons: [
        {
          title: "Nzọụkwụ anọ nke IPM, na-amalite site na mgbochi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta nzọụkwụ mgbochi na-egbochi ụmụ ahụhụ ịba ụba n'otu n'ime ihe ọkụkụ gị.",
          text: [
            "FAO na-akọwa njikwa ụmụ ahụhụ jikọtara ọnụ (IPM) dị ka ilele ụzọ niile esi achịkwa ụmụ ahụhụ, ijikọta ndị kwesịrị ekwesị, na iji ọgwụ ụmụ ahụhụ naanị mgbe e nwere ezi ihe kpatara ya. Ọ na-aga n'usoro anọ: gbochie, lelee, kpebie na mee ihe. Ọtụtụ ego a na-echekwa na-esi na nzọụkwụ mbụ.",
            "Mgbochi pụtara ime ka ubi bụrụ ọjọọ ebe obibi maka ụmụ ahụhụ ma bụrụ ezigbo ebe obibi maka ihe ọkụkụ. Kụọ mkpụrụ a nyochara (certified) nke ụdị dabara na mpaghara gị, na ụdị na-eguzogide ma ọ bụ na-anagide ụmụ ahụhụ ebe ha dị. Gbanwee ihe ọkụkụ (rotation) ka ụmụ ahụhụ bi n'ala ma ọ bụ n'ihe fọdụrụ n'ubi tụfuo nri ha: dịka ọmụmaatụ, ọka, wee agwa, wee sorghum. Kụọ n'oge na n'otu oge ahụ gị na ndị agbata obi gị, ka ụmụ ahụhụ ghara isi n'ubi a kụrụ n'azụ gaa n'ubi a kụrụ n'oge. Nye ala nri, n'ihi na ihe ọkụkụ na-adịghị ike ka a na-ebu ụzọ awakpo.",
            "Debe ubi ọcha: wepụ ma bibie osisi nwere nje virus ma ọ bụ ọrịa, wepụ osisi pupụtara onwe ha na ahịhịa na-ebu ụmụ ahụhụ, ma sachaa ngwa ọrụ na akpụkpọ ụkwụ. Maka tomato, zụlite mkpụrụ osisi nta n'ebe nzụlite dị ọcha nwere ụgbụ ka ha jee n'ubi n'enweghị Tuta absoluta na whiteflies. Hapụ okporo osisi na-eme ifuru na ogige osisi n'akụkụ ubi, n'ihi na ha na-enye nri ụmụ ahụhụ na-eri ụmụ ahụhụ ọjọọ.",
            "Nwaanyị ọrụ ugbo na Ghana na-agbanwe ọka na ahụekere, na-akụ n'oge ya na ndị agbata obi ya, ma na-ehopụ osisi na-arịa ọrịa kwa izu, na-agbakarị ọgwụ obere karịa onye na-akụ ọka n'otu ala ahụ oge ọ bụla."
          ],
          steps: ["Dee ụmụ ahụhụ na ọrịa ndị bụ isi nke ihe ọkụkụ gị (jụọ onye ndụmọdụ ọrụ ugbo ma ọ bụ ụlọ ọgwụ ihe ọkụkụ).", "Họrọ mkpụrụ a nyochara nke ụdị dabara, na-eguzogide ma ọ bụ na-anagide ụmụ ahụhụ.", "Hazie mgbanwe ihe ọkụkụ ma kụọ n'oge, n'otu oge ahụ gị na ndị agbata obi gị.", "Hazie ịdị ọcha nke ubi: wepụ osisi na-arịa ọrịa, osisi pupụtara onwe ha na ahịhịa na-ebu ụmụ ahụhụ; sachaa ngwa ọrụ.", "Hapụ okporo osisi na-eme ifuru maka ndị iro okike."],
          words: [["IPM", "njikwa ụmụ ahụhụ jikọtara ọnụ: igbochi ụmụ ahụhụ, ile anya maka ha, ikpebi mgbe ime ihe ga-aba uru, na ijikọta ọtụtụ ụzọ njikwa, na-eji ọgwụ ụmụ ahụhụ naanị mgbe e nwere ezi ihe kpatara ya."], ["Mgbochi", "nzọụkwụ e mere tupu ụmụ ahụhụ abịa ka ha ghara inwe ike ịba ụba."], ["Mgbanwe ihe ọkụkụ (rotation)", "ịkọ ihe ọkụkụ dị iche n'otu ala ahụ oge ọ bụla."], ["Osisi pupụtara onwe ya", "osisi ihe ọkụkụ na-eto n'onwe ya site na mkpụrụ nke oge gara aga ma nwee ike ibu ụmụ ahụhụ."]],
          slides: [
            { title: "IPM n'usoro anọ", bullets: ["1. Gbochie", "2. Lelee (legharịa ubi)", "3. Kpebie: ime ihe ọ ga-aba uru?", "4. Mee ihe: nke na-abụghị ọgwụ na mbụ, ọgwụ n'ikpeazụ"] },
            { title: "Mgbochi na-amalite na mkpụrụ", bullets: ["Mkpụrụ a nyochara nke ụdị dabara", "Ụdị na-eguzogide ma ọ bụ na-anagide ebe ha dị", "Nye ala nri: ihe ọkụkụ na-adịghị ike ka a na-ebu ụzọ awakpo"] },
            { title: "Gbochie ụmụ ahụhụ nri", bullets: ["Gbanwee: ọka, wee agwa, wee sorghum", "Kụọ n'oge, gị na ndị agbata obi gị", "Wepụ osisi pupụtara onwe ha na ahịhịa na-ebu ụmụ ahụhụ"] },
            { title: "Debe ya ọcha", bullets: ["Hopụ ma bibie osisi na-arịa ọrịa", "Sachaa ngwa ọrụ na akpụkpọ ụkwụ", "Ebe nzụlite tomato dị ọcha nwere ụgbụ", "Okporo osisi na-eme ifuru na-enye ndị iro okike nri"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Họrọ otu ihe ọkụkụ ị ga-akọ n'oge ọzọ. Dee ụmụ ahụhụ ma ọ bụ ọrịa atọ kacha njọ nke ya, wee dee opekata mpe nzọụkwụ mgbochi atọ ị ga-eme tupu ịkụ ihe (mkpụrụ, mgbanwe ihe ọkụkụ, oge, ịdị ọcha, okporo osisi).",
          youCanNow: "ịkpọ aha nzọụkwụ anọ nke IPM ma depụta nzọụkwụ mgbochi na-egbochi ụmụ ahụhụ ịba ụba n'ihe ọkụkụ gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu nzọụkwụ IPM na-echekwakarị onye ọrụ ugbo ego kacha?", options: ["Ịgba ọgwụ kwa izu", "Ịzụta ngwaahịa siri ike karị", "Mgbochi tupu ụmụ ahụhụ abịa", "Ịgba ọgwụ n'ubi onye agbata obi"], answer: 2, why: "Mgbochi na-akwụsị ụmụ ahụhụ ịba ụba, ya mere a na-achọ obere njikwa ma emechaa." },
            { objective: "O1", q: "Ọka gị nwere nnukwu mmebi ụmụ ahụhụ n'otu ala ahụ oge atọ n'usoro. Kedu nzọụkwụ mgbochi kacha dabara?", options: ["Gbanwee ala ahụ gaa n'agwa ma ọ bụ ahụekere n'oge ọzọ", "Kụọ ọka n'azụ ndị agbata obi gị", "Hapụ okporo ọka nke oge gara aga ka ha guzoro", "Kụọ mkpụrụ a na-enyochaghị e chekwara site n'ọka mebiri emebi"], answer: 0, why: "Mgbanwe ihe ọkụkụ na-agbaji usoro ndụ ahụhụ ahụ site n'iwepụ osisi ọ na-eri." }
          ]
        },
        {
          title: "Ilegharị ubi na ịmata fall armyworm na Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Legharịa ubi n'ụzọ a kara aka ma mata fall armyworm, Tuta absoluta na ndị iro okike site n'ihe ịrịba ama ha.",
          text: [
            "Ilegharị ubi (scouting) pụtara ije ije n'ubi gị n'usoro oge ma lelee ọnụọgụ ihe ọkụkụ a kara aka, ka ị hụ nsogbu n'oge ma nwee ike ịgụ ya. Legharịa ubi opekata mpe otu ugboro n'izu, karịa nke ahụ maka ọka na-eto eto na tomato. Jee ije n'ụzọ W ma ọ bụ n'ụzọ zigzag ka i lelee ubi niile, ọ bụghị naanị n'akụkụ ya. N'ọka, kwụsị n'ebe ise ma lelee osisi 10 n'usoro n'ebe ọ bụla, osisi 50 n'ozuzu. N'obere ubi tomato, lelee osisi 20 gbasara n'ihe ndina niile.",
            "Fall armyworm bịarutere Afrịka n'afọ 2016, a na-ahụkwa ya ugbu a n'ọtụtụ akụkụ kọntinent ahụ. N'ọka na-eto eto, lee obere \"windo\" (ebe dị gịrịgịrị ị na-ahụ ihe n'ofe ya) n'akwụkwọ, wee hụ oghere nwere ọnụ dị iche iche na nsị dị mmiri yiri ntụ osisi n'ime ọnụ ọka (funnel). Ikpuru ahụ nwere akara Y na-acha ọcha nke dị n'isi gbadaa n'isi ya, na ntụpọ ojii anọ n'ụdị square n'akụkụ ọdụ ya. Ọtụtụ akwa na-anọ n'akwụkwọ n'okpuru ihe kpuchiri ya yiri ajị. A na-agụ osisi dị ka nke ụmụ ahụhụ wakporo ma ọ bụrụ na o nwere mmebi ọhụrụ ma ọ bụ ikpuru dị ndụ.",
            "Tuta absoluta, ahụhụ na-egwu akwụkwọ tomato, si South America bịa ma gbasaa n'Afrịka n'ime afọ ole na ole; icipe kọrọ na n'ugwu Naịjirịa n'afọ 2016 o bibiri ọtụtụ ihe ubi tomato. Obere ikpuru ya na-egwu ọwa n'ime akwụkwọ, na-eme ntụpọ dị ọcha ị na-ahụ ihe n'ofe ya (mines) nwere nsị ojii, ma na-akpọpụ obere oghere n'azụ osisi na mkpụrụ. Ahụhụ toro eto bụ obere nla na-acha ntụ na aja aja nke na-ezo onwe ya n'ehihie.",
            "Lelee kwa ndị enyi: ladybirds na ụmụ ha, lacewings, ududo, earwigs, ndanda na obere wasps na-ebi n'ime ụmụ ahụhụ, na ikpuru yiri ndị na-arịa ọrịa, dị nro ma ọ bụ nwere fungus kpuchiri ha. FAO na-ekwu na ndị iro okike na-egbuworị ọtụtụ ikpuru fall armyworm n'ubi Afrịka. Ọ bụrụ na i jighị n'aka ihe ị hụrụ, see foto doro anya ma jụọ onye ndụmọdụ ọrụ ugbo ma ọ bụ ụlọ ọgwụ ihe ọkụkụ; na mba ụfọdụ, app FAMEWS nke FAO na-edekọ ebe a hụrụ fall armyworm."
          ],
          steps: ["Họrọ ụbọchị ilegharị ubi kwa izu ma buru akwụkwọ ndetu ma ọ bụ ekwentị.", "Jee ije n'ụzọ W; kwụsị n'ebe 5 n'ọka (osisi 10 n'ebe ọ bụla) ma ọ bụ osisi tomato 20 gbasara agbasa.", "N'osisi ọ bụla, lelee akwụkwọ, ọnụ ọka ma ọ bụ ọnụ na-eto eto, azụ osisi na mkpụrụ.", "Gụọ osisi nwere mmebi ọhụrụ ma ọ bụ ụmụ ahụhụ dị ndụ; dee ọtụtụ akwa ị hụrụ.", "Dee ndị iro okike ị hụrụ.", "See foto ihe ọ bụla ị na-enweghị ike ịmata ma jụọ onye ndụmọdụ ọrụ ugbo ma ọ bụ ụlọ ọgwụ ihe ọkụkụ."],
          words: [["Ilegharị ubi (scouting)", "ije ije n'ubi n'usoro oge na ilele ọnụọgụ ihe ọkụkụ a kara aka maka ụmụ ahụhụ, ọrịa na ndị iro okike."], ["Ọnụ ọka (funnel, whorl)", "akwụkwọ ọhụrụ fụchiri onwe ha n'elu osisi ọka na-eto eto."], ["Ọwa akwụkwọ (leaf mine)", "ọwa ma ọ bụ ntụpọ dị ọcha n'ime akwụkwọ nke obere ikpuru na-eri n'etiti akụkụ abụọ nke akwụkwọ ahụ mere."], ["Onye iro okike", "ahụhụ, ududo, fungus ma ọ bụ ihe ndụ ọzọ na-egbu ụmụ ahụhụ ọjọọ."]],
          slides: [
            { title: "Otu esi elegharị ubi", bullets: ["Kwa izu, n'otu ụbọchị ahụ", "Ụzọ W ma ọ bụ zigzag, ọ bụghị naanị n'akụkụ", "Ọka: ebe 5 x osisi 10 = 50", "Tomato: osisi 20 gbasara agbasa"] },
            { title: "Ihe ịrịba ama fall armyworm", bullets: ["Obere windo n'akwụkwọ ọhụrụ, wee oghere nwere ọnụ dị iche iche", "Nsị dị mmiri yiri ntụ osisi n'ọnụ ọka", "Y gbadara agbada n'isi, ntụpọ ojii 4 n'akụkụ ọdụ"] },
            { title: "Ihe ịrịba ama Tuta absoluta", bullets: ["Ntụpọ dị ọcha nwere nsị ojii n'ime akwụkwọ", "Obere oghere n'azụ osisi na mkpụrụ", "Obere nla na-acha ntụ na aja aja na-ezo onwe ya n'ehihie"] },
            { title: "Lelee ndị enyi kwa", bullets: ["Ladybirds, lacewings, ududo, earwigs, ndanda", "Wasps na-ebi n'ime ụmụ ahụhụ; ikpuru na-arịa ọrịa ma ọ bụ nwere fungus", "I jighị n'aka? Ziga foto n'aka onye ndụmọdụ ma ọ bụ ụlọ ọgwụ ihe ọkụkụ"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Legharịa otu n'ime ubi gị taa n'ụzọ W: osisi ọka 50 ma ọ bụ osisi tomato 20. Dee ole osisi nwere mmebi ọhụrụ ma ọ bụ ụmụ ahụhụ dị ndụ, ọtụtụ akwa ọ bụla, na onye iro okike ọ bụla ị hụrụ.",
          youCanNow: "ilegharị ubi n'ụzọ a kara aka, ịmata fall armyworm na Tuta absoluta site n'ihe ịrịba ama ha, na ịhụ ndị iro okike.",
          quickCheck: [
            { objective: "O2", q: "Ị hụrụ nsị dị mmiri yiri ntụ osisi na oghere nwere ọnụ dị iche iche n'ọnụ ọka na-eto eto. Kedu ahụhụ o yikarịrị ka ọ bụ?", options: ["Ahụhụ na-egwu akwụkwọ tomato", "Aphids", "Fall armyworm", "Ikwikwi (termites)"], answer: 2, why: "Oghere nwere ọnụ dị iche iche na nsị dị mmiri n'ọnụ ọka bụ ihe ịrịba ama a ma ama nke fall armyworm." },
            { objective: "O2", q: "Gịnị mere i ji eje ije n'ụzọ W mgbe ị na-elegharị ubi kama ilele osisi dị n'akụkụ ọnụ ụzọ?", options: ["Ọ na-adị ngwa karị", "Ụmụ ahụhụ na-ebi naanị n'etiti", "Ọ na-eji obere mmiri", "Ọ na-elele ubi niile, ọ bụghị naanị n'akụkụ ya"], answer: 3, why: "Ụzọ W na-elele akụkụ ọ bụla nke ubi, ya mere ọnụọgụ ahụ na-egosi ezi ọkwa." }
          ]
        },
        {
          title: "Oke na ndekọ: ikpebi mgbe ị ga-eme ihe",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tụnyere ọnụọgụ ilegharị ubi gị na oke ime ihe ma dekọọ ma ị ga-eme ihe ma ọ bụ ịnọgide na-ele anya.",
          text: [
            "Ịhụ ahụhụ apụtaghị na ị ga-agba ọgwụ. Oke ime ihe (action threshold) bụ ọkwa ụmụ ahụhụ ma ọ bụ mmebi nke njikwa ruru ego ọ na-eri. N'okpuru ya, ndị iro okike na ihe ọkụkụ ahụ na-enwekarị ike ịnagide ya, ịgba ọgwụ ga-atụfukwa ego ma gbuo ndị na-enyere gị aka. Nweta oke maka ahụhụ ọ bụla bụ isi, ọkwa ihe ọkụkụ na mpaghara n'aka onye ndụmọdụ ọrụ ugbo gị ma ọ bụ ụlọ nchọpụta (dị ka KALRO na Kenya), n'ihi na ọ na-agbanwe site n'ọkwa ihe ọkụkụ, ọnụ ahịa na nchọpụta mpaghara.",
            "Gbanwee ọnụọgụ gị ka ọ bụrụ pasent: osisi nwere mmebi ọhụrụ ma ọ bụ ụmụ ahụhụ dị ndụ, kee ya n'osisi i lelere, mụbaa ya na 100. Ọmụmaatụ: i lelere osisi ọka 50, 9 nwere mmebi ọhụrụ nke fall armyworm, ya mere 9 / 50 x 100 = 18%. Ọ bụrụ na onye ndụmọdụ ọrụ ugbo gwara gị ka i mee ihe na 20% n'ọkwa a, ị na-anọgide na-ele anya ma legharịa ubi ọzọ n'ime ụbọchị ole na ole. Ọ bụrụ na izu na-abịa ọ bụrụ 26%, ị na-eme ihe. Ọka na-eto eto na-anagidekarị obere mmebi karịa ọka toro eto, ya mere oke na-adịkarị iche site n'ọkwa.",
            "Dee nleta ọ bụla. Ndekọ dị mfe nwere ụbọchị, ubi, ọkwa ihe ọkụkụ, osisi i lelere, osisi ụmụ ahụhụ wakporo, pasent, ndị iro okike a hụrụ, oke, mkpebi gị na ihe i mere. Mgbe oge ole na ole gachara, ndekọ gị na-egosi mgbe ụmụ ahụhụ na-abịa n'ugbo gị, ụzọ njikwa ndị rụrụ ọrụ na ego ha ritere. Akwụkwọ ndetu na-arụ ọrụ; otu a ka spreadsheet n'ekwentị ma ọ bụ app ugbo na-arụkwa."
          ],
          steps: ["Jụọ onye ndụmọdụ ọrụ ugbo oke maka ahụhụ ọ bụla bụ isi na ọkwa ihe ọkụkụ.", "Mgbe i legharịchara ubi, gụọ osisi i lelere na osisi ụmụ ahụhụ wakporo.", "Gbakọọ pasent: osisi a wakporo / osisi i lelere x 100.", "Tụnyere ya na oke: n'okpuru = nọgide na-ele anya; ruru ma ọ bụ karịa = mee ihe.", "Dee ụbọchị, ọnụọgụ, ndị iro okike, mkpebi na ihe i mere na ndekọ gị."],
          words: [["Oke ime ihe", "ọkwa ụmụ ahụhụ ma ọ bụ mmebi nke njikwa ruru ego ọ na-eri."], ["A wakporo (infested)", "inwe ụmụ ahụhụ ma ọ bụ mmebi ọhụrụ sitere n'ụmụ ahụhụ."], ["Ọkwa ihe ọkụkụ", "otu ihe ọkụkụ ahụ si too, dịka ọmụmaatụ mkpụrụ osisi nta, ruru ikpere, na-ama okoko n'elu, na-eme ifuru, na-amị mkpụrụ."]],
          slides: [
            { title: "Ịhụ ahụhụ abụghị ihe kpatara ịgba ọgwụ", bullets: ["Oke: ọkwa ebe ime ihe na-aba uru", "N'okpuru ya, ndị iro okike na-anagidekarị ya", "Nweta oke n'aka onye ndụmọdụ ọrụ ugbo, site n'ọkwa ihe ọkụkụ"] },
            { title: "Gbakọọ pasent", bullets: ["Osisi a wakporo / osisi i lelere x 100", "Ọmụmaatụ: 9 / 50 x 100 = 18%", "Oke 20%: nọgide na-ele anya, legharịa ọzọ n'oge na-adịghị anya"] },
            { title: "Dekọọ nleta ọ bụla", bullets: ["Ụbọchị, ubi, ọkwa ihe ọkụkụ", "Ndị a lelere, ndị a wakporo, %, ndị iro okike", "Oke, mkpebi, ihe e mere, ego e ji mee ya"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Jiri ọnụọgụ i nwetara n'ilegharị ubi na nkuzi gara aga. Gbakọọ pasent osisi ụmụ ahụhụ wakporo, jụọ onye ndụmọdụ ọrụ ugbo gị oke n'ọkwa ihe ọkụkụ gị, ma dejupụta ahịrị ndekọ mbụ gị na mkpebi gị.",
          youCanNow: "ịgbanwe ọnụọgụ ilegharị ubi ka ọ bụrụ pasent, ịtụnyere ya na oke, na idekọ mkpebi gị.",
          quickCheck: [
            { objective: "O3", q: "I lelere osisi 50, 15 nwere mmebi ọhụrụ. Kedu pasent a wakporo?", options: ["15%", "30%", "50%", "35%"], answer: 1, why: "15 / 50 x 100 = 30%." },
            { objective: "O3", q: "Ọnụọgụ gị bụ 12%, oke onye ndụmọdụ ọrụ ugbo maka ọkwa a bụ 20%. Gịnị ka ị ga-eme?", options: ["Gbaa ọgwụ taa ka i wee nọrọ n'udo", "Hopụ ihe ọkụkụ ahụ", "Mụbaa ọnụọgụ ọgwụ ugboro abụọ", "Nọgide na-ele anya, legharịa ọzọ n'oge na-adịghị anya ma dekọọ ya"], answer: 3, why: "N'okpuru oke, njikwa abaghị uru ugbu a; ị na-anọgide na-elegharị ubi ma na-edekọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwụsị ụmụ ahụhụ n'oge",
        questions: [
          { objective: "O1", q: "Kedu nke bụ nzọụkwụ mgbochi n'IPM?", options: ["Ịgba ọgwụ mgbe ị hụrụ otu ikpuru", "Ịkụ mkpụrụ a nyochara nke ụdị dabara n'oge", "Ịgwakọta ọgwụ ụmụ ahụhụ abụọ ọnụ", "Ịkpọ ihe ọkụkụ onye agbata obi ọkụ"], answer: 1, why: "Ezigbo mkpụrụ na ịkụ ihe n'oge na-akwụsị ụmụ ahụhụ ịba ụba tupu ha amalite." },
          { objective: "O2", q: "Ntụpọ dị ọcha nwere nsị ojii n'ime akwụkwọ tomato, na obere oghere na mkpụrụ, na-egosi:", options: ["Tuta absoluta (ahụhụ na-egwu akwụkwọ tomato)", "Fall armyworm", "Fatịlaịza karịrị akarị", "Enweghị mmiri"], answer: 0, why: "Ọwa akwụkwọ na oghere na mkpụrụ bụ ihe ịrịba ama Tuta absoluta." },
          { objective: "O2", q: "Mgbe ị na-elegharị ubi, ị hụrụ ladybirds na ikpuru fungus ọcha kpuchiri. Ị kwesịrị:", options: ["Ịgba ọgwụ gbuo ha kwa", "Ileghara ha anya; ha adịghị mkpa", "Idekọ ha dị ka ndị iro okike na-arụ ọrụ", "Ịkpọ osisi ahụ ọkụ"], answer: 2, why: "Ndị iro okike na-ebelata ụmụ ahụhụ, ya mere ị na-edekọ ha ma chebe ha." },
          { objective: "O3", q: "Gịnị bụ oke ime ihe?", options: ["Ụbọchị ị na-akụ ihe", "Ọnụ ahịa ọgwụ ụmụ ahụhụ", "Ọnụọgụ ndị ọrụ ị chọrọ", "Ọkwa ụmụ ahụhụ nke njikwa ruru ego ọ na-eri"], answer: 3, why: "N'okpuru oke, njikwa na-eri ego karịa ihe ọ na-echekwa." },
          { objective: "O3", q: "Gịnị mere i ji edebe ndekọ e dere ede nke nleta ilegharị ubi ọ bụla?", options: ["Ịhụ mgbe ụmụ ahụhụ na-abịa, ihe rụrụ ọrụ na ego o ritere", "N'ihi na onye na-ere ọgwụ ugbo na-arịọ ya", "Ime ka ubi dị ọcha n'anya", "Ọ baghị uru"], answer: 0, why: "Ndekọ na-eme ka oge ọ bụla bụrụ ihe mmụta maka oge na-esote." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchịkwa ụmụ ahụhụ site na obere nsi",
      lessons: [
        {
          title: "Push-pull na ndị iro okike",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hazie obere ubi push-pull ma chebe ndị iro okike n'ugbo gị.",
          text: [
            "Ọ bụ icipe, ya na ndị mmekọ, mepụtara push-pull maka ọka na sorghum na East Africa. Ị na-akụ desmodium n'etiti ahịrị ọka. Desmodium na-esi isi na-achụpụ nla stemborer (ikpuru na-egwu azụ ọka) n'ihe ọkụkụ ahụ. Gburugburu ubi ahụ, ị na-akụ okporo ahịhịa nri anụ (brachiaria n'ụdị climate-smart maka mpaghara kpọrọ nkụ karị, napier grass n'ụdị mbụ), nke na-adọta nla ahụ gakwuru ya ma tọọ ha ọnya. Desmodium na-egbochikwa ahịhịa striga ma tinye nitrogen n'ala, osisi abụọ ahụ bụkwa ezigbo nri ehi.",
            "Nchọpụta icipe na Kenya, Uganda na Tanzania hụrụ mmebi fall armyworm dị obere karịa n'ubi climate-smart push-pull karịa n'ọka a kụrụ naanị ya, na owuwe ọka ka elu. Push-pull na-achọ ọrụ iji hazie ya, ị chọkwara mkpụrụ ma ọ bụ ogbugba desmodium na mkpakọ ahịhịa, ya mere malite n'obere ubi, jụọ onye ndụmọdụ ọrụ ugbo ma ọ bụ onye ọrụ ugbo icipe zụrụ maka nhazi ya, ma gbasoo akwụkwọ ntụziaka ndị ọrụ ugbo nke icipe.",
            "Ndị iro okike bụ ndị ọrụ n'efu. Ndanda, earwigs, ududo, ladybirds na lacewings na-eri akwa na ikpuru na-eto eto; obere wasps na-eyi akwa ha n'ime ụmụ ahụhụ; fungus na nje virus na-egbu ikpuru. FAO na-ekwu na ndị a na-egbuworị akụkụ buru ibu nke fall armyworm n'ubi Afrịka. icipe ahapụla obere wasp si South America nke na-awakpo naanị Tuta absoluta na Kenya. Iji chebe ha: gbaa ọgwụ naanị mgbe oke kwuru, họrọ ngwaahịa na-ahọrọ naanị ụmụ ahụhụ ụfọdụ (selective), debe osisi na-eme ifuru na ogige osisi gburugburu ubi, ma hapụ ụfọdụ ihe kpuchiri ala."
          ],
          steps: ["Kaa obere ubi push-pull akara (jụọ onye ndụmọdụ ọrụ ugbo ma ọ bụ lee akwụkwọ ntụziaka icipe maka nhazi ya).", "Buru ụzọ kụọ okporo ahịhịa (brachiaria ma ọ bụ napier) gburugburu ubi ahụ.", "Kụọ desmodium n'etiti ahịrị ọka ma ọ bụ sorghum.", "Bepụ ahịhịa na desmodium maka nri anụ ụlọ, hapụ osisi ndị ahụ ka ha too ọzọ.", "Chebe ndị iro okike: agbala ọgwụ n'efu, debe ifuru na ihe kpuchiri ala."],
          words: [["Push-pull", "usoro icipe ebe ihe ọkụkụ a kụrụ n'etiti (desmodium) na-achụpụ ụmụ ahụhụ, okporo ahịhịa na-adọpụtakwa ha n'ihe ọkụkụ ahụ."], ["Desmodium", "osisi ezinụlọ agwa na-eto n'ala a na-akụ n'etiti ahịrị ọka; ọ na-achụpụ nla stemborer, na-egbochi striga ma na-etinye nitrogen."], ["Striga", "ahịhịa na-ebi n'ahụ osisi ọzọ, nwere ifuru pink ma ọ bụ odo odo, nke na-arapara na mgbọrọgwụ ọka na sorghum ma na-ezuru nri ha."], ["Wasp na-ebi n'ime ụmụ ahụhụ (parasitic wasp)", "obere wasp na-eyi akwa ya n'ime ma ọ bụ n'ahụ ahụhụ ọjọọ, ụmụ ya na-egbukwa ahụhụ ahụ."]],
          slides: [
            { title: "Push-pull (icipe)", bullets: ["Desmodium n'etiti ahịrị na-achụpụ nla", "Okporo ahịhịa (brachiaria ma ọ bụ napier) na-adọpụta ha", "Maka ọka na sorghum"] },
            { title: "Uru ndị ọzọ", bullets: ["Desmodium na-egbochi striga ma tinye nitrogen", "Osisi abụọ ahụ na-enye ehi nri", "Nnwale icipe: mmebi fall armyworm dị obere nke ukwuu"] },
            { title: "Ndị ọrụ gị n'efu", bullets: ["Ndanda, earwigs, ududo, ladybirds, lacewings", "Wasps na-ebi n'ime ụmụ ahụhụ; fungus na nje virus", "Wasp a hapụrụ na Kenya na-awakpo naanị Tuta absoluta"] },
            { title: "Chebe ndị iro okike", bullets: ["Gbaa ọgwụ naanị karịa oke", "Họrọ ngwaahịa na-ahọrọ (selective)", "Debe ifuru, ogige osisi na ihe kpuchiri ala"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "See ihe osise nke obere ubi push-pull maka ọka ma ọ bụ sorghum gị, nwere okporo ahịhịa, ahịrị desmodium na ahịrị ihe ọkụkụ. Wee dee ihe abụọ ị ga-agbanwe n'ugbo gị iji chebe ndị iro okike.",
          youCanNow: "ịkọwa otu push-pull si arụ ọrụ, ise ihe osise nke ubi push-pull, na ịkpọ aha ụzọ isi chebe ndị iro okike.",
          quickCheck: [
            { objective: "O4", q: "Na push-pull, gịnị ka desmodium dị n'etiti ahịrị ọka na-eme?", options: ["Ọ na-adọta ụmụ ahụhụ n'ime ọka", "Ọ na-achụpụ nla stemborer ma na-egbochi striga", "Ọ na-ekpuchi ọka ka o too ogologo", "Ọ na-egbu ladybirds"], answer: 1, why: "Isi desmodium na-achụpụ nla, ọ na-egbochikwa striga; okporo ahịhịa na-adọta ha." },
            { objective: "O4", q: "Kedu omume kacha echebe ndị iro okike?", options: ["Ịgba ọgwụ na-egbu ihe niile kwa izu", "Ikpochapụ ifuru na ogige osisi niile gburugburu ubi", "Ịkpọ ihe fọdụrụ n'ubi na ihe kpuchiri ala niile ọkụ", "Ịgba ọgwụ naanị karịa oke na idebe okporo osisi na-eme ifuru"], answer: 3, why: "Ịgba ọgwụ obere na osisi na-eme ifuru na-edebe ndị iro okike ndụ ma na-enye ha nri." }
          ]
        },
        {
          title: "Ọnya, ngwaahịa sitere n'osisi na ngwaahịa ndụ",
          objectives: ["O4"],
          minutes: 5,
          goal: "Họrọ ma hazie ọnya na ngwaahịa sitere n'osisi ma ọ bụ ngwaahịa ndụ a kwadoro maka nsogbu ụmụ ahụhụ.",
          text: [
            "Ọnya na-enyere gị aka ile anya ma belata ọnụọgụ ụmụ ahụhụ. Ọnya pheromone na-eji isi nla nwaanyị ejide nla nwoke: icipe na-eji ịtọ ọtụtụ ọnya dị ka akụkụ IPM ya maka Tuta absoluta, ọnya pheromone maka fall armyworm na-agwakwa gị mgbe nla na-abịa ka i legharịa ubi nke ọma karị. Kaadị odo nwere ihe na-arapara arapara na-ejide whiteflies, aphids na nla ahụhụ na-egwu akwụkwọ; ndị na-acha anụnụ anụnụ na-ejide thrips. Gbanwee ihe nrata (lure) na kaadị dịka onye na-ere ya kwuru, ma gụọ ihe e jidere kwa izu na ndekọ gị.",
            "Iji aka chịpụ na-arụ ọrụ n'obere ubi: pịa ọtụtụ akwa fall armyworm na ikpuru na-eto eto, ma chịpụ ma bibie akwụkwọ Tuta gwuru na mkpụrụ mebiri emebi (lie ha n'ime ala nke ọma ma ọ bụ mechie ha n'akpa n'anyanwụ, ahapụla ha n'ala mgbe ọ bụla).",
            "Ngwaahịa ndụ (biological) na-eji ihe ndụ ma ọ bụ ihe okike ha na-emepụta megide ụmụ ahụhụ: dịka ọmụmaatụ ngwaahịa sitere na nje bacteria Bt (Bacillus thuringiensis), na fungus na-ebute ọrịa n'ahụ ụmụ ahụhụ, ma ọ bụ na nje virus ụmụ ahụhụ. icipe na-emepụta ọgwụ ụmụ ahụhụ sitere na fungus. Ha anaghị emerụkarị ndị iro okike, mana ha na-arụ ọrụ nwayọọ, ha ga-erute ikpuru na-eto eto, a ga-echekwakwa ha dịka akwụkwọ ntụziaka si kwuo. N'ọtụtụ mba, a ga-edebanye ha aha dị ka ọgwụ ụmụ ahụhụ ọ bụla, ya mere lelee ndepụta ụlọ ọrụ na-ahụ maka ya.",
            "Ngwaahịa sitere n'osisi (botanical) si n'osisi, dị ka dọgọyarọ (neem). Ngwaahịa neem a debanyere aha nwere akwụkwọ ntụziaka ị nwere ike ịgbaso. A na-eji mmiri osisi a na-eme n'ụlọ eme ihe nke ukwuu, mana ike ha dị iche iche, ha ka nwekwara ike imerụ ndị iro okike, akpụkpọ ahụ na anya, ya mere jụọ onye ndụmọdụ ọrụ ugbo gị otu esi eji ha na mpaghara gị, yiri gloves, ma buru ụzọ nwalee ya n'osisi ole na ole."
          ],
          steps: ["Mee ka ngwa ahụ dabara ahụhụ ahụ: ọnya pheromone maka nla, kaadị odo maka whiteflies na aphids, nke anụnụ anụnụ maka thrips.", "Kwụba ọnya n'ogo ihe ọkụkụ ma gụọ ihe e jidere kwa izu.", "Jiri aka chịpụ ma bibie ọtụtụ akwa, ikpuru na-eto eto na akwụkwọ e gwuru egwu.", "Ọ bụrụ na a chọrọ karịa, họrọ ngwaahịa ndụ ma ọ bụ sitere n'osisi a debanyere aha.", "Tinye ya n'ikpuru na-eto eto, dịka akwụkwọ ntụziaka ya si kwuo, ma dekọọ ya."],
          words: [["Ọnya pheromone", "ọnya nwere isi alụmdi na nwunye nke ahụhụ; ọ na-ejide ụmụ nwoke ma na-egosi mgbe ụmụ ahụhụ na-abịa."], ["Ọgwụ ụmụ ahụhụ ndụ (biopesticide)", "ngwaahịa njikwa ụmụ ahụhụ e mere site n'ihe ndụ dị ka bacteria, fungus ma ọ bụ nje virus, ma ọ bụ ihe okike ha na-emepụta."], ["Bt", "Bacillus thuringiensis, nje bacteria dị n'ala a na-eji eme ọgwụ ụmụ ahụhụ ndụ; ọ na-egbu ụfọdụ ikpuru mgbe ha riri ya."], ["Ngwaahịa sitere n'osisi (botanical)", "ngwaahịa njikwa ụmụ ahụhụ e mere site n'osisi, dị ka dọgọyarọ (neem)."]],
          slides: [
            { title: "Ọnya iji lee anya ma belata", bullets: ["Ọnya pheromone na-ejide nla nwoke", "Kaadị odo: whiteflies, aphids; anụnụ anụnụ: thrips", "Gụọ ihe e jidere kwa izu; gbanwee ihe nrata n'oge"] },
            { title: "Iji aka chịpụ na-arụ ọrụ", bullets: ["Pịa ọtụtụ akwa na ikpuru na-eto eto", "Wepụ akwụkwọ Tuta gwuru na mkpụrụ mebiri emebi", "Lie n'ala nke ọma ma ọ bụ mechie n'akpa, ahapụla n'ala mgbe ọ bụla"] },
            { title: "Ngwaahịa ndụ", bullets: ["Bt, fungus na-egbu ụmụ ahụhụ, nje virus ụmụ ahụhụ", "Ha anaghị emerụ ndị iro okike, mana ha na-adị nwayọọ", "Rute ikpuru na-eto eto; lelee ndebanye aha"] },
            { title: "Ngwaahịa sitere n'osisi dị ka neem", bullets: ["Ngwaahịa a debanyere aha nwere label: gbasoo ya", "Ike mmiri osisi a na-eme n'ụlọ dị iche iche", "Jụọ onye ndụmọdụ, yiri gloves, nwalee n'osisi ole na ole"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "Maka ahụhụ kacha njọ n'ihe ọkụkụ gị, dee ọnya ị ga-eji na ebe ị ga-akwụba ya, ihe ị ga-eji aka chịpụ, na otu ngwaahịa ndụ ma ọ bụ sitere n'osisi. Wee lelee ma ngwaahịa ahụ dị na ndepụta a debanyere aha nke mba gị ma ọ bụ rịọ onye na-ere ọgwụ ugbo ka o gosi gị ndebanye aha ya.",
          youCanNow: "ịhọrọ ọnya, iji aka chịpụ, na ngwaahịa ndụ ma ọ bụ sitere n'osisi a kwadoro maka ahụhụ ma hazie ha.",
          quickCheck: [
            { objective: "O4", q: "Ị na-akọ tomato ma chọọ ịma mgbe nla Tuta absoluta na-abịa. Gịnị ka ị ga-ahazi?", options: ["Ọnya pheromone maka Tuta absoluta", "Kaadị anụnụ anụnụ na-arapara arapara", "Bọket mmiri n'ụlọ nchekwa", "Ihe nchụ nnụnụ"], answer: 0, why: "Ọnya pheromone e mere maka Tuta na-ejide nla nwoke ma na-egosi mgbe ha na-abịa." },
            { objective: "O4", q: "Ọgwụ ụmụ ahụhụ ndụ sitere na Bt na-arụ ọrụ kacha mma mgbe ị:", options: ["Gbara ya n'ikpuru buru ibu, mere agadi n'ehihie", "Gwakọtara ya na kemịkal ọ bụla ọzọ", "Tinyere ya n'ikpuru na-eto eto dịka akwụkwọ ntụziaka ya si kwuo", "Chekwara ya n'anyanwụ"], answer: 2, why: "Ngwaahịa ndụ na-arụ ọrụ nwayọọ ma na-arụ ọrụ kacha mma n'ikpuru na-eto eto, mgbe e jiri ha dịka akwụkwọ ntụziaka si kwuo." }
          ]
        },
        {
          title: "Ọgwụ ụmụ ahụhụ dị ka nzọụkwụ ikpeazụ, na ibelata nguzogide",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Lelee ndebanye aha ọgwụ ụmụ ahụhụ, gbasoo akwụkwọ ntụziaka ya na ngwa nchekwa, ma hazie mgbanwe otu ọgwụ iji belata nguzogide.",
          text: [
            "Jiri ọgwụ ụmụ ahụhụ e mepụtara n'ụlọ ọrụ naanị mgbe ọnụọgụ gị karịrị oke ma ụzọ njikwa ndị ọzọ ezughị. Buru ụzọ lelee na e debanyere ngwaahịa ahụ aha maka ihe ọkụkụ gị na ahụhụ ahụ na mba gị: Pest Control Products Board (PCPB) na Kenya, NAFDAC na Naịjirịa, Environmental Protection Authority (EPA) na Ghana, na Kọmitii ọgwụ ụmụ ahụhụ nke Sahel (CSP) maka mba CILSS dị ka Senegal na Burkina Faso. Nke ọ bụla na-edebe ndepụta ngwaahịa a debanyere aha; lelee ya, ma zụta naanị akpa ma ọ bụ karama mechiri emechi nwere label n'aka onye na-ere ọgwụ ugbo nwere ikike. Ngwaahịa adịgboroja na ndị a na-edebanyeghị aha juru ebe niile.",
            "Akwụkwọ ntụziaka (label) bụ iwu. Gụchaa ya niile tupu i meghee karama ahụ: ihe ọkụkụ na ụmụ ahụhụ e mere ya maka, ọnụọgụ ntinye, otu esi agwakọta ya, mgbe a ga-agba ya, ngwa nchekwa, oge ị ga-echere tupu owuwe ihe ubi (pre-harvest interval) na tupu ndị mmadụ alaghachi n'ubi, na enyemaka mbụ. Yiri ihe label depụtara, nke na-abụkarị gloves, akpụkpọ ụkwụ ogologo (boots), uwe ogologo aka na ogologo ọkpa, ihe nchekwa anya na ihe mkpuchi ihu ma ọ bụ respirator. Gbaa ọgwụ n'oge ikuku na-adịghị efe efe na mgbe ọ dị jụụ, ọ bụghị mgbe ọ bụla n'ebe ndị mmadụ, anụmanụ ma ọ bụ mmiri dị. Erila nri, aṅụla ihe ma ọ bụ ṅụọ sịga mgbe ị na-agba ọgwụ, saa ahụ ma emechaa, ma kpọchie ngwaahịa n'ebe ụmụaka na nri na-anọghị. Etinyela ọgwụ ụmụ ahụhụ n'ime karama ihe ọṅụṅụ ma ọ bụ nri mgbe ọ bụla.",
            "Ụmụ ahụhụ na-enwe nguzogide mgbe a na-eji otu ụdị kemịkal ahụ ugboro ugboro: ole na ole dị ndụ na-amụ ụmụ. A ma fall armyworm na Tuta absoluta abụọ maka nke a. Label na-egosikarị nọmba otu ma ọ bụ ihe na-arụ ọrụ n'ime ya (active ingredient). Gbanwee n'etiti otu dị iche iche, ejila otu otu ahụ megide otu ọgbọ ụmụ ahụhụ ugboro abụọ n'usoro, etinyela obere ọgwụ karịa ka e kwuru ma ọ bụ gwakọta ngwaahịa n'onwe gị mgbe ọ bụla, ma debe ndekọ ịgba ọgwụ nwere ụbọchị, ngwaahịa, otu, ọnụọgụ ntinye, ubi na ụbọchị owuwe ihe ubi ga-ekwe omume. Na Kenya, onye na-akọ tomato na-agba otu ngwaahịa ahụ kwa ụbọchị ole na ole na-ahụkarị ka ọ kwụsị ịrụ ọrụ; onye na-elegharị ubi, na-atọ ọnya ma na-agbanwe otu ọgwụ na-eme ka obere ọgwụ ọ na-agba nọgide na-arụ ọrụ."
          ],
          steps: ["Hụ na ọnụọgụ ahụ karịrị oke ma ụzọ njikwa ndị ọzọ ezughị.", "Lelee na e debanyere ngwaahịa ahụ aha maka ihe ọkụkụ gị na ahụhụ ahụ (PCPB, NAFDAC, EPA Ghana, CSP).", "Zụta karama mechiri emechi nwere label n'aka onye na-ere ọgwụ ugbo nwere ikike.", "Gụchaa label niile; yiri ngwa nchekwa niile o depụtara.", "Gbaa ọgwụ n'oge ikuku adịghị efe na ọ dị jụụ, n'ọnụọgụ label kwuru; saa ahụ ma chekwaa nke ọma.", "Dee ngwaahịa, otu, ọnụọgụ ntinye na ụbọchị owuwe ihe ubi ga-ekwe omume; gbanwee otu ọgwụ oge ọzọ."],
          words: [["Ọgwụ ụmụ ahụhụ a debanyere aha", "ngwaahịa ụlọ ọrụ mba na-ahụ maka ya kwadoro maka ihe ọkụkụ na ụmụ ahụhụ a kpọrọ aha."], ["Akwụkwọ ntụziaka (label)", "ntụziaka dị n'ahụ karama ahụ; ịgbaso ya bụ iwu."], ["PPE", "ngwa nchekwa onwe onye: gloves, akpụkpọ ụkwụ ogologo, uwe ogologo, ihe nchekwa anya na ihe mkpuchi ihu ma ọ bụ respirator."], ["Oge nchere tupu owuwe (pre-harvest interval)", "oge ị ga-echere mgbe i gbachara ọgwụ tupu i wee ihe ubi; e dere ya na label."], ["Nguzogide", "mgbe ahụhụ anaghịzi anwụ site na ngwaahịa na-egbu ya na mbụ."], ["Otu ụzọ ọgwụ si egbu (mode-of-action group)", "nọmba ma ọ bụ aha na-egosi otu ọgwụ ụmụ ahụhụ si egbu; gbanwee n'etiti otu dị iche iche iji belata nguzogide."]],
          slides: [
            { title: "Ọgwụ ụmụ ahụhụ: nzọụkwụ ikpeazụ", bullets: ["Naanị karịa oke", "Naanị mgbe ụzọ njikwa ndị ọzọ ezughị", "Naanị nke a debanyere aha maka ihe ọkụkụ na ahụhụ gị"] },
            { title: "Lelee ndebanye aha", bullets: ["Kenya: PCPB; Naịjirịa: NAFDAC", "Ghana: EPA; Senegal, Burkina Faso: CSP (CILSS)", "Mechiri emechi, nwere label, onye na-ere ọgwụ nwere ikike"] },
            { title: "Label bụ iwu", bullets: ["Ihe ọkụkụ, ahụhụ, ọnụọgụ ntinye, oge", "PPE: gloves, boots, uwe ogologo aka, anya, ihe mkpuchi ihu", "Oge nchere tupu owuwe na oge ịlaghachi n'ubi"] },
            { title: "Belata nguzogide", bullets: ["Gbanwee otu ụzọ ọgwụ si egbu", "Etinyela obere ọgwụ karịa ka e kwuru, agwakọtala nke gị", "Debe ndekọ ịgba ọgwụ"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ IPM nke otu oge maka otu ihe ọkụkụ n'ugbo gị: ụmụ ahụhụ ndị bụ isi, opekata mpe nzọụkwụ mgbochi atọ, usoro ilegharị ubi kwa izu na mpempe akwụkwọ ndekọ gị, oke i nwetara n'aka onye ndụmọdụ ọrụ ugbo, ụzọ njikwa na-abụghị ọgwụ ị ga-ebu ụzọ jiri, na atụmatụ ọgwụ ụmụ ahụhụ dị ka nzọụkwụ ikpeazụ (ngwaahịa i lelere na ndepụta ụlọ ọrụ na-ahụ maka ya, iwu label, PPE gị, na otu ị ga-esi gbanwee otu ọgwụ).",
          youCanNow: "ilele na e debanyere ọgwụ ụmụ ahụhụ aha, ịgbaso label ya na ngwa nchekwa kwesịrị ekwesị, na ịgbanwe otu ọgwụ ma debe ndekọ iji belata nguzogide.",
          quickCheck: [
            { objective: "O5", q: "Onye na-ere ọgwụ ugbo na-enye gị karama ọgwụ ụmụ ahụhụ na-enweghị label n'ọnụ ahịa dị ala. Gịnị ka ị ga-eme?", options: ["Zụta ya; ọ dị ọnụ ala", "Gwakọta ya na mmiri ma nwalee ya", "Jụ ya ma zụta ngwaahịa mechiri emechi, nwere label, a debanyere aha", "Jiri ọkara karama ahụ"], answer: 2, why: "Na-enweghị label, ị pụghị ịma ihe ọ bụ, otu esi eji ya n'enweghị nsogbu, ma ọ bụ ma e debanyere ya aha." },
            { objective: "O6", q: "I gbara ngwaahịa si n'otu A oge gara aga. Ahụhụ ahụ ka karịrị oke. Kedu ihe kacha mma?", options: ["Gbaa otu A ọzọ n'ọnụọgụ ugboro abụọ", "Gbaa ngwaahịa a debanyere aha si n'otu dị iche", "Gwakọta otu A na ngwaahịa ọzọ n'onwe gị", "Gbaa otu A kwa ụbọchị"], answer: 1, why: "Ịgbanwe gaa n'otu dị iche na-ebelata nguzogide; ọnụọgụ ugboro abụọ na ngwakọta n'ụlọ adịghị mma, ha megidekwara iwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchịkwa ụmụ ahụhụ site na obere nsi",
        questions: [
          { objective: "O4", q: "Na push-pull, okporo ahịhịa gburugburu ọka:", options: ["Na-adọpụ nla stemborer n'ọka", "Na-achụ nla n'ime ọka", "Na-egbu ọka", "Na-anọchi fatịlaịza"], answer: 0, why: "Okporo ahịhịa (brachiaria ma ọ bụ napier) na-adọta nla ma tọọ ha ọnya." },
          { objective: "O4", q: "Kedu nke bụ njikwa ndụ (biological)?", options: ["Ọgwụ ụmụ ahụhụ na-egbu ihe niile", "Ngwaahịa sitere na nje bacteria Bt", "Ịkpọ ubi ọkụ", "Ịgba mmiri n'abalị"], answer: 1, why: "Ngwaahịa Bt na-eji nje bacteria egbu ụfọdụ ikpuru." },
          { objective: "O5", q: "Onye na-edebe ndepụta ọgwụ ụmụ ahụhụ a debanyere aha na Kenya?", options: ["Ọfịs okporo ụzọ county", "Onye na-ere ọgwụ ugbo", "Pest Control Products Board (PCPB)", "Ụlọ ọrụ mkpụrụ"], answer: 2, why: "PCPB na-edebanye aha ngwaahịa njikwa ụmụ ahụhụ na Kenya." },
          { objective: "O5", q: "Ebee ka ị ga-ahụ oge ị ga-echere n'etiti ịgba ọgwụ na owuwe ihe ubi?", options: ["Jụọ onye agbata obi", "Chọpụta ya site n'ihu igwe", "Ọ bụ otu ụbọchị mgbe niile", "Na label ngwaahịa ahụ (oge nchere tupu owuwe)"], answer: 3, why: "Label na-enye oge nchere tupu owuwe maka ihe ọkụkụ ọ bụla." },
          { objective: "O6", q: "Gịnị mere i ji agbanwe otu ọgwụ ụmụ ahụhụ?", options: ["Iji belata ụmụ ahụhụ inwe nguzogide", "Ime ka ubi sie isi dị iche", "N'ihi na otu otu megidere iwu mgbe niile", "Iji mechaa ngwaahịa ochie"], answer: 0, why: "Iji otu otu ahụ ugboro ugboro na-ahọrọ ụmụ ahụhụ na-adị ndụ mgbe a gbara ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Njikwa Ụmụ Ahụhụ Jikọtara Ọnụ na Njikwa Ụmụ Ahụhụ n'Ụzọ Okike",
    questions: [
      { objective: "O1", q: "Kedu nzọụkwụ anọ nke IPM, n'usoro?", options: ["Gbaa ọgwụ, chere, gbaa ọgwụ, wee ihe ubi", "Gbochie, lelee, kpebie, mee ihe", "Zụta, gwakọta, gbaa, ree", "Kọọ ala, kụọ, gbaa ọgwụ, chekwaa"], answer: 1, why: "IPM na-amalite site na mgbochi ma na-eji ọgwụ ụmụ ahụhụ naanị mgbe e lechara anya ma kpebie." },
      { objective: "O1", q: "Kedu nzọụkwụ na-enyere aka ịkwụsị ụmụ ahụhụ isi n'otu ubi gaa n'ọzọ?", options: ["Ịkụ ihe n'oge dị iche na nke ndị agbata obi gị", "Ịhapụ osisi pupụtara onwe ha", "Ịkụ ihe n'oge, gị na ndị agbata obi gị", "Idebe ahịhịa na-ebu ụmụ ahụhụ"], answer: 2, why: "Ịkụ ihe ọnụ na-ahapụghị ubi a kụrụ n'azụ ụmụ ahụhụ ga-akwaga." },
      { objective: "O1", q: "Gịnị mere a na-azụlite mkpụrụ osisi tomato nta n'ebe nzụlite dị ọcha nwere ụgbụ?", options: ["Ka mkpụrụ osisi nta jee n'ubi n'enweghị Tuta absoluta na whiteflies", "Ka ha ghara ịchọ mmiri", "N'ihi na ụgbụ na-etinye fatịlaịza", "Ka ha too ngwa ngwa n'ọchịchịrị"], answer: 0, why: "Mkpụrụ osisi nta dị ọcha nwere ụgbụ na-egbochi ụmụ ahụhụ ibute n'ihe ọkụkụ." },
      { objective: "O2", q: "Osisi ọka ole ka usoro ilegharị ubi n'ihe ọmụmụ a na-elele?", options: ["5", "10", "100 n'ọnụ ụzọ", "50: osisi 10 n'ebe 5 n'ụzọ W"], answer: 3, why: "Ebe ise nke osisi 10 n'ụzọ W na-enye ezi foto nke ubi ahụ." },
      { objective: "O2", q: "Ikpuru nwere Y gbadara agbada n'isi ya na ntụpọ ojii anọ n'ụdị square n'akụkụ ọdụ ya. Ọ bụ:", options: ["Fall armyworm", "Nwa ladybird", "Tuta absoluta", "Lacewing"], answer: 0, why: "Akara ndị ahụ na-egosi ikpuru fall armyworm." },
      { objective: "O2", q: "Kedu n'ime ndị a bụ onye iro okike ị kwesịrị idekọ ma chebe?", options: ["Nla fall armyworm", "Whitefly", "Ladybird", "Striga"], answer: 2, why: "Ladybirds na-eri aphids na obere ụmụ ahụhụ ndị ọzọ." },
      { objective: "O2", q: "Ị hụrụ mmebi ị na-enweghị ike ịmata. Nzọụkwụ kacha mma na-esote bụ:", options: ["Gbaa ngwaahịa kacha sie ike i nwere", "See foto ya ma jụọ onye ndụmọdụ ọrụ ugbo ma ọ bụ ụlọ ọgwụ ihe ọkụkụ", "Leghara ya anya", "Kpọọ ubi niile ọkụ"], answer: 1, why: "Ịmata nsogbu nke ọma na-ebu ụzọ tupu njikwa ọ bụla." },
      { objective: "O3", q: "I lelere osisi 40, ụmụ ahụhụ wakporo 10. Kedu pasent?", options: ["10%", "40%", "4%", "25%"], answer: 3, why: "10 / 40 x 100 = 25%." },
      { objective: "O3", q: "Ebee ka oke ime ihe gị kwesịrị isi?", options: ["Mgbasa ozi ọgwụ ụmụ ahụhụ", "Onye ndụmọdụ ọrụ ugbo gị ma ọ bụ ụlọ nchọpụta, maka ọkwa ihe ọkụkụ gị", "Ọnụọgụ kacha elu i chere", "Ihe onye agbata obi chere"], answer: 1, why: "Oke na-adabere n'ọkwa ihe ọkụkụ na nchọpụta mpaghara." },
      { objective: "O3", q: "Ọnụọgụ gị karịrị oke. Gịnị ka ị ga-eme?", options: ["Mee ihe, malite site n'ụzọ kacha mma na-abụghị ọgwụ, ma dekọọ ya", "Chere ruo owuwe ihe ubi", "Kwụsị ilegharị ubi", "Kụọ ọzọ"], answer: 0, why: "Karịa oke, ime ihe na-aba uru; IPM na-amalite site n'ụzọ njikwa na-abụghị ọgwụ." },
      { objective: "O4", q: "Onye mepụtara push-pull?", options: ["Ụlọ ọrụ ọgwụ ụmụ ahụhụ", "icipe na ndị mmekọ", "Ụlọ ahịa mkpụrụ", "Ụlọ akụ"], answer: 1, why: "icipe mepụtara push-pull ya na ndị mmekọ na East Africa." },
      { objective: "O4", q: "E wezụga ụmụ ahụhụ, desmodium na push-pull na-emekwa:", options: ["Na-adọta striga karị", "Na-achọ ịgba ọgwụ kwa ụbọchị", "Na-egbu ehi", "Na-egbochi striga ma tinye nitrogen"], answer: 3, why: "Desmodium na-egbochi striga, na-etinye nitrogen n'ala ma bụrụ ezigbo nri anụ." },
      { objective: "O4", q: "A na-eji kaadị anụnụ anụnụ na-arapara arapara ejide karịsịa:", options: ["Thrips", "Ikpuru fall armyworm", "Oke", "Ikwikwi (termites)"], answer: 0, why: "Kaadị anụnụ anụnụ na-adọta thrips; kaadị odo na-adọta whiteflies na aphids." },
      { objective: "O4", q: "Gịnị ka ị ga-eme akwụkwọ Tuta gwuru na mkpụrụ mebiri emebi i chịpụrụ?", options: ["Hapụ ha n'ala", "Nye ha ihe ọkụkụ tomato na-esote", "Ree ha", "Lie ha n'ala nke ọma ma ọ bụ mechie ha n'akpa n'anyanwụ"], answer: 3, why: "Ọ bụrụ na a hapụ ha n'ala, ikpuru dị n'ime ha na-eto ruo n'isi ma wakpo ọzọ." },
      { objective: "O5", q: "Na Naịjirịa, kedu ụlọ ọrụ na-edebanye aha ọgwụ ụmụ ahụhụ?", options: ["Central Bank", "Nigerian Meteorological Agency", "NAFDAC", "Kansụl mkpụrụ"], answer: 2, why: "NAFDAC na-edebanye aha ọgwụ ụmụ ahụhụ na Naịjirịa." },
      { objective: "O5", q: "Kedu iwu ziri ezi gbasara ngwa nchekwa?", options: ["Yiri ihe label depụtara, dị ka gloves, boots, uwe ogologo aka, ihe nchekwa anya na ihe mkpuchi ihu", "Obere ọkpa dị mma n'ụbọchị okpomọkụ", "Gloves bụ naanị maka ụmụnwaanyị", "Ngwa nchekwa bụ naanị maka nnukwu ugbo"], answer: 0, why: "Label na-edepụta ngwa nchekwa a chọrọ maka ngwaahịa ahụ." },
      { objective: "O5", q: "Ebee ka ị na-ekwesịghị idebe ọgwụ ụmụ ahụhụ mgbe ọ bụla?", options: ["N'ime karama mbụ o si bịa", "N'ụlọ nchekwa a kpọchiri akpọchi", "N'ime karama soda ma ọ bụ mmiri", "N'ebe nri na ụmụaka na-anọghị"], answer: 2, why: "Ọgwụ ụmụ ahụhụ dị n'ime karama ihe ọṅụṅụ na-akpata ọtụtụ nsi." },
      { objective: "O6", q: "Ahụhụ anaghịzi anwụ site na ngwaahịa na-arụ ọrụ na mbụ. A na-akpọ nke a:", options: ["Mgbanwe", "Nguzogide", "Oke", "Pollination"], answer: 1, why: "Nguzogide na-eto mgbe a na-eji otu otu kemịkal ahụ ugboro ugboro." },
      { objective: "O6", q: "Kedu omume na-eme ka nguzogide bịa ngwa ngwa?", options: ["Ịgbanwe otu ọgwụ", "Ịgba ọgwụ naanị karịa oke", "Idebe ndekọ ịgba ọgwụ", "Ịgba otu ngwaahịa ahụ kwa ụbọchị ole na ole"], answer: 3, why: "Iji otu otu ahụ ugboro ugboro na-ahọrọ ụmụ ahụhụ na-adị ndụ mgbe a gbara ya." },
      { objective: "O6", q: "Gịnị kwesịrị ịdị na ndekọ ịgba ọgwụ?", options: ["Ụbọchị, ngwaahịa, otu, ọnụọgụ ntinye, ubi na ụbọchị owuwe ga-ekwe omume", "Naanị ọnụ ahịa", "Naanị ihu igwe", "Ọ dịghị ihe; ndekọ adịghị mkpa"], answer: 0, why: "Nkọwa ndị a na-enyere gị aka ịgbanwe otu ọgwụ ma sọpụrụ oge nchere tupu owuwe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ma lelee ya ọzọ gị na onye ndụmọdụ ọrụ ugbo gị.",
    criteria: [
      { name: "Mgbochi", objective: "O1", notYet: "Enweghị nzọụkwụ mgbochi, ma ọ bụ naanị \"gbaa ọgwụ n'oge\".", meets: "Opekata mpe nzọụkwụ mgbochi atọ dabara n'ihe ọkụkụ ahụ (mkpụrụ, mgbanwe ihe ọkụkụ, oge, ịdị ọcha ma ọ bụ okporo osisi).", exceeds: "E debere nzọụkwụ mgbochi na kalenda ma kwekọrịta ha na ndị agbata obi, dị ka ịkụ ihe ọnụ." },
      { name: "Usoro ilegharị ubi", objective: "O2", notYet: "Ilegharị ubi bụ \"mgbe m hụrụ mmebi\", n'enweghị ọnụọgụ osisi.", meets: "Ụbọchị kwa izu, ụzọ W, ọnụọgụ osisi a kara aka na mpempe akwụkwọ ndekọ nwere kọlụm maka ụmụ ahụhụ na ndị iro okike.", exceeds: "Gụnyere foto ụmụ ahụhụ ndị bụ isi na ndị iro okike iji mata ha, e jiriwokwa ndekọ ahụ opekata mpe izu abụọ." },
      { name: "Oke na mkpebi", objective: "O3", notYet: "Enweghị oke; a na-eme ihe n'omume.", meets: "Oke si n'aka onye ndụmọdụ ọrụ ugbo maka ahụhụ ọ bụla bụ isi, ya na usoro pasent e dere ede.", exceeds: "E depụtara oke site n'ọkwa ihe ọkụkụ, ọmụmaatụ e gbakọrọ site n'ọnụọgụ onye na-amụ ihe n'onwe ya dịkwa n'ime ya." },
      { name: "Ụzọ njikwa na-abụghị ọgwụ na mbụ", objective: "O4", notYet: "Ọgwụ ụmụ ahụhụ bụ njikwa mbụ na naanị otu.", meets: "E hazirela opekata mpe ụzọ njikwa abụọ na-abụghị ọgwụ (push-pull, ọnya, iji aka chịpụ, ndị iro okike, ngwaahịa ndụ ma ọ bụ sitere n'osisi) tupu ọgwụ ụmụ ahụhụ ọ bụla.", exceeds: "E hazirela ụzọ njikwa na-abụghị ọgwụ ugbu a, dị ka ọnya a kwụbara ma ọ bụ ubi push-pull a kụrụ." },
      { name: "Nzọụkwụ ikpeazụ n'enweghị nsogbu na n'ụzọ iwu kwadoro", objective: "O5", notYet: "E leleghị ngwaahịa ahụ ma ọ bụ atụmatụ ahụ hapụrụ label ma ọ bụ PPE.", meets: "E lelere ngwaahịa ahụ na ndepụta ụlọ ọrụ mba na-ahụ maka ya, atụmatụ ahụ na-agbasokwa label, na-edepụta PPE ma kpọọ aha oge nchere tupu owuwe si na label.", exceeds: "Gụnyekwara nchekwa n'enweghị nsogbu, otu esi atụfu karama tọgbọrọ chakoo dịka label si kwuo, na nzọụkwụ enyemaka mbụ." },
      { name: "Nguzogide na ndekọ", objective: "O6", notYet: "E jiri otu ngwaahịa n'oge niile, enweghị ndekọ ịgba ọgwụ.", meets: "Ndekọ ịgba ọgwụ na mgbanwe n'etiti opekata mpe otu ọgwụ abụọ.", exceeds: "E hazirela mgbanwe site n'ọgbọ ụmụ ahụhụ, ndekọ gụnyekwara ego njikwa ọ bụla ritere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha na-elegharị ubi kwa izu ma na-edekọ ụmụ ahụhụ ụbọchị 30 ka e mechara (nnyocha nsochi)",
      "Ịgba ọgwụ ụmụ ahụhụ ole na ole n'oge ọ bụla nke ndị na-amụ ihe kọrọ, ebe owuwe ihe ubi nọgidere otu ahụ ma ọ bụ ka mma",
      "Ndị na-amụ ihe hazirela opekata mpe otu ụzọ njikwa na-abụghị ọgwụ (push-pull, ọnya, ngwaahịa ndụ) n'ime otu oge",
      "Akụkọ ole na ole gbasara nsi ọgwụ ụmụ ahụhụ ma ọ bụ ihe ubi a jụrụ site n'otu ndị na-amụ ihe (nzaghachi ndị ndụmọdụ ọrụ ugbo na ndị na-azụ ihe)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị (igwe foto na-enye aka) ma ọ bụ akwụkwọ ndetu na mkpịsị ode maka ndekọ ilegharị ubi",
      "Ohere ịbanye n'ubi nwere ihe ọkụkụ, ka mma ọka, sorghum ma ọ bụ tomato",
      "Nhọrọ: enyo mbubata, ọnya pheromone na kaadị na-arapara arapara iji gosi otu ahụ",
      "Nkọwa kọntaktị onye ndụmọdụ ọrụ ugbo mpaghara ma ọ bụ ụlọ ọgwụ ihe ọkụkụ, na weebụsaịtị ụlọ ọrụ mba na-ahụ maka ọgwụ ụmụ ahụhụ",
      "Ihe dị ka nkeji 60 ruo 90 n'ozuzu maka nkuzi, obere nnwale na ule, gbakwunyere ilegharị ubi kwa izu"
    ],
    facilitatorNotes: [
      "Mee ihe ọmụmụ a dị ka ụlọ akwụkwọ ndị ọrụ ugbo n'ubi (farmer field school) ma ọ bụrụ na ị nwere ike: meenụ ule mbido ọnụ, wee legharịa ezi ubi dị ka otu mgbe Nkuzi 2 na 3 gasịrị.",
      "Weta ezi ihe nlele ma ọ bụ foto fall armyworm, Tuta absoluta na ndị iro okike ka ndị na-amụ ihe nwee ike ịmụ ịmata ha.",
      "Nweta oke mpaghara site n'aka ndị ndụmọdụ ọrụ ugbo ma ọ bụ ụlọ nchọpụta tupu nnọkọ ahụ; emepụtala ha n'onwe gị.",
      "Atụla aro ngwaahịa ọgwụ ụmụ ahụhụ, ọnụọgụ ntinye ma ọ bụ oge nchere tupu owuwe mgbe ọ bụla; kama, gosi ndị na-amụ ihe otu esi agụ label na ndepụta ụlọ ọrụ na-ahụ maka ya.",
      "Emetụla ọgwụ ụmụ ahụhụ aka n'oge nnọkọ n'eyighị PPE zuru ezu; jiri karama tọgbọrọ chakoo, dị ọcha, nwere label mee omume ịgụ label.",
      "Jiri rubric tụọ akara atụmatụ IPM ikpeazụ, ma kwekọrịta otu mmezi maka onye na-amụ ihe ọ bụla n'oge na-esote."
    ]
  }
};
