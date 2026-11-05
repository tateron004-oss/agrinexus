"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-digital-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-digital-marketing-ig",
  lang: "ig",
  translationOf: "athletes-ai-digital-marketing",
  category: "Athletes",
  name: "Atụmatụ Ahịa Dijitalụ site n'AI maka Ndị Egwuregwu",
  skills: "Ịtọ ebumnuche ahịa, Ịkọwa ndị na-ege gị ntị, Ịhọrọ ọwa, Iji AI dee atụmatụ izu 4, Ịtụ nsonaazụ na ime mgbanwe",
  outcome: "iji ngwa enyemaka AI wuo ma mee atụmatụ ahịa dijitalụ dị mfe nke izu 4 maka onwe gị dị ka onye egwuregwu: otu ebumnuche, otu otu ndị mmadụ, ọwa abụọ, atụmatụ izipu ihe kwa izu na nọmba atọ ị na-eso.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na ndị na-amalite ọrụ egwuregwu ha, ndị chọrọ ka ndị na-eso ha mụbaa n'ebumnuche: maka ịchọ ka a họrọ ha (recruiting), ohere NIL, ụlọ akwụkwọ egwuregwu (camp) ma ọ bụ ọrụ n'ọdịnihu, na maka ndị nkuzi (coach) na-enyere ha aka.",
    "Ahịa (marketing) pụtara ime ka ndị kwesịrị ekwesị mara gị, hụ gị n'anya ma tụkwasị gị obi. Ị ga-etọ ebumnuche, họrọ ndị ị chọrọ iru na ọwa gị, jiri AI dee atụmatụ izu 4, ma mụta nọmba ndị ị ga-ele anya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwekwa ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Iwu NIL dị iche site n'ụlọ akwụkwọ, steeti na ọkwa, ya mere jụọ ọfịs compliance gị ma ọ bụ otu egwuregwu steeti gị tupu i nabata nkwekọrịta ọ bụla a na-akwụ ụgwọ."
  ],
  finalTask: "Dee atụmatụ ahịa izu 4 n'otu peeji: otu ebumnuche SMART, nkọwa ndị ị chọrọ iru, ọwa abụọ, atụmatụ izipu ihe kwa izu nke i ji AI dee, na nọmba atọ ị ga-eso. Mee izu mbụ, dee nọmba ndị ahụ, ma dee otu mgbanwe maka izu nke abụọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na ndị na-amalite ọrụ egwuregwu, ndị chọrọ ka ndị na-eso ha mụbaa n'ebumnuche, maka recruiting, ohere NIL, camp ma ọ bụ ọrụ n'ọdịnihu, na ndị nkuzi na-enyere ha aka.",
    startingPoint: "Ha na-eji soshal midia kwa ụbọchị ma na-ezipu ihe mgbe ụfọdụ, na-enweghịkarị atụmatụ. Ole na ole nwere ebumnuche e dere ede, ndị ha chọrọ iru doro anya, atụmatụ izipu ihe ma ọ bụ nọmba ha na-eso, ọtụtụ amaghịkwa nke ọma iwu ikwupụta onyinye ma ọ bụ ihe a kwụrụ ụgwọ ka ha zipu.",
    gap: "Izipu ihe n'enweghị ebumnuche ma ọ bụ ndị ị chọrọ iru anaghị eme ka ndị nkuzi zaghachi, ka ndị mmadụ debanye aha ma ọ bụ ka ụlọ ọrụ (brand) nwee mmasị, ozi ụgha ma ọ bụ ozi na-ekwupụtaghị onyinye nwere ike imebi ntụkwasị obi ma mebie iwu mgbasa ozi. Atụmatụ dị mfe nke izu anọ nwere ozi eziokwu na nọmba e soro na-eme ka soshal midia ghọọ ezi ohere.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 7",
      "Ekwentị nwere app soshal midia na ngwa enyemaka AI n'efu; naanị ngwa n'efu",
      "Ihe dị ka nkeji 60 nke nkuzi gbakwunyere izu anọ nke izipu ihe n'akụkụ ụlọ akwụkwọ na mmega ahụ",
      "Iwu afọ ndụ nke ikpo okwu ọ bụla; ndị egwuregwu na-erubeghị afọ 18 na-etinye nne na nna ma ọ bụ onye nlekọta",
      "Iwu FTC maka ikwupụta, iwu NIL nke ụlọ akwụkwọ na NCAA ma ọ bụ otu egwuregwu, na nchekwa onwe: enweghị ebe ị nọ ugbu a (live location) ma ọ bụ ozi gbasara ụlọ gị"
    ],
    prerequisites: "Ọ dịghị"
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ihe ị chọrọ n'izu anọ na-abịa", action: "ide otu ebumnuche ahịa SMART", standard: "nwere akụkụ SMART ise niile, gụnyere nọmba na ụbọchị" },
    { id: "O2", condition: "Mgbe e nyere gị otu ndị ị chọrọ iru", action: "ide obere nkọwa ndị ahụ: ndị ha bụ, ihe na-emetụ ha n'obi, ebe ha na-anọ n'ịntanetị na ihe na-eme ka ha mee ihe", standard: "nke i lere ya na mmadụ abụọ ma ọ bụ atọ n'ezie si n'otu ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị nkọwa ndị ị chọrọ iru", action: "ịhọrọ ọwa abụọ ebe ndị ahụ na-anọworị", standard: "nwere ihe kpatara nke ọ bụla, ma e lelere iwu afọ ndụ na ntọala nzuzo (privacy)" },
    { id: "O4", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ime atụmatụ izipu ihe izu 4 nwere echiche, ụdị na oku ime ihe (call to action) maka ihe ọ bụla ị ga-ezipu", standard: "nke e meziri ka ọ dabara oge gị, na-ekesaghị ebe ị nọ ugbu a, ụlọ gị ma ọ bụ oge ụlọ akwụkwọ gị" },
    { id: "O5", condition: "Mgbe e nyere gị caption AI dere", action: "ide ya ọzọ dị ka ozi eziokwu n'okwu nke gị, na ikwupụta ya nke ọma mgbe ụlọ ọrụ nyere gị ihe ọ bụla", standard: "n'enweghị okwu ọ bụla ị na-apụghị igosi na ọ bụ eziokwu, ma ikwupụta ahụ dị mfe ịhụ n'otu ebe ahụ ozi ahụ dị" },
    { id: "O6", condition: "Mgbe izu ọ bụla nke izipu ihe gachara", action: "ide nọmba atọ metụtara ebumnuche gị na ịhọrọ otu mgbanwe maka izu na-abịa", standard: "e dere n'ime sheet kwa izu, gị onwe gị kpebiekwa mgbanwe ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ebumnuche, ndị ị chọrọ iru na ọwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịtọ ebumnuche ahịa",
          minutes: 5,
          goal: "Dee otu ebumnuche ahịa SMART maka izu anọ na-abịa.",
          text: [
            "Ahịa n'enweghị ebumnuche bụ naanị izipu ihe. Kpebie ihe ị chọrọ n'izu anọ na-abịa: ka ndị nkuzi mahadum hụ gị, ka ụmụaka jupụta camp gị, ka ndị na-eso gị mụbaa nke ụlọ ọrụ ga-enwe mmasị na ya, ma ọ bụ ka i wuo ndị na-eso gị maka ọrụ gị n'ọdịnihu.",
            "Mee ka ọ bụrụ SMART: Specific (doro anya), Measurable (enwere ike ịtụ ya), Achievable (enwere ike imezu ya), Relevant (metụtara gị) na Time-bound (nwere ụbọchị njedebe). \"Nweta mmadụ 15 debanyere aha na clinic ịtụ bọọlụ n'efu m n'oge okpomọkụ tupu June 30\" bụ SMART. \"Bụrụ onye a ma ama\" abụghị.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ime ka ọ doo anya: \"Abụ m onye na-agba basketball n'ụlọ akwụkwọ sekọndrị. Nyere m aka mee ka 'ka ndị nkuzi mahadum ọzọ hụ m' bụrụ ebumnuche SMART maka izu 4 na-abịa.\""
          ],
          steps: ["Họrọ ihe ị chọrọ n'izu 4.", "Tinye nọmba.", "Tinye ụbọchị.", "Lelee na o kwere omume ma dị gị mkpa."],
          words: [["Ahịa (marketing)", "ime ka ndị kwesịrị ekwesị mara gị, hụ gị n'anya ma tụkwasị gị ma ọ bụ ihe ị na-enye obi."], ["Ebumnuche SMART", "Specific, Measurable, Achievable, Relevant na Time-bound: doro anya, enwere ike ịtụ, enwere ike imezu, metụtara gị, nwere ụbọchị."]],
          slides: [
            { title: "Enweghị ebumnuche = naanị izipu ihe", bullets: ["Recruiting? Camp? Ndị na-eso gị? Ọrụ?"] },
            { title: "SMART", bullets: ["Doro anya, enwere ike ịtụ, enwere ike imezu", "Metụtara gị, nwere ụbọchị njedebe"] },
            { title: "Ọmụmaatụ", bullets: ["\"Mmadụ 15 debanyere aha na clinic n'efu m tupu June 30\"", "Ọ bụghị: \"bụrụ onye a ma ama\""] }
          ],
          tryIt: "Dee otu ebumnuche ahịa maka izu anọ na-abịa. Rịọ ngwa enyemaka AI ka o mee ya SMART, wee mezie ya ka ọ bụrụ eziokwu ma kwere omume nye gị.",
          youCanNow: "ide ebumnuche ahịa SMART.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka M dị na SMART pụtara?", options: ["Measurable (enwere ike ịtụ ya)", "Marketing (ahịa)", "Monthly (kwa ọnwa)", "Meaningful (bara uru)"], answer: 0, why: "SMART pụtara Specific, Measurable, Achievable, Relevant na Time-bound." },
            { objective: "O1", q: "Ebumnuche gị bụ \"ka ndị nkuzi ọzọ hụ m\". Gịnị ka ị ga-etinye ka ọ bụrụ SMART?", options: ["Hashtag ndị ọzọ", "Ọnụ ọgụgụ ndị na-eso gị ka ukwuu", "Nọmba na ụbọchị, dị ka ndị nkuzi 5 zaghachiri tupu March 1", "Foto profaịlụ ọhụrụ"], answer: 2, why: "Ebumnuche SMART nwere nọmba na ụbọchị ị nwere ike ilele." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịmara ndị ị chọrọ iru",
          minutes: 5,
          goal: "Kọwaa ndị ị chọrọ iru n'otu obere nkọwa.",
          text: [
            "Ndị ị chọrọ iru (audience) bụ otu ndị mmadụ a kapịrị ọnụ ị chọrọ iru. Onye nkuzi mahadum, nne ma ọ bụ nna nwa dị afọ 10 chọrọ camp, onye nwe obere azụmahịa n'obodo, na onye hụrụ egwuregwu gị n'anya, ha niile chọrọ ihe dị iche iche.",
            "Dee obere nkọwa ndị ahụ: ndị ha bụ, ihe na-emetụ ha n'obi, ebe ha na-anọ n'ịntanetị, na ihe ga-eme ka ha mee ihe. Ọmụmaatụ: \"Nne na nna ụmụaka nọ n'obodo dị afọ 8 ruo 12, ndị ọrụ juru, ndị chọrọ nkuzi dị nchebe ma na-atọ ụtọ, na-eji otu Facebook na Instagram, na-edebanye aha mgbe ha hụrụ ezi nyocha (reviews).\"",
            "AI nwere ike inyere gị aka ịchọpụta echiche gbasara ihe na-emetụ ndị ahụ n'obi. Wee lelee ya site n'ịjụ mmadụ abụọ ma ọ bụ atọ n'ezie si n'otu ahụ."
          ],
          steps: ["Kpọọ aha otu ahụ.", "Dee ihe na-emetụ ha n'obi.", "Dee ebe ha na-anọ n'ịntanetị.", "Dee ihe na-eme ka ha mee ihe.", "Lelee ya na mmadụ abụọ ma ọ bụ atọ n'ezie."],
          words: [["Ndị ị chọrọ iru (audience)", "ndị mmadụ a kapịrị ọnụ ị chọrọ iru."], ["Nkọwa ndị ị chọrọ iru (audience profile)", "obere nkọwa banyere ndị ha bụ na ihe ha chọrọ."]],
          slides: [
            { title: "Ndị dị iche iche ị nwere ike iru", bullets: ["Ndị nkuzi mahadum", "Nne na nna ụmụaka camp", "Azụmahịa dị n'obodo", "Ndị hụrụ egwuregwu gị n'anya"] },
            { title: "Nkọwa ndị ị chọrọ iru", bullets: ["Ndị ha bụ", "Ihe na-emetụ ha n'obi", "Ebe ha nọ n'ịntanetị", "Ihe na-eme ka ha mee ihe"] },
            { title: "Lelee ya", bullets: ["Rịọ AI ka o nye echiche", "Wee jụọ mmadụ 2-3 n'ezie"] }
          ],
          tryIt: "Dee nkọwa ndị ị chọrọ iru maka ebumnuche gị. Jụọ ngwa enyemaka AI: \"Gịnị ọzọ nwere ike imetụ ndị a n'obi?\" Tinye otu echiche, wee jụọ otu onye n'ezie si n'otu ahụ ma ọ ziri ezi.",
          youCanNow: "ide obere nkọwa ndị ị chọrọ iru maka ebumnuche gị.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke kwesịrị ịdị na nkọwa ndị ị chọrọ iru?", options: ["Abụ kacha amasị gị", "Nọmba uwe egwuregwu gị", "Oge mmega ahụ gị", "Ebe ndị ahụ na-anọ n'ịntanetị"], answer: 3, why: "Nkọwa ahụ na-ekwu ndị ha bụ, ihe na-emetụ ha n'obi, ebe ha na-anọ na ihe na-eme ka ha mee ihe." },
            { objective: "O2", q: "Ngwa enyemaka AI chepụtara ihe na-emetụ nne na nna ụmụaka camp n'obi. Gịnị ka ị ga-eme ọzọ?", options: ["Jụọ nne na nna abụọ ma ọ bụ atọ n'ezie ma ọ ziri ezi", "Zipu ya dị ka eziokwu", "Jụọ AI ọzọ ruo mgbe o kwenyere gị", "Hapụ nkọwa ahụ"], answer: 0, why: "Lelee echiche AI na ndị mmadụ n'ezie si n'otu ahụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhọrọ ọwa gị",
          minutes: 5,
          goal: "Họrọ ọwa abụọ ebe ndị ị chọrọ iru na-anọworị.",
          text: [
            "Ọwa (channel) bụ ebe ị na-eru ndị mmadụ: Instagram, TikTok, YouTube, X, LinkedIn, otu Facebook, email, weebụsaịtị, ma ọ bụ ihu na ihu n'egwuregwu na mmemme obodo.",
            "Họrọ naanị ọwa abụọ ka i jiri malite, dabere na ndị ị chọrọ iru, ọ bụghị ihe na-ewu ewu. Ndị nkuzi mahadum na-elekarị vidiyo ihe kacha mma i mere (highlights) na profaịlụ recruiting, gbakwunyere email. Nne na nna ụmụaka camp nwere ike iji otu Facebook na akwụkwọ mgbasa ozi n'obodo. Ụlọ ọrụ na-ele otu ndị na-eso gị si emeso ihe ị na-ezipu.",
            "Lelee iwu afọ ndụ nke ikpo okwu ọ bụla, ma hazie akaụntụ gị ka gị na-achịkwa onye nwere ike ịkpọtụrụ gị. Ọ bụrụ na i rubeghị afọ 18, tinye nne gị, nna gị ma ọ bụ onye nlekọta gị."
          ],
          steps: ["Depụta ebe ndị ị chọrọ iru na-anọ.", "Họrọ abụọ kacha dabara.", "Lelee iwu afọ ndụ na ntọala nzuzo.", "Dee ihe mere i ji họrọ ọwa ọ bụla."],
          words: [["Ọwa (channel)", "ebe ị na-eru ndị ị chọrọ iru, dị ka app soshal midia ma ọ bụ email."], ["Engagement", "otu ndị mmadụ si emeso ihe ị zipuru: like, comment, share, save."]],
          slides: [
            { title: "Ọwa", bullets: ["App soshal midia: Instagram, TikTok, YouTube, X, LinkedIn", "Email na weebụsaịtị", "Ihu na ihu n'egwuregwu na mmemme"] },
            { title: "Họrọ abụọ", bullets: ["Ebe ndị ị chọrọ iru nọworị", "Ọ bụghị naanị ihe na-ewu ewu"] },
            { title: "Nọrọ na nchekwa", bullets: ["Lelee iwu afọ ndụ", "Chịkwaa onye nwere ike ịkpọtụrụ gị", "Erubeghị afọ 18: tinye nne ma ọ bụ nna"] }
          ],
          tryIt: "Họrọ ọwa abụọ gị ma dee otu ahịrịokwu maka nke ọ bụla na-akọwa ihe mere ndị ị chọrọ iru ji nọ ebe ahụ. Lelee ntọala nzuzo na akaụntụ ọ bụla.",
          youCanNow: "ịhọrọ ọwa abụọ dabara ndị ị chọrọ iru ma hazie ha n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ọwa?", options: ["Atụmatụ mmega ahụ gị", "Ebe ị na-eru ndị mmadụ, dị ka Instagram, email ma ọ bụ weebụsaịtị", "Ụdị igwefoto", "Ọnụ ọgụgụ ndị na-eso gị"], answer: 1, why: "Ọwa bụ ebe ị na-eru ndị ị chọrọ iru." },
            { objective: "O3", q: "App ọhụrụ na-ewu ewu, mana nne na nna ụmụaka camp ị chọrọ iru nọ n'otu Facebook. Gịnị ka ị ga-eme?", options: ["Jiri naanị app na-ewu ewu", "Banye n'app ọhụrụ ise", "Họrọ ọwa ebe ndị ị chọrọ iru nọworị, dị ka otu Facebook", "Kwụsị izipu ihe"], answer: 2, why: "Họrọ ọwa dabere na ndị ị chọrọ iru, ọ bụghị ihe na-ewu ewu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ebumnuche, ndị ị chọrọ iru na ọwa",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ebumnuche SMART?", options: ["Bụrụ onye a ma ama", "Zipu ihe karịa", "Nweta mmadụ 15 debanyere aha na clinic n'efu m tupu June 30", "Bụrụ brand"], answer: 2, why: "Ọ doro anya, enwere ike ịtụ ya, nwekwa ụbọchị." },
          { objective: "O2", q: "Gịnị bụ ndị ị chọrọ iru (audience)?", options: ["Ndị mmadụ a kapịrị ọnụ ị chọrọ iru", "Onye ọ bụla nọ n'ịntanetị", "Naanị ndị otu egwuregwu gị", "Ụdị ihe ị na-ezipu"], answer: 0, why: "Ahịa na-arụ ọrụ nke ọma mgbe ọ na-elekwasị anya n'otu ndị a kapịrị ọnụ." },
          { objective: "O2", q: "Kedu otu ị ga-esi lelee nkọwa ndị ị chọrọ iru?", options: ["Tụkwasị AI obi kpamkpam", "Chee echiche naanị", "Zipu ihe ma nwee olileanya", "Jụọ mmadụ abụọ ma ọ bụ atọ n'ezie si n'otu ahụ"], answer: 3, why: "Ndị mmadụ n'ezie na-agwa gị ma ihe i chere ziri ezi." },
          { objective: "O3", q: "Ọwa ole ka ị ga-eji malite?", options: ["App niile", "Abụọ", "Iri", "Ọ dịghị"], answer: 1, why: "Ọwa abụọ e ji arụ ọrụ nke ọma ka mma karịa ọtụtụ e ji arụ ọrụ na-adịghị mma." },
          { objective: "O3", q: "Ị dị afọ 16 ma na-amalite akaụntụ ọha. Ị kwesịrị:", options: ["Ikesa adreesị gị", "Itinye nne ma ọ bụ nna ma ọ bụ onye nlekọta ma lelee iwu afọ ndụ", "Ikwe ka onye ọ bụla zitere gị ozi", "Ịgha ụgha banyere afọ gị"], answer: 1, why: "Nchekwa na iwu afọ ndụ na-ebu ụzọ." }
        ]
      }
    },
    {
      name: "Isi 2: Atụmatụ, ime ya na ịtụ ya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI dee atụmatụ izu 4",
          minutes: 6,
          goal: "Jiri ngwa enyemaka AI dee atụmatụ izipu ihe izu 4 ma mezie ya.",
          text: [
            "Nye ngwa enyemaka AI ebumnuche gị, nkọwa ndị ị chọrọ iru na ọwa gị, wee jụọ: \"Mee atụmatụ izu 4 nwere ihe 3 a ga-ezipu kwa izu n'ọwa abụọ a. Maka ihe ọ bụla, nye echiche, ụdị ya (foto, obere vidiyo, story, email) na oku ime ihe. Tinye ya na tebụl.\"",
            "Oku ime ihe (call to action) na-agwa ndị mmadụ ihe ha ga-eme ọzọ: \"Debanye aha na njikọ (link) a\", \"Lee highlights m niile\", \"Zitere m email maka ozi camp\". Ihe ọ bụla ị na-ezipu nke na-akwado ebumnuche gị kwesịrị inwe otu.",
            "Mezie atụmatụ ahụ ka ọ dabara oge mmega ahụ gị na oge ụlọ akwụkwọ gị. Emela atụmatụ izipu ihe na-egosi ndị ị na-amaghị ebe ị nọ ugbu a, ụlọ gị ma ọ bụ oge ụlọ akwụkwọ gị."
          ],
          steps: ["Tinye ebumnuche gị, nkọwa ndị ị chọrọ iru na ọwa gị.", "Rịọ maka tebụl izu 4: echiche, ụdị, oku ime ihe.", "Mezie ya ka ọ dabara oge gị.", "Wepụ ihe ọ bụla na-ekesa ebe ị nọ ugbu a ma ọ bụ ụlọ gị."],
          words: [["Oku ime ihe (call to action)", "nzọụkwụ na-esote doro anya ị na-arịọ ndị mmadụ ka ha mee."], ["Atụmatụ ihe ị ga-ezipu (content plan)", "usoro oge nke ihe ị ga-ezipu na mgbe ị ga-ezipu ya."]],
          slides: [
            { title: "Nye AI", bullets: ["Ebumnuche SMART gị", "Nkọwa ndị ị chọrọ iru", "Ọwa abụọ gị"] },
            { title: "Rịọ maka tebụl", bullets: ["Ihe 3 kwa izu ruo izu 4", "Echiche, ụdị, oku ime ihe"] },
            { title: "Wee mezie ya", bullets: ["Mee ka ọ dabara oge mmega ahụ na ụlọ akwụkwọ", "Enweghị ebe ị nọ ugbu a ma ọ bụ ozi ụlọ gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka atụmatụ izu 4 gị na tebụl. Mezie opekata mpe ahịrị atọ ka ha dabara oge gị n'ezie na otu i si ekwu okwu.",
          youCanNow: "iji AI dee ma mezie atụmatụ ahịa izu 4.",
          quickCheck: [
            { objective: "O4", q: "Ihe atọ ole ka ihe ọ bụla dị na tebụl atụmatụ gị kwesịrị inwe?", options: ["Echiche, ụdị na oku ime ihe", "Like, share na save", "Ebe, oge na adreesị", "Naanị hashtag"], answer: 0, why: "Nkuzi ahụ na-arịọ echiche, ụdị na oku ime ihe maka ihe ọ bụla." },
            { objective: "O4", q: "Atụmatụ AI nwere story na-egosi gị ka ị na-apụ n'ụlọ gị kwa ụtụtụ. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-egosi usoro ndụ gị", "Zipu ya n'echi ya", "Wepụ ya n'ihi na ọ na-ekesa ụlọ gị na oge gị", "Tinye adreesị gị na ya"], answer: 2, why: "Emela atụmatụ izipu ihe na-egosi ndị ị na-amaghị ụlọ gị ma ọ bụ ebe ị nọ ugbu a." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ide ihe dị ka okwu gị, n'eziokwu",
          minutes: 5,
          goal: "Mee ka echiche dị n'atụmatụ ghọọ ozi eziokwu n'okwu nke gị, nwee ikwupụta ebe ọ dị mkpa.",
          text: [
            "AI nwere ike ide caption mbụ (draft), mana ndị mmadụ na-eso ndị egwuregwu n'ihi na ha bụ ezi mmadụ. Rịọ AI maka nhọrọ atọ, wee dee nke kacha mma ọzọ n'okwu nke gị. Gụpụta ya n'olu dị elu: ọ dị ka okwu gị?",
            "Kwuo eziokwu. Ejila nọmba egwuregwu (stats) ụgha, ndị na-eso gị ụgha ma ọ bụ okwu ị na-apụghị igosi na ọ bụ eziokwu. Ndị nkuzi, ụlọ ọrụ na ndị hụrụ gị n'anya na-elele.",
            "Ọ bụrụ na azụmahịa enye gị ego, ngwaahịa n'efu ma ọ bụ uru ọ bụla ọzọ ka i zipu ihe, FTC (ụlọ ọrụ gọọmentị US na-amanye iwu mgbasa ozi) kwuru na ị ga-eme ka ọ doo anya, dịka ọmụmaatụ \"Ad\" ma ọ bụ \"Daalụ [brand] maka ngwa egwuregwu n'efu\", n'otu ebe ahụ ozi ahụ dị, ọ bụghị nke e zoro n'etiti hashtag. Na vidiyo, kwuo ya ma gosi ya n'ihuenyo. Ndị egwuregwu mahadum nwekwara ike ịkọ nkwekọrịta ha; jụọ ọfịs compliance gị."
          ],
          steps: ["Rịọ AI maka nhọrọ caption atọ.", "Dee nke kacha mma ọzọ n'okwu nke gị.", "Wepụ okwu ọ bụla ị na-apụghị igosi.", "Ọ bụrụ na e nwere uru ọ bụla site n'ụlọ ọrụ, tinye ikwupụta doro anya.", "Gụpụta ya n'olu dị elu tupu i zipu ya."],
          words: [["Caption", "ederede na-eso ihe ị zipuru."], ["Ikwupụta (disclosure)", "okwu doro anya na-ekwu na a kwụrụ gị ụgwọ ma ọ bụ nye gị ihe ka i zipu ya."]],
          slides: [
            { title: "AI na-ede mbụ, gị na-emecha", bullets: ["Rịọ maka nhọrọ atọ", "Dee ya ọzọ n'okwu nke gị", "Gụpụta ya n'olu dị elu"] },
            { title: "Kwuo eziokwu", bullets: ["Enweghị stats ụgha ma ọ bụ ndị na-eso gị ụgha", "Enweghị okwu ị na-apụghị igosi"] },
            { title: "A kwụrụ ụgwọ ma ọ bụ nye gị ihe n'efu?", bullets: ["Kwuo ya nke ọma: \"Ad\" ma ọ bụ \"Daalụ [brand] maka ngwa egwuregwu n'efu\"", "N'otu ebe ahụ ozi ahụ dị, ọ bụghị n'etiti hashtag", "Na vidiyo: kwuo ya ma gosi ya"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (n'asụsụ bekee)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (n'asụsụ bekee)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Were otu echiche ihe ị ga-ezipu site n'atụmatụ gị. Rịọ AI maka nhọrọ caption atọ, dee otu ọzọ n'okwu nke gị, ma gụpụta ya n'olu dị elu. Ọ bụrụ na o metụtara ụlọ ọrụ ọ bụla, tinye ikwupụta doro anya.",
          youCanNow: "ide ozi eziokwu n'okwu nke gị ma kwupụta mmekọrịta gị na ụlọ ọrụ nke ọma.",
          quickCheck: [
            { objective: "O5", q: "Kedu ụlọ ọrụ gọọmentị US na-amanye iwu ikwupụta ihe a kwụrụ ụgwọ ma ọ bụ nye n'efu?", options: ["NCAA", "FTC", "FDA", "Ngalaba egwuregwu ụlọ akwụkwọ gị"], answer: 1, why: "FTC na-amanye iwu mgbasa ozi na United States." },
            { objective: "O5", q: "Ụlọ mmega ahụ (gym) dị n'obodo nyere gị otu ọnwa n'efu ka i zipu ihe banyere ya. Ebee ka ị ga-etinye ikwupụta ahụ?", options: ["Na njedebe hashtag 30", "Na comment mgbe otu izu gachara", "Ọ dịghị ebe, n'ihi na ọ bụghị ego", "N'otu ebe ahụ ozi ahụ dị, ebe ọ dị mfe ịhụ"], answer: 3, why: "Uru ọ bụla na-agụta, ikwupụta ahụ ga-edokwa anya n'ozi ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụ nsonaazụ na ime mgbanwe",
          minutes: 5,
          goal: "Soro nọmba atọ kwa izu ma mee otu mgbanwe dabere na ha.",
          text: [
            "Họrọ nọmba atọ metụtara ebumnuche gị. Maka clinic: ịpị njikọ (link clicks), ndị debanyere aha na comment na-ajụ ajụjụ. Maka recruiting: ndị lere profaịlụ gị, ndị lere vidiyo highlights gị na ndị nkuzi zaghachiri. Ọnụ ọgụgụ ndị na-eso gị naanị nwere ike iduhie gị.",
            "Ọtụtụ app soshal midia na-egosi nọmba ndị a n'ebe insights ma ọ bụ analytics ha maka akaụntụ professional ma ọ bụ creator. Dee ha n'ime sheet otu ugboro n'izu.",
            "Kwa izu, jụọ: gịnị rụrụ ọrụ kacha mma, gịnịkwa ka m ga-agbanwe? Ị nwere ike itinye nọmba izu gị n'ime ngwa enyemaka AI ma rịọ otu ndụmọdụ, wee kpebie n'onwe gị."
          ],
          steps: ["Họrọ nọmba atọ metụtara ebumnuche gị.", "Dee ha kwa izu n'ime sheet.", "Chọta ihe i zipuru kacha mma na nke kacha njọ.", "Mee otu mgbanwe maka izu na-abịa."],
          words: [["Analytics", "nọmba na-egosi otu ihe ị zipuru na peeji gị si aga."], ["Vanity metric", "nọmba na-ele anya mma mana ọ naghị egosi ọganihu n'ebumnuche gị."]],
          slides: [
            { title: "Nọmba atọ metụtara ebumnuche gị", bullets: ["Clinic: clicks, ndị debanyere aha, ajụjụ", "Recruiting: ndị lere, ndị nkuzi zaghachiri"] },
            { title: "Ihe a na-eme kwa izu", bullets: ["Dee nọmba n'ime sheet", "Ihe kacha mma na nke kacha njọ i zipuru", "Otu mgbanwe maka izu na-abịa"] },
            { title: "Kpachara anya", bullets: ["Ndị na-eso gị naanị nwere ike iduhie gị", "AI na-atụ aro; gị na-ekpebi"] }
          ],
          tryIt: "Ọrụ ikpeazụ: tinye ebumnuche gị, ndị ị chọrọ iru, ọwa gị, atụmatụ AI dere na nọmba atọ n'otu peeji. Mee izu mbụ, dee nọmba ndị ahụ, ma dee otu mgbanwe maka izu nke abụọ.",
          youCanNow: "ịtụ ahịa gị site na nọmba atọ bara uru ma mee mgbanwe kwa izu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ọnụ ọgụgụ ndị na-eso gị naanị ji nwee ike iduhie gị?", options: ["O nwere ike ọ gaghị egosi ma ndị mmadụ na-eme ihe ebumnuche gị chọrọ", "Ọ bụ ụgha mgbe niile", "App na-ezo ya", "Ọ na-agbanwe nwayọọ nke ukwuu"], answer: 0, why: "Họrọ nọmba metụtara ebumnuche gị, dị ka ndị debanyere aha ma ọ bụ ndị nkuzi zaghachiri." },
            { objective: "O6", q: "Izu mbụ gosiri na vidiyo gị nwetara clicks karịa foto gị nke ukwuu. Gịnị ka ị ga-eme?", options: ["Gbanwee ihe niile otu mgbe", "Leghara nọmba ndị ahụ anya", "Mee otu mgbanwe, dị ka obere vidiyo ndị ọzọ n'izu na-abịa", "Hichapụ foto gị"], answer: 2, why: "Mee otu mgbanwe kwa izu dabere na nọmba gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Atụmatụ, ime ya na ịtụ ya",
        questions: [
          { objective: "O4", q: "Gịnị bụ oku ime ihe (call to action)?", options: ["Oku ekwentị i kpọrọ onye nkuzi gị", "Ụdị hashtag", "Ntaramahụhụ", "Nzọụkwụ na-esote doro anya ị na-arịọ ndị mmadụ ka ha mee"], answer: 3, why: "Ọ na-agwa ndị ị chọrọ iru ihe ha ga-eme ọzọ." },
          { objective: "O4", q: "Kedu ozi atụmatụ gị kwesịrị izere?", options: ["Ebe ị nọ ugbu a ma ọ bụ ụlọ gị", "Egwuregwu gị", "Highlights gị", "Njikọ ndebanye aha camp gị"], answer: 0, why: "Ebe ị nọ ugbu a na ozi ụlọ gị nwere ike itinye gị n'ihe egwu." },
          { objective: "O5", q: "Ụlọ ahịa akpụkpọ ụkwụ nyere gị akpụkpọ ụkwụ n'efu ka i zipu ihe. Gịnị ka ozi gị kwesịrị inwe?", options: ["Ọ dịghị ihe ọzọ", "Hashtag e zoro ezo na njedebe", "Ikwupụta doro anya dị ka \"Daalụ [ụlọ ahịa] maka akpụkpọ ụkwụ n'efu\"", "Nyocha (review) ụgha"], answer: 2, why: "FTC kwuru na ngwaahịa n'efu na-agụta, a ga-ekwupụtakwa ya nke ọma." },
          { objective: "O6", q: "Kedu nke nwere ike ịbụ vanity metric maka ebumnuche clinic?", options: ["Ndị debanyere aha", "Link clicks", "Ajụjụ gbasara clinic ahụ", "Naanị ọnụ ọgụgụ ndị na-eso gị"], answer: 3, why: "Ndị na-eso gị anaghị egosi ọganihu n'ịnweta ndị debanyere aha." },
          { objective: "O6", q: "Mgbe izu mbụ gachara, nzọụkwụ kacha mma na-esote bụ:", options: ["Ịkwụsị", "Ime otu mgbanwe dabere na nọmba gị", "Ịgbanwe ihe niile", "Ịzụta ndị na-eso gị"], answer: 1, why: "Otu mgbanwe n'otu oge na-egosi ihe na-arụ ọrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Atụmatụ Ahịa Dijitalụ site n'AI maka Ndị Egwuregwu",
    questions: [
      { objective: "O1", q: "Ahịa (marketing) pụtara:", options: ["Izipu ihe n'enweghị usoro", "Ịzụta ndị na-eso gị", "Ime ka ndị kwesịrị ekwesị mara gị, hụ gị n'anya ma tụkwasị gị obi", "Naanị ire ihe"], answer: 2, why: "Ọ bụ maka ndị kwesịrị ekwesị na ntụkwasị obi." },
      { objective: "O1", q: "Gịnị ka T dị na SMART pụtara?", options: ["Time-bound (nwere ụbọchị njedebe)", "Trendy (na-ewu ewu)", "Total (ngụkọta)", "Team (otu egwuregwu)"], answer: 0, why: "Ebumnuche SMART nwere ụbọchị njedebe." },
      { objective: "O1", q: "Kedu ebumnuche na-ABỤGHỊ SMART?", options: ["Bụrụ onye a ma ama", "Nweta ndị nkuzi 10 zaghachiri tupu March 1", "Ree ohere camp 30 tupu May 15", "Nweta mmadụ 200 lere highlights tupu Fraịde"], answer: 0, why: "\"Bụrụ onye a ma ama\" enweghị nọmba ma ọ bụ ụbọchị." },
      { objective: "O2", q: "Nkọwa ndị ị chọrọ iru gụnyere:", options: ["Okwuntughe ha", "Naanị stats gị", "Ndị ha bụ na ihe na-emetụ ha n'obi", "Stats onye asọmpi gị"], answer: 2, why: "Ọ na-akọwa ndị ị chọrọ iru." },
      { objective: "O2", q: "Nne na nna ụmụaka camp nwere ike ịnọ na:", options: ["Naanị egwuregwu vidiyo", "Otu Facebook na ebe dị n'obodo", "Naanị LinkedIn", "Ọ dịghị ebe n'ịntanetị"], answer: 1, why: "Họrọ ọwa ebe ndị ahụ nọ." },
      { objective: "O3", q: "Kedu otu ị ga-esi họrọ ọwa?", options: ["Ihe ọ bụla na-ewu ewu", "Ebe ndị ị chọrọ iru na-anọworị", "Ha niile", "N'enweghị usoro"], answer: 1, why: "Gaa ebe ndị ị chọrọ iru nọ." },
      { objective: "O3", q: "Engagement pụtara:", options: ["Ịlụ di ma ọ bụ nwunye", "Naanị ndị na-eso gị", "Otu ndị mmadụ si emeso ihe: like, comment, share, save", "Mgbasa ozi"], answer: 2, why: "Engagement na-egosi ezi mmasị." },
      { objective: "O4", q: "Gịnị ka ị ga-enye AI ka o dee atụmatụ gị?", options: ["Okwuntughe gị", "Adreesị ụlọ gị", "Ozi ụlọ akụ gị", "Ebumnuche, nkọwa ndị ị chọrọ iru na ọwa"], answer: 3, why: "Ndị ahụ na-eme ka atụmatụ ahụ dabara ebumnuche gị." },
      { objective: "O4", q: "Ezigbo tebụl atụmatụ gụnyere:", options: ["Echiche, ụdị na oku ime ihe", "Naanị hashtag", "Naanị ụbọchị", "Akara ule gị"], answer: 0, why: "Ihe ọ bụla ị ga-ezipu chọrọ echiche, ụdị na nzọụkwụ na-esote." },
      { objective: "O4", q: "Kedu nke bụ oku ime ihe?", options: ["\"Ụbọchị mara mma\"", "\"Debanye aha na njikọ a\"", "\"Lol\"", "\"Egwuregwu ahụ tọrọ ụtọ\""], answer: 1, why: "Ọ na-agwa ndị mmadụ ihe ha ga-eme ọzọ." },
      { objective: "O5", q: "AI dere caption. Ị kwesịrị:", options: ["Izipu ya n'agụghị ya", "Idetuo nke onye ọzọ", "Ide ya ọzọ n'okwu nke gị", "Itinye stats ụgha"], answer: 2, why: "Ndị mmadụ na-eso gị n'ihi na ị bụ ezi mmadụ." },
      { objective: "O5", q: "Kedu nke ị na-ekwesịghị izipu mgbe ọ bụla?", options: ["Stats ụgha", "Highlights gị", "Ekele nye onye nkuzi gị", "Ozi camp gị"], answer: 0, why: "Eziokwu dị mkpa; ndị mmadụ na-elele." },
      { objective: "O5", q: "Ebee ka ikwupụta kwesịrị ịdị?", options: ["E zoro ya n'etiti ọtụtụ hashtag", "Naanị na bio gị", "Ọ dịghị ebe", "N'otu ebe ahụ ozi ahụ dị, ebe ọ dị mfe ịhụ"], answer: 3, why: "FTC kwuru na ikwupụta ga-adị mfe ịhụ." },
      { objective: "O5", q: "Na vidiyo a kwụrụ ụgwọ (sponsored), ikwupụta kwesịrị ịbụ:", options: ["Naanị na nkọwa (description)", "Nke a kwuru ma gosi n'ihuenyo", "Nke a hapụrụ", "Na comment"], answer: 1, why: "Ikwupụta vidiyo kwesịrị ịdị n'ime vidiyo ahụ n'onwe ya." },
      { objective: "O5", q: "Onye ka onye egwuregwu mahadum kwesịrị ịjụ banyere ịkọ NIL?", options: ["Onye ọ bụla hụrụ ya n'anya", "Ọfịs compliance", "Naanị AI", "Ọ dịghị onye"], answer: 1, why: "Iwu dị iche site n'ụlọ akwụkwọ na ọkwa." },
      { objective: "O6", q: "Ebee ka ị na-ahụkarị nọmba ihe i zipuru?", options: ["N'app ihu igwe", "Na kalenda gị", "Ọ dịghị ebe", "N'ebe insights ma ọ bụ analytics nke app ahụ"], answer: 3, why: "Akaụntụ professional ma ọ bụ creator na-egosi analytics." },
      { objective: "O6", q: "Maka ebumnuche recruiting, kedu nọmba kacha dị mkpa?", options: ["Ndị nkuzi zaghachiri", "Like ndị ọ bụla", "Ọnụ ọgụgụ emoji", "Agba profaịlụ"], answer: 0, why: "Ndị nkuzi zaghachiri na-egosi ezi ọganihu." },
      { objective: "O6", q: "Ugboro ole ka ị ga-ede nọmba gị?", options: ["Otu ugboro n'afọ", "Mgbe ọ bụla", "Kwa izu", "Kwa nkeji"], answer: 2, why: "Kwa izu na-enye gị ohere ime mgbanwe n'oge." },
      { objective: "O6", q: "AI tụrụ aro mgbanwe. Onye na-ekpebi?", options: ["AI", "Ndị na-eso gị", "Ọ dịghị onye", "Gị"], answer: 3, why: "AI na-atụ aro; gị na-ekpebi." },
      { objective: "O6", q: "Mgbanwe ole ka ị ga-eme kwa izu?", options: ["Iri", "Otu", "Ihe niile", "Ọ dịghị mgbe ọ bụla"], answer: 1, why: "Otu mgbanwe n'otu oge na-egosi ihe rụrụ ọrụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      3,
      5,
      8,
      10,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ebumnuche SMART",
        objective: "O1",
        notYet: "Ebumnuche ahụ edoghị anya, ma ọ bụ o nweghị nọmba ma ọ bụ ụbọchị.",
        meets: "Otu ebumnuche nwere akụkụ SMART ise niile maka izu anọ na-abịa.",
        exceeds: "Ebumnuche ahụ metụtara recruiting, NIL, camp ma ọ bụ nzọụkwụ ọrụ nke ọma, o kwekwara omume n'oge onye egwuregwu ahụ."
      },
      {
        name: "Ndị ị chọrọ iru na ọwa",
        objective: "O3",
        notYet: "Enweghị nkọwa ndị ị chọrọ iru, ma ọ bụ e ji ihe na-ewu ewu họrọ ọwa kama ndị ị chọrọ iru.",
        meets: "Obere nkọwa ndị ị chọrọ iru na ọwa abụọ a họrọ n'ihi na ndị ahụ nọ ebe ahụ, e lelekwara iwu afọ ndụ na nzuzo.",
        exceeds: "E lere nkọwa ahụ na ndị mmadụ n'ezie, ihe kpatara ọwa ọ bụla na-ekwukwa ihe ha kwuru."
      },
      {
        name: "Atụmatụ izipu ihe izu 4",
        objective: "O4",
        notYet: "Ihe a ga-ezipu enweghị ụdị ma ọ bụ oku ime ihe, ma ọ bụ atụmatụ ahụ na-ekesa ebe ọ nọ ma ọ bụ ụlọ ya.",
        meets: "Tebụl izu 4 nwere echiche, ụdị na oku ime ihe maka ihe ọ bụla, e meziri ka ọ dabara oge ma dị nchebe.",
        exceeds: "Oku ime ihe ọ bụla na-atụ aka n'ebumnuche ahụ, atụmatụ ahụ na-ekekwa ọwa abụọ ahụ nke ọma."
      },
      {
        name: "Ozi eziokwu",
        objective: "O5",
        notYet: "Caption na-agụ ka ederede AI e detuuru, nwere okwu a na-egosighị na ọ bụ eziokwu, ma ọ bụ enweghị ikwupụta dị mkpa.",
        meets: "Ozi n'okwu onye egwuregwu ahụ n'onwe ya, n'enweghị okwu a na-egosighị, nwekwa ikwupụta doro anya maka uru ọ bụla site n'ụlọ ọrụ.",
        exceeds: "A na-ekwu ma gosi ikwupụta na vidiyo, e lelekwara ịkọ NIL na compliance ebe ọ dị mkpa."
      },
      {
        name: "Iso nọmba na mgbanwe",
        objective: "O6",
        notYet: "Nọmba erughị atọ, ma ọ bụ e deghị mgbanwe ọ bụla maka izu nke abụọ.",
        meets: "Nọmba atọ metụtara ebumnuche e dere maka izu mbụ na otu mgbanwe e dere maka izu nke abụọ.",
        exceeds: "A kpọrọ aha ihe kacha mma na nke kacha njọ e zipuru, ya na nọmba ndị na-akọwa mgbanwe ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara atụmatụ ahụ, mee izu mbụ ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe kwuru na ha ruru ebumnuche SMART ha tupu ụbọchị ya (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha nwetara nsonaazụ doro anya: ndị nkuzi zaghachiri, ndị debanyere aha na camp ma ọ bụ mkparịta ụka ya na ụlọ ọrụ (brand)",
      "Ndị na-amụ ihe ka na-ede nọmba kwa izu mgbe ụbọchị 30 gachara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere app soshal midia abụọ a họrọ",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Spreadsheet n'efu (Google Sheets) maka nọmba kwa izu",
      "Oge mmega ahụ na oge ụlọ akwụkwọ gị",
      "Ihe dị ka nkeji 60 nke nkuzi gbakwunyere ihe dị ka nkeji 30 kwa izu ruo izu anọ"
    ],
    facilitatorNotes: [
      "Maka ndị egwuregwu na-erubeghị afọ 18, tinye nne na nna ma ọ bụ ndị nlekọta tupu akaụntụ aghọọ nke ọha ma ọ bụ tupu a kpọtụrụ ụlọ ọrụ.",
      "Leleenụ ntọala nchekwa ọnụ: onye nwere ike izipu ozi, ịkpọ aha (tag) ma hụ ebe ị nọ; ekesala mgbe ọ bụla ebe ị nọ ugbu a, ụlọ ma ọ bụ oge ụlọ akwụkwọ.",
      "Kpọbata ọfịs compliance gị ma ọ bụ onye nnọchite otu egwuregwu maka iwu ịkọ NIL tupu ndị egwuregwu anabata nkwekọrịta ọ bụla.",
      "Lelee ederede mbụ ọ bụla maka okwu eziokwu na ikwupụta doro anya tupu e zipu ya.",
      "Mee obere nnọkọ nlele kwa izu ka ndị egwuregwu kọọ nọmba ha na otu mgbanwe ha."
    ]
  }
};
