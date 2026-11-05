"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-staple-crop-husbandry.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KEPHIS = { name: "Hukumar Kula da Lafiyar Shuke-shuke ta Kenya (KEPHIS): tabbatar da iri da Jerin Nau'o'in Amfanin Gona na Ƙasa", url: "https://www.kephis.go.ke" };
const NASC = { name: "Majalisar Iri ta Noma ta Ƙasa (NASC, Najeriya): tabbatar da iri", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Cibiyar Binciken Noma da Kiwo ta Kenya (KALRO)", url: "https://www.kalro.org" };
const IITA = { name: "Cibiyar Ƙasa da Ƙasa ta Noma a Yankin Zafi (IITA)", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (hedikwata a Abidjan, Côte d'Ivoire)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA: Ƙoƙarin ƙungiyar IITA don yaƙar ƙwayoyin cutar da ke lalata rogo a Afirka (2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT: Fahimta da hana yaɗuwar cutar maize lethal necrosis (MLN) ta iri a Afirka", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS tare da AfricaRice: Bambancin jure cutar blast a shinkafar Yammacin Afirka (2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Hukumar Kayayyakin Kashe Ƙwari (PCPB, Kenya): kayayyakin da aka yi wa rajista", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Najeriya): sinadaran noma da aka yi wa rajista", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: littafin jagora na faɗakarwar noma kan sarrafa takin zamani", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry-ha",
  lang: "ha",
  translationOf: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Noman Zamani na Masara, Shinkafa, Rogo da Kayan Wake",
  skills: "Zaɓen nau'in amfanin gona da iri ingantacce, Lissafin yawan shuke-shuke da irin da ake buƙata daga tazara, Tsara lokacin shirya ƙasa, ba da taki da cire ciyawa, Gane cutar MLN ta masara, cututtukan rogo da blast ta shinkafa, Gane lokacin girbi da lissafin amfanin gona a kowace hekta da kowace eka",
  outcome: "rubuta tsarin noman damina na amfanin gona ɗaya na abinci (masara, shinkafa, rogo ko kayan wake) a gonarku: nau'in da iri, yawan shuke-shuke da irin da ake buƙata, kalanda mai kwanan wata na shirya ƙasa, shuka, ba da taki da cire ciyawa, manyan cututtukan da za a lura da su da abin da za a yi, da manufar amfanin gona a kowace hekta da kowace eka.",
  about: [
    "Wannan kwas na manoma ƙanana ne da manoman kasuwanci masu tasowa, ma'aikatan gona, matasan 'yan kasuwar noma da jami'an faɗakarwar noma (extension officers) da ke noman abincin da ke ciyar da Afirka: masara, shinkafa, rogo, wake, waken suya da gyaɗa. Misalan sun fito daga Kenya, Najeriya, Ghana da Côte d'Ivoire.",
    "Babi na 1 game da fara amfanin gona daidai ne: zaɓen nau'i daga cibiyar binciken ƙasarku da sayen iri ingantacce (certified seed) ko tsabtatattun yankan rogo, shirya ƙasa, lissafin yawan shuke-shuken da kuke buƙata da irin da za ku saya, da tsara lokacin ba da taki da cire ciyawa. Babi na 2 game da kare amfanin gona da auna shi ne: gane cutar MLN ta masara, cutar mosaic da brown streak ta rogo, da cutar blast ta shinkafa, sanin lokacin girbi, da lissafin amfanin gonarku a kowace hekta da kowace eka.",
    "Ana koyar da gwajin ƙasa da taki a kwas ɗin \"Lafiyar Ƙasa da Ƙarfinta\" (Soil Health and Fertility), ajiya kuma a \"Post-Harvest Handling and Storage\" (Kula da Amfanin Gona Bayan Girbi da Ajiya), don haka wannan kwas yana nuna muku su maimakon maimaita su. Nau'o'i, tazara da yawan taki sun bambanta da yanki, don haka ku yi amfani da wannan kwas tare da jami'in faɗakarwarku da cibiyar bincike. Akwai ɗan gwaji bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin noma na amfanin gona ɗaya na abinci a gonarku: girman gonar a hekta da a eka, nau'in da kuka zaɓa da inda za ku sayi iri ingantacce ko tsabtatattun yankan rogo, tazarar da lissafinku na yawan shuke-shuke da irin ko yankan da ake buƙata, kalanda mai kwanan wata (shirya ƙasa, shuka, taki kamar yadda gwajin ƙasarku ko jami'in faɗakarwa ya ba da shawara, kowace cire ciyawa), manyan cututtuka biyu da za ku lura da su da matakinku na farko ga kowacce, yadda za ku gane lokacin girbi, da manufar amfanin gona a kowace hekta da kowace eka tare da lissafinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma ƙanana da manoman kasuwanci masu tasowa, ma'aikatan gona, matasan 'yan kasuwar noma da jami'an faɗakarwar noma a duk Afirka da ke noman masara, shinkafa, rogo da kayan wake (wake, waken suya, gyaɗa), daga rabin eka zuwa 'yan hekta.",
    startingPoint: "Sun yi shekaru suna noman amfanin gonar, sau da yawa da irin da aka sake shukawa ko yankan rogo da aka raba, da shuka barkatai ko tazara marar daidai, da cire ciyawa a makare, kuma da ƙarancin bayanin amfanin gona. Da yawa ba su san yawan shuke-shukensu ba, ko wane nau'i suke da shi, ko yadda ake lissafin amfanin gona a kowace hekta ko eka.",
    gap: "Amfanin gona na abinci a gonaki da yawa na Afirka ya yi ƙasa sosai da abin da ingantattun nau'o'i da noma mai kyau za su iya bayarwa. Masu koyo suna buƙatar zaɓen nau'in da ya dace da iri mai tsabta, shuka yawan da ya dace, ba da taki da cire ciyawa a kan lokaci, gane cututtukan da ke lalata amfanin gona, girbi a lokacin da ya dace, da auna amfanin gonarsu don su ga abin da ke aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa harshensu na biyu suke karantawa",
      "Lissafi: ninkawa da raba mai sauƙi da na'urar lissafi ta waya; ana nuna kowane lissafi mataki-mataki",
      "Na'urori: waya mai sauƙi mai na'urar lissafi; tef ɗin awo ko igiya mai alamomi da sikeli suna taimakawa",
      "Nau'o'i, tazara da yawan taki sun bambanta da yanki kuma suna canjawa idan an fitar da sababbin nau'o'i; masu koyo su duba jerin nau'o'i na ƙasa da jami'in faɗakarwarsu",
      "Ana koyar da ƙarfin ƙasa a \"Lafiyar Ƙasa da Ƙarfinta\"; wannan kwas yana magana ne kawai kan abin da ya bambanta ga kowane amfanin gona"
    ],
    prerequisites: "Babu, amma ana ba da shawara sosai a ɗauki \"Lafiyar Ƙasa da Ƙarfinta\" kafin wannan kwas ko tare da shi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don amfanin gona na abinci da za ku shuka a damina mai zuwa", action: "zaɓen nau'i daga cibiyar binciken ƙasarku ko jerin nau'o'i, da faɗin wurin da aka yi wa rajista na sayen iri ingantacce ko tsabtatattun yankan rogo", standard: "kuna duba lakabi, hatimi ko majiyar kafin ku biya" },
    { id: "O2", condition: "Idan aka ba ku tazara da girman gonarku", action: "lissafin yawan shuke-shuke a kowace hekta da kowace eka, da irin ko yankan da kuke buƙata", standard: "kuna nuna kowane mataki na lissafin" },
    { id: "O3", condition: "Don amfanin gonar da kuka zaɓa da ranar shuka", action: "tsara shirya ƙasa, shuka, ba da taki da cire ciyawa a kalanda mai kwanan wata", standard: "cire ciyawa yana cikin makonnin farko masu muhimmanci na amfanin gonar" },
    { id: "O4", condition: "Idan aka ba ku alamomin shuka ko gona mara lafiya", action: "gane cutar MLN ta masara, mosaic ta rogo, brown streak ta rogo ko blast ta shinkafa, da zaɓen matakin farko", standard: "kuna haɗa kowace cuta da matakin farko da ya dace" },
    { id: "O5", condition: "A ƙarshen damina", action: "gane lokacin da amfanin gona ya isa girbi, da lissafin amfanin gona a kowace hekta da kowace eka daga girbin da aka auna", standard: "kuna amfani da girman ƙasa daidai kuma kuna nuna lissafinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fara amfanin gona daidai",
      lessons: [
        {
          title: "Zaɓen nau'i da sayen iri ingantacce",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi nau'in da ya dace da yankinku, ku faɗi wurin da aka yi wa rajista na sayen iri ingantacce ko tsabtatattun yankan rogo.",
          text: [
            "Nau'i (variety) iri ne na amfanin gona da aka haifa don wasu halaye: girma da wuri ko a makare, jure fari, jure cuta, launin hatsi ko ingancin dafuwa. Cibiyoyin bincike na ƙasa suna gwadawa suna fitar da nau'o'i ga kowane yanki: KALRO a Kenya, cibiyoyin binciken Najeriya da ke aiki tare da IITA, CSIR-Crops Research Institute a Ghana, da CNRA a Côte d'Ivoire. IITA tana aiki kan rogo, masara, wake da waken suya, AfricaRice kuma, mai hedikwata a Abidjan, kan shinkafa. Ku tambayi jami'in faɗakarwarku waɗanne nau'o'i ake ba da shawara don yankinku, ruwan saman ku da kasuwarku.",
            "Ku zaɓi abin da ya dace da yanayinku: nau'o'in da ke girma da wuri don gajeren damina ko wuraren da ba ruwa sosai, nau'o'in da ke jure cuta inda wata cuta ta zama ruwan dare (misali MLN ta masara ko brown streak ta rogo), da abin da masu saye ke so (farar masara ko rawaya, shinkafar da ake faka, rogo mai zaƙi ko mai ɗaci).",
            "Iri ingantacce (certified seed) iri ne da hukumar iri ta ƙasa ta duba tsabtarsa da tsiron sa. A Kenya, KEPHIS tana tabbatar da iri kuma tana fitar da Jerin Nau'o'in Amfanin Gona na Ƙasa, kuma fakitin iri ingantacce suna da lakabin KEPHIS da za ku iya tabbatarwa. A Najeriya, Majalisar Iri ta Noma ta Ƙasa (NASC) ce ke tabbatar da iri. Ku sayi fakiti a rufe, masu lakabi, daga dila da aka yi wa rajista. Dole ne a sayi sabon irin masarar hybrid kowace damina, domin amfanin gona yana raguwa idan kun sake shuka hatsinsa. Nau'o'in OPV da kayan wake za a iya ajiye irinsu na 'yan damina idan kun zaɓi iri mai tsabta daga shuke-shuke masu lafiya. Don rogo, ku samo tsabtatattun yankan rogo daga mai yawaitawa (multiplier) da aka duba ko daga gona mai lafiya, ba daga gonar da ke da mosaic ko brown streak ba. Don waken suya, ku tambayi game da inoculant (rhizobium) inda jami'in faɗakarwa ya ba da shawara."
          ],
          steps: ["Ku tambayi jami'in faɗakarwa waɗanne nau'o'i ake ba da shawara don yankinku da ruwan saman ku.", "Ku zaɓi bisa lokacin girma, jure cuta da abin da masu saye ke so.", "Ku duba nau'in a jerin ƙasa inda akwai (misali KEPHIS a Kenya).", "Ku sayi iri ingantacce a rufe, mai lakabi, daga dila da aka yi wa rajista; ku duba kwanan wata da lakabi.", "Don rogo, ku samo tsabtatattun yankan rogo daga mai yawaitawa da aka duba ko daga gona mai lafiya."],
          words: [["Nau'i (variety)", "irin amfanin gona da aka haifa don wasu halaye, kamar girma da wuri ko jure cuta."], ["Iri ingantacce (certified seed)", "irin da hukumar iri ta ƙasa ta duba tsabtarsa da tsiron sa."], ["Hybrid", "irin da aka samu daga haɗa layin iyaye biyu; yana ba da amfani sosai amma dole a sayi sabo kowace damina."], ["OPV", "open-pollinated variety: irin da za a iya ajiyewa a sake shukawa na 'yan damina idan an kiyaye tsabtarsa."], ["Inoculant", "kaya mai ƙwayoyin halitta masu amfani da ke taimakon kayan wake kamar waken suya su samar da nitrogen."]],
          slides: [
            { title: "Nau'o'i suna fitowa daga cibiyoyin bincike", bullets: ["Kenya: KALRO; Ghana: CSIR-Crops Research Institute", "Côte d'Ivoire: CNRA; shinkafa: AfricaRice", "Rogo, wake, waken suya, masara: IITA"] },
            { title: "Ku zaɓi abin da ya dace da yanayinku", bullets: ["Girma da wuri don gajeren damina ko rani", "Jure cututtukan yankinku", "Abin da masu sayenku ke so"] },
            { title: "Iri ingantacce", bullets: ["Kenya: lakabin KEPHIS da za ku iya tabbatarwa", "Najeriya: tabbatarwar NASC", "A rufe, mai lakabi, dila mai rajista"] },
            { title: "Hybrid, OPV da yankan rogo", bullets: ["Masarar hybrid: ku sayi sabo kowace damina", "OPV da kayan wake: ku ajiye iri mai tsabta na 'yan damina", "Rogo: tsabtatattun yanka, ba daga gona mara lafiya ba"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "Don amfanin gona ɗaya na abinci da za ku shuka a damina mai zuwa, ku tambayi jami'in faɗakarwarku ko mai sayar da kayan noma nau'o'i biyu da ake ba da shawara. Ku rubuta lokacin girmansu, jure cuta da inda za ku sayi iri ingantacce ko tsabtatattun yankan rogo. Idan kuna Kenya, ku duba nau'in da dilan a jerin KEPHIS.",
          youCanNow: "zaɓen nau'in da ya dace da yankinku, da sayen iri ingantacce ko tsabtatattun yankan rogo daga wurin da aka yi wa rajista.",
          quickCheck: [
            { objective: "O1", q: "Kun shuka masarar hybrid a damina da ta wuce. Za ku iya sake shuka hatsin da kuka girbe?", options: ["E, zai ba da amfani iri ɗaya", "E, idan kun shuka su a kusa-kusa", "A'a, amfanin gona yana raguwa; ku sayi sabon irin hybrid ingantacce", "Sai dai idan kun jiƙa shi a ruwa"], answer: 2, why: "Irin hybrid yana rasa ƙarfinsa a zuri'a ta gaba, don haka ana buƙatar sabon iri kowace damina." },
            { objective: "O1", q: "Rogon maƙwabcinku yana da ganye masu rawaya da kore barkatai (mosaic). Ya ba ku yankan rogo. Me za ku yi?", options: ["Ku karɓa; yankan kyauta ne", "Ku ƙi, ku samo tsabtatattun yanka daga mai yawaitawa da aka duba ko gona mai lafiya", "Ku karɓa ku shuka su kusa da hanya", "Ku karɓi yankan saman kawai"], answer: 1, why: "Ƙwayoyin cutar rogo suna tafiya cikin yankan rogo, don haka gona mara lafiya tana yaɗa cutar zuwa taku." }
          ]
        },
        {
          title: "Shirya ƙasa da yawan shuke-shuke",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lissafin shuke-shuke a kowace hekta da kowace eka daga tazara, da irin ko yankan da kuke buƙata.",
          text: [
            "Ku shirya ƙasa don amfanin gonar. Ku share ba tare da ƙonewa ba, kuma ku bar ragowar shuke-shuke a matsayin rufi inda za ku iya. Masara, wake da gyaɗa suna buƙatar gadon shuka mai ƙarfi da ƙasa mai laushi a kewayen iri; noma kaɗan (minimum tillage) ko ramukan shuka suna aiki a wurare da yawa. A Najeriya da Ghana ana yawan shuka rogo a kunyoyi ko tuddai da ke zubar da ruwa da kyau. Shinkafar fadama tana buƙatar bango-bangon ƙasa (bunds), gona mai daidai da sarrafa ruwa mai kyau; ana yawan yin puddling don shinkafar da ake dasawa.",
            "Yawan shuke-shuke shi ne adadin shuke-shuke a kowace hekta. Shuke-shuke kaɗan suna ɓata ƙasa; da yawa sosai kuma suna gasa haske, ruwa da abinci. Ku yi amfani da tazarar da jagorar faɗakarwarku ta bayar don nau'inku da yankinku. Don lissafi: fili na shuka ɗaya = tazarar layi x tazarar shuka (a mita). Shuke-shuke a kowace hekta = 10,000 m2 / fili na kowace shuka. Shuke-shuke a kowace eka = 4,047 m2 / fili na kowace shuka (eka ɗaya kusan 4,047 m2 ce, hekta ɗaya kuma kusan eka 2.47).",
            "Misalan lissafi, idan jagorarku ta ba da waɗannan tazara: masara a 75 cm x 25 cm, iri ɗaya a kowane rami: 0.75 x 0.25 = 0.1875 m2, don haka 10,000 / 0.1875 = kusan shuke-shuke 53,300 a kowace hekta, ko 4,047 / 0.1875 = kusan 21,600 a kowace eka. Rogo a 1 m x 1 m: shuke-shuke 10,000 a kowace hekta, kusan 4,000 a kowace eka. Shinkafar da aka dasa a 20 cm x 20 cm: 0.04 m2, don haka kurmi 250,000 a kowace hekta. Wake a 50 cm x 10 cm: 0.05 m2, don haka shuke-shuke 200,000 a kowace hekta.",
            "Irin da ake buƙata: adadin iri / adadin iri a kowane kg (ku ƙirga ku auna iri 100, ko ku karanta fakitin) = kg, sannan ku ƙara kusan 10% don giɓi. Don rogo, ku ƙirga yanka (sau da yawa tsawonsu kusan 20 zuwa 25 cm, daga kara da ya nuna), da wasu kaɗan na ajiya. Sannan ku cike giɓi cikin mako ɗaya ko biyu bayan tsiro."
          ],
          steps: ["Ku auna gonarku a mita; fili = tsawo x faɗi.", "Ku samo tazarar da ake ba da shawara don nau'inku da yankinku.", "Fili na kowace shuka = tazarar layi x tazarar shuka (a mita).", "Shuke-shuke a kowace hekta = 10,000 / fili na kowace shuka; a kowace eka = 4,047 / fili na kowace shuka.", "Shuke-shuke a gonarku = filin gona / fili na kowace shuka.", "Iri: shuke-shuke / iri a kowane kg, da ƙarin kusan 10%."],
          words: [["Yawan shuke-shuke", "adadin shuke-shuke a kowace hekta ko kowace eka."], ["Hekta (ha)", "fili mai murabba'in mita 10,000, kusan eka 2.47."], ["Eka (acre)", "fili mai kusan murabba'in mita 4,047, kusan hekta 0.4."], ["Bund", "ƙaramin bangon ƙasa a kewayen gonar shinkafa da ke riƙe ruwa."], ["Puddling", "noman ƙasa mai ruwa a gonar shinkafa don yin laka mai laushi da ke riƙe ruwa da hana ciyawa."]],
          slides: [
            { title: "Ku shirya ƙasa don amfanin gonar", bullets: ["Ba ƙonewa; ku bar ragowar shuke-shuke a matsayin rufi", "Gadon shuka mai laushi don masara, wake, gyaɗa", "Kunyoyi ko tuddai don rogo; bunds da gona mai daidai don shinkafa"] },
            { title: "Dabarar lissafin yawan shuke-shuke", bullets: ["Fili na kowace shuka = tazarar layi x ta shuka (m)", "A kowace hekta = 10,000 / fili na kowace shuka", "A kowace eka = 4,047 / fili na kowace shuka"] },
            { title: "Misalan lissafi", bullets: ["Masara 75 x 25 cm: kusan 53,300/ha, 21,600/eka", "Rogo 1 x 1 m: 10,000/ha", "Shinkafa 20 x 20 cm: kurmi 250,000/ha"] },
            { title: "Iri nawa ake buƙata?", bullets: ["Shuke-shuke / iri a kowane kg, da ƙarin kusan 10%", "Ku ƙirga ku auna iri 100 idan fakitin bai faɗa ba", "Ku cike giɓi cikin mako ɗaya ko biyu"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Ku auna ɗaya daga cikin gonakinku (ko ku ninka girmanta a eka da 4,047 don samun murabba'in mita). Ku samo tazarar amfanin gonarku daga jami'in faɗakarwa, sannan ku lissafa shuke-shuke a kowace hekta, a kowace eka da a gonarku, da irin ko yankan rogo nawa za ku saya.",
          youCanNow: "lissafin yawan shuke-shuke a kowace hekta da kowace eka daga tazara, da irin ko yankan rogo nawa kuke buƙata.",
          quickCheck: [
            { objective: "O2", q: "An shuka rogo a 1 m x 1 m. Shuke-shuke nawa ne a kowace hekta?", options: ["1,000", "4,047", "100,000", "10,000"], answer: 3, why: "Kowace shuka tana amfani da 1 m2, kuma hekta 10,000 m2 ce." },
            { objective: "O2", q: "Gona hekta 0.5 ce, kuma masara tana buƙatar kusan shuke-shuke 53,300 a kowace hekta. Kusan shuke-shuke nawa kuke buƙata?", options: ["26,650", "53,300", "106,600", "5,330"], answer: 0, why: "0.5 x 53,300 = shuke-shuke 26,650." }
          ]
        },
        {
          title: "Ba da taki da cire ciyawa a kan lokaci",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tsara shuka, ba da taki da cire ciyawa a kalanda mai kwanan wata don amfanin gonarku.",
          text: [
            "Ana koyar da gwajin ƙasa, takin dabbobi, takin gargajiya (compost) da takin zamani a \"Lafiyar Ƙasa da Ƙarfinta\"; ku yi amfani da gwajin ƙasarku ko shawarar jami'in faɗakarwarku kan abin da za ku sa da yawansa. Abin da ke canjawa da amfanin gona shi ne lokaci da abin da kowanne ya fi buƙata. Masara tana jin yunwar nitrogen sosai, kuma tana buƙatar sa da wuri da kuma lokacin da take girma da sauri. Kayan wake (wake, waken suya, gyaɗa) suna samar da yawancin nitrogen ɗinsu ta ƙullukan saiwa, don haka suna buƙatar phosphorus fiye da nitrogen. Rogo yana girma a ƙasa mara ƙarfi, amma yana ɗauke potassium mai yawa daga ƙasa a tsawon lokaci. Ana yawan ba shinkafa nitrogen a kashi-kashi; nitrogen mai yawa yana ƙara tsananin cutar blast.",
            "Ciyawa tana sace ruwa, haske da abinci fiye da kowane lokaci a makonnin farko bayan amfanin gona ya tsiro. Wannan shi ne lokaci mai muhimmanci (critical period): a lokacin ne ciyawa ke rage amfanin gona fiye da kowane lokaci, kuma cire ciyawa daga baya ba zai dawo da shi ba. Jagorori da yawa suna ba da cire ciyawa na farko kusan makonni biyu zuwa uku bayan amfanin gona ya tsiro, na biyu kuma bayan 'yan makonni; ku duba jagorar yankinku. Rogo yana girma a hankali a farko, kuma yana buƙatar a kiyaye shi daga ciyawa kusan watanni uku na farko, har sai ganyensa sun rufe ƙasa. A shinkafar fadama, daidaita gona da kyau da riƙe ruwa a gonar suna taimakawa wajen hana ciyawa.",
            "Maganin ciyawa (herbicide) yana iya rage aiki, amma dole ne a yi masa rajista don amfanin gonarku (PCPB a Kenya, NAFDAC a Najeriya) kuma a yi amfani da shi kamar yadda lakabinsa ya faɗa, da kayan kariya. Ku sa komai a kalanda da aka ƙirga daga ranar shuka, don aiki da kuɗi su kasance a shirye a kan lokaci."
          ],
          steps: ["Ku rubuta ranar shukarku.", "Ku ƙara shirya ƙasa a makonnin da ke gabanta.", "Ku ƙara ba da taki kamar yadda gwajin ƙasarku ko jami'in faɗakarwa ya ba da shawara, a matakin girma da ya dace.", "Ku ƙara cire ciyawa na farko a cikin makonnin farko masu muhimmanci, da na gaba.", "Ku rubuta lokacin da kuke buƙatar ma'aikata, kayan noma da kuɗi don kowane aiki."],
          words: [["Lokaci mai muhimmanci (critical period)", "makonnin farko da ciyawa ke rage amfanin gona fiye da kowane lokaci; dole a cire ciyawa a lokacin."], ["Ƙullukan saiwa (root nodules)", "ƙananan kumburi a saiwar kayan wake inda ƙwayoyin halitta ke mayar da nitrogen daga iska zuwa abincin shuka."], ["Kashi-kashi (split dose)", "ba da taki a kashi biyu ko fiye a matakan girma daban-daban maimakon gaba ɗaya a lokaci ɗaya."], ["Maganin ciyawa (herbicide)", "sinadari da ke kashe ciyawa; dole a yi masa rajista kuma a yi amfani da shi kamar yadda lakabinsa ya faɗa."]],
          slides: [
            { title: "Ƙarfin ƙasa: duba Lafiyar Ƙasa da Ƙarfinta", bullets: ["Ku yi amfani da gwajin ƙasarku ko shawarar jami'in faɗakarwa", "Wannan darasi: abin da ya bambanta ga kowane amfanin gona"] },
            { title: "Abin da kowane amfanin gona ya fi buƙata", bullets: ["Masara: nitrogen, da wuri da lokacin da take girma", "Kayan wake: phosphorus; suna samar da nitrogen ɗinsu", "Rogo: potassium a tsawon lokaci; shinkafa: nitrogen kashi-kashi"] },
            { title: "Ku cire ciyawa a lokaci mai muhimmanci", bullets: ["Makonnin farko bayan tsiro sun fi muhimmanci", "Sau da yawa cire ciyawa na farko a kusan mako 2 zuwa 3; ku duba a yankinku", "Rogo: ku kiyaye shi daga ciyawa kusan watanni 3 na farko"] },
            { title: "Ku sa shi a kalanda", bullets: ["Ku ƙirga daga ranar shuka", "Ma'aikata, kayan noma da kuɗi a shirye a kan lokaci", "Maganin ciyawa: rajista, lakabi, kayan kariya (PPE)"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Ku rubuta kalanda don amfanin gonarku daga ranar shukar da kuka tsara: shirya ƙasa, shuka, kowane ba da taki da gwajin ƙasarku ko jami'in faɗakarwa ya ba da shawara, da kowace cire ciyawa. Ku yi wa lokacin cire ciyawa mai muhimmanci alama da wani launi daban.",
          youCanNow: "tsara ba da taki da cire ciyawa a kalanda mai kwanan wata don a hana ciyawa a makonnin farko masu muhimmanci.",
          quickCheck: [
            { objective: "O3", q: "Yaushe ciyawa ke rage amfanin gona fiye da kowane lokaci?", options: ["Kafin girbi kaɗan", "A makonnin farko bayan amfanin gona ya tsiro", "Bayan girbi", "A lokacin rani kawai"], answer: 1, why: "Lokaci mai muhimmanci shi ne makonnin farko; cire ciyawa daga baya ba zai dawo da wannan amfanin ba." },
            { objective: "O3", q: "Wane amfanin gona ne ke samar da yawancin nitrogen ɗinsa ta ƙullukan saiwa?", options: ["Masara", "Shinkafa", "Rogo", "Wake"], answer: 3, why: "Kayan wake kamar wake suna samar da nitrogen da taimakon ƙwayoyin halitta a ƙullukan saiwarsu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fara amfanin gona daidai",
        questions: [
          { objective: "O1", q: "A Kenya, wace hukuma ce ke tabbatar da iri kuma take fitar da Jerin Nau'o'in Amfanin Gona na Ƙasa?", options: ["KEPHIS", "Ofishin hanyoyi na gundumar", "Kasuwar yankin", "Banki"], answer: 0, why: "KEPHIS tana tabbatar da iri kuma tana jera nau'o'in da aka fitar a Kenya." },
          { objective: "O1", q: "Yankinku yana yawan samun gajeren damina. Wane halin nau'i ne ya fi muhimmanci?", options: ["Girma a makare", "Girma da wuri", "Dogon kara", "Hatsi ja"], answer: 1, why: "Nau'in da ke girma da wuri yana gamawa kafin ruwan sama ya ƙare." },
          { objective: "O2", q: "Masara a 75 cm x 25 cm tana amfani da fili nawa a kowace shuka?", options: ["1 m2", "0.25 m2", "0.1875 m2", "0.75 m2"], answer: 2, why: "0.75 m x 0.25 m = 0.1875 m2." },
          { objective: "O2", q: "Kusan murabba'in mita nawa ne a eka ɗaya?", options: ["10,000", "1,000", "2,470", "4,047"], answer: 3, why: "Eka ɗaya kusan 4,047 m2 ce; hekta ɗaya 10,000 m2 ce." },
          { objective: "O3", q: "Ina wannan kwas yake tura ku don yawan takin da za ku sa?", options: ["Gwajin ƙasarku da jami'in faɗakarwarku, kamar yadda yake a Lafiyar Ƙasa da Ƙarfinta", "Buhu mafi girma a shago", "Duk abin da maƙwabci ya yi amfani da shi", "Adadi ɗaya ga kowane amfanin gona"], answer: 0, why: "Yawan taki ya dogara da ƙasarku da amfanin gonarku, don haka yana fitowa daga gwajin ƙasa ko jami'in faɗakarwa." }
        ]
      }
    },
    {
      name: "Babi na 2: Kare amfanin gona da auna shi",
      lessons: [
        {
          title: "Manyan cututtuka: MLN ta masara, cututtukan rogo da blast ta shinkafa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Gane cutar MLN ta masara, mosaic ta rogo, brown streak ta rogo da blast ta shinkafa, da zaɓen matakin farko.",
          text: [
            "Cutar maize lethal necrosis (MLN) ta addabi Kenya sosai daga 2011 kuma ta yaɗu a Gabashin Afirka. CIMMYT ta bayyana cewa tana faruwa ne idan ƙwayoyin cuta biyu suka kama masara tare: maize chlorotic mottle virus da wata potyvirus kamar sugarcane mosaic virus. Ganye suna nuna ɗigon rawaya barkatai, sannan su bushe daga gefe zuwa ciki; tsakiyar shukar na iya mutuwa, kuma kawunan masara ƙanana ne, babu hatsi ko sun ruɓe. Ƙwari kamar thrips da aphids suna yaɗa ta a gona, kuma iri mai cuta yana iya ɗaukar ta zuwa wurare masu nisa. Mataki: ku shuka iri ingantacce na nau'o'in da ke jure MLN, ku daina shuka masara na damina ɗaya tare da maƙwabtanku, ku cire masarar da ta tsiro da kanta, ku cire ciyawa, ku tumɓuke ku lalata shuke-shuke marasa lafiya da wuri, kuma ku sanar da jami'in faɗakarwa.",
            "Cutar cassava mosaic (CMD) tana sa ganye su zama rawaya da kore barkatai (mosaic), su murɗe, su yi ƙanana, kuma tana hana shukar girma. Cutar cassava brown streak (CBSD) tana nuna wuraren rawaya a kan jijiyoyin tsofaffin ganye da layukan ruwan ƙasa a kara, amma babbar ɓarnar a ɓoye take: saiwoyin rogo suna ruɓewa da ruɓa mai tauri, ruwan ƙasa da bushe, wani lokaci yayin da ganye suka yi kama da masu lafiya. IITA ta ƙiyasta cewa waɗannan cututtuka biyu suna jawo wa Afirka asarar kusan dalar Amurka biliyan 1 a shekara. Ƙudajen whitefly suna yaɗa duka biyun, amma babbar hanyar yaɗuwa zuwa wurare masu nisa ita ce manoma suna raba yankan rogo masu cuta. Mataki: ku shuka tsabtatattun yankan nau'o'in da ke jure cutar, ku tumɓuke ku lalata shuke-shuke marasa lafiya da wuri, kada ku taɓa ɗaukar yanka daga gona mara lafiya, kuma a Gabashin Afirka ku tono 'yan saiwoyi don duba ruɓa mai ruwan ƙasa kafin girbi.",
            "Cutar rice blast cuta ce ta fungus kuma babbar matsala ce a Yammacin Afirka. A ganye tana yin ɗigogi masu siffar lu'u-lu'u ko ido, da tsakiya mai launin toka da gefe ruwan ƙasa. Idan ta kama wuyan da ke ƙarƙashin kan shinkafa (panicle), kan yana zama fari kuma babu hatsi. Bincike tare da AfricaRice ya gano cewa nau'o'in da ke jure cutar su ne hanya mafi araha ga ƙananan manoma, amma fungus ɗin yana iya karya wannan juriya 'yan shekaru bayan an yaɗa shuka wani nau'i, don haka sababbin nau'o'i suna da muhimmanci. Mataki: ku shuka nau'in da aka ba da shawara cewa yana jure cutar, ku guji nitrogen mai yawa, ku guji wahalar ƙishirwa a shinkafar tudu, ku yi amfani da iri mai tsabta, kuma ku share ragowar shuke-shuke masu cuta. Ku yi amfani da maganin fungus kawai idan jami'in faɗakarwa ya ba da shawara kuma an yi masa rajista don shinkafa."
          ],
          steps: ["Ku zagaya gona kowane mako; ku kwatanta abin da kuka gani da alamomin wannan darasi.", "Ku ɗauki hoton shuke-shuke marasa lafiya ku tambayi jami'in faɗakarwa ko asibitin shuke-shuke (plant clinic) su tabbatar.", "Ku tumɓuke ku lalata shuke-shuke marasa lafiya da wuri (MLN da cututtukan rogo).", "Damina mai zuwa: iri ingantacce ko tsabtatattun yankan nau'in da ke jure cutar.", "Ku haɗa kai da maƙwabta kan juya amfanin gona da tsabtatattun kayan shuka."],
          words: [["MLN", "maize lethal necrosis: cutar da ƙwayoyin cuta biyu tare ke jawowa, kuma tana iya kashe shuke-shuken masara."], ["CMD", "cassava mosaic disease: cutar ƙwayar cuta da ke sa ganyen rogo su zama barkatai, su murɗe, su yi ƙanana."], ["CBSD", "cassava brown streak disease: cutar ƙwayar cuta da ke jawo ruɓa mai ruwan ƙasa da bushe a saiwoyin rogo."], ["Rice blast", "cutar fungus ta shinkafa da ke yin ɗigogi masu siffar ido a ganye kuma tana iya barin kan shinkafa fari babu hatsi."], ["Tumɓukewa (rogue)", "cire da lalata shuke-shuke masu cuta don kada su yaɗa cutar."]],
          slides: [
            { title: "Maize lethal necrosis (MLN)", bullets: ["Ƙwayoyin cuta biyu tare (CIMMYT)", "Ɗigon rawaya barkatai, ganye suna bushewa daga gefe", "Ƙwari da iri mai cuta ne ke yaɗa ta"] },
            { title: "Mosaic da brown streak ta rogo", bullets: ["CMD: ganye barkatai, murɗaɗɗu, ƙanana", "CBSD: rawayar jijiyoyi, layuka a kara, ruɓar saiwa ruwan ƙasa", "Whitefly da raba yankan rogo ne ke yaɗa su"] },
            { title: "Rice blast", bullets: ["Ɗigogi masu siffar ido, tsakiya toka, gefe ruwan ƙasa", "Blast ta wuya: kan shinkafa fari, babu hatsi", "Juriya na iya karyewa bayan 'yan shekaru"] },
            { title: "Matakan farko", bullets: ["Ku tabbatar da jami'in faɗakarwa ko asibitin shuke-shuke", "Ku tumɓuke shuke-shuke marasa lafiya da wuri", "Damina mai zuwa: iri mai tsabta, nau'o'i masu jurewa, juya amfanin gona"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Ku zagaya gonarku (ko ta maƙwabci) ku nemi alamomin cutar da ta fi muhimmanci ga amfanin gonarku. Ku rubuta abin da kuka gani, ku ɗauki hoton duk abin da kuke shakka, kuma ku rubuta matakin farko da za ku ɗauka don wannan cuta.",
          youCanNow: "gane cutar MLN ta masara, mosaic ta rogo, brown streak ta rogo da blast ta shinkafa, da zaɓen matakin farko.",
          quickCheck: [
            { objective: "O4", q: "Ganyen rogonku sun yi kama da masu lafiya, amma saiwoyin da aka tono suna da ruɓa mai tauri, ruwan ƙasa da bushe. Abin da ya fi yiwuwa ya jawo haka shi ne:", options: ["Cutar cassava brown streak", "Ruwan sama mai yawa lokacin shuka", "Tsutsar fall armyworm", "Rice blast"], answer: 0, why: "CBSD tana ruɓar da saiwoyi, wani lokaci da ƙananan alamomi a ganye kawai." },
            { objective: "O4", q: "Ganyen shinkafa suna da ɗigogi masu siffar ido da tsakiya toka da gefe ruwan ƙasa. Wane mataki ne mai kyau?", options: ["Ku ƙara takin nitrogen", "Ku sake shuka iri ɗaya a damina mai zuwa", "Ku nemi jami'in faɗakarwa ya tabbatar da blast, ku shuka nau'in da ke jure ta a damina mai zuwa", "Ku cika gidan da ruwa"], answer: 2, why: "Waɗannan ɗigogin blast ne; nau'o'in da ke jure ta da daidaitaccen nitrogen su ne manyan hanyoyin sarrafa ta." }
          ]
        },
        {
          title: "Sanin lokacin girbi",
          objectives: ["O5"],
          minutes: 4,
          goal: "Gane lokacin da masararku, shinkafarku, rogonku ko kayan wakenku suka isa girbi.",
          text: [
            "Idan kun girbe da wuri, hatsi yana da sauƙi kuma yana da danshi; idan kun girbe a makare, kuna rasa amfanin gona ga tsuntsaye, ɓeraye, ruwan sama, zubewa da ruɓa, kuma hatsi ya fi yiwuwa ya kamu da aflatoxin (gubar fungus). Ana koyar da busarwa da ajiya a \"Post-Harvest Handling and Storage\" (Kula da Amfanin Gona Bayan Girbi da Ajiya).",
            "Masara ta nuna idan baƙin layi (black layer) ya fito inda hatsi ya haɗu da kai, kuma ganyen da ke rufe kan sun bushe; ku buɗe 'yan kawuna ku karya 'yan hatsi don dubawa. Sannan ku busar da ita sosai kafin ajiya. Shinkafa ta isa idan yawancin hatsin da ke kan sun zama ruwan zinariya kuma sun yi tauri; jira da yawa yana jawo zubewa da asara ga tsuntsaye. Wake sun isa idan yawancin kwasfa sun bushe kuma suna ƙara idan an girgiza; ku tsinka kafin su fashe. Gyaɗa ta isa idan ganye sun yi rawaya kuma cikin yawancin ɓawo ya yi duhu; ku tono 'yan shuke-shuke don dubawa.",
            "Rogo ba shi da rana ɗaya ta girbi: kowane nau'i yana da lokacin girmansa, kuma saiwoyi za su iya zama a ƙasa na ɗan lokaci. Amma saiwoyin da suka daɗe sosai suna iya zama kamar itace, kuma inda brown streak ta zama ruwan dare, ruɓar tana ƙara tsanani. Da zarar an tono shi, rogo yana lalacewa cikin 'yan kwanaki, don haka ku girbe abin da za ku iya sayarwa ko sarrafawa da sauri kawai. A Ghana da Najeriya, manoma da yawa suna daidaita girbi da ƙarfin masu sarrafa gari ko fufu."
          ],
          steps: ["Ku san lokacin girman nau'inku daga fakitin iri ko jami'in faɗakarwa.", "Ku duba 'yan shuke-shuke a sassa daban-daban na gona, ba ɗaya kawai ba.", "Masara: baƙin layi da busassun ganyen kai; shinkafa: yawancin hatsi ruwan zinariya da tauri.", "Kayan wake: busassun kwasfa masu ƙara; gyaɗa: cikin ɓawo ya yi duhu.", "Rogo: ku girbe abin da za ku iya sayarwa ko sarrafawa cikin 'yan kwanaki kawai."],
          words: [["Baƙin layi (black layer)", "baƙin wuri inda hatsin masara ya haɗu da kai; yana nuna hatsin ya daina cika."], ["Zubewa (shattering)", "hatsi ko kwasfa suna faɗuwa ko fashewa a gona kafin girbi."], ["Lokacin girma (maturity period)", "tsawon lokacin da nau'i ke ɗauka daga shuka zuwa girbi."]],
          slides: [
            { title: "Da wuri ko a makare, duka suna jawo asara", bullets: ["Da wuri: hatsi mai sauƙi, mai danshi", "A makare: tsuntsaye, ɓeraye, ruwan sama, zubewa, ruɓa", "Busarwa da ajiya: duba kwas ɗin Bayan Girbi"] },
            { title: "Amfanin gona na hatsi", bullets: ["Masara: baƙin layi, busassun ganyen kai", "Shinkafa: yawancin hatsi ruwan zinariya da tauri", "Ku duba shuke-shuke da yawa a sassan gona"] },
            { title: "Kayan wake da rogo", bullets: ["Wake: busassun kwasfa masu ƙara", "Gyaɗa: cikin ɓawo ya yi duhu", "Rogo: yana lalacewa cikin 'yan kwanaki bayan tono"] }
          ],
          tryIt: "Don amfanin gonarku, ku rubuta lokacin girman nau'in, alamomin da za ku duba, da ranar da kuke tsammanin fara dubawa. Idan amfanin gonarku yana gona yanzu, ku duba shuke-shuke biyar a sassan gona ku rubuta abin da kuka gani.",
          youCanNow: "gane lokacin da amfanin gonarku na abinci ya isa girbi.",
          quickCheck: [
            { objective: "O5", q: "Ta yaya za ku san hatsin masara ya daina cika?", options: ["Ganye har yanzu kore ne", "Baƙin layi ya fito inda hatsi ya haɗu da kai", "Tutar masara ta fito", "An yi ruwan sama sau biyu"], answer: 1, why: "Baƙin layi yana nuna masarar ta nuna." },
            { objective: "O5", q: "Me yasa za ku girbe rogon da za ku iya sayarwa ko sarrafawa cikin 'yan kwanaki kawai?", options: ["Saiwoyin rogo suna lalacewa da sauri bayan an tono su", "Saiwoyin rogo suna sake girma bayan tono", "Masu saye sun fi son saiwoyi busassu", "Ganye ne babban amfanin"], answer: 0, why: "Saiwoyin rogo sabbi suna lalacewa cikin 'yan kwanaki bayan girbi." }
          ]
        },
        {
          title: "Lissafin amfanin gona da rubuta tsarin noma",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Lissafin amfanin gona a kowace hekta da kowace eka, da rubuta tsarin noma na amfanin gona ɗaya na abinci a gonarku.",
          text: [
            "Amfanin gona (yield) shi ne nauyin abin da kuka girbe a kowane fili. Don ku san shi, ku auna girbinku bayan busarwa, kuma ku san ainihin filin da ya fito. Amfani a kowace hekta = kg da aka girbe / fili a m2 x 10,000. Amfani a kowace eka = kg da aka girbe / fili a m2 x 4,047. Ko daga kowace hekta zuwa kowace eka: ku raba da 2.47.",
            "Misali, masara a Kenya: kun girbe kg 1,350 na busasshen hatsi daga gona mai 3,000 m2. A kowace hekta: 1,350 / 3,000 x 10,000 = kg 4,500, ko tan 4.5. A kowace eka: 4,500 / 2.47 = kusan kg 1,820, wato kusan buhu 20 na kg 90. Ƙiyasi mai sauri kafin girbi: ku yi alamar murabba'i 10 m x 10 m (100 m2) a wani sashe na gona da ya yi kama da sauran, ku girbe ku busar, ku auna, sannan ku ninka da 100 don samun kg a kowace hekta. Ku yi haka a wurare biyu ko uku ku ɗauki matsakaici.",
            "Yanzu ku haɗa dukan kwas ɗin a tsarin noma na amfanin gona ɗaya na abinci a gonarku: girman gona, nau'i da inda za a sayi iri, tazara da yawan shuke-shuke da irin da ake buƙata, kalanda mai kwanan wata na shirya ƙasa, shuka, ba da taki da cire ciyawa, manyan cututtuka da matakinku na farko, yadda za ku gane lokacin girbi, da manufar amfanin gona a kowace hekta da kowace eka. Bayan girbi, ku kwatanta ainihin amfanin gonar da manufarku, ku rubuta abin da za ku canja. Manomiya a Côte d'Ivoire da ke rubuta amfanin shinkafarta kowace damina za ta iya nuna wa mai saye, ƙungiyar haɗin gwiwa ko mai ba da bashi abin da gonarta ke samarwa."
          ],
          steps: ["Ku auna filin da aka girbe a m2.", "Ku auna busasshen girbin a kg.", "A kowace hekta = kg / m2 x 10,000; a kowace eka = kg / m2 x 4,047.", "Ko ku gwada 100 m2 a wurare 2 ko 3, ku auna ku ninka da 100 don kg/ha.", "Ku rubuta tsarin: nau'i, iri, yawan shuke-shuke, kalanda, cututtuka, girbi, manufar amfani.", "Bayan girbi, ku kwatanta ainihin amfani da manufar."],
          words: [["Amfanin gona (yield)", "yawan abin da aka girbe a kowane fili, kamar kg a kowace hekta ko buhu a kowace eka."], ["Tan (tonne)", "kilogram 1,000."], ["Filin gwaji (sample plot)", "ƙaramin fili mai alama da ake girbewa a auna don ƙiyasta amfanin dukan gonar."]],
          slides: [
            { title: "Dabarun lissafin amfanin gona", bullets: ["A kowace ha = kg / fili (m2) x 10,000", "A kowace eka = kg / fili (m2) x 4,047", "Daga kowace ha zuwa kowace eka: ku raba da 2.47"] },
            { title: "Misalin lissafi: masara", bullets: ["kg 1,350 daga 3,000 m2", "= kg 4,500/ha (tan 4.5/ha)", "= kusan kg 1,820/eka, kusan buhu 20 na kg 90"] },
            { title: "Ƙiyasi da filin gwaji", bullets: ["Ku yi alamar 10 m x 10 m (100 m2)", "Ku girbe, ku busar, ku auna; x 100 = kg/ha", "Ku yi a wurare 2 ko 3 ku ɗauki matsakaici"] },
            { title: "Tsarin nomanku", bullets: ["Nau'i, iri, yawan shuke-shuke, kalanda", "Cututtuka da matakan farko", "Alamomin girbi da manufar amfani a kowace ha da eka"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin nomanku na amfanin gona ɗaya na abinci a gonarku: girman gona a hekta da eka, nau'i da inda za a sayi iri, tazara da lissafin yawan shuke-shuke da irin da ake buƙata, kalanda mai kwanan wata (shirya ƙasa, shuka, ba da taki, cire ciyawa), manyan cututtuka biyu da matakinku na farko ga kowacce, alamomin girbi, da manufar amfani a kowace hekta da kowace eka tare da lissafinku.",
          youCanNow: "lissafin amfanin gona a kowace hekta da kowace eka, da rubuta tsarin noma na amfanin gona ɗaya na abinci a gonarku.",
          quickCheck: [
            { objective: "O5", q: "Kun girbe kg 900 na busasshen wake daga 4,047 m2. Nawa ne amfanin a kowace eka?", options: ["Kusan kg 450", "Kusan kg 2,224", "kg 900", "Kusan kg 4,047"], answer: 2, why: "4,047 m2 eka ɗaya ce, don haka amfanin kg 900 ne a kowace eka." },
            { objective: "O5", q: "Filin gwaji na 100 m2 ya ba da kg 40 na busasshiyar masara. Nawa ne ƙiyasin amfani a kowace hekta?", options: ["kg 40", "kg 400", "kg 40,000", "kg 4,000"], answer: 3, why: "Hekta ɗaya ta ninka 100 m2 sau 100, don haka 40 x 100 = kg 4,000 a kowace hekta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kare amfanin gona da auna shi",
        questions: [
          { objective: "O4", q: "Abin da ke jawo cutar maize lethal necrosis shi ne:", options: ["Rana mai yawa", "Ƙwayoyin cuta biyu da suka kama shukar tare", "Ƙarancin potassium", "Tsutsar fall armyworm ita kaɗai"], answer: 1, why: "CIMMYT ta bayyana MLN a matsayin kamuwa da ƙwayoyin cuta biyu tare." },
          { objective: "O4", q: "Mene ne babbar hanyar da cututtukan rogo ke yaɗuwa zuwa wurare masu nisa?", options: ["Iska tana hura ganye", "Fesawar ruwan sama", "Raba yankan rogo masu cuta", "Kashin tsuntsaye"], answer: 2, why: "Whitefly tana yaɗa su a kusa; yankan rogo masu cuta suna kai su nesa." },
          { objective: "O4", q: "Wace al'ada ce ke ƙara tsananin rice blast?", options: ["Takin nitrogen mai yawa", "Amfani da iri mai tsabta", "Shuka nau'in da ke jure cutar", "Share ragowar shuke-shuke masu cuta"], answer: 0, why: "Nitrogen mai yawa yana sa shinkafa ta fi saurin kamuwa da blast." },
          { objective: "O5", q: "Shinkafa ta isa girbi idan:", options: ["Furanni na farko sun buɗe", "Ganye sun yi kore sosai", "Ta yi wata ɗaya a gona", "Yawancin hatsin da ke kan sun zama ruwan zinariya kuma sun yi tauri"], answer: 3, why: "Hatsi ruwan zinariya mai tauri yana nuna amfanin gona ya nuna; girbi a makare yana jawo zubewa da asara ga tsuntsaye." },
          { objective: "O5", q: "Kuna samun kg 4,940 a kowace hekta. Kusan nawa ne wannan a kowace eka?", options: ["kg 2,000", "kg 12,200", "kg 4,940", "kg 494"], answer: 0, why: "4,940 / 2.47 = kg 2,000 a kowace eka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Noman Zamani na Masara, Shinkafa, Rogo da Kayan Wake",
    questions: [
      { objective: "O1", q: "A ina ya kamata ku fara nema don nau'o'in da suka dace da yankinku?", options: ["Tallar kafofin sada zumunta", "Cibiyar binciken ƙasarku da jami'in faɗakarwarku", "Iri mafi arha a kasuwa", "Rumbun hatsin damina da ta wuce"], answer: 1, why: "Cibiyoyin bincike suna gwadawa suna fitar da nau'o'i ga kowane yanki." },
      { objective: "O1", q: "Wace hukuma ce ke tabbatar da iri a Najeriya?", options: ["NAFDAC", "Babban banki", "KEPHIS", "Majalisar Iri ta Noma ta Ƙasa (NASC)"], answer: 3, why: "NASC ce ke tabbatar da iri a Najeriya." },
      { objective: "O1", q: "Me ya kamata ku duba kafin ku biya fakitin iri ingantacce?", options: ["Hatimi, lakabi da kwanan wata", "Launin buhun kawai", "Farashi kawai", "Babu komai"], answer: 0, why: "Fakiti a rufe, mai lakabi da kwanan wata daga dila mai rajista shi ne kariyarku daga iri na bogi." },
      { objective: "O1", q: "Wace cibiyar CGIAR ce ke aiki kan shinkafa a Afirka?", options: ["IITA", "ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "AfricaRice, mai hedikwata a Abidjan, tana aiki kan shinkafa." },
      { objective: "O2", q: "Murabba'in mita nawa ne a hekta ɗaya?", options: ["4,047", "1,000", "100", "10,000"], answer: 3, why: "Hekta ita ce 100 m x 100 m = 10,000 m2." },
      { objective: "O2", q: "Shinkafar da aka dasa a 20 cm x 20 cm tana ba da kurmi nawa a kowace hekta?", options: ["25,000", "250,000", "2,500", "40,000"], answer: 1, why: "0.2 x 0.2 = 0.04 m2; 10,000 / 0.04 = 250,000." },
      { objective: "O2", q: "Wake a 50 cm x 10 cm suna buƙatar kusan shuke-shuke nawa a kowace eka?", options: ["Kusan 80,900", "Kusan 200,000", "Kusan 8,090", "Kusan 40,470"], answer: 0, why: "0.5 x 0.1 = 0.05 m2; 4,047 / 0.05 = kusan 80,900." },
      { objective: "O2", q: "Me yasa ake ƙara kusan 10% na iri?", options: ["Don ciyar da tsuntsaye", "Don buhun ya yi nauyi", "Don rufe irin da bai tsiro ba da cike giɓi", "Domin doka ta ce haka"], answer: 2, why: "Wasu iri ba sa tsiro; ƙarin iri yana ba ku damar cike giɓi." },
      { objective: "O3", q: "Me kayan wake suka fi buƙata fiye da nitrogen?", options: ["Gishiri", "Phosphorus", "Sukari", "Farar ƙasa (lime) kowane mako"], answer: 1, why: "Kayan wake suna samar da yawancin nitrogen ɗinsu amma har yanzu suna buƙatar phosphorus." },
      { objective: "O3", q: "Yaushe ya kamata a yi cire ciyawa na farko yawanci?", options: ["Kafin girbi kaɗan", "Sai idan ciyawa ta yi fure", "Bayan amfanin gona ya kai gwiwa kuma ya fitar da tuta", "A makonnin farko masu muhimmanci, sau da yawa kusan mako 2 zuwa 3 bayan amfanin gona ya tsiro"], answer: 3, why: "Ciyawa tana rage amfanin gona fiye da kowane lokaci a makonnin farko." },
      { objective: "O3", q: "Me yasa za ku sa daminarku a kalanda da aka ƙirga daga ranar shuka?", options: ["Don ma'aikata, kayan noma da kuɗi su kasance a shirye a kan lokaci", "Don burge baƙi", "Domin iri suna karanta kalanda", "Ba shi da amfani"], answer: 0, why: "Kalanda mai kwanan wata tana tabbatar da cewa ana yin kowane aiki a matakin girma da ya dace." },
      { objective: "O3", q: "Kusan tsawon wane lokaci ya kamata a kiyaye rogo daga ciyawa?", options: ["Mako ɗaya", "Bayan girbi kawai", "Kusan watanni uku na farko, har sai ganyensa sun rufe ƙasa", "Ba a taɓa ba"], answer: 2, why: "Rogo yana girma a hankali a farko kuma yana buƙatar hana ciyawa da wuri har sai ganyensa sun rufe ƙasa." },
      { objective: "O4", q: "Ɗigon rawaya barkatai a ganyen masara da suke bushewa daga gefe, da kawunan masara ƙanana ko ruɓaɓɓu, suna nuna:", options: ["Maize lethal necrosis", "Rice blast", "Lafiya mai kyau", "Potassium mai yawa"], answer: 0, why: "Waɗannan alamomin MLN ne da aka saba gani." },
      { objective: "O4", q: "Ganyen rogo masu rawaya da kore barkatai, murɗaɗɗu da ƙanana suna nuna:", options: ["Cassava brown streak kawai", "Ƙarancin hasken rana", "Cutar cassava mosaic", "Tsutsar fall armyworm"], answer: 2, why: "Ganye barkatai (mosaic) da murɗewa su ne alamomin CMD." },
      { objective: "O4", q: "Me ya kamata ku fara yi da 'yan shuke-shuke da ke nuna alamomin MLN ko cutar rogo?", options: ["Ku ɗauki yanka daga gare su", "Ku tabbatar da jami'in faɗakarwa, ku tumɓuke ku lalata su da wuri", "Ku fesa musu taki", "Ku bar su su warke"], answer: 1, why: "Tumɓukewa da wuri yana cire tushen ƙwayar cutar." },
      { objective: "O4", q: "Me yasa ake ci gaba da fitar da sababbin nau'o'in shinkafa masu jure blast?", options: ["Tsohon iri yana canja launi", "Manoma sun gaji", "Shinkafa tana buƙatar ƙarin ruwa kowace shekara", "Fungus ɗin yana iya karya juriyar 'yan shekaru bayan an yaɗa shuka wani nau'i"], answer: 3, why: "Juriya ga blast na iya karyewa, don haka masu haifar iri suna ci gaba da samar da sababbin nau'o'i." },
      { objective: "O5", q: "Gyaɗa ta isa girbi idan:", options: ["Ta fara yin fure", "Ganye sun yi rawaya kuma cikin yawancin ɓawo ya yi duhu", "An yi ruwan sama sau ɗaya", "Kwasfa suna da laushi kuma farare a ciki"], answer: 1, why: "Cikin ɓawo da ya yi duhu da ganye masu rawaya suna nuna ta nuna." },
      { objective: "O5", q: "Kun girbe kg 600 na busasshiyar masara daga 1,500 m2. Nawa ne amfanin a kowace hekta?", options: ["kg 600", "kg 9,000", "kg 1,500", "kg 4,000"], answer: 3, why: "600 / 1,500 x 10,000 = kg 4,000 a kowace hekta." },
      { objective: "O5", q: "Don mayar da amfani a kowace hekta zuwa amfani a kowace eka, kuna:", options: ["Raba da 2.47", "Ninka da 2.47", "Ƙara 4,047", "Raba da 10"], answer: 0, why: "Hekta ɗaya kusan eka 2.47 ce, don haka amfanin a kowace eka ya fi ƙanƙanta." },
      { objective: "O5", q: "Me yasa za ku kwatanta ainihin amfaninku da manufar tsarinku bayan girbi?", options: ["Kamfanin iri ne ya buƙata", "Don ganin abin da ya yi aiki da abin da za a canja a damina mai zuwa", "Don samun buhun taki kyauta", "Ba shi da amfani"], answer: 1, why: "Kwatanta sakamako da tsari yana nuna inda za a inganta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi tare da jami'in faɗakarwarku.",
    criteria: [
      { name: "Nau'i da iri", objective: "O1", notYet: "Ba a faɗi nau'i ba, ko irin hatsin hybrid ne da aka sake shukawa ko yankan rogo daga gona mara lafiya.", meets: "An faɗi nau'in da ake ba da shawara don yankin, tare da wurin da aka yi wa rajista na sayen iri ingantacce ko tsabtatattun yankan rogo.", exceeds: "An kwatanta nau'o'i biyu kan lokacin girma, jure cuta da kasuwa, kuma an bayyana dalilin zaɓen." },
      { name: "Yawan shuke-shuke da irin da ake buƙata", objective: "O2", notYet: "Babu tazara ko lissafi, ko lissafin ba daidai ba ne.", meets: "An lissafa tazara, shuke-shuke a kowace hekta, a kowace eka da a gona, da irin ko yankan rogo da ake buƙata daidai, tare da nuna matakai.", exceeds: "Ya kuma tsara cike giɓi da ƙirga shuke-shuke bayan tsiro don duba ainihin yawansu." },
      { name: "Kalanda mai kwanan wata", objective: "O3", notYet: "An jera ayyuka ba tare da kwanan wata ba, ko cire ciyawa ya yi latti.", meets: "An sa kwanan wata ga shirya ƙasa, shuka, ba da taki (daga gwajin ƙasa ko jami'in faɗakarwa) da kowace cire ciyawa daga ranar shuka, kuma cire ciyawa na farko yana cikin lokaci mai muhimmanci.", exceeds: "Ma'aikata, kayan noma da kuɗin da ake buƙata don kowane aiki suna cikin kalandar." },
      { name: "Lura da cututtuka", objective: "O4", notYet: "Ba a faɗi cututtuka ba, ko matakan ba su dace da su ba.", meets: "An faɗi manyan cututtuka biyu na amfanin gonar tare da alamominsu da matakin farko daidai ga kowacce.", exceeds: "Ya haɗa da rigakafi na damina mai zuwa da aka amince da shi tare da maƙwabta, kamar juya amfanin gona ko tsabtatattun kayan shuka." },
      { name: "Girbi da manufar amfani", objective: "O5", notYet: "Babu alamomin girbi ko manufar amfani, ko lissafin amfanin ba daidai ba ne.", meets: "Alamomin girbi na amfanin gonar da manufar amfani a kowace hekta da kowace eka tare da lissafi daidai.", exceeds: "Ya haɗa da hanyar filin gwaji don ƙiyasta amfani kafin girbi, da tsarin kwatanta sakamakon da manufar." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shuka iri ingantacce ko tsabtatattun yankan rogo na nau'in da ake ba da shawara a damina ta gaba (binciken biyo baya)",
      "Masu koyo da suka auna girbinsu kuma suka ba da rahoton amfani a kowace hekta ko kowace eka bayan damina",
      "Canjin amfanin da aka ba da rahoto a kowace hekta na amfanin gonar da aka zaɓa daga damina ɗaya zuwa ta gaba",
      "Ƙarancin gonakin da aka rasa saboda MLN ta masara ko cututtukan rogo a ƙungiyoyin masu koyo (rahotannin faɗakarwar noma)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai na'urar lissafi, ko takarda, alƙalami da na'urar lissafi mai sauƙi",
      "Tef ɗin awo ko igiya mai alama a kowace mita, da sikeli don auna girbi",
      "Damar shiga gonar masara, shinkafa, rogo ko kayan wake",
      "Jerin nau'o'i na ƙasa ko nau'o'in da jami'an faɗakarwa ke ba da shawara don yankin",
      "Kusan minti 60 zuwa 90 gaba ɗaya don darussa, ƙananan gwaje-gwaje da jarabawa, da atisaye a gona"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi lissafin yawan shuke-shuke da na amfanin gona a gona da tef ɗin awo da shuke-shuke na gaske.",
      "Ku samo nau'o'i da tazarar da ake ba da shawara don yankinku daga cibiyar bincike ko jami'in faɗakarwa kafin zaman; kada ku ƙirƙira su.",
      "Ku kawo hotuna ko samfuran gaske na MLN, mosaic ta rogo, brown streak ta rogo (har da saiwar da aka yanka) da rice blast idan suna faruwa a yankinku.",
      "Ƙungiyoyin manoma da suka amince kan juya amfanin gona da tsabtatattun kayan shuka sun fi iya sarrafa MLN da cututtukan rogo; ku yi amfani da zaman don fara wannan tattaunawa.",
      "Ku ba da maki ga tsarin noma da ma'aunin rubric, kuma ku duba kowane lissafi tare da mai koyo.",
      "Ku dawo bayan girbi don kwatanta ainihin amfanin kowane mai koyo da manufar da ke cikin tsarinsa."
    ]
  }
};
