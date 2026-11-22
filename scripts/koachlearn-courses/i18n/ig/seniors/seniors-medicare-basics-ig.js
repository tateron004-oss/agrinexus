"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-medicare-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-medicare-basics-ig",
  lang: "ig",
  translationOf: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Ihe Ndabere Medicare",
  skills: "Ịmata Part A, B, C na D, Ịtụnyere Original Medicare na Medicare Advantage, Ichebe nọmba Medicare gị, Ịchọta oge ndebanye aha gị, Ilele atụmatụ gị kwa oge mgbụsị akwụkwọ, Inweta enyemaka n'efu site na SHIP",
  outcome: "ịkọwa ihe Part A, B, C na D na-ekpuchi, ịchọpụta oge ndebanye aha nke gị, ịdepụta ihe ị chọrọ iji tụnyere atụmatụ, na inweta enyemaka n'efu, nke na-adịghị ele mmadụ anya n'ihu, site na State Health Insurance Assistance Program (SHIP) nke steeti gị ma ọ bụ 1-800-MEDICARE.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-eru afọ 65, ndị nọworị na Medicare ma ọ na-agbagwoju ha anya, na ndị ezinụlọ na-enyere nne, nna, nne nne ma ọ bụ nna nna aka n'ihe gbasara mkpuchi ahụike (health insurance).",
    "Ị ga-amụta ihe akụkụ ọ bụla nke Medicare na-ekpuchi, ọdịiche dị n'etiti Original Medicare na Medicare Advantage, mgbe ị nwere ike idebanye aha ma ọ bụ ime mgbanwe, otu esi echebe nọmba Medicare gị pụọ n'aka ndị aghụghọ, na ebe ị ga-esi nweta enyemaka n'efu site n'ezi mmadụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Iwu, ụbọchị na ego Medicare na-agbanwe. Lelee ha mgbe niile na medicare.gov, site n'ịkpọ 1-800-MEDICARE, ma ọ bụ n'aka onye ndụmọdụ SHIP dị nso gị, ma jụọ dọkịta gị ma ọ bụ onye na-ere ọgwụ (pharmacist) maka nlekọta ahụike nke gị."
  ],
  finalTask: "Mee atụmatụ Medicare nke otu peeji: oge ndebanye aha gị (ọnwa Initial Enrollment Period gị, ma ọ bụ ụbọchị Open Enrollment nke afọ a ma ọ bụrụ na ị nweworị Medicare), akụkụ ndị ị nwere ma ọ bụ chọrọ, ndepụta ndị dọkịta gị, ọgwụ gị na ebe ị na-azụ ọgwụ (pharmacy), ajụjụ atọ ị chọrọ ka a zaa, na enyemaka n'efu ị ga-eji (SHIP dị nso gị, medicare.gov na 1-800-MEDICARE). Wee kpọtụrụ SHIP gị ma ọ bụ jiri ngwa ntụnyere atụmatụ dị na medicare.gov.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị bi na United States (America) na-eru afọ 65 ma ọ bụ nọworị na Medicare, na ndị ezinụlọ na-enyere ha aka. Ọtụtụ n'ime ha na-enwe mgbagwoju anya n'ihi akụkụ dị iche iche, ụbọchị njedebe, na ọtụtụ oku na mgbasa ozi ndị na-ere ihe na-abịa kwa oge mgbụsị akwụkwọ.",
    startingPoint: "Ha maara na Medicare dị, ụfọdụ nwekwara kaadị ya. Ọtụtụ enweghị ike ịkọwa Part A ruo D, amaghị oge ndebanye aha nke ha, ejibeghị ngwa ntụnyere atụmatụ dị na medicare.gov, anụbeghịkwa maka SHIP.",
    gap: "Ịhapụ oge ndebanye aha nwere ike ịpụta ntaramahụhụ ịbịa n'azụ nke ga-adịru ndụ niile, atụmatụ na-ezighi ezi nwekwara ike ịhapụ ndị dọkịta ma ọ bụ ọgwụ mmadụ. Ịmata akụkụ ndị ahụ, ụbọchị nke onwe gị, otu esi atụnyere atụmatụ na ebe a ga-esi nweta enyemaka n'efu, nke na-adịghị ele mmadụ anya n'ihu, na-echebe ahụike na ego ha, ma na-eme ka ha zere aghụghọ Medicare.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ, na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: ekwentị maka ịkpọ oku, na kọmputa ma ọ bụ tablet maka medicare.gov ma ọ bụrụ na o nwere",
      "Oge: ihe dị ka nkeji 5 kwa nkuzi, na-aga nwayọọ",
      "Ego na ụfọdụ iwu na-agbanwe kwa afọ; ndị na-amụ ihe na-elele medicare.gov, ssa.gov ma ọ bụ SHIP maka ego nke ugbu a",
      "Ihe ọmụmụ a anaghị atụ aro atụmatụ ọ bụla; a naghị ede nọmba Medicare n'ime AI mgbe ọ bụla, a naghịkwa enye ya ndị kpọrọ oku"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị akụkụ anọ nke Medicare", action: "ịkọwa ihe Part A, B, C na D na-ekpuchi, na ụzọ abụọ bụ isi isi nweta mkpuchi", standard: "ma nweta opekata mpe ajụjụ 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Mgbe mmadụ rịọrọ nọmba Medicare gị ma ọ bụ akwụkwọ nkọwa gosiri nlekọta ị nwetaghị", action: "ịmata aghụghọ Medicare ma kọọ ya na 1-800-MEDICARE", standard: "na-ekesa nọmba gị naanị na ndị dọkịta gị, pharmacy gị na atụmatụ gị" },
    { id: "O3", condition: "Mgbe e nyere gị ọnwa ị ga-eru afọ 65 na mkpuchi ọrụ gị", action: "ịchọpụta Initial Enrollment Period gị na ma Special Enrollment Period nwere ike ịdị maka gị", standard: "na ọnwa mmalite na ọnwa njedebe ziri ezi, nke e lelere na ssa.gov, medicare.gov ma ọ bụ SHIP" },
    { id: "O4", condition: "Mgbe e nyere gị ndị dọkịta gị, ọgwụ gị na pharmacy gị", action: "ịtụnyere atụmatụ na medicare.gov ma ọ bụ site na SHIP n'oge Open Enrollment", standard: "na-ele ego niile nke afọ ma na-elele na ndị dọkịta gị nọ na netwọk ahụ" },
    { id: "O5", condition: "Mgbe ị nwere ajụjụ Medicare", action: "ịkpọtụrụ SHIP dị nso gị ma ọ bụ 1-800-MEDICARE na ajụjụ gị na ndepụta gị dị njikere", standard: "na-ede ụbọchị, aha onye ahụ na azịza ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Akụkụ nke Medicare",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ndị Medicare dịịrị, na Part A na B",
          minutes: 5,
          goal: "Kwuo onye nwere ike inweta Medicare na ihe Part A na B na-ekpuchi.",
          text: [
            "Medicare bụ mkpuchi ahụike gọọmentị US maka ndị dị afọ 65 ma ọ bụ karịa, ndị na-erubeghị afọ 65 nwere ụfọdụ nkwarụ, na ndị afọ ọ bụla nwere End-Stage Renal Disease (akụrụ nwụrụ kpamkpam). Ọ bụ Centers for Medicare & Medicaid Services (CMS) na-elekọta ya.",
            "Medicare nwere akụkụ, nke a na-akpọ aha site na mkpụrụ akwụkwọ. Part A bụ mkpuchi ụlọ ọgwụ. Ọ na-enyere aka kwụọ ụgwọ nlekọta mgbe a nabatara gị n'ụlọ ọgwụ (admitted), na hospice (nlekọta ndị na-anwụ anwụ) na ụfọdụ nlekọta ahụike n'ụlọ.",
            "Part B bụ mkpuchi ọgwụgwọ. Ọ na-enyere aka kwụọ ụgwọ ịhụ dọkịta, nlekọta outpatient (nlekọta ebe ị na-ala ụlọ n'otu ụbọchị ahụ), ọtụtụ nyocha (tests) na ọrụ mgbochi ọrịa dị ka ụfọdụ nyocha na ọgwụ mgbochi (shots).",
            "Part A na Part B ọnụ ka a na-akpọ Original Medicare. Ọtụtụ mmadụ anaghị akwụ premium kwa ọnwa maka Part A ma ọ bụrụ na ha ma ọ bụ di ma ọ bụ nwunye ha rụrụ ọrụ ma kwụọ ụtụ Medicare ogologo oge zuru ezu. Ọtụtụ mmadụ na-akwụ premium kwa ọnwa maka Part B. Premium na deductible na-agbanwe kwa afọ, ya mere chọọ ego nke afọ a na medicare.gov ma ọ bụ jụọ SHIP."
          ],
          words: [["Medicare", "mmemme mkpuchi ahụike gọọmentị US maka ndị dị afọ 65 na karịa na ụfọdụ ndị na-eto eto nwere nkwarụ."], ["Premium", "ego ị na-akwụ kwa ọnwa iji nwee mkpuchi."], ["Deductible", "ego ị na-akwụ maka nlekọta tupu mkpuchi amalite ịkwụ ụgwọ."], ["Outpatient", "nlekọta ebe ị na-ala ụlọ n'otu ụbọchị ahụ, dị ka ịhụ dọkịta."]],
          slides: [
            { title: "Ndị Medicare dịịrị", bullets: ["Ndị dị afọ 65 ma ọ bụ karịa", "Ụfọdụ ndị na-erubeghị 65 nwere nkwarụ", "Ndị akụrụ ha nwụrụ kpamkpam"] },
            { title: "Part A: mkpuchi ụlọ ọgwụ", bullets: ["Ịnọ n'ụlọ ọgwụ mgbe a nabatara gị", "Hospice na ụfọdụ nlekọta ahụike n'ụlọ"] },
            { title: "Part B: mkpuchi ọgwụgwọ", bullets: ["Ịhụ dọkịta na nlekọta outpatient", "Ọtụtụ nyocha na ọrụ mgbochi ọrịa"] },
            { title: "A + B = Original Medicare", bullets: ["Ọtụtụ anaghị akwụ premium maka Part A", "Ọtụtụ na-akwụ premium kwa ọnwa maka Part B", "Ego nke afọ a: medicare.gov ma ọ bụ SHIP"] }
          ],
          sources: [{ name: "CMS: Medicare (Part A, B na D, onye ruru eru)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Dee ụdị nlekọta abụọ gị ma ọ bụ onye ezinụlọ gị nwetara n'afọ gara aga, dị ka ịnọ n'ụlọ ọgwụ, nyocha ahụ ma ọ bụ nyocha ọbara. N'akụkụ nke ọ bụla, dee ma ọ dabara na Part A ma ọ bụ Part B.",
          youCanNow: "ikwu ndị Medicare dịịrị ma kewaa nlekọta kwa ụbọchị n'ime Part A ma ọ bụ Part B.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ Original Medicare?", options: ["Part A na Part B ọnụ", "Naanị Part D", "Atụmatụ Medicare Advantage", "Mkpuchi Medigap"], answer: 0, why: "Part A (ụlọ ọgwụ) na Part B (ọgwụgwọ) ọnụ ka a na-akpọ Original Medicare." },
            { objective: "O1", q: "A nabatara onye agbata obi gị n'ụlọ ọgwụ ụbọchị atọ. Kedu akụkụ na-enyere aka kwụọ ụgwọ ịnọ n'ụlọ ọgwụ?", options: ["Part D", "Part B", "Part A", "Ọ dịghị nke ọ bụla"], answer: 2, why: "Part A bụ mkpuchi ụlọ ọgwụ maka nlekọta mgbe a nabatara gị." }
          ]
        },
        {
          objectives: ["O1","O4"],
          title: "Part C na D: Medicare Advantage na atụmatụ ọgwụ",
          minutes: 5,
          goal: "Kọwaa ọdịiche dị n'etiti Original Medicare na atụmatụ Medicare Advantage, na ihe Part D na-ekpuchi.",
          text: [
            "Part C bụ Medicare Advantage. Ndị a bụ atụmatụ sitere n'ụlọ ọrụ mkpuchi nkeonwe nke Medicare kwadoro. Atụmatụ Medicare Advantage na-enye gị uru Part A na Part B gị niile n'otu atụmatụ, ọtụtụ n'ime ha na-ekpuchikwa ọgwụ. Ọtụtụ nwere netwọk: ndepụta ndị dọkịta na ụlọ ọgwụ a na-atụ anya ka i jiri.",
            "Part D bụ mkpuchi ọgwụ dọkịta dere (prescription). Onye ọ bụla nwere Medicare nwere ike inweta ya site n'atụmatụ nkeonwe nke Medicare kwadoro. Ndị nwere Original Medicare na-agbakwunyekarị atụmatụ ọgwụ Part D dị iche.",
            "Ya mere e nwere ụzọ abụọ bụ isi. Ụzọ nke mbụ: Original Medicare (A na B), ọtụtụ mgbe ya na atụmatụ ọgwụ Part D dị iche, ụfọdụ ndị na-azụkwa mkpuchi Medicare Supplement Insurance (Medigap) iji nyere aka n'ego Original Medicare anaghị akwụ. Ụzọ nke abụọ: atụmatụ Medicare Advantage (Part C) nke jikọtara A, B na ọtụtụ mgbe D.",
            "Ọ dịghị ụzọ ka mma maka onye ọ bụla. Ọ dabere na ndị dọkịta gị, ọgwụ gị, ebe ị bi na ebe ị na-aga, na ego gị. Nke ahụ bụ kpọmkwem ihe onye ndụmọdụ SHIP n'efu na-enyere gị aka ịtụnyere."
          ],
          words: [["Medicare Advantage (Part C)", "atụmatụ sitere n'ụlọ ọrụ nkeonwe, nke Medicare kwadoro, nke gụnyere Part A na Part B na ọtụtụ mgbe mkpuchi ọgwụ."], ["Part D", "mkpuchi ọgwụ prescription nke Medicare, nke a na-enye site n'atụmatụ nkeonwe."], ["Netwọk (network)", "ndị dọkịta, ụlọ ọgwụ na pharmacy atụmatụ na-arụkọ ọrụ."], ["Medigap", "Medicare Supplement Insurance: mkpuchi nkeonwe na-enyere aka kwụọ ego Original Medicare anaghị akwụ."]],
          slides: [
            { title: "Part C: Medicare Advantage", bullets: ["Atụmatụ nkeonwe nke Medicare kwadoro", "Gụnyere A na B, ọtụtụ gụnyere ọgwụ", "Ọtụtụ mgbe na-eji netwọk ndị dọkịta"] },
            { title: "Part D: ọgwụ prescription", bullets: ["Onye ọ bụla nwere Medicare nwere ike inweta ya", "Site n'atụmatụ nkeonwe", "A na-agbakwunyekarị ya na Original Medicare"] },
            { title: "Ụzọ abụọ bụ isi", bullets: ["Original Medicare + Part D (+ Medigap maka ụfọdụ)", "Ma ọ bụ atụmatụ Medicare Advantage"] },
            { title: "Kedu nke ka mma maka gị?", bullets: ["Ndị dọkịta gị na ọgwụ gị", "Ebe ị bi na ebe ị na-aga", "Ego gị: rịọ SHIP ka o nyere gị aka ịtụnyere"] }
          ],
          sources: [{ name: "CMS: atụmatụ Medicare Advantage na Part D", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "Depụta dọkịta ọ bụla ị na-ahụ na ọgwụ ọ bụla ị na-aṅụ, ya na ọnụọgụ (dose) ya, na pharmacy ị na-eji. Ọ bụrụ na ị chọrọ, rịọ onye ezinụlọ ka o nyere gị aka. Debe ndepụta a: ọ bụ ya ka ị chọrọ iji tụnyere atụmatụ.",
          youCanNow: "ịkọwa Part C na D, ịkọwa ụzọ abụọ bụ isi nke Medicare, na ime ndepụta ị chọrọ iji tụnyere atụmatụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ atụmatụ Part D?", options: ["Mkpuchi ụlọ ọgwụ", "Mkpuchi ọgwụ prescription site n'atụmatụ nkeonwe nke Medicare kwadoro", "Atụmatụ ezé", "Ego ezumike nka gọọmentị"], answer: 1, why: "Part D bụ mkpuchi ọgwụ prescription site n'atụmatụ nkeonwe nke Medicare kwadoro." },
            { objective: "O1", q: "Enyi gị kwuru na otu ụzọ, Original Medicare ma ọ bụ Medicare Advantage, ka mma maka onye ọ bụla. Gịnị ka ị ga-ekwu?", options: ["Kwenye ma họrọ nke ahụ", "Họrọ mgbe niile nke premium ya dị ala", "Họrọ ihe ọ bụla onye na-ere ihe kpọrọ oku tụrụ aro", "Ọ dabere na ndị dọkịta gị, ọgwụ gị, ebe ị bi na ego gị"], answer: 3, why: "Ọ dịghị ụzọ ka mma maka onye ọ bụla; onye ndụmọdụ SHIP n'efu na-enyere gị aka ịtụnyere." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ichebe kaadị na nọmba Medicare gị",
          minutes: 4,
          goal: "Mata aghụghọ Medicare ma mara onye ị ga-agwa.",
          text: [
            "Kaadị Medicare gị na-acha uhie uhie, ọcha na anụnụ anụnụ nwere nọmba Medicare n'elu ya. Lekọta ya dị ka kaadị kredit. Gosi ya ndị dọkịta gị, pharmacy gị na atụmatụ gị, ma debe ya nke ọma.",
            "Ndị aghụghọ na-akpọ oku, na-ezipu ozi ederede ma ọ bụ na-akụ aka n'ọnụ ụzọ, na-eme ka a ga-asị na ha si Medicare. Ha nwere ike ịsị na ha ga-enye gị brace (ihe nkwado ahụ), ngwa nyocha ma ọ bụ kaadị ọhụrụ \"n'efu\", ma ọ bụ kwuo na uru gị ga-akwụsị ma ọ bụrụ na i nyeghị nọmba gị. Ezi onye nnọchi anya Medicare agaghị akpọ gị oku na mberede ịrịọ nọmba Medicare gị ma ọ bụ ozi ụlọ akụ gị.",
            "Lelee akwụkwọ nkọwa gị. Original Medicare na-ezipu Medicare Summary Notice, atụmatụ na-ezipukwa Explanation of Benefits. Chọọ nlekọta ị nwetaghị. Ọ bụrụ na ị hụ ihe na-ezighi ezi, ma ọ bụ onye kpọrọ oku rịọ nọmba gị, kọọ ya na 1-800-MEDICARE.",
            "Ọ bụrụ na nwa nwa gị ma ọ bụ enyi gị na-enyere gị aka n'ịntanetị, nọdụ ala n'akụkụ ha, jiri naanị ezi weebụsaịtị medicare.gov, ma edela nọmba Medicare gị mgbe ọ bụla n'ime chatbot ma ọ bụ weebụsaịtị i si na njikọ n'ozi ederede bịa."
          ],
          steps: ["Debe kaadị gị nke ọma ma kesaa nọmba ya naanị na ndị dọkịta gị, pharmacy gị na atụmatụ gị.", "Kwụsị oku na-atụghị anya na-arịọ nọmba gị.", "Gụọ Medicare Summary Notice ma ọ bụ Explanation of Benefits ọ bụla.", "Kọọ ihe ọ bụla na-ezighi ezi na 1-800-MEDICARE."],
          words: [["Medicare Summary Notice", "akwụkwọ nkọwa sitere na Original Medicare nke na-edepụta nlekọta e debere ụgwọ ya n'okpuru nọmba gị."], ["Explanation of Benefits", "akwụkwọ nkọwa sitere n'atụmatụ nke na-egosi ụgwọ e debere na ihe atụmatụ ahụ kwụrụ."], ["Aghụghọ (scam)", "wayo e ji ezu ego ma ọ bụ ozi nzuzo."]],
          slides: [
            { title: "Lekọta kaadị gị dị ka kaadị kredit", bullets: ["Gosi ya ndị dọkịta gị, pharmacy gị na atụmatụ gị", "Debe ya nke ọma"] },
            { title: "Ihe ịrịba ama nke aghụghọ", bullets: ["Brace, ngwa nyocha ma ọ bụ kaadị ọhụrụ \"n'efu\"", "\"Uru gị ga-akwụsị\"", "Oku na-atụghị anya na-arịọ nọmba gị"] },
            { title: "Lelee akwụkwọ nkọwa gị", bullets: ["Medicare Summary Notice ma ọ bụ Explanation of Benefits", "Chọọ nlekọta ị nwetaghị", "Kọọ nsogbu na 1-800-MEDICARE"] }
          ],
          sources: [{ name: "Medicare.gov: Kọọ aghụghọ (lelee nzọụkwụ nke ugbu a ebe a)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Chọta Medicare Summary Notice ma ọ bụ Explanation of Benefits gị kachasị ọhụrụ (ma ọ bụ rịọ onye ezinụlọ ka o nyere gị aka ịchọta ya). Lelee ahịrị atọ: ọ̀ bụ nlekọta i nwetara n'ezie ka nke ọ bụla bụ?",
          youCanNow: "idebe nọmba Medicare gị nke ọma, ịgụ akwụkwọ nkọwa gị maka nsogbu, na ịmara ebe ị ga-akọ aghụghọ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ Medicare Summary Notice?", options: ["Ụgwọ ị ga-akwụ ozugbo", "Mgbasa ozi maka atụmatụ ọhụrụ", "Akwụkwọ nkọwa sitere na Original Medicare na-edepụta nlekọta e debere ụgwọ ya na Medicare", "Kaadị Medicare ọhụrụ"], answer: 2, why: "Lelee Medicare Summary Notice ma ọ bụ Explanation of Benefits gị maka nlekọta ị nwetaghị." },
            { objective: "O2", q: "Ozi ederede kwuru na uru Medicare gị ga-akwụsị ma ọ bụrụ na i zighị nọmba Medicare gị. Gịnị ka ị ga-eme?", options: ["Azala ya, ma kọọ ya na 1-800-MEDICARE", "Zaa ya ngwa ngwa ka uru gị ghara ịkwụsị", "Zipu ọkara nọmba ahụ", "Zigara ndị enyi gị ya"], answer: 0, why: "Medicare agaghị akpọtụrụ gị na mberede maka nọmba gị; kọọ ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Akụkụ nke Medicare",
        questions: [
          { objective: "O1", q: "Kedu akụkụ Medicare bụ mkpuchi ụlọ ọgwụ?", options: ["Part D", "Part A", "Part B", "Medigap"], answer: 1, why: "Part A na-enyere aka kwụọ ụgwọ ịnọ n'ụlọ ọgwụ, hospice na ụfọdụ nlekọta ahụike n'ụlọ." },
          { objective: "O1", q: "Nne nne gị na-aga nyocha ahụ n'aka dọkịta. Kedu akụkụ na-enyekarị aka ịkwụ ụgwọ?", options: ["Part A", "Part D", "Part B", "Ọ dịghị"], answer: 2, why: "Part B na-ekpuchi ịhụ dọkịta na nlekọta outpatient." },
          { objective: "O1", q: "Gịnị bụ Medicare Advantage?", options: ["Atụmatụ nkeonwe nke Medicare kwadoro nke gụnyere Part A na B", "Ekwentị n'efu", "Ego Social Security", "Ụdị ụlọ ọgwụ"], answer: 0, why: "Atụmatụ Part C bụ atụmatụ nkeonwe jikọtara A, B na ọtụtụ mgbe mkpuchi ọgwụ." },
          { objective: "O1", q: "Ebee ka ị ga-achọta premium Part B nke afọ a?", options: ["Ozi ederede sitere n'aka onye ị na-amaghị", "Akwụkwọ akụkọ nke afọ gara aga", "Ihe onye agbata obi chere", "Medicare.gov ma ọ bụ onye ndụmọdụ SHIP gị"], answer: 3, why: "Premium na-agbanwe kwa afọ; lelee ezi isi iyi." },
          { objective: "O2", q: "Mmadụ kpọrọ oku sị na o si Medicare, chọrọ nọmba Medicare gị iji zitere gị brace n'efu. Gịnị ka ị ga-eme?", options: ["Nye ya nọmba ahụ", "Kwụsị oku ahụ ma kọọ ya na 1-800-MEDICARE", "Nye ya nọmba ụlọ akụ gị kama", "Kpọghachi ha na nọmba ha nyere"], answer: 1, why: "Medicare anaghị akpọ oku na mberede ịrịọ nọmba gị; nke a bụ aghụghọ a na-ahụkarị." }
        ]
      }
    },
    {
      name: "Isi 2: Idebanye aha n'oge na inweta enyemaka",
      lessons: [
        {
          objectives: ["O3"],
          title: "Ịchọta oge ndebanye aha gị",
          minutes: 6,
          goal: "Chọpụta Initial Enrollment Period nke gị ma mara ihe na-eme ma ọ bụrụ na ị hapụ ya.",
          text: [
            "Ohere mbụ gị idebanye aha bụ Initial Enrollment Period gị. Ọ dị ọnwa 7: ọ na-amalite ọnwa 3 tupu ọnwa ị ga-eru afọ 65, gụnyere ọnwa ọmụmụ gị, ma na-agwụ ọnwa 3 mgbe nke ahụ gasịrị. Ọmụmaatụ sitere na CMS: ọ bụrụ na ị ga-eru afọ 65 na June, oge gị bụ site na March ruo September.",
            "Ọ bụrụ na ị na-enwetaworị uru Social Security mgbe ị ruru afọ 65, a na-edebanyekarị aha gị na Part A na B n'onwe ya. Ọ bụrụ na ọ bụghị otu ahụ, ị ga-edebanye aha site na Social Security. Lelee ssa.gov ma ọ bụ kpọọ Social Security ka ị mata otu nke a si arụ ọrụ maka gị.",
            "Ọ bụrụ na gị ma ọ bụ di ma ọ bụ nwunye gị ka na-arụ ọrụ ma nwee mkpuchi ahụike site n'ọrụ ahụ, ị nwere ike ichere. CMS kwuru na ị nwere ike idebanye aha mgbe ị ka nwere mkpuchi ahụ, ma ọ bụ n'ime ọnwa 8 mgbe ọrụ ahụ ma ọ bụ mkpuchi ahụ kwụsịrị, nke ọ bụla bu ụzọ ruo. Nke a bụ Special Enrollment Period. Jụọ ọfịs uru ọrụ (benefits office) nke onye were gị n'ọrụ na SHIP tupu i kpebie ichere.",
            "Ọ bụrụ na ị hapụ oge gị ma ị rughị eru maka Special Enrollment Period, ị nwere ike idebanye aha n'oge General Enrollment Period, January 1 ruo March 31 kwa afọ, mkpuchi ga-amalite n'ọnwa na-esote ọnwa i debanyere aha. Mana ị nwere ike ịkwụ ntaramahụhụ ịbịa n'azụ ruo oge ọ bụla ị nwere Part B: CMS kwuru na premium nwere ike ịrị elu 10% maka oge ọnwa 12 zuru ezu ọ bụla ị gaara enwe Part B ma i nweghị ya. E nwekwara ike inwe ntaramahụhụ maka enweghị mkpuchi ọgwụ; jụọ SHIP ma ọ bụ lelee medicare.gov."
          ],
          steps: ["Dee ọnwa ị ga-eru afọ 65.", "Gụọ ọnwa 3 azụ na ọnwa 3 n'ihu: nke ahụ bụ oge ọnwa 7 gị.", "Ọ bụrụ na i nwere mkpuchi ahụike site n'ọrụ, jụọ onye were gị n'ọrụ na SHIP ma ị nwere ike ichere.", "Dee ọnwa mbụ nke oge gị na kalenda gị.", "Lelee nkọwa ya na ssa.gov, medicare.gov ma ọ bụ site na SHIP."],
          words: [["Initial Enrollment Period", "oge ọnwa 7 mbụ gị idebanye aha na Medicare, gburugburu ụbọchị ọmụmụ afọ 65 gị."], ["Special Enrollment Period", "ohere idebanye aha n'ezughị oge nkịtị n'ihi ọnọdụ ndụ, dị ka ịtụfu mkpuchi site n'ọrụ."], ["General Enrollment Period", "January 1 ruo March 31 kwa afọ, maka ndị hapụrụ oge mbụ ha."], ["Ntaramahụhụ ịdebanye aha n'azụ (late enrollment penalty)", "premium dị elu ị na-akwụ maka idebanye aha n'azụ oge."]],
          slides: [
            { title: "Initial Enrollment Period: ọnwa 7", bullets: ["Ọnwa 3 tupu ọnwa ọmụmụ afọ 65 gị", "Ọnwa ọmụmụ gị", "Ọnwa 3 mgbe nke ahụ gasịrị"] },
            { title: "Ọmụmaatụ", bullets: ["Ị ga-eru afọ 65 na June", "Oge: site na March ruo September"] },
            { title: "Ị ka na-arụ ọrụ nwere mkpuchi ọrụ?", bullets: ["Ị nwere ike ichere", "Debanye aha n'ime ọnwa 8 mgbe ọ kwụsịrị", "Buru ụzọ jụọ onye were gị n'ọrụ na SHIP"] },
            { title: "Ị hapụrụ ya?", bullets: ["General Enrollment: January 1 ruo March 31", "Ntaramahụhụ Part B: ruo 10% maka afọ zuru ezu ọ bụla i nọrọ n'azụ", "Lelee na medicare.gov ma ọ bụ site na SHIP"] }
          ],
          sources: [
            { name: "CMS: Original Medicare (Part A na B), onye ruru eru na ndebanye aha", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Social Security: Debanye aha na Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Chọpụta Initial Enrollment Period nke gị ma ọ bụ nke onye ezinụlọ: dee ọnwa ọmụmụ, wee dee ọnwa mbụ na ọnwa ikpeazụ nke oge ọnwa 7 ahụ. Ọ bụrụ na onye ahụ nọworị na Medicare, dee ụbọchị General Enrollment Period kama.",
          youCanNow: "ịchọpụta Initial Enrollment Period, ịmara mgbe ị nwere ike ichere, na ịmara ọnụ ahịa idebanye aha n'azụ oge.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ Initial Enrollment Period?", options: ["Oge ọnwa 7 gị: ọnwa 3 tupu ọnwa ọmụmụ afọ 65 gị, ọnwa ahụ, na ọnwa 3 mgbe nke ahụ gasịrị", "Open Enrollment nke oge mgbụsị akwụkwọ", "Oge ọ bụla masịrị gị", "Otu izu mgbe ụbọchị ọmụmụ gị gasịrị"], answer: 0, why: "Ọ dị ọnwa 7, ọnwa ị ga-eru afọ 65 nọ n'etiti." },
            { objective: "O3", q: "Ị ga-eru afọ 65 na October, i nweghịkwa mkpuchi site n'ọrụ. Kedu ọnwa bụ oge gị?", options: ["Naanị October", "January ruo March", "October 15 ruo December 7", "July ruo January"], answer: 3, why: "Gụọ ọnwa 3 azụ (July) na ọnwa 3 n'ihu (January)." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Ilele mkpuchi gị kwa oge mgbụsị akwụkwọ",
          minutes: 5,
          goal: "Jiri oge Open Enrollment nke mgbụsị akwụkwọ lelee ma atụmatụ gị ka dabara gị.",
          text: [
            "Atụmatụ na-agbanwe kwa afọ: ego, ọgwụ e kpuchiri, na ndị dọkịta nọ na netwọk. Kwa oge mgbụsị akwụkwọ (fall), Medicare nwere oge Open Enrollment site na October 15 ruo December 7. N'oge a, ị nwere ike ịgbanwe atụmatụ Medicare Advantage gị ma ọ bụ atụmatụ ọgwụ Part D gị, ma ọ bụ si na Original Medicare gaa na Medicare Advantage ma ọ bụ si na nke ahụ laghachi. Mgbanwe na-amalite na January 1. Ọ bụrụ na mkpuchi gị na-atọ gị ụtọ, ọ dịghị ihe ị ga-eme.",
            "Tupu Open Enrollment, atụmatụ na-ezipu Annual Notice of Change. Gụọ ya maka mgbanwe na premium gị, ọgwụ gị na ndị dọkịta gị.",
            "Iji tụnyere atụmatụ, jiri ngwa ntụnyere atụmatụ dị na medicare.gov. Tinye ọgwụ gị na pharmacy gị site na ndepụta i mere na Nkuzi 2. Lee ego niile nke afọ, ọ bụghị naanị premium kwa ọnwa, ma lelee na ndị dọkịta gị nọ na netwọk ahụ.",
            "Kpachara anya maka oku ndị na-ere ihe na-agbasi ike na mgbasa ozi n'oge mgbụsị akwụkwọ. Ọ dịghị onye kwesịrị ịmanye gị ịgbanwe. Onye ndụmọdụ SHIP bụ n'efu, ọ naghịkwa ere atụmatụ. Ndị nwere Medicare Advantage nwere ike inwe ohere ọzọ ịgbanwe atụmatụ ná mmalite afọ; lelee ụbọchị ya na medicare.gov."
          ],
          steps: ["Gụọ Annual Notice of Change nke atụmatụ gị mgbe ọ bịara.", "Were ndepụta ndị dọkịta gị, ọgwụ gị na pharmacy gị.", "N'etiti October 15 na December 7, tụnyere atụmatụ na medicare.gov ma ọ bụ site na SHIP.", "Lelee ego niile nke afọ na na ndị dọkịta gị nọ na netwọk.", "Ọ bụrụ na ị gbanwee, dee atụmatụ ọhụrụ ahụ na nọmba nkwenye (confirmation number) ya."],
          words: [["Open Enrollment", "October 15 ruo December 7 kwa afọ, mgbe ndị nwere Medicare nwere ike ịgbanwe atụmatụ maka afọ na-abịa."], ["Annual Notice of Change", "akwụkwọ ozi sitere n'atụmatụ gị kwa oge mgbụsị akwụkwọ nke na-edepụta ihe ga-agbanwe n'afọ na-abịa."], ["Formulary", "ndepụta ọgwụ atụmatụ na-ekpuchi."]],
          slides: [
            { title: "Atụmatụ na-agbanwe kwa afọ", bullets: ["Ego, ọgwụ e kpuchiri, netwọk ndị dọkịta", "Gụọ Annual Notice of Change gị"] },
            { title: "Open Enrollment", bullets: ["October 15 ruo December 7", "Gbanwee atụmatụ; atụmatụ ọhụrụ na-amalite na January 1", "Ọ na-atọ gị ụtọ? Ọ dịghị ihe ị ga-eme"] },
            { title: "Tụnyere n'ụzọ ziri ezi", bullets: ["Tinye ọgwụ gị na pharmacy gị", "Lee ego niile nke afọ", "Lelee na ndị dọkịta gị nọ na netwọk"] },
            { title: "Ọ dịghị mmanye", bullets: ["Elegharala oku ndị na-ere ihe na-agbasi ike anya", "SHIP bụ n'efu, ọ naghịkwa ere atụmatụ"] }
          ],
          sources: [
            { name: "CMS: Ihe mgbasa ozi Medicare Open Enrollment", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov: Chọta ma tụnyere atụmatụ", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Dee ụbọchị Open Enrollment nke afọ a na kalenda gị. Wee chọta Annual Notice of Change nke atụmatụ gị (ma ọ bụ rịọ onye ezinụlọ ka o nyere gị aka) ma dee otu ihe na-agbanwe n'afọ na-abịa. Ọ bụrụ na ị nọbeghị na Medicare, dee ajụjụ ị ga-ajụ maka atụmatụ.",
          youCanNow: "iji oge Open Enrollment nke mgbụsị akwụkwọ lelee atụmatụ gị ma tụnyere nhọrọ site n'iji ọgwụ gị na ndị dọkịta gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ Annual Notice of Change?", options: ["Akwụkwọ ozi sitere n'atụmatụ gị na-edepụta mgbanwe nke afọ na-abịa", "Ntaramahụhụ Medicare", "Kaadị ọhụrụ", "Fọm ụtụ isi"], answer: 0, why: "Atụmatụ na-ezipu ya tupu Open Enrollment ka i wee lelee mgbanwe na ego, ọgwụ na ndị dọkịta." },
            { objective: "O4", q: "Atụmatụ ọgwụ abụọ dị ka ha dị mma. Otu nwere premium kwa ọnwa dị ala. Gịnị ka ị ga-atụnyere?", options: ["Naanị premium kwa ọnwa", "Ego niile nke afọ site n'iji ọgwụ gị na pharmacy gị", "Atụmatụ na-akpọ gị oku kacha", "Akara (logo) ya"], answer: 1, why: "Lee ego niile nke afọ, ọ bụghị naanị premium kwa ọnwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Inweta enyemaka n'efu site na SHIP na Medicare",
          minutes: 5,
          goal: "Kpọtụrụ enyemaka Medicare n'efu, nke na-adịghị ele mmadụ anya n'ihu, ma bịa njikere na ajụjụ gị.",
          text: [
            "Ọ dịghị mkpa ka ị ghọta Medicare naanị gị. Steeti ọ bụla nwere State Health Insurance Assistance Program, ma ọ bụ SHIP. SHIP na-enye ndụmọdụ Medicare n'otu n'otu, n'obodo gị, n'akwụghị ụgwọ ọ bụla. Ndị ndụmọdụ ahụ anaghị ele mmadụ anya n'ihu: ha anaghị ere mkpuchi. Ha nwere ike inyere aka ịtụnyere ego atụmatụ, ilele mkpuchi, ilele netwọk na ịkọwa nhọrọ gị. Chọta nke gị na shiphelp.org.",
            "Enyemaka nke Medicare n'onwe ya: ezi weebụsaịtị medicare.gov, na ahịrị ekwentị 1-800-MEDICARE (1-800-633-4227), nke CMS kwuru na-emeghe awa 24 kwa ụbọchị, ụbọchị 7 kwa izu. Maka ajụjụ gbasara idebanye aha na Part A na B, kpọtụrụ Social Security na ssa.gov.",
            "Kwadebe tupu ị kpọọ: nwee kaadị Medicare gị n'akụkụ gị (agụrụla onye ọ bụla kpọrọ gị oku nọmba ya), ndepụta ndị dọkịta gị na ọgwụ gị, akwụkwọ ozi atụmatụ gị, na ajụjụ gị e dere ede. Dee ndetu: ụbọchị, aha onye ahụ na ihe o kwuru.",
            "Onye ezinụlọ nwere ike isonye n'oku ahụ ma ọ bụrụ na i kwere. Ọ bụrụ na ị rịọ ngwa enyemaka AI ka ọ kọwaa akwụkwọ ozi Medicare, buru ụzọ wepụ aha gị, nọmba Medicare gị na ozi nzuzo ndị ọzọ, ma ka lelee azịza ya na SHIP ma ọ bụ medicare.gov."
          ],
          steps: ["Gaa na shiphelp.org ma họrọ steeti gị iji chọta SHIP dị nso gị.", "Dee ajụjụ gị ma chịkọta ndepụta ndị dọkịta gị na ọgwụ gị.", "Kpọọ SHIP, ma ọ bụ 1-800-MEDICARE, ma ọ bụ jiri medicare.gov.", "Dee ndetu: ụbọchị, aha na azịza.", "Dee ụbọchị njedebe ọzọ na kalenda gị."],
          words: [["SHIP", "State Health Insurance Assistance Program: ndụmọdụ Medicare n'efu, n'obodo gị, nke na-adịghị ele mmadụ anya n'ihu."], ["Na-adịghị ele mmadụ anya n'ihu (unbiased)", "na-agbalịghị ire gị ihe ọ bụla ma ọ bụ ịmanye gị otu nhọrọ."]],
          slides: [
            { title: "SHIP: enyemaka n'efu n'obodo gị", bullets: ["Ndụmọdụ Medicare n'otu n'otu", "N'efu, ọ naghị ere mkpuchi", "Chọta nke gị na shiphelp.org"] },
            { title: "Enyemaka nke Medicare n'onwe ya", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), 24/7", "Ajụjụ gbasara idebanye aha: ssa.gov"] },
            { title: "Tupu ị kpọọ", bullets: ["Ndepụta ndị dọkịta gị na ọgwụ gị", "Akwụkwọ ozi atụmatụ gị", "Ajụjụ gị e dere ede"] },
            { title: "N'oge oku ahụ", bullets: ["Dee ndetu: ụbọchị, aha, azịza", "Onye ezinụlọ nwere ike isonye", "Dee ụbọchị njedebe ọzọ na kalenda gị"] }
          ],
          sources: [
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov: Gwa mmadụ okwu (lelee oge ekwentị ebe a)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Ọrụ ikpeazụ: mee atụmatụ Medicare gị nke otu peeji nwere oge ndebanye aha gị, akụkụ ndị ị nwere ma ọ bụ chọrọ, ndị dọkịta gị, ọgwụ gị na pharmacy gị, ajụjụ atọ, na nọmba ekwentị SHIP gị site na shiphelp.org. Wee kpọọ SHIP gị ka ị kwadoo oge ndụmọdụ, ma ọ bụ jiri ngwa ntụnyere atụmatụ dị na medicare.gov na ndepụta ọgwụ gị.",
          youCanNow: "ịchọta na ịkpọtụrụ enyemaka Medicare n'efu ma bịa njikere na atụmatụ nke gị na ajụjụ gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ SHIP?", options: ["Ụlọ ọrụ mkpuchi", "Atụmatụ Medicare Advantage", "Mmemme ndụmọdụ Medicare n'efu, na-adịghị ele mmadụ anya n'ihu, na steeti ọ bụla", "Ebe a na-akpọ oku ire ihe"], answer: 2, why: "SHIP na-enye ndụmọdụ Medicare n'efu, n'otu n'otu, ọ naghịkwa ere mkpuchi." },
            { objective: "O5", q: "Ị na-achọ ịkpọ SHIP. Gịnị ka ị ga-enwe njikere?", options: ["Ọ dịghị ihe; ha maara ihe niile gbasara gị", "Kaadị ụlọ akụ gị", "Ajụjụ gị, ndepụta ndị dọkịta gị na ọgwụ gị, na akwụkwọ ozi atụmatụ gị", "Nọmba Social Security gị ị ga-ebu ụzọ gụpụta"], answer: 2, why: "Kwadebe ajụjụ gị, ndepụta gị na akwụkwọ ozi gị, ma dee ndetu n'oge oku ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Idebanye aha n'oge na inweta enyemaka",
        questions: [
          { objective: "O3", q: "Ị ga-eru afọ 65 na June. Kedu mgbe Initial Enrollment Period gị bụ?", options: ["Naanị na June", "January ruo March", "October 15 ruo December 7", "Site na March ruo September"], answer: 3, why: "Ọ na-amalite ọnwa 3 tupu ọnwa ọmụmụ gị ma na-agwụ ọnwa 3 mgbe nke ahụ gasịrị." },
          { objective: "O3", q: "Gịnị nwere ike ime ma ọ bụrụ na i debanye aha na Part B n'azụ oge n'enweghị Special Enrollment Period?", options: ["Ị nwere ike ịkwụ premium dị elu ruo oge ọ bụla ị nwere Part B", "Ọ dịghị ihe ọ bụla", "A ga-alaghachitere gị ego", "Ị gaghị enweta Medicare ọzọ"], answer: 0, why: "CMS kwuru na premium Part B nwere ike ịrị elu 10% maka ọnwa 12 zuru ezu ọ bụla i nọrọ n'azụ." },
          { objective: "O4", q: "Kedu mgbe Open Enrollment nke Medicare n'oge mgbụsị akwụkwọ bụ?", options: ["January 1 ruo March 31", "Ọnwa ọmụmụ gị", "October 15 ruo December 7", "Ụbọchị ọ bụla masịrị gị"], answer: 2, why: "Kwa oge mgbụsị akwụkwọ, ndị nwere Medicare nwere ike ịgbanwe atụmatụ site na October 15 ruo December 7." },
          { objective: "O4", q: "Kedu ụzọ kacha mma isi tụnyere atụmatụ ọgwụ?", options: ["Họrọ naanị premium kwa ọnwa kacha dị ala", "Tinye ọgwụ gị na pharmacy gị ma lee ego niile nke afọ", "Họrọ atụmatụ onye kpọrọ oku tụrụ aro", "Họrọ atụmatụ nwere mgbasa ozi kacha mma"], answer: 1, why: "Ego niile nke afọ site n'iji ọgwụ gị na-egosi ezi ọnụ ahịa." },
          { objective: "O5", q: "Kedu nke bụ eziokwu gbasara SHIP?", options: ["Ọ na-ere atụmatụ mkpuchi", "Ọ na-ana ego maka oku ọ bụla", "Ọ na-enye ndụmọdụ Medicare n'efu, na-adịghị ele mmadụ anya n'ihu", "Ọ na-enyere naanị ndị na-erubeghị afọ 65 aka"], answer: 2, why: "Ndụmọdụ SHIP bụ n'efu, n'obodo gị, ọ naghịkwa ele mmadụ anya n'ihu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ihe Ndabere Medicare",
    questions: [
      { objective: "O1", q: "Onye nwere ike inweta Medicare?", options: ["Naanị ndị na-erubeghị afọ 30", "Ndị dị afọ 65 ma ọ bụ karịa, na ụfọdụ ndị na-eto eto nwere nkwarụ ma ọ bụ akụrụ nwụrụ anwụ", "Naanị ndị agha ochie (veterans)", "Naanị ndị bi ná mba ọzọ"], answer: 1, why: "Medicare na-ekpuchi ndị dị afọ 65+, ụfọdụ ndị nwere nkwarụ na ndị nwere End-Stage Renal Disease." },
      { objective: "O1", q: "Part B na-ekpuchikarị:", options: ["Ịnọ n'ụlọ ọgwụ", "Naanị ọgwụ prescription", "Naanị ihicha ezé", "Ịhụ dọkịta na nlekọta outpatient"], answer: 3, why: "Part B bụ mkpuchi ọgwụgwọ maka ndị dọkịta na nlekọta outpatient." },
      { objective: "O1", q: "Original Medicare bụ:", options: ["Part A na Part B", "Naanị Part C", "Naanị Part D", "Atụmatụ nkeonwe"], answer: 0, why: "Original Medicare pụtara Part A na B ọnụ." },
      { objective: "O1", q: "Ọtụtụ mmadụ na-akwụ premium kwa ọnwa maka:", options: ["Ọ dịghị ihe", "Naanị Part A", "Part B", "Kaadị Medicare ha"], answer: 2, why: "Ọtụtụ mmadụ anaghị akwụ premium Part A mana ha na-akwụ nke Part B." },
      { objective: "O1", q: "Part D na-ekpuchi:", options: ["Ọgwụ prescription", "Ịnọ n'ụlọ ọgwụ", "Naanị ugogbe anya", "Ebe obibi"], answer: 0, why: "Part D bụ mkpuchi ọgwụ prescription nke Medicare." },
      { objective: "O1", q: "Atụmatụ Medicare Advantage na-abụkarị:", options: ["Nke na-ekpuchi naanị ọgwụ", "Nke gụnyere Part A na B na ọtụtụ mgbe mkpuchi ọgwụ", "Nke ụlọ akụ gị na-elekọta", "Nke na-anọchi Social Security"], answer: 1, why: "Atụmatụ Part C na-ejikọta A, B na ọtụtụ mgbe D." },
      { objective: "O4", q: "Gịnị bụ netwọk atụmatụ?", options: ["Weebụsaịtị ya", "Nọmba ekwentị ya", "Ndị dọkịta, ụlọ ọgwụ na pharmacy ọ na-arụkọ ọrụ", "Ụgwọ ọ na-ana kwa ọnwa"], answer: 2, why: "Ọtụtụ atụmatụ na-atụ anya ka i jiri netwọk ha." },
      { objective: "O4", q: "Gịnị ka ị ga-enwe njikere iji tụnyere atụmatụ?", options: ["PIN ụlọ akụ gị", "Mgbasa ozi n'akwụkwọ akụkọ", "Ọ dịghị ihe", "Ndepụta ndị dọkịta gị, ọgwụ gị na pharmacy gị"], answer: 3, why: "Ndị dọkịta gị na ọgwụ gị na-ekpebi atụmatụ dabara gị." },
      { objective: "O2", q: "Onye kpọrọ oku sị na ọ ga-enye gị ngwa nyocha n'efu ma ọ bụrụ na i nye ya nọmba Medicare gị. Nke a bụ:", options: ["Ọrụ Medicare nkịtị", "O yikarịrị ka ọ bụ aghụghọ", "Ịnweta ọgwụ ọzọ na pharmacy", "Onye ndụmọdụ SHIP"], answer: 1, why: "Medicare anaghị akpọ oku na mberede ịrịọ nọmba gị; ihe \"n'efu\" bụ wayo a na-ahụkarị." },
      { objective: "O2", q: "Medicare Summary Notice gị gosiri oche nkwagharị (wheelchair) ị nwetaghị. Ị kwesịrị:", options: ["Ịkọ ya na 1-800-MEDICARE", "Ileghara ya anya", "Ịkwụ ụgwọ ya", "Ịtụfu akwụkwọ ahụ"], answer: 0, why: "Nlekọta ị nwetaghị nwere ike ịbụ aghụghọ; kọọ ya." },
      { objective: "O3", q: "Ogologo ole ka Initial Enrollment Period dị?", options: ["Izu 1", "Ọnwa 1", "Afọ 1", "Ọnwa 7"], answer: 3, why: "Ọnwa 3 tupu, ọnwa ọmụmụ, na ọnwa 3 mgbe nke ahụ gasịrị." },
      { objective: "O3", q: "Ị na-enweta uru Social Security tupu afọ 65. Ọtụtụ mgbe:", options: ["Ị gaghị eru eru mgbe ọ bụla", "A ga-ata gị ntaramahụhụ", "A na-edebanye aha gị na Part A na B n'onwe ya", "A na-ebuga gị naanị na Part D"], answer: 2, why: "A na-edebanyekarị aha ndị nọworị na Social Security n'onwe ya; lelee na ssa.gov." },
      { objective: "O3", q: "Ị dị afọ 66, mkpuchi ahụike sitere n'ọrụ gị nke ugbu a ka na-ekpuchi gị. Gịnị ka ị ga-eme tupu i kpebie ichere Part B?", options: ["Ọ dịghị ihe; ichere na-adị mma mgbe niile", "Kagbuo mkpuchi ọrụ gị", "Jụọ ọfịs uru ọrụ nke onye were gị n'ọrụ na SHIP", "Jụọ onye na-ere ihe kpọrọ oku"], answer: 2, why: "Special Enrollment Period nwere ike ịdị, mana buru ụzọ lelee ọnọdụ gị." },
      { objective: "O3", q: "General Enrollment Period na-adị:", options: ["January 1 ruo March 31", "October 15 ruo December 7", "Naanị n'ụbọchị ọmụmụ gị", "June ruo August"], answer: 0, why: "CMS debere General Enrollment Period na January 1 ruo March 31 kwa afọ." },
      { objective: "O3", q: "Ntaramahụhụ ịbịa n'azụ nke Part B nwere ike ime ka premium rịa elu:", options: ["1% otu ugboro", "50% maka otu ọnwa", "Ọ dịghị ihe", "10% maka ọnwa 12 zuru ezu ọ bụla ị gaara enwe Part B ma i nweghị ya"], answer: 3, why: "CMS kwuru na ntaramahụhụ ahụ ruru 10% kwa oge ọnwa 12 zuru ezu, ruo oge ọ bụla ị nwere Part B." },
      { objective: "O4", q: "N'oge Open Enrollment nke mgbụsị akwụkwọ, ị nwere ike:", options: ["Ịgbanwe nọmba Social Security gị", "Ịgbanwe atụmatụ Medicare Advantage gị ma ọ bụ atụmatụ ọgwụ gị maka afọ na-abịa", "Inweta ego n'aka Medicare", "Naanị ịkagbu Medicare"], answer: 1, why: "October 15 ruo December 7 bụ mgbe ị nwere ike ịgbanwe atụmatụ maka January 1." },
      { objective: "O4", q: "Kwa oge mgbụsị akwụkwọ atụmatụ gị na-ezipu akwụkwọ ozi na-edepụta mgbanwe nke afọ na-abịa. Ọ bụ:", options: ["Annual Notice of Change", "Kaadị ụbọchị ọmụmụ", "Akwụkwọ ụtụ isi", "Akụkọ kredit"], answer: 0, why: "Gụọ Annual Notice of Change tupu Open Enrollment." },
      { objective: "O5", q: "Ebee ka ị ga-achọta SHIP dị nso gị?", options: ["Mgbasa ozi na-apụta na mberede", "Njikọ n'ozi ederede", "shiphelp.org", "Onye ọ bụla na-ere mkpuchi"], answer: 2, why: "shiphelp.org na-edepụta SHIP nke steeti ọ bụla." },
      { objective: "O5", q: "Ị chọrọ ịrịọ ngwa enyemaka AI ka ọ kọwaa akwụkwọ ozi Medicare. Ihe mbụ ị ga-eme bụ:", options: ["Itinye nọmba Medicare gị n'ime ya", "Ịgbakwunye ozi ụlọ akụ gị", "Iziga foto kaadị gị", "Iwepụ aha gị, nọmba Medicare gị na ozi nzuzo ndị ọzọ"], answer: 3, why: "Ekesala nọmba nzuzo na ngwa AI mgbe ọ bụla; wee lelee ya na SHIP ma ọ bụ medicare.gov." },
      { objective: "O5", q: "Mgbe ị kpọrọ SHIP ma ọ bụ 1-800-MEDICARE, ezigbo omume bụ:", options: ["Ịkwụsị oku ahụ ngwa ngwa", "Ide ndetu: ụbọchị, aha na azịza", "Ịgụrụ onye ọ bụla kpọrọ gị oku nọmba gị", "Ichefu ajụjụ gị"], answer: 1, why: "Ndetu na-enyere gị aka icheta na ịgbaso ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      4,
      7,
      8,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Oge ndebanye aha",
        objective: "O3",
        notYet: "Enweghị oge, ma ọ bụ ọnwa ma ọ bụ ụbọchị ndị ahụ ezighi ezi.",
        meets: "Ọnwa Initial Enrollment Period ziri ezi, ma ọ bụ ụbọchị Open Enrollment nke afọ a ma ọ bụrụ na ọ nọworị na Medicare.",
        exceeds: "Na-edekwa ma Special Enrollment Period nwere ike ịdị na ebe e lelere ya."
      },
      {
        name: "Akụkụ ị nwere ma ọ bụ chọrọ",
        objective: "O1",
        notYet: "Akụkụ ụfọdụ adịghị ma ọ bụ agwakọtara ha.",
        meets: "Na-edepụta akụkụ ndị ị nwere ma ọ bụ chọrọ na ihe nke ọ bụla na-ekpuchi.",
        exceeds: "Na-akpọ aha ụzọ (Original Medicare ma ọ bụ Medicare Advantage) ị na-ele anya, na ihe kpatara ya."
      },
      {
        name: "Njikere ịtụnyere",
        objective: "O4",
        notYet: "Enweghị ndepụta ndị dọkịta, ọgwụ ma ọ bụ pharmacy.",
        meets: "Ndepụta ndị dọkịta, ọgwụ na pharmacy, dị njikere maka ngwa ntụnyere atụmatụ.",
        exceeds: "Jiri ngwa ahụ ma ọ bụ SHIP tụnyere ego niile nke afọ na netwọk."
      },
      {
        name: "Enyemaka n'efu na ajụjụ",
        objective: "O5",
        notYet: "Enweghị ajụjụ, ma ọ bụ enweghị enyemaka n'efu e depụtara.",
        meets: "Ajụjụ atọ doro anya na enyemaka n'efu ị ga-eji: SHIP dị nso gị, medicare.gov na 1-800-MEDICARE.",
        exceeds: "Kpọtụrụ SHIP ma ọ bụ jiri medicare.gov, ma dee ụbọchị, aha na azịza."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kpọtụrụ SHIP ha ma ọ bụ jiri ngwa ntụnyere atụmatụ nke medicare.gov n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe debanyere aha n'oge ha ma zere ntaramahụhụ ịbịa n'azụ",
      "Ndị na-amụ ihe kọrọ aghụghọ Medicare ha na-enyo enyo ma ọ bụ ụgwọ na-ezighi ezi na 1-800-MEDICARE"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ na mkpịsị ode maka atụmatụ Medicare nke otu peeji",
      "Ndepụta ndị dọkịta, ọgwụ na pharmacy nke onye na-amụ ihe",
      "Ekwentị, na kọmputa ma ọ bụ tablet nwere ịntanetị maka medicare.gov na shiphelp.org ma ọ bụrụ na o nwere",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke na-adịghị agba ọsọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Atụla aro atụmatụ ọ bụla ma ọ bụ nye ndụmọdụ mkpuchi; zipu ndị na-amụ ihe na SHIP dị nso ha, nke bụ n'efu ma na-adịghị ele mmadụ anya n'ihu.",
      "Lelee premium nke afọ a na nkọwa Open Enrollment na medicare.gov tupu nnọkọ ọ bụla.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha kesaa nọmba Medicare ha; jiri kaadị ihe atụ maka omume.",
      "Kpọọ onye ndụmọdụ SHIP dị nso ka ọ bịa nnọkọ ma ọ bụrụ na o kwere omume, karịsịa tupu October 15.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
