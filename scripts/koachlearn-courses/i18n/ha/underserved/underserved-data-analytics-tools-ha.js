"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-data-analytics-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-data-analytics-tools-ha",
  lang: "ha",
  translationOf: "underserved-data-analytics-tools",
  category: "Undeserved Community",
  name: "Gabatarwa ga Kayan Aiki da Dabarun Nazarin Bayanai (Data Analytics)",
  skills: "Shirya spreadsheet mai tsabta, Jera da tace bayanai, Amfani da SUM da AVERAGE, Yin zane (chart), Amfani da AI don bayanin formula, Faɗin abin da aka gano da kalmomi masu sauƙi",
  outcome: "saka bayanai na gaske a cikin spreadsheet kyauta (Google Sheets ko Excel for the web), jera su da tace su, samun jimilla da matsakaici da formula, yin zane (chart), da bayyana abin da yake nunawa cikin jimloli biyu masu sauƙi.",
  about: [
    "Nazarin bayanai (data analytics) yana nufin amfani da bayanai don amsa tambaya. Wurin raba abinci (food pantry) yana son sanin ranar da ta fi cunkoso. Iyali yana son sanin inda kuɗinsa ke tafiya. Ƙungiyar wasan matasa tana son sanin yara nawa suka zo kowane mako. Kuna iya amsa irin waɗannan tambayoyi da kayan aiki kyauta.",
    "A wannan kwas ɗin za ku yi amfani da spreadsheet kyauta, Google Sheets ko Excel for the web, a waya, kwamfutar gida ko kwamfutar ɗakin karatu. Za ku saka bayanai, ku jera su ku tace su, ku yi amfani da formula masu sauƙi, ku yi zane, kuma ku yi amfani da mataimakin AI kyauta idan kun makale.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da ke gina spreadsheet ɗaya, mataki-mataki. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina spreadsheet na bayanan wata ɗaya, na gaske ko na atisaye (misali yawan masu zuwa wurin raba abinci kowace rana, ko kuɗin da iyali ke kashewa bisa rukuni). Ku jera shi, ku tace shi, ku ƙara jimilla da SUM da matsakaici da AVERAGE, ku yi zane, sannan ku rubuta jimloli biyu masu sauƙi da ke faɗin abin da bayanan suke nunawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa a al'ummomin da ba a ba su isasshen tallafi ba, waɗanda ke son ƙwarewar kwamfuta da za ta taimaka musu samun aiki, ko waɗanda ke buƙatar bin diddigin lambobi don iyali, wurin raba abinci, coci, ƙungiyar wasan matasa ko ƙaramar ƙungiyar sa-kai.",
    startingPoint: "Suna iya amfani da waya, wataƙila da kwamfuta don duba intanet. Da yawa ba su taɓa amfani da spreadsheet, rubuta formula ko yin zane ba, kuma wasu ba su da ƙarfin gwiwa a lissafi.",
    gap: "Ana neman ƙwarewar spreadsheet a ayyuka da yawa na ofis, shaguna da ƙungiyoyin sa-kai, kuma ƙungiyoyin al'umma suna buƙatar nuna ma'anar lambobinsu. Masu koyo suna buƙatar saka bayanai masu tsabta, jera su, tace su, samun jimilla, yin zane da bayyana su, da kayan aiki kyauta, tare da kiyaye bayanan mutane a sirri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6)",
      "Na'urori: kwamfutar ɗakin karatu ko ta gida ta fi kyau; manhajar waya tana aiki don ƙananan spreadsheet",
      "Kuɗi: Google Sheets ko Excel for the web kyauta, da asusu kyauta",
      "Sirri: kada a saka sunaye, lambobin waya ko lambobin asusu na mutane na gaske a cikin AI",
      "Matakin lissafi: tarawa da matsakaici kawai; spreadsheet ne ke yin lissafin"
    ],
    prerequisites: "Babu. Masu koyo da ba su taɓa amfani da linzamin kwamfuta (mouse) ko madannai (keyboard) ba za su iya fara ɗaukar kwas na ƙwarewar kwamfuta na farko."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani abu da kuka damu da shi a gida, a aiki ko a al'ummarku", action: "rubuta tambaya ɗaya a sarari da bayanai za su iya amsawa, da jera bayanan da kuke buƙata", standard: "tana farawa da wane, nawa ko yaya yawan" },
    { id: "O2", condition: "Ta amfani da Google Sheets ko Excel for the web", action: "ƙirƙirar spreadsheet mai kanun layi a sarari da saka bayanai masu tsabta", standard: "kanu ɗaya a kowane ginshiƙi a layi na 1, bayani ɗaya a kowane layi, aƙalla layuka goma" },
    { id: "O3", condition: "Idan aka ba ku spreadsheet mai bayanai", action: "jera ginshiƙi daga mafi girma zuwa mafi ƙanƙanta, da tace shi don nuna wasu layuka kawai", standard: "sannan ku cire tacewar don dukkan layuka su dawo" },
    { id: "O4", condition: "Idan aka ba ku ginshiƙin lambobi", action: "lissafa jimilla da SUM da matsakaici da AVERAGE", standard: "ta amfani da range daidai, ta yadda dukkansu za su sabunta idan lamba ta canja" },
    { id: "O5", condition: "Idan kuna da bayananku da mataimakin AI kyauta", action: "yin zane (chart) mai take a sarari, da neman AI ya bayyana formula ko kuskure", standard: "kuna zaɓar irin zanen da ya dace, ba tare da saka bayanan sirri ba" },
    { id: "O6", condition: "Idan spreadsheet ɗinku ya kammala", action: "rubuta jimloli biyu masu sauƙi da ke amsa tambayarku, duba aikinku da raba shi lafiya", standard: "da lambar da ke tabbatar da amsar, kuma kuna raba shi da mutanen da ke buƙatarsa kaɗai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya bayananku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne nazarin bayanai, da yin tambaya mai kyau",
          minutes: 4,
          goal: "Rubuta tambaya ɗaya a sarari da bayanai za su iya amsawa.",
          text: [
            "Bayanai (data) abubuwa ne da za ku iya ƙirgawa ko jerawa: ranaku, adadin kuɗi, sunayen wurare, yawan baƙi. Nazari (analytics) yana nufin duba waɗannan bayanai don amsa tambaya.",
            "Kowane aiki mai kyau yana farawa da tambaya a sarari. \"Wace rana ce a mako wurin raba abincinmu ya fi samun baƙi?\" tana da sarari. \"Faɗa mini game da wurin raba abinci\" ba ta da sarari.",
            "Tambaya mai sarari tana faɗa muku bayanan da za ku tattara. Don nemo ranar da ta fi cunkoso, kuna buƙatar kwanan wata da yawan baƙi na kowace rana."
          ],
          steps: ["Ku zaɓi wani abu da kuka damu da shi: iyali, aiki, makaranta ko al'umma.", "Ku rubuta tambaya ɗaya da ke farawa da wane, nawa ko yaya yawan.", "Ku jera bayanan da kuke buƙata don amsa ta."],
          words: [["Bayanai (data)", "abubuwan da za ku iya ƙirgawa ko jerawa, kamar ranaku, adadi ko sunaye."], ["Nazari (analytics)", "duba bayanai don amsa tambaya."]],
          slides: [
            { title: "Bayanai da nazari", bullets: ["Bayanai: abubuwan da za ku iya ƙirgawa ko jerawa", "Nazari: amfani da bayanai don amsa tambaya"] },
            { title: "Ku fara da tambaya a sarari", bullets: ["Mai sarari: \"Wace rana ce ta fi samun baƙi?\"", "Ba mai sarari ba: \"Faɗa mini game da wurin raba abinci\""] },
            { title: "Tambayar tana faɗin abin da za ku tattara", bullets: ["Ranar da ta fi cunkoso? Kuna buƙatar ranaku da yawan baƙi", "Kuɗin da ya fi yawa? Kuna buƙatar rukuni da adadin kuɗi"] }
          ],
          tryIt: "Ku rubuta tambaya ɗaya a sarari game da iyalinku, aikinku, makarantarku ko al'ummarku da lambobi za su iya amsawa. A ƙarƙashinta, ku jera irin bayanai biyu ko uku da za ku buƙata.",
          youCanNow: "rubuta tambaya a sarari da faɗin bayanan da ake buƙata don amsa ta.",
          quickCheck: [
            { objective: "O1", q: "Mene ne bayanai (data)?", options: ["Abubuwan da za ku iya ƙirgawa ko jerawa", "Lambobin da ke kan takardar banki kawai", "Wani nau'in kwamfuta", "Shafin intanet"], answer: 0, why: "Bayanai abubuwa ne kamar ranaku, adadi, wurare da yawan baƙi." },
            { objective: "O1", q: "Cocinku yana son sanin ko mutane sun fi zuwa a lokacin sanyi. Wane bayani kuke buƙata?", options: ["Lambar wayar fasto", "Kwanan wata da yawan mutane a kowace ibada", "Launin ginin", "Babu komai; ku yi tsammani kawai"], answer: 1, why: "Tambaya mai sarari tana faɗa muku ku tattara kwanan wata da yawan mutane a kowace ibada." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Buɗe spreadsheet kyauta da saka bayanai",
          minutes: 5,
          goal: "Ƙirƙiri spreadsheet mai kanun ginshiƙi a sarari da bayananku.",
          text: [
            "Spreadsheet shafi ne mai ƙananan akwatuna da ake kira cell (akwati). Ginshiƙai (columns) suna tafiya sama da ƙasa kuma suna da haruffa (A, B, C). Layuka (rows) suna tafiya gefe zuwa gefe kuma suna da lambobi (1, 2, 3). Cell B2 yana ginshiƙi B, layi na 2.",
            "Zaɓuɓɓuka kyauta: Google Sheets a sheets.google.com da asusun Google kyauta, ko Excel for the web a office.com da asusun Microsoft kyauta. Dukkansu suna aiki a burauzar intanet da kuma a matsayin manhajar waya.",
            "Ku kiyaye bayanai da tsabta: kanu ɗaya a kowane ginshiƙi a layi na 1 (kamar Kwanan wata, Rana, Baƙi), layi ɗaya don kowane bayani, kuma a rubuta lambobi a matsayin lambobi kawai, ba tare da ƙarin kalmomi ba. Bayanai masu tsabta suna sauƙaƙa kowane mataki na gaba."
          ],
          steps: ["Ku buɗe sheets.google.com ko office.com ku fara sabon spreadsheet.", "Ku ba fayil ɗin suna a sarari.", "Ku rubuta kanu a kowane ginshiƙi na layi na 1.", "Ku saka bayani ɗaya a kowane layi a ƙarƙashin kanun."],
          words: [["Spreadsheet", "shafi mai layuka da ginshiƙai don aiki da lambobi da jeri."], ["Cell (akwati)", "akwati ɗaya a spreadsheet, wanda ake kira da harafin ginshiƙinsa da lambar layinsa, kamar B2."], ["Kanu (heading)", "sunan da ke saman ginshiƙi."]],
          slides: [
            { title: "Spreadsheet shafi ne mai akwatuna", bullets: ["Ginshiƙai suna da haruffa: A, B, C", "Layuka suna da lambobi: 1, 2, 3", "Cell B2 = ginshiƙi B, layi na 2"] },
            { title: "Kayan spreadsheet kyauta", bullets: ["Google Sheets: sheets.google.com", "Excel for the web: office.com", "Dukkansu suna aiki a kwamfutar ɗakin karatu ko a waya"] },
            { title: "Ku kiyaye bayanai da tsabta", bullets: ["Kanu ɗaya a kowane ginshiƙi a layi na 1", "Bayani ɗaya a kowane layi", "Lambobi a matsayin lambobi kawai"] }
          ],
          tryIt: "Ku buɗe spreadsheet kyauta. Ku yi kanu uku don tambayarku (misali Kwanan wata, Rana, Baƙi) kuma ku saka aƙalla layuka goma na bayanai, na gaske ko na atisaye.",
          youCanNow: "fara spreadsheet kyauta da saka bayanai masu tsabta a ƙarƙashin kanu a sarari.",
          quickCheck: [
            { objective: "O2", q: "A spreadsheet, da me ake sanya wa layuka suna?", options: ["Haruffa", "Launuka", "Lambobi", "Sunaye"], answer: 2, why: "Layuka suna tafiya gefe zuwa gefe kuma suna da lambobi; ginshiƙai suna da haruffa." },
            { objective: "O2", q: "Kun rubuta \"kusan mutane 40\" a ginshiƙin Baƙi. Me za ku canja?", options: ["Babu komai", "Ku ƙara kalmomi", "Ku sa rubutun ya yi kauri", "Ku rubuta 40 kawai a matsayin lamba"], answer: 3, why: "Bayanai masu tsabta suna amfani da lambobi kawai don spreadsheet ya iya yin lissafi da su." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jerawa da tacewa",
          minutes: 5,
          goal: "Jera bayananku daga mafi girma zuwa mafi ƙanƙanta, ku tace su don nuna wasu layuka kawai.",
          text: [
            "Jerawa (sort) tana sa layuka cikin tsari, kamar daga mafi girma zuwa mafi ƙanƙanta. Jera ginshiƙin Baƙi daga mafi girma zuwa mafi ƙanƙanta yana sa ranar da ta fi cunkoso a sama.",
            "Tacewa (filter) tana ɓoye layukan da ba ku buƙata yanzu. Kuna iya tace ginshiƙin Rana don nuna ranakun Asabar kawai. Tacewa ba ta goge komai; kuna iya kashe ta kuma dukkan layuka su dawo.",
            "A Google Sheets da Excel for the web, jerawa da tacewa suna cikin menu na Data ko a shafin Data. Idan ba ku same su ba, ku tambayi mataimakin AI kyauta: \"Ta yaya zan jera ginshiƙi daga mafi girma zuwa mafi ƙanƙanta a Google Sheets?\""
          ],
          steps: ["Ku danna kowane cell a cikin bayananku.", "Ku buɗe menu na Data ko shafin Data ku kunna tacewa (filter).", "Ku yi amfani da ƙaramar kibiya a kan kanu don jerawa daga mafi girma zuwa mafi ƙanƙanta.", "Ku yi amfani da kibiyar wani kanu don nuna wasu ƙima kawai, sannan ku cire tacewar."],
          words: [["Jerawa (sort)", "sa layuka cikin tsari, kamar daga mafi girma zuwa mafi ƙanƙanta, ko daga A zuwa Z."], ["Tacewa (filter)", "nuna layukan da suka dace da abin da kuka zaɓa kawai, ba tare da goge sauran ba."]],
          slides: [
            { title: "Jerawa: sa layuka cikin tsari", bullets: ["Daga mafi girma zuwa mafi ƙanƙanta yana sa babbar ƙima a farko", "Daga A zuwa Z yana sa sunaye cikin tsari"] },
            { title: "Tacewa: nuna abin da kuke buƙata kawai", bullets: ["Misali: ranakun Asabar kawai", "Ba a goge komai ba", "Ku kashe ta kuma dukkan layuka su dawo"] },
            { title: "Inda za ku same su", bullets: ["Menu na Data ko shafin Data", "Kun makale? Ku tambayi AI yadda ake yi a kayan aikinku"] }
          ],
          tryIt: "Ku jera babban ginshiƙin lambobinku daga mafi girma zuwa mafi ƙanƙanta, ku rubuta layin da ke sama. Sannan ku tace don nuna irin layi ɗaya kawai, ku cire tacewar.",
          youCanNow: "jera da tace spreadsheet don nemo abin da kuke nema.",
          quickCheck: [
            { objective: "O3", q: "Me jerawa (sort) take yi?", options: ["Tana sa layuka cikin tsari, kamar daga mafi girma zuwa mafi ƙanƙanta", "Tana goge layukan da ba ku buƙata", "Tana tara ginshiƙi", "Tana yin zane"], answer: 0, why: "Jerawa tana sa layuka cikin tsari, kamar babbar lamba a farko." },
            { objective: "O3", q: "Kuna son ganin layukan ranakun Litinin kawai. Me za ku yi amfani da shi?", options: ["SUM", "Tacewa (filter) a ginshiƙin Rana", "Zanen da'ira (pie chart)", "Ku goge sauran layuka"], answer: 1, why: "Tacewa tana ɓoye layukan da ba ku buƙata ba tare da goge su ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya bayananku",
        questions: [
          { objective: "O1", q: "Wace ce tambayar bayanai da ta fi sarari?", options: ["\"Faɗa mini game da wurin raba abinci\"", "\"Abubuwa?\"", "\"Wace rana ce a mako wurin raba abinci ya fi samun baƙi?\"", "\"Bayanai don Allah\""], answer: 2, why: "Tana faɗin ainihin abin da za a nemo, don haka kun san bayanan da za ku tattara." },
          { objective: "O2", q: "Mene ne cell C4?", options: ["Akwatin da ke ginshiƙi C, layi na 4", "Fayil na huɗu", "Layi C, ginshiƙi 4", "Lambar waya"], answer: 0, why: "Ana kiran cell da harafin ginshiƙi, sannan lambar layi." },
          { objective: "O2", q: "A ina ya kamata kanun ginshiƙai su kasance?", options: ["A ƙasa", "Layi na 1, kanu ɗaya a kowane ginshiƙi", "A wani fayil daban", "Babu inda"], answer: 1, why: "Kanu a layi na 1 suna sa bayanai su kasance masu tsabta kuma masu sauƙin jerawa." },
          { objective: "O3", q: "Kun tace don nuna ranakun Asabar kawai. Me ke faruwa da sauran layuka?", options: ["An goge su har abada", "Sun koma wani sabon fayil", "Sun zama zane", "An ɓoye su kuma za su dawo idan kun cire tacewar"], answer: 3, why: "Tacewa tana ɓoye layuka; ba ta goge su." },
          { objective: "O3", q: "Kuna son ranar da ta fi cunkoso ta kasance a sama. Me za ku yi?", options: ["Ku jera ginshiƙin baƙi daga mafi girma zuwa mafi ƙanƙanta", "Ku goge sauran layuka", "Ku canja sunan fayil", "Ku sa rubutun ya yi kauri"], answer: 0, why: "Jerawa daga mafi girma zuwa mafi ƙanƙanta tana sa babbar lamba a farko." }
        ]
      }
    },
    {
      name: "Babi na 2: Nemo amsoshi da raba su",
      lessons: [
        {
          objectives: ["O4"],
          title: "Formula: SUM da AVERAGE",
          minutes: 5,
          goal: "Yi amfani da SUM don tara ginshiƙi, da AVERAGE don nemo matsakaicinsa.",
          text: [
            "Formula ƙaramin umarni ne da ke yi muku lissafi. Kowace formula tana farawa da alamar daidai (=).",
            "=SUM(C2:C31) tana tara kowace lamba daga cell C2 zuwa cell C31. =AVERAGE(C2:C31) tana nemo matsakaicin waɗannan lambobi. C2:C31 ana kiransa range (jerin akwatuna): dukkan cells daga C2 zuwa ƙasa har C31.",
            "Idan kun canja lamba a ginshiƙin, jimilla da matsakaici suna sabunta da kansu. Wannan shi ne ƙarfin spreadsheet: babu sake ƙirgawa da hannu."
          ],
          steps: ["Ku danna cell mara komai a ƙarƙashin ginshiƙin lambobinku.", "Ku rubuta =SUM( sannan cell na farko, colon (:), da cell na ƙarshe, sannan ).", "Ku danna Enter don ganin jimilla.", "A wani cell mara komai, ku yi haka da =AVERAGE( ... )."],
          words: [["Formula", "umarni da ke farawa da = kuma yake yin lissafi a spreadsheet."], ["Range (jerin akwatuna)", "rukunin cells, wanda ake rubutawa kamar C2:C31."], ["Matsakaici (average)", "jimilla da aka raba da yawan lambobin."]],
          slides: [
            { title: "Formula tana farawa da =", bullets: ["Tana yi muku lissafi", "Tana sabunta idan lambobi sun canja"] },
            { title: "Formula biyu da za ku sani", bullets: ["=SUM(C2:C31) tana tara su duka", "=AVERAGE(C2:C31) tana nemo matsakaici"] },
            { title: "Mene ne range?", bullets: ["C2:C31 yana nufin daga C2 zuwa ƙasa har C31", "Cell na farko, colon, cell na ƙarshe"] }
          ],
          tryIt: "A ƙarƙashin ginshiƙin lambobinku, ku ƙara jimilla da =SUM da matsakaici da =AVERAGE. Ku canja lamba ɗaya ku ga yadda dukkansu suke sabunta.",
          youCanNow: "samun jimilla da matsakaicin ginshiƙi da SUM da AVERAGE.",
          quickCheck: [
            { objective: "O4", q: "Mene ne range kamar B2:B20?", options: ["Cell ɗaya kawai", "Irin zane", "Dukkan cells daga B2 zuwa ƙasa har B20", "Sunan fayil"], answer: 2, why: "Range shi ne kowane cell daga na farko zuwa na ƙarshe, da colon a tsakaninsu." },
            { objective: "O4", q: "Kuna son jimillar kuɗin da aka kashe a D2 zuwa D15. Me za ku rubuta?", options: ["SUM D2 D15", "=AVERAGE(D2:D15)", "=D2+D15", "=SUM(D2:D15)"], answer: 3, why: "=SUM(D2:D15) tana tara kowace lamba daga D2 zuwa D15." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin zane (chart), tare da AI a matsayin mataimaki",
          minutes: 5,
          goal: "Yi zane mai sauƙi kuma ku yi amfani da AI don bayanin formula ko gyara kuskure.",
          text: [
            "Zane (chart) yana mayar da lambobi zuwa hoto. Zanen sanduna (bar chart) yana kwatanta adadi, kamar baƙi a kowace rana. Zanen layi (line chart) yana nuna canji a tsawon lokaci. Zanen da'ira (pie chart) yana nuna sassan abu guda, kamar kuɗin da aka kashe bisa rukuni.",
            "Don yin ɗaya, ku zaɓi kanun da bayananku, sannan ku saka zane daga menu na Insert ko shafin Insert. Ku canja take don ya faɗi abin da zanen yake nunawa.",
            "Mataimakin AI kyauta zai iya bayyana formula da kurakurai. Ku rubuta formula ko kuskuren ku tambaya: \"Ka bayyana wannan da kalmomi masu sauƙi da yadda zan gyara shi.\" Kada ku saka bayanan sirri kamar sunaye, adireshi ko lambobin asusu; ku bayyana ginshiƙan a maimakon haka."
          ],
          steps: ["Ku zaɓi kanun da bayanan da kuke son nunawa.", "Ku buɗe menu na Insert ko shafin Insert ku zaɓi Chart.", "Ku zaɓi sanduna (bar), layi (line) ko da'ira (pie).", "Ku ba zanen take a sarari."],
          words: [["Zanen sanduna (bar chart)", "zanen da ke kwatanta adadi da sanduna."], ["Zanen layi (line chart)", "zanen da ke nuna canji a tsawon lokaci."], ["Zanen da'ira (pie chart)", "da'ira da ke nuna sassan abu guda."]],
          slides: [
            { title: "Ku zaɓi zanen da ya dace", bullets: ["Sanduna: kwatanta adadi", "Layi: canji a tsawon lokaci", "Da'ira: sassan abu guda"] },
            { title: "Yin zane", bullets: ["Ku zaɓi kanu da bayanai", "Insert, sannan Chart", "Ku ba shi take a sarari"] },
            { title: "AI a matsayin mataimakinku", bullets: ["Ku nemi ya bayyana formula ko kuskure", "Ku bayyana ginshiƙai; kada ku saka bayanan sirri"] }
          ],
          tryIt: "Ku yi zanen sanduna ko na layi na bayananku ku ba shi take a sarari. Sannan ku tambayi mataimakin AI ya bayyana abin da =AVERAGE(C2:C31) take yi da kalmomi masu sauƙi.",
          youCanNow: "yin zane da amfani da AI don fahimtar formula ba tare da raba bayanan sirri ba.",
          quickCheck: [
            { objective: "O5", q: "Wane zane ne ke kwatanta adadi, kamar baƙi a kowace rana?", options: ["Zanen sanduna (bar chart)", "Zanen layi (line chart)", "Zanen da'ira (pie chart)", "Babu zane"], answer: 0, why: "Zanen sanduna yana kwatanta adadi gefe da gefe." },
            { objective: "O5", q: "Formula ɗinku tana nuna kuskure kuma spreadsheet yana da sunayen abokan hulɗa. Me za ku saka a AI?", options: ["Dukkan spreadsheet ɗin", "Formula ɗin da bayanin ginshiƙan", "Lambobin wayar abokan hulɗa", "Kalmar sirrin asusunku"], answer: 1, why: "Ku bayyana ginshiƙan ku saka formula, ba bayanan sirri ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Faɗin abin da bayanan suke nunawa",
          minutes: 5,
          goal: "Rubuta jimloli biyu masu sauƙi da ke amsa tambayarku, ku raba spreadsheet lafiya.",
          text: [
            "Aikinku bai ƙare ba sai wani ya fahimce shi. Ku rubuta jimloli biyu: ɗaya da amsar, ɗaya kuma da lambar da ke tabbatar da ita. Misali: \"Asabar ce ranar da ta fi cunkoso. Matsakaicinmu baƙi 64 ne a ranakun Asabar, idan aka kwatanta da 38 a sauran ranaku.\"",
            "Ku duba aikinku kafin ku raba shi. Ku nemi kuskuren rubutu a lambobi, layuka marasa komai, da jimillar da ta yi kama da ta yi yawa ko ta yi ƙasa sosai. Idan wani abu ya yi kama da ba daidai ba, wataƙila ba daidai ba ne.",
            "Don raba shi, ku yi amfani da maɓallin Share ku zaɓi wanda zai iya gani. Don bayanai game da mutane, ku raba su da waɗanda ke buƙata kaɗai, kuma ku cire sunaye ko lambobin waya idan ba a buƙatar su."
          ],
          steps: ["Ku rubuta jimla ɗaya da amsar tambayarku.", "Ku rubuta jimla ɗaya da lambar da ke tabbatar da ita.", "Ku duba kuskuren rubutu, layuka marasa komai da jimillar da ba ta dace ba.", "Ku raba shi da mutanen da ke buƙatarsa kaɗai."],
          words: [["Abin da aka gano (finding)", "abin da bayanai suke nunawa, da aka faɗa da kalmomi masu sauƙi."]],
          slides: [
            { title: "Ku faɗi abin da yake nunawa", bullets: ["Jimla ta 1: amsar", "Jimla ta 2: lambar da ke tabbatar da ita"] },
            { title: "Ku duba kafin ku raba", bullets: ["Kuskuren rubutu a lambobi", "Layuka marasa komai", "Jimillar da ta yi kama da ta yi yawa ko ƙasa sosai"] },
            { title: "Ku raba lafiya", bullets: ["Ku yi amfani da maɓallin Share", "Mutanen da ke buƙata kaɗai", "Ku cire sunaye ko lambobin waya idan ba a buƙata"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala spreadsheet ɗinku da jerawa, tacewa, SUM, AVERAGE da zane. Ku rubuta jimloli biyu masu sauƙi da ke amsa tambayarku, ku duba aikinku, sannan ku raba shi da mutum ɗaya.",
          youCanNow: "mayar da bayanai zuwa abin da aka gano a sarari kuma aka duba, da raba shi lafiya.",
          quickCheck: [
            { objective: "O6", q: "Waɗanne sassa biyu ne abin da aka gano mai kyau yake da su?", options: ["Take da launi", "Zane da formula", "Amsa da lambar da ke tabbatar da ita", "Suna da lambar waya"], answer: 2, why: "Jimla ɗaya tana ba da amsar, ɗaya kuma tana ba da lambar da ke tabbatar da ita." },
            { objective: "O6", q: "Matsakaicin baƙinku a kowace rana yana nuna 4,200, amma wurin raba abincin ƙarami ne. Me za ku yi?", options: ["Ku raba shi nan take", "Ku goge spreadsheet ɗin", "Ku mayar da shi 4,000", "Ku duba kuskuren rubutu, layuka marasa komai da range na formula"], answer: 3, why: "Lambar da ta yi kama da ba daidai ba wataƙila ba daidai ba ce, don haka ku fara duba aikinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Nemo amsoshi da raba su",
        questions: [
          { objective: "O4", q: "Kowace formula ta spreadsheet tana farawa da:", options: ["Alamar dala", "Alamar tambaya", "Harafi", "Alamar daidai (=)"], answer: 3, why: "Formula tana farawa da =." },
          { objective: "O4", q: "Me =SUM(B2:B10) take yi?", options: ["Tana tara lambobi daga B2 zuwa B10", "Tana nemo matsakaici", "Tana jera ginshiƙin", "Tana yin zane"], answer: 0, why: "SUM tana tara kowace lamba a cikin range." },
          { objective: "O5", q: "Wane zane ne ya fi nuna canji a tsawon lokaci?", options: ["Zanen da'ira", "Zanen layi", "Babu zane", "Hoto"], answer: 1, why: "Zanen layi yana nuna yadda wani abu yake canjawa a tsawon lokaci." },
          { objective: "O5", q: "Kuna son AI ya bayyana kuskure a spreadsheet mai sunaye da lambobin wayar abokan hulɗa. Me ya kamata ku yi?", options: ["Ku saka komai", "Ku saka lambobin waya kawai", "Ku bayyana ginshiƙan ku saka formula, ba bayanan sirri ba", "Ku haƙura"], answer: 2, why: "Kuna iya samun taimako ba tare da raba bayanan sirri ba." },
          { objective: "O6", q: "Wanne ne abin da aka gano mafi kyau don rabawa?", options: ["\"Asabar ce ta fi cunkoso. Matsakaicinmu baƙi 64 ne a ranakun Asabar, da 38 a sauran ranaku.\"", "\"Lambobi.\"", "\"Zane ne.\"", "\"Ku duba spreadsheet.\""], answer: 0, why: "Yana ba da amsar da lambar da ke tabbatar da ita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Kayan Aiki da Dabarun Nazarin Bayanai (Data Analytics)",
    questions: [
      { objective: "O1", q: "Nazarin bayanai (data analytics) yana nufin:", options: ["Goge tsofaffin fayiloli", "Amfani da bayanai don amsa tambaya", "Sayen kwamfuta", "Yin rubutu da sauri"], answer: 1, why: "Nazari shi ne duba bayanai don samun amsa." },
      { objective: "O1", q: "Me yasa za a fara da tambaya a sarari?", options: ["Tana faɗa muku bayanan da za ku tattara", "Tana sa fayil ya yi girma", "Ba a buƙatar ta", "Tana ɓoye bayanai"], answer: 0, why: "Tambayar tana tsara bayanan da kuke buƙata." },
      { objective: "O1", q: "Don nemo rukunin kuɗin da ya fi tsada, kuna buƙatar:", options: ["Ranaku kawai", "Kalmar sirrinku", "Rukuni da adadin kuɗi", "Lambobin waya"], answer: 2, why: "Rukuni da adadin kuɗi suna ba ku damar kwatanta kuɗaɗe." },
      { objective: "O2", q: "Wanne ne kayan spreadsheet kyauta?", options: ["Agogon na'urar lissafi", "Littafin rubutu na takarda", "Tallar da ke tasowa (pop-up)", "Google Sheets"], answer: 3, why: "Google Sheets kyauta ne da asusun Google; Excel for the web kyauta ne da asusun Microsoft." },
      { objective: "O2", q: "A spreadsheet, ana sanya wa ginshiƙai suna da:", options: ["Haruffa", "Lambobi", "Launuka", "Alamomin emoji"], answer: 0, why: "Ginshiƙai A, B, C ne; layuka 1, 2, 3 ne." },
      { objective: "O2", q: "Wanne ne bayanai masu tsabta?", options: ["Kanu da yawa a cell ɗaya", "\"kusan 20 haka\" a cell na lamba", "Kanu ɗaya a kowane ginshiƙi da lambobi kawai", "Layuka marasa komai tsakanin kowane bayani"], answer: 2, why: "Bayanai masu tsabta suna da kanu a sarari da lambobi kawai." },
      { objective: "O3", q: "Jerawa daga mafi girma zuwa mafi ƙanƙanta tana sa:", options: ["Mafi ƙanƙantar lamba a farko", "Mafi girman lamba a farko", "Layuka a bazuwar tsari", "Komai a cikin zane"], answer: 1, why: "Daga mafi girma zuwa mafi ƙanƙanta yana farawa da babbar ƙima." },
      { objective: "O3", q: "Tace ginshiƙi:", options: ["Tana goge layuka har abada", "Tana aika spreadsheet ta imel", "Tana canja lambobi", "Tana ɓoye layukan da ba su dace ba, ba tare da goge su ba"], answer: 3, why: "Tacewa tana ɓoye layuka ne kawai har sai kun cire ta." },
      { objective: "O3", q: "A ina ake yawan samun jerawa da tacewa?", options: ["Menu na Data ko shafin Data", "Maɓallin Print", "Kwandon shara", "Sunan fayil"], answer: 0, why: "Dukkan kayan aikin biyu suna sa su a ƙarƙashin Data." },
      { objective: "O4", q: "Me =AVERAGE(C2:C31) take nemowa?", options: ["Mafi girman lamba", "Matsakaicin C2 zuwa C31", "Yawan layuka", "Ƙima ta farko"], answer: 1, why: "AVERAGE tana raba jimilla da yawan lambobin." },
      { objective: "O4", q: "A cikin C2:C31, colon (:) yana nufin:", options: ["Raba", "Tsaya", "Daga C2 har zuwa C31", "Ninka"], answer: 2, why: "Colon yana yin range na cells." },
      { objective: "O4", q: "Kun canja lamba a ginshiƙin. Jimillar SUM:", options: ["Tana kasancewa haka har abada", "Tana ɓacewa", "Tana zama rubutu", "Tana sabunta da kanta"], answer: 3, why: "Formula tana sake lissafi idan bayanai sun canja." },
      { objective: "O5", q: "Wane zane ne ke kwatanta adadi, kamar baƙi a kowace rana?", options: ["Zanen sanduna (bar chart)", "Zanen da'ira na abu ɗaya", "Babu zane", "Taswira"], answer: 0, why: "Zanen sanduna yana kwatanta adadi gefe da gefe." },
      { objective: "O5", q: "Wane zane ne ke nuna sassan abu guda, kamar kuɗin da aka kashe bisa rukuni?", options: ["Zanen layi", "Zanen da'ira (pie chart)", "Teburin ranaku", "Kanu"], answer: 1, why: "Zanen da'ira yana nuna yadda aka raba abu guda." },
      { objective: "O5", q: "Don yin zane, da farko za ku:", options: ["Goge kanun", "Rufe fayil", "Zaɓi kanu da bayanai", "Canja irin rubutu (font)"], answer: 2, why: "Zanen yana buƙatar sanin bayanan da zai nuna." },
      { objective: "O5", q: "Me bai kamata ku saka a mataimakin AI ba?", options: ["Formula", "Saƙon kuskure", "Bayanin ginshiƙanku", "Sunaye da lambobin wayar mutanen da kuke yi wa hidima"], answer: 3, why: "Bayanan mutane ya kamata su kasance a sirri." },
      { objective: "O6", q: "Abin da aka gano mai kyau yana da:", options: ["Amsa da lambar da ke tabbatar da ita", "Zane kawai", "Babu lambobi", "Kalmar sirrinku"], answer: 0, why: "Jimloli biyu: amsar da shaidar." },
      { objective: "O6", q: "Jimillarku ta yi kama da ta yi yawa sosai. Me za ku yi?", options: ["Ku raba ta duk da haka", "Ku duba kuskuren rubutu, layuka marasa komai da range na formula", "Ku goge fayil ɗin", "Ku rage girman rubutu"], answer: 1, why: "Jimillar da ba ta dace ba yawanci tana nufin akwai kuskure da za a nemo." },
      { objective: "O6", q: "Idan kuna raba spreadsheet game da mutane, ya kamata ku:", options: ["Saka shi a fili ga kowa", "Raba shi da duk wanda kuka sani", "Raba shi da waɗanda ke buƙata kaɗai, ku cire bayanan da ba a buƙata", "Buga shi ku bar shi a waje"], answer: 2, why: "Raba kaɗan yana kiyaye bayanan mutane lafiya." },
      { objective: "O2", q: "Wane kayan aiki kyauta ne ke ba ku damar amfani da Excel a burauzar intanet?", options: ["Excel for the web a office.com", "Injin fax", "Saƙon tes", "Katin kyauta (gift card)"], answer: 0, why: "Excel for the web kyauta ne da asusun Microsoft." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      4,
      6,
      9,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bayanai masu tsabta",
        objective: "O2",
        notYet: "Babu kanu, an haɗa kalmomi da lambobi, ko layuka ƙasa da goma.",
        meets: "Kanu ɗaya a kowane ginshiƙi, bayani ɗaya a kowane layi, lambobi kawai, na bayanan wata ɗaya.",
        exceeds: "Fayil ɗin yana da suna a sarari kuma bayanan ba sa buƙatar gyara."
      },
      {
        name: "Jerawa da tacewa",
        objective: "O3",
        notYet: "Ba a jera ko tace bayanan ba.",
        meets: "An jera babban ginshiƙin lambobi daga mafi girma zuwa mafi ƙanƙanta, kuma an yi amfani da tacewa sannan aka cire ta.",
        exceeds: "Zai iya faɗin abin da jerawa da tacewa suka nuna."
      },
      {
        name: "SUM da AVERAGE",
        objective: "O4",
        notYet: "Babu formula, ko suna amfani da range ba daidai ba.",
        meets: "SUM da AVERAGE daidai a ginshiƙin lambobi.",
        exceeds: "Ya nuna cewa dukkansu suna sabunta idan an canja lamba."
      },
      {
        name: "Zane",
        objective: "O5",
        notYet: "Babu zane, ko irin zanen ba daidai ba ne kuma babu take.",
        meets: "Zane na irin da ya dace, mai take a sarari.",
        exceeds: "Zanen yana sa amsar tambayar ta kasance mai sauƙin gani."
      },
      {
        name: "Abin da aka gano a jimloli biyu",
        objective: "O6",
        notYet: "Babu amsa, ko babu lambar da ke tabbatar da ita.",
        meets: "Jimla ɗaya da amsar, ɗaya kuma da lambar da ke tabbatar da ita.",
        exceeds: "An duba aikin kuma an raba shi da mutanen da ke buƙata kaɗai."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi amfani da spreadsheet don iyalinsu, aikinsu ko ƙungiyar al'ummarsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka saka ƙwarewar spreadsheet a takardar bayanin aikinsu (CV) ko suka sami aikin ofis cikin kwanaki 90",
      "Abokan hulɗa na al'umma sun ce suna amfani da spreadsheet da zane-zanen da masu koyo suka yi a rahotanni ko taruka"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet (ta ɗakin karatu ko ta gida); manhajar waya tana aiki don ƙananan spreadsheet",
      "Asusun Google ko Microsoft kyauta don Google Sheets ko Excel for the web",
      "Bayanan wata ɗaya, na gaske ko na atisaye, kamar masu zuwa wurin raba abinci ko kuɗin da aka kashe bisa rukuni",
      "Mataimakin AI kyauta don bayanin formula da kurakurai",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku samar da bayanan atisaye ga masu koyo da ba su da nasu.",
      "Ku nuna jerawa, tacewa da SUM kai tsaye a na'urar majigi (projector) kafin masu koyo su gwada.",
      "Ku tunatar da masu koyo kada su taɓa saka sunaye, lambobin waya ko lambobin asusu a AI; su bayyana ginshiƙan a maimakon haka.",
      "Ku haɗa masu koyo da ba su saba da kwamfuta ba da abokin aiki da ya fi ƙwarewa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
