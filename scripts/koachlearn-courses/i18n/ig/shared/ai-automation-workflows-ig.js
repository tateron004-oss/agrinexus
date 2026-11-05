"use strict";

// Koach Learn course (Igbo translation of shared/ai-automation-workflows.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-automation-workflows-ig",
  lang: "ig",
  translationOf: "ai-automation-workflows",
  category: "Small Business",
  name: "Akpaaka (Automation) AI na Usoro Ọrụ Nwere Ọgụgụ Isi",
  skills: "Ịdepụta usoro ọrụ, Ịhụ ọrụ e nwere ike ime ka ọ rụọ onwe ya, Ịhazi akpaaka nwere trigger na action, Itinye nzọụkwụ AI, Iwu na ịnwale akpaaka, Ilekọta ya na idozi ya",
  outcome: "ịdepụta ọrụ a na-emegharị, ịhazi akpaaka nwere trigger, actions na nzọụkwụ AI, iwu ya na ngwa no-code, ịnwale ya na ozi nlele, na idebe mmadụ n'etiti ya ebe mperi ga-emebi ihe.",
  about: [
    "Akpaaka (automation) pụtara na sọftwụ na-eme nzọụkwụ ndị na-agwụ ike maka gị: idetuo azịza fọm n'ime spreadsheet, iziga email nkwado, idowe akwụkwọ ụgwọ (receipt), ịchetara mmadụ ụbọchị ọrụ ga-agwụ. Itinye AI na-eme ka akpaaka ahụ nwee ike ịgụ, ịhazi na ide ihe, dịka ọmụmaatụ ịchịkọta arịrịọ ma ọ bụ ide azịza mbụ.",
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa, ndị ọrụ na ndị ọrụ afọ ofufo nke òtù na-adịghị achọ uru (nonprofit), na ndị ọrụ chọrọ nka ndị were mmadụ n'ọrụ ji kpọrọ ihe. Ọmụmaatụ gụnyere ụlọ ọrụ nhicha na-elekọta arịrịọ maka ọnụahịa, òtù nonprofit na-edebanye aha ndị ọrụ afọ ofufo, na onye enyemaka ọfịs na-ahazi akwụkwọ ụgwọ (invoice).",
    "Ị ga-edepụta ezi ọrụ, hazie akpaaka ahụ n'akwụkwọ, wee wuo ya na ngwa no-code dị ka Zapier, Microsoft Power Automate ma ọ bụ Make, ma ọ bụ site n'ihe ndị dị n'ime Google Forms na Sheets. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\", nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Wuo otu akpaaka na-arụ ọrụ maka ezi òtù ma ọ bụ òtù omume: dịka ọmụmaatụ, fọm arịrịọ na-echekwa azịza ọ bụla n'ime spreadsheet, na-eji nzọụkwụ AI chịkọta ma hazie arịrịọ ahụ, ma na-ezigara onye ọrụ azịza mbụ n'email ka o kwado ya. Dee map usoro ọrụ ahụ, trigger na actions, nnwale ise na ihe ha gosiri, na onye na-elele ihe ọ na-emepụta.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa, ndị njikwa ọfịs na ndị ọrụ ọfịs, na ndị nhazi nonprofit ma ọ bụ chọọchị na-elekọta otu fọm, email, ndebanye aha na ncheta ahụ kwa izu.",
    startingPoint: "Ha na-eji email, spreadsheet na fọm n'ịntanetị, ụfọdụ anwalekwala ngwa enyemaka AI. Ọtụtụ ewubeghị akpaaka ma ọ bụ jikọọ app abụọ, ha enweghịkwa ahụmịhe n'ide koodu.",
    gap: "Ọtụtụ awa na-aga n'idetuo, idowe, ịchetara na ịkwado ihe n'aka, ihe ụfọdụ na-efukwa. Ndị na-amụ ihe kwesịrị ịhazi ma wuo akpaaka no-code nwere nzọụkwụ AI n'enweghị nsogbu, nwalee ya, ma debe mmadụ n'isi ebe mperi ga-emerụ ahụ, ka ha chekwaa oge n'eziteghị ozi ezighi ezi ma ọ bụ mee ka ozi nzuzo pụta.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; enweghị ide koodu",
      "Ngwaọrụ: a chọrọ kọmputa iji wuo akpaaka ahụ",
      "Ego: atụmatụ n'efu na nnwale nwere oke; ngwa na ọnụahịa na-agbanwe, ya mere ndị na-amụ ihe na-elele peeji ọnụahịa ọ bụla",
      "Nzuzo: enweghị nọmba kaadị, nọmba Social Security, ozi ahụike ma ọ bụ okwuntughe na-agafe nzọụkwụ AI; jiri naanị ozi e chepụtara echepụta nwalee",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge iwu na ịnwale"
    ],
    prerequisites: "Ọ dịghị. Ọ ga-enyere aka ma ọ bụrụ na ị maara iji Google Forms ma ọ bụ Microsoft Forms na spreadsheet."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị akpaaka a na-eji kwa ụbọchị", action: "ịmata trigger ya, actions ya na ebe nzọụkwụ AI dabara", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Maka ọrụ a na-eme opekata mpe otu ugboro n'izu", action: "ịdepụta nzọụkwụ ọ bụla ya na onye, ngwa ole na oge ole ọ na-ewe, ma kaa nzọụkwụ ọ bụla akara: akpaaka, AI dee mbụ na mmadụ elelee, ma ọ bụ mmadụ mee ya", standard: "ya na atụmatụ oge a ga-echekwa kwa izu" },
    { id: "O3", condition: "Tupu i jiri ngwa ọ bụla", action: "ide nhazi akpaaka nwere trigger, actions, prompt AI, ebe mmadụ na-elele na iwu ozi", standard: "ya na nkwado mmadụ ebe ọ bụla mperi ga-emerụ ahụ" },
    { id: "O4", condition: "Site n'iji fọm, spreadsheet na ngwa no-code", action: "iwu akpaaka na-echekwa azịza, na-eme nzọụkwụ AI ma na-eziga azịza mbụ ka e kwado ya", standard: "nke mere na usoro nkịtị ahụ na-arụ ọrụ tupu etinye nzọụkwụ AI" },
    { id: "O5", condition: "Mgbe e nyere gị akpaaka i wuru", action: "ịnwale ya na ozi nlele ise, gụnyere ndị siri ike, ma dozie ihe mebiri", standard: "site n'iji naanị ozi e chepụtara echepụta, ya na mperi ọ bụla e doziri ma nwalee ọzọ" },
    { id: "O6", condition: "Mgbe akpaaka ahụ malitere ịrụ ọrụ n'ezie", action: "ilele akụkọ ọrụ ya (run history), hazie ọkwa mperi, kpọọ aha onye nwe ya ma dee akwụkwọ ntụziaka otu peeji", standard: "nke mere na onye ọzọ nwere ike ịrụ ya ma ọ bụ gbanyụọ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi usoro ọrụ nwere ọgụgụ isi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe akpaaka na usoro ọrụ AI bụ",
          minutes: 4,
          goal: "Kọwaa trigger, actions na ebe nzọụkwụ AI dabara.",
          text: [
            "Akpaaka ọ bụla nwere otu ọdịdị. Trigger bụ ihe mere nke na-amalite ya: e zipụrụ fọm, email abịa, ụbọchị eruo. Actions bụ ihe na-eme ka nke ahụ gasịrị: tinye ahịrị n'ime spreadsheet, ziga email, mepụta ọrụ.",
            "Akpaaka nkịtị na-agbaso iwu a kara aka: ọ bụrụ na fọm abịa, detuo ya n'ime sheet. Nzọụkwụ AI na-etinye ọrụ yiri ikpe ikpe: gụọ ozi ma kpebie ma ọ bụ mkpesa, ajụjụ ma ọ bụ onye nwere ike ịzụ ihe (sales lead); chịkọta ya n'ahịrịokwu abụọ; dee azịza nwere nkwanye ugwu.",
            "Ngwa dị iche iche na-eji aha dị iche iche. Zapier na-akpọ akpaaka Zap, Power Automate na-akpọ ya flow, Make na-akpọkwa ya scenario. Echiche ahụ bụ otu: mgbe nke a mere, mee nke ahụ."
          ],
          words: [["Akpaaka (automation)", "sọftwụ na-eme nzọụkwụ maka gị n'enweghị mmadụ oge ọ bụla."], ["Trigger", "ihe mere nke na-amalite akpaaka."], ["Action", "nzọụkwụ akpaaka na-eme mgbe trigger mesịrị."], ["Usoro ọrụ (workflow)", "usoro nzọụkwụ e ji arụcha otu ọrụ."]],
          slides: [
            { title: "Mgbe nke a mere, mee nke ahụ", bullets: ["Trigger: ihe mere nke na-amalite ya", "Actions: ihe na-esote"] },
            { title: "Itinye nzọụkwụ AI", bullets: ["Hazie: mkpesa, ajụjụ ma ọ bụ sales lead", "Chịkọta n'ahịrịokwu abụọ", "Dee azịza mbụ ka mmadụ lelee"] },
            { title: "Otu echiche, aha dị iche iche", bullets: ["Zapier: Zap", "Power Automate: flow", "Make: scenario"] }
          ],
          tryIt: "Dee akpaaka atọ nke \"mgbe nke a mere, mee nke ahụ\" ị chọrọ inwe n'ọrụ, n'ụlọ ma ọ bụ n'òtù ị nọ na ya. Gbaa okirikiri gburugburu nke nwere ike iji nzọụkwụ AI.",
          youCanNow: "ịkọwa akpaaka ọ bụla dị ka trigger gbakwunyere actions, ma kwuo ebe AI nwere ike inyere aka.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka Power Automate na-akpọ akpaaka?", options: ["Zap", "Scenario", "Flow", "Macro"], answer: 2, why: "Power Automate na-akpọ ya flow; Zapier na-akpọ ya Zap, Make na-akpọkwa ya scenario." },
            { objective: "O1", q: "Ị chọrọ ka a hazie ozi ọhụrụ ọ bụla dị ka mkpesa, ajụjụ ma ọ bụ sales lead. Kedu akụkụ na-eme nke ahụ?", options: ["Nzọụkwụ AI", "Trigger", "Ahịrị spreadsheet", "Adreesị email"], answer: 0, why: "Ịgụ ozi na ịhazi ya bụ ọrụ yiri ikpe ikpe nke nzọụkwụ AI na-eme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịdepụta usoro ọrụ na ịchọta ihe a ga-eme ka ọ rụọ onwe ya",
          minutes: 5,
          goal: "Depụta ọrụ a na-emegharị otu nzọụkwụ n'otu oge ma họrọ nzọụkwụ a ga-akpaaka.",
          text: [
            "Tupu i wuo, depụta ọrụ ahụ otu e si eme ya taa. Dee nzọụkwụ ọ bụla, onye na-eme ya, ngwa ọ na-eji na oge ole ọ na-ewe. Ndebanye aha onye ọrụ afọ ofufo nwere ike ịbụ: gụọ email, detuo ozi ya n'ime spreadsheet, lelee usoro oge, ziga email nnabata, tinye ncheta na kalenda.",
            "Nzọụkwụ ndị dị mma ịkpaaka bụ ndị a na-emegharị, ndị na-agbaso iwu, ndị na-agwụ ike: idetuo, idowe, ịchetara, ịkwado. Nzọụkwụ chọrọ ikpe ikpe, obiọma ma ọ bụ mkpebi gbasara ndụ mmadụ kwesịrị ịnọ n'aka mmadụ, ma ọ bụ jiri AI naanị dee ihe mbụ.",
            "Kaa nzọụkwụ ọ bụla akara: akpaaka, AI dee mbụ na mmadụ elelee, ma ọ bụ mmadụ mee ya. Map ahụ i kara akara bụ nhazi gị."
          ],
          steps: ["Họrọ ọrụ a na-eme opekata mpe otu ugboro n'izu.", "Dee nzọụkwụ ọ bụla n'usoro, ya na onye, ngwa ole na oge ole.", "Kaa nzọụkwụ ọ bụla akara: akpaaka, AI dee mbụ na mmadụ elelee, ma ọ bụ mmadụ mee ya.", "Tụọ atụmatụ oge a ga-echekwa kwa izu."],
          words: [["Map usoro ọrụ", "ndepụta ma ọ bụ eserese nzọụkwụ na nzọụkwụ nke otu e si arụ ọrụ."], ["Mmadụ n'etiti (human in the loop)", "mmadụ na-elele ma ọ bụ kwado tupu akpaaka aga n'ihu."]],
          slides: [
            { title: "Bụrụ ụzọ depụta ya", bullets: ["Nzọụkwụ ọ bụla n'usoro", "Onye, ngwa ole, oge ole"] },
            { title: "Dị mma ịkpaaka", bullets: ["Idetuo na idowe", "Ncheta na nkwado", "Nzọụkwụ a na-emegharị, na-agbaso iwu"] },
            { title: "Kaa nzọụkwụ ọ bụla akara", bullets: ["Akpaaka", "AI dee mbụ na mmadụ elelee", "Mmadụ mee ya"] }
          ],
          tryIt: "Depụta otu ọrụ a na-emegharị nwere opekata mpe nzọụkwụ ise. Kaa nzọụkwụ ọ bụla akara: akpaaka, AI dee mbụ na mmadụ elelee, ma ọ bụ mmadụ mee ya, ma tụọ atụmatụ oge a ga-echekwa kwa izu.",
          youCanNow: "ịdepụta usoro ọrụ ma kpebie nzọụkwụ a ga-akpaaka, ndị AI nwere ike ide mbụ na ndị ga-anọ n'aka mmadụ.",
          quickCheck: [
            { objective: "O2", q: "Kedu nzọụkwụ dị mma ịkpaaka kpam kpam?", options: ["Ikpebi onye ga-enweta sikọlashịp", "Ịkasi onye ọrụ afọ ofufo were iwe obi", "Ịhọrọ onye ọrụ ọhụrụ", "Itinye ncheta na kalenda mgbe ndebanye aha gasịrị"], answer: 3, why: "Nzọụkwụ a na-emegharị, na-agbaso iwu, dị ka ncheta, dị mma ịkpaaka." },
            { objective: "O2", q: "Map gị nwere \"zaa ezinụlọ na-arịọ enyemaka maka ụgwọ ụlọ\". Kedu akara ị ga-enye ya?", options: ["Kpaaka ya kpam kpam", "AI dee mbụ na mmadụ elelee, ma ọ bụ mmadụ mee ya", "Hichapụ nzọụkwụ ahụ", "Ezitela azịza ọ bụla"], answer: 1, why: "Nzọụkwụ chọrọ obiọma ma ọ bụ metụtara ndụ mmadụ na-anọ n'aka mmadụ, ma ọ bụ AI naanị na-ede mbụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhazi akpaaka ahụ n'akwụkwọ",
          minutes: 5,
          goal: "Dee nhazi akpaaka zuru ezu: trigger, actions, prompt AI, nlele na iwu ozi.",
          text: [
            "Hazie n'akwụkwọ tupu i metụ ngwa ọ bụla aka. Dee trigger, action ọ bụla n'usoro, na kpọmkwem prompt AI ma ọ bụrụ na e nwere nzọụkwụ AI, dịka ọmụmaatụ: \"Gụọ arịrịọ a. Were otu okwu zaa: Quote, Question ma ọ bụ Complaint. Wee dee nchịkọta ahịrịokwu abụọ.\"",
            "Tinye ebe mmadụ na-elele (checkpoint) ebe ọ bụla mperi ga-emerụ ahụ: ihe ọ bụla e zigara onye ahịa, ego a na-ebugharị, ma ọ bụ mkpebi gbasara mmadụ. Akpaaka ahụ nwere ike ide ihe mbụ wee chere nkwado.",
            "Dee iwu ozi: ozi ndị na-agafe n'akpaaka ahụ, ebe a na-echekwa ha, na ihe na-agaghị agafe nzọụkwụ AI mgbe ọ bụla, dị ka nọmba kaadị, nọmba Social Security, ozi ahụike ma ọ bụ okwuntughe. Lelee ihe ngwa ọ bụla e jikọrọ na-eme na ozi gị."
          ],
          steps: ["Dee trigger.", "Depụta action ọ bụla n'usoro.", "Dee kpọmkwem prompt AI maka nzọụkwụ AI ọ bụla.", "Tinye nkwado mmadụ ebe mperi ga-emerụ ahụ.", "Dee iwu ozi: ihe na-agafe, ebe a na-echekwa ya, ihe na-agaghị agafe AI mgbe ọ bụla."],
          words: [["Prompt", "ntụziaka ị na-enye nzọụkwụ AI."], ["Checkpoint", "ebe mmadụ na-enyocha tupu akpaaka aga n'ihu."]],
          slides: [
            { title: "Hazie tupu i wuo", bullets: ["Trigger na actions n'usoro", "Kpọmkwem prompt AI"] },
            { title: "Ebe mmadụ na-elele", bullets: ["Ihe ọ bụla e zigara ndị ahịa", "Ego a na-ebugharị", "Mkpebi gbasara mmadụ"] },
            { title: "Iwu ozi", bullets: ["Ihe na-agafe na ebe a na-echekwa ya", "Ọ dịghị mgbe kaadị, SSN, ozi ahụike ma ọ bụ okwuntughe ga-agafe AI"] }
          ],
          tryIt: "Dee nhazi otu peeji maka akpaaka gị: trigger, actions, prompt AI, ebe mmadụ na-elele na iwu ozi.",
          youCanNow: "ịhazi akpaaka nwere nzọụkwụ AI, ebe mmadụ na-elele na iwu ozi n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka iwu ozi dị na nhazi na-ekwu?", options: ["Ụdị mkpụrụ akwụkwọ email ahụ na-eji", "Ihe na-agafe, ebe a na-echekwa ya na ihe na-agaghị agafe AI mgbe ọ bụla", "Otu kọmputa si dị ngwa", "Onye hazịrị akara (logo)"], answer: 1, why: "Iwu ozi na-ekwu ozi na-agafe, ebe a na-echekwa ya na ihe na-agaghị agafe AI mgbe ọ bụla." },
            { objective: "O3", q: "Akpaaka gị ga-ezigara ndị ahịa azịza. Ebee ka ị ga-etinye ebe mmadụ na-elele?", options: ["Ọ dịghị ebe; ọ na-echekwa oge", "Naanị otu ugboro n'afọ", "Mgbe e zigachara azịza ahụ", "Tupu e ziga azịza ahụ, ka mmadụ kwado ihe mbụ ahụ"], answer: 3, why: "Ihe ọ bụla e zigara onye ahịa kwesịrị ichere nkwado mmadụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi usoro ọrụ nwere ọgụgụ isi",
        questions: [
          { objective: "O1", q: "N'ime \"Mgbe e zipụrụ fọm, tinye ahịrị n'ime spreadsheet\", gịnị bụ trigger?", options: ["Tinye ahịrị", "Spreadsheet ahụ", "E zipụrụ fọm", "Email ahụ"], answer: 2, why: "Trigger bụ ihe mere nke na-amalite ya." },
          { objective: "O1", q: "Gịnị ka nzọụkwụ AI na-agbakwunye n'akpaaka?", options: ["Ike ịgụ, ịhazi, ịchịkọta ma ọ bụ ide ihe mbụ", "Ọkụ eletrik n'efu", "Ịkwụ onye ọ bụla ụgwọ n'onwe ya", "Ọ dịghị ihe"], answer: 0, why: "Nzọụkwụ AI na-arụ ọrụ asụsụ dị ka ịhazi na ide ihe mbụ." },
          { objective: "O2", q: "Kedu nzọụkwụ kacha dị mma ịkpaaka kpam kpam?", options: ["Ikpebi ma a ga-akwado arịrịọ ụlọ mmadụ", "Ịkasi onye ahịa were iwe obi", "Ịchụpụ onye ọrụ n'ọrụ", "Idetuo azịza fọm n'ime spreadsheet"], answer: 3, why: "Idetuo a na-emegharị, na-agbaso iwu, kacha dị mma ịkpaaka." },
          { objective: "O3", q: "Gịnị ka \"human in the loop\" (mmadụ n'etiti) pụtara?", options: ["Mmadụ tọrọ n'ọnyà", "Mmadụ na-elele ma ọ bụ kwado tupu akpaaka aga n'ihu", "Akpaaka na-arụ ọrụ n'enweghị mmadụ ọ bụla", "Ụdị trigger"], answer: 1, why: "Ọ na-eme ka mmadụ nọrọ n'isi ebe mperi dị mkpa." },
          { objective: "O3", q: "Kedu nke na-ekwesịghị ịgafe nzọụkwụ AI mgbe ọ bụla?", options: ["Nchịkọta arịrịọ n'ozuzu", "Nọmba kaadị ndị ahịa", "Okwu \"Question\"", "Oge azụmahịa na-emeghe"], answer: 1, why: "Ozi ịkwụ ụgwọ bụ nzuzo, o nwekwara ihe egwu." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu, ịnwale na ịrụ ya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iwu akpaaka mbụ gị",
          minutes: 6,
          goal: "Wuo akpaaka dị mfe site na fọm gaa na spreadsheet gaa na email.",
          text: [
            "Malite n'ụdị kacha dị mfe na-arụ ọrụ. Google Forms nwere ike ichekwa azịza ọ bụla n'ime Google Sheet n'enweghị ngwa ọzọ, Microsoft Forms nwekwara ike iziga azịza n'Excel. Nke ahụ n'onwe ya bụ akpaaka.",
            "Iji tinye actions, jiri ngwa no-code dị ka Zapier, Power Automate ma ọ bụ Make. Ọtụtụ n'ime ha nwere atụmatụ n'efu ma ọ bụ nnwale nwere oke; lelee peeji ọnụahịa nke ngwa ọ bụla, n'ihi na atụmatụ na-agbanwe. Jikọọ akaụntụ gị, họrọ trigger (azịza fọm ọhụrụ ma ọ bụ ahịrị spreadsheet ọhụrụ), wee tinye actions (ziga email, mepụta ọrụ).",
            "Tinye nzọụkwụ AI n'ikpeazụ, mgbe usoro nkịtị ahụ na-arụ ọrụ. Ọtụtụ ngwa nwere action AI dị n'ime ha ma ọ bụ na-ejikọ na ọrụ AI. Tinye prompt sitere na nhazi gị, ma ziga ihe ọ mepụtara n'action na-esote, dị ka email mbụ na-echere ka mmadụ kwado ya."
          ],
          steps: ["Mee fọm nwere fields ị chọrọ.", "Jikọọ ya na spreadsheet.", "Na ngwa no-code, setịpụ trigger: azịza ọhụrụ ma ọ bụ ahịrị ọhụrụ.", "Tinye action: ziga email ma ọ bụ mepụta ọrụ.", "Tinye nzọụkwụ AI ya na prompt gị, na-eziga ihe ọ mepụtara n'ihe mbụ ka e kwado ya."],
          words: [["Ngwa no-code", "sọftwụ na-ekwe ka i wuo ihe n'edeghị koodu."], ["Jikọọ (connect)", "inye otu app ikike iji rụọ ọrụ na app ọzọ."], ["Field", "otu ajụjụ ma ọ bụ igbe n'ime fọm."]],
          slides: [
            { title: "Malite n'ihe dị mfe", bullets: ["Google Forms na-echekwa na Sheets", "Microsoft Forms nwere ike iziga n'Excel"] },
            { title: "Tinye actions", bullets: ["Zapier, Power Automate ma ọ bụ Make", "Atụmatụ n'efu na nnwale nwere oke", "Lelee peeji ọnụahịa ọ bụla"] },
            { title: "Tinye AI n'ikpeazụ", bullets: ["Mgbe usoro nkịtị na-arụ ọrụ", "Tinye prompt gị", "Ihe ọ mepụtara na-aga n'ihe mbụ ka e kwado ya"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Wuo akụkụ mbụ nke akpaaka gị: fọm jikọrọ na spreadsheet. Ọ bụrụ na ị nwere ike, tinye otu action na ngwa no-code, dị ka email nye onwe gị maka azịza ọhụrụ ọ bụla.",
          youCanNow: "iwu akpaaka nkịtị site na fọm gaa na spreadsheet gaa na email na ngwa no-code.",
          quickCheck: [
            { objective: "O4", q: "Kedu nhazi dị mfe bụworị akpaaka n'enweghị ngwa ọzọ?", options: ["Microsoft Forms na-eziga azịza n'Excel", "Iji aka dee azịza fọm n'ime sheet", "Ibipụta azịza ọ bụla", "Ịgụ azịza n'ekwentị gị"], answer: 0, why: "Microsoft Forms nwere ike iziga azịza n'Excel n'onwe ya." },
            { objective: "O4", q: "Usoro fọm-gaa-na-email gị nkịtị na-arụ ọrụ. Gịnị ka ị ga-etinye ọzọ?", options: ["App ise ọzọ n'otu oge", "Ezi nọmba kaadị ndị ahịa", "Nzọụkwụ AI ya na prompt sitere na nhazi gị", "Ọ dịghị ihe; hichapụ usoro ahụ"], answer: 2, why: "Tinye nzọụkwụ AI n'ikpeazụ, mgbe usoro nkịtị na-arụ ọrụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịnwale na ozi nlele",
          minutes: 5,
          goal: "Nwalee akpaaka na ozi nlele nkịtị na ndị siri ike ma dozie ihe mebiri.",
          text: [
            "Agbanyela akpaaka maka ezi ndị mmadụ ruo mgbe ọ gafere nnwale. Jiri ozi nlele e chepụtara echepụta, ọ bụghị ozi ezi ndị ahịa.",
            "Nwalee ọnọdụ ise: ozi nkịtị, field tọgbọ chakoo, ozi dị ogologo nke ukwuu, ozi e dehiere ma ọ bụ nke dị iche, na nke nzọụkwụ AI nwere ike ịhazi ezighi ezi. Lelee nzọụkwụ ọ bụla: ahịrị ahụ ọ pụtara, email ahụ ọ gara ebe ziri ezi, AI ọ hazịrị ma chịkọta nke ọma?",
            "Dee akwụkwọ ndekọ nnwale (test log): ihe e tinyere, ihe a tụrụ anya ya, ihe mere n'ezie, ọ gafere ma ọ bụ ọ dara, ndozi. Ndozi a na-ahụkarị: mee ka field fọm bụrụ ihe a ga-ejuriri, mee ka prompt AI doo anya karị (\"Were kpọmkwem otu okwu zaa\"), ma ọ bụ tinye filter ka naanị ozi ụfọdụ gaa n'ihu."
          ],
          steps: ["Dee ozi nlele ise, gụnyere ndị siri ike.", "Gafee nke ọ bụla n'akpaaka ahụ.", "Lelee ihe nzọụkwụ ọ bụla mepụtara.", "Dee ma ọ gafere ma ọ bụ ọ dara n'akwụkwọ ndekọ nnwale.", "Dozie ma nwalee ọzọ ndị dara."],
          words: [["Test case", "otu ozi nlele e ji elele ma ihe na-arụ ọrụ."], ["Filter", "iwu na-ekwe ka naanị ihe ụfọdụ gaa n'ihu n'akpaaka."]],
          slides: [
            { title: "Nwalee tupu ịmalite n'ezie", bullets: ["Naanị ozi nlele e chepụtara echepụta", "Ọ dịghị mgbe ezi ozi ndị ahịa maka nnwale"] },
            { title: "Ọnọdụ nnwale ise", bullets: ["Nkịtị, field tọgbọ chakoo, ogologo nke ukwuu", "E dehiere ma ọ bụ dị iche", "Nke AI nwere ike ịhazi ezighi ezi"] },
            { title: "Dee ma dozie", bullets: ["Fields a ga-ejuriri na filters", "Prompt AI doro anya karị", "Nwalee ọzọ mgbe ndozi ọ bụla gasịrị"] }
          ],
          tryIt: "Gafee ozi nlele ise n'akpaaka gị, gụnyere opekata mpe abụọ siri ike. Dee akwụkwọ ndekọ nnwale ma dozie otu nsogbu.",
          youCanNow: "ịnwale akpaaka na ozi nlele, dee ihe ọ gosiri ma dozie ihe dara.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-aba n'akwụkwọ ndekọ nnwale akpaaka?", options: ["Ezi ozi ndị ahịa", "Naanị nnwale ndị gafere", "Ọnụahịa ngwa ahụ", "Ihe e tinyere, ihe a tụrụ anya ya, ihe mere n'ezie, ọ gafere ma ọ bụ ọ dara, na ndozi"], answer: 3, why: "Akwụkwọ ndekọ nnwale na-edekọ ihe e tinyere, ihe kwesịrị ime, ihe mere, na ndozi." },
            { objective: "O5", q: "Ozi nlele nwere field email tọgbọ chakoo mebiri usoro ahụ. Gịnị bụ ndozi a na-ahụkarị?", options: ["Mee ka field email bụrụ ihe a ga-ejuriri na fọm ahụ", "Gbanye akpaaka ahụ n'agbanyeghị", "Wepụ nzọụkwụ email", "Jiri ezi ozi ndị ahịa nwalee"], answer: 0, why: "Ime ka field ahụ bụrụ ihe a ga-ejuriri na-egbochi ozi tọgbọ chakoo imebi usoro ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịrụ, ilekọta na ime ka ọ ka mma",
          minutes: 5,
          goal: "Gbanye akpaaka n'enweghị nsogbu, lekọta ya, ma mara ihe ị ga-eme mgbe ọ dara.",
          text: [
            "Bụrụ ụzọ gbanye ya maka obere otu, dị ka otu fọm ma ọ bụ otu izu. Lelee ihe ọ na-emepụta kwa ụbọchị na mmalite. Ọtụtụ ngwa na-egosi akụkọ ọrụ (run history) na-edepụta oge ọ bụla ọ rụrụ na ma ọ gara nke ọma.",
            "Akpaaka na-emebi: okwuntughe na-agbanwe, a na-agbanwe aha field, atụmatụ n'efu na-eru oke ya, ma ọ bụ nzọụkwụ AI na-amalite ịhazi ihe n'ụzọ dị iche. Hazie ọkwa mperi (error alert) na-abịa n'email gị, ma kpọọ aha onye nwe ya ga-elele ya.",
            "Dee akwụkwọ ntụziaka otu peeji: ihe akpaaka ahụ na-eme, ebe ọ dị, onye nwe ya na otu esi agbanyụ ya. Ọ bụrụ na onye nwe ya apụọ, onye ọzọ nwere ike ime ka ọ nọgide na-arụ ọrụ. Nyochaa ya ọnwa ole na ole ọ bụla ma jụọ: ọ ka na-echekwa oge?"
          ],
          steps: ["Gbanye ya maka obere otu ma ọ bụ otu izu.", "Lelee akụkọ ọrụ kwa ụbọchị na mbụ.", "Hazie ọkwa mperi ma kpọọ aha onye nwe ya.", "Dee akwụkwọ ntụziaka otu peeji.", "Nyochaa ya ọnwa ole na ole ọ bụla."],
          words: [["Akụkọ ọrụ (run history)", "ndepụta oge ọ bụla akpaaka rụrụ ọrụ na ma ọ gara nke ọma."], ["Ọkwa mperi (error alert)", "ozi na-agwa gị na akpaaka dara."]],
          slides: [
            { title: "Malite n'obere", bullets: ["Otu fọm ma ọ bụ otu izu", "Lelee ihe ọ mepụtara kwa ụbọchị na mbụ"] },
            { title: "Ihe mere akpaaka ji emebi", bullets: ["Okwuntughe ma ọ bụ aha field na-agbanwe", "Atụmatụ na-eru oke ya", "Nhazi AI na-apụ n'ụzọ"] },
            { title: "Mee ka ọ dị mma", bullets: ["Ọkwa mperi na onye nwe ya", "Akwụkwọ ntụziaka otu peeji", "Nyochaa ọnwa ole na ole ọ bụla"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa akpaaka gị ya na nzọụkwụ AI ya na nkwado mmadụ, gafee ozi nlele ise, wee dee akwụkwọ ntụziaka otu peeji nwere map usoro ọrụ, trigger na actions, ihe nnwale gosiri na onye nwe ya.",
          youCanNow: "ịhazi, iwu, ịnwale na ịrụ akpaaka nwere AI ebe mmadụ nọ n'isi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ọkwa mperi na-eme?", options: ["Ọ na-eme ka akpaaka dị ngwa karị", "Ọ na-ezigara onye nwe ya email mgbe ọrụ dara", "Ọ na-ehichapụ ọrụ ochie", "Ọ na-agbanwe okwuntughe gị"], answer: 1, why: "Ọkwa mperi na-agwa onye nwe ya ozugbo mgbe ihe mebiri." },
            { objective: "O6", q: "Onye wuru akpaaka gị na-apụ. Gịnị ga-eme ka ọ nọgide na-arụ ọrụ?", options: ["Ịtụ anya na ọ dịghị ihe ga-emebi", "Ịgbanyụ ya kpam kpam", "Akwụkwọ ntụziaka otu peeji na onye nwe ọhụrụ na-elele ọkwa mperi", "Ịgbanwe okwuntughe niile n'agwaghị onye ọ bụla"], answer: 2, why: "Akwụkwọ ntụziaka na onye nwe ya a kpọrọ aha na-ekwe ka onye ọzọ rụọ ya ma ọ bụ gbanyụọ ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu, ịnwale na ịrụ ya",
        questions: [
          { objective: "O4", q: "Gịnị bụ akpaaka kacha dị mfe ị nwere ike iwu n'enweghị ngwa ọzọ?", options: ["Aka robot", "App ekwentị pụrụ iche", "Sava a na-akwụ ụgwọ", "Google Forms na-echekwa azịza n'ime Google Sheet"], answer: 3, why: "Fọm nwere ike ichekwa azịza n'ime spreadsheet n'onwe ha." },
          { objective: "O4", q: "Olee mgbe i kwesịrị itinye nzọụkwụ AI?", options: ["Mgbe usoro nkịtị na-arụ ọrụ", "Tupu ihe ọ bụla ọzọ", "Ọ dịghị mgbe", "Naanị na ngwụsị izu"], answer: 0, why: "Bụrụ ụzọ wuo ihe dị mfe, wee tinye AI." },
          { objective: "O5", q: "Kedu ozi i kwesịrị iji nwalee?", options: ["Ezi nọmba kaadị ndị ahịa", "Ezi akwụkwọ ndị ọrịa", "Ozi nlele e chepụtara echepụta", "Okwuntughe"], answer: 2, why: "Nwalee na ozi nlele iji chebe ezi ndị mmadụ." },
          { objective: "O5", q: "Nzọụkwụ AI na-enye ahịrịokwu ogologo mgbe ị chọrọ otu okwu. Gịnị bụ ndozi ya?", options: ["Hichapụ akpaaka ahụ", "Leghara ya anya", "Tinye fọm nke abụọ", "Mee ka prompt doo anya karị: \"Were kpọmkwem otu okwu zaa\""], answer: 3, why: "Prompt doro anya karị na-eme ka ihe AI na-emepụta dị ka a tụrụ anya ya." },
          { objective: "O6", q: "Gịnị mere i ji dee akwụkwọ ntụziaka otu peeji?", options: ["Ime ka ọ dị nwayọọ", "Iwu chọrọ ya", "Ka onye ọzọ nwee ike ịrụ ma ọ bụ gbanyụọ akpaaka ahụ", "Ikesa okwuntughe"], answer: 2, why: "Ọ na-eme ka akpaaka nọgide na-arụ ọrụ ma ọ bụrụ na onye nwe ya apụọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Akpaaka (Automation) AI na Usoro Ọrụ Nwere Ọgụgụ Isi",
    questions: [
      { objective: "O1", q: "Akpaaka pụtara:", options: ["Iwe ndị ọrụ ọzọ", "Sọftwụ na-eme nzọụkwụ maka gị n'enweghị mmadụ oge ọ bụla", "Ịrụ ọrụ awa ogologo karị", "Ịzụta robot"], answer: 1, why: "Akpaaka na-eme nzọụkwụ n'onwe ha." },
      { objective: "O1", q: "Email bịara nke na-amalite akpaaka bụ:", options: ["Trigger", "Filter", "Field", "Akụkọ ọrụ"], answer: 0, why: "Ihe mere nke na-amalite ya bụ trigger." },
      { objective: "O1", q: "\"Ziga email nkwado\" n'akpaaka bụ:", options: ["Trigger", "Prompt", "Action", "Onye nwe ya"], answer: 2, why: "Actions bụ ihe na-eme mgbe trigger mesịrị." },
      { objective: "O1", q: "Zapier na-akpọ akpaaka:", options: ["Zap", "Flow", "Scenario", "Kaadị ntụziaka nri"], answer: 0, why: "Aha Zapier na-eji bụ Zap." },
      { objective: "O2", q: "Kedu ọrụ kacha mma ịhapụrụ mmadụ?", options: ["Idowe akwụkwọ ụgwọ", "Iziga ncheta", "Idetuo ozi fọm", "Ikpebi ma mmadụ ruru eru inweta enyemaka"], answer: 3, why: "Mkpebi gbasara mmadụ chọrọ ikpe ikpe mmadụ." },
      { objective: "O2", q: "Map usoro ọrụ na-edepụta:", options: ["Naanị ihe ikpeazụ", "Nzọụkwụ ọ bụla, onye na-eme ya, ngwa na oge", "Ụgwọ ọnwa ndị ọrụ", "Adreesị ọfịs"], answer: 1, why: "Ọ na-egosi otu e si arụ ọrụ ahụ taa." },
      { objective: "O2", q: "\"AI dee mbụ na mmadụ elelee\" dabara kedu nzọụkwụ?", options: ["Itinye ahịrị n'ime sheet", "Ide azịza nye onye ahịa", "Ichekwa faịlụ", "Ịmalite akpaaka"], answer: 1, why: "A ga-elele ozi a na-ezigara ndị ahịa tupu e ziga ha." },
      { objective: "O3", q: "Ezigbo prompt AI n'akpaaka bụ:", options: ["Nke edoghị anya, dị ka \"mee ihe\"", "Nke tọgbọ chakoo", "Okwuntughe", "Kpọmkwem, dị ka \"Were otu okwu zaa: Quote, Question ma ọ bụ Complaint\""], answer: 3, why: "Prompt kpọmkwem na-enye ihe a tụrụ anya ya." },
      { objective: "O3", q: "Ebee ka i kwesịrị itinye ebe mmadụ na-elele?", options: ["Ebe ọ bụla mperi ga-emerụ ahụ, dị ka ozi nye ndị ahịa", "Ọ dịghị ebe", "Naanị na trigger", "Naanị mgbe e hichapụchara akpaaka ahụ"], answer: 0, why: "Ebe mmadụ na-elele na-ejide mperi ga-efu ọtụtụ ihe." },
      { objective: "O3", q: "Iwu ozi na nhazi gị na-ekwu:", options: ["Ụdị mkpụrụ akwụkwọ a ga-eji", "Onye ga-enweta ego mgbakwunye (bonus)", "Ihe na-agafe, ebe a na-echekwa ya na ihe na-agaghị agafe AI mgbe ọ bụla", "Ọ dịghị ihe"], answer: 2, why: "Ha na-echebe ozi nzuzo." },
      { objective: "O4", q: "A na-akpọ ajụjụ ma ọ bụ igbe dị na fọm:", options: ["Trigger", "Zap", "Filter", "Field"], answer: 3, why: "Igbe ọ bụla bụ field." },
      { objective: "O4", q: "Atụmatụ n'efu nke ngwa no-code:", options: ["Enweghị oke ruo mgbe ebighị ebi", "Na-efu $1,000 mgbe niile", "Nwere oke; lelee peeji ọnụahịa", "Adịghị adị"], answer: 2, why: "Atụmatụ na-agbanwe, ya mere lelee ezi peeji ọnụahịa." },
      { objective: "O4", q: "Ijikọ app na ngwa akpaaka pụtara:", options: ["Ịkwụnye waya", "Inye otu app ikike iji rụọ ọrụ na app ọzọ", "Ikesa okwuntughe gị n'ihu ọha", "Ịzụta kọmputa ọhụrụ"], answer: 1, why: "Njikọ bụ ikike n'etiti app." },
      { objective: "O5", q: "Ọnụọgụ nnwale ole ka ihe ọmụmụ a na-atụ aro opekata mpe?", options: ["Ise", "Otu", "Efu", "Narị ise"], answer: 0, why: "Nnwale ise na-ekpuchi ozi nkịtị na ndị siri ike." },
      { objective: "O5", q: "Kedu nke bụ nnwale siri ike?", options: ["Naanị ozi nkịtị zuru oke", "Enweghị ozi ọ bụla, a nwaleghị ya mgbe ọ bụla", "Fọm nwere field tọgbọ chakoo", "Okwuntughe gị"], answer: 2, why: "Fields tọgbọ chakoo na-emebikarị akpaaka." },
      { objective: "O5", q: "Filter n'akpaaka:", options: ["Na-ekwe ka naanị ihe ụfọdụ gaa n'ihu", "Na-ehicha ihuenyo", "Na-ehichapụ spreadsheet", "Na-amalite akpaaka"], answer: 0, why: "Filters na-achịkwa ihe ndị na-aga n'ihu." },
      { objective: "O6", q: "Mgbe ị malitere iji ya n'ezie na mbụ, ị kwesịrị:", options: ["Gbanye ya maka onye ọ bụla ma ghara ilele ya mgbe ọ bụla", "Hichapụ akwụkwọ ndekọ nnwale", "Wepụ ebe mmadụ na-elele", "Malite n'obere ma lelee ihe ọ mepụtara kwa ụbọchị"], answer: 3, why: "Ịmalite n'obere na-ebelata mmebi nsogbu nwere ike ime." },
      { objective: "O6", q: "Akụkọ ọrụ (run history) na-egosi:", options: ["Akụkọ ihe i lere n'ịntanetị", "Oge ọ bụla akpaaka rụrụ ọrụ na ma ọ gara nke ọma", "Awa ndị ọrụ rụrụ", "Okwuntughe ndị ahịa"], answer: 1, why: "Ọ na-enyere gị aka ịhụ ebe ọ dara." },
      { objective: "O6", q: "Kedu ihe a na-ahụkarị na-eme ka akpaaka mebie?", options: ["Anyanwụ dara", "Okwuntughe ma ọ bụ aha field gbanwere", "Ọtụtụ ndị ahịa nwere obi ụtọ", "Agba akara (logo) gbanwere"], answer: 1, why: "Mgbanwe n'app e jikọrọ na-emebi akpaaka." },
      { objective: "O6", q: "Akpaaka ọ bụla kwesịrị inwe:", options: ["Enweghị onye na-ahụ maka ya", "Ohere enweghị oke n'ozi niile", "Ebe nzuzo", "Onye nwe ya na-elele ọkwa mperi"], answer: 3, why: "Onye nwe ya na-eme ka ọ dị mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 2, 4, 6, 8, 9, 11, 14, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Map usoro ọrụ", objective: "O2", notYet: "Nzọụkwụ ụfọdụ efuola, ma ọ bụ e kaghị nzọụkwụ ọ bụla akara.", meets: "Nzọụkwụ ọ bụla nwere onye, ngwa na oge, e kakwara ya akara: akpaaka, AI dee mbụ na mmadụ elelee, ma ọ bụ mmadụ mee ya.", exceeds: "O nwere atụmatụ oge a ga-echekwa kwa izu." },
      { name: "Trigger, actions na nzọụkwụ AI", objective: "O4", notYet: "Akpaaka ahụ anaghị amalite site na trigger ya, ma ọ bụ nzọụkwụ AI efuola.", meets: "Trigger na-arụ ọrụ, actions n'usoro na nzọụkwụ AI na-achịkọta ma na-ahazi arịrịọ ahụ.", exceeds: "Ọ na-eji filter ma ọ bụ prompt otu okwu doro anya ka ihe ọ na-emepụta bụrụ otu." },
      { name: "Nlele mmadụ na iwu ozi", objective: "O3", notYet: "Azịza na-apụ n'enweghị nkwado, ma ọ bụ ozi nzuzo na-agafe nzọụkwụ AI.", meets: "Mmadụ na-akwado azịza mbụ ahụ, iwu ozi na-ekwukwa ihe na-agaghị agafe AI mgbe ọ bụla.", exceeds: "O dere ihe ngwa ọ bụla e jikọrọ na-eme na ozi ahụ." },
      { name: "Nnwale ise", objective: "O5", notYet: "Nnwale erughị ise, e jiri ezi ozi, ma ọ bụ e dozighị ndị dara.", meets: "Ozi nlele ise e chepụtara echepụta, gụnyere ndị siri ike, e dere ma ha gafere ma ọ bụ daa, na ndozi.", exceeds: "E nwalere ọzọ nke ọ bụla dara, ọ gafekwara." },
      { name: "Onye nwe ya na ntụziaka", objective: "O6", notYet: "Enweghị onye nwe ya a kpọrọ aha ma ọ bụ ntụziaka.", meets: "Onye nwe ya a kpọrọ aha, ọkwa mperi na akwụkwọ ntụziaka otu peeji.", exceeds: "Akwụkwọ ahụ na-ekwu otu esi agbanyụ ya na mgbe a ga-enyocha ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Akpaaka ka na-arụ ọrụ ma nwee onye nwe ya ụbọchị 60 ka e mechara (nnyocha nsochi)",
      "Awa a na-echekwa kwa izu n'ọrụ e kpaakara, dị ka òtù ahụ kọrọ",
      "Òtù ndị kọrọ na akpaaka ahụ ezighị ozi ezighi ezi ma ọ bụ mee ka ozi nzuzo pụta"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Google Forms na Sheets, ma ọ bụ Microsoft Forms na Excel",
      "Ngwa akpaaka no-code dị ka Zapier, Power Automate ma ọ bụ Make (lelee oke atụmatụ n'efu nke ugbu a)",
      "Akwụkwọ ma ọ bụ dọkụmentị maka map usoro ọrụ, nhazi na akwụkwọ ndekọ nnwale",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere oge iwu na ịnwale"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; wuo usoro fọm-gaa-na-sheet n'ihu ha na ihuenyo a na-ekerịta.",
      "Mee ka ndị na-amụ ihe bụrụ ụzọ hazie n'akwụkwọ ma nweta nyocha onye ibe ha tupu ha emeghe ngwa ọ bụla.",
      "Jiri naanị ozi nlele e chepụtara echepụta maka nnwale; ọ dịghị mgbe ezi ozi ndị ahịa, ndị a na-enyere aka ma ọ bụ ndị na-enye onyinye.",
      "Lelee na akpaaka ọ bụla na-ezigara ndị mmadụ ozi nwere nzọụkwụ nkwado mmadụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
