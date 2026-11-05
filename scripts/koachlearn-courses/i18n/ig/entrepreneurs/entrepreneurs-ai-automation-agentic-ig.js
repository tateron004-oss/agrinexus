"use strict";

// Koach Learn course (Igbo translation of entrepreneurs/entrepreneurs-ai-automation-agentic.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-automation-agentic-ig",
  lang: "ig",
  translationOf: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "Akpaaka AI na Usoro Ọrụ Agentic",
  skills: "Ịdepụta usoro ọrụ, Iche echiche trigger na action, Ịrụ akpaaka na-enweghị koodu, Itinye nzọụkwụ AI, Ịtọ oke maka ndị enyemaka AI (agents), Ilekọta na idozi akpaaka",
  outcome: "ịdepụta otu usoro ọrụ azụmahịa ị na-emegharị, ịrụ akpaaka na-enweghị koodu na-arụ ọrụ maka ya nwere nzọụkwụ AI, itinye nzọụkwụ nnabata mmadụ dị ka oke, na ịnwale ma lekọta ya ka ọ ghara imebi ihe mgbe o nwere nsogbu.",
  about: [
    "Akpaaka (automation) pụtara na kọmputa na-arụrụ gị ọrụ ị na-emegharị mgbe ihe mere: mmadụ dejupụtara fọm, email bịara, a kwụrụ ụgwọ maka order. AI na-agbakwunye ike ịgụ, ịhazi na ide ihe n'ime ọrụ ahụ. Ngwa \"agentic\" na-agakwa n'ihu: ị na-enye ha ebumnuche, ha na-ahazi ma mee ọtụtụ nzọụkwụ n'onwe ha.",
    "Ihe ọmụmụ a bụ maka ndị nwe azụmahịa chọrọ ịkwụsị idetuo na imado otu ozi ahụ ụbọchị niile. Ị ga-edepụta usoro ọrụ, mụta iche echiche trigger na action, rụọ ezi akpaaka site na ngwa na-enweghị koodu (dị ka Zapier, Make ma ọ bụ Microsoft Power Automate), tinye nzọụkwụ AI, ma tọọ oke ka ihe ọ bụla dị mkpa ghara ime n'enweghị nnabata gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwekwa ọrụ aka. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ngwa ndị a na-eme na oke atụmatụ n'efu (free plan) na-agbanwe ọtụtụ mgbe, ya mere lelee peeji ọnụahịa na enyemaka nke ngwa ọ bụla n'onwe ya."
  ],
  finalTask: "Rụọ ma nwalee otu akpaaka maka azụmahịa gị, dịka ọmụmaatụ: mgbe onye ahịa dejupụtara fọm ajụjụ gị, tinye arịrịọ ya na spreadsheet, mee ka AI dee azịza mbụ (draft), ma ziga gị azịza ahụ ka i kwado ya tupu ihe ọ bụla erute onye ahịa. Dee ihe ndekọ peeji otu: maapụ usoro ọrụ, trigger na actions, ntụziaka AI, nzọụkwụ nnabata, nsonaazụ nnwale atọ na ihe ị ga-elele kwa izu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na-etinye ọtụtụ awa n'idetuo otu ozi ahụ n'etiti fọm, email na spreadsheet, chọkwa ka kọmputa mee ya maka ha.",
    startingPoint: "Ha na-eji fọm n'ịntanetị, email na spreadsheet, ha ejirikwala ngwa enyemaka AI. Ọ bụ mmadụ ole na ole rụworo akpaaka ma ọ bụ chee echiche banyere ihe onye enyemaka AI (agent) kwesịrị ime na ihe ọ na-ekwesịghị ime naanị ya.",
    gap: "Idetuo ihe ugboro ugboro na-emefu ọtụtụ awa ma na-ebute mperi, mana akpaaka na agents na-eme ihe n'enweghị oke nwere ike iziga azịza ezighi ezi, mefuo ego ma ọ bụ kpughee ozi ndị ahịa. Ndị nwe azụmahịa kwesịrị ịrụ otu obere akpaaka nwere nzọụkwụ AI, oke nnabata, nnwale na nlele kwa izu, ka o wee chekwaa oge ma ghara imebi ihe mgbe o nwere nsogbu.",
    constraints: [
      "Enweghị koodu; okwu dị mfe na atụmatụ n'efu nke ngwa na-enweghị koodu",
      "Ngwaọrụ: kọmputa nwere ngwa fọm, spreadsheet na email",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, gbakwunyere oge ịrụ na ịnwale",
      "Ihe ngwa na-eme na oke atụmatụ n'efu na-agbanwe ọtụtụ mgbe; lelee peeji ọnụahịa na enyemaka nke ngwa ọ bụla n'onwe ya",
      "Jiri ozi e chepụtara echepụta nwalee, ma wepụ nọmba kaadị na ozi nzuzo ndị ọzọ na nzọụkwụ AI"
    ],
    prerequisites: "\"Ngwa AI Onye Ọchụnta Ego Ọ Bụla Kwesịrị Ịmara\", ma ọ bụ ịma iji fọm n'ịntanetị na spreadsheet nke ọma."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị usoro ọrụ ị na-emegharị kwa izu", action: "ịdepụta ya dị ka nzọụkwụ site na mmalite ruo na njedebe, na-akara nke ọ bụla dị ka idetuo, mkpebi ma ọ bụ ide ihe", standard: "ma dozie ihe ọ bụla AI mehiere" },
    { id: "O2", condition: "Mgbe e nyere gị maapụ usoro ọrụ gị", action: "ide usoro ọrụ ahụ dị ka otu trigger na ndepụta actions", standard: "ma kaa action AI na nzọụkwụ nnabata akara" },
    { id: "O3", condition: "Site n'iji atụmatụ n'efu nke ngwa na-enweghị koodu", action: "ịrụ akpaaka na-ebuga azịza fọm na spreadsheet ma na-agwa gị", standard: "nke e ji ozi e chepụtara echepụta nwalee, na-arụkwa ọrụ" },
    { id: "O4", condition: "Mgbe e nyere gị akpaaka gị na-arụ ọrụ", action: "itinye nzọụkwụ AI na-ede azịza mbụ ma ọ bụ na-ahazi arịrịọ ma ziga gị ya", standard: "nwere iwu doro anya, e nwalere ya n'arịrịọ atọ dị iche iche, ozi nzuzo ọ bụla agafeghịkwa na ya" },
    { id: "O5", condition: "Maka akpaaka gị ma ọ bụ agent AI ọ bụla", action: "ide ndepụta oke nke ihe o nwere ike ime naanị ya na ihe chọrọ nnabata gị mgbe niile", standard: "ebe iziga ndị ahịa ihe na imefu ego na-achọ nnabata mgbe niile" },
    { id: "O6", condition: "Tupu na mgbe i gbanwụrụ akpaaka gị", action: "ịnwale ya site n'ozi dị iche (odd inputs), gbanwuo mkpu ọdịda ma hazie nlele kwa izu", standard: "ka ọ kwụsị ma gwa gị mgbe ihe mebiri" }
  ],
  chapters: [
    {
      name: "Isi 1: Chee echiche n'usoro ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịdepụta usoro ọrụ ị na-emegharị",
          minutes: 5,
          goal: "Depụta usoro ọrụ azụmahịa ị na-emegharị dị ka ndepụta nzọụkwụ site na mmalite ruo na njedebe.",
          text: [
            "Tupu i mee ka ihe ọ bụla rụọ onwe ya, dee ya ede. Usoro ọrụ (workflow) bụ nzọụkwụ otu ọrụ na-agafe site na mmalite ruo na njedebe. Ọmụmaatụ, ajụjụ onye ahịa ọhụrụ: fọm ahụ bịara, ị detuo ozi ya na spreadsheet, ị dee azịza, ị tinye ncheta ka ị sochie ya.",
            "Họrọ usoro ọrụ na-eme ọtụtụ mgbe, na-agbaso otu nzọụkwụ ahụ oge ọ bụla, na-emefukwa oge gị n'idetuo, imado ma ọ bụ ide ihe ọzọ. Ndị ahụ kacha mma ime akpaaka.",
            "AI nwere ike inyere gị aka ịdepụta ya. Kọwaa ihe ị na-eme n'okwu nke gị ma jụọ: \"Mee nke a ka ọ bụrụ usoro ọrụ nwere nọmba. Kaa akara nzọụkwụ ndị bụ idetuo ozi, ndị chọrọ mkpebi, na ndị chọrọ ide ihe.\""
          ],
          steps: ["Họrọ usoro ọrụ ị na-eme opekata mpe otu ugboro n'izu.", "Kọwaara ngwa enyemaka AI ya n'okwu nke gị.", "Rịọ maka usoro ọrụ nwere nọmba, na-akara nzọụkwụ idetuo, mkpebi na ide ihe.", "Tụnyere maapụ ahụ na ihe ị na-eme n'ezie ma dozie ya."],
          words: [["Usoro ọrụ (workflow)", "nzọụkwụ otu ọrụ na-agafe site na mmalite ruo na njedebe."], ["Akpaaka (automate)", "ime ka kọmputa rụọ ọrụ ị na-emegharị n'enweghị gị ime nzọụkwụ ọ bụla."]],
          slides: [
            { title: "Buru ụzọ dee ya", bullets: ["Usoro ọrụ = nzọụkwụ site na mmalite ruo na njedebe", "Ọmụmaatụ: fọm, spreadsheet, azịza, ncheta"] },
            { title: "Usoro ọrụ kacha mma ime akpaaka", bullets: ["Na-eme ọtụtụ mgbe", "Otu nzọụkwụ ahụ oge ọ bụla", "Ọtụtụ idetuo na ide ihe ọzọ"] },
            { title: "Jiri AI depụta ya", bullets: ["Kọwaa ihe ị na-eme", "Rịọ maka nzọụkwụ nwere nọmba", "Kaa akara nzọụkwụ idetuo, mkpebi na ide ihe"] }
          ],
          tryIt: "Jiri enyemaka AI depụta otu usoro ọrụ ị na-emegharị kwa izu. Kaa nzọụkwụ ọ bụla akara dị ka idetuo, mkpebi ma ọ bụ ide ihe, ma dozie ihe ọ bụla AI mehiere.",
          youCanNow: "ịdepụta usoro ọrụ azụmahịa ị na-emegharị dị ka nzọụkwụ doro anya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ usoro ọrụ (workflow)?", options: ["Nzọụkwụ ọrụ na-agafe site na mmalite ruo na njedebe", "Ụdị spreadsheet", "Mkpesa onye ahịa", "App AI"], answer: 0, why: "Usoro ọrụ na-edepụta nzọụkwụ ọ bụla nke ọrụ n'usoro." },
            { objective: "O1", q: "Maapụ AI mere maka usoro order gị hapụrụ nzọụkwụ ebe ị na-elele ngwaahịa fọdụrụ. Gịnị ka ị ga-eme?", options: ["Jiri maapụ ahụ otu o si dị", "Tinye nzọụkwụ ahụ fọdụrụ n'onwe gị", "Malite akpaaka n'agbanyeghị", "Hichapụ maapụ ahụ niile"], answer: 1, why: "Ị kacha mara usoro ọrụ gị, ya mere ị na-edozi maapụ AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Trigger na actions",
          minutes: 5,
          goal: "Mee ka maapụ usoro ọrụ gị bụrụ otu trigger na ndepụta actions.",
          text: [
            "Akpaaka ọ bụla nwere otu trigger na otu action ma ọ bụ karịa. Trigger bụ ihe mere na-amalite ya: \"azịza fọm ọhụrụ\", \"email ọhụrụ nwere okwu invoice\", \"order ọhụrụ a kwụrụ ụgwọ ya\". Actions bụ ihe na-esote: \"tinye ahịrị na spreadsheet\", \"ziga m ozi\", \"mepụta ihe omume na kalenda\".",
            "Nzọụkwụ idetuo na-adị mfe ime ka ha bụrụ actions. Nzọụkwụ ide ihe nwere ike ịbụ actions AI. Nzọụkwụ mkpebi na-anọkarị n'aka gị, ma ọ bụ bụrụ nzọụkwụ nnabata ebe akpaaka ahụ na-eche ka i kwuo ee.",
            "Ngwa na-enweghị koodu dị ka Zapier, Make na Microsoft Power Automate na-ejikọta app ndị ị na-eji ugbu a site na triggers na actions. Ọtụtụ n'ime ha nwere atụmatụ n'efu nwere oke; lelee peeji ọnụahịa nke ngwa ọ bụla ka ịmata ihe dị n'ime ya taa."
          ],
          steps: ["Chọta ihe mere na-amalite usoro ọrụ gị: nke ahụ bụ trigger.", "Mee ka nzọụkwụ idetuo ọ bụla bụrụ action.", "Mee ka nzọụkwụ ide ihe bụrụ actions AI.", "Mee ka nzọụkwụ mkpebi bụrụ nzọụkwụ nnabata ma ọ bụ hapụ ha n'aka gị.", "Dee ya dị ka: Mgbe [trigger], mgbe ahụ [action 1], [action 2]..."],
          words: [["Trigger", "ihe mere na-amalite akpaaka."], ["Action", "nzọụkwụ akpaaka na-eme mgbe trigger mechara."], ["Ngwa na-enweghị koodu (no-code tool)", "ngwa na-ekwe ka ị rụọ akpaaka site n'ịpị na ịhọrọ, ọ bụghị site n'ide mmemme."]],
          slides: [
            { title: "Otu trigger, ụfọdụ actions", bullets: ["Trigger: ihe mere na-amalite ya", "Actions: ihe na-esote"] },
            { title: "Mee ka nzọụkwụ bụrụ actions", bullets: ["Nzọụkwụ idetuo: actions dị mfe", "Nzọụkwụ ide ihe: actions AI", "Mkpebi: nzọụkwụ nnabata ma ọ bụ gị"] },
            { title: "Ngwa na-enweghị koodu", bullets: ["Zapier, Make, Microsoft Power Automate", "Na-ejikọta app ndị ị na-eji ugbu a", "Lelee oke atụmatụ n'efu na saịtị ha"] }
          ],
          sources: [{ name: "Zapier: Pricing", url: "https://zapier.com/pricing" }, { name: "Make: Pricing", url: "https://www.make.com/en/pricing" }],
          tryIt: "Dee usoro ọrụ gị dị ka \"Mgbe [trigger], mgbe ahụ [actions]\". Kaa akara action nke bụ AI na ebe ị chọrọ nzọụkwụ nnabata.",
          youCanNow: "ịkọwa akpaaka ọ bụla dị ka trigger gbakwunyere actions, ebe mkpebi na-anọ n'aka gị.",
          quickCheck: [
            { objective: "O2", q: "N'ime \"Mgbe ego bịara, ziga akwụkwọ nnata (receipt)\", gịnị bụ action?", options: ["Ego bịara", "Onye ahịa", "Ziga akwụkwọ nnata", "Ụlọ akụ"], answer: 2, why: "Action bụ ihe na-eme mgbe trigger mechara." },
            { objective: "O2", q: "Otu nzọụkwụ n'usoro ọrụ gị bụ ikpebi ma ị ga-enyeghachi ego (refund). Kedu otu ị ga-esi mee ya?", options: ["Hapụ akpaaka ka o kpebie", "Hapụ AI ka o kpebie", "Wepụ nzọụkwụ ahụ", "Mee ya ka ọ bụrụ nzọụkwụ nnabata maka gị"], answer: 3, why: "Nzọụkwụ mkpebi na-aghọ nnabata ma ọ bụ na-anọ n'aka gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịrụ akpaaka mbụ gị na-enweghị koodu",
          minutes: 6,
          goal: "Rụọ akpaaka na-arụ ọrụ na-ebuga azịza fọm na spreadsheet ma na-agwa gị.",
          text: [
            "Malite n'akpaaka dị mfe ma dị mma: mgbe mmadụ dejupụtara fọm ajụjụ gị (dịka ọmụmaatụ Google Form ma ọ bụ Microsoft Form), tinye azịza ya na spreadsheet ma ziga gị ozi ngosi (notification). Ọ dịghị ihe na-erute onye ahịa ugbu a.",
            "N'ime ngwa gị na-enweghị koodu, mepụta akpaaka ọhụrụ, họrọ app fọm dị ka trigger, jikọọ akaụntụ gị, ma họrọ fọm ahụ. Wee tinye action maka spreadsheet, ma kekọta ajụjụ fọm ọ bụla na kọlụm. Tinye action nke abụọ ka o zigara gị email ma ọ bụ ozi.",
            "Nwalee ya site n'ajụjụ adịgboroja nwere aha e chepụtara echepụta dị ka \"Test Customer\". Lelee na ahịrị ahụ pụtara na kọlụm ziri ezi, na i nwetara ozi ahụ. Naanị mgbe ahụ ka ị ga-agbanwu ya."
          ],
          steps: ["Mee obere fọm ajụjụ nwere aha, email na arịrịọ.", "N'ime ngwa na-enweghị koodu, họrọ fọm ahụ dị ka trigger.", "Tinye action spreadsheet ma kekọta ajụjụ na kọlụm.", "Tinye action ka ọ gwa gị.", "Nwalee ya site n'ozi \"Test Customer\", lelee nsonaazụ, wee gbanwuo ya."],
          words: [["Ijikọ akaụntụ (connect an account)", "inye ngwa akpaaka ikike iji otu n'ime app gị."], ["Field mapping", "ikekọta ozi ọ bụla na ebe o kwesịrị ịga, dị ka ajụjụ fọm na kọlụm spreadsheet."]],
          slides: [
            { title: "Malite n'ihe dị mfe ma dị mma", bullets: ["Azịza fọm na spreadsheet", "Ozi ngosi nye gị", "Ọ dịghị ihe na-erute onye ahịa ugbu a"] },
            { title: "Rụọ ya", bullets: ["Trigger: azịza fọm ọhụrụ", "Action: tinye ahịrị spreadsheet, kekọta fields", "Action: gwa gị"] },
            { title: "Nwalee tupu ị gbanwuo ya", bullets: ["Jiri ozi \"Test Customer\"", "Lelee kọlụm na ozi ngosi", "Wee gbanwuo ya"] }
          ],
          tryIt: "Rụọ akpaaka fọm-gaa-spreadsheet gbakwunyere ozi ngosi n'atụmatụ n'efu nke ngwa na-enweghị koodu. Nwalee ya site n'ozi e chepụtara echepụta ma hụ na ọ na-arụ ọrụ.",
          youCanNow: "ịrụ ma nwalee akpaaka dị mfe na-enweghị koodu n'etiti app ndị ị na-eji.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ field mapping na ngwa na-enweghị koodu?", options: ["Ikekọta ozi ọ bụla na ebe ọ na-aga", "Ise maapụ ụlọ ahịa gị", "Ịhọrọ ụdị mkpụrụ akwụkwọ (font)", "Ịkwụ ụgwọ maka atụmatụ"], answer: 0, why: "Field mapping na-eziga azịza ọ bụla na kọlụm ziri ezi." },
            { objective: "O3", q: "I rụchaala akpaaka gị. Gịnị ka ị ga-eme tupu ị gbanwuo ya?", options: ["Ziga ya ndị ahịa niile", "Nwalee ya site n'ozi e chepụtara echepụta dị ka \"Test Customer\"", "Hichapụ fọm ahụ", "Hapụ nnwale ka ị chekwaa oge"], answer: 1, why: "Ịnwale site n'ozi e chepụtara echepụta na-achọpụta nsogbu n'enweghị ihe egwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Chee echiche n'usoro ọrụ",
        questions: [
          { objective: "O1", q: "Kedu usoro ọrụ kacha mma ibu ụzọ mee akpaaka?", options: ["Mkpebi iwu a na-eme naanị otu ugboro", "Nke na-eme ọtụtụ mgbe nwere otu nzọụkwụ ahụ na ọtụtụ idetuo", "Ihe ị na-eme otu ugboro n'afọ", "Iwe onye ọrụ mbụ gị"], answer: 1, why: "Ọrụ idetuo a na-emegharị ọtụtụ mgbe na-echekwa oge kacha ukwuu." },
          { objective: "O2", q: "N'ime \"Mgbe azịza fọm ọhụrụ bịara, tinye ahịrị spreadsheet\", gịnị bụ trigger?", options: ["Email gị", "Tinye ahịrị spreadsheet", "Spreadsheet ahụ", "Azịza fọm ọhụrụ bịara"], answer: 3, why: "Trigger bụ ihe mere na-amalite akpaaka." },
          { objective: "O2", q: "Gịnị na-emekarị nzọụkwụ mkpebi n'akpaaka?", options: ["Ha na-aghọ nzọụkwụ nnabata ma ọ bụ na-anọ n'aka gị", "Ngwa ahụ na-ekpe ha", "A na-ehichapụ ha", "Onye ahịa na-ekpebi"], answer: 0, why: "Mkpebi chọrọ uche gị." },
          { objective: "O3", q: "Gịnị bụ field mapping?", options: ["Ịhọrọ font", "Ise maapụ ugbo", "Ikekọta ozi ọ bụla na ebe ọ na-aga", "Ịkwụ ụgwọ"], answer: 2, why: "Ọ na-ejikọ ajụjụ fọm na kọlụm spreadsheet." },
          { objective: "O3", q: "Kedu ozi ị ga-eji nwalee akpaaka ọhụrụ?", options: ["Okwuntughe gị", "Nọmba kaadị ezi onye ahịa", "Ozi nnwale e chepụtara echepụta dị ka \"Test Customer\"", "Enweghị nnwale ọ bụla"], answer: 2, why: "Ozi adịgboroja na-ekwe ka ị nwalee n'enweghị nsogbu." }
        ]
      }
    },
    {
      name: "Isi 2: Tinye AI ma jide njikwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Itinye nzọụkwụ AI",
          minutes: 5,
          goal: "Tinye action AI na-ede azịza mbụ ma ọ bụ na-ahazi arịrịọ.",
          text: [
            "Ọtụtụ ngwa na-enweghị koodu na-ekwe ka ị tinye action AI: ziga ederede nye ụdị AI (AI model) nwere ntụziaka ma nweta azịza ya n'ime akpaaka ahụ. Ihe a na-ejikarị ya eme: ịhazi ajụjụ n'otu ụdị, iwepụta ozi ndị bụ isi, ma ọ bụ ide azịza mbụ. Na ngwa ụfọdụ, nzọụkwụ AI dị naanị n'atụmatụ a na-akwụ ụgwọ (mgbe e lere ya n'October 2026, nzọụkwụ AI nke Zapier chọrọ atụmatụ a na-akwụ ụgwọ); lelee peeji ọnụahịa. Ọ bụrụ na nke gị adịghị n'ime ya, mee ka akpaaka ahụ zigara gị arịrịọ ahụ ma madoo ya na ngwa enyemaka mkparịta ụka n'efu n'onwe gị.",
            "Dee ntụziaka AI nke ọma, dị ka prompt ị ga-eji ọtụtụ ugboro: \"Gụọ arịrịọ onye ahịa a. Zaa ya n'okwu na-erughị 100, nwee obi ọma ma doo anya. Jiri naanị ozi azụmahịa e nyere ebe a: [oge mmeghe, ọrụ]. Ekwula ọnụahịa mgbe ọ bụla. Ọ bụrụ na o doghị gị anya, dee [CHECK].\"",
            "Ziga azịza mbụ AI nye GỊ, ọ bụghị nye onye ahịa. Chee echiche banyere ozi onye ahịa na-agafe na ọrụ AI ahụ; lelee usoro ozi na nzuzo nke ngwa ahụ, ezigakwala nọmba kaadị, nọmba ID ma ọ bụ ozi ahụike site na ya."
          ],
          steps: ["Tinye action AI mgbe nzọụkwụ spreadsheet gasịrị.", "Dee ntụziaka nke ọma nwere iwu na ozi azụmahịa gị.", "Nye naanị ederede arịrịọ AI chọrọ.", "Ziga azịza mbụ AI nye onwe gị ka i lelee ya.", "Nwalee ya site n'arịrịọ atọ dị iche iche e chepụtara echepụta."],
          words: [["Action AI", "nzọụkwụ n'akpaaka na-eziga ederede nye AI ma jiri azịza ya."], ["Usoro ozi (data terms)", "iwu gbasara otu ngwa si echekwa ma jiri ozi ị zigara ya."]],
          slides: [
            { title: "Ihe nzọụkwụ AI nwere ike ime", bullets: ["Ịhazi arịrịọ n'otu ụdị", "Iwepụta ozi ndị bụ isi", "Ide azịza mbụ", "O nwere ike ịchọ atụmatụ a na-akwụ ụgwọ: lelee peeji ọnụahịa"] },
            { title: "Ntụziaka e dere nke ọma", bullets: ["Ogologo na ụda okwu", "Jiri naanị ozi e nyere", "Ekwula ọnụahịa; dee [CHECK] ma o doghị gị anya"] },
            { title: "Mee ka ọ dị mma", bullets: ["Azịza mbụ na-abịakwute gị, ọ bụghị onye ahịa", "Ziga naanị ihe AI chọrọ", "Lelee usoro ozi nke ngwa ahụ"] }
          ],
          sources: [{ name: "Zapier: Pricing (AI steps and plan limits)", url: "https://zapier.com/pricing" }],
          tryIt: "Tinye nzọụkwụ AI n'akpaaka gị nke na-ede azịza mbụ ma zigara gị ya. Nwalee ya site n'arịrịọ atọ dị iche iche e chepụtara echepụta ma dee mperi ọ bụla.",
          youCanNow: "itinye nzọụkwụ AI n'akpaaka nwere iwu doro anya, ebe ozi nzuzo na-anọ n'èzí.",
          quickCheck: [
            { objective: "O4", q: "Kedu iwu kwesịrị ịdị na ntụziaka nzọụkwụ AI?", options: ["\"Chepụta ọnụahịa ma o doghị gị anya\"", "\"Ziga ya onye ahịa ozugbo\"", "\"Jiri naanị ozi e nyere; ekwula ọnụahịa mgbe ọ bụla\"", "\"Tinye nọmba kaadị\""], answer: 2, why: "Iwu doro anya na-eme ka azịza mbụ AI ziri ezi ma dị mma." },
            { objective: "O4", q: "Fọm gị na-arịọ nọmba kaadị. Gịnị ka ị ga-eme maka nzọụkwụ AI?", options: ["Ziga ihe niile nye AI", "Rịọ AI ka o zoo ya", "Chekwaa ya n'azịza ahụ", "Wepụ field ahụ n'ihe nzọụkwụ AI na-anata"], answer: 3, why: "Nọmba kaadị na ozi nzuzo ekwesịghị ịgafe na nzọụkwụ AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Agents na oke (guardrails)",
          minutes: 5,
          goal: "Kpebie ihe agent AI nwere ike ime naanị ya na ihe chọrọ nnabata gị.",
          text: [
            "A na-enye agent AI ebumnuche, ọ na-ahazi ma mee ọtụtụ nzọụkwụ n'onwe ya, dị ka ịchọ ihe, idejupụta fọm, ma ọ bụ iji app gị. Agents nwere ike ichekwa oge, mana ha nwekwara ike ime mperi ngwa ngwa na n'ọtụtụ ebe n'otu oge.",
            "Oke (guardrails) bụ njedebe ị na-atọ. Iwu dị mfe: agent nwere ike ịgụ, ịhazi ma dee azịza mbụ n'onwe ya, mana ọ ghaghị inweta nnabata gị tupu o ziga onye ahịa ihe ọ bụla, mefuo ego, hichapụ ihe ọ bụla, gbanwee ọnụahịa ma ọ bụ debanye aha maka ihe ọ bụla. Nye ya ohere naanị n'app na folda ndị ọ chọrọ.",
            "Debe ndekọ nke ihe agent ahụ mere (ọtụtụ ngwa nwere history ma ọ bụ log) ma malite n'obere ọrụ na-enweghị nnukwu ihe egwu. Nye ya nnwere onwe karịa naanị mgbe ọ rụchara ọrụ nke ọma ruo oge ụfọdụ."
          ],
          steps: ["Depụta ihe agent ahụ ga-eme.", "Kaa action ọ bụla akara: o nwere ike ime naanị ya, ma ọ bụ ọ chọrọ nnabata gị.", "Chọọ nnabata maka iziga ihe, imefu ego, ihichapụ ihe, ọnụahịa na ịdebanye aha.", "Nye ya ohere naanị n'app na folda ndị ọ chọrọ.", "Lelee history ma ọ bụ log ya oge niile."],
          words: [["Agent AI", "ngwa AI na-eme ọtụtụ nzọụkwụ n'onwe ya iji rute otu ebumnuche."], ["Oke (guardrail)", "njedebe na-egbochi akpaaka ma ọ bụ agent ime ihe nwere ihe egwu."], ["Log", "ndekọ nke ihe akpaaka ma ọ bụ agent mere na mgbe o mere ya."]],
          slides: [
            { title: "Ihe agent bụ", bullets: ["E nyere ya ebumnuche", "Ọ na-ahazi ma mee ọtụtụ nzọụkwụ naanị ya", "Ọ na-eme ngwa ngwa, gụnyere mperi ngwa ngwa"] },
            { title: "Ihe chọrọ nnabata gị", bullets: ["Iziga ndị ahịa ihe", "Imefu ego ma ọ bụ ịgbanwe ọnụahịa", "Ihichapụ ihe ma ọ bụ ịdebanye aha maka ihe"] },
            { title: "Nye oke ma lekọta ya", bullets: ["Ohere naanị n'ihe ọ chọrọ", "Lelee history ma ọ bụ log ya", "Malite n'obere, tinyekwuo nnwere onwe nwayọọ nwayọọ"] }
          ],
          tryIt: "Dee ndepụta oke maka akpaaka gị: ihe o nwere ike ime naanị ya, na ihe ise na-achọ nnabata gị mgbe niile. Tinye nzọụkwụ nnabata ma ọ bụrụ na ngwa gị na-akwado ya.",
          youCanNow: "ịtọ oke ka akpaaka na agents ghara ime nzọụkwụ nwere ihe egwu n'enweghị gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ oke (guardrail) n'akpaaka?", options: ["Njedebe na-egbochi omume nwere ihe egwu", "Trigger dị ngwa karị", "Kọlụm spreadsheet", "Ihe a na-akwụ ụgwọ maka ya"], answer: 0, why: "Oke na-egbochi akpaaka ime ihe nwere ihe egwu naanị ya." },
            { objective: "O5", q: "Ngwa agent na-arịọ ohere na folda gị niile na n'ụlọ akụ gị. Gịnị ka ị ga-enye ya?", options: ["Ihe niile ọ rịọrọ", "Naanị app na folda ndị ọ chọrọ", "Okwuntughe gị", "Ikike onye nchịkwa (admin)"], answer: 1, why: "Ohere kacha nta na-ebelata mmebi ma ọ bụrụ na ihe mebiri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịnwale, ilekọta na ịkwụsị n'enweghị mmebi",
          minutes: 5,
          goal: "Nwalee akpaaka gị maka nsogbu ma hazie nlele kwa izu.",
          text: [
            "Akpaaka na-emebi: app na-agbanwe, a na-agbanwe aha ajụjụ fọm, okwuntughe na-agwụ oge, ma ọ bụ AI na-enye azịza dị iche. Nwalee site n'ozi dị iche (odd inputs): field tọgbọrọ chakoo, ozi dị ogologo nke ukwuu, ozi n'asụsụ ọzọ, ozi enweghị nkwanye ugwu.",
            "Hazie ya ka ọ kwụsị n'enweghị mmebi: ọ bụrụ na ihe mebiri, akpaaka ahụ kwesịrị ịkwụsị ma gwa gị, ọ bụghị iziga ozi a na-emechabeghị. Ọtụtụ ngwa nwere ike izigara gị email mgbe run dara; gbanwuo nke ahụ.",
            "Otu ugboro n'izu, lee log ahụ: run ole, ole dara, na azịza mbụ AI abụọ ma ọ bụ atọ. Gụọ nkeji ole e chekwara. Ọ bụrụ na ọ na-ebute ọrụ karịa ihe ọ na-echekwa, gbanwee ya ma ọ bụ gbanyụọ ya."
          ],
          steps: ["Nwalee site na field tọgbọrọ chakoo, ozi dị ogologo nke ukwuu na ozi dị iche.", "Gbanwuo mkpu ọdịda (failure alerts).", "Hụ na ọdịda na-akwụsị run kama iziga ihe.", "Kwa izu, lelee runs, ọdịda na azịza mbụ AI ole na ole.", "Debe ya, gbanwee ya ma ọ bụ gbanyụọ ya dabere n'oge e chekwara."],
          words: [["Ịkwụsị n'enweghị mmebi (fail safely)", "mgbe ihe mebiri, ịkwụsị ma gwa mmadụ kama ime ihe ga-emebi ihe."], ["Run", "otu ugboro akpaaka malitere ma rụọ nzọụkwụ ya."]],
          slides: [
            { title: "Akpaaka na-emebi", bullets: ["App na-agbanwe", "A na-agbanwe aha ajụjụ fọm", "AI na-enye azịza dị iche"] },
            { title: "Nwalee ozi dị iche", bullets: ["Field tọgbọrọ chakoo", "Ozi dị ogologo nke ukwuu", "Asụsụ ọzọ ma ọ bụ ozi enweghị nkwanye ugwu"] },
            { title: "Kwụsị n'enweghị mmebi", bullets: ["Kwụsị ma gwa gị", "Ezigala ozi a na-emechabeghị mgbe ọ bụla", "Gbanwuo email ọdịda"] },
            { title: "Nlele kwa izu", bullets: ["Runs na ọdịda na log", "Gụọ azịza mbụ AI ole na ole", "Gụọ nkeji e chekwara"] }
          ],
          tryIt: "Ọrụ ikpeazụ: nwalee akpaaka gị site n'ozi dị iche atọ, gbanwuo mkpu ọdịda, ma dee ihe ndekọ peeji otu gị: maapụ, trigger na actions, ntụziaka AI, nzọụkwụ nnabata, nsonaazụ nnwale na nlele kwa izu.",
          youCanNow: "ịrụ, ichebe, ịnwale na ilekọta akpaaka AI maka azụmahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ nnwale ozi dị iche (odd-input test)?", options: ["Ịnwale naanị na ngwụcha izu", "Ịnwale ya na onye ahịa gị kacha mma", "Ịnwale ya site n'ozi na-adịghị ka nke a na-ahụkarị, dị ka field tọgbọrọ chakoo", "Ịnwale ya site na ezi nọmba kaadị"], answer: 2, why: "Ozi dị iche na-egosi otu akpaaka si edozi nsogbu." },
            { objective: "O6", q: "Nlele kwa izu gị na-egosi runs ise dara. Gịnị ka ị ga-eme?", options: ["Leghara ha anya", "Gbanyụọ mkpu ọdịda", "Nye akpaaka ahụ ohere karịa", "Chọta ihe kpatara ya, dozie ya ma nwalee ọzọ"], answer: 3, why: "Ilekọta bụ maka ịchọpụta na idozi ọdịda." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Tinye AI ma jide njikwa",
        questions: [
          { objective: "O4", q: "Ebee ka azịza mbụ AI kwesịrị ịga n'akpaaka mbụ gị?", options: ["Nye gị ka i lelee ya", "Ozugbo nye onye ahịa", "Na soshal midia", "Ebe ọ bụla"], answer: 0, why: "Ị na-elele azịza mbụ tupu ndị ahịa ahụ ha." },
          { objective: "O4", q: "Kedu ozi EKWESỊGHỊ ịgafe na nzọụkwụ AI?", options: ["Ndepụta ọrụ gị", "Ederede arịrịọ ahụ", "Oge mmeghe gị", "Nọmba kaadị onye ahịa"], answer: 3, why: "E kwesịghị iziga nọmba kaadị na ozi ndị yiri ya nye ngwa AI mgbe ọ bụla." },
          { objective: "O5", q: "Kedu omume kwesịrị ịchọ nnabata gị mgbe niile?", options: ["Ịgụ email", "Imefu ego", "Ịhazi arịrịọ", "Ide azịza mbụ maka gị"], answer: 1, why: "Imefu ego bụ omume nwere nnukwu ihe egwu." },
          { objective: "O6", q: "Gịnị ka \"ịkwụsị n'enweghị mmebi\" (fail safely) pụtara?", options: ["Ịkwụsị ma gwa mmadụ mgbe ihe mebiri", "Ịga n'ihu n'agbanyeghị ihe ọ bụla", "Ihichapụ ozi ahụ", "Iziga onye ahịa ọ bụla email"], answer: 0, why: "Ịkwụsị na-egbochi omume a na-emechabeghị nke ga-emebi ihe." },
          { objective: "O6", q: "Akpaaka gị na-ebute idozi ihe karịa oge ọ na-echekwa. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Tinyekwuo nzọụkwụ AI", "Gbanwee ya ma ọ bụ gbanyụọ ya", "Nye ya ohere karịa"], answer: 2, why: "Akpaaka kwesịrị ichekwa oge, ọ bụghị imefu ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Akpaaka AI na Usoro Ọrụ Agentic",
    questions: [
      { objective: "O1", q: "Akpaaka (automation) pụtara:", options: ["Iwe ndị ọrụ karịa", "Kọmputa na-arụ ọrụ a na-emegharị mgbe ihe mere", "Iji aka dee email ọ bụla", "Ịgbanyụ kọmputa gị"], answer: 1, why: "Nke ahụ bụ isi echiche ya." },
      { objective: "O1", q: "Nzọụkwụ mbụ tupu ime akpaaka bụ:", options: ["Ihichapụ ozi ochie", "Ịzụta ngwa kacha dị oke ọnụ", "Inye agent ohere zuru ezu", "Ịdepụta usoro ọrụ ahụ dị ka nzọụkwụ"], answer: 3, why: "Ị nwere ike ime akpaaka naanị maka ihe ị ghọtara." },
      { objective: "O1", q: "Usoro ọrụ (workflow) bụ:", options: ["Okwuntughe", "Ụdị spreadsheet", "Ịkwụ ụgwọ", "Nzọụkwụ ọrụ na-agafe site na mmalite ruo na njedebe"], answer: 3, why: "Nke ahụ bụ nkọwa ya." },
      { objective: "O1", q: "Kedu nzọụkwụ kacha dị mfe ime akpaaka?", options: ["Ikpebi ma ị ga-ewe mmadụ n'ọrụ", "Idetuo azịza fọm na spreadsheet", "Ịbịanye aka n'akwụkwọ mgbazinye ụlọ", "Ịhọrọ aha azụmahịa"], answer: 1, why: "Idetuo bụ ihe a na-emegharị, na-agbasokwa iwu." },
      { objective: "O2", q: "Trigger bụ:", options: ["Ụdị AI", "Nzọụkwụ ikpeazụ", "Ihe mere na-amalite akpaaka", "Ọnụahịa"], answer: 2, why: "Triggers na-amalite akpaaka." },
      { objective: "O2", q: "Kedu nke bụ action?", options: ["Tinye ahịrị na spreadsheet", "Azịza fọm ọhụrụ", "Order ọhụrụ a kwụrụ ụgwọ ya", "Email ọhụrụ bịara"], answer: 0, why: "Ndị ọzọ bụ triggers." },
      { objective: "O3", q: "Zapier, Make na Microsoft Power Automate bụ:", options: ["Netwọk soshal", "Ụlọ akụ", "Ngwa akpaaka na-enweghị koodu", "Igwe mbipụta"], answer: 2, why: "Ha na-ejikọta app site na triggers na actions." },
      { objective: "O3", q: "Ebee ka ị ga-elele oke atụmatụ n'efu nke ngwa na-enweghị koodu?", options: ["Peeji ọnụahịa nke ya n'onwe ya", "Ịkọ nkọ", "Vidiyo ochie", "Onye ahịa"], answer: 0, why: "Atụmatụ na oke na-agbanwe." },
      { objective: "O3", q: "Tupu ị gbanwuo akpaaka, ị kwesịrị:", options: ["Iziga ya ndị ahịa niile", "Ịnwale ya site n'ozi e chepụtara echepụta", "Ịhapụ nnwale", "Iwepụ ozi ngosi"], answer: 1, why: "Nnwale na-achọpụta mperi n'enweghị nsogbu." },
      { objective: "O4", q: "Action AI n'akpaaka nwere ike:", options: ["Ịkwado onwe ya", "Ịbịanye aka na nkwekọrịta", "Ịkwụ ụtụ isi gị", "Ịhazi arịrịọ ma ọ bụ ide azịza mbụ"], answer: 3, why: "Ịgụ, ịhazi na ide azịza mbụ bụ ezigbo ihe AI na-eme." },
      { objective: "O4", q: "Ezigbo ntụziaka AI nwere:", options: ["Iwu dị ka \"Jiri naanị ozi e nyere; ekwula ọnụahịa mgbe ọ bụla\"", "\"Mee ihe ọ bụla masịrị gị\"", "Okwuntughe gị", "Nọmba kaadị ndị ahịa"], answer: 0, why: "Iwu na-ebelata mperi." },
      { objective: "O4", q: "Gịnị mere ị ga-eji lelee usoro ozi nke ngwa akpaaka?", options: ["Ọ dịghị mkpa", "Ịgbanwe akara azụmahịa (logo) gị", "Inweta mbelata ọnụahịa", "Ịmata otu e si echekwa ma jiri ozi onye ahịa ị zigara"], answer: 3, why: "Ozi ndị ahịa na-agafe na ngwa ndị a." },
      { objective: "O5", q: "Agent AI bụ:", options: ["Spreadsheet", "Onye na-ere ahịa (mmadụ)", "Ngwa AI na-eme ọtụtụ nzọụkwụ n'onwe ya iji rute otu ebumnuche", "Onye na-ebuga ngwaahịa"], answer: 2, why: "Agents na-ahazi ma mee ihe n'onwe ha." },
      { objective: "O5", q: "Oke (guardrail) bụ:", options: ["Ụdị trigger", "Njedebe na-egbochi omume nwere ihe egwu", "Ịntanetị dị ngwa", "App ọhụrụ"], answer: 1, why: "Oke na-eme ka njikwa nọrọ n'aka gị." },
      { objective: "O5", q: "Agent kwesịrị inweta nnabata gị tupu ọ:", options: ["Edere gị obere ndetu mbụ", "Agụọ email", "Ahazie ndepụta", "Ezigaa onye ahịa ihe ọ bụla"], answer: 3, why: "Iziga ndị ahịa ihe nwere nnukwu ihe egwu." },
      { objective: "O5", q: "Ohere ole ka agent kwesịrị inwe?", options: ["Ihe nbanye ụlọ akụ gị", "Ihe niile i nwere", "Naanị app na folda ndị ọ chọrọ", "Faịlụ ndị ahịa niile"], answer: 2, why: "Ohere nwere oke na-ebelata mmebi mperi na-ebute." },
      { objective: "O5", q: "Mgbe ị na-enye agent nnwere onwe karịa, ị kwesịrị:", options: ["Ịmalite n'obere ma tinyekwuo nnwere onwe mgbe ọ rụchara nke ọma", "Inye nnwere onwe zuru ezu n'ụbọchị mbụ", "Ịghara ilele log ya mgbe ọ bụla", "Ịgbanyụ mkpu"], answer: 0, why: "A na-enweta ntụkwasị obi site n'ihe ọ rụpụtara." },
      { objective: "O6", q: "Kedu nke bụ ezigbo nnwale ozi dị iche?", options: ["Naanị ozi zuru oke", "Ozi nwere field tọgbọrọ chakoo", "Enweghị nnwale", "Ezi nọmba kaadị onye ahịa gị"], answer: 1, why: "Ozi dị iche na-egosi ebe ndị na-adịghị ike." },
      { objective: "O6", q: "Ọ bụrụ na run akpaaka dara, ọ kwesịrị:", options: ["Iziga ozi a na-emechabeghị", "Ịkwụsị ma gwa gị", "Ihichapụ spreadsheet gị", "Ịnwaghachi ya ruo mgbe ebighị ebi n'ekwughị ihe"], answer: 1, why: "Nke ahụ bụ ịkwụsị n'enweghị mmebi." },
      { objective: "O6", q: "N'ime nlele kwa izu gị, ị na-ele:", options: ["Runs, ọdịda, azịza mbụ AI ole na ole na nkeji e chekwara", "Naanị logo ngwa ahụ", "Ọ dịghị ihe", "Okwuntughe ndị asọmpi gị"], answer: 0, why: "Nke a na-egosi ma akpaaka ahụ ka na-arụ ọrụ ma baa uru." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Maapụ usoro ọrụ",
        objective: "O1",
        notYet: "Nzọụkwụ ụfọdụ adịghị ma ọ bụ e kaghị ha akara.",
        meets: "Nzọụkwụ ọ bụla site na mmalite ruo na njedebe, e kara akara dị ka idetuo, mkpebi ma ọ bụ ide ihe.",
        exceeds: "Na-edekwa oge nzọụkwụ ọ bụla na-ewe ma e ji aka mee ya taa."
      },
      {
        name: "Trigger na actions",
        objective: "O2",
        notYet: "Trigger ma ọ bụ actions edoghị anya.",
        meets: "Otu trigger doro anya na ndepụta actions, e kara nzọụkwụ AI na nnabata akara.",
        exceeds: "E dere field mapping maka ozi ọ bụla."
      },
      {
        name: "Akpaaka na-arụ ọrụ",
        objective: "O3",
        notYet: "Ọ naghị arụ ọrụ, ma ọ bụ e ji ezi ozi onye ahịa nwalee ya.",
        meets: "Fọm gaa spreadsheet gbakwunyere ozi ngosi na-arụ ọrụ, e ji ozi e chepụtara echepụta nwalee ya.",
        exceeds: "Na-edekwa oke atụmatụ n'efu e lelere na peeji ọnụahịa nke ngwa ahụ n'onwe ya."
      },
      {
        name: "Nzọụkwụ AI na oke",
        objective: "O5",
        notYet: "AI nwere ike iziga ndị ahịa ihe ma ọ bụ mee nzọụkwụ nwere ihe egwu n'enweghị nnabata.",
        meets: "Azịza mbụ AI na-aga nye onye nwe azụmahịa ka o kwado ya; ndepụta oke nwere ihe ise chọrọ nnabata.",
        exceeds: "Ntụziaka AI nwere iwu doro anya, e wepụkwara fields nzuzo na nzọụkwụ AI."
      },
      {
        name: "Nnwale na nlekọta",
        objective: "O6",
        notYet: "Nnwale na-erughị atọ, ma ọ bụ enweghị mkpu ọdịda.",
        meets: "Nnwale ozi dị iche atọ, mkpu ọdịda gbanwụrụ, e dekwara nlele kwa izu.",
        exceeds: "Nlele kwa izu gụnyere nkeji e chekwara na iwu maka mgbe a ga-agbanyụ ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị nwe azụmahịa mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa ndị akpaaka ha ka na-arụ ọrụ n'enweghị nsogbu mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Nkeji e chekwara kwa izu n'idetuo na ide azịza, dị ka ndị nwe azụmahịa kọrọ",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị ọchụnta ego n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ngwa fọm n'efu, spreadsheet na akaụntụ email",
      "Atụmatụ n'efu nke ngwa na-enweghị koodu dị ka Zapier, Make ma ọ bụ Microsoft Power Automate",
      "Ozi nnwale e chepụtara echepụta, dịka ọmụmaatụ \"Test Customer\"",
      "Ihe dị ka nkeji 75 n'ozuzu maka nkuzi, ịrụ, ịnwale na ihe ndekọ peeji otu"
    ],
    facilitatorNotes: [
      "Rụọ otu akpaaka ọmụmaatụ n'ihu mmadụ niile tupu ndị na-amụ ihe arụọ nke ha.",
      "Lelee oke atụmatụ n'efu ugbu a na peeji ọnụahịa nke ngwa ọ bụla tupu nnọkọ ahụ.",
      "Ekwela ka ndị na-amụ ihe jikọọ akaụntụ ụlọ akụ ma ọ bụ ziga ezi ndị ahịa ihe ọ bụla n'oge ihe ọmụmụ a.",
      "Mee ka ndị na-amụ ihe gbanwerịta ndepụta oke ha ma chọọ omume ọ bụla nwere ihe egwu a hapụrụ n'enweghị nnabata.",
      "Jiri rubric tụọ akara ihe ndekọ peeji otu, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
