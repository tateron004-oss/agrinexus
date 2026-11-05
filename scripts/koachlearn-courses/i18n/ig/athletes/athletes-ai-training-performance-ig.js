"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-training-performance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-training-performance-ig",
  lang: "ig",
  translationOf: "athletes-ai-training-performance",
  category: "Athletes",
  name: "AI maka Mmega Ahụ na Ịrụ Ọrụ Nke Ọma n'Egwuregwu",
  skills: "Ịtọ ebumnuche mmega ahụ a na-atụ atụ, Idekọ data mmega ahụ, Ịgụ ụzọ data mmega ahụ dị mfe, Iji AI dee ajụjụ banyere izu mmega ahụ maka onye nkuzi gị, Ịhụ ndụmọdụ mmega ahụ AI na-adịghị mma",
  outcome: "ịtọ otu ebumnuche a na-atụ atụ, idekọ data mmega ahụ izu anọ na shiit (sheet), iji ngwa enyemaka AI chịkọta ụzọ data ahụ na-aga, na iweta ajụjụ doro anya na nke enweghị ihe egwu banyere mmega ahụ gị nye onye nkuzi (coach) gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu chọrọ iji amamihe mee mmega ahụ, na ndị nkuzi (coach) chọrọ ka ndị egwuregwu ha ghọta nọmba nke ha. Ọ bụ agụmakwụkwọ n'ozuzu, ọ bụghị atụmatụ mmega ahụ: onye nkuzi gị na onye na-elekọta ahụike ndị egwuregwu (athletic trainer) na-ahazi mmega ahụ gị.",
    "Ị ga-amụta ịtọ ebumnuche ị nwere ike ịtụ, idekọ nọmba ndị kwesịrị ekwesị, ịhụ ihe ha na-ekwu, na iji ngwa enyemaka AI hazie data gị ma kwadebe mkparịta ụka ka mma gị na onye nkuzi gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwekwa ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu ebumnuche a na-atụ atụ, dekọọ data mmega ahụ nke opekata mpe oge mmega anọ na Google Sheet (ụbọchị, ihe i mere, mgbalị 1-10, nsonaazụ), rịọ ngwa enyemaka AI ka ọ kọwaa ụzọ data ahụ na-aga n'okwu dị mfe, ma dee ajụjụ atọ banyere oge mmega ahụ gị na-esote ka i wetara onye nkuzi gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na klọb chọrọ iji amamihe mee mmega ahụ, na ndị nkuzi chọrọ ka ndị egwuregwu ha ghọta nọmba nke ha.",
    startingPoint: "Ha na-eme mmega ahụ mgbe niile n'okpuru onye nkuzi ma na-eji smartphone kwa ụbọchị. Ọtụtụ nwere ebumnuche dị ka \"ịgba ọsọ ọsọ karị\" mana enweghị nọmba a na-atụ atụ, enweghị akwụkwọ ndekọ mmega ahụ kwụsiri ike, ha anaghịkwa amụ ịgụ chaatị ma ọ bụ ịtụle ndụmọdụ mmega ahụ dị n'ịntanetị.",
    gap: "N'enweghị ebumnuche a na-atụ atụ na akwụkwọ ndekọ dị mfe, ndị egwuregwu enweghị ike ịhụ ma mmega ahụ na-arụ ọrụ, AI ma ọ bụ atụmatụ ịntanetị nwekwara ike inye ndụmọdụ nwere ihe egwu. Nọmba doro anya na ajụjụ enweghị ihe egwu na-eme ka mkparịta ụka na onye nkuzi ka mma ma na-echebe ahụike onye egwuregwu ahụ.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 7",
      "Ekwentị ma ọ bụ kọmputa nwere Google Sheets n'efu na ngwa enyemaka AI n'efu",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere izu anọ nke ndekọ n'akụkụ mmega ahụ nkịtị",
      "Naanị agụmakwụkwọ n'ozuzu: onye nkuzi na athletic trainer na-ahazi mmega ahụ, ibu na ịlọghachi mgbe mmerụ ahụ gasịrị",
      "Data ahụike na ndekọ na-anọ na nzuzo, a naghịkwa etinye ha n'ime ngwa enyemaka AI mgbe ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Ngwa AI maka Ndị Egwuregwu\" ga-enyere aka ma ọ bụrụ na ijibeghị Google Sheets mgbe ọ bụla."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ebumnuche mmega ahụ na-edoghị anya", action: "ideghachi ya dị ka otu ebumnuche a na-atụ atụ nwere nọmba, ụbọchị na nnwale", standard: "na akụkụ anọ niile dị n'ime ya, gị na onye nkuzi gị kwekọkwara na ebumnuche ahụ" },
    { id: "O2", condition: "Site n'iji Google Sheets", action: "ịhazi na idebe akwụkwọ ndekọ mmega ahụ nwere Ụbọchị, Mmega, Mgbalị na Nsonaazụ", standard: "na-ejupụta otu ahịrị mgbe oge mmega ọ bụla gasịrị, opekata mpe oge mmega anọ" },
    { id: "O3", condition: "Mgbe e nyere gị chaatị nke akwụkwọ ndekọ mmega ahụ gị", action: "ịkọwa ụzọ data ahụ na-aga n'ahịrịokwu otu ma ọ bụ abụọ ma tụnyere mgbalị na nsonaazụ", standard: "na-akpọ ụzọ ahụ aha nke ọma ma na-elele mgbakọ AI ọ bụla n'onwe gị" },
    { id: "O4", condition: "Mgbe e nyere gị ndepụta ọrụ mmega ahụ", action: "ịmata ọrụ ndị AI nwere ike inyere aka na ndị bụ nke onye nkuzi gị ma ọ bụ athletic trainer gị", standard: "na-enweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O5", condition: "Mgbe e nyere gị ndụmọdụ mmega ahụ sitere n'AI ma ọ bụ n'ịntanetị", action: "ịmata ihe ịdọ aka na ntị dị ka ime mmega n'ime ihe mgbu, ibelata mmiri ọṅụṅụ ma ọ bụ ọgwụ mgbakwunye nwere ihe egwu", standard: "na-ahụ ihe ịdọ aka na ntị ọ bụla ma were ya gaa n'aka onye nkuzi gị ma ọ bụ athletic trainer gị kama ime ya" },
    { id: "O6", condition: "Site n'iji ebumnuche gị, akwụkwọ ndekọ gị na ngwa enyemaka AI", action: "ide ozi nkọwa ahịrịokwu atọ nye onye nkuzi gị na ajụjụ atọ banyere oge mmega ahụ gị na-esote", standard: "n'okwu nke gị, n'ekesaghị ndekọ ahụike ọ bụla, ma jiri azịza onye nkuzi gị melite atụmatụ gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ebumnuche na data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịtọ ebumnuche ị nwere ike ịtụ",
          minutes: 5,
          goal: "Gbanwee ebumnuche na-edoghị anya ka ọ bụrụ nke a na-atụ atụ nwere ụbọchị.",
          text: [
            "\"Ịgba ọsọ ọsọ karị\" bụ ọchịchọ. \"Ịgba ọsọ yaadị 40 ngwa ngwa karị site na sekọnd 0.1 tupu oge mmega tupu asọmpi (preseason) agwụ, a na-atụ ya otu ụzọ ahụ oge ọ bụla\" bụ ebumnuche ị nwere ike ịtụ.",
            "Ezigbo ebumnuche mmega ahụ na-akpọ otu ihe aha, nọmba, ụbọchị, na otu a ga-esi tụọ ya. Gị na onye nkuzi gị kwesịrị ikwekọ na ya ka o dabara n'atụmatụ otu egwuregwu ahụ.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ideghachi ebumnuche na-edoghị anya. Nwaa: \"Gbanwee ebumnuche m 'ịka sie ike maka bọọlụ ụkwụ' ka ọ bụrụ otu ebumnuche a na-atụ atụ nwere ụbọchị. Jụọ m ajụjụ ma ọ bụrụ na ị chọrọ ozi ọzọ.\""
          ],
          steps: ["Dee ebumnuche gị n'okwu nke gị.", "Tinye otu nọmba a ga-atụ.", "Tinye ụbọchị.", "Kwuo otu na mgbe a ga-anwale ya.", "Gị na onye nkuzi gị kwekọọ na ya."],
          words: [["A na-atụ atụ (measurable)", "ihe ị nwere ike ịgụ ọnụ ma ọ bụ tụọ oge ya, ka ị mara ma ọ gbanwere."], ["Nọmba mmalite (baseline)", "nọmba gị na mmalite tupu ị malite mmega ahụ maka ebumnuche ahụ."]],
          slides: [
            { title: "Ọchịchọ na ebumnuche", bullets: ["Ọchịchọ: \"ịgba ọsọ ọsọ karị\"", "Ebumnuche: \"yaadị 40 ngwa ngwa karị site na sekọnd 0.1 tupu preseason agwụ\""] },
            { title: "Ebumnuche nwere", bullets: ["Otu ihe", "Nọmba na ụbọchị", "Otu a ga-esi nwale ya"] },
            { title: "Jiri AI mee ka ọ doo anya", bullets: ["\"Mee ka ebumnuche m bụrụ nke a na-atụ atụ\"", "Wee kwekọọ na ya gị na onye nkuzi gị"] }
          ],
          tryIt: "Dee otu ebumnuche na-edoghị anya. Rịọ ngwa enyemaka AI ka o mee ka ọ bụrụ nke a na-atụ atụ nwere ụbọchị. Gbanwee ya ka ọ bụrụ eziokwu gbasara gị, wee dee nọmba mmalite gị ma ọ bụrụ na ị maara ya.",
          youCanNow: "ide ebumnuche mmega ahụ a na-atụ atụ nwere nọmba, ụbọchị na nnwale.",
          quickCheck: [
            { objective: "O1", q: "Kedu akụkụ na-eme ka \"ịka sie ike\" bụrụ ebumnuche a na-atụ atụ?", options: ["Itinye okwu \"nke ukwuu\"", "Itinye nọmba, ụbọchị na otu a ga-esi nwale ya", "Itinye ya n'ịntanetị", "Ime ka ọ dị ogologo"], answer: 1, why: "Ebumnuche a na-atụ atụ na-akpọ otu ihe aha, nọmba, ụbọchị na otu a ga-esi tụọ ya." },
            { objective: "O1", q: "I jiri enyemaka AI dee ebumnuche a na-atụ atụ. Gịnị ka ị ga-eme ọzọ?", options: ["Malite mmega ahụ maka ya naanị gị", "Rịọ AI ka o kwado ya", "Debe ya na nzuzo", "Gị na onye nkuzi gị kwekọọ na ya"], answer: 3, why: "Gị na onye nkuzi gị kwesịrị ikwekọ n'ebumnuche gị ka o dabara n'atụmatụ otu egwuregwu ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Idekọ data mmega ahụ kwesịrị ekwesị",
          minutes: 5,
          goal: "Hazie akwụkwọ ndekọ mmega ahụ dị mfe nke ị ga-ebe n'ezie.",
          text: [
            "Data na-aba uru naanị ma ọ bụrụ na ị na-anakọta ya otu ụzọ ahụ oge ọ bụla. Akwụkwọ ndekọ dị mfe ka app mara mma nke ị kwụsịrị iji mgbe otu izu gasịrị.",
            "Kọlụm anọ ezuola ịmalite: Ụbọchị, Mmega (ihe i mere), Mgbalị (otu o siri sie ike, 1 ruo 10), na Nsonaazụ (nọmba maka ebumnuche gị). Ụfọdụ ndị egwuregwu na-agbakwunye awa ụra ma ọ bụ obere ndetu.",
            "Ngwaọrụ a na-eyi n'ahụ (wearables) dị ka elekere na eriri na-atụ obi ọkụ nwere ike ịgbakwunye data, mana ha ezughị oke. Were nọmba ha dị ka ihe nrịbama, ọ bụghị eziokwu zuru oke, ma debe data ahụike gị na nzuzo."
          ],
          steps: ["Meghee Google Sheets.", "Mee kọlụm: Ụbọchị, Mmega, Mgbalị (1-10), Nsonaazụ.", "Jupụta otu ahịrị mgbe oge mmega ọ bụla gasịrị.", "Debe ya n'otu ebe ahụ n'ekwentị gị ka ọ na-ewe naanị otu nkeji."],
          words: [["Akara mgbalị", "akara 1 ruo 10 maka otu oge mmega siri sie ike; ndị nkuzi na-akpọkarị ya RPE (rating of perceived exertion)."], ["Ngwaọrụ a na-eyi n'ahụ (wearable)", "ngwaọrụ ị na-eyi, dị ka elekere, na-atụ ihe dị ka obi ọkụ ma ọ bụ nzọụkwụ."]],
          slides: [
            { title: "Ihe dị mfe ka nke mara mma", bullets: ["Otu ụzọ ahụ, oge ọ bụla", "Otu nkeji mgbe oge mmega ọ bụla gasịrị"] },
            { title: "Kọlụm anọ", bullets: ["Ụbọchị", "Mmega", "Mgbalị 1-10", "Nsonaazụ"] },
            { title: "Banyere wearables", bullets: ["Ihe nrịbama bara uru, ọ bụghị eziokwu zuru oke", "Debe data ahụike na nzuzo"] }
          ],
          tryIt: "Mepụta akwụkwọ ndekọ mmega ahụ gị na Google Sheets nwere kọlụm anọ ahụ. Jupụta oge mmega abụọ ma ọ bụ atọ gị ikpeazụ site n'ihe i chetara ma ọ bụ ndetu gị.",
          youCanNow: "idebe akwụkwọ ndekọ mmega ahụ dị mfe na nke kwụsiri ike.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-aba na kọlụm Nsonaazụ n'akwụkwọ ndekọ gị?", options: ["Nọmba maka ebumnuche gị", "Otu o siri sie ike", "Ihe i riri", "Aha onye nkuzi gị"], answer: 0, why: "Nsonaazụ na-ejide nọmba ị na-esochi maka ebumnuche gị." },
            { objective: "O2", q: "Ị na-echefu ijupụta akwụkwọ ndekọ gị. Gịnị na-enyere aka kacha?", options: ["Gbanwee gaa n'app mara mma karị", "Jupụta ya otu ugboro n'ọnwa site n'ihe i chetara", "Debe ya n'otu ebe ahụ n'ekwentị gị ma jupụta otu ahịrị ozugbo oge mmega ọ bụla gasịrị", "Kwụsị idekọ"], answer: 2, why: "Akwụkwọ ndekọ dị mfe nke ị na-ejupụta otu ụzọ ahụ oge ọ bụla bụ nke ị ga-ebe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịgụ ụzọ data mmega ahụ gị na-aga",
          minutes: 5,
          goal: "Gụọ chaatị nke data gị ma kọwaa ihe ọ na-egosi n'ahịrịokwu otu ma ọ bụ abụọ.",
          text: [
            "Mgbe izu ole na ole gasịrị, mee chaatị nke kọlụm Nsonaazụ gị site n'ụbọchị. Lee ụzọ ọ na-aga: elu, ala ma ọ bụ ọ kwụ otu ebe. Otu ụbọchị ọjọọ apụtaghị ihe dị ukwuu; lee ahịrị ahụ n'ozuzu.",
            "Tụnyere Mgbalị na Nsonaazụ. Ọ bụrụ na mgbalị na-arị elu mana nsonaazụ na-akwụ otu ebe ma ọ bụ na-ada, ike nwere ike ịgwụ gị, nke ahụ bụkwa ihe ị ga-agwa onye nkuzi gị.",
            "Ị nwere ike itinye tebụl gị (na-enweghị aha ma ọ bụ ndekọ ahụike) n'ime ngwa enyemaka AI ma jụọ: \"Kọwaa ụzọ data mmega ahụ a na-aga n'okwu dị mfe. Ajụjụ gịnị ka m kwesịrị ịjụ onye nkuzi m?\" Lelee mgbakọ ya n'onwe gị."
          ],
          steps: ["Họrọ Ụbọchị na Nsonaazụ ma tinye chaatị ahịrị (line chart).", "Kwuo ụzọ ọ na-aga: elu, ala ma ọ bụ ọ kwụ otu ebe.", "Tụnyere Mgbalị na Nsonaazụ.", "Dee nchịkọta otu ahịrịokwu."],
          words: [["Ụzọ data na-aga (trend)", "ụzọ nọmba gị na-aga n'ozuzu ka oge na-aga."], ["Nkwụsị ọganihu (plateau)", "mgbe nsonaazụ kwụsịrị ịka mma ruo oge ụfọdụ."]],
          slides: [
            { title: "Lee ahịrị ahụ", bullets: ["Elu, ala ma ọ bụ ọ kwụ otu ebe?", "Otu ụbọchị ọjọọ abụghị ụzọ data na-aga"] },
            { title: "Mgbalị na nsonaazụ", bullets: ["Mgbalị na-arị elu, nsonaazụ kwụ otu ebe ma ọ bụ na-ada?", "Ike nwere ike ịgwụ gị: gwa onye nkuzi gị"] },
            { title: "AI nwere ike ịkọwa ya", bullets: ["Tinye tebụl ahụ, na-enweghị aha ma ọ bụ ndekọ ahụike", "Lelee mgbakọ ya n'onwe gị"] }
          ],
          tryIt: "Mee chaatị nke kọlụm Nsonaazụ gị. Dee otu ahịrịokwu na-akọwa ụzọ ọ na-aga. Wee rịọ ngwa enyemaka AI ka ọ kọwaa ya, ma tụnyere ahịrịokwu ya na nke gị.",
          youCanNow: "ime chaatị nke data mmega ahụ gị ma kọwaa ụzọ ọ na-aga n'okwu dị mfe.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ị ga-ebu ụzọ lee na chaatị mmega ahụ gị?", options: ["Otu ụbọchị kacha njọ", "Agba ndị ahụ", "Ụzọ ọ na-aga n'ozuzu: elu, ala ma ọ bụ ọ kwụ otu ebe", "Aha chaatị ahụ"], answer: 2, why: "Otu ụbọchị ọjọọ apụtaghị ihe dị ukwuu; ahịrị ahụ n'ozuzu na-egosi ụzọ data na-aga." },
            { objective: "O3", q: "Ị na-etinye tebụl gị n'ime ngwa enyemaka AI. Gịnị ka ị ga-ebu ụzọ wepụ?", options: ["Aha na ndekọ ahụike", "Ụbọchị ndị ahụ", "Kọlụm Nsonaazụ", "Ọ dịghị ihe"], answer: 0, why: "Hapụ aha na ndekọ ahụike n'ime ngwa AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ebumnuche na data",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ebumnuche a na-atụ atụ?", options: ["Ịka mma", "Ịbụ anụ ọhịa", "Ịbanye 16 n'ime 20 free throw tupu Jenụwarị 15, a nwalee ya n'oge mmega", "Ịrụsi ọrụ ike"], answer: 2, why: "O nwere nọmba, ụbọchị na nnwale." },
          { objective: "O1", q: "Gịnị bụ nọmba mmalite (baseline)?", options: ["Nọmba gị na mmalite tupu ị malite mmega ahụ maka ebumnuche ahụ", "Ahịrị azụ nke ama egwuregwu", "Ụbọchị gị kacha mma", "Nkezi nke otu egwuregwu"], answer: 0, why: "Nọmba mmalite na-egosi ebe i si malite." },
          { objective: "O2", q: "Kedu akwụkwọ ndekọ mmega ahụ kacha baa uru?", options: ["Nke mara mma nke ị kwụsịrị mgbe otu izu gasịrị", "Nke ị na-ejupụta otu ugboro n'oge egwuregwu", "Nke ị na-eche echiche", "Nke dị mfe nke ị na-ejupụta oge ọ bụla"], answer: 3, why: "Data a na-anakọta otu ụzọ ahụ mgbe niile bụ ihe na-eme ka ụzọ data na-aga baa uru." },
          { objective: "O2", q: "Otu ị kwesịrị isi were nọmba si na wearable?", options: ["Dị ka eziokwu zuru oke", "Dị ka ihe nrịbama bara uru mana ezughị oke", "Dị ka ndụmọdụ ọgwụ", "Dị ka ihe ị ga-etinye n'ịntanetị"], answer: 1, why: "Wearables na-enyere aka mana ha nwere ike ịghara iziri ezi." },
          { objective: "O3", q: "Akara mgbalị gị na-arị elu mana oge ọsọ gị na-adị ogologo karị. Gịnị ka ị ga-eme?", options: ["Mee mmega ahụ okpukpu abụọ", "Gwa onye nkuzi gị; ike nwere ike ịgwụ gị", "Kwụsị idekọ", "Leghara ya anya"], answer: 1, why: "Mgbalị na-arị elu ebe nsonaazụ na-ada nwere ike igosi ike ọgwụgwụ, nke onye nkuzi gị kwesịrị ịma." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI gị na onye nkuzi gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ihe AI nwere ike na ihe ọ na-enweghị ike ime maka mmega ahụ",
          minutes: 4,
          goal: "Kewaa ọrụ mmega ahụ n'ime ndị AI nwere ike inyere aka na ndị bụ nke onye nkuzi gị ma ọ bụ athletic trainer gị.",
          text: [
            "Ngwa enyemaka AI maara ịhazi ihe nke ọma: ime ka ndetu bụrụ tebụl, ịkọwa okwu mmega ahụ, ịchịkọta akwụkwọ ndekọ gị, ma ọ bụ ide ajụjụ maka onye nkuzi gị.",
            "Ha amaghị ahụ gị nke ọma. Ha enweghị ike ịhụ otu i si eme mmega (form), akụkọ mmerụ ahụ gị ma ọ bụ otu i si hie ụra, atụmatụ n'ozuzu si n'ịntanetị nwekwara ike ịghara idaba n'afọ gị, ọkwa gị ma ọ bụ oge egwuregwu gị.",
            "Ya mere jiri AI ghọta ma kwadebe, ma hapụ onye nkuzi gị na athletic trainer gị ka ha kpebie mmega gị, ibu gị na ịlọghachi gị mgbe mmerụ ahụ gasịrị."
          ],
          words: [["Ibu mmega ahụ (training load)", "otu i si eme mmega ahụ nke ukwuu na nke siri ike ka oge na-aga."], ["Athletic trainer", "ọkachamara ahụike nwere ikikere na-egbochi, na-agwọ, ma na-enyere ndị egwuregwu aka ịgbake site na mmerụ ahụ."]],
          slides: [
            { title: "AI maara nke ọma", bullets: ["Ịhazi ndetu ka ọ bụrụ tebụl", "Ịkọwa okwu mmega ahụ", "Ịchịkọta akwụkwọ ndekọ gị", "Ide ajụjụ maka onye nkuzi gị"] },
            { title: "AI enweghị ike", bullets: ["Ịhụ otu i si eme mmega (form)", "Ịmara akụkọ mmerụ ahụ gị", "Ịmara otu ahụ dị gị taa"] },
            { title: "Onye na-ekpebi", bullets: ["Onye nkuzi: mmega na ibu", "Athletic trainer: mmerụ ahụ na ịlọghachi n'egwuregwu"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka ọ kọwaa otu okwu mmega ahụ ị nụrụ (dịka ọmụmaatụ \"periodization\" ma ọ bụ \"deload week\") n'okwu dị mfe. Dee otu ajụjụ banyere ya maka onye nkuzi gị.",
          youCanNow: "ikwu ọrụ mmega ahụ ndị AI nwere ike inyere aka na ndị bụ nke onye nkuzi gị ma ọ bụ athletic trainer gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu n'ime ndị a ka ngwa enyemaka AI nwere ike ime nke ọma maka mmega ahụ?", options: ["Ịhụ otu i si eme mmega n'oge mmega", "Ịmara akụkọ mmerụ ahụ gị", "Ikpebi ịlọghachi gị mgbe mmerụ ahụ gasịrị", "Ịkọwa okwu mmega ahụ"], answer: 3, why: "AI maara ịhazi na ịkọwa ihe, ọ bụghị ịmara ahụ gị." },
            { objective: "O4", q: "Ngwa enyemaka AI nyere gị atụmatụ ibuli ihe dị arọ karịa nke onye nkuzi gị dere. Gịnị ka ị ga-eme?", options: ["Soro atụmatụ AI", "Jiri ya kwadebe ajụjụ ma hapụ onye nkuzi gị ka o kpebie", "Mee atụmatụ abụọ ahụ", "Kwụsị ibuli ihe"], answer: 1, why: "Jiri AI ghọta ma kwadebe; onye nkuzi gị na-ekpebi mmega na ibu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhụ ndụmọdụ mmega ahụ AI na-adịghị mma",
          minutes: 5,
          goal: "Mata ihe ịdọ aka na ntị na ndụmọdụ mmega ahụ sitere n'AI ma ọ bụ n'ịntanetị.",
          text: [
            "AI na atụmatụ ịntanetị nwere ike inye ndụmọdụ karịrị akarị, na-aga ngwa ngwa nke ukwuu, ma ọ bụ nke na-adabaghị maka ndị egwuregwu na-eto eto ma ọ bụ ndị merụrụ ahụ. Ị kwesịrị ịhụ ya.",
            "Ihe ịdọ aka na ntị: ime mmega n'ime ihe mgbu dị nkọ; mmụba mmega ahụ dị ukwuu n'otu mgbe; ibelata nri ma ọ bụ mmiri ọṅụṅụ iji nweta ibu ahụ a chọrọ; ọgwụ mgbakwunye na-ekwe nkwa nsonaazụ ngwa ngwa; \"enweghị ụbọchị ezumike\"; na atụmatụ ọ bụla na-eleghara ihe onye nkuzi gị dere anya.",
            "Ọgwụ mgbakwunye (supplements) nwere ihe egwu pụrụ iche: FDA (ụlọ ọrụ gọọmentị US na-ahụ maka nri na ọgwụ) anaghị elele ha tupu a na-ere ha, ụfọdụ nwekwara ihe ndị a machibidoro iwu. Kparịta ụka na athletic trainer gị ma ọ bụ onye ọkachamara n'ihe oriri nwere ikikere (registered dietitian) tupu ị ṅụọ nke ọ bụla."
          ],
          steps: ["Gụọ ndụmọdụ ahụ nwayọọ.", "Tụnyere ya na ndepụta ihe ịdọ aka na ntị.", "Ọ bụrụ na ihe ịdọ aka na ntị ọ bụla pụtara, esoro ya.", "Were ya gaa n'aka onye nkuzi gị ma ọ bụ athletic trainer gị."],
          words: [["Ihe ịdọ aka na ntị (red flag)", "akara na-egosi na ihe nwere ihe egwu ma ọ bụ na ọ dịghị mma."], ["Ọgwụ mgbakwunye (supplement)", "mkpụrụ ọgwụ, ntụ ma ọ bụ ihe ọṅụṅụ a na-ere iji gbakwunye ihe n'ihe oriri gị."]],
          slides: [
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ime mmega n'ime ihe mgbu dị nkọ", "Mmụba dị ukwuu n'otu mgbe", "Ibelata nri ma ọ bụ mmiri iji nweta ibu ahụ", "\"Enweghị ụbọchị ezumike\""] },
            { title: "Ọgwụ mgbakwunye", bullets: ["FDA anaghị elele ha tupu a na-ere ha", "Ụfọdụ nwere ihe ndị a machibidoro iwu", "Buru ụzọ jụọ athletic trainer gị ma ọ bụ dietitian"] },
            { title: "Mgbe ị hụrụ otu", bullets: ["Esoro ya", "Were ya gaa n'aka onye nkuzi gị ma ọ bụ athletic trainer gị"] }
          ],
          sources: [{ name: "USADA: Supplement Connect (ihe egwu ọgwụ mgbakwunye maka ndị egwuregwu)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Rịọ ngwa enyemaka AI maka \"atụmatụ iji gbaa ọsọ ọsọ karị n'izu abụọ\". Gụọ ya ma gbaa gburugburu ihe ịdọ aka na ntị ọ bụla. Dee ihe ị ga-ajụ onye nkuzi gị banyere ya.",
          youCanNow: "ịhụ ndụmọdụ mmega ahụ nwere ihe egwu ma were ya gaa n'aka onye kwesịrị ekwesị.",
          quickCheck: [
            { objective: "O5", q: "Kedu n'ime ndị a bụ ihe ịdọ aka na ntị na ndụmọdụ mmega ahụ?", options: ["Otu ụbọchị ezumike kwa izu", "Atụmatụ dabara n'ihe onye nkuzi gị dere", "Mmụba mmega ahụ dị ukwuu n'otu mgbe", "Ịkwadebe ahụ (warm up) tupu mmega"], answer: 2, why: "Ihe karịrị akarị, na-aga ngwa ngwa nke ukwuu, bụ otu n'ime ihe ịdọ aka na ntị dị na nkuzi a." },
            { objective: "O5", q: "Onye otu egwuregwu gị kesara ọgwụ mgbakwunye na-ekwe nkwa nsonaazụ ngwa ngwa. Gịnị ka ị ga-eme?", options: ["Buru ụzọ gwa athletic trainer gị ma ọ bụ registered dietitian okwu", "Nwaa ntakịrị", "Zụta ya ma ọ bụrụ na ndị mmadụ toro ya", "Rịọ AI ka o kwado ya"], answer: 0, why: "FDA anaghị elele ọgwụ mgbakwunye tupu a na-ere ha, ụfọdụ nwekwara ihe ndị a machibidoro iwu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkwadebe mkparịta ụka mmega ahụ gị na onye nkuzi gị",
          minutes: 5,
          goal: "Jiri AI kwadebe ozi nkọwa dị mkpụmkpụ ma doo anya na ajụjụ atọ maka onye nkuzi gị.",
          text: [
            "Ndị nkuzi na-arụ ọtụtụ ọrụ. Ozi nkọwa dị mkpụmkpụ ma doo anya nwere nọmba gị na-eme ka mkparịta ụka ahụ ka mma: ebumnuche gị, ihe data gị na-egosi, na ihe ị chọrọ ịjụ.",
            "Jụọ ngwa enyemaka AI: \"Nke a bụ ebumnuche m na akwụkwọ ndekọ mmega ahụ m. Dee ozi nkọwa ahịrịokwu atọ maka onye nkuzi m ma tụọ aro ajụjụ atọ m nwere ike ịjụ banyere oge mmega ahụ m na-esote.\" Wee gbanwee ya ka ọ dị ka okwu gị.",
            "Were ozi nkọwa ahụ gakwuru onye nkuzi gị ihu na ihu ma ọ bụ n'ụzọ otu egwuregwu gị na-ahọrọ. Gee ntị, dee ndetu, ma jiri ihe onye nkuzi gị kwuru melite atụmatụ gị, ọ bụghị ihe AI kwuru."
          ],
          steps: ["Tinye ebumnuche gị na akwụkwọ ndekọ gị (na-enweghị ndekọ ahụike).", "Rịọ maka ozi nkọwa ahịrịokwu atọ na ajụjụ atọ.", "Gbanwee ya n'okwu nke gị.", "Kesaa ya onye nkuzi gị n'ụzọ otu egwuregwu gị na-ahọrọ.", "Jiri azịza onye nkuzi gị melite atụmatụ gị."],
          words: [["Oge mmega ahụ (training block)", "izu ole na ole nwere otu isi ihe mmega ahụ na-elekwasị anya."], ["Ozi nkọwa (update)", "ozi dị mkpụmkpụ na-ekwu ebe ị nọ ugbu a."]],
          slides: [
            { title: "Ezigbo ozi nkọwa", bullets: ["Ebumnuche m", "Ihe data m na-egosi", "Ajụjụ m"] },
            { title: "Jiri AI dee nke mbụ", bullets: ["Ozi nkọwa ahịrịokwu atọ", "Ajụjụ atọ", "Gbanwee ya n'okwu nke gị"] },
            { title: "Mgbe ahụ", bullets: ["Gị na onye nkuzi gị kparịta ụka", "Dee ndetu", "Soro atụmatụ onye nkuzi gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dekọọ opekata mpe oge mmega anọ, rịọ ngwa enyemaka AI ka ọ kọwaa ụzọ data gị na-aga, ma dee ozi nkọwa ahịrịokwu atọ na ajụjụ atọ maka onye nkuzi gị.",
          youCanNow: "ime ka data mmega ahụ gị bụrụ ozi nkọwa doro anya na ajụjụ maka onye nkuzi gị.",
          quickCheck: [
            { objective: "O6", q: "Ihe atọ dị aṅaa ka ezigbo ozi nkọwa maka onye nkuzi na-ekwu?", options: ["Ebumnuche gị, ihe data gị na-egosi na ihe ị chọrọ ịjụ", "Soshal midia gị, ụra na akara ule gị", "Nọmba ndị egwuregwu ndị ọzọ", "Naanị ụbọchị gị kacha mma"], answer: 0, why: "Ozi nkọwa dị mkpụmkpụ na-enye ebumnuche gị, data gị na ajụjụ gị." },
            { objective: "O6", q: "Azịza onye nkuzi gị dị iche n'aro AI. Gịnị ka ị ga-eme?", options: ["Soro AI", "Jụọ AI ọzọ", "Leghara ha abụọ anya", "Jiri ihe onye nkuzi gị kwuru melite atụmatụ gị"], answer: 3, why: "Jiri azịza onye nkuzi gị melite atụmatụ gị, ọ bụghị ihe AI kwuru." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI gị na onye nkuzi gị",
        questions: [
          { objective: "O4", q: "Kedu ọrụ AI maara nke ọma maka mmega ahụ?", options: ["Ịhụ otu i si eme mmega ihu na ihu", "Ikwe ka ị lọghachi mgbe mmerụ ahụ gasịrị", "Ịmara otu i si hie ụra", "Ịchịkọta akwụkwọ ndekọ mmega ahụ gị"], answer: 3, why: "Ịhazi na ịchịkọta ihe bụ ike AI." },
          { objective: "O4", q: "Onye na-ekpebi mgbe ị ga-alọghachi mgbe mmerụ ahụ gasịrị?", options: ["Athletic trainer gị ma ọ bụ dọkịta gị", "Ngwa enyemaka AI", "Onye otu egwuregwu gị", "Onye a ma ama n'ịntanetị na-akụzi mmega ahụ"], answer: 0, why: "Ịlọghachi n'egwuregwu bụ mkpebi ahụike maka ndị ọkachamara ruru eru." },
          { objective: "O5", q: "Kedu nke bụ ihe ịdọ aka na ntị na ndụmọdụ mmega ahụ?", options: ["Ụbọchị ezumike kwa izu", "Ibu ụzọ kwadebe ahụ", "Ime mmega n'ime ihe mgbu dị nkọ", "Ịjụ onye nkuzi gị"], answer: 2, why: "Ihe mgbu dị nkọ bụ akara ka ị kwụsị ma mee ka e lelee gị." },
          { objective: "O5", q: "Gịnị mere ọgwụ mgbakwunye ji nwee ihe egwu maka ndị egwuregwu?", options: ["A machibidoro ha iwu mgbe niile", "Onye nkuzi gị na-anwale ha", "Ha anaghị atọ ụtọ", "FDA anaghị elele ha tupu a na-ere ha, ụfọdụ nwekwara ihe ndị a machibidoro iwu"], answer: 3, why: "USADA na-adọ aka na ntị na ọgwụ mgbakwunye nwere ike inwe ihe ọzọ agwakọtara n'ime ya ma ọ bụ akara ụgha." },
          { objective: "O6", q: "Mgbe gị na onye nkuzi gị kparịtachara ụka, atụmatụ onye ka ị ga-eso?", options: ["Nke AI", "Nke onye nkuzi gị", "Nke vidiyo ọ bụla", "Nke onye gị na ya na-asọ mpi"], answer: 1, why: "Onye nkuzi na-ahazi mmega ahụ; AI na-enyere gị aka ịkwadebe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Mmega Ahụ na Ịrụ Ọrụ Nke Ọma n'Egwuregwu",
    questions: [
      { objective: "O1", q: "\"Ịgba ọsọ ọsọ karị\" bụ:", options: ["Ebumnuche zuru oke", "Akwụkwọ ndekọ mmega ahụ", "Ọchịchọ, ọ bụghị ebumnuche a na-atụ atụ", "Mmega (drill)"], answer: 2, why: "O nweghị nọmba, ụbọchị ma ọ bụ nnwale." },
      { objective: "O1", q: "Ezigbo ebumnuche mmega ahụ nwere:", options: ["Otu ihe, nọmba, ụbọchị na nnwale", "Naanị mmetụta", "Okwuntughe gị", "Ebumnuche iri n'otu mgbe"], answer: 0, why: "Akụkụ ndị ahụ na-eme ka ọ bụrụ nke a na-atụ atụ." },
      { objective: "O1", q: "Onye kwesịrị ikwekọ n'ebumnuche gị gị na ya?", options: ["Onye nkuzi gị", "Onye ị na-amaghị n'ịntanetị", "Naanị AI", "Ọ dịghị onye"], answer: 0, why: "Ebumnuche gị kwesịrị idaba n'atụmatụ otu egwuregwu ahụ." },
      { objective: "O2", q: "Gịnị ka akwụkwọ ndekọ mmega ahụ mbụ gị kwesịrị inwe?", options: ["Kọlụm iri ise", "Ndekọ ahụike gị", "Ụbọchị, Mmega, Mgbalị na Nsonaazụ", "Naanị foto"], answer: 2, why: "Kọlụm anọ dị mfe ezuola ịmalite." },
      { objective: "O2", q: "Akara mgbalị 1 ruo 10 na-atụ:", options: ["Ogologo gị", "Otu oge mmega siri sie ike", "Akara ule gị", "Ndị na-eso gị n'ịntanetị"], answer: 1, why: "Ọ bụ akara ngwa ngwa maka mgbalị ị chere na i mere." },
      { objective: "O2", q: "Nọmba si n'elekere ma ọ bụ eriri bụ:", options: ["Ihe ziri ezi mgbe niile", "Nchọpụta ọrịa", "Ihe na-enweghị isi", "Ihe nrịbama bara uru nwere ike ịghara iziri ezi"], answer: 3, why: "Wearables na-enyere aka, mana were ha dị ka ihe nrịbama." },
      { objective: "O3", q: "Mgbe ị na-agụ chaatị gị, ị kwesịrị ilekwasị anya na:", options: ["Otu ụbọchị gị kacha njọ", "Agba chaatị ahụ", "Ụzọ ahịrị ahụ na-aga n'ozuzu", "Chaatị ndị egwuregwu ndị ọzọ"], answer: 2, why: "Ụzọ data na-aga dị mkpa karịa otu ụbọchị." },
      { objective: "O3", q: "Nsonaazụ akwụ otu ebe ọtụtụ izu. A na-akpọ nke a:", options: ["Ọsọ mkpụmkpụ (sprint)", "Nọmba mmalite (baseline)", "Wearable", "Nkwụsị ọganihu (plateau)"], answer: 3, why: "Plateau bụ oge ọganihu na-adịghị." },
      { objective: "O3", q: "Tupu i tinye akwụkwọ ndekọ gị n'ime AI, wepụ:", options: ["Aha na ndekọ ahụike", "Ụbọchị ndị ahụ", "Akara mgbalị", "Nsonaazụ"], answer: 0, why: "Hapụ ozi nzuzo na nke ahụike n'ime ngwa AI." },
      { objective: "O3", q: "AI kwuru na nkezi gị kara mma site na sekọnd 2. Ị kwesịrị:", options: ["Itinye ya n'ịntanetị", "Ilele mgbakọ ahụ n'onwe gị", "Ịtụkwasị ya obi kpamkpam", "Ihichapụ akwụkwọ ndekọ gị"], answer: 1, why: "AI nwere ike ime mperi na mgbakọ." },
      { objective: "O4", q: "Kedu nke AI ENWEGHỊ ike imere gị?", options: ["Ịkọwa okwu mmega ahụ", "Ime ka ndetu bụrụ tebụl", "Ịhụ otu i si eme mmega n'oge mmega", "Ide ajụjụ maka onye nkuzi gị"], answer: 2, why: "Ọ pụghị ịhụ gị ka ị na-eme mmega." },
      { objective: "O4", q: "Gịnị ka athletic trainer na-eme?", options: ["Na-egbochi ma na-agwọ mmerụ ahụ, na-enyekwa aka n'ịgbake", "Na-ere akpụkpọ ụkwụ", "Na-elekọta soshal midia", "Na-ede usoro oge otu egwuregwu"], answer: 0, why: "Athletic trainers bụ ndị ọkachamara ahụike nwere ikikere." },
      { objective: "O5", q: "Atụmatụ ịntanetị kwuru ka ị belata mmiri ọṅụṅụ iji nweta ibu ahụ a chọrọ. Nke a bụ:", options: ["Ihe dị mma maka onye ọ bụla", "Ihe a chọrọ n'iwu", "Ezigbo echiche tupu egwuregwu", "Ihe ịdọ aka na ntị"], answer: 3, why: "Ibelata nri ma ọ bụ mmiri iji nweta ibu ahụ nwere ike ịdị ize ndụ." },
      { objective: "O5", q: "Atụmatụ nwere \"enweghị ụbọchị ezumike\" bụ:", options: ["Nke kacha mma maka uto", "Ihe ịdọ aka na ntị", "Ihe NCAA chọrọ", "Ihe nkịtị maka ndị mbido"], answer: 1, why: "Ezumike bụ akụkụ nke mmega ahụ; enweghị ezumike bụ akara ịdọ aka na ntị." },
      { objective: "O5", q: "Tupu ị ṅụọ ọgwụ mgbakwunye ọ bụla, kparịta ụka na:", options: ["Mgbasa ozi", "Athletic trainer gị ma ọ bụ registered dietitian", "Onye otu egwuregwu gị", "Ọ dịghị onye"], answer: 1, why: "Ha nwere ike ịkọwa ihe egwu dị ya, gụnyere ihe ndị a machibidoro iwu." },
      { objective: "O5", q: "Ọ bụrụ na ndụmọdụ AI na atụmatụ onye nkuzi gị adabaghị, ị ga-:", options: ["Eso AI", "Ahapụ otu egwuregwu", "Eso onye nkuzi gị ma jụọ ya banyere ya", "Eme ha abụọ"], answer: 2, why: "Onye nkuzi gị maara gị na atụmatụ otu egwuregwu ahụ." },
      { objective: "O6", q: "Ezigbo ozi nkọwa maka onye nkuzi nwere:", options: ["Ebumnuche gị, ihe data gị na-egosi, na ajụjụ gị", "Naanị mkpesa", "Edemede ogologo", "Okwuntughe gị"], answer: 0, why: "Ihe dị mkpụmkpụ ma doo anya na-enyere ndị nkuzi na-arụ ọtụtụ ọrụ aka." },
      { objective: "O6", q: "Mgbe AI dechara ozi nkọwa gị nke mbụ, ị kwesịrị:", options: ["Iziga ya n'agụghị ya", "Itinye ya n'ịntanetị maka mmadụ niile", "Ịgbanwe ya n'okwu nke gị", "Iziga ya onye gị na ya na-asọ mpi"], answer: 2, why: "Ọ kwesịrị ịdị ka okwu gị ma bụrụ eziokwu." },
      { objective: "O6", q: "Oge mmega ahụ (training block) bụ:", options: ["Mpempe osisi", "Ọkpụ bọọlụ e gbochiri", "Ụbọchị ezumike", "Izu ole na ole nwere otu isi ihe a na-elekwasị anya"], answer: 3, why: "Ndị nkuzi na-ahazi mmega ahụ n'oge ndị a." },
      { objective: "O4", q: "Ụzọ kacha mma iji AI maka mmega ahụ bụ:", options: ["Iji ya dochie onye nkuzi gị", "Ịghọta data gị na ịkwadebe ajụjụ ka mma", "Ịchọpụta mmerụ ahụ", "Ịhọrọ ọgwụ mgbakwunye gị"], answer: 1, why: "AI na-enyere gị aka ịghọta na ịkwadebe; mmadụ na-ekpebi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ebumnuche a na-atụ atụ",
        objective: "O1",
        notYet: "Ebumnuche ahụ edoghị anya, ma ọ bụ nọmba, ụbọchị ma ọ bụ nnwale adịghị.",
        meets: "Otu ihe, nọmba, ụbọchị na nnwale, nke gị na onye nkuzi kwekọrọ na ya.",
        exceeds: "O nwere nọmba mmalite ma dabara n'otu akụkụ a kpọrọ aha n'atụmatụ oge egwuregwu otu ahụ."
      },
      {
        name: "Akwụkwọ ndekọ mmega ahụ",
        objective: "O2",
        notYet: "Oge mmega na-erughị anọ, ma ọ bụ kọlụm adịghị.",
        meets: "Ụbọchị, Mmega, Mgbalị na Nsonaazụ jupụtara maka opekata mpe oge mmega anọ.",
        exceeds: "E dekọrọ oge mmega ọ bụla n'otu ụbọchị ahụ, gbakwunyere obere ndetu ma ọ bụ awa ụra."
      },
      {
        name: "Nchịkọta ụzọ data na-aga",
        objective: "O3",
        notYet: "Enweghị chaatị, ma ọ bụ ụzọ ahụ ezighi ezi ma ọ bụ adịghị.",
        meets: "Chaatị na nchịkọta ahịrịokwu otu ma ọ bụ abụọ nke ụzọ ahụ, e tụnyere mgbalị na nsonaazụ, e lelekwara mgbakọ AI.",
        exceeds: "Ọ hụrụ plateau ma ọ bụ mgbalị na-arị elu ebe nsonaazụ kwụ otu ebe, ma were ya dị ka ajụjụ maka onye nkuzi."
      },
      {
        name: "Iji AI n'enweghị ihe egwu",
        objective: "O5",
        notYet: "Ọ na-eso ma ọ bụ na-ekwughachi ndụmọdụ nwere ihe ịdọ aka na ntị, ma ọ bụ na-eketara AI ndekọ ahụike.",
        meets: "Ọ dịghị ndụmọdụ nwere ihe ịdọ aka na ntị a na-eso, a na-ewerekwa ihe ọ bụla nwere obi abụọ gakwuru onye nkuzi ma ọ bụ athletic trainer.",
        exceeds: "Ọ na-akpọ ihe ịdọ aka na ntị ahụ aha na ihe mere o ji nwee ihe egwu mgbe ọ na-ewelite ya."
      },
      {
        name: "Ajụjụ maka onye nkuzi",
        objective: "O6",
        notYet: "Ajụjụ na-erughị atọ, ma ọ bụ ozi nkọwa ahụ dị ka ederede AI e detuuru.",
        meets: "Ozi nkọwa ahịrịokwu atọ na ajụjụ atọ doro anya n'okwu onye egwuregwu ahụ n'onwe ya.",
        exceeds: "Onye egwuregwu ahụ na-edekọ azịza onye nkuzi ma jiri ha melite atụmatụ ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ọrụ ikpeazụ ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe ka na-edebe akwụkwọ ndekọ mmega ahụ ha mgbe ụbọchị 30 gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha ruru ma ọ bụ na-eru nso n'ebumnuche a na-atụ atụ ha tupu ụbọchị a kwekọrịtara",
      "Ndị na-amụ ihe kwuru na ha wetara onye nkuzi ha ozi nkọwa na ajụjụ, ma ọ bụ jụ ndụmọdụ nwere ihe egwu"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Akaụntụ Google n'efu maka Google Sheets",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Otu ebumnuche gị na onye nkuzi gị kwekọrọ na ya",
      "Ihe dị ka nkeji 60 nke nkuzi, wee ihe dị ka otu nkeji mgbe oge mmega ọ bụla gasịrị ruo izu anọ"
    ],
    facilitatorNotes: [
      "Kparịta ụka na onye isi nkuzi tupu ịmalite ka ebumnuche na akwụkwọ ndekọ dabara n'atụmatụ otu egwuregwu ahụ; ihe ọmụmụ a anaghị ahazi mmega ahụ.",
      "Kụziere ndị egwuregwu iwepụ aha na ndekọ ahụike tupu ha etinye data ọ bụla n'ime ngwa AI.",
      "Zipu ajụjụ ọ bụla gbasara ihe mgbu, mmerụ ahụ, ibu ahụ ma ọ bụ ọgwụ mgbakwunye n'aka athletic trainer ma ọ bụ registered dietitian; azala ya n'ìgwè ahụ.",
      "Buru ụzọ mee Nkuzi 1 ruo 2, hapụ ndị egwuregwu ka ha dekọọ ruo izu anọ, wee mee Nkuzi 3 ruo 6 na ọrụ ikpeazụ.",
      "Hazie obere nzukọ ndị nkuzi ka ndị egwuregwu nwee ike iwetara ozi nkọwa na ajụjụ ha."
    ]
  }
};
