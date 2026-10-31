"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-intro-ai-sports.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-intro-ai-sports-sw",
  lang: "sw",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Utangulizi wa AI katika Michezo",
  skills: "Kueleza AI inafanya nini katika michezo, Kufungua msaidizi wa AI wa bure, Kuandika prompt ya michezo iliyo wazi, Kukagua majibu ya AI, Kulinda taarifa zako binafsi na za afya",
  outcome: "kutumia msaidizi wa AI wa bure kutengeneza mpango wa wiki moja wa mazoezi na masomo unaoendana na ratiba ya timu yako: kuuliza swali lililo wazi, kuboresha jibu, kulikagua na kocha wako, na kutoweka taarifa binafsi na za afya ndani yake.",
  about: [
    "Kozi hii ni kwa wanamichezo wa sekondari, wa chuo na wanaoanza kazi ya michezo, na kwa makocha wanaotaka mwanzo rahisi wa akili bandia (AI). Huhitaji ujuzi wa teknolojia.",
    "Utajifunza mahali AI tayari inapoonekana katika michezo, kuanzia takwimu za mechi hadi uchambuzi wa video na usajili wa wanamichezo, na jinsi ya kutumia msaidizi wa AI wa bure wewe mwenyewe kupanga wiki yako.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tumia msaidizi wa AI wa bure kutengeneza mpango wa wiki moja unaoendana na ratiba yako halisi ya mazoezi, mechi na masomo. Andika prompt iliyo wazi, omba maboresho angalau mawili, ondoa taarifa zozote binafsi au za afya, na umwonyeshe kocha wako au mtaalamu wa tiba ya michezo (athletic trainer) mpango huo kabla ya kuufuata.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari na wa chuo, na baadhi ya vijana wazima wanaocheza katika klabu au michezo ya ridhaa, wanaogawa muda kati ya mazoezi, mechi, masomo na wakati mwingine kazi, usajili au NIL (malipo kwa jina, picha na sura yao).",
    startingPoint: "Wanatumia simu janja, mitandao ya kijamii na apps za michezo kila siku. Wengi wamejaribu msaidizi wa AI kwa kawaida tu, lakini hawaandiki prompt zilizo wazi, hawakagui majibu, wala hawafikirii ni taarifa gani binafsi na za afya wanazotoa.",
    gap: "AI inaweza kuwasaidia wanamichezo kupanga wiki yao, kusoma na kujipanga, lakini majibu yasiyo sahihi kuhusu mazoezi, majeraha, lishe au ustahiki yanaweza kudhuru afya yao au ustahiki wao, na mawakala wa usajili na mikataba ya chapa bandia wanawalenga. Wanahitaji kutumia AI vizuri na kuikagua na kocha wao, mtaalamu wa tiba ya michezo au ofisi ya kanuni (compliance office).",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta ya shule au ya maktaba",
      "Muda: kama dakika 5 kwa kila somo, kati ya mazoezi na masomo",
      "Masharti ya umri: wanafunzi walio chini ya miaka 18 wanakagua masharti ya umri ya app na kumwuliza mzazi au mlezi",
      "Afya na faragha: hakuna ripoti za majeraha, dawa, nywila wala namba za kitambulisho katika prompt; ushauri wa mazoezi, afya na ustahiki unakaguliwa na mtaalamu anayefaa"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mifano ya teknolojia katika michezo", action: "kutambua mahali AI inapotumika katika michezo na kile isichoweza kukufanyia", standard: "ukitaja angalau matumizi matatu na kikomo kimoja" },
    { id: "O2", condition: "Ukitumia simu yako au kompyuta", action: "kufungua msaidizi wa AI wa bure kutoka kwenye app au tovuti yake rasmi, kutuma ujumbe wa kwanza na kutoka (sign out) kwenye kompyuta ya pamoja", standard: "baada ya kukagua masharti ya umri ya app" },
    { id: "O3", condition: "Ukipewa ratiba yako halisi ya mazoezi, mechi na masomo", action: "kuandika prompt yenye hitaji lako, hali yako na muundo wa jibu unaoutaka", standard: "ili jibu la kwanza liwe na manufaa" },
    { id: "O4", condition: "Ukipewa jibu la AI lisiloendana na wiki yako", action: "kuuliza maswali ya kufuatilia, badiliko moja kwa wakati, ili kulirekebisha", standard: "ukifanya maboresho angalau mawili" },
    { id: "O5", condition: "Ukipewa jibu la AI lenye ushauri wa mazoezi, afya, lishe au ustahiki", action: "kulikagua na kocha wako, mtaalamu wa tiba ya michezo, mtaalamu wa lishe, daktari, ofisi ya kanuni au ukurasa rasmi", standard: "kabla ya kulifuata" },
    { id: "O6", condition: "Unapoandika prompt au unapopata ofa mtandaoni", action: "kuzuia taarifa binafsi na za afya zisiingie na kutambua ulaghai unaowalenga wanamichezo", standard: "bila kutoa nywila, misimbo, namba za kitambulisho wala rekodi za afya" }
  ],
  chapters: [
    {
      name: "Sura 1: Mahali AI inapoonekana katika michezo",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI ni nini, na mahali unapoiona tayari katika michezo",
          minutes: 4,
          goal: "Taja njia tatu AI inavyotumika katika michezo leo na useme kile AI isichoweza kufanya.",
          text: [
            "AI, au akili bandia (artificial intelligence), ni programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu, kama kutambua mifumo, kuandika maneno au kutambua kilicho ndani ya video.",
            "Katika michezo tayari unaiona: matangazo ya mechi yanayoonyesha kasi ya mchezaji au nafasi ya shuti kuingia, apps zinazohesabu marudio yako au kufuatilia mbio zako, zana za video zinazoweka alama kila mchezo, na tovuti za usajili zinazopanga wanamichezo kwa takwimu.",
            "AI ni msaidizi, si kocha, daktari wala mwamuzi. Haijui mwili wako, timu yako wala malengo yako usipoiambia, na inaweza kukosea. Makocha na wanamichezo ndio bado wanaofanya maamuzi."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu zinazojifunza mifumo kutoka kwa data na kuitumia kujibu, kutabiri au kutengeneza kitu."], ["Data", "ukweli na namba, kama muda, matokeo, marudio au video."]],
          slides: [
            { title: "AI kwa sentensi moja", bullets: ["Programu zinazojifunza mifumo kutoka kwa data", "Kisha zinajibu, zinatabiri au zinatengeneza kitu"] },
            { title: "Mahali unapoiona katika michezo", bullets: ["Takwimu za matangazo kama kasi na nafasi ya shuti", "Apps zinazofuatilia mbio na marudio", "Zana za video zinazoweka alama michezo", "Tovuti za usajili zinazopanga kwa takwimu"] },
            { title: "AI si nini", bullets: ["Si kocha wako, daktari wala mwamuzi", "Inaweza kukosea, hata ikisikika na uhakika", "Wewe na kocha wako ndio mnaofanya maamuzi"] }
          ],
          tryIt: "Andika mahali patatu ulipoona AI au takwimu za kisasa katika mchezo wako msimu huu, kwa mfano picha ya takwimu kwenye matangazo, app ya mazoezi au zana ya video ambayo timu yako inatumia.",
          youCanNow: "kueleza AI ni nini, kutaja njia tatu inavyoonekana katika michezo, na kusema kwa nini watu bado ndio wanaofanya maamuzi.",
          quickCheck: [
            { objective: "O1", q: "AI inamaanisha nini?", options: ["Aina ya kinywaji cha wanamichezo", "Programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu", "Mashine ya mazoezi", "Ishara ya mwamuzi"], answer: 1, why: "AI ni programu za kompyuta zinazotambua mifumo, kuandika maneno au kutambua kilicho ndani ya video." },
            { objective: "O1", q: "App ya AI inasema ubadilishe nafasi yako kwenye timu. Unafanya nini?", options: ["Kuongea na kocha wako; AI ni msaidizi, si kocha wako", "Kubadilisha nafasi mara moja", "Kuacha timu", "Kutomsikiliza kocha wako tena"], answer: 0, why: "AI haijui timu yako wala malengo yako; makocha na wanamichezo ndio bado wanaofanya maamuzi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufungua msaidizi wa AI wa bure",
          minutes: 5,
          goal: "Fungua msaidizi wa AI wa bure kwenye simu yako au kompyuta na utume ujumbe wako wa kwanza.",
          text: [
            "Msaidizi wa AI ni programu ya AI unayozungumza nayo kwa maneno ya kawaida. Wanaojulikana na walio bure ni ChatGPT, Microsoft Copilot na Google Gemini.",
            "Kwenye simu, pata app rasmi kutoka duka la apps, iliyotengenezwa na kampuni halisi: OpenAI kwa ChatGPT, Microsoft kwa Copilot, Google kwa Gemini. Kwenye kompyuta, fungua kivinjari na uende chatgpt.com, copilot.microsoft.com au gemini.google.com.",
            "Baadhi ya wasaidizi wanahitaji akaunti na wana masharti ya umri. Kama uko chini ya miaka 18, kagua masharti ya umri ya app na umwulize mzazi au mlezi kwanza. Kwenye kompyuta ya shule au ya pamoja, toka (sign out) unapomaliza."
          ],
          steps: ["Chagua simu yako au kompyuta.", "Simu: sakinisha app rasmi. Kompyuta: andika anwani ya tovuti.", "Tafuta kisanduku cha ujumbe karibu na chini ya skrini.", "Andika ujumbe wa salamu na usome jibu.", "Kwenye kompyuta ya pamoja, toka (sign out) na ufunge kivinjari."],
          words: [["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea."], ["Kivinjari", "programu unayotumia kutembelea tovuti, kama Chrome, Edge au Safari."]],
          slides: [
            { title: "Wasaidizi wa AI wa bure", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Jinsi ya kufungua mmoja", bullets: ["Simu: app rasmi kutoka duka la apps", "Kompyuta: chatgpt.com, copilot.microsoft.com au gemini.google.com", "Tafuta kisanduku cha ujumbe chini"] },
            { title: "Kabla hujaanza", bullets: ["Uko chini ya miaka 18? Kagua masharti ya umri na umwulize mzazi", "Kompyuta ya pamoja: toka (sign out) ukimaliza"] }
          ],
          tryIt: "Fungua msaidizi mmoja wa AI wa bure na uandike: \"Ninacheza [mchezo wako]. Eleza kwa sentensi tatu fupi jinsi AI inavyotumika katika mchezo wangu.\" Soma jibu.",
          youCanNow: "kufungua msaidizi wa AI wa bure, kutuma ujumbe na kuondoka kwenye kompyuta ya pamoja kwa usalama.",
          quickCheck: [
            { objective: "O2", q: "Anwani ipi ya tovuti inafungua Google Gemini kwenye kompyuta?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com ndiyo anwani rasmi; tumia tovuti au app ya kampuni halisi." },
            { objective: "O2", q: "Ulitumia ChatGPT kwenye kompyuta ya maktaba kupanga wiki yako. Unafanya nini ukimaliza?", options: ["Kuiacha wazi kwa mchezaji mwenzako", "Kuhifadhi nywila yako", "Kuzima skrini tu", "Kutoka (sign out) na kufunga kivinjari"], answer: 3, why: "Kutoka kwenye kompyuta za pamoja kunawazuia wengine kuingia kwenye mazungumzo na akaunti zako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika prompt ya michezo iliyo wazi",
          minutes: 5,
          goal: "Andika prompt yenye hitaji lako, hali yako na muundo wa jibu unaoutaka.",
          text: [
            "Unachoandika kwa msaidizi wa AI kinaitwa prompt. Prompt iliyo wazi inaleta jibu lenye manufaa mara ya kwanza.",
            "Prompt imara ina sehemu tatu: unachohitaji, hali yako, na jinsi unavyotaka jibu. Mfano: \"Mimi ni kiungo wa kati wa mpira wa miguu wa sekondari. Nina mazoezi Jumatatu hadi Alhamisi saa 3:30 hadi 5:30 na mechi Ijumaa. Tengeneza ratiba rahisi ya kusoma ya wiki ikizunguka mazoezi. Iweke katika jedwali.\"",
            "Prompt dhaifu kama \"nisaidie kuwa bora\" inamfanya msaidizi abahatishe. Ongeza mchezo, nafasi yako, ratiba yako na muundo."
          ],
          steps: ["Sema unachohitaji.", "Ongeza mchezo wako, nafasi, kiwango na ratiba (bila taarifa binafsi).", "Sema muundo: orodha, jedwali, hatua fupi au maneno rahisi."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI ili kuomba kitu."], ["Muundo", "umbo la jibu, kama orodha, jedwali au hatua."]],
          slides: [
            { title: "Sehemu tatu za prompt nzuri", bullets: ["1. Unachohitaji", "2. Mchezo wako, nafasi, kiwango na ratiba", "3. Muundo unaoutaka"] },
            { title: "Dhaifu dhidi ya wazi", bullets: ["Dhaifu: \"nisaidie kuwa bora\"", "Wazi: \"Mimi ni kiungo wa kati wa sekondari, mazoezi Jumatatu-Alhamisi...\"", "\"...tengeneza ratiba ya kusoma katika jedwali\""] },
            { title: "Ongeza maelezo, si siri", bullets: ["Ndiyo: mchezo, nafasi, saa za mazoezi", "Hapana: jina kamili, namba ya kitambulisho cha shule, rekodi za afya"] }
          ],
          tryIt: "Andika prompt yenye sehemu tatu ukiomba ratiba ya kusoma au ya siku za kupumzika ikizunguka wiki yako halisi ya mazoezi. Itume na usome jibu.",
          youCanNow: "kuandika prompt ya michezo iliyo wazi yenye hitaji lako, hali yako na muundo.",
          quickCheck: [
            { objective: "O3", q: "Sehemu ya muundo katika prompt ni ipi?", options: ["Jinsi unavyotaka jibu, kama jedwali au orodha fupi", "Mchezo wako", "Jina la kocha wako", "Nywila yako"], answer: 0, why: "Muundo unamwambia msaidizi aunde jibu kwa umbo gani." },
            { objective: "O3", q: "Unataka msaada wa kupanga kazi za shule pamoja na mpira wa kikapu. Prompt ipi ni bora?", options: ["\"kazi za shule\"", "\"nisaidie kuwa bora\"", "\"mpira wa kikapu\"", "\"Mimi ni mlinzi (guard) wa sekondari, nina mazoezi saa 3 hadi 5 jioni Jumatatu hadi Alhamisi na mechi Ijumaa. Tengeneza ratiba ya kazi za shule ya wiki katika jedwali.\""], answer: 3, why: "Inatoa hitaji, hali na muundo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mahali AI inapoonekana katika michezo",
        questions: [
          { objective: "O1", q: "Kipi ni mfano wa AI katika michezo?", options: ["Filimbi", "Kitabu cha matokeo cha karatasi", "Picha ya takwimu kwenye matangazo inayoonyesha nafasi ya shuti kuingia", "Basi la timu"], answer: 2, why: "Picha hiyo inatoka kwa programu iliyojifunza mifumo kutoka kwa mashuti mengi ya zamani." },
          { objective: "O1", q: "App ya AI inapendekeza uendelee kucheza ukiwa na maumivu makali ya goti. Unapaswa kufanya nini?", options: ["Kusimama na kuongea na mtaalamu wa tiba ya michezo au daktari", "Kuifuata, kwa sababu AI inajua zaidi", "Kutomsikiliza kocha wako", "Kumwomba mchezaji mwenzako aamue"], answer: 0, why: "AI si daktari. Maswali ya maumivu na majeraha yanaenda kwa mtu mwenye sifa." },
          { objective: "O2", q: "Upate wapi app ya AI kwa simu yako?", options: ["Kiungo kutoka kwa mtu usiyemjua kwenye DM zako", "Tangazo linalojitokeza ghafla (pop-up)", "Tovuti yoyote", "Duka rasmi la apps, kutoka kwa kampuni halisi"], answer: 3, why: "Maduka rasmi ya apps na app ya kampuni halisi ndiyo chaguo salama." },
          { objective: "O3", q: "Sehemu tatu za prompt iliyo wazi ni zipi?", options: ["Jina, shule, namba ya kitambulisho", "Hitaji, hali, muundo", "Mchezo, rangi ya timu, nembo", "Habari, tafadhali, asante"], answer: 1, why: "Hitaji, hali na muundo vinampa msaidizi anachohitaji ili kusaidia." },
          { objective: "O3", q: "Prompt ipi huenda ikaleta jibu lenye manufaa zaidi?", options: ["\"nisaidie kuwa bora\"", "\"Mimi ni mchezeshaji (point guard) wa chuo, nina mazoezi saa 6-8 asubuhi. Tengeneza ratiba ya masomo na kupumzika ya wiki katika jedwali.\"", "\"mpira wa kikapu\"", "\"niambie kila kitu\""], answer: 1, why: "Ina hitaji, hali na muundo." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI kwa kujiamini",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuboresha jibu",
          minutes: 4,
          goal: "Tumia maswali ya kufuatilia kurekebisha jibu hadi liendane na wiki yako.",
          text: [
            "Jibu la kwanza ni rasimu. Msaidizi anakumbuka ulichosema mapema katika mazungumzo hayo hayo, kwa hiyo unaweza kuomba mabadiliko.",
            "Maswali ya kufuatilia yenye manufaa kwa wanamichezo: \"Hamisha muda wa kusoma uwe baada ya chakula cha jioni siku za mechi.\" \"Lifupishe.\" \"Ongeza siku ya kupumzika.\" \"Tumia maneno rahisi zaidi.\" \"Eleza kwa nini umeweka hiki hapa.\"",
            "Omba badiliko moja kwa wakati. Mazungumzo yakipotoka, anza mazungumzo mapya kwa prompt iliyo wazi zaidi."
          ],
          steps: ["Soma jibu la kwanza.", "Tafuta kisichoendana na ratiba yako halisi.", "Omba badiliko moja.", "Rudia hadi liendane."],
          words: [["Swali la kufuatilia", "ombi la pili linalojenga juu ya jibu ulilopata."]],
          slides: [
            { title: "Jibu la kwanza = rasimu", bullets: ["Unaweza kuomba mabadiliko", "Inakumbuka mazungumzo hayo hayo"] },
            { title: "Maswali ya kufuatilia yanayofaa", bullets: ["\"Ongeza siku ya kupumzika.\"", "\"Hamisha muda wa kusoma uwe baada ya chakula cha jioni siku za mechi.\"", "\"Eleza kwa nini umeweka hiki hapa.\""] },
            { title: "Imepotoka?", bullets: ["Badiliko moja kwa wakati", "Au anza mazungumzo mapya kwa prompt iliyo wazi zaidi"] }
          ],
          tryIt: "Chukua ratiba yako kutoka Somo la 3. Omba mabadiliko mawili, moja baada ya jingine, ili iendane na wiki yako halisi. Linganisha toleo la kwanza na la mwisho.",
          youCanNow: "kuboresha jibu la AI kwa maswali ya kufuatilia yaliyo wazi.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini unaweza kumwomba msaidizi abadilishe jibu lake?", options: ["Anasahau kila ujumbe", "Anakumbuka ulichosema mapema katika mazungumzo hayo hayo", "Yeye ni kocha wako", "Lazima akubaliane nawe"], answer: 1, why: "Katika mazungumzo hayo hayo msaidizi anakumbuka jumbe za awali, kwa hiyo unaweza kuomba mabadiliko." },
            { objective: "O4", q: "Mpango unaweka muda mrefu wa kusoma kabla tu ya mechi yako ya Ijumaa. Unatuma nini?", options: ["\"Si sahihi.\"", "\"Anza upya na uongeze zaidi.\"", "\"Hamisha muda wa kusoma siku ya mechi uwe baada ya chakula cha jioni.\"", "Hakuna; unaufuata tu"], answer: 2, why: "Swali la kufuatilia lililo wazi linalotaja badiliko moja linarekebisha mpango." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua majibu ya AI na kocha wako",
          minutes: 5,
          goal: "Tambua sehemu za jibu la AI zinazohitaji kukaguliwa na uzikague na mtu au chanzo kinachofaa.",
          text: [
            "AI inaweza kubuni mambo au kutoa taarifa za zamani. Hii wakati mwingine inaitwa hallucination. Katika michezo, hiyo inaweza kuwa sheria isiyo sahihi, takwimu iliyobuniwa, tarehe ya zamani ya usajili au ushauri wa mazoezi usio salama.",
            "Kila wakati kagua kiasi cha mazoezi, ushauri wa majeraha na afya, lishe, virutubisho (supplements), ustahiki, na kanuni za usajili na NIL. Kagua na kocha wako, mtaalamu wa tiba ya michezo, daktari, mtaalamu wa lishe aliyesajiliwa, au ofisi ya kanuni ya shule yako, na kwenye kurasa rasmi kama ncaa.org.",
            "Tabia nzuri: muulize msaidizi \"Nikague nini tena na kocha wangu?\" Kisha kweli umwulize kocha wako."
          ],
          steps: ["Weka alama kila ukweli, namba, sheria au ushauri wa afya katika jibu.", "Amua nani akague: kocha, mtaalamu wa tiba ya michezo, daktari, mtaalamu wa lishe au ofisi ya kanuni.", "Kagua kurasa rasmi kwa sheria.", "Wakitofautiana, fuata mtu huyo au chanzo rasmi."],
          words: [["Hallucination", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], ["Ofisi ya kanuni (compliance office)", "ofisi ya shule inayojua kanuni za michezo, pamoja na kanuni za usajili na NIL."]],
          slides: [
            { title: "AI inaweza kukosea kuhusu", bullets: ["Sheria na tarehe za usajili", "Takwimu na rekodi", "Ushauri wa mazoezi, majeraha na lishe"] },
            { title: "Nani anakagua nini", bullets: ["Mazoezi: kocha", "Majeraha na afya: mtaalamu wa tiba ya michezo au daktari", "Chakula: mtaalamu wa lishe aliyesajiliwa", "Kanuni na NIL: ofisi ya kanuni"] },
            { title: "Tabia nzuri", bullets: ["Uliza: \"Nikague nini tena?\"", "Kisha ukague na mtu halisi"] }
          ],
          sources: [{ name: "NCAA: Name, Image and Likeness (kanuni kwa wanamichezo wa vyuo)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Muulize msaidizi wa AI swali moja la sheria kuhusu mchezo wako, kwa mfano kila timu inapata mapumziko (timeouts) mangapi. Kisha tafuta jibu katika kitabu rasmi cha sheria cha ligi yako au umwulize kocha wako, na uone kama yanalingana.",
          youCanNow: "kutambua kinachohitaji kukaguliwa katika jibu la AI na kukipeleka kwa mtu au chanzo rasmi kinachofaa.",
          quickCheck: [
            { objective: "O5", q: "Hallucination ya AI ni nini?", options: ["Ndoto wakati wa kulala kidogo", "Marudio ya video", "Jibu la haraka", "Kitu ambacho AI inabuni kinachosikika kuwa kweli"], answer: 3, why: "AI inaweza kubuni sheria, takwimu au tarehe zinazosikika kuwa halisi." },
            { objective: "O5", q: "AI inapendekeza kirutubisho (supplement) ili upone haraka. Nani anakikagua?", options: ["Mchezaji mwenzako", "Mtaalamu wa lishe aliyesajiliwa, daktari wako au mtaalamu wa tiba ya michezo", "Tovuti ya kirutubisho hicho", "Hakuna; AI iko sahihi kila wakati"], answer: 1, why: "Virutubisho na ushauri wa lishe lazima vikaguliwe na mtaalamu anayefaa, na na ofisi ya kanuni kwa ajili ya ustahiki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda taarifa zako binafsi na za afya",
          minutes: 5,
          goal: "Tumia AI kwa kazi halisi bila kutoa taarifa binafsi, za afya au za akaunti.",
          text: [
            "Usiandike taarifa binafsi kwa msaidizi wa AI: nywila, namba ya Social Security au ya kitambulisho, anwani ya nyumbani kwako, taarifa za benki, au rekodi za afya kama ripoti za majeraha, dawa au matokeo ya vipimo.",
            "Bado unaweza kupata msaada. Andika \"[shule yangu]\" au \"jeraha la msuli wa nyuma ya paja ambalo mtaalamu wangu wa tiba ya michezo anatibu\" badala ya majina na maelezo ya kitabibu. Uliza maswali ya jumla; peleka yale mahususi kwa mtaalamu.",
            "Jihadhari na ulaghai unaowalenga wanamichezo: mawakala wa usajili bandia, mikataba ya chapa bandia na mawakala bandia wanaokuharakisha, wanaoomba pesa mapema au wanaoomba msimbo wa kuingia. Wakague kwanza na kocha wako au ofisi ya kanuni."
          ],
          steps: ["Soma prompt yako kabla ya kuituma.", "Ondoa majina, namba, nywila na taarifa za afya.", "Tumia vishika-nafasi kama \"[shule yangu]\".", "Chukulia ofa za haraka, ada za mapema na maombi ya msimbo kama dalili za hatari."],
          words: [["Kishika-nafasi", "neno la badala kama \"[shule yangu]\" linalofanya taarifa halisi ibaki siri."], ["Ulaghai", "hila ya kuiba pesa, akaunti au taarifa."]],
          slides: [
            { title: "Usiandike kamwe kwa AI", bullets: ["Nywila na misimbo ya kuingia", "Namba za kitambulisho au benki, anwani ya nyumbani", "Ripoti za majeraha, dawa, matokeo ya vipimo"] },
            { title: "Tumia vishika-nafasi", bullets: ["\"[shule yangu]\" badala ya jina", "Swali la jumla kwa AI, swali mahususi kwa mtaalamu"] },
            { title: "Ulaghai unaowalenga wanamichezo", bullets: ["Mawakala wa usajili bandia na mawakala bandia", "Mikataba ya chapa bandia inayoomba pesa mapema", "Mtu yeyote anayeomba msimbo wa kuingia"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wako wa wiki moja wa mazoezi na masomo kwa msaidizi wa AI. Tumia prompt yenye sehemu tatu, omba maboresho mawili, ondoa taarifa binafsi na za afya, na umwonyeshe kocha wako au mtaalamu wa tiba ya michezo mpango huo.",
          youCanNow: "kutumia AI kupanga wiki yako huku ukilinda taarifa binafsi na za afya, na kutambua ulaghai unaowalenga wanamichezo.",
          quickCheck: [
            { objective: "O6", q: "Taarifa ipi unapaswa kuiweka nje ya prompt?", options: ["Saa zako za mazoezi", "Mchezo wako", "Ripoti yako ya jeraha na orodha ya dawa zako", "Kwamba unataka jedwali"], answer: 2, why: "Rekodi za afya kama ripoti za majeraha na dawa zinabaki nje ya zana za AI." },
            { objective: "O6", q: "\"Wakala\" anakutumia ujumbe kuhusu mkataba wa chapa na anaomba msimbo wa kuingia ili kuumaliza leo. Unafanya nini?", options: ["Kutotoa msimbo kamwe, na kukagua na kocha wako au ofisi ya kanuni", "Kutuma msimbo haraka", "Kulipa ada ili kushikilia mkataba", "Kumpa nywila yako badala yake"], answer: 0, why: "Kukuharakisha na kuomba msimbo ni dalili za hatari za ulaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI kwa kujiamini",
        questions: [
          { objective: "O4", q: "Mpango wa AI hauna siku ya kupumzika. Hatua bora inayofuata ni ipi?", options: ["Kuukubali hivyo hivyo", "Kufuta app", "Kufanya mazoezi kila siku milele", "Kuomba: \"Ongeza siku ya kupumzika.\""], answer: 3, why: "Swali la kufuatilia linamwomba msaidizi abadilishe jibu lake." },
          { objective: "O5", q: "Nani anapaswa kukagua ushauri wa AI kuhusu jeraha?", options: ["Mtaalamu wa tiba ya michezo au daktari wako", "Mchezaji mwenzako", "AI yenyewe", "Maoni kwenye mitandao ya kijamii"], answer: 0, why: "Maswali ya afya na majeraha yanaenda kwa mtaalamu mwenye sifa." },
          { objective: "O5", q: "Hallucination katika AI ni nini?", options: ["Ndoto kabla ya mechi", "Intaneti inayoenda polepole", "Kitu ambacho AI imebuni kinachosikika kuwa kweli", "Aina ya zoezi"], answer: 2, why: "AI inaweza kubuni ukweli, sheria au takwimu zinazosikika kuwa halisi." },
          { objective: "O6", q: "Taarifa ipi ni sawa kuiweka katika prompt?", options: ["Nywila yako", "Orodha ya dawa zako", "Anwani ya nyumbani kwako", "Saa zako za mazoezi"], answer: 3, why: "Saa za mazoezi zinasaidia jibu na si siri." },
          { objective: "O6", q: "\"Wakala wa usajili\" anakutumia DM akiomba ada ili kutuma video zako bora kwa makocha leo. Unafanya nini?", options: ["Kulipa haraka kabla nafasi haijaisha", "Kukagua kwanza na kocha wako au ofisi ya kanuni", "Kutuma msimbo wako wa kuingia", "Kutuma namba yako ya kitambulisho"], answer: 1, why: "Kuharakishwa na ada za mapema ni dalili za hatari. Kagua kabla ya kutenda." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa AI katika Michezo",
    questions: [
      { objective: "O1", q: "AI inaelezwa vizuri zaidi kama:", options: ["Aina mpya ya mpira", "Mwamuzi", "Programu zinazojifunza mifumo kutoka kwa data", "Ligi ya michezo"], answer: 2, why: "AI inajifunza mifumo kutoka kwa data na kuitumia kujibu au kutabiri." },
      { objective: "O1", q: "Kipi SI matumizi ya AI katika michezo?", options: ["Kufunga kamba za viatu vyako", "Kuweka alama michezo katika video ya mechi", "Kufuatilia mbio kwa app", "Kutabiri nafasi ya shuti kuingia"], answer: 0, why: "Kufunga kamba za viatu ni kazi ya mtu; mengine yanatumia AI." },
      { objective: "O1", q: "Nani anafanya uamuzi wa mwisho kuhusu mazoezi yako?", options: ["Wewe na kocha wako", "AI", "App yoyote tu", "Hakuna mtu"], answer: 0, why: "AI inasaidia; watu wanaamua." },
      { objective: "O2", q: "Kipi ni msaidizi wa AI wa bure anayejulikana?", options: ["Saa ya kupima muda", "Ubao wa matokeo", "Google Gemini", "Jezi"], answer: 2, why: "Gemini, ChatGPT na Copilot ni wasaidizi wa AI wa bure." },
      { objective: "O2", q: "Una miaka 15 na unataka kutumia msaidizi wa AI. Unapaswa kufanya nini kwanza?", options: ["Kudanganya kuhusu umri wako", "Kukagua masharti ya umri ya app na kumwuliza mzazi au mlezi", "Kutumia akaunti ya rafiki", "Kutoa nywila yako"], answer: 1, why: "Wasaidizi wengi wana masharti ya umri; mzazi anapaswa kujua." },
      { objective: "O2", q: "Kwa kawaida unaandika wapi kwa msaidizi wa AI?", options: ["Alama ya betri", "Kamera", "Anwani ya shule yako", "Kisanduku cha ujumbe karibu na chini"], answer: 3, why: "Kisanduku cha ujumbe ndipo unapoandika prompt yako." },
      { objective: "O2", q: "Baada ya kutumia kompyuta ya pamoja ya shule unapaswa:", options: ["Kubaki umeingia", "Kuhifadhi nywila yako", "Kutoka (sign out) na kufunga kivinjari", "Kuacha karatasi yenye nywila yako"], answer: 2, why: "Kutoka kunalinda akaunti yako." },
      { objective: "O3", q: "Prompt ni nini?", options: ["Zoezi la kupasha mwili joto", "Shangwe ya timu", "Mapumziko (timeout)", "Unachoandika au kusema kwa msaidizi wa AI"], answer: 3, why: "Prompt ni ombi lako kwa AI." },
      { objective: "O3", q: "Sehemu ipi inamwambia AI aunde jibu kwa umbo gani?", options: ["Muundo, kama jedwali au orodha", "Namba ya jezi yako", "Nywila yako", "Namba ya simu ya kocha wako"], answer: 0, why: "Kusema muundo kunaleta jibu katika umbo unalohitaji." },
      { objective: "O3", q: "Prompt ipi iko wazi zaidi?", options: ["\"mazoezi\"", "\"Mimi ni mkimbiaji wa mbio fupi wa chuo, nina mazoezi saa 3-5 jioni. Tengeneza mpango wa kusoma wa wiki katika jedwali.\"", "\"nisaidie\"", "\"michezo\""], answer: 1, why: "Ina hitaji, hali na muundo." },
      { objective: "O4", q: "Jibu la kwanza haliendani na siku yako ya mechi. Unapaswa:", options: ["Kukata tamaa", "Kulikubali", "Kuuliza swali la kufuatilia ili kubadilisha siku ya mechi", "Kulipia app mpya"], answer: 2, why: "Maswali ya kufuatilia yanarekebisha sehemu zisizoendana." },
      { objective: "O4", q: "Uombe mabadiliko mangapi kwa wakati mmoja ili kuweka mambo wazi?", options: ["Moja kwa wakati", "Kumi", "Hakuna", "Mengi kadiri unavyoweza kuandika"], answer: 0, why: "Badiliko moja kwa wakati linaweka jibu katika njia sahihi." },
      { objective: "O4", q: "Mazungumzo yanaendelea kupotoka. Hatua nzuri ni:", options: ["Kuandika nywila yako", "Kurudia maneno yale yale", "Kuacha mazoezi", "Kuanza mazungumzo mapya kwa prompt iliyo wazi zaidi"], answer: 3, why: "Mazungumzo mapya yenye prompt iliyo wazi zaidi kwa kawaida yanafanya kazi vizuri zaidi." },
      { objective: "O5", q: "AI inakupa kanuni ya usajili. Unapaswa:", options: ["Kuiweka mtandaoni kama ukweli", "Kuikagua kwenye ncaa.org au na ofisi yako ya kanuni", "Kupuuza sheria zote", "Kuuliza AI tena na kuiamini"], answer: 1, why: "Kanuni zinabadilika; kagua chanzo rasmi." },
      { objective: "O5", q: "Nani ni mtu sahihi wa kukagua mpango wa lishe?", options: ["Mshawishi (influencer) yeyote wa mtandaoni", "Mtaalamu wa lishe aliyesajiliwa", "AI", "Mchezo wa video"], answer: 1, why: "Wataalamu wa lishe waliosajiliwa wamefunzwa kutoa ushauri wa lishe." },
      { objective: "O5", q: "Nani anajua kanuni za NIL na usajili za shule yako?", options: ["Mgahawa wa shule", "Dereva wa basi", "Timu pinzani", "Ofisi ya kanuni"], answer: 3, why: "Ofisi ya kanuni inashughulikia kanuni za michezo." },
      { objective: "O6", q: "Kipi hupaswi KAMWE kuandika kwa msaidizi wa AI?", options: ["Orodha ya dawa zako", "Ratiba yako ya mazoezi", "Mchezo wako", "Nafasi yako"], answer: 0, why: "Dawa na rekodi za afya ni taarifa binafsi." },
      { objective: "O6", q: "Unawezaje kuuliza kuhusu jeraha bila kutoa rekodi?", options: ["Kubandika ripoti yako ya MRI", "Kuandika maelezo ya daktari wako", "Kuuliza swali la jumla na kupeleka swali mahususi kwa mtaalamu wa tiba ya michezo", "Kutoa namba yako ya bima"], answer: 2, why: "Maswali ya jumla ni sawa; matibabu mahususi ni kazi ya mtaalamu." },
      { objective: "O6", q: "Mkataba wa chapa unakuomba ulipe ada mapema ili kujiunga. Hii ni:", options: ["Kawaida kwa mikataba yote", "Inatakiwa na NCAA", "Dalili nzuri", "Dalili ya hatari ya ulaghai"], answer: 3, why: "Chapa halisi zinakulipa wewe; ada za mapema ni dalili ya kawaida ya ulaghai." },
      { objective: "O6", q: "Mtu anaomba msimbo uliotumwa kwa ujumbe kwenye simu yako sasa hivi. Unapaswa:", options: ["Kumsomea", "Kutoutoa kamwe", "Kuuweka mtandaoni", "Kuutuma kwa timu yako"], answer: 1, why: "Msimbo huo unalinda akaunti yako. Mawakala wa usajili na chapa halisi hawauombi kamwe." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Prompt iliyo wazi",
        objective: "O3",
        notYet: "Prompt haiko wazi, kwa mfano \"nitengenezee mpango\".",
        meets: "Prompt inatoa hitaji, ratiba yako halisi ya mazoezi, mechi na masomo, na muundo.",
        exceeds: "Jibu la kwanza tayari linaendana na sehemu kubwa ya wiki yako."
      },
      {
        name: "Ameliboresha",
        objective: "O4",
        notYet: "Alitumia jibu la kwanza kama lilivyo.",
        meets: "Aliomba maboresho angalau mawili, moja baada ya jingine.",
        exceeds: "Anaweza kusema kila badiliko lilirekebisha nini, kama siku ya kupumzika au muda wa siku ya mechi."
      },
      {
        name: "Taarifa binafsi na za afya zimeondolewa",
        objective: "O6",
        notYet: "Prompt ina jina, namba ya kitambulisho, nywila au taarifa ya afya.",
        meets: "Hakuna taarifa binafsi wala za afya katika prompt wala katika mpango.",
        exceeds: "Alitumia vishika-nafasi kama \"[shule yangu]\" na akabakiza maswali ya afya kwa mtaalamu wa tiba ya michezo."
      },
      {
        name: "Amekagua na kocha",
        objective: "O5",
        notYet: "Alifuata mpango bila kumwonyesha mtu yeyote.",
        meets: "Alimwonyesha kocha wake au mtaalamu wa tiba ya michezo mpango kabla ya kuufuata.",
        exceeds: "Alibadilisha mpango kutokana na maoni yao na anaweza kusema kilichobadilika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia mpango uliotengenezwa na AI kwa mazoezi na masomo ndani ya siku 30 (utafiti wa kufuatilia)",
      "Makocha au wataalamu wa tiba ya michezo wanaoripoti wanamichezo wakikagua ushauri wa AI nao",
      "Wanafunzi wanaoanza kozi nyingine ya Athletes ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta ya shule au ya maktaba yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Ratiba halisi ya mwanafunzi ya mazoezi, mechi na masomo kwa wiki moja",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kagua masharti ya umri ya kila app ya AI kwa kikundi chako; wanafunzi walio chini ya miaka 18 wanahitaji ruhusa ya mzazi au mlezi.",
      "Mwombe kocha au mtaalamu wa tiba ya michezo apitie mipango ya mwisho pamoja na wanamichezo.",
      "Usiwaombe kamwe wanamichezo kuandika ripoti za majeraha, dawa au namba za kitambulisho katika zana za AI.",
      "Zungumzeni kuhusu ulaghai wa mawakala wa usajili na mikataba ya chapa bandia, na waelekeze wanamichezo kwa ofisi yao ya kanuni kwa maswali ya NIL.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
