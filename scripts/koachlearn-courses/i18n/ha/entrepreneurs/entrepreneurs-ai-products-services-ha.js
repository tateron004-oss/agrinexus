"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-products-services.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-products-services-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-products-services",
  category: "Entrepreneurs",
  name: "Gina Kayayyaki da Hidimomi Masu Amfani da AI",
  skills: "Gano matsalar da ta cancanci a warware, Tsara hidima mai taimakon AI, Rubuta prompt na umarni da za a sake amfani da shi, Gwaji da abokan ciniki na gaske, Saka farashi da bayani da gaskiya",
  outcome: "tsara ƙaramin kaya ko hidima mai taimakon AI don wata matsala ta gaske ta abokin ciniki, gina sigarta mai sauƙi mai aiki da kayan AI kyauta da prompt na umarni da za a sake amfani da shi, gwada ta da mutane uku, sannan ku yi bayaninta ku saka mata farashi da gaskiya.",
  about: [
    "Sababbin kasuwanci da yawa yanzu suna amfani da AI don ba da hidima da sauri ko da araha: taimakon rubuta CV (takardar bayanin aiki), shirye-shiryen kafofin sada zumunta (social media) don shagunan unguwa, fassarar jerin abinci (menu), tsara littattafan lissafi, tsarin abinci, tsarin darussa da sauransu. Wannan kwas ɗin yana nuna muku yadda ake gina ɗaya ta hanya madaidaiciya.",
    "Za ku fara daga wata matsala ta gaske ta abokin ciniki, ku tsara inda AI zai taimaka da inda mutum zai duba, ku gina siga mai sauƙi da mataimakin AI kyauta da prompt na umarni da za a sake amfani da shi, ku gwada ta da mutane na gaske, sannan ku saka mata farashi ku yi bayaninta ba tare da yin alƙawarin da ya wuce gona da iri ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ba a buƙatar rubuta code (shirye-shiryen kwamfuta)."
  ],
  finalTask: "Ku shirya takardar bayanin kaya mai shafi ɗaya don hidimarku mai taimakon AI: matsalar abokin ciniki, abin da abokin ciniki zai samu, matakai (ku nuna waɗanda AI ke yi da waɗanda mutum ke dubawa), prompt ɗinku na umarni, sakamakon gwaji da mutane uku, farashinku da yadda kuka lissafa shi, da bayani na gaskiya ba tare da wani iƙirari da ba za ku iya tabbatarwa ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Sababbin masu ƙananan kasuwanci da tsofaffi waɗanda ke son ba da hidima da ke amfani da AI don isarwa da sauri ko da araha, kamar taimakon CV, shirye-shiryen social media, fassarar menu ko tsarin darussa.",
    startingPoint: "Suna amfani da mataimakin AI don rubuce-rubucensu. Yawancinsu ba su taɓa tsara hidima da ke kan AI ba, ko rubuta prompt na umarni da za a sake amfani da shi, ko gwaji da abokan ciniki na gaske, ko saka farashi ga aikin da AI ya taimaka.",
    gap: "Hidimomin AI da yawa suna farawa daga kayan aikin maimakon matsala ta gaske, suna tsallake dubawar mutum, ana saka musu farashi ba tare da lissafa lokacin dubawa ba, kuma suna yin alƙawarin da ya wuce abin da AI ke yi. Masu kasuwanci suna buƙatar gina ƙaramar hidima da aka gwada kuma aka yi bayaninta da gaskiya, don abokan ciniki su biya, su sami sakamako mai kyau, kuma su amince da ita.",
    constraints: [
      "Ba a buƙatar rubuta code; kalmomi masu sauƙi a ko'ina",
      "Na'urori: kwamfuta mai mataimakin AI kyauta da spreadsheet (takardar lissafi kamar Excel)",
      "Lokaci: kusan minti biyar a kowane darasi, da gwaji da mutane na gaske",
      "Iƙirarin kaya dole ya zama gaskiya kuma mai shaida (FTC); tambayoyin haraji suna zuwa majiyoyin hukuma ko akanta (accountant)",
      "Bayanan sirri na masu gwaji da abokan ciniki suna nesa da AI a duk inda zai yiwu"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI for Entrepreneurs\" (Gabatarwa ga AI don 'Yan Kasuwa), ko amfani da mataimakin AI akai-akai don rubuce-rubucen kasuwanci."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku matsaloli biyar na abokan ciniki da za ku iya warwarewa", action: "zaɓar matsala ɗaya ta gaske, mai yawan faruwa kuma mai ciwo don hidima mai taimakon AI", standard: "bayan kun tambayi aƙalla mutum ɗaya na gaske yadda yake magance ta a yau" },
    { id: "O2", condition: "Idan kuna da matsalar da kuka zaɓa", action: "tsara hidimar a matsayin matakai masu lamba, kowanne da alamar AI, mutum ko kayan aiki, tare da abubuwan da ake shigarwa da abin da za a kawo", standard: "da dubawar mutum kafin a kawo komai" },
    { id: "O3", condition: "Ta amfani da mataimakin AI kyauta", action: "rubuta prompt na umarni da za a sake amfani da shi mai matsayi, dokoki, tsarin amsa da gurbi", standard: "wanda ke ba da sakamako iri ɗaya ga abokan ciniki na wasa guda biyu" },
    { id: "O4", condition: "Da mutane na gaske har uku", action: "gudanar da hidimarku, auna lokacin kowane mataki, da rubuta ra'ayoyinsu da kalmominsu", standard: "kuna rubuta aƙalla canji ɗaya kuma kuna sake gwadawa" },
    { id: "O5", condition: "Idan kuna da kuɗaɗen da kuke kashewa da ra'ayoyin masu gwaji", action: "lissafa farashin kunshi a spreadsheet", standard: "wanda ke biyan duk kuɗaɗe, har da lokacin dubawa, kuma ya bar riba" },
    { id: "O6", condition: "Don hidimarku da aka kammala", action: "rubuta bayanin kaya da ke faɗin gaskiya game da abin da AI ke yi da abin da mutum ke dubawa", standard: "ba tare da wani iƙirari da ba za ku iya tabbatarwa ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara kayan",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fara daga matsala, ba daga AI ba",
          minutes: 5,
          goal: "Zaɓi matsala ta gaske ta abokin ciniki da hidima mai taimakon AI za ta iya warwarewa.",
          text: [
            "Kuskuren da aka fi yi shi ne farawa da \"Ina son sayar da wani abu da AI\". Maimakon haka, ku fara da matsalar da mutane ke riga suna biya don a gyara, ko suke yawan kokawa a kai: \"Ƙananan gidajen abinci ba su da lokacin saka rubutu a social media.\" \"Masu neman aiki ba su san yadda za su bayyana ƙwarewarsu ba.\"",
            "Matsaloli masu kyau suna yawan faruwa, suna da ciwo, kuma a fili suke. Ku tambaya: Wa ke da wannan matsalar? Yaya suke magance ta yanzu? Nawa take ci musu a kuɗi ko lokaci? Za su biya ni don in warware ta da sauri ko fiye da kyau?",
            "AI zai iya taimaka muku tunanin ra'ayoyi da jera su, amma ku yi magana da aƙalla mutane uku na gaske da ke da matsalar kafin ku gina komai."
          ],
          steps: ["Ku jera matsaloli biyar da kuka ga mutane ko kasuwanci suna fama da su.", "Ku nemi AI ya taimaka ku auna kowacce: yawan faruwa, yawan ciwo, yadda ake magance ta yanzu.", "Ku zaɓi ta farko.", "Ku yi magana da mutane uku da ke da ita ku tambaye su yadda suke magance ta a yau."],
          words: [["Matsalar da ta cancanci a warware", "matsala mai yawan faruwa, mai ciwo, a fili, wadda mutane ke riga suna kashe kuɗi ko lokaci a kanta."]],
          slides: [
            { title: "Ku fara da matsala", bullets: ["Ba \"Ina son sayar da AI\" ba", "Matsalar da mutane ke biya a gyara ko suke kokawa a kai"] },
            { title: "Matsaloli masu kyau suna", bullets: ["Yawan faruwa", "Da ciwo", "A fili"] },
            { title: "Ku yi tambayoyi huɗu", bullets: ["Wa ke da ita?", "Yaya suke magance ta yanzu?", "Nawa take ci musu?", "Za su biya ku?"] },
            { title: "Ku yi magana da mutane na gaske", bullets: ["Aƙalla uku, kafin ku gina"] }
          ],
          tryIt: "Ku jera matsaloli biyar, ku yi amfani da AI don taimaka ku auna su, ku zaɓi ɗaya, sannan ku tambayi aƙalla mutum ɗaya na gaske da ke da wannan matsalar yadda yake magance ta a yau.",
          youCanNow: "zaɓar matsala ta gaske ta abokin ciniki don gina hidima mai taimakon AI a kanta.",
          quickCheck: [
            { objective: "O1", q: "Me ke sa matsalar abokin ciniki ta cancanci a gina hidima a kanta?", options: ["Tana yawan faruwa, tana da ciwo, kuma a fili take", "Abu ne da AI ya shahara da shi", "Ku kaɗai ke da ita", "Tana faruwa sau ɗaya a shekara goma"], answer: 0, why: "Matsaloli masu yawan faruwa, masu ciwo kuma a fili su ne mutane ke biya a gyara." },
            { objective: "O1", q: "Kuna da kyakkyawan ra'ayi amma ba ku yi magana da kowa da ke da matsalar ba. Me za ku yi a gaba?", options: ["Ku fara gini nan take", "Ku tambayi mutane na gaske yadda suke magance ta a yau", "Ku saka farashi", "Ku sayi tallace-tallace"], answer: 1, why: "Yin magana da mutane na gaske da farko yana nuna muku ko matsalar gaskiya ce." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsara inda AI ke taimakawa da inda kuke dubawa",
          minutes: 5,
          goal: "Tsara hidimarku a matsayin matakai, kuna nuna waɗanda AI ke yi da waɗanda mutum ke yi.",
          text: [
            "Hidima mai taimakon AI jerin matakai ne. Misali, shirin social media don gidan abinci: 1) karɓar hotuna da abincin musamman na mako daga mai gidan (mutum), 2) rubuta daftarin bayanan hoto (AI), 3) duba gaskiya, farashi da salon magana (mutum), 4) yin zane-zane a Canva (da taimakon AI), 5) aika don amincewa (mutum), 6) tsara lokacin saka rubutu (kayan aiki).",
            "Ku saka mutum a kowane mataki inda kuskure zai iya cutar da abokin ciniki: gaskiyar bayanai, farashi, lafiya, al'amuran shari'a ko kuɗi, da duk abin da za a wallafa da sunan abokin ciniki. Wannan \"human in the loop\" (mutum a cikin aikin) shi ne abin da abokan ciniki ke biya: sauri daga AI, hikima daga gare ku.",
            "Ku rubuta abin da ke shigowa a farko (abin da kuke buƙata daga abokin ciniki) da abin da ke fitowa a ƙarshe (ainihin abin da zai samu)."
          ],
          steps: ["Ku rubuta abin da kuke buƙata daga abokin ciniki a farko.", "Ku jera kowane mataki na isar da hidimar.", "Ku yi wa kowane mataki alama: AI, mutum, ko kayan aiki.", "Ku ƙara dubawar mutum kafin komai ya je wa abokin ciniki.", "Ku rubuta ainihin abin da abokin ciniki zai samu a ƙarshe."],
          words: [["Human in the loop (mutum a cikin aikin)", "mutum yana dubawa ko amincewa da aikin AI kafin a yi amfani da shi."], ["Abin da za a kawo (deliverable)", "abin da aka kammala wanda abokin ciniki ke karɓa."]],
          slides: [
            { title: "Hidima jerin matakai ce", bullets: ["Abubuwan da ake shigarwa daga abokin ciniki", "Matakan AI, matakan mutum, matakan kayan aiki", "Abin da za a kawo a ƙarshe"] },
            { title: "Misali: rubutun gidan abinci", bullets: ["Mai gidan yana aika hotuna da abincin musamman", "AI yana rubuta daftarin bayani; ku kuna duba gaskiya", "Zane-zanen Canva; mai gidan yana amincewa"] },
            { title: "Human in the loop", bullets: ["Ku duba gaskiya, farashi, lafiya, shari'a, kuɗi", "Ku duba duk abin da ke da sunan abokin ciniki", "AI don sauri, ku don hikima"] }
          ],
          tryIt: "Ku tsara hidimarku a matsayin matakai masu lamba. Ku yi wa kowanne alamar AI, mutum ko kayan aiki, kuma ku ƙara dubawar mutum kafin a kawo. Ku rubuta abubuwan da ake shigarwa da abin da za a kawo.",
          youCanNow: "tsara hidima mai taimakon AI mai dubawar mutum a fili.",
          quickCheck: [
            { objective: "O2", q: "Mene ne abin da za a kawo (deliverable)?", options: ["Kayan AI da kuke amfani da shi", "Farashin", "Abin da aka kammala wanda abokin ciniki ke karɓa", "Prompt ɗinku na umarni"], answer: 2, why: "Abin da za a kawo shi ne abin da abokin ciniki ke samu a ƙarshe." },
            { objective: "O2", q: "Tsarin hidimarku yana aika farashin menu da AI ya rubuta kai tsaye ga abokin ciniki. Me za ku ƙara?", options: ["Babu komai", "AI na biyu don duba na farko", "Kayan aiki mafi sauri", "Dubawar mutum kafin a kawo"], answer: 3, why: "Mutum yana duba gaskiya da farashi kafin komai ya fita." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta prompt na umarni da za a sake amfani da shi",
          minutes: 6,
          goal: "Rubuta prompt na umarni ɗaya da za ku sake amfani da shi ga kowane abokin ciniki.",
          text: [
            "Don ba da inganci iri ɗaya kowane lokaci, ku rubuta prompt na umarni ɗaya mai cikakken bayani ku sake amfani da shi. Ya kamata ya ƙunshi: matsayi (\"Kana taimaka mini rubuta rubutun social media don ƙananan gidajen abinci\"), dokoki (salon magana, tsayi, abin da ba za a taɓa yi ba), tsarin amsar, da gurbi don bayanan kowane abokin ciniki.",
            "Misalan dokoki: \"Kada ka taɓa ƙirƙirar farashi ko abincin da ba a menu ba. Ka yi amfani da abincin musamman da na ba ka kawai. Ka yi wa duk abin da ba ka tabbata da shi ba alamar [CHECK].\" Dokoki irin waɗannan suna sauƙaƙa gano kurakuran AI.",
            "Mataimaka da yawa suna barin ku ajiye umarni na musamman ko gina mataimaki da aka ajiye da umarninku; ku duba saitunan kayan aikin ko shafukan taimakonsa. Idan naku ba shi da wannan, ku ajiye prompt ɗin a cikin takarda ku liƙa shi kowane lokaci."
          ],
          steps: ["Ku rubuta matsayin.", "Ku rubuta dokokin, har da abin da AI ba zai taɓa yi ba.", "Ku bayyana tsarin amsar.", "Ku ƙara [gurbi] don bayanan kowane abokin ciniki.", "Ku gwada shi da abokan ciniki na wasa guda biyu ku ƙarfafa dokokin."],
          words: [["Prompt na umarni", "prompt mai cikakken bayani da za a sake amfani da shi, wanda ke saita matsayin AI, dokokinsa da tsarin amsarsa."], ["Gurbi (slot)", "wurin da aka yi wa alama a cikin prompt inda kuke liƙa bayanan kowane abokin ciniki."]],
          slides: [
            { title: "Prompt ɗaya, inganci iri ɗaya", bullets: ["Matsayi", "Dokoki", "Tsarin amsa", "[Gurbi] don bayanan abokin ciniki"] },
            { title: "Dokokin da ke kama kurakurai", bullets: ["\"Kada ka taɓa ƙirƙirar farashi ko abincin da ba a menu ba.\"", "\"Ka yi amfani da bayanan da na ba ka kawai.\"", "\"Ka yi wa duk abin da ba ka tabbata ba alamar [CHECK].\""] },
            { title: "Ku ajiye shi", bullets: ["Wasu mataimaka suna ajiye umarni na musamman", "Ko ku ajiye shi a takarda ku liƙa shi"] }
          ],
          tryIt: "Ku rubuta prompt ɗinku na umarni mai matsayi, dokoki, tsari da gurbi. Ku gudanar da shi da bayanan abokan ciniki na wasa guda biyu, ku inganta dokokin inda amsar ta yi kuskure.",
          youCanNow: "rubuta prompt na umarni da za a sake amfani da shi wanda ke ba da sakamako iri ɗaya ga kowane abokin ciniki.",
          quickCheck: [
            { objective: "O3", q: "Mene ne gurbi a cikin prompt na umarni?", options: ["Wuri mara komai da kuke cikawa da bayanan kowane abokin ciniki", "Doka game da salon magana", "Tsarin biya", "Sunan AI"], answer: 0, why: "Gurbi yana barin ku sake amfani da prompt ɗaya ga kowane abokin ciniki." },
            { objective: "O3", q: "Prompt ɗinku yana ci gaba da ƙirƙirar lokutan buɗe kasuwanci. Me za ku canja?", options: ["Babu komai; ku gyara shi da hannu kowane lokaci", "Ku ƙara doka: kada ka taɓa ƙirƙirar lokuta; ka yi wa abin da ba a sani ba alamar [CHECK]", "Ku yi amfani da matsayi mafi tsawo", "Ku cire sashen tsari"], answer: 1, why: "Dokoki masu sarari suna hana kurakuran AI da ake maimaitawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara kayan",
        questions: [
          { objective: "O1", q: "Mene ne wurin farawa mafi kyau don hidima mai amfani da AI?", options: ["Sabon kayan AI", "Matsala ta gaske da mutane ke riga suna biya a gyara", "Suna mai daɗi", "Tambari (logo)"], answer: 1, why: "Kayayyakin da ke warware matsaloli na gaske masu ciwo suna sayuwa." },
          { objective: "O1", q: "Mutane nawa na gaske ya kamata ku yi magana da su kafin ku gina?", options: ["AI kawai", "Babu", "Ku kaɗai", "Aƙalla uku"], answer: 3, why: "Tattaunawa ta gaske tana tabbatar da cewa matsalar gaskiya ce." },
          { objective: "O2", q: "A ina ya kamata mutum ya duba aikin AI?", options: ["Kafin duk abin da ke da gaskiyar bayanai, farashi ko sunan abokin ciniki ya fita", "Ba ko'ina", "A farko-farko kawai", "Sai idan abokin ciniki ya yi korafi"], answer: 0, why: "Dubawar mutum tana kama kurakurai kafin su cutar da abokin ciniki." },
          { objective: "O3", q: "Wace doka ce ta dace a prompt na umarni don rubutun gidan abinci?", options: ["\"Ka yi amfani da kowane farashi da kake so.\"", "\"Ka ƙirƙiri abincin musamman idan ya zama dole.\"", "\"Kada ka taɓa ƙirƙirar farashi ko abincin da ba a menu ba.\"", "\"Ka tsallake bayanan mai gidan.\""], answer: 2, why: "Dokokin da ke hana ƙirƙirar bayanai suna rage kurakurai." },
          { objective: "O2", q: "Mene ne abin da za a kawo (deliverable)?", options: ["Tsarin AI", "Motar kai kaya", "Abin da aka kammala wanda abokin ciniki ke karɓa", "Takardar haraji"], answer: 2, why: "Shi ne ainihin abin da abokin ciniki ke samu a ƙarshe." }
        ]
      }
    },
    {
      name: "Babi na 2: Gwaji, farashi da ƙaddamarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gwaji da mutane uku na gaske",
          minutes: 5,
          goal: "Gudanar da hidimarku ga mutane uku ku koyi abin da za ku gyara.",
          text: [
            "Kafin ku sayar ga mutane da yawa, ku gudanar da dukan hidimar ga mutane uku na gaske, kyauta ko a farashin gwaji. Ku lura da: inda AI ya yi kuskure, inda kuka fi kashe lokaci, da abin da abokin ciniki ya so ko bai fahimta ba.",
            "Ku yi wa kowane mai gwaji tambayoyi uku: \"Me ya fi amfani?\" \"Me ya ruɗa ku ko ya yi kuskure?\" \"Za ku biya kuɗi don wannan, kuma nawa?\" Ku rubuta ainihin kalmominsu.",
            "Ku auna lokacin kowane mataki. Idan dubawar mutum ta fi ɗaukar lokaci fiye da yin aikin da hannu, ku canja prompt na umarni ko matakan. Ku gyara manyan matsalolin, sannan ku sake gwadawa."
          ],
          steps: ["Ku nemo mutane uku da ke da matsalar.", "Ku gudanar da dukan hidimar ga kowannensu.", "Ku auna lokacin kowane mataki ku rubuta kowane kuskuren AI.", "Ku yi tambayoyi ukun ku rubuta amsoshinsu.", "Ku gyara manyan matsalolin ku sabunta prompt ɗinku."],
          words: [["Mai gwaji (tester)", "mutum na gaske da ke gwada kayanku da wuri kuma ya ba da ra'ayi na gaskiya."], ["Ra'ayi (feedback)", "abin da mutane ke faɗa muku game da abin da ya yi aiki da wanda bai yi ba."]],
          slides: [
            { title: "Ku gwada kafin ku sayar", bullets: ["Mutane uku na gaske", "Kyauta ko farashin gwaji", "Ku gudanar da dukan hidimar"] },
            { title: "Ku lura da", bullets: ["Kurakuran AI", "Matakan da suka fi ɗaukar lokaci", "Abin da abokan ciniki suka so ko ba su fahimta ba"] },
            { title: "Ku yi tambayoyi uku", bullets: ["Me ya fi amfani?", "Me ya ruɗa ku ko ya yi kuskure?", "Za ku biya, kuma nawa?"] }
          ],
          tryIt: "Ku gudanar da hidimarku ga aƙalla mutum ɗaya na gaske (uku idan za ku iya). Ku auna lokacin kowane mataki, ku rubuta kurakuran AI, ku yi tambayoyi ukun, sannan ku rubuta canji ɗaya da za ku yi.",
          youCanNow: "gwada hidima mai taimakon AI da mutane na gaske da inganta ta daga ra'ayoyinsu.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata ku rubuta idan masu gwaji suka ba da ra'ayi?", options: ["Kalaman yabo kawai", "Taƙaitawarku", "Ainihin kalmominsu", "Babu komai; ku tuna kawai"], answer: 2, why: "Ainihin kalmomi suna nuna abin da abokan ciniki ke daraja da abin da ke damun su da gaske." },
            { objective: "O4", q: "Masu gwaji biyu sun ce sakamakon ya ɗauki lokaci mai yawa. Me za ku yi?", options: ["Ku yi watsi da su", "Ku ƙara farashi", "Ku dakatar da hidimar", "Ku nemo matakin da ke jinkiri, ku canja shi ku sake gwadawa"], answer: 3, why: "Gwaji domin gano matsaloli ne da gyara su, sannan a sake gwadawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saka farashi ga hidimarku mai taimakon AI",
          minutes: 5,
          goal: "Saka farashin da ke biyan kuɗaɗenku da lokacinku kuma ya dace da abin da abokan ciniki za su biya.",
          text: [
            "Ku haɗa kuɗaɗen da kuke kashewa a kan kowane abokin ciniki: lokacinku (har da dubawar aikin AI), kuɗin biyan kayan aiki na wata-wata da aka raba tsakanin abokan ciniki, da sauran kuɗaɗe. Sannan ku kwatanta da abin da abokan ciniki ke biya yanzu don wasu hanyoyin magance matsalar, da abin da masu gwaji suka ce za su biya.",
            "Kada ku saka farashi bisa ga saurin da AI ke yin aikin kawai. Abokan ciniki suna biyan sakamakon da hikimarku, ba mintunanku ba. Kunshi (\"rubutu 12 a wata\") sau da yawa ya fi sauƙin sayarwa fiye da kuɗi a kowace awa.",
            "Ku bar AI ya taimaka da lissafin da ra'ayoyin kunshi, amma ku duba kowace lamba da kanku a spreadsheet. Don haraji da rajistar kasuwanci, ku duba majiyoyin hukuma kamar irs.gov da ofishin kasuwanci na jiharku, ko akanta."
          ],
          steps: ["Ku jera kuɗaɗenku a kan kowane abokin ciniki, har da lokacin dubawa.", "Ku nemo abin da abokan ciniki ke biya yanzu don wasu hanyoyi.", "Ku rubuta abin da masu gwaji suka ce za su biya.", "Ku zaɓi kunshi da farashi, ku duba lissafin da kanku.", "Ku tabbata farashin yana biyan kuɗaɗenku kuma ya bar wani abu."],
          words: [["Kunshi (package)", "ƙayyadadden tarin aiki a ƙayyadadden farashi, kamar rubutu 12 a wata."], ["Riba", "abin da ya rage bayan kun biya duk kuɗaɗenku."]],
          slides: [
            { title: "Ku haɗa kuɗaɗenku", bullets: ["Lokacinku, har da dubawar aikin AI", "Kuɗin kayan aiki na wata-wata da aka raba tsakanin abokan ciniki", "Sauran kuɗaɗe"] },
            { title: "Ku duba kasuwa", bullets: ["Abin da abokan ciniki ke biya don wasu hanyoyi", "Abin da masu gwaji suka ce za su biya"] },
            { title: "Ku saka farashi ga sakamako", bullets: ["Abokan ciniki suna biyan sakamako da hikima", "Kunshi ya fi sauƙin sayarwa", "Ku duba lissafin da kanku"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center (cibiyar haraji ta masu aikin kansu)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Ku lissafa kuɗinku a kan kowane abokin ciniki a spreadsheet, ku kwatanta da abin da masu gwaji suka faɗa, sannan ku saka farashin kunshi da ke barin riba.",
          youCanNow: "saka farashi ga hidima mai taimakon AI wanda ke biyan kuɗaɗenku kuma ya dace da kasuwa.",
          quickCheck: [
            { objective: "O5", q: "Mece ce riba?", options: ["Abin da ya rage bayan an biya duk kuɗaɗe", "Jimillar abin da abokan ciniki ke biya", "Kuɗin kayan AI", "Lokacin da kuka tanada"], answer: 0, why: "Riba ita ce kuɗin da ya rage bayan an biya kowane kuɗi." },
            { objective: "O5", q: "Farashinku yana biyan kayan AI amma ba awar da kuke kashewa wajen dubawa ba. Me za ku yi?", options: ["Ku bar farashin", "Ku ƙara lokacin dubawa a cikin kuɗaɗe ku sake saka farashi", "Ku daina dubawa", "Ku ƙara wa sababbin abokan ciniki kawai"], answer: 1, why: "Lokacin dubawa kuɗi ne na gaske wanda dole farashi ya biya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yin bayaninta da gaskiya",
          minutes: 5,
          goal: "Rubuta bayanin kaya da ke faɗin gaskiya game da abin da AI ke yi.",
          text: [
            "Abokan ciniki sun fi amincewa da ku idan kun bayyana yadda hidimar ke aiki a fili: \"Muna amfani da AI don rubuta daftari, kuma mutum yana duba kowane rubutu kafin ya fita.\" Kada ku yi kamar AI yana yin fiye da abin da yake yi, ko kamar mutum ne ke yin aikin alhali AI ne ke yi.",
            "FTC (hukumar kare masu saye ta Amurka) tana aiwatar da dokokin gaskiya a talla a kan iƙirarin AI masu yaudara. A 2026 ta kammala umarni a kan kamfanonin da suka yi iƙirarin cewa hidimar tallan su ta AI tana sauraron hirarrakin mutane ta na'urori masu wayo alhali ba haka ba ne. Iƙirari game da abin da AI ɗinku ke yi, yadda yake daidai, ko sakamakon da abokan ciniki za su samu dole ya zama gaskiya kuma mai shaida.",
            "Ku guji \"an tabbatar (guaranteed)\", \"daidai 100%\" da \"yana maye gurbin lauya/likita/akanta\". Ku yi magana da lauya idan ba ku tabbata ko an yarda da wani iƙirari ba."
          ],
          steps: ["Ku rubuta abin da abokin ciniki zai samu da kalmomi masu sauƙi.", "Ku faɗi da gaskiya inda ake amfani da AI da inda mutum ke dubawa.", "Ku cire duk iƙirarin da ba za ku iya tabbatarwa da shaida ba.", "Ku sa AI ya duba shi: \"Ka nuna duk wani iƙirari da zai iya yaudara.\"", "Ku tambayi lauya idan ba ku tabbata ba."],
          words: [["Iƙirari mai yaudara", "maganar da ke ba mutane tunanin ƙarya, ko da kowace kalma gaskiya ce a zahiri."], ["Shaida", "gwaje-gwaje, sakamako ko bayanan ajiya da ke tabbatar da iƙirari."]],
          slides: [
            { title: "Ku bayyana yadda take aiki", bullets: ["\"AI yana rubuta daftari, mutum yana duba kowane rubutu\"", "Kada ku zuguguta abin da AI ke yi"] },
            { title: "FTC da iƙirarin AI", bullets: ["Dokokin gaskiya a talla sun shafi AI", "Umarnin 2026 kan iƙirarin tallan AI na ƙarya", "Iƙirari yana buƙatar shaida"] },
            { title: "Ku guji", bullets: ["\"An tabbatar\" ko \"daidai 100%\"", "\"Yana maye gurbin lauya, likita ko akanta\"", "Ba ku tabbata ba? Ku tambayi lauya"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (asalin talla da kasuwanci)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Umarni a kan Cox Media Group da wasu kamfanoni biyu kan iƙirarin tallan AI (2026)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }],
          tryIt: "Aikin ƙarshe: ku rubuta bayanin kayanku na gaskiya, sannan ku haɗa takardar bayanin kaya mai shafi ɗaya: matsala, abin da za a kawo, matakai (AI da mutum), prompt na umarni, sakamakon gwaji, farashi da bayani.",
          youCanNow: "tsara, gwada, saka farashi da yin bayanin kaya ko hidima mai taimakon AI da gaskiya.",
          quickCheck: [
            { objective: "O6", q: "Wane iƙirarin kaya ne na gaskiya?", options: ["\"Daidai 100%, an tabbatar\"", "\"Na atomatik gaba ɗaya, babu buƙatar mutum\" alhali mutum yana duba komai", "\"AI yana rubuta daftari, kuma mutum yana duba kowane abu kafin a kawo\"", "\"Ya fi kowane ƙwararren mutum\""], answer: 2, why: "Yana faɗin gaskiya game da abin da AI da mutane kowanne ke yi." },
            { objective: "O6", q: "Ba ku tabbata ko an yarda da wani iƙirari a shafin sayarwarku ba. Me za ku yi?", options: ["Ku bar shi ku ga abin da zai faru", "Ku ƙara girmansa", "Ku nemi AI ya amince da shi", "Ku cire shi ko ku tambayi lauya"], answer: 3, why: "Idan kuna shakka, ku cire shi ko ku nemi shawarar shari'a." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gwaji, farashi da ƙaddamarwa",
        questions: [
          { objective: "O4", q: "Wace tambaya ya kamata ku yi wa masu gwaji?", options: ["\"Za ku biya kuɗi don wannan, kuma nawa?\"", "\"Mece ce kalmar sirrin bankinku?\"", "\"Za ku rubuta mini yabo don a rage muku farashi?\"", "\"Kuna son AI?\""], answer: 0, why: "Tana nuna muku ko akwai kasuwa ta gaske da farashi." },
          { objective: "O4", q: "Dubawar mutum ta fi ɗaukar lokaci fiye da yin aikin da hannu. Me ya kamata ku yi?", options: ["Ku daina gwaji", "Ku cire duk dubawa", "Ku rage farashi", "Ku canja prompt na umarni ko matakan"], answer: 3, why: "Ku inganta tsarin don AI ya tanadi lokaci da gaske." },
          { objective: "O5", q: "Wajen saka farashi, wane kuɗi ne mutane ke yawan mantawa?", options: ["Launin tambarin", "Lokacin da aka kashe wajen duba aikin AI", "Kuɗin hayar abokin ciniki", "Ribar kamfanin AI"], answer: 1, why: "Lokacin dubawa aiki ne na gaske kuma dole a saka shi a farashi." },
          { objective: "O6", q: "Wane bayani ne na gaskiya?", options: ["\"AI yana rubuta daftari, kuma mutum yana duba kowane rubutu kafin ya fita.\"", "\"AI daidai 100%, an tabbatar.\"", "\"Yana maye gurbin akantarku.\"", "\"Ma'aikatanmu ne suka yi da hannu\" alhali AI ne ya yi"], answer: 0, why: "Yana faɗin gaskiya game da abin da AI ke yi da abin da mutum ke yi." },
          { objective: "O6", q: "Dokokin FTC kan iƙirarin AI sun ce iƙirari dole ya zama:", options: ["Gajere", "Mai ban sha'awa", "Gaskiya kuma mai shaida", "Wanda kayan AI ya amince da shi"], answer: 2, why: "Gaskiya a talla ta shafi iƙirarin AI ma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Kayayyaki da Hidimomi Masu Amfani da AI",
    questions: [
      { objective: "O1", q: "Kuskuren da aka fi yi wajen gina kayan AI shi ne:", options: ["Yin magana da abokan ciniki", "Farawa da AI maimakon matsalar abokin ciniki", "Gwaji", "Saka farashi"], answer: 1, why: "Ku fara daga matsalar, ba daga kayan aikin ba." },
      { objective: "O1", q: "Matsaloli masu kyau da za a warware su ne:", options: ["Waɗanda babu wanda ke biya a kansu", "Masu wuyar faruwa kuma ba a fili ba", "Naku kawai", "Masu yawan faruwa, masu ciwo kuma a fili"], answer: 3, why: "Irin waɗannan matsaloli ne ke kawo buƙata." },
      { objective: "O1", q: "Tambayar \"Yaya suke magance ta yanzu?\" tana taimaka muku sanin:", options: ["Babu wani abu mai amfani", "Kalmar sirrinsu", "Shekarunsu", "Abin da kuke gogayya da shi da nawa yake ci musu"], answer: 3, why: "Hanyoyin da ake amfani da su yanzu suna nuna darajar taku." },
      { objective: "O2", q: "A misalin gidan abinci, wa ke duba farashi a cikin bayanan hoto?", options: ["Babu kowa", "Mutum", "AI yana duba kansa", "Abokan cinikin abokin cinikin"], answer: 1, why: "Farashi bayanai ne da ke buƙatar dubawar mutum." },
      { objective: "O2", q: "\"Human in the loop\" yana nufin:", options: ["Da'ira a jadawali", "AI yana maye gurbin dukan mutane", "Mutum yana dubawa ko amincewa da aikin AI kafin a yi amfani da shi", "Layin taimakon abokan ciniki"], answer: 2, why: "Wannan ne ma'anarsa." },
      { objective: "O2", q: "Abubuwan da ake shigarwa a tsarin hidimarku su ne:", options: ["Abin da kuke buƙata daga abokin ciniki a farko", "Kayan ƙarshe", "Ribarku", "Kamfanin AI"], answer: 0, why: "Abubuwan da ake shigarwa suna shigowa; abin da za a kawo yana fita." },
      { objective: "O3", q: "Prompt na umarni ya ƙunshi:", options: ["Bayanan bankinku", "Gaisuwa kawai", "Matsayi, dokoki, tsarin amsa da gurbi", "Tambaya ta ba-zata"], answer: 2, why: "Waɗannan sassa suna sa sakamako ya zama iri ɗaya." },
      { objective: "O3", q: "Me yasa za a ƙara \"Ka yi wa duk abin da ba ka tabbata da shi ba alamar [CHECK]\"?", options: ["Yana sauƙaƙa gano kurakuran AI", "Yana tsawaita rubutun", "Doka ce ta buƙace shi", "Yana ɓoye kurakurai"], answer: 0, why: "Alamomi suna nuna muku inda za ku duba." },
      { objective: "O3", q: "Idan kayan AI ɗinku ba zai iya ajiye umarni ba, kuna iya:", options: ["Haƙura", "Ajiye prompt ɗin a takarda ku liƙa shi kowane lokaci", "Sake rubuta shi daga ka daban kowane lokaci", "Sayen kayan aiki biyar"], answer: 1, why: "Takardar da aka ajiye tana sa shi ya zama iri ɗaya." },
      { objective: "O4", q: "Gwaji da mutane uku na gaske yana taimaka muku gano:", options: ["Babu komai", "Kalmomin sirrinsu", "Sababbin tambari", "Kurakuran AI, matakan jinkiri da abin da abokan ciniki ke daraja"], answer: 3, why: "Gwaje-gwaje suna nuna abin da za a gyara kafin a sayar." },
      { objective: "O4", q: "Idan masu gwaji suka ba da ra'ayi, ya kamata ku:", options: ["Rubuta ainihin kalmominsu", "Yi musu jayayya", "Yi watsi da shi", "Neme su su saka yabon ƙarya"], answer: 0, why: "Ainihin kalmomi suna nuna abin da ya fi muhimmanci a gare su da gaske." },
      { objective: "O4", q: "Bayan gyara matsalolin da aka gano a gwaji, ya kamata ku:", options: ["Ninka farashi sau goma", "Kada ku sake canja komai", "Goge prompt ɗin", "Sake gwadawa"], answer: 3, why: "Sake gwadawa yana tabbatar da cewa gyaran ya yi aiki." },
      { objective: "O5", q: "Abokan ciniki galibi suna biyan:", options: ["Kuɗin kayan aikinku na wata-wata", "Mintunan da AI ke tanada muku", "Sakamakon da hikimarku", "Tambarinku"], answer: 2, why: "Ku saka farashi ga sakamako, ba lokaci kawai ba." },
      { objective: "O5", q: "Farashin kunshi shi ne:", options: ["Kuɗin jigilar kaya", "Ƙayyadadden tarin aiki a ƙayyadadden farashi", "Lambar rangwame", "Haraji"], answer: 1, why: "Kunshi yana da sauƙin fahimta ga abokan ciniki." },
      { objective: "O5", q: "Wa ya kamata ya duba lissafin farashi?", options: ["Abokin gogayyarku", "AI kawai", "Babu kowa", "Ku, a spreadsheet"], answer: 3, why: "Lissafin AI yana iya yin kuskure." },
      { objective: "O5", q: "Riba ita ce:", options: ["Kuɗin kayan aikinku", "Duk kuɗin da abokan ciniki ke biya", "Abin da ya rage bayan an biya duk kuɗaɗe", "Farashinku"], answer: 2, why: "Riba = kuɗin shiga a cire kuɗaɗen da aka kashe." },
      { objective: "O5", q: "Don tambayoyin haraji game da sabuwar hidimarku, ku duba:", options: ["Majiyoyin hukuma kamar irs.gov ko akanta", "Hirar AI kawai", "Sharhi a social media", "Abokin cinikinku"], answer: 0, why: "Majiyoyin hukuma da ƙwararru ne abin dogaro." },
      { objective: "O6", q: "Wane iƙirari ya kamata ku guje wa?", options: ["\"Mutum yana duba kowane rubutu\"", "\"Daidai 100%, an tabbatar\"", "\"Rubutu 12 a wata\"", "\"Kai ne ke amincewa kafin a saka\""], answer: 1, why: "Iƙirari na ƙarshe-ƙarshe suna da wuyar tabbatarwa." },
      { objective: "O6", q: "A 2026 FTC ta kammala umarni a kan kamfanonin da suka:", options: ["Yi amfani da spreadsheet", "Yi iƙirarin ƙarya game da abin da hidimar tallan su ta AI ke yi", "Ɗauki masu zane aiki", "Biya haraji a kan lokaci"], answer: 1, why: "Sun yi iƙirarin cewa AI yana sauraron hirarraki alhali ba haka ba ne." },
      { objective: "O6", q: "Idan ba ku tabbata an yarda da wani iƙirarin talla ba, ya kamata ku:", options: ["Yi magana da lauya", "Yi amfani da shi duk da haka", "Tambayi AI ku saka duk abin da ya faɗa", "Ƙara girmansa"], answer: 0, why: "Lauya zai iya ba da shawara game da halin da kuke ciki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 4, 5, 6, 9, 12, 15, 17]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Matsalar abokin ciniki", objective: "O1", notYet: "Matsalar ba a fili take ba ko ba a tabbatar da ita da mutum na gaske ba.", meets: "Matsala ɗaya a fili da abin da abokin ciniki zai samu, an tabbatar da su da mutane na gaske.", exceeds: "Ya haɗa da yadda suke magance ta yanzu da nawa take ci musu." },
      { name: "Matakai da dubawar mutum", objective: "O2", notYet: "Ba a yi wa matakai alama ba, ko babu abin da ake dubawa kafin a kawo.", meets: "Matakai masu lamba da alamar AI, mutum ko kayan aiki, da dubawar mutum kafin a kawo.", exceeds: "Ya faɗi ainihin abin da mutum ke dubawa a kowane wurin dubawa." },
      { name: "Prompt na umarni", objective: "O3", notYet: "Babu dokoki ko gurbi, ko sakamako yana bambanta sosai.", meets: "Matsayi, dokoki, tsari da gurbi, masu ba da sakamako iri ɗaya.", exceeds: "Yana amfani da alamomin [CHECK] kuma yana da dokokin da aka ƙara daga kurakuran gwaji." },
      { name: "Sakamakon gwaji", objective: "O4", notYet: "Babu mutum na gaske da ya gwada shi, ko ba a yi wani canji ba.", meets: "Sakamako daga gwaji da mutane na gaske, kalmominsu, da aƙalla canji ɗaya.", exceeds: "Mutane uku sun gwada shi kuma gwaji na biyu ya nuna canjin ya yi aiki." },
      { name: "Farashi da bayani", objective: "O6", notYet: "Farashin bai lissafa lokacin dubawa ba, ko bayanin ya yi alƙawarin da ya wuce gona da iri.", meets: "Farashin kunshi da ke biyan duk kuɗaɗe da riba, da bayani na gaskiya.", exceeds: "Ya nuna lissafin spreadsheet kuma ya faɗi a fili abin da AI ke yi da abin da mutum ke yi." }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka sayar da hidimarsu mai taimakon AI ga abokin ciniki na farko mai biya cikin kwanaki 30 (binciken biyo baya)",
      "Gamsuwar abokan ciniki ko maimaita odar da masu kasuwanci suka bayar da rahoto",
      "Masu koyo da suka fara wani kwas na 'yan kasuwa na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai mataimakin AI kyauta",
      "Spreadsheet don auna lokaci da saka farashi",
      "Samun mutane na gaske har uku da ke da matsalar",
      "Kusan minti 60 zuwa 75 don darussa da gwaje-gwaje, da lokacin gwaji da mutane na gaske"
    ],
    facilitatorNotes: [
      "Ku sa masu koyo su gabatar da matsalar da suka zaɓa ga ƙungiya kafin su gina, ku bar abokan karatunsu su tambayi yawan faruwarta.",
      "Ku haɗa masu koyo bibbiyu su zama abokan ciniki na gwaji ga juna idan masu gwaji na gaske suna da wuyar samu, sannan su bi diddigi da mutum na gaske.",
      "Ku tunatar da masu koyo kada su liƙa bayanan sirri na masu gwaji a cikin AI inda za su iya amfani da madadi.",
      "Ku duba kowane bayanin kaya don iƙirarin da ba za a iya tabbatarwa ba; ku tura tambayoyin haraji da shari'a ga ƙwararren da ya dace.",
      "Ku ba da maki ga takardar bayanin kaya da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
