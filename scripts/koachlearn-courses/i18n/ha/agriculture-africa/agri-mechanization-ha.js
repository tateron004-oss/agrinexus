"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-mechanization.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_HIRE = { name: "FAO: Hidimomin haya a matsayin kasuwanci (amfani da injuna a noma mai ɗorewa)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO: Hidimomin haya a matsayin kasuwanci (littafin horo)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO da Hukumar Tarayyar Afirka: Sustainable Agricultural Mechanization: A Framework for Africa (tsarin amfani da injuna a noma a Afirka, 2018)", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO: Amfani da injuna a noma mai ɗorewa (daga kayan aikin hannu zuwa injuna masu inji)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor: yin odar tarakta ta manhaja, shafin intanet ko wakilin oda; bin diddigin taraktoci; tsarin biya a hankali har a mallaka", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "ILO: Gina taraktoci da amfani da su lafiya (ka'idojin aiki)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Pest Control Products Board (Kenya): magungunan kashe ƙwari da aka yi wa rajista", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Najeriya)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization-ha",
  lang: "ha",
  translationOf: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Injunan Gona da Hidimomin Haya",
  skills: "Zaɓar ayyukan da za a yi da inji, Kwatanta kuɗin haya da na mallaka, Yin odar taraktar haya da duba aikinta, Zaɓar ƙananan injuna, Aiki lafiya da ajiye littafin kulawa, Tsara kasuwancin hayar injuna",
  outcome: "yanke shawara da lissafi ko za ku yi haya ko ku sayi inji don wani aikin gona: zaɓar ayyukan da inji ke biya a kansu, kwatanta kuɗin haya da na mallaka, yin oda da duba hidimar haya, zaɓar ƙaramin inji da ya dace, sarrafa shi lafiya da littafin kulawa, da tsara hidimar haya ga makwabtanku idan mallaka tana biya ta wannan hanya kaɗai.",
  about: [
    "Wannan kwas ɗin na ƙananan manoma da manoma masu girma ne, ma'aikatan gona, matasa 'yan kasuwar noma da masu ba da shawara kan noma (extension workers) a Najeriya, Ghana, Kenya, Senegal, Burkina Faso da sauran Afirka. Yawancin aikin gona a Afirka har yanzu da hannu ake yi. Injuna suna iya shuka a kan lokaci, rage wahalar aiki da rage asara, amma inji da ke zaune ba aiki yawancin shekara zai iya jefa gona cikin bashi.",
    "Babi na 1 game da yanke shawara ne: waɗanne ayyuka inji ke biya a kansu, haya ko mallaka tare da misalin lissafi, da yin odar hayar tarakta, har da ta manhaja kamar Hello Tractor. Babi na 2 game da sarrafa injuna ne: ƙananan injuna kamar taraktar ƙafa biyu, injin ɓarar masara, injin sussuka da injin feshi; aiki lafiya da littafin kulawa; da fara kasuwancin hayar injuna ga makwabtanku. Haɗa injuna a matsayin ƙungiya yana cikin kwas ɗin \"Haɗa Kan Al'umma: Raba Injiniyoyi da Ciniki Don Kayan Noma\".",
    "Adadin kuɗin da ke cikin wannan kwas misalai ne kawai; ku yi amfani da farashin gaske daga dillalai, masu haya da masu ba da bashi. Kwas ɗin yana bayanin yadda bashi da yarjejeniyar haya-saye (lease) ke aiki, amma ba ya ba da shawarar zuba jari: ku karanta kowace yarjejeniya gaba ɗaya, ku tambayi mai ba da shawara da kuka amince da shi. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aiki don gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi takardar shawarar haya ko saye don inji ɗaya da aiki ɗaya a gonarku (ko misali kamar tarakta don huɗar hekta 10 na masara a Kaduna, ko injin ɓarar masara don ƙungiyar manoma kusa da Tamale): aikin da dalilin da inji ke biya a kansa; kuɗin mallaka na shekara (kuɗaɗe masu tsayawa da na kowace hekta); kuɗin haya; yankin da ba riba ba faɗuwa (break-even); shawararku; da dokokin tsaro da littafin kulawa da za ku yi amfani da su. Idan kun yanke shawarar saya, ku ƙara tsari mai shafi ɗaya na ba da hayar inji ga makwabta: hidimomi, abokan ciniki da hekta, farashi, kuɗaɗe, break-even, oda da biya, da manyan haɗurra.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoma masu girma, ma'aikatan gona, shugabannin ƙungiyoyin manoma, matasa 'yan kasuwar noma da masu ba da shawara kan noma a Najeriya, Ghana, Kenya, ƙasashen Afirka ta Yamma masu magana da Faransanci da sauran Afirka, waɗanda ke hayar tarakta ko ƙaramin inji, ko suke tunanin saya.",
    startingPoint: "Yawancin aiki da hannu ko da shanu suke yi, kuma wani lokaci suna hayar tarakta ta hannun dillali. Kaɗan ne suka kwatanta cikakken kuɗin mallaka da na haya, suka duba aikin da suka biya, ko suka ajiye littafin kulawa. Wasu matasa suna ganin hayar injuna a matsayin kasuwanci amma ba su lissafa kuɗinta ba.",
    gap: "Manoma suna sayen injunan da ba a amfani da su sosai kuma masu tsadar sarrafawa, ko su jira taraktoci da ke makara su shuka a makare. Suna buƙatar zaɓar ayyukan da inji ke biya a kansu, kwatanta haya da mallaka da lissafi na gaske, yin oda da duba hidimar haya, sarrafa injuna lafiya, kuma idan sun saya, su samu kuɗi daga aikin makwabta.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kwas ɗin yana nan kuma da Sifaniyanci, Faransanci da Larabci",
      "Na'urori: waya mai sauƙi ko wayar zamani da na'urar lissafi; manhajojin oda suna buƙatar wayar zamani ko wakilin oda",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aikin gona",
      "Adadin kuɗi misalai ne; farashi, kuɗin ruwan bashi da kuɗin haya sun bambanta daga wuri zuwa wuri kuma suna canjawa",
      "Kuɗi: bayani kan bashi da haya-saye da haɗarinsu; babu shawarar zuba jari",
      "Tsaro: injuna suna iya kisa; babu yara masu aiki kusa da injuna; injin feshi da magungunan kashe ƙwari masu rajista kawai, kamar yadda alamar kwalbar ta ce"
    ],
    prerequisites: "Babu. Kwas ɗin \"Agribusiness and Farm Management\" (Kasuwancin Noma da Sarrafa Gona) yana taimakawa da lissafin kuɗi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ayyukan da ke gonarku", action: "gane waɗanne ayyuka inji ke biya a kansu", standard: "kuna ba da dalili ga kowanne: lokaci, ma'aikata, asara ko yawan aiki" },
    { id: "O2", condition: "Idan aka ba ku farashin inji, kuɗin sarrafa shi da kuɗin haya", action: "lissafa kuɗin mallaka na shekara, kuɗin haya da yankin break-even", standard: "da lissafi daidai da shawarar haya ko saye a sarari" },
    { id: "O3", condition: "Idan kuna hayar tarakta ko hidimar inji", action: "yarda kan farashi, yanki, rana da ingancin aiki tun kafin a fara, da duba aikin kafin ku biya", standard: "kuna auna gonar da karɓar rasiti" },
    { id: "O4", condition: "Idan aka ba ku aikin gona da kasuwar yankinku", action: "zaɓar ƙaramin inji da ya dace da aikin, yawan aiki, da kayan gyara da makanikai da ke kusa", standard: "kuna lissafa aƙalla abubuwa huɗu da za a duba kafin saye" },
    { id: "O5", condition: "Kafin da bayan kowane amfani da inji", action: "yin binciken tsaro da rubuta aiki da kulawa a littafin kulawa", standard: "ba tare da tsallake kowace dokar tsaro ba, kuma da rana a kowane rubutu" },
    { id: "O6", condition: "Idan aka ba ku inji da gonakin da ke kewaye da ku", action: "rubuta tsari mai shafi ɗaya na hidimar hayar injuna", standard: "da hidimomi, abokan ciniki, farashi, kuɗaɗe, break-even da haɗurra" }
  ],
  chapters: [
    {
      name: "Babi na 1: Haya ko saye?",
      lessons: [
        {
          title: "Ayyukan da inji ke biya a kansu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane ayyukan da ke gonarku da inji ke biya a kansu.",
          text: [
            "Amfani da injuna a noma (mechanization) yana nufin amfani da kayan aiki da injuna wajen aikin gona, daga ingantattun kayan aikin hannu da dabbobin noma zuwa taraktoci da injuna masu inji. FAO tana jaddada zaɓar abin da ya dace da gona, da mutane da wurin. Inji yana biya idan ya kawo ko ya ajiye kuɗi fiye da abin da yake ci.",
            "Ayyukan da sau da yawa ke biya: shirya ƙasa, idan huɗa ko tsaga ƙasa a kan lokaci bayan ruwan sama na farko ya bar ku ku shuka a kan lokaci; sussuka da ɓarar hatsi, inda inji ke yin cikin sa'o'i abin da mutane da yawa ke yi cikin kwanaki, kuma ya rage hatsin da ke zubewa ƙasa; ɗaukar girbi da kayan gona; jan ruwa; da sarrafawa kamar goge rogo ko niƙa. Ayyukan da ba sa biya sosai: ƙananan gonaki, aikin da yake da arha kuma da sauri da hannu, ko aikin da kuke yi sau ɗaya a shekara na 'yan sa'o'i.",
            "Ku yi tambayoyi huɗu game da kowane aiki. Lokaci: yin sa a makare yana rage amfanin gona? Ma'aikata: ma'aikata sun yi ƙaranci ko tsada a wannan lokaci? Asara: yin sa da hannu yana sa amfanin gona ya ɓace? Yawan aiki: akwai isasshen aiki da zai sa inji ya yi ta aiki? Sannan ku kwatanta kuɗin da hannu da na inji. Misali (adadin misali ne kawai): huɗar hekta 1 da hannu yana ɗaukar ranakun aiki 25 a GHS 50 = GHS 1,250, amma hayar tarakta GHS 600 ce a kowace hekta."
          ],
          steps: ["Ku lissafa kowane babban aiki a gonarku a cikin shekara.", "Ga kowanne, ku tambaya: lokaci, ma'aikata, asara, yawan aiki.", "Ku lissafa kuɗin da hannu: ranakun aiki x albashin yini.", "Ku nemo kuɗin da inji: kuɗin haya x hekta.", "Ku yi alama a ayyukan da inji ya fi arha ko ya fi kawo kuɗi."],
          words: [["Mechanization (amfani da injuna)", "amfani da kayan aiki da injuna, daga ingantattun kayan aikin hannu zuwa taraktoci, don aikin gona."], ["Lokaci (timeliness)", "yin aiki a lokacin da ya dace, kamar shuka jim kaɗan bayan ruwan sama ya fara."], ["Ranar aiki (person-day)", "aikin da mutum ɗaya ke yi a yini ɗaya."]],
          slides: [
            { title: "Lokacin da inji ke biya", bullets: ["Yana kawo ko ajiye kuɗi fiye da abin da yake ci", "Daga ingantattun kayan aikin hannu zuwa taraktoci", "Ku zaɓi abin da ya dace da gona, mutane da wuri"] },
            { title: "Ayyukan da sau da yawa ke biya", bullets: ["Shirya ƙasa a kan lokaci", "Sussuka da ɓarar hatsi: da sauri, asara ƙasa", "Ɗaukar kaya, jan ruwa, sarrafawa"] },
            { title: "Tambayoyi huɗu", bullets: ["Lokaci: makara yana rage amfanin gona?", "Ma'aikata: sun yi ƙaranci ko tsada?", "Asara? Yawan aiki?"] },
            { title: "Ku kwatanta kuɗin", bullets: ["Da hannu: ranakun aiki x albashi", "Misali: kwanaki 25 x GHS 50 = GHS 1,250 a kowace ha", "Misalin hayar inji: GHS 600 a kowace ha"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "Ku lissafa manyan ayyuka biyar a gonarku. Ga kowanne, ku amsa tambayoyi huɗun (lokaci, ma'aikata, asara, yawan aiki) ku kwatanta kuɗin da hannu da kuɗin da inji. Ku zagaye ayyuka biyu da inji ya fi biya a kansu.",
          youCanNow: "zaɓar ayyukan da ke gonarku da inji ke biya a kansu, da faɗin dalili.",
          quickCheck: [
            { objective: "O1", q: "Me yasa huɗa a kan lokaci sau da yawa ke biya?", options: ["Taraktoci sun fi arha a lokacin rani", "Shuka a kan lokaci bayan ruwan sama na iya ƙara amfanin gona", "Huɗa a makare tana kashe ciyawa sosai", "Tana sa gonar ta yi kyau a gani"], answer: 1, why: "Lokaci yana da muhimmanci: shuka a makare sau da yawa yana rage amfanin gona." },
            { objective: "O1", q: "Ɓarar tan 2 na masara da hannu yana ɗaukar ranakun aiki 20 a NGN 4,000. Hidimar injin ɓara tana cin NGN 50,000. Wanne ya fi arha?", options: ["Hidimar injin ɓara", "Ɓara da hannu", "Kuɗinsu ɗaya ne", "Ba za a iya sani ba"], answer: 0, why: "Ɓara da hannu tana cin 20 x 4,000 = NGN 80,000, fiye da NGN 50,000." }
          ]
        },
        {
          title: "Haya ko mallaka: misalin lissafin kuɗi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lissafa kuɗin mallaka da na haya, ku nemo yankin break-even.",
          text: [
            "Mallakar inji tana da kuɗaɗe masu tsayawa (fixed costs) da kuke biya kowace shekara ko da bai motsa ba: darajar da yake rasawa a tsawon rayuwarsa (depreciation), kuɗin ruwan bashi ko abin da kuɗin zai iya samu a wani wuri, inshora, da rumfa. Tana kuma da kuɗin sarrafawa a kowace hekta: man fetur, man inji, gyara da direba. Haya tana da kuɗi ɗaya: kuɗin haya a kowace hekta.",
            "Misalin lissafi don tarakta da garma a Najeriya (duk adadin misali ne kawai; ku yi amfani da farashin gaske da ainihin kuɗin ruwan mai ba ku bashi): farashi NGN 30,000,000, darajarsa NGN 6,000,000 bayan shekaru 10, don haka depreciation = (30,000,000 - 6,000,000) / 10 = NGN 2,400,000 a shekara. Kuɗin ruwan bashi (misali) NGN 1,800,000 a shekara, inshora da rumfa NGN 600,000. Kuɗaɗe masu tsayawa = NGN 4,800,000 a shekara. Kuɗin sarrafawa = NGN 25,000 a kowace hekta. Kuɗin haya = NGN 60,000 a kowace hekta.",
            "Kowace hekta da kuka huɗa da taraktarku tana ajiye 60,000 - 25,000 = NGN 35,000 idan aka kwatanta da haya. Yankin break-even = kuɗaɗe masu tsayawa / ajiya a kowace hekta = 4,800,000 / 35,000 = kusan hekta 137 a shekara. Manomi mai hekta 10 ya kamata ya yi haya; mallaka tana biya ne kawai idan taraktar ta kuma yi aiki a gonakin makwabta. Ku kuma auna abin da lissafi bai nuna ba: mallaka tana nufin kuna huɗa a kan lokaci, haya kuma tana nufin babu bashi kuma babu gyara. Haya-saye (lease) da tsarin biya a hankali (pay-as-you-go) wasu zaɓuɓɓuka ne; ku karanta kowace yarjejeniya gaba ɗaya, ku tambayi mai ba da shawara da kuka amince da shi."
          ],
          steps: ["Depreciation a shekara = (farashi - darajar a ƙarshe) / shekarun amfani.", "Ku ƙara kuɗin ruwa, inshora da rumfa: waɗannan su ne kuɗaɗe masu tsayawa a shekara.", "Ku ƙara man fetur, man inji, gyara da direba a kowace hekta: kuɗin sarrafawa.", "Ajiya a kowace hekta = kuɗin haya - kuɗin sarrafawa.", "Yankin break-even = kuɗaɗe masu tsayawa / ajiya a kowace hekta.", "Ku kwatanta da hektocinku ku yanke shawara; ku lura da lokaci da haɗari."],
          words: [["Depreciation (raguwar daraja)", "darajar da inji ke rasawa kowace shekara yayin da yake tsufa."], ["Kuɗaɗe masu tsayawa (fixed costs)", "kuɗaɗen da kuke biya kowace shekara ko inji ya yi aiki ko bai yi ba."], ["Yankin break-even", "yawan hekta a shekara da mallaka ke cin kuɗi daidai da haya."]],
          slides: [
            { title: "Kuɗaɗen mallaka", bullets: ["Masu tsayawa: depreciation, kuɗin ruwa, inshora, rumfa", "Sarrafawa a kowace hekta: man fetur, man inji, gyara, direba", "Haya: kuɗin haya ɗaya a kowace hekta"] },
            { title: "Misali: tarakta a Najeriya", bullets: ["Depreciation (30M - 6M) / 10 = NGN 2.4M a shekara", "Kuɗaɗe masu tsayawa gaba ɗaya NGN 4.8M a shekara", "Sarrafawa NGN 25,000 a kowace ha; haya NGN 60,000 a kowace ha"] },
            { title: "Yankin break-even", bullets: ["Ajiya a kowace ha: 60,000 - 25,000 = 35,000", "4,800,000 / 35,000 = kusan ha 137 a shekara", "Gona mai ha 10: haya. Misalai ne kawai"] },
            { title: "Abin da ya wuce lissafi", bullets: ["Mallaka: kuna huɗa a kan lokaci", "Haya: babu bashi, babu gyara", "Haya-saye da bashi: ku karanta duka, ku tambayi mai shawara"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Ku samo farashin gaske na inji ɗaya da kuke tunani a kai (farashi, tsawon rayuwarsa da darajarsa a ƙarshe, kuɗin sarrafawa da kuɗin haya a yankinku). Ku lissafa kuɗaɗensa masu tsayawa a shekara, ajiya a kowace hekta da yankin break-even, ku rubuta ko ya kamata ku yi haya ko ku saya.",
          youCanNow: "kwatanta kuɗin mallaka da na hayar inji, da nemo yankin break-even.",
          quickCheck: [
            { objective: "O2", q: "Injin ɓara yana da farashin GHS 20,000, kuma darajarsa GHS 4,000 ce bayan shekaru 8. Mene ne depreciation ɗinsa a shekara?", options: ["GHS 1,500", "GHS 2,500", "GHS 2,000", "GHS 3,000"], answer: 2, why: "(20,000 - 4,000) / 8 = 2,000 a shekara." },
            { objective: "O2", q: "Kuɗaɗe masu tsayawa KES 300,000 ne a shekara, kuma mallaka tana ajiye KES 6,000 a kowace hekta. Mene ne yankin break-even?", options: ["Hekta 30", "Hekta 40", "Hekta 60", "Hekta 50"], answer: 3, why: "300,000 / 6,000 = hekta 50 a shekara." }
          ]
        },
        {
          title: "Hayar tarakta da hidimomin manhaja",
          objectives: ["O3"],
          minutes: 5,
          goal: "Yi odar hidimar haya ku duba aikin kafin ku biya.",
          text: [
            "Kuna iya hayar injuna daga makwabci ko mai tarakta, ƙungiyar haɗin gwiwa ko ƙungiyar manoma, cibiyar haya ta gwamnati ko ta 'yan kasuwa, ko hidimar manhaja. Hello Tractor misali ɗaya ne: manoma suna yin odar tarakta ta manhajarsa ta waya ko ta shafin intanet ko ta wakilan oda (masu ba da shawara kan noma da wakilan fili da ke yin oda a madadin manoma), kuma masu tarakta suna amfani da shi don bin diddigin taraktocinsu da man fetur ta GPS. Yana kuma ba da tsarin biya a hankali (pay-as-you-go) don taimakon mutane su mallaki tarakta. Kamfanin ya ce yana aiki a ƙasashen Afirka fiye da 20, har da Najeriya; ku duba abin da ke akwai a yankinku.",
            "Taraktoci suna fara zuwa inda akwai aiki mai yawa a wuri ɗaya. Yin oda tare da makwabta, don tarakta ta yi gonaki da yawa a tafiya ɗaya, yana ƙara yiwuwar ta zo a kan lokaci.",
            "Kafin a fara aiki, ku yarda a rubuce ko ta saƙo kan: farashi a kowace eka ko hekta, yadda za a auna yankin, rana, zurfi da irin aikin, da wanda zai biya man fetur. Ku auna gonar da kanku, da tef ko manhajar GPS ta waya. Bayan aikin, ku duba shi: zurfi daidai, babu layin da aka tsallake, an gama gonar duka. Ku biya ne kawai bayan dubawa, ta manhajar hukuma, kuɗin waya (mobile money) ko da rasiti. Kada ku taɓa biyan baƙo kuɗi tun kafin aiki a wajen manhajar hukuma, kuma kada ku taɓa bayyana lambar PIN ko code."
          ],
          steps: ["Ku zaɓi hidima: makwabci, ƙungiya, cibiyar haya ko manhaja (misali Hello Tractor).", "Ku yi oda da wuri, tare da makwabta idan za ku iya.", "Ku yarda kan farashi, yadda za a auna yanki, rana, zurfi da man fetur tun kafin aiki.", "Ku auna gonar da kanku.", "Ku duba aikin: zurfi, babu layin da aka tsallake, gonar duka.", "Ku biya bayan dubawa; ku karɓi rasiti ko bayanan manhaja; kada ku taɓa bayyana PIN."],
          words: [["Wakilin oda (booking agent)", "mutumin da ke yin odar hidimar inji a madadin manoma, sau da yawa ta manhaja."], ["Biya a hankali (pay-as-you-go, PAYG)", "biyan wani abu kaɗan-kaɗan a tsawon lokaci yayin da kuke amfani da shi, har ku mallake shi."], ["Kuɗin haya", "farashin da hidimar ke karɓa, sau da yawa a kowace eka ko hekta."]],
          slides: [
            { title: "Inda za a yi haya", bullets: ["Makwabta, ƙungiyoyi, cibiyoyin haya", "Manhajoji kamar Hello Tractor: manhaja, shafin intanet ko wakilin oda", "Ku duba abin da ke aiki a yankinku"] },
            { title: "Samun tarakta a kan lokaci", bullets: ["Ku yi oda da wuri", "Ku yi oda tare da makwabta", "Gonaki da yawa a tafiya ɗaya"] },
            { title: "Ku yarda kafin aiki", bullets: ["Farashi a kowace eka ko hekta; yadda za a auna yanki", "Rana, zurfi, irin aiki, man fetur", "A rubuce ko ta saƙo"] },
            { title: "Ku duba, sannan ku biya", bullets: ["Ku auna gonar da kanku", "Zurfi daidai; babu layin da aka tsallake", "Ku biya ta manhaja, kuɗin waya ko da rasiti; babu PIN"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Ku nemo hidimomin haya biyu kusa da ku (mai tarakta, ƙungiya, cibiyar haya ko manhaja). Ku tambayi kowanne farashi a kowace hekta, yadda suke auna yanki, lokacin da za su iya zuwa, da yadda ake biya. Ku rubuta gajeren saƙon oda da ke bayyana dukkan sharuɗɗan.",
          youCanNow: "yin odar tarakta ko hidimar inji da sharuɗɗa a sarari, da duba aikin kafin ku biya.",
          quickCheck: [
            { objective: "O3", q: "Yaushe ya kamata ku biya kuɗin huɗar tarakta?", options: ["Bayan duba aikin da yankin, da rasiti ko bayanan manhaja", "Kafin taraktar ta iso, kuɗi a hannun duk wanda ya kira", "Rabi ga baƙo ta saƙon tes", "Ba za a taɓa biya ba"], answer: 0, why: "Dubawa da farko da karɓar shaida suna kare ku daga mummunan aiki da zamba." },
            { objective: "O3", q: "Ta yaya za ku ƙara yiwuwar taraktar haya ta zo a kan lokaci?", options: ["Ku yi oda a ƙurarren lokaci", "Ku yi oda ku kaɗai don ƙaramar gona", "Ku yi oda da wuri, tare da makwabta", "Ku biya baƙo ƙarin kuɗi tun da wuri"], answer: 2, why: "Gonaki da yawa a wuri ɗaya suna sa tafiyar ta amfani mai tarakta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Haya ko saye?",
        questions: [
          { objective: "O1", q: "Wane aiki ne yawanci inji ya FI ƘARANCIN biya a kansa?", options: ["Huɗar hekta 20 a kan lokaci", "Sussukar babban girbin shinkafa", "Aikin sa'a ɗaya sau ɗaya a shekara a ƙaramar gona", "Ɗaukar girbi zuwa kasuwa"], answer: 2, why: "Inji don ƙananan ayyuka da ba a cika yi ba yana cin kuɗi fiye da abin da yake ajiye." },
          { objective: "O1", q: "Wace tambaya ce ke duba lokaci?", options: ["Injin ja ne?", "Yin aikin a makare yana rage amfanin gona?", "Dillalin yana da kirki?", "Shekarun manomin nawa?"], answer: 1, why: "Lokaci yana nufin ko yin aiki a makare yana rage amfanin gona." },
          { objective: "O2", q: "Wanne ne kuɗi mai tsayawa na mallakar tarakta?", options: ["Inshora", "Man fetur a kowace hekta", "Albashin direba a kowace hekta", "Man inji a kowace sa'a"], answer: 0, why: "Ana biyan inshora kowace shekara ko taraktar ta yi aiki ko ba ta yi ba." },
          { objective: "O2", q: "Yankin break-even hekta 137 ne a shekara, kuma kuna noma hekta 10. Me ya kamata ku yi?", options: ["Ku saya nan take", "Ku sayi taraktoci biyu", "Ku daina noma", "Ku yi haya, ko ku saya kawai idan za ku iya yi wa makwabta aiki"], answer: 3, why: "Idan kun yi nisa da break-even, mallaka tana cin kuɗi fiye da haya sai dai idan inji ya yi aiki a wasu wurare ma." },
          { objective: "O3", q: "Kafin taraktar haya ta fara aiki, me ya kamata ku yarda a kai?", options: ["Sunan direba kawai", "Farashi a kowace hekta, yadda za a auna yanki, rana, zurfi da man fetur", "Babu komai; ku amince da su", "Lambar PIN ta kuɗin wayarku"], answer: 1, why: "Sharuɗɗa a sarari suna hana jayayya da mummunan aiki; ba a taɓa bayyana PIN." }
        ]
      }
    },
    {
      name: "Babi na 2: Sarrafa injuna da kasuwancin hidima",
      lessons: [
        {
          title: "Ƙananan injuna don ƙananan manoma",
          objectives: ["O4"],
          minutes: 5,
          goal: "Zaɓi ƙaramin inji da ya dace da aikinku da yankinku.",
          text: [
            "Ba kowace gona ce ke buƙatar tarakta mai ƙafa huɗu ba. Taraktar ƙafa biyu (power tiller) tana iya huɗa, juya ƙasa, jan ruwa da jan tirela a ƙananan gonaki. Injin ɓarar masara ko injin sussuka na amfanin gona iri-iri (don shinkafa, dawa, gero, wake ko waken soya) yana ajiye kwanakin aiki kuma yana rage hatsin da ke ɓacewa. Injin feshi na goyo mai inji ko mistblower yana rufe fili fiye da injin feshi na hannu. Wasu misalai su ne injin goge rogo, injin girbin shinkafa da injin yanka ciyawar dabbobi.",
            "Kafin saye, ku duba: Akwai isasshen aiki, a gonarku da ta makwabtanku, da zai sa ya yi ta aiki? Makaniki na kusa zai iya gyara shi, kuma ana sayar da kayan gyara kusa da ku? Dillalin yana koya muku kuma yana ba da garanti? Ana iya kai shi daga gona zuwa gona? Mutanen da za su yi amfani da shi, har da mata da matasa, za su iya sarrafa shi lafiya? FAO ta wallafa jerin injunan da suka dace da manoma mata.",
            "Injin feshi: ku yi amfani da magungunan kashe ƙwari da aka yi wa rajista a ƙasarku kawai, kamar yadda alamar kwalbar ta ce, tare da kayan kariya. A Kenya ku duba jerin Pest Control Products Board; a Najeriya, NAFDAC. Injin feshi mai inji yana fitar da magani mai yawa da sauri, don haka ku daidaita shi (calibrate) kamar yadda littafin umarninsa ya ce kafin kowane lokacin noma."
          ],
          steps: ["Ku faɗi aikin da hekta ko tan nawa a shekara.", "Ku zaɓi irin injin da ya dace da wannan aiki.", "Ku duba kayan gyara da makaniki kusa da ku.", "Ku tambayi dillali game da horo da garanti.", "Ku duba ana iya ɗaukar shi, kuma direbobinku za su iya amfani da shi lafiya.", "Injin feshi: magungunan da aka yi wa rajista kawai, alamar kwalba da kayan kariya."],
          words: [["Taraktar ƙafa biyu (two-wheel tractor)", "ƙaramar tarakta da ake bi a baya ana tura ta, wadda ake kira power tiller, mai jan kayan aiki da tuƙa famfo."], ["Injin sussuka (thresher)", "injin da ke raba hatsi da kara."], ["Daidaitawa (calibrate)", "saita injin feshi don ya fitar da daidai yawan magani, kamar yadda littafin umarninsa da alamar maganin suka ce."]],
          slides: [
            { title: "Ƙananan injuna", bullets: ["Taraktar ƙafa biyu: huɗa, famfo, tirela", "Injin ɓarar masara; injin sussuka na amfanin gona iri-iri", "Injin feshi mai inji; injin goge rogo; injin yanka ciyawa"] },
            { title: "Kafin saye", bullets: ["Akwai isasshen aiki da zai sa ya yi ta aiki?", "Kayan gyara da makaniki a kusa?", "Horo, garanti, sauƙin ɗauka?"] },
            { title: "Wa zai yi amfani da shi?", bullets: ["Lafiya ga direbobinku", "Har da mata da matasa", "Jerin FAO na injunan da suka dace da manoma mata"] },
            { title: "Injin feshi", bullets: ["Magungunan da aka yi wa rajista kawai, kamar yadda alamar ta ce", "Kenya: jerin PCPB. Najeriya: NAFDAC", "Kayan kariya; ku daidaita shi da farko"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Ku zaɓi aiki ɗaya daga Darasi na 1. Ku zaɓi ƙaramin inji don shi, ku ziyarci ko ku kira dillali. Ku tambayi farashi, inda kayan gyara da gyaran suke, wane horo da garanti suke bayarwa, da aikin da zai iya yi a yini ɗaya. Ku rubuta amsoshin.",
          youCanNow: "zaɓar ƙaramin inji da ya dace da aikinku, yankinku da mutanen da za su yi amfani da shi.",
          quickCheck: [
            { objective: "O4", q: "Wane inji ne ya dace da huɗa da jan ruwa a ƙananan gonaki?", options: ["Injin girbi babba (combine harvester)", "Taraktar ƙafa biyu (power tiller)", "Injin ɓarar masara", "Injin yanka ciyawa"], answer: 1, why: "Power tiller tana huɗa ƙananan gonaki kuma tana iya tuƙa famfo." },
            { objective: "O4", q: "Injin ɓara mafi arha ba shi da kayan gyara ko makaniki cikin kilomita 200. Mene ne haɗarin?", options: ["Babu; injuna ba sa lalacewa", "Zai yi ɓara da sauri sosai", "Idan ya lalace, zai iya zama ba aiki na makonni", "Zai sha man fetur kaɗan sosai"], answer: 2, why: "Inji da ba shi da kayan gyara ko gyara a kusa zai iya tsayawa lokacin da kuka fi buƙatarsa." }
          ]
        },
        {
          title: "Tsaro da littafin kulawa",
          objectives: ["O5"],
          minutes: 6,
          goal: "Sarrafa inji lafiya ku ajiye littafin kulawarsa.",
          text: [
            "Injuna suna iya kisa ko naƙasa mutum cikin daƙiƙoƙi. Juyewar tarakta, faɗuwar mutane ƙarƙashin tayoyi, da kamawar tufafi a sandunan da ke juyawa suna cikin abubuwan da suka fi kashe mutane a gona. ILO tana wallafa ka'idojin amfani da tarakta lafiya. Manyan dokoki: manya da aka horar kawai ne ke sarrafa injuna; babu yara kusa da injunan da ke aiki; babu fasinja a kan tarakta ko kayan aikinta; ku yi amfani da kariyar juyewa da bel ɗin kujera idan akwai; ku tafi a hankali kuma a miƙe a kan gangare kuma ku nisanci ramuka; ku bar dukkan murfin kariya a wurinsu, musamman a kan sandar PTO (power take-off); kuma ku sa tufafi masu matsewa, ku ɗaure gashi.",
            "Injin sussuka da injin ɓara: kada ku taɓa saka hannu a bakin da ake zuba amfanin gona ko a cikin toshewa. Ku kashe inji ku jira dukkan sassansa su tsaya kafin ku share shi. Ku kare kunnuwa da huhu daga hayaniya da ƙura. Ku zuba man fetur ne kawai idan inji a kashe yake kuma ya huce, ba tare da shan taba ba. Ku ajiye akwatin agajin gaggawa da waya a kusa.",
            "Injin da ake kula da shi yana daɗewa kuma ba ya yawan lalacewa a lokacin aiki mai yawa. Ku yi binciken yau da kullum kafin aiki: man inji, man fetur, ruwa ko coolant, matatar iska, tayoyi, ƙusoshi da goro marasa matsewa, da wuraren saka maiko. Ku yi masa gyaran lokaci-lokaci (service) bisa sa'o'in da ke kan mitarsa kamar yadda littafin umarninsa ya ce. Ku ajiye littafin kulawa (logbook) mai: rana, sa'o'i, aiki da hekta ko tan, man fetur, gyara da kayan gyara, kuɗi, da sunan direba. Littafin yana nuna ainihin kuɗin sarrafawa a kowace hekta."
          ],
          steps: ["Direba babba da aka horar kawai; babu yara, babu fasinja.", "Murfin kariya a wurinsu, kariyar juyewa da bel ɗin kujera ana amfani da su idan akwai.", "Ku tafi a hankali a gangare; ku nisanci ramuka.", "Ku kashe inji ku jira kafin ku share kowace toshewa.", "Binciken yau da kullum: man inji, man fetur, coolant, matatar iska, tayoyi, ƙusoshi, maiko.", "Ku rubuta aikin kowace rana, man fetur, gyara da kuɗaɗe a littafin kulawa."],
          words: [["Sandar PTO (power take-off)", "sandar da ke juyawa a tarakta mai tuƙa kayan aiki; tana iya kama tufafi ta kashe mutum."], ["Kariyar juyewa (roll-over protection)", "firam a saman kujerar direba da ke kare shi idan taraktar ta juye."], ["Littafin kulawa (logbook)", "littafin da kuke rubuta kowane aiki, man fetur, gyara da kuɗin inji."]],
          slides: [
            { title: "Mutane da farko", bullets: ["Manya da aka horar kawai; babu yara a kusa", "Babu fasinja", "Kariyar juyewa da bel ɗin kujera"] },
            { title: "Wuraren haɗari", bullets: ["Gangare da ramuka: ku tafi a hankali", "Sandar PTO: murfi a wurinsa; tufafi masu matsewa, gashi a ɗaure", "Toshewa: ku kashe inji, ku jira, sannan ku share"] },
            { title: "Binciken yau da kullum", bullets: ["Man inji, man fetur, coolant, matatar iska", "Tayoyi, ƙusoshi da goro, maiko", "Service bisa sa'o'i, kamar yadda littafin umarni ya ce"] },
            { title: "Littafin kulawa", bullets: ["Rana, sa'o'i, aiki, hekta ko tan", "Man fetur, gyara, kayan gyara, kuɗi, direba", "Yana nuna ainihin kuɗi a kowace hekta"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Ku yi jerin binciken tsaro mai shafi ɗaya don inji ɗaya da kuke amfani da shi ko kuke hayarsa, da shafin littafin kulawa mai layuka don rana, sa'o'i, aiki, hekta ko tan, man fetur, gyara da kayan gyara, kuɗi, da direba. Ku cike layi ɗaya daga aiki na gaske ko na misali.",
          youCanNow: "sarrafa inji da manyan dokokin tsaro, da ajiye littafin kulawa da ke nuna ainihin kuɗin sarrafa shi.",
          quickCheck: [
            { objective: "O5", q: "Injin sussuka ya toshe. Me za ku yi?", options: ["Ku tura amfanin gonar da hannu yayin da yake aiki", "Ku nemi yaro ya ciro shi", "Ku shura injin", "Ku kashe inji, ku jira dukkan sassansa su tsaya, sannan ku share shi"], answer: 3, why: "Sassan da ke motsi suna iya ɗaukar hannu cikin daƙiƙa ɗaya; ku share inji da ya tsaya kawai." },
            { objective: "O5", q: "Wanne ne ya kamata ya kasance a littafin kulawar inji?", options: ["Rana, sa'o'i, aiki, man fetur, gyara da kuɗi", "Lambar PIN ta kuɗin wayar direba", "Launin injin kawai", "Babu komai; tunawa ya isa"], answer: 0, why: "Waɗannan bayanai suna nuna ainihin kuɗin sarrafawa da lokacin da ya kamata a yi service." }
          ]
        },
        {
          title: "Fara kasuwancin hidimar hayar injuna",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta tsari mai shafi ɗaya don hidimar hayar inji.",
          text: [
            "Yawancin hidimomin haya manoma ne ke gudanar da su, waɗanda suka sayi inji don gonarsu sannan suke ba makwabta haya, don kuɗi ko don musayar wani aiki ko amfanin gona. Tsarin FAO da Tarayyar Afirka na amfani da injuna a noma a Afirka yana ganin matasa masu gudanar da hidimomin haya a matsayin babbar hanyar kawo injuna ga ƙananan manoma. FAO tana kuma wallafa littafin horo kan hidimomin haya a matsayin kasuwanci.",
            "Tsari mai shafi ɗaya yana amsa: Waɗanne hidimomi, a waɗanne lokuta (huɗa, ɓara, sussuka, ɗaukar kaya, jan ruwa)? Su wane ne abokan ciniki, kuma hekta ko tan nawa gaba ɗaya? Wane farashi, kuma yaya yake idan aka kwatanta da wasu hidimomi? Mene ne kuɗaɗen (masu tsayawa a shekara da na sarrafawa a kowace hekta, daga Darasi na 2 da na 5)? Mene ne break-even? Ta yaya za ku karɓi oda da biya (kuɗin gaba, kuɗin waya, rasiti)? Wane ne direba, kuma an horar da shi? Mene ne haɗurra: lalacewa a lokacin aiki mai yawa, aikin da ba a biya ba, haɗari, sata? Ta yaya za ku rage su (kulawa, sharuɗɗa a rubuce, inshora, na'urar GPS ta bin diddigi)?",
            "Misali don hidimar power tiller a Senegal ko Burkina Faso (duk adadin misali ne kawai): kuɗaɗe masu tsayawa XOF 600,000 a shekara, kuɗin sarrafawa XOF 15,000 a kowace hekta, farashi XOF 35,000 a kowace hekta. Break-even = 600,000 / (35,000 - 15,000) = hekta 30. Idan an yi odar hekta 50, riba = 50 x 20,000 - 600,000 = XOF 400,000. Ku haɗa gonakin da ke kusa da juna don rage tafiya, ku ƙara aikin bayan lokacin noma kamar ɓara da ɗaukar kaya. Hanyoyin samun kuɗi sun haɗa da bashi, haya-saye da tsarin biya a hankali: ku karanta kowace yarjejeniya gaba ɗaya, ku tambayi mai ba da shawara da kuka amince da shi."
          ],
          steps: ["Ku lissafa hidimominku da lokutansu.", "Ku lissafa abokan ciniki da jimillar hekta ko tan.", "Ku sa farashin da zai rufe kuɗi a kowace hekta tare da ƙarin riba; ku kwatanta da wasu.", "Ku lissafa break-even: kuɗaɗe masu tsayawa / (farashi - kuɗin sarrafawa a kowace hekta).", "Ku tsara oda, direba, biya da bayanai.", "Ku lissafa haɗurra da yadda za ku rage kowanne."],
          words: [["Hidimar haya (hire service)", "kasuwancin da ke yin aikin gona da injunansa ga wasu manoma, don kuɗi."], ["Ƙarin riba (margin)", "ɓangaren farashi da ya rage bayan kuɗaɗe."], ["Aikin bayan lokacin noma", "ayyukan da inji zai iya yi a wajen babban lokacin noma, kamar ɗaukar kaya ko ɓara."]],
          slides: [
            { title: "Hidimomin haya", bullets: ["Manoma suna yi wa makwabta aiki don kuɗi", "Babbar hanyar kawo injuna ga ƙananan manoma", "Littafin horo na FAO: hidimomin haya a matsayin kasuwanci"] },
            { title: "Tsari mai shafi ɗaya", bullets: ["Hidimomi, lokuta, abokan ciniki, hekta", "Farashi, kuɗaɗe, break-even", "Oda, direba, biya, haɗurra"] },
            { title: "Misali: power tiller (XOF)", bullets: ["Masu tsayawa 600,000; sarrafawa 15,000 a kowace ha; farashi 35,000", "Break-even 600,000 / 20,000 = ha 30", "Ha 50: riba XOF 400,000. Misalai ne kawai"] },
            { title: "Yadda zai yi aiki", bullets: ["Ku haɗa gonakin da ke kusa; ku rage tafiya", "Ku ƙara aikin bayan lokacin noma", "Bashi da haya-saye: ku karanta duka, ku tambayi mai shawara"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Aikin ƙarshe: ku yi takardar shawarar haya ko saye don inji ɗaya da aiki ɗaya. Idan mallaka tana biya ne kawai da aikin makwabta, ku ƙara tsarin hidimar haya mai shafi ɗaya: hidimomi, abokan ciniki da hekta, farashi, kuɗaɗe, break-even, oda da biya, da manyan haɗurra.",
          youCanNow: "tsara hidimar hayar inji da farashi, kuɗaɗe, break-even da haɗurra.",
          quickCheck: [
            { objective: "O6", q: "Kuɗaɗe masu tsayawa XOF 400,000 ne a shekara, kuɗin sarrafawa XOF 10,000 a kowace hekta, farashi kuma XOF 30,000 a kowace hekta. Mene ne yankin break-even?", options: ["Hekta 10", "Hekta 13", "Hekta 40", "Hekta 20"], answer: 3, why: "400,000 / (30,000 - 10,000) = hekta 20." },
            { objective: "O6", q: "Wane mataki ne ke rage kuɗin tafiyar hidimar hayar tarakta?", options: ["Haɗa odar gonakin da ke kusa da juna", "Karɓar ayyuka masu nisa da juna a rana ɗaya", "Ƙin karɓar ƙananan gonaki", "Rashin tsara oda kwata-kwata"], answer: 0, why: "Yin gonakin da ke kusa tare yana ajiye man fetur da lokaci a hanya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sarrafa injuna da kasuwancin hidima",
        questions: [
          { objective: "O4", q: "Kafin sayen ƙaramin inji, wane bincike ne ya fi muhimmanci don ya ci gaba da aiki?", options: ["Launinsa", "Kayan gyara da makaniki kusa da ku", "Abin da makwabci ya biya", "Alamar kamfaninsa"], answer: 1, why: "Idan babu kayan gyara da gyara a kusa, inji da ya lalace zai tsaya ba aiki." },
          { objective: "O4", q: "Za ku yi amfani da injin feshi mai inji. Wanne ne daidai?", options: ["Kowane maganin kashe ƙwari daga kasuwa", "Ku haɗa magunguna biyu don ajiye lokaci", "Magungunan da aka yi wa rajista kawai, kamar yadda alamar ta ce, da kayan kariya", "Ku yi feshi ba tare da daidaita shi ba"], answer: 2, why: "Magungunan da aka yi wa rajista kawai, da aka yi amfani da su kamar yadda alamar ta ce, ne masu lafiya kuma bisa doka." },
          { objective: "O5", q: "Wace ce dokar tsaron tarakta?", options: ["Babu fasinja a kan tarakta ko kayan aikinta", "Yara za su iya hawa idan sun yi hankali", "Ku cire murfin PTO don ku yi aiki da sauri", "Ku tuƙa da sauri a kan gangare"], answer: 0, why: "Fasinjoji suna faɗuwa ƙarƙashin tayoyi; wannan yana cikin abubuwan da suka fi kashe mutane a gona." },
          { objective: "O5", q: "Me yasa za a ajiye littafin kulawar inji?", options: ["Don banki ne kawai", "Don nuna launin injin", "Don sa direba ya yi aiki a hankali", "Don ganin ainihin kuɗi a kowace hekta da lokacin da ya kamata a yi service"], answer: 3, why: "Rubuta aiki, man fetur da gyara yana nuna ainihin kuɗaɗe da lokutan service." },
          { objective: "O6", q: "Wanne ne ya kamata ya kasance a tsarin hidimar haya?", options: ["Farashin injin kawai", "Hidimomi, abokan ciniki, farashi, kuɗaɗe, break-even da haɗurra", "Lambar PIN ta mai shi", "Tambari (logo) kawai"], answer: 1, why: "Tsari yana nuna ko hidimar tana kawo kuɗi fiye da abin da take ci, da yadda za a magance haɗurra." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Injunan Gona da Hidimomin Haya",
    questions: [
      { objective: "O1", q: "Amfani da injuna a noma (mechanization) ya haɗa da:", options: ["Manyan taraktoci kawai", "Injunan da aka shigo da su kawai", "Kayan aiki da injuna daga ingantattun kayan aikin hannu zuwa taraktoci", "Jirage marasa matuƙi (drones) kawai"], answer: 2, why: "FAO tana ƙirga kowane mataki, daga kayan aikin hannu zuwa injuna masu inji." },
      { objective: "O1", q: "Wane ne ƙwaƙƙwaran dalilin yin sussuka da inji?", options: ["Yana yin cikin sa'o'i abin da mutane da yawa ke yi cikin kwanaki, da ƙarancin hatsin da ke ɓacewa", "Injuna suna kama da na zamani", "Sussuka da hannu haramun ne", "Makwabta suna da injuna"], answer: 0, why: "Lokacin da aka ajiye da ƙarancin asara suna sa sussuka ta zama aiki mai kyau da inji." },
      { objective: "O1", q: "Ciyawar hekta 1 da hannu tana cin KES 6,000, hidimar inji kuma KES 9,000. Bisa kuɗi kaɗai:", options: ["Injin ya fi arha", "Daidai suke", "Ba za a iya kwatanta su ba", "Ciyawa da hannu ta fi arha"], answer: 3, why: "KES 6,000 ya gaza KES 9,000, don haka injin ba ya biya bisa kuɗi kaɗai." },
      { objective: "O2", q: "Depreciation shi ne:", options: ["Man fetur da inji ke sha", "Darajar da inji ke rasawa kowace shekara", "Kuɗin haya", "Albashin direba"], answer: 1, why: "Depreciation yana raba asarar daraja a tsawon rayuwar inji." },
      { objective: "O2", q: "Wanne ne kuɗin sarrafawa a kowace hekta?", options: ["Inshora", "Rumfa", "Man fetur", "Kuɗin ruwan bashi a shekara"], answer: 2, why: "Man fetur yana ƙaruwa da kowace hekta da aka yi aiki; sauran masu tsayawa ne." },
      { objective: "O2", q: "Kuɗaɗe masu tsayawa NGN 2,000,000 a shekara; kuɗin haya NGN 50,000 a kowace ha; kuɗin sarrafawa NGN 25,000 a kowace ha. Yankin break-even?", options: ["Hekta 80", "Hekta 40", "Hekta 50", "Hekta 100"], answer: 0, why: "2,000,000 / (50,000 - 25,000) = hekta 80." },
      { objective: "O2", q: "Wane amfanin mallaka ne lissafin kuɗi ke yawan rasawa?", options: ["Biyan ƙarin kuɗin ruwa", "Huɗa a kan lokaci ba tare da jiran taraktar haya ba", "Inshora mafi tsada", "Ƙarin gyare-gyare"], answer: 1, why: "Lokaci yana da daraja ko da haya ta fi arha a takarda." },
      { objective: "O3", q: "Hello Tractor yana bar manoma su yi odar tarakta:", options: ["Ta gidan waya kawai", "A banki kawai", "Da kansu a masana'anta kawai", "Ta manhajar waya, shafin intanet ko wakilan oda"], answer: 3, why: "Hello Tractor ya ce manoma suna yin oda ta manhajojinsa ko ta wakilan oda." },
      { objective: "O3", q: "Ta yaya ya kamata ku auna gona don aikin haya?", options: ["Ku amince da kiyasin direba", "Ku auna ta da kanku da tef ko manhajar GPS ta waya", "Ku ƙirga bishiyoyi", "Kada ku auna"], answer: 1, why: "Aunawa da kanku yana kare ku daga biyan yanki fiye da wanda aka yi aiki a kai." },
      { objective: "O3", q: "Wani mai kira ya ce shi wakilin tarakta ne, kuma yana neman cikakken biya tun da wuri ta kuɗin waya. Ku:", options: ["Ku biya nan take", "Ku aika PIN ɗinku", "Ku yi oda ta manhajar hukuma ko wakilin da kuka sani, ku biya bayan duba aikin", "Ku biya ninki biyu don tabbatarwa"], answer: 2, why: "Masu kira da ba a sani ba da ke neman biya tun da wuri zamba ce da aka saba gani." },
      { objective: "O4", q: "Injin sussuka na amfanin gona iri-iri yana iya sussukar:", options: ["Shinkafa, dawa, gero, wake ko waken soya", "Rogo kawai", "Kofi kawai", "Ciyawa kawai"], answer: 0, why: "Injin sussuka na amfanin gona iri-iri yana aiki da hatsi da wake da yawa." },
      { objective: "O4", q: "Wanne BA babban abin dubawa ba ne kafin sayen ƙaramin inji?", options: ["Kayan gyara a kusa", "Horo da garanti daga dillali", "Isasshen aiki da zai sa ya yi ta aiki", "Launin fentinsa"], answer: 3, why: "Kayan gyara, horo da amfani ne ke ƙayyade daraja; launin fenti ba ya yi." },
      { objective: "O4", q: "A Kenya, jerin wace hukuma ne ke nuna magungunan kashe ƙwari da aka yi wa rajista don injin feshi?", options: ["Kenya Dairy Board", "Kenya Fisheries Service", "Pest Control Products Board", "Kenya Wildlife Service"], answer: 2, why: "Pest Control Products Board ce ke yi wa magungunan kashe ƙwari rajista a Kenya." },
      { objective: "O5", q: "Wane ne zai iya sarrafa tarakta?", options: ["Kowane yaro mai hankali", "Babba da aka horar", "Duk wanda ke da waya", "Fasinja"], answer: 1, why: "Manya da aka horar kawai ne ya kamata su sarrafa injuna." },
      { objective: "O5", q: "Me yasa murfin kariya dole ya kasance a kan sandar PTO?", options: ["Sandar da ke juyawa tana iya kama tufafi ta kashe mutum", "Yana sa taraktar ta yi sauri", "Ado ne kawai", "Yana ajiye man fetur"], answer: 0, why: "Kamawa a sandar PTO yana cikin abubuwan da suka fi jawo mummunan rauni da mutuwa a gona." },
      { objective: "O5", q: "Yaushe ya kamata ku zuba wa inji man fetur?", options: ["Yayin da yake aiki", "Yayin da kuke shan taba", "Kusa da wuta a buɗe", "Idan inji a kashe yake kuma ya huce, babu shan taba"], answer: 3, why: "Man fetur a kan inji mai zafi ko kusa da wuta zai iya kama wuta." },
      { objective: "O5", q: "Sau nawa ya kamata ku yi binciken farko (man inji, man fetur, coolant, tayoyi, ƙusoshi)?", options: ["Sau ɗaya a shekara", "Sai ya lalace kawai", "Kowace rana kafin aiki", "Ba za a taɓa yi ba"], answer: 2, why: "Binciken yau da kullum yana gano ƙananan matsaloli kafin su tsayar da inji a lokacin aiki mai yawa." },
      { objective: "O6", q: "Kuɗaɗe masu tsayawa XOF 500,000 a shekara; kuɗin sarrafawa XOF 15,000 a kowace ha; farashi XOF 40,000 a kowace ha. Yankin break-even?", options: ["Hekta 12", "Hekta 20", "Hekta 25", "Hekta 33"], answer: 1, why: "500,000 / (40,000 - 15,000) = hekta 20." },
      { objective: "O6", q: "Wanne ne ke rage haɗarin lalacewa a lokacin aiki mai yawa?", options: ["Tsallake kulawa don ajiye kuɗi", "Ba da aron inji ba tare da littafin kulawa ba", "Kulawa akai-akai da ajiye kayan gyara", "Yin aiki dare da rana ba tare da bincike ba"], answer: 2, why: "Kulawa da kayan gyara suna sa inji ya ci gaba da aiki lokacin da abokan ciniki suka fi buƙatarsa." },
      { objective: "O6", q: "Kafin sa hannu a yarjejeniyar haya-saye ko bashi don inji, ya kamata ku:", options: ["Karanta yarjejeniyar gaba ɗaya ku tambayi mai ba da shawara da kuka amince da shi", "Sa hannu da sauri kafin tayin ya ƙare", "Karanta shafin farko kawai", "Bar dillali ya cike muku ita"], answer: 0, why: "Yarjejeniyoyi suna da kuɗaɗe da haɗurra; ku karanta su gaba ɗaya ku nemi shawara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Zaɓin aiki", objective: "O1", notYet: "Ba a ba da dalilin yin aikin da inji ba.", meets: "An zaɓi aikin da dalilai (lokaci, ma'aikata, asara ko yawan aiki) da kuɗin yin sa da hannu.", exceeds: "Ya kwatanta ayyuka biyu ko fiye, kuma ya bayyana dalilin da wannan ya fi biya." },
      { name: "Kwatanta kuɗi", objective: "O2", notYet: "Babu kuɗaɗe masu tsayawa ko na sarrafawa, ko lissafin ba daidai ba ne.", meets: "Depreciation, kuɗaɗe masu tsayawa, kuɗin sarrafawa, kuɗin haya da yankin break-even daidai ne, da shawara a sarari.", exceeds: "Ya yi amfani da farashin gaske, kuma ya lura da lokaci da haɗari kusa da lissafin." },
      { name: "Binciken inji da haya", objective: "O4", notYet: "Babu bincike kan kayan gyara, gyara ko hidimar haya.", meets: "Ya lissafa binciken kayan gyara, makaniki, horo da garanti, ko na sharuɗɗan hidimar haya.", exceeds: "Ya tambayi dillali ko hidimar haya, kuma ya rubuta amsoshin." },
      { name: "Tsaro da kulawa", objective: "O5", notYet: "Babu dokokin tsaro ko babu littafin kulawa.", meets: "Manyan dokokin tsaro da littafin kulawa mai rana, sa'o'i, aiki, man fetur, gyara da kuɗi.", exceeds: "Ya faɗi wanda aka horar don sarrafawa, da lokacin service na farko." },
      { name: "Shawara da tsarin kasuwanci", objective: "O6", notYet: "Babu shawara, ko shawarar saye ba tare da tsarin sa inji ya yi ta aiki ba.", meets: "Shawara a sarari; idan za a saya, tsarin haya mai shafi ɗaya da hidimomi, abokan ciniki, farashi, kuɗaɗe, break-even da haɗurra.", exceeds: "Ya nuna tsarin yana aiki ko da an rage hekta da aka yi oda da 20%, ko ya faɗi abin da zai canja." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yanke shawarar haya ko saye ta amfani da takardar shawara cikin watanni 3 (binciken biyo baya)",
      "Masu koyo da suka ce sun shuka a kan lokaci saboda injin da suka yi oda ko suka mallaka a lokacin noma na gaba",
      "Masu koyo da suka fara ko suka faɗaɗa hidimar haya, da hektocin da suke yi wa aiki, cikin watanni 12",
      "Raunukan da suka shafi inji da masu koyo suka bayar da rahoto (manufa: babu ko ɗaya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, ko waya mai manhajar spreadsheet ko ta rubutu",
      "Na'urar lissafi (na'urar lissafin waya ma ta isa)",
      "Tef ɗin aunawa ko waya mai manhajar auna yanki ta GPS",
      "Farashin gaske daga dillali da hidimomin haya na yankin, da aka tattara a lokacin kwas ɗin",
      "Kusan minti 75 gaba ɗaya, a gajerun zama, da ziyara zuwa inji"
    ],
    facilitatorNotes: [
      "Ku shirya nuni tare da hidimar haya ko dillali na yankin: binciken yau da kullum, murfin kariya, da yadda ake share injin ɓara ko sussuka da ya toshe lafiya bayan an kashe inji.",
      "Ku maye gurbin farashin misali da farashin yankinku kafin Darasi na 2 da na 6, kuma ku faɗa a sarari cewa misalai ne.",
      "Ku bayyana bashi, haya-saye da tsarin biya a hankali da haɗarinsu, amma kada ku ba da shawarar zuba jari; ku tura masu koyo zuwa mai ba da shawara da suka amince da shi.",
      "Ku nisantar da yara daga duk nunin injuna.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku haɗa ƙungiyoyin da ke son raba injuna da kwas ɗin \"Haɗa Kan Al'umma: Raba Injiniyoyi da Ciniki Don Kayan Noma\"."
    ]
  }
};
