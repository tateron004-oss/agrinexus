"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-savings-groups-microfinance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. All money figures are examples, exactly as in the English; no investment or lending advice.

const VSLA = { name: "VSL Associates: usoro VSLA (òkè, ego mbinye, ego enyemaka, afọ otu okirikiri, nkesa)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: ndepụta SACCO nwere ikike ịnara ego nchekwa", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: iwu maka ụlọ ọrụ microfinance (systèmes financiers décentralisés) na mba ndị na-eji XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Central Bank of Nigeria: ụlọ akụ microfinance", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Bank of Ghana: ụlọ ọrụ niile nwere ikike na otu esi eme mkpesa", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Central Bank of Kenya: nlekọta ụlọ akụ, gụnyere ụlọ akụ microfinance na ndị na-agbazinye ego n'ịntanetị nwere ikike", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Nigeria: ọnọdụ ndebanye aha nke ndị na-agbazinye ego n'ịntanetị (app mbinye ego a kwadoro)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 May 2026): SEC Nigeria dọrọ aka na ntị maka atụmatụ Ponzi a na-agbasa na WhatsApp, TikTok na Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance-ig",
  lang: "ig",
  translationOf: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Otu Nchekwa Ego na Microfinance (Chama, VSLA, Tontine, Esusu)",
  skills: "Ịhọrọ n'etiti otu na-atụgharị na otu nchekwa na mbinye ego, Ide atụmatụ nchekwa ego kwa ọnwa, Ịlele iwu otu, Idebe ndekọ otu na ichebe ego, Ịtụnyere mbinye ego microfinance na nke otu, Ịhụ atụmatụ Ponzi na ndị mbinye ego adịgboroja",
  outcome: "ịhọrọ otu nchekwa ego dabara ebumnuche gị, ịlele iwu ya na ndekọ ya, ịtụnyere mbinye ego microfinance ma ọ bụ nke otu site n'ego niile ị ga-akwụghachi, ịhụ atụmatụ Ponzi ma ọ bụ onye mbinye ego adịgboroja, na ịgbaso atụmatụ nchekwa ego kwa ọnwa i dere ede.",
  about: [
    "N'Africa niile, ndị mmadụ na-achekwa ego ọnụ: chama na merry-go-round na Kenya, esusu na ajo na Nigeria, susu na Ghana, tontine na Senegal, Côte d'Ivoire na Cameroon (njangi na Cameroon ebe a na-asụ Bekee), gam'eya na Egypt na daret na Morocco. Otu nchekwa ego, SACCO (otu nchekwa na mbinye ego e debanyere aha) na ụlọ akụ microfinance na-enyere ọtụtụ nde mmadụ aka ịkwụ ụgwọ akwụkwọ, ịzụta ngwa ahịa maka ụlọ ahịa ma ọ bụ ịgafe ọnwa siri ike.",
    "Ihe ọmụmụ a bụ maka ndị ahịa, ndị nne na nna, ndị ọrụ aka, ndị ọrụ na ndị ntorobịa chọrọ ichekwa ego mgbe niile ma ọ bụ ịgbazite ego nke ọma. Ị ga-amụta ụdị otu abụọ bụ isi, otu esi ede atụmatụ nchekwa ego, ihe ị ga-elele n'iwu na ndekọ otu, otu esi atụnyere mbinye ego site n'ego niile ị ga-akwụghachi, na otu esi ahụ atụmatụ na-ezu ego nchekwa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\", obere nnwale, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ego niile e kwuru bụ ọmụmaatụ. Ihe ọmụmụ a na-akọwa otu ihe ndị a si arụ ọrụ na ihe egwu dị na ha; ọ naghị agwa gị ebe ị ga-etinye ego gị."
  ],
  finalTask: "Dee atụmatụ nchekwa ego gị kwa ọnwa n'otu peeji: ebumnuche gị na ụbọchị ị chọrọ ya, ego niile, ego ị ga-echekwa kwa izu ma ọ bụ kwa ọnwa, ebe ị ga-echekwa ya (otu, SACCO, ụlọ akụ microfinance ma ọ bụ akaụntụ), na mpempe akwụkwọ nlele nwere azịza gị gbasara otu ahụ ma ọ bụ ụlọ ọrụ ahụ: iwu ya e dere ede, otu e si edebe ego na ndekọ, ikike ya (ọ bụrụ na ọ na-anara ego nchekwa ma ọ bụ na-agbazinye ego dị ka azụmahịa), na ego niile mbinye ego ọ bụla ga-efu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa n'Africa niile, n'obodo mepere emepe na n'ime obodo: ndị ahịa, ndị ọrụ aka, ndị nne na nna, ndị ọrụ na ndị ntorobịa, ọtụtụ n'ime ha nọworị na chama, esusu, susu ma ọ bụ tontine. Ọmụmaatụ sitere na Kenya, Nigeria, Ghana, Senegal, Cameroon, Côte d'Ivoire, Egypt na Morocco.",
    startingPoint: "Ọtụtụ na-achekwa ego n'otu na-abụghị nke gọọmentị ma ọ bụ n'akpa ego ekwentị (mobile wallet), mana n'enweghị ebumnuche e dere ede. Ụfọdụ abanyela n'otu n'agụghị iwu ya, gbazitere ego n'agbakọghị ego niile ha ga-akwụghachi, ma ọ bụ tụfuru ego n'otu dara ada ma ọ bụ n'atụmatụ \"mee ka ego gị bụrụ okpukpu abụọ\".",
    gap: "Ndị na-amụ ihe kwesịrị ịhọrọ ụdị otu dabara ebumnuche ha, lelee iwu na ndekọ tupu ha tụkwasị otu obi n'ego ha, tụnyere mbinye ego site n'ihe ha ga-akwụghachi n'ezie, ma mata atụmatụ Ponzi na ndị mbinye ego na-enweghị ikike, ka ego nchekwa ha too kama ịla n'iyi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a sụgharịrị ya n'asụsụ French na Arabic",
      "Ngwaọrụ: ekwentị nkịtị; ọtụtụ otu na-ezukọ ihu na ihu ma na-edebe ndekọ n'akwụkwọ",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ na ụbọchị nzukọ otu",
      "Iwu na ikike dị iche site na mba ruo mba ma na-agbanwe: ndị na-amụ ihe na-elele ndepụta ọhụrụ nke onye nlekọta (regulator)",
      "Ego: naanị ọmụmaatụ; enweghị ndụmọdụ itinye ego; ekesala PIN ma ọ bụ okwuntughe mgbe ọ bụla"
    ],
    prerequisites: "Ọ dịghị. Ịmara ịgbakọ na ịmụba ihe dị mfe, ya na igwe mgbakọ dị n'ekwentị, na-enyere aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ebumnuche nchekwa ego na ụdị otu abụọ", action: "ịkọwa otu otu na-atụgharị na otu nchekwa na mbinye ego si arụ ọrụ ma họrọ nke dabara ebumnuche ahụ", standard: "na-enye otu ihe mere i ji họrọ ya na otu ihe egwu dị n'otu nke ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị ebumnuche na ego ị na-enweta", action: "ide atụmatụ nchekwa ego kwa ọnwa nwere ebumnuche, ego niile, ụbọchị, ego kwa izu ma ọ bụ kwa ọnwa na ebe ị ga-echekwa ya", standard: "nke mgbakọ ya ruru ebumnuche ahụ n'ụbọchị ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị iwu otu (constitution)", action: "ịlele ya maka iwu ndị bụ isi: ntinye ego, nzukọ, mbinye ego, ntaramahụhụ, ọpụpụ, nkesa na onye na-achị ego", standard: "na-achọta opekata mpe isii n'ime asaa ma kpọọ aha ndị na-adịghị ya" },
    { id: "O4", condition: "N'oge nzukọ otu", action: "idekọ ego e tinyere na mbinye ego n'akwụkwọ onye otu (passbook) ma ọ bụ n'akwụkwọ ndekọ ma lelee na ego dị n'aka na ndekọ dabara", standard: "ebe a gụpụtara ego ọ bụla n'olu dị elu ma ndị otu kwenye na ya n'ihu ha" },
    { id: "O5", condition: "Mgbe e nyere gị mbinye ego microfinance ma ọ bụ nke otu", action: "ịgbakọ ego niile ị ga-akwụghachi ma lelee ụbọchị ịkwụghachi ya na ego ị na-enweta", standard: "tupu ị bịanye aka, na-akọwa ihe joint liability pụtara maka gị" },
    { id: "O6", condition: "Mgbe e nyere gị onyinye ichekwa, itinye ma ọ bụ ịgbazite ego", action: "ịmata ihe ịdọ aka na ntị nke atụmatụ Ponzi ma ọ bụ onye mbinye ego adịgboroja ma lelee onye ahụ na ndepụta gọọmentị nke onye nlekọta", standard: "tupu ị kwụọ ụgwọ ma ọ bụ kesaa ozi ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ichekwa ego ọnụ",
      lessons: [
        {
          title: "Ụdị otu nchekwa ego abụọ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọwaa otu otu na-atụgharị na otu nchekwa na mbinye ego si arụ ọrụ, ma họrọ otu maka ebumnuche gị.",
          text: [
            "Otu na-atụgharị (merry-go-round, esusu, ajo, susu, tontine, njangi, gam'eya ma ọ bụ daret) dị mfe. Onye otu ọ bụla na-atụ otu ego ahụ kwa izu ma ọ bụ kwa ọnwa, oge ọ bụla otu onye na-ewere ego niile, n'usoro, ruo mgbe onye ọ bụla weere ya otu ugboro. Ọmụmaatụ: ndị otu 10 na-atụ KES 1,000 kwa ọnwa; kwa ọnwa otu onye na-enweta KES 10,000.",
            "Ọ dị mma maka ego buru ibu n'otu oge: ụgwọ akwụkwọ, igwe ọkpụkpọ akwa, ngwa ahịa maka ụlọ ahịa. Ihe egwu ya: ndị weere ego n'oge mbụ nwere ike ịkwụsị ịtụ, ọ dịghịkwa onye na-enweta uru n'ego ahụ. Ndị mbụ na-enweta ego n'enweghị ọmụrụ nwa; ndị ikpeazụ bụ ndị na-agbazinye otu ahụ ego n'ezie.",
            "Otu nchekwa na mbinye ego (VSLA, ASCA ma ọ bụ ọtụtụ chama, na SACCO bụ ụdị ya buru ibu e debanyere aha) na-edebe ego ahụ ọnụ. Ndị otu na-echekwa ego na nzukọ ọ bụla, ego nchekwa ahụ na-aghọ ego mbinye, ndị otu na-agbazite ma na-akwụghachi ya na ụgwọ ọrụ otu ahụ kpebiri, na njedebe okirikiri ahụ, nke na-abụkarị ihe dị ka otu afọ, a na-ekesa ihe niile dịka ihe onye ọ bụla chekwara si dị. Ihe egwu ya: mbinye ego a na-akwụghachighị, na ego e zuru ezu ma ọ bụ e dekọghị nke ọma.",
            "Họrọ dịka ebumnuche gị si dị. Ego buru ibu n'oge na-adịghị anya: otu na-atụgharị nwere ike ịdaba. Nchekwa mgbe niile na ohere ịgbazite ego: otu nchekwa na mbinye ego nwere ike ịdaba. Ọtụtụ mmadụ na-eji ha abụọ."
          ],
          words: [["Otu na-atụgharị (ROSCA)", "ndị otu na-atụ otu ego ahụ ma onye ọ bụla na-ewere ego niile n'usoro."], ["Otu nchekwa na mbinye ego", "ndị otu na-echekwa ego n'otu akpa, na-agbazinye onwe ha ego ma na-ekesa ya na njedebe okirikiri (VSLA, ASCA, SACCO)."], ["Nkesa (share-out)", "ụbọchị otu na-akwụ ndị otu ego nchekwa na uru niile dịka ego nchekwa ha si dị."]],
          slides: [
            { title: "Otu na-atụgharị", bullets: ["Onye ọ bụla na-atụ otu ego; otu onye na-ewere ego niile n'usoro", "Esusu, ajo, susu, tontine, njangi, gam'eya, daret", "Ọ dị mma maka ego buru ibu; ihe egwu: ndị mbụ kwụsị ịtụ"] },
            { title: "Otu nchekwa na mbinye ego", bullets: ["Ego nchekwa na-aghọ ego mbinye", "Ndị otu na-agbazite ma na-akwụghachi ya na ụgwọ ọrụ", "Nkesa dịka ihe onye ọ bụla chekwara; ihe egwu: ego a kwụghachighị"] },
            { title: "Họrọ dịka ebumnuche gị si dị", bullets: ["Ego buru ibu n'oge na-adịghị anya: otu na-atụgharị", "Nchekwa mgbe niile na mbinye ego: VSLA ma ọ bụ SACCO", "Ọtụtụ mmadụ na-eji ha abụọ"] }
          ],
          sources: [VSLA],
          tryIt: "Chee maka otu ị nọ na ya ma ọ bụ nke ị maara. Ọ bụ nke na-atụgharị ka ọ bụ nke nchekwa na mbinye ego? Dee otu ihe ọ dị mma maka ya na otu ihe egwu.",
          youCanNow: "ịkọwa ụdị otu nchekwa ego abụọ ahụ ma họrọ nke dabara ebumnuche gị.",
          quickCheck: [
            { objective: "O1", q: "Ndị otu iri na abụọ na-atụ GHS 200 kwa ọnwa, otu onye na-ewere ego niile kwa ọnwa. Ụdị otu gịnị ka nke a bụ?", options: ["Otu nchekwa na mbinye ego", "Ụlọ akụ microfinance", "Otu na-atụgharị", "Atụmatụ Ponzi"], answer: 2, why: "Onye ọ bụla na-atụ otu ego ma na-ewere ego niile n'usoro: otu na-atụgharị (susu)." },
            { objective: "O1", q: "Na VSLA, kedu otu e si ekesa ego na njedebe okirikiri?", options: ["Dịka ihe onye otu ọ bụla chekwara si dị", "N'otu n'otu, n'agbanyeghị ihe onye ọ bụla chekwara", "Ihe niile nye onye isi oche", "Nye onye gbaziri ego kacha"], answer: 0, why: "Ndị otu chekwara ego karịa na-enweta òkè ka ukwuu n'ego ahụ na uru ya." }
          ]
        },
        {
          title: "Ebumnuche gị na atụmatụ nchekwa ego kwa ọnwa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dee atụmatụ nchekwa ego ga-eru ebumnuche n'ụbọchị a kara aka.",
          text: [
            "Nchekwa ego na-aga nke ọma karịa mgbe e nwere ebumnuche doro anya: ihe ọ bụ maka ya, ego ole ọ ga-efu na mgbe ị chọrọ ya. \"Ụgwọ akwụkwọ NGN 120,000 tupu January\" bụ ebumnuche. \"Chekwaa ego karịa\" abụghị.",
            "Kee ego niile site n'ọnụọgụ izu ma ọ bụ ọnwa ị nwere. Ọmụmaatụ: NGN 120,000 n'ime ọnwa 8 bụ NGN 15,000 kwa ọnwa. Ọ bụrụ na nke ahụ karịrị ike gị, gbanwee ụbọchị ahụ, ebumnuche ahụ ma ọ bụ ihe ị na-emefu. Lee ego ị na-enweta n'ọnwa ọma na n'ọnwa ọjọọ; onye ahịa nwere ike ichekwa karịa n'oge ahịa na-aga nke ọma.",
            "Kpebie ebe ego ahụ ga-anọ: otu nchekwa ego, SACCO, ụlọ akụ microfinance, ụlọ akụ ma ọ bụ akaụntụ nchekwa n'ekwentị. Debe obere ego mberede ị nwere ike iweta ngwa ngwa, iche n'ego maka ebumnuche ahụ.",
            "Buru ụzọ kwụọ onwe gị: chekwaa ego n'ụbọchị ego batara, tupu i mefuo ya n'ihe ọzọ. Ọmụmaatụ: Aïcha, onye na-eme ntutu isi na Abidjan, na-etinye XOF 5,000 na tontine ya kwa Satọdee tupu ọ zụta ihe ọ bụla ọzọ."
          ],
          steps: ["Dee ebumnuche ahụ, ego niile na ụbọchị ahụ.", "Gụọ izu ma ọ bụ ọnwa fọdụrụ tupu ụbọchị ahụ.", "Kee ego niile site n'ọnụọgụ ahụ.", "Lelee ya na ego ị na-enweta n'ọnwa ọjọọ.", "Họrọ ebe ị ga-echekwa ya.", "Chekwaa ego n'ụbọchị ego batara."],
          words: [["Ebumnuche nchekwa ego", "ihe ị na-echekwa ego maka ya, ego ole ọ ga-efu na mgbe."], ["Ego mberede", "obere ego e debere maka nsogbu na-abịa na mberede, nke dị mfe iweta."]],
          slides: [
            { title: "Ebumnuche doro anya", bullets: ["Ihe ọ bụ maka ya, ego ole, mgbe", "\"Ụgwọ akwụkwọ NGN 120,000 tupu January\"", "Ọ bụghị naanị \"chekwaa ego karịa\""] },
            { title: "Mee mgbakọ ahụ", bullets: ["Ego niile / ọnwa = ego kwa ọnwa", "NGN 120,000 / 8 = NGN 15,000 (ọmụmaatụ)", "Ọ karịrị ike gị? Gbanwee ụbọchị, ebumnuche ma ọ bụ mmefu"] },
            { title: "Ebee na mgbe", bullets: ["Otu, SACCO, ụlọ akụ microfinance ma ọ bụ akaụntụ", "Debe ego mberede iche", "Buru ụzọ chekwaa, n'ụbọchị ego batara"] }
          ],
          tryIt: "Dee otu ezi ebumnuche nwere ego niile na ụbọchị. Kee ya ka ị nweta ego kwa izu ma ọ bụ kwa ọnwa, ma lelee ya na ego ị na-enweta n'ọnwa ọjọọ. Gbanwee ya ruo mgbe ọ dabara.",
          youCanNow: "ide atụmatụ nchekwa ego nwere ebumnuche, ego niile, ụbọchị na ego kwa izu ma ọ bụ kwa ọnwa.",
          quickCheck: [
            { objective: "O2", q: "Ị chọrọ KES 24,000 n'ime ọnwa 6. Ego ole ka ị ga-echekwa kwa ọnwa?", options: ["KES 2,400", "KES 6,000", "KES 3,000", "KES 4,000"], answer: 3, why: "24,000 kere site na 6 bụ 4,000." },
            { objective: "O2", q: "Kedu nke bụ ebumnuche nchekwa ego doro anya?", options: ["\"Chekwaa ego karịa n'afọ a\"", "\"Igwe ọkpụkpọ akwa ga-efu GHS 1,500 tupu June\"", "\"Ịbụ ọgaranya\"", "\"Kwụsị imefu ego\""], answer: 1, why: "Ọ na-ekwu ihe ọ bụ, ego ole na mgbe." }
          ]
        },
        {
          title: "Ịlele iwu otu tupu ị banye",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lelee iwu otu e dere ede maka isi ihe asaa ahụ.",
          text: [
            "Otu siri ike nwere iwu e dere ede, nke a na-akpọkarị constitution ma ọ bụ by-laws, nke ndị otu niile kwenyere na ya. Rịọ ịhụ ya tupu ị banye. Ọ bụrụ na ọ dịghị, gwa otu ahụ ka ha buru ụzọ dee ya.",
            "Lelee ihe asaa: 1. Ntinye ego: ego ole, ugboro ole, na ihe na-eme ma ọ bụrụ na ị kwụọ n'oge gafere (ntaramahụhụ). 2. Nzukọ: mgbe na ebe. 3. Mbinye ego: onye nwere ike ịgbazite, ego ole, ruo ogologo oge ole, ụgwọ ọrụ ya na ihe na-eme ma ọ bụrụ na a kwụghachighị ya. 4. Ntaramahụhụ na ịdọ aka na ntị. 5. Ọpụpụ: otu ị ga-esi nweta ego gị ma ọ bụrụ na ị hapụ ma ọ bụ kwaga ebe ọzọ. 6. Nkesa ma ọ bụ usoro ntụgharị: mgbe na otu. 7. Onye na-achị ego: ndị isi otu, otu e si ahọpụta ha, na onye na-abịanye aka.",
            "Ụfọdụ otu na-edebanye aha, dịka ọmụmaatụ dị ka otu enyemaka onwe onye, cooperative ma ọ bụ SACCO; jụọ ọfịs mmepe obodo ma ọ bụ ọfịs cooperative mpaghara gị ihe metụtara ebe ị bi. Otu na-anara ego nchekwa n'aka ọha dị ka azụmahịa nwere ike ịchọ ikike site n'aka onye nlekọta.",
            "Ọmụmaatụ: chama Grace na Nakuru dere n'iwu ya na onye na-edebe ego (treasurer) agaghị ejide igodo igbe ego kwa, ndị otu na-atụkwa vootu na mbinye ego ọ bụla."
          ],
          steps: ["Rịọ ịhụ iwu e dere ede.", "Lelee ntinye ego na ntaramahụhụ maka ịkwụ n'oge gafere.", "Lelee ụbọchị nzukọ.", "Lelee iwu mbinye ego na ihe na-eme ma ọ bụrụ na a kwụghachighị ya.", "Lelee otu ị ga-esi pụọ ma nweta ego gị.", "Lelee nkesa ma ọ bụ usoro ntụgharị.", "Lelee onye na-achị ego ma na-abịanye aka maka ya."],
          words: [["Constitution (by-laws)", "iwu e dere ede nke otu kwenyere na ya ma na-agbaso."], ["Ndị isi otu (officers)", "ndị otu a họpụtara ịdu: na-abụkarị onye isi oche, odeakwụkwọ na onye na-edebe ego."]],
          slides: [
            { title: "Rịọ ịhụ iwu e dere ede", bullets: ["Constitution ma ọ bụ by-laws, nke ndị otu kwenyere na ya", "Enweghị iwu? Gwa otu ahụ ka ha dee ya"] },
            { title: "Ihe asaa ị ga-elele", bullets: ["Ntinye ego na ntaramahụhụ; nzukọ", "Mbinye ego na ego a kwụghachighị; ọpụpụ", "Nkesa ma ọ bụ ntụgharị; onye na-achị ego"] },
            { title: "Ndebanye aha", bullets: ["Ụfọdụ otu na-edebanye aha n'obodo", "Jụọ ọfịs mmepe obodo ma ọ bụ ọfịs cooperative", "Ịnara ego nchekwa n'aka ọha nwere ike ịchọ ikike"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Nweta iwu otu ị nọ na ya ma ọ bụ nke ị chọrọ ịbanye (ma ọ bụ dee ihe ị maara). Kaa akara n'isi ihe asaa ọ bụla. Dee ndị na-adịghị ya dị ka ajụjụ ị ga-ajụ na nzukọ ọzọ.",
          youCanNow: "ịlele iwu otu maka isi ihe asaa ahụ tupu i tụkwasị ya obi n'ego gị.",
          quickCheck: [
            { objective: "O3", q: "Kedu ajụjụ na-elele iwu \"ọpụpụ\"?", options: ["Kedu mgbe anyị na-ezukọ?", "Onye bụ onye isi oche?", "Kedu agba igbe ego?", "Ọ bụrụ na m kwaga obodo ọzọ, kedu otu m ga-esi nweta ego nchekwa m?"], answer: 3, why: "Iwu ọpụpụ na-ekwu otu onye otu ga-esi nweta ego ya." },
            { objective: "O3", q: "Otu enweghị iwu e dere ede. Gịnị bụ nzọụkwụ amamihe tupu ị banye?", options: ["Gwa ndị otu ka ha kwenye ma buru ụzọ dee iwu", "Banye ma tụọ anya na ọ ga-adị mma", "Nye onye isi oche ego nchekwa gị ka o debe", "Banye otu abụọ ka i wee nọrọ ná nchekwa"], answer: 0, why: "Iwu e dere ede na-egbochi ọtụtụ esemokwu gbasara ego." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ichekwa ego ọnụ",
        questions: [
          { objective: "O1", q: "N'otu na-atụgharị, onye na-ebu ihe egwu kacha?", options: ["Onye otu buru ụzọ were ego niile", "Ndị otu na-ewere ego n'ikpeazụ, ma ọ bụrụ na ndị mbụ akwụsị ịtụ", "Ụlọ akụ", "Ọ dịghị onye"], answer: 1, why: "Ndị ikpeazụ atụwo ego ọtụtụ ọnwa, ha na-atụfu ma ọ bụrụ na ndị mbụ akwụsị ịtụ." },
          { objective: "O1", q: "Ị chọrọ ichekwa ego mgbe niile ma gbazite obere ego n'ime afọ. Kedu nke nwere ike ịdaba kacha?", options: ["Naanị otu na-atụgharị", "Atụmatụ Ponzi", "Idebe ego n'okpuru akwa ndina", "Otu nchekwa na mbinye ego dị ka VSLA"], answer: 3, why: "VSLA na-ekwe ka ndị otu chekwaa ma gbazite ego site n'akpa ego ha." },
          { objective: "O2", q: "Ebumnuche gị bụ GHS 900 n'ime ọnwa 3. Ego ole kwa ọnwa?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 kere site na 3 bụ 300." },
          { objective: "O3", q: "Kedu nke ABỤGHỊ otu n'ime iwu asaa ị ga-elele?", options: ["Iwu mbinye ego", "Nkesa ma ọ bụ ntụgharị", "Nri onye isi oche kacha amasị", "Onye na-achị ego"], answer: 2, why: "Ihe asaa ahụ bụ ntinye ego, nzukọ, mbinye ego, ntaramahụhụ, ọpụpụ, nkesa na ịchị ego." },
          { objective: "O3", q: "Gịnị mere ị ga-eji lelee onye na-abịanye aka ma na-achị ego?", options: ["Ka otu onye ghara inwe ike iwere ya naanị ya", "Ime ka nzukọ dị mkpụmkpụ", "Ibelata ntaramahụhụ", "Ka otu ahụ ghara ịkwụ ụtụ isi"], answer: 0, why: "Ịchị ego ọnụ na-egbochi otu onye isi otu iji ego ahụ eme ihe ọjọọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ndekọ, mbinye ego na ịnọ ná nchekwa",
      lessons: [
        {
          title: "Ndekọ na nchekwa ego na nzukọ",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dekọọ ego e tinyere na mbinye ego ma lelee na ego dị n'aka dabara ndekọ.",
          text: [
            "Ọtụtụ otu na-ada ada na-amalite site na ndekọ adịghị mma ma ọ bụ otu onye na-ejide ego. Otu ọma na-edebe ndekọ onye otu ọ bụla nwere ike ịghọta.",
            "Ngwa a na-ejikarị: onye otu ọ bụla nwere passbook na-egosi ego nchekwa ya na mbinye ego ya, otu ahụ na-edebe akwụkwọ ndekọ, na n'ọtụtụ VSLA igbe ego nwere mkpọchi atọ na igodo atọ ndị otu atọ dị iche iche na-ejide, ndị na-abụghị onye na-edebe igbe ahụ. Ụfọdụ otu na-edebe ego n'akaụntụ ụlọ akụ ma ọ bụ akaụntụ ekwentị nke otu ahụ chọrọ mmadụ abụọ ma ọ bụ atọ ịbịanye aka.",
            "Na nzukọ ọ bụla: a na-agụ ntinye ego na ịkwụghachi ego ọ bụla n'ihu ndị otu, dee ya na passbook na n'akwụkwọ ndekọ, ma gụpụta ego niile n'olu dị elu. Na njedebe, ego a gụrụ ga-adaba ndekọ. Ọ bụrụ na ọ dabaghị, kwụsị ma chọpụta ihe kpatara ya tupu onye ọ bụla apụọ.",
            "Ọmụmaatụ: na VSLA dị na Tamale, odeakwụkwọ na-agụpụta ego fọdụrụ n'olu dị elu, ndị otu abụọ na-agụkwa ego ahụ. Ha dabara: GHS 3,450. A na-akpọchi igbe ahụ, ndị otu atọ dị iche iche ewere igodo ahụ laa ụlọ."
          ],
          steps: ["Gụọ ụgwọ ọ bụla n'ihu ndị otu.", "Dee ya na passbook onye otu ahụ na n'akwụkwọ ndekọ.", "Gụpụta ego niile n'olu dị elu.", "Gụọ ego dị n'aka ma tụnyere ya na akwụkwọ ndekọ.", "Ọ bụrụ na ha adabaghị, chọpụta ihe kpatara ya tupu onye ọ bụla apụọ.", "Kpọchie ego ahụ; ndị otu dị iche iche ejide igodo ma ọ bụ ikike ịbịanye aka."],
          words: [["Passbook", "akwụkwọ onye otu nke ya na-egosi ego nchekwa ya na mbinye ego ya."], ["Onye na-abịanye aka (signatory)", "onye e nyere ikike ịbịanye aka maka akaụntụ otu; otu ọma chọrọ mmadụ abụọ ma ọ bụ karịa."]],
          slides: [
            { title: "Ihe mere ndekọ ji dị mkpa", bullets: ["Ndekọ adịghị mma na otu onye na-ejide ego", "bụ ebe ọtụtụ otu na-ehie ụzọ"] },
            { title: "Ngwa", bullets: ["Passbook na akwụkwọ ndekọ", "Igbe ego nwere mkpọchi atọ, ndị atọ na-ejide igodo", "Akaụntụ otu chọrọ mmadụ abụọ ma ọ bụ karịa ịbịanye aka"] },
            { title: "Nzukọ ọ bụla", bullets: ["Gụọ ego n'ihu ndị otu; dee ya", "Gụpụta ego niile n'olu dị elu", "Ego ga-adaba ndekọ tupu onye ọ bụla apụọ"] }
          ],
          sources: [VSLA],
          tryIt: "Mee tebụl ndekọ dị mfe maka otu nzukọ: aha onye otu, ego nchekwa o tinyere, ego mbinye ọ kwụghachiri, mbinye ego ọhụrụ. Tinye ndị otu atọ dị ka ọmụmaatụ. Gbakọọ kọlụm ọ bụla ma lelee na ego niile ha hà ka ego ị ga-agụ n'aka.",
          youCanNow: "idekọ ego e tinyere na mbinye ego na nzukọ ma lelee na ego dị n'aka dabara ndekọ.",
          quickCheck: [
            { objective: "O4", q: "Na njedebe nzukọ, ego dị n'aka erughị akwụkwọ ndekọ ji GHS 200. Gịnị ka ị ga-eme?", options: ["Leghara ya anya; ọ ga-adaba oge ọzọ", "Hapụ onye na-edebe ego ka ọ kọwaa ya n'ọnwa ọzọ", "Kwụsị ma chọpụta ihe kpatara ya tupu onye ọ bụla apụọ", "Dọwaa peeji ahụ"], answer: 2, why: "A ga-achọpụta ọdịiche ahụ mgbe onye ọ bụla nọ ebe ahụ ma ihe ahụ ka dị ọhụrụ n'uche." },
            { objective: "O4", q: "Gịnị mere ọtụtụ VSLA ji enye ndị otu atọ dị iche iche igodo atọ ahụ?", options: ["Ka otu onye ghara inwe ike imeghe igbe ahụ naanị ya", "N'ihi na mkpọchi adịghị oke ọnụ", "Ime ka nzukọ dị ogologo", "Ka onye na-edebe igbe ahụ nwee ike imeghe ya n'ụlọ"], answer: 0, why: "Igodo e kesara ekesa pụtara na a ga-emeghe ego ahụ naanị mgbe ndị otu nọ ya." }
          ]
        },
        {
          title: "Microfinance na mbinye ego otu",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ ego niile ị ga-akwụghachi na mbinye ego ma lelee ụbọchị ya na ego ị na-enweta.",
          text: [
            "Ụlọ akụ na ụlọ ọrụ microfinance na-agbazinye ndị mmadụ na obere azụmahịa obere ego, na-esitekarị n'otu. Na Nigeria, Central Bank na-enye ụlọ akụ microfinance ikike; na Kenya, Central Bank na-enye ụlọ akụ microfinance na ndị na-agbazinye ego n'ịntanetị ikike; na Ghana, Bank of Ghana na-edepụta ụlọ ọrụ nwere ikike; na mba ndị na-eji XOF dị ka Senegal na Côte d'Ivoire, microfinance na-agbaso iwu BCEAO.",
            "Etụnyerela mbinye ego naanị site n'ọmụrụ nwa (interest rate) ha kwuru. Rịọ ka ha dee ego niile ị ga-akwụghachi, gụnyere ụgwọ niile, inshọransị na ụgwọ ndị ọzọ. Ọmụmaatụ (ọnụọgụ e chepụtara echepụta): gbazite KES 10,000; kwụghachi KES 1,000 kwa izu ruo izu 12. Ego niile a kwụghachiri: KES 12,000, ya mere mbinye ego ahụ na-efu KES 2,000.",
            "Lelee ụbọchị ịkwụghachi ya na ego ị na-enweta. Ịkwụghachi kwa izu na-esi ike ma ọ bụrụ na ị na-enweta ego kwa ọnwa ma ọ bụ n'oge ụfọdụ n'afọ. Jụọ ihe na-eme ma ọ bụrụ na ị kwụọ n'oge gafere: ntaramahụhụ, na ma a ga-akọrọ credit bureau ya.",
            "Ọtụtụ mbinye ego otu na-eji joint liability: ọ bụrụ na otu onye otu akwụghị, ndị ọzọ ga-akwụrụ ya. Banye naanị na ndị ị tụkwasịrị obi, mara na i nwere ike ịkwụrụ onye ọzọ. Gbazite ego maka ihe na-ewebata ego ma ọ bụ na-echekwa ego, ọ bụghị iji kwụọ mbinye ego ọzọ."
          ],
          steps: ["Rịọ ka e dee ego niile a ga-akwụghachi, ya na ụgwọ niile.", "Gbakọọ ọnụ ahịa ya: ego niile a kwụghachiri wepụ ego a gbaziri.", "Dee ụbọchị ịkwụghachi ya.", "Lelee ụbọchị ọ bụla na ego ị na-enweta n'ọnwa ọjọọ.", "Jụọ maka ntaramahụhụ maka ịkwụ n'oge gafere na ịkọrọ credit bureau.", "Jụọ ma mbinye ego ahụ nwere joint liability."],
          words: [["Microfinance", "obere mbinye ego na ọrụ nchekwa ego maka ndị mmadụ na obere azụmahịa."], ["Ego niile a kwụghachiri", "ego niile ị na-akwụghachi, gụnyere ọmụrụ nwa na ụgwọ ndị ọzọ."], ["Joint liability", "ndị otu ga-akwụrụ onye otu akwụghachighị ego ya."], ["Credit bureau", "ụlọ ọrụ na-edekọ otu ndị mmadụ si akwụghachi ego ha gbaziri; ndị mbinye ego na-elele ya."]],
          slides: [
            { title: "Ndị na-agbazinye ego", bullets: ["Ụlọ akụ na ụlọ ọrụ microfinance, na-esitekarị n'otu", "Central bank na-enye ha ikike (CBN, CBK, Bank of Ghana)", "Mba ndị na-eji XOF: iwu BCEAO"] },
            { title: "Tụnyere ego niile a ga-akwụghachi", bullets: ["Rịọ ka e dee ya, ya na ụgwọ niile", "Ọmụmaatụ: KES 1,000 x izu 12 = KES 12,000", "Ọnụ ahịa = KES 12,000 - KES 10,000 = KES 2,000"] },
            { title: "Ụbọchị na joint liability", bullets: ["Ụbọchị ịkwụghachi ga-adaba ego ị na-enweta", "Ntaramahụhụ maka ịkwụ n'oge gafere; credit bureau", "Mbinye ego otu: i nwere ike ịkwụrụ ndị ọzọ"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Jiri ọmụmaatụ a ma ọ bụ ezi onyinye: gbazite NGN 50,000 ma kwụghachi NGN 4,800 kwa izu ruo izu 12. Gbakọọ ego niile a kwụghachiri na ọnụ ahịa ya. Wee dee ma ịkwụ kwa izu dabara ego ị na-enweta.",
          youCanNow: "ịgbakọ ego niile ị ga-akwụghachi na mbinye ego ma lelee na ụbọchị ya dabara ego ị na-enweta tupu ị bịanye aka.",
          quickCheck: [
            { objective: "O5", q: "Ị gbaziri GHS 1,000 ma na-akwụghachi GHS 120 kwa ọnwa ruo ọnwa 10. Ego ole ka ị kwụghachiri n'ozuzu?", options: ["GHS 1,000", "GHS 1,120", "GHS 1,200", "GHS 120"], answer: 2, why: "120 x 10 = 1,200." },
            { objective: "O5", q: "Na mbinye ego otu nwere joint liability, otu onye otu kwụsịrị ịkwụ ụgwọ. Gịnị nwere ike ime?", options: ["Ọ dịghị ihe", "Ndị otu ndị ọzọ ga-akwụrụ onye ahụ", "Onye mbinye ego ga-ehichapụ mbinye ego ahụ", "Naanị onye isi oche otu ga-akwụ"], answer: 1, why: "Joint liability pụtara na ndị otu na-akwụrụ ibe ha ego a kwụghachighị." }
          ]
        },
        {
          title: "Atụmatụ Ponzi, ndị mbinye ego adịgboroja na atụmatụ gị",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Mata ihe ịdọ aka na ntị nke atụmatụ Ponzi ma ọ bụ onye mbinye ego adịgboroja ma lelee onye ahụ na ndepụta onye nlekọta.",
          text: [
            "Atụmatụ Ponzi na-eji ego ndị otu ọhụrụ akwụ ndị mbụ. Ọ na-ada mgbe niile, ọtụtụ mmadụ na-atụfukwa ego nchekwa ha. Ihe ịdọ aka na ntị: nkwa ime ka ego gị bụrụ okpukpu abụọ ma ọ bụ uru dị elu e kwere nkwa n'oge dị mkpụmkpụ, mkpali ịkpọbata ndị enyi na ndị ezinụlọ, ụgwọ ọrụ maka ịkpọbata mmadụ, azụmahịa onye ọ bụla na-apụghị ịkọwa, na mgbasa ozi site n'otu WhatsApp, TikTok, Instagram ma ọ bụ Telegram na ndị a ma ama n'ịntanetị (influencer). SEC Nigeria adọọla aka na ntị maka atụmatụ ndị dị otu a ọtụtụ ugboro.",
            "Ndị mbinye ego na app mbinye ego adịgboroja: ha na-arịọ ụgwọ tupu ha enye mbinye ego ahụ, na-arịọ PIN ma ọ bụ okwuntughe gị, na-achọ ịhụ aha na nọmba niile dị n'ekwentị gị, ma ọ bụ na-eyi ndị gbaziri ego egwu ma na-eme ka ihere mee ha. Ezi ndị mbinye ego anaghị achọ PIN gị mgbe ọ bụla.",
            "Lelee tupu ị kwụọ ụgwọ ma ọ bụ kesaa ozi. Chọọ onye ahụ na ndepụta gọọmentị nke onye nlekọta: SASRA maka SACCO na-anara ego nchekwa na Central Bank of Kenya maka ụlọ akụ microfinance na ndị na-agbazinye ego n'ịntanetị na Kenya; CBN maka ụlọ akụ microfinance na ndepụta FCCPC nke ndị na-agbazinye ego n'ịntanetị a kwadoro na Nigeria; ndepụta Bank of Ghana nke ụlọ ọrụ nwere ikike; BCEAO na ministrị ego nke mba ọ bụla na mba ndị na-eji XOF. Ọ bụrụ na ọ nọghị na ndepụta ahụ, ejila ya.",
            "Wee mechaa atụmatụ gị: ebumnuche, ego niile, ụbọchị, ego kwa izu ma ọ bụ kwa ọnwa, ebe ị na-echekwa ya, na azịza mpempe akwụkwọ nlele gị gbasara otu ahụ ma ọ bụ ụlọ ọrụ ahụ."
          ],
          steps: ["Jụọ: ọ na-ekwe nkwa uru e kwere nkwa ma ọ bụ uru dị elu nke ukwuu ngwa ngwa?", "Jụọ: ọ na-akwụ m ụgwọ maka ịkpọbata ndị ọzọ?", "Jụọ: ọ chọrọ ụgwọ tupu ihe ọ bụla, ma ọ bụ PIN m?", "Chọọ ya na ndepụta gọọmentị nke onye nlekọta.", "Ọ nọghị na ndepụta ahụ, ma ọ bụ e nwere ihe ịdọ aka na ntị ọ bụla: akwụla ụgwọ.", "Dee atụmatụ nchekwa ego gị kwa ọnwa na mpempe akwụkwọ nlele."],
          words: [["Atụmatụ Ponzi", "aghụghọ na-eji ego ndị otu ọhụrụ akwụ ndị ochie ruo mgbe ọ dara."], ["Onye nlekọta (regulator)", "ụlọ ọrụ gọọmentị na-enye ndị na-enye ọrụ ego ikike ma na-eleba ha anya, dị ka central bank."], ["Nwere ikike (licensed)", "onye nlekọta kwere ya n'ụzọ gọọmentị ka o mee azụmahịa a."]],
          slides: [
            { title: "Ihe ịdọ aka na ntị nke Ponzi", bullets: ["\"Mee ka ego gị bụrụ okpukpu abụọ\"; uru dị elu e kwere nkwa", "Ụgwọ ọrụ maka ịkpọbata ndị enyi", "Azụmahịa onye ọ bụla na-apụghị ịkọwa; a na-agbasa ya na social media"] },
            { title: "Ihe ịrịba ama nke onye mbinye ego adịgboroja", bullets: ["Ụgwọ tupu mbinye ego ahụ", "Ọ na-arịọ PIN ma ọ bụ okwuntughe gị", "Ọ chọrọ nọmba niile dị n'ekwentị gị; na-eyi ndị gbaziri ego egwu"] },
            { title: "Lelee ndepụta gọọmentị", bullets: ["Kenya: SASRA, CBK", "Nigeria: CBN, ndị mbinye ego FCCPC kwadoro", "Ghana: Bank of Ghana; XOF: BCEAO"] },
            { title: "Mechaa atụmatụ gị", bullets: ["Ebumnuche, ego niile, ụbọchị, ego kwa ọnwa", "Ebe ị na-echekwa ya", "Azịza mpempe akwụkwọ nlele"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nchekwa ego gị kwa ọnwa nwere ebumnuche, ego niile, ụbọchị, ego kwa izu ma ọ bụ kwa ọnwa na ebe ị ga-echekwa ya. Tinye mpempe akwụkwọ nlele: iwu otu ahụ, otu e si edebe ego na ndekọ, ikike ya (nke i lelere na ndepụta onye nlekọta ma ọ bụrụ na ọ dị mkpa) na ego niile mbinye ego ọ bụla ga-efu.",
          youCanNow: "ịhụ atụmatụ Ponzi ma ọ bụ onye mbinye ego adịgboroja, ilele onye na-enye ọrụ ego na ndepụta gọọmentị, na ịgbaso atụmatụ nchekwa ego i dere ede.",
          quickCheck: [
            { objective: "O6", q: "Otu WhatsApp kwere nkwa ime ka ego gị bụrụ okpukpu abụọ n'ime ụbọchị 30 ma na-akwụ gị ụgwọ maka enyi ọ bụla i kpọbatara. Gịnị bụ ya?", options: ["Otu nchekwa ego", "Ụlọ akụ microfinance nwere ikike", "Otu na-atụgharị", "Ihe ịrịba ama nke atụmatụ Ponzi"], answer: 3, why: "Uru e kwere nkwa ngwa ngwa na ụgwọ ọrụ maka ịkpọbata mmadụ bụ ihe ịrịba ama Ponzi a ma ama." },
            { objective: "O6", q: "App mbinye ego na-arịọ \"processing fee\" (ụgwọ nhazi) tupu o ziga mbinye ego ahụ. Gịnị ka ị ga-eme?", options: ["Akwụla; lelee ya na ndepụta onye nlekọta", "Kwụọ ngwa ngwa tupu onyinye ahụ agwụ", "Kwụọ ọkara", "Nye ha PIN gị kama"], answer: 0, why: "Ụgwọ tupu mbinye ego bụ ihe ịrịba ama onye mbinye ego adịgboroja; buru ụzọ lelee ndepụta gọọmentị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ndekọ, mbinye ego na ịnọ ná nchekwa",
        questions: [
          { objective: "O4", q: "Gịnị kwesịrị ime n'ego ọ bụla e tinyere na nzukọ?", options: ["Onye na-edebe ego ewere ya laa ụlọ gụọ ya", "A gụọ ya n'ihu ndị otu ma dee ya na passbook na n'akwụkwọ ndekọ", "A dee ya n'izu na-abịa", "Ọ ga-aga ozugbo n'ekwentị onye isi oche"], answer: 1, why: "Ịgụ na idekọ n'ihu ndị otu na-eme ka ndekọ bụrụ eziokwu." },
          { objective: "O4", q: "Akaụntụ otu kwesịrị ịchọ:", options: ["Naanị mbịanye aka onye na-edebe ego", "Ọ dịghị mbịanye aka", "Mmadụ abụọ ma ọ bụ karịa ịbịanye aka", "PIN ọhụrụ maka onye otu ọ bụla"], answer: 2, why: "Ihe karịrị otu onye na-abịanye aka na-egbochi otu onye iwere ego ahụ." },
          { objective: "O5", q: "Kedu ụzọ kacha mma isi tụnyere mbinye ego abụọ?", options: ["Onye ọrụ mbinye ego kacha nwee obiọma", "Ọmụrụ nwa e kwuru na mgbasa ozi", "Nkwado kacha ọsọ", "Ego niile ị ga-akwụghachi, ya na ụgwọ niile, na ụbọchị dabara ego ị na-enweta"], answer: 3, why: "Ego niile a kwụghachiri na-egosi ezi ọnụ ahịa; ụbọchị na-egosi ma ị nwere ike ịkwụ." },
          { objective: "O6", q: "Ebee ka ị ga-elele ma SACCO dị na Kenya nwere ike ịnara ego nchekwa?", options: ["Ndepụta SASRA nke SACCO nwere ikike ịnara ego nchekwa", "Peeji Facebook", "Naanị akwụkwọ mgbasa ozi SACCO ahụ", "Okwu enyi"], answer: 0, why: "SASRA na-enye SACCO na-anara ego nchekwa ikike ma na-ebipụta ndepụta ahụ." },
          { objective: "O6", q: "Kedu nke bụ ihe ịdọ aka na ntị nke onye mbinye ego adịgboroja?", options: ["Ọ na-ede ọnụ ahịa niile n'akwụkwọ", "Ọ na-arịọ PIN gị ma ọ bụ ụgwọ tupu mbinye ego", "Ọ nọ na ndepụta central bank", "Ọ na-akọwa ntaramahụhụ maka ịkwụ n'oge gafere"], answer: 1, why: "Ezi ndị mbinye ego anaghị achọ PIN gị, ha anaghịkwa ana ụgwọ tupu ha agbazinye ego." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Otu Nchekwa Ego na Microfinance (Chama, VSLA, Tontine, Esusu)",
    questions: [
      { objective: "O1", q: "Esusu, susu, tontine na gam'eya na-abụkarị:", options: ["Ụlọ akụ microfinance", "Otu nchekwa ego na-atụgharị", "App mbinye ego", "Ụlọ ọrụ inshọransị"], answer: 1, why: "Ha bụ aha obodo maka otu ebe ndị otu na-ewere ego niile n'usoro." },
      { objective: "O1", q: "Gịnị ka otu nchekwa na mbinye ego na-eme nke otu na-atụgharị anaghị eme?", options: ["Ọ na-agbazinye ndị otu ego nchekwa ma kesaa ya na uru ya", "Ọ na-enye onye otu ọ bụla ego niile n'usoro", "Ọ naghị ezukọ mgbe ọ bụla", "O nweghị iwu"], answer: 0, why: "VSLA ma ọ bụ ASCA na-edebe ego mbinye ma na-ekesa ego nchekwa gbakwunyere ụgwọ ọrụ." },
      { objective: "O1", q: "Kedu nke bụ ihe egwu dị n'otu na-atụgharị?", options: ["Ọ na-akwụ ọmụrụ nwa dị elu", "Central bank nyere ya ikike", "O nwere igbe nwere mkpọchi atọ", "Ndị otu weere ego n'oge mbụ nwere ike ịkwụsị ịtụ"], answer: 3, why: "Ndị mbụ kwụsịrị ịtụ na-emerụ ndị otu ka na-eche." },
      { objective: "O2", q: "Ị chọrọ XOF 60,000 n'ime izu 12. Ego ole kwa izu?", options: ["XOF 6,000", "XOF 12,000", "XOF 4,000", "XOF 5,000"], answer: 3, why: "60,000 kere site na 12 bụ 5,000." },
      { objective: "O2", q: "\"Buru ụzọ kwụọ onwe gị\" pụtara:", options: ["Zụtara onwe gị onyinye", "Buru ụzọ kwụọ onye isi oche otu", "Gbazite ego tupu i chekwaa", "Chekwaa ego n'ụbọchị ego batara, tupu i mefuo ya n'ihe ọzọ"], answer: 3, why: "Ibu ụzọ chekwaa ego na-eme ka ọ mee tupu e mefuo ego ahụ." },
      { objective: "O2", q: "Atụmatụ gị chọrọ EGP 900 kwa ọnwa mana naanị EGP 600 ka ị nwere ike ichekwa. Gịnị ka ị nwere ike ime?", options: ["Gbazite ego n'app mbinye ego", "Kwụsị ichekwa ego", "Wezuga ụbọchị ahụ, belata ebumnuche ahụ ma ọ bụ belata mmefu", "Banye n'atụmatụ na-eme ka ego bụrụ okpukpu abụọ"], answer: 2, why: "Gbanwee ụbọchị ahụ, ebumnuche ahụ ma ọ bụ mmefu gị ruo mgbe atụmatụ ahụ dabara." },
      { objective: "O2", q: "Gịnị mere ị ga-eji debe ego mberede iche n'ego nchekwa ebumnuche gị?", options: ["Ka nsogbu na-abịa na mberede ghara ịkpochapụ ego ebumnuche gị", "N'ihi na ụlọ akụ chọrọ ya", "Iji kwụọ ntaramahụhụ otu", "Ọ na-enweta uru karịa"], answer: 0, why: "Ego mberede dị iche na-echebe ebumnuche ahụ pụọ n'ihe ijuanya." },
      { objective: "O3", q: "Gịnị bụ constitution otu?", options: ["Akwụkwọ ndetu onye isi oche", "App mbinye ego", "Iwu e dere ede nke ndị otu kwenyere na ya ma na-agbaso", "Igbe ego"], answer: 2, why: "Constitution ma ọ bụ by-laws bụ iwu otu e dere ede." },
      { objective: "O3", q: "Kedu iwu na-agwa gị ihe na-eme ma ọ bụrụ na a kwụghachighị mbinye ego onye otu?", options: ["Iwu nzukọ", "Iwu mbinye ego", "Iwu nkesa", "Ọ dịghị nke ọ bụla n'ime iwu ahụ"], answer: 1, why: "Iwu mbinye ego na-ekwu onye na-agbazite, ego ole na ihe na-eme ma ọ bụrụ na a kwụghachighị ya." },
      { objective: "O3", q: "Iwu otu ekwughị otu onye otu ga-esi pụọ. Gịnị ka ị ga-eme?", options: ["Gwa otu ahụ ka ha tinye iwu ọpụpụ tupu ị banye", "Banye n'agbanyeghị", "Pụọ n'agwaghị onye ọ bụla", "Were ego nchekwa gị n'igbe ahụ"], answer: 0, why: "Iwu na-adịghị ya bụ ajụjụ a ga-edozi tupu i tụkwasị otu ahụ obi n'ego." },
      { objective: "O4", q: "Gịnị bụ passbook?", options: ["Akwụkwọ onye otu na-egosi ego nchekwa ya na mbinye ego ya", "Paspọtụ", "Kaadị ụlọ akụ", "App mbinye ego"], answer: 0, why: "Passbook onye otu ọ bụla na-egosi ego nchekwa ya na mbinye ego ya." },
      { objective: "O4", q: "Na njedebe nzukọ ọ bụla:", options: ["Onye isi oche na-edebe ego n'ụlọ ya n'agụghị ya", "Ego a gụrụ ga-adaba akwụkwọ ndekọ", "A na-atụfu ndekọ", "Naanị onye na-edebe ego na-agụ ego niile"], answer: 1, why: "Ego na ndekọ ga-adaba, ebe a na-agụpụta ego niile n'olu dị elu." },
      { objective: "O4", q: "Gịnị mere a ga-eji gụpụta ego niile n'olu dị elu na nzukọ?", options: ["Ime ka nzukọ dị ogologo", "Iji gosi ọnụ", "Ka onye otu ọ bụla nụ ma kwenye na ọnụọgụ ahụ", "N'ihi na ọ bụ iwu n'ebe niile"], answer: 2, why: "Ịgụpụta n'olu dị elu na-enye onye otu ọ bụla, gụnyere ndị na-amaghị ịgụ akwụkwọ, ohere ilele ọnụọgụ ahụ." },
      { objective: "O5", q: "Ị gbaziri MAD 2,000 ma na-akwụghachi MAD 250 kwa ọnwa ruo ọnwa 10. Ego ole ka mbinye ego ahụ na-efu?", options: ["MAD 250", "MAD 2,500", "MAD 2,000", "MAD 500"], answer: 3, why: "Ego niile a kwụghachiri 2,500 wepụ 2,000 a gbaziri = 500." },
      { objective: "O5", q: "Ị na-enwetakarị ego mgbe owuwe ihe ubi gasịrị ma ọ bụ n'oge ahịa na-aga nke ọma. Gịnị ka ị ga-elele na mbinye ego?", options: ["Agba fọm ahụ", "Ụdị ekwentị onye ọrụ ahụ", "Ọ dịghị ihe", "Ụbọchị ịkwụghachi ya na ego ị na-enweta"], answer: 3, why: "Ụbọchị ịkwụghachi ga-adaba mgbe ego na-abata." },
      { objective: "O5", q: "Joint liability pụtara:", options: ["Ndị otu na-akwụrụ onye otu akwụghachighị ego ya", "Ụlọ akụ na-akwụ mbinye ego gị", "Ọ dịghị onye na-akwụghachi", "Ị nwere ike ịgbazite ego ugboro abụọ"], answer: 0, why: "Na joint liability, otu ahụ na-akwụ ego a kwụghachighị." },
      { objective: "O5", q: "Gịnị ka onye mbinye ego kwesịrị inye gị tupu ị bịanye aka?", options: ["Ekwentị n'efu", "Naanị ọmụrụ nwa", "Ego niile a ga-akwụghachi, e dere ede, ya na ụgwọ niile na ụbọchị", "Ndekọ mbinye ego onye agbata obi gị"], answer: 2, why: "Ego niile na ụbọchị e dere ede na-enye gị ohere ịtụnyere na ime atụmatụ." },
      { objective: "O6", q: "Kedu nke bụ ihe ịdọ aka na ntị nke Ponzi?", options: ["Iwu e dere ede", "Uru dị elu e kwere nkwa ngwa ngwa na ụgwọ ọrụ maka ịkpọbata mmadụ", "Ndị otu na-agụpụta ego niile n'olu dị elu", "Igbe ego nwere mkpọchi atọ"], answer: 1, why: "Uru e kwere nkwa ngwa ngwa na ụgwọ ọrụ maka ịkpọbata mmadụ bụ ihe ịrịba ama Ponzi a ma ama." },
      { objective: "O6", q: "Na Nigeria, ebee ka ị ga-elele ma a kwadoro app mbinye ego?", options: ["Nlebanya (reviews) app ahụ n'onwe ya", "Otu WhatsApp", "Vidiyo TikTok", "Ndepụta FCCPC nke ndị na-agbazinye ego n'ịntanetị e debanyere aha"], answer: 3, why: "FCCPC na-ebipụta ọnọdụ ndebanye aha nke ndị na-agbazinye ego n'ịntanetị." },
      { objective: "O6", q: "Onye na-enye ọrụ ego anọghị na ndepụta onye nlekọta. Gịnị ka ị ga-eme?", options: ["Jiri ya naanị maka obere ego", "Kwụọ ma ọ bụrụ na enyi gị kwadoro ya", "Ejila ya", "Nye ha PIN gị ka ha lelee"], answer: 2, why: "Ọ dịghị onye na-eleba ndị na-anọghị na ndepụta anya; ego gị anọghị ná nchekwa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebumnuche na mgbakọ doro anya", objective: "O2", notYet: "Enweghị ego niile ma ọ bụ ụbọchị, ma ọ bụ ego kwa ọnwa erughị ebumnuche ahụ.", meets: "Ebumnuche, ego niile, ụbọchị na ego kwa izu ma ọ bụ kwa ọnwa, ya na mgbakọ ziri ezi.", exceeds: "E lelekwara ya na ego a na-enweta n'ọnwa ọjọọ ma debe ego mberede iche." },
      { name: "Ụdị nchekwa ego ziri ezi", objective: "O1", notYet: "A họrọghị ebe a ga-echekwa ego, ma ọ bụ enweghị ihe kpatara ya.", meets: "Ọ na-akpọ aha ebe a ga-echekwa ego ahụ ma nye otu ihe mere o ji dabara ebumnuche ahụ na otu ihe egwu.", exceeds: "Ọ tụnyere nhọrọ abụọ (dịka ọmụmaatụ otu na-atụgharị na SACCO) tupu ọ họrọ." },
      { name: "E lelere iwu otu", objective: "O3", notYet: "A hụghị iwu ahụ ma ọ bụ e lelere ihe erughị anọ n'ime asaa ahụ.", meets: "E lelere opekata mpe isii n'ime ihe asaa ahụ, e depụtakwara ndị na-adịghị ya dị ka ajụjụ.", exceeds: "E lelere ha asaa niile ma kpọlite iwu ndị na-adịghị ya n'ihu otu ahụ." },
      { name: "Ndekọ na nchekwa ego", objective: "O4", notYet: "Ọ naghị ekwu otu e si edebe ego na ndekọ.", meets: "Ọ na-ekwu otu e si edebe ego (igbe nwere mkpọchi atọ ma ọ bụ akaụntụ chọrọ mmadụ abụọ ma ọ bụ karịa ịbịanye aka) na na a na-agụpụta ego niile n'olu dị elu.", exceeds: "O tinyere ọmụmaatụ tebụl ndekọ dabara adaba." },
      { name: "Ọnụ ahịa mbinye ego na nchekwa", objective: "O5", notYet: "E mere atụmatụ mbinye ego n'enweghị ego niile a ga-akwụghachi.", meets: "Mbinye ego ọ bụla nwere ego niile a ga-akwụghachi, ọnụ ahịa ya na ụbọchị e lelere na ego a na-enweta; ma ọ bụ atụmatụ ahụ enweghị mbinye ego.", exceeds: "Ọ na-akọkwa maka ntaramahụhụ maka ịkwụ n'oge gafere, credit bureau na joint liability." },
      { name: "Nlele ikike na aghụghọ", objective: "O6", notYet: "Onye na-enye ọrụ ego na-enweghị ikike ma ọ bụ atụmatụ nwere ihe ịdọ aka na ntị dị n'atụmatụ ahụ.", meets: "E lelere ụlọ ọrụ ọ bụla na-anara ego nchekwa ma ọ bụ na-agbazinye ego dị ka azụmahịa na ndepụta gọọmentị nke onye nlekọta, ọ dịghịkwa ihe ịdọ aka na ntị ọ bụla.", exceeds: "Ọ na-akpọ aha ndepụta e lelere na ụbọchị e lelere ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru, mgbe ụbọchị 30 gachara, na ha na-echekwa ego kwa izu ma ọ bụ kwa ọnwa dịka atụmatụ ha si dị",
      "Otu mmekọ nabatara iwu e dere ede, passbook na ịgụpụta ego niile n'olu dị elu",
      "Ndị na-amụ ihe kwuru na ha jụrụ atụmatụ Ponzi ma ọ bụ onye mbinye ego na-enweghị ikike n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ dị n'ekwentị",
      "Constitution ma ọ bụ iwu otu, ma ọ bụrụ na onye na-amụ ihe nọ n'otu",
      "Ndepụta gọọmentị nke onye nlekọta maka mba gị (SASRA, CBK, CBN, FCCPC, Bank of Ghana, BCEAO), nke e meghere otu ugboro n'ekwentị ma ọ bụ bipụta ya",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Ọ ka mma ime ya n'ime chama, VSLA, susu, tontine ma ọ bụ otu ụmụ nwanyị dị adị: otu nkuzi na nzukọ ọ bụla, ya na ule mbido na nzukọ mbụ.",
      "Jiri iwu otu ahụ n'onwe ya dị ka ihe e ji eme omume na Nkuzi 3, na nzukọ omume nwere ego egwuregwu na Nkuzi 4.",
      "Akwadola ụlọ akụ, SACCO, app ma ọ bụ atụmatụ ọ bụla; kụziere ndị na-amụ ihe ilele ndepụta onye nlekọta n'onwe ha.",
      "Lelee na ndepụta ndị nlekọta bụ nke ọhụrụ tupu nzukọ ahụ; aha na adreesị weebụ nwere ike ịgbanwe.",
      "Arịọla ndị na-amụ ihe mgbe ọ bụla ka ha kesaa PIN, okwuntughe ma ọ bụ ezi ego dị n'akaụntụ ha n'ihu otu."
    ]
  }
};
