"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-cyberbullying-safety.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-cyberbullying-safety-ha",
  lang: "ha",
  translationOf: "youth-cyberbullying-safety",
  category: "Youth",
  name: "Kare Kai daga Cin Zali ta Intanet",
  skills: "Gane cin zali ta intanet, Kwantar da hankali da rashin rama wa, Ajiye shaida, Toshewa da kai rahoto a manhajoji, Faɗa wa babba amintacce da makaranta, Taimaka wa wani a matsayin mai kare wanda ake zalunta",
  outcome: "gane cin zali ta intanet, mayar da martani ba tare da ƙara muni ba, ajiye shaida, toshe mutumin da kai rahotonsa a manhajar, faɗa wa babba amintacce da makaranta, sanin lokacin da abin ya zama na 'yan sanda, da taimaka wa aboki da ake kai wa hari.",
  about: [
    "Cin zali ta intanet (cyberbullying) shi ne cin zalin da ake yi ta waya, kwamfuta da wasanni: saƙonnin tes, hirar ƙungiya (group chat), kafofin sada zumunta, sharhi, dandalin tattaunawa da wasannin intanet. Domin yana iya bin ku har gida kuma yana yaɗuwa da sauri, yana iya sa ku ji kamar babu mafita. Akwai abubuwa da yawa da za ku iya yi, kuma ba sai kun fuskance shi ku kaɗai ba.",
    "Wannan kwas na matasa ne, da iyaye, masu horarwa, masu ba da jagora da ma'aikatan matasa da ke taimaka musu. Za ku koyi mene ne cin zali ta intanet, yadda ake mayar da martani lafiya, yadda ake ajiye shaida, yadda ake toshewa da kai rahoto, wa za ku faɗa wa, da yadda ake taimaka wa wani.",
    "Idan kun taɓa jin ba ku da aminci ko kuna tunanin cutar da kanku, ku faɗa wa babba amintacce nan take. A Amurka za ku iya kira ko tura tes zuwa 988 a kowane lokaci. Idan wani yana cikin haɗari a yanzu, ku kira 911 (ko lambar gaggawa ta ƙasarku).",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi tsarinku na kare kai daga cin zali ta intanet: yadda ake ajiye shaida a wayarku (matakan ɗaukar hoton allo da inda za ku ajiye su), inda maɓallan toshewa da kai rahoto suke a manhajoji biyu da kuka fi amfani da su, sunayen manya amintattu biyu da za ku faɗa wa (da mutum ɗaya a makaranta), abin da za ku faɗa musu, lokacin da za ku je wurin 'yan sanda, da abu ɗaya da za ku yi don tallafa wa aboki da ake kai wa hari.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da ke amfani da waya, kafofin sada zumunta, hirar ƙungiya da wasannin intanet, da iyaye, masu horarwa, masu ba da jagora da ma'aikatan matasa da ke taimaka musu.",
    startingPoint: "Suna amfani da manhajoji da wasanni kowace rana, kuma sun ga ko sun fuskanci saƙonni masu muni a intanet. Da yawa suna mayar da martani cikin fushi, suna tura rubuce-rubuce masu cutarwa, suna goge saƙonni kafin su ajiye shaida, ko ba sa faɗa wa babba.",
    gap: "Cin zali ta intanet yana iya bin matasa har gida, ya yaɗu da sauri, kuma ya cutar da yanayin zuciyarsu, lafiyarsu da karatunsu. Sanin yadda ake mayar da martani a natse, ajiye shaida, toshewa da kai rahoto, faɗa wa babban da ya dace, gane lokacin da abin ya zama na 'yan sanda da tallafa wa aboki yana taimaka musu su kasance lafiya kuma kada su fuskance shi su kaɗai.",
    constraints: [
      "Batu ne mai taɓa zuciya: masu koyo da ke jin ba su da aminci ko sun fid da rai ana nuna musu babba amintacce, 988 a Amurka, ko 911 a lokacin gaggawa",
      "Kada a taɓa ajiye ko tura hotunan tsiraici na matasa, ko da a matsayin shaida",
      "Menu na manhajoji suna canjawa; masu koyo suna bincika cibiyar taimako ko ta tsaro ta kowace manhaja",
      "Sirri: ba a raba ainihin abubuwa masu cutarwa a aji",
      "Gajerun darussa da kalmomi masu sauƙi don matasa da manyan da ke taimaka musu"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wasu yanayi na intanet", action: "gane waɗanda suke cin zali ta intanet da waɗanda suke saɓani na yau da kullum", standard: "kuna bayyana dalili ta amfani da niyya, maimaitawa da fifikon iko" },
    { id: "O2", condition: "Idan wani ya aiko muku da saƙo mai cutarwa", action: "nisanta kanku maimakon mayar da martani, rama wa ko tura rubutun", standard: "kuna ambaton abubuwa uku da ba za ku yi ba da matakai na gaba da za ku ɗauka" },
    { id: "O3", condition: "Idan cin zali ta intanet ya faru", action: "ajiye shaida da hotunan allo da ɗan littafin bayani mai sauƙi kafin ku toshe komai", standard: "kuna nuna sunan mai amfani, rana da lokaci, kuma ba ku taɓa ajiye ko tura hotunan tsiraici na matashi ba" },
    { id: "O4", condition: "A manhajoji biyu da kuka fi amfani da su", action: "nemo zaɓuɓɓukan toshewa da kai rahoto da duba saitunan sirrinku", standard: "ba tare da taimakon kowa ba" },
    { id: "O5", condition: "Idan ana cin zalinku ko na aboki a intanet", action: "faɗa wa babba amintacce tare da shaidarku da yanke lokacin da abin zai je makaranta ko 'yan sanda", standard: "kuna ambaton manya amintattu biyu da mutum ɗaya a makaranta" },
    { id: "O6", condition: "Idan ana kai wa wani hari", action: "tallafa masa a matsayin mai kare wanda ake zalunta da rubuta tsarinku na kare kai", standard: "tare da dukkan sassan tsarin a ciki" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gane cin zali ta intanet da mayar da martani lafiya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne cin zali ta intanet (da abin da ba shi ba)",
          minutes: 5,
          goal: "Bambanta cin zali ta intanet da saɓani na yau da kullum.",
          text: [
            "Cin zali ta intanet shi ne amfani da fasaha don cutar, kunyata, yi wa barazana ko kai wa wani hari, yawanci fiye da sau ɗaya. Misalai: saƙonni masu muni ko na barazana, yaɗa jita-jita, sanya hotuna ko bidiyo masu kunyatarwa, buɗe asusun bogi don yi wa wani ba'a, cire wani daga hirar ƙungiya da gangan don a cutar da shi, ko raba saƙonni ko hotunan sirri ba tare da izini ba.",
            "Yawanci yana faruwa ta saƙonnin tes, kafofin sada zumunta, sharhi, saƙonnin kai tsaye (DM), dandalin tattaunawa da wasanni. Rubuce-rubucen intanet suna iya zama na dindindin kuma a fili sai dai idan an kai rahotonsu an cire su, kuma suna iya kaiwa ga mutane da yawa da sauri.",
            "Ba kowace gardama a intanet ce cin zali ba. Saɓani na sau ɗaya tsakanin mutane daidai da juna rikici ne kawai. Cin zali shi ne cutar da wani da gangan, sau da yawa akai-akai, kuma sau da yawa da fifikon iko: mutane mafi yawa, shahara mafi yawa, ko bayanan sirri da za a yi amfani da su a kansa. Wasu cin zali ta intanet, kamar barazana ko tsangwama saboda launin fata, addini, jinsi, sha'awar jima'i ko nakasa, suna iya saɓa wa doka."
          ],
          steps: ["Ku tambayi kanku: shin an yi wannan ne don a cutar, a kunyata ko a yi barazana?", "Ku tambayi kanku: shin yana faruwa fiye da sau ɗaya, ko yana yaɗuwa?", "Ku tambayi kanku: shin akwai fifikon iko (ƙungiya, shahara, bayanan sirri)?", "Idan haka ne, ku ɗauke shi a matsayin cin zali ta intanet ku yi amfani da matakan wannan kwas."],
          words: [["Cin zali ta intanet (cyberbullying)", "amfani da waya, kwamfuta ko wasanni don cutar, kunyata, yi wa barazana ko kai wa wani hari."], ["Tsangwama (harassment)", "halin da ake maimaitawa da ke ɓata wa wani rai, tsoratar da shi ko yi masa barazana."], ["Rikici (conflict)", "saɓani tsakanin mutane; ba ɗaya yake da cin zali ba."]],
          slides: [
            { title: "Yadda cin zali ta intanet yake", bullets: ["Saƙonni masu muni ko na barazana, jita-jita", "Sanya hotuna ko bidiyo masu kunyatarwa", "Asusun bogi, cire wani da gangan", "Raba saƙonni ko hotunan sirri"] },
            { title: "Inda yake faruwa", bullets: ["Saƙonnin tes da hirar ƙungiya", "Kafofin sada zumunta, sharhi, DM", "Dandalin tattaunawa da wasannin intanet"] },
            { title: "Cin zali ne ko rikici?", bullets: ["An yi don a cutar?", "Ana maimaitawa ko yana yaɗuwa?", "Akwai fifikon iko?"] },
            { title: "Wasu daga ciki laifi ne a doka", bullets: ["Barazana", "Tsangwama saboda launin fata, addini, jinsi, sha'awar jima'i ko nakasa"] }
          ],
          sources: [
            { name: "MedlinePlus: Bullying (cin zali)", url: "https://medlineplus.gov/bullying.html" },
            { name: "StopBullying.gov: What Is Cyberbullying (mene ne cin zali ta intanet)", url: "https://www.stopbullying.gov/cyberbullying/what-is-it" }
          ],
          tryIt: "Ku karanta waɗannan yanayi uku, ku sa wa kowanne alama cin zali ko rikici: (1) aboki ya saɓa da ra'ayinku game da wani wasa sau ɗaya; (2) wata ƙungiya tana ci gaba da sanya asusun bogi da ke yi wa ɗan ajinsu ba'a; (3) wani yana ci gaba da aiko muku da barazana bayan kun ce ya daina. Ku rubuta dalilin kowanne.",
          youCanNow: "gane cin zali ta intanet da bambanta shi da saɓani na yau da kullum.",
          quickCheck: [
            { objective: "O1", q: "Me yawanci ke sa abu ya zama cin zali ta intanet maimakon rikici?", options: ["An yi shi don a cutar, sau da yawa ana maimaitawa, kuma sau da yawa da fifikon iko", "Abokai biyu sun saɓa sau ɗaya", "Wani ya sanya ra'ayin da ba ku so", "Wasa ya ƙare da rashin nasara"], answer: 0, why: "Cin zali shi ne cutar da wani da gangan, sau da yawa akai-akai, sau da yawa da fifikon iko." },
            { objective: "O1", q: "Ana cire wani ɗan aji daga hirar ƙungiya da gangan, kowane mako, don a cutar da shi. Me za ku kira shi?", options: ["Rikici na yau da kullum", "Ba abin damuwa ba ne", "Cin zali ta intanet", "Wasa"], answer: 2, why: "Cire wani da gangan don a cutar da shi, akai-akai, wani nau'i ne na cin zali ta intanet." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mayar da martani ba tare da ƙara muni ba",
          minutes: 5,
          goal: "Mayar da martani ga saƙo mai cutarwa ta hanyar nisanta kai maimakon rama wa.",
          text: [
            "Idan wani ya kai muku hari a intanet, abu ne na halitta ku so ku rama. Amma mayar da martani cikin fushi, zagin shi ma, ko rubuta abubuwa game da shi yawanci yana ƙara muni, kuma yana iya sa a ga kamar ku ma kuna cikin matsalar. KidsHealth yana ba da shawarar kada ku mayar da martani ko ku rama, ku nisanta kanku, kuma kada ku tura saƙon.",
            "Da farko, ku nisanta kanku daga allon. Ku ja numfashi a hankali sau kaɗan. Ku tuna wa kanku: wannan game da halinsu ne, ba darajarku ba, kuma ba laifinku ba ne. Sannan ku bi tsarin: ajiye shaida, toshewa, kai rahoto da faɗa wa wani. Za ku koyi kowane mataki a wannan kwas.",
            "Kada ku tura ko raba rubutun mai cutarwa, ko don ku nuna wa abokai yadda yake da muni; hakan yana ƙara yaɗa shi. Kuma kada ku yi kamar ku wani ne, ko ku buɗe asusun bogi don ku rama."
          ],
          steps: ["Kada ku mayar da martani ko ku rama.", "Ku nisanta kanku ku ja numfashi.", "Ku tuna wa kanku ba laifinku ba ne.", "Kada ku tura ko raba rubutun.", "Na gaba: ajiye shaida, toshewa, kai rahoto, faɗa wa babba."],
          words: [["Rama wa (retaliate)", "cutar da wani don ya cutar da ku."], ["Tura (forward)", "aika saƙo ko rubutu zuwa ga wasu mutane."]],
          slides: [
            { title: "Kada ku rama", bullets: ["Mayar da martani cikin fushi yawanci yana ƙara muni", "Yana iya sa a ga kamar ku ma kuna cikin matsalar"] },
            { title: "Ku nisanta kanku", bullets: ["Ku ajiye wayar", "Ku ja numfashi a hankali", "Ba laifinku ba ne"] },
            { title: "Kada ku yaɗa shi", bullets: ["Kada ku tura ko raba rubutun", "Babu asusun bogi don rama wa"] },
            { title: "Sannan ku bi tsarin", bullets: ["Ajiye shaida", "Toshewa da kai rahoto", "Faɗa wa babba amintacce"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (cin zali ta intanet, na matasa)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Wani ya rubuta sharhi \"kai/ke abin dariya ne, kowa yana ƙinka/ƙinki\" ƙarƙashin rubutunku. Ku rubuta abubuwa uku da BA za ku yi ba, da abin da ZA ku yi a minti biyar masu zuwa.",
          youCanNow: "kwantar da hankali, guje wa rama wa ko yaɗa shi, da komawa ga tsari mai aminci.",
          quickCheck: [
            { objective: "O2", q: "Me yasa mayar da martani da zagi mummunan ra'ayi ne?", options: ["Koyaushe yana kawo ƙarshen cin zalin", "Yawanci yana ƙara muni kuma yana iya sa a ga kamar ku ma kuna cikin matsalar", "Manhajoji suna hana zagi kai tsaye", "Yana ajiye shaida"], answer: 1, why: "Rama wa yawanci yana ƙara muni." },
            { objective: "O2", q: "Wani rubutu mai cutarwa game da ku yana yawo. Wani aboki ya ce ku tura masa don ya gani. Me za ku yi?", options: ["Ku tura wa abokai kaɗan", "Ku sanya shi a shafinku", "Ku buɗe asusun bogi don mayar da martani", "Kada ku tura shi; ku ajiye shaida ku bi tsarinku"], answer: 3, why: "Tura rubutu mai cutarwa yana ƙara yaɗa shi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ajiye shaida",
          minutes: 5,
          goal: "Ɗauki da ajiye hotunan allo da ke tabbatar da abin da ya faru.",
          text: [
            "Shaida tana taimaka wa manya, makarantu, manhajoji da 'yan sanda su ɗauki mataki. Kafin ku toshe ko goge komai, ku ajiye shaida. KidsHealth yana ba da shawarar ɗaukar hotunan allo (screenshot) ko neman iyaye su kwafa ko ajiye saƙonnin.",
            "Hoton allo mai kyau yana nuna: saƙon ko rubutun, sunan mai amfani ko sunan asusu (da shafin bayanansa ko hanyar haɗinsa idan za ku iya), da rana da lokaci. Ku ajiye kowane abin da ya faru, ba mafi muni kaɗai ba. Ku riƙe ɗan littafin bayani mai sauƙi: rana, manhaja, abin da ya faru, wa ya gani. Ku ajiye hotunan allo a wani fayil na sirri ko ku aika wa babba amintacce.",
            "Akwai muhimmin abin da ya bambanta: idan wani ya aika ko ya raba hoton tsiraici na matashi, KADA ku ɗauki hoton allo, ku ajiye ko ku tura hoton da kansa; hakan yana iya zama laifi a doka har a gare ku. Ku ajiye sunan mai amfani, hanyar haɗin, da saƙonnin da ke kewaye da shi, kuma ku faɗa wa babba amintacce nan take. Idan wani yana barazanar raba hotunan tsiraici sai dai idan kun biya ko kun aika ƙari, kada ku biya ko ku aika komai; ku toshe shi amma kada ku goge saƙonnin, ku nemi taimako. A Amurka, ku kai rahoto a report.cybertip.org, kuma ku yi amfani da sabis ɗin Take It Down kyauta (takeitdown.ncmec.org) don taimakawa a cire hotunan da aka ɗauka lokacin da kuke ƙasa da shekara 18."
          ],
          steps: ["Kafin toshewa, ku ɗauki hoton allo na kowane saƙo ko rubutu.", "Ku tabbatar yana nuna sunan mai amfani, rana da lokaci.", "Ku ajiye hanyar haɗin shafin bayanansa idan za ku iya.", "Ku rubuta ɗan littafin bayani: rana, manhaja, abin da ya faru.", "Ku ajiye shi a sirri ko ku aika wa babba amintacce."],
          words: [["Shaida (evidence)", "tabbacin abin da ya faru, kamar hotunan allo da saƙonnin da aka ajiye."], ["Hoton allo (screenshot)", "hoton abin da ke kan allonku."], ["Baƙar zamba da hotunan tsiraici (sextortion)", "barazanar raba hotunan tsiraici na wani sai dai idan ya biya ko ya aika ƙari; laifi ne."]],
          slides: [
            { title: "Ku fara ajiye shaida", bullets: ["Kafin ku toshe ko goge", "Shaida tana taimaka wa manya, makarantu, manhajoji da 'yan sanda"] },
            { title: "Hoton allo mai kyau yana nuna", bullets: ["Saƙon ko rubutun", "Sunan mai amfani ko asusu", "Rana da lokaci"] },
            { title: "Ku riƙe littafin bayani", bullets: ["Rana, manhaja, abin da ya faru, wa ya gani", "Ku ajiye shi a sirri ko ku ba babba"] },
            { title: "Hotunan tsiraici: dokoki daban", bullets: ["Kada ku ɗauki hoton allo ko ku raba hoton", "Ku ajiye sunan mai amfani, hanyar haɗi da saƙonni; ku faɗa wa babba", "Rahoto: report.cybertip.org; Take It Down"] }
          ],
          sources: [
            { name: "KidsHealth (Nemours): Cyberbullying (cin zali ta intanet, na matasa)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "NCMEC: Sextortion (baƙar zamba da hotunan tsiraici)", url: "https://www.missingkids.org/theissues/sextortion" },
            { name: "NCMEC: Take It Down (sabis na cire hotuna)", url: "https://takeitdown.ncmec.org/" }
          ],
          tryIt: "Ku gwada ɗaukar hoton allo a wayarku na kowane allo marar lahani (kamar manhajar yanayi). Ku nemo inda ya ajiye. Ku buɗe fayil ko kundin hotuna na sirri mai suna \"shaida\", ku rubuta matakan don ku tuna da su.",
          youCanNow: "ɗaukar hotunan allo da ke tabbatar da abin da ya faru, riƙe littafin bayani, da magance hotunan tsiraici lafiya ta hanyar faɗa wa babba maimakon ajiye su.",
          quickCheck: [
            { objective: "O3", q: "Mene ne littafin bayani mai kyau na shaida?", options: ["Jerin rana, manhaja, abin da ya faru da wa ya gani", "Tarihin kiran wayarku", "Jerin kalmomin sirrinku", "Kwafin adireshin mai cin zalin"], answer: 0, why: "Littafin bayani mai sauƙi yana taimaka wa manya, makarantu, manhajoji da 'yan sanda su ɗauki mataki." },
            { objective: "O3", q: "Kuna shirin toshe wanda ya aiko da barazana. Me za ku fara yi?", options: ["Ku goge dukkan saƙonnin", "Ku mayar da martani na ƙarshe", "Ku ɗauki hoton allo na saƙonnin da ke nuna sunan mai amfani, rana da lokaci", "Ku tura su ga dukkan aji"], answer: 2, why: "Ku ajiye shaida kafin ku toshe ko goge komai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gane cin zali ta intanet da mayar da martani lafiya",
        questions: [
          { objective: "O1", q: "Wanne misali ne na cin zali ta intanet?", options: ["Aboki ya saɓa da ku sau ɗaya game da wani fim", "Wata ƙungiya tana ci gaba da sanya asusun bogi don yi wa ɗan aji ba'a", "Wani ya manta bai amsa tes ba", "Malami ya sanya aikin gida a intanet"], answer: 1, why: "Ana maimaitawa, an yi don a cutar, kuma akwai ƙungiya a bayansa." },
          { objective: "O2", q: "Wani ya rubuta sharhi mai muni game da ku. Mene ne mataki na farko mafi kyau?", options: ["Ku zage shi ma", "Ku tura shi ga kowa", "Ku buɗe asusun bogi don ku rama", "Kada ku mayar da martani; ku nisanta kanku ku bi tsarinku na kare kai"], answer: 3, why: "Rama wa yawanci yana ƙara muni; nisanta kai yana sa ku ci gaba da kasancewa masu iko." },
          { objective: "O3", q: "Yaushe ya kamata ku ajiye shaida?", options: ["Kafin ku toshe ko goge komai", "Ba a taɓa ba", "Sai bayan wata ɗaya", "Sai idan ya faru sau goma"], answer: 0, why: "Da zarar kun toshe ko kun goge, shaidar tana iya ɓacewa." },
          { objective: "O3", q: "Me ya kamata hoton allo mai kyau ya nuna?", options: ["Amsarku kaɗai", "Allon farko na wayarku", "Saƙon, sunan mai amfani da rana da lokaci", "Kalmar sirrinku"], answer: 2, why: "Waɗannan bayanai suna tabbatar da wa ya aika me, da yaushe." },
          { objective: "O3", q: "Wani ya aiko muku da hoton tsiraici na ɗan ajinku. Me ya kamata ku yi?", options: ["Ku ɗauki hoton allo ku raba shi a matsayin shaida", "Ku tura shi ga abokan ɗan ajin", "Ku sanya shi don ku gargaɗi wasu", "Kada ku ajiye ko ku raba hoton; ku rubuta sunan mai amfani ku faɗa wa babba amintacce nan take"], answer: 3, why: "Ajiye ko raba irin waɗannan hotuna yana iya zama laifi a doka; manya da sabis na kai rahoto za su iya ɗaukar mataki." }
        ]
      }
    },
    {
      name: "Babi na 2: Ɗaukar mataki da samun tallafi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Toshewa da kai rahoto a manhajoji",
          minutes: 5,
          goal: "Nemo da amfani da zaɓuɓɓukan toshewa da kai rahoto a manhajojin da kuke amfani da su.",
          text: [
            "Kusan kowace manhajar sada zumunta, manhajar saƙo da wasan intanet tana ba ku damar toshewa (block), ɓoyewa (mute) da kai rahoto (report). Toshewa yana hana mutumin tuntuɓar ku ko ganin rubuce-rubucenku. Ɓoyewa yana ɓoye shi ba tare da ya sani ba. Kai rahoto yana faɗa wa kamfanin cewa mutumin ya karya dokokinsa; kamfanin yana iya cire rubuce-rubuce ko ya rufe asusun. KidsHealth kuma yana ba da shawarar kai rahoto ga kamfanin wayarku ko na imel idan cin zalin yana zuwa ta hanyarsu.",
            "Yawanci ana samun zaɓuɓɓukan ta danna ɗigo uku ko sunan mutumin ko shafin bayanansa, ko ta danna saƙon a riƙe. Sunayen menu suna canjawa, don haka idan ba ku same su ba, ku bincika cibiyar taimako ko ta tsaro ta manhajar don \"block\" da \"report\".",
            "Ku kuma ƙarfafa sirrinku: ku mayar da asusunku na sirri (private) idan za ku iya, ku iyakance wanda zai iya yin sharhi ko aiko muku da saƙo, kada ku taɓa raba kalmomin sirrinku (ko da da abokai), kuma ku yi tunani kafin ku sanya bayananku kamar makarantarku, adireshinku ko inda kuke a yanzu."
          ],
          steps: ["Ku fara ajiye shaida.", "Ku buɗe shafin bayanan mutumin ko saƙon, sannan menu (sau da yawa ɗigo uku).", "Ku zaɓi Report ku zaɓi dalilin da ya dace.", "Ku zaɓi Block (ko Mute idan toshewa zai ƙara muni).", "Ku duba saitunan sirrinku: wa zai iya aiko saƙo, yin sharhi ko ganin rubuce-rubucenku."],
          words: [["Toshewa (block)", "hana wani tuntuɓar ku ko ganin rubuce-rubucenku."], ["Kai rahoto (report)", "faɗa wa manhajar ko kamfanin cewa wani ya karya dokokinsa."], ["Saitunan sirri (privacy settings)", "zaɓuɓɓukan da ke iko da wanda zai iya ganin rubuce-rubucenku da tuntuɓar ku."]],
          slides: [
            { title: "Kayan aiki uku", bullets: ["Block: ba zai iya tuntuɓar ku ba", "Mute: ku ɓoye shi a hankali", "Report: ku faɗa wa kamfanin ya karya dokoki"] },
            { title: "Inda za ku same su", bullets: ["Ku danna ɗigo uku, suna ko shafin bayanai", "Ko ku danna saƙon ku riƙe", "Ba ku samu ba? Ku bincika cibiyar tsaro ta manhajar"] },
            { title: "Ku ƙarfafa sirrinku", bullets: ["Asusun sirri (private) idan za ku iya", "Ku iyakance wanda zai aiko saƙo ko yin sharhi", "Kada ku taɓa raba kalmar sirri, ko da da abokai"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (cin zali ta intanet, na matasa)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "A manhajoji biyu da kuka fi amfani da su, ku nemo (amma kada ku yi amfani da) zaɓuɓɓukan toshewa da kai rahoto na wani asusu. Sannan ku duba saitin sirri ɗaya a kowace manhaja, kamar wanda zai iya aiko muku da saƙo, ku canja shi idan kuna so.",
          youCanNow: "nemo da amfani da toshewa, ɓoyewa da kai rahoto a manhajojinku, da ƙarfafa saitunan sirrinku.",
          quickCheck: [
            { objective: "O4", q: "Me ɓoye wani (mute) yake yi?", options: ["Yana goge asusunsa", "Yana ɓoye rubuce-rubucensa ba tare da ya sani ba", "Yana kai rahotonsa ga 'yan sanda", "Yana bar shi ya ga ƙarin rubuce-rubucenku"], answer: 1, why: "Ɓoyewa yana ɓoye shi ba tare da ya sani ba; toshewa yana hana shi tuntuɓar ku." },
            { objective: "O4", q: "Baƙi suna ci gaba da yin sharhi a rubuce-rubucenku. Wane mataki na sirri ya fi taimakawa?", options: ["Ku raba kalmar sirrinku da aboki", "Ku sanya sunan makarantarku", "Ku kunna raba wurin da kuke", "Ku iyakance wanda zai iya yin sharhi ko aiko muku da saƙo"], answer: 3, why: "Iyakance wanda zai aiko saƙo ko yin sharhi yana kare ku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Faɗa wa babba amintacce, makaranta, da lokacin kiran 'yan sanda",
          minutes: 6,
          goal: "Faɗa wa babba amintacce abin da ke faruwa da sanin lokacin da abin zai je makaranta ko 'yan sanda.",
          text: [
            "Matasa da yawa ba sa faɗa wa kowa domin suna tsoron abin zai ƙara muni, za a karɓe wayarsu, ko suna jin kunya. Amma manya za su iya yin abubuwan da ku ba za ku iya ba: magana da makaranta, tuntuɓar manhajar, ko zuwa wurin 'yan sanda. KidsHealth ya ce ku ci gaba da magana har sai kun sami wanda zai taimaka.",
            "Manya amintattu sun haɗa da iyaye ko mai kula da ku, wani a iyali, malami, mai ba da shawara a makaranta (counselor), mai horarwa, mai ba da jagora ko shugaban matasa. Ku fara a sauƙaƙe: \"Wani yana ci gaba da aiko min da saƙonni masu muni kuma ban san abin da zan yi ba. Za ka/ki iya taimaka min? Na ajiye hotunan allo.\" Idan babba na farko bai taimaka ba, ku faɗa wa wani. Yawancin makarantu suna da manufofin hana cin zali, musamman idan ɗalibai ne a ciki; mai ba da shawara a makaranta ko shugaban makaranta zai iya ɗaukar mataki.",
            "Ku je wurin 'yan sanda, tare da babba, idan abin ya shafi barazanar tashin hankali, hotuna ko saƙonnin tsiraici, hotuna ko bidiyon da aka ɗauka a wuri na sirri (kamar banɗaki ko ɗakin canja kaya), bibiyar mutum (stalking), ko ƙiyayya saboda ko wane ne ku. StopBullying.gov yana bayanin lokacin da za a kai rahoto ga 'yan sanda da dokokin cin zali na jiharku. Idan wani yana cikin haɗari a yanzu, ku kira 911 (ko lambar gaggawa ta ƙasarku). Idan cin zalin ya sa kun fid da rai ko kuna tunanin cutar da kanku, ku faɗa wa babba yanzu; a Amurka, ku kira ko ku tura tes zuwa 988."
          ],
          steps: ["Ku zaɓi babba amintacce.", "Ku faɗa masa abin da ya faru ku nuna shaidarku.", "Ku nemi ya taimaka a tuntuɓi makaranta idan ɗalibai ne a ciki.", "Ku je wurin 'yan sanda tare da babba don barazana, hotunan tsiraici, bibiya ko ƙiyayya.", "Haɗari a yanzu: ku kira 911. Kuna jin kun fid da rai: ku kira ko ku tura tes zuwa 988."],
          words: [["Babba amintacce (trusted adult)", "babban mutum da kuke jin aminci tare da shi wanda zai iya taimakawa, kamar iyaye, malami, mai ba da shawara ko mai horarwa."], ["Bibiya (stalking)", "bin mutum, kallonsa ko tuntuɓarsa akai-akai ta hanyar da ke tsoratar da shi."]],
          slides: [
            { title: "Me yasa za ku faɗa wa babba", bullets: ["Zai iya tuntuɓar makaranta, manhaja ko 'yan sanda", "Ku ci gaba da magana har wani ya taimaka"] },
            { title: "Wa da kuma yaya", bullets: ["Iyaye, malami, mai ba da shawara, mai horarwa, mai ba da jagora", "\"Wani yana ci gaba da aiko min da saƙonni masu muni.\"", "Ku nuna hotunan allonku"] },
            { title: "Lokacin kiran 'yan sanda", bullets: ["Barazanar tashin hankali", "Hotuna ko saƙonnin tsiraici", "Hotunan wuri na sirri, bibiya, ƙiyayya"] },
            { title: "Taimakon gaggawa", bullets: ["Haɗari a yanzu: ku kira 911", "Kuna jin kun fid da rai: ku kira ko ku tura tes zuwa 988 (Amurka)"] }
          ],
          sources: [
            { name: "StopBullying.gov: How to Report Cyberbullying (yadda ake kai rahoton cin zali ta intanet)", url: "https://www.stopbullying.gov/cyberbullying/how-to-report" },
            { name: "StopBullying.gov: Laws, Policies and Regulations (dokoki, manufofi da ƙa'idoji)", url: "https://www.stopbullying.gov/resources/laws" },
            { name: "KidsHealth (Nemours): Cyberbullying (cin zali ta intanet, na matasa)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "988 Suicide and Crisis Lifeline (layin taimakon gaggawa 988)", url: "https://988lifeline.org/" }
          ],
          tryIt: "Ku rubuta sunayen manya amintattu biyu da mutum ɗaya a makaranta da za ku iya faɗa wa. Sannan ku rubuta ainihin jimloli biyu ko uku da za ku faɗa don fara magana.",
          youCanNow: "faɗa wa babba amintacce tare da shaidarku, saka makaranta a ciki, da sanin lokacin da abin ya zama na 'yan sanda ko na taimakon gaggawa.",
          quickCheck: [
            { objective: "O5", q: "Wanne a cikin waɗannan babba amintacce ne?", options: ["Mai ba da shawara a makaranta da kuke jin aminci tare da shi", "Baƙo a intanet da ya ce zai taimaka", "Mutumin da ke cin zalinku", "Kowa a wurin sharhi"], answer: 0, why: "Manya amintattu sun haɗa da iyaye ko mai kula, wani a iyali, malami, mai ba da shawara, mai horarwa, mai ba da jagora ko shugaban matasa." },
            { objective: "O5", q: "Wani yana aiko muku da saƙonnin barazanar cutar da ku bayan makaranta. Me za ku yi?", options: ["Ku jira ku gani ko zai daina", "Ku mayar da barazana", "Ku faɗa wa babba amintacce yanzu ku je wurin 'yan sanda tare da shi", "Ku goge saƙonnin"], answer: 2, why: "Barazanar tashin hankali abu ne na 'yan sanda, tare da babba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Zama mai kare wanda ake zalunta da yin tsarinku na kare kai",
          minutes: 5,
          goal: "Tallafa wa wanda ake kai wa hari da rubuta tsarinku na kare kai.",
          text: [
            "Yawancin cin zali ta intanet yana da masu kallo. Ɗan kallo (bystander) yana kallo kawai. Mai kare wanda ake zalunta (upstander) yana taimakawa. Ba sai kun fuskanci mai cin zalin a fili ba don ku taimaka; sau da yawa taimako mafi aminci shi ne wanda aka yi a ɓoye.",
            "Hanyoyin zama mai kare wanda ake zalunta: kada ku so (like), ku raba ko ku yi sharhi a rubutun mai cutarwa; ku kai rahotonsa; ku aika wa wanda ake kai wa hari saƙo a ɓoye (\"Na ga wannan. Ba daidai ba ne. Lafiya kuwa?\"); ku gayyace shi ku yi zama tare ko ku zauna tare a makaranta; ku taimaka masa ya ajiye shaida ya faɗa wa babba amintacce. Idan kun ga barazana ko alamun cewa yana iya cutar da kansa, ku faɗa wa babba nan take.",
            "Yanzu ku haɗa komai a cikin tsarinku, don ku san ainihin abin da za ku yi idan abin ya faru da ku ko da wani aboki."
          ],
          steps: ["Kada ku so, ku raba ko ku yi sharhi a rubutun.", "Ku kai rahotonsa a manhajar.", "Ku aika wa wanda ake kai wa hari saƙon tallafi a ɓoye.", "Ku taimaka masa ya ajiye shaida ya faɗa wa babba amintacce.", "Ku rubuta tsarinku na kare kai."],
          words: [["Ɗan kallo (bystander)", "wanda ya ga cin zali amma bai yi komai ba."], ["Mai kare wanda ake zalunta (upstander)", "wanda ya ga cin zali kuma ya taimaka wa wanda ake kai wa hari ta hanya mai aminci."]],
          slides: [
            { title: "Ɗan kallo ko mai kare wanda ake zalunta?", bullets: ["Ɗan kallo: yana kallo", "Mai kare wanda ake zalunta: yana taimakawa lafiya"] },
            { title: "Hanyoyin taimako a ɓoye", bullets: ["Kada ku so ko ku raba rubutun; ku kai rahotonsa", "Ku aika wa wanda ake kai wa hari: \"Ba daidai ba ne. Lafiya kuwa?\"", "Ku taimaka masa ya ajiye shaida ya faɗa wa babba"] },
            { title: "Tsarinku na kare kai", bullets: ["Yadda ake ɗaukar hoton allo da inda za a ajiye shi", "Toshewa da kai rahoto a manyan manhajojinku biyu", "Manya amintattu biyu da abin da za ku faɗa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarinku na kare kai daga cin zali ta intanet: matakan ɗaukar hoton allo da inda za ku ajiye su, inda toshewa da kai rahoto suke a manyan manhajojinku biyu, manya amintattu biyu da mutum ɗaya a makaranta tare da abin da za ku faɗa, lokacin da za ku je wurin 'yan sanda, da hanya ɗaya da za ku tallafa wa aboki.",
          youCanNow: "tallafa wa aboki da ake kai wa hari da bin tsarinku na kare kai daga cin zali ta intanet.",
          quickCheck: [
            { objective: "O6", q: "Mene ne bambanci tsakanin ɗan kallo da mai kare wanda ake zalunta?", options: ["Babu bambanci", "Ɗan kallo yana kallo; mai kare wanda ake zalunta yana taimakawa", "Mai kare wanda ake zalunta yana shiga cin zalin", "Ɗan kallo yana kai rahoto"], answer: 1, why: "Yawancin cin zali ta intanet yana da masu kallo; masu kare wanda ake zalunta suna taimaka wa wanda ake kai wa hari." },
            { objective: "O6", q: "Rubutun wani aboki ya ce yana jin kamar ya cutar da kansa bayan an ci zalinsa. Me za ku yi?", options: ["Ku so rubutun", "Ku jira sai gobe", "Ku ɓoye shi a matsayin sirri", "Ku faɗa wa babba amintacce nan take"], answer: 3, why: "Alamun cewa wani yana iya cutar da kansa suna buƙatar babba nan take." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ɗaukar mataki da samun tallafi",
        questions: [
          { objective: "O4", q: "Me toshe wani (block) yake yi?", options: ["Yana hana shi tuntuɓar ku ko ganin rubuce-rubucenku", "Yana goge asusunsa", "Yana aika masa da gargaɗi daga 'yan sanda", "Yana raba hotunan allonku"], answer: 0, why: "Toshewa yana yanke hanyar tuntuɓarsa da ku." },
          { objective: "O4", q: "Ba ku sami maɓallin kai rahoto a wata manhaja ba. Me za ku yi?", options: ["Ku haƙura", "Ku sanya kalmar sirrinku", "Ku bincika cibiyar taimako ko ta tsaro ta manhajar don \"report\"", "Ku aika wa mai cin zalin saƙo ku tambaye shi"], answer: 2, why: "Sunayen menu suna canjawa; cibiyar taimako ko ta tsaro tana nuna inda suke." },
          { objective: "O5", q: "Babba na farko da kuka faɗa wa bai taimaka ba. Yanzu me?", options: ["Kada ku sake faɗa wa kowa", "Ku faɗa wa wani babba amintacce", "Ku rama wa mai cin zalin da kanku", "Ku goge shaidarku"], answer: 1, why: "Ku ci gaba da magana har wani ya taimaka." },
          { objective: "O5", q: "Wane yanayi ne ya kamata ya je wurin 'yan sanda, tare da babba?", options: ["Wani ya daina bin ku (unfollow)", "Aboki bai amsa ba", "Ɗan aji ya saɓa da ku a hirar ƙungiya", "Wani yana barazanar cutar da ku"], answer: 3, why: "Barazanar tashin hankali abu ne na 'yan sanda." },
          { objective: "O6", q: "Kun ga ana yi wa ɗan aji ba'a a sharhi. Mene ne kyakkyawan mataki na mai kare wanda ake zalunta?", options: ["Ku so rubutun don ku dace da sauran", "Ku kai rahotonsa ku aika wa ɗan ajin saƙon tallafi a ɓoye", "Ku raba shi ga ƙarin mutane", "Ku ƙara naku barkwancin"], answer: 1, why: "Kai rahoto da tallafi a ɓoye suna taimakawa ba tare da yaɗa shi ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kare Kai daga Cin Zali ta Intanet",
    questions: [
      { objective: "O1", q: "Cin zali ta intanet shi ne:", options: ["Kowace gardama a intanet", "Amfani da fasaha don cutar, kunyata, yi wa barazana ko kai wa wani hari", "Mantawa da mayar da tes", "Rubutu game da ƙarshen makonku"], answer: 1, why: "Game da cutar da wani ne ko kai masa hari ta hanyar fasaha." },
      { objective: "O1", q: "Me ke sa abu ya fi yiwuwa ya zama cin zali maimakon rikici?", options: ["Ana maimaitawa kuma an yi don a cutar", "Ya faru sau ɗaya tsakanin mutane daidai da juna", "Dukkan mutanen biyu suna wasa tare", "Game da sakamakon wasanni ne"], answer: 0, why: "Cin zali yawanci da gangan ne, ana maimaitawa, kuma akwai fifikon iko." },
      { objective: "O1", q: "Me yasa cin zali ta intanet yake da wuyar kuɓuta daga gare shi?", options: ["Wayoyi suna da nauyi", "Yana faruwa a makaranta kaɗai", "Yana iya bin ku har gida kuma ya yaɗu da sauri", "Koyaushe ba a san wanda ya yi ba"], answer: 2, why: "Rubuce-rubucen intanet suna kai muku ko'ina kuma suna iya yaɗuwa ga mutane da yawa." },
      { objective: "O1", q: "Wanne ne fifikon iko a cin zali?", options: ["Dukkan mutanen biyu shekarunsu ɗaya", "Babu wanda ya san ɗayan", "Dukkansu abokai ne", "Ƙungiya tana kai wa mutum ɗaya hari"], answer: 3, why: "Mutane mafi yawa, shahara ko bayanan sirri suna ba mai cin zalin iko." },
      { objective: "O2", q: "Mayar da martani da zagi yawanci:", options: ["Yana kawo ƙarshen cin zalin", "Yana ƙara muni", "Yana sa a cire rubutun", "Manhajar ce ta wajabta shi"], answer: 1, why: "Rama wa sau da yawa yana ƙara tsananta abubuwa." },
      { objective: "O2", q: "Me yasa bai kamata ku tura rubutu mai cutarwa ga abokai ba?", options: ["Yana ƙara yaɗa shi", "Yana cin kuɗi", "Yana lalata wayarku", "Yana da jinkiri sosai"], answer: 0, why: "Turawa yana kai abin mai cutarwa gaban ƙarin mutane." },
      { objective: "O2", q: "Idan ana kai muku hari, yana taimakawa ku tuna cewa:", options: ["Kun cancanci haka", "Babu wanda zai iya taimakawa", "Ba laifinku ba ne", "Ya kamata ku magance shi ku kaɗai"], answer: 2, why: "Cin zali game da halin mai cin zalin ne, ba darajarku ba." },
      { objective: "O3", q: "Me ya kamata ku yi kafin ku toshe wani?", options: ["Ku goge dukkan saƙonnin", "Ku aika masa adireshinku", "Ku rubuta game da shi", "Ku ajiye shaida da hotunan allo"], answer: 3, why: "Toshewa yana iya sa samun shaida ya yi wuya." },
      { objective: "O3", q: "Wane bayani ne ya fi muhimmanci a hoton allo?", options: ["Sunan mai amfani da rana da lokaci", "Matakin batirinku", "Hoton bangon allonku", "Yanayi"], answer: 0, why: "Wanda ya aika da kuma yaushe suna tabbatar da abin da ya faru." },
      { objective: "O3", q: "Wani yana barazanar raba hotunanku na sirri sai dai idan kun aika kuɗi. Me ya kamata ku yi?", options: ["Ku biya nan take", "Ku aika ƙarin hotuna", "Kada ku biya; ku ajiye saƙonnin, ku toshe shi, ku faɗa wa babba amintacce ku kai rahoto", "Ku goge komai ku yi shiru"], answer: 2, why: "NCMEC ya ce biyan kuɗi ba kasafai yake dakatar da shi ba; ku ajiye shaida ku nemi taimako." },
      { objective: "O3", q: "A Amurka, a ina za ku iya kai rahoton cin zarafin matashi ta hanyar jima'i a intanet?", options: ["report.cybertip.org", "Wani wurin sharhi na bazata", "Saƙonnin kai tsaye (DM) na mai cin zalin", "Babu inda"], answer: 0, why: "CyberTipline, wanda NCMEC ke gudanarwa, yana karɓar waɗannan rahotanni." },
      { objective: "O3", q: "Da me Take It Down (takeitdown.ncmec.org) yake taimakawa?", options: ["Goge dukkan wayarku", "Samun sababbin abokai", "Biyan mai baƙar zamba", "Cire hotunan tsiraici da aka ɗauka lokacin da kuke ƙasa da shekara 18"], answer: 3, why: "Sabis ne na NCMEC kyauta don taimakawa a cire irin waɗannan hotuna." },
      { objective: "O4", q: "Kai rahoton wani a manhaja yana nufin:", options: ["Kiran shi a waya", "Faɗa wa kamfanin cewa ya karya dokokinsa", "Bin shi (follow) kai ma", "Raba rubutunsa"], answer: 1, why: "Kamfanin zai iya cire rubuce-rubuce ko ya rufe asusun." },
      { objective: "O4", q: "Wane mataki na sirri ne ke taimakawa wajen kare ku?", options: ["Ku raba kalmar sirrinku da babban abokinku", "Ku sanya adireshin gidanku", "Ku iyakance wanda zai iya aiko saƙo ko yin sharhi a rubuce-rubucenku", "Ku mayar da kowane asusu na fili"], answer: 2, why: "Iyakance tuntuɓa yana hana masu cin zali da yawa." },
      { objective: "O5", q: "Wane ne babba amintacce?", options: ["Baƙon da kuka haɗu da shi a wasa", "Iyaye, malami, mai ba da shawara a makaranta ko mai horarwa da kuke jin aminci tare da shi", "Mutumin da ke cin zalinku", "Asusun da ba a san mai shi ba"], answer: 1, why: "Manya amintattu za su iya tuntuɓar makaranta, manhaja ko 'yan sanda." },
      { objective: "O5", q: "Me ya kamata ku ɗauka idan za ku faɗa wa babba?", options: ["Babu komai", "Kalmar sirrinku", "Shaidarku: hotunan allo da littafin bayaninku", "Kyauta"], answer: 2, why: "Shaida tana taimaka musu su ɗauki mataki da sauri." },
      { objective: "O5", q: "Yaushe ya kamata cin zali ta intanet ya je wurin 'yan sanda?", options: ["Idan wani ya bar hirar ƙungiya", "Idan wani ya rubuta mummunan ra'ayi game da wani wasa", "Idan wani ya saɓa da ku", "Idan ya shafi barazana, hotunan tsiraici, bibiya ko ƙiyayya"], answer: 3, why: "Waɗannan suna iya zama laifuka; StopBullying.gov yana bayanin lokacin da za a kai rahoto ga 'yan sanda." },
      { objective: "O5", q: "A Amurka, idan cin zali ya sa kun fid da rai, za ku iya kira ko tura tes zuwa:", options: ["988", "411", "611", "211 a ƙarshen mako kaɗai"], answer: 0, why: "988 shi ne Suicide and Crisis Lifeline kyauta, awa 24 kowace rana, kwana 7 a mako." },
      { objective: "O6", q: "Mai kare wanda ake zalunta shi ne wanda:", options: ["Yake kallo kawai ba ya yin komai", "Yake taimaka wa wanda ake kai wa hari ta hanya mai aminci", "Yake shiga cin zalin", "Yake ɗaukar bidiyo don a kalla"], answer: 1, why: "Masu kare wanda ake zalunta suna taimakawa, sau da yawa a ɓoye." },
      { objective: "O6", q: "Wace ce hanya mai aminci a ɓoye don taimaka wa aboki da ake ci wa zali a intanet?", options: ["Ku sanya saƙonninsa na sirri", "Ku rubuta sharhi mafi muni", "Ku so rubutun", "Ku aika masa saƙo a ɓoye ku taimaka masa ya faɗa wa babba"], answer: 3, why: "Tallafi a ɓoye da saka babba a ciki suna taimakawa ba tare da yaɗa shi ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      4,
      7,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ajiye shaida",
        objective: "O3",
        notYet: "Babu matakan ɗaukar hoton allo, ko babu wurin ajiye su.",
        meets: "Matakan ɗaukar hoton allo da ke nuna sunan mai amfani, rana da lokaci, da wuri na sirri don ajiye su.",
        exceeds: "Ya kuma haɗa da littafin bayani mai sauƙi da dokar rashin ajiye hotunan tsiraici kwata-kwata."
      },
      {
        name: "Toshewa da kai rahoto",
        objective: "O4",
        notYet: "Ba a sami zaɓuɓɓukan toshewa da kai rahoto a manyan manhajoji biyu ba.",
        meets: "Inda toshewa da kai rahoto suke a manhajojin biyu, kuma an duba saitin sirri ɗaya.",
        exceeds: "Ya kuma faɗi lokacin da za a ɓoye (mute) maimakon toshewa."
      },
      {
        name: "Wa za a faɗa wa",
        objective: "O5",
        notYet: "Babu sunayen manya, ko babu abin da za a faɗa.",
        meets: "Manya amintattu biyu da mutum ɗaya a makaranta, tare da kalmomin fara magana.",
        exceeds: "Ya kuma faɗi abin da za a yi idan babba na farko bai taimaka ba."
      },
      {
        name: "Lokacin zuwa wurin 'yan sanda",
        objective: "O5",
        notYet: "Babu shi ko ba daidai ba ne.",
        meets: "Barazana, hotunan tsiraici, bibiya ko ƙiyayya suna zuwa wurin 'yan sanda tare da babba; haɗari a yanzu yana nufin 911.",
        exceeds: "Ya kuma ambaci 988 don jin fid da rai da inda ake kai rahoton cin zarafi ta hanyar jima'i a intanet."
      },
      {
        name: "Tallafa wa aboki",
        objective: "O6",
        notYet: "Babu matakin kare wanda ake zalunta, ko matakin yana yaɗa rubutun.",
        meets: "Hanya ɗaya mai aminci ta tallafa wa aboki, kamar saƙo a ɓoye da taimaka masa ya faɗa wa babba.",
        exceeds: "Matakai biyu ko fiye masu aminci, har da kai rahoton rubutun."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun toshe, sun kai rahoto ko sun faɗa wa babba game da cin zali a intanet a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka ce sun tallafa wa aboki da aka kai wa hari (binciken biyo baya)",
      "Makarantu ko shirye-shiryen matasa da suka ce ƙarin ɗalibai suna fitowa da shaidar da suka ajiye"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar mai koyo ko na'urarsa don nemo toshewa, kai rahoto da saitunan sirri",
      "Takarda ko manhajar rubutu ta sirri don tsarin kare kai",
      "Jerin mutanen tuntuɓa amintattu na yankin: mai ba da shawara a makaranta, ma'aikatan shirin, layukan taimakon gaggawa",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kada ku taɓa neman masu koyo su raba ainihin saƙonni ko hotuna masu cutarwa a aji; ku yi amfani da misalan ƙirƙirarru na kwas ɗin.",
      "Kafin farawa, ku faɗi wanda masu koyo za su iya magana da shi a ɓoye, kuma ku raba 988 da lambobin gaggawa na yankin.",
      "Ku kasance a shirye don bin dokokin ƙungiyarku na kai rahoto da kare yara idan mai koyo ya bayyana cin zali, barazana ko hotunan tsiraici.",
      "Ku jaddada cewa kada a taɓa ajiye ko tura hotunan tsiraici na matasa, ko da a matsayin shaida.",
      "Ku bar masu koyo su riƙe tsare-tsarensu na kare kai a sirri; ku duba su ɗaya-ɗaya da ma'aunin rubric idan sun yarda."
    ]
  }
};
