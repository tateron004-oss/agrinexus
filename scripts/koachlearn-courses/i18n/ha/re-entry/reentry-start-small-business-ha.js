"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-start-small-business.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-start-small-business-ha",
  lang: "ha",
  translationOf: "reentry-start-small-business",
  category: "Re-Entry",
  name: "Yadda Ake Kafa da Fara Ƙaramar Sana'a",
  skills: "Zaɓar sana'ar da za ku iya farawa yanzu, Samun abokan ciniki da sa farashi, Rubuta tsarin sana'a na shafi ɗaya da AI, Zaɓar tsarin sana'a da suna, Samun EIN kyauta da lasisin da ya dace, Ajiye bayanan kuɗi da shirin haraji",
  outcome: "rubuta tsarin sana'a na shafi ɗaya don ƙaramar sana'ar hidima da taimakon AI, da yin jerin matakan kafa sana'a bisa matakan hukuma na Amurka: tsarin sana'a da suna, EIN kyauta daga IRS, lasisin da birninku, gundumarku (county) da jiharku suke buƙata, asusun banki na daban, da bayanan kuɗi don haraji.",
  about: [
    "Mutane da yawa da ke dawowa gida suna zaɓar yin aiki don kansu: share-share, kula da ciyawa, taimakon ƙaura, wanke mota sosai, aski, girki, fenti, gyare-gyaren gida da sauransu. Mallakar sana'a na iya ba ku kuɗin shiga, 'yanci da makoma, ko da wasu masu ɗaukar aiki suna jinkirin ɗaukar ku.",
    "A Babi na 1 za ku zaɓi ra'ayin sana'a da ya dace da ƙwarewarku, ku gano su wane ne abokan cinikinku da nawa za ku caje, sannan ku rubuta tsari na shafi ɗaya da mataimakin AI. A Babi na 2 za ku koyi matakan hukuma na kafa sana'a a Amurka: tsarin sana'a, suna, EIN kyauta daga IRS, lasisi, asusun banki, bayanan kuɗi da haraji, da inda za ku sami taimako kyauta.",
    "Dokoki sun bambanta a kowace jiha, gunduma (county) da birni, kuma suna canjawa. Wannan kwas ɗin yana ba ku matakan da wuraren hukuma da za ku duba, kamar sba.gov da irs.gov; ba shawarar shari'a ko ta haraji ba ce. Kada ku taɓa rubuta lambar Social Security ɗinku, bayanan shari'arku ko bayanan bankinku a AI. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsarin sana'a na shafi ɗaya don ƙaramar sana'ar hidima da taimakon AI (hidimar, abokan ciniki, farashi, yadda abokan ciniki za su same ku, kuɗin farawa). Sannan ku yi jerin matakan kafa sana'arku: tsarin sana'arku, sunan sana'arku da ko yana buƙatar DBA, samun EIN kyauta a irs.gov, lasisin da za ku duba a birninku, gundumarku da jiharku, buɗe asusun banki na daban, da yadda za ku ajiye bayanan kuɗi ku kuma ware kuɗi don haraji. Ku sa shafin intanet na hukuma na kowane mataki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari waɗanda suke son yin aiki don kansu da ƙaramar sana'ar hidima, kamar share-share, kula da ciyawa, taimakon ƙaura, wanke mota sosai, aski, girki, fenti ko gyare-gyaren gida.",
    startingPoint: "Suna da ƙwarewar hannu kuma suna iya amfani da waya. Ba su da ƙwarewa sosai, ko kwata-kwata, a tsarin sana'a, sa farashi, rajistar sana'a, EIN, lasisi, asusun bankin sana'a ko bayanan haraji.",
    gap: "Wasu masu ɗaukar aiki suna jinkirin ɗaukar mutanen da ke da tarihin laifi, kuma aiki don kai na iya ba da kuɗin shiga da 'yanci. Masu koyo suna buƙatar mayar da ƙwarewa zuwa sana'a mai tsari, su kuma bi matakan hukuma na kafa sana'a a Amurka, don su guji zamba, tara da matsalar haraji.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani ko kwamfutar ɗakin karatu mai intanet",
      "Lokaci: darussa na kusan minti 5 da suka dace da aiki da ganawa",
      "Dokoki sun bambanta a kowace jiha, gunduma da birni kuma suna canjawa; kwas ɗin yana nuna shafukan hukuma kuma ba shawarar shari'a ko ta haraji ba ce",
      "Sirri: kada ku taɓa rubuta lambar Social Security, bayanan shari'a ko bayanan banki a AI"
    ],
    prerequisites: "Kwas ɗin \"Sarrafa Kuɗi da Rayuwa da Taimakon AI\" yana da amfani, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ƙwarewarku da kuɗin da za ku iya farawa da su", action: "zaɓar ra'ayin sana'a da ya dace da ƙwarewarku, kuɗinku da halin da kuke ciki", standard: "mai ƙaramin kuɗin farawa, kuma an duba duk wani lasisin jiha da ake buƙata" },
    { id: "O2", condition: "Idan aka ba ku ra'ayin sana'arku", action: "bayyana abokan cinikinku da sa farashin farawa", standard: "da jimla ɗaya takamaimai game da abokan ciniki, da farashin da ya rufe kuɗin kashewa, lokaci da haraji" },
    { id: "O3", condition: "Ta amfani da mataimakin AI da ke yi muku tambayoyi", action: "rubuta tsarin sana'a na shafi ɗaya", standard: "wanda ya ƙunshi hidima, abokan ciniki, farashi, yadda abokan ciniki za su same ku da kuɗin farawa, da bayanan gaskiya daga gare ku" },
    { id: "O4", condition: "Idan aka ba ku ra'ayin sana'arku da sunanta", action: "zaɓar tsarin sana'a da gano ko sunanku yana buƙatar DBA", standard: "da dalilin zaɓinku, kuma an sami shafin gwamnati na hukuma" },
    { id: "O5", condition: "Ta amfani da irs.gov da shafukan gwamnatin yankinku", action: "nemo takardar neman EIN kyauta da lasisin da sana'arku take buƙata", standard: "da adireshin hukuma na kowanne, ba tare da hidimar EIN ta kuɗi ba" },
    { id: "O6", condition: "Idan aka ba ku sabuwar sana'a", action: "shirya asusun banki na daban, bayanan kuɗi masu sauƙi, kuɗin haraji da taimako kyauta", standard: "da littafin bayanai mai kwanan wata, wane ne, mene ne da nawa, kuma an ambaci SCORE ko SBDC mafi kusa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara sana'arku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar sana'ar da za ku iya farawa yanzu",
          minutes: 5,
          goal: "Zaɓi ra'ayin sana'a da ya dace da ƙwarewarku, kuɗinku da halin da kuke ciki.",
          text: [
            "Sana'ar farko mafi kyau sau da yawa mai sauƙi ce: hidimar da kuka riga kuka iya, wadda ba ta buƙatar kuɗi da yawa don farawa, kuma mutanen yankinku suna biya a kanta. Misalai: share gida ko ofis, kula da ciyawa, wanke wuri da ruwa mai ƙarfi (pressure washing), kwashe shara da tsofaffin kaya, taimakon ƙaura, wanke mota sosai, fenti, girki, gyaran gashi, ɗinki ko gyare-gyare.",
            "Ku nemi mataimakin AI ya taimaka muku tunani: \"Na koyi girki da share-share, kuma ina da kusan $300 don farawa. Har yanzu ba ni da mota. Ka ba ni ƙananan sana'o'in hidima guda biyar da zan iya farawa a birnina, da abin da kowace take buƙata don farawa.\"",
            "Wasu ayyuka suna buƙatar lasisin jiha, kamar aski, gyaran gashi da kwalliya (cosmetology), aikin wutar lantarki ko aikin kwangilar gini, kuma wasu hukumomin lasisi suna da dokoki game da mutanen da ke da tarihin laifi. Kafin ku zaɓi ɗaya daga cikinsu, ku duba shafin intanet na hukuma na hukumar lasisin jiharku, ko ku tambayi shirin taimakon masu dawowa gida. Jihohi da yawa sun canja waɗannan dokoki, don haka kada ku ɗauka cewa an hana ku."
          ],
          steps: ["Ku rubuta ƙwarewarku da abin da kuke so.", "Ku rubuta kuɗin farawarku da kayan aikinku, kamar mota.", "Ku nemi AI ya ba ku 'yan ra'ayoyin sana'a da suka dace.", "Ku duba ko ra'ayi yana buƙatar lasisin jiha.", "Ku zaɓi ra'ayi ɗaya don ku tsara shi."],
          words: [["Sana'ar hidima", "sana'ar da ke yi wa mutane aiki, kamar share-share ko gyare-gyare, maimakon sayar da kaya."], ["Kuɗin farawa", "kuɗin da kuke buƙata don farawa, kamar kayan aiki da kayayyaki."], ["Hukumar lasisi (licensing board)", "ofishin jiha da ke ba da lasisi don wasu ayyuka."]],
          slides: [
            { title: "Ku fara da mai sauƙi", bullets: ["Hidimar da kuka riga kuka iya", "Ƙaramin kuɗi don farawa", "Mutanen kusa suna biya a kanta"] },
            { title: "Ku nemi ra'ayoyi daga AI", bullets: ["Ƙwarewarku", "Kuɗinku da kayan aikinku", "\"Ka ba ni sana'o'i biyar da zan iya farawa.\""] },
            { title: "Aiki mai buƙatar lasisi?", bullets: ["Aski, wutar lantarki, kwangilar gini da sauransu", "Ku duba hukumar lasisin jiharku", "Dokoki sun canja a jihohi da yawa"] }
          ],
          tryIt: "Ku rubuta ƙwarewarku uku mafi kyau da yawan kuɗin da za ku iya farawa da su. Ku nemi mataimakin AI ya ba ku ra'ayoyin ƙananan sana'o'i biyar da suka dace, sannan ku zaɓi ɗaya.",
          youCanNow: "zaɓar ra'ayin ƙaramar sana'a da ya dace da ƙwarewarku da kuɗinku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne kuɗin farawa?", options: ["Kuɗin da ake buƙata don farawa, kamar kayan aiki da kayayyaki", "Ribarku ta kowane mako", "Harajin da kuke biya kowace shekara", "Farashin da kuke caje abokan ciniki"], answer: 0, why: "Kuɗin farawa shi ne abin da kuke kashewa don fara sana'ar." },
            { objective: "O1", q: "Kuna son fara sana'ar gyaran wutar lantarki. Me za ku fara yi?", options: ["Ku fara karɓar aiki nan take", "Ku tambayi AI ko kuna buƙatar lasisi ku amince da amsar", "Ku duba shafin intanet na hukuma na hukumar lasisin jiharku", "Ku buga katin sana'a"], answer: 2, why: "Sana'o'i da yawa suna buƙatar lasisin jiha, kuma hukumar hukuma ce ke da ainihin dokokin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abokan ciniki da farashi",
          minutes: 5,
          goal: "Bayyana abokan cinikinku kuma ku sa farashin farawa da ya rufe kuɗin kashewarku.",
          text: [
            "Sana'a tana buƙatar abokan ciniki da za su biya. Ku faɗi su wane ne a sarari: \"iyalai masu yawan aiki a unguwata\", \"ƙananan ofisoshi a tsakiyar gari\", \"tsofaffin masu gida da ba sa iya yanka ciyawa\". Sanin su yana nuna muku inda za ku same su.",
            "Don sa farashi, ku haɗa kuɗin kashewarku na aiki ɗaya (kayayyaki, kuɗin mai ko na bas, da lokacinku), sannan ku duba abin da wasu na kusa suke caje. Ku tambayi AI: \"Ina son yin share-share na gida a Atlanta. Kayayyakina suna kashe kusan $10 a kowane aiki, kuma aiki ɗaya yana ɗaukar awa 3. Ta yaya zan iya lissafa farashin farawa mai adalci? Me nake buƙatar dubawa game da farashin yankina?\" Sannan ku duba ainihin farashin yankinku ta hanyar duba tallace-tallacen yanki ko kiran wasu sana'o'i.",
            "Kada ku sa farashi mai ƙaranci har ku yi asara. Farashi ya kamata ya biya kuɗin kashewarku, lokacinku, da ɗan ƙari don haraji da ajiya."
          ],
          steps: ["Ku bayyana abokan cinikinku a jimla ɗaya.", "Ku haɗa kuɗin kashewarku na aiki ɗaya.", "Ku yanke darajar lokacinku a kowace awa.", "Ku duba abin da wasu na kusa suke caje.", "Ku sa farashin da ya rufe kuɗin kashewa, lokaci da haraji."],
          words: [["Abokin ciniki", "mutum ko kamfani da ke biyan kuɗin hidimarku."], ["Riba", "kuɗin da ya rage bayan kun biya kuɗin kashewarku."]],
          slides: [
            { title: "Ku san abokan cinikinku", bullets: ["Ku faɗi su a sarari", "\"Iyalai masu yawan aiki a unguwata\"", "Yana nuna muku inda za ku same su"] },
            { title: "Ku lissafa farashinku", bullets: ["Kuɗin kashewa na aiki ɗaya", "Lokacinku", "Abin da wasu na kusa suke caje"] },
            { title: "Kada farashi ya yi ƙasa sosai", bullets: ["Ya rufe kuɗin kashewa da lokaci", "Ya bar wuri don haraji da ajiya"] }
          ],
          tryIt: "Don ra'ayinku, ku rubuta jimla ɗaya da ke bayyana abokan cinikinku. Ku nemi AI ya taimaka muku lissafa farashin farawa daga kuɗin kashewarku da lokacinku, sannan ku duba ainihin farashi biyu na yankinku.",
          youCanNow: "bayyana abokan cinikinku da sa farashin farawa da ya rufe kuɗin kashewarku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne riba?", options: ["Duk kuɗin da abokan ciniki suke biyan ku", "Kuɗin da ya rage bayan kuɗin kashewa", "Kuɗin kayan aikinku", "Kuɗin da kuka ranta"], answer: 1, why: "Riba ita ce abin da ya rage bayan kun biya kuɗin kashewarku." },
            { objective: "O2", q: "AI ya ba da shawarar farashin kula da ciyawa da ya yi ƙasa sosai. Me za ku yi?", options: ["Ku yi amfani da shi don samun ƙarin abokan ciniki", "Ku ninka shi ba tare da tunani ba", "Ku nemi abokai su yi hasashen farashi", "Ku duba kuɗin kashewarku da lokacinku, sannan ku kwatanta ainihin farashi biyu na yankinku"], answer: 3, why: "Farashi dole ya rufe kuɗin kashewarku da lokacinku, kuma farashin yanki yana nuna abin da abokan ciniki suke biya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsarin sana'a na shafi ɗaya da AI",
          minutes: 6,
          goal: "Rubuta tsarin sana'a na shafi ɗaya da mataimakin AI.",
          text: [
            "Tsarin sana'a (business plan) taswirarku ce. SBA (hukumar ƙananan sana'o'i ta Amurka) tana bayanin gajeren tsari na \"lean startup\" da ya isa shafi ɗaya, wanda ya ƙunshi abubuwa kamar abokan cinikinku, amfanin da kuke bayarwa, yadda kuke kaiwa ga abokan ciniki, kuɗin kashewarku da yadda kuke samun kuɗi.",
            "Ku tambayi AI: \"Ka taimake ni in rubuta tsarin sana'a na shafi ɗaya don sana'ar kula da ciyawa a garina. Ka yi amfani da waɗannan kanun: abin da nake bayarwa, su wane ne abokan cinikina, me yasa za su zaɓe ni, yadda za su same ni, kuɗin farawa, farashi, da burina na watan farko. Ka yi mini tambayoyi ɗaya bayan ɗaya don cike shi.\" Ku amsa da kalmominku.",
            "Ku karanta tsarin da aka gama a hankali. Ku canja duk abin da ba gaskiya ba ne ko ba zai yiwu ba. Kuna iya nuna shi ga mai ba da shawara (mentor); SCORE yana ba da shawara kyauta (duba Darasi na 6)."
          ],
          steps: ["Ku nemi AI ya yi muku tambayoyi ɗaya bayan ɗaya.", "Ku yi amfani da kanun masu sauƙi: abin da kuke bayarwa, abokan ciniki, me yasa ku, yadda za su same ku, kuɗi, farashi, burin farko.", "Ku amsa da kalmominku.", "Ku gyara duk abin da ba zai yiwu ba.", "Ku ajiye shi ku nuna wa mai ba da shawara."],
          words: [["Tsarin sana'a (business plan)", "rubutaccen tsarin yadda sana'arku za ta yi aiki ta samu kuɗi."], ["Tsarin lean startup", "gajeren tsarin sana'a na shafi ɗaya."]],
          slides: [
            { title: "Taswirarku ta shafi ɗaya", bullets: ["Tsarin lean startup na SBA ya isa shafi ɗaya", "Abokan ciniki, amfani, kaiwa gare su, kuɗin kashewa, samun kuɗi"] },
            { title: "Ku bar AI ya yi muku tambayoyi", bullets: ["\"Ka yi mini tambaya ɗaya bayan ɗaya.\"", "Ku amsa da kalmominku"] },
            { title: "Ku sa ya zama na gaske", bullets: ["Ku gyara abin da ba zai yiwu ba", "Ku nuna shi ga mai ba da shawara"] }
          ],
          sources: [{ name: "SBA: Rubuta tsarin sana'arku (Write your business plan)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Ku nemi mataimakin AI ya yi muku tambayoyi ɗaya bayan ɗaya, ya rubuta tsari na shafi ɗaya don ra'ayin sana'arku. Ku ajiye tsarin.",
          youCanNow: "rubuta tsarin sana'a na shafi ɗaya da taimakon AI.",
          quickCheck: [
            { objective: "O3", q: "Mene ne tsarin sana'a na lean startup?", options: ["Rahoto mai shafi 50 don banki", "Gajeren tsari na shafi ɗaya", "Jerin sunayen sana'a", "Takardar haraji"], answer: 1, why: "Tsarin lean yana sa muhimman sassan sana'a a shafi ɗaya." },
            { objective: "O3", q: "AI ya rubuta tsarinku kuma ya ƙara yawan abokan ciniki da ba ku taɓa ba shi ba. Me za ku yi?", options: ["Ku cire shi ko ku sa ainihin bayananku a madadinsa", "Ku bar shi domin yana da kyau", "Ku ƙara wasu lambobi irinsa", "Ku tura tsarin ga mai ba da rance kamar yadda yake"], answer: 0, why: "Ku ne kuke ba da bayanan gaskiya a tsarinku, ba AI ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara sana'arku",
        questions: [
          { objective: "O1", q: "Wace ce yawanci sana'ar farko mafi kyau?", options: ["Wadda ba ku san komai game da ita ba", "Sana'ar da ke buƙatar $100,000 don farawa", "Hidima mai sauƙi da kuka riga kuka iya, mai ƙaramin kuɗin farawa", "Wadda babu abokan ciniki a kusa"], answer: 2, why: "Ƙaramin kuɗi da ƙwarewar da kuka sani suna rage haɗari." },
          { objective: "O1", q: "Kuna son zama mai aski. Me ya kamata ku fara dubawa?", options: ["Dokokin hukumar lasisin jiharku", "Babu komai", "Jita-jita a kafofin sada zumunta", "AI kaɗai"], answer: 0, why: "Aski yana buƙatar lasisin jiha, kuma hukumomi ne ke sa dokokin." },
          { objective: "O2", q: "Wane bayanin abokan ciniki ne ya fi amfani?", options: ["\"Kowa mai kuɗi\"", "\"Kowa da kowa\"", "\"Mutane\"", "\"Tsofaffin masu gida a unguwata da ba sa iya yanka ciyawa\""], answer: 3, why: "Abokan ciniki takamaimai suna nuna muku inda za ku same su." },
          { objective: "O2", q: "Farashi mai kyau yana rufe:", options: ["Kayayyaki kawai", "Kuɗin kashewarku, lokacinku da wani abu don haraji", "Babu komai; ku yi aiki kyauta", "Duk abin da mai gasa mafi araha yake caje, ko da da asara"], answer: 1, why: "Farashi dole ya rufe kuɗin kashewa kuma ya biya ku." },
          { objective: "O3", q: "Ta yaya AI zai fi taimakawa wajen rubuta tsarin sana'a?", options: ["Ƙirƙirar bayanai game da sana'arku", "Yi muku tambayoyi ɗaya bayan ɗaya", "Sa hannu a takardun shari'a", "Samo muku EIN"], answer: 1, why: "Ku ne kuke ba da bayanan gaskiya; AI yana tsara su." }
        ]
      }
    },
    {
      name: "Babi na 2: Kafa ta ta hanyar hukuma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsarin sana'a da sunan sana'a",
          minutes: 6,
          goal: "Zaɓi tsarin sana'a kuma ku gano ko sunan sana'arku yana buƙatar rajista.",
          text: [
            "SBA ta bayyana cewa idan kun fara kasuwanci ba tare da yin rajista a matsayin wani nau'i ba, kai tsaye kun zama sole proprietorship (sana'ar mutum ɗaya). Ita ce mafi sauƙi: ku da sana'ar ɗaya kuke a wajen haraji da bashi, don haka ku da kanku ne ke da alhakin bashin sana'ar.",
            "Limited liability company (LLC, kamfani mai iyakantaccen alhaki) ana yi masa rajista da jiharku, yawanci ta ofishin Secretary of State (sakataren jiha), kuma yawanci yana kare kayanku na kai idan an kai sana'ar ƙara ko ta shiga bashi, ko da yake wannan kariya tana da iyaka. Kafa shi yana buƙatar kuɗi kuma yana iya samun kuɗin shekara-shekara, waɗanda suka bambanta a kowace jiha; ku duba shafin Secretary of State ɗinku don farashin yanzu.",
            "Idan kuna amfani da sunan sana'a da ba sunanku na shari'a ba, kamar \"Fresh Start Cleaning\", yawancin jihohi suna buƙatar ku yi masa rajista a matsayin DBA (\"doing business as\", wato \"kasuwanci da sunan\") da jiha, gunduma ko birni. Idan kuna kasuwanci da sunanku na shari'a, SBA ta ce wataƙila ba sai kun yi rajista a ko'ina ba. Ku tambayi ƙwararren haraji ko abokin hulɗar SBA wane tsari ne ya dace da ku."
          ],
          steps: ["Ku yanke: sole proprietorship (kai tsaye) ko LLC (rajista da jiha).", "Don LLC, ku duba farashi a shafin Secretary of State ɗinku.", "Ku zaɓi sunan sana'a.", "Idan ba sunanku na shari'a ba ne, ku gano inda ake rajistar DBA a jiharku, gundumarku ko birninku.", "Ku tambayi ƙwararren haraji ko abokin hulɗar SBA idan ba ku tabbata ba."],
          words: [["Sole proprietorship", "sana'ar da mutum ɗaya ya mallaka, babu rabuwa tsakanin mai ita da sana'ar."], ["LLC", "limited liability company: sana'a mai rajista da yawanci take kare kayan kai na mai ita."], ["DBA", "\"doing business as\": sunan sana'a mai rajista da ba sunanku na shari'a ba."]],
          slides: [
            { title: "Sole proprietorship", bullets: ["Kai tsaye idan kun fara kasuwanci", "Mafi sauƙi", "Ku da kanku ne ke da alhakin bashi"] },
            { title: "LLC", bullets: ["Ana yin rajista da jiharku", "Yawanci yana kare kayanku na kai", "Farashi ya bambanta a kowace jiha: ku duba Secretary of State"] },
            { title: "Sunan sana'arku", bullets: ["Ba sunanku na shari'a ba? Yawanci ku yi rajistar DBA", "Da jiharku, gundumarku ko birninku", "Dokoki sun bambanta: ku duba a yankinku"] }
          ],
          sources: [{ name: "SBA: Zaɓar tsarin sana'a (Choose a business structure)", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }, { name: "SBA: Yi rajistar sana'arku (Register your business)", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" }],
          tryIt: "Ku yanke ko za ku fara a matsayin sole proprietorship ko LLC, ku rubuta dalili. Ku zaɓi sunan sana'a, sannan ku nemi \"register DBA\" tare da sunan gundumarku ko jiharku, ku nemo shafin gwamnati na hukuma (sau da yawa yana ƙarewa da .gov).",
          youCanNow: "zaɓar tsarin sana'a da gano yadda ake rajistar sunan sana'arku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar DBA?", options: ["Daily business account (asusun sana'a na yau da kullum)", "Department of business affairs (sashen harkokin sana'a)", "Doing business as (kasuwanci da sunan)", "Direct bank authorization (izinin banki kai tsaye)"], answer: 2, why: "DBA yana nufin doing business as, wato suna da ya bambanta da sunanku na shari'a." },
            { objective: "O4", q: "Kuna son kiran sana'arku \"Shine Car Care\". Me za ku yi?", options: ["Ku yi amfani da shi ba tare da duba komai ba", "Ku nemo shafin DBA na hukuma na gundumarku ko jiharku", "Ku biya wani shafin intanet na kowa ya yi rajista", "Ku nemi AI ya yi muku rajista"], answer: 1, why: "Yawancin jihohi suna buƙatar rajistar sunan sana'a da ba sunanku na shari'a ba, a shafin hukuma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "EIN ɗinku kyauta da lasisin da ya dace",
          minutes: 6,
          goal: "Nemo takardar neman EIN ta IRS kyauta da lasisi da izinin da sana'arku take buƙata.",
          text: [
            "EIN (Employer Identification Number) lambar shaidar haraji ce ta sana'arku. IRS (hukumar haraji ta Amurka) ta ce \"You never have to pay a fee for an EIN\" (ba sai kun taɓa biyan kuɗi don EIN ba), kuma tana gargaɗi game da shafukan da ke cajin kuɗi a kansa. Ku nema kai tsaye a irs.gov. Idan an amince, ana ba da lambar nan take ta intanet. Dole ku gama a zama ɗaya, don haka ku ware lokaci; shafin yana buɗe ne a wasu awoyi kawai, waɗanda aka jera a irs.gov. Masu sana'ar mutum ɗaya da ba su da ma'aikata sau da yawa suna iya amfani da lambar Social Security ɗinsu a maimakon haka, amma da yawa suna buɗe EIN don raba sana'a da harkokin kai.",
            "Lasisi da izini suna fitowa daga matakan gwamnati daban-daban. SBA ta bayyana cewa lasisin tarayya (federal) don wasu ayyuka ne kawai (kamar giya ko jiragen sama); jihohi suna ba da lasisi ga sana'o'i da yawa; birane da gundumomi kuma sau da yawa suna buƙatar lasisin sana'a na gaba ɗaya da izini don abubuwa kamar abinci, gini ko tallace-tallace a titi.",
            "Don nemo naku: ku duba shafukan birninku da gundumarku don lasisin sana'a, shafin jiharku don lasisin sana'o'i da rajistar harajin sayarwa (sales tax) idan kuna sayar da kaya, sannan ku tambayi cibiyar Small Business Development Center (SBDC) ta yankinku. Ku rubuta ainihin lambobinku a shafukan .gov na hukuma kaɗai, ba a AI ba."
          ],
          steps: ["Ku je irs.gov ku nemi \"apply for an EIN\"; kada ku taɓa biyan wani shafi don shi.", "Ku duba awoyin buɗe shafin ku gama a zama ɗaya.", "Ku buga ko ku ajiye takardar tabbatar da EIN ɗinku.", "Ku duba birninku da gundumarku don lasisin sana'a da izini.", "Ku duba jiharku don lasisin sana'o'i da rajistar harajin sayarwa."],
          words: [["EIN", "Employer Identification Number: lambar shaidar haraji ta sana'a kyauta daga IRS."], ["Lasisi", "izinin hukuma daga gwamnati don gudanar da sana'a ko yin wasu ayyuka."], ["Izini (permit)", "izinin hukuma don wani takamaiman aiki, kamar sayar da abinci."]],
          slides: [
            { title: "EIN: kyauta daga IRS", bullets: ["\"You never have to pay a fee for an EIN\" (ba a biyan kuɗi)", "Ku nema a irs.gov, ana bayarwa nan take ta intanet", "Ku gama a zama ɗaya, a lokacin buɗewa"] },
            { title: "Lasisi yana fitowa daga matakai 3", bullets: ["Tarayya: wasu ayyuka kawai", "Jiha: sana'o'i da yawa, harajin sayarwa", "Birni da gunduma: lasisin sana'a, izini"] },
            { title: "Nemo naku", bullets: ["Shafukan birni da gunduma", "Shafin jiha", "Ku tambayi SBDC na yankinku"] }
          ],
          sources: [{ name: "IRS: Samun lambar EIN (Get an employer identification number)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Neman lasisi da izini (Apply for licenses and permits)", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" }],
          tryIt: "Ku buɗe shafin EIN na IRS a irs.gov ku rubuta awoyin buɗewa da abin da kuke buƙata don nema (kada ku nema tukuna sai kun shirya). Sannan ku nemo shafin lasisin sana'a na birninku ko gundumarku ku rubuta adireshinsa.",
          youCanNow: "samun EIN kyauta daga IRS da nemo lasisi da izinin da sana'arku take buƙata.",
          quickCheck: [
            { objective: "O5", q: "Daga ina lasisin sana'a na gaba ɗaya yawanci yake fitowa?", options: ["IRS", "Bankinku", "Wani shafin intanet na kamfani", "Birninku ko gundumarku"], answer: 3, why: "Birninku ko gundumarku ne yawanci ke ba da lasisin sana'a na gaba ɗaya." },
            { objective: "O5", q: "Wani shafin intanet yana tayin samo muku EIN a kan $150. Me za ku yi?", options: ["Ku biya domin ya fi sauri", "Ku nema kyauta a irs.gov a maimakon haka", "Ku nemi aboki ya biya", "Ku daina neman EIN har abada"], answer: 1, why: "IRS tana ba da EIN kyauta a shafinta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Asusun banki, bayanan kuɗi, haraji da taimako kyauta",
          minutes: 6,
          goal: "Shirya bayanan kuɗi masu sauƙi, ku yi shirin haraji, ku kuma nemo taimakon sana'a kyauta.",
          text: [
            "Ku raba kuɗin sana'a. SBA tana ba da shawarar buɗe asusun bankin sana'a da zarar kun fara karɓa ko kashe kuɗi don sana'ar. Bankuna sau da yawa suna neman EIN (ko lambar Social Security ɗinku don sole proprietorship), takardun kafa sana'a da lasisin sana'a; ku tambayi bankinku abin da yake buƙata.",
            "Ku ajiye bayanin kowace dala da ta shigo da ta fita: takardar lissafi (spreadsheet) mai sauƙi ko littafin rubutu mai kwanan wata, wane ne, mene ne da nawa, tare da rasit. AI zai iya tsara muku takardar bayanai mai sauƙi: \"Ka yi mini littafin kuɗin shiga da kashewa mai sauƙi don sana'ar share-share.\" Kada ku sa ainihin bayanan bankinku a ciki.",
            "Haraji: IRS ta ce masu aiki don kansu dole su cike takardar haraji idan ribarsu (net earnings) ta kai $400 ko fiye, kuma yawanci suna biyan harajin aiki don kai (self-employment tax: Social Security da Medicare) da kuma harajin kuɗin shiga, sau da yawa a matsayin biyan kuɗi na kiyasi kowane wata uku. Takardun sun haɗa da Schedule C, Schedule SE da Form 1040-ES. Masu sana'a da yawa suna ware wani ɓangare na kowane biya don haraji; ƙwararren haraji ko taimakon haraji kyauta zai iya faɗa muku nawa. Taimakon sana'a kyauta: SCORE yana ba da masu ba da shawara masu sa kai ba tare da kuɗi ba, kuma Small Business Development Centers da Women's Business Centers suna ba da shawarwari; ku nemo su a sba.gov."
          ],
          steps: ["Ku buɗe asusun bankin sana'a na daban; ku tambayi bankin abin da yake buƙata.", "Ku ajiye littafin kowace dala da ta shigo da ta fita, tare da rasit.", "Ku ware wani ɓangare na kowane biya don haraji.", "Ku koyi takardun: Schedule C, Schedule SE, 1040-ES a irs.gov.", "Ku sami taimako kyauta daga SCORE, SBDC ko Women's Business Center."],
          words: [["Harajin aiki don kai (self-employment tax)", "harajin Social Security da Medicare da masu aiki don kansu suke biya."], ["Harajin kiyasi (estimated tax)", "harajin da ake biya a cikin shekara, yawanci kowane wata uku, idan babu mai ɗaukar aiki da ke cire shi."], ["Kuɗin kashewa (expense)", "kuɗin da kuke kashewa don gudanar da sana'ar."]],
          slides: [
            { title: "Ku raba kuɗin sana'a", bullets: ["Ku buɗe asusun bankin sana'a", "Bankuna suna neman EIN ko SSN, takardu, lasisi"] },
            { title: "Ku ajiye bayanan kuɗi", bullets: ["Kowace dala da ta shigo da ta fita", "Kwanan wata, wane ne, mene ne, nawa, rasit", "AI zai iya tsara littafin; babu bayanan banki"] },
            { title: "Ku shirya don haraji", bullets: ["Ku cike takarda idan riba ta kai $400 ko fiye", "Harajin aiki don kai da harajin kuɗin shiga", "Schedule C, Schedule SE, 1040-ES"] },
            { title: "Taimako kyauta", bullets: ["Masu ba da shawara na SCORE ba tare da kuɗi ba", "Small Business Development Centers", "Ku nemo su a sba.gov"] }
          ],
          sources: [{ name: "SBA: Buɗe asusun bankin sana'a (Open a business bank account)", url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account" }, { name: "IRS: Cibiyar haraji ta masu aiki don kansu (Self-employed individuals tax center)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "SBA: Abokan hulɗa masu taimako (Resource partners)", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          tryIt: "Aikin ƙarshe: ku gama tsarinku na shafi ɗaya ku yi jerin matakan kafa sana'arku tare da shafin hukuma na kowane mataki: tsari, suna da DBA, EIN kyauta a irs.gov, lasisin birni, gunduma da jiha, asusun banki na daban, littafin bayanai da aka yi da AI, kuɗin da aka ware don haraji, da SCORE ko SBDC mafi kusa da ku.",
          youCanNow: "tsara ƙaramar sana'a da kafa ta ta hanyar hukuma, tare da bayanan kuɗi, shirin haraji da taimako kyauta.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata bayanin sana'a mai kyau ya ƙunsa?", options: ["Kwanan wata, wane ne, mene ne da nawa, tare da rasit", "Jimillar shekara kawai", "Lambar Social Security ɗinku", "Kuɗin da kuka karɓa kawai"], answer: 0, why: "Bayanai masu sarari tare da rasit suna taimakawa a lokacin haraji kuma suna nuna yadda sana'ar take tafiya." },
            { objective: "O6", q: "An biya ku tsabar kuɗi don aikin share-share. Me za ku yi?", options: ["Ku kashe duka nan take", "Kada ku rubuta komai domin tsabar kuɗi ne", "Ku rubuta shi, ku sa shi a asusun sana'arku, ku ware wani abu don haraji", "Ku sa shi a asusun aboki"], answer: 2, why: "Rubuta kuɗin shiga, raba kuɗin sana'a da ajiye kuɗin haraji suna kare ku daga matsala." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kafa ta ta hanyar hukuma",
        questions: [
          { objective: "O4", q: "Kun fara share gidaje ba tare da rajistar kowane nau'in sana'a ba. Ku:", options: ["Ƙungiya marar riba ce (nonprofit)", "LLC ce", "Kamfani ne (corporation)", "Sole proprietorship ce"], answer: 3, why: "SBA ta ce sole proprietorship tana kafuwa kai tsaye." },
          { objective: "O4", q: "Sunan sana'arku \"Fresh Start Cleaning\" ne, ba sunanku na shari'a ba. Yawancin jihohi suna buƙatar:", options: ["Yin rajistarsa a matsayin DBA", "Babu komai har abada", "Lasisin tarayya", "Alamar kasuwanci (trademark) da farko"], answer: 0, why: "Sunan kasuwanci yawanci dole a yi masa rajista a matsayin DBA." },
          { objective: "O5", q: "Nawa IRS take caje don EIN?", options: ["$250", "$50", "Babu komai; kyauta ne", "Ya danganta da shafin intanet"], answer: 2, why: "IRS ta ce ba sai kun taɓa biyan kuɗi don EIN ba." },
          { objective: "O5", q: "Daga ina lasisin sana'a na gaba ɗaya yawanci yake fitowa?", options: ["Wani shafin intanet na kamfani", "IRS", "FAA (hukumar jiragen sama)", "Birninku ko gundumarku"], answer: 3, why: "Birane da gundumomi ne ke ba da lasisin sana'a na gaba ɗaya." },
          { objective: "O6", q: "Masu aiki don kansu dole su cike takardar haraji idan ribarsu ta kai:", options: ["Ba har abada", "$40,000 ko fiye", "$400 ko fiye", "Sai dai fiye da dala miliyan 1"], answer: 2, why: "IRS ta sa iyakar cike takarda a $400 na ribar aiki don kai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Yadda Ake Kafa da Fara Ƙaramar Sana'a",
    questions: [
      { objective: "O1", q: "Sana'ar hidima:", options: ["Tana sayar da kaya kawai", "Tana yi wa mutane aiki, kamar share-share ko gyare-gyare", "Koyaushe tana kan intanet", "Tana buƙatar masana'anta"], answer: 1, why: "Hidima aiki ne da ake yi wa abokan ciniki." },
      { objective: "O1", q: "Kuɗin farawa shi ne:", options: ["Kuɗin da ake buƙata don farawa, kamar kayan aiki da kayayyaki", "Ribarku", "Harajinku", "Abokan cinikinku"], answer: 0, why: "Shi ne abin da kuke kashewa don farawa." },
      { objective: "O1", q: "Idan aiki yana buƙatar lasisin jiha, ya kamata ku duba:", options: ["Shafin intanet na hukuma na hukumar lasisin jiharku", "AI kaɗai", "Jita-jita", "Babu komai"], answer: 0, why: "Hukumomin lasisi ne ke sa dokokin, kuma sun canja a jihohi da yawa." },
      { objective: "O2", q: "Me yasa za ku bayyana abokan ciniki a takaice kuma a sarari?", options: ["Yana ƙara farashi", "Yana nuna muku inda za ku same su", "IRS tana buƙatar haka", "Yana maye gurbin lasisi"], answer: 1, why: "Abokan ciniki takamaimai sun fi sauƙin kaiwa gare su." },
      { objective: "O2", q: "Don sa farashi, ku fara da:", options: ["Farashi mafi ƙanƙanta a gari, ko da da asara", "Kowace lamba kawai", "Kuɗin kashewarku na aiki ɗaya da lokacinku", "Duk abin da aboki ya faɗa"], answer: 2, why: "Farashi dole ya rufe kuɗin kashewa da lokaci." },
      { objective: "O2", q: "Riba ita ce:", options: ["Rance", "Duk kuɗin da ke shigowa", "Kuɗin harajinku", "Kuɗin da ya rage bayan kuɗin kashewa"], answer: 3, why: "Riba = kuɗin shiga a cire kuɗin kashewa." },
      { objective: "O3", q: "Tsarin sana'a na lean startup shi ne:", options: ["Takardar haraji", "Rahoto mai shafi 100", "Gajeren tsari na shafi ɗaya", "Lasisi"], answer: 2, why: "SBA ta bayyana shi a matsayin tsari na shafi ɗaya." },
      { objective: "O3", q: "Idan AI yana taimakawa wajen rubuta tsarinku, wa ke ba da bayanan gaskiya?", options: ["Ku", "AI", "Baƙo", "IRS"], answer: 0, why: "AI yana tsarawa; ku ne kuka san sana'arku." },
      { objective: "O4", q: "A sole proprietorship, wane ne ke da alhakin bashin sana'a?", options: ["Abokan cinikinku", "Babu kowa", "Gwamnati", "Ku da kanku"], answer: 3, why: "Babu rabuwa tsakanin mai sana'a da sana'ar." },
      { objective: "O4", q: "Ana yawan yin rajistar LLC da:", options: ["IRS kaɗai", "Jiharku, sau da yawa ofishin Secretary of State", "Bankinku", "Shafin sada zumunta"], answer: 1, why: "Jihohi ne ke kafa LLC." },
      { objective: "O4", q: "A ina za ku duba farashin kafa LLC na yanzu?", options: ["AI kaɗai", "Shafin intanet na Secretary of State na jiharku", "Tallar da ke tasowa (pop-up)", "Aboki"], answer: 1, why: "Farashi ya bambanta a kowace jiha kuma yana canjawa." },
      { objective: "O4", q: "DBA yana nufin:", options: ["Debt before assets (bashi kafin kadarori)", "Department of Business Affairs (sashen harkokin sana'a)", "Daily bank account (asusun banki na yau da kullum)", "Doing business as (kasuwanci da sunan)"], answer: 3, why: "DBA sunan kasuwanci ne mai rajista." },
      { objective: "O5", q: "Wani shafin intanet yana cajin $200 don samo muku EIN. Ya kamata ku:", options: ["Nema kyauta a irs.gov a maimakon haka", "Biya", "Ba shi SSN ɗinku", "Nemi AI ya biya"], answer: 0, why: "IRS tana gargaɗi game da shafukan da ke cajin kuɗi don EIN." },
      { objective: "O5", q: "Takardar neman EIN ta intanet ta IRS:", options: ["Tana buɗe awa 24 kowace rana", "Ana iya ajiye ta a gama ta a mako mai zuwa", "Dole a gama ta a zama ɗaya a lokacin buɗewarta", "Tana da kuɗin biya"], answer: 2, why: "IRS ta ce ba za ku iya ajiye ta ba, kuma ta jera awoyin buɗewa." },
      { objective: "O5", q: "Wane matakin gwamnati ne ke ba da lasisi ga sana'o'i da yawa, kamar aikin wutar lantarki?", options: ["Ofishin gidan waya", "Gwamnatin tarayya kaɗai", "Bankinku", "Jiha"], answer: 3, why: "Jihohi ne ke ba da lasisi ga sana'o'i da yawa." },
      { objective: "O5", q: "A ina ya kamata ku rubuta ainihin lambar Social Security ɗinku yayin neman EIN?", options: ["A tes ga baƙo", "A cikin mataimakin AI", "A shafin hukuma na irs.gov kaɗai", "A kowane shafin intanet"], answer: 2, why: "Lambobin sirri suna zuwa shafukan hukuma kaɗai." },
      { objective: "O6", q: "Me yasa za ku buɗe asusun bankin sana'a na daban?", options: ["Don guje wa duk haraji", "Don raba kuɗin sana'a da na kai", "Yana maye gurbin lasisi", "Don ɓoye kuɗi"], answer: 1, why: "SBA ta ce rabuwa tana kare ku kuma tana taimakawa bayanan kuɗi." },
      { objective: "O6", q: "Bayanan sana'a masu kyau sun ƙunshi:", options: ["Kwanan wata, wane ne, mene ne da nawa, tare da rasit", "Manyan cinikayya kawai", "Babu komai", "Kalmomin sirrinku"], answer: 0, why: "Cikakkun bayanai suna sauƙaƙa haraji." },
      { objective: "O6", q: "Wace takarda ce ke bayyana riba ko asarar sole proprietorship?", options: ["Schedule C", "Form W-2", "Form I-9", "Form DS-11"], answer: 0, why: "IRS tana amfani da Schedule C don masu sana'ar mutum ɗaya." },
      { objective: "O6", q: "Wane abokin hulɗar SBA ne ke ba da masu ba da shawara na sana'a masu sa kai ba tare da kuɗi ba?", options: ["IRS", "SCORE", "Mai ba da rance na gaggawa (payday lender)", "Ofishin bayanan bashi (credit bureau)"], answer: 1, why: "Masu ba da shawara na SCORE suna ba da shawara ba tare da kuɗi ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      7,
      8,
      11,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsari na shafi ɗaya",
        objective: "O3",
        notYet: "Tsarin ya rasa wani sashe, ko yana da bayanan da mai koyo bai bayar ba.",
        meets: "Shafi ɗaya da ya ƙunshi hidima, abokan ciniki, farashi, yadda abokan ciniki za su same ku da kuɗin farawa.",
        exceeds: "Mai koyo zai iya bayyana kowane sashe na tsarin da kalmominsa."
      },
      {
        name: "Abokan ciniki da farashi",
        objective: "O2",
        notYet: "Abokan ciniki \"kowa da kowa\" ne, ko farashin bai rufe kuɗin kashewa ba.",
        meets: "Bayanin abokan ciniki takamaimai da farashin da ya rufe kuɗin kashewa, lokaci da haraji.",
        exceeds: "An kwatanta farashin da ainihin farashi biyu na yankin."
      },
      {
        name: "Tsari da suna",
        objective: "O4",
        notYet: "Ba a zaɓi tsari ba, ko ba a duba sunan ba.",
        meets: "An zaɓi tsari tare da dalili, kuma an sami shafin DBA na hukuma idan ana buƙata.",
        exceeds: "Ya kuma rubuta inda za a duba farashin kafa LLC na yanzu."
      },
      {
        name: "EIN da lasisi",
        objective: "O5",
        notYet: "Ya yi amfani da hidimar EIN ta kuɗi, ko bai duba lasisi ba.",
        meets: "An jera shafin EIN na irs.gov da shafukan lasisin birni, gunduma da jiha.",
        exceeds: "Ya rubuta awoyin buɗe shafin EIN da abin da za a shirya kafin a nema."
      },
      {
        name: "Kuɗi, bayanai da taimako",
        objective: "O6",
        notYet: "Babu asusu na daban ko shirin ajiye bayanai.",
        meets: "Asusun banki na daban, littafin bayanai, kuɗin da aka ware don haraji, da ofishin SCORE ko SBDC da aka ambata.",
        exceeds: "Littafin bayanan yana da rubutu na farko na gaske ko na gwaji tare da rasit."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka sami EIN ko suka yi rajistar sana'a cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka sami kuɗin shiga daga sana'arsu cikin kwanaki 90",
      "Masu koyo da suka gana da mai ba da shawara na SCORE ko na SBDC cikin kwanaki 60"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Takarda da alƙalami, ko manhajar rubutu kyauta, don tsarin da jerin matakan",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku duba shafukan sana'a na jiharku, gundumarku da birninku kafin zaman, don ku nuna wa masu koyo ainihin shafukan yankin.",
      "Kada ku taɓa neman masu koyo su rubuta lambar Social Security, bayanan shari'a ko bayanan banki a AI ko a allon da ake rabawa; ana neman EIN a irs.gov kaɗai, a ɓoye.",
      "Ku tura tambayoyi game da lasisi da laifuffukan da suka gabata ga hukumar lasisin jiha, ba ga AI ba.",
      "Wannan kwas ɗin ba shawarar shari'a ko ta haraji ba ce; ku gayyaci mai ba da shawara na SCORE ko na SBDC na yankinku zuwa wani zama idan za ku iya.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
