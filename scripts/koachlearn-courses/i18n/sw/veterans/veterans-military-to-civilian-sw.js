"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-military-to-civilian.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-military-to-civilian-sw",
  lang: "sw",
  translationOf: "veterans-military-to-civilian",
  category: "Veterans (military)",
  name: "Kutoka Maisha ya Jeshi hadi Maisha ya Kiraia",
  skills: "Kutumia Transition Assistance Program, Kueleza ujuzi wa jeshi kwa maneno ya kiraia, Kuandika vipengele vya CV ya kiraia, Kujenga mtandao wa watu kwa kazi ya kiraia, Kuzoea utamaduni wa kazi ya kiraia, Kupata msaada na huduma ya afya ya akili",
  outcome: "kutengeneza mpango wa siku 90 wa kuhamia maisha ya kiraia: kutumia Transition Assistance Program na huduma za kazi kwa maveterani, kugeuza uzoefu wako wa jeshi kuwa vipengele vya CV ya kiraia kwa kazi halisi, kujenga mtandao wa watu, kuzoea utamaduni wa kazi ya kiraia, na kujua mahali pa kupata msaada, ikiwemo Veterans Crisis Line (988, kisha bonyeza 1).",
  about: [
    "Kozi hii ni kwa wanajeshi wanaojiandaa kumaliza utumishi au kustaafu, maveterani ambao tayari wametoka na wanatafuta hatua inayofuata, na wenzi na familia wanaohama pamoja nao.",
    "Utajifunza Transition Assistance Program inatoa nini, jinsi ya kueleza kazi yako ya jeshi kwa maneno ambayo waajiri wa kiraia wanaelewa, jinsi ya kuandika na kurekebisha vipengele vya CV, jinsi ya kujenga mtandao wa watu, nini ni tofauti katika sehemu za kazi za kiraia, na mahali pa kupata msaada mabadiliko yanapokuwa magumu.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Programu na kanuni hubadilika, kwa hiyo hakikisha maelezo kwenye dol.gov/agencies/vets, va.gov au ofisi ya kumaliza utumishi ya kambi yako. Ukiwa katika dharura, piga 988 na ubonyeze 1, au tuma ujumbe kwa 838255, wakati wowote."
  ],
  finalTask: "Andika mpango wako wa siku 90 wa kuhamia maisha ya kiraia: (1) warsha za TAP au huduma za kazi kwa maveterani utakazotumia; (2) kazi tano za jeshi zilizoandikwa upya kama vipengele vya CV ya kiraia, zinazolingana na tangazo moja halisi la kazi; (3) watu watatu au matukio matatu ya kujenga mtandao; (4) tabia mbili za kazi ya kiraia utakazozizoeza; (5) orodha yako ya msaada, yenye Veterans Crisis Line (988, kisha bonyeza 1, au tuma ujumbe kwa 838255), Vet Center iliyo karibu nawe na watu wawili unaowaamini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wanaojiandaa kumaliza utumishi au kustaafu, maveterani ambao tayari wametoka na wanatafuta hatua inayofuata, na wenzi na familia wanaohama pamoja nao.",
    startingPoint: "Wana ujuzi mkubwa wa jeshi, nidhamu na kufanya kazi kama timu, na wanaweza kutumia simu au kompyuta. Wengi wanaeleza kazi yao kwa maneno ya jeshi, wana mtandao mdogo wa watu wa kiraia, na hawana uhakika TAP inatoa nini au mahali pa kupata msaada baada ya utumishi.",
    gap: "Kuhamia maisha ya kiraia kunabadilisha kazi, utamaduni na msaada kwa wakati mmoja, na maveterani wengi wanapata shida kupata kazi au kuomba msaada. Wanafunzi wanahitaji mpango halisi wa siku 90: TAP na huduma za kazi zinazofaa, vipengele vya CV ya kiraia vilivyorekebishwa kwa kazi, mtandao wa watu, tabia za kazi ya kiraia na orodha ya msaada yenye msaada wa dharura.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta yenye intaneti",
      "Ustawi: kozi inazungumzia msaada wa afya ya akili; msaada wa dharura (Veterans Crisis Line: 988, kisha bonyeza 1, au tuma ujumbe kwa 838255) unaonyeshwa wazi na unapatikana wakati wowote",
      "Faragha: eleza kazi kwa jumla; hakuna siri za jeshi (classified) wala namba za binafsi katika zana za AI",
      "Maelezo ya programu hubadilika, kwa hiyo wanafunzi wanahakikisha maelezo ya TAP na VA na ofisi yao ya TAP, dol.gov na va.gov"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa njia yako kuu (kazi, shule, ufundi au biashara)", action: "kuchagua warsha za TAP au huduma za kazi kwa maveterani zinazofaa hatua yako inayofuata", standard: "ukitaja angalau mbili na jinsi ya kuzifikia" },
    { id: "O2", condition: "Ukipewa namba au jina la kazi yako ya jeshi", action: "kupata kazi za kiraia zinazolingana nayo na kueleza majukumu yako bila maneno ya jeshi", standard: "ukiwa na majina matatu ya kazi za kiraia na majukumu matatu yaliyoandikwa upya bila vifupisho na yenye angalau namba moja" },
    { id: "O3", condition: "Ukipewa tangazo moja halisi la kazi", action: "kuandika vipengele vya CV ya kiraia vinavyolingana na tangazo hilo", standard: "ukiwa na vipengele vitano, kila kimoja na neno la kitendo, ulichofanya na matokeo, na kila neno likiwa kweli" },
    { id: "O4", condition: "Ukitumia watu unaowajua na programu za kuajiri maveterani", action: "kuandika ombi fupi la adabu la mazungumzo ya kujifunza kuhusu kazi (informational interview) na maswali utakayouliza", standard: "ukitaja watu watatu au matukio matatu ya kujenga mtandao" },
    { id: "O5", condition: "Ukipewa amri ya moja kwa moja uliyowahi kutoa jeshini", action: "kuiandika upya kama ombi la adabu la kiraia na kuorodhesha nguvu za jeshi utakazobaki nazo na tabia utakazorekebisha", standard: "ukiwa na mbili za kila moja" },
    { id: "O6", condition: "Kwa ajili yako au kwa veterani mwenzako", action: "kutengeneza orodha ya msaada yenye jinsi ya kufikia Veterans Crisis Line, Vet Center iliyo karibu nawe na watu wawili unaowaamini", standard: "huku namba za dharura zikiwa zimehifadhiwa kwenye simu yako" }
  ],
  chapters: [
    {
      name: "Sura 1: Panga uhamisho na ueleze ujuzi wako kwa maneno ya kiraia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutumia Transition Assistance Program",
          minutes: 5,
          goal: "Chagua warsha na huduma za TAP zinazofaa hatua yako inayofuata.",
          text: [
            "Transition Assistance Program (TAP), yaani Programu ya Msaada wa Kuhamia Maisha ya Kiraia, inawasaidia wanajeshi na wenzi wao kujiandaa kwa maisha ya kiraia. Ni kazi ya pamoja ya Wizara za Kazi, Ulinzi, Masuala ya Maveterani, Elimu na Usalama wa Ndani, pamoja na Small Business Administration na Office of Personnel Management.",
            "Sehemu ya TAP ya Wizara ya Kazi (Department of Labor, DOL) ina warsha ya siku moja iitwayo Employment Fundamentals of Career Transition kuhusu zana za kutafuta kazi, na warsha ya siku mbili iitwayo Department of Labor Employment Workshop kuhusu CV, kujenga mtandao, kutafuta kazi, mahojiano na kujadiliana. Pia kuna njia ya hiari ya siku mbili iitwayo Career and Credential Exploration ya kuchagua kazi na kupanga jinsi ya kuifikia.",
            "Msaada wa mtu mmoja mmoja pia unatolewa: Employment Navigator and Partnership Program inatoa msaada wa kazi kwa wanajeshi wanaomaliza utumishi na wenzi wao katika kambi fulani. Wenzi na walezi wana warsha zao. Usipoweza kuhudhuria ana kwa ana, kujifunza mtandaoni kunaweza kuhesabiwa, kwa idhini ya meneja au mshauri wako wa TAP.",
            "Anza mapema. Uliza ofisi ya TAP ya kambi yako lini lazima uanze na warsha zipi zinafaa mpango wako: kazi, shule, ufundi, au biashara yako mwenyewe. Tayari umetoka? Ukurasa wa DOL wa huduma za kazi kwa maveterani unaorodhesha rasilimali katika kila jimbo."
          ],
          steps: ["Wasiliana na ofisi ya TAP ya kambi yako na uulize lini lazima uanze.", "Amua njia yako kuu: kazi, shule, ufundi au biashara.", "Jiandikishe kwa warsha zinazofaa, kama DOL Employment Workshop.", "Uliza kuhusu msaada wa mtu mmoja mmoja na warsha za wenzi.", "Tayari umemaliza utumishi? Tafuta rasilimali za maveterani za jimbo lako kwenye dol.gov/agencies/vets."],
          words: [["TAP", "Transition Assistance Program: madarasa na msaada kwa wanajeshi wanaohamia maisha ya kiraia."], ["Kumaliza utumishi (separation)", "kuondoka katika utumishi wa jeshi."], ["Cheti (credential)", "leseni au cheti kinachothibitisha ujuzi."]],
          slides: [
            { title: "TAP ni nini", bullets: ["Msaada wa kuhamia maisha ya kiraia", "Kwa wanajeshi na wenzi wao", "Inaendeshwa na DOL, DoD, VA na mashirika mengine"] },
            { title: "Warsha za DOL", bullets: ["Siku 1: Employment Fundamentals", "Siku 2: CV, mtandao wa watu, mahojiano", "Hiari siku 2: njia ya kazi na vyeti"] },
            { title: "Msaada zaidi", bullets: ["Msaada wa kazi wa mtu mmoja mmoja katika baadhi ya kambi", "Warsha za wenzi na walezi", "Kujifunza mtandaoni kwa idhini"] },
            { title: "Anza mapema", bullets: ["Uliza ofisi yako ya TAP lini uanze", "Chagua warsha zinazofaa njia yako", "Tayari umetoka? Tafuta rasilimali za jimbo lako"] }
          ],
          sources: [
            { name: "DOL VETS: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "DOL VETS: Huduma za kazi kwa maveterani", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Andika njia yako kuu (kazi, shule, ufundi au biashara) na warsha au huduma mbili za TAP zinazoifaa zaidi. Kama tayari umetoka, tafuta jimbo lako kwenye ukurasa wa DOL wa huduma za kazi kwa maveterani na uandike rasilimali moja na jinsi ya kuifikia.",
          youCanNow: "kuchagua warsha za TAP na huduma za kazi kwa maveterani zinazofaa hatua yako inayofuata.",
          quickCheck: [
            { objective: "O1", q: "Nani anaweza kushiriki katika huduma za TAP za DOL?", options: ["Maafisa tu", "Wanajeshi wanaomaliza utumishi na wenzi wao", "Watu ambao tayari wana kazi tu", "Wastaafu tu"], answer: 1, why: "Huduma za TAP ni kwa wanajeshi wanaomaliza utumishi, na wenzi wanaweza kushiriki pia." },
            { objective: "O1", q: "Unapanga kuanza ufundi baada ya kumaliza utumishi. Unafanya nini kwanza?", options: ["Kuacha TAP kwa sababu ni kwa kazi za ofisini tu", "Kusubiri hadi umalize utumishi ndipo ufikirie", "Kumwomba rafiki akuchagulie", "Kuandika njia yako na kuchagua warsha au huduma za TAP zinazoifaa"], answer: 3, why: "Kuchagua warsha zinazofaa njia yako kuu kunafanya TAP iwe na manufaa kwa hatua yako inayofuata." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kueleza ujuzi wa jeshi kwa maneno ya kiraia",
          minutes: 5,
          goal: "Pata kazi za kiraia zinazolingana na kazi yako ya jeshi na ueleze ujuzi wako bila maneno ya jeshi.",
          text: [
            "Mara nyingi wanaoajiri wa kiraia hawajui namba ya kazi yako, cheo au kikosi chako kina maana gani. Ujuzi wako ni wa kweli, lakini unahitaji kusemwa kwa maneno yao.",
            "Anza na zana za bure. O*NET Military Crosswalk inakuruhusu kutafuta namba au jina la kazi ya tawi lako la jeshi. My Next Move for Veterans, iliyoorodheshwa na Wizara ya Kazi, ina utafutaji wa kuhamia kutoka jeshini unaopendekeza kazi za kiraia zinazohusiana na uzoefu wako wa jeshi. Andika majina ya kazi za kiraia wanayopendekeza.",
            "Kisha eleza kwa maneno ya kiraia. Badilisha maneno ya jeshi kwa maneno rahisi: \"NCOIC\" inakuwa \"msimamizi\" au \"kiongozi wa timu\"; \"PCS\" inakuwa \"kuhamishwa makazi\"; \"mission\" inaweza kuwa \"mradi\" au \"operesheni\". Andika vifupisho kwa ukamilifu au uviondoe. Tumia namba zinazoonyesha ukubwa na matokeo: watu wangapi uliwaongoza, thamani ya vifaa uliyowajibika navyo, au safari ngapi za kupeleka mizigo ulisimamia.",
            "Msaidizi wa AI anaweza kusaidia kupendekeza maneno ya kiraia kwa jukumu fulani. Eleza kazi kwa jumla tu. Usiweke kamwe siri za jeshi, taarifa nyeti au taarifa binafsi, na hakikisha kila neno analopendekeza ni kweli."
          ],
          steps: ["Tafuta namba au jina la kazi yako kwenye O*NET Military Crosswalk au My Next Move for Veterans.", "Andika majina matatu ya kazi za kiraia zinazolingana.", "Orodhesha majukumu yako makuu kwa maneno rahisi.", "Badilisha vifupisho na maneno ya jeshi kwa maneno ya kiraia.", "Ongeza namba: watu uliowaongoza, thamani ya vifaa, kazi ulizomaliza."],
          words: [["Namba ya kazi (job code)", "namba ya kazi yako ya jeshi, kama MOS, rating au AFSC."], ["Maneno ya kikundi (jargon)", "maneno maalum ambayo kikundi kimoja tu kinayaelewa."], ["Ujuzi unaohamishika", "ujuzi unaoweza kuutumia katika kazi nyingi tofauti, kama kuongoza timu au kupanga."]],
          slides: [
            { title: "Sema kwa maneno yao", bullets: ["Waajiri huenda hawajui namba ya kazi au cheo chako", "Ujuzi wako ni wa kweli; ueleze kwa maneno yao"] },
            { title: "Zana za bure", bullets: ["O*NET Military Crosswalk", "My Next Move for Veterans", "Andika majina ya kazi za kiraia"] },
            { title: "Eleza kwa maneno ya kiraia", bullets: ["NCOIC -> msimamizi au kiongozi wa timu", "Andika vifupisho kwa ukamilifu au uviondoe", "Ongeza namba: watu, vifaa, matokeo"] },
            { title: "Kutumia AI kwa usalama", bullets: ["Maelezo ya jumla tu", "Usiweke kamwe siri za jeshi wala taarifa binafsi", "Hakikisha kila neno ni kweli"] }
          ],
          sources: [
            { name: "O*NET OnLine: Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC/" },
            { name: "DOL VETS: Huduma za kazi kwa maveterani (My Next Move for Veterans)", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Tafuta namba au jina la kazi yako ya jeshi kwenye O*NET Military Crosswalk au My Next Move for Veterans. Andika majina matatu ya kazi za kiraia inayopendekeza, kisha uandike upya majukumu yako matatu bila vifupisho na yenye angalau namba moja.",
          youCanNow: "kupata kazi za kiraia zinazolingana na kazi yako ya jeshi na kueleza ujuzi wako kwa maneno rahisi ya kiraia.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini ueleze ujuzi wako wa jeshi kwa maneno ya kiraia?", options: ["Wanaoajiri wa kiraia huenda hawaelewi maneno ya jeshi", "Sheria inakataza maneno ya jeshi kwenye CV", "Ili CV yako iwe ndefu zaidi", "Kazi za kiraia hazihitaji ujuzi wako"], answer: 0, why: "Wanaoajiri wanaweza kuthamini tu ujuzi wanaouelewa." },
            { objective: "O2", q: "Jukumu lako limeandikwa \"Served as S-4 NCO for BN.\" Unafanya nini?", options: ["Kuliacha kama lilivyo", "Kuongeza vifupisho zaidi", "Kuandika vifupisho kwa ukamilifu au kuviondoa na kueleza kazi kwa namba", "Kulifuta jukumu hilo"], answer: 2, why: "Vipengele vya kiraia huandika vifupisho kwa ukamilifu au kuviondoa na kuonyesha ukubwa wa kazi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika vipengele vya CV kwa kazi halisi",
          minutes: 6,
          goal: "Andika vipengele vya CV ya kiraia vinavyolingana na tangazo halisi la kazi.",
          text: [
            "Kipengele imara cha CV kinaanza na neno la kitendo, kinasema ulichofanya, na kinaonyesha matokeo, ikiwezekana kwa namba. Mfumo: kitendo + nini + matokeo. Mfano: \"Niliongoza timu ya watu 12 kutunza magari 30, na kuweka 95% yakiwa tayari kwa wakati.\"",
            "Rekebisha CV yako kwa kila kazi. Soma tangazo la kazi na upige mstari chini ya ujuzi na maneno linalotumia, kama \"inventory\" (hesabu ya mali), \"usalama\", \"kupanga ratiba\" au \"huduma kwa wateja\". Kisha tumia maneno hayo hayo katika vipengele vyako, pale yanapokuwa kweli kwako. Waajiri wengi hutumia programu za kompyuta zinazochunguza CV kutafuta maneno haya.",
            "Iweke fupi na ya kiraia. Kwa kawaida ukurasa mmoja au miwili. Weka jina la kazi unayotaka juu. Acha mambo yasiyosaidia kazi hii, na usiorodheshe siri za jeshi. Ongeza leseni na vyeti, na vyeti vyovyote ulivyopata ukiwa jeshini.",
            "Mfano: mtaalamu wa ugavi wa Navy (jeshi la majini) anayeomba kazi ya msimamizi wa ghala anaandika: \"Nilisimamia hesabu ya vipuri 4,000 vyenye thamani ya $2 milioni kwa usahihi wa 99%\" na \"Niliwafundisha wanatimu wapya 8 taratibu za usalama\". Vyote viwili vinatumia maneno kutoka kwenye tangazo."
          ],
          steps: ["Tafuta tangazo moja halisi la kazi unayotaka.", "Piga mstari chini ya ujuzi na maneno linalotumia.", "Andika vipengele vitano: neno la kitendo + ulichofanya + matokeo yenye namba.", "Tumia maneno ya tangazo pale yanapokuwa kweli kwako.", "Ondoa vifupisho na chochote cha siri, kisha isome kwa sauti."],
          words: [["CV (resume)", "hati fupi inayoorodhesha uzoefu wako wa kazi, ujuzi na elimu kwa waajiri."], ["Kurekebisha (tailor)", "kubadilisha CV yako ili ilingane na kazi moja."], ["Neno muhimu (keyword)", "neno muhimu kutoka kwenye tangazo la kazi ambalo waajiri wanalitafuta."]],
          slides: [
            { title: "Mfumo wa kipengele imara", bullets: ["Neno la kitendo + ulichofanya + matokeo", "\"Niliongoza timu ya watu 12 kutunza magari 30\""] },
            { title: "Rekebisha kwa kila kazi", bullets: ["Piga mstari chini ya ujuzi wa tangazo", "Tumia maneno hayo pale yalipo kweli", "Programu za kompyuta huenda zikayatafuta"] },
            { title: "Iweke ya kiraia", bullets: ["Kwa kawaida ukurasa mmoja au miwili", "Bila vifupisho, bila siri za jeshi", "Ongeza leseni na vyeti"] }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi unayotaka. Piga mstari chini ya ujuzi mitano linaouomba. Andika vipengele vitano vya CV kuhusu utumishi wako, kila kimoja na neno la kitendo, ulichofanya na matokeo, ukitumia maneno ya tangazo pale yalipo kweli.",
          youCanNow: "kuandika vipengele vya CV vinavyogeuza uzoefu wako wa jeshi kuwa matokeo ambayo mwajiri wa kiraia anayataka.",
          quickCheck: [
            { objective: "O3", q: "Kurekebisha CV kuna maana gani?", options: ["Kutumia CV ile ile kwa kila kazi", "Kuongeza kila kazi uliyowahi kufanya", "Kuifanya fupi kadiri iwezekanavyo", "Kutumia maneno ya tangazo la kazi pale yanapokuwa kweli kwako"], answer: 3, why: "Kurekebisha kunalinganisha uzoefu wako wa kweli na maneno ya tangazo moja." },
            { objective: "O3", q: "Tangazo linaomba \"inventory management\" (usimamizi wa hesabu ya mali). Ulifuatilia vipuri vya kikosi. Unaandika nini?", options: ["\"Nilifanya mambo ya ugavi\"", "\"Nilisimamia hesabu ya vipuri 2,500 bila hasara yoyote wakati wa ukaguzi\"", "\"Mtaalamu wa usimamizi wa hesabu ya mali kwa miaka 30\" (si kweli)", "Kukiacha"], answer: 1, why: "Kinatumia maneno ya tangazo, neno la kitendo, ulichofanya na matokeo ya kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Panga uhamisho na ueleze ujuzi wako kwa maneno ya kiraia",
        questions: [
          { objective: "O1", q: "Transition Assistance Program ni nini?", options: ["Programu ya mikopo", "Kliniki ya matibabu", "Ofisi ya kuandikisha wanajeshi", "Madarasa na msaada kwa wanajeshi wanaohamia maisha ya kiraia"], answer: 3, why: "TAP inawasaidia wanajeshi na wenzi wao kujiandaa kwa maisha ya kiraia." },
          { objective: "O1", q: "Warsha gani ya DOL inafundisha CV, kujenga mtandao, kutafuta kazi na mahojiano kwa siku mbili?", options: ["Mafunzo ya awali ya jeshi", "Department of Labor Employment Workshop", "Uchunguzi wa VA", "GI Bill"], answer: 1, why: "DOL inaeleza kuwa DOLEW ya siku mbili inafundisha ujuzi huu." },
          { objective: "O2", q: "Zana gani ya bure inasaidia kulinganisha namba ya kazi ya jeshi na kazi za kiraia?", options: ["O*NET Military Crosswalk", "Ripoti ya mikopo", "App ya hali ya hewa", "Chemsha bongo ya mitandao ya kijamii"], answer: 0, why: "Military Crosswalk inatafuta namba na majina ya kazi za jeshi." },
          { objective: "O2", q: "Ungeandikaje \"NCOIC of motor pool\" kwenye CV ya kiraia?", options: ["Kuliacha kama lilivyo", "Kuliondoa kabisa", "\"Nilisimamia timu ya matengenezo ya magari\"", "\"Nilifanya mambo na malori\""], answer: 2, why: "Maneno rahisi na kazi iliyo wazi yanafanya ujuzi ueleweke." },
          { objective: "O3", q: "Kipi ni kipengele imara zaidi cha CV?", options: ["\"Niliwajibika na mambo\"", "\"Nilisimamia hesabu ya vipuri 4,000 kwa usahihi wa 99%\"", "\"Nilikuwa Navy\"", "\"Nilifanya kazi yangu\""], answer: 1, why: "Kina neno la kitendo, kilichofanywa na matokeo yenye namba." }
        ]
      }
    },
    {
      name: "Sura 2: Jenga maisha yako ya kiraia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujenga mtandao wa watu kwa kazi ya kiraia",
          minutes: 5,
          goal: "Andika ujumbe mfupi wa kujenga mtandao unaowaomba watu na programu msaada kuelekea kazi.",
          text: [
            "Kazi nyingi hujazwa kupitia watu wanaojuana. Kujenga mtandao si kuomba kazi kwa kubembeleza. Ni kujenga mahusiano, kuomba ushauri na kuwasaidia wengine pia.",
            "Anza na watu unaowajua: maveterani wenzako ambao tayari wanafanya kazi za kiraia, viongozi wako wa zamani, familia, marafiki, kanisa lako au vikundi vya jamii. Tengeneza wasifu wa kikazi mtandaoni, kama kwenye LinkedIn, wenye kichwa cha kiraia kama \"Msimamizi wa ugavi, miaka 8 ya kuongoza timu\".",
            "Omba mazungumzo mafupi ya kujifunza kuhusu kazi (informational interviews): dakika 15 hadi 20 za kujifunza kuhusu kazi na kampuni ya mtu. Andaa maswali matatu, kama \"Siku ya kawaida inakuwaje?\" na \"Ujuzi gani ni muhimu zaidi hapa?\" Washukuru baadaye.",
            "Tumia programu za maveterani pia. VETS ya DOL inaorodhesha rasilimali za majimbo kwa maveterani na uanagenzi, na HIRE Vets Medallion Program inatambua waajiri waliojitolea kuajiri maveterani. Maonyesho ya kazi ya maveterani na vikundi vya maveterani katika makampuni ni mahali pazuri pa kukutana na watu."
          ],
          steps: ["Orodhesha watu kumi unaowajua wanaofanya kazi za kiraia.", "Tengeneza au sasisha wasifu wa kikazi mtandaoni wenye kichwa cha kiraia.", "Waombe watu wawili mazungumzo ya dakika 15 hadi 20 ya kujifunza kuhusu kazi.", "Andaa maswali matatu na utume ujumbe wa shukrani baadaye.", "Tafuta maonyesho ya kazi ya maveterani na waajiri wanaoajiri maveterani."],
          words: [["Kujenga mtandao (networking)", "kujenga mahusiano na watu wanaoweza kukupa ushauri, habari za kazi au kukutambulisha kwa wengine."], ["Mazungumzo ya kujifunza kuhusu kazi (informational interview)", "mazungumzo mafupi ya kujifunza kuhusu kazi ya mtu, si ya kuomba kazi."], ["Kichwa (headline)", "mstari mfupi chini ya jina lako kwenye wasifu wa kikazi."]],
          slides: [
            { title: "Watu ndio hujaza kazi", bullets: ["Mtandao = mahusiano na ushauri", "Si kubembeleza; wasaidie wengine pia"] },
            { title: "Anza na unaowajua", bullets: ["Maveterani walio katika kazi za kiraia", "Viongozi wa zamani, familia, jamii", "Wasifu wenye kichwa cha kiraia"] },
            { title: "Mazungumzo ya kujifunza kuhusu kazi", bullets: ["Dakika 15 hadi 20", "Maswali matatu yaliyoandaliwa", "Sema asante kila wakati"] },
            { title: "Programu za maveterani", bullets: ["Rasilimali za majimbo kupitia DOL VETS", "Waajiri wa HIRE Vets", "Maonyesho ya kazi ya maveterani"] }
          ],
          sources: [
            { name: "DOL VETS: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "HIRE Vets Medallion Program", url: "https://www.hirevets.gov/" }
          ],
          tryIt: "Andika orodha ya watu kumi unaowajua wanaofanya kazi za kiraia. Chagua wawili na umwandikie kila mmoja ujumbe mfupi wa adabu ukiomba mazungumzo ya dakika 15 kuhusu kazi yao. Andika maswali matatu utakayouliza.",
          youCanNow: "kujenga mtandao wa watu, kuomba mazungumzo ya kujifunza kuhusu kazi na kutumia programu za kuajiri maveterani.",
          quickCheck: [
            { objective: "O4", q: "Kujenga mtandao ni nini?", options: ["Kuwaomba watu usiowajua kazi mara moja", "Kutumia mitandao ya kijamii tu", "Kujenga mahusiano, kuomba ushauri na kuwasaidia wengine pia", "Kumtumia kila mtu CV yako"], answer: 2, why: "Mtandao ni uhusiano wa pande mbili wa ushauri na msaada." },
            { objective: "O4", q: "Rafiki yako anafanya kazi katika kampuni unayoipenda. Unamtumia nini?", options: ["Ombi fupi la adabu la mazungumzo ya dakika 15 kuhusu kazi yake", "CV yako pamoja na \"nitafutie kazi\"", "Ujumbe wa kurasa mbili kuhusu kazi yako yote", "Hakuna kitu; inaaibisha"], answer: 0, why: "Ombi fupi la adabu la mazungumzo ya kujifunza ni rahisi kukubali." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuzoea utamaduni wa kazi ya kiraia",
          minutes: 5,
          goal: "Taja tofauti kuu katika sehemu za kazi za kiraia na upange jinsi utakavyozoea.",
          text: [
            "Sehemu za kazi za kiraia zinaendeshwa tofauti. Mara nyingi hakuna mfumo wa amri ulio wazi, na maamuzi yanaweza kufanywa na vikundi au baada ya majadiliano marefu. Amri zinaweza kuja kama mapendekezo: \"Unaweza kuliangalia hili?\" kwa kawaida maana yake ni \"Tafadhali fanya hili.\"",
            "Mawasiliano mara nyingi ni laini zaidi. Majibu mafupi ya moja kwa moja yaliyofaa ukiwa jeshini yanaweza kusikika makali kwa wafanyakazi wenzako wa kiraia. Jaribu kuongeza maelezo kidogo na sauti ya kirafiki. Uliza maswali mambo yasipokuwa wazi; katika makampuni mengi, kuuliza kunatarajiwa, si dalili ya udhaifu.",
            "Nguvu zako zinafaa kila mahali: kufika mapema, kumaliza unachoanza, kubaki mtulivu chini ya shinikizo, na kuitunza timu yako. Baki nazo. Lakini tarajia mpangilio mdogo, sherehe chache, barua pepe na mikutano mingi zaidi, na wafanyakazi wenzako ambao hawajawahi kuwa jeshini.",
            "Inaweza kuchukua muda kujisikia nyumbani. Tafuta mshauri (mentor) kazini, kama mfanyakazi mwenzako aliye veterani, au jiunge na kikundi cha maveterani kama kampuni ina kimoja. Zungumza na familia kuhusu mabadiliko pia: nao wanazoea."
          ],
          steps: ["Angalia jinsi maamuzi yanavyofanywa katika kazi yako mpya.", "Chukulia maombi ya adabu kama kazi halisi.", "Ongeza maelezo na sauti ya kirafiki kwenye ujumbe wa moja kwa moja.", "Uliza maswali jambo lisipokuwa wazi.", "Tafuta mshauri au kikundi cha maveterani kazini."],
          words: [["Mfumo wa amri (chain of command)", "mpangilio wa jeshi wa nani anaripoti kwa nani."], ["Utamaduni wa kazi", "kanuni zisizoandikwa za jinsi watu wanavyofanya kazi na kuzungumza kazini."], ["Mshauri (mentor)", "mtu mwenye uzoefu zaidi anayekupa ushauri."]],
          slides: [
            { title: "Nini ni tofauti", bullets: ["Mara nyingi hakuna mfumo wa amri ulio wazi", "Maamuzi kwa vikundi au majadiliano", "Maombi yanasikika kama mapendekezo"] },
            { title: "Mawasiliano", bullets: ["Ongeza maelezo na sauti ya kirafiki", "Kuuliza maswali kunatarajiwa"] },
            { title: "Nguvu zinazofaa kila mahali", bullets: ["Kufika kwa wakati, kumaliza kazi, utulivu", "Kuitunza timu yako"] },
            { title: "Kuzoea", bullets: ["Tafuta mshauri au kikundi cha maveterani", "Zungumza na familia: nao wanazoea"] }
          ],
          tryIt: "Fikiria wakati ulipotoa amri fupi ya moja kwa moja jeshini. Iandike upya kama ombi la adabu la kiraia lenye sababu, kama ungeliandika katika barua pepe ya kazini. Kisha andika nguvu mbili za jeshi utakazobaki nazo na tabia mbili utakazorekebisha.",
          youCanNow: "kutaja tofauti kuu za utamaduni wa kazi ya kiraia na kurekebisha jinsi unavyowasiliana.",
          quickCheck: [
            { objective: "O5", q: "Katika kazi nyingi za kiraia, kuuliza maswali ni:", options: ["Dalili ya udhaifu", "Kunatarajiwa na ni kawaida", "Kinyume cha kanuni", "Kwa waajiriwa wapya tu"], answer: 1, why: "Sehemu za kazi za kiraia kwa kawaida zinatarajia watu waulize maswali." },
            { objective: "O5", q: "Unataka mfanyakazi mwenzako atume ripoti kufikia Ijumaa. Unaandikaje?", options: ["\"Ripoti. Ijumaa. Sasa.\"", "\"Ifanye la sivyo.\"", "Usiseme kitu na uifanye mwenyewe", "\"Unaweza kutuma ripoti kufikia Ijumaa? Naihitaji kwa mkutano wa Jumatatu. Asante!\""], answer: 3, why: "Ombi la adabu lenye sababu linafaa utamaduni wa kazi ya kiraia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupata msaada na huduma ya afya ya akili",
          minutes: 5,
          goal: "Tengeneza orodha ya msaada na ujue jinsi ya kupata msaada wa dharura wakati wowote.",
          text: [
            "Kuondoka jeshini ni mabadiliko makubwa: ratiba mpya, utambulisho mpya, labda kuhama, na mawasiliano machache na watu uliotumikia nao. Msongo wa mawazo, kukosa usingizi mzuri, hasira au kujisikia vibaya ni mambo ya kawaida. Kuomba msaada ni nguvu, si udhaifu.",
            "Veterans Crisis Line ni ya bure, ni ya siri na iko wazi saa 24 kwa siku, siku 7 kwa wiki. Piga 988, kisha bonyeza 1. Tuma ujumbe kwa 838255. Au zungumza mtandaoni kwenye veteranscrisisline.net. Ni kwa maveterani, wanajeshi, wanachama wa Guard na Reserve na watu wanaowasaidia, na huhitaji kuwa umeandikishwa katika mafao au huduma za afya za VA ili kuitumia.",
            "Kwa msaada wa kudumu, Vet Centers ni vituo vya ushauri nasaha vya kijamii vinavyotoa ushauri nasaha wa bure na wa siri kwa maveterani, wanajeshi na familia wanaostahili, ikiwemo msaada wa kuzoea maisha baada ya utumishi. Piga 1-877-927-8387 wakati wowote kuzungumza na kuunganishwa na Vet Center iliyo karibu nawe. Huduma za afya za VA pia zinatoa huduma ya afya ya akili kwa maveterani walioandikishwa.",
            "Jenga timu yako mwenyewe pia: watu wawili au watatu unaowaamini, kikundi cha maveterani, vikundi vya imani au vya jamii, na ratiba ya kawaida yenye mazoezi na usingizi. Ukiwa na wasiwasi kuhusu veterani mwenzako, unaweza kupiga Crisis Line kwa ajili yake."
          ],
          steps: ["Hifadhi 988 (kisha bonyeza 1) na namba ya ujumbe 838255 kwenye simu yako.", "Tafuta Vet Center iliyo karibu nawe kwa kupiga 1-877-927-8387.", "Andika majina na namba za watu wawili au watatu unaowaamini.", "Ongeza kikundi kimoja au ratiba inayokusaidia, kama kikundi cha maveterani au mazoezi.", "Wewe au rafiki ukiwa katika dharura, piga 988 na ubonyeze 1 sasa hivi."],
          words: [["Veterans Crisis Line", "msaada wa dharura wa bure, wa siri, saa 24 kila siku kwa maveterani, wanajeshi na wanaowasaidia: 988, kisha bonyeza 1."], ["Vet Center", "kituo cha ushauri nasaha cha kijamii kinachotoa ushauri nasaha wa bure na wa siri kwa maveterani, wanajeshi na familia wanaostahili."], ["Siri (confidential)", "kinachowekwa faragha."]],
          slides: [
            { title: "Mabadiliko ni magumu; kuomba msaada ni nguvu", bullets: ["Ratiba mpya, utambulisho mpya, labda kuhama", "Msongo wa mawazo, kukosa usingizi, hasira ni kawaida"] },
            { title: "Veterans Crisis Line: saa 24 kila siku", bullets: ["Piga 988, kisha bonyeza 1", "Tuma ujumbe kwa 838255", "Zungumza mtandaoni kwenye veteranscrisisline.net"] },
            { title: "Msaada wa kudumu", bullets: ["Vet Centers: ushauri nasaha wa bure na wa siri", "Piga 1-877-927-8387, wakati wowote", "Huduma ya afya ya akili ya VA"] },
            { title: "Timu yako mwenyewe", bullets: ["Watu wawili au watatu unaowaamini", "Vikundi vya maveterani, imani au jamii", "Ratiba: mazoezi na usingizi"] }
          ],
          sources: [
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "VA Vet Centers", url: "https://www.vetcenter.va.gov/" }
          ],
          tryIt: "Kazi ya mwisho: hifadhi 988 (kisha bonyeza 1) na 838255 kwenye simu yako, na uandike orodha yako ya msaada yenye Vet Center iliyo karibu nawe na watu wawili unaowaamini. Kisha maliza mpango wako wa siku 90 wa kuhamia maisha ya kiraia ukiwa na TAP au huduma zako za kazi, vipengele vitano vya CV vilivyorekebishwa, watu watatu au matukio matatu ya kujenga mtandao, na tabia mbili za kazi ya kiraia utakazozizoeza.",
          youCanNow: "kupata msaada wa dharura wakati wowote, kupata msaada wa kudumu, na kuandika mpango wako kamili wa siku 90 wa kuhamia maisha ya kiraia.",
          quickCheck: [
            { objective: "O6", q: "Unaifikiaje Veterans Crisis Line kwa simu?", options: ["Piga 988, kisha bonyeza 1", "Piga 911, kisha bonyeza 9", "Tuma barua pepe kwa kikosi chako cha zamani", "Subiri miadi ya VA"], answer: 0, why: "Veterans Crisis Line ni 988, kisha bonyeza 1, wakati wowote." },
            { objective: "O6", q: "Una wasiwasi kuhusu veterani mwenzako anayeonekana kuwa katika dharura. Unaweza kufanya nini?", options: ["Kusubiri uone kama itapita", "Kuandika kuhusu jambo hilo mtandaoni", "Kupiga Veterans Crisis Line kwa ajili yake: 988, kisha bonyeza 1", "Kumwambia alishughulikie peke yake"], answer: 2, why: "Unaweza kupiga Veterans Crisis Line kwa niaba ya mtu unayemhofia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Jenga maisha yako ya kiraia",
        questions: [
          { objective: "O4", q: "Mazungumzo ya kujifunza kuhusu kazi (informational interview) ni nini?", options: ["Mazungumzo mafupi ya kujifunza kuhusu kazi ya mtu", "Mahojiano ya kazi yenye mkataba", "Uchunguzi wa VA", "Ukaguzi wa kibali cha usalama"], answer: 0, why: "Ni kwa ajili ya kujifunza na kupata ushauri, si kuomba kazi." },
          { objective: "O5", q: "Meneja wa kiraia anasema, \"Unaweza kuiangalia ripoti hii?\" Kwa kawaida ina maana gani?", options: ["Ni hiari; usijali", "Subiri amri ya maandishi", "Tafadhali fanya kazi hii", "Uko matatani"], answer: 2, why: "Maombi ya kiraia mara nyingi yanasikika kama mapendekezo lakini ni kazi halisi." },
          { objective: "O5", q: "Nguvu gani ya jeshi unapaswa kubaki nayo katika kazi ya kiraia?", options: ["Kutumia vifupisho katika kila barua pepe", "Kutouliza maswali kamwe", "Kuwapuuza wafanyakazi wenzako ambao hawajawahi kuwa jeshini", "Kumaliza kile unachoanza"], answer: 3, why: "Kuaminika na kumaliza kazi kunathaminiwa kila mahali." },
          { objective: "O6", q: "Unaifikiaje Veterans Crisis Line kwa simu?", options: ["Piga 911 na uombe VA", "Piga 988, kisha bonyeza 1", "Piga 411", "Mpigie aliyekuandikisha jeshini"], answer: 1, why: "Veterans Crisis Line ni 988, kisha bonyeza 1, wakati wowote." },
          { objective: "O6", q: "Je, lazima uwe umeandikishwa katika mafao ya VA ili kutumia Veterans Crisis Line?", options: ["Ndiyo", "Tu kama ulitumikia miaka 20", "Siku za kazi tu", "Hapana"], answer: 3, why: "Huhitaji kuwa umeandikishwa katika mafao au huduma za afya za VA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutoka Maisha ya Jeshi hadi Maisha ya Kiraia",
    questions: [
      { objective: "O1", q: "Nani anaweza kushiriki katika huduma za TAP za DOL?", options: ["Maafisa tu", "Wastaafu wenye zaidi ya miaka 60 tu", "Wanajeshi wanaomaliza utumishi na wenzi wao", "Raia tu"], answer: 2, why: "Sehemu ya TAP ya DOL inawahudumia wanajeshi wanaomaliza utumishi na wenzi wao." },
      { objective: "O1", q: "Unapaswa kuanza TAP lini?", options: ["Baada ya kuwa umetoka kwa miaka mitano", "Kamwe", "Tu kama tayari una kazi", "Mapema: uliza ofisi ya TAP ya kambi yako lini lazima uanze"], answer: 3, why: "Kuanza mapema kunakupa muda zaidi; ofisi yako ya TAP inaamua muda." },
      { objective: "O1", q: "Warsha gani ni ya hiari na inakusaidia kuchagua kazi na kupanga jinsi ya kuifikia?", options: ["Mafunzo ya awali ya jeshi", "Career and Credential Exploration", "Mazoezi ya mwili", "Uchunguzi wa madai ya VA"], answer: 1, why: "C2E ni njia ya hiari ya DOL ya siku mbili ya kazi na vyeti." },
      { objective: "O1", q: "Huwezi kuhudhuria TAP ana kwa ana. Nini kinaweza kuhesabiwa badala yake?", options: ["Kujifunza mtandaoni, kwa idhini ya meneja au mshauri wako wa TAP", "Hakuna kitu", "Kutazama TV", "Maandishi ya rafiki"], answer: 0, why: "DOL inasema kujifunza mtandaoni kunaweza kuhesabiwa kwa idhini." },
      { objective: "O2", q: "Kwa nini ueleze ujuzi wa jeshi kwa maneno ya kiraia?", options: ["Wanaoajiri wa kiraia huenda hawaelewi maneno ya jeshi", "Inatakiwa na sheria", "Kuficha utumishi wako", "Kufanya CV iwe ndefu zaidi"], answer: 0, why: "Maneno rahisi yanawasaidia waajiri kuona ujuzi wako halisi." },
      { objective: "O2", q: "My Next Move for Veterans inakusaidia:", options: ["Kuwasilisha madai ya VA", "Kupata mkopo", "Kupata kazi za kiraia zinazohusiana na uzoefu wako wa jeshi", "Kupanga miadi na daktari"], answer: 2, why: "DOL inaorodhesha utafutaji wake wa kuhamia kutoka jeshini kwa kazi za kiraia." },
      { objective: "O2", q: "Ufanye nini na vifupisho kwenye CV ya kiraia?", options: ["Tumia vingi kadiri iwezekanavyo", "Viandike kwa herufi nzito", "Buni vipya", "Viandike kwa ukamilifu au uviondoe"], answer: 3, why: "Vifupisho vinawachanganya wasomaji wa kiraia." },
      { objective: "O2", q: "Unapotumia AI kusaidia kueleza majukumu yako kwa maneno ya kiraia, unapaswa:", options: ["Kuweka siri za jeshi ili iwe sahihi", "Kueleza kazi kwa jumla na kuhakikisha kila neno ni kweli", "Kuiacha ibuni matokeo", "Kutoa namba yako ya Social Security"], answer: 1, why: "Usitoe kamwe taarifa nyeti, na weka CV iwe ya kweli." },
      { objective: "O3", q: "Kipengele imara cha CV kinafuata mfumo:", options: ["Cheo + kikosi + kambi", "Burudani + chakula unachopenda", "Namba ya kazi tu", "Neno la kitendo + ulichofanya + matokeo"], answer: 3, why: "Hii inaonyesha ulichofanya na kwa nini kilikuwa muhimu." },
      { objective: "O3", q: "Unarekebishaje CV?", options: ["Kutumia maneno ya tangazo la kazi pale yanapokuwa kweli kwako", "Kutuma CV ile ile kila mahali", "Kuongeza kila kazi uliyowahi kufanya", "Kuifanya iwe na kurasa kumi"], answer: 0, why: "Kurekebisha kunalinganisha ujuzi wako halisi na kazi hiyo." },
      { objective: "O3", q: "Namba gani inafanya kipengele kiwe imara zaidi?", options: ["Saizi ya kiatu chako", "\"Niliwafundisha wanatimu wapya 8\"", "Namba ya simu ya ndani ya kikosi chako", "Namba yako ya utumishi"], answer: 1, why: "Namba zinaonyesha ukubwa na matokeo ya kazi yako." },
      { objective: "O4", q: "Kujenga mtandao kunaelezwa vizuri zaidi kama:", options: ["Kuwaomba watu usiowajua pesa", "Kumtumia kila mtu ujumbe ule ule", "Kujenga mahusiano, kuomba ushauri na kuwasaidia wengine pia", "Kwa watu wenye shahada tu"], answer: 2, why: "Kujenga mtandao kunahusu mahusiano na ushauri." },
      { objective: "O4", q: "Mazungumzo ya kujifunza kuhusu kazi kwa kawaida yanapaswa kuchukua muda gani?", options: ["Saa tatu", "Siku nzima", "Kama dakika 15 hadi 20", "Dakika moja"], answer: 2, why: "Maombi mafupi yanaheshimu muda wa mtu mwingine." },
      { objective: "O4", q: "HIRE Vets Medallion Program inafanya nini?", options: ["Inatambua waajiri waliojitolea kuajiri maveterani", "Inalipa kodi ya nyumba ya maveterani", "Inawasilisha madai ya VA", "Inaendesha mafunzo ya awali ya jeshi"], answer: 0, why: "DOL inaieleza kuwa inatambua kujitolea kwa makampuni kuajiri maveterani." },
      { objective: "O5", q: "Ujumbe wako mfupi wa moja kwa moja unaonekana mkali kwa wafanyakazi wenzako wa kiraia. Nini kinasaidia?", options: ["Kuacha kuzungumza nao", "Kutumia vifupisho zaidi", "Kuandika kwa herufi kubwa zote", "Kuongeza maelezo na sauti ya kirafiki"], answer: 3, why: "Ujumbe laini na ulio wazi zaidi unafaa utamaduni wa kazi ya kiraia." },
      { objective: "O5", q: "Katika kazi nyingi za kiraia, kuuliza maswali ni:", options: ["Hakuruhusiwi", "Kunatarajiwa na ni kawaida", "Dalili ya udhaifu", "Kwa mameneja tu"], answer: 1, why: "Kuuliza jambo lisipokuwa wazi kunatarajiwa katika sehemu nyingi za kazi." },
      { objective: "O6", q: "Namba gani ya simu inakuunganisha na Vet Center iliyo karibu nawe, wakati wowote?", options: ["911", "411", "1-800-MEDICARE", "1-877-927-8387"], answer: 3, why: "VA inaorodhesha 1-877-927-8387 kama kituo cha simu cha Vet Center." },
      { objective: "O6", q: "Unaweza kutuma ujumbe kwa Veterans Crisis Line kwa:", options: ["988", "411", "838255", "911"], answer: 2, why: "Tuma ujumbe kwa 838255 kufikia Veterans Crisis Line." },
      { objective: "O6", q: "Una wasiwasi kuhusu veterani mwenzako. Unaweza kufanya nini?", options: ["Kupiga Veterans Crisis Line kwa ajili yake: 988, kisha bonyeza 1", "Kusubiri na kutumaini", "Kuandika kuhusu jambo hilo mtandaoni", "Kutomwambia mtu yeyote"], answer: 0, why: "Crisis Line pia inawasaidia watu walio na wasiwasi kuhusu veterani." },
      { objective: "O6", q: "Ushauri nasaha wa Vet Center ni:", options: ["Kwa maafisa tu", "Wa bure na wa siri", "Kwa amri ya mahakama tu", "Unalipiwa kwa saa"], answer: 1, why: "VA inasema ushauri nasaha wa Vet Center ni wa bure na wa siri." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "TAP na huduma za kazi",
        objective: "O1",
        notYet: "Hakuna warsha wala huduma zilizotajwa.",
        meets: "Warsha za TAP au huduma za kazi kwa maveterani ambazo mwanafunzi atatumia, zinazolingana na njia yake.",
        exceeds: "Inajumuisha tarehe au jinsi ya kujiandikisha kwa kila moja."
      },
      {
        name: "Vipengele vya CV vilivyorekebishwa",
        objective: "O3",
        notYet: "Vipengele chini ya vitano, au vipengele vyenye maneno ya jeshi na bila matokeo.",
        meets: "Vipengele vitano kwa maneno ya kiraia, kila kimoja na neno la kitendo, kilichofanywa na matokeo, vinavyolingana na tangazo moja halisi.",
        exceeds: "Kila kipengele kinatumia neno kutoka kwenye tangazo na kina namba."
      },
      {
        name: "Kujenga mtandao",
        objective: "O4",
        notYet: "Hakuna watu wala matukio yaliyotajwa.",
        meets: "Watu watatu au matukio matatu ya kujenga mtandao.",
        exceeds: "Ujumbe umeandikwa kwa angalau mmoja, pamoja na maswali ya kuuliza."
      },
      {
        name: "Tabia za kazi ya kiraia",
        objective: "O5",
        notYet: "Hakuna tabia zilizotajwa.",
        meets: "Tabia mbili za sehemu ya kazi ya kiraia ambazo mwanafunzi atazizoeza.",
        exceeds: "Pia anataja nguvu mbili za jeshi atakazobaki nazo."
      },
      {
        name: "Orodha ya msaada",
        objective: "O6",
        notYet: "Hakuna orodha ya msaada, au hakuna namba ya dharura.",
        meets: "Veterans Crisis Line (988, kisha bonyeza 1, au tuma ujumbe kwa 838255), Vet Center iliyo karibu na watu wawili wanaoaminika.",
        exceeds: "Namba zimehifadhiwa kwenye simu ya mwanafunzi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa kipimo cha tathmini)",
      "Wanafunzi wanaohudhuria warsha ya TAP au kuwasiliana na huduma za kazi kwa maveterani ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoomba kazi kwa CV iliyorekebishwa au kufanya mazungumzo ya kujifunza kuhusu kazi ndani ya siku 30",
      "Wanafunzi wanaopata kazi ya kiraia, nafasi ya mafunzo au ya shule ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Tangazo moja halisi la kazi ya kiraia ambayo mwanafunzi anaitaka",
      "O*NET Military Crosswalk au My Next Move for Veterans za bure, na tovuti za dol.gov na va.gov",
      "Karatasi au hati ya mpango wa siku 90 wa kuhamia maisha ya kiraia",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Shiriki Veterans Crisis Line (988, kisha bonyeza 1, au tuma ujumbe kwa 838255) mwanzoni mwa kozi na ujue hatua zenu za kumpeleka mtu kwa msaada ikiwa mwanafunzi yuko katika dhiki.",
      "Weka somo la orodha ya msaada kuwa la faragha: wanafunzi hawalazimiki kushiriki ni nani yuko kwenye orodha yao.",
      "Waalike wenzi na wanafamilia; kuhamia maisha ya kiraia kunaathiri familia nzima.",
      "Waache wanafunzi wazoeze kuandika upya maombi ya adabu wakiwa wawili wawili na wasome vipengele vya CV vya kila mmoja.",
      "Pima mpango wa siku 90 kwa kipimo cha tathmini, na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
