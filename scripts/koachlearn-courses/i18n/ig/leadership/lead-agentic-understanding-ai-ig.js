"use strict";

// Koach Learn course (Igbo translation of leadership/lead-agentic-understanding-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-agentic-understanding-ai-ig",
  lang: "ig",
  translationOf: "lead-agentic-understanding-ai",
  category: "Leadership Development",
  name: "Ndu n'Oge AI Agentic 1: Ịghọta AI",
  skills: "Ịkọwara ndị otu gị AI n'okwu dị mfe, Ịmata ọdịiche dị n'etiti AI generative na AI agentic, Ịhụ ojiji dị mma na nke na-adịghị mma, Ịkpọ aha ihe egwu ndị bụ isi, Ide nkọwa AI maka ndị otu gị",
  outcome: "ịkọwara ndị otu gị, n'okwu dị mfe, ihe AI generative na AI agentic bụ, ebe ha na-enyere aka na ebe ha na-ada, ma duzie nzukọ nkọwa nkeji iri nwere ojiji atọ dị mma, ihe egwu atọ na otu iwu doro anya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị njikwa, ndị nlekọta, ndị isi otu na ndị nwe obere azụmahịa na ụlọ ọrụ anaghị achọ uru (nonprofit). Ọ dịghị mkpa ka i nwee ọmụmụ teknụzụ. Ị ga-enwe ike ikwu banyere AI nke ọma, n'ihi na ndị otu gị na-eji ya ugbu a ma ọ bụ na-ajụ ajụjụ banyere ya.",
    "Isi 1 na-akọwa ihe AI bụ, otu AI generative nke taa si arụ ọrụ, na ihe mere AI agentic ji dị iche. Isi 2 na-enyere gị aka ikpebi ebe AI dabara n'ọrụ ndị otu gị, ihe nwere ike ịga njọ, na otu ị ga-esi kọwaara ndị otu gị ka onye ọ bụla malite n'otu nghọta.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'obere ọrụ ị ga-eme n'ọrụ nke gị. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ. Nke a bụ ihe ọmụmụ 1 n'ime 3 nke Ndu n'Oge AI Agentic."
  ],
  finalTask: "Kwadebe ma nye (ma ọ bụ dekọọ) nkọwa AI nkeji iri maka ndị otu gị. Ọ na-akọwa AI generative na AI agentic n'okwu dị mfe, na-egosi otu ọmụmaatụ ndụ site na ngwa enyemaka AI n'efu, na-akpọ aha ojiji atọ dị mma na ihe egwu atọ n'ezi ọrụ ndị otu gị, ma na-ejedebe n'otu iwu onye ọ bụla ga-agbaso, dị ka \"etinyela ozi nzuzo nke ndị ahịa ma ọ bụ ndị ọrụ n'ime ngwa AI ọha\".",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị njikwa, ndị nlekọta, ndị isi otu na ndị nwe obere azụmahịa na ụlọ ọrụ nonprofit, ndị otu ha na-eji AI ugbu a ma ọ bụ na-ajụ ajụjụ banyere ya. Ọ dịghị mkpa ka ha nwee ọmụmụ teknụzụ.",
    startingPoint: "Ha anụla maka ChatGPT na ngwa ndị yiri ya, ụfọdụ nwalekwala otu. Ha enwebeghị ike ịkọwa AI generative ma ọ bụ AI agentic nke ọma, ikpebi ebe ọ dabara n'ọrụ ndị otu ha, ma ọ bụ ịkpọ aha ihe egwu ya ndị bụ isi.",
    gap: "Ndị otu na-eji AI, ma e nyere ha ntụziaka ma a nyeghị. Ndị isi kwesịrị ịkọwa ya n'okwu dị mfe, ikpebi ojiji dị mma na nke na-adịghị mma, ịkpọ aha ihe egwu ya ma tọọ iwu mbụ, ka ndị ha jiri AI n'enweghị nsogbu ma nwee otu atụmanya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, a tụghị anya ọmụmụ teknụzụ ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, nke dabara n'ụbọchị onye njikwa",
      "Nzuzo: etinyela ozi nzuzo nke ndị ahịa ma ọ bụ ndị ọrụ n'ime ngwa AI ọha mgbe ị na-eme omume",
      "Iwu na usoro nke ụlọ ọrụ ọ bụla gbasara AI na data na-arụ ọrụ"
    ],
    prerequisites: "Ọ dịghị. Nke a bụ ihe ọmụmụ 1 n'ime 3 nke Ndu n'Oge AI Agentic."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe onye otu gị jụrụ ihe AI bụ", action: "ịkọwa AI, machine learning na AI generative n'okwu dị mfe", standard: "n'otu ahịrịokwu maka nke ọ bụla nke onye ọhụrụ n'otu ga-aghọta" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ ndị otu na-eme mgbe niile", action: "ịkọwa ihe ngwa enyemaka AI na AI agent ga-eme n'otu n'otu, na nzọụkwụ ndị mmadụ kwesịrị ịkwado", standard: "na-akpọ aha onye ga-aza ajụjụ maka ya" },
    { id: "O3", condition: "Mgbe e nyere gị ndepụta ọrụ ndị otu gị", action: "ikewa ọrụ ọ bụla n'ojiji AI dị mma, nke chọrọ nlezianya, ma ọ bụ nke na-adịghị mma", standard: "nwere obere ihe kpatara ya maka nke ọ bụla" },
    { id: "O4", condition: "Maka ezi ọrụ ndị otu gị", action: "ịkpọ aha ihe egwu AI atọ kacha ukwuu na otu nchebe maka nke ọ bụla", standard: "nwere nchebe ị nwere ike itinye n'ọrụ n'ọnwa a" },
    { id: "O5", condition: "Site n'iji ngwa enyemaka AI n'efu na ọrụ ndị otu na-enweghị ozi nzuzo", action: "igosi obere ọmụmaatụ ndụ, gụnyere otu ajụjụ nsochi na otu nlele", standard: "n'ejighị ozi nzuzo ọ bụla" },
    { id: "O6", condition: "Gị na ndị otu gị", action: "inye nkọwa AI nkeji iri nke na-ejedebe n'otu iwu", standard: "nke na-ekpuchi ojiji atọ, ihe egwu atọ na iwu ahụ, e zigakwara ya n'ederede ma emechaa" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe ndị isi kwesịrị ịma banyere AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI n'okwu dị mfe",
          minutes: 5,
          goal: "Kọwaa AI, machine learning na AI generative n'otu ahịrịokwu maka nke ọ bụla.",
          text: [
            "Artificial intelligence (AI) bụ mmemme kọmputa na-arụ ọrụ ndị na-achọkarị echiche mmadụ, dị ka ịghọta okwu a na-ekwu, ịhụ usoro (pattern) ma ọ bụ ide ihe. Machine learning bụ ụzọ a na-ejikarị ewu ya: kama ide iwu ọ bụla, ndị mmadụ na-egosi mmemme ahụ ọtụtụ ọmụmaatụ, ọ na-amụtakwa usoro.",
            "AI generative bụ machine learning na-emepụta ihe ọhụrụ: ederede, foto, ụda, koodu. Ngwa dị ka ChatGPT, Microsoft Copilot, Google Gemini na Claude ka e wuru na large language models (LLM) a zụrụ n'ọtụtụ ihe e dere ede. Ha na-ebu amụma okwu nwere ike ịbịa ọzọ; ọ bụ ya mere ha ji ede ihe nke ọma, ọ bụkwa ya mere ha ji ehie ụzọ ma dị ka ha ji n'aka.",
            "Dị ka onye isi, ọ dịghị mkpa ka ị mara mgbakọ na mwepụ ya. Ị chọrọ ahịrịokwu atọ dị mfe ị ga-agwa ndị otu gị, na amamihe ịmata mgbe ngwa ahụ na-enyere aka na mgbe ọ na-eche echiche efu (guessing)."
          ],
          words: [["Artificial intelligence (AI)", "mmemme kọmputa na-arụ ọrụ ndị na-achọkarị echiche mmadụ."], ["Machine learning", "iwu mmemme kọmputa site n'igosi ya ọmụmaatụ ka ọ mụta usoro."], ["AI generative", "AI na-emepụta ederede, foto, ụda ma ọ bụ koodu ọhụrụ."], ["LLM", "large language model: AI dị n'azụ ngwa enyemaka mkparịta ụka."]],
          slides: [
            { title: "Nkọwa atọ dị mfe", bullets: ["AI: mmemme kọmputa na-arụ ọrụ chọrọ echiche", "Machine learning: na-amụta usoro site n'ọmụmaatụ", "AI generative: na-emepụta ederede, foto, koodu"] },
            { title: "Ihe mere o ji dị ka o ji n'aka", bullets: ["LLM na-ebu amụma okwu nwere ike ịbịa", "Ide ihe nke ọma apụtaghị na ọ ziri ezi"] },
            { title: "Ihe onye isi chọrọ", bullets: ["Okwu dị mfe maka ndị otu gị", "Amamihe: ọ na-enyere aka ka ọ na-eche echiche efu?"] }
          ],
          tryIt: "Dee nkọwa nke gị n'otu ahịrịokwu maka AI, machine learning na AI generative, n'okwu onye kacha ọhụrụ n'otu gị ga-aghọta. Gụpụta ha n'olu dị elu.",
          youCanNow: "ịkọwa AI, machine learning na AI generative n'okwu dị mfe.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ machine learning?", options: ["Mmemme kọmputa na-amụta usoro site n'ọmụmaatụ", "Robot na-amụ ije", "Mmadụ na-akuziri kọmputa ihe n'aka, iwu n'iwu", "Mmemme kọmputa na-adịghị emehie ihe mgbe ọ bụla"], answer: 0, why: "Machine learning na-achọta usoro n'ọmụmaatụ kama ịgbaso iwu e ji aka dee." },
            { objective: "O1", q: "Onye ọhụrụ n'otu gị jụrụ ihe AI generative bụ. Kedu azịza ị ga-enye?", options: ["Ọ bụ ngwa nchọcha (search engine) nwere aha ọhụrụ", "Ọ bụ mmemme kọmputa na-eme naanị mgbakọ", "Ọ bụ AI na-emepụta ederede, foto ma ọ bụ koodu ọhụrụ site n'ihe ị rịọrọ", "Ọ bụ mmemme maara eziokwu niile"], answer: 2, why: "AI generative na-emepụta ihe ọhụrụ; ọ maghị eziokwu niile." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Site na ngwa enyemaka ruo agent: ihe AI agentic na-agbanwe",
          minutes: 5,
          goal: "Kọwaa ọdịiche dị n'etiti ngwa enyemaka AI na AI agent, na ihe mere ọ ji dị mkpa nye ndị isi.",
          text: [
            "Ngwa enyemaka AI na-aza mgbe a jụrụ ya: ị rịọ, ọ dee ihe mbụ, gị ekpebie. E na-enye AI agent ebumnuche, ọ na-emekwa ihe: ọ na-ahazi nzọụkwụ, na-eji ngwa dị ka email, kalenda, spreadsheet ma ọ bụ weebụsaịtị, na-elele ihe si na ya pụta, ma na-aga n'ihu ruo mgbe o mechara ma ọ bụ e kwụsịrị ya.",
            "AI agentic na-ewepụ AI na ndụmọdụ banye n'omume. Ngwa enyemaka na-ede azịza mbụ nye onye ahịa; agent nwere ike ịgụ igbe ozi, dee azịza, zipu ha ma melite ndekọ onye ahịa ahụ. Nke ahụ na-echekwa oge karịa, ma o nwekwara ike ime mperi ngwa ngwa, n'aha ụlọ ọrụ gị.",
            "Nye ndị isi, ajụjụ ndị bụ isi na-agbanwe. Ọ bụghị naanị \"azịza ahụ ọ dị mma?\" kama \"gịnị ka a kwere ka o mee, onye na-akwado ihe o mere, onye ga-azakwa ajụjụ mgbe o mehiere ihe?\" Mmadụ ga-aza ajụjụ mgbe niile."
          ],
          words: [["AI agentic", "AI na-arụ ọrụ ruo n'ebumnuche site n'ịhazi nzọụkwụ na iji ngwa mee ihe."], ["Onye ga-aza ajụjụ (accountable)", "onye na-aza maka ihe si na ya pụta, ma ọ dị mma ma ọ bụ njọ."]],
          slides: [
            { title: "Ngwa enyemaka na agent", bullets: ["Ngwa enyemaka: ị jụọ, ọ dee ihe mbụ, gị ekpebie", "Agent: e nye ya ebumnuche, ọ hazie ma mee ihe site na ngwa"] },
            { title: "Site na ndụmọdụ ruo n'omume", bullets: ["Ide azịza mbụ ma ọ bụ iziga ya ma melite ndekọ", "Oge a na-echekwa ka ukwuu, mperi na-adịkwa ngwa ngwa"] },
            { title: "Ajụjụ ọhụrụ nye onye isi", bullets: ["Gịnị ka o nwere ike ime?", "Onye na-akwado ihe o mere?", "Onye ga-aza ajụjụ? Mmadụ mgbe niile"] }
          ],
          tryIt: "Họrọ otu ọrụ ndị otu gị na-eme mgbe niile. Kọwaa ihe ngwa enyemaka AI ga-eme maka ya, na ihe AI agent nwere ike ime. Dee nzọụkwụ ndị ị ga-achọ ka mmadụ kwado.",
          youCanNow: "ịkọwa otu AI agentic si dị iche na ngwa enyemaka na ihe ndị isi ga-ekpebi.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka AI agent nwere ike ime nke ngwa enyemaka nkịtị anaghị eme?", options: ["Ịza ajụjụ mgbe a jụrụ ya", "Ịhazi nzọụkwụ ma jiri ngwa mee ihe ruo n'ebumnuche", "Ide obere email", "Idozi mperi ya n'onwe ya n'amaghị onye ọ bụla"], answer: 1, why: "Agent na-ahazi ma na-eji ngwa eme ihe; ọ bụ ya mere ndị isi ga-ekpebi ihe o nwere ike ime." },
            { objective: "O2", q: "Agent nwere ike iziga ndị ahịa email nkwụghachi ego n'onwe ya. Gịnị ka ị ga-ebu ụzọ kpebie?", options: ["Kwe ka o zipu ihe niile ka e chekwaa oge", "Machibido AI niile n'otu gị", "Kwe ka agent ahụ kpebie nkwụghachi ndị chọrọ mmadụ", "Nzọụkwụ ndị mmadụ ga-akwado na onye ga-aza ajụjụ"], answer: 3, why: "Maka agent, ajụjụ onye isi bụ ihe o nwere ike ime, onye na-akwado, na onye ga-aza ajụjụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ihe AI na-eme nke ọma na ebe ọ na-ada",
          minutes: 5,
          goal: "Kewaa ọrụ n'ojiji AI dị mma, nke chọrọ nlezianya, na nke na-adịghị mma.",
          text: [
            "AI na-eme nke ọma n'ide ihe mbụ (email, mgbasa ozi ọrụ, usoro nzukọ), ịchịkọta akwụkwọ ogologo, ichepụta echiche dị iche iche, idegharị ihe maka ndị na-agụ ọzọ, na ịkọwa isiokwu ị na-amaghị. Ndị a na-echekwa oge n'ihi na mmadụ ka na-elele ihe si na ya pụta.",
            "Kpachara anya n'ihe ọ bụla gbasara eziokwu, iwu, ego, ahụike ma ọ bụ ndị mmadụ: AI nwere ike ichepụta eziokwu, isi iyi na nọmba (a na-akpọkarị ya hallucination), o nwere ike igosipụta ajọ mmasị (bias) dị na data a zụrụ ya, ọ makwaghị usoro ụlọ ọrụ gị ma ọ bụrụ na ị gwaghị ya.",
            "Ojiji na-adịghị mma: mkpebi ikpeazụ gbasara ndị mmadụ (iwe n'ọrụ, ịchụ n'ọrụ, ntaramahụhụ, ụgwọ ọnwa), ihe ọ bụla mperi ya na-enweghị ike idozi, na ihe ọ bụla chọrọ itinye ozi nzuzo n'ime ngwa ọha. Ule dị mfe maka ndị otu gị: ọ ga-adị gị mma ịkọwara onye ihe ahụ metụtara na ọ bụ AI mere ya?"
          ],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Ajọ mmasị (bias)", "usoro na-ezighi ezi n'ihe AI na-ede, nke ọ mụtakarị site na data a zụrụ ya."]],
          slides: [
            { title: "Ojiji dị mma", bullets: ["Ihe mbụ: email, mgbasa ozi, usoro nzukọ", "Nchịkọta na ichepụta echiche", "Idegharị ihe maka ndị na-agụ ọzọ"] },
            { title: "Jiri nlezianya", bullets: ["Eziokwu, iwu, ego, ahụike, ndị mmadụ", "Nwere ike ichepụta eziokwu na isi iyi", "Nwere ike igosipụta ajọ mmasị (bias)"] },
            { title: "Ojiji na-adịghị mma", bullets: ["Mkpebi ikpeazụ gbasara ndị mmadụ", "Mperi na-enweghị ike idozi", "Ozi nzuzo n'ime ngwa ọha"] },
            { title: "Ule ịkọwa ya", bullets: ["Ị ga-agwa onye ọ metụtara na ọ bụ AI mere ya?"] }
          ],
          tryIt: "Depụta ọrụ iri ndị otu gị na-eme. Dee DỊ MMA, NLEZIANYA ma ọ bụ ADỊGHỊ MMA n'akụkụ nke ọ bụla maka AI, na okwu ole na ole kọwara ihe kpatara ya.",
          youCanNow: "ikpebi ọrụ ndị otu gị bụ ojiji AI dị mma, nke chọrọ nlezianya, ma ọ bụ nke na-adịghị mma.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ hallucination nke AI?", options: ["Foto AI mere", "AI ịjụ ịza ajụjụ", "AI ide ihe dị ka eziokwu mana e chepụtara ya", "AI ịrụ ọrụ nwayọọ"], answer: 2, why: "Hallucination na-ada ka ihe e ji n'aka; ọ bụ ya mere a ga-elele ihe AI dere." },
            { objective: "O3", q: "Ndị otu gị chọrọ ka AI kpebie ndị ga-enweta ajụjụ ọnụ ọrụ. Kedu akara ị ga-enye ya?", options: ["NLEZIANYA ma ọ bụ ADỊGHỊ MMA: mmadụ ga-eme mkpebi ahụ, jiri AI naanị nyere aka", "DỊ MMA: AI na-eme ngwa ngwa", "DỊ MMA, ma ọ bụrụhaala na a gwaghị onye ọ bụla", "Ọ baghị uru iche banyere ya"], answer: 0, why: "Mkpebi gbasara ndị mmadụ chọrọ echiche mmadụ, ule ịkọwa ya na-adakwa ma ọ bụrụ na ị ga-ezo ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe ndị isi kwesịrị ịma banyere AI",
        questions: [
          { objective: "O1", q: "Kedu nkọwa dị mfe kacha mma nke AI generative?", options: ["Robot n'ụlọ nrụpụta", "Spreadsheet na-eme ngwa ngwa karị", "AI na-emepụta ederede, foto ma ọ bụ koodu ọhụrụ", "Ngwa nchọcha (search engine)"], answer: 2, why: "AI generative na-emepụta ihe ọhụrụ." },
          { objective: "O1", q: "Gịnị mere ngwa enyemaka AI nwere ike ịdị ka o ji n'aka ma ka hie ụzọ?", options: ["Ọ na-ebu amụma okwu nwere ike ịbịa kama ilele eziokwu", "E mere ya ka ọ ghaa ụgha", "Ọ na-agụ naanị akwụkwọ akụkọ ochie", "O mebiri emebi"], answer: 0, why: "Ibu amụma okwu nke ọma abụghị ilele eziokwu." },
          { objective: "O2", q: "Gịnị kacha egosi na AI bụ \"agentic\"?", options: ["O nwere olu", "Ọ dị oke ọnụ", "Ọ na-ede azịza ogologo", "Ọ na-ahazi nzọụkwụ ma jiri ngwa mee ihe"], answer: 3, why: "Agent na-eme ihe ruo n'ebumnuche, ọ bụghị naanị ịza ajụjụ." },
          { objective: "O2", q: "AI agent zitere onye ahịa email nkwụghachi ego na-ezighi ezi. Onye ga-aza ajụjụ?", options: ["AI ahụ", "Otu onye n'ụlọ ọrụ gị", "Ọ dịghị onye", "Naanị ụlọ ọrụ mere mmemme ahụ"], answer: 1, why: "Mmadụ ga-aza ajụjụ mgbe niile maka ihe AI mere n'aha ụlọ ọrụ ahụ." },
          { objective: "O3", q: "Kedu nke bụ ojiji AI na-ADỊGHỊ MMA?", options: ["Ide usoro nzukọ", "Ichepụta aha maka mmemme", "Ịchịkọta akụkọ ogologo", "Ime mkpebi ikpeazụ ịchụ onye ọrụ n'ọrụ"], answer: 3, why: "Mkpebi ikpeazụ gbasara ndị mmadụ chọrọ echiche mmadụ." }
        ]
      }
    },
    {
      name: "Isi 2: Iduzi nzọụkwụ mbụ ndị otu gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ihe egwu onye isi ọ bụla kwesịrị ịkpọ aha",
          minutes: 5,
          goal: "Kpọọ aha ihe egwu AI ndị bụ isi maka ndị otu gị na otu nchebe maka nke ọ bụla.",
          text: [
            "Nzuzo: ihe ọ bụla e dere n'ime ngwa AI ọha nwere ike ịbụ nke ụlọ ọrụ nwe ya ga-echekwa, ụfọdụ ngwa n'efu nwekwara ike iji ya mee ka ngwa ha ka mma. Nchebe: etinyela ozi ndị ahịa, ndị ọrụ ma ọ bụ ihe nzuzo n'ime ngwa ọha; jiri ngwa ụlọ ọrụ gị kwadoro.",
            "Izi ezi: eziokwu e chepụtara, nọmba ezighi ezi, isi iyi e chepụtara. Nchebe: mmadụ na-elele eziokwu, nọmba na okwu e hotara tupu ihe ọ bụla apụọ. Ajọ mmasị na ikpe ziri ezi: ihe AI dere nwere ike ịbụ ihe na-adịghị mma nye otu ndị mmadụ. Nchebe: ọ dịghị mkpebi gbasara ndị mmadụ nke naanị AI na-eme.",
            "Nchekwa na agent: agent na-agụ email ma ọ bụ peeji weebụ nwere ike ịbụ nke ntụziaka zoro ezo ga-aghọgbu (prompt injection), agent nwere ohere karịrị akarị nwekwara ike imebi ezi ihe. Nchebe: ohere kacha nta (least access) na nkwado mmadụ maka omume. Maka usoro zuru ezu, AI Risk Management Framework n'efu nke NIST na-ahazi ọrụ a n'ọrụ anọ: Govern, Map, Measure na Manage."
          ],
          words: [["Prompt injection", "ederede zoro ezo na-anwa ime ka AI gbasoo ntụziaka onye ọzọ."], ["Ohere kacha nta (least access)", "inye ngwa ma ọ bụ mmadụ naanị ohere ọrụ ahụ chọrọ."], ["NIST AI RMF", "usoro US n'efu, nke a na-amanyeghị mmadụ, maka ijikwa ihe egwu AI. NIST bụ ụlọ ọrụ gọọmentị US na-ahazi ụkpụrụ."]],
          slides: [
            { title: "Nzuzo", bullets: ["Ngwa ọha nwere ike ichekwa ihe ị dere", "Ọ dịghị ozi ndị ahịa, ndị ọrụ ma ọ bụ ihe nzuzo", "Jiri ngwa a kwadoro"] },
            { title: "Izi ezi na ikpe ziri ezi", bullets: ["Lelee eziokwu, nọmba na okwu e hotara", "Ọ dịghị mkpebi gbasara ndị mmadụ nke naanị AI na-eme"] },
            { title: "Nchekwa na agent", bullets: ["Ntụziaka zoro ezo nwere ike ịghọgbu agent", "Ohere kacha nta, nkwado mmadụ maka omume"] },
            { title: "Usoro n'efu", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "A naghị amanye ya; a na-emegharị ya: lelee peeji NIST"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }, { name: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" }],
          tryIt: "Dee ihe egwu AI atọ kacha ukwuu n'ezi ọrụ ndị otu gị, na otu nchebe ị nwere ike itinye n'ọrụ n'ọnwa a maka nke ọ bụla.",
          youCanNow: "ịkpọ aha ihe egwu AI ndị bụ isi nye ndị otu gị na nchebe bara uru maka nke ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ohere kacha nta (least access) pụtara maka ngwa AI?", options: ["Inye ngwa AI ohere niile o kwere omume ka ha rụọ ọrụ nke ọma", "Inye ngwa ọ bụla naanị ohere ọrụ ya chọrọ", "Ikwe ka naanị onye isi jiri AI", "Iji AI ntakịrị o kwere omume"], answer: 1, why: "Ohere kacha nta na-ebelata mmebi ma ọ bụrụ na ngwa mehiere ihe ma ọ bụ e ghọgburu ya." },
            { objective: "O4", q: "Ndị otu gị na-elekọta ndekọ ndị ahịa. Kedu ihe egwu na nchebe kacha dabara?", options: ["Ihe egwu: AI na-eme nwayọọ. Nchebe: zụta kọmputa na-eme ngwa ngwa", "Ihe egwu: AI bụ ihe ọhụrụ. Nchebe: chere afọ ise", "Ihe egwu: ndị ọrụ masịrị AI. Nchebe: gbochie weebụsaịtị niile", "Ihe egwu: ozi nzuzo na-agbapụ n'ime ngwa ọha. Nchebe: buru ụzọ wepụ ozi ahụ ma ọ bụ jiri ngwa a kwadoro"], answer: 3, why: "Ezigbo nchebe na-adaba n'ezi ihe egwu dị n'ọrụ ndị otu ahụ n'onwe ha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nwalee ya n'onwe gị: ọmụmaatụ ndụ ị nwere ike igosi",
          minutes: 5,
          goal: "Gosi obere ọmụmaatụ AI n'enweghị nsogbu n'ezi ọrụ ndị otu (na-enweghị ozi nzuzo).",
          text: [
            "Ndị isi na-eji AI n'onwe ha na-edu ya nke ọma karị. Họrọ ezi ọrụ na-enweghị ozi nzuzo: usoro nzukọ ndị otu gị n'izu na-abịa, ihe mbụ nke mgbasa ozi ọrụ, ma ọ bụ nchịkọta n'okwu dị mfe nke usoro ọha.",
            "Dee prompt doro anya: ihe ị chọrọ, ọnọdụ ya (na-enweghị aha ma ọ bụ ozi nzuzo), na ụdị azịza. Wee mee ka ọ ka mma site n'otu ajụjụ nsochi, dị ka \"mee ka ọ dị mkpụmkpụ\" ma ọ bụ \"dee ya maka ndị ọrụ ọhụrụ\". Lelee eziokwu ọ bụla tupu i jiri ya.",
            "Na nkọwa gị, gosi usoro ahụ niile, gụnyere mperi ma ọ bụrụ na o mere otu. Ịhụ onye isi ka ọ na-achọpụta mperi AI na-akuziri ndị otu ihe karịa ọmụmaatụ zuru oke."
          ],
          steps: ["Họrọ ezi ọrụ na-enweghị ozi nzuzo.", "Dee prompt: ihe ị chọrọ, ọnọdụ, ụdị azịza.", "Jụọ otu ajụjụ nsochi iji mee ka ọ ka mma.", "Lelee eziokwu ma dozie mperi.", "Dee ihe ị ga-egosi ndị otu gị."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa AI iji rịọ ya ihe."], ["Ajụjụ nsochi (follow-up)", "arịrịọ nke abụọ na-eme ka azịza mbụ ka mma."]],
          slides: [
            { title: "Buru ụzọ jiri ya n'onwe gị", bullets: ["Ndị isi na-eji AI na-edu ya nke ọma karị", "Họrọ ezi ọrụ, na-enweghị ozi nzuzo"] },
            { title: "Ezigbo ọmụmaatụ", bullets: ["Prompt doro anya: ihe ị chọrọ, ọnọdụ, ụdị azịza", "Otu ajụjụ nsochi iji mee ka ọ ka mma", "Lelee eziokwu ọ bụla"] },
            { title: "Gosikwa mperi", bullets: ["Ịchọpụta mperi AI na-akuzi ihe kacha ukwuu"] }
          ],
          tryIt: "Jiri ChatGPT, Copilot, Gemini ma ọ bụ Claude dee usoro nzukọ ndị otu gị n'izu na-abịa. Jụọ otu ajụjụ nsochi, lelee ya, ma chekwaa nke tupu na nke mgbe maka nkọwa gị.",
          youCanNow: "igosi obere ọmụmaatụ AI n'enweghị nsogbu na n'eziokwu n'ezi ọrụ ndị otu.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-eme ezigbo ọmụmaatụ AI ndụ maka ndị otu gị?", options: ["Ezi ọrụ na-enweghị ozi nzuzo", "Ọrụ na-eji faịlụ ezi onye ahịa", "Ọrụ e chepụtara na-enweghị njikọ n'ọrụ gị", "Ọmụmaatụ na-ezo mperi ọ bụla"], answer: 0, why: "Ezi ọrụ na-enweghị ozi nzuzo na-egosi uru ya n'etinyeghị data onye ọ bụla n'ihe egwu." },
            { objective: "O5", q: "N'oge ọmụmaatụ gị, AI dere usoro nzukọ nwere ụbọchị nzukọ ezighi ezi. Gịnị ka ị ga-eme?", options: ["Gafee akụkụ ahụ ngwa ngwa", "Tụọ ngwa ahụ ụta ma kwụsị", "Gosi otu i si chọpụta ya ma jụọ ajụjụ nsochi iji dozie ya", "Kwuo na ọ na-ehie ụzọ otu a mgbe niile"], answer: 2, why: "Igosi otu i si chọpụta ya na-akuziri ndị otu gị omume ilele ihe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọwara ndị otu gị na itinye iwu mbụ",
          minutes: 6,
          goal: "Nye ndị otu gị nkọwa AI nkeji iri nke na-ejedebe n'otu iwu.",
          text: [
            "Ezigbo nkọwa mbụ dị mkpụmkpụ ma bara uru. Usoro ya: nkeji abụọ maka ihe AI na AI agentic bụ; nkeji atọ nke ọmụmaatụ ndụ; nkeji abụọ maka ojiji dị mma maka otu anyị; nkeji abụọ maka ihe egwu; otu nkeji maka iwu ahụ na ebe a ga-ajụ ajụjụ.",
            "Họrọ otu iwu na-echebe ndị mmadụ ma dị mfe icheta. Iwu mbụ kacha baa uru maka ọtụtụ otu: \"Etinyela ozi nzuzo nke ndị ahịa, ndị a na-ejere ozi, ụmụ akwụkwọ, ndị ọrịa ma ọ bụ ndị ọrụ n'ime ngwa AI ọha.\" Tinyekwa onye a ga-ajụ mgbe obi abụọ dị.",
            "Kpọọ òkù ka ha jụọ ajụjụ ma kwuo ihe na-echegbu ha. Ụfọdụ ga-enwe obi ụtọ, ụfọdụ ga-echegbu onwe ha maka ọrụ ha. Kwuo n'ụzọ doro anya ihe ị maara, ihe ị na-amaghị, na na ndị mmadụ ka ga-aza ajụjụ maka ọrụ ha. Wee zigara ha iwu ahụ n'ederede."
          ],
          steps: ["Nkeji abụọ: ihe AI na AI agentic bụ.", "Nkeji atọ: ọmụmaatụ ndụ.", "Nkeji abụọ: ojiji dị mma maka otu anyị.", "Nkeji abụọ: ihe egwu.", "Otu nkeji: iwu ahụ na onye a ga-ajụ; wee zipu ya n'ederede."],
          words: [["Iwu mbụ (ground rule)", "iwu dị mfe onye ọ bụla na-agbaso ọnụ."], ["Nkọwa (briefing)", "obere nzukọ iji nye ndị otu otu ozi ahụ."]],
          slides: [
            { title: "Nkọwa nkeji iri", bullets: ["Nkeji 2: ihe AI na agent bụ", "Nkeji 3: ọmụmaatụ ndụ", "Nkeji 2: ojiji dị mma; nkeji 2: ihe egwu", "Nkeji 1: iwu ahụ"] },
            { title: "Iwu mbụ", bullets: ["Etinyela ozi nzuzo n'ime ngwa AI ọha", "Kwuo onye a ga-ajụ mgbe obi abụọ dị"] },
            { title: "Duzie mkparịta ụka ahụ", bullets: ["Kpọọ òkù maka ajụjụ na nchegbu", "Kwuo ihe ị maara na ihe ị na-amaghị", "Ndị mmadụ ka ga-aza ajụjụ; zipu ya n'ederede"] }
          ],
          tryIt: "Ọrụ ikpeazụ: kwadebe nkọwa nkeji iri gị nwere akụkụ ise ahụ dị n'elu, jiri ọmụmaatụ gị site na Nkuzi 5 na ihe egwu gị site na Nkuzi 4. Nye ya ndị otu gị (ma ọ bụ dekọọ ya), jedebe n'otu iwu, ma zipu iwu ahụ n'ederede ma emechaa.",
          youCanNow: "ịkọwara ndị otu gị AI nke ọma ma tọọ iwu mbụ na-echebe ndị mmadụ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka nkọwa AI mbụ kwesịrị iji jedebe?", options: ["Ndepụta ngwa AI niile dị n'ahịa", "Otu iwu doro anya na onye a ga-ajụ", "Nkwa na AI agaghị agbanwe ihe ọ bụla", "Ule nwere akara"], answer: 1, why: "Otu iwu doro anya na onye a ga-akpọtụrụ na-enye ndị otu otu mmalite." },
            { objective: "O6", q: "Otu ụbọchị mgbe nkọwa gị gasịrị, gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Chere ka ị hụ ma onye ọ bụla ọ na-echeta iwu ahụ", "Tinye iwu ise ọzọ", "Gwa AI ka o chetara onye ọ bụla", "Zigara ndị otu iwu ahụ n'ederede"], answer: 3, why: "Iwu e dere ede dị mfe ịchọta ma lee ya anya ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iduzi nzọụkwụ mbụ ndị otu gị",
        questions: [
          { objective: "O4", q: "Onye ọrụ chọrọ itinye mkpesa onye ahịa, nwere aha na adreesị ya, n'ime ngwa AI ọha n'efu. Gịnị bụ azịza kacha mma?", options: ["Gaa n'ihu", "Tinye naanị adreesị ahụ", "Buru ụzọ wepụ ozi nzuzo ahụ, ma ọ bụ jiri ngwa a kwadoro", "Jụọ AI ma ọ dị mma"], answer: 2, why: "Ozi nzuzo anaghị abanye n'ime ngwa ọha." },
          { objective: "O4", q: "Kedu ọrụ anọ nke NIST AI Risk Management Framework?", options: ["Govern, Map, Measure, Manage", "Plan, Build, Test, Ship", "Buy, Install, Train, Use", "Read, Write, Check, Send"], answer: 0, why: "NIST na-akpọ ha Govern, Map, Measure na Manage." },
          { objective: "O5", q: "Ọmụmaatụ ndụ gị nyere ụbọchị ezighi ezi. Gịnị ka ị ga-eme na nkọwa ahụ?", options: ["Zoo ya", "Gosi otu i si chọpụta ma dozie ya", "Kwụsị nkọwa ahụ", "Tụọ ngwa ahụ ụta ma gaa n'ihu"], answer: 1, why: "Ịchọpụta mperi n'ihu mmadụ na-akuzi omume ilele ihe." },
          { objective: "O6", q: "Kedu iwu mbụ kacha mma maka ọtụtụ otu?", options: ["\"Etinyela ozi nzuzo n'ime ngwa AI ọha; jụọ ma obi abụọ dị gị.\"", "\"Ejila AI mgbe ọ bụla.\"", "\"Naanị ndị njikwa nwere ike iji AI.\"", "\"Jiri AI mee ihe niile.\""], answer: 0, why: "Ọ na-echebe ndị mmadụ, ọ dịkwa mfe icheta." },
          { objective: "O6", q: "Onye otu gị na-echegbu onwe ya na AI ga-anọchi ya. Ezigbo onye isi:", options: ["Na-akwụsị nzukọ ahụ", "Na-eleghara nchegbu ahụ anya", "Na-ekwe nkwa na ihe ọ bụla agaghị agbanwe mgbe ọ bụla", "Na-ekwu n'ụzọ doro anya ihe a maara na na ndị mmadụ ka ga-aza ajụjụ"], answer: 3, why: "Azịza eziokwu na nke doro anya na-ewu ntụkwasị obi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ndu n'Oge AI Agentic 1: Ịghọta AI",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa AI bụ:", options: ["Ụdị ihuenyo kọmputa ọhụrụ", "Mmemme kọmputa na-arụ ọrụ ndị na-achọkarị echiche mmadụ", "App soshal midia", "Naanị ụdị robot"], answer: 1, why: "Nke ahụ bụ nkọwa dị mfe." },
      { objective: "O1", q: "Machine learning pụtara:", options: ["Ndị ọrụ na-amụ iji igwe", "Igwe na-arụzi onwe ha", "Mmemme kọmputa na-amụta usoro site n'ọmụmaatụ", "Ide ihe ngwa ngwa karị"], answer: 2, why: "Ọ na-amụta ihe site n'ọmụmaatụ kama iwu e ji aka dee." },
      { objective: "O1", q: "Kedu nke bụ ngwa AI generative?", options: ["Igwe mbipụta", "Igwe mgbakọ", "Microsoft Copilot", "Kọbọd e ji edebe faịlụ"], answer: 2, why: "Copilot, ChatGPT, Gemini na Claude na-emepụta ederede." },
      { objective: "O1", q: "LLM pụtara:", options: ["Large language model", "Long legal memo", "Low-level machine", "Local learning module"], answer: 0, why: "LLM na-akwado ngwa enyemaka mkparịta ụka." },
      { objective: "O2", q: "Ngwa enyemaka AI:", options: ["Anaghị emehie ihe mgbe ọ bụla", "Na-eme ihe n'onwe ya mgbe niile", "Na-abịanye aka na nkwekọrịta", "Na-aza ma na-ede ihe mbụ mgbe a jụrụ ya"], answer: 3, why: "Ngwa enyemaka na-aza; gị na-ekpebi." },
      { objective: "O2", q: "AI agent:", options: ["Na-aza naanị ajụjụ", "Na-ahazi nzọụkwụ ma na-eji ngwa eme ihe ruo n'ebumnuche", "Bụ onye ọrụ mmadụ", "Enweghị ike iji email ma ọ bụ kalenda"], answer: 1, why: "Agent na-eme ihe." },
      { objective: "O2", q: "AI agentic na-agbanwe ajụjụ onye isi ka ọ bụrụ:", options: ["Ọ ma ama?", "Kedu agba o nwere?", "Okwu ole ka o nwere ike ide?", "Gịnị ka o nwere ike ime, onye na-akwado, onye ga-aza ajụjụ?"], answer: 3, why: "Omume chọrọ ikike na onye ga-aza ajụjụ." },
      { objective: "O3", q: "Hallucination pụtara na AI:", options: ["Na-ajụ ịza ajụjụ", "Na-eme ngwa ngwa nke ukwuu", "Na-ede ihe dị ka eziokwu mana e chepụtara ya", "Na-ekwu okwu n'olu dị elu"], answer: 2, why: "A ga-elele ihe e chepụtara echepụta." },
      { objective: "O3", q: "Kedu nke bụ ojiji AI DỊ MMA maka otu?", options: ["Ihe mbụ nke mgbasa ozi ọrụ nke mmadụ na-elele", "Ikpebi onye ga-enweta mmụba ụgwọ ọnwa", "Iziga akwụkwọ ọkwa iwu n'eleghị ha", "Ichekwa ndekọ ahụike ndị ọrụ"], answer: 0, why: "Ihe mbụ ndị mmadụ na-elele na-echekwa oge n'enweghị nsogbu." },
      { objective: "O3", q: "Ihe AI dere nwere ike ịbụ ihe na-adịghị mma nye otu ndị mmadụ n'ihi:", options: ["Ịntanetị na-eme nwayọọ", "Ajọ mmasị (bias) ọ mụtara site na data a zụrụ ya", "Ụdị mkpụrụ akwụkwọ (font) a họọrọ", "Nha ihuenyo"], answer: 1, why: "Usoro dị na data a zụrụ ya nwere ike ibu ajọ mmasị." },
      { objective: "O3", q: "Ule ịkọwa ya na-ajụ:", options: ["Ị ga-agwa onye ọ metụtara na ọ bụ AI mere ya?", "AI ọ nwere ike ịkọwa onwe ya?", "Ọ dị ọnụ ala?", "Ọ na-eme ngwa ngwa?"], answer: 0, why: "Ọ bụrụ na ọ dị gị mma ịkọwa ya, nke ahụ na-egosi na ojiji ahụ dị mma." },
      { objective: "O4", q: "Prompt injection bụ:", options: ["Atụmatụ ọnụ ahịa", "Ọgwụgwọ ahụike", "Prompt na-eme ngwa ngwa karị", "Ederede zoro ezo na-anwa ime ka AI gbasoo iwu onye ọzọ"], answer: 3, why: "Agent na-agụ email ma ọ bụ peeji weebụ nwere ike ịbụ nke a ga-aghọgbu." },
      { objective: "O4", q: "Ohere kacha nta (least access) pụtara:", options: ["Enweghị ohere ọ bụla", "Naanị ohere ọrụ ahụ chọrọ", "Ohere zuru ezu ka o mee ngwa ngwa", "Ohere maka naanị ndị njikwa"], answer: 1, why: "Ohere pere mpe na-ebelata mmebi site na mperi." },
      { objective: "O4", q: "NIST AI RMF bụ:", options: ["Ngwa AI", "Iwu nwere ntaramahụhụ ego", "Usoro n'efu, nke a na-amanyeghị mmadụ, maka ijikwa ihe egwu AI", "Asambodo ọzụzụ"], answer: 2, why: "NIST na-akọwa na a naghị amanye ya." },
      { objective: "O4", q: "Tupu i jiri eziokwu AI dere n'akụkọ, ị kwesịrị:", options: ["Ịrịọ AI ka o kwe nkwa", "Ịtụkwasị ha obi ma ọ bụrụ na ha dị ka eziokwu", "Ịlele ha n'isi iyi a pụrụ ịtụkwasị obi", "Iwepụ nọmba niile"], answer: 2, why: "Mmadụ na-elele eziokwu na nọmba." },
      { objective: "O5", q: "Ezigbo ọmụmaatụ ndụ na-eji:", options: ["Ezi ọrụ na-enweghị ozi nzuzo", "Faịlụ zuru ezu nke onye ahịa", "Data ụgwọ ọnwa ndị ọrụ", "Okwuntughe"], answer: 0, why: "Ezi ọrụ na-enweghị ozi nzuzo dị mma ma dabara." },
      { objective: "O5", q: "Gịnị mere ị ga-eji gosi mperi AI n'oge nkọwa gị?", options: ["Ọ na-egosi na AI abaghị uru", "Ọ na-atọ ọchị", "Ọ na-eme ka nzukọ kwụsị n'oge", "Ọ na-akuzi omume ilele ihe"], answer: 3, why: "Ịhụ ka a na-achọpụta mperi na-akuzi ihe karịa ọmụmaatụ zuru oke." },
      { objective: "O6", q: "Nkọwa mbụ kwesịrị iji jedebe:", options: ["Usoro nwere peeji 50", "Otu iwu doro anya na onye a ga-ajụ", "Enweghị njedebe", "Ịzụta mmemme kọmputa"], answer: 1, why: "A na-echeta ma na-agbaso iwu dị mfe." },
      { objective: "O6", q: "Mgbe nkọwa ahụ gasịrị, ị kwesịrị:", options: ["Ịmachibido ajụjụ", "Ọ dịghị mgbe ị ga-ekwu maka AI ọzọ", "Ihichapụ ọmụmaatụ ahụ", "Iziga iwu ahụ n'ederede"], answer: 3, why: "Ide ya ede na-eme ka ọ nọrọ." },
      { objective: "O6", q: "Mgbe ndị mmadụ jiri AI rụọ ọrụ ha, onye ka ga-aza ajụjụ maka ọrụ ahụ?", options: ["Ụlọ ọrụ AI ahụ", "Ngwa AI ahụ", "Ndị mmadụ na-arụ ọrụ ahụ", "Ọ dịghị onye"], answer: 2, why: "Ịza ajụjụ ka dị n'aka ndị mmadụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 6, 8, 10, 11, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nkọwa dị mfe", objective: "O1", notYet: "Na-eji okwu teknụzụ siri ike, ma ọ bụ na-agwakọta AI generative na AI agentic.", meets: "Na-akọwa AI generative na AI agentic n'okwu dị mfe.", exceeds: "Na-eji ọmụmaatụ site n'ọrụ ndị otu ahụ n'onwe ha nke onye ọ bụla maara." },
      { name: "Ojiji atọ dị mma", objective: "O3", notYet: "Ojiji erughị atọ, ma ọ bụ ojiji na-adabaghị.", meets: "Na-akpọ aha ojiji atọ dị mma maka ezi ọrụ ndị otu ahụ.", exceeds: "Na-ekwu ndị chọrọ ka mmadụ lelee ihe si na ya pụta." },
      { name: "Ihe egwu atọ", objective: "O4", notYet: "Ihe egwu dị n'ozuzu ma ọ bụ adịghị.", meets: "Na-akpọ aha ihe egwu atọ dabara n'ezi ọrụ ndị otu ahụ.", exceeds: "Na-enye nchebe maka ihe egwu ọ bụla." },
      { name: "Ọmụmaatụ ndụ", objective: "O5", notYet: "Enweghị ọmụmaatụ, ma ọ bụ ọ na-eji ozi nzuzo.", meets: "Na-egosi otu ọmụmaatụ ndụ site na ngwa enyemaka AI n'efu n'ọrụ na-enweghị ozi nzuzo.", exceeds: "Na-egosi ajụjụ nsochi na otu e si lelee ihe si na ya pụta." },
      { name: "Iwu mbụ", objective: "O6", notYet: "Enweghị iwu, ma ọ bụ iwu edoghị anya.", meets: "Na-ejedebe n'otu iwu doro anya onye ọ bụla ga-agbaso.", exceeds: "Na-akpọ aha onye a ga-ajụ ma zipu iwu ahụ n'ederede ma emechaa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị isi mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị isi nyere ndị otu ha nkọwa ahụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Otu nwere iwu AI e dere ede n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị isi gara n'ihu n'ihe ọmụmụ 2 nke Ndu n'Oge AI Agentic"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu dị ka ChatGPT, Copilot, Gemini ma ọ bụ Claude",
      "Ndepụta ọrụ ndị otu gị na-eme mgbe niile",
      "Akwụkwọ ma ọ bụ dọkụmentị maka ndetu na usoro nkọwa ahụ",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere nkọwa ndị otu nkeji iri ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee ka ndị njikwa kesaa otu ọrụ ha dere DỊ MMA, NLEZIANYA ma ọ bụ ADỊGHỊ MMA na ihe kpatara ya.",
      "Gosi ọmụmaatụ Nkuzi 5 ndụ n'ihu otu ahụ, gụnyere otu mperi a chọpụtara.",
      "Chetara onye ọ bụla ka o gbasoo iwu AI na data nke ụlọ ọrụ ya, ma ghara iji ozi nzuzo ọ bụla n'omume.",
      "Kwe ka ndị isi mee omume nkọwa ha abụọ abụọ tupu ha enye ndị otu ha ya.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma rịọ iwu ahụ e dere ede dị ka ihe akaebe."
    ]
  }
};
