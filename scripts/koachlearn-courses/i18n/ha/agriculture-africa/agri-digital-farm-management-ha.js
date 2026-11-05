"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-digital-farm-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KOBO = { name: "KoboToolbox (fom ɗin tattara bayanai kyauta da ke aiki ba tare da intanet ba)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner, Kenya (ofishin kare bayanan sirri)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC), Najeriya (hukumar kare bayanan sirri)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Data Protection Commission, Ghana (Dokar Kare Bayanai ta 2012, Act 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO: Aikin yara a harkar noma", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management-ha",
  lang: "ha",
  translationOf: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Gudanar da Gona da Bayanai ta Manhajojin Waya",
  skills: "Zaɓen manhajar gona ko takardar lissafi ta haɗin gwiwa, Kafa rajistar gona da jerin kayan gona, Biyan ma'aikata ta kuɗin waya tare da bayanai, Kare bayanan gona da na ma'aikata, Gudanar da manajan gona daga nesa, Duba allon lambobi biyar kowane mako",
  outcome: "gudanar da gonarku daga wayarku: ajiye rajista ɗaya ta gonaki, dabbobi, ayyuka, ma'aikata da kayan gona da ke ajiye, biyan ma'aikata ta kuɗin waya tare da bayanin kowane biya, samun rahoton yau da kullum daga manajanku da za ku iya tabbatarwa, da duba lambobi biyar kowane mako don yanke abin da za ku yi gaba.",
  about: [
    "Wannan kwas na manoma ne da gonarsu ke girma: kuna da ma'aikata, gonaki da yawa ko garken dabbobi ko kaji, kuma wataƙila kuna zaune a gari yayin da manaja ke kula da gonar. Ya dace da ƙananan manoma masu kasuwanci, matasa 'yan kasuwar noma, masu gona da ke zaune a Nairobi, Lagos, Accra ko Dakar, da manajojin gona da ke kai musu rahoto.",
    "Ya wuce ajiye bayanai na farko. Za ku zaɓi manhajar gudanar da gona ko takardar lissafi ta haɗin gwiwa, ku kafa rajistar gonaki, dabbobi, ayyuka da kayan gona, ku biya ma'aikata ku rubuta bayanansu ta kuɗin waya, ku kare bayanan gona da na ma'aikata, ku kafa tsarin rahoton yau da kullum da manaja da za ku iya tabbatarwa, sannan ku gina allon lambobi biyar na kowane mako.",
    "Kwas ɗin ba ya ba da shawarar wata manhaja. Yana nuna muku abubuwan da za ku nema, don ku iya auna kowace manhaja, ko ku gina tsari iri ɗaya a takardar lissafi kyauta. Lambobin kuɗi misali ne kawai. Kowane darasi yana ƙarewa da aiki a gonarku; akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Idan ba ku taɓa ajiye bayanan gona ba, ku fara ɗaukar kwas ɗin \"Bayanan Noma da Fasaha\"."
  ],
  finalTask: "Ku gina allon lambobi na kowane mako don gonarku (lambobi na gaske ko na misali): lambobi biyar, kowanne da inda ya fito a rajistarku, da manufa ko iyakar da aka saba, da matakin da za ku ɗauka idan ya kauce. Sannan ku rubuta tsarin rahoto mai shafi ɗaya ga wanda ke kula da gonar kowace rana: abin da rahoton WhatsApp na yau da kullum zai ƙunsa (hotuna, lambobi, matsaloli), lokacin da za a aiko shi, ganawar kowane mako, yadda za ku tabbatar da shi (bincike ba zato, ƙirga kaya, bayanan kuɗin waya), da wanda zai iya ganin waɗanne bayanai.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoma masu kasuwanci da ke girma, matasa 'yan kasuwar noma, masu gona da ke zaune nesa da manajojin gona a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire da sauran Afirka. Da yawa suna noma amfanin gona da kiwon dabbobi tare (masara, tumatir, kaji, awaki, aladu, kifin tilapia) kuma suna ɗaukar ma'aikata na ɗan lokaci ko na dindindin.",
    startingPoint: "Suna amfani da wayar zamani kowace rana don kira, WhatsApp da kuɗin waya. Wasu suna rubuta bayanai a littafi ko takardar lissafi mai sauƙi. Kaɗan ne ke da tsari ɗaya da ke haɗa gonaki, dabbobi, ma'aikata, kuɗi da kaya, kuma masu gona da yawa suna dogara ga kiran waya don sanin abin da ke faruwa a gonar.",
    gap: "Yayin da gona ke girma, kuɗi suna zubewa ta kwanakin aiki da ba a rubuta ba, kayan gona da suka ɓace, dabbobin da suka mutu da aka gano a makare, da shawarwarin da aka yanke bisa tsammani. Masu koyo suna buƙatar tsari mai sauƙi da ke haɗa bayanai, biya da rahotanni, da al'adar duba ƴan lambobi kowane mako, don su iya gudanarwa daga nesa su kuma gano matsaloli da wuri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kwas ɗin yana kuma samuwa a Spanish, French da Arabic",
      "Na'urori: wayar Android mai araha; kwamfuta tana taimakawa amma ba dole ba ce",
      "Intanet: hanyar sadarwa ba ta da ƙarfi a gonaki da yawa, don haka kayan aiki dole su yi aiki ba tare da intanet ba ko ta WhatsApp",
      "Kuɗi: kayan aiki kyauta da farko; ba a amince da wata manhaja ba; duk lambobin kuɗi misali ne",
      "Dokokin sirri suna aiki kan bayanan ma'aikata (Kenya, Najeriya, Ghana da wasu suna da dokokin kare bayanai)",
      "Babu PIN, kalmar sirri (password) ko lambar katin shaida a kowane aikin gwaji"
    ],
    prerequisites: "Sanin amfani da wayar zamani, WhatsApp da kuɗin waya. Ana ba da shawarar a fara ɗaukar \"Bayanan Noma da Fasaha\" (bayanai na farko da takardar lissafi)."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin abubuwan da gonarku ke buƙatar bibiya", action: "kwatanta manhajojin gudanar da gona ko takardar lissafi ta haɗin gwiwa da jerin abubuwan da ake nema, da zaɓar ɗaya", standard: "kuna ba da maki ga aƙalla zaɓi biyu kuma kuna rubuta dalilin zaɓinku" },
    { id: "O2", condition: "Ta amfani da kayan aikin da kuka zaɓa", action: "kafa rajistar gona ta gonaki, dabbobi, ayyuka da kayan gona da sunaye da ma'aunai da ba sa canjawa", standard: "ta yadda za a iya haɗa kowane bayani bisa gona, rukunin dabbobi ko kayan gona" },
    { id: "O3", condition: "Idan aka ba ku aikin mako ɗaya na ma'aikata na ɗan lokaci da na dindindin", action: "rubuta kwanaki da ayyukan kowane ma'aikaci da biyansa ta kuɗin waya tare da bayani da ya dace", standard: "ta yadda kowane biya yana da kwanan wata, ma'aikaci, aiki, adadin kuɗi da lambar ciniki" },
    { id: "O4", condition: "Idan manaja ko ɗan uwa ne ke kula da gonar lokacin da ba ku nan", action: "rubuta tsarin rahoton yau da kullum da hotuna da rahotannin WhatsApp, ganawar kowane mako da bincike ba zato", standard: "kuna faɗin abin da za a ba da rahoto, kafin wane lokaci, da yadda za ku tabbatar da shi" },
    { id: "O5", condition: "Ta amfani da rajistar gonarku", action: "gina allon lambobi biyar na kowane mako da matakin da kowace lamba ke kawowa", standard: "ana sabunta shi kowane mako daga bayanai, ba daga tunani ba" },
    { id: "O6", condition: "Idan kuna tattara bayanai game da gonarku da ma'aikatanku", action: "yanke abin da za a tattara, wanda zai iya gani, da yadda za a kare shi", standard: "kuna tattara abin da kuke buƙata kawai kuma ba ku raba PIN, kalmar sirri ko lambar katin shaida" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kafa tsarin gonarku",
      lessons: [
        {
          title: "Zaɓen manhajar gona ko takardar lissafi ta haɗin gwiwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi manhajar gudanar da gona ko takardar lissafi ta haɗin gwiwa ta hanyar ba ta maki da jerin abubuwan da ake nema.",
          text: [
            "Manhajar gudanar da gona tana ajiye gonakinku, dabbobi, ayyuka, kaya da kuɗi a wuri ɗaya a wayarku. Akwai su da yawa, kuma suna canjawa sau da yawa, don haka wannan kwas ba ya ba da shawarar ɗaya. Takardar lissafi ta haɗin gwiwa kyauta (Google Sheets ko Microsoft Excel) za ta iya yin aiki iri ɗaya idan kun kafa ta da kyau. Abin da ya fi muhimmanci shi ne ku da ma'aikatanku ku riƙa amfani da ita kowace rana.",
            "Ku fara da abin da kuke buƙatar bibiya, sannan ku ba kowane zaɓi maki. Abubuwan da za ku nema: tana aiki ba tare da intanet ba kuma tana daidaitawa (sync) daga baya (gonaki da yawa ba su da hanyar sadarwa mai ƙarfi); gonaki da rukunin dabbobi a matsayin bayanai daban-daban; hanya mai sauƙi ta rubuta ayyuka da kayan gona; adadin kaya da ke raguwa idan an yi amfani da kayan gona; bayanan ma'aikata da na biya; hotuna; masu amfani da yawa da izini daban-daban (ma'aikaci zai iya shigar da bayanai amma ba zai ga albashi ba); fitar da bayanai zuwa takardar lissafi (export) don kada bayananku su makale; harshenku; da farashi da ƙa'idar sirri a sarari.",
            "Ku yi hankali da manhajojin da ke kyauta saboda suna sayar da bayananku, waɗanda ke buƙatar intanet mai sauri, ko waɗanda ba za ku iya barin su da bayananku ba. Ku tambayi sauran manoma a yankinku abin da suke amfani da shi, ku gwada kowace manhaja na makonni biyu da bayanai na gaske, kuma ku duba farashin bayan lokacin gwaji kyauta kafin ku saka dukkan bayananku a ciki."
          ],
          steps: ["Ku rubuta abin da dole ku bibiya: gonaki, dabbobi, aiki, ma'aikata, kaya, sayarwa.", "Ku zaɓi zaɓuɓɓuka biyu ko uku, har da takardar lissafi ta haɗin gwiwa kyauta.", "Ku ba kowanne maki da jerin: ba tare da intanet ba, masu amfani da izini, kaya, ma'aikata, hotuna, export, harshe, farashi, sirri.", "Ku gwada mafi kyau na makonni biyu da bayanai na gaske.", "Ku rubuta zaɓinku da dalilinsa."],
          words: [["Manhajar gudanar da gona", "shirin waya ko na intanet don rubutawa da tsara gonaki, dabbobi, ayyuka, kaya da kuɗin gona."], ["Sync (daidaitawa)", "lokacin da manhaja ke tura bayanan da aka ajiye a waya zuwa intanet idan an sami hanyar sadarwa."], ["Export (fitarwa)", "fitar da bayananku daga manhaja, misali a matsayin fayil na takardar lissafi."]],
          slides: [
            { title: "Manhaja ko takardar lissafi ta haɗin gwiwa?", bullets: ["Dukansu za su iya aiki", "Abin da ya fi muhimmanci: ku da ma'aikatanku kuna amfani da ita kullum", "Ba a ba da shawarar wata manhaja a nan: ku auna ta abubuwan da take da su"] },
            { title: "Abubuwan da za ku nema", bullets: ["Tana aiki ba tare da intanet ba, tana daidaitawa daga baya", "Gonaki, dabbobi, ayyuka, kaya, ma'aikata", "Masu amfani da yawa da izini daban-daban", "Fitar da bayanai zuwa takardar lissafi"] },
            { title: "Alamun gargaɗi", bullets: ["Kyauta ce saboda tana sayar da bayananku", "Tana buƙatar intanet mai sauri", "Ba za ku iya fitar da bayananku ba", "Farashi bai bayyana ba bayan gwaji"] },
            { title: "Ku yanke shawara", bullets: ["Ku ba zaɓi biyu ko uku maki", "Ku gwada ɗaya na makonni biyu", "Ku rubuta zaɓinku da dalilinsa"] }
          ],
          tryIt: "Ku rubuta jerin abubuwan da gonarku dole ta bibiya. Ku yi teburin maki: abubuwan da ake nema a gefe, zaɓuɓɓuka biyu ko uku a sama (ɗaya na iya zama takardar lissafi ta haɗin gwiwa kyauta). Ku ba kowanne maki, sannan ku rubuta zaɓinku da dalilinku.",
          youCanNow: "auna kowace manhajar gona ko takardar lissafi ta abubuwan da take da su, da zaɓar ɗaya da dalili a sarari.",
          quickCheck: [
            { objective: "O1", q: "Gonarku a Kakamega sau da yawa ba ta da hanyar sadarwa. Wane abu ne ya fi muhimmanci?", options: ["Launuka masu haske", "Tana aiki ba tare da intanet ba kuma tana daidaitawa daga baya", "Yawan masu saukewa", "Kiran bidiyo"], answer: 1, why: "Idan manhajar ba za ta iya ajiye bayanai ba tare da hanyar sadarwa ba, ma'aikata za su daina amfani da ita." },
            { objective: "O1", q: "Me yasa za ku duba ko manhaja za ta iya fitar da bayananku (export)?", options: ["Don kada bayananku su makale a cikin manhaja ɗaya", "Don waya ta yi sauri", "Domin doka ta ce kowane manomi dole ya fitar", "Don samun rangwame"], answer: 0, why: "Export yana bar ku matsar da bayananku zuwa takardar lissafi ko wata manhaja a kowane lokaci." }
          ]
        },
        {
          title: "Kafa gonaki, dabbobi, ayyuka da jerin kayan gona",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kafa rajistar gona da sunaye da ma'aunai da ba sa canjawa, da jerin kayan gona.",
          text: [
            "Rajista ita ce ƙashin bayan tsarin. Ku ba kowace gona gajeren suna da ba ya canjawa da girmanta (misali \"F1 Tomato 0.5 acre\"), kuma kowane rukunin dabbobi ko tafki suna da adadi (\"Layers House A, 500 birds\", \"Goats 24\", \"Pond 2 tilapia\"). Ku yi amfani da sunaye iri ɗaya a kowane bayani don ku iya haɗa kuɗin da aka kashe da abin da aka samu bisa gona ko rukuni.",
            "Sannan ku yi littafin ayyuka: kwanan wata, gona ko rukuni, aiki (shuka, cire ciyawa, fesa magani, ciyarwa, allurar da likitan dabbobi ya yi, girbi, sayarwa), adadi, ma'auni, kuɗi, wanda ya yi aikin, da hoto idan yana da amfani. Ku tsayar da ma'aunai: kilogram, lita, buhun 50 kg, kwalaye (crates), tiren ƙwai 30. Haɗa ma'aunai daban-daban yana ɓata jimla.",
            "Ku ƙara jerin kayan gona: kowane kaya da ma'auninsa, abin da ya shigo, abin da aka yi amfani da shi da abin da ya rage. Idan ma'aikaci ya rubuta \"2 bags NPK used on F1\", abin da ya rage ya kamata ya ragu da biyu. Ku ƙirga rumbun da jerin kowane mako. Idan ƙirgar da bayanin ba su yi daidai ba, kun gano zubewa, kuskuren rubutu ko sata, kuma za ku iya tambayar dalili a wannan makon."
          ],
          steps: ["Ku ba kowace gona suna da girmanta, kowane rukunin dabbobi, tafki ko gida kuma da adadinsa.", "Ku tsayar da ma'auni ga kowane abu: kg, lita, buhun 50 kg, kwalaye, tire.", "Ku yi littafin ayyuka: kwanan wata, gona ko rukuni, aiki, adadi, ma'auni, kuɗi, wanda ya yi, hoto.", "Ku yi jerin kaya: kaya, ma'auni, shigowa, amfani, saura.", "Ku ƙirga rumbun kowane mako ku kwatanta da jerin."],
          words: [["Rajista", "babban jerin gonakinku, rukunin dabbobi da kayan gona da kowane bayani ke nuni zuwa gare shi."], ["Ma'auni", "abin da kuke aunawa da shi, kamar kilogram, lita ko buhun 50 kg."], ["Ƙirgar kaya", "ƙirga abin da ke cikin rumbu da hannu da kwatanta shi da bayanai."]],
          slides: [
            { title: "Sunaye da ba sa canjawa", bullets: ["Gonaki da girmansu: F1 Tomato 0.5 acre", "Rukunin dabbobi da adadi: Layers House A, 500", "Sunaye iri ɗaya a kowane bayani"] },
            { title: "Littafin ayyuka", bullets: ["Kwanan wata, gona ko rukuni, aiki", "Adadi, ma'auni, kuɗi", "Wanda ya yi aikin, hoto"] },
            { title: "Jerin kayan gona", bullets: ["Shigowa, amfani, saura ga kowane kaya", "Ma'aunai da ba sa canjawa: kg, lita, buhun 50 kg"] },
            { title: "Ƙirga kowane mako", bullets: ["Ku ƙirga rumbun", "Ku kwatanta da jerin", "Ba su yi daidai ba? Ku tambayi dalili a wannan makon"] }
          ],
          tryIt: "A kayan aikin da kuka zaɓa, ku ƙirƙiri rajistar gonarku: kowace gona ko rukunin dabbobi da girmanta ko adadinsa, littafin ayyuka mai aƙalla bayanai biyar na gaske daga wannan makon, da jerin kaya na aƙalla kayan gona huɗu. Sannan ku ƙirga kaya ɗaya a rumbunku ku kwatanta da jerin.",
          youCanNow: "kafa rajistar gona da ke haɗuwa bisa gona, rukunin dabbobi da kayan gona, da duba kayanku da ita.",
          quickCheck: [
            { objective: "O2", q: "Ma'aikaci ɗaya ya rubuta \"2 bags\", wani kuma ya rubuta \"100 kg\" don taki iri ɗaya. Mene ne gyaran?", options: ["Ku yi watsi da shi; jimla za ta kusa daidai", "Ku goge dukkan bayanan biyu", "Ku tsayar da ma'auni ɗaya ga wannan kaya ku yi amfani da shi koyaushe", "Ku daina rubuta taki"], answer: 2, why: "Ma'aunai da ba sa canjawa suna bar ku haɗa bayanai daidai." },
            { objective: "O2", q: "Jerin kaya ya ce akwai buhu 6 na abincin kaji masu ƙwai (layers mash), amma rumbun yana da 4. Me za ku yi?", options: ["Ku sake mayar da jerin zuwa 6", "Ku jira har ƙarshen kaka", "Ku sayi ƙarin buhu 2 ku yi shiru", "Ku tambayi a wannan makon dalilin bambancin: kuskuren rubutu, zubewa ko sata"], answer: 3, why: "Ƙirga kowane mako yana kama giɓi tun suna ƙanana kuma da sauƙin bayani." }
          ]
        },
        {
          title: "Bibiyar aiki da biyan ma'aikata ta kuɗin waya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rubuta kwanaki da ayyukan kowane ma'aikaci da biyansa ta kuɗin waya tare da bayani da ya dace.",
          text: [
            "Aikin ma'aikata sau da yawa shi ne kuɗi mafi yawa a gona mai girma, kuma shi ne mafi ƙarancin bayanai. Ku ajiye jerin ma'aikata (suna, lambar waya ta kuɗin waya, kuɗin rana ko na wata, ranar farawa) da littafin halartar aiki da ayyuka na kowace rana: kwanan wata, ma'aikaci, gona ko rukuni, aiki, kwanaki ko awanni. Mai kula da aiki zai iya tura shi a matsayin hoton takardar halarta ta WhatsApp ko ya cike fom na haɗin gwiwa kowace yamma.",
            "Ku biya ta kuɗin waya inda za ku iya: M-Pesa a Kenya, MTN MoMo a Ghana, Orange Money ko Wave a Senegal da Côte d'Ivoire, ko tura kuɗi ta banki ko kuɗin waya a Najeriya. Ta haka kowane biya yana da lambar ciniki (transaction code). Ku kwafi kwanan wata, ma'aikaci, adadin kuɗi da lambar ciniki zuwa bayanin biyanku, kusa da kwanakin da aka yi aiki. A ƙarshen mako, kwanaki sau kuɗin rana ya kamata ya yi daidai da abin da kuka biya. Misali kawai: kwana 6 x KES 500 = KES 3,000, ko kwana 5 x NGN 4,000 = NGN 20,000.",
            "Ku biya a adalci kuma a kan lokaci, kuma ku duba mafi ƙarancin albashi na doka da dokokin aiki a ma'aikatar ƙwadago ta ƙasarku. Kada ku bari yara su yi aikin gona mai haɗari kamar fesa magani, taɓa sinadarai ko amfani da injina. Ku faɗa wa ma'aikata abin da kuke rubutawa da dalilinsa, kuma ku tabbatar da kowane biya tare da su, don bayanin ya kare ɓangarorin biyu."
          ],
          steps: ["Ku ajiye jerin ma'aikata: suna, lambar kuɗin waya, kuɗin aiki, ranar farawa.", "Ku rubuta halarta da ayyuka kowace rana.", "Ku biya ta kuɗin waya ku kwafi lambar ciniki zuwa bayanin biya.", "Kowane mako ku duba: kwanaki x kuɗin rana = kuɗin da aka biya.", "Ku tabbatar da kowane biya tare da ma'aikacin."],
          words: [["Ma'aikaci na ɗan lokaci (casual)", "ma'aikacin da ake biya bisa rana ko aiki, ba bisa kwangilar wata-wata ba."], ["Lambar ciniki (transaction code)", "lamba ta musamman a saƙon kuɗin waya da ke tabbatar da cewa an yi biya."], ["Albashi (payroll)", "bayanin wanda aka biya, nawa, da yaushe."]],
          slides: [
            { title: "Aiki: kuɗi mai yawa, bayanai kaɗan", bullets: ["Jerin ma'aikata: suna, lamba, kuɗin aiki", "Littafin kowace rana: kwanan wata, ma'aikaci, gona, aiki, kwanaki"] },
            { title: "Ku biya da hanyar da za a iya bi", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Ku kwafi lambar ciniki zuwa bayanin", "Misali kawai: kwana 6 x KES 500 = KES 3,000"] },
            { title: "Dubawa kowane mako", bullets: ["Kwanaki x kuɗin rana = kuɗin da aka biya", "Ku tabbatar tare da kowane ma'aikaci"] },
            { title: "Ku biya a adalci kuma bisa doka", bullets: ["Ku duba mafi ƙarancin albashi a ma'aikatar ƙwadago", "Babu aiki mai haɗari ga yara", "Ku faɗa wa ma'aikata abin da kuke rubutawa"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Ku yi jerin ma'aikata da littafin halarta da ayyuka na mako ɗaya don gonarku (na gaske ko na misali). Ku cike bayanin biya da kwanan wata, ma'aikaci, kwanaki, kuɗin rana, adadin kuɗi da ginshiƙin lambar ciniki, kuma ku duba cewa kwanaki sau kuɗin rana ya yi daidai da adadin ga kowane ma'aikaci.",
          youCanNow: "bibiyar wanda ya yi aiki, a kan me, da tsawon lokaci, da biyan ma'aikata ta kuɗin waya tare da bayani da ya dace.",
          quickCheck: [
            { objective: "O3", q: "Wane bayanin biya ne ya cika?", options: ["\"An biya Juma\"", "\"12 May, Juma, kwana 6 cire ciyawa F2, KES 3,000 (misali), lamba QX7...\"", "\"An biya ma'aikata a wannan makon\"", "\"KES 3,000\""], answer: 1, why: "Yana da kwanan wata, ma'aikaci, aiki, kwanaki, adadin kuɗi da lambar ciniki." },
            { objective: "O3", q: "Wata ma'aikaciya ta ce ta yi aiki kwana 6; littafin ya nuna 5. Me zai fi taimakawa?", options: ["Littafin halarta na kowace rana da tattaunawa da ita da mai kula da aiki", "Rashin biyan komai har wata mai zuwa", "Ɗaukar lamba mafi girma ba tare da tambaya ba", "Goge littafin"], answer: 0, why: "Littafin kowace rana yana ba ɓangarorin biyu bayani da za su duba tare." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kafa tsarin gonarku",
        questions: [
          { objective: "O1", q: "Wanne ne alamar gargaɗi wajen zaɓen manhajar gona?", options: ["Tana aiki ba tare da intanet ba", "Kuna iya fitar da bayananku", "Kyauta ce saboda tana sayar da bayananku", "Ma'aikata za su iya shigar da bayanai ba tare da ganin albashi ba"], answer: 2, why: "Kuna rasa iko kan bayanan gonarku da na ma'aikatanku." },
          { objective: "O1", q: "Kafin ku saka dukkan bayananku a manhaja, ya kamata ku:", options: ["Gwada ta na makonni biyu da bayanai na gaske ku duba farashi bayan gwaji", "Biya na shekara guda gaba ɗaya", "Zaɓi wadda ke da tallace-tallace mafi yawa", "Nemi manhajar ta zaɓa muku"], answer: 0, why: "Gwaji na gaske yana nuna ko ku da ma'aikatanku za ku yi amfani da ita, da nawa za ta ci." },
          { objective: "O2", q: "Me yasa za ku ba kowace gona suna da ba ya canjawa kamar \"F1 Tomato 0.5 acre\"?", options: ["Manhajar ba za ta buɗe ba idan ba haka ba", "Don kuɗin da aka kashe da abin da aka samu su haɗu bisa gona", "Masu saye suna nema", "Doka ce"], answer: 1, why: "Suna iri ɗaya a kowane bayani yana bar ku haɗa jimlar kowace gona." },
          { objective: "O2", q: "Jerin kayanku ya ce buhu 10 na NPK ya rage. Ƙirgar rumbu ta nuna 7. Wannan yana nuna:", options: ["Jerin kaya koyaushe daidai yake", "Babu wani abu mai muhimmanci", "Kuna buƙatar sabuwar manhaja", "Kuskure, zubewa ko sata da za a bincika a wannan makon"], answer: 3, why: "Rashin daidaito alama ce ta tambayar dalili tun yana ƙarami." },
          { objective: "O3", q: "Me yasa za ku biya ma'aikata ta kuɗin waya inda za ku iya?", options: ["Koyaushe kyauta ne", "Ma'aikata sun fi son tsabar kuɗi", "Kowane biya yana da lambar ciniki da za ku iya rubutawa", "Yana hana biyan mafi ƙarancin albashi"], answer: 2, why: "Lambar ciniki shaidar biya ce a gare ku da ma'aikacin." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanarwa da bayanai, daga kusa ko nesa",
      lessons: [
        {
          title: "Kare bayanan gona da na ma'aikata",
          objectives: ["O6"],
          minutes: 5,
          goal: "Yanke wane bayani za a tattara, wanda zai iya gani, da yadda za a kare shi.",
          text: [
            "Tsarinku yanzu yana ɗauke da bayanai masu daraja kuma na sirri: sunayen ma'aikata da lambobin wayarsu, albashi, sayarwarku da kayanku. Kenya (Office of the Data Protection Commissioner), Najeriya (Nigeria Data Protection Commission) da Ghana (Data Protection Commission) suna da dokokin kare bayanai da hukumomin da ke kula da su, haka ma sauran ƙasashen Afirka da yawa. Manyan gonaki da kasuwanci za su iya buƙatar yin rajista; ku duba shafin intanet na hukumarku.",
            "Ku tattara abin da kuke buƙata kawai. Kuna buƙatar sunan ma'aikaci, lambar kuɗin waya, kwanaki da albashi. Ba kwa buƙatar lambar katin shaidarsa a takardar lissafi ta haɗin gwiwa ko hoton katin shaidarsa a rukunin WhatsApp. Ku faɗa wa ma'aikata abin da kuke ajiyewa da dalilinsa. Kada ku taɓa saka PIN na kuɗin waya, kalmomin sirri ko lambobin katin shaida a takardar lissafi, manhaja ko kayan AI.",
            "Ku ba da izini bisa matsayi: ma'aikata suna shigar da ayyuka; manaja yana ganin kaya da halarta; ku kaɗai (da akawun ɗinku) kuke ganin albashi da sayarwa. Ku yi amfani da kulle waya da shiga mataki biyu (two-step sign-in), ku cire duk wanda ya bar gonar a ranar da ya tafi, kuma ku ajiye kwafin ajiya (backup). Idan kuna raba bayanai da mai saye, mai ba da bashi ko wani shiri, ku raba abin da suke buƙata kawai ku tambayi yadda za su yi amfani da shi."
          ],
          steps: ["Ku rubuta bayanan da kuke riƙe da su ku ƙetare abin da ba kwa buƙata.", "Ku faɗa wa ma'aikata abin da kuke rubutawa da dalilinsa.", "Ku ba da izini bisa matsayi: ma'aikaci, manaja, mai gona.", "Ku kulle wayoyi, ku kunna shiga mataki biyu, ku ajiye kwafin ajiya.", "Ku cire izinin duk wanda ya tafi, a ranar da ya tafi."],
          words: [["Bayanan mutum", "bayani game da mutum, kamar suna, lambar waya ko albashi."], ["Izini (access)", "wanda zai iya gani ko canja waɗanne bayanai."], ["Shiga mataki biyu", "ƙarin dubawa na biyu, kamar lambar da aka turo wayarku, lokacin da kuke shiga asusu."]],
          slides: [
            { title: "Yanzu kuna riƙe da bayanan sirri", bullets: ["Sunayen ma'aikata, lambobinsu da albashinsu", "Sayarwarku da kayanku", "Dokokin kare bayanai suna aiki"] },
            { title: "Ku tattara abin da kuke buƙata kawai", bullets: ["Suna, lambar kuɗin waya, kwanaki, albashi", "Babu hoton katin shaida a rukunin WhatsApp", "Kada ku taɓa saka PIN ko kalmar sirri"] },
            { title: "Izini bisa matsayi", bullets: ["Ma'aikata: shigar da ayyuka", "Manaja: kaya da halarta", "Mai gona: albashi da sayarwa"] },
            { title: "Ku kiyaye shi", bullets: ["Kulle waya, shiga mataki biyu, kwafin ajiya", "Ku cire masu tafiya a ranar da suka tafi", "Ku raba abin da wasu ke buƙata kawai"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "Ku rubuta kowane irin bayani da ke cikin tsarin gonarku. Ku ƙetare abin da ba kwa buƙata. Ku rubuta teburin izini: ga kowane matsayi (ma'aikaci, manaja, mai gona, akawu), abin da zai iya gani da abin da zai iya shigarwa.",
          youCanNow: "tattara bayanan da gonarku ke buƙata kawai da sarrafa wanda zai iya ganinsu.",
          quickCheck: [
            { objective: "O6", q: "Wanne BAI kamata ya shiga takardar lissafin gona ta haɗin gwiwa ba?", options: ["Sunayen ma'aikata", "Kwanakin aiki", "Sunayen gonaki", "PIN na kuɗin wayar ma'aikata"], answer: 3, why: "PIN sirri ne; kada wani ya taɓa riƙe shi." },
            { objective: "O6", q: "Manajanku ya bar gonar. Yaushe za ku cire izininsa daga takardar lissafin gona da manhaja?", options: ["A ƙarshen kaka", "A ranar da ya tafi", "Sai idan ya nema", "Ba sai an cire ba; zai iya dawowa"], answer: 1, why: "Cire izini a ranar yana kare bayananku da na ma'aikatanku." }
          ]
        },
        {
          title: "Gudanar da gona daga nesa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rubuta tsarin rahoton yau da kullum da za ku iya tabbatarwa.",
          text: [
            "Masu gona da yawa suna gudanar da gonaki daga gari ta hannun manaja ko ɗan uwa. Yana aiki idan rahoto ya zama al'ada, ba idan kuna kira ba zato kuna tambayar \"Yaya komai?\" ba. Ku amince da rahoton WhatsApp na kowace rana kafin wani lokaci, misali ƙarfe 6 na yamma: abin da aka yi a kowace gona ko gida, lambobi (ƙwan da aka tara, kajin da suka mutu, abincin da aka yi amfani da shi, litar madara, kwalayen da aka sayar, ma'aikatan da suka zo), matsaloli, da hotuna uku na wurare iri ɗaya kowace rana (amfanin gona, dabbobi, rumbu).",
            "Ku yi ɗan gajeren ganawa kowane mako ta waya ko bidiyo a lokaci ɗaya: ku duba lambobin mako, ƙirgar kaya da tsarin mako mai zuwa. Ku yanke shawara tare ku rubuta shawarwarin a rukunin. Manaja nagari kuma ya kamata a biya shi kuma a amince masa ya yanke ƙananan shawarwari ba tare da ku ba.",
            "Ku amince, amma ku tabbatar. Ku kwatanta rahotanni da abubuwan da ke da wuyar ƙirƙira: bayanan kuɗin waya, rasit na masu saye, ƙirgar kaya ta kowane mako, da hotuna masu kwanan wata da wuri. Ku riƙa ziyara lokaci-lokaci ba tare da sanarwa mai tsawo ba, kuma wani lokaci ku nemi maƙwabci amintacce, likitan dabbobi ko jami'in faɗakarwar noma (extension officer) ya duba muku. Idan lamba ta yi kama da kuskure, ku tambaya cikin natsuwa da wuri. Yawancin giɓi kurakurai ne, kuma dubawa akai-akai yana sa masu gaskiya su ci gaba da gaskiya."
          ],
          steps: ["Ku amince da rahoton kowace rana: lokaci, lambobi, matsaloli, hotuna uku na wurare iri ɗaya.", "Ku sa ganawar kowane mako a lokaci ɗaya.", "Ku rubuta shawarwari a rukunin.", "Ku tabbatar da bayanan kuɗin waya, rasit, ƙirgar kaya da hotuna masu kwanan wata.", "Ku riƙa ziyara wani lokaci ba tare da sanarwa mai tsawo ba; ku tambaya da wuri cikin natsuwa game da lambobin da ba su dace ba."],
          words: [["Mai gona da ke nesa (absentee owner)", "mai gona da ke zaune nesa kuma yake gudanar da gonar ta hannun wani."], ["Tabbatarwa", "duba cewa rahoto gaskiya ne ta amfani da wata majiya ta biyu."], ["Ganawa (check-in)", "ɗan gajeren taro na yau da kullum don duba lambobi da tsare-tsare."]],
          slides: [
            { title: "Al'ada ta fi kiran ba zato", bullets: ["Rahoton WhatsApp kowace rana kafin wani lokaci", "Lambobi, matsaloli, hotuna uku na wurare iri ɗaya"] },
            { title: "Ganawar kowane mako", bullets: ["Lokaci ɗaya kowane mako", "Lambobi, ƙirgar kaya, tsarin mako mai zuwa", "Ku rubuta shawarwari a rukunin"] },
            { title: "Ku amince, amma ku tabbatar", bullets: ["Bayanan kuɗin waya da rasit", "Ƙirgar kaya kowane mako, hotuna masu kwanan wata", "Ziyara da wani amintacce ya duba"] },
            { title: "Idan lamba ta yi kama da kuskure", bullets: ["Ku tambaya da wuri cikin natsuwa", "Yawancin giɓi kurakurai ne", "Dubawa akai-akai yana sa kowa ya yi gaskiya"] }
          ],
          tryIt: "Ku rubuta samfurin rahoton kowace rana da manajanku zai aiko (lambobin, layin matsaloli da wuraren hotuna uku). Sannan ku rubuta hanyoyi uku da za ku tabbatar da rahotannin, da rana da lokacin ganawarku ta kowane mako.",
          youCanNow: "kafa rahoton kowace rana da ganawar kowane mako da manaja, da tabbatar da abin da yake faɗa muku.",
          quickCheck: [
            { objective: "O4", q: "Wane rahoton kowace rana daga manajan kaji ne ya fi amfani?", options: ["\"Komai lafiya.\"", "Saƙon murya a kowane lokaci na rana", "\"Ƙarfe 6 na yamma: ƙwai 412, kaji 2 sun mutu, buhu 3 na abinci an yi amfani, ma'aikata 4, hotunan House A, kaji da rumbu\"", "Kiran waya sau ɗaya a mako kawai"], answer: 2, why: "Lambobi da hotuna iri ɗaya a lokaci ɗaya za a iya kwatanta su daga rana zuwa rana." },
            { objective: "O4", q: "Wace ce hanya mafi kyau ta tabbatar da ƙwan da aka ce an sayar?", options: ["Ku kwatanta su da bayanan kuɗin waya da rasit na masu saye", "Ku tambayi manajan ko ya tabbata", "Ku ƙirga ƙwan da ke hoton WhatsApp", "Ku amince saboda ɗan uwa ne"], answer: 0, why: "Biya da rasit majiya ce ta biyu da ke da wuyar ƙirƙira." }
          ]
        },
        {
          title: "Allon lambobinku na kowane mako: lambobi biyar da za ku kula",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Gina allon lambobi biyar na kowane mako, kowanne da iyakar da aka saba da mataki.",
          text: [
            "Allon lambobi (dashboard) gajeren shafi ne na ƴan lambobin da ke faɗa muku ko gonar tana tafiya daidai. Biyar sun isa a karanta cikin minti biyu kowane mako. Ku zaɓi lambobin da ke fitowa kai tsaye daga rajistarku, don kada wani ya buƙaci tunawa da su.",
            "Zaɓuɓɓuka masu kyau ga yawancin gonaki: (1) kuɗin da ya shigo da wanda ya fita a wannan makon; (2) abin da aka samu, kamar kg da aka girba, ƙwai a kowace rana, litar madara ko girman kifi; (3) asara, kamar kajin da suka mutu, dabbobi marasa lafiya ko kwalayen da aka ƙi; (4) kayan gona da suka rage idan aka kwatanta da abin da makonni biyu masu zuwa ke buƙata; (5) kwanakin aiki ko kuɗin aiki bisa gona ko rukuni. Gonar kaji masu ƙwai a Ghana za ta iya kula da ƙwai a kowace rana, kajin da suka mutu, abincin da aka yi amfani da shi, kuɗin sayar da ƙwai da abincin da ke ajiye. Manomin tumatir a Senegal zai iya kula da kwalayen da aka girba, kwalayen da aka ƙi, kwanakin aiki, kuɗin sayarwa a XOF, da magungunan ƙwari da takin da ke ajiye.",
            "Ga kowace lamba ku rubuta iyakar da aka saba da mataki. Misali: \"Kajin da suka mutu sama da 3 a rana: ku kira likitan dabbobi a ranar.\" \"Abincin da ke ajiye ƙasa da kwana 10: ku yi odar abinci.\" Ku saka lambobi biyar a ƙaramin tebur mai ginshiƙi ɗaya na kowane mako, don ku ga yadda suke tafiya. Ku duba shi a ganawar kowane mako, kuma ku canja lamba idan ba ta taɓa kawo wata shawara ba."
          ],
          steps: ["Ku zaɓi lambobi biyar da ke fitowa daga rajistarku.", "Ku rubuta iyakar da aka saba ko manufa ga kowace.", "Ku rubuta matakin da za ku ɗauka idan lamba ta fita daga iyaka.", "Ku yi tebur mai ginshiƙi ɗaya na kowane mako.", "Ku duba shi a ganawar kowane mako ku ɗauki mataki."],
          words: [["Allon lambobi (dashboard)", "gajeren taƙaitaccen bayani na manyan lambobin da ke nuna yadda gonar ke tafiya."], ["Yanayin tafiya (trend)", "inda lamba ke nufa cikin makonni da yawa."], ["Iyakar da aka saba", "lambobin da kuke tsammani idan abubuwa suna tafiya daidai."]],
          slides: [
            { title: "Lambobi biyar, minti biyu", bullets: ["Kai tsaye daga rajistarku", "Ku karanta kowane mako"] },
            { title: "Zaɓuɓɓuka masu kyau", bullets: ["Kuɗin da ya shigo da wanda ya fita", "Abin da aka samu: kg, ƙwai, lita", "Asara, kayan da suka rage, kuɗin aiki"] },
            { title: "Iyaka da mataki", bullets: ["Kajin da suka mutu sun wuce yadda aka saba: ku kira likitan dabbobi", "Abinci ƙasa da kwana 10: ku yi odar abinci"] },
            { title: "Ku kula da yanayin tafiya", bullets: ["Ginshiƙi ɗaya na kowane mako", "Ku duba a ganawa", "Ku cire lambobin da ba sa kawo mataki"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina allon lambobinku na kowane mako da lambobi biyar, kowanne da inda ya fito a rajistarku, iyakar da aka saba da matakin da za ku ɗauka idan ya kauce, kuma ku cike aƙalla makonni biyu. Sannan ku rubuta tsarin rahotonku mai shafi ɗaya: rahoton kowace rana, ganawar kowane mako, yadda kuke tabbatarwa, da wanda ke ganin waɗanne bayanai.",
          youCanNow: "gudanar da gonarku da allon lambobi biyar na kowane mako da tsarin rahoto da za ku iya dubawa.",
          quickCheck: [
            { objective: "O5", q: "Me yasa lambobin allo za su fito kai tsaye daga rajista?", options: ["Don su yi kama da na ƙwararru", "Don kada wani ya buƙaci tunawa ko tsammani", "Domin manhajoji suna nema", "Don kada ma'aikata su gan su"], answer: 1, why: "Lambobi daga bayanai abin dogara ne; lambobi daga tunani ba haka ba." },
            { objective: "O5", q: "Allonku ya ce \"abincin da ke ajiye ƙasa da kwana 10: ku yi odar abinci\". Abincin kwana 6 ne. Me yanzu?", options: ["Ku jira binciken wata-wata", "Ku cire wannan lamba daga allon", "Ku nemi ma'aikata su rage ciyarwa", "Ku yi odar abinci a wannan makon"], answer: 3, why: "Kowace lamba tana da mataki; idan ta fita daga iyaka, kuna ɗaukar mataki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanarwa da bayanai, daga kusa ko nesa",
        questions: [
          { objective: "O6", q: "Wa ya kamata ya ga albashin ma'aikata a tsarin gona?", options: ["Kowane ma'aikaci", "Kowa a rukunin WhatsApp na gona", "Mai gona da, idan ana buƙata, akawu", "Masu saye"], answer: 2, why: "Albashi sirri ne; izini bisa matsayi yana kare shi." },
          { objective: "O4", q: "Me ke sa rahoton gona na kowace rana ya zama da sauƙin dubawa?", options: ["Lambobi iri ɗaya da hotunan wurare iri ɗaya a lokaci ɗaya", "Dogayen saƙonnin murya", "Kira duk lokacin da kuka tuna", "Ba da rahoton matsaloli kawai"], answer: 0, why: "Abu iri ɗaya kowace rana yana bar ku kwatanta da gano canje-canje." },
          { objective: "O4", q: "Sayarwar da manaja ya ba da rahoto ta yi ƙasa da rasit na mai saye. Me za ku fara yi?", options: ["Ku kore shi nan take", "Ku yi watsi da shi", "Ku saka shi a rukunin ma'aikata", "Ku tambaya cikin natsuwa da wuri, ku kwatanta bayanan tare"], answer: 3, why: "Yawancin giɓi kurakurai ne; tambaya da wuri da bayanai yana gano ko wanne ne." },
          { objective: "O5", q: "Wace ce lamba mai kyau ta allo ga gonar shanu masu madara?", options: ["Launin rumfa", "Litar madara a kowace rana", "Yawan saƙonnin WhatsApp", "Saniyar da manaja ya fi so"], answer: 1, why: "Lambobin abin da aka samu kamar lita a rana suna nuna ko gonar tana tafiya daidai." },
          { objective: "O5", q: "Wata lamba a allo ba ta taɓa kawo wata shawara ba. Ya kamata ku:", options: ["Musanya ta da wadda ke kawowa", "Ajiye ta har abada", "Ƙara wasu biyar irinta", "Ɓoye allon"], answer: 0, why: "Allo na yanke shawara ne; ku cire lambobin da ba sa taimakawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gudanar da Gona da Bayanai ta Manhajojin Waya",
    questions: [
      { objective: "O1", q: "Mene ne gwaji mafi muhimmanci na manhajar gona?", options: ["Tana da abubuwa mafi yawa", "Ita ce mafi tsada", "An tallata ta a rediyo", "Ku da ma'aikatanku kuna amfani da ita kowace rana"], answer: 3, why: "Kayan aikin da babu mai amfani da shi ba ya ba ku bayanai." },
      { objective: "O1", q: "Wane abu ne ke bar ma'aikaci ya rubuta aiki ba tare da ganin albashi ba?", options: ["Masu amfani da yawa da izini daban-daban", "Yanayin duhu (dark mode)", "Kiran bidiyo", "Hotuna marasa iyaka"], answer: 0, why: "Izini bisa matsayi yana kiyaye bayanan sirri." },
      { objective: "O1", q: "Takardar lissafi ta haɗin gwiwa kyauta za ta iya maye gurbin manhajar gona?", options: ["A'a, ko kaɗan", "Ee, idan an kafa ta da kyau kuma ana amfani da ita kowace rana", "Sai don manyan gonaki sosai", "Sai idan an buga ta a takarda"], answer: 1, why: "Takardar lissafi da aka kafa da kyau za ta iya bibiyar gonaki, aiki, kaya da albashi." },
      { objective: "O2", q: "Wanne ne suna mai kyau na gona a rajista?", options: ["\"Wadda ke kusa da hanya\"", "\"Tumatir\"", "\"F1 Tomato 0.5 acre\"", "Suna daban kowane mako"], answer: 2, why: "Gajeren suna da ba ya canjawa tare da girma yana bar bayanai su haɗu." },
      { objective: "O2", q: "Me yasa za ku tsayar da ma'aunai kamar \"buhun 50 kg\" ga kowane kaya?", options: ["Don jimla da kayan da suka rage su yi daidai", "Domin masu sayar da kaya suna nema", "Don ma'aikata su rage rubutu", "Ba shi da muhimmanci"], answer: 0, why: "Haɗa ma'aunai daban-daban yana ɓata jimla." },
      { objective: "O2", q: "Idan ma'aikaci ya rubuta \"2 bags NPK used on F1\", jerin kaya ya kamata ya:", options: ["Tsaya yadda yake", "Ƙaru da biyu", "A goge shi", "Ragu da biyu"], answer: 3, why: "Kayan da suka rage = abin da ya shigo ban da abin da aka yi amfani da shi." },
      { objective: "O2", q: "Sau nawa ya kamata ku ƙirga rumbun kayan gona da jerin?", options: ["Sau ɗaya a shekara", "Sai bayan sata", "Kowane mako", "Ba sai an yi ba"], answer: 2, why: "Ƙirga kowane mako yana kama giɓi da wuri." },
      { objective: "O3", q: "Me ke haɗa biyan kuɗin waya da bayanin ma'aikaci?", options: ["Lambar ciniki", "Launin wayar", "Hoton katin shaidar ma'aikaci a WhatsApp", "Yanayi"], answer: 0, why: "Lambar tana tabbatar da biyan kuma tana haɗa shi da bayanin." },
      { objective: "O3", q: "Ma'aikaci ya yi kwana 5 a kuɗin misali na NGN 4,000 a rana. Bayanin ya kamata ya nuna:", options: ["NGN 4,000", "NGN 20,000", "NGN 9,000", "NGN 45,000"], answer: 1, why: "5 x 4,000 = 20,000; kwanaki sau kuɗin rana dole ya yi daidai da kuɗin da aka biya." },
      { objective: "O3", q: "A ina za ku duba mafi ƙarancin albashi na doka?", options: ["Rukunin WhatsApp", "Mai sayar da kayan gona", "Mataimakin AI kawai", "Ma'aikatar ƙwadago ta ƙasarku"], answer: 3, why: "Dokokin albashi suna fitowa daga hukumar ƙwadago ta hukuma kuma suna canjawa da lokaci." },
      { objective: "O6", q: "Waɗanne bayanai gona ke buƙata game da ma'aikaci na ɗan lokaci?", options: ["Suna, lambar kuɗin waya, kwanaki da albashi", "PIN ɗinsa", "Hoton katin shaidarsa a rukunin hira", "Kalmar sirrin bankinsa"], answer: 0, why: "Ku tattara abin da kuke buƙata kawai." },
      { objective: "O6", q: "Wane ofishi ne ke kula da bayanan mutum a Kenya?", options: ["Kenya Meteorological Department", "Pest Control Products Board", "Office of the Data Protection Commissioner", "KALRO"], answer: 2, why: "ODPC ita ce hukumar kare bayanai ta Kenya." },
      { objective: "O6", q: "Mai saye ya nemi bayanan gonarku. Ya kamata ku:", options: ["Aika komai, har da albashi", "Raba abin da yake buƙata kawai ku tambayi yadda zai yi amfani da shi", "Ƙi sayar masa", "Aika kalmar sirrin wayarku"], answer: 1, why: "Ku raba mafi ƙanƙanta kuma ku san yadda za a yi amfani da shi." },
      { objective: "O4", q: "Me ya kamata rahoton kowace rana daga gona ya ƙunsa?", options: ["Labari mai daɗi kawai", "Dogayen labarai", "Babu komai; ba a buƙatar rahoto", "Lambobi, matsaloli da hotunan wurare iri ɗaya"], answer: 3, why: "Abu iri ɗaya yana bar ku kwatanta daga rana zuwa rana." },
      { objective: "O4", q: "Wanne ne ya fi wuyar ƙirƙira lokacin da kuke tabbatar da rahoto?", options: ["Bayanin kuɗin waya", "Saƙon murya", "Alƙawari", "Tes da ke cewa \"komai lafiya\""], answer: 0, why: "Bayanan kuɗi da rasit bayanai ne masu zaman kansu." },
      { objective: "O4", q: "Mene ne manufar ganawar kowane mako?", options: ["Yi wa manaja tsawa", "Duba lambobi, kaya da tsarin mako mai zuwa tare", "Maye gurbin dukkan bayanai", "Biyan masu sayar da kaya"], answer: 1, why: "Tana mayar da lambobi zuwa shawarwari." },
      { objective: "O5", q: "Lambobi nawa wannan kwas ke ba da shawara don allon kowane mako?", options: ["Ɗaya", "Ashirin", "Biyar", "Hamsin"], answer: 2, why: "Za a iya karanta lambobi biyar a ɗauki mataki cikin minti biyu." },
      { objective: "O5", q: "Wace ce lambar asara ga gonar kaji masu ƙwai?", options: ["Ƙwan da aka sayar", "Abincin da aka kawo", "Ma'aikatan da suka zo", "Kajin da suka mutu a wannan makon"], answer: 3, why: "Asara kamar kajin da suka mutu tana faɗakar da ku da wuri." },
      { objective: "O5", q: "\"Kajin da suka mutu sama da 3 a rana: ku kira likitan dabbobi a ranar\" misali ne na:", options: ["Iyakar da aka saba da mataki", "Dokar kare bayanai", "Lambar kuɗin waya", "Ƙirgar kaya"], answer: 0, why: "Kowace lambar allo tana da iyaka da matakin da za ku ɗauka." },
      { objective: "O5", q: "Me yasa za a saka ginshiƙi ɗaya na kowane mako a allon?", options: ["Don cike shafin", "Don ganin yanayin tafiya cikin lokaci", "Domin manhajoji suna nema", "Don ɓoye makonni marasa kyau"], answer: 1, why: "Yanayin tafiya yana nuna matsaloli kafin su yi girma." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Lambobi biyar masu amfani", objective: "O5", notYet: "Lambobi ƙasa da biyar, ko lambobin da ba sa kawo wata shawara.", meets: "Lambobi biyar da suka shafi kuɗi, abin da aka samu, asara, kaya da aiki, kowanne da iyakar da aka saba da mataki.", exceeds: "An cike aƙalla makonni biyu, kuma an riga an yanke shawara ɗaya saboda wata lamba." },
      { name: "Lambobi daga bayanai suke", objective: "O2", notYet: "An yi tsammani ko an tuna lambobin.", meets: "Kowace lamba tana faɗin inda ta fito a rajista (littafin ayyuka, jerin kaya, bayanin biya).", exceeds: "Rajistar tana amfani da sunaye da ma'aunai da ba sa canjawa, kuma ƙirgar kaya ta yi daidai da jerin." },
      { name: "An rubuta aiki da biya", objective: "O3", notYet: "Babu bayanin aiki, ko an biya ba tare da bayani ba.", meets: "Kwanakin aiki sun fito daga littafin halarta kuma biyan kuɗi suna da lambobin ciniki.", exceeds: "Ana duba kwanaki x kuɗin rana da biyan kuɗi kowane mako." },
      { name: "Tsarin rahoto", objective: "O4", notYet: "Babu rahoto na musamman, ko \"a kira idan an buƙata\" kawai.", meets: "An rubuta abin da rahoton kowace rana zai ƙunsa da lokacinsa, ganawar kowane mako, da aƙalla hanyoyi biyu na tabbatarwa.", exceeds: "Ya haɗa da ziyara ba sanarwa ko wani amintacce da zai duba, da yadda ake tambaya game da lambobin da ba su dace ba." },
      { name: "An kare bayanai", objective: "O6", notYet: "PIN, lambobin katin shaida ko albashi suna bayyane ga kowa.", meets: "Ana tattara bayanan da ake buƙata kawai, kuma an ba da izini bisa matsayi.", exceeds: "Ya haɗa da kwafin ajiya, shiga mataki biyu da cire masu tafiya a ranar da suka tafi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da har yanzu suke duba allon lambobinsu na kowane mako bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka gano kuma suka gyara giɓin kaya, aiki ko sayarwa cikin kwanaki 60",
      "Kaso na biyan ma'aikata da aka yi da lambar ciniki da aka rubuta",
      "Ƙungiyoyin manoma ko shirye-shirye da suka ba da rahoton raguwar asara ko rikici kan albashi bayan kwas ɗin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai WhatsApp da kuɗin waya",
      "Manhajar takardar lissafi kyauta (Google Sheets ko Microsoft Excel) ko manhajar gona da mai koyo ke gwadawa",
      "Bayanan gonar mai koyo, ko lambobin misali da ke cikin darussan",
      "Takarda da alƙalami don teburin maki da teburin izini",
      "Kusan minti 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Yana aiki da kyau da ƙungiyoyin manoma, shirye-shiryen matasa 'yan kasuwar noma da ƙungiyoyin masu gona da ke zaune nesa; babi ɗaya a kowane zama.",
      "Kada ku ba da shawarar ko sayar da wata manhaja a zaman; ku bar masu koyo su ba zaɓuɓɓuka maki da jerin abubuwan da ake nema.",
      "Kada ku taɓa neman masu koyo su nuna PIN na gaske, kalmomin sirri, lambobin katin shaida ko albashin wasu a gaban rukuni.",
      "Ku haɗa masu gona da manajojinsu don aikin Darasi na 5 idan za ku iya, don dukansu biyu su amince da tsarin.",
      "Ku tunatar da masu koyo cewa dokokin albashi, aiki da kare bayanai sun bambanta bisa ƙasa kuma suna canjawa; ku duba majiyoyin hukuma.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
