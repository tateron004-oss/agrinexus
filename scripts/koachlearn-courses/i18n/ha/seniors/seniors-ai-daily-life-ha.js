"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-daily-life.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-daily-life-ha",
  lang: "ha",
  translationOf: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "AI don Rayuwar Yau da Kullum",
  skills: "Yin jerin cefane da AI, Shirya abinci mai sauƙi, Saita tunatarwa da murya, Saka ganawa a kalanda, Fahimtar wasiƙa mai ruɗarwa",
  outcome: "amfani da mataimakin AI da mataimakin murya na wayarku don shirya abinci mai sauƙi na mako ɗaya, mayar da shi jerin cefane, saita tunatarwa, da samun bayanin wasiƙa mai ruɗarwa da kalmomi masu sauƙi.",
  about: [
    "Wannan kwas ɗin na manya ne masu shekaru da ke son fasaha ta sauƙaƙa musu ayyukan yau da kullum: cefane, girki, tuna ganawa da fahimtar wasiƙun da suka zo.",
    "Za ku yi amfani da mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini, da mataimakin murya da ke cikin wayarku tun farko (Siri a iPhone, ko Google Assistant ko Gemini a Android), don shirya abinci, yin jeri, saita tunatarwa da fahimtar wasiƙu.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku tafi a hankali, ku maimaita abin da kuke buƙata, kuma ku yi aikin \"Gwada yanzu\" kowane lokaci. Akwai ɗan gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku shirya abincin dare uku masu sauƙi na mako mai zuwa da mataimakin AI, ku nemi ya yi jerin cefane ɗaya na dukkan uku, ku saita tunatarwa a waya don zuwa cefane, sannan ku saka ganawa ɗaya ta gaske a kalandar wayarku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya masu shekaru, da yawa suna zaune su kaɗai ko su biyu da abokin aure, waɗanda ke kula da abincinsu, cefane, ganawa da wasiƙunsu da kansu, kuma suna son ayyukan yau da kullum su rage wahala.",
    startingPoint: "Suna da wayar zamani (smartphone) kuma suna iya kira da tura saƙon tes. Yawancinsu ba su taɓa amfani da mataimakin AI, mataimakin murya na wayarsu, faɗakarwar kalanda ko manhajar Notes ba.",
    gap: "Shirya abinci, tuna ganawa da fahimtar wasiƙu daga kamfanonin inshora ko ofisoshi na iya gajiyarwa da damuwa. Amfani da mataimakin AI da kayan aikin da ke cikin waya don waɗannan ayyuka yana rage wahala kuma yana taimaka wa tsofaffi su ci gaba da dogaro da kansu, muddin bayanan sirri ba su shiga ba, kuma ana tabbatar da muhimman wasiƙu da wanda ya aiko su.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: wayar zamani mai mataimakin murya da manhajar Calendar (kalanda); menu na iPhone da na Android sun bambanta",
      "Lokaci: kusan minti 5 a kowane darasi cikin natsuwa, da lokacin atisaye",
      "Abinci na musamman (diet) daga likitan mai koyo yake zuwa, ba daga AI ba",
      "Sirri: babu sunaye, lambobin asusu, lambar Medicare ko ta Social Security a cikin prompt ko hoton wasiƙa"
    ],
    prerequisites: "Kwas ɗin \"AI for Seniors: Using AI Assistants\" (AI ga Tsofaffi: Amfani da Mataimakan AI) yana da amfani a fara da shi, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da mataimakin AI kyauta", action: "neman ra'ayoyin abinci masu sauƙi, kuna faɗin mutane nawa kuke dafa wa, lokacinku, abin da kuke so da abin da za a guje wa", standard: "har ku sami ra'ayoyi uku da suka dace da buƙatunku da shawarar likitanku" },
    { id: "O2", condition: "Idan aka ba ku wasu ra'ayoyin abinci", action: "samun jerin cefane ɗaya da aka tsara bisa sassan shago, ba tare da abin da kuke da shi ba", standard: "an ajiye shi a Notes, an buga shi ko an rubuta shi" },
    { id: "O3", condition: "Ta amfani da mataimakin murya na wayarku", action: "saita tunatarwa ko agogon ƙirga lokaci (timer) ta hanyar magana, da rana da lokaci", standard: "kuma ku duba a allo cewa an saita shi" },
    { id: "O4", condition: "Idan kuna da ganawa ta gaske", action: "saka ta a kalandar wayarku tare da faɗakarwa", standard: "da suna, rana da lokaci daidai, da faɗakarwa kafin ganawar" },
    { id: "O5", condition: "Idan kuna da wasiƙa mai ruɗarwa daga kamfanin inshora, kamfanin wuta ko ruwa, ko wani ofishi", action: "samun bayaninta da kalmomi masu sauƙi ba tare da wani bayanin sirri ba", standard: "kuma ku tabbatar da abin da za ku yi ta kiran lambar da aka buga a kan wasiƙar" }
  ],
  chapters: [
    {
      name: "Babi na 1: Jeri, abinci da cefane",
      lessons: [
        {
          objectives: ["O1"],
          title: "Shirya abinci mai sauƙi da AI",
          minutes: 5,
          goal: "Neman mataimakin AI ya ba ku ra'ayoyin abinci masu sauƙi da suka dace da buƙatunku.",
          text: [
            "Yanke shawarar abin da za a dafa kowace rana na iya gajiyarwa, musamman idan kuna dafa wa mutum ɗaya ko biyu. Mataimakin AI zai iya ba da ra'ayoyi cikin daƙiƙoƙi.",
            "Ku faɗa masa abin da kuke so, mutane nawa kuke dafa wa, lokaci da ƙoƙarin da kuke son kashewa, da duk abin da dole ku guje wa. Misali: \"Ina dafa wa mutum ɗaya. Ka ba ni shawarar abincin dare uku masu sauƙi da ba su wuce minti 30 ba, masu kayan haɗi kaɗan, kuma masu ƙarancin gishiri.\"",
            "Idan likitanku ya ba ku abinci na musamman (diet), ku bi shawarar likitanku. Mataimakin zai iya ba da ra'ayoyi, amma bai san lafiyarku ba."
          ],
          steps: ["Ku buɗe mataimakin AI ɗinku.", "Ku faɗi mutane nawa kuke dafa wa.", "Ku faɗi lokacin da kuke da shi da abin da kuke so.", "Ku faɗi duk abin da za a guje wa, kamar gishiri ko sukari da yawa.", "Ku nemi ra'ayoyi uku."],
          words: [["Kayan haɗi (ingredient)", "ɗaya daga cikin abincin da ake sakawa a girki."]],
          slides: [
            { title: "Bari AI ya ba da shawarar abinci", bullets: ["Ra'ayoyi cikin daƙiƙoƙi", "Yana da kyau idan kuna dafa wa mutum ɗaya ko biyu"] },
            { title: "Ku faɗa masa", bullets: ["Mutane nawa", "Lokaci nawa", "Abin da kuke so da abin da za a guje wa"] },
            { title: "Likitanku ne a gaba", bullets: ["Ku bi duk wani diet da likitanku ya ba ku", "AI bai san lafiyarku ba"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya ba ku abincin dare uku masu sauƙi na mako mai zuwa da suka dace da yadda kuke son ci. Ku rubuta ukun da kuka fi so.",
          youCanNow: "neman mataimakin AI ya ba ku ra'ayoyin abinci da suka dace da buƙatunku.",
          quickCheck: [
            { objective: "O1", q: "Wane ne ke yanke abincinku na musamman (diet) idan kuna da shi?", options: ["Mataimakin AI", "Likitanku", "Shagon kayan abinci", "Shirin girki a talabijin"], answer: 1, why: "Mataimakin yana ba da ra'ayoyi amma bai san lafiyarku ba; ku bi shawarar likitanku." },
            { objective: "O1", q: "Kuna dafa wa mutum biyu kuma ba ku da ƙarfi sosai da yamma. Me za ku ƙara a buƙatarku?", options: ["\"Ka sa ya zama mai sauri da sauƙi, na mutum biyu.\"", "Babu komai; ku ce \"abinci\" kawai", "Lambar Medicare ɗinku", "\"Ka sa ya zama na alfarma.\""], answer: 0, why: "Faɗin mutane nawa, da lokaci da ƙoƙarin da kuke so, yana kawo ra'ayoyin da suka dace." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mayar da abinci jerin cefane",
          minutes: 4,
          goal: "Samun jerin cefane ɗaya mai tsari na abinci da yawa.",
          text: [
            "Idan kun sami ra'ayoyin abinci, ku nemi mataimakin ya yi jerin cefane ɗaya na dukkansu. Wannan yana hana ku rubuta kowane girki da kanku.",
            "Ku nemi ya tsara jerin bisa sassan shago, kamar 'ya'yan itace da kayan lambu, kayan madara, da kayan gwangwani, don ku zagaya shagon sau ɗaya kawai. Sannan ku faɗa masa abin da kuke da shi a gida don ya cire su.",
            "Kuna iya buga jerin, ku kwafe shi zuwa manhajar Notes ta wayarku, ko ku rubuta shi a takarda kawai. Ku yi amfani da duk abin da ya fi muku sauƙi."
          ],
          steps: ["Ku tambaya: \"Ka yi jerin cefane ɗaya na waɗannan abincin dare uku.\"", "Ku nemi ya tsara jerin bisa sassan shago.", "Ku faɗa masa abin da kuke da shi.", "Ku kwafe jerin zuwa Notes, ku buga shi, ko ku rubuta shi."],
          words: [["Manhajar Notes", "manhaja a wayarku don rubutawa da ajiye gajerun bayanai da jeri."]],
          slides: [
            { title: "Jeri ɗaya na dukkan abinci", bullets: ["\"Ka yi jerin cefane ɗaya na waɗannan abincin dare uku.\""] },
            { title: "Ku sauƙaƙa cefane", bullets: ["Ku tsara bisa sassan shago", "Ku cire abin da kuke da shi"] },
            { title: "Ku ajiye jerinku", bullets: ["Ku kwafe shi zuwa manhajar Notes", "Ku buga shi", "Ko ku rubuta shi a takarda"] }
          ],
          tryIt: "Ku nemi mataimakin ya yi jerin cefane ɗaya na abincinku na dare uku, bisa sassan shago. Ku faɗa masa abubuwa biyu da kuke da su, sannan ku ajiye jerin ƙarshe.",
          youCanNow: "mayar da ra'ayoyin abinci jerin cefane ɗaya da ya dace da kicin ɗinku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne ma'anar tsara jeri bisa sassan shago?", options: ["Jera kayayyaki daga mafi arha zuwa mafi tsada", "Rubuta jerin sau biyu", "Haɗa kayayyaki bisa inda suke, kamar kayan madara ko kayan gwangwani", "Jera abinci ɗaya kawai"], answer: 2, why: "Tsarawa bisa sassa yana bar ku zagaya shagon sau ɗaya." },
            { objective: "O2", q: "Kuna da shinkafa da ƙwai a gida. Me za ku faɗa wa mataimakin?", options: ["Babu komai", "Ya ƙara shinkafa da ƙwai", "Ya yi sabon shirin abinci", "Cewa kuna da shinkafa da ƙwai, don ya cire su"], answer: 3, why: "Faɗin abin da kuke da shi yana cire waɗannan kayan daga jerin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amfani da mataimakin murya na wayarku don tunatarwa",
          minutes: 6,
          goal: "Saita tunatarwa ko timer ta hanyar yin magana da wayarku.",
          text: [
            "Yawancin wayoyi suna da mataimakin murya a cikinsu: Siri a iPhone, da Google Assistant ko Gemini a wayoyin Android da yawa. Kuna magana, wayar kuma tana yin wani ƙaramin aiki, kamar saita tunatarwa, timer ko ƙararrawa.",
            "Don fara shi, yawanci kuna iya cewa \"Hey Siri\" ko \"Hey Google\", ko ku danna maɓallin gefe ko na gida ku riƙe. Idan ba a kunna shi ba, ku nemi wani a iyali ya taimake ku kunna shi a Settings (saituna).",
            "Sannan ku yi magana a sarari, da harshen da wayarku ta fahimta, misali Turanci: \"Remind me to go grocery shopping on Thursday at 10 am.\" (Ka tuna mini in je cefane ranar Alhamis ƙarfe 10 na safe.) \"Set a timer for 20 minutes.\" (Ka saita timer na minti 20.) \"Remind me to call Ruth tomorrow at 5 pm.\" (Ka tuna mini in kira Ruth gobe ƙarfe 5 na yamma.) Wayar za ta faɗa muku ko ta nuna muku cewa an saita shi."
          ],
          steps: ["Ku ce \"Hey Siri\" ko \"Hey Google\", ko ku danna maɓallin gefe ko na gida ku riƙe.", "Ku jira sauti ko haske a allo.", "Ku faɗi abin da kuke so, da rana da lokaci.", "Ku duba allon don ku ga an saita shi."],
          words: [["Mataimakin murya (voice assistant)", "mataimaki da ke cikin wayarku wanda ke yin ƙananan ayyuka idan kun yi masa magana."], ["Tunatarwa (reminder)", "saƙon da wayarku ke nuna muku a lokacin da kuka zaɓa."]],
          slides: [
            { title: "Wayarku tana iya sauraro", bullets: ["Siri a iPhone", "Google Assistant ko Gemini a Android"] },
            { title: "Ku tashe shi", bullets: ["Ku ce \"Hey Siri\" ko \"Hey Google\"", "Ko ku danna maɓallin gefe ko na gida ku riƙe"] },
            { title: "Ku faɗi abin da kuke buƙata", bullets: ["\"Remind me to shop Thursday at 10 am.\" (cefane ranar Alhamis ƙarfe 10)", "\"Set a timer for 20 minutes.\" (timer na minti 20)", "Ku duba allo don ku ga an saita shi"] }
          ],
          tryIt: "Ku yi amfani da mataimakin murya na wayarku don saita tunatarwa ta zuwa cefane a rana da lokacin da ya dace da ku. Ku duba cewa ta bayyana a allo.",
          youCanNow: "saita tunatarwa ko timer ta hanyar yin magana da wayarku.",
          quickCheck: [
            { objective: "O3", q: "Mene ne mataimakin murya a waya?", options: ["Mutumin da ke sake kiran ku", "Mataimaki da ke cikin waya da kuke magana da shi, kamar Siri ko Google Assistant", "Na'urar ji (hearing aid)", "Manhajar saƙon tes"], answer: 1, why: "Siri da Google Assistant suna yin ƙananan ayyuka, kamar tunatarwa da timer, idan kun yi magana." },
            { objective: "O3", q: "Kuna son tuna kiran 'yar'uwarku gobe da yamma. Me za ku ce?", options: ["\"Call.\" (Kira.)", "\"Sister.\" ('Yar'uwa.)", "\"Remind me to call my sister tomorrow at 6 pm.\" (Ka tuna mini in kira 'yar'uwata gobe ƙarfe 6 na yamma.)", "\"Tomorrow.\" (Gobe.)"], answer: 2, why: "Buƙata a sarari mai aikin, rana da lokaci tana saita tunatarwa mai amfani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Jeri, abinci da cefane",
        questions: [
          { objective: "O1", q: "Me ya kamata ku faɗa wa mataimakin AI lokacin da kuke neman ra'ayoyin abinci?", options: ["Lambar bankinku", "\"Abinci\" kawai", "Mutane nawa, lokacinku, abin da kuke so da abin da za a guje wa", "Kalmar sirrin likitanku"], answer: 2, why: "Waɗannan bayanai suna taimaka masa ya ba da shawarar abincin da ya dace da ku." },
          { objective: "O1", q: "Likitanku ya ba ku diet mai ƙarancin gishiri, amma AI ya ba da shawarar abinci mai gishiri. Me za ku yi?", options: ["Ku bi shawarar likitanku", "Ku bi AI", "Ku daina cin abinci", "Ku yi watsi da dukkansu"], answer: 0, why: "Likitanku ya san lafiyarku; AI bai sani ba." },
          { objective: "O2", q: "Me yasa za ku nemi mataimakin ya tsara jerin cefane bisa sassan shago?", options: ["Yana sa abinci ya yi arha", "Dole ne", "Don ya buga da launi", "Don ku zagaya shagon sau ɗaya"], answer: 3, why: "Tsarawa bisa sassa yana sa cefane ya yi sauri." },
          { objective: "O3", q: "Wanne ne mataimakin murya da ke cikin wayoyi da yawa?", options: ["Na'urar lissafi (calculator)", "Siri", "Kyamara", "Fitila"], answer: 1, why: "Siri a iPhone da Google Assistant ko Gemini a Android suna sauraron buƙatun da aka faɗa." },
          { objective: "O3", q: "Wace buƙata ta murya ce za ta saita tunatarwa mai amfani?", options: ["\"Shopping.\" (Cefane.)", "\"Remind me to go shopping Thursday at 10 am.\" (Ka tuna mini in je cefane ranar Alhamis ƙarfe 10 na safe.)", "\"Hello.\" (Sannu.)", "\"Phone.\" (Waya.)"], answer: 1, why: "Tana faɗin abin da za a tuna, ranar da lokacin." }
        ]
      }
    },
    {
      name: "Babi na 2: Ganawa da takardu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saka ganawa a kalandar wayarku",
          minutes: 6,
          goal: "Saka ganawa da likita a kalandar wayarku tare da faɗakarwa.",
          text: [
            "Wayarku tana da manhajar Calendar (kalanda) da za ta iya ɗaukar dukkan ganawarku kuma ta faɗakar da ku kafin kowace. Wannan yana da amfani don ziyarar likita, aski da ranakun haihuwar 'yan uwa.",
            "Hanya mafi sauƙi ita ce ku tambayi mataimakin murya: \"Add an appointment with Dr. Lee on May 12 at 2 pm.\" (Ka saka ganawa da Dr. Lee ranar 12 ga Mayu ƙarfe 2 na rana.) Kuna kuma iya buɗe manhajar Calendar, ku taɓa alamar ƙari (+), ku rubuta sunan, ku zaɓi rana da lokaci, sannan ku taɓa Add ko Save.",
            "Ku saita faɗakarwa don wayar ta tuna muku kafin lokaci, kamar kwana ɗaya kafin da awa ɗaya kafin. Ku nemi zaɓi mai suna Alert ko Notification lokacin da kuke saka ganawar."
          ],
          steps: ["Ku buɗe manhajar Calendar, ko ku tambayi mataimakin murya.", "Ku taɓa alamar ƙari (+) don saka sabon abu.", "Ku rubuta sunan, kamar \"Dr. Lee checkup\" (duba lafiya wajen Dr. Lee).", "Ku zaɓi rana da lokaci.", "Ku zaɓi faɗakarwa, kamar kwana 1 kafin.", "Ku taɓa Add ko Save."],
          words: [["Manhajar Calendar (kalanda)", "manhaja a wayarku da ke ajiye ganawarku bisa rana."], ["Faɗakarwa (alert)", "sauti ko saƙo da wayar ke ba ku kafin ganawa."]],
          slides: [
            { title: "Kalandar wayarku", bullets: ["Tana ajiye dukkan ganawarku", "Tana faɗakar da ku kafin kowace"] },
            { title: "Hanyoyi biyu na sakawa", bullets: ["Ku tambayi mataimakin murya", "Ko ku buɗe Calendar ku taɓa +"] },
            { title: "Ku cike shi", bullets: ["Suna, rana da lokaci", "Ku zaɓi faɗakarwa, kamar kwana 1 kafin", "Ku taɓa Add ko Save"] }
          ],
          tryIt: "Ku saka ganawa ɗaya ta gaske ko ranar haihuwar wani a iyali a kalandar wayarku, tare da faɗakarwa kwana ɗaya kafin. Ku duba cewa ta bayyana a ranar da ta dace.",
          youCanNow: "saka ganawa a kalandar wayarku da samun tunatarwa kafin ta.",
          quickCheck: [
            { objective: "O4", q: "Me faɗakarwa a ganawar kalanda take yi?", options: ["Tana sa wayar ta tuna muku kafin ganawar", "Tana soke ganawar", "Tana kiran likita a madadinku", "Tana raba ta da baƙi"], answer: 0, why: "Faɗakarwa tana sanar da ku kafin lokaci, kamar kwana ɗaya ko awa ɗaya kafin." },
            { objective: "O4", q: "Kun yi ganawar duba lafiya ranar Talata mai zuwa. Mene ne mataki na farko na saka ta a manhajar Calendar?", options: ["Ku kashe wayarku", "Ku goge tsofaffin ganawa", "Ku rubuta ta a tes zuwa kanku", "Ku taɓa alamar ƙari (+) don saka sabon abu"], answer: 3, why: "Ku taɓa alamar ƙari, sannan ku rubuta sunan ku zaɓi rana, lokaci da faɗakarwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Samun bayanin wasiƙa mai ruɗarwa",
          minutes: 5,
          goal: "Neman mataimakin AI ya bayyana wasiƙa mai ruɗarwa da kalmomi masu sauƙi, ba tare da raba bayanan sirri ba.",
          text: [
            "Wasiƙu daga kamfanonin inshora, kamfanonin wuta ko ruwa, ko ofisoshi na iya cika da kalmomi masu wuya. Mataimakin AI zai iya bayyana su da harshe mai sauƙi.",
            "Da farko, ku rufe ko ku bar bayanan sirri: sunaye, lambobin asusu, lambar Medicare ko ta Social Security, da adireshinku. Sannan ku rubuta sashe mai ruɗarwa, ko ku bayyana shi, ku tambaya: \"Ka bayyana wannan da kalmomi masu sauƙi. Akwai abin da nake buƙatar yi?\"",
            "Wasu mataimaka suna bar ku ɗauki hoton shafi. Idan kuka yi haka, ku rufe bayanan sirri kafin ku ɗauki hoton. Duk abin da ya shafi kuɗi, tallafi ko lafiya, ku tabbatar da abin da za ku yi ta kiran lambar da aka buga a kan wasiƙar kanta, ko ku tambayi wani a iyali da kuka amince da shi."
          ],
          steps: ["Ku rufe ko ku bar sunaye, lambobi da adireshinku.", "Ku rubuta ko ku bayyana sashe mai ruɗarwa kawai.", "Ku tambaya: \"Ka bayyana wannan da kalmomi masu sauƙi. Me nake buƙatar yi?\"", "Ku tabbatar ta kiran lambar da aka buga a kan wasiƙar."],
          words: [["Harshe mai sauƙi (plain language)", "kalmomi masu sauƙi na yau da kullum da ke da sauƙin fahimta."], ["Lambar asusu (account number)", "lambar sirri da kamfani ke amfani da ita don asusunku; kada ku taɓa raba ta da AI."]],
          slides: [
            { title: "Wasiƙu masu wuya, kalmomi masu sauƙi", bullets: ["Inshora, kamfanonin wuta ko ruwa, ofisoshi", "AI zai iya bayyana su a sauƙaƙe"] },
            { title: "Ku kare kanku da farko", bullets: ["Ku rufe sunaye da lambobin asusu", "Ku bar lambar Medicare da ta Social Security", "Ku bar adireshinku"] },
            { title: "Ku tambaya ku tabbatar", bullets: ["\"Ka bayyana da kalmomi masu sauƙi. Me nake buƙatar yi?\"", "Ku kira lambar da aka buga a kan wasiƙar don tabbatarwa"] }
          ],
          tryIt: "Ku nemo wasiƙa ko takardar kuɗi mai jimla da ba ku fahimta sosai ba. Ku bar dukkan bayanan sirri, ku rubuta wannan jimla kawai a mataimaki, sannan ku nemi ya bayyana ta da kalmomi masu sauƙi.",
          youCanNow: "samun bayanin wasiƙa mai ruɗarwa da kalmomi masu sauƙi yayin da bayananku na sirri suke cikin aminci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne harshe mai sauƙi?", options: ["Kalmomi masu sauƙi na yau da kullum", "Kalmomin shari'a", "Harshen waje", "Gajerun lambobin sirri"], answer: 0, why: "Harshe mai sauƙi yana nufin kalmomi masu sauƙi na yau da kullum da ke da sauƙin fahimta." },
            { objective: "O5", q: "Kuna son ɗaukar hoton wasiƙar inshora don AI. Me za ku fara yi?", options: ["Ku ƙara girman hoton", "Ku rufe sunanku, adireshinku da lambobin asusu", "Ku ƙara lambar Medicare ɗinku don ya duba", "Ku tura ta ga aboki"], answer: 1, why: "Ku rufe bayanan sirri kafin ku ɗauki hoton." }
          ]
        },
        {
          objectives: ["O1","O2","O3"],
          title: "Haɗa komai tare: makonku, cikin sauƙi",
          minutes: 5,
          goal: "Amfani da AI da wayarku tare don shirya mako.",
          text: [
            "Yanzu kuna da ƙananan ƙwarewa da yawa: neman ra'ayoyin abinci, yin jeri, saita tunatarwa da saka ganawa. Idan aka haɗa su, za su iya tsara mako gaba ɗaya.",
            "Tsari mai sauƙi: ranar Lahadi, ku nemi mataimakin ya ba ku abincin dare uku da jerin cefane ɗaya. Ku saita tunatarwa ta ranar cefane. Ku duba kalandarku don ganin ganawar makon, ku saka duk wani sabo.",
            "Ku sauƙaƙa abu. Ku yi amfani da kayan aikin da ke taimaka muku, ku bar waɗanda ba sa taimakawa. Jerin takarda har yanzu yana aiki sosai, kuma neman taimakon wani a iyali koyaushe ba laifi ba ne."
          ],
          steps: ["Ku nemi mataimakin AI ya ba ku abincin dare uku.", "Ku nemi jerin cefane ɗaya.", "Ku saita tunatarwa ta ranar cefane.", "Ku duba kalandarku ku saka sabbin ganawa."],
          words: [["Tsari na yau da kullum (routine)", "jerin matakai da kuke yi a hanya ɗaya kowane lokaci."]],
          slides: [
            { title: "Tsari mai sauƙi na ranar Lahadi", bullets: ["Abincin dare uku daga AI", "Jerin cefane ɗaya", "Tunatarwa ta cefane"] },
            { title: "Ku duba makonku", bullets: ["Ku duba kalandarku", "Ku saka duk wani sabo tare da faɗakarwa"] },
            { title: "Ku sauƙaƙa abu", bullets: ["Ku yi amfani da abin da ke taimaka muku", "Jerin takarda har yanzu yana aiki", "Ku nemi taimakon iyali kowane lokaci"] }
          ],
          tryIt: "Aikin ƙarshe: ku shirya abincin dare uku masu sauƙi na mako mai zuwa da mataimakin AI, ku nemi jerin cefane ɗaya, ku saita tunatarwa a waya ta ranar cefane, sannan ku saka ganawa ɗaya ta gaske a kalandarku.",
          youCanNow: "amfani da AI da wayarku tare don shirya abinci, yin cefane da bin diddigin ganawa.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne kayan aiki ne tare za su iya tsara makonku?", options: ["Kalandar takarda kawai", "Mataimakin AI kawai", "Ra'ayoyin abinci, jerin cefane, tunatarwa da kalandarku", "Babu; yana da wuya sosai"], answer: 2, why: "Ƙananan ƙwarewar wannan kwas suna aiki tare don shirya mako gaba ɗaya." },
            { objective: "O1", q: "Yau Lahadi ce. Mene ne mataki na farko mai sauƙi na shirya makonku?", options: ["Ku sayi komai a shago", "Ku kashe dukkan tunatarwa", "Ku karanta tsofaffin wasiƙu", "Ku nemi mataimakin ya ba ku abincin dare uku da jerin cefane ɗaya"], answer: 3, why: "Tsarin yana farawa da abincin dare uku da jeri ɗaya, sannan tunatarwa da duba kalanda." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ganawa da takardu",
        questions: [
          { objective: "O4", q: "A manhajar Calendar, me za ku taɓa don saka ganawa?", options: ["Maɓallin ƙara sauti", "Kyamara", "Alamar batir", "Alamar ƙari (+)"], answer: 3, why: "Alamar ƙari tana saka sabon abu." },
          { objective: "O4", q: "Me yasa za ku saita faɗakarwa a ganawa?", options: ["Don wayar ta tuna muku kafin ta", "Don ta rage kuɗi", "Don likita ya kira ku", "Tana goge ganawar"], answer: 0, why: "Faɗakarwa tana sanar da ku kafin lokaci." },
          { objective: "O5", q: "Kafin ku tambayi AI game da wasiƙa, ya kamata ku:", options: ["Rubuta lambar asusunku", "Aika wasiƙar gaba ɗaya da sunanku", "Rufe ko barin bayanan sirri", "Raba lambar Medicare ɗinku"], answer: 2, why: "Bayanan sirri ba za su taɓa shiga mataimakin AI ba." },
          { objective: "O5", q: "AI ya bayyana wasiƙa game da tallafinku. Ta yaya za ku tabbatar da abin da za ku yi?", options: ["Ku amince da AI gaba ɗaya", "Kada ku yi komai", "Ku tambayi baƙo a intanet", "Ku kira lambar da aka buga a kan wasiƙar"], answer: 3, why: "Ofishin da ya aiko wasiƙar shi ne majiyar hukuma." },
          { objective: "O2", q: "Mene ne tsari mai kyau na ranar Lahadi daga wannan kwas?", options: ["Goge kalandarku", "Raba kalmomin sirrinku", "Shirya abincin dare, yin jeri, saita tunatarwar cefane, duba kalandarku", "Sayen sabuwar waya"], answer: 2, why: "Yana haɗa ƙwarewar kowane darasi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Rayuwar Yau da Kullum",
    questions: [
      { objective: "O1", q: "Mataimakin AI zai iya taimakawa da abinci ta hanyar:", options: ["Dafa shi", "Ba da shawarar ra'ayoyi masu sauƙi da suka dace da ku", "Sayo muku kayan abinci", "Sanin diet ɗinku daga likitanku"], answer: 1, why: "Yana ba da ra'ayoyi idan kun faɗa masa abin da kuke buƙata." },
      { objective: "O1", q: "Wace buƙatar abinci ce ta fi sarari?", options: ["\"Ina dafa wa mutum ɗaya. Ka ba ni shawarar abincin dare uku masu sauƙi, masu ƙarancin gishiri, ƙasa da minti 30.\"", "\"abinci\"", "\"abincin dare?\"", "\"ci\""], answer: 0, why: "Tana faɗin mutane, lokaci, da abin da za a guje wa." },
      { objective: "O1", q: "Idan diet ɗin likitanku da ra'ayin AI ba su yi daidai ba, ku bi:", options: ["Likitanku", "AI", "Duk wanda ya fi sauƙi", "Babu ɗaya"], answer: 0, why: "Likitanku ya san lafiyarku." },
      { objective: "O2", q: "Kayan haɗi (ingredient) shi ne:", options: ["Kayan aikin kicin", "Ɗaya daga cikin abincin da ke cikin girki", "Shago", "Manhaja"], answer: 1, why: "Kayan haɗi su ne abincin da ake sakawa a girki." },
      { objective: "O2", q: "Don samun jeri ɗaya na abinci uku, za ku tambaya:", options: ["\"Mene ne kalmar sirrina?\"", "\"Ka goge abincin.\"", "\"Ka yi jerin cefane ɗaya na waɗannan abincin dare uku.\"", "\"Ka kira shagon.\""], answer: 2, why: "Mataimakin yana haɗa kayan haɗin zuwa jeri ɗaya." },
      { objective: "O2", q: "Faɗa wa mataimakin abin da kuke da shi a gida yana taimaka masa:", options: ["Buga da launi", "Rage muku kuɗi", "Kiran iyalinku", "Cire waɗannan kayan daga jerin"], answer: 3, why: "Yana cire abubuwan da ba sai kun saya ba." },
      { objective: "O2", q: "Ana amfani da manhajar Notes don:", options: ["Ɗaukar hoto", "Yin kira", "Rubutawa da ajiye gajerun bayanai da jeri", "Kunna waƙa"], answer: 2, why: "Notes tana ajiye jeri a wayarku." },
      { objective: "O3", q: "Siri da Google Assistant su ne:", options: ["Mataimakan murya da ke cikin wayoyi", "Shagunan kayan abinci", "Likitoci", "Adireshin imel"], answer: 0, why: "Suna yin ƙananan ayyuka idan kun yi magana." },
      { objective: "O3", q: "Hanya ɗaya ta tashe mataimakin murya ita ce:", options: ["Girgiza wayar", "Buɗe kyamara", "Kashe wayar", "Cewa \"Hey Siri\" ko \"Hey Google\""], answer: 3, why: "Kalmar tashi ko riƙe maɓallin gefe ko na gida yana fara shi." },
      { objective: "O3", q: "Wace buƙata da aka faɗa ce ke saita timer?", options: ["\"Timer.\"", "\"Set a timer for 20 minutes.\" (Ka saita timer na minti 20.)", "\"Hello phone.\" (Sannu waya.)", "\"Cooking.\" (Girki.)"], answer: 1, why: "Tana faɗin abin da za a yi da tsawon lokaci." },
      { objective: "O3", q: "Bayan saita tunatarwa da murya, ya kamata ku:", options: ["Kashe wayar", "Duba allo don ku ga an saita ta", "Goge manhajar", "Babu komai"], answer: 1, why: "Dubawa yana tabbatar da an saita ta daidai." },
      { objective: "O4", q: "Manhajar Calendar tana taimaka muku:", options: ["Yin wasanni", "Ɗaukar hoto", "Tura kuɗi", "Ajiye ganawa da samun tunatarwa"], answer: 3, why: "Tana ajiye abubuwa bisa rana kuma tana iya faɗakar da ku." },
      { objective: "O4", q: "Lokacin saka ganawa, me za ku cike?", options: ["Suna, rana da lokaci", "Lambar bankinku", "Kalmar sirrinku", "Lambar Medicare ɗinku"], answer: 0, why: "Suna, rana da lokaci su ne abin da kalanda ke buƙata." },
      { objective: "O4", q: "Faɗakarwa kwana ɗaya kafin ganawa tana nufin:", options: ["An soke ganawar", "Likita zai kira", "Wayarku za ta tuna muku kwana ɗaya kafin", "Ganawar ta canja wuri"], answer: 2, why: "Faɗakarwa tana sanar da ku kafin lokaci." },
      { objective: "O4", q: "Kuna kuma iya saka ganawa ta hanyar:", options: ["Buɗe kyamara", "Aika wasiƙa ta gidan waya", "Kashe wayar", "Tambayar mataimakin murya"], answer: 3, why: "Mataimakan murya suna iya saka abubuwa a kalanda." },
      { objective: "O5", q: "Kafin ku rubuta wani sashe na wasiƙa a AI, ku cire:", options: ["Kalmomi masu wuya", "Ranar wata", "Sunaye, lambobin asusu da adireshinku", "Babu komai"], answer: 2, why: "Bayanan sirri ba za su taɓa shiga AI ba." },
      { objective: "O5", q: "Idan kuka ɗauki hoton wasiƙa don AI, ya kamata ku fara:", options: ["Kunna fitilar kyamara (flash)", "Rufe bayanan sirri", "Ƙara kalmar sirrinku", "Rubuta lambar Social Security ɗinku a kanta"], answer: 1, why: "Rufe bayanai yana kare sirrinku." },
      { objective: "O5", q: "\"Harshe mai sauƙi\" yana nufin:", options: ["Kalmomi masu sauƙi na yau da kullum", "Harshen waje", "Kalmomin shari'a", "Rubutun shirin kwamfuta (code)"], answer: 0, why: "Harshe mai sauƙi yana da sauƙin fahimta." },
      { objective: "O5", q: "Don tabbatar da abin da wasiƙar tallafi ke so ku yi, za ku:", options: ["Kira lambar da aka buga a kan wasiƙar", "Amince da AI", "Saka ta a intanet", "Yi watsi da ita"], answer: 0, why: "Wanda ya aiko ita ne majiyar hukuma." },
      { objective: "O2", q: "Idan wani kayan aiki bai taimake ku ba, kwas ɗin yana ba da shawarar:", options: ["Ku sayi sabuwar waya", "Ku bar shi ku yi amfani da abin da ke aiki, har da takarda", "Ku daina shiri", "Ku raba kalmar sirrinku"], answer: 1, why: "Ku sauƙaƙa abu ku yi amfani da abin da ke taimakawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      2,
      4,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ra'ayoyin abinci da suka dace",
        objective: "O1",
        notYet: "Buƙatar ba ta da sarari, ko abincin bai dace da buƙatunku ba.",
        meets: "Abincin dare uku da suka dace da yawan mutane, lokacinku, abin da kuke so da abin da za a guje wa.",
        exceeds: "Abincin kuma yana bin duk wani diet da likitanku ya ba ku."
      },
      {
        name: "Jerin cefane ɗaya",
        objective: "O2",
        notYet: "Babu jeri, ko jeri daban-daban na kowane abinci.",
        meets: "Jeri ɗaya na dukkan abincin dare uku, an ajiye shi a Notes, an buga shi ko an rubuta shi.",
        exceeds: "An tsara shi bisa sassan shago, kuma an cire abubuwan da kuke da su."
      },
      {
        name: "Tunatarwar cefane",
        objective: "O3",
        notYet: "Babu tunatarwa, ko ba ta da rana ko lokaci.",
        meets: "An saita tunatarwa da rana da lokaci, kuma an duba ta a allo.",
        exceeds: "An saita ta ta hanyar magana da mataimakin murya."
      },
      {
        name: "Ganawa a kalanda",
        objective: "O4",
        notYet: "Babu ganawa, ko ranar ko lokacin ba daidai ba ne.",
        meets: "Ganawa ɗaya ta gaske da suna, rana da lokaci daidai.",
        exceeds: "Tana da faɗakarwa, kamar kwana ɗaya kafin."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da tunatarwa ko faɗakarwar kalanda don ganawa cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce ganawar da suke mantawa ta ragu, ko damuwa game da abinci da cefane ta ragu",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Tsofaffi da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai mataimakin murya (Siri, Google Assistant ko Gemini) da manhajar Calendar",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Wasiƙar misali da babu bayanan sirri na gaske a cikinta, don atisayen wasiƙa",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku taimaki masu koyo su kunna mataimakin murya a Settings kafin Darasi na 3; sau da yawa a kashe yake.",
      "Ku raba masu koyo bisa nau'in waya (iPhone ko Android) don matakan da ke allo su yi daidai.",
      "Ku yi amfani da wasiƙar misali don atisaye; kada ku taɓa neman masu koyo su raba lambobin asusu ko na Medicare na gaske.",
      "Ku tunatar da masu koyo cewa diet na musamman daga likitansu yake zuwa, kuma tambayoyin tallafi suna zuwa ga lambar da ke kan wasiƙar.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
