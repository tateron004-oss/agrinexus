"use strict";

// Koach Learn course, Hausa (ha) translation of shared/emotional-intelligence.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "emotional-intelligence-ha",
  lang: "ha",
  translationOf: "emotional-intelligence",
  category: "Athletes",
  name: "Basirar Sanin Zuciya (Emotional Intelligence)",
  skills: "Faɗin abin da kuke ji, Gane abubuwan da ke tayar muku da hankali, Tsayawa kafin ku mayar da martani, Saurare da tausayawa, Warware rikici da maganar \"Ina jin\", Bayarwa da karɓar ra'ayi kan aiki",
  outcome: "faɗin abin da kuke ji, tsayawa kafin ku mayar da martani, saurare har wani ya ji kun fahimce shi, da gudanar da magana mai wuya a wurin aiki, a ƙungiya ko a gida cikin natsuwa, da maganar \"Ina jin\" da buƙata a sarari.",
  about: [
    "Basirar sanin zuciya (emotional intelligence) ita ce gwanintar lura da yadda kuke ji da kuma sarrafa shi, da fahimtar yadda wasu ke ji. Ba ɓoye abin da kuke ji ba ne, kuma ba kasancewa mai daɗi koyaushe ba ne. Amfani ne da abin da kuke ji a matsayin bayani, domin ku zaɓi abin da za ku yi a gaba maimakon ku yi gaggawar mayar da martani.",
    "Tana da muhimmanci a ko'ina: ɗan wasa da ke karɓar horo mai tsauri, manaja da ke ba da ra'ayi kan aiki, sabon ma'aikaci da ke fuskantar abokin ciniki mai saurin fushi, shugaban masu aikin sa-kai da ke riƙe ƙungiya tare, tsohon soja da ke sabawa da aikin farar hula, wanda ya dawo gida yake sake gina amincewar iyalinsa, matashi a cikin gardama a group chat. Masu ɗaukar aiki sau da yawa suna ɗaukar waɗannan gwanintoci na mu'amala da mutane kamar yadda suke ɗaukar gwanintar fasaha.",
    "Za ku yi atisayen gwaninta shida: faɗin abin da kuke ji, gane abubuwan da ke tayar muku da hankali, tsayawa, saurare da tausayawa, warware rikici, da bayarwa da karɓar ra'ayi kan aiki. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku shirya ku yi wata magana ta gaske da kuka daɗe kuna jinkirtawa (da abokin ƙungiya, abokin aiki, wani a iyali ko aboki). Kafin ta, ku rubuta abin da kuke ji da abin da ya tayar da shi. A cikinta, ku tsaya kafin ku amsa, ku maimaita abin da ɗayan ya faɗa da kalmominku, kuma ku yi amfani da magana ɗaya irin wannan: \"Ina jin ... idan ... saboda ... Za mu iya ...?\" Bayan ta, ku rubuta abin da ya tafi daidai, da abu ɗaya da za ku yi daban.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da masu horar da su, manajoji da sababbin ma'aikata, shugabannin masu aikin sa-kai, tsofaffin sojoji da ke sabawa da aikin farar hula, mutanen da suka dawo gida suke sake gina amincewar iyalinsu, da matasa.",
    startingPoint: "Suna jin motsin zuciya mai ƙarfi kuma suna mu'amala da mutane kowace rana. Da yawa suna bayyana abin da suke ji da \"lafiya\", \"ba daɗi\", \"ba komai\" ko \"na yi fushi\" kawai, suna saurin mayar da martani idan wani abu ya tayar musu da hankali, kuma ra'ayi kan aiki da magana mai wuya suna damun su.",
    gap: "Masu ɗaukar aiki suna ɗaukar gwanintar mu'amala da mutane kamar gwanintar fasaha, kuma martani na gaggawa yana lalata ƙungiyoyi, aiki da iyalai. Masu koyo suna buƙatar faɗin abin da suke ji da sarrafa shi, saurare da tausayawa, da gudanar da rikici da ra'ayi kan aiki cikin natsuwa, domin su zaɓi abin da za su yi a gaba maimakon su yi gaggawar mayar da martani.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Atisaye yana amfani da yanayi na gaske amma masu sauƙin sarrafawa; babu wanda dole ne ya faɗi bayanan sirrinsa",
      "Ba magani ba ne (therapy); ana tura masu koyo da ke cikin damuwa mai ɗorewa zuwa mai ba da shawara (counselor) ko kwas ɗin lafiyar ƙwaƙwalwa da damuwa",
      "Lokaci: darussa na kusan minti biyar, da gajerun atisaye na kowace rana"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Sau uku a rana ɗaya", action: "faɗin abin da kuke ji da kalma madaidaiciya, da alamar jiki da ke tare da shi", standard: "ba tare da amfani da \"lafiya\", \"ba daɗi\", \"ba komai\" ko \"na yi fushi\" ba" },
    { id: "O2", condition: "Idan kuka duba martanin ƙarfi da kuka yi kwanan nan", action: "gane abubuwa biyu da ke tayar muku da hankali, da abin da kowanne ya taɓa, kamar girmamawa ko adalci", standard: "tare da rubutaccen shirin martani ga kowanne" },
    { id: "O3", condition: "A lokacin da zuciya ta yi zafi", action: "amfani da dabarar tsayawa ta STOP don zaɓar martaninku", standard: "kafin ku yi magana ko ku aika saƙo" },
    { id: "O4", condition: "Idan wani ya faɗa muku matsalarsa", action: "maimaita abin da yake ji da kalmominku, da yin tambaya a buɗe", standard: "har ya ce kun fahimce shi" },
    { id: "O5", condition: "Idan kuna da matsala ta gaske da wani", action: "faɗin abin da ke damun ku da maganar \"Ina jin\" cikin natsuwa, da buƙata a sarari", standard: "ta amfani da tsarin: ina jin, idan, saboda, za mu iya" },
    { id: "O6", condition: "Idan kuna bayarwa ko karɓar ra'ayi kan aiki", action: "ba da ra'ayi a fili cikin kirki, da karɓar ra'ayi mai tsauri ba tare da kare kai ba", standard: "kuna bayyana ayyuka, ba halin mutum ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sanin kanku da sarrafa kanku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Faɗin abin da kuke ji",
          minutes: 5,
          goal: "Faɗin motsin zuciyarku da kalma madaidaiciya, ba \"lafiya\" ko \"na yi fushi\" kawai ba.",
          text: [
            "Basirar sanin zuciya tana farawa da sanin kai: sanin abin da kuke ji a daidai lokacin da kuke jin sa. Da yawa daga cikinmu muna amfani da 'yan kalmomi kaɗan, kamar lafiya, ba daɗi, ba komai ko na yi fushi. Amma \"fushi\" yana iya zama kunya, jin an raina ku, damuwa ko gajiya.",
            "Jikinku sau da yawa yana sani da farko. Muƙamuƙi da ya matse, fuska da ta yi zafi, dunƙule hannu, ƙulli a ciki ko bugun zuciya da sauri alamu ne. Idan kuka lura da ɗaya, ku tambayi kanku: \"Me nake ji yanzu?\" sannan ku nemi kalma madaidaiciya.",
            "Faɗin abin da kuke ji a sarari yana taimaka muku ku kwantar da shi ku yanke abin da za ku yi. Ɗan wasan da ya san \"Ina jin haushin kaina, ba na mai horarwa ba\" yana gudanar da atisaye daban da wanda kawai yake jin fushi da kowa."
          ],
          steps: ["Ku lura da alamar jiki: muƙamuƙi da ya matse, fuska mai zafi, ƙulli a ciki.", "Ku tambaya: me nake ji yanzu?", "Ku nemi kalma madaidaiciya fiye da lafiya, ba daɗi ko fushi.", "Ku faɗa wa kanku: \"Ina jin ...\""],
          words: [["Basirar sanin zuciya (emotional intelligence)", "gwanintar lura da yadda kuke ji da sarrafa shi, da fahimtar yadda wasu ke ji."], ["Sanin kai (self-awareness)", "sanin abin da kuke ji da dalilinsa, a lokacin da yake faruwa."]],
          slides: [
            { title: "Basirar sanin zuciya", bullets: ["Ku lura da yadda kuke ji ku sarrafa shi", "Ku fahimci yadda wasu ke ji", "Ku zaɓi martaninku maimakon gaggawa"] },
            { title: "Jikinku yana sani da farko", bullets: ["Muƙamuƙi da ya matse, fuska mai zafi, dunƙule hannu", "Ƙulli a ciki, bugun zuciya da sauri"] },
            { title: "Ku wuce \"fushi\"", bullets: ["Kunya, jin an raina ku, damuwa, gajiya?", "Haushi, firgici, jin an ba ku kunya, kishi?", "Kalma madaidaiciya tana taimaka muku ku kwantar da shi"] }
          ],
          tryIt: "Sau uku a yau, ku tsaya ku rubuta kalma ɗaya madaidaiciya ta abin da kuke ji, da alamar jiki da ke tare da ita (misali: \"firgici - zuciya na bugawa da sauri kafin aikina\"). Ku yi ƙoƙari kada ku yi amfani da lafiya, ba daɗi, ba komai ko fushi.",
          youCanNow: "lura da alamun jiki da faɗin motsin zuciyarku da kalma madaidaiciya.",
          quickCheck: [
            { objective: "O1", q: "Wace kalma ce ta fi bayyana jin ba daɗi kafin babban jarabawa?", options: ["Lafiya", "Firgici", "Ba komai", "Ba daɗi"], answer: 1, why: "\"Firgici\" yana faɗin ainihin abin da ake ji, kuma hakan yana taimaka muku ku sarrafa shi." },
            { objective: "O1", q: "Kun lura ƙirjinku ya matse kuma zuciyarku tana bugawa da sauri kafin aikinku. Me za ku yi?", options: ["Ku ƙyale shi, ku yi fatan ya tafi", "Ku faɗa wa kowa cewa lafiya kuke", "Ku faɗi abin da kuke ji da kalma madaidaiciya, kamar damuwa", "Ku ƙi zuwa aikin"], answer: 2, why: "Faɗin abin da kuke ji daga alamar jiki shi ne mataki na farko na sarrafa shi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gane abubuwan da ke tayar muku da hankali",
          minutes: 5,
          goal: "Gane yanayi biyu da ke sa ku yi martani mai ƙarfi.",
          text: [
            "Abin da ke tayar da hankali (trigger) shi ne yanayi, kalma ko aiki da ke tayar da motsin zuciya mai ƙarfi da sauri: katse muku magana, gyara ku a gaban wasu, wani ya makara, wani irin salon murya, rashin nasara a wasa da aka kusa ci, jin an ƙyale ku.",
            "Abubuwan da ke tayar da hankali sau da yawa suna da alaƙa da abubuwan da ke da muhimmanci a gare ku, kamar girmamawa, adalci ko tsaro, ko kuma da abubuwan da suka faru a baya. Ga wanda ya dawo daga gidan yari, yi masa magana kamar ba kome ba ne yana iya yi masa ciwo sosai. Ga tsohon soja, ƙara mai ƙarfi kwatsam tana iya yi. Wannan halin ɗan Adam ne, ba aibi ba ne.",
            "Idan kun san abubuwan da ke tayar muku da hankali, ƙarfinsu yana raguwa. Kuna iya shiryawa tun da wuri: \"Idan manajana ya gyara ni a gaban ƙungiya, zan ja numfashi, in ce 'na gane', sannan in nemi mu yi magana daga baya.\""
          ],
          steps: ["Ku tuna lokuta biyu na ƙarshe da kuka yi martani mai ƙarfi.", "Ku rubuta abin da ya faru kafin hakan.", "Ku rubuta abin da ya taɓa: girmamawa, adalci, tsaro, a saurare ku?", "Ku rubuta shiri na gaba."],
          words: [["Abin da ke tayar da hankali (trigger)", "yanayi ko aiki da ke tayar da motsin zuciya mai ƙarfi da sauri."], ["Tsari (pattern)", "abin da ke faruwa akai-akai ta hanya iri ɗaya."]],
          slides: [
            { title: "Mene ne abin da ke tayar da hankali", bullets: ["Yana tayar da motsin zuciya mai ƙarfi da sauri", "Katse magana, gyara a gaban jama'a, ƙyalewa", "Abokan ƙungiya masu makara, wani irin salon murya"] },
            { title: "Me yasa suke yin ciwo sosai", bullets: ["Suna taɓa girmamawa, adalci ko tsaro", "Ko abubuwan da suka faru a baya", "Wannan halin ɗan Adam ne, ba aibi ba"] },
            { title: "Ku shirya tun da wuri", bullets: ["Ku san manyan abubuwan da ke tayar muku da hankali", "Ku yanke martaninku tun kafin lokaci", "\"Ja numfashi, ce 'na gane', yi magana daga baya\""] }
          ],
          tryIt: "Ku rubuta manyan abubuwa biyu da ke tayar muku da hankali. Ga kowanne, ku rubuta abin da yake taɓawa (girmamawa, adalci, tsaro, a saurare ku), da jimla ɗaya ta yadda za ku mayar da martani a gaba.",
          youCanNow: "faɗin abubuwan da ke tayar muku da hankali, ganin abin da suke taɓawa, da shirya martani mafi kyau tun da wuri.",
          quickCheck: [
            { objective: "O2", q: "Abubuwan da ke tayar da hankali sau da yawa suna da alaƙa da me?", options: ["Abubuwan da ke da muhimmanci a gare ku, kamar girmamawa ko adalci", "Yanayin sararin samaniya", "Sa'a kawai", "Yunwa kaɗai"], answer: 0, why: "Abubuwan da ke tayar da hankali yawanci suna taɓa wani abu da kuke ƙauna sosai." },
            { objective: "O2", q: "Idan ana yi muku magana a kan maganarku a taro, kullum kuna fushi. Me za ku yi?", options: ["Ku daina zuwa taro", "Ku riga ku yi wa wasu magana a kan tasu", "Ku yi fatan ba zai sake faruwa ba", "Ku rubuta shi a matsayin abin da ke tayar muku da hankali, ku shirya yadda za ku amsa a gaba"], answer: 3, why: "Shiryawa tun da wuri yana rage ƙarfin abin da ke tayar da hankali." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsayawa kafin ku mayar da martani",
          minutes: 5,
          goal: "Amfani da dabarar STOP don zaɓar martaninku lokacin da zuciya ta yi zafi.",
          text: [
            "Tsakanin abin da ya faru da abin da kuke yi, akwai ɗan gibi. Kame kai shi ne faɗaɗa wannan gibi. Wata dabara mai sauƙi ita ce STOP (kalmar Turanci ce mai ma'anar \"tsaya\"): Stop, ku tsaya. Take a breath, ku ja numfashi. Observe, ku lura da abin da kuke ji da abin da ke faruwa. Proceed, ku ci gaba da zaɓi.",
            "A lokacin, 'yan numfashi a hankali, ƙirga zuwa goma, ko cewa \"Ba ni minti ɗaya\" yana ba ku lokaci. Idan zuciyarku ta yi zafi sosai da ba za ku iya magana da kyau ba, ba laifi ba ne ku ce \"Ina son mu yi magana kan wannan, amma ina buƙatar minti goma tukuna\" sannan ku dawo. Dawowar ita ce babban sashe.",
            "Tsayawa ba ɗaya ba ne da danne abin da kuke ji. Har yanzu kuna magance abin da kuke ji; kuna yin haka ne kawai lokacin da za ku iya tunani a sarari. 'Yan wasa suna kiran wannan natsuwa; ɗan wasa mai natsuwa yana yanke shawara mafi kyau a ƙarshen wasa."
          ],
          steps: ["Stop (ku tsaya): kada ku yi magana ko ku aika saƙo tukuna.", "Take a breath (ku ja numfashi) a hankali, ko sau uku.", "Observe (ku lura): me nake ji? Me ke faruwa da gaske?", "Proceed (ku ci gaba): ku zaɓi abin da za ku faɗa ko ku yi, ko ku nemi ɗan hutu ku dawo."],
          words: [["Kame kai (self-control)", "zaɓar abin da kuke yi ko da kuna jin motsin zuciya mai ƙarfi."], ["Natsuwa (composure)", "kasancewa cikin kwanciyar hankali da tunani a sarari a lokacin matsi."]],
          slides: [
            { title: "Ku faɗaɗa gibin", bullets: ["Wani abu ya faru", "Ku tsaya", "Sannan ku zaɓi martaninku"] },
            { title: "STOP", bullets: ["Stop: ku tsaya", "Take a breath: ku ja numfashi", "Observe: ku lura", "Proceed: ku ci gaba da zaɓi"] },
            { title: "Kuna buƙatar ƙarin lokaci?", bullets: ["\"Ina buƙatar minti goma, sannan mu yi magana.\"", "Koyaushe ku dawo kan maganar"] },
            { title: "Tsayawa ba danne zuciya ba ne", bullets: ["Ku magance abin da kuke ji", "Lokacin da za ku iya tunani a sarari"] }
          ],
          tryIt: "Ku tuna wani saƙo ko magana da ta sa ku fushi kwanan nan. Ku bi matakan STOP a takarda: abin da kuka ji, abin da ke faruwa da gaske, da abin da za ku faɗa yanzu. Idan ya sake faruwa da gaske, ku yi amfani da STOP kafin ku amsa.",
          youCanNow: "amfani da STOP don tsayawa ku zaɓi martaninku maimakon gaggawa.",
          quickCheck: [
            { objective: "O3", q: "Me harafin S a cikin STOP yake nufi?", options: ["Stop (ku tsaya)", "Shout (ku yi ihu)", "Smile (ku yi murmushi)", "Sleep (ku yi barci)"], answer: 0, why: "STOP yana farawa da tsayawa kafin ku mayar da martani." },
            { objective: "O3", q: "Saƙon tes na rashin kunya ya zo, kuma kun fara rubuta amsa ta fushi. Me za ku yi?", options: ["Ku aika da sauri kafin ku canja ra'ayi", "Ku tsaya, ku ja numfashi, ku yanke abin da za ku faɗa bayan kun natsu", "Ku tura saƙon ga abokai", "Ku toshe mutumin nan take"], answer: 1, why: "Tsayawa yana ba ku damar zaɓar martaninku maimakon gaggawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sanin kanku da sarrafa kanku",
        questions: [
          { objective: "O1", q: "Basirar sanin zuciya galibi ita ce:", options: ["Ɓoye duk abin da kuke ji", "Kasancewa mai daɗi koyaushe", "Lura da sarrafa yadda kuke ji, da fahimtar yadda wasu ke ji", "Kasancewa mafi ƙarar murya a ɗaki"], answer: 2, why: "Amfani ne da abin da kuke ji a matsayin bayani don zaɓar martaninku." },
          { objective: "O1", q: "Wace kalma ce ta fi bayyana abin da ake ji daidai?", options: ["Ba daɗi", "Kunya", "Lafiya", "Ko oho"], answer: 1, why: "Kalma madaidaiciya kamar kunya tana faɗa muku abin da ke faruwa da gaske." },
          { objective: "O2", q: "Mene ne abin da ke tayar da hankali (trigger)?", options: ["Yanayin da ke tayar da motsin zuciya mai ƙarfi da sauri", "Wani irin motsa jiki", "Lokacin natsuwa", "Sunan matsayin aiki"], answer: 0, why: "Abubuwan da ke tayar da hankali suna tayar da motsin zuciya mai ƙarfi da sauri." },
          { objective: "O3", q: "A cikin STOP, me harafin T yake nufi?", options: ["Talk loudly (ku yi magana da ƙarfi)", "Text back fast (ku mayar da tes da sauri)", "Tell everyone (ku faɗa wa kowa)", "Take a breath (ku ja numfashi)"], answer: 3, why: "Stop, Take a breath, Observe, Proceed: ku tsaya, ku ja numfashi, ku lura, ku ci gaba." },
          { objective: "O3", q: "Kun yi fushi sosai da ba za ku iya magana da kyau ba. Mene ne mataki mai kyau?", options: ["Ku faɗi duk abin da ya zo muku", "Kada ku sake yi musu magana har abada", "Ku nemi minti goma, sannan ku dawo ku yi magana", "Ku saka maganar a intanet"], answer: 2, why: "Ɗan hutu, sannan dawowa, yana ba ku damar magana a sarari." }
        ]
      }
    },
    {
      name: "Babi na 2: Fahimtar wasu da aiki tare da su",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saurare da tausayawa",
          minutes: 5,
          goal: "Saurare ku maimaita abin da aka faɗa domin ɗayan ya ji kun fahimce shi.",
          text: [
            "Tausayawa (empathy) tana nufin fahimtar abin da wani ke ji da dalilinsa, ko da ku za ku ji daban. Ba dole ne ku yarda da shi ba kafin ku fahimce shi.",
            "Yawancin mutane suna sauraro ne don su amsa. Saurare da tausayawa yana nufin sauraro don fahimta. Ku ajiye waya, ku kalli mutumin, ku bar shi ya gama. Sannan ku maimaita: ku faɗi abin da kuka ji, da yadda kuka lura yake ji. \"Wato kana ta ɗaukar ƙarin lokutan aiki kuma babu wanda ya lura. Wannan yana da ban haushi sosai.\"",
            "Sannan ku yi tambaya a buɗe: \"Me zai taimaka?\" ko \"Me ya faru bayan haka?\" Ku guji gaggawar ba da shawara, kwatanta (\"wannan ba komai ba ne, ni wata rana...\") ko cewa \"ka huce\". Mai horarwa, ma'aikacin hidimar abokan ciniki, shugaban masu aikin sa-kai da iyaye duk suna samun ci gaba sosai idan mutane suka ji an saurare su da farko."
          ],
          steps: ["Ku ajiye abubuwan da ke ɗauke hankali, ku kalli mutumin.", "Ku bar shi ya gama ba tare da katse shi ba.", "Ku maimaita abin da kuka ji da yadda yake ji: \"Kamar dai ...\"", "Ku yi tambaya a buɗe: \"Me zai taimaka?\""],
          words: [["Tausayawa (empathy)", "fahimtar abin da wani ke ji da dalilinsa."], ["Maimaitawa (reflect)", "faɗin abin da kuka ji da kalmominku."], ["Tambaya a buɗe (open question)", "tambayar da ba za a iya amsawa da \"e\" ko \"a'a\" kawai ba."]],
          slides: [
            { title: "Tausayawa", bullets: ["Ku fahimci abin da suke ji da dalilinsa", "Ba dole ne ku yarda ba"] },
            { title: "Ku saurara don fahimta", bullets: ["Ku ajiye waya, ku kalli mutumin", "Ku bar shi ya gama", "Ku maimaita: \"Kamar dai hakan ya ba ka haushi.\""] },
            { title: "Sannan ku tambaya", bullets: ["\"Me zai taimaka?\"", "\"Me ya faru bayan haka?\""] },
            { title: "Ku guji", bullets: ["Gaggawar ba da shawara", "\"Wannan ba komai ba ne, ni wata rana...\"", "\"Ka huce\""] }
          ],
          tryIt: "A maganarku ta gaske ta gaba, ku gwada maimaitawa ɗaya (\"Kamar dai ka ji ...\") da tambaya ɗaya a buɗe. Bayan haka, ku rubuta abin da ɗayan ya faɗa da yadda ya karɓa.",
          youCanNow: "sauraro don fahimta, maimaita abin da wani ya faɗa da yadda yake ji, da yin tambaya a buɗe.",
          quickCheck: [
            { objective: "O4", q: "Me ake nufi da maimaita abin da aka faɗa (reflect)?", options: ["Ba da shawara nan take", "Canja magana zuwa labarinku", "Faɗin da kalmominku abin da ɗayan yake ji da dalilinsa", "Maimaita kalmar ƙarshe da ya faɗa"], answer: 2, why: "Maimaitawa tana nuna wa mutumin cewa kun fahimce shi." },
            { objective: "O4", q: "Abokin aiki ya ce: \"Na gaji da yin duk wani share-share.\" Me za ku fara faɗa?", options: ["\"Ka huce, ba wani babban abu ba ne.\"", "\"Ni ina yin fiye da kai.\"", "\"Ya kamata ka faɗa wa shugaba.\"", "\"Kamar dai kana jin ba a raba aikin daidai ba. Me ke faruwa?\""], answer: 3, why: "Maimaita abin da yake ji da yin tambaya a buɗe suna nuna tausayawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Warware rikici da maganar \"Ina jin\"",
          minutes: 5,
          goal: "Faɗin abin da ke damun ku da maganar \"Ina jin\" cikin natsuwa, da buƙata a sarari.",
          text: [
            "Rikici abu ne na yau da kullum a kowace ƙungiya, kowane iyali da kowane kasuwanci. Idan aka gudanar da shi da kyau, yana warware matsaloli. Idan aka gudanar da shi da rashin kyau, yana lalata amincewa.",
            "Maganar \"Kai/Ke\" tana kama da ɗora laifi: \"Kai kullum ka bar ni in rufe shago.\" Mutane suna kare kansu su daina sauraro. Maganar \"Ina jin\" (a Turanci \"I\" statement) tana bayyana ɓangarenku: \"Ina jin matsi idan na rufe ni kaɗai dare uku a jere, saboda motar bas ta wuce ni. Za mu iya yin bi da bi?\"",
            "Tsarin shi ne: Ina jin [abin da kuke ji] idan [wani aiki takamaimai] saboda [dalilin da yake da muhimmanci]. Za mu iya [buƙata]? Ku tsaya kan matsala ɗaya, ku bayyana ayyuka ba hali ba (\"ka makara sau biyu\", ba \"kai malalaci ne\" ba), kuma ku saurari ɓangarensu da gwanintar darasin da ya gabata. Ku nemi mafita da ku duka za ku iya karɓa."
          ],
          steps: ["Ku zaɓi matsala ɗaya.", "Ku rubuta: Ina jin ... idan ... saboda ... Za mu iya ...?", "Ku zaɓi lokacin natsuwa da wuri na sirri.", "Ku faɗa, sannan ku saurara ku maimaita ɓangarensu.", "Ku amince kan mataki ɗaya na gaba."],
          words: [["Maganar \"Ina jin\" (\"I\" statement)", "hanyar faɗin yadda wani abu ke shafar ku ba tare da ɗora wa ɗayan laifi ba."], ["Rikici (conflict)", "saɓani tsakanin mutanen da ke buƙata ko son abubuwa daban-daban."]],
          slides: [
            { title: "\"Kai\" da \"Ina jin\"", bullets: ["\"Kai kullum ka bar ni in rufe.\" (ɗora laifi)", "\"Ina jin matsi idan na rufe ni kaɗai...\" (ɓangarenku)"] },
            { title: "Tsarin", bullets: ["Ina jin [abin da kuke ji]", "idan [wani aiki takamaimai]", "saboda [dalilin da yake da muhimmanci]", "Za mu iya [buƙata]?"] },
            { title: "Ku yi adalci", bullets: ["Matsala ɗaya a lokaci ɗaya", "Ku bayyana ayyuka, ba hali ba", "Ku saurara ku maimaita ɓangarensu"] },
            { title: "Ku ƙare da mataki", bullets: ["Ku nemi mafita da ku duka za ku iya karɓa", "Ku amince kan mataki ɗaya na gaba"] }
          ],
          tryIt: "Ku tuna wata matsala ta gaske da abokin ƙungiya, abokin aiki ko wani a iyali. Ku fara rubuta ta a matsayin maganar \"Kai\", sannan ku sake rubuta ta kamar haka: \"Ina jin ... idan ... saboda ... Za mu iya ...?\" Ku karanta su biyun da babbar murya ku lura da bambancin.",
          youCanNow: "mayar da ƙorafi zuwa maganar \"Ina jin\" cikin natsuwa da buƙata a sarari, da aiki tare zuwa mataki na gaba da ku duka kuka amince da shi.",
          quickCheck: [
            { objective: "O5", q: "Wane sashe na maganar \"Ina jin\" ne buƙata a sarari?", options: ["Ina jin", "Idan", "Saboda", "Za mu iya"], answer: 3, why: "\"Za mu iya ...?\" yana neman wani canji takamaimai." },
            { objective: "O5", q: "Wani a iyalinku yana yawan duba wayarku. Me za ku faɗa?", options: ["\"Ina jin rashin kwanciyar hankali idan ana duba wayata, saboda ina son amincewa. Za mu iya magana a kai?\"", "\"Kullum kana leƙen asirina.\"", "\"Ka daina, ko kuma...\"", "Ku yi shiru ku ci gaba da jin haushi"], answer: 0, why: "Maganar \"Ina jin\" cikin natsuwa tana faɗin abin da kuke ji kuma tana neman canji ba tare da ɗora laifi ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bayarwa da karɓar ra'ayi kan aiki",
          minutes: 6,
          goal: "Ba da ra'ayi a fili cikin kirki, da karɓar ra'ayi ba tare da kare kai ba.",
          text: [
            "Ra'ayi kan aiki (feedback) yana taimaka wa mutane su girma. Ra'ayi mai kyau yana a fili, yana magana kan ayyuka, kuma yana da amfani. Maimakon \"Aiki mai kyau\" ko \"Hakan bai yi kyau ba\", ku faɗi abin da ya faru da tasirinsa: \"Taƙaitawarka a farkon taron ta sa kowa ya tsaya kan hanya.\" \"Rahoton yana da jimillar lissafi uku da ba daidai ba, don haka abokin ciniki ya kira sau biyu. Za ka iya sake duba jimillar kafin ka aika?\"",
            "Karɓar ra'ayi ya fi wuya. Abin da za ku fara ji yana iya zama son kare kanku. Ku yi amfani da STOP, ku saurari dukan maganar, ku maimaita ta, sannan ku yi tambaya: \"Za ka iya ba ni misali?\" Ku ce na gode, ko da ba ku yarda ba tukuna. Sannan ku yanke abin da za ku yi amfani da shi. 'Yan wasa da ke karɓar horo da kyau suna ci gaba mafi sauri.",
            "Idan kun yi kuskure, ku gyara dangantakar. Neman gafara na gaske yana faɗin abin da kuka yi, tasirinsa, da abin da za ku yi daban: \"Na yi maka tsawa a taro. Hakan ya ba ka kunya. A gaba zan nemi mu yi magana daga baya.\" Yanzu kun shirya don aikinku na ƙarshe."
          ],
          steps: ["Bayarwa: ku faɗi aikin takamaimai da tasirinsa.", "Ku ƙara buƙata a sarari ko godiya.", "Karɓa: ku tsaya, ku saurara sosai, ku maimaita, ku nemi misali, ku ce na gode.", "Gyara: ku faɗi abin da kuka yi, tasirinsa, da abin da za ku yi daban."],
          words: [["Ra'ayi kan aiki (feedback)", "bayani kan yadda wani ya yi aiki, da ake bayarwa domin ya inganta ko ya ci gaba da yin kyau."], ["Kare kai (defensive)", "gaggawar kare kanku daga suka maimakon sauraro."], ["Gyara (repair)", "gyara dangantaka bayan kuskure, sau da yawa da neman gafara na gaske."]],
          slides: [
            { title: "Bayar da ra'ayi", bullets: ["Aiki takamaimai + tasirinsa", "\"Taƙaitawarka ta sa mu tsaya kan hanya.\"", "Ku ƙara buƙata a sarari ko godiya"] },
            { title: "Karɓar ra'ayi", bullets: ["Ku tsaya, ku saurara sosai", "Ku maimaita, ku nemi misali", "Ku ce na gode, sannan ku yanke abin da za ku yi amfani da shi"] },
            { title: "Gyara da neman gafara na gaske", bullets: ["Abin da na yi", "Tasirin da ya yi", "Abin da zan yi daban"] }
          ],
          tryIt: "Aikin ƙarshe: ku shirya ku yi magana ɗaya da kuka daɗe kuna jinkirtawa. Kafin ta, ku rubuta abin da kuke ji da abin da ya tayar da shi. A cikinta, ku tsaya, ku maimaita abin da suka faɗa, ku yi amfani da magana ɗaya: \"Ina jin ... idan ... saboda ... Za mu iya ...?\" Bayan ta, ku rubuta abin da ya tafi daidai da abu ɗaya da za ku yi daban.",
          youCanNow: "ba da ra'ayi a fili, karɓar ra'ayi ba tare da kare kai ba, gyara kuskure, da gudanar da magana mai wuya da basirar sanin zuciya.",
          quickCheck: [
            { objective: "O6", q: "Wane ra'ayi ne yake magana kan ayyuka, ba kan mutumin ba?", options: ["\"Kai mai sakaci ne.\"", "\"Ba ka taɓa ƙoƙari ba.\"", "\"Oda biyu sun fita jiya ba tare da alama (label) ba.\"", "\"Kai ne mafi muni a ƙungiya.\""], answer: 2, why: "Ra'ayi mai kyau yana bayyana ayyuka takamaimai da za a iya canjawa." },
            { objective: "O6", q: "Mai horar da ku ya ce tsaronku (defense) bai yi ƙarfi ba a wasan ƙarshe. Me za ku fara yi?", options: ["Ku yi gardama cewa mai horarwar ya yi kuskure", "Ku saurara, ku maimaita maganar, ku nemi misali", "Ku bar ƙungiyar", "Ku ɗora laifi kan abokin ƙungiya"], answer: 1, why: "Sauraro da neman misali suna taimaka muku ku koya maimakon ku kare kanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Fahimtar wasu da aiki tare da su",
        questions: [
          { objective: "O4", q: "Tausayawa tana nufin:", options: ["Yarda da komai", "Fahimtar abin da wani ke ji da dalilinsa", "Tausaya wa kanku", "Gaggawar ba da shawara"], answer: 1, why: "Kuna iya fahimtar wani ba tare da kun yarda da shi ba." },
          { objective: "O4", q: "Abokin ƙungiya ya faɗa muku cewa yana jin an ware shi. Wace amsa ce ke nuna saurare da tausayawa?", options: ["\"Wannan ba komai ba ne, ni na fuskanci mafi muni.\"", "\"Ka huce.\"", "\"Ga abin da ya kamata ka yi...\"", "\"Kamar dai ka ji an ware ka. Me ya faru?\""], answer: 3, why: "Tana maimaita abin da yake ji kuma tana yin tambaya a buɗe." },
          { objective: "O5", q: "Wace ce maganar \"Ina jin\"?", options: ["\"Ina jin matsi idan na rufe ni kaɗai saboda motar bas ta wuce ni. Za mu iya yin bi da bi?\"", "\"Ba ka taɓa taimakawa ba.\"", "\"Kai malalaci ne sosai.\"", "\"Kowa yana ganin ka yi kuskure.\""], answer: 0, why: "Tana faɗin abin da kuke ji, aikin, dalilin da yake da muhimmanci, da buƙata." },
          { objective: "O6", q: "Wane ra'ayi ne ya fi amfani?", options: ["\"Aiki marar kyau.\"", "\"Ko oho.\"", "\"Rahoton yana da jimillar lissafi uku da ba daidai ba; don Allah ka sake duba jimillar kafin ka aika.\"", "\"Ba ka iya wannan kwata-kwata.\""], answer: 2, why: "Yana faɗin aikin takamaimai da buƙata a sarari." },
          { objective: "O6", q: "Wanne ne neman gafara na gaske?", options: ["\"Ka yi haƙuri da ka ji haushi.\"", "\"Na yi maka tsawa; hakan ya ba ka kunya; a gaba zan nemi mu yi magana daga baya.\"", "\"Ka yi haƙuri, amma kai ne ka fara.\"", "Yin shiru"], answer: 1, why: "Yana faɗin aikin, tasirinsa, da abin da zai canja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Basirar Sanin Zuciya (Emotional Intelligence)",
    questions: [
      { objective: "O1", q: "Sanin kai yana nufin:", options: ["Sanin abin da kuke ji da dalilinsa a lokacin da yake faruwa", "Tunanin kanku kaɗai", "Ƙyale abin da kuke ji", "Kallon madubi"], answer: 0, why: "Sanin kai shi ne lura da abin da kuke ji a lokacin." },
      { objective: "O1", q: "Wace ce alamar jiki ta motsin zuciya mai ƙarfi?", options: ["Riga mai tsabta", "Muƙamuƙi da ya matse ko bugun zuciya da sauri", "Batir na waya da ya cika", "Rana mai haske"], answer: 1, why: "Jikinku sau da yawa yana nuna motsin zuciya kafin ku faɗi sunansa." },
      { objective: "O1", q: "Me yasa za ku faɗi abin da kuke ji da kalma madaidaiciya?", options: ["Don ku ci gardama", "Don ku yi kama da mai hikima", "Yana taimaka muku ku kwantar da shi ku yanke abin da za ku yi", "Yana ƙara ƙarfin abin da kuke ji"], answer: 2, why: "Faɗin abin da kuke ji daidai yana taimaka muku ku sarrafa shi." },
      { objective: "O1", q: "\"Fushi\" yana iya zama a zahiri:", options: ["Sha'awar abinci", "Barci kawai", "Farin ciki", "Kunya, jin an raina ku ko damuwa"], answer: 3, why: "Fushi sau da yawa yana ɓoye wani abin da ake ji wanda ya fi daidai." },
      { objective: "O2", q: "Abubuwan da ke tayar da hankali sau da yawa suna da alaƙa da:", options: ["Abubuwan da ke da muhimmanci a gare ku, kamar girmamawa ko adalci", "Yanayin sararin samaniya kawai", "Lambobi na ka-ce-na-ce", "Kamfanin da ya yi wayarku"], answer: 0, why: "Abubuwan da ke tayar da hankali suna taɓa abubuwa kamar girmamawa, adalci ko tsaro, ko abubuwan da suka faru a baya." },
      { objective: "O2", q: "Me yasa za ku shirya martaninku ga abin da ke tayar muku da hankali tun da wuri?", options: ["Domin kada ku taɓa jin komai", "Domin ku ɗora wa wasu laifi", "Domin ƙarfin abin ya ragu kuma ku amsa da kyau", "Ba ya taimakawa"], answer: 2, why: "Shirin da aka yi cikin natsuwa yana jagorantar ku idan abin ya taso." },
      { objective: "O3", q: "A cikin STOP, harafin O yana nufin:", options: ["Order (ba da umarni)", "Observe (ku lura)", "Overreact (wuce gona da iri)", "Open your phone (buɗe wayarku)"], answer: 1, why: "Stop, Take a breath, Observe, Proceed: ku tsaya, ku ja numfashi, ku lura, ku ci gaba." },
      { objective: "O3", q: "Tsayawa kafin ku mayar da martani:", options: ["Ɗaya ne da danne zuciya har abada", "Alamar rauni ce", "Na 'yan wasa ne kawai", "Zaɓar martani ne lokacin da za ku iya tunani a sarari"], answer: 3, why: "Har yanzu kuna magance abin da kuke ji, amma a lokaci mafi kyau." },
      { objective: "O3", q: "Bayan kun nemi hutun minti goma a cikin gardama, abu mafi muhimmanci shi ne:", options: ["Ku dawo ku yi magana", "Kada ku taɓa dawowa", "Ku yi wa wasu ƙorafi", "Ku canja magana har abada"], answer: 0, why: "Hutu yana taimakawa ne kawai idan kun dawo kan maganar." },
      { objective: "O4", q: "Saurare da tausayawa yana nufin sauraro don:", options: ["Amsa da sauri", "Neman kurakurai", "Fahimta", "Jiran lokacinku na magana"], answer: 2, why: "Sauraro don fahimta yana sa mutumin ya ji an saurare shi." },
      { objective: "O4", q: "Wace ce tambaya a buɗe?", options: ["\"Lafiya kake?\"", "\"Me zai taimaka?\"", "\"Ka gama?\"", "\"Yau Talata ce?\""], answer: 1, why: "Ba za a iya amsa tambayoyi a buɗe da \"e\" ko \"a'a\" kawai ba." },
      { objective: "O4", q: "Idan wani ya faɗa muku matsalarsa, me ya kamata ku guje wa da farko?", options: ["Kallon sa", "Barin sa ya gama", "Maimaita abin da ya faɗa", "Cewa \"ka huce\""], answer: 3, why: "\"Ka huce\" yana iya sa mutane su ji an raina abin da suke ji." },
      { objective: "O5", q: "Me yasa maganar \"Kai\" sau da yawa ba ta aiki?", options: ["Ta yi gajarta sosai", "Ta yi ladabi sosai", "Tana kama da ɗora laifi, don haka mutane suna kare kansu", "Tana ɗauke da abin da ake ji"], answer: 2, why: "Ɗora laifi yana sa mutane su kare kansu su daina sauraro." },
      { objective: "O5", q: "Ku cika tsarin: Ina jin ... idan ... saboda ...", options: ["Za mu iya ...?", "Kai kullum ...", "Kowa ya sani ...", "Ba komai."], answer: 0, why: "Tsarin yana ƙarewa da buƙata a sarari." },
      { objective: "O5", q: "Magana mai kyau a lokacin rikici tana bayyana:", options: ["Halin mutum (\"kai malalaci ne\")", "Duk abin da ya taɓa lalacewa", "Jita-jita", "Ayyuka takamaimai (\"ka makara sau biyu\")"], answer: 3, why: "Ayyuka za su iya canjawa; zagin hali yana cutarwa ne kawai." },
      { objective: "O5", q: "Wane wuri ne ya dace da magana mai wuya?", options: ["Group chat", "Wuri mai natsuwa kuma na sirri", "A gaban dukan ƙungiya", "Ihu bayan rashin nasara a wasa"], answer: 1, why: "Natsuwa da sirri suna taimaka wa mutanen biyu su saurara." },
      { objective: "O6", q: "Ra'ayi mai kyau kan aiki shi ne:", options: ["A fili, kan ayyuka, kuma mai amfani", "Marar sarari kuma gama-gari", "Kan halin mutum", "Wanda ake bayarwa ne kawai lokacin fushi"], answer: 0, why: "Ra'ayi a fili yana faɗa wa mutane ainihin abin da za su ci gaba da shi ko su canja." },
      { objective: "O6", q: "Kun sami ra'ayi mai tsauri daga mai horar da ku ko shugabanku. Martani na farko mai kyau shi ne:", options: ["Gardama nan take", "Fita daga wurin", "Saurare, maimaita maganar, da neman misali", "Ƙyale shi"], answer: 2, why: "Sauraro da yin tambayoyi suna taimaka muku ku koya daga gare shi." },
      { objective: "O6", q: "Neman gafara na gaske ya ƙunshi:", options: ["Uzuri", "Ɗora wa ɗayan laifi", "\"Ka yi haƙuri da kake jin haka\"", "Abin da kuka yi, tasirinsa, da abin da za ku yi daban"], answer: 3, why: "Waɗannan sassa uku suna gyara amincewa." },
      { objective: "O6", q: "Gyara bayan kuskure yana taimakawa saboda:", options: ["Yana tabbatar da cewa ku ne kuka yi daidai", "Yana sake gina amincewa a dangantakar", "Yana kawo ƙarshen duk wani rikici na gaba", "Doka ce ta tilasta shi"], answer: 1, why: "Gyara yana nuna girmamawa kuma yana sake gina amincewa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      4,
      7,
      10,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An faɗi abin da ake ji da abin da ya tayar da shi",
        objective: "O1",
        notYet: "An yi amfani da kalma marar sarari kamar \"ba daɗi\" ko \"fushi\", ko ba a rubuta abin da ya tayar da shi ba.",
        meets: "An rubuta kalma madaidaiciya ta abin da ake ji, da abin da ya tayar da shi, kafin maganar.",
        exceeds: "An kuma faɗi abin da ya taɓa, kamar girmamawa ko adalci."
      },
      {
        name: "An tsaya kafin martani",
        objective: "O3",
        notYet: "An yi gaggawar martani ko an ɗaga murya.",
        meets: "An tsaya aƙalla sau ɗaya kafin amsawa a lokaci mai wuya.",
        exceeds: "An nemi ɗan hutu kuma an dawo an gama maganar."
      },
      {
        name: "An maimaita abin da aka faɗa",
        objective: "O4",
        notYet: "Ba a tabbatar da abin da ɗayan yake nufi ba.",
        meets: "An maimaita yadda ɗayan yake ji aƙalla sau ɗaya.",
        exceeds: "Ɗayan ya ce ya ji an fahimce shi."
      },
      {
        name: "Maganar \"Ina jin\"",
        objective: "O5",
        notYet: "An yi amfani da maganar \"Kai\" mai ɗora laifi.",
        meets: "An yi amfani da cikakkiyar magana ɗaya: \"Ina jin ... idan ... saboda ... Za mu iya ...?\"",
        exceeds: "Buƙatar ta kai ga mataki na gaba a sarari da ɓangarorin biyu suka amince da shi."
      },
      {
        name: "Bita bayan maganar",
        objective: "O6",
        notYet: "Ba a rubuta bita ba.",
        meets: "An rubuta abin da ya tafi daidai da abu ɗaya da za a yi daban.",
        exceeds: "An nemi ra'ayin ɗayan kuma an rubuta shi cikin natsuwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka ce sun yi maganar da suka daɗe suna jinkirtawa cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun tsaya kafin martani a lokaci mai wuya",
      "Masu horarwa, manajoji ko ma'aikatan shirin da suka ce aiki tare ya inganta ko fashewar fushi ta ragu",
      "Masu koyo da suka fara wani kwas na Koach Learn kan mu'amala da mutane cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda ko manhajar rubutu don kalmomin abin da ake ji, abubuwan da ke tayar da hankali da shirin",
      "Jerin kalmomin abin da ake ji (ba dole ba)",
      "Kusan minti 60 gaba ɗaya, da lokacin maganar ta gaske"
    ],
    facilitatorNotes: [
      "Ku fara atisaye bibbiyu da yanayin da aka ƙirƙira; babu wanda dole ne ya faɗi labarinsa na sirri.",
      "Ku nuna misalin maimaitawa da maganar \"Ina jin\" da kanku kafin ku nemi masu koyo su gwada.",
      "Ku tunatar da masu koyo cewa maganar da ta shafi haɗari ko cin zarafi tana buƙatar taimako daga waje, ba magana ta mutum biyu kaɗai ba.",
      "Idan mai koyo yana kama da yana cikin damuwa mai ɗorewa, ku tura shi zuwa mai ba da shawara (counselor), kwas ɗin lafiyar ƙwaƙwalwa da damuwa, ko layin taimakon gaggawa na yankinku.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
