"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-beginner-ai-tools.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-beginner-ai-tools-ha",
  lang: "ha",
  translationOf: "underserved-beginner-ai-tools",
  category: "Undeserved Community",
  name: "Kayan AI Masu Sauƙi ga Masu Farawa",
  skills: "Zaɓar kayan AI kyauta da ya dace, Magana da AI da muryarku, Fassara da kyamarar waya, Yin takardar sanarwa mai sauƙi da Canva, Rubuta gajerun saƙonni da mataimakin AI",
  outcome: "zaɓar kayan AI kyauta da ya dace da aikin yau da kullum ku yi amfani da shi: yin magana da mataimakin AI da muryarku, fassara alama ko wasiƙa da kyamarar wayarku, da yin takardar sanarwa (flyer) mai shafi ɗaya don taron al'umma.",
  about: [
    "Akwai kayan AI kyauta da yawa, kuma yana da wuya a san inda za a fara. Wannan kwas ɗin yana nuna muku 'yan kayan aiki masu sauƙi ga masu farawa, waɗanda ba sa biyan kuɗi kuma suna aiki a waya ko kwamfutar ɗakin karatu.",
    "Za ku yi amfani da muryarku maimakon rubutu, ku fassara kalmomi da kyamarar wayarku, ku rubuta gajerun saƙonni da mataimakin AI, kuma ku tsara takardar sanarwa mai sauƙi da sigar Canva ta kyauta.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku yi aikin \"Gwada yanzu\" bayan kowane darasi. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi takardar sanarwa mai shafi ɗaya don wani taron al'umma na gaske ko na misali, kamar tara abinci, tsabtace unguwa ko tara kuɗi don makaranta. Ku yi amfani da mataimakin AI don rubuta gajeren take da layuka uku na bayani, ku tsara takardar a sigar Canva ta kyauta, sannan ku yi amfani da kayan fassara don rubuta kalmomin iri ɗaya a wani harshe na biyu da maƙwabtanku ke magana.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a al'ummomin da ba a kula da su sosai, waɗanda sababbi ne ga kayan AI: iyaye, tsofaffi, masu aikin sa-kai a al'umma, mutanen da ba su da kwamfuta a gida, da mutanen da ke magana da wani harshe ba Turanci ba a gida.",
    startingPoint: "Suna amfani da waya don kira, saƙon tes da wataƙila kafofin sada zumunta. Sun ji labarin AI amma ba su san waɗanne kayan aiki kyauta ne akwai ba, ko kowanne don me yake. Wasu suna ganin rubutu a waya yana da jinkiri ko wuya.",
    gap: "Kayan aiki kyauta suna iya rubuta saƙonni, fassara alamu da wasiƙu, da tsara takardun sanarwa, amma masu koyo ba su san inda za su fara ba. Haɗa kayan aiki kyauta da ya dace da aiki yana ceton lokaci da kuɗi, kuma yana taimaka musu su raba labari ga maƙwabta da harsuna fiye da ɗaya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani (smartphone) ko kwamfutar ɗakin karatu",
      "Kuɗi: sigar kyauta ta kayan aiki kaɗai",
      "Fassarar na'ura ba ta cika ba: muhimman takardun lafiya ko na shari'a suna buƙatar mai fassara (tafinta)",
      "Sirri: ku fita daga asusu a kwamfutocin da ake rabawa, kuma kada ku sa bayanan sirri a cikin prompt"
    ],
    prerequisites: "Babu. Masu koyo da sababbi ne ga mataimakan AI za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku aikin yau da kullum", action: "zaɓar kayan aiki kyauta da ya dace da shi: mataimakin hira (chat), manhajar fassara ko kayan zane", standard: "kuna haɗa aƙalla ayyuka 4 cikin 5 da irin kayan aikin da ya dace" },
    { id: "O2", condition: "Ta amfani da waya ko manhajar mataimakin AI", action: "yin tambaya ta hanyar magana da gyara duk kalmomin da rubutu-da-murya ya rubuta ba daidai ba", standard: "kafin ku aika" },
    { id: "O3", condition: "Idan aka ba ku alama, lakabi ko sanarwa a rubuce da wani harshe", action: "fassara ta da kyamarar waya da yanke shawarar lokacin da za ku nemi mai fassara ko wanda ya iya karanta harshen sosai", standard: "kuna amfani da mai fassara don takardun lafiya ko na shari'a" },
    { id: "O4", condition: "Idan kuna da saƙon da kuke buƙatar aikawa", action: "neman mataimakin AI ya rubuta gajeren saƙo tare da faɗin mai karatu, abin da zai ƙunsa, salo da tsawo, sannan gyara shi da tabbatar da kowane bayani", standard: "ta yadda zai yi kama da ku, kuma kowace rana da wuri sun yi daidai" },
    { id: "O5", condition: "Ta amfani da sigar Canva ta kyauta", action: "yin takardar sanarwa mai shafi ɗaya daga samfuri (template), mai take, me, yaushe da ina, da hoto ɗaya", standard: "an sauke ta ko an raba ta, kuma an fita daga asusu a kwamfutar da ake rabawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Akwatin kayan AI ɗinku na kyauta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar kayan aiki kyauta da ya dace da aikin",
          minutes: 4,
          goal: "Haɗa aikin yau da kullum da kayan AI kyauta da ya dace da shi.",
          text: [
            "Ku ɗauki kayan AI kamar kayan aiki a cikin aljihun tebur na kicin. Kowanne yana da kyau a wani aiki daban.",
            "Mataimakin hira na AI (ChatGPT, Microsoft Copilot ko Google Gemini) yana da kyau wajen rubutu, bayani da tsarawa. Manhajar fassara (kamar Google Translate) tana da kyau don wasu harsuna. Kayan zane (kamar Canva, wanda yake da sigar kyauta) yana da kyau don takardun sanarwa da katuna.",
            "Ku fara da aikin, ba da kayan aikin ba. Ku tambayi kanku: ina buƙatar a rubuta kalmomi, a fassara kalmomi, ko wani abu mai kyan gani don bugawa ko rabawa?"
          ],
          steps: ["Ku rubuta aikin da kuke buƙatar yi.", "Ku yanke shawara: kuna buƙatar kalmomi a rubuta, a fassara, ko a zana?", "Ku zaɓi kayan aikin da ya dace: mataimakin hira, manhajar fassara ko kayan zane.", "Ku fara amfani da sigar kyauta."],
          words: [["Mataimakin hira (chat assistant)", "shirin AI da kuke rubuta masa ko magana da shi, shi kuma yana rubuta amsa."], ["Sigar kyauta (free version)", "matakin kayan aiki da ba a biyan kuɗi; wasu kayan aiki suna kuma sayar da ƙarin abubuwa."]],
          slides: [
            { title: "Kayan aiki kamar aljihun tebur na kicin suke", bullets: ["Kowane kayan aiki yana da kyau a wani aiki daban", "Ku fara da aikin, ba da kayan aikin ba"] },
            { title: "Kayan aiki kyauta uku don farawa", bullets: ["Mataimakin hira: rubutu, bayani, tsarawa", "Manhajar fassara: wasu harsuna", "Canva kyauta: takardun sanarwa da katuna"] },
            { title: "Ku tambayi kanku", bullets: ["Ina buƙatar a rubuta kalmomi?", "A fassara kalmomi?", "Wani abu da aka zana don bugawa ko rabawa?"] }
          ],
          tryIt: "Ku rubuta ayyuka uku da kuke da su a wannan watan. A gefen kowanne, ku rubuta irin kayan aikin da ya dace: mataimakin hira, manhajar fassara ko kayan zane.",
          youCanNow: "haɗa aikin yau da kullum da kayan AI kyauta da ya dace.",
          quickCheck: [
            { objective: "O1", q: "Wane irin kayan aiki ne ya fi dacewa don mayar da wasiƙa zuwa wani harshe?", options: ["Manhajar fassara", "Kayan zane", "Manhajar gyaran hoto", "Manhajar kalanda"], answer: 0, why: "An yi manhajar fassara ne don canja kalmomi zuwa wani harshe." },
            { objective: "O1", q: "Kuna buƙatar katin godiya ga masu aikin sa-kai mai kyan gani don bugawa. Me za ku fara buɗewa?", options: ["Manhajar fassara", "Kayan zane kamar Canva", "Na'urar lissafi (calculator)", "Rubutu-da-murya"], answer: 1, why: "An yi kayan zane ne don katuna da takardun sanarwa masu kyan gani don bugawa ko rabawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Magana da AI da muryarku",
          minutes: 5,
          goal: "Yi wa mataimakin AI tambaya ta hanyar magana maimakon rubutu.",
          text: [
            "Idan rubutu yana da jinkiri ko wuya a gare ku, kuna iya yin magana maimakon haka. Yawancin manhajojin mataimakan AI suna da maɓallin makirufo. Ku taɓa shi, ku faɗi tambayarku, manhajar kuma za ta mayar da kalmominku zuwa rubutu.",
            "Wayoyi ma suna da rubutu-da-murya (voice typing) a cikin allon rubutu (keyboard). Ku nemi ƙaramin makirufo a allon rubutu lokacin da kuke rubuta saƙo.",
            "Ku yi magana a sarari kuma a hankali kaɗan fiye da yadda kuka saba. Ku faɗi abin da kuke buƙata, misali: \"Ka taimake ni in rubuta gajeren saƙo ga malamin ɗana cewa ba zai je makaranta ranar Juma'a ba saboda zai ga likita.\" Ku karanta kalmomin kafin ku aika, domin rubutu-da-murya yana iya jin ba daidai ba."
          ],
          steps: ["Ku buɗe manhajar mataimakin AI ko saƙo a wayarku.", "Ku nemo maɓallin makirufo.", "Ku taɓa shi ku faɗi tambayarku a sarari.", "Ku karanta kalmomin da ya ji, ku gyara kurakurai, sannan ku aika."],
          words: [["Rubutu-da-murya (voice typing)", "abin da ke cikin waya da ke mayar da abin da kuka faɗa zuwa rubutu."], ["Maɓallin makirufo", "ƙaramin maɓalli mai hoton makirufo da ke bar na'urar ta saurare ku."]],
          slides: [
            { title: "Ku yi magana maimakon rubutu", bullets: ["Yawancin manhajojin AI suna da maɓallin makirufo", "Wayoyi suna da rubutu-da-murya a allon rubutu"] },
            { title: "Yadda za ku yi magana da shi", bullets: ["Ku yi magana a sarari, a hankali kaɗan", "Ku faɗi abin da kuke buƙata da yadda kuke so"] },
            { title: "Ku duba kafin ku aika", bullets: ["Rubutu-da-murya yana iya jin kalmomi ba daidai ba", "Ku karanta, ku gyara, sannan ku aika"] }
          ],
          tryIt: "Ku yi amfani da maɓallin makirufo don neman mataimakin AI ya rubuta saƙo mai jimloli biyu ga malami, maigida a wurin aiki ko maƙwabci. Ku karanta shi ku gyara kurakurai.",
          youCanNow: "neman taimakon mataimakin AI da muryarku da duba abin da ya ji.",
          quickCheck: [
            { objective: "O2", q: "A ina kuke yawan samun rubutu-da-murya a waya?", options: ["A saitunan kyamara", "A menu na batir", "Ƙaramin makirufo a allon rubutu", "A cikin lambobin sadarwa na waya"], answer: 2, why: "Allon rubutu na waya sau da yawa yana da ƙaramin maɓallin makirufo don rubutu-da-murya." },
            { objective: "O2", q: "Kun faɗi saƙo, sai manhajar ta rubuta \"by bread\" maimakon \"buy bread\" (sayi burodi). Me za ku yi?", options: ["Ku aika duk da haka", "Ku goge manhajar", "Ku sake farawa a takarda", "Ku gyara kalmomin kafin ku aika"], answer: 3, why: "Rubutu-da-murya yana iya jin ba daidai ba, don haka ku karanta ku gyara kalmomin kafin ku aika." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fassara da kyamarar wayarku",
          minutes: 5,
          goal: "Fassara alama, lakabi ko wasiƙa a rubuce ta hanyar nuna kyamarar wayarku a kansa.",
          text: [
            "Manhajoji kyauta kamar Google Translate suna iya karanta kalmomin da aka buga ta kyamarar wayarku, su nuna su a wani harshe. Wannan yana taimakawa da alamu, lakabin magani, sanarwar makaranta da fom da aka rubuta da harshen da ba ku iya karantawa sosai ba.",
            "A cikin manhajar, ku zaɓi harsuna biyu (wanda ke kan takardar da wanda kuke so), ku zaɓi zaɓin kyamara, sannan ku nuna wayarku a kan kalmomin.",
            "Fassarar na'ura tana taimakawa amma ba ta cika ba. Don magani, takardun shari'a ko duk wani abu mai muhimmanci, ku nemi mai fassara. Asibitoci, cibiyoyin lafiya da ofisoshin gwamnati da yawa suna ba da shi kyauta; ku tambaya a teburin karɓar baƙi."
          ],
          steps: ["Ku saka manhajar fassara kyauta daga shagon manhajoji na hukuma.", "Ku zaɓi harshen da ke kan takardar da harshen da kuke so.", "Ku zaɓi zaɓin kyamara ku nuna wayarku a kan kalmomin.", "Don muhimman takardu, ku nemi ofishin ya ba ku mai fassara."],
          words: [["Fassara", "canja kalmomi daga wani harshe zuwa wani."], ["Mai fassara (tafinta)", "ƙwararren mutum da ke fassara magana tsakanin harsuna biyu."]],
          slides: [
            { title: "Kyamararku tana iya fassarawa", bullets: ["Alamu, lakabi, sanarwar makaranta, fom", "Manhajoji kyauta kamar Google Translate"] },
            { title: "Yadda ake yi", bullets: ["Ku zaɓi harsunan biyu", "Ku zaɓi zaɓin kyamara", "Ku nuna wayarku a kan kalmomin"] },
            { title: "Muhimman takardu", bullets: ["Fassarar na'ura ba ta cika ba", "Ku nemi ofishin ya ba ku mai fassara", "Cibiyoyin lafiya da ofisoshi da yawa suna ba da shi kyauta"] }
          ],
          tryIt: "Ku nuna kyamarar manhajar fassara a kan wani lakabi ko alama da aka buga a gidanku (kwalin abinci ma ya isa). Ku fassara shi zuwa wani harshe, sannan ku mayar da shi.",
          youCanNow: "fassara kalmomin da aka buga da kyamarar wayarku, da sanin lokacin da za ku nemi mutum maimakon haka.",
          quickCheck: [
            { objective: "O3", q: "Mene ne gaskiya game da fassarar na'ura?", options: ["Tana taimakawa amma ba ta cika ba", "Koyaushe daidai take", "Tana aiki da Turanci kaɗai", "Tana buƙatar asusun da ake biya"], answer: 0, why: "Fassara kyauta babban taimako ce amma tana iya yin kuskure." },
            { objective: "O3", q: "Lakabin maganinku yana cikin harshen da ba ku iya karantawa sosai ba. Mene ne mataki mafi aminci?", options: ["Ku yi tsammani daga hotuna", "Ku nemi kantin magani ko cibiyar lafiya su ba ku mai fassara", "Ku yi amfani da fassarar kyamara kaɗai", "Ku tambayi baƙo a intanet"], answer: 1, why: "Don magani da takardun shari'a, ƙwararren mai fassara shi ne taimako mafi aminci." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Akwatin kayan AI ɗinku na kyauta",
        questions: [
          { objective: "O1", q: "Kuna buƙatar takardar sanarwa don sayar da kayan gasa na makaranta. Wane irin kayan aiki ne ya fi dacewa?", options: ["Manhajar fassara", "Kayan zane kamar Canva", "Na'urar lissafi", "Manhajar taswira"], answer: 1, why: "An yi kayan zane ne don takardun sanarwa da katuna." },
          { objective: "O2", q: "Rubutu yana da wuya a gare ku. Ta yaya za ku iya yi wa mataimakin AI tambaya duk da haka?", options: ["Ba za ku iya ba", "Ku biya kuɗin koyon rubutu a allon rubutu tukuna", "Ku yi amfani da maɓallin makirufo ku yi magana", "Ku nemi wani ya rubuta kalmar sirrinku"], answer: 2, why: "Shigar da murya yana bar ku yin magana maimakon rubutu." },
          { objective: "O2", q: "Me yasa za ku karanta abin da rubutu-da-murya ya rubuta kafin ku aika?", options: ["Yana iya jin kalmomi ba daidai ba", "Koyaushe yana ƙara adireshinku", "Yana karɓar kuɗi", "Yana goge saƙonku"], answer: 0, why: "Rubutu-da-murya yana iya rubuta kalmomi ba daidai ba." },
          { objective: "O3", q: "Kuna son karanta wata alama da ke cikin wani harshe. Me za ku yi amfani da shi?", options: ["Kayan zane", "Manhajar waƙa", "Fitila", "Manhajar fassara mai zaɓin kyamara"], answer: 3, why: "Zaɓin kyamara yana karanta kalmomin da aka buga ya fassara su." },
          { objective: "O3", q: "Kuna buƙatar fahimtar umarnin likitanku a wani harshe. Me ya fi kyau?", options: ["Ku nemi cibiyar lafiya ta ba ku mai fassara", "Ku yi tsammani", "Ku yi amfani da fassarar waya kaɗai", "Ku yi watsi da umarnin"], answer: 0, why: "Don magani da muhimman takardu, ƙwararren mai fassara shi ne mafi aminci." }
        ]
      }
    },
    {
      name: "Babi na 2: Yin abubuwa da AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta gajerun saƙonni da mataimakin AI",
          minutes: 4,
          goal: "Sa mataimakin AI ya rubuta gajeren saƙo mai sarari da salon da kuke so.",
          text: [
            "Mataimakin AI zai iya rubuta muku gajerun saƙonni: tunatarwa ga ƙungiyar al'ummarku, saƙo ga mai gidan haya, ko godiya ga mai aikin sa-kai.",
            "Ku faɗa masa wanda saƙon yake zuwa gare shi, abin da dole ya faɗa, da salon: na abota, mai ladabi, ko mai ƙarfi. Ku faɗa masa tsawonsa: \"jimloli uku\" ko \"ƙasa da kalmomi 50\".",
            "Sannan ku mai da shi naku. Ku canja kalmomin da ba su yi kama da ku ba, kuma ku tabbatar da sunaye, ranaku da wurare da kanku."
          ],
          steps: ["Ku faɗi wanda saƙon yake zuwa gare shi.", "Ku faɗi abin da dole ya ƙunsa: rana, lokaci, wuri, abin da za a kawo.", "Ku faɗi salon da tsawon.", "Ku gyara shi don ya yi kama da ku, ku kuma tabbatar da kowane bayani."],
          words: [["Salo (tone)", "yadda saƙo yake sauti: na abota, mai ladabi, mai muhimmanci ko mai ƙarfi."]],
          slides: [
            { title: "Gajerun saƙonnin da AI zai iya rubutawa", bullets: ["Tunatarwa ga ƙungiyarku", "Saƙo ga mai gidan haya ko makaranta", "Godiya ga masu aikin sa-kai"] },
            { title: "Ku faɗa masa abubuwa huɗu", bullets: ["Wanda saƙon yake zuwa gare shi", "Abin da dole ya faɗa", "Salon", "Tsawon"] },
            { title: "Ku mai da shi naku", bullets: ["Ku canja kalmomin da ba su yi kama da ku ba", "Ku tabbatar da sunaye, ranaku da wurare"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Ka rubuta tunatarwa ta abota mai jimloli uku ga maƙwabtana game da tsabtace unguwa ranar Asabar ƙarfe 9 na safe. A kawo safar hannu.\" Sannan ku canja layi ɗaya don ya yi kama da ku.",
          youCanNow: "sa mataimakin AI ya rubuta gajeren saƙo mai salo da tsawo da suka dace, sannan ku mai da shi naku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar \"salo\" a cikin saƙo?", options: ["Tsawonsa", "Wanda yake zuwa gare shi", "Yadda yake sauti, kamar na abota ko mai ƙarfi", "Ranar da aka aika shi"], answer: 2, why: "Salo shi ne yadda saƙo yake sauti ga mai karatu." },
            { objective: "O4", q: "Tunatarwar AI ta ce tsabtacewar ranar Lahadi ce, amma ranar Asabar ce. Me za ku yi?", options: ["Ku aika; AI ya fi sani", "Ku nemi kowa ya zo ranakun biyu", "Ku goge saƙon gaba ɗaya", "Ku canja shi zuwa Asabar kafin ku aika"], answer: 3, why: "Ku ne kuke tabbatar da kowane bayani da kanku, ku gyara shi kafin ku aika." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsara takardar sanarwa mai sauƙi da Canva",
          minutes: 6,
          goal: "Yi takardar sanarwa mai shafi ɗaya a sigar Canva ta kyauta.",
          text: [
            "Canva shafin intanet ne da manhaja na zane, masu sigar kyauta. Yana da samfura (templates) da aka riga aka yi, don haka ba sai kun zama mai zane ba. Kuna iya amfani da shi a canva.com a kwamfutar ɗakin karatu ko a manhajarsa a wayarku.",
            "Ku nemi samfuri a Canva, kamar \"flyer\" ko \"event flyer\". Ku danna wanda kuke so, sannan ku danna kalmominsa don ku sa naku a madadinsu. Ku sa shi ya zama mai sauƙi: babban take, gajerun layuka uku (me, yaushe, ina), da hoto ɗaya.",
            "Idan kun gama, ku sauke shi don bugawa, ko ku raba shi ta saƙon tes ko imel. Canva yana neman ku buɗe asusu kyauta; a kwamfutar da ake rabawa, ku fita daga asusu idan kun gama."
          ],
          steps: ["Ku je canva.com ko ku buɗe manhajar Canva ku buɗe asusu kyauta.", "Ku nemi samfurin takardar sanarwa ku zaɓi ɗaya.", "Ku danna kowane rubutu ku rubuta kalmominku.", "Ku taƙaita shi zuwa take, gajerun layuka uku da hoto ɗaya.", "Ku sauke shi ko ku raba shi, sannan ku fita daga asusu a kwamfutar da ake rabawa."],
          words: [["Samfuri (template)", "zane da aka riga aka yi wanda kuke cikawa da kalmominku da hotunanku."], ["Sauke (download)", "ajiye kwafin wani fayil a na'urarku."]],
          slides: [
            { title: "Canva: kayan zane kyauta", bullets: ["Shafin canva.com ko manhajar Canva", "Samfura da aka riga aka yi", "Ba a buƙatar ƙwarewar zane"] },
            { title: "Ku yi takardar sanarwarku", bullets: ["Ku nemi samfurin takardar sanarwa", "Ku danna kalmomin ku rubuta naku", "Take + me, yaushe, ina + hoto ɗaya"] },
            { title: "Ku gama ku raba", bullets: ["Ku sauke don bugawa", "Ku raba ta saƙon tes ko imel", "Ku fita daga asusu a kwamfutar da ake rabawa"] }
          ],
          tryIt: "Ku buɗe Canva, ku zaɓi samfurin takardar sanarwa, sannan ku sa tunatarwar da kuka rubuta a Darasi na 4 a madadin kalmominsa. Ku sauke shi ko ku ajiye shi a asusunku.",
          youCanNow: "yin takardar sanarwa mai sauƙi kuma a sarari ta amfani da samfurin Canva kyauta.",
          quickCheck: [
            { objective: "O5", q: "Mene ne samfuri (template) a Canva?", options: ["Zane da aka riga aka yi wanda kuke cikawa da kalmominku", "Ƙari da ake biya", "Wani nau'in firinta", "Matatar hoto (filter)"], answer: 0, why: "Samfuri zane ne da aka riga aka yi, don haka kalmomi da hotuna kaɗai kuke canjawa." },
            { objective: "O5", q: "Takardar sanarwarku tana da layuka takwas na ƙananan rubutu. Ta yaya za ku sauƙaƙa karanta ta?", options: ["Ku ƙara ƙanƙanta rubutun", "Ku taƙaita ta zuwa take da gajerun layuka uku", "Ku ƙara hotuna", "Ku yi amfani da launuka biyar"], answer: 1, why: "Babban take da gajerun layuka uku (me, yaushe, ina) sun fi sauƙin karantawa." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Haɗa kayan aikin wuri ɗaya",
          minutes: 5,
          goal: "Yi amfani da mataimakin hira, kayan zane da kayan fassara tare don yin cikakkiyar takardar sanarwa ɗaya da harsuna biyu.",
          text: [
            "Ayyuka na gaske sau da yawa suna amfani da kayan aiki fiye da ɗaya. Don takardar sanarwa ta al'umma, kuna iya amfani da mataimakin hira don rubuta kalmomin, Canva don zana ta, da kayan fassara don yin sigar ta biyu.",
            "Ku nemi AI ya ba ku gajeren take da layuka uku na bayani. Ku liƙa su a cikin samfurin Canva. Sannan ku fassara kalmomin iri ɗaya zuwa harshe na biyu da maƙwabtanku ke magana, ku yi kwafin takardar sanarwar da su.",
            "Ku nemi wanda ke magana da wannan harshe ya karanta fassarar idan za ku iya. Kayan aiki kyauta farawa ne mai ƙarfi; mai karatu na gaske ne ke tabbatar da ta yi daidai."
          ],
          steps: ["Ku nemi mataimakin hira ya ba ku take da layuka uku na bayani.", "Ku sa kalmomin a cikin samfurin takardar sanarwa na Canva.", "Ku fassara kalmomin zuwa harshe na biyu.", "Ku yi kwafin takardar sanarwar da fassarar.", "Ku nemi wanda ya iya harshen sosai ya karanta shi idan za ku iya."],
          words: [["Aiki (project)", "wani aiki da ke da sakamako bayyananne idan an gama, kamar takardar sanarwa."]],
          slides: [
            { title: "Aiki ɗaya, kayan aiki uku", bullets: ["Mataimakin hira: kalmomin", "Canva: zanen", "Manhajar fassara: harshe na biyu"] },
            { title: "Matakan", bullets: ["Ku rubuta kalmomin da AI", "Ku sa su a samfurin Canva", "Ku fassara ku yi kwafi na biyu"] },
            { title: "Ku tabbatar ya yi daidai", bullets: ["Ku tabbatar da kowace rana da wuri", "Ku nemi wanda ya iya harshen ya karanta fassarar"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi takardar sanarwa mai shafi ɗaya don taron al'umma. Ku yi amfani da mataimakin AI don rubuta take da layuka uku, ku zana ta a Canva, sannan ku yi kwafi na biyu da aka fassara zuwa wani harshe da maƙwabtanku ke magana.",
          youCanNow: "amfani da kayan AI kyauta da yawa tare don kammala aiki na gaske don al'ummarku.",
          quickCheck: [
            { objective: "O5", q: "A cikin aikin haɗaka, me kuke liƙawa a cikin samfurin Canva?", options: ["Lambar wayarku", "Dukkan hirar AI", "Take da layuka uku da AI ya rubuta", "Hanyar haɗi (link) zuwa shafin AI"], answer: 2, why: "Mataimakin hira yana rubuta kalmomin, ku kuma ku sa su a cikin takardar sanarwar Canva." },
            { objective: "O3", q: "Kun fassara takardar sanarwarku zuwa Sifaniyanci amma ba ku iya Sifaniyanci ba. Me za ku yi kafin ku raba ta?", options: ["Ku raba ta nan take", "Ku sake fassara ta karo na biyu", "Ku cire kwafin Sifaniyancin", "Ku nemi wanda ya iya Sifaniyanci sosai ya karanta ta"], answer: 3, why: "Mai karatu na gaske yana gano kurakuran da kayan aiki kyauta bai gani ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yin abubuwa da AI",
        questions: [
          { objective: "O4", q: "Waɗanne abubuwa huɗu ya kamata ku faɗa wa mataimakin AI lokacin da kuke neman gajeren saƙo?", options: ["Kalmar sirrinku, adireshinku, shekarunku da bankinku", "Wanda yake zuwa gare shi, abin da dole ya faɗa, salon da tsawon", "Ranar kawai", "Babu komai; zai yi tsammani"], answer: 1, why: "Waɗannan bayanai huɗu suna kawo saƙon da ya dace." },
          { objective: "O5", q: "Mene ne samfuri (template)?", options: ["Ƙwayar cutar kwamfuta (virus)", "Kalmar sirri", "Zane da aka riga aka yi wanda kuke cikawa da kalmominku", "Saitin waya"], answer: 2, why: "Samfura suna bar masu farawa su yi zane masu kyan gani." },
          { objective: "O5", q: "Me ya kamata takardar sanarwa mai sauƙi ta ƙunsa?", options: ["Babban take da me, yaushe da ina", "Sakin layi goma", "Lambar Social Security ɗinku", "Hotuna kaɗai, babu kalmomi"], answer: 0, why: "Takardun sanarwa masu sauƙi suna da sauƙin karantawa: take, bayani da hoto ɗaya." },
          { objective: "O5", q: "Kun yi amfani da Canva a kwamfutar ɗakin karatu. Me za ku yi a ƙarshe?", options: ["Ku bar asusunku a buɗe", "Ku ajiye kalmar sirrinku a burauzar", "Ku rubuta kalmar sirrinku a kan allo", "Ku fita daga asusu"], answer: 3, why: "Fita daga asusu yana kare asusunku a kwamfutar da ake rabawa." },
          { objective: "O3", q: "Kun fassara takardar sanarwarku da kayan aiki kyauta. Ta yaya za ku tabbatar ta yi daidai?", options: ["Ku nemi wanda ya iya harshen sosai ya karanta ta", "Ku sake fassara ta sau goma", "Ku ƙara girman rubutu", "Ku ƙara hotuna"], answer: 0, why: "Mai karatu na gaske yana gano kurakuran da na'urori ke yi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kayan AI Masu Sauƙi ga Masu Farawa",
    questions: [
      { objective: "O1", q: "Lokacin zaɓar kayan AI, ya kamata ku fara da:", options: ["Kayan aiki mafi tsada", "Aikin da kuke buƙatar yi", "Sabuwar manhaja", "Duk abin da baƙo ya ba da shawara"], answer: 1, why: "Ku fara da aikin, sannan ku zaɓi kayan aikin da ya dace." },
      { objective: "O1", q: "Wane kayan aiki ne ya fi dacewa don rubutu da bayani?", options: ["Manhajar kyamara", "Manhajar fitila", "Mataimakin hira kamar Copilot, ChatGPT ko Gemini", "Na'urar kunna waƙa"], answer: 2, why: "Mataimakan hira suna da kyau wajen rubutu, bayani da tsarawa." },
      { objective: "O1", q: "Ana amfani da Canva galibi don:", options: ["Zana takardun sanarwa da katuna", "Harkokin banki", "Kiran waya", "Yanayi"], answer: 0, why: "Canva kayan zane ne mai sigar kyauta." },
      { objective: "O1", q: "Me ya kamata ku fara gwadawa lokacin zaɓar kayan aiki?", options: ["Tsari mafi tsada", "Kwas da ake biya", "Tallar da ke tasowa (pop-up)", "Sigar kyauta"], answer: 3, why: "Sigar kyauta ta isa ga yawancin ayyukan masu farawa." },
      { objective: "O2", q: "Ta yaya kuke faɗin tambaya ga yawancin manhajojin AI?", options: ["Ku girgiza wayar", "Ku taɓa maɓallin makirufo", "Ku kashe wayar", "Ku buɗe kyamara"], answer: 1, why: "Maɓallin makirufo yana bar manhajar ta saurare ku." },
      { objective: "O2", q: "Lokacin amfani da rubutu-da-murya, yana taimakawa ku:", options: ["Yi magana a sarari kuma a hankali kaɗan", "Yi raɗa", "Yi magana da sauri sosai", "Rufe makirufo"], answer: 0, why: "Magana a sarari kuma a hankali ana jin ta daidai." },
      { objective: "O2", q: "Rubutu-da-murya ya rubuta \"Friday\" (Juma'a) a matsayin \"fry day\". Ya kamata ku:", options: ["Aika duk da haka", "Goge manhajar", "Gyara shi kafin ku aika", "Sake farawa a sabuwar waya"], answer: 2, why: "Koyaushe ku karanta ku gyara abin da rubutu-da-murya ya ji." },
      { objective: "O3", q: "Don fassara sanarwar makaranta da aka buga, kuna iya:", options: ["Amfani da kayan zane", "Amfani da zaɓin kyamara na manhajar fassara", "Amfani da na'urar lissafi", "Jira wani ya kira"], answer: 1, why: "Zaɓin kyamara yana karanta kalmomin da aka buga ya fassara su." },
      { objective: "O3", q: "A manhajar fassara, kuna fara zaɓar:", options: ["Kalmar sirri", "Nau'in rubutu (font)", "Launi", "Harshen da ke kan takardar da harshen da kuke so"], answer: 3, why: "Manhajar tana buƙatar sanin harsunan biyu." },
      { objective: "O3", q: "Don takardar shari'a a harshen da ba ku iya karantawa sosai ba, taimako mafi aminci shi ne:", options: ["Ƙwararren mai fassara", "Yin tsammani", "Hoton barkwanci (meme)", "Tsallake ta"], answer: 0, why: "Muhimman takardu suna buƙatar ƙwararren mutum, ba na'ura kaɗai ba." },
      { objective: "O4", q: "Wanne ne kyakkyawar buƙata don gajeren saƙo?", options: ["\"saƙo\"", "\"Ka rubuta saƙo mai ladabi mai jimloli biyu ga mai gidan hayata, ina tambayar yaushe za a gyara na'urar dumama ɗaki.\"", "\"rubuta\"", "\"abubuwa don mai gida\""], answer: 1, why: "Yana faɗin wanda yake zuwa gare shi, abin da zai faɗa, salo da tsawo." },
      { objective: "O4", q: "Bayan AI ya rubuta saƙonku, ya kamata ku:", options: ["Aika shi ba tare da karantawa ba", "Ƙara bayanan bankinku", "Gyara shi don ya yi kama da ku, ku tabbatar da bayanai", "Saka shi a fili ga kowa"], answer: 2, why: "Kuna mai da shi naku, kuna tabbatar da sunaye, ranaku da wurare." },
      { objective: "O4", q: "Salo yana nufin:", options: ["Yadda saƙo yake sauti, kamar na abota ko mai ƙarfi", "Tsawon saƙon", "Girman rubutu", "Ƙarar wayar"], answer: 0, why: "Salo shi ne yadda saƙon yake ji ga mai karatu." },
      { objective: "O5", q: "Me Canva yake neman ku yi kafin ku iya zane?", options: ["Biyan kuɗi", "Kiran waya", "Asusu kyauta", "Fom da aka buga"], answer: 2, why: "Canva yana amfani da asusu kyauta don ajiye zanenku." },
      { objective: "O5", q: "Wace takardar sanarwa ce ta fi sauƙin karantawa?", options: ["Cikakken shafi na ƙananan rubutu", "Take, gajerun layuka uku da hoto ɗaya", "Hotuna goma babu kalmomi", "Lambar waya kaɗai"], answer: 1, why: "Gajere kuma a sarari shi ne mafi kyau ga takardar sanarwa." },
      { objective: "O5", q: "Don samun kwafin takardar sanarwarku don bugawa, kuna:", options: ["Ɗaukar hoton allo", "Rufe burauzar", "Aika imel ga Canva", "Sauke ta"], answer: 3, why: "Saukewa tana ajiye kwafin da za ku iya bugawa." },
      { objective: "O1", q: "A cikin aikin haɗaka, wane kayan aiki ne ke rubuta kalmomin?", options: ["Mataimakin hira", "Manhajar fassara", "Firinta", "Kyamara"], answer: 0, why: "Mataimakin hira yana rubuta take da bayanai." },
      { objective: "O3", q: "Me yasa za a yi kwafi na biyu na takardar sanarwa a wani harshe?", options: ["Ya fi kyan gani", "Don ƙarin maƙwabta su iya karanta ta", "Canva yana buƙatar haka", "Don amfani da ƙarin takarda"], answer: 1, why: "Harshe na biyu yana kai wa ƙarin mutane a al'ummarku." },
      { objective: "O4", q: "Kafin ku raba cikakkiyar takardar sanarwa, ya kamata ku tabbatar da:", options: ["Yanayi", "Batir ɗin wayarku", "Cewa kowace rana da wuri sun yi daidai", "Launin firinta"], answer: 2, why: "Bayanan da ba daidai ba a takardar sanarwa suna kai mutane wuri marar kyau." },
      { objective: "O3", q: "A aikin ƙarshe, kayan aiki na ƙarshe da kuke amfani da shi shi ne:", options: ["Na'urar lissafi", "Manhajar waƙa", "Taswira", "Kayan fassara don kwafi a harshe na biyu"], answer: 3, why: "Mataki na ƙarshe yana yin takardar sanarwar a harshe na biyu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      4,
      6,
      7,
      9,
      10,
      13,
      14,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kalmomi daga mataimakin",
        objective: "O4",
        notYet: "Babu take ko bayanai, ko ba a tabbatar da kalmomin ba.",
        meets: "Gajeren take da layuka uku daga AI, an gyara su don su yi daidai, kuma an tabbatar da ranaku da wurare.",
        exceeds: "An nemi AI ya yi canji, kamar salo na abota fiye da haka ko take mafi gajarta."
      },
      {
        name: "Zanen takardar sanarwa",
        objective: "O5",
        notYet: "Babu takardar sanarwa, ko tana cike da abubuwa kuma tana da wuyar karantawa.",
        meets: "Takardar sanarwa ta Canva mai shafi ɗaya, mai babban take, me, yaushe da ina, da hoto ɗaya.",
        exceeds: "An sauke ta ko an raba ta, kuma ana iya karanta ta a sarari daga ɗaya gefen ɗaki."
      },
      {
        name: "Harshe na biyu",
        objective: "O3",
        notYet: "Babu kwafin da aka fassara.",
        meets: "Kwafi na biyu da aka fassara kalmominsa zuwa harshen da maƙwabta ke magana.",
        exceeds: "Wanda ya iya harshen sosai ya karanta fassarar, kuma an gyara ta idan akwai buƙata."
      },
      {
        name: "Kayan aiki da ya dace a kowane mataki",
        objective: "O1",
        notYet: "Ba zai iya faɗin wane kayan aiki ne ya yi wane aiki ba.",
        meets: "Yana ambaton mataimakin hira, Canva da kayan fassara a kowane mataki.",
        exceeds: "Yana bayanin dalilin da yasa kowane kayan aiki ya dace da aikinsa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi takardar sanarwa ko saƙo na gaske don ƙungiyar al'umma, makaranta ko kasuwanci cikin kwanaki 30 (binciken biyo baya)",
      "Abokan aiki na al'umma sun ce an tallata ƙarin taruka da harsuna biyu ko fiye",
      "Masu koyo da suka fara wani kwas na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta cibiyar al'umma",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Manhajar fassara kyauta kamar Google Translate, da asusun Canva kyauta",
      "Lakabi ko alama da aka buga don atisayen fassara da kyamara",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo da ke magana da harsuna daban-daban biyu-biyu don su karanta fassarar juna.",
      "Ku fara taimakawa wajen buɗe asusun Canva; shi ne ya fi ɗaukar lokaci ga masu farawa.",
      "Ku tunatar da masu koyo cewa takardun magani da na shari'a suna buƙatar mai fassara, ba manhaja kaɗai ba.",
      "Ku tabbata masu koyo sun fita daga asusun Canva da na kayan AI a kwamfutocin da ake rabawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
