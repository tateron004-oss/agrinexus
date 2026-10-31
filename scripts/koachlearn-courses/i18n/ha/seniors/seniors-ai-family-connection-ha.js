"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-family-connection.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-family-connection-ha",
  lang: "ha",
  translationOf: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "AI don Sadarwa da Kusanci da Iyali",
  skills: "Rubuta saƙonni masu daɗi da taimakon AI, Aika tes ko imel, Shiga kiran bidiyo, Raba hoto, Zama lafiya a saƙonnin iyali",
  outcome: "amfani da mataimakin AI don taimakawa wajen rubuta saƙo mai daɗi ga wani a iyali, aika shi ta tes ko imel, da shirya kiran bidiyo da shiga shi tare da su.",
  about: [
    "Wannan kwas ɗin na kakanni ne, iyaye, ƙanne da 'yan'uwan iyaye, da abokai da ke son su kasance kusa da mutanen da suke so, ko da suna zaune a nesa.",
    "Za ku yi amfani da mataimakin AI don samun kalmomin da suka dace na ranar haihuwa, saƙon fatan samun lafiya ko gaisuwa mai sauƙi. Sannan za ku aika saƙonku, ku raba hoto, ku shiga kiran bidiyo don ku ga fuskokin iyalinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana tafiya mataki ɗaya bayan ɗaya. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Yana da kyau ku yi atisaye tare da wani a iyali da ya riga ya san amfani da waɗannan kayan. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don taimakawa wajen rubuta gajeren saƙo mai daɗi da ke gayyatar wani a iyali zuwa kiran bidiyo. Ku yi canji ɗaya don ya yi kama da ku, ku aika shi ta tes ko imel, sannan ku shiga kiran a lokacin da kuka yarda ku ce sannu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi da ke son su kasance kusa da 'ya'yansu, jikokinsu da sauran 'yan'uwa da ke zaune a nesa ko suke da aiki sosai. Da yawa suna jin an bar su a baya idan iyali suna magana ta tes, bidiyo da hotuna.",
    startingPoint: "Suna iya yin kiran waya, kuma wataƙila suna iya aika tes masu sauƙi. Wasu suna da wayar zamani (smartphone) ko tablet amma ba su taɓa amfani da mataimakin AI ba, ko kwafa da liƙawa, ko shiga kiran bidiyo, ko raba hoto ba.",
    gap: "Rayuwar iyali yanzu tana gudana ta tes, kiran bidiyo da raba hotuna. Tsofaffin da za su iya rubuta saƙo mai daɗi da taimakon AI, su aika shi, su shiga kiran bidiyo su raba hoto, suna ci gaba da kusanci kuma ba sa jin kaɗaici sosai; waɗanda kuma za su iya gane gaggawar iyali ta bogi suna kare ajiyarsu ta kuɗi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: wayar zamani, tablet ko kwamfuta mai kyamara; ƙananan maɓallai suna iya yin wuyar taɓawa",
      "Lokaci: kusan minti 5 kowane darasi a hankali, da kiran atisaye tare da iyali",
      "'Yan iyali suna amfani da manhajoji (apps) daban-daban; masu koyo suna amfani da wadda iyalinsu suka riga suke amfani da ita",
      "Haɗarin zamba yana da yawa: kada ku taɓa aika kuɗi ko code kafin ku kira iyali ta lambar da kuka sani"
    ],
    prerequisites: "Kwas ɗin \"AI for Seniors: Using AI Assistants\" (AI ga Tsofaffi: Amfani da Mataimakan AI) yana da amfani a fara da shi, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da mataimakin AI kyauta", action: "neman daftarin saƙon iyali da ke faɗin wanda za a aika wa, abin da ya shafa, salon magana da tsawonsa", standard: "ta yadda daftarin farko zai dace da mutumin" },
    { id: "O2", condition: "Idan kuna da daftarin AI", action: "canja daftarin don ya yi kama da ku, da ƙara wani bayani na musamman guda ɗaya", standard: "ta yadda zai yi daɗin ji idan kun karanta shi da babbar murya" },
    { id: "O3", condition: "Idan kuna da saƙon da ya kammala a manhajar AI", action: "kwafa shi ku liƙa shi a tes ko imel, sannan ku aika shi", standard: "ga mutumin da ya dace, bayan kun duba kafin ku taɓa Send" },
    { id: "O4", condition: "Idan wani a iyali ya kira ku ta bidiyo ko ya turo hanyar haɗi (link)", action: "shiga kiran da kunna makirufo da kyamara", standard: "ana ganin fuskarku sosai kuma ana jin ku" },
    { id: "O5", condition: "Ta amfani da kyamarar wayarku ko tablet", action: "ɗaukar hoto da raba shi ga wani a iyali tare da gajeren rubutu", standard: "ba tare da taimakon kowa ba" },
    { id: "O6", condition: "Idan saƙo ko kira ya ce wani a iyali yana cikin matsala kuma yana buƙatar kuɗi", action: "gane alamun gargaɗi na zambar gaggawar iyali da tabbatarwa ta hanyar kira ta lambar da kuka riga kuka sani", standard: "ba tare da aika kuɗi ko code kafin ku tabbatar ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun kalmomin da suka dace",
      lessons: [
        {
          objectives: ["O1"],
          title: "Amfani da AI don rubuta saƙon iyali",
          minutes: 5,
          goal: "Ku nemi mataimakin AI ya rubuta daftarin gajeren saƙo ga wani a iyali.",
          text: [
            "Wani lokaci abu mafi wuya wajen ci gaba da tuntuɓar juna shi ne sanin abin da za a faɗa. Mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini zai iya rubuta muku daftarin farko cikin daƙiƙoƙi.",
            "Ku faɗa masa wanda saƙon zai je wa, abin da ya shafa, da yadda kuke son ya yi kama. Misali: \"Ka rubuta gajeren tes mai farin ciki ga jikana Leo, wanda ya gama makonsa na farko a jami'a. Ina alfahari da shi. Kada ya wuce kalmomi 40.\"",
            "Daftarin farawa ne kawai, ba magana ta ƙarshe ba ce. Ku ne kuka san iyalinku; mataimakin bai san su ba."
          ],
          steps: ["Ku buɗe mataimakin AI ɗinku.", "Ku faɗi wanda saƙon zai je wa da abin da ya shafa.", "Ku faɗi yadda ya kamata ya yi kama: mai farin ciki, mai taushi, mai ban dariya ko mai sauƙi.", "Ku faɗi tsawon da ya kamata ya yi."],
          words: [["Daftari (draft)", "rubutun farko na saƙo da za ku iya canjawa kafin ku aika."], ["Salon magana (tone)", "yadda saƙo yake ji, kamar mai daɗi, mai ban dariya ko mai muhimmanci."]],
          slides: [
            { title: "Kun rasa kalmomi?", bullets: ["Mataimakin AI zai iya rubuta daftarin farko", "Yana ɗaukar daƙiƙoƙi kawai"] },
            { title: "Ku faɗa masa abubuwa huɗu", bullets: ["Wanda za a aika wa", "Abin da ya shafa", "Yadda ya kamata ya yi kama", "Tsawon da ya kamata ya yi"] },
            { title: "Ku tuna", bullets: ["Daftarin farawa ne kawai", "Ku ne kuka fi sanin iyalinku"] }
          ],
          tryIt: "Ku yi tunanin wani a iyali da kuke son jin labarinsa. Ku nemi mataimaki ya rubuta musu gajeren saƙo mai daɗi game da wani abu na gaske, kamar ranar haihuwa, sabon aiki ko gaisuwa mai sauƙi.",
          youCanNow: "neman mataimakin AI ya rubuta daftarin gajeren saƙo ga wanda kuke so.",
          quickCheck: [
            { objective: "O1", q: "Mene ne daftarin saƙo na AI?", options: ["Saƙon ƙarshe da AI zai aika a madadinku", "Saƙo daga iyalinku", "Farawa ce da za ku iya canjawa", "Code na sirri"], answer: 2, why: "Daftarin farawa ne; ku ne kuka san iyalinku, mataimakin bai san su ba." },
            { objective: "O1", q: "Kuna son saƙo na ranar haihuwar jikarku. Me za ku faɗa wa mataimakin?", options: ["Wanda za a aika wa, abin da ya shafa, yadda zai yi kama da tsawonsa", "Kalmar \"ranar haihuwa\" kawai", "Adireshin gidanta da lambar wayarta", "Babu komai; zai yi tsammani"], answer: 0, why: "Faɗin wane ne, me ya shafa, salon magana da tsawo yana kawo daftarin da ya dace." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sa saƙon ya yi kama da ku",
          minutes: 4,
          goal: "Ku canja daftarin AI don ya yi kama da muryarku.",
          text: [
            "Daftarin AI yana iya yin kama da mai taurin kai ko mai kalmomin ado da yawa. Iyalinku za su lura idan bai yi kama da ku ba, don haka ku mai da shi naku.",
            "Kuna iya cewa wa mataimakin: \"Ka sa ya yi kama da hira ta yau da kullum.\" \"Ka yi amfani da gajerun kalmomi.\" \"Ka ƙara cewa zan gasa masa irin kek ɗin tuffa (apple pie) da ya fi so idan ya zo.\" Ko kuma ku canja kalmomin da kanku kawai.",
            "Ku ƙara wani bayani ɗaya da ku kaɗai kuka sani: laƙabi, wani abin tunawa, ko barkwancin da ku kaɗai kuka fahimta. Wannan ne yake sa saƙo ya ji na musamman."
          ],
          steps: ["Ku karanta daftarin da babbar murya.", "Ku yi alama a kan duk kalmar da ba za ku taɓa faɗa ba.", "Ku nemi canji, ko ku canja kalmomin da kanku.", "Ku ƙara bayani na musamman ɗaya da ku kaɗai kuka sani."],
          words: [["Bayani na musamman", "wani abu na ku da mutumin kaɗai, kamar abin tunawa ko laƙabi."]],
          slides: [
            { title: "Ku mai da shi naku", bullets: ["Ku karanta daftarin da babbar murya", "Ku canja kalmomin da ba za ku taɓa faɗa ba"] },
            { title: "Ku nemi canje-canje", bullets: ["\"Ka sa ya yi kama da hira ta yau da kullum.\"", "\"Ka yi amfani da gajerun kalmomi.\"", "\"Ka ƙara cewa ina gasa masa kek ɗin da ya fi so.\""] },
            { title: "Ku ƙara taɓawa ta musamman", bullets: ["Laƙabi", "Abin tunawa da kuka yi tare", "Barkwancin da ku kaɗai kuka fahimta"] }
          ],
          tryIt: "Ku ɗauki daftarinku daga Darasi na 1. Ku karanta shi da babbar murya, ku yi canji ɗaya don ya yi kama da ku, sannan ku ƙara bayani na musamman ɗaya.",
          youCanNow: "mayar da daftarin AI zuwa saƙon da ke kama da ku.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku canja daftarin AI kafin ku aika shi?", options: ["AI yana sa kowane saƙo ya yi gajarta sosai", "Don ya yi kama da ku, domin iyalinku za su lura idan bai yi ba", "Domin daftarin AI koyaushe ba shi da ladabi", "Domin tes dole ne ya yi tsawo"], answer: 1, why: "Daftarin AI yana iya yin kama da mai taurin kai; mai da shi naku yana sa ya zama na musamman." },
            { objective: "O2", q: "Daftarinku yana da kyau amma bai da armashi. Me za ku ƙara?", options: ["Doguwar waƙa", "Bayanan bankinku", "Bayanin da ku kaɗai kuka sani, kamar laƙabi ko abin tunawa", "Kalmomin ado da yawa"], answer: 2, why: "Laƙabi, abin tunawa ko barkwanci na ku kaɗai suna sa saƙo ya ji na musamman." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Aika saƙonku ta tes ko imel",
          minutes: 6,
          goal: "Ku kwafi saƙonku ku aika shi ta tes ko imel.",
          text: [
            "Idan saƙonku ya shirya, dole ku kai shi daga mataimakin AI zuwa manhajar tes ko imel ɗinku. Ana yin haka ta hanyar kwafa da liƙawa (copy and paste).",
            "Don kwafa a waya ko tablet: ku danna ku riƙe yatsanku a kan rubutun har sai wani jeri ya bayyana, sannan ku taɓa Copy. Manhajojin AI da yawa kuma suna nuna ƙaramin maɓallin kwafa a ƙasan amsar. A kwamfuta, ku zaɓi rubutun da linzamin kwamfuta (mouse), sannan ku danna maɓallin dama ku zaɓi Copy.",
            "Sannan ku buɗe manhajar Messages ko imel ɗinku, ku fara sabon saƙo ga wanda kuke son aika wa, ku danna ku riƙe a cikin akwatin saƙo ku taɓa Paste (a kwamfuta, ku danna maɓallin dama ku zaɓi Paste). Ku karanta shi sau ɗaya na ƙarshe, sannan ku aika."
          ],
          steps: ["Ku kwafi saƙon: ku danna ku riƙe, sannan ku taɓa Copy, ko ku yi amfani da maɓallin kwafa.", "Ku buɗe manhajar Messages ko imel ɗinku.", "Ku fara sabon saƙo ga wanda kuke son aika wa a iyali.", "Ku danna ku riƙe a cikin akwatin saƙo ku taɓa Paste.", "Ku sake karanta shi sau ɗaya, sannan ku taɓa Send."],
          words: [["Kwafa da liƙawa (copy and paste)", "ɗaukar rubutu daga wani wuri a saka shi a wani wuri, ba tare da sake rubutawa ba."], ["Saƙon tes (text message)", "gajeren saƙon rubutu da ake aikawa daga waya zuwa waya."]],
          slides: [
            { title: "Ku kwafi saƙon", bullets: ["Ku danna ku riƙe rubutun, sannan ku taɓa Copy", "Ko ku taɓa maɓallin kwafa a ƙasan amsar", "Kwamfuta: maɓallin dama, sannan Copy"] },
            { title: "Ku liƙa shi", bullets: ["Ku buɗe Messages ko imel", "Ku fara sabon saƙo", "Ku danna ku riƙe, sannan ku taɓa Paste"] },
            { title: "Kafin ku aika", bullets: ["Ku duba sunan mutumin", "Ku sake karanta shi sau ɗaya", "Ku taɓa Send"] }
          ],
          tryIt: "Ku kwafi saƙonku da ya kammala daga Darasi na 2 ku aika shi ga wani a iyalinku ta tes ko imel.",
          youCanNow: "kwafa saƙo daga mataimakin AI da aika shi ta tes ko imel.",
          quickCheck: [
            { objective: "O3", q: "Me Paste (liƙawa) ke yi?", options: ["Yana saka rubutun da kuka kwafa a sabon wuri", "Yana goge saƙonku", "Yana aika saƙon nan take", "Yana ɗaukar hoto"], answer: 0, why: "Kuna kwafa rubutu a wata manhaja ku liƙa shi a akwatin saƙo na wata." },
            { objective: "O3", q: "Kun kwafi saƙonku daga manhajar AI. Me za ku yi a gaba?", options: ["Ku rufe wayarku", "Ku sake kwafa shi", "Ku kira wanda za ku aika wa", "Ku buɗe Messages ko imel, ku fara saƙo gare su ku liƙa shi"], answer: 3, why: "Ku buɗe manhajar Messages ko imel, ku fara sabon saƙo ku liƙa rubutun a ciki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun kalmomin da suka dace",
        questions: [
          { objective: "O1", q: "Me ya kamata ku faɗa wa mataimakin AI idan kuna neman saƙon iyali?", options: ["Lambar bankinku", "Kalma ɗaya kawai", "Wanda za a aika wa, abin da ya shafa, salon magana da tsawo", "Kalmar sirrinku (password)"], answer: 2, why: "Waɗannan abubuwa huɗu suna taimaka wa mataimakin ya rubuta daftari mai amfani." },
          { objective: "O2", q: "Daftarin yana da kalmomin ado da yawa. Me za ku yi?", options: ["Ku nemi ya yi kama da hira ta yau da kullum, ko ku canja kalmomin da kanku", "Ku goge manhajar", "Ku aika shi duk da haka", "Ku haƙura"], answer: 0, why: "Kuna iya neman canje-canje ko ku gyara shi don ya yi kama da ku." },
          { objective: "O2", q: "Me ke sa saƙo ya ji na musamman?", options: ["Kwafo kati daga shago", "Dogayen kalmomi sosai", "Alamun mamaki da yawa", "Bayanin da ku kaɗai kuka sani, kamar abin tunawa"], answer: 3, why: "Abin tunawa da kuka yi tare ko laƙabi yana mai da shi naku." },
          { objective: "O3", q: "A waya, yaya ake yawan kwafa rubutu?", options: ["Girgiza wayar", "Danna ku riƙe rubutun, sannan ku taɓa Copy", "Kashe wayar", "Ɗaukar hotonsa"], answer: 1, why: "Dannawa da riƙewa yana buɗe jeri mai Copy." },
          { objective: "O3", q: "Me ya kamata ku duba kafin ku taɓa Send?", options: ["Cajin batir kawai", "Cewa yana zuwa ga mutumin da ya dace", "Babu komai", "Yanayin gari"], answer: 1, why: "Duba sunan yana hana saƙonku zuwa ga wanda bai dace ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Gani da rabawa tare da iyali",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shiga kiran bidiyo",
          minutes: 6,
          goal: "Ku shiga kiran bidiyo tare da wani a iyali ku yi amfani da kyamara da makirufo.",
          text: [
            "Kiran bidiyo yana ba ku damar gani da jin wani a lokaci ɗaya, daga ko'ina. Sanannun manhajoji kyauta sun haɗa da FaceTime (a iPhone da iPad), WhatsApp, Google Meet da Zoom. Iyalai sau da yawa suna zaɓar wadda yawancinsu suka riga suke amfani da ita.",
            "Hanya mafi sauƙi ta farawa ita ce ku bar wani a iyali ya kira ku. Idan kiran ya zo, ku taɓa maɓalli mai kore ko Accept. Idan suka turo muku hanyar haɗi (link), ku taɓa hanyar haɗin a lokacin da kuka yarda, sannan ku taɓa Join.",
            "Da zarar kun shiga kiran, ku nemo maɓallan makirufo da kyamara. Idan maɓalli yana da layi a kansa, a kashe yake; ku taɓa shi don ku kunna. Ku riƙe na'urar daidai da idanunku, haske yana gabanku, ba a bayanku ba, don su ga fuskarku."
          ],
          steps: ["Ku yarda kan lokaci da manhaja tare da wanda za ku kira a iyali.", "Idan kiran ya zo, ku taɓa Accept, ko ku taɓa hanyar haɗin da suka turo ku taɓa Join.", "Ku duba cewa makirufo da kyamara suna kunne.", "Ku riƙe na'urar daidai da idanunku, haske yana gabanku.", "Ku taɓa maɓalli mai ja don ku gama kiran."],
          words: [["Kiran bidiyo", "kiran da kuke ganin juna kuma kuna jin juna a kan allo."], ["Hanyar haɗi (link)", "rubutu mai shuɗi ko mai layi a ƙasa da kuke taɓawa don zuwa wani wuri, kamar kira."], ["Mute (kashe murya)", "kashe makirufonku don wasu ba za su ji ku ba."]],
          slides: [
            { title: "Manhajojin kiran bidiyo kyauta", bullets: ["FaceTime a iPhone da iPad", "WhatsApp, Google Meet, Zoom", "Ku yi amfani da wadda iyalinku ke amfani da ita"] },
            { title: "Shiga kira", bullets: ["Ku taɓa Accept idan sun kira", "Ko ku taɓa hanyar haɗinsu, sannan Join", "Ku shiga a lokacin da kuka yarda"] },
            { title: "A cikin kiran", bullets: ["Layi a kan maɓalli yana nufin a kashe yake", "Ku kunna makirufo da kyamara", "Maɓalli mai ja yana gama kiran"] },
            { title: "Ku bayyana da kyau", bullets: ["Na'ura daidai da idanunku", "Haske a gabanku, ba a bayanku ba"] }
          ],
          tryIt: "Ku nemi wani a iyali ya kira ku a manhajar da yake amfani da ita. Ku amsa, ku duba cewa kyamara da makirufo suna kunne, ku ce sannu, sannan ku gama kiran da maɓalli mai ja.",
          youCanNow: "shiga kiran bidiyo, kunnawa da kashe kyamara da makirufo, da gama kiran.",
          quickCheck: [
            { objective: "O4", q: "Mene ne kiran bidiyo?", options: ["Fim da aka ɗauka", "Kiran da kuke ganin juna kuma kuna jin juna a lokaci ɗaya", "Saƙon murya", "Kundin hotuna"], answer: 1, why: "Kiran bidiyo yana ba ku damar gani da jin wani a lokaci ɗaya, daga ko'ina." },
            { objective: "O4", q: "A kiran bidiyo, iyalinku sun ce ba sa ganin fuskarku sosai. Me za ku canja?", options: ["Ku ƙara ƙarar sauti", "Ku gama kiran", "Ku zauna taga mai haske a bayanku", "Ku riƙe na'urar daidai da idanunku, haske yana gabanku"], answer: 3, why: "Daidai da idanu da haske a gabanku suna sa su ga fuskarku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Raba hoto da iyali",
          minutes: 5,
          goal: "Ku ɗauki hoto ku aika shi ga wani a iyali.",
          text: [
            "Raba hotuna yana ɗaya daga cikin hanyoyi mafi kyau na kasancewa kusa. Kuna iya aika hoton lambunku, abincin da kuka dafa ko wani shafi daga tsohon kundin hotuna.",
            "Ku buɗe manhajar Camera (kyamara), ku nuna abin da kuke so, ku taɓa babban maɓalli mai zagaye. Don aika shi, ku buɗe manhajar Photos ko Gallery, ku taɓa hoton, sannan ku taɓa maɓallin Share (sau da yawa murabba'i ne mai kibiya, ko ɗigo uku da layuka suka haɗa). Ku zaɓi Messages, imel ko WhatsApp, sannan ku zaɓi wanda za ku aika wa a iyali.",
            "Mataimakin AI zai iya taimaka muku rubuta gajeren rubutun hoto, kamar: \"Ka rubuta gajeren rubutu mai ban dariya don hoton tumatirina na farko da ya nuna a wannan bazara.\""
          ],
          steps: ["Ku buɗe manhajar Camera ku taɓa maɓalli mai zagaye.", "Ku buɗe Photos ko Gallery ku taɓa hoton.", "Ku taɓa maɓallin Share.", "Ku zaɓi Messages, imel ko WhatsApp, sannan wanda za ku aika wa a iyali.", "Ku ƙara 'yan kalmomi ku aika."],
          words: [["Maɓallin Share (rabawa)", "maɓallin da ke aika hoto ko shafi ga wani."], ["Rubutun hoto (caption)", "gajeren layin kalmomi da ke tare da hoto."]],
          slides: [
            { title: "Ku ɗauki hoton", bullets: ["Ku buɗe manhajar Camera", "Ku taɓa babban maɓalli mai zagaye"] },
            { title: "Ku aika hoton", bullets: ["Ku buɗe Photos ko Gallery", "Ku taɓa hoton, sannan maɓallin Share", "Ku zaɓi manhaja, sannan wanda za ku aika wa"] },
            { title: "Ku ƙara rubutun hoto", bullets: ["Ku rubuta 'yan kalmomi da kanku", "Ko ku nemi AI ya ba ku gajeren rubutu mai ban dariya"] }
          ],
          tryIt: "Ku ɗauki hoton wani abu da kuke alfahari da shi. Ku nemi mataimakin AI ya ba ku gajeren rubutun hoto, sannan ku aika hoton tare da rubutun ga wani a iyali.",
          youCanNow: "ɗaukar hoto, ƙara masa rubutu, da raba shi da iyali.",
          quickCheck: [
            { objective: "O5", q: "Me maɓallin Share ke yi a manhajar Photos?", options: ["Yana goge hoton", "Yana ƙara girman hoton", "Yana ba ku damar aika hoton ta Messages, imel ko WhatsApp", "Yana ɗaukar sabon hoto"], answer: 2, why: "Ku taɓa hoton, ku taɓa Share, sannan ku zaɓi yadda za ku aika da wanda za ku aika wa." },
            { objective: "O5", q: "Kuna son 'yan kalmomi masu ban dariya tare da hoton lambunku. Me za ku iya yi?", options: ["Ku nemi mataimakin AI ya rubuta gajeren rubutun hoto", "Ku aika hoton ba tare da kalmomi ba har abada", "Ku saka shi ga baƙi", "Ku ƙara ɗaukar hotuna goma"], answer: 0, why: "Mataimakin AI zai iya taimaka muku rubuta gajeren rubutu don hoto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Zama lafiya a saƙonnin iyali",
          minutes: 5,
          goal: "Ku gane saƙon \"gaggawar iyali\" na bogi ku tabbatar da shi lafiya.",
          text: [
            "'Yan damfara wani lokaci suna yin kamar su jika ne ko wani ɗan'uwa da ke cikin matsala. Suna iya tura tes daga sabuwar lamba (\"Sannu Kaka, wayata ta ɓace\") ko ma su yi amfani da AI don kwaikwayon murya a waya. Yawanci suna neman kuɗi da sauri, sau da yawa ta katin kyauta (gift card), tura kuɗi ta banki (wire transfer) ko manhajar biya, kuma suna neman ku ɓoye maganar.",
            "'Yan iyali na gaske za su iya jira 'yan mintuna yayin da kuke tabbatarwa. Ku katse wayar ko ku daina amsawa, sannan ku kira wanda ke iyalinku, ko mahaifinsa ko mahaifiyarsa, ta lambar da kuka riga kuka ajiye.",
            "Wasu iyalai suna yarda kan kalmar sirri ta iyali da su kaɗai suka sani, don amfani da ita a lokacin gaggawa. Kada ku taɓa aika kuɗi har sai kun yi magana da mutumin ta lambar da kuka amince da ita. Kuna iya kai rahoton zamba ga Federal Trade Commission (FTC, hukumar kare masu saye ta Amurka) a ReportFraud.ftc.gov."
          ],
          steps: ["Ku lura da alamun: sabuwar lamba, gaggawa, neman kuɗi, neman ɓoye maganar.", "Ku daina amsawa ko ku katse wayar.", "Ku kira wanda ke iyalinku ta lambar da kuka riga kuka sani.", "Ku yarda kan kalmar sirri ta iyali don lokacin gaggawa.", "Ku kai rahoton zamba a ReportFraud.ftc.gov."],
          words: [["Zambar kakanni (grandparent scam)", "dabarar da wani ke yin kamar shi jika ne da ke cikin matsala don ya sami kuɗi."], ["Kalmar sirri ta iyali (code word)", "kalmar sirri da iyalinku suka yarda a kai don tabbatar da wanda ke kira da gaske."]],
          slides: [
            { title: "Gaggawa ta bogi", bullets: ["\"Sannu Kaka, wayata ta ɓace\"", "Muryar da aka kwaikwaya a waya", "Suna neman kuɗi da sauri kuma a ɓoye"] },
            { title: "Abin da za ku yi", bullets: ["Ku daina amsawa ko ku katse wayar", "Ku kira su ta lambar da kuka riga kuka sani", "Kada ku taɓa aika kuɗi har sai kun tabbata"] },
            { title: "Ku shirya", bullets: ["Ku yarda kan kalmar sirri ta iyali", "Ku kai rahoton zamba a ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Yadda ake guje wa zamba (How to avoid a scam)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Kai rahoton zamba (Report fraud)", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Aikin ƙarshe: ku nemi mataimakin AI ya taimaka wajen rubuta gajeren saƙo mai daɗi da ke gayyatar wani a iyali zuwa kiran bidiyo. Ku sa ya yi kama da ku, ku aika shi ta tes ko imel, sannan ku shiga kiran a lokacin da kuka yarda. Yayin da kuke magana, ku yarda kan kalmar sirri ta iyali.",
          youCanNow: "ci gaba da tuntuɓar iyali ta saƙo, hoto da kiran bidiyo, da tabbatar da saƙon \"iyali\" mai shakku lafiya.",
          quickCheck: [
            { objective: "O6", q: "Mece ce kalmar sirri ta iyali?", options: ["Kalmar sirrin wayarku", "Kalmar da iyalinku kaɗai suka sani, don tabbatar da wanda ke kira a lokacin gaggawa", "Sunan manhajar bidiyonku", "Kalmar da kuke sakawa a intanet"], answer: 1, why: "Wasu iyalai suna yarda kan kalmar sirri don tabbatar da wanda ke kira da gaske." },
            { objective: "O6", q: "Muryar da ke kama da ta jikanku tana neman ku aika kuɗi da sauri ku ɓoye maganar. Me za ku fara yi?", options: ["Ku aika kuɗin sannan ku tambaya daga baya", "Ku ɓoye maganar kamar yadda aka nema", "Ku tsaya ku kira jikanku ko mahaifinsa ko mahaifiyarsa ta lambar da kuka riga kuka sani", "Ku ba su code ɗin da ke wayarku"], answer: 2, why: "Gaggawa, ɓoye magana da neman kuɗi alamun zamba ne; ku sake kira ta lambar da kuka amince da ita." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gani da rabawa tare da iyali",
        questions: [
          { objective: "O4", q: "Wani a iyali ya turo muku hanyar haɗi don kiran bidiyo. Me za ku yi a lokacin da kuka yarda?", options: ["Ku goge shi", "Ku kashe wayarku", "Ku tura shi ga baƙi", "Ku taɓa hanyar haɗin, sannan ku taɓa Join"], answer: 3, why: "Taɓa hanyar haɗin da Join yana shigar da ku cikin kiran." },
          { objective: "O4", q: "Maɓallin makirufo yana da layi a kansa. Me hakan ke nufi?", options: ["Makirufonku a kashe yake", "Kiran ya ƙare", "Batir ya yi ƙasa", "Kyamararku ta lalace"], answer: 0, why: "Layi a kan maɓalli yana nufin a kashe yake." },
          { objective: "O4", q: "A ina ya kamata haske ya kasance a lokacin kiran bidiyo?", options: ["A bayanku", "Kada a sami haske", "A gabanku", "A ƙarƙashin tebur"], answer: 2, why: "Haske a gabanku yana sa iyalinku su ga fuskarku." },
          { objective: "O5", q: "Yaya ake aika hoto daga manhajar Photos?", options: ["Juya wayar ta koma ƙasa", "Ɗaukar hoton allo na batir", "Goge hoton", "Taɓa hoton, sannan maɓallin Share, sannan zaɓar mutum"], answer: 3, why: "Maɓallin Share yana aika hoton ta manhajar da kuma ga mutumin da kuka zaɓa." },
          { objective: "O6", q: "Tes daga sabuwar lamba ya ce \"Kaka, ina cikin matsala, aiko da katin kyauta kuma kada ka faɗa wa Mama.\" Me za ku yi?", options: ["Ku sayi katin kyautar", "Ku amsa da lambar bankinku", "Ku kira jikanku ko mahaifinsa ko mahaifiyarsa ta lambar da kuka riga kuka sani", "Ku ɓoye maganar"], answer: 2, why: "Gaggawa, ɓoye magana da katin kyauta alamun zamba ne; ku tabbatar ta lambar da kuka amince da ita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Sadarwa da Kusanci da Iyali",
    questions: [
      { objective: "O1", q: "Ta yaya mataimakin AI zai iya taimaka muku ci gaba da tuntuɓar iyali?", options: ["Zai iya ziyartar su a madadinku", "Zai iya rubuta daftarin farko na saƙo", "Ya san lambobin wayarsu", "Yana aika kuɗi a madadinku"], answer: 1, why: "Rubuta daftarin saƙonni yana ɗaya daga cikin ƙarfin mataimakan AI." },
      { objective: "O1", q: "Wane prompt (umarni) ne zai kawo saƙon iyali mafi kyau?", options: ["\"Ka rubuta gajeren tes mai farin ciki ga jikata Ava, wadda ta ci wasan ƙwallon ƙafarta. Kada ya wuce kalmomi 40.\"", "\"saƙo\"", "\"tes\"", "\"sannu\""], answer: 0, why: "Yana faɗin wane ne, me ya shafa, salon magana da tsawo." },
      { objective: "O1", q: "Mene ne daftari?", options: ["Rubutun farko da za ku iya canjawa", "Iska mai sanyi", "Kwafin ƙarshe", "Wani nau'in manhaja"], answer: 0, why: "Daftari farawa ne da za ku iya ingantawa." },
      { objective: "O1", q: "Mene ne ma'anar \"salon magana\" (tone) a saƙo?", options: ["Sautin kiran waya (ringtone)", "Yadda saƙon yake ji, kamar mai daɗi ko mai ban dariya", "Girman rubutu", "Lambar waya"], answer: 1, why: "Salon magana shi ne yadda saƙon yake ji ga mai karatu." },
      { objective: "O2", q: "Hanya mai kyau ta duba ko daftari yana kama da ku ita ce:", options: ["Aika shi ba tare da karantawa ba", "Ƙara masa tsawo", "Karanta shi da babbar murya", "Ƙara manyan kalmomi"], answer: 2, why: "Karantawa da babbar murya yana nuna kalmomin da ba za ku taɓa faɗa ba." },
      { objective: "O2", q: "Me ke sa saƙo ya ji na musamman?", options: ["Kalmomin ado", "Rubutu da manyan baƙaƙe duka", "Kwafo shi daga kati", "Abin tunawa da kuka yi tare ko laƙabi"], answer: 3, why: "Bayanan da ku kaɗai kuka sani suna mai da shi naku." },
      { objective: "O3", q: "Don kwafa rubutu a waya yawanci kuna:", options: ["Taɓa kyamara", "Girgiza wayar", "Danna ku riƙe, sannan ku taɓa Copy", "Ƙara ƙarar sauti"], answer: 2, why: "Dannawa da riƙewa yana buɗe jerin Copy." },
      { objective: "O3", q: "Bayan kun kwafa, ta yaya za ku saka saƙon a cikin tes?", options: ["Danna ku riƙe a cikin akwatin saƙo ku taɓa Paste", "Sake rubuta kowace kalma", "Ɗaukar hoto", "Kiran mutumin"], answer: 0, why: "Paste yana saka rubutun da aka kwafa a akwatin saƙo." },
      { objective: "O3", q: "Me ya kamata ku duba kafin ku taɓa Send?", options: ["Babu komai", "Yanayin gari", "Kalmar sirrinku", "Sunan mutumin"], answer: 3, why: "Duba sunan yana hana aikawa ga wanda bai dace ba." },
      { objective: "O4", q: "Wanne a cikin waɗannan manhajar kiran bidiyo ce?", options: ["Na'urar lissafi (calculator)", "FaceTime", "Agogo", "Fitila"], answer: 1, why: "FaceTime, WhatsApp, Google Meet da Zoom suna ba da kiran bidiyo." },
      { objective: "O4", q: "Idan wani a iyali ya kira ku ta bidiyo, kuna taɓa:", options: ["Maɓalli mai ja", "Maɓalli mai kore ko Accept", "Wurin ajiyar hotuna", "Settings (saituna)"], answer: 1, why: "Kore ko Accept yana amsa kiran; ja yana gama shi." },
      { objective: "O4", q: "Maɓalli mai layi a kansa:", options: ["A kunne yake", "Yana ɗaukar rikodi", "Ya lalace", "A kashe yake"], answer: 3, why: "Layi a kansa yana nufin a kashe yake." },
      { objective: "O4", q: "Don gama kiran bidiyo yawanci kuna taɓa:", options: ["Maɓalli mai ja", "Maɓalli mai kore", "Maɓallin ƙarar sauti", "Makirufo"], answer: 0, why: "Maɓalli mai ja yana gama kiran." },
      { objective: "O4", q: "A ina ya kamata ku riƙe na'urar a kiran bidiyo?", options: ["Kusa da ƙasa", "A bayan kanku", "Daidai da idanunku", "A aljihunku"], answer: 2, why: "Daidai da idanu yana sa iyalinku su ga fuskarku." },
      { objective: "O5", q: "Ana amfani da maɓallin Share don:", options: ["Goge hoto", "Kashe waya", "Ɗaukar hoto", "Aika hoto ga wani"], answer: 3, why: "Share yana aika hoton ta manhajar da kuka zaɓa." },
      { objective: "O5", q: "Rubutun hoto (caption) shi ne:", options: ["Lambar waya", "Wani nau'in kyamara", "Gajeren layin kalmomi tare da hoto", "Kalmar sirri"], answer: 2, why: "Rubutun hoto yana bayanin hoton." },
      { objective: "O6", q: "Saƙo daga sabuwar lamba ya ce jikanku ne kuma yana buƙatar kuɗi da sauri. Abu na farko da za ku yi shi ne:", options: ["Aika kuɗi", "Ku tsaya ku kira jikanku ta lambar da kuka riga kuka sani", "Raba bayanan bankinku", "Ɓoye maganar"], answer: 1, why: "Tabbatarwa ta lambar da kuka sani tana dakatar da wannan zambar." },
      { objective: "O6", q: "'Yan damfara za su iya amfani da AI don:", options: ["Kwaikwayon muryar wani a iyali", "Gyara wayarku", "Aiko muku wasiƙa daga banki", "Ziyartar gidanku"], answer: 0, why: "Ana amfani da kwaikwayon murya ta AI a zambar gaggawar iyali." },
      { objective: "O6", q: "Me kalmar sirri ta iyali za ta iya taimakawa da shi?", options: ["Tabbatar da wanda ke kira da gaske a lokacin gaggawa", "Buɗe wayarku", "Sa kiran bidiyo ya fi haske", "Biyan kuɗaɗe"], answer: 0, why: "Iyalinku na gaske ne kaɗai suka san kalmar sirrin." },
      { objective: "O6", q: "A ina za ku iya kai rahoton zamba a Amurka?", options: ["Tallar da ke tasowa (pop-up)", "ReportFraud.ftc.gov", "Lambar mai kiran", "Sharhi a kafofin sada zumunta"], answer: 1, why: "Federal Trade Commission (FTC) tana karɓar rahotannin zamba a ReportFraud.ftc.gov." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 4, 6, 9, 11, 14, 16, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Buƙata a sarari ga AI", objective: "O1", notYet: "Prompt ɗin yana cewa \"rubuta saƙo\" kawai.", meets: "Prompt ɗin yana faɗin wanda za a aika wa, cewa gayyatar kiran bidiyo ce, salon magana da tsawo.", exceeds: "Daftarin farko kusan bai buƙaci canji ba." },
      { name: "Yana kama da ku", objective: "O2", notYet: "An aika daftarin AI kamar yadda yake.", meets: "An yi aƙalla canji ɗaya don ya yi kama da ku.", exceeds: "An ƙara bayani na musamman da ku kaɗai kuka sani, kamar laƙabi ko abin tunawa." },
      { name: "An aika ga mutumin da ya dace", objective: "O3", notYet: "Ba a aika saƙon ba, ko ya tafi ga wanda bai dace ba.", meets: "An kwafa, an liƙa kuma an aika saƙon ta tes ko imel ga mutumin da ya dace.", exceeds: "An sake duba sunan da kalmomin kafin aikawa." },
      { name: "An shiga kiran", objective: "O4", notYet: "Ba a iya shiga ba, ko makirufo ko kyamara sun kasance a kashe.", meets: "An shiga a lokacin da aka yarda, makirufo da kyamara a kunne, kuma an ce sannu.", exceeds: "An riƙe na'urar daidai da idanu da haske mai kyau, kuma an gama kiran da maɓalli mai ja." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi kiran bidiyo ko sun raba hoto da iyali cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da iyalinsu suka yarda kan kalmar sirri ta iyali, kuma suka ce sun tabbatar da saƙon iyali mai shakku",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Tsofaffi da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani, tablet ko kwamfuta mai kyamara da intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini) da manhajar kiran bidiyo ta iyali",
      "Wani a iyali ko mai taimako da ya yarda ya shiga kiran bidiyo na atisaye",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin kwas ɗin, ku tambayi masu koyo wace manhajar bidiyo iyalinsu suka riga suke amfani da ita, ku yi atisaye da wannan.",
      "Ku shirya kiran bidiyo na atisaye tsakanin masu koyo a cikin ɗakin kafin su kira iyali.",
      "Ku nuna matakan kwafa da liƙawa a na'urar kowane mai koyo; jerin zaɓuɓɓuka sun bambanta a wayoyi daban-daban.",
      "Ku tattauna zambar gaggawar iyali ta hanyar wasan kwaikwayo, kuma ku ƙarfafa masu koyo su yarda kan kalmar sirri ta iyali.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
