"use strict";

// Koach Learn course (Swahili translation of shared/agile-project-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agile-project-management-sw",
  lang: "sw",
  translationOf: "agile-project-management",
  category: "Veterans (military)",
  name: "Usimamizi wa Miradi kwa Njia ya Agile",
  skills: "Kuandika user stories, Kujenga backlog, Kupanga sprint, Kuendesha ubao wa kazi, Kufanya mapitio na tathmini ya kazi (retrospective)",
  outcome: "kuendesha mradi mdogo kwa njia ya Agile: kugeuza kazi kuwa backlog ya user stories zilizopangwa kwa umuhimu, kupanga sprint ya wiki moja au mbili, kuifuatilia kwenye ubao wa kazi, na kuifunga kwa mapitio (review) na tathmini (retrospective).",
  about: [
    "Agile ni njia ya kuendesha miradi kwa awamu fupi za kazi, kukagua matokeo mara kwa mara na kubadilisha mwelekeo unapojifunza jambo jipya. Waajiri wengi katika teknolojia, serikali, afya na usafirishaji wanaitumia, na matangazo ya kazi mara nyingi yanaiomba.",
    "Kozi hii ni ya mtu yeyote anayeongoza au anayefanya kazi katika timu: wanajeshi wastaafu wanaohamia kazi za miradi za kiraia, wafanyakazi wanaolenga kazi ya mratibu au mchambuzi, na watu wanaoendesha mradi kazini, kanisani au katika jamii. Mazoea ya mipango ya kijeshi kama maelezo ya misheni (mission brief) na mapitio baada ya operesheni (after-action review) yanaendana vizuri na Agile.",
    "Utafanya mazoezi kwenye mradi mmoja halisi na mdogo wa kwako kuanzia somo la kwanza hadi la mwisho. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Chagua mradi halisi unaochukua wiki mbili hadi sita (kwa mfano juhudi ya kuandaa CV na kutafuta kazi, tukio la jamii au tovuti ndogo). Jenga backlog ya angalau user stories nane kwa mpangilio wa umuhimu, panga sprint ya wiki moja yenye lengo la sprint, iendeshe kwenye ubao wa kazi wa bure, na umalize kwa mapitio ya sprint yaliyoandikwa na retrospective inayoorodhesha jambo moja la kuendelea nalo, moja la kuacha na moja la kujaribu.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu na wanajeshi wanaoondoka jeshini wanaohamia kazi za kiraia kama mratibu wa miradi, uendeshaji, IT au usimamizi wa programu. Wengi waliongoza timu, waliendesha misheni na walifanya mapitio baada ya operesheni wakiwa jeshini.",
    startingPoint: "Wana uzoefu wa kupanga, kutoa maelezo, mnyororo wa uwajibikaji na mapitio baada ya operesheni. Wengi hawajatumia maneno ya Agile, user stories wala ubao wa kazi wa kidijitali.",
    gap: "Waajiri wengi wa kiraia wanaendesha miradi kwa njia ya Agile na wanaomba uzoefu wa Scrum au Kanban katika matangazo ya kazi. Wanafunzi wanahitaji kuonyesha kwamba wanaweza kuendesha mradi mdogo kwa sprints kwa kutumia maneno ya kiraia, na kuunganisha hilo na ujuzi wa uongozi walio nao tayari, ili washindane kwa kazi hizi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; maneno ya Agile yanaelezwa mara ya kwanza yanapotumika",
      "Vifaa: simu au kompyuta kwa zana ya ubao wa bure, au karatasi za kubandika (sticky notes) ukutani",
      "Muda: masomo ya dakika 5, pamoja na sprint ya wiki moja kwa kazi ya mwisho",
      "Ada na masharti ya vyeti hubadilika; wanafunzi wanakagua tovuti ya shirika linalotoa cheti",
      "Hakuna taarifa binafsi au za siri (classified) katika miradi ya mazoezi au prompts za AI"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya mradi", action: "kueleza jinsi Agile inavyoendesha kazi kwa awamu fupi na lini waterfall inafaa zaidi", standard: "kwa maneno yako mwenyewe, na mfano mmoja wa kila moja" },
    { id: "O2", condition: "Ukipewa timu ndogo ya Scrum", action: "kutaja majukumu matatu ya Scrum, matukio matano na vitu vitatu (artifacts)", standard: "ukipata angalau 9 kati ya 11 sahihi" },
    { id: "O3", condition: "Kwa mradi halisi wa wiki mbili hadi sita", action: "kuandika backlog ya angalau user stories nane zenye vigezo vya kukubalika, kwa mpangilio wa umuhimu", standard: "kila story ikiwa katika muundo wa \"Kama..., ninataka... ili...\"" },
    { id: "O4", condition: "Ukipewa backlog yako na saa ulizo nazo kweli", action: "kupanga sprint ya wiki moja yenye lengo la sprint la sentensi moja na kazi za siku moja au chini", standard: "ili kazi iliyopangwa itoshee muda ulio nao" },
    { id: "O5", condition: "Wakati wa sprint yako", action: "kufuatilia kazi kwenye ubao wa kazi wenye kikomo cha WIP na kikao cha kila siku cha dakika 15", standard: "ukisogeza kila kadi kazi inapoendelea" },
    { id: "O6", condition: "Mwishoni mwa sprint yako", action: "kufanya mapitio ya sprint na retrospective ya Endelea, Acha, Jaribu na kuongeza uboreshaji mmoja kwenye sprint inayofuata", standard: "maoni yakiwa yameandikwa kwenye backlog" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga kwa njia ya Agile",
      lessons: [
        {
          objectives: ["O1"],
          title: "Agile ni nini, na inatofautianaje na mpango mkubwa",
          minutes: 4,
          goal: "Eleza kwa maneno yako mwenyewe jinsi Agile inavyoendesha mradi kwa awamu fupi.",
          text: [
            "Katika mradi wa kawaida au wa \"waterfall\", unapanga kila kitu mwanzoni, kisha unajenga, kisha unapima, kisha unakabidhi mwishoni. Hii inafaa kazi inapojulikana vizuri, kama kumwaga msingi wa nyumba. Inashindwa mahitaji yanapobadilika katikati.",
            "Agile inakabidhi kazi kwa awamu fupi, mara nyingi wiki moja hadi nne. Kila awamu inatoa kitu kinachoweza kutumika, timu inakionyesha kwa watu kilichokusudiwa, na mpango unarekebishwa kulingana na wanachosema. Agile Manifesto (2001) inasema kwa urahisi: matokeo yanayofanya kazi na kukabiliana na mabadiliko ni muhimu zaidi kuliko kufuata mpango usiobadilika.",
            "Scrum na Kanban ni njia mbili zinazotumika zaidi za kufanya Agile. Scrum inatumia awamu za urefu uliowekwa zinazoitwa sprints. Kanban inatumia ubao na mtiririko wa kazi wa kudumu wenye kikomo cha kazi inayoendelea kwa wakati mmoja. Unaweza kutumia mawazo ya zote mbili."
          ],
          words: [["Agile", "njia ya kuendesha miradi kwa awamu fupi, kwa kukagua na kubadilisha mara kwa mara."], ["Waterfall", "njia ya kuendesha miradi ambapo kila hatua inamalizika kabla ya inayofuata kuanza."], ["Scrum", "mbinu ya Agile inayofanya kazi kwa awamu za urefu uliowekwa zinazoitwa sprints."], ["Kanban", "mbinu ya Agile inayotumia ubao na kuweka kikomo cha kazi inayoendelea."]],
          slides: [
            { title: "Waterfall dhidi ya Agile", bullets: ["Waterfall: panga yote, jenga yote, kabidhi mwishoni", "Agile: kabidhi kitu kinachotumika kila baada ya wiki chache", "Agile inarekebisha mpango unapojifunza"] },
            { title: "Kwa nini timu zinatumia Agile", bullets: ["Mahitaji yanabadilika katikati", "Matatizo yanaonekana mapema, si mwishoni", "Watu unaowahudumia wanaona maendeleo mara kwa mara"] },
            { title: "Mbinu mbili za kawaida", bullets: ["Scrum: sprints za urefu uliowekwa za mwezi mmoja au chini", "Kanban: ubao na kikomo cha kazi inayoendelea"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Chagua mradi mmoja halisi unaotaka kumaliza katika wiki mbili hadi sita zijazo. Andika sentensi moja inayoueleza na sentensi moja kuhusu ni wa nani.",
          youCanNow: "kueleza jinsi Agile inavyotofautiana na mpango mkubwa wa mwanzoni na kutaja Scrum na Kanban.",
          quickCheck: [
            { objective: "O1", q: "Kanban ni nini?", options: ["Mpango wa wiki nne usiobadilika", "Aina ya user story", "Mtihani wa cheti", "Njia ya kufanya Agile kwa ubao na kikomo cha kazi inayoendelea"], answer: 3, why: "Kanban inatumia ubao na mtiririko wa kazi wa kudumu wenye kikomo cha kazi inayoendelea." },
            { objective: "O1", q: "Kikundi chako cha wanajeshi wastaafu kinajenga tovuti mpya, na wanachama wanaendelea kubadilisha wanachotaka. Njia ipi inafaa?", options: ["Waterfall: panga yote mwanzoni na ukabidhi mwishoni", "Agile: kabidhi kwa awamu fupi na urekebishe baada ya kila moja", "Bila mpango kabisa", "Subiri hadi kila mtu akubali kila kitu"], answer: 1, why: "Agile inafaa kazi ambayo mahitaji yanabadilika, kwa sababu kila awamu inaonyeshwa na mpango unarekebishwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Majukumu, matukio na vitu (artifacts) vya Scrum",
          minutes: 5,
          goal: "Taja nani anafanya nini katika Scrum na matukio matano ambayo sprint inatumia.",
          text: [
            "The Scrum Guide (toleo la 2020) inataja majukumu matatu. Product Owner anaamua kipi ni muhimu zaidi na anaweka orodha ya kazi kwa mpangilio. Developers ni watu wanaofanya kazi, ya aina yoyote, si programu (software) tu. Scrum Master anaisaidia timu kufuata Scrum na anaondoa vizuizi.",
            "Kuna matukio matano. Sprint ndiyo chombo kinachobeba yote, mwezi mmoja au chini. Sprint Planning inaweka lengo la sprint na kuchagua kazi. Daily Scrum ni ukaguzi wa dakika 15 wa maendeleo kuelekea lengo. Sprint Review inaonyesha matokeo kwa watu kazi iliyokusudiwa. Sprint Retrospective inaangalia jinsi timu ilivyofanya kazi na kuchagua maboresho.",
            "Kuna vitu (artifacts) vitatu: Product Backlog (kazi yote, kwa mpangilio), Sprint Backlog (kazi iliyochaguliwa kwa sprint hii) na Increment (matokeo yanayoweza kutumika). Katika mradi mdogo, mtu mmoja anaweza kushika jukumu zaidi ya moja. Hiyo ni sawa ilimradi kila kazi inafanyika."
          ],
          words: [["Product Owner", "mtu anayeamua kazi ipi ni muhimu zaidi na kupanga backlog."], ["Scrum Master", "mtu anayeisaidia timu kutumia Scrum vizuri na kuondoa vizuizi."], ["Increment", "matokeo yanayoweza kutumika ambayo sprint inatoa."], ["Retrospective", "mkutano mwishoni mwa sprint kuhusu jinsi timu ilivyofanya kazi; unafanana na mapitio baada ya operesheni (after-action review)."]],
          slides: [
            { title: "Majukumu matatu", bullets: ["Product Owner: kipi ni muhimu zaidi", "Developers: wanafanya kazi", "Scrum Master: anaisaidia timu na kuondoa vizuizi"] },
            { title: "Matukio matano", bullets: ["Sprint: mwezi mmoja au chini", "Sprint Planning na Daily Scrum (dakika 15)", "Sprint Review na Sprint Retrospective"] },
            { title: "Vitu vitatu (artifacts)", bullets: ["Product Backlog: kazi yote, kwa mpangilio", "Sprint Backlog: kazi ya sprint hii", "Increment: matokeo yanayoweza kutumika"] }
          ],
          sources: [{ name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Kwa mradi wako, andika nani atakuwa Product Owner, Scrum Master na Developers. Kama ni wewe peke yako, andika kofia ipi utavaa katika kila tukio.",
          youCanNow: "kutaja majukumu matatu ya Scrum, matukio matano na vitu vitatu, na kuyagawa katika mradi wako.",
          quickCheck: [
            { objective: "O2", q: "Increment ni nini katika Scrum?", options: ["Matokeo yanayoweza kutumika yanayotolewa na sprint", "Orodha ya kazi yote", "Mkutano wa kila siku", "Ripoti ya Scrum Master"], answer: 0, why: "Increment ni matokeo yanayoweza kutumika; Product Backlog ni orodha ya kazi yote." },
            { objective: "O2", q: "Wewe ndiye mtu pekee katika mradi mdogo. Unafanya nini kuhusu majukumu ya Scrum?", options: ["Acha, kwa sababu Scrum inahitaji angalau watu watatu", "Ajiri Scrum Master kwanza", "Shika jukumu zaidi ya moja na uhakikishe kila kazi inafanyika", "Ruka kazi ya Product Owner"], answer: 2, why: "Katika mradi mdogo mtu mmoja anaweza kushika jukumu zaidi ya moja, ilimradi kila kazi inafanyika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika user stories na kujenga backlog",
          minutes: 6,
          goal: "Geuza mradi kuwa backlog ya user stories zilizopangwa kwa umuhimu na zenye mstari wa kumaliza ulio wazi.",
          text: [
            "User story inaeleza kipande cha kazi kwa mtazamo wa mtu inayemsaidia: \"Kama [aina ya mtu], ninataka [kitu] ili [sababu].\" Kwa mfano: \"Kama meneja wa kuajiri, ninataka CV ya ukurasa mmoja ili nione ujuzi wa mwombaji haraka.\"",
            "Kila story inahitaji vigezo vya kukubalika (acceptance criteria): ukaguzi miwili au mitatu unaosema lini imekamilika. Kwa story ya CV: inatosha ukurasa mmoja, inaorodhesha matokeo matatu yanayopimika, haina makosa ya tahajia. Mistari ya kumaliza iliyo wazi inazuia mabishano baadaye.",
            "Panga stories kwa mpangilio: yenye thamani zaidi na ya haraka zaidi juu. Msaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kukusaidia kuandika rasimu za stories kutokana na maelezo ya mradi, lakini wewe unaamua mpangilio na kukagua kwamba kila story ni kazi halisi."
          ],
          steps: ["Orodhesha kila kitu mradi unachohitaji, kitu kimoja kwa kila mstari.", "Andika upya kila kitu kama \"Kama..., ninataka... ili...\".", "Ongeza vigezo viwili au vitatu vya kukubalika kwa kila kimoja.", "Gawanya story yoyote iliyo kubwa mno kumalizika katika sprint moja.", "Panga stories kwa mpangilio wa umuhimu, kutoka juu hadi chini."],
          words: [["User story", "maelezo mafupi ya kazi kwa mtazamo wa mtu inayemsaidia."], ["Vigezo vya kukubalika (acceptance criteria)", "ukaguzi unaosema story imekamilika."], ["Backlog", "orodha iliyopangwa ya kazi yote ya mradi."]],
          slides: [
            { title: "Muundo wa user story", bullets: ["Kama [aina ya mtu]", "ninataka [kitu]", "ili [sababu]"] },
            { title: "Vigezo vya kukubalika", bullets: ["Ukaguzi miwili au mitatu inayomaanisha \"imekamilika\"", "Mfano: ukurasa mmoja, matokeo matatu, hakuna makosa ya tahajia"] },
            { title: "Kupanga backlog", bullets: ["Yenye thamani na ya haraka juu", "Gawanya stories zilizo kubwa mno kwa sprint moja", "AI inaweza kuandika rasimu; wewe unaamua mpangilio"] }
          ],
          tryIt: "Andika angalau user stories nane kwa mradi wako, kila moja na vigezo vya kukubalika, na uzipange kwa umuhimu. Unaweza kumwomba msaidizi wa AI: \"Geuza mradi huu kuwa user stories zenye vigezo vya kukubalika\" kisha urekebishe matokeo.",
          youCanNow: "kuandika user stories zenye vigezo vya kukubalika na kuzipanga kuwa backlog.",
          quickCheck: [
            { objective: "O3", q: "Sehemu ya \"ili\" katika user story inatoa nini?", options: ["Tarehe ya mwisho", "Mtu anayefanya kazi", "Sababu kazi ni muhimu", "Gharama"], answer: 2, why: "\"Ili\" inasema sababu au faida kwa mtu ambaye story inamsaidia." },
            { objective: "O3", q: "Msaidizi wa AI anaandika rasimu za stories kwa tukio lako la jamii. Moja ni \"Panga tukio zima\". Unafanya nini?", options: ["Igawanye kuwa stories ndogo zinazotosha katika sprint moja", "Iache kama story ya juu", "Futa stories zote za AI", "Iongeze katika kila sprint"], answer: 0, why: "Story iliyo kubwa mno kwa sprint moja inapaswa kugawanywa vipande vidogo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga kwa njia ya Agile",
        questions: [
          { objective: "O1", q: "Tofauti kuu kati ya Agile na waterfall ni ipi?", options: ["Agile haina mpango kabisa", "Agile inakabidhi kwa awamu fupi na kurekebisha inapojifunza", "Waterfall inatumia sprints", "Agile inafaa kwa programu (software) tu"], answer: 1, why: "Agile inafanya kazi kwa awamu fupi ambazo kila moja inakabidhi kitu, kisha inarekebisha mpango." },
          { objective: "O2", q: "Kwa mujibu wa Scrum Guide, sprint inaweza kuwa ndefu kiasi gani?", options: ["Mwezi mmoja au chini", "Urefu wowote bosi anaopenda", "Mwaka mmoja", "Miezi sita kamili"], answer: 0, why: "Scrum Guide inasema sprints ni mwezi mmoja au chini." },
          { objective: "O2", q: "Nani anaamua kazi ipi ni muhimu zaidi na kuweka backlog kwa mpangilio?", options: ["Yeyote anayemaliza kwanza", "Scrum Master", "Wakili wa mteja", "Product Owner"], answer: 3, why: "Product Owner anapanga Product Backlog." },
          { objective: "O3", q: "User story ipi imeandikwa vizuri?", options: ["\"CV\"", "\"Rekebisha vitu\"", "\"Kama meneja wa kuajiri, ninataka CV ya ukurasa mmoja ili nione ujuzi haraka\"", "\"Fanya kila kitu kufikia Ijumaa\""], answer: 2, why: "Inataja mtu, anachotaka na kwa nini." },
          { objective: "O3", q: "Story ni kubwa mno kumalizika katika sprint moja. Unafanya nini?", options: ["Fanya sprint iwe ya mwaka mzima", "Ifute", "Igawanye kuwa stories ndogo", "Ruka vigezo vya kukubalika"], answer: 2, why: "Stories kubwa zinagawanywa ili kila kipande kimalizike katika sprint." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha sprint",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga sprint yenye lengo lililo wazi",
          minutes: 5,
          goal: "Panga sprint ya wiki moja au mbili yenye lengo la sprint na kiasi sahihi cha kazi.",
          text: [
            "Sprint Planning inajibu maswali matatu: kwa nini sprint hii ina thamani (lengo la sprint), nini kinaweza kufanyika (stories zipi), na kitafanyikaje (kazi ndogo).",
            "Lengo la sprint ni sentensi moja, kama nia ya kamanda (commander's intent): \"Kufikia Ijumaa, nina CV iliyokamilika na maombi matano ya kazi yaliyorekebishwa yametumwa.\" Mipango ikibadilika katikati, lengo linamwambia kila mtu kipi bado ni muhimu.",
            "Chukua stories kutoka juu ya backlog hadi muda wa timu ujae, na uache nafasi kidogo. Timu mpya karibu kila mara zinapanga kazi nyingi mno. Gawanya kila story kuwa kazi za siku moja au chini."
          ],
          steps: ["Amua urefu wa sprint (wiki moja au mbili ni nzuri kwa wanaoanza).", "Andika lengo la sprint la sentensi moja.", "Chukua stories kutoka juu ya backlog zinazohudumia lengo.", "Gawanya kila story kuwa kazi za siku moja au chini.", "Linganisha jumla na saa ulizo nazo kweli, na upunguze ikihitajika."],
          words: [["Lengo la sprint", "sentensi moja inayosema sprint inakusudia kufikia nini."], ["Uwezo (capacity)", "muda ambao timu inao kweli wakati wa sprint."]],
          slides: [
            { title: "Sprint Planning inajibu", bullets: ["Kwa nini: lengo la sprint", "Nini: stories zipi", "Vipi: kazi ndogo"] },
            { title: "Lengo zuri la sprint", bullets: ["Sentensi moja, kama nia ya kamanda", "Linasema kipi bado ni muhimu mipango ikibadilika"] },
            { title: "Usijaze kupita kiasi", bullets: ["Chukua kutoka juu ya backlog", "Kazi za siku moja au chini", "Acha nafasi: timu mpya zinapanga kazi nyingi mno"] }
          ],
          tryIt: "Panga sprint ya wiki moja kwa mradi wako: andika lengo la sprint, chagua stories, zigawanye kuwa kazi ndogo, na uzilinganishe na saa ulizo nazo kweli wiki hii.",
          youCanNow: "kupanga sprint yenye lengo, stories zilizochaguliwa na kazi zinazotosha muda wako halisi.",
          quickCheck: [
            { objective: "O4", q: "Kwa kawaida kazi moja katika mpango wa sprint inapaswa kuchukua muda gani?", options: ["Sprint nzima", "Siku moja au chini", "Angalau wiki moja", "Mwezi mmoja"], answer: 1, why: "Kugawanya stories kuwa kazi za siku moja au chini kunarahisisha kufuatilia maendeleo." },
            { objective: "O4", q: "Katikati ya sprint, mipango inabadilika. Kipi kinaiambia timu kipi bado ni muhimu?", options: ["Kadi ya zamani zaidi ubaoni", "Yeyote anayeongea kwa sauti zaidi", "Retrospective ya mwaka jana", "Lengo la sprint"], answer: 3, why: "Kama nia ya kamanda, lengo la sprint linasema kipi bado ni muhimu mipango inapobadilika." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuendesha kazi kwenye ubao wa kazi",
          minutes: 5,
          goal: "Andaa ubao wa kazi na utumie kikao cha kila siku ili kazi iendelee kusonga.",
          text: [
            "Ubao wa kazi unaonyesha kazi katika safu: To Do (ya kufanya), In Progress (inaendelea) na Done (imekamilika). Kila kazi ni kadi inayosogea kulia kazi inapoendelea. Unaweza kutumia karatasi za kubandika ukutani, spreadsheet, au zana ya ubao ya bure kama Trello, Microsoft Planner au GitHub Projects.",
            "Kanban inaongeza kikomo cha kazi inayoendelea (WIP limit): kwa mfano, si zaidi ya kadi mbili In Progress kwa kila mtu. Kumaliza kazi ni bora kuliko kuanza kazi mpya.",
            "Daily Scrum ni dakika 15. Kila mtu anaeleza maendeleo kuelekea lengo la sprint, kinachofuata, na chochote kinachomzuia. Vizuizi vinatatuliwa baada ya mkutano, si wakati wa mkutano."
          ],
          steps: ["Tengeneza safu tatu: To Do, In Progress, Done.", "Ongeza kadi moja kwa kila kazi kutoka mpango wako wa sprint.", "Weka kikomo cha WIP, kama kadi mbili In Progress.", "Kila siku, sogeza kadi na ufanye kikao cha dakika 15.", "Andika vizuizi na nani atakayeviondoa."],
          words: [["Ubao wa kazi (task board)", "ubao wenye safu zinazoonyesha kila kazi ilipofikia."], ["Kikomo cha WIP", "idadi ya juu ya kazi zinazoweza kuendelea kwa wakati mmoja (WIP ni work in progress)."], ["Kizuizi (blocker)", "chochote kinachozuia kazi kusonga mbele."]],
          slides: [
            { title: "Ubao rahisi wa kazi", bullets: ["To Do, In Progress, Done", "Kadi moja kwa kila kazi", "Karatasi za kubandika, spreadsheet au zana ya ubao ya bure"] },
            { title: "Weka kikomo cha kazi inayoendelea", bullets: ["Kwa mfano: kadi mbili kwa kila mtu", "Maliza kazi kabla ya kuanza kazi mpya"] },
            { title: "Daily Scrum ya dakika 15", bullets: ["Maendeleo kuelekea lengo la sprint", "Kinachofuata", "Vizuizi: vitatue baada ya mkutano"] }
          ],
          tryIt: "Jenga ubao wa kazi kwa sprint yako wenye safu tatu na kadi moja kwa kila kazi. Weka kikomo cha WIP. Kwa siku tatu zijazo, sogeza kadi na uandike ripoti ya kila siku ya mistari miwili.",
          youCanNow: "kuendesha sprint kwenye ubao wa kazi wenye kikomo cha WIP na kikao kifupi cha kila siku.",
          quickCheck: [
            { objective: "O5", q: "Kila mtu anaeleza mambo gani matatu katika Daily Scrum?", options: ["Mshahara, cheo na saa zake", "Kila undani wa kila kazi", "Maoni yake kuhusu Product Owner", "Maendeleo kuelekea lengo, kinachofuata na vizuizi vyovyote"], answer: 3, why: "Daily Scrum ni ukaguzi mfupi wa maendeleo kuelekea lengo la sprint, hatua zinazofuata na vizuizi." },
            { objective: "O5", q: "Umemaliza kazi. Unafanya nini na kadi yake?", options: ["Iache In Progress", "Isogeze kwenda Done", "Itupe kabla mtu yeyote hajaiona", "Irudishe To Do"], answer: 1, why: "Kadi zinasogea kulia kazi inapoendelea, kwa hiyo kazi iliyokamilika inaenda Done." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufunga sprint: mapitio na retrospective",
          minutes: 5,
          goal: "Fanya mapitio ya sprint na retrospective na uyageuze kuwa badiliko moja kwa sprint inayofuata.",
          text: [
            "Sprint Review inaonyesha kazi iliyokamilika kwa watu iliyokusudiwa na kuwauliza wanafikiri nini. Onyesha tu kazi inayotimiza vigezo vyake vya kukubalika. Maoni yao yanarudi kwenye backlog.",
            "Sprint Retrospective inahusu jinsi mlivyofanya kazi, si mlichojenga. Inafanya kazi kama mapitio baada ya operesheni: kilichotakiwa kutokea, kilichotokea, kwa nini, na nini cha kufanya tofauti. Muundo rahisi ni Endelea, Acha, Jaribu (Keep, Stop, Try).",
            "Chagua uboreshaji mmoja na uuweke katika sprint inayofuata kama kazi halisi. Retrospective isiyobadilisha chochote ni mkutano tu. Vyeti vya Agile, kama Certified ScrumMaster kutoka Scrum Alliance au Professional Scrum Master kutoka Scrum.org, vinaweza kuja baadaye; kagua tovuti zao kwa masharti na ada za sasa."
          ],
          steps: ["Orodhesha kilichokamilika na kinachotimiza vigezo vyake vya kukubalika.", "Kionyeshe kwa watu kilichokusudiwa na uandike maoni yao.", "Ongeza maoni kwenye backlog.", "Fanya retrospective ya Endelea / Acha / Jaribu.", "Weka uboreshaji mmoja katika sprint inayofuata."],
          words: [["Sprint Review", "mkutano wa kuonyesha kazi iliyokamilika na kupata maoni."], ["Mapitio baada ya operesheni (after-action review)", "kikao cha kijeshi kuhusu kilichopangwa, kilichotokea na cha kubadilisha."], ["Endelea / Acha / Jaribu (Keep / Stop / Try)", "muundo rahisi wa retrospective."]],
          slides: [
            { title: "Sprint Review", bullets: ["Onyesha kazi iliyokamilika tu", "Waulize watu iliyokusudiwa", "Maoni yanaingia kwenye backlog"] },
            { title: "Retrospective = mapitio baada ya operesheni", bullets: ["Kuhusu jinsi mlivyofanya kazi", "Endelea, Acha, Jaribu"] },
            { title: "Ifanye ilete matokeo", bullets: ["Chagua uboreshaji mmoja", "Uweke katika sprint inayofuata kama kazi"] }
          ],
          sources: [{ name: "Scrum Alliance: Certified ScrumMaster", url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" }, { name: "Scrum.org assessments", url: "https://www.scrum.org/assessments" }],
          tryIt: "Kazi ya mwisho: maliza sprint yako ya wiki moja. Andika mapitio mafupi ya sprint (kilichokamilika, nani alikiona, walisema nini) na retrospective ya Endelea / Acha / Jaribu, kisha uongeze uboreshaji mmoja kwenye sprint inayofuata.",
          youCanNow: "kufunga sprint kwa mapitio na retrospective na kubeba uboreshaji mmoja kwenda sprint inayofuata.",
          quickCheck: [
            { objective: "O6", q: "Retrospective inafanana zaidi na mazoea gani ya kijeshi?", options: ["Mapitio baada ya operesheni (after-action review)", "Sherehe ya kubadilisha kamanda", "Ombi la vifaa", "Ukaguzi wa sare"], answer: 0, why: "Kama mapitio baada ya operesheni, inauliza kilichopangwa, kilichotokea, kwa nini, na nini cha kubadilisha." },
            { objective: "O6", q: "Timu yako iliorodhesha mambo matano ya kujaribu sprint ijayo. Kipi kinaifanya retrospective ilete matokeo?", options: ["Jaribu yote matano kwa wakati mmoja", "Yaandike kisha uyasahau", "Chagua moja na uliongeze katika sprint inayofuata kama kazi halisi", "Fanya mkutano mwingine kuyajadili"], answer: 2, why: "Uboreshaji mmoja uliogeuzwa kuwa kazi halisi ndio unaobadilisha jinsi timu inavyofanya kazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha sprint",
        questions: [
          { objective: "O4", q: "Lengo la sprint ni nini?", options: ["Orodha ya kila kazi", "Mshahara wa timu", "Sentensi moja inayosema sprint inapaswa kufikia nini", "Tarehe ya mwisho ya mradi mzima"], answer: 2, why: "Lengo la sprint ni nia ya sentensi moja inayoongoza maamuzi wakati wa sprint." },
          { objective: "O4", q: "Timu yako ilipanga saa 60 za kazi lakini ina saa 40 tu. Mnapaswa kufanya nini?", options: ["Bakizeni saa zote 60 na mfanye kazi wikendi", "Punguzeni stories hadi mpango utoshee muda halisi", "Rukeni Daily Scrum", "Ongezeni urefu wa sprint bila kumwambia mtu"], answer: 1, why: "Pangeni kulingana na uwezo halisi; sprints zilizojazwa kupita kiasi hushindwa." },
          { objective: "O5", q: "Kikomo cha WIP kinafanya nini?", options: ["Kinaweka idadi ya juu ya kazi zinazoweza kuendelea kwa wakati mmoja", "Kinaweka kikomo cha watu wanaoweza kujiunga", "Kinaweka bajeti ya mradi", "Kinaondoa safu ya Done"], answer: 0, why: "Kikomo cha WIP kinaisukuma timu kumaliza kazi kabla ya kuanza nyingine." },
          { objective: "O5", q: "Mwenzako anataja kizuizi katika Daily Scrum. Kinapaswa kutatuliwa lini?", options: ["Wakati wa mkutano, kwa saa moja", "Kamwe", "Mwishoni mwa mradi", "Baada ya mkutano, na watu wanaoweza kusaidia"], answer: 3, why: "Daily Scrum inabaki dakika 15; vizuizi vinashughulikiwa mara baada yake." },
          { objective: "O6", q: "Retrospective inahusu nini?", options: ["Kuuza bidhaa", "Kuchagua Product Owner mpya", "Kuandika bajeti", "Jinsi timu ilivyofanya kazi na nini cha kubadilisha"], answer: 3, why: "Retrospective inapitia jinsi timu ilivyofanya kazi, kama mapitio baada ya operesheni." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Usimamizi wa Miradi kwa Njia ya Agile",
    questions: [
      { objective: "O1", q: "Miradi ya Agile inakabidhi:", options: ["Kila kitu mwishoni kabisa", "Makaratasi tu", "Kitu kinachoweza kutumika kwa awamu fupi", "Hakuna kitu hadi bajeti iishe"], answer: 2, why: "Agile inakabidhi kazi inayoweza kutumika kila baada ya wiki chache." },
      { objective: "O1", q: "Hali ipi inafaa waterfall kuliko Agile?", options: ["App mpya ambayo mahitaji ya watumiaji hayako wazi", "Kazi inayojulikana vizuri isiyobadilika, kama kumwaga msingi wa nyumba", "Jaribio la masoko lenye matokeo yasiyojulikana", "Mradi ambao maoni yanabadilisha mpango kila wiki"], answer: 1, why: "Waterfall inafaa kazi inapojulikana vizuri na haibadiliki." },
      { objective: "O1", q: "Scrum na Kanban ni:", options: ["Njia mbili za kawaida za kufanya Agile", "Lugha mbili za programu", "Mitihani miwili ya vyeti", "Aina mbili za bajeti"], answer: 0, why: "Zote mbili ni mbinu maarufu za Agile." },
      { objective: "O2", q: "Nani anaisaidia timu kutumia Scrum vizuri na kuondoa vizuizi?", options: ["Product Owner", "Mhasibu", "Mteja", "Scrum Master"], answer: 3, why: "Hiyo ni kazi ya Scrum Master." },
      { objective: "O2", q: "Katika Scrum, \"Developers\" inamaanisha:", options: ["Waandishi wa programu za kompyuta tu", "Mameneja", "Wajenzi wa majengo", "Watu wanaofanya kazi, ya aina yoyote"], answer: 3, why: "Developers ni yeyote anayefanya kazi ya sprint." },
      { objective: "O2", q: "Daily Scrum inachukua muda gani?", options: ["Siku nzima", "Saa mbili", "Dakika 15", "Hakuna kikomo"], answer: 2, why: "Scrum Guide inaweka Daily Scrum kuwa dakika 15." },
      { objective: "O2", q: "Kipi SI mojawapo ya vitu vitatu (artifacts) vya Scrum?", options: ["Product Backlog", "Ripoti ya Mwaka", "Increment", "Sprint Backlog"], answer: 1, why: "Vitu hivyo ni Product Backlog, Sprint Backlog na Increment." },
      { objective: "O3", q: "Kamilisha muundo wa user story: \"Kama ___, ninataka ___ ...\"", options: ["\"...ili [sababu]\"", "\"...kufikia Ijumaa\"", "\"...bure\"", "\"...la sivyo\""], answer: 0, why: "Muundo unaishia na sababu: ili..." },
      { objective: "O3", q: "Vigezo vya kukubalika ni:", options: ["Ukaguzi unaosema story imekamilika", "Maombi ya kazi ya timu", "Bei ya mradi", "Orodha ya wanatimu"], answer: 0, why: "Vinaeleza lini story inahesabiwa kuwa imekamilika." },
      { objective: "O3", q: "Msaidizi wa AI anakuandikia rasimu ya user stories kumi. Kazi yako ni ipi?", options: ["Zitumie bila kuzisoma", "Mwombe AI aendeshe sprint", "Futa backlog", "Zikague, zirekebishe na uamue mpangilio"], answer: 3, why: "AI inaweza kuandika rasimu; wewe unakagua kazi na kuweka vipaumbele." },
      { objective: "O3", q: "Vitu vya juu vya backlog vinapaswa kuwa:", options: ["Vilivyo rahisi zaidi", "Vilivyochaguliwa ovyo", "Vyenye thamani zaidi na vya haraka zaidi", "Vya zamani zaidi"], answer: 2, why: "Backlog inapangwa kwa thamani na uharaka." },
      { objective: "O4", q: "Sprint Planning inajibu maswali gani matatu?", options: ["Nani, wapi, lini", "Kwa nini, nini na vipi", "Gharama, bei, faida", "Anza, acha, simamisha"], answer: 1, why: "Kwa nini (lengo), nini (stories), vipi (kazi ndogo)." },
      { objective: "O4", q: "Lengo la sprint linafanana zaidi na wazo gani la kijeshi?", options: ["Ukaguzi wa sare", "Nia ya kamanda (commander's intent)", "Daraja la mshahara", "Ombi la likizo"], answer: 1, why: "Yote mawili yanasema kipi ni muhimu mipango ikibadilika." },
      { objective: "O4", q: "Kwa kawaida kazi katika sprint zinapaswa kuchukua:", options: ["Siku moja au chini", "Mwezi mmoja kila moja", "Mwaka mmoja", "Hakuna muda"], answer: 0, why: "Kazi ndogo zinaonyesha maendeleo na kufichua matatizo mapema." },
      { objective: "O5", q: "Ubao wa kazi wa msingi una safu zipi?", options: ["Nyekundu, nyeupe, buluu", "Ndiyo na Hapana", "Jumatatu hadi Ijumaa", "To Do, In Progress, Done"], answer: 3, why: "Safu hizo tatu zinaonyesha kila kazi ilipofikia." },
      { objective: "O5", q: "Una kadi tano In Progress na kikomo cha WIP cha mbili. Unapaswa kufanya nini?", options: ["Anza kazi ya sita", "Ondoa kikomo", "Maliza kazi kabla ya kuanza kitu kipya", "Zisogeze zote kwenda Done"], answer: 2, why: "Kikomo cha WIP kinamaanisha kumaliza ni bora kuliko kuanza." },
      { objective: "O6", q: "Katika Sprint Review unapaswa kuonyesha:", options: ["Hakuna kitu; ni mkutano wa kupanga", "Kazi iliyokamilika nusu kana kwamba imekamilika", "Kazi inayotimiza vigezo vyake vya kukubalika tu", "Ratiba binafsi za wanatimu"], answer: 2, why: "Kazi iliyokamilika tu ndiyo inaonyeshwa, ili maoni yawe ya kweli." },
      { objective: "O6", q: "Maoni kutoka Sprint Review yanaenda:", options: ["Kwenye takataka", "Kwenye backlog", "Kwenye retrospective tu", "Kwa wakili"], answer: 1, why: "Maoni mapya yanakuwa vitu vya backlog." },
      { objective: "O6", q: "Endelea / Acha / Jaribu ni muundo wa:", options: ["Retrospective", "Bajeti", "Kuajiri", "User stories"], answer: 0, why: "Ni njia rahisi ya kuendesha retrospective." },
      { objective: "O6", q: "Unapaswa kuthibitisha wapi masharti na ada za sasa za cheti cha Agile?", options: ["Ujumbe wowote kwenye jukwaa la mtandaoni", "Tangazo la mitandao ya kijamii", "Jibu la mazungumzo ya AI peke yake", "Tovuti rasmi ya shirika linalotoa cheti, kama Scrum Alliance au Scrum.org"], answer: 3, why: "Masharti na ada hubadilika; tovuti rasmi ndiyo chanzo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 3, 6, 7, 11, 12, 14, 15, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Backlog ya user stories",
        objective: "O3",
        notYet: "Chini ya stories nane, au vitu vimeandikwa kama kazi za kawaida bila \"ili\".",
        meets: "Angalau stories nane katika muundo, kila moja na vigezo viwili au vitatu vya kukubalika, kwa mpangilio wa umuhimu.",
        exceeds: "Stories kubwa zimegawanywa na mwanafunzi anaweza kueleza kwa nini story ya juu ni ya kwanza."
      },
      {
        name: "Mpango wa sprint",
        objective: "O4",
        notYet: "Hakuna lengo la sprint, au kazi ni nyingi kuliko muda uliopo.",
        meets: "Lengo la sprint la sentensi moja, stories kutoka juu ya backlog na kazi za siku moja au chini zinazotosha saa zilizopo.",
        exceeds: "Inaacha nafasi kidogo na inasema kipi kingepunguzwa kwanza."
      },
      {
        name: "Ubao wa kazi",
        objective: "O5",
        notYet: "Ubao uliandaliwa lakini kadi hazikusogezwa wakati wa wiki.",
        meets: "Safu za To Do, In Progress na Done, kikomo cha WIP na kadi zilizosogezwa kila siku.",
        exceeds: "Vizuizi viliandikwa pamoja na nani aliyeviondoa."
      },
      {
        name: "Mapitio na retrospective",
        objective: "O6",
        notYet: "Mapitio au retrospective haipo.",
        meets: "Mapitio yaliyoandikwa yenye maoni yaliyoongezwa kwenye backlog, na Endelea, Acha na Jaribu vimeorodheshwa.",
        exceeds: "Uboreshaji mmoja tayari ni kazi katika sprint inayofuata."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaoongeza uzoefu wa Agile au Scrum kwenye CV au wasifu wa LinkedIn ndani ya siku 30",
      "Wanafunzi wanaoomba au kuanza kazi ya mradi, programu au uendeshaji ndani ya siku 90",
      "Wanafunzi wanaoendelea kupata cheti cha Agile kama Certified ScrumMaster au Professional Scrum Master"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Zana ya ubao wa kazi ya bure (Trello, Microsoft Planner au GitHub Projects), spreadsheet, au karatasi za kubandika ukutani",
      "Simu au kompyuta; msaidizi wa AI ni hiari kwa kuandika rasimu za stories",
      "Karatasi na kalamu, au hati, kwa backlog, mpango wa sprint, mapitio na retrospective",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na wiki moja ya kuendesha sprint"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kikao; onyesheni ubao wa mfano kwenye skrini ya pamoja.",
      "Unganisheni kila wazo na uzoefu wa kijeshi: lengo la sprint na nia ya kamanda, retrospective na mapitio baada ya operesheni.",
      "Wanafunzi wachague mradi halisi wa binafsi au wa jamii ili sprint iwe kazi ya kweli.",
      "Fanyeni kikao kifupi cha kikundi wakati wa wiki ya sprint ili wanafunzi wafanye mazoezi ya Daily Scrum kwa sauti.",
      "Pimeni kazi ya mwisho kwa rubric, na mtoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
