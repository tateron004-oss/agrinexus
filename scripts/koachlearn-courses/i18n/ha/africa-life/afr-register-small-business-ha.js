"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-register-small-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const BRS = { name: "Business Registration Service, Kenya: yi rajistar kasuwancinku ta intanet ta eCitizen", url: "https://brs.go.ke/" };
const CAC = { name: "Corporate Affairs Commission (CAC), Najeriya: rajistar kamfani, sunan kasuwanci da ƙungiyoyin amintattu (shafin icrp.cac.gov.ng)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Office of the Registrar of Companies (ORC), Ghana: sunayen kasuwanci, kamfanoni, sabuntawa (har da ta *222#) da rahotannin shekara", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Senegal: hukumar ƙarfafa zuba jari da cibiyar buɗe kasuwanci a wuri ɗaya", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Côte d'Ivoire: cibiyar ƙarfafa zuba jari da buɗe kasuwanci a wuri ɗaya", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA: Ƙungiyar daidaita dokokin kasuwanci a Afirka (ƙasashe mambobi 17)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Morocco: shafin matsayin auto-entrepreneur (ɗan kasuwa mai zaman kansa)", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Kenya Revenue Authority (KRA): bayani game da KRA PIN (ana samun sa a iTax)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Nigeria Revenue Service (NRS): hukumar haraji ta tarayyar Najeriya", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Ghana Revenue Authority (GRA): rajista da TIN ko Ghana Card PIN; tsarin haraji na musamman ga ƙananan kasuwanci (Modified Taxation Scheme)", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Najeriya: tallafi ga ƙanana da matsakaitan kasuwanci (rajista kyauta, SME Digital Academy)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business-ha",
  lang: "ha",
  translationOf: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Rajista da Gudanar da Ƙaramin Kasuwanci a Afirka",
  skills: "Zaɓar irin kasuwanci, Nemo ofishin rajista na hukuma, Shirya jerin abubuwan rajista, Samun lambar haraji da izinin gida, Ajiye littafin kuɗi mai sauƙi, Tsara sabuntawa da rahotanni",
  outcome: "mayar da ƙaramin kasuwancinku na hukuma kuma ku kiyaye shi cikin tsari: zaɓar irin kasuwancin da ya dace, nemo ofishin rajista na hukuma na ƙasarku, shirya duk abin da kuke buƙata don rajista, gano wace lambar haraji da waɗanne izini suka shafe ku, ajiye littafin kuɗi mai sauƙi, da tsara sabuntawa da rahotanninku na kowace shekara.",
  about: [
    "Ƙananan kasuwanci da yawa a Afirka suna aiki ba tare da rajista ba. Hakan yana iya tafiya na ɗan lokaci, amma rajista tana buɗe ƙofofi: asusun banki da sunan kasuwanci, kwangila da kamfanoni da gwamnati, asusun kasuwar intanet, bashi da wasu shirye-shiryen tallafi. Wannan kwas na 'yan kasuwar kasuwa ne, masu sana'a, masu gidan gyaran gashi, masu dafa abinci, teloli, da duk mai ƙaramin kasuwanci a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco da sauran Afirka.",
    "Za ku zaɓi irin kasuwancin da ya dace da ku, ku nemo ofishin rajista na hukuma na ƙasarku ku guji wakilan bogi, ku shirya jerin abubuwan rajista, ku gano wace lambar haraji da waɗanne izinin gida suka shafe ku, ku fara littafin kuɗi mai sauƙi, kuma ku yi kalandar sabuntawa da rahotanni na kowace shekara.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" don kasuwancinku. Dokoki, fom da kuɗaɗe suna canjawa kuma sun bambanta daga ƙasa zuwa ƙasa, don haka kwas ɗin yana ambaton ofisoshin kuma yana nuna muku yadda ake tabbatarwa. Ba ya ba da kuɗaɗe ko shawarar shari'a; don babbar shawara, ku tambayi ofishin rajista, cibiyar tallafin kasuwanci, ko ƙwararren akawu ko lauya."
  ],
  finalTask: "Ku yi jerin abubuwan rajista don kasuwancinku: irin kasuwancin da kuka zaɓa da dalili, ofishin rajista na hukuma da shafinsa, zaɓin suna uku, takardu da bayanan da kuke buƙata, lambar haraji da izinin gida da suka shafe ku (da inda kuka tabbatar), yadda za ku ajiye littafin kuɗinku, da kalandar sabuntawa da rahotanni ta kowace shekara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙanana da kasuwancin da ba na hukuma ba a faɗin Afirka: 'yan kasuwar kasuwa, masu sana'a, teloli, masu gyaran gashi, masu dafa abinci, makanikai, masu sayarwa ta intanet da matasa masu farawa, a Kenya, Najeriya, Ghana, Yammaci da Tsakiyar Afirka masu Faransanci da Arewacin Afirka.",
    startingPoint: "Suna gudanar da kasuwanci kowace rana kuma suna sarrafa tsabar kuɗi da kuɗin waya (mobile money). Yawancinsu ba su yi rajista ba, ba su san wane ofishi za su je ba, suna haɗa kuɗin kasuwanci da na gida, kuma ba sa rubuta abubuwa sosai. Wasu sun biya wakilan bogi ko sun ji shawarwari masu ruɗani.",
    gap: "Ba tare da rajista da bayanai masu sauƙi ba, ƙananan kasuwanci da yawa ba sa iya buɗe asusun bankin kasuwanci, samun kwangila, sayarwa a wasu kasuwannin intanet ko neman tallafi. Wasu suna yin rajista sau ɗaya sannan su yi latti wajen sabuntawa ko rahotanni, su biya tara. Masu koyo suna buƙatar zaɓar irin kasuwanci, yin rajista ta hanyar hukuma, sanin wace lambar haraji da izini suka shafe su, da kiyaye bayanansu da ranakunsu cikin tsari.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa suna karanta wannan a harshensu na biyu",
      "Na'urori: waya mai sauƙi, wani lokaci kwamfutar shagon intanet (cyber café); data tana da tsada",
      "Dokoki: irin kasuwanci, kuɗaɗe, haraji da izini sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa; kwas ɗin ba ya taɓa ba da kuɗaɗe ko wa'adi, koyaushe yana nuna ofishin hukuma",
      "Tsaro: akwai wakilan rajista da shafukan bogi; masu koyo suna amfani da shafukan hukuma kaɗai kuma ba sa taɓa bayar da kalmar sirri ko PIN",
      "Ba shawarar shari'a ko ta haraji ba ce: masu koyo suna tabbatarwa da ofishin rajista, hukumar haraji ko ƙwararre game da halinsu"
    ],
    prerequisites: "Gudanar da ƙaramin kasuwanci, ko shirin farawa. Iya ƙari da ragi na asali."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka yi la'akari da girman kasuwancinku, masu shi da haɗarinsa", action: "zaɓar irin kasuwanci, kamar sunan kasuwanci na mai shi ɗaya ko kamfani mai iyakantaccen alhaki, da rubuta dalilin da yasa ya dace", standard: "kuna ambaton fa'ida ɗaya da nauyi ɗaya na irin da kuka zaɓa" },
    { id: "O2", condition: "Idan aka ba ku ƙasar da kuke kasuwanci", action: "gane ofishin rajistar kasuwanci na hukuma da buɗe shafinsa na hukuma ko zuwa ofishinsa", standard: "ba tare da amfani da wakilin da ba na hukuma ba ko shafin da aka kwaikwaya ba" },
    { id: "O3", condition: "Kafin ku fara rajista", action: "shirya jerin abubuwan rajista mai zaɓin suna uku, bayanan masu shi, aikin kasuwancin, adireshi da takardu", standard: "ta yadda za a iya cike fom ɗin a zama ɗaya" },
    { id: "O4", condition: "Don kasuwancinku da garinku", action: "jera lambar haraji, izinin kasuwanci na gida da duk wani izinin sana'a da ya shafe ku, da inda ake samun kowanne", standard: "an tabbatar da ofishin hukuma na kowanne" },
    { id: "O5", condition: "A cikin mako ɗaya na kasuwanci", action: "rubuta kowace sayarwa da kowane kashewa a littafin kuɗi mai sauƙi, daban da kuɗin gida", standard: "kuɗin shigowa da na fita na makon sun yi daidai" },
    { id: "O6", condition: "Da zarar kasuwancinku ya yi rajista", action: "zana kalandar sabuntawa, rahotanni da ranakun izini ta kowace shekara", standard: "an tabbatar da kowace rana a shafin hukuma kuma an saka tunatarwa kafin ta" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓi da rajista",
      lessons: [
        {
          title: "Me yasa za a yi rajista, da wane irin kasuwanci ya dace da ku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi irin kasuwancin da ya dace da kasuwancinku kuma ku rubuta dalili.",
          text: [
            "Rajista tana sanar da gwamnati cewa kasuwancinku yana nan, kuma tana ba shi suna na hukuma. Fa'idodi na iya haɗawa da asusun bankin kasuwanci, kwangila da kamfanoni da gwamnati, sayarwa a wasu kasuwannin intanet, amincewar abokan ciniki, da neman bashi da shirye-shiryen tallafi. Nauyi na iya haɗawa da ajiye bayanai, sabuntawa, gabatar da rahotanni da biyan haraji.",
            "Iri da aka saba: kasuwancin mai shi ɗaya (sole proprietorship), wanda sau da yawa ake yi masa rajista a matsayin sunan kasuwanci; haɗin gwiwa (partnership), masu shi biyu ko fiye da ke raba riba da bashi; da kamfani mai iyakantaccen alhaki (limited company), wanda mutum ne na shari'a daban, don haka gidaje da ajiyar masu shi sun fi samun kariya daga bashin kasuwanci, amma takardunsa sun fi yawa. Sunaye sun bambanta daga ƙasa zuwa ƙasa: Najeriya da Ghana suna rajistar sunayen kasuwanci da kamfanoni; a Kenya, Business Registration Service ce ke kula da sunayen kasuwanci da kamfanoni.",
            "A ƙasashe 17 na OHADA, ciki har da Senegal, Côte d'Ivoire, Cameroon, Mali, Burkina Faso da DR Congo, dokar kasuwanci ɗaya ce. Ƙaramin ɗan kasuwa yana iya yin rajista a matsayin kasuwancin mutum ɗaya (entreprise individuelle) ko ya kafa kamfani kamar SARL. A Morocco, ƙananan masu sayarwa da yawa suna amfani da matsayin auto-entrepreneur.",
            "Yawancin 'yan kasuwar kasuwa da masu sana'a suna farawa a matsayin mai shi ɗaya ko sunan kasuwanci. Kamfani yana iya dacewa idan kuna da abokan haɗin gwiwa, manyan kwangiloli ko manyan haɗari. Don babbar shawara, ku tambayi ofishin rajista ko ƙwararren akawu ko lauya."
          ],
          steps: ["Ku rubuta wane ne ya mallaki kasuwancin: ku kaɗai, ko tare da wasu.", "Ku rubuta babban haɗari: bashi, rauni, manyan kwangiloli.", "Ku kwatanta sunan kasuwanci (mai shi ɗaya), haɗin gwiwa da kamfani.", "Ku zaɓi ɗaya ku rubuta fa'ida ɗaya da nauyi ɗaya."],
          words: [["Mai shi ɗaya (sole proprietor)", "kasuwancin da mutum ɗaya ya mallaka kuma yake gudanarwa, kuma shi da kansa ne ke da alhakin bashinsa."], ["Kamfani mai iyakantaccen alhaki (limited company)", "kasuwancin da yake mutum na shari'a da kansa, don haka kayan masu shi sun fi samun kariya daga bashinsa."], ["OHADA", "ƙungiyar ƙasashen Afirka 17 da ke da dokokin kasuwanci iri ɗaya, galibi a Yammaci da Tsakiyar Afirka."]],
          slides: [
            { title: "Me yasa za a yi rajista?", bullets: ["Asusun bankin kasuwanci da kwangiloli", "Kasuwannin intanet, bashi da shirye-shiryen tallafi", "Amincewar abokan ciniki", "Nauyi: bayanai, sabuntawa, rahotanni, haraji"] },
            { title: "Iri uku da aka saba", bullets: ["Mai shi ɗaya / sunan kasuwanci: mai shi ɗaya", "Haɗin gwiwa: masu shi biyu ko fiye", "Kamfani: mutum na shari'a daban, takardu sun fi yawa"] },
            { title: "Afirka mai Faransanci da Arewacin Afirka", bullets: ["Ƙasashe 17 na OHADA suna da dokar kasuwanci ɗaya", "Entreprise individuelle ko kamfani kamar SARL", "Morocco: matsayin auto-entrepreneur"] },
            { title: "Yadda ake zaɓa", bullets: ["Yawancin ƙananan 'yan kasuwa suna farawa da sunan kasuwanci", "Kamfani: abokan haɗin gwiwa, manyan kwangiloli, manyan haɗari", "Babbar shawara? Ku tambayi ofishin rajista ko ƙwararre"] }
          ],
          tryIt: "Ku rubuta masu kasuwancinku da babban haɗarinsa. Sannan ku zaɓi irin kasuwanci ku rubuta fa'ida ɗaya da nauyi ɗaya na wannan irin.",
          youCanNow: "kwatanta irin kasuwancin da aka saba da zaɓar wanda ya dace da kasuwancinku.",
          quickCheck: [
            { objective: "O1", q: "Fatima tana sayar da yadi ita kaɗai a wata kasuwa a Kano. Da wane irin kasuwanci ne yawancin 'yan kasuwa kamar ta suke farawa?", options: ["Babban kamfanin jama'a", "Sunan kasuwanci a matsayin mai shi ɗaya", "Hukumar gwamnati", "Ƙungiyar agaji"], answer: 1, why: "Mai shi ɗaya mai ƙaramin kasuwanci yawanci yana farawa da sunan kasuwanci." },
            { objective: "O1", q: "Mene ne babban dalili ɗaya na zaɓar kamfani mai iyakantaccen alhaki?", options: ["Ba shi da takardu", "Ba ya taɓa biyan haraji", "Yana fi kare kayan masu shi daga bashin kasuwanci", "Ba zai iya buɗe asusun banki ba"], answer: 2, why: "Kamfani mutum ne na shari'a daban, wanda ke iyakance haɗarin masu shi." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Nemo ofishin rajista na hukuma, da guje wa wakilan bogi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Nemo ofishin rajistar kasuwanci na hukuma na ƙasarku ku buɗe shafinsa na hukuma.",
          text: [
            "Kowace ƙasa tana da ofishin hukuma da ke rajistar kasuwanci. Kenya: Business Registration Service (BRS), ta intanet ta eCitizen. Najeriya: Corporate Affairs Commission (CAC). Ghana: Office of the Registrar of Companies (ORC). Senegal: APIX, cibiyar buɗe kasuwanci a wuri ɗaya. Côte d'Ivoire: CEPICI. A Morocco, matsayin auto-entrepreneur yana da nasa shafin ƙasa.",
            "Ku yi amfani da shafin hukuma ko ofishin hukuma kaɗai. Shafukan gwamnati na hukuma sau da yawa suna ƙarewa da ƙarshen adireshin gwamnatin ƙasar, kamar .go.ke, .gov.ng ko .gov.gh. Akwai shafukan da aka kwaikwaya da mutanen da ke tayin rajista \"cikin sauri\" ko \"kyauta\"; shafin BRS na Kenya da kansa yana gargaɗi game da tayin rajista \"kyauta\" na bogi.",
            "Kuna iya biyan wakili mai izini ko lauya don ya taimaka, amma ku tabbatar cewa na gaske ne, ku nemi rasit na hukuma, kuma ku tabbata an yi rajistar kasuwancin da sunanku. Kada ku taɓa ba kowa kalmar sirrin asusunku na eCitizen, CAC ko wani, ko code na lokaci ɗaya da aka turo wayarku.",
            "Idan shafi bai buɗe ba, ku sake gwadawa daga baya, ko ku je ofishin rajistar ko cibiyar hidimar gwamnati. Kada ku biya baƙo a maimakon haka."
          ],
          steps: ["Ku rubuta ofishin rajistar ƙasarku daga jerin da ke wannan darasi.", "Ku rubuta adireshinsa da kanku; kada ku danna hanyoyin haɗi daga saƙonnin da ba ku sani ba.", "Ku duba ƙarshen adireshin, kamar .go.ke, .gov.ng ko .gov.gh.", "Idan kuna amfani da wakili, ku tabbatar na gaske ne ku karɓi rasit na hukuma.", "Kada ku taɓa bayar da kalmar sirrinku ko code na lokaci ɗaya."],
          words: [["Ofishin rajista (registry)", "ofishin gwamnati da ke rubuta kasuwanci da kamfanoni."], ["Shafin da aka kwaikwaya", "shafin bogi da aka yi ya yi kama da na hukuma, sau da yawa don karɓar kuɗinku."], ["Code na lokaci ɗaya (one-time code)", "gajeren code da ake turo wayarku don tabbatar cewa ku ne; kada ku taɓa bayar da shi."]],
          slides: [
            { title: "Ofisoshin rajista na hukuma", bullets: ["Kenya: BRS ta eCitizen", "Najeriya: Corporate Affairs Commission (CAC)", "Ghana: Registrar of Companies (ORC)", "Senegal: APIX; Côte d'Ivoire: CEPICI"] },
            { title: "Ku yi amfani da shafin hukuma kaɗai", bullets: ["Ku rubuta adireshin da kanku", "Ku duba ƙarshe kamar .go.ke, .gov.ng, .gov.gh", "Ku yi hankali da tayin rajista \"cikin sauri\" ko \"kyauta\""] },
            { title: "Idan kuna amfani da wakili", bullets: ["Ku tabbatar na gaske ne", "Ku karɓi rasit na hukuma", "Dole kasuwancin ya kasance da SUNANKU"] },
            { title: "Kada ku taɓa bayarwa", bullets: ["Kalmar sirrin asusunku", "Code na lokaci ɗaya da aka turo wayarku"] }
          ],
          tryIt: "Ku nemo ofishin rajistar kasuwanci na ƙasarku. Ku rubuta adireshin shafinsa da kanku, ku duba ƙarshensa, sannan ku rubuta adireshin da hidima ɗaya da ya jera.",
          youCanNow: "nemo ofishin rajistar kasuwanci na hukuma na ƙasarku da bambance shafin gaskiya da na bogi.",
          quickCheck: [
            { objective: "O2", q: "A ina ake rajistar sunan kasuwanci a Najeriya?", options: ["Corporate Affairs Commission (CAC)", "Ƙungiyar WhatsApp", "Kowane banki", "Ofishin 'yan sanda"], answer: 0, why: "CAC ce ke rajistar sunayen kasuwanci, kamfanoni da ƙungiyoyin amintattu a Najeriya." },
            { objective: "O2", q: "Wani saƙo yana tayin \"rajistar kasuwanci kyauta cikin awa 1\" ta hanyar haɗi. Me za ku yi?", options: ["Ku danna ku biya da sauri", "Ku aika kalmar sirrinku", "Ku tura shi ga abokai", "Ku ƙyale hanyar haɗin ku rubuta adireshin ofishin rajista na hukuma da kanku"], answer: 3, why: "Tayin bogi suna amfani da hanyoyin haɗi; shafin hukuma da kuka rubuta da kanku yana da aminci." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Shirya jerin abubuwan rajistarku",
          objectives: ["O3"],
          minutes: 5,
          goal: "Shirya jerin abubuwan rajista don ku iya nema a zama ɗaya.",
          text: [
            "Fom na intanet yana iya rufewa idan lokaci ya wuce, kuma data tana da kuɗi. Ku shirya komai tukuna, sannan ku nema a zama ɗaya.",
            "Yawancin ofisoshin rajista suna neman abubuwa iri ɗaya: sunayen kasuwanci uku da za a iya amfani da su (idan an riga an ɗauki zaɓinku na farko; BRS ta Kenya tana neman zaɓi uku), cikakkun sunayen masu shi da bayanan katin shaidar ƙasa ko fasfo, waya da imel, adireshin kasuwanci ko wurinsa, gajeren bayanin aikin kasuwancin, wani lokaci kuma hoton fasfo ko sa hannu. Kamfani yana kuma buƙatar daraktoci, masu hannun jari da dokokinsa. Ainihin jerin yana shafin ofishin rajistar.",
            "Ku zaɓi sunaye masu sarari da wani bai riga ya yi amfani da su ba, kuma da ba su kwaikwayi sanannen suna ba. Misali: Kofi a Takoradi ya jera \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" da \"Sea Gold Fish Supplies\".",
            "Ku rubuta kuɗin da aka nuna a shafin hukuma a lokacin da kuke nema, da yadda ake biya. Ku ajiye kowane rasit da takardar shaidar rajista, a takarda da kuma hoto a wuri mai aminci."
          ],
          steps: ["Ku rubuta zaɓin suna uku.", "Ku jera sunayen masu shi, bayanan katin shaida, waya da imel.", "Ku rubuta adireshi ko wuri da aikin kasuwancin.", "Ku karanta jerin ofishin rajistar don ƙarin takardu.", "Ku rubuta kuɗin yanzu da hanyar biya daga shafin hukuma.", "Ku nema a zama ɗaya ku ajiye kowane rasit da takardar shaida."],
          words: [["Binciken suna / ajiye suna", "duba cewa sunan kasuwanci ba a ɗauke shi ba, da riƙe muku shi yayin da kuke rajista."], ["Takardar shaidar rajista (certificate)", "takardar hukuma da ke nuna cewa kasuwancinku ya yi rajista."], ["Darakta (director)", "mutumin da ke gudanar da kamfani kuma yana da nauyin shari'a a kansa."]],
          slides: [
            { title: "Ku shirya tukuna, ku nema sau ɗaya", bullets: ["Fom yana iya rufewa idan lokaci ya wuce", "Data tana da kuɗi", "Ku shirya komai"] },
            { title: "Abin da ake yawan nema", bullets: ["Zaɓin suna uku", "Sunayen masu shi, katin shaida, waya da imel", "Adireshi da aikin kasuwanci", "Kamfani: daraktoci da masu hannun jari"] },
            { title: "Sunaye masu kyau", bullets: ["Masu sarari kuma ba a riga an yi amfani da su ba", "Kada ku kwaikwayi sanannen suna", "Ku duba jerin ofishin rajistar"] },
            { title: "Bayan kun nema", bullets: ["Ku rubuta kuɗin daga shafin hukuma", "Ku ajiye kowane rasit", "Ku ajiye takardar shaida, a takarda da hoto"] }
          ],
          tryIt: "Ku rubuta jerin abubuwan rajistarku: zaɓin suna uku, bayanan masu shi (ba tare da rubuta lambar katin shaidarku a wurin da ake rabawa ba), adireshi, aikin kasuwanci, takardu, da shafin ofishin rajistar.",
          youCanNow: "shirya jerin abubuwan rajista don ku iya nema a zama ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za a shirya zaɓin sunan kasuwanci uku?", options: ["Doka tana buƙatar kasuwanci uku", "Idan an riga an ɗauki zaɓinku na farko", "Don ruɗar wakilan bogi", "Don biyan ƙarancin haraji"], answer: 1, why: "Idan an ɗauki sunanku na farko, zaɓi na gaba yana hana sake neman rajista." },
            { objective: "O3", q: "A ina za ku sami ainihin takardun da ofishin rajistarku yake buƙata?", options: ["Tunawar maƙwabci", "Sharhi a kafofin sada zumunta", "Shafin hukuma ko ofishin rajistar", "Talla daga wakilin da ba ku sani ba"], answer: 2, why: "Sharuɗɗa suna canjawa, kuma ofishin rajista ne kaɗai ke da tabbaci." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓi da rajista",
        questions: [
          { objective: "O1", q: "Abokai biyu sun buɗe kasuwancin dafa abinci tare kuma suna raba riba. Wane irin kasuwanci ne wannan ya fi kama da shi?", options: ["Mai shi ɗaya", "Hukumar gwamnati", "Haɗin gwiwa ko kamfani", "Ƙungiyar agaji"], answer: 2, why: "Masu shi biyu ko fiye da ke raba riba haɗin gwiwa ne, ko kuma suna iya kafa kamfani." },
          { objective: "O1", q: "A Senegal da Côte d'Ivoire, dokar kasuwanci tana fitowa daga:", options: ["Dokokin kowane gari kaɗai", "OHADA, wadda ƙasashe 17 suke rabawa", "Kasuwar intanet da kuke sayarwa", "Bankinku"], answer: 1, why: "Dokokin kasuwanci ɗaya na OHADA suna aiki a ƙasashe mambobinta." },
          { objective: "O2", q: "Wane ƙarshen adireshin shafi ne alamar shafin gwamnatin Kenya?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Shafukan gwamnatin Kenya yawanci suna ƙarewa da .go.ke." },
          { objective: "O2", q: "Wani wakili yana tayin yi muku rajistar kasuwanci. Me dole ku tabbatar?", options: ["Cewa yana da ofis mai kyau", "Cewa yana da sauri", "Cewa tsabar kuɗi kaɗai yake karɓa", "Cewa na gaske ne, yana ba da rasit na hukuma kuma ya yi rajistar da sunanku"], answer: 3, why: "Wakili na gaske, rasit na hukuma da sunanku a kan kasuwancin suna kare ku." },
          { objective: "O3", q: "Me ya kamata ku ajiye bayan rajista?", options: ["Babu komai", "Saƙon tes kawai", "Takardar shaidar rajista da kowane rasit, a takarda da hoto", "Maganar wakilin"], answer: 2, why: "Za ku buƙaci takardar shaida da rasit don banki, sabuntawa da kwangiloli." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da shi yadda ya kamata",
      lessons: [
        {
          title: "Lambar haraji da izinin gida",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jera lambar haraji da izinin da kasuwancinku yake buƙata da inda ake samun kowanne.",
          text: [
            "Rajistar suna sau da yawa mataki na farko ne kawai. Yawancin kasuwanci suna kuma buƙatar lambar shaidar haraji, izinin kasuwanci na gida, kuma, don wasu nau'o'in aiki, izinin sana'a.",
            "Lambar haraji: a Kenya, KRA PIN daga Kenya Revenue Authority, wadda kuke samu a iTax; ana buƙatar ta don rajistar kasuwanci da wasu harkoki da yawa. A Najeriya, hukumar haraji ta tarayya ita ce Nigeria Revenue Service (NRS), kuma kowace jiha tana da nata hukumar haraji ta cikin gida. A Ghana, Ghana Revenue Authority tana amfani da TIN ɗinku ko Ghana Card PIN, kuma tana da tsarin haraji na musamman ga ƙananan kasuwanci (Modified Taxation Scheme). Ku tambayi ofishin haraji wane harajin ƙananan kasuwanci ne ya shafe ku.",
            "Izinin gida: garuruwa da gundumomi da yawa suna buƙatar izinin ciniki ko na kasuwanci, wanda ake sabuntawa akai-akai. A Kenya daga gwamnatin county ɗinku ne; a Najeriya daga gwamnatin jiha ko ta ƙaramar hukuma; a Ghana daga majalisar gunduma ko ta birni (assembly). Izinin sana'a: masu sayar da abinci, gidajen gyaran gashi, asibitoci, sufuri da wasu na iya buƙatar takardar shaidar lafiya ko lasisi daga hukumar sana'ar.",
            "Ku tambaya a ofishin ƙaramar hukuma ko cibiyar tallafin kasuwanci kamar SMEDAN a Najeriya. Ku rubuta kowane sharaɗi, ofishin, da ranar da kuka tabbatar. Lambar katin shaidarku ta ƙasa ko lambar harajinku sirri ce: kada ku saka ta a intanet ko ku aika wa baƙi."
          ],
          steps: ["Ku nemo hukumar harajinku ku tambayi yadda ƙaramin kasuwanci ke samun lambar haraji.", "Ku tambayi county, jiha, ƙaramar hukuma ko majalisarku game da izinin ciniki.", "Ku tambaya ko irin aikinku yana buƙatar takardar shaidar lafiya ko lasisin sana'a.", "Ku rubuta kowanne, ofishin, da ranar da kuka tabbatar."],
          words: [["Lambar shaidar haraji (TIN)", "lambar da ofishin haraji yake ba ku don gabatar da biyan haraji; a Kenya ita ce KRA PIN."], ["Izinin ciniki (trading permit)", "izini daga ƙaramar hukumarku don gudanar da kasuwanci a wannan yanki."], ["Izinin sana'a (sector permit)", "lasisi don wasu nau'o'in aiki, kamar abinci, lafiya ko sufuri."]],
          slides: [
            { title: "Bayan suna: ƙarin abubuwa uku", bullets: ["Lambar haraji", "Izinin ciniki na gida", "Izinin sana'a don wasu nau'o'in aiki"] },
            { title: "Lambobin haraji", bullets: ["Kenya: KRA PIN a iTax", "Najeriya: Nigeria Revenue Service da hukumar harajin jiha", "Ghana: GRA, TIN ko Ghana Card PIN"] },
            { title: "Izinin gida da na sana'a", bullets: ["County, jiha, ƙaramar hukuma ko majalisa", "Abinci, gyaran gashi, sufuri na iya buƙatar ƙari", "Ku tambayi cibiyar tallafin kasuwanci"] },
            { title: "Ku rubuta shi", bullets: ["Kowane sharaɗi da ofishinsa", "Ranar da kuka tabbatar", "Ku kiyaye lambobin katin shaida da haraji a sirri"] }
          ],
          tryIt: "Ku yi tebur mai layi uku: lambar haraji, izinin gida, izinin sana'a. Ga kowanne, ku rubuta ofishin, shafinsa ko adireshinsa, da ko ya shafe ku. Ku tabbatar da aƙalla ɗaya da ofishin a wannan makon.",
          youCanNow: "jera lambar haraji da izinin da kasuwancinku yake buƙata da ofishin kowanne.",
          quickCheck: [
            { objective: "O4", q: "A Kenya, ta yaya ake samun KRA PIN?", options: ["Daga kwamitin kasuwa", "A iTax, daga Kenya Revenue Authority", "Daga manajan bankinku", "Daga wakili a WhatsApp"], answer: 1, why: "KRA tana ba da PIN ta tsarinta na iTax." },
            { objective: "O4", q: "Grace ta buɗe rumfar abinci a Accra. Ban da rajista, me ya kamata ta tambaya?", options: ["Babu wani abu", "Lasisin tuƙi", "Izinin ciniki da duk wata takardar shaidar abinci ko lafiya", "Fasfo"], answer: 2, why: "Izinin gida da sharuɗɗan tsaftar abinci sau da yawa suna shafar masu sayar da abinci." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "Littafin kuɗi mai sauƙi: raba kuɗin kasuwanci",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rubuta kowace sayarwa da kowane kashewa a littafin kuɗi mai sauƙi na mako ɗaya.",
          text: [
            "Bayanai suna nuna ko da gaske kuna samun kuɗi. Suna kuma taimakawa da haraji, bashi da sabuntawa. Ku fara a sauƙaƙe: littafin rubutu ko shafin rubutu a waya.",
            "Littafin kuɗi yana da ginshiƙai huɗu: rana, abin da ya faru, kuɗin shigowa, kuɗin fita. Ku rubuta kowace sayarwa da kowane kashewa a ranar, har da kuɗin waya. A ƙarshen rana ko mako, ku haɗa kuɗin shigowa, ku haɗa kuɗin fita, ku cire ɗaya daga ɗaya. Misali daga Douala: ranar Litinin, Paul ya sayar da murfin waya 12 kan 24,000 XAF kuma ya sayi kaya kan 15,000 XAF; kuɗin shigowa ban da kuɗin fita shi ne 9,000 XAF (lambobin misali).",
            "Ku raba kuɗin kasuwanci da kuɗin gida. Idan kun ɗauki kuɗi don abinci ko kuɗin makaranta, ku rubuta shi a matsayin \"mai shi ya ɗauka\" don ku gan shi. Layin kuɗin waya ko asusu daban don kasuwanci yana sauƙaƙa wannan. Ku ajiye rasit a ambulan ko ku ɗauki hotunansu."
          ],
          steps: ["Ku zana ginshiƙai huɗu: rana, abin da ya faru, kuɗin shigowa, kuɗin fita.", "Ku rubuta kowace sayarwa da kashewa a ranar.", "Ku rubuta kuɗin da kuka ɗauka don gida a matsayin \"mai shi ya ɗauka\".", "A ƙarshen mako, ku haɗa kowane ginshiƙi ku nemo bambancin.", "Ku ajiye rasit a ambulan ko a matsayin hotuna."],
          words: [["Littafin kuɗi (cash book)", "rubutu mai sauƙi na kuɗin da ke shigowa kasuwanci da wanda ke fita."], ["Mai shi ya ɗauka (drawings)", "kuɗin da mai shi yake ɗauka daga kasuwanci don amfanin kansa."]],
          slides: [
            { title: "Me yasa za a ajiye bayanai", bullets: ["Ku ga ko da gaske kuna samun kuɗi", "Ana buƙata don haraji, bashi da sabuntawa"] },
            { title: "Ginshiƙai huɗu", bullets: ["Rana", "Abin da ya faru", "Kuɗin shigowa", "Kuɗin fita"] },
            { title: "Ku raba kuɗin kasuwanci", bullets: ["Ku rubuta kashewar gida a matsayin \"mai shi ya ɗauka\"", "Layin kuɗin waya daban yana taimakawa", "Ku ajiye rasit ko hotunansu"] }
          ],
          tryIt: "Ku fara littafin kuɗi yau. Ku rubuta kowace sayarwa da kowane kashewa na mako ɗaya, har da kuɗin da kuka ɗauka don gida. A rana ta ƙarshe, ku haɗa kowane ginshiƙi ku rubuta bambancin.",
          youCanNow: "ajiye littafin kuɗi mai sauƙi da raba kuɗin kasuwanci da kuɗin gida.",
          quickCheck: [
            { objective: "O5", q: "Mene ne ginshiƙai huɗu na littafin kuɗi mai sauƙi?", options: ["Rana, abin da ya faru, kuɗin shigowa, kuɗin fita", "Suna, shekaru, gari, waya", "Farashi, launi, girma, alama", "Litinin zuwa Alhamis"], answer: 0, why: "Waɗannan ginshiƙai huɗu suna nuna kowane motsin kuɗi." },
            { objective: "O5", q: "Kun ɗauki 2,000 NGN daga kasuwanci don abinci a gida. Me za ku rubuta?", options: ["Babu komai", "Sayarwa", "Sabon abokin ciniki", "\"Mai shi ya ɗauka 2,000 NGN\" a kuɗin fita"], answer: 3, why: "Rubuta abin da mai shi ya ɗauka yana sa bayanan su zama na gaskiya." }
          ]
        },
        {
          title: "Ci gaba da rajista: sabuntawa, rahotanni da kalandar shekara",
          objectives: ["O6"],
          minutes: 5,
          goal: "Zana kalandar sabuntawa, rahotanni da ranakun izini ta kowace shekara.",
          text: [
            "Yin rajista sau ɗaya ba shi ne ƙarshe ba. Kasuwanci da yawa dole su sabunta, su gabatar da rahoton shekara (annual return) ko rahoton haraji, kuma su sabunta izinin gida. Rasa wata rana na iya kawo tara ko rasa rajistar.",
            "Misalai: ORC ta Ghana ta ce rahoton shekara wajibi ne ga dukkan kamfanonin da aka yi wa rajista, kuma ana iya sabunta sunayen kasuwanci ta intanet, har da ta danna *222#. CAC ta Najeriya tana kula da rahotannin shekara. KRA ta Kenya tana sa ran rahotanni daga mutanen da ke da nauyin haraji. Izinin gida sau da yawa yana aiki na shekara ɗaya. Ainihin ranaku da kuɗaɗe sun bambanta, don haka ku tabbatar da kowanne a shafin hukuma ko a ofishin.",
            "Ku yi kalandar shekara: ku rubuta kowane nauyi, ofishin, watan da ya kamata a yi shi da ranar da kuka tabbatar. Ku saka tunatarwa a wayarku wata ɗaya kafin. Ku ci gaba da rubuta littafin kuɗinku, domin rahotanni suna amfani da waɗannan lambobi.",
            "Idan ba ku da tabbacin abin da ya shafe ku, ku tambayi ofishin rajista, ofishin haraji, cibiyar tallafin kasuwanci ko ƙwararren akawu. Idan wani ya kira yana cewa za a soke rajistarku yau sai dai idan kun biya shi yanzu, ku fara tabbatarwa da ofishin rajista da kanku."
          ],
          steps: ["Ku jera kowane nauyi: sabuntawa, rahoton shekara, rahoton haraji, sabunta izini.", "Ku tabbatar da kowace rana da ofishi a shafin hukuma.", "Ku rubuta su a kalandar watanni 12.", "Ku saka tunatarwa a waya wata ɗaya kafin kowace rana.", "Ku tabbatar da buƙatun biyan kuɗi na gaggawa da ofishin rajista da kanku."],
          words: [["Rahoton shekara (annual return)", "rahoto na kowace shekara ga ofishin rajista cewa kasuwancinku yana nan kuma bayanansa daidai ne."], ["Sabuntawa (renewal)", "sake biya ko gabatarwa don rajista ko izini ya ci gaba da aiki."], ["Tara (penalty)", "kuɗin hukunci saboda latti ko karya doka."]],
          slides: [
            { title: "Rajista ba ita ce ƙarshe ba", bullets: ["Sabuntawa da rahotannin shekara", "Rahotannin haraji", "Sabunta izinin gida"] },
            { title: "Misalai", bullets: ["ORC ta Ghana: rahoton shekara na kamfanoni; sabunta suna ta *222#", "CAC ta Najeriya: rahotannin shekara", "KRA ta Kenya: rahotanni idan kuna da nauyin haraji"] },
            { title: "Kalandar shekararku", bullets: ["Nauyi, ofishi, watan da za a yi", "Ranar da kuka tabbatar", "Tunatarwa a waya wata ɗaya kafin"] },
            { title: "Ku zauna lafiya", bullets: ["Ba ku da tabbaci? Ku tambayi ofishin ko akawu", "Kiran \"ku biya yanzu\" na gaggawa: ku tabbatar da ofishin rajista da kanku"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa jerin abubuwan rajistarku da irin kasuwancinku, ofishin rajista, zaɓin suna, takardu, lambar haraji da izini, tsarin littafin kuɗi, da kalandar watanni 12 ta sabuntawa da rahotanni tare da tunatarwa a saka.",
          youCanNow: "tsara sabuntawa da rahotanninku na shekara don kasuwancinku ya ci gaba da rajista kuma ya kasance cikin tsari mai kyau.",
          quickCheck: [
            { objective: "O6", q: "Yaushe ya kamata ku saka tunatarwa don sabuntawa?", options: ["Bayan ranar ta wuce", "Ba a taɓa ba", "Kusan wata ɗaya kafin lokacinsa", "Sai idan wani ya kira ku"], answer: 2, why: "Tunatarwa wata ɗaya kafin tana ba ku lokacin shiryawa da biya." },
            { objective: "O6", q: "Wani mai kira ya ce za a soke kasuwancinku yau sai dai idan kun biya shi yanzu. Me za ku yi?", options: ["Ku tabbatar da ofishin rajista da kanku kafin ku biya kowa", "Ku biya shi da sauri", "Ku aika kalmar sirrinku", "Ku rufe kasuwancin"], answer: 0, why: "Buƙatar biyan kuɗi ta gaggawa alamar zamba ce; ofishin rajista da kansa zai iya faɗa muku matsayinku." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da shi yadda ya kamata",
        questions: [
          { objective: "O4", q: "Ban da rajistar suna, kasuwanci da yawa suna kuma buƙatar:", options: ["Lambar haraji da izinin ciniki na gida", "Babu komai", "Sabuwar waya", "Asusun kasuwar intanet"], answer: 0, why: "Lambobin haraji da izinin gida sun bambanta da rajistar suna." },
          { objective: "O4", q: "A ina za ku tambayi game da izinin ciniki a Kenya?", options: ["Wakilin kuɗin waya", "Gwamnatin county ɗinku", "Makaranta", "Gidan rediyo"], answer: 1, why: "Gwamnatocin county a Kenya suna ba da izinin kasuwanci na yankinsu." },
          { objective: "O5", q: "Me yasa za a raba kuɗin kasuwanci da na gida?", options: ["Ya fi daɗi", "Don banki ya biya ku", "Don ku ga ko da gaske kasuwancin yana samun kuɗi", "Don kada ku biya haraji"], answer: 2, why: "Haɗa kuɗi yana ɓoye ko kasuwancin yana samun riba." },
          { objective: "O5", q: "Makonku yana nuna kuɗin shigowa 40,000 KES da kuɗin fita 31,000 KES. Bambancin shi ne:", options: ["71,000 KES", "31,000 KES", "40,000 KES", "9,000 KES"], answer: 3, why: "40,000 ban da 31,000 shi ne 9,000." },
          { objective: "O6", q: "Mene ne rahoton shekara (annual return)?", options: ["Rahoto na kowace shekara ga ofishin rajista cewa kasuwancin da bayanansa suna nan daidai", "Mayar da kuɗi daga abokan ciniki", "Hutu", "Bashin banki"], answer: 0, why: "Rahotannin shekara suna sabunta bayanan kasuwancinku a ofishin rajista." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Rajista da Gudanar da Ƙaramin Kasuwanci a Afirka",
    questions: [
      { objective: "O1", q: "Wace ce fa'idar rajistar kasuwanci?", options: ["Rashin biyan haraji har abada", "Buɗe asusun bankin kasuwanci da samun kwangiloli", "Ba a buƙatar bayanai", "Babu wani nauyi kwata-kwata"], answer: 1, why: "Rajista tana buɗe asusun banki, kwangiloli da shirye-shirye, tare da nauyi ma." },
      { objective: "O1", q: "Mai shi ɗaya (sole proprietor) shi ne:", options: ["Kasuwancin da mutum ɗaya ya mallaka", "Ofishin gwamnati", "Kamfani mai masu hannun jari da yawa", "Ƙungiyar ajiya"], answer: 0, why: "Mai shi ɗaya, wanda shi da kansa ke da alhakin kasuwancin." },
      { objective: "O1", q: "Ƙananan masu sayarwa da yawa a Morocco suna amfani da:", options: ["Kamfanin jama'a", "SARL na OHADA kaɗai", "Matsayin auto-entrepreneur", "Rashin rajista har abada"], answer: 2, why: "Morocco tana da matsayin auto-entrepreneur don ƙananan ayyuka." },
      { objective: "O1", q: "Wane ne ya kamata ku tambaya kafin babbar shawara game da irin kasuwancinku?", options: ["Baƙo a intanet", "Babu kowa", "Mai sayarwa a kasuwa", "Ofishin rajista ko ƙwararren akawu ko lauya"], answer: 3, why: "Ofishin rajista ko ƙwararre zai iya ba da shawara game da halinku." },
      { objective: "O2", q: "A Ghana, wane ne ke rajistar sunayen kasuwanci?", options: ["Office of the Registrar of Companies (ORC)", "Ghana Revenue Authority kaɗai", "Wakilin kuɗin waya", "Coci"], answer: 0, why: "ORC ce ke rajistar sunayen kasuwanci da kamfanoni a Ghana." },
      { objective: "O2", q: "A Kenya, kuna rajistar kasuwanci ta intanet ta:", options: ["Shafin Facebook", "eCitizen, tare da Business Registration Service", "Ƙungiyar WhatsApp ta sirri", "Manhajar bankinku"], answer: 1, why: "Ana yin rajistar BRS ta intanet ta eCitizen." },
      { objective: "O2", q: "Wace ce hanya mafi aminci don isa shafin ofishin rajista?", options: ["Danna hanyar haɗi a cikin tes da ba ku sani ba", "Amfani da tallar da ke tasowa (pop-up)", "Rubuta adireshin hukuma da kanku ku duba ƙarshensa", "Neman baƙo ya yi da kalmar sirrinku"], answer: 2, why: "Rubuta adireshin da kanku yana guje wa shafukan da aka kwaikwaya." },
      { objective: "O3", q: "Kafin ku fara rajista ta intanet, ya kamata ku:", options: ["Shirya dukkan sunaye, bayanai da takardu tukuna", "Fara kawai ku yi fata", "Ba wakili kalmar sirrinku", "Biya baƙo"], answer: 0, why: "Shiryawa tana bar ku gama a zama ɗaya kuma tana adana data." },
      { objective: "O3", q: "Sunan kasuwanci mai kyau shi ne:", options: ["Kwaikwayon sanannen suna", "Mai sarari kuma wani kasuwanci bai riga ya yi amfani da shi ba", "Mai tsayi sosai kuma mai wuyar rubutawa", "Iri ɗaya da na maƙwabcinku"], answer: 1, why: "Suna mai sarari da ba a yi amfani da shi ba ya fi yiwuwa a karɓe shi." },
      { objective: "O3", q: "A ina za ku sami kuɗin rajista na yanzu?", options: ["Tsohon fosta", "Jita-jita", "Hasashenku", "Shafin hukuma ko ofishin rajistar"], answer: 3, why: "Kuɗaɗe suna canjawa, don haka majiyar hukuma ce kaɗai ke da tabbaci." },
      { objective: "O4", q: "KRA PIN ita ce:", options: ["PIN na kuɗin waya", "Kalmar sirri da ake rabawa", "Lambar shaidar haraji ta Kenya", "Izinin kasuwanci"], answer: 2, why: "KRA PIN ita ce lambar harajinku a Kenya Revenue Authority." },
      { objective: "O4", q: "Hukumar haraji ta tarayyar Najeriya ita ce:", options: ["Nigeria Revenue Service (NRS)", "Corporate Affairs Commission", "SMEDAN", "Ƙungiyar kasuwarku ta gida"], answer: 0, why: "NRS ita ce hukumar haraji ta tarayyar Najeriya; jihohi suna da nasu hukumomin haraji." },
      { objective: "O4", q: "Gidan gyaran gashi ko rumfar abinci na iya kuma buƙatar:", options: ["Lasisin matuƙin jirgin sama", "Babu wani abu", "Digirin jami'a", "Takardar shaidar lafiya ko lasisin sana'a"], answer: 3, why: "Wasu nau'o'in aiki suna buƙatar izinin sana'a don lafiya da tsaro." },
      { objective: "O5", q: "Littafin kuɗi yana rubuta:", options: ["Ranakun haihuwar abokan ciniki", "Kuɗin shigowa da na fita, tare da ranaku", "Manyan sayarwa kaɗai", "Bashin banki kaɗai"], answer: 1, why: "Yana rubuta kowane motsin kuɗi, tare da rana da abin da ya faru." },
      { objective: "O5", q: "Yaushe ya kamata ku rubuta sayarwa a littafin kuɗi?", options: ["Sau ɗaya a shekara", "Sai lokacin da kuka tuna", "A ranar", "Ba a taɓa ba don kuɗin waya"], answer: 2, why: "Rubutawa a ranar yana sa bayanan su cika kuma su zama na gaskiya." },
      { objective: "O5", q: "Kuɗin da kuka ɗauka daga kasuwanci don kuɗin makaranta ana rubuta shi a matsayin:", options: ["\"Mai shi ya ɗauka\" a kuɗin fita", "Sayarwa", "Babu komai", "Kyauta daga abokin ciniki"], answer: 0, why: "Rubuta abin da mai shi ya ɗauka yana sa kuɗin kasuwanci da na gida su kasance a sarari." },
      { objective: "O6", q: "ORC ta Ghana tana barin a sabunta sunayen kasuwanci:", options: ["Da kai kawai a ƙasar waje", "Ba a taɓa ba", "Ta intanet, har da ta danna *222#", "Ta wakili a WhatsApp"], answer: 2, why: "ORC ta ce ana iya sabuntawa ta intanet da ta *222#." },
      { objective: "O6", q: "Kalandar bin ƙa'idoji ta shekara tana jera:", options: ["Ranakun hutu kaɗai", "Adireshin abokan ciniki", "Wasannin ƙwallon ƙafa", "Kowace sabuntawa, rahoto da izini, ofishinsa da watan da za a yi"], answer: 3, why: "Kalanda ɗaya tana sa kowane nauyi da rana a gani." },
      { objective: "O6", q: "Rasa sabuntawa ko rahoton shekara na iya kawo:", options: ["Kyauta", "Tara ko rasa rajista", "Ƙarancin farashi", "Babu komai har abada"], answer: 1, why: "Gabatarwa a latti na iya kawo tara ko cire kasuwanci daga rajista." },
      { objective: "O6", q: "Kafin kowace ranar da za a yi abu, ya kamata ku:", options: ["Tabbatar da ranar a shafin hukuma ku saka tunatarwa", "Jira mai kira ya tunatar da ku", "Biya duk wanda ya nema", "Ƙyale shi"], answer: 0, why: "Tabbatarwa a hukumance da saka tunatarwa suna sa ku cika lokaci kuma ku tsira daga zamba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Irin kasuwanci", objective: "O1", notYet: "Ba a zaɓi irin kasuwanci ba, ko ba a ba da dalili ba.", meets: "An zaɓi irin kasuwanci tare da fa'ida ɗaya da nauyi ɗaya, wanda ya dace da masu shi da haɗarin.", exceeds: "Ya kwatanta iri biyu kuma ya faɗi lokacin da kasuwancin zai iya canja irinsa." },
      { name: "Ofishin rajista na hukuma", objective: "O2", notYet: "Ba a ambaci ofishin rajista ba, ko an yi amfani da shafi ko wakilin da ba na hukuma ba.", meets: "Ofishin rajista na hukuma daidai da shafinsa na hukuma ko adireshin ofishinsa.", exceeds: "Ya kuma rubuta yadda ake gane shafin bogi ko wakilin bogi." },
      { name: "Jerin abubuwan rajista", objective: "O3", notYet: "Babu zaɓin suna, bayanan masu shi ko aikin kasuwanci.", meets: "Sunaye uku, bayanan masu shi, adireshi, aikin kasuwanci, takardu da kuɗi daga shafin hukuma.", exceeds: "Ya kuma ambaci takardun da kamfani zai buƙata, ko inda za a ajiye takardar shaida lafiya." },
      { name: "Lambar haraji da izini", objective: "O4", notYet: "Ba a jera lambar haraji ko izini ba, ko ba a ambaci ofishi ba.", meets: "Lambar haraji, izinin gida da duk wani izinin sana'a, kowanne da ofishinsa da ranar da aka tabbatar.", exceeds: "An tabbatar da aƙalla ɗaya da ofishin da kai ko ta waya." },
      { name: "Littafin kuɗi", objective: "O5", notYet: "Babu littafin kuɗi, ko an haɗa kuɗin kasuwanci da na gida.", meets: "Bayanan mako ɗaya da ginshiƙai huɗu, rubuce-rubucen \"mai shi ya ɗauka\" da jimloli na mako daidai.", exceeds: "Layin kuɗi ko asusu daban na kasuwanci, kuma an ajiye rasit." },
      { name: "Kalandar shekara", objective: "O6", notYet: "Babu kalanda, ko an yi hasashen ranaku.", meets: "Kalandar watanni 12 ta sabuntawa, rahotanni da izini tare da ofisoshi, ranakun da aka tabbatar da tunatarwa a saka.", exceeds: "Ya rubuta wanda za a tambaya (ofishin rajista, ofishin haraji ko akawu) don kowane nauyi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajistar kasuwancinsu ko suka sami izini cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ajiye littafin kuɗi aƙalla makonni huɗu bayan kwas ɗin",
      "Masu koyo da suka buɗe asusun bankin kasuwanci ko na kuɗin waya, suka sami kwangila ko suka shiga shirin tallafi cikin watanni shida"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfutar shagon intanet (cyber café) mai intanet",
      "Littafin rubutu don jerin abubuwan rajista, littafin kuɗi da kalanda",
      "Adireshin shafukan hukuma na ofishin rajistarku, hukumar harajinku da ƙaramar hukumarku",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, tare da atisayen littafin kuɗi na mako ɗaya"
    ],
    facilitatorNotes: [
      "Kafin kwas ɗin, ku nemo ofishin rajista, hukumar haraji da ofishin izinin gida na ƙasarku da garinku a shafukansu na hukuma, ku buga adireshinsu.",
      "Kada ku taɓa karɓar lambobin katin shaida, kalmomin sirri ko lambobin haraji na masu koyo; jerin abubuwan suna faɗin abin da ake buƙata, ba lambobin kansu ba.",
      "Ku gayyaci wani daga ofishin rajista, cibiyar tallafin kasuwanci (misali SMEDAN a Najeriya) ko akawu na yankin don amsa tambayoyi.",
      "Kada ku faɗi kuɗaɗe ko wa'adi daga ka; ku nuna wa masu koyo yadda ake tabbatar da su a shafin hukuma.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
