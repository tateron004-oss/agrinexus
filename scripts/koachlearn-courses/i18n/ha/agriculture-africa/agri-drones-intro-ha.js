"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-intro.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KCAA_UAS = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Kenya (KCAA): Jiragen sama marasa matuƙi (UAS)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Tsarin intanet na KCAA don drone (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Najeriya (NCAA): Nig.CARs 2023 Sashe na 21, Jiragen sama da ake tukawa daga nesa (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO da ITU: E-agriculture in Action: Drones for Agriculture (Drone don noma, 2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO da WHO: Jagora kan feshin magungunan ƙwari daga sama (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro-ha",
  lang: "ha",
  translationOf: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Drone don Sa Ido a Gona 1: Gabatarwa, Dokoki da Tsaro",
  skills: "Bayanin aikin drone a gona, Zaɓar nau'in drone don wani aiki, Nemo dokokin hukumar sufurin jiragen sama, Duba haɗarin wurin tashi, Yin bayanin tsaro kafin tashi",
  outcome: "yanke shawara ko drone ce kayan aikin da ya dace da matsalar gona, ambaci hukumar sufurin jiragen sama da takardun da kuke buƙata kafin tashi, da rubuta sauƙaƙan tsarin amfani da drone tare da jerin abubuwan tsaro don gona ɗaya.",
  about: [
    "Wannan kwas na manoma ne, jami'an faɗakarwa (extension officers), masu sana'ar noma da matasa a Kenya, Najeriya da ko'ina a Afirka, waɗanda ke son fara amfani da drone don sa ido kan amfanin gona, dabbobi da ƙasa. Ba sai kuna da drone yanzu ba.",
    "A Babi na 1 za ku koyi abin da drone za ta iya yi da wanda ba za ta iya yi ba a gona, manyan nau'o'in drone, da yadda za ku gane lokacin da drone ta cancanci kuɗinta idan aka kwatanta da tafiya cikin gona ko amfani da hotunan tauraron ɗan adam (satellite) kyauta. A Babi na 2 za ku koyi wanda ke yin dokokin drone a ƙasarku, takardun da aka saba buƙata, da yadda za ku duba wurin tashi ku yi wa ƙungiyarku bayani don kada kowa ya ji rauni.",
    "Dokokin drone doka ne, kuma suna canjawa. Wannan kwas ba zai taɓa ce muku kuna iya tashi ba: yana nuna muku yadda za ku nemo dokokin hukuma na ƙasarku ku bi su. Shi ne Kwas na 1 a cikin jerin kwasa-kwasai shida; kwasa-kwasan da ke biye suna koyar da tuƙi, ɗaukar hotuna, lafiyar amfanin gona, noman zamani mai daidaito (precision farming) da gudanar da shirye-shiryen drone.",
    "Kowane darasi yana ɗaukar kusan minti biyar: ku karanta, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin amfani da drone mai shafi ɗaya don gona ɗaya ta gaske ko ta misali (misali eka 3 na masara da wake a Nakuru, ko hekta 5 na rogo a Jihar Oyo): matsalar da drone za ta taimaka da ita, nau'in drone da dalili, hukumar sufurin jiragen sama da takardun da dole ku duba ko ku samu, haɗarin wurin da kuka gano, da jerin abubuwan tsaro kafin tashi na aƙalla abubuwa takwas.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma, jami'an faɗakarwa, masu sana'ar noma da matasa a Kenya, Najeriya da ko'ina a Afirka, waɗanda ke son fara amfani da drone don sa ido kan amfanin gona, dabbobi da ƙasa. Yawancinsu ba su da drone tukuna.",
    startingPoint: "Yawancinsu sun ga drone a bidiyo ko a wurin nuni, kuma suna tafiya cikin gonakinsu don duba amfanin gona. Kaɗan ne suka san wace drone da wace kyamara suka dace da wane aikin gona, lokacin da drone ta cancanci kuɗinta, wanda ke yin dokokin drone a ƙasarsu, ko yadda ake duba wuri da yi wa ƙungiya bayani kafin tashi.",
    gap: "Mutane suna sayen drone da ba ta dace da aikin ba, suna tashi ba tare da rajista da lasisin da doka ke buƙata ba, ko suna jefa mutane da jiragen sama cikin haɗari. Sanin abin da drone za ta iya yi da wanda ba za ta iya ba, dokoki, da tsaron wuri na asali, yana bar masu koyo su yanke shawara cikin hikima kuma su fara jerin kwasa-kwasan drone a kan hanya mai aminci da halal.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar drone",
      "Na'urori: waya mai intanet don nemo shafin drone na hukumar sufurin jiragen sama; ba a buƙatar drone",
      "Dokoki doka ne kuma suna canjawa: kwas ba ya cewa mai koyo yana iya tashi; masu koyo suna duba dokokin hukuma na ƙasarsu",
      "Lokaci: darussa na kusan minti 5 da suka dace da aikin gona",
      "Tsaro da sirri: babu tashin drone a cikin kwas; kada a ɗauki bidiyon mutane ko gidaje"
    ],
    prerequisites: "Babu. Wannan shi ne Kwas na 1 a cikin jerin kwasa-kwasan drone guda shida."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin matsalolin gona", action: "gane waɗanda drone za ta iya taimakawa da su da waɗanda ba za ta iya ba", standard: "kuna ambaton aƙalla ayyuka huɗu da za ta iya taimakawa da su, da biyu da ba za ta iya yi ba" },
    { id: "O2", condition: "Idan aka ba ku aikin gona da girman gonar", action: "zaɓar nau'in drone da kyamara da suka dace da aikin", standard: "tare da dalilin kowane zaɓi" },
    { id: "O3", condition: "Don wata matsalar gona", action: "kwatanta drone, hotunan tauraron ɗan adam kyauta da tafiya cikin gona, ku zaɓi kayan aiki mafi kyau", standard: "kuna lissafa dukkan kuɗaɗe da shawarar da hotunan za su canja" },
    { id: "O4", condition: "Don ƙasarku", action: "nemo hukumar sufurin jiragen sama da lissafa takardun drone da za ta iya buƙata", standard: "ta amfani da shafin intanet ko ofishin hukumar kaɗai" },
    { id: "O5", condition: "Kafin kowane tashi a gona", action: "zagaya wurin da alamta haɗurra da wuraren da aka hana tashi", standard: "kuma ku sanar da manomin da maƙwabta lokacin da za ku tashi" },
    { id: "O6", condition: "Kafin tashi da lokacin tashi", action: "yin bayani kafin tashi da jerin abubuwan tsaro, da faɗin matakan farko a lokacin gaggawa", standard: "tare da aƙalla abubuwa takwas a jerin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Drone a gona",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da drone za ta iya yi wa gona",
          minutes: 5,
          goal: "Ambaci ayyukan gona huɗu da drone za ta iya taimakawa da su, da biyu da ba za ta iya yi ba.",
          text: [
            "Drone ƙaramin jirgin sama ne da babu matuƙi a cikinsa. Mutum yana tuƙa shi daga ƙasa da na'urar sarrafawa (remote controller) ko waya, ko kuma ya saita shi ya bi hanyar da aka tsara da kansa. Hukumomin sufurin jiragen sama suna kiransa unmanned aircraft system (UAS) ko remotely piloted aircraft system (RPAS).",
            "A gona, yawancin drone suna ɗauke da kyamara. Daga sama, kuna iya ganin dukan gonar a lokaci ɗaya: wuraren da iri bai fito ba, wuraren da suka yi rawaya ko suke yanƙwanewa, kusurwoyin da ruwa ya taru, zaizayar ƙasa, shingen da ya karye, da dabbobin da suka bar wurinsu. FAO da ITU sun lissafa sa ido kan amfanin gona, gargaɗi da wuri, sa ido kan ƙwari, bin diddigin dabbobi da sa ido kan dazuzzuka a cikin manyan amfanin drone a gona.",
            "Wasu manyan drone suna feshi ko suna watsa iri da taki. Feshin magungunan ƙwari da drone aiki ne na musamman mai haɗari sosai, wanda ke buƙatar izini na musamman daga hukumar sufurin jiragen sama da kuma hukumar kula da magungunan ƙwari, don haka wannan kwas yana magana ne kan sa ido kaɗai.",
            "Drone ba za ta iya faɗa muku DALILIN da yasa wani wuri ya yi rawaya ba. Tana nuna muku INDA za ku duba. Har yanzu dole ku tafi wurin, ku duba ganyaye, ƙasa da ƙwari, sannan ku yanke abin da za ku yi. Haka kuma ba za ta iya tashi cikin ruwan sama mai ƙarfi ko iska mai ƙarfi ba, kuma batirinta yawanci ba ya kai awa ɗaya."
          ],
          words: [["Drone", "ƙaramin jirgin sama da ake tuƙawa ba tare da matuƙi a cikinsa ba."], ["UAS / RPAS", "sunayen hukuma: unmanned aircraft system (tsarin jirgi mara matuƙi), remotely piloted aircraft system (tsarin jirgin da ake tuƙawa daga nesa). Jirgin tare da na'urar sarrafawa da haɗin da ke tsakaninsu."], ["Leƙen gona (scouting)", "tafiya cikin gona don neman matsaloli kamar ƙwari, cuta ko ciyawa."]],
          slides: [
            { title: "Drone ita ce", bullets: ["Ƙaramin jirgin sama babu matuƙi a cikinsa", "Ana tuƙa ta daga ƙasa, ko ta bi hanyar da aka tsara", "Sunanta na hukuma UAS ko RPAS"] },
            { title: "Abin da take taimakawa da shi", bullets: ["Ganin dukan gona a lokaci ɗaya", "Nemo wuraren da iri bai fito ba, ko masu rawaya ko yanƙwanewa", "Gane taruwar ruwa, zaizayar ƙasa, shingen da ya karye", "Ƙirga da nemo dabbobi"] },
            { title: "Abin da ba za ta iya yi ba", bullets: ["Faɗa muku DALILIN da yasa wuri ya yi rashin lafiya: har yanzu ku tafi can", "Tashi cikin ruwan sama mai ƙarfi ko iska mai ƙarfi", "Daɗewa a sama na awoyi da baturi ɗaya"] },
            { title: "Feshi daban yake", bullets: ["Drone mai feshi tana buƙatar ƙarin izini", "Hukumar sufurin jiragen sama DA hukumar magungunan ƙwari", "Wannan kwas yana magana kan sa ido kaɗai"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Ku yi tunanin wata gona da kuka sani. Ku rubuta matsaloli uku a wannan gonar da za ku iya GANI daga sama, da matsala ɗaya da drone ba za ta iya taimakawa da ita ba (misali, ƙarancin farashi a kasuwa).",
          youCanNow: "bayanin abin da drone ke yi a gona, ambaci ayyukan da take taimakawa da su, da faɗin dalilin da yasa har yanzu kuke tafiya cikin gona.",
          quickCheck: [
            { objective: "O1", q: "Me drone mai kyamara za ta iya nuna wa manomi?", options: ["Dalilin da yasa shuka ke rashin lafiya", "Ainihin sunan cutar", "Inda wuraren da iri bai fito ba, masu rawaya ko kusurwoyin da ruwa ya taru suke", "Nawa za a sayar da girbin"], answer: 2, why: "Drone tana nuna inda za a duba; har yanzu ku tafi wurin don gano dalili." },
            { objective: "O1", q: "Wani manomi yana son tashin drone mai kyamara a lokacin ruwan sama mai ƙarfi don duba ambaliya. Me za ku faɗa masa?", options: ["Ya tashi sama sosai cikin ruwan", "Ya jira; drone ba za ta iya tashi cikin ruwan sama mai ƙarfi ba, don haka ya duba bayan ya tsaya", "Ya tashi har sai baturi ya ƙare", "Ya yi feshin gonar a lokaci ɗaya"], answer: 1, why: "Drone ba za ta iya tashi cikin ruwan sama mai ƙarfi ko iska mai ƙarfi ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zaɓar nau'in drone da ya dace",
          minutes: 5,
          goal: "Haɗa nau'in drone da kyamara da aikin gona.",
          text: [
            "Akwai manyan nau'o'in drone uku a gona. Multirotor tana da farfela huɗu ko fiye, kamar ƙaramin jirgi mai saukar ungulu (helicopter). Tana tashi daga ƙaramin wuri, tana iya tsayawa a sama, kuma koyon tuƙinta yana da sauƙi, amma tana rufe ƙaramin fili da kowane baturi. Ta dace da ƙananan gonaki, gidajen shuka (greenhouse) da duba wuri ɗaya.",
            "Drone mai fiffike kafaffe (fixed-wing) tana kama da ƙaramin jirgin sama. Tana shawagi, don haka tana rufe manyan wurare kamar gonar shayi ta hekta 200 ko wurin kiwo, amma tana buƙatar fili don tashi da sauka kuma tuƙinta ya fi wuya. Drone mai haɗaka (hybrid, VTOL) tana tashi sama kai tsaye kamar multirotor, sannan ta tafi kamar jirgin sama.",
            "Kyamara tana da muhimmanci kamar drone ɗin kanta. Kyamarar launi ta yau da kullum (RGB) ta isa don ganin wuraren da iri bai fito ba, ciyawa, taruwar ruwa da dabbobi. Kyamarar multispectral tana auna hasken da ido ba ya gani, kuma tana taimakawa wajen nuna damuwar shuka da wuri. Kyamarar zafi (thermal) tana nuna zafi: tana da amfani don ƙishirwar shuka, zubar ruwan ban ruwa da nemo dabbobi.",
            "Ku fara da ƙarami. Yawancin jami'an faɗakarwa da matasa masu ba da sabis suna farawa da ƙaramar multirotor mai kyamarar RGB, su koya sosai, sannan su ƙara wasu na'urori daga baya."
          ],
          steps: ["Ku rubuta aikin: me kuke buƙatar gani, kuma yaya girman wurin yake?", "Ƙaramin wuri ko kuna buƙatar tsayawa a sama: multirotor. Babban wuri: fixed-wing ko hybrid.", "Ku zaɓi kyamara: RGB don yawancin ayyuka, multispectral don damuwar shuka da wuri, thermal don zafi da ruwa.", "Ku tabbatar cewa an yarda da drone ɗin kuma ana iya yi mata rajista a ƙasarku kafin ku saya."],
          words: [["Multirotor", "drone mai farfela huɗu ko fiye da ke iya tsayawa a sama."], ["Fixed-wing (fiffike kafaffe)", "drone mai siffar ƙaramin jirgin sama da ke shawagi kuma tana rufe manyan wurare."], ["Kyamarar RGB", "kyamarar launi ta yau da kullum (ja, kore, shuɗi)."], ["Kyamarar multispectral", "kyamarar da ke kuma auna hasken da ido ba ya gani, kamar near-infrared."]],
          slides: [
            { title: "Nau'o'in drone uku a gona", bullets: ["Multirotor: tana tsayawa a sama, ƙaramin wuri, ƙananan gonaki", "Fixed-wing: tana shawagi, manyan wurare, tana buƙatar filin tashi", "Hybrid (VTOL): tana tashi sama kai tsaye, tana tafiya kamar jirgin sama"] },
            { title: "Nau'o'in kyamara uku", bullets: ["RGB: launi na yau da kullum, ta isa ga yawancin ayyuka", "Multispectral: tana nuna damuwar shuka da wuri", "Thermal: tana nuna zafi, ƙishirwar shuka, dabbobi"] },
            { title: "Haɗa drone da aiki", bullets: ["Gonar masara ta eka 2: ƙaramar multirotor, RGB", "Gonar shayi ta hekta 200: fixed-wing ko hybrid", "Wurin kiwo da asuba: kyamarar thermal don nemo shanu"] },
            { title: "Ku fara da ƙarami", bullets: ["Ku koya da ƙaramar multirotor mai RGB", "Ku ƙara na'urori idan kuna buƙatarsu", "Ku duba dokokin rajista kafin ku saya"] }
          ],
          tryIt: "Don kowane ɗaya daga cikin waɗannan ayyuka, ku zaɓi nau'in drone da kyamara ku rubuta dalili ɗaya: (a) duba fitowar iri a eka 2 na wake, (b) zana taswirar hekta 150 na rake, (c) nemo saniyar da ta ɓace a daji da asuba.",
          youCanNow: "zaɓar nau'in drone da kyamara da suka dace da aikin gona da girman wurin.",
          quickCheck: [
            { objective: "O2", q: "Mece ce drone multirotor?", options: ["Drone mai farfela huɗu ko fiye da ke iya tsayawa a sama", "Drone mai siffar jirgin sama", "Tauraron ɗan adam (satellite)", "Drone da ke feshi kaɗai"], answer: 0, why: "Multirotor tana da farfela huɗu ko fiye, tana tashi daga ƙaramin wuri kuma tana iya tsayawa a sama." },
            { objective: "O2", q: "Kuna son nemo zubar ruwan ban ruwa a gonar kayan lambu. Wace kyamara za ku zaɓa?", options: ["Kyamarar waya ta yau da kullum a kan sanda", "Babu kyamara", "Kyamarar RGB kaɗai da dare", "Kyamarar thermal"], answer: 3, why: "Kyamarar thermal tana nuna zafi, wanda ke da amfani don ƙishirwar shuka da zubar ruwan ban ruwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Drone ta cancanci kuɗinta? Drone, satellite ko tafiya",
          minutes: 5,
          goal: "Yanke shawara ko drone, hotunan satellite kyauta ko tafiya cikin gona ne kayan aiki mafi kyau don matsalar gona.",
          text: [
            "Drone ba koyaushe ce kayan aiki mafi kyau ba. Don lambun gida na kwata eka, tafiya tsakanin layukan shuka ya fi sauri kuma kyauta ne. Don dukan wata gunduma, hotunan tauraron ɗan adam kyauta (misali daga tauraron ɗan adam Sentinel-2 na Turai, da ake iya kallo a kayan aikin intanet kyauta) suna nuna yanayi gaba ɗaya bayan 'yan kwanaki, amma kowane pixel kusan mita 10 ne, wanda ya yi girma sosai don ganin shuka ɗaya.",
            "Drone tana tsakiya. Tana gani har zuwa 'yan santimita, a ranar da kuka zaɓa, har ma a ƙarƙashin siririn gajimare. Wannan yana sa ta yi kyau ga matsakaita da manyan gonaki, ga ƙungiyoyin haɗin gwiwa (cooperatives) da ke raba drone ɗaya tsakanin gonakin membobi da yawa, da kuma amfanin gona masu tsada kamar shayi, kofi, avocado da kayan lambu.",
            "Ku lissafa dukan kuɗaɗe, ba farashin drone kaɗai ba: kuɗin rajista da lasisi, horo, ƙarin baturi da farfela, waya ko tablet, data, tafiye-tafiye da lokacinku. Sannan ku tambaya: wace shawara hotunan za su canja, kuma shin wannan shawarar ta fi kuɗin daraja?"
          ],
          steps: ["Ku rubuta shawarar da kuke son yankewa (misali: inda za a sake shuka, ko wane ɓangare za a yi wa magani).", "Ku tambaya yaya girman wurin yake da yaya ƙanƙantar abin da kuke buƙatar gani yake.", "Ku kwatanta tafiya, satellite da drone don wannan girma da dalla-dalla.", "Ku lissafa kowane kuɗin zaɓin drone ku kwatanta shi da darajar shawara mafi kyau."],
          words: [["Hoton tauraron ɗan adam (satellite image)", "hoton duniya da aka ɗauka daga sararin samaniya; na kyauta suna nuna manyan wurare amma da ƙarancin dalla-dalla."], ["Resolution (tsabtar hoto)", "yaya ƙanƙantar abin da hoto zai iya nunawa; hotunan drone suna iya nuna 'yan santimita, hotunan satellite kyauta kusan mita 10."]],
          slides: [
            { title: "Hanyoyi uku na sa ido kan gona", bullets: ["Tafiya: kyauta, mafi kyau ga ƙananan gonaki, a hankali ga manya", "Satellite: kyauta, manyan wurare, dalla-dalla kusan mita 10", "Drone: dalla-dalla na santimita, a ranar da kuka zaɓa"] },
            { title: "Inda drone ke biyan kuɗinta", bullets: ["Matsakaita da manyan gonaki", "Ƙungiyoyin haɗin gwiwa da ke raba drone ɗaya", "Amfanin gona masu tsada: shayi, kofi, avocado, kayan lambu"] },
            { title: "Ku lissafa kowane kuɗi", bullets: ["Rajista, lasisi da horo", "Baturi, farfela, waya ko tablet, data", "Tafiye-tafiye da lokacinku"] },
            { title: "Babbar tambaya", bullets: ["Wace shawara hotunan za su canja?", "Shin wannan shawarar ta fi kuɗin daraja?"] }
          ],
          tryIt: "Ku zaɓi matsalar gona ɗaya daga Darasi na 1. Ku rubuta wane kayan aiki za ku yi amfani da shi (tafiya, satellite ko drone), dalili, kuma ku lissafa aƙalla kuɗaɗe biyar idan kun zaɓi drone.",
          youCanNow: "yanke shawara ko drone ta cancanci kuɗinta don matsalar gona ta hanyar kwatanta ta da tafiya da hotunan satellite.",
          quickCheck: [
            { objective: "O3", q: "Me yasa hotunan satellite kyauta ba su da isasshen dalla-dalla don ganin shuka ɗaya?", options: ["Baƙi da fari ne kaɗai", "Ana ɗaukarsu sau ɗaya a shekara", "Suna da tsada sosai", "Kowane pixel kusan mita 10 ne"], answer: 3, why: "Pixel na Sentinel-2 kusan mita 10 ne, don haka suna nuna yanayi gaba ɗaya, ba shuka ɗaya ba." },
            { objective: "O3", q: "Wata manomiya mai lambun kayan lambu na kwata eka tana tambaya ko ta sayi drone. Me za ku ba da shawara?", options: ["Ta yi tafiya tsakanin layuka; ya fi sauri kuma kyauta ne ga ƙaramar gona haka", "Ta sayi babbar drone fixed-wing", "Ta yi amfani da kyamarar thermal kowace rana", "Ta yi hayar drone mai feshi"], answer: 0, why: "Don ƙaramar gona sosai, tafiya tsakanin layuka ya fi sauri kuma ba ya da kuɗi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Drone a gona",
        questions: [
          { objective: "O1", q: "Taswirar drone tana nuna wani wuri mai rawaya a gonar masara. Me ya kamata ku yi a gaba?", options: ["Ku yi feshin dukan gonar nan take", "Ku tafi wurin ku duba shuke-shuke, ƙasa da ƙwari", "Ku ƙyale shi; taswirorin drone koyaushe ba daidai ba ne", "Ku sake tashi har sai wurin ya ɓace"], answer: 1, why: "Drone tana nuna INDA za a duba; kuna gano DALILI a ƙasa." },
          { objective: "O2", q: "Wace drone ce ta fi dacewa don zana taswirar gonar shayi ta hekta 200?", options: ["Drone ta wasan yara", "Ƙaramar drone ta cikin gida", "Drone fixed-wing ko hybrid", "Babu drone da za ta iya yin wannan"], answer: 2, why: "Drone fixed-wing da hybrid suna shawagi kuma suna rufe manyan wurare da kowane baturi." },
          { objective: "O2", q: "Wace kyamara ce ta fi taimakawa wajen nemo shanu a daji da asuba?", options: ["Kyamarar thermal", "Kyamarar waya ta yau da kullum kaɗai", "Kyamara marar ruwan tabarau (lens)", "Bututun feshi"], answer: 0, why: "Kyamarar thermal tana nuna zafin dabbobi idan haske ya yi ƙasa." },
          { objective: "O4", q: "Feshin maganin ƙwari da drone:", options: ["Ba ya buƙatar ƙarin takardu", "Daidai yake da ɗaukar hotuna", "Yana buƙatar izini na musamman daga hukumar sufurin jiragen sama da hukumar magungunan ƙwari", "An yarda da shi ko'ina idan gonar taku ce"], answer: 2, why: "Feshi aiki ne na musamman mai haɗari sosai da ke da ƙarin izini." },
          { objective: "O3", q: "Don lambun gida na kwata eka, kayan aiki mafi kyau yawanci shi ne:", options: ["Drone fixed-wing", "Drone multispectral", "Hotunan satellite", "Tafiya tsakanin layukan shuka"], answer: 3, why: "A ƙaramar gona sosai, tafiya ya fi sauri, ya fi arha kuma yana nuna ƙari." }
        ]
      }
    },
    {
      name: "Babi na 2: Dokoki da tsaro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Wane ne ke yin dokokin drone a ƙasarku",
          minutes: 6,
          goal: "Nemo hukumar sufurin jiragen sama ta ƙasarku ku lissafa takardun drone da za ta iya buƙata.",
          text: [
            "Kowace ƙasa tana sarrafa sararin samaniyarta. A kowace ƙasa, hukumar kula da sufurin jiragen sama (civil aviation authority) ce ke yin dokokin drone kuma tana tilasta bin su. A Kenya ita ce Kenya Civil Aviation Authority (KCAA), ƙarƙashin Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020. A Najeriya ita ce Nigeria Civil Aviation Authority (NCAA), ƙarƙashin Sashe na 21 (Part 21) na Nigeria Civil Aviation Regulations 2023. Sauran ƙasashe, kamar Ghana, Rwanda, Uganda, Tanzania da Afirka ta Kudu, suna da nasu hukuma da nasu dokoki.",
            "Takardun yawanci sun haɗa da: rajistar drone; izinin shigo da ita ƙasa; lasisin matuƙi daga nesa (remote pilot licence) ga mutumin da ke tuƙawa (musamman don aikin kasuwanci ko mai haɗari sosai); takardar shaidar mai gudanarwa (operator certificate) ga kamfanin da ke tuƙawa don a biya shi (KCAA tana kiranta Remote Air Operator Certificate, NCAA kuma RPAS Operator Certificate); da izini don wasu nau'o'in tashi. KCAA da NCAA duka suna da tsarin drone na intanet.",
            "Kada ku dogara ga aboki, mai sayarwa ko kafofin sada zumunta (social media) don dokokin. Ku karanta shafin drone na hukumar da kanta, ko ku kira ko ku aika imel ga hukumar. Kuɗaɗe da matakai suna canjawa, don haka ku duba su a ranar da kuke neman izini.",
            "Kada ku taɓa tashi kafin ku sami rajista, lasisi da izinin da ƙasarku ke buƙata don wannan tashin. Tashi ba tare da su ba na iya jawo tara, ƙwace drone ko abin da ya fi haka muni, kuma yana jefa mutane da jiragen sama cikin haɗari."
          ],
          steps: ["Ku nemi hukumar sufurin jiragen sama ta ƙasarku ku buɗe shafinta na intanet na hukuma.", "Ku nemo shafin drone, UAS ko RPAS.", "Ku rubuta: rajista, izinin shigo da ita, lasisin matuƙi, takardar shaidar mai gudanarwa, da izinin tashi: waɗanne ne suka shafe ku?", "Ku rubuta kuɗaɗen da tsarin intanet, da ranar da kuka duba.", "Idan wani abu bai bayyana ba, ku tuntuɓi hukumar kai tsaye."],
          words: [["Hukumar sufurin jiragen sama (civil aviation authority)", "ofishin gwamnati da ke yin dokoki kuma yana tilasta bin su ga duk abin da ke tashi sama a ƙasa."], ["Rajista", "yi wa drone ɗinku rijista a hukuma don ta sami lamba ta hukuma."], ["Lasisin matuƙi daga nesa (RPL)", "lasisin hukuma ga mutumin da ke tuƙa drone."], ["Takardar shaidar mai gudanarwa (operator certificate)", "izinin da kamfani ke buƙata don tuƙa drone don a biya shi."]],
          slides: [
            { title: "Kowace ƙasa tana da hukuma", bullets: ["Kenya: KCAA, UAS Regulations 2020", "Najeriya: NCAA, Nig.CARs 2023 Part 21", "Sauran ƙasashe: nasu hukuma da nasu dokoki"] },
            { title: "Takardun da kuke iya buƙata", bullets: ["Rajistar drone da izinin shigo da ita", "Lasisin matuƙi daga nesa ga mai tuƙawa", "Takardar shaidar mai gudanarwa don tuƙawa a biya ku", "Izini don wasu nau'o'in tashi"] },
            { title: "Ku samo dokoki daga tushe", bullets: ["Ku karanta shafin drone na hukumar da kanta", "Ku kira ko ku aika imel ga hukumar", "Ku duba kuɗaɗe da matakai a ranar da kuke nema"] },
            { title: "Dokar zinariya", bullets: ["Babu rajista, lasisi ko izini: babu tashi", "Tara, ƙwace drone, haɗari ga mutane da jiragen sama"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Ku buɗe shafin intanet na hukumar sufurin jiragen sama ta ƙasarku (KCAA, NCAA ko ta ƙasarku). Ku nemo shafin drone ku rubuta jerin takardun da take buƙata, adireshin tsarin intanet, da ranar yau.",
          youCanNow: "ambaci hukumar sufurin jiragen sama ta ƙasarku, nemo dokokinta na drone, da lissafa takardun da dole ku samu kafin tashi.",
          quickCheck: [
            { objective: "O4", q: "Lasisin matuƙi daga nesa na wa ne?", options: ["Na drone ɗin kanta", "Na mutumin da ke tuƙa drone", "Na mai gonar", "Na shagon drone"], answer: 1, why: "Lasisin matuƙi daga nesa na mutumin da ke tuƙawa ne, musamman don aikin kasuwanci ko mai haɗari sosai." },
            { objective: "O4", q: "Wani mai sayar da drone ya ce ba ku buƙatar takardu don tuƙawa ga manoman da ke biyan ku. Me za ku yi?", options: ["Ku amince da mai sayarwar", "Ku tambaya a kafofin sada zumunta", "Ku duba shafin drone na hukumar sufurin jiragen sama ko ku tuntuɓi hukumar", "Ku tashi ku nemi izini daga baya"], answer: 2, why: "Shafin hukumar ko ofishinta ne kaɗai ke ba da dokoki da takardu na yanzu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Duba wurin tashi don haɗurra",
          minutes: 5,
          goal: "Zagaya gona ku alamta haɗurra da wuraren da aka hana tashi kafin kowane tashi.",
          text: [
            "Kafin kowane tashi, ku duba wurin a ƙasa da kuma a taswira. Dokoki da yawa suna hana drone kusa da filayen jirgin sama da ƙananan filayen sauka (airstrips), wuraren soja, gidajen yari, taron jama'a da wuraren gwamnati. Misali, Sashe na 21 na Najeriya yana da dokokin nisa a kewayen filayen jirgin sama (aerodromes) da iyakoki kan tashi a kan wuraren da mutane da yawa suke zaune da kusa da mutanen da ba sa cikin aikin. Dokokin ƙasarku suna ba da ainihin nisan; ku duba su.",
            "A cikin gonar kanta, ku nemi wayoyin wutar lantarki, dogayen bishiyoyi, hasumiyoyin sadarwa, gine-gine, hanyoyi, gidaje, makarantu, kasuwanni da dabbobin da ke kiwo. Ku nemi fili mai tsabta da lebur don tashi da sauka, nesa da mutane da ƙura.",
            "Ku yi magana da mutane: manomin, maƙwabta da duk wanda ke aiki a kusa. Ku sanar da su lokacin da za ku tashi. Ku nemi izini kafin ku tashi a kan ƙasar maƙwabci ko gidansa. Ku mutunta sirri: kada ku ɗauki bidiyon mutane ko gidaje."
          ],
          steps: ["Ku buɗe manhajar taswira ku duba kewayen gonar: filayen sauka, hanyoyi, garuruwa, wurare masu muhimmanci.", "Ku duba dokokin hukumarku kan nisa daga filayen jirgin sama da mutane.", "Ku zagaya gonar ku alamta wayoyin wuta, bishiyoyi, hasumiyoyi, gine-gine da dabbobi.", "Ku zaɓi wuri mai tsabta don tashi da sauka.", "Ku sanar da manomin da maƙwabta lokacin da za ku tashi, kuma ku nemi izini kafin ku ratsa ƙasarsu."],
          words: [["Wurin da aka hana tashi (no-fly zone)", "wurin da ba a yarda da drone ba sai da izini na musamman, kamar kusa da filayen jirgin sama."], ["Haɗari", "duk abin da zai iya jawo cuta: wayoyin wuta, bishiyoyi, mutane, dabbobi."], ["Aerodrome (filin jirgin sama)", "duk wani filin jirgin sama, ƙaramin filin sauka ko wurin saukar jirgi mai saukar ungulu."]],
          slides: [
            { title: "Ku duba bayan gonar", bullets: ["Filayen jirgin sama, filayen sauka da wuraren saukar helicopter", "Wuraren soja, gidajen yari, taron jama'a", "Ku duba ainihin nisan dokokin ƙasarku"] },
            { title: "Ku duba cikin gonar", bullets: ["Wayoyin wuta, dogayen bishiyoyi, hasumiyoyi", "Gidaje, hanyoyi, makarantu, kasuwanni", "Dabbobin da ke kiwo"] },
            { title: "Ku zaɓi wuri mai aminci", bullets: ["Fili mai tsabta da lebur don tashi da sauka", "Nesa da mutane da ƙura"] },
            { title: "Ku yi magana da mutane", bullets: ["Ku sanar da manomin da maƙwabta lokacin da kuke tashi", "Ku nemi izini kafin ku ratsa ƙasarsu", "Kada ku ɗauki bidiyon mutane ko gidaje"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Ku zana sauƙaƙan taswirar gona ɗaya. Ku alamta wurin tashi, kowane haɗari da kuka samu, gidajen da ke kusa, hanyoyi da duk wani filin sauka cikin 'yan kilomita da za ku iya samu a manhajar taswira.",
          youCanNow: "duba wuri don haɗurra da wuraren da aka hana tashi, da zaɓar wurin tashi mai aminci.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne haɗarin da za ku nema a gona kafin tashi?", options: ["Fili mai tsabta da lebur", "Masara mai lafiya", "Hasumiyar sadarwa ko dogayen bishiyoyi", "Safiya mai bushewa da rana"], answer: 2, why: "Hasumiyoyi, bishiyoyi, wayoyin wuta da gine-gine haɗurra ne da za a alamta kafin tashi." },
            { objective: "O5", q: "Tashin da kuka tsara zai wuce saman gidan maƙwabci. Me za ku yi?", options: ["Ku fara neman izinin maƙwabcin, kuma kada ku ɗauki bidiyon mutane ko gidaje", "Ku tashi da sauri don kada su lura", "Ku ɗauki bidiyon gidan don rahoto", "Ku tashi da dare"], answer: 0, why: "Ku nemi izini kafin ku tashi a kan ƙasar maƙwabci ko gidansa, kuma ku mutunta sirri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bayani kafin tashi da abin da za a yi idan abu ya lalace",
          minutes: 5,
          goal: "Yi bayanin tsaro kafin tashi ku san matakan farko a lokacin gaggawa.",
          text: [
            "Ƙwararrun ƙungiyoyin drone suna fara kowane tashi da gajeren bayani. Kowa yana jin tsarin: inda drone za ta tashi, tsayin da za ta kai, tsawon lokaci, wane ne matuƙi, wane ne mai lura (observer) da ke kallon sararin sama da drone, da kuma inda wurin sauka yake.",
            "Ku duba yanayi: babu tashi cikin ruwan sama, tsawa, iska mai ƙarfi ko mai gusowa, guguwar ƙura ko ƙarancin haske, sai dai idan drone ɗinku da izininku sun yarda da haka. Ku duba drone: an caji baturi, farfela ba su lalace ba, kyamara tana da tsabta, na'urar sarrafawa ta haɗu.",
            "Ku yarda kan abin da za ku yi idan wani abu ya lalace: idan baturi ya yi ƙasa, ku sauka; idan mutum ko dabba ta shiga ƙarƙashin drone, ku matsa daga wurin ko ku sauka; idan jirgin sama mai matuƙi ko jirgi mai saukar ungulu ya bayyana, ku sauko ku sauka nan take. Idan drone ta ɓace ko ta faɗi, ku sa wurin ya zama lafiya, kuma ku kai rahoton manyan abubuwan da suka faru ga hukumarku kamar yadda dokokinta suka buƙata."
          ],
          steps: ["Ku yi wa ƙungiya bayani: wuri, tsayi, lokaci, matuƙi, mai lura, wurin sauka.", "Ku duba yanayi: ruwan sama, iska, ƙura, haske.", "Ku duba drone: baturi, farfela, kyamara, haɗin na'urar sarrafawa.", "Ku yarda kan tsarin gaggawa: baturi ya yi ƙasa, mutane a ƙasa, jirgin sama a kusa, drone ta ɓace.", "Bayan tashi, ku rubuta abin da ya faru a littafin rajistar tashi (log book)."],
          words: [["Mai lura (observer)", "ɗan ƙungiya da ke kallon drone da sararin sama kuma yana gargaɗin matuƙi."], ["Bayani (briefing)", "gajeriyar magana kafin tashi don kowa ya san tsarin."], ["Littafin rajistar tashi (log book)", "rubutun kowane tashi: rana, wuri, lokaci, matuƙi, matsaloli."]],
          slides: [
            { title: "Ku yi wa ƙungiya bayani", bullets: ["A ina, tsayi nawa, tsawon lokaci nawa", "Wane ne matuƙi, wane ne mai lura", "Inda za ku sauka"] },
            { title: "Ku duba yanayi da drone", bullets: ["Babu ruwan sama, tsawa, iska mai ƙarfi ko ƙura", "Baturi, farfela, kyamara, na'urar sarrafawa"] },
            { title: "Idan abu ya lalace", bullets: ["Baturi ya yi ƙasa: ku sauka", "Mutane ko dabbobi a ƙasa: ku matsa ko ku sauka", "Jirgin sama a kusa: ku sauko ku sauka nan take"] },
            { title: "Bayan tashi", bullets: ["Ku rubuta shi a littafin rajistar tashi", "Ku kai rahoton manyan abubuwa kamar yadda dokokinku suka buƙata"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin amfani da drone ɗinku mai shafi ɗaya don gona ɗaya: matsalar, nau'in drone da kyamara, hukumar da takardu, haɗurran daga taswirar da kuka zana, da jerin abubuwan tsaro kafin tashi na aƙalla abubuwa takwas tare da tsarin gaggawa.",
          youCanNow: "yi wa ƙungiya bayani kafin tashi, duba yanayi da drone, da bin sauƙaƙan tsarin gaggawa.",
          quickCheck: [
            { objective: "O6", q: "Me ke faruwa a bayani kafin tashi?", options: ["Matuƙi yana karɓar kuɗi daga abokin ciniki", "Ƙungiya tana rubuta rahoton ƙarshe", "Ana sayar da drone", "Kowa yana jin inda drone za ta tashi, tsayinta, tsawon lokaci, da wane ke yin me"], answer: 3, why: "Bayanin yana raba tsarin, ayyukan kowa da wurin sauka da kowa." },
            { objective: "O6", q: "Jirgi mai saukar ungulu (helicopter) ya bayyana yayin da drone ɗinku ke tashi. Me za ku yi?", options: ["Ku hau sama don ganinsa", "Ku sauko ku sauka nan take", "Ku ci gaba da ɗaukar bidiyo", "Ku nufi wajensa"], answer: 1, why: "Idan jirgin sama mai matuƙi ko helicopter ya bayyana, drone tana saukowa ta sauka nan take." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Dokoki da tsaro",
        questions: [
          { objective: "O4", q: "Wane ne ke yin dokokin drone kuma yana tilasta bin su a Kenya?", options: ["Kenya Civil Aviation Authority (KCAA)", "Ofishin noma na gunduma (county)", "Mai sayar da drone", "Basaraken yanki"], answer: 0, why: "KCAA ita ce hukumar sufurin jiragen sama ta Kenya kuma tana kula da drone." },
          { objective: "O4", q: "Wani aboki ya ce kuna iya tuƙa sabuwar drone a gonar abokin cinikinku ba tare da kowace takarda ba. Me za ku yi?", options: ["Ku tashi; abokinku ya taɓa yi", "Ku duba dokokin hukumar sufurin jiragen sama ku samu abin da ake buƙata kafin tashi", "Ku tashi da sassafe sosai don kada kowa ya gani", "Ku tashi a kan ƙasar abokin cinikin kaɗai"], answer: 1, why: "Dokokin hukuma ne kaɗai ke da daraja; babu takardu yana nufin babu tashi." },
          { objective: "O5", q: "Wanne ne haɗarin da za a alamta kafin tashi?", options: ["Sararin sama mai tsabta", "Wurin tashi mai bushewa da lebur", "Wayoyin wuta da suka ratsa gonar", "Baturi da aka caji"], answer: 2, why: "Wayoyin wuta na iya kama drone ko su lalata ta, kuma haɗari ne na gaske." },
          { objective: "O6", q: "Lokacin tashi, ƙaramin jirgin sama ya bayyana a kusa. Me ya kamata matuƙin ya yi?", options: ["Ya hau sama don ya fi gani", "Ya ci gaba da ɗaukar bidiyo", "Ya nufi wajensa", "Ya sauko ya sauka nan take"], answer: 3, why: "Jiragen sama masu matuƙi koyaushe suna da fifiko; ku sauko da drone ku bar musu hanya." },
          { objective: "O6", q: "Mene ne aikin mai lura (observer)?", options: ["Kallon drone da sararin sama da gargaɗin matuƙi", "Tuƙa drone", "Cajin baturi kaɗai", "Ɗaukar bidiyon maƙwabta"], answer: 0, why: "Mai lura yana sa ido don matuƙi ya mai da hankali kan tuƙi lafiya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Drone don Sa Ido a Gona 1: Gabatarwa, Dokoki da Tsaro",
    questions: [
      { objective: "O1", q: "Mece ce drone?", options: ["Ƙaramin jirgin sama da babu matuƙi a cikinsa", "Tarakta", "Tauraron ɗan adam na yanayi", "Manhajar waya"], answer: 0, why: "Ana tuƙa drone daga ƙasa ko ta bi hanyar da aka tsara, ba tare da kowa a cikinta ba." },
      { objective: "O1", q: "Wane aikin gona ne drone mai kyamara za ta iya taimakawa da shi?", options: ["Ƙara farashin kasuwa", "Nemo wuraren da iri bai fito ba", "Gyara famfon da ya lalace", "Sa hannu a kwangila"], answer: 1, why: "Daga sama kuna iya ganin wuraren da iri bai fito ba da sauri." },
      { objective: "O1", q: "Drone ta nuna wani wuri na rogo da ke yanƙwanewa. Drone ɗin tana faɗa muku:", options: ["Ainihin wace cuta ce", "Wane maganin ƙwari za ku saya", "Inda za ku je ku duba", "Babu wani abu mai amfani"], answer: 2, why: "Tana nuna inda; kuna gano dalili a ƙasa." },
      { objective: "O2", q: "Wace drone ce ke iya tsayawa a sama da tashi daga ƙaramin wuri?", options: ["Fixed-wing", "Jirgin takarda", "Tauraron ɗan adam", "Multirotor"], answer: 3, why: "Multirotor tana da farfela da yawa kuma tana iya tsayawa a sama." },
      { objective: "O2", q: "Kyamarar multispectral tana da amfani domin tana:", options: ["Auna hasken da ido ba ya gani kuma tana nuna damuwar shuka da wuri", "Ɗaukar hotunan baƙi da fari kaɗai", "Sa drone ta tashi da sauri", "Fesa taki"], answer: 0, why: "Tana auna near-infrared da sauran haskoki da ke da alaƙa da lafiyar shuka." },
      { objective: "O2", q: "Kyamarar thermal tana nuna:", options: ["Launuka kaɗai", "Zafi", "Sinadaran ƙasa kai tsaye", "Farashi"], answer: 1, why: "Kyamarorin thermal suna auna zafi, mai amfani don ƙishirwar shuka da dabbobi." },
      { objective: "O3", q: "Ƙungiyar haɗin gwiwa ta ƙananan gonaki 300 tana son sa ido kan masarar membobinta. Zaɓi mai kyau shi ne:", options: ["Kowane manomi ya sayi drone fixed-wing", "Kada a taɓa amfani da drone", "Sabis ɗin drone ɗaya da duk membobi ke rabawa", "Kiran waya kaɗai"], answer: 2, why: "Raba drone ɗaya tsakanin gonaki da yawa yana raba kuɗin." },
      { objective: "O3", q: "Hotunan satellite kyauta ba su da amfani sosai don shuka ɗaya domin:", options: ["Koyaushe akwai gajimare", "Baƙi da fari ne", "Suna da tsada sosai", "Kowane pixel kusan mita 10 ne"], answer: 3, why: "Manyan pixels suna nuna yanayi a manyan wurare, ba shuka ɗaya ba." },
      { objective: "O3", q: "Wanne ne kuɗin amfani da drone banda sayen ta?", options: ["Ƙarin baturi da farfela", "Ruwan sama kyauta", "Hasken rana", "Babu wani abu"], answer: 0, why: "Baturi, farfela, kuɗaɗen hukuma, horo, data da tafiye-tafiye duka suna da kuɗi." },
      { objective: "O3", q: "Kafin sayen drone, babbar tambaya ita ce:", options: ["Wane launi gare ta?", "Wace shawara hotunan za su canja, kuma ta cancanci kuɗin?", "Shin ita ce sabuwar samfur?", "Shin abokaina suna da ita?"], answer: 1, why: "Drone tana biyan kuɗinta ne kawai idan ta inganta shawara fiye da kuɗinta." },
      { objective: "O4", q: "Ana samun dokokin drone na Najeriya a cikin:", options: ["Takardar talla ta mai sayarwa", "Ƙungiyar kafofin sada zumunta", "Nig.CARs 2023 Part 21 daga NCAA", "Littafin rasidin gona"], answer: 2, why: "Sashe na 21 na NCAA yana magana kan rajista, takardun shaida da gudanar da RPAS." },
      { objective: "O4", q: "Dokokin drone na Ghana, Rwanda da Uganda:", options: ["Daidai suke da na Kenya", "Ba a buƙatarsu", "Majalisar Ɗinkin Duniya kaɗai ke yin su", "Hukumar sufurin jiragen sama ta kowace ƙasa ce ke yin su"], answer: 3, why: "Kowace ƙasa tana sarrafa sararin samaniyarta kuma tana da nata dokoki." },
      { objective: "O4", q: "Kamfanin da ke tuƙa drone ga manoman da ke biyansa yawanci yana buƙatar:", options: ["Takardar shaidar mai gudanarwa daga hukumar sufurin jiragen sama", "Babu wani ƙari", "Waya kaɗai", "Katin kasuwanci kaɗai"], answer: 0, why: "KCAA da NCAA duka suna da takardun shaidar mai gudanarwa don aikin drone na kasuwanci." },
      { objective: "O4", q: "A ina ya kamata ku duba kuɗaɗen drone na yanzu?", options: ["Tsohuwar jarida", "Shafin hukuma na hukumar sufurin jiragen sama a ranar da kuke nema", "Jita-jita", "Akwatin drone"], answer: 1, why: "Kuɗaɗe suna canjawa; shafin hukuma shi ne tushe amintacce." },
      { objective: "O4", q: "Feshin maganin ƙwari da drone yana buƙatar izini daga:", options: ["Manomin kaɗai", "Mai sayarwa kaɗai", "Hukumar sufurin jiragen sama da hukumar magungunan ƙwari", "Babu kowa"], answer: 2, why: "Feshi aiki ne na musamman da dokokin sufurin jiragen sama da na magungunan ƙwari suka shafa." },
      { objective: "O5", q: "Wane wuri ne yawanci yake da hani kan drone a kusa?", options: ["Gonar masara nesa da garuruwa", "Bakin kogi", "Gonar wake", "Ƙaramin filin sauka (airstrip)"], answer: 3, why: "Dokoki suna nisanta drone daga filayen jirgin sama da filayen sauka." },
      { objective: "O5", q: "Kafin tashi a kan gidan maƙwabci ya kamata ku:", options: ["Fara neman izininsu", "Tashi ƙasa-ƙasa don ba su mamaki", "Ɗauki bidiyonsu", "Tashi da dare"], answer: 0, why: "Ku mutunta ƙasar mutane da sirrinsu; ku fara neman izini." },
      { objective: "O6", q: "Wane yanayi ne ke nufin kada ku tuƙa ƙaramar drone?", options: ["Natsuwa da sararin sama mai tsabta", "Iska mai ƙarfi mai gusowa ko tsawa", "Siririn gajimare babu iska", "Rana ta safe"], answer: 1, why: "Iska, tsawa da ruwan sama na iya sa ku rasa ikon sarrafa drone." },
      { objective: "O6", q: "Gargaɗin baturi ya ce ya yi ƙasa lokacin tashi. Ya kamata ku:", options: ["Ƙara zagaye ɗaya", "Hau sama", "Sauka", "Kashe na'urar sarrafawa"], answer: 2, why: "Baturi ya yi ƙasa yana nufin ku sauko da drone lafiya yanzu." },
      { objective: "O6", q: "Bayan kowane tashi ya kamata ku:", options: ["Goge dukan hotuna", "Sayar da drone", "Manta da shi", "Rubuta tashin a littafin rajistar tashi"], answer: 3, why: "Littafin rajistar tashi yana adana kowane tashi da duk wata matsala." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi.",
    criteria: [
      {
        name: "Matsalar gona",
        objective: "O1",
        notYet: "Matsalar ba ta bayyana ba, ko kuma abu ne da drone ba za ta iya yi ba.",
        meets: "Ya ambaci matsalar gona a sarari da drone za ta iya taimakawa da ita, da abin da za a ci gaba da dubawa da ƙafa.",
        exceeds: "Ya faɗi wace shawara hotunan za su canja."
      },
      {
        name: "Drone da kyamara",
        objective: "O2",
        notYet: "Babu nau'in drone ko kyamara, ko babu dalili.",
        meets: "Nau'in drone da kyamara da suka dace da aikin da girman gonar, tare da dalili.",
        exceeds: "Ya kwatanta shi da drone, hotunan satellite ko tafiya kuma ya bayyana kuɗin."
      },
      {
        name: "Hukuma da takardu",
        objective: "O4",
        notYet: "Babu hukumar ko takardun.",
        meets: "Ya ambaci hukumar sufurin jiragen sama ta ƙasar da takardun da za a duba ko a samu, daga shafinta na intanet.",
        exceeds: "Ya haɗa da adireshin shafin (link) da ranar da aka duba dokokin."
      },
      {
        name: "Haɗurran wuri",
        objective: "O5",
        notYet: "Babu haɗurran da aka lissafa.",
        meets: "Ya lissafa haɗurra da wuraren da aka hana tashi da aka gano, da wanda za a sanar game da tashin.",
        exceeds: "Ya haɗa da sauƙaƙan taswira da aka zana mai wurin tashi."
      },
      {
        name: "Jerin abubuwan tsaro",
        objective: "O6",
        notYet: "Abubuwa ƙasa da takwas, ko babu matakan gaggawa.",
        meets: "Aƙalla abubuwa takwas kafin tashi da suka shafi yanayi, drone, ƙungiya da wuri, tare da matakan gaggawa.",
        exceeds: "Ya ambaci ayyukan matuƙi da mai lura, da yadda ake kai rahoton abubuwan da suka faru."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric na tsarin amfani da drone",
      "Masu koyo da suka duba dokokin drone na hukumar sufurin jiragen sama cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ci gaba zuwa Kwas na 2 na jerin kwasa-kwasan drone",
      "Shirye-shiryen abokan aiki da suka ce masu amfani da drone sun yi rajista kuma sun sami lasisi kafin tashi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai intanet don buɗe shafin drone na hukumar sufurin jiragen sama",
      "Littafin rubutu da alƙalami don tsarin amfani da drone da jerin abubuwan tsaro",
      "Gona ta gaske ko ta misali don zagayawa don duba wurin",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokacin rubuta tsarin"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku buɗe shafin drone na hukumar kai tsaye tare da ƙungiyar.",
      "Kada ku tuƙa drone a matsayin wani ɓangare na wannan kwas sai dai idan matuƙi, drone da tashin suna da duk izinin da ƙasar ke buƙata.",
      "Ku zagaya wata gona ta gaske tare don yin atisayen gano haɗurra, kuma ku tunatar da masu koyo kada su ɗauki bidiyon mutane ko gidaje.",
      "Ku duba shafin hukumar don canje-canjen dokoki kafin kowane zaman kwas.",
      "Ku ba da maki ga tsarin amfani da drone da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
