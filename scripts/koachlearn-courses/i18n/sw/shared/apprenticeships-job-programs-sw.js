"use strict";

// Koach Learn course (Swahili translation of shared/apprenticeships-job-programs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// The course stays about the US (US agencies, sites and phone lines kept as written); explanations are in Swahili.

module.exports = {
  id: "apprenticeships-job-programs-sw",
  lang: "sw",
  translationOf: "apprenticeships-job-programs",
  category: "Workforce Development",
  name: "Kutafuta Uanagenzi (Apprenticeship) na Programu za Mafunzo ya Kazi",
  skills: "Kutofautisha aina za programu, Kutafuta kwenye apprenticeship.gov, Kutumia American Job Center, Kukagua kama programu ni halisi, Kukusanya nyaraka za maombi, Kupanga mpango wa maombi",
  outcome: "kupata uanagenzi halisi na programu za mafunzo ya kazi za bure au za gharama ndogo karibu nawe, kukagua kama ni halisi na zinakufaa, kukusanya unachohitaji kuomba, na kupanga mpango wenye tarehe wa kuomba programu mbili.",
  about: [
    "Kozi hii ni kwa yeyote anayetaka kulipwa huku akijifunza ufundi, au kupata mafunzo ya bure kwa kazi bora zaidi: vijana wanaomaliza shule, watu wazima wanaobadilisha kazi, maveterani (waliowahi kuwa wanajeshi), na watu wanaorudi nyumbani kutoka gerezani.",
    "Utajifunza tofauti kati ya uanagenzi, maandalizi ya uanagenzi (pre-apprenticeship) na programu ya mafunzo ya kazi; kutafuta kwenye Job Finder rasmi ya apprenticeship.gov; kutumia American Job Center (kituo cha kazi cha umma) cha eneo lako; kutambua programu bandia na ulaghai wa kazi; na kukusanya karatasi ambazo programu huomba.",
    "Kozi hii INAKUANDAA kutafuta na kuomba. Haikusajili katika programu yoyote wala haikuahidi nafasi. Sheria, umri na nafasi hubadilika, kwa hiyo kila somo linakuonyesha ukurasa rasmi wa kukagua.",
    "Kila somo linachukua kama dakika tano. Soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwenye karatasi au simu. Kuna ukaguzi mfupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika \"Mpango wa Maombi ya Programu\" wa ukurasa mmoja: kazi unayolenga; programu mbili halisi ulizopata (kutoka apprenticeship.gov, American Job Center, Job Corps, YouthBuild, chama cha wafanyakazi au chuo), pamoja na mdhamini (sponsor), mahali, masharti na jinsi ya kuomba kwa kila moja; ukaguzi uliofanya kuhakikisha kila moja ni halisi; orodha ya nyaraka ulizo nazo na unazohitaji bado; na hatua tano zinazofuata, kila moja na tarehe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watafuta kazi wenye umri wa miaka 16 na zaidi nchini Marekani: vijana wanaomaliza sekondari au wasio na cheti, watu wazima wanaobadilisha kazi, maveterani na watu wanaorudi nyumbani kutoka gerezani. Wengi wanaishi katika jamii za kipato cha chini au vijijini na wanahitaji kupata pesa wakati wanajifunza.",
    startingPoint: "Wanaweza kutumia simu au kompyuta ya maktaba kutafuta kwenye wavuti. Wengi wamesikia kuhusu uanagenzi au mafunzo lakini hawajui jinsi ya kupata programu halisi, nani analipia, wala wanahitaji nini kuomba. Baadhi wamelengwa na ulaghai wa \"lipa ili ufunzwe\".",
    gap: "Uanagenzi wenye malipo na mafunzo ya bure yapo katika kila jimbo, lakini watu huyakosa kwa sababu hawajui pa kutafuta wala cha kuuliza. Wanafunzi wanahitaji kupata programu halisi kwenye tovuti rasmi, kuzikagua, na kuomba kwa wakati, ili wapate kazi yenye malipo bora bila deni.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu au kompyuta ya maktaba au ya kituo cha kazi yenye muda mfupi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na shule",
      "Programu, umri na sheria hutofautiana kwa jimbo na hubadilika; wanafunzi hukagua kurasa rasmi (apprenticeship.gov, dol.gov, jobcorps.gov, va.gov)",
      "Hatari ya ulaghai: usilipe kamwe ili upate kazi, na usitoe namba za binafsi katika mazoezi"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao bado hawajachagua fani wanaweza kuanza na kozi \"Kuanza Kazi katika Ufundi Stadi\"; wanaohitaji CV wanaweza kuchukua \"CV (Wasifu wa Kazi), LinkedIn na Usaili wa Kazi\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo mafupi ya programu tano", action: "kutambua kila moja kama uanagenzi, maandalizi ya uanagenzi au programu ya mafunzo ya kazi", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia Job Finder ya apprenticeship.gov kwenye simu au kompyuta", action: "kutafuta uanagenzi katika fani na eneo lako na kuandika matangazo mawili", standard: "pamoja na mdhamini, mahali na jinsi ya kuomba kwa kila moja" },
    { id: "O3", condition: "Ukitumia CareerOneStop au simu ya DOL", action: "kupata American Job Center iliyo karibu nawe na kuandika maswali ya kuuliza kuhusu mafunzo ya bure", standard: "ukiwa na angalau maswali manne, moja likiwa kuhusu fedha za mafunzo" },
    { id: "O4", condition: "Ukipewa tangazo au ofa ya programu", action: "kukagua kama programu ni halisi na inafaa muda wako", standard: "ukitumia angalau ukaguzi mitatu, pamoja na dalili za ulaghai wa \"lipa upate kazi\"" },
    { id: "O5", condition: "Kwa programu moja unayoitaka", action: "kuorodhesha masharti yake na nyaraka unazohitaji kuomba", standard: "ukionyesha zipi unazo tayari na wapi utapata zilizobaki" },
    { id: "O6", condition: "Kwa programu mbili ulizopata", action: "kuandika mpango wa maombi wenye hatua zinazofuata na tarehe", standard: "ukiwa na angalau hatua tano, tarehe za mwisho na tarehe ya kufuatilia" }
  ],
  chapters: [
    {
      name: "Sura 1: Fahamu chaguo zako na mahali pa kuzipata",
      lessons: [
        {
          title: "Uanagenzi, maandalizi ya uanagenzi au programu ya mafunzo?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua aina tatu kuu za programu na ipi inakufaa sasa.",
          text: [
            "Uanagenzi Uliosajiliwa (Registered Apprenticeship) ni kazi. Tovuti ya apprenticeship.gov ya Wizara ya Kazi ya Marekani (US Department of Labor) inasema wanagenzi hupata mshahara tangu siku ya kwanza, hupata nyongeza kadiri ujuzi wao unavyokua, hujifunza kazini pamoja na mafunzo ya darasani, na humaliza na cheti kinachotambuliwa katika sekta yao yote. Unaomba kwa mwajiri au mdhamini wa programu, kama unavyoomba kazi.",
            "Maandalizi ya uanagenzi (pre-apprenticeship) hukuandaa kwa uanagenzi. Apprenticeship.gov inasema yanaweza kudumu wiki chache hadi miezi michache, na malipo au posho si lazima. Mara nyingi yanafundisha hesabu za msingi, usalama na utayari wa kazi. YouthBuild ni mfano mmoja kwa vijana.",
            "Programu ya mafunzo ya kazi inafundisha ujuzi wa kazi, mara nyingi darasani, na inakusaidia kupata kazi mwishoni. Mifano ni Job Corps, vyeti vya vyuo vya jamii (community college), na mafunzo yanayolipiwa kupitia American Job Center ya eneo lako. Baadhi ni bure; baadhi husaidia na gharama; kwa kawaida hulipwi mshahara wakati unajifunza.",
            "Jiulize: je, nahitaji kupata pesa sasa (uanagenzi), nahitaji kujiandaa kwanza (maandalizi ya uanagenzi), au nahitaji kozi fupi ili nistahili kazi (programu ya mafunzo)?"
          ],
          words: [["Uanagenzi Uliosajiliwa (Registered Apprenticeship)", "kazi yenye malipo na mafunzo, iliyoidhinishwa na Wizara ya Kazi au jimbo, inayoishia na cheti kinachotambuliwa."], ["Maandalizi ya uanagenzi (pre-apprenticeship)", "programu fupi inayokuandaa kuingia katika uanagenzi."], ["Mdhamini (sponsor)", "mwajiri, chama cha wafanyakazi au kikundi kinachoendesha uanagenzi na kuajiri wanagenzi."], ["Posho (stipend)", "malipo madogo ya kusaidia gharama wakati unafunzwa; si mshahara kamili."], ["Cheti (credential)", "uthibitisho wa ujuzi, kama cheti au leseni."]],
          slides: [
            { title: "Uanagenzi Uliosajiliwa", bullets: ["Kazi yenye malipo na mafunzo", "Mshahara tangu siku ya kwanza, nyongeza kadiri ujuzi unavyokua", "Unaishia na cheti kinachotambuliwa na sekta"] },
            { title: "Maandalizi ya uanagenzi", bullets: ["Yanakuandaa kwa uanagenzi", "Wiki chache hadi miezi michache", "Malipo au posho si lazima"] },
            { title: "Programu ya mafunzo ya kazi", bullets: ["Inafundisha ujuzi wa kazi, mara nyingi darasani", "Mifano: Job Corps, vyeti vya vyuo, mafunzo ya AJC", "Kwa kawaida hakuna mshahara wakati unajifunza"] },
            { title: "Ipi inakufaa sasa?", bullets: ["Unahitaji kupata pesa sasa: uanagenzi", "Unahitaji kujiandaa: maandalizi ya uanagenzi", "Unahitaji kozi fupi: programu ya mafunzo"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Watafuta kazi (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: Maandalizi ya uanagenzi ni nini?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "Wizara ya Kazi ya Marekani: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" }
          ],
          tryIt: "Kwenye karatasi, chora safu tatu: Uanagenzi, Maandalizi ya uanagenzi, Programu ya mafunzo. Andika mambo mawili mazuri na jambo moja gumu kuhusu kila moja kwa maisha YAKO sasa hivi. Zungushia duara ile inayokufaa zaidi leo.",
          youCanNow: "kutofautisha uanagenzi, maandalizi ya uanagenzi na programu ya mafunzo ya kazi, na kuchagua aina inayokufaa sasa.",
          quickCheck: [
            { objective: "O1", q: "Programu ipi inakulipa mshahara wakati unajifunza kazini?", options: ["Kozi ya video ya bure mtandaoni", "Uanagenzi Uliosajiliwa", "Warsha ya maktaba", "Tovuti ya majaribio ya mazoezi"], answer: 1, why: "Uanagenzi Uliosajiliwa ni kazi yenye malipo na mafunzo." },
            { objective: "O1", q: "Programu ya wiki 10 inafundisha hesabu za ujenzi na usalama ili kukusaidia kuingia katika uanagenzi. Ni nini?", options: ["Maandalizi ya uanagenzi", "Shahada ya chuo", "Uanagenzi Uliosajiliwa", "Kazi ya muda"], answer: 0, why: "Maandalizi ya uanagenzi hukuandaa kuingia katika uanagenzi na yanaweza kudumu wiki hadi miezi." }
          ]
        },
        {
          title: "Kutafuta kwenye Job Finder ya apprenticeship.gov",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tafuta kwenye Job Finder rasmi na uandike matangazo mawili ya uanagenzi karibu nawe.",
          text: [
            "Apprenticeship.gov ni tovuti rasmi ya uanagenzi ya Wizara ya Kazi ya Marekani. Apprenticeship Job Finder yake inakuruhusu kuandika njia ya kazi au mahali ili kupata nafasi karibu nawe.",
            "Job Finder inakusanya matangazo kutoka vyanzo kadhaa. Kila tangazo lina lebo kama \"Registered Occupation\" au \"Registered Partner\". Unaomba moja kwa moja kwa mwajiri au mdhamini, si kupitia apprenticeship.gov.",
            "Jaribu zaidi ya neno moja: \"electrician\" (fundi umeme), \"plumber\" (fundi bomba), \"IT support\", \"medical assistant\", \"truck driver\". Uanagenzi haupo katika ujenzi peke yake; upo pia katika afya, IT, viwanda na zaidi. Usipopata chochote karibu, jaribu mji mkubwa ulio karibu nawe au jina jingine la kazi.",
            "Andika unachopata kabla ya kufunga ukurasa. Matangazo hubadilika, kwa hiyo tarehe uliyoliona ni muhimu."
          ],
          steps: ["Nenda apprenticeship.gov na ufungue Apprenticeship Job Finder.", "Andika njia ya kazi, mji wako au ZIP code, au vyote viwili.", "Fungua tangazo na usome mdhamini ni nani, liko wapi na jinsi ya kuomba.", "Andika mdhamini, jina la kazi, mahali, jinsi ya kuomba na tarehe ya leo.", "Rudia kwa jina jingine la kazi hadi upate matangazo mawili."],
          words: [["Tangazo (listing)", "nafasi moja ya kazi au programu iliyowekwa kwenye tovuti."], ["Njia ya kazi (career path)", "aina ya kazi unayotaka kufanya kwa muda mrefu, kama fundi umeme au IT support."], ["ZIP code", "namba ya tarakimu tano ya eneo lako katika anwani ya Marekani."]],
          slides: [
            { title: "Mahali rasmi pa kutafuta", bullets: ["apprenticeship.gov, ya Wizara ya Kazi ya Marekani", "Tumia Apprenticeship Job Finder", "Tafuta kwa njia ya kazi, mahali au vyote viwili"] },
            { title: "Kusoma tangazo", bullets: ["Mdhamini au mwajiri ni nani", "Kazi iko wapi", "Jinsi ya kuomba: unaomba moja kwa moja kwa mdhamini"] },
            { title: "Vidokezo vya kutafuta", bullets: ["Jaribu majina kadhaa ya kazi", "Si ujenzi tu: afya, IT, viwanda", "Hakuna karibu? Jaribu mji mkubwa ulio karibu nawe"] },
            { title: "Iandike", bullets: ["Mdhamini, jina la kazi, mahali", "Jinsi ya kuomba na tarehe uliyoliona"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov: Watafuta kazi (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" }
          ],
          tryIt: "Fungua Apprenticeship Job Finder. Tafuta kazi moja unayoipenda karibu na ZIP code yako. Andika matangazo mawili: mdhamini, jina la kazi, mahali, jinsi ya kuomba na tarehe ya leo. Usipopata hata moja, jaribu majina mengine mawili ya kazi au mji ulio karibu.",
          youCanNow: "kutafuta kwenye Job Finder ya apprenticeship.gov na kuandika matangazo mawili halisi pamoja na jinsi ya kuomba.",
          quickCheck: [
            { objective: "O2", q: "Umepata uanagenzi kwenye Job Finder. Unaomba kwa nani?", options: ["Ikulu ya Marekani (White House)", "Wafanyakazi wa apprenticeship.gov", "Tovuti yoyote inayonakili tangazo", "Mwajiri au mdhamini aliye kwenye tangazo"], answer: 3, why: "Apprenticeship.gov inasema unaomba moja kwa moja kwa mwajiri au mdhamini." },
            { objective: "O2", q: "Utafutaji wako wa \"electrician\" katika mji wako mdogo hauonyeshi chochote. Hatua nzuri inayofuata ni ipi?", options: ["Kuacha kabisa uanagenzi", "Kulipa tovuti ikutafutie", "Kujaribu mji mkubwa ulio karibu au jina jingine la kazi", "Kutafuta mara moja tu kwa mwaka"], answer: 2, why: "Kujaribu eneo pana zaidi au majina mengine mara nyingi hupata matangazo ambayo utafutaji wa kwanza uliyakosa." }
          ]
        },
        {
          title: "American Job Center yako na programu za mafunzo ya bure",
          objectives: ["O3"],
          minutes: 6,
          goal: "Pata American Job Center iliyo karibu nawe na uandike maswali utakayouliza kuhusu mafunzo ya bure.",
          text: [
            "American Job Centers (AJC) ni ofisi za umma za bure, zinazoendeshwa kwa fedha za Wizara ya Kazi ya Marekani, zinazosaidia watu kupata kazi na mafunzo. Pata moja kwenye CareerOneStop.org (ya Wizara ya Kazi) au piga simu ya DOL 1-877-US-2JOBS (1-877-872-5627). Baadhi ya majimbo huziita kwa jina la eneo, kama WorkSource au career center.",
            "Kupitia sheria ya Workforce Innovation and Opportunity Act (WIOA), wafanyakazi wa AJC wanaweza kutoa huduma za kazi na msaada wa kulipia mafunzo ukistahili. Wizara ya Kazi inasema kipaumbele kinatolewa kwa watu wanaopata msaada wa umma, watu wengine wa kipato cha chini na watu wanaohitaji msaada wa ujuzi wa msingi, na maveterani hupata kipaumbele cha huduma katika programu zote za kazi zinazofadhiliwa na DOL. Huduma hutofautiana kwa jimbo, kwa hiyo uliza.",
            "Programu nyingine za kuuliza: Job Corps (mafunzo na makazi ya bure kwa vijana wazima, kwa kawaida umri wa miaka 16 hadi 24; kagua jobcorps.gov au piga 800-733-5627 kujua nafasi zilizopo sasa); YouthBuild (umri wa miaka 16 hadi 24 walioacha shule bila cheti: ujenzi na ujuzi mwingine huku wakimaliza shule); Reentry Employment Opportunities kwa watu wanaorudi nyumbani kutoka gerezani; na, kwa maveterani, GI Bill, ambayo VA inasema inaweza kutumika kwa uanagenzi mwingi na mafunzo kazini.",
            "Nenda ukiwa na maswali yaliyoandikwa. Utapata zaidi kutoka ziara moja."
          ],
          steps: ["Tafuta American Job Center na ZIP code yako kwenye CareerOneStop, au piga 1-877-US-2JOBS.", "Andika anwani ya kituo, saa za kazi na namba ya simu.", "Andika maswali yako: fedha za mafunzo, programu karibu nawe, uanagenzi, msaada kwa hali yako.", "Piga simu au tembelea na uandike maelezo, pamoja na jina la mtu unayeongea naye."],
          words: [["American Job Center (AJC)", "ofisi ya umma ya bure inayosaidia watu kupata kazi na mafunzo."], ["WIOA", "Workforce Innovation and Opportunity Act, sheria ya Marekani inayofadhili vituo vya kazi na msaada wa mafunzo."], ["Kustahili (eligible)", "kutimiza masharti ya kupata huduma."], ["Kipaumbele cha huduma (priority of service)", "kuhudumiwa kwanza; maveterani hukipata katika programu za kazi zinazofadhiliwa na DOL."], ["GI Bill", "mafao ya elimu ya VA kwa maveterani na baadhi ya wanafamilia."]],
          slides: [
            { title: "American Job Centers", bullets: ["Ofisi za umma za bure kwa kazi na mafunzo", "Pata moja: CareerOneStop.org au 1-877-US-2JOBS", "Huenda zina jina la eneo katika jimbo lako"] },
            { title: "Msaada wa kulipia mafunzo (WIOA)", bullets: ["Huduma za kazi na fedha za mafunzo ukistahili", "Kipaumbele: msaada wa umma, kipato cha chini, ujuzi wa msingi", "Maveterani hupata kipaumbele cha huduma"] },
            { title: "Programu zaidi za kuuliza", bullets: ["Job Corps: kwa kawaida umri 16-24, bure, kagua hali yake", "YouthBuild: umri 16-24 bila cheti cha shule", "Programu za kurudi katika jamii; GI Bill kwa uanagenzi wa maveterani"] },
            { title: "Nenda ukiwa umejiandaa", bullets: ["Andika maswali yako kwanza", "Andika maelezo na jina la mfanyakazi"] }
          ],
          sources: [
            { name: "Wizara ya Kazi ya Marekani: Programu ya WIOA kwa Watu Wazima", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" },
            { name: "CareerOneStop: Pata American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Job Corps", url: "https://www.jobcorps.gov/" },
            { name: "Wizara ya Kazi ya Marekani: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" },
            { name: "Wizara ya Kazi ya Marekani: Programu za vijana na za kurudi katika jamii", url: "https://www.dol.gov/agencies/eta/youth" },
            { name: "VA: Mafunzo kazini na uanagenzi", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Pata American Job Center iliyo karibu nawe na uandike anwani yake, saa za kazi na simu. Kisha andika maswali manne ya kuuliza, kwa mfano: \"Je, WIOA inaweza kusaidia kulipia mafunzo katika fani yangu?\", \"Kuna uanagenzi au maandalizi ya uanagenzi gani karibu hapa?\", \"Kuna msaada kwa vijana wazima, maveterani au watu wenye rekodi ya uhalifu?\", \"Nilete nini katika ziara yangu ya kwanza?\"",
          youCanNow: "kupata American Job Center yako na kwenda ukiwa na maswali kuhusu mafunzo ya bure na programu.",
          quickCheck: [
            { objective: "O3", q: "Unaweza kupata wapi msaada wa bure wa kutafuta fedha za mafunzo na programu karibu nawe?", options: ["American Job Center", "Chapisho la mtu usiyemjua kwenye mitandao ya kijamii", "Kampuni inayotoza pesa ili ikutafutie kazi", "Chuo binafsi peke yake"], answer: 0, why: "American Job Centers ni ofisi za umma za bure zinazosaidia na kazi na mafunzo, pamoja na fedha za WIOA." },
            { objective: "O3", q: "Swali lipi ni bora kuuliza katika American Job Center?", options: ["\"Mnaweza kunifanyia kazi yangu?\"", "\"Mnauza kadi za zawadi (gift cards)?\"", "\"Anwani ya nyumbani kwako ni ipi?\"", "\"Je, WIOA inaweza kusaidia kulipia mafunzo katika fani yangu?\""], answer: 3, why: "Kuuliza kuhusu fedha za mafunzo za WIOA kunaweza kufungua mafunzo ya bure ukistahili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Fahamu chaguo zako na mahali pa kuzipata",
        questions: [
          { objective: "O1", q: "Lipi ni kweli kuhusu Uanagenzi Uliosajiliwa?", options: ["Unalipa ada kubwa kujiunga", "Unapata mshahara na kujifunza kazini", "Ni kozi ya darasani tu", "Hauishii kamwe na cheti"], answer: 1, why: "Wanagenzi hupata mshahara tangu siku ya kwanza na humaliza na cheti kinachotambuliwa." },
          { objective: "O1", q: "Maya, 19, hana cheti cha shule na anataka ujuzi wa ujenzi huku akimaliza shule. Programu ipi inafaa?", options: ["Chuo kikuu cha miaka minne", "Mkopo binafsi", "YouthBuild", "Mafunzo bila malipo nje ya nchi"], answer: 2, why: "YouthBuild inahudumia umri wa miaka 16-24 walioacha shule bila cheti, ikichanganya ujuzi wa kazi na shule." },
          { objective: "O2", q: "Tovuti rasmi ya Marekani ya kutafuta uanagenzi ni ipi?", options: ["apprenticeship.gov", "Tovuti yoyote yenye neno \"jobs\" katika jina lake", "Kikundi cha mitandao ya kijamii", "Kiungo katika ujumbe mfupi"], answer: 0, why: "Apprenticeship.gov ni tovuti rasmi ya uanagenzi ya Wizara ya Kazi ya Marekani yenye Job Finder." },
          { objective: "O2", q: "Unapaswa kuandika nini kutoka kila tangazo?", options: ["Rangi ya nembo tu", "Hakuna; utalipata baadaye", "Nywila yako ya tovuti", "Mdhamini, jina la kazi, mahali, jinsi ya kuomba na tarehe"], answer: 3, why: "Matangazo hubadilika, kwa hiyo unaandika maelezo muhimu na tarehe uliyoyaona." },
          { objective: "O3", q: "Darnell ni veterani. Wizara ya Kazi inasema anapata nini katika programu za kazi zinazofadhiliwa na DOL?", options: ["Hakuna cha ziada", "Gari la bure", "Kipaumbele cha huduma", "Kazi ya uhakika"], answer: 2, why: "Maveterani hupata kipaumbele cha huduma katika programu zote za ajira zinazofadhiliwa na DOL." }
        ]
      }
    },
    {
      name: "Sura 2: Chagua vizuri na uombe",
      lessons: [
        {
          title: "Je, programu ni halisi na inafaa?",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kagua tangazo la programu kuona dalili kwamba ni halisi, na dalili za ulaghai.",
          text: [
            "Baadhi ya matangazo huahidi \"kazi ya uhakika\" ukilipia mafunzo au cheti. FTC inasema waajiri waaminifu, pamoja na serikali kuu ya Marekani, hawatakuomba kamwe ulipe ili upate kazi, na kulipia \"mafunzo\" au vyeti visivyo na faida ni ulaghai wa kawaida.",
            "Dalili nyingine za hatari kwa mujibu wa FTC: hundi (check) unayotakiwa kuweka benki kisha urudishe sehemu ya pesa, ada ya mapema kutoka kampuni ya kutafutia kazi, mtu usiyemjua anayekutafuta ghafla na kazi, na malipo makubwa kwa kazi kidogo.",
            "Dalili kwamba programu ni halisi: imeorodheshwa kwenye apprenticeship.gov, American Job Center yako, tovuti ya .gov ya jimbo, chama cha wafanyakazi au chuo cha jamii; unaweza kupata anwani na simu yake wewe mwenyewe; na inakuambia wazi gharama yake, inachukua muda gani, cheti utakachopata, na watu wangapi humaliza na kupata kazi.",
            "Programu halisi bado inaweza isikufae. Kagua ratiba, mahali na usafiri, na kama cheti ni kile ambacho waajiri wa eneo lako wanakitaka."
          ],
          steps: ["Tafuta programu kwenye tovuti rasmi (apprenticeship.gov, AJC yako, tovuti ya .gov ya jimbo, chama cha wafanyakazi au chuo).", "Tafuta anwani na simu yake wewe mwenyewe; usitumie namba iliyo kwenye tangazo peke yake.", "Kagua dalili za ulaghai: kulipa ili upate kazi, ada za mapema, hundi-urudishe-pesa, malipo mazuri kupita kiasi.", "Uliza: gharama, muda, cheti, ratiba, na wangapi humaliza na kupata kazi.", "Huna uhakika? Uliza American Job Center yako kabla ya kusaini au kulipa chochote."],
          words: [["Ulaghai (scam)", "hila ya kuchukua pesa zako au taarifa zako binafsi."], ["Ada ya mapema (upfront fee)", "pesa unayotakiwa kulipa kabla ya kupata chochote."], ["FTC", "Federal Trade Commission, wakala wa Marekani unaoonya kuhusu ulaghai na kupambana nao."], ["Kiwango cha kumaliza (completion rate)", "idadi ya watu wanaoanza programu na kuimaliza."]],
          slides: [
            { title: "Usilipe kamwe ili upate kazi", bullets: ["FTC: waajiri waaminifu hawakuombi kamwe ulipe ili uajiriwe", "Kuwa makini na \"mafunzo\" ya kulipia yanayoahidi kazi"] },
            { title: "Dalili za hatari za ulaghai", bullets: ["Ada za mapema ili wakutafutie kazi", "Weka hundi benki, rudisha pesa", "Mtu usiyemjua anakupa kazi; malipo makubwa kwa kazi kidogo"] },
            { title: "Dalili kwamba ni halisi", bullets: ["Iko kwenye apprenticeship.gov, AJC, .gov, chama au chuo", "Unaweza kupata anwani na simu yake wewe mwenyewe", "Gharama, muda, cheti na matokeo ya kazi yako wazi"] },
            { title: "Ni halisi, lakini inakufaa?", bullets: ["Ratiba na usafiri", "Cheti ambacho waajiri wa eneo lako wanakitaka"] }
          ],
          sources: [
            { name: "FTC: Ulaghai wa kazi (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Chukua programu moja uliyoipata katika Somo la 2 au 3. Fanya ukaguzi mitatu: je, iko kwenye orodha rasmi, unaweza kupata anwani na simu yake wewe mwenyewe, na je, inaonyesha dalili yoyote ya ulaghai? Andika \"halisi\", \"sina uhakika\" au \"ulaghai\" na sababu. Kisha soma tangazo hili la kubuni na uorodheshe dalili zake za hatari: \"Pata kazi ya uhakika ya $40 kwa saa! Lipa $300 leo kwa cheti chako. Tutumie ujumbe sasa.\"",
          youCanNow: "kukagua kama programu ni halisi na inafaa muda wako, na kutambua dalili za ulaghai wa \"lipa upate kazi\".",
          quickCheck: [
            { objective: "O4", q: "Tangazo linasema: \"Lipa $250 kwa cheti chako na upate kazi ya uhakika.\" Unafanya nini?", options: ["Kulipa haraka kabla nafasi hazijajaa", "Kutuma maelezo ya benki yako ili ushikiliwe nafasi", "Kulichukulia kama ulaghai unaowezekana na kukagua na AJC yako", "Kuwashirikisha marafiki ili nao walipe"], answer: 2, why: "FTC inasema waajiri waaminifu hawakuombi kamwe ulipe ili upate kazi." },
            { objective: "O4", q: "Ipi ni dalili kwamba programu ni halisi?", options: ["Imeorodheshwa kwenye apprenticeship.gov au tovuti ya .gov ya jimbo", "Ina namba ya simu katika ujumbe mfupi tu", "Inakuomba uweke hundi benki kisha urudishe pesa", "Haitakuambia gharama yake"], answer: 0, why: "Kuorodheshwa kwenye tovuti rasmi na kuwa wazi kuhusu gharama ni dalili za programu halisi." }
          ]
        },
        {
          title: "Masharti na nyaraka",
          objectives: ["O5"],
          minutes: 5,
          goal: "Orodhesha masharti ya programu na nyaraka unazohitaji, na uonyeshe zipi unazo.",
          text: [
            "Kila programu inaweka masharti yake, na yako kwenye tangazo au kwenye tovuti ya mdhamini. Ya kawaida ni umri wa chini, cheti cha sekondari (high school diploma) au kinacholingana nacho (GED au HiSET), jaribio la msingi la hesabu au kusoma, kuweza kufanya kazi ya nguvu, leseni halali ya udereva kwa baadhi ya fani, na kipimo cha dawa za kulevya.",
            "Nyaraka za kawaida: kitambulisho chenye picha, uthibitisho wa cheti chako au kinacholingana nacho, rekodi za masomo (transcripts), CV, na wakati mwingine kadi ya Social Security au uthibitisho kwamba unaruhusiwa kufanya kazi Marekani. Maveterani wanaweza kuhitaji DD-214 yao kuonyesha utumishi wao, na wanaotumia GI Bill huomba mafao ya elimu ya VA.",
            "Bado huna kimoja? Bado unaweza kupanga. Kitambulisho cha jimbo (state ID) kinatoka DMV ya jimbo lako. Nakala ya cheti inatoka shule yako ya zamani au ofisi ya elimu ya jimbo. American Job Center inaweza kusaidia na mengi ya haya, na programu za kurudi katika jamii mara nyingi husaidia watu wanaorudi nyumbani kupata kitambulisho.",
            "Weka nakala, si nakala halisi za asili, katika folda moja. Usitume kamwe namba za binafsi kwa mtu yeyote ambaye hujakagua kuwa ni halisi."
          ],
          steps: ["Fungua tangazo au ukurasa wa mdhamini na utafute masharti.", "Andika kila sharti na kila hati kwenye orodha ya kukagua.", "Weka alama kwa kila moja: Ninayo, Ninaihitaji, au Sina uhakika.", "Kando ya kila Ninaihitaji, andika utaipata wapi.", "Weka nakala katika folda moja au mahali salama kwenye simu yako."],
          words: [["Sharti (requirement)", "kitu unachopaswa kuwa nacho au kufanya ili kuomba, kama umri wa chini au cheti."], ["Kinacholingana (equivalency)", "jaribio, kama GED au HiSET, linalohesabiwa kama cheti cha sekondari."], ["Rekodi ya masomo (transcript)", "orodha rasmi ya masomo na alama kutoka shule."], ["DD-214", "karatasi ya kijeshi inayoonyesha utumishi wa veterani na kuachishwa kwake jeshini."]],
          slides: [
            { title: "Masharti ya kawaida", bullets: ["Umri wa chini; cheti cha sekondari, GED au HiSET", "Jaribio la msingi la hesabu au kusoma", "Leseni ya udereva au kipimo cha dawa kwa baadhi ya fani"] },
            { title: "Nyaraka za kawaida", bullets: ["Kitambulisho chenye picha; cheti au kinacholingana; rekodi za masomo", "CV; uthibitisho kwamba unaruhusiwa kufanya kazi Marekani", "Maveterani: DD-214"] },
            { title: "Unakosa kitu?", bullets: ["Kitambulisho cha jimbo: DMV ya jimbo lako", "Nakala ya cheti: shule yako ya zamani au ofisi ya jimbo", "Omba msaada kwa AJC yako au programu ya kurudi katika jamii"] },
            { title: "Viweke salama", bullets: ["Nakala, si za asili, katika folda moja", "Tuma namba za binafsi kwa programu zilizokaguliwa tu"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Watafuta kazi (Career seekers)", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "VA: Mafunzo kazini na uanagenzi", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Kwa programu moja unayoitaka, tengeneza orodha ya kukagua ya kila sharti na hati kutoka tangazo lake. Weka alama kwa kila moja: Ninayo, Ninaihitaji au Sina uhakika, na andika utapata wapi kila Ninaihitaji. Usiandike namba yoyote halisi ya kitambulisho kwenye orodha.",
          youCanNow: "kuorodhesha masharti na nyaraka za programu, kuona unachokosa na kujua utakipata wapi.",
          quickCheck: [
            { objective: "O5", q: "Unapata wapi masharti kamili ya programu?", options: ["Makisio ya rafiki", "Tangazo la programu au tovuti ya mdhamini mwenyewe", "Maoni yoyote kwenye mitandao ya kijamii", "Ni sawa kwa kila programu"], answer: 1, why: "Kila programu inaweka masharti yake, kwa hiyo unasoma tangazo lake au ukurasa wake rasmi." },
            { objective: "O5", q: "Luis, veterani, anataka kutumia GI Bill kwa uanagenzi. Hati ipi huenda itasaidia kuonyesha utumishi wake?", options: ["Kadi ya gym", "Kadi ya maktaba", "Risiti ya duka", "DD-214 yake"], answer: 3, why: "DD-214 inaonyesha utumishi wa veterani na kuachishwa kwake jeshini." }
          ]
        },
        {
          title: "Kupanga mpango wako wa maombi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Andika mpango wa maombi kwa programu mbili wenye hatua zenye tarehe na tarehe ya kufuatilia.",
          text: [
            "Uanagenzi na programu za mafunzo mara nyingi hufungua maombi wakati fulani tu, na baadhi hujaa haraka. Mpango ulioandikwa wenye tarehe unakuzuia kukosa nafasi hiyo.",
            "Kwa kila programu, andika tarehe ya mwisho au tarehe ijayo ya kufunguliwa, jinsi ya kuomba (mtandaoni, ana kwa ana, au katika kikao cha maelezo), na tarehe yoyote ya jaribio. Usipopata tarehe, hatua yako ya kwanza ni kupiga simu au kutuma barua pepe kuuliza.",
            "Kisha andika hatua zako zinazofuata, kila moja na tarehe: pata hati inayokosekana, sasisha CV yako, fanya mazoezi kwa jaribio la hesabu, hudhuria kikao cha maelezo, tuma maombi, fuatilia. Ufuatiliaji mzuri ni simu fupi ya adabu au barua pepe kama wiki moja hadi mbili baada ya kuomba, isipokuwa programu ikikuambia wakati mwingine.",
            "Omba zaidi ya programu moja. Moja ikisema hapana au ikikuweka kwenye orodha ya kusubiri, bado una njia nyingine, na unaweza kuuliza nini kingekufanya uwe mwombaji imara zaidi wakati ujao."
          ],
          steps: ["Chagua programu mbili ulizokagua kuwa ni halisi.", "Andika tarehe ya mwisho au tarehe ijayo ya kufunguliwa ya kila moja na jinsi ya kuomba.", "Orodhesha hatua zako zinazofuata, kila moja na tarehe.", "Weka tarehe kwenye kalenda ya simu yako au kwenye karatasi unayoiona kila siku.", "Weka tarehe ya kufuatilia baada ya kuomba."],
          words: [["Tarehe ya mwisho (deadline)", "siku ya mwisho unayoweza kuomba."], ["Kikao cha maelezo (information session)", "mkutano ambapo programu inaeleza jinsi inavyofanya kazi na jinsi ya kuomba."], ["Orodha ya kusubiri (waiting list)", "orodha ya watu watakaopata nafasi ikifunguka."], ["Kufuatilia (follow up)", "kuwasiliana na programu baada ya kuomba ili kuuliza kuhusu maombi yako."]],
          slides: [
            { title: "Kwa nini mpango wenye tarehe", bullets: ["Programu nyingi hufunguliwa wakati fulani tu", "Baadhi hujaa haraka", "Tarehe zinakuzuia kukosa nafasi"] },
            { title: "Kwa kila programu, andika", bullets: ["Tarehe ya mwisho au tarehe ijayo ya kufunguliwa", "Jinsi ya kuomba na tarehe yoyote ya jaribio", "Hukupata tarehe? Piga simu au tuma barua pepe uulize"] },
            { title: "Hatua, kila moja na tarehe", bullets: ["Pata nyaraka; sasisha CV yako", "Jiandae kwa jaribio; hudhuria kikao", "Omba, kisha fuatilia"] },
            { title: "Daima kuwa na njia ya pili", bullets: ["Omba programu mbili", "Hapana au orodha ya kusubiri si mwisho", "Uliza jinsi ya kuwa imara zaidi wakati ujao"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Wizara ya Kazi ya Marekani: Programu ya WIOA kwa Watu Wazima", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" }
          ],
          tryIt: "Tengeneza Mpango wako wa Maombi ya Programu: kazi unayolenga, programu mbili zilizokaguliwa pamoja na tarehe za mwisho na jinsi ya kuomba, orodha yako ya nyaraka, na hatua tano zinazofuata zenye tarehe, ukimalizia na tarehe ya kufuatilia. Weka tarehe ya hatua ya kwanza kwenye simu au kalenda yako leo.",
          youCanNow: "kuandika mpango wa maombi wenye hatua zenye tarehe kwa programu mbili na kufuatilia baada ya kuomba.",
          quickCheck: [
            { objective: "O6", q: "Huwezi kupata tarehe ya mwisho ya maombi ya programu. Hatua yako ya kwanza ni ipi?", options: ["Kupiga simu au kutuma barua pepe kwa programu kuuliza", "Kudhani hakuna tarehe ya mwisho", "Kusubiri hadi mwaka ujao", "Kuomba programu yoyote nyingine badala yake"], answer: 0, why: "Kuuliza programu moja kwa moja kunakupa tarehe halisi kwa mpango wako." },
            { objective: "O6", q: "Kwa nini uombe programu mbili badala ya moja?", options: ["Programu zinadai hivyo", "Inagharimu kidogo", "Ili bado uwe na njia moja ikisema hapana au ikikuweka kwenye orodha ya kusubiri", "Ili uweze kuruka tarehe za mwisho"], answer: 2, why: "Programu ya pili inakuweka ukisonga mbele ikiwa ya kwanza haitafanikiwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Chagua vizuri na uombe",
        questions: [
          { objective: "O4", q: "Ipi ni dalili ya hatari ya ulaghai wa kazi, kwa mujibu wa FTC?", options: ["Programu iko kwenye apprenticeship.gov", "Unatakiwa kulipa ili upate kazi", "Programu inaorodhesha anwani yake", "Programu inaeleza inachukua muda gani"], answer: 1, why: "FTC inasema waajiri waaminifu hawakuombi kamwe ulipe ili upate kazi." },
          { objective: "O4", q: "Umepokea hundi kutoka kwa \"mwajiri mpya\" na unatakiwa kurudisha sehemu yake kwa kadi ya zawadi (gift card). Ni nini?", options: ["Hatua ya kawaida ya kuajiri", "Bonasi ya mafunzo", "Huenda ni ulaghai", "Marejesho ya kodi"], answer: 2, why: "FTC inasema hakuna mwajiri mwaminifu anayetuma hundi na kukuomba urudishe sehemu yake." },
          { objective: "O5", q: "Tangazo linahitaji cheti cha sekondari, na Tasha alifaulu GED. Lipi ni kweli?", options: ["GED mara nyingi hukubaliwa kama kinacholingana na cheti cha sekondari; yeye anakagua tangazo", "Hawezi kuomba kamwe", "Lazima alipe ili kukibadilisha", "Asiitaje"], answer: 0, why: "GED ni kinacholingana na cheti cha sekondari ambacho programu nyingi hukubali; tangazo linasema kinachohitajika." },
          { objective: "O5", q: "Unahitaji kitambulisho cha jimbo ili kuomba. Kwa kawaida unakipata wapi?", options: ["Kikundi cha mitandao ya kijamii", "DMV ya jimbo lako", "Mdhamini wa uanagenzi", "Tovuti yoyote inayouza vitambulisho"], answer: 1, why: "Vitambulisho vya jimbo vinatoka DMV ya jimbo lako; AJC yako au programu ya kurudi katika jamii inaweza kusaidia." },
          { objective: "O6", q: "Hatua ipi ya mpango imeandikwa vizuri zaidi?", options: ["\"Omba wakati fulani\"", "\"Fikiria kuhusu hilo\"", "\"Labda mwezi ujao\"", "\"Tuma maombi ya ufundi umeme ya ACME mtandaoni kufikia Machi 3\""], answer: 3, why: "Hatua nzuri inasema nini, vipi na lini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutafuta Uanagenzi (Apprenticeship) na Programu za Mafunzo ya Kazi",
    questions: [
      { objective: "O1", q: "Uanagenzi Uliosajiliwa ni nini?", options: ["Kazi yenye malipo na mafunzo inayoishia na cheti kinachotambuliwa", "Kozi ya video ya bure", "Maonyesho ya kazi ya siku moja", "Mkopo wa chuo"], answer: 0, why: "Wanagenzi hupata mshahara, hujifunza kazini na darasani, na humaliza na cheti." },
      { objective: "O1", q: "Maandalizi ya uanagenzi ni kwa ajili ya nini?", options: ["Kuchukua nafasi ya cheti cha sekondari", "Kukuandaa kuingia katika uanagenzi", "Kulipa deni", "Kumaliza shahada ya miaka minne"], answer: 1, why: "Maandalizi ya uanagenzi huwaandaa watu kuingia katika Uanagenzi Uliosajiliwa." },
      { objective: "O1", q: "Jamal anahitaji kupata pesa mara moja na anataka kujifunza ufundi. Ipi inafaa zaidi?", options: ["Kozi ya mtandaoni isiyo na malipo", "Programu ya chuo kikuu ya muda mrefu", "Uanagenzi Uliosajiliwa", "Kusubiri mwaka mmoja"], answer: 2, why: "Uanagenzi unalipa mshahara wakati unajifunza." },
      { objective: "O2", q: "Unaweza kuandika nini kwenye Job Finder ya apprenticeship.gov?", options: ["Namba yako ya Social Security", "PIN yako ya benki", "Nywila yako", "Njia ya kazi au mahali"], answer: 3, why: "Job Finder inatafuta kwa njia ya kazi, mahali au vyote viwili." },
      { objective: "O2", q: "Uanagenzi unapatikana katika fani zipi?", options: ["Ujenzi peke yake", "Fani nyingi, pamoja na afya, IT na viwanda", "Jeshi peke yake", "Kilimo peke yake"], answer: 1, why: "Uanagenzi upo katika sekta nyingi, si ujenzi tu." },
      { objective: "O2", q: "Kwa nini uandike tarehe uliyoliona tangazo?", options: ["Matangazo hubadilika, kwa hiyo tarehe inaonyesha jinsi lilivyo la sasa", "Tovuti inadai hivyo", "Ili upate punguzo", "Haina faida"], answer: 0, why: "Nafasi hubadilika, kwa hiyo kuandika tarehe kunakusaidia kujua lini kuchukua hatua au kukagua tena." },
      { objective: "O3", q: "Unawezaje kupata American Job Center iliyo karibu nawe?", options: ["Kuuliza mtu usiyemjua mtandaoni", "Kulipa kampuni ya kutafutia kazi", "Kutafuta kwenye CareerOneStop au kupiga 1-877-US-2JOBS", "Kusubiri barua"], answer: 2, why: "CareerOneStop na simu ya bure ya DOL zinakusaidia kupata AJC ya eneo lako." },
      { objective: "O3", q: "Sheria ipi ya Marekani inafadhili vituo vya kazi na inaweza kusaidia watu wanaostahili kulipia mafunzo?", options: ["WIOA", "HIPAA", "OSHA", "FAFSA"], answer: 0, why: "Workforce Innovation and Opportunity Act inafadhili American Job Centers na msaada wa mafunzo." },
      { objective: "O3", q: "Kayla ana miaka 20 na anataka mafunzo ya kazi ya bure pamoja na makazi. Programu ipi akague, pamoja na hali yake ya sasa?", options: ["Mkopo wa siku ya mshahara (payday loan)", "Tangazo la kambi binafsi ya mafunzo", "Ofa ya kadi ya zawadi", "Job Corps"], answer: 3, why: "Job Corps ni programu ya bure kwa vijana wazima, kwa kawaida 16-24; anakagua jobcorps.gov kujua nafasi zilizopo sasa." },
      { objective: "O3", q: "Mafao gani ya veterani ambayo VA inasema yanaweza kutumika kwa uanagenzi mwingi na mafunzo kazini?", options: ["Medicare", "GI Bill", "Bima ya ukosefu wa ajira", "Social Security"], answer: 1, why: "VA inasema mafao ya GI Bill yanaweza kutumika kwa uanagenzi mwingi na mafunzo kazini." },
      { objective: "O4", q: "Tovuti inaomba ada ili ikupe fomu ya maombi ya \"kazi ya serikali kuu\". Lipi ni kweli?", options: ["Lazima ulipe ili kuomba", "Ni punguzo", "Maombi ya kazi za serikali kuu ni bure, kwa hiyo ni dalili ya hatari", "Maveterani tu ndio hulipa"], answer: 2, why: "FTC inasema maombi rasmi ya kazi za serikali kuu na za posta daima ni bure." },
      { objective: "O4", q: "Unapaswa kupataje namba ya simu ya programu ili kuikagua?", options: ["Itafute wewe mwenyewe kwenye tovuti rasmi", "Tumia namba iliyo kwenye tangazo tu", "Muulize mtu aliyekutumia ujumbe", "Huhitaji kukagua"], answer: 0, why: "Kutafuta maelezo ya mawasiliano wewe mwenyewe kunakuepusha na namba bandia ya mlaghai." },
      { objective: "O4", q: "Programu ni halisi lakini inakutana wakati wa saa zako za kazi tu, umbali wa saa mbili. Unafanya nini?", options: ["Kujiandikisha hata hivyo na kuacha kazi yako", "Kulipa zaidi ili ushikiliwe nafasi", "Kupuuza ratiba", "Kupima kama inakufaa na kutafuta programu iliyo karibu zaidi au yenye ratiba bora"], answer: 3, why: "Programu halisi bado lazima ifae ratiba yako na usafiri wako." },
      { objective: "O4", q: "Ipi SI dalili ya ulaghai wa kazi?", options: ["Mtu usiyemjua anatoa malipo makubwa kwa kazi kidogo", "Programu imeorodheshwa kwenye tovuti ya .gov ya jimbo lako", "Ada ya mapema ya kukutafutia kazi", "Hundi ambayo lazima urudishe sehemu yake"], answer: 1, why: "Kuorodheshwa kwenye tovuti rasmi ya .gov ni dalili ya programu halisi." },
      { objective: "O5", q: "Ufanye nini na nyaraka unazohitaji kuomba?", options: ["Weka nakala katika folda moja salama", "Ziweke kwenye mitandao ya kijamii", "Tuma za asili kwa yeyote anayeuliza", "Zitupe baada ya kuzitumia mara moja"], answer: 0, why: "Nakala mahali pamoja salama zinakuweka tayari na zinalinda za asili." },
      { objective: "O5", q: "Orodha yako inaonyesha \"Rekodi ya masomo: Ninaihitaji\". Unaandika nini kando yake?", options: ["Hakuna", "\"Ruka programu hii\"", "Utaipata wapi, kama shule yako ya zamani", "Nywila yako"], answer: 2, why: "Kuandika wapi utapata kila kinachokosekana kunageuza orodha kuwa mpango." },
      { objective: "O5", q: "Lipi ni sharti la kawaida kwa uanagenzi?", options: ["Kumiliki nyumba", "Shahada ya chuo kwa kila fani", "Uanachama wa kulipia wa tovuti", "Cheti au kinacholingana nacho na jaribio la msingi la hesabu"], answer: 3, why: "Programu nyingi huomba cheti au kinacholingana nacho na jaribio la ujuzi wa msingi; tangazo linasema lipi." },
      { objective: "O6", q: "Ni wakati gani mzuri wa kufuatilia baada ya kuomba, isipokuwa programu ikisema vinginevyo?", options: ["Saa ile ile", "Kama wiki moja hadi mbili baadaye", "Kamwe", "Kila siku"], answer: 1, why: "Ufuatiliaji mfupi wa adabu baada ya wiki moja hadi mbili unaonyesha nia bila shinikizo." },
      { objective: "O6", q: "Nini kinafanya hatua inayofuata iwe na manufaa katika mpango wako?", options: ["Ina kitendo na tarehe", "Ni ndefu sana", "Haina tarehe ili iwe rahisi kubadilika", "Iko kichwani mwako tu"], answer: 0, why: "Hatua zenye kitendo na tarehe ndizo unazozifanya kweli." },
      { objective: "O6", q: "Programu inakuweka kwenye orodha ya kusubiri. Hatua yako bora ni ipi?", options: ["Kuacha kutafuta programu", "Kulipa ili upande juu kwenye orodha", "Kutowasiliana nao tena kamwe", "Kuendelea na maombi yako mengine na kuuliza jinsi ya kuwa imara zaidi"], answer: 3, why: "Njia ya pili na kuomba maoni vinakuweka ukisonga mbele." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 3, 6, 7, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Aina sahihi ya programu", objective: "O1", notYet: "Mpango hausemi kama kila programu ni uanagenzi, maandalizi ya uanagenzi au programu ya mafunzo.", meets: "Kila programu imetajwa kwa aina sahihi, na mwanafunzi anaweza kusema kwa nini inafaa sasa.", exceeds: "Mpango pia unasema mwanafunzi atafanya nini baada ya kuimaliza (kwa mfano, maandalizi ya uanagenzi kisha uanagenzi)." },
      { name: "Programu mbili halisi zimepatikana", objective: "O2", notYet: "Chini ya programu mbili, au programu isiyo na mdhamini, mahali au njia ya kuomba.", meets: "Programu mbili zenye mdhamini, mahali na jinsi ya kuomba, kutoka apprenticeship.gov, AJC au chanzo kingine rasmi.", exceeds: "Pia inaonyesha tarehe kila moja ilipatikana na programu ya akiba." },
      { name: "Maswali ya kituo cha kazi", objective: "O3", notYet: "Hakuna American Job Center wala maswali yaliyoorodheshwa.", meets: "AJC iliyo karibu na angalau maswali manne, moja likiwa kuhusu fedha za mafunzo.", exceeds: "Mwanafunzi alipiga simu au alitembelea na akaandika majibu na jina la mfanyakazi." },
      { name: "Programu zimekaguliwa", objective: "O4", notYet: "Hakuna ukaguzi ulioonyeshwa, au programu inayoomba ada ili upate kazi.", meets: "Angalau ukaguzi mitatu kwa kila programu, pamoja na dalili za hatari za ulaghai, na matokeo yake.", exceeds: "Pia inalinganisha gharama, muda, cheti na matokeo ya kazi ya programu hizo mbili." },
      { name: "Nyaraka ziko tayari", objective: "O5", notYet: "Hakuna orodha ya nyaraka, au namba halisi za kitambulisho zimeandikwa juu yake.", meets: "Masharti na nyaraka zimewekwa alama Ninayo / Ninaihitaji, pamoja na wapi kupata kila kinachokosekana.", exceeds: "Vitu vyote vinavyokosekana vina tarehe ya kuvipata." },
      { name: "Mpango wenye tarehe", objective: "O6", notYet: "Hatua hazina tarehe, au ziko chini ya tano.", meets: "Hatua tano au zaidi zenye tarehe, tarehe za mwisho na tarehe ya kufuatilia.", exceeds: "Hatua ya kwanza tayari imefanyika au iko kwenye kalenda ya mwanafunzi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotuma angalau ombi moja la uanagenzi au mafunzo ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaotembelea au kupiga simu American Job Center ndani ya siku 30",
      "Wanafunzi wanaokubaliwa katika uanagenzi, maandalizi ya uanagenzi au programu ya mafunzo ndani ya miezi 6, kama walivyoripoti wanafunzi au programu washirika",
      "Wanafunzi wanaoripoti kuepuka ofa ya \"lipa upate kazi\""
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti (kompyuta ya maktaba au ya American Job Center inafaa)",
      "Tovuti za bure: apprenticeship.gov, careeronestop.org, dol.gov, jobcorps.gov, va.gov",
      "Karatasi na kalamu, au app ya maelezo, kwa orodha za kukagua na mpango",
      "Kalenda (ya simu au ya karatasi)",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi huku utafutaji wa \"Jaribu sasa\" ukifanywa moja kwa moja; mweke pamoja mwanafunzi asiyejiamini mtandaoni na mwenzake.",
      "Kabla ya kipindi, tafuta American Job Center, YouthBuild na programu za maandalizi ya uanagenzi za eneo lako ili uweze kuonyesha chaguo halisi za eneo hilo.",
      "Hali za programu hubadilika: kagua jobcorps.gov na apprenticeship.gov wiki unayofundisha na urekebishe chochote kilichopitwa na wakati.",
      "Usiwaombe kamwe wanafunzi kuandika namba halisi za kitambulisho, Social Security au benki kwenye karatasi za mazoezi.",
      "Kwa wanafunzi wanaorudi katika jamii, kuwa na mawasiliano ya programu za eneo za kurudi katika jamii na za msaada wa vitambulisho; kwa maveterani, ukurasa wa GI Bill wa VA na GI Bill Comparison Tool.",
      "Weka alama za kazi ya mwisho kwa rubriki na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
