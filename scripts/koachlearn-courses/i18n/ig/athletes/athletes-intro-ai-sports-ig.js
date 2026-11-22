"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-intro-ai-sports.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-intro-ai-sports-ig",
  lang: "ig",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Mmalite AI n'Egwuregwu",
  skills: "Ịkọwa ihe AI na-eme n'egwuregwu, Imeghe ngwa enyemaka AI n'efu, Ide prompt egwuregwu doro anya, Ịlele azịza AI, Ichebe ozi nzuzo na ozi ahụike gị",
  outcome: "iji ngwa enyemaka AI n'efu mee atụmatụ izu otu maka mmega ahụ na ọmụmụ ihe gburugburu usoro oge otu egwuregwu gị: ịjụ ajụjụ doro anya, ime ka azịza ka mma, ịlele ya na onye nkuzi egwuregwu gị (coach), na idebe ozi nzuzo na ozi ahụike n'ebe ọ na-adịghị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na ndị na-amalite ọrụ egwuregwu, na maka ndị coach chọrọ mmalite dị mfe n'ọgụgụ isi arụrụ arụ (AI). Ọ dịghị mkpa ka ị mara ihe gbasara teknụzụ.",
    "Ị ga-amụta ebe AI na-apụtalarị n'egwuregwu, site na ọnụ ọgụgụ egwuregwu ruo na nyocha vidiyo na ịchọ ndị egwuregwu (recruiting), na otu ị ga-esi jiri ngwa enyemaka AI n'efu n'onwe gị hazie izu gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI n'efu mee atụmatụ izu otu dabara n'ezi usoro oge mmega ahụ, egwuregwu na klas gị. Dee prompt doro anya, rịọ maka opekata mpe mgbanwe abụọ ga-eme ka ọ ka mma, wepụ ozi nzuzo ma ọ bụ ozi ahụike ọ bụla, ma gosi coach gị ma ọ bụ onye na-elekọta ahụike ndị egwuregwu (athletic trainer) atụmatụ ahụ tupu i soro ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị na mahadum, na ụfọdụ ndị ntorobịa na-egwu egwuregwu na klọb ma ọ bụ egwuregwu amateur, ndị na-ejikọta mmega ahụ, egwuregwu, klas na mgbe ụfọdụ ọrụ, recruiting ma ọ bụ NIL.",
    startingPoint: "Ha na-eji smartphone, soshal midia na app egwuregwu kwa ụbọchị. Ọtụtụ nwaala ngwa enyemaka AI ntakịrị, mana ha anaghị ede prompt doro anya, anaghị elele azịza, anaghịkwa eche maka ozi nzuzo na ozi ahụike ha na-ekesa.",
    gap: "AI nwere ike inyere ndị egwuregwu aka ịhazi izu ha, ịmụ ihe na ịhazi ndụ ha, mana azịza ezighi ezi gbasara mmega ahụ, mmerụ ahụ, nri ma ọ bụ ikike isonye n'egwuregwu (eligibility) nwere ike imerụ ahụike ha ma ọ bụ ikike ha, ndị recruiter na ndị azụmahịa brand adịgboroja na-elekwa ha anya. Ha kwesịrị iji AI nke ọma ma lelee ya na coach ha, athletic trainer ma ọ bụ ọfịs compliance.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, dabara n'etiti mmega ahụ na klas",
      "Iwu afọ: ndị na-amụ ihe na-erubeghị afọ 18 na-elele iwu afọ app ahụ ma jụọ nne na nna ma ọ bụ onye nlekọta ha",
      "Ahụike na nzuzo: enweghị akụkọ mmerụ ahụ, ọgwụ, okwuntughe ma ọ bụ nọmba ID na prompt; a na-elele ndụmọdụ gbasara mmega ahụ, ahụike na eligibility na onye ọkachamara kwesịrị ekwesị"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọmụmaatụ teknụzụ n'egwuregwu", action: "ịmata ebe a na-eji AI n'egwuregwu na ihe ọ na-enweghị ike imere gị", standard: "ma kpọọ aha opekata mpe ụzọ atọ e si eji ya na otu oke ya" },
    { id: "O2", condition: "Site n'iji ekwentị gị ma ọ bụ kọmputa", action: "imeghe ngwa enyemaka AI n'efu site na app ma ọ bụ weebụsaịtị ya nke ezi ụlọ ọrụ nwere ya, zipu ozi mbụ, ma pụọ (sign out) na kọmputa ndị mmadụ na-eji ọnụ", standard: "mgbe i lelechara iwu afọ app ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị ezi usoro oge mmega ahụ, egwuregwu na klas gị", action: "ide prompt nwere ihe ị chọrọ, ọnọdụ gị na ụdị azịza ị chọrọ", standard: "nke mere na azịza mbụ ga-aba uru" },
    { id: "O4", condition: "Mgbe e nyere gị azịza AI na-adabaghị n'izu gị", action: "ịjụ ajụjụ nsochi, otu mgbanwe n'otu oge, iji dozie ya", standard: "ma mee opekata mpe mgbanwe abụọ ga-eme ka ọ ka mma" },
    { id: "O5", condition: "Mgbe e nyere gị azịza AI nwere ndụmọdụ gbasara mmega ahụ, ahụike, nri ma ọ bụ eligibility", action: "ịlele ya na coach gị, athletic trainer, ọkachamara nri (dietitian), dọkịta, ọfịs compliance ma ọ bụ peeji gọọmentị", standard: "tupu i soro ya" },
    { id: "O6", condition: "Mgbe ị na-ede prompt ma ọ bụ nweta onyinye n'ịntanetị", action: "idebe ozi nzuzo na ozi ahụike n'ebe ọ na-adịghị ma hụ aghụghọ e ji eche ndị egwuregwu", standard: "n'ekesaghị okwuntughe, koodu, nọmba ID ma ọ bụ akwụkwọ ahụike ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ebe AI na-apụta n'egwuregwu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe AI bụ, na ebe ị na-ahụlarị ya n'egwuregwu",
          minutes: 4,
          goal: "Kpọọ aha ụzọ atọ e si eji AI n'egwuregwu taa ma kwuo ihe AI na-enweghị ike ime.",
          text: [
            "AI, ma ọ bụ ọgụgụ isi arụrụ arụ (artificial intelligence), bụ mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ, dị ka ịhụ usoro (patterns), ide ihe ma ọ bụ ịmata ihe dị na vidiyo.",
            "N'egwuregwu, ị na-ahụlarị ya: mgbasa egwuregwu na TV na-egosi ọsọ onye egwuregwu ma ọ bụ ohere ịgba bọọlụ ga-abanye, app na-agụ ugboro ole i mere mmega ma ọ bụ na-agbaso ọsọ gị, ngwa vidiyo na-akara egwuregwu ọ bụla, na weebụsaịtị recruiting na-ahazi ndị egwuregwu site n'ọnụ ọgụgụ ha.",
            "AI bụ onye enyemaka, ọ bụghị coach, dọkịta ma ọ bụ onye ikpe egwuregwu (referee). Ọ maghị ahụ gị, otu gị ma ọ bụ ebumnuche gị ma ọ bụrụ na ị gwaghị ya, o nwekwara ike ime mperi. Ndị coach na ndị egwuregwu ka na-eme mkpebi."
          ],
          words: [["AI", "mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme na-amụta usoro site na data wee jiri ya zaa ajụjụ, buo amụma ma ọ bụ mepụta ihe."], ["Data", "eziokwu na nọmba, dị ka oge, akara egwuregwu, ugboro mmega ma ọ bụ vidiyo."]],
          slides: [
            { title: "AI n'otu ahịrịokwu", bullets: ["Mmemme na-amụta usoro site na data", "Wee zaa ajụjụ, buo amụma ma ọ bụ mepụta ihe"] },
            { title: "Ebe ị na-ahụ ya n'egwuregwu", bullets: ["Ọnụ ọgụgụ na TV dị ka ọsọ na ohere ịgba bọọlụ", "App na-agbaso ọsọ na mmega", "Ngwa vidiyo na-akara egwuregwu", "Saịtị recruiting na-ahazi site n'ọnụ ọgụgụ"] },
            { title: "Ihe AI na-abụghị", bullets: ["Ọ bụghị coach, dọkịta ma ọ bụ referee gị", "O nwere ike ime mperi, ọbụlagodi mgbe o ji n'aka", "Gị na coach gị na-eme mkpebi"] }
          ],
          tryIt: "Dee ebe atọ ị hụrụ AI ma ọ bụ ọnụ ọgụgụ amamihe n'egwuregwu gị n'oge a, dịka ọmụmaatụ foto ọnụ ọgụgụ na TV, app mmega ahụ ma ọ bụ ngwa vidiyo otu gị na-eji.",
          youCanNow: "ịkọwa ihe AI bụ, ịkpọ aha ụzọ atọ ọ na-esi apụta n'egwuregwu, na ikwu ihe mere ndị mmadụ ka ji eme mkpebi.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka AI pụtara?", options: ["Ụdị ihe ọṅụṅụ egwuregwu", "Mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ", "Igwe mmega ahụ", "Akara onye ikpe egwuregwu"], answer: 1, why: "AI bụ mmemme kọmputa na-ahụ usoro, na-ede ihe ma ọ bụ na-amata ihe dị na vidiyo." },
            { objective: "O1", q: "App AI kwuru na ị kwesịrị ịgbanwe ọnọdụ (position) gị n'otu. Gịnị ka ị ga-eme?", options: ["Gwa coach gị okwu; AI bụ onye enyemaka, ọ bụghị coach gị", "Gbanwee ọnọdụ ozugbo", "Hapụ otu ahụ", "Ghara ige coach gị ntị site ugbu a"], answer: 0, why: "AI amaghị otu gị ma ọ bụ ebumnuche gị; ndị coach na ndị egwuregwu ka na-eme mkpebi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Imeghe ngwa enyemaka AI n'efu",
          minutes: 5,
          goal: "Meghee ngwa enyemaka AI n'efu na ekwentị gị ma ọ bụ kọmputa ma zipu ozi mbụ gị.",
          text: [
            "Ngwa enyemaka AI bụ mmemme AI ị na-akparịta ụka na ya n'okwu nkịtị. Ndị a ma ama na-akwụghị ụgwọ gụnyere ChatGPT, Microsoft Copilot na Google Gemini.",
            "Na ekwentị, nweta ezi app site n'ụlọ ahịa app, nke ezi ụlọ ọrụ mere: OpenAI maka ChatGPT, Microsoft maka Copilot, Google maka Gemini. Na kọmputa, meghee browser ma gaa na chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com.",
            "Ụfọdụ ngwa enyemaka chọrọ akaụntụ ma nwee iwu afọ. Ọ bụrụ na i rubeghị afọ 18, lelee iwu afọ app ahụ ma buru ụzọ jụọ nne na nna gị ma ọ bụ onye nlekọta gị. Na kọmputa ụlọ akwụkwọ ma ọ bụ nke ndị mmadụ na-eji ọnụ, pụọ (sign out) mgbe i mechara."
          ],
          steps: ["Họrọ ekwentị gị ma ọ bụ kọmputa.", "Ekwentị: wụnye ezi app. Kọmputa: dee adreesị weebụ ahụ.", "Chọta igbe ozi dị n'akụkụ ala ihuenyo.", "Dee ozi ekele ma gụọ azịza ya.", "Na kọmputa ndị mmadụ na-eji ọnụ, pụọ ma mechie browser."],
          words: [["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu."], ["Browser", "mmemme ị na-eji eleta weebụsaịtị, dị ka Chrome, Edge ma ọ bụ Safari."]],
          slides: [
            { title: "Ngwa enyemaka AI n'efu", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Otu esi emeghe otu", bullets: ["Ekwentị: ezi app site n'ụlọ ahịa app", "Kọmputa: chatgpt.com, copilot.microsoft.com ma ọ bụ gemini.google.com", "Chọta igbe ozi dị n'ala"] },
            { title: "Tupu ị malite", bullets: ["I rubeghị afọ 18? Lelee iwu afọ ma jụọ nne ma ọ bụ nna gị", "Kọmputa ndị mmadụ na-eji ọnụ: pụọ mgbe i mechara"] }
          ],
          tryIt: "Meghee otu ngwa enyemaka AI n'efu ma dee: \"Ana m egwu [egwuregwu gị]. Kọwaa n'ahịrịokwu atọ dị mkpụmkpụ otu e si eji AI n'egwuregwu m.\" Gụọ azịza ya.",
          youCanNow: "imeghe ngwa enyemaka AI n'efu, izipu ozi, na ịhapụ kọmputa ndị mmadụ na-eji ọnụ n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O2", q: "Kedu adreesị weebụ na-emeghe Google Gemini na kọmputa?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com bụ ezi adreesị; jiri saịtị ma ọ bụ app nke ezi ụlọ ọrụ ahụ." },
            { objective: "O2", q: "I jiri ChatGPT na kọmputa ọba akwụkwọ hazie izu gị. Gịnị ka ị ga-eme mgbe i mechara?", options: ["Hapụ ya ka ọ ghere oghe maka onye otu gị", "Chekwaa okwuntughe gị", "Gbanyụọ naanị ihuenyo", "Pụọ (sign out) ma mechie browser"], answer: 3, why: "Ịpụ na kọmputa ndị mmadụ na-eji ọnụ na-egbochi ndị ọzọ ịbanye na mkparịta ụka na akaụntụ gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide prompt egwuregwu doro anya",
          minutes: 5,
          goal: "Dee prompt nwere ihe ị chọrọ, ọnọdụ gị na ụdị azịza ị chọrọ.",
          text: [
            "Ihe ị na-ede nye ngwa enyemaka AI ka a na-akpọ prompt. Prompt doro anya na-enweta azịza bara uru na nke mbụ.",
            "Ezigbo prompt nwere akụkụ atọ: ihe ị chọrọ, ọnọdụ gị, na otu ị chọrọ ka azịza dị. Dịka ọmụmaatụ: \"Abụ m onye midfielder bọọlụ ụkwụ (soccer) n'ụlọ akwụkwọ sekọndrị. Enwere m mmega ahụ site na Mọnde ruo Tọzdee n'elekere 3:30 ruo 5:30 na egwuregwu na Fraịdee. Mee usoro oge ọmụmụ ihe dị mfe maka izu ahụ gburugburu mmega ahụ. Tinye ya na tebụl.\"",
            "Prompt na-adịghị ike dị ka \"nyere m aka ka m ka mma\" na-eme ka ngwa enyemaka ahụ chepụta ihe ị pụtara. Tinye egwuregwu, ọnọdụ gị n'otu, usoro oge gị na ụdị azịza."
          ],
          steps: ["Kwuo ihe ị chọrọ.", "Tinye egwuregwu gị, ọnọdụ gị n'otu, ọkwa gị na usoro oge gị (na-enweghị ozi nzuzo).", "Kwuo ụdị azịza: ndepụta, tebụl, nzọụkwụ dị mkpụmkpụ ma ọ bụ okwu dị mfe."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."], ["Ụdị azịza (format)", "otu azịza ahụ dị, dị ka ndepụta, tebụl ma ọ bụ nzọụkwụ."]],
          slides: [
            { title: "Akụkụ atọ nke ezigbo prompt", bullets: ["1. Ihe ị chọrọ", "2. Egwuregwu gị, ọnọdụ gị, ọkwa gị na usoro oge gị", "3. Ụdị azịza ị chọrọ"] },
            { title: "Nke na-adịghị ike na nke doro anya", bullets: ["Nke na-adịghị ike: \"nyere m aka ka m ka mma\"", "Nke doro anya: \"Abụ m midfielder soccer n'ụlọ akwụkwọ sekọndrị, mmega Mọnde-Tọzdee...\"", "\"...mee usoro oge ọmụmụ ihe na tebụl\""] },
            { title: "Tinye nkọwa, ọ bụghị ihe nzuzo", bullets: ["Ee: egwuregwu, ọnọdụ n'otu, oge mmega", "Mba: aha gị zuru ezu, ID ụlọ akwụkwọ, akwụkwọ ahụike"] }
          ],
          tryIt: "Dee prompt nwere akụkụ atọ na-arịọ usoro oge ọmụmụ ihe ma ọ bụ ụbọchị izu ike gburugburu ezi izu mmega ahụ gị. Zipu ya ma gụọ azịza ya.",
          youCanNow: "ide prompt egwuregwu doro anya nwere ihe ị chọrọ, ọnọdụ gị na ụdị azịza.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ akụkụ ụdị azịza (format) nke prompt?", options: ["Otu ị chọrọ ka azịza dị, dị ka tebụl ma ọ bụ obere ndepụta", "Egwuregwu gị", "Aha coach gị", "Okwuntughe gị"], answer: 0, why: "Ụdị azịza na-agwa ngwa enyemaka ahụ otu ọ ga-esi hazie azịza ya." },
            { objective: "O3", q: "Ị chọrọ enyemaka ịhazi ihe omume ụlọ akwụkwọ (homework) gburugburu basketball. Kedu prompt kacha mma?", options: ["\"homework\"", "\"nyere m aka ka m ka mma\"", "\"basketball\"", "\"Abụ m onye guard n'ụlọ akwụkwọ sekọndrị, mmega site n'elekere 3 ruo 5 nke ehihie Mọnde ruo Tọzdee, egwuregwu na Fraịdee. Mee usoro oge homework maka izu ahụ na tebụl.\""], answer: 3, why: "Ọ na-enye ihe ị chọrọ, ọnọdụ gị na ụdị azịza." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ebe AI na-apụta n'egwuregwu",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ọmụmaatụ AI n'egwuregwu?", options: ["Opi", "Akwụkwọ akara egwuregwu e ji aka dee", "Foto na TV na-egosi ohere ịgba bọọlụ ga-abanye", "Ụgbọ ala otu egwuregwu"], answer: 2, why: "Foto ahụ si na mmemme mụtara usoro site n'ọtụtụ ịgba bọọlụ gara aga." },
          { objective: "O1", q: "App AI kwuru ka ị gaa n'ihu na-egwu n'agbanyeghị oke mgbu n'ikpere. Gịnị ka ị ga-eme?", options: ["Kwụsị ma gwa athletic trainer gị ma ọ bụ dọkịta okwu", "Soro ya, n'ihi na AI maara nke kacha mma", "Ghara ige coach gị ntị", "Rịọ onye otu gị ka o kpebie"], answer: 0, why: "AI abụghị dọkịta. Ajụjụ gbasara mgbu na mmerụ ahụ na-aga n'aka onye ọkachamara." },
          { objective: "O2", q: "Ebee ka ị ga-enweta app AI maka ekwentị gị?", options: ["Njikọ onye ị na-amaghị zitere gị n'ozi nzuzo (DM)", "Mgbasa ozi na-apụta na mberede", "Weebụsaịtị ọ bụla", "Ezi ụlọ ahịa app, site n'ezi ụlọ ọrụ"], answer: 3, why: "Ezi ụlọ ahịa app na app nke ezi ụlọ ọrụ bụ nhọrọ n'enweghị nsogbu." },
          { objective: "O3", q: "Kedu akụkụ atọ nke prompt doro anya?", options: ["Aha, ụlọ akwụkwọ, nọmba ID", "Ihe ị chọrọ, ọnọdụ gị, ụdị azịza", "Egwuregwu, agba otu, akara otu (mascot)", "Ndewo, biko, daalụ"], answer: 1, why: "Ihe ị chọrọ, ọnọdụ gị na ụdị azịza na-enye ngwa enyemaka ahụ ihe ọ chọrọ iji nyere aka." },
          { objective: "O3", q: "Kedu prompt nwere ike inweta azịza kacha baa uru?", options: ["\"nyere m aka ka m ka mma\"", "\"Abụ m point guard na mahadum, mmega site n'elekere 6 ruo 8 nke ụtụtụ. Mee usoro oge klas na izu ike maka izu ahụ na tebụl.\"", "\"basketball\"", "\"gwa m ihe niile\""], answer: 1, why: "O nwere ihe ị chọrọ, ọnọdụ gị na ụdị azịza." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI n'obi ike",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime ka azịza ka mma",
          minutes: 4,
          goal: "Jiri ajụjụ nsochi dozie azịza ruo mgbe ọ dabara n'izu gị.",
          text: [
            "Azịza mbụ bụ ihe mbụ (draft). Ngwa enyemaka ahụ na-echeta ihe i kwuru na mbụ n'otu mkparịta ụka ahụ, ya mere ị nwere ike ịrịọ ya mgbanwe.",
            "Ajụjụ nsochi bara uru maka ndị egwuregwu: \"Bugharịa oge ọmụmụ ihe ka ọ bụrụ mgbe nri abalị n'ụbọchị egwuregwu.\" \"Mee ka ọ dị mkpụmkpụ.\" \"Tinye ụbọchị izu ike.\" \"Jiri okwu dị mfe karị.\" \"Kọwaa ihe mere i ji tinye nke a ebe a.\"",
            "Rịọ otu mgbanwe n'otu oge. Ọ bụrụ na mkparịta ụka ahụ apụọ n'ụzọ, malite mkparịta ụka ọhụrụ nwere prompt doro anya karị."
          ],
          steps: ["Gụọ azịza mbụ.", "Chọta ihe na-adabaghị n'ezi usoro oge gị.", "Rịọ maka otu mgbanwe.", "Megharịa ya ruo mgbe ọ dabara."],
          words: [["Ajụjụ nsochi (follow-up)", "arịrịọ nke abụọ na-ewuli elu n'azịza i nwetara."]],
          slides: [
            { title: "Azịza mbụ = ihe mbụ (draft)", bullets: ["Ị nwere ike ịrịọ maka mgbanwe", "Ọ na-echeta otu mkparịta ụka ahụ"] },
            { title: "Ajụjụ nsochi na-arụ ọrụ", bullets: ["\"Tinye ụbọchị izu ike.\"", "\"Bugharịa oge ọmụmụ ihe ka ọ bụrụ mgbe nri abalị n'ụbọchị egwuregwu.\"", "\"Kọwaa ihe mere i ji tinye nke a ebe a.\""] },
            { title: "Ọ pụọla n'ụzọ?", bullets: ["Otu mgbanwe n'otu oge", "Ma ọ bụ malite mkparịta ụka ọhụrụ nwere prompt doro anya karị"] }
          ],
          tryIt: "Were usoro oge gị site na Nkuzi 3. Rịọ maka mgbanwe abụọ, otu n'otu oge, ka ọ dabara n'ezi izu gị. Tụnyere nke mbụ na nke ikpeazụ.",
          youCanNow: "ime ka azịza AI ka mma site n'ajụjụ nsochi doro anya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere i nwere ike ịrịọ ngwa enyemaka ahụ ka ọ gbanwee azịza ya?", options: ["Ọ na-echefu ozi ọ bụla", "Ọ na-echeta ihe i kwuru na mbụ n'otu mkparịta ụka ahụ", "Ọ bụ coach gị", "Ọ ga-ekwenyerịrị gị"], answer: 1, why: "N'otu mkparịta ụka ahụ, ngwa enyemaka ahụ na-echeta ozi gara aga, ya mere ị nwere ike ịrịọ mgbanwe." },
            { objective: "O4", q: "Atụmatụ ahụ tinyere ọtụtụ oge ọmụmụ ihe tupu egwuregwu Fraịdee gị. Gịnị ka ị ga-ezipu?", options: ["\"Ọ dịghị mma.\"", "\"Malitegharịa ma tinyekwuo ihe.\"", "\"Bugharịa oge ọmụmụ ihe n'ụbọchị egwuregwu ka ọ bụrụ mgbe nri abalị.\"", "Ọ dịghị ihe; soro ya otu o sila dị"], answer: 2, why: "Ajụjụ nsochi doro anya nke na-ekwu otu mgbanwe na-edozi atụmatụ ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele azịza AI na coach gị",
          minutes: 5,
          goal: "Hụ akụkụ azịza AI chọrọ ilele ma lelee ha na onye ma ọ bụ isi iyi kwesịrị ekwesị.",
          text: [
            "AI nwere ike ịchepụta ihe ma ọ bụ nye ozi ochie. A na-akpọ nke a mgbe ụfọdụ hallucination. N'egwuregwu, ọ nwere ike ịbụ iwu ezighi ezi, ọnụ ọgụgụ e chepụtara echepụta, ụbọchị recruiting ochie ma ọ bụ ndụmọdụ mmega ahụ dị ize ndụ.",
            "Lelee mgbe niile ibu mmega ahụ, ndụmọdụ mmerụ ahụ na ahụike, nri, ọgwụ mgbakwunye (supplements), eligibility, recruiting na iwu NIL. Lelee ha na coach gị, athletic trainer, dọkịta, ọkachamara nri a debanyere aha (registered dietitian), ma ọ bụ ọfịs compliance ụlọ akwụkwọ gị, nakwa na peeji gọọmentị dị ka ncaa.org.",
            "Ezigbo omume: jụọ ngwa enyemaka ahụ \"Gịnị ka m kwesịrị ilelekwa na coach m?\" Wee jụọ coach gị n'ezie."
          ],
          steps: ["Kaa akara n'eziokwu, nọmba, iwu ma ọ bụ ndụmọdụ ahụike ọ bụla dị n'azịza ahụ.", "Kpebie onye ga-elele ya: coach, athletic trainer, dọkịta, dietitian ma ọ bụ ọfịs compliance.", "Lelee peeji gọọmentị maka iwu.", "Ọ bụrụ na ha ekwekọghị, soro onye ahụ ma ọ bụ isi iyi gọọmentị."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Ọfịs compliance", "ọfịs ụlọ akwụkwọ maara iwu egwuregwu, gụnyere iwu recruiting na NIL."]],
          slides: [
            { title: "AI nwere ike ime mperi gbasara", bullets: ["Iwu na ụbọchị recruiting", "Ọnụ ọgụgụ na ndekọ", "Ndụmọdụ mmega ahụ, mmerụ ahụ na nri"] },
            { title: "Onye na-elele gịnị", bullets: ["Mmega ahụ: coach", "Mmerụ ahụ na ahụike: athletic trainer ma ọ bụ dọkịta", "Nri: registered dietitian", "Iwu na NIL: ọfịs compliance"] },
            { title: "Ezigbo omume", bullets: ["Jụọ: \"Gịnị ka m kwesịrị ilelekwa?\"", "Wee lelee ya na ezi mmadụ"] }
          ],
          sources: [{ name: "NCAA: Name, Image and Likeness (iwu maka ndị egwuregwu mahadum)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Jụọ ngwa enyemaka AI otu ajụjụ gbasara iwu egwuregwu gị, dịka ọmụmaatụ ugboro ole otu ọ bụla nwere ike ịkpọ timeout. Wee chọta azịza ya n'akwụkwọ iwu gọọmentị otu egwuregwu (league) gị ma ọ bụ jụọ coach gị, ma lee ma ha dabara.",
          youCanNow: "ịhụ ihe chọrọ ilele n'azịza AI na iburu ya gakwuru onye kwesịrị ekwesị ma ọ bụ isi iyi gọọmentị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ hallucination AI?", options: ["Nrọ n'oge ụra ehihie", "Vidiyo a na-egosighachi", "Azịza ọsọ ọsọ", "Ihe AI chepụtara nke dị ka eziokwu"], answer: 3, why: "AI nwere ike ịchepụta iwu, ọnụ ọgụgụ ma ọ bụ ụbọchị dị ka ezi ihe." },
            { objective: "O5", q: "AI tụrụ aro ọgwụ mgbakwunye (supplement) iji gbakee ngwa ngwa. Onye ga-elele ya?", options: ["Onye otu gị", "Registered dietitian, dọkịta gị ma ọ bụ athletic trainer gị", "Weebụsaịtị supplement ahụ", "Ọ dịghị onye; AI na-eziri ezi mgbe niile"], answer: 1, why: "A ga-elelerịrị ndụmọdụ gbasara supplement na nri na onye ọkachamara kwesịrị ekwesị, nakwa na compliance maka eligibility." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe ozi nzuzo na ozi ahụike gị",
          minutes: 5,
          goal: "Jiri AI maka ezi ọrụ n'ekesaghị ozi nzuzo, ozi ahụike ma ọ bụ ozi akaụntụ.",
          text: [
            "Edela ozi nzuzo n'ime ngwa enyemaka AI: okwuntughe, nọmba Social Security (nọmba njirimara gọọmentị US) ma ọ bụ nọmba ID, adreesị ụlọ gị, ozi ụlọ akụ, ma ọ bụ akwụkwọ ahụike dị ka akụkọ mmerụ ahụ, ọgwụ ma ọ bụ nsonaazụ nnwale.",
            "Ị ka nwere ike inweta enyemaka. Dee \"[ụlọ akwụkwọ m]\" ma ọ bụ \"mmerụ ahụ hamstring nke athletic trainer m na-agwọ\" kama aha na nkọwa ahụike. Jụọ ajụjụ n'ozuzu; buru ndị kpọmkwem gakwuru onye ọkachamara.",
            "Kpachara anya maka aghụghọ e ji eche ndị egwuregwu: ndị recruiter adịgboroja, azụmahịa brand adịgboroja na ndị agent adịgboroja na-eme ka ị mee ngwa ngwa, na-arịọ ego tupu ihe ọ bụla, ma ọ bụ na-arịọ koodu ịbanye (login code). Buru ụzọ lelee ha na coach gị ma ọ bụ ọfịs compliance."
          ],
          steps: ["Gụọ prompt gị tupu i zipu ya.", "Wepụ aha, nọmba, okwuntughe na nkọwa ahụike.", "Jiri ihe nnọchi dị ka \"[ụlọ akwụkwọ m]\".", "Lee onyinye na-eme ka ị mee ngwa ngwa, ụgwọ tupu ihe ọ bụla na arịrịọ koodu dị ka ihe ịdọ aka na ntị."],
          words: [["Ihe nnọchi (placeholder)", "ihe e ji dochie anya dị ka \"[ụlọ akwụkwọ m]\" nke na-eme ka ezi nkọwa ahụ bụrụ nzuzo."], ["Aghụghọ (scam)", "wayo e ji ezu ego, akaụntụ ma ọ bụ ozi."]],
          slides: [
            { title: "Edela ihe ndị a n'ime AI mgbe ọ bụla", bullets: ["Okwuntughe na koodu ịbanye", "Nọmba ID ma ọ bụ nke ụlọ akụ, adreesị ụlọ", "Akụkọ mmerụ ahụ, ọgwụ, nsonaazụ nnwale"] },
            { title: "Jiri ihe nnọchi", bullets: ["\"[ụlọ akwụkwọ m]\" kama aha ya", "Ajụjụ n'ozuzu nye AI, nke kpọmkwem nye onye ọkachamara"] },
            { title: "Aghụghọ e ji eche ndị egwuregwu", bullets: ["Ndị recruiter na ndị agent adịgboroja", "Azụmahịa brand adịgboroja na-arịọ ego tupu ihe ọ bụla", "Onye ọ bụla na-arịọ koodu ịbanye"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri ngwa enyemaka AI mee atụmatụ izu otu gị maka mmega ahụ na ọmụmụ ihe. Jiri prompt nwere akụkụ atọ, rịọ maka mgbanwe abụọ, wepụ ozi nzuzo na ozi ahụike, ma gosi coach gị ma ọ bụ athletic trainer gị atụmatụ ahụ.",
          youCanNow: "iji AI hazie izu gị ma na-echebe ozi nzuzo na ozi ahụike, na ịhụ aghụghọ e ji eche ndị egwuregwu.",
          quickCheck: [
            { objective: "O6", q: "Kedu nkọwa ị ga-ewepụ na prompt?", options: ["Oge mmega ahụ gị", "Egwuregwu gị", "Akụkọ mmerụ ahụ gị na ndepụta ọgwụ gị", "Na ị chọrọ tebụl"], answer: 2, why: "Akwụkwọ ahụike dị ka akụkọ mmerụ ahụ na ọgwụ anaghị aba n'ime ngwa AI." },
            { objective: "O6", q: "Onye kpọrọ onwe ya \"agent\" zitere gị ozi gbasara azụmahịa brand ma rịọ koodu ịbanye ka o mechaa ya taa. Gịnị ka ị ga-eme?", options: ["Ekesala koodu ahụ mgbe ọ bụla, ma lelee ya na coach gị ma ọ bụ ọfịs compliance", "Zipu koodu ahụ ngwa ngwa", "Kwụọ ụgwọ ka i jide azụmahịa ahụ", "Nye ha okwuntughe gị kama"], answer: 0, why: "Ime ka ị mee ngwa ngwa na ịrịọ koodu bụ ihe ịdọ aka na ntị nke aghụghọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI n'obi ike",
        questions: [
          { objective: "O4", q: "Atụmatụ AI enweghị ụbọchị izu ike. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Nabata ya otu o sila dị", "Hichapụ app ahụ", "Na-emega ahụ kwa ụbọchị ruo mgbe ebighị ebi", "Jụọ: \"Tinye ụbọchị izu ike.\""], answer: 3, why: "Ajụjụ nsochi na-arịọ ngwa enyemaka ahụ ka ọ gbanwee azịza ya." },
          { objective: "O5", q: "Onye kwesịrị ilele ndụmọdụ AI gbasara mmerụ ahụ?", options: ["Athletic trainer gị ma ọ bụ dọkịta", "Onye otu gị", "AI n'onwe ya", "Okwu mmadụ dere na soshal midia"], answer: 0, why: "Ajụjụ gbasara ahụike na mmerụ ahụ na-aga n'aka onye ọkachamara tozuru oke." },
          { objective: "O5", q: "Gịnị bụ hallucination n'AI?", options: ["Nrọ tupu egwuregwu", "Ịntanetị na-aga nwayọọ", "Ihe AI chepụtara nke dị ka eziokwu", "Ụdị mmega (drill)"], answer: 2, why: "AI nwere ike ịchepụta eziokwu, iwu ma ọ bụ ọnụ ọgụgụ dị ka ezi ihe." },
          { objective: "O6", q: "Kedu nkọwa dị mma itinye na prompt?", options: ["Okwuntughe gị", "Ndepụta ọgwụ gị", "Adreesị ụlọ gị", "Oge mmega ahụ gị"], answer: 3, why: "Oge mmega ahụ na-enyere azịza aka, ọ bụghịkwa ozi nzuzo." },
          { objective: "O6", q: "Onye kpọrọ onwe ya \"recruiter\" zitere gị DM na-arịọ ụgwọ ka o zigara ndị coach vidiyo kacha mma gị (highlights) taa. Gịnị ka ị ga-eme?", options: ["Kwụọ ngwa ngwa tupu ohere ahụ agwụ", "Buru ụzọ lelee ya na coach gị ma ọ bụ ọfịs compliance", "Zipu koodu ịbanye gị", "Zipu nọmba ID gị"], answer: 1, why: "Ime ka ị mee ngwa ngwa na ụgwọ tupu ihe ọ bụla bụ ihe ịdọ aka na ntị. Lelee tupu i mee ihe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite AI n'Egwuregwu",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa AI bụ:", options: ["Ụdị bọọlụ ọhụrụ", "Onye ikpe egwuregwu", "Mmemme na-amụta usoro site na data", "Otu asọmpi egwuregwu (league)"], answer: 2, why: "AI na-amụta usoro site na data wee jiri ya zaa ajụjụ ma ọ bụ buo amụma." },
      { objective: "O1", q: "Kedu nke ABỤGHỊ otu e si eji AI n'egwuregwu?", options: ["Ịkpa eriri akpụkpọ ụkwụ gị", "Ịkara egwuregwu na vidiyo egwuregwu", "Ịgbaso ọsọ gị site n'app", "Ibu amụma ohere ịgba bọọlụ ga-abanye"], answer: 0, why: "Ịkpa eriri akpụkpọ ụkwụ bụ ọrụ mmadụ; ndị ọzọ na-eji AI." },
      { objective: "O1", q: "Onye na-eme mkpebi ikpeazụ gbasara mmega ahụ gị?", options: ["Gị na coach gị", "AI", "App ọ bụla", "Ọ dịghị onye"], answer: 0, why: "AI na-enyere aka; ndị mmadụ na-ekpebi." },
      { objective: "O2", q: "Kedu nke bụ ngwa enyemaka AI a ma ama na-akwụghị ụgwọ?", options: ["Elekere ọsọ (stopwatch)", "Bọọdụ akara egwuregwu", "Google Gemini", "Uwe egwuregwu (jersey)"], answer: 2, why: "Gemini, ChatGPT na Copilot bụ ngwa enyemaka AI n'efu." },
      { objective: "O2", q: "Ị dị afọ 15 ma chọọ iji ngwa enyemaka AI. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Ghaa ụgha gbasara afọ gị", "Lelee iwu afọ app ahụ ma jụọ nne na nna gị ma ọ bụ onye nlekọta gị", "Jiri akaụntụ enyi gị", "Kesaa okwuntughe gị"], answer: 1, why: "Ọtụtụ ngwa enyemaka nwere iwu afọ; nne ma ọ bụ nna kwesịrị ịma." },
      { objective: "O2", q: "Ebee ka ị na-edekarị ihe nye ngwa enyemaka AI?", options: ["Akara batrị", "Igwefoto", "Adreesị ụlọ akwụkwọ gị", "Igbe ozi dị n'akụkụ ala"], answer: 3, why: "Igbe ozi bụ ebe ị na-ede prompt gị." },
      { objective: "O2", q: "Mgbe i jiri kọmputa ụlọ akwụkwọ ndị mmadụ na-eji ọnụ mechaa, ị kwesịrị:", options: ["Ịnọgide n'ime akaụntụ gị", "Ichekwa okwuntughe gị", "Ịpụ (sign out) na imechi browser", "Ịhapụ akwụkwọ nwere okwuntughe gị"], answer: 2, why: "Ịpụ na-echebe akaụntụ gị." },
      { objective: "O3", q: "Gịnị bụ prompt?", options: ["Mmega ịkpọ ahụ ọkụ", "Mkpu otu egwuregwu", "Timeout", "Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI"], answer: 3, why: "Prompt bụ arịrịọ gị nye AI." },
      { objective: "O3", q: "Kedu akụkụ na-agwa AI otu ọ ga-esi hazie azịza ya?", options: ["Ụdị azịza, dị ka tebụl ma ọ bụ ndepụta", "Nọmba jersey gị", "Okwuntughe gị", "Nọmba ekwentị coach gị"], answer: 0, why: "Ikwu ụdị azịza na-eme ka azịza bịa n'ụdị ị chọrọ." },
      { objective: "O3", q: "Kedu prompt kacha doo anya?", options: ["\"mmega ahụ\"", "\"Abụ m onye ọsọ sprint na mahadum, mmega site n'elekere 3 ruo 5 nke ehihie. Mee atụmatụ ọmụmụ ihe maka izu ahụ na tebụl.\"", "\"enyemaka\"", "\"egwuregwu\""], answer: 1, why: "O nwere ihe ị chọrọ, ọnọdụ gị na ụdị azịza." },
      { objective: "O4", q: "Azịza mbụ adabaghị n'ụbọchị egwuregwu gị. Ị kwesịrị:", options: ["Ịhapụ ya", "Ịnabata ya", "Ịjụ ajụjụ nsochi iji gbanwee ụbọchị egwuregwu", "Ịkwụ ụgwọ maka app ọhụrụ"], answer: 2, why: "Ajụjụ nsochi na-edozi akụkụ na-adabaghị." },
      { objective: "O4", q: "Mgbanwe ole ka ị kwesịrị ịrịọ n'otu oge ka ọ doo anya?", options: ["Otu n'otu oge", "Iri", "Ọ dịghị", "Ole ị nwere ike ide"], answer: 0, why: "Otu mgbanwe n'otu oge na-eme ka azịza ahụ gaa n'ụzọ ziri ezi." },
      { objective: "O4", q: "Mkparịta ụka na-apụ n'ụzọ mgbe niile. Ezigbo ihe ime bụ:", options: ["Ide okwuntughe gị", "Ikwughachi otu okwu ahụ", "Ịkwụsị mmega ahụ", "Ịmalite mkparịta ụka ọhụrụ nwere prompt doro anya karị"], answer: 3, why: "Mkparịta ụka ọhụrụ nwere prompt doro anya karị na-arụkarị ọrụ nke ọma." },
      { objective: "O5", q: "AI nyere gị otu iwu recruiting. Ị kwesịrị:", options: ["Itinye ya n'ịntanetị dị ka eziokwu", "Ịlele ya na ncaa.org ma ọ bụ na ọfịs compliance gị", "Ileghara iwu niile anya", "Ịjụ AI ọzọ ma tụkwasị ya obi"], answer: 1, why: "Iwu na-agbanwe; lelee isi iyi gọọmentị." },
      { objective: "O5", q: "Onye kwesịrị ekwesị ilele atụmatụ nri?", options: ["Onye ọ bụla na-ewu ewu na soshal midia (influencer)", "Registered dietitian", "AI", "Egwuregwu vidiyo"], answer: 1, why: "A zụrụ ndị registered dietitian ka ha nye ndụmọdụ gbasara nri." },
      { objective: "O5", q: "Onye maara iwu NIL na recruiting nke ụlọ akwụkwọ gị?", options: ["Ebe a na-ere nri", "Onye na-anya ụgbọ ala", "Otu egwuregwu na-emegide gị", "Ọfịs compliance"], answer: 3, why: "Ọfịs compliance na-ahụ maka iwu egwuregwu." },
      { objective: "O6", q: "Kedu nke ị na-ekwesịghị ide MGBE Ọ BỤLA n'ime ngwa enyemaka AI?", options: ["Ndepụta ọgwụ gị", "Usoro oge mmega ahụ gị", "Egwuregwu gị", "Ọnọdụ gị n'otu"], answer: 0, why: "Ọgwụ na akwụkwọ ahụike bụ ozi nzuzo." },
      { objective: "O6", q: "Kedu otu ị ga-esi jụọ maka mmerụ ahụ n'ekesaghị akwụkwọ ahụike?", options: ["Tinye akụkọ MRI gị", "Dee ndetu dọkịta gị", "Jụọ ajụjụ n'ozuzu ma buru nke kpọmkwem gakwuru athletic trainer gị", "Kesaa nọmba insurance gị"], answer: 2, why: "Ajụjụ n'ozuzu dị mma; nlekọta kpọmkwem bụ ọrụ onye ọkachamara." },
      { objective: "O6", q: "Azụmahịa brand na-arịọ ka ị kwụọ ụgwọ tupu i sonye. Nke a bụ:", options: ["Ihe nkịtị maka azụmahịa niile", "Ihe NCAA chọrọ", "Ezigbo ihe ịrịba ama", "Ihe ịdọ aka na ntị nke aghụghọ"], answer: 3, why: "Ezi brand na-akwụ gị ụgwọ; ụgwọ tupu ihe ọ bụla bụ ihe ịrịba ama aghụghọ a na-ahụkarị." },
      { objective: "O6", q: "Mmadụ na-arịọ koodu e zitere n'ekwentị gị ugbu a. Ị kwesịrị:", options: ["Ịgụrụ ha ya", "Ịghara ikesa ya mgbe ọ bụla", "Itinye ya n'ịntanetị", "Iziga ya otu egwuregwu gị"], answer: 1, why: "Koodu ahụ na-echebe akaụntụ gị. Ezi ndị recruiter na brand anaghị arịọ ya mgbe ọ bụla." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 7, 10, 13, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Prompt doro anya", objective: "O3", notYet: "Prompt ahụ edoghị anya, dịka ọmụmaatụ \"mee m atụmatụ\".", meets: "Prompt ahụ na-enye ihe ị chọrọ, ezi usoro oge mmega ahụ, egwuregwu na klas gị, na ụdị azịza.", exceeds: "Azịza mbụ adabaworị n'ọtụtụ izu gị." },
      { name: "Mere ka ọ ka mma", objective: "O4", notYet: "Jiri azịza mbụ otu o si dị.", meets: "Rịọrọ maka opekata mpe mgbanwe abụọ, otu n'otu oge.", exceeds: "Nwere ike ikwu ihe mgbanwe ọ bụla dozie, dị ka ụbọchị izu ike ma ọ bụ oge n'ụbọchị egwuregwu." },
      { name: "Ozi nzuzo na ozi ahụike adịghị n'ime ya", objective: "O6", notYet: "Prompt ahụ nwere aha, nọmba ID, okwuntughe ma ọ bụ nkọwa ahụike.", meets: "Ọ dịghị ozi nzuzo ma ọ bụ ozi ahụike na prompt ma ọ bụ n'atụmatụ ahụ.", exceeds: "Jiri ihe nnọchi dị ka \"[ụlọ akwụkwọ m]\" ma debe ajụjụ ahụike maka athletic trainer." },
      { name: "Elelere ya na coach", objective: "O5", notYet: "Soro atụmatụ ahụ n'egosighị ya onye ọ bụla.", meets: "Gosiri coach ma ọ bụ athletic trainer atụmatụ ahụ tupu ịgbaso ya.", exceeds: "Gbanwere atụmatụ ahụ dabere n'ihe ha kwuru ma nwee ike ikwu ihe gbanwere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri atụmatụ AI mere maka mmega ahụ na ọmụmụ ihe n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị coach ma ọ bụ athletic trainer kwuru na ndị egwuregwu na-elele ndụmọdụ AI n'aka ha",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Athletes ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ nwere ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Ezi usoro oge mmega ahụ, egwuregwu na klas onye na-amụ ihe maka otu izu",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Lelee iwu afọ app AI ọ bụla maka otu gị; ndị na-amụ ihe na-erubeghị afọ 18 chọrọ nkwado nne na nna ma ọ bụ onye nlekọta.",
      "Rịọ coach ma ọ bụ athletic trainer ka o lelee atụmatụ ikpeazụ ya na ndị egwuregwu.",
      "Ejila mgbe ọ bụla rịọ ndị egwuregwu ka ha dee akụkọ mmerụ ahụ, ọgwụ ma ọ bụ nọmba ID n'ime ngwa AI.",
      "Kparịta ụka gbasara aghụghọ ndị recruiter na azụmahịa brand adịgboroja, ma duzie ndị egwuregwu gaa n'ọfịs compliance ha maka ajụjụ NIL.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
