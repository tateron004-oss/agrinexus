"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-video-analysis.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-video-analysis-ha",
  lang: "ha",
  translationOf: "athletes-video-analysis",
  category: "Athletes",
  name: "Nazarin Bidiyo da Basirar Wasa",
  skills: "Ɗaukar bidiyon wasa da atisaye mai amfani, Kallon bidiyo da tambaya ɗaya, Yi wa wasanni alama a spreadsheet, Amfani da AI don taƙaita wasannin da aka yi wa alama, Mayar da bidiyo zuwa abin da za a mai da hankali a atisaye",
  outcome: "ɗaukar bidiyon wasa ko atisaye, yi wa aƙalla wasanni 20 alama a spreadsheet da tambaya bayyananna a zuciya, amfani da mataimakin AI don taƙaita salon da ke maimaituwa, da mayar da su abu ɗaya da za ku mai da hankali a atisaye, wanda kuka yarda da shi tare da kocinku.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da masu horarwa (koci) da ke son koyo daga bidiyo ba tare da manhaja mai tsada ba. Za ku yi amfani da kyamarar waya, spreadsheet kyauta da mataimakin AI kyauta.",
    "Kallon bidiyon wasa fasaha ce. Yawancin mutane suna kallon manyan abubuwan da suka faru kawai. Za ku koyi kallo da tambaya, rubuta abin da ya faru, nemo abin da ke maimaituwa, da mayar da shi abin da za ku yi atisaye a kai.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku ɗauki bidiyon wasa ɗaya ko atisaye ɗaya (da izini), ku zaɓi tambaya ɗaya, ku yi wa aƙalla wasanni 20 alama a Google Sheet, ku nemi mataimakin AI ya taƙaita salon da ke maimaituwa daga alamominku, sannan ku rubuta abu ɗaya da za ku mai da hankali a atisaye. Ku duba shi tare da kocinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da masu horarwa na makarantar sakandare, jami'a da ƙungiyoyin wasa (club) da ke son koyo daga bidiyon wasa da atisaye ba tare da manhaja mai tsada ba.",
    startingPoint: "Suna iya ɗaukar bidiyo da waya kuma sun taɓa kallon bidiyon wasa, yawanci don ganin manyan abubuwa. Kaɗan ne suka taɓa ɗaukar bidiyo da shiri, yi wa wasanni alama, ƙidaya abin da ke maimaituwa a spreadsheet, ko kwatanta taƙaitawar AI da ƙidayarsu.",
    gap: "Kallon bidiyo ba tare da tambaya ba yana nuna manyan abubuwa da manyan kurakurai kawai, don haka atisaye ba ya canjawa. Yi wa wasanni alama da ƙidaya su yana mayar da bidiyo shaida da ke kai ga abu ɗaya bayyananne na atisaye, da tattaunawa mafi kyau da koci.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 7",
      "Kyamarar waya, Google Sheets kyauta da mataimakin AI kyauta; babu buƙatar manhaja ta kuɗi",
      "Kusan minti 60 na darussa, da lokacin ɗaukar bidiyo da yi wa wasa ɗaya ko atisaye ɗaya alama",
      "Dokokin ƙungiya, makaranta da gasa game da ɗaukar bidiyo; bidiyon wasannin yara yana nuna 'ya'yan wasu mutane",
      "Sunayen sauran 'yan wasa da bayanansu na sirri ba sa shiga kayan AI"
    ],
    prerequisites: "Babu. Kwas ɗin \"Kayan Aikin AI ga 'Yan Wasa\" zai taimaka idan ba ku taɓa amfani da Google Sheets ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da waya a wasa ko atisaye", action: "ɗaukar bidiyo mai amfani daga wuri mai tsayi a tsakiya, da hoto mai faɗi da ba ya girgiza", standard: "da izinin kocinku kafin ɗaukar bidiyo da kafin raba shi" },
    { id: "O2", condition: "Kafin kallon bidiyon wasa ko atisaye", action: "rubuta tambaya ɗaya takamaimai da kallo sau biyu, kuna tsayawa a wasannin da ke amsa ta", standard: "da tambaya ɗaya a kowane kallo da ɗan gajeren bayani ga kowane wasan da ya shafe ta" },
    { id: "O3", condition: "Ta amfani da Google Sheets da bidiyonku", action: "yi wa wasanni alama da Lamba, Lokaci, Yanayi, Abin da ya faru, Sakamako da Bayani", standard: "kuna yi wa aƙalla wasanni 20 alama da kalmomin alama iri ɗaya koyaushe" },
    { id: "O4", condition: "Idan kuna da aƙalla wasanni 20 da aka yi wa alama", action: "ƙidaya alamominku da sort, filter ko COUNTIF da rubuta manyan salo biyu da lambobi", standard: "kuna yi wa duk salon da ya dogara da wasanni kaɗan alamar \"a ƙara kallo\"" },
    { id: "O5", condition: "Ta amfani da mataimakin AI kyauta da teburin alamominku", action: "neman taƙaita manyan salo da ƙidayarsu da kwatanta shi da ƙidayarku", standard: "an cire sunayen sauran 'yan wasa da bayanan sirri, kuma kowace ƙidaya ta yi daidai da spreadsheet ɗinku" },
    { id: "O6", condition: "Idan kuna da salonku mafi ƙarfi", action: "rubuta abu ɗaya na atisaye da kai shi ga kocinku da lambobi, lokutan bidiyo da tambaya", standard: "kun yarda da shi tare da kocinku, kuma kuna da shirin sake ɗaukar bidiyo da sake alama daga baya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun bidiyo mai kyau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ɗaukar bidiyon da za ku iya amfani da shi",
          minutes: 5,
          goal: "Shirya waya don ɗaukar bidiyon wasa ko atisaye mai amfani.",
          text: [
            "Bidiyo mai kyau yana farawa da wuri mai kyau na kyamara. Ku ɗauka daga sama idan za ku iya, kamar saman kujerun 'yan kallo, don ku ga dukan wasan da tazarar da ke tsakanin 'yan wasa. Ku riƙe wayar a kwance (landscape) kuma ku tsayar da ita da tripod ko ta jingina ta.",
            "Ku bi ƙwallon amma ku bar isasshen filin wasa a cikin hoto don ganin abin da 'yan wasan da ba su da ƙwallo suke yi. Kada ku zuƙo (zoom) kusa da yawa.",
            "Ku nemi izini. Ƙungiyarku, makarantarku ko gasarku na iya samun dokoki game da ɗaukar bidiyo, kuma 'ya'yan wasu mutane suna bayyana a bidiyon wasannin yara. Ku tambayi kocinku kafin ɗaukar bidiyo da kafin raba komai."
          ],
          steps: ["Ku nemi izinin kocinku don ɗaukar bidiyo.", "Ku nemo wuri mai tsayi a tsakiya.", "Ku juya wayar a kwance ku tsayar da ita.", "Ku bar hoto mai faɗi; ku bi ƙwallon.", "Ku duba batir da wurin ajiya kafin wasan."],
          words: [["Landscape (a kwance)", "riƙe wayar a kwance, don bidiyon ya yi faɗi."], ["Tripod", "wurin tsayawa mai ƙafafu uku da ke riƙe kyamara ba tare da girgiza ba."]],
          slides: [
            { title: "Wurin kyamara", bullets: ["A sama da tsakiya idan zai yiwu", "Ku ga dukan wasan da tazarar 'yan wasa"] },
            { title: "Shirya kyamara", bullets: ["Waya a kwance", "Ba girgiza: tripod ko ku jingina ta", "Hoto mai faɗi; ku bi ƙwallon"] },
            { title: "Kafin ku ɗauka", bullets: ["Ku tambayi kocinku", "Ku duba batir da wurin ajiya", "Ku tambaya kafin raba bidiyo"] }
          ],
          tryIt: "A atisayenku na gaba, idan kocinku ya yarda, ku ɗauki bidiyo na minti biyar daga wuri mafi tsayi da za ku samu. Ku sake kallonsa: kuna iya ganin kowa da ke cikin kowane wasa?",
          youCanNow: "shirya waya don ɗaukar bidiyon wasa ko atisaye mai amfani, da izini.",
          quickCheck: [
            { objective: "O1", q: "Me yasa za ku bar hoto mai faɗi maimakon zuƙowa kusa?", options: ["Bidiyo mai faɗi yana ɗaukar ƙaramin wurin ajiya", "Hotunan kusa sun saɓa wa doka", "Don ganin abin da 'yan wasan da ba su da ƙwallo suke yi", "Zuƙowa yana shanye batir"], answer: 2, why: "Hoto mai faɗi yana nuna tazara da 'yan wasan da ke nesa da ƙwallon." },
            { objective: "O1", q: "Kuna son ɗaukar bidiyon wasan ƙanwarku a ƙungiyar yara ku saka shi a intanet. Me za ku fara yi?", options: ["Ku saka shi, ku cire shi idan wani ya yi ƙorafi", "Ku tambayi kocin dokokin kafin ɗaukar bidiyo da raba shi", "Ku ɗauki ɗayan ƙungiyar kawai", "Ku ɓoye fuskarku"], answer: 1, why: "Ƙungiyoyi da gasanni na iya samun dokokin ɗaukar bidiyo, kuma bidiyon yana nuna 'ya'yan wasu mutane." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kallon bidiyo da tambaya",
          minutes: 5,
          goal: "Zaɓi tambaya ɗaya bayyananna kafin ku kalli bidiyo.",
          text: [
            "Idan kuna kallon bidiyo ba tare da shiri ba, yawanci kuna lura da manyan abubuwa da kurakuranku mafi muni kawai. Masu horarwa suna kallo da tambaya.",
            "Tambayoyi masu kyau takamaimai ne: \"A ina nake rasa ƙwallo?\" \"Da wane sauri nake komawa tsaro?\" \"Wane tsarin karɓar serve ne ke ba da maki?\" \"Me ɗayan ƙungiyar take yi a third down?\"",
            "Ku zaɓi tambaya ɗaya a kowane kallo. Ku kalla sau ɗaya a saurin da aka saba don ganin hoton gaba ɗaya, sannan ku sake kallo ku tsaya a kowane wasan da ke amsa tambayarku."
          ],
          steps: ["Ku rubuta tambaya ɗaya takamaimai.", "Ku kalla sau ɗaya a saurin da aka saba.", "Ku sake kallo ku tsaya a kowane wasan da ya shafi tambayarku.", "Ku rubuta ɗan gajeren bayani ga kowane wasa."],
          words: [["Nazarin bidiyo (film study)", "kallon bidiyon wasanni ko atisaye don koyo da ingantawa."], ["Basirar wasa (game intelligence)", "fahimtar dalilin da yasa abubuwa suke faruwa a wasa, ba abin da ya faru kawai ba."]],
          slides: [
            { title: "Babu shiri = manyan abubuwa kawai", bullets: ["Kuna ganin manyan wasanni da manyan kurakurai", "Kuna rasa abin da ke maimaituwa"] },
            { title: "Tambayoyi takamaimai", bullets: ["\"A ina nake rasa ƙwallo?\"", "\"Da wane sauri nake komawa tsaro?\"", "\"Me suke yi a third down?\""] },
            { title: "Kallo sau biyu", bullets: ["1. Saurin da aka saba: hoton gaba ɗaya", "2. Ku tsaya a wasannin da ke amsa tambayarku"] }
          ],
          tryIt: "Ku rubuta tambayoyi uku da za su yiwu don wasanku da matsayinku. Ku zaɓi ɗaya ku kalli bidiyo na minti biyar da ita, kuna rubuta bayani duk lokacin da ta bayyana.",
          youCanNow: "kallon bidiyo da tambaya ɗaya bayyananna da rubuta bayani kan wasannin da ke amsa ta.",
          quickCheck: [
            { objective: "O2", q: "Wace ce tambayar bidiyo takamaimai?", options: ["Da wane sauri nake komawa tsaro?", "Mun yi wasa da kyau?", "Kakar wasa ta yi kyau?", "Wane ne ɗan wasa mafi kyau?"], answer: 0, why: "Tambayoyi takamaimai suna nuna wasannin da za ku iya tsayawa ku rubuta." },
            { objective: "O2", q: "Kuna da tambayoyi biyu game da bidiyonku. Me za ku yi?", options: ["Ku amsa duka biyun a kallo ɗaya", "Ku tsallake tambaya ta biyu", "Ku nemi AI ya kalla a madadinku", "Ku kalla da tambaya ɗaya a lokaci ɗaya"], answer: 3, why: "Ku zaɓi tambaya ɗaya a kowane kallo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yi wa wasanni alama a spreadsheet",
          minutes: 6,
          goal: "Yi wa wasanni alama a Google Sheets don a iya ƙidaya abin da ke maimaituwa.",
          text: [
            "Yi wa wasa alama (tagging) yana nufin rubuta 'yan alamomi iri ɗaya ga kowane wasa. Yana mayar da bidiyo bayanai (data) da za ku iya ƙidayawa.",
            "Ku yi ginshiƙai (columns): Lamba, Lokaci a bidiyo, Yanayi (misali \"fast break\" ko \"2nd and long\"), Abin da ya faru, Sakamako (mai kyau, tsaka-tsaki ko mara kyau), da Bayani. Ku yi amfani da kalmomi iri ɗaya koyaushe, don \"turnover\" ya kasance \"turnover\" koyaushe, ba wani lokaci \"lost ball\" ba.",
            "Manhajojin bidiyo na ƙungiya kamar Hudl suna yi wa wasanni alama a makarantu da yawa; idan ƙungiyarku tana amfani da ɗaya, ku tambayi kocinku yadda ake amfani da alamominsa. Spreadsheet yana aiki ga kowa, kyauta."
          ],
          steps: ["Ku buɗe Google Sheets.", "Ginshiƙai: Lamba, Lokaci, Yanayi, Abin da ya faru, Sakamako, Bayani.", "Ku zaɓi gajeren jerin kalmomin alama ku manne musu.", "Ku tsayar da bidiyo ku cike layi ɗaya ga kowane wasa.", "Ku yi wa aƙalla wasanni 20 alama."],
          words: [["Alama (tag)", "sunan da kuke ba kowane wasa, kamar \"turnover\" ko \"fast break\"."], ["Lokacin bidiyo (timestamp)", "lokacin da wasa ya fara a bidiyo, kamar 12:45."]],
          slides: [
            { title: "Alama = bidiyo zuwa bayanai", bullets: ["Alamomi iri ɗaya ga kowane wasa", "Yanzu za ku iya ƙidaya abin da ke maimaituwa"] },
            { title: "Ginshiƙanku", bullets: ["Lamba, Lokaci, Yanayi", "Abin da ya faru, Sakamako, Bayani"] },
            { title: "Dokokin alama", bullets: ["Gajeren jerin kalmomin alama", "Kalma ɗaya koyaushe", "Aƙalla wasanni 20"] }
          ],
          tryIt: "Ku shirya spreadsheet ɗin alamominku ku yi wa wasanni 10 alama daga bidiyonku ta amfani da tambayarku daga Darasi na 2.",
          youCanNow: "yi wa wasanni alama a spreadsheet da alamomi iri ɗaya da lokutan bidiyo.",
          quickCheck: [
            { objective: "O3", q: "Wane ginshiƙi ne ke rubuta ko wasan ya yi kyau?", options: ["Lamba", "Lokaci", "Sakamako", "Yanayi"], answer: 2, why: "Sakamako shi ne mai kyau, tsaka-tsaki ko mara kyau." },
            { objective: "O3", q: "Kun rubuta \"lost ball\" ga wasu wasanni da \"turnover\" ga wasu. Me za ku yi?", options: ["Ku canja su duka zuwa kalma ɗaya, kamar \"turnover\"", "Ku bar su; ba komai", "Ku goge waɗannan wasannin", "Ku ƙara kalma ta uku"], answer: 0, why: "Amfani da kalma ɗaya koyaushe yana sa ƙidayarku ta yi daidai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun bidiyo mai kyau",
        questions: [
          { objective: "O1", q: "Wane ne wurin kyamara mafi kyau don bidiyon wasa?", options: ["A ƙasa a bayan raga kawai", "A cikin jakarku", "A sama da tsakiya", "An zuƙo kan fuskar ɗan wasa ɗaya"], answer: 2, why: "Sama da tsakiya yana nuna dukan wasan da tazara." },
          { objective: "O1", q: "Kafin ɗaukar bidiyon atisaye, ya kamata ku:", options: ["Nemi izinin kocinku", "Saka shi kai tsaye a intanet", "Ɗauki ɗakin canja kaya na ɗayan ƙungiyar", "Juya wayar a tsaye"], answer: 0, why: "Ƙungiyoyi da makarantu sau da yawa suna da dokokin ɗaukar bidiyo." },
          { objective: "O2", q: "Wace ce tambaya mai kyau don nazarin bidiyo?", options: ["\"Wasan ya yi kyau?\"", "\"Me yasa ba mu iya ba?\"", "\"Wa ke da takalmi mafi kyau?\"", "\"A ina nake rasa ƙwallo?\""], answer: 3, why: "Tambayoyi takamaimai suna nuna muku salon da za ku iya gyarawa." },
          { objective: "O3", q: "Me yi wa wasanni alama yake yi?", options: ["Yana goge wasanni marasa kyau", "Yana mayar da bidiyo bayanai da za ku iya ƙidayawa", "Yana ƙara waƙa", "Yana gajarta bidiyon"], answer: 1, why: "Alamomi iri ɗaya suna bar ku ku ƙidaya abin da ke maimaituwa." },
          { objective: "O3", q: "Me yasa za ku yi amfani da kalmar alama iri ɗaya koyaushe?", options: ["Don ya yi tsawo", "Don ƙidaya ta yi daidai", "Yana da kyan gani", "Babu dalili"], answer: 1, why: "Kalmomi daban-daban ga abu ɗaya suna ɓata ƙidayarku." }
        ]
      }
    },
    {
      name: "Babi na 2: Nemo salo da amfani da su",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ƙidaya salo a cikin alamominku",
          minutes: 5,
          goal: "Ƙidaya alamominku ku nemo manyan salo.",
          text: [
            "Idan kuna da wasanni 20 ko fiye da aka yi wa alama, ku ƙidaya sau nawa kowane yanayi da sakamako suka bayyana. A Google Sheets za ku iya jera (sort) ta ginshiƙi, amfani da filter, ko amfani da dabarar COUNTIF don ƙidaya alama.",
            "Ku nemi salo (abin da ke maimaituwa), ba wasa ɗaya ba: \"7 daga cikin turnover 9 nawa sun faru ne lokacin da na yi dribble zuwa hagu ana matsa mini\" salo ne. Pass ɗaya mara kyau ba salo ba ne.",
            "Ƙananan lambobi na iya ruɗar ku. Idan wani abu ya faru sau biyu kawai, ku ƙara kallon bidiyo kafin ku yanke cewa salo ne na gaske."
          ],
          steps: ["Ku jera ko ku tace ta Sakamako.", "Ku ƙidaya kowane Yanayi don sakamako marasa kyau.", "Ku rubuta manyan salo biyu a matsayin jimloli da lambobi.", "Ku yi wa duk salon da ke da wasanni kaɗan alamar \"a ƙara kallo\"."],
          words: [["Salo (pattern)", "abin da ke faruwa sau da yawa a yanayi masu kama da juna."], ["COUNTIF", "dabarar spreadsheet da ke ƙidaya ƙofofin (cells) da suka yi daidai da wata kalma ko lamba."]],
          slides: [
            { title: "Ku ƙidaya alamominku", bullets: ["Ku jera ko ku tace ta Sakamako", "COUNTIF yana ƙidaya alama"] },
            { title: "Salo da wasa ɗaya", bullets: ["Salo: 7 daga turnover 9 zuwa hagu", "Ba salo ba: pass ɗaya mara kyau"] },
            { title: "Ku yi hankali da ƙananan lambobi", bullets: ["Sau biyu kawai? Ku fara ƙara kallon bidiyo"] }
          ],
          tryIt: "Ku gama yi wa wasanni 20 alama. Ku ƙidaya sakamakonku ta yanayi ku rubuta manyan salonku biyu a matsayin jimloli da lambobi.",
          youCanNow: "ƙidaya alamomi da bayyana salo da lambobi.",
          quickCheck: [
            { objective: "O4", q: "Wanne a cikin waɗannan salo ne?", options: ["Pass ɗaya mara kyau a rabin lokaci na biyu", "5 daga cikin harbe-harbe 6 da na rasa sun zo bayan dribble", "Sakamakon ƙarshe na wasan", "Wasa mafi kyau a wasan"], answer: 1, why: "Salo yana maimaituwa da lambobi; wasa ɗaya ba salo ba ne." },
            { objective: "O4", q: "Wani salo da zai yiwu ya bayyana a wasanni biyu kawai. Me za ku yi?", options: ["Ku gina dukan atisaye a kansa", "Ku yi watsi da duk alamominku", "Ku faɗa wa ƙungiya cewa shi ne babbar matsalarku", "Ku yi masa alamar \"a ƙara kallo\" ku fara ƙara ɗaukar bidiyo"], answer: 3, why: "Ƙananan lambobi na iya ruɗar ku, don haka ku ƙara kallon bidiyo kafin ku yanke shawara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amfani da AI don taƙaita bayanan bidiyonku",
          minutes: 5,
          goal: "Nemi mataimakin AI ya taƙaita wasannin da aka yi wa alama ku duba taƙaitawarsa.",
          text: [
            "Kuna iya kwafa teburin alamominku (babu sunayen 'yan wasa sai naku, kuma babu bayanan sirri) zuwa mataimakin AI ku tambaya: \"Ga wasannin da na yi wa alama. Ka taƙaita manyan salo uku da ƙidayarsu, ka ba ni shawarar tambaya ɗaya da zan yi wa kocina.\"",
            "AI yana da kyau wajen gano salo a teburin rubutu, amma yana iya ƙidaya ba daidai ba ko ya ƙirƙiri abubuwa. Ku kwatanta ƙidayarsa da taku daga darasin da ya gabata. Idan sun bambanta, ku amince da spreadsheet ɗinku ku gyara prompt (umarni).",
            "Wasu kayan AI suna iya kallon hotuna ko bidiyo, amma suna iya fahimtar motsin wasanni masu sauri ba daidai ba. Ku yi amfani da alamominku a matsayin babbar majiya, AI kuma mataimaki."
          ],
          steps: ["Ku kwafa teburin alamominku, kuna cire sunayen sauran 'yan wasa da bayanan sirri.", "Ku nemi manyan salo uku da ƙidayarsu.", "Ku kwatanta da ƙidayarku.", "Ku gyara kowane kuskure; spreadsheet ɗinku ne ke da gaskiya."],
          words: [["Taƙaitawa", "gajeren sigar abu da ke riƙe manyan abubuwa."]],
          slides: [
            { title: "Ku nemi AI ya taƙaita", bullets: ["Ku manna teburin alamominku", "\"Manyan salo uku da ƙidayarsu\"", "\"Tambaya ɗaya ga kocina\""] },
            { title: "Ku duba shi", bullets: ["AI yana iya ƙidaya ba daidai ba ko ya ƙirƙira", "Ku kwatanta da ƙidayarku", "Spreadsheet ɗinku ne ke da gaskiya"] },
            { title: "Sirri", bullets: ["Babu sunayen sauran 'yan wasa", "Babu bayanan sirri"] }
          ],
          tryIt: "Ku manna wasanninku 20 da aka yi wa alama a mataimakin AI ku nemi manyan salo uku da ƙidayarsu. Ku duba kowace ƙidaya da spreadsheet ɗinku.",
          youCanNow: "amfani da AI don taƙaita alamomin bidiyo da duba taƙaitawar da ƙidayarku.",
          quickCheck: [
            { objective: "O5", q: "Me zai iya faruwa ba daidai ba idan AI ya taƙaita teburin alamominku?", options: ["Yana iya ƙidaya ba daidai ba ko ya ƙirƙiri abubuwa", "Koyaushe yana goge spreadsheet ɗinku", "Yana raba bidiyon ga jama'a", "Babu abin da zai faru ba daidai ba"], answer: 0, why: "AI yana iya gano salo amma yana iya ƙidaya ba daidai ba, don haka ku duba shi da ƙidayarku." },
            { objective: "O5", q: "Teburin alamominku yana da sunayen abokan wasanku. Me za ku yi kafin ku manna shi a AI?", options: ["Ku manna shi yadda yake", "Ku ƙara lambobin wayarsu", "Ku cire sunayen sauran 'yan wasa da bayanan sirri", "Ku nemi abokan wasanku su manna shi"], answer: 2, why: "Ku hana sunayen sauran 'yan wasa da bayanan sirri shiga kayan AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mayar da bidiyo abin da za a mai da hankali a atisaye",
          minutes: 5,
          goal: "Mayar da babban salonku abu ɗaya na atisaye da kuka yarda da shi tare da kocinku.",
          text: [
            "Bidiyo yana taimakawa ne kawai idan ya canja atisaye. Ku ɗauki salonku mafi ƙarfi ku mayar da shi abu ɗaya da za ku mai da hankali: \"Kare ƙwallo idan ana matsa mini ta gefen hagu\" ko \"Komawa tsaro cikin daƙiƙa uku bayan turnover.\"",
            "Ku kai wa kocinku salon, lambobin da lokutan bidiyo biyu ko uku da ke nuna shi. Ku tambaya: \"Wane atisaye (drill) zai taimaka da wannan?\" Masu horarwa suna son 'yan wasan da suka zo da shaida da tambaya.",
            "Ku sake ɗaukar bidiyo bayan 'yan makonni ku sake yi wa tambaya ɗaya alama don ganin ko salon ya canja. Wannan ita ce basirar wasa: koyo, atisaye da dubawa."
          ],
          steps: ["Ku zaɓi salonku mafi ƙarfi.", "Ku rubuta abu ɗaya na atisaye.", "Ku zaɓi lokutan bidiyo biyu ko uku da ke nuna shi.", "Ku nemi kocinku wani atisaye (drill).", "Ku sake ɗaukar bidiyo ku sake alama bayan 'yan makonni."],
          words: [["Abin mai da hankali a atisaye (practice focus)", "abu ɗaya takamaimai da kuke aiki a kai a atisaye."], ["Shaida", "gaskiyar da ke nuna cewa wani abu gaskiya ne, kamar ƙidaya da lokutan bidiyo."]],
          slides: [
            { title: "Bidiyo dole ya canja atisaye", bullets: ["Salo mafi ƙarfi -> abu ɗaya na atisaye"] },
            { title: "Ku kai wa kocinku", bullets: ["Salon da lambobi", "Lokutan bidiyo biyu ko uku", "\"Wane drill zai taimaka?\""] },
            { title: "Ku rufe zagayen", bullets: ["Ku sake ɗaukar bidiyo bayan 'yan makonni", "Ku sake alama da tambaya ɗaya", "Salon ya canja?"] }
          ],
          tryIt: "Aikin ƙarshe: da wasanninku 20 da aka yi wa alama da taƙaitawar AI, ku rubuta abu ɗaya na atisaye ku zaɓi lokutan bidiyo biyu. Ku raba shi da kocinku ku nemi wani drill.",
          youCanNow: "mayar da salon bidiyo abin da za a mai da hankali a atisaye da duba daga baya ko ya inganta.",
          quickCheck: [
            { objective: "O6", q: "Me ke sa abin mai da hankali a atisaye ya yi kyau?", options: ["\"Ku yi wasa mafi kyau\"", "Jerin duk kurakurai", "Canji ɗaya takamaimai daga salonku mafi ƙarfi", "Duk abin da AI ya ba da shawara"], answer: 2, why: "Abu ɗaya daga salonku mafi ƙarfi yana canja atisaye." },
            { objective: "O6", q: "Kocinku ya ba da shawarar wani drill don abin da kuke mai da hankali. Ta yaya za ku tabbatar ya yi aiki?", options: ["Ku tambayi abokin wasa", "Ku sake ɗaukar bidiyo bayan 'yan makonni ku sake yi wa tambaya ɗaya alama", "Ku amince da yadda kuke ji", "Ku tambayi AI ko ya yi aiki"], answer: 1, why: "Sake ɗaukar bidiyo da sake alama suna nuna ko salon ya canja." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Nemo salo da amfani da su",
        questions: [
          { objective: "O4", q: "Wanne ne salo?", options: ["Pass ɗaya mara kyau", "Dunk mai ban mamaki", "Sakamakon ƙarshe na wasan", "7 daga cikin turnover 9 sun faru ana dribble zuwa hagu ana matsa mini"], answer: 3, why: "Salo yana maimaituwa a wasanni da yawa masu kama da juna." },
          { objective: "O4", q: "Me COUNTIF yake yi?", options: ["Yana ƙidaya ƙofofin da suka yi daidai da alama", "Yana kunna bidiyo", "Yana goge layuka", "Yana ƙara launuka"], answer: 0, why: "COUNTIF yana ƙidaya ƙofofin da suka yi daidai." },
          { objective: "O5", q: "Ƙidayar turnover ta AI ta bambanta da ta spreadsheet ɗinku. Wace za ku amince da ita?", options: ["Ta AI", "Duk wadda ta fi yawa", "Spreadsheet ɗinku, sannan ku gyara prompt", "Babu ɗaya"], answer: 2, why: "Alamominku su ne babbar majiya; AI yana iya ƙidaya ba daidai ba." },
          { objective: "O5", q: "Kafin ku manna alamomi a AI, ku cire:", options: ["Lokutan bidiyo", "Sakamako", "Yanayi", "Sunayen sauran 'yan wasa da bayanan sirri"], answer: 3, why: "Ku kare sirrin sauran mutane." },
          { objective: "O6", q: "Me ya kamata ku kai wa kocinku?", options: ["Ƙorafe-ƙorafe kawai", "Salon, lambobi da lokutan bidiyo, tare da tambaya", "Dukan bidiyon ba tare da bayani ba", "Rubutun AI mai tsawo"], answer: 1, why: "Shaida da tambaya suna kawo tattaunawa mai amfani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Nazarin Bidiyo da Basirar Wasa",
    questions: [
      { objective: "O1", q: "Riƙe wayar a kwance lokacin ɗaukar bidiyo ana kiransa:", options: ["Portrait", "Selfie", "Landscape", "Zoom"], answer: 2, why: "Landscape yana ba da hoto mai faɗi." },
      { objective: "O1", q: "Me yasa za ku ɗauki bidiyo daga sama?", options: ["Don ganin dukan wasan da tazara", "Don ɓoyewa", "Don sauti mafi kyau", "Doka ce"], answer: 0, why: "Tsayi yana nuna kowa da ke cikin wasan." },
      { objective: "O1", q: "Me ke tsayar da kyamara ba tare da girgiza ba?", options: ["Tripod ko jingina ta", "Gudu da ita", "Zuƙowa", "Girgiza ta"], answer: 0, why: "Bidiyo marar girgiza ya fi sauƙin nazari." },
      { objective: "O1", q: "Bidiyon wasannin yara sau da yawa yana nuna wasu yara. Don haka ya kamata ku:", options: ["Saka shi ko'ina", "Kada ku ɓoye komai", "Ku tambaya kafin ɗaukar bidiyo da raba shi", "Ku sayar da shi"], answer: 2, why: "Ƙungiyoyi da iyalai suna da dokokin sirri." },
      { objective: "O2", q: "Kallon bidiyo ba tare da shiri ba yawanci yana nufin kuna lura da:", options: ["Kowane salo", "Manyan abubuwa da manyan kurakurai kawai", "Babu komai", "Bayanan kocin"], answer: 1, why: "Ba tare da tambaya ba kuna rasa salo." },
      { objective: "O2", q: "Tambayoyi nawa a kowane kallo?", options: ["Goma", "Babu", "Duk iyakar yadda zai yiwu", "Ɗaya"], answer: 3, why: "Tambaya ɗaya takamaimai tana riƙe hankali." },
      { objective: "O2", q: "A kallo na biyu ku:", options: ["Gaggauta komai", "Kashe sautin", "Tsaya a wasannin da ke amsa tambayarku", "Tsallake shi"], answer: 2, why: "Tsayawa yana bar ku ku rubuta cikakkun bayanai." },
      { objective: "O2", q: "Basirar wasa tana nufin fahimtar:", options: ["Sakamako kawai", "Ƙididdiga kawai", "Jadawalin wasanni", "Dalilin da yasa abubuwa ke faruwa a wasa"], answer: 3, why: "Game da \"me yasa\" ne, ba \"me\" kawai ba." },
      { objective: "O3", q: "Lokacin bidiyo (timestamp) shi ne:", options: ["Lokacin da wasa ya fara a bidiyo", "Ranar wasan", "Tambari a kan tikiti", "Busar ƙarshe"], answer: 0, why: "Lokutan bidiyo suna bar ku ku nemo wasa da sauri." },
      { objective: "O3", q: "Wanne ne ginshiƙin alama?", options: ["Waƙar da kuka fi so", "Yanayi", "Yanayin gobe", "Kalmar sirrinku"], answer: 1, why: "Yanayi babbar alama ce." },
      { objective: "O3", q: "Wasanni nawa ya kamata ku yi wa alama aƙalla?", options: ["1", "3", "20", "500"], answer: 2, why: "Ashirin suna ba da isasshen abin da za a ga salo." },
      { objective: "O3", q: "Idan ƙungiyarku tana amfani da manhajar bidiyo kamar Hudl, ya kamata ku:", options: ["Tambayi kocinku yadda ake amfani da alamominta", "Yi watsi da ita", "Goge ta", "Raba bayanan shiga a intanet"], answer: 0, why: "Ku yi amfani da abin da ƙungiyarku ke amfani da shi, yadda kocinku yake so." },
      { objective: "O4", q: "Wani abu ya faru sau biyu kawai. Ya kamata ku:", options: ["Kira shi babban salo", "Faɗa wa kowa", "Canja matsayi", "Fara ƙara kallon bidiyo"], answer: 3, why: "Ƙananan lambobi na iya ruɗar ku." },
      { objective: "O4", q: "Don nemo manyan salonku a Sheets, za ku iya:", options: ["Buga shi a takarda", "Jera, tace ko amfani da COUNTIF", "Canja rubutu (fonts)", "Ƙara hotuna"], answer: 1, why: "Waɗannan kayan suna ƙidaya da haɗa alamomi." },
      { objective: "O5", q: "Me ya kamata ku nemi AI ya yi da alamominku?", options: ["Zaɓar ƙungiyarku", "Taƙaita manyan salo da ƙidayarsu", "Saka su a intanet", "Ba kocinku maki"], answer: 1, why: "Taƙaitawa ɗaya ce daga cikin ƙarfin AI." },
      { objective: "O5", q: "Kayan AI da ke karanta bidiyo kai tsaye na iya:", options: ["Rashin yin kuskure koyaushe", "Maye gurbin masu horarwa", "Zama tilas", "Fahimtar motsin wasanni masu sauri ba daidai ba"], answer: 3, why: "Ku yi amfani da alamominku a matsayin babbar majiya." },
      { objective: "O6", q: "Abin mai da hankali a atisaye mai kyau shi ne:", options: ["\"Kare ƙwallo idan ana matsa mini ta hagu\"", "\"Ka fi haka\"", "\"Ci nasara\"", "\"Ka yi ƙoƙari\""], answer: 0, why: "Takamaimai ne kuma ana iya atisaye a kansa." },
      { objective: "O6", q: "Wace tambaya ga kocinku ta fi kyau?", options: ["\"Me yasa ba na yawan buga wasa?\"", "\"Bidiyo yana da gundura?\"", "\"Ga bidiyo 3 na wannan salon. Wane drill zai taimaka?\"", "\"Zan iya tsallake atisaye?\""], answer: 2, why: "Shaida tare da tambaya tana kawo amsa mai amfani." },
      { objective: "O6", q: "Ta yaya za ku san ko abin da kuka mai da hankali a atisaye ya yi aiki?", options: ["Ku yi tsammani", "Ku tambayi ɗan kallo", "Ku duba kafofin sada zumunta", "Ku sake ɗaukar bidiyo ku sake yi wa tambaya ɗaya alama daga baya"], answer: 3, why: "Sake alama yana nuna ko salon ya canja." },
      { objective: "O6", q: "Bidiyo yana taimakawa ne kawai idan:", options: ["Mutane da yawa sun kalla", "Ya canja abin da kuke atisaye a kai", "Yana da tsawo", "Yana da waƙa"], answer: 1, why: "Manufar ita ce atisaye da wasa mafi kyau." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      9,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bidiyo da izini",
        objective: "O1",
        notYet: "An ɗauki bidiyo ba tare da izini ba, ko bidiyon yana girgiza sosai ko ya yi kusa sosai har ba a ganin wasan.",
        meets: "An ba da izini, bidiyo a kwance (landscape) daga wuri mai tsayi da hoto mai faɗi marar girgiza.",
        exceeds: "An duba batir da wurin ajiya, kuma an ɗauki dukan wasan ko atisayen ba tare da gibi ba."
      },
      {
        name: "Spreadsheet ɗin alamomi",
        objective: "O3",
        notYet: "Wasanni ƙasa da 20, wasu ginshiƙai ba su nan, ko kalmomin alama suna canjawa.",
        meets: "Aƙalla wasanni 20 da aka yi wa alama a dukan ginshiƙai shida da kalmomin alama iri ɗaya koyaushe.",
        exceeds: "Kowane layi yana da lokacin bidiyo da ɗan gajeren bayani da ya shafi tambayar."
      },
      {
        name: "Salo da duba AI",
        objective: "O5",
        notYet: "Babu ƙidaya, ko an yi amfani da taƙaitawar AI ba tare da dubawa ba.",
        meets: "An rubuta manyan salo da ƙidaya, kuma an duba ƙidayar AI da spreadsheet, an kuma cire sunaye.",
        exceeds: "An gano bambance-bambance kuma an gyara prompt; salon da ke da ƙananan lambobi an yi musu alamar \"a ƙara kallo\"."
      },
      {
        name: "Abin mai da hankali a atisaye",
        objective: "O6",
        notYet: "Babu abin mai da hankali, ko ba shi da sarari.",
        meets: "Abu ɗaya takamaimai daga salo mafi ƙarfi, an duba shi tare da kocin ta amfani da lambobi da lokutan bidiyo.",
        exceeds: "An yarda da wani drill kuma an sa rana don sake ɗaukar bidiyo da sake yi wa tambaya ɗaya alama."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka gama aikin ƙarshe kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric",
      "Masu koyo da suka ce sun sake ɗaukar bidiyo kuma sun sake yi wa tambaya ɗaya alama cikin kwanaki 30 (binciken biyo baya)",
      "Masu horarwa da suka ce an canja wani drill ko abin mai da hankali a atisaye saboda shaidar bidiyon ɗan wasa",
      "Masu koyo da suka ɗauki wani kwas na 'Yan Wasa na gaba, kamar \"AI don Wasannin Ƙungiya\""
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai kyamara, da caji, da wurin ajiya maras komai",
      "Tripod ko hanyar jingina wayar (ba tilas ba)",
      "Asusun Google kyauta don Google Sheets",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Kusan minti 60 na darussa, da minti 60 zuwa 90 don ɗaukar bidiyo da yi wa wasanni alama"
    ],
    facilitatorNotes: [
      "Ku tabbatar da dokokin ƙungiya, makaranta da gasa game da ɗaukar bidiyo kafin kowa ya ɗauka, musamman a wasannin yara ƙanana.",
      "Ku yarda da 'yan wasa inda za a ajiye bidiyo, kuma ba za a saka shi ga jama'a ba tare da izini ba.",
      "Ku ba kowa jerin kalmomin alama iri ɗaya a zaman ƙungiya don a iya kwatanta ƙidaya.",
      "Ku nuna yadda ake cire sunayen sauran 'yan wasa kafin manna wa AI, kuma ku sa 'yan wasa su duba ƙidayar AI da spreadsheet ɗinsu.",
      "Ku shirya gajerun ganawa da koci don kowane ɗan wasa ya gabatar da salonsa, lokutan bidiyo da tambayarsa."
    ]
  }
};
