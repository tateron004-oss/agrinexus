"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-service-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business (iwu US gbasara ozi email azụmahịa)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers (iwu US gbasara nyocha ndị ahịa)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "AI maka Azụmahịa Na-enye Ọrụ",
  skills: "Ide ọnụ ahịa (quote) doro anya, Ịhazi ozi nkwekọrịta oge na ncheta, Ime ndepụta ọrụ (checklist), Ide nkọwa ọrụ ị na-enye, Ịchọ onye ahịa ọzọ mgbe ọrụ gwụrụ, Ịrịọ nyocha (review) n'ụzọ ziri ezi",
  outcome: "iji AI lekọta akwụkwọ niile nke azụmahịa na-enye ọrụ site n'oku mbụ ruo mgbe onye ahịa lọghachiri: ụdị quote doro anya, ozi nkwekọrịta oge na ncheta, ndepụta ọrụ, ndepụta ọrụ ị na-enye na ọnụ ahịa ha, na ozi nsochi na-arịọ nyocha nke eziokwu na ọrụ ọzọ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-ere oge na nka ha: ndị na-ehicha ụlọ, ndị na-akpụ isi na ndị na-edozi ntutu, ndị na-edozi mbọ, ndị na-elekọta ubi na ahịhịa, ndị na-edozi paịpụ mmiri na ndị na-edozi ihe n'ụlọ, ndị na-ebu ngwongwo ụlọ, ndị mekanik na-aga n'ebe ụgbọala dị, ndị na-ete agba, ndị na-edozi anụ ụlọ na ndị nkuzi nkeonwe. Ọtụtụ ndị na-amụ ihe anyị na-arụ azụmahịa otu onye ma ọ bụ nke ezinụlọ.",
    "Ị ga-eji ngwa enyemaka AI n'efu na akwụkwọ na spreadsheet dị mfe zaa ndị chọrọ ọrụ ngwa ngwa, nye ọnụ ahịa doro anya, bịa n'ọrụ jikere, mechaa ọrụ ọ bụla n'otu ụzọ dị mma, ma mee ka ndị ahịa obi dị ụtọ lọghachi ma kpọta ndị enyi ha.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Wuo ngwa azụmahịa maka ọrụ aka gị: ndepụta ọrụ ị na-enye na ọnụ ahịa ha, ụdị quote nwere ihe ị ga-eme, ọnụ ahịa, ihe na-esoghị na ya na ogologo oge ọ ga-adị irè, ụdị ozi nkwekọrịta oge na ncheta, ndepụta ọrụ maka ọrụ ị na-arụkarị, na ozi nsochi na-ekele onye ahịa ma rịọ nyocha nke eziokwu na ka o zigara gị ndị ọzọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-ere oge na nka ha: ndị na-ehicha ụlọ, ndị na-akpụ isi na ndị na-edozi ntutu, ndị na-edozi mbọ, ndị na-elekọta ubi, ndị na-edozi paịpụ mmiri na ihe n'ụlọ, ndị na-ebu ngwongwo ụlọ, ndị mekanik na-aga n'ebe ụgbọala dị, ndị na-ete agba, ndị na-edozi anụ ụlọ na ndị nkuzi nkeonwe. Ọtụtụ na-arụ azụmahịa otu onye ma ọ bụ nke ezinụlọ.",
    startingPoint: "Ha maara ọrụ aka ha nke ọma ma na-enweta ọrụ site n'oku ekwentị, ozi ederede na okwu ọnụ ndị mmadụ. Ọtụtụ na-eji ekwentị eme ihe niile, ha amachaghịkwa banyere ngwa enyemaka AI, ụdị akwụkwọ e debere (template) ma ọ bụ ngwa nkwekọrịta oge.",
    gap: "Ịza ozi nwayọọ, quote na-edoghị anya na ndị ahịa na-anọghị mgbe a kara aka na-eme ka ha tufuo ọrụ na ego. Ndị na-amụ ihe chọrọ akwụkwọ doro anya dị njikere (ndepụta ọrụ, quote, ozi nkwekọrịta oge, ndepụta ọrụ na ozi nsochi) ka ha nweta ọrụ ndị ọzọ, zere esemokwu ma nweta ọrụ ọzọ.",
    constraints: [
      "Oge: ndị nwe azụmahịa na-anọ n'ebe ọrụ ụbọchị niile, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5",
      "Ngwaọrụ: ọtụtụ mgbe, naanị ekwentị",
      "Iwu nkwekọrịta na ikike ọrụ (licensing) dabere na steeti na ụdị ọrụ",
      "Ozi mgbasa ahịa chọrọ ikike na ụzọ isi kwụsị ịnata ha (unsubscribe); FTC machiri nyocha adịgboroja ma ọ bụ nke a kwụrụ ụgwọ maka ya",
      "Nzuzo: ajụla ndị ahịa nọmba kaadị ma ọ bụ ID site n'ozi ederede ma ọ bụ ozi soshal midia"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ezi ọrụ gị na ọnụ ahịa gị", action: "ide ndepụta ọrụ (service menu) na-egosi ihe dị n'ime ya, ihe na-akwụ ụgwọ ọzọ na ọnụ ahịa", standard: "nke i lelere ọnụ ahịa na ihe ọ bụla dị n'ime ya n'onwe gị" },
    { id: "O2", condition: "Mgbe e nyere gị ezi ọrụ ma ọ bụ ọrụ ọmụmaatụ", action: "ime ụdị quote ma dejupụta ya na ihe ị ga-eme, ọnụ ahịa, ihe na-esoghị na ya na ogologo oge ọ ga-adị irè", standard: "nke ọnụ ahịa ya sitere n'ego gị mefuru gbakwunye uru" },
    { id: "O3", condition: "Mgbe e nyere gị ajụjụ ọhụrụ site n'ozi ederede, email, ozi soshal midia ma ọ bụ oku i zaghị", action: "ide ụdị azịza mbụ na-ekele onye ahụ, na-ajụ ajụjụ ndị ị chọrọ ma na-enye nzọụkwụ ọzọ", standard: "n'arịọghị nọmba kaadị ma ọ bụ ID" },
    { id: "O4", condition: "Mgbe e nyere gị iwu gị gbasara ịkagbu oge (cancellation policy)", action: "ide ozi nkwado nkwekọrịta oge na ncheta ụbọchị tupu ọrụ", standard: "nke nwere ụbọchị, oge ị ga-abịa, adreesị, ọnụ ahịa na iwu ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị ọrụ ị na-arụkarị", action: "ime ndepụta ọrụ maka tupu ị bịarute, n'ebe ọrụ na tupu ị pụọ", standard: "nke nwere nzọụkwụ nchekwa nke ọrụ aka gị na nlele ikpeazụ ya na onye ahịa" },
    { id: "O6", condition: "Mgbe ị mechara ọrụ", action: "ide ozi nsochi na-ekele onye ahịa ma rịọ nyocha nke eziokwu, ka o zigara gị ndị ọzọ na nkwekọrịta oge ọzọ", standard: "na-agbaso iwu FTC gbasara nyocha" }
  ],
  chapters: [
    {
      name: "Isi 1: Inweta ọrụ ahụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ndepụta ọrụ doro anya",
          minutes: 5,
          goal: "Dee ndepụta ọrụ nwere nkọwa doro anya na ọnụ ahịa.",
          text: [
            "Ndị ahịa chọrọ ịmata ihe ị na-eme na ihe dị ka ọnụ ya tupu ha akpọọ gị. Ndepụta ọrụ (service menu) na-edepụta ọrụ ọ bụla, ihe dị n'ime ya, oge ọ na-ewe na ọnụ ahịa ma ọ bụ ọnụ ahịa site na ole ruo ole.",
            "Nye AI ezi ọrụ gị na ọnụ ahịa gị: \"Dee ndepụta ọrụ maka azụmahịa nhicha ụlọ m: nhicha nkịtị $120 maka ruo ime ụlọ 2, nhicha miri emi $220, nhicha mgbe mmadụ na-apụ n'ụlọ site na $260. Tinye ihe dị n'ime nke ọ bụla. Okwu dị mfe.\" Lelee ihe niile, karịsịa ihe dị n'ime ya na ihe na-adịghị.",
            "Ndepụta doro anya na-ebelata esemokwu ma emechaa. Kwuo n'ụzọ doro anya ihe na-akwụ ụgwọ ọzọ (ime oven, ajị anụ ụlọ, steepụ, njem karịrị maịl 15)."
          ],
          steps: ["Depụta ọrụ gị na ezi ọnụ ahịa ha.", "Dee ihe dị n'ime ya na ihe na-akwụ ụgwọ ọzọ.", "Rịọ AI ka ọ hazie ndepụta doro anya.", "Lelee ọnụ ahịa ọ bụla na ihe ọ bụla dị n'ime ya."],
          words: [["Ndepụta ọrụ (service menu)", "ndepụta ọrụ ị na-enye, ihe dị n'ime ha na ọnụ ahịa."], ["Ihe mgbakwunye (add-on)", "ọrụ ọzọ na-akwụ ụgwọ karịa."]],
          slides: [
            { title: "Ihe ndị ahịa chọrọ mbụ", bullets: ["Ihe ị na-eme", "Ihe dị n'ime ya", "Ihe dị ka ọnụ ya"] },
            { title: "Jiri AI wuo ya", bullets: ["Nye ezi ọrụ gị na ọnụ ahịa", "Rịọ okwu doro anya, dị mfe"] },
            { title: "Gbochie esemokwu", bullets: ["Kwuo ihe na-akwụ ụgwọ ọzọ", "Ọmụmaatụ: oven, ajị anụ ụlọ, njem karịrị maịl 15"] }
          ],
          tryIt: "Dee ndepụta ọrụ gị nwere opekata mpe ọrụ atọ, ihe dị n'ime ha na ihe mgbakwunye. Jiri AI hazie ya, wee lelee ọnụ ahịa ọ bụla.",
          youCanNow: "ide ndepụta ọrụ doro anya nwere ihe dị n'ime ya, ihe mgbakwunye na ọnụ ahịa.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ndepụta ọrụ na-edepụta maka ọrụ ọ bụla?", options: ["Ihe dị n'ime ya, oge ọ na-ewe na ọnụ ahịa", "Naanị aha ọrụ ahụ", "Adreesị ụlọ gị na nọmba ID gị", "Ọnụ ahịa ndị asọmpi gị"], answer: 0, why: "Ndepụta ọrụ na-edepụta ọrụ ọ bụla, ihe dị n'ime ya, oge ọ na-ewe na ọnụ ahịa ma ọ bụ ọnụ ahịa site na ole ruo ole." },
            { objective: "O1", q: "Ndepụta AI kwuru na nhicha miri emi gụnyere ime oven, mana ị na-akwụ ụgwọ ọzọ maka ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya ma luo ọgụ ma emechaa", "Gbanwee ya ka o kwuo na ime oven na-akwụ ụgwọ ọzọ", "Hichapụ nhicha miri emi", "Bulie ọnụ ahịa niile"], answer: 1, why: "Ị na-elele ihe ọ bụla dị n'ime ya, ma ikwu n'ụzọ doro anya ihe na-akwụ ụgwọ ọzọ na-egbochi esemokwu ma emechaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide quote na atụmatụ ọnụ ahịa",
          minutes: 6,
          goal: "Mee ụdị quote doro anya, ziri ezi ma na-echebe gị.",
          text: [
            "Quote na-ekwu kpọmkwem ihe ị ga-eme, ego ole, na n'okpuru ọnọdụ ndị dị aṅaa. Ezigbo quote nwere: onye ahịa na adreesị ebe ọrụ, ihe ị ga-eme (scope of work), ngwa ọrụ, ọnụ ahịa, ihe na-esoghị na ya, iwu ịkwụ ụgwọ, mgbe ọrụ ga-amalite na ogologo oge quote ahụ ga-adị irè.",
            "Rịọ AI ka o mee ụdị ya: \"Mee ụdị quote otu peeji maka obere azụmahịa ite agba nwere oghere maka [customer], [address], [scope], [materials], [price], [not included], [payment terms], [valid until].\" Chekwaa ya na Docs ma ọ bụ Word.",
            "AI nwere ike inyere gị aka ịkọwa ihe ị ga-eme n'ụzọ doro anya, mana gị onwe gị na-esetịpụ ọnụ ahịa site n'ego gị: ngwa ọrụ, awa gị, njem na uru. Maka ọrụ buru ibu, iwu nkwekọrịta na ikike ọrụ dabere na steeti gị na ụdị ọrụ gị, ya mere lelee ụlọ ọrụ na-enye ikike ndị contractor nke steeti gị (contractor licensing board) ma ọ bụ onye ọkachamara."
          ],
          steps: ["Rịọ AI maka ụdị quote nwere oghere.", "Dejupụta ya maka ezi ọrụ ma ọ bụ ọrụ ọmụmaatụ.", "Setịpụ ọnụ ahịa site n'ego gị mefuru gbakwunye uru.", "Depụta ihe na-esoghị na ya na ogologo oge quote ahụ ga-adị irè.", "Lelee iwu ikike na nkwekọrịta maka ọrụ buru ibu."],
          words: [["Quote", "ọnụ ahịa e dere ede maka otu ọrụ kpọmkwem."], ["Ihe ị ga-eme (scope of work)", "kpọmkwem ihe ị ga-eme na ihe ị na-agaghị eme n'otu ọrụ."], ["Iwu ịkwụ ụgwọ (payment terms)", "mgbe na otu onye ahịa ga-esi kwụọ ụgwọ, dị ka ego mbụ (deposit) na nke fọdụrụ mgbe ọrụ gwụrụ."]],
          slides: [
            { title: "Akụkụ nke ezigbo quote", bullets: ["Onye ahịa, adreesị na ihe ị ga-eme", "Ngwa ọrụ na ọnụ ahịa", "Ihe na-esoghị na ya, iwu ịkwụ ụgwọ, ruo mgbe ọ ga-adị irè"] },
            { title: "AI na-eme ụdị ya", bullets: ["Oghere dị ka [scope] na [price]", "Chekwaa ya na Docs ma ọ bụ Word"] },
            { title: "Gị na-esetịpụ ọnụ ahịa", bullets: ["Ngwa ọrụ + awa + njem + uru", "Ọrụ buru ibu: lelee iwu ikike na nkwekọrịta nke steeti"] }
          ],
          tryIt: "Jiri AI mee ụdị quote gị, wee dejupụta ya maka otu ezi ọrụ ma ọ bụ ọrụ ọmụmaatụ. Gbakọọ ọnụ ahịa n'akwụkwọ site n'ego gị mefuru.",
          youCanNow: "ide quote doro anya na-ekwu ihe ị ga-eme, ọnụ ahịa na iwu ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka \"iwu ịkwụ ụgwọ\" (payment terms) na quote na-agwa onye ahịa?", options: ["Agba ị ga-eji", "Onye na-enyere gị aka", "Otu na mgbe ọ ga-akwụ ụgwọ", "Ogologo oge ọrụ ahụ ga-ewe"], answer: 2, why: "Iwu ịkwụ ụgwọ na-ekwu otu na mgbe onye ahịa ga-akwụ ụgwọ." },
            { objective: "O2", q: "AI tụrụ aro ọnụ ahịa maka quote ite agba gị. Gịnị ka ị ga-eme?", options: ["Jiri ya n'ihi na AI maara ahịa", "Mee ya okpukpu abụọ ka i wee nọrọ n'udo", "Hapụ ọnụ ahịa ahụ n'efu", "Setịpụ ọnụ ahịa n'onwe gị site na ngwa ọrụ, awa, njem na uru"], answer: 3, why: "AI nwere ike inye aka ịkọwa ihe ị ga-eme, mana gị na-esetịpụ ọnụ ahịa site n'ego gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịza ndị chọrọ ọrụ ọhụrụ ngwa ngwa",
          minutes: 4,
          goal: "Zaa ajụjụ ọhụrụ ngwa ngwa site n'ụdị azịza na-ajụ ajụjụ ndị ziri ezi.",
          text: [
            "Azụmahịa mbụ zara ozi na-enwetakarị ọrụ ahụ. Nwee ụdị azịza dị njikere maka ụzọ ọ bụla ndị mmadụ si eru gị: ozi ederede, email, ozi soshal midia na oku i zaghị.",
            "Ezigbo azịza mbụ na-ekele ha, na-ajụ ajụjụ abụọ ma ọ bụ atọ ị chọrọ iji nye quote (\"Ime ụlọ ole? Ị nwere anụ ụlọ? Ụbọchị ole dabara gị?\"), ma na-enye nzọụkwụ ọzọ. Rịọ AI ka o dee otu maka ụzọ ọ bụla n'olu gị.",
            "Debe ụdị azịza ndị a n'ekwentị gị ka i nwee ike ịza n'etiti ọrụ. Arịọla ndị mmadụ ka ha zitere gị nọmba kaadị ma ọ bụ ID site n'ozi ederede ma ọ bụ ozi soshal midia."
          ],
          steps: ["Depụta ajụjụ ndị ị chọrọ iji nye quote.", "Rịọ AI maka ụdị azịza mbụ maka ụzọ ọ bụla.", "Chekwaa ha n'ekwentị gị.", "Zaa n'ime otu awa mgbe ị nwere ike."],
          words: [["Onye chọrọ ọrụ (lead)", "onye jụrụ maka ọrụ gị mana o kwekọrịtabeghị oge."], ["Ụzọ (channel)", "ụzọ ndị ahịa si eru gị, dị ka ozi ederede, email ma ọ bụ ozi soshal midia."]],
          slides: [
            { title: "Ọsọ na-enweta ọrụ", bullets: ["Azịza mbụ na-enwetakarị ọrụ ahụ", "Ụdị azịza maka ụzọ ọ bụla"] },
            { title: "Ezigbo azịza mbụ", bullets: ["Kelee ha", "Jụọ ajụjụ 2-3 ị chọrọ", "Nye nzọụkwụ ọzọ"] },
            { title: "Debe ya nso ma n'enweghị nsogbu", bullets: ["Ụdị azịza echekwara n'ekwentị gị", "Arịọla nọmba kaadị site n'ozi ederede mgbe ọ bụla"] }
          ],
          tryIt: "Dee ajụjụ atọ ị ga-ajụrịrị. Rịọ AI maka ụdị azịza mbụ maka ozi ederede na email n'olu gị, ma chekwaa ha n'ekwentị gị.",
          youCanNow: "ịza ndị chọrọ ọrụ ọhụrụ ngwa ngwa site n'ụdị azịza na-anakọta ihe ị chọrọ iji nye quote.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka ị kwesịrị idebe ụdị azịza mbụ gị?", options: ["N'ekwentị gị ka i nwee ike ịza n'etiti ọrụ", "Naanị na kọmputa n'ụlọ", "N'akwụkwọ n'ọfịs", "Ebe ọ bụla; dee nke ọ bụla ọhụrụ"], answer: 0, why: "Idebe ụdị azịza n'ekwentị gị na-eme ka i nwee ike ịza ngwa ngwa n'etiti ọrụ." },
            { objective: "O3", q: "Onye ọhụrụ zitere ozi: \"Ego ole ka ị na-ewe ịkpụ ahịhịa?\" Gịnị bụ ezigbo azịza mbụ?", options: ["\"Zitere m nọmba kaadị gị ka m debe oge.\"", "Kelee ha, jụọ ha ogo ahịhịa ahụ na ụbọchị dabara ha, ma nye nzọụkwụ ọzọ", "Chere ruo ngwụsị izu tupu ị zaa", "Zipu ndepụta ọnụ ahịa gị niile n'ekeleghị ekele"], answer: 1, why: "Ezigbo azịza mbụ na-ekele ha, na-ajụ ajụjụ ndị ị chọrọ ma na-enye nzọụkwụ ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Inweta ọrụ ahụ",
        questions: [
          { objective: "O1", q: "Gịnị mere ị ga-eji depụta ihe na-akwụ ụgwọ ọzọ na ndepụta ọrụ gị?", options: ["Iji mee ndị ahịa mgbagwoju anya", "Iji gbochie esemokwu ma emechaa", "Iji were ego zoro ezo", "Ọ baghị uru"], answer: 1, why: "Ihe mgbakwunye doro anya na-eme ka onye ọ bụla mara ihe ọ ga-atụ anya ya." },
          { objective: "O2", q: "Kedu nke kwesịrị ịdị na quote?", options: ["Mbelata ọnụ ahịa adịgboroja", "Okwuntughe gị", "Nọmba kaadị onye ahịa", "Ihe ị ga-eme na ogologo oge quote ahụ ga-adị irè"], answer: 3, why: "Ihe ị ga-eme na oge ọ ga-adị irè na-echebe akụkụ abụọ ahụ." },
          { objective: "O2", q: "Onye na-esetịpụ ọnụ ahịa na quote?", options: ["Gị, site n'ego gị mefuru na uru gị", "AI", "Naanị onye ahịa", "Onye asọmpi"], answer: 0, why: "Ọ bụ naanị gị maara ezi ego ị na-emefu." },
          { objective: "O2", q: "Ebee ka ị ga-elele iwu ikike maka ọrụ buru ibu?", options: ["Onye agbata obi", "Mkparịta ụka AI", "Ụlọ ọrụ na-enye ikike contractor nke steeti gị ma ọ bụ onye ọkachamara", "Ihe e dere na soshal midia"], answer: 2, why: "Ikike ọrụ dabere na steeti gị na ụdị ọrụ gị." },
          { objective: "O3", q: "Gịnị ka azịza mbụ nye onye chọrọ ọrụ kwesịrị inwe?", options: ["Arịrịọ maka nọmba kaadị ha", "Naanị ọnụ ahịa gị", "Ekele, ajụjụ ndị ị chọrọ, na nzọụkwụ ọzọ", "Ọ dịghị ihe; chere otu izu"], answer: 2, why: "Nke ahụ na-eduga onye ahụ ịkwekọrịta oge." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ọrụ ahụ na idebe onye ahịa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nkwado nkwekọrịta oge na ncheta",
          minutes: 4,
          goal: "Hazie ozi nkwekọrịta oge na ncheta na-ebelata ndị na-anọghị mgbe a kara aka.",
          text: [
            "Ndị ahịa na-anọghị mgbe a kara aka (no-show) ma ọ bụ ụlọ e kpochiri mgbe ị bịarutere na-eme ka i tufuo ụgwọ ọrụ otu ụbọchị. Ozi nkwado na ncheta doro anya na-enyere aka. Ozi nkwado na-ekwu ụbọchị, oge ị ga-abịa, adreesị, ọnụ ahịa, ihe onye ahịa kwesịrị ime iji jikere na iwu gị gbasara ịkagbu oge.",
            "Jụọ AI: \"Dee ozi nkwado nkwekọrịta oge na ncheta ụbọchị tupu ọrụ maka azụmahịa m na-edozi nkịta n'ebe ha nọ. Oghere: [name], [date], [time window], [address], [price]. Tinye iwu anyị nke ịkagbu oge awa 24 tupu oge.\"",
            "Ọtụtụ ngwa nkwekọrịta oge nwere ike iziga ncheta n'onwe ha; lelee ntọala ngwa gị. Ọ bụrụ na ị na-eziga ozi ederede ma ọ bụ email mgbasa ahịa (ọ bụghị naanị ncheta), buru ụzọ nweta ikike ma gbasoo iwu email, gụnyere ụzọ isi kwụsị ịnata ha (unsubscribe)."
          ],
          steps: ["Dee iwu gị gbasara ịkagbu oge.", "Rịọ AI maka ụdị ozi nkwado na ncheta.", "Setịpụ ncheta na-eziga onwe ha na ngwa nkwekọrịta oge gị ma ọ bụrụ na o nwere ya.", "Zipu mgbasa ahịa naanị site n'ikike na unsubscribe."],
          words: [["Onye anọghị (no-show)", "onye ahịa na-anọghị n'oge a kwekọrịtara."], ["Iwu ịkagbu oge (cancellation policy)", "iwu gị maka ịkagbu oge, dị ka ịgwa gị awa 24 tupu oge ahụ."], ["Oge ị ga-abịa (time window)", "oge ị ga-abịaru n'etiti oge abụọ, dị ka 9 ruo 11 nke ụtụtụ."]],
          slides: [
            { title: "Belata ndị anọghị", bullets: ["Ozi nkwado ozugbo e kwekọrịtara oge", "Ncheta ụbọchị tupu ọrụ"] },
            { title: "Ezigbo ozi nkwado", bullets: ["Ụbọchị, oge ị ga-abịa, adreesị, ọnụ ahịa", "Otu ha ga-esi jikere", "Iwu ịkagbu oge"] },
            { title: "Mee ka ọ na-eme onwe ya, gbasoo iwu", bullets: ["Ngwa nkwekọrịta oge nwere ike iziga ncheta", "Mgbasa ahịa chọrọ ikike na unsubscribe"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Dee iwu gị gbasara ịkagbu oge n'ahịrị abụọ. Rịọ AI maka ụdị ozi nkwado na ncheta ụbọchị tupu ọrụ nwere oghere, ma chekwaa ha.",
          youCanNow: "iziga ozi nkwado nkwekọrịta oge na ncheta na-ebelata ndị anọghị.",
          quickCheck: [
            { objective: "O4", q: "Nsogbu dị aṅaa ka ozi nkwado na ncheta na-enyere aka igbochi?", options: ["Ihu igwe ọjọọ", "Ọnụ ahịa ngwa ọrụ na-arị elu", "Ndị anọghị na ụlọ e kpochiri", "Nyocha adịgboroja"], answer: 2, why: "Nkuzi a kwuru na ndị anọghị na ụlọ e kpochiri na-eme ka i tufuo ụgwọ ọrụ otu ụbọchị, ncheta na-enyekwa aka ibelata ha." },
            { objective: "O4", q: "Ị chọrọ iziga ozi ederede mbelata ọnụ ahịa oge ezumike nye ndị ahịa gị niile gara aga. Gịnị ka ị chọrọ mbụ?", options: ["Ọ dịghị ihe; ncheta na mgbasa ahịa bụ otu", "Nọmba ekwentị ọhụrụ", "Nkwado AI", "Ikike ha, na ụzọ isi kwụsị ịnata ya (unsubscribe)"], answer: 3, why: "Ozi mgbasa ahịa, n'adịghị ka ncheta, chọrọ ikike na ụzọ isi kwụsị ịnata ha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ndepụta ọrụ maka otu ogo mma mgbe niile",
          minutes: 5,
          goal: "Mee ka ihe ị maara ghọọ ndepụta ọrụ gị na ndị na-enyere gị aka na-agbaso.",
          text: [
            "Ndepụta ọrụ (checklist) na-eme ka ọrụ ọ bụla dị mma ka nke kacha mma gị, ọbụlagodi n'ụbọchị ike gwụrụ gị ma ọ bụ mgbe onye na-enyere gị aka mere ya. Ọ na-enyekwa gị aka ịzụ ndị ọhụrụ.",
            "Kwuo ma ọ bụ dee otu ị na-esi arụ ọrụ ị na-arụkarị, site na mmalite ruo njedebe, ma jụọ AI: \"Mee ka ndetu ndị a ghọọ ndepụta ọrụ maka ọrụ nkịtị nke ilekọta ahịhịa n'ụlọ obibi: tupu ị bịarute, n'ebe ọrụ, tupu ị pụọ. Nzọụkwụ dị mkpụmkpụ.\" Tinye nzọụkwụ nchekwa ọrụ aka gị chọrọ, ma lelee ha na ntụziaka nchekwa gọọmentị ma ọ bụ ọzụzụ ọrụ aka gị.",
            "Tinye nlele ikpeazụ ya na onye ahịa (walk-through) na foto tupu na mgbe e mechara (site n'ikike ha) iji gosi ọrụ ahụ."
          ],
          steps: ["Kọwaa ọrụ ị na-arụkarị site na mmalite ruo njedebe.", "Rịọ AI ka o mee ya ndepụta nwere akụkụ atọ.", "Tinye nzọụkwụ nchekwa nke ọrụ aka gị.", "Tinye nlele ikpeazụ na foto site n'ikike.", "Nwalee ya n'ọrụ ọzọ ma dozie ya."],
          words: [["Ndepụta ọrụ (checklist)", "ndepụta nzọụkwụ ị na-aka akara ka ọ dị ihe ọ bụla na-agafe gị."], ["Nlele ikpeazụ (walk-through)", "ịgagharị ọrụ e mechara ya na onye ahịa."]],
          slides: [
            { title: "Gịnị mere ndepụta ọrụ", bullets: ["Otu ogo mma mgbe niile", "Na-enyere aka ịzụ ndị na-enyere gị aka"] },
            { title: "Jiri AI wuo ya", bullets: ["Kọwaa ọrụ gị site na mmalite ruo njedebe", "Tupu ị bịarute, n'ebe ọrụ, tupu ị pụọ"] },
            { title: "Mechaa nke ọma", bullets: ["Nzọụkwụ nchekwa nke ọrụ aka gị", "Nlele ikpeazụ ya na onye ahịa", "Foto tupu na mgbe e mechara, site n'ikike"] }
          ],
          tryIt: "Kọwaa ọrụ ị na-arụkarị n'ahịrị ole na ole. Rịọ AI ka o mee ya ndepụta nwere akụkụ atọ, tinye nzọụkwụ nchekwa, ma jiri ya n'ọrụ ọzọ gị.",
          youCanNow: "ime ma jiri ndepụta ọrụ na-eme ka ogo mma dị otu mgbe niile.",
          quickCheck: [
            { objective: "O5", q: "Kedu akụkụ atọ nke ndepụta ọrụ na nkuzi a?", options: ["Tupu ị bịarute, n'ebe ọrụ, tupu ị pụọ", "Ụtụtụ, ehihie, abalị", "Ọnụ ahịa, ụtụ isi, ego onyinye", "Oku, ozi ederede, email"], answer: 0, why: "AI na-eme ka ndetu gị ghọọ ndepụta nwere akụkụ atọ: tupu ị bịarute, n'ebe ọrụ na tupu ị pụọ." },
            { objective: "O5", q: "Ị chọrọ itinye nzọụkwụ nchekwa maka iji ubube (ladder). Ebee ka ị ga-elele ya?", options: ["Jụọ AI ma kwere azịza ya", "Ntụziaka nchekwa gọọmentị ma ọ bụ ọzụzụ ọrụ aka gị", "Nyocha onye ahịa", "Wụfee nzọụkwụ nchekwa iji chekwaa oge"], answer: 1, why: "A na-elele nzọụkwụ nchekwa na ntụziaka gọọmentị ma ọ bụ ọzụzụ ọrụ aka gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nsochi, nyocha nke eziokwu na ọrụ ọzọ",
          minutes: 5,
          goal: "Soro onye ahịa mgbe ọrụ gwụrụ iji nweta nyocha nke eziokwu, ndị ọ ga-ezigara gị na nkwekọrịta oge ọzọ.",
          text: [
            "Ọrụ agwụbeghị mgbe ị pụrụ. Ozi ekele n'otu ụbọchị ahụ, nwere njikọ (link) iji dee nyocha (review) na onyinye ịkwekọrịta oge ọzọ, na-eweta ọrụ ọzọ. Rịọ AI ka o dee ya n'olu gị nwere oghere [name] na [service].",
            "Jụọ onye ahịa ọ bụla n'otu ụzọ ahụ, ma obi dị ya ụtọ ma ọ bụ na ọ dịghị, maka nyocha nke eziokwu. Enyela ụgwọ ọrụ naanị maka nyocha ọma, ma edela nyocha adịgboroja mgbe ọ bụla; iwu FTC gbasara nyocha machiri ha abụọ.",
            "Setịpụ ncheta maka ọrụ a na-emegharị: ihicha gọta mmiri n'ụlọ (gutters) n'oge mgbụsị akwụkwọ ọ bụla, ịkpụ isi kwa izu atọ, ilele igwe ọkụ ụlọ (furnace) kwa afọ. Obere ozi \"Oge eruola maka nke ọzọ gị?\" na-eme ka kalenda gị jupụta."
          ],
          steps: ["Zipu ozi ekele n'otu ụbọchị ahụ.", "Tinye njikọ nyocha ma rịọ nyocha nke eziokwu.", "Nye onyinye ịkwekọrịta oge ọzọ.", "Setịpụ ncheta maka ọrụ a na-emegharị."],
          words: [["Izigara gị onye (referral)", "onye ahịa na-ezitere gị enyi ya."], ["Ọrụ a na-emegharị", "ọrụ ndị ahịa chọrọ ọzọ n'oge a kara aka."]],
          slides: [
            { title: "Ekele n'otu ụbọchị ahụ", bullets: ["Kelee ha n'aha ha", "Njikọ nyocha", "Nye onyinye nkwekọrịta oge ọzọ"] },
            { title: "Naanị nyocha nke eziokwu", bullets: ["Jụọ onye ahịa ọ bụla n'otu ụzọ", "Ọ dịghị ụgwọ ọrụ naanị maka nyocha ọma", "Edela nyocha adịgboroja mgbe ọ bụla (iwu FTC)"] },
            { title: "Mee ka kalenda jupụta", bullets: ["Gutters n'oge mgbụsị akwụkwọ; ịkpụ isi kwa izu 3", "Ncheta \"Oge eruola maka nke ọzọ gị?\""] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Ọrụ ikpeazụ: chịkọta ngwa ọrụ gị: ndepụta ọrụ, ụdị quote, ụdị azịza mbụ, ozi nkwado na ncheta, ndepụta ọrụ (checklist), na ozi ekele nsochi nwere arịrịọ nyocha na onyinye nkwekọrịta oge ọzọ.",
          youCanNow: "iji enyemaka AI lekọta akwụkwọ azụmahịa na-enye ọrụ site n'oku mbụ ruo mgbe onye ahịa lọghachiri.",
          quickCheck: [
            { objective: "O6", q: "Mgbe ole ka ị kwesịrị iziga ozi ekele mgbe ọrụ gwụrụ?", options: ["N'ọnwa na-abịa", "Naanị ma ọ bụrụ na onye ahịa mere mkpesa", "N'otu ụbọchị ahụ", "Ọ dịghị mgbe"], answer: 2, why: "Ozi ekele n'otu ụbọchị ahụ, nwere njikọ nyocha na onyinye nkwekọrịta oge ọzọ, na-eweta ọrụ ọzọ." },
            { objective: "O6", q: "Otu akụkụ ọrụ ahụ adịghị onye ahịa mma. Olee otu ị ga-esi rịọ nyocha?", options: ["Ajụla ha ma ọlị", "Nye mbelata ọnụ ahịa naanị ma ha nye kpakpando 5", "Dee nyocha ọma maka ha", "Jụọ ha n'otu ụzọ ahụ dị ka onye ọ bụla maka nyocha nke eziokwu"], answer: 3, why: "Ị na-ajụ onye ahịa ọ bụla n'otu ụzọ maka nyocha nke eziokwu; e machiri ụgwọ ọrụ naanị maka nyocha ọma." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ọrụ ahụ na idebe onye ahịa",
        questions: [
          { objective: "O4", q: "Kedu nke kwesịrị ịdị n'ozi nkwado nkwekọrịta oge?", options: ["Ụbọchị, oge ị ga-abịa, adreesị, ọnụ ahịa na iwu ịkagbu oge", "Nọmba kaadị onye ahịa", "Okwuntughe gị", "Ọ dịghị ihe"], answer: 0, why: "Nkọwa ndị ahụ na-egbochi mgbagwoju anya na ndị anọghị." },
          { objective: "O4", q: "Tupu iziga email mgbasa ahịa, ị chọrọ:", options: ["Aha onye zitere adịgboroja", "Ọ dịghị ihe", "ID onye ahịa", "Ikike na ụzọ isi kwụsị ịnata ya (unsubscribe)"], answer: 3, why: "CAN-SPAM chọrọ ụzọ isi pụọ na eziokwu." },
          { objective: "O5", q: "Gịnị mere ị ga-eji jiri ndepụta ọrụ?", options: ["Iji gbuo oge", "Otu ogo mma mgbe niile na ọzụzụ dị mfe", "Iji wụfee nchekwa", "Iji were ego karịa"], answer: 1, why: "Ndepụta ọrụ na-eme ka ogo mma ghara ịgbanwe." },
          { objective: "O5", q: "Tupu ị see foto tupu na mgbe e mechara, ị kwesịrị:", options: ["Inweta ikike onye ahịa", "Ise ha na nzuzo", "Itinye adreesị ya n'ịntanetị", "Ịwụfe ya"], answer: 0, why: "Kwanyere nzuzo onye ahịa ugwu." },
          { objective: "O6", q: "Kedu arịrịọ nyocha na-agbaso iwu FTC?", options: ["Ide nyocha n'akaụntụ ndị enyi", "Mbelata 10% naanị maka nyocha kpakpando 5", "Ịjụ onye ahịa ọ bụla maka nyocha nke eziokwu", "Ịzụta nyocha"], answer: 2, why: "Arịrịọ nke eziokwu na-enweghị ọnọdụ dị mma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Azụmahịa Na-enye Ọrụ",
    questions: [
      { objective: "O1", q: "Ndepụta ọrụ na-edepụta:", options: ["Adreesị ndị ahịa", "Ọrụ, ihe dị n'ime ha na ọnụ ahịa", "Okwuntughe", "Nọmba Social Security nke ndị ọrụ"], answer: 1, why: "Ọ na-egosi ihe ị na-enye na ọnụ ya." },
      { objective: "O1", q: "Ihe mgbakwunye (add-on) bụ:", options: ["Nyocha", "Onyinye n'efu", "Ụtụ isi", "Ọrụ ọzọ na-akwụ ụgwọ karịa"], answer: 3, why: "Ihe mgbakwunye bụ ihe ndị ọzọ." },
      { objective: "O1", q: "AI hazie ndepụta ọrụ gị. Ị ga-elerịrị:", options: ["Agba ya", "Naanị ụdị mkpụrụ akwụkwọ", "Ọ dịghị ihe", "Ọnụ ahịa ọ bụla na ihe dị n'ime ya"], answer: 3, why: "AI nwere ike ịgbanwe nkọwa." },
      { objective: "O2", q: "Ihe ị ga-eme (scope of work) pụtara:", options: ["Ngwa ọrụ gị", "Kpọmkwem ihe ị ga-eme na ihe ị na-agaghị eme", "Ụgbọala gị", "Awa gị"], answer: 1, why: "Ihe ị ga-eme na-akọwa ọrụ ahụ." },
      { objective: "O2", q: "Quote kwesịrị ikwu ogologo oge ọ ga-:", options: ["Ebipụta", "Ekwu", "Adị irè", "Pịnye"], answer: 2, why: "Ọnụ ahịa na-agbanwe; quote kwesịrị inwe mgbe ọ ga-akwụsị." },
      { objective: "O2", q: "Ọnụ ahịa sitere n'ego gị mefuru gụnyere:", options: ["Ngwa ọrụ, awa, njem na uru", "Naanị ngwa ọrụ", "Naanị njem", "Ihe AI tụrụ aro"], answer: 0, why: "Ego niile e mefuru gbakwunye uru." },
      { objective: "O3", q: "Onye chọrọ ọrụ (lead) bụ:", options: ["Ngwa ọrụ", "Ígwè", "Onye jụrụ mana o kwekọrịtabeghị oge", "Akwụkwọ ụgwọ"], answer: 2, why: "Ndị chọrọ ọrụ bụ ndị nwere ike ịghọ ndị ahịa." },
      { objective: "O3", q: "Gịnị mere ị ga-eji zaa ndị chọrọ ọrụ ngwa ngwa?", options: ["Azịza mbụ na-enwetakarị ọrụ ahụ", "Iwu chọrọ ya", "Iji kpasuo ha iwe", "Ọ dịghị mkpa"], answer: 0, why: "Ọsọ na-enweta ọrụ." },
      { objective: "O3", q: "Kedu nke ị na-ekwesịghị ịrịọ site n'ozi ederede mgbe ọ bụla?", options: ["Ọnụ ọgụgụ ime ụlọ", "Nọmba kaadị", "Ụbọchị dabara", "Anụ ụlọ dị n'ụlọ"], answer: 1, why: "Nọmba kaadị bụ ozi nzuzo." },
      { objective: "O4", q: "Oge ị ga-abịa (time window) bụ:", options: ["Ụbọchị ezumike", "Iko windo", "Oge njedebe ịkwụ ụgwọ", "Oge ị ga-abịaru n'etiti oge abụọ"], answer: 3, why: "Ọ na-eme ka onye ahịa mara mgbe ị ga-abịa." },
      { objective: "O4", q: "Ncheta ụbọchị tupu ọrụ na-enyere aka:", options: ["Ibelata ndị anọghị na ụlọ e kpochiri", "Ibuli ọnụ ahịa", "Ịwụfe ọrụ ahụ", "Izo iwu ahụ"], answer: 0, why: "Ncheta na-ebelata ọrụ a na-atụfu." },
      { objective: "O4", q: "Ebee ka a na-esetịpụkarị ncheta na-eziga onwe ha?", options: ["Ọ dịghị ebe", "Kalenda akwụkwọ", "Ụlọ akụ", "Ntọala ngwa nkwekọrịta oge gị"], answer: 3, why: "Ọtụtụ ngwa nkwekọrịta oge na-eziga ncheta." },
      { objective: "O5", q: "Olee otu ị kwesịrị isi wuo ndepụta ọrụ?", options: ["Hapụ AI ka o chepụta ya site n'efu", "Detuo nke onye asọmpi", "Kọwaa ọrụ gị ma mee ka AI hazie ya, wee nwalee ya", "Wụfee ya"], answer: 2, why: "Ihe ị maara, nke AI haziri." },
      { objective: "O5", q: "A ga-elele nzọụkwụ nchekwa dị na ndepụta ọrụ gị na:", options: ["Naanị AI", "Ntụziaka nchekwa gọọmentị ma ọ bụ ọzụzụ ọrụ aka gị", "Ihe e dere na soshal midia", "Ọ dịghị ihe"], answer: 1, why: "Nchekwa chọrọ isi iyi a pụrụ ịtụkwasị obi." },
      { objective: "O5", q: "Nlele ikpeazụ (walk-through) bụ:", options: ["Nyocha", "Paseeji n'ụlọ", "Quote", "Ịgagharị ọrụ e mechara ya na onye ahịa"], answer: 3, why: "Ọ na-akwado na obi dị onye ahịa ụtọ." },
      { objective: "O6", q: "Mgbe ole ka ị kwesịrị iziga ozi ekele?", options: ["Ọ dịghị mgbe", "Otu afọ ka e mechara", "N'otu ụbọchị ahụ", "Naanị ma ha mee mkpesa"], answer: 2, why: "Ekele ozugbo na-eweta nyocha na nkwekọrịta oge ọzọ karịa." },
      { objective: "O6", q: "Inye mbelata ọnụ ahịa naanị maka nyocha kpakpando 5 bụ:", options: ["Ihe e machiri n'okpuru iwu FTC gbasara nyocha", "Ọ dị mma", "Ihe a chọrọ", "Amamihe"], answer: 0, why: "E machiri ụgwọ ọrụ e jikọtara na nyocha ọma." },
      { objective: "O6", q: "Ọmụmaatụ ọrụ a na-emegharị bụ:", options: ["Ibu ngwongwo ụlọ otu ugboro", "Ihicha gutters n'oge mgbụsị akwụkwọ ọ bụla", "Windo gbajiri otu ugboro", "Otu nnyefe ngwongwo"], answer: 1, why: "Ọ na-emegharị n'oge a kara aka." },
      { objective: "O6", q: "Izigara gị onye (referral) bụ:", options: ["Ụgwọ", "Onye ahịa na-ezitere gị enyi ya", "Ụtụ isi", "Ngwa ọrụ"], answer: 1, why: "Ndị e zitere gị na-eweta ndị ahịa ọhụrụ." },
      { objective: "O2", q: "Kedu akụkụ ọrụ ka bụ nke gị, ọ bụghị nke AI?", options: ["Isetịpụ ọnụ ahịa na ịrụ ọrụ ahụ nke ọma", "Ịhazi ụdị akwụkwọ", "Ide okwu ncheta", "Ịhazi ndetu"], answer: 0, why: "AI na-enyere aka n'okwu; gị na-achị azụmahịa ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      7,
      8,
      10,
      12,
      16
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ndepụta ọrụ doro anya",
        objective: "O1",
        notYet: "Ọnụ ahịa ma ọ bụ ihe dị n'ime ya adịghị ma ọ bụ ezighi ezi.",
        meets: "Ọrụ ọ bụla na-egosi ihe dị n'ime ya, ihe na-akwụ ụgwọ ọzọ na ọnụ ahịa.",
        exceeds: "Ọ na-egosikwa oge ọrụ ọ bụla na-ewe na ihe mgbakwunye ọ bụla."
      },
      {
        name: "Ụdị quote zuru ezu",
        objective: "O2",
        notYet: "Quote ahụ enweghị ihe ị ga-eme, ọnụ ahịa, ihe na-esoghị na ya ma ọ bụ ogologo oge ọ ga-adị irè.",
        meets: "Akụkụ niile dị ya, ọnụ ahịa sitekwa n'ego gị mefuru gbakwunye uru.",
        exceeds: "O nwekwara iwu ịkwụ ụgwọ na ndetu banyere ebe e lelere iwu ikike maka ọrụ buru ibu."
      },
      {
        name: "Ozi nkwekọrịta oge",
        objective: "O4",
        notYet: "Ozi nkwado ma ọ bụ ncheta enweghị oge ị ga-abịa, adreesị ma ọ bụ iwu ịkagbu oge.",
        meets: "Ozi nkwado na ncheta ụbọchị tupu ọrụ nwere ụbọchị, oge ị ga-abịa, adreesị, ọnụ ahịa na iwu.",
        exceeds: "Ọ na-agwakwa onye ahịa otu ọ ga-esi jikere, a setịpụkwara ya ka o ziga onwe ya."
      },
      {
        name: "Ndepụta ọrụ (checklist)",
        objective: "O5",
        notYet: "Ndepụta ahụ na-awụfe nzọụkwụ ma ọ bụ enweghị nzọụkwụ nchekwa.",
        meets: "Ndepụta nwere akụkụ atọ, nzọụkwụ nchekwa na nlele ikpeazụ.",
        exceeds: "E nwalere ya n'ezi ọrụ ma dozie ya mgbe e mechara."
      },
      {
        name: "Nsochi nke eziokwu",
        objective: "O6",
        notYet: "Ozi ahụ na-enye ụgwọ ọrụ naanị maka nyocha ọma ma ọ bụ enweghị arịrịọ nyocha.",
        meets: "Ọ na-ekele onye ahịa, na-arịọ nyocha nke eziokwu na ka o zigara gị ndị ọzọ, ma na-enye nkwekọrịta oge ọzọ.",
        exceeds: "Ọ na-esetịpụkwa ncheta maka ọrụ ọzọ a na-emegharị."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa kwuru na ha na-aza ndị chọrọ ọrụ ngwa ngwa ma nweta ọrụ ndị ọzọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nwe azụmahịa kwuru na ndị anọghị ma ọ bụ esemokwu ọnụ ahịa belatara n'ime ụbọchị 30",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara obere azụmahịa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu na akwụkwọ n'efu dị ka Google Docs ma ọ bụ Word",
      "Ezi ọrụ gị, ọnụ ahịa gị na ego ị na-emefu, ma ọ bụ nke ọmụmaatụ",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ọ bụrụ na ị nwere ike, kewaa ndị na-amụ ihe n'ìgwè dị ka ọrụ aka ha si dị, ka ha nwee ike ịkekọrịta ndepụta ọrụ na okwu quote.",
      "Chetara ndị na-amụ ihe na ọnụ ahịa na-esi n'ego ha mefuru, iwu ikike na nkwekọrịta na-esi n'ụlọ ọrụ steeti ha ma ọ bụ onye ọkachamara, ọ bụghị AI.",
      "Mee ka ndị na-amụ ihe chekwaa ụdị azịza n'ekwentị ha n'oge nnọkọ ahụ ka ha pụọ dị njikere iji ha.",
      "Chetara ndị na-amụ ihe ka ha ghara ịrịọ ndị ahịa nọmba kaadị ma ọ bụ ID site n'ozi ederede mgbe ọ bụla, ma ghara ime ma ọ bụ ịzụta nyocha adịgboroja.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
