"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-poultry-production.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Safety rule kept: no vaccine or drug doses and no withdrawal periods as numbers; follow the vet and the label; avian influenza is notifiable. All prices are made-up examples.

const KENBRO = { name: "Kenchic: Kenbro (kajin gida da aka inganta, na nama da ƙwai)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma da wasu 2015, Livestock Research for Rural Development: Kuroiler da kajin gida a Uganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "University of Missouri Extension G8351: Rainon 'yan tsaki da girmar su (zafi a kowane mako, halayen 'yan tsaki)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO: Kyawawan matakan kare gona daga cututtuka (biosecurity) a kiwon kaji ƙanana da na yawo a Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "Hukumar Lafiyar Dabbobi ta Duniya (WOAH): cutar Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "Hukumar Lafiyar Dabbobi ta Duniya (WOAH): murar tsuntsaye (avian influenza)", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Murar tsuntsaye (alamunta a tsuntsaye)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board: rajistar likitocin dabbobi da mataimakansu", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Majalisar Likitocin Dabbobi ta Najeriya (Veterinary Council of Nigeria): rajistar likitocin dabbobi", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO: Amfani da magungunan ƙwayoyin cuta (antimicrobials) a hankali a aladu da kaji (likitocin dabbobi, tsarin lafiya, lokacin jira)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production-ha",
  lang: "ha",
  translationOf: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Kiwon Kaji don Kasuwanci",
  skills: "Zaɓen kajin nama, kaji masu ƙwai ko kajin gida da aka inganta, Shirya gidan kaji da rainon 'yan tsaki, Ciyarwa da shayarwa a kowane mataki, Bin tsarin rigakafi da kare kaji daga cututtuka tare da likitan dabbobi, Kula da ƙwai da ajiye bayanan kaji, Lissafin kuɗin rukuni da farashin daidaito",
  outcome: "tsarawa da gudanar da rukunin kaji mai riba: zaɓen kajin nama, kaji masu ƙwai ko kajin gida da aka inganta don kasuwarku, shirya gida da rainon 'yan tsaki, ciyar da su da shayar da su a kowane mataki, bin tsarin rigakafi da kuka yi da likitan dabbobi da tsauraran matakan kare gona, kula da ƙwai da ajiye bayanai, da lissafin kuɗin rukunin don sanin farashin daidaitonku.",
  about: [
    "Wannan kwas na manoma ne, matasan 'yan kasuwar noma, ma'aikatan gona da jami'an faɗakar da manoma a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire da sauran Afirka, waɗanda ke son fara ko faɗaɗa kasuwancin kaji da kajin nama, kaji masu ƙwai ko kajin gida da aka inganta.",
    "Babi na 1 yana shirya rukunin: zaɓen irin kaji, gida, fili da rainon 'yan tsaki, da abinci da ruwa. Babi na 2 yana gudanar da shi da riba: tsarin rigakafi tare da likitan dabbobi da kare rukuni daga cututtuka, kula da ƙwai da bayanai, da lissafin kuɗin rukuni: kuɗin kowace kaza ko kowane tiren ƙwai, mace-mace da farashin daidaito.",
    "Wannan kwas yana ginuwa kan \"Lafiyar Dabbobin Kiwo da Kula da Su\", wanda ke koyar da duba lafiya na kowace rana da asalin cutar Newcastle. Ba ya ba da yawan allurar rigakafi ko magani (dose): koyaushe ku bi likitan dabbobi da abin da ke rubuce a jikin magani (label). Duk farashin misali ne kawai; ku yi amfani da naku. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin rukuni ɗaya mai lissafin kuɗi don gonarku (ko misali kamar kajin nama 500 kusa da Thika, kaji masu ƙwai 300 kusa da Ibadan, kajin Kenbro ko Kuroiler 200 kusa da Tamale, ko kajin nama 1,000 kusa da Thies): irin kaji da dalilin zaɓe; girman gida da kaji nawa zai ɗauka; yadda za ku raini 'yan tsaki; abinci a kowane mataki da yawan da kuke tsammanin saye; tsarin rigakafi da kuka amince da shi da likitan dabbobi da dokokinku na kare gona; bayanan da za ku ajiye; da takardar kuɗi mai kowane kuɗi, mace-macen da ake tsammani, kuɗin kowace kaza da aka sayar ko kowane tiren ƙwai, da farashin daidaitonku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma, matasan 'yan kasuwar noma, ma'aikatan gona da jami'an faɗakar da manoma a Gabas, Yamma da Tsakiyar Afirka (har da ƙasashen masu magana da Faransanci), waɗanda ke fara ko faɗaɗa kasuwancin kaji daga 'yan ɗari zuwa 'yan dubbai.",
    startingPoint: "Da yawa suna da 'yan kajin gida ko sun yi rukuni ɗaya. Yawancinsu suna sayen 'yan tsaki da abinci ba tare da rubutaccen tsari ba, suna rainon 'yan tsaki da tsammani, suna dogara ga shagon magungunan dabbobi don rigakafi, suna ajiye bayanai kaɗan, kuma ba su san kuɗin kowace kaza ko kowane tire ba, don haka ba za su iya sanin ko rukuni ya kawo riba ba.",
    gap: "Kiwon kaji yana iya kawo kuɗi da sauri, amma yawan mutuwar 'yan tsaki lokacin raino, ɓarkewar cututtuka, ɓata abinci da sayarwa ƙasa da kuɗin da aka kashe suna share riba. Manoman da ke tsara rukuni, suke rainon 'yan tsaki da kyau, suke rigakafi bisa tsarin likitan dabbobi, suke ajiye bayanai kuma suka san farashin daidaitonsu suna rasa kaji ƙalilan kuma suna iya sa farashi da sayarwa da ƙarfin gwiwa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; lissafi mai sauƙi kawai; ana samun kwas ɗin kuma a Sifaniyanci, Faransanci da Larabci",
      "Na'urori: takarda da alƙalami ko na'urar lissafi ta waya; teburin lissafi (spreadsheet) a waya ba dole ba ne",
      "Kuɗi: farashi a KES, NGN, GHS da XOF misalai ne kawai; masu koyo suna amfani da farashin yankinsu",
      "Dokokin lafiyar dabbobi: babu yawan allurar rigakafi ko magani, kuma babu lokacin jira a lamba; ku bi likitan dabbobi da label",
      "Dole a sanar da hukuma game da murar tsuntsaye: duk wanda ake zato a sanar da likitan dabbobi ko hukumar lafiyar dabbobi nan take"
    ],
    prerequisites: "Asalin kula da dabbobi da lissafi mai sauƙi. Ana ba da shawarar fara \"Lafiyar Dabbobin Kiwo da Kula da Su\"; \"Abincin Dabbobi da Haɗa Abinci\" yana taimakawa wajen kuɗin abinci."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka yi la'akari da kasuwarku, kuɗinku da lokacinku", action: "zaɓen kajin nama, kaji masu ƙwai ko kajin gida da aka inganta da ba da dalilai", standard: "kuna ambaton aƙalla dalilai uku da suka dace da gonarku da masu saye" },
    { id: "O2", condition: "Kafin 'yan tsaki su iso da lokacin raino", action: "shirya gida, ƙayyade yawan kaji bisa fili, da daidaita zafin rainon ta hanyar kallon 'yan tsaki", standard: "gida ya shirya kwana ɗaya kafin su iso, kuma 'yan tsaki sun bazu daidai a ƙarƙashin zafi" },
    { id: "O3", condition: "Don kowane mataki na rukuninku", action: "tsara irin abinci, ranakun canja shi da samun ruwa", standard: "da ruwa mai tsabta a koyaushe kuma an rufe kowane mataki" },
    { id: "O4", condition: "Tare da likitan dabbobi ko jami'in lafiyar dabbobi", action: "rubuta tsarin rigakafi da dokokin kare rukuni daga cututtuka, da rubuta kowace allurar rigakafi", standard: "likitan dabbobi ne ya sa kowace ranar rigakafi, kuma babu rigakafin da aka yi a wajen tsarin" },
    { id: "O5", condition: "Kowace rana ta rukunin", action: "tara da ajiye ƙwai yadda ya kamata da rubuta kaji, mace-mace, abinci, ƙwai da magunguna", standard: "ba tare da ranar da aka tsallake a bayanan ba" },
    { id: "O6", condition: "Ta amfani da farashin yankinku da mace-macen da ake tsammani", action: "lissafa kuɗin kowace kaza da aka sayar ko kowane tire da farashin daidaito na rukuni", standard: "da kowane kuɗi a ciki da lissafi daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shirya rukunin",
      lessons: [
        {
          title: "Kajin nama, kaji masu ƙwai ko kajin gida da aka inganta",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi irin kajin da ya dace da kasuwarku, kuɗinku da lokacinku.",
          text: [
            "Kajin nama (broilers) an haife su don nama. Suna girma da sauri sosai kuma ana yawan sayar da su cikin kusan mako 5 zuwa 7, ya danganta da irin kajin da nauyin da masu saye ke so. Kuɗi yana dawowa da sauri, amma suna buƙatar abinci mai inganci, kulawa ta kusa da mai saye a shirye a ranar da suka isa: kowace ƙarin rana tana cin abinci da riba.",
            "Kaji masu ƙwai (layers) an haife su don ƙwai. Suna fara kwanciya a kusan wata 4 zuwa 5 kuma suna kwanciya fiye da shekara ɗaya, don haka kuna ciyar da su watanni kafin kowane kuɗi ya shigo, kuma kuna buƙatar kasuwar ƙwai mai ɗorewa. Kajin gida da aka inganta, ko na nama da ƙwai, suna tsakiya: sun fi kajin nama da masu ƙwai jure wahala, suna iya yawon neman abinci tare da ƙarin abinci, kuma ana sayar da su don nama da ƙwai, sau da yawa a farashi mafi kyau ga kowace kaza, amma ba sa girma ko kwanciya kamar kajin kasuwanci na zamani.",
            "Misalai: Kenbro, wanda Kenchic ke sayarwa a Kenya, kaza ce ta nama da ƙwai; Kenchic ta ce tana shirya don nama a kusan mako 10 zuwa 14 ko tana kwanciya daga kusan mako 25, amma ba za ta kai yawan kajin nama ko masu ƙwai na musamman ba. Kuroiler, wanda aka samar a Indiya, kaza ce ta nama da ƙwai mai yawon neman abinci; wani bincike a Uganda ya gano Kuroiler sun fi kajin gida nauyi a yanayin ƙauye. Ku sayi kowane irin kaji daga wurin ƙyanƙyasa da ofishin kiwo ko likitan dabbobinku ya amince da shi kaɗai, kuma ku tambayi wasu manoma yadda ya yi musu."
          ],
          steps: ["Ku rubuta wanda zai saya: kaji masu rai, nama, ƙwai, otal-otal, kasuwanni.", "Ku rubuta kuɗin da za ku iya kashewa kafin kuɗi ya fara shigowa.", "Ku rubuta lokacin da za ku iya bayarwa kowace rana.", "Ku kwatanta kajin nama, masu ƙwai da kajin gida da aka inganta da jerinku.", "Ku zaɓi ɗaya, da dalilai uku, da wurin ƙyanƙyasa amintacce."],
          words: [["Kajin nama (broiler)", "kazar da aka haifa don ta girma da sauri don nama."], ["Kaza mai ƙwai (layer)", "kazar da aka haifa don ta yi ƙwai da yawa."], ["Kajin gida da aka inganta", "kaza mai jure wahala ta nama da ƙwai, da aka haifa daga ko don yanayin yanki."], ["Wurin ƙyanƙyasa (hatchery)", "kasuwancin da ke ƙyanƙyasa ƙwai yana sayar da 'yan tsaki na kwana ɗaya."]],
          slides: [
            { title: "Kajin nama", bullets: ["Nama; ana yawan sayarwa cikin kusan mako 5 zuwa 7", "Kuɗi da sauri; suna buƙatar abinci mai kyau da kulawa ta kusa", "Suna buƙatar mai saye a shirye a ranar"] },
            { title: "Kaji masu ƙwai", bullets: ["Ƙwai; suna farawa a kusan wata 4 zuwa 5", "Watanni na ciyarwa kafin kuɗi ya shigo", "Suna buƙatar kasuwar ƙwai mai ɗorewa"] },
            { title: "Kajin gida da aka inganta", bullets: ["Sun fi jure wahala; suna yawon neman abinci da ƙarin abinci", "Nama da ƙwai, sau da yawa farashi mafi kyau ga kowace kaza", "Misalai: Kenbro (Kenchic), Kuroiler (daga Indiya)"] },
            { title: "Ku zaɓa ku saya da kyau", bullets: ["Ku daidaita kasuwa, kuɗi da lokaci", "Wurin ƙyanƙyasa amintacce kaɗai", "Ku tambayi manoman da suka yi kiwon irin"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Ku rubuta jerinku uku: masu saye, kuɗin da ke akwai kafin kuɗi ya shigo, da lokacin kowace rana. Ku zaɓi kajin nama, masu ƙwai ko kajin gida da aka inganta, ku rubuta dalilai uku, tare da sunan wurin ƙyanƙyasa da ofishin kiwo ko likitan dabbobinku ya amince da shi.",
          youCanNow: "zaɓen kajin nama, kaji masu ƙwai ko kajin gida da aka inganta da suka dace da kasuwarku, kuɗinku da lokacinku.",
          quickCheck: [
            { objective: "O1", q: "Wani manomi ba shi da kuɗin jira sosai, kuma akwai otal da ke sayen kajin nama kowane mako shida. Wane irin ne ya fi dacewa?", options: ["Kaji masu ƙwai", "Kajin nama", "Agwagi", "Kajin gida da aka bari suna yawo"], answer: 1, why: "Ana sayar da kajin nama cikin makonni, wanda ya dace da mai sayen nama na kullum da gajeren jiran kuɗi." },
            { objective: "O1", q: "Me Kenchic ta ce game da Kenbro idan aka kwatanta da kajin nama da masu ƙwai na musamman?", options: ["Tana girma fiye da kajin nama", "Tana kwanciya fiye da kaji masu ƙwai", "Ba za ta kai yawan abin da suke bayarwa ba", "Ba ta buƙatar abinci kwata-kwata"], answer: 2, why: "Kenbro ta fi jure wahala kuma ta nama da ƙwai ce, amma ba ta kai yawan abin da kajin zamani na musamman ke bayarwa ba." }
          ]
        },
        {
          title: "Gida, fili da rainon 'yan tsaki",
          objectives: ["O2"],
          minutes: 6,
          goal: "Shirya gida, ƙayyade yawan kaji bisa fili, da rainon 'yan tsaki a zafin da ya dace.",
          text: [
            "Gidan kaji mai kyau yana da bushewa, iska da tsaro. A yankuna masu zafi, gefuna a buɗe da raga mai ƙarfi suna barin iska ta shiga; ana yawan gina dogon gida daga gabas zuwa yamma don rana ta rage shiga, da rufin da ya fito waje don hana ruwan sama shiga. Ku yi amfani da shimfiɗa mai kauri da bushewa kamar garin katako (wood shavings) ko ɓawon shinkafa. Ku hana ɓeraye, macizai, tsuntsayen daji da ɓarayi shiga. Kafin 'yan tsaki su iso, ku tsaftace ku kashe ƙwayoyin cuta a gidan da babu komai da kayan aiki, ku bar shi babu komai har lokacin hutun da likitan dabbobinku ya ba da shawara.",
            "Fili: cunkoso yana kawo matsalar zafi, shimfiɗa mai jiƙa, cin juna da cututtuka. Wurin ƙyanƙyasa, littafin jagorar irin kajin ko jami'in faɗakarwa yana ba da yawan kaji a kowane murabba'in mita don irin kajinku, shekarunsu da gidanku. Ku ninka fadin ƙasa da wannan lamba. Misali kawai: gida mai mita 5 da mita 8 murabba'in mita 40 ne; idan jagorarku ta ce kajin nama 10 a kowane murabba'in mita a lokacin sayarwa, yana ɗaukar kajin nama 400, ba 500 ba.",
            "Raino: 'yan tsaki na kwana ɗaya ba za su iya ɗumama kansu ba. Ku kafa zoben raino (da'irar kwali ko kwano) mai shimfiɗa, abin ɗumamawa (na gas ko lantarki, kwan fitila, ko murhun gawayi da iska mai kyau, domin hayaƙin gawayi yana iya kisa), kwanonin abinci da na ruwa, ku ɗumama shi kafin 'yan tsaki su iso. University of Missouri Extension ta ba da kusan 32 zuwa 35 °C a ƙarƙashin abin ɗumamawa a mako na farko, sannan kusan 3 °C ƙasa a kowane mako. Ku kalli 'yan tsaki: idan sun taru a ƙarƙashin zafi, sanyi ya yi musu; idan sun yi nesa suna haki, zafi ya yi yawa; idan sun cunkushe a gefe ɗaya, akwai iskar da ke shigowa; idan sun bazu daidai, daidai ne."
          ],
          steps: ["Ku tsaftace ku kashe ƙwayoyin cuta a gidan da babu komai da kayan aiki; ku bar shi ya huta yadda likitan dabbobi ya ce.", "Ku shimfiɗa shimfiɗa mai kauri da bushewa.", "Ku lissafa kaji nawa ƙasar za ta ɗauka daga jagorar irin kajinku.", "Ku kafa zoben raino, abin ɗumamawa, kwanonin abinci da na ruwa.", "Ku ɗumama shi kafin 'yan tsaki su iso.", "Ku kalli 'yan tsaki sau da yawa a rana ku daidaita zafi."],
          words: [["Raino (brooding)", "ɗumama 'yan tsaki da ciyar da su a makonninsu na farko."], ["Zoben raino (brooder ring)", "da'irar kwali ko kwano da ke ajiye 'yan tsaki kusa da zafi, abinci da ruwa."], ["Shimfiɗa (litter)", "busasshen abin shimfiɗawa a ƙasa, kamar garin katako ko ɓawon shinkafa."], ["Yawan kaji a fili (stocking density)", "kaji nawa ake ajiyewa a kowane murabba'in mita na ƙasa."]],
          slides: [
            { title: "Gida mai kyau", bullets: ["Bushewa, iska, gefuna a buɗe da raga a lokacin zafi", "Rufin da ya fito waje; ana yawan ginawa daga gabas zuwa yamma", "Shimfiɗa mai kauri da bushewa; ku hana ɓeraye da tsuntsayen daji"] },
            { title: "Fili", bullets: ["Cunkoso = matsalar zafi, shimfiɗa mai jiƙa, cututtuka", "Kaji a kowane murabba'in mita daga jagorar irin kajinku", "Misali: murabba'in mita 40 x 10 = kajin nama 400"] },
            { title: "Kafa wurin raino", bullets: ["Zoben raino, zafi, kwanonin abinci da na ruwa", "Ku ɗumama shi kafin 'yan tsaki su iso", "Gawayi: iska mai kyau, hayaƙinsa yana iya kisa"] },
            { title: "Ku karanta halin 'yan tsaki", bullets: ["Kusan 32 zuwa 35 °C da farko, kusan 3 °C ƙasa kowane mako", "Sun taru = sanyi; sun yi nesa = zafi", "Sun cunkushe a gefe ɗaya = iska tana shigowa; sun bazu = daidai"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Ku auna gidan kajinku (ko wanda kuke shirin ginawa) ku lissafa fadin ƙasa. Ku tambayi wurin ƙyanƙyasa ko jami'in faɗakarwa kaji nawa a kowane murabba'in mita don irin kajinku, ku rubuta kaji nawa gidan zai ɗauka. Ku zana yadda za ku kafa wurin raino.",
          youCanNow: "shirya gida, ƙayyade yawan kaji bisa filinsa, da rainon 'yan tsaki ta hanyar kallon halayensu.",
          quickCheck: [
            { objective: "O2", q: "Duk 'yan tsakinku sun taru sosai a ƙarƙashin abin ɗumamawa. Me hakan ke nufi?", options: ["Zafi ya yi musu yawa", "Suna jin yunwa", "Sun shirya barin wurin raino", "Sanyi ya yi musu; ku ƙara zafi ko ku toshe iskar da ke shigowa"], answer: 3, why: "Taruwa a ƙarƙashin zafi yana nufin 'yan tsakin suna jin sanyi." },
            { objective: "O2", q: "Gidanku mita 6 ne da mita 5. Jagorar ta ce kaji 10 a kowane murabba'in mita. Kaji nawa?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = murabba'in mita 30, x 10 = kaji 300." }
          ]
        },
        {
          title: "Abinci da ruwa a kowane mataki",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tsara abinci don kowane mataki, lokacin canja shi, da samun ruwa mai tsabta a koyaushe.",
          text: [
            "Abinci shi ne kuɗi mafi girma a rukuni, don haka ku ba da abincin da ya dace a matakin da ya dace. Kajin nama: abincin farawa (starter), sannan abincin ƙarshe (finisher) (wasu tsare-tsare suna ƙara abincin girma, grower). Kaji masu ƙwai: abincin 'yan tsaki (chick mash), sannan abincin girma (growers mash), sannan abincin masu ƙwai (layers mash) daga lokacin da suke shirin fara kwanciya, wanda ke da ƙarin sinadarin calcium da kaza ke buƙata don ɓawon ƙwai mai ƙarfi. Kajin gida da aka inganta: ku bi jagorar wurin ƙyanƙyasa; idan suna yawo rabi-da-rabi, har yanzu suna buƙatar abinci mai daidaito ban da abin da suke tsinta don su girma su kwanta da kyau. Ku canja abinci cikin 'yan kwanaki ta hanyar haɗa tsoho da sabo.",
            "Ku sayi abinci daga mai niƙa amintacce, ku duba cewa buhun yana da rubutu (label), a bushe yake kuma lokacinsa bai ƙare ba, ku ajiye shi a kan katako a wuri mai bushewa. Ku yi amfani da isassun kwanonin abinci don duk kaji su ci a lokaci ɗaya, ku ɗaga su zuwa tsayin bayan kajin yayin da suke girma, kuma kada ku cika su har baki, domin kaji suna tona abinci su zubar da shi.",
            "Ruwa ya fi abinci muhimmanci: kaji suna shan ruwa fiye da abincin da suke ci, kuma suna daina ci da kwanciya idan ruwa ya ƙare ko ya yi zafi. Ku ba da ruwa mai tsabta da sanyi a koyaushe, da isassun kwanonin ruwa, da ake wankewa kowace rana. Raguwar shan ruwa farat ɗaya sau da yawa ita ce alamar farko ta rashin lafiya. Idan kuna ba da allurar rigakafi ko magani ta ruwa, ku bi likitan dabbobi da label daidai; wasu suna buƙatar ruwa marar sinadarin chlorine ko maganin kashe ƙwayoyin cuta."
          ],
          steps: ["Ku rubuta matakan irin kajinku.", "Ku rubuta abincin kowane mataki da shekarun canja shi.", "Ku tsara isassun kwanonin abinci da na ruwa don duk kaji a lokaci ɗaya.", "Ku ɗaga kwanonin abinci da na ruwa yayin da kaji ke girma; kada ku cika su sosai.", "Ku wanke kwanonin ruwa kowace rana; kada ku taɓa bari ruwa ya ƙare.", "Ku rubuta shan ruwa na kowace rana; raguwa farat ɗaya tana nufin ku kira likitan dabbobi."],
          words: [["Abincin farawa (starter)", "abinci na farko mai yawan furotin don 'yan tsaki."], ["Abincin ƙarshe (finisher)", "abinci na ƙarshe ga kajin nama kafin sayarwa."], ["Abincin masu ƙwai (layers mash)", "abincin kaji masu kwanciya mai ƙarin calcium don ɓawon ƙwai."], ["Lokacin fara kwanciya (point of lay)", "shekarun da 'yan matan kaji ke shirin fara kwanciya."]],
          slides: [
            { title: "Abinci a kowane mataki", bullets: ["Kajin nama: abincin farawa, sannan na ƙarshe", "Kaji masu ƙwai: na 'yan tsaki, na girma, sannan na masu ƙwai", "Ku canja cikin 'yan kwanaki"] },
            { title: "Ku saya ku yi amfani da abinci da kyau", bullets: ["Mai niƙa amintacce; da label, a bushe, lokaci bai ƙare ba", "Isassun kwanonin abinci; ku ɗaga su yayin da kaji ke girma", "Kada ku cika su sosai: tona abinci yana ɓata shi"] },
            { title: "Ruwa ne na farko", bullets: ["Kaji suna sha fiye da abin da suke ci", "Ruwa mai tsabta da sanyi a koyaushe", "Raguwar shan ruwa farat ɗaya = alamar gargaɗi"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Ku yi teburin abinci don rukuninku: mataki, shekaru, irin abinci, da kusan buhu nawa kuke tsammanin saye (ku tambayi mai sayar da abinci ko wurin ƙyanƙyasa). Ku ƙara kwanonin abinci da na ruwa nawa kuke buƙata, da wanda zai wanke kwanonin ruwa kowace rana.",
          youCanNow: "tsara abincin da ya dace don kowane mataki, lokacin canja shi, da samun ruwa mai tsabta a koyaushe.",
          quickCheck: [
            { objective: "O3", q: "Me yasa kaji masu kwanciya ke buƙatar abincin masu ƙwai maimakon abincin girma?", options: ["Ya fi araha", "Yana sa su yi tsayi", "Yana da ƙarin calcium da ake buƙata don ɓawon ƙwai mai ƙarfi", "Yana maye gurbin ruwa"], answer: 2, why: "Kaji masu kwanciya suna buƙatar ƙarin calcium don ɓawo, kuma abincin masu ƙwai yana ba da shi." },
            { objective: "O3", q: "Kajin namanku sun rage shan ruwa sosai farat ɗaya idan aka kwatanta da jiya. Me hakan ke nuna?", options: ["Wataƙila suna fara rashin lafiya; ku duba su ku kira likitan dabbobi", "Suna da lafiya kuma sun ƙoshi", "Abincin ya yi kyau fiye da kima", "Lokacin sayar da su ya yi"], answer: 0, why: "Raguwar shan ruwa farat ɗaya sau da yawa ita ce alamar farko ta cuta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shirya rukunin",
        questions: [
          { objective: "O1", q: "Mene ne babban haɗarin kajin nama?", options: ["Suna ɗaukar shekaru biyu kafin a sayar", "Suna yin ƙwai da yawa", "Ba a iya cin su", "Kowace ƙarin rana kafin sayarwa tana cin abinci da riba, don haka kuna buƙatar mai saye a shirye"], answer: 3, why: "Kajin nama suna ci gaba da ci; jinkirin sayarwa yana rage riba da sauri." },
          { objective: "O1", q: "Wanne gaskiya ne game da kajin gida da aka inganta kamar Kuroiler?", options: ["Sun fi jure wahala kuma na nama da ƙwai ne, amma suna bayar da ƙasa da kajin zamani na musamman", "Ba sa buƙatar ruwa", "Don ƙwai ne kawai", "Su ne kajin nama mafi saurin girma"], answer: 0, why: "Kajin nama da ƙwai suna sadaukar da wani ɓangare na yawan abin da suke bayarwa don jure wahala da amfani biyu." },
          { objective: "O2", q: "'Yan tsaki sun yi nesa da abin ɗumamawa suna haki. Me za ku yi?", options: ["Ku ƙara zafi", "Ku toshe duk iska", "Ku rage zafi ko ku ɗaga abin ɗumamawa", "Ku ƙara 'yan tsaki"], answer: 2, why: "Yin nesa da haki yana nufin zafi ya yi wa 'yan tsakin yawa." },
          { objective: "O2", q: "Yaushe ya kamata ku ɗumama wurin raino?", options: ["Bayan 'yan tsaki sun iso", "Kafin 'yan tsaki su iso", "Da dare kawai a mako na 3", "Ba sai an yi ba; 'yan tsaki suna ɗumama kansu"], answer: 1, why: "'Yan tsaki na kwana ɗaya suna buƙatar ɗumi tun lokacin da suka iso." },
          { objective: "O3", q: "Ta yaya ya kamata ku canja daga wani abinci zuwa na gaba?", options: ["A dare ɗaya", "Ku daina ciyarwa na kwana ɗaya da farko", "Sai kaji sun yi rama", "Cikin 'yan kwanaki, kuna haɗa tsoho da sabo"], answer: 3, why: "Canji a hankali yana hana tayar da cin abinci da narkewar abincin kaji." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da rukuni mai riba",
      lessons: [
        {
          title: "Tsarin rigakafi da kare rukuni daga cututtuka",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rubuta tsarin rigakafi tare da likitan dabbobi da kafa dokokin kare rukuni daga cututtuka.",
          text: [
            "Rigakafi yana kare rukuni daga cututtukan da suka zama ruwan dare a yankinku. Waɗanne alluran rigakafi, a wane shekaru da yadda ake bayarwa (ta ruwan sha, ɗigon ido, allura ko soka fiffike) dole ne likitan dabbobi mai rajista ko jami'in lafiyar dabbobi ya ƙayyade, domin cututtuka sun bambanta bisa yanki da lokaci. Misalai da aka saba a Afirka sun haɗa da cutar Newcastle da Gumboro, da cutar Marek (wadda ake yawan bayarwa a wurin ƙyanƙyasa) da ƙyandar kaji (fowl pox); likitan dabbobinku zai iya ƙara wasu. Ku nemi wurin ƙyanƙyasa ya ba ku rubutun abin da 'yan tsakin suka riga suka samu.",
            "Ku sa rigakafi ya yi aiki: ku saya daga shagon magungunan dabbobi mai lasisi, ku duba ranar ƙarewa, ku ajiye shi a sanyi daga shago har zuwa kaji, ku ba da shi daidai yadda label da likitan dabbobi suka ce, ku yi wa dukkan garken rigakafi, ku rubuta rana, sunan rigakafi, lambar rukuninsa (batch number) da hanyar bayarwa a bayananku. Kada ku taɓa yi wa kaji marasa lafiya maganin ƙwayoyin cuta (antibiotics) da kanku: likitan dabbobi ne ke yanke shawara, kuma ku rubuta lokacin jira daga label don kada a sayar da ƙwai ko nama kafin ya ƙare.",
            "Kare rukuni daga cututtuka: ku sayi 'yan tsaki daga wurin ƙyanƙyasa amintacce ɗaya, ku gudanar da gidan duka-ciki, duka-waje (all-in, all-out): duk kaji shekarunsu ɗaya, suna shiga tare kuma suna fita tare. Tsakanin rukunoni, ku cire duk shimfiɗa, ku wanke ku kashe ƙwayoyin cuta a gida da kayan aiki, ku bar shi babu komai har lokacin hutun da likitan dabbobinku ya ba da shawara. Ku hana baƙi shiga, ku yi amfani da ruwan wanke ƙafa (footbath) da takalman gona, ku hana tsuntsayen daji da ɓeraye, kuma kada ku taɓa kawo kajin kasuwa gida. Dole a sanar da hukuma game da murar tsuntsaye: mutuwa farat ɗaya, jajayen tsoka (combs) da suka kumbura suka yi shunayya, haki ko faɗuwar ƙwai sosai suna nufin ku ajiye kaji a ciki, ku dakatar da duk sayarwa da motsi, ku kira likitan dabbobi nan take."
          ],
          steps: ["Ku tambayi wurin ƙyanƙyasa waɗanne alluran rigakafi 'yan tsakin suka riga suka samu.", "Ku zauna da likitan dabbobinku ku rubuta tsarin: cuta, shekaru, hanya.", "Ku sayi rigakafi daga shagon magungunan dabbobi mai lasisi; ku duba ranar ƙarewa; ku ajiye shi a sanyi.", "Ku yi wa dukkan garken rigakafi daidai yadda label da likitan dabbobi suka ce; ku rubuta.", "Ku gudanar da duka-ciki, duka-waje; ku tsaftace, ku kashe ƙwayoyin cuta, ku bar gida ya huta tsakanin rukunoni.", "Idan ana zaton murar tsuntsaye ko cutar Newcastle: ku ajiye kaji a ciki, ku dakatar da sayarwa, ku kira likitan dabbobi."],
          words: [["Tsarin rigakafi", "rubutaccen tsari na waɗanne alluran rigakafi garken zai samu, a wane shekaru da yadda, wanda likitan dabbobi ya tsara."], ["Duka-ciki, duka-waje (all-in, all-out)", "duk kajin da ke gida shekarunsu ɗaya, ana sa su tare kuma ana fitar da su tare."], ["Lokacin jira (withdrawal period)", "lokacin bayan magani kafin a iya sayar da ƙwai ko nama; yana rubuce a label."], ["Shagon magungunan dabbobi mai lasisi (agrovet)", "shagon da doka ta ba izinin sayar da magungunan dabbobi da alluran rigakafi."]],
          slides: [
            { title: "Likitan dabbobi ne ke tsara shirin", bullets: ["Waɗanne alluran rigakafi, a wane shekaru, wace hanya", "Da aka saba: Newcastle, Gumboro, Marek, ƙyandar kaji", "Ku tambayi wurin ƙyanƙyasa abin da 'yan tsaki suka riga suka samu"] },
            { title: "Ku sa rigakafi ya yi aiki", bullets: ["Shago mai lasisi; ku duba ranar ƙarewa; ku ajiye a sanyi", "Daidai yadda label da likitan dabbobi suka ce; dukkan garken", "Ku rubuta rana, rigakafi, lambar rukuni, hanya"] },
            { title: "Kare rukuni daga cututtuka", bullets: ["Wurin ƙyanƙyasa ɗaya; duka-ciki, duka-waje", "Ku tsaftace, ku kashe ƙwayoyin cuta, ku bar gida ya huta tsakanin rukunoni", "Ruwan wanke ƙafa, takalman gona, babu baƙi, babu kajin kasuwa"] },
            { title: "Murar tsuntsaye: ku sanar nan take", bullets: ["Mutuwa farat ɗaya, tsoka mai shunayya, haki, faɗuwar ƙwai", "Ku ajiye kaji a ciki; ku dakatar da sayarwa da motsi", "Ku kira likitan dabbobi ko ofishin lafiyar dabbobi yanzu"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Ku tsara ganawa da likitan dabbobinku ko jami'in lafiyar dabbobi. Ku kawo tebur mai layuka: cuta, shekaru, hanya, ranar da aka bayar, lambar rukuni. Ku cike tsarin da likitan dabbobi ya tsara. A ƙarƙashinsa, ku rubuta dokoki biyar na kare rukuninku daga cututtuka.",
          youCanNow: "rubuta tsarin rigakafi tare da likitan dabbobinku, rubuta kowace allurar rigakafi, da gudanar da tsauraran matakan kare rukuni daga cututtuka.",
          quickCheck: [
            { objective: "O4", q: "Wa ya kamata ya yanke waɗanne alluran rigakafi garkenku zai samu da yaushe?", options: ["Mai sayar da abinci", "Likitan dabbobi mai rajista ko jami'in lafiyar dabbobi", "Maƙwabci mai kaji", "Ƙungiyar kafofin sada zumunta"], answer: 1, why: "Cututtuka sun bambanta bisa yanki, don haka likitan dabbobi mai rajista ne ke tsara shirin." },
            { objective: "O4", q: "Mene ne ma'anar duka-ciki, duka-waje?", options: ["Kaji suna fita yawon neman abinci kowace rana", "Baƙi suna iya shiga da fita yadda suka so", "Ana ƙara sababbin kaji kowane mako", "Ana sa duk kajin gida tare kuma ana fitar da su tare"], answer: 3, why: "Rukunin shekaru ɗaya a kowane gida yana ba ku damar tsaftace shi da bar shi ya huta sosai tsakanin rukunoni, wanda ke katse zagayen cututtuka." }
          ]
        },
        {
          title: "Kula da ƙwai da bayanan garke",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tara da ajiye ƙwai yadda ya kamata da ajiye bayanan garke kowace rana.",
          text: [
            "Ƙwai suna rasa inganci kuma suna ɗaukar ƙwayoyin cuta idan sun daɗe a gida-gidan kwanciya. Ku tara su aƙalla sau biyu a rana, fiye da haka a lokacin zafi. Ku tsaftace gida-gidan kwanciya da sabuwar shimfiɗa don ƙwai su fito da tsabta. Ku ware ƙwai masu tsagewa, masu datti da ƙanana sosai. Ku goge ƙwai masu ɗan datti da busasshen kyalle; kada ku jiƙa su a ruwa, domin hakan yana iya jawo ƙwayoyin cuta ta ɓawon. Ku ajiye ƙwai a tire, kan mai tsini a ƙasa, a wuri mai sanyi, inuwa da iska, nesa da ƙamshi mai ƙarfi, ku sayar da mafiya tsufa da farko.",
            "Bayanai suna faɗa muku abin da ke faruwa kafin lokaci ya ƙure. Kowace rana ku rubuta: yawan kaji, mace-mace da abin da wataƙila ya kashe su, abincin da aka yi amfani da shi, ruwan da aka sha, da ƙwan da aka tara (a tire da kuma bisa daraja). Ku kuma rubuta kowace allurar rigakafi da magani, ranar ƙarewar lokacin jira daga label, kowane saye da kowane sayarwa. Littafin takarda yana aiki; teburin lissafi a waya yana haɗa jimla a madadinku.",
            "Ku yi amfani da bayanan. Yawan mace-mace = kajin da suka mutu / kajin da aka fara da su x 100. Yawan kwanciya = ƙwan da aka tara a rana / kaji masu ƙwai x 100. Idan mace-mace suka ƙaru, shan ruwa ya ragu ko yawan kwanciya ya faɗi farat ɗaya, ku duba garken ku kira likitan dabbobi. A ƙarshen rukuni, bayanan suna ba ku lambobin takardar kuɗinku."
          ],
          steps: ["Ku tara ƙwai aƙalla sau biyu a rana.", "Ku ware ƙwai masu tsagewa, masu datti da ƙanana; ku goge masu ɗan datti da busasshen kyalle.", "Ku ajiye su a tire, kan mai tsini a ƙasa, a sanyi da inuwa; mafiya tsufa da farko.", "Kowace rana ku rubuta kaji, mace-mace, abinci, ruwa da ƙwai.", "Ku rubuta alluran rigakafi, magunguna, ranakun ƙarewar lokacin jira, saye da sayarwa.", "Ku lissafa mace-mace da yawan kwanciya kowane mako ku nemi canji farat ɗaya."],
          words: [["Yawan mace-mace (mortality rate)", "kason kajin da suka mutu, a kashi cikin ɗari na kajin da kuka fara da su."], ["Yawan kwanciya (laying rate)", "ƙwan da aka tara a rana a kashi cikin ɗari na yawan kaji masu ƙwai."], ["Daraja (grade)", "rarraba ƙwai bisa girma da inganci."]],
          slides: [
            { title: "Kula da ƙwai", bullets: ["Ku tara aƙalla sau biyu a rana", "Gida-gidan kwanciya masu tsabta; ku ware ƙwai masu tsagewa da datti", "Ku goge da busasshen kyalle; kada ku jiƙa a ruwa"] },
            { title: "Ajiye ƙwai", bullets: ["A tire, kan mai tsini a ƙasa", "Sanyi, inuwa, iska, babu ƙamshi mai ƙarfi", "Ku sayar da mafiya tsufa da farko"] },
            { title: "Bayanan kowace rana", bullets: ["Kaji, mace-mace da dalili, abinci, ruwa, ƙwai", "Alluran rigakafi, magunguna, ranakun ƙarewar lokacin jira", "Kowane saye da sayarwa"] },
            { title: "Ku yi amfani da lambobin", bullets: ["Mace-mace = matattu / na farko x 100", "Yawan kwanciya = ƙwai a rana / kaji masu ƙwai x 100", "Canji farat ɗaya: ku duba garken, ku kira likitan dabbobi"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Ku yi shafin bayanan kowace rana mai layuka: rana, kaji, mace-mace da dalili, abincin da aka yi amfani da shi, ruwan da aka sha, ƙwan da aka tara, bayani. Ku cike misalin mako ɗaya. Sannan ku lissafa yawan mace-mace kuma, ga kaji masu ƙwai, yawan kwanciya na rana ɗaya.",
          youCanNow: "tara da ajiye ƙwai yadda ya kamata da ajiye bayanan kowace rana da ke nuna mace-mace da yawan kwanciya.",
          quickCheck: [
            { objective: "O5", q: "Ta yaya ya kamata a ajiye ƙwai a tire?", options: ["Kan mai tsini a sama, a rana", "Kan mai tsini a ƙasa, a wuri mai sanyi da inuwa", "A wanke su a jiƙa su da farko", "Kusa da kalanzir da albasa"], answer: 1, why: "Kan mai tsini a ƙasa, a sanyi da inuwa yana sa ƙwai su daɗe da sabo." },
            { objective: "O5", q: "Kun fara da kajin nama 500, kuma 25 sun mutu. Mene ne yawan mace-mace?", options: ["Kashi 25 cikin ɗari", "Kashi 2.5 cikin ɗari", "Kashi 50 cikin ɗari", "Kashi 5 cikin ɗari"], answer: 3, why: "25 / 500 x 100 = kashi 5 cikin ɗari." }
          ]
        },
        {
          title: "Lissafin kuɗin rukuni: kuɗin kowace kaza da farashin daidaito",
          objectives: ["O6"],
          minutes: 6,
          goal: "Lissafa kuɗin kowace kaza ko kowane tire da farashin daidaito na rukuni.",
          text: [
            "Ku jera kowane kuɗin rukunin: 'yan tsaki, abinci, alluran rigakafi da likitan dabbobi, shimfiɗa, makamashin raino ko wutar lantarki, maganin kashe ƙwayoyin cuta, aiki, sufuri da kwalaye. Misali da farashin shilling na Kenya na ƙirƙira, kajin nama 500: 'yan tsaki 50,000; abinci 122,500; alluran rigakafi da likitan dabbobi 5,000; shimfiɗa, raino da wuta 8,000; sufuri da sauransu 6,500. Jimla KES 192,000. Ku yi amfani da farashin da aka ba ku: farashi sun bambanta bisa wuri da lokaci, kuma a NGN, GHS ko XOF hanyar ɗaya ce.",
            "Mace-mace suna canja komai, domin kajin da suka mutu sun riga sun ci abinci. Idan kashi 5 cikin ɗari suka mutu, kuna sayar da kaji 475. Kuɗin kowace kaza da aka sayar = 192,000 / 475 = KES 404. Wannan shi ne farashin daidaitonku: idan kuka sayar ƙasa da shi, kuna asara. Idan kashi 15 cikin ɗari suka mutu, kaji 425 kawai kuke sayarwa, kuma farashin daidaito ya tashi zuwa kusan KES 452. A farashin sayarwa na KES 550, kaji 475 suna kawo 261,250, riba ta 69,250. Don sanin kaji nawa dole ku sayar don biyan kuɗin da aka kashe: 192,000 / 550 = 349.1, don haka kaji 350.",
            "Kaji masu ƙwai: ku lissafa kowane mako. Misali: kaji 300 masu yawan kwanciya kashi 80 cikin ɗari suna ba da 300 x 0.8 x 7 = ƙwai 1,680, ko tire 56 na ƙwai 30. Idan abinci da sauran kuɗi KES 15,000 ne a mako, kuɗin kowane tire shi ne 15,000 / 56 = kusan KES 268. Ku kwatanta shi da farashin da masu saye ke biya. Kafin ku fara, ku kuma karanta kowane bashi ko yarjejeniya da mai saye ko mai kawo kaya gaba ɗaya, ku tambayi mai ba da shawara amintacce."
          ],
          steps: ["Ku jera kowane kuɗin rukunin da farashin yankinku.", "Ku haɗa su don jimlar kuɗi.", "Ku yi kiyasin mace-mace ku lissafa kajin da za ku sayar.", "Kuɗin kowace kaza = jimlar kuɗi / kajin da aka sayar: farashin daidaitonku.", "Kaji masu ƙwai: kuɗin kowane tire = kuɗin mako / tiren da aka tara.", "Ku kwatanta da farashin sayarwa; ku lissafa riba ko asara."],
          words: [["Farashin daidaito (break-even price)", "farashin kowace kaza ko tire da kuɗin shiga ke biyan dukkan kuɗin da aka kashe daidai."], ["Riba", "kuɗin shiga ban da dukkan kuɗin da aka kashe."], ["Takardar kuɗi (cost sheet)", "jerin kowane kuɗin rukuni tare da jimla."]],
          slides: [
            { title: "Ku jera kowane kuɗi", bullets: ["'Yan tsaki, abinci, rigakafi da likitan dabbobi, shimfiɗa, makamashi", "Aiki, sufuri, kwalaye", "Misalin jimla: KES 192,000 don kajin nama 500"] },
            { title: "Mace-mace suna ƙara kuɗin kowace kaza", bullets: ["Kashi 5 cikin ɗari sun mutu: an sayar da 475, KES 404 kowacce", "Kashi 15 cikin ɗari sun mutu: an sayar da 425, kusan KES 452 kowacce", "Kajin da suka mutu sun riga sun ci abinci"] },
            { title: "Farashin daidaito da riba", bullets: ["Farashin daidaito = jimlar kuɗi / kajin da aka sayar", "A KES 550: 475 x 550 - 192,000 = KES 69,250", "Kajin da ake buƙata don biyan kuɗi: 192,000 / 550 = 350"] },
            { title: "Kaji masu ƙwai: kuɗin kowane tire", bullets: ["Kaji 300 x 0.8 x 7 = ƙwai 1,680 = tire 56", "KES 15,000 / 56 = kusan KES 268 a tire", "Farashin misalai ne; ku yi amfani da naku"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin rukuni ɗaya mai lissafin kuɗi: irin kaji, girman gida da yawan kaji, yadda za ku raini 'yan tsaki, abinci a kowane mataki, tsarin rigakafi da dokokin kare gona, bayanai, da takardar kuɗi mai kowane kuɗi, mace-macen da ake tsammani, kuɗin kowace kaza da aka sayar ko kowane tire, da farashin daidaitonku.",
          youCanNow: "lissafa kuɗin rukuni, la'akari da mace-mace, da sanin kuɗin kowace kaza ko kowane tire da farashin daidaitonku.",
          quickCheck: [
            { objective: "O6", q: "Rukuni ya ci NGN 900,000 kuma kuna tsammanin sayar da kaji 450. Mene ne farashin daidaito na kowace kaza?", options: ["NGN 200", "NGN 450", "NGN 2,000", "NGN 20,000"], answer: 2, why: "900,000 / 450 = NGN 2,000 kowace kaza." },
            { objective: "O6", q: "Me yasa yawan mace-mace ke ƙara kuɗin kowace kaza?", options: ["Kajin da suka mutu sun ci abinci kuma sun ci kuɗi amma ba a sayar da su", "Ana sayar da kajin da suka mutu da farashi mafi tsada", "Abinci yana yin araha", "Alluran rigakafi suna yin araha"], answer: 0, why: "Jimlar kuɗi ɗaya ake raba wa kajin da aka sayar ƙalilan." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da rukuni mai riba",
        questions: [
          { objective: "O4", q: "Kafin sayen alluran rigakafi, me ya kamata ku duba?", options: ["Cewa su ne mafiya araha", "Cewa daga shago mai lasisi suke, lokacinsu bai ƙare ba kuma an ajiye su a sanyi", "Cewa ba su da label", "Cewa maƙwabci yana da ragowa"], answer: 1, why: "Rigakafin da lokacinsa ya ƙare ko ya yi zafi bazai kare garken ba." },
          { objective: "O4", q: "Kajin ƙwanku suna mutuwa da yawa farat ɗaya da tsoka mai shunayya. Me za ku yi?", options: ["Ku sayar da ƙwai da sauri", "Ku ba da maganin ƙwayoyin cuta daga shago", "Ku kawo sababbin kaji", "Ku ajiye kaji a ciki, ku dakatar da duk sayarwa da motsi, ku kira likitan dabbobi nan take"], answer: 3, why: "Waɗannan alamu suna nuna murar tsuntsaye, wadda dole a sanar da hukuma nan take." },
          { objective: "O5", q: "Me yasa za ku tara ƙwai aƙalla sau biyu a rana?", options: ["Ƙwan da suka daɗe a gida-gidan kwanciya suna rasa inganci suna ɗaukar ƙwayoyin cuta", "Kaji suna kwanciya da dare kawai", "Yana sa kaji su ninka kwanciya", "Masu saye sun fi son ƙwai masu ɗumi"], answer: 0, why: "Tarawa akai-akai yana sa ƙwai su kasance masu tsabta da sabo." },
          { objective: "O5", q: "Kaji masu ƙwai 250 sun yi ƙwai 200 yau. Mene ne yawan kwanciya?", options: ["Kashi 50 cikin ɗari", "Kashi 125 cikin ɗari", "Kashi 80 cikin ɗari", "Kashi 20 cikin ɗari"], answer: 2, why: "200 / 250 x 100 = kashi 80 cikin ɗari." },
          { objective: "O6", q: "Kuɗin kaji masu ƙwai na mako GHS 2,400 ne kuma kun tara tire 60. Mene ne kuɗin kowane tire?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2,400 / 60 = GHS 40 kowane tire." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kiwon Kaji don Kasuwanci",
    questions: [
      { objective: "O1", q: "Wane irin kaji ne ke kawo kuɗi da wuri?", options: ["Kaji masu ƙwai", "Kajin nama", "Zakarun kiwo", "Kajin gida da aka inganta da ake kiwo don ƙwai"], answer: 1, why: "Ana yawan sayar da kajin nama cikin kusan mako 5 zuwa 7." },
      { objective: "O1", q: "Me kaji masu ƙwai ke buƙata da kajin nama ba sa buƙata?", options: ["Mai saye a rana ɗaya ƙayyadaddiya", "Rashin abinci na watanni", "Watanni na ciyarwa kafin kuɗi ya shigo da kasuwar ƙwai mai ɗorewa", "Sayarwa cikin makonni shida"], answer: 2, why: "Kaji masu ƙwai suna fara kwanciya ne a kusan wata 4 zuwa 5, sannan suna buƙatar masu sayen ƙwai na kullum." },
      { objective: "O1", q: "A ina ya kamata ku sayi 'yan tsaki na kwana ɗaya?", options: ["Daga wurin ƙyanƙyasa da ofishin kiwo ko likitan dabbobinku ya amince da shi", "Daga kowane mai sayarwa a gefen hanya", "Daga tallan intanet mafi araha", "Daga gonar da ke da kaji marasa lafiya"], answer: 0, why: "Wurin ƙyanƙyasa amintacce yana ba da 'yan tsaki masu lafiya na irin da ya dace tare da bayanan rigakafi." },
      { objective: "O2", q: "'Yan tsaki sun cunkushe a gefe ɗaya na wurin raino, nesa da abin ɗumamawa. Mene ne dalilin da ya fi yiwuwa?", options: ["Zafi ya yi yawa", "Abinci ya yi yawa", "Suna jin barci", "Iska tana shigowa"], answer: 3, why: "Cunkushewa a gefe ɗaya nesa da zafi yana nuna iskar da ke shigowa." },
      { objective: "O2", q: "Me ke faruwa idan kuka cunkusa kaji da yawa a gida?", options: ["Suna girma da sauri", "Matsalar zafi, shimfiɗa mai jiƙa, cin juna da cututtuka", "Suna buƙatar ruwa ƙasa da haka", "Ƙwai suna ƙara girma"], answer: 1, why: "Cunkoso yana cutar da lafiya da girma." },
      { objective: "O2", q: "Me yasa wurin raino mai gawayi dole ya kasance da iska mai kyau?", options: ["Hayaƙin gawayi yana iya kashe 'yan tsaki da mutane", "Don sanyaya 'yan tsaki", "Don barin tsuntsayen daji su shiga", "Don ajiye gawayi"], answer: 0, why: "Gawayi mai ci yana fitar da hayaƙi mai kisa a wuri a rufe." },
      { objective: "O2", q: "Me ya kamata ku yi wa gida kafin sabon rukuni ya iso?", options: ["Ku ƙara sababbin kaji ga tsofaffi", "Ku bar tsohuwar shimfiɗa don ɗumi", "Ku tsaftace, ku kashe ƙwayoyin cuta, ku bar shi ya huta yadda likitan dabbobi ya ce", "Babu komai"], answer: 2, why: "Tsaftacewa, kashe ƙwayoyin cuta da hutawa suna katse zagayen cututtuka tsakanin rukunoni." },
      { objective: "O3", q: "Mene ne tsarin abinci da aka saba ga kajin nama?", options: ["Abincin masu ƙwai, sannan na farawa", "Abincin girma kawai", "Abincin 'yan tsaki, sannan na masu ƙwai", "Abincin farawa, sannan na ƙarshe"], answer: 3, why: "Kajin nama suna farawa da abincin farawa mai yawan furotin, suna ƙarewa da abincin ƙarshe." },
      { objective: "O3", q: "Me yasa ba za a cika kwanonin abinci har baki ba?", options: ["Kaji suna tona abinci su zubar da shi", "Abinci yana yin sanyi", "Yana sa kaji su rage kwanciya", "Yana jawo likitocin dabbobi"], answer: 0, why: "Kwanonin da aka cika sosai suna ɓata abinci, wanda shi ne kuɗi mafi girma na rukuni." },
      { objective: "O3", q: "Mene ne yawanci alamar farko cewa kaji suna fara rashin lafiya?", options: ["Suna yin manyan ƙwai", "Gashinsu yana yin fari", "Raguwar shan ruwa farat ɗaya", "Suna girma da sauri"], answer: 2, why: "Kaji marasa lafiya suna rage shan ruwa, sau da yawa kafin sauran alamu su bayyana." },
      { objective: "O4", q: "Wace ce allurar rigakafin kaji da aka saba a Afirka wadda likitan dabbobi ke tsarawa?", options: ["Cutar Newcastle", "Haukan kare (rabies)", "Cutar ƙafa da baki", "East Coast fever"], answer: 0, why: "Cutar Newcastle tana ɗaya daga cikin alluran rigakafin kaji da aka fi saba; likitan dabbobi ne ke tsara shirin." },
      { objective: "O4", q: "Me ya kamata ku rubuta duk lokacin da kuka yi rigakafi?", options: ["Yanayi kawai", "Babu komai; shagon magunguna ne ke ajiye bayanai", "Farashin ƙwai", "Rana, rigakafi, lambar rukuni da hanya"], answer: 3, why: "Cikakkun bayanai suna nuna abin da garken ya samu kuma suna taimakon likitan dabbobi." },
      { objective: "O4", q: "Wa ke yanke shawarar ba da maganin ƙwayoyin cuta ga kaji marasa lafiya?", options: ["Ma'aikacin gona", "Likitan dabbobi", "Mai sayen ƙwai", "Mai sayar da abinci"], answer: 1, why: "Likitan dabbobi ne ke yanke shawara, kuma ku rubuta ranar ƙarewar lokacin jira daga label." },
      { objective: "O5", q: "Ta yaya ya kamata ku tsaftace ƙwai mai ɗan datti?", options: ["Ku jiƙa shi a ruwa", "Ku goge shi da sabulu", "Ku goge shi da busasshen kyalle", "Ku bar shi a gida-gidan kwanciya"], answer: 2, why: "Goge da busasshen kyalle yana hana jawo ƙwayoyin cuta ta ɓawon." },
      { objective: "O5", q: "Wanne ne ke cikin bayanan garke na kowace rana?", options: ["Kaji, mace-mace, abinci, ruwa da ƙwai", "Ƙwan da aka sayar kawai", "Sayarwar maƙwabci", "Babu komai idan komai yana kama da lafiya"], answer: 0, why: "Lambobin kowace rana suna nuna matsaloli da wuri kuma suna cike takardar kuɗi." },
      { objective: "O5", q: "Kun fara da kajin nama 1,000, kuma 80 sun mutu. Mene ne yawan mace-mace?", options: ["Kashi 80 cikin ɗari", "Kashi 0.8 cikin ɗari", "Kashi 12.5 cikin ɗari", "Kashi 8 cikin ɗari"], answer: 3, why: "80 / 1,000 x 100 = kashi 8 cikin ɗari." },
      { objective: "O6", q: "Mene ne farashin daidaito na kowace kaza?", options: ["Farashi mafi tsada a kasuwa", "Jimlar kuɗi raba kajin da aka sayar", "Farashin ɗan tsako ɗaya", "Kuɗin abinci kawai"], answer: 1, why: "A wannan farashin, kuɗin shiga yana biyan dukkan kuɗin da aka kashe daidai." },
      { objective: "O6", q: "Rukuni ya ci XOF 1,500,000 kuma kun sayar da kaji 500 a XOF 4,000. Mene ne ribar?", options: ["XOF 2,000,000", "XOF 1,500,000", "XOF 500,000", "XOF 4,000"], answer: 2, why: "500 x 4,000 = kuɗin shiga 2,000,000; ban da kuɗi 1,500,000 = riba XOF 500,000." },
      { objective: "O6", q: "Kaji masu ƙwai 300 suna kwanciya a kashi 80 cikin ɗari na mako ɗaya. Kusan tire nawa na ƙwai 30?", options: ["56", "80", "240", "1,680"], answer: 0, why: "300 x 0.8 x 7 = ƙwai 1,680; 1,680 / 30 = tire 56." },
      { objective: "O6", q: "Kuɗin kowace kaza da aka sayar KES 404 ne, kuma masu saye suna biyan KES 380. Me ke faruwa?", options: ["Kuna samun ribar KES 24 kowace kaza", "Kuna daidaita kuɗi", "Babu komai; farashi ba su da muhimmanci", "Kuna asarar kusan KES 24 kowace kaza"], answer: 3, why: "Sayarwa ƙasa da farashin daidaito yana kawo asara a kowace kaza." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi.",
    criteria: [
      { name: "Irin kaji da kasuwa", objective: "O1", notYet: "Babu dalilin zaɓe, ko ba a ambaci mai saye ba.", meets: "Ya ambaci irin kaji, wurin ƙyanƙyasa amintacce da aƙalla dalilai uku da suka dace da kasuwa, kuɗi da lokaci.", exceeds: "Ya ambaci takamaiman mai saye da lokacin da yake saye, kuma ya tsara rukunin don ya dace." },
      { name: "Gida, fili da raino", objective: "O2", notYet: "Ba a lissafa yawan kaji daga fadin ƙasa ba, ko babu tsarin raino.", meets: "Fadin ƙasa x kaji a kowane murabba'in mita daga jagora; wurin raino da ake duba zafinsa ta halayen 'yan tsaki.", exceeds: "Ya kuma haɗa tsaftacewa, kashe ƙwayoyin cuta da hutar da gida, da iska mai aminci don abin ɗumamawa." },
      { name: "Tsarin abinci da ruwa", objective: "O3", notYet: "Matakai ko irin abinci sun ɓace, ko babu tsarin ruwa.", meets: "Irin abinci na kowane mataki, ranakun canji, isassun kwanonin abinci da na ruwa, da ruwa mai tsabta a koyaushe.", exceeds: "Ya yi kiyasin buhunan abinci na kowane mataki da wanda ke duba ruwa kowace rana." },
      { name: "Rigakafi da kare gona", objective: "O4", notYet: "Babu likitan dabbobi a ciki, ko an ƙirƙiri yawan magani, ko babu dokokin kare gona.", meets: "Likitan dabbobi mai rajista ne ya tsara shirin, kuma an rubuta shi; duka-ciki, duka-waje da aƙalla dokoki huɗu na kare gona; sanar da murar tsuntsaye.", exceeds: "Ya haɗa sunan likitan dabbobi da lambar wayarsa da bayanan rigakafin wurin ƙyanƙyasa." },
      { name: "Bayanai", objective: "O5", notYet: "Babu tsarin bayanan kowace rana.", meets: "Bayanan kowace rana na kaji, mace-mace, abinci, ruwa da ƙwai, tare da alluran rigakafi, magunguna da sayarwa.", exceeds: "Ya nuna yadda za a duba mace-mace da yawan kwanciya kowane mako." },
      { name: "Takardar kuɗi da farashin daidaito", objective: "O6", notYet: "Wasu kuɗaɗe sun ɓace, an yi watsi da mace-mace, ko lissafi ba daidai ba.", meets: "An jera kowane kuɗi, an la'akari da mace-mace, kuɗin kowace kaza ko tire da farashin daidaito daidai ne.", exceeds: "Ya kwatanta farashin daidaito da ainihin farashin masu saye kuma ya nuna riba a matakan mace-mace biyu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gudanar da rukuninsu na gaba da rubutaccen tsari da bayanan kowace rana (binciken biyo baya na kwanaki 30)",
      "Mace-mace a kowane rukuni da masu koyo suka faɗa kafin da bayan kwas ɗin",
      "Masu koyo da suka san kuma za su iya faɗin kuɗin kowace kaza ko kowane tire lokacin da suke sayarwa",
      "Waɗanda ake zaton murar tsuntsaye ko cutar Newcastle ne da masu koyo suka sanar wa likitan dabbobi cikin kwana ɗaya"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, alƙalami da na'urar lissafi ta waya; teburin lissafi a waya ba dole ba ne",
      "Tef ɗin awo don gidan kaji",
      "Farashin yanki na 'yan tsaki, abinci, alluran rigakafi da sauran kuɗaɗe, da suna da lambar wayar likitan dabbobi da wurin ƙyanƙyasa amintacce",
      "Kusan minti 70 zuwa 80 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin zaman, ku tattara farashin yanki na 'yan tsaki, abinci da alluran rigakafi don masu koyo su lissafa kuɗin rukuni da lambobi na gaske.",
      "Ku gayyaci likitan dabbobi ko jami'in lafiyar dabbobi na yanki zuwa zaman Babi na 2 don ya bayyana tsarin rigakafi na yankinku; kada ku taɓa ba da yawan allurar rigakafi ko magani da kanku.",
      "Idan kun ziyarci gonar kaji, ku bi dokokinta na kare gona daga cututtuka kuma kada ku ziyarci wata gonar kaji a rana ɗaya.",
      "Ku yi misalin farashin daidaito a kan allo, sannan ku sa masu koyo bibbiyu su lissafa kuɗin rukuninsu.",
      "Ku ba da maki ga kowane tsarin rukuni mai lissafin kuɗi da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
