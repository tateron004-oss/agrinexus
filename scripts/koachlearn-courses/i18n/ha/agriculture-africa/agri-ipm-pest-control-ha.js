"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-ipm-pest-control.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// No product names, rates or pre-harvest intervals: students are sent to extension, the label and the national pesticide regulator.

const FAO_IPM = { name: "FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya): Integrated Pest Management (sarrafa ƙwari ta hanyoyi masu haɗaka)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID da abokan aiki: Fall Armyworm in Africa: A Guide for Integrated Pest Management (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO: manhajar waya don yaƙi da tsutsar fall armyworm a Afirka (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe: Ƙwarin wata: tsutsar ganyen tumatir, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe: Fasahar push-pull tana dakatar da tsutsar fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe: Sabon bincike ya bayyana yadda push-pull ke cin nasara kan fall armyworm (yadda desmodium da brachiaria ke aiki)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe: Littafin jagora ga manoma kan Climate-Smart Push-Pull (bugu na biyu)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Pest Control Products Board (hukumar rajistar magungunan ƙwari ta Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Najeriya)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (hukumar kare muhalli ta Ghana)", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH: jagorar rajista ta Sahelian Pesticides Committee (CSP, kwamitin magungunan ƙwari na Sahel)", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control-ha",
  lang: "ha",
  translationOf: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Sarrafa Ƙwari ta Hanyoyi Masu Haɗaka (IPM) da Yaƙi da Ƙwari Ba Tare da Sinadarai ba",
  skills: "Hana ƙwari tun kafin su fara, Binciken gona da gane fall armyworm da Tuta absoluta, Yanke lokacin ɗaukar mataki da threshold da bayanan rubutu, Amfani da push-pull, abokan gaban ƙwari, tarkuna da magungunan halitta, Amfani da maganin ƙwari lafiya kuma bisa doka a matsayin mataki na ƙarshe",
  outcome: "rubuta da aiwatar da shirin sarrafa ƙwari ta hanyoyi masu haɗaka (IPM) don amfanin gona ɗaya a gonarku: hana ƙwari, binciken gona kowane mako, yanke shawara da threshold kan lokacin ɗaukar mataki, fara amfani da hanyoyin da ba sinadarai ba, da amfani da maganin ƙwari mai rajista lafiya sai idan ana buƙatarsa da gaske.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoman kasuwanci masu tasowa, ma'aikatan gona, matasa 'yan kasuwar noma da jami'an faɗakarwa kan aikin gona (extension officers) da suka gaji da feshi akai-akai amma har yanzu suna rasa amfanin gona. Misalan su ne masara, dawa, wake da tumatir a Kenya, Najeriya, Ghana da Burkina Faso.",
    "Babi na 1 yana koya muku ku dakatar da ƙwari da wuri: matakai huɗu na IPM (hana, sa ido, yanke shawara, ɗaukar mataki), yadda ake binciken gona da bambanta tsutsar fall armyworm da tsutsar ganyen tumatir (Tuta absoluta) da sauran lalacewa, da yadda ake amfani da threshold da bayanan rubutu masu sauƙi don sanin lokacin da mataki zai biya. Babi na 2 yana koya muku yaƙi da ƙwari da ƙarancin guba: push-pull na icipe, abokan gaban ƙwari, tarkuna, magungunan tsirrai da na halitta, kuma a mataki na ƙarshe, amfani da maganin ƙwari lafiya kuma bisa doka don rage taurin ƙwari.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" a gonarku. Ƙwari da magungunan da aka yarda da su sun bambanta daga ƙasa zuwa ƙasa, don haka ku yi amfani da wannan kwas tare da jami'in faɗakarwa, asibitin tsirrai (plant clinic) da hukumar rajistar magungunan ƙwari ta ƙasarku. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta shirin IPM na damina ɗaya don amfanin gona ɗaya a gonarku (misali rabin eka na masara, ko filin tumatir): manyan ƙwari da cututtukan da kuke tsammani, aƙalla matakan hana ƙwari uku, tsarin binciken gona na kowane mako tare da takardar rubutu, threshold da kuka samu daga jami'in faɗakarwa don kowane babban ƙwaro, hanyoyin da ba sinadarai ba da za ku fara amfani da su, da shirin maganin ƙwari a mataki na ƙarshe (maganin da kuka duba a jerin hukumar rajista, dokokin da ke kan takardar bayanin maganin (label) da za ku bi, kayan kariya da za ku sa, da yadda za ku riƙa canja rukunin magunguna don rage taurin ƙwari).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kasuwanci masu tasowa, ma'aikatan gona, matasa 'yan kasuwar noma da jami'an faɗakarwa a faɗin Afirka, masu noman masara, dawa, shinkafa, wake, gyaɗa, kayan lambu da tumatir. Da yawa sun fuskanci fall armyworm tun da ta iso Afirka a 2016, kuma masu noman tumatir sun fuskanci Tuta absoluta.",
    startingPoint: "Suna iya faɗin sunayen wasu ƙwari, kuma yawanci suna feshi idan sun ga lalacewa, sau da yawa da duk abin da mai sayar da magungunan gona ya ba da shawara. Kaɗan ne ke binciken gona bisa tsari, ke ajiye bayanan ƙwari, ke amfani da threshold, ko suka san abokan gaban ƙwari da ke taimaka musu. Da yawa suna feshi ba tare da cikakken kayan kariya ba.",
    gap: "Feshi saboda al'ada yana cin kuɗi, yana kashe abokan gaban ƙwari, yana haifar da taurin ƙwari, yana cutar da lafiya, kuma yana iya barin sauran guba da masu saye ke ƙi. Masu koyo suna buƙatar hana ƙwari, binciken gona da rubutawa, ɗaukar mataki sai idan threshold ya nuna zai biya, fara amfani da hanyoyin da ba sinadarai ba, da amfani da magungunan ƙwari masu rajista lafiya a mataki na ƙarshe.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; da yawa suna amfani da Turanci a matsayin harshe na biyu, kuma kwas ɗin yana nan da Sifaniyanci, Faransanci da Larabci",
      "Na'urori: waya mai sauƙi ko ta zamani; gilashin ƙara girma (hand lens) yana taimakawa amma ba dole ba ne",
      "Lokaci: darussa na kusan minti 5 da suka dace da aikin gona; ana yin atisaye a gonar mai koyo da kansa",
      "Dokoki sun bambanta daga ƙasa zuwa ƙasa: dole magani ya kasance a jerin hukumar rajista ta ƙasa (misali PCPB a Kenya, NAFDAC a Najeriya, EPA a Ghana, Sahelian Pesticides Committee don ƙasashen CILSS kamar Senegal da Burkina Faso)",
      "Tsaro: kwas ɗin ba ya taɓa ba da sunayen magunguna, yawan amfani ko lokacin jira kafin girbi; masu koyo suna bin label da jami'in faɗakarwa"
    ],
    prerequisites: "Babu. Kwas ɗin \"Noma Mai Ɗorewa na Amfanin Gona da Kayan Lambu\" yana ba da taƙaitaccen bayani kan IPM tukuna, kuma \"Lafiyar Ƙasa da Ƙarfinta\" yana taimakawa wajen hana ƙwari."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don amfanin gona ɗaya a gonarku", action: "jera matakan hana ƙwari da ke hana su yawaita kafin damina ta fara", standard: "kuna faɗin aƙalla matakai uku da suka dace da amfanin gonarku" },
    { id: "O2", condition: "Idan kuna zagaya gonarku sau ɗaya a mako", action: "binciken adadin tsirrai da aka ƙayyade da gane fall armyworm, Tuta absoluta da abokan gaban ƙwari da aka saba gani ta alamominsu", standard: "kuna duba aƙalla tsirrai 50 (ko tsirran tumatir 20) kuma kuna rubuta abin da kuka gani" },
    { id: "O3", condition: "Idan kuna da adadin binciken gonarku da threshold daga jami'in faɗakarwa", action: "yanke shawarar ɗaukar mataki yanzu ko ci gaba da sa ido, da rubuta shawarar", standard: "kuna bin dokar threshold a kowane lokaci" },
    { id: "O4", condition: "Idan akwai matsalar ƙwari a amfanin gonarku", action: "zaɓa da kafa hanyoyin da ba sinadarai ba kamar push-pull, abokan gaban ƙwari, tarkuna da magungunan halitta", standard: "kafin a yi amfani da kowane maganin ƙwari na sinadarai" },
    { id: "O5", condition: "Idan ana buƙatar maganin ƙwari da gaske", action: "tabbatar da cewa maganin yana da rajista, bin label ɗinsa da sa kayan kariya da ya lissafa", standard: "ba tare da tsallake ko mataki ɗaya ba" },
    { id: "O6", condition: "A duk tsawon damina ta shawarwarin feshi", action: "canja rukunin magungunan ƙwari da ajiye bayanan feshi don rage taurin ƙwari", standard: "ba tare da amfani da rukuni ɗaya kan zuriyar ƙwari ɗaya sau biyu a jere ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Dakatar da ƙwari da wuri",
      lessons: [
        {
          title: "Matakai huɗu na IPM, farawa da hana ƙwari",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera matakan da ke hana ƙwari yawaita a ɗaya daga cikin amfanin gonarku.",
          text: [
            "FAO ta bayyana sarrafa ƙwari ta hanyoyi masu haɗaka (IPM) a matsayin duba duk hanyoyin yaƙi da ƙwari, haɗa waɗanda suka dace, da amfani da magungunan ƙwari sai idan akwai dalili mai ƙarfi. Tana tafiya a matakai huɗu: hana, sa ido, yanke shawara da ɗaukar mataki. Yawancin ribar tana zuwa ne daga mataki na farko.",
            "Hana ƙwari yana nufin mayar da gona mummunan gida ga ƙwari kuma kyakkyawan gida ga amfanin gona. Ku shuka iri mai shaida (certified seed) na nau'in da ya dace da yankinku, da nau'o'in da ke jure ƙwari idan akwai su. Ku riƙa juya amfanin gona don ƙwarin da ke rayuwa a ƙasa ko a sauran ciyawar gona su rasa abinci: misali masara, sannan wake, sannan dawa. Ku shuka a kan lokaci kuma tare da maƙwabtanku, don kada ƙwari su tashi daga gonakin da aka makara zuwa na farko. Ku ciyar da ƙasa, domin tsirrai masu rauni ne ake fara kai wa hari.",
            "Ku tsaftace gona: ku cire ku lalata tsirrai masu cutar virus ko wata cuta, ku cire tsirran da suka tsiro da kansu da ciyawar da ke ɗaukar ƙwari, kuma ku wanke kayan aiki da takalma. A tumatir, ku renon 'ya'yan shuka a wurin reno mai tsabta da aka rufe da raga, don su tafi gona ba tare da Tuta absoluta da farin ƙuda (whiteflies) ba. Ku bar shuke-shuke masu fure da shinge a gefen gona, domin suna ciyar da ƙwarin da ke cin ƙwari.",
            "Manomiya a Ghana da ke juya masara da gyaɗa, ke shuka da wuri tare da maƙwabtanta, kuma ke cire tsirrai marasa lafiya kowane mako, sau da yawa tana feshi ƙasa da wanda ke shuka masara a fili ɗaya kowace damina."
          ],
          steps: ["Ku rubuta manyan ƙwari da cututtukan amfanin gonarku (ku tambayi jami'in faɗakarwa ko asibitin tsirrai).", "Ku zaɓi iri mai shaida na nau'in da ya dace, mai jure ƙwari.", "Ku tsara juya amfanin gona kuma ku shuka a kan lokaci, tare da maƙwabtanku.", "Ku tsara tsaftar gona: ku cire tsirrai marasa lafiya, tsirran da suka tsiro da kansu da ciyawar da ke ɗaukar ƙwari; ku wanke kayan aiki.", "Ku bar shuke-shuke masu fure a gefen gona don abokan gaban ƙwari."],
          words: [["IPM", "integrated pest management (sarrafa ƙwari ta hanyoyi masu haɗaka): hana ƙwari, sa ido a kansu, yanke lokacin da mataki zai biya, da haɗa hanyoyi da yawa, da maganin ƙwari sai idan akwai dalili."], ["Hana ƙwari", "matakan da ake ɗauka kafin ƙwari su iso don kada su yawaita."], ["Juya amfanin gona (rotation)", "shuka amfanin gona daban a fili ɗaya kowace damina."], ["Tsiron da ya tsiro da kansa (volunteer)", "tsiron amfanin gona da ya fito da kansa daga irin damina ta baya, kuma yana iya ɗaukar ƙwari."]],
          slides: [
            { title: "IPM a matakai huɗu", bullets: ["1. Hana", "2. Sa ido (binciken gona)", "3. Yanke shawara: mataki zai biya?", "4. Ɗaukar mataki: fara da ba sinadarai ba, maganin ƙwari a ƙarshe"] },
            { title: "Hana ƙwari yana farawa da iri", bullets: ["Iri mai shaida na nau'in da ya dace", "Nau'o'in da ke jure ƙwari idan akwai su", "Ku ciyar da ƙasa: tsirrai masu rauni ake fara kai wa hari"] },
            { title: "Ku hana ƙwari abinci", bullets: ["Ku juya: masara, sannan wake, sannan dawa", "Ku shuka a kan lokaci, tare da maƙwabta", "Ku cire tsirran da suka tsiro da kansu da ciyawar da ke ɗaukar ƙwari"] },
            { title: "Ku tsaftace gona", bullets: ["Ku cire ku lalata tsirrai marasa lafiya", "Ku wanke kayan aiki da takalma", "Wurin renon tumatir mai tsabta da raga", "Shuke-shuke masu fure a gefe suna ciyar da abokan gaban ƙwari"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Ku zaɓi amfanin gona ɗaya da za ku shuka a damina mai zuwa. Ku rubuta manyan ƙwari ko cututtukansa guda uku, sannan ku rubuta aƙalla matakan hana ƙwari uku da za ku ɗauka kafin shuka (iri, juya amfanin gona, lokaci, tsafta, gefen gona).",
          youCanNow: "faɗin matakai huɗu na IPM da jera matakan da ke hana ƙwari yawaita a amfanin gonarku.",
          quickCheck: [
            { objective: "O1", q: "Wane mataki na IPM ne yawanci yake ceton wa manomi kuɗi fiye da sauran?", options: ["Feshi kowane mako", "Sayen magani mafi ƙarfi", "Hana ƙwari kafin su iso", "Feshin gonar maƙwabci"], answer: 2, why: "Hana ƙwari yana dakatar da yawaitarsu, don haka ba a buƙatar yaƙi da yawa daga baya." },
            { objective: "O1", q: "Masararku ta yi mummunar lalacewa daga ƙwari a fili ɗaya damina uku a jere. Wane matakin hana ƙwari ya fi dacewa?", options: ["Ku juya filin zuwa wake ko gyaɗa a damina mai zuwa", "Ku shuka masara bayan maƙwabtanku", "Ku bar karan masarar damina ta baya a tsaye", "Ku shuka irin da ba shi da shaida daga kawunan masarar da suka lalace"], answer: 0, why: "Juya amfanin gona yana karya zagayen rayuwar ƙwaro ta hanyar hana shi tsiron da yake ci." }
          ]
        },
        {
          title: "Binciken gona da gane fall armyworm da Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Binciken gona bisa hanyar da aka tsara da gane fall armyworm, Tuta absoluta da abokan gaban ƙwari ta alamominsu.",
          text: [
            "Binciken gona (scouting) yana nufin zagaya gonarku bisa tsari da duba adadin tsirrai da aka ƙayyade, don ku ga matsala da wuri kuma ku iya ƙirga ta. Ku yi bincike aƙalla sau ɗaya a mako, fiye da haka don ƙaramar masara da tumatir. Ku bi hanya mai siffar W ko karkace-karkace don ku duba gonar gaba ɗaya, ba gefuna kaɗai ba. A masara, ku tsaya a wurare biyar ku duba tsirrai 10 a jere a kowane wuri, tsirrai 50 gaba ɗaya. A ƙaramin filin tumatir, ku duba tsirrai 20 da suka watsu a cikin kunyoyin.",
            "Tsutsar fall armyworm ta iso Afirka a 2016, kuma yanzu tana nan a yawancin nahiyar. A ƙaramar masara, ku nemi ƙananan \"tagogi\" (wurare sirara masu nuna haske) a ganyaye, sannan ramuka marasa tsari da kashin tsutsa mai jiƙa kamar garin katako a cikin toho (whorl). Tsutsar tana da alamar Y mai juyewa mai haske a kanta, da ɗigo baƙi huɗu masu siffar murabba'i kusa da wutsiyarta. Tarin ƙwai yana kan ganye a ƙarƙashin wani bargo mai laushi kamar gashi. Ana ƙirga tsiro a matsayin mai ƙwari idan yana da sabuwar lalacewa ko tsutsa mai rai.",
            "Tuta absoluta, tsutsar ganyen tumatir, ta zo daga Kudancin Amurka kuma ta yaɗu a Afirka cikin 'yan shekaru; icipe ta ruwaito cewa a arewacin Najeriya a 2016 ta lalata yawancin amfanin tumatir. Ƙananan tsutsotsinta suna haƙa rami a cikin ganye, suna yin wurare masu fari-fari masu nuna haske (mines) da kashi baƙi, kuma suna huda ƙananan ramuka a karan tsiro da 'ya'yan tumatir. Babbar ƙwarar ƙaramar asu ce mai launin toka da ruwan ƙasa da ke ɓoyewa da rana.",
            "Ku kuma nemi abokai: ƙwaron ladybird da 'ya'yansa, lacewing, gizo-gizo, earwig, tururuwa da ƙananan zanzaro masu ƙwai a cikin ƙwari, da tsutsotsin da ke kama da marasa lafiya, masu laushi ko da naman gwari (fungus) a kansu. FAO ta lura cewa abokan gaban ƙwari tuni suna kashe tsutsotsin fall armyworm da yawa a gonakin Afirka. Idan ba ku da tabbacin abin da kuke gani, ku ɗauki hoto mai haske ku tambayi jami'in faɗakarwa ko asibitin tsirrai; a wasu ƙasashe manhajar FAMEWS ta FAO tana rubuta inda aka ga fall armyworm."
          ],
          steps: ["Ku zaɓi ranar binciken gona kowane mako, ku riƙe littafin rubutu ko waya.", "Ku bi hanyar W; ku tsaya a wurare 5 a masara (tsirrai 10 a kowane) ko tsirran tumatir 20 da suka watsu.", "A kowane tsiro, ku duba ganyaye, toho ko ƙarshen girma, kara da 'ya'ya.", "Ku ƙirga tsirran da ke da sabuwar lalacewa ko ƙwari masu rai; ku rubuta tarin ƙwai.", "Ku rubuta abokan gaban ƙwari da kuka gani.", "Ku ɗauki hoton duk abin da ba ku gane ba ku tambayi jami'in faɗakarwa ko asibitin tsirrai."],
          words: [["Binciken gona (scouting)", "zagaya gona bisa tsari da duba adadin tsirrai da aka ƙayyade don neman ƙwari, cututtuka da abokan gaban ƙwari."], ["Toho (whorl)", "ganyayen da aka naɗe a saman ƙaramar masara."], ["Ramin ganye (leaf mine)", "hanya ko wuri mai fari-fari a cikin ganye da ƙaramar tsutsa ta yi yayin cin tsakanin fatun ganyen."], ["Abokin gaban ƙwari (natural enemy)", "ƙwaro, gizo-gizo, naman gwari ko wani abu mai rai da ke kashe ƙwari."]],
          slides: [
            { title: "Yadda ake binciken gona", bullets: ["Kowane mako, rana ɗaya", "Hanyar W ko karkace-karkace, ba gefuna kaɗai ba", "Masara: wurare 5 x tsirrai 10 = 50", "Tumatir: tsirrai 20 da suka watsu"] },
            { title: "Alamomin fall armyworm", bullets: ["Tagogi a ƙananan ganyaye, sannan ramuka marasa tsari", "Kashi mai jiƙa kamar garin katako a cikin toho", "Y mai juyewa a kai, ɗigo baƙi 4 kusa da wutsiya"] },
            { title: "Alamomin Tuta absoluta", bullets: ["Wurare masu fari-fari da kashi baƙi a cikin ganye", "Ƙananan ramuka a kara da 'ya'ya", "Ƙaramar asu mai launin toka da ruwan ƙasa da ke ɓoyewa da rana"] },
            { title: "Ku nemi abokai ma", bullets: ["Ladybird, lacewing, gizo-gizo, earwig, tururuwa", "Ƙananan zanzaro; tsutsotsi marasa lafiya ko masu naman gwari", "Ba ku da tabbaci? Hoto zuwa jami'in faɗakarwa ko asibitin tsirrai"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Ku yi binciken ɗaya daga cikin gonakinku yau ta hanyar W: tsirran masara 50 ko tsirran tumatir 20. Ku rubuta tsirrai nawa ne ke da sabuwar lalacewa ko ƙwari masu rai, duk tarin ƙwai, da kowane abokin gaban ƙwari da kuka gani.",
          youCanNow: "binciken gona bisa hanyar da aka tsara, gane fall armyworm da Tuta absoluta ta alamominsu, da hango abokan gaban ƙwari.",
          quickCheck: [
            { objective: "O2", q: "Kun ga kashi mai jiƙa kamar garin katako da ramuka marasa tsari a cikin tohon ƙaramar masara. Wane ƙwaro ne ya fi yiwuwa?", options: ["Tsutsar ganyen tumatir", "Aphids (ƙananan ƙwari masu tsotse ruwan tsiro)", "Fall armyworm", "Gara"], answer: 2, why: "Ramuka marasa tsari da kashi mai jiƙa a cikin toho sanannun alamomin fall armyworm ne." },
            { objective: "O2", q: "Me yasa za ku bi hanyar W yayin binciken gona maimakon duba tsirran da ke kusa da ƙofar gona?", options: ["Ya fi sauri", "Ƙwari suna rayuwa a tsakiya ne kawai", "Yana rage amfani da ruwa", "Yana duba gonar gaba ɗaya, ba gefuna kaɗai ba"], answer: 3, why: "Hanyar W tana duba kowane sashe na gona, don haka ƙirgar tana nuna ainihin yawan ƙwari." }
          ]
        },
        {
          title: "Threshold da bayanan rubutu: yanke lokacin ɗaukar mataki",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kwatanta ƙirgar binciken gonarku da threshold, ku rubuta ko za ku ɗauki mataki ko ku ci gaba da sa ido.",
          text: [
            "Ganin ƙwaro ba yana nufin dole ne ku yi feshi ba. Threshold (matakin ɗaukar mataki) shi ne yawan ƙwari ko lalacewa da yaƙi da su zai cancanci kuɗinsa. A ƙasa da shi, abokan gaban ƙwari da amfanin gona yawanci suna iya jurewa, kuma feshi zai ɓata kuɗi ya kashe mataimakanku. Ku samo threshold don kowane babban ƙwaro, matakin girman amfanin gona da yanki daga jami'in faɗakarwa ko cibiyar bincike (kamar KALRO a Kenya), domin yana canjawa da matakin girma, farashi da binciken yanki.",
            "Ku mayar da ƙirgarku zuwa kashi cikin ɗari: tsirran da ke da sabuwar lalacewa ko ƙwari masu rai, a raba da tsirran da aka duba, a ninka da 100. Misali: kun duba tsirran masara 50, kuma 9 suna da sabuwar lalacewar fall armyworm, don haka 9 / 50 x 100 = 18%. Idan jami'in faɗakarwa ya ce ku ɗauki mataki a 20% a wannan matakin girma, za ku ci gaba da sa ido ku sake bincike bayan 'yan kwanaki. Idan a mako mai zuwa ya kai 26%, za ku ɗauki mataki. Ƙaramar masara yawanci ba ta iya jure lalacewa kamar babbar masara, don haka threshold yakan bambanta da matakin girma.",
            "Ku rubuta kowace ziyara. Rubutu mai sauƙi yana da kwanan wata, gona, matakin girman amfanin gona, tsirran da aka duba, tsirrai masu ƙwari, kashi cikin ɗari, abokan gaban ƙwari da aka gani, threshold, shawararku da abin da kuka yi. Bayan 'yan damina, bayananku za su nuna lokacin da ƙwari ke isowa gonarku, waɗanne hanyoyi suka yi aiki da kuɗin da suka ci. Littafin rubutu na takarda yana aiki; haka ma tebur a waya (spreadsheet) ko manhajar gona."
          ],
          steps: ["Ku tambayi jami'in faɗakarwa threshold don kowane babban ƙwaro da matakin girma.", "Bayan binciken gona, ku ƙirga tsirran da aka duba da tsirrai masu ƙwari.", "Ku lissafa kashi cikin ɗari: masu ƙwari / waɗanda aka duba x 100.", "Ku kwatanta da threshold: a ƙasa = ku ci gaba da sa ido; ya kai ko ya wuce = ku ɗauki mataki.", "Ku rubuta kwanan wata, lambobi, abokan gaban ƙwari, shawara da mataki a bayananku."],
          words: [["Threshold (matakin ɗaukar mataki)", "yawan ƙwari ko lalacewa da yaƙi da su zai cancanci kuɗinsa."], ["Mai ƙwari (infested)", "yana da ƙwari ko sabuwar lalacewa daga ƙwari."], ["Matakin girman amfanin gona (crop stage)", "yadda amfanin gona ya girma, misali tsiro, tsayin gwiwa, fitar tuta, fure, 'ya'ya."]],
          slides: [
            { title: "Ganin ƙwaro ba dalilin feshi ba ne", bullets: ["Threshold: matakin da mataki zai biya", "A ƙasa da shi, abokan gaban ƙwari sukan iya jurewa", "Ku samo threshold daga jami'in faɗakarwa, bisa matakin girma"] },
            { title: "Ku lissafa kashi cikin ɗari", bullets: ["Tsirrai masu ƙwari / tsirran da aka duba x 100", "Misali: 9 / 50 x 100 = 18%", "Threshold 20%: ku ci gaba da sa ido, ku sake bincike nan ba da jimawa ba"] },
            { title: "Ku rubuta kowace ziyara", bullets: ["Kwanan wata, gona, matakin girma", "An duba, masu ƙwari, %, abokan gaban ƙwari", "Threshold, shawara, mataki, kuɗi"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Ku yi amfani da ƙirgar binciken gonarku daga darasin da ya gabata. Ku lissafa kashi cikin ɗari na tsirrai masu ƙwari, ku tambayi jami'in faɗakarwa threshold a matakin girman amfanin gonarku, kuma ku cike layin farko na bayananku da shawararku.",
          youCanNow: "mayar da ƙirgar binciken gona zuwa kashi cikin ɗari, kwatanta shi da threshold, da rubuta shawararku.",
          quickCheck: [
            { objective: "O3", q: "Kun duba tsirrai 50, kuma 15 suna da sabuwar lalacewa. Kashi nawa ne masu ƙwari?", options: ["15%", "30%", "50%", "35%"], answer: 1, why: "15 / 50 x 100 = 30%." },
            { objective: "O3", q: "Ƙirgarku 12% ce, kuma threshold na jami'in faɗakarwa a wannan matakin girma 20% ne. Me za ku yi?", options: ["Ku yi feshi yau don ku tsira", "Ku tumɓuke amfanin gonar", "Ku ninka yawan maganin feshi", "Ku ci gaba da sa ido, ku sake bincike nan ba da jimawa ba ku rubuta shi"], answer: 3, why: "A ƙasa da threshold, yaƙi da ƙwari bai biya ba tukuna; ku ci gaba da bincike da rubutu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Dakatar da ƙwari da wuri",
        questions: [
          { objective: "O1", q: "Wanne ne matakin hana ƙwari a IPM?", options: ["Feshi idan kun ga tsutsa ɗaya", "Shuka iri mai shaida na nau'in da ya dace a kan lokaci", "Haɗa magungunan ƙwari biyu tare", "Ƙona amfanin gonar maƙwabci"], answer: 1, why: "Iri mai kyau da shuka a kan lokaci suna hana ƙwari yawaita tun kafin su fara." },
          { objective: "O2", q: "Wurare masu fari-fari da kashi baƙi a cikin ganyen tumatir, da ƙananan ramuka a 'ya'yan, suna nuna:", options: ["Tuta absoluta (tsutsar ganyen tumatir)", "Fall armyworm", "Taki ya yi yawa", "Rashin ruwa"], answer: 0, why: "Ramukan ganye da ramukan 'ya'ya alamomin Tuta absoluta ne." },
          { objective: "O2", q: "Yayin binciken gona kun sami ladybird da tsutsa da farin naman gwari ya rufe. Ya kamata ku:", options: ["Ku yi feshi ku kashe su ma", "Ku yi watsi da su; ba su da muhimmanci", "Ku rubuta su a matsayin abokan gaban ƙwari da ke aiki", "Ku ƙona tsiron"], answer: 2, why: "Abokan gaban ƙwari suna rage ƙwari, don haka ku rubuta su ku kare su." },
          { objective: "O3", q: "Mene ne threshold?", options: ["Ranar da kuke shuka", "Farashin maganin ƙwari", "Yawan ma'aikatan da kuke buƙata", "Yawan ƙwari da yaƙi da su zai cancanci kuɗinsa"], answer: 3, why: "A ƙasa da threshold, yaƙi da ƙwari yana cin kuɗi fiye da abin da yake ceto." },
          { objective: "O3", q: "Me yasa za ku riƙa rubuta kowace ziyarar binciken gona?", options: ["Don ganin lokacin da ƙwari ke isowa, abin da ya yi aiki da kuɗin da ya ci", "Domin mai sayar da magungunan gona yana nema", "Don gonar ta yi kyau", "Ba shi da amfani"], answer: 0, why: "Bayanan rubutu suna mayar da kowace damina darasi ga mai zuwa." }
        ]
      }
    },
    {
      name: "Babi na 2: Yaƙi da ƙwari da ƙarancin guba",
      lessons: [
        {
          title: "Push-pull da abokan gaban ƙwari",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tsara filin push-pull da kare abokan gaban ƙwari a gonarku.",
          text: [
            "icipe ce ta ƙirƙiro push-pull, tare da abokan aiki, don masara da dawa a Gabashin Afirka. Kuna shuka desmodium a tsakanin layukan masara. Desmodium yana fitar da ƙamshin da ke korar asun stemborer (tsutsar kara) daga amfanin gona (push). A kewayen filin kuna shuka ciyawar abincin dabbobi (brachiaria a sigar climate-smart don yankuna masu ƙarancin ruwa, ko napier a ta asali), wadda ke jawo asun zuwa gare ta ta kama su (pull). Desmodium kuma yana danne ciyawar striga yana ƙara nitrogen a ƙasa, kuma dukkan tsirran biyu abinci ne mai kyau ga shanu.",
            "Binciken icipe a Kenya, Uganda da Tanzania ya gano ƙarancin lalacewar fall armyworm sosai a gonakin climate-smart push-pull fiye da masarar da aka shuka ita kaɗai, da kuma ƙarin hatsi. Push-pull yana buƙatar aiki wajen kafa shi, kuma kuna buƙatar irin desmodium ko yankan sa da tsagin ciyawa, don haka ku fara da ƙaramin fili, ku tambayi jami'in faɗakarwa ko manomin da icipe ta horar tsarin shuka, kuma ku bi littafin jagorar icipe ga manoma.",
            "Abokan gaban ƙwari ma'aikata ne kyauta. Tururuwa, earwig, gizo-gizo, ladybird da lacewing suna cin ƙwai da ƙananan tsutsotsi; ƙananan zanzaro suna sa ƙwansu a cikin ƙwari; naman gwari da virus suna kashe tsutsotsi. FAO ta lura cewa waɗannan tuni suna kashe babban kaso na fall armyworm a gonakin Afirka. icipe ta saki wani ƙaramin zanzaro daga Kudancin Amurka da ke kai wa Tuta absoluta kaɗai hari a Kenya. Don kare su: ku yi feshi sai idan threshold ya nuna, ku zaɓi magunguna masu zaɓe (selective), ku bar shuke-shuke masu fure da shinge a kewayen gonaki, kuma ku bar ɗan rufin ƙasa."
          ],
          steps: ["Ku auna ƙaramin filin push-pull (ku tambayi jami'in faɗakarwa ko littafin jagorar icipe tsarin shuka).", "Ku fara shuka ciyawar kewaye (brachiaria ko napier) a kewayen filin.", "Ku shuka desmodium a tsakanin layukan masara ko dawa.", "Ku yanki ciyawar da desmodium don abincin dabbobi, ku bar tsirran su sake tsiro.", "Ku kare abokan gaban ƙwari: babu feshi marar amfani, ku bar furanni da rufin ƙasa."],
          words: [["Push-pull", "tsarin icipe inda tsiron da aka shuka a tsakani (desmodium) ke korar ƙwari, ciyawar kewaye kuma ke jawo su daga amfanin gona."], ["Desmodium", "tsiron dangin wake mai yaɗuwa a ƙasa da ake shukawa tsakanin layukan hatsi; yana korar asun stemborer, yana danne striga kuma yana ƙara nitrogen."], ["Striga (makasa, kuma ana kiranta kuduji a wasu wurare)", "ciyawa mai fure ruwan hoda ko shunayya da ke manne wa saiwar masara da dawa tana satar abincinsu."], ["Zanzaro mai ƙwai a cikin ƙwari (parasitic wasp)", "ƙaramin zanzaro da ke sa ƙwansa a ciki ko a kan ƙwaro, 'ya'yansa kuma suna kashe ƙwaron."]],
          slides: [
            { title: "Push-pull (icipe)", bullets: ["Desmodium a tsakanin layuka yana korar asu", "Ciyawar kewaye (brachiaria ko napier) tana jawo su waje", "Don masara da dawa"] },
            { title: "Ƙarin amfani", bullets: ["Desmodium yana danne striga yana ƙara nitrogen", "Dukkan tsirran biyu abincin shanu ne", "Gwaje-gwajen icipe: ƙarancin lalacewar fall armyworm sosai"] },
            { title: "Ma'aikatanku na kyauta", bullets: ["Tururuwa, earwig, gizo-gizo, ladybird, lacewing", "Ƙananan zanzaro; naman gwari da virus", "Zanzaron da aka saki a Kenya yana kai wa Tuta absoluta kaɗai hari"] },
            { title: "Ku kare abokan gaban ƙwari", bullets: ["Ku yi feshi sai idan an wuce threshold", "Ku zaɓi magunguna masu zaɓe (selective)", "Ku bar furanni, shinge da rufin ƙasa"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "Ku zana hoton ƙaramin filin push-pull don masararku ko dawarku, da ciyawar kewaye, layukan desmodium da layukan amfanin gona. Sannan ku rubuta abubuwa biyu da za ku canja a gonarku don kare abokan gaban ƙwari.",
          youCanNow: "bayyana yadda push-pull ke aiki, zana filin push-pull, da faɗin hanyoyin kare abokan gaban ƙwari.",
          quickCheck: [
            { objective: "O4", q: "A push-pull, me desmodium da ke tsakanin layukan masara ke yi?", options: ["Yana jawo ƙwari zuwa cikin masara", "Yana korar asun stemborer kuma yana danne striga", "Yana yi wa masara inuwa don ta yi tsayi", "Yana kashe ladybird"], answer: 1, why: "Ƙamshin desmodium yana korar asu kuma yana danne striga; ciyawar kewaye ce ke jawowa." },
            { objective: "O4", q: "Wace al'ada ce ta fi kare abokan gaban ƙwari?", options: ["Feshin maganin ƙwari mai kashe komai kowane mako", "Share kowace fure da shinge a kewayen gona", "Ƙona sauran ciyawar gona da duk rufin ƙasa", "Feshi sai idan an wuce threshold da barin furanni a gefen gona"], answer: 3, why: "Ƙarancin feshi da shuke-shuke masu fure suna sa abokan gaban ƙwari su rayu kuma su sami abinci." }
          ]
        },
        {
          title: "Tarkuna, magungunan tsirrai da na halitta",
          objectives: ["O4"],
          minutes: 5,
          goal: "Zaɓa da kafa tarkuna da magungunan tsirrai ko na halitta da aka amince da su don matsalar ƙwari.",
          text: [
            "Tarkuna suna taimaka muku sa ido da rage yawan ƙwari. Tarkon pheromone yana amfani da ƙamshin mace asu don kama maza: icipe tana amfani da kama ƙwari da yawa a matsayin sashen IPM ɗinta don Tuta absoluta, kuma tarkon pheromone na fall armyworm yana nuna muku lokacin da asu suka iso don ku ƙara bincike. Katin manne mai rawaya yana kama farin ƙuda, aphids da manyan ƙwarin leafminer; mai shuɗi yana kama thrips. Ku canja abin jawowa (lure) da katuna kamar yadda mai sayarwa ya faɗa, kuma ku ƙirga abin da aka kama kowane mako a bayananku.",
            "Tsinke da hannu yana aiki a ƙananan filaye: ku murƙushe tarin ƙwan fall armyworm da ƙananan tsutsotsi, kuma ku tsinke ku lalata ganyen da Tuta ta haƙa da 'ya'yan da suka lalace (ku binne su da zurfi ko ku rufe su a jaka a rana, kada ku taɓa barin su a ƙasa).",
            "Magungunan halitta (biological) suna amfani da abubuwa masu rai ko abubuwan da suke yi don yaƙi da ƙwari: misali magungunan da aka yi daga ƙwayar bacteria Bt (Bacillus thuringiensis), daga naman gwari da ke kama ƙwari, ko daga virus na ƙwari. icipe tana ƙirƙirar magungunan ƙwari na naman gwari. Yawanci ba sa cutar da abokan gaban ƙwari sosai, amma suna aiki a hankali, suna buƙatar su sami ƙananan tsutsotsi, kuma dole a ajiye su kamar yadda label ya faɗa. A ƙasashe da yawa dole a yi musu rajista kamar kowane maganin ƙwari, don haka ku duba jerin hukumar rajista.",
            "Magungunan tsirrai (botanical) suna fitowa daga tsirrai, kamar darbejiya (neem). Magungunan neem masu rajista suna da label da za ku iya bi. Ana yawan amfani da ruwan ganye da aka haɗa a gida, amma ƙarfinsu ya bambanta kuma har yanzu suna iya cutar da abokan gaban ƙwari, fata da idanu, don haka ku tambayi jami'in faɗakarwa yadda ake amfani da su a yankinku, ku sa safar hannu, kuma ku fara gwadawa a 'yan tsirrai."
          ],
          steps: ["Ku haɗa kayan aiki da ƙwaro: tarkon pheromone don asu, katin rawaya don farin ƙuda da aphids, shuɗi don thrips.", "Ku rataya tarkuna a tsayin amfanin gona kuma ku ƙirga abin da aka kama kowane mako.", "Ku tsinke ku lalata tarin ƙwai, ƙananan tsutsotsi da ganyen da aka haƙa.", "Idan ana buƙatar ƙari, ku zaɓi maganin halitta ko na tsirrai mai rajista.", "Ku yi amfani da shi kan ƙananan tsutsotsi, kamar yadda label ɗinsa ya faɗa, kuma ku rubuta shi."],
          words: [["Tarkon pheromone", "tarkon da aka sa masa ƙamshin aure na ƙwaro; yana kama maza kuma yana nuna lokacin da ƙwari suka iso."], ["Maganin ƙwari na halitta (biopesticide)", "maganin yaƙi da ƙwari da aka yi daga abubuwa masu rai kamar bacteria, naman gwari ko virus, ko abubuwan da suke yi."], ["Bt", "Bacillus thuringiensis, ƙwayar bacteria ta ƙasa da ake amfani da ita a magungunan halitta; tana kashe wasu tsutsotsi idan sun ci ta."], ["Maganin tsirrai (botanical)", "maganin yaƙi da ƙwari da aka yi daga tsirrai, kamar darbejiya (neem)."]],
          slides: [
            { title: "Tarkuna don sa ido da rage ƙwari", bullets: ["Tarkon pheromone yana kama maza na asu", "Katin rawaya: farin ƙuda, aphids; shuɗi: thrips", "Ku ƙirga abin da aka kama kowane mako; ku canja lure a kan lokaci"] },
            { title: "Tsinke da hannu yana aiki", bullets: ["Ku murƙushe tarin ƙwai da ƙananan tsutsotsi", "Ku cire ganyen da Tuta ta haƙa da 'ya'yan da suka lalace", "Ku binne da zurfi ko ku rufe a jaka, kada ku bar su a ƙasa"] },
            { title: "Magungunan halitta", bullets: ["Bt, naman gwari mai kashe ƙwari, virus na ƙwari", "Ba sa cutar da abokan gaban ƙwari sosai, amma suna da jinkiri", "Ku kai wa ƙananan tsutsotsi; ku duba rajista"] },
            { title: "Magungunan tsirrai kamar neem", bullets: ["Magunguna masu rajista suna da label: ku bi shi", "Ƙarfin ruwan ganye na gida ya bambanta", "Ku tambayi jami'in faɗakarwa, ku sa safar hannu, ku gwada a 'yan tsirrai"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "Don ƙwaron da ya fi muni a amfanin gonarku, ku rubuta tarkon da za ku yi amfani da shi da inda za ku rataya shi, abin da za ku tsinke da hannu, da zaɓi ɗaya na maganin halitta ko na tsirrai. Sannan ku duba ko maganin yana cikin jerin magunguna masu rajista na ƙasarku, ko ku nemi mai sayar da magungunan gona ya nuna muku rajistarsa.",
          youCanNow: "zaɓar tarkuna, tsinke da hannu da magungunan halitta ko na tsirrai da aka amince da su don ƙwaro, da kafa su.",
          quickCheck: [
            { objective: "O4", q: "Kuna noman tumatir kuma kuna son sanin lokacin da asun Tuta absoluta suka iso. Me za ku kafa?", options: ["Tarkon pheromone na Tuta absoluta", "Katin manne mai shuɗi", "Bokitin ruwa a rumbu", "Mutum-mutumin tsoratar da tsuntsaye"], answer: 0, why: "Tarkon pheromone na Tuta yana kama maza na asun kuma yana nuna lokacin da suka iso." },
            { objective: "O4", q: "Maganin halitta na Bt yana aiki mafi kyau idan kun:", options: ["Fesa shi kan manyan tsofaffin tsutsotsi da tsakar rana", "Haɗa shi da kowane sinadari", "Yi amfani da shi kan ƙananan tsutsotsi kamar yadda label ɗinsa ya faɗa", "Ajiye shi a rana"], answer: 2, why: "Magungunan halitta suna aiki a hankali kuma sun fi aiki kan ƙananan tsutsotsi, idan an yi amfani da su kamar yadda label ya faɗa." }
          ]
        },
        {
          title: "Maganin ƙwari a matsayin mataki na ƙarshe, da rage taurin ƙwari",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Duba rajistar maganin ƙwari, bin label ɗinsa da kayan kariya, da tsara canja rukunoni don rage taurin ƙwari.",
          text: [
            "Ku yi amfani da maganin ƙwari na sinadarai sai idan ƙirgarku ta wuce threshold kuma sauran hanyoyi ba su isa ba. Da farko ku tabbatar cewa maganin yana da rajista don amfanin gonarku da ƙwaron a ƙasarku: Pest Control Products Board (PCPB) a Kenya, NAFDAC a Najeriya, Environmental Protection Authority (EPA) a Ghana, da Sahelian Pesticides Committee (CSP) don ƙasashen CILSS kamar Senegal da Burkina Faso. Kowace tana da jerin magunguna masu rajista; ku duba shi, kuma ku sayi kwantena da aka rufe mai label kaɗai daga mai sayar da magungunan gona mai lasisi. Magungunan jabu da marasa rajista sun yi yawa.",
            "Label shi ne doka. Ku karanta shi gaba ɗaya kafin ku buɗe kwantenar: amfanin gona da ƙwarin da aka yi shi dominsu, yawan amfani, yadda ake haɗawa, lokacin feshi, kayan kariya, tsawon lokacin jira kafin girbi (pre-harvest interval) da kafin mutane su koma gona, da taimakon gaggawa. Ku sa abin da label ya lissafa, yawanci safar hannu, takalman roba, riga mai dogon hannu da wando, kariyar ido da takunkumi ko na'urar numfashi (respirator). Ku yi feshi a lokacin da babu iska kuma ba zafi, kada ku taɓa fesawa wajen mutane, dabbobi ko ruwa. Kada ku ci, ku sha ko ku sha taba yayin feshi, ku yi wanka bayan haka, kuma ku kulle magunguna nesa da yara da abinci. Kada ku taɓa sa maganin ƙwari a kwalbar abin sha ko ta abinci.",
            "Ƙwari suna yin tauri (resistance) idan ana amfani da nau'in sinadari ɗaya akai-akai: 'yan kaɗan da suka tsira suna haihuwa. Fall armyworm da Tuta absoluta dukkansu an san su da haka. Label sau da yawa yana nuna lambar rukuni ko sinadarin aiki (active ingredient). Ku riƙa canjawa tsakanin rukunoni, kada ku yi amfani da rukuni ɗaya kan zuriyar ƙwari ɗaya sau biyu a jere, kada ku taɓa rage yawan magani ko ku haɗa magunguna da kanku, kuma ku ajiye bayanan feshi da kwanan wata, sunan magani, rukuni, yawan amfani, gona da ranar da girbi zai halatta. A Kenya, mai noman tumatir da ke fesa magani ɗaya kowane 'yan kwanaki sau da yawa yana ganin ya daina aiki; wadda ke bincike, ke amfani da tarkuna kuma ke canja rukunoni tana sa 'yan feshinta su ci gaba da aiki."
          ],
          steps: ["Ku tabbatar cewa ƙirgar ta wuce threshold kuma sauran hanyoyi ba su isa ba.", "Ku duba cewa maganin yana da rajista don amfanin gonarku da ƙwaron (PCPB, NAFDAC, EPA Ghana, CSP).", "Ku sayi kwantena da aka rufe mai label daga mai sayar da magungunan gona mai lasisi.", "Ku karanta label gaba ɗaya; ku sa duk kayan kariya da ya lissafa.", "Ku yi feshi a lokacin da babu iska kuma ba zafi, da yawan da label ya faɗa; ku yi wanka ku ajiye shi lafiya.", "Ku rubuta sunan magani, rukuni, yawan amfani da ranar da girbi zai halatta; ku canja rukuni a gaba."],
          words: [["Maganin ƙwari mai rajista", "maganin da hukumar rajista ta ƙasa ta amince da shi don amfanin gona da ƙwarin da aka ambata."], ["Label", "bayanan amfani da ke kan kwantenar; bin su doka ce."], ["PPE (kayan kariya)", "personal protective equipment: safar hannu, takalman roba, dogayen tufafi, kariyar ido da takunkumi ko na'urar numfashi."], ["Lokacin jira kafin girbi (pre-harvest interval)", "lokacin da dole ku jira bayan feshi kafin ku girbe; yana rubuce a kan label."], ["Taurin ƙwari (resistance)", "lokacin da ƙwaro ba ya mutuwa daga maganin da a da yake kashe shi."], ["Rukunin yadda magani ke aiki (mode-of-action group)", "lamba ko suna da ke nuna yadda maganin ƙwari ke kashewa; ku riƙa canjawa tsakanin rukunoni don rage taurin ƙwari."]],
          slides: [
            { title: "Maganin ƙwari: mataki na ƙarshe", bullets: ["Sai idan an wuce threshold", "Sai idan sauran hanyoyi ba su isa ba", "Sai mai rajista don amfanin gonarku da ƙwaron"] },
            { title: "Ku duba rajista", bullets: ["Kenya: PCPB; Najeriya: NAFDAC", "Ghana: EPA; Senegal, Burkina Faso: CSP (CILSS)", "An rufe, yana da label, mai sayarwa mai lasisi"] },
            { title: "Label shi ne doka", bullets: ["Amfanin gona, ƙwaro, yawan amfani, lokaci", "PPE: safar hannu, takalman roba, dogon hannu, ido, takunkumi", "Lokacin jira kafin girbi da kafin komawa gona"] },
            { title: "Ku rage taurin ƙwari", bullets: ["Ku canja rukunin yadda magani ke aiki", "Kada ku rage yawan magani ko ku haɗa naku", "Ku ajiye bayanan feshi"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Aikin ƙarshe: ku rubuta shirin IPM na damina ɗaya don amfanin gona ɗaya a gonarku: manyan ƙwari, aƙalla matakan hana ƙwari uku, tsarin binciken gona na kowane mako da takardar rubutu, threshold da kuka samu daga jami'in faɗakarwa, hanyoyin da ba sinadarai ba da za ku fara amfani da su, da shirin maganin ƙwari a mataki na ƙarshe (maganin da kuka duba a jerin hukumar rajista, dokokin label, PPE ɗinku, da yadda za ku canja rukunoni).",
          youCanNow: "tabbatar da cewa maganin ƙwari yana da rajista, bin label ɗinsa da kayan kariya da suka dace, da canja rukunoni da ajiye bayanai don rage taurin ƙwari.",
          quickCheck: [
            { objective: "O5", q: "Mai sayar da magungunan gona ya ba ku kwalbar maganin ƙwari marar label da farashi mai rahusa. Me za ku yi?", options: ["Ku saya; ya fi arha", "Ku haɗa shi da ruwa ku gwada", "Ku ƙi shi ku sayi magani mai rajista da aka rufe mai label", "Ku yi amfani da rabin kwalbar"], answer: 2, why: "Ba tare da label ba, ba za ku san mene ne shi ba, yadda ake amfani da shi lafiya, ko yana da rajista." },
            { objective: "O6", q: "A baya kun fesa magani daga rukuni A. Ƙwaron har yanzu yana sama da threshold. Me ya fi kyau?", options: ["Ku sake fesa rukuni A da ninki biyu na yawan", "Ku fesa magani mai rajista daga wani rukuni daban", "Ku haɗa rukuni A da wani magani da kanku", "Ku fesa rukuni A kowace rana"], answer: 1, why: "Canjawa zuwa wani rukuni daban yana rage taurin ƙwari; ninka yawan magani da haɗawa a gida ba su da lafiya kuma sun saɓa wa doka." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yaƙi da ƙwari da ƙarancin guba",
        questions: [
          { objective: "O4", q: "A push-pull, ciyawar da ke kewaye da masara:", options: ["Tana jawo asun stemborer daga masara", "Tana tura asu zuwa cikin masara", "Tana kashe masara", "Tana maye gurbin taki"], answer: 0, why: "Ciyawar kewaye (brachiaria ko napier) tana jawo asun kuma tana kama su." },
          { objective: "O4", q: "Wanne ne hanyar yaƙi da ƙwari ta halitta?", options: ["Maganin ƙwari mai kashe komai", "Magani da aka yi daga ƙwayar bacteria Bt", "Ƙona gona", "Ban ruwa da dare"], answer: 1, why: "Magungunan Bt suna amfani da ƙwayar bacteria don kashe wasu tsutsotsi." },
          { objective: "O5", q: "Wa ke riƙe da jerin magungunan ƙwari masu rajista a Kenya?", options: ["Ofishin hanyoyi na gundumar", "Mai sayar da magungunan gona", "Pest Control Products Board (PCPB)", "Kamfanin iri"], answer: 2, why: "PCPB ce ke yi wa magungunan yaƙi da ƙwari rajista a Kenya." },
          { objective: "O5", q: "A ina za ku sami tsawon lokacin jira tsakanin feshi da girbi?", options: ["Ku tambayi maƙwabci", "Ku yi hasashe daga yanayi", "Kullum kwana ɗaya ne", "A kan label ɗin maganin (lokacin jira kafin girbi)"], answer: 3, why: "Label yana ba da lokacin jira kafin girbi don kowane amfanin gona." },
          { objective: "O6", q: "Me yasa za ku riƙa canja rukunin magungunan ƙwari?", options: ["Don rage saurin da ƙwari ke yin tauri", "Don gona ta yi wani ƙamshi daban", "Domin rukuni ɗaya kullum ya saɓa wa doka", "Don ƙarar da tsohon kaya"], answer: 0, why: "Amfani da rukuni ɗaya akai-akai yana barin ƙwarin da ke tsira masa su yawaita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sarrafa Ƙwari ta Hanyoyi Masu Haɗaka (IPM) da Yaƙi da Ƙwari Ba Tare da Sinadarai ba",
    questions: [
      { objective: "O1", q: "Mene ne matakai huɗu na IPM, bisa jerinsu?", options: ["Feshi, jira, feshi, girbi", "Hana, sa ido, yanke shawara, ɗaukar mataki", "Saya, haɗa, fesa, sayar", "Huɗa, shuka, fesa, ajiye"], answer: 1, why: "IPM yana farawa da hana ƙwari, kuma yana amfani da magungunan ƙwari sai bayan sa ido da yanke shawara." },
      { objective: "O1", q: "Wane mataki ne ke taimakawa hana ƙwari tashi daga gona zuwa gona?", options: ["Shuka a lokaci daban da maƙwabtanku", "Barin tsirran da suka tsiro da kansu", "Shuka a kan lokaci, tare da maƙwabtanku", "Barin ciyawar da ke ɗaukar ƙwari"], answer: 2, why: "Shuka tare ba ya barin gonakin da aka makara da ƙwari za su tafi." },
      { objective: "O1", q: "Me yasa za ku renon 'ya'yan tumatir a wurin reno mai tsabta da raga?", options: ["Don su tafi gona ba tare da Tuta absoluta da farin ƙuda ba", "Don kada su buƙaci ruwa", "Domin raga tana ƙara taki", "Don su yi girma da sauri a cikin duhu"], answer: 0, why: "'Ya'yan shuka masu tsabta da aka rufe da raga suna hana ƙwari isowa tare da amfanin gona." },
      { objective: "O2", q: "Tsirran masara nawa ne hanyar binciken gona a wannan kwas ke dubawa?", options: ["5", "10", "100 a ƙofar gona", "50: tsirrai 10 a wurare 5 a kan hanyar W"], answer: 3, why: "Wurare biyar na tsirrai 10 a kan hanyar W suna ba da hoto mai adalci na gonar." },
      { objective: "O2", q: "Wata tsutsa tana da Y mai juyewa a kanta da ɗigo baƙi huɗu masu siffar murabba'i kusa da wutsiyarta. Ita ce:", options: ["Fall armyworm", "'Yar ladybird", "Tuta absoluta", "Lacewing"], answer: 0, why: "Waɗannan alamomi suna gane tsutsar fall armyworm." },
      { objective: "O2", q: "Wanne daga cikin waɗannan abokin gaban ƙwari ne da ya kamata ku rubuta ku kare?", options: ["Asun fall armyworm", "Farin ƙuda (whitefly)", "Ladybird", "Striga"], answer: 2, why: "Ladybird yana cin aphids da sauran ƙananan ƙwari." },
      { objective: "O2", q: "Kun sami lalacewar da ba ku iya gane ta ba. Mataki mafi kyau na gaba shi ne:", options: ["Ku fesa magani mafi ƙarfi da kuke da shi", "Ku ɗauki hotonta ku tambayi jami'in faɗakarwa ko asibitin tsirrai", "Ku yi watsi da ita", "Ku ƙona gonar gaba ɗaya"], answer: 1, why: "Gane matsalar daidai yana zuwa kafin kowane yaƙi da ƙwari." },
      { objective: "O3", q: "Kun duba tsirrai 40, kuma 10 suna da ƙwari. Kashi nawa ne?", options: ["10%", "40%", "4%", "25%"], answer: 3, why: "10 / 40 x 100 = 25%." },
      { objective: "O3", q: "Daga ina ya kamata threshold ɗinku ya fito?", options: ["Tallar maganin ƙwari", "Jami'in faɗakarwa ko cibiyar bincike, don matakin girman amfanin gonarku", "Lamba mafi girma da za ku iya tunani", "Hasashen maƙwabci"], answer: 1, why: "Threshold ya dogara da matakin girman amfanin gona da binciken yanki." },
      { objective: "O3", q: "Ƙirgarku ta wuce threshold. Me za ku yi?", options: ["Ku ɗauki mataki, farawa da hanya mafi kyau da ba ta sinadarai ba, ku rubuta shi", "Ku jira har lokacin girbi", "Ku daina binciken gona", "Ku sake shuka"], answer: 0, why: "Sama da threshold, mataki yana biya; IPM yana farawa da hanyoyin da ba sinadarai ba." },
      { objective: "O4", q: "Wa ya ƙirƙiro push-pull?", options: ["Kamfanin magungunan ƙwari", "icipe da abokan aiki", "Shagon iri", "Banki"], answer: 1, why: "icipe ce ta ƙirƙiro push-pull tare da abokan aiki a Gabashin Afirka." },
      { objective: "O4", q: "Bayan ƙwari, desmodium a push-pull kuma:", options: ["Yana jawo ƙarin striga", "Yana buƙatar feshi kowace rana", "Yana kashe shanu", "Yana danne striga yana ƙara nitrogen"], answer: 3, why: "Desmodium yana danne striga, yana ƙara nitrogen a ƙasa, kuma abincin dabbobi ne mai kyau." },
      { objective: "O4", q: "Katin manne mai shuɗi ana amfani da shi musamman don kama:", options: ["Thrips", "Tsutsotsin fall armyworm", "Beraye", "Gara"], answer: 0, why: "Katin shuɗi yana jawo thrips; katin rawaya yana jawo farin ƙuda da aphids." },
      { objective: "O4", q: "Me za ku yi da ganyen da Tuta ta haƙa da 'ya'yan da suka lalace da kuka tsinke?", options: ["Ku bar su a ƙasa", "Ku ba da su ga amfanin tumatir na gaba", "Ku sayar da su", "Ku binne su da zurfi ko ku rufe su a jaka a rana"], answer: 3, why: "Idan aka bar su a ƙasa, tsutsotsin da ke ciki suna gama girma su sake kai hari." },
      { objective: "O5", q: "A Najeriya, wace hukuma ce ke yi wa magungunan ƙwari rajista?", options: ["Babban Bankin Najeriya", "Hukumar Kula da Yanayi ta Najeriya (NiMet)", "NAFDAC", "Majalisar iri"], answer: 2, why: "NAFDAC ce ke yi wa magungunan ƙwari rajista a Najeriya." },
      { objective: "O5", q: "Wace ce dokar kayan kariya daidai?", options: ["Ku sa abin da label ya lissafa, kamar safar hannu, takalman roba, dogon hannu, kariyar ido da takunkumi", "Gajeren wando ya isa a ranakun zafi", "Safar hannu na mata ne kawai", "Kayan kariya na manyan gonaki ne kawai"], answer: 0, why: "Label yana lissafa kayan kariyar da ake buƙata don wannan maganin." },
      { objective: "O5", q: "A ina bai kamata ku taɓa ajiye maganin ƙwari ba?", options: ["A kwantenarsa ta asali", "A rumbun da aka kulle", "A kwalbar lemo ko ta ruwa", "Nesa da abinci da yara"], answer: 2, why: "Maganin ƙwari a kwalaben abin sha yana haddasa guba da yawa." },
      { objective: "O6", q: "Ƙwaro ba ya mutuwa daga maganin da a da yake aiki. Ana kiran wannan:", options: ["Juyawa (rotation)", "Taurin ƙwari (resistance)", "Threshold", "Haɗuwar fure (pollination)"], answer: 1, why: "Taurin ƙwari yana tasowa idan ana amfani da rukunin sinadari ɗaya akai-akai." },
      { objective: "O6", q: "Wace al'ada ce ke hanzarta taurin ƙwari?", options: ["Canja rukunoni", "Feshi sai idan an wuce threshold", "Ajiye bayanan feshi", "Fesa magani ɗaya kowane 'yan kwanaki"], answer: 3, why: "Amfani da rukuni ɗaya akai-akai yana barin ƙwarin da ke tsira masa su yawaita." },
      { objective: "O6", q: "Me ya kamata ya kasance a bayanan feshi?", options: ["Kwanan wata, sunan magani, rukuni, yawan amfani, gona da ranar da girbi zai halatta", "Farashi kawai", "Yanayi kawai", "Babu komai; ba a buƙatar bayanai"], answer: 0, why: "Waɗannan bayanai suna ba ku damar canja rukunoni da mutunta lokacin jira kafin girbi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na shirin ku sake duba shi tare da jami'in faɗakarwa.",
    criteria: [
      { name: "Hana ƙwari", objective: "O1", notYet: "Babu matakan hana ƙwari, ko \"feshi da wuri\" kawai.", meets: "Aƙalla matakan hana ƙwari uku da suka dace da amfanin gonar (iri, juya amfanin gona, lokaci, tsafta ko gefen gona).", exceeds: "An sa matakan hana ƙwari a kalanda kuma an yarda da maƙwabta, kamar shuka tare." },
      { name: "Tsarin binciken gona", objective: "O2", notYet: "Binciken gona \"sai idan na ga lalacewa\", ba tare da ƙirgar tsirrai ba.", meets: "Rana a kowane mako, hanyar W, adadin tsirrai da aka ƙayyade da takardar rubutu mai ginshiƙai don ƙwari da abokan gaban ƙwari.", exceeds: "Ya haɗa da hotunan manyan ƙwari da abokan gaban ƙwari don gane su, kuma an yi amfani da takardar aƙalla makonni biyu." },
      { name: "Threshold da shawarwari", objective: "O3", notYet: "Babu threshold; ana ɗaukar mataki saboda al'ada.", meets: "Threshold daga jami'in faɗakarwa don kowane babban ƙwaro, tare da rubutaccen hanyar lissafin kashi cikin ɗari.", exceeds: "An jera threshold bisa matakin girman amfanin gona, kuma an haɗa misalin lissafi daga ƙirgar mai koyo da kansa." },
      { name: "Hanyoyin da ba sinadarai ba da farko", objective: "O4", notYet: "Maganin ƙwari ne hanya ta farko kuma kaɗai.", meets: "An tsara aƙalla hanyoyi biyu da ba sinadarai ba (push-pull, tarkuna, tsinke da hannu, abokan gaban ƙwari, magungunan halitta ko na tsirrai) kafin kowane maganin ƙwari.", exceeds: "An riga an kafa hanyoyin da ba sinadarai ba, kamar tarkuna a rataye ko filin push-pull da aka shuka." },
      { name: "Mataki na ƙarshe lafiya kuma bisa doka", objective: "O5", notYet: "Ba a duba maganin ba, ko shirin ya tsallake label ko PPE.", meets: "An duba maganin a jerin hukumar rajista ta ƙasa, kuma shirin yana bin label, yana lissafa PPE kuma yana faɗin lokacin jira kafin girbi daga label.", exceeds: "Ya kuma haɗa da ajiya lafiya, zubar da kwantenonin da babu komai kamar yadda label ya faɗa, da matakan taimakon gaggawa." },
      { name: "Taurin ƙwari da bayanai", objective: "O6", notYet: "Magani ɗaya a duk damina, babu bayanan feshi.", meets: "Bayanan feshi da canjawa tsakanin aƙalla rukunoni biyu.", exceeds: "An tsara canjawar bisa zuriyar ƙwari, kuma bayanai sun haɗa da kuɗin kowace hanyar yaƙi da ƙwari." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce suna binciken gona kowane mako kuma suna ajiye bayanan ƙwari bayan kwanaki 30 (binciken biyo baya)",
      "Ƙarancin feshin magungunan ƙwari a kowace damina da masu koyo suka ruwaito, tare da girbi ya tsaya ko ya inganta",
      "Masu koyo da suka kafa aƙalla hanya ɗaya da ba ta sinadarai ba (push-pull, tarkuna, magungunan halitta) cikin damina ɗaya",
      "Ƙarancin rahotannin guba daga magungunan ƙwari ko kayan da masu saye suka ƙi daga ƙungiyoyin masu koyo (ra'ayoyin jami'an faɗakarwa da masu saye)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya (kyamara tana taimakawa) ko littafin rubutu da alƙalami don bayanan binciken gona",
      "Damar zuwa gona mai amfanin gona, zai fi kyau masara, dawa ko tumatir",
      "Na zaɓi: gilashin ƙara girma (hand lens), tarkon pheromone da katunan manne don nuna wa ƙungiyar",
      "Lambobin tuntuɓar jami'in faɗakarwa na yanki ko asibitin tsirrai, da shafin intanet na hukumar rajistar magungunan ƙwari ta ƙasa",
      "Kusan minti 60 zuwa 90 gaba ɗaya don darussa, ƙananan gwaje-gwaje da jarabawa, tare da binciken gona na kowane mako"
    ],
    facilitatorNotes: [
      "Ku gudanar da kwas ɗin a matsayin makarantar manoma a gona (farmer field school) idan za ku iya: ku yi gwajin farko tare, sannan ku binciki gona ta gaske a matsayin ƙungiya bayan Darasi na 2 da na 3.",
      "Ku kawo samfura na gaske ko hotunan fall armyworm, Tuta absoluta da abokan gaban ƙwari don masu koyo su yi atisayen gane su.",
      "Ku samo threshold na yanki daga hukumar faɗakarwa ko cibiyar bincike kafin zaman; kada ku ƙirƙiro su.",
      "Kada ku taɓa ba da shawarar sunan maganin ƙwari, yawan amfani ko lokacin jira kafin girbi; ku nuna wa masu koyo yadda ake karanta label da jerin hukumar rajista maimakon haka.",
      "Kada ku taɓa magungunan ƙwari a zaman ba tare da cikakken PPE ba; ku yi amfani da kwantena mara komai, mai tsabta mai label don atisayen karanta label.",
      "Ku ba da maki ga shirin IPM na ƙarshe da ma'aunin rubric, kuma ku yarda kan gyara ɗaya ga kowane mai koyo don damina mai zuwa."
    ]
  }
};
