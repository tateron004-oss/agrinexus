"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-lesson-planning.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-lesson-planning-ha",
  lang: "ha",
  translationOf: "edu-ai-lesson-planning",
  category: "Leadership Development",
  name: "AI ga Shugabannin Makaranta da Ilimi 3: AI don Tsara Darasi",
  skills: "Tsara darasi daga manufa zuwa baya, Rubuta prompt don cikakken tsarin darasi, Duba tsarin AI don gaskiya da daidaito, Shirya bambanta koyarwa, Rubuta tsarin rukunin darussa, Horar da ƙungiya ta tsara darasi da AI",
  outcome: "tsara cikakken darasi tare da mataimakin AI, daga manufa da ma'aunin nasara zuwa ayyuka, bambanta koyarwa da tambayoyin fita (exit ticket), duba shi don gaskiya, daidaito da nuna bambanci, da mayar da hanyarku samfuri da ƙungiyarku za ta sake amfani da shi.",
  about: [
    "Wannan kwas ɗin na malamai ne, masu horar da koyarwa (instructional coaches), shugabannin sashe da shugabannin makaranta masu taimakawa wajen tsara darasi. AI yana iya rage lokacin tsarawa, amma tsari mai sauri yana da kyau ne kawai idan yana da gaskiya, ya dace da abin da dole ɗalibai su koya, kuma ya dace da ɗalibanku.",
    "Babi na 1 yana koyar da hanyar tsara darasi daga ƙarshe (backward design) da AI: ku fara daga manufa, ku yanke shaidar koyo, sannan ku gina ayyuka, ku kuma duba komai. Babi na 2 yana ƙara bambanta koyarwa, tsara rukunin darussa, da yadda shugabanni ke horar da ƙungiyoyi su tsara darasi da AI yadda ya kamata.",
    "Ku yi amfani da bayanin aji na ƙirƙira. Kada ku taɓa saka sunayen ɗalibai, bayanan IEP ko 504, maki ko wasu bayanai da ke gane ɗalibi a cikin kayan aikin da gundumarku (district) ba ta amince da shi ba. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Wannan shi ne kwas na 3 cikin 8 na AI ga Shugabannin Makaranta da Ilimi."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don tsara cikakken darasi ɗaya da ku (ko malamin da kuke horarwa) za ku koyar: manufa da ma'aunin nasara daga ma'aunin koyarwa (standard) da kuka zaɓa, buɗe darasi mai jan hankali (hook), atisaye tare da jagora da atisaye na kai, tallafi ga ƙungiyoyi uku (masu buƙatar ƙarin tallafi, masu matakin aji, masu shirin ƙarin ƙalubale), da tambayoyin fita guda uku tare da amsoshi. Ku duba shi da jerin binciken inganci, ku rubuta abin da kuka canja da dalili, sannan ku ajiye prompt ɗinku a matsayin samfuri ga ƙungiyarku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malamai, masu horar da koyarwa, shugabannin sashe da shugabannin makaranta a makarantun Amurka masu tsara darasi ko masu taimaka wa malaman da ke yin haka.",
    startingPoint: "Suna iya amfani da tsarin prompt na malami kuma sun san dokokin sirrin ɗalibai daga kwas na 1 da na 2. Suna tsara darasi da hannu, kuma wataƙila sun yi amfani da AI don neman ra'ayoyi, amma ba don cikakken darasi da aka duba ba.",
    gap: "AI yana iya rage lokacin tsarawa, amma tsare-tsare masu sauri sau da yawa sun yi tsawo sosai, ba su dace da manufa ba, ko ba su da gaskiya. Malamai da shugabanni suna buƙatar hanyar tsara darasi daga ƙarshe da AI, binciken inganci don gaskiya, daidaito da nuna bambanci, da samfuri da ƙungiya za ta sake amfani da shi.",
    constraints: [
      "Ku yi amfani da bayanin aji na ƙirƙira; kada ku taɓa saka sunayen ɗalibai, bayanan IEP ko 504, maki ko wasu bayanai da ke gane ɗalibi a kayan aikin da gundumar ba ta amince da shi ba",
      "Ma'aunin koyarwa (standards) suna fitowa daga majiyar hukuma ta jiha ko gunduma, ba daga AI ba",
      "Ana tsara gyare-gyaren IEP da 504 (accommodations) tare da abokan aiki na ilimi na musamman, kuma dole a ci gaba da ba da su",
      "Na'urori: kwamfuta mai intanet da mataimakin AI",
      "Lokaci: gajerun darussa da suka dace da ranar koyarwa"
    ],
    prerequisites: "\"AI ga Shugabannin Makaranta da na Ilimi 2: Kayan AI ga Malamai\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ma'aunin koyarwa da aka kwafo daga majiyar hukuma", action: "rubuta manufar \"Zan iya...\" (\"I can\") da ma'aunin nasara uku tare da taimakon AI", standard: "an gyara su har sun shirya rubutawa a allo, kafin ku nemi ayyuka" },
    { id: "O2", condition: "Idan kuna da manufarku", action: "rubuta prompt da za a sake amfani da shi wanda ke samo cikakken daftarin darasi daga AI", standard: "tare da tsawon lokacin aji, abin da ɗalibai suka riga suka sani, kayan aiki da sassan darasi, da aƙalla tambayoyin biyo baya biyu" },
    { id: "O3", condition: "Idan aka ba ku daftarin darasi na AI", action: "duba shi da jerin binciken inganci mai matakai biyar da rubuta canje-canjenku", standard: "kuna gyara kowace matsala da kuka samu" },
    { id: "O4", condition: "Idan aka ba ku darasi da ajin da aka bayyana ta buƙatu", action: "tsara tallafi ga ƙungiyoyi uku: masu buƙatar ƙarin tallafi, masu matakin aji da masu shirin ƙarin ƙalubale", standard: "an tabbatar da gyare-gyaren IEP da 504 tare da abokin aiki na ilimi na musamman" },
    { id: "O5", condition: "Idan aka ba ku rukunin darussa (unit) da darasinku yake ciki", action: "rubuta tsarin rukunin darussa da AI da daidaita saurin tafiyarsa (pacing)", standard: "kuna ƙara ranar bita da kuskuren fahimta uku da za a shirya musu" },
    { id: "O6", condition: "Don ƙungiyarku ko PLC", action: "mayar da prompt ɗinku na tsarawa da jerin bincikenku samfurin ƙungiya da horar da wasu su yi amfani da shi", standard: "kuna bin diddigin lokacin da aka ajiye da matsalolin inganci" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara darasi da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ku fara da manufa, ba da aiki ba",
          minutes: 5,
          goal: "Rubuta manufa a sarari da ma'aunin nasara kafin ku nemi AI ya ba da ayyuka.",
          text: [
            "AI zai yi farin cikin ba ku aiki mai daɗi wanda ba ya koyar da komai musamman. Tsara darasi daga ƙarshe (backward design) yana hana haka: da farko ku yanke abin da ya kamata ɗalibai su sani ko su iya yi, sannan yadda za ku gan shi, sannan ayyukan.",
            "Ku ne kuke zaɓar ma'aunin koyarwa (standard). Ku kwafi ainihin kalmominsa daga shafin hukuma na ma'aunin koyarwa na jiharku ko tsarin karatun gundumarku, ba daga AI ba, domin AI yana iya kuskure wajen faɗin ma'auni ko ya ƙirƙiri lambobin ma'auni. Sannan ku nemi AI ya taimake ku ku mayar da shi manufa da ɗalibai za su fahimta (\"Zan iya...\") da ma'aunin nasara biyu ko uku.",
            "Misalin prompt: \"Ga ma'aunin koyarwa: [ku liƙa shi]. Ka rubuta manufar darasi ɗaya ga ɗaliban aji na 6 da kalmomin da ɗalibai za su fahimta, da ma'aunin nasara uku da ke nuna an cimma manufar.\" Ku gyara har sai kun shirya rubuta shi a allo."
          ],
          steps: ["Ku zaɓi ma'aunin koyarwa daga majiyar jiharku ko gundumarku.", "Ku liƙa ainihin kalmominsa a cikin prompt.", "Ku nemi manufar \"Zan iya...\" da ma'aunin nasara.", "Ku gyara har ta fito a sarari ga ɗalibai.", "Sai a lokacin ku tsara ayyuka."],
          words: [["Tsara darasi daga ƙarshe (backward design)", "tsarawa daga manufar koyo, zuwa shaida, zuwa ayyuka."], ["Ma'aunin nasara (success criteria)", "abin da ɗalibai za su iya nunawa idan sun cimma manufa."], ["Ma'aunin koyarwa (standard)", "bayanin hukuma na abin da ya kamata ɗalibai su koya, wanda jiharku ko gundumarku ta kafa."]],
          slides: [
            { title: "Tsara darasi daga ƙarshe", bullets: ["1. Me ya kamata ɗalibai su koya?", "2. Ta yaya za mu gani?", "3. Sannan ayyukan"] },
            { title: "Ku ne kuke zaɓar ma'aunin koyarwa", bullets: ["Ku kwafo shi daga majiyar hukuma ta jiha ko gunduma", "AI yana iya kuskure ko ƙirƙirar lambobin ma'auni"] },
            { title: "Manufa da ma'aunin nasara", bullets: ["\"Zan iya...\" da kalmomin da ɗalibai za su fahimta", "Abubuwa biyu ko uku da ɗalibai za su nuna"] }
          ],
          tryIt: "Ku zaɓi ma'aunin koyarwa na darasin da ke tafe. Ku kwafo shi daga majiyar hukuma, sannan ku yi amfani da AI don rubuta manufar \"Zan iya...\" da ma'aunin nasara uku. Ku gyara su har sun shirya rubutawa a allo.",
          youCanNow: "fara tsarin darasi da taimakon AI daga ma'aunin koyarwa na gaske, manufa da ma'aunin nasara.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'aunin nasara?", options: ["Makin da ɗalibai suka samu bara", "Abin da ɗalibai za su nuna idan sun cimma manufa", "Jerin kayan aiki", "Manufofin malami na shekara"], answer: 1, why: "Ma'aunin nasara suna bayyana shaidar koyo ga manufa." },
            { objective: "O1", q: "AI ya ba ku lambar ma'aunin koyarwa don manufarku. Me za ku yi?", options: ["Ku yi amfani da ita, domin AI ya san ma'aunai", "Ku nemi AI ya sake duba ta", "Ku kwafo ma'aunin daga majiyar hukuma ta jiharku ko gundumarku a maimakon haka", "Ku bar ma'aunin kwata-kwata"], answer: 2, why: "AI yana iya kuskure ko ƙirƙirar ma'aunai, don haka suna fitowa daga majiyar hukuma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta prompt don cikakken darasi",
          minutes: 6,
          goal: "Samo daftarin tsarin darasi mai tsari daga AI da prompt da za a sake amfani da shi.",
          text: [
            "Idan manufa ta tabbata, ku nemi dukan darasin a tsarin makarantarku. Prompt mai ƙarfi yana ba da: aji da fanni, tsawon lokacin aji, manufa da ma'aunin nasara, abin da ɗalibai suka riga suka sani, kayan aikin da kuke da su, da sassan da kuke so.",
            "Misali: \"Ka tsara darasi na minti 50 na aji na 6. Manufa: [ku liƙa]. Ma'aunin nasara: [ku liƙa]. Ɗalibai sun riga sun san [x]. Kayan aiki: ƙananan alluna (whiteboards), na'urar nuna hoto (projector), babu na'urorin ɗalibai. Sassa: buɗe darasi (minti 5), ɗan darasi (10), atisaye tare da jagora (15), atisaye na kai (15), tambayoyin fita (5). Ka yi amfani da tebur mai lokaci, ayyukan malami, ayyukan ɗalibai.\"",
            "Ku ɗauki sakamakon a matsayin daftari daga abokin aiki mai sauri amma sabo. Ku yi tambayoyin biyo baya: \"ka sa buɗe darasin ya shafi rayuwar ɗalibai\", \"ka ƙara binciken fahimta biyu a cikin ɗan darasin\", \"ka rage atisaye tare da jagora zuwa minti 10\"."
          ],
          steps: ["Ku ba da aji, fanni da tsawon lokacin aji.", "Ku liƙa manufa da ma'aunin nasara.", "Ku faɗi abin da ɗalibai suka sani da kayan aikin da kuke da su.", "Ku jera sassan da lokutan da kuke so.", "Ku nemi tebur, sannan ku inganta shi da tambayoyin biyo baya."],
          words: [["Ɗan darasi (mini-lesson)", "gajeren lokacin koyarwa da aka mayar da hankali kan abu ɗaya."], ["Binciken fahimta (check for understanding)", "hanya mai sauri don ganin ko ɗalibai suna bin darasi, kamar ɗaga babban yatsa ko amsa a ƙaramin allo."]],
          slides: [
            { title: "Ku ba AI bayanin halin da ake ciki", bullets: ["Aji, fanni, tsawon lokacin aji", "Manufa da ma'aunin nasara", "Abin da aka riga aka sani da kayan aiki"] },
            { title: "Ku nemi tsarinku", bullets: ["Sassa tare da lokuta", "Tebur: lokaci, malami, ɗalibai"] },
            { title: "Ku inganta shi", bullets: ["\"Ka sa buɗe darasin ya shafi rayuwar ɗalibai\"", "\"Ka ƙara binciken fahimta biyu\""] }
          ],
          tryIt: "Ku yi amfani da tsarin prompt don samun cikakken daftarin darasi na manufarku daga Darasi na 1. Ku yi aƙalla tambayoyin biyo baya biyu don inganta shi.",
          youCanNow: "samun daftarin darasi mai tsari da amfani daga AI, da inganta shi da tambayoyin biyo baya.",
          quickCheck: [
            { objective: "O2", q: "Ta yaya ya kamata ku ɗauki daftarin darasi na AI?", options: ["A matsayin daftari daga abokin aiki mai sauri amma sabo", "A matsayin cikakken tsari da ya shirya koyarwa", "A matsayin tsarin da gundumarku ta amince da shi", "A matsayin abin da za ku ɓoye wa abokan aiki"], answer: 0, why: "Daftarorin AI suna da sauri amma suna buƙatar hukuncinku kafin amfani." },
            { objective: "O2", q: "Darasin AI ba shi da binciken fahimta. Me za ku yi?", options: ["Ku koyar da shi kamar yadda yake", "Ku fara sabuwar hira da sabon kayan aiki", "Ku cire ayyukan atisaye", "Ku yi tambayar biyo baya: \"Ka ƙara binciken fahimta mai sauri bayan atisaye tare da jagora\""], answer: 3, why: "Tambayoyin biyo baya suna cike giɓin daftarin ba tare da sake farawa ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Duba tsarin: gaskiya, daidaito da nuna bambanci",
          minutes: 5,
          goal: "Duba tsarin darasi na AI da jerin binciken inganci mai matakai biyar.",
          text: [
            "Kowane tsarin AI yana buƙatar binciken malami kafin ya kai ga ɗalibai. Ku yi amfani da tambayoyi biyar. Gaskiya: shin duk bayanai, misalai, ranaku da amsoshi daidai ne? Daidaito: shin kowane aiki yana kai ɗalibai zuwa manufa, kuma tambayoyin fita suna auna ta?",
            "Matakin da ya dace: shin wahala da tsawonsa sun dace da waɗannan ɗalibai da wannan lokaci? Adalci da haɗa kowa: shin misalai, sunaye da yanayi suna da mutunci kuma iri-iri, babu ra'ayin wariya, kuma ɗalibai masu nakasa da masu koyon Turanci (English learners) za su iya amfani da shi? Mai yiwuwa: kuna da kayan aiki da lokaci?",
            "Ku yi alama a kan abin da kuka canja. Da lokaci, wannan yana nuna wa ƙungiyarku inda tsare-tsaren AI suka saba yin kuskure (sau da yawa: abu mai yawa fiye da lokacin, da ayyukan da suke kama da aiki amma ba sa atisayen manufar)."
          ],
          steps: ["Gaskiya: ku duba bayanai, misalai da amsoshi.", "Daidaito: kowane aiki yana hidimar manufa; tambayoyin fita suna auna ta.", "Matakin da ya dace ga waɗannan ɗalibai da wannan lokaci.", "Adalci da haɗa kowa: babu ra'ayin wariya; kowa zai iya amfani da shi.", "Mai yiwuwa da kayan aikinku; ku rubuta abin da kuka canja."],
          words: [["Daidaito (alignment)", "lokacin da manufofi, ayyuka da tantancewa duka suka dace da juna."], ["Ra'ayin wariya (stereotype)", "ra'ayi marar adalci, kafaffe game da wani rukuni na mutane."], ["Mai sauƙin amfani ga kowa (accessible)", "wanda kowane ɗalibi zai iya amfani da shi, har da masu nakasa."]],
          slides: [
            { title: "Bincike mai matakai biyar", bullets: ["Gaskiya", "Daidaito", "Matakin da ya dace", "Adalci da haɗa kowa; mai yiwuwa"] },
            { title: "Matsalolin da aka saba gani a tsarin AI", bullets: ["Abu mai yawa fiye da lokacin", "Ayyuka masu yawan hayaniya da ba sa kai ga manufa", "Amsoshin da ba daidai ba ko bayanan ƙirƙira"] },
            { title: "Ku rubuta canje-canjenku", bullets: ["Yana nuna inda tsare-tsaren AI ke kuskure", "Yana gina hukuncin ƙungiyarku"] }
          ],
          tryIt: "Ku duba daftarin darasinku da bincike mai matakai biyar. Ku gyara kowace matsala, ku jera canje-canjen da kuka yi.",
          youCanNow: "duba tsarin darasi na AI don gaskiya, daidaito, mataki, adalci da yiwuwar aiwatarwa.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar daidaito a tsarin darasi?", options: ["An buga darasin da kyau", "Darasin yana bin tsarin littafin karatu", "Manufofi, ayyuka da tantancewa duka sun dace da juna", "Darasin yana amfani da sababbin kayan aiki"], answer: 2, why: "Darussa masu daidaito suna atisaye da auna abin da manufa ta ambata." },
            { objective: "O3", q: "Tsarin AI ya cusa ayyuka biyar a ajin minti 45. Me za ku canja?", options: ["Ku rage shi ya dace da lokacin, ku riƙe ayyukan da ke atisayen manufa", "Ku riƙe duka biyar ku yi gaggawa", "Ku ƙara wani aiki ɗaya", "Ku nemi ɗalibai su gama a gida"], answer: 0, why: "Abu mai yawa fiye da lokacin shi ne matsalar da aka fi gani a tsarin AI." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara darasi da AI",
        questions: [
          { objective: "O1", q: "A tsara darasi daga ƙarshe, me ke zuwa farko?", options: ["Aiki mai daɗi", "Takardar aiki (worksheet)", "Abin da ya kamata ɗalibai su koya", "Tsarin wuraren zama"], answer: 2, why: "Ku tsara daga manufar koyo." },
          { objective: "O1", q: "Daga ina ya kamata kalmomin ma'aunin koyarwa su fito?", options: ["Majiyar hukuma ta jiharku ko gundumarku", "Duk abin da AI ya faɗa", "Wani shafin intanet kawai", "Tunani"], answer: 0, why: "AI yana iya kuskure ko ƙirƙirar ma'aunai." },
          { objective: "O2", q: "Wane bayani ne ya fi taimakawa a prompt na tsara darasi?", options: ["Sunayen ɗaliban da ke fama", "Lambar wayar shugaban makaranta", "Makin jarabawar ɗalibai da sunayensu", "Tsawon lokacin aji, manufa, abin da aka riga aka sani da kayan aiki"], answer: 3, why: "Bayanin halin da ake ciki yana inganta tsarin ba tare da bayanan sirri ba." },
          { objective: "O3", q: "Wani aikin AI yana da daɗi amma ba ya atisayen manufa. Wane bincike ne ya kasa?", options: ["Gaskiya", "Daidaito", "Mai yiwuwa", "Adalci"], answer: 1, why: "Daidaito yana nufin ayyuka suna hidimar manufa." },
          { objective: "O3", q: "Wace matsala ce aka fi gani a tsarin darasi na AI?", options: ["Abu kaɗan sosai", "Lokaci cikakke", "Babu rubutu kwata-kwata", "Abu mai yawa fiye da lokacin"], answer: 3, why: "AI yakan cika lokaci fiye da kima." }
        ]
      }
    },
    {
      name: "Babi na 2: Bambanta koyarwa, rukunin darussa da tsarawa a ƙungiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shirya bambanta koyarwa",
          minutes: 6,
          goal: "Yi amfani da AI don tsara tallafi ga ɗaliban da ke buƙatar ƙarin taimako, da ƙalubale ga masu shirin ƙari.",
          text: [
            "Ku bayyana ƙungiyoyi ta buƙatu, ba ta sunaye ba: \"ɗaliban da ke buƙatar ƙarin tallafi a matsalolin matakai da yawa\", \"ɗalibai masu matakin aji\", \"ɗaliban da suka shirya ƙarin ƙalubale\". Ku nemi AI hanyoyi uku zuwa manufa ɗaya: ƙarin tallafin wucin gadi (misalan da aka warware, farkon jimloli, hotuna), atisaye na matakin aji, da ƙari (matsala mafi wuya ko aikin amfani da ilimi a wani wuri).",
            "Ku nemi tallafin da ke taimakon kowa: hotuna masu sarari, kalmomi tare da hotuna, zaɓi a yadda ɗalibai ke nuna abin da suka koya. Wannan hanya, tsara wa ɗalibai iri-iri tun farko, ana yawan kiranta Universal Design for Learning (UDL); ku duba UDL Guidelines na CAST don ƙarin bayani.",
            "Dole ɗaliban da ke da IEP ko 504 plan su sami gyare-gyaren da ke cikin tsare-tsarensu; tallafin da AI ya samar ba ya maye gurbinsu. Ku tuntuɓi malamin ilimi na musamman, kuma kada ku saka bayanan tsarin a kayan aikin da ba a amince da su ba."
          ],
          steps: ["Ku bayyana ƙungiyoyi ta buƙatu, ba ta sunaye ba.", "Ku nemi hanyoyi uku zuwa manufa ɗaya.", "Ku nemi tallafin da ke taimakon kowa: hotuna, kalmomi, zaɓi.", "Ku tabbatar da gyare-gyaren IEP da 504 tare da malamin ilimi na musamman.", "Ku nisanta bayanan tsarin daga kayan aikin da ba a amince da su ba."],
          words: [["Bambanta koyarwa (differentiation)", "daidaita koyarwa ta yadda ɗalibai masu buƙatu daban-daban za su kai ga manufa ɗaya."], ["Tallafin wucin gadi (scaffolding)", "taimako na ɗan lokaci, kamar misalan da aka warware ko farkon jimloli."], ["Universal Design for Learning (UDL)", "tsara darussa don ɗalibai iri-iri tun farko."]],
          slides: [
            { title: "Ƙungiyoyi ta buƙatu, ba ta suna ba", bullets: ["Masu buƙatar ƙarin tallafi", "Masu matakin aji", "Masu shirin ƙari"] },
            { title: "Hanyoyi uku, manufa ɗaya", bullets: ["Tallafi: misalai, farkon jimloli, hotuna", "Atisaye na matakin aji", "Ƙari ko aikin amfani da ilimi a wani wuri"] },
            { title: "Tallafi ga kowa", bullets: ["Hotuna, kalmomi, zaɓi", "UDL: ku duba UDL Guidelines na CAST"] },
            { title: "IEP da 504 plans", bullets: ["Gyare-gyaren da ake buƙata har yanzu suna aiki", "Tallafin AI ba ya taɓa maye gurbinsu"] }
          ],
          tryIt: "Ku ƙara bambanta koyarwa a darasinku: ku nemi AI hanyoyi uku zuwa manufar, ku duba su, sannan ku tabbatar da waɗanne gyare-gyaren IEP ko 504 har yanzu ake buƙatar tsarawa tare da abokin aikinku na ilimi na musamman.",
          youCanNow: "tsara tallafi da ƙalubale ga ɗalibai daban-daban da AI, yayin da kuke mutunta gyare-gyaren da ake buƙata.",
          quickCheck: [
            { objective: "O4", q: "Mene ne tallafin wucin gadi (scaffolding)?", options: ["Ba ɗalibai masu ci gaba ƙarin aiki", "Tallafi kamar misalan da aka warware da farkon jimloli", "Gwada ɗalibai kafin darasi", "Zaunar da ɗalibai a ƙungiyoyi"], answer: 1, why: "Tallafin wucin gadi yana taimaka wa ɗalibai su kai ga manufa ɗaya da taimako." },
            { objective: "O4", q: "AI ya ba da shawarar tallafin da ya bambanta da gyaran IEP na wani ɗalibi. Me za ku yi?", options: ["Ku yi amfani da tallafin AI a maimakon haka", "Ku nemi AI ya yanke hukunci", "Ku bar duka biyun ku koyar kamar yadda kuka saba", "Ku ba da gyaran IEP ku tsara tare da abokin aikinku na ilimi na musamman"], answer: 3, why: "Dole a ci gaba da ba da gyare-gyaren IEP da 504, duk abin da AI ya ba da shawara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Daga darasi zuwa rukunin darussa",
          minutes: 5,
          goal: "Rubuta tsarin rukunin darussa da AI da duba saurin tafiyarsa.",
          text: [
            "Rukunin darussa (unit) jerin darussa ne zuwa manyan manufofi. Ku ba AI ma'aunin koyarwa na rukunin (daga majiyarku ta hukuma), yawan ranakun aji, ranakun hutu ko na jarabawa, da inda ɗalibai suke farawa. Ku nemi tsari na kowace rana tare da manufofi, manyan ayyuka da wuraren dubawa.",
            "Ku fara duba saurin tafiya (pacing): AI yakan cusa abu mai yawa. Ku tabbata kowane darasi yana ginuwa kan na baya, akwai ranakun bita da shirin sake koyarwa, kuma tantancewar ƙarshen rukunin ta dace da manufofin.",
            "Ku yi amfani da AI wajen tattara ra'ayoyi a abin da ya kware: aikin rayuwa ta gaske da zai riƙe rukunin (anchor project), kuskuren fahimta da aka saba yi da za a shirya musu, da tambayoyin da ke sa ɗalibai tunani. Ku ne kuke yanke abin da ya dace."
          ],
          steps: ["Ku ba da ma'aunin koyarwa na rukunin, yawan ranaku da giɓin kalanda.", "Ku nemi tsari na kowace rana tare da manufofi da wuraren dubawa.", "Ku duba saurin tafiya: ku rage, ku ƙara ranakun bita da na sake koyarwa.", "Ku duba cewa tantancewar ƙarshe ta dace da manufofin.", "Ku yi amfani da AI don tattara ra'ayoyi kan kuskuren fahimta da ayyukan da za su riƙe rukunin."],
          words: [["Rukunin darussa (unit)", "jerin darussa da ke aiki zuwa manyan manufofin koyo."], ["Saurin tafiya (pacing)", "yawan abin da ake koyarwa kowace rana da saurin tafiyar aji."], ["Kuskuren fahimta (misconception)", "ra'ayi marar daidai da ɗalibai suka saba da shi game da wani batu."]],
          slides: [
            { title: "Ku ba da bayanin rukunin", bullets: ["Ma'aunin koyarwa daga majiyar hukuma", "Yawan ranaku da giɓin kalanda", "Inda ɗalibai suke farawa"] },
            { title: "Ku duba saurin tafiya", bullets: ["AI yakan cusa abu mai yawa", "Ku ƙara ranakun bita da na sake koyarwa", "Tantancewa ta dace da manufofin"] },
            { title: "Tattara ra'ayoyi da AI", bullets: ["Kuskuren fahimta da aka saba yi", "Ayyukan da za su riƙe rukunin (anchor projects)", "Tambayoyin da ke sa ɗalibai tunani"] }
          ],
          tryIt: "Ku nemi AI tsarin kwana goma na rukunin da darasinku yake ciki. Ku daidaita saurin tafiya, ku ƙara ranar bita ɗaya, sannan ku jera kuskuren fahimta uku da za a shirya musu.",
          youCanNow: "rubuta tsarin rukunin darussa da AI da daidaita saurin tafiyarsa.",
          quickCheck: [
            { objective: "O5", q: "Me ya kamata prompt na tsarin rukunin darussa ya ƙunsa?", options: ["Ma'aunin koyarwa, yawan ranaku da giɓin kalanda", "Sunayen ɗalibai da makinsu", "Sunan rukunin kawai", "Albashin malami"], answer: 0, why: "Ranaku da giɓin kalanda suna bar AI ya ba da shawarar saurin tafiya na gaskiya." },
            { objective: "O5", q: "Tsarin AI ya rufe rukunin a kwana goma ba tare da bita ba. Me za ku yi?", options: ["Ku karɓe shi kamar yadda aka rubuta", "Ku ƙara wasu rukunai uku", "Ku daidaita saurin tafiya ku ƙara ranar bita", "Ku cire tantancewar"], answer: 2, why: "Saurin tafiya shi ne abu na farko da za a duba, kuma lokacin bita yakan ɓace." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Horar da ƙungiyoyi su tsara darasi da AI",
          minutes: 6,
          goal: "Mayar da hanyarku ta tsarawa samfuri da horar da ƙungiya ta yi amfani da shi.",
          text: [
            "Shugabanni suna yaɗa kyakkyawar hanya ta hanyar sa ta zama mai maimaituwa. Ku mayar da abin da kuka koya samfurin tsarawa: prompt na manufa, cikakken darasi, bambanta koyarwa da rukunin darussa, tare da jerin binciken inganci mai matakai biyar.",
            "Ku yi amfani da shi a taron ƙungiya ko na PLC (ƙungiyar koyon sana'a): kowane malami yana tsara darasi ɗaya da samfurin, sannan abokan aiki biyu-biyu suna musayar tsare-tsare kuma suna duba na juna da binciken inganci. Ku tattauna abin da AI ya yi kuskure a kai; wannan yana gina hukunci na tare da sauri fiye da kowane slide na horo.",
            "Ku bayyana abin da ake tsammani: ana maraba da tsare-tsaren da AI ya taimaka da su, kuma malamai ne ke da alhakin abin da suke koyarwa. Ku tabbata ana amfani da kayan aikin da aka amince da su kaɗai, kuma ba a saka bayanan ɗalibai ba. Ku nemi malamai su rubuta lokacin da aka ajiye da matsalolin inganci, don ku san ko hanyar tana aiki."
          ],
          steps: ["Ku rubuta samfurin tsarawa: prompt huɗu da jerin binciken.", "A taron ƙungiya, kowane malami yana tsara darasi ɗaya da shi.", "Abokan aiki biyu-biyu suna musaya kuma suna yin binciken inganci.", "Ku tattauna abin da AI ya yi kuskure a kai.", "Ku bayyana abin da ake tsammani, ku bi diddigin lokacin da aka ajiye da matsalolin inganci."],
          words: [["PLC", "professional learning community (ƙungiyar koyon sana'a): ƙungiyar malamai da ke haɗuwa don inganta koyarwa tare."], ["Samfuri (template)", "tsarin farawa da za a sake amfani da shi."]],
          slides: [
            { title: "Ku sa ta zama mai maimaituwa", bullets: ["Prompt huɗu: manufa, darasi, bambanta koyarwa, rukunin darussa", "Tare da jerin bincike mai matakai biyar"] },
            { title: "Atisayen ƙungiya", bullets: ["Kowane malami yana tsara darasi ɗaya", "Abokan aiki suna musaya kuma suna dubawa", "Ku tattauna abin da AI ya yi kuskure a kai"] },
            { title: "Abin da ake tsammani a sarari", bullets: ["Malamai ne ke da alhakin abin da suke koyarwa", "Kayan aikin da aka amince da su, babu bayanan ɗalibai", "Ku bi diddigin lokacin da aka ajiye da inganci"] }
          ],
          tryIt: "Aikin ƙarshe: ku gama cikakken tsarin darasinku (manufa, ma'aunin nasara, buɗe darasi, atisaye tare da jagora da na kai, ƙungiyoyi uku, tambayoyin fita tare da amsoshi), ku duba shi da jerin bincike mai matakai biyar, ku rubuta canje-canjenku, sannan ku ajiye prompt huɗu da jerin binciken a matsayin samfurin ƙungiya.",
          youCanNow: "tsara darussa da AI a mataki mai kyau, da taimaka wa ƙungiya ta yi haka.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata samfurin tsarawa na ƙungiya ya ƙunsa?", options: ["Darasin ƙarshe kawai", "Prompt da jerin binciken inganci", "Jerin kayan aikin da aka hana", "Kalmar sirrin kayan aikin AI"], answer: 1, why: "Prompt tare da jerin bincike suna bar wasu su maimaita hanyar da binciken." },
            { objective: "O6", q: "Kuna son sanin ko tsarawa da AI yana taimakon ƙungiyarku. Me za ku bi diddigi?", options: ["Yawan prompt da kowane malami ke rubutawa", "Wane kayan aikin AI ne mafi sabo", "Babu komai; ku tambaya sau ɗaya a shekara", "Lokacin da aka ajiye da matsalolin inganci da aka samu"], answer: 3, why: "Lokacin da aka ajiye da matsalolin inganci suna nuna ko hanyar tana aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bambanta koyarwa, rukunin darussa da tsarawa a ƙungiya",
        questions: [
          { objective: "O4", q: "Ta yaya ya kamata ku bayyana ƙungiyoyin ɗalibai a prompt?", options: ["Ta suna", "Ta makin jarabawa da suna", "Ta buƙatu, kamar \"masu buƙatar ƙarin tallafi a matsalolin matakai da yawa\"", "Ta kuɗin shigar iyali"], answer: 2, why: "Ku bayyana buƙatu ba tare da gane ɗalibai ba." },
          { objective: "O4", q: "IEP na wani ɗalibi ya lissafa gyara. AI ya ba da shawarar tallafi daban. Me ke aiki?", options: ["Dole a ci gaba da ba da gyaran IEP", "Tallafin AI ya maye gurbin IEP", "Babu ɗaya", "Ku nemi AI ya yanke hukunci"], answer: 0, why: "Shawarwarin AI ba sa maye gurbin gyare-gyaren da ake buƙata." },
          { objective: "O5", q: "Mene ne abu na farko da za a duba a tsarin rukunin darussa na AI?", options: ["Nau'in rubutu (font)", "Saurin tafiya", "Take", "Launuka"], answer: 1, why: "AI yakan cusa abu mai yawa." },
          { objective: "O6", q: "A PLC, me yasa abokan aiki ke duba tsare-tsaren AI na juna?", options: ["Don gina hukunci na tare game da inda AI ke kuskure", "Don ba malamai maki", "Don tsallake tsarawa", "Don ƙara amfani da AI"], answer: 0, why: "Tattauna kurakurai yana gina hukuncin ƙungiya." },
          { objective: "O6", q: "Wane ne ke da alhakin darasin da AI ya taimaka da shi da aka koyar a aji?", options: ["Kamfanin AI", "Babu kowa", "Ɗalibai", "Malami"], answer: 3, why: "Malamai ne ke da alhakin abin da suke koyarwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Shugabannin Makaranta da Ilimi 3: AI don Tsara Darasi",
    questions: [
      { objective: "O1", q: "Tsara darasi daga ƙarshe yana tsarawa a wane jeri?", options: ["Ayyuka, manufa, shaida", "Manufa, shaida, ayyuka", "Takardar aiki, jarabawa, manufa", "Shaida, ayyuka, manufa"], answer: 1, why: "Ku fara da manufa." },
      { objective: "O1", q: "Ma'aunin nasara suna bayyana:", options: ["Tsarin ɗaki", "Albashin malami", "Abin da ɗalibai za su nuna idan sun cimma manufa", "Jadawalin ƙararrawa"], answer: 2, why: "Suna sa manufa ta bayyana." },
      { objective: "O1", q: "Manufar \"Zan iya...\" (\"I can\") ita ce:", options: ["Makin jarabawa", "Taken talla", "Manufa da kalmomin da ɗalibai za su fahimta", "Doka"], answer: 2, why: "Ya kamata ɗalibai su fahimci manufa." },
      { objective: "O1", q: "Me yasa ba za a ɗauki lambobin ma'aunin koyarwa daga AI ba?", options: ["AI yana iya kuskure ko ƙirƙirar su", "Sirri ne", "AI bai taɓa sanin ma'aunai ba", "Sun yi tsawo sosai"], answer: 0, why: "Ku yi amfani da majiyar hukuma." },
      { objective: "O2", q: "Prompt na cikakken darasi ya kamata ya ƙunsa:", options: ["Maki da sunaye", "Sunayen ɗalibai", "Imel na iyaye", "Tsawon lokacin aji, manufa, abin da aka riga aka sani, kayan aiki, sassa"], answer: 3, why: "Bayanin halin da ake ciki, ba bayanan sirri ba." },
      { objective: "O2", q: "Ya kamata a ɗauki daftarin darasi na AI a matsayin:", options: ["Tsarin ƙarshe", "Daftari daga abokin aiki mai sauri amma sabo", "Takardar shari'a", "Aikin ɗalibi"], answer: 1, why: "Malamai suna dubawa da gyarawa." },
      { objective: "O2", q: "Binciken fahimta shi ne:", options: ["Taro da iyaye", "Cakin banki", "Katin sakamako", "Hanya mai sauri don ganin ko ɗalibai suna bin darasi"], answer: 3, why: "Yana kama ruɗani da wuri." },
      { objective: "O3", q: "Wanne ne ɓangare na bincike mai matakai biyar?", options: ["Mafi tsawo", "Mafi launi", "Adalci da haɗa kowa", "Mafi shahara"], answer: 2, why: "Adalci da samun dama ɓangare ne na inganci." },
      { objective: "O3", q: "Daidaito yana nufin:", options: ["Manufofi, ayyuka da tantancewa sun dace da juna", "Teburori a layi", "Tsarin ya yi tsawo", "AI ya yarda"], answer: 0, why: "Komai yana hidimar manufa." },
      { objective: "O3", q: "Me yasa za ku rubuta abin da kuka canja a tsarin AI?", options: ["Doka ce ta tilasta", "Yana nuna inda tsare-tsaren AI ke kuskure", "Yana tsawaita tsarin", "Don ɗora laifi kan AI"], answer: 1, why: "Yana gina hukunci da lokaci." },
      { objective: "O4", q: "Bambanta koyarwa yana nufin:", options: ["Daidaita koyarwa ta yadda ɗalibai daban-daban za su kai ga manufa ɗaya", "Ba da maki daban-daban", "Raba azuzuwa har abada", "Amfani da kayan AI daban-daban"], answer: 0, why: "Manufa ɗaya, hanyoyi daban-daban." },
      { objective: "O4", q: "Tallafin wucin gadi ya haɗa da:", options: ["Tsarewa bayan makaranta (detention)", "Cire duk wani tallafi", "Jarabawa mafi wuya", "Misalan da aka warware da farkon jimloli"], answer: 3, why: "Tallafi na ɗan lokaci yana taimaka wa ɗalibai su kai ga manufa." },
      { objective: "O4", q: "UDL gajartawar me ce?", options: ["Unit Daily Lesson", "Universal Design for Learning", "Upper Division Level", "Unified District Login"], answer: 1, why: "Tsarawa don ɗalibai iri-iri tun farko." },
      { objective: "O4", q: "Aikin ƙari (extension) na ɗaliban da:", options: ["Ke buƙatar ƙarin tallafi", "Ba sa nan", "Suka shirya ƙarin ƙalubale", "Suka gama shekara"], answer: 2, why: "Yana zurfafa koyo ga ɗaliban da suka shirya." },
      { objective: "O4", q: "Gyare-gyaren IEP da 504:", options: ["Ana saka su a kowane kayan AI", "Tallafin AI zai iya maye gurbinsu", "Dole a ci gaba da ba da su, duk abin da AI ya ba da shawara", "Na zaɓi ne"], answer: 2, why: "Wajibi ne." },
      { objective: "O5", q: "Prompt na tsarin rukunin darussa ya kamata ya ƙunsa:", options: ["Ma'aunin koyarwa, yawan ranaku da giɓin kalanda", "Sunayen ɗalibai", "Albashin ma'aikata", "Babu komai"], answer: 0, why: "Saurin tafiya ya dogara da ainihin lokacin da ake da shi." },
      { objective: "O5", q: "AI yana da amfani musamman a tsara rukunin darussa wajen:", options: ["Amincewa da kayan aiki", "Yanke maki", "Rubuta IEP", "Tattara ra'ayoyi kan kuskuren fahimta da ayyukan da za su riƙe rukunin"], answer: 3, why: "Tattara ra'ayoyi ƙarfinsa ne; ku ne kuke yanke abin da ya dace." },
      { objective: "O6", q: "Samfurin tsarawa ya kamata ya ƙunsa:", options: ["Bayanan ɗalibai", "Prompt da jerin binciken inganci", "Kalmomin sirri", "Babu komai"], answer: 1, why: "Yana sa kyakkyawar hanya ta zama mai maimaituwa." },
      { objective: "O6", q: "PLC gajartawar me ce?", options: ["Principal leadership council", "Public library card", "Planning lesson calendar", "Professional learning community"], answer: 3, why: "Malamai suna inganta koyarwa tare." },
      { objective: "O6", q: "Don sanin ko tsarawa da AI yana aiki, ya kamata shugabanni su bi diddigin:", options: ["Babu komai", "Lokacin da aka ajiye kawai", "Lokacin da aka ajiye da matsalolin inganci", "Yawan prompt da aka rubuta"], answer: 2, why: "Sauri ba tare da inganci ba ba nasara ba ne." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 3, 4, 7, 8, 10, 14, 15, 17]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Manufa da ma'aunin nasara", objective: "O1", notYet: "Babu manufa, ko ma'aunin koyarwa bai fito daga majiyar hukuma ba.", meets: "Manufa da ma'aunin nasara daga ma'aunin koyarwa da aka kwafo daga majiyar hukuma.", exceeds: "An rubuta manufar a matsayin bayanin \"Zan iya...\" a sarari da ɗalibai ke fahimta." },
      { name: "Cikakken darasi", objective: "O2", notYet: "Babu buɗe darasi, atisaye tare da jagora ko na kai, ko tambayoyin fita.", meets: "Yana da buɗe darasi, atisaye tare da jagora da na kai, da tambayoyin fita guda uku tare da amsoshi.", exceeds: "Ya haɗa da binciken fahimta kuma ya dace da tsawon lokacin aji." },
      { name: "Ƙungiyoyi uku", objective: "O4", notYet: "Babu tallafi ga ƙungiya ɗaya ko fiye.", meets: "Tallafi ga masu buƙatar ƙarin tallafi, masu matakin aji da masu shirin ƙari.", exceeds: "Ya lura da waɗanne gyare-gyaren IEP ko 504 har yanzu ake buƙatar tsarawa tare da abokin aiki na ilimi na musamman." },
      { name: "An duba inganci", objective: "O3", notYet: "Ba a duba ba, ko ba a rubuta canje-canje ba.", meets: "An duba da jerin bincike mai matakai biyar, an rubuta kowane canji da dalilinsa.", exceeds: "Rubutun yana nuna tsarin inda tsarin AI ya yi kuskure." },
      { name: "Samfurin ƙungiya", objective: "O6", notYet: "Ba a ajiye prompt ba, ko babu jerin bincike.", meets: "An ajiye prompt da jerin bincike a matsayin samfuri ga ƙungiya.", exceeds: "Wani abokin aiki ya yi amfani da samfurin a darasinsa." }
    ]
  },
  evaluation: {
    results: [
      "Malamai da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da ke amfani da samfurin tsarawa na tare cikin kwanaki 30 (binciken biyo baya)",
      "Malaman da suka ce sun ajiye lokacin tsarawa ba tare da raguwar ingancin darasi ba (binciken biyo baya)",
      "Shugabannin da suka ci gaba zuwa kwas na 4 na AI ga Shugabannin Makaranta da Ilimi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da mataimakin AI, zai fi kyau wanda gundumar ta amince da shi",
      "Ma'aunin koyarwa na darasin da ke tafe, da aka kwafo daga majiyar hukuma ta jiha ko gunduma",
      "Bayanin aji na ƙirƙira",
      "Jerin binciken inganci mai matakai biyar",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku tsara darasi ɗaya a matsayin ƙungiya kafin malamai su tsara nasu.",
      "Ku yi amfani da bayanin aji na ƙirƙira kawai; kada ku taɓa amfani da sunayen ɗalibai na gaske, bayanan IEP ko 504, ko maki.",
      "A PLC, ku sa abokan aiki biyu-biyu su duba tsare-tsaren AI na juna da jerin bincike mai matakai biyar.",
      "Ku gayyaci abokin aiki na ilimi na musamman zuwa zaman bambanta koyarwa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku nemi rubutun canje-canje a matsayin shaida."
    ]
  }
};
