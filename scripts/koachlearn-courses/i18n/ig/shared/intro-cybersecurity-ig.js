"use strict";

// Koach Learn course (Igbo translation of shared/intro-cybersecurity.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CISA_PASSWORDS = { name: "CISA Secure Our World: Use strong passwords", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA: Secure Our World", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity-ig",
  lang: "ig",
  translationOf: "intro-cybersecurity",
  category: "Youth",
  name: "Mmalite Nchekwa Ịntanetị (Cybersecurity)",
  skills: "Ịkọwa CIA triad, Ịmata mwakpo a na-ahụkarị, Ịhụ na ịkọ phishing, Iji okwuntughe siri ike na MFA chebe akaụntụ, Imelite ngwaọrụ, Ịza nsogbu nchekwa",
  outcome: "ime nlele nchekwa n'akaụntụ na ngwaọrụ nke gị: tinye okwuntughe siri ike nke dị iche site na password manager, gbanye nkwenye ọtụtụ ụzọ (MFA), melite sọftwụia gị, mata ozi phishing ma kọọ ya, ma gbasoo atụmatụ dị mfe ma ọ bụrụ na e zuru akaụntụ gị.",
  about: [
    "Nchekwa ịntanetị (cybersecurity) pụtara ichebe kọmputa, ekwentị, akaụntụ na ozi pụọ na mwakpo. Ọ dị mkpa maka akaụntụ ụlọ akwụkwọ nwa akwụkwọ, akaụntụ ụlọ akụ ezinụlọ na ndepụta ndị ahịa obere azụmahịa, ọ bụkwa ọrụ na-eto eto.",
    "N'Isi 1 ị ga-amụta ebumnuche nchekwa ndị bụ isi, mwakpo a na-ahụkarị na otu esi amata phishing. N'Isi 2 ị ga-echebe akaụntụ na ngwaọrụ nke gị ma mụta ihe ị ga-eme mgbe ihe mebiri.",
    "Nzọụkwụ ndị a na-agbaso nzọụkwụ anọ bụ isi nke CISA (ụlọ ọrụ gọọmentị US na-ahụ maka nchekwa ịntanetị na akụrụngwa) na-akụziri onye ọ bụla. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, e nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee nlele nchekwa n'otu akaụntụ dị mkpa (email kacha mma): nye ya okwuntughe siri ike nke dị iche, chekwaa ya na password manager, gbanye MFA, lelee na ekwentị ma ọ bụ kọmputa gị emeliela, ma dee atụmatụ ahịrị ise maka ihe ị ga-eme ma ọ bụrụ na e zuru akaụntụ ahụ. Wee chọta otu ozi na-enyo enyo n'email ma ọ bụ n'ozi ederede gị ma depụta ihe ịrịba ama phishing ọ na-egosi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye na-eji email, mgbasa ozi ọha (social media), akaụntụ ụlọ akwụkwọ ma ọ bụ ọrụ na ekwentị kwa ụbọchị: ụmụ akwụkwọ, mmemme ndị ntorobịa, ndị na-achọ ọrụ, ndị ọrụ ọfịs ọhụrụ, ndị ọrụ afọ ofufo na ezinụlọ.",
    startingPoint: "Ha nwere ike ịbanye n'akaụntụ, iji app ma zipu ozi. Ọtụtụ na-eji otu okwuntughe ahụ ọtụtụ ebe, ha agbanyebeghị MFA, ha na-awụfe mmelite, ha amaghịkwa nke ọma otu esi amata ozi phishing site n'ezi ozi ma ọ bụ ihe ha ga-eme ma ọ bụrụ na e zuru akaụntụ ha.",
    gap: "Ọtụtụ mwakpo na ndị nkịtị na-achụ onye ọ kacha dịrị mfe, site n'okwuntughe e jiri ọtụtụ ebe, phishing na aghụghọ mmadụ (social engineering). Omume ole na ole na-egbochi ọtụtụ mwakpo ndị a, na-echebe akaụntụ ụlọ akwụkwọ, ọrụ na ego, ma na-eme ka ndị mmadụ bụrụ ndị ọrụ na ndị ezinụlọ dị nchebe karị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu nchekwa dị ka MFA na phishing",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nke onye na-amụ ihe na otu akaụntụ dị mkpa, dị ka email",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, ihe dị ka nkeji 60 n'ozuzu",
      "Ego: naanị ngwa n'efu, dị ka password manager dị n'ime browser ma ọ bụ ekwentị",
      "Nzuzo: ndị na-amụ ihe anaghị ekesa okwuntughe ma ọ bụ koodu MFA mgbe ọ bụla, ọbụna nye onye nkuzi, ha anaghịkwa ede ya n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị. Ndị na-amụ ihe chọrọ otu akaụntụ ha nwere ike ịbanye na ya, dị ka email."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nkọwa dị mkpụmkpụ nke mwakpo", action: "ịkọwa ebumnuche atọ nke nchekwa (nzuzo, izi ezi na ịdị njikere) ma kwuo nke mwakpo ahụ mebiri", standard: "ma nweta opekata mpe 4 n'ime ọmụmaatụ 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ọmụmaatụ malware, ransomware, izu akaụntụ na aghụghọ mmadụ (social engineering)", action: "ịkpọ aha mwakpo ọ bụla ma kọwaa otu ọ na-esikarị abata", standard: "na-akpọ aha mwakpo ọ bụla nke ọma na otu ụzọ a na-ahụkarị o si abata" },
    { id: "O3", condition: "Mgbe e nyere gị ezi email ma ọ bụ ozi ederede ma ọ bụ ọmụmaatụ", action: "ịmata ihe ịrịba ama phishing ọ na-egosi ma kọọ ya n'ụzọ ziri ezi", standard: "na-edepụta opekata mpe ihe ịrịba ama abụọ ma họrọ ebe ziri ezi a ga-akọ ya" },
    { id: "O4", condition: "Site n'iji password manager n'efu", action: "imepụta okwuntughe siri ike nke dị iche maka otu akaụntụ dị mkpa ma chekwaa ya na password manager", standard: "nwere okwuntughe nke nwere opekata mpe mkpụrụ 16 nke e jibeghị n'akaụntụ ọzọ ọ bụla" },
    { id: "O5", condition: "N'otu akaụntụ dị mkpa na ngwaọrụ nke gị", action: "ịgbanye nkwenye ọtụtụ ụzọ (MFA) ma lelee na ngwaọrụ na app emeliela", standard: "ebe MFA na-arụ ọrụ n'akaụntụ ahụ ma mmelite akpaaka gbanyere" },
    { id: "O6", condition: "Mgbe e nyere gị ihe ịrịba ama na e zuru akaụntụ ma ọ bụ na ngwaọrụ butere nje", action: "ide na ịgbaso atụmatụ mgbake nzọụkwụ na nzọụkwụ", standard: "nwere nzọụkwụ ọ bụla dị mkpa n'usoro dị nchebe: gbanwee okwuntughe, gbanye MFA, pụọ n'oge mbanye ndị ọzọ, lelee ozi mgbake, dọọ ndị kọntaktị aka na ntị ma kọọ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe egwu na otu mwakpo si arụ ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe nchekwa ịntanetị na-echebe",
          minutes: 4,
          goal: "Jiri CIA triad kọwaa ebumnuche atọ nke nchekwa.",
          text: [
            "Ndị ọrụ nchekwa na-ejikarị okwu atọ, a na-akpọ CIA triad. Confidentiality (nzuzo): naanị ndị kwesịrị ekwesị nwere ike ịhụ ozi ahụ, dị ka akara ule gị ma ọ bụ akụkọ ahụike gị. Integrity (izi ezi): ozi ahụ ziri ezi, onye na-ekwesịghị ịgbanwe ya agbanwebeghịkwa ya, dị ka ego dị n'akaụntụ ụlọ akụ. Availability (ịdị njikere): ozi na sistemụ na-arụ ọrụ mgbe ị chọrọ ha, dị ka weebụsaịtị na-anọgide na-arụ ọrụ.",
            "Mwakpo ọ bụla na-emebi opekata mpe otu n'ime atọ ahụ. Onye na-agụ ozi gị na-emebi nzuzo. Onye na-agbanwe ego a ga-akwụ na-emebi izi ezi. Ransomware na-akpọchi kọmputa ụlọ ọgwụ na-emebi ịdị njikere.",
            "A na-akpọ ndị na-awakpo threat actors. Ha gụnyere ndị aghụghọ na-achọ ego ngwa ngwa ruo n'otu ndị omekome haziri ahazi. Ọtụtụ mwakpo na ndị nkịtị abụghị maka gị n'onwe gị; ndị na-awakpo na-achụ onye ọ kacha dịrị mfe."
          ],
          words: [["Nchekwa ịntanetị (cybersecurity)", "ichebe kọmputa, ekwentị, akaụntụ na ozi pụọ na mwakpo."], ["CIA triad", "confidentiality, integrity na availability (nzuzo, izi ezi na ịdị njikere): ebumnuche atọ nke nchekwa."], ["Threat actor", "mmadụ ma ọ bụ otu na-awakpo kọmputa ma ọ bụ akaụntụ."]],
          slides: [
            { title: "CIA triad", bullets: ["Confidentiality (nzuzo): naanị ndị kwesịrị ekwesị na-ahụ ya", "Integrity (izi ezi): ọ na-anọgide na-ezi ezi", "Availability (ịdị njikere): ọ na-arụ ọrụ mgbe ị chọrọ ya"] },
            { title: "Mwakpo na-emebi otu n'ime atọ ahụ", bullets: ["Ịgụ ozi gị: nzuzo", "Ịgbanwe ego a ga-akwụ: izi ezi", "Ịkpọchi kọmputa: ịdị njikere"] },
            { title: "Ndị na-awakpo", bullets: ["Ndị aghụghọ na otu ndị omekome", "Ha na-achụ onye ọ kacha dịrị mfe", "Omume ọma na-eme ka ọ sie ike ịwakpo gị"] }
          ],
          tryIt: "Chee echiche banyere otu app ị na-eji, dị ka portal ụlọ akwụkwọ, app ụlọ akụ ma ọ bụ app usoro oge ọrụ. Dee otu ọmụmaatụ nke ihe nzuzo, izi ezi na ịdị njikere pụtara maka ya.",
          youCanNow: "ịkọwa CIA triad ma kwuo ebumnuche mwakpo na-emebi.",
          quickCheck: [
            { objective: "O1", q: "Na CIA triad, gịnị ka integrity (izi ezi) pụtara?", options: ["Sistemụ ahụ na-adị ọsọ mgbe niile", "Naanị ndị kwesịrị ekwesị nwere ike ịhụ ozi ahụ", "Ozi ahụ dị n'efu maka onye ọ bụla", "Ozi ahụ ziri ezi, onye na-ekwesịghị ịgbanwe ya agbanwebeghịkwa ya"], answer: 3, why: "Izi ezi pụtara na ozi ahụ ziri ezi ma a gbanwebeghị ya n'enweghị ikike." },
            { objective: "O1", q: "Mmadụ na-agụ ozi nzuzo nke otu nwa klas n'enweghị ikike. Kedu ebumnuche i chere na e mebiri?", options: ["Ịdị njikere (availability)", "Nzuzo (confidentiality)", "Izi ezi (integrity)", "Ọ dịghị nke ọ bụla n'ime atọ ahụ"], answer: 1, why: "Nzuzo pụtara na naanị ndị kwesịrị ekwesị nwere ike ịhụ ozi ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mwakpo a na-ahụkarị: malware, ransomware na izu akaụntụ",
          minutes: 5,
          goal: "Kpọọ aha mwakpo a na-ahụkarị na otu nke ọ bụla si abata.",
          text: [
            "Malware bụ sọftwụia na-emebi ihe. Ọ na-abatakarị site n'ihe e jikọtara n'email, app adịgboroja, egwuregwu e zuru ezu (pirated) ma ọ bụ igbe \"mmelite\" adịgboroja na-apụta na mberede. Ransomware bụ malware na-akpọchi faịlụ gị ma na-arịọ ka i kwụọ ụgwọ ka ọ meghee ha.",
            "Izu akaụntụ (account takeover) na-eme mgbe mmadụ banyere n'akaụntụ gị. Ụzọ ndị a na-ahụkarị bụ okwuntughe e zuru ezu ma ọ bụ e chere echiche ya, okwuntughe i jiri na saịtị ọzọ e zuru ozi ya (data breach), ma ọ bụ aghụghọ ka i kesaa koodu otu oge.",
            "Social engineering (aghụghọ mmadụ) pụtara ịghọ mmadụ aghụghọ kama imebi teknụzụ. Onye na-akpọ oku na-eme ka ọ bụ onye IT, ozi adịgboroja gbasara ngwaahịa a na-ezite, ma ọ bụ ozi \"enyi\" na-arịọ koodu bụ social engineering. Ndị mmadụ na-abụkarị ụzọ kacha dị mfe isi abata, ọ bụ ya mere omume gị ji dị mkpa."
          ],
          words: [["Malware", "sọftwụia na-emebi ihe nke nwere ike ịṅụ anya, izu ohi ma ọ bụ imebi ihe."], ["Ransomware", "malware na-akpọchi faịlụ ma na-arịọ ka a kwụọ ụgwọ."], ["Data breach", "mgbe e zuru ozi ụlọ ọrụ chekwara, dị ka okwuntughe."], ["Social engineering", "ịghọ mmadụ aghụghọ ka o nye ohere ma ọ bụ ozi."]],
          slides: [
            { title: "Malware na ransomware", bullets: ["Sọftwụia na-emebi ihe", "Ọ na-abata n'ihe e jikọtara, app adịgboroja, egwuregwu e zuru ezu", "Ransomware na-akpọchi faịlụ ma na-arịọ ụgwọ"] },
            { title: "Izu akaụntụ", bullets: ["Okwuntughe e zuru ezu ma ọ bụ e chere echiche ya", "Okwuntughe e jiri na saịtị e zuru ozi ya", "Aghụghọ ka i kesaa koodu otu oge"] },
            { title: "Social engineering", bullets: ["Ịghọ mmadụ aghụghọ, ọ bụghị igwe", "Oku IT adịgboroja, ozi nnyefe adịgboroja", "Akaụntụ enyi e zuru ezu na-arịọ koodu"] }
          ],
          tryIt: "Maka mwakpo ọ bụla (malware, ransomware, izu akaụntụ, social engineering), dee otu ezi ụzọ o nwere ike isi ruo gị ma ọ bụ ezinụlọ gị, na otu omume ga-egbochi ya.",
          youCanNow: "ịkpọ aha mwakpo a na-ahụkarị na otu ha na-esi abata.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke bụ ụzọ a na-ahụkarị malware si abanye na ngwaọrụ?", options: ["Egwuregwu e zuru ezu ma ọ bụ igbe \"mmelite\" adịgboroja", "Ịgbanye mmelite akpaaka", "Iji password manager", "Ịmalitegharị ekwentị gị"], answer: 0, why: "Malware na-abatakarị n'ihe e jikọtara n'email, app adịgboroja, egwuregwu e zuru ezu na igbe mmelite adịgboroja." },
            { objective: "O2", q: "\"Enyi\" zitere gị ozi na-arịọ koodu ekwentị gị natara ugbu a. Gịnị ka ị ga-eme?", options: ["Zipu koodu ahụ n'ihi na ọ bụ enyi", "Zipu ọkara koodu ahụ", "Ekesala koodu ahụ; nke a nwere ike ịbụ social engineering", "Tinye koodu ahụ na mgbasa ozi ọha ka i lelee ya"], answer: 2, why: "Ịghọ gị aghụghọ ka i kesaa koodu otu oge bụ ụzọ a na-ahụkarị e si ezu akaụntụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhụ na ịkọ phishing",
          minutes: 5,
          goal: "Mata ozi phishing ma kọọ ya n'ụzọ ziri ezi.",
          text: [
            "Phishing bụ email, ozi ederede ma ọ bụ ozi adịgboroja na-anwa ime ka ị pịa njikọ (link), meghee faịlụ ma ọ bụ kesaa ozi. FTC depụtara aghụghọ a na-ahụkarị: ikwu na e nwere ihe na-enyo enyo n'akaụntụ gị, nsogbu n'ịkwụ ụgwọ gị, ịrịọ ka i kwado ozi gbasara gị, akwụkwọ ụgwọ (invoice) ị na-amaghị, njikọ maka ịkwụ ụgwọ, ego gọọmentị a ga-eweghachiri gị, ma ọ bụ kupọn maka ihe n'efu.",
            "Lelee ezi adreesị onye zitere ya, ọ bụghị naanị aha ya. Na kọmputa, bulie òké (mouse) n'elu njikọ (ma ọ bụ pịa ma jide ya na ekwentị) ka ị hụ ebe ọ na-aga n'ezie. Lee ma ọ na-eme ka ị mee ngwa ngwa: \"mee ihe ugbu a ma ọ bụ a ga-emechi akaụntụ gị.\"",
            "Ọ bụrụ na ị maghị onye zitere ya, kọọ ya ma hichapụ ya. Ọ bụrụ na i nwere akaụntụ n'ụlọ ọrụ ahụ, kpọtụrụ ha site na weebụsaịtị ma ọ bụ nọmba ekwentị ị maralarị na ọ bụ ezi nke, ọ bụghị nke dị n'ozi ahụ. FTC kwuru ka i zigaa email phishing na reportphishing@apwg.org, zigaa ozi ederede phishing na SPAM (7726), ma kọọ ya na ReportFraud.ftc.gov. N'ụlọ akwụkwọ ma ọ bụ n'ọrụ, jiri bọtịnụ \"Report phishing\" ma ọ bụ gwa ndị IT."
          ],
          steps: ["Lelee ezi adreesị onye zitere ya.", "Bulie òké n'elu njikọ ma ọ bụ pịa ma jide ya ka ị hụ ebe ọ na-aga.", "Lee ma o nwere ime ngwa ngwa, iyi egwu ma ọ bụ onyinye.", "Apịala, azala ma ọ bụ meghee ihe e jikọtara.", "Kpọtụrụ ụlọ ọrụ ahụ site na nọmba ma ọ bụ saịtị ị maralarị.", "Kọọ ya: email na reportphishing@apwg.org, ozi ederede na 7726, na ReportFraud.ftc.gov; n'ụlọ akwụkwọ ma ọ bụ n'ọrụ gwa ndị IT."],
          words: [["Phishing", "ozi adịgboroja na-anwa ịghọ gị aghụghọ ka ị pịa, meghee faịlụ ma ọ bụ kesaa ozi."], ["Smishing", "phishing site n'ozi ederede (text)."], ["Spoofing", "ime ka aha, nọmba ma ọ bụ adreesị onye zitere ozi yie ezi ihe."]],
          sources: [FTC_PHISHING, { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Aghụghọ phishing a na-ahụkarị (FTC)", bullets: ["\"Ihe na-enyo enyo\" ma ọ bụ \"nsogbu ịkwụ ụgwọ\"", "\"Kwado ozi gbasara gị\"", "Akwụkwọ ụgwọ ị na-amaghị, ego a ga-eweghachiri gị, kupọn n'efu"] },
            { title: "Lelee tupu ị pịa", bullets: ["Ezi adreesị onye zitere, ọ bụghị naanị aha", "Bulie òké n'elu njikọ ma ọ bụ pịa ma jide ya", "Ime ngwa ngwa na iyi egwu bụ ihe ịdọ aka na ntị"] },
            { title: "Kpọtụrụ ụlọ ọrụ ahụ n'onwe gị", bullets: ["Jiri saịtị ma ọ bụ nọmba ị maralarị", "Ọ bụghị mgbe ọ bụla nke dị n'ozi ahụ"] },
            { title: "Kọọ ya", bullets: ["Email: reportphishing@apwg.org", "Ozi ederede: zigaa na 7726 (SPAM)", "ReportFraud.ftc.gov; n'ọrụ ma ọ bụ n'ụlọ akwụkwọ, gwa ndị IT"] }
          ],
          tryIt: "Meghee folda spam ma ọ bụ junk gị (ma ọ bụ ozi ederede gị) ma chọta otu ozi na-enyo enyo. N'apịghị ihe ọ bụla, depụta ihe ịrịba ama phishing niile ị hụrụ, wee kọọ ya ma ọ bụ hichapụ ya.",
          youCanNow: "ịhụ ozi phishing, zere ọnyà ya ma kọọ ya n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O3", q: "Na ekwentị, kedu otu ị ga-esi hụ ebe njikọ na-aga n'ezie tupu i meghee ya?", options: ["Pịa ya ugboro abụọ ngwa ngwa", "Pịa ma jide njikọ ahụ", "Zaa onye zitere ya", "Gbanyụọ ekwentị ma gbanye ya ọzọ"], answer: 1, why: "Ịpị ma jide ya na-egosi ezi adreesị n'emegheghị ya." },
            { objective: "O3", q: "Ozi ederede kwuru na ngwaahịa a na-ezitere gị kwụsịrị, na ị ga-akwụ obere ego site na njikọ. Ọ dịghị ngwaahịa ọ bụla na-abịakwute gị. Gịnị ka ị ga-eme?", options: ["Kwụọ ego ahụ ka i wee nọrọ na nchekwa", "Zaa ya na-ajụ ngwaahịa ọ bụ", "Pịa njikọ ahụ ka ị hụ ihe ọ na-ekwu", "Zigaa ya na SPAM (7726), kọọ ya ma hichapụ ya"], answer: 3, why: "FTC kwuru ka i zigaa ozi ederede phishing na SPAM (7726) ma kọọ ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe egwu na otu mwakpo si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Ransomware kpọchiri kọmputa ụlọ ọgwụ nke mere na ndị ọrụ enweghị ike iji ha. Kedu ebumnuche e mebiri?", options: ["Nzuzo (confidentiality)", "Ọ dịghị nke ọ bụla", "Izi ezi (integrity)", "Ịdị njikere (availability)"], answer: 3, why: "Ịdị njikere pụtara na sistemụ na-arụ ọrụ mgbe ị chọrọ ha." },
          { objective: "O1", q: "Mmadụ gbanwere ego dị n'arịrịọ ịkwụ ụgwọ. Kedu ebumnuche e mebiri?", options: ["Ọsọ", "Ịdị njikere (availability)", "Nzuzo (confidentiality)", "Izi ezi (integrity)"], answer: 3, why: "Izi ezi pụtara na ozi na-anọgide na-ezi ezi." },
          { objective: "O2", q: "Onye na-akpọ oku kwuru na ya si n'IT, na ọ chọrọ koodu e zitere gị ugbu a. Nke a bụ:", options: ["Ọrụ IT nkịtị", "Mmelite sọftwụia", "Social engineering", "Ndabere (backup)"], answer: 2, why: "Ịghọ mmadụ aghụghọ ka o nye koodu bụ social engineering." },
          { objective: "O2", q: "I jiri otu okwuntughe ahụ na saịtị egwuregwu e zuru ozi ya. Gịnị bụ ihe egwu ya?", options: ["Ọ dịghị", "Ekwentị gị ga-agbaji", "Ihuenyo gị ga-agba ọchịchịrị", "Ndị na-awakpo nwere ike ịnwa okwuntughe ahụ n'akaụntụ gị ndị ọzọ"], answer: 3, why: "Okwuntughe e jiri ọtụtụ ebe nke e zuru na breach na-eduga n'izu akaụntụ." },
          { objective: "O3", q: "Email kwuru na a kpọchiri akaụntụ ụlọ akụ gị ma nye njikọ. Nzọụkwụ kacha dị nchebe bụ:", options: ["Pịa njikọ ahụ ngwa ngwa", "Zaa ya na okwuntughe gị", "Gaa n'ezi saịtị ụlọ akụ ahụ ma ọ bụ kpọọ nọmba ị maara", "Zigaa ya ndị enyi gị"], answer: 2, why: "Kpọtụrụ ụlọ ọrụ ahụ site na saịtị ma ọ bụ nọmba ị maralarị na ọ bụ ezi nke." }
        ]
      }
    },
    {
      name: "Isi 2: Ichebe akaụntụ na ngwaọrụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Okwuntughe siri ike na password manager",
          minutes: 5,
          goal: "Mepụta okwuntughe siri ike nke dị iche ma chekwaa ya na password manager.",
          text: [
            "CISA kwuru na okwuntughe siri ike dị ogologo (opekata mpe mkpụrụ 16), enweghị usoro (random), ma dị iche (nke ọzọ maka akaụntụ ọ bụla). Passphrase nke nwere okwu anọ ruo asaa na-enweghị njikọ, dị ka ọmụmaatụ CISA \"HorsePurpleHatRun\", dị ogologo ma dị mfe icheta.",
            "Ọ dịghị onye nwere ike icheta okwuntughe siri ike dị iche maka akaụntụ ọ bụla, ya mere jiri password manager. Ọ na-emepụta ma chekwaa okwuntughe maka gị; ị na-echeta naanị otu okwuntughe isi siri ike. CISA kwuru na ụfọdụ dị n'efu, gụnyere ndị dị n'ime web browser na ekwentị.",
            "Ekesala okwuntughe mgbe ọ bụla, edela ha n'ime ngwa AI, ma gbanwee okwuntughe ozugbo ma ọ bụrụ na ụlọ ọrụ gwara gị na ọ dị n'ime data breach."
          ],
          steps: ["Meghee password manager: nke dị n'ime browser ma ọ bụ ekwentị gị, ma ọ bụ app a pụrụ ịtụkwasị obi.", "Họrọ akaụntụ gị kacha mkpa, nke na-abụkarị email.", "Jiri manager ahụ mepụta okwuntughe dị ogologo na-enweghị usoro, ma ọ bụ mee passphrase nwere okwu 4 ruo 7.", "Chekwaa ya na manager ahụ.", "Gbanwee okwuntughe n'akaụntụ ahụ ma nwalee ịbanye."],
          words: [["Password manager", "app na-emepụta ma na-echekwa okwuntughe gị n'enweghị nsogbu."], ["Passphrase", "okwuntughe e ji ọtụtụ okwu na-enweghị njikọ mee."], ["Okwuntughe dị iche (unique)", "okwuntughe e ji naanị maka otu akaụntụ."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Okwuntughe siri ike (CISA)", bullets: ["Ogologo: opekata mpe mkpụrụ 16", "Enweghị usoro (random)", "Dị iche: nke ọzọ maka akaụntụ ọ bụla"] },
            { title: "Passphrase", bullets: ["Okwu 4 ruo 7 na-enweghị njikọ", "Ọmụmaatụ: HorsePurpleHatRun"] },
            { title: "Jiri password manager", bullets: ["Ọ na-emepụta ma chekwaa okwuntughe", "Ị na-echeta otu okwuntughe isi", "Ụfọdụ dị n'efu, n'ime browser na ekwentị"] }
          ],
          tryIt: "Meghee password manager dị na ekwentị ma ọ bụ browser gị. Jiri ya mepụta ma chekwaa okwuntughe ọhụrụ siri ike maka otu akaụntụ dị gị mkpa.",
          youCanNow: "imepụta okwuntughe siri ike nke dị iche ma debe ya na password manager.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka \"dị iche\" (unique) pụtara maka okwuntughe?", options: ["O nwere aha gị n'ime ya", "Ọ dị mkpụmkpụ ma dị mfe ide", "Ọ dị iche maka akaụntụ ọ bụla", "Ọ bụ otu ihe ahụ na PIN ekwentị gị"], answer: 2, why: "A na-eji okwuntughe dị iche naanị maka otu akaụntụ, ya mere otu breach anaghị emeghe ndị ọzọ." },
            { objective: "O4", q: "Ụlọ ọrụ zitere gị email na okwuntughe gị dị n'ime data breach. Gịnị ka ị ga-eme?", options: ["Gbanwee okwuntughe ahụ ozugbo", "Chere ka ị hụ ma ihe ọ bụla ga-eme", "Jiri otu okwuntughe ahụ n'akaụntụ ọhụrụ", "Kesaa okwuntughe ahụ na enyi gị ka o lelee ya"], answer: 0, why: "Gbanwee okwuntughe ozugbo mgbe ụlọ ọrụ kwuru na ọ dị n'ime breach." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nkwenye ọtụtụ ụzọ (MFA) na mmelite",
          minutes: 5,
          goal: "Gbanye nkwenye ọtụtụ ụzọ (MFA) ma melite ngwaọrụ.",
          text: [
            "Multifactor authentication (MFA, nkwenye ọtụtụ ụzọ) na-arịọ ihe akaebe nke abụọ mgbe okwuntughe gị gasịrị, dị ka koodu site na authenticator app, ozi na-ajụ gị ajụjụ na ekwentị gị, security key ma ọ bụ passkey. Ọbụna ma onye zuru okwuntughe gị, ọ gaghị abanye n'enweghị ihe nke abụọ ahụ. Bụrụ ụzọ gbanye ya maka email, ụlọ akụ, ụlọ akwụkwọ na mgbasa ozi ọha. CISA kwuru na MFA ọ bụla ka mma karịa enweghị nke ọ bụla, na ụdị kacha sie ike bụ MFA na-eguzogide phishing (FIDO, nke passkey na security key na-eji), nke siri ike ịghọ aghụghọ karịa koodu ozi ederede.",
            "Ekesala koodu MFA mgbe ọ bụla. Ọ bụrụ na ị nweta koodu ma ọ bụ arịrịọ ịbanye ị rịọghị, mmadụ nwere ike inwe okwuntughe gị: jụ ya ma gbanwee okwuntughe gị.",
            "Mmelite na-edozi oghere nchekwa ndị na-awakpo maralarị. Gbanye mmelite akpaaka maka ekwentị, kọmputa, browser na app gị, ma malitegharịa ya mgbe a gwara gị. CISA depụtara imelite sọftwụia dị ka otu n'ime nzọụkwụ anọ bụ isi ya, ya na izere phishing, okwuntughe siri ike na MFA."
          ],
          steps: ["Meghee ntọala nchekwa (security settings) nke akaụntụ email gị.", "Chọta two-step verification, two-factor ma ọ bụ multifactor authentication.", "Gbasoo nzọụkwụ ndị ahụ; passkey, security key ma ọ bụ authenticator app siri ike ịghọ aghụghọ karịa koodu ozi ederede, mana MFA ọ bụla ka mma karịa enweghị nke ọ bụla.", "Chekwaa koodu ndabere (backup codes) n'ebe dị nchebe na-anọghị n'ịntanetị.", "Meghee ntọala ekwentị ma ọ bụ kọmputa gị ma gbanye mmelite akpaaka."],
          words: [["Multifactor authentication (MFA)", "ihe akaebe nke abụọ, mgbe okwuntughe gị gasịrị, na ọ bụ gị n'ezie."], ["Authenticator app", "app na-egosi koodu ịbanye na-agbanwe kwa sekọnd ole na ole."], ["Passkey", "ụzọ ịbanye na-eji ngwaọrụ gị na ihu gị, mkpịsị aka gị ma ọ bụ PIN kama okwuntughe."], ["Mmelite / patch (update)", "ndozi site n'aka onye mere ya nke na-emechi oghere nchekwa."]],
          sources: [CISA_SOW, { name: "CISA: More than a password (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "MFA: mkpọchi nke abụọ", bullets: ["Okwuntughe + koodu, arịrịọ, key ma ọ bụ passkey", "Okwuntughe e zuru ezu ezughị", "Gbanye ya maka email, ụlọ akụ, ụlọ akwụkwọ, mgbasa ozi ọha"] },
            { title: "Koodu ma ọ bụ arịrịọ ị na-atụghị anya ya?", bullets: ["Ekesala ya mgbe ọ bụla", "Jụ ya", "Gbanwee okwuntughe gị"] },
            { title: "Melite ihe niile", bullets: ["Ekwentị, kọmputa, browser, app", "Gbanye mmelite akpaaka", "Malitegharịa mgbe a gwara gị"] }
          ],
          tryIt: "Gbanye MFA maka akaụntụ email gị ma chekwaa koodu ndabere gị. Wee lelee ekwentị ma ọ bụ kọmputa gị maka mmelite ma wụnye nke ọ bụla na-eche.",
          youCanNow: "ịgbanye MFA ma na-emelite ngwaọrụ gị.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ọmụmaatụ ihe nke abụọ maka MFA?", options: ["Aha njirimara gị (username)", "Agba ị kacha hụ n'anya", "Adreesị email gị", "Koodu site na authenticator app"], answer: 3, why: "MFA na-arịọ ihe akaebe nke abụọ mgbe okwuntughe gasịrị, dị ka koodu authenticator." },
            { objective: "O5", q: "Ekwentị gị na-arịọ ka ọ wụnye mmelite ma malitegharịa. Gịnị ka ị ga-eme?", options: ["Leghara ya anya ọtụtụ ọnwa", "Gbanyụọ mmelite ka ọ kwụsị ịjụ", "Wụnye ya ma malitegharịa mgbe a gwara gị", "Melite naanị ma ọ bụrụ na enyi gwara gị"], answer: 2, why: "Mmelite na-edozi oghere nchekwa ndị na-awakpo maralarị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mgbe ihe mebiri",
          minutes: 5,
          goal: "Gbasoo atụmatụ dị mfe ma ọ bụrụ na e zuru akaụntụ ma ọ bụ ngwaọrụ butere nje.",
          text: [
            "Ihe ịrịba ama nsogbu: ị nweghị ike ịbanye, ndị enyi gị na-enweta ozi dị iche site n'aka gị, ị na-ahụ mbanye ma ọ bụ ihe e zụrụ ị na-emeghị, ma ọ bụ ngwaọrụ gị na-egosi igbe na-apụta na mberede ma ọ bụ na-agba nwayọọ nke ukwuu na mberede.",
            "Ọ bụrụ na e zuru akaụntụ: site na ngwaọrụ dị nchebe, gbanwee okwuntughe, gbanye MFA, pụọ n'oge mbanye (sessions) ndị ọzọ niile (ọtụtụ akaụntụ nwere nke a na ntọala nchekwa), ma lelee email na nọmba ekwentị mgbake. Gwa ndị kọntaktị gị ka ha ghara ịpị ozi si n'aka gị. Ọ bụrụ na ego metụtara ya, kpọọ ụlọ akụ gị site na nọmba dị na kaadị gị.",
            "Ọ bụrụ na i pịrị njikọ ọjọọ ma ọ bụ chee na ngwaọrụ butere nje, FTC kwuru ka i melite sọftwụia nchekwa gị, mee nyocha (scan) ma wepụ ihe ọ bụla ọ gosiri. N'ụlọ akwụkwọ ma ọ bụ n'ọrụ, gwa ndị IT ozugbo; ịkọ ngwa ngwa abụghị ịbanye na nsogbu, ọ na-ebelata mmebi. Kọọ aghụghọ na ReportFraud.ftc.gov ma ọ bụ ic3.gov nke FBI."
          ],
          steps: ["Jiri ngwaọrụ dị nchebe.", "Gbanwee okwuntughe ma gbanye MFA.", "Pụọ n'oge mbanye ndị ọzọ niile.", "Lelee email na ekwentị mgbake.", "Dọọ ndị kọntaktị aka na ntị; kpọọ ụlọ akụ gị ma ọ bụrụ na ego metụtara ya.", "Melite sọftwụia nchekwa ma mee nyocha.", "Gwa ndị IT n'ụlọ akwụkwọ ma ọ bụ n'ọrụ; kọọ aghụghọ na ReportFraud.ftc.gov ma ọ bụ ic3.gov."],
          words: [["Incident", "nsogbu nchekwa, dị ka akaụntụ e zuru ezu ma ọ bụ ngwaọrụ butere nje."], ["Session (oge mbanye)", "ebe ị banyere, dị ka ekwentị ma ọ bụ browser."], ["Ozi mgbake (recovery info)", "email na ekwentị ọrụ ahụ na-eji enyere gị aka ịlaghachi n'akaụntụ gị."]],
          sources: [FTC_PHISHING, { name: "FBI Internet Crime Complaint Center (IC3)", url: "https://www.ic3.gov" }, { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Ihe ịrịba ama nsogbu", bullets: ["Ị nweghị ike ịbanye", "Ndị enyi na-enweta ozi dị iche site n'aka gị", "Mbanye ma ọ bụ ihe e zụrụ ị na-emeghị"] },
            { title: "Atụmatụ akaụntụ e zuru ezu", bullets: ["Gbanwee okwuntughe, gbanye MFA", "Pụọ n'oge mbanye niile", "Lelee email na ekwentị mgbake"] },
            { title: "Ngwaọrụ butere nje ma ọ bụ ego metụtara ya", bullets: ["Melite sọftwụia nchekwa ma mee nyocha", "Kpọọ ụlọ akụ gị na nọmba dị na kaadị gị"] },
            { title: "Kọọ ya ngwa ngwa", bullets: ["Gwa ndị IT n'ụlọ akwụkwọ ma ọ bụ n'ọrụ", "ReportFraud.ftc.gov ma ọ bụ ic3.gov"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee nlele nchekwa n'email gị (okwuntughe siri ike na manager, MFA gbanyere, ngwaọrụ emeliela), dee atụmatụ ahịrị ise gị maka akaụntụ e zuru ezu, ma depụta ihe ịrịba ama phishing n'otu ozi na-enyo enyo.",
          youCanNow: "ichebe akaụntụ site na mbido ruo na njedebe ma zaa nwayọọ ma ọ bụrụ na e zuru ya.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ihe ịrịba ama na e nwere ike izu akaụntụ?", options: ["Ndị enyi na-enweta ozi dị iche site n'aka gị nke ị na-ezipughị", "I banyere ụnyaahụ", "Okwuntughe gị dị ogologo", "I gbanyere MFA"], answer: 0, why: "Ozi dị iche e zitere site n'akaụntụ gị bụ ihe ịrịba ama a na-ahụkarị nke izu akaụntụ." },
            { objective: "O6", q: "N'ọrụ, i chere na i pịrị njikọ ọjọọ. Gịnị ka ị ga-eme?", options: ["Gbachi nkịtị ka ị ghara ịbanye na nsogbu", "Gwa ndị IT ozugbo", "Pịa njikọ ahụ ọzọ ka i lelee", "Gbanyụọ MFA"], answer: 1, why: "Ịkọ ngwa ngwa na-ebelata mmebi, ọ bụghịkwa ịbanye na nsogbu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ichebe akaụntụ na ngwaọrụ",
        questions: [
          { objective: "O4", q: "Dị ka CISA si kwuo, okwuntughe siri ike bụ:", options: ["Nke dị mkpụmkpụ ma dị mfe", "Otu ihe ahụ maka akaụntụ ọ bụla", "Aha anụ ụlọ gị", "Nke dị ogologo, enweghị usoro ma dị iche"], answer: 3, why: "CISA kwuru ogologo (opekata mpe mkpụrụ 16), enweghị usoro ma dị iche." },
          { objective: "O4", q: "Gịnị ka password manager na-eme?", options: ["Ọ na-ekesa okwuntughe gị na ndị enyi gị", "Ọ na-ehichapụ akaụntụ gị", "Ọ na-emepụta ma chekwaa okwuntughe siri ike maka gị", "Ọ na-agbanyụ MFA"], answer: 2, why: "Ị na-echeta otu okwuntughe isi; ọ na-echekwa ndị ọzọ." },
          { objective: "O5", q: "I nwetara arịrịọ MFA ị na-arịọghị. Gịnị ka ị ga-eme?", options: ["Kwado ya", "Zigara enyi gị koodu ahụ", "Leghara ya anya ruo mgbe ebighị ebi", "Jụ ya ma gbanwee okwuntughe gị"], answer: 3, why: "Arịrịọ ị na-atụghị anya ya pụtara na mmadụ nwere ike inwe okwuntughe gị." },
          { objective: "O5", q: "Gịnị mere a ga-eji wụnye mmelite?", options: ["Ha na-edozi oghere nchekwa ndị na-awakpo maara", "Ha na-eme ka ekwentị dị arọ", "Ha na-ehichapụ foto gị", "Ha bụ naanị maka egwuregwu"], answer: 0, why: "Mmelite na-emechi oghere nchekwa a maara." },
          { objective: "O6", q: "E zuru akaụntụ gị. Mgbe i gbanwechara okwuntughe, nzọụkwụ dị mkpa bụ:", options: ["Itinye okwuntughe ọhụrụ gị n'ịntanetị", "Ihichapụ ndị kọntaktị gị", "Ịgbanyụ mmelite", "Ịpụ n'oge mbanye ndị ọzọ niile"], answer: 3, why: "Ịpụ ebe niile na-achụpụ onye na-awakpo ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Nchekwa Ịntanetị (Cybersecurity)",
    questions: [
      { objective: "O1", q: "Nchekwa ịntanetị (cybersecurity) bụ:", options: ["Ichebe ngwaọrụ, akaụntụ na ozi pụọ na mwakpo", "Ime ka weebụsaịtị nwee agba mara mma", "Ụdị ekwentị", "Egwuregwu vidiyo"], answer: 0, why: "Ọ na-echebe ngwaọrụ, akaụntụ na ozi." },
      { objective: "O1", q: "Na CIA triad, \"confidentiality\" (nzuzo) pụtara:", options: ["Sistemụ ahụ na-adị ọsọ", "E nwere ndabere (backup) nke ozi ahụ", "Naanị ndị kwesịrị ekwesị nwere ike ịhụ ozi ahụ", "Ọkụ eletrik dị"], answer: 2, why: "Nzuzo na-eme ka ozi bụrụ ihe nzuzo." },
      { objective: "O1", q: "Mwakpo kwụsịrị weebụsaịtị nke mere na ndị ahịa enweghị ike iji ya. Kedu ebumnuche e mebiri?", options: ["Izi ezi (integrity)", "Nzuzo (confidentiality)", "Ịdị njikere (availability)", "Nkwenye (authentication)"], answer: 2, why: "Ịdị njikere pụtara na ọ na-arụ ọrụ mgbe a chọrọ ya." },
      { objective: "O2", q: "Malware bụ:", options: ["Mmelite bara uru", "Firewall", "Password manager", "Sọftwụia na-emebi ihe"], answer: 3, why: "Malware bụ sọftwụia na-emebi ihe." },
      { objective: "O2", q: "Ransomware:", options: ["Na-eme ka kọmputa gị dị ọsọ", "Na-akpọchi faịlụ ma na-arịọ ụgwọ", "Na-echekwa foto gị", "Na-egbochi spam"], answer: 1, why: "Ransomware na-ejide faịlụ dị ka onye a dọọrọ n'agha." },
      { objective: "O2", q: "Social engineering bụ:", options: ["Iwu àkwà mmiri", "Ịghọ ndị mmadụ aghụghọ ka ha nye ohere ma ọ bụ ozi", "Imelite app", "Naanị otu isiokwu n'ụlọ akwụkwọ"], answer: 1, why: "Ọ na-awakpo ndị mmadụ kama teknụzụ." },
      { objective: "O2", q: "Kedu ụzọ a na-ahụkarị e si ezu akaụntụ?", options: ["Iji okwuntughe e zuru na breach ọtụtụ ebe", "Iji MFA", "Iwụnye mmelite", "Iji password manager"], answer: 0, why: "Okwuntughe e zuru ezu, e jiri ọtụtụ ebe, na-eme ka ndị na-awakpo banye n'akaụntụ ndị ọzọ." },
      { objective: "O3", q: "Phishing bụ:", options: ["Ozi adịgboroja na-anwa ịghọ gị aghụghọ", "App ịkụ azụ", "Ụzọ ndabere (backup)", "Ụdị okwuntughe"], answer: 0, why: "Phishing na-aghọ gị aghụghọ ka ị pịa ma ọ bụ kesaa ihe." },
      { objective: "O3", q: "Kedu ihe ịrịba ama phishing FTC depụtara?", options: ["Ozi site n'aka enyi ị na-atụ anya ya", "Akwụkwọ nnata maka ihe ị zụrụ", "Ikwu na e nwere ihe na-enyo enyo ya na njikọ iji dozie ya", "Akwụkwọ akụkọ ụlọ akwụkwọ"], answer: 2, why: "Ozi adịgboroja \"ihe na-enyo enyo\" bụ aghụghọ a na-ahụkarị." },
      { objective: "O3", q: "Tupu ị pịa njikọ n'email na kọmputa, ị nwere ike:", options: ["Ibulie òké n'elu ya ka ị hụ ebe ọ na-aga n'ezie", "Ịpị ya ugboro abụọ", "Iji okwuntughe gị zaa ya", "Ịgbanyụ kọmputa"], answer: 0, why: "Ibulie òké n'elu ya na-egosi ezi adreesị weebụ." },
      { objective: "O3", q: "Ebee ka FTC kwuru ka i zigaa ozi ederede phishing?", options: ["Ndị kọntaktị gị niile", "SPAM (7726)", "Onye zitere ya", "911"], answer: 1, why: "Zigaa ozi ederede phishing na 7726 (SPAM)." },
      { objective: "O3", q: "N'ọrụ, ị nwetara email na-enyo enyo. Gịnị ka ị ga-eme?", options: ["Pịa ya ka ị hụ ma ọ bụ eziokwu", "Kọọ ya site na bọtịnụ phishing ma ọ bụ gwa ndị IT", "Zigaa ya ndị ọrụ ibe gị", "Zaa ya ma jụọ"], answer: 1, why: "Ndị IT nwere ike igbochi ya maka onye ọ bụla." },
      { objective: "O4", q: "Ogologo kacha nta CISA kwuru maka okwuntughe siri ike bụ:", options: ["Opekata mpe mkpụrụ 16", "Mkpụrụ 4", "Kpọmkwem mkpụrụ 8", "Ogologo ọ bụla"], answer: 0, why: "CISA kwuru opekata mpe mkpụrụ 16; nke ka ogologo ka sie ike." },
      { objective: "O4", q: "Kedu nke bụ ezigbo passphrase?", options: ["password123", "Ụbọchị ọmụmụ gị", "HorsePurpleHatRun", "abc"], answer: 2, why: "Ọtụtụ okwu na-enweghị njikọ na-eme ka ọ dị ogologo ma sie ike ịkọ." },
      { objective: "O4", q: "Password manager pụtara na ị chọrọ icheta naanị:", options: ["Okwuntughe niile", "Otu okwuntughe isi siri ike", "Ọ dịghị okwuntughe, ọ dịghịkwa ngwaọrụ", "Okwuntughe enyi gị"], answer: 1, why: "Manager ahụ na-echekwa ndị ọzọ." },
      { objective: "O5", q: "MFA na-echebe gị n'ihi na:", options: ["Naanị okwuntughe e zuru ezu ezughị ịbanye", "Ọ na-eme ka okwuntughe gị dị mkpụmkpụ", "Ọ na-ekesa mbanye gị", "Ọ na-agbanyụ ekwentị gị"], answer: 0, why: "MFA chọrọ ihe akaebe nke abụọ." },
      { objective: "O5", q: "Kedu ụdị MFA CISA kpọrọ nke kacha sie ike?", options: ["Ide koodu ahụ na obere akwụkwọ nrapado", "MFA na-eguzogide phishing, dị ka passkey ma ọ bụ security key", "Ịgwa enyi koodu ahụ", "Enweghị ihe nke abụọ"], answer: 1, why: "CISA kpọrọ MFA na-eguzogide phishing ọkwa a ga-achọ; passkey na security key siri ike ịghọ aghụghọ karịa koodu ozi ederede." },
      { objective: "O5", q: "Nzọụkwụ anọ bụ isi nke CISA bụ: zere phishing, okwuntughe siri ike, MFA na:", options: ["Zụta ekwentị ọhụrụ", "Melite sọftwụia", "Gbanyụọ Wi-Fi ruo mgbe ebighị ebi", "Kesaa okwuntughe"], answer: 1, why: "Imelite sọftwụia bụ nzọụkwụ bụ isi nke anọ." },
      { objective: "O6", q: "I chere na i pịrị njikọ ọjọọ. FTC kwuru ka:", options: ["Leghara ya anya", "Melite sọftwụia nchekwa, mee nyocha ma wepụ ihe ọ gosiri", "Zigara ndị enyi gị njikọ ahụ", "Kwụọ onye ọ bụla rịọrọ"], answer: 1, why: "Nyocha na-achọta ma wepụ sọftwụia na-emebi ihe." },
      { objective: "O6", q: "Ebee ka ị nwere ike ịkọrọ FBI aghụghọ ịntanetị?", options: ["ic3.gov", "Nkwupụta na mgbasa ozi ọha", "Email onye aghụghọ ahụ", "Ọ dịghị ebe"], answer: 0, why: "IC3 bụ Internet Crime Complaint Center nke FBI (ebe a na-akọ mpụ ịntanetị)." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 5, 7, 8, 12, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Okwuntughe siri ike nke dị iche", objective: "O4", notYet: "Okwuntughe ahụ dị mkpụmkpụ, e jiri ya ọtụtụ ebe ma ọ bụ e chekwaghị ya n'ebe dị nchebe.", meets: "Okwuntughe nwere opekata mpe mkpụrụ 16, e ji naanị n'akaụntụ a, e chekwara na password manager.", exceeds: "Ọ na-elelekwa otu akaụntụ ọzọ dị mkpa ma mee ka okwuntughe ya dị iche." },
      { name: "Nkwenye ọtụtụ ụzọ (MFA)", objective: "O5", notYet: "Agbanyeghị MFA.", meets: "MFA gbanyere ma na-arụ ọrụ maka akaụntụ ahụ.", exceeds: "Ọ na-eji authenticator app, passkey ma ọ bụ security key kama koodu ozi ederede." },
      { name: "Ngwaọrụ emeliela", objective: "O5", notYet: "Eleleghị mmelite, ma ọ bụ mmelite akpaaka agbanyụọla.", meets: "Ekwentị ma ọ bụ kọmputa emeliela, mmelite akpaaka gbanyekwara.", exceeds: "Ọ na-elelekwa browser na app ndị bụ isi." },
      { name: "Atụmatụ mgbake", objective: "O6", notYet: "Atụmatụ ahụ adịghị ma ọ bụ o nwere ihe na-erughị nzọụkwụ atọ ziri ezi.", meets: "Ahịrị ise na-ekpuchi ịgbanwe okwuntughe, MFA, ịpụ n'oge mbanye ndị ọzọ, ilele ozi mgbake na ịdọ ndị kọntaktị aka na ntị.", exceeds: "Ọ na-ekwukwa ebe a ga-akọ ya na onye a ga-akpọ ma ọ bụrụ na ego metụtara ya." },
      { name: "Ihe ịrịba ama phishing", objective: "O3", notYet: "Ọ chọtaghị ozi ọ bụla, ma ọ bụ o depụtaghị ihe ịrịba ama ziri ezi.", meets: "Otu ozi na-enyo enyo nwere opekata mpe ihe ịrịba ama phishing abụọ ziri ezi e depụtara.", exceeds: "Ọ na-ekwukwa otu na ebe a ga-akọ ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke nlele nchekwa",
      "Ndị na-amụ ihe ka na-eji MFA na password manager mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe kọọrọ ndị IT ma ọ bụ FTC ozi phishing, ma ọ bụ zere aghụghọ, n'ime ụbọchị 30 mgbe ihe ọmụmụ a gachara",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ ma ọ bụ asambodo ọzọ na nchekwa ịntanetị ma ọ bụ IT"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nke onye na-amụ ihe nwere ịntanetị",
      "Otu akaụntụ dị mkpa ha nwere ike ịbanye na ya, nke kacha mma bụ email",
      "Password manager n'efu, dị ka nke dị n'ime browser ma ọ bụ ekwentị",
      "Akwụkwọ na mkpịsị ode maka atụmatụ mgbake ahịrị ise; ihe dị ka nkeji 60 n'ozuzu"
    ],
    facilitatorNotes: [
      "Arịọla mgbe ọ bụla ịhụ, ịnakọta ma ọ bụ ide okwuntughe ma ọ bụ koodu MFA onye ọ bụla; ndị na-amụ ihe na-eme nzọụkwụ akaụntụ na ihuenyo nke ha.",
      "Hụ na onye ọ bụla na-amụ ihe ka nwere ike iji email ma ọ bụ ekwentị mgbake ya tupu ọ gbanye MFA, ka a ghara ịkpọchi onye ọ bụla n'èzí na klas.",
      "Bute ọmụmaatụ phishing e bipụtara ma ọ bụ screenshot ka ndị na-enweghị ozi na-enyo enyo nwee ike ime ọrụ phishing ahụ.",
      "Na kọmputa a na-ekekọrịta ma ọ bụ nke ụlọ nyocha, echekwala okwuntughe na browser; mee ka ndị na-amụ ihe jiri password manager dị na ekwentị nke ha ma pụọ (sign out) na njedebe.",
      "Ọ bụrụ na onye na-amụ ihe achọpụta ezi akaụntụ e zuru ezu, kwụsịtụ ma duga ya n'atụmatụ mgbake site na ngwaọrụ dị nchebe."
    ]
  }
};
