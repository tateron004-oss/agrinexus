"use strict";

// Koach Learn course (Igbo translation of youth/youth-simple-chatbots.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-simple-chatbots-ig",
  lang: "ig",
  translationOf: "youth-simple-chatbots",
  category: "Youth",
  name: "Iwu Chatbot AI Dị Mfe",
  skills: "Ime atụmatụ ihe chatbot ga-eme, Iwu chatbot okwu isi na Python, Ide ntuziaka bot maka ngwa enyemaka AI, Iji ezi ajụjụ nwalee ya, Ime ka bot dị nchebe ma kwuo eziokwu",
  outcome: "iwu chatbot ajụjụ na azịza dị mfe maka otu (club) n'ụlọ akwụkwọ: bot okwu isi na Python nke na-aza opekata mpe ajụjụ ise a na-ajụkarị, na ntuziaka na-eme ka ngwa enyemaka AI n'efu bụrụ onye enyemaka otu ahụ, ma nwalee ha abụọ n'ezi ajụjụ ma mee ka ha dị nchebe ma kwuo eziokwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nọ n'afọ iri na ụma chọrọ ịmata otu chatbot si arụ ọrụ site n'iwu otu. Ọ dịghị mkpa na i ji koodu mee ihe na mbụ; ị ga-edetuo obere usoro koodu ma gbanwee ha.",
    "Ị ga-eme atụmatụ chatbot maka ezi ihe, dị ka otu robotics gị, otu egwu ma ọ bụ otu egwuregwu gị. Nke mbụ, ị ga-ewu bot okwu isi dị mfe na Python na Google Colab, akwụkwọ ndetu (notebook) n'efu na-arụ ọrụ na web browser. Emesịa, ị ga-ede ntuziaka na-eme ka ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini na-arụ ọrụ dị ka onye enyemaka otu ahụ, ma tụnyere ha abụọ. N'ikpeazụ, ị ga-anwale ha abụọ ma mee ka ha dị nchebe ma kwuo eziokwu.",
    "Google Colab na ngwa enyemaka AI chọrọ akaụntụ, ha nwekwara afọ ole mmadụ ga-eruriri. Gụọ iwu (terms) nke ngwa ọ bụla, gbasoo iwu AI nke ụlọ akwụkwọ gị, ma tinye nne na nna gị ma ọ bụ onye nlekọta gị mgbe ị na-emepe akaụntụ. Nkuzi ọ bụla na-ejedebe n'ọrụ \"Nwalee ya ugbu a\", nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Wuo chatbot maka otu ma ọ bụ ndị otu egwuregwu n'ụlọ akwụkwọ. Akụkụ 1: bot okwu isi na Python na Google Colab nke na-ekele onye ọrụ, na-aza opekata mpe ajụjụ ise a na-ajụkarị (dị ka oge nzukọ, ebe nzukọ na otu esi abanye n'otu ahụ), na-ekwu \"Amaghị m, biko jụọ onye ndụmọdụ otu ahụ\" maka ihe ọ bụla ọzọ, ma na-akwụsị mgbe onye ọrụ dere bye. Akụkụ 2: kaadị ntuziaka na-eme ka ngwa enyemaka AI n'efu bụrụ onye enyemaka otu ahụ. Jiri ezi ajụjụ 10 nwalee ha abụọ, dee ihe nke ọ bụla mere nke ọma na ihe o mehiere, ma mee otu mmezi n'ime nke ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nọ n'afọ iri na ụma chọrọ ịghọta otu chatbot si arụ ọrụ site n'iwu otu maka ezi otu dị ka otu n'ụlọ akwụkwọ, otu egwu ma ọ bụ otu egwuregwu, ma ha ji koodu mee ihe na mbụ ma ọ bụ na ha ejibeghị.",
    startingPoint: "Ha ejirila chatbot na weebụsaịtị, n'egwuregwu ma ọ bụ ngwa enyemaka AI. Ọtụtụ n'ime ha edebeghị koodu mgbe ọ bụla, emebeghị atụmatụ ọrụ bot, ma ọ bụ nwalee bot ma dozie ihe adabaghị.",
    gap: "Chatbot dị ebe niile, mana ọtụtụ ndị nọ n'afọ iri na ụma na-eji naanị ha. Iwu bot okwu isi dị mfe na onye enyemaka AI na-egosi otu ha abụọ si arụ ọrụ, ebe nke ọ bụla na-ada, na ihe mere bot ga-eji kwuo eziokwu ma chebe ozi nzuzo. Ndị a bụ ezi nka maka ide koodu, ọrụ teknụzụ na ijere otu nke ha ozi.",
    constraints: [
      "Afọ: Google Colab na ngwa enyemaka AI chọrọ akaụntụ, ha nwekwara afọ ole mmadụ ga-eruriri; nne na nna ma ọ bụ onye nlekọta na-esonye mgbe a na-emepe akaụntụ",
      "Iwu AI na teknụzụ nke ụlọ akwụkwọ; onye ndụmọdụ otu ahụ na-akwado ikesa bot ahụ",
      "Ndị mbido: obere usoro koodu a ga-edetuo ma gbanwee; ihe dị ka nkeji ise kwa nkuzi",
      "Ngwaọrụ: kọmputa nwere web browser; ọ dịghị ihe a ga-awụnye",
      "Nzuzo: bot anaghị arịọ ma ọ bụ chekwaa okwuntughe, nọmba ekwentị, adreesị ma ọ bụ nọmba ID mgbe ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Mmalite Ide Koodu na AI\" na-enyere aka mana ọ dịghị mkpa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọmụmaatụ chatbot", action: "ịkọwa otu chatbot okwu isi na chatbot AI si arụ ọrụ, ya na otu ike na otu oke nke ọ bụla", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Maka ezi otu, ndị otu egwuregwu ma ọ bụ otu", action: "ide atụmatụ bot nwere onye ọ na-enyere aka, azịza ise ma ọ bụ karịa e lelere, azịza nnọchi na ihe ọ ga-ezere mgbe niile", standard: "ma were onye ndụmọdụ otu ahụ lelee azịza ọ bụla" },
    { id: "O3", condition: "Site n'iji Google Colab", action: "iwu chatbot okwu isi na Python nwere loop, azịza okwu isi, azịza nnọchi na ekele ịla", standard: "nke mere na ọ na-arụ ọrụ ma na-aza opekata mpe ajụjụ ise" },
    { id: "O4", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ide kaadị ntuziaka nwere ọrụ ya, eziokwu e lelere, ụda okwu na oke, nke na-eme ka ngwa enyemaka ahụ bụrụ onye enyemaka otu", standard: "nke mere na ọ na-ezigara onye ndụmọdụ ajụjụ ọ maghị ma ọ naghị arịọ ozi nzuzo ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị ajụjụ nnwale 10 dị ka nke ezi ndụ", action: "ịnwale bot abụọ ahụ, kaa azịza ọ bụla akara dị ka ziri ezi, ezighi ezi ma ọ bụ e chepụtara echepụta, ma dozie ihe adabaghị", standard: "ma mee opekata mpe otu mmezi na bot ọ bụla ma nwalee ọzọ" },
    { id: "O6", condition: "Tupu i kesaa bot gị", action: "itinye ekele na-ekwu na ọ bụ bot, oke nzuzo na nchekwa, ma nweta nkwado onye ndụmọdụ gị", standard: "ma zigara onye okenye a tụkwasịrị obi ajụjụ dị oke mkpa ma ọ bụ nke a na-amaghị" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu chatbot si arụ ọrụ, na bot mbụ gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe chatbot bụ, na ụzọ abụọ isi wuo ya",
          minutes: 4,
          goal: "Kọwaa ihe dị iche n'etiti chatbot okwu isi na chatbot AI.",
          text: [
            "Chatbot bụ mmemme kọmputa ị na-agwa okwu site n'ide ihe ma ọ bụ ikwu okwu. Ị na-ahụ ha na weebụsaịtị (\"Kedu ka m ga-esi nyere gị aka?\"), n'egwuregwu na n'app.",
            "E nwere ụdị abụọ bụ isi. Chatbot okwu isi na-agbaso iwu mmadụ dere: ọ bụrụ na ozi ahụ nwere \"time\", zaa oge nzukọ. Ọ dị mfe, ị na-amakwa ihe ọ ga-eme, mana ọ maara naanị ihe ị kuziri ya. Chatbot AI na-eji large language model (nnukwu ụdị asụsụ), nke mụtara ihe site n'ọtụtụ ihe e dere ede. Ọ nwere ike ịza ihe fọrọ nke nta ka ọ bụrụ ihe niile n'okwu nkịtị, mana o nwekwara ike ime mperi ma ọ bụ chepụta ihe.",
            "N'ihe ọmụmụ a, ị ga-ewu ha abụọ maka ezi ọrụ, dị ka ịza ajụjụ ndị otu ọhụrụ na-ajụ n'otu gị, ka ị hụ ike na oke nke ọ bụla."
          ],
          words: [["Chatbot", "mmemme kọmputa ị na-agwa okwu site n'ide ihe ma ọ bụ ikwu okwu."], ["Okwu isi (keyword)", "okwu bot na-achọ iji kpebie otu ọ ga-esi zaa."], ["Large language model", "ụdị AI dị n'azụ ngwa enyemaka dị ka ChatGPT; ọ mụtara usoro site n'ọtụtụ ihe e dere ede."]],
          slides: [
            { title: "Chatbot bụ...", bullets: ["Mmemme kọmputa ị na-agwa okwu", "Na weebụsaịtị, egwuregwu na app"] },
            { title: "Chatbot okwu isi", bullets: ["Na-agbaso iwu mmadụ dere", "Dị mfe, ị na-amakwa ihe ọ ga-eme", "Maara naanị ihe ị kuziri ya"] },
            { title: "Chatbot AI", bullets: ["Na-eji large language model", "Na-aza n'okwu nkịtị", "Nwere ike ime mperi ma ọ bụ chepụta ihe"] }
          ],
          tryIt: "Họrọ otu, ndị otu egwuregwu ma ọ bụ otu ị so na ya. Dee ajụjụ ise ndị otu ọhụrụ na-ajụ mgbe niile, dị ka mgbe unu na-ezukọ, ebe unu na-ezukọ, na otu esi abanye.",
          youCanNow: "ịkọwa otu chatbot okwu isi na chatbot AI si dị iche, ma họrọ ezi ọrụ maka bot.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ otu oke nke chatbot okwu isi?", options: ["Ị naghị ama ihe ọ ga-eme", "Ọ maara naanị ihe ị kuziri ya", "Ọ na-echepụtakarị eziokwu", "Ọ chọrọ large language model"], answer: 1, why: "Bot okwu isi na-agbaso iwu mmadụ dere, ya mere ọ maara naanị ihe a kuziri ya." },
            { objective: "O1", q: "Ị chọrọ bot na-enye otu oge nzukọ ahụ e lelere mgbe niile. Kedu ụdị kacha dị nchebe?", options: ["Chatbot AI na-enweghị ntuziaka", "Ọ dịghị ụdị nwere ike ime nke a", "Bot weebụsaịtị ọ bụla", "Chatbot okwu isi nwere azịza e lelere"], answer: 3, why: "Bot okwu isi dị mfe, ị na-amakwa ihe ọ ga-eme; bot AI nwere ike ime mperi ma ọ bụ chepụta ihe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime atụmatụ ọrụ bot gị",
          minutes: 5,
          goal: "Dee atụmatụ dị mfe: onye bot ahụ na-enyere aka, ihe ọ na-aza na ihe ọ ga-ezere mgbe niile.",
          text: [
            "Bot ọma nwere obere ọrụ doro anya. Dee atụmatụ bot nwere akụkụ anọ: onye ọ na-enyere aka (dịka ọmụmaatụ, ndị otu ọhụrụ nke otu chess), ajụjụ ọ na-aza, azịza ya (nke gị na onye ndụmọdụ gị lelere), na ihe ọ ga-ekwu mgbe ọ maghị.",
            "Kpebiekwa ihe bot ahụ ga-ezere mgbe niile: ọ gaghị arịọ okwuntughe, nọmba ekwentị ma ọ bụ adreesị ụlọ mgbe ọ bụla, ọ gaghị eme ka ọ bụ ezi mmadụ, ọ gaghịkwa enye ndụmọdụ gbasara ahụike, ego ma ọ bụ iwu. Mgbe obi abụọ dị, ọ na-eziga ndị mmadụ n'ezi onye okenye, dị ka onye ndụmọdụ otu ahụ.",
            "Ngwa enyemaka AI nwere ike inyere gị aka iche echiche maka ajụjụ ndị ọzọ: \"Gịnị ka ndị otu ọhụrụ nke otu chess n'ụlọ akwụkwọ sekọndrị nwere ike ịjụ? Depụta 10.\" Wee lelee azịza ndị ahụ n'onwe gị."
          ],
          steps: ["Dee onye bot ahụ na-enyere aka.", "Depụta ajụjụ 5 ruo 10 ọ ga-aza.", "Dee azịza mkpụmkpụ e lelere maka nke ọ bụla.", "Dee azịza \"Amaghị m\" nke na-eziga ndị mmadụ n'ezi onye okenye.", "Depụta ihe bot ahụ ga-ezere mgbe niile."],
          words: [["Atụmatụ bot", "nkọwa mkpụmkpụ nke ihe bot na-eme na ihe ọ naghị eme."], ["Azịza nnọchi (fallback)", "ihe bot na-ekwu mgbe ọ maghị azịza."]],
          slides: [
            { title: "Obere ọrụ doro anya", bullets: ["Onye ọ na-enyere aka", "Ajụjụ na azịza e lelere", "Ihe ọ na-ekwu mgbe ọ maghị"] },
            { title: "Mgbe ọ bụla", bullets: ["Arịọla okwuntughe, nọmba ekwentị ma ọ bụ adreesị", "Emela ka ọ bụ ezi mmadụ", "Enyela ndụmọdụ ahụike, ego ma ọ bụ iwu"] },
            { title: "Jiri AI chee echiche", bullets: ["Rịọ maka ajụjụ ndị ọzọ a ga-ajụ", "Lelee azịza ọ bụla n'onwe gị"] }
          ],
          tryIt: "Dee atụmatụ bot gị: onye ọ na-enyere aka, ajụjụ ise gị na azịza e lelere, azịza nnọchi gị, na ihe atọ ọ ga-ezere mgbe niile. Rịọ ngwa enyemaka AI maka ajụjụ ise ọzọ i nwere ike ichefu.",
          youCanNow: "ime atụmatụ ọrụ chatbot, azịza ya, azịza nnọchi ya na iwu nchekwa ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-eme ka ọrụ bot dị mma?", options: ["Obere ọrụ doro anya, dị ka ịza ajụjụ ndị otu ọhụrụ", "Ịza ajụjụ ọ bụla n'ụwa", "Inye ndụmọdụ ahụike", "Ime ka ọ bụ onye isi otu ahụ"], answer: 0, why: "Bot ọma nwere obere ọrụ doro anya." },
            { objective: "O2", q: "AI tụrụ aro azịza gbasara ụgwọ otu (dues) maka atụmatụ bot gị. Gịnị ka ị ga-eme?", options: ["Jiri ya otu o si dị", "Hapụ ụgwọ n'atụmatụ ahụ ruo mgbe ebighị ebi", "Were onye ndụmọdụ otu ahụ lelee ya tupu i tinye ya", "Chepụta nọmba ọzọ"], answer: 2, why: "A ga-ewere onye ndụmọdụ lelee azịza bot, ọ bụghị were ha site n'AI." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iwu chatbot okwu isi na Python",
          minutes: 6,
          goal: "Wuo ma mee ka chatbot okwu isi rụọ ọrụ na Google Colab.",
          text: [
            "Meghee Google Colab na colab.research.google.com, banye (sign in) na akaụntụ e kwere ka i jiri, ma malite notebook ọhụrụ. Bot ahụ na-eji loop na-anọgide na-arịọ ozi, na if statements na-achọ okwu isi.",
            "Lee usoro ahụ, ahịrị n'ahịrị: while True: na-amalite loop na-emegharị onwe ya. N'ime ya, msg = input(\"You: \").lower() na-agụ ozi ahụ na mkpụrụedemede nta. if \"bye\" in msg: print(\"Bot: See you!\") wee break na-akwụsị loop ahụ. elif \"time\" in msg: print(\"Bot: We meet Tuesdays at 3:30.\") na-aza otu ajụjụ. else: print(\"Bot: I don't know. Please ask the club advisor.\") bụ azịza nnọchi. Banye ahịrị ndị dị n'ime loop na n'ime if ọ bụla n'ime (indent).",
            "Tinye otu elif maka ajụjụ ọ bụla dị n'atụmatụ gị. Ọ bụrụ na i nweta error, gụọ ahịrị ikpeazụ na nọmba ahịrị ahụ, lelee ma colon, akara nkwuputa (quote) ma ọ bụ indent ọ na-efu, ọ bụrụkwa na ọ ka siri gị ike, tinye koodu na error ahụ na ngwa enyemaka AI ma rịọ ya ka ọ kọwaa ya."
          ],
          steps: ["Meghee notebook Colab ọhụrụ.", "Dee while True: ma banye ahịrị ndị na-esote n'ime (indent).", "Gụọ ozi ahụ: msg = input(\"You: \").lower()", "Tinye if \"bye\" in msg: nwere print ekele ịla na break.", "Tinye otu elif kwa ajụjụ, na else maka azịza nnọchi. Mee ka ọ rụọ ọrụ ma kparịta ụka na bot gị."],
          words: [["Loop", "koodu na-emegharị onwe ya; while True na-emegharị ruo mgbe break."], ["elif", "nkenke nke else if: lelee ọnọdụ ọzọ."], ["break", "na-akwụsị loop."], [".lower()", "na-agbanwe ederede ka ọ bụrụ mkpụrụedemede nta ka \"TIME\" na \"time\" dabaa."]],
          slides: [
            { title: "Usoro ahụ", bullets: ["while True: na-eme ka mkparịta ụka gaa n'ihu", "msg = input(\"You: \").lower()", "if \"bye\" in msg: kwuo ekele ịla, wee break"] },
            { title: "Azịza", bullets: ["elif \"time\" in msg: print oge ahụ", "Otu elif kwa ajụjụ", "else: azịza nnọchi"] },
            { title: "Ọ bụrụ na ọ jụrụ ịrụ ọrụ", bullets: ["Gụọ ahịrị ikpeazụ nke error ahụ", "Lelee colon, akara nkwuputa na indent", "Rịọ AI ka ọ kọwaa error ahụ"] }
          ],
          tryIt: "Wuo bot okwu isi gị na Colab nwere ekele ịla, opekata mpe azịza atọ site n'atụmatụ gị, na azịza nnọchi. Kparịta ụka na ya ma nwaa otu ajụjụ ọ na-ekwesịghị ịma.",
          youCanNow: "iwu ma mee ka chatbot okwu isi na Python rụọ ọrụ, nwere azịza, azịza nnọchi na ụzọ isi kwụsị ya.",
          quickCheck: [
            { objective: "O3", q: "Na bot Python ahụ, gịnị ka ahịrị else na-eme?", options: ["Na-akwụsị mmemme ahụ", "Na-enye azịza nnọchi mgbe okwu isi ọ bụla adabaghị", "Na-agụ ozi onye ọrụ", "Na-amalite loop"], answer: 1, why: "else na-ejide ihe ọ bụla nlele ndị ọzọ na-adabaghị." },
            { objective: "O3", q: "Bot gị na-aza \"time\" mana ọ naghị aza \"TIME\". Gịnị ka ị ga-etinye?", options: [".lower() mgbe ị na-agụ ozi ahụ", "break ọzọ", "while True: nke abụọ", "Ọ dịghị ihe; enweghị ike idozi ya"], answer: 0, why: ".lower() na-eme ka ozi ahụ bụrụ mkpụrụedemede nta ka ụdị ide abụọ ahụ dabaa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu chatbot si arụ ọrụ, na bot mbụ gị",
        questions: [
          { objective: "O1", q: "Kedu ka chatbot okwu isi si ekpebi ihe ọ ga-ekwu?", options: ["Ọ na-agụ uche gị", "Ọ na-agbaso iwu na-achọ okwu n'ozi gị", "Ọ na-achọ n'ịntanetị niile", "Ọ na-ajụ onye nkuzi"], answer: 1, why: "Bot okwu isi na-agbaso iwu mmadụ dere." },
          { objective: "O1", q: "Kedu nke bụ adịghị ike nke chatbot AI?", options: ["O nwere ike ime mperi ma ọ bụ chepụta ihe", "Ọ nwere ike ikwu naanị otu ahịrịokwu", "Ọ naghị aghọta okwu nkịtị", "Ọ chọghị ọkụ eletrik"], answer: 0, why: "Large language model nwere ike inye azịza ezighi ezi nke dị ka ezi ihe." },
          { objective: "O2", q: "Gịnị bụ azịza nnọchi (fallback)?", options: ["Ekele mbụ", "Okwuntughe", "Ihe bot na-ekwu mgbe ọ maghị", "Aha bot ahụ"], answer: 2, why: "Azịza nnọchi na-elekọta ajụjụ bot ahụ enweghị ike ịza." },
          { objective: "O2", q: "Kedu nke bot otu gị na-ekwesịghị ịrịọ MGBE Ọ BỤLA?", options: ["Ihe onye ọrụ chọrọ ịmata", "Ma ha chọrọ ịbanye n'otu ahụ", "Mmalite chess kacha amasị ha", "Adreesị ụlọ ha"], answer: 3, why: "Bot ekwesịghị ịnakọta ozi nzuzo mgbe ọ bụla." },
          { objective: "O3", q: "Na bot Python ahụ, gịnị ka break na-eme?", options: ["Na-akwụsị loop ka mkparịta ụka kwụsị", "Na-emebi kọmputa", "Na-agbakwunye azịza ọhụrụ", "Na-ehichapụ notebook"], answer: 0, why: "break na-akwụsị while loop." }
        ]
      }
    },
    {
      name: "Isi 2: Bot enyemaka AI, nnwale na nchekwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide ntuziaka maka bot enyemaka AI",
          minutes: 5,
          goal: "Dee kaadị ntuziaka na-eme ka ngwa enyemaka AI n'efu bụrụ onye enyemaka otu gị.",
          text: [
            "Ị nwere ike ime ka ngwa enyemaka AI nkịtị bụrụ onye enyemaka maka otu ọrụ site n'ịmalite mkparịta ụka na ntuziaka doro anya. Ụfọdụ ngwa na-ekwekwa ka ị chekwaa ntuziaka dị ka bot nke gị; menu na iwu afọ dị iche iche, ya mere lelee ngwa gị. Itinye (paste) ntuziaka na mmalite mkparịta ụka ọhụrụ na-arụ ọrụ n'ọtụtụ ngwa enyemaka.",
            "Kaadị ntuziaka ọma nwere: ọrụ bot ahụ (\"Ị bụ onye enyemaka otu chess nke Lincoln High\"), eziokwu o nwere ike iji (azịza gị e lelere), ụda okwu ya (nwere obi ọma, azịza mkpụmkpụ), na oke ya (\"Ọ bụrụ na ị maghị, kwuo: biko jụọ Ms. Rivera, onye ndụmọdụ otu ahụ. Arịọla ozi nzuzo mgbe ọ bụla.\").",
            "Gwa ya ka o jiri naanị eziokwu i nyere ya. Nke a na-ebelata ohere ọ ga-eji chepụta oge nzukọ ma ọ bụ iwu."
          ],
          steps: ["Dee ọrụ ya: onye bot ahụ bụ na onye ọ na-enyere aka.", "Tinye eziokwu na azịza gị e lelere.", "Setịpụ ụda okwu: nwere obi ọma, azịza mkpụmkpụ.", "Tinye oke: jiri naanị eziokwu ndị a; zigara onye ndụmọdụ ihe a na-amaghị; arịọla ozi nzuzo mgbe ọ bụla.", "Malite mkparịta ụka ọhụrụ, tinye kaadị ahụ, wee jụọ ajụjụ nnwale."],
          words: [["Kaadị ntuziaka", "iwu e dere ede ị na-enye ngwa enyemaka AI na mmalite mkparịta ụka."], ["Ọrụ (role)", "onye bot ahụ kwesịrị ime ka ọ bụ."], ["Ụda okwu (tone)", "otu bot ahụ si ekwu okwu: nwere obi ọma, nke ọkachamara, mkpụmkpụ."]],
          slides: [
            { title: "Mee ka ngwa enyemaka bụrụ onye enyemaka", bullets: ["Tinye ntuziaka na mmalite mkparịta ụka", "Ụfọdụ ngwa na-echekwa bot nke gị; lelee nke gị"] },
            { title: "Kaadị ntuziaka", bullets: ["Ọrụ", "Eziokwu e lelere", "Ụda okwu", "Oke"] },
            { title: "Jiri naanị eziokwu ndị a", bullets: ["Na-ebelata azịza e chepụtara echepụta", "Ihe a na-amaghị na-aga n'aka onye ndụmọdụ", "Anaghị arịọ ozi nzuzo mgbe ọ bụla"] }
          ],
          tryIt: "Dee kaadị ntuziaka maka bot enyemaka otu gị. Malite mkparịta ụka ọhụrụ na ngwa enyemaka AI n'efu, tinye ya, ma jụọ ajụjụ atọ site n'atụmatụ gị na otu ọ na-ekwesịghị ịma.",
          youCanNow: "ide ntuziaka doro anya na-eme ka ngwa enyemaka AI n'efu bụrụ bot enyemaka lekwasịrị anya n'otu ọrụ ma nwee oke.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ahịrị \"ọrụ\" (role) dị na kaadị ntuziaka na-eme?", options: ["Na-edepụta ajụjụ nnwale", "Na-ahọrọ ụdị mkpụrụedemede (font)", "Na-agwa AI onye ọ bụ na onye ọ na-enyere aka", "Na-echekwa okwuntughe"], answer: 2, why: "Ahịrị ọrụ, dị ka \"Ị bụ onye enyemaka otu chess\", na-ekpebi ọrụ bot ahụ." },
            { objective: "O4", q: "Onye enyemaka AI gị na-azakwa ajụjụ gbasara homework. Gịnị ka ị ga-etinye na kaadị ahụ?", options: ["Eziokwu ndị ọzọ gbasara homework", "Iwu ka o jiri naanị eziokwu otu ahụ ma zigara onye ndụmọdụ ajụjụ ndị ọzọ", "Ekele ka ogologo", "Ọ dịghị ihe; azịza ka ukwuu ka mma"], answer: 1, why: "Oke na-eme ka onye enyemaka ahụ nọrọ n'ọrụ ya ma na-ebelata ohere ọ ga-eji chepụta ihe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịnwale na ime ka bot gị ka mma",
          minutes: 5,
          goal: "Jiri ezi ajụjụ nwalee bot abụọ ahụ ma dozie ihe adabaghị.",
          text: [
            "Ịnwale pụtara iji bot gị otu ezi ndị mmadụ ga-esi jiri ya. Dee ajụjụ nnwale 10: ajụjụ ise si n'atụmatụ gị, ole na ole a jụrụ n'okwu ọzọ (\"when do y'all meet?\"), otu nwere mperi ide (typo), na otu ọ na-ekwesịghị ịza.",
            "Jụọ bot abụọ ahụ ajụjụ ọ bụla ma kaa azịza ọ bụla akara dị ka ziri ezi, ezighi ezi ma ọ bụ e chepụtara echepụta. Bot okwu isi nwere ike ịghara ịghọta ajụjụ a jụrụ n'okwu ọzọ; dozie ya site n'itinye okwu isi ndị ọzọ. Onye enyemaka AI nwere ike ịdị ka o ziri ezi mana chepụta nkọwa; dozie ya site n'ime ka ntuziaka ya sie ike karị.",
            "Rịọ enyi gị ma ọ bụ onye otu ka ọ nwaakwa bot gị. Ndị mmadụ na-ajụ ihe ị na-atụghị anya ya mgbe niile."
          ],
          steps: ["Dee ajụjụ nnwale 10, gụnyere okwu dị iche na typo.", "Jụọ bot abụọ ahụ ajụjụ ọ bụla.", "Kaa azịza ọ bụla akara: ziri ezi, ezighi ezi ma ọ bụ e chepụtara echepụta.", "Bot okwu isi: tinye okwu isi. Onye enyemaka AI: mee ka ntuziaka sie ike karị.", "Mee ka onye ọzọ nwalee ya."],
          words: [["Nnwale (testing)", "iji mmemme kọmputa n'ebumnuche iji chọta ihe na-adịghị arụ ọrụ."], ["Test case", "otu ajụjụ ma ọ bụ ihe ntinye ị na-eji anwale mmemme."]],
          slides: [
            { title: "Ajụjụ nnwale 10", bullets: ["Ajụjụ ndị dị n'atụmatụ gị", "Okwu dị iche na typo", "Otu ọ na-ekwesịghị ịza"] },
            { title: "Kaa azịza ọ bụla akara", bullets: ["Ziri ezi", "Ezighi ezi", "E chepụtara echepụta"] },
            { title: "Dozie ma nwalee ọzọ", bullets: ["Bot okwu isi: tinye okwu isi", "Onye enyemaka AI: mee ka ntuziaka sie ike karị", "Ka enyi gị nwaa ya"] }
          ],
          tryIt: "Jiri ajụjụ nnwale 10 gị nwalee bot abụọ ahụ, kaa azịza ọ bụla akara, ma mee otu mmezi na bot ọ bụla. Nwalee ọzọ ka ị hụ ma mmezi ndị ahụ rụrụ ọrụ.",
          youCanNow: "ịnwale chatbot n'ezi ajụjụ, chọta ihe adabaghị ma mee ka ha ka mma.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke dabara n'otu ajụjụ nnwale ọma?", options: ["Naanị ajụjụ e detuuru okwu n'okwu site n'atụmatụ gị", "Naanị otu ajụjụ", "Ajụjụ ị maara na ha ga-arụ ọrụ", "Otu ajụjụ ahụ a jụrụ n'okwu dị iche"], answer: 3, why: "Ezi ndị mmadụ na-ajụ n'okwu dị iche ma na-eme typo, ya mere nnwale kwesịrị ime otu ahụ." },
            { objective: "O5", q: "Onye enyemaka AI kwuru ụlọ nzukọ e chepụtara echepụta n'obi ike. Kedu akara ị ga-enye ya?", options: ["Ziri ezi, n'ihi na o ji n'aka", "E chepụtara echepụta, wee mee ka ntuziaka ya sie ike karị", "Hapụ ya", "Ziri ezi, ọ bụrụ na ọ dị nso"], answer: 1, why: "Kaa nkọwa e chepụtara echepụta akara dị ka e chepụtara echepụta ma dozie ntuziaka ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ime ka bot gị dị nchebe ma kwuo eziokwu",
          minutes: 5,
          goal: "Tinye iwu nchekwa na eziokwu, wee mechaa chatbot otu gị.",
          text: [
            "Bot kwesịrị ikwu na ọ bụ bot. Ndị mmadụ kwesịrị ịmata na ha anaghị agwa ezi mmadụ okwu. Malite n'ekele dị ka \"Ndewo, abụ m bot otu chess. Ana m aza ajụjụ ndị dị mfe. Maka ihe ọ bụla ọzọ, jụọ Ms. Rivera.\"",
            "Ọ kwesịrị ichebe ozi nzuzo: ọ gaghị arịọ ma ọ bụ chekwaa okwuntughe, nọmba ekwentị, adreesị ma ọ bụ nọmba ID ụlọ akwụkwọ mgbe ọ bụla. Ọ kwesịrị ịnọ n'ọrụ ya: ọ dịghị ndụmọdụ ahụike, ego, iwu ma ọ bụ nke onwe, ọ ga-ezigakwa ndị mmadụ n'aka onye okenye a tụkwasịrị obi maka ihe ọ bụla dị oke mkpa.",
            "Tupu i kesaa bot n'otu gị, nweta nkwado onye ndụmọdụ gị, gbasoo iwu ụlọ akwụkwọ gị gbasara AI na teknụzụ, ma melite azịza ndị ahụ mgbe oge nzukọ gbanwere."
          ],
          steps: ["Tinye ekele na-ekwu na ọ bụ bot na ihe ọ na-eme.", "Lelee na ọ naghị arịọ ozi nzuzo mgbe ọ bụla.", "Mee ka o zigara onye okenye a tụkwasịrị obi ajụjụ dị oke mkpa ma ọ bụ nke a na-amaghị.", "Nweta nkwado onye ndụmọdụ gị tupu i kesaa ya.", "Melite azịza ndị ahụ mgbe eziokwu gbanwere."],
          words: [["Transparency (imeghe anya)", "ịdị n'ihu ọha na ikwu eziokwu, dị ka ikwu na bot bụ bot."], ["Nzuzo (privacy)", "idebe ozi gbasara onwe gị n'ebe ọ dị nchebe."]],
          slides: [
            { title: "Kwuo na ọ bụ bot", bullets: ["Ekele doro anya", "Ihe ọ nwere ike ime na ihe ọ na-enweghị ike ime", "Onye a ga-ajụ maka ihe ndị ọzọ"] },
            { title: "Chebe ozi nzuzo", bullets: ["Ọ dịghị okwuntughe, nọmba ekwentị ma ọ bụ adreesị", "Ọ dịghị nọmba ID ụlọ akwụkwọ"] },
            { title: "Nọrọ n'ọrụ gị", bullets: ["Ọ dịghị ndụmọdụ ahụike, ego ma ọ bụ iwu", "Ajụjụ dị oke mkpa na-aga n'aka onye okenye a tụkwasịrị obi", "Nkwado onye ndụmọdụ tupu ikesa ya"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa bot okwu isi Python gị (azịza ise, azịza nnọchi, bye) na kaadị ntuziaka onye enyemaka AI gị. Tinye ekele na-ekwu na ọ bụ bot, jiri ajụjụ 10 nwalee ha abụọ, dee ihe nke ọ bụla mere nke ọma na ihe o mehiere, ma mee otu mmezi n'ime nke ọ bụla.",
          youCanNow: "iwu, ịnwale na ikesa chatbot dị mfe bara uru, dị nchebe, na-ekwukwa eziokwu na ọ bụ bot.",
          quickCheck: [
            { objective: "O6", q: "Kedu n'ime ndị a ka bot gị na-ekwesịghị ịrịọ mgbe ọ bụla?", options: ["Ajụjụ ha nwere", "Ma ha chọrọ oge nzukọ", "Ma ha chọrọ ikwu bye", "Nọmba ID ụlọ akwụkwọ ha"], answer: 3, why: "Bot ekwesịghị ịrịọ ma ọ bụ chekwaa okwuntughe, nọmba ekwentị, adreesị ma ọ bụ nọmba ID mgbe ọ bụla." },
            { objective: "O6", q: "Bot gị adịla njikere. Gịnị ka ị ga-eme tupu i kesaa ya n'otu ahụ?", options: ["Nweta nkwado onye ndụmọdụ ma gbasoo iwu ụlọ akwụkwọ", "Tinye ya n'ihu ọha ozugbo", "Wepụ ekele ahụ", "Kwe ka ọ rịọ nọmba ekwentị iji soro ha"], answer: 0, why: "Nweta nkwado onye ndụmọdụ gị ma gbasoo iwu ụlọ akwụkwọ tupu i kesaa ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Bot enyemaka AI, nnwale na nchekwa",
        questions: [
          { objective: "O4", q: "Gịnị kwesịrị ịdị na kaadị ntuziaka onye enyemaka AI?", options: ["Okwuntughe gị", "Ọrụ, eziokwu e lelere, ụda okwu na oke", "Akụkọ ọ bụla", "Ọ dịghị ihe; naanị malite ikparịta ụka"], answer: 1, why: "Akụkụ anọ ndị ahụ na-eme ka bot ahụ lekwasị anya ma nwee oke." },
          { objective: "O4", q: "Gịnị mere ị ga-eji gwa onye enyemaka AI ka o jiri naanị eziokwu i nyere ya?", options: ["Ka ọ dị nwayọọ", "Iji belata ohere ọ ga-eji chepụta nkọwa", "Ka ọ dị ogologo", "Iwu chọrọ ya"], answer: 1, why: "Oke na-ebelata azịza e chepụtara echepụta." },
          { objective: "O5", q: "Bot okwu isi gị aghọtaghị \"when do y'all meet?\" Kedu ka ị ga-esi dozie ya?", options: ["Hichapụ bot ahụ", "Wepụ azịza nnọchi", "Tinye okwu isi ndị ọzọ dị ka \"meet\"", "Ta onye ọrụ ụta"], answer: 2, why: "Okwu isi ndị ọzọ na-ejide okwu dị iche." },
          { objective: "O6", q: "Gịnị mere bot ga-eji kwuo na ọ bụ bot?", options: ["Ndị mmadụ kwesịrị ịmata na ha anaghị agwa mmadụ okwu", "Ọ na-ada ka ọ mara mma", "Ọ na-eme ka koodu dị mkpụmkpụ", "Ọ dịghị mkpa mgbe ọ bụla"], answer: 0, why: "Imeghe anya na-ewulite ntụkwasị obi." },
          { objective: "O6", q: "Tupu i kesaa bot gị n'otu ahụ, ị kwesịrị:", options: ["Itinye arịrịọ maka nọmba ekwentị", "Ịhapụ nnwale", "Izochi na ọ bụ bot", "Inweta nkwado onye ndụmọdụ gị ma gbasoo iwu ụlọ akwụkwọ"], answer: 3, why: "Nkwado onye okenye na iwu ụlọ akwụkwọ na-ebute ụzọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iwu Chatbot AI Dị Mfe",
    questions: [
      { objective: "O1", q: "Chatbot bụ:", options: ["Mmemme ị na-agwa okwu site n'ide ihe ma ọ bụ ikwu okwu", "Akpa ekwentị", "Ụdị aka robot", "Adreesị weebụsaịtị"], answer: 0, why: "Chatbot bụ mmemme ị na-akparịta ụka na ya." },
      { objective: "O1", q: "Otu ike nke chatbot okwu isi bụ na ọ:", options: ["Nwere ike ịza ihe ọ bụla", "Dị mfe, ị na-amakwa ihe ọ ga-eme", "Na-emepụta ihe ọhụrụ mgbe niile", "Jikọrọ na weebụsaịtị niile"], answer: 1, why: "Ọ na-ekwu naanị ihe i debere n'ime ya." },
      { objective: "O1", q: "Large language model bụ:", options: ["Nnukwu keyboard", "Isiokwu a na-amụ n'ụlọ akwụkwọ", "Ụdị AI dị n'azụ ngwa enyemaka dị ka ChatGPT", "Error Python"], answer: 2, why: "LLM mụtara usoro site n'ọtụtụ ihe e dere ede." },
      { objective: "O2", q: "Kedu ọrụ kacha mma maka chatbot mbụ?", options: ["Inye ndụmọdụ ahụike", "Ilekọta akaụntụ ụlọ akụ", "Ịza ihe niile gbasara ụwa", "Ịza ajụjụ ndị otu ọhụrụ n'otu gị"], answer: 3, why: "Obere ọrụ doro anya kacha mma." },
      { objective: "O2", q: "Onye kwesịrị ilele azịza dị n'atụmatụ bot gị?", options: ["Gị, ya na onye ndụmọdụ otu ahụ", "Ọ dịghị onye", "Onye ọbịa n'ịntanetị", "Bot ahụ n'onwe ya"], answer: 0, why: "Azịza ga-eziri ezi; were onye ndụmọdụ lelee ha." },
      { objective: "O2", q: "Gịnị ka bot gị kwesịrị ime mgbe ọ maghị?", options: ["Chepụta azịza", "Zigara ndị mmadụ ezi onye okenye dị ka onye ndụmọdụ", "Rịọ nọmba ekwentị ha", "Kwụsị ịrụ ọrụ"], answer: 1, why: "Azịza nnọchi ọma na-egosi ezi mmadụ." },
      { objective: "O3", q: "Gịnị ka while True: na-eme na Python?", options: ["Na-ebipụta True", "Na-akwụsị mmemme ahụ", "Na-amalite loop na-emegharị ruo mgbe break", "Na-eme variable"], answer: 2, why: "while True na-emegharị ruo mgbe break." },
      { objective: "O3", q: "Gịnị mere ị ga-eji .lower() n'ozi onye ọrụ?", options: ["Ka ọ dị mkpụmkpụ", "Iji hichapụ ya", "Iji tụgharịa ya n'asụsụ ọzọ", "Ka \"TIME\" na \"time\" dabaa otu okwu isi ahụ"], answer: 3, why: "Mkpụrụedemede nta na-eme ka ịdakọ dị mfe." },
      { objective: "O3", q: "Gịnị ka elif pụtara?", options: ["Else if: lelee ọnọdụ ọzọ", "Kwụsị loop", "Error", "Pụọ"], answer: 0, why: "elif na-elele ọnọdụ ọzọ mgbe if gachara." },
      { objective: "O3", q: "I nwetara error Python. Ezigbo nzọụkwụ mbụ bụ:", options: ["Hichapụ notebook ahụ", "Gụọ ahịrị ikpeazụ na nọmba ahịrị ahụ", "Malitegharịa kọmputa ụlọ akwụkwọ", "Kwụsị ime ya"], answer: 1, why: "Ozi error ahụ na-egosi ebe nsogbu ahụ dị." },
      { objective: "O4", q: "Ahịrị ọrụ dị na kaadị ntuziaka nwere ike ịsị:", options: ["\"Rịọ okwuntughe\"", "\"Mee ka ị bụ onye isi ụlọ akwụkwọ\"", "\"Ị bụ onye enyemaka otu chess nke Lincoln High\"", "\"Kwuo ihe ọ bụla\""], answer: 2, why: "Ọrụ ahụ na-agwa AI onye ọ ga-abụ na onye ọ na-enyere aka." },
      { objective: "O4", q: "N'ebee ka ị na-etinyekarị ntuziaka maka onye enyemaka AI na ngwa enyemaka n'efu?", options: ["Na setịnụ kọmputa", "N'ozi ederede", "N'igbe adreesị browser gị", "Na mmalite mkparịta ụka ọhụrụ"], answer: 3, why: "Itinye ntuziaka na mmalite mkparịta ụka na-arụ ọrụ n'ọtụtụ ngwa enyemaka." },
      { objective: "O4", q: "Kedu oke ị ga-etinye na kaadị ntuziaka?", options: ["\"Arịọla ozi nzuzo mgbe ọ bụla\"", "\"Chepụta azịza ma ọ bụrụ na ị maghị\"", "\"Nye ndụmọdụ iwu\"", "\"Mee ka ị bụ mmadụ\""], answer: 0, why: "Oke na-eme ka bot ahụ dị nchebe." },
      { objective: "O5", q: "Ịnwale bot pụtara:", options: ["Ihichapụ ya", "Iji ya n'ebumnuche iji chọta ihe na-adịghị arụ ọrụ", "Ikesa ya ozugbo", "Ime ka ọ dị ogologo"], answer: 1, why: "Nnwale na-achọta nsogbu tupu ndị ọrụ achọta ha." },
      { objective: "O5", q: "Gịnị mere ị ga-eji tinye ajụjụ nwere typo na nnwale gị?", options: ["Iji mebie kọmputa", "Typo megidere iwu", "Ezi ndị mmadụ na-eme typo", "Iji mee ka bot ahụ kparịa mmadụ"], answer: 2, why: "Nnwale kwesịrị ịdị ka otu ezi ndị mmadụ si ede ihe." },
      { objective: "O5", q: "Onye enyemaka AI chepụtara ebe nzukọ. Gịnị ka ị ga-edozi?", options: ["Loop Python ahụ", "Keyboard gị", "Ọ dịghị ihe", "Mee ka ntuziaka ya sie ike karị ka o jiri naanị eziokwu gị"], answer: 3, why: "Ntuziaka siri ike karị na-ebelata nkọwa e chepụtara echepụta." },
      { objective: "O5", q: "Gịnị mere enyi gị ga-eji nwalee bot gị?", options: ["Ndị mmadụ na-ajụ ihe ị na-atụghị anya ya", "Ndị enyi ga-akwado koodu niile", "Ọ na-eme ka bot ahụ dị ngwa", "Ọ baghị uru"], answer: 0, why: "Ndị nnwale ọhụrụ na-achọta nsogbu ọhụrụ." },
      { objective: "O6", q: "Ekele bot ọma na-ekwu:", options: ["\"Abụ m ezi mmadụ\"", "\"Ndewo, abụ m bot otu ahụ. Ana m aza ajụjụ ndị dị mfe. Maka ihe ọ bụla ọzọ, jụọ onye ndụmọdụ.\"", "\"Gwa m adreesị gị\"", "Ọ dịghị ihe"], answer: 1, why: "Ọ na-ekwu eziokwu ma na-akọwa ihe bot ahụ na-eme." },
      { objective: "O6", q: "Onye otu jụrụ bot gị gbasara nsogbu onwe dị oke mkpa. Bot ahụ kwesịrị:", options: ["Inye ndụmọdụ n'agbanyeghị", "Ileghara ha anya", "Iziga ha n'aka onye okenye a tụkwasịrị obi", "Ịrịọ nọmba ekwentị ha"], answer: 2, why: "Ajụjụ dị oke mkpa na-aga n'aka ezi ndị okenye a tụkwasịrị obi." },
      { objective: "O6", q: "Otu ahụ gbanwere ụbọchị nzukọ ya. Gịnị ka ị ga-eme?", options: ["Ọ dịghị ihe", "Hichapụ bot ahụ", "Gwa ndị otu na bot ahụ na-eziri ezi mgbe niile", "Melite azịza bot ahụ"], answer: 3, why: "A ga-emelite bot mgbe niile." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 9, 10, 12, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Bot okwu isi na-arụ ọrụ", objective: "O3", notYet: "Bot ahụ anaghị arụ ọrụ, ma ọ bụ o nwere azịza na-erughị ise.", meets: "Ọ na-arụ ọrụ na Colab, na-ekele onye ọrụ, na-aza opekata mpe ajụjụ ise, nwere azịza nnọchi ma na-akwụsị na bye.", exceeds: "Ọ na-aghọtakwa ajụjụ a jụrụ n'okwu dị iche site n'okwu isi ndị ọzọ." },
      { name: "Kaadị onye enyemaka AI", objective: "O4", notYet: "Kaadị ahụ enweghị ọrụ, eziokwu ma ọ bụ oke.", meets: "Ọrụ, eziokwu e lelere, ụda okwu na oke, ọ na-ezigakwa onye ndụmọdụ ajụjụ ọ maghị.", exceeds: "Onye enyemaka ahụ nọgidere n'ọrụ ya n'ajụjụ nnwale siri ike." },
      { name: "Azịza e lelere", objective: "O2", notYet: "E leleghị azịza, ma ọ bụ e wetara ha site n'AI.", meets: "E were onye ndụmọdụ otu ahụ lelee azịza ọ bụla dị na bot abụọ ahụ.", exceeds: "Ọ gụnyere atụmatụ maka imelite azịza mgbe eziokwu gbanwere." },
      { name: "Nnwale na mmezi", objective: "O5", notYet: "Nnwale na-erughị 10, ma ọ bụ enweghị mmezi.", meets: "Nnwale 10 na bot abụọ ahụ, nke ọ bụla nwere akara ziri ezi, ezighi ezi ma ọ bụ e chepụtara echepụta, na otu mmezi na bot ọ bụla.", exceeds: "Nwalere ọzọ mgbe mmezi gachara, onye ọzọ nwalekwara bot ndị ahụ." },
      { name: "Nchekwa na eziokwu", objective: "O6", notYet: "Bot ahụ anaghị ekwu na ọ bụ bot, ma ọ bụ ọ na-arịọ ozi nzuzo.", meets: "Ekele ahụ na-ekwu na ọ bụ bot, ọ naghị arịọ ozi nzuzo ọ bụla, ajụjụ dị oke mkpa na-agakwa n'aka onye okenye a tụkwasịrị obi.", exceeds: "Onye ndụmọdụ akwadola ya maka ikesa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu ma ọ bụ ndị otu egwuregwu na-eji bot onye na-amụ ihe ahụ, na nkwado onye ndụmọdụ, n'ime ụbọchị 60",
      "Ndị na-amụ ihe wuru mmemme ma ọ bụ bot ọzọ n'onwe ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara ide koodu ma ọ bụ AI n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser na ịntanetị",
      "Google Colab na ngwa enyemaka AI n'efu, nwere akaụntụ e kwere ka onye na-amụ ihe jiri",
      "Atụmatụ bot n'akwụkwọ ma ọ bụ n'ime akwụkwọ dijitalụ",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge nnwale"
    ],
    facilitatorNotes: [
      "Lelee iwu afọ nke Colab na ngwa AI tupu klas; nwee akaụntụ ngosi ka ndị na-erubeghị afọ wee soro.",
      "Dee bot okwu isi ahụ n'ihu ha, ahịrị n'ahịrị, ma wepụ otu colon n'ebumnuche ka ndị na-amụ ihe mụta ịgụ error.",
      "Mee ka ndị na-amụ ihe gbanwerịta bot ma nwalee nke ibe ha n'ajụjụ siri ike.",
      "Hụ na ọ dịghị bot na-arịọ ma ọ bụ na-echekwa ozi nzuzo, nakwa na nke ọ bụla na-ekwu na ọ bụ bot.",
      "Jiri rubric tụọ akara bot abụọ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
