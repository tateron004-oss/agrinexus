"use strict";

// Koach Learn course (Igbo translation of artificial-intelligence/agentic-building-agents.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-building-agents-ig",
  lang: "ig",
  translationOf: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Iwu AI Agent",
  skills: "Ide loop agent na Python, Ịkọwa ngwaọrụ (tools) dị ka function, Ịrịọ model ka o kwuo ihe ọ ga-eme ọzọ na JSON, Idebe ncheta na ndekọ ọrụ (run log), Itinye oke nzọụkwụ na ijikwa mperi",
  outcome: "iwu obere AI agent na-arụ ọrụ na Python n'ime notebook Colab n'efu: loop na-arịọ model ihe ọ ga-eme ọzọ, na-arụ otu n'ime ngwaọrụ abụọ i dere, na-eweghachi nsonaazụ ya, na-akwụsị n'oke nzọụkwụ, ma na-edekọ nzọụkwụ ọ bụla.",
  about: [
    "Nke a bụ ihe ọmụmụ nke 3 nke mmemme Design, Build, and Deploy Autonomous AI Agents (Ịhazi, Iwu na Itinye AI Agent n'Ọrụ). I nweela kaadị nhazi (ihe ọmụmụ 1) na prompt i nwalere (ihe ọmụmụ 2). Ugbu a, ị ga-ewu agent n'onwe ya na Python nkịtị, ka ị hụ akụkụ ọ bụla kama izo ya n'ime framework.",
    "Isi 1 na-ewu loop ahụ: ngwaọrụ dị ka function Python, prompt na-eme ka model họrọ ihe ọ ga-eme na JSON, na koodu na-arụ ihe ahụ ma weghachi nsonaazụ ya. Isi 2 na-eme ka ọ bụrụ ihe a pụrụ ịtụkwasị obi: ncheta, ndekọ ọrụ, oke nzọụkwụ, ijikwa mperi, na ile framework agent ị nwere ike iji n'ọdịnihu.",
    "Ị chọrọ akaụntụ Google maka Colab na igodo API (API key) nke model (Gemini API n'efu site n'ihe ọmụmụ 2 na-arụ ọrụ, ma ọ bụ model dị na kọmputa gị n'efu site na Ollama). E gosiri koodu dị ka ahịrị mkpụmkpụ n'ime nkuzi. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "N'ime notebook Colab, wuo agent nwere ngwaọrụ abụọ i dere (dịka ọmụmaatụ calculator(expression) na lookup_note(topic) na-agụ site n'obere dictionary Python nwere ndetu). Nye ya ebumnuche a: \"Awa ole ka m ga-agụ akwụkwọ n'ọnwa a ma ọ bụrụ na m na-agụ nkeji 45 n'ụbọchị klas ọ bụla e dere na ndetu m?\". Agent ahụ ga-ahọrịrị ngwaọrụ na JSON, rụọ ha, weghachi nsonaazụ, kwụsị n'oke nzọụkwụ 6, jikwaa otu azịza ọjọọ model n'agbajighị, ma bipụta ndekọ nzọụkwụ ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nọ na mmemme Design, Build, and Deploy Autonomous AI Agents mechara ihe ọmụmụ 1 na 2: ndị nwe obere azụmahịa, ndị na-agbanwe ọrụ, ụmụ akwụkwọ na ndị ọrụ chọrọ iwu agent na-arụ ọrụ n'onwe ha.",
    startingPoint: "Ha nwere kaadị nhazi agent na system prompt ha nwalere nke na-eweghachi JSON. Ha nwere ike ịrụ ahịrị Python mkpụmkpụ na Google Colab ma kpọọ model site n'igodo API nzuzo, mana ha edebeghị loop agent.",
    gap: "Framework na-ezo otu agent si arụ ọrụ, ya mere mgbe otu na-akpa àgwà ọjọọ, ndị mbido apụghị ịmata ihe kpatara ya. Ndị na-amụ ihe kwesịrị iji aka ha wuo loop ahụ, nwee ngwaọrụ, ncheta, ndekọ, oke nzọụkwụ na ijikwa mperi, ka agent ha bụrụ ihe a pụrụ ịtụkwasị obi ma ha nwee ike ịchọta mperi ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; e gosiri koodu dị ka ahịrị mkpụmkpụ a ga-edetuo",
      "Ngwaọrụ: kọmputa nwere web browser; Colab n'efu na API n'efu nwere oke",
      "Enweghị ozi nzuzo ma ọ bụ ozi ndị ahịa na ngwaọrụ omume ma ọ bụ ndetu",
      "Igodo API na-anọ n'ebe nzuzo (secret), ọ dịghị mgbe ọ na-anọ n'ime notebook",
      "Oge: nkuzi dị mkpụmkpụ, nke ọ bụla nwere otu ọrụ omume"
    ],
    prerequisites: "Ihe ọmụmụ 1 na 2 nke Design, Build, and Deploy Autonomous AI Agents (\"Ịghọta LLM na Nka Ide Prompt\")."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'ime notebook Colab", action: "ide ngwaọrụ abụọ dị ka function Python nwere aha doro anya, nkọwa otu ahịrị na nlele ihe a na-etinye", standard: "ngwaọrụ ọ bụla na-arụ ọrụ mgbe ị kpọrọ ya n'onwe gị" },
    { id: "O2", condition: "Mgbe e nyere gị ngwaọrụ gị na ebumnuche", action: "ide system prompt na helper ask_model na-eme ka model zaa n'otu ihe ọ ga-eme na JSON", standard: "nke mere na model na-ahọrọ ngwaọrụ ziri ezi ma ọ bụ azịza ikpeazụ" },
    { id: "O3", condition: "Mgbe e nyere gị ihe model họrọrọ ime", action: "ide loop na-arụ ngwaọrụ a họrọrọ ma na-eweghachi nsonaazụ ya nye model", standard: "ruo mgbe model nyere azịza ikpeazụ" },
    { id: "O4", condition: "Mgbe agent na-arụ ọrụ", action: "idebe akụkọ (history) n'usoro ma dekọọ nzọụkwụ ọ bụla na ndekọ ọrụ", standard: "nwere nọmba nzọụkwụ, azịza model, ngwaọrụ, ihe e tinyere na nsonaazụ maka nzọụkwụ ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị azịza ọjọọ model, mperi ngwaọrụ ma ọ bụ ọrụ dị ogologo", action: "itinye oke nzọụkwụ ma jikwaa azịza ọjọọ na mperi ngwaọrụ", standard: "nke mere na agent na-agbake ma ọ bụ kwụsị ma kọọ akụkọ n'agbajighị" },
    { id: "O6", condition: "Mgbe e nyere gị agent i mechara", action: "ịnwale ya n'ebumnuche nkịtị na nke na-agaghị ekwe omume ma kọwaa mgbe framework ga-enyere aka", standard: "ịrụ nnwale ise niile ma dee ihe i dozirị" }
  ],
  chapters: [
    {
      name: "Isi 1: Loop agent na koodu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ngwaọrụ bụ naanị function",
          minutes: 5,
          goal: "Dee ngwaọrụ abụọ dị ka function Python nwere aha na nkọwa doro anya.",
          text: [
            "Nye agent, ngwaọrụ (tool) bụ function koodu gị na-arụ mgbe model rịọrọ. Model anaghị arụ ihe ọ bụla n'onwe ya: ọ na-ede naanị aha ngwaọrụ na ihe a ga-etinye na ya. Koodu gị na-ekpebi ma ọ ga-arụ ya.",
            "Malite na ngwaọrụ dị mma, na-agụ naanị (read-only). Calculator: def calculator(expression): nwere ahụ na-anabata naanị nọmba na + - * / ( ) . wee gbakọọ azịza ya. Ịchọ ndetu: NOTES = {'schedule': 'Class days: Mon, Wed, Thu'}, na def lookup_note(topic): return NOTES.get(topic, 'no note found').",
            "Chịkọta ha n'ime dictionary ka loop wee chọta ha site n'aha: TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Dee nkọwa otu ahịrị maka nke ọ bụla. Model na-agụ nkọwa ndị ahụ iji họrọ, ya mere ha dị mkpa dị ka koodu ahụ."
          ],
          steps: ["Dee ngwaọrụ ọ bụla dị ka function Python nwere otu ihe a na-etinye.", "Mee ka ọ dị mma: lelee ihe a tinyere tupu i jiri ya.", "Weghachi ederede model nwere ike ịgụ, gụnyere ozi doro anya mgbe ọ dara.", "Tinye ngwaọrụ ndị ahụ n'ime dictionary TOOLS.", "Dee nkọwa otu ahịrị maka ngwaọrụ ọ bụla."],
          words: [["Function", "ngalaba koodu nwere aha, na-anara ihe a na-etinye ma na-eweghachi nsonaazụ."], ["Dictionary", "nchịkọta Python nke aha na uru ya, dị ka {'calculator': calculator}."], ["Ngwaọrụ na-agụ naanị (read-only tool)", "ngwaọrụ na-achọ naanị ihe, ọ dịghị ihe ọ na-agbanwe."]],
          slides: [
            { title: "Ngwaọrụ bụ function", bullets: ["Model na-akpọ naanị aha ngwaọrụ na ihe a ga-etinye", "Koodu gị na-ekpebi ma ọ ga-arụ ya"] },
            { title: "Ngwaọrụ mmalite abụọ dị mma", bullets: ["calculator(expression): na-elele ihe a tinyere, na-agbakọ", "lookup_note(topic): na-agụ site na dictionary"] },
            { title: "Mee ka ngwaọrụ dị mfe ịhọrọ", bullets: ["TOOLS = {name: function}", "Otu ahịrị doro anya na-akọwa ngwaọrụ ọ bụla", "Weghachi ozi doro anya mgbe ọ dara"] }
          ],
          tryIt: "N'ime notebook Colab ọhụrụ, dee calculator na lookup_note, tinye ha na TOOLS, ma nwalee nke ọ bụla site n'ịkpọ ya n'onwe gị: calculator('45*12/60') na lookup_note('schedule').",
          youCanNow: "ide ngwaọrụ dị mma dị ka function Python ma debanye ha aha.",
          quickCheck: [
            { objective: "O1", q: "N'ime agent gị, gịnị bụ ngwaọrụ?", options: ["Function Python koodu gị na-arụ mgbe model rịọrọ", "Ntọala n'ime model", "Weebụsaịtị model na-eleta n'onwe ya", "Model AI nke abụọ"], answer: 0, why: "Model na-arịọ naanị; koodu gị na-arụ function ahụ." },
            { objective: "O1", q: "Ngwaọrụ lookup_note gị natara isiokwu na-adịghị na ndetu. Gịnị ka ọ ga-eme?", options: ["Chepụta ndetu yiri ya", "Gbajie ka ị hụ ya", "Weghachi ozi doro anya na a hụghị isiokwu ahụ", "Weghachi dictionary ndetu niile"], answer: 2, why: "Ozi doro anya na-eme ka model nwaa ihe ọzọ kama ịkọ nkọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịrịọ model ihe ọ ga-eme ọzọ",
          minutes: 6,
          goal: "Dee prompt na-eme ka model zaa n'otu ihe ọ ga-eme na JSON.",
          text: [
            "Model kwesịrị ịmara ebumnuche, ngwaọrụ na ụdị azịza. System prompt gị na-edepụta ngwaọrụ ọ bụla na nkọwa ya ma na-asị: zaa naanị na JSON, ma ọ bụ {\"tool\": \"name\", \"input\": \"...\"} iji ngwaọrụ, ma ọ bụ {\"final\": \"...\"} mgbe e mezuru ebumnuche ahụ.",
            "Tinye iwu site na kaadị nhazi gị: jiri naanị ngwaọrụ e depụtara; otu ihe n'otu azịza; ọ bụrụ na nsonaazụ ngwaọrụ kwuru na ọ dara, nwaa ụzọ ọzọ; echepụtala nsonaazụ ngwaọrụ mgbe ọ bụla.",
            "Dee helper ka koodu ndị ọzọ ghara ịma onye na-enye model (provider) ị na-eji: def ask_model(text): na-akpọ model gị (detuo oku ahụ site na quickstart nke provider gị, dị ka n'ihe ọmụmụ 2) ma weghachi ederede azịza ya. Ọ bụrụ na ị gbanwee provider n'ọdịnihu, ọ bụ naanị ask_model ga-agbanwe."
          ],
          steps: ["Depụta aha ngwaọrụ ọ bụla na nkọwa ya n'ime system prompt.", "Nye ụdị azịza JSON abụọ: tool ma ọ bụ final.", "Tinye iwu site na kaadị nhazi gị.", "Dee ask_model(text) na-eweghachi ederede azịza model.", "Nwalee ya otu ugboro na ebumnuche ahụ ma bipụta azịza ya."],
          words: [["Ihe ọ ga-eme (action)", "otu ihe agent kpebiri ime ọzọ, dị ka iji ngwaọrụ ma ọ bụ inye azịza ikpeazụ."], ["Helper function", "obere function na-ezo nkọwa, dị ka provider model ị na-akpọ."]],
          slides: [
            { title: "Prompt na-agwa model", bullets: ["Ebumnuche", "Ngwaọrụ na ihe nke ọ bụla na-eme", "Ụdị azịza JSON kpọmkwem"] },
            { title: "Ụdị azịza abụọ", bullets: ["{\"tool\": \"name\", \"input\": \"...\"}", "{\"final\": \"...\"} mgbe e mezuru ebumnuche"] },
            { title: "Iwu site na kaadị nhazi gị", bullets: ["Naanị ngwaọrụ e depụtara, otu ihe n'otu azịza", "Ọ bụrụ na ngwaọrụ dara, nwaa ụzọ ọzọ", "Echepụtala nsonaazụ ngwaọrụ mgbe ọ bụla"] },
            { title: "Zoo provider", bullets: ["ask_model(text) na-eweghachi ederede azịza", "Gbanwee provider site n'ịgbanwe otu function"] }
          ],
          tryIt: "Dee system prompt na ask_model. Zipu ebumnuche si n'ọrụ ikpeazụ ma bipụta azịza ya. Ọ họrọrọ lookup_note mbụ? Ọ bụrụ na ọ họrọghị, mee ka nkọwa ngwaọrụ ka mma.",
          youCanNow: "ime ka model họrọ ihe ọ ga-eme ọzọ na JSON site na ndepụta ngwaọrụ.",
          quickCheck: [
            { objective: "O2", q: "Kedu ka azịza model kwesịrị ịdị mgbe ọ chọrọ ngwaọrụ?", options: ["Paragraf enyi na-akọwa atụmatụ ya", "Otu ihe JSON na-akpọ aha ngwaọrụ na ihe a ga-etinye", "Koodu Python nke ngwaọrụ ahụ", "Ndepụta ngwaọrụ niile"], answer: 1, why: "Otu ihe JSON bụ ihe loop gị nwere ike ịgụ ma rụọ." },
            { objective: "O2", q: "Model na-ahọrọ calculator tupu o nwee ụbọchị klas. Gịnị ka ị ga-ebu ụzọ gbanwee?", options: ["Wepụ calculator", "Bulie oke nzọụkwụ", "Gbanwee gaa na framework", "Mee ka nkọwa ngwaọrụ ka mma ka ọ mara na ọ ga-ebu ụzọ chọọ ndetu"], answer: 3, why: "Model na-ahọrọ ngwaọrụ site na nkọwa ha, ya mere nkọwa doro anya karị na-eduzi nhọrọ ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịrụ loop: rụọ ma weghachi",
          minutes: 6,
          goal: "Dee loop na-arụ ngwaọrụ a họrọrọ ma na-eweghachi nsonaazụ ya.",
          text: [
            "Loop ahụ dị mkpụmkpụ. history = [] na-ejide ihe mere. Maka nzọụkwụ ọ bụla: wuo ederede (system prompt, ebumnuche, history), kpọọ ask_model, gụọ JSON ahụ. Ọ bụrụ na o nwere 'final', bipụta ya ma kwụsị. Ọ bụrụ na o nwere 'tool', chọọ ya na TOOLS, rụọ ya na ihe a tinyere, ma tinye otu ahịrị na history: ihe e mere na nsonaazụ ya.",
            "Iweghachi nsonaazụ bụ nzọụkwụ ilele (observe) si n'ihe ọmụmụ 1. Na-enweghị ya, model ga-arịọ otu ihe ahụ ruo mgbe ebighị ebi. Mgbe ọ dị, model na-ahụ \"lookup_note(schedule) returned: Class days: Mon, Wed, Thu\" ma nwee ike ikpebi nzọụkwụ ọzọ, dị ka iji calculator.",
            "Ọ bụrụ na model akpọọ aha ngwaọrụ na-adịghị na TOOLS, agbajila: tinye \"Unknown tool: X. Use one of: calculator, lookup_note\" na history ma gaa n'ihu. Ozi doro anya e weghachiri nye model bụ otu agent si agbake site na mperi nke ya."
          ],
          steps: ["history = []", "Wuo ederede: system prompt, ebumnuche, history.", "Kpọọ ask_model ma gụọ JSON ahụ.", "Ọ bụrụ 'final': bipụta ma kwụsị.", "Ọ bụrụ 'tool': rụọ ya site na TOOLS ma tinye ihe e mere na nsonaazụ na history."],
          words: [["History", "ndepụta na-aga n'ihu nke ihe agent mere na nsonaazụ ọ hụrụ n'ọrụ a."], ["Nlele (observation)", "nsonaazụ ngwaọrụ, e weghachiri nye model."]],
          slides: [
            { title: "Nzọụkwụ ọ bụla nke loop", bullets: ["Wuo ederede: prompt, ebumnuche, history", "Jụọ model, gụọ JSON", "Final? Kwụsị. Tool? Rụọ ya."] },
            { title: "Weghachi nsonaazụ", bullets: ["Tinye ihe e mere na nsonaazụ na history", "Model na-ahụ ya na nzọụkwụ ọzọ", "Na-enweghị ya, agent na-ekwughachi onwe ya"] },
            { title: "Ngwaọrụ a na-amaghị?", bullets: ["Agbajila", "Gwa model ngwaọrụ ndị dị", "Hapụ ya ka ọ nwaa ọzọ"] }
          ],
          tryIt: "Dee loop ahụ ma rụọ ya n'ebumnuche ọrụ ikpeazụ. Bipụta history mgbe nzọụkwụ ọ bụla gasịrị. Gụọ nzọụkwụ ole o were iji ruo azịza ikpeazụ.",
          youCanNow: "ide loop agent na-arụ ngwaọrụ ma na-eweghachi nsonaazụ ha nye model.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ nzọụkwụ ilele (observe) n'ime loop?", options: ["Itinye nsonaazụ ngwaọrụ na history ka model hụ ya", "Ibipụta azịza ikpeazụ", "Ịhọrọ ngwaọrụ a ga-ede", "Ịlele igodo API"], answer: 0, why: "Iweghachi nsonaazụ na-eme ka model kpebie nzọụkwụ ọzọ site n'ihe mere." },
            { objective: "O3", q: "Agent gị na-akpọ otu ngwaọrụ ahụ ugboro ugboro. Gịnị bụ ihe ndozi kachasị yie?", options: ["Tinyekwuo ngwaọrụ", "Hụ na e weghachiri nsonaazụ ngwaọrụ ọ bụla na history", "Mee ka system prompt dị mkpụmkpụ", "Jiri notebook ọzọ"], answer: 1, why: "Ọ bụrụ na nsonaazụ adịghị na history, model amaghị na ihe ahụ arụọla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Loop agent na koodu",
        questions: [
          { objective: "O1", q: "Onye na-arụ ngwaọrụ n'ezie n'ime agent?", options: ["Model", "Browser onye ọrụ", "Koodu gị", "Weebụsaịtị ngwaọrụ ahụ"], answer: 2, why: "Model na-akpọ naanị aha ngwaọrụ; koodu gị na-ekpebi ma rụọ ya." },
          { objective: "O1", q: "Gịnị mere ngwaọrụ ọ bụla ji chọọ nkọwa otu ahịrị doro anya?", options: ["Model na-agụ ya iji họrọ ngwaọrụ ziri ezi", "Ọ na-eme ka koodu gbaa ọsọ", "Python chọrọ ya", "Ọ na-ezo ngwaọrụ ahụ n'anya model"], answer: 0, why: "Nkọwa bụ otu model si mara ihe ngwaọrụ ọ bụla bụ maka ya." },
          { objective: "O3", q: "Model zara {\"final\": \"About 27 hours\"}. Gịnị ka loop na-eme?", options: ["Na-arụ calculator", "Na-amalitegharị", "Na-arịọ onye ọrụ okwuntughe", "Na-ebipụta azịza ahụ ma kwụsị"], answer: 3, why: "Azịza final pụtara na e mezuru ebumnuche ahụ." },
          { objective: "O2", q: "Gịnị bụ ebumnuche helper ask_model?", options: ["Ịrụ ngwaọrụ", "Idebe nkọwa provider n'otu ebe", "Idebe igodo API n'ime koodu", "Ịwụfe loop"], answer: 1, why: "Mgbe ahụ, ịgbanwe provider pụtara ịgbanwe otu function." },
          { objective: "O3", q: "Model rịọrọ ngwaọrụ aha ya bụ \"search\" nke i edeghị. Kedu azịza kacha mma?", options: ["Gbajie ka ị hụ ya", "Gwa model ngwaọrụ ndị dị ma gaa n'ihu", "Rụọ nchọta ọ bụla ị hụrụ", "Kwụsị agent ahụ ruo mgbe ebighị ebi"], answer: 1, why: "Ozi doro anya na-eme ka agent gbakee." }
        ]
      }
    },
    {
      name: "Isi 2: Ime ka agent bụrụ ihe a pụrụ ịtụkwasị obi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ncheta na ndekọ ọrụ",
          minutes: 5,
          goal: "Debe ncheta oge nta n'usoro ma dekọọ nzọụkwụ ọ bụla.",
          text: [
            "Ncheta oge nta (short-term memory) bụ ndepụta history i nweburu. Ọ na-eto na nzọụkwụ ọ bụla, a na-ezigakwa ihe niile dị n'ime ya nye model, nke na-efu tokens na oge. Maka ọrụ dị ogologo, debe nzọụkwụ ole na ole ikpeazụ zuru ezu ma were nchịkọta otu ahịrị dochie nzọụkwụ ochie.",
            "Ncheta ogologo oge (long-term memory) bụ ihe ọ bụla e chekwara n'etiti ọrụ: faịlụ ndetu, spreadsheet, obere database. Chekwaa naanị ihe agent chọrọ n'ezie oge ọzọ, echekwala ozi nzuzo ị na-achọghị mgbe ọ bụla.",
            "Ndekọ ọrụ (run log) bụ maka gị, ọ bụghị maka model. Maka nzọụkwụ ọ bụla, dekọọ nọmba nzọụkwụ, azịza model otu o si dị, ngwaọrụ na ihe e tinyere, nsonaazụ na oge. Mgbe agent mere ihe dị iche, ndekọ ahụ na-agwa gị ihe kpatara ya. Ụzọ dị mfe: log.append({'step': n, 'reply': reply, 'result': result}) ma bipụta ya na njedebe."
          ],
          words: [["Ncheta oge nta", "ihe agent na-ahụ n'otu ọrụ: history ruo ugbu a."], ["Ncheta ogologo oge", "ozi e chekwara n'etiti ọrụ, dị ka faịlụ ndetu."], ["Ndekọ ọrụ (run log)", "ndekọ gị nke nzọụkwụ ọ bụla agent mere, maka ilele na ịchọta mperi."]],
          slides: [
            { title: "Ncheta oge nta", bullets: ["Ndepụta history, a na-eziga ya na nzọụkwụ ọ bụla", "History ogologo na-efu tokens na oge", "Chịkọta nzọụkwụ ochie"] },
            { title: "Ncheta ogologo oge", bullets: ["E chekwara n'etiti ọrụ: faịlụ ma ọ bụ database", "Chekwaa naanị ihe a chọrọ", "Enweghị ozi nzuzo ị na-achọghị"] },
            { title: "Ndekọ ọrụ", bullets: ["Nzọụkwụ, azịza model, ngwaọrụ, ihe e tinyere, nsonaazụ, oge", "Maka gị, ọ bụghị maka model", "Gụọ ya mgbe agent mere ihe dị iche"] }
          ],
          tryIt: "Tinye ndepụta log n'ime agent gị ma dekọọ nzọụkwụ ọ bụla. Rụọ ya, wee bipụta log ahụ dị ka tebụl dị mma: nzọụkwụ, ngwaọrụ, ihe e tinyere, nsonaazụ.",
          youCanNow: "ijikwa ncheta agent ma debe ndekọ ọrụ ị nwere ike ịgụ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ncheta oge nta n'ime agent gị?", options: ["Faịlụ e chekwara ruo mgbe ebighị ebi", "Data e ji zụọ model", "Ndepụta history maka ọrụ a", "Dictionary ndetu"], answer: 2, why: "Ncheta oge nta bụ history agent na-edebe n'otu ọrụ." },
            { objective: "O4", q: "Agent nyere azịza dị iche, ị chọkwara ịmata ihe kpatara ya. Gịnị ka ị ga-ele?", options: ["Naanị azịza ikpeazụ", "Igodo API", "Naanị nkọwa ngwaọrụ", "Ndekọ ọrụ nke nzọụkwụ ọ bụla"], answer: 3, why: "Ndekọ ahụ na-egosi azịza, ngwaọrụ, ihe e tinyere na nsonaazụ ọ bụla, ka ị hụ ebe o si mehie." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Oke nzọụkwụ, azịza ọjọọ na mperi",
          minutes: 6,
          goal: "Tinye oke nzọụkwụ ma jikwaa azịza ọjọọ model na mperi ngwaọrụ.",
          text: [
            "Loop ọ bụla chọrọ oke: MAX_STEPS = 6 na for step in range(MAX_STEPS): kama loop na-aga ruo mgbe ebighị ebi. Ọ bụrụ na o ruo oke ahụ n'enweghị azịza ikpeazụ, kwụsị ma kọọ \"Stopped: step limit reached\" (akwụsịrị: e ruola oke nzọụkwụ) ya na ndekọ ahụ.",
            "Azịza ọjọọ na-eme: okwu ndị ọzọ gbara JSON gburugburu, igodo (key) na-efu, azịza efu. Gụọ ya n'ime try na except. Ọ bụrụ na ọ dara, tinye \"Your last reply was not valid JSON. Reply with only JSON.\" (azịza gị ikpeazụ abụghị JSON ziri ezi; zaa naanị na JSON) na history ma hapụ nzọụkwụ ọzọ ka ọ nwaa ọzọ. Gụọ ha; ọ bụrụ na abụọ esoro onwe ha, kwụsị.",
            "Ngwaọrụ na-adakwa: calculator natara mkpụrụedemede, faịlụ na-efu. Ngwaọrụ ọ bụla kwesịrị ijide mperi nke ya ma weghachi ozi doro anya dị ka \"calculator error: only numbers and + - * / allowed\". Model nwere ike idozi ihe ọ tinyere na nzọụkwụ ọzọ."
          ],
          steps: ["Tọọ MAX_STEPS ma jiri range(MAX_STEPS) mee loop.", "Gụọ azịza n'ime try / except.", "Mgbe azịza ọjọọ bịara, gwa model ma gaa n'ihu.", "Kwụsị mgbe azịza ọjọọ abụọ soro onwe ha.", "Mee ka ngwaọrụ ọ bụla weghachi ozi mperi doro anya kama ịgbaji."],
          words: [["Oke nzọụkwụ (step limit)", "ọnụọgụ nzọụkwụ kacha agent nwere ike ime n'otu ọrụ."], ["Exception", "mperi na-eme mgbe mmemme na-arụ ọrụ; try / except na-ejide ya."]],
          slides: [
            { title: "Tọọ oke mgbe niile", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "N'oke ahụ: kwụsị ma kọọ akụkọ"] },
            { title: "Azịza ọjọọ model", bullets: ["Gụọ ya n'ime try / except", "Gwa model: zaa naanị na JSON", "Azịza ọjọọ abụọ soro onwe ha: kwụsị"] },
            { title: "Mperi ngwaọrụ", bullets: ["Ngwaọrụ ọ bụla na-ejide mperi nke ya", "Weghachi ozi mperi doro anya", "Model na-edozi ihe ọ tinyere na nzọụkwụ ọzọ"] }
          ],
          tryIt: "Nwalee koodu nchekwa gị: nwa oge, mee ka ask_model weghachi \"hello\" na nzọụkwụ 2, ma zipu calculator ihe a tinyere 'abc'. Lelee na agent ahụ gbakere, na ọ kwụsịrị n'oke nzọụkwụ mgbe ị tọrọ MAX_STEPS = 2.",
          youCanNow: "igbochi agent ka ọ ghara ịga ruo mgbe ebighị ebi ma nyere ya aka ịgbake site n'azịza ọjọọ na mperi ngwaọrụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka MAX_STEPS na-eme?", options: ["Ọ na-etinye oke n'ọnụọgụ nzọụkwụ agent nwere ike ime", "Ọ na-eme ka model zaa ngwa ngwa", "Ọ na-ejedebe ọnụọgụ ngwaọrụ ị nwere ike ide", "Ọ na-akara ogologo ndekọ"], answer: 0, why: "Oke nzọụkwụ na-akwụsị ọrụ nke gaara aga n'ihu na-akwụsịghị." },
            { objective: "O5", q: "Model zara \"hello\" kama JSON n'otu nzọụkwụ. Gịnị ka agent gị kwesịrị ime?", options: ["Gbajie", "Were \"hello\" dị ka azịza ikpeazụ", "Gwa model ka ọ zaa naanị na JSON ma gaa n'ihu", "Malitegharịa ọrụ niile site na nzọụkwụ 1"], answer: 2, why: "A pụrụ ịgbake site n'otu azịza ọjọọ; agent na-akwụsị naanị mgbe azịza ọjọọ megharịrị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Framework, na imecha agent mbụ gị",
          minutes: 6,
          goal: "Mechaa ma nwalee agent gị, ma mara mgbe framework ga-enyere aka.",
          text: [
            "Framework agent bụ library na-enye gị loop, ijikwa ngwaọrụ na ncheta e meworo. Ndị a ma ama gụnyere LangGraph, CrewAI, OpenAI Agents SDK na Agent Development Kit nke Google, ọtụtụ ndị na-enye model na-akwadokwa native tool calling, ebe model na-eweghachi arịrịọ ngwaọrụ hazịrị ahazi nye gị. Ha na-agbanwe ọtụtụ mgbe, ya mere gụọ akwụkwọ ntụziaka (documentation) nke ọ bụla maka otu esi edozi ya ugbu a.",
            "Iji aka gị buru ụzọ wuo loop ahụ pụtara na ị ghọtara ihe framework na-emere gị, ị nwekwara ike ịchọta mperi ya mgbe o mehiere. Ọtụtụ ezi agent ka bụ loop nkịtị dị ka nke gị.",
            "Tupu ị sị na agent gị agwụla, nwalee ya dị ka n'ihe ọmụmụ 2: ebumnuche atọ o kwesịrị imecha, otu ọ na-agaghị enwe ike (o kwesịrị ikwu ya, ọ bụghị ịchepụta azịza), na otu ihe ọjọọ a tinyere. Gụọ ndekọ maka ọrụ ọ bụla."
          ],
          steps: ["Rụọ agent n'ebumnuche atọ o kwesịrị imecha.", "Rụọ otu ebumnuche ọ na-agaghị enwe ike imecha: o kwesịrị ikwu ya.", "Rụọ otu ihe ọjọọ a tinyere.", "Gụọ ndekọ maka ọrụ ọ bụla.", "Dozie otu adịghị ike ma rụọ ise niile ọzọ."],
          words: [["Framework", "library e meworo na-ejikwa akụkụ ndị a na-ahụkarị nke mmemme maka gị."], ["Native tool calling", "ihe model nwere ebe model na-eweghachi arịrịọ hazịrị ahazi iji ngwaọrụ."]],
          slides: [
            { title: "Framework agent", bullets: ["Loop, ngwaọrụ na ncheta e meworo", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Ha na-agbanwe ọtụtụ mgbe: gụọ akwụkwọ ntụziaka ha"] },
            { title: "Gịnị mere i ji buru ụzọ were aka wuo ya", bullets: ["Ị ghọtara ihe framework na-eme", "Ị nwere ike ịchọta mperi ya", "Ọtụtụ ezi agent bụ loop nkịtị"] },
            { title: "Nwalee tupu ị sị na ọ gwụla", bullets: ["Ebumnuche atọ o kwesịrị imecha", "Otu ọ na-agaghị emecha: o kwesịrị ikwu ya", "Otu ihe ọjọọ a tinyere; gụọ ndekọ niile"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa agent gị nwere ngwaọrụ abụọ n'ebumnuche awa ịgụ akwụkwọ, nwee oke nzọụkwụ 6, otu azịza ọjọọ e si na ya gbake na ndekọ e bipụtara nke nzọụkwụ ọ bụla. Wee rụọ nnwale ise dị n'elu ma dee ahịrịokwu abụọ gbasara ihe i dozirị.",
          youCanNow: "iwu, ịnwale na ịkọwa AI agent na-arụ ọrụ na Python nkịtị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ framework agent?", options: ["Iwu na-amachibido ngwaọrụ", "Loop, ngwaọrụ na ncheta e meworo ị nwere ike iji kama ide nke gị", "Model n'efu", "Ụdị igodo API"], answer: 1, why: "Framework na-achịkọta akụkụ ndị i ji aka wuo n'ihe ọmụmụ a." },
            { objective: "O6", q: "I nyere agent gị ebumnuche ọ na-agaghị enwe ike iru site na ngwaọrụ ya. Gịnị ka ezigbo agent kwesịrị ime?", options: ["Kwuo na ọ gaghị emecha ma gosi ihe ọ nwara", "Chepụta azịza dị ka eziokwu", "Na-aga n'ihu ruo mgbe ebighị ebi", "Kpọọ ngwaọrụ na-adịghị"], answer: 0, why: "Agent eziokwu na-akọ ihe ọ na-enweghị ike ime kama ịchepụta ihe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime ka agent bụrụ ihe a pụrụ ịtụkwasị obi",
        questions: [
          { objective: "O4", q: "Gịnị mere a ga-eji chịkọta nzọụkwụ ochie n'ọrụ dị ogologo?", options: ["Model anaghị echefu ihe ọ bụla", "Ọ na-ezo mperi", "Python apụghị ijide ndepụta ogologo", "History ogologo na-efu tokens na oge"], answer: 3, why: "A na-ezipu ihe niile dị na history na nzọụkwụ ọ bụla." },
          { objective: "O4", q: "Ndekọ ọrụ bụ maka onye karịsịa?", options: ["Gị, iji hụ ihe mere agent ji mee ihe o mere", "Model", "Onye na-enye API", "Ndị ọrụ ndị ọzọ"], answer: 0, why: "Ndekọ ahụ bụ maka ilele na ịchọta mperi." },
          { objective: "O5", q: "Gịnị kwesịrị ime mgbe agent ruru MAX_STEPS n'enweghị azịza ikpeazụ?", options: ["Gaa n'ihu n'agbanyeghị", "Chepụta azịza ikpeazụ", "Kwụsị ma kọọ na e ruola oke ahụ", "Hichapụ ndekọ ahụ"], answer: 2, why: "Kọọ eziokwu ma gosi ndekọ ahụ." },
          { objective: "O5", q: "Calculator natara ihe a tinyere 'abc'. Ngwaọrụ e wuru nke ọma:", options: ["Na-agbaji agent niile", "Na-ehichapụ notebook", "Na-eweghachi efu (zero) na nkịtị", "Na-eweghachi ozi mperi doro anya model nwere ike iji"], answer: 3, why: "Ozi mperi doro anya na-eme ka model dozie ihe ọ tinyere." },
          { objective: "O6", q: "Kedu nke bụ ezigbo nnwale tupu ị sị na agent agwụla?", options: ["Naanị ebumnuche o ji n'aka na ọ ga-emecha", "Enweghị nnwale, naanị nyefee ya", "Ebumnuche ọ na-agaghị emecha, ka ị hụ na ọ na-ekwu ya", "Ịrụ ya otu ugboro"], answer: 2, why: "\"Enweghị m ike\" n'eziokwu ka azịza e chepụtara mma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iwu AI Agent",
    questions: [
      { objective: "O1", q: "Nye agent, ngwaọrụ bụ:", options: ["Weebụsaịtị", "Function koodu gị na-arụ mgbe model rịọrọ", "Model n'onwe ya", "Okwuntughe"], answer: 1, why: "Ngwaọrụ bụ function; model na-akpọ naanị aha ha." },
      { objective: "O1", q: "Kedu ụdị ngwaọrụ kacha dị mma iji malite?", options: ["Ngwaọrụ ịchọ ihe na-agụ naanị", "Ngwaọrụ na-ehichapụ faịlụ", "Ngwaọrụ ịkwụ ụgwọ", "Ngwaọrụ na-ezipu email"], answer: 0, why: "Ngwaọrụ na-agụ naanị anaghị agbanwe ihe ọ bụla." },
      { objective: "O1", q: "TOOLS = {'calculator': calculator} na-eme ka loop:", options: ["Chọta ngwaọrụ site n'aha ya", "Wụfee model", "Chekwaa igodo API", "Mee ka model gbaa ọsọ"], answer: 0, why: "Dictionary ahụ na-ejikọta aha na function." },
      { objective: "O1", q: "Ngwaọrụ kwesịrị ịlele ihe a tinyere n'ihi na:", options: ["Python chọrọ ya", "Model nwere ike iziga ihe na-adịghị mma ma ọ bụ ihe ezighi ezi", "Ọ na-echekwa tokens", "Ọ na-ezo nsonaazụ"], answer: 1, why: "Atụkwasịla obi n'ihe model dere n'eleghị ya anya." },
      { objective: "O2", q: "Kedu azịza pụtara na agent chọrọ iji ngwaọrụ?", options: ["{\"final\": \"done\"}", "\"hello\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Azịza efu"], answer: 2, why: "Ụdị tool na-akpọ aha ngwaọrụ na ihe a ga-etinye." },
      { objective: "O2", q: "Iwu na-enyere eziokwu aka na system prompt bụ:", options: ["\"Ignore failures.\" (Leghara ọdịda anya.)", "\"Always answer in one step.\" (Zaa mgbe niile n'otu nzọụkwụ.)", "\"Use any tool you like.\" (Jiri ngwaọrụ ọ bụla masịrị gị.)", "\"Never invent a tool result.\" (Echepụtala nsonaazụ ngwaọrụ mgbe ọ bụla.)"], answer: 3, why: "Nsonaazụ e chepụtara bụ ọdịda agent a na-ahụkarị." },
      { objective: "O2", q: "ask_model(text) bara uru n'ihi na:", options: ["Ọ na-eme ka igodo bụrụ ihe ọha", "Ọ na-arụ ngwaọrụ", "Ọ na-edebe nkọwa provider n'otu ebe", "Ọ na-ewepụ loop"], answer: 2, why: "Ịgbanwe provider na-agbanwe naanị function ahụ." },
      { objective: "O3", q: "Iweghachi nsonaazụ ngwaọrụ na history bụ nzọụkwụ:", options: ["Ilele (observe)", "Iche echiche (think)", "Ihe mbido (trigger)", "Azịza ikpeazụ"], answer: 0, why: "Ilele nsonaazụ na-eme ka model họrọ nzọụkwụ ọzọ." },
      { objective: "O3", q: "Na-eweghachighị nsonaazụ, agent ga-abụ na ọ ga-:", options: ["Mecha ngwa ngwa", "Dee JSON ka mma", "Dị ọnụ ala karị", "Megharịa otu ihe ahụ"], answer: 3, why: "Ọ naghị amụta ihe mere." },
      { objective: "O3", q: "Model kpọrọ aha ngwaọrụ a na-amaghị. Loop kwesịrị:", options: ["Ịgbaji", "Ịgwa model aha ngwaọrụ ziri ezi ma gaa n'ihu", "Iwunye ngwaọrụ ọhụrụ n'onwe ya", "Inye ya ikike zuru oke na kọmputa"], answer: 1, why: "Ozi doro anya na-enyere agent aka ịgbake." },
      { objective: "O4", q: "Ncheta oge nta n'ime agent gị bụ:", options: ["Faịlụ e chekwara ruo mgbe ebighị ebi", "Ndepụta history maka ọrụ a", "Akaụntụ Google gị", "Data e ji zụọ model"], answer: 1, why: "History bụ ihe model na-ahụ n'ọrụ a." },
      { objective: "O4", q: "Ncheta ogologo oge kwesịrị ichekwa:", options: ["Ihe niile, gụnyere ozi nzuzo", "Ọ dịghị ihe ọ bụla mgbe ọ bụla", "Igodo API gị", "Naanị ihe agent chọrọ oge ọzọ"], answer: 3, why: "Chekwaa naanị ihe a chọrọ; zere ozi nzuzo." },
      { objective: "O4", q: "Ezigbo ndekọ ọrụ na-edekọ:", options: ["Nzọụkwụ, azịza model, ngwaọrụ, ihe e tinyere na nsonaazụ", "Naanị azịza ikpeazụ", "Okwuntughe gị", "Ọ dịghị ihe"], answer: 0, why: "Nzọụkwụ zuru ezu na-eme ka ị hụ ihe kpatara ihe mere." },
      { objective: "O5", q: "for step in range(MAX_STEPS): na-enye agent:", options: ["Nzọụkwụ na-enweghị oke", "Ngwaọrụ ndị ọzọ", "Oke n'ọnụọgụ nzọụkwụ", "Model na-agba ọsọ karị"], answer: 2, why: "Loop ahụ apụghị ịga ruo mgbe ebighị ebi." },
      { objective: "O5", q: "Model zara na okwu gbara JSON gburugburu. Ezigbo agent:", options: ["Na-agbanyụ oke nzọụkwụ", "Na-agbaji", "Na-anabata okwu ndị ahụ dị ka azịza", "Na-agwa model ka ọ zaa naanị na JSON ma gaa n'ihu"], answer: 3, why: "Gbakee otu ugboro, ma kwụsị mgbe ọdịda megharịrị." },
      { objective: "O5", q: "Mgbe ole ka agent kwesịrị ịkwụsị mgbe azịza ọjọọ bịara?", options: ["Ọ dịghị mgbe", "Mgbe okwu mbụ gasịrị", "Mgbe abụọ soro onwe ha", "Naanị mgbe kọmputa gbanyụrụ"], answer: 2, why: "Ọdịda na-emegharị pụtara na ihe adịghị mma." },
      { objective: "O6", q: "Framework agent:", options: ["Anaghị agbanwe mgbe ọ bụla", "Na-enye loop, ngwaọrụ na ncheta e meworo", "Na-ewepụ mkpa nnwale ọ bụla", "Dị mkpa maka agent ọ bụla"], answer: 1, why: "Ha na-enyere aka, mana ha na-agbanwe ọtụtụ mgbe, ha ka chọkwara nnwale." },
      { objective: "O6", q: "Native tool calling pụtara:", options: ["Model na-eweghachi arịrịọ hazịrị ahazi iji ngwaọrụ", "Model na-arụ koodu na kọmputa gị n'onwe ya", "Ị na-eji aka pịnye ngwaọrụ", "Ngwaọrụ na-arụ ọrụ n'enweghị koodu"], answer: 0, why: "Provider na-eweghachi arịrịọ ngwaọrụ hazịrị ahazi nke koodu gị na-arụ." },
      { objective: "O6", q: "Gịnị mere i ji buru ụzọ were aka wuo loop ahụ?", options: ["Ị ghọtara ma nwee ike ịchọta mperi n'ihe framework na-eme", "Framework megidere iwu", "Ọ na-adị ngwa mgbe niile", "Model chọrọ ya"], answer: 0, why: "Ịmara akụkụ ndị ahụ na-eme ka ịchọta mperi kwe omume." },
      { objective: "O6", q: "Mgbe e nyere ya ebumnuche ọ na-agaghị enwe ike iru, ezigbo agent:", options: ["Na-echepụta azịza", "Na-ekwu na ọ gaghị enwe ike ma gosi ihe ọ nwara", "Na-aga ruo mgbe ebighị ebi", "Na-ehichapụ ndekọ ya"], answer: 1, why: "Ọdịda n'eziokwu ka azịza e chepụtara mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 3, 4, 6, 7, 9, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ngwaọrụ abụọ na-arụ ọrụ",
        objective: "O1",
        notYet: "Otu ngwaọrụ na-efu, na-agbaji, ma ọ bụ enweghị nkọwa.",
        meets: "Ngwaọrụ abụọ ahụ na-arụ ọrụ, nwee aha na nkọwa doro anya, ma na-elele ihe a tinyere.",
        exceeds: "Ngwaọrụ na-eweghachi ozi mperi doro anya nke model nwere ike iji mee ihe."
      },
      {
        name: "Ihe a ga-eme na JSON",
        objective: "O2",
        notYet: "Model na-aza n'ederede nkịtị loop apụghị ịgụ.",
        meets: "Model na-ahọrọ ngwaọrụ na azịza ikpeazụ na JSON.",
        exceeds: "Prompt ahụ na-agwakwa model ka ọ ghara ịchepụta nsonaazụ ngwaọrụ mgbe ọ bụla."
      },
      {
        name: "Loop na-eweghachi nsonaazụ",
        objective: "O3",
        notYet: "A naghị eweghachi nsonaazụ ngwaọrụ, ma ọ bụ loop anaghị akwụsị.",
        meets: "Loop na-arụ ngwaọrụ a họrọrọ, na-eweghachi nsonaazụ ma na-akwụsị n'azịza ikpeazụ.",
        exceeds: "A na-ejikwa aha ngwaọrụ a na-amaghị site n'ịgwa model ngwaọrụ ndị dị."
      },
      {
        name: "Oke nchekwa",
        objective: "O5",
        notYet: "Enweghị oke nzọụkwụ, ma ọ bụ azịza ọjọọ na-agbaji agent.",
        meets: "Na-akwụsị n'oke nzọụkwụ 6 ma na-agbake site n'otu azịza ọjọọ model.",
        exceeds: "Na-ejikwa mperi ngwaọrụ ma na-akwụsị mgbe azịza ọjọọ abụọ soro onwe ha."
      },
      {
        name: "Ndekọ ọrụ",
        objective: "O4",
        notYet: "Enweghị ndekọ, ma ọ bụ nzọụkwụ na-efu na ya.",
        meets: "Na-ebipụta ndekọ nzọụkwụ ọ bụla.",
        exceeds: "Ndekọ ahụ bụ tebụl dị mma onye ọzọ nwere ike ịgụ iji kọwaa ọrụ ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe gara n'ihu n'ihe ọmụmụ 4 nke mmemme agent n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha wuru ma ọ bụ megharịa agent maka ezi ọrụ n'ime ụbọchị 30 (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser na ịntanetị",
      "Akaụntụ Google n'efu maka Google Colab",
      "Igodo API model site n'ihe ọmụmụ 2 (Gemini API n'efu) ma ọ bụ model dị na kọmputa gị n'efu site na Ollama",
      "Kaadị nhazi na prompt e nwalere site n'ihe ọmụmụ 1 na 2",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee wuo loop ahụ otu nkuzi n'otu oge, ebe onye ọ bụla na-arụ koodu n'oge ahụ.",
      "Lelee na e chekwara igodo API dị ka secrets, ma ọ dịghị mgbe e gosiri ha na ihuenyo a na-ekerịta.",
      "Mee ka ngwaọrụ omume bụrụ ndị na-agụ naanị, jiri ndetu e chepụtara, ọ bụghị ozi nzuzo ma ọ bụ ozi ndị ahịa.",
      "Mgbe agent na-akpa àgwà ọjọọ, rịọ ndị na-amụ ihe ka ha gụpụta ndekọ ọrụ ha n'olu dị elu tupu ha agbanwee koodu.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma rịọ onye ọ bụla na-amụ ihe ka o gosi azịza ọjọọ e si na ya gbake na ndekọ ya."
    ]
  }
};
