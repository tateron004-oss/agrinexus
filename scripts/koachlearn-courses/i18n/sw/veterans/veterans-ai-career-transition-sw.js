"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-career-transition.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-career-transition-sw",
  lang: "sw",
  translationOf: "veterans-ai-career-transition",
  category: "Veterans (military)",
  name: "AI kwa Kuhamia Kazi ya Kiraia na Kupata Ajira",
  skills: "Kupata msaada rasmi wa kuhamia maisha ya kiraia, Kusoma tangazo la kazi kutafuta maneno muhimu, Kuandika CV ya kiraia inayolingana na kazi, Kuandika barua fupi ya maombi na maelezo ya wasifu, Kufanya mazoezi ya mahojiano na AI, Kutambua ulaghai wa kazi",
  outcome: "kutumia msaidizi wa AI kuandika CV ya kiraia ya ukurasa mmoja inayolingana na tangazo moja halisi la kazi, na jibu la sekunde 60 la \"niambie kuhusu wewe\", kukagua vyote viwili kuona ni kweli na havina taarifa binafsi, na kujua mahali pa kupata msaada rasmi wa bure.",
  about: [
    "Kozi hii ni kwa maveterani (wanajeshi wastaafu) na wanajeshi wanaojiandaa kuacha jeshi, wanaoomba kazi za kiraia nchini Marekani. Uzoefu tayari unao; kazi sasa ni kuuonyesha kwa maneno ambayo meneja wa kuajiri wa kiraia anaelewa, na kuwa tayari kwa mahojiano.",
    "Utapata msaada rasmi wa bure, utasoma tangazo la kazi kama meneja wa kuajiri, utatumia msaidizi wa AI wa bure kutengeneza CV inayolingana na kazi, barua fupi ya maombi na maelezo mafupi ya wasifu mtandaoni, na utafanya mazoezi ya majibu ya mahojiano. Pia utajifunza kutambua ulaghai wa kazi.",
    "Kila somo linachukua kama dakika tano: soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa mwishoni mwa kila sura, na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Chagua tangazo moja halisi la kazi ya kiraia. Tumia msaidizi wa AI kuandika CV ya ukurasa mmoja inayolingana nalo (angalau vipengele vitano vyenye maneno ya kiraia na namba) na jibu la sekunde 60 la \"niambie kuhusu wewe\". Hakikisha kila dai ni kweli, hakuna namba ya Social Security, DD-214 wala namba nyingine binafsi, na fanya mazoezi ya jibu kwa sauti mara mbili.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Maveterani na wanajeshi wanaojiandaa kuacha jeshi wanaoomba kazi za kiraia, kuanzia walio katika kipindi chao cha kwanza cha utumishi hadi waliostaafu.",
    startingPoint: "Wana uzoefu halisi, nidhamu na uongozi, na wanaweza kutumia kompyuta au simu janja. Wengi hawajawahi kuandika CV ya kiraia inayolingana na tangazo au kufanya mazoezi ya mahojiano ya kiraia, na wachache wametumia msaidizi wa AI kuwasaidia.",
    gap: "Mameneja wa kuajiri wa kiraia na programu zinazochuja CV hutafuta maneno ya tangazo lenyewe na matokeo yaliyo wazi, na ulaghai wa kazi unawalenga watu walio katika kipindi cha kuhama. Wanafunzi wanahitaji kutumia AI kuandaa CV ya kweli isiyo na taarifa binafsi na jibu la mahojiano kwa tangazo moja halisi, na kujua mahali pa kupata msaada rasmi wa bure.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: kompyuta ni rahisi zaidi kwa kazi ya CV; simu janja inafaa kwa mazoezi",
      "Faragha: hakuna namba ya Social Security, DD-214 wala namba nyingine binafsi katika prompt yoyote ya AI au CV",
      "Uaminifu: kila dai na kila namba kwenye CV lazima iwe kweli",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya miadi ya kuhama na kazi"
    ],
    prerequisites: "Hakuna. Kozi \"Introduction to AI and the Future Workforce\" (Utangulizi wa AI na Kazi za Baadaye) inawasaidia wanafunzi kwanza kugeuza majukumu ya jeshi kuwa vipengele vya kiraia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kulingana na hatua uliyofikia katika kuhama", action: "kutambua vyanzo rasmi vya bure vya msaada wa kazi na kuchagua kimoja cha kuwasiliana nacho", standard: "ukiwa umeandika njia ya kuwasiliana au miadi" },
    { id: "O2", condition: "Ukipewa tangazo moja halisi la kazi", action: "kuorodhesha mambo ya lazima, mambo ya ziada na maneno muhimu kwa msaada wa AI na kuyalinganisha na ujuzi wako", standard: "ukiwa na angalau maneno muhimu 10 kutoka kwenye tangazo" },
    { id: "O3", condition: "Ukitumia orodha yako ya maneno muhimu", action: "kuandika CV ya kiraia ya ukurasa mmoja inayolingana na tangazo kwa msaada wa AI", standard: "ikiwa na angalau vipengele vitano kwa maneno ya kiraia na namba, kila dai likiwa kweli na bila namba binafsi" },
    { id: "O4", condition: "Kwa kazi hiyo hiyo", action: "kuandika barua fupi ya maombi na maelezo ya wasifu mtandaoni kwa msaada wa AI", standard: "zikiwa zimehaririwa ili zisikike kama wewe" },
    { id: "O5", condition: "AI ikijifanya meneja wa kuajiri", action: "kufanya mazoezi kwa sauti ya jibu la sekunde 60 la \"niambie kuhusu wewe\" na majibu ya STAR", standard: "angalau mara mbili, ukiandika jambo moja zuri na jambo moja la kurekebisha" },
    { id: "O6", condition: "Unapotafuta kazi", action: "kutafuta kazi kwenye vyanzo rasmi na kutambua dalili za hatari za ulaghai wa kazi", standard: "bila kulipa chochote na bila kutoa namba binafsi kabla ya ofa halisi ya kazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutengeneza CV yako ya kiraia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Msaada rasmi wa bure wa kuhama na kupata kazi",
          minutes: 5,
          goal: "Taja vyanzo vitatu rasmi vya bure vya msaada wa kazi na uchague kimoja cha kuwasiliana nacho.",
          text: [
            "Huhitaji kufanya hivi peke yako. Transition Assistance Program (TAP, Mpango wa Msaada wa Kuhama) unaendeshwa na mashirika kadhaa, yakiwemo Department of Labor (Wizara ya Kazi), Department of Defense (Wizara ya Ulinzi) na VA (Idara ya Masuala ya Maveterani). Sehemu ya Department of Labor ina warsha za ajira na msaada wa mtu mmoja mmoja kupitia Employment Navigator and Partnership Program katika kambi fulani. Pata ratiba za madarasa kupitia ofisi ya kuhama ya kambi yako.",
            "Ukishaondoka jeshini, American Job Centers (vituo karibu 2,400 nchi nzima, vinavyopatikana kupitia CareerOneStop) vinasaidia kutafuta kazi na mafunzo, na maveterani wanahudumiwa kwanza. Mpango wa VA wa Personalized Career Planning and Guidance unatoa ushauri wa bure kuhusu kazi na elimu, pamoja na msaada wa CV, kwa maveterani na wanajeshi wanaostahili.",
            "AI ni mshirika mzuri wa kuandika, lakini mshauri aliyefunzwa anajua soko la kazi la eneo lako na mafao yako. Tumia vyote viwili."
          ],
          steps: ["Bado uko jeshini: wasiliana na ofisi ya kuhama ya kambi yako kuhusu TAP.", "Umeshatoka jeshini: tafuta American Job Center iliyo karibu nawe kwenye CareerOneStop.", "Soma ukurasa wa VA wa Personalized Career Planning and Guidance na uangalie kama unastahili.", "Panga miadi moja wiki hii."],
          words: [["TAP", "Transition Assistance Program: mafunzo na msaada kwa wanajeshi wanaohamia maisha ya kiraia."], ["American Job Center", "kituo cha bure kinachofadhiliwa na Department of Labor kwa msaada wa kutafuta kazi na mafunzo."], ["Kuhudumiwa kwanza (priority of service)", "maveterani wanahudumiwa kwanza katika programu nyingi za kazi na mafunzo za Department of Labor."]],
          slides: [
            { title: "Bado uko jeshini", bullets: ["Transition Assistance Program (TAP)", "Warsha za ajira za DOL (Wizara ya Kazi)", "Msaada wa mtu mmoja mmoja katika kambi fulani"] },
            { title: "Ukishaondoka", bullets: ["American Job Centers, kupitia CareerOneStop", "Maveterani wanahudumiwa kwanza", "Ushauri wa bure wa kazi kutoka VA"] },
            { title: "Tumia vyote viwili", bullets: ["AI kwa msaada wa kuandika", "Mshauri kwa kazi za eneo lako na mafao"] }
          ],
          sources: [
            { name: "U.S. Department of Labor: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Chagua chanzo kimoja rasmi kutoka somo hili kinachokufaa sasa. Tafuta ukurasa wake au ofisi iliyo karibu, na uandike jinsi ya kuwasiliana nacho. Panga au andaa miadi moja.",
          youCanNow: "kutaja vyanzo rasmi vya bure vya msaada wa kazi na kuchagua kinachofaa kuwasiliana nacho.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni chanzo rasmi cha bure cha msaada wa kazi kwa wanajeshi wanaohama?", options: ["Tovuti ya CV ya kulipia kutoka tangazo", "Mtu usiyemjua kwenye mitandao ya kijamii", "TAP kwenye ofisi ya kuhama ya kambi yako", "Ujumbe mfupi unaoahidi kazi ya uhakika"], answer: 2, why: "TAP ni mpango rasmi wa bure wa kuhama kwa wanajeshi." },
            { objective: "O1", q: "Umetumia AI kuandaa CV yako. Unafanya nini kingine?", options: ["Kumwomba mshauri wa TAP, American Job Center au VA aikague", "Kuituma kwa kila kazi bila kuisoma", "Kuacha washauri kwa sababu AI inatosha", "Kuiweka hadharani pamoja na namba yako ya simu"], answer: 0, why: "AI inakusaidia kuandika, lakini mshauri anajua kazi za eneo lako na mafao, na anaweza kugundua makosa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusoma tangazo la kazi kama meneja wa kuajiri",
          minutes: 5,
          goal: "Toa mahitaji muhimu na maneno muhimu kutoka kwenye tangazo la kazi kwa msaada wa AI.",
          text: [
            "Kila tangazo la kazi linakuambia kile mwajiri anataka kusikia. Kampuni nyingi zinatumia applicant tracking system (ATS, mfumo wa kufuatilia waombaji) unaochuja CV kutafuta maneno yanayolingana na tangazo, kwa hiyo kutumia maneno ya tangazo lenyewe ni muhimu.",
            "Nakili tangazo halisi kwenye msaidizi wa AI na uulize: \"Orodhesha mahitaji ya lazima, ujuzi wa ziada, na maneno muhimu 10 zaidi kutoka kwenye tangazo hili. Kisha niambie ujuzi wangu upi unalingana: nilikuwa mkuu wa vifaa (supply chief) katika Marine Corps kwa miaka 7, niliongoza Marines 10, na nilisimamia vifaa vya thamani ya $2 milioni.\"",
            "Kagua orodha ya AI dhidi ya tangazo wewe mwenyewe. Ukitimiza mengi ya mambo ya lazima, omba kazi. Watu wengi huomba bila kutimiza kila jambo la ziada."
          ],
          steps: ["Chagua tangazo moja halisi la kazi.", "Bandika tangazo (si taarifa zako binafsi) kwenye msaidizi wa AI.", "Omba mambo ya lazima, mambo ya ziada na maneno muhimu zaidi.", "Uliza ujuzi wako upi unalingana.", "Kagua orodha dhidi ya tangazo wewe mwenyewe."],
          words: [["Applicant tracking system (ATS)", "programu ambayo waajiri wanatumia kukusanya CV na kuzichuja kutafuta maneno yanayolingana."], ["Neno muhimu (keyword)", "neno au kifungu muhimu kutoka kwenye tangazo, kama \"udhibiti wa stoo\" (inventory control)."], ["Jambo la lazima (must-have)", "hitaji unalopaswa kuwa nalo ili ufikiriwe."]],
          slides: [
            { title: "Tangazo linakuambia cha kusema", bullets: ["Waajiri wanachuja kutafuta maneno yanayolingana", "Tumia maneno ya tangazo lenyewe"] },
            { title: "Omba AI ikutolee", bullets: ["Mahitaji ya lazima", "Ujuzi wa ziada", "Maneno muhimu 10 zaidi", "Ujuzi wako upi unalingana"] },
            { title: "Kisha amua", bullets: ["Kagua orodha wewe mwenyewe", "Unatimiza mengi ya mambo ya lazima? Omba kazi"] }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi ambayo ungeitaka. Omba msaidizi wa AI aorodheshe mambo yake ya lazima, mambo ya ziada na maneno muhimu 10 zaidi, na ujuzi wako upi unalingana.",
          youCanNow: "kutoa mahitaji na maneno muhimu kutoka kwenye tangazo la kazi na kuyalinganisha na uzoefu wako.",
          quickCheck: [
            { objective: "O2", q: "Jambo la ziada (nice-to-have) katika tangazo la kazi ni nini?", options: ["Hitaji unalopaswa kutimiza ili kuomba", "Mshahara", "Anwani ya kampuni", "Ujuzi unaosaidia lakini si wa lazima"], answer: 3, why: "Mambo ya ziada ni nyongeza; bado unaweza kuomba ukitimiza mengi ya mambo ya lazima." },
            { objective: "O2", q: "Unabandika tangazo la kazi kwenye AI. Unaomba nini?", options: ["\"Je, kazi hii ni nzuri?\"", "\"Orodhesha mambo ya lazima, mambo ya ziada na maneno muhimu 10 zaidi, na ujuzi wangu upi unalingana.\"", "\"Niombee kazi.\"", "\"Andika namba yangu ya Social Security juu yake.\""], answer: 1, why: "Ombi lililo wazi linatoa mahitaji na maneno muhimu unayohitaji kurekebisha CV yako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika CV ya kiraia inayolingana na kazi",
          minutes: 6,
          goal: "Tumia AI kuandaa CV ya ukurasa mmoja inayolingana na tangazo moja, yenye maneno ya kiraia na namba.",
          text: [
            "CV ya kiraia kwa kawaida ni ukurasa mmoja au miwili, si rekodi kamili ya utumishi. Ina muhtasari mfupi juu, uzoefu wako kwa vipengele, ujuzi wako, elimu yako na vyeti. Tumia vyeo vya kiraia vinapofaa (\"supply chain supervisor\", msimamizi wa mnyororo wa ugavi, badala ya \"supply chief\") na eleza ulichofanya, ukubwa wake, na matokeo.",
            "Ipe AI uzoefu wako kwa maneno rahisi na maneno muhimu kutoka Somo la 2: \"Andika CV ya ukurasa mmoja kwa tangazo hili la mratibu wa usafirishaji na ugavi (logistics coordinator). Tumia maneno haya muhimu. Uzoefu wangu: [maelezo rahisi]. Tumia vitenzi vyenye nguvu na namba, bila vifupisho vya kijeshi.\"",
            "Usiweke namba yako ya Social Security, taarifa za DD-214, tarehe kamili ya kuzaliwa, wala taarifa za kibali cha usalama (security clearance) zaidi ya kile tangazo linachouliza. Kamwe usiiruhusu AI iongeze vitu ambavyo hukufanya. Kisha mwombe mshauri wa TAP, American Job Center au VA aikague."
          ],
          steps: ["Andika uzoefu wako kwa maneno rahisi: nini, ukubwa gani, matokeo gani.", "Ipe AI maneno muhimu kutoka kwenye tangazo.", "Omba CV ya ukurasa mmoja yenye muhtasari, vipengele vya uzoefu na ujuzi.", "Badilisha maneno ya kijeshi na hakikisha kila dai ni kweli.", "Ondoa taarifa binafsi na mwombe mshauri aikague."],
          words: [["Muhtasari (summary)", "mistari miwili au mitatu juu ya CV inayosema wewe ni nani na unatoa nini."], ["Kurekebisha CV ilingane (tailor)", "kubadilisha CV yako ili ilingane na kazi moja maalum."]],
          slides: [
            { title: "Muundo wa CV ya kiraia", bullets: ["Muhtasari mfupi", "Vipengele vya uzoefu vyenye matokeo", "Ujuzi, elimu, vyeti"] },
            { title: "Sema kwa njia yao", bullets: ["Vyeo vya kiraia vinapofaa", "Nini, ukubwa gani, matokeo gani", "Tumia maneno muhimu ya tangazo"] },
            { title: "Iwe ya kweli na salama", bullets: ["Hakuna SSN, taarifa za DD-214 wala tarehe kamili ya kuzaliwa", "Kamwe usiiruhusu AI iongeze usichofanya", "Mwombe mshauri aikague"] }
          ],
          tryIt: "Tumia orodha yako ya maneno muhimu kutoka Somo la 2. Mwombe msaidizi wa AI aandae CV ya ukurasa mmoja kwa tangazo hilo. Badilisha mstari wowote usio kweli kabisa.",
          youCanNow: "kuandika CV ya kiraia ya ukurasa mmoja inayolingana na tangazo maalum la kazi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini CV inayolingana na kazi inatumia maneno ya tangazo lenyewe?", options: ["Ili programu ya kuchuja na meneja wa kuajiri waone inavyolingana", "Ili iwe ndefu zaidi", "Ili itumie maneno ya kijeshi", "Ili uache barua ya maombi"], answer: 0, why: "Mifumo ya kufuatilia waombaji na mameneja wa kuajiri hutafuta maneno muhimu ya tangazo." },
            { objective: "O3", q: "Rasimu ya AI inasema una cheti ambacho huna. Unafanya nini?", options: ["Kuiacha; hakuna anayekagua", "Kusema unakaribia kukipata", "Kukiondoa ili kila dai liwe kweli", "Kuongeza vyeti vingine viwili"], answer: 2, why: "Kila dai kwenye CV yako lazima liwe kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutengeneza CV yako ya kiraia",
        questions: [
          { objective: "O1", q: "Unaacha jeshi mwezi ujao na unataka msaada wa kazi wa mtu mmoja mmoja. Mahali pazuri pa kuanzia ni:", options: ["Ofisi ya kuhama ya kambi yako na TAP", "Tovuti yoyote ya kazi", "Mtu maarufu wa mitandao ya kijamii", "Huduma ya kulipa ili kuomba kazi"], answer: 0, why: "TAP na Department of Labor zinatoa warsha na msaada wa mtu mmoja mmoja." },
          { objective: "O2", q: "Applicant tracking system ni nini?", options: ["GPS ya kwenda kwenye mahojiano", "Programu inayochuja CV kutafuta maneno yanayolingana", "Fao la VA", "Hifadhidata ya jeshi"], answer: 1, why: "Waajiri wengi wanaitumia kupanga CV." },
          { objective: "O2", q: "Kwa nini utumie maneno ya tangazo la kazi lenyewe kwenye CV yako?", options: ["Kumnakili mwajiri", "Kuifanya ndefu zaidi", "Ili programu ya kuchuja na mameneja wa kuajiri waone inavyolingana", "Inatakiwa na sheria"], answer: 2, why: "Maneno muhimu yanayolingana yanaonyesha unafaa kazi." },
          { objective: "O3", q: "Kipengele kipi cha CV kinafaa zaidi kwa kazi ya kiraia ya usafirishaji na ugavi?", options: ["\"S4 shop NCOIC\"", "\"Nilifanya mambo ya vifaa\"", "\"Hooah\"", "\"Nilisimamia vifaa vya $2 milioni bila hasara katika ukaguzi 3 wa stoo\""], answer: 3, why: "Maneno ya kiraia, namba na matokeo." },
          { objective: "O3", q: "Kipi usiweke kwenye CV ya kiraia?", options: ["Namba yako ya Social Security", "Ujuzi wako", "Muhtasari mfupi", "Vyeti vyako"], answer: 0, why: "Namba binafsi hazifai kuwa kwenye CV." }
        ]
      }
    },
    {
      name: "Sura 2: Kuomba kazi na mahojiano",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika barua fupi ya maombi na maelezo ya wasifu",
          minutes: 5,
          goal: "Tumia AI kuandika barua fupi ya maombi na maelezo ya wasifu mtandaoni kwa sauti yako mwenyewe.",
          text: [
            "Barua ya maombi (cover letter) ni barua fupi inayosema kwa nini unataka kazi hii na kwa nini unafaa. Iwe na aya tatu fupi: kwa nini kazi hii, mambo yako mawili au matatu bora yanayolingana pamoja na ushahidi, na hitimisho la adabu.",
            "Uliza AI: \"Andika barua ya maombi ya aya 3 kwa tangazo hili, ukitumia CV yangu. Isikike kwa kujiamini lakini isiwe ngumu, bila maneno ya kijeshi.\" Kisha ifanye isikike kama wewe: badilisha maneno ambayo usingeyasema kamwe.",
            "Maelezo ya wasifu mtandaoni (profile summary), kwa mfano kwenye LinkedIn, ni sentensi mbili hadi nne kuhusu wewe ni nani na unataka kazi gani. Omba AI matoleo matatu, chagua moja na ulihariri."
          ],
          steps: ["Ipe AI tangazo na CV yako.", "Omba barua ya maombi ya aya tatu.", "Ihariri ili isikike kama wewe.", "Omba matoleo matatu ya maelezo ya wasifu ya sentensi mbili hadi nne.", "Chagua moja, lihariri na ulitumie."],
          words: [["Barua ya maombi (cover letter)", "barua fupi inayotumwa pamoja na CV ikisema kwa nini unataka kazi na unafaa."], ["Maelezo ya wasifu (profile summary)", "sentensi chache kuhusu wewe juu ya wasifu wako wa kazi mtandaoni."]],
          slides: [
            { title: "Barua ya maombi: aya tatu", bullets: ["Kwa nini kazi hii", "Mambo yako bora yanayolingana, pamoja na ushahidi", "Hitimisho la adabu"] },
            { title: "Ifanye iwe yako", bullets: ["Kwa kujiamini, si ngumu", "Bila maneno ya kijeshi", "Badilisha maneno ambayo usingeyasema"] },
            { title: "Maelezo ya wasifu", bullets: ["Sentensi mbili hadi nne", "Wewe ni nani na unataka kazi gani", "Omba AI matoleo matatu"] }
          ],
          tryIt: "Mwombe msaidizi wa AI barua ya maombi ya aya tatu kwa kazi kutoka Somo la 2. Badilisha angalau vifungu vitatu ili isikike kama wewe.",
          youCanNow: "kuandika barua fupi ya maombi na maelezo ya wasifu kwa msaada wa AI, kwa sauti yako mwenyewe.",
          quickCheck: [
            { objective: "O4", q: "Barua nzuri ya maombi ni ndefu kiasi gani?", options: ["Sentensi moja", "Aya tatu fupi", "Kurasa tatu kamili", "Ndefu kama CV yako"], answer: 1, why: "Aya tatu fupi zinaeleza kwa nini kazi hii, mambo yako bora yanayolingana na hitimisho la adabu." },
            { objective: "O4", q: "Barua ya maombi ya AI inatumia maneno ambayo usingeyasema kamwe. Unafanya nini?", options: ["Kuituma ilivyo", "Kuomba toleo refu zaidi", "Kunakili barua ya rafiki badala yake", "Kubadilisha angalau vifungu vitatu ili isikike kama wewe"], answer: 3, why: "Barua yako inapaswa kusikika kama wewe, ili mahojiano yalingane na barua." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufanya mazoezi ya mahojiano na AI",
          minutes: 6,
          goal: "Fanya mazoezi ya utambulisho wa sekunde 60 na majibu mawili ya STAR na AI inayokuhoji.",
          text: [
            "Mahojiano mengi yanaanza na \"Niambie kuhusu wewe\" (\"Tell me about yourself\"). Jibu zuri linachukua kama sekunde 60: wewe ni nani sasa, uzoefu wako unaohusika zaidi, na kwa nini unataka kazi hii. Usisimulie historia yako yote ya utumishi.",
            "Kwa maswali ya \"Niambie kuhusu wakati ambapo...\", tumia STAR: hali (situation), jukumu (task), kitendo (action), matokeo (result). Mfano: \"Utayari wa magari ya kikosi chetu ulikuwa 70% (hali). Niliombwa kuuongeza kabla ya ukaguzi (jukumu). Niliweka daftari la kila siku la kufuatilia vipuri na ratiba ya zamu mbili (kitendo). Utayari ulifika 92% ndani ya wiki sita (matokeo).\"",
            "Omba AI ijifanye mhoji: \"Jifanye meneja wa kuajiri wa kazi hii. Niulize swali moja kwa wakati. Baada ya kila jibu, niambie jambo moja nililofanya vizuri na jambo moja la kuboresha.\" Fanya mazoezi kwa sauti. Ukitumia hali ya sauti (voice mode), ongea kwa kawaida."
          ],
          steps: ["Andika jibu la sekunde 60 la \"niambie kuhusu wewe\".", "Andika hadithi mbili za STAR kutoka utumishi wako.", "Omba AI iwe mhoji, swali moja kwa wakati.", "Jibu kwa sauti na uombe jambo moja zuri na jambo moja la kurekebisha kila mara.", "Fanya mazoezi hadi ujisikie kawaida."],
          words: [["STAR", "situation, task, action, result (hali, jukumu, kitendo, matokeo): njia ya kusimulia hadithi fupi kuhusu kazi yako."], ["Swali la tabia (behavioral question)", "swali la mahojiano linalouliza kuhusu wakati ulipofanya jambo fulani."]],
          slides: [
            { title: "\"Niambie kuhusu wewe\"", bullets: ["Kama sekunde 60", "Wewe ni nani sasa", "Uzoefu unaohusika zaidi", "Kwa nini kazi hii"] },
            { title: "Majibu ya STAR", bullets: ["Hali (situation)", "Jukumu (task)", "Kitendo (action)", "Matokeo (result), pamoja na namba ukiweza"] },
            { title: "AI kama mhoji", bullets: ["Swali moja kwa wakati", "Jambo moja zuri, jambo moja la kurekebisha baada ya kila jibu", "Fanya mazoezi kwa sauti"] }
          ],
          tryIt: "Mwombe msaidizi wa AI ajifanye meneja wa kuajiri wa kazi uliyochagua. Jibu maswali matatu kwa sauti, pamoja na \"Niambie kuhusu wewe\", na uandike maoni uliyopewa.",
          youCanNow: "kutoa utambulisho wa sekunde 60 na kujibu maswali ya tabia kwa kutumia STAR.",
          quickCheck: [
            { objective: "O5", q: "Herufi A katika jibu la STAR inasimama kwa nini?", options: ["Award (tuzo)", "Attitude (mtazamo)", "Action (kitendo)", "Answer (jibu)"], answer: 2, why: "STAR ni hali, jukumu, kitendo, matokeo; kitendo ni kile ulichofanya." },
            { objective: "O5", q: "Unataka kufanya mazoezi na AI inayokuhoji. Ombi lipi unatumia?", options: ["\"Niulize swali moja kwa wakati na unipe jambo moja zuri na jambo moja la kurekebisha.\"", "\"Nipe majibu yote nikariri.\"", "\"Niulize maswali 30 kwa mara moja.\"", "\"Niambie kwamba mimi ni mkamilifu.\""], answer: 0, why: "Swali moja kwa wakati pamoja na maoni kunakuwezesha kufanya mazoezi na kuboresha kila jibu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutafuta kwa busara na kutambua ulaghai wa kazi",
          minutes: 5,
          goal: "Tafuta kazi kwenye vyanzo rasmi na utambue dalili za hatari za ulaghai wa kazi.",
          text: [
            "Tafuta mahali kazi halisi zinapotangazwa: tovuti za kampuni, CareerOneStop Job Finder, American Job Centers, na kwa kazi za serikali kuu USAJOBS na tovuti ya FedsHireVets ya Office of Personnel Management (OPM, Ofisi ya Usimamizi wa Wafanyakazi), inayoeleza jinsi serikali kuu inavyoajiri maveterani, pamoja na kipaumbele kwa maveterani (veterans' preference).",
            "Walaghai wanawalenga watu wanaotafuta kazi. Dalili za hatari: ofa ya kazi bila mahojiano, ombi la kulipia mafunzo au vifaa, hundi (check) ya kuweka benki kisha kurudisha sehemu ya pesa, mahojiano kwa ujumbe wa maandishi tu, au ombi la namba yako ya Social Security au taarifa za benki kabla ya ofa halisi.",
            "Omba AI ikuonyeshe dalili za hatari katika tangazo la kutiliwa shaka, baada ya kuondoa taarifa zako. Kisha kagua kampuni wewe mwenyewe kwenye tovuti yake rasmi. Toa taarifa binafsi tu kwa makaratasi halisi, baada ya ofa halisi, kupitia utaratibu rasmi wa mwajiri."
          ],
          steps: ["Tafuta kwenye tovuti za kampuni, CareerOneStop, American Job Centers na USAJOBS.", "Angalia dalili za hatari: bila mahojiano, malipo ya mbele, hundi ya kurudisha pesa, mahojiano kwa maandishi tu.", "Usitoe SSN wala taarifa za benki kabla ya ofa halisi.", "Kagua kampuni kwenye tovuti yake rasmi.", "Omba AI iorodheshe dalili za hatari katika tangazo la kutiliwa shaka."],
          words: [["Kipaumbele kwa maveterani (veterans' preference)", "sheria zinazowapa maveterani wanaostahili nafasi bora katika kuajiriwa na serikali kuu."], ["Ulaghai wa kazi", "ofa ya kazi ya uongo inayolenga kuiba pesa au taarifa binafsi."]],
          slides: [
            { title: "Tafuta mahali kazi halisi zilipo", bullets: ["Tovuti za kampuni", "CareerOneStop na American Job Centers", "USAJOBS na FedsHireVets kwa kazi za serikali kuu"] },
            { title: "Dalili za hatari za ulaghai wa kazi", bullets: ["Ofa bila mahojiano", "Kulipia mafunzo au vifaa", "Kuweka hundi benki na kurudisha pesa", "Mahojiano kwa maandishi tu"] },
            { title: "Jilinde", bullets: ["Hakuna SSN wala taarifa za benki kabla ya ofa halisi", "Kagua kampuni wewe mwenyewe", "Omba AI ikuonyeshe dalili za hatari"] }
          ],
          sources: [
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "Office of Personnel Management: FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Kazi ya mwisho: maliza CV yako ya ukurasa mmoja inayolingana na tangazo ulilochagua na jibu lako la sekunde 60 la \"niambie kuhusu wewe\". Hakikisha kila dai ni kweli na hakuna namba binafsi, kisha sema jibu kwa sauti mara mbili.",
          youCanNow: "kutafuta kazi kwenye vyanzo rasmi, kuepuka ulaghai wa kazi, na kuomba kazi kwa CV inayolingana na kazi na utambulisho uliofanyiwa mazoezi.",
          quickCheck: [
            { objective: "O6", q: "Kazi za serikali kuu ya Marekani zinatangazwa wapi?", options: ["Kwenye mitandao ya kijamii tu", "Kwenye ujumbe kutoka kwa watu usiowajua", "Kwenye tovuti za CV za kulipia", "USAJOBS"], answer: 3, why: "USAJOBS ni tovuti rasmi ya matangazo ya kazi za serikali kuu." },
            { objective: "O6", q: "Mtu anayeajiri anaomba namba yako ya Social Security kabla ya mahojiano yoyote. Unafanya nini?", options: ["Kuituma ili usikose kazi", "Kutoituma; itoe tu kwa makaratasi halisi baada ya ofa halisi", "Kutuma nusu yake", "Kutuma DD-214 yako badala yake"], answer: 1, why: "Kuomba namba binafsi kabla ya mahojiano au ofa yoyote ni dalili ya hatari ya ulaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuomba kazi na mahojiano",
        questions: [
          { objective: "O4", q: "Barua nzuri ya maombi ni:", options: ["Ndefu ya kurasa tano", "Aya tatu fupi: kwa nini kazi hii, mambo yako bora yanayolingana, hitimisho la adabu", "Nakala ya CV yako", "Iliyojaa vifupisho vya kijeshi"], answer: 1, why: "Fupi, yenye lengo na inayolingana na kazi." },
          { objective: "O5", q: "Jibu la \"niambie kuhusu wewe\" linapaswa kuchukua kama:", options: ["Dakika 10", "Historia yako yote ya utumishi", "Sekunde 60: wewe ni nani, uzoefu unaohusika, kwa nini kazi hii", "Historia ya familia yako"], answer: 2, why: "Fupi na lenye lengo la kazi hiyo." },
          { objective: "O5", q: "Herufi R katika STAR inasimama kwa nini?", options: ["Rank (cheo)", "Reason (sababu)", "Report (ripoti)", "Result (matokeo)"], answer: 3, why: "Malizia kwa matokeo, ikiwezekana pamoja na namba." },
          { objective: "O6", q: "\"Kampuni\" inakupa kazi bila mahojiano na inakuomba ulipie mafunzo. Hii ni:", options: ["Dalili ya hatari ya ulaghai wa kazi", "Ofa ya kawaida ya kazi", "Fao la maveterani", "Kipaumbele kwa maveterani"], answer: 0, why: "Kukosa mahojiano na malipo ya mbele ni dalili za kawaida za ulaghai wa kazi." },
          { objective: "O6", q: "Tovuti ipi inaeleza jinsi serikali kuu inavyoajiri maveterani, pamoja na kipaumbele kwa maveterani?", options: ["Tangazo linalojitokeza ghafla (pop-up)", "FedsHireVets ya OPM", "Kiungo katika ujumbe mfupi", "Chatbot yoyote ya AI"], answer: 1, why: "FedsHireVets ni chanzo cha OPM kwa maveterani wanaotafuta kazi za serikali kuu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kuhamia Kazi ya Kiraia na Kupata Ajira",
    questions: [
      { objective: "O1", q: "TAP inasimama kwa:", options: ["Transition Assistance Program", "Training and Pay", "Total Army Program", "Tech Apprentice Plan"], answer: 0, why: "TAP inawasaidia wanajeshi kuhamia maisha ya kiraia." },
      { objective: "O1", q: "Mashirika gani ni sehemu ya TAP?", options: ["Kampuni binafsi tu", "Kadhaa, yakiwemo Department of Labor, DoD na VA", "Jeshi la Nchi Kavu (Army) tu", "VA tu"], answer: 1, why: "TAP ni juhudi ya mashirika mbalimbali kwa pamoja." },
      { objective: "O1", q: "Maveterani wanaweza kuhudumiwa kwanza wapi kwa msaada wa kutafuta kazi na mafunzo?", options: ["Kwa muuzaji wa magari", "Kwenye kikundi cha mitandao ya kijamii", "American Job Centers", "Tovuti ya kulipa ili kuomba kazi"], answer: 2, why: "Department of Labor inawapa maveterani huduma ya kwanza huko." },
      { objective: "O1", q: "Mpango upi wa VA unatoa ushauri wa bure wa kazi, pamoja na msaada wa CV, kwa maveterani wanaostahili?", options: ["Mikopo ya nyumba ya VA", "TRICARE", "GI Bill Comparison Tool", "Personalized Career Planning and Guidance"], answer: 3, why: "VA inauorodhesha kama ushauri wa bure wa kazi na elimu." },
      { objective: "O1", q: "Kwa nini utumie AI na mshauri pia?", options: ["AI inakusaidia kuandika; mshauri anajua kazi za eneo lako na mafao", "AI hukosea kila wakati", "Washauri wanakuandikia kila kitu", "Unahitaji kimoja tu"], answer: 0, why: "Kila kimoja kinafanya kitu ambacho kingine hakiwezi." },
      { objective: "O2", q: "\"Jambo la lazima\" (must-have) katika tangazo la kazi ni:", options: ["Nyongeza nzuri", "Hitaji unalopaswa kuwa nalo ili ufikiriwe", "Mshahara", "Anwani ya ofisi"], answer: 1, why: "Mambo ya lazima ndiyo mahitaji ya msingi." },
      { objective: "O3", q: "Unapobandika tangazo la kazi kwenye AI, HUPASWI kubandika pia:", options: ["Cheo cha kazi", "Mahitaji", "Namba yako ya Social Security", "Maneno muhimu"], answer: 2, why: "Namba binafsi haziwekwi kamwe kwenye AI." },
      { objective: "O2", q: "Unatimiza mengi ya mambo ya lazima lakini si kila jambo la ziada. Unapaswa:", options: ["Kutoomba kamwe", "Kudanganya kuhusu yaliyobaki", "Kusubiri miaka mitano", "Kuomba kazi"], answer: 3, why: "Watu wengi huomba bila kuwa na kila jambo la ziada." },
      { objective: "O3", q: "Kurekebisha CV ilingane na kazi (tailor) maana yake ni:", options: ["Kuibadilisha ilingane na kazi moja maalum", "Kuifanya ndefu zaidi", "Kuongeza kila kazi uliyowahi kufanya", "Kuichapisha kwa rangi"], answer: 0, why: "Kurekebisha kunalinganisha CV yako na tangazo." },
      { objective: "O3", q: "Kipi ni cheo bora cha kiraia kwa supply chief (mkuu wa vifaa)?", options: ["S4 NCOIC", "Supply chain supervisor (msimamizi wa mnyororo wa ugavi)", "Gunny", "Chief of Stuff"], answer: 1, why: "Vyeo vya kiraia vinawasaidia mameneja wa kuajiri kuelewa nafasi yako." },
      { objective: "O3", q: "Rasimu ya CV ya AI inasema uliongoza watu 50; uliongoza 10. Wewe:", options: ["Unaacha 50, inasikika vizuri zaidi", "Unaibadilisha kuwa 100", "Unaibadilisha kuwa namba ya kweli, 10", "Unaondoa namba zote"], answer: 2, why: "Kila dai lazima liwe kweli." },
      { objective: "O3", q: "Nani anapaswa kukagua CV yako kabla ya kuituma?", options: ["Mtu usiyemjua mtandaoni", "Hakuna mtu", "AI peke yake", "Mshauri wa TAP, American Job Center au VA"], answer: 3, why: "Mshauri aliyefunzwa anaweza kugundua matatizo ambayo AI haioni." },
      { objective: "O4", q: "Maelezo ya wasifu (profile summary) ni:", options: ["Sentensi mbili hadi nne kuhusu wewe ni nani na kazi unayotaka", "Rekodi yako kamili ya utumishi", "Anwani ya nyumbani kwako", "Orodha ya nywila"], answer: 0, why: "Ni utambulisho mfupi juu ya wasifu wa mtandaoni." },
      { objective: "O4", q: "Baada ya AI kuandika barua yako ya maombi, unapaswa:", options: ["Kuituma bila kuisoma", "Kuihariri ili isikike kama wewe", "Kuongeza maneno ya kijeshi", "Kuifanya kurasa tano"], answer: 1, why: "Barua yako inapaswa kusikika kama wewe." },
      { objective: "O5", q: "STAR inasimama kwa:", options: ["Skills, training, awards, rank (ujuzi, mafunzo, tuzo, cheo)", "Start, try, answer, repeat (anza, jaribu, jibu, rudia)", "Situation, task, action, result (hali, jukumu, kitendo, matokeo)", "Speak, think, act, rest (ongea, fikiri, tenda, pumzika)"], answer: 2, why: "STAR ni njia ya kusimulia hadithi fupi ya kazi." },
      { objective: "O5", q: "AI inapokuhoji, ombi zuri ni:", options: ["\"Niulize maswali yote kwa mara moja\"", "\"Nijibie\"", "\"Niambie kwamba mimi ni mkamilifu\"", "\"Niulize swali moja kwa wakati na unipe jambo moja zuri na jambo moja la kurekebisha\""], answer: 3, why: "Moja kwa wakati pamoja na maoni kunajenga ujuzi halisi." },
      { objective: "O5", q: "Kufanya mazoezi ya majibu ya mahojiano kwa sauti kunasaidia kwa sababu:", options: ["Kuongea ni tofauti na kusoma; kunafanya majibu yawe ya kawaida", "Inatakiwa", "AI haiwezi kusoma maandishi", "Ni haraka kuliko kuandika"], answer: 0, why: "Kusema kwa sauti kunakuandaa kwa mahojiano halisi." },
      { objective: "O6", q: "Kazi za serikali kuu zinatangazwa wapi?", options: ["Kwenye mitandao ya kijamii tu", "USAJOBS", "Kwenye ujumbe mfupi", "Kambini tu"], answer: 1, why: "USAJOBS ni tovuti ya kazi ya serikali kuu." },
      { objective: "O6", q: "Mtu anayeajiri anakutumia hundi uiweke benki na anakuomba urudishe sehemu ya pesa. Hii ni:", options: ["Bonasi ya kusaini mkataba", "Fao la VA", "Dalili ya hatari ya ulaghai wa kazi", "Utaratibu wa kawaida wa kuanza kazi"], answer: 2, why: "Hundi ya kuweka benki na kurudisha pesa ni ulaghai wa kawaida." },
      { objective: "O6", q: "Ni lini ni sawa kumpa mwajiri namba yako ya Social Security?", options: ["Katika mazungumzo ya kwanza ya ujumbe", "Ili upate mahojiano", "Kabla ya ofa yoyote", "Kwa makaratasi halisi baada ya ofa halisi, kupitia utaratibu rasmi"], answer: 3, why: "Waajiri halisi wanaihitaji tu kwa makaratasi ya kuajiri baada ya ofa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 5, 7, 8, 10, 12, 14, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Inalingana na tangazo", objective: "O2", notYet: "CV inaweza kuwa ya kazi yoyote; maneno machache ya tangazo yanaonekana.", meets: "CV inatumia maneno muhimu ya tangazo na inaonyesha mambo ya lazima ambayo mwanafunzi anayatimiza.", exceeds: "Mwanafunzi anaweza kuonyesha mahali kila jambo la lazima linaonyeshwa." },
      { name: "Vipengele vya kiraia vyenye namba", objective: "O3", notYet: "Vipengele chini ya vitano, au vipengele vyenye maneno ya kijeshi bila namba.", meets: "Angalau vipengele vitano kwa maneno ya kiraia, vyenye namba au matokeo, kwenye ukurasa mmoja.", exceeds: "Kila kipengele kinaonyesha kilichofanywa, ukubwa wake na matokeo." },
      { name: "Kweli na binafsi zimelindwa", objective: "O6", notYet: "Dai fulani si kweli, au namba ya Social Security, DD-214 au namba nyingine binafsi inaonekana.", meets: "Kila dai ni kweli, na hakuna namba binafsi zinazoonekana.", exceeds: "Mshauri au msomaji anayeaminika ameikagua." },
      { name: "Jibu la sekunde 60", objective: "O5", notYet: "Jibu ni refu sana kuliko sekunde 60 au halihusu kazi hii.", meets: "Kama sekunde 60: wewe ni nani, uzoefu unaohusika na kwa nini kazi hii, limesemwa kwa sauti mara mbili.", exceeds: "Mwanafunzi alitumia maoni ya AI kuboresha sehemu moja kati ya majaribio mawili." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaoomba angalau kazi moja kwa CV yao inayolingana na kazi ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaopata mahojiano au ofa ya kazi ndani ya siku 90",
      "Wanafunzi wanaowasiliana na TAP, American Job Center au ushauri wa kazi wa VA ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti (simu janja inafaa kwa mazoezi ya mahojiano)",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tangazo moja halisi la kazi ya kiraia ambalo mwanafunzi analitaka",
      "Programu ya kuandika kama Google Docs au Microsoft Word kwa CV",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwombe kila mwanafunzi alete tangazo moja halisi la kazi kwenye kipindi cha kwanza.",
      "Wakumbushe wanafunzi kwamba namba za Social Security, DD-214 na namba nyingine binafsi haziwekwi kamwe kwenye prompt ya AI wala kwenye CV.",
      "Baada ya mazoezi na AI, fanyeni mazoezi ya mahojiano kwa jozi: mmoja anauliza, mwingine anajibu kwa sauti, kisha mbadilishane.",
      "Pima CV ya mwisho na jibu kwa kutumia rubric, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Waunganishe wanafunzi na TAP, American Job Center au ushauri wa kazi wa VA ili wakaguliwe baada ya kozi."
    ]
  }
};
