"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-farm-accounting-investment.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const CBK = { name: "Babban Bankin Kenya (Central Bank of Kenya): bankuna, bankunan ƙananan bashi da masu ba da bashi ta intanet da ke da lasisi", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Babban Bankin Najeriya (CBN): bankuna da bankunan ƙananan bashi da ke da lasisi", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Babban Bankin Ƙasashen Yammacin Afirka (dokokin bankuna da ƙananan bashi a ƙasashen XOF)", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment-ha",
  lang: "ha",
  translationOf: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Lissafin Kuɗin Gona da Sarrafa Jari",
  skills: "Raba kuɗaɗe masu tsayawa da masu canjawa, Lissafin kuɗin samar da kilo, buhu ko lita ɗaya, Ajiye littafin kashe kuɗi, Tsara kuɗi wata-wata, Gano farashin da ba riba ba faɗuwa, Auna jari da lokacin dawowar kuɗi da ribar jari mai sauƙi",
  outcome: "gane ainihin kuɗin da kuke kashewa don samar da kilo, buhu ko lita ɗaya, bibiyar kowane kashe kuɗi, tsara kuɗinku wata-wata, gano mafi ƙarancin farashin da za ku iya sayarwa ba tare da faɗuwa ba, da auna ko jari kamar famfon hasken rana, gidan gilashi (greenhouse) ko ƙarin shanu zai dawo da kuɗinsa.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoman kasuwanci masu girma, manajojin gona, matasan 'yan kasuwar noma da jami'an faɗakarwar noma (extension workers) a Kenya, Najeriya, Ghana, Senegal, Cote d'Ivoire da sauran Afirka, waɗanda ke riga suna ajiye wasu bayanai kuma suke son yanke shawarwarin kuɗi masu kaifi.",
    "Yana ginuwa kan kwas ɗin \"Kasuwancin Noma da Sarrafa Gona\" (Agribusiness and Farm Management), wanda ke koyar da bayanai masu sauƙi da ribar kowane aiki (gross margin). A nan za ku ƙara zurfi. Babi na 1 game da sanin kuɗaɗenku ne: kuɗaɗe masu tsayawa da masu canjawa, kuɗin samar da raka'a ɗaya, da littafin kashe kuɗi. Babi na 2 game da tsari da zuba jari ne: tsarin kuɗi na wata-wata, farashin da ba riba ba faɗuwa (break-even), da auna jari da lokacin dawowar kuɗinsa da ribarsa mai sauƙi.",
    "Duk lambobin kuɗi misalai ne na ƙirƙira a KES, NGN, GHS da XOF don nuna hanyar; ku yi amfani da farashinku. Wannan kwas ba ya ba da shawarar zuba jari. Kafin babban saye ko bashi, ku kwatanta tayi, ku karanta kowace yarjejeniya gaba ɗaya, kuma ku yi magana da mai ba da shawara da kuka amince da shi, kamar ƙungiyar haɗin gwiwarku (cooperative), SACCO, jami'in faɗakarwar noma ko akanta. Kowane darasi yana ƙarewa da ɗan aikin gwadawa da gwaji mai tambayoyi 2, kowane babi da gwajin ilimi, kuma kwas ɗin da jarabawa mai tambayoyi 20."
  ],
  finalTask: "Ku yi takardar kuɗin gona da jari don aiki ɗaya a gonarku (ko gonar misali): jerin kuɗaɗensa masu tsayawa da masu canjawa na kaka ɗaya, kuɗin kowane kilo, buhu, lita ko ƙwai, bibiyar kashe kuɗi na wata ɗaya, tsarin kuɗi na watanni 12 da sauran kuɗi a kowane wata da watannin giɓi a yi musu alama, farashin break-even da yawan amfanin break-even idan aka kwatanta da farashin da kuke tsammani, da lokacin dawowar kuɗi da ribar jari mai sauƙi na jari ɗaya da kuke tunani a kai, tare da shawararku da dalilinta.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kasuwanci masu girma, manajojin gona, matasan 'yan kasuwar noma, shugabannin ƙungiyoyin haɗin gwiwa da jami'an faɗakarwar noma a Kenya, Najeriya, Ghana da Yammacin Afirka masu magana da Faransanci. Yawancinsu suna noman masara, rogo, shinkafa, wake, kayan lambu, kofi ko koko, ko suna kiwon shanun nono, awaki, aladu, kaji ko kifi.",
    startingPoint: "Suna iya ƙari, ragi, ninkawa da raba lambobi da na'urar lissafi ta waya. Da yawa suna ajiye wasu bayanai kuma sun san kusan abin da suke kashewa da samu; wasu sun yi darasin gross margin a \"Kasuwancin Noma da Sarrafa Gona\". Kaɗan ne suka san kuɗin kowane kilo ko lita, farashin break-even ɗinsu, ko yadda ake auna ko wani kayan aiki zai dawo da kuɗinsa.",
    gap: "Manoma sau da yawa suna sayarwa ƙasa da kuɗin da suka kashe wajen samarwa, kuɗi yana ƙare musu kafin girbi ko a shekara mai kyau, ko suna sayen kayan aiki da dabbobin da ba sa taɓa dawo da kuɗinsu. Sanin kuɗin kowace raka'a, break-even da lokacin dawowar kuɗi yana ba su damar ƙin farashi marasa kyau, tsara kuɗi da zuba jari mai riba, kuma yana ba masu ba da bashi da masu saye lambobin da za su amince da su.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar kuɗi",
      "Na'urori: na'urar lissafi ta waya mai sauƙi da littafin rubutu sun isa; manhajar spreadsheet a waya ba dole ba ce",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aikin gona",
      "Kuɗi: duk lambobi misalai ne; farashi, kuɗin ruwa da tallafi suna canjawa, kuma dole su fito daga yankin mai koyo",
      "Babu shawarar zuba jari: masu koyo suna kwatanta zaɓuɓɓuka kuma suna tambayar mai ba da shawara da suka amince da shi kafin manyan shawarwari"
    ],
    prerequisites: "Babu, amma \"Kasuwancin Noma da Sarrafa Gona\" (bayanai da gross margin) mataki ne na farko mai amfani."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin kuɗaɗen aiki ɗaya na kaka ɗaya da yawan amfaninsa", action: "raba kuɗaɗen zuwa masu tsayawa da masu canjawa da lissafin kuɗin samar da kilo, buhu, lita ko ƙwai ɗaya", standard: "kowane kuɗi a rukuninsa daidai, kuma kuɗin kowace raka'a daidai har zuwa cikakkiyar raka'ar kuɗi mafi kusa" },
    { id: "O2", condition: "Ta amfani da littafin rubutu ko spreadsheet a waya", action: "rubuta kowane kashe kuɗin gona na wata ɗaya da kwanan wata, rukuni da aiki, da haɗa jimilla bisa rukuni", standard: "ba tare da wata rana da aka tsallake ba, kuma jimilla ta yi daidai da bayanan kuɗin hannu da na kuɗin waya (mobile money)" },
    { id: "O3", condition: "Idan aka ba ku kuɗin da ake tsammanin shigowa da fita a kowane wata na shekara", action: "gina tsarin kuɗi na wata-wata da kuɗin farkon wata da na ƙarshen wata, da yi wa watannin giɓi alama", standard: "kowane kuɗin ƙarshen wata ya koma farkon wata na gaba, kuma akwai aƙalla mataki ɗaya da aka tsara don kowane watan giɓi" },
    { id: "O4", condition: "Idan aka ba ku jimillar kuɗaɗe, yawan amfanin da ake tsammani da farashin mai saye", action: "lissafin farashin break-even da yawan amfanin break-even, da yanke ko tayin ya rufe kuɗaɗenku", standard: "daidai har zuwa cikakkiyar raka'ar kuɗi ko ta amfani mafi kusa" },
    { id: "O5", condition: "Idan aka ba ku kuɗin wani jari da ƙarin kuɗin shiga da kuɗaɗen da ya kamata ya kawo", action: "lissafin lokacin dawowar kuɗinsa da ribar jari mai sauƙi, da rubuta shawara tare da dalilanku", standard: "lambobi daidai, kuma an duba aƙalla haɗari biyu (tsawon rayuwar kayan, kuɗin bashi ko raguwar amfani)" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sanin kuɗaɗenku",
      lessons: [
        {
          title: "Kuɗaɗe masu tsayawa da masu canjawa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Raba kuɗaɗen aiki ɗaya zuwa masu tsayawa da masu canjawa, har da kuɗin shekara na kayan aiki da gine-gine.",
          text: [
            "Kuɗaɗe masu canjawa suna hawa ko sauka da yawan abin da kuke samarwa: iri, taki, abincin dabbobi, ma'aikatan kwana-kwana, likitan dabbobi, buhuna, mai da sufuri. Idan kun shuka rabin gonar ko kun yi kiwon rabin tsuntsayen, waɗannan kuɗaɗe suna raguwa.",
            "Kuɗaɗe masu tsayawa suna kusan zama iri ɗaya ko nawa kuka samar a kakar: hayar ƙasa, albashin ma'aikaci na dindindin, lasisin ruwa, inshora, da lalacewar kayan aiki, famfuna, rumfuna da shinge. Wannan lalacewa ana kiranta depreciation (raguwar darajar kaya). Hanya mai sauƙi ta lissafinta: (farashin da aka biya - darajar da za ta rage a ƙarshe) / shekarun da zai ɗauka. Misali (lambobin ƙirƙira a shilling na Kenya): injin feshin magani na baya yana kai 6,000, zai ɗauki shekara 5 kuma ba zai rage da daraja ba a ƙarshe, don haka yana ci wa gonar 1,200 a shekara.",
            "Idan wani kayan aiki ko gini yana hidima ga ayyuka da yawa, ku raba kuɗinsa na shekara tsakaninsu, misali bisa ƙasa ko lokacin da kowanne ke amfani da shi. Ku ƙidaya aikin iyalinku ma, bisa ladan kwana na yankinku, don ku ga ainihin kuɗin lokacinku."
          ],
          steps: ["Ku zaɓi aiki ɗaya, kamar masara, kifin tilapia ko saniyar nono.", "Ku jera kowane kuɗi na kaka ɗaya ko shekara ɗaya.", "Ku yi wa kowanne alama V (mai canjawa: yana canjawa da yawan abin da kuke samarwa) ko F (mai tsayawa: yana zama iri ɗaya).", "Don kayan aiki, famfuna da gine-gine, ku lissafa depreciation: (farashi - darajar da ta rage) / shekarun rayuwa.", "Ku raba kuɗaɗe masu tsayawa tsakanin ayyukan da ke amfani da abu ɗaya."],
          words: [["Kuɗi mai canjawa (variable cost)", "kuɗin da ke hawa ko sauka da yawan abin da kuke samarwa, kamar iri ko abincin dabbobi."], ["Kuɗi mai tsayawa (fixed cost)", "kuɗin da ke kusan zama iri ɗaya ko nawa kuka samar a kakar, kamar hayar ƙasa."], ["Depreciation (raguwar darajar kaya)", "ɓangaren farashin kayan aiki ko gini da ake amfani da shi a kowace shekara yayin da yake lalacewa."], ["Aiki (enterprise)", "aiki ɗaya a gona, kamar masara, kiwon kaji ko shanun nono."]],
          slides: [
            { title: "Kuɗaɗe masu canjawa", bullets: ["Suna canjawa da yawan abin da kuke samarwa", "Iri, taki, abincin dabbobi, ma'aikatan kwana-kwana, likitan dabbobi, buhuna, mai", "Ku samar da ƙasa, za su ragu"] },
            { title: "Kuɗaɗe masu tsayawa", bullets: ["Suna kusan zama iri ɗaya ko nawa kuka samar", "Haya, albashin dindindin, lasisi, inshora", "Lalacewar kayan aiki da gine-gine"] },
            { title: "Depreciation", bullets: ["(Farashi - darajar da ta rage) / shekarun rayuwa", "Injin feshi 6,000 KES, shekara 5: 1,200 a shekara (misali)", "Ku raba shi tsakanin ayyukan da ke amfani da shi"] },
            { title: "Kada ku manta", bullets: ["Aikin iyali bisa ladan kwana na yankinku", "Ƙananan kuɗaɗe: buhuna, kuɗin kiran masu saye, sufuri"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya a gonarku. Ku jera aƙalla kuɗaɗe takwas daga kakar da ta gabata, ku yi wa kowanne alama V ko F, kuma ku lissafa depreciation na shekara na kayan aiki ko gini ɗaya da kuke amfani da shi.",
          youCanNow: "raba kuɗaɗen aiki zuwa masu tsayawa da masu canjawa, da lissafin kuɗin shekara na kayan aikinku da gine-ginenku.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan ne kuɗi mai canjawa a kiwon kaji?", options: ["Lalacewar gidan kaji ta shekara", "Hayar filin da gidan yake a kai", "Abincin tsuntsayen", "Albashin wata na ma'aikaci na dindindin"], answer: 2, why: "Abinci yana hawa da sauka da yawan tsuntsayen da kuke kiwo, don haka mai canjawa ne." },
            { objective: "O1", q: "Famfo yana kai 50,000, zai ɗauki shekara 10 kuma darajarsa za ta zama 0 a ƙarshe. Depreciation ɗinsa shi ne:", options: ["5,000 a shekara", "50,000 a shekara", "500 a shekara", "10,000 a shekara"], answer: 0, why: "(50,000 - 0) / shekara 10 = 5,000 a shekara." }
          ]
        },
        {
          title: "Kuɗin samar da kilo, buhu ko lita ɗaya",
          objectives: ["O1"],
          minutes: 6,
          goal: "Lissafa kuɗin samar da kilo, buhu, lita ko ƙwai ɗaya na aiki ɗaya.",
          text: [
            "Kuɗin kowace raka'a = jimillar kuɗi na lokacin / raka'o'in da aka samar a wannan lokaci. Jimillar kuɗi ita ce kuɗaɗe masu canjawa tare da rabon kuɗaɗe masu tsayawa na wannan aiki. Raka'a ita ce yadda kuke sayarwa: kilo na tumatir, buhun masara na kilo 100, litar nono, kwandon ƙwai, kilo na tilapia.",
            "Misali (lambobin ƙirƙira a shilling na Kenya), saniyar nono ɗaya na wata ɗaya: abinci 9,500, likitan dabbobi da hidimar barbara 1,000, aiki 3,000, rabon kuɗaɗe masu tsayawa (rumfa, injin yanka ciyawa, ruwa) 1,500. Jimilla 15,000. Saniyar ta ba da lita 300. Kuɗin kowace lita = 15,000 / 300 = shilling 50. Idan mai sayen nono ya biya ƙasa da 50, kowace lita tana faɗuwa.",
            "Misali (lambobin ƙirƙira a naira), hekta ɗaya ta masara a Najeriya: kuɗaɗe masu canjawa 600,000, rabon kuɗaɗe masu tsayawa 150,000, jimilla 750,000, girbi buhu 30 na kilo 100. Kuɗin kowane buhu = 750,000 / 30 = 25,000, wato naira 250 a kowane kilo. Ku lissafa shi kowace kaka: idan amfani ya ragu ko farashin kayan noma ya tashi, kuɗin kowace raka'a ma yana tashi."
          ],
          steps: ["Ku zaɓi raka'ar da kuke sayarwa da ita: kilo, buhu, lita, ƙwai ko kwando.", "Ku haɗa kuɗaɗe masu canjawa na lokacin.", "Ku ƙara rabon kuɗaɗe masu tsayawa na wannan aiki.", "Ku ƙidaya raka'o'in da aka samar a wannan lokaci.", "Kuɗin kowace raka'a = jimillar kuɗi / raka'o'in da aka samar.", "Ku kwatanta shi da farashin da masu saye ke biya."],
          words: [["Kuɗin kowace raka'a (cost per unit)", "abin da kuke kashewa don samar da kilo, buhu, lita ko ƙwai ɗaya: jimillar kuɗi raba raka'o'in da aka samar."], ["Raka'a (unit)", "yawan da kuke sayarwa da shi, kamar kilo, buhun kilo 100 ko lita."]],
          slides: [
            { title: "Dabarar lissafi", bullets: ["Kuɗin kowace raka'a = jimillar kuɗi / raka'o'in da aka samar", "Jimillar kuɗi = masu canjawa + rabon masu tsayawa", "Ku yi amfani da raka'ar da kuke sayarwa da ita"] },
            { title: "Saniyar nono, wata ɗaya (misali KES)", bullets: ["Abinci 9,500 + likitan dabbobi 1,000 + aiki 3,000 + masu tsayawa 1,500 = 15,000", "Lita 300: 15,000 / 300 = 50 a kowace lita", "Mai saye da ke biyan ƙasa da 50 yana nufin faɗuwa a kowace lita"] },
            { title: "Masara, hekta ɗaya (misali NGN)", bullets: ["Jimillar kuɗi 750,000; girbi buhu 30", "750,000 / 30 = 25,000 a kowane buhu = 250 a kowane kilo"] },
            { title: "Ku lissafa shi kowace kaka", bullets: ["Ƙarancin amfani = ƙarin kuɗin kowace raka'a", "Ƙarin farashin kayan noma = ƙarin kuɗin kowace raka'a"] }
          ],
          tryIt: "Ku yi amfani da kuɗaɗen Darasi na 1. Ku haɗa su, ku raba da raka'o'in da kuka samar, ku rubuta kuɗinku na kowane kilo, buhu, lita ko ƙwai. Sannan ku rubuta farashin ƙarshe da mai saye ya taya muku a gefensa.",
          youCanNow: "lissafin kuɗin samar da raka'a ɗaya na abin da kuke sayarwa da kwatanta shi da farashin da ake taya muku.",
          quickCheck: [
            { objective: "O1", q: "Jimillar kuɗin gonar tumatir 40,000 ne kuma ta ba da kilo 800. Nawa ne kuɗin kowane kilo?", options: ["800", "40", "500", "50"], answer: 3, why: "40,000 / kilo 800 = 50 a kowane kilo." },
            { objective: "O1", q: "Amfaninku ya ragu amma kuɗaɗenku suna nan iri ɗaya. Me zai faru da kuɗin kowace raka'a?", options: ["Zai zama iri ɗaya", "Zai tashi", "Zai sauka", "Zai zama sifili"], answer: 1, why: "Kuɗi ɗaya raba raka'o'i kaɗan yana ba da kuɗi mafi yawa ga kowace raka'a." }
          ]
        },
        {
          title: "Littafin kashe kuɗi da za ku iya ajiyewa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kafa littafin kashe kuɗi kuma ku rubuta kowane kashe kuɗin gona na wata ɗaya.",
          text: [
            "Littafin kashe kuɗi (expense tracker) jerin kowane biyan kuɗin gona ne da layuka iri ɗaya kowane lokaci: kwanan wata, abin da kuka saya, rukuni (iri, taki, abincin dabbobi, aiki, likitan dabbobi, mai, sufuri, gyara, haya), wane aiki, F ko V, adadi, yadda kuka biya (kuɗin hannu ko kuɗin waya) da ko kun ajiye rasit.",
            "Ku rubuta kowane kashe kuɗi a ranar da kuka biya. A ƙarshen wata, ku haɗa jimillar kowane rukuni da kowane aiki. Za ku gani da sauri inda kuɗi ke tafiya. Misali (lambobin ƙirƙira a cedi na Ghana), gonar kajin ƙwai a wata ɗaya: abinci 4,200, aiki 1,200, likitan dabbobi da allurar rigakafi 400, sufuri 300, gyara 150, jimilla 6,250. Abinci ya kai kashi biyu cikin uku na kuɗin, don haka mafi kyawun tanadi zai fito daga abinci.",
            "Littafin rubutu yana aiki sosai. A waya, spreadsheet kyauta kamar Google Sheets ko Microsoft Excel zai iya haɗa muku jimillar kowane rukuni da dabarar SUMIF. Ku kwatanta littafin da bayanan kuɗin hannu da na kuɗin waya kowane mako, don kada wani abu ya tsallake."
          ],
          steps: ["Ku yi layuka: kwanan wata, abu, rukuni, aiki, F ko V, adadi, yadda aka biya, rasit.", "Ku rubuta kowane kashe kuɗi a ranar.", "Kowane mako, ku kwatanta shi da bayanan kuɗin hannu da na kuɗin waya.", "A ƙarshen wata, ku haɗa jimillar kowane rukuni da kowane aiki.", "Ku nemo rukuni mafi girma da hanya ɗaya ta rage shi."],
          words: [["Littafin kashe kuɗi (expense tracker)", "jerin kowane biyan kuɗin gona da layuka iri ɗaya, don ku iya haɗa jimilla bisa rukuni."], ["Rukuni (category)", "taron kuɗaɗe masu kama da juna, kamar abincin dabbobi, aiki ko sufuri."], ["Rasit (receipt)", "takarda ko saƙo da ke tabbatar da cewa kun biya."]],
          slides: [
            { title: "Layuka iri ɗaya kowane lokaci", bullets: ["Kwanan wata, abu, rukuni, aiki", "Mai tsayawa ko mai canjawa, adadi", "Kuɗin hannu ko kuɗin waya, an ajiye rasit?"] },
            { title: "Jimillar ƙarshen wata (misali GHS, kajin ƙwai)", bullets: ["Abinci 4,200, aiki 1,200, likitan dabbobi 400", "Sufuri 300, gyara 150: jimilla 6,250", "Abinci ya kai kashi biyu cikin uku: ku fara tanadi a nan"] },
            { title: "Ku riƙe shi da gaskiya", bullets: ["Ku rubuta shi a ranar", "Ku kwatanta da bayanan kuɗin waya kowane mako", "Littafin rubutu ko spreadsheet a waya (SUMIF)"] }
          ],
          tryIt: "Ku kafa littafinku yau da dukkan layuka takwas. Ku cika kowane kashe kuɗin gona na kwanaki bakwai da suka gabata ta amfani da tunaninku, rasit da bayanan kuɗin waya, sannan ku haɗa jimilla bisa rukuni.",
          youCanNow: "ajiye littafin kashe kuɗi, haɗa jimillarsa bisa rukuni da aiki, da gano inda kuɗinku ke tafiya.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku ƙara layin wane aiki ne kowane kashe kuɗi?", options: ["Don ku ga ainihin kuɗin kowane aiki", "Domin bankuna suna nema kowace rana", "Don jerin ya yi tsawo", "Don kada ku buƙaci rasit"], answer: 0, why: "Jimilla bisa aiki tana shiga kai tsaye cikin kuɗin kowace raka'a na kowanne." },
            { objective: "O2", q: "Jimillar littafinku ta yi ƙasa da abin da ya fita daga asusun kuɗin wayarku a wannan wata. Me za ku yi?", options: ["Ku ƙyale; ƙananan giɓi ba su da muhimmanci", "Ku goge littafin ku sake farawa shekara mai zuwa", "Ku bi bayanan asusun ku ƙara kashe kuɗin da suka ɓace", "Ku ƙara lambar ƙirƙira don su yi daidai"], answer: 2, why: "Bayanan asusun suna nuna abin da kuka biya da gaske, don haka suna taimaka muku gano da ƙara abubuwan da suka ɓace." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sanin kuɗaɗenku",
        questions: [
          { objective: "O1", q: "Wanne ne kuɗi mai tsayawa a gonar masara?", options: ["Iri", "Taki", "Ma'aikatan kwana-kwana na cire ciyawa", "Hayar ƙasa ta shekara"], answer: 3, why: "Haya tana zama iri ɗaya ko me kuka shuka a ƙasar, don haka mai tsayawa ce." },
          { objective: "O1", q: "Injin yanka ciyawa yana kai 30,000, yana ɗaukar shekara 6 kuma darajarsa 0 ce a ƙarshe. Nawa ne depreciation ɗinsa na shekara?", options: ["5,000", "6,000", "30,000", "180,000"], answer: 0, why: "(30,000 - 0) / shekara 6 = 5,000 a shekara." },
          { objective: "O1", q: "Jimillar kuɗin kiwon aladu 90,000 ne kuma kun sayar da kilo 600 na naman alade. Nawa ne kuɗin kowane kilo?", options: ["600", "150", "90", "1,500"], answer: 1, why: "90,000 / kilo 600 = 150 a kowane kilo." },
          { objective: "O2", q: "Yaushe ya kamata ku rubuta kashe kuɗi a littafin?", options: ["A ƙarshen kaka", "Sai kawai idan kuna da rasit", "A ranar da kuka biya", "Don manyan biyan kuɗi kawai"], answer: 2, why: "Bayanan ranar suna cike kuma daidai." },
          { objective: "O2", q: "Bayan wata ɗaya na bibiya, abinci ya kai 65% na kuɗaɗe. Mene ne mataki na gaba mafi amfani?", options: ["Ku fara neman hanyoyin rage kuɗin abinci ko ɓarnarsa", "Ku daina bibiya domin amsar ta bayyana", "Ku fara rage rukuni mafi ƙanƙanta", "Ku sayi ƙarin abinci don samun ragi, ko yaya farashin yake"], answer: 0, why: "Rukuni mafi girma shi ne inda tanadi ke kawo babban bambanci." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsari da zuba jari",
      lessons: [
        {
          title: "Tsarin kuɗi na wata-wata da sauran kuɗi",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gina tsarin kuɗi na watanni 12 da kuɗin farkon wata da na ƙarshen wata, kuma ku yi wa watannin giɓi alama.",
          text: [
            "Tsarin kuɗi (cash-flow plan) yana nuna, wata-wata, nawa kuke tsammanin za ku samu a hannu. Ga kowane wata: kuɗin farkon wata (abin da kuka fara da shi) + kuɗin shiga - kuɗin fita = kuɗin ƙarshen wata. Kuɗin ƙarshen wata yana zama kuɗin farkon wata na gaba.",
            "Misali (lambobin ƙirƙira a cedi na Ghana), gonar masara da kaji. Maris: farko 3,000 + shiga 500 - fita 2,000 = ƙarshe 1,500. Afrilu: farko 1,500 + shiga 500 - fita 2,500 = ƙarshe -500. Kuɗin ƙarshen wata mai alamar ragi (-) giɓi ne: ba za ku iya biyan komai a wannan wata ba sai idan kun tsara.",
            "Ga kowane watan giɓi, ku tsara mataki kafin ya zo: tanadi daga girbin da ya gabata, mayar da wani saye zuwa wata na gaba, sayar da amfani kaɗan-kaɗan, ƙara ƙaramin aiki da ke kawo kuɗi a wannan wata (ƙwai, kayan lambu, kifi), shirya bashin kayan noma, ko yarjejeniyar ƙaramin bashi tun da wuri da biya bayan girbi. Ku sabunta tsarin kowane wata da abin da ya faru da gaske."
          ],
          steps: ["Ku yi layukan watanni 12 da layuka huɗu: farko, kuɗin shiga, kuɗin fita, ƙarshe.", "Ku sa kuɗin da kuke da shi yanzu a matsayin kuɗin farkon wata na farko.", "Ku cika kuɗin shiga da na fita da ake tsammani na kowane wata.", "Ƙarshe = farko + shiga - fita; ku kai shi farkon wata na gaba.", "Ku zagaye kowane kuɗin ƙarshen wata mai alamar ragi.", "Ku rubuta mataki ɗaya don kowane wata da aka zagaye, ku sabunta kowane wata."],
          words: [["Kuɗin farkon wata (opening balance)", "kuɗin da kuke da shi a farkon wata."], ["Kuɗin ƙarshen wata (closing balance)", "kuɗin da kuke tsammani a ƙarshen wata: farko + kuɗin shiga - kuɗin fita."], ["Giɓi (shortfall)", "watan da kuɗin fita ya fi kuɗin da kuke da shi."]],
          slides: [
            { title: "Layi ɗaya na lissafi", bullets: ["Farko + kuɗin shiga - kuɗin fita = ƙarshe", "Ƙarshe yana zama farkon wata na gaba"] },
            { title: "Misali (GHS, na ƙirƙira)", bullets: ["Maris: 3,000 + 500 - 2,000 = 1,500", "Afrilu: 1,500 + 500 - 2,500 = -500", "Alamar ragi = giɓi: ku tsara shi yanzu"] },
            { title: "Gyara giɓi", bullets: ["Tanadi daga girbi; mayar da saye gaba", "Sayarwa kaɗan-kaɗan; ƙara aikin da ke kawo kuɗi a lokacin", "Bashin kayan noma ko ƙaramin bashi da aka shirya tun da wuri"] },
            { title: "Ku riƙe shi da rai", bullets: ["Ku rubuta abin da ya faru da gaske kowane wata", "Ku sabunta watannin da ke gaba"] }
          ],
          tryIt: "Ku gina tsarin kuɗinku na watanni 12, ku fara da kuɗin da kuke da shi yau. Ku lissafa kowane kuɗin ƙarshen wata, ku zagaye watannin giɓi, ku rubuta mataki ɗaya don kowanne.",
          youCanNow: "gina tsarin kuɗi na wata-wata da sauran kuɗi, gano watannin giɓi da wuri da tsara abin da za ku yi game da su.",
          quickCheck: [
            { objective: "O3", q: "Kuɗin farkon wata 2,000, shiga 1,000, fita 2,500. Nawa ne kuɗin ƙarshen wata?", options: ["5,500", "-500", "3,000", "500"], answer: 3, why: "2,000 + 1,000 - 2,500 = 500." },
            { objective: "O3", q: "Tsarinku yana nuna giɓi a watan Agusta. Yaushe ya kamata ku tsara abin da za ku yi?", options: ["Yanzu, watanni kafin Agusta", "A Agusta, lokacin da takardun biya suka zo", "Bayan girbi", "Ba taɓa ba; zai gyaru da kansa"], answer: 0, why: "Tsarawa da wuri yana ba ku lokacin tanadi, mayar da saye ko shirya bashi da sharuɗɗa masu kyau." }
          ]
        },
        {
          title: "Farashin break-even da yawan amfanin break-even",
          objectives: ["O4"],
          minutes: 5,
          goal: "Lissafa farashin break-even da yawan amfanin break-even kuma ku yi amfani da su don auna tayin mai saye.",
          text: [
            "Break-even (ba riba ba faɗuwa) shi ne wurin da kuɗin shiga ke rufe jimillar kuɗi daidai: babu riba kuma babu faɗuwa. Farashin break-even = jimillar kuɗi / yawan amfanin da ake tsammani. Shi ne mafi ƙarancin farashin da za ku iya karɓa ba tare da faɗuwa ba. Yawan amfanin break-even = jimillar kuɗi / farashin da kuke tsammani. Shi ne mafi ƙanƙantar girbin da ke rufe kuɗaɗenku a wannan farashi.",
            "Misali (lambobin ƙirƙira a naira), hekta ɗaya ta masara ta Darasi na 2: jimillar kuɗi 750,000, girbin da ake tsammani buhu 30. Farashin break-even = 750,000 / 30 = 25,000 a kowane buhu. Mai saye ya taya 28,000: kuna samun 3,000 a kowane buhu, ko 90,000 a buhu 30. Yawan amfanin break-even a 28,000 = 750,000 / 28,000 = buhu 26.8, don haka kuna buƙatar aƙalla buhu 27. Idan fari ya rage girbinku zuwa buhu 25, za ku faɗi ko a wannan farashi.",
            "Ku yi amfani da break-even kafin ku shuka (shin wannan amfanin gona ya cancanta a farashin da ake iya samu?) da lokacin da mai saye ya yi tayi (shin ya rufe kuɗaɗena?). Bambancin farashin da ake tsammani da farashin break-even ɗinku shi ne gefen tsaronku (safety margin): idan ya fi girma, za ku fi iya jure mummunar kaka ko faɗuwar farashi."
          ],
          steps: ["Ku haɗa jimillar kuɗin aikin (masu canjawa + rabon masu tsayawa).", "Farashin break-even = jimillar kuɗi / yawan amfanin da ake tsammani.", "Yawan amfanin break-even = jimillar kuɗi / farashin da ake tsammani.", "Ku kwatanta da tayin mai saye da yawan amfanin da kuke iya samu.", "Ku rubuta gefen tsaronku: farashin da ake tsammani - farashin break-even."],
          words: [["Break-even (ba riba ba faɗuwa)", "wurin da kuɗin shiga ke rufe jimillar kuɗi daidai: babu riba, babu faɗuwa."], ["Farashin break-even", "mafi ƙarancin farashin kowace raka'a da ke rufe kuɗaɗenku: jimillar kuɗi / yawan amfani."], ["Yawan amfanin break-even", "mafi ƙanƙantar girbin da ke rufe kuɗaɗenku a wani farashi: jimillar kuɗi / farashi."], ["Gefen tsaro (safety margin)", "yawan da farashi ko amfani zai iya faɗuwa kafin ku yi faɗuwa."]],
          slides: [
            { title: "Lambobin break-even guda biyu", bullets: ["Farashin break-even = jimillar kuɗi / yawan amfani", "Yawan amfanin break-even = jimillar kuɗi / farashi"] },
            { title: "Misalin masara (NGN, na ƙirƙira)", bullets: ["750,000 / buhu 30 = 25,000 a kowane buhu", "Tayin 28,000: riba 3,000 a kowane buhu, 90,000 gaba ɗaya", "Yawan amfanin break-even a 28,000: kusan buhu 27"] },
            { title: "Yaushe za ku yi amfani da shi", bullets: ["Kafin ku shuka: shin ya cancanta?", "Lokacin da mai saye ya yi tayi: shin ya rufe kuɗaɗe?", "Gefen tsaro mafi girma = ƙarin damar jure mummunar kaka"] }
          ],
          tryIt: "Ku yi amfani da jimillar kuɗin aikinku da yawan amfanin da kuke tsammani. Ku lissafa farashin break-even da yawan amfanin break-even a farashin yau, ku rubuta gefen tsaronku. Shin za ku karɓi tayin ƙarshe da kuka samu?",
          youCanNow: "lissafin farashin break-even da yawan amfanin break-even na aiki, da amfani da su don karɓa ko ƙin tayi.",
          quickCheck: [
            { objective: "O4", q: "Jimillar kuɗi 120,000, yawan amfanin da ake tsammani buhu 40. Nawa ne farashin break-even?", options: ["4,000 a kowane buhu", "40 a kowane buhu", "3,000 a kowane buhu", "160,000 a kowane buhu"], answer: 2, why: "120,000 / buhu 40 = 3,000 a kowane buhu." },
            { objective: "O4", q: "Farashin break-even na nonon ku 50 ne a kowace lita. Mai saye ya taya 45. Me hakan ke nufi?", options: ["Kuna samun ribar 5 a kowace lita", "Kuna faɗuwa da kusan 5 a kowace lita sai dai idan kun rage kuɗaɗe ko kun sami mai saye mafi kyau", "Tayin ya yi daidai domin ya kusa", "Break-even ba shi da muhimmanci ga nono"], answer: 1, why: "Farashi ƙasa da break-even yana nufin kowace lita da aka sayar tana faɗuwa." }
          ]
        },
        {
          title: "Auna jari: lokacin dawowar kuɗi da ribar jari mai sauƙi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa lokacin dawowar kuɗi da ribar jari mai sauƙi na wani jari kuma ku yanke ko yana da ma'ana.",
          text: [
            "Jari (investment) kuɗi ne da ake kashewa yanzu don samun ƙari daga baya: famfon hasken rana, gidan gilashi (greenhouse), ɗakin sanyi, gidan aladu ko ƙarin shanu. Da farko ku lissafa ƙarin ribar shekara (extra net income): ƙarin kuɗin da yake kawowa ragi ƙarin kuɗaɗen gudanarwa (mai, gyara, abincin dabbobi, aiki, kayan maye). Sannan: lokacin dawowar kuɗi (payback period) = kuɗin jari / ƙarin ribar shekara. Ribar jari mai sauƙi (simple return) = ƙarin ribar shekara / kuɗin jari x 100.",
            "Misali (lambobin ƙirƙira a shilling na Kenya), famfon hasken rana da ke ba da damar shuka tumatir a rani: kuɗi 120,000; ƙarin kuɗin shiga 55,000 a shekara ragi ƙarin kuɗaɗe 15,000 = ƙarin riba 40,000. Dawowar kuɗi = 120,000 / 40,000 = shekara 3. Ribar jari mai sauƙi = 40,000 / 120,000 x 100 = kusan 33% a shekara. Misali (lambobin ƙirƙira a CFA franc), gidan gilashi a Senegal: kuɗi 3,000,000; ƙarin riba 600,000 a shekara. Dawowar kuɗi = shekara 5; ribar jari mai sauƙi = 20% a shekara.",
            "Sannan ku duba haɗari. Shin zai daɗe fiye da lokacin dawowar kuɗi (robar gidan gilashi da sassan famfo suna lalacewa)? Idan kun ci bashi, shin kuɗin bashin na shekara ya yi ƙasa da ribar, kuma za ku iya biya kafin kayan ya dawo da kuɗinsa? Me zai faru idan amfani ko farashi sun yi ƙasa da kashi 20% fiye da yadda kuka yi fata? Ku yi amfani da lambobi masu taka-tsantsan, ku tambayi mai sayarwa manoman da ke riga suna amfani da shi, kuma ku yi magana da mai ba da shawara da kuka amince da shi kafin ku saya. Wannan kwas yana bayanin hanyar ne; ba ya gaya muku abin da za ku saya."
          ],
          steps: ["Ku rubuta cikakken kuɗi: kayan, kawowa, girkawa, horo.", "Ku ƙiyasta ƙarin kuɗin shiga na shekara, da amfani da farashi masu taka-tsantsan.", "Ku cire ƙarin kuɗaɗen gudanarwa don samun ƙarin ribar shekara.", "Dawowar kuɗi = kuɗi / ƙarin ribar shekara.", "Ribar jari mai sauƙi = ƙarin riba / kuɗi x 100.", "Ku duba tsawon rayuwar kayan, kuɗin bashi da yanayi mafi muni da kashi 20%; ku rubuta shawararku."],
          words: [["Jari (investment)", "kuɗin da ake kashewa yanzu kan abin da ya kamata ya kawo ƙari daga baya."], ["Ƙarin riba (extra net income)", "ƙarin kuɗin da jari ke kawowa kowace shekara ragi ƙarin kuɗaɗen gudanarwarsa."], ["Lokacin dawowar kuɗi (payback period)", "shekaru nawa ƙarin riba ke ɗauka don dawo da abin da kuka kashe: kuɗi / ƙarin ribar shekara."], ["Ribar jari mai sauƙi (simple return)", "ƙarin ribar shekara a matsayin kashi na kuɗin jari."]],
          slides: [
            { title: "Lambobi biyu don auna jari", bullets: ["Dawowar kuɗi = kuɗi / ƙarin ribar shekara", "Ribar jari mai sauƙi = ƙarin riba / kuɗi x 100", "Ƙarin riba = ƙarin kuɗin shiga - ƙarin kuɗaɗe"] },
            { title: "Famfon hasken rana (misali KES)", bullets: ["Kuɗi 120,000; ƙarin riba 40,000 a shekara", "Dawowar kuɗi shekara 3; ribar jari mai sauƙi kusan 33%"] },
            { title: "Gidan gilashi a Senegal (misali XOF)", bullets: ["Kuɗi 3,000,000; ƙarin riba 600,000 a shekara", "Dawowar kuɗi shekara 5; ribar jari mai sauƙi 20%"] },
            { title: "Ku duba kafin ku saya", bullets: ["Shin zai daɗe fiye da lokacin dawowar kuɗi?", "Kuɗin bashi ya yi ƙasa da ribar?", "Har yanzu yana aiki idan amfani ko farashi sun ragu da kashi 20%?", "Ku yi magana da masu amfani da shi da mai ba da shawara amintacce"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Aikin ƙarshe: ku yi takardar kuɗin gona da jari. Don aiki ɗaya, ku haɗa kuɗaɗe masu tsayawa da masu canjawa, kuɗin kowace raka'a, bibiyar kashe kuɗi na wata ɗaya, tsarin kuɗi na watanni 12 da watannin giɓi da alama, farashin break-even da yawan amfanin break-even, da lokacin dawowar kuɗi da ribar jari mai sauƙi na jari ɗaya, tare da shawararku da dalilinta.",
          youCanNow: "auna ko jari zai dawo da kuɗinsa, ta amfani da lokacin dawowar kuɗi, ribar jari mai sauƙi da duba haɗari.",
          quickCheck: [
            { objective: "O5", q: "Ɗakin sanyi yana kai 200,000 kuma yana ƙara ribar 50,000 a shekara. Nawa ne lokacin dawowar kuɗi?", options: ["Shekara 2", "Shekara 25", "Shekara 5", "Shekara 4"], answer: 3, why: "200,000 / 50,000 = shekara 4." },
            { objective: "O5", q: "Wani kaya yana dawo da kuɗinsa a shekara 6 amma mai sayarwa ya ce yana ɗaukar kusan shekara 4. Me wannan ke gaya muku?", options: ["Zai lalace kafin ya dawo da kuɗinsa, don haka da alama faɗuwa ce", "Jari ne mai kyau sosai", "Dawowar kuɗi ba ta da muhimmanci idan kayan sabo ne", "Ya kamata ku ƙara cin bashi don sayen biyu"], answer: 0, why: "Idan kayan ya lalace kafin dawowar kuɗi, ƙarin kuɗin da yake kawowa ba zai taɓa rufe kuɗinsa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsari da zuba jari",
        questions: [
          { objective: "O3", q: "A tsarin kuɗi, mene ne kuɗin farkon wata na gaba?", options: ["Koyaushe sifili", "Kuɗin ƙarshen wannan wata", "Kuɗin shiga na wata mai zuwa", "Ribar shekara"], answer: 1, why: "Kowane wata yana farawa da kuɗin da wata na baya ya ƙare da shi." },
          { objective: "O3", q: "Wanne ne mataki mai hankali don watan giɓi da kuke ganin yana zuwa?", options: ["Jira da fata", "Sayar da dukan girbi a rana ta farko", "Mayar da wani saye zuwa wata na gaba ko tanadi daga girbi saboda shi", "Karɓar kowane bashi da aka tayar ta saƙon tes"], answer: 2, why: "Mayar da kashe kuɗi gaba ko tanadi tun da wuri yana rufe giɓin ba tare da bashi mai haɗari ba." },
          { objective: "O4", q: "Jimillar kuɗi 300,000; mai saye yana biyan 6,000 a kowane buhu. Nawa ne yawan amfanin break-even?", options: ["Buhu 50", "Buhu 60", "Buhu 5", "Buhu 1,800"], answer: 0, why: "300,000 / 6,000 = buhu 50." },
          { objective: "O5", q: "Ƙarin riba 30,000 a shekara kan jari na 150,000. Nawa ne ribar jari mai sauƙi?", options: ["5%", "50%", "30%", "20%"], answer: 3, why: "30,000 / 150,000 x 100 = 20% a shekara." },
          { objective: "O5", q: "Yaya za ku lissafa ƙarin riba ga sabon famfon hasken rana?", options: ["Ku ƙidaya ƙarin kuɗin shiga kawai", "Ku cire farashin famfon daga girbi ɗaya", "Ƙarin kuɗin shigar da yake kawowa ragi ƙarin kuɗaɗen gudanarwarsa", "Ku nemi mai sayarwa ya gaya muku ribar"], answer: 2, why: "Kuɗaɗen gudanarwa kamar gyara da aiki suna rage abin da famfon ke samarwa da gaske." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Lissafin Kuɗin Gona da Sarrafa Jari",
    questions: [
      { objective: "O1", q: "Wane kuɗi ne ke canjawa da yawan abin da kuke samarwa?", options: ["Kuɗi mai canjawa, kamar abincin dabbobi", "Kuɗi mai tsayawa, kamar hayar ƙasa", "Depreciation na rumfa", "Lasisin ruwa"], answer: 0, why: "Kuɗaɗe masu canjawa suna hawa da sauka da yawan abin da ake samarwa." },
      { objective: "O1", q: "Shinge ya kai 40,000, zai ɗauki shekara 8 kuma darajarsa 0 ce a ƙarshe. Nawa ne depreciation ɗinsa na shekara?", options: ["8,000", "320,000", "40,000", "5,000"], answer: 3, why: "(40,000 - 0) / 8 = 5,000 a shekara." },
      { objective: "O1", q: "Me yasa za a ƙidaya aikin iyali bisa ladan kwana na yankinku?", options: ["Domin ofishin haraji yana nema", "Don ku ga ainihin kuɗin samar da kowace raka'a", "Don gonar ta yi kama da talaka", "Ba a buƙata"], answer: 1, why: "Lokacin iyalinku yana da daraja; barin sa yana ɓoye ainihin kuɗin." },
      { objective: "O1", q: "Jimillar kuɗin tafkin tilapia 60,000 ne kuma kun girbe kilo 300. Nawa ne kuɗin kowane kilo?", options: ["300", "2,000", "200", "20"], answer: 2, why: "60,000 / kilo 300 = 200 a kowane kilo." },
      { objective: "O1", q: "Farashin kayan noma ya tashi amma girbinku yana nan iri ɗaya. Kuɗin kowace raka'a:", options: ["Yana tashi", "Yana sauka", "Yana zama iri ɗaya", "Ba za a iya lissafa shi ba"], answer: 0, why: "Jimillar kuɗi mafi girma raba yawan raka'o'i iri ɗaya yana ba da kuɗin kowace raka'a mafi girma." },
      { objective: "O2", q: "Wane rukunin layuka ne ke sa littafin kashe kuɗi ya yi amfani?", options: ["Adadi kawai", "Abu da launi", "Sunan mai saye da farashi", "Kwanan wata, abu, rukuni, aiki, F ko V, adadi, yadda aka biya, rasit"], answer: 3, why: "Waɗannan layuka suna ba ku damar haɗa jimillar kuɗaɗe bisa rukuni da aiki da duba su." },
      { objective: "O2", q: "Sau nawa ya kamata ku kwatanta littafinku da bayanan kuɗin waya?", options: ["Sau ɗaya a shekara", "Kowane mako", "Ba taɓa ba", "Sai kawai idan mai ba da bashi ya nema"], answer: 1, why: "Duba kowane mako yana kama kashe kuɗin da suka ɓace yayin da kuke tunawa da su." },
      { objective: "O2", q: "Wace dabarar spreadsheet ce za ta iya haɗa duk kashe kuɗi na rukuni ɗaya?", options: ["SUMIF", "LEN", "TODAY", "UPPER"], answer: 0, why: "SUMIF yana haɗa adadin da suka dace da wani sharaɗi, kamar rukunin \"abincin dabbobi\"." },
      { objective: "O3", q: "Ana lissafa kuɗin ƙarshen wata kamar haka:", options: ["Kuɗin shiga - kuɗin fita kawai", "Kuɗin farkon wata x kuɗin shiga", "Kuɗin farkon wata + kuɗin shiga - kuɗin fita", "Kuɗin fita - kuɗin farkon wata"], answer: 2, why: "Kuna farawa da kuɗin farkon wata, ku ƙara abin da ya shigo, ku cire abin da ya fita." },
      { objective: "O3", q: "Farko 4,000, shiga 0, fita 5,000. Me kuɗin ƙarshen wata ke gaya muku?", options: ["Kuna da 9,000", "Za ku sami giɓin 1,000", "Kuna da ragowar 1,000", "Babu wani abu mai amfani"], answer: 1, why: "4,000 + 0 - 5,000 = -1,000, giɓi ne." },
      { objective: "O3", q: "Wanne ne ya fi taimakawa a watan giɓi kafin girbi?", options: ["Ƙyale shi har ya zo", "Ƙara kashe kuɗi a watan da ya gabace shi", "Cin bashi daga mai ba da bashi da ba ku duba ba", "Ƙaramin aikin da ke kawo kuɗi a wannan wata, kamar ƙwai ko kayan lambu"], answer: 3, why: "Kuɗin shiga a watan yunwa yana rufe giɓin ba tare da bashi mai haɗari ba." },
      { objective: "O3", q: "Me yasa za a sabunta tsarin kuɗi kowane wata?", options: ["Don ya dace da abin da ya faru da gaske kuma a ga watannin gaba da kyau", "Domin banki yana canja shi", "Don lambobin su yi kama da sun fi girma", "Bai kamata ku sabunta shi ba"], answer: 0, why: "Tsarin da ke bin gaskiya yana gargaɗin ku da wuri game da sababbin giɓi." },
      { objective: "O4", q: "Farashin break-even shi ne:", options: ["Jimillar kuɗi / yawan amfanin da ake tsammani", "Yawan amfanin da ake tsammani / jimillar kuɗi", "Farashi x yawan amfani", "Kuɗin shiga - jimillar kuɗi"], answer: 0, why: "Raba jimillar kuɗi da raka'o'in da kuke tsammani yana ba da mafi ƙarancin farashin da ke rufe kuɗaɗe." },
      { objective: "O4", q: "Jimillar kuɗi 200,000; yawan amfanin da ake tsammani buhu 50. Mai saye ya taya 3,500 a kowane buhu. Ya kamata ku karɓa bisa kuɗaɗe?", options: ["E, 3,500 ya rufe kuɗin", "E, kowane tayi yana da kyau", "A'a, farashin break-even 4,000 ne a kowane buhu", "Ba za a iya sani ba"], answer: 2, why: "200,000 / 50 = 4,000 a kowane buhu, don haka 3,500 yana faɗuwa da 500 a kowane buhu." },
      { objective: "O4", q: "Yawan amfanin break-even yana gaya muku:", options: ["Mafi kyawun farashin da za ku samu", "Mafi ƙanƙantar girbin da ke rufe kuɗaɗenku a wani farashi", "Yawan takin da za ku yi amfani da shi", "Ribarku ta shekara"], answer: 1, why: "Jimillar kuɗi ne raba farashi: girbin da kuke buƙata don guje wa faɗuwa." },
      { objective: "O4", q: "Farashin da ake tsammani 30,000 a kowane buhu, farashin break-even 25,000 a kowane buhu. Gefen tsaronku shi ne:", options: ["55,000 a kowane buhu", "25,000 a kowane buhu", "30,000 a kowane buhu", "5,000 a kowane buhu"], answer: 3, why: "30,000 - 25,000 = 5,000 a kowane buhu kafin ku yi faɗuwa." },
      { objective: "O5", q: "Lokacin dawowar kuɗi shi ne:", options: ["Kuɗin jari / ƙarin ribar shekara", "Ƙarin riba / kuɗi x 100", "Kuɗin ruwan bashi x shekaru", "Kuɗi - kuɗin shiga na shekara"], answer: 0, why: "Yana nuna shekaru nawa na ƙarin riba ke dawo da kuɗin." },
      { objective: "O5", q: "Ƙarin shanun nono uku suna kai 450,000 kuma suna ƙara ribar 150,000 a shekara. Nawa ne ribar jari mai sauƙi?", options: ["3%", "15%", "33%", "300%"], answer: 2, why: "150,000 / 450,000 x 100 = kusan 33% a shekara." },
      { objective: "O5", q: "Za ku ci bashi don gidan gilashi. Wane bincike ne ya fi muhimmanci?", options: ["Launin gidan gilashin", "Ko kuɗin bashin na shekara ya yi ƙasa da ribar kuma biyan bashin ya dace da tsarin kuɗinku", "Ko maƙwabta suna da shi", "Babu komai, idan mai sayarwa yana da fara'a"], answer: 1, why: "Bashin da ya fi ribar tsada, ko wanda ba za ku iya biya a kan lokaci ba, yana mayar da jarin faɗuwa." },
      { objective: "O5", q: "Mai sayarwa ya yi alkawarin cewa famfo zai ninka kuɗin shigarku. Me ya kamata ku yi?", options: ["Ku saya nan take", "Ku yi amfani da lambar mai sayarwa a matsayin ƙiyasinku", "Ku biya kuɗin ajiya kafin ku tambayi komai", "Ku yi amfani da lambobi masu taka-tsantsan, ku yi magana da manoman da ke amfani da shi, ku tambayi mai ba da shawara amintacce"], answer: 3, why: "Lambobi masu taka-tsantsan da ƙwarewar masu amfani na gaske suna kare ku daga zancen tallace-tallace mai yawan fata." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na takardar ku sake dubawa.",
    criteria: [
      { name: "An raba kuɗaɗe da kuɗin kowace raka'a", objective: "O1", notYet: "Wasu kuɗaɗe sun ɓace ko sun cakuɗe, ko kuɗin kowace raka'a ba daidai ba ne ko babu shi.", meets: "Kowane kuɗi yana da alamar mai tsayawa ko mai canjawa, an haɗa depreciation, kuma kuɗin kowace raka'a daidai ne.", exceeds: "An raba kuɗaɗe masu tsayawa da adalci tsakanin ayyuka, kuma an ƙiyasta aikin iyali bisa ladan kwana na yankin." },
      { name: "Littafin kashe kuɗi", objective: "O2", notYet: "An rubuta ƙasa da rabin kwanakin, ko babu jimilla bisa rukuni.", meets: "Kashe kuɗin wata ɗaya da dukkan layuka, an haɗa jimilla bisa rukuni da aiki, kuma ya yi daidai da kuɗin hannu da kuɗin waya.", exceeds: "Yana kuma ambaton rukuni mafi girma da hanya ɗaya mai yiwuwa ta rage shi." },
      { name: "Tsarin kuɗi", objective: "O3", notYet: "Wasu watanni sun ɓace ko ba a kai kuɗin ƙarshen wata zuwa wata na gaba ba.", meets: "Watanni goma sha biyu da kuɗin farko da na ƙarshen wata daidai, an zagaye watannin giɓi, akwai mataki ga kowanne.", exceeds: "Matakai suna da kwanan wata da kuɗinsu, kuma an sabunta tsarin da wata ɗaya na gaske." },
      { name: "Break-even", objective: "O4", notYet: "Farashin break-even ko yawan amfanin break-even babu ko ba daidai ba ne.", meets: "Farashin break-even da yawan amfanin break-even daidai ne kuma an kwatanta su da farashi da yawan amfanin da ake tsammani.", exceeds: "Yana kuma nuna gefen tsaro da abin da zai faru idan amfani ya ragu da kashi 20%." },
      { name: "Shawarar jari", objective: "O5", notYet: "Babu dawowar kuɗi ko riba, ko shawarar ba ta da dalilai.", meets: "Dawowar kuɗi da ribar jari mai sauƙi daidai ne kuma shawarar tana ambaton aƙalla haɗari biyu da aka duba.", exceeds: "Ya haɗa yanayi mafi muni da kashi 20%, tsawon rayuwar kayan da kuɗin kowane bashi, tare da amsa a sarari: e, a'a ko jira." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na takardar kuɗi da jari",
      "Masu koyo da har yanzu suke ajiye littafin kashe kuɗi bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun ƙi farashi ƙasa da farashin break-even ɗinsu ko sun canja sayarwa saboda shi",
      "Masu koyo da suka ce sun jinkirta, canja ko yanke shawarar jari ta amfani da lokacin dawowar kuɗi da ribar jari mai sauƙi",
      "Ƙungiyoyin haɗin gwiwa ko masu ba da bashi abokan aiki sun ce ƙarin mambobi suna kawo lambobin kuɗaɗe da tsarin kuɗi zuwa tattaunawar bashi ko yarjejeniya"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, ko waya mai manhajar spreadsheet kyauta (Google Sheets ko Microsoft Excel)",
      "Na'urar lissafi ta waya",
      "Kuɗaɗen mai koyo, rasit da bayanan kuɗin waya na aiki ɗaya, ko lambobin misali na kwas ɗin",
      "Kusan minti 75 gaba ɗaya, a gajerun zama, tare da wata ɗaya na bibiyar kashe kuɗi don aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko zaman faɗakarwar noma: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama, ana yin ayyukan \"Gwada yanzu\" bi-biyu.",
      "Ku kawo kasafin kuɗin aiki na gaske ko na misali don masu koyo da ba su da bayanai su iya yin atisaye; ku tabbatar kowa ya duba lissafin da na'urar lissafi.",
      "Ku tunatar da masu koyo cewa duk lambobin kwas ɗin misalai ne; ku nemi su yi amfani da farashin kasuwarsu da na masu sayar musu da kaya.",
      "Kada ku ba da shawarar wani kayan aiki, mai ba da bashi ko mai sayarwa na musamman; ku nemi masu koyo su kwatanta tayi kuma su yi magana da mai ba da shawara amintacce.",
      "Ku nemi masu koyo su fara littafin kashe kuɗi bayan Darasi na 3 don su sami cikakken wata don aikin ƙarshe; ku ba da maki ga takardar da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
