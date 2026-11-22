"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-marketing-toolkit.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-marketing-toolkit-ig",
  lang: "ig",
  translationOf: "athletes-ai-marketing-toolkit",
  category: "Athletes",
  name: "Ngwa AI maka Mgbasa Ozi na Brand",
  skills: "Ide ntuziaka olu brand gị, Iwu ọba prompt, Iji AI maka ide ihe, imewe na vidiyo, Ịhazi oge na ịgbaso post, Ịlele ihe AI mere maka eziokwu, ikike na nkwupụta",
  outcome: "ịhazi ngwa AI nke gị maka mgbasa ozi: ntuziaka olu brand gị dị otu peeji, ọba prompt iri ị na-ejigharị, otu ngwa maka ide ihe, imewe, vidiyo na ịgbaso, na ndepụta nlele ihe ise ị na-eme tupu ihe ọ bụla apụta n'ihu ọha.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu, ndị nkuzi egwuregwu na ndị ọrụ otu egwuregwu na-ebipụta post ma na-akpọsa onwe ha, ma chọọ usoro ha ga-eji mgbe niile nke na-echekwa oge n'atụfughị olu ha.",
    "Ngwa (toolkit) abụghị maka inwe ọtụtụ app. Ọ bụ obere ngwa ole na ole, ntuziaka na prompt echekwara, ka post ọ bụla dị ka okwu gị ma gafee otu nlele ahụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Wuo akwụkwọ ngwa gị: ntuziaka olu brand dị otu peeji, prompt iri echekwara (caption, bio, ozi email ịrịọ onye nkwado, echiche post, nzaghachi na ndị ọzọ), ngwa ị họọrọ maka ide ihe, imewe, vidiyo na ịgbaso, na ndepụta nlele ihe ise. Jiri ngwa ahụ mee ma lelee otu post site na mmalite ruo njedebe.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu, ndị nkuzi egwuregwu na ndị ọrụ otu egwuregwu na-ebipụta post ma na-akpọsa onwe ha n'ịntanetị, ma chọọ usoro ha ga-eji mgbe niile nke na-echekwa oge n'atụfughị olu ha.",
    startingPoint: "Ha na-ebipụta post mgbe niile ma nwaala ngwa AI maka caption ma ọ bụ echiche. Ọtụtụ na-amalite site na efu oge ọ bụla, na-enweta ihe AI dere n'ozuzu, na-eji ọtụtụ app na-arụ otu ọrụ ahụ, ma anaghị elele ikike, nkwupụta ma ọ bụ nchekwa n'usoro tupu ha ebipụta.",
    gap: "Na-enweghị usoro, ihe AI dere na-adị n'ozuzu, mperi gbasara eziokwu, ikike, nkwupụta ma ọ bụ nzuzo na-agafekwa, nke nwere ike imebi ntụkwasị obi, nkwekọrịta ma ọ bụ nchekwa. Ntuziaka olu, prompt echekwara, otu ngwa maka ọrụ ọ bụla na ndepụta nlele na-eme ka ihe ị na-emepụta dị ngwa, dị ka gị ma dịkwa nchebe.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 8",
      "Ekwentị ma ọ bụ kọmputa nwere ngwa n'efu: ngwa enyemaka AI, Canva, ngwa ndezi vidiyo na Google Sheets ma ọ bụ Docs",
      "Ihe dị ka nkeji 60 n'ozuzu",
      "Ikike maka foto, logo na egwu; nkwupụta FTC na iwu NIL nke ụlọ akwụkwọ ma ọ bụ steeti",
      "Enweghị ozi nzuzo ma ọ bụ ebe ị nọ ugbu a na post; enweghị foto AI na-eduhie ndị mmadụ banyere ezi mmadụ"
    ],
    prerequisites: "Ọ dịghị. \"Ime Aha Gị Ka Ọ Pụta Ìhè na Social Media maka Ndị Egwuregwu\" ma ọ bụ \"Ime Vidiyo na Ihe Ngosi maka Ndị Egwuregwu\" bụ ezigbo nzọụkwụ mbụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji caption ise nke gị na ngwa enyemaka AI", action: "ide ntuziaka olu brand gị dị otu peeji", standard: "nwere okwu atọ kọwara olu gị, okwu ị na-eji na ndị ị na-adịghị eji, isiokwu ị ga-ebipụta na ndị ị ga-ezere, omume emoji na hashtag, na post ihe atụ abụọ" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ mgbasa ozi ị na-arụkarị", action: "imepụta ọba prompt iri ị na-ejigharị nwere oghere", standard: "nke ọ bụla na-ezo aka na ntuziaka olu gị ma echekwara ha n'otu akwụkwọ" },
    { id: "O3", condition: "Mgbe e nyere gị ọrụ ide ihe, imewe, vidiyo na ịgbaso", action: "ịhọrọ otu ngwa maka ọrụ ọ bụla", standard: "ebe i lelere onye mere ngwa ọhụrụ ọ bụla, otu o si eji data, na ego ọ na-efu mgbe oge nnwale gwụrụ" },
    { id: "O4", condition: "Mgbe e nyere gị post ọ bụla AI mere", action: "ịlele ya site na nlele ihe ise: eziokwu, olu, ikike, nkwupụta na nchekwa", standard: "ruo mgbe ọ gafere nlele ise niile tupu ọ pụta n'ihu ọha" },
    { id: "O5", condition: "Mgbe e nyere gị foto, logo, egwu na njikọ brand dị n'ihe ị na-emepụta", action: "ịmata ihe ị nwere ike iji na ide nkwupụta doro anya maka njikọ brand ọ bụla", standard: "ya na ikike maka ihe ọ bụla ị na-emeghị, egwu nwere ikike (licence), enweghị foto AI na-eduhie, na nkwupụta n'ime post ahụ n'onwe ya" },
    { id: "O6", condition: "Mgbe i bipụtachara post otu izu", action: "idebanye nọmba gị na mpempe akwụkwọ ịgbaso ma melite prompt na ntuziaka olu gị site na nsonaazụ ya", standard: "ebe akpọrọ aha post kacha mma na nke kacha ala, ma lelee ihe AI gụrụ na mpempe akwụkwọ ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Olu gị na prompt gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide ntuziaka olu brand gị",
          minutes: 5,
          goal: "Dee ntuziaka dị otu peeji nke na-agwa ngwa AI ọ bụla otu i si ekwu okwu.",
          text: [
            "AI na-ede n'olu n'ozuzu ma ọ bụrụ na ịgwaghị ya otu i si ekwu okwu. Ntuziaka olu brand na-edozi nke ahụ, ọ na-enyekwa ndị otu gị ma ọ bụ ezinụlọ gị na-enyere gị aka na post gị aka.",
            "Ntuziaka gị nwere: okwu atọ kọwara olu gị (dịka ọmụmaatụ \"obi ike, ekele, ọchị\"); okwu na ahịrịokwu ị na-eji; okwu ị na-adịghị eji mgbe ọ bụla; isiokwu ị na-ebipụta; isiokwu ị na-ezere; omume emoji na hashtag; na post ihe atụ abụọ dị ka okwu gị kpọmkwem.",
            "Rịọ ngwa enyemaka AI ka o nyere aka: tinye caption ise kacha mma gị ma jụọ, \"Kọwaa olu dị na post ndị a n'okwu atọ, ma depụta ahịrịokwu m na-ekwughachi.\" Wee dezie ihe ọ zara."
          ],
          steps: ["Chịkọta caption ise dị ka okwu gị.", "Rịọ AI ka ọ kọwaa olu gị.", "Họrọ okwu atọ kọwara olu gị.", "Depụta okwu ị na-eji na ndị ị na-adịghị eji.", "Tinye isiokwu ị ga-ebipụta na ndị ị ga-ezere, na post ihe atụ abụọ."],
          words: [["Olu brand (brand voice)", "àgwà na ụdị otu i si ede ihe na otu i si ekwu okwu."], ["Ntuziaka ụdị (style guide)", "akwụkwọ nwere iwu ka ihe ị na-emepụta dịrị otu ụdị mgbe niile."]],
          slides: [
            { title: "Ihe mere ntuziaka olu ji dị mkpa", bullets: ["AI na-ede n'ozuzu ma ọ bụrụ na ịgwaghị ya", "Ọ na-enyere onye ọ bụla na-enyere gị aka n'ebipụta post"] },
            { title: "Ihe dị n'ime ya", bullets: ["Okwu atọ kọwara olu gị", "Okwu ị na-eji na ndị ị na-adịghị eji", "Isiokwu ị ga-ebipụta na ndị ị ga-ezere", "Post ihe atụ abụọ"] },
            { title: "AI na-enyere gị aka ịchọta ya", bullets: ["Tinye caption ise nke gị n'ezie", "Rịọ ya ka ọ kọwaa olu gị"] }
          ],
          tryIt: "Tinye caption ise nke gị na ngwa enyemaka AI ma rịọ ya ka ọ kọwaa olu gị. Site n'azịza ya, dee ntuziaka gị dị otu peeji.",
          youCanNow: "ide ntuziaka olu brand nke na-eme ka ihe AI dere dị ka okwu gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere AI ji chọọ ntuziaka olu?", options: ["Ọ na-ede n'olu n'ozuzu ma ọ bụrụ na ịgwaghị ya otu i si ekwu okwu", "Ọ pụghị ide caption na-enweghị ya", "Iwu chọrọ ya", "Ọ na-eme ka post dị ogologo"], answer: 0, why: "Ntuziaka olu na-agwa AI na ndị na-enyere gị aka otu i si ekwu okwu." },
            { objective: "O1", q: "Nwanne gị nwoke nta na-enyere gị aka ebipụta post. Kedu otu ntuziaka olu gị si enyere ya aka?", options: ["Ọ na-enye ya okwuntughe gị", "Ọ na-ekwe ka o bipụta ihe ọ bụla", "Ọ na-egosi ya otu i si ekwu okwu na ihe ị na-adịghị ebipụta mgbe ọ bụla", "Ọ na-anọchi nlele gị"], answer: 2, why: "Ntuziaka ahụ na-enyere ndị otu gị ma ọ bụ ezinụlọ gị na-enyere gị aka na post gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iwu ọba prompt",
          minutes: 5,
          goal: "Chekwaa prompt iri ị na-ejigharị maka ọrụ mgbasa ozi ị na-arụkarị.",
          text: [
            "Ọba prompt bụ akwụkwọ nwere prompt ị na-ejigharị. Kama ịmalite site na efu oge ọ bụla, ị na-edetuo prompt, dejupụta oghere ya, ma tinye ntuziaka olu gị.",
            "Ezigbo prompt nwere oghere n'ime brackets: \"Site n'iji ntuziaka olu m dị n'okpuru, dee caption atọ dị n'okpuru mkpụrụedemede 150 maka post [ụdị] gbasara [isiokwu]. Jiri ajụjụ mechie ya.\" Ndị ọzọ: nhọrọ bio, email ịrịọ onye nkwado (sponsor), ozi ekele, echiche post maka otu isi ihe, nzaghachi nwere nkwanye ugwu nye okwu ọjọọ, nchịkọta izu.",
            "Debe ọba ahụ na Google Docs ma ọ bụ n'app ndetu. Mee ka prompt ka mma oge ọ bụla o nyere gị azịza na-adịghị ike."
          ],
          steps: ["Depụta ọrụ mgbasa ozi iri ị na-arụkarị.", "Dee prompt maka nke ọ bụla nwere [oghere].", "Tinye \"Site n'iji ntuziaka olu m dị n'okpuru...\" na nke ọ bụla.", "Chekwaa ha n'otu akwụkwọ.", "Mee ka prompt ka mma mgbe ọ bụla o nyere azịza na-adịghị ike."],
          words: [["Ọba prompt (prompt library)", "nchịkọta prompt echekwara nke ị na-ejigharị."], ["Prompt ndebiri (template)", "prompt nwere oghere ị na-ejupụta oge ọ bụla."]],
          slides: [
            { title: "Ọba prompt", bullets: ["Jigharịa ya, amalitela ọzọ", "Dejupụta [oghere] ndị ahụ", "Tinye ntuziaka olu gị"] },
            { title: "Ọrụ iri a na-arụkarị", bullets: ["Caption, bio, echiche post", "Ịrịọ onye nkwado, ozi ekele", "Nzaghachi, nchịkọta izu"] },
            { title: "Na-eme ka ọ ka mma", bullets: ["Otu akwụkwọ", "Dozie prompt na-enye azịza na-adịghị ike"] }
          ],
          tryIt: "Dee prompt ndebiri ise mbụ gị nwere [oghere]. Nwalee otu n'ime ha na ntuziaka olu gị, ma dozie ya ma ọ bụrụ na azịza ya adịghị ike.",
          youCanNow: "iwu na iji ọba prompt maka ọrụ mgbasa ozi gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ọba prompt?", options: ["Ndepụta app", "Akwụkwọ nwere prompt ị na-ejigharị", "Ndepụta ndị na-eso gị", "Kaadị ọba akwụkwọ"], answer: 1, why: "Ọ bụ prompt echekwara nke ị na-edetuo, dejupụta ma jigharịa." },
            { objective: "O2", q: "Ị na-azakarị okwu ọjọọ ndị mmadụ dere. Gịnị ka ị ga-etinye n'ọba gị?", options: ["Ọ dịghị ihe; zaa n'iwe", "App ọhụrụ", "Ndepụta ndị ị ga-egbochi", "Prompt maka nzaghachi nwere nkwanye ugwu, nwere [oghere] na ntuziaka olu gị"], answer: 3, why: "Chekwaa prompt maka ọrụ ọ bụla ị na-arụkarị, gụnyere nzaghachi nwere nkwanye ugwu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhọrọ otu ngwa maka ọrụ ọ bụla",
          minutes: 5,
          goal: "Họrọ otu ngwa maka ide ihe, imewe, vidiyo na ịgbaso.",
          text: [
            "Ị chọrọ ka ọrụ anọ nwee ngwa. Ide ihe: ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini. Imewe: ngwa dị ka Canva, nke nwere ndebiri na akụrụngwa AI. Vidiyo: ngwa ndezi n'efu dị ka CapCut ma ọ bụ ndị dị n'ime Instagram, TikTok na YouTube. Ịgbaso: insights nke app ọ bụla na Google Sheet.",
            "Họrọ otu maka ọrụ ọ bụla ma mụta ya nke ọma. Tupu i debanye aha n'ihe ọhụrụ ọ bụla, lelee onye mere ya, data ọ na-anakọta, na ego ọ na-efu mgbe oge nnwale n'efu gwụrụ.",
            "Ọtụtụ app na-ekwekwa ka ị hazie oge post ga-apụta (scheduling) tupu oge eruo, n'ime app ahụ ma ọ bụ site na ngwa nhazi oge. Nke a na-enyere aka n'izu ọrụ juru, mana lelee na post ahụ ka dabara ma ọ bụrụ na akụkọ ma ọ bụ nsonaazụ gbanwere."
          ],
          steps: ["Họrọ ngwa ide ihe.", "Họrọ ngwa imewe.", "Họrọ ngwa ndezi vidiyo.", "Hazie mpempe akwụkwọ ịgbaso.", "Dee nhọrọ anọ ahụ n'akwụkwọ ngwa gị."],
          words: [["Nhazi oge (scheduling)", "ịtọ post ka ọ pụta n'onwe ya n'oge ọzọ."], ["Insights", "nọmba app na-egosi otu post gị si eme."]],
          slides: [
            { title: "Ọrụ anọ", bullets: ["Ide ihe: ngwa enyemaka AI", "Imewe: Canva", "Vidiyo: CapCut ma ọ bụ ngwa ndezi dị n'app", "Ịgbaso: insights + mpempe akwụkwọ"] },
            { title: "Tupu i debanye aha", bullets: ["Onye mere ya?", "Kedu data ọ na-anakọta?", "Ego ole mgbe nnwale n'efu gwụrụ?"] },
            { title: "Nhazi oge", bullets: ["Ọ dị mma n'izu ọrụ juru", "Lelee na post ka dabara ma akụkọ gbanwee"] }
          ],
          tryIt: "Dee nhọrọ ngwa anọ gị n'akwụkwọ ngwa gị ma hazie mpempe akwụkwọ ịgbaso nwere kọlụm ndị a: Ụbọchị, Post, Platform, Ndị lere, Mmekọrịta, Ndetu.",
          youCanNow: "ịhọrọ obere ngwa ole na ole nke na-ekpuchi ọrụ mgbasa ozi ọ bụla.",
          quickCheck: [
            { objective: "O3", q: "Kedu ngwa dabara ọrụ ịgbaso?", options: ["Ngwa ndezi vidiyo", "Ndebiri imewe", "Insights nke app ọ bụla na Google Sheet", "Ngwa AI na-eme foto"], answer: 2, why: "Ịgbaso na-eji insights nke app na spreadsheet." },
            { objective: "O3", q: "A kagburu egwuregwu gị, post ị haziri oge ya na-ekwu \"Ka anyị hụ n'abalị a!\". Gịnị ka ị ga-eme?", options: ["Gbanwee ma ọ bụ kagbuo post ahụ", "Hapụ ka ọ pụta", "Hichapụ akaụntụ gị", "Hazie post nke abụọ"], answer: 0, why: "Lelee na post ị haziri oge ya ka dabara mgbe akụkọ gbanwere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Olu gị na prompt gị",
        questions: [
          { objective: "O1", q: "Gịnị mere ị ga-eji dee ntuziaka olu brand?", options: ["Ime ka post dị ogologo", "Izochi aha gị", "Ka AI na ndị na-enyere gị aka dee ihe dị ka okwu gị", "App chọrọ ya"], answer: 2, why: "AI na-ede n'ozuzu ma ọ bụrụ na ịgwaghị ya olu gị." },
          { objective: "O1", q: "Kedu nke dị na ntuziaka olu?", options: ["Okwu ị na-adịghị eji mgbe ọ bụla", "Okwuntughe gị", "Ozi ụlọ akụ gị", "Nọmba onye mmegide gị"], answer: 0, why: "Ọ na-akpụzi otu ihe ị na-emepụta si ada." },
          { objective: "O2", q: "Gịnị na-eme ka e nwee ike ijigharị prompt?", options: ["Ịdị nkenke nke ukwuu", "Inweghị ntuziaka", "Iji nnukwu mkpụrụedemede niile", "Oghere n'ime [brackets] ị na-ejupụta"], answer: 3, why: "Ndebiri na-echekwa oge oge ọ bụla i jiri ya." },
          { objective: "O2", q: "Prompt echekwara na-enye azịza na-adịghị ike mgbe niile. Ị ga-:", options: ["Hichapụ ọba ahụ", "Mee ka prompt ahụ ka mma", "Jiri ya otu ọ dị", "Gbanwee gaa n'app ọhụrụ ise"], answer: 1, why: "Prompt na-aka mma site na ndezi." },
          { objective: "O3", q: "Tupu i debanye aha na ngwa AI ọhụrụ, lelee:", options: ["Agba logo ya", "Onye mere ya, otu o si eji data, na ego ọ na-efu mgbe nnwale gwụrụ", "Mgbasa ozi ole ọ na-egosi", "Ọ dịghị ihe"], answer: 1, why: "Nke a na-echebe data gị na ego gị." }
        ]
      }
    },
    {
      name: "Isi 2: Ịdị mma, ikike na nsonaazụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ndepụta nlele ihe ise",
          minutes: 5,
          goal: "Lelee ihe AI mere site na ndepụta nlele ihe ise tupu i bipụta ya.",
          text: [
            "AI na-echekwa oge, mana ị bụ onye ga-aza maka ihe ọ bụla ị bipụtara. Mee ka ihe ọ bụla gafee nlele ise.",
            "1. Eziokwu: eziokwu ọ bụla, nọmba ọ bụla na nkwupụta ọ bụla ziri ezi. 2. Olu: ọ dị ka okwu gị (gụpụta ya n'olu dị elu). 3. Ikike: ị nwere ma ọ bụ e kwere gị iji foto, logo, vidiyo na egwu ọ bụla. 4. Nkwupụta: ụgwọ ọ bụla brand kwụrụ ma ọ bụ ngwaahịa n'efu ka e kwupụtara nke ọma. 5. Nchekwa: enweghị ozi nzuzo, ebe ị nọ ugbu a ma ọ bụ ihe ọ bụla ga-ewute gị emesịa.",
            "Tinye ndepụta nlele a n'elu akwụkwọ ngwa gị. Mgbe mmadụ na-enyere gị aka ebipụta post, ya onwe ya na-ejikwa ya."
          ],
          steps: ["Eziokwu: lelee eziokwu na nọmba.", "Olu: gụpụta ya n'olu dị elu.", "Ikike: lelee foto, logo, vidiyo na egwu.", "Nkwupụta: kwupụta njikọ brand nke ọma.", "Nchekwa: enweghị ozi nzuzo ma ọ bụ ebe ị nọ ugbu a."],
          words: [["Ndepụta nlele (review checklist)", "obere ndepụta nlele a na-eme tupu e bipụta ihe ọ bụla."], ["Onye ga-aza (responsible)", "ị na-aza maka ihe e bipụtara, ọbụlagodi ma ọ bụ AI dere ya."]],
          slides: [
            { title: "Ị bụ onye ga-aza", bullets: ["Ọbụlagodi ma ọ bụ AI dere ya"] },
            { title: "Nlele ise", bullets: ["1. Eziokwu  2. Olu", "3. Ikike  4. Nkwupụta", "5. Nchekwa"] },
            { title: "Jiri ya oge niile", bullets: ["N'elu akwụkwọ ngwa gị", "Ndị na-enyere gị aka na-ejikwa ya"] }
          ],
          tryIt: "Were otu caption AI dere ma mee nlele ise ahụ. Dee ihe ị gbanwere maka nlele ọ bụla.",
          youCanNow: "ịlele ihe AI mere maka eziokwu, olu, ikike, nkwupụta na nchekwa.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka nlele \"Ikike\" na-ajụ?", options: ["Caption ahụ ọ dị ogologo nke ọma?", "Ọ na-ewu ewu ugbu a?", "I bipụtara post taa?", "Ị nwere ma ọ bụ e kwere gị iji foto, logo, vidiyo na egwu ọ bụla?"], answer: 3, why: "Ikike pụtara na i nwere ike iji ihe niile dị na post ahụ." },
            { objective: "O4", q: "Caption AI dere kwuru ogige ebe ị na-amụ egwuregwu kwa ụtụtụ n'elekere 6. Kedu nlele ga-ahụ ya?", options: ["Olu", "Nchekwa", "Eziokwu", "Nkwupụta"], answer: 1, why: "Nlele Nchekwa na-ewepụ ozi nzuzo, ebe ị nọ ugbu a ma ọ bụ usoro ụbọchị gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ikike, logo, egwu na nkwupụta",
          minutes: 5,
          goal: "Mata ihe ị nwere ike iji n'ihe ị na-emepụta ma dee nkwupụta doro anya maka njikọ brand.",
          text: [
            "Ikike: ị nwere ike iji foto na vidiyo i mere, na ndị e kwere gị iji. Foto otu egwuregwu na nke egwuregwu ndị ọzọ sere bụ nke onye see ya ma ọ bụ ụlọ akwụkwọ, ya mere jụọ. Logo ụlọ akwụkwọ, otu (league) na brand chọrọ ikike. Jiri egwu sitere n'ọba egwu app ahụ nwere ikike (licence).",
            "Foto AI: kpachara anya mgbe ị na-eji AI eme foto ezi mmadụ, ndị otu gị ma ọ bụ logo brand. Emela foto nwere ike ime ka ndị mmadụ chee na ihe mere mgbe ọ na-emeghị.",
            "Nkwupụta: FTC (ụlọ ọrụ gọọmentị US na-ahụ maka ahia) kwuru ka i kwupụta nke ọma ụgwọ ọ bụla, ngwaahịa n'efu ma ọ bụ njikọ ọzọ gị na brand, n'ime post ahụ n'onwe ya, site n'okwu doro anya dị ka \"Ad\" ma ọ bụ \"Daalụ [brand] maka akụrụngwa n'efu\". Ndị egwuregwu bụ ụmụ akwụkwọ: lelee iwu NIL n'ọfịs compliance unu ma ọ bụ otu egwuregwu steeti gị."
          ],
          steps: ["Jiri foto nke gị ma ọ bụ ndị e kwere gị iji.", "Jụọ tupu i jiri logo.", "Jiri egwu nwere ikike (licence).", "Emela foto AI na-eduhie banyere ezi mmadụ.", "Kwupụta njikọ brand nke ọma na post ọ bụla."],
          words: [["Ikike nwebiisinka (copyright)", "ikike iwu nke onye nwe ya ịchịkwa mbipụta foto, vidiyo, egwu na ihe e dere ede."], ["Ikike (permission)", "\"ee\" doro anya site n'aka onye nwe ihe ahụ ka i jiri ọrụ ya."]],
          slides: [
            { title: "Ikike", bullets: ["Foto na vidiyo nke gị", "Foto ndị ọzọ: jụọ", "Logo chọrọ ikike; egwu nwere licence"] },
            { title: "Foto AI", bullets: ["Kpachara anya maka ezi mmadụ na logo", "Ọ dịghị ihe na-aghọgbu ndị mmadụ"] },
            { title: "Nkwupụta", bullets: ["Ụgwọ ma ọ bụ ngwaahịa n'efu: kwuo ya nke ọma", "N'ime post: \"Ad\" ma ọ bụ ozi ekele", "Lelee iwu NIL"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Lee post ise ikpeazụ gị. Maka foto, vidiyo na egwu ọ bụla, dee onye nwe ya na ma e kwere gị iji ya. Dozie ma ọ bụ wepụ ihe ọ bụla ghọrọ nlele ahụ.",
          youCanNow: "iji naanị ihe i nwere ikike iji ma kwupụta njikọ brand n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O5", q: "Onye na-enwekarị foto egwuregwu onye na-ese foto ụlọ akwụkwọ sere?", options: ["Onye see foto ahụ ma ọ bụ ụlọ akwụkwọ", "Gị, n'ihi na ị nọ n'ime ha", "Onye ọ bụla hụrụ ha", "Otu nke ọzọ"], answer: 0, why: "Foto ndị ọzọ sere bụ nke onye see ya ma ọ bụ ụlọ akwụkwọ, ya mere jụọ." },
            { objective: "O5", q: "Ị chọrọ foto AI nke onye otu gị jidere iko mmeri ọ na-enwetabeghị. Gịnị ka ị ga-eme?", options: ["Mee ya dị ka egwuregwu ọchị", "Bipụta ya na-enweghị caption", "Rịọ AI ka o mee ka ọ dị ka ezi ihe karịa", "Emela ya; o nwere ike ịghọgbu ndị mmadụ"], answer: 3, why: "Emela foto AI nwere ike ime ka ndị mmadụ chee na ihe mere." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịgbaso nsonaazụ na ime ka ngwa gị ka mma",
          minutes: 5,
          goal: "Gbasoo nsonaazụ kwa izu ma jiri ha mee ka prompt na atụmatụ gị ka mma.",
          text: [
            "Otu ugboro n'izu, detuo nọmba post gị site na insights nke app ọ bụla tinye na mpempe akwụkwọ ịgbaso gị: ndị lere ya, mmekọrịta (likes, comments, shares, saves) na ihe ọ bụla metụtara ebumnuche gị, dị ka ịpị njikọ ma ọ bụ ndebanye aha.",
            "Chọta post gị kacha mma na nke kacha ala. Tinye tebụl ahụ na ngwa enyemaka AI ma jụọ: \"Kedu ụdị post mere nke ọma, gịnị ka ha nwekọrọ? Nye m echiche abụọ maka izu na-abịa.\" Lelee ihe ọ gụrụ na mpempe akwụkwọ ahụ.",
            "Wee mee ka ngwa gị ka mma: melite prompt mere post gị kacha mma, dozie nke dị n'azụ nke kacha ala, ma tinye ihe ọhụrụ ọ bụla ị mụtara na ntuziaka olu gị."
          ],
          steps: ["Detuo nọmba izu ahụ n'ime mpempe akwụkwọ gị.", "Chọta post kacha mma na nke kacha ala.", "Jụọ AI ihe post kacha mma nwekọrọ.", "Lelee azịza ya na mpempe akwụkwọ ahụ.", "Melite prompt gị na ntuziaka olu gị."],
          words: [["Mmekọrịta (engagement)", "otu ndị mmadụ si emeghachi omume: likes, comments, shares, saves."], ["Imeziwanye (iterate)", "ime ka ihe ka mma nzọụkwụ n'otu n'otu site na nsonaazụ."]],
          slides: [
            { title: "Nọmba kwa izu", bullets: ["Ndị lere ya na mmekọrịta", "Nọmba ebumnuche: ịpị njikọ, ndebanye aha"] },
            { title: "Mụta ihe site na ha", bullets: ["Post kacha mma na nke kacha ala", "AI na-achọta ihe post kacha mma nwekọrọ", "Lelee ya na mpempe akwụkwọ gị"] },
            { title: "Mee ka ngwa gị ka mma", bullets: ["Melite prompt na-eme nke ọma", "Dozie ndị na-adịghị ike", "Tinye ihe ị mụtara na ntuziaka olu gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa akwụkwọ ngwa gị (ntuziaka olu, prompt iri, ngwa anọ, ndepụta nlele ihe ise), wee jiri ya mee otu post site na mmalite ruo njedebe ma dee nọmba ya na mpempe akwụkwọ gị.",
          youCanNow: "ịgbaso nsonaazụ ma na-eme ka ngwa AI gị maka mgbasa ozi na-aka mma.",
          quickCheck: [
            { objective: "O6", q: "Ugboro ole ka ị ga-edetuo nọmba gị n'ime mpempe akwụkwọ ịgbaso?", options: ["Otu ugboro n'afọ", "Otu ugboro n'izu", "Mgbe ọ bụla", "Kwa awa"], answer: 1, why: "Dee nọmba kwa izu." },
            { objective: "O6", q: "Post gị kacha mma sitere n'otu prompt echekwara. Gịnị ka ị ga-eme?", options: ["Hichapụ prompt ahụ", "Kwụsị ibipụta ụdị ahụ", "Melite ma na-eme ka prompt ahụ ka mma", "Gbanwee ngwa gị niile"], answer: 2, why: "Melite prompt mere post gị kacha mma ma dozie nke dị n'azụ nke kacha ala." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịdị mma, ikike na nsonaazụ",
        questions: [
          { objective: "O4", q: "Onye ga-aza maka post AI dere nke i bipụtara?", options: ["Ụlọ ọrụ AI ahụ", "Ndị na-eso gị", "Ọ dịghị onye", "Gị"], answer: 3, why: "Ị na-aza maka ihe ị bipụtara." },
          { objective: "O4", q: "Kedu nke bụ otu n'ime nlele ise ahụ?", options: ["Ikike", "Nha mkpụrụedemede", "Ọnụ ọgụgụ emoji", "Ogologo post"], answer: 0, why: "Ị ga-enwerịrị ma ọ bụ nweta ikike maka ihe niile i jiri." },
          { objective: "O5", q: "Onye na-ese foto otu gị sere foto mara mma nke gị. Tupu i bipụta ya, ị ga-:", options: ["Bepụ akara (watermark) ya", "Bipụta ya dị ka nke gị", "Rịọ ikike", "Jiri AI dezie ya"], answer: 2, why: "Onye see foto ahụ ma ọ bụ ụlọ akwụkwọ nwere ike nwe ya." },
          { objective: "O5", q: "Ime foto AI nke na-egosi onye otu gị mere ihe ọ na-emeghị bụ:", options: ["Ọ dị mma ma ọ bụrụ na ọ na-atọ ọchị", "Ihe a chọrọ", "Ezigbo mgbasa ozi", "Ihe na-eduhie, a ga-ezerekwa ya"], answer: 3, why: "Emela ihe na-aghọgbu ndị mmadụ." },
          { objective: "O6", q: "AI kwuru na vidiyo gị mere nke kacha mma. Ị ga-:", options: ["Kwere ya kpamkpam", "Lelee ihe ọ gụrụ na mpempe akwụkwọ gị", "Hichapụ mpempe akwụkwọ gị", "Kwụsị ibipụta vidiyo"], answer: 1, why: "AI nwere ike ịgụhie data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI maka Mgbasa Ozi na Brand",
    questions: [
      { objective: "O1", q: "Ngwa mgbasa ozi (toolkit) bụ:", options: ["App dị ọtụtụ dị ka o kwere omume", "Akpa igwefoto", "Obere ngwa ole na ole, ntuziaka na prompt echekwara", "Ụlọ ọrụ mgbasa ozi a na-akwụ ụgwọ"], answer: 2, why: "Obere usoro i nwere ike imeghachi karịrị ọtụtụ app." },
      { objective: "O1", q: "Olu brand bụ:", options: ["Àgwà na ụdị otu i si ede ihe", "Olu gị mgbe ị na-abụ abụ", "Ịdị elu olu gị", "Logo gị"], answer: 0, why: "Ọ bụ otu i si ada n'ihe i dere." },
      { objective: "O1", q: "Kedu otu AI nwere ike isi nyere aka chọta olu gị?", options: ["Ịkọwa olu dị na caption gị n'ezie", "Ichepụta àgwà ọhụrụ", "Iṅomi onye a ma ama", "Ịhọrọ ụkpụrụ gị"], answer: 0, why: "Post gị n'ezie na-egosi olu gị." },
      { objective: "O1", q: "Okwu ole ka ị ga-ahọrọ iji kọwaa olu gị?", options: ["Iri abụọ", "Ọ dịghị", "Atọ", "Otu narị"], answer: 2, why: "Atọ dị mfe icheta na iji." },
      { objective: "O2", q: "Prompt ndebiri nwere:", options: ["Enweghị ntuziaka", "Oghere ị na-ejupụta", "Okwuntughe gị", "Naanị emoji"], answer: 1, why: "Oghere na-eme ka e nwee ike ijigharị ya." },
      { objective: "O2", q: "Ebee ka ị ga-edebe ọba prompt gị?", options: ["N'isi gị", "Gbasasịa na mkparịta ụka", "Ebe ọ bụla", "N'otu akwụkwọ dị ka Google Docs ma ọ bụ app ndetu"], answer: 3, why: "Otu ebe dị mfe iji na imelite." },
      { objective: "O3", q: "Kedu ngwa dabara ọrụ imewe?", options: ["Elekere nkwụsị (stopwatch)", "Naanị spreadsheet", "Canva", "Igwe mgbakọ"], answer: 2, why: "Canva nwere ndebiri imewe." },
      { objective: "O3", q: "Kedu nke dabara ọrụ vidiyo?", options: ["Ngwa ide akwụkwọ", "Kalenda", "Temometa", "CapCut ma ọ bụ ngwa ndezi dị n'app"], answer: 3, why: "Ha na-edezi vidiyo." },
      { objective: "O3", q: "Ịhazi oge post na-enyere aka:", options: ["N'izu ọrụ juru", "Ọ dịghị mgbe", "Naanị n'abalị", "Naanị maka ndị ọkachamara"], answer: 0, why: "Post na-apụta mgbe ị na-amụ egwuregwu ma ọ bụ na-agụ akwụkwọ." },
      { objective: "O3", q: "Post ị haziri oge ya nwere ike ịchọ mgbanwe mgbe:", options: ["Ọ dịghị mgbe", "Akụkọ ma ọ bụ nsonaazụ gbanwere", "Anwụ na-acha", "I nwetara otu like"], answer: 1, why: "Post ochie nwere ike ịdị ka ihe ezighi ezi mgbe ihe gbanwere." },
      { objective: "O4", q: "Nlele \"Eziokwu\" pụtara:", options: ["Ọ na-ada mma", "Ọ dị ogologo", "Eziokwu ọ bụla, nọmba ọ bụla na nkwupụta ọ bụla ziri ezi", "O nwere egwu"], answer: 2, why: "Ihe ziri ezi na-echebe aha gị." },
      { objective: "O4", q: "Ụzọ kacha dị mfe isi mee nlele \"Olu\" bụ:", options: ["Ịgụpụta ya n'olu dị elu", "Ịgụ ọnụ ọgụgụ okwu", "Itinye hashtag", "Ịjụ onye ị na-amaghị"], answer: 0, why: "Ị ga-anụ ma ọ dị ka okwu gị." },
      { objective: "O4", q: "Nlele \"Nchekwa\" na-ewepụ:", options: ["Egwuregwu gị", "Ihe ngosi kacha mma gị", "Ozi ekele gị", "Ozi nzuzo na ebe ị nọ ugbu a"], answer: 3, why: "Nchekwa na-ebu ụzọ." },
      { objective: "O4", q: "Ndị na-enyere gị aka ebipụta post kwesịrị:", options: ["Ịwụfe nlele", "Iji otu ndepụta nlele ahụ", "Ibipụta ihe ọ bụla", "Iji olu nke ha"], answer: 1, why: "Ịdị otu ụdị na-echebe brand gị." },
      { objective: "O5", q: "Ikike nwebiisinka (copyright) bụ:", options: ["Iwu egwuregwu", "Ikike onye nwe ya ịchịkwa mbipụta ọrụ ya", "Ụdị hashtag", "Licence n'efu maka onye ọ bụla"], answer: 1, why: "Ndị nwe ọrụ na-achịkwa ọrụ ha." },
      { objective: "O5", q: "Kedu egwu kacha enweghị nsogbu na vidiyo gị?", options: ["Egwu redio ọ bụla", "Egwu fim", "Egwu enyi gị budatara", "Ọba egwu app ahụ nwere licence"], answer: 3, why: "Egwu nwere licence na-egbochi ka e wepụ vidiyo gị." },
      { objective: "O5", q: "Ngwaahịa n'efu brand nyere gị ga-abụrịrị:", options: ["Nke e kwupụtara nke ọma n'ime post ahụ", "Nke e zoro ezo", "Naanị na bio gị", "Nke a na-eleghara anya"], answer: 0, why: "FTC na-agụ ngwaahịa n'efu dị ka njikọ." },
      { objective: "O5", q: "Ndị egwuregwu bụ ụmụ akwụkwọ kwesịrị ilele iwu NIL na:", options: ["Onye na-akwado ha", "Onye mmegide", "Ọfịs compliance ha ma ọ bụ otu egwuregwu steeti", "Naanị AI"], answer: 2, why: "Iwu dị iche iche ma na-agbanwe." },
      { objective: "O6", q: "Mmekọrịta (engagement) gụnyere:", options: ["Ogologo gị", "GPA gị", "Ihu igwe", "Likes, comments, shares na saves"], answer: 3, why: "Mmekọrịta bụ otu ndị mmadụ si emeghachi omume." },
      { objective: "O6", q: "Imeziwanye (iterate) pụtara:", options: ["Ịmalitegharị kwa ụbọchị", "Ime ka ihe ka mma nzọụkwụ n'otu n'otu site na nsonaazụ", "Ịghara ịgbanwe mgbe ọ bụla", "Iṅomi ndị ọzọ"], answer: 1, why: "Obere mgbanwe na-agbakọ ghọọ nnukwu ihe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 4, 6, 10, 12, 15, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ntuziaka olu brand", objective: "O1", notYet: "Okwu kọwara olu, okwu a na-adịghị eji ma ọ bụ post ihe atụ adịghị.", meets: "Otu peeji nwere okwu atọ kọwara olu, okwu a na-eji na ndị a na-adịghị eji, isiokwu, omume na post ihe atụ abụọ.", exceeds: "E wuru ya site na caption n'ezie, e nwalekwara ya site n'ime ka AI dee post nke enyi kwuru na ọ dị ka okwu onye na-amụ ihe ahụ." },
      { name: "Ọba prompt", objective: "O2", notYet: "Prompt erughị iri, ma ọ bụ prompt na-enweghị oghere ma ọ bụ ntuziaka olu.", meets: "Prompt iri nwere [oghere], nke ọ bụla na-eji ntuziaka olu, echekwara n'otu akwụkwọ.", exceeds: "E mere ka opekata mpe otu prompt ka mma mgbe o nyere azịza na-adịghị ike, ya na ndetu banyere ihe gbanwere." },
      { name: "Nhọrọ ngwa", objective: "O3", notYet: "Otu ọrụ enweghị ngwa, ma ọ bụ e leleghị ngwa ndị ahụ.", meets: "Otu ngwa maka ide ihe, imewe, vidiyo na ịgbaso, ebe e lelere onye mere ya, data na ego ọ na-efu.", exceeds: "Nwere ndetu banyere mgbe a na-eji nhazi oge na otu e si elele post a haziri oge ha." },
      { name: "Ndepụta nlele", objective: "O4", notYet: "Ndepụta nlele adịghị ma ọ bụ o zughị ezu.", meets: "Nlele ise ahụ dị n'elu akwụkwọ ngwa ahụ.", exceeds: "Ndị na-enyere onye na-amụ ihe aka ebipụta post ekwela na ha ga-eji ya." },
      { name: "Otu post site na mmalite ruo njedebe", objective: "O5", notYet: "Post ahụ ghọrọ otu nlele, dị ka ikike ma ọ bụ nkwupụta.", meets: "Otu post e ji ngwa ahụ mee nke gafere nlele ise niile, nwere foto na egwu e nyere ikike ma nwee nkwupụta ọ bụla n'ime post ahụ.", exceeds: "E dere nọmba ya na mpempe akwụkwọ ịgbaso, e jikwa ha melite otu prompt." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ngwa ha ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe ka na-eji ọba prompt na ndepụta nlele ha ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha na-echekwa oge n'imepụta ihe kwa izu",
      "Ndị na-amụ ihe kwuru na ha hụrụ nsogbu ikike, nkwupụta ma ọ bụ nchekwa tupu ha ebipụta"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Canva n'efu na ngwa ndezi vidiyo n'efu (CapCut ma ọ bụ ngwa ndezi dị n'app)",
      "Akaụntụ Google n'efu maka Google Docs na Sheets",
      "Caption ise gara aga nke gị",
      "Ihe dị ka nkeji 60"
    ],
    facilitatorNotes: [
      "Mee ka ndị na-amụ ihe weta caption ise nke ha n'ezie ka e wuo ntuziaka olu site n'ihe ha n'onwe ha dere.",
      "Kesaa otu ọba prompt mmalite nye otu ahụ, wee mee ka onye ọ bụla na-amụ ihe hazie ya ka ọ dabara olu ya.",
      "Lelee ndepụta nlele ihe ise ahụ ya na ndị ọrụ otu egwuregwu na-ebipụta post maka ndị egwuregwu ka onye ọ bụla jiri otu nlele ahụ.",
      "Kparịta ụka banyere foto AI nke ezi mmadụ nke ọma; emela foto na-eduhie banyere ndị otu ma ọ bụ ndị mmegide mgbe ọ bụla.",
      "Zipu ajụjụ NIL n'ọfịs compliance ma ọ bụ otu egwuregwu steeti tupu post ọ bụla onye nkwado kwụrụ ụgwọ ya."
    ]
  }
};
