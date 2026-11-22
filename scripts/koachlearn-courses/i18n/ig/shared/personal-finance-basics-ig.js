"use strict";

// Koach Learn course (Igbo translation of shared/personal-finance-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "personal-finance-basics-ig",
  lang: "ig",
  translationOf: "personal-finance-basics",
  category: "Seniors and Technology",
  name: "Mmalite Ilekọta Ego Gị: Atụmatụ Ego, Kredit na Ịchekwa Ego",
  skills: "Ime atụmatụ ego kwa ọnwa, Ịgụ akụkọ kredit gị, Ime atụmatụ ịkwụ ụgwọ, Ịchekwa ego maka ihe mberede, Ịchekwa ego n'ụlọ akụ ma ọ bụ na mobile money, Ịmata mbinye ego na-arapara mmadụ na aghụghọ",
  outcome: "ide atụmatụ ego nwere otu peeji: atụmatụ ego kwa ọnwa, atụmatụ ịkwụ ụgwọ, ebumnuche ego nchekwa maka ihe mberede na ụbọchị ị ga-elele akụkọ kredit gị, ma mata mbinye ego ma ọ bụ onyinye nwere ike ịrapara gị.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla chọrọ ijide ego ya nke ọma: nne nne ma ọ bụ nna nna na-enweta otu ego kwa ọnwa, nwa okorobịa ma ọ bụ nwa agbọghọ nwetara ụgwọ ọrụ mbụ ya, onye ọrụ ugbo a na-akwụ ụgwọ n'oge owuwe ihe ubi, onye egwuregwu nwetara onye nkwado ọhụrụ (sponsor), onye agha lara ezumike na-amalite ọrụ nkịtị, ma ọ bụ onye na-alọta ụlọ na-amalite ọzọ.",
    "Ị ga-ede atụmatụ ego dị mfe, gụọ akụkọ kredit nke gị, họrọ ụgwọ ị ga-ebu ụzọ kwụọ, malite ego nchekwa maka ihe mberede, mụta ụzọ ndị dị mma isi chekwaa ego n'ụlọ akụ, na credit union ma ọ bụ na mobile money, ma mụta ihe ịdọ aka na ntị nke mbinye ego dị ka payday loan na aghụghọ ego.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" nke ị na-eme na nọmba nke gị n'akwụkwọ ma ọ bụ na spreadsheet. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ọmụmụ a na-akụzi nka ego; ọ naghị enye ndụmọdụ itinye ego (investment). Maka mkpebi ndị dị mkpa, gwa onye ị tụkwasịrị obi nwere ọzụzụ, dị ka onye ndụmọdụ kredit nke otu na-anaghị achọ uru (nonprofit credit counselor)."
  ],
  finalTask: "Dee atụmatụ ego nwere otu peeji: (1) atụmatụ ego kwa ọnwa nwere ego na-abata, mkpa, ihe ị chọrọ na nchekwa; (2) ndepụta ụgwọ gị na nke ị ga-akwụ karịa; (3) ebumnuche ego nchekwa maka ihe mberede na ego ole ị ga-etinye kwa izu ma ọ bụ kwa ọnwa, na ebe ị ga-edebe ya; (4) ụbọchị ị ga-elele akụkọ kredit gị. Wee gụọ otu mbinye ego ma ọ bụ onyinye ego ị hụrụ ma dee ihe ịdọ aka na ntị ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Onye ọ bụla chọrọ ijide ego ya nke ọma: ndị agadi na-enweta otu ego kwa ọnwa, ndị ntorobịa nwetara ụgwọ ọrụ mbụ ha, ndị ọrụ ugbo a na-akwụ n'oge owuwe ihe ubi, ndị egwuregwu nwetara onye nkwado ọhụrụ, ndị agha lara ezumike na-amalite ọrụ nkịtị, na ndị na-alọta ụlọ na-amalite ọzọ.",
    startingPoint: "Ha na-enweta ego ma na-akwụ ụgwọ ụlọ na ọkụ, mana ọtụtụ anaghị ede atụmatụ ego, ha agụbeghị akụkọ kredit ha, ha nwere ụgwọ n'enweghị atụmatụ ịkwụ ya, ha nwere obere ego nchekwa, ma ọ bụ ọ na-esiri ha ike ịmata mbinye ego na-arapara mmadụ ma ọ bụ aghụghọ.",
    gap: "N'enweghị atụmatụ, obere ihe mberede na-aghọ ụgwọ, ịkwụ ụgwọ n'oge na-agafe, na aghụghọ na-efu ezinụlọ ego ma na-enye ha nchegbu. Ndị na-amụ ihe chọrọ atụmatụ ego dị mfe nwere otu peeji na omume ịlele onyinye ego, ka ha wee jide ego ha ma chekwaa ego.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ, na mgbakọ dị mfe",
      "Ọ bụghị ndụmọdụ itinye ego; mkpebi ndị dị mkpa na-aga n'aka onye ị tụkwasịrị obi nwere ọzụzụ, dị ka nonprofit credit counselor",
      "Nzuzo: enweghị nọmba akaụntụ ụlọ akụ, nọmba kaadị ma ọ bụ okwuntughe na ngwa AI ma ọ bụ n'ihe a na-ekesa na klas",
      "Iwu na ụgwọ ọrụ dị iche site na mba na mba na site n'ụlọ ọrụ na ụlọ ọrụ; ndị na-amụ ihe na-elele tebụl ụgwọ na isi iyi gọọmentị",
      "Ngwaọrụ: akwụkwọ ma ọ bụ spreadsheet n'efu; ụfọdụ ndị na-amụ ihe na-eji mobile money"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ego na-abata na ego i mefuru n'ọnwa gara aga", action: "ide atụmatụ ego kwa ọnwa nke na-ekewa ihe i mefuru ka ọ bụrụ mkpa, ihe ị chọrọ na nchekwa", standard: "nwere ahịrị nchekwa, ma lelee ma ngụkọta ahụ dị n'elu ma ọ bụ n'okpuru efu" },
    { id: "O2", condition: "Site n'iji akụkọ kredit n'efu (AnnualCreditReport.com na US)", action: "ịlele akaụntụ ọ bụla dị n'akụkọ kredit gị ma kwupụta mperi ọ bụla (dispute)", standard: "na-edebe mbipụta nke ihe ọ bụla i zipụrụ" },
    { id: "O3", condition: "Mgbe e nyere gị ndepụta ụgwọ", action: "ịhọrọ ụgwọ ị ga-akwụ karịa site n'ụzọ ọmụrụ nwa kacha elu ma ọ bụ ụzọ ụgwọ kacha nta", standard: "ma na-akwụ opekata mpe ego kacha nta (minimum) n'ụgwọ ọ bụla n'oge" },
    { id: "O4", condition: "Site n'iji atụmatụ ego gị", action: "ịtọ ebumnuche ego nchekwa maka ihe mberede nwere ego, ụbọchị na ụzọ akpaaka isi chekwaa", standard: "nke e tinyere dị ka ahịrị n'atụmatụ ego gị" },
    { id: "O5", condition: "Mgbe e nyere gị ụlọ akụ, credit union, ọrụ mobile money ma ọ bụ otu nchekwa ego", action: "ịlele ụgwọ ọrụ na iwu tupu ị họrọ ebe dị mma isi chekwaa ego", standard: "na-ede ihe ọ na-efu itinye ego na iwepụ ego" },
    { id: "O6", condition: "Mgbe e nyere gị mbinye ego ma ọ bụ onyinye ego", action: "ịmata ihe ịdọ aka na ntị nke mbinye ego na-arapara mmadụ ma ọ bụ aghụghọ tupu i kweta", standard: "na-achọta ihe ịdọ aka na ntị ọ bụla dị n'onyinye ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Mara ebe ego gị na-aga",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ime atụmatụ ego dị mfe kwa ọnwa",
          minutes: 5,
          goal: "Dee atụmatụ ego kwa ọnwa na-egosi ego na-abata, mkpa, ihe ị chọrọ na nchekwa.",
          text: [
            "Atụmatụ ego (budget) bụ atụmatụ maka ego gị. Ọ na-aza ajụjụ abụọ: ego ole na-abata kwa ọnwa, na ebe ọ na-aga. N'enweghị atụmatụ, ego na-efukarị n'obere ihe, ụgwọ ndị buru ibu na-abịakwa dị ka ihe mberede.",
            "Malite n'ego na-abata: ụgwọ ọrụ mgbe e wepụsịrị ụtụ isi, enyemaka dị ka Social Security ma ọ bụ ụgwọ ezumike nka (pension), ego site n'ire ihe ubi ma ọ bụ ngwa ahịa, ego onyinye (tips), ma ọ bụ ego onye nkwado. Ọ bụrụ na ego gị na-agbanwe site n'ọnwa ruo n'ọnwa, jiri ọnwa nkịtị kacha ala, ka atụmatụ ahụ wee rụọ ọrụ ọbụna n'ọnwa ego na-adịghị.",
            "Wee depụta ihe ị na-emefu n'otu atọ. Mkpa bụ ihe ị ga-akwụrịrị: ebe obibi, nri, ọkụ na mmiri, njem, ọgwụ, ego kacha nta n'ụgwọ. Ihe ị chọrọ dị mma mana ọ dịghị mkpa: iri nri n'èzí, uwe ọhụrụ, ọrụ streaming (ilele ihe nkiri n'ịntanetị). Nchekwa bụ ego ị na-edebe n'ebumnuche. Tinye nchekwa n'atụmatụ ahụ dị ka ụgwọ, ọbụlagodi ma ọ dị ntakịrị.",
            "Ọ bụrụ na ihe ị na-emefu karịrị ego na-abata, buru ụzọ belata ihe ị chọrọ, wee chọọ ụzọ dị ọnụ ala isi gboo mkpa. Ngwa enyemaka AI nwere ike inyere gị aka ime tebụl atụmatụ ego efu ma ọ bụ tụọ aro ụzọ isi belata ego, mana dee naanị ego n'ozuzu, ọ bụghị nọmba akaụntụ ma ọ bụ okwuntughe."
          ],
          steps: ["Dee ngụkọta ego na-abata kwa ọnwa mgbe e wepụsịrị ụtụ isi. Ọ bụrụ na ọ na-agbanwe, jiri ọnwa dị ala.", "Depụta mkpa gị na ego nke ọ bụla na-efu kwa ọnwa.", "Depụta ihe ị chọrọ na ego nke ọ bụla na-efu kwa ọnwa.", "Họrọ ego ị ga-echekwa, ọbụlagodi obere.", "Wepụ mkpa, ihe ị chọrọ na nchekwa n'ego na-abata. Ọ bụrụ na azịza ya dị n'okpuru efu, buru ụzọ belata ihe ị chọrọ.", "Lelee atụmatụ ahụ na njedebe ọnwa ma gbanwee ya."],
          words: [["Atụmatụ ego (budget)", "atụmatụ maka otu ị ga-esi jiri ego ị na-enweta kwa ọnwa."], ["Ego na-abata (income)", "ego na-abịa n'aka gị: ụgwọ ọrụ, enyemaka, ihe i rere, tips."], ["Mkpa", "ihe ị ga-akwụrịrị iji dị ndụ ma rụọ ọrụ, dị ka ụgwọ ụlọ, nri na ọgwụ."], ["Ihe ị chọrọ", "ihe ọ dị mma inwe mana ị nwere ike ibi ndụ n'enweghị ha."]],
          slides: [
            { title: "Atụmatụ ego bụ atụmatụ maka ego gị", bullets: ["Ego ole na-abata", "Ebe ọ na-aga", "Ụgwọ agaghị abịa dị ka ihe mberede ọzọ"] },
            { title: "Malite n'ego na-abata", bullets: ["Ụgwọ ọrụ mgbe ụtụ isi gasịrị, enyemaka, ihe i rere, tips", "Ọ bụrụ na ọ na-agbanwe, jiri ọnwa dị ala mee atụmatụ"] },
            { title: "Otu atọ nke mmefu", bullets: ["Mkpa: ebe obibi, nri, njem, ọgwụ", "Ihe ị chọrọ: iri nri n'èzí, ihe ndị ọzọ, ndenye aha (subscriptions)", "Nchekwa: debe ya dị ka ụgwọ"] },
            { title: "Ọ bụrụ na ọ dabaghị", bullets: ["Buru ụzọ belata ihe ị chọrọ", "Chọọ ụzọ dị ọnụ ala isi gboo mkpa", "AI nwere ike ịse tebụl; edela nọmba akaụntụ"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Consumer tools and money guides", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          tryIt: "N'akwụkwọ ma ọ bụ na spreadsheet n'efu (Google Sheets ma ọ bụ Excel), dee ego bịaara gị n'ọnwa gara aga na ego ọ bụla i mefuru nke ị na-echeta. Dee N (mkpa) ma ọ bụ W (ihe ị chọrọ) n'akụkụ nke ọ bụla, tinye ahịrị nchekwa, ma wepụ. Azịza gị ọ dị n'elu ka ọ bụ n'okpuru efu?",
          youCanNow: "ide atụmatụ ego kwa ọnwa nwere ego na-abata, mkpa, ihe ị chọrọ na nchekwa, ma hụ ma ọ dabara.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ ihe ị chọrọ, ọ bụghị mkpa?", options: ["Ụgwọ ụlọ", "Ọgwụ kwa ụbọchị", "Ọrụ streaming ọhụrụ", "Ụgwọ ụgbọ ala ịga ọrụ"], answer: 2, why: "Ọrụ streaming dị mma inwe; ụgwọ ụlọ, ọgwụ na njem ịga ọrụ bụ mkpa." },
            { objective: "O1", q: "Atụmatụ ego gị na-egosi na ị na-emefu karịa ihe ị na-enweta. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Belata ụfọdụ ihe ị chọrọ", "Kwụsị ịkwụ ụgwọ ụlọ", "Binye payday loan", "Tụfuo atụmatụ ego ahụ"], answer: 0, why: "Mgbe atụmatụ ego dị n'okpuru efu, ihe ị chọrọ bụ ebe mbụ a ga-ebelata." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgụ akụkọ kredit gị na akara kredit gị",
          minutes: 5,
          goal: "Nweta akụkọ kredit gị n'efu ma lelee ha maka mperi.",
          text: [
            "Na United States, akụkọ kredit (credit report) bụ ndekọ otu i si binye ego na otu i si kwụghachi ya: mbinye ego, kaadị kredit, ụfọdụ ụgwọ, na akaụntụ e zigara ndị na-anakọta ụgwọ (collections). Ndị na-agbazinye ego, ndị nwe ụlọ na ụfọdụ ndị were mmadụ n'ọrụ na-ele ya. Akara kredit (credit score) bụ nọmba e si n'akụkọ ahụ mee nke na-anwa ịkọ ma ị ga-akwụ ụgwọ n'oge.",
            "Ị nwere ike inweta akụkọ kredit gị n'efu site n'ụlọ ọrụ atọ na-arụ ọrụ na mba niile, Equifax, Experian na TransUnion, na AnnualCreditReport.com ma ọ bụ site n'ịkpọ (877) 322-8228. Consumer Financial Protection Bureau (CFPB, ụlọ ọrụ gọọmentị US na-echebe ndị ahịa) kwuru na ị nwere ike inweta ha n'efu otu ugboro n'izu ugbu a. Ịlele akụkọ nke gị anaghị emebi akara gị.",
            "Kpachara anya: ụfọdụ weebụsaịtị na-ekwu \"free credit report\" (akụkọ kredit n'efu) mana ha na-edenye gị aha n'ihe a na-akwụ ụgwọ. Jiri AnnualCreditReport.com.",
            "Gụọ akụkọ ọ bụla ma chọọ ihe ọ bụla na-abụghị nke gị: akaụntụ i meghebeghị, ịkwụ ụgwọ n'oge na-agafe ma ị kwụrụ n'oge, ụgwọ e dere ugboro abụọ, ma ọ bụ aha ma ọ bụ adreesị ezighi ezi. Ị nwere ikike ikwupụta mperi (dispute) nye ụlọ ọrụ kredit ahụ na azụmahịa kọrọ ya. Ịkwụ ụgwọ n'oge, idebe ego dị na kaadị ka ọ dị ala, na ịghara imeghe ọtụtụ akaụntụ ọhụrụ n'otu oge na-enyere akara gị aka ka oge na-aga."
          ],
          steps: ["Gaa na AnnualCreditReport.com (dee adreesị ahụ n'onwe gị) ma ọ bụ kpọọ (877) 322-8228.", "Rịọ maka akụkọ gị site na Equifax, Experian na TransUnion.", "Lelee aha gị, adreesị gị na akaụntụ ọ bụla.", "Gbaa gburugburu ihe ọ bụla ị na-amaghị ma ọ bụ nke ezighi ezi.", "Kwupụta mperi nye ụlọ ọrụ kredit ahụ, ma debe mbipụta nke ihe i zipụrụ."],
          words: [["Akụkọ kredit (credit report)", "ndekọ otu i si binye ego na otu i si kwụghachi ya."], ["Akara kredit (credit score)", "nọmba e si n'akụkọ kredit gị mee nke ndị na-agbazinye ego ji atụle ihe egwu."], ["Ikwupụta mperi (dispute)", "ịgwa ụlọ ọrụ kredit na ihe dị n'akụkọ gị ezighi ezi ma rịọ ha ka ha dozie ya."], ["Collections", "mgbe e zigara ụgwọ n'ụlọ ọrụ na-anwa ịnakọta ego a na-akwụghị."]],
          slides: [
            { title: "Akụkọ na akara", bullets: ["Akụkọ: akụkọ ihe mere n'ibinye na ịkwụghachi ego gị", "Akara: nọmba e si n'akụkọ ahụ mee", "Ndị na-agbazinye ego, ndị nwe ụlọ na ụfọdụ ndị were mmadụ n'ọrụ na-ele ya"] },
            { title: "Nweta akụkọ gị n'efu", bullets: ["AnnualCreditReport.com ma ọ bụ (877) 322-8228", "Equifax, Experian na TransUnion", "Ịlele akụkọ nke gị anaghị emebi akara gị"] },
            { title: "Chọọ mperi", bullets: ["Akaụntụ i meghebeghị", "Ụgwọ e kwuru na ọ gafere oge na-ezighi ezi, ma ọ bụ nke e dere ugboro abụọ", "Aha ma ọ bụ adreesị ezighi ezi"] },
            { title: "Nyere akara gị aka ka oge na-aga", bullets: ["Kwụọ ụgwọ ọ bụla n'oge", "Debe ego dị na kaadị ka ọ dị ala", "Kwupụta mperi ma debe mbipụta"] }
          ],
          sources: [
            { name: "CFPB: How do I get a free copy of my credit reports?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-free-copy-of-my-credit-reports-en-5/" },
            { name: "CFPB: Credit reports and scores", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/" }
          ],
          tryIt: "Ọ bụrụ na ị bi na US, rịọ opekata mpe otu akụkọ kredit n'efu na AnnualCreditReport.com ma lelee akaụntụ ọ bụla dị na ya. Ọ bụrụ na ị nọ n'èzí US, chọpụta ma mba gị nwere ụlọ ọrụ kredit (credit bureau) na otu esi arịọ akụkọ gị n'aka ya. Dee otu ihe i lelere na ihe ị hụrụ.",
          youCanNow: "inweta akụkọ kredit gị n'efu, gụọ ha maka mperi, ma mara otu esi ekwupụta mperi.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ akụkọ kredit?", options: ["Ndepụta okwuntughe ụlọ akụ gị", "Atụmatụ ego gị kwa ọnwa", "Ndekọ mbinye ego gị, kaadị gị na otu i si kwụọ ụgwọ", "Akwụkwọ ụtụ isi gị"], answer: 2, why: "Akụkọ kredit na-edepụta akaụntụ kredit gị na otu i si kwụọ ha." },
            { objective: "O2", q: "Akụkọ kredit gị na-egosi adreesị ebe ị na-ebibeghị. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Kwupụta ya nye ụlọ ọrụ kredit ahụ ma debe mbipụta", "Mechie akaụntụ gị niile", "Kwụọ onye ị na-amaghị ka o dozie ya"], answer: 1, why: "A ga-ekwupụta mperi dị n'akụkọ kredit, ma debe mbipụta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime atụmatụ ịkwụ ụgwọ",
          minutes: 5,
          goal: "Depụta ụgwọ gị ma họrọ nke ị ga-ebu ụzọ kwụọ karịa.",
          text: [
            "Ọ na-adị mfe imeri ụgwọ mgbe ị hụrụ ya niile. Mee ndepụta ụgwọ ọ bụla: onye ị ji ụgwọ, ego ole, ọmụrụ nwa (interest rate), ego kacha nta ị ga-akwụ na ụbọchị ọ ga-akwụ. Tinye kaadị kredit, kaadị ụlọ ahịa, mbinye ego ụgbọ ala, ụgwọ ọgwụ na ụlọ ọgwụ, ego i binyere n'aka ezinụlọ, na mbinye ego ọ bụla i nwetara site n'app ekwentị.",
            "Kwụọ mgbe niile opekata mpe ego kacha nta n'ụgwọ ọ bụla, n'oge. Ịkwụ ụgwọ n'oge na-agafe na-agbakwunye ụgwọ ntaramahụhụ ma nwee ike imebi kredit gị. Wee tinye ego ọ bụla fọdụrụ naanị n'otu ụgwọ n'otu oge.",
            "E nwere ụzọ abụọ a na-ejikarị ahọrọ. Ụzọ ọmụrụ nwa kacha elu na-akwụ ego karịa n'ụgwọ nwere ọmụrụ nwa kacha elu, nke na-azọpụtakarị ego kacha ukwuu. Ụzọ ụgwọ kacha nta na-ebu ụzọ kwụchaa ụgwọ kacha nta, nke na-enye mmeri ngwa ngwa ma na-eme ka ọtụtụ mmadụ nọgide. Ha abụọ na-arụ ọrụ ma ọ bụrụ na ị nọgide na ya. Mgbe i kwụchara otu ụgwọ, bufee ego ị na-akwụ na ya n'ụgwọ ọzọ.",
            "Ọ bụrụ na ị nweghị ike ịkwụ ụgwọ, kpọọ onye gbazinyere gị ego tupu ụbọchị ọ ga-akwụ ma jụọ maka nhọrọ. Nonprofit credit counselor nwekwara ike inyere gị aka ime atụmatụ. Kpachara anya maka ụlọ ọrụ na-arịọ nnukwu ego ụgwọ ọrụ tupu ha \"ehichapụ\" ụgwọ gị."
          ],
          steps: ["Depụta ụgwọ ọ bụla: onye, ego ole, ọmụrụ nwa, ego kacha nta, ụbọchị ịkwụ.", "Hazie ụzọ isi kwụọ ego kacha nta ọ bụla n'oge, dị ka ncheta.", "Họrọ otu ụgwọ maka ịkwụ karịa: ọmụrụ nwa kacha elu ma ọ bụ ụgwọ kacha nta.", "Mgbe i kwụchara ya, tinye ego ị na-akwụ na ya n'ụgwọ na-esote.", "Ọ bụrụ na ị ga-agafe oge ịkwụ ụgwọ, kpọọ onye gbazinyere gị ego tupu ụbọchị ahụ."],
          words: [["Ọmụrụ nwa (interest rate)", "ọnụ ahịa ibinye ego, e gosiri dị ka pasentị nke ego ị ji."], ["Ego kacha nta (minimum payment)", "ego kacha nta ị ga-akwụ kwa ọnwa ka ị ghara ịgafe oge."], ["Ego fọdụrụ (balance)", "ego ole ị ka ji."]],
          slides: [
            { title: "Hụ ụgwọ gị niile", bullets: ["Onye ị ji ụgwọ na ego ole", "Ọmụrụ nwa, ego kacha nta na ụbọchị ịkwụ", "Tinye mbinye ego app ekwentị na nke ezinụlọ"] },
            { title: "Iwu abụọ", bullets: ["Kwụọ ego kacha nta ọ bụla n'oge", "Tinye ego fọdụrụ n'otu ụgwọ n'otu oge"] },
            { title: "Kedu ụgwọ ị ga-ebu ụzọ kwụọ?", bullets: ["Ọmụrụ nwa kacha elu mbụ: na-azọpụtakarị ego kacha ukwuu", "Ụgwọ kacha nta mbụ: mmeri ngwa ngwa", "I kwụchala ya? Bufee ego ya n'ụgwọ na-esote"] },
            { title: "Ọ siri gị ike?", bullets: ["Kpọọ onye gbazinyere gị ego tupu ụbọchị ịkwụ", "Jụọ nonprofit credit counselor", "Kpachara anya maka nnukwu ego a na-arịọ tupu e hichapụ ụgwọ"] }
          ],
          sources: [{ name: "CFPB: Debt collection and managing debt", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
          tryIt: "Mee tebụl ụgwọ gị (ma ọ bụ ọmụmaatụ e chepụtara ma ọ bụrụ na ị nweghị ụgwọ) nwere onye, ego fọdụrụ, ọmụrụ nwa, ego kacha nta na ụbọchị ịkwụ. Gbaa gburugburu ụgwọ ị ga-akwụ karịa site n'ụzọ ọmụrụ nwa kacha elu, na nke ị ga-akwụ site n'ụzọ ụgwọ kacha nta.",
          youCanNow: "idepụta ụgwọ gị, kwụọ ego kacha nta n'oge, ma họrọ ụgwọ ị ga-ebu ụzọ kwụọ karịa.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ụzọ ụgwọ kacha nta isi kwụọ ụgwọ pụtara?", options: ["Kwụọ naanị ụgwọ kacha nta ma hapụ ndị ọzọ", "Kwụọ karịa n'ụgwọ nwere ego fọdụrụ kacha nta ma na-akwụ ego kacha nta na ndị ọzọ", "Kwụọ otu ego ahụ karịa n'ụgwọ ọ bụla", "Akwụla ihe ọ bụla ruo mgbe i nwere ego karịa"], answer: 1, why: "Ị na-akwụ ego kacha nta na ha niile ma tinye ego karịa n'ụgwọ kacha nta maka mmeri ngwa ngwa." },
            { objective: "O3", q: "Ị maara na ị ga-agafe oge ịkwụ ụgwọ mbinye ego n'izu na-abịa. Gịnị ka ị ga-eme?", options: ["Zoo onye gbazinyere gị ego", "Chere ruo mgbe ha kpọrọ gị", "Binye ego ọhụrụ iji kwụọ ya", "Kpọọ onye gbazinyere gị ego tupu ụbọchị ịkwụ ma jụọ maka nhọrọ"], answer: 3, why: "Ịkpọ oku n'oge na-enye gị nhọrọ kacha ọtụtụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mara ebe ego gị na-aga",
        questions: [
          { objective: "O1", q: "Ego gị na-agbanwe site n'ọnwa ruo n'ọnwa. Kedu ego ị ga-eji mee atụmatụ ego gị?", options: ["Ọnwa gị kacha mma", "Ihe ị na-atụ anya n'afọ na-abịa", "Ọnwa nkịtị dị ala", "Ihe ndị enyi gị na-enweta"], answer: 2, why: "Iji ọnwa dị ala mee atụmatụ pụtara na atụmatụ ego ahụ ka na-arụ ọrụ mgbe ego na-adịghị." },
          { objective: "O1", q: "Kedu nke bụ mkpa, ọ bụghị ihe ị chọrọ?", options: ["Ọgwụ ị na-aṅụ kwa ụbọchị", "Ọrụ streaming", "Iri nri n'èzí na Fraịdee", "Mkpuchi ekwentị ọhụrụ"], answer: 0, why: "Ọgwụ bụ ihe ị ga-akwụrịrị ụgwọ ya ka ahụ dị gị mma." },
          { objective: "O2", q: "Ebee ka ndị nọ na US nwere ike inweta akụkọ kredit ha n'efu?", options: ["Saịtị ọ bụla na-egosi mgbasa ozi maka akụkọ n'efu", "Njikọ (link) n'ozi ederede", "Weebụsaịtị onye na-anakọta ụgwọ", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com bụ ebe gọọmentị kwadoro isi nweta akụkọ n'efu site n'ụlọ ọrụ atọ ahụ." },
          { objective: "O2", q: "Ị hụrụ kaadị kredit n'akụkọ gị nke i meghebeghị. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Kwupụta ya nye ụlọ ọrụ kredit ahụ ma debe mbipụta", "Kwụchaa ya ka o wee pụọ", "Mechie akaụntụ ụlọ akụ gị"], answer: 1, why: "Ị nwere ikike ikwupụta mperi; akaụntụ i meghebeghị nwekwara ike ịbụ izu ohi njirimara (identity theft)." },
          { objective: "O3", q: "Ị nwere ike ịkwụ ntakịrị karịa n'otu ụgwọ. Site n'ụzọ ọmụrụ nwa kacha elu, kedu nke ga-enweta ego ahụ?", options: ["Nke nwere ego fọdụrụ kacha nta", "Nke ụbọchị ịkwụ ya kacha anọ n'azụ", "Nke nwere ọmụrụ nwa kacha elu", "Nke kacha ọhụrụ"], answer: 2, why: "Ibu ụzọ kwụọ ọmụrụ nwa kacha elu na-azọpụtakarị ọmụrụ nwa kacha ukwuu." }
        ]
      }
    },
    {
      name: "Isi 2: Wuo ihe nchekwa gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịmalite ego nchekwa maka ihe mberede",
          minutes: 4,
          goal: "Tọọ ebumnuche ego nchekwa maka ihe mberede na ụzọ akpaaka isi ruo ya.",
          text: [
            "Ego nchekwa maka ihe mberede (emergency fund) bụ ego e debere naanị maka ihe mberede: idozi ụgbọ ala, ụgwọ dọkịta, igwe mmiri mebiri emebi, oge ọrụ furu efu ma ọ bụ ọnwa ahịa na-adịghị. N'enweghị ya, obere nsogbu nwere ike ịbanye gị n'ụgwọ dị oke ọnụ.",
            "Malite n'obere. Consumer Financial Protection Bureau kwuru na ọbụlagodi obere ego na-enye ụfọdụ nchekwa. Otu ụzọ isi họrọ ebumnuche: chee echiche banyere ihe mberede i nwere n'afọ gara aga na ego ha fụrụ. Wee họrọ ebumnuche mbụ ị nwere ike iru, na ebumnuche ka ukwuu mgbe nke ahụ gasịrị.",
            "Mee ka nchekwa bụrụ akpaaka. Hazie mbufe ego mgbe niile n'akaụntụ nchekwa n'ụbọchị ụgwọ ọrụ, ma ọ bụ rịọ onye were gị n'ọrụ ka o kewaa ụgwọ ọrụ gị (direct deposit) ma ọ bụrụ na ha kwere. Tinye ego ụtụ isi a kwụghachiri gị, ego onyinye ma ọ bụ akụkụ ego owuwe ihe ubi ozugbo na nchekwa.",
            "Debe ego ahụ n'ebe dị mma mana iche n'ego ị na-emefu, dị ka akaụntụ nchekwa n'ụlọ akụ ma ọ bụ credit union. Ego n'ụlọ nwere ike ifu ma ọ bụ e zuo ya. Kpebie tupu oge ihe bụ ihe mberede, jiri ego ahụ mgbe ị chọrọ ya, wee wughachi ya."
          ],
          steps: ["Dee ihe mberede i nwere n'afọ gara aga na ego ha fụrụ.", "Họrọ ebumnuche mbụ ị nwere ike iru na ebumnuche ka ukwuu maka mgbe e mesịrị.", "Hazie mbufe ego akpaaka ma ọ bụ ego a kara aka ị na-echekwa n'ụbọchị ụgwọ ọrụ ọ bụla.", "Debe ego ahụ iche n'ego ị na-emefu kwa ụbọchị.", "Dee ihe bụ ihe mberede. Mgbe i jiri ya, wughachi ya."],
          words: [["Ego nchekwa maka ihe mberede (emergency fund)", "ego e debere naanị maka ego a na-atụghị anya ya ma ọ bụ ego na-abata furu efu."], ["Mbufe ego akpaaka (automatic transfer)", "ego ụlọ akụ gị na-ebufe maka gị n'ụbọchị a kara aka, n'emeghị ya oge ọ bụla."], ["Credit union", "ụlọ akụ na-anaghị achọ uru nke ndị otu ya nwe."]],
          slides: [
            { title: "Ihe ọ bụ maka ya", bullets: ["Idozi ihe, ụgwọ dọkịta, ego na-abata furu efu", "Ọ na-egbochi obere nsogbu ịghọ nnukwu ụgwọ"] },
            { title: "Họrọ ebumnuche", bullets: ["Lee ihe mberede nke afọ gara aga", "Malite n'obere, wee mee ka o too", "Ọbụlagodi ntakịrị na-enyere aka"] },
            { title: "Mee ka ọ bụrụ akpaaka", bullets: ["Bufee ego n'ụbọchị ụgwọ ọrụ", "Kewaa direct deposit ma ọ bụrụ na e kwere", "Chekwaa ego a kwụghachiri, onyinye na akụkụ ego owuwe ihe ubi"] },
            { title: "Debe ya n'ebe dị mma na iche", bullets: ["Nchekwa n'ụlọ akụ ma ọ bụ credit union", "Ego n'ụlọ nwere ike ifu ma ọ bụ e zuo ya", "Jiri ya, wee wughachi ya"] }
          ],
          sources: [{ name: "CFPB: An essential guide to building an emergency fund", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }],
          tryIt: "Dee ebumnuche mbụ gị maka ego nchekwa maka ihe mberede, ego ị ga-echekwa kwa izu ma ọ bụ kwa ọnwa, ụbọchị ị ga-echekwa ya, na ebe ị ga-edebe ya. Tinye ya dị ka ahịrị n'atụmatụ ego gị nke Nkuzi 1.",
          youCanNow: "ịtọ ebumnuche ego nchekwa maka ihe mberede, chekwaa ego maka ya n'ụzọ akpaaka, ma debe ya n'ebe dị mma na iche.",
          quickCheck: [
            { objective: "O4", q: "Kedu ihe mberede ego nchekwa maka ihe mberede bụ maka ya?", options: ["Idozi ụgbọ ala ị na-atụghị anya ya", "Ahịa mbelata ọnụ ahịa nke oge ezumike", "Ekwentị ọhụrụ ị chọrọ", "Ịga ntụrụndụ n'abalị"], answer: 0, why: "Ego nchekwa maka ihe mberede na-ekpuchi ego a na-atụghị anya ya, ọ bụghị ihe ị chọrọ i mere atụmatụ ya." },
            { objective: "O4", q: "Ị na-echefu ichekwa ego mgbe niile. Gịnị ka ị ga-eme?", options: ["Chekwaa naanị ihe fọdụrụ na njedebe ọnwa", "Kwụsị ichekwa ego", "Hazie mbufe ego akpaaka n'ụbọchị ụgwọ ọrụ", "Debe ego nchekwa n'akpa ego gị"], answer: 2, why: "Nchekwa akpaaka n'ụbọchị ụgwọ ọrụ na-eme tupu e mefuo ego ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịchekwa ego n'ụlọ akụ, na mobile money ma ọ bụ n'otu nchekwa",
          minutes: 5,
          goal: "Họrọ ebe dị mma isi chekwaa ego ma lelee ụgwọ ọrụ na iwu ya tupu i jiri ya.",
          text: [
            "Ebe ị na-echekwa ego dị mkpa. Na US, akaụntụ nchekwa n'ụlọ akụ ma ọ bụ credit union nke gọọmentị etiti kpuchiri (federally insured) bụ otu n'ime ebe kacha dị mma maka ego. N'ọtụtụ mba, karịsịa n'Afrịka, ndị mmadụ na-echekwa ego na mobile money n'ekwentị ha, n'ụlọ akụ ma ọ bụ SACCO, ma ọ bụ n'otu nchekwa ego.",
            "Ọrụ mobile money dị ka M-Pesa na-ekwe ka i debe ego n'ekwentị gị, zipu ya ma kwụọ ụgwọ. Ọtụtụ n'ime ha nwekwara nhọrọ nchekwa iche ma ọ bụ nchekwa a kpọchiri akpọchi, nke na-enyere aka idebe nchekwa iche n'ego ị na-emefu. Ụgwọ ọrụ na ọmụrụ nwa dị iche n'ọrụ ọ bụla ma na-agbanwe ka oge na-aga, ya mere gụọ tebụl ụgwọ gọọmentị n'app ma ọ bụ na weebụsaịtị onye na-enye ọrụ ahụ, ma ọ bụ jụọ ezi onye nnọchite anya (agent), tupu i bufee ego.",
            "Ọmụmaatụ: a kwụrụ otu nwanyị ọrụ ugbo na Kenya ụgwọ ọka ya n'oge owuwe ihe ubi. Ọ na-eziga akụkụ ego ahụ na nhọrọ nchekwa iche n'otu ụbọchị ahụ, tupu o mefuo ihe ọ bụla, ma hapụ nke fọdụrụ maka mkpụrụ, ụgwọ ụlọ akwụkwọ na nri. Ọ na-ebu ụzọ lelee ụgwọ mbufe ọ bụla na tebụl ụgwọ gọọmentị.",
            "N'otu nchekwa ego, nke a na-akpọkarị chama, onye otu ọ bụla na-akwụ ego a kara aka n'oge a kara aka. Dee ego ọ bụla a kwụrụ, debe mbipụta iwu otu ahụ, ma sonye naanị n'otu ndị ị maara ma tụkwasị obi. Ihe ọ bụla i ji: ekesala PIN gị, ma kpachara anya maka onye ọ bụla na-akpọ oku na-arịọ ka i zighachi ego mgbe ha kwuru na ha zitere ya \"n'ezighi ezi\". Buru ụzọ lelee ego dị n'akaụntụ gị."
          ],
          steps: ["Họrọ ebe ị ga-echekwa: ụlọ akụ, credit union, SACCO, nchekwa mobile money ma ọ bụ otu nchekwa ị tụkwasịrị obi.", "Chọta tebụl ụgwọ na iwu gọọmentị, n'app, na weebụsaịtị gọọmentị ma ọ bụ n'aka ezi agent.", "Bufee nchekwa n'ụbọchị ụgwọ ọrụ ma ọ bụ ụbọchị owuwe ihe ubi, tupu i mefuo.", "Debe ndekọ e dere ede nke ego ọ bụla i tinyere.", "Ekesala PIN gị, ma lelee ego dị n'akaụntụ gị tupu i zighachi onye ọ bụla ego."],
          words: [["Mobile money", "ọrụ na-ekwe ka i debe, zipu ma nata ego site n'ekwentị."], ["SACCO", "otu nchekwa na mbinye ego (savings and credit cooperative), otu ndị otu ya nwe na-echekwa ma na-agbazinye ego, a na-ahụkarị n'Ọwụwa Anyanwụ Afrịka."], ["Chama", "otu nchekwa ego, nke a na-ahụkarị na Kenya, ebe ndị otu na-echekwa ego ọnụ n'oge a kara aka."], ["PIN", "nọmba nzuzo na-echebe akaụntụ gị. Ekesala ya mgbe ọ bụla."]],
          slides: [
            { title: "Họrọ ebe dị mma isi chekwaa ego", bullets: ["US: nchekwa n'ụlọ akụ ma ọ bụ credit union a kpuchiri (insured)", "Afrịka: ụlọ akụ, SACCO, mobile money ma ọ bụ otu nchekwa"] },
            { title: "Nchekwa mobile money", bullets: ["Jiri nhọrọ nchekwa iche ma ọ bụrụ na o nwere", "Buru ụzọ gụọ tebụl ụgwọ gọọmentị", "Ụgwọ na-agbanwe: lelee n'app ma ọ bụ n'aka agent"] },
            { title: "Buru ụzọ chekwaa, wee mefuo", bullets: ["Bufee nchekwa n'ụbọchị ụgwọ ọrụ ma ọ bụ owuwe ihe ubi", "Wee kwụọ ụgwọ mkpụrụ, ụlọ akwụkwọ, nri"] },
            { title: "Nọrọ na nchekwa", bullets: ["Ekesala PIN gị", "Lelee ego dị n'akaụntụ gị tupu i zighachi ego", "Sonye naanị n'otu ị maara ma tụkwasị obi"] }
          ],
          sources: [
            { name: "CFPB: An essential guide to building an emergency fund (where to keep savings)", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }
          ],
          tryIt: "Họrọ ebe ị ga-edebe ego nchekwa maka ihe mberede gị. Chọta tebụl ụgwọ gọọmentị ya ma ọ bụ iwu akaụntụ ya ma dee ihe ọ na-efu itinye ego na iwepụ ego. Ọ bụrụ na ị na-eji mobile money, chọta nhọrọ nchekwa na menu app ahụ n'ebughị ego ọ bụla ugbu a.",
          youCanNow: "ịhọrọ ebe dị mma isi chekwaa ego, buru ụzọ lelee ụgwọ ọrụ na iwu ya, ma chebe akaụntụ gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere ị ga-eji debe ego nchekwa maka ihe mberede n'ụlọ akụ ma ọ bụ credit union kama ego n'ụlọ?", options: ["Ọ ka dị mma pụọ n'izu ohi na ifu efu", "Ọ dị mfe imefu", "Ụlọ akụ na-akwụ gị ụgwọ iwepụ ego", "Ego n'ụlọ na-amụta karịa"], answer: 0, why: "Akaụntụ na-echebe nchekwa karịa ego n'ụlọ." },
            { objective: "O5", q: "Ị na-eme atụmatụ iji nhọrọ nchekwa mobile money. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Bufee ego gị niile ozugbo", "Jụọ onye ị na-amaghị n'ịntanetị ihe ọ na-efu", "Chee na ọ bụ n'efu", "Gụọ tebụl ụgwọ na iwu gọọmentị"], answer: 3, why: "Ụgwọ dị iche ma na-agbanwe, ya mere buru ụzọ lelee tebụl ụgwọ gọọmentị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịmata mbinye ego na-arapara mmadụ na aghụghọ ego",
          minutes: 5,
          goal: "Gụọ mbinye ego ma ọ bụ onyinye ego ma chọta ihe ịdọ aka na ntị tupu i kweta.",
          text: [
            "Mbinye ego na-arapara mmadụ (predatory loan) bụ mbinye ego e mere ka ị nọgide na-akwụ ụgwọ. Payday loan, ụfọdụ car-title loan (mbinye ego e ji akwụkwọ ụgbọ ala) na ụfọdụ mbinye ego app ekwentị dị mkpụmkpụ ma dị oke ọnụ. Ụgwọ ọrụ ahụ nwere ike ịdị ka obere, mana dị ka ọmụrụ nwa kwa afọ (APR) ọnụ ahịa ya nwere ike ịdị elu nke ukwuu, ọtụtụ mmadụ na-ebinyekwa ya ọzọ na ọzọ (rollover). Tupu i binye ego, lee APR na ụgwọ ọrụ ọ bụla, ma jụọ onwe gị otu ị ga-esi kwụghachi ya.",
            "Mara ikike gị na US: Consumer Financial Protection Bureau kwuru na a pụghị ijide gị n'ihi na ị kwụghị payday loan, na onye gbazinyere gị ego nwere ike iwere akụkụ ụgwọ ọrụ gị naanị site n'iwu ụlọikpe. Ndị ọrụ agha nwere nchekwa ọzọ n'okpuru Military Lending Act. Ị nwekwara ike ilele ma onye na-agbazinye ego nwere ikike (license) na steeti gị.",
            "Aghụghọ nwere ihe ịdọ aka na ntị. Ha na-eme ka ị mee ngwa ngwa. Ha na-arịọ ka i jiri gift card, wire transfer, cryptocurrency ma ọ bụ mbufe mobile money nye onye ị na-amaghị kwụọ ụgwọ. Ha na-ekwe nkwa mbinye ego ma ọ bụ onyinye ego (grant) ma ọ bụrụ na i buru ụzọ kwụọ ụgwọ. Ha na-ekwu na i meriri ihe nrite ị na-esoghị. Ha na-arịọ PIN gị, okwuntughe gị ma ọ bụ koodu e zitere n'ekwentị gị.",
            "Mgbe ị hụrụ ihe ịrịba ama: kwụsị, akwụla ụgwọ, ma lelee ya n'ezi ụlọ ọrụ ahụ site na nọmba ị chọtara n'onwe gị. Gwa onye ị tụkwasịrị obi. Nhọrọ dị ọnụ ala karịa mbinye ego na-arapara mmadụ nwere ike ịgụnye ịrịọ onye ị ji ụgwọ ka o nye gị oge karịa, obere mbinye ego site na credit union, ma ọ bụ enyemaka site n'otu nonprofit dị n'obodo gị."
          ],
          steps: ["Chọta APR na ụgwọ ọrụ ọ bụla dị n'onyinye ahụ.", "Jụọ: kedu otu na mgbe m ga-esi kwụghachi nke a, gịnịkwa ma ọ bụrụ na enweghị m ike?", "Chọọ ihe ịrịba ama aghụghọ: ime ngwa ngwa, gift card ma ọ bụ wire, ụgwọ mbụ, ihe nrite, arịrịọ PIN ma ọ bụ koodu.", "Kwụsị ma lelee n'ezi ụlọ ọrụ ahụ site na nọmba ị chọtara n'onwe gị.", "Chọọ nhọrọ dị ọnụ ala: oge karịa site n'aka onye ị ji ụgwọ, mbinye ego credit union, nonprofit."],
          words: [["APR", "annual percentage rate (ọmụrụ nwa kwa afọ): ọnụ ahịa mbinye ego kwa afọ, gụnyere ụgwọ ọrụ, e gosiri dị ka pasentị. Ọ na-ekwe ka i tụnyere mbinye ego."], ["Payday loan", "obere mbinye ego dị mkpụmkpụ, nke a na-akwụkarị n'ụbọchị ụgwọ ọrụ gị na-esote, nke nwere ike ịdị oke ọnụ."], ["Rollover", "ibinye ego ọhụrụ iji kwụọ nke ochie, na-agbakwunye ụgwọ ọrụ ọzọ."], ["Mbinye ego na-arapara mmadụ (predatory loan)", "mbinye ego nwere ọnụ ahịa na-ezighi ezi ma ọ bụ dị oke elu nke na-arapara onye binyere ya."]],
          slides: [
            { title: "Mbinye ego na-arapara gị", bullets: ["Payday, ụfọdụ car-title na mbinye ego app", "Obere ụgwọ ọrụ, APR dị oke elu", "Rollover na-agbakwunye ụgwọ ọrụ ọzọ"] },
            { title: "Tupu i binye ego", bullets: ["Chọta APR na ụgwọ ọrụ niile", "Mara otu ị ga-esi kwụghachi ya", "US: lelee na onye na-agbazinye ego nwere ikike na steeti gị"] },
            { title: "Ihe ịdọ aka na ntị nke aghụghọ", bullets: ["Ha na-eme ka ị mee ngwa ngwa", "Gift card, wire, crypto ma ọ bụ mbufe nye onye ị na-amaghị", "Ụgwọ mbụ maka mbinye ego ma ọ bụ ihe nrite", "Ha na-arịọ PIN gị ma ọ bụ koodu"] },
            { title: "Nhọrọ ka mma", bullets: ["Rịọ onye ị ji ụgwọ ka o nye gị oge karịa", "Obere mbinye ego credit union", "Enyemaka nonprofit dị n'obodo gị"] }
          ],
          sources: [
            { name: "CFPB: Payday loans", url: "https://www.consumerfinance.gov/consumer-tools/payday-loans/" },
            { name: "CFPB: Fraud and scams", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ ego gị nwere otu peeji: atụmatụ ego gị nke Nkuzi 1, ndepụta ụgwọ gị na ụgwọ ị ga-akwụ karịa, ebumnuche ego nchekwa maka ihe mberede gị na ebe i debere ya, na ụbọchị ị ga-elele akụkọ kredit gị. Wee gụọ otu mbinye ego ma ọ bụ onyinye ego ị hụrụ (ozi ederede, mgbasa ozi ma ọ bụ akwụkwọ ozi) ma dee ihe ịdọ aka na ntị ọ bụla ị chọtara.",
          youCanNow: "ịgụ mbinye ego ma ọ bụ onyinye ego, chọta APR na ihe ịdọ aka na ntị, ma họrọ nhọrọ ka dị mma.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ihe ịdọ aka na ntị n'onyinye mbinye ego?", options: ["Ọ na-egosi APR nke ọma", "Ọ na-arịọ ka i jiri gift card kwụọ ụgwọ ọrụ iji nweta mbinye ego ahụ", "Ọ na-enye gị oge ịgụ usoro ya", "Ọ si na credit union gị"], answer: 1, why: "Ụgwọ ọrụ mbụ a na-akwụ site na gift card bụ ihe ịrịba ama aghụghọ a na-ahụkarị." },
            { objective: "O6", q: "Ozi ederede kwuru \"A kwadoro gị tupu oge! Zaa ugbu a ma ọ bụ tufuo onyinye a taa.\" Gịnị ka ị ga-eme?", options: ["Zaa ozugbo", "Zipu ozi ụlọ akụ gị iji jide onyinye ahụ", "Zigara ya ndị enyi gị", "Nwayọọ ma lelee onye na-agbazinye ego ahụ site n'isi iyi gọọmentị tupu ị zaa"], answer: 3, why: "Ime ka ị mee ihe ugbu a bụ ihe ịdọ aka na ntị; lelee tupu ị zaa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Wuo ihe nchekwa gị",
        questions: [
          { objective: "O4", q: "Gịnị ka ego nchekwa maka ihe mberede bụ maka ya?", options: ["Ịzụ ahịa oge ezumike", "Ego a na-atụghị anya ya dị ka idozi ihe ma ọ bụ ego na-abata furu efu", "Ịzụ tiketi lọtrị", "Ịgbazinye ndị enyi ego"], answer: 1, why: "A na-edebe ego nchekwa maka ihe mberede naanị maka ihe mberede na ego na-abata furu efu." },
          { objective: "O4", q: "Kedu ụzọ kacha mma isi nọgide na-echekwa ego kwa ọnwa?", options: ["Chekwaa ihe ọ bụla fọdụrụ na njedebe ọnwa", "Debe ego ahụ n'akpa ego gị", "Buru ụzọ chere nnukwu mmụba ụgwọ ọrụ", "Hazie mbufe ego akpaaka n'ụbọchị ụgwọ ọrụ"], answer: 3, why: "Nchekwa akpaaka na-eme tupu e mefuo ego ahụ." },
          { objective: "O5", q: "Tupu i jiri nhọrọ nchekwa mobile money, gịnị ka ị kwesịrị ilele?", options: ["Tebụl ụgwọ na iwu gọọmentị", "Ihe onye ị na-amaghị na soshal midia kwuru", "Ọ dịghị ihe; ọ bụ n'efu mgbe niile", "PIN onye agbata obi gị"], answer: 0, why: "Ụgwọ na iwu dị iche site n'ọrụ na ọrụ ma na-agbanwe, ya mere buru ụzọ lelee isi iyi gọọmentị." },
          { objective: "O6", q: "Mmadụ zitere ozi ederede na o zitere gị ego n'ezighi ezi ma na-arịọ ka i zighachi ya ugbu a. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Zighachi ya ozugbo", "Kesaa PIN gị ka ha dozie ya", "Lelee ezi ego dị n'akaụntụ gị n'onwe gị tupu i mee ihe ọ bụla", "Zipu ya okpukpu abụọ ka i gosi obiọma"], answer: 2, why: "Nke a bụ aghụghọ a na-ahụkarị; lelee ego dị n'akaụntụ gị ma jụọ onye na-enye gị ọrụ ahụ." },
          { objective: "O6", q: "Onye na-agbazinye ego kwuru na ị ga-enweta mbinye ego ozugbo i jiri gift card kwụọ ụgwọ ọrụ. Nke a bụ:", options: ["Mbinye ego ụlọ akụ nkịtị", "Ihe ịdọ aka na ntị nke aghụghọ", "Onyinye ego gọọmentị", "Akụkọ kredit"], answer: 1, why: "Ibu ụzọ kwụọ ụgwọ ọrụ, karịsịa site na gift card, bụ ihe ịrịba ama aghụghọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ilekọta Ego Gị: Atụmatụ Ego, Kredit na Ịchekwa Ego",
    questions: [
      { objective: "O1", q: "Atụmatụ ego (budget) bụ:", options: ["Atụmatụ maka ego ị na-enweta kwa ọnwa", "Ụdị mbinye ego", "Akara kredit", "Ụgwọ ọrụ ụlọ akụ"], answer: 0, why: "Atụmatụ ego na-akọwa ebe ego gị na-aga." },
      { objective: "O1", q: "Kedu nke dabara n'otu nchekwa nke atụmatụ ego?", options: ["Ụgwọ ụlọ", "Nri abalị a zụtara n'èzí kwa izu", "Ego e debere maka ego nchekwa maka ihe mberede gị", "Ụgwọ ekwentị gị"], answer: 2, why: "Nchekwa bụ ego ị na-edebe n'ebumnuche." },
      { objective: "O1", q: "Atụmatụ ego gị dị n'okpuru efu. Gịnị ka ị kwesịrị ibu ụzọ belata?", options: ["Ọgwụ", "Ihe ị chọrọ", "Ụgwọ ụlọ", "Ego kacha nta n'ụgwọ"], answer: 1, why: "Belata ihe ị chọrọ tupu mkpa." },
      { objective: "O1", q: "Gịnị ka ị NA-EKWESỊGHỊ ide na ngwa enyemaka AI mgbe ị na-eme atụmatụ ego?", options: ["Ego ị na-emefu kwa ọnwa n'ozuzu", "\"Meere m tebụl atụmatụ ego\"", "\"Tụọ aro ụzọ isi belata ego\"", "Nọmba akaụntụ ụlọ akụ gị"], answer: 3, why: "Ekesala nọmba akaụntụ ma ọ bụ okwuntughe na ngwa AI mgbe ọ bụla." },
      { objective: "O2", q: "Gịnị bụ akara kredit?", options: ["Ego dị n'ụlọ akụ gị", "Nọmba e si n'akụkọ kredit gị mee", "Ego na-abata gị", "Ụgwọ ọrụ mbinye ego"], answer: 1, why: "Akara kredit sitere n'ozi dị n'akụkọ kredit gị." },
      { objective: "O2", q: "Ịlele akụkọ kredit nke gị ọ na-ebelata akara gị?", options: ["Mba", "Ee, nke ukwuu", "Ee, ntakịrị oge ọ bụla", "Naanị na ngwụsị izu"], answer: 0, why: "CFPB kwuru na ịrịọ akụkọ nke gị anaghị emebi akara gị." },
      { objective: "O2", q: "Kedu ụlọ ọrụ atọ na-enye akụkọ kredit na mba US niile?", options: ["Visa, Mastercard, Discover", "Social Security, IRS, Medicare", "Chase, Wells Fargo, Citi", "Equifax, Experian, TransUnion"], answer: 3, why: "Ndị a bụ ụlọ ọrụ atọ na-akọ akụkọ kredit na mba niile." },
      { objective: "O2", q: "Weebụsaịtị na-enye \"free credit report\" mana na-arịọ kaadị iji malite nnwale (trial). Kedu nhọrọ ka dị mma?", options: ["Denye aha n'agbanyeghị", "Nye nọmba kaadị gị", "Jiri AnnualCreditReport.com kama", "Kesaa njikọ ahụ nye ndị enyi"], answer: 2, why: "Ụfọdụ saịtị na-edenye gị aha n'ihe a na-akwụ ụgwọ; AnnualCreditReport.com bụ ebe gọọmentị kwadoro maka akụkọ n'efu." },
      { objective: "O2", q: "Akụkọ gị na-egosi ụgwọ gafere oge nke ị maara na i kwụrụ n'oge. Ị kwesịrị:", options: ["Chere ka ọ pụọ", "Meghee kaadị ọhụrụ", "Kwupụta mperi ahụ ma debe mbipụta", "Kwụsị ịkwụ ụgwọ niile"], answer: 2, why: "Ị nwere ike ikwupụta mperi nye ụlọ ọrụ kredit na azụmahịa ahụ." },
      { objective: "O3", q: "N'ndepụta ụgwọ gị, gịnị ka ị ga-akwụ mgbe niile n'ụgwọ ọ bụla?", options: ["Ọ dịghị ihe ruo mgbe ị nwere ike ịkwụ ya niile", "Opekata mpe ego kacha nta, n'oge", "Naanị nke kacha ukwuu", "Okpukpu abụọ nke ego fọdụrụ"], answer: 1, why: "Ịghara ịkwụ ego kacha nta na-agbakwunye ụgwọ ntaramahụhụ ma mebie kredit gị." },
      { objective: "O3", q: "Gịnị mere mmadụ ga-eji họrọ ibu ụzọ kwụọ ụgwọ kacha nta?", options: ["Mmeri ngwa ngwa na-eme ka ha nọgide na-agba mbọ", "Ọ na-azọpụta ego kacha ukwuu mgbe niile", "Ndị na-agbazinye ego chọrọ ya", "Ọ na-ewepụ ọmụrụ nwa niile"], answer: 0, why: "Ịkwụchaa obere ụgwọ ngwa ngwa na-enye mmeri ngwa ngwa; ụzọ ọmụrụ nwa kacha elu na-azọpụtakarị ego karịa." },
      { objective: "O3", q: "Ị ga-agafe oge ịkwụ ụgwọ ụgbọ ala n'izu na-abịa. Kedu ihe kacha mma ime?", options: ["Ekwula ihe ọ bụla ma nwee olileanya", "Binye payday loan", "Gbanwee nọmba ekwentị gị", "Kpọọ onye gbazinyere gị ego tupu ụbọchị ịkwụ ma jụọ maka nhọrọ"], answer: 3, why: "Ndị na-agbazinye ego nwere ike inye nhọrọ ma ọ bụrụ na ị kpọọ n'oge." },
      { objective: "O4", q: "Ezigbo ebumnuche mbụ maka ego nchekwa maka ihe mberede bụ:", options: ["Nnukwu ego ị na-enweghị ike iru", "Obere ego ị nwere ike iru, wee nke ka ukwuu", "Efu ruo mgbe ị bara ọgaranya", "Ihe ọ bụla onye agbata obi gị nwere"], answer: 1, why: "Malite n'obere ma mee ka o too; ọbụlagodi ntakịrị na-enyere aka." },
      { objective: "O5", q: "Ebee ka ọ ka dị mma idebe ego nchekwa maka ihe mberede karịa ego n'ụlọ?", options: ["N'okpuru akwa ndina", "N'aka onye ị na-amaghị n'ịntanetị", "Akaụntụ nchekwa n'ụlọ akụ ma ọ bụ credit union", "N'akpa ego ị na-eji kwa ụbọchị"], answer: 2, why: "Ego nwere ike ifu ma ọ bụ e zuo ya; akaụntụ a kpuchiri ka dị mma." },
      { objective: "O4", q: "A na-akwụ onye ọrụ ugbo ụgwọ n'oge owuwe ihe ubi. Kedu ezigbo omume nchekwa?", options: ["Buru ụzọ mefuo ma chekwaa ihe fọdụrụ", "Gbazinye nwanne nna gị ya niile", "Debe ya niile dị ka ego n'ụlọ", "Bufee akụkụ ya na nchekwa n'otu ụbọchị ahụ, tupu i mefuo"], answer: 3, why: "Ibu ụzọ chekwaa, tupu i mefuo, na-eme ka atụmatụ ahụ rụọ ọrụ." },
      { objective: "O5", q: "Ụgwọ ọrụ mobile money:", options: ["Dị iche site n'ọrụ na ọrụ ma na-agbanwe, ya mere lelee tebụl ụgwọ gọọmentị", "Bụ efu mgbe niile", "Bụ otu n'mba ọ bụla", "Adịghị mkpa mgbe ọ bụla"], answer: 0, why: "Lelee ụgwọ nke ugbu a n'app, na saịtị gọọmentị ma ọ bụ n'aka ezi agent." },
      { objective: "O5", q: "N'otu nchekwa ego (chama), gịnị na-echebe gị kacha mma?", options: ["Ịkwụ ụgwọ n'enweghị ndekọ", "Isonye n'otu ọ bụla n'ịntanetị", "Ndekọ e dere ede nke ego ọ bụla a kwụrụ na mbipụta iwu", "Ikesara otu ahụ PIN gị"], answer: 2, why: "Ndekọ na iwu e dere ede na-echebe onye otu ọ bụla." },
      { objective: "O6", q: "Gịnị ka APR na-agwa gị?", options: ["Akara kredit gị", "Ọnụ ahịa mbinye ego kwa afọ, gụnyere ụgwọ ọrụ, dị ka pasentị", "Ego ole ị na-enweta", "Adreesị ụlọ akụ gị"], answer: 1, why: "APR na-ekwe ka i tụnyere ezi ọnụ ahịa mbinye ego." },
      { objective: "O6", q: "Na US, a nwere ike ijide gị n'ihi na ị kwụghị payday loan?", options: ["Ee, mgbe niile", "Ee, mgbe otu ụbọchị gasịrị", "Naanị na ngwụsị izu", "Mba"], answer: 3, why: "CFPB kwuru na a pụghị ijide gị n'ihi na ị kwụghị payday loan." },
      { objective: "O6", q: "Kedu nhọrọ dị ọnụ ala karịa payday loan?", options: ["Obere mbinye ego site na credit union", "Ime rollover nke payday loan", "Iji gift card kwụọ onye ị na-amaghị", "Mbinye ego chọrọ ka i buru ụzọ kwụọ ụgwọ ọrụ"], answer: 0, why: "Mbinye ego credit union na ịrịọ oge karịa na-efukarị ego dị nta karịa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      2,
      5,
      7,
      9,
      12,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Atụmatụ ego kwa ọnwa",
        objective: "O1",
        notYet: "Ego na-abata ma ọ bụ ihe e mefuru adịghị, ma ọ bụ enweghị ahịrị nchekwa.",
        meets: "E depụtara ego na-abata, mkpa, ihe ị chọrọ na nchekwa, ma lelee ngụkọta ya.",
        exceeds: "Jiri ọnwa nkịtị dị ala ma gosi ihe ndị ọ chọrọ e belatara."
      },
      {
        name: "Atụmatụ ịkwụ ụgwọ",
        objective: "O3",
        notYet: "Ụgwọ ụfọdụ adịghị, ma ọ bụ a họrọghị ụgwọ ọ bụla maka ịkwụ karịa.",
        meets: "E depụtara ụgwọ niile nwere ego fọdụrụ, ọmụrụ nwa, ego kacha nta na ụbọchị ịkwụ, ma họrọ otu maka ịkwụ karịa.",
        exceeds: "Na-akọwa ihe mere o ji họrọ ụzọ ọmụrụ nwa kacha elu ma ọ bụ ụzọ ụgwọ kacha nta."
      },
      {
        name: "Ego nchekwa maka ihe mberede",
        objective: "O4",
        notYet: "Enweghị ebumnuche, ma ọ bụ enweghị ego na ụbọchị.",
        meets: "Ebumnuche, ego, ụbọchị na ebe a ga-echekwa ya, e tinyere n'atụmatụ ego.",
        exceeds: "E hazirela nchekwa ahụ ka ọ na-eme n'ụzọ akpaaka."
      },
      {
        name: "Ebe dị mma isi chekwaa ego",
        objective: "O5",
        notYet: "E họrọrọ ebe n'eleleghị ụgwọ ọrụ ma ọ bụ iwu.",
        meets: "E dere ụgwọ itinye ego na iwepụ ego site n'isi iyi gọọmentị.",
        exceeds: "Tụnyere nhọrọ abụọ tupu ịhọrọ."
      },
      {
        name: "Ụbọchị ilele akụkọ kredit",
        objective: "O2",
        notYet: "Enweghị ụbọchị ilele akụkọ kredit.",
        meets: "Ụbọchị ilele akụkọ kredit site n'ebe gọọmentị kwadoro maka akụkọ n'efu.",
        exceeds: "Elelerela otu akụkọ ma dee ihe ọ hụrụ."
      },
      {
        name: "Ihe ịdọ aka na ntị n'onyinye",
        objective: "O6",
        notYet: "Hapụrụ ihe ịdọ aka na ntị doro anya n'onyinye ahụ.",
        meets: "Na-edepụta ihe ịdọ aka na ntị dị n'ezi onyinye.",
        exceeds: "Na-akpọkwa aha nhọrọ ka dị mma, dị ka mbinye ego credit union."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe na-eji atụmatụ ego e dere ede mgbe ụbọchị 30 gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe malitere ma ọ bụ gbakwunyere n'ego nchekwa maka ihe mberede n'ime ụbọchị 30",
      "Ndị na-amụ ihe lelere akụkọ kredit ha n'ime ụbọchị 60",
      "Ndị na-amụ ihe kwuru na ha zere mbinye ego na-arapara mmadụ ma ọ bụ aghụghọ ego"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ na mkpịsị ode, ma ọ bụ spreadsheet n'efu dị ka Google Sheets ma ọ bụ Excel",
      "Ego bịaara gị na ụgwọ i kwụrụ n'ọnwa gara aga (debe ha na nzuzo)",
      "Ịntanetị maka AnnualCreditReport.com (US) ma ọ bụ ụlọ ọrụ kredit mba gị na tebụl ụgwọ",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge ịchịkọta nọmba nke gị"
    ],
    facilitatorNotes: [
      "Kwe ka ndị na-amụ ihe jiri nọmba e chepụtara na klas; arịọla onye ọ bụla ka o kesaa ezi ego dị n'akaụntụ, nọmba akaụntụ ma ọ bụ akụkọ kredit.",
      "Chetara ndị na-amụ ihe na nke a abụghị ndụmọdụ itinye ego, ma duru ha gaa n'aka nonprofit credit counselor maka mkpebi ndị dị mkpa.",
      "Maka ndị na-amụ ihe nọ n'èzí US, nyere ha aka ịchọta ụlọ ọrụ kredit mba ha na tebụl ụgwọ mobile money gọọmentị.",
      "Bute ezi ọmụmaatụ nke onyinye mbinye ego na aghụghọ maka omume ihe ịdọ aka na ntị.",
      "Jiri rubric tụọ akara atụmatụ ego ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
