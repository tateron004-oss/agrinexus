"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-ai-education.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-education-ig",
  lang: "ig",
  translationOf: "underserved-ai-education",
  category: "Undeserved Community",
  name: "AI maka Agụmakwụkwọ na Ịmụ Ihe",
  skills: "Iji AI dị ka onye nkuzi nwere ndidi, Ime ajụjụ omume, Ịchọta weebụsaịtị ịmụ ihe n'efu, Ịhazi atụmatụ ọmụmụ, Inyere nwata aka ịmụ ihe n'emeghị ọrụ ya",
  outcome: "iji ngwa enyemaka AI n'efu na weebụsaịtị ịmụ ihe n'efu mụta ihe ọhụrụ: nweta nkọwa nke echiche siri ike, mee omume site n'ajụjụ AI mere, ma soro atụmatụ ọmụmụ dị mfe nke izu abụọ i mere n'onwe gị.",
  about: [
    "Ọ dịghị mgbe ọ na-agafe oge ịmụ ihe. Ma eleghị anya ị chọrọ imecha diplọma, ime ka bekee gị ka mma, ịmụ nka ọrụ, ma ọ bụ ịghọta ihe ọmụmụ ụlọ (homework) nwa gị. Ngwa AI n'efu nwere ike ịbụ onye nkuzi nwere ndidi nke ike anaghị agwụ maka ajụjụ gị.",
    "Ị ga-amụta ịrịọ AI ka ọ kọwaa ihe n'ọkwa gị, ime ajụjụ omume, ịchọta weebụsaịtị ịmụ ihe n'efu, ịhazi atụmatụ ọmụmụ dabara ndụ gị nwere ọrụ buru ibu, na inyere nwata aka ịmụ ihe n'enweghị AI emere ya homework ya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-akwụsị isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Họrọ otu ihe ị chọrọ ịmụta. Jiri ngwa enyemaka AI mee atụmatụ ọmụmụ izu abụọ nke na-eji otu weebụsaịtị ịmụ ihe n'efu (dị ka Khan Academy ma ọ bụ LearnFree) nkeji 20 kwa ụbọchị. Wee rịọ AI ka o nye gị ajụjụ omume ise maka isiokwu mbụ, zaa ha n'onwe gị, ma lelee azịza gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye bi n'obodo ndị a na-elegharaghị anya (underserved) chọrọ ịmụta ihe ọhụrụ: ndị na-emecha diplọma, ndị na-eme ka bekee ha ka mma, ndị na-amụ nka ọrụ, ma ọ bụ ndị na-enyere ụmụ ha aka na homework. Ọtụtụ na-arụ ọrụ, na-azụ ụmụ ma ọ bụ na-elekọta ezinụlọ.",
    startingPoint: "Ha nwere ike iji ekwentị na ịntanetị ntakịrị. Ụfọdụ nwere ahụmahụ siri ike n'ụlọ akwụkwọ ma ọ bụ hapụrụ ụlọ akwụkwọ n'oge, ole na ole ejirila ngwa enyemaka AI ma ọ bụ weebụsaịtị ịmụ ihe n'efu mụọ ihe.",
    gap: "Ngwa AI n'efu na weebụsaịtị ịmụ ihe nwere ike ịrụ ọrụ dị ka onye nkuzi nwere ndidi, mana ndị na-amụ ihe amaghị otu esi arịọ nkọwa n'ọkwa ha, otu esi eme omume kama naanị ịgụghachi, ma ọ bụ otu esi eme atụmatụ ọmụmụ dabara ndụ nwere ọrụ buru ibu. N'enweghị nke a, ọtụtụ na-ahapụ ebumnuche ịmụ ihe ga-enyere ọrụ ha na ezinụlọ ha aka.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa ọba akwụkwọ",
      "Oge: obere ọmụmụ kwa ụbọchị, ọtụtụ mgbe nkeji 20 ma ọ bụ na-erughị ya",
      "AI nwere ike ịmehie na mgbakọ na eziokwu; ndị na-amụ ihe na-elele nzọụkwụ na isi iyi a pụrụ ịtụkwasị obi",
      "Ụlọ akwụkwọ nwere iwu nke ha gbasara AI, ọtụtụ ngwa AI nwekwara oke afọ maka ụmụaka"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were \"Mmalite AI na Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị echiche ị na-ahụ na ọ siri ike", action: "ịrịọ ngwa enyemaka AI ka ọ kọwaa ya n'ọkwa gị site n'ọmụmaatụ kwa ụbọchị, ma kwuo akụkụ ka na-agbagwoju gị anya", standard: "ruo mgbe ị nwere ike ịkọwaghachi ya n'okwu nke gị" },
    { id: "O2", condition: "Mgbe ị mụtachara otu echiche", action: "ịrịọ ngwa enyemaka AI maka ajụjụ omume otu n'otu, zaa ha n'onwe gị ma lelee azịza ha", standard: "na-aza tupu i lee azịza, na-elelekwa azịza ọ bụla yiri ka ọ ezighi ezi" },
    { id: "O3", condition: "Mgbe e nyere gị nka ị chọrọ ịmụta", action: "ịchọta ihe ọmụmụ n'efu na weebụsaịtị ịmụ ihe ma ọ bụ n'ọba akwụkwọ gị", standard: "na-emeghe nkuzi mbụ ya" },
    { id: "O4", condition: "Mgbe e nyere gị ezi oge ị nwere kwa izu", action: "ịme atụmatụ ọmụmụ izu abụọ site n'ngwa enyemaka AI na otu saịtị ịmụ ihe n'efu", standard: "nwere otu obere isiokwu kwa ụbọchị, ụbọchị izu ike, ma tinye atụmatụ ahụ n'ebe ị ga-ahụ ya" },
    { id: "O5", condition: "Mgbe e nyere gị isiokwu homework nwata", action: "iji ngwa enyemaka AI kọwaara gị echiche ahụ ka i nwee ike ịkụzi ya, n'enyeghị nwata ahụ azịza", standard: "na-agbaso iwu ụlọ akwụkwọ gbasara AI" },
    { id: "O6", condition: "Na njedebe izu ọmụmụ", action: "ịlele ọganihu gị site n'obere ule ma gbanwee atụmatụ gị", standard: "na-elegharị anya n'isiokwu ọ bụla ị zaghị nke ọma" }
  ],
  chapters: [
    {
      name: "Isi 1: AI dị ka onye nkuzi gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Inweta nkọwa echiche siri ike n'ọkwa gị",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka ọ kọwaa echiche siri ike n'ụzọ ị ga-aghọta.",
          text: [
            "Onye nkuzi (tutor) bụ onye na-akọwara otu mmadụ ihe n'onwe ya. Ngwa enyemaka AI n'efu nwere ike ime ka onye nkuzi nwere ndidi. Ị nwere ike ịjụ otu ajụjụ ọtụtụ ugboro, ọ naghị ekpekwa gị ikpe.",
            "Gwa ya ọkwa gị: \"Kọwaa fraction (akụkụ ọnụọgụ) dị ka a ga-asị na m ka na-amalite\" ma ọ bụ \"Kọwaa ya site n'ọmụmaatụ gbasara isi nri.\" Ọmụmaatụ kwa ụbọchị site na ndụ gị na-eme ka echiche nọgide n'uche.",
            "Ọ bụrụ na ọ ka na-agbagwoju gị anya, kwuo akụkụ ị ghọtaghị: \"Aghọtara m akụkụ mbụ, mana aghọtaghị m ihe mere anyị ji atụgharị fraction nke abụọ.\""
          ],
          steps: ["Kpọọ aha echiche ị chọrọ ịmụta.", "Gwa AI ọkwa gị ma rịọ maka ọmụmaatụ kwa ụbọchị.", "Gụọ azịza ahụ nwayọọ.", "Kwuo kpọmkwem akụkụ ka na-agbagwoju gị anya ma jụọ ọzọ."],
          words: [["Onye nkuzi (tutor)", "onye nkuzi na-enyere otu mmadụ aka n'otu oge."], ["Ọmụmaatụ", "ihe mere na ndụ n'ezie nke na-egosi otu echiche si arụ ọrụ."]],
          slides: [
            { title: "AI nwere ike ịbụ onye nkuzi nwere ndidi", bullets: ["Jụọ ugboro ole ọ bụla ị chọrọ", "Ọ naghị ekpe gị ikpe"] },
            { title: "Gwa ya ọkwa gị", bullets: ["\"Kọwaa ya dị ka a ga-asị na m ka na-amalite\"", "\"Jiri ọmụmaatụ gbasara isi nri ma ọ bụ ọrụ\""] },
            { title: "Ọ ka na-agbagwoju gị anya?", bullets: ["Kwuo akụkụ ị ghọtaghị", "Rịọ maka ọmụmaatụ ọzọ"] }
          ],
          tryIt: "Họrọ otu echiche ị na-ahụ mgbe niile na ọ siri ike (pasentị, iwu ụtọasụsụ, otu interest (ọmụrụnwa ego) si arụ ọrụ). Rịọ ngwa enyemaka AI ka ọ kọwaa ya n'ọkwa onye mbido site n'ọmụmaatụ sitere na ndụ gị kwa ụbọchị.",
          youCanNow: "inweta nkọwa echiche siri ike n'ọkwa nke gị ma jụọ ajụjụ nsochi ruo mgbe ọ ghọtara gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ onye nkuzi (tutor)?", options: ["Onye na-akọwara otu mmadụ ihe n'onwe ya", "Ule ị na-ede n'ụlọ akwụkwọ", "Ụdị igwe mgbakọ", "Ụlọ akwụkwọ"], answer: 0, why: "Onye nkuzi na-enyere otu mmadụ aka ịmụ ihe, ngwa enyemaka AI nwekwara ike ime ka onye nkuzi nwere ndidi." },
            { objective: "O1", q: "Ị ghọtara akụkụ mbụ nke nkọwa mana ị ghọtaghị nke abụọ. Gịnị ka ị ga-ajụ?", options: ["\"Kọwaghachi ihe niile.\"", "\"Aghọtara m akụkụ mbụ, mana aghọtaghị m ihe mere anyị ji atụgharị fraction nke abụọ.\"", "\"Hapụ ya.\"", "\"Nye m azịza ya.\""], answer: 1, why: "Ikwu kpọmkwem akụkụ na-agbagwoju gị anya na-enyere AI aka ịkọwa akụkụ ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime omume site n'ajụjụ AI mere",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka ọ jụọ gị ajụjụ ma lelee azịza gị.",
          text: [
            "Ịgụ ihe abụghị otu ihe ahụ na ịmụta ihe. Ị na-echeta karịa mgbe ị na-eme omume: ịza ajụjụ na-eme ka ụbụrụ gị wepụtaghachi echiche ahụ.",
            "Jụọ: \"Nye m ajụjụ omume ise gbasara pasentị, otu n'otu. Chere azịza m, wee gwa m ma m ziri ezi na ihe mere.\"",
            "AI nwere ike ime mperi na mgbakọ na eziokwu. Ọ bụrụ na azịza yiri ka ọ ezighi ezi, rịọ ya ka o gosi nzọụkwụ ya, ma ọ bụ lelee ya na saịtị ịmụ ihe a pụrụ ịtụkwasị obi ma ọ bụ n'aka onye nkuzi."
          ],
          steps: ["Rịọ maka obere ọnụọgụ ajụjụ, otu n'otu.", "Zaa nke ọ bụla n'onwe gị tupu i chọọ ihe ọ bụla.", "Rịọ AI ka o lelee azịza gị ma kọwaa.", "Ọ bụrụ na azịza ya yiri ka ọ ezighi ezi, rịọ ya ka o gosi nzọụkwụ ma ọ bụ lelee isi iyi ọzọ."],
          words: [["Ajụjụ omume", "ajụjụ ị na-aza iji nyere gị aka icheta ma nwalee ihe ị mụtara."]],
          slides: [
            { title: "Omume ka ịgụghachi mma", bullets: ["Ịza ajụjụ na-ewepụta echiche site n'ebe nchekwa uche gị", "Ị na-echeta karịa"] },
            { title: "Rịọ AI ka ọ jụọ gị ajụjụ", bullets: ["\"Nye m ajụjụ ise, otu n'otu\"", "\"Chere azịza m, wee kọwaa\""] },
            { title: "AI nwekwara ike ịmehie", bullets: ["Rịọ ya ka o gosi nzọụkwụ", "Lelee na saịtị ịmụ ihe ma ọ bụ n'aka onye nkuzi"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka ajụjụ omume atọ gbasara echiche si na Nkuzi 1, otu n'otu. Zaa nke ọ bụla tupu ọ gwa gị azịza ya.",
          youCanNow: "iji ngwa enyemaka AI jụọ onwe gị ajụjụ ma lelee ihe ị mụtara.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ị ga-eji rịọ maka ajụjụ omume otu n'otu?", options: ["AI nwere ike ide naanị otu", "Ọ na-efu obere ego", "Ị na-aza nke ọ bụla tupu ịhụ nke na-esote", "Ọ na-eme ka ajụjụ sie ike karị"], answer: 2, why: "Otu n'otu na-ekwe ka ị zaa ajụjụ ọ bụla n'onwe gị tupu ị gaa n'ihu." },
            { objective: "O2", q: "AI kwuru na 25% nke 80 bụ 25. Gịnị ka ị ga-eme?", options: ["Nabata ya", "Kwụsị ime omume", "Hichapụ mkparịta ụka ahụ", "Rịọ ya ka o gosi nzọụkwụ ma ọ bụ lelee isi iyi ọzọ"], answer: 3, why: "AI nwere ike ime mperi na mgbakọ, ya mere ị na-arịọ maka nzọụkwụ ma ọ bụ lelee isi iyi a pụrụ ịtụkwasị obi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịchọta weebụsaịtị ịmụ ihe n'efu",
          minutes: 4,
          goal: "Chọta weebụsaịtị ịmụ ihe n'efu nwere nkuzi gbasara nka ị chọrọ.",
          text: [
            "AI bụ ezigbo onye enyemaka, mana ọ kacha mma iji ya n'akụkụ ezi nkuzi. Weebụsaịtị ịmụ ihe n'efu na-enye gị ihe ọmụmụ n'usoro, ya na vidiyo na omume.",
            "Khan Academy bụ nzukọ na-anaghị achọ uru ego (nonprofit) nwere ihe ọmụmụ n'efu na mgbakọ, sayensị, ịgụ akwụkwọ, akụnụba, kọmputa na nkwadebe ule. LearnFree nwere nkuzi n'efu ị na-amụ n'ọsọ nke gị gbasara kọmputa, Microsoft Office, ngwa Google, ịchọ ọrụ, ihe ndabere ego, ịgụ akwụkwọ na mgbakọ.",
            "Ọba akwụkwọ ọha gị nwekwara ike inye klas n'efu, onye nkuzi ma ọ bụ akaụntụ ịmụ ihe n'ịntanetị. Ọ bụrụ na ị na-eche maka mahadum (college), jụọ ọfịs enyemaka ego (financial aid) nke ụlọ akwụkwọ ahụ maka enyemaka ịkwụ ụgwọ, ma ọ bụ lee studentaid.gov, saịtị gọọmentị nke U.S. Department of Education (Ngalaba Agụmakwụkwọ US)."
          ],
          steps: ["Kpebie nka ị chọrọ ịmụta.", "Chọọ ya na Khan Academy ma ọ bụ LearnFree.", "Họrọ otu ihe ọmụmụ ma lee nkuzi mbụ ya.", "Jụọ ọba akwụkwọ gị klas n'efu ma ọ bụ onye nkuzi ọ na-enye."],
          words: [["Ọsọ nke gị (self-paced)", "ị na-aga n'ọsọ nke gị, n'oge ọ bụla n'ụbọchị."], ["Nonprofit", "nzukọ na-arụ ọrụ maka ebumnuche, ọ bụghị iji kpatara ndị nwe ya ego."]],
          sources: [
            { name: "Khan Academy: About", url: "https://www.khanacademy.org/about" },
            { name: "LearnFree (nkuzi n'efu ị na-amụ n'ọsọ nke gị)", url: "https://www.learnfree.org/en/" },
            { name: "Federal Student Aid (U.S. Department of Education)", url: "https://studentaid.gov/" }
          ],
          slides: [
            { title: "Jiri AI n'akụkụ ezi nkuzi", bullets: ["Ihe ọmụmụ n'usoro", "Vidiyo na omume"] },
            { title: "Saịtị ịmụ ihe n'efu", bullets: ["Khan Academy: mgbakọ, sayensị, ịgụ akwụkwọ, nkwadebe ule", "LearnFree: kọmputa, ọrụ, ego, ịgụ akwụkwọ, mgbakọ"] },
            { title: "Enyemaka ọzọ n'efu", bullets: ["Klas na onye nkuzi n'ọba akwụkwọ", "Ajụjụ ego mahadum: ọfịs financial aid nke ụlọ akwụkwọ ma ọ bụ studentaid.gov"] }
          ],
          tryIt: "Gaa na Khan Academy ma ọ bụ LearnFree ma chọta otu ihe ọmụmụ gbasara nka ị chọrọ. Meghee nkuzi mbụ ya ma dee aha ya.",
          youCanNow: "ịchọta weebụsaịtị ịmụ ihe n'efu nwere ihe ọmụmụ gbasara nka ị chọrọ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka LearnFree na-enye?", options: ["Nkuzi n'efu gbasara kọmputa, ịchọ ọrụ, ihe ndabere ego, ịgụ akwụkwọ na mgbakọ", "Diplọma mahadum a na-akwụ ụgwọ", "Ekwentị n'efu", "Naanị inye ọrụ"], answer: 0, why: "LearnFree nwere nkuzi n'efu ị na-amụ n'ọsọ nke gị gbasara nka kwa ụbọchị." },
            { objective: "O3", q: "Ị chọrọ enyemaka n'efu, ihu na ihu, iji gụọ akwụkwọ nke ọma. Ebee ka ị ga-ajụ?", options: ["Onye na-ere ụgbọala", "Ọba akwụkwọ ọha gị", "Mgbasa ozi na soshal midia", "Ụlọ akụ"], answer: 1, why: "Ọba akwụkwọ ọha na-enyekarị klas n'efu, onye nkuzi ma ọ bụ akaụntụ ịmụ ihe n'ịntanetị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: AI dị ka onye nkuzi gị",
        questions: [
          { objective: "O1", q: "Nkọwa AI siri ike nke ukwuu. Gịnị ka ị ga-ajụ?", options: ["Ọ dịghị ihe; kwụsị", "\"Kọwaa ya dị ka a ga-asị na m ka na-amalite, site n'ọmụmaatụ gbasara isi nri.\"", "\"Jiri okwu ndị ka ukwuu.\"", "\"Mee ka ọ dị ogologo.\""], answer: 1, why: "Ịgwa ya ọkwa gị na ịrịọ maka ọmụmaatụ kwa ụbọchị na-eme ka o doo anya." },
          { objective: "O2", q: "Gịnị mere omume site n'ajụjụ ji enyere aka karịa ịgụghachi?", options: ["Ọ dị ngwa ịwụfe ya", "Ọ mara mma n'anya", "Ịza ajụjụ na-eme ka ụbụrụ gị wepụtaghachi echiche ahụ, ya mere ị na-echeta karịa", "Ọ na-efu obere ego"], answer: 2, why: "Omume na-eme ka ncheta sie ike." },
          { objective: "O2", q: "AI kwuru na azịza mgbakọ gị ezighi ezi, mana i chere na ọ ziri ezi. Gịnị ka ị ga-eme?", options: ["Rịọ ya ka o gosi nzọụkwụ, ma ọ bụ lelee isi iyi ọzọ", "Tụkwasị AI obi mgbe niile", "Kwụsị ịmụ mgbakọ", "Hichapụ app ahụ"], answer: 0, why: "AI nwere ike ime mperi na mgbakọ; ilele nzọụkwụ na-egosi onye ziri ezi." },
          { objective: "O3", q: "Kedu nke bụ weebụsaịtị ịmụ ihe n'efu nke nonprofit?", options: ["Saịtị ịzụ ahịa", "App soshal midia", "Ụlọ ahịa egwuregwu", "Khan Academy"], answer: 3, why: "Khan Academy bụ saịtị ịmụ ihe n'efu nke nonprofit." },
          { objective: "O3", q: "Gịnị ka self-paced pụtara?", options: ["Ị ga-emecha n'otu ụbọchị", "Ị na-aga n'ọsọ nke gị", "Onye nkuzi na-ekpebi oge niile", "Ị na-akwụ ụgwọ kwa nkeji"], answer: 1, why: "Nkuzi self-paced na-adaba usoro oge nke gị." }
        ]
      }
    },
    {
      name: "Isi 2: Ịmụ ihe dabara ndụ gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi atụmatụ ọmụmụ dabara ndụ nwere ọrụ buru ibu",
          minutes: 5,
          goal: "Mee atụmatụ ọmụmụ izu abụọ dị mfe site n'ngwa enyemaka AI.",
          text: [
            "Ọtụtụ ndị okenye na-amụ ihe ka ha na-arụ ọrụ, na-azụ ụmụ ma na-elekọta ezinụlọ. Obere ọmụmụ na-aga n'ihu mgbe niile ka mma karịa ogologo oge ọmụmụ ị na-agaghị enwe ike ịnọgide na ya.",
            "Rịọ AI maka atụmatụ dabara ezi izu gị: \"Ana m arụ ọrụ n'abalị, enwere m nkeji 20 kwa ụtụtụ. Mee atụmatụ izu abụọ iji mụta ihe ndabere Excel na LearnFree. Otu obere isiokwu kwa ụbọchị, ya na otu ụbọchị izu ike kwa izu.\"",
            "Tinye atụmatụ ahụ n'ebe ị ga-ahụ ya: na kalenda ekwentị gị, na friji, ma ọ bụ n'akwụkwọ ndetu. Kaa akara n'ụbọchị ọ bụla i mechara."
          ],
          steps: ["Họrọ otu nka na otu saịtị ịmụ ihe n'efu.", "Gwa AI oge ole ị nwere na mgbe ọ bụ.", "Rịọ maka atụmatụ izu abụọ nwere otu obere isiokwu kwa ụbọchị na ụbọchị izu ike.", "Tinye ya na kalenda gị ma ọ bụ na friji ma kaa akara n'ụbọchị ọ bụla."],
          words: [["Atụmatụ ọmụmụ", "usoro oge nke ihe ị ga-amụta na mgbe ị ga-amụta ya."]],
          slides: [
            { title: "Obere na mgbe niile na-emeri", bullets: ["Nkeji 20 kwa ụbọchị ka awa 3 otu ugboro mma", "Hazie ya gburugburu ọrụ na ezinụlọ"] },
            { title: "Rịọ AI maka atụmatụ", bullets: ["Nka gị na saịtị ịmụ ihe", "Oge ole na mgbe ọ bụ", "Otu obere isiokwu kwa ụbọchị, ya na ụbọchị izu ike"] },
            { title: "Debe ya n'ebe ị ga-ahụ ya", bullets: ["Kalenda ekwentị, friji ma ọ bụ akwụkwọ ndetu", "Kaa akara n'ụbọchị ọ bụla"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o mee atụmatụ ọmụmụ izu abụọ maka ihe ọmụmụ i chọtara na Nkuzi 3, dabere n'ezi oge ị nwere kwa ụbọchị.",
          youCanNow: "ime atụmatụ ọmụmụ dabara ezi izu gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere obere ọmụmụ mgbe niile ji adaba ndị okenye nwere ọrụ buru ibu?", options: ["Ha na-adị mfe mgbe niile", "Ha anaghị achọ atụmatụ", "Ị nwere ike ịnọgide na ha kwa ụbọchị", "Ha na-anọchi omume"], answer: 2, why: "Obere oge ọmụmụ na-adaba ezi izu, ya mere ị na-aga n'ihu kama ịhapụ." },
            { objective: "O4", q: "Ị nwere naanị nkeji 15 n'oge nri ehihie. Gịnị ka ị ga-agwa AI mgbe ị na-arịọ maka atụmatụ?", options: ["Ọ dịghị ihe gbasara oge gị", "Na ị nwere ike ịmụ ihe awa 3 kwa ụbọchị", "Naanị isiokwu ahụ", "Na ị nwere nkeji 15 n'oge nri ehihie kwa ụbọchị"], answer: 3, why: "Ịgwa AI ezi oge gị na-eme ka o mee atụmatụ ị ga-enwe ike ịgbaso." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Inyere nwata aka ịmụ ihe n'emeghị ọrụ ya",
          minutes: 5,
          goal: "Jiri AI nyere nwata aka ịghọta homework kama inye ya azịza.",
          text: [
            "AI nwere ike inyere gị aka inyere nwa gị aka, ọbụlagodi n'isiokwu ị na-amụtaghị ma ọ bụ i chefuola. Isi ihe bụ iji ya kọwaa ihe, ọ bụghị ime homework ahụ.",
            "Ụlọ akwụkwọ nwere iwu gbasara AI. Ọtụtụ anaghị ekwe ka ụmụ akwụkwọ nyefee ọrụ AI dere. Jụọ onye nkuzi nwa gị ihe iwu ndị ahụ bụ. Lelekwa oke afọ: ọtụtụ ngwa AI bụ naanị maka ndị gbara afọ 13 ma ọ bụ karịa, ụfọdụ na-achọkwa ikike nne ma ọ bụ nna maka ndị nọ n'afọ iri na ụma; gụọ terms (iwu) ngwa ahụ.",
            "Ezigbo prompt maka nne na nna: \"Kọwaa otu esi achọta mpaghara (area) nke rectangle ka m nwee ike ịkụziri nwa m dị afọ 10. Enyela azịza ajụjụ a.\" Ma ọ bụ: \"Nye m ajụjụ atọ dị mfe iji lelee ma nwa m ghọtara.\""
          ],
          steps: ["Gụọ homework ahụ gị na nwa gị.", "Rịọ AI ka ọ kọwaara gị echiche ahụ, ọ bụghị ka o dozie ajụjụ ahụ.", "Kọwaara nwa gị ya n'okwu nke gị.", "Hapụ nwa gị ka o mee ọrụ ahụ; jiri ajụjụ AI mere lelee nghọta ya.", "Gbasoo iwu ụlọ akwụkwọ gbasara iji AI."],
          words: [["Terms", "iwu ị na-ekwenye na ya mgbe ị na-eji app ma ọ bụ weebụsaịtị, gụnyere oke afọ."]],
          slides: [
            { title: "Kọwaa, emela ya", bullets: ["Jiri AI ghọta echiche ahụ n'onwe gị", "Nwa gị na-eme ọrụ ahụ"] },
            { title: "Gbasoo iwu", bullets: ["Jụọ onye nkuzi maka iwu AI", "Ọtụtụ ngwa AI bụ maka ndị gbara afọ 13 gbagowe", "Gụọ terms ngwa ahụ"] },
            { title: "Prompt maka nne na nna", bullets: ["\"Kọwaa nke a ka m nwee ike ịkụziri nwa m dị afọ 10\"", "\"Enyela azịza ya\"", "\"Nye m ajụjụ nlele atọ dị mfe\""] }
          ],
          tryIt: "Were otu isiokwu homework (ma ọ bụ isiokwu si na klas nwa gị). Rịọ AI ka ọ kọwaa ya ka i nwee ike ịkụzi ya, n'edozighị ajụjụ ahụ. Dee otu ị ga-esi kọwaa ya n'okwu nke gị.",
          youCanNow: "iji AI nyere nwata aka ịmụ ihe ma na-agbaso iwu ụlọ akwụkwọ ma hapụ ọrụ ahụ ka ọ bụrụ nke ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ isi iwu maka iji AI na homework nwata?", options: ["Jiri ya kọwaa, ọ bụghị ime ọrụ ahụ", "Hapụ ya ka o dee azịza niile", "Jiri ya naanị n'ule", "Elela homework ahụ anya mgbe ọ bụla"], answer: 0, why: "AI kwesịrị inyere gị aka ịkọwa echiche ahụ; nwa gị ka na-eme ọrụ ahụ." },
            { objective: "O5", q: "Nwa gị dị afọ 11 chọrọ iji ngwa AI naanị ya. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Agba ya", "Oke afọ ya na terms ya, na iwu AI nke ụlọ akwụkwọ", "Otu o si ede ihe ọsọ ọsọ", "Ma o nwere egwuregwu"], answer: 1, why: "Ọtụtụ ngwa AI bụ maka ndị gbara afọ 13 gbagowe, ụlọ akwụkwọ nwekwara iwu nke ha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịnọgide n'ụzọ na ilele ọganihu gị",
          minutes: 5,
          goal: "Lelee ọganihu nke gị ma gbanwee atụmatụ gị.",
          text: [
            "Mgbe otu izu gachara, lee anya azụ. Ụbọchị ndị ole ka ị mụrụ ihe? Gịnị ka ị nwere ike ime ugbu a nke na-enweghị ike ime na mbụ? Obere mmeri dị mkpa.",
            "Rịọ AI ka ọ jụọ gị ajụjụ gbasara izu ahụ niile: \"Amụrụ m isiokwu ise ndị a. Nye m otu ajụjụ maka nke ọ bụla.\" Ajụjụ ndị ị zaghị nke ọma na-egosi gị ihe ị ga-eleghachi anya.",
            "Ọ bụrụ na atụmatụ ahụ karịrị gị, mee ka ọ dị obere. Ọ bụrụ na ọ dị mfe, tinyekwuo ntakịrị. Atụmatụ na-agbanwe ka bụ atụmatụ."
          ],
          steps: ["Gụọ ụbọchị ole ị mụrụ ihe.", "Rịọ AI maka otu ajụjụ maka isiokwu ọ bụla ị mụrụ.", "Kaa akara n'ndị ị zaghị nke ọma ma leghachi ha anya.", "Mee ka atụmatụ ahụ dị obere ma ọ bụ buo ibu ka o dabara ndụ gị."],
          words: [["Ọganihu", "otu ị si gaa n'ihu ruo n'ebumnuche gị."], ["Ileghachi anya (review)", "ịgafe ihe ọzọ iji cheta ya nke ọma."]],
          slides: [
            { title: "Lee anya azụ kwa izu", bullets: ["Ụbọchị ndị ole ka ị mụrụ ihe?", "Gịnị ka ị nwere ike ime ugbu a?", "Obere mmeri dị mkpa"] },
            { title: "Jụọ ajụjụ gbasara izu niile", bullets: ["Otu ajụjụ maka isiokwu ọ bụla", "Ajụjụ ị zaghị na-egosi ihe ị ga-eleghachi anya"] },
            { title: "Gbanwee atụmatụ gị", bullets: ["Ọ karịrị gị? Mee ka ọ dị obere", "Ọ dị mfe nke ukwuu? Tinyekwuo ntakịrị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri ngwa enyemaka AI na otu saịtị ịmụ ihe n'efu mee atụmatụ ọmụmụ izu abụọ gị, wee rịọ maka ajụjụ omume ise gbasara isiokwu mbụ, zaa ha n'onwe gị, ma lelee azịza gị.",
          youCanNow: "ịmụta nka ọhụrụ site n'atụmatụ ọmụmụ, nkuzi n'efu na omume AI, ma na-agbanwe ya ka ị na-aga.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ajụjụ ị zaghị nke ọma n'ule izu na-egosi gị?", options: ["Na ị kwesịrị ịkwụsị", "Na AI ezighi ezi", "Ihe ị ga-eleghachi anya ọzọ", "Na atụmatụ ahụ zuru oke"], answer: 2, why: "Ajụjụ ị zaghị na-egosi isiokwu ị ga-eleghachi anya." },
            { objective: "O6", q: "Atụmatụ gị dị mfe nke ukwuu n'izu a. Gịnị ka ị ga-eme?", options: ["Kwụsị ịmụ ihe", "Malite isiokwu ọhụrụ", "Emela ihe ọ bụla", "Tinyekwuo ntakịrị n'atụmatụ ahụ"], answer: 3, why: "Atụmatụ kwesịrị ịgbanwe ka o dabara gị; ọ bụrụ na ọ dị mfe, tinyekwuo ntakịrị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịmụ ihe dabara ndụ gị",
        questions: [
          { objective: "O4", q: "Kedu atụmatụ ọmụmụ nwere ike ịrụ ọrụ nke ọma maka nne ma ọ bụ nna nwere ọrụ buru ibu?", options: ["Awa atọ kwa abalị", "Nkeji 20 kwa ụbọchị ya na ụbọchị izu ike", "Naanị n'ụbọchị ezumike", "Enweghị atụmatụ ọ bụla"], answer: 1, why: "Obere ọmụmụ mgbe niile na-adaba ndụ nwere ọrụ buru ibu." },
          { objective: "O4", q: "Gịnị ka ị kwesịrị ịgwa AI mgbe ị na-arịọ maka atụmatụ ọmụmụ?", options: ["Okwuntughe gị", "Ozi ụlọ akụ gị", "Nka ahụ, saịtị ahụ na oge ole ị nwere", "Ọ dịghị ihe"], answer: 2, why: "Ozi ndị ahụ na-eme ka atụmatụ ahụ dabara ezi izu gị." },
          { objective: "O5", q: "Nwa gị nwere homework mgbakọ. Kedu ụzọ kacha mma iji AI?", options: ["Mee ka ọ kọwaara gị echiche ahụ ka i nwee ike ịkụzi ya", "Mee ka o deere nwa gị azịza", "Detuo azịza ndị ahụ n'ime homework", "Leghara homework ahụ anya"], answer: 0, why: "Iji AI kọwaa ihe na-eme ka ịmụ ihe na ọrụ ahụ nọgide n'aka nwa gị." },
          { objective: "O5", q: "Ebee ka ị ga-amata iwu ụlọ akwụkwọ gbasara AI?", options: ["Ozi na soshal midia", "AI n'onwe ya", "Onye ị na-amaghị n'ịntanetị", "Jụọ onye nkuzi ma ọ bụ ụlọ akwụkwọ ahụ"], answer: 3, why: "Ụlọ akwụkwọ ọ bụla na-ehiwe iwu nke ya." },
          { objective: "O6", q: "Ule izu gị gosiri na ị zaghị isiokwu abụọ nke ọma. Gịnị na-esote?", options: ["Kwụsị", "Leghachi isiokwu abụọ ndị ahụ anya", "Wụfee ha ruo mgbe ebighị ebi", "Malite nka ọhụrụ"], answer: 1, why: "Ajụjụ ị zaghị na-egosi ihe ị ga-eleghachi anya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Agụmakwụkwọ na Ịmụ Ihe",
    questions: [
      { objective: "O1", q: "Onye nkuzi (tutor) bụ:", options: ["Onye na-enyere otu mmadụ aka ịmụ ihe", "Ụdị kọmputa", "Ule", "Ụlọ akwụkwọ"], answer: 0, why: "Onye nkuzi na-akụziri otu mmadụ ihe n'onwe ya." },
      { objective: "O1", q: "Iji nweta nkọwa doro anya karị, gwa AI:", options: ["Adreesị gị", "Ọkwa gị ma rịọ maka ọmụmaatụ kwa ụbọchị", "Ka o jiri okwu siri ike karị", "Ọ dịghị ihe"], answer: 1, why: "Ọkwa gị na ọmụmaatụ na-eme ka o doo anya karị." },
      { objective: "O1", q: "Ị ghọtara akụkụ azịza mana ọ bụghị ya niile. Kwuo:", options: ["\"Hapụ ya.\"", "\"Mee ka ọ dị ogologo.\"", "Kpọmkwem akụkụ na-agbagwoju gị anya", "\"Jiri ọnụọgụ ndị ọzọ.\""], answer: 2, why: "Ịkpọ aha akụkụ na-agbagwoju anya na-eweta ajụjụ nsochi ka mma." },
      { objective: "O1", q: "Gịnị mere onye nkuzi AI nwere ndidi ji enyere aka?", options: ["Ọ na-enye akara n'ọrụ ụlọ akwụkwọ gị", "Ọ na-enye gị diplọma", "Ọ na-efu ego n'ajụjụ ọ bụla", "Ị nwere ike ịjụ otu ajụjụ ọtụtụ ugboro"], answer: 3, why: "Ike anaghị agwụ ya, ọ naghị ekpekwa gị ikpe." },
      { objective: "O2", q: "Kedu prompt na-eme ka AI jụọ gị ajụjụ nke ọma?", options: ["\"Nye m ajụjụ ise, otu n'otu, ma lelee azịza m.\"", "\"Gwa m azịza niile.\"", "\"Ajụjụ.\"", "\"Mee ule m.\""], answer: 0, why: "Otu n'otu, ya na ilele, bụ ezi omume." },
      { objective: "O2", q: "Tupu AI agwa gị azịza, ị kwesịrị:", options: ["Ịchọ ya", "Ịza ya n'onwe gị", "Ịwụfe ya", "Imechi mkparịta ụka ahụ"], answer: 1, why: "Ibu ụzọ zaa bụ ihe na-eme ka omume rụọ ọrụ." },
      { objective: "O2", q: "Ọ bụrụ na azịza mgbakọ AI yiri ka ọ ezighi ezi:", options: ["Tụkwasị ya obi n'agbanyeghị", "Kwụsị ịmụ ihe", "Rịọ ya ka o gosi nzọụkwụ ma ọ bụ lelee isi iyi ọzọ", "Kọọ enyi gị"], answer: 2, why: "AI nwere ike ime mperi na mgbakọ." },
      { objective: "O3", q: "Khan Academy bụ:", options: ["Mahadum a na-akwụ ụgwọ", "Egwuregwu", "Ụlọ ahịa", "Saịtị ịmụ ihe n'efu nke nonprofit"], answer: 3, why: "Ọ na-enye ihe ọmụmụ n'efu dị ka nonprofit." },
      { objective: "O3", q: "LearnFree na-enye nkuzi n'efu gbasara:", options: ["Kọmputa, ịchọ ọrụ, ihe ndabere ego, ịgụ akwụkwọ na mgbakọ", "Naanị isi nri", "Naanị egwuregwu", "Ọ dịghị ihe maka ndị okenye"], answer: 0, why: "LearnFree na-ekpuchi ọtụtụ nka kwa ụbọchị na nka ọrụ." },
      { objective: "O3", q: "Ebee ọzọ ka ị nwere ike ịchọta klas n'efu ma ọ bụ onye nkuzi?", options: ["Ebe a na-asa ụgbọala", "Ọba akwụkwọ ọha gị", "Ọnụ ụzọ ụlọ akụ", "Mgbasa ozi na-apụta na mberede"], answer: 1, why: "Ọba akwụkwọ na-enyekarị klas n'efu na onye nkuzi." },
      { objective: "O3", q: "Maka ajụjụ gbasara ịkwụ ụgwọ mahadum, ebee ka ị nwere ike ile?", options: ["Weebụsaịtị ọ bụla na-arịọ ụgwọ", "Ozi ederede site n'aka onye ị na-amaghị", "Ọfịs financial aid nke ụlọ akwụkwọ ma ọ bụ studentaid.gov", "Egwuregwu vidiyo"], answer: 2, why: "Ndị ahụ bụ isi iyi gọọmentị na nke ụlọ akwụkwọ n'onwe ya." },
      { objective: "O4", q: "Ezigbo atụmatụ ọmụmụ maka ọtụtụ ndị okenye bụ:", options: ["Awa ise kwa Sọnde", "Mgbe ọ bụla ọ masịrị gị", "Ihe niile n'otu abalị", "Obere ọmụmụ kwa ụbọchị ya na ụbọchị izu ike"], answer: 3, why: "Obere ọmụmụ mgbe niile dị mfe ịnọgide na ya." },
      { objective: "O4", q: "Ebee ka ị kwesịrị idebe atụmatụ ọmụmụ gị?", options: ["N'ebe ị ga-ahụ ya, dị ka kalenda ma ọ bụ friji", "Zoro ezo n'ime drọwa", "Naanị n'isi gị", "N'ime ebe a na-atụ ahịhịa"], answer: 0, why: "Ịhụ ya na-echetara gị ịmụ ihe." },
      { objective: "O4", q: "Mgbe ị na-arịọ AI maka atụmatụ ọmụmụ, tinye:", options: ["Nọmba Social Security gị", "Oge ole ị nwere n'ezie na mgbe ọ bụ", "PIN ụlọ akụ gị", "Adreesị gị zuru ezu"], answer: 1, why: "Ezi oge gị na-eme atụmatụ ị ga-enwe ike ịgbaso." },
      { objective: "O5", q: "Ọtụtụ ngwa AI nwere oke afọ nke:", options: ["Afọ 5 gbagowe", "Afọ 10 gbagowe", "Afọ 13 gbagowe, mgbe ụfọdụ ya na ikike nne ma ọ bụ nna", "Enweghị oke ọ bụla mgbe ọ bụla"], answer: 2, why: "Ọtụtụ ngwa AI bụ maka ndị gbara afọ 13 gbagowe; lelee terms nke ngwa ọ bụla." },
      { objective: "O5", q: "Mgbe ị na-eji AI na homework nwa gị, AI kwesịrị:", options: ["Ide homework ahụ", "Ide ule ahụ", "Izigara onye nkuzi email n'aha gị", "Ịkọwa echiche ahụ, ọ bụghị ime ọrụ ahụ"], answer: 3, why: "Ịkọwa ihe na-eme ka ịmụ ihe nọgide n'aka nwa gị." },
      { objective: "O5", q: "Kedu nke bụ ezigbo prompt nne ma ọ bụ nna?", options: ["\"Kọwaa nke a ka m nwee ike ịkụziri nwa m dị afọ 10. Enyela azịza ya.\"", "\"Mee homework nwa m.\"", "\"Dee edemede ahụ.\"", "\"Nye azịza niile.\""], answer: 0, why: "Ọ na-arịọ nkọwa, ọ bụghị azịza." },
      { objective: "O6", q: "Na njedebe izu ọmụmụ, ị kwesịrị:", options: ["Ihichapụ ndetu gị", "Ilegharị anya n'ihe i mere ma jụọ onwe gị ajụjụ", "Ịmalitegharị site na mbido", "Ịkwụsị ịmụ ihe"], answer: 1, why: "Ile anya azụ na-egosi ọganihu na ihe ị ga-eleghachi anya." },
      { objective: "O6", q: "Atụmatụ gị karịrị izu gị. Gịnị ka ị ga-eme?", options: ["Kwụsị", "Nwee mwute", "Mee ka ọ dị obere", "Mee ka ọ bụrụ okpukpu abụọ"], answer: 2, why: "Atụmatụ kwesịrị ịdaba ndụ gị; ịgbanwe ya bụ ihe nkịtị." },
      { objective: "O2", q: "N'ọrụ ikpeazụ, mgbe AI nyere ajụjụ omume ise, ị na-:", options: ["Detuo azịza ya", "Wụfee ha", "Kesaa ha n'ịntanetị", "Zaa ha n'onwe gị, wee lelee azịza gị"], answer: 3, why: "Ịza n'onwe gị na ilele na-egosi na ị mụtara ihe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      4,
      7,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Saịtị ịmụ ihe n'efu",
        objective: "O3",
        notYet: "Enweghị saịtị ịmụ ihe, ma ọ bụ nke a na-akwụ ụgwọ.",
        meets: "Na-akpọ aha otu saịtị ịmụ ihe n'efu na ihe ọmụmụ ma ọ bụ nkuzi e jiri.",
        exceeds: "Na-akpọkwa aha klas n'efu ma ọ bụ onye nkuzi n'ọba akwụkwọ."
      },
      {
        name: "Atụmatụ izu abụọ",
        objective: "O4",
        notYet: "Enweghị atụmatụ, ma ọ bụ atụmatụ na-adabaghị ezi oge onye na-amụ ihe.",
        meets: "Izu abụọ, ihe dị ka nkeji 20 kwa ụbọchị, otu obere isiokwu kwa ụbọchị, ya na ụbọchị izu ike.",
        exceeds: "E tinyere ya na kalenda ma ọ bụ na friji, e kakwara akara n'ụbọchị ndị gafere."
      },
      {
        name: "Ajụjụ omume",
        objective: "O2",
        notYet: "Buru ụzọ lee azịza, ma ọ bụ azaghị ajụjụ ndị ahụ.",
        meets: "Zara ajụjụ ise tupu ilele, ma lelee nke ọ bụla.",
        exceeds: "Rịọrọ AI ka o gosi nzọụkwụ n'azịza ọ bụla yiri ka ọ ezighi ezi."
      },
      {
        name: "Nlele ọganihu",
        objective: "O6",
        notYet: "Elegharịghị anya n'ihe a zaghị nke ọma.",
        meets: "Na-edepụta ajụjụ a zaghị nke ọma na ihe a ga-eleghachi anya.",
        exceeds: "Na-ekwu otu atụmatụ ahụ ga-esi gbanwee dabere na nsonaazụ ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe gbasoro atụmatụ ọmụmụ ha opekata mpe ụbọchị 10 n'ime 14 (nnyocha nsochi)",
      "Ndị na-amụ ihe debanyere aha n'ihe ọmụmụ n'efu, klas GED ma ọ bụ bekee, ma ọ bụ mmemme mahadum n'ime ụbọchị 90",
      "Nne na nna na-akọ na ha nyere nwata aka na homework site n'iji AI kọwaa ihe, ọ bụghị inye azịza"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke ebe obodo",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Weebụsaịtị ịmụ ihe n'efu dị ka Khan Academy ma ọ bụ LearnFree",
      "Akwụkwọ ndetu ma ọ bụ kalenda maka atụmatụ ọmụmụ",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Malite site n'ịjụ onye ọ bụla na-amụ ihe ihe ọ chọrọ ịmụta, ma jiri nka ahụ n'ọrụ omume ọ bụla.",
      "Gosi otu esi arịọ nkọwa dị mfe karị; ọtụtụ ndị na-amụ ihe na-eme ihere ịjụ ọzọ.",
      "Maka nne na nna, kwusie ike na AI na-akọwa ihe, nwata na-eme ọrụ ahụ, iwu ụlọ akwụkwọ na-ebukwa ụzọ.",
      "Lelee ha mgbe otu izu gachara ka ịhụ ndị gbasoro atụmatụ ha, ma nyere ha aka mee ka ọ dị obere ma ọ bụ buo ibu.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
