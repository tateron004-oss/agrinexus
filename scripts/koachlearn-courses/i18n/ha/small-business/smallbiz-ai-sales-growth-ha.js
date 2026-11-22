"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-sales-growth.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business (jagorar bin dokar imel na kasuwanci)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "AI don Ƙara Ciniki da Bunƙasa Kasuwanci",
  skills: "Bayyana kwastoman da kuka fi so, Rubuta tayi a sarari, Ajiye jerin kwastomomi mai sauƙi, Rubuta saƙonnin biyo baya, Karanta alƙaluman ciniki, Tsara shirin bunƙasa na kwana 30",
  outcome: "amfani da AI don tsarawa da gudanar da shirin ƙara ciniki na kwana 30 ga kasuwancinku: bayyana kwastoman da kuka fi so, rubuta tayi ɗaya a sarari, kafa jerin kwastomomi mai sauƙi, rubuta jerin saƙonnin biyo baya da ke bin dokokin imel, da bin diddigin sakamako a cikin spreadsheet.",
  about: [
    "Wannan kwas ɗin na masu ƙananan kasuwanci ne da ke son ƙarin ciniki daga kwastomomin da suke da su da waɗanda ke kusa: shaguna, gidajen abinci, wuraren gyaran gashi, masu tsabtace gida da masu gyara, masu dafa abincin biki da motocin sayar da abinci. Da yawa daga cikin ɗalibanmu masu kasuwanci ne daga ƙananan al'ummomi (minority) da ke bunƙasa ba tare da babban kasafin talla ba.",
    "Za ku yi amfani da mataimakin AI kyauta don yin tunani kan wane ne ke saya daga gare ku, tsara tayi mai ma'ana, bin diddigin kwastomomin da suka yarda ku riƙa tuntuɓar su, da karanta alƙaluman kasuwancinku don ganin abin da ke aiki. AI yana taimaka muku rubutu da tunani; hankalinku da dangantakarku da kwastomomi ne ke yin cinikin.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ayyukan suna haɗuwa su zama shirin ciniki na kwana 30."
  ],
  finalTask: "Ku rubuta shirin ciniki na kwana 30 a shafi ɗaya: kwastoman da kuka fi so a jimloli uku, tayi ɗaya mai farashi a sarari da ranar ƙarewa, inda jerin kwastomominku yake da yadda mutane suka shiga ciki, jerin saƙonnin biyo baya guda uku (tare da adireshinku da layin daina karɓar saƙo a kowane imel na talla), da teburin bin diddigi mai alƙaluman da za ku duba kowane mako.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da ke son ƙarin ciniki daga kwastomominsu na yanzu da na kusa: shaguna, gidajen abinci, wuraren gyaran gashi, masu tsabtace gida da masu gyara, masu dafa abincin biki da motocin sayar da abinci. Da yawa masu kasuwanci ne daga ƙananan al'ummomi da ke bunƙasa ba tare da babban kasafin talla ba.",
    startingPoint: "Sun san kwastomominsu na yau da kullum da kayansu sosai. Ba sa yawan amfani da rubutaccen tayi, jerin kwastomomi masu izini, saƙonnin biyo baya ta imel ko tes, bin diddigin ciniki, ko AI don tsara abubuwa.",
    gap: "Ba tare da shiri ba, ƙoƙarin ƙara ciniki yana zama ba tsari, rangwame yana iya cinye riba, kuma saƙonnin talla suna iya karya dokokin imel da tes. Masu kasuwanci suna buƙatar shiri mai sauƙi na kwana 30 da aka gina da taimakon AI, wanda ke nufar kwastomomin da suka dace, ke ba da tayi mai riba, ke bin diddigi bisa doka, kuma ke bin abin da ke aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: wayar zamani ko kwamfuta; spreadsheet ya fi sauƙi a kwamfuta",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki mai cike da hidima",
      "Dokoki: CAN-SPAM don imel na talla, da wasu dokokin tarayya daban don tes na talla",
      "Sirri: jerin kwastomomi suna zama a kiyaye kuma ba a saka su cikin kayan AI"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI for Small Business\" (Gabatarwa ga AI don Ƙananan Kasuwanci) yana da amfani amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Bisa abin da kuke gani tare da kwastomominku mafi kyau", action: "rubuta gajeren bayani na musamman game da kwastoman da kuka fi so da taimakon AI", standard: "a jimloli uku da ke faɗin su wane ne, me suke buƙata da dalilin da yasa suke zaɓar ku" },
    { id: "O2", condition: "Idan aka ba ku ra'ayoyin tayi daga AI", action: "tsara tayi ɗaya a sarari kuma na gaskiya", standard: "mai faɗin abin da ake sayarwa, farashi, dalilin yin aiki yanzu da ranar ƙarewa, tare da lissafin riba a takarda" },
    { id: "O3", condition: "Ta amfani da spreadsheet", action: "kafa jerin kwastomomi da ke rubuta izinin tuntuɓa", standard: "mai shafi (column) na yarda da kwanan wata, hanyar yin rajista, kuma babu bayanan kwastomomi na gaske a cikin AI" },
    { id: "O4", condition: "Bisa dokar CAN-SPAM da dokokin tes", action: "rubuta jerin saƙonnin biyo baya guda uku da taimakon AI", standard: "tare da adireshin gidan waya da layin daina karɓar saƙo a kowane imel na talla, kuma tes ne kawai idan akwai izini a sarari" },
    { id: "O5", condition: "Idan kuna da alƙaluman ciniki na mako huɗu", action: "bin diddigin alƙaluman cinikinku a tebur da duba tsarin da AI ya gani", standard: "tare da formula don jimla, ba tare da sunayen kwastomomi ba, kuma an tabbatar da aƙalla tsari ɗaya a cikin takardar" },
    { id: "O6", condition: "Idan kuna da kwastomanku, tayinku, jerinku, saƙonnin biyo baya da bin diddigi", action: "rubuta shirin ciniki na kwana 30 a shafi ɗaya", standard: "wanda ya dace da ainihin lokutan aikinku, mai alƙaluman mako-mako da za a duba da bita a rana ta 30" }
  ],
  chapters: [
    {
      name: "Babi na 1: Wane ne ke saya da me kuke bayarwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bayyana kwastoman da kuka fi so",
          minutes: 5,
          goal: "Rubuta gajeren bayani na musamman game da irin kwastoman da kuka fi son samun ƙari.",
          text: [
            "Ba za ku iya sayar wa kowa da kyau ba. Ku yi tunanin kwastomominku mafi kyau: waɗanda ke dawowa, suke kashe kuɗi da kyau, kuma suke turo abokansu. Me suke da shi iri ɗaya?",
            "Ku rubuta jimloli uku: su wane ne, me suke buƙata, da me ke sa su zaɓar ku. Misali ga gidan abincin Afirka ta Yamma: \"Ma'aikatan ofis da ke cikin mil biyu da ke son abincin rana mai ƙoshi ƙasa da $15. Suna cikin aiki kuma suna yin oda a wayoyinsu. Suna zaɓar mu saboda abinci mai yawa da karɓa da sauri.\"",
            "AI zai iya taimaka muku tunani: \"Ga abin da na sani game da kwastomomina mafi kyau. Wadanne tambayoyi ya kamata in yi wa kaina don in fi bayyana su?\" Ku yi amfani da abin da kuke gani a shagonku, ba hasashe game da wasu rukunin mutane ba."
          ],
          steps: ["Ku yi tunanin kwastomominku mafi kyau guda biyar.", "Ku rubuta abin da suke da shi iri ɗaya.", "Ku rubuta jimloli uku: su wane ne, me suke buƙata, me yasa ku.", "Ku nemi AI ya ba ku tambayoyin da za su ƙara masa haske."],
          words: [["Kwastoman da kuka fi so (ideal customer)", "irin kwastoman da ya fi dacewa da kasuwancinku."], ["Kwastoma mai dawowa (repeat customer)", "mutumin da ke saya daga gare ku fiye da sau ɗaya."]],
          slides: [
            { title: "Ba kowa ba ne", bullets: ["Ku yi tunanin kwastomominku mafi kyau", "Wane ne ke dawowa, ke kashe kuɗi da kyau, ke turo abokai?"] },
            { title: "Jimloli uku", bullets: ["Su wane ne", "Me suke buƙata", "Me yasa suke zaɓar ku"] },
            { title: "Misali: gidan abincin rana", bullets: ["Ma'aikatan ofis da ke cikin mil biyu", "Suna son abincin rana mai ƙoshi ƙasa da $15", "Suna zaɓar mu saboda abinci mai yawa da karɓa da sauri"] }
          ],
          tryIt: "Ku rubuta kwastoman da kuka fi so a jimloli uku. Ku nemi mataimakin AI ya ba ku tambayoyi biyar don ya ƙara haske, ku amsa su, sannan ku sake rubuta jimlolinku uku.",
          youCanNow: "bayyana irin kwastoman da kuka fi son samun ƙari a jimloli uku masu sarari.",
          quickCheck: [
            { objective: "O1", q: "Daga ina ya kamata bayanin kwastoman da kuka fi so ya fito?", options: ["Daga abin da kuke gani tare da ainihin kwastomominku mafi kyau", "Daga hasashe game da kowa a gari", "Daga duk abin da AI ya fara faɗa", "Daga shafin intanet na abokin hamayyarku"], answer: 0, why: "Ainihin kwastomominku mafi kyau ne ke nuna muku wanda za ku nema." },
            { objective: "O1", q: "Bayaninku yana cewa \"duk wanda ke son abinci\". Me za ku yi?", options: ["Ku bar shi domin ya ƙunshi mutane da yawa", "Ku nemi AI tambayoyin ƙara haske, ku sa shi ya zama na musamman", "Ku cire bayanin", "Ku kwafi bayanin wani babban kamfani"], answer: 1, why: "Bayani na musamman yana taimaka muku kai wa mutanen da suka dace." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta tayi mai ma'ana",
          minutes: 5,
          goal: "Tsara tayi ɗaya a sarari kuma na gaskiya, mai farashi, dalilin yin aiki yanzu da ranar ƙarewa.",
          text: [
            "Tayi (offer) shi ne abin da kuke sayarwa, a wane farashi, da dalilin da yasa mutum zai saya yanzu. Tayi mai kyau yana da sauƙi: \"Haɗin abincin rana: shinkafa, miya da abin sha, $13, ranakun aiki ƙarfe 11 zuwa 2 har zuwa 30 ga Yuni.\"",
            "Ku nemi AI ya kawo ra'ayoyi, sannan ku ne ku zaɓa: \"Ina gudanar da hidimar wanke mota mai zuwa wurin kwastoma. Kwastomana da na fi so iyaye ne masu yawan aiki. Ka ba ni ra'ayoyin tayi guda biyar na lokacin bazara da ke kiyaye ribata.\" Ku duba lissafin da kanku: rangwamen da ke asarar kuɗi a kowane ciniki ba bunƙasa ba ne.",
            "Ku yi gaskiya. Ku faɗi ainihin farashi, ainihin ranar ƙarewa da duk wani iyaka. Kada ku kira shi rangwame (sale) idan farashinku na yau da kullum ne."
          ],
          steps: ["Ku nemi AI ra'ayoyin tayi guda biyar don kwastoman da kuka fi so.", "Ku zaɓi ɗaya ku lissafa kuɗin da kuke kashewa da ribarku.", "Ku rubuta shi da abin da ake sayarwa, farashi, dalilin yin aiki yanzu da ranar ƙarewa.", "Ku duba cewa yana da gaskiya kuma a sarari."],
          words: [["Tayi (offer)", "abin da kuke sayarwa, farashin da dalilin saya yanzu."], ["Riba (profit)", "kuɗin da ya rage bayan kun biya kuɗaɗen da kuka kashe."], ["Kason riba (margin)", "ɓangaren farashin da yake riba."]],
          slides: [
            { title: "Tayi mai sarari yana da", bullets: ["Abin da kuke sayarwa", "Farashin", "Dalilin yin aiki yanzu da ranar ƙarewa"] },
            { title: "AI yana kawo ra'ayoyi, ku ne ku zaɓa", bullets: ["Ku nemi ra'ayoyi biyar don kwastoman da kuka fi so", "Ku duba lissafin: ku kiyaye riba"] },
            { title: "Ku yi gaskiya", bullets: ["Ainihin farashi, ainihin ranar ƙarewa, ainihin iyaka", "Dole \"rangwame\" ya yi ƙasa da farashinku na yau da kullum"] }
          ],
          tryIt: "Ku nemi AI ra'ayoyin tayi guda biyar don kwastoman da kuka fi so. Ku zaɓi ɗaya, ku lissafa kuɗin da kuke kashewa da ribarku a takarda, sannan ku rubuta tayin a jimla ɗaya tare da ranar ƙarewa.",
          youCanNow: "rubuta tayi a sarari kuma na gaskiya wanda har yanzu yake kawo riba.",
          quickCheck: [
            { objective: "O2", q: "Me tayi mai sarari ya ƙunsa?", options: ["Babban rangwame kawai", "Dogon jerin kayayyaki", "Abin da ake sayarwa, farashi, dalilin yin aiki yanzu da ranar ƙarewa", "Alƙawarin cewa ba zai taɓa ƙarewa ba"], answer: 2, why: "Waɗannan sassan suna sa tayi ya zama mai sauƙin fahimta da aiki da shi." },
            { objective: "O2", q: "AI ya ba da shawarar rabin farashi a kan komai na wata ɗaya. Me za ku fara yi?", options: ["Ku saka shi a yau", "Ku mayar da shi rangwamen 70%", "Ku tambayi kwastomomi ko suna son sa", "Ku lissafa a takarda ko har yanzu kuna samun riba"], answer: 3, why: "Dole tayi ya bar kuɗi bayan an biya kuɗaɗen da aka kashe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fara jerin kwastomomi mai sauƙi",
          minutes: 5,
          goal: "Kafa jerin kwastomomi mai sauƙi a spreadsheet, tare da izinin tuntuɓa.",
          text: [
            "Jerin kwastomominku shi ne kayan cinikinku mafi daraja. Yana iya zama spreadsheet mai shafuka (columns) kamar Suna, Hanyar tuntuɓa (imel ko waya), Sun yarda da saƙonni (eh/a'a da kwanan wata), Ziyara ta ƙarshe, Abin da suka saya, da Bayani.",
            "Ku saka mutanen da suka ba ku bayanansu kuma suka yarda ku riƙa tuntuɓar su kawai: takardar rajista a kan kanta, lambar QR zuwa fom, ko akwatin tick a kayan ɗaukar alƙawarinku. Ku rubuta lokacin da yadda suka yarda.",
            "Ku kiyaye jerin a sirri kuma lafiya: kalmar sirri (password) a kan fayil ko asusun, kuma ku raba shi da ma'aikatan da ke buƙatarsa kawai. Kada ku liƙa jerin a cikin kayan AI. Idan kuna son taimakon AI, ku bayyana shafukan ko ku yi amfani da layukan misali na ƙirƙira."
          ],
          steps: ["Ku yi spreadsheet mai shafukan da aka ambata a sama.", "Ku ƙara hanyar rajista: takardar kan kanta, fom na QR ko akwatin tick na ɗaukar alƙawari.", "Ku rubuta lokacin da yadda kowane mutum ya yarda.", "Ku kare fayil ɗin kuma ku nisanta shi daga kayan AI."],
          words: [["Jerin kwastomomi", "rubutaccen jerin kwastomomin da suka yarda ku riƙa tuntuɓar su."], ["Yarda (opt in)", "lokacin da mutum ya amince ya riƙa karɓar saƙonninku."], ["CRM", "customer relationship management (kula da dangantaka da kwastomomi): manhaja ko takarda don bin diddigin kwastomomi."]],
          slides: [
            { title: "Kayan cinikinku mafi daraja", bullets: ["Spreadsheet mai sauƙi yana aiki", "Suna, hanyar tuntuɓa, yarda (kwanan wata), ziyara ta ƙarshe, bayani"] },
            { title: "Izini tukuna", bullets: ["Rajista a kan kanta, fom na QR ko akwatin tick na ɗaukar alƙawari", "Ku rubuta lokacin da yadda suka yarda"] },
            { title: "Ku kiyaye shi lafiya", bullets: ["Kalmar sirri a kan fayil ko asusun", "Ku raba shi da ma'aikatan da ke buƙatarsa kawai", "Kada ku taɓa liƙa jerin a cikin kayan AI"] }
          ],
          tryIt: "Ku yi takardar jerin kwastomominku mai shafuka shida. Ku ƙara layukan misali uku na ƙirƙira, sannan ku rubuta yadda ainihin kwastomomi za su yi rajista (takardar kan kanta, fom na QR ko akwatin tick na ɗaukar alƙawari).",
          youCanNow: "kafa jerin kwastomomi na sirri mai rubutaccen izinin tuntuɓa.",
          quickCheck: [
            { objective: "O3", q: "Wane ne ya kamata ya kasance a jerin kwastomominku?", options: ["Mutanen da suka yarda ku riƙa tuntuɓar su", "Duk wanda za ku iya samun lambarsa", "Kwastomomin abokan hamayyarku", "Kowa da ke cikin littafin lambobin waya"], answer: 0, why: "Mutanen da suka ce eh ga karɓar saƙonninku ne kawai ke shiga jerin." },
            { objective: "O3", q: "Kuna son AI ya taimaka wajen tsara takardar jerin kwastomominku. Me za ku raba?", options: ["Cikakken ainihin jerin kwastomominku", "Lambobin wayar kwastomomi", "Sunayen shafukan ko layukan misali na ƙirƙira", "Kalmar sirrin takardar"], answer: 2, why: "Sunayen shafuka ko layukan misali suna kawo taimako ba tare da raba ainihin bayanan kwastomomi ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Wane ne ke saya da me kuke bayarwa",
        questions: [
          { objective: "O1", q: "Mene ne kwastoman da kuka fi so (ideal customer)?", options: ["Duk wanda ke da kuɗi", "Irin kwastoman da ya fi dacewa da kasuwancinku", "Mutanen da ke yin ƙorafi kawai", "Kwastomomin abokin hamayyarku"], answer: 1, why: "Yana bayyana irin mutanen da kuka fi son samun ƙari." },
          { objective: "O2", q: "Wanne ne tayi a sarari?", options: ["\"Rangwame mai kyau!\"", "\"Kaya masu arha\"", "\"Ku zo wani lokaci\"", "\"Haɗin abincin rana: shinkafa, miya da abin sha, $13, ranakun aiki 11-2 har zuwa 30 ga Yuni\""], answer: 3, why: "Yana faɗin abin da ake sayarwa, farashi, lokaci da ranar ƙarewa." },
          { objective: "O2", q: "AI ya ba da shawarar rangwamen 60%. Me za ku fara dubawa?", options: ["Ko har yanzu kuna samun riba", "Ko yana jin daɗin ji", "Babu komai", "Irin rubutun haruffa"], answer: 0, why: "Rangwamen da ke asarar kuɗi ba bunƙasa ba ne." },
          { objective: "O3", q: "Wane ne ya kamata ya kasance a jerin kwastomominku?", options: ["Duk wanda kuka samu lambarsa", "Kwastomomin abokan hamayya", "Mutanen da suka yarda ku riƙa tuntuɓar su", "Lambobin waya na kara-zube"], answer: 2, why: "Izini shi ne na farko." },
          { objective: "O3", q: "Kuna son taimakon AI wajen tsara jerin kwastomominku. Me za ku raba?", options: ["Cikakken jerin tare da lambobin waya", "Lambobin katin kwastomomi", "Sunayen shafukan ko layukan misali na ƙirƙira", "Kalmar sirrin fayil ɗinku"], answer: 2, why: "Ainihin bayanan kwastomomi suna zama a waje da kayan AI." }
        ]
      }
    },
    {
      name: "Babi na 2: Bin diddigi da bunƙasa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta saƙonnin biyo baya da ke bin doka",
          minutes: 6,
          goal: "Rubuta jerin saƙonnin biyo baya guda uku, kuma ku tabbatar imel na talla yana bin dokar CAN-SPAM.",
          text: [
            "Yawancin ciniki yana fitowa ne daga bin diddigi. Jeri mai sauƙi: (1) godiya bayan ziyara, (2) tunatarwa ko shawara bayan mako ɗaya, (3) tayinku tare da ranar ƙarewarsa. Ku tambayi AI: \"Ka rubuta gajerun imel guda uku na biyo baya don wurin gyaran gashina, da salon maganata. Ka yi amfani da [suna].\"",
            "Imel na talla a Amurka dole ne ya bi dokar CAN-SPAM Act. Jagorar FTC (hukumar kare masu saye ta Amurka) tana cewa: ku yi amfani da layin From (mai aikawa) da layin batu (subject) na gaskiya, ku bayyana a sarari cewa talla ne, ku saka adireshin gidan waya mai inganci, ku ba da hanya a sarari ta daina karɓar saƙo (unsubscribe), kuma ku cika buƙatun daina karɓar saƙo cikin kwanakin aiki 10.",
            "Tes na talla yana da nasa dokokin tarayya (TCPA, wadda FCC, hukumar sadarwa ta Amurka, ke aiwatarwa), kuma yawanci yana buƙatar izinin kwastoma a sarari. Kafin ku aika tes na talla, ku duba dokokin a fcc.gov ko ku tambayi ƙwararre, kuma ku yi amfani da kayan tes da ke kula da masu son daina karɓa."
          ],
          steps: ["Ku tsara saƙonni uku: godiya, tunatarwa ko shawara, tayi.", "Ku nemi AI ya rubuta su da wurare marasa komai kamar [suna].", "Ku ƙara adireshin gidan wayarku da layin daina karɓar saƙo a imel na talla.", "Ku cika buƙatun daina karɓar saƙo da sauri.", "Ku duba dokokin tes kafin ku aika tes na talla."],
          words: [["Jerin saƙonnin biyo baya", "jerin saƙonnin da aka tsara don aikawa bayan ziyarar kwastoma ko rajistarsa."], ["CAN-SPAM", "dokar Amurka mai ƙa'idoji don imel na kasuwanci."], ["Daina karɓar saƙo (unsubscribe)", "hanyar da mutane za su daina samun saƙonninku."]],
          slides: [
            { title: "Jerin saƙonni uku", bullets: ["1. Godiya bayan ziyara", "2. Tunatarwa ko shawara bayan mako ɗaya", "3. Tayinku tare da ranar ƙarewa"] },
            { title: "Muhimman abubuwan CAN-SPAM (FTC)", bullets: ["Layin mai aikawa da na batu na gaskiya; ku faɗi cewa talla ne", "Adireshin gidan waya mai inganci", "Hanyar daina karɓar saƙo a sarari, a cika ta cikin kwanakin aiki 10"] },
            { title: "Tes na talla", bullets: ["Dokokin tarayya daban (TCPA, FCC)", "Ku fara samun izini a sarari", "Ku duba fcc.gov ko ku tambayi ƙwararre"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Ku nemi AI ya rubuta jerin saƙonninku uku na biyo baya da [suna]. Ku ƙara adireshin gidan wayarku da layin daina karɓar saƙo a imel ɗin tayin.",
          youCanNow: "rubuta jerin saƙonnin biyo baya da tabbatar imel na talla yana cika muhimman abubuwan CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Me dole kowane imel na talla a Amurka ya ƙunsa a ƙarƙashin CAN-SPAM?", options: ["Takardar rangwame (coupon)", "Adireshin gidan waya mai inganci da hanyar daina karɓar saƙo", "Hoto", "Cikakken sunan kwastoma"], answer: 1, why: "CAN-SPAM tana buƙatar adireshin gidan waya da hanyar daina karɓar saƙo." },
            { objective: "O4", q: "Kuna son aika tes na talla game da tayinku. Me za ku fara yi?", options: ["Ku tura tes ga kowa da ke wayarku", "Ku aika tes cikin dare", "Ku yi amfani da jerin lambobin da aka saya", "Ku samu izini a sarari ku duba dokokin tes na tarayya"], answer: 3, why: "Tes na talla yana da nasa dokokin tarayya kuma yana buƙatar izini a sarari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Karanta alƙaluman cinikinku da taimakon AI",
          minutes: 5,
          goal: "Bin diddigin wasu alƙaluman ciniki kowane mako da amfani da AI don taimakawa gano tsari.",
          text: [
            "Kuna buƙatar alƙaluma kaɗan ne kawai: ciniki a kowace rana, yawan kwastomomi, matsakaicin ciniki (ciniki raba da yawan kwastomomi), kayayyakinku da suka fi sayuwa, da yawan mutanen da suka yi amfani da tayinku.",
            "Ku ajiye su a spreadsheet bisa mako. Ku bar spreadsheet ya yi lissafin. Sannan za ku iya liƙa jimlar kowane mako (ba sunayen kwastomomi ba) a cikin mataimakin AI ku tambaya: \"Ga alƙaluman mako 6 na gidan burodina. Wane tsari kake gani? Me ya kamata in duba?\"",
            "Ku ɗauki ra'ayoyin AI a matsayin tambayoyi, ba amsoshi ba. Idan ya ce \"Ranakun Asabar ba a ciniki sosai\", ku duba takardarku da kanku don tabbatarwa, kuma ku yi tunanin dalili: yanayi, wani taro, canjin ma'aikata."
          ],
          steps: ["Ku bi diddigin ciniki, kwastomomi, matsakaicin ciniki, kayan da suka fi sayuwa da amfani da tayi kowane mako.", "Ku bar formula ta yi jimlar.", "Ku liƙa jimlar kowane mako (ba sunaye) a AI ku tambayi tsari.", "Ku tabbatar da kowane tsari a takardarku."],
          words: [["Matsakaicin ciniki (average sale)", "jimlar ciniki raba da yawan kwastomomi."], ["Tsari (pattern)", "abin da ke faruwa akai-akai a cikin alƙaluman ku."]],
          slides: [
            { title: "Alƙaluma biyar da za a bi", bullets: ["Ciniki a kowace rana da kwastomomi", "Matsakaicin ciniki", "Kayan da suka fi sayuwa da amfani da tayi"] },
            { title: "AI a matsayin ƙarin idanu", bullets: ["Ku liƙa jimlar mako, ba sunaye ba", "Ku tambaya: \"Wane tsari kake gani?\""] },
            { title: "Ku tabbatar kafin ku yi aiki", bullets: ["Ra'ayoyin AI tambayoyi ne", "Ku duba takardarku da kanku", "Ku tambayi dalili: yanayi, taruka, ma'aikata"] }
          ],
          tryIt: "Ku yi teburin bin diddigi na mako-mako mai alƙaluma biyar. Ku cika alƙaluman misali ko na gaske na mako huɗu, ku tambayi AI wane tsari yake gani. Ku tabbatar da ɗaya a takardarku.",
          youCanNow: "bin diddigin muhimman alƙaluman ciniki da amfani da AI don taimakawa gano tsarin da za ku tabbatar daga baya.",
          quickCheck: [
            { objective: "O5", q: "Yaya ake lissafa matsakaicin cinikinku?", options: ["Ciniki raba da yawan kwastomomi", "Kwastomomi raba da kwanaki", "Riba sau biyu", "Yawan kayan da aka sayar"], answer: 0, why: "Matsakaicin ciniki shi ne jimlar ciniki raba da yawan kwastomomi." },
            { objective: "O5", q: "Kuna son AI ya duba teburin cinikinku na mako-mako. Me za ku fara yi?", options: ["Ku ƙara sunayen kwastomomi don ya fi sani", "Ku liƙa shi kamar yadda yake", "Ku cire sunayen kwastomomi kafin ku liƙa", "Ku ƙara lambobin katin kwastomomi"], answer: 2, why: "Sunayen kwastomomi suna zama a waje da kayan AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shirin cinikinku na kwana 30",
          minutes: 5,
          goal: "Haɗa kwastomanku, tayinku, jerinku, saƙonnin biyo baya da bin diddigi cikin shiri ɗaya na kwana 30.",
          text: [
            "Shiri yana mayar da ra'ayoyi zuwa aiki. Mako na 1: ku kafa jerin kwastomominku da hanyar rajista. Mako na 2: ku ƙaddamar da tayinku ku aika saƙon godiya. Mako na 3: ku aika tunatarwa ku saka tayin. Mako na 4: ku aika kira na ƙarshe kafin ranar ƙarewa, sannan ku yi bitar alƙaluman ku.",
            "Ku nemi AI ya mayar da bayananku zuwa kalanda mai ayyuka na kowane mako. Ku sa ya dace da lokutan aikinku na gaske.",
            "A ƙarshe, ku kwatanta alƙaluman ku da na watan da ya gabata. Ku riƙe abin da ya yi aiki, ku bar wanda bai yi ba, ku tsara kwanaki 30 na gaba."
          ],
          steps: ["Ku tattara kwastoman da kuka fi so, tayi, tsarin jeri, saƙonnin biyo baya da teburin bin diddigi.", "Ku nemi AI ya yi kalandar ayyuka na mako huɗu.", "Ku daidaita ayyukan da ainihin lokutan aikinku.", "Ku yi bitar sakamako a rana ta 30."],
          words: [["Shirin ciniki", "rubutaccen shirin abin da za ku yi don ƙara sayarwa, da lokacin yinsa."], ["Bita (review)", "duba sakamako don yanke shawarar abin da za a riƙe ko a canja."]],
          slides: [
            { title: "Mako huɗu", bullets: ["Mako na 1: jeri da rajista", "Mako na 2: ƙaddamar da tayi, aika godiya", "Mako na 3: tunatarwa; Mako na 4: kira na ƙarshe da bita"] },
            { title: "AI yana yin kalandar", bullets: ["Ku liƙa bayananku", "Ku nemi ayyukan kowane mako", "Ku sa ya dace da lokutanku"] },
            { title: "Rana ta 30", bullets: ["Ku kwatanta da watan da ya gabata", "Ku riƙe abin da ya yi aiki", "Ku tsara kwanaki 30 na gaba"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirin cinikinku na kwana 30 a shafi ɗaya, mai kwastoman da kuka fi so, tayi, jeri, jerin saƙonni uku da teburin bin diddigi. Ku nemi AI ya mayar da shi kalandar ayyuka na mako-mako.",
          youCanNow: "tsarawa, gudanarwa da bitar shirin ƙara ciniki na kwana 30 ga kasuwancinku.",
          quickCheck: [
            { objective: "O6", q: "Mako na 1 na shirin kwana 30 na me ne?", options: ["Aika duk saƙonni lokaci ɗaya", "Kafa jeri da hanyar rajista", "Kawo ƙarshen tayin", "Kwatanta sakamako"], answer: 1, why: "Mako na farko yana kafa jerin da yadda mutane ke shiga ciki." },
            { objective: "O6", q: "Shirinku na kwana 30 yana buƙatar lokaci fiye da wanda kuke da shi. Me za ku yi?", options: ["Ku bar shi ku yi aiki dare duka", "Ku watsar da shirin", "Ku bar AI ya yi cinikin", "Ku rage shi ya dace da ainihin lokutanku"], answer: 3, why: "Shirin da ya dace da lokutanku shi ne wanda za ku iya aiwatarwa da gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bin diddigi da bunƙasa",
        questions: [
          { objective: "O4", q: "Wanne ne ya kamata ya kasance a kowane imel na talla a Amurka ƙarƙashin CAN-SPAM?", options: ["Adireshin gidan waya mai inganci da hanyar daina karɓar saƙo", "Lambar katin kwastoma", "Layin batu na ƙarya", "Babu sunan mai aikawa"], answer: 0, why: "FTC ta lissafa dukansu biyu a matsayin abubuwan da ake buƙata." },
          { objective: "O4", q: "Cikin wane lokaci dole ku cika buƙatar daina karɓar saƙo, bisa jagorar FTC?", options: ["Sai idan sun kira", "Cikin shekara ɗaya", "Ba sai an cika ba", "Cikin kwanakin aiki 10"], answer: 3, why: "FTC ta ce cikin kwanakin aiki 10." },
          { objective: "O4", q: "Kafin aika tes na talla ya kamata ku:", options: ["Tura tes ga kowace lamba da kuke da ita", "Samu izini a sarari ku duba dokokin tes na tarayya", "Sayi jerin lambobi", "Ɓoye sunan kasuwancinku"], answer: 1, why: "Tes na talla yana da dokokin tarayya daban kuma yana buƙatar izini." },
          { objective: "O5", q: "Yaya ake lissafa matsakaicin ciniki?", options: ["Ciniki raba da yawan kwastomomi", "Ciniki sau kwastomomi", "Riba a cire kuɗin haya", "Kwastomomi raba da kwanaki"], answer: 0, why: "Matsakaicin ciniki = jimlar ciniki / kwastomomi." },
          { objective: "O5", q: "AI ya ce ranakun Talata ba a ciniki sosai. Me za ku yi?", options: ["Ku rufe a ranakun Talata nan take", "Ku yi watsi da alƙaluma", "Ku tabbatar da shi a alƙaluman ku ku yi tunanin dalili", "Ku tambayi abokin hamayya"], answer: 2, why: "Tsarin da AI ya gani tambayoyi ne da za a duba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ƙara Ciniki da Bunƙasa Kasuwanci",
    questions: [
      { objective: "O1", q: "Bayanin kwastoman da kuka fi so ya kamata ya zama:", options: ["\"Kowa\"", "Na musamman: su wane ne, me suke buƙata, me yasa ku", "Bisa hasashe game da rukunin mutane", "Mai tsawo sosai"], answer: 1, why: "Bayani na musamman yana jagorantar tayi mafi kyau." },
      { objective: "O1", q: "Daga ina ya kamata bayanin kwastoman da kuka fi so ya fito?", options: ["Daga AI kawai", "Daga ra'ayoyin ƙiyasi game da mutane", "Daga wani shafin intanet na kara-zube", "Daga abin da kuke gani tare da ainihin kwastomominku mafi kyau"], answer: 3, why: "Ku yi amfani da abin da kuka gani da idanunku, ba hasashe ba." },
      { objective: "O1", q: "Ta yaya AI zai iya taimakawa wajen bayyana kwastoman da kuka fi so?", options: ["Ba zai iya taimakawa ba", "Ta hanyar karanta asusun bankinku", "Ta hanyar kiran kwastomomi", "Ta hanyar yi muku tambayoyin ƙara haske"], answer: 3, why: "AI zai iya ba da shawarar tambayoyin da za ku yi tunani a kai." },
      { objective: "O2", q: "Tayi mai sarari ya ƙunshi:", options: ["Hoto kawai", "Abin da ake sayarwa, farashi, dalilin yin aiki yanzu da ranar ƙarewa", "Babu farashi", "Lambar sirri"], answer: 1, why: "Dukkan sassan huɗu suna sa shi ya zama a sarari." },
      { objective: "O2", q: "Mene ne riba?", options: ["Rangwame", "Duk kuɗin da ke shigowa", "Kuɗin da ya rage bayan kuɗaɗen da aka kashe", "Bashi"], answer: 2, why: "Riba ita ce kuɗin shiga a cire kuɗaɗen da aka kashe." },
      { objective: "O2", q: "Kiran farashinku na yau da kullum \"rangwame\":", options: ["Yaudara ne", "Wayo ne", "Dole ne", "Ba laifi a kowace rana"], answer: 0, why: "Dole tayi ya kasance na gaskiya." },
      { objective: "O3", q: "Wane shafi (column) ne ke taimakawa tabbatar da cewa kwastoma ya yarda da saƙonni?", options: ["Lambar kati", "Launin da ya fi so", "Sun yarda da saƙonni (eh/a'a da kwanan wata)", "Kalmar sirri"], answer: 2, why: "Rubuta izini yana da muhimmanci." },
      { objective: "O3", q: "Hanya mai kyau ta tattara rajista ita ce:", options: ["Lambar QR zuwa fom na rajista", "Kwafar lambobi daga rasit ba tare da tambaya ba", "Sayen jeri", "Hasashen adireshin imel"], answer: 0, why: "Mutane ne ke zaɓar shiga da kansu." },
      { objective: "O3", q: "Jerin kwastomominku ya kamata ya kasance:", options: ["An saka shi a intanet", "A kiyaye kuma a waje da kayan AI", "Ana raba shi da kowa", "Ana liƙa shi a cikin hirarraki"], answer: 1, why: "Bayanan kwastomomi na sirri ne." },
      { objective: "O4", q: "Jerin saƙonnin biyo baya mai sauƙi yana farawa da:", options: ["Babu komai", "Matsin lamba don saya", "Ƙorafi", "Godiya bayan ziyara"], answer: 3, why: "Fara da godiya yana gina dangantaka." },
      { objective: "O4", q: "A ƙarƙashin CAN-SPAM, imel na talla dole ne:", options: ["Ya bayyana a sarari cewa talla ne", "Ya ɓoye mai aikawa", "Ya yi amfani da layin batu na ƙarya", "Ya kasance ba adireshi"], answer: 0, why: "FTC tana buƙatar a bayyana cewa talla ne." },
      { objective: "O4", q: "Jagorar wace hukuma ce ke bayani kan CAN-SPAM?", options: ["IRS (hukumar haraji)", "DMV (ofishin motoci)", "Gidan waya", "FTC"], answer: 3, why: "FTC ce ke wallafa jagorar bin dokar." },
      { objective: "O4", q: "Tes na talla yana ƙarƙashin:", options: ["CAN-SPAM kawai", "Babu wata doka ko kaɗan", "Dokokin tarayya daban (TCPA) da FCC ke aiwatarwa", "Dokokin ajiye mota na jiha kawai"], answer: 2, why: "Tes yana da nasa dokokin." },
      { objective: "O5", q: "Wanne ne ɗaya daga cikin alƙaluma biyar da za a bi?", options: ["Waƙar da kuka fi so", "Matsakaicin ciniki", "Kuɗin hayar abokin hamayya", "Kalmar sirrinku"], answer: 1, why: "Matsakaicin ciniki yana nuna nawa kowane kwastoma ke kashewa." },
      { objective: "O5", q: "Me ya kamata ya yi jimla a takardar bin diddiginku?", options: ["Kwastomomi", "Hasashen AI", "Tunani a ka", "Formula na spreadsheet"], answer: 3, why: "Formula tana lissafi daidai." },
      { objective: "O5", q: "Kafin ku liƙa alƙaluma a AI, ku cire:", options: ["Jimloli", "Kwanakin mako", "Sunayen kwastomomi", "Sunayen kayayyaki"], answer: 2, why: "Sunaye na sirri ne." },
      { objective: "O6", q: "Mako na 1 na shirin kwana 30 na:", options: ["Kafa jeri da hanyar rajista", "Rufe kasuwancin", "Ƙara duk farashi", "Korar ma'aikata"], answer: 0, why: "Jerin ne na farko." },
      { objective: "O6", q: "Me yasa za ku daidaita shirin da ainihin lokutan aikinku?", options: ["Don ya fi tsawo", "Domin ku iya aiwatar da shi da gaske", "Ba shi da muhimmanci", "Domin AI ya ji daɗi"], answer: 1, why: "Shirye-shiryen da suka dace da gaskiya ake aiwatarwa." },
      { objective: "O6", q: "A rana ta 30 ya kamata ku:", options: ["Manta da alƙaluma", "Kwatanta sakamako ku riƙe abin da ya yi aiki", "Sake farawa ba tare da dubawa ba", "Goge jerin"], answer: 1, why: "Bita tana jagorantar kwanaki 30 na gaba." },
      { objective: "O6", q: "A wannan kwas, wane ne ke yin cinikin?", options: ["Ku da dangantakarku da kwastomomi, tare da AI a matsayin mataimaki", "AI shi kaɗai", "Babu kowa", "Wani bot da ke yin kamar shi ne ku"], answer: 0, why: "AI yana taimaka muku rubutu da tunani; ku ne ke sayarwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 3, 4, 6, 8, 9, 10, 13, 15, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Kwastoman da kuka fi so", objective: "O1", notYet: "Ba shi da sarari, misali \"kowa\".", meets: "Jimloli uku na musamman: su wane ne, me suke buƙata da me yasa ku.", exceeds: "An gina shi bisa ainihin kwastomomi mafi kyau kuma an ƙara masa haske da tambayoyin AI." },
      { name: "Tayi", objective: "O2", notYet: "Babu farashi ko ranar ƙarewa, ko yana asarar kuɗi.", meets: "Tayi ɗaya a sarari kuma na gaskiya, mai farashi, dalilin yin aiki yanzu da ranar ƙarewa.", exceeds: "An lissafa riba kuma an rubuta ta a gefensa." },
      { name: "Jerin kwastomomi", objective: "O3", notYet: "Babu shafin izini, ko babu hanyar rajista.", meets: "Yana faɗin inda jerin yake da yadda mutane suka shiga ciki, tare da rubutaccen izini.", exceeds: "Yana bayanin yadda ake kare jerin da nisanta shi daga kayan AI." },
      { name: "Jerin saƙonnin biyo baya", objective: "O4", notYet: "Saƙonni ƙasa da uku, ko imel na talla ba shi da adireshi ko layin daina karɓar saƙo.", meets: "Saƙonni uku, tare da adireshi da layin daina karɓar saƙo a imel na talla.", exceeds: "Yana bayanin izini da dokokin da ake buƙata kafin kowane tes na talla." },
      { name: "Teburin bin diddigi", objective: "O5", notYet: "Babu tebur ko babu alƙaluman mako-mako.", meets: "Tebur mai alƙaluman da za a duba kowane mako, ta amfani da formula.", exceeds: "Ya haɗa da bita a rana ta 30 don riƙe abin da ya yi aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka gudanar da shirinsu na ƙara ciniki na kwana 30 (binciken biyo baya bayan kwana 30)",
      "Masu kasuwanci da suka ce cinikinsu ya ƙaru ko kwastomomi masu dawowa sun ƙaru bayan kwana 30, daga teburin bin diddiginsu",
      "Masu kasuwanci da suka faɗaɗa jerin kwastomomi mai izini cikin kwanaki 60"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet",
      "Mataimakin AI kyauta da spreadsheet kyauta (Google Sheets ko Microsoft Excel)",
      "Takarda da alƙalami don lissafin kuɗin da ake kashewa da riba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi amfani da layukan misali na ƙirƙira a jerin atisaye; kada ku taɓa liƙa ainihin jerin kwastomomi a cikin AI.",
      "Ku buɗe jagorar CAN-SPAM ta FTC tare, kuma ku nuna cewa tes yana da dokoki daban.",
      "Ku nuna misali ɗaya na lissafin kuɗin da ake kashewa da riba a takarda kafin masu kasuwanci su tsara tayinsu.",
      "Ku ƙarfafa masu kasuwanci su duba shirinsu na kwana 30 da ainihin lokutan aikinsu na mako.",
      "Ku ba da maki ga shirin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
