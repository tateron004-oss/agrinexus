"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-savings-groups-microfinance.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const VSLA = { name: "VSL Associates: tsarin VSLA (hannun jari, asusun bashi, asusun walwala, zagaye na shekara ɗaya, rabon kuɗi)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: jerin SACCO masu lasisin karɓar ajiya", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: dokokin cibiyoyin ƙananan kuɗi (microfinance) a ƙasashen da ke amfani da XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Babban Bankin Najeriya (CBN): bankunan ƙananan kuɗi (microfinance banks)", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const BOG = { name: "Bankin Ghana (Bank of Ghana): dukkan cibiyoyi masu lasisi da hanyoyin kai ƙara", url: "https://www.bog.gov.gh" };
const CBK_DCP = { name: "Babban Bankin Kenya (CBK): kula da bankuna, har da bankunan ƙananan kuɗi masu lasisi da masu ba da bashi ta waya", url: "https://www.centralbank.go.ke/bank-supervision/" };
const FCCPC = { name: "FCCPC, Najeriya: matsayin rajistar masu ba da bashi ta intanet (manhajojin bashi da aka amince da su)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const SEC_NG = { name: "Nairametrics (14 May 2026): SEC Najeriya ta yi gargaɗi kan tsarin Ponzi da ake tallatawa a WhatsApp, TikTok da Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-savings-groups-microfinance-ha",
  lang: "ha",
  translationOf: "afr-savings-groups-microfinance",
  category: "Africa: Life and Work",
  name: "Ƙungiyoyin Ajiya da Ƙananan Kuɗi (Adashe, Chama, VSLA, Tontine, Esusu)",
  skills: "Zaɓi tsakanin ƙungiyar karɓa-bi-da-bi da ƙungiyar ajiya da bashi, Rubuta tsarin ajiya na wata-wata, Duba dokokin ƙungiya, Ajiye bayanan ƙungiya da kiyaye kuɗi, Kwatanta bashin ƙananan kuɗi da bashin ƙungiya, Gane tsarin Ponzi da masu ba da bashi na bogi",
  outcome: "zaɓar ƙungiyar ajiya da ta dace da burinku, duba dokokinta da bayananta, kwatanta bashin ƙananan kuɗi ko na ƙungiya da jimillar abin da za ku biya, gane tsarin Ponzi ko mai ba da bashi na bogi, da bin tsarin ajiyarku na wata-wata da kuka rubuta.",
  about: [
    "A faɗin Afirka, mutane suna ajiya tare: adashe a arewacin Najeriya, chama da merry-go-round a Kenya, esusu da ajo a kudancin Najeriya, susu a Ghana, tontine a Senegal, Côte d'Ivoire da Kamaru (njangi a yankin Kamaru mai Turanci), gam'eya a Masar da daret a Moroko. Ƙungiyoyin ajiya, SACCO da bankunan ƙananan kuɗi suna taimakon miliyoyin mutane su biya kuɗin makaranta, su cika shago da kaya ko su tsallake wata mai wuya.",
    "Wannan kwas na 'yan kasuwa ne, iyaye, masu sana'a, ma'aikata da matasa da ke son yin ajiya akai-akai ko cin bashi a hankali. Za ku koyi manyan nau'o'in ƙungiya biyu, yadda ake rubuta tsarin ajiya, abin da za a duba a dokokin ƙungiya da bayananta, yadda ake kwatanta bashi da jimillar abin da za ku biya, da yadda ake gane tsare-tsaren da ke satar ajiya.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\", ɗan gwaji, gwajin ilimi bayan kowane babi da jarabawa mai tambayoyi 20 a ƙarshe. Duk adadin kuɗi misalai ne. Wannan kwas yana bayanin yadda hidimomin kuɗi ke aiki da haɗarinsu; ba ya faɗa muku inda za ku saka kuɗinku."
  ],
  finalTask: "Ku rubuta tsarin ajiyarku na wata-wata a shafi ɗaya: burinku da ranar da kuke buƙatar sa, jimillar kuɗin, adadin da za ku ajiye kowane mako ko wata, inda za ku ajiye shi (ƙungiya, SACCO, bankin ƙananan kuɗi ko asusu), da takardar dubawa mai amsoshinku game da ƙungiyar ko cibiyar: dokokinta a rubuce, yadda ake ajiye kuɗi da bayanai, lasisinta (idan tana karɓar ajiya ko tana ba da bashi a matsayin kasuwanci), da jimillar kuɗin kowane bashi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa a faɗin Afirka, a birane da ƙauyuka: 'yan kasuwa, masu sana'a, uwaye da ubanni, ma'aikata da matasa, da yawa suna cikin adashe, chama, esusu, susu ko tontine. Misalai daga Kenya, Najeriya, Ghana, Senegal, Kamaru, Côte d'Ivoire, Masar da Moroko.",
    startingPoint: "Da yawa sun riga sun yi ajiya a ƙungiya ta gargajiya ko a walat ɗin waya, amma ba tare da rubutaccen buri ba. Wasu sun shiga ƙungiya ba tare da karanta dokokinta ba, sun ci bashi ba tare da lissafin jimillar abin da za su biya ba, ko sun yi asarar kuɗi a ƙungiyar da ta rushe ko a tsarin \"ninka kuɗinka\".",
    gap: "Masu koyo suna buƙatar zaɓar nau'in ƙungiyar da ya dace da burinsu, duba dokoki da bayanai kafin su amince da ƙungiya da kuɗinsu, kwatanta bashi da abin da za su biya a zahiri, da gane tsarin Ponzi da masu ba da bashi marasa lasisi, don ajiyarsu ta yi girma maimakon ta ɓace.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an fassara zuwa Faransanci da Larabci",
      "Na'urori: waya mai sauƙi; ƙungiyoyi da yawa suna haɗuwa ido da ido kuma suna ajiye bayanai a takarda",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da ranakun taron ƙungiya",
      "Dokoki da lasisi sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa: masu koyo suna duba jerin hukumar kula da kuɗi na yanzu",
      "Kuɗi: misalai kawai; ba shawarar saka jari ba; kada a taɓa bayyana PIN ko kalmar sirri (password)"
    ],
    prerequisites: "Babu. Ɗan lissafin tarawa da ninkawa, da na'urar lissafi ta waya, zai taimaka."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku burin ajiya da nau'o'in ƙungiya biyu", action: "bayyana yadda ƙungiyar karɓa-bi-da-bi da ƙungiyar ajiya da bashi ke aiki, da zaɓar wadda ta dace da burin", standard: "kuna ba da dalili ɗaya na zaɓin da haɗari ɗaya na kowace" },
    { id: "O2", condition: "Idan kuna da buri da kuɗin shigarku", action: "rubuta tsarin ajiya na wata-wata mai burin, jimillar kuɗi, rana, adadin kowane mako ko wata, da inda za ku ajiye shi", standard: "da lissafin da ya kai burin kafin ranar" },
    { id: "O3", condition: "Idan aka ba ku kundin tsarin mulki ko dokokin ƙungiya", action: "duba manyan dokoki a cikinsa: gudummawa, taro, bashi, tara, barin ƙungiya, rabon kuɗi da wanda ke riƙe da kuɗin", standard: "kuna samun aƙalla shida cikin bakwai, kuma kuna ambaton waɗanda suka ɓace" },
    { id: "O4", condition: "A taron ƙungiya", action: "rubuta gudummawa da bashi a littafin mamba (passbook) ko littafin bayanai, da duba cewa kuɗin hannu da bayanan sun yi daidai", standard: "ana karanta kowane adadi a bainar jama'a kuma membobi sun amince da shi" },
    { id: "O5", condition: "Idan aka ba ku tayin bashin ƙananan kuɗi ko na ƙungiya", action: "lissafa jimillar abin da za ku biya da duba ranakun biya da kuɗin shigarku", standard: "kafin ku sa hannu, kuma kuna faɗin abin da haɗin kai wajen biyan bashi (joint liability) ke nufi a gare ku" },
    { id: "O6", condition: "Idan aka ba ku tayin ajiya, saka jari ko bashi", action: "gane alamun gargaɗin tsarin Ponzi ko mai ba da bashi na bogi, da duba mai hidimar a jerin hukuma na hukumar kula da kuɗi", standard: "kafin ku biya ko ku bayar da kowane bayani" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ajiya tare",
      lessons: [
        {
          title: "Nau'o'in ƙungiyoyin ajiya biyu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana yadda ƙungiyar karɓa-bi-da-bi da ƙungiyar ajiya da bashi ke aiki, ku zaɓi ɗaya don burinku.",
          text: [
            "Ƙungiyar karɓa-bi-da-bi (adashe, merry-go-round, esusu, ajo, susu, tontine, njangi, gam'eya ko daret) abu ne mai sauƙi. Kowane mamba yana biyan adadi ɗaya kowane mako ko wata, kuma kowane lokaci mamba ɗaya yana karɓar dukkan kuɗin, bi-da-bi, har kowa ya karɓa sau ɗaya. Misali: membobi 10 kowannensu yana biyan KES 1,000 a wata; kowane wata mamba ɗaya yana karɓar KES 10,000.",
            "Tana da kyau don samun kuɗi mai yawa a lokaci ɗaya: kuɗin makaranta, keken ɗinki, kayan shago. Haɗarinta: waɗanda suka karɓa da wuri suna iya daina biya, kuma babu wanda ke samun riba a kan kuɗin. Membobin farko suna samun gaba-gaɗi ba tare da kuɗin ruwa ba; membobin ƙarshe a zahiri suna ba ƙungiyar bashi ne.",
            "Ƙungiyar ajiya da bashi (VSLA, ASCA ko chama da yawa, kuma a babba ta hukuma, SACCO) tana ajiye kuɗin tare. Membobi suna ajiya a kowane taro, ajiyar ta zama asusun bashi, membobi suna cin bashi kuma suna biya da ƙarin kuɗin hidima da ƙungiyar ta ƙayyade, kuma a ƙarshen zagaye, sau da yawa kusan shekara ɗaya, ana raba komai daidai da abin da kowane mamba ya ajiye. Haɗarinta: bashin da ba a biya ba, da kuɗin da aka sace ko aka rubuta ba daidai ba.",
            "Ku zaɓa bisa burinku. Kuɗi mai yawa nan ba da daɗewa ba: ƙungiyar karɓa-bi-da-bi za ta iya dacewa. Ajiya akai-akai da damar cin bashi: ƙungiyar ajiya da bashi za ta iya dacewa. Mutane da yawa suna amfani da duka biyun."
          ],
          words: [["Ƙungiyar karɓa-bi-da-bi (ROSCA)", "membobi suna biyan adadi ɗaya, kuma kowannensu yana karɓar dukkan kuɗin bi-da-bi."], ["Ƙungiyar ajiya da bashi", "membobi suna ajiya a asusu ɗaya, suna ba juna bashi, kuma suna raba kuɗin a ƙarshen zagaye (VSLA, ASCA, SACCO)."], ["Rabon kuɗi (share-out)", "ranar da ƙungiya ke biyan dukkan ajiya da ribar ga membobi daidai da ajiyarsu."]],
          slides: [
            { title: "Ƙungiyar karɓa-bi-da-bi", bullets: ["Kowa yana biyan adadi ɗaya; ɗaya yana karɓar kuɗin bi-da-bi", "Adashe, esusu, ajo, susu, tontine, njangi, gam'eya, daret", "Tana da kyau don kuɗi mai yawa; haɗari: masu karɓa da wuri suna daina biya"] },
            { title: "Ƙungiyar ajiya da bashi", bullets: ["Ajiya ta zama asusun bashi", "Membobi suna cin bashi kuma suna biya da kuɗin hidima", "Rabon kuɗi bisa abin da kowa ya ajiye; haɗari: bashin da ba a biya ba"] },
            { title: "Ku zaɓa bisa burinku", bullets: ["Kuɗi mai yawa nan kusa: ƙungiyar karɓa-bi-da-bi za ta iya dacewa", "Ajiya akai-akai da bashi: VSLA ko SACCO", "Mutane da yawa suna amfani da duka biyun"] }
          ],
          sources: [VSLA],
          tryIt: "Ku yi tunanin wata ƙungiya da kuke ciki ko kuka sani. Karɓa-bi-da-bi ce ko ta ajiya da bashi? Ku rubuta abu ɗaya da take da kyau a kai da haɗari ɗaya.",
          youCanNow: "bayyana nau'o'in ƙungiyoyin ajiya biyu da zaɓar wadda ta dace da burinku.",
          quickCheck: [
            { objective: "O1", q: "Membobi goma sha biyu kowannensu yana biyan GHS 200 a wata, kuma mamba ɗaya yana karɓar dukkan kuɗin kowane wata. Wane irin ƙungiya ce wannan?", options: ["Ƙungiyar ajiya da bashi", "Bankin ƙananan kuɗi", "Ƙungiyar karɓa-bi-da-bi", "Tsarin Ponzi"], answer: 2, why: "Kowa yana biyan adadi ɗaya kuma yana karɓar kuɗin bi-da-bi: ƙungiyar karɓa-bi-da-bi ce (susu)." },
            { objective: "O1", q: "A VSLA, yaya ake raba kuɗi a ƙarshen zagaye?", options: ["Daidai da abin da kowane mamba ya ajiye", "Daidai-wa-daida, ko nawa kowa ya ajiye", "Duka ga shugaba", "Ga wanda ya fi cin bashi"], answer: 0, why: "Membobin da suka fi ajiya suna samun babban kaso na asusun da ribarsa." }
          ]
        },
        {
          title: "Burinku da tsarin ajiyarku na wata-wata",
          objectives: ["O2"],
          minutes: 5,
          goal: "Rubuta tsarin ajiya da zai kai buri kafin wata rana.",
          text: [
            "Ajiya tana aiki da kyau idan akwai buri a sarari: abin da za a yi da shi, kuɗinsa nawa ne, da yaushe kuke buƙatar sa. \"Kuɗin makaranta NGN 120,000 kafin Janairu\" buri ne. \"Ƙara ajiya\" ba buri ba ne.",
            "Ku raba jimillar kuɗin da yawan makonni ko watannin da kuke da su. Misali: NGN 120,000 cikin watanni 8 shi ne NGN 15,000 a wata. Idan ya yi yawa, ku canja ranar, burin ko kashe kuɗinku. Ku duba kuɗin shigarku a watanni masu kyau da marasa kyau; ɗan kasuwa zai iya fi yin ajiya a lokacin kasuwa ta yi zafi.",
            "Ku yanke inda kuɗin zai zauna: ƙungiyar ajiya, SACCO, bankin ƙananan kuɗi, banki ko asusun ajiya na waya. Ku ajiye ɗan kuɗin gaggawa da za ku iya samu da sauri, daban da kuɗin burin.",
            "Ku fara biyan kanku: ku yi ajiya a ranar da kuɗi ya shigo, kafin wani kashe kuɗi. Misali: Aïcha, mai gyaran gashi a Abidjan, tana saka XOF 5,000 a tontine ɗinta kowace Asabar kafin ta sayi komai."
          ],
          steps: ["Ku rubuta burin, jimillar kuɗi da ranar.", "Ku ƙirga makonni ko watanni har zuwa ranar.", "Ku raba jimillar da wannan adadi.", "Ku duba shi da kuɗin shigarku a wata mara kyau.", "Ku zaɓi inda za ku ajiye shi.", "Ku yi ajiya a ranar da kuɗi ya shigo."],
          words: [["Burin ajiya", "abin da kuke ajiya dominsa, kuɗinsa nawa ne, da kafin yaushe."], ["Kuɗin gaggawa", "ɗan kuɗi da aka ajiye domin matsalolin da suka faru ba zato, mai sauƙin samu."]],
          slides: [
            { title: "Buri a sarari", bullets: ["Me za a yi da shi, nawa ne, kafin yaushe", "\"Kuɗin makaranta NGN 120,000 kafin Janairu\"", "Ba kawai \"ƙara ajiya\" ba"] },
            { title: "Ku yi lissafi", bullets: ["Jimilla / watanni = adadin kowane wata", "NGN 120,000 / 8 = NGN 15,000 (misali)", "Ya yi yawa? Ku canja ranar, burin ko kashe kuɗi"] },
            { title: "A ina da yaushe", bullets: ["Ƙungiya, SACCO, bankin ƙananan kuɗi ko asusu", "Ku ajiye kuɗin gaggawa daban", "Ku fara ajiya, a ranar da kuɗi ya shigo"] }
          ],
          tryIt: "Ku rubuta buri ɗaya na gaske mai jimillar kuɗi da rana. Ku raba don samun adadin kowane mako ko wata, ku duba shi da kuɗin shigarku a wata mara kyau. Ku canja shi har ya yi aiki.",
          youCanNow: "rubuta tsarin ajiya mai buri, jimillar kuɗi, rana da adadin kowane mako ko wata.",
          quickCheck: [
            { objective: "O2", q: "Kuna buƙatar KES 24,000 cikin watanni 6. Nawa za ku ajiye kowane wata?", options: ["KES 2,400", "KES 6,000", "KES 3,000", "KES 4,000"], answer: 3, why: "24,000 a raba da 6 shi ne 4,000." },
            { objective: "O2", q: "Wanne ne burin ajiya a sarari?", options: ["\"Ƙara ajiya a bana\"", "\"Keken ɗinki na GHS 1,500 kafin Yuni\"", "\"Zama mai arziki\"", "\"Daina kashe kuɗi\""], answer: 1, why: "Yana faɗin me, nawa, da kafin yaushe." }
          ]
        },
        {
          title: "Duba dokokin ƙungiya kafin ku shiga",
          objectives: ["O3"],
          minutes: 5,
          goal: "Duba rubutattun dokokin ƙungiya don muhimman abubuwa bakwai.",
          text: [
            "Ƙungiya mai ƙarfi tana da rubutattun dokoki, da ake kira kundin tsarin mulki (constitution) ko dokokin cikin gida (by-laws), da dukkan membobi suka amince da su. Ku nemi ganinsu kafin ku shiga. Idan babu, ku nemi ƙungiyar ta rubuta su da farko.",
            "Ku duba abubuwa bakwai: 1. Gudummawa: nawa, sau nawa, da me ke faruwa idan kun biya a makare (tara). 2. Taro: yaushe da a ina. 3. Bashi: wa zai iya ci, nawa, na tsawon lokaci nawa, kuɗin hidima, da me ke faruwa idan ba a biya bashi ba. 4. Tara da ladabtarwa. 5. Barin ƙungiya: yadda za ku dawo da kuɗinku idan kun bar ƙungiya ko kun ƙaura. 6. Rabon kuɗi ko jerin karɓa: yaushe da yaya. 7. Wanda ke riƙe da kuɗin: jami'ai, yadda ake zaɓensu, da wanda ke sa hannu.",
            "Wasu ƙungiyoyi suna yin rajista, misali a matsayin ƙungiyar taimakon kai, ƙungiyar haɗin gwiwa (cooperative) ko SACCO; ku tambayi ofishin ci gaban al'umma ko na ƙungiyoyin haɗin gwiwa na yankinku abin da ya shafe ku. Ƙungiyar da ke karɓar ajiya daga jama'a a matsayin kasuwanci za ta iya buƙatar lasisi daga hukumar kula da kuɗi.",
            "Misali: chama ɗin Grace a Nakuru ta rubuta a dokokinta cewa ma'aji ba zai riƙe makullan akwatin kuɗi ba, kuma membobi suna jefa ƙuri'a kan kowane bashi."
          ],
          steps: ["Ku nemi ganin rubutattun dokoki.", "Ku duba gudummawa da tarar makara.", "Ku duba ranakun taro.", "Ku duba dokokin bashi da me ke faruwa idan ba a biya bashi ba.", "Ku duba yadda ake barin ƙungiya da dawo da kuɗinku.", "Ku duba rabon kuɗi ko jerin karɓa.", "Ku duba wanda ke riƙe da kuɗin da wanda ke sa hannu."],
          words: [["Kundin tsarin mulki (by-laws)", "rubutattun dokokin da ƙungiya ta amince da su kuma take bi."], ["Jami'ai", "membobin da aka zaɓa su jagoranta: sau da yawa shugaba, sakatare da ma'aji."]],
          slides: [
            { title: "Ku nemi rubutattun dokoki", bullets: ["Kundin tsarin mulki ko dokokin cikin gida, da membobi suka amince", "Babu dokoki? Ku nemi ƙungiyar ta rubuta su"] },
            { title: "Abubuwa bakwai da za a duba", bullets: ["Gudummawa da tara; taro", "Bashi da bashin da ba a biya ba; barin ƙungiya", "Rabon kuɗi ko jerin karɓa; wanda ke riƙe da kuɗin"] },
            { title: "Rajista", bullets: ["Wasu ƙungiyoyi suna rajista a yanki", "Ku tambayi ofishin ci gaban al'umma ko na haɗin gwiwa", "Karɓar ajiyar jama'a za ta iya buƙatar lasisi"] }
          ],
          sources: [SASRA, BCEAO_SFD],
          tryIt: "Ku samo dokokin ƙungiyar da kuke ciki ko kuke son shiga (ko ku rubuta abin da kuka sani). Ku yi alama a kan kowane cikin abubuwa bakwai. Ku rubuta waɗanda suka ɓace a matsayin tambayoyi da za ku yi a taro na gaba.",
          youCanNow: "duba dokokin ƙungiya don muhimman abubuwa bakwai kafin ku amince da ita da kuɗinku.",
          quickCheck: [
            { objective: "O3", q: "Wace tambaya ce ke duba dokar \"barin ƙungiya\"?", options: ["Yaushe muke taro?", "Wane ne shugaba?", "Akwatin kuɗi launin me ne?", "Idan na ƙaura zuwa wani gari, ta yaya zan dawo da ajiyata?"], answer: 3, why: "Dokar barin ƙungiya tana faɗin yadda mamba ke dawo da kuɗinsa." },
            { objective: "O3", q: "Ƙungiya ba ta da rubutattun dokoki. Mene ne mataki na hikima kafin ku shiga?", options: ["Ku nemi membobi su amince su rubuta dokoki da farko", "Ku shiga ku yi fatan alheri", "Ku ba shugaba ajiyarku ya riƙe", "Ku shiga ƙungiyoyi biyu don tsaro"], answer: 0, why: "Rubutattun dokoki suna hana yawancin rikici kan kuɗi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ajiya tare",
        questions: [
          { objective: "O1", q: "A ƙungiyar karɓa-bi-da-bi, wa ya fi ɗaukar haɗari?", options: ["Mamban da ya fara karɓar kuɗin", "Membobin da suke karɓa a ƙarshe, idan masu karɓa da wuri suka daina biya", "Banki", "Babu kowa"], answer: 1, why: "Membobin ƙarshe sun yi ta biya na watanni, kuma suna asara idan masu karɓa da wuri suka daina biya." },
          { objective: "O1", q: "Kuna son yin ajiya akai-akai da cin ƙananan basussuka a cikin shekara. Wanne zai fi dacewa?", options: ["Ƙungiyar karɓa-bi-da-bi kaɗai", "Tsarin Ponzi", "Ajiye kuɗi a ƙarƙashin gado", "Ƙungiyar ajiya da bashi kamar VSLA"], answer: 3, why: "VSLA tana bar membobi su yi ajiya kuma su ci bashi daga asusun tare." },
          { objective: "O2", q: "Burinku GHS 900 ne cikin watanni 3. Nawa kowane wata?", options: ["GHS 300", "GHS 450", "GHS 270", "GHS 90"], answer: 0, why: "900 a raba da 3 shi ne 300." },
          { objective: "O3", q: "Wanne BA ya cikin dokoki bakwai da za a duba?", options: ["Dokokin bashi", "Rabon kuɗi ko jerin karɓa", "Abincin da shugaba ya fi so", "Wanda ke riƙe da kuɗin"], answer: 2, why: "Bakwai ɗin su ne gudummawa, taro, bashi, tara, barin ƙungiya, rabon kuɗi da riƙe kuɗi." },
          { objective: "O3", q: "Me yasa za a duba wanda ke sa hannu da riƙe kuɗin?", options: ["Don kada mutum ɗaya ya iya ɗauka shi kaɗai", "Don a gajarta taro", "Don a rage tara", "Don ƙungiya kada ta biya haraji"], answer: 0, why: "Riƙe kuɗi tare yana hana wani jami'i ɗaya yin almubazzaranci da kuɗin." }
        ]
      }
    },
    {
      name: "Babi na 2: Bayanai, bashi da kiyaye kai",
      lessons: [
        {
          title: "Bayanai da kiyaye kuɗi a taro",
          objectives: ["O4"],
          minutes: 5,
          goal: "Rubuta gudummawa da bashi, ku duba cewa kuɗin hannu ya yi daidai da bayanan.",
          text: [
            "Yawancin rushewar ƙungiyoyi yana farawa ne da rashin kyawun bayanai ko mutum ɗaya yana riƙe da kuɗin. Ƙungiyoyi nagari suna ajiye bayanan da kowane mamba zai iya fahimta.",
            "Kayan aiki da aka saba: kowane mamba yana da littafin mamba (passbook) da ke nuna ajiyarsa da bashinsa, ƙungiyar tana da littafin bayanai, kuma a VSLA da yawa akwatin kuɗi yana da makullai uku da mabuɗai uku da membobi uku daban-daban ke riƙe, ba mai ajiye akwatin ba. Wasu ƙungiyoyi suna ajiye kuɗi a asusun banki ko na waya na ƙungiya da ke buƙatar masu sa hannu biyu ko uku.",
            "A kowane taro: ana ƙirga kowace gudummawa da kowane biyan bashi a gaban membobi, a rubuta a littafin mamba da littafin bayanai, sannan a karanta jimillar da babbar murya. A ƙarshe, kuɗin da aka ƙirga dole ya yi daidai da bayanan. Idan bai yi daidai ba, ku tsaya ku gano dalili kafin kowa ya tafi.",
            "Misali: a wata VSLA a Tamale, sakatare yana karanta ragowar kuɗi da babbar murya, membobi biyu kuma suna ƙirga kuɗin. Sun yi daidai: GHS 3,450. Ana kulle akwatin, kuma mabuɗan suna tafiya gida tare da membobi uku daban-daban."
          ],
          steps: ["Ku ƙirga kowane biya a gaban membobi.", "Ku rubuta shi a littafin mamban da littafin bayanai.", "Ku karanta jimillar da babbar murya.", "Ku ƙirga kuɗin ku kwatanta da littafin bayanai.", "Idan ba su yi daidai ba, ku gano dalili kafin kowa ya tafi.", "Ku kulle kuɗin; mabuɗai ko ikon sa hannu a hannun membobi daban-daban."],
          words: [["Littafin mamba (passbook)", "littafin mamba na kansa da ke nuna ajiyarsa da bashinsa."], ["Mai sa hannu (signatory)", "mutumin da aka yarda ya sa hannu a madadin asusun ƙungiya; ƙungiyoyi nagari suna buƙatar biyu ko fiye."]],
          slides: [
            { title: "Me yasa bayanai suke da muhimmanci", bullets: ["Rashin kyawun bayanai da mutum ɗaya mai riƙe kuɗi", "nan ne yawancin ƙungiyoyi ke lalacewa"] },
            { title: "Kayan aiki", bullets: ["Littattafan mamba da littafin bayanai", "Akwatin kuɗi mai makullai uku, masu riƙe mabuɗi uku", "Asusun ƙungiya mai masu sa hannu biyu ko fiye"] },
            { title: "A kowane taro", bullets: ["Ku ƙirga a gaban membobi; ku rubuta", "Ku karanta jimilla da babbar murya", "Dole kuɗi ya yi daidai da bayanai kafin kowa ya tafi"] }
          ],
          sources: [VSLA],
          tryIt: "Ku yi tebur mai sauƙi na bayanai don taro ɗaya: sunan mamba, ajiyar da ya biya, bashin da ya biya, sabon bashi. Ku ƙara membobi uku na misali. Ku tara kowane layi na tsaye, ku duba cewa jimillar ta yi daidai da kuɗin da za ku ƙirga.",
          youCanNow: "rubuta gudummawa da bashi a taro da duba cewa kuɗin hannu ya yi daidai da bayanan.",
          quickCheck: [
            { objective: "O4", q: "A ƙarshen taro, kuɗin hannu ya gaza na littafin bayanai da GHS 200. Me za ku yi?", options: ["Ku yi watsi da shi; zai daidaita a gaba", "Ku bar ma'aji ya yi bayani wata mai zuwa", "Ku tsaya ku gano dalili kafin kowa ya tafi", "Ku yage shafin"], answer: 2, why: "Dole a gano bambanci yayin da kowa yana nan kuma abubuwa suna sabo a zuciya." },
            { objective: "O4", q: "Me yasa VSLA da yawa ke ba membobi uku daban-daban mabuɗai uku?", options: ["Don kada mutum ɗaya ya iya buɗe akwatin shi kaɗai", "Saboda makullai ba su da tsada", "Don a tsawaita taro", "Don mai ajiye akwatin ya iya buɗe shi a gida"], answer: 0, why: "Raba mabuɗai yana nufin ba za a iya buɗe kuɗin ba sai membobi suna nan." }
          ]
        },
        {
          title: "Bashin ƙananan kuɗi da bashin ƙungiya",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa jimillar abin da za ku biya a bashi, ku duba ranakun da kuɗin shigarku.",
          text: [
            "Bankunan ƙananan kuɗi (microfinance) da cibiyoyinsu suna ba mutane da ƙananan kasuwanci ƙananan basussuka, sau da yawa ta ƙungiyoyi. A Najeriya, Babban Bankin Najeriya (CBN) yana ba bankunan ƙananan kuɗi lasisi; a Kenya, Babban Bankin Kenya yana ba bankunan ƙananan kuɗi da masu ba da bashi ta waya lasisi; a Ghana, Bankin Ghana yana lissafa cibiyoyi masu lasisi; a ƙasashen XOF kamar Senegal da Côte d'Ivoire, ƙananan kuɗi suna bin dokokin BCEAO.",
            "Kada ku taɓa kwatanta basussuka da kuɗin ruwan da suka faɗa kaɗai. Ku nemi jimillar abin da za ku biya, a rubuce, har da dukkan kuɗaɗe, inshora da caji. Misali (adadi na ƙirƙira): ku ci bashin KES 10,000; ku biya KES 1,000 kowane mako na makonni 12. Jimillar biya: KES 12,000, don haka bashin ya ci KES 2,000.",
            "Ku duba ranakun biya da kuɗin shigarku. Biyan mako-mako yana da wuya idan kuna samun kuɗi a wata-wata ko a lokaci-lokaci. Ku tambayi me ke faruwa idan kun biya a makare: tara, da ko za a kai rahoto ga ofishin bayanan bashi (credit bureau).",
            "Bashin ƙungiya da yawa yana amfani da haɗin kai wajen biyan bashi (joint liability): idan mamba ɗaya bai biya ba, sauran dole su biya a madadinsa. Ku shiga tare da mutanen da kuka amince da su kaɗai, kuma ku sani cewa za ku iya biya wa wani. Ku ci bashi don abin da ke kawo kuɗi ko ke ajiye kuɗi, ba don biyan wani bashi ba."
          ],
          steps: ["Ku nemi jimillar abin da za a biya, a rubuce, da dukkan kuɗaɗe.", "Ku lissafa kuɗin bashin: jimillar biya a cire adadin da aka ci.", "Ku rubuta ranakun biya.", "Ku duba kowace rana da kuɗin shigarku a wata mara kyau.", "Ku tambayi game da tarar makara da rahoton bashi.", "Ku tambayi ko bashin yana da haɗin kai wajen biya (joint liability)."],
          words: [["Ƙananan kuɗi (microfinance)", "ƙananan basussuka da hidimomin ajiya ga mutane da ƙananan kasuwanci."], ["Jimillar biya", "dukkan kuɗin da kuke biya, har da kuɗin ruwa da sauran kuɗaɗe."], ["Haɗin kai wajen biyan bashi (joint liability)", "membobin ƙungiya dole su biya wa mamban da bai biya ba."], ["Ofishin bayanan bashi (credit bureau)", "kamfanin da ke rubuta yadda mutane ke biyan bashi; masu ba da bashi suna duba shi."]],
          slides: [
            { title: "Wa ke ba da bashi", bullets: ["Bankunan ƙananan kuɗi da cibiyoyinsu, sau da yawa ga ƙungiyoyi", "Babban banki ne ke ba su lasisi (CBN, CBK, Bank of Ghana)", "Ƙasashen XOF: dokokin BCEAO"] },
            { title: "Ku kwatanta jimillar biya", bullets: ["Ku nemi ta a rubuce, da dukkan kuɗaɗe", "Misali: KES 1,000 x makonni 12 = KES 12,000", "Kuɗin bashi = KES 12,000 - KES 10,000 = KES 2,000"] },
            { title: "Ranaku da haɗin kai wajen biya", bullets: ["Dole ranakun biya su dace da kuɗin shigarku", "Tarar makara; ofishin bayanan bashi", "Bashin ƙungiya: za ku iya biya wa wasu"] }
          ],
          sources: [CBN_MFB, CBK_DCP, BOG, BCEAO_SFD],
          tryIt: "Ku yi amfani da wannan misali ko tayi na gaske: ku ci bashin NGN 50,000 ku biya NGN 4,800 kowane mako na makonni 12. Ku lissafa jimillar biya da kuɗin bashin. Sannan ku rubuta ko biyan mako-mako ya dace da kuɗin shigarku.",
          youCanNow: "lissafa jimillar abin da za ku biya a bashi da duba cewa ranakun sun dace da kuɗin shigarku kafin ku sa hannu.",
          quickCheck: [
            { objective: "O5", q: "Kun ci bashin GHS 1,000 kuma kuna biyan GHS 120 a wata na watanni 10. Mene ne jimillar biya?", options: ["GHS 1,000", "GHS 1,120", "GHS 1,200", "GHS 120"], answer: 2, why: "120 x 10 = 1,200." },
            { objective: "O5", q: "A bashin ƙungiya mai haɗin kai wajen biya, mamba ɗaya ya daina biya. Me zai iya faruwa?", options: ["Babu komai", "Sauran membobi dole su biya a madadin wannan mamba", "Mai ba da bashi zai soke bashin", "Shugaban ƙungiya ne kaɗai zai biya"], answer: 1, why: "Haɗin kai wajen biya yana nufin membobi suna biyan bashin junansu da ba a biya ba." }
          ]
        },
        {
          title: "Tsarin Ponzi, masu ba da bashi na bogi da tsarinku",
          objectives: ["O6", "O2"],
          minutes: 6,
          goal: "Gane alamun gargaɗin tsarin Ponzi ko mai ba da bashi na bogi, ku duba mai hidima a jerin hukumar kula da kuɗi.",
          text: [
            "Tsarin Ponzi yana biyan membobin farko da kuɗin sababbin membobi. Koyaushe yana rushewa, kuma yawancin mutane suna rasa ajiyarsu. Alamun gargaɗi: alkawarin ninka kuɗinku ko riba mai yawa da aka tabbatar cikin ɗan lokaci, matsa lamba don kawo abokai da 'yan uwa, lada don kawo mutane, kasuwancin da babu wanda zai iya bayaninsa, da tallatawa ta ƙungiyoyin WhatsApp, TikTok, Instagram ko Telegram da mashahuran 'yan soshiyal midiya. Hukumar SEC ta Najeriya ta yi gargaɗi kan irin waɗannan tsare-tsare sau da yawa.",
            "Masu ba da bashi na bogi da manhajojin bashi: suna neman kuɗi kafin su ba da bashin, suna neman PIN ko kalmar sirrinku, suna neman damar ganin dukkan lambobin wayarku, ko suna barazana da kunyata masu cin bashi. Masu ba da bashi na gaske ba sa taɓa buƙatar PIN ɗinku.",
            "Ku duba kafin ku biya ko ku bayar da bayanai. Ku nemi mai hidimar a jerin hukuma na hukumar kula da kuɗi: SASRA don SACCO masu karɓar ajiya, da Babban Bankin Kenya don bankunan ƙananan kuɗi da masu ba da bashi ta waya a Kenya; CBN don bankunan ƙananan kuɗi da jerin FCCPC na masu ba da bashi ta intanet da aka amince da su a Najeriya; jerin cibiyoyi masu lasisi na Bankin Ghana; BCEAO da ma'aikatun kuɗi na ƙasa a ƙasashen XOF. Idan ba ya cikin jerin, kada ku yi amfani da shi.",
            "Sannan ku kammala tsarinku: buri, jimillar kuɗi, rana, adadin kowane mako ko wata, inda kuke ajiya, da amsoshin takardar dubawa game da ƙungiyar ko cibiyar."
          ],
          steps: ["Ku tambaya: shin yana alkawarin riba da aka tabbatar ko mai yawa sosai cikin sauri?", "Ku tambaya: shin yana biya na don kawo wasu?", "Ku tambaya: shin yana son kuɗi da farko, ko PIN ɗina?", "Ku nemo shi a jerin hukuma na hukumar kula da kuɗi.", "Ba ya cikin jerin, ko akwai wata alamar gargaɗi: kada ku biya.", "Ku rubuta tsarin ajiyarku na wata-wata da takardar dubawa."],
          words: [["Tsarin Ponzi", "zamba da ke biyan tsofaffin membobi da kuɗin sababbin membobi har ya rushe."], ["Hukumar kula da kuɗi (regulator)", "hukumar gwamnati da ke ba da lasisi kuma take sa ido kan masu hidimar kuɗi, kamar babban banki."], ["Mai lasisi", "wanda hukumar kula da kuɗi ta yarda masa a hukumance ya yi wannan kasuwanci."]],
          slides: [
            { title: "Alamun gargaɗin Ponzi", bullets: ["\"Ninka kuɗinka\"; riba mai yawa da aka tabbatar", "Lada don kawo abokai", "Kasuwancin da babu mai bayaninsa; ana tallatawa a soshiyal midiya"] },
            { title: "Alamun mai ba da bashi na bogi", bullets: ["Kuɗi kafin bashi", "Yana neman PIN ko kalmar sirrinku", "Yana son dukkan lambobin wayarku; yana barazana ga masu bashi"] },
            { title: "Ku duba jerin hukuma", bullets: ["Kenya: SASRA, CBK", "Najeriya: CBN, masu ba da bashi da FCCPC ta amince da su", "Ghana: Bank of Ghana; XOF: BCEAO"] },
            { title: "Ku kammala tsarinku", bullets: ["Buri, jimilla, rana, adadin kowane wata", "Inda kuke ajiya", "Amsoshin takardar dubawa"] }
          ],
          sources: [SEC_NG, SASRA, CBK_DCP, FCCPC, BOG, BCEAO_SFD],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin ajiyarku na wata-wata mai buri, jimillar kuɗi, rana, adadin kowane mako ko wata da inda za ku ajiye shi. Ku ƙara takardar dubawa: dokokin ƙungiyar, yadda ake ajiye kuɗi da bayanai, lasisin (da aka duba a jerin hukumar kula da kuɗi idan ya cancanta) da jimillar kuɗin kowane bashi.",
          youCanNow: "gane tsarin Ponzi ko mai ba da bashi na bogi, duba mai hidima a jerin hukuma, da bin tsarin ajiyarku da kuka rubuta.",
          quickCheck: [
            { objective: "O6", q: "Wata ƙungiyar WhatsApp tana alkawarin ninka kuɗinku cikin kwanaki 30 kuma tana biyan ku kan kowane aboki da kuka kawo. Mene ne wannan?", options: ["Ƙungiyar ajiya", "Bankin ƙananan kuɗi mai lasisi", "Ƙungiyar karɓa-bi-da-bi", "Alamun tsarin Ponzi"], answer: 3, why: "Riba mai sauri da aka tabbatar da lada don kawo mutane alamun Ponzi ne da aka saba gani." },
            { objective: "O6", q: "Wata manhajar bashi tana neman \"kuɗin sarrafawa\" kafin ta turo bashin. Me za ku yi?", options: ["Kada ku biya; ku duba ta a jerin hukumar kula da kuɗi", "Ku biya da sauri kafin tayin ya ƙare", "Ku biya rabi", "Ku ba da PIN ɗinku a maimakon haka"], answer: 0, why: "Kuɗi kafin bashi alamar mai ba da bashi na bogi ce; ku fara duba jerin hukuma." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bayanai, bashi da kiyaye kai",
        questions: [
          { objective: "O4", q: "Me ya kamata ya faru da kowace gudummawa a taro?", options: ["Ma'aji ya kai ta gida ya ƙirga", "A ƙirga ta a gaban membobi a rubuta a littafin mamba da littafin bayanai", "A rubuta ta mako mai zuwa", "Ta tafi kai tsaye wayar shugaba"], answer: 1, why: "Ƙirgawa da rubutawa a gaban membobi suna sa bayanai su zama na gaskiya." },
          { objective: "O4", q: "Asusun ƙungiya ya kamata ya buƙaci:", options: ["Sa hannun ma'aji kaɗai", "Babu sa hannu", "Masu sa hannu biyu ko fiye", "Sabon PIN ga kowane mamba"], answer: 2, why: "Fiye da mai sa hannu ɗaya yana hana mutum ɗaya ɗaukar kuɗin." },
          { objective: "O5", q: "Mene ne hanya mafi kyau ta kwatanta basussuka biyu?", options: ["Jami'in bashi mafi fara'a", "Kuɗin ruwan da ke cikin talla", "Amincewa mafi sauri", "Jimillar abin da za ku biya, da dukkan kuɗaɗe, da ranakun da suka dace da kuɗin shigarku"], answer: 3, why: "Jimillar biya tana nuna ainihin kuɗin bashi; ranakun suna nuna ko za ku iya biya." },
          { objective: "O6", q: "A ina za ku duba cewa wata SACCO a Kenya za ta iya karɓar ajiya?", options: ["Jerin SASRA na SACCO masu lasisin karɓar ajiya", "Shafin Facebook", "Takardar tallar SACCO ɗin kaɗai", "Maganar aboki"], answer: 0, why: "SASRA ce ke ba SACCO masu karɓar ajiya lasisi kuma take wallafa jerin." },
          { objective: "O6", q: "Wanne ne alamar gargaɗin mai ba da bashi na bogi?", options: ["Yana ba da jimillar kuɗin bashi a rubuce", "Yana neman PIN ɗinku ko kuɗi kafin bashi", "Yana cikin jerin babban banki", "Yana bayanin tarar makara"], answer: 1, why: "Masu ba da bashi na gaske ba sa taɓa buƙatar PIN ɗinku kuma ba sa karɓar kuɗi kafin su ba da bashi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙungiyoyin Ajiya da Ƙananan Kuɗi (Adashe, Chama, VSLA, Tontine, Esusu)",
    questions: [
      { objective: "O1", q: "Esusu, susu, tontine da gam'eya yawanci su ne:", options: ["Bankunan ƙananan kuɗi", "Ƙungiyoyin ajiya na karɓa-bi-da-bi", "Manhajojin bashi", "Kamfanonin inshora"], answer: 1, why: "Sunaye ne na gida na ƙungiyoyin da membobi ke karɓar kuɗi bi-da-bi, kamar adashe." },
      { objective: "O1", q: "Me ƙungiyar ajiya da bashi ke yi da ƙungiyar karɓa-bi-da-bi ba ta yi?", options: ["Tana ba membobi bashi daga ajiya kuma tana raba kuɗi da riba", "Tana ba kowane mamba kuɗin bi-da-bi", "Ba ta taɓa taro", "Ba ta da dokoki"], answer: 0, why: "VSLA ko ASCA tana da asusun bashi kuma tana raba ajiya tare da kuɗin hidima." },
      { objective: "O1", q: "Wanne ne haɗarin ƙungiyar karɓa-bi-da-bi?", options: ["Tana biyan kuɗin ruwa mai yawa", "Babban banki ne ya ba ta lasisi", "Tana da akwati mai makullai uku", "Membobin da suka karɓa da wuri za su iya daina biya"], answer: 3, why: "Masu karɓa da wuri da suka daina biya suna cutar da membobin da ke jira." },
      { objective: "O2", q: "Kuna buƙatar XOF 60,000 cikin makonni 12. Nawa kowane mako?", options: ["XOF 6,000", "XOF 12,000", "XOF 4,000", "XOF 5,000"], answer: 3, why: "60,000 a raba da 12 shi ne 5,000." },
      { objective: "O2", q: "\"Ku fara biyan kanku\" yana nufin:", options: ["Ku saya wa kanku kyauta", "Ku fara biyan shugaban ƙungiya", "Ku ci bashi kafin ku yi ajiya", "Ku yi ajiya a ranar da kuɗi ya shigo, kafin wani kashe kuɗi"], answer: 3, why: "Fara ajiya yana sa ta faru kafin a kashe kuɗin." },
      { objective: "O2", q: "Tsarinku yana buƙatar EGP 900 a wata amma EGP 600 kawai za ku iya ajiyewa. Me za ku iya yi?", options: ["Ku ci bashi daga manhajar bashi", "Ku daina ajiya", "Ku ƙara wa ranar lokaci, ku rage burin ko ku rage kashe kuɗi", "Ku shiga tsarin da ke ninka kuɗi"], answer: 2, why: "Ku canja ranar, burin ko kashe kuɗinku har tsarin ya dace." },
      { objective: "O2", q: "Me yasa za ku ajiye kuɗin gaggawa daban da ajiyar burinku?", options: ["Don kada matsalar ba zato ta kwashe ajiyar burinku", "Saboda bankuna suna buƙata", "Don biyan tarar ƙungiya", "Yana fi samun riba"], answer: 0, why: "Kuɗin gaggawa daban yana kare burin daga abubuwan ba zato." },
      { objective: "O3", q: "Mene ne kundin tsarin mulkin ƙungiya?", options: ["Littafin tarihin shugaba", "Manhajar bashi", "Rubutattun dokokin da membobi suka amince da su kuma suke bi", "Akwatin kuɗi"], answer: 2, why: "Kundin tsarin mulki ko dokokin cikin gida su ne rubutattun dokokin ƙungiya." },
      { objective: "O3", q: "Wace doka ce ke faɗa muku me ke faruwa idan ba a biya bashin wani mamba ba?", options: ["Dokar taro", "Dokar bashi", "Dokar rabon kuɗi", "Babu ɗaya daga cikin dokokin"], answer: 1, why: "Dokokin bashi sun ƙunshi wa ke cin bashi, nawa, da me ke faruwa idan ba a biya ba." },
      { objective: "O3", q: "Dokokin ƙungiya ba su faɗi yadda mamba ke barin ƙungiya ba. Me za ku yi?", options: ["Ku nemi ƙungiyar ta ƙara dokar barin ƙungiya kafin ku shiga", "Ku shiga duk da haka", "Ku tafi ba tare da faɗa wa kowa ba", "Ku ɗauki ajiyarku daga akwatin"], answer: 0, why: "Dokar da ta ɓace tambaya ce da za a warware kafin ku amince da ƙungiya da kuɗi." },
      { objective: "O4", q: "Mene ne littafin mamba (passbook)?", options: ["Littafin mamba da ke nuna ajiyarsa da bashinsa", "Fasfo", "Katin banki", "Manhajar bashi"], answer: 0, why: "Littafin kowane mamba yana nuna ajiyarsa da bashinsa." },
      { objective: "O4", q: "A ƙarshen kowane taro:", options: ["Shugaba yana ajiye kuɗin a gida ba tare da ƙirga ba", "Dole kuɗin da aka ƙirga ya yi daidai da littafin bayanai", "Ana zubar da bayanai", "Ma'aji ne kaɗai ke karanta jimilla"], answer: 1, why: "Dole kuɗi da bayanai su yi daidai, kuma a karanta jimilla da babbar murya." },
      { objective: "O4", q: "Me yasa ake karanta jimilla da babbar murya a taro?", options: ["Don a tsawaita taro", "Don nuna isa", "Don kowane mamba ya ji kuma ya amince da adadin", "Saboda doka ce a ko'ina"], answer: 2, why: "Karantawa da babbar murya yana bar kowane mamba, har da waɗanda ba sa iya karatu, su duba adadin." },
      { objective: "O5", q: "Kun ci bashin MAD 2,000 kuma kuna biyan MAD 250 a wata na watanni 10. Nawa bashin ya ci?", options: ["MAD 250", "MAD 2,500", "MAD 2,000", "MAD 500"], answer: 3, why: "Jimillar biya 2,500 a cire 2,000 da aka ci = 500." },
      { objective: "O5", q: "Galibi kuna samun kuɗi bayan girbi ko a lokacin kasuwa ta yi zafi. Me ya kamata ku duba a bashi?", options: ["Launin fom", "Irin wayar jami'in", "Babu komai", "Ranakun biya da kuɗin shigarku"], answer: 3, why: "Dole ranakun biya su dace da lokacin da kuɗi ke shigowa." },
      { objective: "O5", q: "Haɗin kai wajen biyan bashi (joint liability) yana nufin:", options: ["Membobi suna biya wa mamban da bai biya ba", "Banki ne ke biyan bashinku", "Babu wanda zai biya", "Kuna iya cin bashi sau biyu"], answer: 0, why: "A haɗin kai wajen biya, ƙungiyar tana biyan bashin da ba a biya ba." },
      { objective: "O5", q: "Me ya kamata mai ba da bashi ya ba ku kafin ku sa hannu?", options: ["Waya kyauta", "Kuɗin ruwa kaɗai", "Jimillar abin da za a biya, a rubuce, da dukkan kuɗaɗe da ranaku", "Bayanan bashin maƙwabcinku"], answer: 2, why: "Rubutacciyar jimilla da ranaku suna bar ku kwatanta kuma ku tsara." },
      { objective: "O6", q: "Wanne ne alamar gargaɗin Ponzi?", options: ["Rubutattun dokoki", "Riba mai yawa da aka tabbatar cikin sauri da lada don kawo mutane", "Membobi suna karanta jimilla da babbar murya", "Akwatin kuɗi mai makullai uku"], answer: 1, why: "Riba mai sauri da aka tabbatar da lada don kawo mutane alamun Ponzi ne da aka saba gani." },
      { objective: "O6", q: "A Najeriya, a ina za ku duba ko an amince da manhajar bashi?", options: ["Sharhin manhajar kanta", "Ƙungiyar WhatsApp", "Bidiyon TikTok", "Jerin FCCPC na masu ba da bashi ta intanet da aka yi wa rajista"], answer: 3, why: "FCCPC tana wallafa matsayin rajistar masu ba da bashi ta intanet." },
      { objective: "O6", q: "Wani mai hidima ba ya cikin jerin hukumar kula da kuɗi. Me za ku yi?", options: ["Ku yi amfani da shi don ƙananan kuɗi kaɗai", "Ku biya idan aboki ya ba da shawara", "Kada ku yi amfani da shi", "Ku ba su PIN ɗinku don su duba"], answer: 2, why: "Masu hidima da ba sa cikin jerin ba a sa ido a kansu; kuɗinku ba shi da kariya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Buri a sarari da lissafi", objective: "O2", notYet: "Babu jimilla ko rana, ko adadin kowane wata bai kai burin ba.", meets: "Buri, jimilla, rana da adadin kowane mako ko wata, da lissafin da ya yi daidai.", exceeds: "An kuma duba shi da kuɗin shigar wata mara kyau, kuma ana ajiye kuɗin gaggawa daban." },
      { name: "Nau'in ajiya da ya dace", objective: "O1", notYet: "Ba a zaɓi wurin ajiya ba, ko babu dalili.", meets: "Ya faɗi inda za a ajiye kuɗin, da dalili ɗaya da ya dace da burin, da haɗari ɗaya.", exceeds: "Ya kwatanta zaɓi biyu (misali ƙungiyar karɓa-bi-da-bi da SACCO) kafin ya zaɓa." },
      { name: "An duba dokokin ƙungiya", objective: "O3", notYet: "Ba a ga dokoki ba ko ƙasa da huɗu cikin bakwai aka duba.", meets: "Aƙalla shida cikin abubuwan dokoki bakwai an duba, kuma an rubuta waɗanda suka ɓace a matsayin tambayoyi.", exceeds: "An duba dukkan bakwai kuma an kai dokokin da suka ɓace gaban ƙungiyar." },
      { name: "Bayanai da kiyaye kuɗi", objective: "O4", notYet: "Bai faɗi yadda ake ajiye kuɗi da bayanai ba.", meets: "Ya faɗi yadda ake ajiye kuɗi (akwati mai makullai uku ko asusu mai masu sa hannu biyu ko fiye) da cewa ana karanta jimilla da babbar murya.", exceeds: "Ya haɗa da misalin tebur na bayanai da ya yi daidai." },
      { name: "Kuɗin bashi da kiyayewa", objective: "O5", notYet: "An shirya bashi ba tare da jimillar biya ba.", meets: "Kowane bashi yana da jimillar biya, kuɗin bashi da ranakun da aka duba da kuɗin shiga; ko tsarin ba shi da bashi.", exceeds: "Ya kuma ambaci tarar makara, rahoton bashi da haɗin kai wajen biya." },
      { name: "Duba lasisi da zamba", objective: "O6", notYet: "Akwai mai hidima marar lasisi ko tsari mai alamun gargaɗi a cikin tsarin.", meets: "Duk cibiyar da ke karɓar ajiya ko ba da bashi a matsayin kasuwanci an duba ta a jerin hukuma na hukumar kula da kuɗi, kuma babu alamun gargaɗi.", exceeds: "Ya faɗi sunan jerin da aka yi amfani da shi da ranar da aka duba." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce, bayan kwanaki 30, suna ajiya kowane mako ko wata bisa tsarinsu",
      "Ƙungiyoyin abokan aiki da suka fara amfani da rubutattun dokoki, littattafan mamba da karanta jimilla da babbar murya",
      "Masu koyo da suka ce sun ƙi tsarin Ponzi ko mai ba da bashi marar lasisi cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, alƙalami da na'urar lissafi ta waya",
      "Kundin tsarin mulki ko dokokin ƙungiya, idan mai koyo yana cikin ƙungiya",
      "Jerin hukuma na hukumar kula da kuɗi na ƙasarku (SASRA, CBK, CBN, FCCPC, Bank of Ghana, BCEAO), an buɗe shi sau ɗaya a waya ko an buga shi",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ya fi kyau a gudanar da shi a cikin adashe, chama, VSLA, susu, tontine ko ƙungiyar mata da ke akwai: darasi ɗaya a kowane taro, da gwajin farko a taron farko.",
      "Ku yi amfani da dokokin ƙungiyar kanta a matsayin rubutun atisaye a Darasi na 3, da taron gwaji da kuɗin wasa a Darasi na 4.",
      "Kada ku ba da shawarar wani banki, SACCO, manhaja ko tsari na musamman; ku koya wa masu koyo su duba jerin hukumar kula da kuɗi da kansu.",
      "Ku duba cewa jerin hukumomin kula da kuɗi na yanzu ne kafin zaman; sunaye da adireshin shafuka suna iya canjawa.",
      "Kada ku taɓa neman masu koyo su bayyana PIN, kalmomin sirri ko ainihin kuɗin da ke asusunsu a gaban ƙungiya."
    ]
  }
};
