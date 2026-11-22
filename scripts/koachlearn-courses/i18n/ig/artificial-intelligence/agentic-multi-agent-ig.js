"use strict";

// Koach Learn course (Igbo translation of artificial-intelligence/agentic-multi-agent.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-multi-agent-ig",
  lang: "ig",
  translationOf: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Usoro Agent Ọtụtụ (Multi-Agent Systems)",
  skills: "Ikpebi mgbe otu agent zuru ezu, Ịhọrọ ụkpụrụ: pipeline, orchestrator, onye nyocha, Ide ọrụ na nnyefe, Ịkekọrịta state n'enweghị nsogbu, Ịkwụsị loop nyocha, Itụnyere ya na otu agent",
  outcome: "ịhazi ma wuo obere usoro agent ọtụtụ na Python, agent na-ede ihe na agent na-enyocha ya, nwere ọrụ doro anya, nnyefe e dere ede, state a na-ekekọrịta na oke ugboro, ma jiri obere nnwale gosi ma ọ ka otu agent mma.",
  about: [
    "Nke a bụ ihe ọmụmụ nke 5 nke Design, Build, and Deploy Autonomous AI Agents (Ịhazi, Iwu na Itinye AI Agent n'Ọrụ). Usoro agent ọtụtụ (multi-agent system) na-ekewa otu ọrụ n'etiti ọtụtụ agent, nke ọ bụla nwere ọrụ ya, ntụziaka ya na ngwaọrụ ya, dị ka otu ndị ọrụ si ekewa ọrụ. Ọ bụrụ na e mere ya nke ọma, ọ nwere ike ime ka ọrụ ka mma. Ọ bụrụ na e mere ya nke ọjọọ, ọ na-amụba ego, mgbagwoju anya na mperi.",
    "Isi 1 bụ maka nhazi: mgbe ị ga-eji karịa otu agent, ụkpụrụ ndị a na-ahụkarị (pipeline, orchestrator na ndị ọrụ, onye na-ede na onye nyocha), na otu esi ede ọrụ na nnyefe. Isi 2 bụ maka iwu: state a na-ekekọrịta, ịkwụsị azụ na azụ na-adịghị njedebe, idebe mmadụ n'ọkwa onye isi, na ịnwale ma otu ahụ ọ ka otu agent mma n'ezie.",
    "Ị ga-eji ọzọ loop Python gị na helper ask_model site n'ihe ọmụmụ 3. E gosiri koodu dị ka ahịrị mkpụmkpụ n'ime nkuzi. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Wuo usoro agent abụọ na Python: agent na-ede ihe na-ede paragraf otu nkọwa ngwaahịa site na obere mpempe eziokwu (fact sheet), agent nyocha na-elele ya site na ndepụta nlele e dere ede (na-eji naanị eziokwu dị na mpempe ahụ, na-erughị okwu 80, enweghị okwu dị ka \"best\" ma ọ bụ \"guaranteed\") ma weghachi JSON: approve ma ọ bụ revise, ya na ihe kpatara ya. Zipu ọrụ ahụ site na dictionary state a na-ekekọrịta, kwụsị n'ime ugboro 3 opekata elu, ma bipụta ndekọ zuru ezu. Wee were otu mpempe eziokwu 3 ahụ gafere otu agent, ma dee nke mere nke ọma karịa na ihe kpatara ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nọ na mmemme Design, Build, and Deploy Autonomous AI Agents mechara ihe ọmụmụ 1 ruo 4: ndị nwe obere azụmahịa, ndị na-agbanwe ọrụ, ụmụ akwụkwọ na ndị ọrụ chọrọ ịmata mgbe na otu esi eji otu agent ọtụtụ.",
    startingPoint: "Ha nwere ike iwu otu agent na Python nwere ngwaọrụ, nlele ihe a na-etinye, oke nzọụkwụ, ndekọ ọrụ na nnabata tupu ihe ide (write actions). Ha ekewabeghị otu ọrụ n'etiti agent.",
    gap: "Usoro agent ọtụtụ ama ama, mana ọ bụrụ na e mere ha nke ọjọọ, ha na-amụba ego, mgbagwoju anya na mperi. Ndị na-amụ ihe kwesịrị ikpebi mgbe otu agent bara uru, ịhazi ọrụ na nnyefe doro anya, ịkwụsị loop na-adịghị njedebe, idebe mmadụ n'ọkwa onye isi, na iji nnwale gosi ma otu ahụ ọ ka otu agent mma.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; e gosiri koodu dị ka ahịrị mkpụmkpụ a ga-edetuo",
      "Ngwaọrụ: kọmputa nwere web browser; API n'efu nwere oke n'ọnụ ọgụgụ oku model ị nwere ike ime",
      "Omume na-eji naanị mpempe eziokwu e chepụtara echepụta",
      "Loop ọ bụla nwere oke ugboro ma na-enyefe mmadụ ọrụ a na-edozighị",
      "Oge: nkuzi dị mkpụmkpụ, nke ọ bụla nwere otu ọrụ omume"
    ],
    prerequisites: "Ihe ọmụmụ 3 na 4 nke Design, Build, and Deploy Autonomous AI Agents (\"Iwu AI Agent\" na \"Iji Ngwaọrụ na Automation na AI Agent\")."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ ị nwere ike ime ka ọ na-arụ onwe ya", action: "ikpebi ma ọ chọrọ otu agent ma ọ bụ otu agent ọtụtụ, site n'iji nnwale iwe mmadụ n'ọrụ", standard: "ya na ihe kpatara ya n'otu ahịrịokwu maka ọrụ ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ chọrọ otu agent ọtụtụ", action: "ịhọrọ ụkpụrụ (pipeline, orchestrator na ndị ọrụ, ma ọ bụ onye na-ede na onye nyocha) ma see otu ọrụ si agafe n'etiti agent", standard: "na-akpọ aha ihe na-agafe n'akụ ọ bụla" },
    { id: "O3", condition: "Maka agent ọ bụla nọ n'otu ahụ", action: "ide prompt ọrụ (role prompt) na ụdị nnyefe JSON", standard: "nwere otu ọrụ maka agent ọ bụla na ndepụta nlele onye nyocha a pụrụ ịlele" },
    { id: "O4", condition: "N'ime koodu Python gị", action: "idebe ọrụ otu ahụ n'otu state a na-ekekọrịta nke naanị koodu gị na-emelite", standard: "na-edekọ state ahụ mgbe nzọụkwụ ọ bụla gachara" },
    { id: "O5", condition: "Mgbe e nyere gị loop onye na-ede na onye nyocha", action: "itinye oke ugboro ma nyefe mmadụ ọrụ a na-edozighị", standard: "na-akwụsị na needs_human n'ime ugboro 3 opekata elu" },
    { id: "O6", condition: "Mgbe e nyere gị otu ihe nnwale ahụ", action: "itụnyere otu ahụ na otu agent (baseline) n'ịdị mma na n'ọnụ ọgụgụ oku model", standard: "na-eji otu ndepụta nlele ahụ tụọ akara ha abụọ ma na-ahọrọ nke dị mfe mgbe akara ha hara nhata" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi otu agent",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mgbe otu agent zuru ezu, na mgbe ọ na-ezughị",
          minutes: 5,
          goal: "Kpebie ma ọrụ chọrọ karịa otu agent.",
          text: [
            "Bido n'otu agent. Agent ọ bụla agbakwunyere na-atụkwasị oku model (ego na oge), nnyefe (ebe ozi nwere ike ifu) na ihe ndị ọzọ a ga-anwale. Ọtụtụ ọrụ dị ka ha chọrọ otu agent ọtụtụ na-arụ ọrụ nke ọma n'otu agent nwere ezigbo prompt na ezigbo ngwaọrụ.",
            "Chee maka karịa otu agent mgbe: ọrụ ahụ nwere nka dị iche iche n'ụzọ doro anya (nchọcha, wee ide ihe, wee ilele); otu prompt na-adị ogologo nke ukwuu ma na-agbagwoju anya; ị chọrọ nlele kwụụrụ onwe ya, n'ihi na onye nyocha nwere ntụziaka ọhụrụ na-ahụ mperi onye na-ede hapụrụ; ma ọ bụ akụkụ nwere ike ịrụ n'otu oge.",
            "Nnwale bara uru: ọ bụrụ na ị ga-ewe mmadụ abụọ dị iche iche n'ọrụ maka ya, agent abụọ nwere ike inye aka. Ọ bụrụ na otu onye nwere ike ime ya site na ndepụta nlele, otu agent nwere ndepụta nlele nwere ike ka mma."
          ],
          words: [["Usoro agent ọtụtụ (multi-agent system)", "ọtụtụ AI agent, nke ọ bụla nwere ọrụ ya, na-arụkọ ọrụ ọnụ n'otu ọrụ."], ["Nnyefe (handoff)", "inyefe ọrụ na ozi site n'otu agent gaa n'agent ọzọ."], ["Ọnụ ahịa mgbakwunye (overhead)", "ego na mbọ mgbakwunye nke otu nhazi na-atụkwasị."]],
          slides: [
            { title: "Bido n'otu agent", bullets: ["Agent ọ bụla agbakwunyere na-atụkwasị ego na oge", "Nnyefe ọ bụla nwere ike ime ka ozi fuo", "Akụkụ ndị ọzọ a ga-anwale"] },
            { title: "Chee maka otu agent ọtụtụ mgbe", bullets: ["Ọrụ ahụ chọrọ nka dị iche iche n'ụzọ doro anya", "Otu prompt dị ogologo nke ukwuu ma na-agbagwoju anya", "Ị chọrọ nlele kwụụrụ onwe ya", "Akụkụ nwere ike ịrụ n'otu oge"] },
            { title: "Nnwale iwe mmadụ n'ọrụ", bullets: ["Mmadụ abụọ dị iche iche? Ma eleghị anya agent abụọ", "Otu onye nwere ndepụta nlele? Otu agent"] }
          ],
          tryIt: "Depụta ọrụ atọ ị nwere ike ime ka ha na-arụ onwe ha. Maka nke ọ bụla, dee \"otu agent\" ma ọ bụ \"otu agent ọtụtụ\" na otu ahịrịokwu na-akọwa ihe kpatara ya, site n'iji nnwale iwe mmadụ n'ọrụ.",
          youCanNow: "ikpebi mgbe ọrụ chọrọ n'ezie karịa otu agent.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ nnwale iwe mmadụ n'ọrụ?", options: ["Ịjụ ma mmadụ ga-agafe ajụjụ ọnụ ọrụ", "Ịnwale ma ụlọ ọrụ nwere ike iwe model n'ọrụ", "Ịjụ ma ị ga-ewe mmadụ abụọ dị iche iche n'ọrụ maka ọrụ a", "Ịgụ ọnụ ọgụgụ ngwaọrụ ọrụ chọrọ"], answer: 2, why: "Ọ bụrụ na ị gaghị ewe mmadụ abụọ, otu agent na-ezukarị." },
            { objective: "O1", q: "Ọrụ bụ ịhazi ozi n'ụdị anọ site na ndepụta nlele. Gịnị ka ị ga-ewu?", options: ["Otu agent nwere ntụziaka doro anya", "Otu agent anọ, otu maka ụdị ọ bụla", "Orchestrator nwere ndị ọrụ", "Onye na-ede na onye nyocha"], answer: 0, why: "Ọrụ dị mfe, doro anya, achọghị ego mgbakwunye na nnyefe nke otu agent ọtụtụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ụkpụrụ a na-ahụkarị: pipeline, orchestrator, onye nyocha",
          minutes: 6,
          goal: "Họrọ ụkpụrụ agent ọtụtụ dabara ọrụ.",
          text: [
            "Pipeline: agent na-arụ ọrụ n'usoro a kara aka, nke ọ bụla na-enyefe nke na-esote ihe o mepụtara, dị ka ahịrị nrụpụta n'ụlọ ọrụ: nchọcha, wee ide ihe, wee ịhazi ya. Ọ dị mfe iwu na ịchọta mperi ya, n'ihi na ị na-ama mgbe niile onye ga-eme ihe ọzọ.",
            "Orchestrator na ndị ọrụ: otu agent (orchestrator) na-ekewa ebumnuche ahụ n'akụkụ, na-enye agent ọrụ (worker) ọ bụla otu akụkụ, wee jikọta nsonaazụ ha. Ọ na-agbanwe agbanwe, mana orchestrator nwere ike ikewa ọrụ ahụ nke ọjọọ, nnwere onwe karịa pụtakwara ihe karịa a ga-elele.",
            "Onye na-ede na onye nyocha: otu agent na-emepụta ihe, nke abụọ na-ekpe ya ikpe site na ndepụta nlele, ma ọ bụ nabata ya ma ọ bụ zighachi ya ya na ihe kpatara ya. Nke a bụ ụkpụrụ kacha baa uru maka ndị mbido n'ihi na ọ na-atụkwasị nlele ịdị mma kwụụrụ onwe ya. Ọ chọrọ oke ugboro ka ha abụọ ghara ịrụ ụka ruo mgbe ebighị ebi."
          ],
          words: [["Pipeline", "agent na-arụ ọrụ n'usoro a kara aka, nke ọ bụla na-enyefe nke na-esote ọrụ."], ["Orchestrator", "agent na-ekewa ebumnuche n'ọrụ ma na-enye agent ndị ọzọ ha."], ["Agent nyocha (reviewer)", "agent na-elele ọrụ agent ọzọ site n'iwu doro anya."]],
          slides: [
            { title: "Pipeline", bullets: ["Usoro a kara aka: nchọcha, ide, ịhazi", "Ọ dị mfe iwu na ịchọta mperi"] },
            { title: "Orchestrator na ndị ọrụ", bullets: ["Otu agent na-ekewa ebumnuche", "Ndị ọrụ na-eme akụkụ ndị ahụ", "Ọ na-agbanwe agbanwe, mana o siri ike ilele"] },
            { title: "Onye na-ede na onye nyocha", bullets: ["Otu na-emepụta, otu na-ekpe ikpe site na ndepụta nlele", "Nabata, ma ọ bụ zighachi ya na ihe kpatara ya", "Ọ chọrọ oke ugboro"] }
          ],
          tryIt: "Maka ọrụ \"otu agent ọtụtụ\" site na Nkuzi 1, see agent ndị ahụ dị ka igbe nwere akụ (n'akwụkwọ dị mma). Kpọọ aha ụkpụrụ ọ bụ na ihe na-agafe n'akụ ọ bụla.",
          youCanNow: "ịhọrọ n'etiti pipeline, orchestrator nwere ndị ọrụ, na onye na-ede nwere onye nyocha.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka orchestrator na-eme n'ụkpụrụ orchestrator na ndị ọrụ?", options: ["Na-elele ihe mbụ ọ bụla site na ndepụta nlele", "Na-ekewa ebumnuche ma na-enye ndị ọrụ akụkụ", "Na-echekwa faịlụ na diski", "Na-arụ naanị na njedebe"], answer: 1, why: "Orchestrator na-ekewa ọrụ ma na-enyefe agent ọrụ akụkụ ya." },
            { objective: "O2", q: "Ọrụ gị na-aga mgbe niile: nchọcha, wee ide ihe, wee ịhazi ya, n'usoro ahụ. Kedu ụkpụrụ dabara?", options: ["Onye na-ede na onye nyocha", "Orchestrator na ndị ọrụ", "Enweghị ụkpụrụ; jiri chatbot atọ", "Pipeline"], answer: 3, why: "Usoro nzọụkwụ a kara aka bụ pipeline, ọ dịkwa mfe ịchọta mperi ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide ọrụ na nnyefe",
          minutes: 5,
          goal: "Dee prompt ọrụ maka agent ọ bụla na ụdị nnyefe n'etiti ha.",
          text: [
            "Agent ọ bụla na-enweta system prompt mkpụmkpụ nke ya: onye ọ bụ, otu ọrụ ya, ngwaọrụ ya (naanị ihe ọ chọrọ), na ụdị ihe ọ na-eweghachi. Onye na-ede achọghị ndepụta nlele onye nyocha zuru ezu; onye nyocha achọghị ngwaọrụ ide ihe ma ọlị.",
            "Nnyefe bụ ozi na-agafe n'etiti agent. Mee ka ọ hazie nke ọma, ọ bụghị mkparịta ụka: {\"draft\": \"...\", \"facts_used\": [...]} site n'onye na-ede gaa n'onye nyocha, na {\"decision\": \"approve\" ma ọ bụ \"revise\", \"reasons\": [...]} azụ. Nnyefe a haziri ahazi na-eme ka o doo anya ihe e nyefere ma dị mfe ka koodu lelee ya.",
            "Nye onye nyocha ndepụta nlele, ọ bụghị mmetụta. \"Ọ dị mma?\" na-enweta nkwenye. \"Eziokwu ọ bụla ọ dị na mpempe eziokwu ahụ? Ọ na-erughị okwu 80? Ọ na-ezere okwu best na guaranteed?\" na-enweta ezi nlele."
          ],
          steps: ["Dee prompt ọrụ maka agent ọ bụla: ọrụ ya, otu ọrụ, ngwaọrụ, ụdị ihe ọ na-eweghachi.", "Nye agent ọ bụla naanị ngwaọrụ ọ chọrọ.", "Kọwaa nnyefe dị ka JSON nwere igodo (keys) a kara aka.", "Dee ndepụta nlele onye nyocha dị ka ajụjụ ee/mba."],
          words: [["Prompt ọrụ (role prompt)", "system prompt na-enye otu agent ọrụ ya na iwu ya."], ["Ndepụta nlele (checklist)", "ndepụta nlele ee/mba doro anya a na-eji ekpe ọrụ ikpe."]],
          slides: [
            { title: "Otu prompt ọrụ maka agent ọ bụla", bullets: ["Onye ọ bụ na otu ọrụ ya", "Naanị ngwaọrụ ọ chọrọ", "Ụdị ihe ọ na-eweghachi"] },
            { title: "Nnyefe a haziri ahazi", bullets: ["Onye na-ede -> onye nyocha: ihe mbụ na eziokwu e jiri", "Onye nyocha -> onye na-ede: mkpebi na ihe kpatara ya", "Koodu nwere ike ilele nnyefe ọ bụla"] },
            { title: "Nye onye nyocha ndepụta nlele", bullets: ["\"Ọ dị mma?\" na-enweta nkwenye dị mfe", "Nlele ee/mba na-enweta ezi nyocha"] }
          ],
          tryIt: "Dee prompt ọrụ onye na-ede, prompt ọrụ onye nyocha nwere ndepụta nlele nwere ihe 3, na ụdị nnyefe JSON abụọ ahụ maka usoro ọrụ ikpeazụ.",
          youCanNow: "ide prompt ọrụ na nnyefe a haziri ahazi maka otu agent ọtụtụ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị kwesịrị ịdị na prompt ọrụ?", options: ["Otu ọrụ agent ahụ, ngwaọrụ ya na ụdị ihe ọ na-eweghachi", "Ntụziaka agent ọ bụla ọzọ", "Igodo API gị", "Ndepụta ọrụ niile gara aga"], answer: 0, why: "Prompt ọrụ na-eme ka agent ọ bụla lekwasị anya n'ọrụ ya na ụdị ya." },
            { objective: "O3", q: "A gwara onye nyocha gị \"Lelee ma ihe mbụ ahụ dị mma.\" Gịnị ka ị ga-agbanwe?", options: ["Ọ dịghị ihe, ọ dị mkpụmkpụ", "Nye ya ngwaọrụ ide ihe ka o dozie ihe mbụ", "Dochie ya na ndepụta nlele nwere ajụjụ doro anya ọ nwere ike ịza ee ma ọ bụ mba", "Hapụ ya ka o kpebie iwu nke ya"], answer: 2, why: "Ajụjụ nyocha na-edoghị anya na-eduga na nkwenye dị mfe nke ukwuu; ndepụta nlele na-enye ezi nlele." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi otu agent",
        questions: [
          { objective: "O1", q: "Gịnị bụ mmalite kacha mma maka ọtụtụ ọrụ agent ọhụrụ?", options: ["Agent ise", "Orchestrator nwere ndị ọrụ iri", "Otu agent nwere ezigbo ngwaọrụ", "Enweghị agent"], answer: 2, why: "Agent mgbakwunye na-atụkwasị ego na mgbagwoju anya; bido n'ihe dị mfe." },
          { objective: "O1", q: "Kedu ezigbo ihe kpatara itinye agent nyocha?", options: ["Inweta nlele kwụụrụ onwe ya site n'iwu doro anya", "Ime ka ọrụ ahụ dị ka nnukwu ihe", "Iji token karịa", "N'ihi na abụọ ka mma mgbe niile"], answer: 0, why: "Ntụziaka ọhụrụ na ndepụta nlele na-ahụ mperi onye na-ede hapụrụ." },
          { objective: "O2", q: "Nchọcha, wee ide ihe, wee ịhazi ya, n'usoro a kara aka, bụ:", options: ["Schema", "Orchestrator", "Trigger", "Pipeline"], answer: 3, why: "Pipeline na-enyefe ọrụ n'usoro a kara aka." },
          { objective: "O3", q: "Kedu nnyefe kacha dị mfe ka koodu lelee?", options: ["\"Nke a bụ ihe m chere, enwere m olileanya na ọ ga-enyere aka!\"", "{\"decision\": \"revise\", \"reasons\": [\"over 80 words\"]}", "Paragraf dị ogologo", "Foto"], answer: 1, why: "JSON a haziri ahazi nwere igodo a kara aka koodu nwere ike ịgụ." },
          { objective: "O3", q: "Kedu ntụziaka onye nyocha na-enye ezi nlele kacha?", options: ["\"Ọ dị mma?\"", "\"Kpachara anya n'ikpe ikpe.\"", "\"Ọ na-amasị gị?\"", "\"Eziokwu ọ bụla ọ dị na mpempe eziokwu ahụ, ọ na-erughịkwa okwu 80?\""], answer: 3, why: "Nlele ee/mba doro anya na-egbochi nkwenye dị mfe." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu na ịnwale otu agent",
      lessons: [
        {
          objectives: ["O4"],
          title: "State a na-ekekọrịta: otu ebe maka ọrụ ahụ",
          minutes: 5,
          goal: "Debe ọrụ otu agent n'otu state a na-ekekọrịta nke agent ọ bụla na-agụ site na ya.",
          text: [
            "State a na-ekekọrịta (shared state) bụ otu ebe ọrụ otu ahụ na-ebi, nke koodu gị nwe, ọ bụghị agent ọ bụla. Na Python, dictionary na-arụ ọrụ: state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Agent ọ bụla na-enweta naanị akụkụ ọ chọrọ ma na-eweghachi nnyefe; koodu gị na-elele nnyefe ahụ ma na-emelite state. Onye na-ede na-agụ eziokwu na nyocha ikpeazụ; onye nyocha na-agụ eziokwu na ihe mbụ. Ọ dịghị agent na-agbanwe state ozugbo.",
            "Nke a na-edebe eziokwu n'otu ebe, na-eme ka ndekọ dị mfe (chekwaa state mgbe nzọụkwụ ọ bụla gachara), ma na-egbochi agent ịgafe nnomi na-adị iche nwayọọ nwayọọ. Ọ bụrụ na ihe otu agent mepụtara adịghị mma, koodu gị nwere ike ịjụ ya tupu ọ ruo agent na-esote."
          ],
          steps: ["Mepụta dictionary state nwere ubi (field) ọ bụla otu ahụ chọrọ.", "Nye agent ọ bụla naanị ubi ndị ọ chọrọ.", "Lelee nnyefe ọ bụla na koodu tupu imelite state.", "Chekwaa nnomi state na ndekọ mgbe nzọụkwụ ọ bụla gachara."],
          words: [["State a na-ekekọrịta (shared state)", "otu ndekọ ọrụ otu agent nke koodu na-edebe, nke agent ọ bụla na-agụ site na ya."], ["Ndịiche nwayọọ (drift)", "mgbe nnomi ozi na-adị iche n'ibe ha nwayọọ nwayọọ."]],
          slides: [
            { title: "Otu ebe maka ọrụ ahụ", bullets: ["state = {facts, draft, reviews, round, status}", "Koodu gị nwe ya, ọ bụghị agent"] },
            { title: "Agent na-agụ, koodu na-ede", bullets: ["Agent ọ bụla na-enweta naanị ubi ndị ọ chọrọ", "Koodu na-elele nnyefe, wee melite state"] },
            { title: "Ihe mere o ji enyere aka", bullets: ["Otu eziokwu, enweghị nnomi na-adị iche", "Ndekọ dị mfe: chekwaa state na nzọụkwụ ọ bụla", "E gbochiri ihe ọjọọ tupu agent na-esote"] }
          ],
          tryIt: "Mepụta dictionary state maka ọrụ ikpeazụ. Dee function abụọ, run_writer(state) na run_reviewer(state), nke ọ bụla na-akpọ ask_model na prompt ọrụ ya ma na-eweghachi JSON a gụpụtara, n'agbanweghị state n'onwe ha.",
          youCanNow: "idebe ọrụ usoro agent ọtụtụ n'otu state a na-ekekọrịta nke koodu gị na-achịkwa.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ state a na-ekekọrịta n'usoro agent ọtụtụ?", options: ["Ndetu nzuzo agent ọ bụla", "Otu ebe, nke koodu gị nwe, na-ejide ọrụ otu ahụ", "Ncheta model n'etiti ụbọchị", "Okwuntughe a na-ekekọrịta"], answer: 1, why: "Otu state a na-ekekọrịta nke koodu gị na-emelite na-eme ka agent niile na-arụ ọrụ site n'otu eziokwu." },
            { objective: "O4", q: "Onye na-ede na onye nyocha nwe nnomi ihe mbụ nke ha, nnomi ndị ahụ amalitekwa ịdị iche. Gịnị ka ị ga-eme?", options: ["Hapụ agent ọ bụla ka o melite state ozugbo", "Tinye agent nke atọ ka o jikọta ha", "Leghara ya anya ma ọ bụrụ na azịza ikpeazụ dị mma", "Debe otu state a na-ekekọrịta nke naanị koodu gị na-emelite mgbe o lelechara nnyefe ọ bụla"], answer: 3, why: "Nnomi dị iche na-adị iche nwayọọ nwayọọ; otu state a lelere na-egbochi ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịkwụsị loop na idebe mmadụ n'ọkwa onye isi",
          minutes: 5,
          goal: "Tinye oke ugboro na nnyefe mmadụ na loop onye na-ede na onye nyocha.",
          text: [
            "Agent abụọ nwere ike ịga n'ihu ruo mgbe ebighị ebi: onye nyocha na-ahụ ihe mgbe niile, onye na-ede na-agbanwe ihe mgbe niile. Tinye MAX_ROUNDS = 3. Ọ bụrụ na onye nyocha anabataghị ya ka ọ na-erule mgbe ahụ, kwụsị na status 'needs_human' ma gosi ihe mbụ ikpeazụ na ihe kpatara ya.",
            "Lezie anya maka ọdịda otu agent abụọ ọzọ. Ịkwado n'eleghị anya (rubber-stamping): onye nyocha na-anabata ihe niile, ọtụtụ mgbe n'ihi na ndepụta nlele ya edoghị anya. Ping-pong: onye na-ede na-edozi otu nsogbu ma weghachi nsogbu ochie. Gụọ ndekọ ahụ maka ha abụọ.",
            "Debe mmadụ n'ọkwa onye isi n'ihe a rụpụtara. Otu ahụ na-emepụta ihe mbụ na nyocha; mmadụ na-anabata ihe ọ bụla a ga-ebipụta, zipu ma ọ bụ jiri mee mkpebi. Agent karịa anaghị ewepụ mkpa ebe nlele ahụ; ha na-eme ka ọ dị mkpa karịa."
          ],
          steps: ["Tinye MAX_ROUNDS.", "Loop: onye na-ede na-ede ihe mbụ, onye nyocha na-ekpebi.", "Ọ bụrụ approve: status 'approved', kwụsị.", "Ọ bụrụ revise: nyeghachi onye na-ede ihe kpatara ya.", "N'oke ahụ: status 'needs_human', gosi ihe mbụ na ihe kpatara ya."],
          words: [["Ugboro (round)", "otu okirikiri nke ide ihe mbụ na nyocha."], ["Ịkwado n'eleghị anya (rubber-stamping)", "ịnabata ihe niile n'enyochaghị ya n'ezie."], ["Nnyefe mmadụ (escalation)", "inyefe mmadụ nsogbu mgbe usoro ahụ na-enweghị ike idozi ya."]],
          slides: [
            { title: "Agent abụọ nwere ike ịga n'ihu ebighị ebi", bullets: ["MAX_ROUNDS = 3", "Enweghị nnabata ka ọ na-erule mgbe ahụ: 'needs_human'"] },
            { title: "Ọdịda otu agent abụọ", bullets: ["Ịkwado n'eleghị anya: na-anabata ihe niile", "Ping-pong: nsogbu ochie na-alọghachi", "Gụọ ndekọ ahụ maka ha abụọ"] },
            { title: "Mmadụ ka bụ onye isi", bullets: ["Otu ahụ na-ede ihe mbụ ma na-enyocha", "Mmadụ na-anabata ihe a ga-ebipụta ma ọ bụ zipu"] }
          ],
          tryIt: "Dee loop onye na-ede na onye nyocha nwere MAX_ROUNDS = 3. Nwalee ya na mpempe eziokwu ebe o yiri ka onye na-ede ga-ekwubiga okwu ókè. Wee nwalee oke ahụ site n'ime ka ndepụta nlele onye nyocha ghara ikwe omume (\"under 5 words\") ma hụ na ọ kwụsịrị na needs_human.",
          youCanNow: "ịkwụsị ping-pong agent site n'oke ugboro ma nyefe mmadụ ọrụ a na-edozighị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ ping-pong na loop onye na-ede na onye nyocha?", options: ["Idozi otu nsogbu na-eweghachi nsogbu ochie, ugboro ugboro", "Onye nyocha na-anabata ihe mbụ ọ bụla", "Agent abụọ na-arụ n'otu oge", "Loop dị ngwa nke na-agwụ n'otu ugboro"], answer: 0, why: "Ping-pong bụ azụ na azụ na-adịghị njedebe, ọ bụ ya mere loop ahụ ji chọọ oke ugboro." },
            { objective: "O5", q: "Onye nyocha anabatabeghị mgbe ugboro 3 gachara. Gịnị ka usoro ahụ kwesịrị ime?", options: ["Nabata ihe mbụ ikpeazụ n'agbanyeghị", "Malitegharịa site n'ugboro 1", "Kwụsị na needs_human ma gosi ihe mbụ na ihe kpatara ya", "Bulie oke ahụ ruo ugboro 10"], answer: 2, why: "Ọrụ a na-edozighị na-aga n'aka mmadụ ya na ihe niile ọ chọrọ iji kpebie." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Otu agent ọtụtụ ọ ka otu agent mma? Ịnwale ya",
          minutes: 6,
          goal: "Tụnyere usoro agent ọtụtụ na otu agent n'otu nnwale ahụ.",
          text: [
            "Otu agent ọtụtụ bara uru naanị ma ọ bụrụ na ọ ka mma. Nwalee ya otu i si nwalee prompt n'ihe ọmụmụ 2: otu ihe nnwale ahụ, akara doro anya, na ntụnyere. Mee mpempe eziokwu atọ, gafere ha n'otu agent ọtụtụ ahụ na n'otu agent nwere ndepụta nlele n'ime prompt nke ya.",
            "Tụọ akara ihe ọ bụla e mepụtara site na ndepụta nlele onye nyocha n'onwe gị (ọ bụghị site n'agent nyocha), ma gụọ ọnụ ọgụgụ oku model maka ụzọ nke ọ bụla. Oku model na-anọchi anya ego na oge.",
            "Dee nsonaazụ ahụ n'eziokwu. Ọ bụrụ na otu agent nwetara otu akara ahụ na otu ụzọ n'ụzọ atọ nke oku ahụ, jiri otu agent. Ọ bụrụ na otu agent ọtụtụ ahụ jidere ezi mperi otu agent hapụrụ, oku mgbakwunye ahụ zụtaara gị ịdị mma. Azịza nke ọ bụla bụ ezigbo nsonaazụ injinia."
          ],
          steps: ["Mee mpempe eziokwu nnwale atọ.", "Gafere nke ọ bụla n'otu agent ọtụtụ ahụ na n'otu agent.", "Tụọ akara ihe ọ bụla e mepụtara n'onwe gị site na ndepụta nlele.", "Gụọ ọnụ ọgụgụ oku model maka ụzọ nke ọ bụla.", "Dee ụzọ meriri na ihe kpatara ya."],
          words: [["Baseline", "ụdị dị mfe ị na-eji atụnyere, ebe a otu agent."], ["Oku model (model call)", "otu arịrịọ nye model; oku karịa pụtara ego na oge karịa."]],
          slides: [
            { title: "Otu agent ọtụtụ ga-akpata ọnọdụ ya", bullets: ["Otu ihe nnwale ahụ, akara doro anya, ntụnyere", "Baseline: otu agent nwere ndepụta nlele"] },
            { title: "Tụọ ihe abụọ", bullets: ["Ịdị mma: tụọ akara site na ndepụta nlele n'onwe gị", "Ego: gụọ ọnụ ọgụgụ oku model"] },
            { title: "Kọọ ya n'eziokwu", bullets: ["Otu akara ahụ, oku dị ole na ole? Jiri otu agent", "E jidere ezi mperi? Otu agent ọtụtụ kwesịrị ya"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa usoro onye na-ede na onye nyocha nwere state a na-ekekọrịta, nnyefe a haziri ahazi na MAX_ROUNDS = 3, gafere ya na mpempe eziokwu atọ, gafere baseline otu agent n'otu mpempe ndị ahụ, ma dee obere ntụnyere nke ịdị mma na oku model.",
          youCanNow: "iwu obere usoro agent ọtụtụ ma gosi ma ọ ka otu agent mma.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ baseline n'ihe ọmụmụ a?", options: ["Ihe mbụ onye na-ede mere", "Otu agent ị na-eji atụnyere otu agent ọtụtụ ahụ", "Akara kacha ala a na-ekwe", "Oke ugboro"], answer: 1, why: "Ịtụnyere ya na otu agent na-egosi ma otu agent ọtụtụ ahụ kwesịrị ego mgbakwunye ya." },
            { objective: "O6", q: "Otu agent ọtụtụ ahụ nwetara akara dị ntakịrị elu karịa otu agent mana o ji oku model okpukpu atọ. Gịnị ka ị ga-eme?", options: ["Họrọ otu agent ọtụtụ mgbe niile, n'ihi na otu ka mma", "Kwụsị ịnwale", "Tinye agent ndị ọzọ iji bulie akara", "Tụlee ma obere uru ahụ kwesịrị ego na oge mgbakwunye ahụ, ma dee ihe kpatara ya"], answer: 3, why: "Oku model na-anọchi anya ego na oge, ya mere nhọrọ ahụ na-atụle ịdị mma megide ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu na ịnwale otu agent",
        questions: [
          { objective: "O4", q: "Onye kwesịrị imelite state a na-ekekọrịta?", options: ["Agent ọ bụla, mgbe ọ bụla masịrị ya", "Naanị onye nyocha", "Koodu gị, mgbe o lelechara nnyefe ọ bụla", "Ọ dịghị onye"], answer: 2, why: "State nke koodu nwe na-edebe otu eziokwu ma na-egbochi ihe ọjọọ." },
          { objective: "O5", q: "Onye nyocha anabatabeghị mgbe ugboro 3 gachara. Gịnị kwesịrị ime?", options: ["Kwụsị na 'needs_human' ma gosi ihe mbụ na ihe kpatara ya", "Nabata ya n'onwe ya", "Gaa n'ihu ruo mgbe ọ nabatara", "Hichapụ ihe mbụ ahụ"], answer: 0, why: "Nyefe ya mmadụ kama ịga n'ihu na loop." },
          { objective: "O5", q: "Onye nyocha na-anabata ihe mbụ ọ bụla, ọbụlagodi ndị ọjọọ. Nke a bụ:", options: ["Ping-pong", "Ịkwado n'eleghị anya (rubber-stamping)", "Pipeline", "State a na-ekekọrịta"], answer: 1, why: "Ndepụta nlele na-edoghị anya na-eduga n'ịnabata ihe niile." },
          { objective: "O6", q: "Kedu otu ị ga-esi tụọ akara ihe otu agent ọtụtụ na otu agent mepụtara?", options: ["Tụọ akara ha n'onwe gị site n'otu ndepụta nlele ahụ", "Jụọ agent nyocha", "Họrọ nke kacha ogologo", "Gụọ naanị okwu ole dị"], answer: 0, why: "Akara kwụụrụ onwe ya, nke na-agbanweghị agbanwe, na-eme ka ntụnyere ahụ kwụ ọtọ." },
          { objective: "O6", q: "Otu agent nwetara otu akara ahụ dị ka otu agent ọtụtụ na otu ụzọ n'ụzọ atọ nke oku model. Gịnị ka ị ga-eme?", options: ["Jiri otu agent ọtụtụ n'agbanyeghị", "Tinye agent ndị ọzọ", "Kwụsị ịnwale", "Jiri otu agent"], answer: 3, why: "Otu ịdị mma ahụ na ego dị ala pụtara na nhazi dị mfe meriri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Usoro Agent Ọtụtụ",
    questions: [
      { objective: "O1", q: "Usoro agent ọtụtụ bụ:", options: ["Otu agent nwere prompt dị ogologo", "Ọtụtụ agent nwere ọrụ nke ha na-arụ otu ọrụ", "Chatbot nwere ọtụtụ ndị ọrụ", "Ebe nchekwa data"], answer: 1, why: "Agent ọ bụla nwere ọrụ ya, ntụziaka ya na ngwaọrụ ya." },
      { objective: "O1", q: "Agent ọ bụla agbakwunyere na-atụkwasị:", options: ["Ịdị mma n'efu", "Ọ dịghị ihe", "Ego, nnyefe na ọrụ nnwale", "Oge dị ole na ole"], answer: 2, why: "Agent karịa pụtara oku karịa na ihe karịa a ga-elele." },
      { objective: "O1", q: "Nnwale iwe mmadụ n'ọrụ na-ajụ:", options: ["Agent ahụ ọ dị mma n'omume?", "Ego ole ka model na-efu?", "Ị ga-ewe mmadụ abụọ dị iche iche n'ọrụ maka ọrụ a?", "Prompt ahụ ọ dị ogologo?"], answer: 2, why: "Nka dị iche iche n'ụzọ doro anya na-egosi agent dị iche iche." },
      { objective: "O1", q: "Kedu ọrụ nwere ike ịchọ naanị otu agent?", options: ["Ịhazi ozi n'ụdị anọ site na ndepụta nlele", "Nchọcha, ide na ilele eziokwu nke akụkọ dị ogologo", "Ịchọ ihe ugboro iri n'otu oge", "Ide na inyocha mgbasa ozi n'onwe ya"], answer: 0, why: "Otu onye nwere ndepụta nlele nwere ike ime ya." },
      { objective: "O2", q: "N'ụkpụrụ orchestrator, orchestrator:", options: ["Na-anabata ọrụ nke ya", "Na-ahazi naanị ederede", "Na-echekwa igodo API", "Na-ekewa ebumnuche ma na-enye ndị ọrụ akụkụ"], answer: 3, why: "Ọ na-eme atụmatụ ma na-enyefe ọrụ, wee jikọta nsonaazụ." },
      { objective: "O2", q: "Gịnị mere onye na-ede na onye nyocha ji dị mma maka ndị mbido?", options: ["Ọ chọghị oke ọ bụla", "Ọ na-atụkwasị nlele ịdị mma kwụụrụ onwe ya", "Ọ naghị eji model", "Ọ naghị aga na loop mgbe ọ bụla"], answer: 1, why: "Agent nke abụọ nwere ndepụta nlele na-ahụ mperi." },
      { objective: "O2", q: "Ọ dị mfe ịchọta mperi pipeline n'ihi na:", options: ["Ọ na-arụ na nzuzo", "O nweghị agent", "Ọ naghị ada mgbe ọ bụla", "Ị na-ama mgbe niile agent ga-eme ihe ọzọ"], answer: 3, why: "Usoro a kara aka na-eme ka nzọụkwụ ọ bụla doo anya." },
      { objective: "O3", q: "Prompt ọrụ kwesịrị inwe:", options: ["Okwuntughe gị", "Prompt zuru ezu nke agent ọ bụla ọzọ", "Otu ọrụ agent ahụ, ngwaọrụ ya na ụdị ihe ọ na-eweghachi", "Njakịrị"], answer: 2, why: "Agent ọ bụla chọrọ naanị ọrụ nke ya na iwu ya." },
      { objective: "O3", q: "Agent nyocha ọ kwesịrị inwe ngwaọrụ ide ihe?", options: ["Mba, naanị ihe ọ chọrọ iji nyochaa", "Ee, ngwaọrụ niile", "Naanị ngwaọrụ email", "O kwesịrị inwe igodo API"], answer: 0, why: "Ikike kacha nta (least privilege) metụtara agent ọ bụla." },
      { objective: "O3", q: "Nnyefe a haziri ahazi bara uru n'ihi na:", options: ["Ha dị ogologo karịa", "Koodu nwere ike ilele ihe e nyefere", "Ha na-ezo ozi", "Model apụghị ịgụ ederede"], answer: 1, why: "Igodo a kara aka na-eme ka a pụrụ ilele nnyefe." },
      { objective: "O3", q: "Onye nyocha a jụrụ \"Ọ dị mma?\" nwere ike:", options: ["Ikwenye ngwa ngwa nke ukwuu", "Ilele eziokwu ọ bụla", "Ịjụ ịza", "Ịgụ okwu kpọmkwem"], answer: 0, why: "Ajụjụ na-edoghị anya na-enweta nnabata na-edoghị anya." },
      { objective: "O4", q: "Onye nwe state a na-ekekọrịta?", options: ["Browser onye ọrụ", "Agent na-ede ihe", "Ụlọ ọrụ na-enye model", "Koodu gị"], answer: 3, why: "Koodu na-edebe otu isi iyi eziokwu." },
      { objective: "O4", q: "Ndịiche nwayọọ (drift) pụtara:", options: ["Model na-aga ngwa ngwa karịa", "Nnomi ozi na-adị iche nwayọọ nwayọọ", "Oke ugboro", "Trigger"], answer: 1, why: "State a na-ekekọrịta na-egbochi nnomi na-adị iche." },
      { objective: "O4", q: "Gịnị mere ị ga-eji chekwaa state na ndekọ mgbe nzọụkwụ ọ bụla gachara?", options: ["Ịwụfe ugboro", "Ime ka model mara ihe karịa", "Ịhụ kpọmkwem otu ọrụ ahụ si gbanwee", "Ikesa igodo gị"], answer: 2, why: "Ndekọ ahụ na-egosi mgbanwe ọ bụla maka ịchọta mperi." },
      { objective: "O5", q: "MAX_ROUNDS na-egbochi:", options: ["Oku model kpamkpam", "Ezigbo ihe mbụ", "Azụ na azụ na-adịghị njedebe n'etiti agent", "Ndekọ"], answer: 2, why: "Oke ugboro na-akwụsị ping-pong." },
      { objective: "O5", q: "Ping-pong na loop onye na-ede na onye nyocha bụ mgbe:", options: ["Idozi otu nsogbu na-eweghachi nsogbu ochie", "Onye nyocha na-anabata ihe niile", "Ihe mbụ ahụ zuru oke", "E chekwara state"], answer: 0, why: "Agent na-anọgide na-agbanwerịta otu nsogbu ndị ahụ." },
      { objective: "O5", q: "Nnyefe mmadụ (escalation) pụtara:", options: ["Ihichapụ ndekọ", "Itinye agent ndị ọzọ", "Ibuli oke ugboro ruo mgbe ebighị ebi", "Inyefe mmadụ ọrụ a na-edozighị"], answer: 3, why: "Ndị mmadụ na-edozi ihe usoro ahụ na-enweghị ike idozi." },
      { objective: "O5", q: "Mgbe agent dị ọtụtụ, ebe nlele mmadụ na-adị:", options: ["Enweghị mkpa", "Mkpa karịa", "Na-eme onwe ya", "Megidere iwu"], answer: 1, why: "Akụkụ na-agagharị karịa pụtara ụzọ karịa ihe nwere ike isi mebie." },
      { objective: "O6", q: "Baseline n'ihe ọmụmụ a bụ:", options: ["Ihe kacha ogologo e mepụtara", "Ihe mbụ", "Igodo API", "Otu agent ị na-eji atụnyere otu agent ọtụtụ ahụ"], answer: 3, why: "Ị na-atụnyere otu agent ọtụtụ ahụ na nhọrọ dị mfe." },
      { objective: "O6", q: "A na-agụ ọnụ ọgụgụ oku model n'ihi na ha na-anọchi anya:", options: ["Ọnụ ọgụgụ okwu", "Ịdị mma", "Ego na oge", "Ọnụ ọgụgụ ndị ọrụ"], answer: 2, why: "Oku karịa na-efu ego karịa ma na-ewe oge karịa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ọrụ na ndepụta nlele doro anya",
        objective: "O3",
        notYet: "Ọrụ na-agabiga n'ibe ha, ma ọ bụ onye nyocha na-ajụ naanị ma ihe mbụ ahụ dị mma.",
        meets: "Onye na-ede na onye nyocha nwe otu ọrụ nke ọ bụla; onye nyocha na-elele eziokwu si na mpempe ahụ, na-erughị okwu 80 na enweghị okwu dị ka \"best\".",
        exceeds: "Onye nyocha enweghị ngwaọrụ ide ihe ma na-enye ihe kpatara revise ọ bụla."
      },
      {
        name: "Nnyefe a haziri ahazi",
        objective: "O3",
        notYet: "Agent na-agafe ederede efu nke koodu apụghị ilele.",
        meets: "Onye nyocha na-eweghachi JSON nwere approve ma ọ bụ revise na ihe kpatara ya.",
        exceeds: "Koodu na-elele nnyefe ọ bụla tupu iji ya."
      },
      {
        name: "State a na-ekekọrịta",
        objective: "O4",
        notYet: "Agent na-edebe nnomi ọrụ ahụ dị iche iche.",
        meets: "Ọrụ ahụ na-agafe n'otu dictionary state nke koodu na-emelite.",
        exceeds: "E dekọrọ state ahụ mgbe nzọụkwụ ọ bụla gachara."
      },
      {
        name: "Oke ugboro na nnyefe mmadụ",
        objective: "O5",
        notYet: "Enweghị oke ugboro, ma ọ bụ loop ahụ nwere ike ịga n'ihu ebighị ebi.",
        meets: "Ọ na-akwụsị n'ime ugboro 3 opekata elu ma bipụta ndekọ zuru ezu.",
        exceeds: "Ọrụ a na-edozighị na-akwụsị na needs_human ma gosi ihe mbụ na ihe kpatara ya."
      },
      {
        name: "Ntụnyere kwụ ọtọ",
        objective: "O6",
        notYet: "Enweghị baseline otu agent, ma ọ bụ e jiri ihe nnwale dị iche iche.",
        meets: "E gafere otu mpempe eziokwu 3 ahụ n'ha abụọ, ya na ndetu e dere ede gbasara nke mere nke ọma karịa na ihe kpatara ya.",
        exceeds: "E jiri otu ndepụta nlele ahụ tụọ akara ha abụọ ma gụọ ọnụ ọgụgụ oku model."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe gara n'ihu n'ihe ọmụmụ 6 nke mmemme agent n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha họọrọ otu agent ma ọ bụ otu agent ọtụtụ site na nnwale kama ịkọ nkọ (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser na ịntanetị; Colab ma ọ bụ Python na kọmputa nke gị",
      "Loop agent gị na helper ask_model site n'ihe ọmụmụ 3, na igodo API nke model",
      "Mpempe eziokwu ngwaahịa atọ dị mkpụmkpụ e chepụtara echepụta",
      "Akwụkwọ maka ise ụkpụrụ agent",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee ka otu ahụ jiri nnwale iwe mmadụ n'ọrụ lee ezi ọrụ tupu onye ọ bụla edee koodu.",
      "Nye onye ọ bụla otu mpempe eziokwu atọ ahụ ka e nwee ike ịtụnyere nsonaazụ otu agent ọtụtụ na otu agent n'ofe otu ahụ.",
      "Lezie anya n'ọnụ ọgụgụ oku model na API n'efu; debe oke ugboro na 3.",
      "Rịọ ndị na-amụ ihe ka ha gosi otu ọrụ kwụsịrị na needs_human, ma kpaa nkata banyere ihe mmadụ ahụ ga-ekpebi.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nabata \"otu agent mere nke ọma otu ahụ\" dị ka ezigbo nsonaazụ mgbe nnwale gosiri ya."
    ]
  }
};
