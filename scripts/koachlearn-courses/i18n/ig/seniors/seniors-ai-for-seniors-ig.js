"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-for-seniors.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-for-seniors-ig",
  lang: "ig",
  translationOf: "seniors-ai-for-seniors",
  category: "Seniors and Technology",
  name: "AI maka Ndị Okenye: Iji Ngwa Enyemaka AI",
  skills: "Imeghe ngwa enyemaka AI n'efu, Ide ma ọ bụ ikwu ajụjụ, Ịrịọ azịza dị mfe karị, Ịlele ihe ọ na-ekwu, Ichebe ozi nzuzo gị",
  outcome: "imeghe ngwa enyemaka AI n'efu na ekwentị, tablet ma ọ bụ kọmputa gị, ịjụ ya ajụjụ doro anya site n'ide ma ọ bụ ikwu okwu, ịrịọ ya ka ọ kọwaa n'ụzọ dị mfe karị, na ịlele azịza ahụ tupu i mee ihe na ya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye nụrụ maka ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini ma chọọ ịnwale otu, nwayọọ nwayọọ na n'enweghị nsogbu. Ọ dịghị mkpa ka ị mara ihe ọ bụla na mbụ.",
    "Ị ga-emeghe ngwa enyemaka, jụọ ya ezi ajụjụ gbasara ihe ndị dị na ndụ gị, dị ka otu esi esi nri, akwụkwọ ozi si n'ọfịs dọkịta ma ọ bụ ozi ụbọchị ọmụmụ maka nwa nwa gị, ma mụta ime ka azịza ya doo anya karị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" n'oge nke gị. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ị nwere ike imeghachi nkuzi ọ bụla ugboro ole ị chọrọ."
  ],
  finalTask: "Jiri ngwa enyemaka AI hazie nri ezinụlọ dị mfe: rịọ ya otu esi esi nri dị mfe maka mmadụ anọ, rịọ ya ka o dee nzọụkwụ ndị ahụ n'ahịrị mkpụmkpụ nwere nọmba, jụọ otu ajụjụ nsochi, ma lelee otu eziokwu (dị ka okpomọkụ e ji esi nri) na weebụsaịtị a pụrụ ịtụkwasị obi ma ọ bụ n'aka onye ị tụkwasịrị obi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye, ọtụtụ n'ime ha lara ezumike nká, ndị chọrọ iji ngwa enyemaka AI ọhụrụ maka enyemaka kwa ụbọchị: kaadị na akwụkwọ ozi nye ezinụlọ, ihe ntụrụndụ, ịkọwa ihe na ime ndepụta. Ụfọdụ bi naanị ha; ọtụtụ nwere ụmụ ụmụ na-eji ngwa ndị a.",
    startingPoint: "Ha nwere ike ịkpọ oku ma zipu ozi ederede, ọtụtụ na-ejikwa email ma ọ bụ tablet. Ọtụtụ ejibeghị ngwa enyemaka AI, ụfọdụ enweghịkwa obi ike banyere app, mkpụrụ edemede nta ma ọ bụ ide ihe.",
    gap: "Ngwa enyemaka AI nwere ike ichekwa oge ma nyere ndị okenye aka ịnọgide na-ejikọ na ndị mmadụ ma kwụrụ onwe ha, mana ndị aghụghọ na-achụkwa ndị okenye, azịza ezighi ezi gbasara ahụike ma ọ bụ ego nwekwara ike iduhie ha. Ha kwesịrị imeghe ngwa enyemaka, jụọ ajụjụ doro anya, mee ka azịza dị mfe ịgụ, lelee eziokwu ma chebe ozi nzuzo ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: ekwentị, tablet ma ọ bụ kọmputa; obere ihuenyo na obere mkpụrụ edemede nwere ike isi ike ịgụ",
      "Oge: ihe dị ka nkeji 5 n'otu nkuzi, nwayọọ nwayọọ, na oge iji mee omume",
      "A ga-elelerịrị azịza gbasara ahụike, ọgwụ na ego n'aka dọkịta, onye na-ere ọgwụ (pharmacist) ma ọ bụ isi iyi gọọmentị",
      "Ihe egwu aghụghọ dị elu: enweghị nọmba Social Security, Medicare, ụlọ akụ ma ọ bụ okwuntughe n'ime prompt ọ bụla"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ihuenyo mmetụ (touchscreen) nwere ike ịrịọ onye ezinụlọ ma ọ bụ onye enyemaka n'ọba akwụkwọ ka ha nọdụ ha n'akụkụ na nke mbụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ kwa ụbọchị", action: "ịmata ọrụ ndị ngwa enyemaka AI nwere ike inyere aka na ndị chọrọ dọkịta, ụlọ akụ ma ọ bụ mmadụ ọzọ", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji ekwentị, tablet ma ọ bụ kọmputa gị", action: "imeghe ngwa enyemaka AI n'efu site n'ezi ụlọ ahịa app ya ma ọ bụ weebụsaịtị ya, ma chọta igbe ozi ma ọ bụ igwe okwu (microphone)", standard: "n'enweghị onye nyere gị aka" },
    { id: "O3", condition: "Mgbe e nyere gị ezi mkpa site na ndụ gị", action: "ide ma ọ bụ ikwu prompt nke na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị", standard: "nke mere na azịza mbụ ga-aba uru" },
    { id: "O4", condition: "Mgbe e nyere gị azịza dị ogologo nke ukwuu ma ọ bụ siri ike ịgụ", action: "ịrịọ arịrịọ nsochi, otu n'otu oge, iji mee ka ọ dị mfe ma ọ bụ dị mkpụmkpụ", standard: "ruo mgbe ọ dị gị mfe ịgụ ma jiri ya" },
    { id: "O5", condition: "Mgbe e nyere gị azịza AI gbasara ahụike, ego, nọmba ekwentị ma ọ bụ ụbọchị", action: "ịlele eziokwu ahụ na weebụsaịtị gọọmentị, n'aka dọkịta gị ma ọ bụ onye na-ere ọgwụ, ma ọ bụ n'aka onye ị tụkwasịrị obi", standard: "tupu i mee ihe na ya" },
    { id: "O6", condition: "Mgbe ị na-ede prompt ma ọ bụ nweta oku ma ọ bụ ozi na-eme ngwa ngwa", action: "idebe ozi nzuzo n'ebe ọ na-adịghị ma hụ ihe ịdọ aka na ntị nke aghụghọ", standard: "n'ekesaghị nọmba nzuzo, okwuntughe ma ọ bụ koodu ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmata ngwa enyemaka AI gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ngwa enyemaka AI bụ",
          minutes: 4,
          goal: "Kọwaa n'okwu nke gị ihe ngwa enyemaka AI nwere ike ime gị na ihe ọ na-enweghị ike ime.",
          text: [
            "Ngwa enyemaka AI bụ mmemme kọmputa ị nwere ike ịgwa okwu ma ọ bụ ide ihe na ya n'okwu nkịtị, dị ka a ga-asị na ị na-edere onye agbata obi na-enyere aka obere ozi. Ị jụọ ajụjụ, n'ime sekọnd ole na ole ọ dee azịza.",
            "Ngwa enyemaka a ma ama na-akwụghị ụgwọ gụnyere ChatGPT, Microsoft Copilot na Google Gemini. Ha maara ịkọwa ihe n'ụzọ dị mfe, ide ihe mbụ (draft) nke kaadị ma ọ bụ akwụkwọ ozi, inye echiche maka ihe ntụrụndụ, na ime ndepụta.",
            "Ngwa enyemaka abụghị mmadụ, ọ bụghịkwa dọkịta gị, ọka iwu gị ma ọ bụ ụlọ akụ gị. Ọ maghị gị, ọ nwekwara ike ime mperi ọbụlagodi mgbe ọ dị ka o ji n'aka nke ukwuu. Gị bụ onye isi: gị na-ekpebi ihe ị ga-ajụ na ihe ị ga-ekwere."
          ],
          words: [["AI", "mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa nwere ike ime ọrụ dị ka ide ihe ma ọ bụ ịza ajụjụ."], ["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu."]],
          slides: [
            { title: "Ngwa enyemaka AI bụ...", bullets: ["Mmemme kọmputa ị na-akparịta ụka na ya", "Ị na-ajụ n'okwu nkịtị", "Ọ na-ede azịza n'ime sekọnd ole na ole"] },
            { title: "O nwere ike inyere gị aka", bullets: ["Ịkọwa okwu ma ọ bụ akwụkwọ ozi siri ike n'ụzọ dị mfe", "Ide ihe mbụ nke kaadị ụbọchị ọmụmụ ma ọ bụ ozi ekele", "Inye echiche maka nri, ihe ntụrụndụ na njem"] },
            { title: "Ọ BỤGHỊ", bullets: ["Dọkịta gị, ọka iwu gị ma ọ bụ ụlọ akụ gị", "Onye na-eziri ezi mgbe niile, ọbụlagodi mgbe o ji n'aka", "Onye isi: gị bụ onye isi"] }
          ],
          tryIt: "N'akwụkwọ, dee ihe atọ ngwa enyemaka AI nwere ike inyere gị aka n'ọnwa a, dịka ọmụmaatụ kaadị maka nwa nwa gị, ajụjụ gbasara osisi dị n'ubi gị, ma ọ bụ otu esi esi nri.",
          youCanNow: "ịkọwa ihe ngwa enyemaka AI bụ, ịkpọ aha ụzọ atọ o nwere ike isi nyere gị aka, na ikwu ihe mere i ji ka na-elele ihe ọ na-ekwu.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ ngwa enyemaka AI maara ime nke ọma?", options: ["Ide ihe mbụ nke kaadị ụbọchị ọmụmụ", "Inye gị nsonaazụ ule ọbara gị", "Ibufe ego site n'ụlọ akụ gị", "Ịga ọhụhụ dọkịta n'ọnọdụ gị"], answer: 0, why: "Ngwa enyemaka maara ide ihe mbụ, inye echiche na ime ndepụta; ọ bụghị dọkịta gị ma ọ bụ ụlọ akụ gị." },
            { objective: "O1", q: "Ngwa enyemaka AI dị ka o ji n'aka nke ukwuu banyere iwu gbasara enyemaka gọọmentị gị. Gịnị ka ị ga-eme?", options: ["Kwere ya n'ihi na o ji n'aka", "Cheta na o nwere ike ime mperi, ma lelee ya n'ọfịs ahụ", "Gwa ndị enyi gị ozugbo", "Rịọ ya ka o kwe nkwa na ọ bụ eziokwu"], answer: 1, why: "Ngwa enyemaka nwere ike ime mperi ọbụlagodi mgbe o ji n'aka, gị na-ekpebikwa ihe ị ga-ekwere." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Imeghe ngwa enyemaka na ekwentị, tablet ma ọ bụ kọmputa gị",
          minutes: 6,
          goal: "Meghee ngwa enyemaka AI n'efu ma chọta igbe ebe ị na-ede ma ọ bụ na-ekwu okwu.",
          text: [
            "Ị nwere ike iji ngwa enyemaka na smartphone, tablet ma ọ bụ kọmputa. Họrọ ngwaọrụ dị gị mfe iji. Nwa nwa gị, enyi gị ma ọ bụ onye enyemaka n'ọba akwụkwọ nwere ike ịnọdụ gị n'akụkụ na nke mbụ.",
            "Na ekwentị ma ọ bụ tablet: meghee ụlọ ahịa app (Play Store na Android, App Store na iPhone na iPad). Pịa igbe nchọta, dee aha ngwa enyemaka ahụ, ma wụnye app nke ezi ụlọ ọrụ mere: OpenAI maka ChatGPT, Microsoft maka Copilot, Google maka Gemini.",
            "Na kọmputa: meghee web browser gị ma jiri nlezianya dee adreesị ya, dịka ọmụmaatụ chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com. Ụfọdụ na-ekwe ka ị malite n'enweghị akaụntụ; ụfọdụ na-arịọ ka ị banye (sign in).",
            "Chọọ igbe ozi, nke na-adịkarị n'akụkụ ala ihuenyo. Ọ na-ekwukarị \"Ask anything\" ma ọ bụ \"Message\" (n'asụsụ bekee). Ọtụtụ app na-egosikwa obere igwe okwu (microphone) ị nwere ike ịpị ka ị kwuo okwu kama ide ihe."
          ],
          steps: ["Họrọ ekwentị, tablet ma ọ bụ kọmputa gị.", "Ekwentị ma ọ bụ tablet: wụnye ezi app site n'ụlọ ahịa app. Kọmputa: dee adreesị weebụ na browser.", "Chọta igbe ozi dị n'akụkụ ala ihuenyo.", "Chọta bọtịnụ igwe okwu ma ọ bụrụ na ị chọrọ ikwu okwu."],
          words: [["Ụlọ ahịa app (App store)", "ebe gọọmentị ekwentị ma ọ bụ tablet ebe ị na-enweta app n'enweghị nsogbu."], ["Web browser", "mmemme ị na-eji eleta weebụsaịtị, dị ka Chrome, Edge ma ọ bụ Safari."], ["Bọtịnụ igwe okwu (microphone)", "obere foto igwe okwu ị na-apị ka ị kwuo okwu kama ide ihe."]],
          slides: [
            { title: "Jiri ihe dị gị mfe", bullets: ["Smartphone, tablet ma ọ bụ kọmputa", "Rịọ onye ezinụlọ ma ọ bụ onye ọba akwụkwọ ka ọ nọdụ gị n'akụkụ"] },
            { title: "Na ekwentị ma ọ bụ tablet", bullets: ["Meghee ezi ụlọ ahịa app", "Chọọ aha ngwa enyemaka ahụ", "Wụnye app nke ezi ụlọ ọrụ mere"] },
            { title: "Na kọmputa", bullets: ["Meghee web browser", "Dee chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com", "Jiri nlezianya dee adreesị ahụ"] },
            { title: "Chọta ebe ị ga-ekwu okwu", bullets: ["Igbe ozi dị n'akụkụ ala", "Ọ nwere ike ikwu \"Ask anything\"", "Bọtịnụ igwe okwu na-ekwe ka ị kwuo okwu"] }
          ],
          tryIt: "Meghee otu ngwa enyemaka n'efu. Chọta igbe ozi ma dee, ma ọ bụ kwuo: Ndewo, abụ m onye ọhụrụ n'ihe a. Biko zaa m n'ahịrịokwu dị mkpụmkpụ, dị mfe. Gụọ ihe ọ zara.",
          youCanNow: "imeghe ngwa enyemaka AI n'efu ma chọta ebe ị ga-ede ma ọ bụ kwuo ajụjụ gị.",
          quickCheck: [
            { objective: "O2", q: "Onye na-eme ezi app Microsoft Copilot?", options: ["Ụlọ ọrụ ọ bụla nwere aha yiri ya", "Google", "Microsoft", "OpenAI"], answer: 2, why: "Wụnye app nke ezi ụlọ ọrụ mere: Microsoft maka Copilot." },
            { objective: "O2", q: "Ide ihe na ekwentị gị siri gị ike. Gịnị ka ị ga-achọ n'app ngwa enyemaka ahụ?", options: ["Akara batrị", "Bọtịnụ igwefoto", "Akara ntọala (settings)", "Obere igwe okwu ị nwere ike ịpị ka ị kwuo okwu"], answer: 3, why: "Ọtụtụ app na-egosi igwe okwu ka ị nwee ike ikwu okwu kama ide ihe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịjụ ajụjụ doro anya",
          minutes: 5,
          goal: "Dee ma ọ bụ kwuo ajụjụ ga-enweta azịza bara uru na nke mbụ.",
          text: [
            "Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka ka a na-akpọ prompt. Ka prompt ahụ na-edo anya, ka azịza ahụ na-aka mma.",
            "Ezigbo prompt nwere akụkụ atọ: ihe ị chọrọ, ntakịrị banyere ọnọdụ gị, na otu ị chọrọ ka azịza dị. Dịka ọmụmaatụ: \"Nwa nwa m nwanyị ga-eruru afọ 8 na Satọdee, ọ hụkwara ịnyịnya n'anya. Dee obere ozi ụbọchị ọmụmụ site n'aka Nne Nne. Jiri okwu dị mfe.\"",
            "Prompt dị nkenke nke ukwuu, dị ka \"ụbọchị ọmụmụ\", na-eme ka ngwa enyemaka ahụ chepụta ihe ị pụtara, ị ga-enwetakwa azịza n'ozuzu. Ọ dị mma ide ahịrịokwu ole na ole. Were oge gị; ngwa enyemaka ahụ na-eche gị."
          ],
          steps: ["Kwuo ihe ị chọrọ.", "Tinye ntakịrị banyere ọnọdụ gị, na-enweghị ozi nzuzo.", "Kwuo otu ị chọrọ ka azịza dị: mkpụmkpụ, okwu dị mfe, nzọụkwụ buru ibu, ma ọ bụ ndepụta."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."]],
          slides: [
            { title: "Prompt bụ ajụjụ gị", bullets: ["Prompt doro anya = azịza ka mma", "Dị nkenke nke ukwuu = azịza n'ozuzu"] },
            { title: "Akụkụ atọ nke ezigbo prompt", bullets: ["1. Ihe ị chọrọ", "2. Ntakịrị banyere ọnọdụ gị", "3. Otu ị chọrọ ka azịza dị"] },
            { title: "Ọmụmaatụ", bullets: ["\"Nwa nwa m nwanyị ga-eruru afọ 8, ọ hụkwara ịnyịnya n'anya.", "Dee obere ozi ụbọchị ọmụmụ site n'aka Nne Nne.", "Jiri okwu dị mfe.\""] }
          ],
          tryIt: "Họrọ otu ihe site na ndepụta gị na Nkuzi 1. Dee prompt nwere akụkụ atọ ahụ niile, zipu ya, ma gụọ azịza ya nwayọọ nwayọọ.",
          youCanNow: "ịjụ ngwa enyemaka AI ajụjụ doro anya nwere ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ prompt?", options: ["Ncheta na kalenda gị", "Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka ahụ", "Azịza ngwa enyemaka ahụ na-enye", "Okwuntughe"], answer: 1, why: "Prompt bụ arịrịọ gị nye ngwa enyemaka ahụ, site n'ide ma ọ bụ ikwu okwu." },
            { objective: "O3", q: "Ị chọrọ ozi ekele maka onye agbata obi gị meziri ngere gị. Kedu prompt kacha mma?", options: ["\"ozi\"", "\"daalụ\"", "\"Dee ihe ọ bụla.\"", "\"Onye agbata obi m meziri ngere m. Dee obere ozi ekele nwere ọmịiko n'okwu dị mfe.\""], answer: 3, why: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmata ngwa enyemaka AI gị",
        questions: [
          { objective: "O1", q: "Gịnị bụ ngwa enyemaka AI?", options: ["Mmadụ n'ọfịs na-aza oku", "Ụdị televishọn", "Mmemme kọmputa ị na-akparịta ụka na ya n'okwu nkịtị", "Ọfịs gọọmentị"], answer: 2, why: "Ngwa enyemaka AI bụ mmemme ị na-ede ihe na ya ma ọ bụ gwa okwu, ọ na-edekwa azịza." },
          { objective: "O1", q: "Ngwa enyemaka ahụ dị ka o ji n'aka nke ukwuu banyere ajụjụ gbasara ọgwụ. Gịnị ka ị kwesịrị ime?", options: ["Lelee ya n'aka dọkịta gị ma ọ bụ onye na-ere ọgwụ", "Mee ihe o kwuru ozugbo", "Kwụsị ịṅụ ọgwụ niile", "Gwa onye agbata obi gị ka o mee ihe o kwuru"], answer: 0, why: "AI nwere ike ime mperi ọbụlagodi mgbe o ji n'aka; ajụjụ ahụike na-aga n'aka dọkịta gị ma ọ bụ onye na-ere ọgwụ." },
          { objective: "O2", q: "Ebee bụ ebe n'enweghị nsogbu iji nweta app AI na ekwentị ma ọ bụ tablet?", options: ["Njikọ (link) n'ozi onye ị na-amaghị zitere", "Mgbasa ozi na-apụta na mberede", "Weebụsaịtị ọ bụla", "Ezi ụlọ ahịa app, site n'ezi ụlọ ọrụ"], answer: 3, why: "Ezi ụlọ ahịa app na app nke ezi ụlọ ọrụ bụ nhọrọ n'enweghị nsogbu." },
          { objective: "O2", q: "Ị ga-achọ ikwu okwu kama ide ihe. Gịnị ka ị ga-achọ?", options: ["Akara batrị", "Bọtịnụ igwe okwu", "Igwefoto", "Bọtịnụ olu (volume)"], answer: 1, why: "Bọtịnụ igwe okwu na-ekwe ka ị kwuo ajụjụ gị." },
          { objective: "O3", q: "Kedu prompt kacha doo anya?", options: ["\"ụbọchị ọmụmụ\"", "\"Nwa nwa m nwanyị ga-eruru afọ 8, ọ hụkwara ịnyịnya n'anya. Dee obere ozi ụbọchị ọmụmụ site n'aka Nne Nne n'okwu dị mfe.\"", "\"enyemaka\"", "\"kaadị\""], answer: 1, why: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị." }
        ]
      }
    },
    {
      name: "Isi 2: Inweta ezigbo azịza n'enweghị nsogbu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịrịọ azịza dị mfe karị ma ọ bụ dị mkpụmkpụ karị",
          minutes: 4,
          goal: "Jiri ajụjụ nsochi mee ka azịza dị mfe ịgụ na iji.",
          text: [
            "Ọ dịghị mgbe ọ dị mkpa ka ị nabata azịza mbụ. Ngwa enyemaka ahụ na-echeta ihe i kwuru na mbụ n'otu mkparịta ụka ahụ, ya mere ị nwere ike ịrịọ ya ka ọ gbanwee azịza ya.",
            "Ajụjụ nsochi bara uru: \"Biko jiri okwu dị mfe karị.\" \"Mee ka ọ dị mkpụmkpụ.\" \"Dee ya na nzọụkwụ nwere nọmba.\" \"Kọwaghachi nzọụkwụ 3.\" \"Nye m ọmụmaatụ.\" \"Mee ka o nwekwuo ọmịiko.\"",
            "Ọ bụrụ na ịgụ obere mkpụrụ edemede na-esi gị ike, ị nwekwara ike ime ka mkpụrụ edemede buo ibu na ngwaọrụ gị. Rịọ onye ezinụlọ ka o gosi gị ntọala nha mkpụrụ edemede, ma ọ bụ jụọ ngwa enyemaka ahụ: \"Kedu ka m ga-esi mee ka mkpụrụ edemede buo ibu na iPhone m?\""
          ],
          steps: ["Gụọ azịza mbụ nwayọọ nwayọọ.", "Kpebie ihe ga-eme ka ọ ka mma.", "Rịọ maka otu mgbanwe ahụ.", "Megharịa ya ruo mgbe azịza ahụ dabara gị."],
          words: [["Ajụjụ nsochi (follow-up)", "ajụjụ nke abụọ na-ewuli elu n'azịza i nwetara."]],
          slides: [
            { title: "Azịza mbụ bụ naanị ihe mbụ (draft)", bullets: ["Ị nwere ike ịrịọ maka mgbanwe", "Ọ na-echeta otu mkparịta ụka ahụ"] },
            { title: "Ajụjụ nsochi na-arụ ọrụ", bullets: ["\"Biko jiri okwu dị mfe karị.\"", "\"Mee ka ọ dị mkpụmkpụ.\"", "\"Dee ya na nzọụkwụ nwere nọmba.\"", "\"Kọwaghachi nzọụkwụ 3.\""] },
            { title: "Ọ na-esi ike ịgụ?", bullets: ["Mee ka mkpụrụ edemede buo ibu na ngwaọrụ gị", "Jụọ ngwa enyemaka ahụ otu esi eme ya", "Rịọ onye ezinụlọ ka o gosi gị"] }
          ],
          tryIt: "Were azịza i nwetara na Nkuzi 3. Rịọ maka mgbanwe abụọ, otu n'otu oge, dị ka \"mee ka ọ dị mkpụmkpụ\" wee \"mee ka o nwekwuo ọmịiko\". Tụnyere azịza mbụ na nke ikpeazụ.",
          youCanNow: "ime ka azịza AI ka mma site n'ịjụ ajụjụ nsochi doro anya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere i ji nwee ike ịrịọ ngwa enyemaka ahụ ka ọ gbanwee azịza ya?", options: ["Ọ na-echeta ihe i kwuru na mbụ n'otu mkparịta ụka ahụ", "Ọ ga-amaliteghachi oge ọ bụla", "Ọ na-agụ uche gị", "Ọ na-aza naanị otu ugboro"], answer: 0, why: "N'otu mkparịta ụka ahụ, ngwa enyemaka ahụ na-echeta ozi ndị gara aga, ya mere ị nwere ike ịrịọ maka mgbanwe." },
            { objective: "O4", q: "Azịza gbasara otu esi esi nri bụ otu paragraf dị ogologo. Gịnị ka ị ga-ezipu ọzọ?", options: ["\"Ọ dịghị mma.\"", "Ọ dịghị ihe; mechie app ahụ", "\"Dee ya na nzọụkwụ nwere nọmba.\"", "\"Mee ka ọ dị ogologo.\""], answer: 2, why: "Ajụjụ nsochi doro anya nke na-akpọ mgbanwe ahụ aha na-eme ka azịza dị mfe iji." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele azịza tupu i mee ihe na ya",
          minutes: 5,
          goal: "Lelee azịza AI n'isi iyi a pụrụ ịtụkwasị obi tupu i dabere na ya.",
          text: [
            "Ngwa enyemaka AI na-echepụta ihe mgbe ụfọdụ: nọmba ekwentị ezighi ezi, oge ụlọ ahịa na-emeghe, eziokwu gbasara ọgwụ ma ọ bụ iwu gbanwere agbanwe. A na-akpọ nke a hallucination.",
            "Lelee mgbe niile ihe ọ bụla gbasara ahụike gị, ọgwụ, ego, enyemaka dị ka Social Security ma ọ bụ Medicare, ụbọchị, adreesị na nọmba ekwentị. Lelee ya na weebụsaịtị gọọmentị, n'ọfịs ahụ n'onwe ya, n'aka dọkịta gị ma ọ bụ onye na-ere ọgwụ, ma ọ bụ n'aka onye ị tụkwasịrị obi.",
            "Ezigbo omume bụ ịjụ: \"Ebee ka m nwere ike ịlele nke a?\" Wee chọta peeji gọọmentị ahụ n'onwe gị. Weebụsaịtị gọọmentị United States na-ejedebe na .gov."
          ],
          steps: ["Chọta eziokwu ndị dị n'azịza ahụ: nọmba, ụbọchị, aha, iwu.", "Chọọ ha na weebụsaịtị gọọmentị ma ọ bụ kpọọ ọfịs ahụ.", "Ọ bụrụ na ha adabaghị, kwere isi iyi gọọmentị.", "Maka ahụike na ego, jụọkwa dọkịta gị, onye na-ere ọgwụ ma ọ bụ onye ị tụkwasịrị obi."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], [".gov", "ọgwụgwụ adreesị weebụsaịtị gọọmentị United States (America)."]],
          slides: [
            { title: "AI nwere ike ịchepụta ihe", bullets: ["Nọmba ekwentị ma ọ bụ oge mmeghe ezighi ezi", "Iwu ochie", "Eziokwu ezighi ezi gbasara ọgwụ"] },
            { title: "Lelee mgbe niile", bullets: ["Ahụike na ọgwụ", "Ego na enyemaka gọọmentị", "Ụbọchị, adreesị na nọmba ekwentị"] },
            { title: "Otu esi elele", bullets: ["Weebụsaịtị gọọmentị, na-ejedebekarị na .gov", "Kpọọ ọfịs ahụ", "Jụọ dọkịta gị, onye na-ere ọgwụ ma ọ bụ onye ị tụkwasịrị obi"] }
          ],
          tryIt: "Jụọ ngwa enyemaka oge ọba akwụkwọ dị nso gị na-emeghe. Wee lelee weebụsaịtị ọba akwụkwọ ahụ n'onwe ya ma ọ bụ kpọọ ha. Azịza ahụ ọ dabara?",
          youCanNow: "ịhụ eziokwu ndị chọrọ ilele na ịlele ha n'isi iyi a pụrụ ịtụkwasị obi.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ hallucination n'AI?", options: ["Mgbe ihuenyo gbachiri ọchịchịrị", "Mgbe app ahụ na-eji nwayọọ", "Mgbe ngwa enyemaka ahụ na-ekwu okwu n'olu dị elu", "Mgbe ngwa enyemaka ahụ chepụtara ihe dị ka eziokwu"], answer: 3, why: "AI nwere ike ịchepụta nọmba ekwentị, oge ụlọ ahịa ma ọ bụ iwu ezighi ezi nke dị ka ezi ihe." },
            { objective: "O5", q: "Ngwa enyemaka ahụ gwara gị ole ọgwụ ị ga-aṅụ. Gịnị ka ị ga-eme?", options: ["Ṅụọ otu ahụ ozugbo", "Buru ụzọ lelee ya n'aka dọkịta gị ma ọ bụ onye na-ere ọgwụ", "Jụọ AI ọzọ", "Kesaa ya ndị enyi gị"], answer: 1, why: "A ga-elelerịrị azịza gbasara ahụike na ọgwụ n'aka dọkịta gị ma ọ bụ onye na-ere ọgwụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe ozi nzuzo gị",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI n'ekesaghị ozi nzuzo.",
          text: [
            "Edela ozi nzuzo n'ime ngwa enyemaka AI mgbe ọ bụla: nọmba Social Security gị (nọmba njirimara gọọmentị US), nọmba Medicare (nọmba enyemaka ahụike gọọmentị US), nọmba ụlọ akụ ma ọ bụ kaadị, okwuntughe, ma ọ bụ adreesị ụlọ gị zuru ezu. Ị nwere ike inweta enyemaka ị chọrọ na-enweghị ha. Dee \"[nọmba m]\" n'ọnọdụ ya.",
            "Ndị aghụghọ na-ejikwa AI. Ha nwere ike ide ozi dị ka ezi ozi ma ọbụna ṅomie olu nwa nwa gị n'ekwentị. Kpachara anya maka oku ma ọ bụ ozi ọ bụla na-eme ka ị mee ngwa ngwa, na-arịọ ego ma ọ bụ gift card (kaadị onyinye), ma ọ bụ na-arịọ koodu e zitere n'ekwentị gị.",
            "Ọ bụrụ na ihe adịghị gị mma, kwụsị. Kwụsị oku ahụ, ma kpọghachi onye ahụ site na nọmba ị maralarị na ọ bụ ezi nọmba."
          ],
          steps: ["Tupu i zipu prompt, gụọ ya maka ozi nzuzo.", "Dochie ya na ihe nnọchi dị ka \"[nọmba m]\".", "Lee ime ngwa ngwa, gift card na arịrịọ koodu dị ka ihe ịdọ aka na ntị.", "Kpọghachi site na nọmba ị maralarị."],
          words: [["Ozi nzuzo", "ihe gbasara gị nke nwere ike ime ka mmadụ mee ka ọ bụ gị ma ọ bụ were ego gị."], ["Ihe nnọchi (placeholder)", "okwu nnọchi dị ka \"[nọmba m]\" e ji n'ọnọdụ ezi ozi ahụ."]],
          slides: [
            { title: "Edela ihe ndị a n'ime AI", bullets: ["Nọmba Social Security ma ọ bụ Medicare", "Nọmba ụlọ akụ ma ọ bụ kaadị", "Okwuntughe"] },
            { title: "Jiri ihe nnọchi", bullets: ["Dee \"[nọmba m]\" n'ọnọdụ ya", "Ị ka na-enweta enyemaka ị chọrọ"] },
            { title: "Ihe ịdọ aka na ntị nke aghụghọ", bullets: ["Ha na-eme ka ị mee ngwa ngwa", "Ha chọrọ ego ma ọ bụ gift card", "Ha na-arịọ koodu e zitere n'ekwentị gị"] },
            { title: "Mgbe obi abụọ dị", bullets: ["Kwụsị", "Kwụsị oku ahụ", "Kpọghachi na nọmba ị maara na ọ bụ ezi nọmba"] }
          ],
          tryIt: "Ọrụ ikpeazụ: rịọ ngwa enyemaka otu esi esi nri dị mfe maka mmadụ anọ, rịọ ya ka o dee nzọụkwụ ndị ahụ n'ahịrị mkpụmkpụ nwere nọmba, jụọ otu ajụjụ nsochi, ma lelee otu eziokwu, dị ka okpomọkụ e ji esi nri, na weebụsaịtị a pụrụ ịtụkwasị obi ma ọ bụ n'aka onye ị tụkwasịrị obi.",
          youCanNow: "iji ngwa enyemaka AI maka ezi ọrụ, ịlele azịza ya, na ichebe ozi nzuzo gị.",
          quickCheck: [
            { objective: "O6", q: "Kedu n'ime ndị a ka ị na-ekwesịghị ide mgbe ọ bụla n'ime ngwa enyemaka AI?", options: ["Nọmba Medicare gị", "Otu esi esi nri ị kacha hụ n'anya", "Aha nnụnụ ị hụrụ", "Ajụjụ gbasara ubi gị"], answer: 0, why: "Nọmba Medicare, Social Security na ụlọ akụ bụ ozi nzuzo; jiri ihe nnọchi kama." },
            { objective: "O6", q: "Ozi ederede kwuru na a ga-emechi akaụntụ gị taa ma ọ bụrụ na i zipughị koodu i nwetara ugbu a. Gịnị ka ị ga-eme?", options: ["Zipu koodu ahụ ngwa ngwa", "Zaa ya na nọmba ụlọ akụ gị", "Ekesala koodu ahụ; kpọọ ụlọ ọrụ ahụ na nọmba ị maara", "Zigara ya ụmụ ụmụ gị"], answer: 2, why: "Ime ka ị mee ngwa ngwa na ịrịọ koodu bụ ihe ịdọ aka na ntị nke aghụghọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Inweta ezigbo azịza n'enweghị nsogbu",
        questions: [
          { objective: "O4", q: "Azịza ahụ na-eji okwu ị na-aghọtaghị. Gịnị ka ị ga-ede?", options: ["\"Mee ka ọ dị ogologo.\"", "Nọmba Medicare gị", "Ọ dịghị ihe; mechie app ahụ", "\"Biko jiri okwu dị mfe karị.\""], answer: 3, why: "Ajụjụ nsochi na-arịọ ngwa enyemaka ahụ ka ọ gbanwee azịza ya." },
          { objective: "O5", q: "Kedu n'ime ndị a ka ị ga-elele MGBE NIILE n'isi iyi a pụrụ ịtụkwasị obi?", options: ["Ole ọgwụ ị ga-aṅụ", "Njakịrị", "Abụ uri ụbọchị ọmụmụ", "Ndepụta aha ifuru"], answer: 0, why: "A ga-elelerịrị eziokwu gbasara ahụike na ọgwụ n'aka dọkịta gị ma ọ bụ onye na-ere ọgwụ." },
          { objective: "O5", q: "Gịnị ka \"hallucination\" pụtara n'AI?", options: ["Ihuenyo na-enwu nke ukwuu", "Ụdị app", "AI dere ihe dị ka eziokwu mana e chepụtara ya", "Ịntanetị na-eji nwayọọ"], answer: 2, why: "AI nwere ike ịchepụta eziokwu ndị dị ka ezi ihe." },
          { objective: "O6", q: "Gịnị ka ị ga-ede n'ọnọdụ nọmba Medicare gị na prompt?", options: ["Ezi nọmba ahụ", "Ọkara nọmba ahụ", "Nọmba ụlọ akụ gị", "Ihe nnọchi dị ka \"[nọmba m]\""], answer: 3, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị ozi nzuzo." },
          { objective: "O6", q: "Onye kpọrọ oku nwere olu dị ka nwa nwa gị nwoke na-arịọ gift card ozugbo. Gịnị ka ị ga-eme?", options: ["Zụta ha ngwa ngwa", "Nye ha koodu dị n'ekwentị gị", "Kwụsị oku ahụ ma kpọọ nwa nwa gị na nọmba ị maara", "Zipu ozi ụlọ akụ gị"], answer: 2, why: "Ndị aghụghọ nwere ike ịṅomi olu; ime ngwa ngwa na gift card bụ ihe ịdọ aka na ntị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ndị Okenye: Iji Ngwa Enyemaka AI",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa ngwa enyemaka AI bụ:", options: ["Mmadụ n'ọfịs na-aza oku", "Mmemme kọmputa ị na-akparịta ụka na ya", "Ụlọ ọrụ ekwentị", "Ụlọ ahịa"], answer: 1, why: "Ọ bụ mmemme ị na-ede ihe na ya ma ọ bụ gwa okwu." },
      { objective: "O1", q: "Kedu nke bụ ezigbo ụzọ iji ngwa enyemaka AI?", options: ["Ide ihe mbụ nke ozi ekele nye enyi", "Ikpebi ole ọgwụ ị ga-aṅụ", "Ịbịanye aka n'akwụkwọ n'ọnọdụ gị", "Ịmara ego dị n'akaụntụ ụlọ akụ gị"], answer: 0, why: "Ide ihe mbụ nke ozi na kaadị bụ otu n'ime ihe ọ maara nke ọma." },
      { objective: "O1", q: "Onye bụ onye isi mgbe ị na-eji ngwa enyemaka AI?", options: ["Gị", "Ụlọ ọrụ ekwentị", "AI", "Ọ dịghị onye"], answer: 0, why: "Gị na-ekpebi ihe ị ga-ajụ na ihe ị ga-ekwere." },
      { objective: "O2", q: "Kedu nke bụ ngwa enyemaka AI a ma ama na-akwụghị ụgwọ?", options: ["Igwe mgbakọ", "Google Gemini", "Igwe mbipụta", "Rimọt televishọn"], answer: 1, why: "Gemini, ChatGPT na Copilot bụ ngwa enyemaka a ma ama na-akwụghị ụgwọ." },
      { objective: "O2", q: "Ebe n'enweghị nsogbu iji nweta app AI na tablet bụ:", options: ["Njikọ n'email onye ị na-amaghị zitere", "Mgbasa ozi na-apụta na mberede", "Ezi ụlọ ahịa app", "Weebụsaịtị ọ bụla"], answer: 2, why: "Wụnye naanị site n'ezi ụlọ ahịa app." },
      { objective: "O2", q: "Kedu adreesị na-emeghe ChatGPT na kọmputa?", options: ["chatgpt.gift", "chatgpt-prize.net", "free-chatgpt.win", "chatgpt.com"], answer: 3, why: "chatgpt.com bụ ezi adreesị ya." },
      { objective: "O2", q: "Ebee ka ị na-edekarị ajụjụ gị?", options: ["N'akara batrị", "Na elekere", "N'igbe ozi dị n'akụkụ ala", "N'igwefoto"], answer: 2, why: "Igbe ozi na-ekwukarị \"Ask anything\" ma ọ bụ \"Message\"." },
      { objective: "O2", q: "Ị chọrọ ikwu ajụjụ gị n'olu. Ị ga-apị:", options: ["Bọtịnụ igwe okwu", "Igwefoto", "Bọtịnụ ọkụ (power)", "Bọtịnụ olu (volume)"], answer: 0, why: "Bọtịnụ igwe okwu na-ekwe ka ị kwuo okwu kama ide ihe." },
      { objective: "O3", q: "Gịnị bụ prompt?", options: ["Mkpu ncheta", "Ọgwụgwụ weebụsaịtị", "Chaja ekwentị", "Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka ahụ"], answer: 3, why: "Prompt bụ arịrịọ gị nye ngwa enyemaka ahụ." },
      { objective: "O3", q: "Ezigbo prompt nwere:", options: ["Naanị otu okwu", "Ihe ị chọrọ, ọnọdụ gị, na otu ị chọrọ ka azịza dị", "Okwuntughe gị", "Nọmba Social Security gị"], answer: 1, why: "Akụkụ atọ ndị ahụ na-enweta azịza bara uru." },
      { objective: "O3", q: "Kedu prompt nwere ike inweta azịza kacha baa uru?", options: ["\"ubi\"", "\"Akwụkwọ tomato m nwere ntụpọ odo odo. Gịnị nwere ike ịkpata ya? Zaa n'obere nzọụkwụ dị mfe.\"", "\"osisi\"", "\"enyemaka\""], answer: 1, why: "Ọ na-enye mkpa, ọnọdụ na ụdị azịza." },
      { objective: "O4", q: "Azịza mbụ dị ogologo nke ukwuu. Ị nwere ike:", options: ["Ịgbanyụ ngwaọrụ ahụ", "Naanị ịnabata ya", "Ịkwụ ụgwọ ka e dozie ya", "Ịjụ: \"Mee ka ọ dị mkpụmkpụ.\""], answer: 3, why: "Ajụjụ nsochi na-agbanwe azịza ahụ." },
      { objective: "O4", q: "Kedu nke bụ ajụjụ nsochi bara uru?", options: ["\"Dee ya na nzọụkwụ nwere nọmba.\"", "\"Nke a bụ nọmba kaadị m.\"", "\"Hichapụ ekwentị m.\"", "\"Zipu ego.\""], answer: 0, why: "Ọ na-arịọ mgbanwe doro anya n'azịza ahụ." },
      { objective: "O4", q: "Mkpụrụ edemede dị n'ihuenyo dị obere nke ukwuu. Gịnị ka ị nwere ike ime?", options: ["Kwụsị", "Zụta ekwentị ọhụrụ taa", "Mee ka mkpụrụ edemede buo ibu na ntọala ngwaọrụ gị ma ọ bụ rịọ mmadụ ka o gosi gị", "Dee okwuntughe gị"], answer: 2, why: "Ngwaọrụ nwere ntọala nha mkpụrụ edemede; onye ezinụlọ ma ọ bụ ngwa enyemaka ahụ nwere ike igosi gị otu esi eme ya." },
      { objective: "O5", q: "Ngwa enyemaka ahụ nyere gị nọmba ekwentị ụlọ ọgwụ. Ị kwesịrị:", options: ["Inye ya nọmba Medicare gị", "Ịkpọ ya n'eleleghị ya", "Itinye ya n'ịntanetị", "Ịlele ya na weebụsaịtị ụlọ ọgwụ ahụ n'onwe ya ma ọ bụ n'akwụkwọ ozi si n'ụlọ ọgwụ ahụ"], answer: 3, why: "AI nwere ike inye nọmba ezighi ezi; lelee isi iyi gọọmentị ma ọ bụ nke ụlọ ọgwụ ahụ." },
      { objective: "O5", q: "Weebụsaịtị gọọmentị United States na-ejedebe na:", options: [".win", ".gift", ".gov", ".xyz"], answer: 2, why: "Saịtị gọọmentị US na-eji .gov." },
      { objective: "O5", q: "Maka ajụjụ gbasara ọgwụ, onye kacha mma ikwado azịza ahụ bụ:", options: ["Onye ị na-amaghị n'ịntanetị", "Dọkịta gị ma ọ bụ onye na-ere ọgwụ", "AI n'onwe ya", "Mgbasa ozi na-apụta na mberede"], answer: 1, why: "A ga-elelerịrị eziokwu gbasara ahụike n'aka onye ọkachamara." },
      { objective: "O6", q: "Kedu nke ị na-ekwesịghị ide MGBE Ọ BỤLA n'ime ngwa enyemaka AI?", options: ["Nọmba kaadị ụlọ akụ gị", "\"Nye m ọmụmaatụ.\"", "\"Jiri okwu dị mfe karị.\"", "\"Mee ka o nwekwuo ọmịiko.\""], answer: 0, why: "Nọmba ụlọ akụ na kaadị bụ ozi nzuzo." },
      { objective: "O6", q: "Mmadụ na-arịọ koodu e zitere n'ekwentị gị ugbu a. Ị kwesịrị:", options: ["Ịghara ikesa ya mgbe ọ bụla", "Itinye ya n'ịntanetị", "Iziga ya ha n'ozi ederede", "Ịgụrụ ha ya"], answer: 0, why: "Koodu ahụ na-echebe akaụntụ gị; ezi ọfịs anaghị arịọ ya." },
      { objective: "O6", q: "Ọ bụrụ na oku adịghị gị mma, nzọụkwụ kacha enweghị nsogbu bụ:", options: ["Ịnọgide na-ekwu okwu", "Ịkwụsị oku ahụ ma kpọghachi na nọmba ị maara na ọ bụ ezi nọmba", "Inye ha adreesị gị", "Iziga obere ego"], answer: 1, why: "Ịkpọghachi na nọmba ị maara na-akwụsị ọtụtụ aghụghọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 4, 9, 11, 14, 16, 17, 19]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Meghere ngwa enyemaka", objective: "O2", notYet: "Chọrọ onye ọzọ ka o meghee ngwa enyemaka ahụ, ma ọ bụ jiri app ma ọ bụ saịtị na-abụghị ezi nke.", meets: "Meghere ezi ngwa enyemaka ma chọta igbe ozi ma ọ bụ igwe okwu.", exceeds: "Nwere ike igosi enyi ma ọ bụ onye ezinụlọ otu esi emeghe ya." },
      { name: "Arịrịọ doro anya", objective: "O3", notYet: "Prompt ahụ edoghị anya, dịka ọmụmaatụ \"nri\".", meets: "Rịọrọ otu esi esi nri dị mfe maka mmadụ anọ, ya na ọnọdụ ahụ na otu azịza ga-adị.", exceeds: "Tinyere ihe ọzọ dị ka nri mmadụ na-apụghị iri, azịza mbụ ahụ fọrọ nke nta ka ọ dị njikere." },
      { name: "Mere ka ọ dị mfe", objective: "O4", notYet: "Jiri azịza mbụ otu o si dị, ọbụlagodi ma ọ siri ike ịgụ.", meets: "Rịọrọ maka nzọụkwụ mkpụmkpụ nwere nọmba na otu ajụjụ nsochi ọzọ.", exceeds: "Rịọrọ maka mgbanwe otu n'otu oge ma nwee ike ikwu ihe nke ọ bụla dozie." },
      { name: "Elelere eziokwu", objective: "O5", notYet: "Kwere eziokwu dị ka okpomọkụ e ji esi nri n'eleleghị ya.", meets: "Lelere otu eziokwu na weebụsaịtị a pụrụ ịtụkwasị obi ma ọ bụ n'aka onye ọ tụkwasịrị obi.", exceeds: "Nwere ike ikwu ebe o lelere ya na ma ọ dabara." },
      { name: "Ozi nzuzo adịghị n'ime ya", objective: "O6", notYet: "Prompt ahụ nwere nọmba nzuzo, adreesị ma ọ bụ okwuntughe.", meets: "Ọ dịghị ozi nzuzo na prompt ọ bụla.", exceeds: "Nwere ike ịkpọ aha ihe ịdọ aka na ntị abụọ nke aghụghọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri ngwa enyemaka AI maka kaadị, akwụkwọ ozi, nri ma ọ bụ ajụjụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha hụrụ ma zere oku ma ọ bụ ozi aghụghọ",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone, tablet ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Ugegbe ịgụ akwụkwọ ma ọ bụrụ na ọ dị mkpa, na akwụkwọ na mkpịsị ode maka ndetu",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, nwayọọ nwayọọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Gaa nwayọọ nwayọọ, ma kwekọọ onye na-amụ ihe ọ bụla na onye enyemaka ma ọ bụ nwa nwa na nke mbụ ha na-emeghe app ahụ.",
      "Gosi otu esi eme ka mkpụrụ edemede buo ibu na ngwaọrụ onye na-amụ ihe ọ bụla tupu ịmalite.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee ezi ozi nzuzo; jiri ihe nnọchi dị ka [nọmba m].",
      "Chetara ndị na-amụ ihe na a ga-elelerịrị azịza gbasara ahụike, ọgwụ na ego n'aka dọkịta, onye na-ere ọgwụ ma ọ bụ ọfịs gọọmentị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
