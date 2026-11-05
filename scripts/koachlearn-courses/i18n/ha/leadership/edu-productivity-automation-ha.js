"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-productivity-automation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-productivity-automation-ha",
  lang: "ha",
  translationOf: "edu-productivity-automation",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makaranta da na Ilimi 6: Ƙara Yawan Aiki da Sarrafa Ayyuka ta Atomatik",
  skills: "Gano abubuwan da suka fi cin lokacinku, Rubuta wasiƙun labarai da saƙonni ga iyalai, Gudanar da taro daga ajanda zuwa jerin ayyuka, Taƙaita sakamakon bincike da fom, Gina sauƙaƙan ayyukan atomatik, Auna lokacin da aka tara",
  outcome: "tara lokaci da za a iya aunawa a ayyukan gudanarwar makaranta ta hanyar gina hanyoyin aiki uku masu taimakon AI: wasiƙar labarai ta mako-mako ga iyalai, taron ma'aikata daga ajanda zuwa jerin ayyuka, da rahoton taƙaitaccen bincike (survey), kowanne da binciken mutum da ƙididdigar lokaci kafin da bayan.",
  about: [
    "Wannan kwas na shugabannin makaranta (principal), mataimakansu, manajojin ofis, shugabannin sashe, masu ba da shawara (counselor) da malaman da ke ɗaukar aikin gudanarwa ne. Takardu da saƙonni suna ɗauke lokaci daga ɗalibai. Wannan kwas yana taimaka muku dawo da wani ɓangare na wannan lokaci, lafiya.",
    "Babi na 1 yana farawa da binciken lokaci, sannan ya gina hanyoyin aiki na AI don sadarwa da taruka. Babi na 2 yana komawa kan fom, bincike (survey) da sauƙaƙan ayyukan atomatik, kuma yana ƙarewa da shirin auna lokacin da kuka tara da kuma ci gaba da amfani da hanyoyin aikin.",
    "Ku yi amfani da kayan aikin da gundumarku (district) ta amince da su kaɗai, kuma kada ku sa bayanan sirri na ɗalibai ko ma'aikata a kayan aikin da ba a amince da su ba. Kayan aiki kyauta kamar Google Forms, Microsoft Forms, Google Docs da Microsoft 365 suna aiki ga yawancin ayyuka. Gwajin ilimi yana rufe kowane babi, kuma jarabawa mai tambayoyi 20 tana rufe kwas ɗin. Wannan shi ne kwas na 6 cikin 8 a jerin AI ga Shugabannin Makaranta da na Ilimi."
  ],
  finalTask: "Ku gina hanyoyin aiki uku ku yi amfani da su har mako ɗaya: (1) wasiƙar labarai ta mako-mako ga iyalai, daga gajerun bayanai (bullet notes) zuwa cikakken daftari da aka duba (kuma duk wata fassara wani ƙwararren mai magana da harshen ya duba ta); (2) taron ma'aikata daga ajandar da AI ya rubuta zuwa jerin ayyuka masu masu alhaki da ranaku, wanda aka aika a ranar; (3) gajeren bincike (survey) na ma'aikata ko iyalai wanda kuka taƙaita sakamakonsa da AI ta amfani da bayanan da ba su da sunaye kaɗai. Ku rubuta mintunan da kuka kashe kafin da bayan a kowanne, da binciken mutum da kuka bari a kowace hanyar aiki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin makaranta, mataimakansu, manajojin ofis, shugabannin sashe, masu ba da shawara (counselor) da malamai a makarantun Amurka da ke ɗaukar aikin gudanarwa.",
    startingPoint: "Suna amfani da imel, takardu da fom kowace rana, kuma sun san muhimman abubuwan sirrin ɗalibai daga kwasa-kwasan baya. Suna yin yawancin wasiƙun labarai, rubutun taro da taƙaitattun bincike da hannu, kuma ba su auna tsawon lokacin da suke ɗauka ba.",
    gap: "Takardu da saƙonni suna ɗauke lokaci daga ɗalibai. Ma'aikatan makaranta suna buƙatar hanyoyin aiki na AI masu aminci da za a iya maimaitawa, da binciken mutum a kowanne, da ƙididdigar lokaci kafin da bayan don tabbatar da cewa suna tara lokaci da gaske.",
    constraints: [
      "Ku yi amfani da kayan aikin da gundumar ta amince da su kaɗai; kada ku sa bayanan sirri na ɗalibai ko ma'aikata a kayan aikin da ba a amince da su ba",
      "Kayan aiki kyauta kamar Google Forms, Microsoft Forms, Google Docs da Microsoft 365 suna ɗaukar yawancin ayyuka",
      "Kowace hanyar aiki tana da binciken mutum kafin wani abu ya je wa iyalai",
      "Ƙwararren mai magana da harshen yana duba fassara kafin a aika",
      "Lokaci: gajerun darussa, da mako ɗaya na amfani da hanyoyin aikin"
    ],
    prerequisites: "Ana ba da shawarar kwas ɗin \"AI for School and Educational Leaders 2: AI Tools for Educators\" (AI ga Shugabannin Makaranta da na Ilimi 2: Kayan AI ga Malamai)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku mako na yau da kullum", action: "jera ayyukan gudanarwarku da ake maimaitawa da mintunan da kuke kashewa, da zaɓar uku mafiya dacewa da AI", standard: "kuna jera aƙalla ayyuka goma, kuma hukunci game da wani ɗalibi na musamman yana zama a hannunku" },
    { id: "O2", condition: "Idan aka ba ku gajerun bayanai na mako", action: "mayar da bayanan zuwa wasiƙar labarai ga iyalai da prompt da aka ajiye wanda ake sake amfani da shi", standard: "kuna duba kowace rana, lokaci da wuri, kuma ƙwararren mai magana da harshen ya duba fassarori" },
    { id: "O3", condition: "Don taron ma'aikata ko na ƙungiya", action: "rubuta ajanda mai lokaci da AI, da mayar da rubutun taro zuwa jerin ayyuka masu masu alhaki da ranaku", standard: "kuna aika jerin ayyukan a ranar taron" },
    { id: "O4", condition: "Idan aka ba ku amsoshin bincike (survey) marasa sunaye", action: "taƙaita sakamakon da AI, da duba ƙididdigar da amsoshin", standard: "bayan an fara cire sunaye, imel da sharhin da ke nuna ko wane ne" },
    { id: "O5", condition: "Don wani aiki ɗaya da aka saba yi", action: "kafa sauƙaƙan aikin atomatik, kamar samfurin imel ko dokar rarrabewa, tare da binciken mutum", standard: "an fara gwada shi a kanku, kuma ƙungiyar fasaha ta amince da shi inda ake buƙata" },
    { id: "O6", condition: "Bayan kun yi amfani da hanyoyin aikinku har mako ɗaya", action: "auna mintuna kafin da bayan, da rubuta kowace hanyar aiki a shafi ɗaya", standard: "kuna ƙidaya lokacin dubawa da gyarawa, kuma kuna ajiye shafukan a babban fayil (folder) na tare" }
  ],
  chapters: [
    {
      name: "Babi na 1: Dawo da lokaci a sadarwa da taruka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Binciken lokaci: ina mako yake tafiya?",
          minutes: 5,
          goal: "Gano abubuwa uku mafiya cin lokacinku da ake maimaitawa.",
          text: [
            "Kafin ku sarrafa aiki ta atomatik, ku auna. Har mako ɗaya, ku rubuta ayyukan gudanarwa da ake maimaitawa da kusan tsawon lokacin kowanne: imel, wasiƙun labarai, shirin taro, rubutun taro, fom, rahotanni, jadawali, da jerin masu aiki (duty roster).",
            "Ku zagaye ayyukan da ake yawan maimaitawa, da suke bin tsari iri ɗaya kowane lokaci, kuma ba sa buƙatar bayanan sirri na ɗalibai don rubuta daftari. Waɗannan su ne mafiya dacewa da AI. Ayyukan da ke buƙatar hukunci game da wani ɗalibi ko ma'aikaci na musamman suna zama a hannunku.",
            "Ku zaɓi uku na farko bisa lokacin da suke ɗauka. Waɗannan su ne hanyoyin aikin da za ku gina a wannan kwas, kuma mintunansu su ne lambobinku na \"kafin\" don auna lokacin da aka tara."
          ],
          steps: ["Har mako ɗaya, ku jera ayyukan gudanarwa da ake maimaitawa da mintunan da aka kashe.", "Ku zagaye ayyuka masu yawa, masu tsari, da ba sa buƙatar bayanan sirri na ɗalibai.", "Ayyukan hukunci game da mutane su zauna a hannunku.", "Ku zaɓi uku na farko bisa lokaci.", "Ku ajiye mintunan a matsayin lambobinku na \"kafin\"."],
          words: [["Binciken lokaci (time audit)", "bin diddigin yadda kuke kashe lokacinku don ku inganta shi."], ["Hanyar aiki (workflow)", "matakan da kuke bi don yin wani aiki da ake maimaitawa."]],
          slides: [
            { title: "Ku fara auna", bullets: ["Mako ɗaya na ayyukan da ake maimaitawa", "Kusan mintunan kowanne"] },
            { title: "Ayyuka masu dacewa da AI", bullets: ["Ana yawan yin su kuma suna da tsari", "Ba sa buƙatar bayanan sirri na ɗalibai don daftari", "Hukunci game da mutane yana zama a hannunku"] },
            { title: "Ku zaɓi uku", bullets: ["Uku na farko bisa lokaci", "Mintunansu su ne lambobinku na \"kafin\""] }
          ],
          tryIt: "Ku jera aƙalla ayyukan gudanarwa goma da ake maimaitawa a makonku, da kusan mintunan kowanne. Ku zagaye uku mafiya dacewa da AI.",
          youCanNow: "gano ayyukan da ake maimaitawa inda AI zai fi tara muku lokaci.",
          quickCheck: [
            { objective: "O1", q: "Mene ne binciken lokaci?", options: ["Duba kasafin kuɗin makarantarku", "Bin diddigin lokacin da kuke kashewa a kowane aiki", "Duba halartar ma'aikata", "Gwajin saurin AI"], answer: 1, why: "Binciken lokaci yana nuna inda mako yake tafiya, don ku zaɓi abin da za ku inganta." },
            { objective: "O1", q: "Ɗaya daga cikin abubuwan da ke cin lokacinku shi ne yanke hukuncin ladabtar da wani ɗalibi. Ya kamata ya zama aikin AI?", options: ["E, AI ya fi sauri", "E, idan babu wanda zai sani", "A'a; hukunci game da wani ɗalibi na musamman yana zama a hannunku", "Sai a makonni masu aiki sosai kawai"], answer: 2, why: "Ayyukan da ke buƙatar hukunci game da wani ɗalibi na musamman suna zama a hannun mutum." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wasiƙun labarai da saƙonni ga iyalai",
          minutes: 6,
          goal: "Mayar da gajerun bayanai zuwa wasiƙar labarai mai sarari ga iyalai da prompt da ake sake amfani da shi.",
          text: [
            "Ku riƙa rubuta gajerun bayanai a duk mako: abubuwan da za su faru, ranaku, tunatarwa, bukukuwa (babu sunayen ɗalibai sai dai idan dokokin makarantarku game da hotuna, kafafen yaɗa labarai da bayanan kundi (directory information) sun yarda). A ranar Jumma'a, ku liƙa bayanan tare da prompt da kuka ajiye.",
            "Prompt da ake sake amfani da shi: \"Ka mayar da waɗannan bayanai zuwa wasiƙar labarai mai daɗi da sarari ga iyalan makarantar firamare. Turanci mai sauƙi, gajerun sassa masu kanun labarai, ranaku da rubutu mai kauri, ƙasa da kalmomi 300. Kada ka ƙara wani abu ko wani bayani da babu a cikin bayanaina.\" Ku ajiye shi don wasiƙar ta yi kama iri ɗaya kowane mako.",
            "Ku duba kowace rana, lokaci da wuri da kalandar makaranta. Ga iyalan da ke karanta wasu harsuna, fassarar AI daftari ce: ku sa ƙwararren mai magana da harshen ya duba ta kafin a aika, don iyalai su sami bayani daidai."
          ],
          steps: ["Ku riƙa rubuta gajerun bayanai a duk mako.", "Ku liƙa su tare da prompt ɗin wasiƙar labarai da kuka ajiye.", "Ku duba kowace rana, lokaci da wuri.", "Ku sa ƙwararren mai magana da harshen ya duba fassarori.", "Ku aika, kuma ku ajiye prompt ɗin don mako na gaba."],
          words: [["Prompt da ake sake amfani da shi", "prompt (umarni ga AI) da kuke ajiyewa kuma kuke amfani da shi kowane lokaci don aiki iri ɗaya."], ["Ƙwararren mai magana da harshe", "mutumin da ya iya harshe sosai har zai iya duba fassara ko tana daidai."]],
          slides: [
            { title: "Gajerun bayanai a duk mako", bullets: ["Abubuwan da za su faru, ranaku, tunatarwa, bukukuwa", "Ku bi dokokinku game da sunayen ɗalibai da hotuna"] },
            { title: "Prompt da aka ajiye", bullets: ["Mai daɗi, Turanci mai sauƙi, gajerun sassa", "Ranaku da rubutu mai kauri, ƙasa da kalmomi 300", "\"Kada ka ƙara abin da babu a bayanaina\""] },
            { title: "Kafin a aika", bullets: ["Ku duba ranaku, lokuta, wurare", "Ƙwararren mai magana da harshen ya duba fassarori"] }
          ],
          tryIt: "Ku rubuta gajerun bayanai na wani mako na misali, ku yi amfani da prompt da aka ajiye don mayar da su wasiƙar labarai. Ku duba ta da bayananku, ku auna tsawon lokacin da ya ɗauka.",
          youCanNow: "samar da wasiƙar labarai ga iyalai mai tsari iri ɗaya, wadda aka duba, daga bayanan mako.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku ajiye prompt ɗin wasiƙar labaranku?", options: ["Don ku sake amfani da shi kowane mako", "Don AI ya tuna ɗalibanku", "Don iyalai su gan shi", "Don kada a taɓa buƙatar duba shi"], answer: 0, why: "Prompt da aka ajiye yana sa wasiƙar labarai ta mako-mako ta zama abin da za a iya maimaitawa." },
            { objective: "O2", q: "Wasiƙar labaran AI ta ambaci sayar da kayan gasa (bake sale) da babu a bayananku. Me za ku yi?", options: ["Ku bar shi; iyalai suna son sayar da kayan gasa", "Ku canja ranar", "Ku aika ku gyara daga baya", "Ku cire shi ku ƙara \"Kada ka ƙara komai da babu a bayanaina\" a prompt ɗin"], answer: 3, why: "AI yana iya ƙirƙirar abubuwan da ba su faru ba, don haka prompt ɗin ya hana haka kuma ku duba da bayananku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Taruka: daga ajanda zuwa jerin ayyuka",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta ajanda da mayar da rubutun taro zuwa jerin ayyuka masu masu alhaki da ranaku.",
          text: [
            "Kafin taro: ku ba AI manufar taron, tsawonsa, mahalarta bisa matsayinsu, da batutuwa. Ku nemi ajanda mai lokaci da sakamakon da ake so ga kowane abu (yanke shawara, tattaunawa, sanarwa). Ku aika ta tun da wuri don mutane su zo a shirye.",
            "Bayan taro: ku liƙa rubutunku (bayan cire bayanan sirri game da ɗalibai ko ma'aikata) ku nemi shawarwarin da aka yanke, ayyuka a cikin tebur mai mai alhaki da ranar ƙarshe, da tambayoyin da ba a amsa ba, tare da \"ka rubuta MISSING idan babu mai alhaki ko rana a cikin rubutun; kada ka ƙara komai da babu a cikin rubutun\".",
            "Ku duba jerin ayyukan da abin da kuka tuna, ku cike giɓi, ku aika a ranar. Idan kuna tunanin amfani da na'urar AI mai naɗar taro, ku duba dokar gundumarku kuma ku fara sanar da mahalarta; kada ku taɓa naɗar taruka game da wani ɗalibi, kamar taron IEP (tsarin karatu na musamman) ko na ladabtarwa, da kayan aikin da ba a amince da su ba."
          ],
          steps: ["Ku rubuta ajanda mai lokaci da sakamakon kowane abu.", "Ku aika ta tun da wuri.", "Bayan taron, ku liƙa rubutun bayan cire bayanan sirri.", "Ku sami shawarwarin da aka yanke, ayyuka (mai alhaki, rana) da tambayoyin da ba a amsa ba.", "Ku duba, ku cike giɓi, ku aika a ranar."],
          words: [["Ajanda", "jerin batutuwa da lokutansu a taro."], ["Jerin ayyuka (action list)", "ayyukan da aka amince da su a taro, kowanne da mai alhaki da ranar ƙarshe."]],
          slides: [
            { title: "Kafin taro", bullets: ["Manufa, tsawo, matsayi, batutuwa", "Ajanda mai lokaci", "Sakamakon kowane abu: yanke shawara, tattaunawa, sanarwa"] },
            { title: "Bayan taro", bullets: ["Ku liƙa rubutu ba tare da bayanan sirri ba", "Shawarwari, ayyuka, tambayoyin da ba a amsa ba", "MISSING ga giɓi; kada a ƙara komai"] },
            { title: "Na'urorin naɗar taro", bullets: ["Ku duba doka; ku sanar da mahalarta", "Kada a taɓa amfani da su a taron IEP ko ladabtarwa da kayan da ba a amince ba"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta ajanda mai lokaci don taron ma'aikata ko ƙungiya na gaba. Bayan taron, ku mayar da rubutunku zuwa jerin ayyuka ku aika a ranar. Ku auna lokacin matakan biyu.",
          youCanNow: "gudanar da taruka daga ajanda mai sarari zuwa jerin ayyuka na ranar taron da taimakon AI.",
          quickCheck: [
            { objective: "O3", q: "Me ajanda mai lokaci take ba kowane abu?", options: ["Lokaci da sakamakon da ake so", "Albashin mai magana", "Ƙuri'a", "Hotunan bayani (slides)"], answer: 0, why: "Lokuta da sakamako suna sa taro ya mai da hankali." },
            { objective: "O3", q: "Wata ƙungiya tana son naɗar taron IEP da na'urar AI kyauta da ba a amince da ita ba. Me za ku ce?", options: ["Ku ci gaba, tana ajiye rubutu", "Ku naɗa amma ku goge daga baya", "A'a; ku yi amfani da kayan aikin da aka amince da su kaɗai kuma ku bi doka a tarukan ɗalibai", "Ku naɗi rabinsa kawai"], answer: 2, why: "Tarukan IEP suna da bayanan ɗalibai masu kariya kuma suna buƙatar kayan aikin da aka amince da su da bin doka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Dawo da lokaci a sadarwa da taruka",
        questions: [
          { objective: "O1", q: "Wane aiki ne ya fi dacewa da AI?", options: ["Yanke hukuncin ladabtar da ɗalibi", "Rubuta IEP na wani ɗalibi na musamman", "Wasiƙar labarai ta mako-mako da ke bin tsari iri ɗaya", "Zaɓar malamin da za a tantance"], answer: 2, why: "Ayyuka masu yawa, masu tsari, da babu bayanan sirri sun dace da AI." },
          { objective: "O2", q: "Me yasa za ku ƙara \"Kada ka ƙara komai da babu a bayanaina\" a prompt ɗin wasiƙar labarai?", options: ["Yana hana AI ƙirƙirar abubuwa ko bayanan da ba gaskiya ba", "Yana tsawaita ta", "Yana fassara ta", "Yana ƙara hotuna"], answer: 0, why: "AI yana iya cike giɓi da bayanan ƙirƙira." },
          { objective: "O2", q: "Fassarar AI ta wasiƙar labarai ya kamata:", options: ["A aika ta nan take", "A aika ta ga ma'aikata kaɗai", "A tsallake ta", "Ƙwararren mai magana da harshen ya fara duba ta"], answer: 3, why: "Iyalai sun cancanci bayani daidai." },
          { objective: "O3", q: "Wane taro ne kada a taɓa naɗa da kayan AI da ba a amince da shi ba?", options: ["Taron tsare-tsare na gama-gari", "Taron IEP game da wani ɗalibi", "Ƙungiyar karatun littattafai", "Taron bita bayan atisayen gobara"], answer: 1, why: "Tarukan da suka shafi wani ɗalibi suna da bayanai masu kariya." },
          { objective: "O3", q: "Yaushe ya kamata a aika jerin ayyuka?", options: ["Wata mai zuwa", "Sai idan an nema", "Ba a taɓa ba", "A ranar taron"], answer: 3, why: "Jerin ayyuka na ranar taron yana sa aiki ya ci gaba da tafiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Fom, ayyukan atomatik da auna ribar lokaci",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bincike (survey) da fom: daga amsoshi zuwa taƙaitawa",
          minutes: 6,
          goal: "Taƙaita sakamakon bincike da AI ba tare da bayyana bayanan sirri ba.",
          text: [
            "Google Forms da Microsoft Forms suna tattara amsoshi a cikin takardar lissafi (spreadsheet). Sannan AI zai iya taimaka muku ganin jigogi a cikin sharhi na buɗe, da rubuta gajeren taƙaitawa ga ma'aikata ko iyalai.",
            "Ku fara kare mutane. Ku tsara bincike da ba sa tattara sunaye sai dai idan kuna buƙata da gaske. Kafin ku liƙa amsoshi a kayan AI, ku goge sunaye, imel da duk wani sharhi da ke nuna wane ɗalibi ko ma'aikaci ne. Ku yi amfani da kayan aikin da aka amince da su kaɗai ga duk abin da ke da bayanan ɗalibai.",
            "Prompt: \"Ga sharhin bincike marasa suna daga iyalai game da lokutan ɗaukar yara. Ka haɗa su cikin jigogi, ka ƙidaya nawa ne suka dace da kowane jigo, ka kawo gajerun sharhi biyu da aka saba gani a kowane jigo, ka jera shawarwari uku. Kada ka ƙirƙiri sharhi.\" Sannan ku duba ƙididdigar da kanku da takardar lissafin; AI yakan yi kuskure a ƙidaya."
          ],
          steps: ["Ku tsara bincike ba tare da sunaye ba sai idan ana buƙata.", "Ku cire sunaye, imel da sharhin da ke nuna ko wane ne kafin amfani da AI.", "Ku yi amfani da kayan aikin da aka amince da su ga duk abin da ke da bayanan ɗalibai.", "Ku nemi jigogi, ƙididdiga, sharhi na misali da shawarwari.", "Ku duba ƙididdigar da kanku."],
          words: [["Marar suna (anonymous)", "ba tare da sunaye ko bayanan da ke nuna ko wane ne ba."], ["Jigo (theme)", "ra'ayi ɗaya da ke fitowa a cikin amsoshi da yawa."]],
          slides: [
            { title: "Fom zuwa takardar lissafi zuwa taƙaitawa", bullets: ["Google Forms ko Microsoft Forms", "AI yana gano jigogi a cikin sharhi"] },
            { title: "Ku fara kare mutane", bullets: ["Kada ku tattara sunaye sai idan ana buƙata", "Ku cire bayanan da ke nuna ko wane ne kafin AI", "Kayan da aka amince da su ga bayanan ɗalibai"] },
            { title: "Ku tambaya, sannan ku duba", bullets: ["Jigogi, ƙididdiga, sharhi na misali, shawarwari", "\"Kada ka ƙirƙiri sharhi\"", "Ku duba ƙididdiga da kanku: AI yana kuskure a ƙidaya"] }
          ],
          tryIt: "Ku ƙirƙiri bincike marar suna mai tambayoyi uku a Google Forms ko Microsoft Forms. Ku rubuta amsoshi goma na misali, ku taƙaita su da AI, ku duba ƙididdigar da amsoshin.",
          youCanNow: "mayar da amsoshin bincike zuwa taƙaitawa daidai ba tare da bayyana bayanan sirri ba.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa bincike ya zama marar suna?", options: ["Yana da gajeren take", "Ba ya tattara sunaye ko bayanan da ke nuna ko wane ne", "Shugaban makaranta ne kaɗai ke karanta shi", "Ana aika shi ta imel"], answer: 1, why: "Bincike marar suna ba ya tattara sunaye ko bayanan da ke nuna ko wane ne." },
            { objective: "O4", q: "AI ya ce iyalai 40 sun ambaci wurin ajiye mota. Me za ku yi kafin ku ba da rahoto?", options: ["Ku duba ƙididdigar da takardar lissafin amsoshin", "Ku ba da rahoto kamar yadda yake", "Ku tara shi zuwa 50", "Ku tambayi AI ko ya tabbata"], answer: 0, why: "Ƙididdigar AI na iya zama ba daidai ba, don haka ku duba ta da bayanan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sauƙaƙan ayyukan atomatik: samfura, dokoki da abubuwan farawa",
          minutes: 5,
          goal: "Kafa sauƙaƙan aikin atomatik ɗaya kuma ku bar binciken mutum a cikinsa.",
          text: [
            "Ba komai ne ke buƙatar AI ba. Abubuwa da yawa da ke tara lokaci sauƙaƙan ayyukan atomatik ne: samfuran imel (template) don amsoshin da aka saba, dokokin imel da ke rarraba saƙonni zuwa manyan fayiloli, samfuran takardu don rahotannin da ake maimaitawa, mail merge don wasiƙu na kowane mutum, da tunatarwar kalanda.",
            "Manyan ayyukan atomatik suna haɗa matakai: idan an aika fom, a ƙara layi a takardar lissafi a aika tabbaci; kowace Jumma'a, a tunatar da ma'aikata su aika rubutunsu. Microsoft Power Automate da Google Apps Script za su iya yin haka; ku tambayi ƙungiyar fasaharku abin da aka yarda a gundumarku kafin ku gina wani abu da ya shafi bayanan makaranta.",
            "Ku bar binciken mutum a duk inda aikin atomatik yake aika wani abu ga iyalai ko yake yin canji mai muhimmanci. Ƙaramin kuskure da aka maimaita ta atomatik ga iyalai 500 babban kuskure ne."
          ],
          steps: ["Ku fara da sauƙi: samfura, dokoki, tunatarwa.", "Ku zaɓi aiki ɗaya da ake maimaitawa don sarrafa shi ta atomatik.", "Ku tuntuɓi ƙungiyar fasahar ku kafin haɗa bayanan makaranta.", "Ku ƙara binciken mutum kafin wani abu ya je wa iyalai.", "Ku fara gwadawa da ku kaɗai a matsayin wanda zai karɓa."],
          words: [["Aikin atomatik (automation)", "tsarin da ke yin aiki da kansa idan wani abu ya faru."], ["Abin farawa (trigger)", "abin da ke fara aikin atomatik, kamar aika fom."], ["Mail merge", "yin wasiƙu ko imel da yawa na kowane mutum daga samfuri ɗaya da jeri."]],
          slides: [
            { title: "Sauƙaƙan abubuwan tara lokaci", bullets: ["Samfuran imel da dokokin rarrabewa", "Samfuran takardu", "Mail merge da tunatarwa"] },
            { title: "Matakai da aka haɗa", bullets: ["An aika fom, an ƙara layi, an aika tabbaci", "Power Automate ko Apps Script", "Ku fara tambayar ƙungiyar fasahar ku"] },
            { title: "Ku bar binciken mutum", bullets: ["Kafin wani abu ya je wa iyalai", "Ku fara gwadawa a kanku", "Kurakurai suna ninkuwa ta atomatik"] }
          ],
          tryIt: "Ku kafa sauƙaƙan aikin atomatik ɗaya: samfurin imel don amsar da aka saba, ko dokar da ke rarraba wani nau'in saƙo. Ku gwada shi a kanku, ku rubuta inda binciken mutum yake.",
          youCanNow: "kafa sauƙaƙan ayyukan atomatik lafiya, da binciken mutum inda yake da muhimmanci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne abin farawa (trigger) a aikin atomatik?", options: ["Mutumin da ke amincewa da shi", "Mataki na ƙarshe na hanyar aiki", "Abin da ke fara aikin atomatik", "Wani nau'in imel"], answer: 2, why: "Abin farawa, kamar shigowar sabon saƙo, shi ke fara aikin atomatik." },
            { objective: "O5", q: "Kun gina dokar da ke ba iyalai amsa ta atomatik. Me za ku fara yi?", options: ["Ku kunna ta ga dukkan iyalai lokaci ɗaya", "Ku kashe ta ku manta da ita", "Ku nemi iyalai su gwada ta", "Ku gwada ta da ku kaɗai a matsayin wanda zai karɓa"], answer: 3, why: "Gwadawa a kanku yana kama kurakurai kafin su kai ga mutane da yawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna lokacin da aka tara da ci gaba da shi",
          minutes: 6,
          goal: "Auna lokaci kafin da bayan, da sa hanyoyin aikinku su daɗe.",
          text: [
            "Kun tara lokaci ne kawai idan lambobi sun nuna haka. Ga kowace hanyar aiki, ku kwatanta mintuna kafin (daga binciken lokacinku) da bayan, har da lokacin dubawa. Idan hanyar aiki tana ɗaukar lokaci iri ɗaya saboda gyare-gyare, ku canja prompt ɗin ko ku bar hanyar aikin.",
            "Ku rubuta kowace hanyar aiki a shafi ɗaya: manufarta, prompt ko samfurin da aka ajiye, matakai, binciken mutum, da wanda ke yin ta. Ta haka wani zai iya yin ta idan ba ku nan, kuma sababbin ma'aikata za su iya koyon ta.",
            "Ku raba nasarori da ma'aikata kuma ku gayyace su su kawo nasu hanyoyin aiki. Babban fayil na tare mai prompt da samfuran makaranta yana ninka lokacin da aka tara a dukkan makarantar. Ku sake duba shi kowane zangon karatu (term) don prompt su kasance daidai yayin da kalandar, kayan aiki da dokoki ke canjawa."
          ],
          steps: ["Ku kwatanta mintuna kafin da bayan, har da dubawa.", "Ku gyara ko ku bar hanyoyin aikin da ba sa tara lokaci.", "Ku rubuta kowace hanyar aiki a shafi ɗaya.", "Ku raba a babban fayil na prompt da samfuran makaranta.", "Ku sake dubawa kowane zangon karatu."],
          words: [["Kafin da bayan", "kwatanta wani ma'auni kafin da bayan wani canji."], ["Takardun bayani (documentation)", "matakan da aka rubuta don wasu su iya maimaita wani aiki."]],
          slides: [
            { title: "Ku ƙidaya mintuna", bullets: ["Kafin da bayan", "Har da lokacin dubawa", "Babu riba? Ku gyara ko ku bar shi"] },
            { title: "Shafi ɗaya ga kowace hanyar aiki", bullets: ["Manufa, prompt, matakai", "Binciken mutum da mai alhaki", "Wasu za su iya yin ta"] },
            { title: "Ku yaɗa ribar", bullets: ["Babban fayil na tare na prompt da samfura", "Ku gayyaci hanyoyin aikin ma'aikata", "Ku sake dubawa kowane zangon karatu"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi amfani da hanyoyin aikinku uku har mako ɗaya (wasiƙar labarai, ajandar taro zuwa ayyuka, bincike zuwa taƙaitawa). Ku rubuta mintuna kafin da bayan a kowanne, ku rubuta kowanne a shafi ɗaya da binciken mutum nasa, ku sa su a babban fayil na tare.",
          youCanNow: "gina, auna da raba hanyoyin aikin gudanarwa masu taimakon AI da ke mayar da lokaci ga ɗalibai.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata lokacin da aka tara ya haɗa da shi?", options: ["Lokacin da AI ya ɗauka don amsa kaɗai", "Har da lokacin da aka kashe wajen dubawa da gyarawa", "Mafi kyawun rana a mako kaɗai", "Lokacin da wasu suka kashe"], answer: 1, why: "Lokacin dubawa da gyarawa yana cikin ainihin kuɗin hanyar aiki." },
            { objective: "O6", q: "Wata hanyar aiki har yanzu tana ɗaukar lokaci kamar da saboda kuna gyara kurakuran AI da yawa. Me za ku yi?", options: ["Ku canja prompt ɗin ko ku bar hanyar aikin", "Ku ci gaba da ita, tun da AI sabon abu ne", "Ku daina duba abin da ya fitar", "Ku ƙara kayan AI na biyu"], answer: 0, why: "Hanyar aikin da ba ta tara lokaci ya kamata a inganta ta ko a bar ta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Fom, ayyukan atomatik da auna ribar lokaci",
        questions: [
          { objective: "O4", q: "Kafin ku liƙa sharhin bincike a kayan AI, ya kamata ku:", options: ["Ƙara sunaye don bayani", "Ƙara lambobin shaidar ɗalibai", "Cire sunaye, imel da sharhin da ke nuna ko wane ne", "Kada ku yi komai"], answer: 2, why: "Ku cire bayanan da ke nuna ko wane ne don kare mutane." },
          { objective: "O4", q: "AI ya ce iyalai 40 sun ambaci cunkoson ababen hawa. Ya kamata ku:", options: ["Duba ƙididdigar da takardar lissafin", "Wallafa shi", "Ninka shi", "Watsi da jigon"], answer: 0, why: "AI yakan yi kuskure a ƙidaya." },
          { objective: "O5", q: "Kafin gina aikin atomatik da ya shafi bayanan makaranta, ku tambayi:", options: ["Wani ɗalibi", "Ƙungiyar fasahar ku abin da aka yarda", "Tallar mai sayarwa", "Babu kowa"], answer: 1, why: "Gundumomi suna da dokoki game da haɗa bayanan makaranta." },
          { objective: "O5", q: "Me yasa za ku fara gwada aikin atomatik da ku kaɗai a matsayin wanda zai karɓa?", options: ["Don kama kurakurai kafin su kai ga mutane da yawa", "Ya fi sauri", "Doka ta wajabta", "Don tara takarda"], answer: 0, why: "Kurakurai suna ninkuwa idan an sarrafa su ta atomatik." },
          { objective: "O6", q: "Wata hanyar aiki tana ɗaukar lokaci kamar da saboda gyara kurakuran AI. Ya kamata ku:", options: ["Ci gaba da ita duk da haka", "Ƙara matakai", "Daina dubawa", "Canja prompt ɗin ko bar hanyar aikin"], answer: 3, why: "Ainihin lokacin da aka tara ne kaɗai ke da muhimmanci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makaranta da na Ilimi 6: Ƙara Yawan Aiki da Sarrafa Ayyuka ta Atomatik",
    questions: [
      { objective: "O1", q: "Binciken lokaci:", options: ["Yana duba agogon makaranta", "Yana bin diddigin yadda kuke kashe lokaci a ayyuka", "Binciken kuɗi ne", "Yana ba malamai maki"], answer: 1, why: "Ku auna kafin ku inganta." },
      { objective: "O1", q: "Ayyukan da ke buƙatar hukunci game da wani ɗalibi na musamman ya kamata:", options: ["A sarrafa su ta atomatik", "A ba AI", "Su zauna a hannunku", "A tsallake su"], answer: 2, why: "Shawarwari game da mutane suna zama a hannun mutane." },
      { objective: "O1", q: "Lambobin \"kafin\" su ne:", options: ["Makin jarabawa", "Lambobin waya", "Mintunan da aka kashe kafin sarrafawa ta atomatik", "Layukan kasafin kuɗi"], answer: 2, why: "Suna bar ku auna lokacin da aka tara." },
      { objective: "O2", q: "Prompt ɗin wasiƙar labarai ya kamata ya zama:", options: ["An ajiye shi ana sake amfani da shi kowane mako", "Ana sake rubuta shi daga farko kowane lokaci", "Sirri", "Dogo kuma marar sarari"], answer: 0, why: "Prompt da aka ajiye suna sa ta zama iri ɗaya." },
      { objective: "O2", q: "Kafin aika wasiƙar labarai, ku duba:", options: ["Nau'in haruffa", "Take kaɗai", "Babu komai", "Kowace rana, lokaci da wuri"], answer: 3, why: "Ranaku marasa daidai suna jawo wa iyalai matsaloli na gaske." },
      { objective: "O2", q: "Sunayen ɗalibai a wasiƙun labarai ya kamata su bi:", options: ["Duk abin da AI ya ba da shawara", "Dokokin makarantarku game da kafafen yaɗa labarai da bayanan kundi", "Babu dokoki", "Abin da ake yayi a kafafen sada zumunta"], answer: 1, why: "Makarantu suna da dokoki game da raba bayanan ɗalibai." },
      { objective: "O3", q: "Ajanda mai lokaci tana ba kowane abu:", options: ["Babu komai", "Farashi", "Kalmar sirri", "Lokaci da sakamakon da ake so"], answer: 3, why: "Sakamako suna sa taruka su mai da hankali." },
      { objective: "O3", q: "Jerin ayyuka ya haɗa da:", options: ["Gulma", "Batun kaɗai", "Aiki, mai alhaki da ranar ƙarshe", "Albashi"], answer: 2, why: "Bayyananniyar alhaki tana sa a gama ayyuka." },
      { objective: "O3", q: "Idan rubutun taro bai ambaci mai alhaki ba, ya kamata AI ya rubuta:", options: ["MISSING", "Hasashe", "Sunanku", "Babu komai"], answer: 0, why: "Nuna giɓi yana hana ƙirƙirar masu alhaki." },
      { objective: "O3", q: "Na'urorin AI masu naɗar taro suna buƙatar:", options: ["Amfani a ɓoye", "Duba doka da sanar da mahalarta", "Babu bincike", "Yardar ɗalibai kaɗai"], answer: 1, why: "Naɗar taro yana tayar da batutuwan yarda da sirri." },
      { objective: "O4", q: "Google Forms da Microsoft Forms suna tattara amsoshi a cikin:", options: ["Takardar lissafi (spreadsheet)", "Bidiyo", "Firinta", "Chatbot"], answer: 0, why: "Amsoshi suna sauka a takarda da za ku iya nazarta." },
      { objective: "O4", q: "Bincike marar suna:", options: ["Ba shi da tambayoyi", "Yana tattara adireshin kowa", "Ya saɓa wa doka", "Ba ya tattara sunaye ko bayanan da ke nuna ko wane ne"], answer: 3, why: "Rashin suna yana kare masu amsa." },
      { objective: "O4", q: "Neman AI ya \"kawo sharhi biyu na misali a kowane jigo\" yana taimaka muku:", options: ["Ƙirƙirar sharhi", "Nuna ainihin muryoyin da ke bayan kowane jigo", "Ɓoye sakamako", "Tara takarda"], answer: 1, why: "Ambato suna sa taƙaitawa ta bayyana; duk da haka ku duba su." },
      { objective: "O5", q: "Wanne ne sauƙaƙan aikin atomatik?", options: ["Taron ma'aikata", "Sabon gini", "Dokar imel da ke rarraba saƙonni zuwa manyan fayiloli", "Ziyarar karatu"], answer: 2, why: "Dokoki da samfura suna tara lokaci ba tare da AI ba." },
      { objective: "O5", q: "Mail merge yana yin:", options: ["Hoton jadawali na takardar lissafi", "Wasiƙa ɗaya mai tsawo", "Wasiƙu da yawa na kowane mutum daga samfuri ɗaya da jeri", "Bincike"], answer: 2, why: "Yana keɓance wasiƙu ga mutane da yawa lokaci ɗaya." },
      { objective: "O5", q: "Abin farawa (trigger) shi ne:", options: ["Abin da ke fara aikin atomatik", "Ƙararrawar makaranta", "Kalmar sirri", "Maki"], answer: 0, why: "Kamar aika fom." },
      { objective: "O5", q: "A ina ya kamata binciken mutum ya kasance?", options: ["A ƙarshen shekara", "Babu inda", "Sai bayan ƙorafi", "Kafin a aika wani abu ga iyalai"], answer: 3, why: "Kurakurai ga iyalai suna ninkuwa da sauri." },
      { objective: "O6", q: "Lokacin da aka tara ya kamata ya haɗa da:", options: ["Lokacin rubuta daftari kaɗai", "Lokacin da aka kashe wajen dubawa da gyarawa", "Babu komai", "Lokacin wasu mutane kaɗai"], answer: 1, why: "Lokacin dubawa yana cikin ainihin kuɗin." },
      { objective: "O6", q: "Rubuta kowace hanyar aiki a shafi ɗaya yana bari:", options: ["A goge ta", "Kada kowa ya gan ta", "AI ya ba ta maki", "Wasu su yi ta idan ba ku nan"], answer: 3, why: "Takardun bayani suna sa hanyoyin aiki su ci gaba da rayuwa." },
      { objective: "O6", q: "Ya kamata a sake duba babban fayil na prompt na makaranta:", options: ["Duk bayan shekaru goma", "Ba a taɓa ba", "Kowane zangon karatu", "Ɗalibai kaɗai"], answer: 2, why: "Kalandar, kayan aiki da dokoki suna canjawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 3, 4, 7, 9, 11, 13, 16, 17]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Hanyar aikin wasiƙar labarai", objective: "O2", notYet: "Ba a duba wasiƙar labarai da bayanan ba, ko an bar wata fassara ba a duba ba.", meets: "Gajerun bayanai sun zama cikakken daftari da aka duba, kuma ƙwararren mai magana da harshen ya duba duk wata fassara.", exceeds: "Ana amfani da prompt da aka ajiye wanda ya hana ƙara komai da babu a bayanan." },
      { name: "Hanyar aikin taro", objective: "O3", notYet: "Babu jerin ayyuka, ko akwai ayyuka marasa masu alhaki ko ranaku.", meets: "Ajandar da AI ya rubuta da jerin ayyuka masu masu alhaki da ranaku, wanda aka aika a ranar.", exceeds: "An nuna inda babu mai alhaki kuma an bi diddigin su." },
      { name: "Hanyar aikin bincike", objective: "O4", notYet: "Bayanan sun ƙunshi sunaye, ko ba a duba ƙididdiga ba.", meets: "An taƙaita sakamakon bincike da AI ta amfani da bayanan da ba su da sunaye kaɗai.", exceeds: "An duba ƙididdiga da takardar lissafi kuma an kawo sharhi na misali a kowane jigo." },
      { name: "An auna lokaci", objective: "O6", notYet: "Ba a rubuta mintuna kafin ko bayan ba.", meets: "An rubuta mintuna kafin da bayan a kowace hanyar aiki.", exceeds: "Mintunan bayan sun haɗa da lokacin dubawa da gyarawa." },
      { name: "Binciken mutum", objective: "O5", notYet: "Wata hanyar aiki tana aika wani abu ga iyalai ba tare da binciken mutum ba.", meets: "Kowace hanyar aiki tana faɗin binciken mutum da aka bari a cikinta.", exceeds: "An rubuta kowace hanyar aiki a shafi ɗaya a babban fayil na tare don wasu su iya yin ta." }
    ]
  },
  evaluation: {
    results: [
      "Ma'aikatan da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Mintunan da aka tara a kowane mako a cikin hanyoyin aiki uku (bayanan kafin da bayan)",
      "Hanyoyin aikin da har yanzu ake amfani da su bayan kwanaki 30 (binciken biyo baya)",
      "Makarantun da ke da babban fayil na tare na hanyoyin aiki a shafi ɗaya da ake sake dubawa kowane zangon karatu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da mataimakin AI da gundumar ta amince da shi",
      "Google Forms ko Microsoft Forms, da Google Docs ko Microsoft 365",
      "Sauƙaƙan rajistar lokaci don mintuna kafin da bayan",
      "Kusan minti 60 don darussa da gwaje-gwaje, da mako ɗaya na amfani da hanyoyin aikin"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi binciken lokaci a matsayin ƙungiya ku kwatanta abubuwan da suka fi cin lokaci.",
      "Kada ku sa bayanan sirri na ɗalibai ko ma'aikata a kayan aikin da ba a amince da su ba; ku yi amfani da amsoshin bincike na misali a atisaye.",
      "Ku tambayi ƙungiyar fasaha waɗanne ayyukan atomatik aka yarda kafin kowa ya gina ɗaya.",
      "Ku sa ma'aikata su gwada ayyukan atomatik a kansu kafin su kai ga iyalai.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku tattara mintuna kafin da bayan don raba ribar lokaci da makarantar."
    ]
  }
};
