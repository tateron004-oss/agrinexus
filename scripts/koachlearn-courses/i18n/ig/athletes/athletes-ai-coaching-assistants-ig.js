"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-coaching-assistants.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-coaching-assistants-ig",
  lang: "ig",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Ngwa Enyemaka AI maka Ndị Nkuzi Egwuregwu",
  skills: "Ịhazi ngwa enyemaka AI site n'ntuziaka nkuzi gị, Ime atụmatụ mmega ahụ site n'AI, Ide ozi nye ndị nne na nna na ndị egwuregwu, Ime kaadị omume na nnwale, Ichebe ozi nzuzo ndị egwuregwu na idebe mkpebi n'aka mmadụ",
  outcome: "ịhazi ngwa enyemaka AI ka ọ bụrụ onye inyeaka nkuzi gị site n'ntuziaka mgbe niile nke gị, wee jiri ya mee atụmatụ mmega ahụ nkeji 90, dee ozi doro anya nye ndị nne na nna, ma mee kaadị omume na nnwale ajụjụ ise gbasara playbook, nke gị onwe gị lelere ma nke na-enweghị ozi nzuzo ndị egwuregwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị isi nkuzi (head coach), ndị nkuzi enyemaka, ndị isi klọb na ndị egwuregwu na-enyere aka ịkụzi ụmụaka. Ndị nkuzi na-etinye ọtụtụ awa n'ime atụmatụ na akwụkwọ; ngwa enyemaka AI nwere ike ibuli ụfọdụ n'ime ibu ahụ.",
    "Ị ga-ahazi ngwa enyemaka AI n'efu site n'ntuziaka mgbe niile gbasara otu egwuregwu gị, wee jiri ya mee atụmatụ mmega ahụ, dee ozi, ma mee ihe nkuzi. Ị ga-edokwa iwu doro anya: ihe ga-anọ na nzuzo, na mkpebi ndị ga-anọ n'aka mmadụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ ahụ. Gbasoo iwu ụlọ akwụkwọ gị, klọb gị ma ọ bụ otu egwuregwu (league) gị gbasara teknụzụ, izi ụmụaka ozi na ozi ụmụ akwụkwọ."
  ],
  finalTask: "Dee ntuziaka mgbe niile nke ngwa enyemaka nkuzi gị (ọkwa otu egwuregwu, ụdị nkuzi, iwu nchekwa, ihe ọ na-agaghị etinye), wee jiri ya mee atụmatụ mmega ahụ nkeji 90, ozi nye ndị nne na nna gbasara usoro oge izu na-abịa, kaadị omume maka otu omume, na nnwale ajụjụ ise gbasara playbook. Lelee ma dozie ihe ọ bụla, ma kwado na e jighị ozi nzuzo onye egwuregwu ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi nkuzi, ndị nkuzi enyemaka, ndị isi klọb na ndị egwuregwu na-enyere aka ịkụzi ụmụaka, ọtụtụ mgbe ndị ọrụ afọ ofufo ma ọ bụ ndị nkuzi oge ụfọdụ nwere obere oge maka atụmatụ.",
    startingPoint: "Ha na-eduzi mmega ahụ ma na-ezipu ozi otu egwuregwu. Ụfọdụ anwaala ngwa enyemaka AI, mana mmadụ ole na ole na-enye ya ntuziaka mgbe niile ma ọ bụ nwee iwu e dere ede gbasara nzuzo na nchekwa.",
    gap: "Atụmatụ na akwụkwọ na-ewe ọtụtụ awa, iji AI n'akpachaghị anya nwekwara ike ịkpughe ozi nzuzo ndị egwuregwu, wepụta omume nwere ihe egwu, ma ọ bụ were ọnọdụ mkpebi onye nkuzi ga-eme. Ndị nkuzi kwesịrị iji AI dị ka onye inyeaka a na-elele, nwere iwu nchekwa doro anya, ka ha wee chekwaa oge ma debe ndị egwuregwu n'udo ma mesoo ha ihe n'ụzọ ziri ezi.",
    constraints: [
      "Okwu dị mfe; ọ dịghị mkpa ịma teknụzụ nke ukwuu",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu",
      "Oge: ihe dị ka nkeji ise kwa nkuzi n'ime izu nkuzi jupụtara n'ọrụ",
      "Iwu ụlọ akwụkwọ, klọb na league gbasara teknụzụ, izi ụmụaka ozi na ozi ụmụ akwụkwọ na-ebu ụzọ",
      "Enweghị aha onye egwuregwu, ozi ahụike ma ọ bụ ozi nzuzo ọzọ nke onye egwuregwu na prompt ọ bụla"
    ],
    prerequisites: "Ọ dịghị. Ndị nkuzi ọhụrụ n'iji ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ nkuzi kwa izu", action: "idepụta ọrụ nkuzi ndị ị ga-enye ngwa enyemaka AI ka o dee na mkpebi ndị ị ga-edebere onwe gị", standard: "na-edebe mkpebi gbasara oge egwuregwu, nhọrọ ndị egwuregwu na nchekwa n'aka onye nkuzi" },
    { id: "O2", condition: "Maka otu egwuregwu gị", action: "ide ntuziaka mgbe niile nwere ọkwa otu egwuregwu, ogologo mmega ahụ, ụdị nkuzi na iwu nchekwa", standard: "gụnyere iwu na-agaghị eji aha ndị egwuregwu ma ọ bụ ozi ahụike ha mgbe ọ bụla" },
    { id: "O3", condition: "Site n'iji ntuziaka mgbe niile gị", action: "ide atụmatụ mmega ahụ nkeji 90 site n'AI ma dozie ya", standard: "nke mere na oge ha gbakọọ nke ọma, omume dabara afọ ndụ na ngwa egwuregwu, ma e mee opekata mpe mgbanwe abụọ" },
    { id: "O4", condition: "Mgbe e nyere gị mgbanwe usoro oge ma ọ bụ akụkọ otu egwuregwu", action: "ide ozi doro anya, nwere obi ọma nye ndị nne na nna ma ọ bụ ndị egwuregwu site n'AI ma ziga ya site n'ụzọ a kwadoro", standard: "ebe e lelere ụbọchị ọ bụla, ọ dịghịkwa ihe gbasara otu onye egwuregwu n'ozi otu" },
    { id: "O5", condition: "Mgbe e nyere gị otu omume (drill) na otu egwuregwu a haziri (play)", action: "ime kaadị omume na nnwale ajụjụ ise gbasara playbook site n'AI", standard: "ebe e lelere nzọụkwụ na azịza ọ bụla megide ezi omume na egwuregwu gị" },
    { id: "O6", condition: "Tupu i jiri AI maka ọrụ nkuzi ọ bụla", action: "ide ma gbasoo iwu nchekwa maka nzuzo, nchekwa na izi ezi", standard: "na-ezigara ajụjụ gbasara ahụike na okpomọkụ ndị ọrụ a zụrụ azụ na ntuziaka otu na-achị egwuregwu ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi onye inyeaka nkuzi gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ngwa enyemaka nkuzi AI nwere ike ime",
          minutes: 4,
          goal: "Depụta ọrụ nkuzi ị ga-enye AI na mkpebi ị ga-edebere onwe gị.",
          text: [
            "Ngwa enyemaka nkuzi AI bụ ngwa enyemaka AI nkịtị, dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini, nke ị na-eji maka ọrụ nkuzi. O nwere ike ide atụmatụ mmega ahụ, ide email, ịkọwa iwu egwuregwu, ide nkọwa omume, nnwale na usoro oge, ma chịkọta ndetu gị.",
            "Ọ pụghị ịhụ ndị egwuregwu gị, mara ahụike ma ọ bụ mmetụta ha, ma ọ bụ buru ọrụ ahụ n'isi. Oge egwuregwu, ịdọ aka na ntị, mmerụ ahụ na mkpebi ịlọghachi n'egwuregwu, mkpebi nchekwa na ihe ọ bụla gbasara ọdịmma onye egwuregwu na-anọ n'aka gị na ndị ọkachamara kwesịrị ekwesị.",
            "Ezigbo iwu: AI na-ede ihe mbụ, onye nkuzi na-ekpebi. Ihe ọ bụla o dere bụ ihe mbụ (draft) ị ga-elele."
          ],
          words: [["Ngwa enyemaka nkuzi AI", "ngwa enyemaka AI nkịtị e ji enyere aka n'ọrụ nkuzi egwuregwu."], ["Ịlọghachi n'egwuregwu (return to play)", "mkpebi gbasara mgbe onye egwuregwu merụrụ ahụ ga-egwu egwu ọzọ n'enweghị nsogbu; ndị ọkachamara ahụike na-eme ya."]],
          slides: [
            { title: "AI nwere ike ide", bullets: ["Atụmatụ mmega ahụ na usoro oge", "Email na ozi", "Nkọwa omume na nnwale", "Nchịkọta ndetu gị"] },
            { title: "Onye nkuzi na-edebe", bullets: ["Oge egwuregwu na ịdọ aka na ntị", "Mkpebi nchekwa", "Ọdịmma; mmerụ ahụ na-aga n'aka ndị ahụike"] },
            { title: "Iwu ahụ", bullets: ["AI na-ede ihe mbụ", "Onye nkuzi na-ekpebi"] }
          ],
          tryIt: "Dee ndepụta abụọ: ọrụ nkuzi ise kwa izu ị nwere ike inye AI ka o dee, na mkpebi ise ị ga-edebe mgbe niile.",
          youCanNow: "ikpebi ọrụ nkuzi AI nwere ike inyere aka na mkpebi ndị ga-anọ n'aka mmadụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ nkuzi AI nwere ike idere gị?", options: ["Usoro oge mmega ahụ kwa izu", "Onye ga-amalite egwuregwu na Satọdee", "Ma onye merụrụ ahụ nwere ike ịlọghachi", "Otu onye egwuregwu si nọrọ taa n'obi"], answer: 0, why: "AI nwere ike ide atụmatụ; nhọrọ ndị egwuregwu, mmerụ ahụ na mmetụta chọrọ onye nkuzi na ndị a zụrụ azụ." },
            { objective: "O1", q: "AI tụrụ aro ka i wepụ otu onye egwuregwu n'egwuregwu site na ndetu gị. Gịnị ka ị ga-eme?", options: ["Mee ya otu o kwuru", "Mee mkpebi ahụ n'onwe gị site n'ihe ị hụrụ", "Ka ndị egwuregwu tụọ vootu", "Jụọ AI ọzọ ruo mgbe o kwenyere"], answer: 1, why: "AI na-ede ihe mbụ, onye nkuzi na-ekpebi, karịsịa gbasara oge egwuregwu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide ntuziaka mgbe niile",
          minutes: 5,
          goal: "Dee ntuziaka mgbe niile na-agwa AI gbasara otu egwuregwu gị na iwu gị.",
          text: [
            "Ntuziaka mgbe niile bụ otu paragraf ị na-etinye na mmalite mkparịta ụka (ma ọ bụ chekwaa ya na ntọala ntuziaka ma ọ bụ ngwa project nke ngwa enyemaka ahụ, ma ọ bụrụ na o nwere ya) ka ọ mara ọnọdụ gị mgbe niile.",
            "Tinye: egwuregwu, ọkwa na otu afọ ndụ; ọnụ ọgụgụ ndị egwuregwu; ogologo mmega ahụ na ebe egwuregwu; ụdị nkuzi gị na ihe ị kwenyere na ya; iwu nchekwa (omume dabara afọ ndụ, ezumike mmiri, enweghị mmega ahụ ntaramahụhụ); na ihe ọ na-agaghị etinye mgbe ọ bụla (aha ndị egwuregwu, ozi ahụike, akara ule).",
            "Ọmụmaatụ: \"Ana m akụzi otu bọọlụ ụmụ agbọghọ U12 nwere ndị egwuregwu 16. Mmega ahụ na-ewe nkeji 90 na ọkara ama egwuregwu, na Tuzde na Tọzde. Ana m akwanyere mgbalị, obi ụtọ na ịrụkọ ọrụ ọnụ ugwu. Atụmatụ ga-enwerịrị mmega mkpali ahụ (warm-up), ezumike mmiri kwa nkeji 20 na omume dabara afọ ndụ. Arịọla ma ọ bụ jiri aha ndị egwuregwu ma ọ bụ ozi ahụike ha mgbe ọ bụla.\""
          ],
          steps: ["Dee egwuregwu gị, ọkwa, otu afọ ndụ na ọnụ ọgụgụ ndị egwuregwu.", "Tinye ogologo mmega ahụ na ebe egwuregwu.", "Tinye ihe ị kwenyere na ya na ụdị nkuzi gị.", "Tinye iwu nchekwa.", "Tinye ihe ọ na-agaghị etinye mgbe ọ bụla.", "Chekwaa ya ebe ị ga-enwe ike itinye ya oge ọ bụla."],
          words: [["Ntuziaka mgbe niile (standing instructions)", "ozi gbasara ọnọdụ gị ị na-enye AI na mmalite ka azịza ọ bụla dabara ọnọdụ gị."], ["Dabara afọ ndụ (age-appropriate)", "kwesịrị afọ na otu ndị egwuregwu si too."]],
          slides: [
            { title: "Ntuziaka mgbe niile", bullets: ["Tinye ya na mmalite mkparịta ụka ọ bụla", "Ma ọ bụ chekwaa ya na ntọala ngwa enyemaka ahụ, ọ bụrụ na o nwere"] },
            { title: "Tinye", bullets: ["Egwuregwu, ọkwa, afọ, ọnụ ọgụgụ ndị egwuregwu", "Ogologo mmega ahụ na ebe", "Ihe ị kwenyere na ya na iwu nchekwa"] },
            { title: "Etinyela mgbe ọ bụla", bullets: ["Aha ndị egwuregwu", "Ozi ahụike", "Akara ule ma ọ bụ ozi ezinụlọ"] }
          ],
          tryIt: "Dee ntuziaka mgbe niile gị n'otu paragraf ma chekwaa ya na ndetu. Tinye ya na ngwa enyemaka AI ma jụọ: \"Chịkọta ihe ị maara gbasara otu egwuregwu m.\" Dozie ihe ọ bụla o mehiere.",
          youCanNow: "ide ntuziaka mgbe niile na-eme ka azịza AI dabara otu egwuregwu gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ntuziaka mgbe niile?", options: ["Ndepụta nọmba ekwentị ndị egwuregwu", "Akwụkwọ iwu league", "Ozi gbasara otu egwuregwu gị na iwu gị ị na-enye AI na mmalite", "Otu omume mmega ahụ"], answer: 2, why: "Ntuziaka mgbe niile na-eme ka azịza AI ọ bụla dabara otu egwuregwu gị." },
            { objective: "O2", q: "Nchịkọta AI nke ntuziaka gị kwuru na otu gị bụ ndị na-erubeghị afọ 16, mana ha bụ ndị na-erubeghị afọ 12. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Hichapụ app AI ahụ", "Jiri azịza ya otu o sila dị", "Dozie ntuziaka ahụ ka o nwee ezi otu afọ ndụ"], answer: 3, why: "Ozi ezighi ezi na-ewepụta atụmatụ ezighi ezi, ya mere bu ụzọ dozie ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime atụmatụ mmega ahụ site n'AI",
          minutes: 6,
          goal: "Jiri AI dee atụmatụ mmega ahụ nkeji 90 ma dozie ya.",
          text: [
            "Mgbe i tinyechara ntuziaka mgbe niile gị, jụọ: \"Mee atụmatụ mmega ahụ nkeji 90 lekwasịrị anya na [nka]. Tinye warm-up, omume atọ na-aga n'ihu nwayọọ nwayọọ, obere egwuregwu, mmega nzuike (cool-down) na ezumike mmiri. Nye oge, nhazi, isi ihe nkuzi na otu esi eme ka omume ọ bụla dị mfe ma ọ bụ sie ike karị.\"",
            "Lelee ya dị ka onye nkuzi: Omume ndị ahụ ọ dị mma ma dabara afọ ndụ? Oge ha ọ gbakọrọ nke ọma? I nwere ebe na ngwa egwuregwu ahụ? Nguzozi n'etiti ọrụ na izu ike ọ dị mma? Ahịrị ọ dị ukwuu, ndị egwuregwu na-eguzo n'efu ogologo oge?",
            "Jụọ ajụjụ nsochi: \"Anyị nwere naanị bọọlụ 10.\" \"Ndị egwuregwu abụọ bụ ndị ọhụrụ.\" \"Gbanwee omume 2 ka ọ bụrụ nke nwere mmetụ bọọlụ karịa.\" Chekwaa atụmatụ ị masịrị na folda ka i wee jigharịa ma meziwanye ha."
          ],
          steps: ["Tinye ntuziaka mgbe niile gị.", "Rịọ atụmatụ nkeji 90 nwere oge, nhazi na isi ihe nkuzi.", "Lelee nchekwa, oge, ebe na ngwa egwuregwu.", "Jụọ ajụjụ nsochi iji dozie nsogbu.", "Chekwaa atụmatụ ikpeazụ."],
          words: [["Nnwekwu nwayọọ nwayọọ (progression)", "omume na-amalite n'ihe dị mfe ruo n'ihe siri ike karị."], ["Obere egwuregwu (small-sided game)", "egwuregwu nwere ndị egwuregwu ole na ole na obere ebe ka onye ọ bụla mekwuo bọọlụ aka."]],
          slides: [
            { title: "Rịọ maka", bullets: ["Warm-up, omume 3 na-aga n'ihu nwayọọ nwayọọ", "Obere egwuregwu, cool-down", "Oge, nhazi, isi ihe nkuzi"] },
            { title: "Lelee dị ka onye nkuzi", bullets: ["Ọ dị mma ma dabara afọ ndụ?", "Oge gbakọrọ? Ebe na ngwa egwuregwu?", "Obere iguzo n'efu?"] },
            { title: "Dozie", bullets: ["\"Anyị nwere naanị bọọlụ 10.\"", "\"Ndị egwuregwu abụọ bụ ndị ọhụrụ.\"", "Chekwaa atụmatụ ị masịrị"] }
          ],
          tryIt: "Jiri ntuziaka mgbe niile gị nweta atụmatụ mmega ahụ nkeji 90 maka ezi mmega ahụ na-abịa. Mee opekata mpe mgbanwe abụọ site n'ajụjụ nsochi ma chekwaa ya.",
          youCanNow: "ime atụmatụ mmega ahụ dị mma, nwere oge ziri ezi, site n'enyemaka AI.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ progression n'atụmatụ mmega ahụ?", options: ["Omume na-amalite n'ihe dị mfe ruo n'ihe siri ike karị", "Ndepụta akara egwuregwu", "Usoro ndị egwuregwu si abịa", "Ezumike mmiri"], answer: 0, why: "Progression na-ewuli nka nzọụkwụ n'nzọụkwụ." },
            { objective: "O3", q: "Atụmatụ AI chọrọ cone 20, i nwere naanị 8. Gịnị ka ị ga-eme?", options: ["Kagbuo mmega ahụ", "Gwa AI na i nwere cone 8 ma rịọ ya ka ọ dozie ya", "Jiri atụmatụ ahụ ma tụọ anya na ọ ga-adị mma", "Zụta cone tupu mmega ahụ"], answer: 1, why: "Gwa AI ezi oke gị ka atụmatụ ahụ wee rụọ ọrụ n'ama egwuregwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi onye inyeaka nkuzi gị",
        questions: [
          { objective: "O1", q: "Kedu ọrụ dabara ngwa enyemaka nkuzi AI?", options: ["Ikpebi ịlọghachi n'egwuregwu mgbe mmerụ isi (concussion) gasịrị", "Ịdọ onye egwuregwu aka na ntị", "Ide atụmatụ mmega ahụ", "Ikpe ikpe mmetụta onye egwuregwu"], answer: 2, why: "AI na-ede ihe mbụ; mkpebi ahụike na nke onwe na-anọ n'aka mmadụ." },
          { objective: "O1", q: "Gịnị bụ iwu nkuzi maka AI?", options: ["AI na-ede ihe mbụ, onye nkuzi na-ekpebi", "AI na-ekpebi ihe niile", "Ejila AI mgbe ọ bụla", "Ndị egwuregwu na-ekpebi"], answer: 0, why: "Ihe ọ bụla AI wepụtara bụ ihe mbụ." },
          { objective: "O2", q: "Kedu nke kwesịrị ịdị na ntuziaka mgbe niile?", options: ["Aha ndị egwuregwu", "Ozi ahụike ndị egwuregwu", "Akara ule ndị egwuregwu", "Otu afọ ndụ na ogologo mmega ahụ"], answer: 3, why: "Ozi gbasara otu egwuregwu na-enyere aka; ozi nzuzo na-anọ n'ebe ọ na-adịghị." },
          { objective: "O3", q: "Atụmatụ AI nwere omume nwere ihe egwu maka ụmụaka afọ 10. Ị ga:", options: ["Jiri ya n'agbanyeghị", "Were omume dabara afọ ndụ dochie ya", "Mee ka ọ sie ike karị", "Wepụ ezumike mmiri"], answer: 1, why: "Nchekwa na idaba afọ ndụ na-ebu ụzọ." },
          { objective: "O3", q: "Obere egwuregwu bara uru n'ihi na:", options: ["Ọ dị ogologo karị", "Onye ọ bụla na-emekwu bọọlụ aka", "Ọ chọrọ ngwa egwuregwu karịa", "Ndị egwuregwu na-eguzo n'ahịrị"], answer: 1, why: "Ndị egwuregwu ole na ole pụtara na onye ọ bụla na-esonye karịa." }
        ]
      }
    },
    {
      name: "Isi 2: Ozi, ihe nkuzi na iwu nchekwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ozi nye ndị nne na nna na ndị egwuregwu",
          minutes: 5,
          goal: "Jiri AI dee ozi doro anya, nwere obi ọma nye ndị nne na nna ma ọ bụ ndị egwuregwu ma ziga ya site n'ụzọ a kwadoro.",
          text: [
            "Ndị nkuzi na-ede ọtụtụ ozi: usoro oge, mgbanwe, ncheta, ihe a na-atụ anya ya. Jụọ: \"Dee obere ozi enyi nye ndị nne na nna gbasara mgbanwe mmega ahụ izu na-abịa: nke Tuzde ga-aga n'elekere 5 nke mgbede, a kagburu nke Tọzde n'ihi nrụzi ama egwuregwu. Tinye ihe ha ga-ewete. N'okpuru okwu 100.\"",
            "Lelee eziokwu, ụbọchị na ụda okwu. Debe ozi otu ka ọ bụrụ gbasara otu egwuregwu; ekwula maka otu egwuregwu, ahụike ma ọ bụ omume otu onye egwuregwu n'ozi otu mgbe ọ bụla.",
            "Jiri ụzọ ozi ụlọ akwụkwọ gị ma ọ bụ klọb gị kwadoro. Ọtụtụ otu nwere iwu maka ndị nkuzi na-ezi ụmụaka ozi, dịka ọmụmaatụ itinye nne ma ọ bụ nna ma ọ bụ onye nkuzi ọzọ. Mkparịta ụka siri ike, dị ka oge egwuregwu ma ọ bụ omume, ka mma ihu na ihu ma ọ bụ n'ekwentị, ọ bụghị ozi ederede AI dere."
          ],
          steps: ["Rịọ AI ka o dee obere ozi enyi.", "Lelee eziokwu, ụbọchị na ụda okwu.", "Debe ozi otu gbasara otu egwuregwu.", "Ziga ya site n'ụzọ a kwadoro.", "Mee mkparịta ụka siri ike ihu na ihu."],
          words: [["Ụzọ a kwadoro (approved channel)", "ụzọ ozi ụlọ akwụkwọ gị ma ọ bụ klọb gị kwere ka ndị nkuzi jiri."], ["Ụda okwu (tone)", "otu ozi si eme gị n'obi: enyi, siri ike, nwere ọkụ obi."]],
          slides: [
            { title: "AI na-ede ozi mbụ", bullets: ["Usoro oge, mgbanwe, ncheta", "Mkpụmkpụ na nke enyi"] },
            { title: "Lelee", bullets: ["Eziokwu na ụbọchị", "Ụda okwu", "Naanị okwu otu egwuregwu n'ozi otu"] },
            { title: "Ziga ya nke ọma", bullets: ["Ụzọ a kwadoro", "Gbasoo iwu izi ụmụaka ozi", "Mkparịta ụka siri ike ihu na ihu"] }
          ],
          tryIt: "Jiri AI dee ezi ozi ma ọ bụ ozi omume nye ndị nne na nna gbasara mgbanwe usoro oge. Lelee ụbọchị ọ bụla ma ziga ya (ma ọ bụ chekwaa ya) site n'ụzọ a kwadoro.",
          youCanNow: "ide ozi otu egwuregwu doro anya site n'AI ma ziga ha n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ozi otu egwuregwu kwesịrị ịbụ maka ya?", options: ["Omume otu onye egwuregwu", "Mmerụ ahụ otu onye egwuregwu", "Otu egwuregwu, dị ka oge na ebe", "Onye a ga-anọdụ n'oche"], answer: 2, why: "Ozi otu bụ maka akụkọ otu egwuregwu; okwu otu onye bụ nzuzo." },
            { objective: "O4", q: "AI dere ozi nye ndị nne na nna na-ekwu na mmega ahụ dị na Tuzde ụbọchị 14. Gịnị ka ị ga-eme tupu i ziga ya?", options: ["Ziga ya ozugbo", "Tinyekwuo emoji", "Ziga ya site n'akaụntụ nke gị naanị nye ndị egwuregwu", "Lelee ụbọchị ahụ na kalenda"], answer: 3, why: "AI nwere ike imehie ụbọchị, ya mere lelee ụbọchị ọ bụla." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kaadị omume na nnwale playbook",
          minutes: 5,
          goal: "Mee kaadị omume na nnwale ajụjụ ise gbasara playbook.",
          text: [
            "Kaadị omume (drill card) na-enyere ndị nkuzi enyemaka na ndị egwuregwu aka ime omume n'otu ụzọ ahụ. Jụọ: \"Mee kaadị omume otu peeji maka [omume]: ebumnuche, nhazi, nzọụkwụ, isi ihe nkuzi, mperi a na-emekarị, na otu esi eme ka ọ dị mfe ma ọ bụ sie ike karị.\" Tinye obere eserese site na ngwa dị ka Canva ma ọ bụ site n'aka.",
            "Nnwale na-enyere ndị egwuregwu aka ịmụta playbook na iwu. Jụọ: \"Dee ajụjụ ise nwere nhọrọ gbasara egwuregwu out-of-bounds anyị: [kọwaa ya]. Otu azịza ziri ezi n'otu n'otu, ya na obere nkọwa.\" Lelee azịza ọ bụla megide ezi egwuregwu gị.",
            "Jiri ngwa nnwale dị ka Google Forms kesaa ya, n'anakọtaghị ozi onwe karịa ihe dị mkpa."
          ],
          steps: ["Rịọ AI kaadị omume nwere ebumnuche, nhazi, nzọụkwụ na isi ihe nkuzi.", "Tinye obere eserese.", "Kọwaa otu egwuregwu ma rịọ ajụjụ nnwale ise.", "Lelee azịza ọ bụla megide ezi egwuregwu gị.", "Kesaa ya site na fọm dị mfe, na-anakọta obere ozi."],
          words: [["Kaadị omume (drill card)", "ntuziaka otu peeji na-akọwa otu esi eme omume."], ["Playbook", "egwuregwu ndị otu egwuregwu haziri na iwu maka otu esi eme ha."]],
          slides: [
            { title: "Kaadị omume", bullets: ["Ebumnuche, nhazi, nzọụkwụ", "Isi ihe nkuzi, mperi a na-emekarị", "Ụdị dị mfe na ụdị siri ike"] },
            { title: "Nnwale playbook", bullets: ["Kọwaa egwuregwu ahụ", "Ajụjụ ise nwere nkọwa", "Lelee azịza ọ bụla"] },
            { title: "Kesaa ya n'ụzọ dị mfe", bullets: ["Google Forms ma ọ bụ ngwa yiri ya", "Nakọta obere ozi onwe"] }
          ],
          tryIt: "Jiri AI mee otu kaadị omume na nnwale ajụjụ ise gbasara otu n'ime egwuregwu gị. Lelee ha abụọ ma dozie ihe ọ bụla na-ezighi ezi.",
          youCanNow: "ime kaadị omume na nnwale playbook site n'enyemaka AI.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka kaadị omume na-enyere aka?", options: ["Ime omume n'otu ụzọ ahụ mgbe niile", "Ịhọrọ ndị isi otu", "Ịkwụ ụgwọ klọb", "Ịkwado ụgbọ ala"], answer: 0, why: "Kaadị omume na-enye ebumnuche, nhazi, nzọụkwụ na isi ihe nkuzi ka onye ọ bụla mee ya n'otu ụzọ." },
            { objective: "O5", q: "Otu azịza na nnwale playbook AI adabaghị n'ezi egwuregwu gị. Gịnị ka ị ga-eme?", options: ["Kesaa ya n'agbanyeghị", "Dozie azịza ahụ tupu i kesaa ya", "Gbanwee egwuregwu gị ka o yie ya", "Wepụ nnwale ahụ n'ihe ọmụmụ ahụ"], answer: 1, why: "Azịza nnwale ọ bụla ga-adabarịrị otu otu egwuregwu gị si eme egwuregwu ahụ n'ezie." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iwu nchekwa: nzuzo, nchekwa na izi ezi",
          minutes: 5,
          goal: "Dee iwu nchekwa AI nkuzi gị ma gbasoo ha.",
          text: [
            "Nzuzo: etinyela aha ndị egwuregwu ya na ozi ahụike, mmerụ ahụ, akara ule, ọnọdụ ezinụlọ, ozi nkwukọrịta ma ọ bụ foto ụmụaka n'ime ngwa AI mgbe ọ bụla. Jiri ọnọdụ egwuregwu (position) ma ọ bụ nọmba. Lelee iwu otu gị gbasara ngwa ndị a ga-eji na ozi ụmụ akwụkwọ ma ọ bụ ndị egwuregwu.",
            "Nchekwa: AI nwere ike ịtụ aro omume, mmega ike ma ọ bụ omume okpomọkụ ochie ma ọ bụ nwere ihe egwu. Lelee omume megide ntuziaka otu na-achị egwuregwu gị na onye na-elekọta ahụike ndị egwuregwu (athletic trainer), ejikwala AI maka mkpebi ahụike, concussion ma ọ bụ ịlọghachi n'egwuregwu mgbe ọ bụla; ọzụzụ HEADS UP n'efu nke CDC (ụlọ ọrụ ahụike ọha nke US) bụ otu ebe ịmụta ihe ndabere gbasara concussion.",
            "Izi ezi na eziokwu: mkpebi gbasara nhọrọ ndị egwuregwu na oge egwuregwu na-esi n'ihe ị hụrụ n'anya gị, a na-akọwakwa ha ndị egwuregwu ihu na ihu. Gwa ezinụlọ n'eziokwu na ị na-eji AI maka atụmatụ, ma ọ bụrụ na otu gị chọrọ ya."
          ],
          steps: ["Dee iwu nzuzo gị: enweghị aha ya na ozi nzuzo.", "Dee iwu nchekwa gị: lelee omume; enweghị mkpebi ahụike.", "Dee iwu izi ezi gị: mkpebi site n'ihe ị hụrụ, kọwaa ya ihu na ihu.", "Lelee iwu teknụzụ otu gị.", "Kesaa iwu nchekwa ndị ahụ na ndị ọrụ gị."],
          words: [["Iwu nchekwa (guardrail)", "iwu na-echebe gị mgbe ị na-eji ngwa."], ["Otu na-achị egwuregwu (governing body)", "otu na-edo iwu maka egwuregwu gị ma ọ bụ ọkwa gị."]],
          slides: [
            { title: "Nzuzo", bullets: ["Enweghị aha ya na ozi ahụike, akara ule ma ọ bụ ozi ezinụlọ", "Jiri ọnọdụ egwuregwu ma ọ bụ nọmba", "Gbasoo iwu otu gị gbasara ngwa"] },
            { title: "Nchekwa", bullets: ["Lelee omume na mmega ike", "Enweghị mkpebi ahụike ma ọ bụ ịlọghachi n'egwuregwu", "CDC HEADS UP maka ihe ndabere concussion"] },
            { title: "Izi ezi", bullets: ["Mkpebi site n'ihe ị hụrụ", "Kọwaa ya ihu na ihu"] }
          ],
          sources: [{ name: "CDC: ọzụzụ HEADS UP gbasara concussion", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Ọrụ ikpeazụ: dee iwu nchekwa gị na ntuziaka mgbe niile gị, wee jiri AI mee atụmatụ mmega ahụ, ozi nye ndị nne na nna, kaadị omume na nnwale, na-elele nke ọ bụla ma na-akwado na e jighị ozi nzuzo onye egwuregwu ọ bụla.",
          youCanNow: "iji ngwa enyemaka nkuzi AI nwere iwu nchekwa doro anya maka nzuzo, nchekwa na izi ezi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ iwu nchekwa AI nkuzi?", options: ["Ngere gbara ama egwuregwu gburugburu", "Omume maka ndị na-agbachitere", "Iwu na-echebe gị mgbe ị na-eji AI", "Ụdị chaatị"], answer: 2, why: "Iwu nchekwa na-ekwu ihe ị ga-eme na ihe ị gaghị eme site n'AI." },
            { objective: "O6", q: "Ị chọrọ enyemaka AI gbasara ịgbake onye egwuregwu site na concussion. Gịnị ka ị ga-eme?", options: ["Tinye ndetu ahụike n'ime ya", "Gbasoo ụbọchị ịlọghachi AI nyere", "Jụọ ndị otu egwuregwu ya", "Hapụ ya n'aka ndị ọkachamara ahụike"], answer: 3, why: "Mkpebi ịlọghachi n'egwuregwu mgbe concussion gasịrị bụ nke ndị ọkachamara ahụike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ozi, ihe nkuzi na iwu nchekwa",
        questions: [
          { objective: "O4", q: "Ebee ka a ga-ekwu maka omume otu onye egwuregwu?", options: ["N'ozi otu egwuregwu", "Na soshal midia", "N'ozi otu AI dere", "Na nzuzo, ihu na ihu ma ọ bụ n'ekwentị"], answer: 3, why: "Ozi otu na-anọ gbasara otu egwuregwu." },
          { objective: "O5", q: "Kaadị omume nwere:", options: ["Ebumnuche, nhazi, nzọụkwụ na isi ihe nkuzi", "Akara ule ndị egwuregwu", "Ndetu ahụike ndị egwuregwu", "Ọ dịghị ihe"], answer: 0, why: "Ọ na-enyere onye ọ bụla aka ime omume ahụ n'otu ụzọ." },
          { objective: "O5", q: "AI dere nnwale playbook. Tupu i kesaa ya, ị ga:", options: ["Kesaa ya n'agụghị ya", "Tinye azịza aghụghọ", "Lelee azịza ọ bụla megide ezi egwuregwu gị", "Ka AI tụọ ndị egwuregwu akara"], answer: 2, why: "AI nwere ike imehie egwuregwu gị." },
          { objective: "O6", q: "Kedu nke dị mma itinye n'ime AI?", options: ["\"Maria Lopez, ACL tear, on medication\"", "Adreesị ụlọ onye egwuregwu", "Foto na aha zuru ezu nke nwatakịrị", "\"Onye na-agbachitere n'aka ekpe anyị na-ahapụ onye ọ na-eche na corner\""], answer: 3, why: "Ọnọdụ egwuregwu n'enweghị aha ma ọ bụ ozi ahụike na-echebe nzuzo." },
          { objective: "O6", q: "Onye na-eme mkpebi ịlọghachi n'egwuregwu mgbe concussion gasịrị?", options: ["Ngwa enyemaka AI", "Ndị ọkachamara ahụike", "Onye isi otu egwuregwu (captain)", "Ndị nne na nna n'ozi otu"], answer: 1, why: "Mkpebi ahụike bụ nke ndị ọkachamara ruru eru." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa Enyemaka AI maka Ndị Nkuzi Egwuregwu",
    questions: [
      { objective: "O1", q: "Ngwa enyemaka nkuzi AI bụ:", options: ["Robọt nọ n'oche", "Onye ọka ikpe egwuregwu (referee)", "Ngwa enyemaka AI nkịtị e ji maka ọrụ nkuzi", "Onye ọchụchọ talent a na-akwụ ụgwọ"], answer: 2, why: "Ndị nkuzi na-eji ngwa enyemaka n'efu maka ọrụ nkuzi." },
      { objective: "O1", q: "Kedu nke AI NA-ENWEGHỊ ike ime?", options: ["Ịhụ ndị egwuregwu gị ma mara mmetụta ha", "Ide usoro oge", "Ide nkọwa omume", "Ịchịkọta ndetu"], answer: 0, why: "Ọ maara naanị ihe ị gwara ya." },
      { objective: "O1", q: "Onye na-ekpebi oge egwuregwu?", options: ["Onye nkuzi", "AI", "Ozi otu ndị nne na nna", "Otu na-emegide unu"], answer: 0, why: "Oge egwuregwu bụ mkpebi mmadụ." },
      { objective: "O2", q: "Ntuziaka mgbe niile bụ:", options: ["Mgbatị ahụ otu egwuregwu", "Akwụkwọ iwu", "Ozi gbasara ọnọdụ gị ị na-enye AI na mmalite", "Iko mmeri"], answer: 2, why: "Ha na-eme ka azịza dabara otu egwuregwu gị." },
      { objective: "O2", q: "Kedu iwu nchekwa dabara na ntuziaka mgbe niile?", options: ["Enweghị izu ike mgbe ọ bụla", "Ezumike mmiri kwa nkeji 20", "Ịgba ọsọ ntaramahụhụ", "Ịhapụ warm-up"], answer: 1, why: "Iwu nchekwa kwesịrị ịdị na ntuziaka ahụ." },
      { objective: "O2", q: "Gịnị ka ntuziaka mgbe niile kwesịrị ikwu na a gaghị etinye mgbe ọ bụla?", options: ["Ogologo mmega ahụ", "Otu afọ ndụ", "Nha ama egwuregwu", "Aha ndị egwuregwu na ozi ahụike ha"], answer: 3, why: "Ozi nzuzo na-anọ n'ebe ọ na-adịghị." },
      { objective: "O3", q: "Progression bụ:", options: ["Njem ngosi", "Egwuregwu playoff", "Omume na-amalite n'ihe dị mfe ruo n'ihe siri ike karị", "Mgbanwe usoro oge"], answer: 2, why: "Progression na-ewuli nka nzọụkwụ n'nzọụkwụ." },
      { objective: "O3", q: "Oge n'atụmatụ AI gbakọrọ ruo nkeji 120 maka mmega ahụ nkeji 90. Ị ga:", options: ["Mee nkeji 120 n'agbanyeghị", "Hapụ warm-up", "Leghara ya anya", "Rịọ ya ka ọ dozie oge ahụ"], answer: 3, why: "Lelee na oge ha gbakọrọ nke ọma." },
      { objective: "O3", q: "I nwere naanị bọọlụ 10. Ị ga:", options: ["Gwa AI ma rịọ ya ka ọ dozie ya", "Kagbuo mmega ahụ", "Zụta 50 taa", "Leghara atụmatụ ahụ anya"], answer: 0, why: "Ajụjụ nsochi na-eme ka atụmatụ dabara ihe i nwere." },
      { objective: "O4", q: "Ozi nye ndị nne na nna gbasara mgbanwe usoro oge kwesịrị ịbụ:", options: ["Ogologo ma na-edoghị anya", "Mkpụmkpụ, nke enyi, ebe e lelere ụbọchị", "E zigara n'eleleghị ya", "E zigara site n'akaụntụ nke onwe megide iwu klọb"], answer: 1, why: "Ozi doro anya ma ziri ezi kacha mma." },
      { objective: "O4", q: "Ozi otu kwesịrị ịbụ gbasara:", options: ["Mperi otu onye egwuregwu", "Nkọwa mmerụ ahụ otu onye egwuregwu", "Otu egwuregwu", "Asịrị"], answer: 2, why: "Okwu otu onye na-anọ na nzuzo." },
      { objective: "O4", q: "Iwu maka izi ụmụaka ozi na-achọkarị:", options: ["Itinye nne ma ọ bụ nna ma ọ bụ onye nkuzi ọzọ", "Ozi nzuzo", "Izi ozi n'abalị", "Akaụntụ soshal midia nke onwe"], answer: 0, why: "Iwu ndị a na-echebe ndị egwuregwu na ndị nkuzi." },
      { objective: "O4", q: "Mkparịta ụka siri ike gbasara oge egwuregwu ka mma:", options: ["N'ozi ederede AI dere", "Na soshal midia", "N'ozi otu", "Ihu na ihu ma ọ bụ n'ekwentị"], answer: 3, why: "Mkparịta ụka siri ike chọrọ mmetụ mmadụ." },
      { objective: "O5", q: "Kaadị omume na-enyere aka:", options: ["Izo omume ahụ", "Ndị nkuzi enyemaka na ndị egwuregwu ime omume n'otu ụzọ ahụ", "Idochie mmega ahụ", "Ịdekọ akara ule"], answer: 1, why: "Ime ihe n'otu ụzọ na-eme ka mmega ahụ ka mma." },
      { objective: "O5", q: "Nnwale playbook na-elele:", options: ["Ahụike ndị egwuregwu", "Ma ndị egwuregwu maara egwuregwu ndị ahụ", "Akara ule ndị egwuregwu", "Usoro oge ndị nne na nna"], answer: 1, why: "Nnwale na-eme ka ihe a mụtara sie ike." },
      { objective: "O5", q: "Mgbe ị na-eji fọm ekesa nnwale, nakọta:", options: ["Adreesị ụlọ", "Okwuntughe", "Akụkọ ahụike", "Naanị ozi ị chọrọ"], answer: 3, why: "Obere ozi na-echebe ndị egwuregwu." },
      { objective: "O6", q: "Iwu nchekwa (guardrail) bụ:", options: ["Iwu na-echebe gị mgbe ị na-eji ngwa", "Ngere", "Omume mmega ahụ", "Uwe egwuregwu"], answer: 0, why: "Iwu nchekwa na-egbochi iji ngwa n'ụzọ ọjọọ." },
      { objective: "O6", q: "AI tụrụ aro mmega ike siri ike n'oge okpomọkụ dị elu. Ị ga:", options: ["Mee ya", "Mee ka ọ dị ogologo karị", "Lelee ya n'aka athletic trainer gị na ntuziaka otu na-achị egwuregwu", "Hapụ mmiri"], answer: 2, why: "AI nwere ike ịtụ aro omume nwere ihe egwu." },
      { objective: "O6", q: "Otu na-achị egwuregwu (governing body) bụ:", options: ["Ụlọ mmega ahụ", "Onye na-akwado ego", "Otu ndị nne na nna", "Otu na-edo iwu maka egwuregwu gị ma ọ bụ ọkwa gị"], answer: 3, why: "Ọ na-edo iwu gọọmentị egwuregwu ahụ." },
      { objective: "O1", q: "Mkpebi nhọrọ ndị egwuregwu kwesịrị isi na:", options: ["Ntụgharị uche AI", "Ihe onye nkuzi hụrụ n'anya ya", "Soshal midia", "Asịrị"], answer: 1, why: "Mkpebi ziri ezi na-esi n'ezi ihe a hụrụ anya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ntuziaka mgbe niile",
        objective: "O2",
        notYet: "Ọkwa otu egwuregwu, ogologo mmega ahụ ma ọ bụ iwu nchekwa adịghị n'ime ya.",
        meets: "Ọkwa otu egwuregwu, ogologo, ụdị nkuzi, iwu nchekwa na iwu enweghị ozi nzuzo.",
        exceeds: "Ọ na-akpọkwa ngwa egwuregwu na ebe aha ka atụmatụ dabara ezi ama egwuregwu."
      },
      {
        name: "Atụmatụ mmega ahụ",
        objective: "O3",
        notYet: "Oge ha agbakọghị ruo nkeji 90 ma ọ bụ otu omume nwere ihe egwu maka otu afọ ndụ ahụ.",
        meets: "Atụmatụ nkeji 90 nwere oge ziri ezi na omume dị mma, e gbanwere opekata mpe ugboro abụọ.",
        exceeds: "O nwere progression doro anya na ezumike mmiri, ma na-ede ihe mere e ji mee mgbanwe ọ bụla."
      },
      {
        name: "Ozi nye ndị nne na nna",
        objective: "O4",
        notYet: "Ụbọchị ezighi ezi, ụda okwu na-adịghị mma, ma ọ bụ ozi nzuzo onye egwuregwu.",
        meets: "Mkpụmkpụ, nke enyi, e lelere ụbọchị, e zigara ma ọ bụ chekwaa site n'ụzọ a kwadoro.",
        exceeds: "Ọ na-akọwakwa onye a ga-akpọ maka ajụjụ, na-agbaso iwu izi ụmụaka ozi."
      },
      {
        name: "Kaadị omume na nnwale",
        objective: "O5",
        notYet: "Otu nzọụkwụ ma ọ bụ azịza nnwale adabaghị n'ezi omume ma ọ bụ egwuregwu.",
        meets: "Kaadị omume nwere ebumnuche, nhazi, nzọụkwụ na isi ihe nkuzi; ajụjụ nnwale ise e lelere.",
        exceeds: "Nnwale ahụ anaghị anakọta ozi karịa ihe dị mkpa ma na-ekpuchi oge ndị dị mkpa n'egwuregwu ahụ."
      },
      {
        name: "Iwu nchekwa na nzuzo",
        objective: "O6",
        notYet: "Prompt nwere aha ndị egwuregwu ma ọ bụ ozi ahụike, ma ọ bụ AI mere mkpebi onye nkuzi.",
        meets: "E gbasoro iwu nchekwa e dere ede; e jighị ozi nzuzo onye egwuregwu; onye nkuzi debere mkpebi.",
        exceeds: "Iwu nchekwa ahụ na-ekwukwa ebe ajụjụ ahụike na okpomọkụ na-aga."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị nkuzi mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nkuzi kwuru na ha chekwara oge n'atụmatụ na ozi kwa izu (nnyocha nsochi ụbọchị 30)",
      "Klọb ma ọ bụ ụlọ akwụkwọ nabatara iwu nchekwa AI e dere ede maka ndị nkuzi ha",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị egwuregwu n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu",
      "App ndetu ma ọ bụ akwụkwọ iji chekwaa ntuziaka mgbe niile na iwu nchekwa",
      "Usoro oge otu egwuregwu gị, ndepụta ngwa egwuregwu na otu egwuregwu ma ọ bụ omume ị ga-arụ ọrụ na ya",
      "Ihe dị ka nkeji 60 n'ozuzu maka nkuzi, ọrụ omume, nnwale na ule"
    ],
    facilitatorNotes: [
      "Mee ya dị ka ọmụmụ ihe ndị nkuzi (clinic): dee ntuziaka mgbe niile ọnụ, wee ka onye nkuzi ọ bụla dee atụmatụ maka otu egwuregwu nke ya.",
      "Kesaa iwu klọb gị ma ọ bụ ụlọ akwụkwọ gị gbasara izi ụmụaka ozi na ozi ụmụ akwụkwọ tupu Nkuzi 4.",
      "Lelee na ọ dịghị onye tinyere aha ndị egwuregwu, ozi ahụike ma ọ bụ foto ụmụaka n'ime ngwa AI.",
      "Ka athletic trainer ma ọ bụ onye na-ahụ maka nchekwa nyochaa ntuziaka gbasara okpomọkụ na mmega ike.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
