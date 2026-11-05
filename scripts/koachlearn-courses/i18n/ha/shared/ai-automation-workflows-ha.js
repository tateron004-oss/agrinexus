"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-automation-workflows.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-automation-workflows-ha",
  lang: "ha",
  translationOf: "ai-automation-workflows",
  category: "Small Business",
  name: "Aiki da Kai (Automation) da AI da Tsarin Aiki Mai Wayo",
  skills: "Zana tsarin aiki, Gane ayyukan da za a sa su yi kansu, Tsara automation mai abin farawa da ayyuka, Ƙara matakin AI, Ginawa da gwada automation, Sa ido da gyara shi",
  outcome: "zana taswirar aikin da ake maimaitawa, tsara automation mai abin farawa (trigger), ayyuka (actions) da matakin AI, gina shi a kayan aiki marar code, gwada shi da bayanan gwaji, da barin mutum ya duba inda kuskure zai cutar.",
  about: [
    "Automation (aiki da kai) yana nufin manhaja tana yi muku matakan da ke gundura: kwafe amsoshin fom zuwa spreadsheet (takardar lissafi), aika imel na tabbatarwa, ajiye rasit, tunatar da wani game da ranar ƙarshe. Ƙara AI yana bar automation ɗin ya karanta, ya ware, ya kuma rubuta, misali taƙaita buƙata ko rubuta daftarin amsa.",
    "Wannan kwas ɗin na masu ƙananan kasuwanci ne, ma'aikata da masu sa kai na ƙungiyoyin agaji (nonprofit), da ma'aikatan da ke son ƙwarewar da masu ɗaukar aiki ke daraja. Misalai sun haɗa da kamfanin share-share da ke karɓar buƙatun farashi, ƙungiyar agaji da ke rajistar masu sa kai, da mataimakin ofis da ke sarrafa takardun biyan kuɗi (invoice).",
    "Za ku zana taswirar aiki na gaske, ku tsara automation a takarda, sannan ku gina shi a kayan aiki marar code kamar Zapier, Microsoft Power Automate ko Make, ko da abubuwan da ke cikin Google Forms da Sheets. Kowane darasi yana ɗaukar kusan minti biyar tare da aikin \"Gwada yanzu\", gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina automation guda ɗaya da ke aiki don ƙungiya ta gaske ko ta atisaye: misali, fom na buƙata da ke ajiye kowace amsa a spreadsheet, yana amfani da matakin AI don taƙaitawa da ware buƙatar, kuma yana aika daftarin amsa ta imel ga ma'aikaci don ya amince. Ku rubuta taswirar aikin, abin farawa da ayyuka, gwaje-gwaje biyar da sakamakonsu, da wanda ke duba abin da ya fito.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci, manajojin ofis da ma'aikata, da masu shirya ayyuka a ƙungiyoyin agaji ko coci, waɗanda ke sarrafa fom, imel, rajista da tunatarwa iri ɗaya kowane mako.",
    startingPoint: "Suna amfani da imel, spreadsheet da fom na intanet, kuma wataƙila sun gwada mataimakin AI. Yawancinsu ba su taɓa gina automation ko haɗa manhajoji biyu ba, kuma ba su da ƙwarewar rubuta code.",
    gap: "Ana ɓata sa'o'i wajen kwafe, ajiye takardu, tunatarwa da tabbatarwa da hannu, kuma wasu abubuwa suna ɓacewa. Masu koyo suna buƙatar tsara da gina automation marar code mai aminci, mai matakin AI, su gwada shi, kuma su bar mutum yana da iko inda kuskure zai cutar, don su adana lokaci ba tare da aika saƙonni marasa daidai ko fallasa bayanai ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; babu rubuta code",
      "Na'urori: ana buƙatar kwamfuta don gina automation",
      "Kuɗi: tsare-tsaren kyauta da na gwaji suna da iyaka; kayan aiki da farashi suna canjawa, don haka masu koyo suna duba shafin farashin kowanne",
      "Sirri: babu lambobin kati, lambobin Social Security, bayanan lafiya ko kalmomin sirri (password) ta matakin AI; a gwada da bayanan ƙirƙira kawai",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya, da ƙarin lokacin ginawa da gwadawa"
    ],
    prerequisites: "Babu. Sanin Google Forms ko Microsoft Forms da spreadsheet zai taimaka."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku automation na yau da kullum", action: "gane abin farawarsa, ayyukansa da inda matakin AI zai dace", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Don aikin da ake yi aƙalla sau ɗaya a mako", action: "zana kowane mataki tare da wanda ke yi, kayan aikin da ake amfani da shi da tsawon lokaci, da yi wa kowane mataki alama: automation, daftarin AI tare da duban mutum, ko a bar wa mutum", standard: "tare da ƙiyasin lokacin da za a adana kowane mako" },
    { id: "O3", condition: "Kafin ku yi amfani da kowane kayan aiki", action: "rubuta tsarin automation mai abin farawa, ayyuka, prompt na AI, wuraren duban mutum da dokokin bayanai", standard: "tare da amincewar mutum duk inda kuskure zai cutar" },
    { id: "O4", condition: "Ta amfani da fom, spreadsheet da kayan aiki marar code", action: "gina automation da ke ajiye amsoshi, yana gudanar da matakin AI, kuma yana aika daftari don amincewa", standard: "ta yadda tsarin farko zai yi aiki kafin a ƙara matakin AI" },
    { id: "O5", condition: "Idan kuna da automation ɗin da kuka gina", action: "gwada shi da shigarwa biyar na gwaji, har da masu wuya, da gyara abin da ya lalace", standard: "da bayanan ƙirƙira kawai, an gyara kowace matsala kuma an sake gwadawa" },
    { id: "O6", condition: "Idan automation ɗin ya fara aiki da gaske", action: "sa ido kan tarihin gudanarwa, saita faɗakarwar kuskure, naɗa mai kula, da rubuta takardar umarni mai shafi ɗaya", standard: "ta yadda wani zai iya gudanar da shi ko ya kashe shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara tsarin aiki mai wayo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne automation da tsarin aiki na AI",
          minutes: 4,
          goal: "Bayyana abin farawa, ayyuka da inda matakin AI ke dacewa.",
          text: [
            "Kowane automation yana da tsari iri ɗaya. Abin farawa (trigger) shi ne abin da ke fara shi: an aika fom, imel ya iso, wata rana ta zo. Ayyuka (actions) su ne abin da ke biyo baya: ƙara layi a spreadsheet, aika imel, ƙirƙirar aiki.",
            "Automation na yau da kullum yana bin dokoki tsayayyu: idan fom ya iso, kwafe shi zuwa takardar. Matakin AI yana ƙara aikin da ke kama da tunani: karanta saƙo ya yanke ko ƙorafi ne, tambaya ce ko damar ciniki (sales lead); taƙaita shi a jimloli biyu; rubuta daftarin amsa mai ladabi.",
            "Kayan aiki daban-daban suna amfani da sunaye daban-daban. Zapier yana kiran automation \"Zap\", Power Automate yana kiransa \"flow\", Make kuma yana kiransa \"scenario\". Ma'anar ɗaya ce: idan wannan ya faru, yi wancan."
          ],
          words: [["Automation (aiki da kai)", "manhaja tana yi muku matakai ba tare da mutum ya yi su kowane lokaci ba."], ["Trigger (abin farawa)", "abin da ke fara automation."], ["Action (aiki)", "matakin da automation ke yi bayan abin farawa."], ["Workflow (tsarin aiki)", "jerin matakan da ake bi don kammala wani aiki."]],
          slides: [
            { title: "Idan wannan ya faru, yi wancan", bullets: ["Abin farawa (trigger): abin da ke fara shi", "Ayyuka (actions): abin da ke biyo baya"] },
            { title: "Ƙara matakin AI", bullets: ["Ware: ƙorafi, tambaya ko damar ciniki", "Taƙaita a jimloli biyu", "Rubuta daftarin amsa don mutum ya duba"] },
            { title: "Ma'ana ɗaya, sunaye daban", bullets: ["Zapier: Zap", "Power Automate: flow", "Make: scenario"] }
          ],
          tryIt: "Ku rubuta automation uku na \"idan wannan ya faru, yi wancan\" da kuke fata kuna da su a wurin aiki, a gida ko a wata ƙungiya da kuke ciki. Ku zagaye wanda zai iya amfani da matakin AI.",
          youCanNow: "bayyana kowane automation a matsayin abin farawa da ayyuka, da faɗin inda AI zai iya taimakawa.",
          quickCheck: [
            { objective: "O1", q: "Me Power Automate ke kiran automation?", options: ["Zap", "Scenario", "Flow", "Macro"], answer: 2, why: "Power Automate yana kiransa flow; Zapier yana kiransa Zap, Make kuma yana kiransa scenario." },
            { objective: "O1", q: "Kuna son a ware kowane sabon saƙo a matsayin ƙorafi, tambaya ko damar ciniki. Wane sashe ne ke yin haka?", options: ["Matakin AI", "Abin farawa", "Layin spreadsheet", "Adireshin imel"], answer: 0, why: "Karanta saƙo da ware shi aiki ne mai kama da tunani na matakin AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zana taswirar aiki da gano abin da za a sa ya yi kansa",
          minutes: 5,
          goal: "Zana taswirar aikin da ake maimaitawa mataki-mataki, ku zaɓi matakan da za a sa su yi kansu.",
          text: [
            "Kafin ku gina, ku zana taswirar aikin kamar yadda ake yinsa yau. Ku rubuta kowane mataki, wanda ke yinsa, kayan aikin da yake amfani da shi da tsawon lokacin da yake ɗauka. Rajistar mai sa kai na iya zama: karanta imel, kwafe bayanai zuwa spreadsheet, duba jadawali, aika imel na maraba, ƙara tunatarwa a kalanda.",
            "Matakai masu kyau don automation su ne waɗanda ake maimaitawa, masu bin doka, kuma masu gundura: kwafe, ajiye takardu, tunatarwa, tabbatarwa. Matakan da ke buƙatar tunani, tausayi ko yanke shawara game da rayuwar wani ya kamata su zauna wurin mutum, ko a yi amfani da AI don daftari kawai.",
            "Ku yi wa kowane mataki alama: automation, daftarin AI tare da duban mutum, ko a bar wa mutum. Wannan taswira mai alamomi ita ce tsarinku."
          ],
          steps: ["Ku zaɓi aikin da ake yi aƙalla sau ɗaya a mako.", "Ku rubuta kowane mataki bisa jeri, tare da wanda ke yi, kayan aiki da tsawon lokaci.", "Ku yi wa kowane mataki alama: automation, daftarin AI tare da duban mutum, ko a bar wa mutum.", "Ku ƙiyasta lokacin da za a adana kowane mako."],
          words: [["Taswirar aiki (workflow map)", "jerin matakai ko zane da ke nuna yadda ake yin aiki."], ["Mutum a cikin tsari (human in the loop)", "mutum yana dubawa ko amincewa kafin automation ya ci gaba."]],
          slides: [
            { title: "Ku fara zana taswira", bullets: ["Kowane mataki bisa jeri", "Wane ne, wane kayan aiki, tsawon lokaci"] },
            { title: "Masu kyau don automation", bullets: ["Kwafe da ajiye takardu", "Tunatarwa da tabbatarwa", "Matakan da ake maimaitawa masu bin doka"] },
            { title: "Ku yi wa kowane mataki alama", bullets: ["Automation", "Daftarin AI tare da duban mutum", "A bar wa mutum"] }
          ],
          tryIt: "Ku zana taswirar aiki ɗaya da ake maimaitawa mai matakai aƙalla biyar. Ku yi wa kowane mataki alama: automation, daftarin AI tare da duban mutum, ko a bar wa mutum, sannan ku ƙiyasta lokacin da za a adana a mako.",
          youCanNow: "zana taswirar aiki da yanke waɗanne matakai za a sa su yi kansu, waɗanda AI zai rubuta daftarinsu, da waɗanda za su zauna wurin mutum.",
          quickCheck: [
            { objective: "O2", q: "Wane mataki ne ya dace a sa ya yi kansa gaba ɗaya?", options: ["Yanke wanda zai sami tallafin karatu", "Ta'azantar da mai sa kai da ke cikin damuwa", "Zaɓar sabon ma'aikaci", "Ƙara tunatarwa a kalanda bayan rajista"], answer: 3, why: "Matakan da ake maimaitawa masu bin doka kamar tunatarwa suna da kyau don automation." },
            { objective: "O2", q: "Taswirarku tana da \"amsa wa iyalin da ke neman taimakon kuɗin haya\". Wace alama za ku ba shi?", options: ["Automation gaba ɗaya", "Daftarin AI tare da duban mutum, ko a bar wa mutum", "Share matakin", "Kada a ba da amsa"], answer: 1, why: "Matakan da ke buƙatar tausayi ko suka shafi rayuwar wani suna zama wurin mutum, ko AI ya rubuta daftari kawai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara automation a takarda",
          minutes: 5,
          goal: "Rubuta cikakken tsarin automation: abin farawa, ayyuka, prompt na AI, wuraren dubawa da dokokin bayanai.",
          text: [
            "Ku tsara a takarda kafin ku taɓa kowane kayan aiki. Ku rubuta abin farawa, kowane aiki bisa jeri, da ainihin prompt na AI idan akwai matakin AI, misali: \"Read this request. Reply with one word: Quote, Question or Complaint. Then write a two-sentence summary.\" (Karanta wannan buƙata. Ka amsa da kalma ɗaya: Farashi, Tambaya ko Ƙorafi. Sannan ka rubuta taƙaitawa ta jimloli biyu.)",
            "Ku ƙara wurin duban mutum duk inda kuskure zai cutar: duk abin da za a aika wa abokin ciniki, kuɗin da za a motsa, ko shawara game da wani mutum. Automation ɗin zai iya rubuta daftari sannan ya jira amincewa.",
            "Ku rubuta dokokin bayanai: waɗanne bayanai ke wucewa ta automation ɗin, a ina ake ajiye su, da abin da ba za a taɓa bari ya wuce ta matakin AI ba, kamar lambobin kati, lambobin Social Security, bayanan lafiya ko kalmomin sirri. Ku duba abin da kowane kayan aikin da aka haɗa ke yi da bayananku."
          ],
          steps: ["Ku rubuta abin farawa.", "Ku jera kowane aiki bisa tsari.", "Ku rubuta ainihin prompt na kowane matakin AI.", "Ku ƙara amincewar mutum inda kuskure zai cutar.", "Ku rubuta dokokin bayanai: abin da ke wucewa, inda ake ajiye shi, abin da ba zai taɓa wucewa ta AI ba."],
          words: [["Prompt (umarni)", "umarnin da kuke ba matakin AI."], ["Wurin dubawa (checkpoint)", "wurin da mutum ke dubawa kafin automation ya ci gaba."]],
          slides: [
            { title: "Ku tsara kafin ku gina", bullets: ["Abin farawa da ayyuka bisa jeri", "Ainihin prompt na AI"] },
            { title: "Wuraren duban mutum", bullets: ["Duk abin da za a aika wa abokan ciniki", "Kuɗin da za a motsa", "Shawarwari game da mutane"] },
            { title: "Dokokin bayanai", bullets: ["Abin da ke wucewa da inda ake ajiye shi", "Kada a taɓa sa kati, SSN, bayanan lafiya ko kalmar sirri ta AI"] }
          ],
          tryIt: "Ku rubuta tsari mai shafi ɗaya don automation ɗinku: abin farawa, ayyuka, prompt na AI, wurin duban mutum da dokokin bayanai.",
          youCanNow: "tsara automation mai matakin AI, wurin duban mutum da dokokin bayanai masu aminci.",
          quickCheck: [
            { objective: "O3", q: "Me dokokin bayanai a cikin tsari ke faɗa?", options: ["Irin rubutun (font) da imel ɗin ke amfani da shi", "Abin da ke wucewa, inda ake ajiye shi da abin da ba zai taɓa wucewa ta AI ba", "Saurin kwamfutar", "Wanda ya zana tambarin (logo)"], answer: 1, why: "Dokokin bayanai sun shafi waɗanne bayanai ke wucewa, inda ake ajiye su da abin da ba zai taɓa wucewa ta AI ba." },
            { objective: "O3", q: "Automation ɗinku zai aika amsoshi ga abokan ciniki. A ina za ku ƙara wurin duban mutum?", options: ["Babu inda; yana adana lokaci", "Sau ɗaya a shekara kawai", "Bayan an aika amsar", "Kafin a aika amsar, don mutum ya amince da daftarin"], answer: 3, why: "Duk abin da za a aika wa abokin ciniki ya kamata ya jira amincewar mutum." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara tsarin aiki mai wayo",
        questions: [
          { objective: "O1", q: "A cikin \"Idan an aika fom, ƙara layi a spreadsheet\", mene ne abin farawa?", options: ["Ƙara layi", "Spreadsheet ɗin", "An aika fom", "Imel ɗin"], answer: 2, why: "Abin farawa shi ne abin da ke fara automation." },
          { objective: "O1", q: "Me matakin AI ke ƙarawa ga automation?", options: ["Iya karantawa, warewa, taƙaitawa ko rubuta daftari", "Wutar lantarki kyauta", "Biyan kuɗi kai tsaye ga kowa", "Babu komai"], answer: 0, why: "Matakan AI suna yin ayyukan harshe kamar warewa da rubuta daftari." },
          { objective: "O2", q: "Wane mataki ne ya fi dacewa a sa ya yi kansa gaba ɗaya?", options: ["Yanke ko za a amince da buƙatar gidan wani", "Ta'azantar da abokin ciniki da ke cikin damuwa", "Korar ma'aikaci", "Kwafe amsoshin fom zuwa spreadsheet"], answer: 3, why: "Kwafe da ake maimaitawa mai bin doka ya fi dacewa da automation." },
          { objective: "O3", q: "Mene ne ma'anar \"human in the loop\" (mutum a cikin tsari)?", options: ["Mutum ya maƙale a cikin zagaye", "Mutum yana dubawa ko amincewa kafin automation ya ci gaba", "Automation yana aiki ba tare da kowane mutum ba", "Wani nau'in abin farawa"], answer: 1, why: "Yana bar mutum yana da iko inda kuskure ke da muhimmanci." },
          { objective: "O3", q: "Wanne ne kada a taɓa bari ya wuce ta matakin AI?", options: ["Taƙaitawar buƙata ta gama-gari", "Lambobin katin abokan ciniki", "Kalmar \"Question\"", "Lokutan aikin kasuwanci"], answer: 1, why: "Bayanan biyan kuɗi na sirri ne kuma suna da haɗari." }
        ]
      }
    },
    {
      name: "Babi na 2: Ginawa, gwadawa da gudanarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina automation ɗinku na farko",
          minutes: 6,
          goal: "Gina automation mai sauƙi daga fom zuwa spreadsheet zuwa imel.",
          text: [
            "Ku fara da mafi sauƙin sigar da ke aiki. Google Forms zai iya ajiye kowace amsa a Google Sheet ba tare da wani ƙarin kayan aiki ba, kuma Microsoft Forms zai iya tura amsoshi zuwa Excel. Wannan kaɗai automation ne.",
            "Don ƙara ayyuka, ku yi amfani da kayan aiki marar code kamar Zapier, Power Automate ko Make. Yawancinsu suna da tsare-tsaren kyauta ko na gwaji masu iyaka; ku duba shafin farashin kowanne, domin tsare-tsare suna canjawa. Ku haɗa asusunku, ku zaɓi abin farawa (sabuwar amsar fom ko sabon layin spreadsheet), sannan ku ƙara ayyuka (aika imel, ƙirƙirar aiki).",
            "Ku ƙara matakin AI a ƙarshe, idan tsarin farko ya yi aiki. Kayan aiki da yawa suna da aikin AI a cikinsu ko suna haɗuwa da sabis na AI. Ku liƙa prompt daga tsarinku, ku tura sakamakonsa zuwa aiki na gaba, kamar daftarin imel da ke jiran mutum ya amince."
          ],
          steps: ["Ku yi fom mai filayen (fields) da kuke buƙata.", "Ku haɗa shi da spreadsheet.", "A kayan aiki marar code, ku saita abin farawa: sabuwar amsa ko sabon layi.", "Ku ƙara aiki: aika imel ko ƙirƙirar aiki.", "Ku ƙara matakin AI da prompt ɗinku, kuna tura sakamakonsa zuwa daftari don amincewa."],
          words: [["Kayan aiki marar code (no-code tool)", "manhajar da ke bar ku gina abu ba tare da rubuta code ba."], ["Haɗa (connect)", "ba wata manhaja izinin aiki da wata."], ["Fili (field)", "tambaya ɗaya ko akwati ɗaya a cikin fom."]],
          slides: [
            { title: "Ku fara da mai sauƙi", bullets: ["Google Forms yana ajiyewa a Sheets", "Microsoft Forms zai iya turawa zuwa Excel"] },
            { title: "Ku ƙara ayyuka", bullets: ["Zapier, Power Automate ko Make", "Tsare-tsaren kyauta da na gwaji suna da iyaka", "Ku duba shafin farashin kowanne"] },
            { title: "Ku ƙara AI a ƙarshe", bullets: ["Idan tsarin farko ya yi aiki", "Ku liƙa prompt ɗinku", "Sakamakon yana zuwa daftari don amincewa"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Ku gina sashen farko na automation ɗinku: fom da aka haɗa da spreadsheet. Idan za ku iya, ku ƙara aiki ɗaya a kayan aiki marar code, kamar imel zuwa gare ku don kowace sabuwar amsa.",
          youCanNow: "gina automation mai sauƙi daga fom zuwa spreadsheet zuwa imel a kayan aiki marasa code.",
          quickCheck: [
            { objective: "O4", q: "Wane tsari mai sauƙi ne ya riga ya zama automation ba tare da ƙarin kayan aiki ba?", options: ["Microsoft Forms yana tura amsoshi zuwa Excel", "Rubuta amsoshin fom a takarda da hannu", "Buga kowace amsa a takarda", "Karanta amsoshi a wayarku"], answer: 0, why: "Microsoft Forms zai iya tura amsoshi zuwa Excel da kansa." },
            { objective: "O4", q: "Tsarinku na farko daga fom zuwa imel yana aiki. Me za ku ƙara a gaba?", options: ["Ƙarin manhajoji biyar a lokaci ɗaya", "Lambobin katin abokan ciniki na gaske", "Matakin AI da prompt daga tsarinku", "Babu komai; share tsarin"], answer: 2, why: "Ku ƙara matakin AI a ƙarshe, idan tsarin farko ya yi aiki." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwadawa da bayanan gwaji",
          minutes: 5,
          goal: "Gwada automation da shigarwa na gwaji na yau da kullum da masu wuya, ku gyara abin da ya lalace.",
          text: [
            "Kada ku taɓa kunna automation don mutane na gaske har sai ya ci gwaje-gwaje. Ku yi amfani da shigarwa na gwaji da kuka ƙirƙira, ba bayanan abokan ciniki na gaske ba.",
            "Ku gwada abubuwa biyar: shigarwa ta yau da kullum, fili marar komai, saƙo mai tsawo sosai, shigarwa mai kuskuren rubutu ko baƙon abu, da wadda matakin AI zai iya ware ta ba daidai ba. Ku duba kowane mataki: layin ya bayyana? Imel ya tafi wurin da ya dace? AI ya ware kuma ya taƙaita daidai?",
            "Ku rubuta rajistar gwaji (test log): abin da aka shigar, sakamakon da ake tsammani, ainihin sakamako, ya ci ko ya faɗi, gyara. Gyare-gyaren da aka saba: sa filin fom ya zama dole, ƙara tsaurara prompt na AI (\"Reply with exactly one word\", wato ka amsa da kalma ɗaya kacal), ko ƙara filter (matattara) don wasu shigarwa kawai su ci gaba."
          ],
          steps: ["Ku rubuta shigarwa biyar na gwaji, har da masu wuya.", "Ku tura kowanne ta automation ɗin.", "Ku duba sakamakon kowane mataki.", "Ku rubuta ya ci ko ya faɗi a rajistar gwaji.", "Ku gyara ku sake gwada waɗanda suka faɗi."],
          words: [["Gwaji (test case)", "shigarwa ɗaya ta gwaji da ake amfani da ita don duba cewa wani abu yana aiki."], ["Filter (matattara)", "dokar da ke bar wasu abubuwa kawai su ci gaba a cikin automation."]],
          slides: [
            { title: "Ku gwada kafin a fara da gaske", bullets: ["Bayanan gwaji da aka ƙirƙira kawai", "Kada a taɓa amfani da bayanan abokan ciniki na gaske"] },
            { title: "Gwaje-gwaje biyar", bullets: ["Na yau da kullum, fili marar komai, mai tsawo sosai", "Mai kuskuren rubutu ko baƙon abu", "Wanda AI zai iya ware ba daidai ba"] },
            { title: "Rubutawa da gyarawa", bullets: ["Filaye na dole da filter", "Prompt na AI mafi tsauri", "Ku sake gwadawa bayan kowane gyara"] }
          ],
          tryIt: "Ku tura shigarwa biyar na gwaji ta automation ɗinku, har da aƙalla masu wuya biyu. Ku rubuta rajistar gwaji ku gyara matsala ɗaya.",
          youCanNow: "gwada automation da bayanan gwaji, rubuta sakamako da gyara abin da ya faɗi.",
          quickCheck: [
            { objective: "O5", q: "Me ake rubutawa a rajistar gwajin automation?", options: ["Ainihin bayanan abokan ciniki", "Gwaje-gwajen da suka ci kawai", "Farashin kayan aikin", "Abin da aka shigar, sakamakon da ake tsammani, ainihin sakamako, ya ci ko ya faɗi, da gyara"], answer: 3, why: "Rajistar gwaji tana nuna abin da aka shigar, abin da ya kamata ya faru, abin da ya faru, da gyaran." },
            { objective: "O5", q: "Shigarwar gwaji mai filin imel marar komai ta lalata tsarin. Mene ne gyaran da aka saba?", options: ["Sa filin imel ya zama dole a fom ɗin", "Kunna automation ɗin duk da haka", "Cire matakin imel", "Yin gwaji da bayanan abokan ciniki na gaske"], answer: 0, why: "Sa filin ya zama dole yana hana shigarwa marasa komai lalata tsarin." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gudanarwa, sa ido da ingantawa",
          minutes: 5,
          goal: "Kunna automation lafiya, ku sa ido a kansa, ku kuma san abin da za ku yi idan ya faɗi.",
          text: [
            "Ku fara kunna shi don ƙaramin rukuni, kamar fom ɗaya ko mako ɗaya. Ku duba sakamakon kowace rana a farko. Yawancin kayan aiki suna nuna tarihin gudanarwa (run history) da ke jera kowane lokacin da ya yi aiki da ko ya yi nasara.",
            "Automation yana lalacewa: kalmar sirri ta canja, an canja sunan wani fili, tsarin kyauta ya kai iyakarsa, ko matakin AI ya fara ware abubuwa ba daidai ba. Ku saita faɗakarwar kuskure (error alert) zuwa imel ɗinku, ku naɗa mai kula da ke duba ta.",
            "Ku rubuta takardar umarni mai shafi ɗaya: abin da automation ɗin ke yi, inda yake, wanda ke kula da shi da yadda ake kashe shi. Idan mai kula ya tafi, wani zai iya ci gaba da gudanar da shi. Ku sake duba shi bayan 'yan watanni ku tambaya: har yanzu yana adana lokaci?"
          ],
          steps: ["Ku kunna shi don ƙaramin rukuni ko mako ɗaya.", "Ku duba tarihin gudanarwa kowace rana a farko.", "Ku saita faɗakarwar kuskure ku naɗa mai kula.", "Ku rubuta takardar umarni mai shafi ɗaya.", "Ku sake duba shi bayan 'yan watanni."],
          words: [["Tarihin gudanarwa (run history)", "jerin kowane lokacin da automation ya yi aiki da ko ya yi nasara."], ["Faɗakarwar kuskure (error alert)", "saƙon da ke gaya muku cewa automation ya faɗi."]],
          slides: [
            { title: "Ku fara da ƙarami", bullets: ["Fom ɗaya ko mako ɗaya", "Ku duba sakamako kowace rana a farko"] },
            { title: "Dalilin da yasa automation ke lalacewa", bullets: ["Kalmomin sirri ko sunayen filaye sun canja", "An kai iyakar tsari", "Warewar AI ta kauce"] },
            { title: "Ku kiyaye lafiyarsa", bullets: ["Faɗakarwar kuskure da mai kula", "Takardar umarni mai shafi ɗaya", "Ku sake duba shi bayan 'yan watanni"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala automation ɗinku tare da matakin AI da amincewar mutum, ku gudanar da shigarwa biyar na gwaji, sannan ku rubuta takardar umarni mai shafi ɗaya mai taswirar aikin, abin farawa da ayyuka, sakamakon gwaji da mai kula.",
          youCanNow: "tsarawa, ginawa, gwadawa da gudanar da automation mai amfani da AI tare da mutum yana da iko.",
          quickCheck: [
            { objective: "O6", q: "Me faɗakarwar kuskure ke yi?", options: ["Tana hanzarta automation", "Tana aika imel ga mai kula idan wani gudanarwa ya faɗi", "Tana share tsofaffin gudanarwa", "Tana canja kalmar sirrinku"], answer: 1, why: "Faɗakarwar kuskure tana gaya wa mai kula nan take idan wani abu ya lalace." },
            { objective: "O6", q: "Mutumin da ya gina automation ɗinku zai tafi. Me zai sa ya ci gaba da aiki?", options: ["Fatan cewa babu abin da zai lalace", "Kashe shi har abada", "Takardar umarni mai shafi ɗaya da sabon mai kula da ke duba faɗakarwa", "Canja dukkan kalmomin sirri ba tare da gaya wa kowa ba"], answer: 2, why: "Takardar umarni da mai kula da aka naɗa suna bar wani ya gudanar da shi ko ya kashe shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ginawa, gwadawa da gudanarwa",
        questions: [
          { objective: "O4", q: "Mene ne mafi sauƙin automation da za ku iya ginawa ba tare da ƙarin kayan aiki ba?", options: ["Hannun mutum-mutumi (robot)", "Manhajar waya ta musamman", "Sabar (server) ta biya", "Google Forms yana ajiye amsoshi a Google Sheet"], answer: 3, why: "Fom zai iya ajiye amsoshi a spreadsheet da kansa." },
          { objective: "O4", q: "Yaushe ya kamata ku ƙara matakin AI?", options: ["Bayan tsarin farko ya yi aiki", "Kafin komai", "Ba za a taɓa ba", "A ƙarshen mako kawai"], answer: 0, why: "Ku fara gina mai sauƙi, sannan ku ƙara AI." },
          { objective: "O5", q: "Waɗanne bayanai ya kamata ku yi amfani da su don gwaji?", options: ["Lambobin katin abokan ciniki na gaske", "Bayanan marasa lafiya na gaske", "Shigarwa na gwaji da aka ƙirƙira", "Kalmomin sirri"], answer: 2, why: "Ku gwada da bayanan gwaji don kare mutane na gaske." },
          { objective: "O5", q: "Matakin AI yana mayar da dogayen jimloli alhali kuna son kalma ɗaya. Mene ne gyaran?", options: ["Share automation ɗin", "Ku ƙyale shi", "Ƙara fom na biyu", "Tsaurara prompt: \"Reply with exactly one word\""], answer: 3, why: "Prompt mafi sarari yana ba da sakamakon AI da za a iya hasashensa." },
          { objective: "O6", q: "Me yasa za a rubuta takardar umarni mai shafi ɗaya?", options: ["Don a rage saurinsa", "Doka ta wajabta", "Don wani ya iya gudanar da automation ɗin ko ya kashe shi", "Don raba kalmomin sirri"], answer: 2, why: "Tana bar automation ya ci gaba da aiki idan mai kula ya tafi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Aiki da Kai (Automation) da AI da Tsarin Aiki Mai Wayo",
    questions: [
      { objective: "O1", q: "Automation yana nufin:", options: ["Ɗaukar ƙarin ma'aikata", "Manhaja tana yi muku matakai ba tare da mutum ya yi su kowane lokaci ba", "Yin aiki na tsawon sa'o'i", "Sayen mutum-mutumi (robot)"], answer: 1, why: "Automation yana gudanar da matakai da kansa." },
      { objective: "O1", q: "Imel da ya iso kuma ya fara automation shi ne:", options: ["Abin farawa (trigger)", "Filter", "Fili (field)", "Tarihin gudanarwa"], answer: 0, why: "Abin da ke fara automation shi ne abin farawa." },
      { objective: "O1", q: "\"Aika imel na tabbatarwa\" a cikin automation shi ne:", options: ["Abin farawa", "Prompt", "Aiki (action)", "Mai kula"], answer: 2, why: "Ayyuka su ne abin da ke faruwa bayan abin farawa." },
      { objective: "O1", q: "Zapier yana kiran automation:", options: ["Zap", "Flow", "Scenario", "Katin girke-girke"], answer: 0, why: "Kalmar Zapier ita ce Zap." },
      { objective: "O2", q: "Wane aiki ne ya fi kyau a bar wa mutum?", options: ["Ajiye rasit", "Aika tunatarwa", "Kwafe bayanan fom", "Yanke ko wani ya cancanci taimako"], answer: 3, why: "Shawarwari game da mutane suna buƙatar tunanin ɗan adam." },
      { objective: "O2", q: "Taswirar aiki tana jera:", options: ["Sakamakon ƙarshe kawai", "Kowane mataki, wanda ke yinsa, kayan aiki da lokaci", "Albashin ma'aikata", "Adireshin ofisoshi"], answer: 1, why: "Tana nuna yadda ake yin aikin yau." },
      { objective: "O2", q: "\"Daftarin AI tare da duban mutum\" ya dace da wane mataki?", options: ["Ƙara layi a takarda", "Rubuta amsa ga abokin ciniki", "Ajiye fayil", "Fara automation"], answer: 1, why: "Ya kamata a duba saƙonnin abokan ciniki kafin a aika." },
      { objective: "O3", q: "Prompt mai kyau na AI a cikin automation shi ne:", options: ["Marar sarari, kamar \"yi wani abu\"", "Marar komai", "Kalmar sirri", "Mai sarari, kamar \"Reply with one word: Quote, Question or Complaint\""], answer: 3, why: "Prompt mai sarari yana ba da sakamakon da za a iya hasashensa." },
      { objective: "O3", q: "A ina ya kamata ku sa wurin duban mutum?", options: ["Duk inda kuskure zai cutar, kamar saƙonni ga abokan ciniki", "Babu inda", "A wurin abin farawa kawai", "Bayan an share automation kawai"], answer: 0, why: "Wuraren dubawa suna kama kurakurai masu tsada." },
      { objective: "O3", q: "Dokokin bayanai a cikin tsarinku suna faɗin:", options: ["Irin rubutun (font) da za a yi amfani da shi", "Wanda zai sami kyauta (bonus)", "Abin da ke wucewa, inda ake ajiye shi da abin da ba zai taɓa wucewa ta AI ba", "Babu komai"], answer: 2, why: "Suna kare bayanan sirri." },
      { objective: "O4", q: "Tambaya ko akwati a cikin fom ana kiransa:", options: ["Abin farawa", "Zap", "Filter", "Fili (field)"], answer: 3, why: "Kowane akwati fili ne." },
      { objective: "O4", q: "Tsare-tsaren kyauta na kayan aiki marasa code:", options: ["Ba su da iyaka har abada", "Koyaushe suna kashe $1,000", "Suna da iyaka; ku duba shafin farashi", "Babu su"], answer: 2, why: "Tsare-tsare suna canjawa, don haka ku duba shafin farashi na hukuma." },
      { objective: "O4", q: "Haɗa manhajoji a kayan aikin automation yana nufin:", options: ["Saka wayoyi (cables)", "Ba wata manhaja izinin aiki da wata", "Bayyana kalmar sirrinku ga jama'a", "Sayen sababbin kwamfutoci"], answer: 1, why: "Haɗi izini ne tsakanin manhajoji." },
      { objective: "O5", q: "Gwaje-gwaje nawa ne kwas ɗin ya ba da shawara aƙalla?", options: ["Biyar", "Ɗaya", "Babu", "Ɗari biyar"], answer: 0, why: "Gwaje-gwaje biyar sun haɗa da shigarwa ta yau da kullum da masu wuya." },
      { objective: "O5", q: "Wanne ne gwaji mai wuya?", options: ["Shigarwa ta yau da kullum kaɗai", "Babu shigarwa kwata-kwata, ba a taɓa gwadawa ba", "Fom mai fili marar komai", "Kalmar sirrinku"], answer: 2, why: "Filaye marasa komai sau da yawa suna lalata automation." },
      { objective: "O5", q: "Filter a cikin automation:", options: ["Yana bar wasu abubuwa kawai su ci gaba", "Yana goge allo", "Yana share spreadsheet", "Yana fara automation"], answer: 0, why: "Filter yana sarrafa waɗanne abubuwa za su ci gaba." },
      { objective: "O6", q: "Idan kuka fara aiki da gaske a karon farko, ya kamata ku:", options: ["Kunna shi ga kowa kuma kada ku taɓa dubawa", "Share rajistar gwaji", "Cire wurin duban mutum", "Fara da ƙarami ku duba sakamako kowace rana"], answer: 3, why: "Farawa da ƙarami yana rage illar matsaloli." },
      { objective: "O6", q: "Tarihin gudanarwa yana nuna:", options: ["Tarihin shafukan intanet da kuka ziyarta", "Kowane lokacin da automation ya yi aiki da ko ya yi nasara", "Sa'o'in aikin ma'aikata", "Kalmomin sirrin abokan ciniki"], answer: 1, why: "Yana taimaka muku gano inda ya faɗi." },
      { objective: "O6", q: "Wanne ne dalilin da aka saba na lalacewar automation?", options: ["Rana ta faɗi", "Kalmar sirri ko sunan fili ya canja", "Abokan ciniki masu farin ciki sun yi yawa", "Launin tambarin (logo) ya canja"], answer: 1, why: "Canje-canje a manhajojin da aka haɗa suna lalata automation." },
      { objective: "O6", q: "Kowane automation ya kamata ya kasance da:", options: ["Babu wanda ke da alhaki", "Damar shiga dukkan bayanai ba tare da iyaka ba", "Wurin ɓoye", "Mai kula da ke duba faɗakarwar kuskure"], answer: 3, why: "Mai kula yana kiyaye lafiyarsa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Taswirar aiki",
        objective: "O2",
        notYet: "Wasu matakai sun ɓace, ko ba a yi wa kowane mataki alama ba.",
        meets: "Kowane mataki tare da wanda ke yi, kayan aiki da lokaci, da alamar automation, daftarin AI tare da duban mutum, ko a bar wa mutum.",
        exceeds: "Ya haɗa da ƙiyasin lokacin da za a adana kowane mako."
      },
      {
        name: "Abin farawa, ayyuka da matakin AI",
        objective: "O4",
        notYet: "Automation ɗin ba ya aiki daga abin farawarsa, ko matakin AI ba ya nan.",
        meets: "Abin farawa da ke aiki, ayyuka bisa jeri da matakin AI da ke taƙaitawa da ware buƙatar.",
        exceeds: "Yana amfani da filter ko prompt mai tsauri na kalma ɗaya don sakamako ya zama iri ɗaya."
      },
      {
        name: "Duban mutum da dokokin bayanai",
        objective: "O3",
        notYet: "Ana aika amsoshi ba tare da amincewa ba, ko bayanan sirri suna wucewa ta matakin AI.",
        meets: "Mutum yana amincewa da daftarin amsa, kuma dokokin bayanai suna faɗin abin da ba zai taɓa wucewa ta AI ba.",
        exceeds: "Ya rubuta abin da kowane kayan aikin da aka haɗa ke yi da bayanan."
      },
      {
        name: "Gwaje-gwaje biyar",
        objective: "O5",
        notYet: "Gwaje-gwaje ƙasa da biyar, an yi amfani da bayanan gaske, ko ba a gyara matsaloli ba.",
        meets: "Shigarwa biyar na gwaji da aka ƙirƙira, har da masu wuya, an rubuta su da ya ci ko ya faɗi da gyare-gyare.",
        exceeds: "An sake gwada kowace matsala kuma ta ci."
      },
      {
        name: "Mai kula da umarni",
        objective: "O6",
        notYet: "Babu mai kula da aka naɗa ko umarni.",
        meets: "Mai kula da aka naɗa, faɗakarwar kuskure da takardar umarni mai shafi ɗaya.",
        exceeds: "Takardar tana faɗin yadda ake kashe shi da lokacin da za a sake duba shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Automation da ke aiki kuma suna da mai kula bayan kwanaki 60 (binciken biyo baya)",
      "Sa'o'in da aka adana kowane mako a aikin da aka sa ya yi kansa, kamar yadda ƙungiyar ta faɗa",
      "Ƙungiyoyin da suka ce automation ɗin bai aika saƙonni marasa daidai ba kuma bai fallasa bayanan sirri ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Google Forms da Sheets, ko Microsoft Forms da Excel",
      "Kayan aikin automation marar code kamar Zapier, Power Automate ko Make (ku duba iyakokin tsarin kyauta na yanzu)",
      "Takarda ko takardar kwamfuta don taswirar aiki, tsari da rajistar gwaji",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokacin ginawa da gwadawa"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku gina tsarin fom-zuwa-takarda kai tsaye a allon da kowa ke gani.",
      "Ku sa masu koyo su tsara a takarda kuma abokin aiki ya duba kafin su buɗe kowane kayan aiki.",
      "Ku yi amfani da shigarwa na gwaji da aka ƙirƙira kawai; kada a taɓa amfani da bayanan abokan ciniki, masu karɓar taimako ko masu ba da gudummawa na gaske.",
      "Ku duba cewa kowane automation da ke aika saƙonni ga mutane yana da matakin amincewar mutum.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
