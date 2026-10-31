"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-medicare-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// US course: Medicare, SHIP, CMS, Social Security and the plan names stay in English, explained in Hausa.

module.exports = {
  id: "seniors-medicare-basics-ha",
  lang: "ha",
  translationOf: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Tushen Ilimin Medicare",
  skills: "Sanin Part A, B, C da D, Kwatanta Original Medicare da Medicare Advantage, Kiyaye lambar Medicare ɗinku, Gano lokacin yin rajistarku, Duba tsarinku kowace kaka, Samun taimako kyauta daga SHIP",
  outcome: "bayyana abin da Part A, B, C da D suke biya, gano lokacin yin rajistarku, jera abin da kuke buƙata don kwatanta tsare-tsare, da samun taimako kyauta marar son kai daga shirin SHIP na jiharku (State Health Insurance Assistance Program) ko 1-800-MEDICARE.",
  about: [
    "Wannan kwas ɗin na mutanen da za su cika shekara 65 ne, da waɗanda suke kan Medicare amma yake rikitar da su, da 'yan iyali masu taimakon iyaye ko kakanni da inshorar lafiya.",
    "Za ku koyi abin da kowane sashe na Medicare yake biya, bambancin Original Medicare da Medicare Advantage, lokacin da za ku iya yin rajista ko canje-canje, yadda ake kiyaye lambar Medicare ɗinku daga zamba, da inda za ku sami taimako kyauta daga mutum na gaske.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Dokokin Medicare, ranaku da kuɗaɗe suna canjawa. Koyaushe ku tabbatar da su a medicare.gov, ta kiran 1-800-MEDICARE, ko wajen mai ba da shawara na SHIP a yankinku, kuma ku tambayi likitanku ko mai sayar da magani game da kulawarku."
  ],
  finalTask: "Ku yi tsarin Medicare na shafi ɗaya: lokacin yin rajistarku (watannin Initial Enrollment Period ɗinku, ko ranakun Open Enrollment na wannan shekara idan kuna da Medicare), waɗanne sassa kuke da su ko kuke buƙata, jerin likitocinku, magungunanku da kantin maganinku, tambayoyi uku da kuke son a amsa muku, da taimakon kyauta da za ku yi amfani da shi (SHIP na yankinku, medicare.gov da 1-800-MEDICARE). Sannan ku tuntuɓi SHIP ɗinku ko ku yi amfani da kayan kwatanta tsare-tsare a medicare.gov.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutane a Amurka da za su cika shekara 65 ko suke kan Medicare, da 'yan iyali masu taimaka musu. Da yawa suna rikicewa da sassan, ranakun ƙarshe, da yawan kiran masu sayarwa da tallace-tallace kowace kaka.",
    startingPoint: "Sun san cewa akwai Medicare kuma wataƙila suna da kati. Yawancinsu ba za su iya bayyana Part A zuwa D ba, ba su san lokacin yin rajistarsu ba, kuma ba su taɓa amfani da kayan kwatanta tsare-tsare na medicare.gov ba ko jin labarin SHIP.",
    gap: "Rashin yin rajista a lokaci na iya kawo tara ta jinkiri har abada, kuma tsarin da bai dace ba na iya barin likitocin mutum ko magungunansa. Sanin sassan, ranakunsu, yadda ake kwatanta tsare-tsare da inda ake samun taimako kyauta marar son kai yana kare lafiyarsu da kuɗinsu, kuma yana nisanta su da zambar Medicare.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: waya don kira, da kwamfuta ko tablet don medicare.gov idan akwai",
      "Lokaci: kusan minti 5 a kowane darasi, a hankali",
      "Kuɗaɗe da wasu dokoki suna canjawa kowace shekara; masu koyo suna duba medicare.gov, ssa.gov ko SHIP don adadin yanzu",
      "Kwas ɗin ba ya ba da shawarar wani tsari; ba a taɓa rubuta lambar Medicare a AI ko ba da ita ga masu kira"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku sassa huɗu na Medicare", action: "bayyana abin da Part A, B, C da D suke biya, da manyan hanyoyi biyu na samun inshora", standard: "kuna samun aƙalla tambayoyi 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan wani ya nemi lambar Medicare ɗinku ko takardar bayani ta nuna kulawar da ba ku samu ba", action: "gane zambar Medicare da kai rahotonta ga 1-800-MEDICARE", standard: "kuna ba da lambarku ga likitocinku, kantin maganinku da tsarinku kaɗai" },
    { id: "O3", condition: "Idan aka ba ku watan da za ku cika shekara 65 da inshorar aikinku", action: "gano Initial Enrollment Period ɗinku da ko Special Enrollment Period zai iya shafar ku", standard: "da watannin farawa da ƙarewa daidai, an tabbatar da su a ssa.gov, medicare.gov ko SHIP" },
    { id: "O4", condition: "Idan aka ba ku likitocinku, magungunanku da kantin maganinku", action: "kwatanta tsare-tsare a medicare.gov ko tare da SHIP a lokacin Open Enrollment", standard: "kuna duba jimillar kuɗin shekara kuma kuna tabbatar cewa likitocinku suna cikin network" },
    { id: "O5", condition: "Idan kuna da tambayoyi game da Medicare", action: "tuntuɓar SHIP na yankinku ko 1-800-MEDICARE da tambayoyinku da jerinku a shirye", standard: "kuna rubuta ranar, sunan mutumin da amsar" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sassan Medicare",
      lessons: [
        {
          objectives: ["O1"],
          title: "Su wane ne Medicare yake domin su, da Part A da B",
          minutes: 5,
          goal: "Faɗin wanda zai iya samun Medicare da abin da Part A da B suke biya.",
          text: [
            "Medicare inshorar lafiya ce ta gwamnatin Amurka ga mutane masu shekara 65 ko fiye, mutane ƙasa da shekara 65 masu wasu nakasa, da mutane na kowace shekara masu End-Stage Renal Disease (lalacewar ƙoda ta dindindin). Hukumar Centers for Medicare & Medicaid Services (CMS) ce take gudanar da ita.",
            "Medicare tana da sassa, da sunaye na haruffa. Part A inshorar asibiti ce. Tana taimakawa wajen biyan kulawa idan aka kwantar da ku a asibiti, da kuma kulawar hospice (kulawar ƙarshen rayuwa) da wasu kulawar lafiya a gida.",
            "Part B inshorar likita ce. Tana taimakawa wajen biyan ziyarar likita, kulawar outpatient (kulawar da kuke komawa gida a rana ɗaya), gwaje-gwaje da yawa da hidimomin rigakafi kamar wasu binciken lafiya da alluran rigakafi.",
            "Part A da Part B tare ana kiransu Original Medicare. Yawancin mutane ba sa biyan premium na wata-wata don Part A idan su ko matansu ko mazajensu sun yi aiki kuma sun biya harajin Medicare na isasshen lokaci. Yawancin mutane suna biyan premium na wata-wata don Part B. Premium da deductible suna canjawa kowace shekara, don haka ku duba adadin wannan shekara a medicare.gov ko ku tambayi SHIP."
          ],
          words: [["Medicare", "shirin inshorar lafiya na gwamnatin Amurka ga mutane masu shekara 65 zuwa sama da wasu matasa masu nakasa."], ["Premium", "kuɗin da kuke biya kowane wata don samun inshora."], ["Deductible", "kuɗin da kuke biya don kulawa kafin inshora ta fara biya."], ["Outpatient", "kulawar da kuke komawa gida a rana ɗaya, kamar ziyarar likita."]],
          slides: [
            { title: "Su wane ne Medicare yake domin su", bullets: ["Mutane masu shekara 65 ko fiye", "Wasu mutane ƙasa da 65 masu nakasa", "Mutane masu lalacewar ƙoda ta dindindin"] },
            { title: "Part A: inshorar asibiti", bullets: ["Zama a asibiti idan aka kwantar da ku", "Hospice da wasu kulawar lafiya a gida"] },
            { title: "Part B: inshorar likita", bullets: ["Ziyarar likita da kulawar outpatient", "Gwaje-gwaje da yawa da hidimomin rigakafi"] },
            { title: "A + B = Original Medicare", bullets: ["Yawanci ba a biyan premium don Part A", "Yawanci ana biyan premium na wata-wata don Part B", "Kuɗaɗen wannan shekara: medicare.gov ko SHIP"] }
          ],
          sources: [{ name: "CMS: Medicare (Part A, B da D, wanda ya cancanta)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Ku rubuta nau'o'in kulawa biyu da ku ko wani a iyalinku kuka samu a shekarar da ta wuce, kamar zama a asibiti, duba lafiya ko gwajin jini. Kusa da kowanne, ku rubuta ko yana ƙarƙashin Part A ko Part B.",
          youCanNow: "faɗin su wane ne Medicare yake domin su, da raba kulawar yau da kullum zuwa Part A ko Part B.",
          quickCheck: [
            { objective: "O1", q: "Mene ne Original Medicare?", options: ["Part A da Part B tare", "Part D kaɗai", "Tsarin Medicare Advantage", "Inshorar Medigap"], answer: 0, why: "Part A (asibiti) da Part B (likita) tare ana kiransu Original Medicare." },
            { objective: "O1", q: "An kwantar da maƙwabcinku a asibiti kwana uku. Wane sashe ne yake taimakawa wajen biyan zaman asibitin?", options: ["Part D", "Part B", "Part A", "Babu ɗaya daga cikinsu"], answer: 2, why: "Part A inshorar asibiti ce don kulawa idan aka kwantar da ku." }
          ]
        },
        {
          objectives: ["O1","O4"],
          title: "Part C da D: Medicare Advantage da tsare-tsaren magani",
          minutes: 5,
          goal: "Bayyana bambancin Original Medicare da tsarin Medicare Advantage, da abin da Part D yake biya.",
          text: [
            "Part C shi ne Medicare Advantage. Waɗannan tsare-tsare ne daga kamfanonin inshora masu zaman kansu da Medicare ta amince da su. Tsarin Medicare Advantage yana ba ku dukkan amfanin Part A da Part B a tsari ɗaya, kuma yawancinsu suna haɗa da biyan magani. Da yawa suna da network: jerin likitoci da asibitocin da ake sa ran ku yi amfani da su.",
            "Part D biyan maganin da likita ya rubuta ne. Kowane mai Medicare zai iya samun sa ta tsare-tsare masu zaman kansu da Medicare ta amince da su. Masu Original Medicare yawanci suna ƙara tsarin magani na Part D daban.",
            "Don haka akwai manyan hanyoyi biyu. Hanya ta ɗaya: Original Medicare (A da B), sau da yawa tare da tsarin magani na Part D daban, kuma wasu mutane suna sayen inshorar Medicare Supplement Insurance (Medigap) don taimakawa da kuɗaɗen da Original Medicare ba ta biya. Hanya ta biyu: tsarin Medicare Advantage (Part C) da ke haɗa A, B da yawanci D.",
            "Babu hanyar da ta fi kyau ga kowa. Ya dogara da likitocinku, magungunanku, inda kuke zaune da inda kuke tafiya, da kasafin kuɗinku. Wannan shi ne ainihin abin da mai ba da shawara na SHIP kyauta yake taimaka muku kwatantawa."
          ],
          words: [["Medicare Advantage (Part C)", "tsari daga kamfani mai zaman kansa, da Medicare ta amince da shi, wanda ya haɗa da Part A da Part B kuma sau da yawa biyan magani."], ["Part D", "biyan maganin da likita ya rubuta ta Medicare, ta tsare-tsare masu zaman kansu."], ["Network", "likitoci, asibitoci da kantunan magani da tsari yake aiki da su."], ["Medigap", "Medicare Supplement Insurance: inshora mai zaman kanta da ke taimakawa biyan kuɗaɗen da Original Medicare ba ta biya."]],
          slides: [
            { title: "Part C: Medicare Advantage", bullets: ["Tsare-tsare masu zaman kansu da Medicare ta amince da su", "Ya haɗa da A da B, yawancinsu da magani", "Sau da yawa yana amfani da network na likitoci"] },
            { title: "Part D: maganin da likita ya rubuta", bullets: ["Kowane mai Medicare zai iya samu", "Ta tsare-tsare masu zaman kansu", "Sau da yawa ana ƙara shi a Original Medicare"] },
            { title: "Manyan hanyoyi biyu", bullets: ["Original Medicare + Part D (+ Medigap ga wasu)", "Ko tsarin Medicare Advantage"] },
            { title: "Wanne ya fi dacewa da ku?", bullets: ["Likitocinku da magungunanku", "Inda kuke zaune da inda kuke tafiya", "Kasafin kuɗinku: ku nemi SHIP ya kwatanta"] }
          ],
          sources: [{ name: "CMS: Tsare-tsaren Medicare Advantage da Part D", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "Ku jera kowane likita da kuke gani da kowane magani da kuke sha, tare da yawan maganin (dose), da kantin maganin da kuke amfani da shi. Ku nemi wani a iyali ya taimaka idan kuna so. Ku ajiye wannan jerin: shi ne abin da kuke buƙata don kwatanta tsare-tsare.",
          youCanNow: "bayyana Part C da D, bayyana manyan hanyoyi biyu na Medicare, da yin jerin da kuke buƙata don kwatanta tsare-tsare.",
          quickCheck: [
            { objective: "O1", q: "Mene ne tsarin Part D?", options: ["Inshorar asibiti", "Biyan maganin da likita ya rubuta daga tsari mai zaman kansa da Medicare ta amince da shi", "Tsarin haƙori", "Fanshon gwamnati"], answer: 1, why: "Part D biyan maganin da likita ya rubuta ne ta tsare-tsare masu zaman kansu da Medicare ta amince da su." },
            { objective: "O1", q: "Aboki ya ce hanya ɗaya, Original Medicare ko Medicare Advantage, ta fi kyau ga kowa. Me za ku ce?", options: ["Ku yarda ku zaɓi wannan", "Koyaushe ku zaɓi premium mafi arha", "Ku zaɓi abin da mai kiran sayarwa ya ba da shawara", "Ya dogara da likitocinku, magungunanku, inda kuke zaune da kasafin kuɗinku"], answer: 3, why: "Babu hanyar da ta fi kyau ga kowa; mai ba da shawara na SHIP kyauta yana taimaka muku kwatantawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kiyaye katin Medicare ɗinku da lambarsa",
          minutes: 4,
          goal: "Gane zambar Medicare da sanin wanda za ku faɗa wa.",
          text: [
            "Katin Medicare ɗinku mai launin ja, fari da shuɗi yana da lambar Medicare a kansa. Ku riƙe shi kamar katin bashi (credit card). Ku nuna shi ga likitocinku, kantin maganinku da tsarinku, kuma ku ajiye shi lafiya.",
            "'Yan damfara suna kira, aika tes ko ƙwanƙwasa ƙofa suna yin kamar daga Medicare suke. Suna iya ba da tayin abin tallafa jiki (brace), kayan gwaji ko sabon kati \"kyauta\", ko su ce amfaninku zai tsaya sai dai idan kun ba da lambarku. Ma'aikacin Medicare na gaske ba zai kira ku ba zato ba tsammani don neman lambar Medicare ɗinku ko bayanan bankinku ba.",
            "Ku duba takardun bayaninku. Original Medicare tana aika Medicare Summary Notice, tsare-tsare kuma suna aika Explanation of Benefits. Ku nemi kulawar da ba ku taɓa samu ba. Idan kun ga wani abu ba daidai ba, ko wani mai kira ya nemi lambarku, ku kai rahoto ga 1-800-MEDICARE.",
            "Idan jika ko aboki yana taimaka muku a intanet, ku zauna tare da shi, ku yi amfani da shafin hukuma medicare.gov kaɗai, kuma kada ku taɓa rubuta lambar Medicare ɗinku a chatbot ko a shafin da kuka isa ta saƙon tes."
          ],
          steps: ["Ku ajiye katinku lafiya, ku ba da lambar ga likitocinku, kantin maganinku da tsarinku kaɗai.", "Ku katse kiran da ba ku zata ba da ke neman lambarku.", "Ku karanta kowace Medicare Summary Notice ko Explanation of Benefits.", "Ku kai rahoton duk abin da ba daidai ba ga 1-800-MEDICARE."],
          words: [["Medicare Summary Notice", "takardar bayani daga Original Medicare da ke jera kulawar da aka nemi biya da lambarku."], ["Explanation of Benefits", "takardar bayani daga tsari da ke nuna abin da aka nemi biya da abin da tsarin ya biya."], ["Zamba", "dabarar satar kuɗi ko bayanan sirri."]],
          slides: [
            { title: "Ku riƙe katinku kamar katin bashi", bullets: ["Ku nuna shi ga likitocinku, kantin maganinku da tsarinku", "Ku ajiye shi lafiya"] },
            { title: "Alamun zamba", bullets: ["Abin tallafa jiki, kayan gwaji ko sabon kati \"kyauta\"", "\"Amfaninku zai tsaya\"", "Kiran da ba ku zata ba mai neman lambarku"] },
            { title: "Ku duba takardun bayaninku", bullets: ["Medicare Summary Notice ko Explanation of Benefits", "Ku nemi kulawar da ba ku taɓa samu ba", "Ku kai rahoton matsala ga 1-800-MEDICARE"] }
          ],
          sources: [{ name: "Medicare.gov: Kai rahoton zamba (ku tabbatar da matakan yanzu a nan)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Ku nemo Medicare Summary Notice ko Explanation of Benefits ɗinku na baya-bayan nan (ko ku nemi wani a iyali ya taimaka ya nemo shi). Ku duba layuka uku: shin kowannensu kulawa ce da kuka samu da gaske?",
          youCanNow: "kiyaye lambar Medicare ɗinku, karanta takardun bayaninku don neman matsala, da sanin inda za ku kai rahoton zamba.",
          quickCheck: [
            { objective: "O2", q: "Mene ne Medicare Summary Notice?", options: ["Lissafin kuɗi da dole ku biya nan take", "Tallar sabon tsari", "Takardar bayani daga Original Medicare da ke jera kulawar da aka nemi Medicare ta biya", "Sabon katin Medicare"], answer: 2, why: "Ku duba Medicare Summary Notice ko Explanation of Benefits ɗinku don neman kulawar da ba ku taɓa samu ba." },
            { objective: "O2", q: "Wani tes ya ce amfanin Medicare ɗinku zai tsaya sai dai idan kun mayar da lambar Medicare ɗinku. Me za ku yi?", options: ["Kada ku amsa, ku kai rahoto ga 1-800-MEDICARE", "Ku amsa da sauri don ku riƙe amfaninku", "Ku aika rabin lambar", "Ku tura shi ga abokai"], answer: 0, why: "Medicare ba za ta tuntuɓe ku ba zato ba tsammani don neman lambarku; ku kai rahoto." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sassan Medicare",
        questions: [
          { objective: "O1", q: "Wane sashe na Medicare ne inshorar asibiti?", options: ["Part D", "Part A", "Part B", "Medigap"], answer: 1, why: "Part A yana taimakawa biyan zama a asibiti, hospice da wasu kulawar lafiya a gida." },
          { objective: "O1", q: "Kakarku tana da duba lafiya wajen likita. Wane sashe ne yawanci yake taimakawa biya?", options: ["Part A", "Part D", "Part B", "Babu"], answer: 2, why: "Part B yana biyan ziyarar likita da kulawar outpatient." },
          { objective: "O1", q: "Mene ne Medicare Advantage?", options: ["Tsari mai zaman kansa da Medicare ta amince da shi wanda ya haɗa da Part A da B", "Waya kyauta", "Biyan kuɗin Social Security", "Wani nau'in asibiti"], answer: 0, why: "Tsare-tsaren Part C masu zaman kansu ne da ke haɗa A, B da yawanci biyan magani." },
          { objective: "O1", q: "A ina ya kamata ku nemo premium na Part B na wannan shekara?", options: ["Saƙon tes daga baƙo", "Jaridar bara", "Hasashen maƙwabci", "Medicare.gov ko mai ba ku shawara na SHIP"], answer: 3, why: "Premium yana canjawa kowace shekara; ku duba majiyar hukuma." },
          { objective: "O2", q: "Wani ya kira yana cewa daga Medicare yake kuma yana buƙatar lambar Medicare ɗinku don aiko muku da abin tallafa jiki kyauta. Me za ku yi?", options: ["Ku ba shi lambar", "Ku katse wayar ku kai rahoto ga 1-800-MEDICARE", "Ku ba shi lambar bankinku a maimakonta", "Ku sake kiransa ta lambar da ya bayar"], answer: 1, why: "Medicare ba ta kira ba zato ba tsammani tana neman lambarku; wannan zamba ce da aka saba gani." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin rajista a kan lokaci da samun taimako",
      lessons: [
        {
          objectives: ["O3"],
          title: "Gano lokacin yin rajistarku",
          minutes: 6,
          goal: "Gano Initial Enrollment Period ɗinku da sanin abin da zai faru idan ya wuce ku.",
          text: [
            "Damarku ta farko ta yin rajista ita ce Initial Enrollment Period (lokacin rajista na farko). Tsawonsa watanni 7 ne: yana farawa watanni 3 kafin watan da za ku cika shekara 65, ya haɗa da watan haihuwarku, kuma yana ƙarewa watanni 3 bayansa. Misali daga CMS: idan za ku cika 65 a watan June (Yuni), lokacinku daga March (Maris) ne zuwa September (Satumba).",
            "Idan kuna karɓar amfanin Social Security tun kafin ku cika 65, yawanci ana yi muku rajistar Part A da B kai tsaye. In ba haka ba, kuna yin rajista ta Social Security. Ku duba ssa.gov ko ku kira Social Security don tabbatar da yadda wannan yake aiki gare ku.",
            "Idan ku ko matarku ko mijinku har yanzu kuna aiki kuma kuna da inshorar lafiya ta wannan aikin, wataƙila za ku iya jira. CMS ta ce kuna iya yin rajista yayin da kuke da wannan inshorar, ko cikin watanni 8 bayan aikin ko inshorar ta ƙare, duk wanda ya fara zuwa. Wannan shi ne Special Enrollment Period (lokacin rajista na musamman). Ku tambayi ofishin amfanin ma'aikata na wurin aikinku da SHIP kafin ku yanke shawarar jira.",
            "Idan lokacinku ya wuce kuma ba ku cancanci Special Enrollment Period ba, kuna iya yin rajista a General Enrollment Period, daga January 1 zuwa March 31 kowace shekara, kuma inshorar tana farawa watan da ke bin watan da kuka yi rajista. Amma kuna iya biyan tarar jinkiri muddin kuna da Part B: CMS ta ce premium zai iya ƙaru da 10% ga kowane cikakken lokaci na watanni 12 da kuka iya samun Part B amma ba ku samu ba. Akwai kuma yiwuwar tara idan ba ku da inshorar magani; ku tambayi SHIP ko ku duba medicare.gov."
          ],
          steps: ["Ku rubuta watan da za ku cika shekara 65.", "Ku ƙirga watanni 3 baya da watanni 3 gaba: wannan shi ne lokacinku na watanni 7.", "Idan kuna da inshorar lafiya ta aiki, ku tambayi wurin aikinku da SHIP ko za ku iya jira.", "Ku sa watan farko na lokacinku a kalandarku.", "Ku tabbatar da bayanan a ssa.gov, medicare.gov ko wajen SHIP."],
          words: [["Initial Enrollment Period", "lokacinku na farko na watanni 7 don yin rajistar Medicare, kusa da ranar cikarku shekara 65."], ["Special Enrollment Period", "damar yin rajista a wajen lokutan da aka saba saboda wani yanayi na rayuwa, kamar rasa inshorar aiki."], ["General Enrollment Period", "daga January 1 zuwa March 31 kowace shekara, ga waɗanda lokacinsu na farko ya wuce su."], ["Tarar jinkiri (late enrollment penalty)", "ƙarin premium da kuke biya saboda kun yi rajista a makare."]],
          slides: [
            { title: "Initial Enrollment Period: watanni 7", bullets: ["Watanni 3 kafin watan cikarku shekara 65", "Watan haihuwarku", "Watanni 3 bayansa"] },
            { title: "Misali", bullets: ["Cika 65 a watan June", "Lokaci: March zuwa September"] },
            { title: "Har yanzu kuna aiki da inshorar aiki?", bullets: ["Wataƙila za ku iya jira", "Ku yi rajista cikin watanni 8 bayan ta ƙare", "Ku fara tambayar wurin aikinku da SHIP"] },
            { title: "Lokacin ya wuce ku?", bullets: ["General Enrollment: January 1 zuwa March 31", "Tarar Part B: har 10% ga kowace cikakkiyar shekara ta jinkiri", "Ku tabbatar a medicare.gov ko wajen SHIP"] }
          ],
          sources: [
            { name: "CMS: Cancanta da rajistar Original Medicare (Part A da B)", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Social Security: Yin rajistar Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Ku gano Initial Enrollment Period na kanku ko na wani a iyalinku: ku rubuta watan haihuwa, sannan watan farko da na ƙarshe na lokacin watanni 7. Idan mutumin yana kan Medicare tuni, ku rubuta ranakun General Enrollment Period a maimakon haka.",
          youCanNow: "gano Initial Enrollment Period, sanin lokacin da za ku iya jira, da sanin kuɗin yin rajista a makare.",
          quickCheck: [
            { objective: "O3", q: "Mene ne Initial Enrollment Period?", options: ["Lokacinku na watanni 7: watanni 3 kafin watan cikarku 65, wannan watan, da watanni 3 bayansa", "Open Enrollment na kaka", "Kowane lokaci da kuke so", "Mako ɗaya bayan ranar haihuwarku"], answer: 0, why: "Tsawonsa watanni 7 ne, a kewayen watan da kuka cika shekara 65." },
            { objective: "O3", q: "Za ku cika 65 a watan October kuma ba ku da inshorar aiki. Waɗanne watanni ne lokacinku?", options: ["October kaɗai", "January zuwa March", "October 15 zuwa December 7", "July zuwa January"], answer: 3, why: "Ku ƙirga watanni 3 baya (July) da watanni 3 gaba (January)." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Duba inshorarku kowace kaka",
          minutes: 5,
          goal: "Amfani da lokacin Open Enrollment na kaka don duba ko tsarinku har yanzu ya dace da ku.",
          text: [
            "Tsare-tsare suna canjawa kowace shekara: kuɗaɗe, magungunan da ake biya, da likitocin da ke cikin network. Kowace kaka, Medicare tana da lokacin Open Enrollment daga October 15 zuwa December 7. A wannan lokacin kuna iya canja tsarin Medicare Advantage ko tsarin magani na Part D, ko ku sauya tsakanin Original Medicare da Medicare Advantage. Canje-canjen suna farawa January 1. Idan kuna farin ciki da inshorarku, ba sai kun yi komai ba.",
            "Kafin Open Enrollment, tsare-tsare suna aika Annual Notice of Change (sanarwar canje-canje ta shekara). Ku karanta ta don ganin canje-canje a premium ɗinku, magungunanku da likitocinku.",
            "Don kwatanta tsare-tsare, ku yi amfani da kayan kwatanta tsare-tsare a medicare.gov. Ku shigar da magungunanku da kantin maganinku daga jerin da kuka yi a Darasi na 2. Ku duba jimillar kuɗin shekara, ba premium na wata-wata kaɗai ba, kuma ku tabbatar cewa likitocinku suna cikin network.",
            "Ku yi hankali da kiran masu sayarwa masu matsi da tallace-tallace a lokacin kaka. Kada kowa ya tilasta muku sauyawa. Mai ba da shawara na SHIP kyauta ne kuma ba ya sayar da tsare-tsare. Masu Medicare Advantage wataƙila suna da wata damar canja tsari a farkon shekara; ku duba ranakun a medicare.gov."
          ],
          steps: ["Ku karanta Annual Notice of Change na tsarinku idan ya iso.", "Ku ɗauki jerin likitocinku, magungunanku da kantin maganinku.", "Tsakanin October 15 da December 7, ku kwatanta tsare-tsare a medicare.gov ko tare da SHIP.", "Ku duba jimillar kuɗin shekara, da cewa likitocinku suna cikin network.", "Idan kun sauya, ku rubuta sabon tsarin da lambar tabbatarwa."],
          words: [["Open Enrollment", "daga October 15 zuwa December 7 kowace shekara, lokacin da masu Medicare za su iya canja tsare-tsare don shekara mai zuwa."], ["Annual Notice of Change", "wasiƙa daga tsarinku kowace kaka da ke jera abin da zai canja a shekara mai zuwa."], ["Formulary", "jerin magungunan da tsari yake biya."]],
          slides: [
            { title: "Tsare-tsare suna canjawa kowace shekara", bullets: ["Kuɗaɗe, magungunan da ake biya, network na likitoci", "Ku karanta Annual Notice of Change ɗinku"] },
            { title: "Open Enrollment", bullets: ["October 15 zuwa December 7", "Canja tsari; sabon tsari yana farawa January 1", "Kuna farin ciki? Ba sai kun yi komai ba"] },
            { title: "Ku kwatanta ta hanyar da ta dace", bullets: ["Ku shigar da magungunanku da kantin maganinku", "Ku duba jimillar kuɗin shekara", "Ku tabbatar likitocinku suna cikin network"] },
            { title: "Babu matsi", bullets: ["Ku ƙyale kiran masu sayarwa masu matsi", "SHIP kyauta ne kuma ba ya sayar da tsare-tsare"] }
          ],
          sources: [
            { name: "CMS: Kayan wayar da kan Open Enrollment na Medicare", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov: Nemo da kwatanta tsare-tsare", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Ku rubuta ranakun Open Enrollment na wannan shekara a kalandarku. Sannan ku nemo Annual Notice of Change na tsarinku (ko ku nemi wani a iyali ya taimaka) ku rubuta abu ɗaya da zai canja a shekara mai zuwa. Idan ba ku kan Medicare tukuna, ku rubuta tambayoyin da za ku yi game da wani tsari.",
          youCanNow: "amfani da lokacin Open Enrollment na kaka don duba tsarinku da kwatanta zaɓuɓɓuka da magungunanku da likitocinku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne Annual Notice of Change?", options: ["Wasiƙa daga tsarinku da ke jera canje-canjen shekara mai zuwa", "Tarar Medicare", "Sabon kati", "Takardar haraji"], answer: 0, why: "Tsare-tsare suna aika ta kafin Open Enrollment don ku duba canje-canje a kuɗaɗe, magunguna da likitoci." },
            { objective: "O4", q: "Tsare-tsaren magani biyu suna da kyau. Ɗaya yana da ƙaramin premium na wata-wata. Me za ku kwatanta?", options: ["Premium na wata-wata kaɗai", "Jimillar kuɗin shekara da magungunanku da kantin maganinku", "Tsarin da ya fi kiran ku", "Tambarin kamfanin (logo)"], answer: 1, why: "Ku duba jimillar kuɗin shekara, ba premium na wata-wata kaɗai ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Samun taimako kyauta daga SHIP da Medicare",
          minutes: 5,
          goal: "Tuntuɓar taimakon Medicare kyauta marar son kai, a shirye da tambayoyinku.",
          text: [
            "Ba sai kun gane Medicare ku kaɗai ba. Kowace jiha tana da State Health Insurance Assistance Program, ko SHIP. SHIP yana ba da shawarar Medicare ta gida, ido da ido, ba tare da kuɗi ba. Masu ba da shawara ba su da son kai: ba sa sayar da inshora. Suna iya taimakawa kwatanta kuɗaɗen tsare-tsare, duba inshora, duba network da bayyana zaɓuɓɓukanku. Ku nemo naku a shiphelp.org.",
            "Taimakon Medicare kanta: shafin hukuma medicare.gov, da layin waya 1-800-MEDICARE (1-800-633-4227), wanda CMS ta ce yana buɗe awa 24 a rana, kwana 7 a mako. Don tambayoyin rajistar Part A da B, ku tuntuɓi Social Security a ssa.gov.",
            "Ku shirya kafin ku kira: ku ajiye katin Medicare ɗinku kusa (kada ku karanta lambar ga duk wanda ya kira ku), jerin likitocinku da magungunanku, wasiƙun tsarinku, da tambayoyinku a rubuce. Ku rubuta bayanai: ranar, sunan mutumin da abin da ya faɗa.",
            "Wani a iyali zai iya shiga kiran da izininku. Idan kuka nemi mataimakin AI ya bayyana wasiƙar Medicare, ku fara cire sunanku, lambar Medicare ɗinku da sauran bayanan sirri, kuma har yanzu ku tabbatar da amsar wajen SHIP ko a medicare.gov."
          ],
          steps: ["Ku je shiphelp.org ku zaɓi jiharku don nemo SHIP na yankinku.", "Ku rubuta tambayoyinku ku tattara jerin likitocinku da magungunanku.", "Ku kira SHIP, ko 1-800-MEDICARE, ko ku yi amfani da medicare.gov.", "Ku rubuta bayanai: rana, suna da amsa.", "Ku sa ranar ƙarshe ta gaba a kalandarku."],
          words: [["SHIP", "State Health Insurance Assistance Program: shawarar Medicare ta gida, kyauta kuma marar son kai."], ["Marar son kai (unbiased)", "ba ya ƙoƙarin sayar muku da wani abu ko tura ku ga zaɓi ɗaya."]],
          slides: [
            { title: "SHIP: taimako kyauta a yankinku", bullets: ["Shawarar Medicare ido da ido", "Kyauta, ba ya sayar da inshora", "Ku nemo naku a shiphelp.org"] },
            { title: "Taimakon Medicare kanta", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), awa 24, kwana 7", "Tambayoyin rajista: ssa.gov"] },
            { title: "Kafin ku kira", bullets: ["Jerin likitocinku da magungunanku", "Wasiƙun tsarinku", "Tambayoyi a rubuce"] },
            { title: "Yayin kiran", bullets: ["Ku rubuta bayanai: rana, suna, amsa", "Wani a iyali zai iya shiga", "Ku sa ranar ƙarshe ta gaba a kalandarku"] }
          ],
          sources: [
            { name: "SHIP: Shirye-shiryen State Health Insurance Assistance", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov: Yin magana da wani (ku tabbatar da lokutan waya a nan)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarin Medicare na shafi ɗaya da lokacin yin rajistarku, sassan da kuke da su ko kuke buƙata, likitocinku, magungunanku da kantin maganinku, tambayoyi uku, da lambar wayar SHIP ɗinku daga shiphelp.org. Sannan ku kira SHIP ɗinku don sa lokacin shawara, ko ku yi amfani da kayan kwatanta tsare-tsare a medicare.gov da jerin magungunanku.",
          youCanNow: "nemo da tuntuɓar taimakon Medicare kyauta, a shirye da tsarinku da tambayoyinku.",
          quickCheck: [
            { objective: "O5", q: "Mene ne SHIP?", options: ["Kamfanin inshora", "Tsarin Medicare Advantage", "Shirin shawarar Medicare kyauta marar son kai a kowace jiha", "Cibiyar kiran masu sayarwa"], answer: 2, why: "SHIP yana ba da shawarar Medicare kyauta ido da ido, kuma ba ya sayar da inshora." },
            { objective: "O5", q: "Za ku kira SHIP yanzu. Me za ku shirya?", options: ["Babu komai; sun san komai game da ku", "Katin bankinku", "Tambayoyinku, jerin likitocinku da magungunanku, da wasiƙun tsarinku", "Lambar Social Security ɗinku don ku fara karanta ta da ƙarfi"], answer: 2, why: "Ku shirya tambayoyinku, jerinku da wasiƙunku, kuma ku rubuta bayanai yayin kiran." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin rajista a kan lokaci da samun taimako",
        questions: [
          { objective: "O3", q: "Za ku cika 65 a watan June. Yaushe ne Initial Enrollment Period ɗinku?", options: ["A June kaɗai", "January zuwa March", "October 15 zuwa December 7", "March zuwa September"], answer: 3, why: "Yana farawa watanni 3 kafin watan haihuwarku kuma yana ƙarewa watanni 3 bayansa." },
          { objective: "O3", q: "Me zai iya faruwa idan kuka yi rajistar Part B a makare ba tare da Special Enrollment Period ba?", options: ["Kuna iya biyan premium mafi yawa muddin kuna da Part B", "Babu komai", "Za a mayar muku da kuɗi", "Ba za ku taɓa samun Medicare ba"], answer: 0, why: "CMS ta ce premium na Part B zai iya ƙaru da 10% ga kowane cikakken watanni 12 da kuka yi jinkiri." },
          { objective: "O4", q: "Yaushe ne Open Enrollment na kaka na Medicare?", options: ["January 1 zuwa March 31", "Watan haihuwarku", "October 15 zuwa December 7", "Kowace rana da kuke so"], answer: 2, why: "Kowace kaka, masu Medicare za su iya canja tsare-tsare daga October 15 zuwa December 7." },
          { objective: "O4", q: "Wace hanya ce mafi kyau ta kwatanta tsare-tsaren magani?", options: ["Ku zaɓi premium na wata-wata mafi ƙanƙanta kawai", "Ku shigar da magungunanku da kantin maganinku ku duba jimillar kuɗin shekara", "Ku zaɓi tsarin da mai kira ya ba da shawara", "Ku zaɓi tsarin da ke da talla mafi kyau"], answer: 1, why: "Jimillar kuɗin shekara da magungunanku yana nuna ainihin farashi." },
          { objective: "O5", q: "Wanne ne gaskiya game da SHIP?", options: ["Yana sayar da tsare-tsaren inshora", "Yana karɓar kuɗi a kowane kira", "Yana ba da shawarar Medicare kyauta marar son kai", "Yana taimakon mutane ƙasa da 65 kaɗai"], answer: 2, why: "Shawarar SHIP kyauta ce, ta gida ce, kuma ba ta da son kai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Ilimin Medicare",
    questions: [
      { objective: "O1", q: "Wa zai iya samun Medicare?", options: ["Mutane ƙasa da shekara 30 kaɗai", "Mutane masu shekara 65 ko fiye, da wasu matasa masu nakasa ko lalacewar ƙoda", "Tsofaffin sojoji kaɗai", "Mutanen da ke zaune a ƙasar waje kaɗai"], answer: 1, why: "Medicare tana kula da mutane masu 65 zuwa sama, wasu masu nakasa da masu End-Stage Renal Disease." },
      { objective: "O1", q: "Part B yawanci yana biyan:", options: ["Zama a asibiti", "Maganin da likita ya rubuta kaɗai", "Wanke haƙori kaɗai", "Ziyarar likita da kulawar outpatient"], answer: 3, why: "Part B inshorar likita ce don likitoci da kulawar outpatient." },
      { objective: "O1", q: "Original Medicare ita ce:", options: ["Part A da Part B", "Part C kaɗai", "Part D kaɗai", "Tsari mai zaman kansa"], answer: 0, why: "Original Medicare tana nufin Part A da B tare." },
      { objective: "O1", q: "Yawancin mutane suna biyan premium na wata-wata don:", options: ["Babu komai", "Part A kaɗai", "Part B", "Katin Medicare ɗinsu"], answer: 2, why: "Yawancin mutane ba sa biyan premium na Part A amma suna biyan na Part B." },
      { objective: "O1", q: "Part D yana biyan:", options: ["Maganin da likita ya rubuta", "Zama a asibiti", "Gilashin ido kaɗai", "Gidan zama"], answer: 0, why: "Part D biyan maganin da likita ya rubuta ne ta Medicare." },
      { objective: "O1", q: "Tsarin Medicare Advantage yawanci:", options: ["Yana biyan magani kaɗai", "Ya haɗa da Part A da B kuma sau da yawa biyan magani", "Bankinku ne yake gudanar da shi", "Yana maye gurbin Social Security"], answer: 1, why: "Tsare-tsaren Part C suna haɗa A, B da yawanci D." },
      { objective: "O4", q: "Mene ne network na tsari?", options: ["Shafinsa na intanet", "Lambar wayarsa", "Likitoci, asibitoci da kantunan magani da yake aiki da su", "Lissafin kuɗinsa na wata-wata"], answer: 2, why: "Tsare-tsare da yawa suna sa ran ku yi amfani da network ɗinsu." },
      { objective: "O4", q: "Me ya kamata ku shirya don kwatanta tsare-tsare?", options: ["Lambar sirrin bankinku (PIN)", "Tallar jarida", "Babu komai", "Jerin likitocinku, magungunanku da kantin maganinku"], answer: 3, why: "Likitocinku da magungunanku ne suke nuna wane tsari ya dace." },
      { objective: "O2", q: "Wani mai kira yana tayin kayan gwaji kyauta idan kun ba da lambar Medicare ɗinku. Wannan:", options: ["Hidimar Medicare ce ta yau da kullum", "Mai yiwuwa zamba ce", "Sake cika magani ne a kantin magani", "Mai ba da shawara na SHIP ne"], answer: 1, why: "Medicare ba ta kira ba zato ba tsammani don neman lambarku; tayin kyauta dabara ce da aka saba gani." },
      { objective: "O2", q: "Medicare Summary Notice ɗinku yana jera keken guragu (wheelchair) da ba ku taɓa samu ba. Ya kamata ku:", options: ["Kai rahoto ga 1-800-MEDICARE", "Ƙyale shi", "Biya shi", "Jefar da takardar"], answer: 0, why: "Kulawar da ba ku taɓa samu ba na iya zama zamba; ku kai rahoto." },
      { objective: "O3", q: "Tsawon Initial Enrollment Period nawa ne?", options: ["Mako 1", "Wata 1", "Shekara 1", "Watanni 7"], answer: 3, why: "Watanni 3 kafin, watan haihuwa da watanni 3 bayansa." },
      { objective: "O3", q: "Kuna karɓar amfanin Social Security kafin 65. Yawanci ana:", options: ["Hana ku har abada", "Yi muku tara", "Yi muku rajistar Part A da B kai tsaye", "Mayar da ku Part D kaɗai"], answer: 2, why: "Waɗanda suke kan Social Security yawanci ana yi musu rajista kai tsaye; ku tabbatar a ssa.gov." },
      { objective: "O3", q: "Kuna da shekara 66 kuma har yanzu inshorar lafiya ta aikinku na yanzu tana kula da ku. Me ya kamata ku yi kafin ku yanke shawarar jira da Part B?", options: ["Babu komai; jira koyaushe yana da kyau", "Ku soke inshorar aikinku", "Ku tambayi ofishin amfanin ma'aikata na wurin aikinku da SHIP", "Ku tambayi mai kiran sayarwa"], answer: 2, why: "Special Enrollment Period zai iya shafar ku, amma ku fara duba yanayinku." },
      { objective: "O3", q: "General Enrollment Period yana gudana daga:", options: ["January 1 zuwa March 31", "October 15 zuwa December 7", "Ranar haihuwarku kaɗai", "June zuwa August"], answer: 0, why: "CMS ta sa General Enrollment Period daga January 1 zuwa March 31 kowace shekara." },
      { objective: "O3", q: "Tarar jinkiri ta Part B za ta iya ƙara premium da:", options: ["1% sau ɗaya", "50% na wata ɗaya", "Babu komai", "10% ga kowane cikakken watanni 12 da kuka iya samun Part B amma ba ku samu ba"], answer: 3, why: "CMS ta ce tarar har 10% ce ga kowane cikakken lokacin watanni 12, muddin kuna da Part B." },
      { objective: "O4", q: "A lokacin Open Enrollment na kaka kuna iya:", options: ["Canja lambar Social Security ɗinku", "Canja tsarin Medicare Advantage ko tsarin magani na shekara mai zuwa", "Karɓar kuɗi daga Medicare", "Soke Medicare kaɗai"], answer: 1, why: "Daga October 15 zuwa December 7 ne kuke iya canja tsare-tsare don January 1." },
      { objective: "O4", q: "Kowace kaka tsarinku yana aiko da wasiƙa da ke jera canje-canjen shekara mai zuwa. Ita ce:", options: ["Annual Notice of Change", "Katin ranar haihuwa", "Takardar biyan haraji", "Rahoton bashi"], answer: 0, why: "Ku karanta Annual Notice of Change kafin Open Enrollment." },
      { objective: "O5", q: "A ina kuke nemo SHIP na yankinku?", options: ["Tallar da ke tasowa (pop-up)", "Hanyar haɗi a cikin saƙon tes", "shiphelp.org", "Kowane wakilin inshora"], answer: 2, why: "shiphelp.org yana jera SHIP na kowace jiha." },
      { objective: "O5", q: "Kuna son ku nemi mataimakin AI ya bayyana wasiƙar Medicare. Da farko ya kamata ku:", options: ["Liƙa lambar Medicare ɗinku", "Ƙara bayanan bankinku", "Aika hoton katinku", "Cire sunanku, lambar Medicare ɗinku da sauran bayanan sirri"], answer: 3, why: "Kada ku taɓa ba da lambobin sirri ga kayan AI; sannan ku tabbatar wajen SHIP ko a medicare.gov." },
      { objective: "O5", q: "Idan kuka kira SHIP ko 1-800-MEDICARE, al'ada mai kyau ita ce:", options: ["Katse wayar da sauri", "Rubuta bayanai: rana, suna da amsa", "Karanta lambarku ga duk wanda ya kira ku", "Manta tambayoyinku"], answer: 1, why: "Bayanan da kuka rubuta suna taimaka muku tunawa da bibiya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      7,
      8,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Lokacin yin rajista",
        objective: "O3",
        notYet: "Babu lokaci, ko watanni ko ranakun ba daidai ba ne.",
        meets: "Watannin Initial Enrollment Period daidai, ko ranakun Open Enrollment na wannan shekara idan yana kan Medicare tuni.",
        exceeds: "Ya rubuta ko Special Enrollment Period zai iya shafar shi, da inda aka tabbatar da shi."
      },
      {
        name: "Sassan da kuke da su ko kuke buƙata",
        objective: "O1",
        notYet: "Wasu sassa sun ɓace ko an haɗa su ba daidai ba.",
        meets: "Ya jera sassan da yake da su ko yake buƙata da abin da kowanne yake biya.",
        exceeds: "Ya faɗi wace hanya (Original Medicare ko Medicare Advantage) yake dubawa, da dalili."
      },
      {
        name: "A shirye don kwatantawa",
        objective: "O4",
        notYet: "Babu jerin likitoci, magunguna ko kantin magani.",
        meets: "Jerin likitoci, magunguna da kantin magani, a shirye don kayan kwatanta tsare-tsare.",
        exceeds: "Ya yi amfani da kayan ko SHIP don kwatanta jimillar kuɗin shekara da network."
      },
      {
        name: "Taimako kyauta da tambayoyi",
        objective: "O5",
        notYet: "Babu tambayoyi, ko ba a jera taimakon kyauta ba.",
        meets: "Tambayoyi uku masu sarari da taimakon kyauta da zai yi amfani da shi: SHIP na yankinsa, medicare.gov da 1-800-MEDICARE.",
        exceeds: "Ya tuntuɓi SHIP ko ya yi amfani da medicare.gov, kuma ya rubuta ranar, sunan da amsar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka tuntuɓi SHIP ɗinsu ko suka yi amfani da kayan kwatanta tsare-tsare na medicare.gov cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi rajista a cikin lokacinsu kuma suka guji tarar jinkiri",
      "Masu koyo da suka kai rahoton zargin zambar Medicare ko cajin da ba daidai ba ga 1-800-MEDICARE"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami don tsarin Medicare na shafi ɗaya",
      "Jerin likitocin mai koyo, magungunansa da kantin maganinsa",
      "Waya, da kwamfuta ko tablet mai intanet don medicare.gov da shiphelp.org idan akwai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kada ku ba da shawarar wani tsari ko shawarar inshora; ku tura masu koyo zuwa SHIP na yankinsu, wanda kyauta ne kuma marar son kai.",
      "Ku duba premium na wannan shekara da bayanan Open Enrollment a medicare.gov kafin kowane zama.",
      "Kada ku taɓa neman masu koyo su ba da lambar Medicare ɗinsu; ku yi amfani da katin misali don atisaye.",
      "Ku gayyaci mai ba da shawara na SHIP na yankin zuwa wani zama idan zai yiwu, musamman kafin October 15.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
