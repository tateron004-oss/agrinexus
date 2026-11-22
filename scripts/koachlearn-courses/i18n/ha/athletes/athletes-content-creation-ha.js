"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-content-creation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-content-creation-ha",
  lang: "ha",
  translationOf: "athletes-content-creation",
  category: "Athletes",
  name: "Ƙirƙirar Abun Ciki ga 'Yan Wasa",
  skills: "Tsara gajeren bidiyo mai jan hankali (hook), Ɗaukar bidiyo da waya, Gyaran bidiyo da manhaja kyauta, Rubuta bayanin rubutu da rubutun kan allo da AI, Yin kalandar abun ciki ta mako biyu",
  outcome: "tsarawa, ɗauka, gyarawa da wallafa bidiyon ɗan wasa na daƙiƙa 30 zuwa 60 mai ƙaƙƙarfan jan hankali (hook), rubutun ƙasa (captions) da rubutun kan allo masu sarari, da tsara abun cikin makonni biyu masu zuwa a kalanda mai sauƙi.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da masu horarwa (coach) da ke son yin gajerun bidiyo da mutane za su kalla da gaske: bidiyon atisaye, lokutan ranar wasa, abin da ke faruwa a bayan fage, da shawarwari.",
    "Waya da kayan aiki kyauta kawai kuke buƙata. Za ku tsara bidiyo mai jan hankali, ku ɗauke shi da kyau, ku gyara shi da manhaja kyauta kamar CapCut ko editan da ke cikin wayarku, ku rubuta bayanin rubutu da taimakon AI, sannan ku tsara wallafe-wallafen makonni biyu.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi ku wallafa bidiyon ɗan wasa ɗaya na daƙiƙa 30 zuwa 60: tsari a rubuce mai sassa uku (jan hankali, amfani, ƙarshe), da aka ɗauka da wayarku da haske da sauti masu kyau, aka gyara shi da rubutun kan allo da rubutun ƙasa, da bayanin rubutu da AI ya rubuta ku kuma kuka gyara. Sannan ku cike kalandar abun ciki ta mako biyu da ƙarin ra'ayoyin wallafa guda shida.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa na sakandare, na jami'a da na kulob, da masu horarwa, da ke son yin gajerun bidiyo da mutane za su kalla da gaske: bidiyon atisaye, lokutan ranar wasa, abin da ke faruwa a bayan fage da shawarwari.",
    startingPoint: "Suna ɗaukar bidiyo da wallafawa da waya, kuma suna kallon gajerun bidiyo kullum. Yawancinsu suna ɗauka ba tare da tsari ba, suna wallafa bidiyo mai lokutan banza, babu rubutun ƙasa, da waƙar wani, kuma suna wallafawa idan sun tuna, ba bisa jadawali ba.",
    gap: "Bidiyon da ba a tsara ba yana rasa masu kallo a daƙiƙoƙin farko, ana iya kashe sautinsa saboda waƙa, kuma yana iya karya dokokin bayyanawa idan akwai kamfani (brand) a ciki. Bidiyo da aka tsara, aka ɗauka da kyau, mai rubutun ƙasa, da kalanda mai sauƙi suna bar 'yan wasa su riƙa ba da labarinsu a kai a kai ba tare da cutar da atisaye ko karatu ba.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 7",
      "Waya mai kyamara, manhajar gyaran bidiyo kyauta da mataimakin AI kyauta",
      "Kusan minti 60 na darussa, da lokacin ɗauka da gyara bidiyo ɗaya",
      "Izini don ɗaukar abokan wasa, masu horarwa da sauran mutane; dokokin ɗaukar bidiyo na ƙungiya",
      "Waƙa mai lasisi kawai; dokokin bayyanawa na FTC da na NIL ga duk wata hulɗa da kamfani"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gina Suna (Brand) a Kafofin Sada Zumunta ga 'Yan Wasa\" yana taimaka muku zaɓar ginshiƙan abun cikinku tukuna."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ra'ayi ɗaya daga ginshiƙan abun cikinku", action: "tsara gajeren bidiyo mai jan hankali, amfani da ƙarshe", standard: "tare da jan hankali na daƙiƙa 1 zuwa 3 na farko da kiran ɗaukar mataki ko ƙarshe mai sarari, a rubuce kafin ɗauka" },
    { id: "O2", condition: "Ta amfani da wayarku", action: "ɗaukar bidiyo masu tsabta a tsaye, da haske mai kyau, hoto mara girgiza da sauti mai sarari", standard: "kuna fuskantar haske, aikin yana tsakiya, kuma da izinin duk wani mutum da ke cikin hoton" },
    { id: "O3", condition: "Idan kuna da bidiyonku", action: "zaɓa da jera hotuna na nesa, na tsakiya da na kusa don ba da labarin matsala, aiki, sakamako", standard: "kowane bidiyo yana taimakon labarin, kuma babu sakamakon ƙarya" },
    { id: "O4", condition: "Ta amfani da manhajar gyaran bidiyo kyauta", action: "gyara bidiyonku zuwa bidiyo ɗaya na daƙiƙa 30 zuwa 60 mai rubutun kan allo, rubutun ƙasa da waƙa mai lasisi", standard: "babu lokacin banza, rubutun ana iya karanta shi a waya, kuma an duba rubutun ƙasa don kurakurai" },
    { id: "O5", condition: "Ta amfani da mataimakin AI", action: "rubuta bayanin rubutu na wallafa da muryarku, da 'yan hashtag masu dangantaka", standard: "kuna ambaton (tag) mutanen da suka yarda kawai, kuma kuna bayyana duk wani amfanin kamfani a cikin bidiyon da kusa da farkon bayanin rubutun" },
    { id: "O6", condition: "Ta amfani da Google Sheets ko manhajar rubutu (notes)", action: "tsara wallafe-wallafen makonni biyu a kalandar abun ciki", standard: "da wallafa 3 zuwa 4 a mako, ginshiƙan Date, Pillar, Idea, Format da Status, kuma an ware makonnin da ke da aiki sosai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da ɗauka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gajeren bidiyo mai sassa uku",
          minutes: 5,
          goal: "Tsara gajeren bidiyo mai jan hankali, amfani da ƙarshe.",
          text: [
            "Sau da yawa ana kallon gajerun bidiyo na daƙiƙa ɗaya ko biyu kawai kafin mutane su wuce. Lokacin farko, wanda ake kira hook (jan hankali), shi ne ke yanke ko za su tsaya.",
            "Ku tsara sassa uku: 1. Jan hankali (daƙiƙa 1 zuwa 3 na farko): tambaya, wani abin mamaki, ko magana mai ƙarfi kamar \"Atisayen da ya gyara harbina na tsalle.\" 2. Amfani (tsakiya): ku nuna atisayen, lokacin ko shawarar. 3. Ƙarshe: kiran ɗaukar mataki kamar \"Ku ajiye wannan don atisaye\" ko ƙarshe mai gamsarwa.",
            "Ku rubuta tsarin kafin ku ɗauka. Mataimakin AI zai iya ba ku ra'ayoyin jan hankali goma: \"Ka ba ni gajerun jan hankali 10 na bidiyon da ke nuna atisayen ƙafafuna na minti 5 don ƙwallon kwando.\""
          ],
          steps: ["Ku zaɓi ra'ayi ɗaya daga ginshiƙan abun cikinku.", "Ku rubuta jan hankali na daƙiƙa 1-3 na farko.", "Ku jera hotunan da ke nuna amfanin.", "Ku rubuta ƙarshe ko kiran ɗaukar mataki.", "Ku nemi ƙarin ra'ayoyin jan hankali daga AI ku zaɓi mafi kyau."],
          words: [["Hook (jan hankali)", "daƙiƙa 1 zuwa 3 na farko da ke sa mutane su so ci gaba da kallo."], ["Kiran ɗaukar mataki (call to action)", "mataki na gaba mai sarari da kuke neman masu kallo su ɗauka."]],
          slides: [
            { title: "Me yasa jan hankali yake da muhimmanci", bullets: ["Mutane suna yanke shawara cikin daƙiƙa ɗaya ko biyu", "Jan hankali = daƙiƙa 1-3 na farko"] },
            { title: "Sassa uku", bullets: ["1. Jan hankali: tambaya, abin mamaki, magana mai ƙarfi", "2. Amfani: atisayen, lokacin ko shawarar", "3. Ƙarshe: kiran ɗaukar mataki ko ƙarshe mai kyau"] },
            { title: "Ku fara tsarawa", bullets: ["Ku rubuta shi kafin ɗauka", "Ku nemi ra'ayoyin jan hankali 10 daga AI"] }
          ],
          tryIt: "Ku rubuta tsari mai sassa uku na gajeren bidiyo ɗaya. Ku nemi jan hankali goma daga mataimakin AI, ku zaɓi wanda ya fi dacewa da ku.",
          youCanNow: "tsara gajeren bidiyo mai jan hankali, amfani da ƙarshe.",
          quickCheck: [
            { objective: "O1", q: "Mene ne sassa uku na tsarin gajeren bidiyo?", options: ["Gabatarwa, sunayen masu aiki, rufewa", "Jan hankali, amfani da ƙarshe", "Waƙa, matattara (filter), rubutu", "Take, tag, hanyar haɗi"], answer: 1, why: "Ku tsara jan hankali, amfanin a tsakiya, da ƙarshe." },
            { objective: "O1", q: "Ra'ayin bidiyonku shi ne atisayen miƙe jiki bayan wasa. Me za ku yi kafin ɗauka?", options: ["Ku ɗauka ku yanke shawara daga baya", "Ku wallafa hoto a maimakon haka", "Ku rubuta jan hankali, hotunan da ƙarshe", "Ku nemi abokin wasa ya ɗauki komai"], answer: 2, why: "Ku rubuta tsarin kafin ku ɗauka don ku san hotunan da kuke buƙata." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ɗaukar bidiyo da wayarku",
          minutes: 5,
          goal: "Ɗauki bidiyo masu tsabta da haske mai kyau, hoto mara girgiza da sauti mai sarari.",
          text: [
            "Haske: ku fuskanci hasken, kada ku juya masa baya. Hasken rana daga taga ko a waje a inuwa yana da kyau sosai. Kada ku ɗauka da taga mai haske sosai a bayanku.",
            "Hoto da rashin girgiza: ku ɗauka a tsaye don manhajojin gajerun bidiyo, ku riƙe wayar ba girgiza da tripod (kafar waya) ko ta jingina ta da wani abu, kuma ku sa aikin a tsakiyar hoton. Ku goge ruwan tabarau (lens) tukuna. Yanayin slow motion (a hankali) yana da kyau wajen nuna dabara.",
            "Sauti: idan kuna magana, ku matso kusa da wayar ku nisanci iska da filayen wasa masu hayaniya, ko ku ƙara muryar bayani (voice-over) daga baya. Ku nemi izini kafin ku ɗauki abokan wasa, masu horarwa ko wasu mutane, kuma ku bi dokokin ɗaukar bidiyo na ƙungiyarku."
          ],
          steps: ["Ku goge ruwan tabarau.", "Ku fuskanci hasken.", "Ku ɗauka a tsaye ba girgiza.", "Ku sa aikin a tsakiya.", "Ku ɗauki ƙarin 'yan daƙiƙoƙi kafin da bayan kowane bidiyo.", "Ku nemi izini kafin ɗaukar wasu."],
          words: [["Bidiyo a tsaye (vertical video)", "bidiyon da aka ɗauka da wayar a tsaye, siffar da yawancin manhajojin gajerun bidiyo ke amfani da ita."], ["Muryar bayani (voice-over)", "magana da aka naɗa daban aka ɗora a kan bidiyon."]],
          slides: [
            { title: "Haske", bullets: ["Ku fuskanci hasken", "Taga ko inuwa a waje", "Babu taga mai haske a bayanku"] },
            { title: "Hoto da rashin girgiza", bullets: ["A tsaye don manhajojin gajerun bidiyo", "Tripod ko ku jingina da wani abu", "Ku goge lens; ku gwada slow motion"] },
            { title: "Sauti da izini", bullets: ["Ku matso kusa ko ku yi voice-over", "Ku tambaya kafin ɗaukar wasu"] }
          ],
          tryIt: "Ku ɗauki bidiyon da kuka tsara. Ku ɗauki kowanne sau biyu ku ajiye mafi kyau.",
          youCanNow: "ɗaukar bidiyo masu tsabta, marasa girgiza, da haske da sauti masu kyau.",
          quickCheck: [
            { objective: "O2", q: "Ta wace hanya ya kamata ku riƙe wayarku don manhajojin gajerun bidiyo?", options: ["A tsaye", "A kwance", "Juye", "A karkace"], answer: 0, why: "Ku ɗauka a tsaye don manhajojin gajerun bidiyo." },
            { objective: "O2", q: "Kuna ɗauka a gaban taga mai haske sosai kuma fuskarku ta yi duhu. Me za ku yi?", options: ["Ku ɗauka duk da haka", "Ku ƙara matattara daga baya", "Ku ƙara zuƙowa", "Ku juya don ku fuskanci hasken tagar"], answer: 3, why: "Ku fuskanci hasken, kada ku juya masa baya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ba da labari a cikin bidiyonku",
          minutes: 4,
          goal: "Zaɓi da jera bidiyo ta yadda bidiyon zai ba da gajeren labari.",
          text: [
            "Ko bidiyo na daƙiƙa 30 zai iya ba da labari: matsala, aikin, sakamakon. \"Ina ta rasa sa ƙwallo da hannun hagu. Ga atisayen da na yi kullum na makonni biyu. Yanzu ku kalla.\"",
            "Ku yi amfani da hotuna daban-daban: hoto na nesa (wide shot) don nuna inda kuke, hoto na tsakiya don aikin, da hoto na kusa (close-up) don cikakkun bayanai kamar motsin ƙafa ko hannaye. Canza hotuna yana sa mutane su ci gaba da kallo.",
            "Abin da ke faruwa a bayan fage da lokuta na gaske, kamar atisayen safiya da wuri, tafiya a motar ƙungiya ko godiya ga mai horarwa, sau da yawa suna haɗa mutane fiye da bidiyon manyan lokuta da aka gyara sosai. Ku faɗi gaskiya; kada ku ƙirƙiri sakamakon ƙarya."
          ],
          steps: ["Ku rubuta labarinku a layi ɗaya: matsala, aiki, sakamako.", "Ku zaɓi bidiyo na nesa, na tsakiya da na kusa.", "Ku jera su yadda suka dace da labarin.", "Ku yanke duk abin da ba ya taimakon labarin."],
          words: [["Hoto na nesa (wide shot)", "yana nuna dukkan wurin da inda kuke."], ["Hoto na kusa (close-up)", "hoto na kusa sosai na wani ɗan abu, kamar hannaye ko ƙafafu."]],
          slides: [
            { title: "Gajeren labari", bullets: ["Matsala", "Aikin", "Sakamakon"] },
            { title: "Ku haɗa hotuna", bullets: ["Na nesa: inda kuke", "Na tsakiya: aikin", "Na kusa: cikakkun bayanai"] },
            { title: "Gaskiya tana haɗa mutane", bullets: ["Lokutan bayan fage", "Ku faɗi gaskiya; babu sakamakon ƙarya"] }
          ],
          tryIt: "Ku rubuta labarin bidiyonku a layi ɗaya, sannan ku jera bidiyonku: aƙalla ɗaya na nesa, ɗaya na tsakiya da ɗaya na kusa.",
          youCanNow: "jera bidiyo zuwa gajeren labari na gaskiya mai hotuna daban-daban.",
          quickCheck: [
            { objective: "O3", q: "Me hoto na nesa yake nunawa?", options: ["Cikakkun bayanai kamar motsin ƙafa", "Inda kuke", "Fuskarku kawai", "Bayanin rubutu"], answer: 1, why: "Hoto na nesa yana nuna wurin; na tsakiya yana nuna aikin, na kusa kuma cikakkun bayanai." },
            { objective: "O3", q: "Wani bidiyo yana da daɗi amma bai dace da labarin matsala, aiki, sakamako ba. Me za ku yi?", options: ["Ku yanke shi", "Ku sa shi farko", "Ku rage saurinsa", "Ku maimaita shi sau biyu"], answer: 0, why: "Ku yanke duk abin da ba ya taimakon labarin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da ɗauka",
        questions: [
          { objective: "O1", q: "Mene ne jan hankali (hook)?", options: ["Sunayen masu aiki a ƙarshe", "Wani nau'in tripod", "Daƙiƙa 1-3 na farko da ke sa mutane su ci gaba da kallo", "Hashtag"], answer: 2, why: "Jan hankali ne ke yanke ko mutane za su tsaya." },
          { objective: "O1", q: "Wanne ne jan hankali mai ƙarfi?", options: ["\"Atisayen da ya gyara harbina na tsalle\"", "\"Um, sannu, to...\"", "Dogon farko mara sauti", "Baƙin allo"], answer: 0, why: "Yana alƙawarin amfani nan take." },
          { objective: "O2", q: "Ina ya kamata haske ya kasance idan kuna ɗaukar kanku?", options: ["A bayanku", "Babu ko'ina", "Daga sama kawai", "A gabanku, yana fuskantar ku"], answer: 3, why: "Fuskantar haske yana sa fuskarku ta fito sarai." },
          { objective: "O2", q: "Kafin ɗaukar abokin wasa, ya kamata ku:", options: ["Ɗauke shi a ɓoye", "Nemi izininsa", "Wallafa tukuna", "Yi amfani da sunansa ba tare da tambaya ba"], answer: 1, why: "Izini da dokokin ƙungiya su ne farko." },
          { objective: "O3", q: "Labarin bidiyo mai sauƙi shi ne:", options: ["Bidiyo barkatai", "Matsala, aikin, sakamakon", "Ƙarshen kawai", "Rubutu kawai"], answer: 1, why: "Wannan tsari yana sa masu kallo su ci gaba da sha'awa." }
        ]
      }
    },
    {
      name: "Babi na 2: Gyara, rubutun bayani da tsarawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gyaran bidiyo da manhaja kyauta",
          minutes: 6,
          goal: "Gyara bidiyonku zuwa bidiyo mai matsewa da rubutu da waƙar da aka ba ku izinin amfani da ita.",
          text: [
            "Editoci kyauta kamar CapCut, manhajar hotuna da ke cikin wayarku, ko kayan gyara da ke cikin Instagram, TikTok da YouTube Shorts suna bar ku ku yanke bidiyo, ku jera su, ku ƙara rubutu.",
            "Ku yanke sosai: ku yanke farko da ƙarshen kowane bidiyo don kada a sami lokacin banza. Ku ƙara gajeren rubutu a kan allo don jan hankali da muhimman abubuwa, babba yadda za a iya karanta shi a waya. Ku ƙara rubutun ƙasa (captions), domin mutane da yawa suna kallo ba sauti, kuma ku duba su don kurakurai.",
            "Waƙa: ku yi amfani da ɗakin waƙoƙi mai lasisi da ke cikin manhajar, ko waƙoƙin royalty-free. Amfani da shahararriyar waƙa daga wani wuri na iya sa a kashe sautin bidiyonku ko a cire shi, kuma wallafe-wallafen da kamfani ya ɗauki nauyi suna iya samun dokokin waƙa masu tsauri."
          ],
          steps: ["Ku shigo da bidiyonku a jere.", "Ku yanke lokacin banza a farko da ƙarshen kowane bidiyo.", "Ku ƙara rubutun jan hankali a daƙiƙoƙin farko.", "Ku ƙara rubutun ƙasa ku duba su.", "Ku ƙara waƙa daga ɗakin waƙoƙin manhajar.", "Ku kalla sau ɗaya a cikakken allo a wayarku."],
          words: [["Yanke (trim)", "cire sassan bidiyo da ba ku buƙata."], ["Rubutun ƙasa (captions)", "kalmomi a kan allo da ke nuna abin da ake faɗa."], ["Waƙar royalty-free", "waƙar da za ku iya amfani da ita bisa lasisinta ba tare da biya a kowane amfani ba."]],
          slides: [
            { title: "Editoci kyauta", bullets: ["CapCut", "Editan da ke cikin wayarku", "Kayan gyara da ke cikin manhajojin sada zumunta"] },
            { title: "Ku yanke sosai", bullets: ["Babu lokacin banza", "Rubutun jan hankali a daƙiƙoƙin farko", "Rubutun ƙasa: da yawa suna kallo ba sauti"] },
            { title: "Waƙa", bullets: ["Ku yi amfani da ɗakin waƙoƙi mai lasisi na manhajar", "Wasu waƙoƙi na iya sa a kashe sauti ko a cire bidiyo"] }
          ],
          tryIt: "Ku gyara bidiyonku zuwa daƙiƙa 30-60 da rubutun jan hankali, rubutun ƙasa da waƙa daga ɗakin waƙoƙin manhajar. Ku kalla a cikakken allo ku yanke duk abin da ke da jinkiri.",
          youCanNow: "gyara gajeren bidiyo mai matsewa da rubutu, rubutun ƙasa da waƙar da aka yarda da ita.",
          quickCheck: [
            { objective: "O4", q: "Daga ina ya kamata ku samo waƙar bidiyonku?", options: ["Kowace shahararriyar waƙa da kuke so", "Jerin waƙoƙin aboki", "Ɗakin waƙoƙi mai lasisi na manhajar ko waƙoƙin royalty-free", "Naɗar rediyo"], answer: 2, why: "Waƙoƙi daga waje na iya sa a kashe sautin bidiyonku ko a cire shi." },
            { objective: "O4", q: "Rubutun ƙasa na atomatik na manhajar ya rubuta sunan mai horarwarku ba daidai ba. Me za ku yi?", options: ["Ku bar shi", "Ku kashe rubutun ƙasa", "Ku cire mai horarwarku daga bidiyon", "Ku gyara rubutun kafin wallafawa"], answer: 3, why: "Ku ƙara rubutun ƙasa kuma ku duba su don kurakurai." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bayanin rubutu da wallafa da AI",
          minutes: 5,
          goal: "Rubuta bayanin rubutu na wallafa da taimakon AI, da muryarku, tare da bayyanawa ta gaskiya.",
          text: [
            "Bayanin rubutu (caption) na wallafa shi ne rubutun da ke ƙarƙashin bidiyonku. Ku tambayi mataimakin AI: \"Ka rubuta gajerun bayanin rubutu uku na bidiyona da ke nuna atisayen ƙafafuna. Mai fara'a, ƙasa da haruffa 150, ka ƙare da tambaya don samun sharhi.\"",
            "Ku zaɓi ɗaya ku sa ya yi kama da ku. Ku ƙara 'yan hashtag masu dangantaka, ba dozin-dozin ba. Ku ambaci (tag) mutane ne kawai idan sun yarda.",
            "Idan wani kamfani ya biya ku ko ya ba ku wani abu don bidiyon, ku faɗe shi a sarari a cikin bidiyon (da baki da kuma a kan allo) da kuma a cikin bayanin rubutu, kusa da farko, kamar \"Ad\" (talla) ko \"Na gode wa [kamfani] da kayan kyauta\". FTC (hukumar kare masu saye ta Amurka) ta ce sa shi a ƙarshe kawai, a cikin hashtag ko a cikin bayani (description) bai isa ba. 'Yan wasan jami'a: ku duba dokokin bayar da rahoton NIL da ofishin bin ƙa'idoji (compliance)."
          ],
          steps: ["Ku nemi zaɓuɓɓukan gajeren bayanin rubutu uku daga AI.", "Ku sake rubuta wanda kuka zaɓa da muryarku.", "Ku ƙara 'yan hashtag masu dangantaka.", "Idan akwai kamfani, ku bayyana a cikin bidiyon da kusa da farkon bayanin rubutun.", "Ku wallafa lokacin da masu bin ku suka saba kasancewa a intanet."],
          words: [["Hashtag", "kalma mai # a gabanta da ke tara wallafe-wallafe kan wani batu."], ["Bayyanawa (disclosure)", "bayani a sarari cewa wani kamfani ya biya ku ko ya ba ku wani abu."]],
          slides: [
            { title: "AI yana rubuta daftarin bayani", bullets: ["Gajerun zaɓuɓɓuka uku", "Ku ƙare da tambaya"] },
            { title: "Ku mai da shi naku", bullets: ["Muryarku", "'Yan hashtag masu dangantaka", "Ku ambaci mutane da izininsu kawai"] },
            { title: "Akwai kamfani a ciki?", bullets: ["Ku faɗa ku kuma nuna a cikin bidiyon", "\"Ad\" kusa da farkon bayanin rubutu", "Ku duba dokokin NIL"] }
          ],
          sources: [{ name: "FTC: Muhimman abubuwan bayyanawa ga masu tasiri a kafofin sada zumunta (Disclosures 101 for Social Media Influencers)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Ku rubuta bayanin rubutun bidiyonku da taimakon AI, ku gyara shi da muryarku, sannan ku wallafa bidiyon.",
          youCanNow: "rubuta gajeren bayanin rubutu na wallafa na gaskiya da taimakon AI.",
          quickCheck: [
            { objective: "O5", q: "Hashtag nawa darasin yake ba da shawara?", options: ["Babu ko ɗaya har abada", "'Yan kaɗan masu dangantaka", "Talatin ko fiye", "Waɗanda ke tashe kawai"], answer: 1, why: "Ku ƙara 'yan hashtag masu dangantaka, ba dozin-dozin ba." },
            { objective: "O5", q: "Wani kamfanin abin sha na 'yan wasa ya ba ku abin sha kyauta don bidiyonku. A ina za ku bayyana hakan?", options: ["A cikin hashtag a ƙarshe kawai", "A cikin bayani (description) kawai", "Babu inda, domin ba kuɗi ba ne", "Da baki da kuma a kan allo a cikin bidiyon, da kusa da farkon bayanin rubutu"], answer: 3, why: "FTC ta ce bayyanawa a ƙarshe kawai, a cikin hashtag ko a cikin bayani bai isa ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kalandar abun cikinku ta mako biyu",
          minutes: 5,
          goal: "Tsara wallafe-wallafen makonni biyu a kalanda mai sauƙi da ta dace da atisayenku.",
          text: [
            "Wallafawa a kai a kai ya fi wallafawa da yawa muhimmanci. Wallafa uku ko huɗu a mako sun isa ga yawancin 'yan wasa a lokacin kakar wasa.",
            "Ku yi kalanda a Google Sheets ko manhajar rubutu da ginshiƙai: Date (rana), Pillar (ginshiƙi: atisaye, ranar wasa, a wajen fili, darussa), Idea (ra'ayi), Format (iri: gajeren bidiyo, hoto, story) da Status (matsayi: ra'ayi, an ɗauka, an gyara, an wallafa). Ku haɗa aikinku wuri ɗaya (batching): ku ɗauki bidiyo da yawa a zama ɗaya.",
            "Ku nemi mataimakin AI ya cike daftarin farko daga ginshiƙanku da jadawalinku, sannan ku gyara shi. Ku ware makonnin da ke da aiki sosai kamar jarabawar ƙarshe ko gasa: babu laifi ku rage wallafawa a lokacin."
          ],
          steps: ["Ku yi ginshiƙai: Date, Pillar, Idea, Format, Status.", "Ku tsara wallafa 3-4 a mako na makonni biyu.", "Ku nemi AI ya rubuta ra'ayoyi daga ginshiƙanku.", "Ku gyara bisa wasanni, jarabawa da tafiye-tafiye.", "Ku haɗa ɗaukar bidiyo a zama ɗaya."],
          words: [["Kalandar abun ciki (content calendar)", "jadawalin abin da za ku wallafa da lokacin da za ku wallafa."], ["Batching (haɗa aiki wuri ɗaya)", "yin aiki iri ɗaya da yawa a lokaci ɗaya, kamar ɗaukar bidiyo biyar a zama ɗaya."]],
          slides: [
            { title: "A kai a kai ya fi yawa", bullets: ["Wallafa 3-4 a mako a lokacin kakar wasa"] },
            { title: "Ginshiƙan kalanda", bullets: ["Date, Pillar, Idea", "Format, Status"] },
            { title: "Ku yi aiki da hikima", bullets: ["AI yana rubuta daftarin ra'ayoyi", "Ku haɗa ɗaukar bidiyo wuri ɗaya", "Ku rage wallafawa a makonni masu aiki"] }
          ],
          tryIt: "Aikin ƙarshe: ku wallafa bidiyonku na daƙiƙa 30-60, sannan ku gina kalandar abun ciki ta mako biyu da ƙarin ra'ayoyin wallafa shida, da AI ya rubuta daftarinsu kuka kuma gyara su bisa jadawalinku.",
          youCanNow: "tsara abun cikin makonni biyu a kalandar da ta dace da atisayenku.",
          quickCheck: [
            { objective: "O6", q: "Wallafa nawa a mako darasin yake ba da shawara ga yawancin 'yan wasa a lokacin kakar wasa?", options: ["Uku ko huɗu", "Ɗaya a wata", "Goma a rana", "Ashirin"], answer: 0, why: "Wallafawa a kai a kai ya fi wallafawa da yawa muhimmanci." },
            { objective: "O6", q: "Kuna da gasa a ƙarshen mako mai zuwa. Yaya za ku tsara kalandarku?", options: ["Ku ninka wallafawa", "Ku soke dukkan wallafe-wallafe na wata ɗaya", "Ku ware wannan makon ku rage wallafawa", "Ku ɗauki bidiyo lokacin wasa maimakon ku yi wasa"], answer: 2, why: "Babu laifi ku rage wallafawa a makonni masu aiki kamar gasa ko jarabawar ƙarshe." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gyara, rubutun bayani da tsarawa",
        questions: [
          { objective: "O4", q: "Me yasa za ku ƙara rubutun ƙasa a bidiyonku?", options: ["Suna tsawaita shi", "NCAA ta wajabta su", "Don ɓoye kurakurai", "Mutane da yawa suna kallo ba sauti"], answer: 3, why: "Rubutun ƙasa suna bar masu kallo ba sauti su fahimta." },
          { objective: "O4", q: "Wace waƙa ce ta fi aminci a yi amfani da ita?", options: ["Ɗakin waƙoƙi mai lasisi na manhajar", "Kowace waƙa daga rediyo", "Waƙa daga fim", "Waƙar da abokinku ya sauke"], answer: 0, why: "Wasu waƙoƙi na iya sa a kashe sautin bidiyonku ko a cire shi." },
          { objective: "O5", q: "Wani kamfani ya biya kuɗin bidiyonku. A ina ya kamata bayyanawar ta kasance?", options: ["A cikin hashtag a ƙarshe kawai", "A cikin bayani (description) kawai", "A faɗa a kuma nuna a cikin bidiyon, da kusa da farkon bayanin rubutu", "Babu inda"], answer: 2, why: "FTC ta ce dole ne bayyanawa ta kasance mai wuyar rasawa." },
          { objective: "O6", q: "Me ya fi muhimmanci a wallafawa?", options: ["Wallafawa sau 20 a rana", "Wallafawa sau ɗaya a shekara kawai", "Kwaikwayon wasu", "Wallafawa a kai a kai"], answer: 3, why: "Wallafawa a kai a kai yana gina masu bibiya." },
          { objective: "O6", q: "Batching yana nufin:", options: ["Wallafawa ba tare da gyara ba", "Ɗaukar bidiyo da yawa a zama ɗaya", "Goge tsofaffin wallafe-wallafe", "Sayen masu bibiya"], answer: 1, why: "Batching yana adana lokaci a lokuta masu aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙirƙirar Abun Ciki ga 'Yan Wasa",
    questions: [
      { objective: "O1", q: "Tsawon jan hankali (hook) nawa ne?", options: ["Minti na ƙarshe", "Dukkan bidiyon", "Daƙiƙa 1-3 na farko", "Bayanin rubutu"], answer: 2, why: "Masu kallo suna yanke shawara da sauri." },
      { objective: "O1", q: "Tsakiyar gajeren bidiyo ya kamata ta ba da:", options: ["Amfani: atisayen, lokacin ko shawarar", "Shiru", "Dogon farko", "Tambarinku (logo) kawai"], answer: 0, why: "Amfani yana sa mutane su ci gaba da kallo." },
      { objective: "O1", q: "Me yasa za ku rubuta tsari kafin ɗauka?", options: ["Za ku san hotunan da kuke buƙata", "Dole ne", "Don ɓata lokaci", "Yana tsawaita bidiyo"], answer: 0, why: "Tsarawa yana adana lokaci kuma yana kawo bidiyo mafi kyau." },
      { objective: "O1", q: "AI zai iya taimakon tsarinku ta hanyar:", options: ["Ɗaukar bidiyo a madadinku", "Gudanar da asusunku", "Ba da ra'ayoyin jan hankali", "Zaɓar wasanku"], answer: 2, why: "Fito da ra'ayoyi yana ɗaya daga cikin ƙarfin AI." },
      { objective: "O2", q: "Kafin ɗauka, ya kamata ku:", options: ["Kashe fitilu", "Goge lens ɗinku", "Girgiza wayar", "Rufe makirufo"], answer: 1, why: "Lens mai tsabta yana ba da hoto mai sarari." },
      { objective: "O2", q: "Don manhajojin gajerun bidiyo, ku ɗauka:", options: ["Juye", "A kwance kawai", "Da lens a rufe", "A tsaye"], answer: 3, why: "Manhajojin gajerun bidiyo suna amfani da bidiyo a tsaye." },
      { objective: "O2", q: "Slow motion yana da kyau wajen:", options: ["Ɓoye kurakurai", "Adana wurin ajiya", "Nuna dabara", "Naɗar sauti"], answer: 2, why: "Yana nuna cikakkun bayanai a cikin motsi mai sauri." },
      { objective: "O2", q: "Kuna magana a bidiyo a filin wasa mai hayaniya? Ku gwada:", options: ["Yin ihu", "Ƙara ƙarar waƙa", "Ɗauka daga nesa", "Matsowa kusa ko ƙara voice-over"], answer: 3, why: "Sauti mai sarari yana buƙatar kusanci ko voice-over." },
      { objective: "O3", q: "Hoto na kusa (close-up) yana nuna:", options: ["Cikakkun bayanai kamar hannaye ko ƙafafu", "Dukkan filin wasa", "Sararin sama", "Babu komai"], answer: 0, why: "Hotuna na kusa suna nuna cikakkun bayanai." },
      { objective: "O3", q: "Wanne ne sau da yawa yake haɗa masu bibiya?", options: ["Sakamakon ƙarya", "Lokutan bayan fage na gaske", "Bidiyon sata", "Dogayen bidiyo marasa sauti"], answer: 1, why: "Lokuta na gaske suna gina amincewa." },
      { objective: "O4", q: "Yanke (trim) yana nufin:", options: ["Ƙara bidiyo", "Canza launi", "Cire sassan bidiyo da ba ku buƙata", "Wallafawa sau biyu"], answer: 2, why: "Gyara mai matsewa yana riƙe hankali." },
      { objective: "O4", q: "Wanne ne zaɓin gyaran bidiyo kyauta?", options: ["CapCut ko editan da ke cikin wayarku", "Manhajar studio mai tsada kawai", "Firinta", "Na'urar lissafi (calculator)"], answer: 0, why: "Kayan aiki kyauta sun isa don farawa." },
      { objective: "O4", q: "Amfani da shahararriyar waƙa daga wajen manhajar zai iya:", options: ["Koyaushe ya sa ta yaɗu sosai", "Biya ku kuɗi", "Babu abin da zai faru", "Sa a kashe sautin bidiyonku ko a cire shi"], answer: 3, why: "Haƙƙin waƙa yana da muhimmanci." },
      { objective: "O4", q: "Rubutun kan allo ya kamata ya kasance:", options: ["Ƙarami sosai", "Babba yadda za a iya karanta shi a waya", "A ɓoye", "Da salon rubutu goma"], answer: 1, why: "Yawancin masu kallo suna amfani da waya." },
      { objective: "O5", q: "Bayanin rubutu mai kyau sau da yawa yana ƙarewa da:", options: ["Hashtag hamsin", "Tambaya don samun sharhi", "Lambar wayarku", "Babu komai"], answer: 1, why: "Tambayoyi suna gayyatar mutane su shiga." },
      { objective: "O5", q: "Hashtag nawa ya kamata ku yi amfani da su?", options: ["Hamsin barkatai", "Babu ko ɗaya har abada", "Waɗanda ke tashe marasa dangantaka kawai", "'Yan kaɗan masu dangantaka"], answer: 3, why: "Hashtag masu dangantaka suna taimakon mutanen da suka dace su same ku." },
      { objective: "O5", q: "Ya kamata ku ambaci (tag) mutane a wallafa:", options: ["Sai idan sun yarda kawai", "Koyaushe, ba tare da tambaya ba", "Barkatai", "Ba har abada"], answer: 0, why: "Ku girmama sirrin wasu." },
      { objective: "O5", q: "Wace ce bayyanawar kamfani mai sarari?", options: ["\"#sp\" a ƙarshe", "\"collab?\"", "\"Ad\" ko \"Na gode wa [kamfani] da kayan kyauta\"", "Babu komai"], answer: 2, why: "FTC ta ce ku yi amfani da kalmomi masu sarari da sauƙi." },
      { objective: "O6", q: "Ginshiƙin Status a kalandar abun ciki yana bin diddigin:", options: ["Yanayin zuciyarku", "Yanayin sararin sama", "Makinku na makaranta", "Ra'ayi, an ɗauka, an gyara, an wallafa"], answer: 3, why: "Status yana nuna inda kowace wallafa take." },
      { objective: "O6", q: "A makon jarabawar ƙarshe, babu laifi ku:", options: ["Ƙi zuwa jarabawa don wallafawa", "Rage wallafawa", "Sayi abun ciki", "Wallafa sau 20 a rana"], answer: 1, why: "Makaranta da atisaye su ne farko." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 8, 10, 12, 14, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tsari mai sassa uku", objective: "O1", notYet: "Babu tsari a rubuce, ko jan hankali ko ƙarshe ya ɓace.", meets: "Jan hankali, amfani da ƙarshe a rubuce, an yi kafin ɗauka.", exceeds: "An kwatanta jan hankali da yawa, kuma tsarin ya jera hotuna na nesa, na tsakiya da na kusa." },
      { name: "Ɗaukar bidiyo", objective: "O2", notYet: "Bidiyo masu duhu, masu girgiza ko masu hayaniya, ko an ɗauki mutane ba tare da izini ba.", meets: "Bidiyo a tsaye, marasa girgiza, masu haske mai kyau, aikin a tsakiya, da izinin wasu.", exceeds: "Ya yi amfani da slow motion ko voice-over inda suke taimakawa, da ƙarin daƙiƙoƙi a kowane gefe don gyara." },
      { name: "Gyara", objective: "O4", notYet: "An bar lokacin banza, babu rubutun ƙasa, ko waƙa mara lasisi.", meets: "Bidiyo na daƙiƙa 30 zuwa 60 da aka yanke bidiyonsa, rubutun kan allo da ake iya karantawa, rubutun ƙasa da aka duba, da waƙa mai lasisi.", exceeds: "Canjin hotuna yana tafiya daidai da labarin matsala, aiki, sakamako mai sarari." },
      { name: "Bayanin rubutu da bayyanawa", objective: "O5", notYet: "An kwafi rubutun AI kai tsaye, hashtag da yawa, ko babu bayyanawar kamfani.", meets: "Bayanin rubutu da muryar ɗan wasan, da 'yan hashtag masu dangantaka, kuma duk wata bayyanawa tana wurin da ya dace.", exceeds: "Yana ƙarewa da tambayar da ke jawo sharhi, kuma an wallafa shi lokacin da masu bibiya suke a intanet." },
      { name: "Kalanda ta mako biyu", objective: "O6", notYet: "Ƙarin ra'ayoyi ƙasa da shida, ko wasu ginshiƙai sun ɓace.", meets: "Ƙarin ra'ayoyi shida a makonni biyu da Date, Pillar, Idea, Format da Status, an tsara su bisa atisaye da makaranta.", exceeds: "An haɗa ɗaukar bidiyo a zama ɗaya, kuma an ware makonni masu aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka wallafa bidiyonsu kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka wallafa bisa kalandarsu aƙalla makonni biyu cikin makonni huɗu masu zuwa (binciken biyo baya)",
      "Masu koyo da suka ce bidiyon da suka tsara sun sami ƙarin kallo, ajiyewa ko sharhi fiye da na baya",
      "Masu koyo da suka ce sun sami damar ɗaukar su zuwa ƙungiya, ta kamfani ko ta al'umma daga abun cikinsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai kyamara, mai caji kuma da sarari a wurin ajiya",
      "Manhajar gyaran bidiyo kyauta (CapCut ko editan da ke cikin wayar)",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Google Sheets ko manhajar rubutu don kalandar",
      "Kusan minti 60 na darussa, da kusan minti 60 don ɗauka da gyara"
    ],
    facilitatorNotes: [
      "Ku raba dokokin ɗaukar bidiyo na ƙungiyarku, kuma ku tabbatar 'yan wasa suna neman izini kafin ɗaukar wasu, musamman ƙananan yara.",
      "Ku haɗa 'yan wasa biyu-biyu don su ɗauki juna da haske da tsarin hoto masu kyau.",
      "Ku nuna inda ake samun waƙa mai lasisi a cikin manhajojin da ƙungiyar ke amfani da su.",
      "Ku duba kowace wallafa da kamfani ya ɗauki nauyi ko ya ba da kyauta don bayyanawa daidai kafin a wallafa ta, kuma ku tura tambayoyin NIL zuwa ofishin bin ƙa'idoji (compliance).",
      "Ku tunatar da 'yan wasa cewa makaranta da atisaye su ne farko; ku tsara abun ciki bisa jarabawa da gasa."
    ]
  }
};
