"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-protected-farming.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Ọnụ ego niile bụ ihe atụ e mepụtara maka mgbakọ, ọ bụghị ezi ọnụ ahịa. Enweghị usoro fatịlaịza ma ọ bụ aha ọgwụ ụmụ ahụhụ.

const FAO_GAP_GH = { name: "FAO: Ezi omume ọrụ ugbo maka akwụkwọ nri n'ụlọ ihe ọkụkụ (greenhouse): ụkpụrụ maka mpaghara ihu igwe Mediterranean (Akwụkwọ 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey na ndị ọzọ (2017): Ịkọ akwụkwọ nri n'okpuru mkpuchi n'Afrịka ndịda Sahara: oke ya na olile anya maka obere ndị ọrụ ugbo (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe: Ahụhụ nke ọnwa: Tuta absoluta, ahụhụ na-eri akwụkwọ tomato", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Ụlọ ọrụ na-ahụ maka nri na ọgwụ (NAFDAC, Naịjirịa)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (Ghana)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): mkpụrụ na ụmụ osisi a kwadoro", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming-ig",
  lang: "ig",
  translationOf: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Ụlọ Ihe Ọkụkụ (Greenhouse) na Ịkọ Ihe n'Okpuru Mkpuchi maka Ihe Ọkụkụ Nwere Ọnụ Ahịa Dị Elu",
  skills: "Ịmata mgbe ịkọ ihe n'okpuru mkpuchi na-akwụ ụgwọ, Iji greenhouse, shade net na tunnel atụnyere ma lelee nkwa ndị na-ere ha, Ịzụ ụmụ osisi na ịhazi fertigation site na drip, Ijikwa okpomọkụ, mmiri dị n'ikuku, ụmụ ahụhụ na ịdị ọcha, Ide atụmatụ azụmahịa nwere oge nkwụghachi",
  outcome: "ide atụmatụ azụmahịa maka ịkọ otu ihe ọkụkụ nwere ọnụ ahịa dị elu (tomato, tatashe ma ọ bụ kukumba) n'okpuru greenhouse, shade net ma ọ bụ tunnel n'ugbo gị: ma ọ dabara mmiri gị, ahịa gị na nka gị, ụlọ ahụ na ọnụ ahịa atọ e dere ede, atụmatụ ihe ọkụkụ na fertigation, usoro ụmụ ahụhụ na ịdị ọcha, na ego ọ ga-efu, ego ị ga-enweta, uru (gross margin) na oge nkwụghachi.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị ntorobịa na-azụ ahịa ọrụ ugbo, otu ndị ntorobịa na otu ụmụnwaanyị, na ndị ndụmọdụ ọrụ ugbo (extension workers) na-eche maka greenhouse, shade net ma ọ bụ tunnel, ma ọ bụ ndị nwere otu nke na-anaghị akwụ ụgwọ. Ihe atụ ndị anyị ga-eji bụ tomato, tatashe (capsicum, ose dị ụtọ) na kukumba na Kenya, Naịjirịa, Ghana na Senegal.",
    "Isi 1 na-enyere gị aka ikpebi na ịmalite: mgbe ịkọ ihe n'okpuru mkpuchi na-akwụ ụgwọ na mgbe ọ na-adịghị, ụdị ụlọ ndị bụ isi na otu esi atụnyere ọnụ ahịa e dere ede, otu esi amata ndị na-ere ihe na-ekwe nkwa karịrị akarị, na otu esi ahọrọ ihe ọkụkụ ma zụọ ụmụ osisi dị ọcha. Isi 2 bụ maka ịrụ ya dị ka azụmahịa: ihe ndabere nke fertigation site na drip, ijikwa okpomọkụ, mmiri dị n'ikuku, ọrịa na ụmụ ahụhụ, idebe ụlọ ahụ ọcha, na ide atụmatụ azụmahịa nwere oge nkwụghachi.",
    "Greenhouse bụ nnukwu ego, ọtụtụ ka a hapụrụ ka ha tọgbọrọ chakoo n'ihi na mgbakọ, mmiri ma ọ bụ ahịa arụghị ọrụ. Ọnụ ego ọ bụla n'ihe ọmụmụ a bụ ihe atụ e mepụtara iji mụta mgbakọ; jiri ọnụ ahịa gị e dere ede na ọnụ ahịa n'ahịa gị, ma gwa onye ọkachamara ihe ọkụkụ (agronomist), onye ndụmọdụ ọrụ ugbo gị na onye ndụmọdụ ị tụkwasịrị obi okwu tupu i bịanye aka ma ọ bụ kwụọ ụgwọ. Obere nnwale na-esote nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee atụmatụ azụmahịa maka ịkọ otu ihe ọkụkụ n'okpuru mkpuchi n'ugbo gị: azịza gị maka ọnọdụ ise nke \"ọ ga-akwụ ụgwọ?\" (mmiri, ahịa, nka, ego ntinye, ihu igwe), ụlọ ị ga-eji na opekata mpe ọnụ ahịa atọ e dere ede e jiri tụnyere na nyocha e mere maka ndị na-ere ya, ihe ọkụkụ na ụdị ya, atụmatụ nursery na fertigation unu na agronomist kwekọrịtara, usoro kwa izu maka ụmụ ahụhụ, ihu igwe na ịdị ọcha, na ego ọ ga-efu, ihe ọkụkụ ị na-atụ anya ya, ego ị ga-enweta, uru n'oge ịkọ ihe ọ bụla, oge nkwụghachi, na ihe na-eme oge nkwụghachi ma ọnụ ahịa daa otu ụzọ n'ụzọ anọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị ntorobịa na-azụ ahịa ọrụ ugbo, otu ndị ntorobịa na otu ụmụnwaanyị na ndị ndụmọdụ ọrụ ugbo n'Afrịka ndị na-eche maka, ma ọ bụ ndị nweworị, greenhouse, shade net ma ọ bụ tunnel maka tomato, tatashe, kukumba ma ọ bụ akwụkwọ nri ndị ọzọ nwere ọnụ ahịa dị elu.",
    startingPoint: "Ha akọọla akwụkwọ nri n'ubi oghe. E nyela ụfọdụ ngwugwu greenhouse nwere nnukwu nkwa ihe ọkụkụ; ụfọdụ nwere otu nwere nsogbu ụmụ ahụhụ, ọrịa ma ọ bụ ahịa. Ọ bụ mmadụ ole na ole tụnyere ọnụ ahịa, hazie fertigation, ma ọ bụ gbakọọ oge nkwụghachi.",
    gap: "Ịkọ ihe n'okpuru mkpuchi nwere ike inye ihe ọkụkụ ka ukwuu, dị ọcha ma na-abịa mgbe niile, mana ọ na-efu nnukwu ego na mbido, chọrọ nka na mmiri a pụrụ ịdabere na ya, na-ejide okpomọkụ na ọrịa, ma na-akwụ ụgwọ naanị ma e nwere ahịa kwụsiri ike. Ndị na-amụ ihe kwesịrị ikpebi ma ọ dabara ha, họrọ ma lelee ụlọ, rụọ ọrụ ihe ọkụkụ ahụ nke ọma, ma jiri mgbakọ gosi na ọ nwere ike ịkwụghachi ego tupu mkpuchi ahụ akaa nká.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-eji Bekee dị ka asụsụ nke abụọ, ihe ọmụmụ a dịkwa n'asụsụ ndị ọzọ",
      "Mgbakọ: mgbakọ dị mfe site na kalkuleta ekwentị; e gosiri mgbakọ ọ bụla otu nzọụkwụ n'otu oge",
      "Ego: ọnụ ego niile bụ ihe atụ e mepụtara; ndị na-amụ ihe na-eji ọnụ ahịa nke ha na ego obodo ha (KES, NGN, GHS ma ọ bụ XOF)",
      "Nchekwa: enweghị usoro fatịlaịza, enweghị aha ọgwụ ụmụ ahụhụ ma ọ bụ ọnụ ọgụgụ ya; ndị na-amụ ihe na-arụ ọrụ na agronomist ma na-agbaso akara (label) na onye na-achịkwa ya na mba ha",
      "Ego: enweghị ndụmọdụ itinye ego; ndị na-amụ ihe na-agụ nkwekọrịta niile ma jụọ onye ndụmọdụ ha tụkwasịrị obi tupu ha akwụọ ụgwọ"
    ],
    prerequisites: "Ọ dịghị. \"Ịgba Mmiri n'Ubi na Ijikwa Mmiri\" (drip na igwe mmiri) na \"Njikwa Ụmụ Ahụhụ Jikọtara Ọnụ na Njikwa Ụmụ Ahụhụ n'Ụzọ Okike\" bara uru n'akụkụ ihe ọmụmụ a."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka ugbo gị", action: "ilele ọnọdụ ise maka ịkọ ihe n'okpuru mkpuchi (mmiri, ahịa, nka, ego ntinye na ihu igwe) ma kpebie ma ị ga-aga n'ihu", standard: "na-enye ee ma ọ bụ mba maka nke ọ bụla na ihe kpatara ya" },
    { id: "O2", condition: "Mgbe ị na-ahọrọ ụlọ", action: "iji ọnụ ahịa greenhouse, shade net ma ọ bụ tunnel atụnyere ma lelee nkwa onye ọ bụla na-ere ya", standard: "site n'iji opekata mpe ọnụ ahịa atọ na ịrịọ maka ndị a ga-ajụ ase na nkwa nrụzi (warranty) e dere ede" },
    { id: "O3", condition: "Maka otu ihe ọkụkụ ị họọrọ", action: "ịhazi ụdị ihe ọkụkụ, nursery, ịkụgharị na fertigation site na drip ya na agronomist", standard: "dị ka atụmatụ nwere ụbọchị maka otu oge ịkọ ihe" },
    { id: "O4", condition: "Mgbe a kụchara ihe ọkụkụ ahụ", action: "ime usoro kwa ụbọchị na kwa izu maka okpomọkụ, mmiri dị n'ikuku, ụmụ ahụhụ na ịdị ọcha", standard: "na-ekpuchi oghere ikuku, ilegharị ihe ọkụkụ, ọnyà na iwu ịbanye kwa izu" },
    { id: "O5", condition: "Mgbe e nyere gị ọnụ ahịa e dere ede na ọnụ ahịa n'ahịa", action: "ịgbakọ ego ọ ga-efu, ego ị ga-enweta, uru na oge nkwụghachi maka ihe ọkụkụ ahụ", standard: "ma nwalee ihe na-eme ma ọnụ ahịa daa otu ụzọ n'ụzọ anọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ikpebi na ịmalite",
      lessons: [
        {
          title: "Mgbe ịkọ ihe n'okpuru mkpuchi na-akwụ ụgwọ, na mgbe ọ na-adịghị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lelee ọnọdụ ise maka ịkọ ihe n'okpuru mkpuchi n'ugbo gị ma kpebie ma ị ga-aga n'ihu.",
          text: [
            "Ịkọ ihe n'okpuru mkpuchi pụtara ịkọ ihe ọkụkụ n'okpuru ihe kpuchiri ya: greenhouse nwere rọba (plastic) na ụgbụ ụmụ ahụhụ, ụlọ shade net, ma ọ bụ tunnel dị ala ma ọ bụ nke mmadụ nwere ike ịbanye. Ọ bụrụ na e mere ya nke ọma, ọ na-egbochi oke mmiri ozuzo, mkpụrụ mmiri ice (hail) na ọtụtụ ụmụ ahụhụ, na-ebelata ụfọdụ ọrịa, ma na-enye ihe ọkụkụ ka ukwuu, dị ọcha ma na-abịa mgbe niile nke ihe ọkụkụ nwere ọnụ ahịa dị elu dị ka tomato, tatashe na kukumba.",
            "Ọ dabaghị onye ọ bụla. Nyocha e mere na 2017 banyere ịkọ ihe n'okpuru mkpuchi n'Afrịka ndịda Sahara chọpụtara na ọ dabaghị n'ihu igwe ọ bụla, na ọ ka chọrọ ụzọ ndị ọzọ e si ejikwa ụmụ ahụhụ, na enweghị nka, enyemaka teknụzụ na ego na-egbochi ọtụtụ obere ndị ọrụ ugbo. Ọtụtụ greenhouse na Kenya, Naịjirịa na Ghana tọgbọrọ chakoo mgbe e kọchara otu ihe ọkụkụ ma ọ bụ abụọ.",
            "Lelee ọnọdụ ise tupu i mefuo ego. Mmiri: mmiri dị ọcha a pụrụ ịdabere na ya n'afọ niile, n'ihi na mmiri ozuzo anaghị eru ihe ọkụkụ ahụ. Ahịa: ndị ga-azụ ihe ọkụkụ gị kwa izu n'ọnụ ahịa kwesịrị ekwesị, dị ka họtel, supamakịt, ụlọ akwụkwọ ma ọ bụ ndị ahịa, ọ bụghị naanị \"ahịa\". Nka: gị ma ọ bụ onye ọrụ a zụrụ na fertigation, ịkpụcha osisi na ilegharị ihe ọkụkụ, na agronomist ị nwere ike ịkpọ. Ego ntinye: ego maka ụlọ ahụ, ihe ọkụkụ mbụ na ego ọrụ nke ọnwa ole na ole, n'etinyeghị nri ezinụlọ gị n'ihe egwu. Ihu igwe: n'ala dị ala nke na-ekpo ọkụ nke ukwuu, greenhouse emechiri emechi nwere ike ikpo ọkụ karịa, ya mere shade net ma ọ bụ ụdị nwere ezigbo ikuku nwere ike ịka mma."
          ],
          steps: ["Mmiri: ọ dị mmiri dị ọcha a pụrụ ịdabere na ya n'afọ niile?", "Ahịa: onye ga-azụ kwa izu, n'ọnụ ahịa ole?", "Nka: onye ga-eme fertigation, ịkpụcha na ilegharị, oleekwa agronomist ị nwere ike ịkpọ?", "Ego ntinye: ị nwere ike ịkwụ ụgwọ ụlọ, ihe ọkụkụ mbụ na ego ọrụ n'etinyeghị ego nri n'ihe egwu?", "Ihu igwe: ụlọ emechiri emechi ọ ga-ekpo ọkụ karịa ebe ị nọ?", "Kpebie: gaa n'ihu, malite n'obere, ma ọ bụ ọ bụghị ugbu a."],
          words: [["Ịkọ ihe n'okpuru mkpuchi (protected farming)", "ịkọ ihe ọkụkụ n'okpuru mkpuchi dị ka greenhouse, shade net ma ọ bụ tunnel."], ["Greenhouse (ụlọ ihe ọkụkụ)", "ihe owuwu e ji rọba na ụgbụ ụmụ ahụhụ kpuchie, nwere oghere maka ikuku."], ["Shade net", "ụgbụ na-ebelata ụfọdụ anwụ na okpomọkụ ma na-egbochi ụfọdụ ụmụ ahụhụ na nnụnụ."], ["Tunnel", "ihe owuwu gbagọrọ agbagọ e ji rọba ma ọ bụ ụgbụ kpuchie; tunnel dị ala na-ekpuchi otu akwa ubi, nke a na-abanye na-ekpuchi otu mpaghara ubi."]],
          slides: [
            { title: "Ihe mkpuchi nwere ike ime", bullets: ["Na-egbochi oke mmiri ozuzo, hail na ọtụtụ ụmụ ahụhụ", "Ihe ọkụkụ ka ukwuu, dị ọcha, na-abịa mgbe niile", "Kacha mma maka ihe ọkụkụ nwere ọnụ ahịa dị elu"] },
            { title: "Ọ dabaghị onye ọ bụla", bullets: ["Ọ dabaghị n'ihu igwe ọ bụla (nyocha, 2017)", "Ọ ka chọrọ ụzọ ndị ọzọ ijikwa ụmụ ahụhụ", "Nka, enyemaka na ego bụ nnukwu ihe mgbochi"] },
            { title: "Ọnọdụ ise", bullets: ["Mmiri n'afọ niile", "Onye na-azụ kwa izu", "Nka na agronomist", "Ego ntinye na ihu igwe kwesịrị ekwesị"] },
            { title: "Mkpebi gị", bullets: ["Gaa n'ihu", "Malite n'obere (tunnel ma ọ bụ shade net)", "Ọ bụghị ugbu a: buru ụzọ dozie ọnọdụ na-adịghị"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Dee ọnọdụ ise ahụ ma zaa nke ọ bụla maka ugbo gị site n'ee ma ọ bụ mba na ihe kpatara ya. Wee dee mkpebi gị: gaa n'ihu, malite n'obere, ma ọ bụ ọ bụghị ugbu a, na ihe ị ga-achọ ịgbanwe.",
          youCanNow: "ilele ọnọdụ ise maka ịkọ ihe n'okpuru mkpuchi ma kpebie ma ọ dabara ugbo gị ugbu a.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe ịrịba ama kacha sie ike na ị dị njikere maka greenhouse?", options: ["Onye na-ere ya kwuru na ọ ga-akwụghachi n'ime ọnwa atọ", "Onye agbata obi gị zụrụ otu", "I nwere mmiri n'afọ niile na onye na-azụ tomato kwa izu", "I hụla foto n'ịntanetị"], answer: 2, why: "Mmiri a pụrụ ịdabere na ya na onye na-azụ mgbe niile bụ abụọ n'ime ọnọdụ ise na-eme ka ọ kwụọ ụgwọ." },
            { objective: "O1", q: "Ị na-arụ ọrụ ugbo n'ala dị ala na-ekpo ọkụ nke ukwuu. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Ma greenhouse emechiri emechi ọ ga-ekpo ọkụ karịa, ma shade net ọ ga-aka mma", "Naanị agba rọba ahụ", "Ọ dịghị ihe; okpomọkụ dị mma maka ihe ọkụkụ niile", "Ma ị nwere ike ịkọ ihe na-enweghị mmiri"], answer: 0, why: "Ụlọ emechiri emechi na-ejide okpomọkụ; n'ebe na-ekpo ọkụ, ikuku na-abanye nke ọma ma ọ bụ shade net nwere ike ịka mma." }
          ]
        },
        {
          title: "Greenhouse, shade net na tunnel: nhọrọ, ego na ndị na-ere ha",
          objectives: ["O2"],
          minutes: 6,
          goal: "Jiri opekata mpe ọnụ ahịa atọ e dere ede maka ụlọ tụnyere ma lelee nkwa onye ọ bụla na-ere ya.",
          text: [
            "Nhọrọ ndị bụ isi: greenhouse (osisi ma ọ bụ igwe (steel) nwere rọba a gwọrọ megide UV n'elu ya na ụgbụ ụmụ ahụhụ n'akụkụ ya) na-enye nchekwa kacha ukwuu ma na-efu ego kacha ukwuu. Ụlọ shade net na-efu obere ego, na-ajụ oyi karịa ma dabara ebe na-ekpo ọkụ na ihe ọkụkụ dị ka tatashe na akwụkwọ nri, mana ọ naghị egbochi mmiri ozuzo. Tunnel a na-abanye ma ọ bụ nke dị ala bụ ụzọ kacha dị ọnụ ala isi malite ma mụta. Igwe na-adịte aka karịa osisi mana ọ na-efu karịa; osisi a gwọrọ nwere ike ịrụ ọrụ ma ọ bụrụ na a na-egbochi ikwikwi (termites). Mkpuchi rọba na-aka nká mgbe afọ ole na ole gachara, ya mere jụọ ogologo oge e kwere nkwa nchekwa UV ya.",
            "Ego dị iche iche nke ukwuu dabere n'ịdị ukwuu, ihe e ji rụọ ya, mba na ihe gụnyere n'ime ya, ya mere nweta opekata mpe ọnụ ahịa atọ e dere ede maka otu ịdị ukwuu ahụ ma tụnyere ha otu ahịrị n'otu oge: ihe owuwu, mkpuchi na ụgbụ, ọnụ ụzọ, usoro drip, tankị mmiri, nursery, iwunye ya, ọzụzụ na nleta mgbe e rechara ya. Dịka ọmụmaatụ (ọnụ ego e mepụtara, naanị iji gosi usoro ahụ), ọnụ ahịa A nke KES 380,000 nwere ike ịgụnye drip na ọzụzụ mgbe ọnụ ahịa B nke KES 300,000 anaghị agụnye ha, ya mere B adịghị n'ezie ọnụ ala karịa.",
            "Kpachara anya maka ndị na-ere ihe na-ekwe nkwa karịrị akarị. Ihe ịdọ aka na ntị: nkwa ihe ọkụkụ ma ọ bụ ego a na-ekwe n'aka, \"ọ na-akwụghachi n'otu oge ịkọ ihe\", nkwa \"ịzụghachi\" (buy-back) na-enweghị nkwekọrịta e dere ede, mmanye ịkwụ nnukwu ego mbụ (deposit) taa, enweghị ndị ọrụ ugbo ị nwere ike ileta, enweghị warranty e dere ede, na ngwugwu a na-ere na-enweghị ọzụzụ ma ọ bụ atụmatụ mmiri. Rịọ ileta ndị ọrụ ugbo abụọ jirila ụlọ onye na-ere ya opekata mpe oge ịkọ ihe abụọ. Nweta warranty, ụbọchị nnyefe na ihe gụnyere n'ime ya n'akwụkwọ, gụọ nkwekọrịta ahụ niile, ma jụọ onye ndụmọdụ ị tụkwasịrị obi tupu i kwụọ ụgwọ."
          ],
          steps: ["Họrọ ịdị ukwuu ị nwere ike ilekọta ma nye mmiri.", "Rịọ opekata mpe ndị na-ere ihe atọ ka ha nye ọnụ ahịa e dere ede maka otu ịdị ukwuu ahụ.", "Tụnyere otu ahịrị n'otu oge: ihe owuwu, mkpuchi, ụgbụ, drip, tankị, nursery, iwunye, ọzụzụ, nleta mgbe e rechara.", "Rịọ onye ọ bụla na-ere ihe maka ndị a ga-ajụ ase ma leta ndị ọrụ ugbo abụọ na-eji ụlọ ha.", "Nweta warranty, ụbọchị nnyefe na ihe dị n'ime ya n'akwụkwọ; gụọ ya niile ma jụọ onye ndụmọdụ."],
          words: [["Rọba a gwọrọ megide UV", "rọba greenhouse e mere ka o guzogide ìhè ultraviolet nke anwụ ka ọ dịte aka."], ["Ụgbụ ụmụ ahụhụ (insect net)", "ụgbụ dị mma n'akụkụ na n'oghere ikuku nke na-egbochi ọtụtụ ụmụ ahụhụ mana na-ahapụ ikuku ka ọ gafee."], ["Ọnụ ahịa e dere ede (quote)", "ọnụ ahịa e dere ede site n'aka onye na-ere ihe na-egosi kpọmkwem ihe gụnyere n'ime ya."], ["Warranty (nkwa nrụzi)", "nkwa e dere ede site n'aka onye na-ere ihe na ọ ga-arụzi ma ọ bụ gbanwee akụkụ mebiri n'ime oge a kara aka."]],
          slides: [
            { title: "Nhọrọ ndị ahụ", bullets: ["Greenhouse: nchekwa kacha ukwuu, ego kacha ukwuu", "Shade net: na-ajụ oyi karịa, dị ọnụ ala, anaghị egbochi mmiri ozuzo", "Tunnel: ụzọ kacha dị ọnụ ala isi malite ma mụta"] },
            { title: "Tụnyere ọnụ ahịa atọ", bullets: ["Otu ịdị ukwuu, e dere ede, otu ahịrị n'otu oge", "Ihe owuwu, mkpuchi, ụgbụ, drip, tankị, nursery", "Iwunye, ọzụzụ, nleta mgbe e rechara"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Nkwa ihe ọkụkụ ma ọ bụ \"ọ na-akwụghachi n'otu oge\"", "Nkwa ịzụghachi na-enweghị nkwekọrịta", "Mmanye ịkwụ ego mbụ taa"] },
            { title: "Chebe onwe gị", bullets: ["Leta ndị ọrụ ugbo abụọ jirila ya oge 2+", "Warranty na ihe dị n'ime ya n'akwụkwọ", "Gụọ nkwekọrịta niile; jụọ onye ndụmọdụ"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Rịọ opekata mpe ndị na-ere ihe ma ọ bụ ndị na-ewu ụlọ atọ nọ gị nso ka ha nye ọnụ ahịa e dere ede maka otu ịdị ukwuu nke ụlọ. Tinye ha na tebụl, otu ahịrị n'otu oge, ma kaa akara ihe onye ọ bụla hapụrụ. Dee ajụjụ ị ga-ajụ onye ọ bụla na-ere ihe, gụnyere ndị ọrụ ugbo abụọ ị nwere ike ileta.",
          youCanNow: "iji ọnụ ahịa ụlọ atụnyere otu ahịrị n'otu oge ma lelee nkwa onye na-ere ihe tupu i kwụọ ụgwọ.",
          quickCheck: [
            { objective: "O2", q: "Onye na-ere ihe kwere nkwa n'aka tọn tomato 10 na nkwụghachi n'otu oge ịkọ ihe, ma ọ bụrụ na i kwụọ ego mbụ taa. Gịnị ka ị ga-eme?", options: ["Kwụọ ozugbo tupu onyinye ahụ agwụ", "Kwụọ ọkara ma kpebie emesia", "Bịanye aka n'agụghị ya", "Were ya dị ka ihe ịdọ aka na ntị, rịọ maka ndị a ga-ajụ ase na usoro e dere ede, ma tụnyere ọnụ ahịa"], answer: 3, why: "Nkwa ihe ọkụkụ a na-ekwe n'aka na mmanye ịkwụ taa bụ ihe ịrịba ama a ma ama nke ikwe nkwa karịrị akarị." },
            { objective: "O2", q: "Ọnụ ahịa B dị ọnụ ala karịa ọnụ ahịa A mana o nweghị usoro drip ma ọ bụ ọzụzụ. Gịnị bụ eziokwu?", options: ["B doro anya na ọ ka mma", "B nwere ike ịfụ karịa ma i tinye ihe ọ hapụrụ", "A naghị achọ drip na ọzụzụ mgbe ọ bụla", "Enweghị ike iji ọnụ ahịa atụnyere"], answer: 1, why: "Tụnyere otu ahịrị n'otu oge; a ga-azụ ihe ndị na-adịghị iche iche." }
          ]
        },
        {
          title: "Ịhọrọ ihe ọkụkụ na ịzụ ụmụ osisi dị ọcha",
          objectives: ["O3"],
          minutes: 5,
          goal: "Họrọ ihe ọkụkụ na ụdị ya maka ụlọ gị ma hazie nursery dị ọcha na ịkụgharị.",
          text: [
            "Ihe ọkụkụ a na-akọkarị n'okpuru mkpuchi bụ tomato, tatashe (capsicum, ose dị ụtọ) na kukumba. Tomato nwere ahịa kacha ukwuu mana o nwekwara ihe egwu ụmụ ahụhụ na ọrịa kacha ukwuu, gụnyere Tuta absoluta. Tatashe na-ere nke ọma na họtel na supamakịt, karịsịa nke nwere agba, ma ọ na-adị nwayọọ ịmalite. Kukumba na-eto ngwa ngwa ma na-eweta ego ngwa ngwa. Buru ụzọ họrọ dabere n'onye na-azụ gị: kedu ihe ọkụkụ, agba na ịdị ukwuu ọ ga-azụ kwa izu.",
            "Jiri ụdị e mepụtara maka greenhouse. Ọtụtụ tomato greenhouse bụ indeterminate (ha na-eto ma na-amị mkpụrụ ọtụtụ ọnwa, a na-ejikwa eriri dọta ha elu), ọtụtụ kukumba greenhouse na-amị mkpụrụ na-enweghị aṅụ. Mkpụrụ nke ụdị ndị a nwere ike ịdị oke ọnụ, ya mere zụta mkpụrụ a kwadoro, emechiri emechi, site n'aka onye na-ere ya e debanyere aha (KEPHIS na-akwado mkpụrụ na Kenya), echekwala mkpụrụ site na hybrid.",
            "Zụọ ụmụ osisi na nursery dị ọcha: tree ụmụ osisi nwere ihe ịkụ ihe dị ọcha (ọ bụghị ala si n'ubi), n'okpuru ụgbụ ụmụ ahụhụ, na-agba mmiri nke ọma. Ọtụtụ ndị ọrụ ugbo na-azụta ụmụ osisi n'aka onye nursery nwere ikike (propagator), nke na-echekwa oge mana ọ ga-abụrịrị isi iyi dị ọcha, a tụkwasịrị obi. Kụgharịa ụmụ osisi siri ike, nwere ahụike, na-enweghị ụmụ ahụhụ n'uhuruchi oyi, n'ohere agronomist gị nyere, ma gbaa ha mmiri ozugbo. Hazie ụbọchị: ịgha mkpụrụ, ịkụgharị, owuwe ihe ubi mbụ na nke ikpeazụ, ka onye na-azụ gị nweta ihe ọkụkụ n'oge."
          ],
          steps: ["Jụọ onye na-azụ gị kedu ihe ọkụkụ, agba na ịdị ukwuu ọ ga-azụ kwa izu.", "Họrọ ụdị greenhouse; zụta mkpụrụ a kwadoro, emechiri emechi.", "Zụọ ụmụ osisi na tree nwere ihe ịkụ ihe dị ọcha n'okpuru ụgbụ ụmụ ahụhụ, ma ọ bụ zụta n'aka propagator nwere ikike.", "Kụgharịa ụmụ osisi siri ike, na-enweghị ụmụ ahụhụ n'uhuruchi n'ohere agronomist nyere.", "Dee ụbọchị: ịgha mkpụrụ, ịkụgharị, owuwe ihe ubi mbụ na nke ikpeazụ."],
          words: [["Tatashe (capsicum)", "ose dị ụtọ; akwụkwọ ndụ, uhie, odo ma ọ bụ oroma."], ["Indeterminate", "ụdị tomato na-eto ma na-amị mkpụrụ ọtụtụ ọnwa; a na-eji eriri dọta ya elu."], ["Ihe ịkụ ihe (growing medium)", "ngwakọta dị ọcha (dịka ọmụmaatụ cocopeat) a na-eji kama ala iji zụọ ụmụ osisi."], ["Propagator", "azụmahịa nursery na-azụ ma na-ere ụmụ osisi."]],
          slides: [
            { title: "Họrọ dabere n'onye na-azụ gị", bullets: ["Tomato: ahịa kacha ukwuu, ihe egwu ụmụ ahụhụ kacha ukwuu", "Tatashe: họtel na supamakịt; na-adị nwayọọ ịmalite", "Kukumba: ngwa ngwa, ego ngwa ngwa"] },
            { title: "Ụdị greenhouse", bullets: ["Tomato indeterminate n'eriri", "Kukumba na-amị mkpụrụ na-enweghị aṅụ", "Mkpụrụ a kwadoro, emechiri emechi; echekwala mkpụrụ hybrid"] },
            { title: "Ụmụ osisi dị ọcha", bullets: ["Tree, ihe ịkụ ihe dị ọcha, n'okpuru ụgbụ ụmụ ahụhụ", "Ma ọ bụ propagator nwere ikike, a tụkwasịrị obi", "Kụgharịa na-enweghị ụmụ ahụhụ n'uhuruchi oyi"] },
            { title: "Hazie ụbọchị", bullets: ["Ịgha, ịkụgharị, owuwe mbụ na nke ikpeazụ", "Mee ka ọ dabara mkpa onye na-azụ gị kwa izu"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Jụọ otu onye na-azụ ihe kedu ihe ọkụkụ, agba na ịdị ukwuu ọ ga-azụ kwa izu. Họrọ ihe ọkụkụ gị na ụdị greenhouse, ma dee ụbọchị maka ịgha mkpụrụ (ma ọ bụ ịzụta ụmụ osisi), ịkụgharị, owuwe ihe ubi mbụ na owuwe ihe ubi ikpeazụ.",
          youCanNow: "ịhọrọ ihe ọkụkụ n'okpuru mkpuchi dabere na mkpa onye na-azụ gị ma hazie ụmụ osisi dị ọcha na ịkụgharị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị kwesịrị ikpebi ihe ọkụkụ ị ga-ebu ụzọ kụọ na greenhouse gị?", options: ["Ihe onye na-azụ gị ga-azụ kwa izu", "Ihe ọkụkụ nwere ngwugwu mkpụrụ kacha mma anya", "Ihe ọ bụla onye agbata obi na-akọ", "Mkpụrụ kacha dị ọnụ ala"], answer: 0, why: "Onye na-azụ mgbe niile bụ ihe na-eme ka ihe ọkụkụ n'okpuru mkpuchi kwụọ ụgwọ." },
            { objective: "O3", q: "Ebee ka a ga-azụ ụmụ osisi greenhouse?", options: ["N'ala ubi oghe n'akụkụ tomato ochie", "N'okpuru osisi na-enweghị ụgbụ", "Na tree nwere ihe ịkụ ihe dị ọcha n'okpuru ụgbụ ụmụ ahụhụ, ma ọ bụ site n'aka propagator nwere ikike", "N'ebe ọ bụla; ụmụ ahụhụ adịghị mkpa na greenhouse"], answer: 2, why: "Ụmụ osisi dị ọcha na-egbochi ụmụ ahụhụ na ọrịa ịbanye n'ụlọ ahụ ya na ihe ọkụkụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ikpebi na ịmalite",
        questions: [
          { objective: "O1", q: "Kedu nke Ọ BỤGHỊ otu n'ime ọnọdụ ise dị n'ihe ọmụmụ a?", options: ["Mmiri n'afọ niile", "Onye na-azụ kwa izu", "Greenhouse nwere agba kacha na-enwu", "Nka na agronomist"], answer: 2, why: "Ọnọdụ ise ahụ bụ mmiri, ahịa, nka, ego ntinye na ihu igwe." },
          { objective: "O1", q: "Gịnị mere mmiri ga-eji bụrụ ihe a pụrụ ịdabere na ya n'afọ niile maka greenhouse?", options: ["Mmiri ozuzo anaghị eru ihe ọkụkụ dị n'okpuru mkpuchi", "A ga-asacha rọba kwa ụbọchị", "Mmiri na-eme ka ihe owuwu jụọ oyi", "Ọ dịghị mkpa"], answer: 0, why: "N'okpuru mkpuchi, mmiri niile ga-esi n'ebe ị na-enweta mmiri." },
          { objective: "O2", q: "Kedu ụlọ na-ajụ oyi karịa ma dabara ebe na-ekpo ọkụ, mana anaghị egbochi mmiri ozuzo?", options: ["Greenhouse rọba emechiri emechi", "Ụlọ shade net", "Ụlọ nkwakọba brik", "Tunnel rọba dị ala"], answer: 1, why: "Shade net na-ebelata anwụ na okpomọkụ mana na-ahapụ mmiri ozuzo ka ọ gafee." },
          { objective: "O2", q: "Kedu ụzọ kacha mma isi lelee nkwa onye na-ere ihe?", options: ["Kwere akwụkwọ mgbasa ozi ya", "Buru ụzọ kwụọ, wee jụọ", "Jụọ naanị na soshal midia", "Leta ndị ọrụ ugbo abụọ jirila ụlọ ya oge abụọ ma ọ bụ karịa"], answer: 3, why: "Ndị ọrụ ugbo jirila ya na-egosi ihe ọ na-eme n'ezie." },
          { objective: "O3", q: "Tomato indeterminate:", options: ["Na-eto ma na-amị mkpụrụ ọtụtụ ọnwa, a na-eji eriri dọta ya elu", "Na-akwụsị ito mgbe izu ole na ole gachara", "Anaghị achọ ihe nkwado mgbe ọ bụla", "Bụ ụdị kukumba"], answer: 0, why: "Tomato indeterminate na-anọgide na-eto, ya mere a na-eji eriri dọta ha elu na greenhouse." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ya dị ka azụmahịa",
      lessons: [
        {
          title: "Ihe ndabere nke fertigation site na drip",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kọwaa otu usoro fertigation site na drip si arụ ọrụ ma hazie nlele ya kwa ụbọchị ya na agronomist.",
          text: [
            "Fertigation pụtara inye fatịlaịza site n'usoro drip, a gbazere n'ime mmiri a na-agba n'ubi, ka osisi ọ bụla nweta obere nri na mmiri na mgbọrọgwụ ya kwa ụbọchị. Ọ na-echekwa mmiri na fatịlaịza ma na-eme ka akwụkwọ osisi kpọọ nkụ, nke na-enyere aka megide ọrịa. A na-akụzi usoro drip, igwe mmiri na nhọrọ anyanwụ (solar) na \"Ịgba Mmiri n'Ubi na Ijikwa Mmiri\"; nkuzi a na-ekwu maka ihe dị iche n'okpuru mkpuchi.",
            "Usoro dị mfe nwere tankị mmiri, ihe nzacha (filter), ụzọ isi tinye fatịlaịza (tankị dosing ma ọ bụ injector), ọkpọkọ isi na eriri drip nwere emitter n'akụkụ osisi ọ bụla. Jiri naanị fatịlaịza na-agbaze na mmiri e mere maka fertigation. Usoro (recipe) ahụ na-agbanwe dabere n'ihe ọkụkụ na ọkwa ya (ụmụ osisi, ịma ifuru, ịmị mkpụrụ) na mmiri na ala gị, ya mere nweta ya n'aka agronomist, site na nnwale ala na mmiri ma ọ bụ site n'aka ndị ọrụ teknụzụ nke onye na-ere fatịlaịza. Echela echiche mgbe ọ bụla, agwakọtakwala ngwaahịa n'otu tankị ma ọ bụrụ na agronomist ekwughị na a ga-agwakọta ha.",
            "Lelee usoro ahụ kwa ụbọchị: ihe nzacha dị ọcha, emitter ọ bụla na-atapụta mmiri, ọ dịghị eriri na-ehi mmiri, ala gburugburu osisi dị mmiri mmiri, ọ bụghị nke mmiri juru. Ọtụtụ ndị na-akọ ihe na-eji EC meter dị ọnụ ala elele na ike fatịlaịza dị na mmiri bụ nke agronomist setịrị, na pH meter ma ọ bụ mpempe pH. Jiri mmiri dị ọcha sachaa eriri ahụ dị ka a dụrụ gị ọdụ, ka nnu na fatịlaịza ghara imechi emitter. Dee mmiri na nri nke ụbọchị ọ bụla n'akwụkwọ ndekọ."
          ],
          steps: ["Nweta atụmatụ nri dabere n'ọkwa ihe ọkụkụ site n'aka agronomist ma ọ bụ nnwale ala na mmiri.", "Jiri naanị fatịlaịza na-agbaze na mmiri maka fertigation; gwakọta naanị dị ka a dụrụ gị ọdụ.", "Kwa ụbọchị: ihe nzacha dị ọcha, lelee na emitter na-atapụta mmiri na eriri anaghị ehi mmiri.", "Lelee ike ya site na EC meter na pH dị ka agronomist setịrị.", "Sachaa eriri dị ka a dụrụ gị ọdụ; dee mmiri na nri kwa ụbọchị."],
          words: [["Fertigation", "inye fatịlaịza a gbazere n'ime mmiri a na-agba n'ubi site n'usoro drip."], ["Emitter", "obere oghere dị n'eriri drip na-ahapụ mmiri n'akụkụ osisi ọ bụla."], ["EC meter", "obere ngwa na-atụ ole fatịlaịza (nnu) gbazere dị na mmiri."], ["Ịsacha eriri (flushing)", "ịgba mmiri dị ọcha n'eriri iji wepụ nnu na ihe mechiri ya."]],
          slides: [
            { title: "Ihe fertigation bụ", bullets: ["Fatịlaịza a gbazere na mmiri drip", "Obere nri na mmiri na mgbọrọgwụ kwa ụbọchị", "Na-echekwa mmiri ma na-eme ka akwụkwọ kpọọ nkụ"] },
            { title: "Akụkụ ya", bullets: ["Tankị, ihe nzacha, tankị dosing ma ọ bụ injector", "Ọkpọkọ isi na eriri drip nwere emitter", "Naanị fatịlaịza na-agbaze na mmiri"] },
            { title: "Usoro nri (recipe)", bullets: ["Na-agbanwe dabere n'ọkwa ihe ọkụkụ, mmiri na ala", "Site n'aka agronomist ma ọ bụ nnwale mmiri na ala", "Echela echiche; gwakọta naanị dị ka a dụrụ gị ọdụ"] },
            { title: "Nlele kwa ụbọchị", bullets: ["Ihe nzacha dị ọcha; emitter ọ bụla na-atapụta", "EC na pH dị ka agronomist setịrị", "Sachaa dị ka a dụrụ gị ọdụ; dee ya"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "See usoro fertigation drip gị site na tankị ruo n'osisi ma dee aha akụkụ ọ bụla. Wee dee ndepụta nlele kwa ụbọchị (ihe nzacha, emitter, mmiri na-ehi, EC, pH, mmiri dị n'ala, ndekọ) na ajụjụ ị ga-ajụ agronomist gị banyere atụmatụ nri maka ọkwa ihe ọkụkụ ọ bụla.",
          youCanNow: "ịkọwa usoro fertigation drip, ịhazi nri ya ya na agronomist na ime nlele ya kwa ụbọchị.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka usoro nri fertigation gị kwesịrị isi?", options: ["Echiche dabere n'agba akwụkwọ osisi", "Agronomist, nnwale ala na mmiri ma ọ bụ ndị ọrụ teknụzụ nke onye na-ere ya", "Otu usoro ahụ maka ihe ọkụkụ na ọkwa ọ bụla", "Ihe ọ bụla kacha dị ọnụ ala n'izu ahụ"], answer: 1, why: "Usoro ahụ dabere n'ihe ọkụkụ, ọkwa ya, mmiri na ala, ya mere ọ ga-esirịrị n'aka ọkachamara." },
            { objective: "O3", q: "Ọtụtụ osisi na-akpọnwụ mgbe ndị ọzọ dị mma. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Ma emitter ha mechiri emechi na ma ihe nzacha dị ọcha", "Tinyekwuo fatịlaịza na tankị", "Wepụ ụgbụ ụmụ ahụhụ", "Jiri hoos gbaa mmiri site n'elu"], answer: 0, why: "Emitter mechiri emechi bụ ihe na-akpatakarị na ụfọdụ osisi anaghị enweta mmiri ma ọ bụ nri." }
          ]
        },
        {
          title: "Ijikwa okpomọkụ, mmiri dị n'ikuku, ụmụ ahụhụ na ịdị ọcha",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mee usoro kwa ụbọchị na kwa izu maka okpomọkụ, mmiri dị n'ikuku, ụmụ ahụhụ na ịdị ọcha n'ụlọ gị.",
          text: [
            "Okpomọkụ na mmiri dị n'ikuku (humidity) bụ nsogbu kacha ukwuu kwa ụbọchị n'okpuru mkpuchi n'ebe okpomọkụ. Greenhouse emechiri emechi nwere ike ikpo ọkụ karịa n'èzí nke ukwuu, ikuku na-ekpo ọkụ, na-adịghị agagharị, nwere mmiri na-eweta ọrịa fungus dị ka late blight na grey mould. Meghee oghere ikuku dị n'akụkụ na n'elu n'ụtụtụ ma mechie ha n'uhuruchi dị ka ọ dị mkpa, mee ka akwụkwọ osisi kpọọ nkụ site n'ịgba mmiri naanị site na drip, kpụchapụ akwụkwọ ochie dị n'ala na alaka n'akụkụ ka ikuku na-agagharị, akụkwala osisi ọtụtụ ebe. Shade net n'elu n'ọnwa kacha ekpo ọkụ nwere ike inye aka. Debe temometa dị ọnụ ala n'ime ma dee ihe ọ gụrụ.",
            "Ụgbụ ụmụ ahụhụ na-egbochi ọtụtụ ụmụ ahụhụ, mana ndị banyere na-amụba ngwa ngwa n'ihi na enweghị mmiri ozuzo ma ọ bụ ndị iro okike ga-akwụsị ha: whitefly, thrips, aphid, spider mite na, na tomato, Tuta absoluta. N'ala, root-knot nematode bụ nsogbu a na-ahụkarị na greenhouse e jirila ogologo oge. Legharịa ahịrị osisi ọ bụla kwa izu, kọgide kaadị nrapado odo maka whitefly na aphid na nke na-acha anụnụ anụnụ maka thrips, ma jiri ọnyà pheromone maka Tuta absoluta. Jiri nzọụkwụ IPM; ọ bụrụ na ọ dị mkpa iji ọgwụ ụmụ ahụhụ, jiri naanị nke e debanyere aha maka ihe ọkụkụ gị (PCPB na Kenya, NAFDAC na Naịjirịa, EPA na Ghana), gbasoo akara ya na oge ichere tupu owuwe ihe ubi, ma yiri uwe nchekwa, n'ihi na ị ga-atụtụ mkpụrụ n'ebe emechiri emechi ọtụtụ mgbe.",
            "Ịdị ọcha na-egbochi ụmụ ahụhụ na ọrịa. Jiri ọnụ ụzọ abụọ ka otu mechiri emechi mgbe niile, na ebe a na-asa ụkwụ (footbath) n'ọnụ ụzọ. Belata ndị ọbịa, ma mee ka ndị ọrụ saa aka ma yiri uwe dị ọcha. Wepụ osisi na-arịa ọrịa na akwụkwọ na mkpụrụ dara ada n'akpa emechiri emechi, debe ebe gburugburu ụlọ ahụ n'enweghị ahịhịa, rụzie oghere dị n'ụgbụ ozugbo, ma sachaa ngwa ọrụ. N'etiti ihe ọkụkụ, wepụ mkpofu osisi niile ma sachaa ụlọ ahụ tupu ị kụọ ọzọ."
          ],
          steps: ["Kwa ụtụtụ: meghee oghere ikuku; gụọ temometa; lelee akwụkwọ mmiri dị na ya.", "Kwa uhuruchi: mechie oghere ikuku dị ka ọ dị mkpa; dee okpomọkụ.", "Kwa izu: legharịa ahịrị ọ bụla; gụọ ụmụ ahụhụ dị na kaadị nrapado na ọnyà pheromone.", "Kwa izu: kpụchapụ akwụkwọ dị n'ala na alaka n'akụkụ; wepụ osisi na-arịa ọrịa na mkpofu n'akpa emechiri emechi.", "Mgbe niile: ọnụ ụzọ abụọ mechiri emechi, footbath, ndị ọbịa ole na ole, ngwa ọrụ dị ọcha, rụzie oghere ụgbụ."],
          words: [["Ikuku na-abanye (ventilation)", "ime ka ikuku gafee n'ụlọ ahụ site n'oghere iji belata okpomọkụ na mmiri dị n'ikuku."], ["Mmiri dị n'ikuku (humidity)", "ole uzuoku mmiri dị n'ikuku; ọ bụrụ na ọ dị elu, ọ na-enyere ọrịa fungus aka."], ["Root-knot nematode", "obere ikpuru dị n'ala na-eme ka mgbọrọgwụ zaa ma na-eme ka osisi daa mbà."], ["Footbath", "obere efere nwere ọgwụ nsacha n'ọnụ ụzọ iji sachaa akpụkpọ ụkwụ."]],
          slides: [
            { title: "Okpomọkụ na mmiri dị n'ikuku", bullets: ["Meghee oghere ikuku n'ụtụtụ, mechie dị ka ọ dị mkpa", "Gbaa mmiri naanị site na drip; mee ka akwụkwọ kpọọ nkụ", "Kpụchapụ akwụkwọ dị n'ala na alaka; akụkwala ọtụtụ ebe"] },
            { title: "Ụmụ ahụhụ n'okpuru mkpuchi", bullets: ["Whitefly, thrips, aphid, spider mite", "Tuta absoluta na tomato", "Root-knot nematode n'ala ochie"] },
            { title: "Lelee ma tọọ ọnyà", bullets: ["Legharịa ahịrị ọ bụla kwa izu", "Kaadị odo: whitefly, aphid; anụnụ anụnụ: thrips", "Ọnyà pheromone maka Tuta absoluta"] },
            { title: "Ịdị ọcha", bullets: ["Ọnụ ụzọ abụọ na footbath", "Ndị ọbịa ole na ole; aka, uwe, ngwa ọrụ dị ọcha", "Wepụ mkpofu n'akpa emechiri; rụzie ụgbụ ozugbo"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Dee usoro otu peeji maka ụlọ gị: ihe ị na-eme kwa ụtụtụ na kwa uhuruchi, ihe ị na-eme kwa izu (ilegharị, ọnyà, ịkpụcha, mkpofu) na iwu ịbanye gị (ọnụ ụzọ, footbath, ndị ọbịa). Kọgide ya n'ọnụ ụzọ.",
          youCanNow: "ime usoro kwa ụbọchị na kwa izu maka okpomọkụ, mmiri dị n'ikuku, ụmụ ahụhụ na ịdị ọcha n'ụlọ ihe ọkụkụ e kpuchiri ekpuchi.",
          quickCheck: [
            { objective: "O4", q: "Ọ na-ekpo ọkụ, mmiri juputara n'ikuku n'ime, ị hụkwara grey mould na-amalite. Gịnị na-enyere aka kacha?", options: ["Jiri hoos gbaa akwụkwọ mmiri", "Mechie oghere ikuku niile ụbọchị niile", "Kụkwuo osisi ndị ọzọ nso nso", "Meghee oghere ikuku, mee ka akwụkwọ kpọọ nkụ ma kpụchapụ akwụkwọ dị n'ala maka ikuku"], answer: 3, why: "Ikuku na-agagharị na akwụkwọ kpọrọ nkụ na-eme ka ọrịa fungus ghara ịgbasa ngwa ngwa." },
            { objective: "O4", q: "Gịnị mere a ga-eji jiri ọnụ ụzọ abụọ n'ọnụ ụzọ greenhouse?", options: ["Ka ọ dị ka nke ọgbara ọhụrụ", "Ka otu ọnụ ụzọ mechie mgbe niile ma ụmụ ahụhụ ole na ole banye", "Iji debe ndị ọrụ n'ime", "Ọ na-ahapụ okpomọkụ karịa ka ọ banye"], answer: 1, why: "Mgbe otu ọnụ ụzọ mechiri mgbe niile, ụmụ ahụhụ enweghị ike ife banye ozugbo." }
          ]
        },
        {
          title: "Atụmatụ azụmahịa: uru na oge nkwụghachi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ ego ọ ga-efu, ego ị ga-enweta, uru na oge nkwụghachi maka otu ihe ọkụkụ n'okpuru mkpuchi.",
          text: [
            "Atụmatụ azụmahịa na-egosi, site na nọmba, ma ụlọ ahụ nwere ike ịkwụghachi onwe ya tupu ọ kaa nká. Ị chọrọ ụdị ego abụọ. Ego ntinye (investment) bụ ihe ị na-akwụ otu ugboro: ụlọ ahụ, usoro drip, tankị na iwunye ya. Ego ọrụ (running costs) na-abịa n'oge ịkọ ihe ọ bụla: mkpụrụ ma ọ bụ ụmụ osisi, fatịlaịza, nchekwa ihe ọkụkụ, ndị ọrụ, mmiri na ọkụ, njem, ngwugwu na ụgwọ ahịa.",
            "Uru (gross margin) n'oge ịkọ ihe ọ bụla = ego ị ga-enweta (kg a na-atụ anya ire x ọnụ ahịa otu kg) - ego ọrụ. Oge nkwụghachi = ego ntinye / uru kwa afọ. Ihe atụ e mepụtara na KES, naanị iji mụta usoro ahụ: ego ntinye KES 400,000; otu oge ịkọ tomato n'afọ; ire a na-atụ anya ya kg 4,000 na KES 40 = KES 160,000; ego ọrụ KES 90,000; uru KES 70,000 kwa afọ. Oge nkwụghachi = 400,000 / 70,000 = ihe dị ka afọ 5.7. Ọ bụrụ na onye na-ere ya kwuru na mkpuchi ahụ na-adịru ihe dị ka afọ 4, atụmatụ a anaghị akwụghachi tupu i gbanwee ya. Nke ahụ bụ ihe ịdọ aka na ntị, ọ bụghị ihe kpatara ị ga-ebiri ego karịa.",
            "Ugbu a nwalee ya. Ọ bụrụ na ọnụ ahịa daa otu ụzọ n'ụzọ anọ (KES 30 kama 40), ego ị ga-enweta ga-abụ KES 120,000, uru KES 30,000 na oge nkwụghachi karịrị afọ 13. Ọnụ ahịa tomato na-agbanwe nke ukwuu dabere n'oge, ya mere nwalee ọnụ ahịa dị njọ, ihe ọkụkụ dị obere na ihe ọkụkụ furu efu. Wee chọọ ụzọ isi mee ka ọ ka mma: ụlọ dị obere ma ọ bụ dị ọnụ ala, nkwekọrịta ya na onye na-azụ, oge ịkọ ihe abụọ n'afọ, ihe ọkụkụ nwere ọnụ ahịa dị elu dị ka tatashe nwere agba, ma ọ bụ ịkekọrịta ego ahụ n'otu. Otu mgbakọ ahụ na-arụ ọrụ na NGN, GHS ma ọ bụ XOF: onye na-akọ ihe nọ nso Dakar na Senegal na-eme otu mgbakọ ahụ na CFA franc. Jiri ọnụ ahịa nke gị, debe ezi ndekọ ozugbo ị malitere, ma jụọ onye ndụmọdụ ị tụkwasịrị obi tupu i biri ego ma ọ bụ bịanye aka."
          ],
          steps: ["Gbakọta ego ntinye site n'ọnụ ahịa ị họọrọ.", "Depụta ego ọrụ maka otu oge ịkọ ihe.", "Ego ị ga-enweta = kg a na-atụ anya ire x ọnụ ahịa otu kg (site n'aka onye na-azụ gị).", "Uru = ego ị ga-enweta - ego ọrụ; kwa afọ = uru x oge ịkọ ihe n'afọ.", "Oge nkwụghachi = ego ntinye / uru kwa afọ; tụnyere ya na ndụ mkpuchi ahụ.", "Nwalee ọnụ ahịa ịda otu ụzọ n'ụzọ anọ, ihe ọkụkụ dị obere na ihe ọkụkụ furu efu."],
          words: [["Ego ntinye (investment)", "ego a na-akwụ otu ugboro iji malite, dị ka ụlọ ahụ na usoro drip."], ["Ego ọrụ (running costs)", "ego a na-emefu n'oge ịkọ ihe ọ bụla, dị ka ụmụ osisi, fatịlaịza, ndị ọrụ na njem."], ["Uru (gross margin)", "ego ị nwetara wepụ ego ọrụ maka otu oge ịkọ ihe ma ọ bụ otu afọ."], ["Oge nkwụghachi (payback period)", "ogologo oge uru na-ewe iji kwụghachi ego ntinye."]],
          slides: [
            { title: "Ụdị ego abụọ", bullets: ["Ego ntinye: ụlọ, drip, tankị, iwunye", "Ego ọrụ: ụmụ osisi, nri, ndị ọrụ, mmiri, njem"] },
            { title: "Usoro mgbakọ", bullets: ["Uru = ego ị ga-enweta - ego ọrụ", "Oge nkwụghachi = ego ntinye / uru kwa afọ", "Oge nkwụghachi ga-adị mkpụmkpụ karịa ndụ mkpuchi"] },
            { title: "Ihe atụ e mepụtara (KES)", bullets: ["Ego ntinye 400,000; uru 70,000 kwa afọ", "Oge nkwụghachi ihe dị ka afọ 5.7", "Ọnụ ahịa daa otu ụzọ n'ụzọ anọ: karịrị afọ 13"] },
            { title: "Mee ka ọ sie ike", bullets: ["Ụlọ dị obere ma ọ bụ ịkekọrịta n'otu", "Nkwekọrịta onye na-azụ; oge abụọ n'afọ", "Ihe ọkụkụ ọnụ ahịa dị elu; ezi ndekọ; jụọ onye ndụmọdụ"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ azụmahịa gị maka ịkọ otu ihe ọkụkụ n'okpuru mkpuchi: ọnọdụ ise gị, ụlọ ahụ na ọnụ ahịa atọ e jiri tụnyere na nyocha e mere maka ndị na-ere ya, ihe ọkụkụ na ụdị ya, atụmatụ nursery na fertigation gị, usoro gị kwa izu, na ego ntinye, ego ọrụ, ego ị ga-enweta, uru, oge nkwụghachi, na oge nkwụghachi ma ọnụ ahịa daa otu ụzọ n'ụzọ anọ.",
          youCanNow: "ịgbakọ uru na oge nkwụghachi maka ihe ọkụkụ n'okpuru mkpuchi ma nwalee ya megide ọnụ ahịa ịda.",
          quickCheck: [
            { objective: "O5", q: "Ego ntinye bụ 300,000, uru bụkwa 100,000 kwa afọ. Gịnị bụ oge nkwụghachi?", options: ["Afọ 1", "Afọ 30", "Afọ 3", "Afọ 100"], answer: 2, why: "300,000 / 100,000 = afọ 3." },
            { objective: "O5", q: "Oge nkwụghachi gị bụ afọ 6 mana mkpuchi ahụ na-adịru ihe dị ka afọ 4. Gịnị ka nke a na-agwa gị?", options: ["Atụmatụ ahụ anaghị akwụghachi n'oge; gbanwee atụmatụ ahụ ma ọ bụ etinyela ego ugbu a", "Ọ dị mma; biri ego karịa", "Oge nkwụghachi adịghị mkpa", "Zụta greenhouse nke abụọ"], answer: 0, why: "Ọ bụrụ na mkpuchi akaa nká tupu nkwụghachi, ị ga-efunahụ ego ma ọ bụrụ na atụmatụ agbanweghị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ya dị ka azụmahịa",
        questions: [
          { objective: "O3", q: "Gịnị bụ fertigation?", options: ["Ịgba ọgwụ ụmụ ahụhụ site na hoos", "Ịkpọ mkpofu osisi ọkụ", "Iji ụgbụ kpuchie greenhouse", "Inye fatịlaịza a gbazere na mmiri drip"], answer: 3, why: "Fertigation na-enye osisi nri site n'eriri drip." },
          { objective: "O3", q: "EC meter na-agwa gị:", options: ["Okpomọkụ ikuku", "Ole fatịlaịza gbazere dị na mmiri", "Ọnụ ahịa tomato", "Ole ụmụ ahụhụ dị na kaadị"], answer: 1, why: "EC na-atụ nnu gbazere, nke na-egosi ike fatịlaịza." },
          { objective: "O4", q: "Kedu ahụhụ bụ ihe egwu pụrụ iche maka tomato greenhouse?", options: ["Tuta absoluta", "Igurube", "Oke n'ụlọ nkwakọba ọka", "Akọrọ ehi"], answer: 0, why: "Tuta absoluta na-awakpo akwụkwọ, osisi na mkpụrụ tomato ma na-amụba ngwa ngwa n'okpuru mkpuchi." },
          { objective: "O4", q: "Kaadị nrapado na-acha anụnụ anụnụ na greenhouse na-ejidekarị:", options: ["Whitefly", "Spider mite", "Thrips", "Nematode"], answer: 2, why: "Thrips na-adọta gaa na anụnụ anụnụ; whitefly na aphid na-aga na odo." },
          { objective: "O5", q: "Uru (gross margin) bụ:", options: ["Ego ị nwetara wepụ ego ọrụ", "Ọnụ ahịa ụlọ ahụ", "Ọnụ ọgụgụ osisi", "Ego ị nwetara gbakwunye ego ntinye"], answer: 0, why: "Uru na-egosi ihe fọdụrụ n'ire ahịa mgbe e wepụrụ ego ọrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ụlọ Ihe Ọkụkụ (Greenhouse) na Ịkọ Ihe n'Okpuru Mkpuchi maka Ihe Ọkụkụ Nwere Ọnụ Ahịa Dị Elu",
    questions: [
      { objective: "O1", q: "Ịkọ ihe n'okpuru mkpuchi pụtara:", options: ["Ịrụ ọrụ ugbo naanị n'abalị", "Ịkọ ihe ọkụkụ n'okpuru mkpuchi dị ka greenhouse, shade net ma ọ bụ tunnel", "Iji nkịta nche", "Ịrụ ọrụ ugbo na-enweghị mmiri"], answer: 1, why: "Mkpuchi ahụ na-echebe ihe ọkụkụ pụọ na mmiri ozuzo, hail na ọtụtụ ụmụ ahụhụ." },
      { objective: "O1", q: "Kedu ọnọdụ onye na-azụ na-akwado greenhouse kacha?", options: ["\"Aga m ere ya n'ahịa n'ụzọ ọ bụla\"", "Enweghị onye na-azụ ugbu a", "Onye agbata obi nwere ike ịzụ ụfọdụ", "Họtel kwetara ịzụ ọnụ ọgụgụ a kara aka kwa izu"], answer: 3, why: "Onye na-azụ kwa izu mgbe niile bụ otu n'ime ọnọdụ ise ahụ." },
      { objective: "O1", q: "Nyocha 2017 banyere ịkọ ihe n'okpuru mkpuchi n'Afrịka ndịda Sahara chọpụtara na:", options: ["Ọ dabaghị n'ihu igwe ọ bụla ma ọ ka chọrọ ụzọ ndị ọzọ ijikwa ụmụ ahụhụ", "Ọ na-ewepụ ụmụ ahụhụ niile", "Ọ chọghị nka ọ bụla", "Ọ na-akwụ ụgwọ mgbe niile n'otu oge"], answer: 0, why: "Nyocha ahụ chọpụtara oke dabere n'ihu igwe, na nka, enyemaka na ego bụ ihe mgbochi." },
      { objective: "O1", q: "Kedu nke bụ ọnọdụ ego ntinye?", options: ["Inwe traktọ", "Inwe nnukwu ezinụlọ", "Ego maka ụlọ, ihe ọkụkụ mbụ na ego ọrụ n'etinyeghị ego nri n'ihe egwu", "Agba greenhouse na-enwu"], answer: 2, why: "Ị chọrọ ego maka mmalite na ego ọrụ n'etinyeghị ezinụlọ gị n'ihe egwu." },
      { objective: "O2", q: "Gịnị mere a ga-eji tụnyere ọnụ ahịa otu ahịrị n'otu oge?", options: ["Iji hụ ihe nke ọ bụla gụnyere na ihe ọ hapụrụ", "Ịhọrọ ọnụ ahịa kacha ogologo", "N'ihi na ndị na-ere ihe na-amasị ya", "Ọ baghị uru"], answer: 0, why: "Ọnụ ahịa dị ọnụ ala nwere ike ịhapụ drip, ọzụzụ ma ọ bụ iwunye." },
      { objective: "O2", q: "Kedu nke bụ ihe ịdọ aka na ntị site n'aka onye na-ere greenhouse?", options: ["Warranty e dere ede", "Ndị ọrụ ugbo a ga-ajụ ase ị nwere ike ileta", "Ndepụta doro anya nke ihe gụnyere", "Nkwa ihe ọkụkụ a na-ekwe n'aka na mmanye ịkwụ taa"], answer: 3, why: "Nkwa a na-ekwe n'aka na mmanye ịkwụ ngwa ngwa bụ ihe ịrịba ama nke ikwe nkwa karịrị akarị." },
      { objective: "O2", q: "Kedu nhọrọ bụ ụzọ kacha dị ọnụ ala isi malite ma mụta?", options: ["Nnukwu greenhouse igwe", "Tunnel a na-abanye ma ọ bụ nke dị ala", "Greenhouse iko", "Ụlọ nkwakọba oyi"], answer: 1, why: "Tunnel na-efu ego kacha nta ma na-enye gị ohere ịmụta tupu nnukwu ego ntinye." },
      { objective: "O2", q: "Gịnị ka i kwesịrị inweta n'akwụkwọ tupu i kwụọ ụgwọ?", options: ["Naanị nọmba ekwentị onye na-ere ya", "Ọ dịghị ihe; ntụkwasị obi zuru ezu", "Warranty, ụbọchị nnyefe na ihe niile gụnyere", "Foto onye na-ere ya"], answer: 2, why: "Usoro e dere ede na-echebe gị ma ọ bụrụ na ihe adịghị mma." },
      { objective: "O3", q: "Ọtụtụ ụdị kukumba greenhouse:", options: ["Na-amị mkpụrụ na-enweghị aṅụ", "Chọrọ aṅụ n'ime", "Na-eto naanị n'oge oyi", "A na-akụ ha site n'alaka e gburu egbu"], answer: 0, why: "E mepụtara ọtụtụ kukumba greenhouse ka ha mịa mkpụrụ na-enweghị pollination." },
      { objective: "O3", q: "Olee oge kacha mma ịkụgharị ụmụ osisi?", options: ["N'ehihie n'oke anwụ", "Mgbe oke mmiri ozuzo na-ezo n'èzí", "Tupu ụmụ osisi enwee mgbọrọgwụ", "N'uhuruchi oyi, wee gbaa ha mmiri"], answer: 3, why: "Uhuruchi oyi na-ebelata ujọ ịkụgharị (transplant shock)." },
      { objective: "O3", q: "Kedu fatịlaịza a na-eji maka fertigation?", options: ["Fatịlaịza ọ bụla dị ka mkpụrụ", "Fatịlaịza na-agbaze na mmiri e mere maka fertigation", "Nsị anụmanụ ọhụrụ", "Lime"], answer: 1, why: "Naanị fatịlaịza na-agbaze kpamkpam na-agafe n'eriri drip n'emechighị ha." },
      { objective: "O4", q: "Ikuku na-ekpo ọkụ, na-adịghị agagharị, nwere mmiri n'okpuru mkpuchi na-akwalitekarị:", options: ["Ọrịa fungus dị ka late blight na grey mould", "Pollination ngwa ngwa", "Ụmụ ahụhụ ole na ole", "Ego dị ala"], answer: 0, why: "Mmiri dị n'ikuku na akwụkwọ mmiri na-enyere ọrịa fungus aka ịgbasa." },
      { objective: "O4", q: "Gịnị mere ụmụ ahụhụ banyere na greenhouse ji amụba ngwa ngwa?", options: ["Rọba ahụ na-enye ha nri", "Ha na-ebu ibu mgbe niile", "Greenhouse na-adọta mmiri ozuzo", "Enweghị mmiri ozuzo ma ọ bụ ọtụtụ ndị iro okike n'ime ga-akwụsị ha"], answer: 3, why: "N'okpuru mkpuchi, ihe okike na-egbochi ụmụ ahụhụ dị ole na ole." },
      { objective: "O4", q: "Kedu nke bụ ezigbo iwu ịdị ọcha?", options: ["Hapụ ndị ọbịa si n'ugbo ndị ọzọ ka ha banye n'efu", "Hapụ mkpụrụ dara ada n'ala", "Jiri footbath ma debe otu n'ime ọnụ ụzọ abụọ ahụ ka ọ mechie mgbe niile", "Hapụ oghere n'ụgbụ maka ikuku"], answer: 2, why: "Footbath na ọnụ ụzọ abụọ na-egbochi ụmụ ahụhụ na ọrịa." },
      { objective: "O4", q: "Ọ bụrụ na ọ dị mkpa iji ọgwụ ụmụ ahụhụ na greenhouse na Kenya, ọ ga-abụrịrị:", options: ["Nke e debanyere aha na PCPB ma jiri ya dị ka akara ya kwuru, ya na uwe nchekwa", "Ngwaahịa ọ bụla onye agbata obi nwere", "A gwakọtara ya ka o sie ike karịa n'ihi na ọ dị n'ime ụlọ", "A gbara ya obere oge tupu ịtụtụ mkpụrụ"], answer: 0, why: "Naanị ngwaahịa e debanyere aha, nke e ji dị ka akara ya kwuru, bụ nke iwu kwadoro ma enweghị nsogbu." },
      { objective: "O5", q: "Kedu nke bụ ego ntinye?", options: ["Ụmụ osisi", "Ndị ọrụ maka ịtụtụ mkpụrụ", "Ụlọ greenhouse na usoro drip", "Njem gaa n'ahịa"], answer: 2, why: "A na-akwụ ego ntinye otu ugboro iji malite; ndị ọzọ bụ ego ọrụ." },
      { objective: "O5", q: "Ego ntinye 500,000; uru 125,000 kwa afọ. Gịnị bụ oge nkwụghachi?", options: ["Afọ 2", "Afọ 6", "Afọ 10", "Afọ 4"], answer: 3, why: "500,000 / 125,000 = afọ 4." },
      { objective: "O5", q: "Ego ị nwetara 200,000, ego ọrụ 120,000. Gịnị bụ uru?", options: ["320,000", "80,000", "120,000", "200,000"], answer: 1, why: "200,000 - 120,000 = 80,000." },
      { objective: "O5", q: "Gịnị mere a ga-eji nwalee ihe na-eme ma ọnụ ahịa daa otu ụzọ n'ụzọ anọ?", options: ["N'ihi na ọnụ ahịa akwụkwọ nri na-agbanwe, ị ga-amarịrị ma ị ka nwere ike ịkwụghachi", "Iji mee ka nọmba ahụ dị mma anya", "N'ihi na ọnụ ahịa anaghị agbanwe mgbe ọ bụla", "Onye na-ere ya chọrọ ya"], answer: 0, why: "Atụmatụ na-arụ ọrụ naanị n'ọnụ ahịa kacha mma nwere ihe egwu." },
      { objective: "O5", q: "Kedu mgbanwe nwere ike ime ka atụmatụ azụmahịa na-esighị ike sie ike?", options: ["Ibiri ego karịa iji zụta greenhouse ka ukwuu", "Ileghara oge nkwụghachi anya", "Ịhọrọ ihe ọkụkụ na-enweghị onye na-azụ", "Nkwekọrịta ya na onye na-azụ, ụlọ dị obere ma ọ bụ oge ịkọ ihe abụọ n'afọ"], answer: 3, why: "Ego ntinye dị ala, ọnụ ahịa kwụsiri ike ma ọ bụ oge ịkọ ihe ka ukwuu na-eme ka uru bawanye ma ọ bụ oge nkwụghachi dị mkpụmkpụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ azụmahịa ma lelee ya ọzọ ya na agronomist ma ọ bụ onye ndụmọdụ ị tụkwasịrị obi tupu i tinye ego.",
    criteria: [
      { name: "Ọ dabara m?", objective: "O1", notYet: "Ọnọdụ ise ahụ adịghị ma ọ bụ a zara ha n'enweghị ihe kpatara ya.", meets: "E zara mmiri, ahịa, nka, ego ntinye na ihu igwe nke ọ bụla site n'ee ma ọ bụ mba na ihe kpatara ya, e dekwara mkpebi doro anya.", exceeds: "Ọnọdụ na-adịghị nwere atụmatụ iji dozie ya, dị ka onye na-azụ a kpọrọ aha ma ọ bụ nnwale mmiri." },
      { name: "Ụlọ na nyocha ndị na-ere ya", objective: "O2", notYet: "Naanị otu ọnụ ahịa, ma ọ bụ e weere nkwa onye na-ere ya n'eleleghị ya.", meets: "Opekata mpe ọnụ ahịa atọ e jiri tụnyere otu ahịrị n'otu oge, a rịọrọ maka ndị a ga-ajụ ase, warranty na ihe dị n'ime ya dịkwa n'akwụkwọ.", exceeds: "E letara ndị ọrụ ugbo abụọ a ga-ajụ ase, e dekwara ezi nsonaazụ ha." },
      { name: "Atụmatụ ihe ọkụkụ na fertigation", objective: "O3", notYet: "Enweghị usoro oge ihe ọkụkụ, ma ọ bụ atụmatụ nri bụ echiche.", meets: "E họọrọ ihe ọkụkụ na ụdị ya dabere na mkpa onye na-azụ, nwere ụbọchị nursery, ịkụgharị na owuwe ihe ubi, na atụmatụ nri site n'aka agronomist ma ọ bụ nnwale ya na nlele drip kwa ụbọchị.", exceeds: "Atụmatụ ahụ gụnyere ebumnuche EC na pH agronomist setịrị na mpempe ndekọ kwa ụbọchị." },
      { name: "Usoro ihu igwe, ụmụ ahụhụ na ịdị ọcha", objective: "O4", notYet: "Enweghị usoro, ma ọ bụ a na-ejikwa ụmụ ahụhụ naanị site n'ịgba ọgwụ.", meets: "Usoro kwa ụbọchị na kwa izu maka oghere ikuku, ilegharị, ọnyà, ịkpụcha, mkpofu na iwu ịbanye, na-eji naanị ngwaahịa e debanyere aha dị ka akara ya kwuru.", exceeds: "E kọgidere usoro ahụ n'ọnụ ụzọ, a gbasoro ya ma dee ya opekata mpe izu abụọ." },
      { name: "Nọmba na oge nkwụghachi", objective: "O5", notYet: "Enweghị nọmba, ma ọ bụ uru ma ọ bụ oge nkwụghachi ezighi ezi.", meets: "Ego ntinye, ego ọrụ, ego ị ga-enweta, uru na oge nkwụghachi ziri ezi, e jiri ha tụnyere ndụ mkpuchi ahụ, a nwalekwara ọnụ ahịa ịda otu ụzọ n'ụzọ anọ.", exceeds: "Ọ na-anwalekwa ihe ọkụkụ dị obere na ihe ọkụkụ furu efu, ma depụta mgbanwe ga-eme ka atụmatụ ahụ sie ike." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tụnyere opekata mpe ọnụ ahịa atọ ma leta ndị ọrụ ugbo a ga-ajụ ase tupu ha azụta ụlọ (nnyocha nsochi)",
      "Ndị na-amụ ihe kpebiri ịghara itinye ego ugbu a, ma ọ bụ ịmalite n'obere, n'ihi na atụmatụ azụmahịa ha akwụghachighị (nsonaazụ dị mma, ọ bụghị ọdịda)",
      "Ndị na-amụ ihe nwere ụlọ na-akọ na ha nwere usoro kwa izu na ihe ọkụkụ ole na ole furu efu n'ihi ụmụ ahụhụ ma ọ bụ ọrịa mgbe otu oge ịkọ ihe gachara",
      "Ndị na-amụ ihe na-akọ ezi uru ha n'oge ịkọ ihe ọ bụla e jiri tụnyere atụmatụ azụmahịa ha"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere kalkuleta, ma ọ bụ akwụkwọ, mkpịsị ode na kalkuleta dị mfe",
      "Ọnụ ahịa e dere ede site n'aka ndị na-ere greenhouse, shade net ma ọ bụ tunnel n'obodo (ndị na-amụ ihe na-anakọta ha n'oge ihe ọmụmụ a)",
      "Ozi kọntaktị maka agronomist ma ọ bụ onye ndụmọdụ ọrụ ugbo na onye na-azụ ihe onye na-amụ ihe nwere ike ịgwa okwu",
      "Nhọrọ: nleta n'otu greenhouse na-arụ ọrụ, temometa, kaadị nrapado na EC meter iji gosi otu ahụ",
      "Ihe dị ka nkeji 60 ruo 90 n'ozuzu maka nkuzi, obere nnwale na ule, gbakwunye oge iji nakọta ọnụ ahịa ma gwa ndị na-azụ okwu"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee leta greenhouse ma ọ bụ shade net na-arụ ọrụ ma ọ bụrụ na i nwere ike, ma jụọ onye nwe ya maka ezi ego na nsogbu.",
      "Chetara ndị na-amụ ihe na ọnụ ego ọ bụla n'ihe ọmụmụ a bụ ihe atụ e mepụtara; ha ga-eji ọnụ ahịa nke ha na ọnụ ahịa onye na-azụ ha.",
      "Akwadola onye na-ere greenhouse, ngwaahịa ma ọ bụ usoro fatịlaịza ọ bụla; kama nke ahụ, kụziere ndị na-amụ ihe otu esi atụnyere ma lelee.",
      "Were \"ọ bụghị ugbu a\" ma ọ bụ \"malite n'obere\" dị ka nsonaazụ dị mma ma ọ bụrụ na nọmba anaghị arụ ọrụ; ọ na-azọpụta ezinụlọ n'ụgwọ.",
      "Akwadola ngwaahịa ọgwụ ụmụ ahụhụ ma ọ bụ ọnụ ọgụgụ ya mgbe ọ bụla; gosi ndị na-amụ ihe otu esi elele ndepụta onye na-achịkwa ya ma gụọ akara.",
      "Jiri rubric tụọ akara atụmatụ azụmahịa ọ bụla ma lelee mgbakọ ọ bụla ya na onye na-amụ ihe tupu ọ gwa onye na-agbazinye ego ma ọ bụ onye na-ere ihe okwu."
    ]
  }
};
