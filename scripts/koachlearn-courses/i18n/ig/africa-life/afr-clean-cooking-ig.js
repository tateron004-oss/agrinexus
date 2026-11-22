"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-clean-cooking.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Follows WHO guidance (cited). Fuel and stove prices are never given as facts: money figures are examples only. No medical treatment advice.

const WHO_HAP = { name: "Akwụkwọ ozi WHO: Mmetọ ikuku n'ụlọ (mmanụ ọkụ na-emetọ ikuku, mmerụ ahụike, mmanụ ọkụ dị ọcha, kerosene)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "Akwụkwọ ozi WHO: Ọkụ ịgba mmadụ (enyemaka mbụ na mgbochi n'ụlọ)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "WHO: Clean Household Energy Solutions Toolkit (ngwa maka ike ọkụ dị ọcha n'ụlọ: mmanụ ọkụ dị ọcha, nke etiti na nke na-emetọ ikuku)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance (otu na-akwado isi nri n'ụzọ dị ọcha)", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking-ig",
  lang: "ig",
  translationOf: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Isi Nri n'Ụzọ Dị Ọcha: Stov Dị Nchebe na Kichin Na-enweghị Anwụrụ Ọkụ",
  skills: "Ịkọwa otu anwụrụ ọkụ nri si emerụ ahụike, Ibelata anwụrụ ọkụ na kichin taa, Iji ọkụ, unyi, gas na kerosene n'enweghị nsogbu, Ịtụnyere stov na mmanụ ọkụ dị ọcha, Ịgụta ego ọ ga-efu ịgbanwe, Ide atụmatụ nchebe kichin na mgbanwe",
  outcome: "ime ka kichin gị dịkwuo nchebe ma nwee obere anwụrụ ọkụ: ịkọwa otu anwụrụ ọkụ si emerụ ezinụlọ gị, ibelata anwụrụ ọkụ taa site n'ihe i nwere, iji ọkụ, unyi, gas na kerosene n'enweghị nsogbu, ịtụnyere stov na mmanụ ọkụ dị ọcha site n'ego na nchebe, na ide atụmatụ ezinụlọ gị kwenyere na ya.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-eji nkụ, unyi ma ọ bụ kerosene esi nri, n'ụlọ ma ọ bụ n'obere azụmahịa nri, n'obodo mepere emepe na n'ime obodo n'Africa niile: ndị nne, ndị nna, nne nne, ụmụaka toro eto na-enyere aka isi nri, na ndị na-ere nri.",
    "Isi 1 bụ maka anwụrụ ọkụ na nchebe: otu anwụrụ ọkụ nri si emerụ ahụike, otu esi ebelata anwụrụ ọkụ taa site n'ihe i nweburu, na otu esi anọ na nchebe mgbe ị na-eji ọkụ, unyi, gas na kerosene. Isi 2 bụ maka ịgbanwe gaa n'isi nri n'ụzọ dị ọcha: ịtụnyere stov na mmanụ ọkụ, ịgụta ego ọ ga-efu, na ide atụmatụ kichin gị na ezinụlọ gị.",
    "Ihe ọmụmụ a na-agbaso ndụmọdụ World Health Organization (WHO, Òtù Ahụike Ụwa). Ọ naghị akwado otu aha ngwaahịa ma ọ bụ otu onye na-ere ahịa. Ọnụ ahịa stov na mmanụ ọkụ na-agbanwe, ọ dịkwa iche n'ebe dị iche iche; nọmba ego ọ bụla n'ihe ọmụmụ a bụ ọmụmaatụ, ya mere jiri ọnụ ahịa nke gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ nchebe kichin na mgbanwe nke ruru otu peeji maka ezinụlọ gị ma ọ bụ azụmahịa nri gị (ma ọ bụ ọmụmaatụ, dị ka ezinụlọ na Kisumu na-esi nri na jiko unyi, onye na-ere nri na Lagos na-eji nkụ, ma ọ bụ ezinụlọ na Ouagadougou na-esi nri n'ekwu nkume atọ): ihe ị na-eji esi nri ugbu a na ego ọ na-efu kwa ọnwa; nzọụkwụ atọ ga-ebelata anwụrụ ọkụ n'izu a; iwu nchebe gị maka ọkụ, unyi, gas ma ọ bụ kerosene na ụmụaka; nhọrọ abụọ dị ọcha e tụnyere site n'ego, ịdị mmanụ ọkụ ahụ na nchebe; nhọrọ gị, otu ị ga-esi kwụọ ụgwọ ya, na ụbọchị ị ga-agbanwe; na ndị n'ezinụlọ kwenyere.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-esi nri maka ezinụlọ ma ọ bụ maka obere azụmahịa nri na Kenya, Nigeria, Ghana, Burkina Faso, Senegal, Cameroon, Egypt na n'Africa niile, nke ka ukwuu na nkụ, unyi ma ọ bụ kerosene. Ọtụtụ bụ ụmụnwaanyị na ụmụ agbọghọ na-achịkọtakwa nkụ, ọtụtụ nwekwara ekwentị nkịtị na obere ego.",
    startingPoint: "Ọtụtụ na-esi nri n'ọkụ ghere oghe, n'ekwu nkume atọ, na stov unyi ma ọ bụ stov kerosene, ọtụtụ mgbe n'ime obere kichin nwere obere ikuku. Ọtụtụ maara na anwụrụ ọkụ na-agba ha anya, mana ha anaghị ejikọta ya na ọrịa obi (akpa ume) ụmụaka. Mmadụ ole na ole tụnyerela ego ha na-emefu na mmanụ ọkụ kwa ọnwa na ọnụ ahịa stov dị ọcha, ụfọdụ na-atụkwa egwu gas.",
    gap: "WHO na-agụta ihe dị ka ijeri 2.1 (2.1 billion) mmadụ n'ụwa niile na-eji mmanụ ọkụ na stov na-emetọ ikuku esi nri, na ọtụtụ nde ọnwụ kwa afọ site na mmetọ ikuku n'ụlọ; ụmụnwaanyị na ụmụntakịrị na-enweta ya karịa. Ọkụ ghere oghe, unyi na kerosene na-ebutekwa ọkụ ịgba mmadụ, nsị carbon monoxide na nsị ụmụaka. Ndị na-amụ ihe na-ebelata anwụrụ ọkụ, na-esi nri n'enweghị nsogbu ma na-eme atụmatụ mgbanwe na-echebe ahụike ezinụlọ ha, ọtụtụ mgbe na-echekwa oge na ego.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla",
      "Ego: dị obere; ihe ọmụmụ a anaghị enye ezi ọnụ ahịa, naanị ọmụmaatụ, ndị na-amụ ihe na-eji ọnụ ahịa ebe ha nọ",
      "Ịdị mmanụ ọkụ dị iche n'ebe dị iche iche: gas, ọkụ eletrik na stov ka mma adịghị ebe niile, ya mere ndị na-amụ ihe na-ahọrọ ihe dabara ha",
      "Nchebe: arụla ọrụ na paịpụ gas, waya ọkụ eletrik ma ọ bụ ọkụ ọha; ndị na-amụ ihe na-azụ n'aka ndị nwere ikike ma na-agbaso ntuziaka onye mere ya",
      "Enweghị ndụmọdụ ọgwụgwọ: ọkụ ịgba mmadụ na nsogbu iku ume na-aga ụlọ ọgwụ"
    ],
    prerequisites: "Ọ dịghị. Mgbakọ na mwepụ dị mfe na ịmụba ihe na-enyere aka na Nkuzi 5; igwe mgbakọ dị n'ekwentị zuru ezu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị kichin na-eji nkụ, unyi ma ọ bụ kerosene esi nri", action: "ịkọwa otu anwụrụ ọkụ nri si emerụ ahụike na ndị ọ na-emerụ karịa", standard: "na-akpọ aha opekata mpe mmerụ ahụike atọ na ndị na-enweta ya karịa" },
    { id: "O2", condition: "Site n'iji stov na mmanụ ọkụ i nwere ugbu a", action: "idepụta nzọụkwụ ga-ebelata anwụrụ ọkụ na kichin gị n'izu a", standard: "nwere opekata mpe nzọụkwụ atọ na-efu obere ego ma ọ bụ ọ dịghị ego" },
    { id: "O3", condition: "Mgbe ị na-eji ọkụ, unyi, gas ma ọ bụ kerosene esi nri", action: "ịgbaso iwu nchebe na-egbochi ọkụ ịgba mmadụ, nsị carbon monoxide, ọkụ gas na nsị kerosene", standard: "na-ahọrọ ihe ime n'enweghị nsogbu n'opekata mpe 4 n'ime ọnọdụ 5" },
    { id: "O4", condition: "Mgbe e nyere gị nhọrọ stov na mmanụ ọkụ abụọ ma ọ bụ karịa dị ebe ị bi", action: "ịtụnyere stov na mmanụ ọkụ dị ọcha site n'anwụrụ ọkụ, ego, ịdị mmanụ ọkụ ahụ na nchebe", standard: "nwere ezi ihe kpatara nhọrọ ị họọrọ" },
    { id: "O5", condition: "Site n'iji ego gị na-emefu na mmanụ ọkụ na ọnụ ahịa ebe ị nọ", action: "ịgụta ego mmanụ ọkụ gị kwa ọnwa ma tụnyere ya na ego nhọrọ dị ọcha ga-efu", standard: "na mgbakọ ziri ezi na ihe egwu ịkwụ ụgwọ a kpọrọ aha" },
    { id: "O6", condition: "Gị na ezinụlọ gị ma ọ bụ azụmahịa gị", action: "ide atụmatụ nchebe kichin na mgbanwe nke ezinụlọ kwenyere na ya", standard: "na akụkụ ọ bụla dejupụtara na ụbọchị ịgbanwe" }
  ],
  chapters: [
    {
      name: "Isi 1: Anwụrụ ọkụ na nchebe na kichin",
      lessons: [
        {
          title: "Otu anwụrụ ọkụ nri si emerụ ezinụlọ gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọwaa otu anwụrụ ọkụ nri si emerụ ahụike na ndị ọ na-emerụ karịa.",
          text: [
            "Anwụrụ ọkụ si na nkụ, unyi, ahịhịa ugbo, nsị anụmanụ na kerosene jupụtara n'obere irighiri ihe na gas. Ị naghị ahụ ọtụtụ n'ime ha anya, mana ha na-abanye n'ime akpa ume. A na-akpọ nke a mmetọ ikuku n'ụlọ.",
            "WHO kwuru na mmetọ ikuku n'ụlọ na-ebute pneumonia na ọrịa obi ndị ọzọ n'ụmụaka, na strok, ọrịa obi (heart), ọrịa akpa ume na-adịte aka na kansa akpa ume n'ndị okenye. A na-ejikọtakwa ya na nwa a mụrụ nwere obere ibu na ọrịa anya. WHO na-agụta ihe dị ka ijeri 2.1 mmadụ n'ụwa niile na-eji mmanụ ọkụ na stov na-emetọ ikuku esi nri, ọtụtụ n'ime ha n'Africa na Asia.",
            "Ụmụnwaanyị na ụmụntakịrị na-eku anwụrụ ọkụ karịa, n'ihi na ha na-anọ nso ọkụ ogologo oge, a na-ekukwa ụmụ ọhụrụ n'azụ mgbe nne na-esi nri. Ụmụ agbọghọ na ụmụnwaanyị na-atụfukwa ọtụtụ awa n'ịchịkọta nkụ, oge ha gaara eji gaa akwụkwọ, rụọ ọrụ ma ọ bụ zuo ike.",
            "Anwụrụ ọkụ ị na-adịghị ahụ anya ka na-emerụ ahụ. Isi anwụrụ ọkụ, anya na-agba, ụkwara mgbe ị na-esi nri, na mgbidi ma ọ bụ elu ụlọ jiri oji bụ ihe ịrịba ama na ezinụlọ gị na-eku ya karịa."
          ],
          words: [["Mmetọ ikuku n'ụlọ", "anwụrụ ọkụ na gas n'ime ụlọ na gburugburu ya, nke ka ukwuu site n'isi nri, ikpo ọkụ na ịmụnye ọkụ na mmanụ ọkụ na-emetọ ikuku."], ["Mmanụ ọkụ na-emetọ ikuku", "ihe a na-akpọ ọkụ nke na-eme ọtụtụ anwụrụ ọkụ na stov nkịtị: nkụ, unyi, ahịhịa ugbo, nsị anụmanụ, coal na kerosene."], ["Pneumonia", "ọrịa obi (akpa ume) dị njọ; ọ bụ otu n'ime ihe na-egbu ụmụntakịrị karịa."]],
          slides: [
            { title: "Ihe dị n'anwụrụ ọkụ", bullets: ["Obere irighiri ihe na gas", "Ha na-abanye n'ime akpa ume", "Ị naghị ahụ ọtụtụ n'ime ha anya"] },
            { title: "Otu o si emerụ ahụ (WHO)", bullets: ["Ụmụaka: pneumonia na ọrịa obi", "Ndị okenye: strok, ọrịa obi na akpa ume, kansa akpa ume", "Ejikọtara ya na nwa nwere obere ibu na ọrịa anya"] },
            { title: "Ndị na-eku ya karịa", bullets: ["Ụmụnwaanyị na-esi nri", "Ụmụ ọhụrụ e kuru n'azụ na ụmụntakịrị", "Ụmụ agbọghọ na-achịkọta nkụ na-atụfu oge akwụkwọ"] },
            { title: "Ihe ịrịba ama nke anwụrụ ọkụ karịrị akarị", bullets: ["Anya na-agba, ụkwara mgbe ị na-esi nri", "Mgbidi ma ọ bụ elu ụlọ jiri oji", "Isi anwụrụ ọkụ n'uwe"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Lelee kichin gị mgbe ị na-esi otu nri. Dee ogologo oge ọkụ na-enwu, ndị nọ nso ya, ma nwa ọhụrụ ma ọ bụ nwatakịrị nọ ebe ahụ, na ihe ịrịba ama anwụrụ ọkụ ị hụrụ. Dee ụzọ atọ anwụrụ ọkụ ahụ nwere ike isi merụọ ezinụlọ gị.",
          youCanNow: "ịkọwa otu anwụrụ ọkụ nri si emerụ ahụike na onye n'ụlọ gị na-eku ya karịa.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrịa ụmụntakịrị WHO jikọtara na anwụrụ ọkụ nri?", options: ["Pneumonia na ọrịa obi", "Ọkpụkpụ gbajiri agbaji", "Ezé mgbu", "Chickenpox (ọrịa ntụpọ)"], answer: 0, why: "Mmetọ ikuku n'ụlọ na-ebute ọrịa akpa ume dị ka pneumonia." },
            { objective: "O1", q: "Onye na-ekukarị anwụrụ ọkụ nri karịa?", options: ["Ndị ọbịa", "Ụmụnwoke na-arụ ọrụ n'ugbo", "Ụmụnwaanyị na-esi nri na ụmụntakịrị nọ ha nso", "Ọ dịghị onye; anwụrụ ọkụ na-aga elu"], answer: 2, why: "Ụmụnwaanyị na ụmụntakịrị na-anọ nso ọkụ ogologo oge karịa." }
          ]
        },
        {
          title: "Ibelata anwụrụ ọkụ taa site n'ihe i nwere",
          objectives: ["O2"],
          minutes: 5,
          goal: "Depụta nzọụkwụ ga-ebelata anwụrụ ọkụ na kichin gị n'izu a, site na stov i nwere ugbu a.",
          text: [
            "Stov ọhụrụ na-enyere aka karịa, mana ị nwere ike ibelata anwụrụ ọkụ taa. Kwe ka ikuku banye, anwụrụ ọkụ pụọ: sie nri n'èzí ma ọ bụ n'okpuru ndo mgbe ị nwere ike, hapụ ụzọ na windo ka ha ghere oghe mgbe ị na-esi nri, ọ bụrụ na ị nwere ike, mee windo, oghere n'elu mgbidi ma ọ bụ oghere anwụrụ ọkụ (chimney) nso ọkụ ahụ.",
            "Kpọọ obere ọkụ, kpọọ ya nke ọma. Jiri nkụ kpọrọ nkụ: nkụ mmiri na-eme anwụrụ ọkụ karịa nke ukwuu. Waa nkụ ka ọ bụrụ mpekere dị mkpa ma tinye ya nwayọọ nwayọọ. Kpuchie ite, tinye agwa na ọka na mmiri tupu i sie ha, ma menyụọ ọkụ ozugbo nri ahụ siri.",
            "Hapụ ụmụaka ka ha nọrọ ebe dị anya. Mee ka ụmụ ọhụrụ na ụmụntakịrị ghara ịbanye na kichin mgbe ọkụ na-enwu, esikwala nri na nwa n'azụ gị ma ọ bụrụ na onye ọzọ nwere ike ijide nwa ahụ.",
            "Esula plastik, rọba ma ọ bụ osisi e tere agba ọkụ mgbe ọ bụla: anwụrụ ọkụ ha bụ nsị."
          ],
          steps: ["Kwe ka ikuku banye: sie nri n'èzí ma ọ bụ meghee ụzọ na windo.", "Jiri nkụ kpọrọ nkụ, nke e waara awa, ma tinye ya nwayọọ nwayọọ.", "Kpuchie ite; buru ụzọ tinye agwa na ọka na mmiri.", "Menyụọ ọkụ mgbe nri siri.", "Mee ka ụmụ ọhụrụ na ụmụntakịrị nọrọ ebe anwụrụ ọkụ na-adịghị."],
          words: [["Ikuku ịbanye na ịpụ (ventilation)", "ikwe ka ikuku dị ọcha banye ma ikuku anwụrụ ọkụ pụọ."], ["Oghere n'elu mgbidi (eave gap)", "oghere dị n'etiti elu mgbidi na elu ụlọ nke na-ekwe ka anwụrụ ọkụ pụọ."]],
          slides: [
            { title: "Kwe ka ikuku banye, anwụrụ ọkụ pụọ", bullets: ["Sie nri n'èzí ma ọ bụ n'okpuru ndo", "Meghee ụzọ na windo", "Mee windo ma ọ bụ oghere n'elu mgbidi nso ọkụ"] },
            { title: "Kpọọ obere ọkụ, kpọọ ya nke ọma", bullets: ["Nkụ kpọrọ nkụ, dị mkpa", "Kpuchie ite; tinye agwa na ọka na mmiri", "Menyụọ ọkụ mgbe nri siri"] },
            { title: "Chebe ụmụaka", bullets: ["Mee ka ha ghara ịnọ na kichin jupụtara n'anwụrụ ọkụ", "Onye ọzọ jide nwa ọhụrụ", "Esula plastik ma ọ bụ rọba ọkụ mgbe ọ bụla"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Họrọ nzọụkwụ atọ site na nkuzi a ị nwere ike ịmalite n'izu a n'enweghị ego ma ọ bụ na obere ego. Dee ha, nwaa ha ụbọchị atọ, ma dee ihe gbanwere (obere anwụrụ ọkụ, obere nkụ, obere oge).",
          youCanNow: "ibelata anwụrụ ọkụ na kichin gị site na nzọụkwụ na-efu obere ego ma ọ bụ ọ dịghị ego.",
          quickCheck: [
            { objective: "O2", q: "Kedu nkụ na-eme anwụrụ ọkụ kacha nta?", options: ["Nkụ mmiri, nke ka dị ndụ", "Nnukwu osisi a tinyere otu mgbe", "Osisi e tere agba site n'ụzọ ochie", "Mpekere nkụ kpọrọ nkụ, dị mkpa, a na-etinye nwayọọ nwayọọ"], answer: 3, why: "Nkụ kpọrọ nkụ, dị mkpa, na-ere ọkụ nke ọma ma na-eme obere anwụrụ ọkụ." },
            { objective: "O2", q: "Kedu nzọụkwụ na-ebelata anwụrụ ọkụ na mmanụ ọkụ n'otu oge?", options: ["Isi nri na ite a kpuchiri akpuchi", "Ịhapụ ọkụ ka ọ na-enwu mgbe i siri nri", "Imechi windo", "Ịkpọ plastik ọkụ iji mụnye ọkụ"], answer: 0, why: "Mkpuchi na-eme ka nri sie ngwa ngwa, ya mere ị na-eji obere mmanụ ọkụ ma na-eme obere anwụrụ ọkụ." }
          ]
        },
        {
          title: "Ịnọ na nchebe n'ọkụ, unyi, gas na kerosene",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gbasoo iwu nchebe na-egbochi ọkụ ịgba mmadụ, nsị carbon monoxide, ọkụ gas na nsị kerosene.",
          text: [
            "Ọkụ ịgba mmadụ: mee ka stov guzosie ike, ọ bụrụ na ị nwere ike, welie ya elu n'ala ma tinye ihe mgbochi gburugburu ọkụ ghere oghe. Tụgharịa aka ite n'ime. Mee ka ụmụaka nọrọ ebe dị anya site n'ebe a na-esi nri. Ọ bụrụ na ọkụ gbara mmadụ, enyemaka mbụ WHO bụ: kwụsị ọkụ ahụ, jiri mmiri oyi na-asọ asọ mee ka ebe ahụ jụọ oyi (ihe dị ka nkeji 20 maka obere ọkụ), wepụ mgbanaka na uwe siri ike, ma jiri akwa dị ọcha kpuchie ya. Etinyela bọta, mmanụ, ihe e ji asa ezé ma ọ bụ ihe ọgwụ ọdịnala n'ebe ahụ. Gaa ụlọ ọgwụ maka nnukwu ọkụ ma ọ bụ nke miri emi, ma ọ bụ ọkụ gbara ihu, aka, ụkwụ ma ọ bụ akụkụ nzuzo.",
            "Unyi: stov unyi na-enwu na-ewepụta carbon monoxide, gas ị na-adịghị ahụ anya ma ọ bụ nụ isi ya nke nwere ike igbu mmadụ. Ewebatala stov unyi na-enwu n'ime ụlọ mechiri emechi iji sie nri ma ọ bụ kpoo ụlọ ọkụ, arakwala ụra mgbe ọ nọ n'ime. Isi ọwụwa, isi ịgba gburugburu na ụra ịtụ gị nso stov ahụ bụ ihe ịdọ aka na ntị: mee ka onye ọ bụla pụọ n'ikuku dị ọcha.",
            "Gas (LPG): zụta silinda n'aka onye na-ere ahịa nwere ikike, mee ka silinda ahụ guzo ọtọ, ma lelee paịpụ (hose) na regulator. Ọ bụrụ na ị nụrụ isi gas: amụnyela ọkụ ma ọ bụ gbanye switch ọ bụla, mechie valvụ silinda ahụ, meghee ụzọ na windo, ma mee ka ndị mmadụ pụọ n'èzí. Mechie valvụ ahụ mgbe i siri nri.",
            "Kerosene: WHO na-adụ ọdụ ka a ghara iji kerosene esi nri ma ọ bụ mụnye ọkụ, ilo kerosene bụkwa otu n'ime ihe na-ebutekarị nsị n'ụmụaka. Debe ya n'ihe mkpuchi mechiri emechi nke e dere aha ya, ọ bụghị n'karama ihe ọṅụṅụ mgbe ọ bụla, ma debe ya ebe ụmụaka na-agaghị eru. Ọ bụrụ na nwatakịrị lodara ya, gaa ụlọ ọgwụ ugbu a."
          ],
          steps: ["Mee ka stov guzosie ike ma ụmụaka nọrọ anya; tụgharịa aka ite n'ime.", "Ejila unyi n'ime ụlọ mechiri emechi ma ọ bụ mgbe ị na-ehi ụra.", "Gas: onye ere ahịa nwere ikike, silinda guzo ọtọ, mechie valvụ mgbe i siri nri.", "Ị nụrụ isi gas: enweghị ọkụ ma ọ bụ switch, mechie valvụ, meghee, pụọ.", "Kerosene: ihe mkpuchi e dere aha, ọ bụghị karama ihe ọṅụṅụ, ebe ụmụaka na-agaghị eru."],
          words: [["Carbon monoxide", "gas nsị na-esi n'ihe a na-akpọ ọkụ; ị naghị ahụ ya anya ma ọ bụ nụ isi ya."], ["LPG", "liquefied petroleum gas: gas esi nri a na-ere na silinda."], ["Regulator", "akụkụ dị n'elu silinda gas na-achịkwa gas na-aga na stov."]],
          slides: [
            { title: "Ọkụ ịgba mmadụ", bullets: ["Stov guzosiri ike, aka ite n'ime, ụmụaka nọrọ anya", "Enyemaka mbụ: mmiri oyi na-asọ asọ ihe dị ka nkeji 20, akwa dị ọcha", "Enweghị bọta, mmanụ ma ọ bụ ihe ọgwụ; nnukwu ọkụ gaa ụlọ ọgwụ"] },
            { title: "Unyi", bullets: ["Ọ na-ewepụta carbon monoxide: enweghị agba, enweghị isi", "Ọ bụghị n'ime ụlọ mechiri emechi; ọ bụghị mgbe ị na-ehi ụra", "Isi ọwụwa ma ọ bụ isi ịgba nso ya: pụọ n'ikuku dị ọcha"] },
            { title: "Gas (LPG)", bullets: ["Onye ere ahịa nwere ikike; silinda guzo ọtọ", "Isi gas: enweghị ọkụ ma ọ bụ switch, mechie valvụ, meghee, pụọ", "Mechie valvụ mgbe i siri nri"] },
            { title: "Kerosene", bullets: ["WHO na-adụ ọdụ ka a ghara iji ya", "Ihe mkpuchi e dere aha, ọ bụghị karama ihe ọṅụṅụ", "Nwatakịrị lodara ya: ụlọ ọgwụ ugbu a"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Gagharịa na kichin gị ma dee iwu nchebe ise maka ụlọ gị: otu maka ọkụ ịgba mmadụ na ụmụaka, otu maka unyi, otu maka gas ma ọ bụ kerosene (nke ị na-eji), otu maka idebe mmanụ ọkụ, na otu maka ihe ime mgbe ihe mberede mere, gụnyere ụlọ ọgwụ kacha nso.",
          youCanNow: "isi nri n'enweghị nsogbu n'ọkụ, unyi, gas na kerosene ma mee ihe ngwa ngwa ma ọ bụrụ na ihe emehie.",
          quickCheck: [
            { objective: "O3", q: "Oyi na-atụ n'abalị na Ouagadougou. Ọ dị mma iwebata stov unyi na-enwu n'ime ime ụlọ mechiri emechi?", options: ["Ee, ma ọ bụrụ na e mechiri ụzọ", "Ee, ma ọ bụrụ na unyi ahụ dị mma", "Ee, ma ọ bụrụ na ị na-ehi ụra anya na ya", "Mba: ọ na-ewepụta carbon monoxide, nke nwere ike igbu mmadụ"], answer: 3, why: "Carbon monoxide na-ejupụta n'ime ụlọ mechiri emechi ma nwee ike igbu ndị na-ehi ụra." },
            { objective: "O3", q: "Ị nụrụ isi gas na kichin. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Mụnye ọkụ iji chọta ebe ọ na-agbapụ", "Mechie valvụ ma meghee ụzọ na windo", "Gbanye ọkụ eletrik", "Leghara ya anya"], answer: 1, why: "Enweghị ọkụ ma ọ bụ switch; mechie gas ma kwe ka ọ pụọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Anwụrụ ọkụ na nchebe na kichin",
        questions: [
          { objective: "O1", q: "Kedu ọrịa ndị okenye WHO jikọtara na mmetọ ikuku n'ụlọ?", options: ["Strok na ọrịa obi", "Iba (malaria)", "Typhoid", "Ọkpụkpụ gbajiri agbaji"], answer: 0, why: "WHO depụtara strok, ọrịa obi, ọrịa akpa ume na kansa akpa ume." },
          { objective: "O1", q: "Gịnị ọzọ, ewezuga anwụrụ ọkụ, na-eme ụmụ agbọghọ ka ha tụfuo ihe n'isi nri na nkụ?", options: ["Ha na-enweta ego karịa", "Ha na-atụfu oge n'ịchịkọta nkụ, nke nwere ike ime ka ha tụfuo akwụkwọ", "Ha na-ehi ụra karịa", "Ọ naghị emetụta ha"], answer: 1, why: "Ịchịkọta mmanụ ọkụ na-ewe oge akwụkwọ na ọrụ." },
          { objective: "O2", q: "Kedu nzọụkwụ na-ebelata anwụrụ ọkụ na kichin taa?", options: ["Imechi windo niile", "Iji nkụ mmiri", "Isi nri n'èzí ma ọ bụ imeghe ụzọ na windo", "Ịkpọ plastik ochie ọkụ"], answer: 2, why: "Ikuku ịbanye na ịpụ na-ekwe ka anwụrụ ọkụ pụọ." },
          { objective: "O3", q: "Ofe na-ekpo ọkụ gbara otu nwatakịrị na Yaoundé. Kedu ezi enyemaka mbụ?", options: ["Tinye bọta na ya", "Jiri ihe e ji asa ezé kpuchie ya", "Gbawaa afụ ya", "Jiri mmiri oyi na-asọ asọ mee ka ọ jụọ oyi ma jiri akwa dị ọcha kpuchie ya"], answer: 3, why: "Enyemaka mbụ WHO bụ mmiri oyi na-asọ asọ na mkpuchi dị ọcha; enweghị bọta ma ọ bụ ihe ọgwụ." },
          { objective: "O3", q: "Ebee ka e kwesịrị idebe kerosene?", options: ["N'ihe mkpuchi mechiri emechi, e dere aha ya, ebe ụmụaka na-agaghị eru", "N'ime karama soda ochie", "N'ala n'akụkụ akwa ndina", "N'iko dị n'elu tebụl"], answer: 0, why: "Ụmụaka na-aṅụ kerosene site na karama na iko; ọ bụ otu n'ime ihe na-ebutekarị nsị n'ụmụaka." }
        ]
      }
    },
    {
      name: "Isi 2: Ịgbanwe gaa n'isi nri n'ụzọ dị ọcha",
      lessons: [
        {
          title: "Stov na mmanụ ọkụ dị ọcha",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tụnyere stov na mmanụ ọkụ dị ọcha site n'anwụrụ ọkụ, ego, ịdị mmanụ ọkụ ahụ na nchebe.",
          text: [
            "WHO depụtara nhọrọ kacha dị ọcha: anyanwụ (solar), ọkụ eletrik, biogas, LPG (gas esi nri), gas sitere n'okike (natural gas), mmanụ ọkụ mmanya dị ka ethanol, na stov nkụ na-agbaso ọkwa anwụrụ ọkụ WHO kpebiri. WHO na-adụ ọdụ ka a ghara iji kerosene na coal a na-edozighị edozi.",
            "Stov nkụ ma ọ bụ unyi ka mma (a na-akpọkwa ha improved cookstoves) na-eji obere mmanụ ọkụ ma na-eme obere anwụrụ ọkụ karịa ekwu nkume atọ ma ọ bụ ọkụ ghere oghe. Ha bụ nzọụkwụ n'ihu, mana ọtụtụ n'ime ha ka na-eme ọtụtụ anwụrụ ọkụ, ya mere mee ka ikuku na-abanye na kichin nke ọma. Jụọ onye na-ere ya ma a nwalela ụdị ahụ.",
            "Isi nri na gas (LPG) na ọkụ eletrik fọrọ nke nta ka ọ ghara ime anwụrụ ọkụ na kichin. Ite ọkụ eletrik (electric pressure cooker) ma ọ bụ hot plate nwere ike ịdị ọnụ ala iji mgbe ọkụ eletrik na-adịgide, ọ dịkwa mma maka agwa na ofe. Biogas dabara ugbo nwere ehi na ohere maka tank (digester). Ihe esi nri na-echekwa okpomọkụ (nkata ma ọ bụ igbe e kpuchiri nke ọma) na-emecha isi nri n'enweghị mmanụ ọkụ ọzọ, ọ na-arụkwa ọrụ na stov ọ bụla.",
            "Họrọ ihe dabara ebe ị nọ: A na-ere mmanụ ọkụ ahụ nso gị afọ niile? Ị nwere ike ịkwụ ụgwọ ijupụta ya ọzọ? Ọ dị nchebe maka ụlọ gị? N'ọtụtụ obodo mepere emepe, gas ma ọ bụ ọkụ eletrik nwere ike ịdaba; n'ime obodo dị anya site n'ebe a na-ere ya, stov ka mma na ikuku ịbanye nke ọma nwere ike ịbụ nzọụkwụ mbụ."
          ],
          steps: ["Depụta stov na mmanụ ọkụ a na-ere nso gị.", "Maka nke ọ bụla, dee anwụrụ ọkụ ya (ọtụtụ, ụfọdụ, fọrọ nke nta ka ọ dịghị).", "Dee ịdị mmanụ ọkụ ahụ: mgbe niile, mgbe ụfọdụ, ọ dịghị adịkarị.", "Dee ihe nchebe ọ chọrọ na ego mbụ na ego ọ na-efu kwa ọnwa.", "Họrọ nhọrọ kacha dị ọcha ị nwere ike inweta ma kwụọ ụgwọ ya."],
          words: [["Stov ka mma (improved cookstove)", "stov nkụ ma ọ bụ unyi e mere ka ọ na-eji obere mmanụ ọkụ ma na-eme obere anwụrụ ọkụ karịa ọkụ ghere oghe."], ["Biogas", "gas e mere site na nsị anụmanụ na ahịhịa n'ime tank mechiri emechi a na-akpọ digester."], ["Ihe esi nri na-echekwa okpomọkụ (retained-heat cooker)", "nkata ma ọ bụ igbe e kpuchiri nke ọma nke na-eme ka ite na-ekpo ọkụ gaa n'ihu na-esi nri n'enweghị mmanụ ọkụ ọzọ."]],
          slides: [
            { title: "Nhọrọ kacha dị ọcha (WHO)", bullets: ["Anyanwụ, ọkụ eletrik, biogas, LPG, natural gas, ethanol", "Stov nkụ na-agbaso ọkwa anwụrụ ọkụ WHO", "WHO na-adụ ọdụ ka a ghara iji kerosene na coal"] },
            { title: "Stov nkụ na unyi ka mma", bullets: ["Obere mmanụ ọkụ na obere anwụrụ ọkụ karịa ọkụ ghere oghe", "Ọ ka na-eme anwụrụ ọkụ: kwe ka ikuku banye", "Jụọ ma a nwalela ụdị ahụ"] },
            { title: "Gas na ọkụ eletrik", bullets: ["Fọrọ nke nta ka ọ ghara ime anwụrụ ọkụ na kichin", "Electric pressure cooker: dị mma maka agwa na ofe", "Ihe na-echekwa okpomọkụ na-echekwa mmanụ ọkụ na stov ọ bụla"] },
            { title: "Họrọ ihe dabara", bullets: ["A na-ere mmanụ ọkụ ahụ nso gị afọ niile?", "Ị nwere ike ịkwụ ụgwọ ijupụta ya ọzọ?", "Ọ dị nchebe maka ụlọ gị?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Jụọ n'ahịa dị nso gị, n'ụlọ ahịa ma ọ bụ n'aka onye na-ere gas, stov na mmanụ ọkụ a na-ere nso gị. Mee obere tebụl nke nhọrọ abụọ ma ọ bụ atọ nwere kọlụm anọ: anwụrụ ọkụ, ịdị mmanụ ọkụ ahụ, ihe nchebe ọ chọrọ na ego (jiri ezi ọnụ ahịa a gwara gị).",
          youCanNow: "ịtụnyere stov na mmanụ ọkụ dị ọcha site n'anwụrụ ọkụ, ego, ịdị mmanụ ọkụ ahụ na nchebe, ma họrọ otu dabara gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu n'ime ndị a ka WHO depụtara dị ka mmanụ ọkụ dị ọcha esi nri?", options: ["Kerosene", "Coal a na-edozighị edozi", "LPG (gas esi nri)", "Ihe mkpofu plastik"], answer: 2, why: "WHO depụtara LPG, ọkụ eletrik, biogas, anyanwụ na ethanol n'ime mmanụ ọkụ dị ọcha." },
            { objective: "O4", q: "Otu ezinụlọ n'ime obodo dị anya site n'onye ọ bụla na-ere gas chọrọ obere anwụrụ ọkụ ugbu a. Gịnị bụ nzọụkwụ mbụ nwere uche?", options: ["Stov ka mma na ikuku ịbanye nke ọma", "Zụta silinda gas ha na-agaghị enwe ike ijupụta ọzọ", "Gbanwee gaa na kerosene", "Sie nri n'ime ụlọ na windo mechiri emechi"], answer: 0, why: "Stov ka mma na ikuku ịbanye na-ebelata anwụrụ ọkụ ebe mmanụ ọkụ dị ọcha erubeghị." }
          ]
        },
        {
          title: "Ịgụta ego na ịkwụ ụgwọ maka mgbanwe",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gụta ego mmanụ ọkụ gị kwa ọnwa ma tụnyere ya na ego nhọrọ dị ọcha ga-efu.",
          text: [
            "Ọtụtụ ezinụlọ na-eche na isi nri n'ụzọ dị ọcha dị oke ọnụ, mana ha anaghị agụta ego ha na-emefu ugbu a. Dee ego ị na-emefu na nkụ, unyi ma ọ bụ kerosene n'izu nkịtị, ma mụbaa ya na 4 iji nweta ego kwa ọnwa n'ihe dị ka. Ọ bụrụ na ị na-achịkọta nkụ, gụtakwa awa ị na-eji.",
            "Maka nhọrọ dị ọcha, gụta ego abụọ: ego mbụ (stov, silinda na regulator) na ego ọ na-efu kwa ọnwa (ijupụta gas ma ọ bụ ọkụ eletrik kwa ọnwa). Tụnyere ego ọ na-efu kwa ọnwa na ihe ị na-emefu ugbu a, ma gụta ọnwa ole ọ ga-ewe ka ego ị na-echekwa kwụghachi ego mbụ ahụ.",
            "Ọmụmaatụ na nọmba e chepụtara, ọ bụghị ezi ọnụ ahịa: otu ezinụlọ na Kisumu na-emefu KES 300 kwa izu na unyi, ihe dị ka KES 1,200 kwa ọnwa. Nhọrọ dị ọcha na-efu KES 900 kwa ọnwa iji ya na KES 3,600 dị ka ego mbụ. Ha na-echekwa KES 300 kwa ọnwa, ya mere a ga-akwụghachi ego mbụ ahụ n'ime ọnwa 12 (3,600 kewara na 300). Jiri ọnụ ahịa nke gị.",
            "Ụzọ ịkwụ ụgwọ: chekwaa obere ego kwa izu, zụkọta ọnụ site n'otu nchekwa ego dị ka chama, tontine ma ọ bụ esusu (isusu), ma ọ bụ jụọ maka atụmatụ gas ma ọ bụ stov pay-as-you-go dị ebe ị bi. Tupu ị bịanye aka, jụọ ọnụ ahịa zuru ezu, ihe ga-eme ma ọ bụrụ na ị kwụghị ụgwọ otu oge, na onye ga-arụzi ya. Akwụla onye ị na-amaghị ego maka stov n'efu o kwere nkwa, zụtakwa gas naanị n'aka ndị na-ere ahịa nwere ikike."
          ],
          steps: ["Dee ego mmanụ ọkụ gị kwa izu ma mụbaa ya na 4.", "Dee ego mbụ na ego kwa ọnwa nke nhọrọ dị ọcha.", "Wepụ iji chọta ego ị na-echekwa kwa ọnwa (ma ọ bụ ego ọzọ ọ ga-efu).", "Kewaa ego mbụ na ego ị na-echekwa kwa ọnwa iji chọta ọnwa ole a ga-eji kwụghachi ya.", "Họrọ otu ị ga-esi kwụọ ụgwọ ma lelee usoro ya."],
          words: [["Ego mbụ (upfront cost)", "ego ị na-akwụ otu mgbe na mmalite, dị ka maka stov."], ["Ego kwa ọnwa (running cost)", "ego ị na-akwụ ugboro ugboro, dị ka ijupụta mmanụ ọkụ."], ["Ịkwụghachi (pay back)", "oge ọ na-ewe ka ego ị na-echekwa kwụchaa ihe ị kwụrụ na mmalite."], ["Pay-as-you-go", "ịkwụ ụgwọ n'obere obere, ọtụtụ mgbe site na mobile money, ka ị na-eji mmanụ ọkụ ma ọ bụ stov ahụ."]],
          slides: [
            { title: "Gịnị ka ị na-emefu ugbu a?", bullets: ["Ego mmanụ ọkụ kwa izu x 4 = ego kwa ọnwa", "Gụtakwa awa ị na-eji achịkọta nkụ"] },
            { title: "Ego abụọ nke mgbanwe", bullets: ["Ego mbụ: stov, silinda, regulator", "Kwa ọnwa: ijupụta gas ma ọ bụ ọkụ eletrik kwa ọnwa"] },
            { title: "Ọmụmaatụ (nọmba e chepụtara)", bullets: ["Unyi KES 1,200 kwa ọnwa; nhọrọ dị ọcha KES 900", "Ego e chekwara KES 300 kwa ọnwa", "Ego mbụ KES 3,600 / 300 = ọnwa 12 iji kwụghachi ya"] },
            { title: "Ịkwụ ụgwọ n'enweghị nsogbu", bullets: ["Chekwaa kwa izu ma ọ bụ zụta site n'otu nchekwa ego gị", "Jụọ ọnụ ahịa zuru ezu na iwu mgbe ị kwụghị ụgwọ", "Enweghị ego maka \"stov n'efu\"; naanị ndị na-ere gas nwere ikike"] }
          ],
          tryIt: "Dee ego ezinụlọ gị na-emefu na mmanụ ọkụ esi nri n'izu nkịtị (n'ego obodo gị, dịka ọmụmaatụ NGN, GHS, XOF, XAF ma ọ bụ EGP) ma gụta nke ọnwa. Wee jiri ezi ọnụ ahịa ị chọtara na Nkuzi 4 gụta ego ị ga-echekwa kwa ọnwa na ọnwa ole ọ ga-ewe iji kwụghachi ego maka otu nhọrọ dị ọcha.",
          youCanNow: "ịgụta ego mmanụ ọkụ esi nri na-efu gị kwa ọnwa na ma nhọrọ dị ọcha ga-akwụghachi ego ya.",
          quickCheck: [
            { objective: "O5", q: "Naanị ọmụmaatụ: otu ezinụlọ na-emefu GHS 50 kwa izu na unyi. Ihe dị ka ole ka nke ahụ bụ kwa ọnwa?", options: ["GHS 50", "GHS 100", "GHS 500", "GHS 200"], answer: 3, why: "50 kwa izu mụbaa na izu 4 bụ ihe dị ka 200 kwa ọnwa." },
            { objective: "O5", q: "Otu nwoke kpọrọ gị n'ekwentị na-enye \"stov gọọmentị n'efu\" ma ọ bụrụ na i buru ụzọ zipu ego site na mobile money. Gịnị bụ nke a?", options: ["Ezigbo ahịa", "Ihe ịdọ aka na ntị nke aghụghọ; akwụla ụgwọ", "Ụtụ isi nkịtị", "Ego ndebe a chọrọ"], answer: 1, why: "Ịrịọ ego iji nweta ihe n'efu bụ ihe ịrịba ama aghụghọ a na-ahụkarị." }
          ]
        },
        {
          title: "Atụmatụ nchebe kichin na mgbanwe gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Dee atụmatụ nchebe kichin na mgbanwe nke ezinụlọ gị kwenyere na ya.",
          text: [
            "Atụmatụ na-eme ka ihe ị mụtara bụrụ omume. O nwere akụkụ isii: ihe ị na-eji esi nri ugbu a na ego ọ na-efu kwa ọnwa; nzọụkwụ atọ ga-ebelata anwụrụ ọkụ n'izu a; iwu nchebe gị; nhọrọ abụọ dị ọcha e tụnyere; nhọrọ gị, otu ị ga-esi kwụọ ụgwọ na ụbọchị ị ga-agbanwe; na ndị kwenyere.",
            "Gị na ezinụlọ gị niile kparịta ya. Onye na-akwụ ụgwọ na onye na-esi nri nwere ike ịhụ ihe n'ụzọ dị iche. Kesaa ihe anwụrụ ọkụ na-eme obi (akpa ume) ụmụaka, ego ị gụtara, na oge a ga-echekwa n'ịchịkọta nkụ. Jụọ onye ọ bụla ihe na-echegbu ya, dị ka egwu gas ma ọ bụ ụtọ nri, ma zaa ya.",
            "Ọ bụrụ na ị na-eme azụmahịa nri, dị ka chop bar na Kumasi, mama put na Lagos ma ọ bụ dibiterie na Dakar, tinye ndị ahịa gị na ndị ọrụ gị: obere anwụrụ ọkụ pụtara ebe dị ọcha na ndị ọrụ nwere ahụike ka mma, mmanụ ọkụ na-abụkarịkwa otu n'ime ego kacha ukwuu ị na-emefu.",
            "Kwụba atụmatụ ahụ na mgbidi. Mgbe otu ọnwa gachara, lelee: anwụrụ ọkụ ọ belatara, oleekwa ego mmanụ ọkụ fụrụ? Gbanwee atụmatụ ahụ ma ọ dị mkpa."
          ],
          steps: ["Dee akụkụ isii nke atụmatụ ahụ.", "Gị na ezinụlọ gị ma ọ bụ ndị ọrụ gị kparịta ya.", "Zaa ihe na-echegbu ha.", "Kwenye na nhọrọ ahụ, ịkwụ ụgwọ na ụbọchị mgbanwe.", "Lelee mgbe otu ọnwa gachara ma gbanwee ihe."],
          words: [["Atụmatụ mgbanwe", "atụmatụ e dere ede maka ịkwaga n'ụzọ isi nri dị ọcha ma dịkwuo nchebe."]],
          slides: [
            { title: "Akụkụ isii nke atụmatụ ahụ", bullets: ["Ugbu a: mmanụ ọkụ na ego kwa ọnwa", "Nzọụkwụ atọ ibelata anwụrụ ọkụ; iwu nchebe", "Nhọrọ abụọ e tụnyere; nhọrọ, ịkwụ ụgwọ, ụbọchị; ndị kwenyere"] },
            { title: "Kwenye na ya ọnụ", bullets: ["Onye na-esi nri na onye na-akwụ ụgwọ nwere ike ịdị iche", "Kesaa eziokwu gbasara ahụike, ego na oge", "Zaa ihe na-echegbu ha, dị ka egwu gas"] },
            { title: "Maka azụmahịa nri", bullets: ["Ebe dị ọcha, ndị ọrụ nwere ahụike ka mma", "Mmanụ ọkụ na-abụkarị nnukwu ego"] },
            { title: "Lelee mgbe otu ọnwa gachara", bullets: ["Anwụrụ ọkụ ọ belatara?", "Ole ka mmanụ ọkụ fụrụ?", "Gbanwee atụmatụ ahụ ma ọ dị mkpa"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nchebe kichin na mgbanwe gị nke ruru otu peeji nwere akụkụ isii ahụ niile. Gị na ezinụlọ gị ma ọ bụ ndị ọrụ gị kparịta ya ma dee aha ndị kwenyere.",
          youCanNow: "ide atụmatụ nchebe kichin na mgbanwe ma gị na ezinụlọ gị kwenye na ya.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke kwesịrị ịdị n'atụmatụ mgbanwe kichin?", options: ["Ụbọchị ịgbanwe na otu ị ga-esi kwụọ ụgwọ", "Naanị agba stov ahụ", "Ọ dịghị ihe gbasara nchebe", "Nkwa isi nri n'ime ụlọ na unyi"], answer: 0, why: "Atụmatụ ahụ chọrọ nhọrọ, atụmatụ ịkwụ ụgwọ na ụbọchị ka mgbanwe ahụ mee." },
            { objective: "O6", q: "Onye na-esi nri chọrọ gas, mana onye na-akwụ ụgwọ na-echegbu onwe ya maka ego. Gịnị na-enyere aka karịa?", options: ["Leghara nchegbu ahụ anya", "Zụta ya n'agwaghị ha", "Gosi ego mmanụ ọkụ kwa ọnwa ị gụtara na eziokwu gbasara ahụike", "Kwụsị"], answer: 2, why: "Ezi nọmba na eziokwu gbasara ahụike na-enyere ezinụlọ aka ikwenye." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịgbanwe gaa n'isi nri n'ụzọ dị ọcha",
        questions: [
          { objective: "O4", q: "Kedu nke fọrọ nke nta ka ọ ghara ime anwụrụ ọkụ na kichin?", options: ["Ekwu nkume atọ", "Stov kerosene", "Ọkụ ghere oghe", "Electric pressure cooker"], answer: 3, why: "Isi nri na ọkụ eletrik na gas fọrọ nke nta ka ọ ghara ime anwụrụ ọkụ na kichin." },
          { objective: "O4", q: "Gịnị ka ihe esi nri na-echekwa okpomọkụ na-eme?", options: ["Ọ na-eme gas site na nsị anụmanụ", "Ọ na-eme ka ite na-ekpo ọkụ gaa n'ihu na-esi nri n'enweghị mmanụ ọkụ ọzọ", "Ọ na-akpọ plastik ọkụ n'ụzọ dị ọcha", "Ọ na-achaji ekwentị"], answer: 1, why: "Mkpuchi na-echekwa okpomọkụ ka nri sie n'enweghị mmanụ ọkụ ọzọ." },
          { objective: "O5", q: "Naanị ọmụmaatụ: nhọrọ dị ọcha na-echekwa XAF 5,000 kwa ọnwa ma na-efu XAF 30,000 dị ka ego mbụ. Ọnwa ole iji kwụghachi ya?", options: ["Ọnwa 6", "Ọnwa 3", "Ọnwa 25", "Ọnwa 35"], answer: 0, why: "30,000 kewara na 5,000 bụ 6." },
          { objective: "O5", q: "Tupu ị bịanye aka n'atụmatụ stov pay-as-you-go, gịnị ka ị kwesịrị ịjụ?", options: ["Ọ dịghị ihe", "Naanị agba ya", "Ọnụ ahịa zuru ezu na ihe ga-eme ma ọ bụrụ na ị kwụghị ụgwọ otu oge", "Nri onye na-ere ahịa kacha amasị"], answer: 2, why: "Ego zuru ezu na iwu mgbe ị kwụghị ụgwọ na-egosi ezi ihe egwu ya." },
          { objective: "O6", q: "Mgbe ezinụlọ gbanwechara, gịnị ka ha kwesịrị ime?", options: ["Ha echekwala maka ya ọzọ", "Lelee mgbe otu ọnwa gachara maka anwụrụ ọkụ na ego, ma gbanwee ihe", "Laghachi na kerosene", "Tụfuo atụmatụ ahụ"], answer: 1, why: "Ilele na-egosi ma atụmatụ ahụ rụrụ ọrụ na ihe a ga-agbanwe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Isi Nri n'Ụzọ Dị Ọcha: Stov Dị Nchebe na Kichin Na-enweghị Anwụrụ Ọkụ",
    questions: [
      { objective: "O1", q: "Mmetọ ikuku n'ụlọ na-esikarị na:", options: ["Mpu ụgbọala", "Isi nri na mmanụ ọkụ na-emetọ ikuku na stov nkịtị", "Ekwentị", "Mmiri ọṅụṅụ"], answer: 1, why: "Anwụrụ ọkụ si na nkụ, unyi, nsị anụmanụ na kerosene bụ isi ihe na-ebute ya." },
      { objective: "O1", q: "Kedu nke bụ ihe ịrịba ama na ezinụlọ gị na-eku anwụrụ ọkụ karịrị akarị?", options: ["Anya na-agba na ụkwara mgbe ị na-esi nri", "Mgbidi ọcha dị ọcha", "Enweghị isi n'uwe", "Ikuku dị ọcha na kichin"], answer: 0, why: "Anya na-agba, ụkwara na mgbidi jiri oji bụ ihe ịrịba ama nke anwụrụ ọkụ dị ukwuu." },
      { objective: "O1", q: "Gịnị mere o ji dị ize ndụ isi nri n'ọkụ ghere oghe na nwa n'azụ gị?", options: ["Ike na-agwụ nwa ahụ", "Ọ dịghị ize ndụ", "Nwa ahụ na-eku ọtụtụ anwụrụ ọkụ", "Nri na-esi nwayọọ"], answer: 2, why: "Ụmụ ọhụrụ nọ nso ọkụ na-eku anwụrụ ọkụ ma nwee ike ibute ọrịa obi." },
      { objective: "O2", q: "Kedu nke na-ebelata anwụrụ ọkụ n'efu?", options: ["Imechi ụzọ", "Iji nkụ mmiri", "Ịkpọ rọba ọkụ", "Imeghe ụzọ na windo mgbe ị na-esi nri"], answer: 3, why: "Ikuku ịbanye na ịpụ na-ekwe ka anwụrụ ọkụ pụọ n'efu." },
      { objective: "O2", q: "Itinye agwa na mmiri tupu i sie ya na-enyere aka n'ihi na:", options: ["Ọ na-esi ngwa ngwa, na-eji obere mmanụ ọkụ ma na-eme obere anwụrụ ọkụ", "Ọ na-etinye nnu", "Ọ na-eme anwụrụ ọkụ karịa", "Ọ baghị uru"], answer: 0, why: "Isi nri obere oge pụtara obere mmanụ ọkụ na obere anwụrụ ọkụ." },
      { objective: "O2", q: "Kedu nke ị na-ekwesịghị ịkpọ ọkụ mgbe ọ bụla?", options: ["Nkụ kpọrọ nkụ", "Unyi n'ebe ghere oghe", "Plastik na rọba", "Ọkpọ ọka"], answer: 2, why: "Ịkpọ plastik na rọba ọkụ na-ewepụta anwụrụ ọkụ nsị." },
      { objective: "O3", q: "Carbon monoxide si n'unyi dị ize ndụ n'ihi na:", options: ["O nwere isi siri ike", "Ị naghị ahụ ya anya ma ọ bụ nụ isi ya, o nwekwara ike igbu mmadụ", "O nwere agba", "Ọ na-emetụta naanị osisi"], answer: 1, why: "Ọ naghị enye ịdọ aka na ntị, ya mere ndị mmadụ nwere ike ịṅụ nsị ya n'ime ụlọ mechiri emechi." },
      { objective: "O3", q: "Enyemaka mbụ WHO maka ọkụ ịgba mmadụ kwuru ka:", options: ["I tinye bọta na ya", "I jiri ice", "I gbawaa afụ ya", "I jiri mmiri oyi na-asọ asọ mee ka ọ jụọ oyi"], answer: 3, why: "Mmiri oyi na-asọ asọ ihe dị ka nkeji 20 bụ ndụmọdụ WHO maka obere ọkụ." },
      { objective: "O3", q: "Ọ bụrụ na ị nụrụ isi gas, ị KWESỊGHỊ:", options: ["Imeghe windo", "Imechi valvụ silinda", "Ịmụnye ọkụ ma ọ bụ ịgbanye switch", "Ime ka ndị mmadụ pụọ n'èzí"], answer: 2, why: "Ọkụ ma ọ bụ ntụpọ ọkụ nwere ike ime ka gas ahụ gbawaa." },
      { objective: "O3", q: "Otu nwatakịrị na Kano ṅụrụ kerosene site na karama soda. Ezinụlọ ahụ kwesịrị:", options: ["Ịga ụlọ ọgwụ ugbu a", "Ichere ma hụ", "Inye nwatakịrị ahụ mmanụ", "Ime ka nwatakịrị ahụ gbọọ agbọ"], answer: 0, why: "Nsị kerosene chọrọ nlekọta ugbu a; ụlọ ọgwụ na-ekpebi ọgwụgwọ." },
      { objective: "O4", q: "Kedu nke WHO na-adụ ọdụ ka a ghara iji esi nri?", options: ["LPG", "Ọkụ eletrik", "Kerosene", "Biogas"], answer: 2, why: "WHO na-adụ ọdụ ka a ghara iji kerosene na coal a na-edozighị edozi." },
      { objective: "O4", q: "Stov unyi ka mma:", options: ["Anaghị eme anwụrụ ọkụ ọ bụla", "Na-eji obere mmanụ ọkụ ma na-eme obere anwụrụ ọkụ, mana ọ ka chọrọ ikuku ịbanye", "Bụ otu ihe ahụ dị ka ọkụ ghere oghe", "Enwere ike iji ya n'ime ụlọ ihi ụra mechiri emechi"], answer: 1, why: "Stov ka mma na-enyere aka, mana ọtụtụ n'ime ha ka na-eme anwụrụ ọkụ na carbon monoxide." },
      { objective: "O4", q: "Biogas kacha dabara maka:", options: ["Ugbo nwere ehi na ohere maka digester", "Ụlọ obibi na-enweghị anụmanụ", "Ebe ire ahịa n'ahịa na-enweghị ohere", "Ụgbọala"], answer: 0, why: "A na-eme biogas site na nsị anụmanụ na ahịhịa n'ime digester." },
      { objective: "O4", q: "Tupu ị họrọ mmanụ ọkụ, ajụjụ kacha mkpa bụ:", options: ["Kedu agba stov ahụ?", "A na-ere ya nso m afọ niile, m nwekwara ike ịkwụ ụgwọ ijupụta ya ọzọ?", "Gịnị ka ndị agbata obi m na-eche maka aha ngwaahịa ahụ?", "Igbe ya ọ buru ibu?"], answer: 1, why: "Stov dị ọcha na-enyere aka naanị ma ọ bụrụ na ị nwere ike ịnọgide na-azụta mmanụ ọkụ ya." },
      { objective: "O5", q: "Iji chọta ego mmanụ ọkụ gị kwa ọnwa, ị nwere ike:", options: ["Ịkọ nkọ", "Ịmụba ego ị na-emefu kwa izu na 4", "Ikewa ya na 4", "Ịjụ onye ị na-amaghị"], answer: 1, why: "Ego kwa izu mụbaa na 4 na-enye ego kwa ọnwa n'ihe dị ka." },
      { objective: "O5", q: "Naanị ọmụmaatụ: ego e chekwara kwa ọnwa EGP 100, ego mbụ EGP 800. Ọnwa ole iji kwụghachi ya?", options: ["100", "900", "700", "8"], answer: 3, why: "800 kewara na 100 bụ 8." },
      { objective: "O5", q: "Ebee ka ị kwesịrị ịzụta silinda gas?", options: ["N'aka onye na-ere ahịa nwere ikike", "N'aka onye ọ bụla n'akụkụ ụzọ", "N'ụlọ ahịa ijupụta gas na-enweghị aha n'abalị", "N'aka onye ị na-amaghị n'ịntanetị chọrọ ka i buru ụzọ kwụọ ụgwọ"], answer: 0, why: "Ndị na-ere ahịa nwere ikike na-agbaso iwu nchebe maka silinda na ijupụta gas." },
      { objective: "O6", q: "Onye kwesịrị ikwenye n'atụmatụ mgbanwe kichin?", options: ["Naanị onye na-ere ahịa", "Ọ dịghị onye", "Ezinụlọ ahụ, gụnyere onye na-esi nri na onye na-akwụ ụgwọ", "Naanị ụmụaka"], answer: 2, why: "Onye ọ bụla ọ metụtara kwesịrị ikwenye ka atụmatụ ahụ rụọ ọrụ." },
      { objective: "O6", q: "Ezigbo atụmatụ mgbanwe gụnyere:", options: ["Enweghị ụbọchị", "Naanị aha ngwaahịa", "Ọ dịghị ihe gbasara nchebe", "Nhọrọ abụọ e tụnyere, nhọrọ, otu a ga-esi kwụọ ụgwọ na ụbọchị mgbanwe"], answer: 3, why: "Akụkụ ndị a na-eme ka atụmatụ ahụ doo anya ma bụrụ ihe a ga-eme." },
      { objective: "O6", q: "Otu nwaanyị na-ere nri na Dakar na-etinye kedu isi ihe ọzọ n'atụmatụ ya?", options: ["Obere anwụrụ ọkụ maka ndị ọrụ ya na ndị ahịa ya, na ego mmanụ ọkụ ya", "Agba efere", "Ọ dịghị ihe", "Kerosene ọzọ"], answer: 0, why: "Maka azụmahịa, ahụike ndị ọrụ na ego mmanụ ọkụ dị mkpa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ihe mere o ji dị mkpa", objective: "O1", notYet: "Enweghị ihe gbasara ahụike e kwuru, ma ọ bụ ihe e kwuru ezighi ezi.", meets: "Na-akpọ aha opekata mpe mmerụ ahụike atọ nke anwụrụ ọkụ na onye n'ụlọ na-eku ya karịa.", exceeds: "Na-akpọkwa aha oge a na-atụfu n'ịchịkọta mmanụ ọkụ na ndị ọ na-emetụta." },
      { name: "Anwụrụ ọkụ e belatara n'izu a", objective: "O2", notYet: "Nzọụkwụ erughị atọ, ma ọ bụ nzọụkwụ na-efu nnukwu ego.", meets: "Nzọụkwụ atọ na-efu obere ego ma ọ bụ ọ dịghị ego, dị ka ikuku ịbanye, nkụ kpọrọ nkụ na mkpuchi ite.", exceeds: "A nwalela nzọụkwụ ndị ahụ, e dekwara ihe gbanwere." },
      { name: "Iwu nchebe", objective: "O3", notYet: "Iwu maka mmanụ ọkụ a na-eji adịghị, ma ọ bụ iwu na-adịghị nchebe.", meets: "Iwu doro anya maka ọkụ ịgba mmadụ na ụmụaka na maka mmanụ ọkụ ezinụlọ ahụ na-eji, gụnyere ụlọ ọgwụ kacha nso.", exceeds: "Gụnyere nzọụkwụ mgbe gas na-agbapụ ma ọ bụ iwu carbon monoxide nke unyi, na idebe mmanụ ọkụ." },
      { name: "Nhọrọ e tụnyere", objective: "O4", notYet: "Naanị otu nhọrọ, ma ọ bụ enweghị ntụnyere.", meets: "Nhọrọ abụọ e tụnyere site n'anwụrụ ọkụ, ịdị mmanụ ọkụ ahụ, nchebe na ego, na ezi ihe kpatara nhọrọ ahụ.", exceeds: "Ọnụ ahịa sitere n'ezi ndị na-ere ahịa ebe ahụ, e lelekwara ịdị mmanụ ọkụ ahụ." },
      { name: "Ego na ịkwụ ụgwọ", objective: "O5", notYet: "Enweghị ego kwa ọnwa, ma ọ bụ mgbakọ ezighi ezi.", meets: "Ego mmanụ ọkụ kwa ọnwa ugbu a, ego nhọrọ dị ọcha na ụzọ ịkwụ ụgwọ, na mgbakọ ziri ezi.", exceeds: "Na-egosi ọnwa ole iji kwụghachi ego ma kpọọ aha ajụjụ a ga-ajụ tupu ịbịanye aka." },
      { name: "Atụmatụ e kwenyere na ya", objective: "O6", notYet: "Enweghị ụbọchị mgbanwe, ma ọ bụ ọ dịghị onye ọzọ hụrụ ya.", meets: "E dejupụtara akụkụ isii niile, na ụbọchị mgbanwe na aha ndị kwenyere.", exceeds: "Gụnyere ilele anwụrụ ọkụ na ego mgbe otu ọnwa gachara." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ezinụlọ na-akọ na ha ka na-eji opekata mpe nzọụkwụ atọ ibelata anwụrụ ọkụ ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Ezinụlọ na-akọ na ha anaghị eji stov unyi n'ime ụlọ mechiri emechi ma na-edebe kerosene n'enweghị nsogbu",
      "Ezinụlọ ma ọ bụ azụmahịa nri gbanwere gaa na stov ma ọ bụ mmanụ ọkụ dị ọcha n'ime ọnwa 6",
      "Ndị na-amụ ihe na-akọ na ha na-emefu obere ego ma ọ bụ oge na mmanụ ọkụ esi nri"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nkịtị nwere igwe mgbakọ, ma ọ bụ akwụkwọ na mkpịsị ode",
      "Ọnụ ahịa stov na mmanụ ọkụ ebe ahụ, nke onye na-amụ ihe ma ọ bụ onye nkuzi chịkọtara",
      "Ọ bụrụ na o kwere omume, stov ka mma, stov gas ma ọ bụ nkata na-echekwa okpomọkụ iji gosi otu ahụ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Ezigbo ndị mmekọ: otu ụmụnwaanyị, otu nchekwa ego, ụlọ akwụkwọ, ụlọ ọgwụ, ndị ọrụ ahụike obodo na azụmahịa isi nri dị ọcha ebe ahụ (akwadola otu aha ngwaahịa).",
      "Chịkọta ezi ọnụ ahịa stov na mmanụ ọkụ ebe ahụ tupu nnọkọ ahụ; ihe ọmụmụ a na-eji naanị nọmba ọmụmaatụ e chepụtara.",
      "Ngosi n'èzí na-arụ ọrụ nke ọma: tụnyere anwụrụ ọkụ nkụ mmiri na nke nkụ kpọrọ nkụ, ma ọ bụ nke ekwu nkume atọ na nke stov ka mma.",
      "Nchebe gas: gosi otu esi emechi valvụ na otu esi elele paịpụ; ejila ọkụ nwalee ebe gas na-agbapụ mgbe ọ bụla. Ekwela ka ndị na-amụ ihe rụọ ọrụ na waya ma ọ bụ paịpụ gas.",
      "Ọkụ ịgba mmadụ na nsị: kuzie enyemaka mbụ site na WHO ma ziga ndị na-amụ ihe n'ụlọ ọgwụ; enyela ndụmọdụ ọgwụgwọ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
