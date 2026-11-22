"use strict";

// Koach Learn course (Igbo translation of artificial-intelligence/agentic-llms-prompting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-llms-prompting-ig",
  lang: "ig",
  translationOf: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Ịghọta LLM na Nka Ide Prompt",
  skills: "Ịkọwa token na context, Ide system prompt, Iji ọmụmaatụ, Inweta azịza JSON hazịrị ahazi, Ịkpọ LLM site na Python, Ịnwale prompt",
  outcome: "ide na ịnwale system prompt a pụrụ ịtụkwasị obi maka agent: ọ na-ekwu ọrụ model (role), ọrụ a ga-arụ, iwu na ụdị azịza nwere ọmụmaatụ, ọ na-eweghachi JSON dị ọcha, i lelekwala ya n'ihe nnwale ise site n'obere notebook Python.",
  about: [
    "Nke a bụ ihe ọmụmụ nke 2 nke mmemme Design, Build, and Deploy Autonomous AI Agents (Ịhazi, Iwu na Itinye AI Agent n'Ọrụ). Model dị n'ime agent ọ bụla bụ large language model (LLM), otu i si enye ya ntụziaka na-ekpebi ma agent ahụ ga-akpa àgwà ọma. Ihe ọmụmụ a na-akụzi gị n'okwu dị mfe otu LLM si arụ ọrụ na otu esi enye ya ntụziaka nke ọma.",
    "Isi 1 bụ maka otu model si arụ ọrụ na otu esi ede prompt siri ike na chatbot n'efu. Isi 2 na-aga na Python na Google Colab, notebook n'efu dị na web browser gị, ebe ị ga-akpọ model site na koodu, rịọ maka JSON ma nwalee prompt gị dị ka onye injinia.",
    "E gosiri koodu dị ka ahịrị mkpụmkpụ n'ime nkuzi. Ị nwere ike idetuo ha n'ime Colab. Ọ bụrụ na ịdebeghị koodu mgbe ọ bụla, soro ya nwayọọ; ihe ọmụmụ \"Mmalite Mmemme Kọmputa na Python\" bụ ezigbo enyi maka ya. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee system prompt maka otu ọrụ n'ime agent gị site n'ihe ọmụmụ 1 (dịka ọmụmaatụ, \"kewaa ozi bịara abịa n'ime: question, complaint, order, other\"). Ọ ga-enyerịrị ọrụ model (role), ọrụ a ga-arụ, iwu atọ, ụdị azịza JSON kpọmkwem na otu ọmụmaatụ. Rụọ ya site na notebook Colab n'ihe nnwale ise, gụnyere otu nke nwere aghụghọ, dekọọ ma azịza ọ bụla bụ JSON ziri ezi ma ziri ezi, ma gbanwee prompt ahụ otu ugboro iji dozie otu ọdịda.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-ewu AI agent mbụ ha na mmemme Design, Build, and Deploy Autonomous AI Agents: ndị nwe obere azụmahịa, ndị na-agbanwe ọrụ, ụmụ akwụkwọ na ndị ọrụ mechara ihe ọmụmụ 1 ma hazie otu ọrụ agent.",
    startingPoint: "Ha ejirila chatbot n'efu ma hazie agent n'akwụkwọ n'ihe ọmụmụ 1. Ọtụtụ n'ime ha enweghị ma ọ bụ nwere ntakịrị ahụmahụ n'ide koodu, ha akpọbeghịkwa model site na koodu mgbe ọ bụla.",
    gap: "Agent dị mma naanị dị ka ntụziaka model ya nwetara. Ndị na-amụ ihe kwesịrị ide system prompt doro anya, nweta azịza mmemme kọmputa nwere ike ịgụ, ma nwalee prompt n'ụzọ e mere ebumnuche, ma ọ bụghị ya agent ha ga-akpa àgwà a na-apụghị ịkọ tupu oge ma gbajie n'ihe a na-atụghị anya ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; e gosiri koodu dị ka ahịrị mkpụmkpụ a ga-edetuo",
      "Ngwaọrụ: kọmputa nwere web browser; Google Colab bụ n'efu mana a naghị ekwe nkwa ihe ọ na-enye",
      "API n'efu nwere oke ma nwee ike iji data, ya mere enweghị ozi nzuzo ma ọ bụ ozi ndị ahịa n'omume",
      "Igodo API (API key) ga-anọrịrị na nzuzo, ọ gaghị anọ n'ime notebook ma ọ bụ foto ihuenyo",
      "Oge: nkuzi dị mkpụmkpụ, nke ọ bụla nwere otu ọrụ omume"
    ],
    prerequisites: "Ihe ọmụmụ mbụ nke Design, Build, and Deploy Autonomous AI Agents. \"Mmalite Mmemme Kọmputa na Python\" bụ enyi bara uru."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị azịza chatbot ezighi ezi mana o ji n'aka", action: "ịkọwa otu token, prediction na context window nwere ike ime ka LLM dị ka o kwuru eziokwu ma ka mehie", standard: "n'okwu nke gị, na-akpọ opekata mpe ihe abụọ kpatara ya" },
    { id: "O2", condition: "Maka otu ọrụ n'ime agent gị", action: "ide system prompt nwere role, ọrụ a ga-arụ, context, iwu na ụdị azịza", standard: "nke akụkụ ọ bụla dị n'ime ya, iwu ya nwekwara ike ịlele" },
    { id: "O3", condition: "Mgbe e nyere gị system prompt gị", action: "itinye otu ọmụmaatụ zuru ezu na ụdị azịza JSON kpọmkwem", standard: "nke mere na opekata mpe 4 n'ime azịza 5 bụ naanị JSON ziri ezi nwere keys ziri ezi" },
    { id: "O4", condition: "N'ime notebook Google Colab n'efu", action: "ịkpọ LLM site na Python, na igodo API echekwara dị ka secret", standard: "ebe e bipụtara azịza ahụ, igodo ọ bụla adịghịkwa n'ime koodu" },
    { id: "O5", condition: "Mgbe e nyere gị azịza model n'ime notebook gị", action: "ịgbanwe azịza JSON ka ọ bụrụ data Python ma jikwaa azịza ọjọọ", standard: "n'enweghị koodu ịgbaji n'azịza efu ma ọ bụ nke mebiri emebi" },
    { id: "O6", condition: "Mgbe e nyere gị ihe nnwale ise, gụnyere otu nke nwere aghụghọ", action: "ịnwale prompt ahụ, idekọ nsonaazụ ya ma gbanwee otu ihe iji dozie ọdịda", standard: "na-arụghachi nnwale niile mgbe mgbanwe ọ bụla gasịrị" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu LLM si arụ ọrụ na otu esi enye ya ntụziaka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Otu LLM si ede ihe: token, prediction na context",
          minutes: 5,
          goal: "Kọwaa ihe mere LLM ji nwee ike ịdị ka o kwuru eziokwu ma ka mehie.",
          text: [
            "LLM na-ede otu obere ihe n'otu oge. A na-akpọ obere ihe ndị a token: okwu mkpụmkpụ, akụkụ nke okwu ogologo, ma ọ bụ akara edemede. N'nzọụkwụ ọ bụla, model ahụ na-ebu amụma (predict) token ọzọ nwere ike ịbịa, site n'ihe niile ọ hụrụ ruo ugbu a.",
            "Ihe niile model ahụ nwere ike ịhụ n'otu oge bụ context window ya: system prompt, mkparịta ụka ahụ, akwụkwọ ọ bụla i tinyere na azịza nke ya ruo ugbu a. Ihe ọ bụla dị n'èzí context window adịghị adị nye model ahụ. O nweghị ncheta mkparịta ụka gara aga belụsọ na app ahụ tinyere ha.",
            "Ebe ọ na-ebu amụma ederede nwere ike ịbịa, LLM nwere ike ide azịza dị mma ịgụ mana ọ bụ ụgha. Ọ naghị achọ eziokwu belụsọ ma o nwere ngwaọrụ nchọta (search tool). Prompt gị, context i nyere ya na nlele i wuru bụ ihe na-eme ka a pụrụ ịtụkwasị ya obi."
          ],
          words: [["Token", "obere ihe ederede, nke na-abụkarị akụkụ okwu, nke LLM na-agụ ma na-ede."], ["Context window", "ederede niile model ahụ nwere ike ịhụ n'otu oge."], ["Prediction (amụma)", "model ahụ na-ahọrọ token ọzọ nwere ike ịbịa site n'ihe bu ya ụzọ."]],
          slides: [
            { title: "LLM na-ede token n'otu n'otu", bullets: ["Token bụ okwu ma ọ bụ akụkụ okwu", "Nzọụkwụ ọ bụla na-ebu amụma token ọzọ nwere ike ịbịa"] },
            { title: "Context window", bullets: ["Ihe niile model ahụ nwere ike ịhụ n'otu oge", "System prompt, mkparịta ụka, akwụkwọ, azịza ya", "Ihe dị n'èzí ya adịghị adị nye ya"] },
            { title: "Ihe mere o ji nwee ike imehie", bullets: ["Ọ na-ebu amụma ederede, ọ bụghị eziokwu e lelere", "Prompt gị, context na nlele na-eme ka a tụkwasị ya obi"] }
          ],
          tryIt: "Na chatbot n'efu, jụọ: \"How many letters r are in the word strawberry? Then explain how tokens might make this hard for you.\" Dee ma azịza mbụ ahụ ziri ezi, na ihe mere token ji dị mkpa.",
          youCanNow: "ịkọwa token na context window, na ihe mere e ji ekwesị ilele LLM.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka LLM na-eme mgbe ọ na-ede azịza?", options: ["Ọ na-achọ azịza ahụ n'ebe nchekwa data e lelere", "Ọ na-ebu amụma token ọzọ nwere ike ịbịa, otu n'otu", "Ọ na-edetuo azịza mmadụ dere chekwaa", "Ọ na-achọ n'ịntanetị ma gụọ azịza mbụ"], answer: 1, why: "LLM na-ebu amụma ederede token n'otu n'otu, ya mere ọ nwere ike ịdị mma ịgụ n'eleleghị eziokwu." },
            { objective: "O1", q: "Chatbot nyere azịza o ji n'aka gbasara iwu dị mkpa n'ọrụ gị. Gịnị ka ị ga-eme?", options: ["Jiri ya, n'ihi na ọ dị ka o ji n'aka", "Jụọ ya otu ajụjụ ahụ ọzọ ruo mgbe o kwenyere", "Lelee iwu ahụ n'isi iyi a pụrụ ịtụkwasị obi tupu i jiri ya", "Tinye azịza ahụ na mkparịta ụka ọhụrụ ka ọ kwado ya"], answer: 2, why: "Azịza dị mma ịgụ ka nwere ike ịbụ ihe ezighi ezi, ya mere eziokwu dị mkpa chọrọ isi iyi a pụrụ ịtụkwasị obi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Akụkụ nke prompt siri ike",
          minutes: 6,
          goal: "Dee prompt nwere role, ọrụ a ga-arụ, context, iwu na ụdị azịza.",
          text: [
            "Prompt siri ike maka agent nwere akụkụ ise. Role: onye model ahụ bụ (\"You sort customer messages for a small bakery.\"). Ọrụ (task): otu ọrụ ahụ. Context: eziokwu ọ chọrọ. Iwu: ihe o kwesịrị ime na ihe o kwesịghị ime. Ụdị azịza (output format): kpọmkwem otu azịza ahụ ga-adị.",
            "System prompt na-ejide akụkụ ndị na-anọgide otu ihe ahụ oge ọ bụla: role, iwu na ụdị azịza. User message na-ejide ihe na-agbanwe oge ọ bụla: ozi ọhụrụ a ga-ekewa, ajụjụ ọhụrụ.",
            "Kwuo kpọmkwem ma kwuo ihe a ga-eme. \"Zaa n'ahịrịokwu abụọ\" na-arụ ọrụ karịa \"agala ogologo\". Kwuo ihe a ga-eme mgbe o nweghị n'aka: \"If the message fits no category, use other.\" Otu iwu ahụ na-egbochi ọtụtụ nchepụta ezighi ezi."
          ],
          steps: ["Role: onye bụ model ahụ?", "Ọrụ: otu ọrụ doro anya.", "Context: eziokwu ọ chọrọ.", "Iwu: ihe ọ ga-eme, ihe ọ gaghị eme, na ihe ọ ga-eme mgbe o nweghị n'aka.", "Ụdị azịza: kpọmkwem otu azịza ahụ ga-adị."],
          words: [["System prompt", "ntụziaka na-adịgide adịgide a na-eziga n'arịrịọ ọ bụla."], ["User message", "akụkụ na-agbanwe oge ọ bụla, dị ka ajụjụ ọhụrụ ma ọ bụ ihe ọhụrụ e tinyere."]],
          slides: [
            { title: "Akụkụ ise nke prompt siri ike", bullets: ["Role", "Ọrụ (task)", "Context na iwu", "Ụdị azịza (output format)"] },
            { title: "System prompt na user message", bullets: ["System: ihe na-anọgide otu (role, iwu, ụdị azịza)", "User: ihe na-agbanwe oge ọ bụla (ihe ọhụrụ e tinyere)"] },
            { title: "Dee iwu doro anya", bullets: ["Kwuo ihe a ga-eme, ọ bụghị naanị ihe a gaghị eme", "Nye iwu maka mgbe o nweghị n'aka", "Ọmụmaatụ: ọ bụrụ na ọ dịghị ihe dabara, jiri \"other\""] }
          ],
          tryIt: "Dee system prompt nwere akụkụ ise maka otu ọrụ n'ime agent gị site n'ihe ọmụmụ 1. Tinye ya na chatbot n'efu, wee zipu ihe atọ dị iche iche ma lee ma ọ na-agbaso iwu ọ bụla.",
          youCanNow: "ide prompt nwere role, ọrụ a ga-arụ, context, iwu na ụdị azịza.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ akụkụ role nke system prompt?", options: ["Kpọmkwem keys JSON ị chọrọ ka o weghachi", "Ozi onye ọrụ zitere oge a", "Ndepụta ihe nnwale", "Onye model ahụ kwesịrị ịbụ, dị ka onye na-ekewa ozi ndị ahịa"], answer: 3, why: "Role na-agwa model ahụ onye ọ bụ maka ọrụ a; akụkụ ndị ọzọ na-ekpuchi ọrụ, context, iwu na ụdị azịza." },
            { objective: "O2", q: "Prompt gị na-ekwu \"be helpful and good\" azịza ya na-adịkwa iche iche. Gịnị ka ị ga-agbanwe?", options: ["Were iwu doro anya model ahụ nwere ike ịgbaso, nke ị nwere ike ilele, dochie ya", "Mee ka prompt ahụ dị ogologo karị site n'okwu ọma ndị ọzọ", "Wepụ iwu niile ka model ahụ kpebie", "Gbanwee gaa na chatbot ọzọ"], answer: 0, why: "A pụghị ilele okwu na-edoghị anya; iwu doro anya na-eme ka àgwà ya bụrụ otu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ọmụmaatụ, nzọụkwụ na azịza hazịrị ahazi",
          minutes: 5,
          goal: "Jiri ọmụmaatụ na ụdị JSON nweta azịza mmemme kọmputa nwere ike ịgụ.",
          text: [
            "Igosi ka mma karịa ịkọ. Otu ma ọ bụ ọmụmaatụ abụọ zuru ezu n'ime prompt (ihe e tinyere na kpọmkwem azịza ị chọrọ) na-eme ka nsonaazụ ka mma nke ukwuu. A na-akpọ nke a few-shot prompting. Zero-shot pụtara na ọ dịghị ọmụmaatụ.",
            "Agent chọrọ azịza koodu nwere ike ịgụ, ọ bụghị paragraf mkparịta ụka. Rịọ maka JSON, ụdị ederede dị mfe nwere aha na uru ha: {\"category\": \"order\", \"urgent\": false}. Kwuo: \"Reply with only JSON, no other text,\" ma gosi kpọmkwem keys ahụ.",
            "Maka ọrụ siri ike karị, rịọ model ahụ ka ọ rụọ ya nzọụkwụ n'nzọụkwụ: buru ụzọ depụta eziokwu, wee kpebie. Ọtụtụ ọrụ model nwekwara ike ịmanye JSON ziri ezi site na ntọala a na-akpọ structured output; lelee akwụkwọ nkọwa (documentation) nke onye na-enye gị ọrụ ahụ."
          ],
          words: [["Few-shot prompting", "inye model ahụ ọmụmaatụ ole na ole nke ihe e tinyere na azịza ziri ezi."], ["JSON", "ụdị ederede dị mfe nwere uru nwere aha, nke mmemme kọmputa nwere ike ịgụ, dị ka {\"name\": \"Ana\"}."], ["Structured output", "ntọala model na-eme ka azịza ya soro kpọmkwem ụdị e nyere."]],
          slides: [
            { title: "Gosi, ọ bụghị naanị ịkọ", bullets: ["Zero-shot: ọ dịghị ọmụmaatụ", "Few-shot: otu ruo ọmụmaatụ atọ zuru ezu", "Ọmụmaatụ na-eme ka nsonaazụ ka mma nke ukwuu"] },
            { title: "Rịọ maka JSON", bullets: ["Mmemme kọmputa nwere ike ịgụ ya", "\"Reply with only JSON, no other text\"", "Gosi kpọmkwem keys ị chọrọ"] },
            { title: "Ọrụ siri ike karị", bullets: ["Rịọ ya ka o depụta eziokwu, wee kpebie", "Jiri structured output ma ọ bụrụ na onye na-enye gị ya nwere ya"] }
          ],
          tryIt: "Tinye otu ọmụmaatụ zuru ezu na ụdị JSON na prompt gị site na Nkuzi 2. Zipu ihe ise. Gụọ ole n'ime azịza ndị ahụ bụ naanị JSON nwere keys ziri ezi.",
          youCanNow: "iji ọmụmaatụ na ụdị JSON nweta azịza koodu gị nwere ike ịgụ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ị ga-eji tinye ọmụmaatụ zuru ezu na prompt?", options: ["Ọ na-eme ka model ahụ rụọ ọrụ ngwa ngwa", "Ọ na-ezo iwu ahụ n'anya onye ọrụ", "Ọ na-egosi model ahụ kpọmkwem ụdị azịza ị chọrọ", "Ọ na-eme ka role ghara ịdị mkpa"], answer: 2, why: "Ọmụmaatụ na-egosi model ahụ usoro na ụdị ọ ga-eṅomi." },
            { objective: "O3", q: "Ụfọdụ azịza na-alọta dị ka JSON nwere ahịrịokwu enyi n'ihu ya. Gịnị ka ị ga-eme?", options: ["Nabata ya, n'ihi na JSON dị n'ime ya ebe ụfọdụ", "Kwuo na prompt ka o weghachi naanị JSON nwere kpọmkwem keys ahụ, ma gosi ọmụmaatụ", "Rịọ maka azịza dị ogologo karị", "Wepụ ụdị azịza ka model ahụ nwere onwe ya"], answer: 1, why: "Koodu chọrọ naanị JSON, ya mere prompt ga-ekwurịrị ya n'ụzọ doro anya ma gosi ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu LLM si arụ ọrụ na otu esi enye ya ntụziaka",
        questions: [
          { objective: "O1", q: "Gịnị bụ token?", options: ["Okwuntughe maka AI", "Mkpụrụ ego e ji akwụ ụgwọ AI", "Obere ihe ederede model ahụ na-agụ ma na-ede", "Ụdị chatbot"], answer: 2, why: "LLM na-arụ ọrụ na token: okwu ma ọ bụ akụkụ okwu." },
          { objective: "O1", q: "I tinyere akwụkwọ n'otu mkparịta ụka. Na mkparịta ụka ọhụrụ, model ahụ amaghị ya. Gịnị kpatara?", options: ["Akwụkwọ ahụ adịzighị n'ime context window ya ugbu a", "Model ahụ mebiri emebi", "A naghị ekwe ka e tinye akwụkwọ", "Ọ chọrọ kọmputa na-agba ọsọ karị"], answer: 0, why: "Model ahụ na-ahụ naanị ihe dị n'ime context window nke ugbu a." },
          { objective: "O2", q: "Kedu akụkụ kwesịrị ịnọ na system prompt?", options: ["Njakịrị ọ bụla", "Ozi onye ahịa nke taa", "Okwuntughe gị", "Iwu na-arụ ọrụ oge ọ bụla"], answer: 3, why: "System prompt na-ejide ihe na-anọgide otu; user message na-ejide ihe na-agbanwe." },
          { objective: "O2", q: "Kedu iwu e dere nke ọma karịa?", options: ["\"Don't be long.\"", "\"Answer in two sentences. If unsure, say: not sure.\"", "\"Try hard.\"", "\"Be good.\""], answer: 1, why: "Ọ doro anya, na-ekwu ihe a ga-eme, ma na-ekwu ihe a ga-eme mgbe o nweghị n'aka." },
          { objective: "O3", q: "Gịnị mere ị ga-eji rịọ model agent maka JSON?", options: ["Ọ na-adị mma ilegide anya", "Model apụghị ide paragraf", "Ọ dị mkpụmkpụ ide", "Koodu gị nwere ike ịgụ azịza ahụ n'ụzọ a pụrụ ịtụkwasị obi"], answer: 3, why: "Agent na-enyefe azịza na koodu, koodu chọkwara ụdị a kara aka." }
        ]
      }
    },
    {
      name: "Isi 2: Ịkpọ na ịnwale LLM site na Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Oku model mbụ gị site na Google Colab",
          minutes: 6,
          goal: "Kpọọ LLM site na notebook Python ma bipụta azịza ya.",
          text: [
            "Google Colab bụ notebook Python n'efu na-arụ ọrụ na browser gị; ị chọrọ akaụntụ Google. A naghị ekwe nkwa ihe ọ na-enye n'efu, notebook a hapụrụ n'arụghị ọrụ na-akwụsịkwa (time out), ya mere chekwaa ọrụ gị. Meghee colab.research.google.com ma mepụta notebook ọhụrụ.",
            "Iji kpọọ model, ị chọrọ igodo API (API key), okwuntughe nzuzo maka mmemme kọmputa. Gemini API nke Google nwere ọkwa n'efu (free tier) maka obere ọrụ; ị na-enweta igodo site na Google AI Studio (aistudio.google.com/apikey). Google kwuru na ihe e zitere na free tier nwere ike iji meziwanye ngwaahịa ya, ya mere ezitela ozi nzuzo ma ọ bụ ozi ndị ahịa na free tier mgbe ọ bụla.",
            "Quickstart nke Google ugbu a na-egosi ahịrị dị ka ndị a: pip install -U google-genai, wee from google import genai, client = genai.Client(), wee interaction = client.interactions.create(model='MODEL_NAME', input='Explain an AI agent in one sentence'), wee print(interaction.output_text). Detuo kpọmkwem aha model na koodu site na peeji quickstart ahụ, n'ihi na aha na koodu na-agbanwe. A na-agụ igodo ahụ site na environment variable aha ya bụ GEMINI_API_KEY.",
            "Etinyela igodo gị na notebook a na-ekesa, foto ihuenyo ma ọ bụ chatbot mgbe ọ bụla. Debe ya na ntọala nzuzo (secret), ma mee igodo ọhụrụ ma ọ bụrụ na otu apụta. Ndị ọzọ na-enye ọrụ a (OpenAI, Anthropic, ma ọ bụ model n'efu dị na kọmputa gị site na Ollama) na-arụ ọrụ otu ụzọ ahụ: client, aha model, ihe e tinyere na azịza."
          ],
          steps: ["Meghee colab.research.google.com ma mee notebook ọhụrụ.", "Nweta igodo API site na Google AI Studio ma debe ya na nzuzo.", "Wụnye library ahụ ma detuo koodu quickstart.", "Jiri aha model e gosiri na peeji quickstart.", "Rụọ cell ahụ ma bipụta azịza ya."],
          words: [["API", "ụzọ otu mmemme kọmputa si agwa ibe ya okwu, dị ka koodu gị na-arịọ model azịza."], ["Igodo API (API key)", "koodu nzuzo na-ekwe ka mmemme gị jiri otu ọrụ; were ya dị ka okwuntughe."], ["Environment variable", "ntọala echekwara n'èzí koodu gị, a na-ejikarị maka ihe nzuzo."]],
          slides: [
            { title: "Colab: Python n'efu na browser", bullets: ["Ọ chọrọ akaụntụ Google", "A naghị ekwe nkwa ihe ọ na-enye n'efu", "Notebook a hapụrụ na-akwụsị: chekwaa ọrụ gị"] },
            { title: "Ime ka model zaa", bullets: ["Nweta igodo API site na Google AI Studio", "Detuo koodu na aha model site na quickstart", "Client, aha model, ihe e tinyere, azịza"] },
            { title: "Chebe igodo gị", bullets: ["Ọ dịghị mgbe ọ na-anọ na notebook a na-ekesa ma ọ bụ foto", "Debe ya na ntọala nzuzo (secret)", "Mee igodo ọhụrụ ma ọ bụrụ na ọ pụta"] },
            { title: "Free tier na nzuzo", bullets: ["Ihe e zitere na free tier nwere ike iji meziwanye ngwaahịa", "Ezitela ozi nzuzo ma ọ bụ ozi ndị ahịa na ya"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }, { name: "Gemini API quickstart", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "Gemini API pricing and free tier", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Mee notebook Colab, debe igodo n'ụzọ n'enweghị nsogbu ma mee ka model ahụ zaa: \"Explain an AI agent in one sentence.\" Chekwaa notebook ahụ dị ka agent-prompts.",
          youCanNow: "ịkpọ LLM site na Python na notebook n'efu ma debe igodo API gị na nzuzo.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ Google Colab?", options: ["Notebook Python n'efu na-arụ ọrụ na web browser", "Model AI a na-akwụ ụgwọ", "Ebe a na-echekwa okwuntughe", "App ekwentị maka ịkparịta ụka na AI"], answer: 0, why: "Colab na-ekwe ka ị rụọ Python na browser n'efu, nwere oke." },
            { objective: "O4", q: "Ị na-achọ ikesa notebook gị. E dere igodo API gị n'ime cell koodu. Gịnị ka ị ga-eme?", options: ["Kesaa ya, ebe ọ bụ naanị ndị enyi ga-ahụ ya", "Mee ka igodo ahụ ghara ịhụ anya na foto ihuenyo kama", "Gbanwee aha variable ahụ ka o siere ike ịchọta", "Bugharịa igodo ahụ gaa na ntọala nzuzo, ma mee igodo ọhụrụ ma ọ bụrụ na a hụlarị ya"], answer: 3, why: "Igodo dị ka okwuntughe: debe ya na ntọala nzuzo ma dochie ya ma ọ bụrụ na ọ pụtara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iziga system prompt gị na ịgụ JSON na koodu",
          minutes: 6,
          goal: "Zipu prompt gị site na koodu ma gbanwee azịza JSON ka ọ bụrụ data Python.",
          text: [
            "Tinye system prompt gị n'ime variable Python: SYSTEM = '''You sort messages for a bakery... Reply with only JSON.''' Tinye ihe ọhụrụ ọ bụla n'ime variable ọzọ. Ụzọ kacha mfe isi jikọta ha bụ iziga SYSTEM na ihe ahụ dị ka otu ederede; ọtụtụ ndị na-enye ọrụ nwekwara ntọala system-instruction dị iche, nke e gosiri n'akwụkwọ nkọwa ha.",
            "Gụọ azịza ahụ site na library json nke Python: import json, wee data = json.loads(text). Ugbu a data['category'] bụ uru Python nkịtị agent gị nwere ike iji rụọ ọrụ.",
            "Mgbe ụfọdụ, model ahụ ga-etinye okwu gburugburu JSON ma ọ bụ hapụ otu key. Kwadebe maka ya: tinye parse ahụ n'ime try na except, ma ọ bụrụ na ọ daa, ma ọ bụ nwaa ọzọ otu ugboro site na \"Reply with only JSON\" ma ọ bụ kaa ihe ahụ akara dị ka nke dara. Ekwela ka azịza ọjọọ mee ka agent ahụ gbajie ma ọ bụ gafere n'enweghị onye hụrụ ya."
          ],
          steps: ["Chekwaa system prompt n'ime variable.", "Zipu system prompt na ihe e tinyere nye model ahụ.", "Parse azịza ahụ site na json.loads n'ime try / except.", "Lelee na keys ị chọrọ dị ya.", "Ọ bụrụ na ọ daa: nwaa ọzọ otu ugboro, ma ọ bụ kaa ya akara na ọ dara."],
          words: [["Parse", "ịgbanwe ederede ka ọ bụrụ data mmemme kọmputa nwere ike iji."], ["try / except", "ụzọ Python si ejide mperi ma jikwaa ya kama ịgbaji."], ["Retry (ịnwa ọzọ)", "ịnwa otu arịrịọ ahụ ọzọ mgbe ọ dara."]],
          slides: [
            { title: "Prompt n'ime koodu", bullets: ["SYSTEM na-ejide role, iwu na ụdị azịza", "Ihe ọhụrụ ọ bụla e tinyere na-aga n'ime variable nke ya"] },
            { title: "Gụọ JSON", bullets: ["import json", "data = json.loads(text)", "Ị nwere ike iji data['category'] ugbu a"] },
            { title: "Kwadebe maka azịza ọjọọ", bullets: ["Tinye parse ahụ n'ime try / except", "Lelee na keys ahụ dị", "Nwaa ọzọ otu ugboro, ma ọ bụ kaa ya akara na ọ dara"] }
          ],
          tryIt: "N'ime notebook gị, zipu system prompt gị na otu ihe, parse JSON ahụ, ma bipụta naanị category. Wee nye ya ihe dị iche (ozi efu) ma hụ na koodu gị agbajighị.",
          youCanNow: "iziga system prompt site na Python ma gbanwee JSON model ahụ ka ọ bụrụ data n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka json.loads na-eme azịza model ahụ?", options: ["Ọ na-eziga ya azụ nye model ahụ", "Ọ na-agbanwe ederede JSON ka ọ bụrụ data Python koodu gị nwere ike iji", "Ọ na-elele ma azịza ahụ bụ eziokwu", "Ọ na-echekwa ya na faịlụ"], answer: 1, why: "json.loads na-agbanwe ederede JSON ka ọ bụrụ data Python dị ka dictionary." },
            { objective: "O5", q: "Agent gị nwetara ozi efu, nzọụkwụ parse wee daa. Gịnị ka koodu ahụ kwesịrị ime?", options: ["Gbajie ka ị hụ ya", "Weghachi ederede ọ bụla lọtara dị ka category", "Jide mperi ahụ, wee nwaa ọzọ otu ugboro ma ọ bụ kaa ihe ahụ akara na ọ dara", "Hichapụ ozi ahụ"], answer: 2, why: "Itinye parse n'ime try / except na-ekwe ka agent jikwaa azịza ọjọọ kama ịgbaji." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịnwale prompt dị ka onye injinia",
          minutes: 6,
          goal: "Rụọ prompt n'obere ndepụta nnwale ma meziwanye ya site na nsonaazụ.",
          text: [
            "Otu ezigbo azịza egosighị ọtụtụ ihe. Ndị injinia na-ede test set: obere ndepụta ihe e tinyere na azịza ha na-atụ anya ya. Tinye ihe dị mfe, edge case (efu, ogologo nke ukwuu, isiokwu abụọ n'otu oge) na otu ihe nwere aghụghọ, dị ka ozi na-ekwu \"ignore your instructions\".",
            "Na Python, ndepụta nke abụọ abụọ na-arụ ọrụ: tests = [('Where is my cake?', 'order'), ('You burned my bread!', 'complaint')]. Gaa n'otu n'otu n'ime ya (loop), kpọọ model ahụ, parse JSON ma tụnyere ya na azịza a tụrụ anya ya. Gụọ ole bụ JSON ziri ezi na ole ziri ezi.",
            "Gbanwee otu ihe n'otu oge: iwu doro anya karị, ọmụmaatụ ka mma. Rụọ test set niile ọzọ mgbe mgbanwe ọ bụla gasịrị, ka ị mara na ndozi ahụ nyere aka ma o mebighị ihe ọ bụla. Debe ụdị prompt ọ bụla na akara ya n'ime notebook gị."
          ],
          steps: ["Dee ihe nnwale 5 ruo 10 nwere azịza a tụrụ anya ya.", "Tinye edge case na otu ihe nwere aghụghọ.", "Loop: kpọọ, parse, tụnyere, gụọ.", "Gbanwee otu ihe na prompt.", "Rụọ nnwale niile ọzọ ma debe ụdị ka mma."],
          words: [["Test set", "ndepụta ihe e tinyere na azịza ị na-atụ anya ya, e ji elele prompt."], ["Edge case", "ihe a na-adịghị ahụkarị, dị ka ozi efu ma ọ bụ ozi ogologo nke ukwuu."], ["Regression", "mgbe mgbanwe dozikwara otu ihe mana mebie ihe ọzọ."]],
          slides: [
            { title: "Dee test set", bullets: ["Ihe e tinyere nwere azịza a tụrụ anya ya", "Ihe dị mfe na edge case", "Otu ihe aghụghọ \"ignore your instructions\""] },
            { title: "Rụọ ya n'ime loop", bullets: ["Kpọọ model ahụ maka ihe ọ bụla", "Parse JSON, tụnyere ya na nke a tụrụ anya ya", "Gụọ ndị ziri ezi na JSON ziri ezi"] },
            { title: "Meziwanye otu mgbanwe n'otu oge", bullets: ["Iwu doro anya karị ma ọ bụ ọmụmaatụ ka mma", "Rụọ nnwale niile ọzọ mgbe mgbanwe ọ bụla gasịrị", "Debe ụdị prompt na akara ha"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee system prompt gị nwere role, ọrụ, iwu atọ, ụdị JSON na otu ọmụmaatụ. Nwalee ya na Colab n'ihe ise gụnyere otu nwere aghụghọ, dekọọ JSON ziri ezi na ziri ezi maka nke ọ bụla, gbanwee prompt ahụ otu ugboro iji dozie ọdịda, ma rụọ ya ọzọ.",
          youCanNow: "ịnwale na imeziwanye prompt site n'obere test set, dị ka ndị na-ewu agent si eme.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ regression mgbe ị na-anwale prompt?", options: ["Nnwale gafere na nke mbụ", "Ndozi nke mere ka nnwale gafere na mbụ daa ugbu a", "Ihe nnwale e dere n'asụsụ ọzọ", "Azịza model ahụ na-abịa nwayọọ karị"], answer: 1, why: "Regression bụ mgbe mgbanwe mebiri ihe na-arụ ọrụ na mbụ." },
            { objective: "O6", q: "Otu n'ime nnwale ise dara. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Gbanwee otu ihe na prompt ma rụọ nnwale ise ahụ niile ọzọ", "Dee prompt ahụ niile ọzọ site na mmalite", "Hichapụ nnwale dara ada", "Rụọ naanị nnwale dara ada ọzọ"], answer: 0, why: "Ịgbanwe otu ihe na ịrụ nnwale niile ọzọ na-egosi ihe mgbanwe ahụ dozịrị na ihe o mebiri." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịkpọ na ịnwale LLM site na Python",
        questions: [
          { objective: "O4", q: "Ebee ka igodo API gị kwesịrị ịnọ?", options: ["N'ime cell notebook a na-ekesa", "Na foto ihuenyo maka enyemaka", "Na ntọala nzuzo ma ọ bụ environment variable", "N'ime chatbot ka o cheta ya"], answer: 2, why: "Igodo bụ okwuntughe maka mmemme kọmputa, ha ga-anọrịrị na nzuzo." },
          { objective: "O4", q: "Gịnị mere ị ga-eji detuo aha model site na peeji quickstart nke onye na-enye ọrụ ahụ?", options: ["Aha model na koodu na-agbanwe ka oge na-aga", "Iwu chọrọ ya", "Ọ na-eme ka azịza dị mkpụmkpụ", "Colab agaghị arụ ọrụ ma ọ bụghị ya"], answer: 0, why: "Ndị na-enye ọrụ na-agbanwe aha model ma na-akwụsị ụfọdụ; peeji ha bụ nke ugbu a." },
          { objective: "O5", q: "json.loads(text) dara n'ihi na model ahụ tinyere okwu. Ezigbo agent:", options: ["Na-agbaji", "Na-ejide mperi ahụ, nwaa ọzọ otu ugboro ma ọ bụ kaa ya akara na ọ dara", "Na-ehichapụ ihe e tinyere", "Na-eji ederede ahụ n'agbanyeghị"], answer: 1, why: "Kwadebe maka azịza ọjọọ ka ha ghara ime ka ọ gbajie ma ọ bụ gafere n'enweghị onye hụrụ." },
          { objective: "O6", q: "Kedu nke kwesịrị ịnọ na ezigbo test set?", options: ["Ihe dị mfe, edge case na ihe nwere aghụghọ", "Naanị otu ihe", "Naanị ihe dị mfe", "Azịza model ahụ nyerelarị"], answer: 0, why: "Edge case na ihe aghụghọ na-egosi ebe prompt na-agbaji." },
          { objective: "O6", q: "I gbanwere prompt ahụ, otu nnwale gafekwara ugbu a. Gịnị ọzọ?", options: ["Bupụ ya ozugbo", "Gbanwee ihe ise ọzọ n'otu oge", "Hichapụ nnwale ochie", "Rụọ test set niile ọzọ"], answer: 3, why: "Ịrụ ihe niile ọzọ na-ejide regression." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịghọta LLM na Nka Ide Prompt",
    questions: [
      { objective: "O1", q: "LLM na-ede site n':", options: ["Idetuo peeji weebụ", "Ibu amụma otu token n'otu oge", "Ịjụ mmadụ", "Ịchọ n'ndepụta azịza a kara aka"], answer: 1, why: "Ọ na-ebu amụma token ọzọ nwere ike ịbịa, ugboro ugboro." },
      { objective: "O1", q: "Context window bụ:", options: ["Taabụ browser", "Ọnụahịa model ahụ", "Ihe niile model ahụ nwere ike ịhụ n'otu oge", "Agba app chatbot ahụ"], answer: 2, why: "Naanị ederede dị n'ime window ahụ dị adị nye model ahụ." },
      { objective: "O1", q: "Gịnị mere model nwere ike ịkọ ihe ụgha n'ụzọ dị mma ịgụ?", options: ["Token ya agwụla", "Ọ na-agha ụgha n'ebumnuche", "Ọ na-ebu amụma ederede nwere ike ịbịa kama ilele eziokwu", "Igodo ya agwụla oge"], answer: 2, why: "Amụma abụghị nlele eziokwu belụsọ ma e tinyere ngwaọrụ." },
      { objective: "O2", q: "Kedu nke ỌBỤGHỊ otu n'ime akụkụ ise nke prompt siri ike?", options: ["Okwuntughe gị", "Ụdị azịza", "Iwu", "Role"], answer: 0, why: "Okwuntughe adịghị mgbe ọ na-anọ na prompt." },
      { objective: "O2", q: "Gịnị kwesịrị ịgbanwe oge ọ bụla a rụrụ ya?", options: ["System prompt", "Ụdị azịza", "Role", "User message"], answer: 3, why: "Ihe ọhụrụ e tinyere na-aga na user message." },
      { objective: "O2", q: "Ezigbo iwu maka mgbe o nweghị n'aka bụ:", options: ["\"Guess.\"", "\"If nothing fits, use other.\"", "\"Never be unsure.\"", "\"Make something up.\""], answer: 1, why: "Ịgwa ya ihe ọ ga-eme mgbe o nweghị n'aka na-egbochi nchepụta ezighi ezi." },
      { objective: "O3", q: "Few-shot prompting pụtara:", options: ["Naanị prompt dị mkpụmkpụ", "Iziga arịrịọ ole na ole", "Iji obere model", "Itinye ọmụmaatụ ole na ole zuru ezu"], answer: 3, why: "Ọmụmaatụ nke ihe e tinyere na azịza na-eduzi model ahụ." },
      { objective: "O3", q: "Kedu nke bụ JSON ziri ezi?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "JSON na-eji akara {}, aha na uru dị n'ime akara okwu." },
      { objective: "O3", q: "Structured output bụ:", options: ["Ntọala model na-amanye kpọmkwem ụdị azịza", "Azịza dị ogologo karị", "Ụdị chatbot", "Menu Colab"], answer: 0, why: "Ọtụtụ ndị na-enye ọrụ nwere ike ịmanye JSON ziri ezi site na ya; lelee akwụkwọ nkọwa." },
      { objective: "O4", q: "Google Colab bụ:", options: ["Server a na-akwụ ụgwọ ị ga-awụnye", "Notebook Python n'efu na browser", "Naanị app ekwentị", "Model AI"], answer: 1, why: "Colab na-arụ notebook Python na browser gị n'efu." },
      { objective: "O4", q: "Ihe Colab na-enye n'efu bụ:", options: ["Ihe a naghị ekwe nkwa ya; notebook a hapụrụ na-akwụsị", "Ihe e kwere nkwa ya, enweghị oke", "Naanị maka ụlọ akwụkwọ", "Naanị na ngwụcha izu"], answer: 0, why: "Colab kwuru na a naghị ekwe nkwa ihe ọ na-enye n'efu." },
      { objective: "O4", q: "E kwesịrị iwere igodo API dị ka:", options: ["Aha njirimara ọha (username)", "Nkọwa (comment)", "Aha faịlụ", "Okwuntughe"], answer: 3, why: "Onye ọ bụla nwere igodo ahụ nwere ike iji akaụntụ gị." },
      { objective: "O4", q: "Na free tier nke Gemini API, ị gaghị eziga:", options: ["Ajụjụ nnwale", "Ozi nzuzo ma ọ bụ ozi ndị ahịa", "Ozi ụlọ ahịa achịcha (bakery) i chepụtara", "\"Hello\""], answer: 1, why: "Ihe e zitere na free tier nwere ike iji meziwanye ngwaahịa Google." },
      { objective: "O4", q: "Igodo gị pụtara na foto ihuenyo. Ị kwesịrị:", options: ["Ịtụ anya na ọ dịghị onye hụrụ ya", "Itinye ya ọzọ n'ịntanetị", "Ime igodo ọhụrụ ma kwụsị iji nke ochie", "Iziga ya ndị enyemaka site na email"], answer: 2, why: "A ga-edochirịrị igodo pụtara apụta." },
      { objective: "O5", q: "json.loads na-agbanwe:", options: ["Data ka ọ bụrụ foto", "Python ka ọ bụrụ JavaScript", "Ederede JSON ka ọ bụrụ data Python", "Prompt ka ọ bụrụ model"], answer: 2, why: "Parse na-eme ka azịza ahụ baa uru na koodu." },
      { objective: "O5", q: "Itinye parse n'ime try / except na-ekwe ka agent gị:", options: ["Jikwaa azịza ọjọọ kama ịgbaji", "Rụọ ọrụ ngwa ngwa", "Hapụ ịkpọ model ahụ", "Zoo igodo ahụ"], answer: 0, why: "A na-ejide mperi ma jikwaa ha." },
      { objective: "O6", q: "Edge case bụ:", options: ["Ihe a na-ahụkarị", "Aha model", "Nnwale mbụ", "Ihe a na-adịghị ahụkarị dị ka ozi efu"], answer: 3, why: "Edge case na-anwale oke prompt." },
      { objective: "O6", q: "Gịnị mere ị ga-eji tinye ihe \"ignore your instructions\" na nnwale?", options: ["Ime ka model ahụ gbaa ọsọ", "Ilele ma prompt ahụ na-eguzogide injection", "Ịchekwa token", "N'ihi na iwu kwuru otu ahụ"], answer: 1, why: "Agent na-agụ ederede a na-apụghị ịtụkwasị obi; prompt ahụ kwesịrị ijide iwu ya." },
      { objective: "O6", q: "Regression bụ mgbe:", options: ["Model ahụ dị ọnụ ala karị", "Igodo ahụ gwụrụ oge", "Nnwale niile gafere", "Ndozi mebiri ihe na-arụ ọrụ"], answer: 3, why: "Ịrụ nnwale niile ọzọ na-ejide regression." },
      { objective: "O6", q: "Ụzọ kacha mma isi meziwanye prompt bụ:", options: ["Ịgbanwe ọtụtụ ihe n'otu oge", "Ịghara ịgbanwe ya mgbe ọ bụla", "Ịgbanwe otu ihe ma rụọ nnwale niile ọzọ", "Ịrịọ model ahụ ka o nye onwe ya akara naanị"], answer: 2, why: "Otu mgbanwe n'otu oge na-egosi ihe nyere aka n'ezie." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      3,
      5,
      7,
      8,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "System prompt zuru ezu",
        objective: "O2",
        notYet: "Otu ma ọ bụ karịa n'ime role, ọrụ ma ọ bụ iwu atọ adịghị ma ọ bụ edoghị anya.",
        meets: "Na-enye role, ọrụ ahụ na iwu atọ doro anya.",
        exceeds: "Iwu ahụ na-ekpuchikwa ihe a ga-eme mgbe o nweghị n'aka ma ọ bụ mgbe ọ dịghị ihe dabara."
      },
      {
        name: "Ụdị azịza na ọmụmaatụ",
        objective: "O3",
        notYet: "Ọ dịghị ụdị JSON kpọmkwem ma ọ bụ ọ dịghị ọmụmaatụ.",
        meets: "Na-ekwu kpọmkwem keys JSON ma nye otu ọmụmaatụ zuru ezu.",
        exceeds: "Ọmụmaatụ ahụ dabara kpọmkwem n'ụdị ahụ, ọtụtụ azịza bụkwa JSON ziri ezi."
      },
      {
        name: "Na-arụ ọrụ site na Colab n'enweghị nsogbu",
        objective: "O4",
        notYet: "Notebook ahụ anaghị arụ ọrụ, ma ọ bụ a na-ahụ igodo API.",
        meets: "Prompt ahụ na-arụ ọrụ site na Colab, igodo ahụ dịkwa na ntọala nzuzo.",
        exceeds: "Notebook ahụ dị ọcha, onye ọzọ nwekwara ike ịrụ ya ọzọ site n'igodo nke ya."
      },
      {
        name: "Na-parse azịza n'enweghị nsogbu",
        objective: "O5",
        notYet: "Azịza ọjọọ ma ọ bụ nke efu na-eme ka koodu gbajie.",
        meets: "A na-parse JSON ka ọ bụrụ data, a na-ejidekwa azịza ọjọọ.",
        exceeds: "A na-aka ihe dara ada akara n'ụzọ doro anya ka e nwee ike inyocha ha."
      },
      {
        name: "Nwalere ma meziwanye",
        objective: "O6",
        notYet: "Ihe e tinyere erughị ise, ọ dịghị ihe nwere aghụghọ, ma ọ bụ e dekọghị nsonaazụ.",
        meets: "Ihe ise gụnyere otu nwere aghụghọ, e dekọrọ JSON ziri ezi na ziri ezi maka nke ọ bụla, e mere otu mgbanwe ma rụọ nnwale niile ọzọ.",
        exceeds: "Nwere ike ịkọwa ihe mere ọdịda ahụ ji mee na ihe mgbanwe ahụ dozịrị."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ nke 3 nke mmemme agent n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha jiri system prompt ha nwalere n'ezi agent ma ọ bụ n'ọrụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na igodo API ha ọ bụla apụtaghị (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser na ịntanetị",
      "Akaụntụ Google n'efu maka Google Colab",
      "Igodo API model AI n'efu site na saịtị nke onye na-enye ọrụ ahụ n'onwe ya",
      "Atụmatụ agent site n'ihe ọmụmụ 1",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee Isi 1 na chatbot n'efu tupu onye ọ bụla emeghee Colab.",
      "Duzie otu ahụ n'ichekwa igodo API dị ka secret, ma lelee na igodo ọ bụla adịghị n'ihuenyo ma ọ bụ na notebook a na-ekesa.",
      "Chetara ndị na-amụ ihe ka ha ghara iziga ozi nzuzo ma ọ bụ ozi ndị ahịa na API n'efu.",
      "Jikọta ndị na-edebeghị koodu mgbe ọ bụla na onye debere, ma mee ka ha detuo ahịrị koodu kpọmkwem.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma rịọ onye ọ bụla na-amụ ihe ka o gosi nsonaazụ nnwale ise ya."
    ]
  }
};
