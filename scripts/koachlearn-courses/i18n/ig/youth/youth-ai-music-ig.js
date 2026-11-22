"use strict";

// Koach Learn course (Igbo translation of youth/youth-ai-music.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-music-ig",
  lang: "ig",
  translationOf: "youth-ai-music",
  category: "Youth",
  name: "Imepụta Egwu site n'Enyemaka AI",
  skills: "Ime beat n'ụlọ egwu n'ịntanetị n'efu, Iji AI chepụta okwu egwu, Ịhazi akụkụ egwu, Ịkwanyere ikike nwe egwu na olu ndị ọzọ ùgwù, Ibupụta na ikesa egwu n'enweghị nsogbu",
  outcome: "ime obere egwu nke gị (ihe dị ka sekọnd 60) n'ụlọ egwu n'ịntanetị n'efu, na-eji AI chepụta echiche na okwu egwu, nwere akụkụ egwu doro anya, n'eyighị egwu onye ọzọ ma ọ bụ olu e ṅomiri eṅomi, ma nwee ndetu na-ekwu otu i si jiri AI.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nọ n'afọ iri na ụma hụrụ egwu n'anya ma chọọ ime nke ha, ọbụlagodi ma ha amaghị ịkpọ ngwa egwu ọ bụla ugbu a. Ị nwere ike ime ya na ekwentị ma ọ bụ na kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ.",
    "Ị ga-eme beat na BandLab, ụlọ egwu n'ịntanetị n'efu, jiri ngwa enyemaka AI dị ka onye mmekọ na-enyere gị aka ichepụta echiche na okwu egwu, hazie akụkụ egwu, ma mụta iwu gbasara ikike nwe egwu (copyright) na iji olu ndị ọzọ. Ị ga-emechi site n'ibupụta obere egwu na ikesa ya n'enweghị nsogbu.",
    "Iwu BandLab kwuru na onye ọ bụla na-eji ya ga-adịrịrị opekata mpe afọ 13, na onye na-erubeghị afọ 18 chọrọ ikike nne na nna ma ọ bụ onye nlekọta. Lelee iwu afọ nke ngwa ọ bụla ị na-eji, lelee iwu ụlọ akwụkwọ gị gbasara AI, ma gwa nne na nna gị ma ọ bụ onye nlekọta mgbe ị na-edebanye aha. Nkuzi ọ bụla na-ejedebe n'ọrụ \"Nwalee ya ugbu a\", e nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee egwu nke gị dị ihe dị ka sekọnd 60 n'ụlọ egwu n'ịntanetị n'efu: beat, intro, verse na chorus. Jiri ngwa enyemaka AI chepụta isiokwu na opekata mpe ahịrị anọ nke okwu egwu, wee degharịa ha n'okwu nke gị. Ejila egwu e yiri eyi ma ọ bụ olu ezi mmadụ AI ṅomiri. Bupụta ya, ma dee obere ndetu na-ekwu ihe i mere na otu i si jiri AI.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nọ n'afọ iri na ụma hụrụ egwu n'anya ma chọọ ime nke ha, gụnyere ndị na-amaghị ịkpọ ngwa egwu ọ bụla ugbu a.",
    startingPoint: "Ha na-ege egwu kwa ụbọchị ma mara egwu ha hụrụ n'anya. Ọtụtụ emebeghị beat, hazibeghị egwu, ma ọ bụ mụta iwu gbasara copyright, sample na olu AI.",
    gap: "Ngwa egwu AI na-eme ka ọ dị mfe iyi egwu ma ọ bụ olu n'amaghị na ọ dị njọ, ma ide prompt naanị anaghị eme gị onye dere ya. Ndị nọ n'afọ iri na ụma kwesịrị ime egwu nke ha n'onwe ha, jiri AI naanị dị ka onye mmekọ na-enye echiche, ma kesaa ọrụ ha n'eziokwu na n'enweghị nsogbu.",
    constraints: [
      "Oke afọ: BandLab na ngwa ndị ọzọ nwere afọ kacha nta, ma chọọ ikike nne na nna ma ọ bụ onye nlekọta maka ndị na-erubeghị afọ 18",
      "Iwu ụlọ akwụkwọ gbasara AI na klas egwu",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ nwere web browser; naanị ngwa n'efu",
      "Copyright na ikike olu: enweghị egwu e yiri eyi, sample na-enweghị ikike, ma ọ bụ olu ezi mmadụ AI ṅomiri",
      "Nzuzo mgbe ị na-ekesa: enweghị aha gị zuru ezu, ụlọ akwụkwọ ma ọ bụ ebe ị bi n'ihe ị na-ebipụta n'ihu ọha"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-eche maka egwu ị na-anụ na nke ị na-eme", action: "ịkọwa otu e si eji AI n'egwu na iwu ndị ị ga-agbaso", standard: "na-akpọ aha ụzọ atọ e si eji ya na iwu gbasara iyi ihe, olu, oke afọ na eziokwu" },
    { id: "O2", condition: "Site n'iji ụlọ egwu n'ịntanetị n'efu dị ka BandLab, nwere nkwado nne na nna ma ọ bụ onye nlekọta", action: "ime beat nwere bar 4 nwere ịgba na otu ụda ọzọ, n'ọsọ (tempo) dabara n'ọnọdụ obi egwu ahụ", standard: "nke na-akpọ n'enweghị oghere" },
    { id: "O3", condition: "Mgbe e nyere gị isiokwu site na ndụ gị", action: "iji AI chepụta onyonyo na okwu na-ada ụda otu, wee dee ahịrị anọ nke okwu egwu n'okwu nke gị", standard: "nke mere na ahịrị ndị ahụ dabara na beat mgbe a gụpụtara ha n'olu dị elu" },
    { id: "O4", condition: "Mgbe e nyere gị beat gị na okwu egwu gị", action: "ịhazi egwu ahụ ka o nwee intro, verse na chorus", standard: "ihe dị ka sekọnd 60, akụkụ ọ bụla na-ada ntakịrị iche" },
    { id: "O5", condition: "Maka ụda na olu ọ bụla dị n'egwu gị", action: "ikpebi ma ụda ma ọ bụ olu ọ bụla dị mma iji, ma wepụ ihe ọ bụla ị na-enweghị ike igosi na e kwere ka i jiri ya", standard: "n'enweghị egwu e yiri eyi, sample na-enweghị ikike, ma ọ bụ olu ezi mmadụ AI ṅomiri" },
    { id: "O6", condition: "Mgbe egwu ahụ gwụchara", action: "ịhazi olu ụda (mix), ibupụta egwu ahụ ma dee ndetu eziokwu banyere onye mere ya", standard: "na-ekesa naanị ebe ezinụlọ gị kwenyere ma na-edebe ozi gbasara onwe gị na nzuzo" }
  ],
  chapters: [
    {
      name: "Isi 1: Iji AI eme egwu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Otu e si eji AI n'egwu, na iwu ndị ị ga-agbaso",
          minutes: 4,
          goal: "Kọwaa ụzọ atọ e si eji AI n'egwu na iwu ndị ị ga-agbaso.",
          text: [
            "E na-eji AI n'egwu n'ọtụtụ ụzọ: app ndị na-atụ aro chord ma ọ bụ ụdị ịgba, ngwa na-ehicha ihe e dekọrọ, ngwa enyemaka dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini na-enyere aka ichepụta okwu egwu, na ngwa na-emepụta egwu niile site na prompt e dere ede.",
            "N'ihe ọmụmụ a, AI bụ onye mmekọ gị na-enye echiche. Gị na-eme mkpebi ndị kacha mkpa. Nke a dị mkpa maka mmụta, ọ dịkwa mkpa n'iwu: U.S. Copyright Office (ọfịs copyright nke America) ekwuola na ide prompt naanị ezughị ime gị onye dere ihe AI mepụtara. Okwu gị, ụda gị na nhazi gị bụ ihe na-agụ.",
            "Iwu: eyila egwu ndị ọzọ, ejila olu ezi onye ọbụ abụ ma ọ bụ onye klas gị AI ṅomiri, lelee iwu afọ nke ngwa ọ bụla, gbasoo iwu ụlọ akwụkwọ gị gbasara AI na klas egwu, ma kwuo eziokwu banyere otu i si jiri AI."
          ],
          words: [["Ngwa na-emepụta egwu AI (AI music generator)", "ngwa na-emepụta egwu site n'ihe i dere ede iji kọwaa ya."], ["Onye dere ya (author)", "onye mepụtara ọrụ ma nwee ike inwe copyright ya."], ["Prompt", "ihe ị na-ede iji rịọ AI ihe."]],
          slides: [
            { title: "AI n'egwu", bullets: ["Ọ na-atụ aro chord na ụdị ịgba", "Ọ na-ehicha ihe e dekọrọ", "Ọ na-enye echiche maka okwu egwu", "Ọ na-emepụta egwu site na prompt"] },
            { title: "AI bụ onye mmekọ gị", bullets: ["Gị na-eme mkpebi ndị kacha mkpa", "Prompt naanị anaghị eme gị onye dere ya", "Okwu gị na ụda gị bụ ihe na-agụ"] },
            { title: "Iwu", bullets: ["Enweghị egwu e yiri eyi", "Enweghị olu ezi mmadụ AI ṅomiri", "Lelee iwu afọ na iwu ụlọ akwụkwọ", "Kwuo eziokwu banyere iji AI"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright and Artificial Intelligence, Part 2 (copyrightability)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "U.S. Copyright Office: Copyright and AI", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Dee aha otu egwu ị hụrụ n'anya na ihe atọ ị na-enwe mmasị na ya (beat, ọnọdụ obi ya, okwu ya). Ndị a bụ echiche ị nwere ike ịmụta ihe na ha n'eyighị egwu ahụ.",
          youCanNow: "ịkpọ aha ụzọ e si eji AI n'egwu na ịkọwa iwu maka iji ya n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O1", q: "Kedu otu ụzọ e si eji AI n'egwu?", options: ["Ngwa na-ehicha ihe e dekọrọ", "Iji aka hazie guitar", "Ibipụta tiketi egwu", "Ịrụ igwe okwu (speaker)"], answer: 0, why: "AI na-atụ aro chord, na-ehicha ihe e dekọrọ, na-enyere aka n'okwu egwu ma nwee ike imepụta egwu." },
            { objective: "O1", q: "Ngwa na-emepụta egwu mere egwu niile site n'otu ahịrị prompt gị. Ị nwere ike ịsị na ọ bụ ọrụ gị kpamkpam?", options: ["Ee, prompt na-eme m onye dere ya", "Ee, ọ bụrụ na m gbanwere aha ya", "Mba; prompt naanị ezughị, ya mere mee mkpebi ndị kacha mkpa n'onwe gị", "Naanị ma ọ bụrụ na ọ dịghị onye jụrụ"], answer: 2, why: "U.S. Copyright Office kwuru na ide prompt naanị ezughị ime gị onye dere ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime beat mbụ gị n'ụlọ egwu n'ịntanetị n'efu",
          minutes: 6,
          goal: "Meghee ụlọ egwu n'ịntanetị n'efu ma mee beat nwere bar 4 nwere ịgba na otu ụda ọzọ.",
          text: [
            "BandLab bụ app na weebụsaịtị egwu n'efu nwere ụlọ egwu n'ịntanetị maka ime egwu. Ị nwere ike iji ya na web browser na bandlab.com ma ọ bụ n'app ya site n'ezi ụlọ ahịa app. Ị chọrọ akaụntụ, ya mere gwa nne na nna gị ma ọ bụ onye nlekọta mgbe ị na-edebanye aha.",
            "A na-agụ egwu na beat na bar. Ọtụtụ egwu pop na hip-hop nwere beat 4 n'otu bar. Loop bụ obere akụkụ egwu na-emegharị onwe ya. Ọtụtụ beat na-amalite na loop ịgba, wee tinye bass, wee tinye otu ụda ọzọ dị ka keys ma ọ bụ guitar.",
            "Menu na-agbanwe ka oge na-aga, ya mere chọọ ihe ndị a: malite project ọhụrụ, tinye track, họrọ ngwa egwu ma ọ bụ chọgharịa loop, dọrọ loop tinye na track, ma pịa play. Gbanwee tempo (ọsọ) ka o dabara n'ọnọdụ obi: nwayọọ maka izu ike, ọsọ ọsọ maka obi ụtọ na ike."
          ],
          steps: ["Gị na nne na nna gị ma ọ bụ onye nlekọta, debanye aha na BandLab ma ọ bụ ụlọ egwu ọzọ n'ịntanetị n'efu.", "Malite project ọhụrụ.", "Tinye track ịgba, site n'iji loop ma ọ bụ ịpị ụdị ịgba dị mfe.", "Tinye track bass ma ọ bụ keys dabara n'ịgba ahụ.", "Tọọ tempo, mee ka ọ dị bar 4, ma pịa play."],
          words: [["Beat", "ụda kwụ chịm na-aga n'egwu; ọ pụtakwa obere egwu na-enweghị olu mmadụ."], ["Bar", "otu ìgwè beat, na-abụkarị 4."], ["Loop", "obere akụkụ egwu na-emegharị onwe ya."], ["Tempo", "otu egwu si agba ọsọ, a na-agụ ya na beat kwa nkeji (BPM)."]],
          slides: [
            { title: "Ụlọ egwu n'ịntanetị n'efu", bullets: ["BandLab: web browser ma ọ bụ ezi app", "Debanye aha gị na nne na nna ma ọ bụ onye nlekọta", "Iwu BandLab: ndị ọrụ ga-adịrịrị afọ 13 ma ọ bụ karịa"] },
            { title: "Beat, bar na loop", bullets: ["Ọtụtụ egwu: beat 4 n'otu bar", "Loop bụ obere akụkụ na-emegharị", "Malite n'ịgba, wee bass, wee otu ọzọ"] },
            { title: "Wuo beat gị", bullets: ["Project ọhụrụ, tinye track", "Họrọ loop ma ọ bụ ngwa egwu", "Tọọ tempo ma pịa play"] }
          ],
          sources: [{ name: "BandLab Terms of Use (age and parent permission)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Mee beat nwere bar 4 nwere ịgba na otu ụda ọzọ. Nwaa tempo abụọ dị iche iche ma debe nke dabara n'ọnọdụ obi ị chọrọ.",
          youCanNow: "imeghe ụlọ egwu n'ịntanetị n'efu ma wuo obere beat site na track na loop.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ bar n'egwu?", options: ["Ụda dị elu", "Ụdị ịgba", "App na-edekọ ụda", "Otu ìgwè beat, na-abụkarị 4 na pop na hip-hop"], answer: 3, why: "A na-agụ egwu na beat na bar, ọtụtụ egwu pop na hip-hop nwekwara beat 4 n'otu bar." },
            { objective: "O2", q: "Beat gị kwesịrị inwe obi ụtọ na ike, mana ọ dị ka ụra na-atụ ya. Gịnị ka ị ga-agbanwe?", options: ["Belata ụda ya", "Mee ka tempo gbaa ọsọ karị", "Hichapụ ịgba", "Tinyekwuo bar nke ịgbachi nkịtị"], answer: 1, why: "Tempo bụ ọsọ: ọsọ ọsọ maka ike, nwayọọ maka izu ike." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji AI chepụta okwu egwu",
          minutes: 5,
          goal: "Jiri AI chepụta isiokwu na okwu na-ada ụda otu, wee dee okwu egwu n'okwu nke gị.",
          text: [
            "Malite n'isiokwu site na ndụ gị: ụbọchị mbụ n'ụlọ akwụkwọ ọhụrụ, ọrụ oge okpomọkụ, enyi na-akwaga ebe ọzọ, ịbanye n'otu egwuregwu. Ezi mmetụta na-eme egwu ka mma karịa ihe n'ozuzu.",
            "Rịọ AI maka echiche, ọ bụghị egwu zuru ezu: \"Nye m onyonyo na okwu 10 gbasara ụbọchị ikpeazụ nke oge okpomọkụ tupu ụlọ akwụkwọ sekọndrị\" ma ọ bụ \"Nye m okwu na-ada ụda otu na 'late' na 'wait'.\" Wee họrọ ihe masịrị gị ma dee ahịrị ndị ahụ n'onwe gị.",
            "Gụọ mkpụrụ okwu (syllable) ka okwu dabara na beat. Gụpụta ahịrị gị n'olu dị elu n'elu beat ahụ. Ọ bụrụ na ahịrị jupụtara karịa, wepụ okwu ụfọdụ. Okwu egwu gị kwesịrị ịdị ka gị."
          ],
          steps: ["Họrọ isiokwu site na ndụ gị.", "Rịọ AI maka onyonyo, okwu ma ọ bụ okwu na-ada ụda otu, ọ bụghị egwu zuru ezu.", "Dee ahịrị anọ n'okwu nke gị.", "Gụpụta ha n'olu dị elu n'elu beat gị.", "Wepụ ma ọ bụ gbanwee okwu ruo mgbe ha dabara."],
          words: [["Okwu egwu (lyrics)", "okwu dị n'egwu."], ["Isiokwu (theme)", "ihe egwu na-ekwu maka ya."], ["Mkpụrụ okwu (syllable)", "otu ụda n'okwu; \"mu-sic\" nwere abụọ."]],
          slides: [
            { title: "Malite na ndụ gị", bullets: ["Ezi oge ma ọ bụ ezi mmetụta", "Ihe doro anya karịrị ihe n'ozuzu"] },
            { title: "Rịọ maka echiche, ọ bụghị egwu", bullets: ["\"Onyonyo 10 gbasara...\"", "\"Okwu na-ada ụda otu na 'late'\"", "Gị na-ahọrọ ma na-ede"] },
            { title: "Mee ka o dabara", bullets: ["Gụọ mkpụrụ okwu", "Gụọ ya n'elu beat", "Wepụ okwu n'ahịrị jupụtara"] }
          ],
          tryIt: "Họrọ isiokwu, rịọ ngwa enyemaka AI maka onyonyo ma ọ bụ okwu 10 gbasara ya, ma dee ahịrị anọ nke okwu egwu n'okwu nke gị dabara na beat gị.",
          youCanNow: "iji AI chepụta echiche ma dee okwu egwu nke gị dabara na beat.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ị kwesịrị ịrịọ AI mgbe ị na-ede okwu egwu?", options: ["Egwu zuru ezu ị ga-eyi", "Okwu egwu enyi gị", "Okwu egwu a ma ama", "Echiche dị ka onyonyo, okwu ma ọ bụ okwu na-ada ụda otu"], answer: 3, why: "AI na-enye echiche; gị na-ede ahịrị ndị ahụ ka ha dị ka gị." },
            { objective: "O3", q: "Otu ahịrị jupụtara karịa mgbe ị na-ekwu ya n'elu beat. Gịnị ka ị ga-eme?", options: ["Wepụ ma ọ bụ gbanwee okwu ruo mgbe o dabara", "Mee ka egwu niile gbaa ọsọ karị", "Tinyekwuo okwu", "Hapụ ya ma gụọ rap ọsọ ọsọ"], answer: 0, why: "Ịgụ mkpụrụ okwu na iwepụ okwu na-enyere ahịrị aka ịdaba na beat." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iji AI eme egwu",
        questions: [
          { objective: "O1", q: "Dị ka U.S. Copyright Office si kwuo, ide prompt naanị ọ zuru ime gị onye dere ihe AI mepụtara?", options: ["Ee, mgbe niile", "Mba, prompt naanị ezughị", "Naanị maka egwu", "Naanị ma ọ bụrụ na ị kwụrụ ụgwọ"], answer: 1, why: "Ọfịs ahụ kwuru na inye prompt naanị ezughị." },
          { objective: "O1", q: "Enyi gị chọrọ iji olu onye ọbụ abụ a ma ama AI ṅomiri n'egwu gị. Gịnị ka ị ga-eme?", options: ["Jiri ya", "Jiri ya ma zoo ya", "Sị mba, jiri olu gị ma ọ bụ olu onye kwenyere", "Yikwa egwu ahụ niile"], answer: 2, why: "Ejila olu ezi mmadụ n'enweghị ikike ya." },
          { objective: "O2", q: "Gịnị bụ loop?", options: ["Obere akụkụ egwu na-emegharị onwe ya", "Okwu egwu", "Bọtịnụ ụda", "Ụdị igwe okwu (microphone)"], answer: 0, why: "Loop na-emegharị onwe ya, ọ bụkwa ụzọ a na-ejikarị wuo beat." },
          { objective: "O2", q: "Gịnị ka tempo pụtara?", options: ["Otu egwu si dị elu", "Aha egwu ahụ", "Ọnụ ọgụgụ track ị nwere", "Otu egwu si agba ọsọ"], answer: 3, why: "Tempo bụ ọsọ, a na-agụ ya na beat kwa nkeji." },
          { objective: "O3", q: "Kedu arịrịọ AI kacha dabara n'ihe ọmụmụ a?", options: ["\"Dee egwu m niile\"", "\"Nye m onyonyo 10 gbasara ọrụ mbụ m n'oge okpomọkụ\"", "\"Yie egwu a ma ama\"", "\"Bụọ abụ n'olu onye nkuzi m\""], answer: 1, why: "Rịọ AI maka echiche, wee dee egwu ahụ n'onwe gị." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu, ichebe na ikesa egwu gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi akụkụ egwu",
          minutes: 5,
          goal: "Hazie egwu gị ka o nwee intro, verse na chorus.",
          text: [
            "E ji akụkụ dị iche iche wuo ọtụtụ egwu. Intro na-emeghe egwu. Verse na-akọ akụkọ, okwu ya na-agbanwe oge ọ bụla. Chorus bụ akụkụ na-atọ ụtọ na-emegharị onwe ya. Obere egwu nwere ike ịga otu a: intro, verse, chorus.",
            "Mee ka akụkụ ọ bụla dị ntakịrị iche. Dịka ọmụmaatụ, intro nwere naanị keys, verse na-atụkwasị ịgba, chorus na-atụkwasị bass na melody. Detuo ma tinye akụkụ n'ụlọ egwu ahụ iji wuo egwu ahụ n'ahịrị oge (timeline).",
            "Ị nwere ike ịjụ AI: \"Enwere m beat nwere bar 4 na 90 BPM. Kedu otu m ga-esi hazie egwu sekọnd 60 nwere intro, verse na chorus?\" Wee nwaa echiche ya ma tụkwasị ntị gị obi."
          ],
          steps: ["Hazie usoro ya: intro, verse, chorus.", "Detuo beat gị iji mee akụkụ ọ bụla.", "Wepụ ma ọ bụ tinye ụda ka akụkụ ọ bụla dị iche.", "Tinye okwu egwu gị na verse na chorus.", "Kpọọ ya niile ma dozie ya."],
          words: [["Intro", "mmalite egwu."], ["Verse", "akụkụ na-akọ akụkọ; okwu ya na-agbanwe oge ọ bụla."], ["Chorus", "akụkụ na-atọ ụtọ na-emegharị onwe ya."], ["Nhazi (arrangement)", "otu e si hazie ma tụkwasị akụkụ egwu n'usoro."]],
          slides: [
            { title: "Akụkụ egwu", bullets: ["Intro: na-emeghe egwu", "Verse: na-akọ akụkọ", "Chorus: akụkụ na-atọ ụtọ na-emegharị"] },
            { title: "Mee ka akụkụ ọ bụla dị iche", bullets: ["Intro: ụda ole na ole", "Verse: tinye ịgba", "Chorus: tinye bass na melody"] },
            { title: "Jụọ AI, tụkwasị ntị gị obi", bullets: ["Rịọ maka echiche nhazi", "Nwaa ha", "Debe ihe na-ada mma na ntị gị"] }
          ],
          tryIt: "Hazie beat gị ka o nwee intro, verse na chorus dị ihe dị ka sekọnd 60. Tinye ahịrị anọ nke okwu egwu gị dị ka ndetu ederede ma ọ bụ dekọọ ha ma ọ bụrụ na ị chọrọ.",
          youCanNow: "ịhazi egwu ka o nwee akụkụ doro anya, nke ọ bụla dị iche.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka intro egwu na-eme?", options: ["Na-emegharị akụkụ na-atọ ụtọ", "Na-emechi egwu", "Na-emeghe egwu", "Na-akọ akụkọ niile"], answer: 2, why: "Intro na-emeghe egwu tupu verse na chorus." },
            { objective: "O4", q: "Intro, verse na chorus gị niile na-ada otu. Gịnị ka ị ga-eme?", options: ["Wepụ ma ọ bụ tinye ụda ka akụkụ ọ bụla dị iche", "Mee ka akụkụ ọ bụla dị elu karị", "Hichapụ chorus", "Jiri egwu ọzọ"], answer: 0, why: "Ịgbanwe ụda ndị na-akpọ n'akụkụ ọ bụla na-eme ka nhazi ahụ doo anya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Copyright, sample na olu",
          minutes: 5,
          goal: "Kpebie ma ụda ma ọ bụ olu dị mma iji n'egwu gị.",
          text: [
            "Copyright na-echebe ọrụ mbụ dị ka egwu na ihe e dekọrọ. Dị ka U.S. Copyright Office si kwuo, a na-echebe ọrụ ozugbo e mepụtara ya ma debe ya n'ụdị ndị mmadụ nwere ike ịnụ ma ọ bụ ịhụ, ma idebanye aha ya bụkarị nhọrọ. Ya mere ọtụtụ egwu ị na-anụ nwere nchebe, egwu i mere bụkwa nke gị.",
            "Iji akụkụ ihe onye ọzọ dekọrọ ka a na-akpọ sampling. Ejila sample egwu ma ọ bụrụ na i nweghị ikike ma ọ bụ na ụda ahụ esighị n'ọba ụda kwuru na ị nwere ike iji ya, dị ka loop dị n'ụlọ egwu gị. Gụọ iwu ngwa ahụ.",
            "Olu bụ ihe onwe onye. Emela ma ọ bụ jiri olu ezi mmadụ AI ṅomiri, ma ọ bụ onye ama ama, onye nkuzi ma ọ bụ onye klas gị, n'enweghị ikike doro anya site n'aka ya. Ọ bụrụ na i jighị n'aka na ihe dị mma, hapụ ya ma ọ bụ jụọ onye nkuzi ma ọ bụ nne na nna gị."
          ],
          steps: ["Jụọ: ọ bụ m mere ụda a, ka ngwa ahụ kwuru na m nwere ike iji ya?", "Ọ bụrụ na o si n'egwu onye ọzọ, hapụ ya ma ọ bụrụ na i nweghị ikike.", "Ejila olu ezi mmadụ AI ṅomiri mgbe ọ bụla n'enweghị ikike.", "Mgbe obi abụọ dị, hapụ ya ma ọ bụ jụọ okenye ị tụkwasịrị obi."],
          words: [["Copyright", "ikike iwu nke onye mepụtara ihe nwere ịchịkwa mbipụta ọrụ ya."], ["Sample", "akụkụ ihe onye ọzọ dekọrọ e ji n'egwu ọhụrụ."], ["Olu e ṅomiri (voice clone)", "olu ezi mmadụ AI ṅomiri."]],
          slides: [
            { title: "Ihe ndabere copyright", bullets: ["Ọ na-echebe egwu na ihe e dekọrọ", "Ọ na-amalite mgbe e mepụtara ọrụ ma debe ya", "Idebanye aha bụkarị nhọrọ"] },
            { title: "Sample", bullets: ["Ejila sample egwu n'enweghị ikike", "Loop ụlọ egwu: lelee iwu ngwa ahụ"] },
            { title: "Olu", bullets: ["Enweghị olu ezi mmadụ AI ṅomiri n'enweghị ikike", "Gụnyere ndị ama ama, ndị nkuzi na ndị klas", "Obi abụọ? Hapụ ya ma ọ bụ jụọ"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "U.S. Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Depụta ụda ọ bụla dị n'egwu gị na ebe o si: gị mere ya, loop ụlọ egwu, ma ọ bụ ihe ọzọ. Wepụ ihe ọ bụla ị na-enweghị ike ịsị na ọ dị mma iji.",
          youCanNow: "ilele ụda na olu ọ bụla dị n'egwu gị ma debe naanị ihe e kwere ka i jiri.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ sampling?", options: ["Idekọ olu gị", "Iji akụkụ ihe onye ọzọ dekọrọ n'egwu ọhụrụ", "Ịgbanwe tempo", "Ibupụta egwu"], answer: 1, why: "Sampling pụtara iji akụkụ ihe onye ọzọ dekọrọ." },
            { objective: "O5", q: "Ị hụrụ ụda mara mma n'ịntanetị mana ị maghị onye mere ya ma ọ bụ ma ị nwere ike iji ya. Gịnị ka ị ga-eme?", options: ["Jiri ya; ọ dịghị onye ga-achọpụta", "Mee ka ọ gbaa ọsọ ka ọ da iche", "Kwuo na ọ bụ gị mere ya", "Hapụ ya ma ọ bụ jụọ okenye ị tụkwasịrị obi"], answer: 3, why: "Ọ bụrụ na ị nweghị ike ịsị na ụda dị mma iji, hapụ ya ma ọ bụ jụọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mix, ibupụta na ikesa n'enweghị nsogbu",
          minutes: 5,
          goal: "Hazie olu ụda egwu gị, bupụta ya, ma kesaa ya na ndetu eziokwu.",
          text: [
            "Mix pụtara ịtọ otu track ọ bụla ga-esi dị elu ka ọ ghara ikpuchi ndị ọzọ. Belata ihe ọ bụla dị elu karịa, ma gee ntị na headphone na n'igwe okwu ekwentị.",
            "Wee bupụta ma ọ bụ chekwaa egwu ahụ dị ka faịlụ ụda site na nhọrọ export ma ọ bụ download nke ụlọ egwu ahụ. Dee obere ndetu: aha gị ma ọ bụ aha onye egwu gị, aha egwu ahụ, na otu i si jiri AI, dịka ọmụmaatụ \"AI nyere aka chepụta echiche okwu egwu; m dere ma hazie egwu na okwu egwu niile.\"",
            "Kesaa n'enweghị nsogbu: bipụta naanị ebe ezinụlọ gị kwenyere, debe aha gị zuru ezu, ụlọ akwụkwọ na ebe ị bi na nzuzo ma ọ bụrụ na ị na-ebipụta n'ihu ọha, ma chee echiche tupu i gbanye nkọwa (comments). Ọ bụrụ na egwu gị bụ maka ụlọ akwụkwọ, gbasoo iwu onye nkuzi gị gbasara AI."
          ],
          steps: ["Hazie olu ụda nke track ọ bụla.", "Gee ntị na headphone na n'igwe okwu ekwentị.", "Bupụta ma ọ bụ chekwaa egwu ahụ dị ka faịlụ ụda.", "Dee ndetu na-ekwu otu i si jiri AI.", "Kesaa naanị ebe ezinụlọ gị kwenyere, na-edebe ozi gbasara onwe gị na nzuzo."],
          words: [["Mix", "ịhazi olu ụda nke track ọ bụla."], ["Export (ibupụta)", "ichekwa project gị dị ka faịlụ ndị ọzọ nwere ike ịkpọ."], ["Ndetu onye mere ya (credit note)", "obere ndetu na-ekwu onye mere ihe."]],
          slides: [
            { title: "Mee mix", bullets: ["Hazie olu ụda nke track ọ bụla", "Lelee na headphone na n'igwe okwu ekwentị"] },
            { title: "Bupụta ma dee ndetu", bullets: ["Chekwaa dị ka faịlụ ụda", "Aha egwu na aha onye egwu", "Kwuo otu i si jiri AI"] },
            { title: "Kesaa n'enweghị nsogbu", bullets: ["Ebe ezinụlọ gị kwenyere", "Debe aha, ụlọ akwụkwọ na ebe ị bi na nzuzo", "Gbasoo iwu AI nke ụlọ akwụkwọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa egwu nke gị dị sekọnd 60 nwere beat, intro, verse na chorus na okwu egwu nke gị. Lelee na ụda ọ bụla dị mma iji, bupụta ya, ma dee ndetu na-ekwu otu i si jiri AI.",
          youCanNow: "ime, mix, ibupụta na ikesa egwu nke gị n'ụzọ ziri ezi na n'enweghị nsogbu, na ndetu eziokwu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka mix pụtara?", options: ["Ịtọ otu track ọ bụla ga-esi dị elu ka ọ ghara ikpuchi ndị ọzọ", "Ịtinyekwu okwu egwu", "Ịhọrọ aha egwu", "Ibugo egwu n'ịntanetị"], answer: 0, why: "Mix na-ahazi olu ụda nke track ọ bụla." },
            { objective: "O6", q: "Ị chọrọ ibipụta egwu gị n'ihu ọha. Gịnị ka ị ga-edebe na nzuzo?", options: ["Aha egwu ahụ", "Aha onye egwu gị", "Aha gị zuru ezu, ụlọ akwụkwọ na ebe ị bi", "Otu i si jiri AI"], answer: 2, why: "Kesaa n'enweghị nsogbu site n'idebe ozi gbasara onwe gị na nzuzo na ibipụta naanị ebe ezinụlọ gị kwenyere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu, ichebe na ikesa egwu gị",
        questions: [
          { objective: "O4", q: "Kedu akụkụ egwu bụ akụkụ na-atọ ụtọ na-emegharị onwe ya?", options: ["Intro", "Verse", "Export", "Chorus"], answer: 3, why: "Chorus bụ akụkụ na-emegharị onwe ya." },
          { objective: "O5", q: "Mgbe ole ka nchebe copyright na-amalite, dị ka U.S. Copyright Office si kwuo?", options: ["Mgbe e mepụtara ọrụ ma debe ya n'ụdị ndị mmadụ nwere ike ịnụ ma ọ bụ ịhụ", "Naanị mgbe e debanyere aha ya", "Mgbe afọ 10 gachara", "Naanị maka ndị egwu a ma ama"], answer: 0, why: "Nchebe na-amalite mgbe e mepụtara ọrụ ma debe ya." },
          { objective: "O5", q: "Ị chọrọ iji sekọnd 5 nke egwu a ma ama na beat gị. Gịnị ka ị ga-eme?", options: ["Jiri ya; ọ dị mkpụmkpụ", "Hapụ ya ma ọ bụrụ na i nweghị ikike", "Gbanwee ọsọ ya ka ọ dịghị onye chọpụta", "Kpọọ aha onye ọbụ abụ ma jiri ya"], answer: 1, why: "Iji sample egwu nwere nchebe chọrọ ikike." },
          { objective: "O6", q: "Gịnị bụ mix?", options: ["Ide okwu egwu", "Idebanye aha n'app", "Ịhazi olu ụda nke track ọ bụla", "Ịhọrọ isiokwu"], answer: 2, why: "Mix na-ahazi otu akụkụ ọ bụla si dị elu." },
          { objective: "O6", q: "Kedu ndetu bụ eziokwu?", options: ["\"Ejighị AI\" mgbe e jiri ya", "\"AI nyere aka chepụta echiche okwu egwu; m mere egwu na okwu egwu\"", "Enweghị ndetu ọ bụla maka ọrụ ụlọ akwụkwọ", "\"Onye na-emepụta egwu a ma ama mere ya\""], answer: 1, why: "Ọ na-ekwu n'ụzọ doro anya otu e si jiri AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Imepụta Egwu site n'Enyemaka AI",
    questions: [
      { objective: "O1", q: "Kedu otu ụzọ e si eji AI n'egwu?", options: ["Ịtụ aro chord ma ọ bụ ụdị ịgba", "Ịnọchi ntị gị", "Ịbịanye aka n'nkwekọrịta egwu n'ọnọdụ gị", "Inwe egwu gị"], answer: 0, why: "Ngwa AI nwere ike ịtụ aro echiche egwu." },
      { objective: "O1", q: "N'ihe ọmụmụ a, ọrụ AI bụ ịbụ:", options: ["Onye na-edere gị na nzuzo", "Onye mmekọ na-enye echiche", "Onye isi gị", "Ọka iwu gị"], answer: 1, why: "Gị na-eme mkpebi ndị kacha mkpa." },
      { objective: "O1", q: "Gịnị ka U.S. Copyright Office kwuru banyere prompt naanị?", options: ["Ha na-eme gị onye dere ya", "Ha megidere iwu", "Ha ezughị ime gị onye dere ya", "Ha bụ naanị maka ndị okenye"], answer: 2, why: "Inye prompt naanị ezughị ime mmadụ onye dere ihe." },
      { objective: "O2", q: "Dị ka iwu BandLab si kwuo, ndị ọrụ ga-adịrịrị opekata mpe afọ:", options: ["8", "10", "21", "13, na ikike nne na nna ma ọ bụrụ na ị erubeghị 18"], answer: 3, why: "Iwu ahụ kwuru afọ 13 gaa n'ihu, na ikike nne na nna ma ọ bụ onye nlekọta maka ụmụaka." },
      { objective: "O2", q: "Ọtụtụ egwu pop na hip-hop nwere beat ole n'otu bar?", options: ["1", "4", "12", "100"], answer: 1, why: "Beat anọ n'otu bar bụ nke a na-ahụkarị." },
      { objective: "O2", q: "Usoro dị mma iji wuo beat bụ:", options: ["Naanị olu mmadụ", "Ịgba, wee bass, wee otu ụda ọzọ", "Bupụta ya na mbụ", "Ụda iri n'otu oge"], answer: 1, why: "Ịmalite n'ịgba na bass na-enye ntọala siri ike." },
      { objective: "O2", q: "Ị chọrọ ọnọdụ obi dị jụụ, nke izu ike. Ọ ka mma ka ị:", options: ["Mee ka tempo gbaa ọsọ nke ukwuu", "Tinye mkpu dị elu", "Jiri tempo na-aga nwayọọ", "Hichapụ ịgba"], answer: 2, why: "Tempo na-aga nwayọọ na-adịkarị jụụ." },
      { objective: "O3", q: "Kedu isiokwu nwere ike ime egwu siri ike karị?", options: ["\"Ihe\"", "\"Ndụ n'ozuzu\"", "\"Ihe na-eme\"", "\"Ịkwakọ ihe n'igbe m n'ụbọchị ikpeazụ nke klas 8\""], answer: 3, why: "Ezi oge doro anya na-eme okwu egwu siri ike." },
      { objective: "O3", q: "Ezigbo arịrịọ AI maka okwu egwu bụ:", options: ["\"Nye m okwu na-ada ụda otu na 'late'\"", "\"Dee egwu niile, m ga-abịanye aka na ya\"", "\"Yie okwu egwu a ma ama\"", "\"Jiri akwụkwọ ndetu nzuzo enyi m\""], answer: 0, why: "Ịrịọ maka echiche nkịtị na-eme ka ide ihe ahụ bụrụ nke gị." },
      { objective: "O3", q: "Otu ahịrị jupụtara karịa maka beat ahụ. Gịnị ka ị ga-eme?", options: ["Mee ka egwu niile gbaa ọsọ karị", "Wepụ okwu ruo mgbe o dabara", "Tinyekwuo okwu", "Hichapụ chorus"], answer: 1, why: "Iwepụ okwu na-enyere ahịrị aka ịdaba n'ụda egwu." },
      { objective: "O4", q: "Verse nke egwu:", options: ["Enweghị okwu mgbe ọ bụla", "Na-adị otu mgbe niile", "Na-akọ akụkọ, okwu ya na-agbanwe", "Bụ faịlụ export"], answer: 2, why: "Verse na-ebu akụkọ ma gbanwee okwu." },
      { objective: "O4", q: "Kedu otu ị ga-esi mee ka chorus pụta ìhè?", options: ["Mee ka ọ gbachi nkịtị", "Hichapụ beat", "Jiri otu ụda ahụ dị na intro", "Tinyekwuo ụda, dị ka bass na melody"], answer: 3, why: "Ịtụkwasị ụda na-eme ka chorus dị ka ọ ka ukwuu." },
      { objective: "O4", q: "AI nyere gị echiche nhazi. Wee ị:", options: ["Nwaa ha ma tụkwasị ntị gị obi", "Ga-eji ha niile", "Ga-eleghara ha niile anya", "Bipụta ha dị ka egwu gị"], answer: 0, why: "Gị bụ onye na-eme mkpebi okike." },
      { objective: "O5", q: "Ọ dị mkpa idebanye aha ka egwu gị nwee nchebe copyright?", options: ["Ee, mgbe niile", "Mba, idebanye aha bụkarị nhọrọ", "Naanị na ngwụcha izu", "Naanị maka egwu ụlọ akwụkwọ"], answer: 1, why: "Copyright Office kwuru na idebanye aha bụkarị nhọrọ." },
      { objective: "O5", q: "Sample bụ:", options: ["Nnwale n'efu", "Ụdị igwe okwu (microphone)", "Akụkụ ihe onye ọzọ dekọrọ e ji n'egwu ọhụrụ", "Echiche okwu egwu"], answer: 2, why: "Sampling na-eji akụkụ ihe e dekọworo." },
      { objective: "O5", q: "AI nwere ike ịṅomi olu onye klas gị maka chorus gị. Gịnị bụ iwu?", options: ["Mee ya dị ka ihe ịtụnanya", "Mee ya ma ọ bụrụ na ọ dị mma ịnụ", "Mee ya naanị na kọmputa ụlọ akwụkwọ", "Naanị na ikike doro anya site n'aka ha"], answer: 3, why: "Olu bụ ihe onwe onye; nweta ikike doro anya ma ọ bụ ejila ha." },
      { objective: "O5", q: "I jighị n'aka na ụda dị mma iji. Nhọrọ kacha enweghị nsogbu bụ:", options: ["Hapụ ya ma ọ bụ jụọ okenye ị tụkwasịrị obi", "Jiri ya ma nwee olileanya", "Zoo ya na mix", "Gbanwee aha faịlụ ahụ"], answer: 0, why: "Mgbe obi abụọ dị, hapụ ya ma ọ bụ jụọ." },
      { objective: "O6", q: "Gịnị mere ị ga-eji gee ntị na headphone na n'igwe okwu ekwentị?", options: ["Iwu chọrọ ya", "Ilele na mix ahụ dị mma na ngwaọrụ dị iche iche", "Ime ka ọ dị elu karị", "Ibupụta ya"], answer: 1, why: "Mix na-ada iche na ngwaọrụ dị iche iche." },
      { objective: "O6", q: "Mgbe ị na-ebipụta egwu gị n'ihu ọha, ị kwesịrị idebe na nzuzo:", options: ["Aha egwu ahụ", "Aha onye egwu gị", "Aha gị zuru ezu, ụlọ akwụkwọ na ebe ị bi", "Ụdị egwu ahụ"], answer: 2, why: "Ozi gbasara onwe gị na-anọ na nzuzo n'ịntanetị." },
      { objective: "O6", q: "Egwu gị bụ maka klas egwu. Banyere AI, ị kwesịrị:", options: ["Zoo na i jiri ya", "Rịọ AI ka o dee ndetu na-ekwu na ejighị AI", "Hapụ ndetu ahụ", "Gbasoo iwu onye nkuzi gị ma kwuo otu i si jiri ya"], answer: 3, why: "Ikwu eziokwu banyere iji AI so n'iwu ụlọ akwụkwọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 2, 4, 6, 8, 10, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Beat", objective: "O2", notYet: "Enweghị ịgba, ma ọ bụ naanị otu ụda.", meets: "Beat nwere ịgba na opekata mpe otu ụda ọzọ n'ọsọ dabara n'ọnọdụ obi.", exceeds: "Onye na-amụ ihe nwere ike ịkọwa ihe mere o ji họrọ tempo ahụ." },
      { name: "Akụkụ egwu", objective: "O4", notYet: "Enweghị intro, verse ma ọ bụ chorus doro anya.", meets: "Ihe dị ka sekọnd 60 nwere intro, verse na chorus na-ada ntakịrị iche.", exceeds: "Chorus pụtara ìhè nke ọma, dịka ọmụmaatụ site n'ịtụkwasị bass ma ọ bụ melody." },
      { name: "Okwu egwu nke gị", objective: "O3", notYet: "Okwu egwu adịghị ma ọ bụ e yiri ha n'aka AI.", meets: "Opekata mpe ahịrị anọ n'okwu onye na-amụ ihe n'onwe ya, dabara na beat.", exceeds: "Okwu egwu na-eji ezi isiokwu site na ndụ onye na-amụ ihe ma gosi echiche AI e gbanwere." },
      { name: "Nke mbụ na nke e kwere", objective: "O5", notYet: "O nwere egwu e yiri eyi, sample na-enweghị ikike ma ọ bụ olu ezi mmadụ AI ṅomiri.", meets: "Ụda ọ bụla bụ onye na-amụ ihe mere ya ma ọ bụ ụlọ egwu kwere ka e jiri ya, ọ dịghịkwa olu ezi mmadụ e ṅomiri.", exceeds: "O nwere ndepụta ụda ọ bụla na ebe o si." },
      { name: "Ibupụta na ndetu", objective: "O6", notYet: "E bupụtaghị ya, ma ọ bụ enweghị ndetu.", meets: "E bupụtara ya dị ka faịlụ ụda nwere ndetu na-ekwu otu e si jiri AI.", exceeds: "E lelere mix ahụ na headphone na n'igwe okwu ekwentị ma dozie ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere egwu nke abụọ nke ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kesara egwu n'enweghị nsogbu na ezinụlọ, klas ma ọ bụ ngosi mmemme ndị ntorobịa",
      "Ndị na-amụ ihe sonyere na klas egwu, otu egwu ma ọ bụ mmemme n'ime ụbọchị 90"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ nwere ịntanetị",
      "Headphone",
      "BandLab ma ọ bụ ụlọ egwu ọzọ n'ịntanetị n'efu, na ikike nne na nna ma ọ bụ onye nlekọta maka ndị na-erubeghị afọ 18",
      "Ngwa enyemaka AI n'efu e kwere ka onye na-amụ ihe jiri",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Lelee iwu afọ nke ngwa ọ bụla tupu klas, ma nakọta ikike nne na nna ma ọ bụ onye nlekọta maka idebanye aha; nwee akaụntụ ngosi dị njikere ma ọ dị mkpa.",
      "Nye headphone ka ndị na-amụ ihe nwee ike ịrụ ọrụ n'akụkụ ibe ha n'ụlọ kọmputa.",
      "Lelee ndepụta ụda onye ọ bụla na-amụ ihe tupu export iji chọpụta egwu e yiri eyi, sample na-enweghị ikike ma ọ bụ olu e ṅomiri.",
      "Mee mmemme ige egwu naanị n'ime otu ahụ, na nkwenye ezinụlọ tupu e bipụta ihe ọ bụla n'ihu ọha.",
      "Jiri rubric tụọ akara egwu ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
