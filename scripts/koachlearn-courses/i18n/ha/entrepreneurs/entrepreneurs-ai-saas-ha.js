"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-saas.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-saas-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-saas",
  category: "Entrepreneurs",
  name: "Gina Manhajojin AI na SaaS",
  skills: "Zaɓar ƙaramin fanni na SaaS, Tsara mafi ƙanƙantar samfur mai amfani, Fahimtar API na AI da kuɗin amfani da shi, Gina samfurin gwaji ba tare da rubuta lamba mai yawa ba, Sanya farashin biyan kuɗi na wata-wata, Ƙaddamarwa cikin gaskiya da tsaro",
  outcome: "mayar da wata ƙaramar matsalar kasuwanci zuwa tsari mai shafi ɗaya na ƙaramar manhajar AI ta SaaS, gina samfurin gwaji na babban aikinta da ake iya dannawa ko wanda ke aiki, lissafa farashin biyan kuɗi da zai rufe kuɗin amfani da AI, da shirya jerin abubuwan dubawa na ƙaddamarwa mai gaskiya da tsaro.",
  about: [
    "SaaS (software as a service, wato manhaja a matsayin hidima) na nufin manhajar da mutane ke amfani da ita ta intanet kuma suke biyan kuɗi akai-akai, kamar tsarin wata-wata. Sababbin manhajojin SaaS da yawa suna sa samfurin AI a bayan allo mai sauƙi da ke yin aiki ɗaya da kyau sosai: rubuta bayanan gidaje ga masu kula da gidaje, taƙaita kiran waya ga shagunan gyara, fassara jerin abinci.",
    "Wannan kwas ɗin na 'yan kasuwa ne da ke son gina ƙaramar manhajar AI ta SaaS, har da waɗanda ba su iya rubuta lambar kwamfuta (code) ba tukuna. Za ku zaɓi ƙaramin fanni, ku tsara mafi ƙanƙantar samfur mai amfani, ku koyi yadda API na AI da kuɗin amfani da shi ke aiki, ku gina samfurin gwaji, ku sanya masa farashi, ku kuma shirya ƙaddamarwa mai gaskiya game da abin da AI ke yi, mai kuma kula da bayanan masu amfani.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da wani aikin hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Farashin samfuran AI da tsare-tsaren kayan aiki suna canjawa sau da yawa: koyaushe ku duba shafin farashi na kamfanin da kansa."
  ],
  finalTask: "Ku haɗa kayan farawa na AI SaaS: tsarin samfur mai shafi ɗaya (fanni, mai amfani, matsala, babban aiki ɗaya), samfurin gwaji na babban aikin (zane da ake iya dannawa, manhajar da aka gina ba tare da code ba, ko gajeren notebook mai aiki), takardar farashi da ke nuna kuɗin amfani da AI ga kowane mai amfani a wata da farashinku, da jerin abubuwan dubawa na ƙaddamarwa da ya ƙunshi iƙirari na gaskiya, sirri, sharuɗɗa, duba aikin AI da mutum, da yadda masu amfani za su same ku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan kasuwa da ke son gina ƙaramar manhajar AI ta SaaS don fannin da suka sani, har da waɗanda ba su iya rubuta code ba tukuna.",
    startingPoint: "Suna amfani da mataimakan AI na hira da kyau kuma sun san wani fanni ko masana'anta. Yawancinsu ba su taɓa tsara manhaja ba, ko amfani da API na AI, ko lissafa kuɗin amfani, ko shirya ƙaddamarwa mai tsarin sirri da sharuɗɗa ba.",
    gap: "Manhajojin AI da yawa suna ƙoƙarin yin abubuwa da yawa, kuɗin amfani da AI ya fi abin da suke karɓa, suna bayyana makullin API ko bayanan masu amfani, ko suna alƙawarin abin da AI ba zai iya yi ba. Masu koyo suna buƙatar tsara babban aiki ɗaya, tabbatar yana aiki, sanya farashin da zai rufe kuɗin amfani, da ƙaddamarwa cikin gaskiya da tsaro.",
    constraints: [
      "Kalmomi masu sauƙi; rubuta code ba dole ba ne, kuma samfurin gwaji na zane ko wanda aka gina ba tare da code ba yana da inganci",
      "Na'urori: kwamfuta mai spreadsheet (takardar lissafi), mataimakin AI kyauta, kuma idan ana so notebook kyauta ko kayan aikin da ba ya buƙatar code",
      "Lokaci: kusan minti biyar kowane darasi, da ayyukan hannu",
      "Farashin samfuran AI da tsare-tsaren kayan aiki suna canjawa sau da yawa; ku duba shafin farashi na kamfanin da kansa",
      "Bayanan gwaji da aka cire sunaye da bayanan sirri kawai; lauya ya duba tsarin sirri da sharuɗɗa; a duba harajin sayarwa (sales tax) da jiha ko akanta"
    ],
    prerequisites: "Ana ba da shawarar kwas ɗin \"Gina Kayayyaki da Hidimomi Masu Amfani da AI\", da kuma sanin amfani da spreadsheet."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da wani fanni da kuka sani", action: "zaɓar mai amfani ɗaya na musamman da aiki ɗaya da ake maimaitawa don manhajar AI ta SaaS", standard: "an rubuta shi a matsayin ra'ayi mai jimla ɗaya, kuma an tambayi aƙalla mutum ɗaya a fannin" },
    { id: "O2", condition: "Idan kuna da ra'ayin manhajarku", action: "rubuta babbar hanyar aiki a layi ɗaya, jerin \"ba yanzu ba\" da dokoki uku na \"kada a taɓa\" don sigar farko", standard: "babban aikin ya dace a kan allo ɗaya kawai" },
    { id: "O3", condition: "Ta amfani da farashin yanzu daga shafin farashi na kamfanin AI ɗinku", action: "bayyana yadda manhajarku ke amfani da samfurin AI ta API, da lissafa kuɗin AI ga kowane mai amfani a wata", standard: "an duba kowace dabarar lissafi, kuma makullin API ya kasance a sirri" },
    { id: "O4", condition: "Idan kuna da bayanai na gaske guda goma da aka cire bayanan sirri daga cikinsu", action: "gwada prompt ɗinku, ba sakamakon maki, da gina samfurin gwaji na babban aikin", standard: "kuna inganta prompt ɗin har yawancin sakamakon ya yi kyau, kuma kun nuna shi ga aƙalla mutum ɗaya a fannin" },
    { id: "O5", condition: "Idan kun san amfani da kuɗin kowane mai amfani", action: "yin takardar farashi mai tsare-tsare biyu, iyakokin amfani da ribar kowane mai amfani", standard: "ta yadda kowane tsari zai rufe kuɗin AI da sauran kuɗaɗe, kuma ya bar wurin riba" },
    { id: "O6", condition: "Kafin ku karɓi kuɗi", action: "shirya jerin abubuwan dubawa na ƙaddamarwa don iƙirari na gaskiya, bayanai, sharuɗɗan kamfanin AI, tsarin sirri da sharuɗɗa, da hanyar tuntuɓa", standard: "an shirya lauya ya duba, kuma ƙaddamarwar farko ƙarama ce" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ayyana manhajar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar ƙaramin fanni",
          minutes: 5,
          goal: "Zaɓi mai amfani na musamman da aiki na musamman da ake maimaitawa don manhajarku ta AI SaaS.",
          text: [
            "Manyan kayan AI na gama-gari sun riga sun wanzu, kuma sau da yawa kyauta ne. Ƙananan manhajojin SaaS suna nasara ta hanyar mai da hankali kan abu ɗaya: irin mai amfani ɗaya, aiki ɗaya da ake maimaitawa, wanda ake yi fiye da yadda mataimakin hira na gama-gari ke yi. \"Kayan rubutu na AI\" ya yi faɗi sosai. \"Yana mayar da bayanan aikin ɗan kwangila zuwa ƙiyasin farashi mai tsabta ga abokin ciniki cikin minti biyu\" ya yi ƙarami, kuma haka ake so.",
            "Fanni mai kyau yana da masu amfani da ke yin aiki iri ɗaya sau da yawa, suna rasa lokaci ko kuɗi a kansa, kuma sun riga sun biya kuɗin wasu manhajoji. Kuna iya samun su ta ƙungiyar sana'a, dandalin tattaunawa na intanet ko abokan hulɗa na yankinku.",
            "Ku nemi AI ya kawo ra'ayoyin fanni daga ƙwarewarku: \"Na yi aiki a [fanni]. Ka jera ayyuka goma na rubutu ko tsarawa da mutane a wannan fannin ke yi kowane mako.\" Sannan ku yi magana da mutane uku a fannin kafin ku ci gaba."
          ],
          steps: ["Ku jera fannonin da kuka sani sosai.", "Ku nemi AI ya jera ayyukan da ake maimaitawa a waɗannan fannonin.", "Ku zaɓi mai amfani ɗaya da aiki ɗaya.", "Ku duba: ana yin sa sau da yawa, yana ɓata kuɗi ko lokaci, sun riga sun biya manhaja, kuma suna da sauƙin samu.", "Ku yi magana da mutane uku da ke yin wannan aikin."],
          words: [["SaaS", "software as a service: manhajar intanet da mutane ke biya ta hanyar biyan kuɗi akai-akai (subscription)."], ["Fanni (niche)", "ƙaramin rukuni na musamman na masu amfani da ke da buƙata iri ɗaya."]],
          slides: [
            { title: "Ƙarami ne ke nasara", bullets: ["Mai amfani ɗaya, aiki ɗaya da ake maimaitawa", "Ya fi mataimakin hira na gama-gari", "\"Bayanan aiki zuwa ƙiyasin farashi cikin minti biyu\""] },
            { title: "Fanni mai kyau", bullets: ["Suna yin aikin sau da yawa", "Suna rasa lokaci ko kuɗi a kansa", "Sun riga sun biya manhaja; suna da sauƙin samu"] },
            { title: "Ku fara daga abin da kuka sani", bullets: ["Ku nemi AI ya jera ayyukan da ake maimaitawa a fanninku", "Ku yi magana da mutane uku kafin ku gina"] }
          ],
          tryIt: "Ku yi amfani da AI don jera ayyuka goma da ake maimaitawa a fannin da kuka sani, ku zaɓi mai amfani ɗaya da aiki ɗaya, sannan ku rubuta ra'ayin manhaja a jimla ɗaya. Ku tambayi aƙalla mutum ɗaya a wannan fannin ko zai taimaka.",
          youCanNow: "zaɓar ƙaramin fanni da ake iya kaiwa gare shi don manhajar AI ta SaaS.",
          quickCheck: [
            { objective: "O1", q: "Me ke sa fanni ya yi kyau ga ƙaramar manhajar AI ta SaaS?", options: ["Masu amfani da ke yin aikin sau da yawa kuma sun riga sun biya manhaja", "Kowa a duniya", "Aikin da mutane ke yi sau ɗaya a rayuwarsu", "Fannin da ba ku san komai a kansa ba"], answer: 0, why: "Ayyukan da ake yi sau da yawa da masu amfani da suka riga suka biya suna sa manhaja ta fi sauƙin sayarwa." },
            { objective: "O1", q: "Ra'ayinku shi ne \"AI ga dukkan ƙananan kasuwanci\". Me za ku yi?", options: ["Ku bar shi da faɗi don ku kai ga mutane da yawa", "Ku taƙaita shi zuwa mai amfani ɗaya da aiki ɗaya da ake maimaitawa", "Ku ƙara ayyuka", "Ku fara rubuta code nan take"], answer: 1, why: "Ƙananan manhajojin AI SaaS suna nasara ta hanyar yin aiki ɗaya ga mai amfani ɗaya da kyau sosai." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsara mafi ƙanƙantar samfur mai amfani (MVP)",
          minutes: 5,
          goal: "Ayyana babban aiki ɗaya da sigarku ta farko dole ta yi da kyau.",
          text: [
            "Mafi ƙanƙantar samfur mai amfani (MVP) ita ce sigar mafi ƙanƙanta da ke magance babbar matsalar da kyau har wani zai biya. Ga AI SaaS, yawanci allo ɗaya ne: mai amfani ya saka wani abu, AI ya yi aikin, mai amfani ya duba ya kwafi sakamakon.",
            "Ku rubuta babbar hanyar aikinku a layi ɗaya: \"Ɗan kwangila ya liƙa bayanan aiki, ya zaɓi samfuri, ya sami daftarin ƙiyasin farashi, ya gyara, ya sauke.\" Duk sauran abubuwa (asusu, ƙungiyoyi, haɗawa da wasu manhajoji, allunan bayanai) su jira har sai mutane suna biya.",
            "Ku kuma yanke abin da AI kada ya taɓa yi, kamar ƙirƙirar farashi, ba da shawarar shari'a, ko aika komai ba tare da mai amfani ya danna ba. Waɗannan dokoki suna tsara duka prompt ɗin umarninku da allonku."
          ],
          steps: ["Ku rubuta babbar hanyar aiki a layi ɗaya: shigarwa, aikin AI, dubawar mai amfani, sakamako.", "Ku jera ayyukan da BA za ku gina yanzu ba.", "Ku rubuta abubuwa uku da AI kada ya taɓa yi.", "Ku zana allon guda ɗaya a takarda."],
          words: [["MVP", "minimum viable product (mafi ƙanƙantar samfur mai amfani): sigar mafi ƙanƙanta da ke magance babbar matsalar da kyau har ana iya sayar da ita."], ["Babbar hanyar aiki (core flow)", "babbar hanyar da mai amfani ke bi don a gama aikin."]],
          slides: [
            { title: "Sigar mafi ƙanƙanta mai amfani", bullets: ["Allo ɗaya", "Shigarwa, aikin AI, dubawar mai amfani, sakamako"] },
            { title: "Ba yanzu ba", bullets: ["Ƙungiyoyi da allunan bayanai", "Haɗawa da wasu manhajoji", "Duk abin da ba ya cikin babbar hanyar aiki"] },
            { title: "AI kada ya taɓa", bullets: ["Ƙirƙirar farashi ko bayanai", "Ba da shawarar shari'a ko ta lafiya", "Yin wani abu ba tare da mai amfani ya danna ba"] }
          ],
          tryIt: "Ku rubuta babbar hanyar aikinku a layi ɗaya, jerinku na \"ba yanzu ba\" da dokokinku uku na \"kada a taɓa\", sannan ku zana allon guda ɗaya.",
          youCanNow: "tsara MVP na AI SaaS a kan babban aiki ɗaya mai iyakoki a sarari.",
          quickCheck: [
            { objective: "O2", q: "Me ake sakawa a jerin \"ba yanzu ba\"?", options: ["Babban aikinku", "Farashinku", "Ayyukan da za su jira har mutane suna biya", "Dokokinku na \"kada a taɓa\""], answer: 2, why: "Jerin \"ba yanzu ba\" yana sa sigar farko ta kasance ƙarama." },
            { objective: "O2", q: "Kuna son ƙara allunan bayanai na ƙungiya, hira da rahotanni a sigar farko. Me za ku yi?", options: ["Ku gina su duka yanzu", "Ku ɗauki babbar ƙungiyar ma'aikata", "Ku cire babban aikin", "Ku riƙe babban aiki ɗaya ku sa sauran a jerin \"ba yanzu ba\""], answer: 3, why: "MVP yana fara magance babbar matsalar tukuna." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yadda API na AI ke aiki da kuɗinsa",
          minutes: 6,
          goal: "Bayyana yadda manhaja ke amfani da samfurin AI ta API, da lissafa kuɗin kowane mai amfani.",
          text: [
            "API (application programming interface, wato hanyar haɗa shirye-shirye) yana bar manhajarku ta aika buƙata ga samfurin AI ta karɓi amsa. Manhajarku tana aika prompt ɗin umarninku tare da abin da mai amfani ya saka; samfurin yana mayar da rubutu (ko hoto, ko bayanai masu tsari); manhajarku tana nuna shi.",
            "Yawancin kamfanonin samfuran AI suna karɓar kuɗi gwargwadon amfani, sau da yawa ana ƙirga shi da token (ƙananan guntun rubutu, kusan sassan kalmomi), da farashi daban na shigarwa da na fitarwa, da kuma na samfura daban-daban. Farashi yana canjawa sau da yawa, don haka ku duba shi a shafin farashi na kamfanin a ranar da kuke tsarawa.",
            "Lissafin kuɗin kowane mai amfani: kusan buƙatu nawa mai amfani ke yi a wata, sau matsakaicin girman kowace buƙata da amsa, sau farashin. Ku nemi AI ya taimaka wajen tsara spreadsheet ɗin, sannan ku duba lissafin. Ku ɓoye makullin API ɗinku: kada ku taɓa liƙa shi a hira, a shafin intanet ko a fayil na jama'a."
          ],
          steps: ["Ku rubuta abin da manhajarku ke aikawa: prompt ɗin umarni + abin da mai amfani ya saka.", "Ku ƙiyasta buƙatun kowane mai amfani a wata.", "Ku ƙiyasta girman kowace buƙata da amsa.", "Ku duba farashin yanzu a shafin farashi na kamfanin.", "Ku lissafa kuɗin kowane mai amfani a wata, kuma ku ɓoye makullin API ɗinku."],
          words: [["API", "hanyar da wani shiri ke aika buƙatu zuwa wani shiri ya karɓi amsoshi."], ["Token", "ƙaramin guntun rubutu da kamfanonin AI ke ƙirgawa don auna amfani da farashi."], ["Makullin API (API key)", "lambar sirri da ke bar manhajarku ta yi amfani da API na wani kamfani, kuma ku ne ake karɓar kuɗin a wurinku."]],
          slides: [
            { title: "Yadda yake aiki", bullets: ["Manhajarku tana aika prompt + abin da mai amfani ya saka", "Samfurin yana mayar da amsa", "Manhajarku tana nuna ta ga mai amfani"] },
            { title: "Farashi gwargwadon amfani", bullets: ["Sau da yawa ana ƙirga shi da token", "Shigarwa da fitarwa farashinsu daban", "Ku duba shafin farashi na kamfanin"] },
            { title: "Kuɗin kowane mai amfani", bullets: ["Buƙatu a wata", "x girman kowace buƙata da amsa", "x farashin yanzu"] },
            { title: "Ku ɓoye makullin API", bullets: ["Kada a hira, a shafin intanet ko a fayil na jama'a", "Duk wanda ya same shi zai iya kashe kuɗinku"] }
          ],
          tryIt: "Ku yi ƙaramin spreadsheet da ke ƙiyasta kuɗin AI ga kowane mai amfani a wata: buƙatu, girma da farashin yanzu daga shafin farashi na kamfanin da kuka zaɓa. Ku duba kowace dabarar lissafi.",
          youCanNow: "bayyana yadda manhajar AI ta SaaS ke amfani da API, da ƙiyasta kuɗin amfani na kowane mai amfani.",
          quickCheck: [
            { objective: "O3", q: "Me API ke bar manhajarku ta yi?", options: ["Aika buƙatu ga samfurin AI da karɓar amsoshi", "Zana tambari (logo)", "Karɓar kuɗi", "Rubuta sharuɗɗanku"], answer: 0, why: "API ne ke haɗa manhajarku da samfurin AI." },
            { objective: "O3", q: "Wani mai taimako ya ce ku liƙa makullin API ɗinku a hirar rukuni. Me za ku yi?", options: ["Ku liƙa shi", "Ku ɓoye shi, kada ku taɓa liƙa shi a hira ko fayil", "Ku sa shi a shafin intanet ɗinku", "Ku saka shi a fayil na jama'a"], answer: 1, why: "Duk wanda ke da makullinku zai iya amfani da API ya kashe kuɗinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ayyana manhajar",
        questions: [
          { objective: "O1", q: "Wane ne fanni mafi kyau ga ƙaramar manhajar AI ta SaaS?", options: ["Kayan AI ga kowa", "Mayar da bayanan aikin 'yan kwangila zuwa ƙiyasin farashi ga abokan ciniki", "Mataimakin hira na gama-gari", "Dukkan kasuwanci"], answer: 1, why: "Mai amfani ƙayyadadde tare da aiki da ake maimaitawa ya fi kayan gama-gari." },
          { objective: "O2", q: "Mene ne MVP?", options: ["Cikakkiyar manhaja mai kowane aiki", "Sigar mafi tsada", "Kyautar wasanni", "Sigar mafi ƙanƙanta da ke magance babbar matsalar da kyau har ana iya sayar da ita"], answer: 3, why: "MVP = mafi ƙanƙantar samfur mai amfani (minimum viable product)." },
          { objective: "O2", q: "Wane aiki ne ya kamata ya jira har mutane suna biya?", options: ["Allunan bayanai na ƙungiya", "Babbar hanyar daga shigarwa zuwa sakamako", "Matakin dubawar mai amfani", "Aikin AI da kansa"], answer: 0, why: "Babbar hanyar aiki kaɗai ce ke cikin MVP." },
          { objective: "O3", q: "Kamfanonin AI sau da yawa suna auna amfani da:", options: ["Mintunan hasken rana", "Shafuka", "Token", "Abokan ciniki"], answer: 2, why: "Token ƙananan guntun rubutu ne da ake amfani da su wajen farashi." },
          { objective: "O3", q: "Ina ne makullin API ɗinku kada ya TAƁA zuwa?", options: ["A cikin manhajar ajiye kalmomin sirri (password manager)", "A wurin saituna mai tsaro na manhajarku", "A hira, a shafin intanet ko a fayil na jama'a", "A asusunku na kamfanin AI"], answer: 2, why: "Duk wanda ke da makullin zai iya amfani da shi ya kashe kuɗinku." }
        ]
      }
    },
    {
      name: "Babi na 2: Gina, sanya farashi da ƙaddamarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina samfurin gwaji na babban aikin",
          minutes: 6,
          goal: "Gina samfurin gwaji na babban aikinku, ku gwada shi da bayanai na gaske.",
          text: [
            "Ku fara da gwada aikin AI da kansa, kafin kowace manhaja: ku saka prompt ɗin umarninku da bayanai na gaske guda goma (da aka cire bayanan sirri) a mataimakin hira, ku duba sakamakon. Idan AI ba zai iya yin aikin da kyau a hira ba, manhaja ba za ta gyara hakan ba. Ku inganta prompt ɗin har sakamako 8 ko 9 cikin 10 sun yi kyau.",
            "Sannan ku yi samfurin gwajin a matakin da za ku iya: zanen allo da ake iya dannawa (a kayan zane kamar Canva ko a slides), kayan gina manhaja ba tare da code ba da ke iya kiran samfurin AI, ko gajeren notebook na Python a Google Colab da ke kiran API, tare da ɓoye makullinku.",
            "Ku nuna samfurin gwajin ga mutane uku a fanninku, ku kalle su suna amfani da shi. Ku rubuta inda suka makale da inda sakamakon AI ya buƙaci gyara."
          ],
          steps: ["Ku tattara bayanai na gaske guda goma ku cire bayanan sirri.", "Ku gwada prompt ɗin umarninku a mataimakin hira.", "Ku inganta prompt ɗin har yawancin sakamakon ya yi kyau.", "Ku gina samfurin gwaji: zane, manhaja ba tare da code ba, ko notebook.", "Ku kalli masu amfani uku na fanninku suna gwada shi, ku rubuta matsaloli."],
          words: [["Samfurin gwaji (prototype)", "sigar farko mai sauƙi da ake amfani da ita don gwada ra'ayi."], ["Zanen allo (mock-up)", "hoto ko samfurin allo da ake iya dannawa da ke nuna yadda manhajar za ta yi kama."], ["Google Colab", "notebook na intanet kyauta da za ku iya gudanar da code na Python a burauzar intanet."]],
          slides: [
            { title: "Ku fara gwada aikin AI", bullets: ["Prompt ɗin umarni + bayanai na gaske guda goma", "A mataimakin hira", "Ku nemi sakamako 8 ko 9 masu kyau cikin 10"] },
            { title: "Ku zaɓi matakin samfurin gwajinku", bullets: ["Zanen allo da ake iya dannawa", "Kayan gina manhaja ba tare da code ba", "Notebook na Python a Google Colab"] },
            { title: "Ku kalli masu amfani na gaske", bullets: ["Mutane uku daga fanninku", "A ina suke makalewa?", "A ina AI ya buƙaci gyara?"] }
          ],
          tryIt: "Ku gwada prompt ɗinku a kan bayanai goma da aka cire bayanan sirri, ku ba sakamakon maki. Sannan ku gina samfurin gwaji mafi sauƙi da za ku iya, ku nuna shi ga aƙalla mutum ɗaya a fanninku.",
          youCanNow: "tabbatar cewa aikin AI yana aiki, da gina samfurin gwaji da mutane za su iya gwadawa.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata ku gwada kafin ku gina kowace manhaja?", options: ["Tambarin (logo)", "Farashin", "Ko AI yana yin aikin da kyau da prompt ɗinku", "Launukan shafin intanet ɗinku"], answer: 2, why: "Idan AI ba zai iya yin aikin ba, manhaja ba za ta taimaka ba." },
            { objective: "O4", q: "Wani mai gwaji ya makale a akwatin shigarwa na samfurin gwajinku. Me za ku yi?", options: ["Ku yi watsi da shi", "Ku ɗora wa mai amfani laifi", "Ku ƙara ayyuka", "Ku rubuta shi ku sa wannan matakin ya fi sauƙin fahimta"], answer: 3, why: "Inda masu amfani ke makalewa yana nuna abin da za a gyara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sanya farashin biyan kuɗi na wata-wata",
          minutes: 5,
          goal: "Sanya farashin wata-wata da zai rufe kuɗin AI da sauran kuɗaɗe, kuma ya bar wurin riba.",
          text: [
            "Ku fara daga amfani: lokaci ko kuɗi nawa manhajarku ke ceto ga mai amfani kowane wata? Idan tana ceto awa uku ga ɗan kwangila, farashin da ya yi ƙasa sosai da darajar waɗannan awoyi yana da sauƙin bayyanawa.",
            "Sannan ku duba kuɗaɗe: kuɗin AI na kowane mai amfani (daga Darasi na 3), kuɗin ajiye manhaja a intanet (hosting) da kayan aiki, kuɗin karɓar biya, lokacin taimakon masu amfani, da lokacinku. Masu amfani sosai suna iya cin kuɗi fiye da matsakaicin mai amfani sosai, don haka ku yi tunanin iyakokin amfani a kowane tsari.",
            "Manhajojin SaaS da yawa suna ba da tsare-tsare biyu ko uku masu iyakoki a sarari, da lokacin gwaji kyauta. Ku nemi AI ya ba da shawarar tsarin farashi, amma ku ne za ku sanya lambobin ƙarshe ku duba su a spreadsheet. Game da harajin sayarwa da harajin kasuwanci a kan manhaja, ku duba hukumar haraji ta jiharku da irs.gov, ko ku tambayi akanta, domin dokoki sun bambanta."
          ],
          steps: ["Ku ƙiyasta amfanin ga mai amfani kowane wata.", "Ku ƙara kuɗaɗe na kowane mai amfani: amfani da AI, hosting, karɓar biya, taimako.", "Ku shirya wa masu amfani sosai da iyakoki.", "Ku tsara tsare-tsare biyu ko uku da lokacin gwaji.", "Ku duba lissafin, ku tambayi akanta game da haraji."],
          words: [["Biyan kuɗi akai-akai (subscription)", "biyan wani adadi a kai a kai, kamar kowane wata, don ci gaba da amfani da manhaja."], ["Iyakar amfani", "iyaka a kan yawan abin da tsari zai iya amfani da shi, kamar ƙiyasin farashi 100 a wata."], ["Gwaji kyauta", "ɗan gajeren lokaci da mutane za su iya amfani da manhajar ba tare da biya ba."]],
          slides: [
            { title: "Ku fara daga amfani", bullets: ["Lokaci ko kuɗin da ake ceto kowane wata", "Farashi ƙasa sosai da wannan darajar"] },
            { title: "Ku rufe kuɗaɗenku", bullets: ["Kuɗin AI na kowane mai amfani", "Hosting, karɓar biya, taimako", "Masu amfani sosai: ku sa iyakoki"] },
            { title: "Tsare-tsare", bullets: ["Tsare-tsare biyu ko uku masu iyakoki a sarari", "Gwaji kyauta", "Dokokin haraji sun bambanta: ku tambayi akanta"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center (cibiyar haraji ta masu sana'ar kansu)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Ku yi takardar farashi: amfani ga kowane mai amfani, kuɗin kowane mai amfani (har da amfani da AI), tsare-tsare biyu masu iyakoki, da ribar kowane mai amfani a kowane tsari. Ku duba kowace dabarar lissafi.",
          youCanNow: "sanya farashin biyan kuɗi na AI da zai rufe kuɗin amfani kuma ya dace da amfanin da masu amfani ke samu.",
          quickCheck: [
            { objective: "O5", q: "Daga ina ya kamata farashin biyan kuɗi ya fara?", options: ["Amfanin da manhajar ke ba mai amfani", "Farashi mafi ƙanƙanta da za ku samu", "Lamba kawai da aka ɗauka ba da dalili ba", "Abin da abokanku ke tunani"], answer: 0, why: "Ku sanya farashi daga amfani, sannan ku duba ko ya rufe kuɗaɗe." },
            { objective: "O5", q: "Wasu masu amfani sosai suna cin kuɗin AI fiye da abin da suke biya. Me za ku yi?", options: ["Ku cire duk iyakoki", "Ku sa iyakokin amfani a kowane tsari", "Ku rage farashi", "Ku daina bin diddigin kuɗaɗe"], answer: 1, why: "Iyakokin amfani suna hana masu amfani sosai su shafe riba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ƙaddamarwa cikin gaskiya da tsaro",
          minutes: 6,
          goal: "Shirya jerin abubuwan dubawa na ƙaddamarwa da ke sa iƙirari su kasance na gaskiya, kuma bayanan masu amfani su kasance lafiya.",
          text: [
            "Amana ita ce babbar dukiyarku a matsayin sabuwar SaaS. Ku faɗi gaskiya game da abin da AI ke yi da iyakokinsa: ku ce sakamakon AI ne ya samar da shi kuma ya kamata a duba shi. FTC (hukumar kasuwanci ta tarayyar Amurka) ta ce dole talla ta zama gaskiya, ba mai ruɗarwa ba, kuma tana da hujja, kuma ta ɗauki mataki a kan kamfanoni saboda iƙirarin AI na ƙarya.",
            "Ku kare bayanan masu amfani. Ku bi ƙa'idodin FTC na tsaron bayanai: ku san abin da kuke tattarawa, ku rage shi zuwa abin da kuke buƙata, ku kulle shi, ku zubar da abin da ba ku buƙata kuma, ku kuma shirya tun da wuri don matsaloli. Ku duba abin da kamfanin AI ɗinku ke yi da bayanan da aka aika ta API ɗinsa, ku kuma faɗi hakan a tsarin sirri (privacy policy).",
            "Ku sami tsarin sirri da sharuɗɗan amfani (terms of service) kafin ku karɓi kuɗi; akwai samfuran rubutu, amma ku sa lauya ya duba su don halin da kuke ciki. Ku ba masu amfani hanya mai sauƙi ta kaiwa ga mutum, ku kuma ƙaddamar a ƙarami: wasu masu amfani kaɗan daga fanninku tukuna, sannan ku faɗaɗa."
          ],
          steps: ["Ku rubuta talla ta gaskiya: abin da manhajar ke yi, iyakokinta, \"ku duba sakamakon AI\".", "Ku jera bayanan masu amfani da kuke tattarawa, ku cire wanda ba ku buƙata.", "Ku duba sharuɗɗan bayanai na kamfanin AI ɗinku.", "Ku shirya tsarin sirri da sharuɗɗa, lauya ya duba su.", "Ku ƙara hanyar kaiwa ga mutum, ku ƙaddamar ga ƙaramin rukuni tukuna."],
          words: [["Tsarin sirri (privacy policy)", "sanarwa ta jama'a game da bayanan da kuke tattarawa da yadda kuke amfani da su."], ["Sharuɗɗan amfani (terms of service)", "dokokin da masu amfani ke amincewa da su idan suna amfani da manhajarku."], ["Ƙaddamarwa (launch)", "bayar da manhajarku ga masu amfani."]],
          slides: [
            { title: "Gaskiya game da AI", bullets: ["Ku faɗi abin da yake yi da iyakokinsa", "\"AI ne ya samar: don Allah ku duba\"", "FTC: iƙirari yana buƙatar hujja"] },
            { title: "Ku kare bayanan masu amfani", bullets: ["Ku san abin da kuke da shi, ku rage shi, ku kulle shi", "Ku zubar da abin da ba ku buƙata; ku shirya tun da wuri", "Ku duba sharuɗɗan bayanai na kamfanin AI ɗinku"] },
            { title: "Kafin karɓar kuɗi", bullets: ["Tsarin sirri da sharuɗɗa", "Lauya ya duba su", "Hanya mai sauƙi ta kaiwa ga mutum"] },
            { title: "Ku ƙaddamar a ƙarami", bullets: ["Wasu masu amfani kaɗan na fanninku tukuna", "Ku gyara, sannan ku faɗaɗa"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (tushen talla da tallatawa)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Protecting Personal Information, A Guide for Business (kare bayanan sirri, jagora ga kasuwanci)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Aikin ƙarshe: ku rubuta jerin abubuwan dubawa na ƙaddamarwa (iƙirari na gaskiya, jerin bayanai, sharuɗɗan kamfanin AI, tsarin sirri da sharuɗɗa don lauya ya duba, hanyar tuntuɓa, ƙaramar ƙaddamarwa ta farko), ku kuma haɗa kayan farawa na AI SaaS tare da tsarinku, samfurin gwajinku da takardar farashinku.",
          youCanNow: "tsarawa, gina samfurin gwaji, sanya farashi da shirya ƙaddamarwa mai gaskiya da tsaro ta ƙaramar manhajar AI ta SaaS.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata tallarku ta faɗa game da sakamakon AI?", options: ["Koyaushe cikakke ne", "Yana maye gurbin ƙwararru", "AI ne ya samar da shi kuma ya kamata a duba shi", "Babu komai game da AI"], answer: 2, why: "Iƙirari na gaskiya yana faɗa wa masu amfani abin da AI ke yi da iyakokinsa." },
            { objective: "O6", q: "Kun shirya ƙaddamarwa. Ga wa za ku fara ƙaddamarwa?", options: ["Ga kowa lokaci ɗaya da tallace-tallace na biya", "Ba kowa; ku ci gaba da gwaji har abada", "Ga mutanen da ba sa cikin fanninku kawai", "Ga ƙaramin rukuni na masu amfani daga fanninku"], answer: 3, why: "Ƙaramar ƙaddamarwa ta farko tana bar ku gyara matsaloli lafiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gina, sanya farashi da ƙaddamarwa",
        questions: [
          { objective: "O4", q: "Me ya kamata ku gwada kafin ku gina kowace manhaja?", options: ["Ko AI zai iya yin aikin da kyau ta amfani da prompt ɗinku a hira", "Tambarin (logo)", "Shafin farashi", "Sunan shafin intanet (domain)"], answer: 0, why: "Idan AI ba zai iya yin aikin ba, manhaja ba za ta gyara hakan ba." },
          { objective: "O4", q: "Wane ne matakin samfurin gwaji mai sauri ga wanda ba ya rubuta code?", options: ["Babu komai har sai an ƙaddamar", "Cikakkiyar cibiyar ajiye bayanai (data center) ta musamman", "Ɗaukar injiniyoyi 20", "Zanen allo da ake iya dannawa"], answer: 3, why: "Zanen allo yana bar masu amfani su ba da ra'ayi ba tare da code ba." },
          { objective: "O5", q: "Me yasa za a sa iyakokin amfani a tsare-tsare?", options: ["Don a dami masu amfani", "Masu amfani sosai suna iya cin kuɗin AI fiye da kima", "Saboda doka ta wajabta", "Don a ɓoye farashi"], answer: 1, why: "Iyakoki suna sa kuɗin AI ya kasance mai sauƙin hasashe." },
          { objective: "O6", q: "Me ya kamata tallarku ta faɗa game da sakamakon AI?", options: ["AI ne ya samar da shi kuma ya kamata a duba shi", "Daidai ne 100%", "Yana maye gurbin ƙwararru", "Babu komai ko kaɗan"], answer: 0, why: "Faɗin iyakoki da gaskiya yana gina amana kuma yana hana iƙirari mai ruɗarwa." },
          { objective: "O6", q: "Kafin ku karɓi kuɗi, ya kamata ku sami:", options: ["Shaidar wani shahararren mutum", "Ayyuka dubu", "Tsarin sirri da sharuɗɗan amfani da lauya ya duba", "Babu bayanan tuntuɓa"], answer: 2, why: "Suna sanya dokoki a sarari kuma suna kare ku da masu amfani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Manhajojin AI na SaaS",
    questions: [
      { objective: "O1", q: "SaaS gajartawa ce ta:", options: ["Sayarwa da shago", "Software as a service (manhaja a matsayin hidima)", "AI mai sauƙi da bincike", "Hidimar manhaja ta shiga mai tsaro"], answer: 1, why: "Manhajar intanet ce da ake biya ta hanyar biyan kuɗi akai-akai." },
      { objective: "O1", q: "Ƙananan manhajojin AI SaaS yawanci suna nasara ta hanyar:", options: ["Kwaikwayon babban mataimakin hira", "Yin komai ga kowa", "Zama mafi tsada", "Yin aiki ɗaya ga irin mai amfani ɗaya da kyau sosai"], answer: 3, why: "Mai da hankali kan abu ɗaya ya fi kayan gama-gari." },
      { objective: "O1", q: "Fanni mai kyau yana da masu amfani da:", options: ["Ba su da kasafin kuɗi", "Ba sa taɓa yin aikin", "Ba a iya kaiwa gare su", "Suke yin aikin sau da yawa kuma sun riga sun biya manhaja"], answer: 3, why: "Irin waɗannan masu amfani suna da yiwuwar saye." },
      { objective: "O1", q: "Kafin ku gina, ya kamata ku yi magana da:", options: ["Babu kowa", "Mutane uku a fannin", "Masu zuba jari kawai", "AI kawai"], answer: 1, why: "Masu amfani na gaske suna tabbatar da matsalar." },
      { objective: "O2", q: "MVP na AI SaaS yawanci shi ne:", options: ["Cikakken kamfani", "Manhajoji goma", "Allo ɗaya: shigarwa, aikin AI, dubawar mai amfani, sakamako", "Tambari (logo)"], answer: 2, why: "Sigar mafi ƙanƙanta mai amfani." },
      { objective: "O2", q: "Rubuta abin da AI kada ya taɓa yi yana taimakawa wajen:", options: ["Tsara prompt ɗin umarninku da allonku", "Sa manhajar ta yi jinkiri", "Ƙara farashi", "Babu komai"], answer: 0, why: "Iyakoki a sarari suna rage kurakurai masu cutarwa." },
      { objective: "O3", q: "API yana bar manhajarku ta:", options: ["Biya haraji", "Buga takardu", "Aika buƙatu ga samfurin AI ta karɓi amsoshi", "Ɗauki ma'aikata"], answer: 2, why: "Abin da API ke yi ke nan." },
      { objective: "O3", q: "A ina ya kamata ku duba farashin samfuran AI na yanzu?", options: ["Shafin farashi na kamfanin", "Tsohon rubutun blog", "Hasashe", "Manhajar abokin hamayya"], answer: 0, why: "Farashi yana canjawa sau da yawa." },
      { objective: "O3", q: "Ana ƙiyasta kuɗin kowane mai amfani daga:", options: ["Yawan tambura", "Buƙatu a wata x girma x farashi", "Kuɗin hayarku kawai", "Shekarun mai amfani"], answer: 1, why: "Amfani ne ke jawo kuɗin AI." },
      { objective: "O3", q: "Idan wani ya sami makullin API ɗinku, zai iya:", options: ["Gyara kurakuranku", "Babu komai", "Karanta imel ɗinku kawai", "Amfani da API ya kashe kuɗinku"], answer: 3, why: "Ku ne ake karɓar kuɗin makullin a wurinku." },
      { objective: "O4", q: "Kun gwada prompt ɗinku a kan bayanai goma kuma 4 sun yi kyau. Me ke gaba?", options: ["Ku inganta prompt ɗin kafin ku gina manhajar", "Ku gina manhajar duk da haka", "Ku ƙaddamar gobe", "Ku ƙara farashi"], answer: 0, why: "Ku fara neman yawancin sakamakon ya yi kyau tukuna." },
      { objective: "O4", q: "Google Colab shi ne:", options: ["Spreadsheet kawai", "Manhajar biyan kuɗi", "Dandalin sada zumunta", "Notebook na intanet kyauta don gudanar da Python a burauzar intanet"], answer: 3, why: "Yana bar ku gwada code ba tare da saka komai a kwamfuta ba." },
      { objective: "O4", q: "Idan kuna kallon masu amfani suna gwada samfurin gwajinku, ku rubuta:", options: ["Adireshin gidansu", "Kalmomin sirrinsu", "Inda suka makale da inda sakamakon AI ya buƙaci gyara", "Babu komai"], answer: 2, why: "Wannan yana nuna abin da za a gyara." },
      { objective: "O5", q: "Sanya farashi ya kamata ya fara daga:", options: ["Lamba kawai ba da dalili ba", "Amfanin da manhajar ke ba mai amfani", "Tambarin abokin hamayyarku", "Launin shafinku"], answer: 1, why: "Amfani ne ke ƙayyade abin da masu amfani za su biya." },
      { objective: "O5", q: "Wanne ne kuɗin SaaS na kowane mai amfani?", options: ["Kofin kyauta", "Abincin rana na mai amfani", "Hutunku", "Amfani da AI"], answer: 3, why: "Amfani da AI yana ƙaruwa da kowane mai amfani." },
      { objective: "O5", q: "Game da harajin sayarwa a kan manhaja, ya kamata ku:", options: ["Tambayi masu amfani", "Ɗauka cewa ba ya aiki ko yaushe", "Duba hukumar haraji ta jiharku ko ku tambayi akanta", "Yi watsi da shi"], answer: 2, why: "Dokoki sun bambanta daga jiha zuwa jiha." },
      { objective: "O6", q: "Ƙa'idar bayanai ta FTC ta \"rage shi\" (scale down) na nufin:", options: ["Tattara da ajiye abin da kuke buƙata kawai", "Rage girman tambarinku", "Rage farashinku", "Ɗaukar ma'aikata kaɗan"], answer: 0, why: "Ƙarancin bayanai yana nufin ƙarancin haɗari." },
      { objective: "O6", q: "Me yasa za ku duba sharuɗɗan bayanai na kamfanin AI ɗinku?", options: ["Don canja salon rubutu", "Don sanin abin da ke faruwa da bayanan masu amfani da aka aika ta API", "Don samun kuɗin amfani kyauta", "Ba a buƙata"], answer: 1, why: "Dole ku faɗa wa masu amfani yadda ake sarrafa bayanansu." },
      { objective: "O6", q: "Wane ne ya kamata ya duba tsarin sirrinku da sharuɗɗanku?", options: ["Hirar AI kawai", "Lauya", "Mai amfaninku na farko", "Babu kowa"], answer: 1, why: "Takardun shari'a suna buƙatar ƙwararre ya duba su." },
      { objective: "O6", q: "Hanya mai aminci ta ƙaddamarwa ita ce:", options: ["Ga ƙaramin rukuni na masu amfani daga fanninku tukuna", "Ga kowa lokaci ɗaya ba tare da taimako ba", "Ba tare da hanyar tuntuɓa ba", "Ba tare da gwaji ba"], answer: 0, why: "Ƙaramar ƙaddamarwa tana bar ku gyara matsaloli da wuri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      4,
      6,
      8,
      10,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsarin samfur",
        objective: "O2",
        notYet: "Fanni, mai amfani, matsala ko babban aiki ba a sarari yake ba, ko babu shi.",
        meets: "Shafi ɗaya mai fanni, mai amfani, matsala, babban aiki ɗaya da dokokin \"kada a taɓa\".",
        exceeds: "Ya haɗa da abin da wani mai amfani a fannin ya faɗa game da ra'ayin."
      },
      {
        name: "Samfurin gwaji",
        objective: "O4",
        notYet: "Babu samfurin gwaji, ko ba a gwada prompt ɗin a kan bayanai na gaske ba.",
        meets: "Zane, manhaja ba tare da code ba, ko notebook na babban aikin, an gwada shi a kan bayanai goma da aka cire bayanan sirri.",
        exceeds: "An nuna shi ga mai amfani a fannin, kuma an yi canje-canje daga abin da ya yi."
      },
      {
        name: "Ƙiyasin kuɗin AI",
        objective: "O3",
        notYet: "Babu kuɗin kowane mai amfani, ko farashin ba daga shafin kamfanin ba ne.",
        meets: "Kuɗin AI na kowane mai amfani a wata daga buƙatu, girma da farashin yanzu, an duba dabarun lissafi.",
        exceeds: "Yana nuna kuɗin mai amfani kaɗan da na mai amfani sosai."
      },
      {
        name: "Takardar farashi",
        objective: "O5",
        notYet: "Farashin bai rufe kuɗin AI da sauran kuɗaɗe ba.",
        meets: "Tsare-tsare biyu masu iyakoki da ribar kowane mai amfani a kowanne, an duba dabarun lissafi.",
        exceeds: "Yana danganta farashin kowane tsari da amfanin da yake ba masu amfani."
      },
      {
        name: "Jerin abubuwan dubawa na ƙaddamarwa",
        objective: "O6",
        notYet: "Babu iƙirari na gaskiya, bayanai, tsarin sirri da sharuɗɗa, ko hanyar tuntuɓa.",
        meets: "Kowane abu a jerin, an shirya lauya ya duba, da ƙaramar ƙaddamarwa ta farko.",
        exceeds: "Ya jera ainihin bayanan masu amfani da ake tattarawa da abin da kamfanin AI ke yi da su."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nuna samfurin gwajinsu ga aƙalla masu amfani uku a fanninsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ƙaddamar ga ƙaramin rukuni na farko ko suka sami mai amfani na farko da ya biya",
      "Masu koyo da suka fara wani kwas na 'yan kasuwa na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai spreadsheet da mataimakin AI kyauta",
      "Idan ana so: notebook kyauta kamar Google Colab, ko kayan aikin da ba ya buƙatar code ko na zane",
      "Bayanai na gaske guda goma daga fannin da aka zaɓa, da aka cire bayanan sirri",
      "Kusan minti 75 don darussa da gwaje-gwaje, da lokacin gina da gwada samfurin gwajin"
    ],
    facilitatorNotes: [
      "Ku bar waɗanda ba sa rubuta code su gina zanen allo da ake iya dannawa; ba dole sai manhaja mai aiki ba.",
      "Kada ku taɓa nuna makullin API na gaske a allo; ku koya wa masu koyo su nisantar da makullai daga hira da fayiloli.",
      "Ku duba farashin samfuran AI na yanzu a shafin kamfanin kafin zaman farashi.",
      "Ku tunatar da masu koyo cewa tsarin sirri da sharuɗɗa suna buƙatar lauya, tambayoyin harajin sayarwa kuma suna buƙatar akanta.",
      "Ku ba da maki ga kayan farawa da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
