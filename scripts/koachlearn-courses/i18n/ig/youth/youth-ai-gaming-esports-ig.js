"use strict";

// Koach Learn course (Igbo translation of youth/youth-ai-gaming-esports.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-gaming-esports-ig",
  lang: "ig",
  translationOf: "youth-ai-gaming-esports",
  category: "Youth",
  name: "AI maka Egwuregwu Vidiyo na Esports",
  skills: "Ịtọ ebumnuche omume, Iji AI mee atụmatụ omume, Ilegharị anya n'egwuregwu, Mkparịta ụka otu, Igwu egwu n'enweghị nsogbu na n'eziokwu, Inyocha ọrụ esports",
  outcome: "iji ngwa enyemaka AI n'efu dị ka onye nkuzi omume: ịtọ otu ebumnuche doro anya maka egwuregwu ị na-egwu, ime atụmatụ omume nke otu izu, ilegharị anya n'otu egwuregwu site na ndetu, na idebe egwuregwu gị n'enweghị nsogbu, n'eziokwu ma dabara n'akwụkwọ na ụra.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nọ n'afọ iri na ụma na-egwu egwuregwu vidiyo, site n'ndị na-egwu maka ọṅụ ruo ndị nọ n'otu esports nke ụlọ akwụkwọ ma ọ bụ klọb. Ọ dịghị mkpa ka i nwee ngwaọrụ dị oke ọnụ. Ị chọrọ egwuregwu ị na-egwu na ngwa enyemaka AI n'efu.",
    "Ị ga-amụta otu AI si adịlarị n'ime egwuregwu, wee mụta iji ngwa enyemaka AI dị ka onye nkuzi: ịtọ ebumnuche, ịhazi omume na ịhụ ihe na-emegharị n'egwuregwu gị. Ị ga-amụtakwa otu esi ekwurịta okwu nke ọma n'otu, otu esi anọ n'enweghị nsogbu na n'eziokwu n'ịntanetị, na ọrụ ndị dị gburugburu esports.",
    "Lelee iwu ụlọ akwụkwọ gị gbasara AI, afọ e dere maka egwuregwu gị (age rating), na afọ kacha nta app ọ bụla chọrọ, ma gwa nne na nna gị ma ọ bụ onye nlekọta gị tupu ị debanye aha n'ihe ọ bụla. Nkuzi ọ bụla na-agwụ n'ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu egwuregwu ị na-egwu na otu nka ị chọrọ ime ka ọ ka mma. Jiri ngwa enyemaka AI mee atụmatụ omume nke otu izu dabara n'akwụkwọ, ihe omume ụlọ na ụra. Gwụ ma legharịa anya n'otu egwuregwu site na ndetu atọ e dere ede, rịọ AI ka ọ chọta ihe na-emegharị ma tụọ aro otu drill, ma dee obere ozi nye otu gị ma ọ bụ klọb gị gbasara ihe ị ga-arụ ọrụ na ya ọzọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nọ n'afọ iri na ụma na-egwu egwuregwu vidiyo, site n'ndị na-egwu maka ọṅụ ruo ndị otu esports nke ụlọ akwụkwọ ma ọ bụ klọb.",
    startingPoint: "Ha na-egwu opekata mpe otu egwuregwu mgbe niile ma na-akparịta ụka na ndị egwuregwu ndị ọzọ n'ịntanetị. Ole na ole na-eme omume nwere atụmatụ, na-elegharị anya n'egwuregwu ha, ma ọ bụ maara otu esi ahụ aghụghọ akaụntụ na mkparịta ụka na-adịghị mma.",
    gap: "Ọtụtụ ndị nọ n'afọ iri na ụma na-egwu nke ukwuu ma ha anaghị aka mma, egwuregwu nwekwara ike iwepụ oge akwụkwọ na ụra. Egwuregwu n'ịntanetị na-ewetakwa aghụghọ, cheat na ndị ọbịa. Iji AI dị ka onye nkuzi omume, ya na ebumnuche doro anya na omume nchekwa, na-enyere ha aka ịka mma, idozi ndụ ha nke ọma, ma hụ ezi ọrụ dị gburugburu esports.",
    constraints: [
      "Afọ e dere maka egwuregwu, afọ kacha nta app chọrọ na iwu AI nke ụlọ akwụkwọ; a na-agwa nne na nna ma ọ bụ onye nlekọta tupu ndebanye aha",
      "Ọ dịghị mkpa ngwaọrụ dị oke ọnụ; egwuregwu ọ bụla na ngwa enyemaka AI n'efu",
      "Akwụkwọ, ihe omume ụlọ na ụra na-ebu ụzọ n'atụmatụ ọ bụla",
      "Nzuzo na nchekwa: enweghị ezi aha, ụlọ akwụkwọ, ozi nbanye ma ọ bụ ozi gbasara ndị egwuregwu ndị ọzọ na mkparịta ụka ma ọ bụ ngwa AI",
      "Nkuzi dị mkpụmkpụ nwere okwu dị mfe"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-eche maka egwuregwu ị na-egwu", action: "ịmata ụzọ e si eji AI n'ime egwuregwu na ihe ngwa enyemaka AI nwere ike na ihe ọ na-enweghị ike ime iji nyere gị aka n'omume", standard: "ma nweta opekata mpe 3 n'ime 4 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị otu nka ị ga-eme ka ọ ka mma na ezi usoro oge gị", action: "iji AI mee atụmatụ omume nke otu izu nwere obere ebumnuche a pụrụ ịtụ na drill dị mkpụmkpụ", standard: "nke dabara n'akwụkwọ, ihe omume ụlọ na ụra" },
    { id: "O3", condition: "Mgbe i gwuchara ma ọ bụ lee otu egwuregwu", action: "ide ndetu atọ gbasara egwuregwu ahụ ma rịọ AI ka ọ chọta ihe na-emegharị ma tụọ aro otu drill", standard: "n'enweghị aha njirimara (username) ma ọ bụ ozi nzuzo nke ndị egwuregwu ndị ọzọ" },
    { id: "O4", condition: "Maka otu gị ma ọ bụ klọb gị", action: "ime ndepụta callout dị mkpụmkpụ na ozi enyi nye otu ahụ n'olu nke gị", standard: "ma debe callout ndị ahụ mkpụmkpụ na jụụ, na ozi ahụ n'okpuru okwu 80" },
    { id: "O5", condition: "Mgbe ị zutere cheat, aghụghọ ma ọ bụ mkparịta ụka na-adịghị mma", action: "ịjụ cheat na aghụghọ, idebe ozi nzuzo n'ebe ọ na-adịghị na mkparịta ụka, ma gbochie (block), kọọ akụkọ (report) ma gwa okenye ị tụkwasịrị obi", standard: "n'ekesaghị ozi nbanye, koodu ma ọ bụ ozi nzuzo ọ bụla" },
    { id: "O6", condition: "Site n'iji AI na isi iyi a pụrụ ịtụkwasị obi", action: "idepụta ọrụ dị n'esports na-abụghị onye egwuregwu ọkachamara ma lelee otu n'ime ha na onye ndụmọdụ ma ọ bụ ezi mgbasa ọrụ", standard: "ma kpọọ aha nka ọrụ ahụ chọrọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ime omume nke ọma site n'iji AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ebe AI na-apụta n'egwuregwu, na otu o nwere ike isi kuzie gị",
          minutes: 4,
          goal: "Kpọọ aha ụzọ e si eji AI n'egwuregwu na ụzọ ngwa enyemaka AI nwere ike isi nyere gị aka n'omume.",
          text: [
            "Egwuregwu ejirila AI ogologo oge. Ndị kọmputa na-achịkwa ị na-egwu megide, usoro na-ejikọta gị na ndị egwuregwu nwere nka dị ka nke gị, na ngwa na-ejide ndị na-eme cheat nwere ike iji AI.",
            "Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini dị iche. Ọ pụghị ịhụ ihuenyo gị ma ọ bụ gwuoro gị egwu, mana o nwere ike inyere gị aka iche echiche: ịtọ ebumnuche, ịhazi omume, ịkọwa echiche atụmatụ na ịhụ ihe na-emegharị na ndetu i nyere ya.",
            "Ọ maghị mmelite (patch) ọ bụla nke egwuregwu ọ bụla, o nwekwara ike ime mperi. Lelee ndụmọdụ atụmatụ ya na ndetu gọọmentị nke egwuregwu ahụ, onye isi otu gị ma ọ bụ onye nkuzi gị, na nsonaazụ nke gị."
          ],
          words: [["AI", "mkpụrụ okwu bekee maka artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ."], ["Matchmaking", "usoro na-ahọrọ ndị gị na ha ga-egwu ma ọ bụ ndị ị ga-egwu megide."], ["Patch", "mmelite na-agbanwe egwuregwu."]],
          slides: [
            { title: "AI n'ime egwuregwu", bullets: ["Ndị kọmputa na-achịkwa", "Matchmaking dịka nka si dị", "Ngwa na-ejide ndị na-eme cheat"] },
            { title: "Ngwa enyemaka AI dị ka onye nkuzi", bullets: ["Na-enyere aka ịtọ ebumnuche na ịhazi omume", "Na-akọwa echiche atụmatụ", "Na-ahụ ihe na-emegharị na ndetu gị"] },
            { title: "Oke ya", bullets: ["Ọ pụghị ịhụ ihuenyo gị ma ọ bụ gwuoro gị egwu", "O nwere ike ghara ịmara patch kacha ọhụrụ", "Lelee ndụmọdụ na ezi nsonaazụ"] }
          ],
          tryIt: "Dee egwuregwu ị na-egwukarị na ihe atọ n'ime ya ị chọrọ ime ka ha ka mma. Gbaa okirikiri gburugburu nke kacha dị gị mkpa ugbu a.",
          youCanNow: "ịkpọ aha ụzọ e si eji AI n'egwuregwu ma kọwaa ihe ngwa enyemaka AI nwere ike na ihe ọ na-enweghị ike ime dị ka onye nkuzi omume.",
          quickCheck: [
            { objective: "O1", q: "Kedu n'ime ndị a nwere ike iji AI n'ime egwuregwu?", options: ["Foto dị n'igbe egwuregwu ahụ", "Batrị njikwa (controller) gị", "Afọ e dere maka egwuregwu ahụ", "Ngwa na-ejide ndị na-eme cheat"], answer: 3, why: "Ndị egwuregwu kọmputa, matchmaking na ngwa mgbochi cheat nwere ike iji AI." },
            { objective: "O1", q: "AI gwara gị atụmatụ nke yiri ka ọ dabaghị mgbe mmelite ọhụrụ gasịrị. Gịnị ka ị ga-eme?", options: ["Jiri ya n'egwuregwu ranked gị ọzọ n'eleleghị ya", "Lelee ya na ndetu gọọmentị nke egwuregwu ahụ ma ọ bụ onye nkuzi gị", "Kwụsị igwu egwuregwu ahụ", "Jụọ onye ọbịa ozi nbanye gị"], answer: 1, why: "AI nwere ike ghara ịmara patch kacha ọhụrụ, ya mere lelee ndụmọdụ ya na ndetu gọọmentị na nsonaazụ gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịtọ ebumnuche na ime atụmatụ omume",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI gbanwee otu ebumnuche ka ọ bụrụ atụmatụ omume nke izu dabara na ndụ gị.",
          text: [
            "Ịka mma na-esi n'ime omume otu ihe n'ebumnuche, ọ bụghị naanị igwukwu egwu. Ezigbo ebumnuche dị obere ma a pụrụ ịtụ ya: \"Ka ọtụtụ ogbugba m kụọ ihe na practice mode\" ma ọ bụ \"Kwuo ebe ndị iro nọ n'agba ọ bụla\", ọ bụghị \"ịma ya nke ọma\".",
            "Gwa AI egwuregwu gị, ebumnuche gị, ọkwa gị ugbu a na ezi usoro oge gị. Dịka ọmụmaatụ: \"Ana m egwu Rocket League. Achọrọ m ịkụ bọọlụ nke ọma n'ikuku (aerial). Enwere m ike ime omume nkeji 30 n'abalị ụlọ akwụkwọ 4 mgbe m mechara ihe omume ụlọ. Mee atụmatụ dị mfe nke otu izu nwere drill dị mkpụmkpụ na ụzọ isi soro ọganihu m.\"",
            "Buru ụzọ tinye akwụkwọ, ihe omume ụlọ, ụra na oge ezinụlọ. Ndị egwuregwu esports n'ọkwa ọ bụla na-ezu ike, na-agbatị ahụ ma na-enye anya ha ezumike. Atụmatụ ị pụrụ idobe ka mma karịa atụmatụ buru ibu ị ga-akwụsị."
          ],
          steps: ["Họrọ otu ebumnuche dị obere a pụrụ ịtụ.", "Gwa AI egwuregwu gị, ebumnuche gị, ọkwa gị na ezi oge efu gị.", "Rịọ maka atụmatụ otu izu nwere drill dị mkpụmkpụ na ụzọ isi soro ọganihu.", "Lelee na ọ hapụrụ oge maka akwụkwọ, ihe omume ụlọ na ụra.", "Rịọ maka otu mgbanwe ma ọ bụrụ na ọ karịrị akarị."],
          words: [["Ebumnuche a pụrụ ịtụ", "ebumnuche ị pụrụ iji nọmba ma ọ bụ ee ma ọ bụ mba lelee."], ["Drill", "obere omume na-eme otu nka."]],
          slides: [
            { title: "Mee omume n'ebumnuche", bullets: ["Otu nka n'otu oge", "Dị obere ma a pụrụ ịtụ ya", "Ọ bụghị naanị \"ịma ya nke ọma\""] },
            { title: "Ihe ị ga-agwa AI", bullets: ["Egwuregwu gị na ebumnuche gị", "Ọkwa gị", "Ezi oge efu gị"] },
            { title: "Atụmatụ ị pụrụ idobe", bullets: ["Akwụkwọ, ihe omume ụlọ na ụra na-ebu ụzọ", "Drill dị mkpụmkpụ, ezumike dị mkpụmkpụ", "Soro ọganihu gị kwa ụbọchị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka atụmatụ omume nke otu izu maka nka i gbara okirikiri na Nkuzi 1, site n'iji ezi usoro oge gị. Rịọ ya ka o mee ka atụmatụ ahụ dị mkpụmkpụ ma ọ bụrụ na ọ na-ewe karịa nkeji 30 ruo 45 kwa ụbọchị.",
          youCanNow: "iji ngwa enyemaka AI gbanwee otu ebumnuche egwuregwu ka ọ bụrụ atụmatụ omume izu a pụrụ ime n'ezie.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-enyere gị aka ịka mma karịa?", options: ["Ime omume otu nka n'ebumnuche", "Igwukwu egwu ọtụtụ awa n'enweghị ebumnuche", "Ịzụta ngwaọrụ ọhụrụ", "Ịgbanwe egwuregwu kwa ụbọchị"], answer: 0, why: "Ịka mma na-esi n'ime omume otu ihe n'ebumnuche." },
            { objective: "O2", q: "Ị chọrọ \"ịma ya nke ọma.\" Kedu otu ị ga-esi mee ka ọ bụrụ ebumnuche ka mma?", options: ["Hapụ ya dị ka \"ịma ya nke ọma\"", "Mee ya \"igwu egwu ngwụcha izu niile\"", "Mee ya ka ọ dị obere ma a pụrụ ịtụ ya, dị ka ịkụ ogbugba karịa na practice mode", "Mee ya \"imeri egwuregwu ọ bụla\""], answer: 2, why: "Ebumnuche dị obere a pụrụ ịtụ na-eme ka ị hụ ezi ọganihu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji AI legharịa anya n'egwuregwu",
          minutes: 5,
          goal: "Dee ndetu site n'otu egwuregwu ma jiri AI chọta ihe na-emegharị ma tụọ aro otu drill.",
          text: [
            "Ndị egwuregwu kacha mma na-elegharị anya n'egwuregwu ha. Mgbe egwuregwu gwụrụ, ma ọ bụ mgbe ị na-ele replay ma ọ bụrụ na egwuregwu gị nwere ya, dee ndetu atọ dị mkpụmkpụ: otu ihe gara nke ọma, otu mperi, na mgbe o mere.",
            "Tinye ndetu ahụ na ngwa enyemaka AI ma jụọ: \"Ndị a bụ ndetu m site n'egwuregwu atọ. Kedu ihe na-emegharị ị hụrụ, kedu otu drill ga-enyere aka?\" AI maara ịhụ ihe na-emegharị nke ị nwere ike ghara ịhụ.",
            "Debe ndetu gbasara egwuregwu ahụ, ọ bụghị gbasara ndị ọzọ. Etinyela aha njirimara (username) ndị egwuregwu ndị ọzọ, ozi nzuzo ha ma ọ bụ ihe ọ bụla gbasara onwe ha. Mee obiọma nye onwe gị: ebumnuche bụ ịmụta ihe, ọ bụghị iwe iwe."
          ],
          steps: ["Gwụ ma ọ bụ lee replay nke otu egwuregwu.", "Dee ndetu atọ: ihe dị mma, mperi, na mgbe o mere.", "Chịkọta ndetu site n'egwuregwu abụọ ma ọ bụ atọ.", "Rịọ AI maka ihe na-emegharị na otu drill.", "Tinye drill ahụ n'atụmatụ omume gị."],
          words: [["Replay", "ihe e dekọrọ n'egwuregwu ị nwere ike ilegharị anya ọzọ."], ["Ihe na-emegharị (pattern)", "ihe na-eme ugboro ugboro."]],
          slides: [
            { title: "Ndetu atọ n'egwuregwu ọ bụla", bullets: ["Otu ihe gara nke ọma", "Otu mperi", "Mgbe o mere"] },
            { title: "Rịọ AI maka ihe na-emegharị", bullets: ["Tinye ndetu site n'egwuregwu 2-3", "\"Kedu ihe na-emegharị ị hụrụ?\"", "\"Kedu otu drill ga-enyere aka?\""] },
            { title: "Debe ya n'egwuregwu ahụ", bullets: ["Enweghị aha ma ọ bụ ozi ndị egwuregwu ndị ọzọ", "Mụta ihe, ataala onwe gị ụta"] }
          ],
          tryIt: "Gwụ otu egwuregwu, dee ndetu atọ, ma jụọ ngwa enyemaka AI ihe ọ hụrụ na otu drill ọ na-atụ aro. Tinye drill ahụ n'atụmatụ gị.",
          youCanNow: "ilegharị anya n'otu egwuregwu site na ndetu ma jiri AI chọta ihe na-emegharị ma họrọ drill.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ebumnuche ilegharị anya n'egwuregwu?", options: ["Ịta ndị otu gị ụta", "Iwe iwe maka mmeri e meriri gị", "Ibipụta aha ndị egwuregwu ndị ọzọ", "Ịmụta ihe site n'ihe gara nke ọma na ihe gara n'ụzọ na-ezighi ezi"], answer: 3, why: "Ilegharị anya na-enyere gị aka ịmụta ihe; ebumnuche abụghị iwe iwe." },
            { objective: "O3", q: "Ndetu gị nwere aha njirimara na mkparịta ụka otu onye otu gị. Gịnị ka ị ga-eme tupu i tinye ha n'AI?", options: ["Wepụ aha njirimara na mkparịta ụka ahụ ma debe ndetu gbasara egwuregwu ahụ", "Tinye ha niile", "Tinyekwa ezi aha ha", "Ghara ide ndetu"], answer: 0, why: "Debe ndetu gbasara egwuregwu ahụ, ọ bụghị gbasara ndị ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ime omume nke ọma site n'iji AI",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ọmụmaatụ AI n'ime egwuregwu?", options: ["Eriri ọkụ", "Ndị kọmputa na-achịkwa ị na-egwu megide", "Igbe egwuregwu ahụ", "Ekweisi (headset) gị"], answer: 1, why: "Ndị kọmputa na-achịkwa na-ejikarị AI." },
          { objective: "O2", q: "Kedu ebumnuche omume kacha mma?", options: ["\"Ịma ya nke ọma\"", "\"Igwu egwu abalị niile\"", "\"Ịkwu ebe ndị iro nọ n'agba ọ bụla n'izu a\"", "\"Imeri ihe niile\""], answer: 2, why: "Ọ dị obere ma a pụrụ ịtụ ya." },
          { objective: "O2", q: "Gịnị ka ị ga-agwa AI iji nweta atụmatụ omume bara uru?", options: ["Egwuregwu gị, ebumnuche gị, ọkwa gị na ezi oge efu gị", "Okwuntughe gị", "Naanị okwu \"atụmatụ\"", "Adreesị ụlọ gị"], answer: 0, why: "Ozi ndị ahụ na-enyere ya aka ime atụmatụ dabara gị." },
          { objective: "O2", q: "Atụmatụ AI gị na-ewe awa 3 kwa abalị ụlọ akwụkwọ. Gịnị ka ị ga-eme?", options: ["Hapụ ihe omume ụlọ", "Nọrọ ọdụ abalị", "Rịọ AI ka o mee ka ọ dị mkpụmkpụ ma dabara n'akwụkwọ na ụra", "Soro ya otu o sila dị"], answer: 2, why: "Atụmatụ ị pụrụ idobe na-ebu akwụkwọ na ụra ụzọ." },
          { objective: "O3", q: "Gịnị ka ị ga-ewepụ na ndetu egwuregwu i nyere AI?", options: ["Mgbe mperi mere", "Ihe gara nke ọma", "Aha njirimara na ozi nzuzo ndị egwuregwu ndị ọzọ", "Aha egwuregwu ahụ"], answer: 2, why: "Debe ndetu gbasara egwuregwu ahụ, ọ bụghị ozi nzuzo ndị ọzọ." }
        ]
      }
    },
    {
      name: "Isi 2: Otu, nchekwa na ọdịnihu esports",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ikwurịta okwu nke ọma n'otu gị",
          minutes: 5,
          goal: "Jiri AI nyere aka ide callout dị mkpụmkpụ maka otu na ozi doro anya nye klọb ma ọ bụ otu.",
          text: [
            "Otu dị mma na-ekwu okwu nke ọma na n'obiọma. Callout bụ okwu dị mkpụmkpụ otu ahụ kwekọrịtara, dị ka \"two left\" (abụọ n'aka ekpe) ma ọ bụ \"rotating mid\" (na-aga n'etiti). Callout dị mkpụmkpụ na jụụ ka mma karịa nke ogologo ma ọ bụ nke iwe.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ime ndepụta callout maka egwuregwu gị, ma ọ bụ ide ozi nye klọb ụlọ akwụkwọ gị: oge omume, ihe unu ga-arụ ọrụ na ya, na ncheta ka unu kwanyere ibe unu ugwu. Jụọ: \"Dee obere ozi enyi nye klọb esports ụlọ akwụkwọ m gbasara omume Tọzdee. Mee ka ọ bụrụ n'okpuru okwu 80.\"",
            "Ọ bụrụ na onye otu gị mehiere, lekwasị anya n'egwuregwu na-esote, ọ bụghị ịta ụta. Otu ndị na-anọgide n'obi ọma na-egwu nke ọma ma na-enwekwu ọṅụ."
          ],
          steps: ["Depụta oge ndị a na-ahụkarị n'egwuregwu gị chọrọ callout.", "Rịọ AI maka okwu callout dị mkpụmkpụ ma doo anya maka nke ọ bụla.", "Kwekọrịta na ndepụta ahụ na otu gị.", "Jiri AI dee obere ozi enyi nye otu ma ọ bụ klọb gị.", "Gụọ ya, gbanwee ya ka ọ dị ka okwu gị, wee kesaa ya."],
          words: [["Callout", "okwu ma ọ bụ ahịrịokwu dị mkpụmkpụ na-agwa ndị otu gị ihe na-eme."], ["Esports", "egwuregwu vidiyo a haziri ahazi nke asọmpi, nke na-enwekarị otu na liig."]],
          slides: [
            { title: "Callout doro anya", bullets: ["Okwu dị mkpụmkpụ otu kwekọrịtara", "Jụụ ka mma karịa mkpọtụ", "Ọmụmaatụ: \"two left\""] },
            { title: "AI maka ozi otu", bullets: ["Oge na ebe omume", "Ihe unu ga-arụ ọrụ na ya", "Ncheta ka unu kwanyere ibe unu ugwu"] },
            { title: "Nọgide n'obi ọma", bullets: ["Lekwasị anya n'egwuregwu na-esote", "Enweghị ịta ụta", "Mee ka ọ dị ka okwu gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o nyere gị aka ime ndepụta callout ise maka egwuregwu gị. Wee mee ka o dee obere ozi nye otu ma ọ bụ klọb gị gbasara omume unu na-esote, ma degharịa ya n'olu nke gị.",
          youCanNow: "ime callout doro anya maka otu na ozi enyi nye otu site n'enyemaka AI.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ callout?", options: ["Okwu ogologo mgbe egwuregwu gwụrụ", "Ozi iwe", "Ahịrịokwu dị mkpụmkpụ na-agwa ndị otu ihe na-eme", "Koodu cheat"], answer: 2, why: "Callout bụ okwu dị mkpụmkpụ otu kwekọrịtara, dị ka \"two left\"." },
            { objective: "O4", q: "AI dere ozi klọb gị, mana ọ dị ka ihe e kpụrụ akpụ. Gịnị ka ị ga-eme?", options: ["Zipu ya otu o sila dị", "Degharịa ya ka ọ dị ka okwu gị tupu i kesaa ya", "Mee ka ọ dị ogologo karịa", "Tinye nọmba ekwentị ndị otu gị"], answer: 1, why: "Gụọ ma gbanwee ihe AI dere ka ọ dị ka okwu gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Igwu egwu n'enweghị nsogbu na n'eziokwu",
          minutes: 5,
          goal: "Hụ cheat, aghụghọ na mkparịta ụka na-adịghị mma, ma mara ihe ị ga-eme.",
          text: [
            "Cheat dị ka aimbot ma ọ bụ faịlụ e megharịrị emegharị na-emebi iwu egwuregwu, ha nwekwara ike ime ka a machibido akaụntụ gị (ban). Weebụsaịtị na-ekwe nkwa ego egwuregwu n'efu, skin ma ọ bụ \"AI cheats\" na-ezukarị akaụntụ ma ọ bụ na-etinye mmemme na-emebi ihe. Ebudatala ha mgbe ọ bụla, enyekwala onye ọ bụla ozi nbanye gị.",
            "Kpachara anya na mkparịta ụka. Ekesala ezi aha gị, ụlọ akwụkwọ gị, adreesị gị, nọmba ekwentị gị ma ọ bụ foto gị na ndị ị maara naanị n'ịntanetị. Ọ bụrụ na mmadụ na-amanye gị, na-arịọ ihe nzuzo, ma ọ bụ na-eme ka obi ghara iru gị ala, gbochie ya (block), kọọ akụkọ ya n'egwuregwu ahụ (report), ma gwa nne na nna gị, onye nlekọta gị ma ọ bụ okenye ị tụkwasịrị obi.",
            "Egwuregwu nwere afọ e dere maka ha (age rating). Na United States, ESRB na-enye egwuregwu ọkwa, dịka ọmụmaatụ T (Teen) maka ihe dị ka afọ 13 gbagowe na M (Mature) maka afọ 17 gbagowe. Soro ezinụlọ gị kparịta egwuregwu na oge ihuenyo dabara gị."
          ],
          steps: ["Ejila cheat mgbe ọ bụla, ebudatakwala ngwa \"ego n'efu\".", "Enyela onye ọ bụla ozi nbanye gị ma ọ bụ koodu e zitere n'ekwentị gị.", "Wepụ ezi aha gị, ụlọ akwụkwọ gị na adreesị gị na mkparịta ụka.", "Gbochie, kọọ akụkọ ma gwa okenye ị tụkwasịrị obi mgbe ihe adịghị gị mma.", "Gị na ezinụlọ gị lelee afọ e dere maka egwuregwu."],
          words: [["Aimbot", "cheat na-eburu gị egbe; ọ na-emebi iwu egwuregwu."], ["Ban", "mgbe egwuregwu gbochiri akaụntụ gị maka imebi iwu."], ["Age rating", "akara na-egosi afọ ndị egwuregwu dabara."]],
          slides: [
            { title: "Gwụ egwu n'eziokwu", bullets: ["Cheat nwere ike ime ka a ban akaụntụ gị", "Saịtị \"ego n'efu\" na-ezu akaụntụ", "Ekesala ozi nbanye ma ọ bụ koodu ekwentị gị"] },
            { title: "Nchekwa na mkparịta ụka", bullets: ["Enweghị ezi aha, ụlọ akwụkwọ ma ọ bụ adreesị", "Enweghị foto nye ndị ọbịa", "Gbochie, kọọ akụkọ, gwa okenye ị tụkwasịrị obi"] },
            { title: "Afọ e dere maka egwuregwu", bullets: ["ESRB T: n'ozuzu afọ 13 gbagowe", "ESRB M: n'ozuzu afọ 17 gbagowe", "Soro ezinụlọ gị kparịta egwuregwu na oge"] }
          ],
          sources: [{ name: "ESRB: Ntụziaka ọkwa egwuregwu", url: "https://www.esrb.org/ratings-guide/" }],
          tryIt: "Meghee ntọala (settings) nke egwuregwu ma ọ bụ ikpo okwu ị na-eji ma chọta ebe ị na-egbochi ma na-akọ akụkọ onye egwuregwu. Wee chọọ afọ e dere maka egwuregwu kacha amasị gị na weebụsaịtị ESRB.",
          youCanNow: "ịhụ cheat, aghụghọ akaụntụ na mkparịta ụka na-adịghị mma, ma mara otu esi egbochi, akọ akụkọ ma nweta enyemaka.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-emekarị na saịtị na-ekwe nkwa ego egwuregwu ma ọ bụ skin n'efu?", options: ["Ị na-enweta ihe n'efu n'enweghị nsogbu", "Egwuregwu gị na-agba ọsọ karịa", "Ọ dịghị ihe ọ bụla", "Ha na-ezukarị akaụntụ ma ọ bụ na-etinye mmemme na-emebi ihe"], answer: 3, why: "Saịtị ego n'efu na cheat na-ezukarị akaụntụ ma ọ bụ na-etinye mmemme na-emebi ihe." },
            { objective: "O5", q: "Onye egwuregwu n'ịntanetị na-arịọ foto gị mgbe niile ma na-asị ka ị debe ya na nzuzo. Gịnị ka ị ga-eme?", options: ["Zipu otu foto", "Gbochie, kọọ akụkọ ma gwa nne na nna, onye nlekọta ma ọ bụ okenye ị tụkwasịrị obi", "Debe ihe nzuzo ahụ", "Kama nke ahụ, kesaa ụlọ akwụkwọ gị"], answer: 1, why: "Mmanye na ihe nzuzo bụ ihe ịdọ aka na ntị; gbochie, kọọ akụkọ ma gwa okenye ị tụkwasịrị obi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ọrụ esports na ijikọ ya niile ọnụ",
          minutes: 6,
          goal: "Nyochaa ọrụ dị gburugburu esports ma mezuo atụmatụ omume gị na ilegharị anya n'egwuregwu.",
          text: [
            "Naanị mmadụ ole na ole na-aghọ ndị egwuregwu ọkachamara, mana esports chọrọ ọtụtụ ndị ọzọ: ndị nkuzi, ndị njikwa otu, shoutcaster na-akọwa egwuregwu, ndị na-edezi vidiyo, ndị na-ese ihe (graphic designer), ndị na-ahazi mmemme, na ndị na-emepụta ma na-anwale egwuregwu.",
            "Jụọ ngwa enyemaka AI: \"Kedu ọrụ dị n'esports na-abụghị onye egwuregwu ọkachamara? Kedu isiokwu ụlọ akwụkwọ na klọb na-enyere aka maka nke ọ bụla?\" Wee lelee azịza ndị ahụ na onye ndụmọdụ ụlọ akwụkwọ ma ọ bụ ezi mgbasa ọrụ, n'ihi na ozi AI nwere ike ịbụ nke ochie.",
            "Ọtụtụ ụlọ akwụkwọ nwere klọb ma ọ bụ otu esports. Ọ bụrụ na nke gị enweghị, onye ndụmọdụ klọb ma ọ bụ onye nkuzi nwere ike inyere gị aka ịmalite otu. Ugbu a, jikọta ya niile ọnụ: ebumnuche, atụmatụ, ilegharị anya n'egwuregwu na ozi otu."
          ],
          steps: ["Rịọ AI ka o depụta ọrụ esports na nka nke ọ bụla chọrọ.", "Họrọ otu ọrụ masịrị gị.", "Lelee ya na onye ndụmọdụ ma ọ bụ ezi mgbasa ọrụ.", "Mezuo ebumnuche gị, atụmatụ gị, ilegharị anya n'egwuregwu na ozi otu gị."],
          words: [["Shoutcaster", "onye na-akọwa egwuregwu esports ka ọ na-eme."], ["Onye na-ahazi mmemme", "onye na-eme atụmatụ ma na-eduzi asọmpi."]],
          slides: [
            { title: "Karịa ndị egwuregwu ọkachamara", bullets: ["Ndị nkuzi na ndị njikwa otu", "Shoutcaster na ndị na-edezi vidiyo", "Ndị na-emepụta, ndị na-anwale, ndị na-ahazi mmemme"] },
            { title: "Nyochaa site n'AI, wee lelee", bullets: ["Jụọ nka ọrụ ọ bụla chọrọ", "Lelee na onye ndụmọdụ ma ọ bụ mgbasa ọrụ"] },
            { title: "Ọrụ ikpeazụ gị", bullets: ["Otu ebumnuche na atụmatụ otu izu", "Otu egwuregwu e lere anya na ndetu atọ", "Otu drill na ozi otu"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri AI mee atụmatụ omume nke otu izu dabara n'akwụkwọ na ụra, legharịa anya n'otu egwuregwu site na ndetu atọ, rịọ AI maka ihe na-emegharị na otu drill, ma dee obere ozi nye otu ma ọ bụ klọb gị gbasara ihe ị ga-arụ ọrụ na ya ọzọ.",
          youCanNow: "iji AI dị ka onye nkuzi omume, igwu egwu n'enweghị nsogbu na n'eziokwu, ma kpọọ aha ọrụ esports na-abụghị onye egwuregwu ọkachamara.",
          quickCheck: [
            { objective: "O6", q: "Kedu n'ime ndị a bụ ọrụ esports na-abụghị onye egwuregwu ọkachamara?", options: ["Onye njikwa otu", "Onye na-ere aimbot", "Onye na-azụ akaụntụ", "Onye na-enye skin n'efu"], answer: 0, why: "Esports chọrọ ndị nkuzi, ndị njikwa, shoutcaster, ndị nhazi vidiyo, ndị na-emepụta na ndị na-ahazi mmemme." },
            { objective: "O6", q: "AI depụtara ọrụ esports na nka ha chọrọ. Gịnị ka ị ga-eme ọzọ?", options: ["Kwere ihe niile o kwuru", "Họrọ ọrụ n'enweghị echiche", "Leghara ndepụta ahụ anya", "Lelee otu ọrụ na onye ndụmọdụ ụlọ akwụkwọ ma ọ bụ ezi mgbasa ọrụ"], answer: 3, why: "Ozi AI nwere ike ịbụ nke ochie, ya mere lelee ya na onye ndụmọdụ ma ọ bụ ezi mgbasa ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Otu, nchekwa na ọdịnihu esports",
        questions: [
          { objective: "O4", q: "Gịnị na-eme ka callout dị mma?", options: ["Ogologo ma zuo oke", "Dị mkpụmkpụ, jụụ, ma otu kwekọrịtara na ya", "Mkpọtụ na iwe", "Dị iche oge ọ bụla"], answer: 1, why: "Callout dị mkpụmkpụ otu kwekọrịtara dị ọsọ ma doo anya." },
          { objective: "O5", q: "Weebụsaịtị na-enye ego egwuregwu n'efu ma ọ bụrụ na i tinye ozi nbanye gị. Gịnị ka ị ga-eme?", options: ["Tinye ya ngwa ngwa", "Kesaa njikọ ahụ na ndị enyi gị", "Nye ha koodu ekwentị gị", "Etinyela ya; o yikarịrị ka ọ bụ aghụghọ"], answer: 3, why: "Saịtị ego n'efu na-ezukarị akaụntụ." },
          { objective: "O5", q: "Onye ị maara naanị n'ịntanetị jụrụ ụlọ akwụkwọ ị na-aga. Gịnị ka ị ga-eme?", options: ["Gwa ha", "Zipu foto uwe ụlọ akwụkwọ gị", "Ekesala ya; gbochie ma gwa okenye ị tụkwasịrị obi ma ọ bụrụ na ha amanye gị", "Kama nke ahụ, nye adreesị gị"], answer: 2, why: "Debe ozi nzuzo gị n'ịntanetị." },
          { objective: "O5", q: "Ọkwa ESRB M pụtara na egwuregwu dị n'ozuzu maka afọ:", options: ["17 gbagowe", "6 gbagowe", "10 gbagowe", "Onye ọ bụla"], answer: 0, why: "M (Mature) bụ n'ozuzu maka afọ 17 gbagowe." },
          { objective: "O6", q: "Kedu nke bụ ọrụ esports na-abụghị onye egwuregwu ọkachamara?", options: ["Shoutcaster", "Onye na-eme aimbot", "Onye na-ere akaụntụ", "Onye na-anwale cheat"], answer: 0, why: "Shoutcaster na-akọwa egwuregwu; ndị ọzọ na-emebi iwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Egwuregwu Vidiyo na Esports",
    questions: [
      { objective: "O1", q: "Matchmaking n'egwuregwu bụ:", options: ["Ụzọ isi zụta skin", "Usoro na-ahọrọ ndị gị na ha ga-egwu ma ọ bụ ndị ị ga-egwu megide", "Cheat", "Ụdị njikwa (controller)"], answer: 1, why: "Matchmaking na-ejikọta ndị egwuregwu, na-esokarị nka ha." },
      { objective: "O1", q: "Gịnị ka ngwa enyemaka AI na-ENWEGHỊ ike ime maka egwuregwu gị?", options: ["Inyere aka ịhazi omume", "Ịkọwa echiche atụmatụ", "Ịhụ ihuenyo gị ma gwuoro gị egwu", "Ịchọta ihe na-emegharị na ndetu gị"], answer: 2, why: "Ngwa enyemaka mkparịta ụka na-enyere gị aka iche echiche; ọ naghị egwuoro gị egwu." },
      { objective: "O1", q: "Gịnị mere ị ga-eji lelee ndụmọdụ atụmatụ AI na ndetu gọọmentị nke egwuregwu?", options: ["AI nwere ike ghara ịmara patch kacha ọhụrụ", "AI na-eziri ezi mgbe niile", "Ndetu gọọmentị megidere iwu", "Ọ bụ iwu ụlọ akwụkwọ"], answer: 0, why: "Egwuregwu na-agbanwe site na patch, ozi AI nwekwara ike ịbụ nke ochie." },
      { objective: "O2", q: "Ebumnuche a pụrụ ịtụ bụ nke ị nwere ike:", options: ["Ịghara imecha mgbe ọ bụla", "Naanị inwe mmetụta ya", "Iji nọmba ma ọ bụ ee ma ọ bụ mba lelee", "Ichefu"], answer: 2, why: "A pụrụ ịtụ pụtara na ị nwere ike ilele ya." },
      { objective: "O2", q: "Kedu nke kwesịrị ibu ụzọ n'atụmatụ omume gị?", options: ["Omume n'abalị", "Akwụkwọ, ihe omume ụlọ na ụra", "Ịzụta ngwaọrụ ọhụrụ", "Igwu egwuregwu ndị ọzọ"], answer: 1, why: "Ezigbo atụmatụ na-adaba n'akwụkwọ na ezumike." },
      { objective: "O2", q: "Drill bụ:", options: ["Obere omume na-eme otu nka", "Koodu cheat", "Aha otu", "Ọkwa egwuregwu"], answer: 0, why: "Drill na-eme otu nka n'otu oge." },
      { objective: "O2", q: "Atụmatụ gị dị ka ọ karịrị akarị. Gịnị ka ị ga-eme?", options: ["Kwụsị igwu egwu", "Rịọ AI ka o mee ka ọ dị mkpụmkpụ", "Hapụ ụra", "Leghara ya anya"], answer: 1, why: "Arịrịọ nsochi na-agbanwe atụmatụ ahụ." },
      { objective: "O3", q: "Kedu ndetu atọ ị ga-ede mgbe egwuregwu gwụrụ?", options: ["Akara, ihu igwe, nri ntakịrị", "Aha na ozi ndị egwuregwu ndị ọzọ", "Ihe dị mma, mperi, na mgbe o mere", "Ọ dịghị ihe"], answer: 2, why: "Ndetu ndị a na-enyere gị aka ịmụta ihe site n'egwuregwu ahụ." },
      { objective: "O3", q: "Gịnị mere ị ga-eji nye AI ndetu site n'ọtụtụ egwuregwu?", options: ["Ka o wee hụ ihe na-emegharị", "Iji mee ka ọ dị nwayọọ", "Ka o wee banye n'akaụntụ gị maka gị", "Ọ chọrọ okwuntughe gị"], answer: 0, why: "Ihe na-emegharị na-apụta n'ọtụtụ egwuregwu." },
      { objective: "O3", q: "Gịnị ka ị ga-eme na drill AI tụrụ aro?", options: ["Leghara ya anya", "Bipụta ya n'ihu ọha", "Hichapụ ndetu gị", "Tinye ya n'atụmatụ omume gị"], answer: 3, why: "Drill na-enyere aka naanị ma ọ bụrụ na ị na-eme ya." },
      { objective: "O4", q: "Callout bụ:", options: ["Ahịrịokwu dị mkpụmkpụ na-agwa ndị otu ihe na-eme", "Cheat", "Ban", "Ọkwa egwuregwu"], answer: 0, why: "Callout na-enyere otu aka ikwurịta okwu ọsọ ọsọ." },
      { objective: "O4", q: "Onye otu gị mehiere. Ihe kacha mma ime bụ:", options: ["Ịta ya ụta na mkparịta ụka", "Ịhapụ egwuregwu ahụ", "Ilekwasị anya n'egwuregwu na-esote", "Ịkọ akụkọ ya"], answer: 2, why: "Otu nọ n'obi ọma na-egwu nke ọma." },
      { objective: "O4", q: "Tupu i kesaa ozi klọb AI dere, ị kwesịrị:", options: ["Iziga ya n'agụghị ya", "Ịgụ ya ma mee ka ọ dị ka okwu gị", "Itinye okwuntughe gị", "Ime ka ọ dị ogologo"], answer: 1, why: "Gị na-aza maka ihe ị na-ezipu." },
      { objective: "O5", q: "Iji aimbot nwere ike:", options: ["Ime ka a ban akaụntụ gị", "Inyere gị aka ịmụta ngwa ngwa", "Ibuli afọ e dere maka gị", "Ime gị onye nkuzi"], answer: 0, why: "Cheat na-emebi iwu ma nwee ike iduga na ban." },
      { objective: "O5", q: "Mmadụ na-arịọ koodu e zitere n'ekwentị gị ugbu a. Ị ga-:", options: ["Gụọrọ ha ya", "Ekesala ya mgbe ọ bụla", "Tinye ya na mkparịta ụka", "Zipu ya nye otu gị"], answer: 1, why: "Koodu ahụ na-echebe akaụntụ gị." },
      { objective: "O5", q: "Onye egwuregwu n'ịntanetị na-eme ka obi ghara iru gị ala. Gịnị ka ị ga-eme?", options: ["Nọgide na-akparịta ụka", "Nye ya nọmba gị", "Gbochie, kọọ akụkọ ma gwa okenye ị tụkwasịrị obi", "Zipu foto"], answer: 2, why: "Igbochi, ịkọ akụkọ na ịgwa okenye na-echebe gị." },
      { objective: "O5", q: "ESRB T (Teen) bụ n'ozuzu maka afọ:", options: ["3 gbagowe", "13 gbagowe", "Naanị 18 gbagowe", "N'okpuru 10"], answer: 1, why: "T dabara n'ozuzu maka afọ 13 gbagowe." },
      { objective: "O5", q: "Tupu ịdebanye aha na app egwuregwu ma ọ bụ app AI ọhụrụ, onye nọ n'afọ iri na ụma kwesịrị:", options: ["Iji ụbọchị ọmụmụ ụgha", "Ịhapụ usoro iwu (terms)", "Ikesa okwuntughe nne ma ọ bụ nna", "Ilele afọ kacha nta ọ chọrọ ma gwa nne na nna ma ọ bụ onye nlekọta"], answer: 3, why: "Oke afọ na ntinye aka nne na nna na-echebe gị ma debe gị n'iwu." },
      { objective: "O6", q: "Shoutcaster:", options: ["Na-akọwa egwuregwu esports", "Na-eme cheat", "Na-a ban ndị egwuregwu", "Na-enye egwuregwu ọkwa"], answer: 0, why: "Shoutcaster bụ olu mgbasa egwuregwu esports." },
      { objective: "O6", q: "AI depụtara gị ọrụ esports. Gịnị ọzọ?", options: ["Kwere ihe niile o kwuru", "Hapụ akwụkwọ", "Lelee ya na onye ndụmọdụ ma ọ bụ ezi mgbasa ọrụ", "Kwụọ ụgwọ maka ihe ọmụmụ ozugbo"], answer: 2, why: "Ozi AI nwere ike ịbụ nke ochie; lelee ya n'ezi isi iyi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 4, 7, 8, 10, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebumnuche na atụmatụ", objective: "O2", notYet: "Ebumnuche ahụ edoghị anya, dị ka \"ịma ya nke ọma\", ma ọ bụ enweghị atụmatụ.", meets: "Otu ebumnuche dị obere a pụrụ ịtụ na atụmatụ otu izu nwere drill dị mkpụmkpụ.", exceeds: "Atụmatụ ahụ nwere ụzọ isi soro ọganihu kwa ụbọchị." },
      { name: "Dabara na ndụ", objective: "O2", notYet: "Atụmatụ ahụ na-ewepụ oge akwụkwọ, ihe omume ụlọ ma ọ bụ ụra.", meets: "Akwụkwọ, ihe omume ụlọ na ụra na-ebu ụzọ, omume na-adabakwa n'etiti ha.", exceeds: "O nwekwara ezumike, ịgbatị ahụ ma ọ bụ izu ike anya." },
      { name: "Ilegharị anya n'egwuregwu", objective: "O3", notYet: "Ndetu erughị atọ, ma ọ bụ ndetu gbasara ndị ọzọ.", meets: "Ndetu atọ (ihe dị mma, mperi, mgbe) na otu drill AI tụrụ aro etinyere n'atụmatụ ahụ.", exceeds: "Ndetu site n'egwuregwu abụọ ma ọ bụ karịa, ya na ihe na-emegharị AI hụrụ nke onye na-amụ ihe kọwara n'okwu nke ya." },
      { name: "Ozi otu", objective: "O4", notYet: "Ozi ahụ adịghị, ọ dị ogologo ma ọ bụ enweghị obiọma.", meets: "Obere ozi enyi gbasara ihe otu ahụ ga-arụ ọrụ na ya, n'olu onye na-amụ ihe n'onwe ya.", exceeds: "O nwekwara ndepụta callout otu kwekọrịtara." },
      { name: "Nchekwa na eziokwu", objective: "O5", notYet: "Atụmatụ ma ọ bụ ndetu nwere ozi nzuzo, ma ọ bụ na-ekwu maka cheat.", meets: "Ọ dịghị ozi nzuzo ebe ọ bụla, ọ dịghịkwa cheat ma ọ bụ ngwa na-adịghị mma.", exceeds: "Onye na-amụ ihe nwere ike igosi ebe a na-egbochi na ebe a na-akọ akụkọ n'egwuregwu ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe sooro atụmatụ omume ha otu izu zuru ezu ma kọọ ọganihu n'ebumnuche ha (nnyocha nsochi)",
      "Ndị na-amụ ihe sonyere ma ọ bụ malitere otu esports nke ụlọ akwụkwọ ma ọ bụ klọb n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ha gbochiri ma kọọ akụkọ onye egwuregwu na-adịghị mma ma ọ bụ zere aghụghọ na nnyocha nsochi ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Egwuregwu onye na-amụ ihe na-egwularị, nke e kwere ka o gwuo, na ngwaọrụ ọ bụla",
      "Ngwa enyemaka AI n'efu nke e kwere ka onye na-amụ ihe jiri",
      "Akwụkwọ ma ọ bụ app ndetu maka ndetu egwuregwu na atụmatụ omume",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere otu izu omume maka atụmatụ ahụ"
    ],
    facilitatorNotes: [
      "Mee ya na otu esports nke ụlọ akwụkwọ ma ọ bụ klọb ka ndị na-amụ ihe wee hazie ma legharịa anya ọnụ.",
      "Lelee afọ e dere maka egwuregwu ndị a na-eji na mmemme gị ma kesaa ha na ezinụlọ.",
      "Hụ na atụmatụ omume ọ bụla hapụrụ oge maka akwụkwọ, ihe omume ụlọ na ụra tupu i kwado ya.",
      "Gosi ndị na-amụ ihe ebe a na-egbochi na ebe a na-akọ akụkọ n'egwuregwu otu gị na-egwu, ma kpọọ aha okenye ị tụkwasịrị obi ha nwere ike ịgwa.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
