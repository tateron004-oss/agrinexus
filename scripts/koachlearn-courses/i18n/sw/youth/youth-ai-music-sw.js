"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-music.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-music-sw",
  lang: "sw",
  translationOf: "youth-ai-music",
  category: "Youth",
  name: "Kutengeneza Muziki kwa Msaada wa AI",
  skills: "Kutengeneza biti kwenye studio ya bure ya mtandaoni, Kubuni mashairi kwa msaada wa AI, Kujenga muundo wa wimbo, Kuheshimu hakimiliki na sauti za watu, Kuhamisha na kushiriki wimbo kwa usalama",
  outcome: "kutengeneza wimbo wako mfupi wa asili (kama sekunde 60) kwenye studio ya bure ya mtandaoni, ukitumia AI kubuni mawazo na mashairi, wenye muundo wa wimbo ulio wazi, bila nyimbo zilizonakiliwa wala sauti zilizoigwa, na wenye maelezo ya sifa (credits) yanayosema ulivyotumia AI.",
  about: [
    "Kozi hii ni kwa vijana wanaopenda muziki na wanataka kutengeneza wao wenyewe, hata kama bado hawajui kupiga ala yoyote. Unaweza kuifanya kwenye simu au kwenye kompyuta ya shule au ya maktaba.",
    "Utatengeneza biti kwenye BandLab, studio ya bure ya muziki ya mtandaoni, utatumia msaidizi wa AI kama mwenzako wa kubuni mawazo na mashairi, utajenga sehemu za wimbo, na utajifunza sheria za hakimiliki na za kutumia sauti za watu wengine. Utamaliza kwa kuhamisha (export) wimbo mfupi na kuushiriki kwa usalama.",
    "Masharti ya BandLab yanasema watumiaji lazima wawe na umri wa angalau miaka 13, na walio chini ya miaka 18 wanahitaji ruhusa ya mzazi au mlezi. Kagua sheria za umri za kila zana unayotumia, kagua sheria za shule yako kuhusu AI, na mshirikishe mzazi au mlezi unapojisajili. Kila somo linaishia na kazi ya \"Jaribu sasa\", kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza wimbo wa asili wa kama sekunde 60 kwenye studio ya bure ya mtandaoni: biti, utangulizi (intro), beti (verse) na kiitikio (chorus). Tumia msaidizi wa AI kubuni mada na angalau mistari minne ya mashairi, kisha iandike upya kwa maneno yako mwenyewe. Usitumie nyimbo zilizonakiliwa wala nakala ya AI ya sauti ya mtu halisi. Uhamishe (export), kisha andika maelezo mafupi ya sifa yanayosema ulichotengeneza na ulivyotumia AI.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaopenda muziki na wanataka kutengeneza wao wenyewe, wakiwemo wale ambao bado hawajui kupiga ala yoyote.",
    startingPoint: "Wanasikiliza muziki kila siku na wana nyimbo wanazozipenda. Wengi hawajawahi kutengeneza biti, kupanga wimbo, wala kujifunza sheria za hakimiliki, sampuli na sauti za AI.",
    gap: "Zana za muziki za AI zinafanya iwe rahisi kunakili nyimbo au sauti bila kujua kuwa ni kosa, na kuandika prompt peke yake hakumfanyi mtu kuwa mwandishi. Vijana wanahitaji kutengeneza muziki wa asili wao wenyewe, kutumia AI tu kama mwenzao wa kubuni mawazo, na kushiriki kazi yao kwa uaminifu na kwa usalama.",
    constraints: [
      "Mipaka ya umri: BandLab na zana nyingine zina umri wa chini na zinahitaji ruhusa ya mzazi au mlezi kwa walio chini ya miaka 18",
      "Sheria za shule kuhusu AI katika darasa la muziki",
      "Vifaa: simu au kompyuta ya shule au ya maktaba yenye kivinjari cha wavuti; zana za bure tu",
      "Hakimiliki na haki za sauti: hakuna nyimbo zilizonakiliwa, sampuli bila ruhusa, wala nakala za AI za sauti halisi",
      "Faragha unaposhiriki: hakuna jina kamili, shule au mahali unapoishi katika machapisho ya wazi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukifikiria muziki unaousikia na unaoutengeneza", action: "kueleza jinsi AI inavyotumika katika muziki na sheria za msingi utakazofuata", standard: "ukitaja matumizi matatu na sheria kuhusu kunakili, sauti, mipaka ya umri na uaminifu" },
    { id: "O2", condition: "Ukitumia studio ya bure ya mtandaoni kama BandLab, kwa ruhusa ya mzazi au mlezi", action: "kutengeneza biti ya bar 4 yenye ngoma na sauti nyingine moja, kwa tempo inayofaa hisia ya wimbo", standard: "inayocheza bila mapengo" },
    { id: "O3", condition: "Ukipewa mada kutoka maisha yako mwenyewe", action: "kutumia AI kubuni picha za maneno na vina, kisha kuandika mistari minne ya mashairi kwa maneno yako mwenyewe", standard: "ili mistari ilingane na biti ikisemwa kwa sauti" },
    { id: "O4", condition: "Ukipewa biti yako na mashairi yako", action: "kupanga wimbo katika utangulizi, beti na kiitikio", standard: "wenye urefu wa kama sekunde 60, na kila sehemu ikisikika tofauti kidogo" },
    { id: "O5", condition: "Kwa kila sauti na kila sauti ya mtu katika wimbo wako", action: "kuamua kama kila sauti inaruhusiwa kutumika, na kuondoa chochote usichoweza kuonyesha kuwa kinaruhusiwa", standard: "bila nyimbo zilizonakiliwa, sampuli zisizo na leseni wala nakala za AI za sauti halisi" },
    { id: "O6", condition: "Wimbo ukiwa umekamilika", action: "kusawazisha mchanganyiko (mix), kuhamisha wimbo na kuandika maelezo ya sifa ya kweli", standard: "ukishiriki tu mahali familia yako inakubali na ukiweka taarifa binafsi kuwa siri" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutengeneza muziki kwa msaada wa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jinsi AI inavyotumika katika muziki, na sheria za msingi",
          minutes: 4,
          goal: "Eleza njia tatu ambazo AI inatumika katika muziki na sheria utakazofuata.",
          text: [
            "AI inatumika katika muziki kwa njia nyingi: app zinazopendekeza chords au mitindo ya ngoma, zana zinazosafisha rekodi, wasaidizi kama ChatGPT, Microsoft Copilot au Google Gemini wanaosaidia kubuni mashairi, na jenereta zinazotengeneza wimbo mzima kutoka kwa maelezo ya maandishi (prompt).",
            "Katika kozi hii, AI ni mwenzako wa kubuni mawazo. Wewe ndiye unayefanya maamuzi makuu ya ubunifu. Hilo ni muhimu kwa kujifunza, na pia ni muhimu kisheria: U.S. Copyright Office (ofisi ya hakimiliki ya Marekani) imesema kuandika prompt peke yake hakutoshi kukufanya kuwa mwandishi wa kile AI inachotengeneza. Maneno yako, sauti zako na mpangilio wako ndivyo vinavyohesabika.",
            "Sheria za msingi: usinakili nyimbo za watu wengine, usitumie nakala ya AI ya sauti ya mwimbaji halisi au ya mwanafunzi mwenzako, kagua sheria za umri za kila zana, fuata sheria za shule yako kuhusu AI katika darasa la muziki, na sema ukweli kuhusu ulivyotumia AI."
          ],
          words: [["Jenereta ya muziki ya AI", "zana inayotengeneza muziki kutoka kwa maelezo ya maandishi."], ["Mwandishi", "mtu anayeunda kazi na anaweza kumiliki hakimiliki yake."], ["Prompt", "unachoandika kuiomba AI kitu."]],
          slides: [
            { title: "AI katika muziki", bullets: ["Inapendekeza chords na mitindo ya ngoma", "Inasafisha rekodi", "Inasaidia kubuni mashairi", "Inatengeneza nyimbo kutoka kwa prompt"] },
            { title: "AI ni mwenzako", bullets: ["Wewe unafanya maamuzi makuu ya ubunifu", "Prompt peke yake haikufanyi kuwa mwandishi", "Maneno na sauti zako ndizo zinazohesabika"] },
            { title: "Sheria za msingi", bullets: ["Hakuna nyimbo zilizonakiliwa", "Hakuna nakala za AI za sauti za watu halisi", "Kagua sheria za umri na za shule", "Sema ukweli kuhusu matumizi ya AI"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright and Artificial Intelligence, Part 2 (copyrightability)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "U.S. Copyright Office: Copyright and AI", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Andika jina la wimbo unaoupenda na mambo matatu unayoyapenda ndani yake (biti, hisia, maneno). Haya ni mawazo unayoweza kujifunza kutoka kwayo bila kunakili wimbo.",
          youCanNow: "kutaja njia ambazo AI inatumika katika muziki na kueleza sheria za kuitumia kwa haki.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni njia moja ambayo AI inatumika katika muziki?", options: ["Zana zinazosafisha rekodi", "Kupanga gitaa kwa mkono", "Kuchapisha tiketi za tamasha", "Kutengeneza spika"], answer: 0, why: "AI inapendekeza chords, inasafisha rekodi, inasaidia na mashairi na inaweza kutengeneza nyimbo." },
            { objective: "O1", q: "Jenereta ya nyimbo inatengeneza wimbo mzima kutoka kwa prompt yako ya mstari mmoja. Unaweza kusema ni kazi yako kabisa?", options: ["Ndiyo, prompt inakufanya kuwa mwandishi", "Ndiyo, ukiubadilisha jina", "Hapana; prompt peke yake haitoshi, kwa hiyo fanya maamuzi makuu ya ubunifu wewe mwenyewe", "Tu kama hakuna anayeuliza"], answer: 2, why: "U.S. Copyright Office ilisema kuandika prompt peke yake hakutoshi kukufanya kuwa mwandishi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutengeneza biti yako ya kwanza kwenye studio ya bure ya mtandaoni",
          minutes: 6,
          goal: "Fungua studio ya bure ya mtandaoni na utengeneze biti ya bar 4 yenye ngoma na sauti nyingine moja.",
          text: [
            "BandLab ni app na tovuti ya bure ya muziki yenye studio ya mtandaoni ya kutengeneza muziki. Unaweza kuitumia kwenye kivinjari cha wavuti kwa bandlab.com au kwenye app yake kutoka duka rasmi la app. Unahitaji akaunti, kwa hiyo mshirikishe mzazi au mlezi unapojisajili.",
            "Muziki unahesabiwa kwa mapigo (beats) na bar. Nyimbo nyingi za pop na hip-hop zina mapigo 4 katika bar moja. Loop ni kipande kifupi cha muziki kinachojirudia. Biti nyingi zinaanza na loop ya ngoma, kisha besi, kisha sauti moja zaidi kama kinanda au gitaa.",
            "Menyu zinabadilika baada ya muda, kwa hiyo tafuta vitendo hivi: anza mradi mpya, ongeza track, chagua ala au tafuta loops, buruta loop kwenye track, na bonyeza play. Badilisha tempo (kasi) ilingane na hisia: polepole kwa utulivu, haraka kwa msisimko."
          ],
          steps: ["Pamoja na mzazi au mlezi, jisajili kwenye BandLab au studio nyingine ya bure ya mtandaoni.", "Anza mradi mpya.", "Ongeza track ya ngoma, kwa kutumia loop au kwa kugonga mtindo rahisi.", "Ongeza track ya besi au kinanda inayolingana na ngoma.", "Weka tempo, ifanye iwe na urefu wa bar 4, na ubonyeze play."],
          words: [["Biti (beat)", "mpigo wa kudumu wa muziki; pia wimbo mfupi wa ala bila maneno."], ["Bar", "kundi la mapigo, kwa kawaida 4."], ["Loop", "kipande kifupi cha muziki kinachojirudia."], ["Tempo", "kasi ya muziki, inayohesabiwa kwa mapigo kwa dakika (BPM)."]],
          slides: [
            { title: "Studio ya bure ya mtandaoni", bullets: ["BandLab: kivinjari cha wavuti au app rasmi", "Jisajili pamoja na mzazi au mlezi", "Masharti ya BandLab: watumiaji lazima wawe na miaka 13 au zaidi"] },
            { title: "Mapigo, bar na loops", bullets: ["Nyimbo nyingi: mapigo 4 katika bar", "Loop ni kipande kifupi kinachojirudia", "Anza na ngoma, kisha besi, kisha sauti moja zaidi"] },
            { title: "Jenga biti yako", bullets: ["Mradi mpya, ongeza track", "Chagua loop au ala", "Weka tempo na ubonyeze play"] }
          ],
          sources: [{ name: "BandLab Terms of Use (age and parent permission)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Tengeneza biti ya bar 4 yenye ngoma na sauti nyingine moja. Jaribu tempo mbili tofauti na ubaki na ile inayolingana na hisia unayotaka.",
          youCanNow: "kufungua studio ya bure ya mtandaoni na kujenga biti fupi kutoka kwa tracks na loops.",
          quickCheck: [
            { objective: "O2", q: "Bar ni nini katika muziki?", options: ["Sauti kubwa", "Aina ya ngoma", "App ya kurekodi", "Kundi la mapigo, kwa kawaida 4 katika pop na hip-hop"], answer: 3, why: "Muziki unahesabiwa kwa mapigo na bar, na nyimbo nyingi za pop na hip-hop zina mapigo 4 katika bar." },
            { objective: "O2", q: "Biti yako inapaswa kuwa na msisimko, lakini inasikika kama ya usingizi. Unabadilisha nini?", options: ["Kuipunguzia sauti", "Kuongeza kasi ya tempo", "Kufuta ngoma", "Kuongeza bar zaidi za ukimya"], answer: 1, why: "Tempo ni kasi: haraka kwa msisimko, polepole kwa utulivu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kubuni mashairi kwa msaada wa AI",
          minutes: 5,
          goal: "Tumia AI kubuni mada na vina, kisha andika mashairi kwa maneno yako mwenyewe.",
          text: [
            "Anza na mada kutoka maisha yako: siku ya kwanza katika shule mpya, kazi ya likizo, rafiki anayehamia mbali, kuchaguliwa kwenye timu. Hisia za kweli zinatengeneza nyimbo bora kuliko hisia za jumla.",
            "Iombe AI mawazo, si wimbo uliokamilika: \"Nipe picha na misemo 10 kuhusu siku ya mwisho ya likizo kabla ya sekondari\" au \"Nipe maneno yenye vina na 'late' na 'wait'.\" Kisha chagua unayoyapenda na uandike mistari wewe mwenyewe.",
            "Hesabu silabi ili maneno yalingane na biti. Soma mistari yako kwa sauti juu ya biti. Mstari ukihisi umejaa, punguza maneno. Mashairi yako yanapaswa kusikika kama wewe."
          ],
          steps: ["Chagua mada kutoka maisha yako mwenyewe.", "Iombe AI picha, misemo au vina, si wimbo mzima.", "Andika mistari minne kwa maneno yako mwenyewe.", "Isome kwa sauti juu ya biti yako.", "Punguza au badilisha maneno hadi yalingane."],
          words: [["Mashairi (lyrics)", "maneno ya wimbo."], ["Mada", "kile wimbo unachohusu."], ["Silabi", "pigo moja la sauti katika neno; \"mu-zi-ki\" ina silabi tatu."]],
          slides: [
            { title: "Anza na maisha yako", bullets: ["Wakati au hisia ya kweli", "Jambo mahususi ni bora kuliko la jumla"] },
            { title: "Omba mawazo, si wimbo", bullets: ["\"Picha 10 kuhusu...\"", "\"Vina vya 'late'\"", "Wewe unachagua na kuandika"] },
            { title: "Ifanye ilingane", bullets: ["Hesabu silabi", "Isome juu ya biti", "Punguza mistari iliyojaa"] }
          ],
          tryIt: "Chagua mada, umwombe msaidizi wa AI picha au misemo 10 kuihusu, na uandike mistari minne ya mashairi kwa maneno yako mwenyewe inayolingana na biti yako.",
          youCanNow: "kubuni mawazo kwa msaada wa AI na kuandika mashairi ya asili yanayolingana na biti.",
          quickCheck: [
            { objective: "O3", q: "Unapaswa kuiomba AI nini unapoandika mashairi?", options: ["Wimbo uliokamilika wa kunakili", "Mashairi ya rafiki yako", "Maneno ya wimbo maarufu", "Mawazo kama picha, misemo au vina"], answer: 3, why: "AI inatoa mawazo; wewe unaandika mistari mwenyewe ili isikike kama wewe." },
            { objective: "O3", q: "Mstari mmoja unahisi umejaa unapousema juu ya biti. Unafanya nini?", options: ["Punguza au badilisha maneno hadi ulingane", "Ongeza kasi ya wimbo mzima", "Ongeza maneno zaidi", "Uache hivyo na urap haraka zaidi"], answer: 0, why: "Kuhesabu silabi na kupunguza maneno kunasaidia mistari ilingane na biti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutengeneza muziki kwa msaada wa AI",
        questions: [
          { objective: "O1", q: "Kwa mujibu wa U.S. Copyright Office, je, kuandika prompt peke yake kunatosha kukufanya kuwa mwandishi wa kazi ya AI?", options: ["Ndiyo, kila wakati", "Hapana, prompt peke yake haitoshi", "Kwa nyimbo tu", "Tu ukilipa"], answer: 1, why: "Ofisi hiyo ilisema kutoa prompt peke yake hakutoshi." },
          { objective: "O1", q: "Rafiki anataka kutumia nakala ya AI ya sauti ya mwimbaji maarufu kwenye wimbo wako. Unafanya nini?", options: ["Uitumie", "Uitumie lakini uifiche", "Kataa na utumie sauti yako au ya mtu aliyekubali", "Unakili wimbo mzima pia"], answer: 2, why: "Usitumie sauti ya mtu halisi bila ruhusa yake." },
          { objective: "O2", q: "Loop ni nini?", options: ["Kipande kifupi cha muziki kinachojirudia", "Mashairi ya wimbo", "Kitufe cha sauti", "Aina ya maikrofoni"], answer: 0, why: "Loops zinajirudia na ni njia ya kawaida ya kujenga biti." },
          { objective: "O2", q: "Tempo maana yake nini?", options: ["Wimbo una sauti kubwa kiasi gani", "Jina la wimbo", "Una tracks ngapi", "Muziki unaenda kwa kasi gani"], answer: 3, why: "Tempo ni kasi, inayohesabiwa kwa mapigo kwa dakika." },
          { objective: "O3", q: "Ombi gani kwa AI linafaa zaidi kozi hii?", options: ["\"Niandikie wimbo wangu wote\"", "\"Nipe picha 10 kuhusu kazi yangu ya kwanza ya likizo\"", "\"Nakili wimbo maarufu\"", "\"Imba kwa sauti ya mwalimu wangu\""], answer: 1, why: "Iombe AI mawazo, kisha uandike wimbo wewe mwenyewe." }
        ]
      }
    },
    {
      name: "Sura 2: Kujenga, kulinda na kushiriki wimbo wako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujenga muundo wa wimbo",
          minutes: 5,
          goal: "Panga wimbo wako katika utangulizi, beti na kiitikio.",
          text: [
            "Nyimbo nyingi zinajengwa kwa sehemu. Utangulizi (intro) unafungua wimbo. Beti (verse) inasimulia hadithi na maneno yake yanabadilika kila mara. Kiitikio (chorus) ni sehemu inayovutia inayojirudia. Wimbo mfupi unaweza kwenda hivi: utangulizi, beti, kiitikio.",
            "Fanya kila sehemu isikike tofauti kidogo. Kwa mfano, utangulizi una kinanda tu, beti inaongeza ngoma, na kiitikio kinaongeza besi na melodia. Nakili na ubandike sehemu kwenye studio ili kujenga wimbo kwenye mstari wa muda (timeline).",
            "Unaweza kuiuliza AI: \"Nina biti ya bar 4 kwa 90 BPM. Ningepangaje wimbo wa sekunde 60 wenye utangulizi, beti na kiitikio?\" Kisha jaribu mawazo yake na uamini masikio yako."
          ],
          steps: ["Panga mpangilio: utangulizi, beti, kiitikio.", "Nakili biti yako kutengeneza kila sehemu.", "Ondoa au ongeza sauti ili kila sehemu isikike tofauti.", "Weka mashairi yako kwenye beti na kiitikio.", "Cheza wimbo wote na urekebishe."],
          words: [["Utangulizi (intro)", "mwanzo wa wimbo."], ["Beti (verse)", "sehemu inayosimulia hadithi; maneno yanabadilika kila mara."], ["Kiitikio (chorus)", "sehemu inayovutia inayojirudia."], ["Mpangilio (arrangement)", "jinsi sehemu za wimbo zinavyopangwa na kuwekwa juu ya nyingine."]],
          slides: [
            { title: "Sehemu za wimbo", bullets: ["Utangulizi: unafungua wimbo", "Beti: inasimulia hadithi", "Kiitikio: sehemu inayovutia inayojirudia"] },
            { title: "Fanya kila sehemu iwe tofauti", bullets: ["Utangulizi: sauti chache", "Beti: ongeza ngoma", "Kiitikio: ongeza besi na melodia"] },
            { title: "Uliza AI, amini masikio yako", bullets: ["Omba mawazo ya mpangilio", "Yajaribu", "Baki na kinachosikika vizuri kwako"] }
          ],
          tryIt: "Panga biti yako katika utangulizi, beti na kiitikio vya kama sekunde 60. Ongeza mistari yako minne ya mashairi kama maelezo ya maandishi, au uirekodi ukitaka.",
          youCanNow: "kupanga wimbo katika sehemu zilizo wazi ambazo kila moja inasikika tofauti.",
          quickCheck: [
            { objective: "O4", q: "Utangulizi wa wimbo unafanya nini?", options: ["Unarudia sehemu inayovutia", "Unamaliza wimbo", "Unafungua wimbo", "Unasimulia hadithi yote"], answer: 2, why: "Utangulizi unafungua wimbo kabla ya beti na kiitikio." },
            { objective: "O4", q: "Utangulizi, beti na kiitikio vyako vyote vinasikika sawa. Unafanya nini?", options: ["Ondoa au ongeza sauti ili kila sehemu isikike tofauti", "Ongeza sauti ya kila sehemu", "Futa kiitikio", "Tumia wimbo mwingine"], answer: 0, why: "Kubadilisha sauti zinazocheza katika kila sehemu kunafanya muundo uwe wazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hakimiliki, sampuli na sauti za watu",
          minutes: 5,
          goal: "Amua kama sauti au sauti ya mtu inaruhusiwa kutumika katika wimbo wako.",
          text: [
            "Hakimiliki inalinda kazi za asili kama nyimbo na rekodi. Kwa mujibu wa U.S. Copyright Office, kazi inalindwa mara tu inapoundwa na kuwekwa katika hali ambayo watu wanaweza kuisikia au kuiona, na usajili kwa kawaida ni wa hiari. Kwa hiyo nyimbo nyingi unazosikia zinalindwa, na wimbo unaotengeneza ni wako.",
            "Kutumia kipande cha rekodi ya mtu mwingine kunaitwa kusampuli (sampling). Usisampuli nyimbo isipokuwa una ruhusa au sauti inatoka kwenye maktaba inayosema unaweza kuitumia, kama loops zilizo kwenye studio yako. Soma sheria za zana hiyo.",
            "Sauti ni kitu binafsi. Usitengeneze wala kutumia nakala ya AI ya sauti ya mtu halisi, awe nyota, mwalimu au mwanafunzi mwenzako, bila ruhusa yake iliyo wazi. Kama huna uhakika kitu kinaruhusiwa, kiache nje au muulize mwalimu au mzazi."
          ],
          steps: ["Jiulize: je, nimetengeneza sauti hii, au zana inasema naweza kuitumia?", "Ikitoka kwenye wimbo wa mtu mwingine, iache nje isipokuwa una ruhusa.", "Usitumie kamwe nakala ya AI ya sauti ya mtu halisi bila ruhusa.", "Usipokuwa na uhakika, iache nje au muulize mtu mzima unayemwamini."],
          words: [["Hakimiliki", "haki ya kisheria ya mbunifu kudhibiti nakala za kazi yake."], ["Sampuli", "kipande cha rekodi ya mtu mwingine kinachotumika katika wimbo mpya."], ["Sauti iliyoigwa (voice clone)", "nakala ya AI ya sauti ya mtu halisi."]],
          slides: [
            { title: "Misingi ya hakimiliki", bullets: ["Inalinda nyimbo na rekodi", "Inaanza kazi inapoundwa na kuwekwa katika hali ya kudumu", "Usajili kwa kawaida ni wa hiari"] },
            { title: "Sampuli", bullets: ["Usisampuli nyimbo bila ruhusa", "Loops za studio: kagua sheria za zana"] },
            { title: "Sauti za watu", bullets: ["Hakuna nakala za AI za watu halisi bila ruhusa", "Ikiwemo nyota, walimu na wanafunzi wenzako", "Huna uhakika? Iache nje au uliza"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "U.S. Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Orodhesha kila sauti katika wimbo wako na ilikotoka: umeitengeneza wewe, ni loop ya studio, au kitu kingine. Ondoa chochote usichoweza kusema kinaruhusiwa kutumika.",
          youCanNow: "kukagua kila sauti na kila sauti ya mtu katika wimbo wako na kubaki tu na kile unachoruhusiwa kutumia.",
          quickCheck: [
            { objective: "O5", q: "Kusampuli ni nini?", options: ["Kurekodi sauti yako mwenyewe", "Kutumia kipande cha rekodi ya mtu mwingine katika wimbo mpya", "Kubadilisha tempo", "Kuhamisha wimbo"], answer: 1, why: "Kusampuli maana yake ni kutumia sehemu ya rekodi ya mtu mwingine." },
            { objective: "O5", q: "Umepata sauti nzuri mtandaoni lakini huwezi kujua nani aliitengeneza au kama unaweza kuitumia. Unafanya nini?", options: ["Uitumie; hakuna atakayegundua", "Uiongezee kasi ili isikike tofauti", "Ujipe sifa wewe mwenyewe", "Iache nje au muulize mtu mzima unayemwamini"], answer: 3, why: "Kama huwezi kusema sauti inaruhusiwa kutumika, iache nje au uliza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuchanganya, kuhamisha na kushiriki kwa usalama",
          minutes: 5,
          goal: "Sawazisha wimbo wako, uuhamishe, na uushiriki pamoja na maelezo ya sifa ya kweli.",
          text: [
            "Kuchanganya (mixing) maana yake ni kuweka kiwango cha sauti cha kila track ili hakuna inayofunika nyingine. Punguza sauti ya chochote kilicho juu sana na usikilize kwa vipokea sauti (headphones) na kwa spika ya simu.",
            "Kisha hamisha (export) au hifadhi wimbo kama faili la sauti kwa kutumia chaguo la export au download la studio. Andika maelezo mafupi ya sifa: jina lako au jina lako la msanii, jina la wimbo, na ulivyotumia AI, kwa mfano \"AI ilinisaidia kubuni mawazo ya mashairi; muziki wote na mashairi yote nimeandika na kupanga mimi.\"",
            "Shiriki kwa usalama: chapisha tu mahali familia yako inakubali, weka siri jina lako kamili, shule yako na mahali ulipo ukichapisha hadharani, na fikiri kabla ya kuruhusu maoni (comments). Kama wimbo ni wa shule, fuata sheria za mwalimu wako kuhusu AI."
          ],
          steps: ["Sawazisha kiwango cha sauti cha kila track.", "Sikiliza kwa vipokea sauti na kwa spika ya simu.", "Hamisha au hifadhi wimbo kama faili la sauti.", "Andika maelezo ya sifa yanayosema ulivyotumia AI.", "Shiriki tu mahali familia yako inakubali, ukiweka taarifa binafsi kuwa siri."],
          words: [["Kuchanganya (mixing)", "kusawazisha kiwango cha sauti cha kila track."], ["Kuhamisha (export)", "kuhifadhi mradi wako kama faili ambalo wengine wanaweza kucheza."], ["Maelezo ya sifa (credits)", "maelezo mafupi yanayosema nani alitengeneza nini."]],
          slides: [
            { title: "Changanya", bullets: ["Sawazisha sauti ya kila track", "Sikiliza kwa headphones na kwa spika ya simu"] },
            { title: "Hamisha na utoe sifa", bullets: ["Hifadhi kama faili la sauti", "Jina la wimbo na jina la msanii", "Sema ulivyotumia AI"] },
            { title: "Shiriki kwa usalama", bullets: ["Mahali familia yako inakubali", "Weka siri jina, shule na mahali ulipo", "Fuata sheria za shule kuhusu AI"] }
          ],
          tryIt: "Kazi ya mwisho: kamilisha wimbo wako wa asili wa sekunde 60 wenye biti, utangulizi, beti na kiitikio na mashairi yako mwenyewe. Hakikisha kila sauti inaruhusiwa kutumika, uuhamishe, na uandike maelezo ya sifa yanayosema ulivyotumia AI.",
          youCanNow: "kutengeneza, kuchanganya, kuhamisha na kushiriki wimbo wa asili kwa haki na kwa usalama, pamoja na maelezo ya sifa ya kweli.",
          quickCheck: [
            { objective: "O6", q: "Kuchanganya (mixing) maana yake nini?", options: ["Kuweka kiwango cha sauti cha kila track ili hakuna inayofunika nyingine", "Kuongeza mashairi zaidi", "Kuchagua jina la wimbo", "Kupakia wimbo mtandaoni"], answer: 0, why: "Kuchanganya kunasawazisha kiwango cha sauti cha kila track." },
            { objective: "O6", q: "Unataka kuchapisha wimbo wako hadharani. Unaweka nini kuwa siri?", options: ["Jina la wimbo", "Jina lako la msanii", "Jina lako kamili, shule yako na mahali ulipo", "Ulivyotumia AI"], answer: 2, why: "Shiriki kwa usalama kwa kuweka taarifa binafsi kuwa siri na kuchapisha tu mahali familia yako inakubali." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujenga, kulinda na kushiriki wimbo wako",
        questions: [
          { objective: "O4", q: "Sehemu ipi ya wimbo ndiyo inayovutia na kujirudia?", options: ["Utangulizi", "Beti", "Faili la export", "Kiitikio"], answer: 3, why: "Kiitikio ndicho sehemu inayojirudia na kuvutia." },
          { objective: "O5", q: "Kwa mujibu wa U.S. Copyright Office, ulinzi wa hakimiliki unaanza lini?", options: ["Kazi inapoundwa na kuwekwa katika hali ambayo watu wanaweza kuisikia au kuiona", "Baada ya usajili tu", "Baada ya miaka 10", "Kwa wasanii maarufu tu"], answer: 0, why: "Ulinzi unaanza kazi inapoundwa na kuwekwa katika hali ya kudumu." },
          { objective: "O5", q: "Unataka kutumia sekunde 5 za wimbo maarufu katika biti yako. Unafanya nini?", options: ["Uitumie; ni fupi", "Iache nje isipokuwa una ruhusa", "Ubadilishe kasi ili hakuna atakayegundua", "Umpe mwimbaji sifa na uitumie"], answer: 1, why: "Kusampuli wimbo unaolindwa kunahitaji ruhusa." },
          { objective: "O6", q: "Kuchanganya (mixing) ni nini?", options: ["Kuandika mashairi", "Kujisajili kwenye app", "Kusawazisha kiwango cha sauti cha kila track", "Kuchagua mada"], answer: 2, why: "Kuchanganya kunasawazisha jinsi kila sehemu ilivyo na sauti kubwa." },
          { objective: "O6", q: "Maelezo gani ya sifa ni ya kweli?", options: ["\"Hakuna AI iliyotumika\" wakati ilitumika", "\"AI ilisaidia kubuni mawazo ya mashairi; muziki na mashairi ni yangu\"", "Hakuna maelezo kabisa kwa kazi ya shule", "\"Imetengenezwa na prodyuza maarufu\""], answer: 1, why: "Yanasema wazi jinsi AI ilivyotumika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutengeneza Muziki kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Ipi ni njia ambayo AI inatumika katika muziki?", options: ["Kupendekeza chords au mitindo ya ngoma", "Kuchukua nafasi ya masikio yako", "Kusaini mikataba ya kurekodi kwa niaba yako", "Kumiliki nyimbo zako"], answer: 0, why: "Zana za AI zinaweza kupendekeza mawazo ya muziki." },
      { objective: "O1", q: "Katika kozi hii, kazi ya AI ni kuwa:", options: ["Mwandishi wa siri anayekuandikia", "Mwenzako wa kubuni mawazo", "Bosi wako", "Wakili wako"], answer: 1, why: "Wewe unafanya maamuzi makuu ya ubunifu." },
      { objective: "O1", q: "U.S. Copyright Office ilisema nini kuhusu prompt peke yake?", options: ["Inakufanya kuwa mwandishi", "Ni kinyume cha sheria", "Haitoshi kukufanya kuwa mwandishi", "Ni kwa watu wazima tu"], answer: 2, why: "Kutoa prompt peke yake hakutoshi kwa uandishi." },
      { objective: "O2", q: "Kwa masharti ya BandLab, watumiaji lazima wawe na umri wa angalau:", options: ["8", "10", "21", "13, na ruhusa ya mzazi kama wako chini ya miaka 18"], answer: 3, why: "Masharti yanasema miaka 13 na zaidi, na ruhusa ya mzazi au mlezi kwa watoto." },
      { objective: "O2", q: "Nyimbo nyingi za pop na hip-hop zina mapigo mangapi katika bar moja?", options: ["1", "4", "12", "100"], answer: 1, why: "Mapigo manne kwa bar ndiyo ya kawaida zaidi." },
      { objective: "O2", q: "Mpangilio mzuri wa kujenga biti ni:", options: ["Sauti za kuimba tu", "Ngoma, kisha besi, kisha sauti moja zaidi", "Hamisha kwanza", "Sauti kumi kwa wakati mmoja"], answer: 1, why: "Kuanza na ngoma na besi kunatoa msingi imara." },
      { objective: "O2", q: "Unataka hisia ya utulivu na starehe. Huenda unapaswa:", options: ["Kufanya tempo iwe ya haraka sana", "Kuongeza kengele za sauti kubwa", "Kutumia tempo ya polepole", "Kufuta ngoma"], answer: 2, why: "Tempo za polepole kwa kawaida zinahisi tulivu zaidi." },
      { objective: "O3", q: "Mada ipi huenda itatengeneza wimbo wenye nguvu zaidi?", options: ["\"Vitu\"", "\"Maisha kwa ujumla\"", "\"Mambo hutokea\"", "\"Kufunga kabati langu siku ya mwisho ya darasa la 8\""], answer: 3, why: "Matukio mahususi na ya kweli yanatengeneza mashairi yenye nguvu zaidi." },
      { objective: "O3", q: "Ombi zuri kwa AI kuhusu mashairi ni:", options: ["\"Nipe maneno yenye vina na 'late'\"", "\"Andika wimbo wote nami nitaweka jina langu\"", "\"Nakili maneno ya wimbo maarufu\"", "\"Tumia shajara ya rafiki yangu\""], answer: 0, why: "Kuomba mawazo ghafi kunafanya uandishi ubaki wako." },
      { objective: "O3", q: "Mstari umejaa sana kwa biti. Unafanya nini?", options: ["Ongeza kasi ya wimbo mzima", "Punguza maneno hadi ulingane", "Ongeza maneno zaidi", "Futa kiitikio"], answer: 1, why: "Kupunguza maneno kunasaidia mistari ilingane na mdundo." },
      { objective: "O4", q: "Beti ya wimbo:", options: ["Haina maneno kamwe", "Ni ileile kila mara", "Inasimulia hadithi, kwa maneno yanayobadilika", "Ni faili la export"], answer: 2, why: "Beti zinabeba hadithi na maneno yake yanabadilika." },
      { objective: "O4", q: "Unawezaje kufanya kiitikio kionekane zaidi?", options: ["Kukinyamazisha", "Kufuta biti", "Kutumia sauti zilezile za utangulizi", "Kuongeza sauti zaidi, kama besi na melodia"], answer: 3, why: "Kuongeza tabaka za sauti kunafanya kiitikio kihisi kikubwa zaidi." },
      { objective: "O4", q: "AI inakupa mawazo ya mpangilio. Kisha wewe:", options: ["Unayajaribu na kuamini masikio yako", "Lazima uyatumie yote", "Lazima uyapuuze yote", "Unayachapisha kama wimbo wako"], answer: 0, why: "Wewe ndiye unayefanya maamuzi ya ubunifu." },
      { objective: "O5", q: "Je, usajili unahitajika ili wimbo wako uwe na ulinzi wa hakimiliki?", options: ["Ndiyo, kila wakati", "Hapana, usajili kwa kawaida ni wa hiari", "Siku za wikendi tu", "Kwa nyimbo za shule tu"], answer: 1, why: "Copyright Office inasema usajili kwa kawaida ni wa hiari." },
      { objective: "O5", q: "Sampuli ni:", options: ["Jaribio la bure", "Aina ya maikrofoni", "Kipande cha rekodi ya mtu mwingine kinachotumika katika wimbo mpya", "Wazo la mashairi"], answer: 2, why: "Kusampuli kunatumia sehemu ya rekodi iliyopo." },
      { objective: "O5", q: "Sauti ya mwanafunzi mwenzako inaweza kuigwa na AI kwa ajili ya kiitikio chako. Sheria ni ipi?", options: ["Fanya hivyo kama mshangao", "Fanya hivyo kama inasikika vizuri", "Fanya hivyo kwenye kompyuta za shule tu", "Kwa ruhusa yake iliyo wazi tu"], answer: 3, why: "Sauti ni kitu binafsi; pata ruhusa iliyo wazi au usiitumie." },
      { objective: "O5", q: "Huna uhakika kama sauti inaruhusiwa kutumika. Chaguo salama zaidi ni:", options: ["Iache nje au muulize mtu mzima unayemwamini", "Itumie na utumaini", "Ifiche ndani ya mchanganyiko", "Badilisha jina la faili"], answer: 0, why: "Usipokuwa na uhakika, iache nje au uliza." },
      { objective: "O6", q: "Kwa nini usikilize kwa headphones na pia kwa spika ya simu?", options: ["Inatakiwa kisheria", "Kukagua kama mchanganyiko unasikika vizuri kwenye vifaa tofauti", "Kuongeza sauti", "Kuuhamisha"], answer: 1, why: "Mchanganyiko unasikika tofauti kwenye vifaa tofauti." },
      { objective: "O6", q: "Unapochapisha wimbo wako hadharani, unapaswa kuweka siri:", options: ["Jina la wimbo", "Jina lako la msanii", "Jina lako kamili, shule yako na mahali ulipo", "Aina ya muziki"], answer: 2, why: "Taarifa binafsi zinabaki siri mtandaoni." },
      { objective: "O6", q: "Wimbo wako ni wa darasa la muziki. Kuhusu AI, unapaswa:", options: ["Kuficha kuwa uliitumia", "Kuiomba AI iandike maelezo yanayodai hakuna AI", "Kuacha maelezo ya sifa", "Kufuata sheria za mwalimu wako na kusema ulivyoitumia"], answer: 3, why: "Kusema ukweli kuhusu matumizi ya AI ni sehemu ya sheria za shule." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 8, 10, 13, 14, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Biti", objective: "O2", notYet: "Hakuna ngoma, au kuna sauti moja tu.", meets: "Biti yenye ngoma na angalau sauti nyingine moja, kwa tempo inayolingana na hisia.", exceeds: "Mwanafunzi anaweza kueleza kwa nini alichagua tempo hiyo." },
      { name: "Muundo wa wimbo", objective: "O4", notYet: "Hakuna utangulizi, beti au kiitikio kilicho wazi.", meets: "Kama sekunde 60 zenye utangulizi, beti na kiitikio vinavyosikika tofauti kidogo.", exceeds: "Kiitikio kinaonekana wazi, kwa mfano kwa kuongeza besi au melodia." },
      { name: "Mashairi yake mwenyewe", objective: "O3", notYet: "Mashairi hayapo au yamenakiliwa kutoka AI.", meets: "Angalau mistari minne kwa maneno ya mwanafunzi mwenyewe inayolingana na biti.", exceeds: "Mashairi yanatumia mada ya kweli kutoka maisha ya mwanafunzi na yanaonyesha mawazo ya AI yaliyobadilishwa." },
      { name: "Ya asili na inayoruhusiwa", objective: "O5", notYet: "Inatumia wimbo ulionakiliwa, sampuli isiyo na leseni au nakala ya AI ya sauti halisi.", meets: "Kila sauti imetengenezwa na mwanafunzi au inaruhusiwa na studio, na hakuna sauti halisi iliyonakiliwa.", exceeds: "Inajumuisha orodha ya kila sauti na ilikotoka." },
      { name: "Export na sifa", objective: "O6", notYet: "Haijahamishwa, au hakuna maelezo ya sifa.", meets: "Imehamishwa kama faili la sauti pamoja na maelezo ya sifa yanayosema AI ilivyotumika.", exceeds: "Mchanganyiko ulikaguliwa kwa headphones na kwa spika ya simu na kurekebishwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotengeneza wimbo wa pili wa asili ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoshiriki wimbo kwa usalama na familia, darasa au maonyesho ya programu ya vijana",
      "Wanafunzi wanaojiunga na darasa, klabu au programu ya muziki ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya shule au ya maktaba yenye intaneti",
      "Vipokea sauti (headphones)",
      "BandLab au studio nyingine ya bure ya mtandaoni, kwa ruhusa ya mzazi au mlezi kwa walio chini ya miaka 18",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kuutumia",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Kagua sheria za umri za kila zana kabla ya darasa na kusanya ruhusa za wazazi au walezi kwa usajili; kuwa na akaunti ya mfano tayari ikihitajika.",
      "Toa headphones ili wanafunzi waweze kufanya kazi bega kwa bega katika maabara.",
      "Pitia orodha ya sauti ya kila mwanafunzi kabla ya export ili kugundua nyimbo zilizonakiliwa, sampuli zisizo na leseni au sauti zilizoigwa.",
      "Andaa kipindi cha kusikiliza ndani ya kikundi tu, na familia zikubali kabla ya chochote kuchapishwa hadharani.",
      "Pima wimbo kwa rubriki na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
