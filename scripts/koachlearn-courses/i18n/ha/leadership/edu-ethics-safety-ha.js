"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ethics-safety.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ethics-safety-ha",
  lang: "ha",
  translationOf: "edu-ethics-safety",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makarantu da Ilimi 7: Ɗa'a, Tsaro da Amfani da AI cikin Hakki",
  skills: "Amfani da ƙa'idojin ɗa'a a AI na makaranta, Gane son kai da haɗarin rashin adalci, Kare bayanan ɗalibai bisa FERPA da COPPA, Tantance kamfanoni da yarjejeniyoyi, Rubuta jagororin amfani da AI cikin hakki, Magance matsalolin AI da deepfake",
  outcome: "rubuta jagororin amfani da AI cikin hakki don makarantarku ko gundumarku, masu ƙunshe da ƙa'idoji, sirri, adalci, amfanin ma'aikata da ɗalibai, tantance kamfanoni da shirin magance matsala, sannan ku yi amfani da su don duba wani kayan AI na gaske da wata matsala mai kama da ta gaske.",
  about: [
    "Wannan kwas ɗin na shugabannin makarantu ne, shugabannin gunduma, ma'aikatan fasaha da na sirri, masu ba da shawara (counselors) da malaman da ke jagoranci. Yana haɗa batutuwan ɗa'a, sirri da tsaro daga kwasa-kwasan baya zuwa jagorori da hanyoyin aiki da makarantarku ke buƙata.",
    "Babi na 1 yana bayanin ƙa'idoji: adalci da daidaito, bayyana gaskiya, kulawar ɗan Adam, sirri da tsaro, da yadda suke bayyana a amfanin AI na gaske a makaranta. Babi na 2 yana mayar da ƙa'idoji zuwa aiki: tantance kamfanoni, rubutattun jagorori, da shiri don lokacin da wani abu ya lalace, kamar zubewar bayanai ko hoton ƙarya da AI ya yi na ɗalibi ko malami.",
    "Wannan kwas ɗin yana bayanin doka da kalmomi masu sauƙi don ku san abin da za ku tambaya; ba shawarar shari'a ba ce. Lauyan gundumarku da jami'in sirri ne ke da kalma ta ƙarshe, kuma dokokin jiha na iya ƙara wasu sharuɗɗa. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Wannan shi ne kwas na 7 cikin 8 a jerin AI ga Shugabannin Makarantu da Ilimi."
  ],
  finalTask: "Ku rubuta jagororin amfani da AI cikin hakki masu shafi biyu don makarantarku ko gundumarku: ƙa'idoji biyar da kalmomi masu sauƙi, dokokin sirri (FERPA, COPPA, kayan aikin da aka amince da su kaɗai), binciken adalci, abin da ma'aikata da ɗalibai za su iya yi da wanda ba za su yi ba, matakan tantance kamfani, da shirin magance matsala mai matakai shida. Sannan ku gwada su: ku duba wani kayan AI na gaske da matakan tantance kamfani, sannan ku bi wata matsala mai kama da ta gaske (misali, hoton ƙarya na ɗalibi da AI ya yi aka raba a group chat) ta amfani da shirinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin makarantu, shugabannin gunduma, ma'aikatan fasaha da na sirri, masu ba da shawara da malaman da ke jagoranci a makarantu da gundumomin Amurka, waɗanda ke tsara dokokin amfani da AI.",
    startingPoint: "Sun san tushen AI, tushen FERPA da COPPA, tantance kayan aiki da dokokin AI a aji daga kwasa-kwasan baya. Wataƙila makarantarsu ko gundumarsu ba ta da rubutattun jagororin AI ko shirin magance matsala.",
    gap: "Idan babu rubutattun jagorori, ana yanke shawarar AI ɗaya bayan ɗaya, ba a duba haɗarin rashin adalci, kuma makarantu ba su shirya ba idan wani abu ya lalace, kamar zubewar bayanai ko hoton ƙarya da AI ya yi na ɗalibi. Shugabanni suna buƙatar ƙa'idoji a sarari, matakan tantance kamfani, dokoki ga ma'aikata da ɗalibai, da shirin magance matsala.",
    constraints: [
      "Kwas ɗin yana bayanin doka da kalmomi masu sauƙi kuma ba shawarar shari'a ba ne; lauyan gunduma da jami'in sirri ne ke da kalma ta ƙarshe",
      "Dokokin jiha na iya ƙara sharuɗɗa, kuma dokoki kan hotunan da AI ya yi suna canjawa da sauri",
      "Babu bayanan ɗalibai na gaske ko hotunansu a atisaye; ana bin matsaloli ta amfani da misalai ƙirƙirarru masu kama da na gaske",
      "Ba a taɓa tura hotunan yara ƙanana; ma'aikata suna bin shawarar lauya da jami'an tsaro",
      "Lokaci: gajerun darussa, amma rubutawa da gwada jagororin na ɗaukar lokaci mai tsawo"
    ],
    prerequisites: "Ana ba da shawarar kwasa-kwasai na 1 zuwa 6 na AI ga Shugabannin Makarantu da Ilimi, musamman kwas na 1 da kwas na 2."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani amfanin AI a makarantarku", action: "amfani da ƙa'idojin AI cikin hakki guda biyar a kansa", standard: "da jimla ɗaya kan yadda ya cika ko ya kasa cika kowace ƙa'ida" },
    { id: "O2", condition: "Idan aka ba ku kayan AI da ke ba ɗalibai maki, ke yi musu alama ko ke canjawa bisa ga su", action: "gane inda zai iya nuna rashin adalci ga wasu rukunin ɗalibai", standard: "ta rubuta tambayoyi uku na adalci ga kamfanin da bincike ɗaya kan sakamakonku" },
    { id: "O3", condition: "Idan ma'aikata suna amfani da kayan AI", action: "bin FERPA, COPPA da kyawawan halaye na tsaro", standard: "da halaye biyar masu kalmomi masu sauƙi, kowanne da misalin abin da bai kamata a yi ba" },
    { id: "O4", condition: "Kafin a amince da wani kayan AI", action: "tantance kamfani daga takardun kayan aikin da ke bayyane ga jama'a", standard: "ta lissafa abin da dole kamfanin ya tabbatar a cikin yarjejeniya da aka sa wa hannu" },
    { id: "O5", condition: "Da shawarwarin malamai, ɗalibai da iyalai", action: "rubuta daftarin jagororin AI cikin hakki masu dokokin abin da ma'aikata da ɗalibai za su iya yi da wanda ba za su yi ba", standard: "da aƙalla abubuwa huɗu na zahiri a kowane ɓangare, an duba su da manufar gunduma da dokar jiha tare da lauya" },
    { id: "O6", condition: "Idan aka ba ku wata matsalar AI mai kama da ta gaske kamar deepfake ko zubewar bayanai", action: "bin shirin magance matsala mai matakai shida", standard: "farawa da kare lafiyar ɗalibin da ƙarewa da sabunta jagororin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ƙa'idoji a aikace",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ƙa'idoji biyar na AI a makarantu",
          minutes: 5,
          goal: "Faɗin ƙa'idojin AI cikin hakki guda biyar da amfani da su a kan misalin makaranta.",
          text: [
            "Yawancin tsare-tsaren AI cikin hakki suna da wasu ra'ayoyi iri ɗaya. Guda biyar da suka dace da makarantu: Kulawar ɗan Adam: malamai ne ke yanke shawara game da ɗalibai; AI yana ba da bayani ne kawai, ba ya taɓa yanke shawara. Adalci da daidaito: kada AI ya cutar da kowane rukunin ɗalibai, kuma ya buɗe ƙofa ga kowa. Sirri da tsaro: ku tattara kuma ku raba bayanan ɗalibai kaɗan gwargwadon iko, kuma ku kare su.",
            "Bayyana gaskiya: ɗalibai, ma'aikata da iyalai sun san lokacin da ake amfani da AI da yadda ake amfani da shi. Ɗaukar alhaki: akwai wani mutum da aka ambaci sunansa da ke da alhakin kowane kayan AI da tasirinsa, kuma akwai hanyar kai ƙorafi.",
            "Waɗannan sun yi daidai da ƙa'idojin da ke cikin wasiƙar Dear Colleague Letter kan AI da Ma'aikatar Ilimi ta Amurka ta fitar ranar 22 ga Yuli, 2025. Kamar yadda K-12 Dive (shafin labaran ilimi) ya ruwaito, wasiƙar tana kira ga shirye-shiryen AI da malamai ke jagoranta, masu ɗa'a, da ɗalibai masu nakasa za su iya amfani da su, masu bayyana gaskiya wajen ƙaddamarwa, kuma masu bin dokokin sirri na tarayya. Don sarrafa haɗari, tsarin NIST AI Risk Management Framework (Govern, Map, Measure, Manage) na son rai ne kuma kyauta ne don a yi nazari."
          ],
          words: [["Kulawar ɗan Adam (human oversight)", "mutane ne ke dubawa da yanke shawara, AI yana ba da bayani ne kawai."], ["Daidaito (equity)", "tabbatar da cewa kowane ɗalibi ya sami abin da yake buƙata don ya yi nasara."], ["Bayyana gaskiya (transparency)", "faɗin a fili lokacin da ake amfani da AI da yadda ake amfani da shi."]],
          slides: [
            { title: "Ƙa'idoji biyar", bullets: ["Kulawar ɗan Adam", "Adalci da daidaito", "Sirri da tsaro", "Bayyana gaskiya da ɗaukar alhaki"] },
            { title: "Wasiƙar AI ta tarayya, Yuli 2025", bullets: ["Malamai ke jagoranta, kuma mai ɗa'a", "Ɗalibai masu nakasa za su iya amfani da shi", "Bayyana gaskiya; bin dokokin sirri"] },
            { title: "Tsarin sarrafa haɗari kyauta", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Na son rai ne; ku duba nist.gov don sabbin bayanai"] }
          ],
          sources: [{ name: "K-12 Dive: Ma'aikatar Ilimi ta fitar da manufofin AI (Yuli 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "NIST AI Risk Management Framework (tsarin sarrafa haɗarin AI)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Ku ɗauki amfanin AI ɗaya a makarantarku (misali, shirin karatu da ke canjawa bisa ga ɗalibi). Ku rubuta jimla ɗaya kan yadda ya cika ko ya kasa cika kowace ƙa'ida daga cikin biyar ɗin.",
          youCanNow: "amfani da ƙa'idojin AI cikin hakki guda biyar a kan amfani na gaske a makaranta.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'anar ƙa'idar bayyana gaskiya?", options: ["Faɗin a fili lokacin da ake amfani da AI da yadda ake amfani da shi", "Amfani da kayan AI na kyauta kaɗai", "Barin AI ya yanke shawara a gaban jama'a", "Raba bayanan ɗalibai da iyalai"], answer: 0, why: "Bayyana gaskiya na nufin mutane sun san lokacin da ake amfani da AI da yadda ake amfani da shi." },
            { objective: "O1", q: "Wani shirin karatu yana zaɓar littafin da kowane ɗalibi zai karanta na gaba. Wace tambayar ƙa'ida za ku yi?", options: ["Shi ne shirin mafi arha?", "Shi ne shirin mafi sabo?", "Malamai za su iya ganin zaɓinsa su canja shi?", "Shi ne mai abubuwa mafi yawa?"], answer: 2, why: "Kulawar ɗan Adam na nufin malamai ne ke yanke shawara, AI yana ba da bayani." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Son kai da haɗarin rashin adalci a AI na makaranta",
          minutes: 6,
          goal: "Gane inda amfanin AI a makaranta zai iya nuna rashin adalci ga wasu rukunin ɗalibai.",
          text: [
            "AI yana koyo daga bayanai, kuma bayanai suna nuna abubuwan da suka gabata, har da rashin adalci. A makarantu, ku kula da wurare huɗu. Masu gano rubutun AI (detectors): suna iya yi wa aikin gaskiya alama bisa kuskure, kuma ana iya yawan yi wa rubutun ɗaliban da ke koyon Turanci alama. Hasashe: makin gargaɗi da wuri ko makin haɗari (risk score) na iya lakaba wa ɗalibai suna bisa tsarin da ke da alaƙa da kuɗin shiga, nakasa ko launin fata.",
            "Rarraba ɗalibai (tracking): shirye-shiryen da ke ci gaba da ba wasu ɗalibai aiki mai sauƙi na iya rage musu dama. Samun damar amfani: idan taimakon AI yana buƙatar na'ura ko intanet a gida, ɗaliban da ba su da su suna ƙara baya; idan kayan aiki bai dace da masu nakasa ba, an rufe musu ƙofa.",
            "Binciken adalci: ku tambayi kamfanoni yadda suke gwada son kai da dacewa ga masu nakasa; ku duba sakamako bisa rukunin ɗalibai a bayananku (tare da kare sirri); kada ku taɓa amfani da makin AI shi kaɗai don shawarar sanya ɗalibi a aji, horo ko cancanta; kuma ku tabbatar kowane ɗalibi zai iya amfani da kayan aikin a makaranta."
          ],
          steps: ["Ku lissafa amfanin AI da ke rarraba ɗalibai, ke ba su maki ko ke yi musu alama.", "Ku tambayi kamfanin yadda yake gwada son kai da dacewa ga masu nakasa.", "Ku duba sakamako bisa rukunin ɗalibai, tare da kare sirri.", "Kada ku taɓa amfani da makin AI shi kaɗai don shawara game da ɗalibai.", "Ku tabbatar kowane ɗalibi zai iya amfani da kayan aikin a makaranta."],
          words: [["Son kan na'ura (algorithmic bias)", "sakamakon rashin adalci daga tsarin AI, sau da yawa da aka koya daga bayanan baya."], ["Makin haɗari (risk score)", "lambar da tsari ke ba ɗalibi don hasashen matsala, kamar barin makaranta."], ["Rarraba ɗalibai (tracking)", "ajiye ɗalibai a matakan aiki daban-daban, abin da ke iya rage musu dama."]],
          slides: [
            { title: "Inda son kai ke bayyana", bullets: ["Masu gano rubutun AI da ke yi wa ɗalibai alama bisa kuskure", "Makin haɗari da ke da alaƙa da kuɗin shiga, nakasa, launin fata", "Rarraba ɗalibai da ke rage musu dama"] },
            { title: "Samun damar amfani adalci ne", bullets: ["Rashin na'ura da intanet a gida", "Kayan aikin da bai dace da masu nakasa ba"] },
            { title: "Binciken adalci", bullets: ["Ku tambayi kamfanoni game da gwajin son kai da dacewa", "Ku duba sakamako bisa rukuni", "Kada makin AI shi kaɗai ya yanke shawara"] }
          ],
          tryIt: "Ku zaɓi kayan AI ɗaya da ke ba ɗalibai maki, ke yi musu alama ko ke canjawa bisa ga su a makarantarku. Ku rubuta tambayoyi uku na adalci da za ku yi wa kamfanin, da bincike ɗaya da za ku yi kan sakamakonku.",
          youCanNow: "gane haɗarin rashin adalci a AI na makaranta da sanya binciken da ya dace.",
          quickCheck: [
            { objective: "O2", q: "Me yasa masu gano rubutun AI ke iya kawo damuwa game da adalci?", options: ["Suna da tsada sosai", "Suna iya yawan yi wa rubutun ɗaliban da ke koyon Turanci alama", "Suna aiki a waya kaɗai", "Suna ba da maki a hankali sosai"], answer: 1, why: "Alamomin kuskure marasa daidaito suna faɗa wa wasu rukunin ɗalibai fiye da wasu." },
            { objective: "O2", q: "Wani kayan aiki yana ajiye wani rukunin ɗalibai a kan aiki mai sauƙi har tsawon watanni. Me za ku yi?", options: ["Babu komai; kayan aikin ya fi sani", "Ku kashe duk AI a makarantar", "Ku mayar da ɗaliban zuwa wata makaranta", "Ku duba sakamakonku bisa rukuni ku tambayi kamfanin yadda kayan aikin ke yanke shawara"], answer: 3, why: "Duba sakamako bisa rukuni yana nuna ko kayan aikin yana rage wa wasu ɗalibai dama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sirri da tsaro: FERPA, COPPA da kyawawan halaye",
          minutes: 6,
          goal: "Bin FERPA da COPPA da kyawawan halaye na tsaro a kayan AI.",
          text: [
            "FERPA (dokar tarayya ta sirrin bayanan ilimi) tana kare bayanan karatun ɗalibai. Yawanci makarantu suna buƙatar izini kafin su bayyana bayanan da ke iya gane ɗalibi (PII) daga cikinsu, amma akwai wasu keɓancewa; kamfani zai iya zama jami'in makaranta ne kawai idan yana yi wa makarantar wani aiki, yana ƙarƙashin ikon makarantar kai tsaye, kuma yana bin iyakokin sake raba bayanai. Iyaye za su iya dubawa da nazarin bayanan; haƙƙoƙin suna komawa ga ɗalibi idan ya kai shekara 18 ko ya shiga jami'a.",
            "COPPA, wadda FTC (hukumar kasuwanci ta tarayyar Amurka) ke aiwatarwa, tana kare yara 'yan ƙasa da shekara 13 a intanet. FTC ta ce makarantu za su iya ba da izini a madadin iyaye ne kawai idan ana tattara bayanan don amfanin makarantar da ribarta, ba don wata manufar kasuwanci ba. FTC ta gyara Dokar COPPA ranar 22 ga Afrilu, 2025; ku duba shafukan FTC don sharuɗɗan yanzu.",
            "Kyawawan halaye: rage bayanai (data minimization: raba abin da aikin ke buƙata kaɗai), kayan aikin da aka amince da su kaɗai, asusun gunduma masu ƙarfafan kalmomin sirri da shiga mataki biyu, rashin loda bayanan ɗalibai a asusun kai, da sanin wanda za a kira idan bayanai sun yiwu sun zube. Jiharku na iya samun nata dokar sirrin ɗalibai; jami'in sirrinku zai sani."
          ],
          steps: ["Ku yi amfani da kayan aikin da aka amince da su kaɗai don bayanan ɗalibai.", "Ku raba ƙaramin bayanin da ake buƙata kaɗai.", "Ku yi amfani da asusun gunduma mai shiga mataki biyu.", "Kada ku taɓa loda bayanan ɗalibai a asusun kai.", "Ku san wanda za ku kira game da yiwuwar zubewar bayanai."],
          words: [["Rage bayanai (data minimization)", "tattarawa da raba bayanan da aiki ke buƙata da gaske kaɗai."], ["Shiga mataki biyu (two-step sign-in)", "shiga asusu da kalmar sirri tare da wani bincike na biyu, kamar code a wayarku."]],
          slides: [
            { title: "FERPA", bullets: ["Tana kare bayanan karatu", "Yawanci ana buƙatar izini kafin raba PII", "Kamfanoni a matsayin jami'an makaranta da ke ƙarƙashin iko kaɗai"] },
            { title: "COPPA", bullets: ["Ƙasa da shekara 13, FTC ke aiwatarwa", "Izinin makaranta: amfanin makaranta kaɗai, ba wata kasuwanci ba", "An gyara dokar ranar 22 ga Afrilu, 2025"] },
            { title: "Kyawawan halaye", bullets: ["Rage bayanai", "Kayan aikin da aka amince, asusun gunduma, shiga mataki biyu", "Ku san wanda za ku kira game da zubewar bayanai"] }
          ],
          sources: [{ name: "FERPA: Kare sirrin ɗalibai (Protecting Student Privacy)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Bin COPPA, tambayoyin da ake yawan yi (FAQ)", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Ku rubuta halaye biyar na sirri da tsaro ga ma'aikatanku da kalmomi masu sauƙi, da misali ɗaya na abin da BA za a yi ba ga kowanne.",
          youCanNow: "bin FERPA, COPPA da kyawawan halaye na tsaro na yau da kullum a amfanin AI na ma'aikata.",
          quickCheck: [
            { objective: "O3", q: "Me shiga mataki biyu ke ƙarawa?", options: ["Bincike na biyu, kamar code a wayarku", "Kalmar sirri ta biyu da ake rubutawa sau biyu", "Kayan AI na biyu", "Wani ma'aikaci na biyu da zai shiga a madadinku"], answer: 0, why: "Bincike na biyu yana kare asusu ko da an saci kalmar sirri." },
            { objective: "O3", q: "Wani malami yana son loda jerin sunayen dukkan ajinsa a kayan AI don ƙaramin aiki ɗaya. Wace shawara za ku ba shi?", options: ["Ya loda; bayanai masu yawa suna kawo sakamako mafi kyau", "Ya loda a kayan aiki biyu don ya kwatanta", "Ya raba abin da aikin ke buƙata kaɗai, a kayan aikin da aka amince da shi", "Ya aika wa kamfanin ta imel a maimakon haka"], answer: 2, why: "Rage bayanai na nufin raba abin da aikin ke buƙata kaɗai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ƙa'idoji a aikace",
        questions: [
          { objective: "O1", q: "Wace ƙa'ida ce ta ce malamai ne ke yanke shawara game da ɗalibai, AI kuma yana ba da bayani ne kawai?", options: ["Bayyana gaskiya", "Rage bayanai", "Kulawar ɗan Adam", "Rarraba ɗalibai"], answer: 2, why: "Kulawar ɗan Adam tana barin shawara a hannun malamai." },
          { objective: "O1", q: "Wani kayan gargaɗi da wuri ya ba ɗalibi babban makin haɗari. Amfani daidai shi ne:", options: ["Amfani da shi a matsayin bayani ɗaya ga malaman da su ma suka san ɗalibin", "Sanya ɗalibin a aji kai tsaye", "Raba makin a gaban jama'a", "Watsi da duk bayanai"], answer: 0, why: "Kada makin AI shi kaɗai ya yanke shawara." },
          { objective: "O2", q: "Me yasa samun damar amfani batun adalci ne ga kayan AI?", options: ["Manya ne kaɗai ke amfani da AI", "Ba batun adalci ba ne", "Samun dama yana rage saurin kayan aiki", "Ɗaliban da ba su da na'ura, intanet ko kayan aikin da ya dace da su suna ƙara baya"], answer: 3, why: "Rashin daidaiton samun dama yana ƙara giɓi." },
          { objective: "O3", q: "Rage bayanai na nufin:", options: ["Tattara abin da ya fi yawa", "Raba abin da aikin ke buƙata kaɗai", "Goge duk bayanai", "Amfani da ƙananan haruffa"], answer: 1, why: "Ƙarancin bayanai na nufin ƙarancin haɗari." },
          { objective: "O3", q: "A ƙarƙashin COPPA, makaranta za ta iya ba da izini a madadin iyaye idan ana tattara bayanai:", options: ["Don talla", "Ba a taɓa yi ba", "Don kowane dalili", "Don amfanin makarantar da ribarta, ba don wata manufar kasuwanci ba"], answer: 3, why: "Wannan shi ne sharaɗin FTC." }
        ]
      }
    },
    {
      name: "Babi na 2: Jagorori, kamfanoni da matsaloli",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tantance kamfanoni da yarjejeniyoyi",
          minutes: 5,
          goal: "Tantance kamfani kafin a amince da kayan AI.",
          text: [
            "Kowane kayan AI da zai taɓa bayanan ɗalibai yana buƙatar a tantance shi kafin a amince da shi. Ku yi amfani da jerin binciken Model Terms of Service na Ofishin Manufofin Sirrin Ɗalibai (Student Privacy Policy Office) ko na gundumarku. Muhimman tambayoyi: wane bayani ne, wane ne mamallakinsa, ana amfani da shi don talla ko don horar da AI, za a iya goge shi idan an nema, su wane ne kuma ke karɓarsa, yaya ake kare shi, kuma me zai faru idan aka yi kutse.",
            "Ku ƙara tambayoyi na musamman game da AI: Yaya AI ɗin ke aiki kuma mene ne iyakokinsa? Yaya ake gwada shi don daidaito, son kai da dacewa ga masu nakasa? Malamai za su iya ganin sakamakonsa su soke shi? Yana ajiye abin da ɗalibai suka rubuta, kuma har tsawon yaushe?",
            "Ku sami alƙawura a cikin yarjejeniya da aka sa wa hannu, ba manufar shafin intanet kawai da za ta iya canjawa ba. Jihohi da gundumomi da yawa suna amfani da yarjejeniyoyin sirrin bayanai da kamfanoni; jami'in sirrinku ko lauyanku zai san takardar da ta dace."
          ],
          steps: ["Ku yi amfani da jerin binciken Model Terms of Service ko na gundumarku.", "Ku yi tambayoyin na musamman game da AI.", "Ku nemi amsoshi a rubuce.", "Ku sami alƙawura a yarjejeniya da aka sa wa hannu.", "Ku rubuta shawarar da ranar sake dubawa."],
          words: [["Yarjejeniyar sirrin bayanai (data privacy agreement)", "kwangila da aka sa wa hannu da ke tsara yadda kamfani zai yi amfani da bayanan ɗalibai ya kuma kare su."], ["Soke sakamako (override)", "mutum ya canja ko ya ƙi abin da AI ya samar."]],
          slides: [
            { title: "Tambayoyin sirri", bullets: ["Wane bayani ne, wane ne mamallakinsa", "Talla ko horar da AI?", "Gogewa, rabawa, tsaro, kutse"] },
            { title: "Tambayoyin AI", bullets: ["Yadda yake aiki da iyakokinsa", "Gwajin daidaito, son kai, dacewa ga masu nakasa", "Malamai za su iya soke shi? Har yaushe ake ajiye abin da aka rubuta?"] },
            { title: "Ku sa shi a rubuce", bullets: ["Yarjejeniya da aka sa wa hannu, ba shafin intanet kawai ba", "Ku tambayi jami'in sirrinku takardar da ta dace"] }
          ],
          sources: [{ name: "Sirri da fasahar ilimi: jerin binciken Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Ku tantance kamfanin wani kayan AI ɗaya da makarantarku ke amfani da shi ko take so: ku amsa tambayoyin sirri da na AI daga takardunsa da ke bayyane ga jama'a, sannan ku lissafa abin da za ku buƙaci kamfanin ya tabbatar a rubuce.",
          youCanNow: "tantance kamfanin AI kan sirri, ingancin AI da sharuɗɗan kwangila kafin a amince da shi.",
          quickCheck: [
            { objective: "O4", q: "Mene ne yarjejeniyar sirrin bayanai?", options: ["Shafin tallan kamfani", "Kwangila da aka sa wa hannu kan yadda kamfani ke amfani da bayanan ɗalibai da kare su", "Takardar da ɗalibai ke sa wa hannu", "Jerin shafukan intanet da aka amince da su"], answer: 1, why: "Yarjejeniya da aka sa wa hannu tana ɗaure kamfanin da alƙawuransa." },
            { objective: "O4", q: "Shafin intanet na wani kamfani ya ce ba ya taɓa horar da AI da bayanan ɗalibai. Me za ku yi?", options: ["Ku amince da kayan aikin bisa wannan", "Ku yi watsi da shi", "Ku tambayi ɗalibai ko gaskiya ne", "Ku sami wannan alƙawarin a cikin yarjejeniya da aka sa wa hannu"], answer: 3, why: "Manufofin shafin intanet na iya canjawa; yarjejeniya da aka sa wa hannu ba ta canjawa da kanta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta jagororin amfani da AI cikin hakki",
          minutes: 6,
          goal: "Rubuta daftarin jagorori a sarari don amfanin AI na ma'aikata da ɗalibai.",
          text: [
            "Jagorori suna mayar da ƙa'idoji zuwa dokokin yau da kullum. Ku sa su kusan shafi biyu, da kalmomi masu sauƙi. Sassa: manufa da ƙa'idoji; kayan aikin da aka amince da su da yadda ake neman sabo; dokokin sirri; abin da ma'aikata za su iya yi da wanda ba za su yi ba; abin da ɗalibai za su iya yi da wanda ba za su yi ba (ku haɗa matakan amfanin AI naku); gaskiya a karatu (academic integrity); bayyana gaskiya ga iyalai; da wanda za a tuntuɓa.",
            "Ku yi amfani da misalai na zahiri: \"Ma'aikata za su iya amfani da kayan AI da aka amince da su don rubuta daftarin kayan darasi da wasiƙu ga iyalai. Ma'aikata ba za su rubuta sunayen ɗalibai, makinsu, bayanan IEP ko 504 (tsare-tsaren taimako ga ɗalibai masu nakasa), ko bayanan horo a kowane kayan aikin da ba a amince da shi ba. Ma'aikata ba za su yi amfani da AI don yanke shawarar maki, sanya ɗalibi a aji ko horo ba.\"",
            "Ku rubuta su tare da malamai, ɗalibai (gwargwadon shekarunsu) da iyalai, ku duba su tare da lauya bisa manufar gunduma da dokar jiha, sannan ku sa ranar sake dubawa. Jagororin da babu wanda ya taimaka wajen rubutawa, babu wanda ke bin su."
          ],
          steps: ["Ku rubuta daftarin sassan: ƙa'idoji, kayan aiki, sirri, ma'aikata, ɗalibai, gaskiya a karatu, bayyana gaskiya, tuntuɓa.", "Ku ƙara misalai na zahiri na abin da za a iya yi da wanda ba za a yi ba.", "Ku sa malamai, ɗalibai da iyalai a ciki.", "Ku duba tare da lauya bisa manufa da dokar jiha.", "Ku wallafa su ku sa ranar sake dubawa."],
          words: [["Jagorori (guidelines)", "dokoki masu amfani da ke bayanin yadda ake bin wata manufa a kullum."], ["Manufar hukumar makaranta (board policy)", "doka ta hukuma da hukumar makaranta ta amince da ita."]],
          slides: [
            { title: "Shafi biyu, kalmomi masu sauƙi", bullets: ["Ƙa'idoji, kayan aiki, sirri", "Abin da ma'aikata da ɗalibai za su iya yi da wanda ba za su yi ba", "Gaskiya a karatu, bayyana gaskiya, tuntuɓa"] },
            { title: "Misalai na zahiri", bullets: ["Za a iya: rubuta daftarin kayan darasi a kayan aikin da aka amince", "Ba za a yi ba: bayanan ɗalibai a kayan aikin da ba a amince ba", "Ba za a yi ba: shawarar maki ko horo da AI"] },
            { title: "Ku rubuta tare", bullets: ["Malamai, ɗalibai, iyalai", "Lauya yana duba manufa da dokar jiha", "Ku sa ranar sake dubawa"] }
          ],
          tryIt: "Ku rubuta daftarin sassan \"za a iya / ba za a yi ba\" na ma'aikata da na ɗalibai a jagororinku, da aƙalla abubuwa huɗu a kowanne. Ku raba su da malamai biyu ku rubuta canje-canjensu.",
          youCanNow: "rubuta jagororin AI cikin hakki masu amfani tare da mutanen da za su bi su.",
          quickCheck: [
            { objective: "O5", q: "Me ke sa jagorori su yi amfani ga ma'aikata?", options: ["Misalai na zahiri na abin da za a iya yi da wanda ba za a yi ba", "Dogon harshen shari'a", "Jerin kowane kayan AI da ke kasuwa", "Babu misalai, don ma'aikata su yanke hukunci"], answer: 0, why: "Misalai na zahiri suna sa dokoki su zama masu sauƙin bi." },
            { objective: "O5", q: "Daftarin jagororinku ya shirya. Me ya kamata ya faru kafin a amince da su?", options: ["A wallafa su nan take", "A nemi chatbot na AI ya amince da su", "A sami shawarwarin malamai, ɗalibai da iyalai, a kuma duba su da manufa da doka tare da lauya", "A ɓoye su daga ma'aikata"], answer: 2, why: "Jagorori suna buƙatar shawarar mutanen da abin ya shafa da binciken shari'a." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idan wani abu ya lalace: magance matsala",
          minutes: 6,
          goal: "Tsara matakan magance matsalar AI, har da zubewar bayanai da deepfake.",
          text: [
            "Ku yi shiri kafin matsala ta faru. Matsalolin AI da aka saba gani: an rubuta bayanan ɗalibai a kayan aikin da ba a amince da shi ba; kayan AI yana ba ɗalibai bayani mai cutarwa ko marar gaskiya; da hotuna, sauti ko bidiyo na ƙarya da AI ya yi na ɗalibai ko ma'aikata (deepfake), waɗanda za su iya zama cin zarafi kuma suna iya zama laifi.",
            "Shiri mai matakai shida: 1) Kare lafiya: dakatar da cutarwar (cire damar shiga, dakatar da kayan aikin, tallafa wa wanda abin ya shafa). 2) Kai rahoto: ga shugaban makaranta da wakilin gunduma da aka ambata a jagororinku. 3) Ajiye shaida: ku ajiye shaida yadda gundumarku ta umarta (ga hotunan yara ƙanana, ku bi shawarar jami'an tsaro da lauya; kada ku taɓa tura su ko kwafa su). 4) Tantancewa: waɗanne bayanai ko mutane abin ya shafa. 5) Sanarwa: ga iyalai da wasu kamar yadda doka da manufa suka buƙata. 6) Koyo: gyara tushen matsalar da sabunta jagorori.",
            "Ga deepfake da cin zarafi, ku bi hanyoyin aiki na cin zarafi, tsangwama da Title IX, ku sa lauya a ciki, kuma a inda ake buƙata, jami'an tsaro. Dokoki kan hotunan da AI ya yi suna canjawa da sauri a matakin tarayya da na jiha; lauyanku zai san wanda ya shafe ku."
          ],
          steps: ["Kare lafiya: dakatar da cutarwar ku tallafa wa mutumin.", "Ku kai rahoto ga shugaban makaranta da wakilin gunduma.", "Ku ajiye shaida yadda aka umarta; kada ku taɓa tura hotunan yara ƙanana.", "Ku tantance waɗanne bayanai ko mutane abin ya shafa.", "Ku sanar kamar yadda doka da manufa suka buƙata; sannan ku koya ku sabunta."],
          words: [["Magance matsala (incident response)", "matakan da aka tsara don magance wani abin da ya lalace."], ["Deepfake", "hoto, murya ko bidiyo na ƙarya da aka yi da AI don ya yi kama da na gaske."], ["Title IX", "dokar tarayya da ke hana nuna bambancin jinsi a ilimi, har da cin zarafin jima'i."]],
          slides: [
            { title: "Matsalolin AI da aka saba gani", bullets: ["Bayanan ɗalibai a kayan aikin da ba a amince ba", "Sakamakon AI mai cutarwa ko marar gaskiya ga ɗalibai", "Deepfake na ɗalibai ko ma'aikata"] },
            { title: "Matakai shida", bullets: ["1 Kare lafiya  2 Kai rahoto  3 Ajiye shaida", "4 Tantancewa  5 Sanarwa  6 Koyo"] },
            { title: "Deepfake da cin zarafi", bullets: ["Ku bi hanyoyin cin zarafi, tsangwama, Title IX", "Kada ku taɓa tura hotunan yara ƙanana", "Ku sa lauya a ciki; dokoki suna canjawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala jagororinku na AI cikin hakki masu shafi biyu (ƙa'idoji, sirri, adalci, dokokin ma'aikata da ɗalibai, matakan tantance kamfani, shirin magance matsala mai matakai shida). Ku gwada su ta duba kayan aiki ɗaya na gaske da bin wata matsala ɗaya mai kama da ta gaske, kuna rubuta duk wani giɓi da kuka gano.",
          youCanNow: "jagorantar amfani da AI cikin hakki a makarantarku da jagorori a sarari, tantance kamfanoni da shirin magance matsala.",
          quickCheck: [
            { objective: "O6", q: "Mene ne mataki na ƙarshe na shirin magance matsala?", options: ["Kare lafiya", "Koyo: gyara tushen matsalar da sabunta jagororin", "Sanar da 'yan jarida", "Goge duk bayanai"], answer: 1, why: "Koyo daga kowace matsala yana hana ta sake faruwa." },
            { objective: "O6", q: "Wani ma'aikaci ya karɓi hoton ƙarya na ɗalibi da AI ya yi. Me ya kamata ya yi da shi?", options: ["Ya tura wa abokan aiki don su sani", "Ya wallafa gargaɗi tare da hoton", "Ya goge shi kuma kada ya faɗa wa kowa", "Kada ya tura shi, ya bi shawarar lauya da jami'an tsaro kan ajiye shaida"], answer: 3, why: "Ba a taɓa tura hotunan yara ƙanana; ana kula da shaida yadda lauya da jami'an tsaro suka ba da shawara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Jagorori, kamfanoni da matsaloli",
        questions: [
          { objective: "O4", q: "Me yasa za a sami alƙawuran kamfani a yarjejeniya da aka sa wa hannu?", options: ["Yarjejeniyoyi ba dole ba ne", "Ya fi sauri", "Manufofin shafin intanet na iya canjawa", "Kamfanoni sun fi son haka"], answer: 2, why: "Sharuɗɗan da aka sa wa hannu suna ɗaure kamfanin." },
          { objective: "O4", q: "Wace tambaya ce ta musamman game da AI ga kamfani?", options: ["Malamai za su iya ganin sakamakon AI su soke shi?", "Wane launi ne tambarin kamfanin?", "Ma'aikata nawa kamfanin yake da su?", "Ina ofishinsu yake?"], answer: 0, why: "Ikon ɗan Adam na soke sakamako shi ne tushen kulawa." },
          { objective: "O5", q: "Su wa ya kamata su taimaka wajen rubuta jagororin?", options: ["Kamfanin kaɗai", "Malamai, ɗalibai da iyalai, tare da binciken lauya", "Shugaban makaranta kaɗai, shi kaɗai", "Kayan AI shi kaɗai"], answer: 1, why: "Jagororin da mutane suka taimaka wajen rubutawa, su ne mutane ke bi." },
          { objective: "O6", q: "Wani ɗalibi ya ba da rahoton hoton ƙarya na abokin karatunsa da AI ya yi a group chat. Mene ne mataki na farko?", options: ["Kare lafiya: dakatar da cutarwar ku tallafa wa ɗalibin", "Tura shi ga ma'aikata don a nuna musu", "Watsi da shi", "Wallafa gargaɗi tare da hoton"], answer: 0, why: "Lafiya ita ce ta farko; kada a taɓa yaɗa hoton." },
          { objective: "O6", q: "Mene ne mataki na ƙarshe na shirin magance matsala?", options: ["Manta da shi", "Ɗora laifi kan ɗalibin", "Goge jagororin", "Koyo: gyara tushen matsalar da sabunta jagororin"], answer: 3, why: "Matsaloli ya kamata su inganta tsarin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makarantu da Ilimi 7: Ɗa'a, Tsaro da Amfani da AI cikin Hakki",
    questions: [
      { objective: "O1", q: "Kulawar ɗan Adam na nufin:", options: ["AI yana yanke shawara; malamai suna kallo", "Malamai suna yanke shawara; AI yana ba da bayani", "Babu wanda ke yanke shawara", "Iyaye ne ke yanke shawarar duk amfanin AI"], answer: 1, why: "Shawarar game da ɗalibai tana hannun mutane." },
      { objective: "O1", q: "Bayyana gaskiya na nufin:", options: ["Ɓoye amfani da AI", "Amfani da roba mai haske", "Faɗin a fili lokacin da ake amfani da AI da yadda ake amfani da shi", "Raba bayanan ɗalibai"], answer: 2, why: "Ya kamata mutane su san lokacin da AI ke ciki." },
      { objective: "O1", q: "Ɗaukar alhaki na nufin:", options: ["Babu wanda ke da alhaki", "AI ne ke da alhaki", "Wani mutum da aka ambaci sunansa ke da alhakin kowane kayan AI da tasirinsa", "Kamfanoni ne ke yanke komai"], answer: 2, why: "Dole wani ya amsa game da kowane kayan aiki." },
      { objective: "O1", q: "Wasiƙar AI ta tarayya ta Yuli 2025 tana kira ga AI wanda yake:", options: ["Malamai ke jagoranta, mai ɗa'a, kowa zai iya amfani da shi, mai bayyana gaskiya da bin dokokin sirri", "Ba tare da malamai ba", "Ba shi da wata doka", "Na manyan makarantun sakandare kaɗai"], answer: 0, why: "Waɗannan su ne ƙa'idojin da ta faɗa." },
      { objective: "O1", q: "NIST AI RMF shi ne:", options: ["Gwajin ɗalibai", "Doka", "Wani shirin kwamfuta na sayarwa", "Tsari na son rai don sarrafa haɗarin AI"], answer: 3, why: "NIST ta bayyana shi a matsayin na son rai." },
      { objective: "O2", q: "Masu gano rubutun AI suna kawo damuwa game da adalci domin suna:", options: ["Yin adalci koyaushe", "Iya yawan yi wa rubutun ɗaliban da ke koyon Turanci alama", "Kyauta ne", "Ba sa taɓa yi wa kowa alama"], answer: 1, why: "Alamomin kuskure na iya faɗa wa wasu fiye da wasu." },
      { objective: "O2", q: "Rarraba ɗalibai da kayan aiki na iya zama haɗari idan yana:", options: ["Hannun malamai", "Ƙalubalantar kowane ɗalibi", "A kashe", "Ajiye wasu ɗalibai a kan aiki mai sauƙi kuma yana rage musu dama"], answer: 3, why: "Rarraba ɗalibai na iya rage dama." },
      { objective: "O2", q: "Ya kamata a yi amfani da makin haɗari na AI:", options: ["A gaban jama'a", "A matsayin shawara ta ƙarshe", "A matsayin bayani ɗaya, ba shi kaɗai don yanke shawara ba", "Ba tare da an taɓa duba shi ba"], answer: 2, why: "Malamai suna auna shi tare da abin da suka sani." },
      { objective: "O3", q: "A ƙarƙashin FERPA, kamfani zai iya zama jami'in makaranta ne kawai idan:", options: ["Yana yi wa makaranta aiki a ƙarƙashin ikonta kai tsaye, da iyakokin sake raba bayanai", "Ya shahara", "Kyauta ne", "Yana da shafin sirri"], answer: 0, why: "Waɗannan su ne sharuɗɗan FERPA." },
      { objective: "O3", q: "COPPA tana kare yara:", options: ["'Yan ƙasa da shekara 16", "'Yan ƙasa da shekara 13", "'Yan ƙasa da shekara 18", "Waɗanda suka haura shekara 13"], answer: 1, why: "FTC ta ce 'yan ƙasa da shekara 13." },
      { objective: "O3", q: "FTC ta gyara Dokar COPPA ranar:", options: ["22 ga Afrilu, 2025", "1 ga Janairu, 1990", "27 ga Oktoba, 2026", "4 ga Yuli, 2020"], answer: 0, why: "Tambayoyin da ake yawan yi na FTC sun ba da 22 ga Afrilu, 2025." },
      { objective: "O3", q: "Shiga mataki biyu yana ƙara:", options: ["Babu komai", "Kalmar sirri ta biyu a takarda", "Mai amfani na biyu", "Bincike na biyu, kamar code a wayarku"], answer: 3, why: "Yana kare asusu idan kalmar sirri ta zube." },
      { objective: "O4", q: "Jerin binciken Model Terms of Service ya fito daga:", options: ["Wani kamfani", "Ofishin Manufofin Sirrin Ɗalibai na Ma'aikatar Ilimi", "Wani dandalin sada zumunta", "Wani shafin labarai"], answer: 1, why: "An jera shi a studentprivacy.ed.gov." },
      { objective: "O4", q: "Yarjejeniyar sirrin bayanai ita ce:", options: ["Alƙawarin ɗalibi", "Tutar talla a shafin intanet", "Kwangila da aka sa wa hannu kan yadda kamfani ke amfani da bayanan ɗalibai da kare su", "Kalmar sirri"], answer: 2, why: "Tana ɗaure kamfanin a rubuce." },
      { objective: "O5", q: "Jagorori masu kyau suna ƙunshe da:", options: ["Tallace-tallacen kamfani", "Ƙimomi na gama-gari kaɗai", "Misalai na zahiri na abin da za a iya yi da wanda ba za a yi ba", "Sunayen ɗalibai"], answer: 2, why: "Misalai suna sa dokoki su zama masu amfani." },
      { objective: "O5", q: "Ya kamata a duba jagorori bisa:", options: ["Manufar gunduma da dokar jiha, tare da lauya", "Kafofin sada zumunta", "Rubuce-rubucen kamfanoni a intanet", "Babu komai"], answer: 0, why: "Dole su dace da doka da manufar da ke akwai." },
      { objective: "O6", q: "Deepfake na ɗalibi da AI ya yi aka raba a intanet na iya zama:", options: ["Aikin makaranta", "Wasa marar lahani", "Halal koyaushe", "Cin zarafi kuma wataƙila laifi"], answer: 3, why: "Ku ɗauke shi a matsayin babbar cutarwa." },
      { objective: "O6", q: "Lokacin ajiye shaidar da ta shafi hotunan yara ƙanana, ya kamata ma'aikata su:", options: ["Tura su ga abokan aiki", "Bi shawarar lauya da jami'an tsaro, kuma kada su taɓa tura su", "Wallafa su", "Ajiye su a wayoyinsu na kai"], answer: 1, why: "Kwafar irin waɗannan hotuna da kanta na iya jawo cutarwa ko ta karya doka." },
      { objective: "O6", q: "Sanar da iyalai bayan wata matsala ya kamata ya bi:", options: ["Sharhi a kafofin sada zumunta", "Abin da ya fi sauƙi", "Babu komai", "Doka da manufar gunduma"], answer: 3, why: "Wajibcin sanarwa daga doka da manufa yake." },
      { objective: "O6", q: "Dokoki kan hotunan da AI ya yi:", options: ["Iri ɗaya ne a kowace jiha", "Ba za su taɓa canjawa ba", "Suna canjawa da sauri; ku tambayi lauya wanda ya shafe ku", "Ba su shafi makarantu ba"], answer: 2, why: "Dokokin tarayya da na jiha suna ci gaba da canjawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ƙa'idoji",
        objective: "O1",
        notYet: "Ƙa'idojin ba su kai biyar ba, ko ba a rubuta su da kalmomi masu sauƙi ba.",
        meets: "Ƙa'idoji biyar da kalmomi masu sauƙi.",
        exceeds: "Kowace ƙa'ida tana da gajeren misali daga makaranta."
      },
      {
        name: "Sirri da adalci",
        objective: "O3",
        notYet: "Dokokin sirri ko binciken adalci ba sa ciki.",
        meets: "Akwai dokokin sirri (FERPA, COPPA, kayan aikin da aka amince da su kaɗai) da binciken adalci.",
        exceeds: "Binciken adalci ya faɗi yadda makarantar za ta duba sakamakonta bisa rukuni."
      },
      {
        name: "Dokokin ma'aikata da ɗalibai",
        objective: "O5",
        notYet: "Babu dokokin abin da za a iya yi da wanda ba za a yi ba, ko ba su da sarari.",
        meets: "Ya faɗi abin da ma'aikata da ɗalibai za su iya yi da wanda ba za su yi ba.",
        exceeds: "Malamai sun duba dokokin kuma an yi canje-canjensu."
      },
      {
        name: "Tantance kamfani",
        objective: "O4",
        notYet: "Babu matakan tantance kamfani, ko ba a duba wani kayan aiki na gaske ba.",
        meets: "Matakan tantance kamfani, an gwada su a kan kayan AI ɗaya na gaske.",
        exceeds: "Ya lissafa abin da dole kamfanin ya tabbatar a yarjejeniya da aka sa wa hannu."
      },
      {
        name: "Shirin magance matsala",
        objective: "O6",
        notYet: "Matakan ba su kai shida ba, ko ba a gwada su a kan wata matsala ba.",
        meets: "Shirin magance matsala mai matakai shida, an bi shi a kan matsala ɗaya mai kama da ta gaske.",
        exceeds: "Ya rubuta giɓin da aka gano yayin bin matsalar da yadda jagororin za su canja."
      }
    ]
  },
  evaluation: {
    results: [
      "Shugabannin da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Makarantu ko gundumomin da suka amince da rubutattun jagororin AI cikin hakki cikin kwanaki 90 (binciken biyo baya)",
      "Kayan AI da aka tantance da matakan tantance kamfani kafin a amince da su (binciken biyo baya)",
      "Makarantun da suka yi atisayen shirin magance matsala tare da ƙungiyar shugabanninsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Manufofin fasaha, sirri da ƙa'idojin amfani na gundumarku na yanzu",
      "Kayan Model Terms of Service daga studentprivacy.ed.gov",
      "Wata matsala ƙirƙirarriya mai kama da ta gaske don atisayen bin matsala",
      "Kusan minti 60 don darussa da gwaje-gwaje, tare da lokacin rubutawa da gwada jagororin"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi amfani da ƙa'idoji biyar ɗin a kan kayan aiki ɗaya da ƙungiyar ta sani.",
      "Ku tunatar da shugabanni cewa kwas ɗin ba shawarar shari'a ba ne; ku gayyaci lauyan gunduma ko jami'in sirri zuwa zaman rubuta jagorori.",
      "Ku yi atisayen bin matsala a matsayin wasan kwaikwayo a tebur (tabletop exercise) da kowa da matsayinsa; ku yi amfani da misalai ƙirƙirarru kaɗai.",
      "Ku kula sosai da batun deepfake; ku tabbatar masu ba da shawara (counselors) suna nan, kuma kada ku taɓa nunawa ko raba hotunan yara ƙanana.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku nemi kowace ƙungiya ta faɗi giɓi ɗaya da bin matsalarta ya gano."
    ]
  }
};
