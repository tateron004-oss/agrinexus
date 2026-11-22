"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-entrepreneurship.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-entrepreneurship-ha",
  lang: "ha",
  translationOf: "athletes-ai-entrepreneurship",
  category: "Athletes",
  name: "Kasuwanci da AI ga 'Yan Wasa",
  skills: "Samun ra'ayin kasuwanci daga wasanku, Gwada ra'ayi da mutane na gaske, Rubuta tsarin kasuwanci mai shafi ɗaya da AI, Yin kasafin kuɗin farawa mai sauƙi, Sanin dokoki: NIL, alamar kasuwanci, bayanai da haraji",
  outcome: "mayar da ra'ayi ɗaya daga wasanku zuwa ra'ayin kasuwanci da aka gwada: yin magana da masu yiwuwar zama abokan ciniki biyar, rubuta tsarin kasuwanci mai shafi ɗaya da kasafin kuɗin farawa da AI, da jera dokokin da dole ku duba kafin ku fara.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da masu horarwa (coach) da ke da ra'ayin kasuwanci, ko suke son samun ɗaya: kasuwancin horarwa, ra'ayin manhaja (app), kaya da ke magance matsalar da kuka gani a wasanni, ko hidima ga ƙungiyoyin unguwa.",
    "'Yan kasuwa suna magance matsalolin da mutane za su biya kuɗi a kansu. Za ku nemo matsala ta gaske, ku gwada ko mutane suna son maganinku kafin ku kashe kuɗi, sannan ku yi amfani da AI don rubuta tsari mai shafi ɗaya da kasafin kuɗi.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Wannan ilimi ne na gama-gari; don tambayoyin doka, haraji da NIL, ku duba majiyoyin hukuma, kuma ku yi magana da ofishin bin ƙa'idoji (compliance office), mahaifi ko mai kula da ku, da ƙwararre."
  ],
  finalTask: "Ku rubuta tsarin kasuwanci mai shafi ɗaya don ra'ayi ɗaya daga wasanku: matsalar, maganinku, abokin cinikinku, abin da mutane biyar na gaske suka faɗa muku, yadda za ku kai ga abokan ciniki, kasafin kuɗin farawa da aka yi a spreadsheet (takardar lissafi), da jerin dokoki (NIL, binciken alamar kasuwanci, bayanai da haraji) tare da sunayen waɗanda kuka tambaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa da masu horarwa na makarantar sakandare, jami'a da farkon sana'a da ke da ra'ayin kasuwanci, ko suke son samun ɗaya: kasuwancin horarwa, ra'ayin manhaja, kaya don matsalar da aka gani a wasanni, ko hidima ga ƙungiyoyin unguwa.",
    startingPoint: "Sun san wasansu sosai kuma suna ganin matsalolinsa kusa, kuma suna amfani da wayar zamani da wataƙila spreadsheet. Kaɗan ne suka taɓa yin hira da abokan ciniki, gwada ra'ayi da ɗan kuɗi kaɗan, rubuta tsarin kasuwanci ko kasafin kuɗi, ko duba dokokin NIL, alamar kasuwanci, lasisi da haraji.",
    gap: "'Yan wasa sau da yawa suna gina abu ko saya kafin su duba ko akwai wanda yake son ra'ayin, ko su fara ba tare da duba dokoki ba, sai su yi asarar kuɗi ko damar yin wasa (eligibility). Gwaji da abokan ciniki na gaske, tsari mai shafi ɗaya, kasafin kuɗi na gaske da jerin dokoki suna ba su farawa lafiya mai ƙaramin kuɗi.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 8",
      "Waya ko kwamfuta mai mataimakin AI kyauta da Google Sheets",
      "Kusan minti 60 na darussa, da lokacin yin magana da mutane biyar",
      "Dokokin NIL, alamar kasuwanci, lasisin kasuwanci da haraji; ku duba da ofishin bin ƙa'idoji, ƙungiyar wasanni ta jiha ko ƙaramar hukuma",
      "Wannan ba shawarar kuɗi ko haraji ba ce; 'yan wasa 'yan ƙasa da shekara 18 suna buƙatar mahaifi ko mai kula da su don asusu, kwangila da duk wani bashi"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI E-commerce Platforms for Athletes\" (Dandalin Kasuwancin Intanet da AI ga 'Yan Wasa) mataki ne mai kyau na gaba don sayarwa ta intanet."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da matsalolin da kuka gani a wasanku", action: "jera matsalolin ku auna su bisa yawan mutanen da ke da su, yadda suke da zafi da ko mutane suna biyan kuɗi tuni, sannan ku zaɓi ɗaya", standard: "ta yadda matsalar da kuka zaɓa ta zama wadda kuka gani a rayuwa ta gaske" },
    { id: "O2", condition: "Idan kuna da mutane biyar da ke da matsalar", action: "yin hira da su game da abin da suka yi a baya, da rubuta abin da suka faɗa", standard: "ba tare da tambayoyin \"Za ku saya?\" ba, kuma an rubuta abubuwan da suka maimaitu a cikin dukkan biyar" },
    { id: "O3", condition: "Ta amfani da abin da abokan ciniki suka faɗa muku", action: "rubuta maganinku a jimla ɗaya, da zaɓar gwaji mafi sauƙi da za ku iya yi cikin makonni biyu", standard: "tare da lambar da za ta nuna ko gwajin ya yi nasara" },
    { id: "O4", condition: "Ta amfani da bayanan da kuka rubuta da mataimakin AI", action: "rubuta tsarin kasuwanci mai shafi ɗaya mai matsala, magani, abokin ciniki, abin da abokan ciniki suka faɗa, yadda za a kai gare su, kuɗi da matakai na gaba", standard: "an cire lambobin ƙirƙira ko an yi musu alama a matsayin hasashe, kuma an sami ra'ayin jagora (mentor)" },
    { id: "O5", condition: "Ta amfani da Google Sheets", action: "yin kasafin kuɗin farawa mai kashe-kashe, kuɗin shiga da ake sa ran samu, jimla da riba", standard: "da farashin gaske daga masu sayarwa, an duba dabarun lissafi (formula), kuma an duba shi tare da babban mutum amintacce kafin a kashe kuɗi" },
    { id: "O6", condition: "Kafin ku fara kasuwancin", action: "rubuta jerin dokoki da ya ƙunshi NIL, sunaye da tambura (logo), lasisin kasuwanci, bayanai da haraji", standard: "an yi binciken USPTO, kuma an rubuta sunan mutumin da kuka duba kowace doka da shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun ra'ayi da gwada shi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo matsalar da ta cancanci magancewa",
          minutes: 5,
          goal: "Jera matsalolin da kuka gani a wasanni ku zaɓi ɗaya da ta cancanci magancewa.",
          text: [
            "Ra'ayoyin kasuwanci masu kyau suna farawa da matsala, ba da kaya ba. 'Yan wasa suna ganin matsaloli da yawa kusa: iyayen da ba sa samun horon farko mai kyau ga yara, ƙungiyoyin da ke rasa kayan wasa, 'yan wasan da ba sa iya biyan horo mai inganci, masu horarwa da tsara jadawali ya yi musu yawa.",
            "Ku rubuta matsalolin da ku, abokan ƙungiyarku, iyaye ko masu horarwa kuke korafi a kansu. Ga kowace, ku tambaya: Mutane nawa ne ke da wannan matsalar? Yaya take da zafi? Shin suna biyan kuɗi tuni don wani magani marar kyau?",
            "Ku yi amfani da mataimakin AI don samo ra'ayoyi: \"Ni ɗan wasan volleyball ne a makarantar sakandare. Ka jera matsaloli 15 da 'yan wasa, iyaye da masu horarwa ke da su da ƙaramin kasuwanci zai iya magancewa.\" Sannan ku zagaye waɗanda kuka gani da idonku."
          ],
          steps: ["Ku rubuta matsalolin da kuka gani a wasanku.", "Ku nemi AI ya ƙara samo wasu.", "Ku zagaye waɗanda kuka gani a rayuwa ta gaske.", "Ku auna kowace: mutane nawa, yaya take da zafi, ana biya tuni?", "Ku zaɓi ɗaya."],
          words: [["Ɗan kasuwa (entrepreneur)", "mutumin da ke fara kasuwanci don magance wata matsala."], ["Wurin zafi (pain point)", "matsalar da ke damun mutane har suna son a gyara ta."]],
          slides: [
            { title: "Ku fara da matsala", bullets: ["Ba da kaya ba", "'Yan wasa suna ganin matsaloli kusa"] },
            { title: "Ku auna kowace matsala", bullets: ["Mutane nawa ne ke da ita?", "Yaya take da zafi?", "Ana biyan kuɗi tuni don magani marar kyau?"] },
            { title: "AI yana samo ra'ayoyi, ku kuke zaɓa", bullets: ["Ku nemi matsaloli 15", "Ku zagaye waɗanda kuka gani"] }
          ],
          tryIt: "Ku jera matsaloli biyar daga wasanku, ku ƙara wasu da AI, ku auna su, sannan ku zaɓi wadda za ku yi aiki a kai.",
          youCanNow: "nemo da zaɓar matsala ta gaske da ta cancanci magancewa.",
          quickCheck: [
            { objective: "O1", q: "Wace ce alamar matsalar da ta cancanci magancewa?", options: ["Ku kaɗai ke da ita", "Mutane suna biyan kuɗi tuni don wani magani marar kyau", "Tana da daɗin magana a kai", "Babu wanda ke korafi a kanta"], answer: 1, why: "Idan mutane suna biyan kuɗi tuni don magani marar kyau, matsalar tana da muhimmanci a gare su." },
            { objective: "O1", q: "AI ya jera matsaloli 15 na wasanku. Me za ku yi?", options: ["Ku zaɓi wadda ta fi burgewa", "Ku gina dukkan 15", "Ku zagaye waɗanda kuka gani da idonku", "Ku nemi AI ya zaɓa muku"], answer: 2, why: "Ku riƙe matsalolin da kuka gani a rayuwa ta gaske." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yin magana da abokan ciniki na gaske",
          minutes: 6,
          goal: "Yin hira da mutane biyar da za su iya zama abokan ciniki game da matsalar kafin ku gina komai.",
          text: [
            "Kafin ku kashe kuɗi, ku yi magana da mutanen da ke da matsalar. Burinku shi ne ku koya, ba ku sayar ba. Ku tambaye su abin da suka yi a baya, ba abin da za su iya yi wata rana ba.",
            "Tambayoyi masu kyau: \"Ku faɗa mini lokacin ƙarshe da wannan ya faru.\" \"Me kuka yi game da shi?\" \"Nawa ya ci muku?\" \"Me ke damun ku a zaɓuɓɓukan da kuke da su?\" Ku guji \"Za ku sayi ra'ayina?\" domin mutane suna cewa eh don su faranta muku rai.",
            "Ku yi magana da mutane biyar. Ku rubuta abin da suka faɗa da kalmominsu. Idan yawancinsu ba su damu ba, wannan labari ne mai daɗi: kun ceci lokaci da kuɗi. Ku zaɓi sabuwar matsala ko ku gyara ra'ayin."
          ],
          steps: ["Ku jera mutane biyar da ke da matsalar.", "Ku tambaya game da lokacin ƙarshe da ta faru.", "Ku tambaya abin da suka yi da nawa ya ci musu.", "Ku rubuta kalmominsu.", "Ku nemi abubuwan da suka maimaitu a cikin biyar ɗin."],
          words: [["Hirar abokin ciniki (customer interview)", "gajeriyar tattaunawa don koyon matsalar wani."], ["Tabbatarwa (validate)", "duba cewa matsala da magani na gaske ne kafin a gina."]],
          slides: [
            { title: "Ku koya, kada ku sayar", bullets: ["Ku yi magana da masu matsalar", "Kafin ku kashe kuɗi"] },
            { title: "Tambayoyi masu kyau", bullets: ["\"Ku faɗa mini lokacin ƙarshe da...\"", "\"Me kuka yi? Nawa ya ci muku?\"", "Ba: \"Za ku sayi ra'ayina?\""] },
            { title: "Bayan hira biyar", bullets: ["Ku rubuta kalmominsu", "Ku nemi abubuwan da suka maimaitu", "Ba su da sha'awa? Kun ceci kuɗi"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya taimaka muku rubuta tambayoyin hira biyar game da abin da mutane suka yi a baya. Ku yi hira da aƙalla mutane biyu a wannan makon, ku rubuta abin da suka faɗa.",
          youCanNow: "yin hira da masu yiwuwar zama abokan ciniki don gwada ko matsala ta gaske ce.",
          quickCheck: [
            { objective: "O2", q: "Mene ne burinku a hirar abokin ciniki?", options: ["Ku koya", "Ku sayar", "Ku sami alƙawarin saya", "Ku nuna ra'ayinku"], answer: 0, why: "Ku yi magana don koyon matsalar, ba don sayarwa ba." },
            { objective: "O2", q: "Wata uwa ta ce, \"Tabbas zan saya wata rana.\" Me za ku tambaya a gaba?", options: ["\"Madalla, zan rubuta sunanki?\"", "\"Nawa za ki biya?\"", "\"Ƙawayenki ma za su saya?\"", "\"Ki faɗa mini lokacin ƙarshe da wannan matsalar ta faru.\""], answer: 3, why: "Ku tambaya game da abin da suka yi a baya, domin mutane suna cewa eh don su faranta muku rai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara maganinku da tayinku",
          minutes: 5,
          goal: "Rubuta maganinku a jimla ɗaya da mafi sauƙin sigar da za ku iya gwadawa.",
          text: [
            "Yanzu ku bayyana maganinku a jimla ɗaya: \"Horon kwando na farko a ranar Asabar ga yara 'yan shekara 6 zuwa 9, wanda 'yan wasan ƙungiyar farko (varsity) na makarantar sakandare ke jagoranta, a farashin da iyaye za su iya biya.\"",
            "Ku fara da gwaji mafi sauƙi da za ku iya yi, wanda wani lokaci ake kira minimum viable product (MVP): zama ɗaya maimakon cikakkiyar makaranta, fom ɗin rajista maimakon manhaja, riguna goma maimakon 500.",
            "AI zai iya taimaka muku tunanin sigar mafi sauƙi: \"Ga ra'ayina da abin da abokan ciniki biyar suka faɗa mini. Mece ce hanya mafi ƙanƙanta kuma mafi arha don gwada shi cikin makonni biyu?\" Sannan ku zaɓi abin da za ku iya yi a zahiri."
          ],
          steps: ["Ku rubuta maganinku a jimla ɗaya.", "Ku nemi AI ya ba ku gwaji mafi ƙanƙanta da za ku iya yi.", "Ku zaɓi gwajin da za ku iya yi cikin makonni biyu.", "Ku yanke yadda za ku san ya yi nasara (misali mutane 8 sun yi rajista)."],
          words: [["Minimum viable product (MVP)", "mafi sauƙin sigar ra'ayinku da ke ba ku damar gwada shi da abokan ciniki na gaske."], ["Tayi (offer)", "ainihin abin da abokan ciniki za su samu da nawa zai ci."]],
          slides: [
            { title: "Magani a jimla ɗaya", bullets: ["Don wa yake", "Me za su samu", "Me yasa ya fi kyau"] },
            { title: "Ku fara gwaji ƙarami", bullets: ["Zama ɗaya, ba makaranta ba", "Fom, ba manhaja ba", "Riguna 10, ba 500 ba"] },
            { title: "Ku ayyana nasara", bullets: ["Gwaji mafi ƙanƙanta na makonni biyu", "Lambar da ke nufin ya yi nasara"] }
          ],
          tryIt: "Ku rubuta maganinku a jimla ɗaya. Ku yi amfani da AI don nemo gwaji mafi ƙanƙanta na makonni biyu, ku rubuta lambar da za ta nuna ya yi nasara.",
          youCanNow: "bayyana maganinku da tsara ƙaramin gwaji mai arha.",
          quickCheck: [
            { objective: "O3", q: "Mene ne minimum viable product (MVP)?", options: ["Sigarku mafi tsada", "Cikakkiyar manhaja", "Mafi sauƙin sigar da ke ba ku damar gwadawa da abokan ciniki na gaske", "Dogon tsarin kasuwanci"], answer: 2, why: "MVP shi ne gwaji mafi ƙanƙanta da za ku iya yi da abokan ciniki na gaske." },
            { objective: "O3", q: "Kuna son fara makarantar horarwa. Mene ne gwaji na farko mafi kyau?", options: ["Ku yi hayar gini na shekara ɗaya", "Ku yi zama ɗaya da fom ɗin rajista", "Ku gina manhaja ta musamman", "Ku buga riguna 500"], answer: 1, why: "Ku fara da gwaji mafi sauƙi da za ku iya yi cikin makonni biyu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun ra'ayi da gwada shi",
        questions: [
          { objective: "O1", q: "Ra'ayoyin kasuwanci masu kyau suna farawa da:", options: ["Tambari mai kyau", "Babban bashi", "Matsalar da mutane ke da ita", "Manhaja mai tsada"], answer: 2, why: "Magance matsaloli na gaske shi ne abin da mutane ke biyan kuɗi a kai." },
          { objective: "O2", q: "Wace tambayar hira ce ta fi kyau?", options: ["\"Ku faɗa mini lokacin ƙarshe da wannan ya faru.\"", "\"Za ku sayi ra'ayina?\"", "\"Ra'ayina bai yi kyau ba?\"", "\"Nawa za ku biya wata rana?\""], answer: 0, why: "Abin da mutane suka yi a baya ya fi gaskiya fiye da hasashe." },
          { objective: "O2", q: "Yawancin mutanen da kuka yi hira da su ba su damu da matsalar ba. Wannan yana nufin:", options: ["Kun gaza", "Ku gina shi duk da haka", "Ku yi ta hira da su har su yarda", "Kun ceci lokaci da kuɗi; ku gyara ko ku zaɓi sabuwar matsala"], answer: 3, why: "Koyo da wuri nasara ce." },
          { objective: "O3", q: "MVP shi ne:", options: ["Ɗan wasa mafi daraja (most valuable player)", "Mafi sauƙin sigar da ke ba ku damar gwadawa da abokan ciniki na gaske", "Babban ƙaddamarwa", "Alamar kasuwanci"], answer: 1, why: "A kasuwanci, MVP yana nufin minimum viable product." },
          { objective: "O3", q: "Wane ne gwaji na farko mafi kyau don ra'ayin sansanin horo (camp)?", options: ["Hayar filin wasa na wata ɗaya", "Zama ɗaya a ranar Asabar da fom ɗin rajista", "Gina manhaja", "Buga riguna 500"], answer: 1, why: "Ƙananan gwaje-gwaje suna da arha da sauri." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsari, kasafin kuɗi da dokoki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsarin kasuwanci mai shafi ɗaya da AI",
          minutes: 5,
          goal: "Rubuta tsarin kasuwanci mai shafi ɗaya da taimakon AI.",
          text: [
            "Tsari mai shafi ɗaya yana sa ku mai da hankali. Sassan su ne: Matsala, Magani, Abokin ciniki, Abin da abokan ciniki suka faɗa mini, Yadda zan kai gare su, Kuɗi (kashe-kashe da farashi), Matakai na gaba.",
            "Ku ba mataimakin AI bayananku da sakamakon hirarku, ku tambaya: \"Ka mayar da waɗannan bayanan zuwa tsarin kasuwanci mai shafi ɗaya da waɗannan sassan. Ka yi amfani da kalmomi masu sauƙi. Ka yi alama a kan duk abin da hasashe ne.\"",
            "Ku karanta shi a hankali. AI yana iya sa ra'ayinku ya yi kama da ya fi girmansa, ko ya ƙirƙiri lambobi. Ku riƙe abin da ke gaskiya ne kawai ko wanda aka yi masa alama a fili a matsayin hasashe, sannan ku raba shi da jagora, mai horarwa ko malami don su ba ku ra'ayinsu."
          ],
          steps: ["Ku tattara matsalarku, maganinku da bayanan hirarku.", "Ku nemi AI ya yi tsari mai shafi ɗaya da sassan da aka ƙayyade.", "Ku cire lambobin ƙirƙira ko ku yi musu alama a matsayin hasashe.", "Ku raba shi da jagora don ra'ayinsa."],
          words: [["Tsarin kasuwanci (business plan)", "taƙaitaccen rubutu na yadda kasuwanci zai yi aiki ya samu kuɗi."], ["Jagora (mentor)", "mutum mai gogewa da ke ba ku shawara."]],
          slides: [
            { title: "Sassan tsari mai shafi ɗaya", bullets: ["Matsala, Magani, Abokin ciniki", "Abin da abokan ciniki suka faɗa mini", "Yadda zan kai gare su, Kuɗi, Matakai na gaba"] },
            { title: "AI yana rubuta daftari", bullets: ["Daga bayananku da hirarku", "\"Ka yi alama a kan duk abin da hasashe ne\""] },
            { title: "Ku kuke dubawa", bullets: ["Babu lambobin ƙirƙira", "Ku raba da jagora"] }
          ],
          tryIt: "Ku yi amfani da AI don mayar da bayananku zuwa tsari mai shafi ɗaya. Ku yi alama a kan kowane hasashe, sannan ku nemi jagora, mai horarwa ko malami ya ba ku ra'ayi ɗaya.",
          youCanNow: "rubuta tsarin kasuwanci mai shafi ɗaya da AI da duba ko daidai yake.",
          quickCheck: [
            { objective: "O4", q: "Wane sashe ne ya dace a tsarinku mai shafi ɗaya?", options: ["Abin da abokan ciniki suka faɗa mini", "'Yan wasan da kuka fi so", "Cikakken labarin rayuwarku", "Jadawalin horonku"], answer: 0, why: "Tsarin ya haɗa da abin da hira biyar ɗinku suka nuna." },
            { objective: "O4", q: "Tsarin AI ya ce abokan ciniki 500 a wata na farko, amma ba ku da hujja. Me za ku yi?", options: ["Ku bar shi don burge mutane", "Ku ninka shi", "Ku kai shi sama", "Ku cire shi ko ku yi masa alama a matsayin hasashe"], answer: 3, why: "Ku riƙe abin da ke gaskiya ne kawai ko wanda aka yi masa alama a fili a matsayin hasashe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin kasafin kuɗin farawa",
          minutes: 5,
          goal: "Yin kasafin kuɗin farawa mai sauƙi a spreadsheet.",
          text: [
            "Kasafin kuɗin farawa yana jera abin da kuke buƙatar kashewa kafin da lokacin gwajinku na farko, da abin da kuke sa ran samu. Ku sa shi ƙarami a farko.",
            "A Google Sheets, ku jera kashe-kashe (kayan aiki, wurin wasa, kuɗin shafin intanet ko dandali, bugawa, inshora idan ana buƙata, talla) da kuɗin shiga da ake sa ran samu (farashi sau yawan abokan cinikin da ake sa ran samu). Ku nemo farashin gaske daga masu sayarwa, ba hasashe ba.",
            "Ku nemi AI ya saita dabarun lissafi (formula) don jimla da riba, sannan ku duba su da kanku. Kada ku taɓa karɓar bashi ko amfani da katin bashi (credit card) don gwajin kasuwanci ba tare da yin magana da mahaifi, mai kula da ku ko mai ba da shawara amintacce ba. Wannan ba shawarar kuɗi ba ce."
          ],
          steps: ["Ku jera kowane kuɗin farawa.", "Ku nemo farashin gaske.", "Ku ƙiyasta kuɗin shiga: farashi sau yawan abokan ciniki.", "Ku ƙara jimla da riba da formula.", "Ku duba shi tare da babban mutum amintacce kafin ku kashe kuɗi."],
          words: [["Kasafin kuɗin farawa (start-up budget)", "tsarin kuɗin da ake buƙata don farawa da abin da kuke sa ran samu."], ["Kashe-kashe (expense)", "kuɗin da kuke kashewa don gudanar da kasuwancin."]],
          slides: [
            { title: "Kashe-kashe", bullets: ["Kayan aiki da wurin wasa", "Kuɗin dandali ko shafin intanet", "Bugawa, inshora, talla"] },
            { title: "Kuɗin shiga", bullets: ["Farashi x yawan abokan ciniki da ake sa ran samu", "Ku yi amfani da farashin gaske, ba hasashe ba"] },
            { title: "Ku yi hankali", bullets: ["AI yana saita formula; ku kuke dubawa", "Babu bashi ba tare da babban mutum amintacce ba"] }
          ],
          tryIt: "Ku yi kasafin kuɗin farawa don gwajinku na makonni biyu a Google Sheets da farashin gaske. Ku nemi AI ya rubuta formula na jimla da riba, sannan ku duba su.",
          youCanNow: "yin kasafin kuɗin farawa mai sauƙi da lambobi na gaske.",
          quickCheck: [
            { objective: "O5", q: "Yaya ake ƙiyasta kuɗin shiga da ake sa ran samu?", options: ["Farashi sau yawan abokan ciniki da ake sa ran samu", "Kashe-kashe a cire farashi", "Mabiya sau likes", "Ku yi hasashen lamba mai kyau"], answer: 0, why: "Kuɗin shiga da ake sa ran samu shi ne farashi sau yawan abokan ciniki da ake sa ran samu." },
            { objective: "O5", q: "Kasafin kuɗinku ya nuna kuna buƙatar sayen kayan aiki. Me za ku yi kafin ku kashe kuɗi?", options: ["Ku biya da katin bashi", "Ku karɓi bashi daga aboki", "Ku duba kasafin kuɗin tare da mahaifi, mai kula da ku ko mai ba da shawara amintacce", "Ku sayi mafi arha a intanet yanzu"], answer: 2, why: "Ku yi magana da babban mutum amintacce kafin ku karɓi bashi ko ku kashe kuɗi a gwaji." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dokokin da kowane ɗan wasa mai kasuwanci ke dubawa",
          minutes: 6,
          goal: "Rubuta jerin dokoki don kasuwancinku.",
          text: [
            "NIL (suna, hoto da kamanni): idan kasuwancinku yana amfani da sunanku, hotonku ko kamanninku, yana iya zama aikin NIL. 'Yan wasan jami'a suna iya buƙatar bayar da rahotonsa; 'yan wasan Division I suna bayar da rahoton yarjejeniyoyi da ake buƙata da wasu kamfanoni ta NIL Go a lokacin rubuta wannan. Dokokin makarantar sakandare sun bambanta daga jiha zuwa jiha. Ku tambayi ofishin bin ƙa'idoji ko ƙungiyar wasanni ta jiharku.",
            "Sunaye da tambura: kada ku yi amfani da tamburan makaranta, ƙungiya ko gasar wasanni (league) ba tare da izini ba. Kafin ku zaɓi sunan kasuwanci, ku bincika bayanan alamar kasuwanci na USPTO (ofishin haƙƙin mallaka da alamar kasuwanci na Amurka) da bayanan sunayen kasuwanci na jiharku. Birninku ko jiharku na iya buƙatar lasisin kasuwanci; ku duba shafin intanet na ƙaramar hukumarku.",
            "Bayanai da haraji: ku ajiye kowace rasit da biyan kuɗi a spreadsheet. IRS (hukumar haraji ta Amurka) ta ce dole ku cike takardar haraji idan ribar aikin kanku (self-employment) ta kai $400 ko fiye. Ku yi magana da ƙwararren haraji. Idan ba ku kai shekara 18 ba, mahaifi ko mai kula da ku zai taimaka da asusu da kwangiloli."
          ],
          steps: ["Ku tambayi ofishin bin ƙa'idoji ko ƙungiyar jiharku game da dokokin NIL.", "Ku tabbata kuna amfani da tamburanku da sunanku kaɗai.", "Ku bincika bayanan USPTO da na sunayen kasuwanci na jiha.", "Ku duba dokokin lasisin kasuwanci na yankinku.", "Ku shirya takardar rasit da biyan kuɗi.", "Ku yi magana da ƙwararren haraji."],
          words: [["Lasisin kasuwanci (business license)", "izini daga birni, gunduma ko jiha don gudanar da kasuwanci a can."], ["Aikin kai (self-employment)", "samun kuɗi daga kasuwancinku maimakon daga maigida."]],
          slides: [
            { title: "NIL", bullets: ["Kasuwanci da sunanku na iya zama NIL", "Jami'a: ana iya buƙatar rahoto", "Sakandare: ku duba jiharku"] },
            { title: "Sunaye, tambura, lasisi", bullets: ["Babu tamburan makaranta ko gasa ba tare da izini ba", "Ku bincika USPTO da bayanan sunaye na jiha", "Ku duba dokokin lasisi na yankinku"] },
            { title: "Bayanai da haraji", bullets: ["Ku ajiye kowace rasit", "IRS: ku cike haraji idan ribar aikin kai ta kai $400+", "Ku yi magana da ƙwararren haraji"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness (suna, hoto da kamanni)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Tushen alamar kasuwanci (Trademark basics)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Cibiyar haraji ga masu aikin kai (Self-Employed Individuals Tax Center)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Aikin ƙarshe: ku kammala tsarinku mai shafi ɗaya tare da kasafin kuɗi, sannan ku rubuta jerin dokokinku da sunan wanda kuka tambaya game da NIL, sakamakon binciken alamar kasuwanci, duba lasisin yankinku da takardar bayananku.",
          youCanNow: "duba muhimman dokoki kafin ku fara kasuwanci a matsayin ɗan wasa.",
          quickCheck: [
            { objective: "O6", q: "A ina za ku duba ko birninku yana buƙatar lasisin kasuwanci?", options: ["Kafofin sada zumunta", "Shafin intanet na ƙaramar hukumarku", "Chatbot na AI", "Group chat na mai horarwarku"], answer: 1, why: "Birninku ko jiharku na iya buƙatar lasisi; ku duba shafin intanet na ƙaramar hukumarku." },
            { objective: "O6", q: "Kun zaɓi sunan kasuwanci. Me za ku duba kafin ku yi amfani da shi?", options: ["Ko yana da amsa-amo", "Ko abokanku suna son sa", "Ko yana da dabbar alama (mascot)", "Bayanan alamar kasuwanci na USPTO da bayanan sunayen kasuwanci na jiharku"], answer: 3, why: "Ku bincika bayanan alamar kasuwanci da na sunayen kasuwanci na jiha kafin ku zaɓi suna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsari, kasafin kuɗi da dokoki",
        questions: [
          { objective: "O4", q: "AI ya ƙara \"$1 miliyan a shekarar farko\" a tsarinku ba tare da hujja ba. Ku:", options: ["Ku bar shi", "Ku mayar da shi $2 miliyan", "Ku nuna wa masu zuba jari", "Ku cire shi ko ku yi masa alama a matsayin hasashe"], answer: 3, why: "Ku riƙe lambobi na gaskiya kawai ko hasashen da aka yi wa alama a fili." },
          { objective: "O5", q: "Kuɗin shiga da ake sa ran samu daidai yake da:", options: ["Farashi sau yawan abokan ciniki da ake sa ran samu", "Kashe-kashe sau biyu", "Mabiya sau likes", "Hasashe"], answer: 0, why: "Wannan shi ne ƙiyasin kuɗin shiga na asali." },
          { objective: "O5", q: "Kafin ku karɓi bashi don gwajin kasuwanci, ya kamata ku:", options: ["Ku yi amfani da katin bashi da sauri", "Ku tambayi baƙo a intanet", "Ku yi magana da mahaifi, mai kula da ku ko mai ba da shawara amintacce", "Ku tsallake kasafin kuɗin"], answer: 2, why: "Bashi yana da haɗari; ku fara samun shawara." },
          { objective: "O6", q: "Me yasa za ku bincika bayanan USPTO?", options: ["Don samun abokan ciniki", "Don nemo mai horarwa", "Don biyan haraji", "Don guje wa amfani da sunan da wani ya mallaka"], answer: 3, why: "Binciken alamar kasuwanci yana hana rikici." },
          { objective: "O6", q: "Iyakar ribar aikin kai da IRS ta ce dole a cike haraji ita ce:", options: ["$40,000", "$400", "$4", "Babu ita"], answer: 1, why: "Wannan yana a shafin Self-Employed Tax Center na IRS." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kasuwanci da AI ga 'Yan Wasa",
    questions: [
      { objective: "O1", q: "Ɗan kasuwa (entrepreneur):", options: ["Yana buga wasa kawai", "Yana zuba kuɗi kawai", "Yana fara kasuwanci don magance matsala", "Yana aiki ga ƙungiya"], answer: 2, why: "Magance matsaloli shi ne ginshiƙi." },
      { objective: "O1", q: "Wurin zafi (pain point) shi ne:", options: ["Matsalar da ke damun mutane har suna son a gyara ta", "Rauni", "Allon maki", "Hukunci a wasa"], answer: 0, why: "Wuraren zafi damammaki ne na kasuwanci." },
      { objective: "O1", q: "Lokacin auna matsala, ku tambaya:", options: ["Mutane nawa ne ke da ita da yaya take da zafi", "Wane launi take da shi", "Wane ne shahararre", "Likes nawa take samu"], answer: 0, why: "Girma da zafi suna nuna ko ta cancanci magancewa." },
      { objective: "O1", q: "AI ya samo matsaloli 15. Ku:", options: ["Ku zaɓi ta farko", "Ku yi amfani da dukkan 15", "Ku zagaye waɗanda kuka gani a rayuwa ta gaske", "Ku yi watsi da su"], answer: 2, why: "Gogewa ta gaske ta fi hasashe." },
      { objective: "O2", q: "Hirar abokan ciniki don:", options: ["Sayarwa da ƙarfi", "Koyo", "Jayayya", "Samun mabiya"], answer: 1, why: "Ku koya kafin ku gina." },
      { objective: "O2", q: "Me yasa za ku guji \"Za ku sayi ra'ayina?\"", options: ["Rashin ladabi ne", "Ya saɓa wa doka", "Ya yi gajarta sosai", "Mutane suna cewa eh don su faranta muku rai"], answer: 3, why: "Abin da mutane suka yi a baya ya fi gaskiya." },
      { objective: "O2", q: "Aƙalla mutane nawa ya kamata ku yi hira da su?", options: ["Ɗaya", "Babu", "Biyar", "500"], answer: 2, why: "Biyar suna nuna abubuwan da ke maimaituwa da wuri." },
      { objective: "O2", q: "Tabbatarwa (validate) tana nufin:", options: ["Samun tambarin ajiye mota", "Cin wasa", "Sa hannu a kwangila", "Duba cewa matsala da magani na gaske ne"], answer: 3, why: "Tabbatarwa tana ceton lokaci da kuɗi." },
      { objective: "O3", q: "Wane ne MVP don ra'ayin sayar da kayan ado na ƙungiya (merch)?", options: ["Riguna 10 da aka sayar wa mutanen da suka nema", "Riguna 500 a ajiye", "Cikakken layin tufafi", "Hayar shago"], answer: 0, why: "Ku fara ƙarami ku gwada." },
      { objective: "O3", q: "Gwaji yana buƙatar:", options: ["Babu buri", "Lambar da ke nufin ya yi nasara", "Babban kasafin kuɗi", "Shahararren mutum"], answer: 1, why: "Buri mai sarari yana nuna muku ko ya yi nasara." },
      { objective: "O4", q: "Tsari mai shafi ɗaya ya haɗa da:", options: ["Tambari kawai", "Ƙididdigar wasanku", "Matsala, magani, abokin ciniki, kuɗi, matakai na gaba", "Kalmar sirrinku"], answer: 2, why: "Waɗannan sassan suna bayyana yadda yake aiki." },
      { objective: "O4", q: "Ku nemi AI ya yi alama a kan:", options: ["Duk abin da hasashe ne", "Babu komai", "Labari mai daɗi kawai", "Abokan hamayyarku"], answer: 0, why: "Hasashen da aka yi wa alama suna sa ku zama masu gaskiya." },
      { objective: "O4", q: "Jagora (mentor) shi ne:", options: ["Abokin hamayya", "Abokin ciniki", "Alƙalin wasa", "Mutum mai gogewa da ke ba da shawara"], answer: 3, why: "Jagorori suna taimaka muku guje wa kurakurai." },
      { objective: "O5", q: "Farashin da ke kasafin kuɗinku ya kamata ya fito daga:", options: ["Hasashe", "Farashin gaske na masu sayarwa", "Tsofaffin tunani", "AI kaɗai"], answer: 1, why: "Farashin gaske suna kawo kasafin kuɗi na gaske." },
      { objective: "O5", q: "Kashe-kashe (expense) shi ne:", options: ["Kuɗin da kuke samu", "Kuɗin da kuke kashewa don gudanar da kasuwancin", "Kofin nasara", "Mabiyi"], answer: 1, why: "Kashe-kashe su ne kuɗaɗen da ake kashewa." },
      { objective: "O6", q: "Kasuwancin da ke amfani da sunanku zai iya zama:", options: ["Biyan kuɗi don yin wasa (pay-for-play)", "Tallafin karatu", "Babu komai", "Aikin NIL"], answer: 3, why: "Yana amfani da sunanku, hotonku ko kamanninku." },
      { objective: "O6", q: "Kuna iya amfani da tambarin makarantarku a kan kayanku yadda kuke so?", options: ["A'a, kuna buƙatar izini", "Eh, koyaushe", "A ƙarshen mako kawai", "A intanet kawai"], answer: 0, why: "Makarantu suna kare tamburansu." },
      { objective: "O6", q: "A ina za ku duba ko kuna buƙatar lasisin kasuwanci?", options: ["Shafin labaran wasanni", "Abokin hamayya", "Shafin intanet na ƙaramar hukumarku", "Babu inda"], answer: 2, why: "Lasisi dokokin yanki ne." },
      { objective: "O6", q: "Me yasa za ku ajiye kowace rasit?", options: ["Don ado", "Don ku jefar daga baya", "Ba a buƙata", "Don bayanai da haraji"], answer: 3, why: "Bayanai suna taimakawa wajen haraji da yanke shawara." },
      { objective: "O6", q: "Idan ba ku kai shekara 18 ba kuma kuna fara kasuwanci:", options: ["Kuna iya sa hannu a komai ku kaɗai", "Mahaifi ko mai kula da ku yana taimakawa da asusu da kwangiloli", "Ku ɓoye shi", "Ku yi amfani da shekarun ƙarya"], answer: 1, why: "Yara yawanci suna buƙatar taimakon babban mutum." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [1, 5, 8, 10, 13, 15, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Matsala da abokin ciniki",
        objective: "O1",
        notYet: "Matsalar ba ta da sarari, ko ba wadda mai koyo ya gani ba ce.",
        meets: "Matsala ɗaya ta gaske, an auna girmanta da zafinta, tare da abokin ciniki a sarari.",
        exceeds: "Yana nuna abin da abokan ciniki ke biya tuni don wani magani marar kyau."
      },
      {
        name: "Hirar abokan ciniki",
        objective: "O2",
        notYet: "Mutane ƙasa da biyar, ko bayanan game da ko za su saya ne.",
        meets: "Hira biyar game da abin da mutane suka yi a baya, an rubuta su da kalmomin abokan ciniki, kuma an rubuta abubuwan da suka maimaitu.",
        exceeds: "Tsarin ya canja saboda abin da abokan ciniki suka faɗa."
      },
      {
        name: "Tsari mai shafi ɗaya",
        objective: "O4",
        notYet: "Akwai sassan da suka ɓace, ko an bar lambobin ƙirƙira ba tare da alama ba.",
        meets: "Dukkan sassa bakwai a shafi ɗaya, an yi wa hasashe alama, kuma an sami ra'ayin jagora.",
        exceeds: "Ya haɗa da gwajin makonni biyu da lambar da za ta nuna ya yi nasara."
      },
      {
        name: "Kasafin kuɗin farawa",
        objective: "O5",
        notYet: "Farashin hasashe ne, ko ba a duba formula ba.",
        meets: "Kowane kashe-kashe da farashin gaske, kuɗin shiga da ake sa ran samu, jimla da riba, an duba su kuma an tattauna da babban mutum amintacce.",
        exceeds: "Yana nuna abokan ciniki nawa ake buƙata don rufe kuɗin farawa."
      },
      {
        name: "Jerin dokoki",
        objective: "O6",
        notYet: "NIL, sunaye, lasisi ko haraji sun ɓace, ko ba a rubuta sunan kowa ba.",
        meets: "NIL, sunaye da tambura, lasisi, bayanai da haraji kowanne an jera shi tare da wanda mai koyo ya duba da shi.",
        exceeds: "An haɗa sakamakon binciken USPTO da takardar rasit da biyan kuɗi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala tsarin kasuwanci kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka yi gwajinsu na makonni biyu cikin kwanaki 30 kuma suka faɗi ko ya kai lambar da aka sa (binciken biyo baya)",
      "Masu koyo da suka fara kasuwanci, ko suka yanke shawarar kada su fara bayan hirar abokan ciniki, suka ceci kuɗi",
      "Masu koyo da suka ce sun duba dokokin NIL, alamar kasuwanci, lasisi da haraji kafin su fara"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Asusun Google kyauta don Google Sheets",
      "Littafin rubutu ko wurin rubutu a waya don hirar abokan ciniki",
      "Kusan minti 60 na darussa, da lokacin gajerun hira biyar"
    ],
    facilitatorNotes: [
      "Ku fara yin atisayen hirar abokan ciniki biyu-biyu don masu koyo su tambaya game da abin da mutane suka yi a baya, ba \"Za ku saya?\" ba.",
      "Ku shirya jagorori, kamar masu kasuwanci na yankin ko cibiyar ƙananan kasuwanci, don su ba da ra'ayi kan tsare-tsare.",
      "Kada ku bar masu koyo su karɓi bashi ko su sa hannu a kwangila a matsayin wani ɓangare na kwas ɗin; ku sa iyaye ko masu kula a ciki ga duk wanda bai kai shekara 18 ba.",
      "Ku gayyaci ofishin bin ƙa'idoji don tambayoyin NIL, kuma ku tura tambayoyin haraji zuwa ga ƙwararren haraji.",
      "Ku yi murna da ra'ayoyin da abokan ciniki suka ƙi: ganowa da wuri sakamako ne mai kyau."
    ]
  }
};
