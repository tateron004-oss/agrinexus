"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-ai-continuing-education.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-ai-continuing-education-ha",
  lang: "ha",
  translationOf: "reentry-ai-continuing-education",
  category: "Re-Entry",
  name: "AI da Ci gaba da Karatu",
  skills: "Saita burin koyo da ke kaiwa ga aiki, Nemo shirye-shiryen koyo kyauta ko masu araha, Amfani da AI a matsayin malamin karatu, Yin tsarin karatu, Duba shiri kafin ku yi rajista, Shirin neman tallafin karatu",
  outcome: "zaɓar burin koyo da ke kaiwa ga aiki, nemo shiri na gaske (ajin daidai da sakandare, takardar shaidar ƙwarewa ko kwas na kwaleji) ku duba shi kafin ku yi rajista, da amfani da mataimakin AI a matsayin malami tare da tsarin karatu na mako-mako.",
  about: [
    "Mutane da yawa suna dawowa gida a shirye su koya: kammala jarabawar daidai da sakandare, samun takardar shaidar sana'a, fara kwalejin al'umma (community college), ko koyon amfani da kwamfuta. Ilimi yana iya buɗe ƙofofin ayyuka mafi kyau.",
    "Za ku saita burin da ke kaiwa ga aiki, ku nemo shirye-shirye kyauta ko masu araha, ku duba shiri kafin ku yi rajista, ku shirya neman tallafin karatu, kuma ku yi amfani da mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini a matsayin malamin karatu mai haƙuri.",
    "Kowane darasi yana ɗaukar kusan minti biyar. AI mai taimakon karatu ne, ba hanyar yi muku aikin makaranta ba; makarantu suna da dokoki a kan haka. Kada ku taɓa rubuta lambobin sirri ko bayanan shari'arku a AI. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi burin koyo ɗaya da ke da alaƙa da aiki. Ku nemo shiri ɗaya na gaske don shi, ku duba shi da tambayoyi biyar (kuɗi, tsawon lokaci, jadawali, abin da za ku samu a ƙarshe, da yadda yake taimaka muku samun aiki). Sannan ku nemi mataimakin AI tsarin karatu na mako huɗu, ku yi amfani da shi ya koya muku ya kuma gwada ku a kan darasin farko, sannan ku saka zaman karatunku na farko guda biyu a kalandarku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari (re-entry) waɗanda suke son ci gaba da koyo: kammala jarabawar daidai da sakandare, samun takardar shaidar sana'a, fara kwalejin al'umma, ko koyon amfani da kwamfuta don samun aiki mafi kyau.",
    startingPoint: "Suna iya amfani da waya mai sauƙi da wasu manhajoji (apps). Da yawa sun yi shekaru ba sa zuwa makaranta, ba su san yadda ake duba shiri ko neman tallafi ba, kuma ba su da ƙwarewa sosai wajen amfani da AI a matsayin mai taimakon karatu.",
    gap: "Ilimi yana iya buɗe ƙofofin ayyuka mafi kyau, amma masu dawowa gida suna iya ɓata lokaci da kuɗi a kan shirye-shiryen da ba sa kaiwa ga aiki, ko a kan zamba mai manyan bashi. Masu koyo suna buƙatar saita burin da ke da alaƙa da aiki, nemo da duba shirye-shirye na gaske, yin karatu da AI cikin gaskiya, da shirya neman tallafin karatu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani ko kwamfutar ɗakin karatu mai intanet",
      "Lokaci: darussa na kusan minti 5 da suka dace da aiki da ganawa",
      "Dokokin makaranta: AI mai taimakon karatu ne, ba hanyar yin aikin makaranta ba",
      "Sirri: kada a taɓa rubuta lambobin sirri, bayanan haraji ko bayanan shari'a a AI; fom ɗin tallafi a studentaid.gov kaɗai"
    ],
    prerequisites: "Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) yana da amfani amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da aikin da kuke so", action: "rubuta burin koyo da ke da alaƙa da wannan aikin", standard: "a jimla ɗaya, tare da duba duk wata dokar lasisi a hukumar lasisi ta jiha" },
    { id: "O2", condition: "Ta amfani da careeronestop.org, ɗakunan karatu, makarantun manya ko kwalejojin al'umma", action: "nemo aƙalla shirye-shirye biyu na gaske da suka dace da burinku", standard: "tare da lambobin waya da aka ɗauko daga shafukansu na hukuma" },
    { id: "O3", condition: "Idan kuna da shiri ɗaya", action: "duba shi da tambayoyi biyar a kan kuɗi, tsawon lokaci, jadawali, abin da za ku samu da yadda yake taimaka muku samun aiki", standard: "da amsoshi daga shirin da kansa, kuma duk wani matsi na sa hannu a babban bashi alamar gargaɗi ce" },
    { id: "O4", condition: "Idan kuna da wani darasi daga burinku", action: "neman mataimakin AI ya bayyana shi, ya ba da misali, ya kuma gwada ku", standard: "ba tare da AI ya yi muku aikin makaranta ba, kuma kuna duba kurakurai da malaminku ko littafinku" },
    { id: "O5", condition: "Idan kun san lokutan aikinku da ganawarku", action: "yin tsarin karatu na mako huɗu da taimakon AI", standard: "da gajerun zama na yau da kullum, kuma na farko guda biyu suna cikin kalandarku" },
    { id: "O6", condition: "Ta amfani da studentaid.gov", action: "rubuta inda ake neman tallafin karatu na gwamnatin tarayya da abin da za a shirya", standard: "tare da tambayoyi uku ga ofishin tallafin karatu, kuma ana rubuta bayanan sirri a studentaid.gov kaɗai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar hanyarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Saita burin koyo da ke kaiwa ga aiki",
          minutes: 5,
          goal: "Zaɓi burin koyo da ke da alaƙa da aiki na gaske.",
          text: [
            "Koyo yana fi amfani idan yana kaiwa wani wuri. Ku fara da aikin da kuke so, sannan ku koma baya zuwa abin da kuke buƙatar koya.",
            "Ku tambayi AI: \"Ina son yin aiki a matsayin direban forklift (motar ɗaga kaya) ko shugaba a rumbun ajiyar kaya. Wane horo ko takardun shaida mutane suke samu don wannan? Waɗanne ne gajeru kuma masu araha?\" Ko: \"Ina son zama ma'aikacin wutar lantarki (electrician). Mene ne matakan da aka saba bi?\"",
            "Wasu ayyuka suna buƙatar lasisi, kuma wasu dokokin lasisi suna duba tarihin mutum na shari'a. Ku tambayi hukumar lasisi ta jiharku ko shirin masu dawowa gida kafin ku kashe lokaci da kuɗi. AI zai iya ba ku jerin farko, amma hukumar hukuma ce ke da kalmar ƙarshe."
          ],
          steps: ["Ku faɗi sunan aikin da kuke so.", "Ku tambayi AI wane horo mutane sukan samu don shi.", "Ku zaɓi mataki mafi gajarta mai amfani na gaba.", "Idan yana buƙatar lasisi, ku tambayi hukumar lasisi ta jiharku.", "Ku rubuta burinku a jimla ɗaya."],
          words: [["Takardar shaidar ƙwarewa (certificate)", "shaidar cewa kun kammala horo a wata ƙwarewa ta musamman."], ["Daidai da sakandare (high school equivalency)", "jarabawa, kamar GED, da ke nuna kuna da ƙwarewar matakin sakandare."]],
          slides: [
            { title: "Ku fara da aikin", bullets: ["Sannan ku koma baya", "Me nake buƙatar koya?"] },
            { title: "Ku tambayi AI", bullets: ["\"Wane horo mutane suke samu don wannan aikin?\"", "\"Waɗanne zaɓuɓɓuka ne gajeru kuma masu araha?\""] },
            { title: "Ku duba batun lasisi", bullets: ["Wasu ayyuka suna buƙatar lasisi", "Dokoki suna iya duba tarihin shari'a", "Ku tambayi hukumar jiharku ko shirin masu dawowa gida"] }
          ],
          tryIt: "Ku rubuta aikin da kuke so. Ku tambayi mataimakin AI wane horo mutane sukan samu don shi, sannan ku rubuta burin koyonku a jimla ɗaya.",
          youCanNow: "saita burin koyo da ke kaiwa ga aiki.",
          quickCheck: [
            { objective: "O1", q: "Mene ne takardar shaidar ƙwarewa (certificate)?", options: ["Digirin kwaleji", "Shaidar cewa kun kammala horo a wata ƙwarewa", "Tayin aiki", "Bashi"], answer: 1, why: "Takardar shaida tana nuna cewa kun kammala horo a wata ƙwarewa ta musamman." },
            { objective: "O1", q: "Kuna son zama ma'aikacin wutar lantarki. Ta yaya za ku fara burin koyonku?", options: ["Ku yi rajista a aji na farko da kuka gani", "Ku tambayi aboki wane aji ya fi sauƙi", "Ku fara da aikin, ku nemo horon da yake buƙata, ku tambayi hukumar lasisi ta jiha", "Ku jira har wani ya ba ku horo"], answer: 2, why: "Fara daga aikin da tambayar hukumar lasisi suna kai ku ga horon da ya dace." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nemo shirye-shirye kyauta ko masu araha",
          minutes: 5,
          goal: "Nemo aƙalla shirye-shirye biyu na gaske da suka dace da burinku.",
          text: [
            "Akwai wurare da yawa na koyo da ɗan kuɗi ko kyauta: cibiyoyin ilimin manya (sau da yawa don jarabawar daidai da sakandare da Turanci), ɗakunan karatu na jama'a, kwalejojin al'umma, shirye-shiryen masu dawowa gida, da American Job Centers (cibiyoyin aiki na Amurka), waɗanda za su iya ba da shawarar sana'a da tura ku zuwa horo.",
            "Ku nemo American Job Center mafi kusa da ku da mai nemo cibiyoyi na CareerOneStop a careeronestop.org, shafin Ma'aikatar Ƙwadago ta Amurka, ko ku kira layin taimakonsa a 1-877-872-5627. Hidimomi sun bambanta daga cibiya zuwa cibiya, don haka ku kira ko ku ziyarta don ku tabbatar da abin da naku yake bayarwa.",
            "A intanet, shafuka da yawa masu daraja suna ba da darussa kyauta, kamar Khan Academy don lissafi da karatu, da kwasa-kwasai kyauta daga kwalejojin al'umma. Ku tambayi AI shawarwari, sannan ku je shafin kowane shiri da kansa don ku tabbatar yana nan da kuma kuɗinsa."
          ],
          steps: ["Ku tambayi AI inda mutane a yankinku za su iya koyon ƙwarewarku.", "Ku nemo American Job Center mafi kusa a careeronestop.org.", "Ku duba ɗakin karatu, makarantar manya da kwalejin al'umma.", "Ku rubuta shirye-shirye biyu.", "Ku tabbatar da kowanne a shafinsa ko ta waya."],
          words: [["American Job Center", "ofishin da Ma'aikatar Ƙwadago ta Amurka ke ɗaukar nauyi, mai taimakawa da aiki da horo."], ["Kwalejin al'umma (community college)", "kwaleji na yanki mai araha, mai takardun shaida da digiri na shekara biyu."]],
          slides: [
            { title: "Wuraren koyo masu araha", bullets: ["Ilimin manya da ɗakunan karatu", "Kwalejojin al'umma", "Shirye-shiryen masu dawowa gida da American Job Centers"] },
            { title: "American Job Centers", bullets: ["Ku nemo ɗaya a careeronestop.org", "Layin taimako: 1-877-872-5627", "Hidimomi sun bambanta: ku kira don tabbatarwa"] },
            { title: "A intanet", bullets: ["Darussa kyauta kamar Khan Academy", "Ku tabbatar da shirye-shirye a shafukansu"] }
          ],
          sources: [{ name: "CareerOneStop: American Job Center Finder (US Department of Labor)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" }],
          tryIt: "Ku nemo American Job Center mafi kusa da ku a careeronestop.org, da wani shiri guda (ɗakin karatu, makarantar manya ko kwalejin al'umma) don burinku. Ku rubuta su biyu, tare da lambobin waya daga shafukansu na hukuma.",
          youCanNow: "nemo shirye-shirye kyauta ko masu araha don burin koyonku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne kwalejin al'umma?", options: ["Kwaleji na yanki mai araha", "Makarantar intanet kaɗai", "Hukumar aiki ta kamfani mai zaman kansa", "Sakandare ta manya kaɗai"], answer: 0, why: "Kwalejojin al'umma na yanki ne, kuma kuɗinsu yawanci bai kai na sauran kwalejoji ba." },
            { objective: "O2", q: "AI ya ba da shawarar wani shirin horo kusa da ku. Me za ku yi?", options: ["Ku yi rajista nan take", "Ku biya kuɗin ajiye wuri", "Ku raba shi ba tare da dubawa ba", "Ku tabbatar da shi a shafin shirin da kansa"], answer: 3, why: "AI yana iya yin kuskure, don haka ku tabbatar da shirye-shirye a shafinsu na hukuma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Duba shiri kafin ku yi rajista",
          minutes: 5,
          goal: "Yi tambayoyi biyar don ganin ko shiri na gaske ne kuma yana da amfani.",
          text: [
            "Wasu shirye-shirye suna da kyau sosai. Wasu suna da tsada kuma ba sa kaiwa ko'ina, kuma kaɗan zamba ne da ke kai hari ga mutanen da suke son sabon farko. Ku duba kafin ku sa hannu ko ku biya.",
            "Ku yi tambayoyi biyar: Nawa ne jimillar kuɗi, har da littattafai da kuɗaɗe? Tsawon lokacin nawa ne, kuma mene ne jadawali? Me zan samu a ƙarshe (takardar shaida, lasisi ko maki na kwaleji)? Makarantar tana da amincewar hukuma (accredited), ko masu ɗaukar aiki sun san takardar shaidar? Nawa daga cikin waɗanda suka kammala ke samun aiki, kuma shirin yana taimakawa wajen samar da aiki?",
            "AI zai iya taimaka muku shirya tambayoyin da bayanin kalmomi kamar \"accredited\". Amma amsoshin dole su fito daga shirin da kansa, a rubuce, da kuma daga binciken ku. Ku yi hankali da matsin lamba na sa hannu yau ko ɗaukar babban bashi."
          ],
          steps: ["Ku tambayi jimillar kuɗi.", "Ku tambayi tsawon lokaci da jadawali.", "Ku tambayi abin da za ku samu a ƙarshe.", "Ku tambayi ko yana da amincewar hukuma ko masu ɗaukar aiki sun san shi.", "Ku tambayi sakamakon aiki da taimakon samar da aiki."],
          words: [["Amincewar hukuma (accredited)", "wata ƙungiya ta hukuma da ke duba ingancin makaranta ta amince da ita."], ["Samar da aiki (job placement)", "taimakon samun aiki bayan kun kammala."]],
          slides: [
            { title: "Ku duba kafin ku sa hannu", bullets: ["Wasu shirye-shirye ba sa kaiwa ko'ina", "Wasu zamba ne"] },
            { title: "Tambayoyi biyar", bullets: ["Jimillar kuɗi? Tsawon lokaci da jadawali?", "Me zan samu a ƙarshe?", "Yana da amincewar hukuma ko an san shi?", "Sakamakon aiki da samar da aiki?"] },
            { title: "Alamun gargaɗi", bullets: ["Matsin lamba na sa hannu yau", "Manyan bashi don gajeren kwas", "Babu amsoshi a rubuce"] }
          ],
          tryIt: "Ku zaɓi shiri ɗaya daga Darasi na 2. Ku nemi mataimakin AI ya taimaka muku mayar da tambayoyi biyar ɗin zuwa gajeren rubutun kiran waya, sannan ku kira ko ku duba shafin shirin ku rubuta amsoshin.",
          youCanNow: "duba shiri da tambayoyi biyar kafin ku yi rajista.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar \"accredited\" (amincewar hukuma)?", options: ["Wata ƙungiyar hukuma mai duba inganci ta amince da shi", "Kyauta ne", "A intanet kaɗai", "Gwamnati ce ke gudanar da shi"], answer: 0, why: "Amincewar hukuma tana nufin wata ƙungiyar hukuma ta duba ingancin shirin." },
            { objective: "O3", q: "Wata makaranta ta ce dole ku sa hannu a babban bashi yau don kada ku rasa wurinku. Me za ku yi?", options: ["Ku sa hannu don kada ku rasa wurin", "Ku sa hannu amma ku yi niyyar ƙin biya", "Ku ɗauke shi alamar gargaɗi ku ɗauki lokaci ku duba", "Ku nemi AI ya sa hannu a madadinku"], answer: 2, why: "Matsin lamba na sa hannu a babban bashi nan take alamar gargaɗi ce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar hanyarku",
        questions: [
          { objective: "O1", q: "Ina ne wuri mafi kyau na fara burin koyo?", options: ["Kowane aji kawai", "Kwas ɗin da aka fi tallatawa", "Aikin da kuke so, sannan ku koma baya", "Shiri mafi tsawo"], answer: 2, why: "Burin aiki yana sa koyo ya kasance mai amfani." },
          { objective: "O1", q: "AI ya ce wani aiki yana buƙatar lasisi. Wa ke da kalmar ƙarshe a kan dokokin?", options: ["Hukumar lasisi ta jiharku", "AI", "Aboki", "Rubutu a kafofin sada zumunta"], answer: 0, why: "Hukumomin hukuma ne ke kafa dokokin lasisi." },
          { objective: "O2", q: "A ina za ku nemo American Job Center mafi kusa?", options: ["Shafin katin kyauta (gift card)", "Tallar da ke tasowa (pop-up)", "Kowane saƙon tes", "careeronestop.org"], answer: 3, why: "CareerOneStop shi ne mai nemo cibiyoyi na Ma'aikatar Ƙwadago." },
          { objective: "O3", q: "Wace tambaya ce ke duba amfanin shiri?", options: ["\"Wane launi ne ginin?\"", "\"Nawa daga cikin waɗanda suka kammala ke samun aiki?\"", "\"Zan iya sa hannu yau ba tare da karantawa ba?\"", "\"Kuna da wurin ajiye mota?\""], answer: 1, why: "Sakamakon aiki yana nuna ko shirin yana kaiwa wani wuri." },
          { objective: "O3", q: "Wani shiri yana matsa muku ku sa hannu a babban bashi yau. Wannan:", options: ["Babbar dama ce", "Alamar gargaɗi ce", "Dole ne", "Abu ne na yau da kullum a duk makarantu"], answer: 1, why: "Matsin lamba da manyan bashi alamun gargaɗi ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Koyo da AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amfani da AI a matsayin malamin karatu",
          minutes: 5,
          goal: "Nemi AI ya bayyana, ya ba da misalai, ya kuma gwada ku, ba tare da ya yi muku aikinku ba.",
          text: [
            "Mataimakin AI zai iya zama malami mai haƙuri, a kowane lokaci na rana. Ku nemi ya bayyana darasi a sauƙaƙe, ya ba da misali, ya kuma gwada ku: \"Ina karatun ɓangarori (fractions) don jarabawata ta daidai da sakandare. Ka bayyana yadda ake haɗa ɓangarori a matakai masu sauƙi, ka ba ni misali ɗaya, sannan ka ba ni tambayoyin atisaye uku ɗaya bayan ɗaya.\"",
            "Idan ba ku gane ba, ku faɗa: \"Ka bayyana ta wata hanya daban.\" \"Ka yi amfani da kuɗi a matsayin misali.\" Yawan yadda kuke gwada tambayoyi da kanku, yawan yadda kuke koyo.",
            "Kada ku bar AI ya rubuta muku aikin makaranta ko ya yi muku jarabawa. Makarantu suna ɗaukar haka a matsayin satar amsa (cheating), kuma ba za ku koyi komai ba. Ku kuma duba bayanai: AI yana iya yin kuskure, har a lissafi. Littafinku da malaminku ne ke da kalmar ƙarshe."
          ],
          steps: ["Ku faɗi abin da kuke karantawa da matakinku.", "Ku nemi bayani mai sauƙi da misali ɗaya.", "Ku nemi tambayoyin atisaye ɗaya bayan ɗaya.", "Ku nemi wani bayani daban idan kun kasa ganewa.", "Ku yi aikin makarantarku da kanku; ku duba bayanai da malaminku ko littafinku."],
          words: [["Malamin karatu (tutor)", "malami da ke taimaka wa mutum ɗaya ya koya a saurinsa."], ["Gaskiya a karatu (academic honesty)", "yin aikinku da kanku da bin dokokin makarantarku."]],
          slides: [
            { title: "Malami a kowane lokaci", bullets: ["Bayani a sauƙaƙe", "Ba da misali", "Gwada ku tambaya ɗaya bayan ɗaya"] },
            { title: "Kun kasa ganewa?", bullets: ["\"Ka bayyana ta wata hanya daban.\"", "\"Ka yi amfani da kuɗi a matsayin misali.\""] },
            { title: "Ku koya, kada ku yi satar amsa", bullets: ["Ku yi aikinku da jarabawarku da kanku", "AI yana iya yin kuskure", "Malami da littafi ne ke da kalmar ƙarshe"] }
          ],
          tryIt: "Ku zaɓi darasi ɗaya daga burinku. Ku nemi mataimakin AI ya bayyana shi a sauƙaƙe, ya ba da misali ɗaya, sannan ya gwada ku da tambayoyi uku ɗaya bayan ɗaya.",
          youCanNow: "amfani da AI a matsayin malamin karatu cikin gaskiya.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata prompt mai kyau na neman koyo ya ƙunsa?", options: ["Kalmar \"taimako\" kawai", "Aikin makarantarku don AI ya kammala shi", "Lambar shaidar ɗalibinku", "Abin da kuke karantawa da matakinku"], answer: 3, why: "Faɗa wa AI darasin da matakinku yana kawo bayanan da suka dace da ku." },
            { objective: "O4", q: "Kuna da maƙala (essay) da za ku miƙa, kuma kuna son AI ya rubuta ta. Me za ku yi?", options: ["Ku bar AI ya rubuta ta ku miƙa", "Ku nemi AI ya bayyana darasin ya gwada ku, sannan ku rubuta ta da kanku", "Ku kwafi maƙalar abokin karatu", "Ku tsallake aikin"], answer: 1, why: "Barin AI ya rubuta aikin makaranta ya saɓa wa dokokin makaranta kuma yana hana ku koyo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin tsarin karatu da ya dace da rayuwarku",
          minutes: 5,
          goal: "Yi tsarin karatu na mako-mako da ya dace da aiki da sauran ayyuka.",
          text: [
            "Idan kuna aiki, kuna zuwa ganawa, kuma kuna kula da iyali, dole a tsara lokacin karatu. Gajerun zama na yau da kullum sun fi karatun gaggawa na ƙarshe (cramming) amfani.",
            "Ku tambayi AI: \"Ina aiki daga ƙarfe 7 na safe zuwa 3:30 na rana a ranakun aiki, kuma ina da ganawa a yammacin Talata. Ka yi mini tsarin karatu na mako huɗu don lissafin jarabawata ta daidai da sakandare, da zama na minti 30 sau huɗu a mako da ɗan bita a kowane ƙarshen mako.\"",
            "Ku saka zaman a kalandar wayarku tare da tunatarwa. Ku yi karatu a wuri mai shiru, kamar ɗakin karatu, kuma ku yi amfani da Wi-Fi da kwamfutocin ɗakin karatu kyauta idan kuna buƙata. Idan kun rasa wani zama, kada ku karaya; ku yi na gaba kawai."
          ],
          steps: ["Ku rubuta lokutan aikinku da ganawarku da ba sa canjawa.", "Ku nemi AI tsarin mako huɗu da gajerun zama.", "Ku saka zaman a kalandarku tare da tunatarwa.", "Ku nemo wuri mai shiru don karatu.", "Idan kun rasa ɗaya, ku yi na gaba kawai."],
          words: [["Zaman karatu", "lokacin da kuka keɓe don koyo."], ["Cramming (karatun gaggawa)", "ƙoƙarin koyon abubuwa da yawa a ƙarshen lokaci."]],
          slides: [
            { title: "Ku tsara lokacin karatunku", bullets: ["Gajeru kuma na yau da kullum sun fi karatun gaggawa"] },
            { title: "Ku nemi AI tsari", bullets: ["Lokutan aikinku da ganawarku", "Gajerun zama, sau kaɗan a mako", "Bita a ƙarshen mako"] },
            { title: "Ku dage da shi", bullets: ["Tunatarwa a kalanda", "Wuri mai shiru, kamar ɗakin karatu", "Kun rasa ɗaya? Ku yi na gaba"] }
          ],
          tryIt: "Ku nemi mataimakin AI tsarin karatu na mako huɗu da ya dace da aikinku da ganawarku. Ku saka zaman farko guda biyu a kalandar wayarku.",
          youCanNow: "yin tsarin karatu da ya dace da rayuwarku, da bin sa.",
          quickCheck: [
            { objective: "O5", q: "Mene ne cramming?", options: ["Karatu kaɗan kowace rana", "Rubuta bayanai a aji", "Koyon abubuwa da yawa a ƙarshen lokaci", "Neman taimakon malami"], answer: 2, why: "Cramming yana nufin ƙoƙarin koyon abubuwa da yawa daidai kafin jarabawa." },
            { objective: "O5", q: "Kun rasa zaman karatu na Talata saboda aiki. Me za ku yi?", options: ["Ku yi zama na gaba kawai", "Ku bar tsarin", "Ku yi karatu na awa shida a ranar Laraba", "Ku sake fara dukan tsarin"], answer: 0, why: "Rasa zama ɗaya ba laifi ba ne; komawa kan hanya shi ne abin da ke da muhimmanci." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shirin neman tallafin karatu",
          minutes: 5,
          goal: "Nemo inda ake neman tallafin karatu na gwamnatin tarayya ku rubuta abin da za ku shirya.",
          text: [
            "Don kwaleji da makarantun sana'a da yawa a Amurka, matakin farko na tallafin karatu shi ne FAFSA, wato Free Application for Federal Student Aid (fom ɗin neman tallafin ɗalibai na gwamnatin tarayya kyauta). Kamar yadda sunan ya nuna, kyauta ne. Ku cike shi a shafin hukuma kaɗai, studentaid.gov; kada ku biya kowane shafi don ya cike muku shi.",
            "Dokoki game da hukuncin laifi da tallafin karatu sun canja a shekarun baya-bayan nan. Kada ku ɗauka cewa ba za ku iya samun tallafi ba. Ku duba dokokin yanzu a studentaid.gov, ko ku tambayi ofishin tallafin karatu na makarantar; suna taimaka wa ɗalibai da irin waɗannan tambayoyi kowace rana.",
            "AI zai iya taimaka muku fahimtar kalmomi (\"Mene ne Pell Grant?\" \"Mene ne bambanci tsakanin tallafi (grant) da bashi?\") da yin jerin tambayoyi ga ofishin tallafin karatu. Ku rubuta bayananku na sirri da na haraji a studentaid.gov kaɗai, ba a AI ba. Ba a mayar da tallafi (grant); bashi kuwa ana mayar da shi."
          ],
          steps: ["Ku je studentaid.gov kaɗai don FAFSA; kyauta ne.", "Ku duba dokokin yanzu game da hukuncin laifi a can ko a ofishin tallafin karatu na makarantar.", "Ku yi amfani da AI don bayanin kalmomi da shirya tambayoyi.", "Ku rubuta bayanan sirri a shafin hukuma kaɗai.", "Ku san bambancin: ba a mayar da tallafi, ana mayar da bashi."],
          words: [["FAFSA", "Free Application for Federal Student Aid, fom ɗin neman tallafin ɗalibai na gwamnatin tarayya kyauta, a studentaid.gov."], ["Tallafi (grant)", "kuɗin makaranta da yawanci ba sai an mayar da su ba."], ["Ofishin tallafin karatu (financial aid office)", "ofishi a makaranta da ke taimaka wa ɗalibai biyan kuɗin karatu."]],
          slides: [
            { title: "Ku fara da FAFSA", bullets: ["Free Application for Federal Student Aid", "A studentaid.gov kaɗai", "Kada ku taɓa biyan wani shafi don ya cike shi"] },
            { title: "Hukuncin laifi da tallafi", bullets: ["Dokoki sun canja a shekarun baya-bayan nan", "Kada ku ɗauka ba za ku samu tallafi ba", "Ku duba studentaid.gov ko ofishin tallafi"] },
            { title: "Ku yi amfani da AI cikin hikima", bullets: ["Bayanin kalmomi kamar Pell Grant", "Shirya tambayoyi ga ofishin tallafi", "Bayanan sirri a shafin hukuma kaɗai"] }
          ],
          sources: [{ name: "Federal Student Aid: studentaid.gov", url: "https://studentaid.gov/" }],
          tryIt: "Aikin ƙarshe: ku rubuta burin koyonku da ke da alaƙa da aiki, ku duba shiri ɗaya na gaske da tambayoyi biyar, ku nemi AI tsarin karatu na mako huɗu, ku bar shi ya koya muku ya kuma gwada ku a kan darasin farko, sannan ku saka zaman farko guda biyu a kalandarku. Idan shirin kwaleji ne ko makarantar sana'a, ku ƙara tambayoyi uku ga ofishin tallafin karatu.",
          youCanNow: "tsara, nemo, duba da biyan kuɗin ci gaba da karatu, da yin karatu da AI a matsayin malaminku.",
          quickCheck: [
            { objective: "O6", q: "Mene ne cikakken sunan FAFSA?", options: ["Federal Aid for Students and Adults", "Free Application for Federal Student Aid", "First Approved Funding for School Admission", "Financial Account for Student Assistance"], answer: 1, why: "FAFSA ita ce Free Application for Federal Student Aid." },
            { objective: "O6", q: "Wani shafi yana neman kuɗi don cike muku FAFSA. Me za ku yi?", options: ["Ku biya don ku ajiye lokaci", "Ku ba su bayanan harajinku", "Ku nemi AI ya cike shi da lambar Social Security ɗinku", "Ku cike shi kyauta a studentaid.gov"], answer: 3, why: "FAFSA kyauta ce a studentaid.gov, kuma bayanan sirri suna zuwa can kaɗai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Koyo da AI",
        questions: [
          { objective: "O4", q: "Wane ne amfani na gaskiya da AI a makaranta?", options: ["Kwafe amsoshinsa a aikin gida", "Barin sa ya rubuta maƙalarku don ku miƙa", "Barin sa ya yi muku jarabawa", "Neman sa ya bayyana darasi ya gwada ku"], answer: 3, why: "Bayani da gwaji suna taimaka muku koyo." },
          { objective: "O4", q: "Ba ku gane wani bayani ba. Me za ku tambaya?", options: ["\"Ka bayyana ta wata hanya daban.\"", "\"Ka yi mini aikin gida.\"", "\"Mece ce kalmar sirrina?\"", "Babu komai; ku daina"], answer: 0, why: "Sabon bayani sau da yawa yana taimakawa." },
          { objective: "O5", q: "Wane tsarin karatu ne ya fi aiki?", options: ["Karatu sai lokacin da kuke so kawai", "Dare ɗaya mai tsawo kafin jarabawa", "Gajerun zama na yau da kullum", "Babu tsari"], answer: 2, why: "Zama na yau da kullum sun fi karatun gaggawa." },
          { objective: "O6", q: "A ina ake cike FAFSA?", options: ["Hanyar haɗi a cikin saƙon tes", "Kowane shafi da ke karɓar kuɗi", "Cikin hira da AI", "studentaid.gov, kyauta"], answer: 3, why: "FAFSA kyauta ce a shafin hukuma." },
          { objective: "O6", q: "Kuna da hukuncin laifi kuma kuna son tallafi. Me za ku yi?", options: ["Ku tambayi baƙo", "Ku ɗauka ba za ku iya samun tallafi ba", "Ku duba dokokin yanzu a studentaid.gov ko ku tambayi ofishin tallafin karatu", "Ku bar makaranta"], answer: 2, why: "Dokoki sun canja; majiyoyin hukuma sun san dokokin yanzu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI da Ci gaba da Karatu",
    questions: [
      { objective: "O1", q: "Burin koyo mai kyau shi ne:", options: ["Na kowane irin abu", "Mai alaƙa da aikin da kuke so", "Duk abin da aka fi tallatawa", "Mafi tsawo"], answer: 1, why: "Burin aiki yana sa koyo ya kasance mai amfani." },
      { objective: "O1", q: "Takardar shaidar ƙwarewa ita ce:", options: ["Shaidar cewa kun kammala horo a wata ƙwarewa", "Bashi", "Tayin aiki", "Lambar mota"], answer: 0, why: "Takardun shaida suna nuna ƙwarewa ga masu ɗaukar aiki." },
      { objective: "O1", q: "Jarabawar daidai da sakandare, kamar GED:", options: ["Tana nuna ƙwarewar matakin sakandare", "Jarabawar tuƙi ce", "Fom ɗin neman aiki ce", "Bashi ce"], answer: 0, why: "Madadi ce ta takardar kammala sakandare." },
      { objective: "O1", q: "Don aikin da ke buƙatar lasisi, ku duba:", options: ["AI kaɗai", "Hukumar lasisi ta jiharku", "Jita-jita", "Babu komai"], answer: 1, why: "Hukumomi ne ke kafa dokokin kuma suke bayyana su." },
      { objective: "O2", q: "Wa ke ɗaukar nauyin American Job Centers?", options: ["Kamfanin kafofin sada zumunta", "Banki mai zaman kansa", "Ma'aikatar Ƙwadago ta Amurka", "Mai ba da bashin gaggawa (payday lender)"], answer: 2, why: "Suna cikin cibiyoyin Ma'aikatar Ƙwadago." },
      { objective: "O2", q: "Hidimomi a American Job Centers:", options: ["A intanet kaɗai suke", "Iri ɗaya ne ko'ina", "Suna da tsada sosai", "Sun bambanta, don haka ku kira ko ku ziyarta don tabbatarwa"], answer: 3, why: "Kowace cibiya tana ba da hidimomi daban-daban." },
      { objective: "O2", q: "Kwalejin al'umma ita ce:", options: ["Banki", "Shirin gidan yari kaɗai", "Kwaleji na yanki mai araha", "Hukumar aiki"], answer: 2, why: "Kwalejojin al'umma suna ba da takardun shaida da digiri." },
      { objective: "O2", q: "Bayan AI ya ba da shawarar wani shiri, ya kamata ku:", options: ["Tabbatar da shi a shafin shirin da kansa", "Yi rajista nan take", "Biya wani baƙo", "Yi watsi da shi"], answer: 0, why: "AI yana iya lissafa shirye-shiryen da babu su." },
      { objective: "O3", q: "\"Accredited\" yana nufin:", options: ["Kyauta", "Mai tsada", "A intanet kaɗai", "Wata ƙungiyar hukuma mai duba inganci ta amince da shi"], answer: 3, why: "Amincewar hukuma tana duba inganci." },
      { objective: "O3", q: "Samar da aiki (job placement) yana nufin:", options: ["Tebur", "Taimakon samun aiki bayan kun kammala", "Jarabawa", "Bashi"], answer: 1, why: "Yana haɗa waɗanda suka kammala da ayyuka." },
      { objective: "O3", q: "Amsoshi game da kuɗin shiri ya kamata su fito daga:", options: ["AI kaɗai", "Shirin, a rubuce", "Jita-jita", "Tallar da ke tasowa (pop-up)"], answer: 1, why: "Amsoshi a rubuce daga shirin ana iya amincewa da su." },
      { objective: "O4", q: "Prompt mai kyau na neman koyo yana faɗin:", options: ["Lambar shari'arku", "Lambar Social Security ɗinku", "\"Taimako\" kawai", "Abin da kuke karantawa da matakinku"], answer: 3, why: "Darasi da matakin suna taimaka wa AI ya koyar da kyau." },
      { objective: "O4", q: "AI ya yi kuskure a amsar lissafi. Wa ke da kalmar ƙarshe?", options: ["Malaminku da littafinku", "AI", "Baƙo a intanet", "Babu kowa"], answer: 0, why: "AI yana iya yin kuskure, har a lissafi." },
      { objective: "O4", q: "Barin AI ya rubuta aikin makarantarku:", options: ["Dole ne", "Ana yarda da shi koyaushe", "Ya saɓa wa dokokin makaranta kuma ba za ku koya ba", "Atisaye ne mai kyau"], answer: 2, why: "Gaskiya a karatu tana nufin yin aikinku da kanku." },
      { objective: "O5", q: "Cramming yana nufin:", options: ["Ɗakin karatu", "Gajeren karatu na yau da kullum", "Ƙungiyar karatu", "Koyon abubuwa da yawa a ƙarshen lokaci"], answer: 3, why: "Karatun gaggawa ba shi da amfani kamar karatu na yau da kullum." },
      { objective: "O5", q: "Don ku bi tsarin karatu, kuna iya:", options: ["Tsallake tsarawa", "Dogara da tunawa kawai", "Saka zaman a kalandarku tare da tunatarwa", "Yin karatu a ranar jarabawa kawai"], answer: 2, why: "Tunatarwa tana sa ku kasance kan hanya." },
      { objective: "O5", q: "Idan kun rasa zaman karatu, ya kamata ku:", options: ["Bar shirin", "Yi na gaba kawai", "Sake farawa daga sifili", "Ji cewa babu fata"], answer: 1, why: "Rasa zama ɗaya ba ya kawo ƙarshen ci gabanku." },
      { objective: "O6", q: "Cikakken sunan FAFSA shi ne:", options: ["Free Application for Federal Student Aid", "Fast Application for Student Accounts", "Federal Account for Savings", "Financial Aid Service Agency"], answer: 0, why: "Fom ne na neman tallafin gwamnatin tarayya kyauta." },
      { objective: "O6", q: "Tallafi (grant) yawanci:", options: ["Ba sai an mayar da shi ba", "Dole a mayar da shi da ruwa (interest)", "Wani nau'in katin bashi ne", "Kuɗin biya ne"], answer: 0, why: "Ba a mayar da tallafi; bashi kuwa ana mayar da shi." },
      { objective: "O6", q: "Ya kamata a rubuta bayanan sirri da na haraji don FAFSA:", options: ["A cikin AI", "A studentaid.gov kaɗai", "A tes zuwa ga baƙo", "A kowane shafi"], answer: 1, why: "Bayanan sirri suna zuwa shafin hukuma kaɗai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      7,
      8,
      10,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Buri mai alaƙa da aiki",
        objective: "O1",
        notYet: "Burin ba shi da sarari ko ba shi da alaƙa da aiki.",
        meets: "Jimla ɗaya da ke ambaton aikin da horon da yake buƙata.",
        exceeds: "Yana kuma faɗin ko aikin yana buƙatar lasisin jiha da inda za a tambaya."
      },
      {
        name: "An duba shiri",
        objective: "O3",
        notYet: "Babu shiri, ko an amsa ƙasa da tambayoyi biyar.",
        meets: "An duba shiri ɗaya na gaske da dukan tambayoyi biyar, kuma shirin ne ya amsa.",
        exceeds: "Amsoshi game da kuɗi suna a rubuce, kuma an kwatanta da shiri na biyu."
      },
      {
        name: "AI a matsayin malami",
        objective: "O4",
        notYet: "AI ne ya yi aikin, ko ba a yi gwaji ba.",
        meets: "AI ya bayyana darasin farko, ya ba da misali, kuma ya gwada mai koyo.",
        exceeds: "Mai koyo ya nemi AI ya bayyana ta wata hanya daban lokacin da ya kasa ganewa."
      },
      {
        name: "Tsarin karatu a kalanda",
        objective: "O5",
        notYet: "Babu tsari, ko babu zama a kalanda.",
        meets: "Tsari na mako huɗu mai gajerun zama na yau da kullum, kuma zaman farko guda biyu suna a kalanda.",
        exceeds: "Zaman suna da tunatarwa kuma sun dace da aiki da ganawa."
      },
      {
        name: "Tambayoyin tallafin karatu",
        objective: "O6",
        notYet: "Babu su, alhali shirin kwaleji ne ko makarantar sana'a.",
        meets: "Tambayoyi uku ga ofishin tallafin karatu.",
        exceeds: "Yana kuma faɗin inda ake cike FAFSA kyauta."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista a shirin daidai da sakandare, takardar shaida ko kwaleji cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka cike FAFSA ko suka nemi wani tallafi cikin kwanaki 90",
      "Masu koyo da suka ce suna amfani da AI a matsayin malamin karatu kowane mako (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet da manhajar kalanda",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Takarda da alƙalami don burin da tambayoyin shiri",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku shirya bayanan tuntuɓar American Job Center, makarantar manya da kwalejin al'umma mafi kusa.",
      "Ku bayyana cewa AI mai taimakon karatu ne kawai; amfani da shi don yin aikin makaranta ya saɓa wa dokokin makaranta.",
      "Kada ku taɓa neman masu koyo su rubuta lambobin Social Security, bayanan haraji ko bayanan shari'a a AI; aikin FAFSA ana yin sa a studentaid.gov kaɗai, a ɓoye.",
      "Ku tura tambayoyi game da hukuncin laifi da tallafi zuwa studentaid.gov ko ofishin tallafin karatu, domin dokoki suna canjawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
