"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-phone-repair-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const NFPA = { name: "NFPA (Ƙungiyar Kare Gobara ta Ƙasar Amurka): Tsaron batirin lithium-ion (alamun gargaɗi; kada a jefa a bola, a sake sarrafa shi)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "Takardar bayani ta WHO: Sharar lantarki (e-waste): tan miliyan 62 a 2022, kashi 22.3% aka rubuta an sake sarrafa su; haɗarin ƙonawa", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Hukumar Kare Bayanai ta Najeriya (Nigeria Data Protection Commission; Dokar Kare Bayanai ta Najeriya 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Hukumar Kare Bayanai ta Ghana (Data Protection Commission; Dokar Kare Bayanai, 2012, Act 843; masu riƙe bayanai dole su yi rajista)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Ofishin Kwamishinan Kare Bayanai na Kenya (Office of the Data Protection Commissioner)", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business-ha",
  lang: "ha",
  translationOf: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Fara Kasuwancin Gyaran Waya",
  skills: "Shirya teburin gyara mai aminci, Sarrafa batirin lithium lafiya, Gano matsala da rubuta katin aiki, Kare bayanan abokan ciniki, Sanya farashin gyara tare da garanti, Sarrafa sharar lantarki lafiya",
  outcome: "gudanar da ƙaramin kasuwancin gyaran waya mai aminci da gaskiya: yin aiki a teburi mai aminci, sarrafa batirin lithium ba tare da haɗarin gobara ba, gano matsalolin da aka saba gani da rubuta kowane aiki a katin aiki, kare bayanan kowane abokin ciniki, sanya farashin gyara tare da garanti a sarari, da zubar da matattun batura da sassan da suka karye lafiya.",
  about: [
    "Wannan kwas ɗin na matasa ne, masu sana'a da masu ƙananan kasuwanci a faɗin Afirka waɗanda ke gyaran waya, ko suke son farawa, a rumfa, a kasuwa ko a ƙaramin shago: a Luthuli Avenue na Nairobi, Computer Village na Legas, Circle na Accra, Adjamé na Abidjan ko Akwa na Douala.",
    "Babi na 1 yana magana kan aiki lafiya: teburinku da kayan aikinku, haɗarin batirin lithium, da yadda ake gano matsala mataki-mataki a rubuta ta a katin aiki. Babi na 2 yana magana kan kasuwanci: kare bayanan abokan ciniki, farashi da garanti, ƙin karɓar wayoyin sata, da sarrafa sharar lantarki.",
    "Wannan ba cikakken kwas na lantarki ba ne. Yana ba ku al'adun tsaro da ƙwarewar kasuwanci da ke kare ku, abokan cinikinku da shagonku, don ƙwarewarku ta fasaha ta kawo muku suna mai kyau. Adadin kuɗi misalai ne kawai. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi kayan farawa na shagonku: (1) jerin farashin aƙalla gyare-gyare biyar da aka saba yi (misali allo, wurin caji, batir, lasifika, sake saita manhaja), kowanne da kuɗin sashe, kuɗin aiki, farashi da kwanakin garanti; (2) katin aiki mai shafi ɗaya da za ku yi amfani da shi don kowace waya; (3) alƙawarin kare bayanan abokin ciniki mai aƙalla layuka huɗu; da (4) katin tsaro na bango mai dokokin batirinku da inda matattun batura da sassan da suka karye za su tafi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa, masu sana'a da masu ƙananan kasuwanci a garuruwa da birane a faɗin Afirka (Kenya, Najeriya, Ghana, Côte d'Ivoire, Kamaru, Senegal, Masar da sauransu) waɗanda ke gyaran waya ko suke son farawa, sau da yawa a rumfa ko a kasuwa.",
    startingPoint: "Da yawa sun koyi wasu gyare-gyare daga aboki ko a wurin koyon sana'a, ko kuma ba su koyi komai ba tukuna. Kaɗan ne ke da tsarin aiki mai aminci a teburi, suka san yadda batirin lithium da ya lalace yake da haɗari, suke rubuta katin aiki, suke kare bayanan abokan ciniki, suke sanya farashi tare da garanti, ko suka san inda sharar lantarki ya kamata ta tafi.",
    gap: "Gobarar batir tana ƙona shaguna kuma tana raunata mutane; bayanan abokin ciniki da suka ɓace ko suka fita suna ɓata amana; farashin hasashe yana kawo asara; sayen wayoyin sata yana kawo matsala da 'yan sanda; ƙona sharar lantarki yana guba iyalai. Al'adun tsaro da kayan kasuwanci masu sauƙi suna mayar da sana'a ta zama kasuwanci amintacce mai ɗorewa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar fasaha",
      "Na'urori: waya Android mai sauƙi; ƙaramin wuri da ake rabawa, sau da yawa ba tare da na'urar kashe gobara ba",
      "Dokokin kare bayanai, lasisin kasuwanci da sharar lantarki sun bambanta a kowace ƙasa kuma suna canjawa: masu koyo su tabbatar a ofisoshin da aka ambata",
      "Tsaro: babu aiki kan batir da ya kumbura ko ya lalace sai dai cire shi lafiya; babu ƙona sharar lantarki",
      "An kuma fassara kwas ɗin zuwa Faransanci da Larabci, don haka misalai sun haɗa da shagunan ƙasashen Faransanci da na Arewacin Afirka"
    ],
    prerequisites: "Babu, don ƙwarewar tsaro da ta kasuwanci. Ƙwarewar gyara da hannu tana zuwa daga aiki ko koyon sana'a a wurin mai sana'a."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kafin da lokacin kowane gyara", action: "shirya teburi mai aminci da sarrafa batirin lithium lafiya, tare da gane batirin da ya kumbura, ya yi zafi ko ya lalace", standard: "kuna bin kowace doka a katin tsaron batirinku" },
    { id: "O2", condition: "Idan abokin ciniki ya kawo muku waya", action: "gano matsalar da ake zato ta hanyar dubawa mataki-mataki da rubuta aikin a katin aiki", standard: "tare da rubuta matsalar, farashin da aka amince da shi da yardar abokin ciniki kafin a fara aiki" },
    { id: "O3", condition: "Idan abokin ciniki ya bar muku waya", action: "kare bayanan abokin ciniki ta hanyar neman a ajiye kwafin bayanai (backup) da rashin kwafa, dubawa ko raba fayilolinsa", standard: "ba tare da neman lambar sirri (PIN) ko kalmar sirri da ba ku buƙata ba" },
    { id: "O4", condition: "Idan kuna da kuɗin sashe da lokacin da gyara ke ɗauka", action: "lissafa farashin gyara da rubuta jerin farashi tare da sharuɗɗan garanti", standard: "wanda ke rufe sashe, aiki da kuɗin shago tare da riba, da garanti a sarari" },
    { id: "O5", condition: "Idan kuna da matattun batura, fasassun allo ko wayar da kuke zargin ta sata ce", action: "zaɓar mataki mai aminci kuma bisa doka: ajiye sharar lantarki a ba mai tattarawa, da ƙin karɓar wayar da babu shaidar mallaka", standard: "ba tare da ƙonawa, zubarwa ko sayen waya ba tare da shaida ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aiki lafiya da gano matsala",
      lessons: [
        {
          title: "Teburin gyara mai aminci",
          objectives: ["O1"],
          minutes: 4,
          goal: "Shirya teburin gyara mai aminci, mai tsabta kuma a shirye don aiki.",
          text: [
            "Teburinku shi ne wurin da haɗari ke faruwa ko ake hana shi. Teburi mai kyau yana bushe, yana da haske sosai, kuma yana nesa da wutar girki, mai (fetur) da ruwa. Yana da tabarma mai jure zafi, ƙaramin tire don ƙusoshin waya (screws), da fili mai tsabta don kada ƙananan sassa su ɓace.",
            "Kayan aiki: sukurdireba masu dacewa, kayan buɗewa na roba (spudger), ƙaramin hanzaki (tweezers), kofin tsotsa, multimeter, da na'urar iska mai zafi ko ƙarfen walda idan an horar da ku kan amfani da su. Kayan zafi dole su zauna a kan wurin ajiyarsu (stand), ba a kan takarda ko zane ba, kuma a kashe su idan za ku bar teburin.",
            "Ku kare kanku da wayar: ku sa gilashin kare ido idan kuna buɗe allo ko aiki da gilashi, ku yi amfani da madaurin hannu mai hana static ko ku taɓa ƙarfe mara fenti don sakin static kafin ku taɓa allon cikin waya (board), kuma ku ajiye tukunyar ƙarfe mai busasshen yashi kusa da teburin don batirin da ya lalace. Ku san hanyar fita daga shagonku kuma ku bar ta a buɗe."
          ],
          steps: ["Ku zaɓi wuri mai bushe, mai haske, nesa da wutar girki, mai da ruwa.", "Ku shimfiɗa tabarma mai jure zafi da tiren ƙusoshi.", "Ku ajiye kayan zafi a kan wurin ajiyarsu kuma ku kashe su idan za ku tafi.", "Ku sa gilashin kare ido; ku saki static kafin ku taɓa board.", "Ku ajiye tukunyar ƙarfe mai busasshen yashi kusa da teburin, da hanyar fita a buɗe."],
          words: [["Spudger", "kayan aikin roba don buɗe waya da ɗaga sassa ba tare da ɓata su ko haddasa short ba."], ["Multimeter", "na'urar gwaji da ke auna ƙarfin wuta (voltage), gudun wuta (current) da juriya (resistance)."], ["Static", "ƙaramin cajin lantarki a jikinku da zai iya lalata board na waya."]],
          slides: [
            { title: "Inda za ku sa teburinku", bullets: ["Wuri mai bushe da haske", "Nesa da wutar girki, mai da ruwa", "Hanyar fita daga shago a buɗe"] },
            { title: "Kayan aiki na asali", bullets: ["Sukurdireba, spudger na roba, hanzaki, kofin tsotsa", "Multimeter", "Kayan zafi sai idan an horar da ku; koyaushe a kan stand"] },
            { title: "Ku kare kanku da wayar", bullets: ["Gilashin kare ido don gilashi da allo", "Ku saki static kafin ku taɓa board", "Tukunyar ƙarfe mai busasshen yashi don batir da ya lalace"] }
          ],
          tryIt: "Ku zana taswira mai sauƙi ta teburinku (ko teburin da kuke so): inda kowane kayan aiki zai tafi, inda kayan zafi zai tsaya, inda tukunyar yashi take, da hanyar fita. Ku rubuta abin da har yanzu kuke buƙatar saya.",
          youCanNow: "shirya teburin gyara mai aminci da tsabta tare da kayan aiki masu dacewa da kayan tsaro.",
          quickCheck: [
            { objective: "O1", q: "A ina na'urar iska mai zafi za ta zauna idan kun ajiye ta?", options: ["A kan tarin takardu", "A kan wayar abokin ciniki", "A kan stand ɗinta, nesa da zane da takarda", "A ƙasa"], answer: 2, why: "Stand yana hana bakinta mai zafi taɓa abubuwan da za su iya ƙonewa." },
            { objective: "O1", q: "Me yasa za ku ajiye tukunyar ƙarfe mai busasshen yashi kusa da teburinku?", options: ["Don ajiye ƙusoshi", "Don riƙe batirin da ya lalace lafiya", "Don goge allo", "Don auna sassa"], answer: 1, why: "Tukunyar ƙarfe mai yashi wuri ne mafi aminci ga batirin da ya lalace fiye da teburi ko kwandon shara." }
          ]
        },
        {
          title: "Haɗarin batirin lithium",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane batirin da ya kumbura, ya yi zafi ko ya lalace, da sarrafa shi ba tare da haddasa gobara ba.",
          text: [
            "Kusan kowace waya tana da batirin lithium-ion. Yana riƙe da ƙarfi mai yawa. Idan aka huda shi, aka lanƙwasa shi, aka murƙushe shi, ya yi zafi fiye da kima ko ya yi short, zai iya kama wuta da sauri sosai, ya fitar da hayaƙi mai guba, kuma ya sake kama wuta bayan ya yi kamar ya mutu.",
            "Alamun gargaɗi: kumburi (murfin baya ko allo ya ɗago), zafi, wani ƙamshi na daban, ƙarar shaƙa (sss) ko ƙarar fashewa, ko hayaƙi. Batirin da ya kumbura dole a canja shi; kada a danne shi, a huda shi ko a yi masa caji.",
            "Al'adu masu aminci: ku cire mahaɗin batir (connector) da farko, kafin ku yi aiki a kan board. Kada ku taɓa ƙwaƙulo batir da kayan ƙarfe; ku yi amfani da kayan roba da maganin cire manne mai dacewa, a hankali. Kada ku yi amfani da na'urar iska mai zafi kusa da batir. Ku yi wa wayoyi caji da cajar masu kyau kawai, a kan wuri mai tauri, inda kuke iya ganinsu.",
            "Idan batir ya fara hayaƙi ko shaƙa: ku nisantar da mutane kuma kada ku shaƙi hayaƙin. Sai idan za ku iya yi lafiya, ku yi amfani da dogon hanzaki ku sa shi a tukunyar ƙarfe mai yashi, a waje. Idan akwai gobarar da ba za ku iya shawo kanta ba, ku fitar da kowa ku kira 'yan kwana-kwana (hukumar kashe gobara)."
          ],
          steps: ["Ku duba kumburi, zafi, ƙamshi, ƙara ko hayaƙi kafin ku buɗe kowace waya.", "Ku cire mahaɗin batir kafin ku yi aiki a kan board.", "Ku yi amfani da kayan roba, ba na ƙarfe ba, don cire batir; kada ku lanƙwasa ko ku huda shi.", "Ku nisantar da kayan zafi daga batir.", "Idan ya yi hayaƙi: ku nisantar da mutane, ku yi amfani da hanzaki da tukunyar yashi sai idan lafiya, ku kira 'yan kwana-kwana idan gobara ce."],
          words: [["Batirin lithium-ion", "batirin da ake sake yi wa caji a cikin waya; yana ajiye ƙarfi mai yawa kuma zai iya ƙonewa idan ya lalace."], ["Batirin da ya kumbura", "batirin da ya cika ya ɗago saboda iska (gas) tana taruwa a ciki; yana da haɗari."], ["Short circuit", "lokacin da wuta ta bi hanyar da ba daidai ba, misali ta cikin kayan ƙarfe, ta haddasa zafi ko gobara."]],
          slides: [
            { title: "Me yasa batirin lithium ke da haɗari", bullets: ["Yana riƙe da ƙarfi mai yawa", "Lalacewa, zafi ko short zai iya haddasa gobara da sauri", "Hayaƙin guba ne; wutar za ta iya dawowa"] },
            { title: "Alamun gargaɗi", bullets: ["Kumburi: baya ko allo ya ɗago", "Zafi, ƙamshi na daban", "Ƙarar shaƙa, fashewa ko hayaƙi"] },
            { title: "Al'adu masu aminci", bullets: ["Ku cire mahaɗin batir da farko", "Kayan roba kawai; kada ku lanƙwasa ko ku huda", "Babu kayan zafi kusa da batir"] },
            { title: "Idan ya yi hayaƙi", bullets: ["Ku nisantar da mutane; kada ku shaƙi hayaƙin", "Sai idan lafiya: hanzaki, cikin tukunyar yashi, a waje", "Gobarar da ba za ku iya shawo kanta ba: ku fita, ku kira 'yan kwana-kwana"] }
          ],
          sources: [NFPA],
          tryIt: "Ku rubuta katin tsaron batirinku a layuka biyar don bangon shagonku: alamun gargaɗi, al'adu masu aminci, da abin da za a yi idan batir ya yi hayaƙi. Ku nemo lambar wayar 'yan kwana-kwana mafi kusa da ku.",
          youCanNow: "gane batir mai haɗari, sarrafa batura lafiya lokacin gyara, da ɗaukar mataki lafiya idan batir ya fara hayaƙi.",
          quickCheck: [
            { objective: "O1", q: "Murfin bayan waya ya ɗago saboda batirin ya kumbura. Me za ku yi?", options: ["Ku danne shi ku rufe wayar", "Ku yi masa caji don gwada shi", "Ku huda shi don iskar ta fita", "Ku canja shi, kuna riƙe shi a hankali ba tare da lanƙwasa ko huda shi ba"], answer: 3, why: "Batirin da ya kumbura yana da haɗari; dole a cire shi a hankali a canja shi, kada a danne, a huda ko a yi masa caji." },
            { objective: "O1", q: "Me za ku fara yi kafin ku yi aiki a kan board na waya?", options: ["Ku cire mahaɗin batir", "Ku zafafa board ɗin", "Ku yi wa wayar caji", "Ku cire tiren SIM kawai"], answer: 0, why: "Cire mahaɗin batir yana hana short da zai iya lalata board ko haddasa gobara." }
          ]
        },
        {
          title: "Gano matsala da rubuta katin aiki",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gano matsalar da ake zato ta hanyar dubawa mataki-mataki da rubuta aikin a katin aiki.",
          text: [
            "Ku fara da saurare. Ku tambayi abokin ciniki abin da ya faru: ta faɗi, ta jiƙe, tana jinkiri, ba ta caji, babu sauti? Yaushe ya fara? Sannan ku duba daga dalili mafi sauƙi zuwa mafi wuya. Wayoyi da yawa da ake ce \"sun mutu\" suna buƙatar caja mai kyau ne kawai, wurin caji mai tsabta ko sake kunna manhaja.",
            "Tsari mai sauƙi: (1) ku duba lalacewa, kumburi ko alamun ruwa; (2) ku gwada caja da waya (cable) da kuka sani suna aiki; (3) ku tsabtace wurin caji a hankali da tsinke na roba ko na itace; (4) ku sake kunna wayar, ku duba ko matsalar ta manhaja ce; (5) sai bayan haka ku buɗe wayar ku gwada sassa.",
            "Kafin ku fara kowane aikin da ake biya, ku rubuta katin aiki ku nuna wa abokin ciniki. Yana rubuta: kwanan wata, sunan abokin ciniki da lambar wayarsa, samfurin wayar da IMEI, abin da ya lalace, duk lalacewar da kuka gani (tsagewa, loɓewa), abin da za ku yi, farashin da aka amince, ranar da ake sa ran gamawa, da sa hannun abokin ciniki ko \"eh\" da aka naɗa. Ku ba abokin ciniki kwafi ko lambar tikiti. Wannan yana kare ku duka biyu.",
            "Misali: Kwame a Accra ya karɓi wayar da \"ba ta caji\". Ya gwada waya (cable) mai kyau, ya cire ƙura daga wurin caji, sai ta yi caji. Ya karɓi ɗan kuɗin tsabtacewa kawai, kuma abokin cinikin ya riƙa dawowa wurinsa don kowane gyara bayan haka."
          ],
          steps: ["Ku tambayi abin da ya faru da lokacin da ya fara.", "Ku duba lalacewa, kumburi ko alamun ruwa.", "Ku gwada caja da cable da kuka sani suna aiki; ku tsabtace wurin caji a hankali.", "Ku sake kunna wayar ku duba matsalar manhaja.", "Ku rubuta katin aiki da matsalar, lalacewar da aka gani, farashi da kwanan wata, ku sami \"eh\" na abokin ciniki kafin ku buɗe wayar."],
          words: [["Katin aiki (job card)", "rubutaccen bayanin gyara ɗaya: wayar, matsalar, farashi, kwanan wata da yardar abokin ciniki."], ["IMEI", "lambar waya ta musamman mai lambobi 15; ku danna *#06# don ganinta."], ["Matsalar manhaja (software)", "matsala a cikin shirye-shiryen waya, ba a sassanta ba; sau da yawa ana gyara ta da sake kunnawa ko sabuntawa."]],
          slides: [
            { title: "Ku fara da saurare", bullets: ["Me ya faru? Ta faɗi, ta jiƙe, tana jinkiri, ba ta caji?", "Yaushe ya fara?", "Wayoyi da yawa da \"suka mutu\" suna buƙatar gyara mai sauƙi kawai"] },
            { title: "Daga mafi sauƙi zuwa mafi wuya", bullets: ["Ku duba: lalacewa, kumburi, alamun ruwa", "Caja mai kyau; ku tsabtace wurin caji a hankali", "Ku sake kunnawa don manhaja; sannan ku buɗe ku gwada sassa"] },
            { title: "Katin aiki", bullets: ["Abokin ciniki, samfurin waya, IMEI (ku danna *#06#)", "Matsala, lalacewar da aka gani, aikin da za a yi", "Farashi, kwanan wata, \"eh\" na abokin ciniki; ku ba da kwafi ko tikiti"] }
          ],
          tryIt: "Ku zana katin aikinku a shafi ɗaya da dukkan akwatunan wannan darasi. Ku cike shi don wayar gwaji (taku ko ta aboki) da matsalar da kuka ƙirƙira.",
          youCanNow: "duba waya daga dalili mafi sauƙi zuwa mafi wuya da rubuta kowane aiki a katin aiki kafin ku fara.",
          quickCheck: [
            { objective: "O2", q: "Abokin ciniki ya ce wayar ba ta caji. Me za ku fara dubawa?", options: ["Ku canja board", "Caja da cable da kuka sani suna aiki, da wurin caji mai tsabta", "Ku canja allo", "Ku sayar masa da sabuwar waya"], answer: 1, why: "Ku fara da dalilai mafi sauƙi; mummunan cable ko wurin caji mai datti abu ne da aka saba gani." },
            { objective: "O2", q: "Me yasa za ku rubuta lalacewar da kuka gani, kamar fasasshen kusurwa, a katin aiki kafin ku fara?", options: ["Don abokin ciniki ya ƙara biya", "Ba a buƙata ba", "Don cike wuri", "Don kada wani daga baya ya ɗora muku laifin lalacewar da dama tana nan"], answer: 3, why: "Rubuta lalacewar da ke nan tun farko yana kare ku da abokin ciniki daga jayayya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aiki lafiya da gano matsala",
        questions: [
          { objective: "O1", q: "Wace ce alamar gargaɗi ta batir mai haɗari?", options: ["Wayar sabuwa ce", "Kumburi, zafi, ƙamshi, ƙarar shaƙa ko hayaƙi", "Batirin baƙi ne", "Wayar tana da murfi (case)"], answer: 1, why: "Kumburi, zafi, ƙamshi, ƙara da hayaƙi su ne alamun gargaɗi." },
          { objective: "O1", q: "Wane kayan aiki za ku yi amfani da shi don ƙwaƙulo batir?", options: ["Kayan roba, a hankali", "Sukurdireba na ƙarfe", "Wuƙar kicin", "Haƙoranku"], answer: 0, why: "Ƙarfe zai iya huda batir ko ya haddasa short; kayan roba sun fi aminci." },
          { objective: "O1", q: "Batir a kan teburinku ya fara shaƙa da hayaƙi. Mene ne matakin farko da ya dace?", options: ["Ku hura shi", "Ku sa shi a aljihunku", "Ku nisantar da mutane kuma ku guji hayaƙin", "Ku ci gaba da aiki"], answer: 2, why: "Lafiyar mutane ita ce ta farko; hayaƙin guba ne." },
          { objective: "O2", q: "A ina za ku sami IMEI na waya da sauri?", options: ["A jikin caja", "A jikin katin SIM", "A cikin jakar abokin ciniki", "Ta danna *#06#"], answer: 3, why: "Danna *#06# yana nuna IMEI a kusan kowace waya." },
          { objective: "O2", q: "Yaushe abokin ciniki zai amince da farashi?", options: ["Kafin ku fara, a rubuce a katin aiki", "Bayan kun gama", "Ba sai ya amince ba", "Lokacin da ya yi ƙorafi"], answer: 0, why: "Amincewa tun farko, a rubuce, yana hana jayayya." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da kasuwanci mai gaskiya da aminci",
      lessons: [
        {
          title: "Kare bayanan abokan cinikinku",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kare bayanan kowane abokin ciniki lokacin da wayarsa take a shagonku.",
          text: [
            "Waya tana ɗauke da rayuwar mutum: hotuna, saƙonni, kuɗin waya (mobile money), manhajojin banki da lambobin abokai. Abokan ciniki sun amince muku da ita. Hoto ɗaya da ya fita ko kuɗin waya da aka sace zai iya ɓata sunan shagonku, kuma a ƙasashe da yawa zai iya karya doka.",
            "Kafin gyara: ku nemi abokin ciniki ya ajiye kwafin bayanan wayarsa (backup) idan zai iya, kuma ya fita daga manhajojin kuɗin waya da na banki ko ya cire katin SIM. Yawancin gyare-gyare ba sa buƙatar lambar buɗe waya. Idan da gaske kuna buƙatarta don gwada wayar, ku nemi abokin ciniki ya buɗe ta a gabanku, ko ya sa lambar wucin gadi ya canja ta daga baya. Kada ku taɓa neman PIN na kuɗin waya ko na banki. Babu gyaran da ke buƙatarsa.",
            "Lokacin gyara da bayansa: kada ku buɗe hotuna, saƙonni ko manhajojin da ba sa cikin gyaran. Kada ku kwafi komai, kuma kada ku bar wasu su riƙa taɓa wayoyi. Ku ajiye wayoyi a cikin aljihun tebur mai makulli. Ku yayyaga katunan aiki ko ku ajiye su lafiya, saboda suna ɗauke da sunaye da lambobi.",
            "Ƙasashe suna da dokoki da ofisoshin kare bayanai, misali Ofishin Kwamishinan Kare Bayanai na Kenya, Hukumar Kare Bayanai ta Najeriya, da Hukumar Kare Bayanai ta Ghana, inda kasuwancin da ke riƙe bayanan mutane dole su yi rajista. Ku tabbatar da abin da ofishin ƙasarku yake tsammani daga ƙaramin kasuwanci kamar naku."
          ],
          steps: ["Ku nemi abokin ciniki ya ajiye backup ya fita daga manhajojin kuɗi, ko ya cire SIM.", "Kada ku nemi lambar buɗe waya sai idan da gaske kuna buƙata; ku bar abokin ciniki ya buɗe ta a gabanku.", "Kada ku taɓa neman PIN na kuɗin waya ko na banki.", "Ku buɗe abin da gyaran ke buƙata kawai; kada ku kwafi komai.", "Ku kulle wayoyi da katunan aiki; ku duba dokokin kare bayanai na ƙasarku."],
          words: [["Bayanan mutum (personal data)", "bayani game da mutum, kamar sunansa, lambarsa, hotunansa da saƙonninsa."], ["Backup", "kwafin bayanan waya da aka ajiye a wani wuri, don kada komai ya ɓace idan gyaran ya lalace."], ["Dokar kare bayanai", "dokar da ke faɗin yadda kasuwanci dole su tattara, ajiye da kare bayanan mutane."]],
          slides: [
            { title: "Waya tana ɗauke da rayuwa", bullets: ["Hotuna, saƙonni, lambobin abokai", "Kuɗin waya da manhajojin banki", "Fitar bayanai zai iya ɓata sunan shagonku"] },
            { title: "Kafin gyara", bullets: ["Abokin ciniki ya ajiye backup na wayar", "Ya fita daga manhajojin kuɗi, ko ya cire SIM", "Lambar buɗe waya sai idan da gaske ana buƙata; PIN kada"] },
            { title: "Lokacin gyara da bayansa", bullets: ["Ku buɗe abin da gyaran ke buƙata kawai", "Kada ku kwafi komai; kada wani ya taɓa wayoyi", "Ku kulle wayoyi da katunan aiki"] },
            { title: "Ku san doka", bullets: ["Kenya: Ofishin Kwamishinan Kare Bayanai", "Najeriya: Hukumar Kare Bayanai ta Najeriya", "Ghana: Hukumar Kare Bayanai; sauran: ofishin ƙasarku"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Ku rubuta alƙawarinku na kare bayanan abokin ciniki: aƙalla gajerun layuka huɗu da za ku nuna wa kowane abokin ciniki, kamar \"Ba mu taɓa neman PIN na kuɗin wayarku ba.\" Ku rubuta sunan ofishin kare bayanai na ƙasarku.",
          youCanNow: "kare bayanan abokan cinikinku kafin, lokacin da bayan gyara, da sanin ofishin da ke kafa dokoki a ƙasarku.",
          quickCheck: [
            { objective: "O3", q: "Wani mai gyara ya nemi PIN na kuɗin wayar abokin ciniki don \"gwada wayar\". Mene ne gaskiya?", options: ["Ana buƙatarsa a kowane gyara", "Ba laifi idan mai gaskiya ne", "Babu gyaran da ke buƙatarsa; kada a taɓa nema", "Sai don gyaran allo kawai"], answer: 2, why: "Babu gyaran da ke buƙatar PIN na kuɗin waya ko na banki." },
            { objective: "O3", q: "Me abokin ciniki zai yi kafin ya bar wayar, idan zai iya?", options: ["Ya ba ku dukkan kalmomin sirrinsa", "Ya ajiye backup na wayar ya fita daga manhajojin kuɗi", "Ya bar wayar a buɗe har abada", "Ya goge dukkan lambobin abokansa"], answer: 1, why: "Backup da fita daga manhajojin kuɗi suna kare shi idan wani abu ya lalace." }
          ]
        },
        {
          title: "Farashin gyara, garanti da ƙin karɓar wayoyin sata",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Lissafa farashin gyara da rubuta jerin farashi tare da sharuɗɗan garanti.",
          text: [
            "Farashi mai adalci yana rufe abubuwa uku kuma yana barin riba: sashen, lokacinku (kuɗin aiki), da rabon kuɗin shagonku, kamar haya, wutar lantarki, kayan aiki da data. Misali (adadin misalai ne kawai): allo yana kashe NGN 15,000. Kuɗin aikinku NGN 4,000 ne, rabon kuɗin shago kuma NGN 1,000. Jimlar kashewa: NGN 20,000. Ku ƙara ribar NGN 3,000: farashi NGN 23,000.",
            "Sassa suna zuwa da inganci daban-daban. Ku faɗa wa abokin ciniki gaskiya game da sashen da kuke amfani da shi (na asali, kwafi mai kyau ko kwafi mai arha) da farashin kowanne. Sashe mai arha da ya lalace cikin mako guda zai ɓata muku suna.",
            "Garanti alƙawarinku ne: idan gyaran guda ya lalace cikin wasu kwanaki da aka ƙayyade saboda aikinku ko sashen, za ku gyara kyauta. Ku rubuta kwanaki nawa, da abin da ba ya ciki (sabuwar faɗuwa, ruwa, wani daban ya buɗe wayar). Ku sa jerin farashi da garanti inda abokan ciniki za su gani.",
            "Ku ƙi karɓar wayoyin da ƙila na sata ne. Kada ku saya, ku buɗe kulle (unlock) ko ku ɓalle waya don sassanta sai dai idan mai sayarwa ya nuna shaidar cewa tasa ce, kamar kwalinta mai IMEI da ya yi daidai ko rasiti. Idan waya tana kama da ta sata, kada ku yi gardama; ku ƙi a ladabce. A ƙasashe da yawa, sayen kayan sata laifi ne."
          ],
          steps: ["Ku haɗa kuɗin sashe, kuɗin aikinku da rabon kuɗin shago.", "Ku ƙara ribarku don samun farashi.", "Ku ba da zaɓin sassa da gaskiya, da farashin kowanne.", "Ku rubuta kwanakin garanti da abin da ba ya ciki.", "Ku nuna jerin farashi; ku ƙi wayoyin da babu shaidar mallaka."],
          words: [["Kuɗin aiki (labour)", "biyan lokacinku da ƙwarewarku."], ["Kuɗin shago (overhead)", "kuɗin gudanar da shago, kamar haya, wuta, kayan aiki da data, da ake rabawa a kan ayyuka."], ["Garanti (warranty)", "rubutaccen alƙawarin gyara matsala guda kyauta na wani lokaci da aka ƙayyade."]],
          slides: [
            { title: "Abin da farashi ke rufewa", bullets: ["Sashe + kuɗin aiki + rabon kuɗin shago", "Sannan ku ƙara ribarku", "Misali: kashewa NGN 20,000 + NGN 3,000 = NGN 23,000"] },
            { title: "Sassa na gaskiya", bullets: ["Na asali, kwafi mai kyau ko kwafi mai arha", "Ku faɗa wa abokin ciniki wanne ne, da farashin kowanne", "Sassa masu arha da suke lalacewa suna ɓata suna"] },
            { title: "Garantinku", bullets: ["Matsala guda a gyara kyauta na kwanakin da aka ƙayyade", "Ba ya ciki: sabuwar faɗuwa, ruwa, wani ya buɗe wayar", "Ku nuna jerin farashi da garanti"] },
            { title: "Ku ƙi wayoyin sata", bullets: ["Shaida: kwali mai IMEI da ya yi daidai, ko rasiti", "Babu shaida: ku ƙi a ladabce", "Sayen kayan sata zai iya zama laifi"] }
          ],
          tryIt: "Ku rubuta jerin farashinku don gyare-gyare biyar da aka saba yi: ga kowanne, kuɗin sashe, kuɗin aiki, rabon kuɗin shago, riba, farashi da kwanakin garanti. Ku yi amfani da kuɗin ƙasarku.",
          youCanNow: "sanya farashin gyara da zai rufe dukkan kuɗaɗenku tare da riba, rubuta garanti, da ƙin karɓar wayar da ƙila ta sata ce.",
          quickCheck: [
            { objective: "O4", q: "Sashe GHS 150, kuɗin aiki GHS 60, rabon kuɗin shago GHS 20, riba GHS 40. Nawa ne farashi?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "Wani matashi yana son sayar muku da waya da arha amma babu kwali kuma babu rasiti. Me za ku yi?", options: ["Ku ƙi a ladabce", "Ku saye ta da sauri kafin wasu", "Ku fara buɗe masa kullenta", "Ku ɓalle ta don sassa"], answer: 0, why: "Ba tare da shaidar mallaka ba wayar na iya zama ta sata; ku ƙi." }
          ]
        },
        {
          title: "Sharar lantarki, matattun batura da kayan farawa na shagonku",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Ajiye matattun batura da sassan da suka karye lafiya da ba su ga mai tattarawa mai dacewa.",
          text: [
            "Tsofaffin wayoyi, allo, board da batura sharar lantarki ne (e-waste). Suna ɗauke da gubar dalma (lead), mercury da wasu gubobi. WHO (Hukumar Lafiya ta Duniya) ta ce ƙona sharar lantarki ita ce hanya mafi haɗari ta sarrafa ta, kuma ta fi cutar da yara da mata masu ciki. A 2022 duniya ta samar da kusan tan miliyan 62 na sharar lantarki, kuma kashi 22.3% kawai aka rubuta cewa an tattara su an sake sarrafa su yadda ya kamata.",
            "Kada ku taɓa ƙona sharar lantarki don samun jan ƙarfe (copper), kuma kada ku jefa batura a kwandon shara, a wuta ko a magudanar ruwa. Ku naɗe ƙarshen batir (terminals) da tef, ku ajiye su a rufaffiyar tukunyar ƙarfe mai busasshen yashi nesa da zafi, kuma ku ajiye fasassun allo da board a wani akwati na daban mai rubutaccen suna.",
            "Ku ba su ga mai tattara sharar lantarki ko mai sake sarrafa ta. Ku tambayi ƙaramar hukuma ko majalisar birni, hukumar kula da muhalli, ko masu sayar da waya da shagunan kamfanonin sadarwa, waɗanne masu tattarawa aka amince da su a yankinku. Ku rubuta abin da kuka bayar da lokacin da kuka bayar.",
            "Yanzu ku yi kayan farawa: jerin farashinku, katin aikinku, alƙawarinku na kare bayanai da katin tsaronku mai dokokin batir da inda sharar lantarkinku za ta tafi."
          ],
          steps: ["Ku naɗe terminals na matattun batura da tef.", "Ku ajiye su a rufaffiyar tukunyar ƙarfe mai busasshen yashi, nesa da zafi.", "Ku ajiye fasassun allo da board a akwati mai rubutaccen suna.", "Ku tambayi ƙaramar hukuma ko hukumar muhalli mai tattarawa da aka amince da shi.", "Ku ba da su ku rubuta me da yaushe. Kada ku taɓa ƙonawa ko zubar da sharar lantarki."],
          words: [["Sharar lantarki (e-waste)", "tsofaffin kayan lantarki ko waɗanda suka karye da sassansu, kamar waya, allo, board da batura."], ["Terminals", "ƙarshen batir na ƙarfe inda yake haɗuwa; naɗe su da tef yana hana short."], ["Mai sake sarrafawa (recycler)", "kasuwancin da ke ɓalle sharar lantarki lafiya ya fitar da abubuwan da za a sake amfani da su."]],
          slides: [
            { title: "Sharar lantarki guba ce", bullets: ["Dalma, mercury da wasu gubobi", "Ƙonawa ita ce mafi haɗari (WHO)", "Yara da mata masu ciki suka fi cutuwa"] },
            { title: "Ku ajiye ta lafiya", bullets: ["Ku naɗe terminals na matattun batura da tef", "Rufaffiyar tukunyar ƙarfe mai busasshen yashi, nesa da zafi", "Allo da board a akwati mai rubutaccen suna"] },
            { title: "Ku ba da ita", bullets: ["Ku tambayi ƙaramar hukuma ko hukumar muhalli", "Ku yi amfani da mai tattarawa ko mai sake sarrafawa da aka amince", "Ku rubuta abin da kuka bayar da lokacin"] },
            { title: "Kayan farawa na shagonku", bullets: ["Jerin farashi tare da garanti", "Katin aiki; alƙawarin kare bayanan abokin ciniki", "Katin tsaro: dokokin batir da shirin sharar lantarki"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Ku yi kayan farawa na shagonku, kamar yadda aka bayyana a aikin ƙarshe. Ku ƙara layi ɗaya a katin tsaronku da ke faɗin wanda zai tattara sharar lantarkinku, ko ofishin da za ku tambaya.",
          youCanNow: "ajiye da ba da sharar lantarki lafiya da haɗa kayan farawa don shagon gyaran waya mai gaskiya da aminci.",
          quickCheck: [
            { objective: "O5", q: "Wace ce hanya mafi aminci ta zubar da matattun batirin waya?", options: ["Ƙona su", "Jefa su a kwandon shara", "Naɗe terminals da tef, ajiye su a tukunyar yashi, ba su ga mai tattarawa da aka amince", "Binne su a tsakar gida"], answer: 2, why: "Naɗewa da tef, ajiya lafiya da mai tattarawa da aka amince suna hana gobara da gurɓatar muhalli." },
            { objective: "O5", q: "A cewar WHO, wace ce hanya mafi haɗari ta sarrafa sharar lantarki?", options: ["Ajiye ta a akwati", "Kai ta wurin mai sake sarrafawa", "Rubuta ta", "Ƙona ta"], answer: 3, why: "WHO ta ce ƙona sharar lantarki ita ce hanya mafi haɗari saboda hayaƙinta mai guba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da kasuwanci mai gaskiya da aminci",
        questions: [
          { objective: "O3", q: "Gyara yana buƙatar a buɗe wayar da gaske don gwada ta. Wace ce hanya mafi kyau?", options: ["Ku nemi abokin ciniki ya buɗe ta a gabanku, ko ya sa lambar wucin gadi", "Ku nemi PIN na bankinsa", "Ku yi hasashen lambar", "Ku sake saita wayar ba tare da tambaya ba"], answer: 0, why: "Abokin ciniki yana riƙe da ikon lambarsa, kuma babu PIN na kuɗi da ke ciki ko kaɗan." },
          { objective: "O3", q: "Me za ku yi da katunan aiki da ke ɗauke da sunaye da lambobin abokan ciniki?", options: ["Ku jefa su a titi", "Ku saka su a intanet", "Ku kulle su ko ku yayyaga su idan ba a buƙatarsu", "Ku ba wasu shaguna"], answer: 2, why: "Katunan aiki suna ɗauke da bayanan mutane, don haka dole a ajiye su lafiya." },
          { objective: "O4", q: "Wane kuɗi ne sababbin masu gyara suka fi mantawa a farashinsu?", options: ["Sashen", "Rabonsu na kuɗin shago kamar haya da wuta", "Allon", "Sunan abokin ciniki"], answer: 1, why: "Kuɗin shago kamar haya, wuta da data dole a raba su a kan ayyuka, ko ku yi asara." },
          { objective: "O4", q: "Me garanti ya kamata ya faɗa?", options: ["Ba komai; ku yi murmushi kawai", "Cewa kowace matsala kyauta ce har abada", "Farashi kawai", "Kwanaki nawa, da abin da ba ya ciki"], answer: 3, why: "Garanti mai sarari yana faɗin kwanaki da abubuwan da ba su ciki." },
          { objective: "O5", q: "Me yasa sayen waya ba tare da shaidar mallaka ba matsala ce?", options: ["Tana iya zama ta sata, kuma sayen kayan sata zai iya zama laifi", "Kullum tana da tsada sosai", "Wayoyin da ba su da kwali ba sa aiki", "Ba matsala ba ce"], answer: 0, why: "Ba tare da shaida ba, wayar na iya zama ta sata, wanda ke kawo matsalar doka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Fara Kasuwancin Gyaran Waya",
    questions: [
      { objective: "O1", q: "Ina ne wuri mafi kyau don teburin gyaranku?", options: ["Kusa da wutar girki", "Wuri mai bushe, mai haske, nesa da mai da ruwa", "A waje cikin ruwan sama", "A kan galan na mai"], answer: 1, why: "Teburi mai bushe, mai haske, nesa da mai da ruwa shi ne mafi aminci." },
      { objective: "O1", q: "Me za ku sa idan kuna buɗe fasasshen allo?", options: ["Gilashin kare ido", "Ba wani abu na musamman", "Safar hannu ta ƙarfe", "Gilashin rana da dare kawai"], answer: 0, why: "Gilashin kare ido yana kare idanunku daga ɓarɓashin gilashi." },
      { objective: "O1", q: "Me yasa kada ku taɓa amfani da na'urar iska mai zafi kusa da batir?", options: ["Tana ɓata wutar lantarki", "Tana ɓata allon", "Zafi zai iya sa batir ya kama wuta", "Tana da jinkiri sosai"], answer: 2, why: "Zafafa batirin lithium fiye da kima zai iya haddasa gobara." },
      { objective: "O1", q: "Me ba za ku TAƁA yi wa batir da ya kumbura ba?", options: ["Cire shi a hankali", "Ajiye shi a tukunyar yashi", "Faɗa wa abokin ciniki", "Danne shi ko huda shi"], answer: 3, why: "Danne ko huda batirin da ya kumbura zai iya sa ya ƙone." },
      { objective: "O2", q: "Mene ne tsarin dubawa da ya dace?", options: ["Ku buɗe wayar da farko, sannan ku yi tambayoyi", "Dalilai mafi sauƙi da farko: dubawa, caja, wurin caji, sake kunnawa, sannan buɗewa", "Ku canja board da farko", "Ku karɓi kuɗin abokin ciniki da farko"], answer: 1, why: "Farawa da mai sauƙi yana ceton lokaci da kuɗi kuma yana hana buɗewa ba tare da dalili ba." },
      { objective: "O2", q: "Wane abu ne ya kamata ya kasance a katin aiki?", options: ["PIN na kuɗin wayar abokin ciniki", "Kalmar sirrin bankin abokin ciniki", "Samfurin waya, IMEI, matsala, lalacewar da aka gani, farashi da kwanan wata", "Makullan gidan abokin ciniki"], answer: 2, why: "Katin aiki yana rubuta aikin, ba sirri kamar PIN ko kalmomin sirri ba." },
      { objective: "O2", q: "Waya \"ba ta caji\". Kun cire ƙura daga wurin caji sai ta yi caji. Nawa za ku karɓa?", options: ["Farashin sabon board", "Ɗan kuɗi mai adalci don aikin da kuka yi", "Ba komai, kuma ku ƙi ayyuka a gaba", "Farashin sabuwar waya"], answer: 1, why: "Farashi na gaskiya don ainihin aikin yana gina amana da abokan ciniki masu dawowa." },
      { objective: "O2", q: "Me yasa za ku sami \"eh\" na abokin ciniki kafin ku buɗe wayar?", options: ["Don ya amince da aikin da farashi, wanda ke hana jayayya", "Ba a buƙata ba", "Don ku ƙara farashi daga baya", "Don ku san PIN ɗinsa"], answer: 0, why: "Rubutacciyar yarjejeniya tana kare ku duka biyu." },
      { objective: "O3", q: "Me gyaran waya ba ya taɓa buƙata?", options: ["Samfurin wayar", "Bayanin matsalar", "Lambar wayar abokin ciniki", "PIN na kuɗin wayar abokin ciniki"], answer: 3, why: "Babu gyaran da ke buƙatar PIN na kuɗin waya ko na banki." },
      { objective: "O3", q: "Lokacin gyaran allo, kun ga hotunan abokin ciniki. Me za ku yi?", options: ["Ku buɗe abin da gyaran ke buƙata kawai, kada ku kalli wani abu", "Ku duba hotunan", "Ku kwafe su zuwa wayarku", "Ku nuna wa aboki"], answer: 0, why: "Girmama sirri yana nufin buɗe abin da gyaran ke buƙata kawai." },
      { objective: "O3", q: "Wane ofishi ne ke kafa dokokin kare bayanai a Najeriya?", options: ["'Yan kwana-kwana", "Hukumar Kare Bayanai ta Najeriya", "Hukumar ƙwallon ƙafa", "Babu ofishi"], answer: 1, why: "An kafa Hukumar Kare Bayanai ta Najeriya ƙarƙashin Dokar Kare Bayanai ta Najeriya ta 2023." },
      { objective: "O3", q: "A ina za a ajiye wayoyin da ke jiran gyara?", options: ["A kan kanta inda kowa zai iya ɗauka", "A aljihun tebur mai makulli", "Wurin maƙwabci", "A wajen shago"], answer: 1, why: "Kulle wayoyi yana kare su da bayanan da ke cikinsu." },
      { objective: "O4", q: "Sashe KES 2,500, kuɗin aiki KES 800, rabon kuɗin shago KES 200, riba KES 500. Nawa ne farashi?", options: ["KES 3,300", "KES 3,500", "KES 4,000", "KES 2,500"], answer: 2, why: "2,500 + 800 + 200 + 500 = 4,000." },
      { objective: "O4", q: "Abokin ciniki zai iya biyan allon kwafi mai arha ko na asali. Mene ne gaskiya?", options: ["Ku faɗa masa wane sashe, da farashin kowanne, ku bar shi ya zaɓa", "Ku ce kwafin na asali ne", "Ku sa mafi arha ku karɓi kuɗin na asali", "Ku ƙi faɗa"], answer: 0, why: "Zaɓin sassa na gaskiya yana gina amana kuma yana hana ƙorafi." },
      { objective: "O4", q: "Wanne ne yawanci BA ya cikin garantin gyara?", options: ["Sashe guda ya lalace saboda aikinku", "Matsala a sashen da kuka sa", "Kuskurenku wajen sawa", "Sabuwar faɗuwa ko lalacewar ruwa"], answer: 3, why: "Sabuwar lalacewa bayan gyara yawanci ba ta ciki; ku rubuta haka a garantinku." },
      { objective: "O5", q: "Mai sayarwa yana da kwali mai IMEI da ya yi daidai da wayar (danna *#06#) da rasiti. Me wannan ke nunawa?", options: ["Shaida cewa wayar ta yiwu tasa ce", "Cewa wayar ta sata ce", "Ba komai", "Cewa ta lalace"], answer: 0, why: "IMEI da ya yi daidai da rasiti shaidar mallaka ne." },
      { objective: "O5", q: "Me yasa kada ku taɓa ƙona tsofaffin board don samun jan ƙarfe?", options: ["Jan ƙarfe ba shi da daraja", "Yana ɗaukar lokaci sosai", "Hayaƙin guba ne, kuma ya fi cutar da yara da mata masu ciki", "Ba shi da ƙara"], answer: 2, why: "Ƙona sharar lantarki yana fitar da hayaƙi mai guba, hanya mafi haɗari a cewar WHO." },
      { objective: "O5", q: "Yaya za ku ajiye matattun batura kafin a tattara su?", options: ["A warwatse a aljihun tebur tare da kayan aiki", "Terminals a naɗe da tef, a rufaffiyar tukunyar ƙarfe mai busasshen yashi, nesa da zafi", "A bokitin ruwa a rana", "A aljihunku"], answer: 1, why: "Naɗewa da tef da tukunyar yashi suna hana short da gobara." },
      { objective: "O5", q: "Wane ne zai iya faɗa muku game da masu tattara sharar lantarki da aka amince da su?", options: ["Abokan cinikinku kaɗai", "Babu kowa", "Wani mai ƙona shara a bakin hanya", "Ƙaramar hukuma ko hukumar kula da muhalli"], answer: 3, why: "Ƙananan hukumomi da hukumomin muhalli sun san masu tattarawa da aka amince da su." },
      { objective: "O1", q: "Batir ya fara ƙonewa kuma ba za ku iya shawo kansa ba. Me za ku yi?", options: ["Ku fitar da kowa ku kira 'yan kwana-kwana", "Ku ci gaba da gyara", "Ku zuba mai a kansa", "Ku ɗauke shi da hannunku"], answer: 0, why: "Gobarar da ba a iya shawo kanta tana nufin fita da kiran 'yan kwana-kwana." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na kayan farawarku ku sake gwadawa.",
    criteria: [
      { name: "Katin tsaron batir", objective: "O1", notYet: "Babu kati, ko bai ambaci alamun gargaɗi ba ko abin da za a yi idan batir ya yi hayaƙi.", meets: "Katin yana lissafa alamun gargaɗi, al'adu masu aminci da abin da za a yi idan batir ya yi hayaƙi ko ya ƙone.", exceeds: "Yana kuma nuna lambar 'yan kwana-kwana da inda ake ajiye tukunyar yashi." },
      { name: "Katin aiki", objective: "O2", notYet: "Katin aiki bai da matsalar, farashi ko yardar abokin ciniki.", meets: "Yana rubuta abokin ciniki, samfurin waya, IMEI, matsala, lalacewar da aka gani, aiki, farashi, kwanan wata da \"eh\" na abokin ciniki.", exceeds: "Yana kuma da lambar tikiti da akwatin ranar ƙarewar garanti." },
      { name: "Alƙawarin kare bayanan abokin ciniki", objective: "O3", notYet: "Babu alƙawari, ko yana neman PIN ko kalmar sirri.", meets: "Aƙalla layuka huɗu masu sarari, ciki har da rashin neman PIN na kuɗi da rashin kwafar komai.", exceeds: "Yana kuma ambaton ofishin kare bayanai na ƙasar da yadda ake ajiye katunan aiki lafiya." },
      { name: "Jerin farashi", objective: "O4", notYet: "Farashin hasashe ne, ko lissafin ba daidai ba ne.", meets: "Aƙalla gyare-gyare biyar, kowanne da sashe, kuɗin aiki, kuɗin shago, riba, farashi da kwanakin garanti, kuma lissafin ya yi daidai.", exceeds: "Yana kuma nuna zaɓin sassa (na asali ko kwafi) da abin da garanti ba ya ciki." },
      { name: "Sharar lantarki da wayoyin sata", objective: "O5", notYet: "Babu shiri, ko shirin ya haɗa da ƙonawa ko zubarwa.", meets: "Ana ajiye batura da sassa lafiya a ba mai tattarawa ko ofishi da aka ambata sunansa; ana ƙin wayoyin da babu shaida.", exceeds: "Ana kuma ajiye bayanin abin da aka bayar da lokacin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce suna amfani da katin aiki da jerin farashi a shagonsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce babu gobarar batir ko ƙorafin bayanai a shagonsu cikin kwanaki 90",
      "Masu koyo da suka ce suna ba mai tattarawa sharar lantarki maimakon ƙonawa ko zubarwa cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai sauƙi mai na'urar lissafi (calculator)",
      "Takarda da alƙalami don taswirar teburi, katin aiki, jerin farashi, alƙawarin kare bayanai da katin tsaro",
      "Idan zai yiwu, tsohuwar waya (wadda mai horarwa ya riga ya cire batirinta lafiya) don gwaji da katin aiki",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "A shirin matasa ko na koyon sana'a: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama; ku haɗa kwas ɗin da aiki da hannu tare da ƙwararren mai gyara.",
      "Kada ku taɓa bar masu koyo su yi gwaji a kan batir da ya kumbura ko ya lalace; ku nuna hotuna a maimakon haka.",
      "Kafin kwas ɗin, ku nemo waɗanne masu tattara sharar lantarki da aka amince da su da kuma wane ofishin kare bayanai ne ke yankinku, don masu koyo su rubuta sunaye na gaske.",
      "Kada ku taɓa neman masu koyo su faɗi PIN ko kalmomin sirri a aji.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
