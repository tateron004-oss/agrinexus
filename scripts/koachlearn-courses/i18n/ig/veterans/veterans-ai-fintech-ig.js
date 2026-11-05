"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-ai-fintech.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. No investment advice.

module.exports = {
  id: "veterans-ai-fintech-ig",
  lang: "ig",
  translationOf: "veterans-ai-fintech",
  category: "Veterans (military)",
  name: "AI na Teknụzụ Ego (Fintech)",
  skills: "Ịkọwa otu app ego si arụ ọrụ, Ịmata ihe e chebere na ihe a na-echebeghị, Ịlele app tupu i tụkwasị ya obi, Ịtọ ntọala nchekwa akaụntụ, Ịhụ na ịkọ aghụghọ fintech",
  outcome: "ịkọwa otu app ego si eji AI, ịlele ma ọ bụ ezi app na ma e chebere ego gị n'ime ya, ịtọ ntọala nchekwa ya, na ịhụ ma kọọ aghụghọ fintech a na-eme ndị agha ochie.",
  about: [
    "Teknụzụ ego, ma ọ bụ fintech, bụ app na weebụsaịtị ndị mmadụ na-eji eme ụlọ akụ, kwụọ ụgwọ, binye ego, mee budget ma tinye ego (invest). Ọtụtụ n'ime ha na-eji AI ugbu a n'azụ. Ndị aghụghọ na-elekarị ndị agha ochie (veterans) anya n'ihi ụgwọ ọnwa na enyemaka na-abịa mgbe niile, ya mere ịmata otu ngwa ndị a si arụ ọrụ na-echebe gị na ezinụlọ gị.",
    "N'ihe ọmụmụ a ị ga-amụta otu app ịkwụ ụgwọ, ụlọ akụ dijitalụ, robo-advisor na crypto si arụ ọrụ, ihe mkpuchi ego e debere (deposit insurance) na-echebe na ihe ọ naghị echebe, otu esi elele app tupu i tụkwasị ya obi, otu esi akpọchi akaụntụ gị, na otu esi ahụ ma kọọ aghụghọ. Nka ndị a na-enyekwa aka ma ọ bụrụ na ị chọrọ ọrụ n'ụlọ akụ ma ọ bụ na fintech.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ọmụmụ a na-akọwa otu ihe si arụ ọrụ na ihe egwu dị na ha; ọ naghị agwa gị ihe ị ga-azụ ma ọ bụ ebe ị ga-etinye ego. Maka mkpebi ego nke gị, gwa onye ọkachamara ruru eru, nke kwụụrụ onwe ya, ma ọ bụ onye ndụmọdụ ego ndị agha ma ọ bụ VA n'efu okwu."
  ],
  finalTask: "Mee Kaadị Nchekwa Fintech n'otu peeji maka otu app ego ị na-eji ma ọ bụ nke ị na-eche maka ya: ihe ọ na-eme na otu o si eji AI, ma FDIC na-echebe ego gị n'ime ya (na otu i si lelee ya), ntọala nchekwa ndị i gbanwuru, ihe ịdọ aka na ntị atọ nke aghụghọ, na ebe ị ga-akọ nsogbu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha ochie, ndị agha na-arụ ọrụ na ezinụlọ ha bụ ndị na-eji ma ọ bụ na-eche maka app ego maka ụlọ akụ, ịkwụ ụgwọ, ibinye ego, budget ma ọ bụ itinye ego. Ndị aghụghọ na-elekarị ndị agha ochie anya n'ihi ụgwọ ọnwa na enyemaka na-abịa mgbe niile.",
    startingPoint: "Ha na-eji smartphone na opekata mpe otu app ego ma ọ bụ app ịkwụ ụgwọ. Ọtụtụ amaghị ebe app na-edebe ego ha, ma e chebere ya, ma ọ bụ otu app ahụ si eji AI, mmadụ ole na ole gbanwurula ntọala nchekwa niile.",
    gap: "App ego nwere ike ịdị ka ụlọ akụ mana ọ bụghị ụlọ akụ, ndị aghụghọ na-emekwa ka ha bụ ụlọ akụ, ụlọ ọrụ gọọmentị na ohere itinye ego. Ndị na-amụ ihe kwesịrị ịlele ma app bụ eziokwu na ma e chebere ego na isi iyi gọọmentị, kpọchie akaụntụ ha, ma hụ ma kọọ aghụghọ fintech tupu ha atụfuo ego.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; anaghị atụ anya na onye ahụ mụtara banyere ego",
      "Ngwaọrụ: smartphone nwere app ego nke onye na-amụ ihe n'onwe ya",
      "Nzuzo: ọ dịghị okwuntughe, koodu ma ọ bụ nọmba akaụntụ zuru ezu na prompt AI ma ọ bụ omume ọ bụla",
      "Ọ dịghị ndụmọdụ itinye ego: a na-akọwa crypto na robo-advisor na ihe egwu ha, mkpebi na-agakwa n'aka onye ọkachamara ruru eru, nke kwụụrụ onwe ya",
      "Iwu na oke mkpuchi na-agbanwe, ya mere ndị na-amụ ihe na-elele fdic.gov, CFPB na FTC n'onwe ha"
    ],
    prerequisites: "Ọ dịghị. \"AI maka Ọganihu n'Ego na na Ndụ Gị\" bụ ihe ọmụmụ mbụ bara uru banyere budget na aghụghọ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị app ego dị na ekwentị gị", action: "ịmata ụdị fintech anọ na otu ụzọ nke ọ bụla si eji AI", standard: "ma kwuo ihe ị nwere ike ime mgbe mkpebi AI gbasara ego gị ezighi ezi" },
    { id: "O2", condition: "Maka otu app ego ị na-eji", action: "ịlele ma mkpuchi ego FDIC na-echebe ego dị n'ime app ahụ", standard: "site n'ịchọta ụlọ akụ ya na-arụkọ ọrụ (partner bank) na ịkwado ya na FDIC BankFind" },
    { id: "O3", condition: "Mgbe ị nụrụ banyere robo-advisor ma ọ bụ crypto", action: "ịkọwa otu nke ọ bụla si arụ ọrụ ma depụta ihe egwu ya ndị bụ isi", standard: "na-elele ndepụta ihe egwu ahụ na isi iyi gọọmentị dị ka FTC" },
    { id: "O4", condition: "Tupu i tinye ego n'ime app", action: "ime nlele nwere akụkụ ise n'app ahụ", standard: "na-ede ee ma ọ bụ mba maka akụkụ ọ bụla" },
    { id: "O5", condition: "N'otu app ego", action: "ịgbanwu nkwado nzọụkwụ abụọ na ọkwa ịkwụ ụgwọ ma wepụ ngwaọrụ ị na-amaghị", standard: "n'ekesaghị okwuntughe ma ọ bụ koodu ọ bụla" },
    { id: "O6", condition: "Mgbe e nyere gị ozi, oku ma ọ bụ onyinye gbasara ego", action: "ịmata ihe ịdọ aka na ntị nke aghụghọ fintech ma kọọ ya n'ebe kwesịrị ekwesị", standard: "n'ekesaghị koodu ọ bụla na n'akwụghị ụgwọ ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu fintech si arụ ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe fintech bụ na ebe AI dabara",
          minutes: 4,
          goal: "Kpọọ aha ụdị fintech anọ na otu ụzọ nke ọ bụla si eji AI.",
          text: [
            "Fintech pụtara teknụzụ ego: app na weebụsaịtị maka ego. Ụdị a na-ahụkarị bụ ụlọ akụ n'ekwentị, app ịkwụ ụgwọ maka iziga ndị mmadụ ego, app budget, ndị na-agbazinye ego n'ịntanetị na app itinye ego.",
            "A na-eji AI n'azụ: ịhụ wayo (kaadị e jiri n'obodo abụọ n'ime otu awa), ịza ajụjụ na chatbot, ikewa ego ị na-emefu n'otu n'otu, na inye aka ikpebi onye ga-enweta mbinye ego (loan).",
            "Mkpebi AI nwere ike ịbụ nke ezighi ezi. E nwere ike igbochi ezi ihe i zụrụ, ma ọ bụ jụ gị loan n'ihi ozi ezighi ezi. I nwere ikike ịjụ ihe kpatara ya na ịgbagha mperi; Consumer Financial Protection Bureau (CFPB, ụlọ ọrụ gọọmentị US na-echebe ndị na-eji ọrụ ego) na-akọwa ha."
          ],
          words: [["Fintech", "teknụzụ ego: app na weebụsaịtị maka ụlọ akụ, ịkwụ ụgwọ, ibinye ego, budget na itinye ego."], ["Nchọpụta wayo (fraud detection)", "ngwa na-elele ịkwụ ụgwọ ndị yiri ihe e zuru ezu ma ọ bụ adịgboroja."], ["Chatbot", "mmemme AI na-aza ajụjụ site na mkparịta ụka ederede."]],
          slides: [
            { title: "Fintech = app ego", bullets: ["Ụlọ akụ n'ekwentị na app ịkwụ ụgwọ", "App budget na ndị na-agbazinye ego n'ịntanetị", "App itinye ego"] },
            { title: "AI n'azụ", bullets: ["Ọ na-ahụ wayo", "Ọ na-aza ajụjụ na chatbot", "Ọ na-ekewa mmefu ego ma na-enye aka ikpebi loan"] },
            { title: "AI nwere ike ime mperi", bullets: ["E gbochiri ezi ihe i zụrụ", "E jụrụ loan n'ihi ozi ezighi ezi", "Ị nwere ike ịjụ ihe kpatara ya ma gbagha mperi"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (service members and veterans)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Depụta app ego niile dị na ekwentị gị. N'akụkụ nke ọ bụla, dee ụdị fintech ọ bụ na otu ụzọ o nwere ike isi jiri AI.",
          youCanNow: "ịkọwa ụdị fintech ndị bụ isi na otu ha si eji AI.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ ụdị fintech?", options: ["Akwụkwọ chekụ", "Ite ego n'ụlọ", "App ịkwụ ụgwọ na ekwentị gị", "Akwụkwọ akụkọ ụlọ akụ e bipụtara"], answer: 2, why: "Fintech pụtara app na weebụsaịtị maka ego, dị ka app ịkwụ ụgwọ, ụlọ akụ, budget na itinye ego." },
            { objective: "O1", q: "AI nke app ego gị kwuru na ụgwọ ụlọ gị nkịtị bụ wayo ma gbochie ya. Gịnị ka ị ga-eme?", options: ["Kpọtụrụ ụlọ ọrụ ahụ, jụọ ihe kpatara ya ma gbagha mperi ahụ", "Hichapụ app ahụ ma ghara ịkwụ ụgwọ ụlọ n'ịntanetị ọzọ", "Kesaa okwuntughe gị ka ha dozie ya", "Chere ma nwee olileanya na ọ ga-agafe"], answer: 0, why: "Mgbe mkpebi AI gbasara ego gị ezighi ezi, ị nwere ike ịjụ ihe kpatara ya ma gbagha ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ebe ego gị nọ n'ezie: ụlọ akụ, app na mkpuchi",
          minutes: 5,
          goal: "Lelee ma mkpuchi ego FDIC na-echebe ego dị n'ime app.",
          text: [
            "Mkpuchi ego FDIC na-echebe ego dị n'akaụntụ nchekwa (checking, savings, money market deposit account na CD) n'ụlọ akụ FDIC chebere. Mgbe anyị lelere fdic.gov n'October 2026, ego a na-echebekarị bụ opekata mpe $250,000 maka onye ọ bụla debere ego n'ụlọ akụ ọ bụla e chebere.",
            "Mkpuchi FDIC anaghị echebe stock, bond, mutual fund, annuity, mkpuchi ndụ (life insurance) ma ọ bụ crypto. Ọtụtụ app ịkwụ ụgwọ abụghị ụlọ akụ. Ego fọdụrụ n'ime app ahụ nwere ike ọ gaghị enwe mkpuchi ma ọ bụrụ na app ahụ etinyeghị ya n'akaụntụ ụlọ akụ e chebere maka gị.",
            "Iji lelee: gụọ peeji enyemaka nke app ahụ n'onwe ya maka aha ụlọ akụ ya na-arụkọ ọrụ, wee chọọ ụlọ akụ ahụ na ngwa BankFind nke FDIC na fdic.gov."
          ],
          steps: ["Meghee peeji enyemaka ma ọ bụ peeji iwu nke app ahụ ma chọọ \"FDIC\" na aha ụlọ akụ.", "Chọọ aha ụlọ akụ ahụ na FDIC BankFind na fdic.gov.", "Lelee ma e chebere ụdị ego gị (ego e debere, stock, crypto).", "Ọ bụrụ na o doghị gị anya, bufee ego mmefu gị n'akaụntụ ụlọ akụ e chebere."],
          words: [["FDIC", "Federal Deposit Insurance Corporation: na-echebe ego e debere n'ụlọ akụ e chebere ma ọ bụrụ na ụlọ akụ ahụ daa."], ["Akaụntụ nchekwa ego (deposit account)", "akaụntụ checking, savings, money market deposit ma ọ bụ CD n'ụlọ akụ."], ["BankFind", "ngwa n'efu nke FDIC iji lelee ma FDIC chebere ụlọ akụ."]],
          slides: [
            { title: "FDIC na-echebe ego e debere", bullets: ["Checking, savings, money market deposit, CD", "Opekata mpe $250,000 maka onye ọ bụla, n'ụlọ akụ ọ bụla (Oct 2026)"] },
            { title: "FDIC ANAGHỊ echebe", bullets: ["Stock, bond na mutual fund", "Annuity na mkpuchi ndụ", "Crypto"] },
            { title: "Lelee app gị", bullets: ["Chọta ụlọ akụ ya na-arụkọ ọrụ na peeji enyemaka", "Chọọ ya na FDIC BankFind", "O doghị gị anya? Debe ego n'ụlọ akụ e chebere"] }
          ],
          sources: [{ name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Họrọ otu app ego ị na-eji. Chọta ụlọ akụ ya na-arụkọ ọrụ na peeji enyemaka app ahụ ma lelee ụlọ akụ ahụ na FDIC BankFind. Dee ma e chebere ego dị n'ime ya.",
          youCanNow: "ịlele ma mkpuchi ego FDIC na-echebe ego dị n'ime app.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ FDIC BankFind?", options: ["App mbinye ego", "Ebe a na-azụ ma na-ere crypto", "Ngwa akara kredit (credit score)", "Ngwa FDIC iji lelee ma e chebere ụlọ akụ"], answer: 3, why: "BankFind na-ekwe ka ị kwado na FDIC chebere ụlọ akụ." },
            { objective: "O2", q: "App ịkwụ ụgwọ kwuru na ego gị \"dị mma\". Kedu otu ị ga-esi lelee ma e chebere ya?", options: ["Kwere mgbasa ozi app ahụ", "Chọta ụlọ akụ ya na-arụkọ ọrụ na peeji enyemaka ma chọọ ya na BankFind", "Jụọ ngwa enyemaka AI", "Chee na app niile bụ ụlọ akụ"], answer: 1, why: "Mkpuchi dabere ma app ahụ na-edebe ego gị n'ụlọ akụ e chebere, nke ị na-akwado na BankFind." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Otu robo-advisor na crypto si arụ ọrụ, na ihe egwu ha",
          minutes: 5,
          goal: "Kọwaa otu robo-advisor na crypto si arụ ọrụ ma kpọọ aha ihe egwu ha ndị bụ isi.",
          text: [
            "Robo-advisor bụ app na-eji iwu kọmputa etinye ego gị n'ihe itinye ego dabere n'azịza i nyere, dị ka ebumnuche gị na oge ole fọdụrụ tupu ị chọọ ego ahụ. Ọ na-ana ụgwọ ọrụ. Ihe itinye ego nwere ike ịla n'iyi, FDIC anaghịkwa echebe ha.",
            "Crypto (cryptocurrency) bụ ego dijitalụ e dere n'akwụkwọ ndekọ a na-ekerịta n'ịntanetị a na-akpọ blockchain. Ọnụ ahịa ya nwere ike ịrị elu ma daa ngwa ngwa. FTC (ụlọ ọrụ gọọmentị US na-echebe ndị ahịa) na-adọ aka na ntị na a naghị enwekarị ike ịlaghachi ego e ji crypto kwụọ, gọọmentị anaghịkwa echebe crypto otu o si echebe ego e debere n'ụlọ akụ.",
            "Ihe ọmụmụ a anaghị agwa gị ma ị ga-eji otu n'ime ha. Tupu mkpebi itinye ego ọ bụla, mụta ụgwọ na ihe egwu na peeji gọọmentị ma gwa onye ọkachamara ruru eru, nke kwụụrụ onwe ya, ma ọ bụ onye ndụmọdụ ego ndị agha ma ọ bụ VA n'efu."
          ],
          words: [["Robo-advisor", "app na-etinye ego site n'iwu kọmputa dabere n'azịza gị."], ["Cryptocurrency", "ego dijitalụ e dere na blockchain."], ["Blockchain", "ndekọ azụmahịa a na-ekerịta n'ịntanetị nke siri ike ịgbanwe."], ["Na-agbanwe agbanwe (volatile)", "ọnụ ahịa nwere ike ịrị elu ma daa nke ukwuu, ngwa ngwa."]],
          slides: [
            { title: "Robo-advisor", bullets: ["Ọ na-etinye ego site n'iwu kọmputa na azịza gị", "Ọ na-ana ụgwọ ọrụ", "O nwere ike ịla n'iyi; FDIC anaghị echebe ya"] },
            { title: "Crypto", bullets: ["Ego dijitalụ na blockchain", "Ọnụ ahịa nwere ike ịgbanwe nke ukwuu", "A naghị enwekarị ike ịlaghachi ego e kwụrụ"] },
            { title: "Tupu mkpebi ọ bụla", bullets: ["Mụta ụgwọ na ihe egwu na peeji gọọmentị", "Gwa onye ọkachamara ruru eru, nke kwụụrụ onwe ya", "Ihe ọmụmụ a anaghị enye ndụmọdụ itinye ego"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Jụọ ngwa enyemaka AI: \"Kọwaa otu robo-advisor si arụ ọrụ na otu crypto si arụ ọrụ, n'okwu dị mfe, na ihe egwu ndị bụ isi nke ọ bụla.\" Lelee ndepụta ihe egwu ya na peeji crypto nke FTC ma dee ihe ọ bụla ọ hapụrụ.",
          youCanNow: "ịkọwa otu robo-advisor na crypto si arụ ọrụ ma kpọọ aha ihe egwu ha ndị bụ isi.",
          quickCheck: [
            { objective: "O3", q: "Kedu otu robo-advisor si arụ ọrụ?", options: ["Ọ na-etinye ego site n'iwu kọmputa dabere n'azịza gị", "Onye ọrụ ụlọ akụ na-ahọrọ stock n'efu", "Ọ na-ekwe nkwa na ego gị ga-eto", "Ọ dị ka akaụntụ savings"], answer: 0, why: "Robo-advisor na-eji iwu kọmputa na azịza gị etinye ego; o nwere ihe egwu ahịa." },
            { objective: "O3", q: "Enyi gị kwuru na e chebere crypto \"dị ka akaụntụ ụlọ akụ\". Gịnị ka ị ga-agwa ya?", options: ["Nke ahụ bụ eziokwu", "Naanị na ngwụcha izu", "E chebeghị crypto dị ka ego e debere n'ụlọ akụ, ọnụ ahịa ya nwekwara ike ịgbanwe nke ukwuu", "A na-enwe ike ịlaghachi ego e ji crypto kwụọ mgbe niile"], answer: 2, why: "E chebeghị crypto dị ka ego e debere n'ụlọ akụ, ọnụ ahịa ya na-agbanwe, a naghịkwa enwekarị ike ịlaghachi ego e kwụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu fintech si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ọmụmaatụ AI na fintech?", options: ["Ọnụ ụzọ ụlọ akụ", "Ibipụta akwụkwọ chekụ", "Ịhụ kaadị e jiri n'obodo abụọ n'ime otu awa", "Akwụkwọ nnata ego"], answer: 2, why: "Ịchọpụta wayo bụ otu ụzọ a na-ejikarị AI." },
          { objective: "O1", q: "AI gbochiri ezi ihe i zụrụ na mperi. Gịnị ka ị nwere ike ime?", options: ["Jụọ ihe kpatara ya ma gbagha mperi ahụ", "Ọ dịghị ihe, okwu AI bụ nke ikpeazụ", "Mechie akaụntụ gị niile", "Tinye nọmba kaadị gị n'ịntanetị"], answer: 0, why: "I nwere ikike ịjụ ajụjụ na ịgbagha mperi." },
          { objective: "O2", q: "Dị ka fdic.gov si kwuo n'October 2026, kedu nke FDIC na-echebe n'ụlọ akụ e chebere?", options: ["Mutual fund", "Crypto", "Stock", "Akaụntụ savings"], answer: 3, why: "A na-echebe akaụntụ nchekwa ego dị ka savings." },
          { objective: "O2", q: "Kedu otu ị ga-esi lelee na FDIC chebere ụlọ akụ app na-arụkọ ọrụ?", options: ["Kwere mgbasa ozi app ahụ", "Chọọ ụlọ akụ ahụ na FDIC BankFind", "Jụọ onye ị na-amaghị", "Lelee na soshal midia"], answer: 1, why: "BankFind bụ ngwa gọọmentị nke FDIC." },
          { objective: "O3", q: "Gịnị ka FTC kwuru banyere ego e ji crypto kwụọ?", options: ["E chebere ha mgbe niile", "A naghị enwekarị ike ịlaghachi ha", "Ụlọ akụ na-ekwe nkwa maka ha", "Ha enweghị ihe egwu ọ bụla"], answer: 1, why: "FTC na-adọ aka na ntị na a naghị enwekarị ike ịlaghachi ego e ji crypto kwụọ." }
        ]
      }
    },
    {
      name: "Isi 2: Iji fintech n'enweghị nsogbu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịlele app tupu i tụkwasị ya obi",
          minutes: 5,
          goal: "Mee nlele nwere akụkụ ise n'app ego tupu i tinye ego n'ime ya.",
          text: [
            "Ndị aghụghọ na-eme app ego na weebụsaịtị adịgboroja yiri ezi ihe. Tupu i budata ma ọ bụ tinye ego, lelee onye na-arụ app ahụ na ma ọ bụ ezi app.",
            "Nweta app ahụ naanị site n'ezi ụlọ ahịa app ma lelee na aha onye mere ya (developer) dabara n'ezi ụlọ ọrụ ahụ. Gụọ weebụsaịtị ụlọ ọrụ ahụ n'onwe ya maka aha ya zuru ezu na ụlọ akụ ya na-arụkọ ọrụ. Lelee ụlọ akụ ahụ na FDIC BankFind. Chọọ aha ụlọ ọrụ ahụ na okwu \"complaints\" (mkpesa) ma lee ozi mkpesa CFPB.",
            "Ị nwere ike ịrịọ ngwa enyemaka AI ka ọ kọwaa ihe iwu app pụtara, mana ekwela AI mgbe ọ gwara gị na app dị mma. Lelee isi iyi gọọmentị n'onwe gị."
          ],
          steps: ["Budata naanị site n'ezi ụlọ ahịa app.", "Lelee na aha onye mere ya dabara n'ezi ụlọ ọrụ ahụ.", "Chọta aha ụlọ ọrụ ahụ zuru ezu na ụlọ akụ ya na-arụkọ ọrụ na weebụsaịtị ya.", "Lelee ụlọ akụ ahụ na FDIC BankFind.", "Chọọ mkpesa, gụnyere na consumerfinance.gov."],
          words: [["Onye mere app (developer)", "ụlọ ọrụ mere app, nke e gosiri n'ụlọ ahịa app."], ["Iwu ọrụ (terms of service)", "iwu na ụgwọ ị kwenyere mgbe ị na-eji app."]],
          slides: [
            { title: "App adịgboroja yiri ezi app", bullets: ["Lelee tupu i budata ma ọ bụ tinye ego"] },
            { title: "Nlele nwere akụkụ ise", bullets: ["Ezi ụlọ ahịa app, ezi onye mere ya", "Aha ụlọ ọrụ zuru ezu na ụlọ akụ ya na-arụkọ ọrụ", "FDIC BankFind maka ụlọ akụ ahụ", "Chọọ mkpesa"] },
            { title: "AI nwere ike ịkọwa, ọ pụghị ịkwado", bullets: ["Jụọ AI ihe iwu ahụ pụtara", "Lelee nchekwa na isi iyi gọọmentị n'onwe gị"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (complaints and rights)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }, { name: "FDIC: Deposit insurance (BankFind)", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Mee nlele nwere akụkụ ise n'otu app ego ị na-eji ma ọ bụ nke ị na-eche maka ya. Dee ee ma ọ bụ mba n'akụkụ ọ bụla.",
          youCanNow: "ịlele ma app ego bụ eziokwu tupu i nye ya ego gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu akụkụ mbụ nke nlele app nwere akụkụ ise?", options: ["Gụọ naanị ihe ndị mmadụ dere n'ịntanetị", "Budata naanị site n'ezi ụlọ ahịa app, site n'ezi onye mere ya", "Lelee ka app ahụ si maa mma", "Jụọ chatbot app ahụ ma ọ dị mma"], answer: 1, why: "App adịgboroja na-eṅomi ezi app, ya mere ị na-amalite site n'inweta ezi app n'ezi ụlọ ahịa." },
            { objective: "O4", q: "Ngwa enyemaka AI kwuru na app ego ọhụrụ \"dị mma n'ezie\". Gịnị ka ị ga-eme?", options: ["Tinye ego niile ị chekwara n'ime ya", "Kesaa app ahụ nye ndị enyi gị", "Hapụ nlele ndị ọzọ", "Mee nlele nwere akụkụ ise n'onwe gị na isi iyi gọọmentị"], answer: 3, why: "AI enweghị ike ịkwado n'ezie na app dị mma; ị na-elele isi iyi gọọmentị n'onwe gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịkpọchi akaụntụ ego gị",
          minutes: 5,
          goal: "Gbanwuo ntọala nchekwa ndị bụ isi n'app ego.",
          text: [
            "Were akaụntụ ego gị dị ka ebe a na-eche nche: nchekwa n'ọtụtụ ọkwa. Jiri okwuntughe siri ike, nke dị iche, maka akaụntụ ego ọ bụla, ma gbanwuo nkwado nzọụkwụ abụọ ka a chọọ koodu ma ọ bụ app iji banye.",
            "Gbanwuo ọkwa (alerts) ka app ahụ gwa gị maka ịkwụ ụgwọ ọ bụla, ịbanye ọ bụla ma ọ bụ mgbanwe ọ bụla n'ozi gị. Ọkwa na-abịa ngwa ngwa na-ekwe ka ị kwụsị wayo n'oge.",
            "Ekesala koodu ịbanye nye onye ọ bụla, ọbụlagodi onye kwuru na ọ si n'ụlọ akụ, VA ma ọ bụ app ahụ. Ezi ụlọ ọrụ anaghị arịọ ya. Edela okwuntughe ma ọ bụ nọmba akaụntụ zuru ezu n'ime ngwa enyemaka AI mgbe ọ bụla."
          ],
          steps: ["Tọọ okwuntughe siri ike, nke dị iche.", "Gbanwuo nkwado nzọụkwụ abụọ na ntọala nchekwa app ahụ.", "Gbanwuo ọkwa maka ịkwụ ụgwọ, ịbanye na mgbanwe.", "Lelee ngwaọrụ ejikọrọ ma wepụ ndị ị na-amaghị.", "Kwe onwe gị nkwa: agaghị m ekesa koodu ịbanye mgbe ọ bụla."],
          words: [["Nkwado nzọụkwụ abụọ (two-step verification)", "nlele nke abụọ, dị ka koodu ma ọ bụ nkwado n'app, a chọrọ iji banye."], ["Ọkwa (alert)", "ozi app na-ezite mgbe ihe mere n'akaụntụ gị."]],
          slides: [
            { title: "Nchekwa n'ọtụtụ ọkwa", bullets: ["Okwuntughe siri ike, nke dị iche", "Nkwado nzọụkwụ abụọ gbanwuru"] },
            { title: "Gbanwuo ọkwa", bullets: ["Ịkwụ ụgwọ ọ bụla", "Ịbanye ọ bụla", "Mgbanwe ọ bụla n'ozi gị"] },
            { title: "Ekesala mgbe ọ bụla", bullets: ["Koodu ịbanye, ya na onye ọ bụla", "Okwuntughe ma ọ bụ nọmba akaụntụ ya na ngwa AI"] }
          ],
          tryIt: "Meghee ntọala nchekwa n'otu app ego. Gbanwuo nkwado nzọụkwụ abụọ na ọkwa ịkwụ ụgwọ, ma wepụ ngwaọrụ ọ bụla ị na-amaghị.",
          youCanNow: "ịtọ ntọala nchekwa ndị bụ isi na-echebe akaụntụ ego.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere ị ga-eji gbanwuo ọkwa ịkwụ ụgwọ?", options: ["Inweta mgbasa ozi", "Ikesa ego dị n'akaụntụ gị nye ndị enyi", "Ịhụ na ịkwụsị wayo n'oge", "Ime ka app ahụ dị ngwa"], answer: 2, why: "Ọkwa na-agwa gị maka ịkwụ ụgwọ ọ bụla ka i wee jide wayo ngwa ngwa." },
            { objective: "O5", q: "Na ntọala nchekwa app gị, ị hụrụ ngwaọrụ ị na-amaghị. Gịnị ka ị ga-eme?", options: ["Wepụ ya ma gbanwee okwuntughe gị", "Hapụ ya; o nwere ike ịdị mma", "Gbanyụọ nkwado nzọụkwụ abụọ", "Tinye foto ihuenyo ya n'ịntanetị"], answer: 0, why: "Ngwaọrụ ị na-amaghị nwere ike ịbụ onye ọzọ nọ n'akaụntụ gị, ya mere ị na-ewepụ ya ma chekwaa akaụntụ ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhụ na ịkọ aghụghọ fintech",
          minutes: 5,
          goal: "Hụ ihe ịdọ aka na ntị nke aghụghọ fintech ma mara ebe ị ga-akọ ya.",
          text: [
            "FTC na-adọ aka na ntị na naanị ndị aghụghọ na-achọ ka a kwụọ ha n'crypto, naanị ndị aghụghọ na-ekwe nkwa uru ma ọ bụ nnukwu ọmụrụ nwa, ọrụ na-arịọ gị ka ị kwụọ ụgwọ crypto tupu ị malite bụkwa aghụghọ. Ndị mmadụ ị zutere n'ịhụnanya n'ịntanetị na-enye ndụmọdụ itinye ego bụkwa ihe ịdọ aka na ntị.",
            "Ndị aghụghọ na-emekwa ka ha bụ ụlọ akụ, ụlọ ọrụ gọọmentị ma ọ bụ VA ma kwuo na ego gị nọ n'ihe egwu. AI na-ekwe ka ha dee ozi zuru oke ma ọbụna ṅomie olu. Apịala njikọ ha ma ọ bụ kpọghachi nọmba ha nyere gị; jiri nọmba dị na weebụsaịtị gọọmentị ha ma ọ bụ na kaadị gị.",
            "Iji kọọ ya: dee mkpesa banyere ngwaahịa ego nye CFPB na consumerfinance.gov ma ọ bụ site n'ekwentị, ma kọọ wayo nye FTC na ReportFraud.ftc.gov. Gwa ụlọ akụ gị ozugbo ma ọ bụrụ na ego si n'akaụntụ gị pụọ."
          ],
          steps: ["Lezie anya maka: arịrịọ ịkwụ ụgwọ n'crypto, nkwa uru, ụgwọ a na-akwụ tupu, oku ngwa ngwa na-ekwu \"ego gị nọ n'ihe egwu\".", "Kwụsị. Apịala, akwụla ụgwọ, ekesakwala koodu.", "Kpọọ ụlọ ọrụ ahụ na nọmba si na weebụsaịtị ya ma ọ bụ kaadị gị.", "Gwa ụlọ akụ gị ozugbo ma ọ bụrụ na ego pụrụ.", "Kọọ ya nye CFPB ma ọ bụ ReportFraud.ftc.gov."],
          words: [["Aghụghọ onye na-eme ka ọ bụ onye ọzọ (impostor scam)", "mgbe onye aghụghọ na-eme ka ọ bụ ụlọ ọrụ, ụlọ ọrụ gọọmentị ma ọ bụ onye ị tụkwasịrị obi."], ["Nkwa uru (guaranteed returns)", "nkwa uru na-enweghị ihe egwu; ezi ihe itinye ego anaghị ekwe nkwa a mgbe ọ bụla."]],
          slides: [
            { title: "Ihe ịdọ aka na ntị FTC", bullets: ["Ha na-achọ ka a kwụọ n'crypto", "Nkwa uru ma ọ bụ nnukwu ọmụrụ nwa", "Ụgwọ crypto a na-akwụ tupu ọrụ"] },
            { title: "Ndị na-eme ka ha bụ onye ọzọ na-eji AI", bullets: ["Ozi zuru oke na olu e ṅomiri", "Apịala njikọ ha, akpọla nọmba ha", "Jiri ezi nọmba gọọmentị"] },
            { title: "Kọọ ya", bullets: ["Gwa ụlọ akụ gị ozugbo", "Mkpesa CFPB: consumerfinance.gov", "FTC: ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "CFPB: Military financial lifecycle (submit a complaint)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Ọrụ ikpeazụ: mee Kaadị Nchekwa Fintech gị n'otu peeji maka otu app: ihe ọ na-eme na otu o si eji AI, ma e chebere ego gị na otu i si lelee ya, ntọala nchekwa ndị i gbanwuru, ihe ịdọ aka na ntị atọ nke aghụghọ, na ebe ị ga-akọ nsogbu.",
          youCanNow: "ịghọta otu app ego si arụ ọrụ, ịlele ma chekwaa ya, na ịhụ ma kọọ aghụghọ fintech.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ihe ịdọ aka na ntị nke aghụghọ fintech?", options: ["Akwụkwọ akụkọ ọnwa ị tụrụ anya ya", "Oge mmeghe ụlọ akụ e dere n'ọnụ ụzọ", "Akwụkwọ nnata maka ihe i zụrụ", "Ịmanye gị ka ị bufee ego gị ngwa ngwa n'akaụntụ \"dị mma\""], answer: 3, why: "Ime ka ị bufee ego ngwa ngwa n'akaụntụ \"dị mma\" bụ aghụghọ a ma ama nke onye na-eme ka ọ bụ onye ọzọ." },
            { objective: "O6", q: "Ozi ederede si n'\"ụlọ akụ gị\" nwere njikọ ka ị dozie nsogbu. Gịnị ka ị ga-eme?", options: ["Pịa njikọ ahụ ma banye", "Apịala ya; kpọọ ụlọ akụ ahụ na nọmba dị na weebụsaịtị ya ma ọ bụ na kaadị gị", "Zaa ya na nọmba akaụntụ gị", "Zigara ya ndị enyi gị"], answer: 1, why: "Ị na-akpọtụrụ ụlọ ọrụ ahụ n'onwe gị site na nọmba ị tụkwasịrị obi, ọ bụghị nke dị n'ozi ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji fintech n'enweghị nsogbu",
        questions: [
          { objective: "O4", q: "Ebee ka ị kwesịrị ibudata app ego?", options: ["Weebụsaịtị ọ bụla", "Njikọ n'ozi onye ị na-amaghị zitere", "Mgbasa ozi na-apụta na mberede", "Ezi ụlọ ahịa app, site n'ezi ụlọ ọrụ ahụ"], answer: 3, why: "Ezi ụlọ ahịa app na ezi onye mere ya na-ebelata app adịgboroja." },
          { objective: "O4", q: "Ngwa enyemaka AI ọ nwere ike ịgwa gị n'ezie na app dị mma?", options: ["Mba; lelee isi iyi gọọmentị n'onwe gị", "Ee, mgbe niile", "Naanị na ngwụcha izu", "Naanị maka app crypto"], answer: 0, why: "AI nwere ike ịkọwa iwu mana ọ pụghị ịkwado nchekwa." },
          { objective: "O5", q: "Gịnị ka nkwado nzọụkwụ abụọ na-eme?", options: ["Ọ na-ewepụ okwuntughe gị", "Ọ na-eme ka ego gị mụbaa okpukpu abụọ", "Ọ na-achọ nlele nke abụọ, dị ka koodu, iji banye", "Ọ na-ekesa akaụntụ gị"], answer: 2, why: "Nlele nke abụọ na-egbochi ndị zuru okwuntughe gị." },
          { objective: "O6", q: "Mmadụ kwuru na ọ si n'ụlọ akụ gị ma rịọ koodu ịbanye e zitere n'ekwentị gị. Ị ga:", options: ["Itinye ya n'ịntanetị", "Ịgụrụ ya ya", "Iziga ya ya n'ozi ederede", "Ịghara ikesa ya mgbe ọ bụla; kpọọ ụlọ akụ ahụ na ezi nọmba ya"], answer: 3, why: "Ezi ụlọ ọrụ anaghị arịọ koodu ịbanye gị mgbe ọ bụla." },
          { objective: "O6", q: "Dị ka FTC si kwuo, kedu nke bụ ihe ịrịba ama nke aghụghọ?", options: ["Akwụkwọ nnata si n'ụlọ ahịa", "Akwụkwọ akụkọ ụlọ akụ kwa ọnwa", "Nkwa nnukwu uru e kwere n'aka", "Ọkwa i tọrọ n'onwe gị"], answer: 2, why: "Naanị ndị aghụghọ na-ekwe nkwa uru." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI na Teknụzụ Ego (Fintech)",
    questions: [
      { objective: "O1", q: "Fintech pụtara:", options: ["Teknụzụ mara mma", "Teknụzụ ego: app na weebụsaịtị maka ego", "Teknụzụ egwuregwu ahụ", "Ụdị igbe nchekwa ego ụlọ akụ"], answer: 1, why: "Ọ gụnyere teknụzụ ụlọ akụ, ịkwụ ụgwọ, ibinye ego, budget na itinye ego." },
      { objective: "O1", q: "Kedu ụzọ a na-ejikarị AI n'app ego?", options: ["Ikewa ego ị na-emefu n'otu n'otu", "Ibipụta ego", "Imeghe ọnụ ụzọ ụlọ akụ", "Iziga akwụkwọ akụkọ n'ozi"], answer: 0, why: "AI na-ekewa mmefu ego n'app budget." },
      { objective: "O1", q: "E jụrụ loan n'ihi ozi ezighi ezi. Ị nwere ike:", options: ["Ịkwụ onye ị na-amaghị ụgwọ ka o dozie ya", "Ọ dịghị ihe ime", "Ịjụ ihe kpatara ya ma gbagha mperi ahụ", "Inye chatbot okwuntughe gị"], answer: 2, why: "I nwere ikike ịgbagha mperi." },
      { objective: "O1", q: "Kedu ụlọ ọrụ gọọmentị na-akọwa ikike gị n'ngwaahịa ego ma na-anabata mkpesa?", options: ["Consumer Financial Protection Bureau (CFPB)", "Ụlọ ọrụ nzipu akwụkwọ ozi (Postal Service)", "NASA", "National Park Service"], answer: 0, why: "CFPB na-ahụ maka mkpesa gbasara ego ndị ahịa." },
      { objective: "O2", q: "Mkpuchi FDIC na-echebe:", options: ["Ego ọ bụla dị n'app", "Crypto niile", "Stock niile", "Ego e debere n'ụlọ akụ FDIC chebere"], answer: 3, why: "Ọ na-echebe akaụntụ nchekwa ego n'ụlọ akụ e chebere." },
      { objective: "O2", q: "Dị ka fdic.gov si kwuo n'October 2026, ego a na-echebekarị bụ opekata mpe:", options: ["$2,500", "$250,000 maka onye ọ bụla debere ego, n'ụlọ akụ ọ bụla e chebere", "$25,000", "Enweghị oke"], answer: 1, why: "Peeji FDIC kwuru opekata mpe $250,000 n'ụlọ akụ ọ bụla e chebere." },
      { objective: "O2", q: "Ego dị n'app ịkwụ ụgwọ, FDIC ọ na-echebe ya mgbe niile?", options: ["Ee, mgbe niile", "Mba; ọ dabere ma app ahụ na-edebe ya n'ụlọ akụ e chebere", "Naanị na Fraịde", "Naanị ma ọ bụrụ crypto"], answer: 1, why: "Ọtụtụ app ịkwụ ụgwọ abụghị ụlọ akụ." },
      { objective: "O2", q: "BankFind bụ:", options: ["Ebe a na-ahụ ọrụ", "Akpa crypto (crypto wallet)", "App mbinye ego", "Ngwa FDIC iji lelee ma e chebere ụlọ akụ"], answer: 3, why: "BankFind dị na fdic.gov." },
      { objective: "O3", q: "Robo-advisor bụ:", options: ["App na-etinye ego site n'iwu kọmputa dabere n'azịza gị", "Robot ụlọ akụ na-enye ego", "Loan gọọmentị n'efu", "Mkpuchi (insurance)"], answer: 0, why: "Ọ na-etinye ego n'onwe ya maka ụgwọ ọrụ." },
      { objective: "O3", q: "Kedu nke bụ eziokwu banyere crypto?", options: ["FDIC na-echebe ya", "E kwere nkwa na ọ ga-arị elu", "Ọnụ ahịa ya nwere ike ịgbanwe nke ukwuu, e chebeghịkwa ya dị ka ego e debere n'ụlọ akụ", "Ọ dị mfe ịlaghachi ego e ji ya kwụọ"], answer: 2, why: "Crypto na-agbanwe agbanwe, e chebeghịkwa ya dị ka ego e debere." },
      { objective: "O3", q: "Tupu mkpebi itinye ego ọ bụla, ihe ọmụmụ a kwuru ka ị:", options: ["Tinye ego niile otu mgbe", "Mee ihe AI kwuru", "Soro ndụmọdụ si na soshal midia", "Mụta ụgwọ na ihe egwu ma gwa onye ọkachamara ruru eru, nke kwụụrụ onwe ya"], answer: 3, why: "Ihe ọmụmụ a na-akọwa, ọ naghị enye ndụmọdụ." },
      { objective: "O4", q: "Akụkụ mbụ nke nlele app bụ:", options: ["Kesaa ya nye ndị enyi", "Buru ụzọ tinye ego", "Budata naanị site n'ezi ụlọ ahịa app, site n'ezi onye mere ya", "Gbanyụọ ọkwa"], answer: 2, why: "App adịgboroja jupụtara n'ebe na-abụghị ezi ụlọ ahịa." },
      { objective: "O4", q: "Ebee ka ị ga-ahụ ụlọ akụ app na-arụkọ ọrụ?", options: ["Mgbasa ozi ọ bụla", "Weebụsaịtị ụlọ ọrụ ahụ n'onwe ya ma ọ bụ peeji enyemaka ya", "Ozi ederede", "Ihe AI chere"], answer: 1, why: "Peeji gọọmentị nke ụlọ ọrụ ahụ na-akpọ aha ụlọ akụ ahụ." },
      { objective: "O5", q: "Kedu nke bụ nzọụkwụ nchekwa siri ike?", options: ["Ịgbanwu nkwado nzọụkwụ abụọ", "Iji otu okwuntughe ebe niile", "Ikesa koodu nye ndị enyemaka", "Ịgbanyụ ọkwa"], answer: 0, why: "Nzọụkwụ nke abụọ na-egbochi ịbanye site n'okwuntughe e zuru ezu." },
      { objective: "O5", q: "Gịnị mere ị ga-eji gbanwuo ọkwa ịkwụ ụgwọ?", options: ["Ime ka ekwentị gị dị nwayọọ", "Inweta mgbasa ozi ndị ọzọ", "Ịhụ na ịkwụsị wayo n'oge", "Ikesa ego dị n'akaụntụ gị"], answer: 2, why: "Ọkwa na-abịa ngwa ngwa na-ekwe ka i mee ihe ozugbo." },
      { objective: "O5", q: "Kedu ihe ị na-ekwesịghị ide MGBE Ọ BỤLA n'ime ngwa enyemaka AI?", options: ["Okwuntughe gị ma ọ bụ nọmba akaụntụ gị zuru ezu", "\"Kọwaa mkpuchi FDIC\"", "\"Gịnị bụ robo-advisor?\"", "\"Depụta ihe ịdọ aka na ntị nke aghụghọ\""], answer: 0, why: "Ozi ego nzuzo kwesịrị ịnọ n'ebe ngwa AI na-adịghị." },
      { objective: "O6", q: "Onye kpọrọ oku kwuru na ego gị nọ n'ihe egwu na ị ga-ebufe ya n'akaụntụ crypto \"dị mma\". Nke a bụ:", options: ["Mmelite nchekwa", "Omume ụlọ akụ nkịtị", "Enyemaka VA", "Aghụghọ onye na-eme ka ọ bụ onye ọzọ"], answer: 3, why: "FTC na-adọ aka na ntị na ndị a bụ aghụghọ." },
      { objective: "O6", q: "Ọrụ na-arịọ gị ka ị kwụọ ụgwọ crypto tupu ị malite. Nke a bụ:", options: ["Usoro nkịtị nke iwe mmadụ n'ọrụ", "Aghụghọ, dị ka FTC si kwuo", "Ụgwọ ọzụzụ VA na-akwụ", "Ụtụ isi"], answer: 1, why: "FTC kwuru na ụgwọ crypto a na-akwụ tupu ọrụ bụ aghụghọ." },
      { objective: "O6", q: "Kedu otu ị ga-esi kpọghachi ụlọ ọrụ banyere ozi ị na-enyo enyo?", options: ["Jiri nọmba dị n'ozi ahụ", "Jiri nọmba dị na weebụsaịtị ya ma ọ bụ na kaadị gị", "Zaa ozi ederede ahụ", "Jụọ onye kpọrọ oku ka o nye gị nọmba"], answer: 1, why: "Ndị aghụghọ na-enye nọmba adịgboroja." },
      { objective: "O6", q: "Ebee ka ị nwere ike ịkọ wayo nye FTC?", options: ["Chatbot AI", "Okwu n'okpuru post na soshal midia", "Weebụsaịtị onye aghụghọ ahụ", "ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov bụ saịtị FTC maka ịkọ wayo." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 6, 7, 9, 11, 13, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ihe ọ na-eme na otu o si eji AI", objective: "O1", notYet: "Kaadị ahụ ekwughị ihe app ahụ na-eme ma ọ bụ otu o si eji AI.", meets: "Kaadị ahụ kpọrọ aha ụdị fintech ahụ na otu ụzọ app ahụ si eji AI.", exceeds: "Ọ na-ekwukwa ihe ị ga-eme ma ọ bụrụ na AI nke app ahụ emee mkpebi ezighi ezi." },
      { name: "Elelere mkpuchi", objective: "O2", notYet: "Ọ na-ekwu na e chebere ego ahụ n'eleleghị ya, ma ọ bụ na-eche echiche.", meets: "Ọ na-akpọ aha ụlọ akụ ahụ na-arụkọ ọrụ na ma FDIC chebere ya, nke e lelere na BankFind.", exceeds: "Ọ na-ekwu akụkụ ego nke e chebere na nke a na-echebeghị, na ebe e kwadoro ya." },
      { name: "Ntọala nchekwa", objective: "O5", notYet: "Ọ dịghị ntọala nchekwa e gbanwuru.", meets: "Nkwado nzọụkwụ abụọ na ọkwa ịkwụ ụgwọ gbanwuru, e wepụkwara ngwaọrụ a na-amaghị.", exceeds: "Ọ na-edekwa otu ntọala ọzọ e gbanwuru, dị ka mkpọchi kaadị ma ọ bụ oke mmefu ego." },
      { name: "Ihe ịrịba ama aghụghọ na ịkọ ya", objective: "O6", notYet: "Ihe ịdọ aka na ntị erughị atọ, ma ọ bụ enweghị ebe a ga-akọ ya.", meets: "Ihe ịdọ aka na ntị atọ nke aghụghọ na ebe a ga-akọ nsogbu.", exceeds: "Ọ gụnyere otu esi akpọghachi ụlọ ọrụ ahụ na nọmba a tụkwasịrị obi." },
      { name: "Elelere app", objective: "O4", notYet: "E leleghị app ahụ tupu e jiri ya.", meets: "E mere nlele nwere akụkụ ise, dee ee ma ọ bụ mba maka akụkụ ọ bụla.", exceeds: "Onye na-amụ ihe na-akọwa ihe ọ ga-eme ma ọ bụrụ na akụkụ ọ bụla bụ mba." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha gbanwuru nkwado nzọụkwụ abụọ na ọkwa n'app ego ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha hụrụ ma zere aghụghọ fintech",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara ego ma ọ bụ nchekwa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere app ego nke onye na-amụ ihe n'onwe ya",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Weebụsaịtị FDIC BankFind, CFPB na FTC n'efu",
      "Akwụkwọ ma ọ bụ dokumentị maka Kaadị Nchekwa Fintech n'otu peeji",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ndị na-amụ ihe na-agbanwe ntọala na ekwentị nke ha; ejila mgbe ọ bụla rịọ ịhụ ego dị n'akaụntụ, okwuntughe ma ọ bụ koodu.",
      "Atụla aro app, ihe itinye ego ma ọ bụ crypto; zigara ajụjụ itinye ego n'aka onye ọkachamara ruru eru, nke kwụụrụ onwe ya.",
      "Gosi ozi ederede aghụghọ e chepụtara echepụta na klas, wee mee omume ịkpọghachi na ezi nọmba gọọmentị.",
      "Jiri rubric tụọ akara Kaadị Nchekwa Fintech, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Ndị ezinụlọ nwere ike isonye, n'ihi na ndị aghụghọ na-elekarị di ma ọ bụ nwunye na ndị nne na nna anya."
    ]
  }
};
