"use strict";

// Koach Learn course (Igbo translation of shared/crypto-and-blockchain.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. It explains how crypto works and its risks; it does NOT recommend buying.

const FTC_CRYPTO = { name: "FTC: Ihe ị kwesịrị ịmara gbasara cryptocurrency na aghụghọ", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };
const SEC_TCR = { name: "SEC: Zipu ozi ma ọ bụ mkpesa", url: "https://www.sec.gov/tcr" };
const CFTC_COMPLAINT = { name: "CFTC: Zipu mkpesa", url: "https://www.cftc.gov/complaint" };

module.exports = {
  id: "crypto-and-blockchain-ig",
  lang: "ig",
  translationOf: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Ịghọta Cryptocurrency na Blockchain",
  skills: "Ịkọwa blockchain n'okwu dị mfe, Ịkọwa otu e si eziga na echekwa crypto, Ịkpọ aha ihe egwu ya, Ịhụ aghụghọ crypto, Ịkọ akụkọ aghụghọ",
  outcome: "ịkọwa n'okwu dị mfe otu blockchain na cryptocurrency si arụ ọrụ, ịkpọ aha ihe egwu ndị bụ isi, na ịlele onyinye ma ọ bụ ozi crypto ọ bụla megide ihe ịdọ aka na ntị nke aghụghọ, ka i wee kpebie n'onwe gị nke ọma ma mara ebe ị ga-akọ akụkọ wayo.",
  about: [
    "Ị na-anụ maka Bitcoin na crypto na akụkọ, n'ọrụ, n'aka ezinụlọ gị na na mgbasa ozi. Ụfọdụ mmadụ na-enweta ego; ọtụtụ na-atụfu ya, crypto bụkwa otu n'ime ụzọ ndị aghụghọ na-ejikarị arịọ ka a kwụọ ha ụgwọ. Ihe ọmụmụ a na-akọwa otu o si arụ ọrụ ka ị ghọta ya ma chebe onwe gị na ndị ị hụrụ n'anya.",
    "N'Isi 1, ị ga-amụta ihe blockchain bụ, ihe cryptocurrency bụ, na otu wallet na igodo si arụ ọrụ. N'Isi 2, ị ga-amụta ihe egwu ya, ihe ịdọ aka na ntị nke aghụghọ crypto, na ebe ị ga-akọ akụkọ wayo.",
    "Ihe ọmụmụ a anaghị agwa gị ma ị ga-azụ crypto. Ọ bụghị ndụmọdụ gbasara ego. Maka mkpebi gbasara ego, gwa onye ọkachamara nwere akwụkwọ ikike nke gị onwe gị họọrọ okwu. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise; e nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee \"kaadị nchekwa crypto\" nwere otu peeji maka onwe gị ma ọ bụ onye ezinụlọ gị: ahịrịokwu abụọ gbasara ihe blockchain na cryptocurrency bụ, ihe egwu atọ, ihe ịdọ aka na ntị anọ nke aghụghọ crypto, na ebe gọọmentị ebe a na-akọ akụkọ wayo. Wee gụọ otu ezi mgbasa ozi ma ọ bụ ozi crypto (site na email, ozi ederede ma ọ bụ soshal midia) ma kara ihe ịdọ aka na ntị ndị ọ na-egosi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-anụ maka Bitcoin na crypto na akụkọ, n'ọrụ, n'aka ezinụlọ na na mgbasa ozi: ndị agadi, ụmụ ha toro eto na ndị na-elekọta ha, ndị ntorobịa ka malitere iji app ego, na ndị obodo chọrọ ichebe onwe ha na ndị ọzọ.",
    startingPoint: "Ha nwere ike iji ekwentị maka ozi, email na soshal midia, ụfọdụ na-ejikwa app ụlọ akụ ma ọ bụ kaadị debit. Ọtụtụ enweghị ike ikwu ihe blockchain ma ọ bụ recovery phrase bụ, otu crypto si dị iche na ego dị n'ụlọ akụ, ma ọ bụ otu aghụghọ crypto si arụkarị ọrụ.",
    gap: "Crypto bụ otu n'ime ụzọ ndị aghụghọ na-ejikarị arịọ ka a kwụọ ha ụgwọ, a pụghịkwa ịlaghachi ụgwọ crypto n'ọtụtụ oge. Ndị na-aghọtaghị ya nwere ike ịtụfu ego ha chekwara n'itinye ego adịgboroja, aghụghọ ịhụnanya, ndị na-eme ka ha bụ gọọmentị na aghụghọ nweghachi ego, ma ọ bụ kesaa recovery phrase ma tụfuo ihe niile.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-eji ihe atụ nke ndụ kwa ụbọchị akọwa okwu crypto ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa iji gụọ peeji ịdọ aka na ntị gọọmentị; ọ dịghị mkpa app ma ọ bụ akaụntụ crypto",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, ihe dị ka nkeji 60 n'ozuzu",
      "Ọ bụghị ndụmọdụ ego: ihe ọmụmụ a anaghị agwa ndị na-amụ ihe ka ha zụta ma ọ bụ ree; mkpebi ego na-aga n'aka onye ọkachamara nwere ikike nke onye na-amụ ihe họọrọ",
      "Nzuzo na nchekwa: ndị na-amụ ihe anaghị ekesa recovery phrase ma ọ bụ private key mgbe ọ bụla, ha anaghịkwa eziga ego mgbe ha na-eme omume"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ihe atụ akwụkwọ ndetu a na-ekerịta", action: "ịkọwa ihe blockchain bụ, gụnyere okwu block, chain na decentralized", standard: "n'ahịrịokwu abụọ ma ọ bụ atọ dị mfe, n'enweghị mperi gbasara otu e si edebe ndekọ" },
    { id: "O2", condition: "N'enweghị ndetu", action: "ịkọwa ihe cryptocurrency bụ ma depụta otu o si dị iche na ego dị n'akaụntụ ụlọ akụ nwere mkpuchi", standard: "na-akpọ aha opekata mpe ihe atọ dị iche, gụnyere na a pụghị ịlaghachi ụgwọ crypto n'ọtụtụ oge" },
    { id: "O3", condition: "Mgbe e nyere gị okwu wallet, public address, recovery phrase na exchange", action: "ịkọwa ihe nke ọ bụla bụ ma mata ndị a na-agaghị ekesa mgbe ọ bụla", standard: "na nke ọ bụla kọwara nke ọma, ma recovery phrase na private key ka bụrụ nzuzo mgbe niile" },
    { id: "O4", condition: "N'enweghị ndetu", action: "ịkpọ aha ihe egwu anọ bụ isi nke crypto na otu ụzọ isi chebe onwe gị pụọ na nke ọ bụla", standard: "na ihe egwu anọ ahụ niile (ọnụahịa, ntụfu, ụlọ ọrụ na aghụghọ) kpọrọ aha nke ọma" },
    { id: "O5", condition: "Mgbe e nyere gị ezi mgbasa ozi, ozi ma ọ bụ post crypto", action: "ịlele ya megide ihe ịdọ aka na ntị nke aghụghọ crypto ma họrọ ụzọ dị nchebe isi zaa ya", standard: "na-akara ihe ịdọ aka na ntị ọ bụla ọ na-egosi ma na-ahọrọ ịkwụsị, ịghara ịkwụ ụgwọ na ịgwa onye ị tụkwasịrị obi" },
    { id: "O6", condition: "Mgbe e nyere gị aghụghọ crypto mere gị ma ọ bụ onye ị maara", action: "idepụta ebe gọọmentị ebe a ga-akọ ya na ihe ndị a ga-edetu", standard: "na-akpọ aha opekata mpe saịtị gọọmentị abụọ maka ịkọ akụkọ na opekata mpe ihe anọ a ga-edetu" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu crypto na blockchain si arụ ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe blockchain bụ",
          minutes: 5,
          goal: "Kọwaa blockchain n'okwu dị mfe site n'iji ihe atụ dị mfe.",
          text: [
            "Chee echiche akwụkwọ ndetu ụgwọ nke puku kwụsị kọmputa ọ bụla nwere otu nnomi ya. Mgbe nkeji ole na ole gafere, a na-agbakwunye peeji ụgwọ ọhụrụ. A na-eji ụdị akara mkpịsị aka mgbakọ (math) kpọchie peeji ọ bụla na peeji bu ya ụzọ, ya mere ọ bụrụ na mmadụ agbanwee peeji ochie, nnomi ndị ọzọ niile ga-egosi na ọ dabaghị.",
            "Akwụkwọ ndetu ahụ a na-ekerịta bụ blockchain. Peeji ọ bụla bụ block, a na-ejikọkwa peeji ndị ahụ n'usoro dị ka chain (agbụ). Ọ dịghị otu ụlọ akụ ma ọ bụ ụlọ ọrụ na-edebe akwụkwọ ndetu ahụ; netwọkụ kọmputa ahụ na-edebe ya. A na-akpọ nke a decentralized.",
            "N'ihi otu e si hazie ya, ụgwọ e dere na blockchain na-esi ike nke ukwuu ịgbanwe ma ọ bụ ịlaghachi. Ọtụtụ blockchain bụkwa nke ọha: onye ọ bụla nwere ike ilele ụgwọ ndị ahụ, ọ bụrụgodị na e gosighị aha ndị nọ n'azụ ha."
          ],
          words: [["Blockchain", "ndekọ azụmahịa a na-ekerịta, nke ọtụtụ kọmputa na-edebe, ebe e jikọtara block ọhụrụ ọ bụla na nke bu ya ụzọ."], ["Block", "otu ìgwè azụmahịa a na-agbakwunye na blockchain ọnụ."], ["Decentralized", "nke netwọkụ ọtụtụ kọmputa na-achịkwa kama otu ụlọ akụ ma ọ bụ ụlọ ọrụ."], ["Ledger", "ndekọ ụgwọ, dị ka akwụkwọ akaụntụ."]],
          slides: [
            { title: "Chee echiche akwụkwọ ndetu a na-ekerịta", bullets: ["Puku kwụsị kọmputa nwere nnomi ya", "A na-agbakwunye peeji ụgwọ ọhụrụ mgbe niile", "E kpọchiri peeji ọ bụla na nke bu ya ụzọ"] },
            { title: "Okwu blockchain", bullets: ["Block = otu peeji ụgwọ", "Chain = peeji ndị e jikọtara n'usoro", "Decentralized = ọ dịghị otu ụlọ akụ na-achị ya"] },
            { title: "Ihe nke a pụtara maka gị", bullets: ["Ụgwọ na-esi ike nke ukwuu ịgbanwe ma ọ bụ ịlaghachi", "Ọtụtụ blockchain bụ ndekọ ọha"] }
          ],
          tryIt: "Kọwaara mmadụ blockchain (ma ọ bụ kwuo ya n'olu dị elu nye onwe gị) site n'iji ihe atụ akwụkwọ ndetu a na-ekerịta. Tinye okwu block, chain na decentralized.",
          youCanNow: "ịkọwa ihe blockchain bụ na ihe mere ndekọ ya ji esi ike ịgbanwe.",
          quickCheck: [
            { objective: "O1", q: "N'ihe atụ akwụkwọ ndetu a na-ekerịta, gịnị bụ block?", options: ["Akwụkwọ ndetu ahụ niile", "Ụlọ akụ nwere akwụkwọ ndetu ahụ", "Otu peeji ụgwọ a gbakwunyere n'akwụkwọ ndetu ahụ", "Okwuntughe nke akwụkwọ ndetu ahụ"], answer: 2, why: "Peeji ụgwọ ọ bụla bụ block, a na-ejikọkwa peeji ndị ahụ n'usoro." },
            { objective: "O1", q: "Mmadụ gwara gị na ọ nwere ike ịgbanwe ụgwọ ochie na blockchain ọha na nzuzo. Gịnị ka ị ga-eche?", options: ["Ọ gaghị ekwe omume, n'ihi na nnomi ndị ọzọ agaghị adaba", "Ọ dị mfe, n'ihi na otu ụlọ ọrụ na-edebe akwụkwọ ndetu ahụ", "Ọ bụ ihe nkịtị, n'ihi na blockchain bụ nzuzo", "Ọ bụ eziokwu, n'ihi na e jikọtaghị block ndị ahụ"], answer: 0, why: "E kpọchiri block ọ bụla na nke bu ya ụzọ, ya mere peeji a gbanwere agaghị adaba na nnomi ndị ọzọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ihe cryptocurrency bụ",
          minutes: 5,
          goal: "Kọwaa ihe cryptocurrency bụ na otu o si dị iche na dọla dị n'ụlọ akụ.",
          text: [
            "Cryptocurrency (crypto) bụ ego dijitalụ e dere na blockchain. Bitcoin bụ nke mbụ; ugbu a e nwere ọtụtụ puku, dị ka Ether. Stablecoin bụ ụdị crypto e mere ka ọ nọrọ nso n'uru ego nkịtị dị ka dọla US, mana ọ ka nwere ike ịda.",
            "Ọ bụghị gọọmentị na-ewepụta crypto, ọnụahịa ya na-arị elu ma na-agbada dịka ihe ndị mmadụ dị njikere ịkwụ. Ọnụahịa nwere ike ịrị elu ma ọ bụ daa nke ukwuu n'otu ụbọchị.",
            "Ịkwụ ụgwọ site na crypto dị iche n'iji kaadị akwụ ụgwọ. FTC kwuru na ụgwọ crypto enweghị nchebe iwu nke kaadị kredit na debit nwere, a pụghịkwa ịlaghachi ha n'ọtụtụ oge. Ego dị na crypto abụghịkwa otu ihe ahụ dị ka ego dị n'akaụntụ ụlọ akụ nwere mkpuchi (insurance)."
          ],
          words: [["Cryptocurrency (crypto)", "ego dijitalụ e dere na blockchain, dị ka Bitcoin ma ọ bụ Ether."], ["Stablecoin", "crypto e mere ka ọ nọrọ nso n'uru ego nkịtị, dị ka dọla US."], ["Volatile", "ọnụahịa nwere ike ịrị elu ma ọ bụ gbadaa nke ukwuu, ngwa ngwa."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Crypto bụ...", bullets: ["Ego dijitalụ e dere na blockchain", "Bitcoin bụ nke mbụ; Ether bụ nke ọzọ", "Stablecoin na-anwa ịha nhata ego dị ka dọla"] },
            { title: "Ọ dịghị ka dọla dị n'ụlọ akụ", bullets: ["Ọ bụghị gọọmentị na-ewepụta ya", "Ọnụahịa nwere ike ịgbanwe nke ukwuu n'otu ụbọchị"] },
            { title: "Ọ dịghị ka ịkwụ ụgwọ na kaadị", bullets: ["Enweghị nchebe iwu dị ka kaadị (FTC)", "A pụghị ịlaghachi ya n'ọtụtụ oge"] }
          ],
          tryIt: "Dee ihe atọ dị iche n'etiti iji kaadị debit akwụ ụgwọ na iji crypto akwụ ụgwọ. Jiri peeji FTC dị n'isi iyi nkuzi a lelee azịza gị.",
          youCanNow: "ịkọwa ihe cryptocurrency bụ na otu o si dị iche na ego ụlọ akụ na ịkwụ ụgwọ na kaadị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ cryptocurrency?", options: ["Ego akwụkwọ nke gọọmentị", "Ego dijitalụ e dere na blockchain", "Akaụntụ nchekwa n'ụlọ akụ", "Gift card nke ụlọ ahịa"], answer: 1, why: "Crypto bụ ego dijitalụ e dere na blockchain; ọ bụghị gọọmentị na-ewepụta ya." },
            { objective: "O2", q: "Onye na-ere ahịa rịọrọ ka i jiri crypto kwụọ ụgwọ kama kaadị kredit gị. Gịnị ka ị ga-echeta?", options: ["Crypto nwere nchebe iwu karịa kaadị", "Ọ na-adị mfe mgbe niile ịkagbu ụgwọ crypto", "Crypto nwere mkpuchi dị ka akaụntụ ụlọ akụ", "A pụghị ịlaghachi ụgwọ crypto n'ọtụtụ oge ma ọ bụrụ na ihe emehie"], answer: 3, why: "FTC kwuru na ụgwọ crypto enweghị nchebe kaadị, a pụghịkwa ịlaghachi ha n'ọtụtụ oge." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wallet, igodo na exchange",
          minutes: 5,
          goal: "Kọwaa otu e si echekwa ma eziga crypto, na ihe a na-agaghị ekesa mgbe ọ bụla.",
          text: [
            "A na-edebe crypto na wallet: app, weebụsaịtị ma ọ bụ obere ngwaọrụ na-ejide igodo gị. Public address dị ka nọmba akaụntụ ị nwere ike inye mmadụ ka o zitere gị crypto. Private key, nke a na-egosikarị dị ka recovery phrase (ndepụta okwu 12 ma ọ bụ 24), dị ka isi igodo. Onye ọ bụla nwere ya na-achịkwa crypto ahụ.",
            "Ekesala recovery phrase ma ọ bụ private key gị na onye ọ bụla: ọ bụghị ndị ọrụ enyemaka, ọ bụghị \"onye enyemaka\", ọ bụghị app, ọ bụghị ngwa enyemaka AI. Ezi ụlọ ọrụ agaghị arịọ ya mgbe ọ bụla. Ọ bụrụ na ị tụfuo ya, crypto ahụ nwere ike ịla n'iyi ruo mgbe ebighị ebi.",
            "Exchange bụ ụlọ ọrụ ebe ndị mmadụ na-azụ, na-ere ma na-edebe crypto. Ndị ohi nwere ike ịbanye n'exchange (hack) ma ọ bụ ọ mechie ụlọ ọrụ ya. Na United States, lelee ma ụlọ ọrụ ahụ debara aha ma gụọ mkpesa gbasara ya tupu ị tụkwasị ya obi; ndị nlekọta gọọmentị dị ka SEC na CFTC na-ebipụta ịdọ aka na ntị."
          ],
          words: [["Wallet", "app ma ọ bụ ngwaọrụ na-ejide igodo crypto gị."], ["Public address", "koodu ndị ọzọ na-eji ezitere gị crypto, dị ka nọmba akaụntụ."], ["Private key / recovery phrase", "ihe nzuzo na-achịkwa crypto ahụ; ekesala ya mgbe ọ bụla."], ["Exchange", "ụlọ ọrụ ebe ndị mmadụ na-azụ, na-ere ma na-edebe crypto."]],
          sources: [FTC_CRYPTO, SEC_TCR, CFTC_COMPLAINT],
          slides: [
            { title: "Wallet na igodo", bullets: ["Wallet = app ma ọ bụ ngwaọrụ na-ejide igodo gị", "Public address = dị ka nọmba akaụntụ", "Private key / recovery phrase = isi igodo"] },
            { title: "Ekesala mgbe ọ bụla", bullets: ["Recovery phrase ma ọ bụ private key gị", "Ọ bụghị ndị enyemaka, \"ndị na-enyere aka\", app ma ọ bụ AI", "Ezi ụlọ ọrụ anaghị arịọ ya mgbe ọ bụla"] },
            { title: "Exchange", bullets: ["Ụlọ ọrụ maka ịzụ, ire na idebe crypto", "Ndị ohi nwere ike ịbanye ya ma ọ bụ ọ mechie", "Buru ụzọ lelee mkpesa na ịdọ aka na ntị gọọmentị"] }
          ],
          tryIt: "Dee otu ahịrịokwu maka nke ọ bụla: ihe public address bụ, ihe recovery phrase bụ, na ihe ị ga-ekwu ma ọ bụrụ na \"onye ọrụ enyemaka\" arịọ gị recovery phrase gị.",
          youCanNow: "ịkọwa otu e si echekwa ma eziga crypto na ihe mere a na-agaghị ekesa recovery phrase mgbe ọ bụla.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ recovery phrase?", options: ["Ekele ị na-eziga na ụgwọ", "Aha otu exchange", "Public address gị", "Ndepụta okwu 12 ma ọ bụ 24 na-achịkwa crypto gị"], answer: 3, why: "Onye ọ bụla nwere recovery phrase na-achịkwa crypto ahụ, dị ka isi igodo." },
            { objective: "O3", q: "Enyi gị chọrọ iziga gị crypto ma jụọ ihe ọ ga-eji. Gịnị ka ị ga-enye ya?", options: ["Recovery phrase gị", "Private key gị", "Public address gị", "PIN ụlọ akụ gị"], answer: 2, why: "Public address dị ka nọmba akaụntụ, ọ dịkwa mma ikesa ya iji nata crypto." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu crypto na blockchain si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Kedu ihe atụ kacha kọwaa blockchain nke ọma?", options: ["Ndepụta kọntaktị dị n'ekwentị", "Spreadsheet nzuzo nke otu ụlọ akụ", "Akwụkwọ cheque", "Akwụkwọ ndetu ụgwọ a na-ekerịta nke ọtụtụ kọmputa nwere nnomi ya"], answer: 3, why: "Blockchain bụ ndekọ a na-ekerịta nke ọtụtụ kọmputa na-edebe." },
          { objective: "O1", q: "Gịnị mere o ji esi ike ịgbanwe ndekọ ochie na blockchain?", options: ["E biri ya n'akwụkwọ", "Onye ọka ikpe na-eche ya nche", "E jikọtara block ọ bụla na nke bu ya ụzọ, ya mere mgbanwe adaghị na nnomi ndị ọzọ", "A na-ehichapụ ya kwa ụbọchị"], answer: 2, why: "Block ndị e jikọtara na ọtụtụ nnomi na-eme ka a hụ mgbanwe." },
          { objective: "O2", q: "Gịnị ka FTC kwuru gbasara ụgwọ crypto ma e jiri ya tụnyere kaadị kredit?", options: ["Ha nwere nchebe karịa", "Ha bụ otu ihe ahụ", "Ha enweghị otu nchebe iwu ahụ, a pụghịkwa ịlaghachi ha n'ọtụtụ oge", "Ha nwere mkpuchi mgbe niile"], answer: 2, why: "FTC na-adọ aka na ntị na ụgwọ crypto enweghị nchebe dị ka nke kaadị." },
          { objective: "O2", q: "Gịnị bụ stablecoin?", options: ["Mkpụrụ ego e ji ígwè mee", "Ụdị wallet", "Bọnd nchekwa ego gọọmentị", "Crypto e mere ka ọ nọrọ nso n'ego dị ka dọla"], answer: 3, why: "Stablecoin na-achọ isoro ego nkịtị, mana ọ ka nwere ike ịda." },
          { objective: "O3", q: "Onye si \"wallet support\" (enyemaka wallet) rịọrọ recovery phrase gị nwere okwu 12 iji dozie nsogbu. Gịnị ka ị ga-eme?", options: ["Nye ya ka o wee nyere aka", "Nye ọkara ya", "Dee ya n'ime AI ka o lelee ya", "Jụ; ezi ụlọ ọrụ anaghị arịọ ya mgbe ọ bụla"], answer: 3, why: "Onye ọ bụla nwere recovery phrase na-achịkwa crypto ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ihe egwu, aghụghọ na ịkọ akụkọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ezi ihe egwu ndị ahụ",
          minutes: 5,
          goal: "Kpọọ aha ihe egwu ndị bụ isi nke idebe ma ọ bụ ịnata crypto.",
          text: [
            "Ihe egwu ọnụahịa: ọnụahịa crypto nwere ike ịda nke ukwuu, ọ dịghịkwa onye pụrụ ikwe nkwa na ọ ga-alọghachi. Etinyela ego ị chọrọ maka ụgwọ ụlọ, nri, ụgwọ ndị ọzọ ma ọ bụ ọgwụ.",
            "Ihe egwu ntụfu: ọ bụrụ na ị tụfuo recovery phrase gị, ma ọ bụ zipu crypto n'adreesị ezighi ezi, ọ na-alakarị n'iyi. A pụghị ịlaghachi ụgwọ n'ọtụtụ oge.",
            "Ihe egwu ụlọ ọrụ: ndị ohi nwere ike ịbanye n'exchange na app (hack) ma ọ bụ ha emechie. FDIC kwuru na mkpuchi ego nchekwa FDIC anaghị ekpuchi crypto; ọ na-ekpuchi naanị ego e debere n'ụlọ akụ nwere mkpuchi FDIC. Ihe egwu aghụghọ: crypto bụ ụzọ ịkwụ ụgwọ ndị aghụghọ kacha hụ n'anya n'ihi na ọ dị ngwa ma na-esi ike inweta ya azụ.",
            "Ihe ọmụmụ a anaghị agwa gị ma ị ga-azụ. Ọ bụrụ na ị na-eche maka ya, gwa onye ọkachamara ego nwere akwụkwọ ikike nke gị onwe gị họọrọ okwu, ma buru ụzọ gụọ ịdọ aka na ntị gọọmentị."
          ],
          words: [["Ihe egwu (risk)", "ohere nke ịtụfu ego ma ọ bụ ka ihe mehie."], ["Mkpuchi FDIC (FDIC insurance)", "nchebe gọọmentị US maka ego dị n'akaụntụ ụlọ akụ nwere mkpuchi; ọ naghị ekpuchi crypto."]],
          sources: [FTC_CRYPTO, { name: "FDIC: Ịghọta mkpuchi ego nchekwa (deposit insurance)", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Ihe egwu ọnụahịa", bullets: ["Ọnụahịa nwere ike ịda nke ukwuu", "Ejila ego ụlọ, nri, ụgwọ ma ọ bụ ọgwụ"] },
            { title: "Ihe egwu ntụfu", bullets: ["Recovery phrase furu efu = crypto furu efu", "Adreesị ezighi ezi ma ọ bụ aghụghọ = ọ na-alakarị n'iyi"] },
            { title: "Ihe egwu ụlọ ọrụ na aghụghọ", bullets: ["Ndị ohi nwere ike ịbanye n'app na exchange, ma ọ bụ ha emechie", "Crypto enweghị mkpuchi FDIC", "Ndị aghụghọ hụrụ ụgwọ crypto n'anya"] },
            { title: "Ọ bụghị ndụmọdụ", bullets: ["Ihe ọmụmụ a anaghị asị zụta ma ọ bụ ree", "Gwa onye ọkachamara nwere ikike ị họọrọ okwu"] }
          ],
          tryIt: "Dee ihe egwu anọ ahụ n'okwu nke gị: ọnụahịa, ntụfu, ụlọ ọrụ na aghụghọ. Maka nke ọ bụla, dee otu ụzọ mmadụ nwere ike isi chebe onwe ya.",
          youCanNow: "ịkpọ aha ihe egwu ndị bụ isi nke crypto ma kọwaa ihe mere a na-agaghị etinye ego ị chọrọ n'ihe egwu.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ihe egwu ọnụahịa na crypto?", options: ["Ọnụahịa nwere ike ịda nke ukwuu, ọ dịghịkwa onye pụrụ ikwe nkwa na ọ ga-alọghachi", "Gọọmentị na-edozi ọnụahịa ya", "Ọnụahịa na-arị naanị elu ka oge na-aga", "Ọnụahịa ya na dọla bụ otu kwa ụbọchị"], answer: 0, why: "Ọnụahịa crypto nwere ike ịda nke ukwuu, ya mere etinyela ego ị chọrọ maka ụgwọ." },
            { objective: "O4", q: "Nwanne gị chọrọ itinye ego ụlọ ọnwa a na crypto. Gịnị ka ị ga-agwa ya?", options: ["Mee ya; ọnụahịa na-alọghachi mgbe niile", "Ejila ego ị chọrọ maka ụgwọ ụlọ, nri, ụgwọ ma ọ bụ ọgwụ", "Tinye ya n'exchange n'ihi na exchange nwere mkpuchi", "Zipu ya ngwa ngwa tupu ọnụahịa agbanwee"], answer: 1, why: "Ọnụahịa nwere ike ịda nke ukwuu, ya mere ego a chọrọ maka ihe ndị dị mkpa ekwesịghị ịbanye na crypto." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhụ aghụghọ crypto",
          minutes: 5,
          goal: "Lelee onyinye ma ọ bụ ozi crypto megide ihe ịdọ aka na ntị nke aghụghọ.",
          text: [
            "FTC depụtara ihe ịrịba ama nke aghụghọ crypto. Naanị ndị aghụghọ na-achọsi ike ka a kwụọ ha ụgwọ na crypto, karịsịa tupu oge eruo ma ọ bụ iji \"chebe\" ego gị. Naanị ndị aghụghọ na-ekwe nkwa uru ma ọ bụ uru buru ibu na-abịa ngwa ngwa. Ndị a ma ama a na-ekwu na ha kwadoro ya nwere ike ịbụ adịgboroja.",
            "Kpachara anya maka enyi ọhụrụ n'ịntanetị ma ọ bụ onye ịhụnanya malitere inye ndụmọdụ itinye ego ma ọ bụ na-arịọ crypto. Kpachara anya maka oku ma ọ bụ ozi ederede na-ekwu na ha si n'ụlọ ọrụ gọọmentị, ụlọ akụ ma ọ bụ ụlọ ọrụ ọkụ/mmiri, na-ekwu na i ji ụgwọ ma ọ bụ na e kpọchiri akaụntụ gị, na ị ga-akwụ na crypto ma ọ bụ na crypto ATM.",
            "Kpachara anya kwa maka ọrụ na-arịọ ka ị kwụọ ụgwọ na crypto, na email na-eyi egwu ikesa ihe nzuzo gị ma ọ bụrụ na ị kwụghị na crypto. Mgbe ị hụrụ nke ọ bụla n'ime ndị a, kwụsị. Akwụla ụgwọ, pịala ihe ọ bụla, ma gwa onye ị tụkwasịrị obi."
          ],
          steps: ["Ọ na-arịọ ka i jiri crypto kwụọ ụgwọ ma ọ bụ jiri crypto ATM?", "Ọ na-ekwe nkwa uru doro anya ma ọ bụ uru na-abịa ngwa ngwa?", "O si n'aka enyi ọhụrụ n'ịntanetị, onye ịhụnanya ma ọ bụ onye ị na-amaghị?", "Ọ na-eme ka ị mee ngwa ngwa ma ọ bụ na-eyi gị egwu?", "Ọ bụrụ na azịza ọ bụla bụ ee: kwụsị, akwụla ụgwọ, ma jụọ onye ị tụkwasịrị obi."],
          words: [["Aghụghọ (scam)", "wayo e ji ezu ego ma ọ bụ ozi."], ["Crypto ATM", "igwe na-agbanwe ego aka ka ọ bụrụ crypto; ndị aghụghọ na-agwakarị ndị ha na-aghọ ka ha jiri ya."], ["Aghụghọ ịhụnanya (romance scam)", "aghụghọ ebe mmadụ na-ewu mmekọrịta n'ịntanetị iji nweta ego."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Naanị ndị aghụghọ...", bullets: ["Na-achọsi ike ka a kwụọ ha na crypto", "Na-ekwe nkwa uru ma ọ bụ uru ngwa ngwa", "Na-eji nkwado ndị a ma ama adịgboroja"] },
            { title: "Kpachara anya maka", bullets: ["Ndị enyi ọhụrụ n'ịntanetị na-enye ndụmọdụ itinye ego", "Oku \"gọọmentị\" ma ọ bụ \"ụlọ akụ\" na-asị kwụọ na crypto", "Ọrụ na-ana ụgwọ na crypto"] },
            { title: "Mgbe ị hụrụ otu", bullets: ["Kwụsị", "Akwụla ụgwọ, pịala ihe ọ bụla", "Gwa onye ị tụkwasịrị obi"] }
          ],
          tryIt: "Chọta otu mgbasa ozi, ozi ma ọ bụ post soshal midia gbasara crypto. Gafee ajụjụ nlele ise ahụ ma dee ihe ịdọ aka na ntị ọ bụla ọ na-egosi.",
          youCanNow: "ịlele onyinye ma ọ bụ ozi crypto megide ihe ịdọ aka na ntị ma kwụsị tupu ị kwụọ ụgwọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke n'ime ndị a bụ ihe ịdọ aka na ntị nke aghụghọ crypto?", options: ["Akwụkwọ ozi ụlọ akụ ị rịọrọ", "Enyi na-akọwa ihe blockchain bụ", "Ịchọsi ike ka ị kwụọ na crypto tupu oge eruo iji chebe ego gị", "Akụkọ gbasara ọnụahịa Bitcoin"], answer: 2, why: "Naanị ndị aghụghọ na-achọsi ike ka a kwụọ na crypto tupu oge eruo ma ọ bụ iji \"chebe\" ego gị." },
            { objective: "O5", q: "Ozi ederede kwuru na e kpọchiri akaụntụ ụlọ akụ gị, na ị ga-akwụ ụgwọ na crypto ATM taa. Gịnị ka ị ga-eme?", options: ["Gaa na crypto ATM ozugbo", "Zaa ya na nọmba akaụntụ gị", "Pịa njikọ dị n'ozi ahụ ka i lelee", "Kwụsị, akwụla ụgwọ, pịala ihe ọ bụla, ma gwa onye ị tụkwasịrị obi"], answer: 3, why: "Ikwu na i ji ụgwọ ma ga-akwụ na crypto bụ ihe ịrịba ama nke aghụghọ, ya mere kwụsị ma akwụla ụgwọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọ akụkọ wayo na inyere ndị ọzọ aka",
          minutes: 5,
          goal: "Depụta ebe a ga-akọ akụkọ aghụghọ crypto na ihe a ga-edetu.",
          text: [
            "Ọ bụrụ na e lekwasịrị gị ma ọ bụ onye ị maara anya, kọọ akụkọ ya. FTC depụtara ebe ndị a: FTC na ReportFraud.ftc.gov, CFTC na cftc.gov/complaint, SEC na sec.gov/tcr, Internet Crime Complaint Center (IC3) nke FBI na ic3.gov, na exchange ma ọ bụ app crypto e ji zipu ego ahụ.",
            "Dee ihe mere: ụbọchị, ego ole, wallet address ma ọ bụ transaction ID, aha na nọmba ekwentị onye aghụghọ ahụ jiri, na foto ihuenyo (screenshot) nke ozi. Ezigala ego ọzọ nye onye ọ bụla na-ekwe nkwa \"inweghachi\" crypto gị furu efu; nke ahụ na-abụkarị aghụghọ nke abụọ.",
            "Kpaa nkata gbasara aghụghọ na ezinụlọ na ndị enyi, karịsịa ndị ikwu gị merela agadi na ndị ntorobịa ka malitere iji app ego. Obere mkparịta ụka nwere ike igbochi ntụfu."
          ],
          steps: ["Kwụsị ụgwọ niile na mkparịta ụka niile gị na onye aghụghọ ahụ.", "Dee ụbọchị, ego ole, wallet address, transaction ID, aha na nọmba.", "Chekwaa screenshot.", "Kọọ akụkọ na ReportFraud.ftc.gov na ic3.gov, gbakwunye SEC ma ọ bụ CFTC ma ọ bụrụ na ọ bụ itinye ego.", "Gwa exchange ma ọ bụ app i jiri.", "Lezie anya onye ọ bụla na-ekwe nkwa inweghachi ego gị maka ụgwọ."],
          words: [["Transaction ID", "koodu na-egosi otu ụgwọ crypto na blockchain."], ["IC3", "Internet Crime Complaint Center nke FBI, nke na-anata akụkọ mpụ ịntanetị."], ["Aghụghọ inweghachi ego (recovery scam)", "aghụghọ nke abụọ na-ekwe nkwa inweghachi ego gị furu efu maka ụgwọ."]],
          sources: [FTC_CRYPTO, { name: "FTC: ReportFraud (kọọ akụkọ wayo)", url: "https://reportfraud.ftc.gov" }, { name: "FBI Internet Crime Complaint Center (IC3)", url: "https://www.ic3.gov" }, SEC_TCR, CFTC_COMPLAINT],
          slides: [
            { title: "Ebe a ga-akọ akụkọ", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr ma ọ bụ cftc.gov/complaint maka itinye ego", "Exchange ma ọ bụ app i jiri"] },
            { title: "Dee ya", bullets: ["Ụbọchị na ego ole", "Wallet address na transaction ID", "Aha, nọmba, screenshot"] },
            { title: "Kpachara anya maka aghụghọ inweghachi ego", bullets: ["Ọ dịghị ezi onye na-ana ụgwọ iji \"nweghachi\" crypto", "Akwụla ụgwọ ọzọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee kaadị nchekwa crypto gị nwere otu peeji (ihe blockchain na crypto bụ, ihe egwu atọ, ihe ịrịba ama aghụghọ anọ, ebe a ga-akọ akụkọ). Wee kara ihe ịdọ aka na ntị dị n'otu ezi mgbasa ozi ma ọ bụ ozi crypto.",
          youCanNow: "ịkọ akụkọ aghụghọ crypto n'ebe kwesịrị ekwesị na inyere ezinụlọ na ndị enyi aka izere ya.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke n'ime ndị a bụ ebe gọọmentị ebe a na-akọ akụkọ wayo crypto na US?", options: ["Okwu n'okpuru post soshal midia nke onye aghụghọ", "Internet Crime Complaint Center nke FBI na ic3.gov", "Onye ị na-amaghị na-asị na ọ ga-enweghachi ego gị", "Otu ìgwè nkata crypto"], answer: 1, why: "IC3 na ic3.gov bụ otu n'ime ebe gọọmentị FTC depụtara maka ịkọ akụkọ." },
            { objective: "O6", q: "E ghọrọ onye agbata obi gị, ọ chọkwara ịkọ akụkọ ya. Gịnị ka ị ga-ebu ụzọ nyere ya aka ime?", options: ["Dee ụbọchị, ego ole, wallet address ma ọ bụ transaction ID, ma chekwaa screenshot", "Hichapụ ozi niile onye aghụghọ ahụ zitere", "Kwụọ ụlọ ọrụ inweghachi ego ka ha nweta ego ahụ", "Zitere onye aghụghọ ahụ crypto ọzọ ka o mechie akaụntụ ahụ"], answer: 0, why: "Ihe ndị ahụ na-enyere ụlọ ọrụ gọọmentị na exchange aka isochi akụkọ ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ihe egwu, aghụghọ na ịkọ akụkọ",
        questions: [
          { objective: "O4", q: "Kedu ego a na-ekwesịghị itinye na crypto mgbe ọ bụla?", options: ["Ego egwuregwu n'ime egwuregwu", "Ego ị nwere ike ịtụfu mgbe ị nwetasịrị ndụmọdụ", "Ego ị chọrọ maka ụgwọ ụlọ, nri ma ọ bụ ọgwụ", "Ọ dịghị nke ọ bụla nwere ihe egwu"], answer: 2, why: "Mgbanwe ọnụahịa pụtara na ị nwere ike ịtụfu ego ị chọrọ." },
          { objective: "O4", q: "Dịka FDIC si kwuo, crypto:", options: ["Nwere mkpuchi FDIC zuru ezu", "Nwere mkpuchi naanị na ngwụcha izu", "Enweghị mkpuchi ego nchekwa FDIC", "Nwere mkpuchi ma ọ bụrụ na e ji ekwentị zụta ya"], answer: 2, why: "Mkpuchi ego nchekwa FDIC anaghị ekpuchi crypto." },
          { objective: "O5", q: "Onye kpọrọ oku kwuru na ọ si na gọọmentị, na ị ga-akwụ ntaramahụhụ ego na crypto ATM taa. Nke a bụ:", options: ["Ụgwọ gọọmentị nkịtị", "Nkwụghachi ụtụ isi", "Iwu ụlọ akụ", "Ihe ịdọ aka na ntị nke aghụghọ"], answer: 3, why: "Naanị ndị aghụghọ na-achọsi ike ka a kwụọ na crypto." },
          { objective: "O5", q: "Enyi ọhụrụ n'ịntanetị kwere gị nkwa uru doro anya ma ọ bụrụ na itinye ego na crypto. Gịnị ka ị ga-eme?", options: ["Tinye obere ego ka i lelee ya", "Zipu recovery phrase gị", "Rịọ nkwa ka ukwuu", "Kwụsị; nkwa uru doro anya bụ ihe ịrịba ama aghụghọ"], answer: 3, why: "Naanị ndị aghụghọ na-ekwe nkwa uru." },
          { objective: "O6", q: "Mgbe ị tụfuru ego n'aghụghọ crypto, mmadụ kwere nkwa inweghachi ya maka ụgwọ. Nke a nwere ike ịbụ:", options: ["Aghụghọ inweghachi ego", "FBI", "Ụlọ akụ gị", "Nkwụghachi ego"], answer: 0, why: "Ịkwụ ụgwọ iji nweghachi crypto bụ aghụghọ nke abụọ a na-ahụkarị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịghọta Cryptocurrency na Blockchain",
    questions: [
      { objective: "O1", q: "Blockchain bụ:", options: ["Ndekọ azụmahịa a na-ekerịta nke ọtụtụ kọmputa na-edebe", "Ụdị mkpọchi igwe kwụ otu ebe (bicycle)", "Faịlụ nzuzo nke otu ụlọ ọrụ", "Akwụkwọ nnata ego"], answer: 0, why: "Ọtụtụ kọmputa na-edebe nnomi nke otu ndekọ ahụ e jikọtara." },
      { objective: "O1", q: "Na blockchain, \"block\" bụ:", options: ["Otu ìgwè azụmahịa a gbakwunyere ọnụ", "Okwuntughe", "Crypto ATM", "Alaka ụlọ akụ"], answer: 0, why: "Block ọ bụla na-ejide otu ìgwè azụmahịa." },
      { objective: "O1", q: "\"Decentralized\" pụtara:", options: ["Otu ụlọ akụ na-achị ya", "Ọ na-emechi na ngwụcha izu", "Netwọkụ ọtụtụ kọmputa na-achị ya kama otu ụlọ ọrụ", "Ọ bụ naanị maka gọọmentị"], answer: 2, why: "Ọ dịghị otu ụlọ ọrụ na-edebe ndekọ ahụ." },
      { objective: "O1", q: "Ọtụtụ blockchain bụ:", options: ["Nzuzo ma zoro ezo", "A na-ehichapụ ha kwa afọ", "A na-ebipụta ha n'akwụkwọ akụkọ", "Ndekọ ọha onye ọ bụla nwere ike ilele"], answer: 3, why: "Onye ọ bụla nwere ike ilele azụmahịa ndị ahụ, ọ bụ ezie na e gosighị aha." },
      { objective: "O2", q: "Bitcoin bụ ihe atụ nke:", options: ["Kaadị kredit", "Akaụntụ ụlọ akụ", "Cryptocurrency", "Stablecoin gọọmentị na-achị"], answer: 2, why: "Bitcoin bụ cryptocurrency mbụ." },
      { objective: "O2", q: "A na-akpọ ọnụahịa crypto volatile n'ihi na ha:", options: ["Anaghị agbanwe agbanwe", "Na-arị naanị elu", "Iwu na-edozi ha", "Nwere ike ịrị elu ma ọ bụ daa nke ukwuu ngwa ngwa"], answer: 3, why: "Volatile pụtara mgbanwe ọnụahịa buru ibu na ngwa ngwa." },
      { objective: "O2", q: "Ọ bụrụ na i ji crypto kwụọ onye aghụghọ ụgwọ, FTC kwuru na ị:", options: ["Nwere ike ịkagbu ya mgbe niile", "Enweghị ike ịlaghachi ụgwọ ahụ n'ọtụtụ oge", "Ga-enweta nkwụghachi site n'ụlọ akụ", "Nwere mkpuchi"], answer: 1, why: "A pụghị ịlaghachi ụgwọ crypto n'ọtụtụ oge." },
      { objective: "O3", q: "Wallet crypto bụ:", options: ["Akpa ego akpụkpọ", "App ma ọ bụ ngwaọrụ na-ejide igodo crypto gị", "Akaụntụ ụlọ akụ", "Ọfịs otu exchange"], answer: 1, why: "Wallet na-ejide igodo na-achịkwa crypto." },
      { objective: "O3", q: "Kedu nke dị mma inye onye ga-ezitere gị crypto?", options: ["Public address gị", "Recovery phrase gị", "Private key gị", "Okwuntughe ụlọ akụ gị"], answer: 0, why: "Public address dị ka nọmba akaụntụ." },
      { objective: "O3", q: "Onye na-achịkwa crypto dị na wallet?", options: ["Ụlọ ọrụ ekwentị", "Onye ọ bụla nwere private key ma ọ bụ recovery phrase", "Gọọmentị", "Onye nwere public address"], answer: 1, why: "Private key bụ isi igodo." },
      { objective: "O3", q: "Exchange bụ:", options: ["Ụlọ ọrụ ebe ndị mmadụ na-azụ, na-ere ma na-edebe crypto", "Ọfịs gọọmentị", "Ụdị block blockchain", "Recovery phrase"], answer: 0, why: "Exchange bụ ụlọ ọrụ maka ịzụ ahịa na idebe crypto." },
      { objective: "O4", q: "Kedu nke bụ ihe egwu ụlọ ọrụ na crypto?", options: ["Ndị ohi nwere ike ịbanye n'exchange ma ọ bụ ọ mechie", "Ọnụahịa ya edozila", "O nwere mkpuchi FDIC", "A pụghị izu ya"], answer: 0, why: "Ndị ohi nwere ike ịbanye n'exchange na app, ma ọ bụ ha emechie ụlọ ọrụ ha." },
      { objective: "O4", q: "Ihe ọmụmụ a ọ na-agwa gị ka ị zụta crypto?", options: ["Ee, mgbe niile", "Ee, mana naanị Bitcoin", "Mba; gwa onye ọkachamara nwere ikike ị họọrọ okwu maka mkpebi ego", "Ee, were ego ụlọ"], answer: 2, why: "Ihe ọmụmụ a na-akọwa otu crypto si arụ ọrụ na ihe egwu ya; ọ bụghị ndụmọdụ." },
      { objective: "O4", q: "I zigara crypto n'adreesị ezighi ezi. Gịnị na-emekarị?", options: ["Ọ na-alọghachi n'onwe ya", "Ọ na-alakarị n'iyi", "Ụlọ akụ na-akwụghachi ya", "FTC na-ezighachi ya"], answer: 1, why: "A pụghị imeghachi ụgwọ blockchain n'ọtụtụ oge." },
      { objective: "O5", q: "Kedu nke bụ ihe ịdọ aka na ntị nke aghụghọ crypto?", options: ["Nkwa uru doro anya", "Ndepụta ọnụahịa doro anya", "Ụlọ ahịa na-anabata kaadị", "Akwụkwọ nnata site na email"], answer: 0, why: "Naanị ndị aghụghọ na-ekwe nkwa uru." },
      { objective: "O5", q: "Onye i zutere n'app mkpakọrịta (dating app) ị na-ahụtụbeghị anya rịọrọ ka itinye ego na crypto. Nke a bụ:", options: ["Ezi ịhụnanya", "Ihe ịrịba ama aghụghọ ịhụnanya a na-ahụkarị", "Ihe ụlọ akụ chọrọ", "Iwu ụtụ isi"], answer: 1, why: "Ndị ọhụrụ n'ịntanetị na-akwali crypto bụ ihe ịrịba ama aghụghọ." },
      { objective: "O5", q: "Onyinye ọrụ kwuru na ị ga-akwụ ụgwọ ọzụzụ na crypto. Ị kwesịrị:", options: ["Ịkwụ ya ngwa ngwa", "Ịkwụsị; ọrụ na-achọ ụgwọ crypto bụ ihe ịrịba ama aghụghọ", "Ịkwụ ọkara ya", "Iziga recovery phrase gị kama"], answer: 1, why: "FTC depụtara ọrụ na-ana ụgwọ crypto dị ka ihe ịrịba ama aghụghọ." },
      { objective: "O6", q: "Ebee ka ị nwere ike ịkọ akụkọ wayo crypto na US?", options: ["ReportFraud.ftc.gov na ic3.gov", "Ìgwè soshal midia ọ bụla", "Ọnụ ekwentị enyemaka nke onye aghụghọ", "Ọ dịghị ebe"], answer: 0, why: "FTC na IC3 nke FBI na-anata akụkọ wayo." },
      { objective: "O6", q: "Gịnị ka ị kwesịrị idetu mgbe aghụghọ mesịrị?", options: ["Ọ dịghị ihe", "Ụbọchị, ego ole, wallet address, transaction ID na screenshot", "Naanị okwuntughe gị", "Recovery phrase gị"], answer: 1, why: "Ihe ndị a na-enyere ndị nyocha aka." },
      { objective: "O6", q: "Ụzọ kacha mma isi chebe onye ezinụlọ pụọ n'aghụghọ crypto bụ:", options: ["Ịghara ikwu maka ya mgbe ọ bụla", "Ikesa ihe ịdọ aka na ntị na ebe a ga-akọ akụkọ", "Inye ha recovery phrase gị", "Ịgwa ha ka ha tinye ego ngwa ngwa"], answer: 1, why: "Obere mkparịta ụka gbasara ihe ịdọ aka na ntị nwere ike igbochi ntụfu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke kaadị ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ihe blockchain na crypto bụ", objective: "O1", notYet: "Ahịrịokwu abụọ ahụ adịghị, ha ezighi ezi, ma ọ bụ e detuuru ha n'akọwaghị ihe.", meets: "Ahịrịokwu abụọ dị mfe na-ekwu nke ọma ihe blockchain na cryptocurrency bụ.", exceeds: "Ọ na-ekwukwa ihe mere o ji esi ike imeghachi ụgwọ crypto." },
      { name: "Ihe egwu atọ", objective: "O4", notYet: "Ihe egwu erughị atọ, ma ọ bụ otu ihe egwu ezighi ezi.", meets: "Ihe egwu atọ ziri ezi site na ọnụahịa, ntụfu, ụlọ ọrụ na aghụghọ.", exceeds: "Ihe egwu ọ bụla nwere otu ụzọ isi chebe onwe gị." },
      { name: "Igodo na recovery phrase", objective: "O3", notYet: "Kaadị ahụ ekwughị ka e debe recovery phrase na nzuzo, ma ọ bụ kwuo na ọ dị mma ikesa ya.", meets: "Kaadị ahụ kwuru ka a ghara ikesa recovery phrase ma ọ bụ private key na onye ọ bụla.", exceeds: "Ọ na-ekwukwa na public address bụ naanị ihe dị mma ikesa iji nata crypto." },
      { name: "Ihe ịdọ aka na ntị aghụghọ anọ", objective: "O5", notYet: "Ihe ịrịba ama erughị anọ, ma ọ bụ otu ezighi ezi.", meets: "Ihe ịdọ aka na ntị anọ ziri ezi, e kakwara ezi mgbasa ozi ma ọ bụ ozi ahụ na ihe ịrịba ama ọ bụla ọ na-egosi.", exceeds: "Ọ na-edekwa ụzọ dị nchebe: kwụsị, akwụla ụgwọ, pịala ihe ọ bụla, ma gwa onye ị tụkwasịrị obi." },
      { name: "Ebe a ga-akọ akụkọ", objective: "O6", notYet: "Ọ dịghị ebe gọọmentị a ga-akọ akụkọ, ma ọ bụ ebe na-abụghị nke gọọmentị.", meets: "Opekata mpe ebe gọọmentị abụọ a ga-akọ akụkọ, dị ka ReportFraud.ftc.gov na ic3.gov.", exceeds: "Ọ na-edepụtakwa ihe a ga-edetu ma dọọ aka na ntị gbasara aghụghọ inweghachi ego." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke kaadị nchekwa crypto",
      "Ndị na-amụ ihe kwuru na ha hụrụ ma leghara ozi ma ọ bụ oku aghụghọ crypto anya n'ime ụbọchị 30 mgbe ihe ọmụmụ a gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe kesara kaadị nchekwa ahụ ma ọ bụ ihe ịdọ aka na ntị ndị ahụ na onye ezinụlọ ma ọ bụ enyi",
      "Mmemme ndị mmekọ kwuru na ndị otu ole na ole tụfuru ego n'aghụghọ crypto, ma ọ bụ na a kọrọ akụkọ aghụghọ ndị ọzọ na saịtị gọọmentị"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị iji gụọ peeji ịdọ aka na ntị gọọmentị (FTC, FDIC, SEC, CFTC)",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ app akwụkwọ, maka kaadị nchekwa crypto nwere otu peeji",
      "Otu ezi mgbasa ozi, ozi ma ọ bụ post crypto a ga-enyocha (screenshot dị mma)",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Kwuo na mmalite na ihe ọmụmụ a abụghị ndụmọdụ ego, ọ naghịkwa agwa onye ọ bụla ka ọ zụta ma ọ bụ ree crypto; zigara ajụjụ ego n'aka onye ọkachamara nwere ikike nke onye na-amụ ihe họọrọ.",
      "Arịọla ndị na-amụ ihe mgbe ọ bụla ka ha meghee app crypto, jikọọ wallet ma ọ bụ dee recovery phrase na klas, ọbụlagodi dị ka omume.",
      "Bute ihe atụ ole na ole e biri ebi ma ọ bụ screenshot nke ezi ozi aghụghọ ka ndị na-enweghị nke ha wee nwee ike ime nlele ihe ịdọ aka na ntị.",
      "Ụfọdụ ndị na-amụ ihe nwere ike ịbụ ndị tụfuru ego n'aghụghọ; ebola ha ụta n'olu gị, ma gosi ha otu ha ga-esi kọọ akụkọ ya.",
      "Kpọọ ndị na-amụ ihe ka ha bute onye ezinụlọ, karịsịa onye ikwu merela agadi ma ọ bụ onye ntorobịa ka malitere iji app ego, ma mee ka ndị abụọ mee kaadị nchekwa ahụ ọnụ."
    ]
  }
};
