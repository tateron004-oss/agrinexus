"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-customer-experience.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-customer-experience-ha",
  lang: "ha",
  translationOf: "ai-customer-experience",
  category: "Small Business",
  name: "AI don Kyautata Hidima ga Abokan Ciniki",
  skills: "Zana tafiyar abokin ciniki, Rubuta samfuran amsa da AI, Amsa ra'ayoyi da ƙorafe-ƙorafe, Nazarin ra'ayoyin abokan ciniki da AI, Keɓance saƙo ba tare da rasa sirri ba, Gina shirin ingantawa",
  outcome: "zana yadda abokan ciniki ko masu karɓar hidima suke ji game da ƙungiyarku, amfani da AI don rubuta amsoshi masu sauri da daɗi ga tambayoyi, ra'ayoyi (reviews) da ƙorafe-ƙorafe, rarraba ra'ayoyinsu zuwa manyan matsaloli, da mayar da su shirin ingantawa na kwanaki 30.",
  about: [
    "Hidima ga abokan ciniki (customer experience) ita ce yadda mutane suke ji a kowane lokaci da suka yi mu'amala da ku: lokacin da suka same ku, suka yi tambaya, suka saya ko suka sami taimako, da abin da ke faruwa bayan haka. Abokan ciniki masu farin ciki suna dawowa kuma suna faɗa wa abokansu; marasa farin ciki suna tafiya shiru ko su bar mummunan ra'ayi a intanet.",
    "Wannan kwas ɗin na masu ƙananan kasuwanci ne da ma'aikatansu, da ƙungiyoyin sa-kai (nonprofits) waɗanda \"abokan cinikinsu\" su ne masu karɓar hidima, iyalai, masu ba da gudummawa da masu aikin sa-kai. Misalai sun haɗa da shagon aski, kamfanin gyaran gida, teburin karɓar baƙi a asibiti da bankin abinci (food bank).",
    "Za ku yi amfani da mataimakan AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini don rubuta amsoshi da nazarin ra'ayoyi, yayin da mutum ne yake da iko. Kowane darasi yana ɗaukar kusan minti biyar tare da aikin \"Gwada yanzu\", akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Don wata ƙungiya ta gaske ko ta atisaye, ku shirya kayan hidima ga abokan ciniki: taswirar tafiyar abokin ciniki da aka yi alama a lokuta uku mafi rauni, samfuran amsa guda biyar (tambaya da aka saba yi, ra'ayi mai kyau, mummunan ra'ayi, ƙorafi, saƙon biyo baya), taƙaitaccen bayanin ra'ayoyi aƙalla 15 na gaske ko na misali da aka rarraba zuwa manyan matsaloli, da shirin ingantawa na kwanaki 30 mai mai kula ɗaya da ma'auni ɗaya ga kowane mataki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da ma'aikatan da ke gaba-gaba da abokan ciniki, da mutanen da ke hidima ga masu karɓar hidima, iyalai, masu ba da gudummawa ko masu aikin sa-kai a ƙungiyoyin sa-kai da na al'umma.",
    startingPoint: "Suna magana da abokan ciniki kowace rana ta waya, tes, imel, kafofin sada zumunta ko ido da ido, kuma wataƙila suna karanta ra'ayoyi a intanet. Kaɗan ne suka taɓa zana tafiyar abokin ciniki, suka yi amfani da samfuran amsa, suka rarraba ra'ayoyi zuwa jigogi ko suka bibiyi ingantawa.",
    gap: "Amsoshi masu jinkiri, marasa daɗi ko marasa gaskiya, da ƙorafe-ƙorafen da ba a amsa ba, suna sa a rasa abokan ciniki kuma suna ɓata ra'ayoyin jama'a. Masu koyo suna buƙatar amfani da AI don amsawa da sauri da daɗi, koyo daga ra'ayoyi, da yin ingantawa ɗaya mai ma'auni a lokaci ɗaya, yayin da suke kiyaye sirrin abokan ciniki kuma suna faɗin gaskiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta; kwamfuta ta fi sauƙi don takardu da rarraba ra'ayoyi",
      "Sirri: kada a liƙa sunaye, lambobin waya, bayanan lafiya ko jerin abokan ciniki a kayan AI na gama-gari",
      "Gaskiya: babu ra'ayoyin bogi, kuma ana faɗa wa abokan ciniki idan suna magana da AI",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya da ƙarin lokaci don gina kayan"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don wata ƙungiya ta gaske ko ta atisaye", action: "zana taswirar tafiyar abokin ciniki daga samun ku zuwa bayan hidima, da yin alama a lokuta uku mafi rauni", standard: "tare da abin da abokin ciniki yake yi da yadda yake ji a kowane mataki" },
    { id: "O2", condition: "Idan kuna da tambayoyi biyar da aka fi yi muku da bayanan gaskiya", action: "rubuta samfuran amsa da AI ya tsara da salon maganarku", standard: "an keɓance su kuma an tabbatar da bayanansu kafin kowane amfani" },
    { id: "O3", condition: "Idan aka ba ku ra'ayi mai kyau, mummunan ra'ayi da ƙorafi", action: "rubuta amsoshi masu natsuwa da taimako ta hanyar saurara, ba da haƙuri, warware matsala, bibiya", standard: "ba tare da bayanan sirri a kowace amsa ta jama'a ba" },
    { id: "O4", condition: "Idan aka ba ku aƙalla ra'ayoyin abokan ciniki 15 da aka cire bayanan sirri daga cikinsu", action: "rarraba ra'ayoyin zuwa jigogi da AI da jera manyan matsaloli uku", standard: "bayan duba wasu ra'ayoyi kaɗan a kowane jigo" },
    { id: "O5", condition: "Don saƙon godiya, tunatarwa ko na biyo baya", action: "rubuta samfurin saƙo na musamman mai gurbin cikawa da ke kiyaye sirri kuma yake faɗin gaskiya", standard: "ga mutanen da suka yarda su ji daga gare ku kaɗai, tare da hanyar samun mutum" },
    { id: "O6", condition: "Idan kuna da manyan matsalolinku guda uku", action: "ƙirƙiri shirin ingantawa na kwanaki 30", standard: "tare da mataki ɗaya, mai kula ɗaya da ma'auni ɗaya ga kowace matsala" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ganin abokan cinikinku da amsa musu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zana tafiyar abokin ciniki",
          minutes: 5,
          goal: "Zana taswirar tafiyar abokin ciniki ku yi alama a lokuta mafi rauni.",
          text: [
            "Taswirar tafiyar abokin ciniki tana jera kowane mataki da mutum yake bi tare da ku, bisa tsari: samun ku (yadda suka same ku), tambaya (tuntuɓar farko), yanke shawara, saya ko karɓar hidima, da bayan haka (bibiya, ra'ayi, dawowa).",
            "A kowane mataki, ku rubuta abin da abokin ciniki yake yi, yadda yake ji, da abin da zai iya lalacewa. Ga bankin abinci: iyali ya sami lokutan aiki a intanet, ya kira da tambaya, ya jira a layi, ya karɓi abinci, sannan yana mamakin yaushe zai dawo.",
            "AI zai iya taimaka muku ganin matakan da kuka manta. Ku tambaya: \"Ina da kasuwancin gyaran gida. Ka jera kowane mataki da abokin ciniki yake bi daga bincike na farko zuwa bayan aikin, da abin da zai iya ɓata masa rai a kowane mataki.\" Sannan ku kwatanta da abin da kuke gani kowace rana."
          ],
          steps: ["Ku jera matakan: samun ku, tambaya, yanke shawara, saya ko karɓa, bayan haka.", "A kowane mataki, ku rubuta abin da abokin ciniki yake yi da yadda yake ji.", "Ku tambayi AI abin da zai iya ɓata musu rai a kowane mataki.", "Ku yi alama a lokuta uku mafi rauni."],
          words: [["Hidima ga abokan ciniki (customer experience)", "yadda mutane suke ji a kowane lokaci da suka yi mu'amala da wata ƙungiya."], ["Taswirar tafiya (journey map)", "hoton mataki-mataki na abin da abokin ciniki yake fuskanta."], ["Wurin haɗuwa (touchpoint)", "kowane lokaci da abokin ciniki ya yi mu'amala da ku: kira, rubutu a intanet, ziyara, imel."]],
          slides: [
            { title: "Tafiyar abokin ciniki", bullets: ["Samun ku, tambaya, yanke shawara", "Saya ko karɓar hidima", "Bayan haka: bibiya da dawowa"] },
            { title: "A kowane mataki", bullets: ["Abin da suke yi", "Yadda suke ji", "Abin da zai iya lalacewa"] },
            { title: "Ku yi amfani da AI don nemo giɓi", bullets: ["Ku tambayi abin da zai iya ɓata wa abokan ciniki rai", "Ku kwatanta da abin da kuke gani", "Ku yi alama a lokuta uku mafi rauni"] }
          ],
          tryIt: "Ku zana taswirar tafiya ga wata ƙungiya ta gaske ko ta atisaye mai aƙalla matakai biyar. Ku yi amfani da AI don nemo abubuwan ɓata rai da kuka manta, ku yi alama a lokuta uku mafi rauni.",
          youCanNow: "zana tafiyar abokin ciniki da gano inda hidimar take lalacewa.",
          quickCheck: [
            { objective: "O1", q: "Wane mataki na tafiyar abokin ciniki ne ya shafi bibiya, ra'ayoyi da dawowa?", options: ["Bayan haka", "Samun ku", "Tambaya", "Yanke shawara"], answer: 0, why: "Matakin \"bayan haka\" ya ƙunshi bibiya, ra'ayoyi da dawowa." },
            { objective: "O1", q: "AI ya jera abubuwan ɓata rai don taswirar tafiyar kasuwancinku na share-share. Me za ku yi da jerin?", options: ["Ku kwafe shi a matsayin taswirarku ta ƙarshe", "Ku goge shi; AI ba zai iya taimakawa ba", "Ku kwatanta shi da abin da kuke gani kowace rana ku riƙe abin da yake gaskiya", "Ku tura shi ga abokan ciniki"], answer: 2, why: "AI zai iya nuna matakan da kuka manta, amma abin da kuke gani kowace rana ne yake tabbatar da su." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta amsoshi masu sauri da daɗi da AI",
          minutes: 5,
          goal: "Gina samfuran amsa da AI don tambayoyin da aka fi yi muku.",
          text: [
            "Amsa da sauri tana da muhimmanci. Samfurin amsa (template) amsa ce da aka riga aka shirya wadda kuke gyarawa ga kowane mutum. AI zai iya tsara samfura da salon maganarku cikin daƙiƙoƙi.",
            "Ku ba AI bayani: ƙungiyarku, salon maganarku da bayanan gaskiya. \"Ka rubuta amsa mai daɗi don shagon aski ga tambayar 'Kuna karɓar mutanen da suka zo ba tare da alƙawari ba?' Bayanai: ana karɓar masu zuwa ba tare da alƙawari ba daga Talata zuwa Alhamis, ana buƙatar alƙawari a Juma'a da Asabar, ku yi alƙawari a shafinmu na intanet. Ƙasa da kalmomi 50.\"",
            "Koyaushe ku keɓance amsa kafin ku aika: ku yi amfani da sunan mutumin, ku amsa daidai abin da ya tambaya, ku tabbatar da bayanan. Amsar da take kama da ta na'ura ko take da lokutan aiki marasa daidai tana cutarwa fiye da yadda take taimakawa."
          ],
          steps: ["Ku jera tambayoyi biyar da aka fi yi muku.", "Ku ba AI salon maganarku da bayanan gaskiya na kowace.", "Ku nemi gajeren samfurin amsa mai daɗi.", "Ku ajiye samfuran a cikin takarda.", "Ku keɓance kuma ku tabbatar da bayanai duk lokacin da kuka yi amfani da ɗaya."],
          words: [["Samfurin amsa (template)", "amsar da aka riga aka shirya wadda kuke gyarawa ga kowane mutum."], ["Keɓancewa (personalize)", "canja saƙo don ya dace da mutum na musamman."]],
          slides: [
            { title: "Sauri yana da muhimmanci", bullets: ["Samfuran amsa suna taimaka muku amsawa da sauri", "AI yana tsara su cikin daƙiƙoƙi"] },
            { title: "Ku ba AI bayanai", bullets: ["Salon maganarku", "Bayanan gaskiya", "Iyakar yawan kalmomi"] },
            { title: "Ku keɓance kowane lokaci", bullets: ["Ku yi amfani da sunansu", "Ku amsa daidai abin da suka tambaya", "Ku tabbatar da bayanan"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta samfuran amsa don tambayoyi uku da abokan cinikinku suka fi yi. Ku ajiye su, sannan ku keɓance ɗaya don wani abokin ciniki na ƙage.",
          youCanNow: "gina samfuran amsa da AI ya tsara, da keɓance su.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata ku ba AI don samfurin amsa ya zama daidai?", options: ["Lambobin wayar abokan ciniki", "Salon maganarku da bayanan gaskiya", "Kalmar \"amsa\" kaɗai", "Shafin intanet na abokin hamayya"], answer: 1, why: "Salon maganarku da bayanan gaskiya suna bar AI ya tsara amsar da take daidai kuma take kama da ku." },
            { objective: "O2", q: "Wata abokiyar ciniki mai suna Ana ta tambaya game da wurin ajiye mota. Kuna da samfurin amsa. Me za ku yi?", options: ["Ku aika samfurin kamar yadda yake", "Ku yi watsi da tambayar", "Ku aika mata dukkan samfuran da kuke da su", "Ku ƙara sunanta, ku amsa daidai abin da ta tambaya, ku tabbatar da bayanan"], answer: 3, why: "Ku keɓance kuma ku tabbatar da bayanai duk lokacin da kuka yi amfani da samfuri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amsa ra'ayoyi da ƙorafe-ƙorafe",
          minutes: 6,
          goal: "Amsa ra'ayi mai kyau, mummunan ra'ayi da ƙorafi cikin natsuwa da taimako.",
          text: [
            "Ra'ayoyi (reviews) na jama'a ne, don haka amsarku ta kowane mai karantawa ce, ba ta wanda ya rubuta ra'ayin kaɗai ba. Ku gode wa mutane don ra'ayoyi masu kyau kuma ku ambaci wani abu na musamman. Ga munanan ra'ayoyi, ku natsu, ku ba da haƙuri game da abin da suka fuskanta, kada ku yi jayayya, kuma ku ba da shawarar gyara shi a ɓoye ta lambar waya ko imel.",
            "Ga ƙorafe-ƙorafe, ku bi tsari mai sauƙi: saurara, ba da haƙuri, warware matsala, bibiya. Ku tambayi AI: \"Ka taimake ni in amsa wannan ƙorafi. Tsari: amince da matsalar, ba da haƙuri, ba da wannan gyara: [gyaranku], gayyace su su tuntuɓi [imel].\"",
            "Kada ku taɓa bayyana bayanan sirri a amsa ta jama'a, kamar ranakun alƙawari, bayanan lafiya ko abin da wani ya saya. Kada ku taɓa saka ra'ayoyin bogi ko biyan kuɗi a kansu. Idan ra'ayi yana da barazana ko zarge-zargen ƙarya, ku bi hanyar kai rahoto ta dandalin (platform)."
          ],
          steps: ["Ku karanta ra'ayin sau biyu, ku jira idan ranku ya ɓaci.", "Ku gode musu (ra'ayi mai kyau) ko ku amince ku ba da haƙuri (mummunan ra'ayi).", "Ku ba da gyara na musamman ko hanyar magana a ɓoye.", "Ku kiyaye bayanan sirri daga amsoshin jama'a.", "Ku bibiya don tabbatar an warware matsalar."],
          words: [["Ra'ayi (review)", "sharhi da ƙima na jama'a game da wani kasuwanci."], ["A ɓoye (offline)", "nesa da shafin jama'a, kamar ta waya ko imel na sirri."]],
          slides: [
            { title: "Amsoshi na jama'a ne", bullets: ["Kowa yana karanta su", "Ku gode wa masu ra'ayi mai kyau da wani abu na musamman"] },
            { title: "Munanan ra'ayoyi", bullets: ["Ku natsu, kada ku yi jayayya", "Ku ba da haƙuri game da abin da suka fuskanta", "Ku ba da shawarar gyara shi a ɓoye"] },
            { title: "Tsarin amsa ƙorafi", bullets: ["Saurara, ba da haƙuri, warware matsala, bibiya", "Babu bayanan sirri a gaban jama'a", "Babu ra'ayoyin bogi, har abada"] }
          ],
          tryIt: "Ku rubuta amsoshi da taimakon AI ga ra'ayi mai kyau ɗaya, mummunan ra'ayi ɗaya da ƙorafi ɗaya (na gaske ko na ƙage). Ku duba kowanne don natsuwar salo da rashin bayanan sirri.",
          youCanNow: "amsa ra'ayoyi da ƙorafe-ƙorafe cikin natsuwa, da taimako, ba tare da bayyana bayanan sirri ba.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata amsa ga ra'ayi mai kyau ta ƙunsa?", options: ["Lambar rangwame ga kowa", "Jayayya game da taurari", "Godiya da wani abu na musamman daga ra'ayinsu", "Ranar alƙawarin abokin ciniki"], answer: 2, why: "Ku gode wa mutane ku ambaci wani abu na musamman don amsar ta ji kamar ta gaske." },
            { objective: "O3", q: "Wani mai karɓar hidima ya rubuta cewa asibitinku ya sa shi jira awa ɗaya. Yaya za ku amsa a gaban jama'a?", options: ["Ku amince da shi, ku ba da haƙuri, ku ba da shawarar magana a ɓoye ta waya ko imel", "Ku bayyana bayanan alƙawarinsa da dalilin lafiya na jirar", "Ku ce ba shi da gaskiya", "Ku goge shafin kasuwancinku"], answer: 0, why: "Ku natsu, ku ba da haƙuri, ku ba da shawarar gyarawa a ɓoye, ku kiyaye bayanan sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ganin abokan cinikinku da amsa musu",
        questions: [
          { objective: "O1", q: "Me taswirar tafiyar abokin ciniki take nunawa?", options: ["Hanyar motar kai kayanku kaɗai", "Kuɗin da ke asusun bankinku", "Kowane mataki da abokin ciniki yake bi tare da ku", "Jadawalin aikin ma'aikata"], answer: 2, why: "Tana jera kowane mataki da yadda abokin ciniki yake ji." },
          { objective: "O1", q: "Wanne ne wurin haɗuwa (touchpoint)?", options: ["Kiran waya da abokin ciniki", "Launin bangon ofishinku kaɗai", "Takardar harajinku", "Takardar kuɗin mai kawo kaya"], answer: 0, why: "Wuraren haɗuwa lokuta ne da abokin ciniki yake mu'amala da ku." },
          { objective: "O2", q: "Me ya kamata ku yi koyaushe kafin ku aika amsar da AI ya tsara?", options: ["Ku aika ta ba tare da karantawa ba", "Ku ƙara alamomin emoji", "Ku cire sunan abokin ciniki", "Ku keɓance ta ku tabbatar da bayanan"], answer: 3, why: "Amsoshi na musamman masu daidai suna gina amana." },
          { objective: "O3", q: "Wani abokin ciniki ya bar ra'ayi cike da fushi. Mene ne mataki na farko mafi kyau?", options: ["Ku yi jayayya a gaban jama'a", "Ku natsu, ku ba da haƙuri game da abin da ya fuskanta, ku ba da shawarar gyarawa a ɓoye", "Ku saka bayanan alƙawarinsa", "Ku yi watsi da shi har abada"], answer: 1, why: "Amsoshi masu natsuwa da taimako suna nuna wa masu karantawa cewa kuna kula." },
          { objective: "O3", q: "Wanne ne kada ya taɓa bayyana a amsa ta jama'a ga ra'ayi?", options: ["\"Na gode\"", "Bayanan lafiyar abokin ciniki", "Shawarar magana ta waya", "Sunan kasuwancinku"], answer: 1, why: "Bayanan sirri ba sa shiga amsoshin jama'a." }
        ]
      }
    },
    {
      name: "Babi na 2: Koyo daga ra'ayoyi da ingantawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nazarin ra'ayoyi da AI",
          minutes: 6,
          goal: "Yi amfani da AI don rarraba sharhin abokan ciniki zuwa jigogi da nemo manyan matsaloli.",
          text: [
            "Ra'ayoyi (feedback) suna ɓoye a wurare da yawa: ra'ayoyin intanet, bincike (surveys), imel, sharhi a kafofin sada zumunta da bayanan ma'aikata. Karanta su duka da hannu yana ɗaukar awanni. AI zai iya rarraba su cikin mintuna.",
            "Ku tara aƙalla sharhi 15 a cikin takarda. Ku cire sunaye, lambobin waya da sauran bayanan sirri. Sannan ku tambaya: \"Ka rarraba waɗannan sharhi zuwa jigogi. Ga kowane jigo, ka ƙirga sharhi nawa ne suka ambace shi, ka faɗi ko mai kyau ne ko mara kyau, ka ba da misalin magana ɗaya.\"",
            "Ku duba aikin AI: ku karanta wasu sharhi kaɗan a kowane jigo don tabbatar da sun dace a can. AI yana iya yin kuskuren ƙirga ko haɗa matsaloli daban-daban. Sakamakon shi ne jerin manyan matsalolinku, an jera su bisa yawan bayyanarsu da girman cutarwarsu ga hidimar."
          ],
          steps: ["Ku tara aƙalla sharhi 15 daga ra'ayoyin intanet, bincike da imel.", "Ku cire sunaye da bayanan sirri.", "Ku nemi AI ya rarraba su zuwa jigogi tare da ƙidaya da misalai.", "Ku duba wasu sharhi kaɗan a kowane jigo.", "Ku jera manyan matsaloli uku."],
          words: [["Ra'ayoyi (feedback)", "abin da abokan ciniki suke faɗa muku game da abin da suka fuskanta."], ["Jigo (theme)", "batun da yake ta maimaituwa."], ["Yanayin ji (sentiment)", "ko sharhi mai kyau ne, mara kyau ne ko tsaka-tsaki."]],
          slides: [
            { title: "Ra'ayoyi suna ko'ina", bullets: ["Ra'ayoyin intanet, bincike, imel", "Sharhi a kafofin sada zumunta, bayanan ma'aikata"] },
            { title: "Ku bar AI ya rarraba su", bullets: ["Ku fara cire bayanan sirri", "Ku nemi jigogi, ƙidaya, yanayin ji, da misali"] },
            { title: "Ku duba ku jera", bullets: ["Ku duba kowane jigo", "Ku jera bisa yawan bayyana da girman cutarwa"] }
          ],
          tryIt: "Ku tara aƙalla sharhi 15 na gaske ko na misali, ku cire bayanan sirri, ku sa AI ya rarraba su zuwa jigogi. Ku duba sakamakon ku jera manyan matsalolinku uku.",
          youCanNow: "mayar da tarin sharhin abokan ciniki zuwa jerin manyan matsaloli bisa muhimmanci.",
          quickCheck: [
            { objective: "O4", q: "Me yasa za ku duba jigogin da AI ya ƙirƙira?", options: ["AI koyaushe yana yin daidai", "Don jerin ya ƙara tsawo", "Don mayar da sunayen abokan ciniki", "AI yana iya yin kuskuren ƙirga ko haɗa matsaloli daban-daban"], answer: 3, why: "Karanta wasu sharhi kaɗan a kowane jigo yana kama kuskuren ƙirga da matsalolin da aka haɗa." },
            { objective: "O4", q: "Sharhi takwas sun ambaci jinkirin amsa, biyu kuma sun ambaci wurin ajiye mota. Wanne za ku sa a gaba?", options: ["Wurin ajiye mota, domin ya fi sauƙi", "Jinkirin amsa, domin mutane da yawa sun ambace shi", "Babu ɗaya; ku yi watsi da su duka", "Duk wanda AI ya fara jerawa"], answer: 1, why: "Ku jera matsaloli bisa yawan bayyanarsu da girman cutarwarsu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Keɓance hidima ba tare da rasa amana ba",
          minutes: 5,
          goal: "Yi amfani da AI don keɓance saƙonni yayin da kuke kiyaye sirrin abokan ciniki kuma kuke faɗin gaskiya.",
          text: [
            "Ƙananan abubuwa na musamman suna sa mutane su ji ana daraja su: rangwamen ranar haihuwa, tunatarwa kafin alƙawarin wani mai karɓar hidima na gaba, ko wasiƙar godiya ga mai ba da gudummawa da ta ambaci shirin da ya tallafa.",
            "AI zai iya taimakawa wajen rubuta waɗannan saƙonni ga mutane da yawa daga samfuri ɗaya. Ku ba shi bayanan da yake buƙata kaɗai, kamar sunan farko da irin hidima, ba cikakkun bayanai ba. Ku yi amfani da tsarin abokan cinikinku ko kayan imel ɗinku don saka sunaye, maimakon liƙa jerin abokan ciniki a kayan AI na gama-gari.",
            "Ku faɗi gaskiya: idan chatbot ko AI ne yake amsa abokan ciniki, ku faɗa. Ku sauƙaƙa hanyar samun mutum. Ku tura saƙo ga mutanen da suka yarda su ji daga gare ku kaɗai, kuma ku sauƙaƙa hanyar daina karɓar saƙonni."
          ],
          steps: ["Ku zaɓi lokaci ɗaya na musamman: godiya, tunatarwa ko bibiya.", "Ku sa AI ya rubuta samfuri mai gurbin cikawa kamar [Sunan farko].", "Ku cike sunaye ta kayan imel ko tsarin abokan cinikinku.", "Ku faɗi a sarari idan abokin ciniki yana magana da AI.", "Koyaushe ku ba da hanyar samun mutum."],
          words: [["Gurbin cikawa (placeholder)", "alama kamar [Sunan farko] da ake maye gurbinta da ainihin bayani."], ["Daina karɓa (opt out)", "zaɓin daina karɓar saƙonni."]],
          slides: [
            { title: "Abubuwa na musamman", bullets: ["Godiya da tunatarwa", "Ambaci abin da yake da muhimmanci a gare su"] },
            { title: "Ku kiyaye sirri", bullets: ["Ku yi amfani da gurbin cikawa kamar [Sunan farko]", "Ku saka sunaye a kayanku na kanku", "Babu jerin abokan ciniki a kayan AI na gama-gari"] },
            { title: "Ku faɗi gaskiya", bullets: ["Ku faɗi idan AI ne yake amsawa", "Hanya mai sauƙi ta samun mutum", "Hanya mai sauƙi ta daina karɓar saƙonni"] }
          ],
          tryIt: "Ku rubuta samfurin saƙon godiya ko na biyo baya na musamman da AI ta amfani da gurbin cikawa. Ku duba cewa ba ya neman bayanan sirri kuma yana ba da hanyar samun mutum.",
          youCanNow: "keɓance saƙonnin abokan ciniki da AI yayin da kuke kiyaye sirri kuma kuke faɗin gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Mece ce hanya mafi aminci ta aika wasiƙar godiya ga masu ba da gudummawa 200?", options: ["Ku yi amfani da samfuri mai [Sunan farko] ku saka sunaye a kayan imel ɗinku", "Ku liƙa cikakken jerin masu ba da gudummawa a kayan AI na kyauta", "Ku rubuta kowace wasiƙa da hannu ba tare da dubawa ba", "Ku saka dukkan sunayensu a kafofin sada zumunta"], answer: 0, why: "Ku saka sunaye a kayanku na kanku don jerin masu ba da gudummawa kada ya shiga kayan AI na gama-gari." },
            { objective: "O5", q: "Chatbot na shafinku yana amsa tambayoyin abokan ciniki. Me dole ku ƙara?", options: ["Sunan ma'aikaci na bogi", "Babu komai; abokan ciniki sun fi son kada su sani", "Bayani a sarari cewa AI ne da hanyar samun mutum", "Neman lambobin kati"], answer: 2, why: "Faɗin gaskiya cewa AI ne da ba da hanyar samun mutum suna gina amana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mayar da abin da kuka koya zuwa shirin ingantawa na kwanaki 30",
          minutes: 5,
          goal: "Mayar da manyan matsalolinku zuwa shirin kwanaki 30 mai masu kula da ma'aunai.",
          text: [
            "Abin da kuka gano yana da amfani ne kawai idan wani abu ya canja. Ga kowace daga cikin manyan matsalolinku uku, ku zaɓi mataki ɗaya da za ku iya ɗauka cikin kwanaki 30. Misali: \"Abokan ciniki sun ce suna jira da yawa kafin su sami ƙiyasin farashi\" ya zama \"Ku aika kowane ƙiyasin farashi cikin awa 24 ta amfani da samfurin ƙiyasi da AI ya tsara.\"",
            "Ku ba kowane mataki mai kula da shi da ma'auni: lambar da za ta nuna ko ya yi aiki, kamar matsakaicin lokacin amsa, ƙimar ra'ayoyi, yawan dawowar abokan ciniki ko ƙorafe-ƙorafe a kowane mako.",
            "Ku faɗa wa abokan ciniki abin da kuka canja: \"Kun faɗa mana, mun saurara.\" Bayan kwanaki 30, ku duba ma'aunan, ku riƙe abin da ya yi aiki, ku zaɓi matsala ta gaba."
          ],
          steps: ["Ku rubuta mataki ɗaya ga kowace babbar matsala.", "Ku ba kowane mataki mai kula da shi.", "Ku zaɓi ma'auni ɗaya ga kowanne.", "Ku rubuta lambar farawa.", "Ku sake dubawa bayan kwanaki 30 ku faɗi abin da ya canja."],
          words: [["Fahimta (insight)", "ilimi mai amfani da ke fitowa daga nazarin bayanai."], ["Ma'auni (measure)", "lambar da ke nuna ko wani canji ya yi aiki."]],
          slides: [
            { title: "Daga fahimta zuwa aiki", bullets: ["Mataki ɗaya ga kowace babbar matsala", "Mai yiwuwa cikin kwanaki 30"] },
            { title: "Mai kula da ma'auni", bullets: ["Wane ne zai yi shi", "Lokacin amsa, ƙimar ra'ayoyi, dawowar abokan ciniki, ƙorafe-ƙorafe"] },
            { title: "Ku rufe da'irar", bullets: ["\"Kun faɗa mana, mun saurara\"", "Ku duba a kwana 30", "Ku zaɓi matsala ta gaba"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirin ingantawa na kwanaki 30 don manyan matsalolinku uku, mai mataki, mai kula, ma'auni da lambar farawa ga kowanne. Ku haɗa shi da taswirar tafiyarku, samfuran amsa da taƙaitaccen ra'ayoyinku don kammala kayan hidima ga abokan ciniki.",
          youCanNow: "nemo, gyara da auna matsalolin hidima ga abokan ciniki tare da taimakon AI.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'auni a cikin shirin ingantawa?", options: ["Mutumin da ke kula", "Lambar da ke nuna ko matakin ya yi aiki", "Sunan abokin ciniki", "Ranar da kuka fara kasuwancin"], answer: 1, why: "Ma'auni lamba ce, kamar matsakaicin lokacin amsa, da ke nuna ko matakin ya yi aiki." },
            { objective: "O6", q: "Abokan ciniki sun ce ba sa iya samun lokutan aikinku. Mene ne mataki mai kyau na kwanaki 30?", options: ["Ku jira ku ga ko zai gyaru", "Ku nemi AI ya rubuta ra'ayoyi game da lokutan aikinku", "Ku cire lokutan aiki gaba ɗaya", "Ku saka lokutan aiki a kowane shafi da bayanin martaba, tare da mai kula da ma'auni"], answer: 3, why: "Kowace babbar matsala tana samun mataki ɗaya bayyananne, mai kula da ma'auni." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Koyo daga ra'ayoyi da ingantawa",
        questions: [
          { objective: "O4", q: "Kafin ku liƙa sharhin abokan ciniki a AI, ya kamata ku:", options: ["Ƙara lambobin wayarsu", "Ƙara lambobin katinsu", "Babu komai", "Cire sunaye da bayanan sirri"], answer: 3, why: "Sirri yana zuwa farko." },
          { objective: "O4", q: "AI ya rarraba sharhi zuwa jigogi. Me za ku yi a gaba?", options: ["Ku duba wasu sharhi kaɗan a kowane jigo", "Ku amince da shi gaba ɗaya", "Ku goge sharhin", "Ku saka jigogin a gaban jama'a tare da sunaye"], answer: 0, why: "AI yana iya yin kuskuren ƙirga ko haɗa matsaloli." },
          { objective: "O5", q: "Mene ne gurbin cikawa (placeholder)?", options: ["Ra'ayi na bogi", "Wani nau'in ƙorafi", "Alama kamar [Sunan farko] da ake maye gurbinta da ainihin bayani", "Kalmar sirrin abokin ciniki"], answer: 2, why: "Gurbin cikawa yana bar ku keɓance saƙo lafiya." },
          { objective: "O5", q: "Chatbot yana amsa abokan cinikinku. Me ya kamata ku faɗa musu?", options: ["Cewa ma'aikaci ne na gaske", "Babu komai", "Su daina yin tambayoyi", "Cewa AI ne da yadda za su sami mutum"], answer: 3, why: "Gaskiya tana gina amana." },
          { objective: "O6", q: "Wanne ne ma'auni mai kyau ga matakin \"aika ƙiyasin farashi cikin awa 24\"?", options: ["Yawan tsire-tsiren ofis", "Shekarun mai kasuwanci", "Matsakaicin lokacin aika ƙiyasin farashi", "Launukan shafin intanet"], answer: 2, why: "Dole ma'auni ya nuna ko matakin ya yi aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Kyautata Hidima ga Abokan Ciniki",
    questions: [
      { objective: "O1", q: "Hidima ga abokan ciniki (customer experience) ita ce:", options: ["Farashi kaɗai", "Yadda mutane suke ji a kowane lokaci da suka yi mu'amala da ku", "Shafinku na intanet kaɗai", "Albashin ma'aikatanku"], answer: 1, why: "Ta ƙunshi kowane wurin haɗuwa." },
      { objective: "O1", q: "Wanne ne mataki na farko na tafiyar abokin ciniki?", options: ["Samun ku: yadda suka same ku", "Barin ra'ayi", "Biyan kuɗi", "Dawowa"], answer: 0, why: "Tafiyar tana farawa lokacin da suka same ku." },
      { objective: "O1", q: "Ga ƙungiyar sa-kai, \"abokan ciniki\" za su iya haɗawa da:", options: ["Masu sayayya masu biyan kuɗi kaɗai", "Kwamitin gudanarwa kaɗai", "Masu karɓar hidima, iyalai, masu ba da gudummawa da masu aikin sa-kai", "Babu kowa"], answer: 2, why: "Duk wanda ƙungiyar take yi wa hidima ko take dogara da shi." },
      { objective: "O1", q: "AI zai iya taimakawa taswirar tafiya ta hanyar:", options: ["Ba da shawarar abubuwan ɓata rai da wataƙila kuka manta", "Maye gurbin abokan cinikinku", "Tara lambobin kati", "Rubuta ra'ayoyin bogi"], answer: 0, why: "Yana ba da tunani; ku kuma ku kwatanta da gaskiya." },
      { objective: "O2", q: "Samfurin amsa (template) shi ne:", options: ["Kwangilar shari'a", "Bincike (survey)", "Shafin ra'ayoyi", "Amsar da aka riga aka shirya wadda kuke gyarawa ga kowane mutum"], answer: 3, why: "Samfura suna hanzarta amsoshi." },
      { objective: "O2", q: "Me ya kamata ku ba AI lokacin tsara samfuri?", options: ["Kalmomin sirrin abokan ciniki", "Salon maganarku da bayanan gaskiya", "Babu komai", "Ra'ayoyin abokin hamayya"], answer: 1, why: "Bayanai da salon magana suna kawo amsoshi masu daidai da suka dace da ku." },
      { objective: "O2", q: "Samfurin AI ya ce kuna buɗewa ƙarfe 8 na safe, amma kuna buɗewa ƙarfe 9. Me za ku yi?", options: ["Ku aika shi duk da haka", "Ku gyara bayanin kafin ku yi amfani da shi", "Ku canja lokutan aikinku", "Ku ɗora laifi kan abokin ciniki"], answer: 1, why: "Koyaushe ku tabbatar da bayanai." },
      { objective: "O3", q: "Amsa ta jama'a ga ra'ayi ainihi ta wa ce?", options: ["Wanda ya rubuta ra'ayin kaɗai", "Babu kowa", "Mai shafin ra'ayoyin", "Duk mai karanta ra'ayoyin"], answer: 3, why: "Abokan ciniki na gaba suna karanta amsoshinku." },
      { objective: "O3", q: "Tsarin amsa ƙorafi a wannan kwas shi ne:", options: ["Saurara, ba da haƙuri, warware matsala, bibiya", "Jayayya, musantawa, gogewa, watsi", "Jira, jira, jira, jira", "Mayar da duk kuɗi koyaushe"], answer: 0, why: "Wannan tsari yana mayar da ƙorafe-ƙorafe zuwa amana." },
      { objective: "O3", q: "Rubuta ra'ayoyi don kasuwancinku da kanku:", options: ["Dabara ce mai kyau", "Wajibi ne", "Yaudara ce kuma bai kamata a taɓa yi ba", "Ya yi daidai idan da AI ne"], answer: 2, why: "Ra'ayoyin bogi suna yaudarar abokan ciniki." },
      { objective: "O3", q: "Wani ra'ayi yana da barazana. Ya kamata ku:", options: ["Ku mayar da barazana", "Ku saka adireshinsa", "Ku yi watsi da dukkan ra'ayoyi", "Ku bi hanyar kai rahoto ta dandalin"], answer: 3, why: "Dandaloli suna da hanyoyin magance abubuwan cin zarafi." },
      { objective: "O4", q: "Sharhi nawa kwas ɗin ya ba da shawarar tarawa don nazari?", options: ["Ɗaya kacal", "Babu", "Aƙalla 15", "Aƙalla 10,000"], answer: 2, why: "Sha biyar ko fiye suna nuna ainihin tsari." },
      { objective: "O4", q: "Jigo (theme) shi ne:", options: ["Zanen shafin intanet", "Batun da yake ta maimaituwa", "Ƙorafi guda ɗaya", "Lambar rangwame"], answer: 1, why: "Jigogi suna bayyana matsalolin da aka saba gani." },
      { objective: "O4", q: "Yanayin ji (sentiment) yana nufin:", options: ["Ko sharhi mai kyau ne, mara kyau ne ko tsaka-tsaki", "Tsawon sharhi", "Wanda ya rubuta shi", "Ranarsa"], answer: 0, why: "Yanayin ji shi ne abin da ake ji a bayan sharhin." },
      { objective: "O4", q: "Ya kamata a jera manyan matsaloli bisa:", options: ["Tsarin baƙaƙe", "Wanda ya fi ihu wajen ƙorafi", "Yawan bayyanarsu da girman cutarwarsu", "Zaɓi na ka-ce-na-ce"], answer: 2, why: "Yawan bayyana da tasiri suna nuna abin da ya fi muhimmanci." },
      { objective: "O5", q: "Hanya mafi aminci ta saka sunayen abokan ciniki a saƙonni da yawa ita ce:", options: ["Ku yi amfani da gurbin cikawa ku saka sunaye a kayan imel ko tsarin abokan cinikinku", "Ku liƙa cikakken jerin abokan ciniki a kayan AI na gama-gari", "Ku yi hasashen sunayen", "Ku saka jerin a gaban jama'a"], answer: 0, why: "Kayanku na kanku suna riƙe bayanan abokan ciniki ƙarƙashin ikonku." },
      { objective: "O5", q: "Ya kamata ku tura saƙo ga abokan cinikin da:", options: ["Ba su taɓa ba ku lambarsu ba", "Suka nemi ku daina", "Kuka same su a intanet", "Suka yarda su ji daga gare ku"], answer: 3, why: "Yarda tana da muhimmanci, kuma dole a mutunta neman daina karɓa." },
      { objective: "O6", q: "Kowane matakin ingantawa yana buƙatar:", options: ["Sabon tambari (logo)", "Mai kula da ma'auni", "Babban ofis", "Babu komai"], answer: 1, why: "Masu kula suna sa abu ya faru; ma'aunai suna nuna ko ya yi aiki." },
      { objective: "O6", q: "\"Kun faɗa mana, mun saurara\" hanya ce ta:", options: ["Ɓoye matsaloli", "Nuna wa abokan ciniki abin da kuka canja", "Neman kalmomin sirri", "Ƙara farashi"], answer: 1, why: "Rufe da'irar yana gina biyayyar abokan ciniki." },
      { objective: "O6", q: "Bayan kwanaki 30 ya kamata ku:", options: ["Daina sauraron abokan ciniki", "Goge shirin", "Kada ku taɓa dubawa", "Duba ma'aunan, riƙe abin da ya yi aiki, zaɓi matsala ta gaba"], answer: 3, why: "Ingantawa zagaye ne mai maimaituwa." }
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
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Taswirar tafiya",
        objective: "O1",
        notYet: "Akwai matakan da suka ɓace, ko ba a yi alama a lokuta mafi rauni ba.",
        meets: "Dukkan matakai biyar tare da abin da abokin ciniki yake yi da yadda yake ji, da alama a lokuta uku mafi rauni.",
        exceeds: "Kowane lokaci mai rauni yana da alaƙa da ra'ayi na gaske ko abin da ma'aikaci ya lura."
      },
      {
        name: "Samfuran amsa",
        objective: "O2",
        notYet: "Samfura ƙasa da biyar, ko wani samfuri yana da bayanai marasa daidai.",
        meets: "Samfura biyar (tambaya, ra'ayi mai kyau, mummunan ra'ayi, ƙorafi, bibiya) masu bayanan gaskiya da salo mai daɗi.",
        exceeds: "Kowane samfuri yana da gurbin cikawa da bayanin abin da za a keɓance."
      },
      {
        name: "Amsoshi ga ra'ayoyi da ƙorafe-ƙorafe",
        objective: "O3",
        notYet: "Wata amsa tana jayayya, tana ɗora laifi ko tana bayyana bayanan sirri.",
        meets: "Amsoshin suna da natsuwa, suna ba da haƙuri inda ake buƙata, kuma suna ba da gyara ko hanyar magana a ɓoye.",
        exceeds: "Ya haɗa da matakin bibiya don duba cewa an warware matsalar."
      },
      {
        name: "Taƙaitaccen ra'ayoyi",
        objective: "O4",
        notYet: "Sharhi ƙasa da 15, ko an bar sunaye a ciki.",
        meets: "Aƙalla sharhi 15 da aka cire bayanan sirri, an rarraba su zuwa jigogi kuma an jera manyan matsaloli uku.",
        exceeds: "Yana nuna jigogin da aka duba da kuskuren AI da aka gyara."
      },
      {
        name: "Shirin kwanaki 30",
        objective: "O6",
        notYet: "Matakai ba su da mai kula ko ma'auni.",
        meets: "Mataki ɗaya, mai kula ɗaya da ma'auni ɗaya ga kowace babbar matsala, tare da lambar farawa.",
        exceeds: "Ya haɗa da yadda za a faɗa wa abokan ciniki abin da ya canja."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Matsakaicin lokacin amsa tambayoyin abokan ciniki, kafin kwas ɗin da kwanaki 30 bayansa",
      "Matsakaicin ƙimar ra'ayoyi da yawan ƙorafe-ƙorafe a kowane mako, kafin da kwanaki 60 bayan",
      "Ƙungiyoyin da suka kammala aƙalla zagayen ingantawa ɗaya na kwanaki 30 (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Takarda don samfuran amsa, da spreadsheet ko takarda don taƙaitaccen ra'ayoyi da shirin",
      "Aƙalla sharhin abokan ciniki 15 na gaske ko na misali da aka cire bayanan sirri",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokaci don gina kayan"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku tsara samfurin amsa da amsar ƙorafi a allon da kowa yake gani.",
      "Ku samar da sharhin misali ga masu koyo da ba su da ra'ayoyi na gaske tukuna.",
      "Ku duba cewa an cire sunaye, lambobin waya da bayanan lafiya kafin kowane sharhi ya shiga AI.",
      "Ku yi wasan kwaikwayo na abokin ciniki mai fushi don masu koyo su yi atisayen saurara, ba da haƙuri, warware matsala, bibiya da babbar murya.",
      "Ku ba da maki ga kayan ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
