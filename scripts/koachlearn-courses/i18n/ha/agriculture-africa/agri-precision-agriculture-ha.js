"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-precision-agriculture.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const COPERNICUS = { name: "Copernicus Data Space Ecosystem da Copernicus Browser (bayanan tauraron ɗan adam Sentinel kyauta kuma a buɗe)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "Hukumar Sararin Samaniya ta Turai (ESA): Sentinel-2 (hoto mai murabba'i 10 m, yana dawowa kowane kwana 5)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (hidimomin tauraron ɗan adam kyauta, har da taswirar sauyin NDVI da ta gonaki)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov: Daidaiton GPS (wayoyin zamani kusan 4.9 m a sararin da babu abin rufewa)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC: Kimanta kayan gwajin ƙasa masu ɗaukuwa, darussan da aka koya", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Kimanta aikin na'urorin auna ƙasa a gonakin ƙananan manoma a gundumar Embu, Kenya", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil: taswirar halayen ƙasa ta duk Afirka a matakin 30 m (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Cibiyar Binciken Noma da Kiwo ta Kenya (KALRO)", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture-ha",
  lang: "ha",
  translationOf: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Noma da Cikakken Tsari: Kallon Gona ta Tauraron Ɗan Adam da Na'urorin Auna Ƙasa",
  skills: "Gane bambance-bambance a cikin gona ɗaya, Karanta taswirar NDVI ta tauraron ɗan adam kyauta a hankali, Auna gona da GPS na waya, Zaɓar gwajin ƙasa da na'urori da sanin iyakar amincewa da su, Kwatanta kuɗi da riba, Yin taswirar sassan gona da tsari ga kowane sashe",
  outcome: "raba ɗaya daga cikin gonakinku zuwa sassa ta amfani da taswirar tauraron ɗan adam kyauta, GPS na waya, gwajin ƙasa da idanunku da bayanan da kuka rubuta, da rubuta tsari mai arha ga kowane sashe wanda za ku iya biya kuma ku duba.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoma masu tasowa na kasuwanci, manajojin gona, matasan 'yan kasuwar noma da jami'an faɗakarwar noma (extension workers) da ke son yin noma \"da cikakken tsari\" ba tare da manyan injuna ba. Noma da cikakken tsari (precision agriculture) yana nufin ba kowane sashe na gona abin da yake buƙata, maimakon ɗaukar gonar gaba ɗaya iri ɗaya.",
    "Za ku koyi ganin bambance-bambance a cikin gona, karanta taswirar amfanin gona ta tauraron ɗan adam kyauta (da sanin iyakarta), auna gona da sassanta da waya, zaɓar gwajin ƙasa da na'urori da sanin iyakar amincewa da su, da yanke ko kayan aiki ya cancanci kuɗinsa. Za ku gama da taswirar sassan gonarku da tsari ga kowane sashe.",
    "Ba a buƙatar jirgi mara matuƙi (drone). Idan kuna son taswira da drone, kwasa-kwasan \"Drones for Agricultural Monitoring\" suna koyar da shi. Lambobin kuɗi misalai ne kawai. Kowane darasi yana ƙarewa da aiki a gonarku; akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi taswirar sassan ɗaya daga cikin gonakinku: ku zagaya iyakar gonar ku rubuta ta da manhajar GPS ta waya, ku raba gonar zuwa sassa 2 zuwa 4 ta amfani da aƙalla nau'in shaida biyu (NDVI ta tauraron ɗan adam a ranaku biyu, sakamakon gwajin ƙasa ko na kayan gwaji, amfanin girbin baya, abin da kuke gani), ku rubuta girman kowane sashe da shaidarsa, sannan ku rubuta tsari ga kowane sashe (abin da za ku yi daban, kuɗinsa a kuɗin ƙasarku a matsayin misali, da yadda za ku duba a damina mai zuwa ko ya yi aiki).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoma masu tasowa na kasuwanci, manajojin gona, matasan 'yan kasuwar noma da jami'an faɗakarwar noma a Kenya, Najeriya, Ghana, Côte d'Ivoire, Senegal da sauran Afirka, masu noman masara, shinkafa, dawa, rogo, wake, gyaɗa, tumatir, kofi da koko a gonakin da ba su kai hekta ɗaya ba har zuwa hekta 'yan dozin.",
    startingPoint: "Sun san gonakinsu sosai da ido kuma suna amfani da wayar zamani. Yawancinsu suna ɗaukar kowace gona iri ɗaya: yawan taki ɗaya, yawan iri ɗaya. Kaɗan ne suka taɓa amfani da taswirar tauraron ɗan adam, manhajar auna fili da GPS ko gwajin ƙasa, kuma da yawa sun ji manyan alkawura game da na'urori da manhajoji.",
    gap: "A cikin gona ɗaya, ƙasa, ruwa da amfanin gona suna iya bambanta sosai, don haka yawan taki ɗaya yana ɓata kaya a wasu wurare kuma yana hana wasu abin da suke buƙata. Masu koyo suna buƙatar ganin waɗannan bambance-bambance da kayan aiki kyauta ko masu arha, su san wane kayan aiki za a amince da shi don me, kuma su mayar da su tsarin sassa masu sauƙi da ke kawo riba a ƙaramar gona.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kwas ɗin yana nan kuma da Sifaniyanci, Faransanci da Larabci",
      "Na'urori: wayar zamani; kwamfuta tana taimakawa don kallon taswirar tauraron ɗan adam amma ba dole ba ce",
      "Ƙananan gonaki masu gauraye: hotunan tauraron ɗan adam kyauta (murabba'i kusan 10 m) ba su da cikakken bayani a gonakin da ba su kai kusan rabin hekta ba",
      "Gajimare a lokacin damina yana iyakance hotunan tauraron ɗan adam",
      "Kuɗi: kayan aiki masu arha da farko; dukkan lambobi misalai ne; ba a tallata kowace haja",
      "Magungunan kashe ƙwari da takin zamani: kayayyakin da aka yi wa rajista kaɗai, kamar yadda takardar umarni (label) ta ce"
    ],
    prerequisites: "Iya amfani da wayar zamani ba tare da wahala ba. Kwasa-kwasan \"Soil Health and Fertility\" (Lafiyar Ƙasa da Ƙarfinta) da \"Agricultural Data and Technology\" (Bayanan Noma da Fasaha) suna taimakawa idan aka fara da su."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Yayin da kuke zagaya ɗaya daga cikin gonakinku", action: "lissafa bambance-bambance a cikin gonar da noma da cikakken tsari zai iya magance su", standard: "kuna ambaton aƙalla bambance-bambance uku da yadda kuka ga kowanne" },
    { id: "O2", condition: "Ta amfani da shafin kallon taswirar tauraron ɗan adam kyauta kamar Copernicus Browser", action: "nemo gonarku da kwatanta NDVI ɗinta a ranaku biyu", standard: "kuma ku faɗi abu ɗaya da taswirar take nunawa da abu ɗaya da ba za ta iya nunawa ba" },
    { id: "O3", condition: "Ta amfani da manhajar GPS ta waya", action: "rubuta iyakar gona da gefunan sassanta da karanta girmansu", standard: "kuna la'akari da kuskure na kusan mita 5" },
    { id: "O4", condition: "Idan aka ba ku zaɓin gwajin ɗakin gwaji (lab), kayan gwaji ko na'urar hannu", action: "zaɓar hanyar gwajin ƙasa, ɗaukar samfuri daga kowane sashe da faɗin iyakar amincewa da kowane sakamako", standard: "kuna amincewa da pH fiye da sakamakon nitrogen, phosphorus da potassium na kayan gwaji" },
    { id: "O5", condition: "Idan aka ba ku kayan aiki ko dabarar noma da cikakken tsari da lambobin gonarku", action: "kwatanta kuɗinsa da ribar da ake sa rai da yanke ko za ku yi amfani da shi", standard: "ta amfani da ƙaramin lissafin canji (partial budget) a kuɗin ƙasarku" },
    { id: "O6", condition: "Idan kuna da shaida daga aƙalla majiyoyi biyu", action: "raba gona zuwa sassan kulawa 2 zuwa 4 da rubuta tsari ga kowane sashe", standard: "kowane tsari mai yiwuwa a biya kuma a duba shi a damina mai zuwa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ganin gonarku a sassa-sassa",
      lessons: [
        {
          title: "Mene ne noma da cikakken tsari a ƙaramar gona",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lissafa bambance-bambance a cikin ɗaya daga cikin gonakinku da za ku iya kula da su daban-daban.",
          text: [
            "Noma da cikakken tsari yana nufin kula da sassan gona daban-daban, domin sun bambanta. Wani lungu na gonar masara yana iya zama yashi da bushewa, ƙasan gonar yana cike da ruwa, tsakiyar kuma yana da ƙarfi domin an taɓa ajiye shanu a wurin. Ɗaukar gonar gaba ɗaya iri ɗaya yana ɓata taki da iri a wasu wurare kuma yana hana wasu abin da suke buƙata.",
            "A manyan gonaki ana yin haka da taraktoci da ke canja yawan taki da kansu. A ƙaramar gona za ku iya yin abu ɗaya da hannu: ƙarin taki na dabbobi inda ƙasa ba ta da ƙarfi, magudanar ruwa a wurin da ruwa yake tsayawa, wani irin shuka daban a kan tudun da ke bushewa, ko rashin zuba taki inda amfanin gona bai taɓa biya ba. Manufar ɗaya ce: ku lura, ku auna, ku yanke shawara bisa sashe, sannan ku duba sakamakon.",
            "Kun riga kun san abubuwa da yawa da ido. Ku zagaya gonar ku rubuta inda amfanin gona gajere ne, yake rawaya ko ya yi gibi-gibi, inda ruwa yake tsayawa, inda ciyawa kamar kudiddiri (Striga) ke fitowa, da inda girbi ya yi kyau ko ya lalace. Ku tambayi ma'aikatan da ke nome ciyawa da girbi: suna ganin kowane lungu. Taswirar tauraron ɗan adam, GPS da gwajin ƙasa, a darussa masu zuwa, suna taimaka muku tabbatarwa da auna abin da kuke gani."
          ],
          steps: ["Ku zagaya gonar gaba ɗaya, gefe da tsakiya.", "Ku rubuta inda amfanin gona ba shi da ƙarfi, inda ruwa yake tsayawa, inda ciyawa ko ƙwari suka fi yawa.", "Ku tambayi ma'aikata inda girbi ke da kyau ko ba shi da kyau.", "Ku rubuta kowane bambanci da yadda kuka gan shi.", "Ku yi musu alama a kan zanen gonar mai sauƙi."],
          words: [["Noma da cikakken tsari (precision agriculture)", "kula da sassan gona daban-daban ta hanyoyi daban-daban, bisa lura da aunawa."], ["Bambanci (variability)", "yadda ƙasa, ruwa ko girman amfanin gona ke canjawa daga wani sashe na gona zuwa wani."], ["Sashen kulawa (management zone)", "wani sashe na gona da ake kula da shi a matsayin abu ɗaya domin yana nuna hali iri ɗaya."]],
          slides: [
            { title: "Gona ɗaya, sassa da yawa", bullets: ["Tudun yashi, ƙasa mai ruwa, tsohon wurin ajiye shanu mai ƙarfi", "Kulawa iri ɗaya tana ɓata kaya"] },
            { title: "Cikakken tsari da hannu", bullets: ["Ƙarin taki na dabbobi inda ƙasa ba ta da ƙarfi", "Magudanar ruwa a wurin da ruwa yake tsayawa", "Irin shuka da ya dace da kowane sashe"] },
            { title: "Lura, auna, yanke shawara, duba", bullets: ["Idanunku da bayananku su ne farko", "Kayan aiki suna tabbatarwa da aunawa"] },
            { title: "Ku zagaya ku tambaya", bullets: ["Amfanin gona marar ƙarfi, rawaya ko gibi-gibi", "Ruwa da ke tsayawa, ciyawa, ƙwari", "Ku tambayi ma'aikata"] }
          ],
          tryIt: "Ku zagaya ɗaya daga cikin gonakinku. Ku yi zanen gonar mai sauƙi ku yi alama a kan aƙalla bambance-bambance uku (misali wurin da amfanin gona ba shi da ƙarfi, wurin da ruwa yake tsayawa, wurin da ciyawa ta yi yawa). A gefen kowanne, ku rubuta yadda kuka gan shi: da ido, daga girbi, ko daga ma'aikata.",
          youCanNow: "ganin gona a matsayin sassa da suka bambanta, da lissafa bambance-bambancen da za ku iya kula da su daban-daban.",
          quickCheck: [
            { objective: "O1", q: "Mene ne babbar manufar noma da cikakken tsari?", options: ["Sayen injuna mafi tsada", "Amfani da yawan taki ɗaya ko'ina", "Kula da sassan gona daban-daban ta hanyoyi daban-daban", "Noma da drone kawai"], answer: 2, why: "Yana ba kowane sashe na gona abin da yake buƙata." },
            { objective: "O1", q: "Wa zai iya faɗa muku da sauri inda girbi ba shi da kyau a gona?", options: ["Ma'aikatan da ke nome ciyawa da girbi a cikinta", "Tallar wata na'ura", "Mai saye a birni", "Babu kowa"], answer: 0, why: "Ma'aikata suna ganin kowane lungu na gonar a duk damina." }
          ]
        },
        {
          title: "Taswirar tauraron ɗan adam kyauta da abin da NDVI ke nunawa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kwatanta NDVI na gonarku a ranaku biyu a shafin kallon taswirar tauraron ɗan adam kyauta.",
          text: [
            "Taurarin ɗan adam na Turai da ake kira Sentinel-2 suna ɗaukar hoton duk Afirka kusan kowane kwana 5, da murabba'ai (pixels) na mita 10 (murabba'i ɗaya fili ne mai 10 m x 10 m). Hotunan kyauta ne kuma a buɗe suke. Copernicus Browser yana bar ku ku kalle su ba tare da biya ba; za ku iya farawa ba tare da asusu ba, kuma asusu na kyauta yana ba da ƙarin zaɓuɓɓuka. Digital Earth Africa ma yana ba da hidimomin tauraron ɗan adam kyauta, kamar taswirar sauyin NDVI da ta gonaki, waɗanda aka yi don Afirka.",
            "NDVI (Normalised Difference Vegetation Index) lamba ce da ake samu daga launukan da tsirrai ke mayarwa. Ganyaye kore masu lafiya da yawa suna ba da NDVI mai yawa; ƙasa babu shuka, amfanin gona da ya bushe ko ya yi kaɗan suna ba da NDVI ƙasa. A shafin, ku nemo gonarku, ku zaɓi kallon NDVI, ku kwatanta ranaku biyu, misali mako huɗu da mako takwas bayan shuka. Wurin da NDVI ɗinsa ke zama ƙasa yayin da sauran gonar ke sama ya cancanci ku je ku gani.",
            "Abin da NDVI BA ya nunawa: dalili. NDVI ƙasa yana iya zama fari, ruwa da ya yi yawa, ƙarancin nitrogen, ƙwari, cuta, ciyawa ko shuka da aka yi a makare. Kuma ba ya ganin ƙarƙashin gajimare, kuma a damina kuna iya jira makonni kafin samun hoto mai kyau. A gonakin da ba su kai kusan rabin hekta ba, ko masu tsawo da siriri, murabba'ai na 10 m ba su da cikakken bayani kuma suna gauraya amfanin gonar maƙwabci ko bishiyoyi. Ciyawa ma tana iya bayyana kore kuma kamar mai lafiya. Don haka NDVI yana faɗa muku inda za ku duba, ƙafafunku kuma suna faɗa muku dalili."
          ],
          steps: ["Ku buɗe Copernicus Browser a kwamfuta ko burauzar waya.", "Ku nemi yankinku ku matso kusa da gonarku.", "Ku zaɓi hoto mai ƙarancin gajimare da kallon NDVI.", "Ku kwatanta ranaku biyu a damina ɗaya.", "Ku yi alama kan wuraren da NDVI ke ƙasa a zanenku, sannan ku je ku nemo dalili."],
          words: [["Sentinel-2", "taurarin ɗan adam guda biyu na Turai da ke ɗaukar hoton duniya kyauta kusan kowane kwana 5 a matakin 10 m."], ["NDVI", "lamba daga launukan hoton tauraron ɗan adam da ke nuna yadda tsirrai suke kore da yawa."], ["Murabba'i (pixel)", "ɗan fili ɗaya na hoton tauraron ɗan adam; a Sentinel-2, 10 m x 10 m."]],
          slides: [
            { title: "Hotunan tauraron ɗan adam kyauta", bullets: ["Sentinel-2: kusan kowane kwana 5, murabba'ai na 10 m", "Copernicus Browser: kallo kyauta", "Digital Earth Africa: hidimomi kyauta don Afirka"] },
            { title: "Abin da NDVI ke nunawa", bullets: ["Sama: tsirrai kore masu yawa", "Ƙasa: babu shuka, ya bushe ko ya yi kaɗan", "Ku kwatanta ranaku biyu"] },
            { title: "Abin da NDVI BA ya nunawa", bullets: ["Dalilin da yasa wani wuri ba shi da ƙarfi", "Duk abin da ke ƙarƙashin gajimare", "Cikakken bayani a gonakin da ba su kai kusan rabin hekta ba"] },
            { title: "Taswira tana nuna inda, ƙafafu suna nuna dalili", bullets: ["Ku yi alama kan wuraren da NDVI ke ƙasa", "Ku je wurin ku nemo dalili"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Ku buɗe Copernicus Browser, ku nemo ɗaya daga cikin gonakinku (ko gona kusa da ku), ku kalli NDVI a ranaku biyu masu haske a wannan damina. Ku yi alama kan duk wurin da NDVI ke ƙasa a zanenku, sannan ku je wurin ku rubuta abin da kuke tsammani shi ne dalili.",
          youCanNow: "karanta taswirar NDVI ta tauraron ɗan adam kyauta ta gonarku da amfani da ita don yanke inda za ku duba, ba don sanin dalili ba.",
          quickCheck: [
            { objective: "O2", q: "Wani wuri a gonar masararku yana da NDVI ƙasa. Me hakan yake faɗa muku?", options: ["Yana da ƙarancin nitrogen", "Yana da tsutsar fall armyworm", "Yana buƙatar ban ruwa", "Tsirran wurin ba su da kore sosai ko sun yi kaɗan, don haka ku je ku nemo dalili"], answer: 3, why: "NDVI yana nuna inda girma ba shi da ƙarfi, ba dalilin ba." },
            { objective: "O2", q: "Me yasa taswirar Sentinel-2 ta kyauta ke iya zama da wuyar amfani a gona mai hekta 0.2?", options: ["Murabba'ai na 10 m ba su da cikakken bayani kuma suna gauraya ƙasar maƙwabta", "Hotunan na Turai ne kawai", "Yana da tsada sosai", "NDVI ba ya aiki a kan masara"], answer: 0, why: "Gona mai hekta 0.2 murabba'ai kusan 'yan dozin biyu ne kawai, kuma da yawa sun gauraya da gefunanta." }
          ]
        },
        {
          title: "Auna gona da GPS na wayarku",
          objectives: ["O3"],
          minutes: 5,
          goal: "Rubuta iyakar gona da sassanta da manhajar GPS ta waya, ku karanta girmansu.",
          text: [
            "GPS na waya yana iya auna gonarku. Manhajoji da yawa na kyauta suna iya rubuta iyakar da kuka zagaya, ko su bar ku ku sa alamomi a kewayen gonar, sannan su nuna girman filin. Kuna kuma iya sa alama (pin) a manhajar taswira ku raba wurinta. Sanin ainihin girman gona da na kowane sashe yana da muhimmanci: taki, iri, aikin hannu da girbi a kowace eka ko hekta duk sun dogara da shi, kuma manoma da yawa suna gano cewa gonarsu ta fi ko ba ta kai yadda suke tsammani ba.",
            "GPS ba daidai yake gaba ɗaya ba. A sararin da babu abin rufewa, wayoyin zamani yawanci suna daidai cikin kusan mita 5, kuma yana ƙara muni kusa da bishiyoyi, gine-gine da cikin kwari. A ƙaramar gona wannan kuskure yana da muhimmanci: ku yi tafiya a hankali, ku tsaya daƙiƙoƙi kaɗan a kowane kusurwa, ku riƙe wayar a sararin sama, ku zagaya iyakar sau biyu don kwatantawa. Idan girma biyun sun bambanta sosai, ku sake zagayawa.",
            "Ku auna sassan ma. Ku zagaya gefen wurin da ruwa yake tsayawa ko tudun yashi ku ajiye shi a matsayin siffa ta daban, ko ku sa alamomi a kusurwoyinsa. Ku sa wa kowace siffa sunan gonar da sashen (\"F2 Zone A wet\"), ku ajiye fayil ɗin ko hoton allo (screenshot) mai girman filin. Waɗannan siffofi su ne tushen taswirar sassanku a Darasi na 6."
          ],
          steps: ["Ku buɗe manhajar auna fili ko taswira ta GPS a waje inda sararin sama yake a buɗe.", "Ku zagaya iyakar gonar a hankali, kuna tsayawa a kowace kusurwa.", "Ku karanta ku rubuta girman filin; ku sake zagayawa don dubawa.", "Ku zagaya ko ku sa alamomi a gefunan kowane sashe ku ajiye kowanne da suna.", "Ku ajiye fayil ɗin ko hoton allo mai girman filayen."],
          words: [["GPS", "Global Positioning System: taurarin ɗan adam da ke bar waya ta san inda take a duniya."], ["Iyaka (boundary)", "gefen gona."], ["Hekta", "fili mai 100 m x 100 m, kusan eka 2.5."]],
          slides: [
            { title: "Wayarku na iya auna gona", bullets: ["Ku zagaya iyaka ko ku sa alamomi a kusurwoyi", "Ku karanta girman filin", "Girman gona ne ke tantance kowace lamba ta kowace eka"] },
            { title: "GPS ba daidai yake gaba ɗaya ba", bullets: ["Kusan 5 m a sararin da babu abin rufewa", "Ya fi muni kusa da bishiyoyi, gine-gine, kwari"] },
            { title: "Karatu mafi kyau", bullets: ["Ku yi tafiya a hankali, ku tsaya a kusurwoyi", "Ku zagaya sau biyu ku kwatanta"] },
            { title: "Ku auna sassan", bullets: ["Siffa ɗaya da aka ajiye ga kowane sashe", "Suna: F2 Zone A wet", "Ku ajiye girman filin"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Ku yi amfani da manhajar GPS ta waya don zagaya iyakar gona ɗaya sau biyu ku rubuta girma biyun. Sannan ku auna gefen sashe ɗaya da kuka gano a Darasi na 1, ku sa masa suna, ku rubuta girmansa.",
          youCanNow: "auna gona da sassanta da GPS na waya da rubuta girmansu, kuna la'akari da kuskuren GPS.",
          quickCheck: [
            { objective: "O3", q: "Kun zagaya iyakar gona sau biyu kuma kun sami eka 0.9 da eka 1.4. Me za ku yi?", options: ["Ku ɗauki matsakaicinsu ku tsaya", "Ku sake zagayawa a hankali, kuna tsayawa a kusurwoyi, a sararin sama", "Ku yi amfani da lamba mafi girma", "Ku daina amfani da GPS"], answer: 1, why: "Bambanci mai yawa yana nufin karatu ba shi da kyau; ku sake zagayawa a hankali." },
            { objective: "O3", q: "A ina GPS na waya yawanci ya fi rashin daidaito?", options: ["A fili a buɗe", "A ranar rana", "A fili mai faɗi", "Ƙarƙashin bishiyoyi da kusa da gine-gine"], answer: 3, why: "Bishiyoyi da gine-gine suna toshewa kuma suna karkatar da siginar taurarin ɗan adam." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ganin gonarku a sassa-sassa",
        questions: [
          { objective: "O1", q: "Wani ƙaramin manomi yana zuba ƙarin taki na dabbobi a ƙarshen gonar mai yashi da rashin ƙarfi kawai. Wannan:", options: ["Ɓata kaya ne", "Noma da cikakken tsari ne da hannu", "Ya saɓa wa doka", "Yana yiwuwa da tarakta kawai"], answer: 1, why: "Kula da sassan gona daban-daban shi ne ginshiƙin noma da cikakken tsari." },
          { objective: "O2", q: "Kusan sau nawa taurarin ɗan adam na Sentinel-2 ke ɗaukar hoton wuri ɗaya?", options: ["Kusan kowane kwana 5", "Sau ɗaya a shekara", "Kowace awa", "Sai an nema kawai"], answer: 0, why: "Taurarin ɗan adam biyun suna dawowa kusan kowane kwana 5; gajimare na iya ɓoye wasu hotuna." },
          { objective: "O2", q: "Wanne ne NDVI BA zai iya faɗa muku ba?", options: ["Inda amfanin gona ya fi kore", "Inda girma ba shi da ƙarfi", "Dalilin da yasa wani wuri ba shi da ƙarfi", "Yadda ranaku biyu suka bambanta"], answer: 2, why: "Dalilai da yawa suna ba da NDVI ƙasa; kuna zuwa wurin don gano wanne ne." },
          { objective: "O3", q: "Daidaiton GPS na wayar zamani a sararin da babu abin rufewa yawanci kusan:", options: ["Santimita 1", "Mita 500", "Kilomita 5", "Mita 5"], answer: 3, why: "Kusan 4.9 m a sararin da babu abin rufewa, ya fi muni kusa da bishiyoyi da gine-gine." },
          { objective: "O3", q: "Me yasa sanin ainihin girman gona yake da muhimmanci?", options: ["Iri, taki, aikin hannu da girbi a kowace eka duk sun dogara da shi", "Masu saye suna biya bisa girman fili", "Manhajojin GPS suna buƙatar sa", "Ba shi da muhimmanci"], answer: 0, why: "Girman fili da ba daidai ba yana sa kowace lamba ta kowace eka ta zama ba daidai ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Auna ƙasa da tsara aiki bisa sashe",
      lessons: [
        {
          title: "Kayan gwajin ƙasa da na'urori: iyakar amincewa da su",
          objectives: ["O4"],
          minutes: 6,
          goal: "Zaɓi hanyar gwajin ƙasa ga kowane sashe ku faɗi iyakar amincewa da sakamakonta.",
          text: [
            "Akwai manyan hanyoyi uku na gwajin ƙasa. Gwajin ɗakin gwaji (lab) (daga cibiyar bincike ta ƙasa kamar KALRO, jami'a ko lab mai zaman kanta da aka amince da ita) shi ne mafi daidai, yana ɗaukar kwanaki zuwa makonni kuma ya fi tsada. Kayan gwaji na gona (takardun launi ko sinadarai a cikin bututu) suna ba da sakamako da sauri a wurin. Na'urar lantarki ta hannu ko mita tana ba da sakamako cikin mintuna kuma sau da yawa ana sayar da ita tare da manhaja.",
            "Gwaje-gwajen masu zaman kansu na kayan gwaji masu ɗaukuwa, kamar wanda IFDC ta yi, sun gano cewa sun yi daidai da lab sosai a pH na ƙasa amma sakamakonsu bai tabbata ba a nitrogen, phosphorus da potassium. Bincike a gundumar Embu, Kenya, ya gano cewa wasu na'urorin hannu na zamani suna iya hasashen halayen ƙasa da dama da kyau, amma waɗannan na'urori suna da tsada kuma suna buƙatar daidaitawa (calibration) da samfuran lab. Ku yi hankali da na'urori masu arha da ke cewa suna karanta NPK nan take: lambobin daidaito na masu sayarwa ba hujja ce ta mai zaman kanta ba.",
            "Tsari mai amfani: ku aika samfuri haɗaɗɗe ɗaya mai kyau na kowane sashe zuwa lab duk bayan 'yan shekaru, ku yi amfani da kayan gwaji ko mita don duba pH da sauri tsakanin gwaje-gwajen lab. Ku ɗauki kowane samfuri ta hanya ɗaya (ƙananan samfura da yawa, a gauraya su, daga zurfi ɗaya, ba daga hanyoyi ko tarin taki ba). Taswirar iSDAsoil ta kyauta tana hasashen halayen ƙasa a duk Afirka a matakin 30 m kuma tana da amfani don ganin hoton gaba ɗaya, amma hasashe ne daga lissafi (model), ba gwajin gonarku ba."
          ],
          steps: ["Ku yanke: gwajin lab, kayan gwaji ko na'ura, ga kowace tambaya da kuke da ita.", "Ku ɗauki samfuri haɗaɗɗe ga kowane sashe: ƙananan samfura da yawa, zurfi ɗaya, a gauraya.", "Ku aika samfuran zuwa lab da aka amince da ita duk bayan 'yan shekaru.", "Ku yi amfani da kayan gwaji ko mita don duba pH da sauri a tsakani.", "Ku rubuta kowane sakamako a gefen sashensa, tare da hanyar da aka yi amfani da ita."],
          words: [["Samfuri haɗaɗɗe (composite sample)", "ƙananan samfuran ƙasa da yawa daga sashe ɗaya da aka gauraya su zama samfuri ɗaya."], ["Daidaitawa (calibration)", "duba na'ura da gyara ta bisa sakamakon lab da aka amince da shi."], ["pH", "ma'aunin yawan tsami ko rashin tsamin ƙasa (acid ko alkaline)."]],
          slides: [
            { title: "Hanyoyi uku na gwaji", bullets: ["Lab: mafi daidai, a hankali, ya fi tsada", "Kayan gwaji na gona: da sauri, a wurin", "Na'urar hannu: cikin mintuna, sau da yawa da manhaja"] },
            { title: "Iyakar amincewa da su", bullets: ["Kayan gwaji: suna da kyau a pH", "Kayan gwaji: ba su tabbata ba a N, P da K", "Na'urori na zamani suna buƙatar daidaitawa"] },
            { title: "Tsari mai amfani", bullets: ["Samfurin lab ɗaya ga kowane sashe duk bayan 'yan shekaru", "Kayan gwaji ko mita don duba pH da sauri", "Hanyar ɗaukar samfuri ɗaya kowane lokaci"] },
            { title: "Taswirar ƙasa kyauta", bullets: ["iSDAsoil: hasashe a matakin 30 m", "Hoton gaba ɗaya, ba gwajin gonarku ba"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "Ga kowane sashe a zanenku, ku rubuta gwajin da za ku yi amfani da shi (lab, kayan gwaji ko na'ura) da dalili. Ku ɗauki, ko ku tsara, samfuri haɗaɗɗe ɗaya ga kowane sashe, ku rubuta iyakar amincewa da sakamakon kayan gwaji a pH da a nitrogen.",
          youCanNow: "zaɓar hanyar gwajin ƙasa ga kowane sashe da tantance iyakar amincewa da sakamakonta.",
          quickCheck: [
            { objective: "O4", q: "Wane sakamako ne kayan gwajin ƙasa masu ɗaukuwa suka fi dacewa da shi, idan aka kwatanta da lab?", options: ["Nitrogen", "Potassium", "pH na ƙasa", "Phosphorus"], answer: 2, why: "Gwaje-gwaje masu zaman kansu sun gano pH ya yi daidai sosai amma N, P da K ba su tabbata ba." },
            { objective: "O4", q: "Wani mai sayarwa ya ce na'urarsa mai arha tana karanta NPK nan take da daidaito na kashi 95. Ya kamata ku:", options: ["Nemi sakamakon gwajin mai zaman kansa ku kwatanta wasu sakamako da na lab", "Saye ta nan take", "Yi amfani da ita maimakon dukkan gwaje-gwajen lab", "Yarda da ita domin tana da manhaja"], answer: 0, why: "Lambobin masu sayarwa ba hujja ce ta mai zaman kanta ba; ku kwatanta da lab." }
          ]
        },
        {
          title: "Kuɗi da riba, da lokacin da drone ke taimakawa",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kwatanta kuɗin kayan aiki ko dabarar noma da cikakken tsari da ribar da ake sa rai.",
          text: [
            "Kayan aikin noma da cikakken tsari yana da ma'ana ne kawai idan ribarsa ta fi kuɗinsa. Ku yi amfani da ƙaramin lissafin canji (partial budget): me zan ƙara samu ko ajiyewa (ƙarin girbi, rage ɓata taki ko iri), kuma me zai ƙara kashewa (gwajin, na'urar, manhajar, lokacinku, aikin hannu)? Misali kawai: idan raba gona zuwa sassa ya ajiye buhun taki 2 a wani sashe marar ƙarfi da bai taɓa biya ba (2 x GHS 400 = GHS 800 an ajiye), kuma gwajin lab ya ci GHS 300, to yana biya.",
            "A ƙananan gonaki, ku fara da abin da yake kyauta ko mai arha: idanunku, bayananku, GPS na waya da taswirar tauraron ɗan adam kyauta. Sannan ku kashe kuɗi kan gwajin lab ga kowane sashe. Ku sayi na'urar hannu ne kawai idan za ku riƙa amfani da ita sau da yawa kuma kuna iya duba ta da lab. Ƙungiyoyi suna iya raba kuɗi: ƙungiyar haɗin gwiwa (cooperative) a Côte d'Ivoire ko ƙungiyar manoma a Najeriya na iya sayen mita ɗaya ko biyan gwaje-gwajen lab tare.",
            "Drone suna ba da hotuna masu bayanin 'yan santimita maimakon mita 10, suna tashi a ƙarƙashin gajimare, kuma suna iya tashi a ranar da kuke buƙata. Suna taimakawa a amfanin gona masu daraja, manyan gonaki, ko ga ƙungiyar da ke sayen hidima tare. Sun fi tsada sosai, kuma tuƙa su yana buƙatar lasisi daga hukumar kula da sufurin jiragen sama. Idan kuna tsammani kuna buƙatar ɗaya, ku ɗauki kwasa-kwasan \"Drones for Agricultural Monitoring\" da \"Jirage Marasa Matuƙi a Noma: Nazarin Bayanai da Noma Mai Cikakken Daidaito\"; wannan kwas ba ya maimaita su."
          ],
          steps: ["Ku rubuta abin da kayan aikin ko dabarar za ta ci: kuɗi, lokaci, aikin hannu.", "Ku rubuta ƙarin kuɗin shiga ko ajiyar da kuke sa rai, da lambobin misali.", "Ku kwatanta: riba ku cire kuɗi.", "Ku fara da kayan aiki kyauta; sannan gwajin lab ga kowane sashe; sannan na'ura ko hidimar drone kawai idan yana biya.", "Ku yi tunanin raba kuɗi da ƙungiya."],
          words: [["Ƙaramin lissafin canji (partial budget)", "lissafi mai sauƙi na ƙarin kuɗi da ƙarin riba na canji ɗaya kawai."], ["Hidimar drone", "kasuwancin da ke tuƙa drone a kan gonarku don kuɗi."], ["Riba (return)", "abin da kuke samu a madadin abin da kuka kashe."]],
          slides: [
            { title: "Dole riba ta fi kuɗi", bullets: ["Ƙarin kuɗin shiga ko ajiya", "A cire ƙarin kuɗi", "Misali kawai: GHS 800 an ajiye da GHS 300 na gwaji"] },
            { title: "Ku kashe kuɗi a wannan tsari", bullets: ["Kyauta: idanu, bayanai, GPS, tauraron ɗan adam", "Gwajin lab ga kowane sashe", "Na'ura kawai idan ana amfani da ita sau da yawa kuma an duba ta"] },
            { title: "Ku raba kuɗi", bullets: ["Ƙungiyoyi da ƙungiyoyin haɗin gwiwa", "Mita ɗaya ko gwaje-gwajen lab da yawa tare"] },
            { title: "Lokacin da drone ke taimakawa", bullets: ["Bayanin santimita, ƙarƙashin gajimare", "Amfanin gona masu daraja, manyan gonaki, hidimar ƙungiya", "Ku duba kwasa-kwasan drone; ana buƙatar lasisi"] }
          ],
          tryIt: "Ku zaɓi kayan aiki ko dabarar noma da cikakken tsari ɗaya don gonarku (gwajin lab ga kowane sashe, mitar ƙasa, hidimar drone, ko zuba taki bisa sashe). Ku rubuta ƙaramin lissafin canji da lambobin misali a kuɗin ƙasarku: ƙarin kuɗi, ƙarin riba, da shawararku.",
          youCanNow: "yanke ko kayan aikin noma da cikakken tsari ya cancanta ga gonarku da ƙaramin lissafin canji mai sauƙi.",
          quickCheck: [
            { objective: "O5", q: "A ƙaramar gona, wanne ya kamata ku fara gwadawa yawanci?", options: ["Drone", "Babbar hanyar sadarwar na'urori", "Biyan kuɗin manhaja mai tsada", "Idanunku, bayananku, GPS na waya da taswirar tauraron ɗan adam kyauta"], answer: 3, why: "Ku fara da kayan aiki kyauta ku kashe kuɗi kawai inda yake biya." },
            { objective: "O5", q: "Mitar ƙasa ta fi abin da za ku ajiye a damina biyar tsada. Wane zaɓi ne mai hankali?", options: ["Ku saye ta duk da haka", "Ku raba kuɗin ta hanyar ƙungiya, ko ku yi amfani da gwajin lab maimakon haka", "Ku ci bashi ku sayi biyu", "Ku daina zuba taki"], answer: 1, why: "Idan ribar ba ta fi kuɗin ba idan kun yi shi ku kaɗai, ku raba shi ko ku zaɓi hanya mafi arha." }
          ]
        },
        {
          title: "Yin taswirar sassan gona da tsari ga kowane sashe",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Raba gona zuwa sassa 2 zuwa 4 ku rubuta tsari ga kowane sashe.",
          text: [
            "Yanzu ku haɗa shaidun wuri ɗaya. Ku ɗora siffofin GPS ɗinku a kan zanenku. Ga kowane sashe na gonar, ku lissafa abin da kuka sani: NDVI a ranaku biyu, sakamakon gwajin ƙasa ko na kayan gwaji, girbin baya, abin da ku da ma'aikata kuke gani. Sashe yana buƙatar aƙalla nau'in shaida biyu da suka yi daidai, misali NDVI ƙasa da sakamakon pH ƙasa, ko wurin da ruwa yake tsayawa da ake gani kowace damina da rubutaccen girbi marar kyau.",
            "Ku sauƙaƙa: sassa 2 zuwa 4 sun isa a ƙaramar gona. Ku sa musu suna bisa abin da suke: \"Sashe A ƙasa mai kyau\", \"Sashe B mai tsami da rashin ƙarfi\", \"Sashe C mai ruwa da yawa\". Ku rubuta girman kowane sashe daga taswirar GPS ɗinku.",
            "Sannan ku rubuta tsari ga kowane sashe: abin da za ku yi daban (ƙarin takin gargajiya (compost) da lime inda pH ke ƙasa kamar yadda lab ta ba da shawara; magudanar ruwa ko shuka shinkafa ko kayan lambu a sashe mai ruwa; rage yawan taki inda amfanin gona bai taɓa biya ba), nawa zai ci a matsayin misali a kuɗin ƙasarku, da yadda za ku duba shi: ku rubuta girbi bisa sashe lokacin girbi ku kwatanta NDVI a damina mai zuwa. Ku yi amfani da takin zamani da magungunan kashe ƙwari da aka yi wa rajista kaɗai, kamar yadda takardar umarni ta ce. Tsarin noma da cikakken tsari daidai ne kawai idan bayanan damina mai zuwa sun nuna ya yi aiki."
          ],
          steps: ["Ku sa siffofin GPS, bayanan NDVI, sakamakon ƙasa da girbi a taswira ɗaya.", "Ku zana sassa 2 zuwa 4 inda nau'in shaida biyu suka yi daidai.", "Ku sa wa kowane sashe suna ku rubuta girmansa.", "Ku rubuta tsari, kuɗi da hanyar dubawa ga kowane sashe.", "Ku rubuta girbi bisa sashe lokacin girbi ku kwatanta a damina mai zuwa."],
          words: [["Taswirar sassa (zone map)", "taswirar gona da aka raba zuwa sassan kulawa."], ["Shaida (evidence)", "gaskiyar da za ku iya nunawa, kamar sakamakon gwaji, hoton NDVI ko rubutaccen girbi."], ["Lime", "maganin ƙasa da ke rage tsamin ƙasa mai tsami."]],
          slides: [
            { title: "Ku haɗa shaidun wuri ɗaya", bullets: ["Siffofin GPS da zane", "NDVI a ranaku biyu, sakamakon ƙasa", "Girbi da abin da kuke gani"] },
            { title: "Ku zana sassa 2 zuwa 4", bullets: ["Dole nau'in shaida biyu su yi daidai", "Ku sa suna bisa abin da suke", "Ku rubuta kowane girma"] },
            { title: "Tsari ga kowane sashe", bullets: ["Abin da zai canja", "Kuɗin misali", "Yadda za ku duba shi"] },
            { title: "Ku duba a damina mai zuwa", bullets: ["Girbi bisa sashe lokacin girbi", "Ku kwatanta NDVI", "Kayayyakin da aka yi wa rajista, kamar yadda takardar umarni ta ce"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi taswirar sassan gonarku da sassa 2 zuwa 4, kowanne da girmansa da aƙalla nau'in shaida biyu. Ku rubuta tsari ga kowane sashe: canjin, kuɗin misali a kuɗin ƙasarku, da yadda za ku duba a damina mai zuwa ko ya yi aiki.",
          youCanNow: "yin taswirar sassan gona daga nau'o'in shaida da dama da rubuta tsari da za a iya duba shi ga kowane sashe.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne isasshiyar shaida don zana sashe?", options: ["NDVI ƙasa a rana ɗaya mai gajimare", "Hasashen maƙwabci", "NDVI ƙasa a ranaku biyu da sakamakon pH ƙasa na gwajin ƙasa", "Talla"], answer: 2, why: "Nau'in shaida biyu da suka yi daidai suna sa sashe ya zama abin dogaro." },
            { objective: "O6", q: "Ta yaya za ku san tsarin sashe ya yi aiki?", options: ["Ku rubuta girbi bisa sashe lokacin girbi ku kwatanta a damina mai zuwa", "Ku ɗauka ya yi aiki", "Ku tambayi mai sayar da kayan noma", "Ku sake kallon tsarin"], answer: 0, why: "Bayanai bisa sashe ne kawai ke nuna ko canjin ya biya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Auna ƙasa da tsara aiki bisa sashe",
        questions: [
          { objective: "O4", q: "Mene ne samfurin ƙasa haɗaɗɗe?", options: ["Cikin felu ɗaya daga tsakiya", "Ƙananan samfura da yawa daga sashe ɗaya da aka gauraya tare", "Ƙasa daga tarin taki", "Samfuri daga hanya"], answer: 1, why: "Gauraya samfura da yawa yana ba da hoto na gaskiya na sashen." },
          { objective: "O4", q: "Taswirar iSDAsoil ta kyauta ta fi amfani don:", options: ["Maye gurbin dukkan gwaje-gwajen ƙasa", "Yanke yawan maganin kashe ƙwari", "Ganin hoton ƙasa gaba ɗaya kafin gwada gonarku", "Auna danshin ƙasa na yau"], answer: 2, why: "Hasashe ne daga lissafi, ba gwajin gonarku ba." },
          { objective: "O5", q: "Ƙaramin lissafin canji yana kwatanta:", options: ["Ƙarin kuɗi da ƙarin riba na canji ɗaya", "Dukkan kuɗin gona na shekaru goma", "Farashin amfanin gona kawai", "Kuɗin da ke asusun bankinku"], answer: 0, why: "Yana duba abin da ke canjawa kawai." },
          { objective: "O5", q: "Yaushe hidimar drone za ta iya zama da ma'ana?", options: ["Koyaushe, a kowace gona", "Ba ko kaɗan a Afirka", "Sai ba tare da lasisi ba", "A amfanin gona masu daraja ko manyan gonaki, ko idan ƙungiya ta raba, idan yana biya"], answer: 3, why: "Drone sun fi tsada; suna taimakawa inda daraja take da yawa ko ake raba kuɗi." },
          { objective: "O6", q: "Sassa nawa wannan kwas ke ba da shawara ga ƙaramar gona?", options: ["2 zuwa 4", "20 zuwa 40", "Ɗaya", "Ɗaya ga kowace shuka"], answer: 0, why: "'Yan sassa kaɗan sun isa a kula da su kuma a duba su da hannu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Noma da Cikakken Tsari: Kallon Gona ta Tauraron Ɗan Adam da Na'urorin Auna Ƙasa",
    questions: [
      { objective: "O1", q: "Noma da cikakken tsari a ƙaramar gona yana nufin:", options: ["Sayen tarakta mai na'urori", "Kula da sassan gona daban-daban ta hanyoyi daban-daban", "Amfani da yawan taki ɗaya ko'ina", "Noma ba tare da bayanai ba"], answer: 1, why: "Kowane sashe yana samun abin da yake buƙata." },
      { objective: "O1", q: "Wanne ne bambanci a cikin gona da za ku iya magancewa?", options: ["Launin wayarku", "Farashin kasuwa", "Wurin da ruwa yake tsayawa a ƙasan gonar", "Amfanin gonar maƙwabcinku"], answer: 2, why: "Ana iya yi wa wurin da ruwa yake tsayawa magudanar ruwa ko a shuka wani abu daban a wurin." },
      { objective: "O1", q: "Me ke zuwa da farko a noma da cikakken tsari a ƙaramar gona?", options: ["Zagaya gonar da rubuta bambance-bambance", "Sayen na'ura", "Ɗaukar hayar drone", "Canja dukkan kayan noma"], answer: 0, why: "Lura kyauta ce kuma tana jagorantar sauran." },
      { objective: "O2", q: "Me Sentinel-2 ke bayarwa kyauta?", options: ["Hotuna masu bayanin santimita 1", "Hasashen yanayi", "Gwajin ƙasa", "Hotuna kusan kowane kwana 5 da murabba'ai na 10 m"], answer: 3, why: "Bayanan Sentinel-2 kyauta ne kuma a buɗe suke a matakin 10 m." },
      { objective: "O2", q: "NDVI mai yawa yawanci yana nufin:", options: ["Ƙasa babu shuka", "Tsirrai kore masu yawa", "Ruwa da ke tsayawa", "Gajimare"], answer: 1, why: "Ganyaye masu lafiya suna mayar da haske ta hanyar da ke ba da NDVI mai yawa." },
      { objective: "O2", q: "Me yasa ake kwatanta NDVI a ranaku biyu?", options: ["Don ganin wuraren da ke zama marasa ƙarfi yayin da sauran ke girma", "Domin hoto ɗaya koyaushe ba daidai ba ne", "Don sa taswirar ta yi launuka", "Don ƙirga shuke-shuke"], answer: 0, why: "Wurin da NDVI ke zama ƙasa a ranaku daban-daban ya cancanci a je a gani." },
      { objective: "O2", q: "A lokacin damina kuna iya rashin samun hoto mai haske na tauraron ɗan adam saboda:", options: ["Taurarin ɗan adam suna tsayawa", "NDVI yana aiki a lokacin rani kawai", "Gajimare yana ɓoye ƙasa", "Amfanin gona sun yi tsayi sosai"], answer: 2, why: "Sentinel-2 ba ya iya gani ta cikin gajimare." },
      { objective: "O3", q: "Hekta ita ce:", options: ["10 m x 10 m", "1 km x 1 km", "Rabin eka", "100 m x 100 m, kusan eka 2.5"], answer: 3, why: "Hekta ɗaya = murabba'in mita 10,000." },
      { objective: "O3", q: "Ta yaya za ku sami karatun girman fili mafi kyau da GPS?", options: ["Ku yi gudu a kewayen gonar", "Ku yi tafiya a hankali a sararin sama, ku tsaya a kusurwoyi, ku zagaya sau biyu", "Ku riƙe wayar a aljihunku", "Ku tsaya ƙarƙashin bishiya"], answer: 1, why: "Tafiya a hankali, tsayawa da sararin sama suna inganta daidaito." },
      { objective: "O3", q: "Me yasa za ku auna kowane sashe a matsayin siffa ta kansa mai suna?", options: ["Don ku san girman kowane sashe don tsari da bayanai", "Domin GPS yana buƙatar haka", "Don rabawa a kafofin sada zumunta", "Ba shi da amfani"], answer: 0, why: "Girman kowane sashe ne ke tantance kayan nomansa da girbinsa a kowace eka." },
      { objective: "O4", q: "Wace hanyar gwajin ƙasa ce mafi daidai?", options: ["Na'ura mai arha", "Hasashe ta launi", "Gwajin lab da aka amince da ita", "Hoto ta WhatsApp"], answer: 2, why: "Lab ita ce ma'aunin da ake duba kayan gwaji da na'urori da ita." },
      { objective: "O4", q: "Kayan gwaji masu ɗaukuwa sun ba da sakamakon da bai tabbata ba a:", options: ["Launin ƙasa", "Nitrogen, phosphorus da potassium", "Girman gona", "Ruwan sama"], answer: 1, why: "Gwaje-gwaje masu zaman kansu sun gano pH ya yi kyau amma N, P da K ba su tabbata ba." },
      { objective: "O4", q: "Don ƙara amincewa da na'urar hannu, ya kamata ku:", options: ["Yi amfani da ita da dare kawai", "Kada ku taɓa kwatanta ta da komai", "Sayi ta biyu", "Kwatanta wasu sakamakonta da sakamakon lab"], answer: 3, why: "Daidaitawa da lab tana nuna iyakar amincewa da ita." },
      { objective: "O5", q: "Misali kawai: raba gona zuwa sassa ya ajiye taki na GHS 800 kuma gwajin lab ya ci GHS 300. Sakamakon shi ne:", options: ["Asarar GHS 500", "Babu canji", "Ribar GHS 500", "Ribar GHS 1,100"], answer: 2, why: "800 an ajiye a cire 300 kuɗi = 500 riba." },
      { objective: "O5", q: "Ƙungiyar manoma na iya rage kuɗin kayan aikin noma da cikakken tsari ta hanyar:", options: ["Raba mita ɗaya ko biyan gwaje-gwajen lab tare", "Kowa ya sayi drone", "Barin dukkan gwaje-gwaje", "Amfani da takin da ba a yi wa rajista ba"], answer: 0, why: "Rabawa yana raba kuɗin a kan gonaki da yawa." },
      { objective: "O5", q: "Don koyon taswira da drone, ya kamata ku:", options: ["Tuƙa ba tare da lasisi ba", "Ɗauki kwasa-kwasan drone da ake da su ku bi dokokin sufurin jiragen sama", "Yi amfani da wannan kwas kawai", "Kwaikwayi bidiyo a intanet"], answer: 1, why: "Kwasa-kwasan drone suna koyar da shi; ana buƙatar lasisi." },
      { objective: "O6", q: "Ya kamata sashe ya dogara da:", options: ["Hoto ɗaya mai gajimare", "Shawarar mai sayarwa", "Yanayin zuciyarku", "Aƙalla nau'in shaida biyu da suka yi daidai"], answer: 3, why: "Majiyoyi biyu da suka yi daidai suna sa sashe ya zama abin dogaro." },
      { objective: "O6", q: "Wanne ne tsari mai kyau ga sashe mai ruwa da yawa?", options: ["Ƙara taki ku yi fata", "Ku ƙyale shi", "Ku haƙa magudanar ruwa ko ku shuka amfanin gona da ke jure ƙasa mai ruwa, ku rubuta sakamakon", "Ku shuka abu ɗaya da na tudun da ke bushewa"], answer: 2, why: "Tsarin ya dace da dalilin, kuma ana duba shi da bayanai." },
      { objective: "O6", q: "Kowane tsarin sashe ya kamata ya haɗa da:", options: ["Abin da zai canja, kuɗinsa na misali da yadda za ku duba shi", "Launin sashen kawai", "Farashin amfanin gona kawai", "Babu komai; sassa na taswira ne kawai"], answer: 0, why: "Tsarin da ba za ku iya lissafa kuɗinsa ko duba shi ba ba tsari ba ne." },
      { objective: "O6", q: "Takin zamani da magungunan kashe ƙwari a tsarin sashe dole su zama:", options: ["Mafi arha da kuka samu", "Kayayyakin da aka yi wa rajista, ana amfani da su kamar yadda takardar umarni ta ce", "An gauraya su bisa hasashe", "An ninka su a sassa marasa ƙarfi"], answer: 1, why: "Kayayyakin da aka yi wa rajista kaɗai, ana amfani da su bisa umarni, su ne masu aminci kuma halal a doka." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An auna gona da sassanta", objective: "O3", notYet: "Babu iyaka, ko an yi hasashen girman filaye.", meets: "An zagaya iyaka da GPS kuma kowane sashe yana da siffa mai suna da girmansa.", exceeds: "An zagaya iyaka sau biyu kuma girma biyun sun yi kusa sosai." },
      { name: "An yi amfani da shaidar tauraron ɗan adam a hankali", objective: "O2", notYet: "Babu kallon tauraron ɗan adam, ko an ɗauki NDVI a matsayin dalili.", meets: "An kwatanta NDVI a ranaku biyu kuma an je wuraren da NDVI ke ƙasa don nemo dalili.", exceeds: "An rubuta abin da taswirar ba ta iya nunawa ba (gajimare, ƙananan gonaki, ciyawa) a wannan gonar." },
      { name: "Shaidar ƙasa", objective: "O4", notYet: "Babu bayanin ƙasa, ko an ɗauki sakamakon NPK na kayan gwaji a matsayin daidai gaba ɗaya.", meets: "An zaɓi hanyar gwaji ga kowane sashe tare da iyakar amincewa da ita.", exceeds: "Aƙalla sakamakon lab ɗaya ga kowane sashe, ko an kwatanta sakamakon kayan gwaji da lab." },
      { name: "Sassa da tsare-tsare", objective: "O6", notYet: "An zana sassa daga majiya ɗaya, ko babu tsari ga kowane sashe.", meets: "Sassa 2 zuwa 4, kowanne da nau'in shaida biyu da tsari, kuɗi da hanyar dubawa.", exceeds: "Kowane tsari ya ambaci bayanin da zai nuna ko ya yi aiki a damina mai zuwa." },
      { name: "Ya cancanci kuɗinsa", objective: "O5", notYet: "An zaɓi kayan aiki ba tare da lissafa kuɗi ba.", meets: "Ƙaramin lissafin canji da lambobin misali a kuɗin ƙasa yana goyon bayan tsarin.", exceeds: "An yi tunanin raba kuɗi da ƙungiya, ko hanya mafi arha da ke ba da amsa ɗaya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi amfani da aƙalla tsarin sashe ɗaya a damina mai zuwa (binciken biyo baya na kwana 30 da na ƙarshen damina)",
      "Masu koyo da suka rubuta girbi bisa sashe lokacin girbi",
      "Ajiyar kayan noma ko canjin girbi bisa sashe da aka bayar da rahoto bayan damina ɗaya",
      "Ƙungiyoyin manoma da suka raba gwajin ƙasa ko kayan aiki bayan kwas ɗin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai manhajar auna fili ko taswira ta GPS kyauta",
      "Intanet don shiga Copernicus Browser (kwamfuta ko burauzar waya)",
      "Gona da za a zagaya, takarda, alƙalami da zanen gonar mai sauƙi",
      "Burgun ƙasa (soil auger) ko felu da bokiti masu tsabta don samfura haɗaɗɗu; lab ko kayan gwaji idan akwai",
      "Kusan minti 90 gaba ɗaya da ƙarin lokaci a gona"
    ],
    facilitatorNotes: [
      "Ku yi Darasi na 1 da na 3 a gona: ku zagaya iyaka da sassa tare, ku kwatanta girman filin da GPS na wayoyi daban-daban.",
      "Ku shirya hoto mai haske na Copernicus Browser na wata gona ta yankin tun kafin lokaci; gajimaren damina na iya hana nunawa kai tsaye.",
      "Kada ku sayar ko ku tallata wata na'urar ƙasa ko manhaja; idan mai sayarwa ya halarta, ku nemi sakamakon gwaji na mai zaman kansa.",
      "Ku tunatar da masu koyo cewa NDVI yana nuna inda, ba dalili ba, kuma sakamakon NPK na kayan gwaji yana buƙatar duba da lab.",
      "Ku tura tambayoyin drone zuwa kwasa-kwasan drone; wannan kwas ba ya koyar da tuƙa su.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
