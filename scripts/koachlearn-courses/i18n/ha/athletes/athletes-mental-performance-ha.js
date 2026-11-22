"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-mental-performance.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-mental-performance-ha",
  lang: "ha",
  translationOf: "athletes-mental-performance",
  category: "Athletes",
  name: "Ƙarfin Tunani da Mai da Hankali a Wasanni",
  skills: "Numfashin akwati don kwantar da fargaba, Rubuta kalmomin jagora da maganar zuci, Gina tsarin shiri kafin wasa, Farfaɗowa bayan kuskure, Sanin lokacin da inda za a nemi taimako",
  outcome: "ginawa da amfani da rubutaccen tsarin shiri kafin wasa mai numfashin kwantar da hankali, kalmomin jagora da shirin farfaɗowa bayan kuskure, da sanin wanda za ku nema idan damuwa ta wuce fargaba kawai.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da suke jin fargaba, suke rasa hankali, ko suke wahala wajen farfaɗowa bayan kuskure, da kuma masu horarwa (koci) da suke son koyar da dabarun tunani masu sauƙi. Waɗannan dabarun ƙwazo ne na gaba ɗaya, ba magani ko jinyar ƙwaƙwalwa ba.",
    "Za ku yi atisayen dabarun da 'yan wasa a kowane mataki suke amfani da su: numfashi a hankali, maganar zuci mai amfani, tsare-tsare da farfaɗowa cikin sauri. Za ku yi amfani da mataimakin AI don taimaka muku rubuta tsarinku, kuma za ku koyi lokacin da ya kamata ku yi magana da mutum na gaske.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Idan kun taɓa jin ba ku cikin aminci ko kun fid da rai, ku kira ko ku tura tes zuwa 988 a Amurka, ko ku yi magana da wani babba da kuka amince da shi nan take."
  ],
  finalTask: "Ku rubuta katin tsarin shiri kafin wasa mai shafi ɗaya: jadawalin lokaci kafin wasanku, numfashin akwati don kwantar da hankali, kalmomin jagora uku, da matakai uku na farfaɗowa bayan kuskure. Ku yi amfani da mataimakin AI don taimaka muku tsara kalmomin, ku yi atisayensa a horo biyu, sannan ku nuna wa kocinku ku gyara shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa na makarantar sakandare, jami'a da kulob da suke jin fargaba, suke rasa hankali, ko suke wahala wajen farfaɗowa bayan kuskure, da masu horarwa da suke son koyar da dabarun tunani masu sauƙi.",
    startingPoint: "Suna fafatawa a wasanni a kai a kai kuma suna jin fargabar ranar wasa. Yawancinsu ba su da rubutaccen tsari, suna yi wa kansu maganar zuci mara kyau ba tare da sun lura ba, kuma ba su san wanda za su tuntuɓa ba idan damuwa ta wuce fargaba kawai.",
    gap: "Fargabar da ba a sarrafa ba da yawan tunani kan kuskure suna rage ƙwazon 'yan wasa, kuma ana iya rashin lura da damuwa mai tsanani. Dabaru masu sauƙi da aka yi atisaye da su suna taimaka musu su yi ƙwazo a lokacin matsi, kuma sanin lokacin da inda za a nemi taimako na gaske yana iya kare lafiyarsu da rayuwarsu.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 7",
      "Dabarun ƙwazo na gaba ɗaya kawai, ba magani ba, kuma ba sa maye gurbin mai ba da shawara (counselor)",
      "Waya ko kwamfuta mai mataimakin AI kyauta, ko takarda",
      "Kusan minti 60 na darussa, tare da atisaye a horon ƙungiya biyu",
      "Lafiyar ƙwaƙwalwa abu ne na sirri kuma mai muhimmanci; lambobin taimakon gaggawa (988, 911) na Amurka ne"
    ],
    prerequisites: "Babu"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuka tuna wani babban wasa na kwanan nan", action: "bayyana alamomin fargaba a jikinku da tunaninku, da lokacin da suke farawa", standard: "kuna ambaton aƙalla alamomin jiki biyu da tunani ɗaya" },
    { id: "O2", condition: "Kafin horo ko a lokacin horo", action: "nuna numfashin akwati sau huɗu", standard: "da ƙidaya iri ɗaya ta huɗu, ko numfashi a hankali ba tare da riƙewa ba idan riƙe numfashi bai yi muku daɗi ba" },
    { id: "O3", condition: "Idan kuna da wani mummunan tunani da kuke yawan yi", action: "rubuta kalmomin jagora uku da suke faɗa wa jikinku abin da zai yi", standard: "kowace kalmar jagora tana da kalma ɗaya zuwa uku, kuma game da abin da kuke iko da shi" },
    { id: "O4", condition: "Ta amfani da jadawalin ranar wasanku", action: "rubuta tsarin shiri kafin wasa daga daren da ya gabata har zuwa busar farko", standard: "da matakan da kuke iko da su kawai, numfashin kwantar da hankali, kalmomin jagorarku, da lokutan da kuka tabbatar da kocinku" },
    { id: "O5", condition: "Bayan kuskure a lokacin wasa ko horo", action: "amfani da farfaɗowa mai matakai uku: sakewa, sabuntawa da sake mai da hankali", standard: "kuna kammala dukkan matakai uku kafin wasa na gaba, kuma kuna barin nazarin kuskuren har bayan wasan" },
    { id: "O6", condition: "Idan aka ba ku alamomin da ke nuna damuwa ta wuce fargaba", action: "gane alamomin gargaɗi da faɗin wanda za a tuntuɓa, har da 988 da 911", standard: "kuna ambaton aƙalla mutane biyu da kuka amince da su, da lambar da ta dace don matsalar gaggawa ta ƙwaƙwalwa (crisis) da ta haɗari (emergency)" }
  ],
  chapters: [
    {
      name: "Babi na 1: Natsuwa da mai da hankali",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fahimtar fargabar ranar wasa",
          minutes: 4,
          goal: "Lura da alamomin fargabarku, ku ɗauke su a matsayin ƙarfin da za ku iya sarrafawa.",
          text: [
            "Kafin babban wasa, zuciyarku tana bugawa da sauri, hannayenku suna iya yin zufa, cikinku kuma yana iya kaɗawa. Wannan jikinku ne yake shirya don yin ƙwazo. Kaɗan daga ciki yana taimakawa; idan ya yi yawa, yana iya sa ku takura ko ku yi gaggawa.",
            "Kowa yana jin haka, har da ƙwararrun 'yan wasa. Dabarar ba ita ce sa fargaba ta ɓace ba, a'a, ita ce lura da ita da sauko da ita zuwa matakin da zai taimake ku.",
            "Ku fara da lura. Me kuke ji a jikinku, wane tunani ne yake zuwa, kuma yaushe suke farawa? Rubuta su yana sa sarrafa su ya fi sauƙi."
          ],
          words: [["Fargaba", "yadda jiki yake amsawa da kansa kafin wani abu mai muhimmanci: saurin bugun zuciya, zufan hannu, kaɗawar ciki."], ["Matakin zafin jiki (arousal level)", "yawan zafin jini da kuke ji, daga natsuwa sosai zuwa tashin hankali sosai."]],
          slides: [
            { title: "Fargaba abu ne na yau da kullum", bullets: ["Saurin bugun zuciya, zufan hannu, kaɗawar ciki", "Jikinku ne yake shiryawa", "Ƙwararrun 'yan wasa ma suna jin ta"] },
            { title: "Dabarar", bullets: ["Ba sai fargaba ta ɓace ba", "Daidai yawan da ya dace da ku"] },
            { title: "Ku fara da lura", bullets: ["Me nake ji a jikina?", "Wane tunani ne yake zuwa?", "Yaushe suke farawa?"] }
          ],
          tryIt: "Ku tuna babban wasanku na ƙarshe. Ku rubuta alamomin jiki uku da tunani biyu da kuka yi kafin wasan ya fara, da lokacin da suka fara.",
          youCanNow: "lura da alamomin fargabarku da bayyana su.",
          quickCheck: [
            { objective: "O1", q: "Mene ne kaɗawar ciki kafin wasa?", options: ["Alamar cewa kada ku buga wasa", "Alamar cewa ba ku da ƙarfi", "Jikinku ne yake shirya don yin ƙwazo", "Alamar cewa ba ku da lafiya"], answer: 2, why: "Waɗannan alamomin jiki jikinku ne yake shiryawa; dabarar ita ce sarrafa su." },
            { objective: "O1", q: "Kuna son fara sarrafa fargabarku. Me za ku fara yi?", options: ["Ku rubuta abin da kuke ji, kuke tunani, da lokacin da yake farawa", "Ku yi ƙoƙarin sa fargabar ta ɓace", "Ku ƙyale ta gaba ɗaya", "Ku tsallake motsa jiki na shiri (warm-up)"], answer: 0, why: "Lura da rubutawa suna sa sarrafa fargaba ya fi sauƙi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Numfashin akwati: farfaɗowa cikin daƙiƙa 60",
          minutes: 5,
          goal: "Yi amfani da numfashin akwati don kwantar da jikinku cikin kusan minti ɗaya.",
          text: [
            "Numfashi a hankali yana ɗaya daga cikin hanyoyi mafi sauri na kwantar da jiki. Numfashin akwati (box breathing) mai sauƙi ne: ku shaƙi iska har ƙidaya huɗu, ku riƙe har huɗu, ku fitar da ita har huɗu, ku riƙe har huɗu. Ku maimaita sau huɗu.",
            "Kuna iya yin sa a kan benci, a layin jefa ƙwallo kyauta (free-throw) da gajeriyar ƙidaya, a ɗakin canja kaya, ko kafin jarabawa. Ku yi atisayensa lokacin da kuke cikin natsuwa, don ya yi aiki lokacin da kuke jin fargaba.",
            "Idan riƙe numfashi bai yi muku daɗi ba, ku bar riƙewar, ku shaƙi iska a hankali kawai, ku fitar da ita a hankali fiye da haka. Ku tsaya idan kun ji jiri."
          ],
          steps: ["Ku shaƙi iska ta hanci har ƙidaya 4.", "Ku riƙe har 4.", "Ku fitar da iska a hankali har 4.", "Ku riƙe har 4.", "Ku maimaita sau 4."],
          words: [["Numfashin akwati (box breathing)", "shaƙar iska, riƙewa, fitar da iska da riƙewa da ƙidaya iri ɗaya, kamar gefe huɗu na akwati."]],
          slides: [
            { title: "Numfashin akwati", bullets: ["Shaƙa 4", "Riƙe 4", "Fitar 4", "Riƙe 4"] },
            { title: "Inda za a yi amfani da shi", bullets: ["Benci ko ɗakin canja kaya", "Kafin jefa ƙwallo kyauta ko serve", "Kafin jarabawa"] },
            { title: "Shawarwari", bullets: ["Ku yi atisaye lokacin natsuwa", "Ku bar riƙewa idan ba ta yi daɗi ba", "Ku tsaya idan kun ji jiri"] }
          ],
          tryIt: "Ku yi numfashin akwati sau huɗu yanzu. Ku auna yadda kuke jin takura daga 1 zuwa 10, kafin da bayan.",
          youCanNow: "amfani da numfashin akwati don kwantar da jikinku cikin kusan minti ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Sau nawa darasin ya ce a yi numfashin akwati?", options: ["Sau ɗaya", "Sau goma", "Sau huɗu", "Sau ashirin"], answer: 2, why: "Ku shaƙa 4, ku riƙe 4, ku fitar 4, ku riƙe 4, ku maimaita sau huɗu." },
            { objective: "O2", q: "Kuna jin jiri a lokacin numfashin akwati. Me za ku yi?", options: ["Ku ƙara tsawon riƙe numfashi", "Ku tsaya", "Ku yi numfashi da sauri", "Ku ci gaba har sau goma kuma"], answer: 1, why: "Darasin ya ce ku tsaya idan kun ji jiri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kalmomin jagora da maganar zuci",
          minutes: 5,
          goal: "Rubuta kalmomin jagora uku, ku mayar da mummunar maganar zuci zuwa umarni masu amfani.",
          text: [
            "Maganar zuci (self-talk) ita ce abin da kuke faɗa wa kanku a cikin kanku. \"Kada ka kuskure\" yana sa hoton kuskure a zuciyarku. \"Saki a hankali, bi ta har ƙarshe\" yana faɗa wa jikinku abin da zai yi.",
            "Kalmomin jagora (cue words) kalma ɗaya ce zuwa uku da suke nuna inda hankalinku zai je: \"ido sama\", \"ƙafa da sauri\", \"wasa na gaba\", \"ƙarfi da tsayi\". Ku zaɓi kalmomi game da abin da kuke iko da shi, ba game da sakamakon wasa ba.",
            "Mataimakin AI zai iya taimakawa. Ku gwada: \"Ni ɗan wasan volleyball ne mai yin serve. Idan ina jin fargaba ina tunanin 'kada in buga serve cikin raga'. Ka ba ni gajerun kalmomin jagora biyar da suke faɗa mini abin da zan yi a maimakon haka.\" Ku zaɓi waɗanda suka dace da ku."
          ],
          steps: ["Ku rubuta wani mummunan tunani da kuke yawan yi.", "Ku tambayi kanku: me nake son jikina ya yi a maimakon haka?", "Ku mayar da shi kalmomi 1-3.", "Ku zaɓi kalmomin jagora uku, ku yi atisayen faɗin su."],
          words: [["Maganar zuci (self-talk)", "kalmomin da kuke faɗa wa kanku a cikin kanku."], ["Kalmar jagora (cue word)", "gajeriyar kalma ko jimla da take nuna wa hankalinku abin da za a yi."]],
          slides: [
            { title: "Maganar zuci tana tsara aiki", bullets: ["\"Kada ka kuskure\" -> hoton kuskure", "\"Saki a hankali\" -> tana faɗin abin da za ku yi"] },
            { title: "Kalmomin jagora masu kyau", bullets: ["Kalmomi 1-3", "Game da abin da kuke iko da shi", "\"Ido sama\" \"Ƙafa da sauri\" \"Wasa na gaba\""] },
            { title: "AI zai iya taimakawa", bullets: ["Ku ba shi mummunan tunaninku", "Ku nemi gajerun kalmomin \"yi wannan\" guda 5", "Ku ajiye waɗanda suka dace da ku"] }
          ],
          tryIt: "Ku rubuta wani mummunan tunani ɗaya da kuke yi a lokacin wasa. Ku yi amfani da mataimakin AI don samun kalmomin jagora biyar da suke faɗa muku abin da za ku yi a maimakon haka. Ku zaɓi mafi kyau guda uku.",
          youCanNow: "rubuta kalmomin jagora da mayar da mummunar maganar zuci zuwa umarni masu amfani.",
          quickCheck: [
            { objective: "O3", q: "Mece ce kalmar jagora?", options: ["Dogon jawabi kafin wasa", "Kalma game da sakamakon wasa", "Kalmar da abokin hamayya yake faɗa", "Kalma ɗaya zuwa uku da suke nuna inda hankalinku zai je"], answer: 3, why: "Kalmomin jagora gajerun jimloli ne kamar \"ido sama\" da suke nuna inda hankalinku zai je." },
            { objective: "O3", q: "Kafin bugun fenareti kuna yawan tunanin \"kada in kuskure\". Me za ku canja shi zuwa?", options: ["\"Kada in sake kuskure\"", "\"Taɓa ƙwallo da kyau, bi ta har ƙarshe\"", "\"Za mu sha kashi idan na kuskure\"", "\"Ina fata ta shiga\""], answer: 1, why: "Maganar zuci mai amfani tana faɗa wa jikinku abin da zai yi, ba abin da zai guje wa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Natsuwa da mai da hankali",
        questions: [
          { objective: "O1", q: "Kafin babban wasa zuciyarku tana bugawa da sauri. Wannan yana nufin:", options: ["Akwai wani abu da ya same ku", "Ya kamata ku daina", "Jikinku yana shirya don yin ƙwazo", "Ba ku da ƙwarewa isasshiya"], answer: 2, why: "Fargaba amsar jiki ce ta yau da kullum kafin lokuta masu muhimmanci." },
          { objective: "O1", q: "Mene ne burin da ake da shi game da fargaba?", options: ["Sauko da ita zuwa matakin da zai taimake ku", "Sa ta ɓace gaba ɗaya", "Ƙyale ta koyaushe", "Ƙara girmanta"], answer: 0, why: "Wata fargaba tana taimakawa; dabarar ita ce sarrafa yawanta." },
          { objective: "O2", q: "Mene ne ƙidayar numfashin akwati?", options: ["Shaƙa 1, fitar 10", "Shaƙa 10, riƙe 10", "Numfashi da sauri kawai", "Shaƙa 4, riƙe 4, fitar 4, riƙe 4"], answer: 3, why: "Ƙidaya iri ɗaya kamar gefen akwati." },
          { objective: "O3", q: "Wace ce kalmar jagora mai amfani?", options: ["\"Kada ka ɓata\"", "\"Ƙafa da sauri\"", "\"Kada ka kuskure\"", "\"Koyaushe ina kasawa\""], answer: 1, why: "Tana faɗa wa jikinku abin da zai yi." },
          { objective: "O2", q: "Yaushe ya kamata ku yi atisayen numfashin akwati?", options: ["A babban wasa kaɗai", "Lokacin natsuwa, don ya yi aiki lokacin da kuke jin fargaba", "Kada ku taɓa yi", "Da dare kaɗai"], answer: 1, why: "Atisaye lokacin natsuwa yana shirya dabarar don lokacin matsi." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsare-tsare, farfaɗowa da neman taimako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina tsarin shiri kafin wasa",
          minutes: 5,
          goal: "Rubuta tsarin shiri kafin wasa mai lokuta da matakan da kuke iko da su.",
          text: [
            "Tsarin shiri (routine) jerin matakai ne da kuke yi iri ɗaya kafin kowane wasa. Yana ba zuciyarku wani abu da ta saba da shi da za ta riƙe, don ku ji kun shirya ko wane ne abokin hamayya.",
            "Tsari mai sauƙi: daren da ya gabata (shirya jaka, tsarin barci), abincin ranar wasa, isowa, motsa jiki na shiri (warm-up), numfashin kwantar da hankali na minti ɗaya, kalmomin jagorarku, da mai da hankali kan aikinku na farko a wasan.",
            "Ku bar matakan su kasance game da abubuwan da kuke iko da su. Camfe-camfe ba laifi ba ne don nishaɗi, amma tsarin ya kamata ya yi aiki ko da kun manta safa ta sa'a. Ku tabbatar da lokuta da kocinku don ya dace da motsa jikin shiri na ƙungiya."
          ],
          steps: ["Ku jera abin da kuke yi daga daren da ya gabata har zuwa busar farko.", "Ku ƙara numfashin kwantar da hankali da kalmomin jagorarku.", "Ku faɗi aikinku na farko a wasan.", "Ku ajiye matakan da kuke iko da su kawai.", "Ku tabbatar ya dace da motsa jikin shiri na ƙungiyarku."],
          words: [["Tsarin shiri (routine)", "matakan da kuke maimaitawa iri ɗaya kowane lokaci."], ["Abin da kuke iko da shi", "wani abu da za ku iya zaɓa ko canjawa da kanku, kamar ƙoƙari ko shiri."]],
          slides: [
            { title: "Dalilin da yasa tsarin shiri yake aiki", bullets: ["Wani abu da aka saba da shi don riƙewa", "A shirye da kowane abokin hamayya"] },
            { title: "Tsari mai sauƙi", bullets: ["Daren da ya gabata: shirya jaka, barci", "Abincin ranar wasa da isowa", "Motsa jikin shiri, numfashin kwantar da hankali, kalmomin jagora", "Aiki na farko a wasan"] },
            { title: "Ku bar shi a hannunku", bullets: ["Yana aiki ba tare da safa ta sa'a ba", "Ya dace da motsa jikin shiri na ƙungiya"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya mayar da jerin matakan shirinku na kafin wasa zuwa jadawalin lokaci mai tsabta, daga daren da ya gabata har zuwa busar farko. Ku gyara shi don ya dace da ainihin ranar wasanku.",
          youCanNow: "rubuta tsarin shiri kafin wasa da aka gina kan matakan da kuke iko da su.",
          quickCheck: [
            { objective: "O4", q: "Mene ne tsarin shiri kafin wasa?", options: ["Matakan da kuke yi iri ɗaya kafin kowane wasa", "Sabon shiri don kowane abokin hamayya", "Jerin layu na sa'a", "Shirin wasa na koci"], answer: 0, why: "Tsarin shiri jerin matakai ne iri ɗaya a kowane wasa, wanda yake ba zuciyarku abin da ta saba da shi." },
            { objective: "O4", q: "Tsarinku ya dogara ne kan saka wata riga ta sa'a. Me za ku yi?", options: ["Ku ƙara wasu camfe-camfe", "Ku ƙi zuwa wasa idan kun manta rigar", "Ku tabbatar tsarin yana aiki da matakan da kuke iko da su", "Ku nemi koci ya kawo wata riga ta ajiya"], answer: 2, why: "Ku bar matakan su kasance game da abubuwan da kuke iko da su, don tsarin ya yi aiki ko ta yaya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Farfaɗowa bayan kuskure",
          minutes: 5,
          goal: "Yi amfani da farfaɗowa mai matakai uku don wucewa daga kuskure a lokacin wasa.",
          text: [
            "Kowane ɗan wasa yana yin kuskure. Abin da yake da muhimmanci shi ne yadda kuke saurin komawa wasa na gaba. Yawan tunani kan kuskure sau da yawa yana jawo na gaba.",
            "Farfaɗowa mai matakai uku: 1. Sakewa: wani motsi na jiki da yake cewa \"ya wuce\", kamar goge hannayenku, taɓa takalminku ko fitar da numfashi. 2. Sabuntawa: numfashi ɗaya a hankali. 3. Sake mai da hankali: ku faɗi kalmar jagorarku don wasa na gaba.",
            "Bayan wasan, ba a lokacinsa ba, ku waiwayi kuskuren don ku koya daga gare shi tare da kocinku ko bidiyon wasan. A lokacin, aikinku ɗaya tak shi ne wasa na gaba."
          ],
          steps: ["Sakewa: motsi ɗaya na jiki da yake nufin \"ya wuce\".", "Sabuntawa: numfashi ɗaya a hankali.", "Sake mai da hankali: ku faɗi kalmar jagorarku ta wasa na gaba.", "Ku koya daga gare shi bayan wasan, ba a lokacinsa ba."],
          words: [["Farfaɗowa (reset)", "ɗan gajeren tsari don share zuciyarku da shiryawa don lokaci na gaba."], ["Tunanin wasa na gaba", "mai da hankali kan abin da yake zuwa, ba abin da ya riga ya faru ba."]],
          slides: [
            { title: "Kuskure yana faruwa", bullets: ["Yawan tunani a kansa yana jawo na gaba", "Saurin farfaɗowa shi ne mai muhimmanci"] },
            { title: "Farfaɗowa mai matakai uku", bullets: ["1. Sakewa: motsin jiki na \"ya wuce\"", "2. Sabuntawa: numfashi ɗaya a hankali", "3. Sake mai da hankali: kalmar jagora ta wasa na gaba"] },
            { title: "Ku koya daga baya", bullets: ["Ku yi nazari bayan wasan", "Tare da kocinku ko bidiyon wasa"] }
          ],
          tryIt: "Ku zaɓi motsin sakewarku da kalmar jagorarku ta wasa na gaba. A horonku na gaba, ku yi amfani da farfaɗowa mai matakai uku bayan kowane kuskure, ku ƙirga sau nawa kuka yi amfani da ita.",
          youCanNow: "amfani da farfaɗowa mai matakai uku don wucewa da sauri daga kuskure.",
          quickCheck: [
            { objective: "O5", q: "Mene ne matakin sakewa a farfaɗowa bayan kuskure?", options: ["Yin gardama da alƙalin wasa", "Maimaita kuskuren a cikin kanku", "Faɗa wa abokan wasa abin da ya lalace", "Motsi na jiki da yake cewa \"ya wuce\""], answer: 3, why: "Sakewa motsi ne na jiki kamar goge hannayenku ko taɓa takalminku." },
            { objective: "O5", q: "Yanzu ƙwallon da aka ba ku ta faɗi daga hannunku. Mene ne aikinku a yanzu?", options: ["Ku yi tunanin dalilin da yasa ya faru", "Ku yi sakewa, ku ja numfashi ɗaya a hankali, ku faɗi kalmar jagorarku ta wasa na gaba", "Ku kalli maimaitawar bidiyo", "Ku nemi a fitar da ku"], answer: 1, why: "A lokacin, aikinku ɗaya tak shi ne wasa na gaba; ku koya daga gare shi bayan wasan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idan ya wuce fargaba: neman taimako",
          minutes: 5,
          goal: "Gane alamomin da ke nuna damuwa tana buƙatar taimako na gaske, da faɗin wanda za a tuntuɓa.",
          text: [
            "Dabarun tunani suna taimakawa da matsin yau da kullum. Amma wani lokaci damuwa ta fi haka girma: kuna jin baƙin ciki yawancin kwanaki, kun daina sha'awar abubuwan da kuke so, ba kwa iya barci ko cin abinci, kun fid da rai, ko kuna tunanin cutar da kanku. Wannan ba rauni ba ne, kuma ba abin da atisayen numfashi ko AI chatbot zai iya gyarawa ba ne.",
            "Ku nemi mutum na gaske: iyaye ko wani babba da kuka amince da shi, kocinku, mai kula da lafiyar 'yan wasa (athletic trainer), mai ba da shawara a makaranta (school counselor), likitan ƙungiya, ko ƙwararren mai kula da lafiyar ƙwaƙwalwa mai lasisi. Makarantu da jami'o'i da yawa suna ba da shawara kyauta.",
            "Idan ku ko wani da kuka sani yana cikin matsalar gaggawa ta ƙwaƙwalwa ko yana tunanin kashe kansa a Amurka, ku kira ko ku tura tes zuwa 988, ko ku yi hira a 988lifeline.org. Kyauta ne kuma a buɗe yake awa 24, kowace rana. A lokacin haɗari, ku kira 911."
          ],
          steps: ["Ku lura da alamomin da ke nuna ya wuce fargaba.", "Ku faɗa wa babba da kuka amince da shi, koci, mai kula da lafiyar 'yan wasa ko mai ba da shawara.", "Ku nemo hidimar ba da shawara ta makarantarku.", "A matsalar gaggawa ta ƙwaƙwalwa: ku kira ko ku tura tes zuwa 988. A haɗari: 911."],
          words: [["Ƙwararren mai kula da lafiyar ƙwaƙwalwa mai lasisi", "mai ba da shawara, masanin halayyar ɗan adam (psychologist) ko likitan jinyar ƙwaƙwalwa (therapist) da aka horar kuma yake da lasisi."], ["988 Lifeline", "layin taimako kyauta na Amurka don masu tunanin kashe kansa da masu matsalar gaggawa ta ƙwaƙwalwa (Suicide and Crisis Lifeline): kira, tes ko hira awa 24, kowace rana."]],
          slides: [
            { title: "Ya wuce fargaba idan", bullets: ["Baƙin ciki yawancin kwanaki", "Rashin sha'awa, rashin barci ko cin abinci", "Fid da rai ko tunanin cutar da kai"] },
            { title: "Ku yi magana da mutum na gaske", bullets: ["Babba da kuka amince da shi, koci, mai kula da lafiyar 'yan wasa", "Mai ba da shawara a makaranta ko likitan ƙungiya", "Ƙwararren mai kula da lafiyar ƙwaƙwalwa mai lasisi"] },
            { title: "A matsalar gaggawa ta ƙwaƙwalwa", bullets: ["Ku kira ko ku tura tes zuwa 988 (Amurka), kyauta, awa 24 kowace rana", "Ku yi hira a 988lifeline.org", "Haɗari: 911"] }
          ],
          sources: [{ name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Aikin ƙarshe: ku rubuta katin tsarin shiri kafin wasa mai shafi ɗaya, tare da numfashin kwantar da hankali, kalmomin jagora uku da farfaɗowa mai matakai uku bayan kuskure. A ƙasa, ku rubuta sunayen mutane biyu da za ku iya magana da su, da yadda za ku tuntuɓi hidimar ba da shawara ta makarantarku. Ku nuna wa kocinku katin.",
          youCanNow: "amfani da tsarinku na ƙarfin tunani da sanin lokacin da inda za ku nemi taimako na gaske.",
          quickCheck: [
            { objective: "O6", q: "Wace ce alamar da ke nuna damuwa tana buƙatar taimako na gaske?", options: ["Jin fid da rai yawancin kwanaki", "Fargaba kafin babban wasa", "Saurin bugun zuciya a layin farawa", "Zufan hannu a layin jefa ƙwallo kyauta"], answer: 0, why: "Jin baƙin ciki ko fid da rai yawancin kwanaki ya wuce fargaba ta yau da kullum." },
            { objective: "O6", q: "Wani abokinku ya tura muku tes cewa yana tunanin kashe kansa. A Amurka, me za ku yi?", options: ["Ku ɓoye shi a sirri", "Ku ce masa ya gwada numfashin akwati", "Ku tambayi AI chatbot abin da za ku yi", "Ku faɗa wa babba da kuka amince da shi nan take ku ba shi 988, ko ku kira 911 idan yana cikin haɗari yanzu"], answer: 3, why: "Dole ne mutum na gaske ya taimaka; 988 layin taimakon gaggawa ne, 911 kuma na haɗari ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsare-tsare, farfaɗowa da neman taimako",
        questions: [
          { objective: "O4", q: "Me yasa 'yan wasa suke amfani da tsarin shiri kafin wasa?", options: ["Don tsallake motsa jikin shiri", "Don burge 'yan kallo", "Don guje wa koci", "Don ba zuciya abin da ta saba da shi, su ji sun shirya"], answer: 3, why: "Tsarin shiri yana samar da hanyar da aka saba da ita zuwa jin shiri." },
          { objective: "O4", q: "Wane mataki na tsarin shiri ne kuke iko da shi?", options: ["Numfashinku na kwantar da hankali na minti ɗaya", "Hukuncin alƙalin wasa", "Yanayin sararin samaniya", "'Yan wasan ɗayan ƙungiyar"], answer: 0, why: "Ku ne kuke zaɓar yin numfashinku na kwantar da hankali." },
          { objective: "O5", q: "Mene ne mataki na 1 na farfaɗowa bayan kuskure?", options: ["Gardama da alƙalin wasa", "Maimaita shi a cikin kanku", "Sakewa: motsi na jiki da yake nufin \"ya wuce\"", "Barin wasan"], answer: 2, why: "Sakewa ta jiki tana taimaka muku ku bar shi ya wuce." },
          { objective: "O5", q: "Yaushe ya kamata ku yi nazarin kuskure?", options: ["A tsakiyar wasa na gaba", "Kada ku taɓa yi", "Lokacin da koci yake magana", "Bayan wasan, tare da kocinku ko bidiyon wasa"], answer: 3, why: "A lokacin wasa, aikinku ɗaya tak shi ne wasa na gaba." },
          { objective: "O6", q: "Wani abokin wasa ya faɗa muku cewa ya fid da rai kuma yana maganar cutar da kansa. Me za ku yi?", options: ["Ku ce masa ya yi numfashin akwati", "Ku faɗa wa babba da kuka amince da shi nan take ku ba shi 988 Lifeline", "Ku ɓoye shi a sirri", "Ku ce masa ya tambayi chatbot"], answer: 1, why: "Wannan yana buƙatar mutane na gaske da taimakon gaggawa yanzu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙarfin Tunani da Mai da Hankali a Wasanni",
    questions: [
      { objective: "O1", q: "Zufan hannu kafin wasa:", options: ["Alama ce ta daina", "Koyaushe haɗari ne", "Alama ce ta fargaba ta yau da kullum", "Karya doka ne"], answer: 2, why: "Jikinku ne yake shiryawa." },
      { objective: "O1", q: "Shin ƙwararrun 'yan wasa suna jin fargaba?", options: ["Eh, suna sarrafa ta", "Ba sa taɓa ji", "Sababbin 'yan wasa kaɗai", "A horo kaɗai"], answer: 0, why: "Kowa yana jin fargaba; ƙwararru suna sarrafa ta." },
      { objective: "O1", q: "Mataki na farko na sarrafa fargaba shi ne:", options: ["Lura da abin da kuke ji da tunani", "Ƙyale ta", "Yin ihu", "Tsallake wasan"], answer: 0, why: "Ba za ku iya sarrafa abin da ba ku lura da shi ba." },
      { objective: "O2", q: "Numfashin akwati yana da sassa nawa daidai da juna?", options: ["Biyu", "Uku", "Huɗu", "Biyar"], answer: 2, why: "Shaƙa, riƙe, fitar, riƙe." },
      { objective: "O2", q: "Idan riƙe numfashi bai yi muku daɗi ba, kuna iya:", options: ["Ƙara tsawon riƙewa", "Barin riƙewar ku fitar da iska a hankali", "Daina numfashi", "Yin numfashi da sauri sosai"], answer: 1, why: "Numfashi a hankali ba tare da riƙewa ba har yanzu yana kwantar da ku." },
      { objective: "O3", q: "Maganar zuci ita ce:", options: ["Magana da alƙalin wasa", "Waƙar ƙungiya", "Rubutu a intanet", "Abin da kuke faɗa wa kanku a cikin kanku"], answer: 3, why: "Muryar cikinku ce." },
      { objective: "O3", q: "Wace maganar zuci ce ta fi taimakawa?", options: ["\"Kada ka kuskure\"", "\"Koyaushe ina kasawa\"", "\"Saki a hankali, bi ta har ƙarshe\"", "\"Babu sauran fata\""], answer: 2, why: "Tana faɗa wa jikinku abin da zai yi." },
      { objective: "O3", q: "Kalmomin jagora masu kyau suna mai da hankali kan:", options: ["Sakamakon wasa", "'Yan kallo", "Ɗayan ƙungiyar", "Abin da kuke iko da shi"], answer: 3, why: "Ku sarrafa abin da za ku iya sarrafawa." },
      { objective: "O3", q: "Ta yaya AI zai iya taimakawa da kalmomin jagora?", options: ["Zai iya ba da shawarar gajerun jimlolin \"yi wannan\" da za ku zaɓa daga ciki", "Zai iya buga wasa a madadinku", "Zai iya gano cutar damuwa (anxiety)", "Ba zai iya taimakawa ko kaɗan ba"], answer: 0, why: "AI yana da kyau wajen tsara kalmomi; ku ne kuke zaɓar abin da ya dace." },
      { objective: "O4", q: "Tsarin shiri kafin wasa ya kamata ya yi aiki ko da:", options: ["Kun ci wasa", "Kun manta safa ta sa'a", "Koci ya tafi", "Ana ruwan sama"], answer: 1, why: "An gina shi ne kan matakan da kuke iko da su, ba sa'a ba." },
      { objective: "O4", q: "Da wa ya kamata ku tabbatar da lokutan tsarinku?", options: ["Abokin hamayyarku", "Baƙo a intanet", "Kocinku", "Ba kowa"], answer: 2, why: "Dole ne ya dace da motsa jikin shiri na ƙungiya." },
      { objective: "O5", q: "Mene ne tunanin wasa na gaba?", options: ["Mai da hankali kan abin da yake zuwa, ba abin da ya faru ba", "Maimaita kuskure a zuciya", "Ɗora laifi kan abokan wasa", "Kallon allon maki"], answer: 0, why: "Wasa na gaba ne kaɗai za ku iya canjawa." },
      { objective: "O5", q: "Mene ne mataki na 2 na farfaɗowa bayan kuskure?", options: ["Gardama", "Barin fili", "Duba kafofin sada zumunta", "Numfashi ɗaya a hankali"], answer: 3, why: "Sakewa, sabuntawa da numfashi, sake mai da hankali." },
      { objective: "O5", q: "Mene ne mataki na 3 na farfaɗowa bayan kuskure?", options: ["Yin ihu", "Sake mai da hankali da kalmar jagorarku ta wasa na gaba", "Maimaita kuskuren", "Kallon 'yan kallo"], answer: 1, why: "Kalmar jagora tana nuna muku aiki na gaba." },
      { objective: "O6", q: "Wace ce alamar da ke nuna damuwa ta wuce fargaba?", options: ["Kaɗawar ciki kafin wasa", "Jin baƙin ciki yawancin kwanaki da rashin sha'awa", "Jin daɗi da ɗokin wasa", "Saurin bugun zuciya kafin a fara wasa"], answer: 1, why: "Baƙin ciki mai ɗorewa yana buƙatar taimako na gaske." },
      { objective: "O6", q: "Shin AI chatbot zai iya maye gurbin mai ba da shawara?", options: ["Eh", "A ƙarshen mako kaɗai", "Ga 'yan wasa kaɗai", "A'a, ku yi magana da mutum na gaske"], answer: 3, why: "Damuwa mai tsanani tana buƙatar mutumin da aka horar." },
      { objective: "O6", q: "Da wa za ku iya magana game da damuwa mai tsanani?", options: ["Babba da kuka amince da shi, koci, mai kula da lafiyar 'yan wasa ko mai ba da shawara a makaranta", "Ku kaɗai", "Ba kowa", "Abokan hamayya"], answer: 0, why: "Waɗannan mutanen za su iya taimakawa ko su haɗa ku da taimako." },
      { objective: "O6", q: "A Amurka, lambar layin taimakon gaggawa ta ƙwaƙwalwa ita ce:", options: ["411", "311", "988", "0"], answer: 2, why: "Ku kira ko ku tura tes zuwa 988 don Suicide and Crisis Lifeline." },
      { objective: "O6", q: "Yaushe 988 Lifeline yake a buɗe?", options: ["Ranakun aiki kaɗai", "Da dare kaɗai", "A lokacin kakar wasa kaɗai", "Awa 24, kowace rana (24/7)"], answer: 3, why: "Kyauta ne kuma a buɗe yake awa 24 a rana, kowace rana." },
      { objective: "O6", q: "A lokacin haɗari da wani yake cikin hatsari yanzu, za ku kira:", options: ["Kocinku kaɗai", "911", "Aboki daga baya", "Ba kowa"], answer: 1, why: "911 na haɗarin da yake faruwa yanzu ne." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Jadawalin lokaci kafin wasa",
        objective: "O4",
        notYet: "Matakai ba su da lokuta, ko sun dogara ne kan abubuwan da ɗan wasan ba shi da iko a kansu.",
        meets: "Jadawalin lokaci daga daren da ya gabata har zuwa busar farko, da matakan da ake iko da su kawai, kuma an tabbatar da shi da koci.",
        exceeds: "Yana faɗin aikin farko na ɗan wasan a wasan, kuma ya dace daidai da motsa jikin shiri na ƙungiya."
      },
      {
        name: "Numfashin kwantar da hankali",
        objective: "O2",
        notYet: "Babu numfashin kwantar da hankali, ko ƙidayar ba ta da sarari.",
        meets: "Numfashin akwati (ko numfashi a hankali ba tare da riƙewa ba) yana kan katin a wani lokaci ƙayyadadde, kuma an yi atisayensa a horo biyu.",
        exceeds: "Yana da gajeren salo don lokuta a cikin wasa, kamar a layin jefa ƙwallo kyauta."
      },
      {
        name: "Kalmomin jagora",
        objective: "O3",
        notYet: "Kalmomin jagora ba su kai uku ba, ko suna game da sakamakon wasa ko abin da za a guje wa.",
        meets: "Kalmomin jagora uku, kowacce kalma ɗaya zuwa uku, game da abin da ɗan wasan yake iko da shi.",
        exceeds: "Kowace kalmar jagora tana maye gurbin wani mummunan tunani da aka ambata wanda ɗan wasan yake yawan yi."
      },
      {
        name: "Farfaɗowa bayan kuskure",
        objective: "O5",
        notYet: "Ɗaya ko fiye daga cikin matakai uku ya ɓace.",
        meets: "An rubuta sakewa, sabuntawa da sake mai da hankali da motsin ɗan wasan na kansa da kalmar jagorarsa.",
        exceeds: "Ɗan wasan ya ce ya yi amfani da ita a horo, kuma ya rubuta abin da zai yi nazari bayan wasan."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala katin tsarin shiri kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na ma'aunin rubric",
      "Masu koyo da suka ce har yanzu suna amfani da tsarinsu da farfaɗowa bayan kuskure bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da za su iya faɗin wanda za su tuntuɓa da 988 Lifeline a lokacin binciken biyo baya",
      "Masu horarwa da suka ce sun ƙara numfashin kwantar da hankali ko farfaɗowa bayan kuskure na ƙungiya a horo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda ko rubutu a waya don katin tsarin shiri",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini), ba dole ba ne",
      "Lokacin wasanku na gaba da shirin motsa jikin shiri na ƙungiyarku",
      "Bayanan tuntuɓar mai ba da shawara na makarantarku ko mai kula da lafiyar 'yan wasa",
      "Kusan minti 60, tare da atisaye a horon ƙungiya biyu"
    ],
    facilitatorNotes: [
      "Ku faɗa a sarari cewa waɗannan dabarun ƙwazo ne, ba magani ba; kada ku yi ƙoƙarin ba 'yan wasa shawarar jinya a cikin rukuni.",
      "Kafin Darasi na 6, ku gano hidimar ba da shawara ta makarantarku, ku raba ta tare da 988 da 911.",
      "Idan ɗan wasa ya ce yana cikin matsalar gaggawa ta ƙwaƙwalwa ko yana tunanin cutar da kansa, ku zauna tare da shi, ku sami babba da aka amince da shi ko ƙwararre nan take.",
      "Ku yi atisayen numfashin akwati tare lokacin natsuwa; ku faɗa wa 'yan wasa su bar riƙewa ko su tsaya idan sun ji jiri.",
      "Ku bar katunan tsarin shiri a sirri, sai dai idan ɗan wasan ya zaɓi ya nuna wa koci."
    ]
  }
};
