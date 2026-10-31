"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-video.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-video-sw",
  lang: "sw",
  translationOf: "youth-ai-video",
  category: "Youth",
  name: "Kutengeneza Video kwa Msaada wa AI",
  skills: "Kuandika hati fupi kwa msaada wa AI, Kutengeneza ubao wa picha (storyboard), Kurekodi kwa simu, Kuhariri kwa programu ya bure, Kuweka manukuu na muziki kwa uwajibikaji, Kushiriki kwa usalama",
  outcome: "kupanga, kurekodi na kuhariri video ya sekunde 30 hadi 60 (kwa mfano tangazo la klabu au tukio la shule) ukitumia AI kusaidia na hati, ubao wa picha na manukuu, kwa ruhusa ya kila mtu aliye kwenye kamera, muziki unaoruhusiwa kuutumia, na alama ya kweli kwa chochote kilichotengenezwa na AI.",
  about: [
    "Kozi hii ni kwa vijana wanaotaka kutengeneza video bora zaidi kwa kazi za shule, klabu, timu, bendi au chaneli yao wenyewe. Simu na programu ya bure ya kuhariri video vinatosha.",
    "Utatumia msaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini kupata mawazo na kuandika hati fupi, kuigeuza kuwa ubao wa picha, kuirekodi kwa mwanga na sauti nzuri, kuihariri kwa programu ya bure kama CapCut au Canva, kuweka manukuu, na kuishiriki kwa usalama.",
    "Programu za video na zana za AI zina umri wa chini unaoruhusiwa, na baadhi zinahitaji akaunti. Kwa hiyo soma masharti ya kila zana, fuata sheria za shule yako kuhusu AI na kurekodi, na mshirikishe mzazi au mlezi unapojisajili. Kila somo linaisha na kazi ya \"Jaribu sasa\", jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza video ya sekunde 30 hadi 60 inayotangaza klabu, timu, tukio au jambo la shule unalolijali. Tumia AI kusaidia kuandika hati na ubao wa picha, rekodi angalau picha nne kwa ruhusa ya kila mtu aliye kwenye kamera, ihariri kwa programu ya bure, weka manukuu na muziki unaoruhusiwa kuutumia, weka alama kwa chochote kilichotengenezwa na AI, kisha uihamishe (export).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaotaka kutengeneza video bora zaidi kwa kazi za shule, klabu, timu, bendi au chaneli yao wenyewe.",
    startingPoint: "Wanarekodi na kutazama video fupi kwenye simu zao kila siku. Wachache wanapanga kwa hati au ubao wa picha, wanadhibiti mwanga na sauti, wanahariri kwa ufupi, au wanajua sheria za ruhusa ya kurekodi, hakimiliki ya muziki na kuweka alama kwa maudhui ya AI.",
    gap: "Video zisizopangwa zinapoteza watazamaji kwa sekunde chache, na zile za kizembe zinaweza kutumia muziki bila ruhusa, kurekodi watu waliokataa, au kueneza video bandia za AI zinazowaumiza watu. Vijana wanahitaji kupanga, kurekodi na kuhariri video fupi vizuri huku wakitumia AI kwa ukweli na kuwaheshimu wengine.",
    constraints: [
      "Mipaka ya umri na sheria za akaunti kwa programu za video na AI; mzazi au mlezi anashirikishwa katika kujisajili",
      "Sheria za shule kuhusu AI na kuwarekodi wanafunzi; baadhi ya wanafunzi hawaruhusiwi kurekodiwa au kuwekwa mtandaoni",
      "Vifaa: simu na programu ya bure ya kuhariri kama CapCut au Canva",
      "Hakimiliki na ridhaa: muziki na vipande vinavyoruhusiwa tu; ruhusa ya kila mtu aliye kwenye kamera",
      "Faragha unaposhiriki: hakuna jina kamili, anwani ya shule wala ratiba katika machapisho ya wazi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukifikiria video unazotazama na kutengeneza", action: "kueleza jinsi AI inavyosaidia katika video, deepfake ni nini, na sheria za msingi utakazofuata", standard: "ukipata angalau 3 kati ya 4 sahihi" },
    { id: "O2", condition: "Ukipewa mada, hadhira na urefu", action: "kuandika rasimu ya hati kwa msaada wa AI yenye kivutio, vipande vifupi na wito wa kuchukua hatua, na kuigeuza kuwa ubao wa picha", standard: "ikiwa imeandikwa upya kwa sauti yako, ukweli umekaguliwa, na muda wote unalingana na urefu" },
    { id: "O3", condition: "Ukitumia simu", action: "kurekodi picha tulivu zenye mwanga mzuri na sauti iliyo wazi", standard: "kwa ruhusa ya kila mtu aliye kwenye kamera na ukifuata sheria za shule za kurekodi" },
    { id: "O4", condition: "Ukitumia programu ya bure ya kuhariri video", action: "kuingiza, kukata na kupanga vipande vyako na kuongeza kichwa na wito wa kuchukua hatua kama maandishi", standard: "ukifuata ubao wa picha bila muda uliokufa" },
    { id: "O5", condition: "Kabla video yako haijakamilika", action: "kuweka manukuu sahihi, muziki unaoruhusiwa kuutumia, na alama kwa chochote kilichotengenezwa na AI", standard: "kila nukuu ikiwa imekaguliwa na bila uso wala sauti ya mtu halisi iliyotengenezwa na AI bila ruhusa" },
    { id: "O6", condition: "Uhariri ukishakamilika", action: "kupata maoni, kuihamisha video na kuishiriki kwa usalama", standard: "ukiweka taarifa binafsi kuwa siri na ukisema jinsi ulivyotumia AI katika kazi ya shule" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga na kurekodi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jinsi AI inavyosaidia katika video, na sheria za msingi",
          minutes: 4,
          goal: "Taja njia ambazo AI inasaidia katika video na sheria utakazofuata.",
          text: [
            "AI inapatikana kila mahali katika kutengeneza video: wasaidizi wanaosaidia kupata mawazo na kuandika hati, programu za kuhariri zinazoweka manukuu yenyewe au kuondoa kelele za nyuma, na zana zinazotengeneza picha au vipande vya video kutoka kwa maandishi (prompt).",
            "AI inaweza pia kutumiwa vibaya. Deepfake ni video au sauti bandia inayomfanya mtu halisi aonekane anasema au anafanya kitu ambacho hakusema wala hakufanya. Kutengeneza deepfake za wanafunzi wenzako, walimu au watu maarufu kunaweza kuwaumiza watu, kuvunja sheria za shule, na katika baadhi ya maeneo kuvunja sheria za nchi.",
            "Sheria zako za msingi: pata ruhusa ya kila mtu unayemrekodi, tumia muziki na vipande unavyoruhusiwa kutumia tu, weka alama kwa chochote kilichotengenezwa na AI, kagua umri wa chini wa kila programu, na fuata sheria za shule yako."
          ],
          words: [["Hati (script)", "maneno na vitendo vilivyopangwa kwa ajili ya video."], ["Deepfake", "video au sauti bandia inayomfanya mtu halisi aonekane anasema au anafanya kitu ambacho hakusema wala hakufanya."], ["Iliyotengenezwa na AI", "kitu kilichoundwa na zana ya AI badala ya kurekodiwa au kuchorwa na mtu."]],
          slides: [
            { title: "AI katika kutengeneza video", bullets: ["Kupata mawazo na kuandika hati", "Manukuu ya moja kwa moja na kuondoa kelele", "Picha au vipande kutoka kwa prompt"] },
            { title: "Matumizi mabaya: deepfake", bullets: ["Kumwigiza mtu halisi akisema au akifanya mambo", "Kunaumiza watu na kuvunja sheria za shule", "Usizitengeneze kamwe"] },
            { title: "Sheria za msingi", bullets: ["Ruhusa ya kila mtu aliye kwenye kamera", "Muziki na vipande unavyoruhusiwa kutumia", "Weka alama kwa maudhui ya AI", "Kagua umri wa programu na sheria za shule"] }
          ],
          tryIt: "Chagua mada ya video yako ya mwisho: klabu, timu, tukio au jambo shuleni au katika jamii yako. Andika sentensi moja kuhusu video ni ya nani na unataka wafanye nini baada ya kuitazama.",
          youCanNow: "kutaja njia ambazo AI inasaidia katika video na kueleza sheria za kuitumia kwa haki.",
          quickCheck: [
            { objective: "O1", q: "Ipi kati ya hizi ni njia nzuri ya kutumia AI katika video?", options: ["Kutengeneza video bandia ya mwalimu", "Kuondoa kelele za nyuma katika rekodi", "Kunakili uso wa mtu bila kuuliza", "Kuiba wimbo"], answer: 1, why: "AI inasaidia na hati, manukuu na kuondoa kelele; video bandia za watu halisi ni matumizi mabaya." },
            { objective: "O1", q: "Rafiki anataka kutengeneza deepfake ya kuchekesha ya mkuu wa shule kwa video ya klabu yenu. Unafanya nini?", options: ["Uitengeneze lakini uwaonyeshe marafiki tu", "Uitengeneze ukiwa umefifisha uso", "Uiweke mtandaoni bila alama", "Ukatae, kwa sababu inaweza kuwaumiza watu na kuvunja sheria"], answer: 3, why: "Deepfake za watu halisi zinaweza kuwaumiza, kuvunja sheria za shule, na katika baadhi ya maeneo kuvunja sheria za nchi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika hati na ubao wa picha kwa msaada wa AI",
          minutes: 5,
          goal: "Tumia AI kuandika rasimu ya hati fupi na kuigeuza kuwa ubao wa picha, picha moja baada ya nyingine.",
          text: [
            "Video fupi zinahitaji kivutio katika sekunde 3 za kwanza, sehemu ya kati iliyo wazi, na mwisho unaowaambia watu wafanye nini, kama \"Jiunge nasi Alhamisi katika Chumba 12\".",
            "Omba AI rasimu: \"Andika hati ya sekunde 45 kwa video inayowaalika wanafunzi wa mwaka wa kwanza kujiunga na klabu yetu ya roboti. Weka kivutio, vipande 3 vifupi na wito wa kuchukua hatua. Tumia maneno ya kawaida ya vijana.\" Kisha iandike upya ili isikike kama wewe na klabu yako.",
            "Ubao wa picha (storyboard) ni mpango wa kila picha: tunaona nini, tunasikia nini, na kwa muda gani. Omba AI igeuze hati yako kuwa jedwali lenye safu hizo. Unaweza pia kuchora watu wa vijiti."
          ],
          steps: ["Mwambie AI mada, hadhira, urefu na mtindo.", "Omba kivutio, vipande 3 vifupi na wito wa kuchukua hatua.", "Iandike upya kwa sauti yako na ukague ukweli (tarehe, chumba, saa).", "Omba AI iigeuze kuwa jedwali la ubao wa picha: picha, tunaona nini, tunasikia nini, sekunde.", "Hakikisha muda wote unalingana na urefu wako."],
          words: [["Kivutio (hook)", "sekunde chache za kwanza zinazovuta usikivu."], ["Wito wa kuchukua hatua", "sentensi inayowaambia watazamaji wafanye nini baadaye."], ["Ubao wa picha (storyboard)", "mpango wa video, picha moja baada ya nyingine."], ["Picha (shot)", "kipande kimoja cha kurekodi bila kusimama."]],
          slides: [
            { title: "Umbo la video fupi", bullets: ["Kivutio katika sekunde 3 za kwanza", "Sehemu ya kati iliyo wazi", "Wito wa kuchukua hatua mwishoni"] },
            { title: "Omba AI rasimu", bullets: ["Mada, hadhira, urefu, mtindo", "Kisha iandike upya kwa sauti yako", "Kagua tarehe, saa na mahali"] },
            { title: "Ubao wa picha", bullets: ["Namba ya picha", "Tunaona na kusikia nini", "Sekunde ngapi"] }
          ],
          tryIt: "Tumia msaidizi wa AI kuandika rasimu ya hati ya mada ya video yako, iandike upya kwa sauti yako, na uigeuze kuwa ubao wa picha wa picha 4 hadi 6 unaolingana na muda wako.",
          youCanNow: "kuandika hati fupi ya video na ubao wa picha kwa msaada wa AI.",
          quickCheck: [
            { objective: "O2", q: "Ubao wa picha ni nini?", options: ["Sehemu ya maoni ya video", "Faili ya mwisho iliyohamishwa", "Mpango wa kila picha: tunaona nini, tunasikia nini na kwa muda gani", "Orodha ya muziki"], answer: 2, why: "Ubao wa picha unapanga kila picha kabla hujarekodi." },
            { objective: "O2", q: "Hati ya AI inasema klabu yenu hukutana katika Chumba 14, lakini huna uhakika. Unafanya nini?", options: ["Kagua chumba, tarehe na saa wewe mwenyewe kabla ya kurekodi", "Iache; AI kwa kawaida iko sahihi", "Usitaje chumba katika video", "Uliza AI kama ina uhakika"], answer: 0, why: "AI inaweza kukosea tarehe, saa au mahali, kwa hiyo kagua ukweli." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kurekodi kwa simu",
          minutes: 5,
          goal: "Rekodi picha tulivu zenye mwanga mzuri, sauti iliyo wazi na ruhusa.",
          text: [
            "Mwanga: mtu aangalie upande wa mwanga, kama dirisha, ili mwanga uwe usoni mwake, si nyuma yake. Utulivu: shika simu kwa mikono miwili, egemea kitu, au tumia kishikio. Laza simu au iache wima ili ilingane na mahali utakapoiweka video.",
            "Sauti ni muhimu kuliko watu wanavyofikiri. Rekodi karibu na anayezungumza mahali patulivu, mbali na feni na korido. Rekodi jaribio la sekunde 3 na usikilize kabla ya kurekodi kwa kweli.",
            "Muulize kila mtu unayemrekodi kama yuko tayari, na umwambie video itaonyeshwa wapi. Baadhi ya wanafunzi hawaruhusiwi kurekodiwa au kuwekwa mtandaoni kwa sheria za shule, kwa hiyo uliza mwalimu wako au mlezi wa klabu. Usiwarekodi watu katika maeneo ya faragha wala mtu yeyote anayekataa."
          ],
          steps: ["Mgeuze mtu aangalie upande wa mwanga.", "Shika simu kwa utulivu kwa mikono miwili au kishikio.", "Chagua kulaza au wima ili ilingane na mahali utakapoiweka.", "Rekodi jaribio fupi la sauti na usikilize.", "Pata ruhusa ya kila mtu aliye kwenye kamera, na ufuate sheria za shule za kurekodi."],
          words: [["Jaribio la kurekodi (take)", "mara moja ya kujaribu kurekodi picha."], ["Fremu (framing)", "kile kilicho ndani ya kingo za picha."]],
          slides: [
            { title: "Mwanga na utulivu", bullets: ["Angalia upande wa mwanga", "Mikono miwili au kishikio", "Laza au wima kulingana na jukwaa"] },
            { title: "Sauti", bullets: ["Kaa karibu na anayezungumza", "Mahali patulivu, bila feni wala korido", "Fanya jaribio la sekunde 3"] },
            { title: "Ruhusa", bullets: ["Muulize kila mtu aliye kwenye kamera", "Sema video itaonyeshwa wapi", "Fuata sheria za shule za kurekodi"] }
          ],
          tryIt: "Rekodi picha mbili za kwanza kutoka kwenye ubao wako wa picha. Fanya jaribio la sauti kwanza, pata ruhusa ya yeyote aliye kwenye kamera, na urekodi kila picha angalau mara mbili.",
          youCanNow: "kurekodi picha tulivu zenye mwanga mzuri na sauti iliyo wazi, kwa ruhusa ya watu walio kwenye kamera.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini urekodi jaribio fupi la sauti kabla ya kurekodi kwa kweli?", options: ["Kumaliza betri", "Kuifanya video iwe ndefu zaidi", "Kujaribu mwanga", "Kusikia kama sauti iko wazi kabla ya kurekodi"], answer: 3, why: "Jaribio la sekunde 3 linakusaidia kugundua kelele au sauti ya chini kabla ya kurekodi kwa kweli." },
            { objective: "O3", q: "Mlezi wa klabu yako anasema mwanafunzi mmoja haruhusiwi kurekodiwa kwa sheria za shule. Unafanya nini?", options: ["Umrekodi kwa nyuma", "Umrekodi na umfifishe baadaye", "Panga picha ili mwanafunzi huyo asiwe kwenye kamera", "Puuza sheria"], answer: 2, why: "Fuata sheria za shule za kurekodi na usimrekodi mtu yeyote asiyeruhusiwa au asiyetaka kurekodiwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga na kurekodi",
        questions: [
          { objective: "O1", q: "Deepfake ni nini?", options: ["Video au sauti bandia inayomfanya mtu halisi aonekane anasema au anafanya kitu ambacho hakusema wala hakufanya", "Aina ya kamera", "Programu ya bure ya kuhariri", "Mwisho wa video"], answer: 0, why: "Deepfake zinawabandikia watu halisi maneno au vitendo ambavyo havikutokea." },
          { objective: "O2", q: "Sekunde 3 za kwanza za video fupi zinapaswa kufanya nini?", options: ["Kuonyesha majina ya waliohusika", "Kukaa kimya", "Kuvuta usikivu kwa kivutio", "Kuonyesha skrini tupu"], answer: 2, why: "Kivutio kinawafanya watazamaji waendelee kutazama." },
          { objective: "O2", q: "AI imeandika rasimu ya hati yako. Unafanya nini baadaye?", options: ["Uiweke mtandaoni bila kuibadilisha", "Uiandike upya kwa sauti yako na ukague ukweli", "Uifute", "Uongeze anwani ya nyumbani kwako"], answer: 1, why: "Unaifanya iwe yako na unahakikisha tarehe na mahali viko sahihi." },
          { objective: "O3", q: "Unapomrekodi mtu, mwanga unapaswa kuwa wapi?", options: ["Nyuma yake", "Popote pasipo", "Sakafuni tu", "Usoni mwake, kama akiangalia dirisha"], answer: 3, why: "Mwanga usoni unamfanya aonekane vizuri." },
          { objective: "O3", q: "Mwanafunzi mwenzako anasema hataki kuwa katika video yako. Unafanya nini?", options: ["Umrekodi hata hivyo", "Umrekodi kutoka mbali", "Usimrekodi", "Umfifishe baadaye bila kuuliza"], answer: 2, why: "Rekodi tu watu wanaokubali." }
        ]
      }
    },
    {
      name: "Sura 2: Kuhariri na kushiriki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuhariri kwa programu ya bure ya video",
          minutes: 6,
          goal: "Ingiza vipande, vikate, vipange kwa mpangilio na uongeze maandishi.",
          text: [
            "Programu za bure kama CapCut na Canva zinafanya kazi kwenye simu na katika vivinjari vya wavuti. Menyu hubadilika mara kwa mara, kwa hiyo tafuta vitendo hivi: kuanzisha mradi mpya, kuingiza au kupakia vipande vyako, kukata (kuondoa mwanzo na mwisho), kugawa kipande, kuburuta vipande kwa mpangilio, na kuongeza maandishi.",
            "Fuata ubao wako wa picha. Kata kila picha kwa ufupi: anza kabla tu ya kitendo na umalize mara tu baada yake. Muda uliokufa unawafanya watu wapite kwenda video nyingine.",
            "Weka kichwa mwanzoni na wito wako wa kuchukua hatua kama maandishi mwishoni. Maandishi yawe makubwa, mafupi, na yakae kwenye skrini muda wa kutosha kusomwa mara mbili."
          ],
          steps: ["Anzisha mradi mpya na uingize vipande vyako.", "Panga vipande kwa mpangilio wa ubao wa picha.", "Kata mwanzo na mwisho wa kila kipande.", "Ongeza kichwa na wito wa kuchukua hatua kama maandishi.", "Itazame yote mwanzo hadi mwisho na urekebishe sehemu yoyote inayoenda polepole."],
          words: [["Kuingiza (import)", "kuleta vipande vyako ndani ya programu ya kuhariri."], ["Kukata (trim)", "kuondoa mwanzo au mwisho wa kipande."], ["Mstari wa muda (timeline)", "safu katika programu ya kuhariri ambapo vipande vinakaa kwa mpangilio."]],
          slides: [
            { title: "Programu za bure za kuhariri", bullets: ["CapCut au Canva kwenye simu au wavuti", "Tafuta: import, trim, split, maandishi"] },
            { title: "Kata kwa ufupi", bullets: ["Anza kabla tu ya kitendo", "Maliza mara tu baada yake", "Bila muda uliokufa"] },
            { title: "Maandishi kwenye skrini", bullets: ["Kichwa mwanzoni", "Wito wa kuchukua hatua mwishoni", "Makubwa, mafupi, yanasomeka"] }
          ],
          tryIt: "Ingiza picha zako zote, zipange kwa mpangilio wa ubao wa picha, kata kila moja, na uongeze kichwa na wito wa kuchukua hatua mwishoni.",
          youCanNow: "kuhariri vipande kuwa video fupi iliyopangwa vizuri yenye kichwa na wito wa kuchukua hatua.",
          quickCheck: [
            { objective: "O4", q: "Kukata picha \"kwa ufupi\" kunamaanisha nini?", options: ["Kufanya maandishi yawe madogo sana", "Kuanza kabla tu ya kitendo na kumaliza mara tu baada yake", "Kukuza nyuso", "Kutumia picha moja tu"], answer: 1, why: "Kukata kwa ufupi kunaondoa muda uliokufa unaowafanya watazamaji wapite." },
            { objective: "O4", q: "Maandishi yako ya wito wa kuchukua hatua yanapita haraka mno kusomeka. Unafanya nini?", options: ["Yafanye madogo zaidi", "Yafute", "Ongeza maneno zaidi", "Yaache kwenye skrini muda wa kutosha kusomwa mara mbili"], answer: 3, why: "Maandishi kwenye skrini yawe makubwa, mafupi, na yakae muda wa kutosha kusomwa mara mbili." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manukuu, muziki na picha za AI, kwa njia sahihi",
          minutes: 5,
          goal: "Weka manukuu sahihi, muziki unaoruhusiwa kuutumia, na alama za kweli kwa maudhui ya AI.",
          text: [
            "Watu wengi hutazama video sauti ikiwa imezimwa, na manukuu yanawasaidia watu viziwi au wenye shida ya kusikia. Programu nyingi za kuhariri zinaweza kutengeneza manukuu yenyewe kwa AI. Yasome kila wakati na urekebishe maneno yasiyo sahihi, hasa majina.",
            "Muziki unalindwa na hakimiliki. Kwa mujibu wa Ofisi ya Hakimiliki ya Marekani (U.S. Copyright Office), kazi inalindwa mara tu inapoundwa na kuhifadhiwa katika umbo fulani, kwa hiyo nyimbo nyingi unazosikia zinalindwa. Tumia muziki kutoka maktaba ya programu yenyewe kwa kufuata sheria zake, muziki uliotunga mwenyewe, au muziki wenye ruhusa iliyo wazi. Majukwaa yanaweza kunyamazisha au kuondoa video zinazotumia muziki bila ruhusa.",
            "Ukiongeza picha au kipande kilichotengenezwa na AI, kiwekee alama, kwa mfano \"Picha iliyotengenezwa na AI\" kwenye skrini au katika maelezo. Kamwe usitumie AI kuweka uso au sauti ya mtu halisi katika video yako bila ruhusa yake iliyo wazi."
          ],
          steps: ["Washa manukuu ya moja kwa moja kama programu yako inayo.", "Soma kila nukuu na urekebishe makosa, hasa majina.", "Chagua muziki kutoka maktaba ya programu, wako mwenyewe, au wenye ruhusa.", "Weka alama kwa picha au kipande chochote kilichotengenezwa na AI.", "Usitumie uso wala sauti ya mtu halisi iliyotengenezwa na AI bila ruhusa."],
          words: [["Manukuu (captions)", "maneno kwenye skrini yanayoonyesha kinachosemwa."], ["Hakimiliki (copyright)", "haki ya kisheria ya mtunzi kudhibiti nakala za kazi yake."], ["Alama (label)", "maelezo mafupi yanayosema kitu kilitengenezwa kwa AI."]],
          slides: [
            { title: "Manukuu", bullets: ["Wengi hutazama sauti ikiwa imezimwa", "Yanasaidia watazamaji viziwi au wenye shida ya kusikia", "Rekebisha makosa ya manukuu ya moja kwa moja"] },
            { title: "Muziki unaoruhusiwa kuutumia", bullets: ["Maktaba ya programu kwa kufuata sheria zake", "Muziki uliotunga mwenyewe", "Muziki wenye ruhusa iliyo wazi"] },
            { title: "Picha za AI", bullets: ["Ziwekee alama", "Hakuna nyuso wala sauti za AI za watu halisi bila ruhusa"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Maswali ya msingi kuhusu hakimiliki (Copyright basics FAQ)", url: "https://www.copyright.gov/help/faq/faq-general.html" }],
          tryIt: "Weka manukuu katika video yako na urekebishe kila kosa. Ongeza muziki unaoruhusiwa kuutumia. Kama ulitumia picha au kipande chochote kilichotengenezwa na AI, weka alama.",
          youCanNow: "kuweka manukuu sahihi, kuchagua muziki unaoruhusiwa kuutumia, na kuweka alama ya kweli kwa maudhui yaliyotengenezwa na AI.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini usome manukuu ya moja kwa moja kabla ya kuchapisha?", options: ["Manukuu ya AI yanaweza kukosea maneno, hasa majina", "Manukuu huwa kamili kila wakati", "Kuifanya video iwe ndefu zaidi", "Manukuu si ya lazima"], answer: 0, why: "Manukuu ya moja kwa moja yanaweza kusikia maneno vibaya, kwa hiyo yasome na uyarekebishe." },
            { objective: "O5", q: "Unataka wimbo maarufu katika tangazo la klabu yako. Unafanya nini?", options: ["Uutumie na utumaini hakuna atakayegundua", "Uutumie kwa sauti ya chini nyuma", "Chagua muziki kutoka maktaba ya programu, wako mwenyewe, au wenye ruhusa", "Uuharakishe ili usikike tofauti"], answer: 2, why: "Nyimbo nyingi zinalindwa; tumia muziki unaoruhusiwa, la sivyo jukwaa linaweza kunyamazisha au kuondoa video." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukagua, kuhamisha na kushiriki kwa usalama",
          minutes: 5,
          goal: "Pata maoni, hamisha video yako na uishiriki kwa usalama.",
          text: [
            "Kabla hujamaliza, waonyeshe watu mmoja au wawili video yako na uwaulize: Je, kivutio kilikuwa na nguvu? Kuna kitu kilichochanganya? Ulijua ufanye nini mwishoni? Unaweza pia kumweleza msaidizi wa AI kuhusu video yako na kuomba njia tatu za kuiboresha.",
            "Hamisha video kwa kutumia chaguo la export au save la programu ya kuhariri. Tazama faili iliyohamishwa mara moja zaidi kukagua sauti, manukuu na mwisho.",
            "Ishiriki mahali ambapo klabu yako, shule na familia wanakubali. Usiweke jina lako kamili, anwani ya shule wala ratiba yako katika machapisho ya wazi. Kama ni kazi ya shule, fuata sheria za mwalimu wako kuhusu AI na useme jinsi ulivyotumia AI."
          ],
          steps: ["Waonyeshe watu mmoja au wawili video na uulize maswali matatu.", "Fanya maboresho moja au mawili.", "Hamisha video na uitazame faili mara moja zaidi.", "Ishiriki mahali ambapo klabu, shule na familia wanakubali.", "Weka taarifa binafsi kuwa siri na useme jinsi ulivyotumia AI katika kazi ya shule."],
          words: [["Maoni (feedback)", "maneno kutoka kwa wengine yanayokusaidia kuboresha."], ["Kuhamisha (export)", "kuhifadhi mradi wako kama faili ya video."]],
          slides: [
            { title: "Pata maoni", bullets: ["Je, kivutio kilikuwa na nguvu?", "Kuna kitu kilichochanganya?", "Ulijua ufanye nini mwishoni?"] },
            { title: "Hamisha na ukague", bullets: ["Tumia export au save", "Tazama faili mara moja zaidi"] },
            { title: "Shiriki kwa usalama", bullets: ["Mahali ambapo shule na familia wanakubali", "Weka taarifa binafsi kuwa siri", "Sema jinsi ulivyotumia AI katika kazi ya shule"] }
          ],
          tryIt: "Kazi ya mwisho: kamilisha video yako ya sekunde 30 hadi 60 yenye hati na ubao wa picha uliosaidiwa na AI, angalau picha nne zilizorekodiwa kwa ruhusa, manukuu, muziki unaoruhusiwa kuutumia na alama kwa maudhui ya AI. Pata maoni, ihamishe na uishiriki kwa usalama.",
          youCanNow: "kupanga, kurekodi, kuhariri, kukagua na kushiriki video fupi kwa uwajibikaji kwa msaada wa AI.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini utazame faili iliyohamishwa mara moja zaidi?", options: ["Kukagua kama sauti, manukuu na mwisho vimetoka sawa", "Kutumia data zaidi", "Kufuta mradi", "Kubadilisha mada"], answer: 0, why: "Faili zilizohamishwa zinaweza kuwa na matatizo, kwa hiyo tazama faili ya mwisho kabla ya kushiriki." },
            { objective: "O6", q: "Mtazamaji anasema hakujua afanye nini mwishoni. Unabadilisha nini?", options: ["Hakuna kitu", "Ufanye wito wa kuchukua hatua uwe wazi zaidi", "Uongeze muziki zaidi", "Uondoe kivutio"], answer: 1, why: "Maoni kuhusu mwisho yanamaanisha wito wa kuchukua hatua unahitaji kuwa wazi zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuhariri na kushiriki",
        questions: [
          { objective: "O4", q: "Kukata (trim) kunamaanisha nini katika programu ya kuhariri video?", options: ["Kuongeza muziki", "Kuondoa mwanzo au mwisho wa kipande", "Kushiriki video", "Kutengeneza manukuu"], answer: 1, why: "Kukata kunaondoa muda wa ziada mwanzoni au mwishoni." },
          { objective: "O5", q: "Manukuu ya moja kwa moja yameandika vibaya jina la kiongozi wa klabu yako. Unafanya nini?", options: ["Uyaache", "Uzime sauti", "Ufute video", "Urekebishe nukuu"], answer: 3, why: "Soma na urekebishe manukuu ya moja kwa moja kila wakati." },
          { objective: "O5", q: "Muziki upi ni salama kuutumia?", options: ["Muziki kutoka maktaba ya programu kwa kufuata sheria zake", "Wimbo maarufu kutoka redioni", "Wimbo uliochukuliwa kutoka tovuti ya video", "Wimbo wowote ukimtaja mwimbaji"], answer: 0, why: "Muziki wa maktaba kwa kufuata sheria zake, muziki wako mwenyewe, au muziki wenye ruhusa ni sawa." },
          { objective: "O5", q: "Umeongeza picha iliyotengenezwa na AI. Unapaswa kufanya nini?", options: ["Uifiche", "Useme uliichora wewe", "Uiwekee alama kuwa imetengenezwa na AI", "Uondoe manukuu"], answer: 2, why: "Alama za kweli zinawaambia watazamaji kile AI ilichotengeneza." },
          { objective: "O6", q: "Unapaswa kufanya nini kabla ya kushiriki video ya kazi ya shule?", options: ["Kuweka anwani ya shule yako", "Kuficha jinsi ulivyotumia AI", "Kuacha kutazama faili iliyohamishwa", "Kufuata sheria za mwalimu wako kuhusu AI na kusema jinsi ulivyotumia AI"], answer: 3, why: "Kufuata sheria za shule na kusema ukweli kuhusu matumizi ya AI ni muhimu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutengeneza Video kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Ipi ni njia nzuri ya kutumia AI katika video?", options: ["Kutengeneza manukuu ya moja kwa moja", "Kutengeneza video bandia za wanafunzi wenzako", "Kunakili filamu", "Kuiba akaunti"], answer: 0, why: "Manukuu ya moja kwa moja ni kipengele cha AI cha kawaida na chenye manufaa." },
      { objective: "O1", q: "Kwa nini deepfake za watu halisi ni tatizo?", options: ["Ni fupi mno", "Zinaweza kuwaumiza watu na kuvunja sheria za shule au za nchi", "Hazina sauti", "Zinahitaji kishikio cha miguu mitatu"], answer: 1, why: "Deepfake zinawafanya watu halisi waonekane wanafanya mambo ambayo hawakufanya." },
      { objective: "O1", q: "Kabla ya kujisajili kwenye programu ya video au AI, kijana anapaswa:", options: ["Kutumia akaunti ya rafiki mkubwa", "Kuruka masharti", "Kukagua umri wa chini na kumshirikisha mzazi au mlezi", "Kutumia tarehe ya kuzaliwa ya uongo"], answer: 2, why: "Programu zina mipaka ya umri, na mzazi anapaswa kushirikishwa." },
      { objective: "O2", q: "Wito wa kuchukua hatua ni:", options: ["Muziki wa nyuma", "Mpangilio wa kamera", "Jina la faili la video", "Sentensi inayowaambia watazamaji wafanye nini baadaye"], answer: 3, why: "Unawaambia watazamaji wafanye nini, kama kujiunga au kuhudhuria." },
      { objective: "O2", q: "Ombi lipi kwa AI litatoa rasimu bora ya hati?", options: ["\"Video ya sekunde 45 inayowaalika wanafunzi wa mwaka wa kwanza kwenye klabu ya roboti; kivutio, vipande 3, wito wa kuchukua hatua; maneno ya kawaida\"", "\"video\"", "\"tengeneza kitu\"", "\"roboti\""], answer: 0, why: "Linataja mada, hadhira, urefu, umbo na mtindo." },
      { objective: "O2", q: "Ubao wa picha unaonyesha:", options: ["Muziki tu", "Kila picha: tunaona nini, tunasikia nini na kwa muda gani", "Bei ya programu ya kuhariri", "Maoni ya watazamaji"], answer: 1, why: "Ubao wa picha ni mpango wa video, picha moja baada ya nyingine." },
      { objective: "O2", q: "Kwa nini ukague ukweli katika hati iliyoandikwa na AI?", options: ["AI haikosei kamwe", "Ukweli hauna maana katika video", "AI inaweza kukosea tarehe, saa au mahali", "Inaifanya video iwe ndefu zaidi"], answer: 2, why: "AI inaweza kukosea; wewe unakagua maelezo." },
      { objective: "O3", q: "Ili simu yako itulie unaweza:", options: ["Kuipunga huku na huko", "Kuishika kwa kidole kimoja", "Kurekodi ukikimbia", "Kutumia mikono miwili, kuegemea kitu, au kutumia kishikio"], answer: 3, why: "Picha tulivu zinaonekana za kitaalamu zaidi." },
      { objective: "O3", q: "Mahali bora pa kumrekodi mtu anayezungumza ni:", options: ["Mahali patulivu, karibu na anayezungumza", "Karibu na feni yenye kelele", "Korido yenye watu wengi", "Mbali, upande wa pili wa ukumbi wa michezo"], answer: 0, why: "Mahali patulivu na kuwa karibu vinatoa sauti iliyo wazi." },
      { objective: "O3", q: "Kabla ya kuwarekodi watu kwa video ya klabu ya shule, unapaswa:", options: ["Kurekodi kwa siri", "Kuomba ruhusa na kukagua sheria za shule za kurekodi", "Kuuliza tu baada ya kuiweka mtandaoni", "Kurekodi katika maeneo ya faragha"], answer: 1, why: "Ruhusa na sheria za shule zinatangulia." },
      { objective: "O4", q: "Kuingiza (import) katika programu ya kuhariri video kunamaanisha:", options: ["Kuiweka video mtandaoni", "Kufuta vipande", "Kuleta vipande vyako ndani ya programu ya kuhariri", "Kuongeza manukuu"], answer: 2, why: "Kuingiza kunaleta vipande ndani ili uvihariri." },
      { objective: "O4", q: "Kwa nini ukate kila picha kwa ufupi?", options: ["Kutumia nafasi zaidi ya kuhifadhi", "Kuifanya video iwe ndefu zaidi", "Kuficha manukuu", "Muda uliokufa unawafanya watazamaji wapite"], answer: 3, why: "Kukata kwa ufupi kunashika usikivu." },
      { objective: "O4", q: "Maandishi kwenye skrini yanapaswa kuwa:", options: ["Makubwa, mafupi na yakae kwenye skrini muda wa kutosha kusomwa", "Madogo na ya haraka", "Aya ndefu sana", "Yamefichwa"], answer: 0, why: "Maandishi yanayosomeka yanafikisha ujumbe wako." },
      { objective: "O5", q: "Kwa nini uweke manukuu?", options: ["Yanahitajika kwa simu zote", "Wengi hutazama sauti ikiwa imezimwa, na yanasaidia watazamaji viziwi au wenye shida ya kusikia", "Yanachukua nafasi ya kuhariri", "Yanafanya faili iwe ndogo"], answer: 1, why: "Manukuu yanafanya video ziwe wazi zaidi na zifikiwe na watu wengi zaidi." },
      { objective: "O5", q: "Kwa mujibu wa Ofisi ya Hakimiliki ya Marekani, hakimiliki inalinda kazi:", options: ["Baada tu ya kusajiliwa", "Kwa mwaka 1 tu", "Mara tu inapoundwa na kuhifadhiwa katika umbo ambalo watu wanaweza kuona au kusikia", "Kwa video tu"], answer: 2, why: "Ulinzi unaanza kazi inapoundwa na kuhifadhiwa." },
      { objective: "O5", q: "Nini kinaweza kutokea ukitumia wimbo maarufu bila ruhusa?", options: ["Hakuna kitu kamwe", "Unapata pesa", "Wimbo unakuwa bora", "Jukwaa linaweza kunyamazisha au kuondoa video yako"], answer: 3, why: "Majukwaa yanachukua hatua dhidi ya muziki unaotumiwa bila ruhusa." },
      { objective: "O5", q: "Rafiki anasema uweke uso wa mtu maarufu uliotengenezwa na AI katika video yako ili kuchekesha. Wewe:", options: ["Unakataa; usitumie uso wa mtu halisi bila ruhusa", "Unafanya na kuweka alama", "Unafanya kwenye akaunti ya faragha", "Unafanya lakini unaufifisha"], answer: 0, why: "Usitumie nakala za AI za watu halisi bila ruhusa yao." },
      { objective: "O6", q: "Swali lipi la maoni lina manufaa zaidi?", options: ["\"Je, ni kamili?\"", "\"Ulijua ufanye nini mwishoni?\"", "\"Unanipenda?\"", "\"Simu yangu ni nzuri?\""], answer: 1, why: "Linakagua kama wito wa kuchukua hatua unafanya kazi." },
      { objective: "O6", q: "Baada ya kuhamisha video, unapaswa:", options: ["Kufuta mradi mara moja", "Kuiweka mtandaoni bila kuitazama", "Kutazama faili mara moja zaidi kukagua sauti na manukuu", "Kuipa jina lenye anwani yako"], answer: 2, why: "Faili zilizohamishwa zinaweza kuwa na matatizo; kagua kabla ya kushiriki." },
      { objective: "O6", q: "Unaposhiriki hadharani, weka siri:", options: ["Jina la klabu", "Tarehe ya tukio", "Kichwa cha video", "Jina lako kamili, anwani ya shule na ratiba yako"], answer: 3, why: "Taarifa binafsi zinabaki siri mtandaoni." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Hati na ubao wa picha",
        objective: "O2",
        notYet: "Hakuna kivutio wala wito wa kuchukua hatua, au hakuna ubao wa picha.",
        meets: "Hati yenye kivutio, vipande na wito wa kuchukua hatua, kwa sauti ya mwanafunzi, na ubao wa picha unaolingana na sekunde 30 hadi 60.",
        exceeds: "Ukweli kama tarehe na vyumba umekaguliwa, na ubao wa picha unaonyesha sekunde za kila picha."
      },
      {
        name: "Kurekodi",
        objective: "O3",
        notYet: "Picha ni za giza, zinatikisika au sauti haisikiki vizuri, au mtu alirekodiwa bila ruhusa.",
        meets: "Angalau picha nne tulivu zenye mwanga mzuri na sauti iliyo wazi, na ruhusa ya kila mtu aliye kwenye kamera.",
        exceeds: "Kila picha ilirekodiwa angalau mara mbili na jaribio bora likachaguliwa."
      },
      {
        name: "Kuhariri",
        objective: "O4",
        notYet: "Vipande haviko kwa mpangilio au vina muda mrefu uliokufa.",
        meets: "Vipande vinafuata ubao wa picha, vimekatwa kwa ufupi, na vina kichwa na wito wa kuchukua hatua mwishoni.",
        exceeds: "Maandishi yanasomeka kwa urahisi na kasi inawafanya watazamaji waendelee kutazama."
      },
      {
        name: "Manukuu, muziki na alama",
        objective: "O5",
        notYet: "Manukuu yana makosa, muziki hauruhusiwi, au maudhui ya AI hayana alama.",
        meets: "Manukuu sahihi, muziki unaoruhusiwa na alama kwa chochote kilichotengenezwa na AI.",
        exceeds: "Mwanafunzi anaweza kusema muziki ulitoka wapi na sheria zipi zinauruhusu."
      },
      {
        name: "Maoni na kushiriki kwa usalama",
        objective: "O6",
        notYet: "Haikuhamishwa, au ilishirikiwa pamoja na taarifa binafsi.",
        meets: "Maoni kutoka kwa angalau mtu mmoja, badiliko moja limefanywa, imehamishwa na kushirikiwa kwa usalama.",
        exceeds: "Anaeleza jinsi AI ilivyotumiwa na kilichobadilika baada ya maoni."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Video zilizotumiwa na klabu, timu, tukio au jambo halisi ndani ya siku 30",
      "Wanafunzi wanaotengeneza video ya pili iliyopangwa ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kupata ruhusa na kuweka alama kwa maudhui ya AI katika video za baadaye"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye kamera",
      "Programu ya bure ya kuhariri video kama CapCut au Canva, ikitumiwa ndani ya sheria zake za umri",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kuutumia",
      "Kishikio rahisi cha simu au kitu cha kuegemeza (si lazima)",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kurekodi"
    ],
    facilitatorNotes: [
      "Kagua sheria za shule yako za kurekodi na ruhusa ya picha kabla ya darasa na uwaambie ni wanafunzi gani wasiorekodiwa.",
      "Kagua sheria za umri za kila programu na uwashirikishe wazazi au walezi katika kujisajili kokote.",
      "Wapange wanafunzi katika vikundi vya kazi ili kila mmoja ajizoeze kurekodi, kuwa kwenye kamera na kutoa maoni.",
      "Kagua video kuhusu ruhusa, muziki na alama za AI kabla ya chochote kuwekwa hadharani.",
      "Fanyeni onyesho la video katika kikundi na mpime kila video kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};
