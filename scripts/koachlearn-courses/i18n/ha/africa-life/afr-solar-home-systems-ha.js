"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-solar-home-systems.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const VERASOL = { name: "VeraSol: tabbatar da ingancin kayan sola marasa layin wutar lantarki, mai zaman kansa (magajin Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "Rumbun bayanan kayayyaki na VeraSol: nemo kayan sola da aka tabbatar da ingancinsu", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA: Tsaro game da batirin lithium-ion (alamun gargaɗi; kada a jefa a bola, a sake sarrafa shi)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA: Kare masu saye a harkar sola marar layin wutar lantarki (sayarwa da hankali, gaskiya, adalci, hidima mai kyau, inganci)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Hukumar Kula da Makamashi da Man Fetur (EPRA), Kenya: makamashi mai sabuntuwa da lasisi", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "Bayanin WHO: Sharar kayan lantarki (e-waste), har da haɗarin ƙonawa da zubarwa", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems-ha",
  lang: "ha",
  translationOf: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Sola na Gida: Girkawa, Sayarwa da Kasuwancin Wutar Lantarki Marar Layi",
  skills: "Sanin sassan sola na gida da duba inganci, Auna girman sola daga amfanin wuta na kullum, Girka ƙaramin sola na DC lafiya, Kula da sola da gano matsala, Sayarwa da gaskiya da kuɗi hannu ko biya-sannu-a-hankali",
  outcome: "taimaka wa gida ya zaɓi, ya girka, kuma ya kula da ƙaramin sola na gida: duba cewa an tabbatar da ingancin kayan, auna girmansa daga amfanin wutar gidan na kullum, girka shi lafiya, sa shi ya ci gaba da aiki, da sayar da shi da gaskiya da farashi da sharuɗɗa a sarari.",
  about: [
    "Wannan kwas na matasa ne, mataimakan masu wayar lantarki, masu shaguna da wakilan sayarwa a faɗin Afirka da ke son samun kuɗi daga ƙananan sola marasa layin wutar lantarki: fitilu, cajin waya, rediyo, ƙaramin TV ko fanka ga gidaje da rumfuna da ba su da ingantacciyar wutar lantarki, a ƙauyukan Kenya, arewacin Najeriya, Upper East na Ghana, Casamance na Senegal, ko Far North na Kamaru.",
    "Babi na 1 yana bayanin yadda sola na gida yake aiki: sassansa da yadda ake duba inganci, yadda ake auna girman sola daga abin da iyali ke amfani da shi kowace rana, da yadda ake girka ƙaramin sola lafiya. Babi na 2 game da kula da shi da gudanar da kasuwanci ne: kulawa da gano matsala, sayarwa da kuɗi hannu ko biya-sannu-a-hankali, da rubuta ƙiyasin farashi (quote) na gaskiya.",
    "Wannan kwas na ƙananan sola na gida ne kawai. Ba ya koyar da aiki a layin wutar lantarki (grid), wayoyin wutar gida (mains) ko manyan sola; waɗannan suna buƙatar ma'aikacin lantarki mai lasisi. Wasu ƙasashe suna ba da lasisi ga masu aikin sola, don haka ku tambayi hukumar makamashin ƙasarku. Duk lissafin girma da farashi misalai ne. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki. Akwai ƙananan tambayoyi bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta ƙiyasin farashi (quote) ga gida ɗaya na gaske ko na misali (misali iyali mai mutum biyar a Kitui, Kenya, ko rumfa a Kaolack, Senegal): tebur na abin da suke son kunnawa da watt da awanni kowace rana, jimillar makamashin kowace rana, girman faranti da batirin da kuka zaɓa da yadda kuka lissafa, kayan sola da aka tabbatar daga rumbun bayanan VeraSol ko kayan da ke da garanti a sarari, jerin matakan tsaro na girkawa, farashin kuɗi hannu da duk wani sharaɗin biya-sannu-a-hankali tare da jimillar da mai saye zai biya, da katin kulawa da garanti ga mai saye.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa, mataimakan masu wayar lantarki, masu shaguna da wakilan sayar da sola a garuruwa da ƙauyuka a faɗin Afirka (Kenya, Najeriya, Ghana, Senegal, Kamaru, Moroko da sauransu) da ke sayarwa, girkawa ko son fara ƙaramin kasuwancin sola.",
    startingPoint: "Da yawa sun ga fitilun sola da kayan sola, wasu ma suna sayar da su. Kaɗan ne za su iya auna girman sola daga amfanin wutar gida, duba ko an tabbatar da ingancin kaya, girka ƙaramin sola lafiya, gano matsaloli masu sauƙi, ko bayyana sharuɗɗan biya-sannu-a-hankali da gaskiya.",
    gap: "Sola da ya yi ƙanƙanta ko na bogi yana lalacewa da sauri, masu saye kuma su yi asarar kuɗi da amincewa; girkawa marar kyau tana jawo gobarar batir da shoti; sharuɗɗan biya-sannu-a-hankali marasa sarari suna jefa iyalai cikin bashi. Mai girkawa da mai sayarwa da aka horar, mai gaskiya, yana samun masu saye da ke dawowa kuma yana taimaka wa iyalai su sami haske da wuta mai tsabta, abin dogaro.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; lissafi mai sauƙi (ninkawa, haɗawa, rabawa), da bayanin kowace kalmar fasaha",
      "Na'urori: waya mai sauƙi mai na'urar lissafi (calculator); data na da tsada, don haka binciken rumbun bayanai gajere ne",
      "Iyaka da tsaro: ƙananan sola na gida kawai; babu layin wutar lantarki, wayoyin wutar gida ko manyan sola; dokokin lasisi sun bambanta a kowace ƙasa kuma masu koyo suna tambayar hukumar makamashinsu",
      "Kuɗi: farashi da lissafin girma misalai ne; babu shawarar zuba jari; ana bayyana sharuɗɗan biya-sannu-a-hankali da gaskiya",
      "An kuma fassara kwas ɗin zuwa Faransanci da Larabci, don haka misalai sun haɗa da masu saye masu jin Faransanci da na Arewacin Afirka"
    ],
    prerequisites: "Lissafi na asali. Ba a buƙatar horon lantarki don farawa; amma ya kamata a yi atisayen girkawa da hannu tare da gogaggen mai girkawa."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku kayan sola na gida", action: "faɗin sunan kowane sashe (faranti, charge controller, batir, inverter, fitilu da kayan aiki) da duba ko an tabbatar da kayan a rumbun bayanan VeraSol", standard: "kuna faɗin sunayen dukkan sassan daidai kuma kuna rubuta sakamakon tabbatarwar" },
    { id: "O2", condition: "Idan aka ba ku jerin abin da gida ke son kunnawa", action: "lissafa makamashin da ake buƙata kowace rana a watt-hour da zaɓar girman faranti da batir", standard: "da lissafi daidai da ƙarin abin da ake rasawa a hanya" },
    { id: "O3", condition: "Idan kuna girka ƙaramin sola na gida na DC", action: "bin jerin matakan tsaro na wurin faranti, wayoyi, fiyus da wurin batir", standard: "ba tare da tsallake mataki ba kuma ba tare da aiki a layin wutar lantarki ko wayoyin wutar gida ba" },
    { id: "O4", condition: "Idan sola ba ya aiki da kyau", action: "yin kulawa ta yau da kullum da gano matsaloli masu sauƙi mataki-mataki", standard: "kuna duba faranti, haɗin wayoyi, controller da batir bisa tsari" },
    { id: "O5", condition: "Idan kuna sayar da sola ga mai saye", action: "rubuta ƙiyasin farashi na gaskiya mai farashin kuɗi hannu, duk wani sharaɗin biya-sannu-a-hankali, jimillar kuɗi da garanti", standard: "ta yadda mai saye zai iya faɗin jimillar da zai biya kafin ya sa hannu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda sola na gida yake aiki",
      lessons: [
        {
          title: "Sassan sola na gida, da inganci",
          objectives: ["O1"],
          minutes: 5,
          goal: "Faɗi sunayen sassan sola na gida kuma ku duba ko an tabbatar da ingancin kayan.",
          text: [
            "Sola na gida yana mayar da hasken rana zuwa wutar lantarki don gida ko ƙaramin shago. Yana da manyan sassa biyar. Farantin sola (panel) yana yin wuta daga hasken rana da rana. Charge controller yana tura wannan wutar cikin batir lafiya, kuma yana hana batir cika fiye da kima ko ƙarewa da yawa. Batir yana ajiye makamashi don dare. Fitilu da kayan aiki (abubuwan da ke cin wuta) suna amfani da makamashin. Wasu sola suna da inverter, wanda ke mayar da wutar DC ta batir zuwa wutar AC don soket na yau da kullum.",
            "Ƙananan kayan sola da yawa suna zuwa a akwati ɗaya da controller da batir a ciki, tare da fitilun DC, wurin cajin waya, wani lokaci kuma rediyo, TV ko fanka na DC. Kayan aikin DC suna cin wuta ƙasa da na AC da ke amfani da inverter, don haka suna sa ƙaramin sola ya daɗe.",
            "Kayan sola na bogi da marasa inganci suna da yawa. Kafin ku sayar ko ku girka kaya, ku duba ko VeraSol ta tabbatar da shi. VeraSol shirin tabbatar da inganci ne mai zaman kansa da ya fito daga Lighting Global. Rumbun bayanansa na intanet kyauta ne (data.verasol.org) kuma yana lissafa kayan sola da aka tabbatar. Kayan da aka tabbatar an gwada aikinsa na gaske, ƙarfinsa da gaskiyar abin da aka ce game da shi. Idan kaya ba ya cikin jerin, ku nemi garantinsa a rubuce da sakamakon gwaji.",
            "Misali: Fatou a Kaolack, Senegal, tana kwatanta kayan sola biyu masu girma ɗaya. Ɗaya yana cikin rumbun bayanan VeraSol kuma yana da garanti a rubuce; ɗayan ba shi da alama kuma ba shi da garanti. Ta zaɓi wanda aka tabbatar don masu sayenta."
          ],
          words: [["Farantin sola (solar panel)", "faranti mai faɗi da ke yin wutar lantarki daga hasken rana."], ["Charge controller", "ƙaramin akwati da ke cajin batir lafiya kuma yana kare shi."], ["Inverter", "na'urar da ke mayar da wutar DC ta batir zuwa wutar AC don soket na yau da kullum."], ["DC da AC", "DC ita ce wuta mai tsayayyiya daga batir da faranti; AC ita ce wutar layin lantarki da ta yawancin soket na yau da kullum."]],
          slides: [
            { title: "Manyan sassa biyar", bullets: ["Faranti: yana yin wuta daga hasken rana", "Charge controller: yana cajin batir lafiya", "Batir: yana ajiye wuta don dare; kayan aiki suna amfani da ita"] },
            { title: "Inverter da kayan aikin DC", bullets: ["Inverter: DC na batir zuwa AC don soket na yau da kullum", "Fitilu, rediyo, TV, fanka na DC suna cin wuta ƙasa", "Kayan sola da yawa suna zuwa a akwati ɗaya"] },
            { title: "Duba inganci: VeraSol", bullets: ["Shirin inganci mai zaman kansa (daga Lighting Global)", "Rumbun bayanai kyauta: data.verasol.org", "Ba ya cikin jerin? Ku nemi garanti a rubuce da sakamakon gwaji"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Ku duba kayan sola (a shago, a gida, ko hoto a intanet) ku rubuta sunan kowane sashe. Idan kuna da data, ku nemi kaya ɗaya a rumbun bayanan VeraSol ku rubuta ko yana cikin jerin.",
          youCanNow: "faɗin sunan kowane sashe na sola na gida da duba ko an tabbatar da ingancin kaya.",
          quickCheck: [
            { objective: "O1", q: "Wane sashe ne ke hana batir cika fiye da kima?", options: ["Kwan fitila", "Firam ɗin faranti", "Charge controller", "Wayar cajin waya"], answer: 2, why: "Charge controller yana cajin batir lafiya kuma yana kare shi daga cika fiye da kima da ƙarewa da yawa." },
            { objective: "O1", q: "A ina za ku duba ko an tabbatar da ingancin kayan sola?", options: ["Rumbun bayanan kayayyaki na VeraSol", "Launin akwatin", "Maganar mai sayarwa kawai", "Nauyin farantin"], answer: 0, why: "Rumbun bayanai na VeraSol kyauta ne kuma yana lissafa kayan da aka gwada da kansa kuma aka tabbatar." }
          ]
        },
        {
          title: "Auna girman sola daga abin da gida ke amfani da shi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lissafa makamashin da gida ke buƙata kowace rana kuma ku zaɓi girman faranti da batir.",
          text: [
            "Ku auna girman sola daga abin da iyalin ke son kunnawa da gaske. Ga kowane abu, ku ninka ƙarfinsa a watt (W) da awannin da ake amfani da shi kowace rana. Wannan yana ba da watt-hour (Wh) kowace rana. Sannan ku haɗa su duka.",
            "Misali (lambobin misali ne kawai): kwan fitilar LED 3 na 3 W na awa 5 = 45 Wh. Cajin waya 2, kusan 10 Wh kowacce = 20 Wh. Rediyo, 5 W na awa 4 = 20 Wh. TV na DC, 20 W na awa 3 = 60 Wh. Jimilla: 145 Wh kowace rana. Ku ƙara kusan 30% don abin da ake rasawa a wayoyi, controller da batir: kusan 190 Wh kowace rana.",
            "Faranti: ku raba buƙatar kowace rana da awannin rana mai ƙarfi (peak sun hours) a inda mai saye yake zaune (awannin rana mai cikakken ƙarfi a cikin yini). Idan akwai kusan awa 5 na rana mai ƙarfi: 190 / 5 = 38 W. Ku ɗaga zuwa girman faranti na gaba, misali faranti na 50 W. Awannin rana mai ƙarfi suna canjawa da wuri da yanayi; ku duba bayanan yankin ko ku tambayi gogaggen mai girkawa, kuma ku auna don watannin da suka fi gajimare.",
            "Batir: dole ya ɗauki buƙatar dare ɗaya aƙalla. Yawancin batura bai kamata a shanye su gaba ɗaya ba. Ana yawan amfani da batirin lithium zuwa kusan 80%; na lead-acid zuwa kusan 50% (ku duba lambar mai ƙerawa). Don 190 Wh da lithium: 190 / 0.8 = kusan 238 Wh. Don batir na 12 V, ku raba da 12: kusan 20 Ah. Ku ƙara idan iyalin suna son wuta a ranakun gajimare."
          ],
          steps: ["Ku rubuta kowane abu, watt ɗinsa da awanninsa kowace rana.", "Ku ninka watt da awanni ga kowanne, ku haɗa: Wh kowace rana.", "Ku ƙara kusan 30% don abin da ake rasawa.", "Faranti: buƙatar kowace rana / awannin rana mai ƙarfi, sannan ku ɗaga.", "Batir: buƙatar kowace rana / kason da za a iya amfani da shi (misali 0.8), sannan / 12 don amp-hour a 12 V."],
          words: [["Watt (W)", "yawan wutar da abu ke ci a lokaci ɗaya."], ["Watt-hour (Wh)", "makamashin da aka yi amfani da shi: watt an ninka da awanni."], ["Awannin rana mai ƙarfi (peak sun hours)", "yawan awannin rana mai cikakken ƙarfi a cikin yini a wani wuri."], ["Amp-hour (Ah)", "yawan cajin da batir ke ɗauka; Wh = Ah x volt."]],
          slides: [
            { title: "Makamashin da ake buƙata kowace rana", bullets: ["Watt x awanni = Wh ga kowane abu", "Ku haɗa su duka", "Misali: 145 Wh; +30% abin da ake rasawa = kusan 190 Wh"] },
            { title: "Girman faranti", bullets: ["Wh na kowace rana / awannin rana mai ƙarfi", "Misali: 190 / 5 = 38 W: ku zaɓi 50 W", "Ku auna don watannin da suka fi gajimare"] },
            { title: "Girman batir", bullets: ["Kada ku shanye shi gaba ɗaya: lithium kusan 80%, lead-acid kusan 50%", "Misali: 190 / 0.8 = kusan 238 Wh", "A 12 V: 238 / 12 = kusan 20 Ah"] },
            { title: "Lambobin misali ne", bullets: ["Ku duba watt na kowane kaya a alamarsa", "Ku duba awannin rana na yankinku", "Ku duba lambobin mai ƙera batir"] }
          ],
          tryIt: "Ku yi teburin makamashi na gidanku ko na maƙwabci: kowane abu, watt, awanni, Wh. Ku haɗa jimilla, ku ƙara 30%, sannan ku lissafa girman faranti da batir ta bin matakan.",
          youCanNow: "lissafa makamashin da gida ke buƙata kowace rana da zaɓar girman faranti da batir da ya dace da shi.",
          quickCheck: [
            { objective: "O2", q: "Ana amfani da kwan fitila na 4 W na awa 6 a rana. Watt-hour nawa ke nan?", options: ["10 Wh", "2 Wh", "46 Wh", "24 Wh"], answer: 3, why: "4 W x awa 6 = 24 Wh." },
            { objective: "O2", q: "Gida yana buƙatar 200 Wh a rana kuma akwai awa 5 na rana mai ƙarfi. Mene ne mafi ƙanƙantar girman faranti daga lissafin?", options: ["40 W", "1,000 W", "5 W", "200 W"], answer: 0, why: "200 / 5 = 40 W; sannan ku ɗaga zuwa girman faranti na gaba da ake samu." }
          ]
        },
        {
          title: "Girka ƙaramin sola lafiya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ku girka ƙaramin sola na gida na DC ta bin jerin matakan tsaro.",
          text: [
            "Faranti: ku sa shi inda yake samun cikakken hasken rana mafi yawan yini, ba tare da inuwar bishiyoyi, katanga ko wayoyi ba. Ku fuskantar da shi zuwa ga ma'aunin duniya (equator): a ƙasashen arewacin equator, ku fuskantar da shi kudu; a kudancin equator, ku fuskantar da shi arewa. Ku karkatar da shi kaɗan aƙalla, don ruwan sama ya wanke ƙura. Ku ɗaure shi da ƙarfi don iska kada ta ɗaga shi. A kan rufi, ku yi amfani da tsani mai aminci, wani ya riƙe muku shi, kuma kada ku taɓa aiki lokacin ruwan sama ko iska.",
            "Batir: ku ajiye shi a cikin gida, a wuri busasshe, mai inuwa kuma mai iska, ba a ƙasa ba, nesa da hannun yara, kuma nesa da wutar girki. Batirin lead-acid yana fitar da iskar gas mai kama wuta lokacin caji kuma yana da acid: ku ba shi iska, ku sa abin kare ido da safar hannu, kuma ku nisanta wuta. Shoti (short circuit) tsakanin kan batir biyu yana iya narkar da wayoyi ya tayar da gobara.",
            "Wayoyi: ku yi amfani da girman wayar da mai ƙera kayan ya bayar, ku sa ja zuwa tabbatacce (+) da baƙi zuwa korau (-), kuma ku sa fiyus ko breaker da mai ƙerawa ya bayar, kusa da batir. Ga yawancin kayan da ke da controller daban, ku fara haɗa batir da controller, sannan faranti, sannan kayan aiki; ku bi littafin jagorar mai ƙerawa idan ya faɗi wani abu daban. Ku ɗaure wayoyi don kada a ja su ko a tauna su.",
            "Iyaka: wannan kwas na ƙananan sola na DC ne kawai. Kada ku taɓa haɗa sola da layin wutar lantarki (grid) ko wayoyin wutar gida (mains), kuma kada ku taɓa buɗe inverter. Waɗannan ayyuka suna buƙatar ma'aikacin lantarki mai lasisi. Wasu ƙasashe suna ba da lasisi ga masu aikin sola; a Kenya, ku tambayi EPRA, a wasu wurare kuma hukumar makamashin ƙasarku."
          ],
          steps: ["Ku zaɓi wuri mai rana, marar inuwa; ku fuskantar da faranti zuwa equator da ɗan karkata; ku ɗaure shi da ƙarfi.", "Ku yi aiki a sama kawai da tsani mai aminci da mai taimako; kada ku taɓa yi lokacin ruwan sama ko iska.", "Ku ajiye batir a cikin gida: busasshe, mai inuwa, mai iska, ba a ƙasa ba, nesa da yara da wuta.", "Ku yi amfani da wayar da ta dace, ja zuwa +, baƙi zuwa -, kuma ku sa fiyus kusa da batir.", "Ku fara haɗa batir da controller, sannan faranti, sannan kayan aiki, sai dai idan littafin jagora ya faɗi wani abu daban.", "Babu haɗi da grid ko wayoyin wutar gida; babu buɗe inverter."],
          words: [["Polarity (tabbatacce da korau)", "wace waya ce tabbatacciya (+) kuma wace ce korau (-). Kuskure a nan yana iya lalata sassa."], ["Fiyus (fuse)", "ƙaramin sashe na tsaro da ke yanke hanyar wuta idan wuta ta yi yawa."], ["Mai iska (ventilated)", "iska mai tsabta tana shiga tana fita, don kada gas ya taru."]],
          slides: [
            { title: "Wurin faranti", bullets: ["Cikakken hasken rana, babu inuwa", "Ku fuskanci equator: kudu idan kuna arewacinsa, arewa idan kuna kudancinsa", "Ɗan karkata; ɗaure da ƙarfi; tsani mai aminci da mai taimako"] },
            { title: "Wurin batir", bullets: ["A cikin gida: busasshe, mai inuwa, mai iska, ba a ƙasa ba", "Nesa da yara da wutar girki", "Lead-acid: acid da gas; abin kare ido, safar hannu, babu wuta"] },
            { title: "Wayoyi", bullets: ["Wayar da ta dace; ja +, baƙi -", "Fiyus kusa da batir", "Batir da controller da farko, sannan faranti, sannan kayan aiki (ko yadda littafi ya ce)"] },
            { title: "Iyakarku", bullets: ["Ƙananan sola na DC kawai", "Kada ku taɓa grid ko wayoyin wutar gida; kada ku buɗe inverter", "Lasisi: Kenya EPRA; a wasu wurare hukumar makamashinku"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Ku rubuta jerin matakan tsaro na girkawa mai layuka takwas aƙalla daga wannan darasi. Idan za ku iya, ku zagaya wani gida ku zaɓi wuri mafi kyau don faranti da batir, ku rubuta dalili.",
          youCanNow: "girka ƙaramin sola na gida na DC lafiya ta bin jerin matakai, da sanin ayyukan da za ku bar wa ma'aikacin lantarki mai lasisi.",
          quickCheck: [
            { objective: "O3", q: "Gidan wani mai saye yana Nairobi, ɗan kudu da equator. Ina faranti zai fuskanta?", options: ["Kudu", "Ƙasa kai tsaye", "Arewa, zuwa ga equator", "Cikin inuwa"], answer: 2, why: "Faranti suna fuskantar equator; a kudancinsa, wannan yana nufin fuskantar arewa." },
            { objective: "O3", q: "Wani mai saye ya ce ku haɗa kayan solarsa da wayoyin wutar lantarki na gidansa. Me za ku yi?", options: ["Ku yi da sauri", "Ku ƙi: aikin grid da wayoyin wutar gida yana buƙatar ma'aikacin lantarki mai lasisi", "Ku yi da dare", "Ku fara buɗe inverter"], answer: 1, why: "Wannan kwas na ƙananan sola na DC ne kawai; aikin grid da wayoyin wutar gida yana buƙatar ma'aikacin lantarki mai lasisi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda sola na gida yake aiki",
        questions: [
          { objective: "O1", q: "Me inverter yake yi?", options: ["Yana ajiye wuta", "Yana yin wuta daga hasken rana", "Yana auna hasken rana", "Yana mayar da wutar DC ta batir zuwa wutar AC don soket na yau da kullum"], answer: 3, why: "Inverter yana mayar da DC zuwa AC." },
          { objective: "O1", q: "Me yasa za ku zaɓi kayan da ke cikin rumbun bayanan VeraSol?", options: ["An gwada aikinsa, ƙarfinsa da gaskiyar abin da aka ce game da shi ta hanya mai zaman kanta", "Shi ne koyaushe mafi arha", "Ba ya taɓa buƙatar kulawa", "Yana aiki ba tare da rana ba"], answer: 0, why: "VeraSol tana tabbatar da kaya bayan gwaji mai zaman kansa." },
          { objective: "O2", q: "Gida yana buƙatar 120 Wh a rana kafin abin da ake rasawa. Kusan nawa idan aka ƙara 30%?", options: ["90 Wh", "150 Wh", "156 Wh", "360 Wh"], answer: 2, why: "120 x 1.3 = 156 Wh." },
          { objective: "O2", q: "Me yasa bai kamata a shanye batirin lithium gaba ɗaya kowane dare ba?", options: ["Yana sa fitilu su fi haske", "Na rana ne kawai", "Ya saɓa wa doka", "Shanye shi gaba ɗaya yana rage tsawon rayuwarsa, don haka ana auna don amfani da kusan 80%"], answer: 3, why: "Barin wani caji a batir yana kare shi, don haka auna girma yana la'akari da kason da za a iya amfani da shi." },
          { objective: "O3", q: "A ina ya kamata fiyus ya kasance?", options: ["Kusa da batir, yadda mai ƙerawa ya ce", "A kan rufi", "Cikin kwan fitila", "Ko'ina, ko kada a sa shi kwata-kwata"], answer: 0, why: "Fiyus kusa da batir yana kare wayoyi daga shoti a wurin batir." }
        ]
      }
    },
    {
      name: "Babi na 2: Sa sola ya ci gaba da aiki da gudanar da kasuwancin sola",
      lessons: [
        {
          title: "Kulawa da gano matsaloli masu sauƙi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ku yi kulawa ta yau da kullum kuma ku gano matsaloli masu sauƙi mataki-mataki.",
          text: [
            "Sola da aka kula da shi da kyau yana ɗaukar shekaru. Ku koya wa mai saye: ya wanke faranti da ruwa da tsumma mai laushi idan ya yi ƙura, da sassafe ko da yamma lokacin da yake sanyi (kada a yi amfani da sabulu da ke barin wani mayafi a kai, kuma kada a taɓa tsayawa a kansa). Ya sare sabuwar inuwar bishiyoyi. Ya kiyaye batir da tsabta kuma a bushe. Ya kashe kayan aikin da ba a buƙata.",
            "Idan mai saye ya ce \"fitilu suna mutuwa da wuri\", ku duba bisa tsari: (1) Faranti: yana da datti ko inuwa yanzu? (2) Haɗin wayoyi: akwai waya ko soket da ya saki, ya karye ko ya yi tsatsa? (3) Controller: me fitilunsa ko allonsa ke nunawa? Ku karanta littafin jagora don ma'anarsu. (4) Batir: ya tsufa, ya kumbura, yana zafi ko yana zubar da ruwa? (5) Kayan aiki: iyalin sun ƙara babban TV ko ƙarin kwan fitila fiye da yadda aka auna sola?",
            "Yawancin matsaloli datti ne, inuwa, soket da ya saki ko ƙarin kayan aiki. Batir da ya kumbura, yana zafi sosai ko yana zubar da ruwa dole a canja shi; kada a taɓa caji ko buɗe shi. Tsofaffin batura sharar kayan lantarki (e-waste) ne: kada a taɓa ƙona su, binne su ko zubar da su, ku ba da su ga mai tattarawa da aka amince da shi ko shirin karɓar tsohon kaya (take-back) na kamfanin kayan.",
            "Misali: Chinedu a Kano ya sami kira cewa fitilu suna mutuwa kafin ƙarfe 8 na dare. Ya gano sabon reshen bishiya yana yi wa faranti inuwa, kuma an ƙara TV na biyu. Ya sare reshen da izinin mai gidan kuma ya bayyana girman sola; iyalin suka yanke shawarar ƙara faranti na biyu."
          ],
          steps: ["Ku duba faranti: yana da tsabta kuma babu inuwa?", "Ku duba haɗin wayoyi: ya saki, ya karye ko ya yi tsatsa?", "Ku duba fitilun controller ko allonsa da littafin jagora.", "Ku duba batir: ya tsufa, ya kumbura, yana zafi ko yana zubar da ruwa?", "Ku duba kayan aiki: sun fi yawa ko girma fiye da yadda aka tsara?"],
          words: [["Tsatsa (corrosion)", "ɓawon kore ko fari a kan haɗin ƙarfe da ke hana wuta gudana da kyau."], ["Shirin karɓar tsohon kaya (take-back scheme)", "shirin kamfani na tattara tsofaffin kayayyakinsa don sake sarrafa su lafiya."]],
          slides: [
            { title: "Kulawa ta yau da kullum", bullets: ["Ku wanke faranti da ruwa da tsumma mai laushi lokacin sanyi", "Ku sare sabuwar inuwa; batir da tsabta kuma a bushe", "Ku kashe abin da ba a buƙata"] },
            { title: "Gano matsala bisa tsari", bullets: ["1. Faranti: datti ko inuwa?", "2. Haɗin wayoyi: ya saki ko ya yi tsatsa?", "3. Fitilun controller; 4. Batir; 5. Ƙarin kayan aiki"] },
            { title: "Gargaɗi game da batir", bullets: ["Ya kumbura, yana zafi sosai ko yana zubarwa: ku canja shi", "Kada ku taɓa caji ko buɗe batir da ya lalace", "Tsofaffin batura: mai tattarawa da aka amince ko take-back"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Ku rubuta katin kulawa ga mai saye (layuka huɗu na kulawa ta yau da kullum) da jerin matakai biyar na gano matsala da za ku riƙa ɗauka a kowane kira.",
          youCanNow: "koya wa mai saye yadda zai kula da solarsa da gano matsaloli masu sauƙi bisa tsari daidai.",
          quickCheck: [
            { objective: "O4", q: "Fitilu suna mutuwa da wuri. Mene ne abu na farko da za ku duba?", options: ["Launin batir", "Ko faranti yana da datti ko inuwa", "Wayar mai saye", "Farashin kayan"], answer: 1, why: "Ku fara da faranti: datti da sabuwar inuwa dalilai ne na yau da kullum, masu sauƙi." },
            { objective: "O4", q: "Kun sami batir da ya kumbura kuma yana zafi. Me za ku yi?", options: ["Ku canja shi; kada ku caji ko buɗe shi", "Ku ƙara caji shi", "Ku buɗe shi ku ga ciki", "Ku ƙona shi"], answer: 0, why: "Batir da ya kumbura kuma yana zafi yana da haɗari kuma dole a canja shi lafiya." }
          ]
        },
        {
          title: "Sayarwa da gaskiya: kuɗi hannu da biya-sannu-a-hankali",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ku bayyana farashin kuɗi hannu da sharuɗɗan biya-sannu-a-hankali don mai saye ya iya faɗin jimillar da zai biya.",
          text: [
            "Iyalai da yawa ba za su iya biyan cikakken farashi a lokaci ɗaya ba, don haka kamfanoni da yawa suna sayar da kayan sola ta biya-sannu-a-hankali (PAYGo). Mai saye yana biyan kuɗin farko (deposit), sannan ƙananan biyan kuɗi, sau da yawa kowace rana, kowane mako ko kowane wata ta kuɗin waya (mobile money). Idan biyan kuɗi ya tsaya, kayan yana kullewa har sai an sake biya. Bayan biya na ƙarshe, kayan ya zama na mai saye.",
            "PAYGo yana taimaka wa iyalai su sami sola da wuri, amma jimillar yawanci ta fi farashin kuɗi hannu. Mai sayarwa mai gaskiya yana nuna duka biyun. Misali (lambobin misali ne kawai): farashin kuɗi hannu KES 20,000. PAYGo: kuɗin farko KES 2,000, sannan KES 1,500 kowane wata na wata 18: 2,000 + (1,500 x 18) = KES 29,000 jimilla. Ya kamata mai saye ya iya faɗin wannan jimillar kafin ya sa hannu.",
            "GOGLA, ƙungiyar masana'antar sola marar layin wutar lantarki, tana da ka'idar kare masu saye da aka gina kan sayarwa da farashi da hankali (kada a sayar fiye da abin da iyali zai iya biya), gaskiya (bayani a sarari, na gaskiya), adalci da girmamawa, hidima mai kyau da ingancin kaya. Ku bi ta ko kamfaninku ya sa hannu a kai ko bai sa ba.",
            "Kada ku taɓa yin alƙawarin fiye da abin da sola zai iya kunnawa. Kada ku taɓa neman lambar sirri (PIN) ta kuɗin wayar mai saye; ana biya zuwa lambar hukuma ko till na kamfanin, kuma kamfani na gaske ba ya taɓa neman PIN."
          ],
          steps: ["Ku nuna farashin kuɗi hannu.", "Ku nuna kuɗin farko na PAYGo, girman kowane biya, sau nawa da tsawon lokaci.", "Ku lissafa jimillar kuɗin PAYGo tare da mai saye.", "Ku bayyana abin da ke faruwa idan aka rasa biya, da garanti.", "Ku tabbata mai saye zai iya biyan kuɗaɗen; kada ku taɓa neman PIN."],
          words: [["PAYGo (biya-sannu-a-hankali)", "sayen kayan sola da kuɗin farko da ƙananan biyan kuɗi; yana kullewa idan biya ya tsaya, kuma ya zama naku bayan biya na ƙarshe."], ["Kuɗin farko (deposit)", "biya na farko kafin mai saye ya ɗauki kayan."], ["Kare masu saye", "dokoki da ɗabi'un da ke kula da masu saye da adalci da gaskiya."]],
          slides: [
            { title: "Yadda PAYGo yake aiki", bullets: ["Kuɗin farko, sannan ƙananan biya ta kuɗin waya", "Kayan yana kullewa idan biya ya tsaya", "Mai saye ya mallake shi bayan biya na ƙarshe"] },
            { title: "Ku nuna jimillar", bullets: ["Jimillar PAYGo yawanci ta fi kuɗi hannu", "Misali: 2,000 + 1,500 x 18 = KES 29,000 da KES 20,000 kuɗi hannu", "Mai saye zai iya faɗin jimillar kafin ya sa hannu"] },
            { title: "Ku sayar da adalci (ka'idar GOGLA)", bullets: ["Sayarwa da hankali: abin da za su iya biya kawai", "Gaskiya; adalci da girmamawa", "Hidima mai kyau da inganci"] },
            { title: "Kada ku taɓa", bullets: ["Yin alƙawarin fiye da abin da sola zai iya kunnawa", "Neman PIN na kuɗin waya"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "Ga kayan sola da kuka sani (ko misalin), ku rubuta farashin kuɗi hannu da sharuɗɗan PAYGo gefe da gefe, ku lissafa jimillar kuɗin PAYGo. Ku yi atisayen bayyana shi da baki cikin ƙasa da minti ɗaya.",
          youCanNow: "bayyana farashin kuɗi hannu da na biya-sannu-a-hankali da gaskiya don mai saye ya san jimillar kafin ya sa hannu.",
          quickCheck: [
            { objective: "O5", q: "Kuɗin farko na PAYGo XOF 10,000, sannan XOF 5,000 kowane wata na wata 12. Nawa ne jimillar?", options: ["XOF 15,000", "XOF 60,000", "XOF 50,000", "XOF 70,000"], answer: 3, why: "10,000 + (5,000 x 12) = 70,000." },
            { objective: "O5", q: "Wanne ne sayarwa da gaskiya?", options: ["Ɓoye jimillar kuɗin PAYGo", "Yin alƙawarin kayan zai kunna firiji alhali ba zai iya ba", "Nuna farashin kuɗi hannu da jimillar PAYGo gefe da gefe", "Sayar wa iyali fiye da abin da za su iya biya"], answer: 2, why: "Gaskiya tana nufin nuna farashin biyu a sarari." }
          ]
        },
        {
          title: "Rubuta ƙiyasin farashi da gudanar da kasuwancin sola",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Ku rubuta cikakken ƙiyasin farashi na gaskiya ga gida ɗaya.",
          text: [
            "Ƙiyasin farashi (quote) mai kyau yana sa a amince da ku. Yana nuna wa mai saye abin da ya nemi a kunna, teburin makamashi, sola da kuka zaɓa da dalili, farashi, sharuɗɗan biya da garanti. Yana kuma ɗauke da sunanku da lambar wayarku, da kwanan wata.",
            "Farashinku na girkawa dole ya rufe kayan sola, wayoyi da kayan haɗi, sufuri zuwa gidan, lokacinku, da riba. Misali (lambobin misali ne kawai): kayan sola MAD 2,500, wayoyi da kayan haɗi MAD 300, sufuri MAD 150, aiki MAD 400: kuɗin da aka kashe MAD 3,350. Ku ƙara ribar MAD 400: MAD 3,750.",
            "Bayan girkawa, ku ba mai saye kati: matakan kulawa, ma'anar fitilun controller, garanti, da lambarku don matsaloli. Ku dawo bayan wata ɗaya don dubawa. Masu saye da suka gamsu suna turo maƙwabta; haka kasuwancin sola ke girma a ƙauyuka daga Kitui zuwa Kaolack.",
            "Ku riƙe bayani mai sauƙi na kowane aiki: mai saye, kayan sola da lambar serial ɗinsa, kwanan wata, farashi da duk wani komawa gyara. Yana taimaka muku cika garanti da ganin waɗanne kaya ne ke lalacewa."
          ],
          steps: ["Ku rubuta teburin makamashi da lissafin girman da kuka yi.", "Ku faɗi sunan kayan sola, da ko an tabbatar da shi ko yana da garanti a rubuce.", "Ku ƙara jerin matakan tsaronku.", "Ku nuna farashin kuɗi hannu da duk wani sharaɗin PAYGo tare da jimilla.", "Ku haɗa katin kulawa da garanti, da sunanku, lambarku da kwanan wata."],
          words: [["Ƙiyasin farashi (quote)", "tayin rubutacce da ke nuna abin da za ku kawo da abin da za ku yi, da farashi."], ["Lambar serial", "lamba ta musamman a kan kaya, da ake amfani da ita don garanti."], ["Komawa gyara (call-back)", "dawowa don gyara matsala bayan girkawa."]],
          slides: [
            { title: "Abin da ƙiyasin farashi ke nunawa", bullets: ["Abin da suke son kunnawa: teburin makamashi", "Sola da dalili; an tabbatar ko garanti", "Farashi, sharuɗɗa, garanti; sunanku, lambarku, kwanan wata"] },
            { title: "Farashinku na girkawa", bullets: ["Kayan sola + wayoyi + sufuri + aiki + riba", "Misali: kuɗin da aka kashe MAD 3,350 + MAD 400 = MAD 3,750", "Lambobin misali ne kawai"] },
            { title: "Bayan aikin", bullets: ["Katin kulawa da garanti", "Ku sake ziyarta bayan wata ɗaya", "Bayani: mai saye, kaya, lambar serial, kwanan wata, farashi"] }
          ],
          tryIt: "Ku rubuta cikakken ƙiyasin farashinku ga gida ɗaya, yadda aka bayyana a aikin ƙarshe. Ku karanta shi ga aboki ku tambaye shi ya faɗa muku jimillar da zai biya.",
          youCanNow: "rubuta cikakken ƙiyasin farashi na gaskiya don sola na gida da riƙe bayanai masu kyau na kowane aiki.",
          quickCheck: [
            { objective: "O5", q: "Wane abu ne ya kamata ya kasance a kowane ƙiyasin farashi?", options: ["PIN na kuɗin wayar mai saye", "Jimillar da mai saye zai biya, da garanti", "Alƙawarin wuta kyauta har abada", "Farashin abokin hamayyarku kawai"], answer: 1, why: "Jimillar kuɗi da garanti suna bar mai saye ya yanke shawara da adalci." },
            { objective: "O2", q: "Me yasa za a sa teburin makamashi a cikin ƙiyasin farashi?", options: ["Yana nuna yadda kuka auna sola daidai da ainihin amfanin iyalin", "Don ƙiyasin ya yi tsawo", "Masu saye suna son lambobi", "Ba a buƙatar sa"], answer: 0, why: "Teburin yana nuna cewa sola ya dace da abin da iyalin za su kunna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kula da sola da sayarwa",
        questions: [
          { objective: "O4", q: "Yaya mai saye zai wanke faranti mai ƙura?", options: ["Da sabulu da tsakar rana", "Ta tsayawa a kansa yana gogewa", "Da ruwa da tsumma mai laushi lokacin da yake sanyi", "Da yashi"], answer: 2, why: "Ruwa da tsumma mai laushi, lokacin sanyi, suna wankewa ba tare da lalacewa ba." },
          { objective: "O4", q: "Fitilu suna mutuwa da wuri kuma faranti yana da tsabta babu inuwa. Me za ku duba a gaba?", options: ["Tashar TV ta mai saye", "Haɗin wayoyi: wayoyin da suka saki, suka karye ko suka yi tsatsa", "Hasashen yanayi", "Babu komai kuma"], answer: 1, why: "Haɗin wayoyi ne na gaba a tsarin gano matsala." },
          { objective: "O4", q: "Me ya kamata a yi da tsohon batirin sola?", options: ["A ƙona shi", "A binne shi", "A jefa shi cikin kogi", "A ba da shi ga mai tattarawa da aka amince da shi ko shirin take-back"], answer: 3, why: "Tsofaffin batura sharar kayan lantarki ne kuma suna buƙatar sake sarrafawa lafiya." },
          { objective: "O5", q: "Me ke faruwa a PAYGo idan biya ya tsaya?", options: ["Kayan yana kullewa har sai mai saye ya sake biya", "Mai saye ya mallake shi nan take", "Faranti ya karye", "Babu abin da ke faruwa"], answer: 0, why: "Kayan PAYGo suna kullewa idan biya ya tsaya, kuma suna buɗewa idan an biya." },
          { objective: "O5", q: "Mai saye zai iya biyan rabin kuɗin kowane wata kawai. Mene ne ma'anar sayarwa da hankali?", options: ["Ku sayar da babban kaya duk da haka", "Ku ɓoye girman kuɗin biya", "Ku ba da ƙaramin kaya ko tsarin da zai iya biya", "Ku nemi PIN ɗinsa"], answer: 2, why: "Sayarwa da hankali tana nufin kada a sayar fiye da abin da iyali zai iya biya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sola na Gida: Girkawa, Sayarwa da Kasuwancin Wutar Lantarki Marar Layi",
    questions: [
      { objective: "O1", q: "Wane sashe ne ke ajiye makamashi don dare?", options: ["Faranti", "Batir", "Fiyus", "Fitila"], answer: 1, why: "Batir yana ajiye makamashi don amfani idan babu rana." },
      { objective: "O1", q: "Mece ce VeraSol?", options: ["Sunan kamfanin batir", "Kamfanin sola da ke sayarwa ta PAYGo", "Shirin inganci mai zaman kansa da ke tabbatar da kayan sola marasa layin wutar lantarki", "Harajin gwamnati"], answer: 2, why: "VeraSol shirin tabbatar da inganci ne mai zaman kansa don sola marar layin wutar lantarki." },
      { objective: "O1", q: "Wani kayan sola ba shi da alama, ba a tabbatar da shi ba, kuma ba shi da garanti. Me za ku yi?", options: ["Ku nemi garanti a rubuce da sakamakon gwaji, ko ku zaɓi kayan da aka tabbatar", "Ku sayar da shi kamar an tabbatar da shi", "Ku sayar da shi da farashi mafi tsada", "Ku girka shi ba tare da faɗa wa kowa ba"], answer: 0, why: "Idan babu shaidar inganci, ku nemi garanti da sakamakon gwaji, ko ku zaɓi kayan da aka tabbatar." },
      { objective: "O1", q: "Me yasa ƙananan kayan sola ke yawan amfani da kayan aikin DC?", options: ["Sun fi ƙara", "Suna buƙatar grid", "Kullum kyauta suke", "Suna cin wuta ƙasa da kayan aikin AC masu amfani da inverter"], answer: 3, why: "Kayan aikin DC suna kauce wa asarar wuta ta inverter kuma suna cin wuta ƙasa." },
      { objective: "O2", q: "Rediyo yana amfani da 5 W na awa 6 a rana. Wh nawa?", options: ["11 Wh", "30 Wh", "56 Wh", "1 Wh"], answer: 1, why: "5 x 6 = 30 Wh." },
      { objective: "O2", q: "Me yasa ake ƙara kusan 30% ga jimillar kowace rana?", options: ["Don abin da ake rasawa a wayoyi, controller da batir", "Don riba", "Don haraji", "Don kuɗin katin wayar mai saye"], answer: 0, why: "Ana rasa makamashi a hanya, don haka dole sola ya yi wuta fiye da abin da kayan aiki ke ci." },
      { objective: "O2", q: "Buƙatar kowace rana 300 Wh, awa 5 na rana mai ƙarfi. Mene ne mafi ƙanƙantar faranti daga lissafin?", options: ["1,500 W", "30 W", "6 W", "60 W"], answer: 3, why: "300 / 5 = 60 W; sannan ku ɗaga zuwa girman faranti na gaba." },
      { objective: "O2", q: "Buƙatar kowace rana 240 Wh, batirin lithium da ake amfani da shi zuwa 80%, 12 V. Kusan amp-hour nawa?", options: ["Kusan 25 Ah", "Kusan 12 Ah", "Kusan 300 Ah", "Kusan 2 Ah"], answer: 0, why: "240 / 0.8 = 300 Wh; 300 / 12 = 25 Ah." },
      { objective: "O3", q: "Wani mai saye yana zaune a arewacin Ghana, arewa da equator. Ina faranti zai fuskanta?", options: ["Arewa", "Sama kai tsaye ba tare da karkata ko kaɗan ba", "Kudu, zuwa ga equator", "Gabas kawai"], answer: 2, why: "A arewacin equator, faranti suna fuskantar kudu, zuwa ga equator, da ɗan karkata." },
      { objective: "O3", q: "A ina batir zai kasance?", options: ["A kan rufi cikin rana", "Kusa da wutar girki", "A cikin gida, busasshe, mai inuwa, mai iska, ba a ƙasa ba, nesa da yara", "Cikin akwati a rufe babu iska"], answer: 2, why: "Wuri busasshe, mai inuwa, mai iska, nesa da yara da wuta shi ne mafi aminci." },
      { objective: "O3", q: "A yawancin kayan da ke da controller daban, me za ku fara haɗawa?", options: ["Faranti da kayan aiki", "Batir da controller", "Kayan aiki da grid", "Faranti da batir kai tsaye"], answer: 1, why: "Fara haɗa batir da controller yana bar controller ya shirya kansa; sannan faranti, sannan kayan aiki, sai dai idan littafin jagora ya faɗi wani abu daban." },
      { objective: "O3", q: "Wane aiki ne ya fi ƙarfin wannan kwas kuma yana buƙatar ma'aikacin lantarki mai lasisi?", options: ["Wanke faranti", "Ajiye batir", "Sa fiyus na mai ƙerawa", "Haɗa sola da grid ko wayoyin wutar gida"], answer: 3, why: "Aikin grid da wayoyin wutar gida na ma'aikatan lantarki masu lasisi ne kawai." },
      { objective: "O3", q: "Me yasa ake ba batirin lead-acid iska kuma a nisanta shi da wuta?", options: ["Suna fitar da gas mai kama wuta lokacin caji", "Suna yin sanyi sosai", "Suna jawo ƙwari", "Suna buƙatar hasken rana"], answer: 0, why: "Cajin batirin lead-acid yana fitar da gas mai kama wuta." },
      { objective: "O4", q: "Yaushe ne lokaci mafi kyau na wanke faranti?", options: ["Tsakar rana cikin cikakken rana", "Da sassafe ko da yamma, lokacin da yake sanyi", "Lokacin hadari", "Ba a taɓa ba"], answer: 1, why: "Faranti mai sanyi ya fi aminci a taɓa da wankewa fiye da mai zafi cikin cikakken rana." },
      { objective: "O4", q: "Mene ne tsarin gano matsala daidai?", options: ["Batir, sannan ku yi tsammani", "Kayan aiki, sannan ku sayi sabon kaya", "Faranti, haɗin wayoyi, controller, batir, kayan aiki", "Controller kawai"], answer: 2, why: "Dubawa bisa wannan tsari yana gano dalilai na yau da kullum, masu sauƙi da farko." },
      { objective: "O4", q: "Wani iyali sun ƙara babban TV kuma yanzu fitilu suna mutuwa da wuri. Mene ne dalili mafi yiwuwa?", options: ["Faranti ya juye", "Rana ta yi rauni", "Fiyus ya yi ƙarfi sosai", "Kayan aiki sun fi yadda aka auna sola"], answer: 3, why: "Ƙarin kayan aiki suna cin makamashi fiye da abin da sola ke yi kuma yake ajiyewa." },
      { objective: "O5", q: "Farashin kuɗi hannu NGN 150,000. PAYGo: kuɗin farko NGN 20,000, sannan NGN 12,000 kowane wata na wata 12. Nawa ne jimillar PAYGo?", options: ["NGN 164,000", "NGN 144,000", "NGN 32,000", "NGN 150,000"], answer: 0, why: "20,000 + (12,000 x 12) = 164,000." },
      { objective: "O5", q: "Wane ne zai nemi PIN na kuɗin wayar mai saye?", options: ["Kamfanin sola", "Manajanku", "Babu kamfani na gaske: 'yan damfara kawai", "Mai girkawa"], answer: 2, why: "Kamfani na gaske ba ya taɓa neman PIN." },
      { objective: "O5", q: "Wanne ne ɓangare na ka'idar kare masu saye ta GOGLA?", options: ["Sayar da babban kaya ga kowa", "Gaskiya: bayani a sarari, na gaskiya", "Ɓoye jimillar farashi", "Babu hidima bayan sayarwa"], answer: 1, why: "Gaskiya da sayarwa da hankali su ne manyan ƙa'idoji." },
      { objective: "O5", q: "Kayan sola EGP 4,000, wayoyi EGP 500, sufuri EGP 300, aiki EGP 700, riba EGP 500. Nawa ne farashinku?", options: ["EGP 5,500", "EGP 4,500", "EGP 5,000", "EGP 6,000"], answer: 3, why: "4,000 + 500 + 300 + 700 + 500 = 6,000." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na ƙiyasin farashinku ku sake gwadawa.",
    criteria: [
      { name: "An duba inganci", objective: "O1", notYet: "Ba a faɗi sunan kayan ba, ko ba a duba inganci ba.", meets: "An faɗi sunan kayan da sassansa, kuma ƙiyasin ya rubuta ko yana cikin rumbun bayanan VeraSol ko yana da garanti a rubuce.", exceeds: "Yana kuma bayyana wa mai saye dalilin da yasa kayan da aka tabbatar ke da muhimmanci." },
      { name: "An auna girma daidai", objective: "O2", notYet: "Babu teburin makamashi, ko lissafin ba daidai ba ne.", meets: "An lissafa teburin makamashi, ƙarin 30%, da girman faranti da batir daidai.", exceeds: "Yana kuma la'akari da ranakun gajimare ko watannin da suka fi gajimare, kuma ya faɗi inda lambar awannin rana ta fito." },
      { name: "Girkawa lafiya", objective: "O3", notYet: "Babu jerin matakai, ko yana da aikin grid ko wayoyin wutar gida.", meets: "Jerin matakan ya ƙunshi wurin faranti, tsaron tsani, wurin batir, polarity, fiyus da tsarin haɗawa, ba tare da aikin grid ba.", exceeds: "Yana kuma faɗin hukumar makamashi da za a tambaya game da lasisi." },
      { name: "Kulawa da matsaloli", objective: "O4", notYet: "Babu katin kulawa, ko shawara marar aminci.", meets: "Katin yana ba da kulawa ta yau da kullum da tsarin matakai biyar na gano matsala, kuma ya faɗi yadda ake sarrafa tsofaffin batura.", exceeds: "Yana kuma bayyana fitilun controller na wannan kayan." },
      { name: "Farashi da sharuɗɗa na gaskiya", objective: "O5", notYet: "Babu jimillar kuɗin PAYGo ko garanti, ko lissafin ba daidai ba ne.", meets: "An nuna farashin kuɗi hannu, duk wani sharaɗin PAYGo da jimilla daidai gefe da gefe, tare da garanti da lambar mai girkawa.", exceeds: "Yana kuma duba cewa kuɗin biya ya dace da kasafin iyalin kuma ya faɗi abin da ke faruwa idan aka rasa biya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun rubuta ƙiyasin farashi mai teburin makamashi ga mai saye na gaske cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun sayar ko sun girka kayan sola da aka tabbatar cikin kwanaki 90",
      "Masu koyo da suka ce babu gobarar batir, shoti ko ƙorafin masu saye game da ɓoyayyun kuɗaɗe cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai sauƙi mai na'urar lissafi; data don ɗan bincike a rumbun bayanan VeraSol idan zai yiwu",
      "Takarda da alƙalami don teburin makamashi, jerin matakan tsaro, katin kulawa da ƙiyasin farashi",
      "Idan zai yiwu, ƙaramin kayan sola da aka tabbatar don dubawa da faɗin sunayen sassansa",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "A ƙungiyar matasa, ta koyon sana'a ko ta mata: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama, masu koyo suna auna girman sola don wani gida na gaske da suka sani.",
      "A yi atisayen girkawa da hannu ne kawai a ƙarƙashin gogaggen mai girkawa, a kan ƙananan kayan DC; kada ku taɓa barin masu koyo su yi aiki a grid, wayoyin wutar gida ko inverter.",
      "Kafin kwas ɗin, ku gano ko ƙasarku tana ba da lasisi ga masu aikin sola, da waɗanne masu tattara sharar lantarki ko shirye-shiryen take-back ke hidima a yankinku.",
      "Kada ku taɓa neman masu koyo su faɗi PIN ko kalmar sirri a aji.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
