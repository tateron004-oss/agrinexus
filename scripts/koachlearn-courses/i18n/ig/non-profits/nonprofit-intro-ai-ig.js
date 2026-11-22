"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-intro-ai-ig",
  lang: "ig",
  translationOf: "nonprofit-intro-ai",
  category: "Non Profits",
  name: "Mmalite AI maka Otu Na-adịghị Achọ Uru",
  skills: "Ịkọwara ndị otu gị AI, Ide prompt doro anya maka ọrụ otu na-adịghị achọ uru, Ime ka ihe mbụ e dere ka mma, Ịlele eziokwu, Ichebe ozi nzuzo ndị nyere onyinye na ndị a na-enyere aka",
  outcome: "iji ngwa enyemaka AI n'efu dee ihe mbụ (draft) nke ezi ihe otu na-adịghị achọ uru na-ede, dị ka ozi ekele nye ndị ọrụ afọ ofufo ma ọ bụ ọkwa mmemme: ịjụ ajụjụ doro anya, ime ka ihe e dere ka mma, ịlele eziokwu ọ bụla, na idebe ozi ndị nyere onyinye na ndị a na-enyere aka n'ebe ọ na-adịghị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ndu, ndị ọrụ na ndị ọrụ afọ ofufo nke otu na-adịghị achọ uru na otu okpukpe, ndị nụrụ maka AI mana ejibeghị ya nke ukwuu, ma ọ bụ ndị chọrọ iji ya n'enweghị nsogbu karị.",
    "Ị ga-amụta ihe ngwa enyemaka AI bụ, otu esi emeghe otu n'efu, otu esi arịọ ihe ederede otu gị chọrọ kwa izu, otu esi eme ka ihe mbụ e dere ka mma ma lelee ya, na otu esi echebe ndị ị na-enyere aka.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI n'efu dee ozi ekele nye ndị ọrụ afọ ofufo nyere aka na mmemme gara aga (inye nri, ụbọchị nhicha ma ọ bụ nri abalị ụka). Jiri prompt nwere akụkụ atọ, rịọ maka mgbanwe abụọ ga-eme ka ọ ka mma, lelee eziokwu na ụbọchị ọ bụla na ndekọ nke gị, hụ na ozi nzuzo onye ọrụ afọ ofufo ma ọ bụ onye nyere onyinye adịghị na prompt ahụ, ma dozie ozi ikpeazụ ahụ ka ọ dị ka otu gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ndu, ndị ọrụ na ndị ọrụ afọ ofufo nke otu na-adịghị achọ uru na otu okpukpe, ọtụtụ mgbe n'obere otu na ụka, ndị nụrụ maka AI mana ejibeghị ya nke ukwuu, ma ọ bụ ndị chọrọ iji ya n'enweghị nsogbu karị.",
    startingPoint: "Ha na-eji email, ekwentị na kọmputa maka ọrụ kwa ụbọchị, ma na-ede ozi ekele, ọkwa na akwụkwọ akụkọ (newsletter) n'onwe ha. Ha anaghị eji ngwa enyemaka AI, ma ọ bụ na-eji ya ntakịrị.",
    gap: "Obere otu na-etinye ọtụtụ awa n'ide ihe nke ngwa enyemaka AI nwere ike ide ihe mbụ ya n'ime nkeji ole na ole, mana iji ya n'akpachapụghị anya nwere ike ịgbasa nọmba e chepụtara echepụta ma ọ bụ kpughee ozi ndị nyere onyinye, ndị ọrụ afọ ofufo na ndị a na-enyere aka. Ndị na-amụ ihe chọrọ ụzọ dị mfe na-enweghị nsogbu iji AI nke na-echekwa oge ma na-echebe ntụkwasị obi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị, kọmputa ọfịs ma ọ bụ laptọọpụ ọfịs ụka a na-ekerịta",
      "Oge: ndị ọrụ afọ ofufo na ndị ọrụ nwere obere oge, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5",
      "Nzuzo: enweghị ozi nzuzo onye nyere onyinye, onye ọrụ afọ ofufo ma ọ bụ onye a na-enyere aka na ngwa AI; gbasoo iwu nzuzo otu ahụ",
      "Jiri naanị ngwa AI otu ahụ kwadoro maka ozi ọrụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ otu na-adịghị achọ uru", action: "ịmata ọrụ ndị ngwa enyemaka AI nwere ike inyere aka na ndị chọrọ mmadụ ma ọ bụ isi iyi gọọmentị", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji ekwentị ma ọ bụ kọmputa", action: "imeghe ngwa enyemaka AI n'efu ma ọ bụ nke a kwadoro site na weebụsaịtị ma ọ bụ app ya nke ezi ụlọ ọrụ nwere ya, ma pụọ (sign out) mgbe i mechara", standard: "n'enweghị onye nyere gị aka" },
    { id: "O3", condition: "Mgbe e nyere gị ezi ihe otu na-adịghị achọ uru ga-ede", action: "ide prompt nwere akụkụ atọ nke na-ekwu ihe ị chọrọ, ọnọdụ ahụ na ụdị azịza", standard: "na-eji ihe nnọchi kama ozi nzuzo" },
    { id: "O4", condition: "Mgbe e nyere gị ihe mbụ e dere na-adabaghị", action: "ịrịọ ya mgbanwe site n'arịrịọ nsochi, otu n'otu oge", standard: "ruo mgbe ọ dabara olu otu gị, n'ime nnwale atọ ma ọ bụ ole na-erughị ya" },
    { id: "O5", condition: "Mgbe e nyere gị ihe AI dere nwere nọmba, ụbọchị ma ọ bụ nkwupụta", action: "ịlele eziokwu ọ bụla na ndekọ gị ma ọ bụ n'isi iyi gọọmentị", standard: "tupu ọ ruo ndị nyere onyinye, ndị ọrụ afọ ofufo ma ọ bụ ọha" },
    { id: "O6", condition: "Mgbe ị na-eji AI maka ọrụ gbasara ndị nyere onyinye, ndị ọrụ afọ ofufo ma ọ bụ ndị a na-enyere aka", action: "idebe ozi nzuzo n'ebe ọ na-adịghị site n'iji ihe nnọchi", standard: "n'ekesaghị aha ya na onyinye, adreesị, ndetu okwu onye a na-enyere aka, ma ọ bụ ozi ahụike ma ọ bụ ozi mbata obodo (immigration)" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe AI nwere ike imere otu na-adịghị achọ uru",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ngwa enyemaka AI bụ, na ihe ọ bụghị",
          minutes: 4,
          goal: "Kọwaara onye gị na ya na-arụ ọrụ ma ọ bụ onye ọrụ afọ ofufo ihe ngwa enyemaka AI nwere ike ime na ihe ọ na-enweghị ike imere otu gị.",
          text: [
            "Ngwa enyemaka AI bụ mmemme kọmputa ị na-akparịta ụka na ya n'okwu nkịtị. Ị dee arịrịọ, ọ dee azịza n'ime sekọnd ole na ole. Ndị a ma ama nwere ụdị n'efu gụnyere ChatGPT, Microsoft Copilot na Google Gemini.",
            "Maka otu na-adịghị achọ uru, ọ maara ide ihe mbụ nke ọma: ozi ekele, isiokwu akwụkwọ akụkọ (newsletter), ozi ịdebanye aha ndị ọrụ afọ ofufo, usoro nzukọ, ozi soshal midia, na ime ka akụkọ ogologo bụrụ nchịkọta dị mkpụmkpụ.",
            "Ọ bụghị onye ọrụ otu gị, ọka iwu, onye na-agụ ego (accountant) ma ọ bụ onye na-ahụ maka enyemaka ego (grant). Ọ maghị ndị nyere gị onyinye, mmemme gị ma ọ bụ obodo gị, ọ nwekwara ike ime mperi ọbụlagodi mgbe ọ dị ka o ji n'aka. Mmadụ n'otu gị na-enyocha ma na-ekpebi mgbe niile."
          ],
          words: [["AI", "mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ, dị ka ide ihe ma ọ bụ ịchịkọta ihe."], ["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu."], ["Ihe mbụ (first draft)", "ụdị mbido nke mmadụ na-elele ma na-eme ka ọ ka mma."]],
          slides: [
            { title: "Ngwa enyemaka AI bụ...", bullets: ["Mmemme kọmputa ị na-akparịta ụka na ya", "Ị na-arịọ n'okwu nkịtị", "Ọ na-ede ihe mbụ n'ime sekọnd ole na ole"] },
            { title: "Ọ dị mma maka ihe mbụ otu gị", bullets: ["Ozi ekele na akwụkwọ akụkọ (newsletter)", "Ozi ịdebanye aha ndị ọrụ afọ ofufo na usoro nzukọ", "Nchịkọta dị mkpụmkpụ nke akụkọ ogologo"] },
            { title: "Ọ BỤGHỊ", bullets: ["Ọka iwu, onye na-agụ ego ma ọ bụ onye grant", "Onye na-eziri ezi mgbe niile, ọbụlagodi mgbe o ji n'aka", "Onye na-ekpebi: ndị otu gị na-ekpebi"] }
          ],
          tryIt: "Depụta ihe ederede atọ otu gị na-ede kwa ọnwa (dịka ọmụmaatụ ncheta nye ndị ọrụ afọ ofufo, ozi ekele nye onye nyere onyinye na akwụkwọ akụkọ). Gbaa gburugburu nke na-ewe oge kachasị. Nke ahụ bụ ọrụ AI mbụ gị.",
          youCanNow: "ikwu ihe ngwa enyemaka AI bụ, ịkpọ aha ọrụ atọ nke otu na-adịghị achọ uru ọ nwere ike inyere aka, na ikwu ihe mere mmadụ ji ka na-enyocha ọrụ ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ngwa enyemaka AI maara ime nke ọma maka otu na-adịghị achọ uru?", options: ["Ihe mbụ dị ka ozi ekele na isiokwu akwụkwọ akụkọ", "Ịmara ndị nyere gị onyinye n'onwe ha", "Ime mkpebi ikpeazụ maka ndị bọọdụ gị", "Inye ndụmọdụ iwu ị ga-atụkwasị obi"], answer: 0, why: "AI maara ide ihe mbụ; mmadụ n'otu gị na-enyocha ma na-ekpebi." },
            { objective: "O1", q: "Onye ọrụ afọ ofufo kwuru, \"Ka AI kpebie ndị ga-enweta igbe nri ọnwa a.\" Gịnị ka ị ga-ekwu?", options: ["Ezigbo echiche; AI maara obodo anyị", "Mba; AI nwere ike ide ihe mbụ, mana ndị otu anyị na-ekpebi", "Naanị ma ọ bụrụ na AI dị ka o ji n'aka", "Ee, mana naanị maka ezinụlọ ọhụrụ"], answer: 1, why: "AI amaghị obodo gị, ọ nwekwara ike ime mperi; ndị otu gị na-ekpebi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Imeghe ngwa enyemaka AI n'efu",
          minutes: 4,
          goal: "Meghee ngwa enyemaka AI n'efu na ekwentị ma ọ bụ kọmputa ma chọta ebe ị ga-ede ihe.",
          text: [
            "Ị nwere ike iji ngwa enyemaka AI na smartphone ma ọ bụ na kọmputa ọ bụla nwere ịntanetị, gụnyere kọmputa ọfịs ma ọ bụ laptọọpụ ọfịs ụka.",
            "Na kọmputa: meghee web browser ma dee adreesị ya: chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com. Na ekwentị: wụnye ezi app site n'ụlọ ahịa app, nke ezi ụlọ ọrụ mere (OpenAI, Microsoft ma ọ bụ Google).",
            "Ọ bụrụ na otu gị ejiworị Microsoft 365 ma ọ bụ Google Workspace, jụọ onye na-ahụ maka akaụntụ (administrator) ngwa AI a kwadoro. Akaụntụ ọrụ nwere ike inwe nchekwa nzuzo ọzọ nke akaụntụ nke onwe gị na-enweghị.",
            "Na kọmputa ọfịs a na-ekerịta, ekwela ka browser chekwaa okwuntughe gị, ma pụọ (sign out) mgbe i mechara."
          ],
          steps: ["Jụọ ma otu gị nwere ngwa AI a kwadoro.", "Kọmputa: dee adreesị weebụ na browser. Ekwentị: wụnye ezi app ahụ.", "Chọta igbe ozi dị n'akụkụ ala ihuenyo.", "Na kọmputa a na-ekerịta: pụọ ma mechie browser mgbe i mechara."],
          words: [["Web browser", "mmemme ị na-eji eleta weebụsaịtị, dị ka Chrome, Edge ma ọ bụ Safari."], ["Administrator", "onye na-ahụ maka akaụntụ na ntọala otu gị."]],
          slides: [
            { title: "Ebe ị nwere ike iji ya", bullets: ["Kọmputa ọfịs ma ọ bụ nke ụlọ", "App smartphone site n'ezi ụlọ ahịa app", "Ngwa ọrụ otu gị kwadoro"] },
            { title: "Adreesị weebụ", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Buru ụzọ jụọ", bullets: ["Kedu ngwa AI otu anyị kwadoro?", "Akaụntụ ọrụ nwere ike ichebe ozi nke ọma karị"] },
            { title: "Na kọmputa a na-ekerịta", bullets: ["Echekwala okwuntughe gị", "Pụọ (sign out) ma mechie browser"] }
          ],
          tryIt: "Meghee otu ngwa enyemaka AI n'efu. Dee: Ana m arụ ọrụ afọ ofufo n'otu na-adịghị achọ uru, ana m amụkwa iji AI. Kedu ụzọ atọ ị nwere ike isi nyere m aka n'izu a? Gụọ azịza ya.",
          youCanNow: "imeghe ngwa enyemaka AI n'efu, ịchọta ebe ị ga-ede ihe, na ịjụ ngwa otu gị kwadoro.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka ị ga-enweta app AI na ekwentị?", options: ["Site na njikọ n'ozi onye ị na-amaghị zitere", "Site n'app ọ bụla nwere aha yiri ya", "Site n'ụlọ ahịa app, nke ezi ụlọ ọrụ mere", "Site na mgbasa ozi na-apụta na mberede"], answer: 2, why: "Wụnye ezi app nke ezi ụlọ ọrụ mere, dị ka OpenAI, Microsoft ma ọ bụ Google." },
            { objective: "O2", q: "I jiri AI mechaa na laptọọpụ ọfịs ụka. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ ghere oghe maka onye ọzọ", "Chekwaa okwuntughe gị na browser", "Gbanyụọ naanị ihuenyo", "Pụọ (sign out) ma mechie browser"], answer: 3, why: "Na kọmputa a na-ekerịta, echekwala okwuntughe gị, ma pụọ mgbe i mechara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịrịọ ihe ederede otu gị n'ime prompt doro anya",
          minutes: 5,
          goal: "Dee prompt nwere akụkụ atọ nke ga-enweta ihe mbụ bara uru na nke mbụ.",
          text: [
            "Ihe ị na-ede ka a na-akpọ prompt. Ezigbo prompt nwere akụkụ atọ: ihe ị chọrọ, ọnọdụ ahụ (n'enweghị ozi nzuzo), na otu ị chọrọ ka azịza dị.",
            "Ọmụmaatụ: \"Dee obere email ekele nye ndị ọrụ afọ ofufo 25 nyere aka na mmemme inye nri anyị nke Satọdee. Anyị nyere ezinụlọ 140 nri. Jiri olu ọma, ka ọ ghara ịkarị okwu 120, ma kwụsị na ụbọchị mmemme ọzọ: [ụbọchị].\"",
            "Prompt na-adịghị ike dị ka \"akwụkwọ ozi ekele\" na-eme ka ngwa enyemaka ahụ chepụta ihe ị pụtara, ya mere azịza ya ga-adị n'ozuzu. Gwa ya onye ga-agụ ya na olu dabara otu gị: ọma, nke iwu, nke ọṅụ ma ọ bụ nke okpukpe."
          ],
          steps: ["Kwuo ihe ị chọrọ na onye ga-agụ ya.", "Tinye ọnọdụ ahụ: mmemme, nọmba, ebumnuche. Enweghị aha ma ọ bụ ozi nzuzo.", "Kwuo otu ị chọrọ ya: ogologo, olu, ụdị.", "Jiri ihe nnọchi dị ka [ụbọchị] maka ihe ọ bụla ị ga-edejupụta n'onwe gị."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."], ["Olu (tone)", "otu ederede si ada, dị ka ọma, nke iwu ma ọ bụ nke ọṅụ."], ["Ihe nnọchi (placeholder)", "akara dị ka [ụbọchị] nke ị ga-edochi n'onwe gị emesịa."]],
          slides: [
            { title: "Akụkụ atọ nke ezigbo prompt", bullets: ["1. Ihe ị chọrọ na onye ga-agụ ya", "2. Ọnọdụ ahụ, n'enweghị ozi nzuzo", "3. Ogologo, olu na ụdị"] },
            { title: "Nke na-adịghị ike na nke doro anya", bullets: ["Nke na-adịghị ike: \"akwụkwọ ozi ekele\"", "Nke doro anya: email ekele nye ndị ọrụ afọ ofufo 25 nyere aka n'inye nri", "Ezinụlọ 140 nwetara nri, olu ọma, ihe na-erughị okwu 120"] },
            { title: "Jiri ihe nnọchi", bullets: ["[ụbọchị], [aha], [ego]", "Ị ga-edejupụta ha n'onwe gị emesịa"] }
          ],
          tryIt: "Were ọrụ ahụ i gbara gburugburu na Nkuzi 1. Dee prompt nwere akụkụ atọ maka ya, na-eji ihe nnọchi maka aha na ụbọchị, ma zipu ya. Chekwaa azịza ya.",
          youCanNow: "ide prompt doro anya nwere akụkụ atọ maka ọrụ ederede otu na-adịghị achọ uru.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ prompt?", options: ["Ihe ị na-ede nye ngwa enyemaka AI", "Azịza AI", "Okwuntughe gị", "Fọm grant"], answer: 0, why: "Ihe ị na-ede ka a na-akpọ prompt." },
            { objective: "O3", q: "Ị chọrọ mpempe akwụkwọ ọkwa (flyer) maka nri abalị ụka. Kedu prompt kacha mma?", options: ["\"flyer\"", "\"Dee flyer nke ọṅụ maka nri abalị ụka anyị na [ụbọchị] n'elekere 6 nke mgbede, n'efu maka ezinụlọ, ihe na-erughị okwu 60.\"", "\"Mee ihe mara mma\"", "\"Nri abalị\""], answer: 1, why: "Ezigbo prompt na-ekwu ihe ị chọrọ, ọnọdụ ahụ na ụdị azịza." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe AI nwere ike imere otu na-adịghị achọ uru",
        questions: [
          { objective: "O1", q: "Kedu ọrụ dabara ngwa enyemaka AI n'otu na-adịghị achọ uru?", options: ["Ide ihe mbụ nke email ekele nye ndị ọrụ afọ ofufo", "Ikpebi ezinụlọ ga-enweta nri", "Ịbịanye aka na nkwekọrịta grant", "Ịkwado mmefu ego (budget)"], answer: 0, why: "AI maara ide ihe mbụ; ndị mmadụ na-ekpebi ma na-abịanye aka." },
          { objective: "O1", q: "AI nyere azịza o ji n'aka gbasara ụbọchị ikpeazụ nke grant. Gịnị ka ị ga-eme?", options: ["Kwere ya", "Lelee peeji gọọmentị nke onye na-enye grant ahụ", "Tinye ya na soshal midia", "Zigara ya ndị bọọdụ dị ka nke ikpeazụ"], answer: 1, why: "AI nwere ike ime mperi mgbe ọ dị ka o ji n'aka; lelee isi iyi gọọmentị." },
          { objective: "O2", q: "Tupu iji AI maka ozi ọrụ, onye ka ị ga-ajụ?", options: ["Onye nyere onyinye", "Onye ị na-amaghị n'ịntanetị", "Onye na-ahụ maka akaụntụ ma ọ bụ onye ndu otu gị", "Ọ dịghị onye"], answer: 2, why: "Otu gị nwere ike inwe ngwa a kwadoro nwere nchekwa nzuzo ka mma." },
          { objective: "O3", q: "Kedu prompt kacha doo anya?", options: ["\"akwụkwọ ozi\"", "\"enyemaka maka ndị ọrụ afọ ofufo\"", "\"mee akwụkwọ akụkọ anyị\"", "\"Dee email ekele ọma nwere okwu 100 nye ndị ọrụ afọ ofufo 25 nyere ezinụlọ 140 nri.\""], answer: 3, why: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ ahụ na ụdị azịza." },
          { objective: "O3", q: "Gịnị bụ ihe nnọchi na prompt?", options: ["Akara dị ka [ụbọchị] nke ị ga-edejupụta emesịa", "Okwuntughe", "Aha zuru ezu nke onye nyere onyinye", "Ụdị app"], answer: 0, why: "Ihe nnọchi na-edebe ezi ozi n'ebe ọ na-adịghị ma na-echetara gị ihe ị ga-edejupụta." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI nke ọma n'enweghị nsogbu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime ka ihe mbụ e dere ka mma",
          minutes: 4,
          goal: "Jiri arịrịọ nsochi mee ka ihe mbụ e dere bụrụ nke dabara otu gị.",
          text: [
            "Azịza mbụ bụ ihe mbụ (draft). Ngwa enyemaka ahụ na-echeta mkparịta ụka ahụ, ya mere ị nwere ike ịrịọ ya ka ọ gbanwee ihe otu n'otu oge.",
            "Arịrịọ nsochi bara uru: \"Mee ka ọ dị mkpụmkpụ.\" \"Mee ka olu ya dị ọma karị.\" \"Tinye otu ahịrịokwu banyere ihe mere ndị ọrụ afọ ofufo ji dị mkpa n'ọrụ anyị.\" \"Dee ya n'ọkwa ịgụ akwụkwọ klas 6.\" \"Nye m ya n'asụsụ Spanish.\"",
            "Wee mee ka ọ bụrụ nke gị. Tinye ezi aha na ozi n'onwe gị, mgbe i detuchara ederede ahụ site na ngwa AI, ma gụọ ya dị ka a ga-asị na ị bụ onye ọrụ afọ ofufo ma ọ bụ onye nyere onyinye na-anata ya."
          ],
          steps: ["Gụọ ihe mbụ e dere.", "Họrọ otu ihe kacha mkpa ka a gbanwee.", "Rịọ maka mgbanwe ahụ.", "Megharịa ya, wee detuo ederede ahụ pụọ ma tinye ezi ozi n'onwe gị."],
          words: [["Arịrịọ nsochi (follow-up)", "arịrịọ nke abụọ na-ewuli elu n'azịza i nwetara."], ["Ọkwa ịgụ akwụkwọ", "otu ederede si dị mfe ịgụ; klas dị ala dị mfe karị."]],
          slides: [
            { title: "Azịza mbụ bụ ihe mbụ (draft)", bullets: ["Rịọ maka otu mgbanwe n'otu oge", "Ọ na-echeta otu mkparịta ụka ahụ"] },
            { title: "Arịrịọ nsochi na-arụ ọrụ", bullets: ["\"Mee ka ọ dị mkpụmkpụ.\"", "\"Mee ka olu ya dị ọma karị.\"", "\"Tinye otu ahịrị banyere ọrụ anyị.\"", "\"Nye m ya n'asụsụ Spanish.\""] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Detuo ederede ahụ pụọ na ngwa AI", "Tinye ezi aha na ozi n'onwe gị", "Gụọ ya dị ka onye na-anata ya"] }
          ],
          tryIt: "Were ihe mbụ i chekwara na Nkuzi 3. Rịọ maka mgbanwe abụọ, otu n'otu oge. Wee detuo ụdị kacha mma n'ime akwụkwọ ma tinye otu ozi gbasara gị n'onwe gị.",
          youCanNow: "ime ka ihe AI dere ka mma site n'arịrịọ nsochi doro anya, ma mechaa ya n'olu otu gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere ị ga-eji rịọ maka mgbanwe otu n'otu oge?", options: ["AI na-echefu ihe niile mgbe ozi ọ bụla gasịrị", "Mgbanwe na-efu ego", "Ngwa enyemaka ahụ na-echeta mkparịta ụka ahụ", "A na-ekwe naanị otu mgbanwe kwa ụbọchị"], answer: 2, why: "Ngwa enyemaka ahụ na-echeta mkparịta ụka ahụ, ya mere ị nwere ike ịrịọ maka mgbanwe otu n'otu oge." },
            { objective: "O4", q: "Ihe e dere dị mma mana ọtụtụ ndị na-agụ ya na-asụ Spanish. Gịnị ka ị ga-arịọ?", options: ["\"Mee ka ọ dị ogologo.\"", "\"Tinyekwuo eziokwu.\"", "\"Jiri okwu ukwu.\"", "\"Nye m ya n'asụsụ Spanish.\""], answer: 3, why: "Arịrịọ nsochi nwere ike ịrịọ ụdị ya n'asụsụ ọzọ obodo gị na-asụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele eziokwu tupu i zipu",
          minutes: 5,
          goal: "Chọta ma lelee eziokwu ọ bụla dị n'ihe AI dere tupu ọ ruo ndị nyere onyinye, ndị ọrụ afọ ofufo ma ọ bụ ọha.",
          text: [
            "Ngwa enyemaka AI na-echepụta ihe mgbe ụfọdụ: ụbọchị ezighi ezi, ọnụ ọgụgụ (statistic) na-adịghị adị, ma ọ bụ iwu ụtụ isi (tax) mere agadi. A na-akpọ nke a hallucination.",
            "Lelee mgbe niile nọmba, ụbọchị, aha, okwu e hotara, ọnụ ọgụgụ, okwu gbasara ụtụ isi na iwu, na ihe ọ bụla gbasara ihe onyinye na-akwụ ụgwọ ya. Lelee ha na ndekọ nke gị, n'isi iyi gọọmentị (ọtụtụ mgbe peeji .gov), ma ọ bụ n'aka onye maara ya.",
            "Ekwela ka AI chepụta nọmba mmetụta (impact number) mgbe ọ bụla. Ọ bụrụ na ihe e dere kwuru \"anyị nyere ezinụlọ 500 aka\" ma ndekọ gị kwuru 140, jiri 140. Nọmba eziokwu na-echebe ntụkwasị obi ndị nyere onyinye."
          ],
          steps: ["Mee ka nọmba, ụbọchị, aha na nkwupụta ọ bụla dị n'ihe e dere pụta ìhè.", "Lelee nke ọ bụla na ndekọ gị ma ọ bụ n'isi iyi gọọmentị.", "Dozie ma ọ bụ wepụ ihe ọ bụla ị na-enweghị ike ịkwado.", "Rịọ onye nke abụọ ka ọ gụọ ihe ọ bụla na-aga n'ihu ọha."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Nọmba mmetụta (impact number)", "ọnụ ọgụgụ ihe mmemme gị mezuru, dị ka ezinụlọ e nyere aka."]],
          slides: [
            { title: "AI nwere ike ịchepụta ihe", bullets: ["Ụbọchị na nọmba ezighi ezi", "Ọnụ ọgụgụ na-adịghị adị", "Iwu ụtụ isi ma ọ bụ iwu ochie"] },
            { title: "Lelee mgbe niile", bullets: ["Nọmba, ụbọchị, aha, okwu e hotara", "Okwu gbasara ụtụ isi na iwu", "Ihe onyinye na-akwụ ụgwọ ya"] },
            { title: "Nọmba eziokwu", bullets: ["Jiri ndekọ nke gị", "Ekwela ka AI chepụta nọmba mmetụta", "Onye nke abụọ na-agụ ihe na-aga n'ihu ọha"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI: \"Dee ahịrịokwu abụọ banyere mkpa ụlọ nri (food bank) dị na mpaghara m.\" Mee ka nọmba ọ bụla o nyere pụta ìhè. Gbalịa ịchọta nke ọ bụla na saịtị gọọmentị. Wepụ nke ọ bụla ị na-enweghị ike ịkwado.",
          youCanNow: "ịhụ eziokwu dị n'ihe AI dere ma lelee ha tupu i zipu.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ hallucination n'AI?", options: ["Ederede dị ka eziokwu mana e chepụtara ya", "Mperi nsụpe", "Azịza na-abịa nwayọọ", "Azịza dị mkpụmkpụ nke ukwuu"], answer: 0, why: "AI na-echepụta ụbọchị, ọnụ ọgụgụ ma ọ bụ iwu mgbe ụfọdụ; a na-akpọ nke a hallucination." },
            { objective: "O5", q: "Ihe e dere kwuru na onyinye $25 \"na-azụ otu ezinụlọ otu ọnwa.\" Mmemme gị ekwughị nke ahụ mgbe ọ bụla. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ndị nyere onyinye na-enwe mmasị na ya", "Wepụ ya ma ọ bụ dochie ya na eziokwu site na ndekọ gị", "Gbanwee ya ka ọ bụrụ $20", "Jụọ AI ma ọ bụ eziokwu"], answer: 1, why: "Ekwela ka AI chepụta ihe onyinye na-akwụ ụgwọ ya; lelee ndekọ nke gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe ozi nzuzo ndị nyere onyinye, ndị ọrụ afọ ofufo na ndị a na-enyere aka",
          minutes: 5,
          goal: "Jiri AI n'etinyeghị ozi nzuzo gbasara ndị nyere onyinye, ndị ọrụ afọ ofufo ma ọ bụ ndị ị na-enyere aka n'ime ya.",
          text: [
            "Ndị mmadụ tụkwasịrị otu gị obi n'ozi ha. Etinyela ihe ndị a n'ime ngwa AI: aha ndị nyere onyinye na ego ha nyere, adreesị ụlọ, nọmba ekwentị, ozi ụlọ akụ ma ọ bụ kaadị, ndetu okwu onye a na-enyere aka (case notes), ozi ahụike, ọnọdụ mbata obodo (immigration) ma ọ bụ ozi gbasara ụmụaka.",
            "Ị ka nwere ike inweta enyemaka. Kọwaa ọnọdụ ahụ n'ozuzu ma jiri ihe nnọchi: \"Dee ozi ekele nye [aha onye nyere onyinye] maka onyinye [ego] nye mmemme ndị ntorobịa anyị.\" Dejupụta ezi ozi mgbe i detuchara ihe e dere pụọ.",
            "Gbasoo iwu nzuzo otu gị, ma jụọ onye ndu ma ọ bụrụ na i jighị n'aka. Mgbe obi abụọ dị, hapụ ya."
          ],
          steps: ["Tupu i zipu prompt, gụọ ya maka aha na ozi nzuzo.", "Dochie nke ọ bụla na ihe nnọchi.", "Tinye ezi ozi naanị mgbe i detuchara ihe e dere pụọ na ngwa AI.", "Gbasoo iwu nzuzo otu gị."],
          words: [["Ozi nzuzo", "ozi nwere ike igosi onye mmadụ bụ ma ọ bụ mebie ya ma ọ bụrụ na e kesaa ya, dị ka adreesị ma ọ bụ ego onyinye."], ["Iwu nzuzo (privacy policy)", "iwu e dere ede nke otu gị maka otu esi elekọta ozi gbasara mmadụ."]],
          slides: [
            { title: "Etinyela ihe ndị a n'ime AI", bullets: ["Aha ndị nyere onyinye na ego ha nyere", "Adreesị, nọmba ekwentị, ozi ụlọ akụ", "Ndetu okwu, ozi ahụike ma ọ bụ immigration"] },
            { title: "Jiri ihe nnọchi kama", bullets: ["\"Kelee [aha onye nyere onyinye] maka [ego]\"", "Dejupụta ezi ozi mgbe i detuchara ya pụọ"] },
            { title: "Mgbe obi abụọ dị", bullets: ["Hapụ ya", "Gbasoo iwu nzuzo gị", "Jụọ onye ndu"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee ozi ekele nye ndị ọrụ afọ ofufo site na mmemme gara aga. Jiri prompt nwere akụkụ atọ na ihe nnọchi, rịọ maka mgbanwe abụọ, lelee eziokwu ọ bụla na ndekọ gị, ma dozie ya ka ọ dị ka otu gị.",
          youCanNow: "iji AI maka ezi ederede otu na-adịghị achọ uru ma na-echebe nzuzo ndị ị na-enyere aka.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke dị mma itinye na prompt AI?", options: ["Aha onye nyere onyinye na ego o nyere", "Ndetu okwu onye a na-enyere aka", "\"Kelee [aha onye nyere onyinye] maka onyinye [ego] nye mmemme ndị ntorobịa anyị.\"", "Ụlọ akwụkwọ na adreesị nwatakịrị"], answer: 2, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị ozi nzuzo." },
            { objective: "O6", q: "I jighị n'aka ma akụkọ onye ọrụ afọ ofufo ọ bụ ihe nzuzo nke ukwuu itinye n'AI. Gịnị ka ị ga-eme?", options: ["Tinye ya; AI bụ ihe nzuzo", "Tinye naanị ọkara ya", "Buru ụzọ kesaa ya na soshal midia", "Hapụ ya ma jụọ onye ndu"], answer: 3, why: "Mgbe obi abụọ dị, hapụ ya, ma jụọ onye ndu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI nke ọma n'enweghị nsogbu",
        questions: [
          { objective: "O4", q: "Ihe e dere dị ka nke iwu nke ukwuu maka ndị ọrụ afọ ofufo ụka gị. Gịnị ka ị ga-eme?", options: ["Zipu ya otu o sila dị", "Rịọ: \"Mee ka olu ya dị ọma karị ma yikwuo okwu mmadụ\"", "Hichapụ ngwa AI ahụ", "Rịọ maka ụdị dị ogologo"], answer: 1, why: "Arịrịọ nsochi doro anya na-arịọ kpọmkwem mgbanwe ị chọrọ." },
          { objective: "O5", q: "Ihe AI dere kwuru na unu nyere ezinụlọ 500 aka. Ndekọ gị kwuru 140. Kedu nke ị ga-eji?", options: ["500, ọ na-ada mma karị", "Hapụ nọmba ahụ n'edoghị anya n'ụma", "140, site na ndekọ gị", "Rịọ AI ka ọ họrọ"], answer: 2, why: "Nọmba eziokwu site na ndekọ nke gị na-echebe ntụkwasị obi ndị nyere onyinye." },
          { objective: "O6", q: "Kedu n'ime ndị a ka ị na-ekwesịghị itinye n'ime ngwa AI?", options: ["\"Mee ka ọ dị mkpụmkpụ\"", "Aha mmemme inye nri gị", "Okwu \"daalụ\"", "Ndetu okwu onye a na-enyere aka"], answer: 3, why: "Ndetu okwu bụ ozi nzuzo gbasara ndị ị na-enyere aka." },
          { objective: "O6", q: "Kedu otu ị ga-esi kelee otu onye nyere onyinye n'ekesaghị ozi ya na AI?", options: ["Jiri ihe nnọchi dị ka [aha onye nyere onyinye] na [ego]", "Tinye ndekọ ya zuru ezu", "Jiri ozi ụlọ akụ ya", "Hapụ ozi ekele ahụ"], answer: 0, why: "Ihe nnọchi na-enweta gị ihe mbụ; ị na-etinye ezi ozi emesịa." },
          { objective: "O5", q: "Gịnị bụ hallucination n'AI?", options: ["Ụdị ihe ịchọ mma", "Ederede dị ka eziokwu mana e chepụtara ya", "Ntọala nzuzo", "Ịntanetị na-aga nwayọọ"], answer: 1, why: "AI nwere ike ịchepụta eziokwu ndị dị ka ezi ihe, ya mere ị na-elele ha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite AI maka Otu Na-adịghị Achọ Uru",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa ngwa enyemaka AI bụ:", options: ["Onye ọrụ afọ ofufo", "Ebe nchekwa ozi grant", "Mmemme kọmputa ị na-akparịta ụka na ya n'okwu nkịtị", "Ụlọ akụ"], answer: 2, why: "Ọ bụ mmemme ị na-ede ihe na ya ma ọ bụ gwa okwu, nke na-ede azịza." },
      { objective: "O1", q: "Kedu ọrụ otu na-adịghị achọ uru AI maara ime nke ọma?", options: ["Ịhọrọ ndị a ga-enyere aka", "Ịbịanye aka na nkwekọrịta", "Ịkwado ụgwọ ọnwa ndị ọrụ", "Ide ihe mbụ nke akwụkwọ akụkọ (newsletter)"], answer: 3, why: "Ihe mbụ bụ ike ya; mkpebi na-anọ n'aka ndị mmadụ." },
      { objective: "O1", q: "Onye na-eme mkpebi ikpeazụ mgbe ndị otu gị na-eji AI?", options: ["Ndị otu gị", "AI", "Ụlọ ọrụ software ahụ", "Ndị nyere onyinye"], answer: 0, why: "Mmadụ na-enyocha ma na-ekpebi mgbe niile." },
      { objective: "O2", q: "Kedu nke bụ adreesị weebụ nke ngwa enyemaka AI n'efu?", options: ["donate-now.win", "gemini.google.com", "freegrants.xyz", "ọ dịghị nke ọ bụla n'ime ha"], answer: 1, why: "gemini.google.com bụ ezi adreesị Google maka Gemini." },
      { objective: "O2", q: "Gịnị mere ị ga-eji jụọ ngwa AI otu gị kwadoro?", options: ["Iji nweta mbelata ọnụ ahịa kọfị", "N'ihi na AI megidere iwu", "Ngwa ọrụ a kwadoro nwere ike ichebe ozi nke ọma karị", "Ọ dịghị mkpa"], answer: 2, why: "Akaụntụ ọrụ nwere ike inwe nchekwa nzuzo na iwu ọzọ." },
      { objective: "O2", q: "Na kọmputa ọfịs a na-ekerịta, mgbe i jiri AI mechaa, ị kwesịrị:", options: ["Ichekwa okwuntughe gị", "Ịhapụ ya ka ọ ghere oghe", "Ide okwuntughe gị n'akwụkwọ", "Ịpụ (sign out) na imechi browser"], answer: 3, why: "Ịpụ na-echebe akaụntụ gị." },
      { objective: "O3", q: "Ezigbo prompt nwere:", options: ["Ihe ị chọrọ, ọnọdụ ahụ na ụdị azịza", "Naanị otu okwu", "Ozi ụlọ akụ ndị nyere onyinye", "Okwuntughe gị"], answer: 0, why: "Akụkụ atọ ndị ahụ na-enweta ihe mbụ bara uru." },
      { objective: "O3", q: "Kedu prompt ga-enweta ncheta kacha mma maka ndị ọrụ afọ ofufo?", options: ["\"ncheta\"", "\"Dee ozi ederede enyi nwere okwu 80 na-echetara ndị ọrụ afọ ofufo nhicha ogige n'elekere 9 nke ụtụtụ Satọdee na ka ha bịa na glovu.\"", "\"ndị ọrụ afọ ofufo\"", "\"enyemaka\""], answer: 1, why: "Ọ na-enye mkpa, ọnọdụ na ụdị azịza." },
      { objective: "O3", q: "Gịnị ka [ụbọchị] pụtara na prompt?", options: ["Koodu nzuzo", "Ụbọchị ọmụmụ onye nyere onyinye", "Ihe nnọchi ị ga-edejupụta emesịa", "Mperi"], answer: 2, why: "Ihe nnọchi na-egosi ozi ị ga-etinye n'onwe gị." },
      { objective: "O4", q: "Ihe mbụ e dere dị ogologo nke ukwuu. Nzọụkwụ kacha mma ọzọ bụ:", options: ["Ịmalite otu ọhụrụ", "Iziga ya otu o sila dị", "Itinyekwu okwu", "Ịrịọ: \"Mee ka ọ dị mkpụmkpụ\""], answer: 3, why: "Arịrịọ nsochi na-arịọ mgbanwe ahụ." },
      { objective: "O4", q: "Olee mgbe ị ga-etinye ezi aha ndị nyere onyinye n'ozi ekele?", options: ["Mgbe i detuchara ihe e dere pụọ na ngwa AI", "Na prompt mbụ", "Ekelela ndị nyere onyinye mgbe ọ bụla", "Naanị na mkparịta ụka AI"], answer: 0, why: "Itinye ha na mpụga ngwa ahụ na-edebe ha na nzuzo." },
      { objective: "O4", q: "Kedu arịrịọ nsochi nwere ike inyere aka iru ọtụtụ ndị obodo gị?", options: ["\"Tinye okwuntughe m.\"", "\"Nye m ya n'asụsụ Spanish.\"", "\"Chepụta ọnụ ọgụgụ.\"", "\"Hichapụ mkparịta ụka ahụ.\""], answer: 1, why: "Ụdị a sụgharịrị asụgharị na-eru ọtụtụ ndị na-agụ ya; onye maara asụsụ ahụ nke ọma ka kwesịrị ilele ya." },
      { objective: "O5", q: "Kedu ihe ị ga-elele MGBE NIILE n'ihe AI dere?", options: ["Okwu ekele mmalite", "Ụdị mkpụrụ akwụkwọ (font)", "Nọmba, ụbọchị na nkwupụta", "Ọ dịghị ihe"], answer: 2, why: "Nọmba, ụbọchị na nkwupụta nwere ike ịbụ ihe e chepụtara." },
      { objective: "O5", q: "Ebee ka ị ga-elele okwu gbasara ụtụ isi ma ọ bụ iwu?", options: ["Mkparịta ụka AI ọzọ", "Nkwupụta na soshal midia", "Chepụta ya", "Isi iyi gọọmentị, ọtụtụ mgbe peeji .gov, ma ọ bụ onye ọkachamara"], answer: 3, why: "Isi iyi gọọmentị na ndị ọkachamara bụ ndị a pụrụ ịtụkwasị obi." },
      { objective: "O5", q: "Gịnị mere nọmba mmetụta ga-eji si na ndekọ gị?", options: ["Nọmba eziokwu na-echebe ntụkwasị obi ndị nyere onyinye", "Nọmba AI na-adị obere mgbe niile", "Ndị nyere onyinye anaghị agụ ha", "Ọ dị ngwa karị"], answer: 0, why: "Nọmba e chepụtara na-aghọgbu ndị nyere onyinye ma na-emebi ntụkwasị obi." },
      { objective: "O5", q: "Onye kwesịrị ịgụ ihe ọ bụla na-aga n'ihu ọha?", options: ["Ọ dịghị onye", "Onye nke abụọ n'otu gị", "Naanị AI", "Onye ọ bụla ị na-amaghị"], answer: 1, why: "Onye nke abụọ na-agụ ya na-ahụ mperi." },
      { objective: "O6", q: "Kedu nke bụ ozi nzuzo ị ga-edebe n'ebe AI na-adịghị?", options: ["Aha mmemme ukwu (gala) otu gị kwa afọ", "Okwu \"ọrụ anyị\"", "Adreesị ụlọ onye ọrụ afọ ofufo", "Adreesị weebụsaịtị ọha gị"], answer: 2, why: "Adreesị ụlọ bụ ozi nzuzo gbasara mmadụ." },
      { objective: "O6", q: "I jighị n'aka ma ihe ọ bụ ihe nzuzo nke ukwuu maka AI. Ị kwesịrị:", options: ["Itinye ya n'agbanyeghị", "Itinye ya n'ịntanetị", "Iziga ya ụlọ ọrụ AI ahụ n'email", "Ịhapụ ya ma jụọ onye ndu"], answer: 3, why: "Mgbe obi abụọ dị, hapụ ya." },
      { objective: "O6", q: "Kedu iwu e dere ede na-eduzi otu otu gị si elekọta ozi gbasara mmadụ?", options: ["Iwu nzuzo (privacy policy)", "Ndepụta nri", "Iwu T-shirt ndị ọrụ afọ ofufo", "Maapụ ebe a na-adọba ụgbọala"], answer: 0, why: "Iwu nzuzo na-edebe iwu maka ozi gbasara mmadụ." },
      { objective: "O6", q: "Ozi ahụike ma ọ bụ immigration nke onye a na-enyere aka kwesịrị:", options: ["Ka e tinye ya iji nweta azịza ka mma", "Ka e debe ya n'ebe ngwa AI na-adịghị", "Ka e kesaa ya n'akwụkwọ akụkọ", "Ka e jiri ya mee ọmụmaatụ n'ịntanetị"], answer: 1, why: "Ha bụ ozi dị nro nke nwere ike imebi onye ahụ ma ọ bụrụ na e kesaa ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 9, 12, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Prompt nwere akụkụ atọ", objective: "O3", notYet: "Prompt ahụ edoghị anya, dịka ọmụmaatụ \"ozi ekele\".", meets: "Prompt ahụ na-ekwu ihe ị chọrọ, ọnọdụ ahụ na ụdị azịza.", exceeds: "Ọ na-akpọkwa aha onye ga-agụ ya na olu dabara otu ahụ." },
      { name: "Mgbanwe abụọ", objective: "O4", notYet: "Jiri ihe mbụ e dere otu o si dị.", meets: "Rịọrọ maka mgbanwe abụọ, otu n'otu oge, ozi ahụ wee ka mma.", exceeds: "Nwere ike ikwu ihe mgbanwe nke ọ bụla dozie." },
      { name: "Elelere eziokwu", objective: "O5", notYet: "E jiri nọmba, ụbọchị ma ọ bụ nkwupụta n'eleleghị ya.", meets: "Eziokwu na ụbọchị ọ bụla dabara na ndekọ otu ahụ n'onwe ya.", exceeds: "Dere ebe e lelere eziokwu nke ọ bụla." },
      { name: "Edebere nzuzo", objective: "O6", notYet: "Prompt ahụ nwere ozi nzuzo onye ọrụ afọ ofufo ma ọ bụ onye nyere onyinye.", meets: "Ọ dịghị ozi nzuzo na prompt; e jiri ihe nnọchi.", exceeds: "E tinyere ezi aha naanị mgbe e detuchara ihe e dere pụọ na ngwa AI." },
      { name: "Ọ dị ka anyị", objective: "O4", notYet: "Ozi ahụ dị n'ozuzu ma ọ bụ ọ dịghị ka otu ahụ.", meets: "E dozire ya ka o nwee olu ọma ma dị ka otu ahụ.", exceeds: "Onye nke abụọ n'otu ahụ gụrụ ya ma kwenye." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri AI maka ezi ozi otu na-adịghị achọ uru n'ime ụbọchị 30 (nnyocha nsochi)",
      "Otu ndị na-akọ na ha chekwara oge n'ozi ekele, ọkwa ma ọ bụ akwụkwọ akụkọ",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka otu na-adịghị achọ uru n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu, ma ọ bụ nke otu gị kwadoro: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Ndekọ otu gị maka mmemme gara aga, dị ka ọnụ ọgụgụ ndị ọrụ afọ ofufo na ezinụlọ e nyere aka",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ya dị ka ọmụmụ ihe (workshop) maka ndị ọrụ ma ọ bụ ndị ọrụ afọ ofufo: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ.",
      "Jụọ onye ndu otu ahụ ngwa AI a kwadoro tupu nnọkọ ahụ.",
      "Jiri ihe nnọchi n'omume niile; etinyela ezi ozi ndị nyere onyinye, ndị ọrụ afọ ofufo ma ọ bụ ndị a na-enyere aka mgbe ọ bụla.",
      "Hụ na onye ọ bụla na-amụ ihe pụrụ (sign out) na kọmputa a na-ekerịta tupu ọ pụọ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
