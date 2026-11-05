"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-customer-service.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FTC_REVIEWS = { name: "FTC: Iwu gbasara nyocha ndị ahịa na ịgba akaebe, ajụjụ na azịza (Consumer Reviews and Testimonials Rule, Questions and Answers)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC: Iwu ikpeazụ machibidoro nyocha na akaebe adịgboroja (August 2024)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "AI maka Ọrụ Ndị Ahịa na Nkwurịta Okwu",
  skills: "Ide FAQ maka ndị ahịa, Ime template azịza, Ịhazi olu azụmahịa gị, Ịza nyocha (review), Ijikwa ndị ahịa iwe na-ewe, Idebe ozi ndị ahịa na nzuzo",
  outcome: "iji enyemaka AI wuo ngwa ọrụ ndị ahịa maka azụmahịa gị: FAQ nke ajụjụ iri ndị a na-ajụkarị gị, template azịza ise n'olu azụmahịa gị, na azịza dị jụụ nye onye ahịa iwe na-ewe na nye nyocha ọha, nke gị onwe gị lelere tupu i jiri ha.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa na ndị ọrụ ha na-aza ndị ahịa n'ekwentị, n'ozi ederede, na email, n'ozi soshal midia na na nyocha n'ịntanetị: ụlọ nri, ebe a na-edozi isi, ụlọ ahịa, ndị na-asa ihe, ndị na-arụzi ihe na ụgbọala na-ere nri.",
    "Ị ga-eji ngwa enyemaka AI n'efu zaa otu ajụjụ ahụ ngwa ngwa, mee ka azịza gị dị mma ma bụrụ otu ụdị mgbe niile, zaa nyocha n'ụzọ ziri ezi, ma mee ka obi dajụọ ndị ahịa iwe na-ewe n'enyeghị ihe niile ị nwere. Gị ka bụ onye isi n'azịza ọ bụla.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọrụ gị niile na-agbakọ ghọọ ngwa ọrụ ndị ahịa ị nwere ike iji n'echi ya."
  ],
  finalTask: "Wuo ngwa ọrụ ndị ahịa gị n'otu akwụkwọ: olu azụmahịa gị (okwu atọ na ndepụta \"mee\" na \"emela\"), FAQ nwere ajụjụ iri ndị a na-ajụkarị na azịza ị lelere, template azịza ise nwere oghere, otu azịza nye onye ahịa iwe na-ewe (nke ezi ma ọ bụ nke ọmụmaatụ), na otu azịza nye nyocha ọha. Gị onwe gị lelere eziokwu ọ bụla, ọ dịghịkwa ozi nzuzo onye ahịa ọ bụla banyere na ngwa AI.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na ndị ọrụ ha na-aza ndị ahịa n'ekwentị, n'ozi ederede, na email, na soshal midia na na nyocha n'ịntanetị: ụlọ nri, ebe a na-edozi isi, ụlọ ahịa, ndị na-asa ihe, ndị na-arụzi ihe na ụgbọala na-ere nri.",
    startingPoint: "Ha na-aza ajụjụ ndị ahịa kwa ụbọchị, ọtụtụ mgbe otu ajụjụ ahụ, ha nwekwara ike ịza nyocha. Ha anaghị eji AI ide azịza nke ukwuu, ha enweghịkwa FAQ e dere ede, olu azụmahịa ma ọ bụ template.",
    gap: "Ịza otu ajụjụ ahụ otu otu na-ewe oge, azịza nwere ike ịdị iche site n'otu onye gaa n'onye ọzọ, ma mkpesa ma ọ bụ nyocha a na-ejighị nke ọma nwere ike ime ka ndị ahịa gbaa ọsọ. Ndị nwe azụmahịa chọrọ ngwa ọrụ ndị ahịa a lelere, nke bụ otu ụdị, nke e ji enyemaka AI mee, ma na-ekwu eziokwu, na-agbaso iwu FTC gbasara nyocha, ma na-edebe ozi ndị ahịa na nzuzo.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa e ji n'etiti ndị ahịa",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'ụbọchị ọrụ juru eju",
      "Iwu: iwu FTC gbasara nyocha machibidoro nyocha ọma adịgboroja ma ọ bụ nke a kwụrụ ụgwọ maka ya; mkpesa gbasara mmerụ ahụ na-aga n'aka ọkachamara ma ọ bụ ụlọ ọrụ inshọransị",
      "Nzuzo: enweghị aha ndị ahịa, ozi kaadị ma ọ bụ ozi kọntaktị na ngwa AI"
    ],
    prerequisites: "\"Mmalite AI maka Obere Azụmahịa\" ga-enyere aka, mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ajụjụ ndị ahịa gị na-ajụkarị", action: "ide FAQ site n'enyemaka AI", standard: "nwere ajụjụ iri, na azịza ọ bụla a lelere megide ihe ị na-eme n'ezie" },
    { id: "O2", condition: "Mgbe e nyere gị otu ị chọrọ ka azụmahịa gị si ada", action: "ịkọwa olu azụmahịa gị ma mee ka AI dee n'olu ahụ", standard: "nwere okwu olu atọ na ndepụta \"mee\" na \"emela\" e tinyere na mmalite mkparịta ụka ahụ" },
    { id: "O3", condition: "Site n'iji ngwa enyemaka AI", action: "ime template azịza ise ị ga-ejigharị nwere oghere", standard: "n'olu azụmahịa gị, a lelere ha ma chekwaa ha n'ebe ị nwere ike idetuo ha ngwa ngwa" },
    { id: "O4", condition: "Mgbe e nyere gị nyocha ọma ma ọ bụ nyocha ọjọọ n'ịntanetị", action: "ide azịza nwere eziokwu, dị jụụ site n'enyemaka AI", standard: "ebe okwu ọ bụla bụ eziokwu, ọ dịghịkwa nyocha adịgboroja ma ọ bụ nke a kwụrụ ụgwọ" },
    { id: "O5", condition: "Mgbe e nyere gị onye ahịa iwe na-ewe na oke gị maka ịkwụghachi ego na imegharị ọrụ", action: "ide azịza site n'iji usoro LAST", standard: "na-enye naanị ngwọta ị ga-enye n'ezie" },
    { id: "O6", condition: "Mgbe e nyere gị FAQ gị, template na azịza gị", action: "ịchịkọta ngwa ọrụ ndị ahịa na-edebe ozi ndị ahịa na nzuzo", standard: "n'otu akwụkwọ, na eziokwu ọ bụla a lelere, na-enweghị ezi ozi onye ahịa ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Azịza kwa ụbọchị ngwa ngwa, n'ụzọ dị mma",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta ajụjụ ndị ahịa gị na-ajụkarị na iwu FAQ",
          minutes: 5,
          goal: "Depụta ajụjụ ndị ahịa gị na-ajụkarị ma mee ka ha ghọọ FAQ a lelere.",
          text: [
            "Ọtụtụ azụmahịa na-aza otu ajụjụ iri ahụ ugboro ugboro: oge mmeghe, ọnụahịa, ebe a na-adọba ụgbọala, iziga ihe n'ụlọ (delivery), ịdebe oge, ịlaghachi ngwaahịa, ụzọ ịkwụ ụgwọ, oge nchere, ihe na-akpata ahụ nsogbu (allergy) ma ọ bụ ihe e ji mee ngwaahịa, na \"ị na-eme...?\".",
            "Buru ụzọ dee ha site n'ihe ị na-echeta, ozi ederede gị na ozi ndị ọzọ. Wee nye ngwa enyemaka AI ezi azịza gị n'ụdị dị nkenke ma rịọ ya ka o mee ka ha ghọọ FAQ doro anya: \"Lee azịza m dị nkenke. Mee obere FAQ maka weebụsaịtị ụlọ ahịa m na-edozi mbọ. Nwee obi ọma, jiri okwu dị mfe.\"",
            "Lelee azịza ọ bụla megide ihe ị na-eme n'ezie. FAQ dị na weebụsaịtị gị ma ọ bụ na bọọdụ bụ nkwa ị na-ekwe ndị ahịa."
          ],
          steps: ["Depụta ajụjụ iri ị na-anụkarị.", "Dee ezi azịza gị nye nke ọ bụla, n'ụdị dị nkenke.", "Rịọ AI ka o mee ka ha ghọọ FAQ doro anya.", "Lelee azịza ọ bụla, wee tinye ya na saịtị gị, peeji soshal gị ma ọ bụ n'ọnụ tebụl ịkwụ ụgwọ."],
          words: [["FAQ", "frequently asked questions (ajụjụ a na-ajụkarị): ndepụta ajụjụ ndị a na-ajụkarị na azịza ha."]],
          slides: [
            { title: "Otu ajụjụ iri ahụ", bullets: ["Oge mmeghe, ọnụahịa, ebe ịdọba ụgbọala, delivery", "Ịdebe oge, ịlaghachi ngwaahịa, ụzọ ịkwụ ụgwọ", "\"Ị na-eme...?\""] },
            { title: "Wuo FAQ", bullets: ["Depụta ajụjụ ndị ahụ", "Dee ezi azịza gị dị nkenke", "Rịọ AI ka o mee ka ha doo anya ma nwee obi ọma"] },
            { title: "Lelee tupu i tinye ya", bullets: ["FAQ bụ nkwa", "Azịza ọ bụla ga-adaba n'ihe ị na-eme n'ezie"] }
          ],
          tryIt: "Dee ajụjụ iri ndị ahịa gị na-ajụkarị, ya na azịza dị nkenke nye nke ọ bụla. Rịọ ngwa enyemaka AI ka o si na ha mee obere FAQ nwere obi ọma, wee lelee azịza ọ bụla.",
          youCanNow: "iwu FAQ a lelere site n'ezi ajụjụ ndị ahịa gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere FAQ ji dị ka nkwa nye ndị ahịa?", options: ["N'ihi na ndị ahịa ga-atụkwasị obi n'ihe o kwuru", "N'ihi na ọ bụ nkwekọrịta iwu", "N'ihi na AI dere ya", "N'ihi na a na-etinye ya naanị otu ugboro"], answer: 0, why: "Ndị ahịa na-eme ihe dabere na FAQ gị, ya mere azịza ọ bụla ga-abụ eziokwu." },
            { objective: "O1", q: "FAQ AI dere kwuru na ị na-enye ebe ịdọba ụgbọala n'efu, mana ị naghị enye ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ dọta ndị ahịa", "Dozie azịza ahụ ka ọ daba n'ihe ị na-eme n'ezie", "Tinye obere \"ma eleghị anya\"", "Rịọ AI ka o wepụ azịza niile"], answer: 1, why: "Azịza FAQ na-esi n'ezi iwu azụmahịa gị, nke gị onwe gị lelere." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhazi olu azụmahịa gị",
          minutes: 4,
          goal: "Kọwaa otu azụmahịa gị si ada ma mee ka AI dee n'olu ahụ.",
          text: [
            "Olu azụmahịa gị (brand voice) bụ otu azụmahịa gị si ada. Ụlọ nri ezinụlọ nwere ike ịdị ọkụ n'obi ma na-atọ ọchị; onye na-akwadebe ụtụ isi dị jụụ ma kwụ chịm; ụlọ ịkpụ isi dị nwayọọ ma dị ka onye agbata obi.",
            "Họrọ okwu atọ maka olu gị ma dee obere ndepụta \"mee\" na \"emela\": \"Mee: kpọọ ndị mmadụ aha mbụ ha, kelee ha, mee ka ọ dị mkpụmkpụ. Emela: ejila okwu ndị ntorobịa (slang), ejila naanị mkpụrụ akwụkwọ ukwu (all caps), ekwela nkwa gbasara oge.\"",
            "Nye AI nke a na mmalite mkparịta ụka: \"Dee n'olu a maka azịza ọ bụla.\" Ugbu a azịza ọ bụla na-ada ka otu azụmahịa ahụ, n'agbanyeghị onye n'ime ndị ọrụ gị zitere ya."
          ],
          steps: ["Họrọ okwu atọ maka otu ị chọrọ isi ada.", "Dee ihe atọ \"mee\" na ihe atọ \"emela\".", "Tinye ha na mmalite mkparịta ụka.", "Rịọ maka azịza ọmụmaatụ ma lelee na ọ dị ka gị."],
          words: [["Olu azụmahịa (brand voice)", "otu azụmahịa si ada n'ozi ya."], ["Otu ụdị (consistent)", "otu ihe ahụ mgbe ọ bụla."]],
          slides: [
            { title: "Kedu otu azụmahịa gị si ada?", bullets: ["Ụlọ nri ezinụlọ: ọkụ n'obi, na-atọ ọchị", "Onye na-akwadebe ụtụ isi: dị jụụ, kwụ chịm", "Ụlọ ịkpụ isi: dị nwayọọ, dị ka onye agbata obi"] },
            { title: "Dee ya", bullets: ["Okwu olu atọ", "Ihe atọ \"mee\" na ihe atọ \"emela\""] },
            { title: "Jiri ya na AI", bullets: ["Tinye ya na mmalite mkparịta ụka", "Azịza ọ bụla na-ada ka azụmahịa gị"] }
          ],
          tryIt: "Dee okwu olu gị atọ na ndepụta \"mee\" na \"emela\" gị. Tinye ha na ngwa enyemaka AI ma rịọ maka azịza nye \"Ị na-emeghe na Sọnde?\" Ọ dị ka gị?",
          youCanNow: "ịkọwa olu azụmahịa gị ma nweta azịza AI na-ada ka azụmahịa gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ olu azụmahịa?", options: ["Nọmba ekwentị azụmahịa gị", "Agba logo gị", "Otu azụmahịa gị si ada n'ozi", "Ekele e dekọrọ ede"], answer: 2, why: "Olu azụmahịa bụ otu azụmahịa gị si ada mgbe ọ na-agwa ndị ahịa okwu." },
            { objective: "O2", q: "Ị chọrọ ka azịza AI ọ bụla daa ka ụlọ achịcha gị. Gịnị ka ị ga-eme?", options: ["Tụọ anya na ọ ga-eche ya", "Rịọ maka ụda ọhụrụ oge ọ bụla", "Jiri naanị mkpụrụ akwụkwọ ukwu ka ọ dị ka ọ ṅụrụ ọṅụ", "Tinye okwu olu gị na \"mee\" na \"emela\" gị na mmalite mkparịta ụka"], answer: 3, why: "Inye AI olu gị na mmalite na-enyere azịza ọ bụla aka ịdaba na ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Template azịza maka ozi, ozi ederede na email",
          minutes: 5,
          goal: "Mee template azịza ị ga-ejigharị nwere oghere.",
          text: [
            "Template azịza bụ azịza dị njikere nwere oghere. Ị na-ejupụta oghere ndị ahụ oge ọ bụla, ya mere ị na-aza n'ime sekọnd n'edeghachighị ihe niile.",
            "Template bara uru: nkwado ịdebe oge, ncheta oge nzute, ihe e nyere iwu dị njikere, ị na-egbu oge, ndo na ihe agwụla, na ekele mgbe ọbịbịa gasịrị. Jụọ AI: \"Site n'iji olu azụmahịa m, dee template ozi ederede ise dị mkpụmkpụ maka azụmahịa na-asa ụgbọala n'ebe onye ahịa nọ. Jiri [aha onye ahịa], [ụbọchị] na [oge] dị ka oghere.\"",
            "Debe template na ndetu ekwentị gị ma ọ bụ ụzọ mkpirisi ozi ederede (text shortcuts), ma ọ bụ na ngwa ịdebe oge gị ma ọ bụrụ na o kwere ka ị chekwaa azịza. Etinyela ezi aha ndị ahịa, nọmba ekwentị ma ọ bụ ozi kaadị n'ime AI iji mee ha; jiri oghere."
          ],
          steps: ["Họrọ ọnọdụ ise ị na-azakarị.", "Rịọ AI maka template dị mkpụmkpụ nye nke ọ bụla, nwere oghere n'ime [ ].", "Lelee okwu na eziokwu ndị ahụ.", "Chekwaa ha n'ebe ị nwere ike idetuo ha ngwa ngwa."],
          words: [["Template azịza", "azịza a chekwara nwere oghere ị na-ejupụta oge ọ bụla."], ["Oghere (placeholder)", "ebe tọgbọrọ chakoo dị ka [aha onye ahịa] nke ị ga-eji ezi ozi jupụta mgbe e mesịrị."]],
          slides: [
            { title: "Zaa n'ime sekọnd", bullets: ["Template bụ azịza dị njikere nwere oghere", "Jupụta [aha onye ahịa], [ụbọchị], [oge]"] },
            { title: "Template ise bara uru", bullets: ["Nkwado ịdebe oge na ncheta", "Ihe e nyere iwu dị njikere; ị na-egbu oge", "Ndo, ihe agwụla; ekele"] },
            { title: "Debe ha n'ebe dị mma, dị nso", bullets: ["Ndetu ekwentị, text shortcuts ma ọ bụ azịza a chekwara", "Jiri oghere, ọ bụghị ezi ozi ndị ahịa"] }
          ],
          tryIt: "Rịọ AI maka template azịza ise n'olu azụmahịa gị nwere [oghere]. Lelee ha ma chekwaa ha n'ebe ị nwere ike idetuo ha ngwa ngwa.",
          youCanNow: "ime ma chekwaa template azịza na-enyere gị aka ịza ndị ahịa ngwa ngwa n'otu ụdị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ template azịza?", options: ["Ozi ị na-ejigharị nwere oghere ị ga-ejupụta", "Azịza otu ugboro", "Nyocha onye ahịa", "Ndepụta ọnụahịa"], answer: 0, why: "Template bụ azịza dị njikere nwere oghere ị na-ejupụta oge ọ bụla." },
            { objective: "O3", q: "Ị chọrọ template maka \"ihe i nyere iwu dị njikere\". Gịnị ka ị ga-enye AI?", options: ["Aha na nọmba ekwentị nke ezi onye ahịa", "Nọmba kaadị gị", "Oghere dị ka [aha onye ahịa] na [oge]", "Ọ dịghị ihe ọ bụla"], answer: 2, why: "Oghere na-ewepụ ozi nzuzo ma na-eme ka template ahụ dị njigharị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Azịza kwa ụbọchị ngwa ngwa, n'ụzọ dị mma",
        questions: [
          { objective: "O1", q: "Gịnị ka FAQ pụtara?", options: ["Ọnụahịa azịza ngwa ngwa", "Ajụjụ a na-ajụkarị (frequently asked questions)", "Ajụjụ n'efu", "Ule azịza ikpeazụ"], answer: 1, why: "FAQ na-edepụta ajụjụ a na-ajụkarị na azịza ha." },
          { objective: "O1", q: "AI mere ka azịza gị dị nkenke ghọọ FAQ. Gịnị ọzọ?", options: ["Tinye ya n'agụghị ya", "Tinyekwuo nkwa", "Hichapụ ya", "Lelee azịza ọ bụla megide ihe ị na-eme n'ezie"], answer: 3, why: "FAQ bụ nkwa nye ndị ahịa." },
          { objective: "O2", q: "Gịnị bụ olu azụmahịa?", options: ["Otu azụmahịa gị si ada n'ozi", "Olu onye nwe ya na-abụ abụ", "Nọmba ekwentị gị", "Agba logo gị"], answer: 0, why: "Olu azụmahịa bụ otu ị si ada." },
          { objective: "O3", q: "Kedu nke bụ ezigbo oghere template?", options: ["Okwuntughe gị", "Nọmba kaadị onye ahịa", "[aha onye ahịa]", "Ezi adreesị ụlọ"], answer: 2, why: "Oghere na-ewepụ ozi nzuzo na ngwa AI." },
          { objective: "O3", q: "Gịnị mere a ga-eji template azịza?", options: ["Iji chaa ọnụahịa karịa", "Iji zere ndị ahịa", "Iji zaa ngwa ngwa n'otu ụdị", "Iji zoo ọnụahịa"], answer: 2, why: "Template na-echekwa oge ma na-eme ka azịza dị otu ọkwa mma." }
        ]
      }
    },
    {
      name: "Isi 2: Nyocha, mkparịta ụka siri ike na ntụkwasị obi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịza nyocha n'ịntanetị, ndị ọma na ndị ọjọọ",
          minutes: 5,
          goal: "Dee azịza nwere eziokwu nye nyocha ọma na nyocha ọjọọ, ma gbasoo iwu FTC gbasara nyocha.",
          text: [
            "Ndị ahịa na-agụ otu ị si aza nyocha. Kelee nyocha ọma n'ịkpọ aha nri ma ọ bụ ọrụ ahụ, n'obere okwu. Maka nyocha ọjọọ, nọrọ jụụ: kelee ha, kwuo ndo maka ihe ha nwetara, dozie ihe ị nwere ike, ma kpọọ ha ka ha kpọtụrụ gị ozugbo. Esela okwu n'ihu ọha, ekesakwala ozi nzuzo ha.",
            "AI na-enyere gị aka ide azịza dị jụụ mgbe iwe na-ewe gị. Tinye ederede nyocha ahụ (ọ bụghị ozi nzuzo onye dere ya) ma jụọ: \"Dee azịza dị mkpụmkpụ, nwere nkwanye ugwu. Kwuo ndo, kwuo na anyị azụgharịla ndị ọrụ anyị gbasara oge nchere, ma kpọọ ha ka ha kpọọ anyị.\" Kwuo naanị ihe bụ eziokwu.",
            "Edela nyocha adịgboroja, azụla ha, ejikwala AI mee ha. Federal Trade Commission (FTC) nwere iwu, nke malitere ịrụ ọrụ kemgbe October 2024, machibidoro nyocha na akaebe adịgboroja, gụnyere ndị AI mere, na ịkwụ ụgwọ maka nyocha naanị ma ọ bụrụ na ha dị mma. Gụọ peeji ajụjụ na azịza FTC ka ị mụta ihe a na-ekwe."
          ],
          steps: ["Gụọ nyocha ahụ ugboro abụọ ma chere ma ọ bụrụ na iwe na-ewe gị.", "Rịọ AI maka ihe mbụ dị mkpụmkpụ, nwere nkwanye ugwu.", "Hụ na okwu ọ bụla bụ eziokwu.", "Kpọọ ndị ahịa obi adịghị mma ka ha kpọtụrụ gị ozugbo.", "Edela, azụla ma ọ bụ mee nyocha adịgboroja mgbe ọ bụla."],
          words: [["Nyocha (review)", "akara na okwu onye ahịa dere n'ihu ọha gbasara azụmahịa gị."], ["FTC", "Federal Trade Commission: ụlọ ọrụ gọọmentị US na-echebe ndị ahịa pụọ n'omume azụmahịa na-ezighi ezi na aghụghọ."], ["Akaebe (testimonial)", "okwu onye ahịa na-eto azụmahịa, nke azụmahịa ahụ na-eji n'ịkpọsa ya."]],
          slides: [
            { title: "Nyocha ọma", bullets: ["Kelee ha, kwuo ihe masịrị ha", "Mee ka ọ dị mkpụmkpụ ma bụrụ eziokwu"] },
            { title: "Nyocha ọjọọ", bullets: ["Nọrọ jụụ; chere ma ọ bụrụ na iwe na-ewe gị", "Kelee, kwuo ndo, dozie ihe ị nwere ike", "Kpọọ ha ka ha kpọtụrụ gị ozugbo"] },
            { title: "Iwu FTC gbasara nyocha adịgboroja", bullets: ["Ọ machibidoro nyocha adịgboroja, gụnyere ndị AI mere", "Ọ machibidoro ịkwụ ụgwọ naanị maka nyocha ọma", "Ọ na-arụ ọrụ kemgbe October 2024: lee ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Chọta otu ezi nyocha gbasara azụmahịa gị (ma ọ bụ dee nyocha ọjọọ ọmụmaatụ gbasara ihe e nyere iwu bịara n'oge). Jiri AI dee ihe mbụ nke azịza dị jụụ, lelee na okwu ọ bụla bụ eziokwu, ma dezie ya n'olu gị.",
          youCanNow: "ịza nyocha ọma na nyocha ọjọọ n'ụzọ dị jụụ na nke eziokwu, n'emebighị iwu FTC gbasara nyocha adịgboroja.",
          quickCheck: [
            { objective: "O4", q: "Kedu omume nyocha iwu FTC machibidoro?", options: ["Ịza nyocha ọjọọ", "Ịkwụ ndị ahịa ụgwọ naanị ma ọ bụrụ na ha dere nyocha ọma", "Ikele ndị ahịa maka nyocha", "Ịrịọ ndị ahịa niile maka nyocha eziokwu"], answer: 1, why: "Inye ihe naanị maka nyocha ọma bụ ihe a machibidoro n'iwu FTC." },
            { objective: "O4", q: "Nyocha siri ike na-ewe gị iwe. Gịnị ka ị ga-eme?", options: ["Zaa ozugbo na mkpụrụ akwụkwọ ukwu", "Tinye nyocha ọma adịgboroja ka o kwekọọ", "Rịọ ndị enyi gị ka ha sere onye dere ya okwu", "Chere, gụghachi ya, wee dee azịza dị jụụ, nke eziokwu"], answer: 3, why: "Ichere na-enyere gị aka ịza n'ụzọ dị jụụ na nke eziokwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ka obi dajụọ onye ahịa iwe na-ewe",
          minutes: 5,
          goal: "Jiri usoro dị mfe nwere nzọụkwụ anọ, site n'enyemaka AI, zaa onye ahịa iwe na-ewe.",
          text: [
            "Otu usoro dị mfe na-arụ ọrụ maka ọtụtụ mkpesa: Listen, Apologize, Solve, Thank (LAST): Gee ntị, Kwuo ndo, Dozie, Kelee. Gee ntị na mkpesa ahụ niile, kwuo ndo maka ihe o nwetara, nye ngwọta ziri ezi ị nwere ike inye n'ezie, ma kelee ya maka ịgwa gị.",
            "Kpebie oke gị tupu ị chọọ ha: mgbe ị ga-akwụghachi ego, megharịa ọrụ, nye mbelata ọnụahịa ma ọ bụ nye ihe n'efu. AI nwere ike ide ozi ahụ, mana gị na-ahọrọ ngwọta ahụ. Ekwela ka AI kwe nkwa ihe ị na-ekwenyeghị na ya.",
            "Ọ bụrụ na onye ahịa na-eyi egwu, na-akpagbu, ma ọ bụ na-ekwu maka mmerụ ahụ, nchekwa ma ọ bụ ikpe n'ụlọikpe, mee ka azịza ahụ dị mkpụmkpụ, ekwela na ọ bụ ụta gị n'ederede, ma gwa ọkachamara ma ọ bụ ụlọ ọrụ inshọransị gị okwu."
          ],
          steps: ["Gee ntị: gụọ ma ọ bụ nụ mkpesa ahụ niile.", "Kwuo ndo maka ihe o nwetara.", "Dozie: nye ngwọta ziri ezi n'ime oke gị.", "Kelee ya maka ịgwa gị.", "Rịọ AI ka o dee ya, wee lelee na nkwa ahụ bụ nke ị ga-edebe."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (Gee ntị, Kwuo ndo, Dozie, Kelee): usoro maka mkpesa."], ["Ibuli elu (escalate)", "inyefe nsogbu siri ike n'aka onye nwe azụmahịa, ọkachamara ma ọ bụ ụlọ ọrụ inshọransị."]],
          slides: [
            { title: "Usoro LAST", bullets: ["Listen: Gee ntị", "Apologize: Kwuo ndo", "Solve: Dozie", "Thank: Kelee"] },
            { title: "Buru ụzọ kpebie oke gị", bullets: ["Mgbe ị ga-akwụghachi, megharịa ma ọ bụ belata ọnụahịa", "Gị na-ahọrọ ngwọta, ọ bụghị AI"] },
            { title: "Mgbe a ga-ebuli ya elu", bullets: ["Iyi egwu ma ọ bụ mkpagbu", "Mkpesa mmerụ ahụ, nchekwa ma ọ bụ ikpe", "Mee ka ọ dị mkpụmkpụ; kpọọ ọkachamara ma ọ bụ inshọransị"] }
          ],
          tryIt: "Dee oke gị maka ịkwụghachi ego na imegharị ọrụ n'ahịrị atọ. Wee jiri AI dee azịza LAST nye: \"Keki m nwere ụtọ na-ezighi ezi, oriri ahụ emebiela.\" Lelee na ngwọta ahụ bụ nke ị ga-enye n'ezie.",
          youCanNow: "ịza onye ahịa iwe na-ewe site n'usoro LAST na ngwọta ziri ezi, nke ezi.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ nzọụkwụ mbụ nke usoro LAST?", options: ["Dozie", "Kelee", "Gee ntị", "Kwuo ndo"], answer: 2, why: "LAST na-amalite site n'ige onye ahịa ntị." },
            { objective: "O5", q: "Azịza AI nye onye ahịa iwe na-ewe na-enye ịkwụghachi ego niile na ọrụ n'efu otu ọnwa, karịa ihe oke gị kwere. Gịnị ka ị ga-eme?", options: ["Gbanwee ya ka ọ bụrụ ngwọta n'ime oke gị", "Zipu ya otu o si dị", "Wepụ ndo ahụ", "Leghara onye ahịa ahụ anya"], answer: 0, why: "Gị na-ahọrọ ngwọta ziri ezi n'ime oke i debere, ọ bụghị AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nzuzo, eziokwu na ngwa ọrụ ndị ahịa gị",
          minutes: 5,
          goal: "Chịkọta ngwa ọrụ gị ma debe ozi ndị ahịa na nzuzo.",
          text: [
            "Ndị ahịa na-atụkwasị gị obi na aha ha, nọmba ekwentị ha, adreesị ha na mgbe ụfọdụ ozi kaadị ha. Wepụ ihe ndị ahụ na ngwa AI. Rụọ ọrụ na oghere, ma jiri aka gị jupụta ezi ozi ahụ n'ekwentị gị ma ọ bụ na ngwa ịdebe oge gị.",
            "Ọ bụrụ na ị na-eji chatbot na weebụsaịtị gị ma ọ bụ n'ozi gị, gwa ndị ahịa na ha na-agwa ngwa enyemaka na-arụ onwe ya okwu, ma nye ha ụzọ isi kpọtụrụ mmadụ. Na-elele ihe ọ na-ekwu mgbe niile.",
            "Ugbu a tinye ihe niile n'otu akwụkwọ: olu azụmahịa gị, FAQ gị, template gị, usoro LAST gị na oke gị, na azịza nyocha gị. Kesaara ndị ọrụ gị ya ka onye ọ bụla zaa n'otu ụzọ ahụ."
          ],
          steps: ["Lelee na template ọ bụla na-eji oghere, ọ bụghị ezi ozi.", "Ọ bụrụ na ị na-eji chatbot, kọwaa ihe ọ bụ ma nye ụzọ isi kpọtụrụ mmadụ.", "Chịkọta olu, FAQ, template, oke LAST na azịza nyocha n'otu akwụkwọ.", "Kesaara ndị otu gị ya."],
          words: [["Chatbot", "mmemme na-arụ onwe ya nke na-aza ozi."], ["Ozi ndị ahịa", "ozi gbasara ndị ahịa gị, dị ka aha, nọmba ekwentị na ihe ha nyere iwu."]],
          slides: [
            { title: "Debe ozi ndị ahịa na nzuzo", bullets: ["Etinyela aha na ekwentị, adreesị ma ọ bụ kaadị n'ime AI", "Jiri oghere; jiri aka gị jupụta ozi ahụ"] },
            { title: "Ọ bụrụ na ị na-eji chatbot", bullets: ["Kwuo na ọ na-arụ onwe ya", "Nye ụzọ isi kpọtụrụ mmadụ", "Na-elele azịza ya mgbe niile"] },
            { title: "Ngwa ọrụ ndị ahịa gị", bullets: ["Olu azụmahịa na FAQ", "Template na oke LAST", "Azịza nyocha, ekesaara ndị otu gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: tinye olu azụmahịa gị, FAQ nwere ajụjụ iri, template ise, otu azịza nye onye ahịa iwe na-ewe na otu azịza nyocha n'otu akwụkwọ. Lelee eziokwu ọ bụla ma wepụ ezi ozi onye ahịa ọ bụla.",
          youCanNow: "ịrụ ọrụ ndị ahịa gị site na ngwa ọrụ a lelere, nke nzuzo, nke otu ụdị, nke e ji enyemaka AI mee.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji kesaara ndị ọrụ gị ngwa ọrụ ndị ahịa gị?", options: ["Ka ha nwee ike ịgbanwe ọnụahịa", "Ka onye ọ bụla zaa n'otu ụzọ ahụ", "Ka ha hapụ ọzụzụ", "Ka ndị ahịa nwee ike idezi ya"], answer: 1, why: "Ngwa ọrụ ekesara na-eme ka azịza bụrụ otu ụdị n'etiti ndị otu gị." },
            { objective: "O6", q: "Ị na-eme template, ozi kaadị nke ezi onye ahịa dịkwa na ndetu gị. Gịnị ka ị ga-eme?", options: ["Tinye ha n'ime AI ka ọ ghọta", "Jiri ha mee template ọmụmaatụ", "Kesaara ndị ọrụ ha n'ime ngwa ọrụ ahụ", "Wepụ ha na ngwa AI na n'ime ngwa ọrụ ahụ"], answer: 3, why: "Ozi kaadị ndị ahịa ga-anọrịrị n'èzí ngwa AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nyocha, mkparịta ụka siri ike na ntụkwasị obi",
        questions: [
          { objective: "O4", q: "Onye ahịa dere nyocha kpakpando otu gbasara nchere ogologo. Kedu azịza kacha mma?", options: ["Kelee ya, kwuo ndo, kwuo ihe ị na-edozi, ma kpọọ ya ka ọ kpọtụrụ gị", "Sie ike na ọ hiere ụzọ", "Tinye nọmba ekwentị ya n'ịntanetị", "Leghara ya anya ruo mgbe ebighị ebi"], answer: 0, why: "Azịza dị jụụ, nke eziokwu na-ewu ntụkwasị obi." },
          { objective: "O4", q: "N'okpuru iwu FTC, kedu nke a NA-EKWEGHỊ?", options: ["Ikele onye dere nyocha", "Ịza nyocha ọjọọ", "Ịrịọ ndị ahịa obi dị mma ka ha dee nyocha eziokwu", "Iji AI dee nyocha ndị ahịa adịgboroja"], answer: 3, why: "Iwu FTC machibidoro nyocha adịgboroja, gụnyere ndị AI mere." },
          { objective: "O5", q: "Gịnị ka S dị na LAST pụtara?", options: ["Sell (ree)", "Solve (dozie)", "Stop (kwụsị)", "Smile (mụmụọ ọnụ ọchị)"], answer: 1, why: "Listen, Apologize, Solve, Thank: Gee ntị, Kwuo ndo, Dozie, Kelee." },
          { objective: "O5", q: "Onye na-ahọrọ ngwọta nye onye ahịa iwe na-ewe?", options: ["Gị, n'ime oke i debere", "AI", "Naanị onye ahịa ahụ", "Onye ọbịa n'ịntanetị"], answer: 0, why: "AI na-ede ihe mbụ; gị na-ekpebi ngwọta." },
          { objective: "O6", q: "Chatbot dị na weebụsaịtị gị kwesịrị:", options: ["Ime ka ọ bụ mmadụ", "Ịnakọta nọmba kaadị na mkparịta ụka", "Ikwu na ọ na-arụ onwe ya ma nye ụzọ isi kpọtụrụ mmadụ", "Ọ dịghị mgbe a ga-elele ya"], answer: 2, why: "Eziokwu na ụzọ isi kpọtụrụ mmadụ na-ewu ntụkwasị obi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ọrụ Ndị Ahịa na Nkwurịta Okwu",
    questions: [
      { objective: "O1", q: "Kedu ajụjụ ndị ahịa a na-ajụkarị ị ga-etinye na FAQ?", options: ["Gịnị bụ okwuntughe gị?", "Kedu oge ị na-emeghe?", "Gịnị bụ nọmba ụlọ akụ gị?", "Ndị bụ ndị nwe azụmahịa ndị na-enye gị ngwaahịa?"], answer: 1, why: "Oge mmeghe bụ otu n'ime ajụjụ a kacha ajụ." },
      { objective: "O1", q: "Ebee ka azịza dị na FAQ gị si?", options: ["Nyocha ọ bụla", "Ihe AI chere", "Saịtị onye ị na-asọ mpi", "Ezi iwu azụmahịa gị, nke gị dere, nke AI mere ka o doo anya"], answer: 3, why: "AI na-ahazi naanị ezi azịza gị." },
      { objective: "O1", q: "Gịnị mere ị ga-eji lelee FAQ tupu i tinye ya?", options: ["Ka ọ dị ogologo", "AI na-eziri ezi mgbe niile", "Ọ dịghị mkpa", "Ọ bụ nkwa nye ndị ahịa"], answer: 3, why: "Ndị ahịa ga-ejide gị n'okwu ya." },
      { objective: "O2", q: "Okwu olu atọ maka ụlọ achịcha ezinụlọ nwere ike ịbụ:", options: ["Iwe, ọsọ ọsọ, oyi", "Ọkụ n'obi, ọṅụ, dị mfe", "Nzuzo, edoghị anya, ogologo", "Iwu, siri ike, obi ọjọọ"], answer: 1, why: "Okwu olu na-akọwa otu ị chọrọ isi ada." },
      { objective: "O2", q: "Ebee ka ị na-etinye olu azụmahịa gị ka AI jiri ya?", options: ["Na akwụkwọ ịnata ego (receipt)", "N'ime okwuntughe gị", "Na mmalite mkparịta ụka", "Ebe ọ bụla"], answer: 2, why: "Itinye ya n'elu na-eduzi azịza ọ bụla." },
      { objective: "O2", q: "Ihe \"emela\" n'ndepụta olu azụmahịa nwere ike ịbụ:", options: ["Iji naanị mkpụrụ akwụkwọ ukwu", "Ikele", "Ịkpọ aha mbụ", "Ime ka ọ dị mkpụmkpụ"], answer: 0, why: "Naanị mkpụrụ akwụkwọ ukwu nwere ike ịdị ka mkpu." },
      { objective: "O3", q: "Kedu nke bụ ezigbo template azịza?", options: ["\"Zitere m okwuntughe gị.\"", "\"Ndewo Jane Smith, 555-0101, kaadị 4111...\"", "\"Ndewo [aha onye ahịa], ihe i nyere iwu dị njikere ka i bịa were ya n'elekere [oge].\"", "\"Mba.\""], answer: 2, why: "Ọ na-eji oghere ma doo anya." },
      { objective: "O3", q: "Ebee ka ị nwere ike idebe template maka iji ngwa ngwa?", options: ["Ndetu ekwentị, text shortcuts ma ọ bụ azịza a chekwara", "Naanị n'isi gị", "N'igbe ozi onye ahịa", "Na soshal midia n'ihu ọha"], answer: 0, why: "Template a chekwara dị mfe idetuo ngwa ngwa." },
      { objective: "O3", q: "Iji AI mee template, ị kwesịrị inye ya:", options: ["Ezi aha na nọmba ndị ahịa", "Oghere dị ka [ụbọchị] na [oge]", "Ozi kaadị", "Okwuntughe gị"], answer: 1, why: "Jiri oghere, ọ bụghị ezi ozi." },
      { objective: "O4", q: "Nyocha ọma na-ekele \"oxtail kacha mma n'obodo\" gị. Ezigbo azịza:", options: ["Na-enye ego maka nyocha ọzọ", "Na-eleghara ya anya", "Na-arịọ adreesị ha", "Na-ekele ha ma kwuo maka oxtail ahụ"], answer: 3, why: "Ekele dị mkpụmkpụ, nke metụtara onye ahụ, na-arụ ọrụ kacha mma." },
      { objective: "O4", q: "Ịkwụ ndị ahịa ụgwọ naanị ma ọ bụrụ na ha dere nyocha ọma bụ:", options: ["Ihe iwu FTC machibidoro", "Iwu a ga-agbaso", "Ezigbo echiche", "Ihe kwere naanị na ngwụcha izu"], answer: 0, why: "Iwu ahụ machibidoro inye ihe dabere na nyocha ọma." },
      { objective: "O4", q: "Mgbe nyocha iwe na-ewe gị, ị kwesịrị ibu ụzọ:", options: ["Ide nyocha ọma adịgboroja", "Ịza ozugbo na naanị mkpụrụ akwụkwọ ukwu", "Itinye ozi onye ahịa n'ịntanetị", "Ichere ma gụghachi ya tupu ị zaa"], answer: 3, why: "Azịza dị jụụ bụ azịza ka mma." },
      { objective: "O5", q: "N'usoro LAST, nzọụkwụ mbụ bụ:", options: ["Laugh (ịchị ọchị)", "Leave (ịpụ)", "Listen (ige ntị)", "Lie (ịgha ụgha)"], answer: 2, why: "Buru ụzọ gee ntị na mkpesa ahụ niile." },
      { objective: "O5", q: "Gịnị mere ị ga-eji kpebie oke ịkwụghachi ego na imegharị ọrụ tupu mkpesa abịa?", options: ["Iji jụ onye ọ bụla", "Ka ị nye ngwọta ziri ezi ị ga-edebe n'ezie", "Iji mee ka ndị ọrụ ghara ịghọta", "Ọ bụ iwu"], answer: 1, why: "Oke doro anya na-eme ka mkpebi dị mma ma dị ngwa." },
      { objective: "O5", q: "Onye ahịa kwuru na ọ merụrụ ahụ n'ụlọ ahịa gị. Ị kwesịrị:", options: ["Ide gbasara ya n'ịntanetị", "Ime ka AI kweta na ọ bụ ụta gị n'ụzọ zuru ezu", "Ileghara ya anya", "Ime ka azịza dị mkpụmkpụ ma gwa ọkachamara ma ọ bụ ụlọ ọrụ inshọransị gị okwu"], answer: 3, why: "Mkpesa mmerụ ahụ na nke ikpe chọrọ ndụmọdụ ọkachamara." },
      { objective: "O5", q: "AI dere azịza na-ekwe nkwa nri n'efu otu afọ. Ị ga-eme:", options: ["Tinyekwuo nkwa", "Zipu ya", "Wepụ ya ma ọ bụrụ na i kwenyeghị n'ezie na nke ahụ", "Rịọ onye ahịa ka o kpebie"], answer: 2, why: "Kwe naanị nkwa ị ga-edebe." },
      { objective: "O6", q: "Ozi kaadị ndị ahịa kwesịrị:", options: ["Ịnọ n'èzí ngwa AI", "Ịbanye na mkparịta ụka", "Ịpụta n'azịza", "Ịnọ na template"], answer: 0, why: "Ozi kaadị bụ nzuzo." },
      { objective: "O6", q: "Ọ bụrụ na ị na-eji chatbot, ndị ahịa kwesịrị inwe ike:", options: ["Ọ dịghị onye ha ga-akpọtụrụ", "Ịkpọtụrụ mmadụ", "Ịkwụ ụgwọ naanị site na gift card", "Iji naanị otu okwu"], answer: 1, why: "Ụzọ isi kpọtụrụ mmadụ na-ewu ntụkwasị obi." },
      { objective: "O6", q: "Ngwa ọrụ ndị ahịa gị gụnyere:", options: ["Okwuntughe", "Olu, FAQ, template, oke LAST na azịza nyocha", "Nọmba kaadị ndị ahịa", "Nyocha adịgboroja"], answer: 1, why: "Akụkụ ndị ahụ na-eme ka ọrụ dị ngwa ma bụrụ otu ụdị." },
      { objective: "O6", q: "Gịnị mere ị ga-eji kesaara ndị ọrụ ngwa ọrụ ahụ?", options: ["Ka onye ọ bụla zaa n'otu ụzọ ahụ", "Iji mee ka ha ghara ime ngwa ngwa", "Iji zoo ya", "Ọ baghị uru"], answer: 0, why: "Ịbụ otu ụdị na-ewu ntụkwasị obi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 3, 6, 8, 9, 10, 12, 13, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Olu azụmahịa", objective: "O2", notYet: "Enweghị okwu olu ma ọ bụ enweghị ndepụta \"mee\" na \"emela\".", meets: "Okwu olu atọ na ndepụta \"mee\" na \"emela\".", exceeds: "Azịza ọmụmaatụ dabara n'olu ahụ nke ọma." },
      { name: "FAQ a lelere", objective: "O1", notYet: "Ajụjụ erughị iri, ma ọ bụ azịza na-abụghị eziokwu.", meets: "Ajụjụ iri a na-ajụkarị nwere azịza a lelere megide ihe ị na-eme n'ezie.", exceeds: "Azịza dị mkpụmkpụ ma dị n'olu azụmahịa." },
      { name: "Template azịza", objective: "O3", notYet: "Erughị ise, ma ọ bụ template nwere ezi ozi ndị ahịa.", meets: "Template ise a lelere nwere oghere.", exceeds: "A chekwara ha n'ebe ndị ọrụ nwere ike idetuo ha ngwa ngwa." },
      { name: "Azịza nye onye ahịa iwe na-ewe", objective: "O5", notYet: "Na-agbachitere onwe ya, ma ọ bụ na-enye ngwọta ị na-agaghị enye.", meets: "Na-agbaso LAST ma na-enye ngwọta n'ime oke gị.", exceeds: "E dere oke gị maka ịkwụghachi ego na imegharị ọrụ n'ime ngwa ọrụ ahụ." },
      { name: "Azịza nyocha", objective: "O4", notYet: "Na-ese okwu, na-ekwu ihe na-abụghị eziokwu, ma ọ bụ adịghị.", meets: "Dị jụụ, nwere eziokwu ma dị n'olu gị.", exceeds: "Na-ekwu ihe ị na-edozi ma na-akpọ onye ahịa ka ọ kpọtụrụ gị." },
      { name: "Nzuzo na eziokwu", objective: "O6", notYet: "Ezi ozi ndị ahịa dị n'ime ngwa ọrụ ma ọ bụ na mkparịta ụka AI, ma ọ bụ eziokwu a na-eleleghị.", meets: "Ọ dịghị ozi nzuzo onye ahịa e jiri, a lelekwara eziokwu ọ bụla.", exceeds: "Ngwa ọrụ ahụ na-ekwu otu chatbot, ma ọ bụrụ na e ji ya, si ekwu na ọ na-arụ onwe ya ma nye ụzọ isi kpọtụrụ mmadụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa na-eji FAQ ma ọ bụ template ha kwa izu (nnyocha nsochi ụbọchị 30)",
      "Ndị nwe azụmahịa na-aza nyocha ọhụrụ ọ bụla n'ime otu izu (nnyocha nsochi)",
      "Ndị nwe azụmahịa kwuru na azịza ha dịkwuuru ngwa ma ọ bụ nyocha ha ka mma n'ime ụbọchị 90"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Ngwa akwụkwọ n'efu dị ka Google Docs ma ọ bụ Microsoft Word maka ngwa ọrụ ahụ",
      "Ndepụta ezi ajụjụ ndị ahịa na oke gị maka ịkwụghachi ego na imegharị ọrụ",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ ndị nwe azụmahịa ka ha weta ezi ajụjụ a na-ajụkarị ha na otu nyocha (nke ezi ma ọ bụ nke ọmụmaatụ).",
      "Jiri naanị aha ndị ahịa ọmụmaatụ; etinyela ezi ozi ndị ahịa nwere aha ma ọ bụ nọmba n'ime AI mgbe ọ bụla.",
      "Mee egwuregwu ọrụ (role-play) nke usoro LAST abụọ abụọ site na mkpesa e chepụtara echepụta tupu ide azịza ahụ.",
      "Chetara ndị nwe azụmahịa na mkpesa mmerụ ahụ na-aga n'aka ọkachamara ma ọ bụ ụlọ ọrụ inshọransị ha, ọ bụghị n'azịza AI.",
      "Jiri rubric tụọ akara ngwa ọrụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
