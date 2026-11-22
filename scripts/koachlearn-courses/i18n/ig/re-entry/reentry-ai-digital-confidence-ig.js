"use strict";

// Koach Learn course (Igbo translation of re-entry/reentry-ai-digital-confidence.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-ai-digital-confidence-ig",
  lang: "ig",
  translationOf: "reentry-ai-digital-confidence",
  category: "Re-Entry",
  name: "Mmalite AI na Obi Ike n'Ihe Dijitalụ",
  skills: "Imeghe ngwa enyemaka AI n'efu, Ịjụ ajụjụ doro anya, Ime ka azịza ka mma, Ịlele azịza, Ichebe ozi nzuzo gị",
  outcome: "iji ngwa enyemaka AI n'efu na ekwentị ma ọ bụ na kọmputa ọba akwụkwọ nweta enyemaka n'ọrụ ụbọchị niile: ịjụ ajụjụ doro anya, ime ka azịza ka mma, ịlele ya tupu i kwere ya, na idebe ozi nzuzo gị n'ebe ọ na-adịghị.",
  about: [
    "Teknụzụ nwere ike ịgbanwe nke ukwuu mgbe ị nọghị. Ihe ọmụmụ a na-amalite site na mbido ma na-aga nwayọọ, otu nzọụkwụ nta n'otu oge.",
    "Ị ga-amụta ihe ngwa enyemaka AI bụ, otu esi emeghe otu n'efu, otu esi arịọ ya enyemaka, otu esi elele ihe ọ gwara gị, na otu esi echebe ozi nzuzo gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI dee obere ozi nwere nkwanye ugwu, na-ajụ otu azụmahịa ma ọ na-ewe ndị ọrụ. Rịọ ya n'okwu dị mfe, rịọ maka otu mgbanwe ga-eme ka ọ ka mma, lelee na o nweghị ozi nzuzo ọ bụla n'ime ya, ma gụpụta ya n'olu dị elu ka ị hụ na ọ dị ka okwu gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-alọta ụlọ site n'ụlọ mkpọrọ (re-entry). Ọtụtụ nọrọ ebe ahụ ọtụtụ afọ mgbe smartphone na ngwa AI gbanwere; ụfọdụ ejibeghị smartphone mgbe ọ bụla. Afọ ndụ ha dị iche iche nke ukwuu, ọtụtụ n'ime ha na-achọ ọrụ na ebe obibi, ma na-ejikọta ọzọ na ezinụlọ ha.",
    startingPoint: "Ha nwere ike ịkpọ oku ma zipu ozi n'ekwentị nkịtị. Ha anaghị eji ngwa (app), web browser ma ọ bụ ngwa enyemaka AI, ma ọ bụ na-eji ha ntakịrị. Ụfọdụ enweghị obi ike n'ịgụ akwụkwọ ma ọ bụ n'iji teknụzụ.",
    gap: "Ugbu a, ndị were mmadụ n'ọrụ, ọfịs ebe obibi na ọrụ ndị ọzọ na-atụ anya ka ndị mmadụ mee ihe n'ịntanetị. Ndị na-amụ ihe kwesịrị iji ngwa enyemaka AI n'efu n'enweghị nsogbu maka enyemaka kwa ụbọchị (ozi, ịkọwa akwụkwọ ozi, ndepụta) ma ghara ikwe ka azịza ezighi ezi ma ọ bụ aghụghọ duhie ha. Ime nke a na-enye ha obi ike ma na-eme ka ịchọ ọrụ na ebe obibi dị ngwa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: ụfọdụ nwere naanị ekwentị nkịtị ma ọ bụ kọmputa ọba akwụkwọ nwere oge a kara aka",
      "Oge: nkuzi nkeji 4 ruo 5 nke dabara n'etiti oge ịhụ ndị ọrụ na oge ọrụ",
      "Iwu ụfọdụ parole ma ọ bụ probation na-egbochi iji ịntanetị; onye ọ bụla na-agbaso iwu nke ya",
      "Ihe egwu dị elu nke aghụghọ na nzuzo: enweghị ezi nọmba nzuzo ọ bụla n'ọrụ omume ọ bụla"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ihuenyo mmetụ (touchscreen) mgbe ọ bụla nwere ike ibu ụzọ were \"Iji Smartphone na Tablet\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ ise", action: "ịmata ọrụ kwa ụbọchị ndị ngwa enyemaka AI nwere ike inyere aka na ndị chọrọ mmadụ ma ọ bụ isi iyi gọọmentị", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji ekwentị ma ọ bụ kọmputa ọba akwụkwọ", action: "imeghe ngwa enyemaka AI n'efu site na app ma ọ bụ weebụsaịtị ya nke ezi ụlọ ọrụ nwere ya, zipu ozi mbụ, ma pụọ (sign out) mgbe i mechara", standard: "n'enweghị onye nyere gị aka" },
    { id: "O3", condition: "Mgbe e nyere gị ezi ọrụ site na ndụ gị", action: "ide prompt nke na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza ahụ dị", standard: "nke mere na azịza mbụ ga-aba uru" },
    { id: "O4", condition: "Mgbe e nyere gị azịza AI na-adabaghị nke ọma", action: "ịrịọ ya mgbanwe site n'ajụjụ nsochi, otu n'otu oge", standard: "ruo mgbe ọ dị mkpụmkpụ, doo anya ma dabara mkpa gị, n'ime nnwale atọ ma ọ bụ ole na-erughị ya" },
    { id: "O5", condition: "Mgbe e nyere gị azịza AI nwere eziokwu dị ka nọmba ekwentị, adreesị ma ọ bụ iwu", action: "ịlele eziokwu ahụ na weebụsaịtị gọọmentị ma ọ bụ nke ụlọ ọrụ ahụ n'onwe ya (.gov ma ọ bụ saịtị nke ụlọ ọrụ ahụ)", standard: "tupu i jiri ya" },
    { id: "O6", condition: "Mgbe ị na-ede prompt ma ọ bụ nweta ozi na-eme ngwa ngwa", action: "idebe ozi nzuzo n'ebe ọ na-adịghị ma hụ ihe ịdọ aka na ntị nke aghụghọ", standard: "n'ekesaghị nọmba nzuzo, okwuntughe ma ọ bụ koodu ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmalite iji AI",
      lessons: [
        {
          title: "Ihe ngwa enyemaka AI bụ, na ihe ọ bụghị",
          objectives: ["O1"],
          minutes: 4,
          goal: "Kọwaa n'okwu nke gị ihe ngwa enyemaka AI nwere ike ime na ihe ọ na-enweghị ike ime.",
          text: [
            "Ngwa enyemaka AI bụ mmemme kọmputa ị nwere ike ide ihe na ya ma ọ bụ gwa ya okwu n'asụsụ nkịtị. Ị jụọ ajụjụ, ọ dee azịza. Ndị a ma ama na-akwụghị ụgwọ gụnyere ChatGPT, Microsoft Copilot na Google Gemini.",
            "Ọ mụtara ihe site n'ọtụtụ ihe e dere ede, ya mere ọ maara ịkọwa ihe, ide ihe nkenke mbụ (draft), ime ndepụta na atụmatụ, na ịgbanwe okwu siri ike ka ọ bụrụ okwu dị mfe.",
            "Ọ bụghị mmadụ, ọka iwu, dọkịta ma ọ bụ ọfịs gọọmentị. Ọ maghị gị, ọ nwekwara ike ime mperi, ọbụlagodi mgbe ọ dị ka o ji n'aka. Ị ka bụ onye isi: gị na-ekpebi ihe ị ga-ajụ, gị na-ekpebikwa ihe ị ga-ekwere."
          ],
          words: [["AI", "mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ, dị ka ide ihe ma ọ bụ ịza ajụjụ."], ["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu."]],
          slides: [
            { title: "Ngwa enyemaka AI bụ...", bullets: ["Mmemme kọmputa ị na-akparịta ụka na ya", "Ị na-ede ma ọ bụ kwuo ajụjụ n'okwu nkịtị", "Ọ na-ede azịza n'ime sekọnd ole na ole"] },
            { title: "Ihe ọ maara ime nke ọma", bullets: ["Ịkọwa ihe n'okwu dị mfe", "Ide ihe mbụ: akwụkwọ ozi, ozi, résumé", "Ime ndepụta, atụmatụ na usoro oge"] },
            { title: "Ọ BỤGHỊ", bullets: ["Mmadụ, ọka iwu, dọkịta ma ọ bụ ọfịs gọọmentị", "Onye na-eziri ezi mgbe niile, ọbụlagodi mgbe o ji n'aka", "Onye isi: gị bụ onye isi"] }
          ],
          tryIt: "Dee ihe atọ na ndụ gị nke ngwa enyemaka AI nwere ike inyere gị aka n'izu a, dị ka ndepụta ihe ị ga-azụ n'ahịa, ozi i ga-ezigara onye ezinụlọ gị, ma ọ bụ ịkọwa akwụkwọ ozi i nwetara.",
          youCanNow: "ịkọwa ihe ngwa enyemaka AI bụ, ịkpọ aha ihe atọ ọ nwere ike inyere aka, na ikwu ihe mere i ji ka na-elele ihe ọ gwara gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ ngwa enyemaka AI nwere ike inyere aka?", options: ["Ide ndepụta ihe ị ga-azụ n'ahịa site na nri ị chọrọ isi", "Ịbịanye aka n'akwụkwọ iwu n'aha gị", "Ịkwụ ụgwọ gị site n'ụlọ akụ gị", "Ịga ọhụhụ gị n'ọnọdụ gị"], answer: 0, why: "Ngwa enyemaka AI nwere ike ide ihe ma kọwaa ihe; ọ pụghị ịbịanye aka, kwụọ ụgwọ ma ọ bụ gaa ebe n'ọnọdụ gị." },
            { objective: "O1", q: "Ngwa enyemaka AI gwara gị ụbọchị ị ga-aga ụlọikpe. Gịnị bụ eziokwu?", options: ["Ọ na-eziri ezi mgbe niile n'ihi na ọ bụ kọmputa", "O nwere ike ime mperi, ya mere lelee ya n'ụlọikpe", "Ọ bụ naanị AI nwere ike ịgbanwe ụbọchị ahụ", "Ọ dịghị mkpa ka i dee ya"], answer: 1, why: "AI nwere ike ịdị ka o ji n'aka ma ka mehie; ụbọchị na iwu na-esi n'ọfịs gọọmentị." }
          ]
        },
        {
          title: "Imeghe ngwa enyemaka AI n'efu na ekwentị ma ọ bụ kọmputa ọba akwụkwọ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Meghee ngwa enyemaka AI n'efu ma chọta igbe ebe ị na-ede ihe.",
          text: [
            "Ị nwere ike iji ngwa enyemaka AI na smartphone ma ọ bụ na kọmputa ọ bụla nwere ịntanetị, dị ka nke dị n'ọba akwụkwọ ọha ma ọ bụ n'ebe a na-enyere ndị mmadụ aka ịchọ ọrụ.",
            "Na ekwentị: meghee ụlọ ahịa app (Google Play na Android, App Store na iPhone), chọọ aha ngwa enyemaka ahụ, ma wụnye app nke ezi ụlọ ọrụ mere (OpenAI maka ChatGPT, Microsoft maka Copilot, Google maka Gemini). Wụnye naanị site n'ụlọ ahịa app gọọmentị ekwentị ahụ.",
            "Na kọmputa: meghee web browser ma dee adreesị ya: chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com. Ụfọdụ na-ekwe ka ị kparịta ụka n'enweghị akaụntụ; ụfọdụ na-arịọ ka ị banye (sign in).",
            "Na kọmputa ọha ma ọ bụ nke ọba akwụkwọ, ekwela ka browser ahụ chekwaa okwuntughe gị, ma pụọ (sign out) ma mechie browser ahụ mgbe i mechara."
          ],
          steps: ["Họrọ ekwentị ma ọ bụ kọmputa nwere ịntanetị.", "Ekwentị: wụnye ezi app site n'ụlọ ahịa app. Kọmputa: dee adreesị weebụ na browser.", "Chọọ igbe ozi dị n'akụkụ ala ihuenyo. Ọ na-ekwukarị \"Ask anything\" ma ọ bụ \"Message\" (n'asụsụ bekee).", "Na kọmputa ọha: pụọ ma mechie browser mgbe i mechara."],
          words: [["Web browser", "mmemme ị na-eji eleta weebụsaịtị, dị ka Chrome, Edge ma ọ bụ Safari."], ["Ụlọ ahịa app (App store)", "ebe gọọmentị ekwentị ahụ ebe ị na-enweta app n'enweghị nsogbu."]],
          slides: [
            { title: "Ebe ị nwere ike iji ya", bullets: ["Smartphone gị", "Kọmputa ọba akwụkwọ ọha", "Kọmputa n'ebe enyemaka ọrụ ma ọ bụ ebe enyemaka re-entry"] },
            { title: "Na ekwentị", bullets: ["Meghee ezi ụlọ ahịa app", "Chọọ aha ngwa enyemaka ahụ", "Wụnye app nke ezi ụlọ ọrụ mere"] },
            { title: "Na kọmputa", bullets: ["Meghee web browser", "Dee chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com", "Chọta igbe ozi dị n'ala"] },
            { title: "Na kọmputa ọha", bullets: ["Echekwala okwuntughe gị", "Pụọ (sign out) mgbe i mechara", "Mechie browser"] }
          ],
          tryIt: "Meghee otu ngwa enyemaka AI n'efu na ekwentị ma ọ bụ kọmputa. Chọta igbe ozi ma dee: Ndewo, ana m amụ iji AI. Gụọ ihe ọ zara.",
          youCanNow: "imeghe ngwa enyemaka AI n'efu na ekwentị ma ọ bụ kọmputa, ịchọta ebe ị ga-ede ihe, na ịhapụ kọmputa ọha n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O2", q: "Ị chọrọ app AI na ekwentị gị. Ebee ka ị ga-enweta ya?", options: ["Njikọ (link) n'ozi onye ị na-amaghị zitere", "Weebụsaịtị ọ bụla nwere bọtịnụ nbudata n'efu", "Ezi ụlọ ahịa app, site n'ezi ụlọ ọrụ", "Nke enyi gị zitere gị n'ozi"], answer: 2, why: "Ezi ụlọ ahịa app na aha ezi ụlọ ọrụ na-egbochi app adịgboroja ịbanye n'ekwentị gị." },
            { objective: "O2", q: "I jiri AI mechaa na kọmputa ọba akwụkwọ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Hapụ ya ka ọ ghere oghe maka onye ọzọ", "Gbanyụọ naanị ihuenyo", "Dee okwuntughe gị n'akwụkwọ", "Pụọ (sign out) ma mechie browser"], answer: 3, why: "Ịpụ na imechi browser na-egbochi onye ọzọ ịbanye na mkparịta ụka na akaụntụ gị." }
          ]
        },
        {
          title: "Ịjụ ajụjụ doro anya",
          objectives: ["O3"],
          minutes: 5,
          goal: "Dee arịrịọ doro anya nke ga-enweta azịza bara uru na nke mbụ.",
          text: [
            "Ihe ị na-ede nye ngwa enyemaka AI ka a na-akpọ prompt. Prompt doro anya na-enweta azịza ka mma.",
            "Ezigbo prompt nwere akụkụ atọ: ihe ị chọrọ, ntakịrị banyere ọnọdụ gị (na-enweghị ozi nzuzo), na otu ị chọrọ ka azịza ahụ dị. Dịka ọmụmaatụ: \"Aga m amalite ọrụ ọhụrụ n'ụlọ nkwakọba ngwaahịa na Mọnde n'elekere 7 nke ụtụtụ. Meere m ndepụta dị mfe maka abalị tupu ụbọchị ahụ. Jiri ahịrịokwu dị mkpụmkpụ.\"",
            "Prompt na-adịghị ike dị nkenke nke ukwuu, dị ka \"ndụmọdụ ọrụ\". Ngwa enyemaka ahụ ga-echepụta ihe ị pụtara, ya mere azịza ya ga-adị n'ozuzu."
          ],
          steps: ["Kwuo ihe ị chọrọ.", "Tinye ntakịrị banyere ọnọdụ gị, na-enweghị ozi nzuzo.", "Kwuo otu ị chọrọ ka azịza dị: mkpụmkpụ, okwu dị mfe, nzọụkwụ, ndepụta ma ọ bụ tebụl."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."]],
          slides: [
            { title: "Prompt bụ ihe ị na-ede", bullets: ["Prompt doro anya = azịza ka mma", "Prompt dị nkenke, na-edoghị anya = azịza n'ozuzu"] },
            { title: "Akụkụ atọ nke ezigbo prompt", bullets: ["1. Ihe ị chọrọ", "2. Ntakịrị banyere ọnọdụ gị", "3. Otu ị chọrọ ka azịza dị"] },
            { title: "Nke na-adịghị ike na nke doro anya", bullets: ["Nke na-adịghị ike: \"ndụmọdụ ọrụ\"", "Nke doro anya: \"Aga m amalite ọrụ n'ụlọ nkwakọba ngwaahịa na Mọnde n'elekere 7 nke ụtụtụ.", "Meere m ndepụta maka abalị tupu ụbọchị ahụ.", "Jiri ahịrịokwu dị mkpụmkpụ.\""] }
          ],
          tryIt: "Họrọ otu ezi ọrụ site na ndepụta gị na Nkuzi 1. Dee prompt nwere akụkụ atọ ahụ niile, zipu ya, ma gụọ azịza ya.",
          youCanNow: "ide prompt nwere ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị.",
          quickCheck: [
            { objective: "O3", q: "Kedu prompt nwere akụkụ atọ niile: ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị?", options: ["\"Nyere m aka.\"", "\"Enwere m ajụjụ ọnụ maka ọrụ n'ụlọ nkwakọba ngwaahịa na Tuzde. Nye m ajụjụ 5 a na-ajụkarị n'obere ndepụta.\"", "\"Dee ndepụta.\"", "\"Ajụjụ ọnụ.\""], answer: 1, why: "Ọ na-ekwu ihe ị chọrọ (ajụjụ), ọnọdụ gị (ajụjụ ọnụ ụlọ nkwakọba ngwaahịa na Tuzde) na ụdị azịza (obere ndepụta nke 5)." },
            { objective: "O3", q: "Prompt gị na-ekwu ihe ị chọrọ na ọnọdụ gị. Gịnị fọdụrụ?", options: ["Otu ị chọrọ ka azịza dị, dị ka nzọụkwụ mkpụmkpụ ma ọ bụ ndepụta", "Aha gị zuru ezu na ụbọchị ọmụmụ gị", "Ozi ekele", "Ọ dịghị ihe fọdụrụ; o zuru ezu"], answer: 0, why: "Ikwu otu ị chọrọ ka azịza dị (mkpụmkpụ, dị mfe, nzọụkwụ, ndepụta) bụ akụkụ nke atọ nke prompt doro anya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmalite iji AI",
        questions: [
          { objective: "O1", q: "Gịnị bụ ngwa enyemaka AI?", options: ["Mmadụ na-aza ozi gị", "Mmemme kọmputa ị na-akparịta ụka na ya n'okwu nkịtị", "Weebụsaịtị gọọmentị", "Ụdị ekwentị"], answer: 1, why: "Ngwa enyemaka AI bụ mmemme kọmputa ị na-ede ihe na ya ma ọ bụ gwa okwu; ọ na-ede azịza." },
          { objective: "O1", q: "Ngwa enyemaka AI dị ka o ji azịza ya n'aka nke ukwuu. Gịnị ka ị ga-eme?", options: ["Kwere ya, n'ihi na o ji n'aka", "Ejikwala AI ọzọ", "Gwa enyi gị ka o kwere ya maka gị", "Ka lelee ya, n'ihi na o nwere ike ime mperi"], answer: 3, why: "AI nwere ike ime mperi ọbụlagodi mgbe o ji n'aka. Ị ka bụ onye isi, ị na-elelekwa." },
          { objective: "O2", q: "Ebee ka ị ga-esi wụnye app AI na ekwentị?", options: ["Site n'ezi ụlọ ahịa app, nke ezi ụlọ ọrụ mere", "Site na weebụsaịtị ọ bụla", "Site na njikọ n'ozi ederede", "Site na mgbasa ozi na-apụta na mberede"], answer: 0, why: "Ezi ụlọ ahịa app na app nke ezi ụlọ ọrụ bụ nhọrọ n'enweghị nsogbu." },
          { objective: "O2", q: "I jiri AI na kọmputa ọba akwụkwọ. Gịnị ka ị ga-eme mgbe i mechara?", options: ["Hapụ ya ka ọ ghere oghe maka onye ọzọ", "Chekwaa okwuntughe gị ka ọ dị ngwa oge ọzọ", "Pụọ (sign out) ma mechie browser", "Gbanyụọ ịntanetị ọba akwụkwọ"], answer: 2, why: "Ịpụ na imechi browser na-egbochi onye ọzọ ịbanye n'akaụntụ gị." },
          { objective: "O3", q: "Kedu prompt kacha doo anya?", options: ["\"enyemaka\"", "\"ndụmọdụ ọrụ\"", "\"Aga m amalite ọrụ n'ụlọ nkwakọba ngwaahịa na Mọnde n'elekere 7 nke ụtụtụ. Mee ndepụta maka abalị tupu ụbọchị ahụ n'ahịrịokwu dị mkpụmkpụ.\"", "\"gwa m ihe niile\""], answer: 2, why: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ gị, na otu ị chọrọ ka azịza dị." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI n'obi ike",
      lessons: [
        {
          title: "Ime ka azịza ka mma",
          objectives: ["O4"],
          minutes: 4,
          goal: "Jụọ ajụjụ nsochi iji mee ka azịza ka mma.",
          text: [
            "Ọ dịghị mkpa ka ị nabata azịza mbụ. Ngwa enyemaka AI na-echeta ihe i kwuru na mbụ n'otu mkparịta ụka ahụ, ya mere ị nwere ike ịrịọ ya ka ọ gbanwee azịza ya.",
            "Ajụjụ nsochi bara uru: \"Mee ka ọ dị mkpụmkpụ.\" \"Jiri okwu dị mfe karị.\" \"Kọwakwuo nzọụkwụ 2.\" \"Nye m ọmụmaatụ.\" \"Tinye ya na ndepụta.\" \"Mee ka o nwekwuo nkwanye ugwu.\"",
            "Ọ bụrụ na mkparịta ụka ahụ apụọ n'ụzọ, malite mkparịta ụka ọhụrụ ma dee prompt doro anya karị."
          ],
          steps: ["Gụọ azịza mbụ.", "Kpebie ihe ị chọrọ ka a gbanwee.", "Rịọ maka otu mgbanwe ahụ.", "Megharịa ya ruo mgbe azịza ahụ dabara gị."],
          words: [["Ajụjụ nsochi (follow-up)", "ajụjụ nke abụọ na-ewuli elu n'azịza i nwetara."]],
          slides: [
            { title: "Azịza mbụ bụ ihe mbụ (draft)", bullets: ["Ị nwere ike ịrịọ maka mgbanwe", "Ọ na-echeta otu mkparịta ụka ahụ"] },
            { title: "Ajụjụ nsochi na-arụ ọrụ", bullets: ["\"Mee ka ọ dị mkpụmkpụ.\"", "\"Jiri okwu dị mfe karị.\"", "\"Kọwakwuo nzọụkwụ 2.\"", "\"Nye m ọmụmaatụ.\""] },
            { title: "Ọ pụọla n'ụzọ?", bullets: ["Malite mkparịta ụka ọhụrụ", "Dee prompt doro anya karị"] }
          ],
          tryIt: "Were azịza i nwetara na Nkuzi 3. Rịọ maka mgbanwe abụọ, otu n'otu oge, dị ka \"mee ka ọ dị mkpụmkpụ\" wee \"jiri okwu dị mfe karị\". Tụnyere azịza mbụ na nke ikpeazụ.",
          youCanNow: "ime ka azịza AI ka mma site n'ịjụ ajụjụ nsochi doro anya.",
          quickCheck: [
            { objective: "O4", q: "Azịza ahụ na-eji okwu siri ike ịgụ. Gịnị ka ị ga-ezipu ọzọ?", options: ["\"Ọ dịghị mma. Nwaa ọzọ.\"", "Ọ dịghị ihe; mechie app ahụ", "\"Mee ka ọ dị ogologo.\"", "\"Jiri okwu dị mfe karị.\""], answer: 3, why: "Ajụjụ nsochi doro anya nke na-ekwu mgbanwe ị chọrọ na-edozi azịza ahụ n'amaliteghị ọzọ." },
            { objective: "O4", q: "Gịnị mere ị ga-eji rịọ maka mgbanwe otu n'otu oge?", options: ["AI nwere ike ịgụ naanị otu okwu n'otu oge", "Ị ga-ahụ ihe mgbanwe ọ bụla mere", "Ọ na-efu obere ego", "Arịrịọ ogologo na-ewe AI iwe"], answer: 1, why: "Otu mgbanwe n'otu oge na-egosi gị arịrịọ mere ka azịza ka mma." }
          ]
        },
        {
          title: "Ịlele azịza tupu i kwere ya",
          objectives: ["O5"],
          minutes: 5,
          goal: "Lelee azịza AI na isi iyi a pụrụ ịtụkwasị obi.",
          text: [
            "Ngwa enyemaka AI na-echepụta ihe mgbe ụfọdụ, dị ka nọmba ekwentị ezighi ezi, ọfịs na-adịghị adị, iwu ochie ma ọ bụ ụbọchị ezighi ezi. A na-akpọ nke a mgbe ụfọdụ hallucination.",
            "Lelee mgbe niile ihe ọ bụla gbasara ego, iwu, ahụike gị, enyemaka gọọmentị, ụbọchị, adreesị na nọmba ekwentị. Lelee ya n'isi iyi gọọmentị: weebụsaịtị gọọmentị (adreesị ya na-ejedebekarị na .gov), ọfịs ahụ n'onwe ya, ma ọ bụ onye ị tụkwasịrị obi dị ka onye na-elekọta okwu gị (case manager), onye ndụmọdụ re-entry ma ọ bụ onye na-elekọta ọba akwụkwọ.",
            "Ezigbo omume: jụọ ngwa enyemaka ahụ \"Ebee ka m nwere ike ịlele nke a?\" wee gaa na peeji gọọmentị ahụ n'onwe gị, kama ịtụkwasị obi na njikọ n'elereghị ya anya."
          ],
          steps: ["Chọta eziokwu ndị dị n'azịza ahụ: nọmba, ụbọchị, aha, iwu.", "Chọọ ha na saịtị gọọmentị (na-ejedebekarị na .gov) ma ọ bụ kpọọ ọfịs ahụ.", "Ọ bụrụ na ha adabaghị, kwere isi iyi gọọmentị.", "Maka mkpebi dị mkpa, jụọkwa onye ị tụkwasịrị obi."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], [".gov", "ọgwụgwụ adreesị weebụsaịtị gọọmentị United States (America)."]],
          slides: [
            { title: "AI nwere ike ịchepụta ihe", bullets: ["Nọmba ekwentị ma ọ bụ adreesị ezighi ezi", "Iwu ochie ma ọ bụ ụbọchị ezighi ezi", "Ọfịs na-adịghị adị"] },
            { title: "Lelee mgbe niile", bullets: ["Ego na enyemaka gọọmentị", "Iwu na usoro", "Ahụike", "Ụbọchị, adreesị, nọmba ekwentị"] },
            { title: "Otu esi elele", bullets: ["Saịtị gọọmentị, na-ejedebekarị na .gov", "Kpọọ ọfịs ahụ", "Jụọ case manager ma ọ bụ onye ọba akwụkwọ"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI nọmba ekwentị ma ọ bụ weebụsaịtị nke ezi ọfịs dị nso gị (dịka ọmụmaatụ ọfịs ụgbọala na akwụkwọ ịnya ụgbọala nke steeti gị). Wee chọta weebụsaịtị gọọmentị ọfịs ahụ n'onwe gị ma lee ma azịza ahụ dabara.",
          youCanNow: "ịhụ eziokwu ndị chọrọ ilele na ịlele ha n'isi iyi gọọmentị.",
          quickCheck: [
            { objective: "O5", q: "AI nyere gị nọmba ekwentị ọfịs ụgbọala (motor vehicle office). Gịnị ka ị ga-eme?", options: ["Chọta nọmba ahụ na weebụsaịtị gọọmentị ọfịs ahụ ma tụnyere ha", "Kpọọ ya ozugbo", "Kesaa ya n'ịntanetị", "Jụọ AI ma o ji n'aka"], answer: 0, why: "Naanị weebụsaịtị gọọmentị nwere ike ịkwado nọmba ahụ; AI nwere ike ịchepụta nọmba dị ka ezi nọmba." },
            { objective: "O5", q: "Kedu adreesị weebụ kachasị yie weebụsaịtị gọọmentị US?", options: ["dmv-help-now.com", "freegovforms.net", "dmv.ca.gov", "govservices.info"], answer: 2, why: "Weebụsaịtị gọọmentị US na-ejedebekarị na .gov." }
          ]
        },
        {
          title: "Ichebe ozi nzuzo gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Jiri AI n'ekesaghị ozi nzuzo, ma hụ aghụghọ ndị na-eji AI.",
          text: [
            "Edela ozi nzuzo n'ime ngwa enyemaka AI: nọmba Social Security gị (nọmba njirimara gọọmentị US), nọmba ID, nọmba okwu ikpe ma ọ bụ nọmba mkpọrọ, okwuntughe, nọmba ụlọ akụ ma ọ bụ kaadị, ma ọ bụ adreesị ụlọ gị zuru ezu. Ị nwere ike inweta enyemaka ị chọrọ na-enweghị ha. Dee \"[nọmba m]\" n'ọnọdụ ya.",
            "Ndị aghụghọ na-ejikwa AI. Ha nwere ike ide ozi dị ka ezi ozi ma ọbụna ṅomie olu onye ezinụlọ gị n'oku ekwentị. Kpachara anya maka ozi ọ bụla na-eme ka ị mee ngwa ngwa, na-arịọ ego ma ọ bụ gift card (kaadị onyinye), ma ọ bụ na-arịọ koodu e zitere n'ekwentị gị.",
            "Ọ bụrụ na ihe adịghị gị mma, kwụsị. Kwụsị oku ahụ, ma kpọghachi onye ahụ ma ọ bụ ọfịs ahụ site na nọmba ị maralarị na ọ bụ ezi nọmba."
          ],
          steps: ["Tupu i zipu prompt, gụọ ya maka ozi nzuzo ma wepụ ya.", "Jiri ihe nnọchi dị ka \"[nọmba m]\".", "Lee ozi na-eme ngwa ngwa, arịrịọ ego na arịrịọ koodu dị ka ihe ịdọ aka na ntị.", "Kpọghachi site na nọmba ị maara na ọ bụ ezi nọmba."],
          words: [["Ozi nzuzo", "ihe gbasara gị nke nwere ike ime ka mmadụ mee ka ọ bụ gị ma ọ bụ were ego gị."], ["Aghụghọ (scam)", "wayo e ji ezu ego ma ọ bụ ozi."]],
          slides: [
            { title: "Edela ihe ndị a n'ime AI", bullets: ["Nọmba Social Security ma ọ bụ nọmba ID", "Nọmba okwu ikpe ma ọ bụ nọmba mkpọrọ", "Okwuntughe, nọmba ụlọ akụ ma ọ bụ kaadị"] },
            { title: "Jiri ihe nnọchi", bullets: ["Dee \"[nọmba m]\" n'ọnọdụ ya", "Ị ka na-enweta enyemaka ị chọrọ"] },
            { title: "Ihe ịdọ aka na ntị nke aghụghọ", bullets: ["Ha na-eme ka ị mee ngwa ngwa", "Ha na-arịọ ego ma ọ bụ gift card", "Ha na-arịọ koodu e zitere n'ekwentị gị"] },
            { title: "Mgbe obi abụọ dị", bullets: ["Kwụsị", "Kwụsị oku ahụ", "Kpọghachi na nọmba ị maara na ọ bụ ezi nọmba"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri ngwa enyemaka AI dee obere ozi nwere nkwanye ugwu, na-ajụ otu azụmahịa ma ọ na-ewe ndị ọrụ. Rịọ maka otu mgbanwe ga-eme ka ọ ka mma, lelee na o nweghị ozi nzuzo, ma gụpụta ya n'olu dị elu.",
          youCanNow: "iji ngwa enyemaka AI maka ezi ọrụ ma na-echebe ozi nzuzo gị, na ịhụ ihe ịrịba ama nke aghụghọ.",
          quickCheck: [
            { objective: "O6", q: "Fọm ọrụ na-arịọ nọmba Social Security gị, ị chọkwara enyemaka AI na ya. Gịnị ka ị ga-ede?", options: ["Ezi nọmba gị ka AI wee lelee ya", "Nọmba gị nke e gbanwere otu mkpụrụ ya", "Nọmba kaadị ụlọ akụ gị kama", "Ihe nnọchi dị ka [nọmba m]"], answer: 3, why: "Ihe nnọchi na-ekwe ka AI nyere aka n'okwu ahụ ma ezi nọmba gị ka bụrụ nzuzo." },
            { objective: "O6", q: "Ozi ederede kwuru na enyemaka gọọmentị gị ga-akwụsị taa ma ọ bụrụ na i zipughị koodu e zitere gị ugbu a. Gịnị bụ nke a?", options: ["Aghụghọ; ekesala koodu ahụ mgbe ọ bụla", "Ozi nkịtị site n'ọfịs gị", "Ule ị ga-agafe", "Ncheta ka ị melite ekwentị gị"], answer: 0, why: "Ime ka ị mee ngwa ngwa na ịrịọ koodu bụ ihe ịdọ aka na ntị nke aghụghọ; ezi ọfịs anaghị arịọ koodu ndị a." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI n'obi ike",
        questions: [
          { objective: "O4", q: "Azịza mbụ dị ogologo nke ukwuu. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Jụọ: \"Mee ka ọ dị mkpụmkpụ\"", "Kwụsị ime ya", "Detuo ya otu o sila dị", "Gbanyụọ ekwentị"], answer: 0, why: "Ajụjụ nsochi na-arịọ ngwa enyemaka ahụ ka ọ gbanwee azịza ya." },
          { objective: "O5", q: "Kedu n'ime ndị a ka ị ga-elele MGBE NIILE n'isi iyi gọọmentị?", options: ["Njakịrị", "Ndepụta ihe ị ga-azụ n'ahịa", "Abụ uri", "Nọmba ekwentị ọfịs gọọmentị"], answer: 3, why: "Nọmba ekwentị, ụbọchị, ego, iwu na enyemaka gọọmentị nwere ike ịbụ ihe ezighi ezi, a ga-elelerịrị ha." },
          { objective: "O5", q: "Gịnị ka \"hallucination\" pụtara mgbe a na-ekwu maka AI?", options: ["AI ike gwụrụ", "AI dere ihe dị ka eziokwu mana e chepụtara ya", "Ihuenyo agbajiela", "Ụdị app"], answer: 1, why: "AI nwere ike ịchepụta eziokwu ndị dị ka ezi ihe." },
          { objective: "O6", q: "Gịnị ka ị ga-ede n'ọnọdụ nọmba Social Security gị na prompt?", options: ["Ezi nọmba ahụ", "Ihe nnọchi dị ka \"[nọmba m]\"", "Ọkara nọmba ahụ", "Nọmba ụlọ akụ gị"], answer: 1, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị ozi nzuzo." },
          { objective: "O6", q: "Oku bịara n'olu onye ezinụlọ gị na-arịọ gift card ozugbo. Gịnị ka ị ga-eme?", options: ["Zụta gift card ngwa ngwa", "Nye ha koodu dị n'ekwentị gị", "Zipu nọmba ụlọ akụ gị", "Kwụsị oku ahụ ma kpọghachi ha na nọmba ị maara na ọ bụ ezi nọmba"], answer: 3, why: "Ndị aghụghọ nwere ike ịṅomi olu. Ime ngwa ngwa na gift card bụ ihe ịdọ aka na ntị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite AI na Obi Ike n'Ihe Dijitalụ",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa ngwa enyemaka AI bụ:", options: ["Mmemme kọmputa ị na-akparịta ụka na ya", "Onye ọrụ gọọmentị", "Ụlọ ọrụ ekwentị", "Weebụsaịtị na-ere naanị ihe"], answer: 0, why: "Ọ bụ mmemme ị na-ede ihe na ya ma ọ bụ gwa okwu." },
      { objective: "O1", q: "Kedu ọrụ ngwa enyemaka AI maara ime nke ọma?", options: ["Ime mkpebi iwu n'ọnọdụ gị", "Ịbịanye aka n'akwụkwọ n'ọnọdụ gị", "Ịkọwa akwụkwọ ozi siri ike n'okwu dị mfe", "Ịmara akụkọ nzuzo gị"], answer: 2, why: "Ịkọwa ihe n'okwu dị mfe bụ otu n'ime ihe ọ maara nke ọma." },
      { objective: "O1", q: "Onye bụ onye isi mgbe ị na-eji ngwa enyemaka AI?", options: ["AI", "Ụlọ ahịa app", "Gị", "Ọ dịghị onye"], answer: 2, why: "Gị na-ekpebi ihe ị ga-ajụ na ihe ị ga-ekwere." },
      { objective: "O2", q: "Kedu nke bụ ngwa enyemaka AI a ma ama na-akwụghị ụgwọ?", options: ["Microsoft Copilot", "Igwe mgbakọ", "Ozi ederede", "Igwe mbipụta"], answer: 0, why: "Copilot, ChatGPT na Gemini bụ ngwa enyemaka a ma ama na-akwụghị ụgwọ." },
      { objective: "O2", q: "Na ekwentị, ebe n'enweghị nsogbu iji nweta app AI bụ:", options: ["Njikọ n'ozi onye ị na-amaghị zitere", "Weebụsaịtị ọ bụla", "Mgbasa ozi na-apụta na mberede", "Ezi ụlọ ahịa app"], answer: 3, why: "Wụnye naanị site n'ezi ụlọ ahịa app." },
      { objective: "O2", q: "Kedu adreesị weebụ na-emeghe ngwa enyemaka AI na kọmputa?", options: ["myjob.gift", "copilot.microsoft.com", "freemoney.win", "ọ dịghị nke ọ bụla n'ime ha"], answer: 1, why: "copilot.microsoft.com bụ ezi adreesị Microsoft maka Copilot." },
      { objective: "O2", q: "Ebee ka ị na-edekarị ajụjụ gị?", options: ["Igbe adreesị nke ekwentị", "Igbe ozi dị n'akụkụ ala ihuenyo", "Akara batrị", "Igwefoto"], answer: 1, why: "Igbe ozi na-ekwukarị \"Ask anything\" ma ọ bụ \"Message\"." },
      { objective: "O2", q: "Mgbe i jiri kọmputa ọba akwụkwọ mechaa, ị kwesịrị:", options: ["Ichekwa okwuntughe gị", "Ide okwuntughe gị n'akwụkwọ", "Ịhapụ akaụntụ gị ka ọ ghere oghe", "Ịpụ (sign out) na imechi browser"], answer: 3, why: "Nke a na-echebe akaụntụ gị pụọ n'aka onye ọzọ ga-eji ya." },
      { objective: "O3", q: "Gịnị bụ prompt?", options: ["Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI", "Mkpu ncheta", "Ụdị chaja ekwentị", "Ọgwụgwụ weebụsaịtị"], answer: 0, why: "Prompt bụ arịrịọ gị nye AI." },
      { objective: "O3", q: "Ezigbo prompt nwere:", options: ["Naanị otu okwu", "Nọmba Social Security gị", "Ihe ị chọrọ, ọnọdụ gị, na otu ị chọrọ ka azịza dị", "Okwuntughe gị"], answer: 2, why: "Akụkụ atọ ndị ahụ na-enweta azịza bara uru." },
      { objective: "O3", q: "Kedu prompt nwere ike inweta azịza kacha baa uru?", options: ["\"résumé\"", "\"nyere m aka\"", "\"Arụrụ m ọrụ afọ 3 na kichin. Nyere m aka depụta nka m maka ọrụ osi nri n'isi okwu dị mkpụmkpụ.\"", "\"ihe\""], answer: 2, why: "Ọ na-enye mkpa, ọnọdụ na ụdị azịza." },
      { objective: "O4", q: "Azịza AI mbụ adabaghị nke ọma. Ị nwere ike:", options: ["Ịjụ ajụjụ nsochi iji gbanwee ya", "Naanị ịnabata ya", "Ịkwụ ụgwọ ka e dozie ya", "Ịmalitegharị ekwentị gị"], answer: 0, why: "Ajụjụ nsochi dị ka \"jiri okwu dị mfe karị\" na-eme ka azịza ka mma." },
      { objective: "O4", q: "Kedu nke bụ ezigbo ajụjụ nsochi?", options: ["\"Zipu ego.\"", "\"Nke a bụ nọmba ụlọ akụ m.\"", "\"Hichapụ ekwentị m.\"", "\"Kọwakwuo nzọụkwụ 2.\""], answer: 3, why: "Ọ na-arịọ mgbanwe doro anya n'azịza ahụ." },
      { objective: "O4", q: "Ọ bụrụ na mkparịta ụka apụọ n'ụzọ, ezigbo ihe ime bụ:", options: ["Ide okwuntughe gị", "Ịmalite mkparịta ụka ọhụrụ nwere prompt doro anya karị", "Ịnọgide na-ekwughachi otu okwu ahụ", "Ịghara iji AI ọzọ"], answer: 1, why: "Mkparịta ụka ọhụrụ nwere prompt doro anya karị na-arụkarị ọrụ nke ọma." },
      { objective: "O5", q: "Mgbe AI nyere nọmba ekwentị ọfịs, ị kwesịrị:", options: ["Ịkpọ ya n'eleleghị ya", "Ịlele ya na weebụsaịtị gọọmentị ọfịs ahụ", "Itinye ya n'ịntanetị", "Inye ya nọmba ID gị"], answer: 1, why: "AI nwere ike inye nọmba ezighi ezi; lelee isi iyi gọọmentị." },
      { objective: "O5", q: "Weebụsaịtị gọọmentị United States na-ejedebekarị na:", options: [".xyz", ".win", ".gift", ".gov"], answer: 3, why: "Saịtị gọọmentị US na-eji .gov." },
      { objective: "O6", q: "Kedu nke ị na-ekwesịghị ide MGBE Ọ BỤLA n'ime ngwa enyemaka AI?", options: ["Nọmba kaadị ụlọ akụ gị", "\"Mee ka ọ dị mkpụmkpụ\"", "\"Nye m ọmụmaatụ\"", "\"Jiri okwu dị mfe karị\""], answer: 0, why: "Nọmba ụlọ akụ na kaadị bụ ozi nzuzo." },
      { objective: "O6", q: "Ozi na-eme ka ị kwụọ ụgwọ ngwa ngwa site na gift card. Nke a bụ:", options: ["Ụgwọ nkịtị", "Ọrụ e nyere gị", "Ihe ịdọ aka na ntị nke aghụghọ", "Iwu gọọmentị"], answer: 2, why: "Ime ngwa ngwa na gift card bụ ihe ịrịba ama aghụghọ a na-ahụkarị." },
      { objective: "O6", q: "Mmadụ na-arịọ koodu e zitere n'ekwentị gị ugbu a. Ị kwesịrị:", options: ["Ịgụrụ ha ya", "Itinye ya n'ịntanetị", "Ịghara ikesa ya mgbe ọ bụla", "Iziga ya ndị enyi gị"], answer: 2, why: "Koodu ahụ na-echebe akaụntụ gị. Ezi ọfịs anaghị arịọ ya." },
      { objective: "O6", q: "Ọ bụrụ na ihe adịghị gị mma n'oku, nzọụkwụ kacha enweghị nsogbu bụ:", options: ["Ịkwụsị oku ahụ ma kpọghachi na nọmba ị maara na ọ bụ ezi nọmba", "Ịnọgide na-ekwu okwu", "Inye ha adreesị gị", "Iziga obere ego"], answer: 0, why: "Ịkpọghachi na nọmba ị maara na-akwụsị ọtụtụ aghụghọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Arịrịọ doro anya", objective: "O3", notYet: "Prompt ahụ edoghị anya, dịka ọmụmaatụ \"dee ozi\".", meets: "Prompt ahụ na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị.", exceeds: "Ọ na-akpọkwa aha azụmahịa ahụ na ọrụ ahụ, azịza mbụ ahụ fọrọ nke nta ka ọ dị njikere." },
      { name: "Mere ka ọ ka mma", objective: "O4", notYet: "Jiri azịza mbụ otu o si dị.", meets: "Rịọrọ maka otu mgbanwe, ozi ahụ wee ka mma.", exceeds: "Rịọrọ maka mgbanwe abụọ ma ọ bụ karịa, otu n'otu oge, ma nwee ike ikwu ihe nke ọ bụla dozie." },
      { name: "Ozi nzuzo adịghị n'ime ya", objective: "O6", notYet: "Prompt ma ọ bụ ozi ahụ nwere nọmba nzuzo, okwuntughe, adreesị ma ọ bụ ụbọchị ọmụmụ.", meets: "Ọ dịghị ozi nzuzo na prompt ma ọ bụ n'ozi ahụ.", exceeds: "Jiri ihe nnọchi dị ka [nọmba ekwentị m] ma dejupụta ya naanị n'ozi onye ahụ n'onwe ya na-ezipu." },
      { name: "Elelere eziokwu", objective: "O5", notYet: "E detuuru aha, adreesị ma ọ bụ oge mmeghe azụmahịa site n'AI n'eleleghị ya.", meets: "E lelere eziokwu ọ bụla gbasara azụmahịa ahụ na weebụsaịtị ya ma ọ bụ ndepụta gọọmentị.", exceeds: "Nwere ike ikwu ebe o lelere ya." },
      { name: "Ọ dị ka okwu gị", objective: "O1", notYet: "Ozi ahụ na-eji okwu onye na-amụ ihe agaghị ekwu ma ọ bụ na-aghọtaghị.", meets: "Mgbe a gụpụtara ya n'olu dị elu, o nwere nkwanye ugwu, dị mkpụmkpụ ma dị n'okwu onye na-amụ ihe n'onwe ya.", exceeds: "Onye na-amụ ihe gbanwere ụfọdụ okwu n'onwe ya ka o yikwuo okwu ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha jiri AI maka ịrịọ ọrụ, ozi ma ọ bụ akwụkwọ ozi n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị mmekọ re-entry na-akọ na arịrịọ enyemaka maka ọrụ ndị dị mfe n'ịntanetị belatara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke mmemme ahụ",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Akwụkwọ na mkpịsị ode maka ndetu \"Nwalee ya ugbu a\"",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'ụlọ kọmputa ma ọ bụ n'ebe enyemaka re-entry: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" n'otu oge ahụ.",
      "Tupu ndị na-amụ ihe apụọ, lelee na onye ọ bụla pụrụ (sign out) na kọmputa ọha.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee ezi ozi nzuzo n'omume; jiri ihe nnọchi dị ka [nọmba m].",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Chetara ndị nọ na parole ma ọ bụ probation ka ha gbasoo iwu ọ bụla gbasara iji ịntanetị."
    ]
  }
};
