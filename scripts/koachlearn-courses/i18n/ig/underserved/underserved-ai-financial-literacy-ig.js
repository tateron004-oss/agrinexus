"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-ai-financial-literacy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-financial-literacy-ig",
  lang: "ig",
  translationOf: "underserved-ai-financial-literacy",
  category: "Undeserved Community",
  name: "AI maka Ịmata Ihe Gbasara Ego",
  skills: "Ime atụmatụ ego (budget) kwa ọnwa, Iji AI hazie ego gị n'ekesaghị ozi nzuzo, Ịtọ ebumnuche ichekwa ego, Ilele akụkọ kredit gị n'efu, Ịchọta enyemaka ụtụ isi na ego n'efu, Ịhụ aghụghọ ego",
  outcome: "ime atụmatụ ego (budget) dị mfe kwa ọnwa maka ezinụlọ gị site n'enyemaka ngwa enyemaka AI n'efu (n'ekesaghị nọmba nzuzo ọ bụla), ịtọ otu ebumnuche ichekwa ego, na ịmara ebe ị ga-enweta akụkọ kredit gị n'efu na enyemaka ụtụ isi n'efu.",
  about: [
    "Nchekasị gbasara ego bụ eziokwu, karịsịa mgbe dollar ọ bụla nwere ọrụ ọ ga-arụ. Ihe ọmụmụ a na-enye gị ngwa dị mfe iji hụ ebe ego gị na-aga, ịhazi maka ihe dị ezinụlọ gị mkpa, na izere ọnya na-efu ọtụtụ ego.",
    "Ị ga-eme atụmatụ ego kwa ọnwa, jiri ngwa enyemaka AI n'efu nyere gị aka hazie ma kọwaa ya n'edeghị nọmba nzuzo ọ bụla, tọọ ebumnuche ichekwa ego, lelee akụkọ kredit gị n'efu, chọta enyemaka ụtụ isi na ego n'efu, ma hụ aghụghọ ego.",
    "Ihe ọmụmụ a na-akụzi nka, ọ bụghị ndụmọdụ itinye ego (investment). Maka mkpebi ego dị ukwuu, gwa onye ndụmọdụ n'efu nke na-abụghị maka uru (nonprofit) okwu, ma ọ bụ lelee isi iyi gọọmentị dị ka consumerfinance.gov, fdic.gov na irs.gov. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee atụmatụ ego ezinụlọ maka otu ọnwa: depụta ego na-abata, ihe ndị dị mkpa na ihe ndị ị na-achọ, were ego a gbakọrọ agbakọ (rounded). Jiri ngwa enyemaka AI hazie ya ma tụọ aro otu ebe ị ga-echekwa ego (n'enweghị nọmba akaụntụ ma ọ bụ ozi nzuzo). Tọọ otu ebumnuche ichekwa ego nwere ego na ụbọchị, ma dee ebe ị ga-enweta akụkọ kredit gị n'efu na enyemaka ụtụ isi n'efu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye bi n'obodo ndị a na-eleghara anya, na-elekọta ezinụlọ n'ego dị warara: nne na nna na-arụ ọrụ, ndị na-elekọta ndị ọzọ, ndị na-enweta enyemaka gọọmentị (benefits), ndị agadi, na ndị ntorobịa na-ebi naanị ha nke mbụ.",
    startingPoint: "Ha na-akwụ ụgwọ ma na-agụ ego n'isi ha ma ọ bụ n'akwụkwọ. Ole na ole nwere atụmatụ ego e dere ede, ebumnuche ichekwa ego, ma ọ bụ eleleela akụkọ kredit ha, ọtụtụ ejibeghịkwa AI maka ọrụ ego. Ndị aghụghọ ego agbaala ụfọdụ n'ime ha mbọ.",
    gap: "N'enweghị atụmatụ, obere mmefu na-agbakọ, ichekwa ego anaghị amalite, mperi kredit anaghị edozi, ezinụlọ na-akwụkwa ụgwọ maka enyemaka ụtụ isi ma ọ bụ daba n'aghụghọ. Ndị na-amụ ihe chọrọ atụmatụ ego dị mfe, ebumnuche ichekwa ego na enyemaka n'efu a pụrụ ịtụkwasị obi, ha ga-ejikwa AI n'ekesaghị nọmba nzuzo.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6)",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa ọba akwụkwọ; akwụkwọ na-arụkwa ọrụ maka atụmatụ ego",
      "Nzuzo: naanị ego a gbakọrọ agbakọ; ọ dịghị mgbe a na-ede nọmba akaụntụ, kaadị ma ọ bụ Social Security ma ọ bụ okwuntughe n'ime AI",
      "Naanị mmụta ego n'ozuzu: ọ dịghị ndụmọdụ itinye ego, mkpebi dị ukwuu na-aga n'isi iyi gọọmentị ma ọ bụ onye ndụmọdụ nonprofit n'efu",
      "Ego na iwu (FDIC, VITA, Lifeline) na-agbanwe: ndị na-amụ ihe na-elele weebụsaịtị gọọmentị"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'iji ngwa enyemaka AI nwere ike ibu ụzọ were \"Mmalite AI na Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị akwụkwọ ụgwọ ọrụ (pay stub), akwụkwọ ụlọ akụ ma ọ bụ nnata ego (receipt) nke otu ọnwa", action: "idepụta ego na-abata gị ma kewaa mmefu gị n'ihe dị mkpa na ihe ị na-achọ", standard: "nwere opekata mpe mmefu iri, ego a gbakọrọ agbakọ na ngụkọta" },
    { id: "O2", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ịhazi atụmatụ ego gị ka ọ bụrụ tebụl ma họrọ aro ya ndị dabara ezinụlọ gị", standard: "na-ekesa naanị ụdị mmefu na ego a gbakọrọ agbakọ, ma were igwe mgbakọ lelee ngụkọta" },
    { id: "O3", condition: "Mgbe e nwere ihe ị chọrọ ichekwa ego maka ya", action: "ịtọ ebumnuche ichekwa ego nwere ego na ụbọchị, gbakọọ ego kwa izu, ma họrọ ebe dị nchebe iji debe ya", standard: "e lelere mgbakọ ahụ, ọ bụkwa ụlọ akụ FDIC kwadoro ma ọ bụ credit union gọọmentị etiti kwadoro" },
    { id: "O4", condition: "Site n'iji AnnualCreditReport.com", action: "ịkọwa otu esi enweta akụkọ kredit gị n'efu ma lelee ha maka mperi", standard: "na-akpọ aha ụlọ ọrụ kredit atọ ahụ na ihe a ga-arịọ ka e dozie" },
    { id: "O5", condition: "Mgbe ị chọrọ enyemaka ụtụ isi ma ọ bụ ego", action: "ịchọta ebe VITA ma ọ bụ TCE na-enye enyemaka ụtụ isi n'efu na isi iyi a pụrụ ịtụkwasị obi maka ajụjụ ego", standard: "na-ede adreesị ebe ahụ na ihe a ga-eweta" },
    { id: "O6", condition: "Mgbe e nyere gị onyinye ego ma ọ bụ ozi na-eme ngwa ngwa", action: "ịhụ ihe ịdọ aka na ntị nke aghụghọ ego ma họrọ nzọụkwụ ọzọ dị nchebe", standard: "n'ekesaghị nbanye (login) ma ọ bụ koodu ọ bụla, ma na-akọrọ FTC aghụghọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Atụmatụ ego gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe mbụ gbasara atụmatụ ego: ego na-abata, ihe dị mkpa na ihe ị na-achọ",
          minutes: 5,
          goal: "Depụta ego na-abata gị kwa ọnwa ma kewaa mmefu gị n'ihe dị mkpa na ihe ị na-achọ.",
          text: [
            "Atụmatụ ego (budget) bụ atụmatụ maka ego gị. Ọ na-egosi ihe na-abata kwa ọnwa na ebe ọ na-aga. Atụmatụ ego apụtaghị na ị gaghị enwe obi ụtọ ọzọ; ọ pụtara na gị na-ekpebi ya n'ebumnuche.",
            "Ego na-abata (income) bụ ego na-abata: ụgwọ ọrụ, enyemaka gọọmentị, ego nkwado nwa (child support), obere ọrụ ndị ọzọ. Ihe dị mkpa bụ ihe ị ga-akwụrịrị ụgwọ ya iji dị ndụ ma rụọ ọrụ: ụlọ, nri, ọkụ na mmiri (utilities), njem, ilekọta ụmụaka, ọgwụ. Ihe ị na-achọ bụ ihe ọ dị mma inwe: iri nri n'èzí, streaming, uwe ọhụrụ ị chọbeghị.",
            "Malite n'otu ọnwa. Lee akwụkwọ ụgwọ ọrụ, akwụkwọ ụlọ akụ ma ọ bụ kaadị, na nnata ego. Gbakọọ ego ahụ ruo dollar kacha nso ma ọ bụ dollar ise kacha nso; ihe dị nso zuru oke iji malite."
          ],
          steps: ["Dee ebe ọ bụla ego si abata gị n'otu ọnwa.", "Depụta mmefu ọ bụla ị nwere ike icheta ma ọ bụ chọta.", "Kaa mmefu ọ bụla akara dị ka ihe dị mkpa ma ọ bụ ihe ị na-achọ.", "Gbakọọ ego na-abata, ihe dị mkpa na ihe ị na-achọ."],
          words: [["Atụmatụ ego (budget)", "atụmatụ maka otu ị ga-esi jiri ego gị kwa ọnwa."], ["Ego na-abata (income)", "ego na-abata n'aka gị."], ["Mmefu (expense)", "ego na-apụ n'aka gị."]],
          slides: [
            { title: "Atụmatụ ego bụ atụmatụ", bullets: ["Ihe na-abata", "Ebe ọ na-aga", "Gị na-ekpebi n'ebumnuche"] },
            { title: "Ihe dị mkpa na ihe ị na-achọ", bullets: ["Ihe dị mkpa: ụlọ, nri, ọkụ na mmiri, njem, ilekọta ụmụaka", "Ihe ị na-achọ: iri nri n'èzí, streaming, ihe ndị ọzọ"] },
            { title: "Malite n'ụzọ dị mfe", bullets: ["Otu ọnwa", "Jiri akwụkwọ ụgwọ ọrụ, akwụkwọ ụlọ akụ, nnata ego", "Gbakọọ ego ahụ"] }
          ],
          tryIt: "N'akwụkwọ ma ọ bụ na spreadsheet n'efu, dee ego na-abata gị kwa ọnwa na opekata mpe mmefu iri. Kaa nke ọ bụla akara N maka ihe dị mkpa (need) ma ọ bụ W maka ihe ị na-achọ (want).",
          youCanNow: "idepụta ego na-abata gị ma kewaa mmefu n'ihe dị mkpa na ihe ị na-achọ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ ego na-abata (income)?", options: ["Ego na-abata, dị ka ụgwọ ọrụ na enyemaka gọọmentị", "Ego ị na-akwụ maka ụlọ", "Ego ị ji n'ụgwọ", "Ụgwọ ị na-akwụ"], answer: 0, why: "Ego na-abata bụ ego na-abata n'aka gị, dị ka ụgwọ ọrụ, enyemaka gọọmentị ma ọ bụ obere ọrụ ndị ọzọ." },
            { objective: "O1", q: "Ị na-edepụta mmefu, ị na-akwụkwa ihe dị ka $87.60 maka ekwentị. Gịnị ka ị ga-ede iji malite?", options: ["Hapụ ya", "Ihe dị ka $90", "$870", "Ọ dịghị ihe ruo mgbe ị chọtara ezi kobo ya"], answer: 1, why: "Ịgbakọ ruo dollar kacha nso ma ọ bụ ise kacha nso zuru oke iji malite atụmatụ ego." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI hazie atụmatụ ego gị n'enweghị nsogbu",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI n'efu ka ọ hazie ma kọwaa atụmatụ ego gị n'ekesaghị ozi nzuzo.",
          text: [
            "Ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini nwere ike ime ka ndepụta gị bụrụ tebụl dị mma, gbakọọ ya, ma gosi ebe ego na-aga. Gị ka bụ onye isi na mkpebi ọ bụla.",
            "Kesaa naanị ego a gbakọrọ agbakọ na ụdị mmefu. Edela mgbe ọ bụla nọmba akaụntụ, nọmba kaadị, nọmba Social Security gị (nọmba njirimara gọọmentị US), okwuntughe, ma ọ bụ nbanye ụlọ akụ gị. Ọmụmaatụ prompt: \"Ezinụlọ m nke mmadụ 4 na-enweta ihe dị ka $3,200 kwa ọnwa. Ụlọ $1,400, nri $650, ekwentị $90, kaadị ụgbọ ala (bus) $100, iri nri n'èzí $200, streaming $40. Tinye nke a na tebụl, gbakọọ ya, ma tụọ aro ebe abụọ anyị nwere ike ibelata.\"",
            "AI nwere ike ime mperi na mgbakọ. Gbakọọ ngụkọta n'onwe gị ma ọ bụ were igwe mgbakọ lelee ya. Ndụmọdụ ya bụ echiche, ọ bụghị iwu; họrọ ihe dabara ezinụlọ gị."
          ],
          steps: ["Dee ụdị mmefu gị na ego a gbakọrọ agbakọ.", "Wepụ nọmba akaụntụ ọ bụla ma ọ bụ ozi nzuzo.", "Rịọ AI ka o mee tebụl, gbakọọ ya ma tụọ aro ebe a ga-ebelata.", "Lelee ngụkọta n'onwe gị.", "Họrọ aro ndị dabara ezinụlọ gị."],
          words: [["Ụdị mmefu (category)", "otu ìgwè mmefu, dị ka nri ma ọ bụ njem."], ["Ihe nnọchi (placeholder)", "ihe e ji dochie ozi nzuzo, dị ka \"[ụlọ akụ m]\"."]],
          slides: [
            { title: "AI nwere ike inyere gị aka ịhazi", bullets: ["Ime tebụl", "Ịgbakọ ya", "Ịtụ aro ebe a ga-ebelata"] },
            { title: "Kesaa naanị ihe ndị a", bullets: ["Ego a gbakọrọ agbakọ", "Ụdị mmefu dị ka ụlọ na nri", "Ọ dịghị mgbe: nọmba akaụntụ, kaadị ma ọ bụ Social Security"] },
            { title: "Lelee ma họrọ", bullets: ["Lelee mgbakọ n'onwe gị", "Ndụmọdụ bụ echiche, ọ bụghị iwu", "Họrọ ihe dabara ezinụlọ gị"] }
          ],
          tryIt: "Nye ngwa enyemaka AI ụdị mmefu gị na ego a gbakọrọ agbakọ (n'enweghị ozi nzuzo). Rịọ maka tebụl, ngụkọta na echiche abụọ maka ibelata. Were igwe mgbakọ lelee ngụkọta ahụ.",
          youCanNow: "iji AI hazie atụmatụ ego n'ekesaghị ozi nzuzo, ma lelee mgbakọ ya.",
          quickCheck: [
            { objective: "O2", q: "Onye na-eme mkpebi ikpeazụ gbasara atụmatụ ego gị mgbe ị na-eji AI?", options: ["AI", "Ụlọ akụ gị", "Gị", "Ụlọ ahịa app"], answer: 2, why: "AI na-enye echiche, mana gị ka bụ onye isi na mkpebi ọ bụla." },
            { objective: "O2", q: "Ị chọrọ ka AI hazie atụmatụ ego gị. Gịnị ka ị ga-ede?", options: ["Nbanye ụlọ akụ gị", "Nọmba kaadị gị na koodu ya", "Nọmba Social Security gị", "Ụdị mmefu a gbakọrọ agbakọ dị ka \"nri ihe dị ka $650\""], answer: 3, why: "Naanị ego a gbakọrọ agbakọ na ụdị mmefu na-abanye n'AI, ọ dịghị mgbe nọmba nzuzo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịtọ ebumnuche ichekwa ego na idebe ego n'ebe dị nchebe",
          minutes: 5,
          goal: "Tọọ otu ebumnuche ichekwa ego nwere ego na ụbọchị, ma mara otu e si echebe ego e debere n'ụlọ akụ.",
          text: [
            "Ọbụna obere ego e chekwara kwa izu nwere ike inye aka mgbe ụgbọala mebiri ma ọ bụ mgbe e belatara oge ọrụ. Ọtụtụ mmadụ na-amalite site n'ego mberede (emergency fund): ego e wezugara naanị maka ihe na-atụghị anya.",
            "Mee ka ebumnuche ahụ doo anya: \"Chekwaa $300 maka mberede tupu June 1.\" Kee ya site n'ọnụọgụ izu iji hụ ego ole ị ga-ewezuga kwa izu. Rịọ AI ka o mee mgbakọ ahụ, wee lelee ya.",
            "Ebe ị na-edebe ego e chekwara dị mkpa. Ego dị n'ụlọ akụ FDIC kwadoro (insured) bụ nke e chebere ruo $250,000 maka onye ọ bụla debere ego, n'ụlọ akụ ọ bụla, maka ụdị nwe akaụntụ ọ bụla. Nkwado FDIC anaghị ekpuchi stocks ma ọ bụ crypto. Lelee na fdic.gov ma ụlọ akụ nwere nkwado FDIC tupu i meghee akaụntụ."
          ],
          steps: ["Họrọ ihe ị na-echekwa ego maka ya.", "Họrọ ego na ụbọchị.", "Kee ego ahụ site n'ọnụọgụ izu.", "Debe ego e chekwara n'ụlọ akụ ma ọ bụ credit union gọọmentị etiti kwadoro."],
          words: [["Ego mberede (emergency fund)", "ego e chekwara naanị maka mmefu na-atụghị anya."], ["FDIC", "Federal Deposit Insurance Corporation, ụlọ ọrụ gọọmentị US na-echebe ego dị n'ụlọ akụ ndị o kwadoro."], ["Credit union", "ụlọ ọrụ ego ndị otu nwe, nke anaghị arụ ọrụ maka uru."]],
          sources: [{ name: "FDIC: Understanding Deposit Insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Malite ego mberede", bullets: ["Ego naanị maka ihe na-atụghị anya", "Obere ego na-agbakọ"] },
            { title: "Ebumnuche doro anya", bullets: ["Ọmụmaatụ: $300 tupu June 1", "Ego kee site n'izu = ego ichekwa kwa izu", "Lelee mgbakọ n'onwe gị"] },
            { title: "Debe ego e chekwara n'ebe dị nchebe", bullets: ["Ụlọ akụ FDIC kwadoro: ruo $250,000 maka onye ọ bụla, n'ụlọ akụ ọ bụla, n'ụdị ọ bụla", "Ọ bụghị stocks ma ọ bụ crypto", "Lelee ụlọ akụ na fdic.gov"] }
          ],
          tryIt: "Dee otu ebumnuche ichekwa ego nwere ego na ụbọchị. Gbakọọ ego ole ị ga-echekwa kwa izu, wee rịọ AI ka o lelee mgbakọ gị.",
          youCanNow: "ịtọ ebumnuche ichekwa ego doro anya ma họrọ ebe dị nchebe nwere nkwado iji debe ya.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-eme ka ebumnuche ichekwa ego doo anya?", options: ["Ego na ụbọchị", "Aha mara mma", "Nọmba buru ibu", "Ịghara ịgwa onye ọ bụla"], answer: 0, why: "Ebumnuche doro anya na-ekwu ego ole na mgbe, dị ka $300 tupu June 1." },
            { objective: "O3", q: "Ị chọrọ ichekwa $200 n'izu 20. Ego ole ka ị ga-ewezuga kwa izu?", options: ["$20", "$10", "$4", "$100"], answer: 1, why: "$200 kee site n'izu 20 bụ $10 kwa izu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Atụmatụ ego gị",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ihe dị mkpa?", options: ["Ọrụ streaming", "Ụgwọ ụlọ", "Iri nri n'èzí", "Egwuregwu ọhụrụ"], answer: 1, why: "Ụgwọ ụlọ bụ mmefu ị ga-akwụrịrị iji dị ndụ." },
          { objective: "O2", q: "Gịnị ka ọ dị mma ide n'ime ngwa enyemaka AI maka enyemaka atụmatụ ego?", options: ["Nọmba akaụntụ ụlọ akụ gị", "Nọmba kaadị gị", "Ego a gbakọrọ agbakọ dị ka \"ụlọ ihe dị ka $1,400\"", "Okwuntughe ụlọ akụ gị n'ịntanetị"], answer: 2, why: "Ego a gbakọrọ agbakọ na ụdị mmefu na-enye enyemaka ị chọrọ n'enweghị ozi nzuzo." },
          { objective: "O2", q: "AI gbakọrọ atụmatụ ego gị, ngụkọta ya adịkwaghị ka ọ ziri ezi. Gịnị ka ị ga-eme?", options: ["Kwere ya", "Hichapụ atụmatụ ego gị", "Jụọ onye ị na-amaghị n'ịntanetị", "Were igwe mgbakọ lelee ngụkọta ahụ"], answer: 3, why: "AI nwere ike ime mperi na mgbakọ; lelee ya n'onwe gị." },
          { objective: "O3", q: "Kedu nke bụ ebumnuche ichekwa ego doro anya?", options: ["\"Chekwaa $300 maka mberede tupu June 1\"", "\"Chekwaa ntakịrị\"", "\"Bụrụ ọgaranya\"", "\"Ego emesịa\""], answer: 0, why: "O nwere ebumnuche, ego na ụbọchị." },
          { objective: "O3", q: "Gịnị ka nkwado FDIC na-ekpuchi?", options: ["Stocks", "Ego e debere n'ụlọ akụ nwere nkwado, ruo oke ya", "Crypto", "Ego ị zoro n'okpuru akwa gị"], answer: 1, why: "FDIC na-echebe ego e debere n'ụlọ akụ nwere nkwado; ọ bụghị stocks ma ọ bụ crypto." }
        ]
      }
    },
    {
      name: "Isi 2: Kredit, enyemaka na ịnọ na nchekwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ilele akụkọ kredit gị n'efu",
          minutes: 5,
          goal: "Chọta ezi weebụsaịtị maka akụkọ kredit n'efu ma lelee akụkọ maka mperi.",
          text: [
            "Akụkọ kredit (credit report) bụ ndekọ nke mbinye ego gị, kaadị gị na ụgwọ gị. Ndị nwe ụlọ, ndị na-agbazinye ego na ụfọdụ ndị were mmadụ n'ọrụ nwere ike ilele ya. Mperi na-adị, mperi nwekwara ike ime ka i tufuo ụlọ ma ọ bụ mbinye ego.",
            "Ị nwere ike inweta akụkọ kredit n'efu kwa izu site n'ụlọ ọrụ kredit atọ ahụ dị ukwuu, Equifax, Experian na TransUnion, na AnnualCreditReport.com. Nke ahụ bụ ezi weebụsaịtị gọọmentị kwadoro. Weebụsaịtị ndị ọzọ na-ekwe nkwa akụkọ \"n'efu\" nwere ike ịnwa ire gị ihe.",
            "Chọọ akaụntụ ndị ị na-amaghị, adreesị ezighi ezi, na ụgwọ e dere na ọ bịaghị n'oge mgbe ị kwụrụ ya n'oge. Ọ bụrụ na ihe ezighi ezi, ị nwere ike ịrịọ ụlọ ọrụ kredit ahụ ka ọ dozie ya (dispute). Consumer Financial Protection Bureau na consumerfinance.gov na-akọwa otu esi eme ya."
          ],
          steps: ["Dee AnnualCreditReport.com n'onwe gị na browser.", "Rịọ maka akụkọ gị site na Equifax, Experian na TransUnion.", "Chọọ akaụntụ ị na-amaghị, ozi ezighi ezi na ụgwọ e dere na ọ bịaghị n'oge n'ụzọ ezighi ezi.", "Ọ bụrụ na ihe ezighi ezi, soro nzọụkwụ dispute dị na consumerfinance.gov."],
          words: [["Akụkọ kredit (credit report)", "ndekọ nke mbinye ego gị, kaadị kredit gị na otu i si akwụ ụgwọ."], ["Ụlọ ọrụ kredit (credit bureau)", "ụlọ ọrụ na-edebe akụkọ kredit: Equifax, Experian, TransUnion."], ["Dispute", "ịrịọ n'ụzọ iwu ka e dozie mperi."]],
          sources: [{ name: "FTC: Free Credit Reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Akụkọ kredit gị", bullets: ["Ndekọ mbinye ego, kaadị na ụgwọ", "Ndị nwe ụlọ na ndị na-agbazinye ego nwere ike ilele ya", "Mperi na-adị"] },
            { title: "Nweta ya n'efu", bullets: ["AnnualCreditReport.com bụ ezi weebụsaịtị", "Equifax, Experian, TransUnion", "N'efu kwa izu"] },
            { title: "Ihe ị ga-achọ", bullets: ["Akaụntụ ị na-amaghị", "Adreesị ezighi ezi ma ọ bụ ụgwọ e dere na ọ bịaghị n'oge", "Dispute mperi: lee consumerfinance.gov"] }
          ],
          tryIt: "Dee ezi weebụsaịtị maka akụkọ kredit n'efu na aha ụlọ ọrụ kredit atọ ahụ. Ọ bụrụ na ị dị njikere ma nọrọ na ngwaọrụ nke gị naanị, rịọ maka otu akụkọ ma chọọ ihe ọ bụla ị na-amaghị.",
          youCanNow: "inweta akụkọ kredit gị n'efu site n'ezi weebụsaịtị ma hụ mperi ị ga-arịọ ka e dozie.",
          quickCheck: [
            { objective: "O4", q: "Onye nwere ike ilele akụkọ kredit gị?", options: ["Naanị gị", "Naanị ezinụlọ gị", "Ndị nwe ụlọ, ndị na-agbazinye ego na ụfọdụ ndị were mmadụ n'ọrụ", "Ọ dịghị onye"], answer: 2, why: "Ndị nwe ụlọ, ndị na-agbazinye ego na ụfọdụ ndị were mmadụ n'ọrụ nwere ike ilele akụkọ kredit gị." },
            { objective: "O4", q: "Mgbasa ozi na-enye akụkọ kredit \"n'efu\" na weebụsaịtị ị na-amaghị. Gịnị ka ị ga-eme?", options: ["Debanye aha ma tinye kaadị gị", "Pịa mgbasa ozi ahụ", "Leghara akụkọ kredit anya", "Dee AnnualCreditReport.com n'onwe gị"], answer: 3, why: "AnnualCreditReport.com bụ ezi weebụsaịtị; ndị ọzọ nwere ike ịnwa ire gị ihe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Enyemaka ụtụ isi na ego n'efu",
          minutes: 5,
          goal: "Chọta ebe na-enye enyemaka ụtụ isi n'efu na isi iyi a pụrụ ịtụkwasị obi maka ajụjụ ego.",
          text: [
            "Ọ dịghị mkpa ka ị kwụọ ọtụtụ ego ka e mee ụtụ isi gị. Mmemme IRS (ụlọ ọrụ ụtụ isi US) a na-akpọ Volunteer Income Tax Assistance, VITA, na-enye enyemaka ụtụ isi n'efu, karịsịa nye ndị ego ha na-enweta dabara n'iwu Earned Income Tax Credit. Ọtụtụ ebe na-enyekwa ndị na-enweta ihe dị ka $70,244 ma ọ bụ na-erughị ya aka, ndị nwere nkwarụ, na ndị maara ntakịrị bekee. Ebe ọ bụla nwere ike ịtọ iwu nke ya, ya mere jụọ ebe ahụ.",
            "Chọta ebe VITA site na IRS VITA/TCE Locator na freetaxassistance.for.irs.gov ma ọ bụ kpọọ 800-906-9887. TCE na-enye enyemaka yiri ya n'efu, karịsịa nye ndị gbara afọ 60 na karịa.",
            "Maka ajụjụ ego ndị ọzọ, Consumer Financial Protection Bureau na consumerfinance.gov nwere ntuziaka n'efu gbasara akaụntụ ụlọ akụ, ịnakọta ụgwọ (debt collection), payday loan na ndị ọzọ, na ụzọ isi tinye mkpesa gbasara ụlọ ọrụ. Payday loan na app ego ngwa ngwa nwere ike ịfụ ego karịa ka ọ dị ka; gụọ ọnụ ahịa ya niile tupu i bịanye aka."
          ],
          steps: ["Chọọ na IRS VITA/TCE Locator ma ọ bụ kpọọ 800-906-9887.", "Jụọ ebe ahụ ihe ị ga-eweta.", "Jiri consumerfinance.gov maka ajụjụ ego.", "Tupu mbinye ego ọ bụla, jụọ ọnụ ahịa ya niile na dollar."],
          words: [["VITA", "Volunteer Income Tax Assistance: enyemaka ụtụ isi n'efu nke IRS kwadoro."], ["Payday loan", "obere mbinye ego nke oge dị mkpụmkpụ nwere ike ịdị oke ọnụ."]],
          sources: [{ name: "IRS: Free tax return preparation for qualifying taxpayers", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Enyemaka ụtụ isi n'efu: VITA", bullets: ["IRS kwadoro ya, ndị ọrụ afọ ofufo a zụrụ azụ na-eme ya", "Ọtụtụ ebe na-enyere ndị na-enweta ihe dị ka $70,244 ma ọ bụ na-erughị ya aka", "Ebe ọ bụla nwere ike ịtọ iwu nke ya"] },
            { title: "Chọta ebe", bullets: ["freetaxassistance.for.irs.gov", "Ma ọ bụ kpọọ 800-906-9887", "TCE: enyemaka n'efu karịsịa maka ndị gbara afọ 60+"] },
            { title: "Enyemaka ego a pụrụ ịtụkwasị obi", bullets: ["Ntuziaka na mkpesa na consumerfinance.gov", "Payday loan nwere ike ịfụ ọtụtụ ego", "Jụọ ọnụ ahịa ya niile tupu i bịanye aka"] }
          ],
          tryIt: "Jiri IRS VITA/TCE Locator chọta ebe enyemaka ụtụ isi n'efu kacha nso gị. Dee adreesị ya na ihe ọ sị ka i weta.",
          youCanNow: "ịchọta enyemaka ụtụ isi n'efu na ozi ego a pụrụ ịtụkwasị obi.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka TCE na-enye karịsịa?", options: ["Enyemaka ụtụ isi n'efu, karịsịa maka ndị gbara afọ 60 na karịa", "Mbinye ego a na-akwụ ụgwọ", "Kaadị kredit", "Ọzụzụ ọrụ"], answer: 0, why: "TCE na-enye enyemaka ụtụ isi n'efu dị ka VITA, karịsịa nye ndị gbara afọ 60 na karịa." },
            { objective: "O5", q: "App ego ngwa ngwa na-enye gị $200 taa. Gịnị ka ị ga-ebu ụzọ jụọ?", options: ["Otu ị ga-esi nweta ọzọ ngwa ngwa", "Ọnụ ahịa ya niile na dollar", "Ma ndị enyi gị na-eji ya", "Ọ dịghị ihe; naanị bịanye aka"], answer: 1, why: "Payday loan na app ego ngwa ngwa nwere ike ịfụ ego karịa ka ọ dị ka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhụ aghụghọ ego, na atụmatụ ikpeazụ gị",
          minutes: 5,
          goal: "Hụ aghụghọ ego a na-ahụkarị ma mechaa atụmatụ ego gị.",
          text: [
            "Ndị aghụghọ na-achụ ndị ego na-ezughị site na mbinye ego adịgboroja, enyemaka ụgwọ adịgboroja, onyinye ego gọọmentị (grant) adịgboroja na onyinye \"baa ọgaranya ngwa ngwa\", gụnyere atụmatụ crypto. Ụfọdụ na-eji AI ugbu a ede ozi dị ka ezi ozi ma ọ bụ ṅomie olu onye ezinụlọ.",
            "Ihe ịdọ aka na ntị: ha na-eme ka ị mee ngwa ngwa, na-arịọ ka ị kwụọ ụgwọ site na gift card (kaadị onyinye), wire transfer (izipu ego site n'ụlọ akụ), app ịkwụ ụgwọ ma ọ bụ crypto, na-ekwe nkwa ego doro anya, ma ọ bụ na-arịọ nbanye ụlọ akụ gị ma ọ bụ koodu e zitere n'ekwentị gị. Ezi ụlọ ọrụ gọọmentị agaghị akpọ oku ma rịọ ka ị kwụọ ụgwọ n'ụzọ ahụ.",
            "Ọ bụrụ na ihe adịghị gị mma, kwụsị, kwụsị oku ahụ ma kpọghachi site na nọmba ị maara na ọ bụ ezi nọmba. Ị nwere ike ịkọrọ Federal Trade Commission (FTC) aghụghọ na ReportFraud.ftc.gov."
          ],
          steps: ["Lezie anya maka ime ngwa ngwa, gift card, crypto na nkwa ego doro anya.", "Ekesala nbanye ụlọ akụ ma ọ bụ koodu ekwentị mgbe ọ bụla.", "Kwụsị oku ma kpọghachi na nọmba ị maara.", "Kọọrọ FTC aghụghọ."],
          words: [["Aghụghọ (scam)", "wayo e ji ezu ego ma ọ bụ ozi."], ["Uru doro anya (guaranteed returns)", "nkwa na ị ga-enweta ego n'ezie; okwu ndị aghụghọ na-ekwukarị."]],
          sources: [{ name: "Federal Trade Commission: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          slides: [
            { title: "Aghụghọ ego a na-ahụkarị", bullets: ["Mbinye ego na enyemaka ụgwọ adịgboroja", "Onyinye ego gọọmentị adịgboroja", "\"Baa ọgaranya ngwa ngwa\" na atụmatụ crypto"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ha na-eme ka ị mee ngwa ngwa", "Gift card, wire, app ịkwụ ụgwọ ma ọ bụ crypto", "Nkwa ego doro anya; ịrịọ koodu gị"] },
            { title: "Ihe ị ga-eme", bullets: ["Kwụsị ma kwụsị oku ahụ", "Kpọghachi na nọmba ị maara", "Kọọ ya na ReportFraud.ftc.gov"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ ego gị nke otu ọnwa site n'enyemaka AI (n'enweghị nọmba nzuzo), lelee ngụkọta, dee otu ebumnuche ichekwa ego nwere ego na ụbọchị, ma dee ebe ị ga-enweta akụkọ kredit gị n'efu na enyemaka ụtụ isi n'efu.",
          youCanNow: "ime atụmatụ ego ezinụlọ, ịhazi ichekwa ego, ịchọta enyemaka n'efu na izere aghụghọ ego.",
          quickCheck: [
            { objective: "O6", q: "Kedu arịrịọ ịkwụ ụgwọ bụ ihe ịdọ aka na ntị nke aghụghọ?", options: ["Ụgwọ site n'ụlọ ọrụ ọkụ ị maara n'adreesị ya ọ na-ejikarị", "Ịkwụ onye nwe ụlọ ụgwọ ụlọ site na check", "Ịgwa gị ka ị kwụọ ụgwọ site na gift card", "Ịkwụ ụgwọ n'ihu ụlọ ahịa"], answer: 2, why: "Ndị aghụghọ na-arịọ gift card, wire transfer, app ịkwụ ụgwọ ma ọ bụ crypto." },
            { objective: "O6", q: "Oku bịara n'olu nwanne nne gị ma ọ bụ nna gị (cousin) na-arịọ ego ugbu a. Gịnị ka ị ga-eme?", options: ["Zipu ya ozugbo", "Nye ha nbanye ụlọ akụ gị", "Kwụọ site na gift card", "Kwụsị oku ma kpọọ cousin gị na nọmba ị maara"], answer: 3, why: "Ndị aghụghọ nwere ike iji AI ṅomie olu, ya mere ị na-akpọghachi na nọmba ị maara." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Kredit, enyemaka na ịnọ na nchekwa",
        questions: [
          { objective: "O4", q: "Kedu ezi weebụsaịtị maka akụkọ kredit n'efu?", options: ["Weebụsaịtị ọ bụla na-ekwu \"n'efu\"", "Njikọ n'ozi ederede", "Mgbasa ozi na social media", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com bụ ezi weebụsaịtị maka akụkọ n'efu." },
          { objective: "O4", q: "Ị hụrụ akaụntụ n'akụkọ kredit gị nke na-abụghị nke gị. Ị kwesịrị:", options: ["Ịrịọ ụlọ ọrụ kredit ahụ ka ọ dozie ya (dispute)", "Ileghara ya anya", "Ịkwụ ya ozugbo", "Itinye ya n'ịntanetị"], answer: 0, why: "Dispute na-edozi mperi n'akụkọ gị." },
          { objective: "O5", q: "Gịnị bụ VITA?", options: ["Payday loan", "Enyemaka ụtụ isi n'efu nke IRS kwadoro", "Ụlọ ọrụ kredit", "Akaụntụ ichekwa ego"], answer: 1, why: "VITA na-enye nkwadebe ụtụ isi n'efu site n'aka ndị ọrụ afọ ofufo a zụrụ azụ." },
          { objective: "O6", q: "Onye kpọrọ oku sị na ọ si na gọọmentị, na ị ga-akwụ ntaramahụhụ (fine) taa site na gift card. Nke a bụ:", options: ["Ihe nkịtị", "Nkwụghachi ụtụ isi", "Aghụghọ", "Ọrụ VITA"], answer: 2, why: "Ụlọ ọrụ gọọmentị anaghị arịọ ịkwụ ụgwọ site na gift card." },
          { objective: "O6", q: "Ebee ka ị nwere ike ịkọ aghụghọ?", options: ["Nye onye aghụghọ ahụ", "Ọ dịghị ebe", "Naanị n'ìgwè mkparịta ụka", "ReportFraud.ftc.gov"], answer: 3, why: "Federal Trade Commission na-anabata akụkọ aghụghọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịmata Ihe Gbasara Ego",
    questions: [
      { objective: "O1", q: "Atụmatụ ego (budget) bụ:", options: ["Atụmatụ maka ego gị", "Ụdị mbinye ego", "Kaadị kredit", "Ụgwọ ụlọ akụ"], answer: 0, why: "Atụmatụ ego na-ahazi ego na-abata na mmefu." },
      { objective: "O1", q: "Kedu nke bụ ego na-abata?", options: ["Ụgwọ ụlọ", "Ụgwọ ọrụ (paycheck)", "Nri e zụrụ n'ahịa", "Ụgwọ ekwentị"], answer: 1, why: "Ego na-abata bụ ego na-abata n'aka gị." },
      { objective: "O1", q: "Kedu nke bụ ihe ị na-achọ?", options: ["Ilekọta ụmụaka ka i wee rụọ ọrụ", "Ọkụ eletrik", "Iri nri n'èzí", "Ọgwụ"], answer: 2, why: "Iri nri n'èzí bụ ihe ọ dị mma inwe, ọ bụghị ihe ị ga-enwerịrị." },
      { objective: "O1", q: "Mgbe ị na-amalite atụmatụ ego, ọ dị mma:", options: ["Ịhapụ ego na-abata", "Iji okwuntughe gị", "Ịkọ nkọ n'ezighi ezi", "Ịgbakọ ego ruo dollar kacha nso ma ọ bụ ise kacha nso"], answer: 3, why: "Ego dị nso, a gbakọrọ agbakọ, zuru oke iji malite." },
      { objective: "O2", q: "Kedu nke ị na-ekwesịghị ide MGBE Ọ BỤLA n'ime ngwa enyemaka AI?", options: ["Nọmba kaadị gị", "\"Nri ihe dị ka $600\"", "\"Ezinụlọ nke mmadụ 4\"", "\"Tụọ aro ebe abụọ a ga-ebelata\""], answer: 0, why: "Nọmba kaadị bụ ozi nzuzo." },
      { objective: "O2", q: "AI tụrụ aro ka i wepụ kaadị ụgbọ ala (bus) nwa gị. Ị ga-:", options: ["Mee ya n'ike", "Kpebie ihe dabara ezinụlọ gị; aro ahụ nwere ike ọ gaghị adaba", "Jụọ onye ị na-amaghị", "Nye AI nbanye ụlọ akụ gị"], answer: 1, why: "Aro AI bụ echiche; gị na-ahọrọ ihe dabara." },
      { objective: "O2", q: "Gịnị mere ị ga-eji lelee ngụkọta atụmatụ ego AI?", options: ["AI anaghị emehie mgbe ọ bụla", "Ọ bụ iwu", "AI nwere ike ime mperi na mgbakọ", "Ọ na-agbanwe ego dị n'akaụntụ gị"], answer: 2, why: "Lelee mgbakọ n'onwe gị mgbe niile." },
      { objective: "O3", q: "Ego mberede (emergency fund) bụ:", options: ["Ego maka ihe ị na-achọ", "Mbinye ego", "Akụkọ kredit", "Ego e chekwara naanị maka mmefu na-atụghị anya"], answer: 3, why: "Ọ na-ekpuchi ihe na-atụghị anya dị ka ịrụzi ụgbọala." },
      { objective: "O3", q: "Ị chọrọ $260 n'izu 26. Ego ole kwa izu?", options: ["$5", "$10", "$26", "$100"], answer: 1, why: "$260 kee site n'izu 26 bụ $10." },
      { objective: "O3", q: "Nkwado FDIC na-echebe ego e debere ruo:", options: ["$1,000", "$250,000 maka onye ọ bụla, n'ụlọ akụ ọ bụla nwere nkwado, maka ụdị nwe akaụntụ ọ bụla", "Ego ọ bụla", "Naanị crypto"], answer: 1, why: "Nke ahụ bụ ọkwa FDIC a na-ejikarị." },
      { objective: "O3", q: "Kedu nke nkwado FDIC ANAGHỊ ekpuchi?", options: ["Akaụntụ ichekwa ego n'ụlọ akụ nwere nkwado", "Akaụntụ checking n'ụlọ akụ nwere nkwado", "Crypto", "Certificate of deposit (CD) n'ụlọ akụ nwere nkwado"], answer: 2, why: "FDIC anaghị ekpuchi crypto ma ọ bụ stocks." },
      { objective: "O4", q: "Akụkọ kredit bụ:", options: ["Ụgwọ ọrụ gị", "Akwụkwọ ụtụ isi gị", "Atụmatụ ego gị", "Ndekọ nke mbinye ego gị, kaadị gị na otu i si akwụ ụgwọ"], answer: 3, why: "Ndị na-agbazinye ego na ndị nwe ụlọ nwere ike ilele ya." },
      { objective: "O4", q: "Ụlọ ọrụ kredit atọ ahụ dị ukwuu bụ:", options: ["Equifax, Experian na TransUnion", "Google, Bing na Yahoo", "FDIC, IRS na FTC", "Visa, Mastercard na Discover"], answer: 0, why: "Ụlọ ọrụ atọ a na-edebe akụkọ kredit." },
      { objective: "O4", q: "Ugboro ole ka ị nwere ike inweta akụkọ n'efu na AnnualCreditReport.com?", options: ["Otu ugboro n'afọ iri ọ bụla", "Kwa izu", "Ọ dịghị mgbe", "Naanị ma ọ bụrụ na ị kwụrụ ụgwọ"], answer: 1, why: "Ụlọ ọrụ kredit ahụ na-enye akụkọ n'efu kwa izu n'ebe ahụ." },
      { objective: "O5", q: "Ebee ka ị nwere ike ịchọta ntuziaka n'efu gbasara ịnakọta ụgwọ na payday loan?", options: ["Mgbasa ozi na-apụta na mberede", "Ozi ederede onye aghụghọ", "consumerfinance.gov", "Ụlọ ahịa gift card"], answer: 2, why: "Consumer Financial Protection Bureau na-ebipụta ntuziaka n'efu." },
      { objective: "O5", q: "Kedu otu ị ga-esi chọta ebe VITA na-enye enyemaka ụtụ isi n'efu?", options: ["Jụọ onye ị na-amaghị", "Kwụọ ụgwọ mbụ", "Chere ka a kpọọ gị", "Jiri IRS VITA/TCE Locator ma ọ bụ kpọọ 800-906-9887"], answer: 3, why: "Ndị ahụ bụ ezi ụzọ IRS iji chọta ebe." },
      { objective: "O5", q: "Tupu i were payday loan ma ọ bụ app ego ngwa ngwa, ị kwesịrị:", options: ["Ịjụ ọnụ ahịa ya niile na dollar", "Ịbịanye aka ngwa ngwa", "Inye nbanye ụlọ akụ gị", "Ịghara ịgụ ya"], answer: 0, why: "Mbinye ego ndị a nwere ike ịfụ ego karịa ka ọ dị ka." },
      { objective: "O6", q: "Mmadụ na-ekwe nkwa uru crypto \"doro anya\". Nke a bụ:", options: ["Azụmahịa dị nchebe", "Ihe ịdọ aka na ntị nke aghụghọ a na-ahụkarị", "Nke FDIC kwadoro", "Enyemaka ụtụ isi n'efu"], answer: 1, why: "Nkwa ego doro anya bụ okwu ndị aghụghọ a ma ama." },
      { objective: "O6", q: "Ozi na-arịọ koodu e zitere n'ekwentị gị iji \"kwado ụlọ akụ gị\". Ị ga-:", options: ["Zipu ya", "Tinye ya n'ịntanetị", "Ghara ikesa ya mgbe ọ bụla ma kpọọ ụlọ akụ gị na nọmba ị maara", "Gụpụta ya n'olu dị elu"], answer: 2, why: "Koodu ahụ na-echebe akaụntụ gị." },
      { objective: "O6", q: "Maka mkpebi ego dị ukwuu, nzọụkwụ kacha mma bụ:", options: ["Ikwere azịza AI ọ bụla", "Iso ihe e dere na social media", "Ịjụ onye na-ere ya", "Ilele isi iyi gọọmentị ma ọ bụ gwa onye ndụmọdụ nonprofit n'efu okwu"], answer: 3, why: "Isi iyi gọọmentị na ezi ndị ndụmọdụ na-echebe gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 7, 9, 11, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ ego", objective: "O1", notYet: "Ego na-abata ma ọ bụ mmefu adịghị, ma ọ bụ a kaghị ihe dị mkpa na ihe a na-achọ akara.", meets: "Ego na-abata na mmefu nke otu ọnwa nwere ego a gbakọrọ agbakọ, nke ọ bụla kara akara dị ka ihe dị mkpa ma ọ bụ ihe a na-achọ, na ngụkọta.", exceeds: "Na-eji akwụkwọ ụgwọ ọrụ, akwụkwọ ụlọ akụ ma ọ bụ nnata ego mee ka ego ahụ dị nso n'eziokwu." },
      { name: "E ji AI mee ihe n'enweghị nsogbu", objective: "O2", notYet: "Prompt ahụ nwere nọmba akaụntụ, kaadị ma ọ bụ Social Security, ma ọ bụ e leleghị ngụkọta.", meets: "E kesara naanị ụdị mmefu a gbakọrọ agbakọ, e lelere ngụkọta, ma họrọ otu ebe a ga-echekwa ego.", exceeds: "Na-akọwa ihe mere o ji debe ma ọ bụ jụ aro AI ọ bụla." },
      { name: "Ebumnuche ichekwa ego", objective: "O3", notYet: "Enweghị ego ma ọ bụ ụbọchị.", meets: "Otu ebumnuche nwere ego, ụbọchị na ego kwa izu e lelere.", exceeds: "Na-akpọ aha ebe a ga-edebe ego ahụ na na gọọmentị etiti kwadoro ya." },
      { name: "Akụkọ kredit na enyemaka ụtụ isi", objective: "O5", notYet: "Ekwughị ebe a ga-enweta akụkọ ahụ ma ọ bụ enyemaka ụtụ isi.", meets: "Na-akpọ aha AnnualCreditReport.com na ebe VITA ma ọ bụ TCE a ga-eji.", exceeds: "Nwere adreesị ebe ụtụ isi ahụ na ihe a ga-eweta." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe na-agbaso atụmatụ ego ha ma malite ichekwa ego n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe lelere akụkọ kredit ha ma ọ bụ jiri enyemaka ụtụ isi VITA n'efu n'ime ọnwa 6",
      "Ndị na-amụ ihe kwuru na ha zere aghụghọ ego ma ọ bụ mbinye ego dị oke ọnụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa ọba akwụkwọ, na igwe mgbakọ (ekwentị nwere otu)",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Akwụkwọ ụgwọ ọrụ, akwụkwọ ụlọ akụ ma ọ bụ nnata ego nke otu ọnwa (debe ha na nzuzo)",
      "Akwụkwọ ma ọ bụ spreadsheet n'efu maka atụmatụ ego",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ndị na-amụ ihe na-edebe ezi nọmba ha na nzuzo; nye atụmatụ ego omume maka onye ọ bụla na-achọghị iji nke ya.",
      "Lelee prompt maka nọmba akaụntụ, kaadị ma ọ bụ Social Security tupu e zipu ha.",
      "Enyela ndụmọdụ itinye ego, ụtụ isi ma ọ bụ iwu; duru ndị na-amụ ihe gaa na weebụsaịtị gọọmentị, VITA ma ọ bụ onye ndụmọdụ nonprofit n'efu.",
      "Gosi AnnualCreditReport.com na VITA/TCE Locator ozugbo, ma mee ka ndị na-amụ ihe rịọ maka akụkọ naanị na ngwaọrụ nke ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
