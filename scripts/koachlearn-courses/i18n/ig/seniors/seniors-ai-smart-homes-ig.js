"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-smart-homes.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Spoken commands to the speaker stay in English inside quotes: Alexa and Google Assistant do not understand Igbo.

module.exports = {
  id: "seniors-ai-smart-homes-ig",
  lang: "ig",
  translationOf: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "AI na Ụlọ Smart",
  skills: "Ịghọta ngwaọrụ ụlọ smart, Inye smart speaker iwu doro anya n'olu, Ịhazi usoro (routine) dị mfe, Ịhọrọ ngwaọrụ maka nchekwa na ntụsara ahụ, Ichebe ihe nzuzo gị n'ụlọ",
  outcome: "iji smart speaker ma ọ bụ onye enyemaka olu nke ekwentị gị nye iwu doro anya n'olu, ịhazi ma ọ bụ ịtọ otu usoro dị mfe kwa ụbọchị (dị ka ncheta ụtụtụ na ọnọdụ ihu igwe), na ichebe ihe nzuzo gị site n'imechi maịk ma lelee ntọala.",
  about: [
    "Ụlọ smart bụ ụlọ nwere ngwaọrụ ị nwere ike ijikwa n'olu gị ma ọ bụ site n'ekwentị gị: speaker na-aza ajụjụ, ọkụ na-enwu n'onwe ha, plọg na-agbanye ma na-agbanyụ ọkụ oriọna, na mgbịrịgba ọnụ ụzọ nwere igwefoto. Maka ndị okenye, ihe ndị a nwere ike ime ka ndụ kwa ụbọchị dị mfe ma dịkwa nchekwa, karịsịa maka onye bi naanị ya.",
    "Ị ga-amụta ihe ngwaọrụ ndị a na-ahụkarị na-eme, otu esi agwa smart speaker okwu dị ka Amazon Echo (Alexa) ma ọ bụ Google Nest (Google Assistant), otu esi ahazi usoro dị mfe, na otu esi echebe ụlọ gị na ihe nzuzo gị.",
    "Ọ dịghị mkpa ka i nwee ngwaọrụ smart ọ bụla iji mụọ ihe ọmụmụ a: ị nwere ike iji onye enyemaka olu dị n'ekwentị gị mụọ nka olu. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ ahụ."
  ],
  finalTask: "Hazie otu usoro kwa ụbọchị maka ụlọ gị, dị ka \"Good morning\" (Ụtụtụ ọma): speaker ma ọ bụ ekwentị na-agwa gị ọnọdụ ihu igwe, na-echetara gị ọgwụ ụtụtụ gị ma na-agbanye oriọna. Dee ya, tọọ ya ruo ebe ngwaọrụ gị kwere, ma were olu gị mee ya ọtụtụ ugboro. Mgbe ahụ, chọta ma jiri bọtịnụ ma ọ bụ ntọala na-emechi maịk.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye, ọtụtụ n'ime ha bi naanị ha, ndị nwere ma ọ bụ na-eche maka smart speaker, ọkụ smart ma ọ bụ mgbịrịgba ọnụ ụzọ nwere vidiyo, nke ezinụlọ na-enyekarị dị ka onyinye, ma chọọ ka o nyere ha aka na ncheta, nchekwa na oku.",
    startingPoint: "Ha na-eji ekwentị akpọ oku ma zipu ozi, nweekwa Wi-Fi n'ụlọ. Ọtụtụ nwere smart speaker mana ha na-eji ya naanị maka ọnọdụ ihu igwe ma ọ bụ egwu, ma ha amaghị nke ọma otu usoro (routine) ma ọ bụ ntọala nzuzo si arụ ọrụ.",
    gap: "Ngwaọrụ ụlọ smart nwere ike inyere ndị okenye aka ibi ndụ n'enweghị nsogbu ma kwụrụ onwe ha, site na ncheta, ọkụ na-egbochi ịda ada na oku n'olu, mana a na-ahapụkarị ha n'ejighị ha, ma ọ bụ na ha na-eme ka ndị na-amụ ihe chewe maka ihe nzuzo. Iwu doro anya, otu usoro dị mfe na ịmara otu esi emechi maịk ma lelee ntọala na-eme ka ha bụrụ enyemaka kwa ụbọchị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: Amazon Echo ma ọ bụ Google Nest, ma ọ bụ onye enyemaka olu nke ekwentị; menu app na-agbanwe ka oge na-aga",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, nwayọọ nwayọọ",
      "Ihe enyemaka mberede dị iche dabere na ngwaahịa na mba; ọ bụghị speaker niile nwere ike ịkpọ 911",
      "Nzuzo: speaker na igwefoto na-edekọ ihe; ekesala koodu e zitere gị n'ozi nye ndị na-akpọ oku"
    ],
    prerequisites: "Ọ dịghị. Ndị na-enweghị smart speaker nwere ike iji onye enyemaka olu nke ekwentị ha soro."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ngwaọrụ ụlọ smart a na-ahụkarị", action: "ịkpọ aha ihe smart speaker, smart plug, smart bulb na mgbịrịgba ọnụ ụzọ nwere vidiyo nwere ike ime n'otu n'otu", standard: "ma nweta opekata mpe 3 n'ime 4 ziri ezi" },
    { id: "O2", condition: "Site n'iji smart speaker ma ọ bụ onye enyemaka olu nke ekwentị gị", action: "inye iwu doro anya n'olu nke na-amalite n'okwu nkpọte (wake word)", standard: "nke mere na ngwaọrụ ahụ ga-eme ihe ị rịọrọ, na-anwa okwu dị mfe karị ma ọ dị mkpa" },
    { id: "O3", condition: "Site n'iji app Alexa ma ọ bụ app Google Home", action: "ịhazi ma tọọ usoro kwa ụbọchị nke na-eme ọtụtụ ihe site n'otu okwu", standard: "nwere omume abụọ ma ọ bụ atọ, nke i jiri olu gị nwalee" },
    { id: "O4", condition: "Mgbe e nyere gị nsogbu nchekwa ị chọrọ idozi n'ụlọ", action: "ịhọrọ ihe smart dabara ha ma lelee ihe ngwaahịa ahụ nwere ike na ihe ọ na-enweghị ike ime", standard: "tupu ị zụta ya ma ọ bụ tụkwasị ya obi" },
    { id: "O5", condition: "Mgbe ị chọrọ nzuzo n'ụlọ", action: "imechi maịk ma lelee ntọala nzuzo na ihe olu e dekọrọ", standard: "n'ekesaghị koodu e zitere n'ozi ma ọ bụ okwuntughe nye ndị na-akpọ oku" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmata ụlọ smart",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ngwaọrụ ụlọ smart na-eme",
          minutes: 5,
          goal: "Kpọọ aha ngwaọrụ ụlọ smart a na-ahụkarị na ihe nke ọ bụla nwere ike imere gị.",
          text: [
            "Ngwaọrụ ụlọ smart na-ejikọ na Wi-Fi ụlọ gị ka i wee jikwaa ha n'olu gị ma ọ bụ site n'app dị n'ekwentị gị.",
            "Ndị a na-ahụkarị: smart speaker, dị ka Amazon Echo nwere Alexa ma ọ bụ Google Nest nwere Google Assistant, na-aza ajụjụ, na-akpọ egwu na redio, na-atọ taịma na ncheta, ma na-akpọ oku. Smart plug na-ekwe ka ị gbanye ma gbanyụọ oriọna ma ọ bụ fan n'olu gị ma ọ bụ n'oge a kara aka. Smart bulb na-agbanwe otu ìhè ha si sie ike. Mgbịrịgba ọnụ ụzọ nwere vidiyo na-ekwe ka ị hụ onye nọ n'ọnụ ụzọ n'ekwentị gị tupu i meghee ya.",
            "Maka ndị okenye bi naanị ha, ndị kacha baa uru na-abụkarị speaker maka ncheta na oku, ọkụ smart ka ị ghara ịbanye n'ime ụlọ gbara ọchịchịrị, na mgbịrịgba ọnụ ụzọ nwere vidiyo maka nchekwa."
          ],
          words: [["Ngwaọrụ smart", "ngwaọrụ na-ejikọ na ịntanetị ka i wee jikwaa ya n'olu gị ma ọ bụ n'ekwentị."], ["Wi-Fi", "ịntanetị na-enweghị waya dị n'ụlọ gị."], ["Smart plug", "plọg nnọchi na-ekwe ka ị gbanye ma gbanyụọ oriọna ma ọ bụ ngwa ụlọ n'olu gị ma ọ bụ site n'app."]],
          slides: [
            { title: "Ngwaọrụ smart na-ejikọ na Wi-Fi", bullets: ["Jikwaa ha n'olu gị", "Ma ọ bụ site n'app dị n'ekwentị gị"] },
            { title: "Ngwaọrụ a na-ahụkarị", bullets: ["Smart speaker: ajụjụ, egwu, ncheta, oku", "Smart plug na bulb: ọkụ na-enwu ma na-anyụ", "Mgbịrịgba ọnụ ụzọ nwere vidiyo: hụ onye nọ n'ọnụ ụzọ"] },
            { title: "Ndị kacha baa uru mgbe ị bi naanị gị", bullets: ["Ncheta na oku n'olu", "Ọ dịghị ụlọ gbara ọchịchịrị ọzọ", "Hụ ndị ọbịa tupu i meghee"] }
          ],
          tryIt: "Gaa gburugburu ụlọ gị ma dee ọrụ abụọ kwa ụbọchị nke ngwaọrụ smart nwere ike ime ka ọ dị mfe, dị ka ịgbanye oriọna siri ike iru aka ma ọ bụ ịhụ onye nọ n'ọnụ ụzọ.",
          youCanNow: "ịkpọ aha ngwaọrụ ụlọ smart a na-ahụkarị na otu ha nwere ike isi nyere gị aka.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka smart plug na-eme?", options: ["Ọ na-eme ka ekwentị gị chajụ ngwa ngwa", "Ọ na-ekwe ka ị gbanye ma gbanyụọ oriọna ma ọ bụ fan n'olu gị ma ọ bụ n'oge a kara aka", "Ọ na-edekọ vidiyo", "Ọ na-akpọ oku ekwentị"], answer: 1, why: "Smart plug na-achịkwa ihe ọ bụla a tụnyere n'ime ya, n'olu ma ọ bụ n'oge a kara aka." },
            { objective: "O1", q: "Ị bi naanị gị, ma na-echegbu onwe gị maka onye na-akụ aka n'ọnụ ụzọ n'abalị. Kedu ngwaọrụ kacha enyere aka?", options: ["Smart bulb", "Smart plug", "Mgbịrịgba ọnụ ụzọ nwere vidiyo", "Speaker egwu"], answer: 2, why: "Mgbịrịgba ọnụ ụzọ nwere vidiyo na-ekwe ka ị hụ onye nọ n'ọnụ ụzọ n'ekwentị gị tupu i meghee ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgwa smart speaker okwu",
          minutes: 5,
          goal: "Nye smart speaker ma ọ bụ onye enyemaka ekwentị gị iwu doro anya n'olu.",
          text: [
            "Ị na-akpọte smart speaker site n'okwu nkpọte ya: \"Alexa\" maka Amazon Echo, ma ọ bụ \"Hey Google\" maka Google Nest. Ọkụ na-egosi na ọ na-ege ntị. Onye enyemaka olu nke ekwentị gị na-arụ ọrụ otu ahụ site na \"Hey Siri\" ma ọ bụ \"Hey Google\".",
            "Kwuo okwu nke ọma, n'ọsọ nkịtị, ma kwuo kpọmkwem ihe ị chọrọ. Ọtụtụ ngwaọrụ na-aghọta asụsụ Bekee, ya mere iwu ndị a dị n'asụsụ Bekee: \"Alexa, what is the weather today?\" \"Hey Google, set a timer for 15 minutes.\" \"Alexa, play the classical music station.\" \"Hey Google, call Margaret.\"",
            "Ọ bụrụ na ọ ghọtaghị, kwughachi ya n'okwu dị mfe karị. Speaker ọhụrụ na-eji AI aghọta ajụjụ nkịtị karị, mana iwu dị mkpụmkpụ, doro anya ka na-arụ ọrụ kacha mma."
          ],
          steps: ["Kwuo okwu nkpọte: \"Alexa\" ma ọ bụ \"Hey Google\".", "Chere ka ọkụ ahụ nwuo.", "Kwuo kpọmkwem ihe ị chọrọ, nke ọma.", "Ọ bụrụ na ọ ghọtahiere, nwaa ọzọ n'okwu dị mfe karị."],
          words: [["Okwu nkpọte (wake word)", "okwu na-agwa smart speaker ka ọ malite ige ntị, dị ka \"Alexa\"."], ["Iwu (command)", "ntụziaka dị mkpụmkpụ ị na-ekwu n'olu, dị ka \"set a timer for 15 minutes\" (tọọ taịma maka nkeji 15)."]],
          slides: [
            { title: "Kpọte ya", bullets: ["\"Alexa\" maka Amazon Echo", "\"Hey Google\" maka Google Nest", "Ọkụ na-egosi na ọ na-ege ntị"] },
            { title: "Iwu doro anya", bullets: ["\"What is the weather today?\" (ihu igwe taa)", "\"Set a timer for 15 minutes.\" (taịma nkeji 15)", "\"Call Margaret.\" (kpọọ Margaret)"] },
            { title: "Ọ ghọtaghị?", bullets: ["Kwughachi ya n'okwu dị mfe karị", "Iwu dị mkpụmkpụ na-arụ ọrụ kacha mma"] }
          ],
          tryIt: "Site n'iji smart speaker ma ọ bụ onye enyemaka ekwentị gị, nye iwu atọ: jụọ ọnọdụ ihu igwe taa, tọọ taịma nkeji 5, ma rịọ ncheta echi n'elekere 9 nke ụtụtụ.",
          youCanNow: "inye smart speaker ma ọ bụ onye enyemaka olu iwu doro anya n'olu.",
          quickCheck: [
            { objective: "O2", q: "Kedu okwu nkpọte Amazon Echo?", options: ["\"Alexa\"", "\"Hello\"", "\"Hey Siri\"", "\"Start\""], answer: 0, why: "Amazon Echo na-ege ntị maka \"Alexa\"; Google Nest na-ege ntị maka \"Hey Google\"." },
            { objective: "O2", q: "Ị jụrụ ajụjụ ogologo, speaker ahụ ghọtahiere ya. Gịnị ka ị ga-eme?", options: ["Wepụ ya na ọkụ", "Tie mkpu karịa", "Kwụsị iji ya", "Kwughachi ya n'okwu dị mkpụmkpụ, dị mfe karị"], answer: 3, why: "Iwu dị mkpụmkpụ, doro anya ka na-arụ ọrụ kacha mma; nwaa ọzọ n'okwu dị mfe karị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhazi usoro (routine) dị mfe",
          minutes: 6,
          goal: "Hazie usoro na-eme ọtụtụ ihe site n'otu okwu.",
          text: [
            "Usoro (routine) na-ekwe ka otu okwu mee ọtụtụ ihe. Dịka ọmụmaatụ, ikwu \"Good morning\" (Ụtụtụ ọma) nwere ike ịgbanye oriọna, gwa gị ọnọdụ ihu igwe ma chetara gị ka ị ṅụọ ọgwụ gị.",
            "A na-atọ usoro n'app ekwentị nke ngwaọrụ ahụ: app Alexa maka Echo, ma ọ bụ app Google Home maka Nest. Chọọ ngalaba a na-akpọ Routines, pịa ka ịgbakwunye nke ọhụrụ, họrọ okwu na-amalite ya, wee tinye omume ndị ahụ. Menu na-agbanwe site n'oge ruo n'oge, ya mere ọ bụrụ na ịchọtaghị ya, lelee peeji enyemaka app ahụ ma ọ bụ jụọ onye ezinụlọ.",
            "Malite n'otu usoro dị mfe. Ị nwere ike ịrịọ onye enyemaka AI ka o nyere gị aka ịhazi ya: \"Nyere m aka ịhazi usoro ụtụtụ maka smart speaker m. Achọrọ m ọnọdụ ihu igwe, ncheta ọgwụ, na ka a gbanye oriọna m.\""
          ],
          steps: ["Dee okwu ahụ na omume ndị ahụ n'akwụkwọ.", "Meghee app Alexa ma ọ bụ app Google Home.", "Chọta Routines ma gbakwunye nke ọhụrụ.", "Họrọ okwu na-amalite ya.", "Tinye omume ọ bụla, chekwaa, ma were olu gị nwalee ya."],
          words: [["Usoro (routine)", "otu okwu ma ọ bụ oge na-eme ka ngwaọrụ mee ọtụtụ ihe n'usoro."], ["App ngwaọrụ (companion app)", "app ekwentị na-atọ ma na-achịkwa ngwaọrụ smart."]],
          slides: [
            { title: "Otu okwu, ọtụtụ omume", bullets: ["\"Good morning\" nwere ike...", "Ịgbanye oriọna", "Ịkọ ọnọdụ ihu igwe ma chetara gị ọgwụ"] },
            { title: "Ebe a na-atọ ya", bullets: ["App Alexa ma ọ bụ app Google Home", "Chọta Routines, gbakwunye nke ọhụrụ", "Họrọ okwu ahụ, tinye omume, chekwaa"] },
            { title: "Malite n'ihe dị mfe", bullets: ["Buru ụzọ dee ya n'akwụkwọ", "Rịọ AI ka o nyere gị aka ịhazi ya", "Jụọ ezinụlọ ma menu siri ike ịchọta"] }
          ],
          tryIt: "Dee usoro \"Good morning\" ma ọ bụ \"Good night\" (Ka chi fọọ) nwere okwu na omume abụọ ma ọ bụ atọ. Rịọ onye enyemaka AI ka o lelee atụmatụ gị ma tụọ otu ihe ga-eme ka ọ ka mma.",
          youCanNow: "ịhazi usoro ụlọ smart dị mfe ma mara ebe a na-atọ ya.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ usoro (routine) na smart speaker?", options: ["Ije ụkwụ kwa ụbọchị", "Otu okwu na-eme ka ngwaọrụ ahụ mee ọtụtụ ihe", "Ndepụta egwu", "Okwuntughe"], answer: 1, why: "Usoro na-ekwe ka otu okwu, dị ka \"Good morning\", mee ọtụtụ omume." },
            { objective: "O3", q: "Ịchọtaghị Routines n'app n'ihi na menu agbanweela. Gịnị ka ị ga-eme?", options: ["Hapụ usoro kpamkpam", "Zụta speaker ọhụrụ", "Lelee peeji enyemaka app ahụ ma ọ bụ jụọ onye ezinụlọ", "Tọgharịa speaker ahụ"], answer: 2, why: "Menu na-agbanwe site n'oge ruo n'oge; peeji enyemaka ma ọ bụ onye ezinụlọ nwere ike igosi gị ebe ọ dị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmata ụlọ smart",
        questions: [
          { objective: "O1", q: "Gịnị ka ngwaọrụ ụlọ smart na-ejikọ na ya?", options: ["Igbe akwụkwọ ozi", "Ọkpọkọ mmiri", "Wi-Fi ụlọ gị", "Naanị chaja batrị"], answer: 2, why: "Ha na-eji Wi-Fi ka i wee jikwaa ha." },
          { objective: "O1", q: "Kedu ngwaọrụ na-ekwe ka ị hụ onye nọ n'ọnụ ụzọ n'ekwentị gị?", options: ["Mgbịrịgba ọnụ ụzọ nwere vidiyo", "Smart plug", "Smart bulb", "Igwe na-ehicha achịcha (toaster)"], answer: 0, why: "Mgbịrịgba ọnụ ụzọ nwere vidiyo na-egosi ndị ọbịa n'ekwentị gị." },
          { objective: "O2", q: "Gịnị bụ okwu nkpọte (wake word)?", options: ["Kaadị ekele ụtụtụ", "Ụda elekere mkpu", "Okwuntughe", "Okwu na-eme ka speaker malite ige ntị"], answer: 3, why: "\"Alexa\" ma ọ bụ \"Hey Google\" na-akpọte speaker ahụ." },
          { objective: "O2", q: "Speaker ahụ aghọtaghị gị. Gịnị ka ị ga-anwa?", options: ["Tie mkpu", "Kwughachi ya n'okwu dị mfe karị", "Wepụ ya na ọkụ ruo mgbe ebighị ebi", "Nye ya okwuntughe gị"], answer: 1, why: "Iwu dị mkpụmkpụ, doro anya na-arụ ọrụ kacha mma." },
          { objective: "O3", q: "Ebee ka ị na-atọ usoro maka speaker Google Nest?", options: ["N'igwe mgbakọ (Calculator)", "N'app Google Home", "Na rimoot TV", "N'app igwefoto"], answer: 1, why: "App ngwaọrụ ahụ nwere Routines." }
        ]
      }
    },
    {
      name: "Isi 2: Nchekwa, ntụsara ahụ na nzuzo",
      lessons: [
        {
          objectives: ["O4","O1"],
          title: "Ngwaọrụ smart maka nchekwa",
          minutes: 5,
          goal: "Họrọ ihe ụlọ smart na-eme ka ibi naanị gị dịkwuo nchekwa.",
          text: [
            "Ngwaọrụ smart nwere ike inyere gị aka inwe mmetụta nchekwa n'ụlọ. Ọkụ na-enwu n'oge a kara aka ma ọ bụ site na motion sensor pụtara na ị gaghị abanye n'ime ụlọ gbara ọchịchịrị n'abalị, nke nwere ike inyere aka igbochi ịda ada. Mgbịrịgba ọnụ ụzọ nwere vidiyo na-ekwe ka ị hụ ma gwa ndị ọbịa okwu n'emegheghị ọnụ ụzọ.",
            "Smart speaker nwere ike ịkpọ onye ezinụlọ n'olu gị ma ọ bụrụ na ị nweghị ike iru ekwentị gị. Ụfọdụ speaker na ọrụ na-enye ihe enyemaka mberede, mana ha dị iche dabere na ngwaahịa na mba, ọ bụghịkwa ha niile nwere ike ịkpọ 911 (nọmba mberede na US). Lelee peeji enyemaka nke ngwaahịa ahụ n'onwe ya ka ị mara kpọmkwem ihe nke gị nwere ike na ihe ọ na-enweghị ike ime. Ngwaọrụ medical alert e mere maka mberede bụ nhọrọ ọzọ ị ga-eso ezinụlọ gị kparịta.",
            "Tupu ị zụta, dee ndepụta nsogbu ị chọrọ idozi, ma jụọ onye ezinụlọ ma ọ bụ onye na-enyere aka n'ụlọ ahịa ngwaọrụ dabara. Ọ dịghị mkpa ka i nwee ihe niile."
          ],
          steps: ["Dee nsogbu nchekwa ị chọrọ idozi.", "Jikọọ nke ọ bụla na ngwaọrụ: ọkụ, mgbịrịgba ọnụ ụzọ ma ọ bụ speaker.", "Lelee peeji enyemaka ngwaahịa ahụ maka ihe ọ nwere ike na ihe ọ na-enweghị ike ime.", "Jụọ ezinụlọ ma ọ bụ onye na-enyere aka n'ụlọ ahịa tupu ị zụta."],
          words: [["Motion sensor", "ngwaọrụ na-ahụ mmegharị ahụ ma nwee ike ịgbanye ọkụ."], ["Ngwaọrụ medical alert", "bọtịnụ a na-eyi n'ahụ e mere iji kpọọ enyemaka n'oge mberede."]],
          slides: [
            { title: "Nchekwa karịa n'ụlọ", bullets: ["Ọkụ n'oge a kara aka ma ọ bụ motion na-egbochi ịda ada", "Mgbịrịgba ọnụ ụzọ nwere vidiyo: buru ụzọ hụ ndị ọbịa", "Kpọọ ezinụlọ n'olu"] },
            { title: "Mara ngwaọrụ gị", bullets: ["Ihe enyemaka mberede dị iche iche", "Ọ bụghị ha niile nwere ike ịkpọ 911", "Lelee peeji enyemaka ngwaahịa ahụ"] },
            { title: "Zụta n'atụmatụ", bullets: ["Buru ụzọ dee nsogbu ndị ahụ", "Jikọọ ngwaọrụ na nke ọ bụla", "Ọ dịghị mkpa ka i nwee ihe niile"] }
          ],
          tryIt: "Dee otu ihe nchekwa na-echegbu gị n'ụlọ, dị ka okporo ụzọ ime ụlọ gbara ọchịchịrị n'abalị, na ngwaọrụ smart nwere ike inyere aka. Jụọ onye enyemaka AI ajụjụ ndị ị ga-ajụ tupu ị zụta ya.",
          youCanNow: "ịhọrọ ihe ụlọ smart dabara mkpa nchekwa gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu otu ọkụ nwere motion sensor si enyere gị aka ịnọ na nchekwa?", options: ["Ha na-akpọchi ọnụ ụzọ gị", "Ha na-akpọ 911", "Ha na-enwu ka ị ghara ịbanye n'ime ụlọ gbara ọchịchịrị", "Ha na-akpọ egwu"], answer: 2, why: "Ọkụ na-enwu n'onwe ha nwere ike inyere aka igbochi ịda ada n'abalị." },
            { objective: "O4", q: "Ị chọrọ speaker nwere ike ịkpọ enyemaka n'oge mberede. Gịnị ka ị ga-eme tupu ị tụkwasị ya obi?", options: ["Lelee peeji enyemaka ngwaahịa ahụ maka ihe ọ nwere ike na ihe ọ na-enweghị ike ime", "Chee na speaker ọ bụla nwere ike ịkpọ 911", "Rịọ speaker ahụ ka o kwe nkwa", "Gbanyụọ maịk ya"], answer: 0, why: "Ihe enyemaka mberede dị iche dabere na ngwaahịa na mba; lelee kpọmkwem ihe nke gị nwere ike ime." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ichebe ihe nzuzo gị n'ụlọ",
          minutes: 5,
          goal: "Jiri bọtịnụ mute na ntọala nzuzo na ngwaọrụ smart.",
          text: [
            "Smart speaker na-ege ntị maka okwu nkpọte ha. Mgbe ụfọdụ, ha nwere ike iche na okwu ọzọ bụ ya ma dekọọ ntakịrị. Igwefoto na-edekọ vidiyo. Ya mere ọ bụ amamihe ịmara otu esi achịkwa ha.",
            "Smart speaker ọ bụla nwere bọtịnụ mute maka maịk; mgbe e mechiri ya, ọkụ (nke na-acha ọbara ọbara ọtụtụ mgbe) na-egosi na ọ naghị ege ntị. Jiri ya n'oge mkparịta ụka nzuzo. Igwefoto na-enwekarị privacy mode (ọnọdụ nzuzo) ma ọ bụ ihe mkpuchi. N'app ngwaọrụ ahụ, chọọ ntọala Privacy, ebe ị na-enwekarị ike ilele ma hichapụ ihe olu e dekọrọ.",
            "Jiri okwuntughe siri ike maka Wi-Fi gị na maka akaụntụ ngwaọrụ ahụ, ma ekesala koodu e zitere gị n'ozi mgbe ọ bụla nye onye ọ bụla na-akpọ oku maka ngwaọrụ gị."
          ],
          steps: ["Chọta bọtịnụ mute maịk na speaker gị.", "Pịa ya n'oge mkparịta ụka nzuzo; lee ọkụ nwere agba.", "Meghee app ngwaọrụ ahụ ma chọta ntọala Privacy.", "Lelee ma hichapụ ihe olu e dekọrọ ma ọ bụrụ na ị chọrọ.", "Jiri okwuntughe siri ike ma ekesala koodu e zitere n'ozi."],
          words: [["Mute", "imechi maịk ka ọ ghara ịnụ ihe."], ["Ntọala nzuzo (privacy settings)", "nhọrọ dị n'app gbasara ihe a na-edekọ, na-echekwa ma na-ekesa."]],
          slides: [
            { title: "Speaker na igwefoto na-anụ ma na-ahụ", bullets: ["Speaker na-echere okwu nkpọte", "Mgbe ụfọdụ ha nwere ike ịnụhie", "Igwefoto na-edekọ vidiyo"] },
            { title: "Jide ike n'aka gị", bullets: ["Bọtịnụ mute: ọkụ na-egosi na ọ gbanyụrụ", "Privacy mode ma ọ bụ ihe mkpuchi igwefoto", "Lelee ma hichapụ ihe e dekọrọ n'app"] },
            { title: "Chebe akaụntụ gị", bullets: ["Okwuntughe siri ike maka Wi-Fi na akaụntụ", "Ekesala koodu e zitere n'ozi mgbe ọ bụla"] }
          ],
          tryIt: "Chọta bọtịnụ ma ọ bụ ntọala mute na smart speaker, ma ọ bụ ntọala maịk nke onye enyemaka ekwentị gị. Gbanyụọ ya ma gbanyeghachi ya, ma lee otu ị ga-esi mara na e mechiri ya.",
          youCanNow: "imechi maịk ngwaọrụ smart ma chọta ntọala nzuzo ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere smart speaker nwere ike iji dekọọ ntakịrị na mberede?", options: ["Ọ na-edekọ ihe niile mgbe niile", "O nwere ike iche na okwu ọzọ bụ okwu nkpọte ya", "Ọ mebiri emebi", "Ọ na-edekọ naanị egwu"], answer: 1, why: "Speaker na-ege ntị maka okwu nkpọte, mgbe ụfọdụ ha nwere ike iche na okwu ọzọ bụ ya." },
            { objective: "O5", q: "Ezinụlọ gị bịara leta gị, ị chọrọ ikwu maka okwu ego nzuzo. Gịnị ka ị ga-eme na speaker ahụ?", options: ["Mee ka egwu daa ụda karịa", "Rịọ ya ka ọ kwụsị ige ntị", "Wepụ router Wi-Fi na ọkụ", "Pịa bọtịnụ mute maịk ma lee ọkụ ahụ"], answer: 3, why: "Bọtịnụ mute na-akwụsị maịk; ọkụ, nke na-acha ọbara ọbara ọtụtụ mgbe, na-egosi na ọ naghị ege ntị." }
          ]
        },
        {
          objectives: ["O3","O2"],
          title: "Ime ka ụlọ smart gị rụọ ọrụ",
          minutes: 5,
          goal: "Hazie ma mee ọtụtụ ugboro usoro kwa ụbọchị zuru ezu.",
          text: [
            "Ugbu a, jikọta ihe niile ọnụ. Ezigbo usoro mbụ dị mfe, bara uru kwa ụbọchị, ma dị mfe ikwu.",
            "Ọmụmaatụ: \"Good morning\" na-agbanye oriọna ime ụlọ ihi ụra, na-agwa gị ọnọdụ ihu igwe na kalenda gị, ma na-echetara gị ka ị ṅụọ ọgwụ ụtụtụ gị. \"Good night\" na-agbanyụ oriọna ma na-atọ mkpu elekere gị.",
            "Kwuo usoro gị ugboro ole na ole ka ọ mara gị ahụ. Ọ bụrụ na ihe adịghị arụ ọrụ, lelee otu omume n'otu oge n'app ahụ, ma ọ bụ rịọ onye ezinụlọ ka ya na gị lee ya. Debe ndetu e dere iwu gị n'akụkụ speaker ahụ ruo mgbe ha ghọrọ omume gị."
          ],
          steps: ["Họrọ okwu ị ga-echeta.", "Họrọ omume abụọ ma ọ bụ atọ bara uru.", "Tọọ ya n'app, ruo ebe ngwaọrụ gị kwere.", "Were olu gị kwuo ya ọtụtụ ugboro.", "Debe ndetu iwu gị n'akụkụ speaker ahụ."],
          words: [["Omume (habit)", "ihe ị na-eme ugboro ugboro nke na ọ na-eme onwe ya."]],
          slides: [
            { title: "Ezigbo usoro mbụ", bullets: ["Dị mfe", "Bara uru kwa ụbọchị", "Dị mfe ikwu"] },
            { title: "Ọmụmaatụ", bullets: ["\"Good morning\": oriọna, ihu igwe, kalenda, ncheta ọgwụ", "\"Good night\": oriọna anyụọ, a tọọ mkpu elekere"] },
            { title: "Mee ka ọ dịgide", bullets: ["Kwuo ya ugboro ole na ole", "Dozie otu omume n'otu oge", "Debe ndetu n'akụkụ speaker ahụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee usoro \"Good morning\" gị, tọọ ya ruo ebe ngwaọrụ gị kwere, ma were olu gị kwuo ya ọtụtụ ugboro. Mgbe ahụ, chọta ma jiri bọtịnụ ma ọ bụ ntọala mute maịk.",
          youCanNow: "iji iwu olu na usoro dị mfe mee ka ụlọ gị dị mfe ma dịkwa nchekwa, ma na-echebe ihe nzuzo gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-eme ka usoro mbụ dị mma?", options: ["Ọ dị mfe, bara uru kwa ụbọchị ma dị mfe ikwu", "Omume dị ọtụtụ dị ka o kwere omume", "Okwu ogologo", "Naanị egwu"], answer: 0, why: "Malite n'ihe dị mfe: okwu ị ga-echeta nwere omume abụọ ma ọ bụ atọ bara uru." },
            { objective: "O3", q: "Usoro \"Good night\" ọhụrụ gị gbanyụrụ oriọna mana ọ tọghị mkpu elekere. Gịnị ka ị ga-eme?", options: ["Hichapụ usoro ahụ niile", "Ejila usoro ọzọ", "Kwuo ya n'olu dị elu karịa", "Lelee otu omume ahụ n'app, ma ọ bụ gị na onye ezinụlọ lee ya"], answer: 3, why: "Ọ bụrụ na ihe adịghị arụ ọrụ, lelee otu omume n'otu oge n'app ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nchekwa, ntụsara ahụ na nzuzo",
        questions: [
          { objective: "O4", q: "Kedu otu ọkụ smart si enyere aka igbochi ịda ada?", options: ["Ha na-akpọchi ọnụ ụzọ", "Ha dị arọ karịa", "Ha na-akpọ dọkịta", "Ha na-enwu ka ị ghara ịbanye n'ime ụlọ gbara ọchịchịrị"], answer: 3, why: "Ụlọ nwere ìhè n'abalị na-enyere aka igbochi ịda ada." },
          { objective: "O4", q: "Smart speaker ọ bụla nwere ike ịkpọ 911?", options: ["Mba; lelee ihe ngwaahịa gị nwere ike na ihe ọ na-enweghị ike ime", "Ee, ha niile", "Naanị ndị na-acha ọbara ọbara", "Naanị na ngwụsị izu"], answer: 0, why: "Ihe enyemaka mberede dị iche dabere na ngwaahịa na mba." },
          { objective: "O5", q: "Ọkụ speaker ahụ na-acha ọbara ọbara mgbe ị pịrị bọtịnụ mute. Nke a pụtara:", options: ["Ọ na-akpọ 911", "Ọ mebiri emebi", "E mechiri maịk", "Ọ na-edekọkwu ihe"], answer: 2, why: "Ọkụ nwere agba na-egosi na e mechiri ya." },
          { objective: "O5", q: "Ebee ka ị na-enwekarị ike ilele ma hichapụ ihe olu e dekọrọ?", options: ["Mgbasa ozi na-apụta na mberede", "Igwe microwave", "Ndepụta mmemme TV", "Ntọala Privacy n'app ngwaọrụ ahụ"], answer: 3, why: "Ntọala nzuzo nke app ahụ na-achịkwa ihe e dekọrọ." },
          { objective: "O5", q: "Onye na-akpọ oku kwuru na o si n'ụlọ ọrụ speaker ahụ ma rịọ koodu e zitere gị n'ozi. Ị ga:", options: ["Zigara ya ya n'ozi", "Gụọrọ ya ya", "Ghara ikesa ya mgbe ọ bụla ma kwụsị oku ahụ", "Tinye ya n'ịntanetị"], answer: 2, why: "Koodu e zitere n'ozi na-echebe akaụntụ gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI na Ụlọ Smart",
    questions: [
      { objective: "O1", q: "Ngwaọrụ smart bụ:", options: ["Oriọna ochie ọ bụla", "Ngwaọrụ ị nwere ike ijikwa n'olu ma ọ bụ n'ekwentị site n'ịntanetị", "Kalenda akwụkwọ", "Ekwentị ụlọ nwere waya"], answer: 1, why: "Ngwaọrụ smart na-ejikọ na ịntanetị." },
      { objective: "O1", q: "Kedu onye enyemaka olu Amazon Echo na-eji?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "Speaker Echo na-eji Alexa." },
      { objective: "O1", q: "Smart plug na-ekwe ka ị:", options: ["Gbanye ma gbanyụọ oriọna n'olu ma ọ bụ n'oge a kara aka", "Chajụ ụgbọala", "Kpọọ oku ekwentị", "Kpọchie ọnụ ụzọ"], answer: 0, why: "Ọ na-achịkwa ihe a tụnyere n'ime ya." },
      { objective: "O2", q: "Kedu okwu na-akpọte speaker Google Nest?", options: ["\"Hello phone\"", "\"Hey Google\"", "\"Computer\"", "\"Start\""], answer: 1, why: "\"Hey Google\" bụ okwu nkpọte ya." },
      { objective: "O2", q: "Kedu nke bụ iwu doro anya?", options: ["\"Timer stuff.\"", "\"Um, maybe, the thing?\"", "\"Set a timer for 15 minutes.\"", "\"You know.\""], answer: 2, why: "Iwu doro anya na-ekwu kpọmkwem ihe ị chọrọ." },
      { objective: "O2", q: "Ọkụ dị na speaker na-egosikarị na:", options: ["Ọ gbanyụrụ ruo mgbe ebighị ebi", "Ọ mebiri emebi", "Ọ chọrọ ka e tee ya agba", "Ọ na-ege ntị"], answer: 3, why: "Ọkụ ahụ na-egosi na ọ nụrụ okwu nkpọte." },
      { objective: "O3", q: "Usoro (routine) bụ:", options: ["Okwuntughe", "Ụdị plọg", "Otu okwu na-eme ka ngwaọrụ mee ọtụtụ ihe", "Mmemme TV"], answer: 2, why: "Usoro na-ejikọta omume ọnụ." },
      { objective: "O3", q: "A na-atọ usoro maka Amazon Echo na:", options: ["App Alexa", "Igwe mgbakọ (Calculator)", "Igwefoto", "TV"], answer: 0, why: "App Alexa na-achịkwa usoro Echo." },
      { objective: "O3", q: "Ezigbo ụzọ isi hazie usoro tupu ị tọọ ya:", options: ["Ahapụ ịhazi ya", "Ịkọ nkọ", "Ibu ụzọ zụta ọtụtụ ngwaọrụ", "Dee ya n'akwụkwọ ma ọ bụ rịọ AI ka o lelee atụmatụ gị"], answer: 3, why: "Ịhazi ya na mbụ na-eme ka ịtọ ya dị mfe." },
      { objective: "O3", q: "Ọ bụrụ na menu dị n'app siri ike ịchọta, ị nwere ike:", options: ["Ịhapụ ya", "Ilele peeji enyemaka app ahụ ma ọ bụ jụọ ezinụlọ", "Inye onye ọbịa okwuntughe gị", "Ihichapụ Wi-Fi gị"], answer: 1, why: "Menu na-agbanwe; peeji enyemaka na ezinụlọ nwere ike iduzi gị." },
      { objective: "O4", q: "Mgbịrịgba ọnụ ụzọ nwere vidiyo na-enyere gị aka:", options: ["Isi nri abalị", "Ịhụ ndị ọbịa tupu i meghee ọnụ ụzọ", "Ịsa akwa", "Ịkwụ ụgwọ"], answer: 1, why: "Ọ na-egosi onye nọ n'ọnụ ụzọ." },
      { objective: "O4", q: "Ọkụ nwere motion sensor:", options: ["Na-akpọchi ọnụ ụzọ", "Na-akpọ egwu", "Na-akpọ ezinụlọ", "Na-enwu mgbe ọ hụrụ mmegharị ahụ"], answer: 3, why: "Ọ na-aza mmegharị ahụ." },
      { objective: "O4", q: "Tupu ị zụta ngwaọrụ smart, ị kwesịrị:", options: ["Ide nsogbu ị chọrọ idozi", "Ịzụta ihe niile", "Ikesa okwuntughe gị", "Ileghara nyocha na peeji enyemaka anya"], answer: 0, why: "Ndepụta na-enyere gị aka ịzụta naanị ihe ị chọrọ." },
      { objective: "O4", q: "Ngwaọrụ medical alert bụ:", options: ["Speaker egwu", "Smart bulb", "Bọtịnụ a na-eyi n'ahụ e mere iji kpọọ enyemaka", "Rimoot TV"], answer: 2, why: "E mere ya maka mberede." },
      { objective: "O5", q: "N'oge mkparịta ụka nzuzo, ị nwere ike:", options: ["Imeghe igwefoto", "Ime ka ụda daa ike karịa", "Ikwu okwu nkpọte", "Ịpị bọtịnụ mute nke speaker"], answer: 3, why: "Imechi maịk na-akwụsị ya ịnụ ihe." },
      { objective: "O5", q: "Ntọala nzuzo na-ekwe ka ị:", options: ["Ịtụ nri", "Ịgbanwe ihu igwe", "Ilele ma hichapụ ihe e dekọrọ", "Ime ka Wi-Fi gaa ngwa ngwa"], answer: 2, why: "Ha na-achịkwa ihe a na-echekwa." },
      { objective: "O5", q: "Enwere ike ichebe nzuzo igwefoto site na:", options: ["Ịchakwasị ya ìhè", "Privacy mode ma ọ bụ ihe mkpuchi", "Ibuga ya nso", "Ime ka ụda daa ike karịa"], answer: 1, why: "Privacy mode ma ọ bụ ihe mkpuchi na-akwụsị ndekọ." },
      { objective: "O5", q: "A ga-eji okwuntughe siri ike maka:", options: ["Wi-Fi gị na akaụntụ ngwaọrụ", "Ọ dịghị ihe ọ bụla", "Naanị email", "Naanị TV gị"], answer: 0, why: "Ha na-egbochi ndị ọzọ ịbanye na ngwaọrụ gị." },
      { objective: "O3", q: "Ezigbo usoro mbụ bụ:", options: ["Nke dị mfe, bara uru kwa ụbọchị ma dị mfe ikwu", "Nke dị ogologo ma gbagwojuru anya", "Nke a na-eji otu ugboro n'afọ", "Nke siri ike icheta"], answer: 0, why: "Usoro dị mfe na-aghọ omume." },
      { objective: "O3", q: "Idebe ndetu iwu gị n'akụkụ speaker na-enyere gị aka:", options: ["Izo ha", "Icheta ha ruo mgbe ha ghọrọ omume", "Ikesa okwuntughe", "Imechi speaker ahụ"], answer: 1, why: "Ndetu bụ ncheta dị nso n'aka." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 10, 12, 14, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ahazila usoro", objective: "O3", notYet: "Enweghị atụmatụ e dere ede, ma ọ bụ enweghị okwu na-amalite ya.", meets: "Usoro e dere ede nwere okwu na-amalite ya na omume abụọ ma ọ bụ atọ bara uru, dị ka ihu igwe, ncheta ọgwụ na oriọna.", exceeds: "Atụmatụ ahụ nwekwara usoro \"Good night\"." },
      { name: "Atọọla usoro", objective: "O3", notYet: "A tọghị ihe ọ bụla na ngwaọrụ ma ọ bụ ekwentị.", meets: "A tọọla usoro ahụ ruo ebe ngwaọrụ ndị ahụ kwere.", exceeds: "Nwere ike ikwu omume ndị ngwaọrụ ahụ enweghị ike ime na ihe a ga-eji kama." },
      { name: "Iwu olu doro anya", objective: "O2", notYet: "Ngwaọrụ ahụ azaghị iwu ndị ahụ.", meets: "Were olu kwuo usoro ahụ ọtụtụ ugboro, malite n'okwu nkpọte, ọ rụkwara ọrụ.", exceeds: "Dere iwu ndị ahụ na ndetu n'akụkụ speaker ahụ." },
      { name: "E mechiri maịk", objective: "O5", notYet: "Achọtaghị bọtịnụ ma ọ bụ ntọala mute.", meets: "Chọtara ma jiri bọtịnụ ma ọ bụ ntọala mute ma hụ ka ọkụ ahụ gbanwere.", exceeds: "Chọtakwara ebe a na-elele ihe olu e dekọrọ n'app ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe na-eji usoro kwa ụbọchị ma ọ bụ ncheta olu n'oge nsochi ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha na-enwekwu mmetụta nchekwa n'ụlọ, dị ka iji ọkụ n'abalị ma ọ bụ mgbịrịgba ọnụ ụzọ nwere vidiyo",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smart speaker (Amazon Echo ma ọ bụ Google Nest) ma ọ bụ smartphone nwere onye enyemaka olu",
      "App Alexa ma ọ bụ app Google Home n'ekwentị, na Wi-Fi ụlọ",
      "Akwụkwọ na mkpịsị ode maka ịhazi usoro ahụ na ide iwu",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, nwayọọ nwayọọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Bute otu speaker ngosi ka ndị na-amụ ihe na-enweghị ngwaọrụ nwee ike ime omume iwu.",
      "Menu app na-agbanwe; lelee menu Routines na Privacy nke ugbu a tupu nnọkọ ahụ.",
      "Ekwela nkwa na speaker ọ bụla nwere ike ịkpọ 911; gwa ndị na-amụ ihe ka ha lelee ngwaahịa nke ha.",
      "Chetara ndị na-amụ ihe ka ha ghara ikesa koodu e zitere n'ozi mgbe ọ bụla nye onye ọ bụla na-akpọ oku maka ngwaọrụ ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
