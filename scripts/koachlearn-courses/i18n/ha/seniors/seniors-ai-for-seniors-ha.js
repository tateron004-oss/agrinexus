"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-for-seniors.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-for-seniors-ha",
  lang: "ha",
  translationOf: "seniors-ai-for-seniors",
  category: "Seniors and Technology",
  name: "AI ga Tsofaffi: Amfani da Mataimakan AI",
  skills: "Buɗe mataimakin AI kyauta, Rubuta ko faɗin tambaya, Neman amsa mafi sauƙi, Tabbatar da abin da ya faɗa, Kiyaye bayanan sirri",
  outcome: "buɗe mataimakin AI kyauta a wayarku, tablet ko kwamfuta, yi masa tambaya a sarari ta rubutu ko magana, neman ya ƙara bayani a sauƙaƙe, da tabbatar da amsar kafin ku yi aiki da ita.",
  about: [
    "Wannan kwas ɗin na manya ne da suka ji labarin mataimakan AI kamar ChatGPT, Microsoft Copilot ko Google Gemini, kuma suke son gwada ɗaya, a hankali kuma lafiya. Ba sai kun taɓa amfani da su ba.",
    "Za ku buɗe mataimaki, ku yi masa tambayoyi na gaske game da rayuwarku, kamar girke-girke, wasiƙa daga asibiti, ko saƙon murnar zagayowar ranar haihuwa ga jika, kuma ku koyi yadda ake sa amsoshinsa su fi sarari.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" a hankalinku. Akwai ɗan gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Kuna iya maimaita kowane darasi sau nawa kuke so."
  ],
  finalTask: "Ku yi amfani da mataimakin AI don shirya abincin iyali mai sauƙi: ku nemi girke-girke mai sauƙi na mutum huɗu, ku nemi ya sa matakan a gajerun layuka masu lamba, ku yi tambayar biyo baya ɗaya, sannan ku tabbatar da gaskiya ɗaya (kamar zafin girki) a shafin intanet amintacce ko wurin mutumin da kuka amince da shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya, yawanci waɗanda suka yi ritaya, da ke son amfani da sababbin mataimakan AI don taimakon yau da kullum: katuna da wasiƙu ga iyali, abubuwan sha'awa, bayanin abubuwa da yin jerin abubuwa. Wasu suna zaune su kaɗai; da yawa suna da jikoki da ke amfani da waɗannan kayan.",
    startingPoint: "Suna iya kira da tura saƙon tes, kuma da yawa suna amfani da imel ko tablet. Yawancinsu ba su taɓa amfani da mataimakin AI ba, kuma wasu ba su da tabbaci game da manhajoji (apps), ƙananan rubutu ko yin rubutu a waya.",
    gap: "Mataimakan AI suna iya ajiye lokaci kuma su taimaki tsofaffi su ci gaba da hulɗa da wasu kuma su dogara da kansu, amma 'yan damfara suna yawan neman tsofaffi, kuma amsoshin da ba daidai ba game da lafiya ko kuɗi suna iya ruɗe su. Suna buƙatar buɗe mataimaki, yin tambaya a sarari, sa amsoshi su fi sauƙin karantawa, tabbatar da gaskiya, da kiyaye bayanan sirri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: waya, tablet ko kwamfuta; ƙaramin allo da ƙananan rubutu suna iya wuyar karantawa",
      "Lokaci: kusan minti 5 a kowane darasi cikin natsuwa, da lokacin atisaye",
      "Dole a tabbatar da amsoshi game da lafiya, magani da kuɗi wurin likita, mai sayar da magani (pharmacist) ko majiyar hukuma",
      "Haɗarin zamba yana da yawa: babu lambar Social Security, Medicare, banki ko kalmar sirri a kowane prompt"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da allon taɓawa (touchscreen) ba suna iya roƙon wani a iyali ko mai taimako a ɗakin karatu ya zauna tare da su a karon farko."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan yau da kullum", action: "gane waɗanne ayyuka mataimakin AI zai iya taimakawa da su, da waɗanda ke buƙatar likita, banki ko wani mutum", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da wayarku, tablet ko kwamfuta", action: "buɗe mataimakin AI kyauta daga shagon manhajoji na hukuma ko shafinsa na hukuma, da nemo akwatin saƙo ko makirofo", standard: "ba tare da taimakon kowa ba" },
    { id: "O3", condition: "Idan kuna da wata buƙata ta gaske daga rayuwarku", action: "rubuta ko faɗin prompt da ke bayyana abin da kuke buƙata, halin da kuke ciki, da yadda kuke son amsar", standard: "ta yadda amsar farko za ta yi amfani" },
    { id: "O4", condition: "Idan amsar ta yi tsawo sosai ko tana da wuyar karantawa", action: "neman canje-canje da tambayoyin biyo baya, ɗaya bayan ɗaya, don ta zama mai sauƙi ko gajeriya", standard: "har ta zama mai sauƙin karantawa da amfani a gare ku" },
    { id: "O5", condition: "Idan amsar AI tana magana game da lafiya, kuɗi, lambar waya ko rana", action: "tabbatar da gaskiyar a shafin hukuma, wurin likitanku ko mai sayar da magani, ko wurin mutumin da kuka amince da shi", standard: "kafin ku yi aiki da ita" },
    { id: "O6", condition: "Idan kuna rubuta prompt ko kun sami kira ko saƙon gaggawa", action: "kiyaye bayanan sirri daga ciki da gane alamun gargaɗin zamba", standard: "ba tare da bayyana lambobin sirri, kalmomin sirri ko code ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Haɗuwa da mataimakin AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne mataimakin AI",
          minutes: 4,
          goal: "Bayyana da kalmominku abin da mataimakin AI zai iya yi muku da wanda ba zai iya yi ba.",
          text: [
            "Mataimakin AI shiri ne na kwamfuta da za ku iya yi masa magana ko rubutu da kalmomi na yau da kullum, kamar kuna rubuta takarda ga maƙwabci mai taimako. Kuna yin tambaya, kuma bayan 'yan daƙiƙoƙi yana rubuta amsa.",
            "Sanannun mataimaka masu kyauta sun haɗa da ChatGPT, Microsoft Copilot da Google Gemini. Suna da kyau wajen bayanin abubuwa a sauƙaƙe, rubuta daftarin farko na kati ko wasiƙa, ba da shawarwari game da abin sha'awa, da yin jerin abubuwa.",
            "Mataimaki ba mutum ba ne, kuma ba likitanku ba ne, ba lauyanku ba ne, ba bankinku ba ne. Bai san ku ba, kuma yana iya yin kuskure ko da yana magana kamar ya tabbata sosai. Ku ne kuke da iko: ku ne kuke yanke abin da za ku tambaya, da abin da za ku yarda da shi."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke iya yin ayyuka kamar rubutu ko amsa tambayoyi."], ["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana."]],
          slides: [
            { title: "Mataimakin AI shi ne...", bullets: ["Shirin kwamfuta da kuke hira da shi", "Kuna tambaya da kalmomin yau da kullum", "Yana rubuta amsa cikin daƙiƙoƙi"] },
            { title: "Zai iya taimaka muku", bullets: ["Bayanin kalma ko wasiƙa mai wuya a sauƙaƙe", "Rubuta daftarin katin ranar haihuwa ko na godiya", "Ba da shawarwari kan girki, abubuwan sha'awa da tafiye-tafiye"] },
            { title: "Shi BA", bullets: ["Likitanku, lauyanku ko bankinku ba ne", "Koyaushe daidai yake ba, ko da yana magana kamar ya tabbata", "Shi ne mai iko ba: ku ne"] }
          ],
          tryIt: "A takarda, ku rubuta abubuwa uku da mataimakin AI zai iya taimaka muku da su a wannan watan, misali kati ga jika, tambaya game da wata shuka a lambu, ko girke-girke.",
          youCanNow: "faɗin mene ne mataimakin AI, ambaci hanyoyi uku da zai iya taimaka muku, da bayyana dalilin da yasa har yanzu kuke tabbatar da abin da ya faɗa.",
          quickCheck: [
            { objective: "O1", q: "Wane aiki ne mataimakin AI yake da kyau a kai?", options: ["Rubuta daftarin farko na katin ranar haihuwa", "Ba ku sakamakon gwajin jininku", "Cire kuɗi daga bankinku", "Zuwa wurin likita a madadinku"], answer: 0, why: "Mataimaka suna da kyau wajen daftari, shawarwari da jerin abubuwa; ba likitanku ko bankinku ba ne." },
            { objective: "O1", q: "Mataimakin AI yana magana kamar ya tabbata sosai game da wata ƙa'ida ta tallafinku. Me za ku yi?", options: ["Ku yarda da shi domin yana magana kamar ya tabbata", "Ku tuna cewa yana iya yin kuskure, ku tabbatar wurin ofishin", "Ku faɗa wa abokanku nan take", "Ku nemi ya yi alƙawarin cewa daidai ne"], answer: 1, why: "Mataimaka suna iya yin kuskure ko da suna magana kamar sun tabbata, kuma ku ne kuke yanke abin da za ku yarda da shi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Buɗe mataimaki a wayarku, tablet ko kwamfuta",
          minutes: 6,
          goal: "Buɗe mataimakin AI kyauta kuma ku nemo akwatin da kuke rubutu ko magana.",
          text: [
            "Kuna iya amfani da mataimaki a wayar zamani (smartphone), tablet ko kwamfuta. Ku zaɓi na'urar da kuka fi jin daɗin amfani da ita. Jika, aboki ko mai taimako a ɗakin karatu zai iya zama tare da ku a karon farko.",
            "A waya ko tablet: ku buɗe shagon manhajoji (Play Store a Android, App Store a iPhone da iPad). Ku taɓa akwatin nema, ku rubuta sunan mataimakin, sannan ku saka manhajar da ainihin kamfanin ya yi: OpenAI don ChatGPT, Microsoft don Copilot, Google don Gemini.",
            "A kwamfuta: ku buɗe burauzar intanet ku rubuta adireshin a hankali, misali chatgpt.com, copilot.microsoft.com ko gemini.google.com. Wasu suna barin ku fara ba tare da asusu ba; wasu suna neman ku shiga asusu.",
            "Ku nemo akwatin saƙo, yawanci kusa da ƙasan allo. Sau da yawa yana cewa \"Ask anything\" ko \"Message\". Manhajoji da yawa kuma suna nuna ƙaramin makirofo da za ku iya taɓawa don yin magana maimakon rubutu."
          ],
          steps: ["Ku zaɓi wayarku, tablet ko kwamfuta.", "Waya ko tablet: ku saka manhajar hukuma daga shagon manhajoji. Kwamfuta: ku rubuta adireshin shafin a burauzar.", "Ku nemo akwatin saƙo kusa da ƙasan allo.", "Ku nemo maɓallin makirofo idan kun fi son yin magana."],
          words: [["Shagon manhajoji (app store)", "wurin hukuma a waya ko tablet don samun manhajoji lafiya."], ["Burauzar intanet (web browser)", "shirin da kuke amfani da shi don ziyartar shafukan intanet, kamar Chrome, Edge ko Safari."], ["Maɓallin makirofo", "ƙaramin hoton makirofo da kuke taɓawa don yin magana maimakon rubutu."]],
          slides: [
            { title: "Ku yi amfani da abin da kuka saba da shi", bullets: ["Wayar zamani, tablet ko kwamfuta", "Ku roƙi wani a iyali ko ma'aikacin ɗakin karatu ya zauna tare da ku"] },
            { title: "A waya ko tablet", bullets: ["Ku buɗe shagon manhajoji na hukuma", "Ku nemi sunan mataimakin", "Ku saka manhajar ainihin kamfanin"] },
            { title: "A kwamfuta", bullets: ["Ku buɗe burauzar intanet", "Ku rubuta chatgpt.com, copilot.microsoft.com ko gemini.google.com", "Ku rubuta adireshin a hankali"] },
            { title: "Inda za ku yi magana", bullets: ["Akwatin saƙo kusa da ƙasa", "Yana iya cewa \"Ask anything\"", "Maɓallin makirofo yana barin ku yi magana"] }
          ],
          tryIt: "Ku buɗe mataimaki kyauta ɗaya. Ku nemo akwatin saƙo ku rubuta, ko ku faɗi: Sannu, ni sabo ne a wannan. Don Allah ka amsa da gajerun jimloli masu sauƙi. Ku karanta amsarsa.",
          youCanNow: "buɗe mataimakin AI kyauta da nemo inda za ku rubuta ko faɗin tambayarku.",
          quickCheck: [
            { objective: "O2", q: "Wane ne yake yin ainihin manhajar Microsoft Copilot?", options: ["Kowane kamfani mai suna mai kama da shi", "Google", "Microsoft", "OpenAI"], answer: 2, why: "Ku saka manhajar da ainihin kamfanin ya yi: Microsoft don Copilot." },
            { objective: "O2", q: "Rubutu a wayarku yana muku wuya. Me za ku nema a manhajar mataimakin?", options: ["Alamar batir", "Maɓallin kyamara", "Alamar saituna (settings)", "Ƙaramin makirofo da za ku taɓa don yin magana"], answer: 3, why: "Manhajoji da yawa suna nuna makirofo don ku yi magana maimakon rubutu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin tambaya a sarari",
          minutes: 5,
          goal: "Rubuta ko faɗin tambaya da za ta kawo amsa mai amfani tun farko.",
          text: [
            "Abin da kuke rubutawa ko faɗa wa mataimaki ana kiransa prompt (umarni). Idan prompt ya fi sarari, amsar za ta fi kyau.",
            "Prompt mai kyau yana da sassa uku: abin da kuke buƙata, ɗan bayani game da halin da kuke ciki, da yadda kuke son amsar. Misali: \"Jikata za ta cika shekara 8 ranar Asabar, kuma tana son dawakai. Ka rubuta gajeren saƙon murnar ranar haihuwa daga Kaka. Ka yi amfani da kalmomi masu sauƙi.\"",
            "Prompt da ya yi gajarta sosai, kamar \"ranar haihuwa\", yana sa mataimakin ya yi tsammani, kuma kuna samun amsa ta gama-gari. Ba laifi ku rubuta jimloli kaɗan. Ku ɗauki lokacinku; mataimakin yana jiran ku."
          ],
          steps: ["Ku faɗi abin da kuke buƙata.", "Ku ƙara ɗan bayani game da halin da kuke ciki, ba tare da bayanan sirri ba.", "Ku faɗi yadda kuke son amsar: gajeriya, kalmomi masu sauƙi, manyan matakai, ko jeri."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."]],
          slides: [
            { title: "Prompt ita ce tambayarku", bullets: ["Prompt mai sarari = amsa mafi kyau", "Gajere sosai = amsa ta gama-gari"] },
            { title: "Sassa uku na prompt mai kyau", bullets: ["1. Abin da kuke buƙata", "2. Ɗan bayani game da halin da kuke ciki", "3. Yadda kuke son amsar"] },
            { title: "Misali", bullets: ["\"Jikata za ta cika shekara 8 kuma tana son dawakai.", "Ka rubuta gajeren saƙon ranar haihuwa daga Kaka.", "Ka yi amfani da kalmomi masu sauƙi.\""] }
          ],
          tryIt: "Ku zaɓi abu ɗaya daga jerinku na Darasi na 1. Ku rubuta prompt mai dukkan sassa uku, ku aika, ku karanta amsar a hankali.",
          youCanNow: "yi wa mataimakin AI tambaya a sarari mai abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar.",
          quickCheck: [
            { objective: "O3", q: "Mene ne prompt?", options: ["Tunatarwa a kalandarku", "Abin da kuke rubutawa ko faɗa wa mataimakin", "Amsar da mataimakin yake bayarwa", "Kalmar sirri"], answer: 1, why: "Prompt ita ce buƙatarku ga mataimakin, ta rubutu ko magana." },
            { objective: "O3", q: "Kuna son saƙon godiya ga maƙwabcinku da ya gyara muku shinge. Wane prompt ne ya fi kyau?", options: ["\"saƙo\"", "\"godiya\"", "\"Rubuta komai.\"", "\"Maƙwabcina ya gyara mini shinge. Ka rubuta gajeren saƙon godiya mai daɗi da kalmomi masu sauƙi.\""], answer: 3, why: "Yana faɗin abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Haɗuwa da mataimakin AI",
        questions: [
          { objective: "O1", q: "Mene ne mataimakin AI?", options: ["Mutum a cibiyar amsa kira", "Wani nau'in talabijin", "Shirin kwamfuta da kuke hira da shi da kalmomin yau da kullum", "Ofishin gwamnati"], answer: 2, why: "Mataimakin AI shiri ne da kuke rubuta masa ko magana da shi, kuma yana rubuta amsoshi." },
          { objective: "O1", q: "Mataimakin yana magana kamar ya tabbata sosai game da tambayar magani. Me ya kamata ku yi?", options: ["Ku tabbatar wurin likitanku ko mai sayar da magani", "Ku bi shi nan take", "Ku daina shan duk magunguna", "Ku faɗa wa maƙwabcinku ya bi shi"], answer: 0, why: "AI yana iya yin kuskure ko da yana magana kamar ya tabbata; tambayoyin lafiya na likitanku ne ko mai sayar da magani." },
          { objective: "O2", q: "A ina ne wuri mai aminci don samun manhajar AI a waya ko tablet?", options: ["Hanyar haɗi (link) a cikin tes daga baƙo", "Tallar da ke tasowa (pop-up)", "Kowane shafin intanet", "Shagon manhajoji na hukuma, daga ainihin kamfanin"], answer: 3, why: "Shagon manhajoji na hukuma da manhajar ainihin kamfanin su ne zaɓi mai aminci." },
          { objective: "O2", q: "Kun fi son yin magana da rubutu. Me za ku nema?", options: ["Alamar batir", "Maɓallin makirofo", "Kyamara", "Maɓallin ƙara sauti"], answer: 1, why: "Maɓallin makirofo yana barin ku faɗi tambayarku." },
          { objective: "O3", q: "Wane prompt ne ya fi sarari?", options: ["\"ranar haihuwa\"", "\"Jikata za ta cika shekara 8 kuma tana son dawakai. Ka rubuta gajeren saƙon ranar haihuwa daga Kaka da kalmomi masu sauƙi.\"", "\"taimako\"", "\"kati\""], answer: 1, why: "Yana faɗin abin da kuke buƙata, halin da kuke ciki da yadda kuke son amsar." }
        ]
      }
    },
    {
      name: "Babi na 2: Samun amsoshi masu kyau lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman amsa mafi sauƙi ko gajeriya",
          minutes: 4,
          goal: "Yi tambayoyin biyo baya don sa amsa ta fi sauƙin karantawa da amfani.",
          text: [
            "Ba dole ne ku karɓi amsar farko ba. Mataimakin yana tuna abin da kuka faɗa a baya a cikin hira ɗaya, don haka kuna iya neman ya canja amsarsa.",
            "Tambayoyin biyo baya masu amfani: \"Don Allah ka yi amfani da kalmomi masu sauƙi.\" \"Ka gajarta ta.\" \"Ka sa ta a matakai masu lamba.\" \"Ka sake bayanin mataki na 3.\" \"Ka ba ni misali.\" \"Ka sa ta fi nuna ƙauna.\"",
            "Idan ƙananan rubutu suna muku wuyar karantawa, kuna iya ƙara girman rubutu a na'urarku. Ku roƙi wani a iyali ya nuna muku saitin girman rubutu, ko ku tambayi mataimakin: \"Yaya zan ƙara girman rubutu a iPhone ɗina?\""
          ],
          steps: ["Ku karanta amsar farko a hankali.", "Ku yanke abin da zai sa ta fi kyau.", "Ku nemi wannan canjin ɗaya.", "Ku maimaita har amsar ta yi muku aiki."],
          words: [["Tambayar biyo baya (follow-up)", "tambaya ta biyu da ke ginuwa kan amsar da kuka samu."]],
          slides: [
            { title: "Amsar farko daftari ce kawai", bullets: ["Kuna iya neman canje-canje", "Yana tuna hira ɗaya"] },
            { title: "Tambayoyin biyo baya masu aiki", bullets: ["\"Don Allah ka yi amfani da kalmomi masu sauƙi.\"", "\"Ka gajarta ta.\"", "\"Ka sa ta a matakai masu lamba.\"", "\"Ka sake bayanin mataki na 3.\""] },
            { title: "Yana da wuyar karantawa?", bullets: ["Ku ƙara girman rubutu a na'urarku", "Ku tambayi mataimakin yadda ake yi", "Ku roƙi wani a iyali ya nuna muku"] }
          ],
          tryIt: "Ku ɗauki amsar daga Darasi na 3. Ku nemi canje-canje biyu, ɗaya bayan ɗaya, kamar \"ka gajarta ta\" sannan \"ka sa ta fi nuna ƙauna\". Ku kwatanta amsar farko da ta ƙarshe.",
          youCanNow: "inganta amsar AI ta hanyar yin tambayoyin biyo baya masu sarari.",
          quickCheck: [
            { objective: "O4", q: "Me yasa za ku iya neman mataimakin ya canja amsarsa?", options: ["Yana tuna abin da kuka faɗa a baya a cikin hira ɗaya", "Dole ya sake farawa kowane lokaci", "Yana karanta zuciyarku", "Yana amsawa sau ɗaya kawai"], answer: 0, why: "A cikin hira ɗaya mataimakin yana tuna saƙonnin baya, don haka kuna iya neman canje-canje." },
            { objective: "O4", q: "Amsar girke-girke dogon sakin layi ɗaya ce. Me za ku aika a gaba?", options: ["\"Ba daidai ba.\"", "Babu komai; ku rufe manhajar", "\"Ka sa ta a matakai masu lamba.\"", "\"Ka tsawaita ta.\""], answer: 2, why: "Tambayar biyo baya mai sarari da ke faɗin canjin tana sa amsar ta fi sauƙin amfani." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da amsa kafin ku yi aiki da ita",
          minutes: 5,
          goal: "Tabbatar da amsar AI da majiya amintacciya kafin ku dogara da ita.",
          text: [
            "Mataimakan AI wani lokaci suna ƙirƙirar abubuwa: lambar waya marar gaskiya, lokacin buɗe shago, bayani game da magani, ko ƙa'idar da ta canja. Ana kiran wannan hallucination (hasashen ƙarya).",
            "Koyaushe ku tabbatar da duk wani abu game da lafiyarku, magunguna, kuɗi, tallafi kamar Social Security ko Medicare (shirye-shiryen gwamnatin Amurka), ranaku, adireshi da lambobin waya. Ku tabbatar a shafin hukuma, ofishin da kansa, wurin likitanku ko mai sayar da magani, ko mutumin da kuka amince da shi.",
            "Kyakkyawar al'ada ita ce ku tambaya: \"A ina zan tabbatar da wannan?\" Sannan ku nemo wannan shafin hukuma da kanku. Shafukan gwamnatin Amurka na hukuma suna ƙarewa da .gov."
          ],
          steps: ["Ku nemo bayanan gaskiya a cikin amsar: lambobi, ranaku, sunaye, ƙa'idoji.", "Ku duba su a shafin hukuma ko ku kira ofishin.", "Idan ba su yi daidai ba, ku amince da majiyar hukuma.", "Don lafiya da kuɗi, ku kuma tambayi likitanku, mai sayar da magani ko mutumin da kuka amince da shi."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], [".gov", "ƙarshen adireshin shafukan intanet na gwamnatin Amurka na hukuma."]],
          slides: [
            { title: "AI yana iya ƙirƙirar abubuwa", bullets: ["Lambobin waya ko lokutan buɗewa marasa gaskiya", "Tsofaffin ƙa'idoji", "Bayanan magani marasa gaskiya"] },
            { title: "Koyaushe ku tabbatar da", bullets: ["Lafiya da magunguna", "Kuɗi da tallafi", "Ranaku, adireshi da lambobin waya"] },
            { title: "Yadda ake tabbatarwa", bullets: ["Shafin hukuma, sau da yawa yana ƙarewa da .gov", "Ku kira ofishin", "Ku tambayi likitanku, mai sayar da magani ko wanda kuka amince da shi"] }
          ],
          tryIt: "Ku tambayi mataimaki lokutan buɗe ɗakin karatu na unguwarku. Sannan ku duba shafin intanet na ɗakin karatun da kansa ko ku kira shi. Shin amsar ta yi daidai?",
          youCanNow: "gane bayanan da ke buƙatar tabbatarwa, da tabbatar da su da majiya amintacciya.",
          quickCheck: [
            { objective: "O5", q: "Mene ne hallucination a AI?", options: ["Lokacin da allon ya yi duhu", "Lokacin da manhajar ta yi jinkiri", "Lokacin da mataimakin yake magana da babbar murya", "Lokacin da mataimakin ya ƙirƙiri abin da yake kama da gaskiya"], answer: 3, why: "AI yana iya ƙirƙirar lambar waya, lokacin buɗe shago ko ƙa'ida marar gaskiya da ke kama da ta gaske." },
            { objective: "O5", q: "Mataimakin ya faɗa muku yawan maganin da za ku sha. Me za ku yi?", options: ["Ku sha wannan yawan nan take", "Ku fara tabbatarwa wurin likitanku ko mai sayar da magani", "Ku tambayi wani AI daban", "Ku raba shi da abokai"], answer: 1, why: "Dole a tabbatar da amsoshi game da lafiya da magani wurin likitanku ko mai sayar da magani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye bayananku na sirri",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI ba tare da bayyana bayanan sirri ba.",
          text: [
            "Kada ku taɓa rubuta bayanan sirri a mataimakin AI: lambar Social Security ɗinku, lambar Medicare, lambobin banki ko kati, kalmomin sirri, ko cikakken adireshin gidanku. Kuna iya samun taimakon da kuke buƙata ba tare da su ba. Ku rubuta \"[lambata]\" a maimakon haka.",
            "'Yan damfara ma suna amfani da AI. Suna iya rubuta saƙonni da suke kama da na gaske, har ma su kwaikwayi muryar jika a waya. Ku yi hankali da duk kira ko saƙon da ke gaggauta ku, ke neman kuɗi ko katin kyauta (gift card), ko ke neman code da aka turo wayarku.",
            "Idan wani abu bai yi muku daidai ba, ku tsaya. Ku katse wayar, sannan ku sake kiran mutumin ta lambar da kuka riga kuka sani gaskiya ce."
          ],
          steps: ["Kafin ku aika prompt, ku karanta shi don neman bayanan sirri.", "Ku maye gurbinsu da madadi kamar \"[lambata]\".", "Ku ɗauki gaggawa, katin kyauta da neman code a matsayin alamun gargaɗi.", "Ku sake kira ta lambar da kuka riga kuka sani."],
          words: [["Bayanan sirri", "bayanan da za su iya bar wani ya yi kamar shi ne ku, ko ya ɗauki kuɗinku."], ["Madadi (placeholder)", "kalmar maye gurbi kamar \"[lambata]\" da ake amfani da ita maimakon ainihin bayanin."]],
          slides: [
            { title: "Kada ku taɓa rubutawa AI", bullets: ["Lambar Social Security ko ta Medicare", "Lambobin banki ko kati", "Kalmomin sirri"] },
            { title: "Ku yi amfani da madadi", bullets: ["Ku rubuta \"[lambata]\" a maimakon haka", "Har yanzu kuna samun taimakon da kuke buƙata"] },
            { title: "Alamun gargaɗin zamba", bullets: ["Suna gaggauta ku", "Suna neman kuɗi ko katin kyauta", "Suna neman code da aka turo wayarku"] },
            { title: "Idan kuna shakka", bullets: ["Ku tsaya", "Ku katse wayar", "Ku sake kira ta lambar da kuka sani gaskiya ce"] }
          ],
          tryIt: "Aikin ƙarshe: ku nemi mataimaki girke-girke mai sauƙi na mutum huɗu, ku nemi ya sa matakan a gajerun layuka masu lamba, ku yi tambayar biyo baya ɗaya, sannan ku tabbatar da gaskiya ɗaya, kamar zafin girki, a shafin intanet amintacce ko wurin wanda kuka amince da shi.",
          youCanNow: "amfani da mataimakin AI don aiki na gaske, tabbatar da amsarsa, da kiyaye bayananku na sirri.",
          quickCheck: [
            { objective: "O6", q: "Wanne a cikin waɗannan ne kada ku taɓa rubutawa mataimakin AI?", options: ["Lambar Medicare ɗinku", "Girke-girken da kuka fi so", "Sunan tsuntsun da kuka gani", "Tambaya game da lambunku"], answer: 0, why: "Lambobin Medicare, Social Security da banki na sirri ne; ku yi amfani da madadi a maimakon haka." },
            { objective: "O6", q: "Wani tes ya ce za a rufe asusunku yau sai dai idan kun aika code ɗin da kuka samu yanzu. Me za ku yi?", options: ["Ku aika code ɗin da sauri", "Ku amsa da lambar bankinku", "Kada ku bayar da code ɗin; ku kira kamfanin ta lambar da kuka sani", "Ku tura shi ga jikokinku"], answer: 2, why: "Gaggauta ku da neman code alamun gargaɗin zamba ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Samun amsoshi masu kyau lafiya",
        questions: [
          { objective: "O4", q: "Amsar tana amfani da kalmomin da ba ku fahimta ba. Me za ku rubuta?", options: ["\"Ka tsawaita ta.\"", "Lambar Medicare ɗinku", "Babu komai; ku rufe manhajar", "\"Don Allah ka yi amfani da kalmomi masu sauƙi.\""], answer: 3, why: "Tambayar biyo baya tana neman mataimakin ya canja amsarsa." },
          { objective: "O5", q: "Wanne a cikin waɗannan ya kamata ku tabbatar wurin majiya amintacciya KOYAUSHE?", options: ["Yawan maganin da za ku sha", "Barkwanci", "Waƙar ranar haihuwa", "Jerin sunayen furanni"], answer: 0, why: "Dole a tabbatar da bayanan lafiya da magani wurin likitanku ko mai sayar da magani." },
          { objective: "O5", q: "Mene ne ma'anar \"hallucination\" a AI?", options: ["Allon ya yi haske sosai", "Wani nau'in manhaja", "AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne", "Intanet mai jinkiri"], answer: 2, why: "AI yana iya ƙirƙirar bayanan da suke kama da na gaske." },
          { objective: "O6", q: "Me ya kamata ku rubuta a maimakon lambar Medicare ɗinku a cikin prompt?", options: ["Ainihin lambar", "Rabin lambar", "Lambar bankinku", "Madadi kamar \"[lambata]\""], answer: 3, why: "Madadi yana ba ku taimako ba tare da bayyana bayanan sirri ba." },
          { objective: "O6", q: "Wani mai kira yana magana kamar jikanku, yana neman katin kyauta nan take. Me za ku yi?", options: ["Ku saye su da sauri", "Ku ba shi code ɗin da ke wayarku", "Ku katse wayar ku kira jikanku ta lambar da kuka sani", "Ku aika bayanan bankinku"], answer: 2, why: "'Yan damfara suna iya kwaikwayon murya; gaggawa da katin kyauta alamun gargaɗi ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Tsofaffi: Amfani da Mataimakan AI",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin mataimakin AI shi ne:", options: ["Mutum a cibiyar amsa kira", "Shirin kwamfuta da kuke hira da shi", "Kamfanin waya", "Shago"], answer: 1, why: "Shiri ne da kuke rubuta masa ko magana da shi." },
      { objective: "O1", q: "Wanne ne amfani mai kyau na mataimakin AI?", options: ["Rubuta daftarin saƙon godiya ga aboki", "Yanke yawan maganinku", "Sa hannu a takardu a madadinku", "Sanin kuɗin da ke bankinku"], answer: 0, why: "Rubuta daftarin saƙonni da katuna yana ɗaya daga cikin ƙarfinsa." },
      { objective: "O1", q: "Wane ne mai iko idan kuna amfani da mataimakin AI?", options: ["Ku", "Kamfanin waya", "AI", "Babu kowa"], answer: 0, why: "Ku ne kuke yanke abin da za ku tambaya da abin da za ku yarda da shi." },
      { objective: "O2", q: "Wanne ne sanannen mataimakin AI kyauta?", options: ["Na'urar lissafi (calculator)", "Google Gemini", "Firinta", "Rimot (remote control)"], answer: 1, why: "Gemini, ChatGPT da Copilot sanannun mataimaka ne masu kyauta." },
      { objective: "O2", q: "Wuri mai aminci don samun manhajar AI a tablet shi ne:", options: ["Hanyar haɗi a cikin imel daga baƙo", "Tallar da ke tasowa (pop-up)", "Shagon manhajoji na hukuma", "Kowane shafin intanet"], answer: 2, why: "Ku saka daga shagon manhajoji na hukuma kaɗai." },
      { objective: "O2", q: "Wane adireshi ne ke buɗe ChatGPT a kwamfuta?", options: ["chatgpt.gift", "chatgpt-prize.net", "free-chatgpt.win", "chatgpt.com"], answer: 3, why: "chatgpt.com shi ne adireshin hukuma." },
      { objective: "O2", q: "A ina kuke yawan rubuta tambayarku?", options: ["A kan alamar batir", "A kan agogo", "A akwatin saƙo kusa da ƙasa", "A cikin kyamara"], answer: 2, why: "Akwatin saƙo sau da yawa yana cewa \"Ask anything\" ko \"Message\"." },
      { objective: "O2", q: "Kuna son faɗin tambayarku da baki. Za ku taɓa:", options: ["Maɓallin makirofo", "Kyamara", "Maɓallin kunnawa da kashewa", "Maɓallin ƙara sauti"], answer: 0, why: "Maɓallin makirofo yana barin ku yi magana maimakon rubutu." },
      { objective: "O3", q: "Mene ne prompt?", options: ["Ƙararrawar tunatarwa", "Ƙarshen adireshin shafi", "Cajar waya", "Abin da kuke rubutawa ko faɗa wa mataimakin"], answer: 3, why: "Prompt ita ce buƙatarku ga mataimakin." },
      { objective: "O3", q: "Prompt mai kyau ya haɗa da:", options: ["Kalma ɗaya kawai", "Abin da kuke buƙata, halin da kuke ciki, da yadda kuke son amsar", "Kalmar sirrinku", "Lambar Social Security ɗinku"], answer: 1, why: "Waɗannan sassa uku suna kawo amsa mai amfani." },
      { objective: "O3", q: "Wane prompt ne zai fi yiwuwa ya kawo amsa mafi amfani?", options: ["\"lambu\"", "\"Ganyen tumatirina suna da ɗigon ruwan ɗorawa. Me zai iya jawo haka? Ka amsa da gajerun matakai masu sauƙi.\"", "\"shuke-shuke\"", "\"taimako\""], answer: 1, why: "Yana ba da buƙata, halin da ake ciki da tsarin amsa." },
      { objective: "O4", q: "Amsar farko ta yi tsawo sosai. Kuna iya:", options: ["Kashe na'urar", "Karɓar ta kawai", "Biyan kuɗi don gyara ta", "Tambaya: \"Ka gajarta ta.\""], answer: 3, why: "Tambayoyin biyo baya suna canja amsar." },
      { objective: "O4", q: "Wace ce tambayar biyo baya mai amfani?", options: ["\"Ka sa ta a matakai masu lamba.\"", "\"Ga lambar katina.\"", "\"Goge wayata.\"", "\"Aika kuɗi.\""], answer: 0, why: "Tana neman canji mai sarari ga amsar." },
      { objective: "O4", q: "Rubutun da ke kan allo ya yi ƙanƙanta sosai. Me za ku iya yi?", options: ["Ku haƙura", "Ku sayi sabuwar waya yau", "Ku ƙara girman rubutu a saitunan na'urarku ko ku roƙi wani ya nuna muku", "Ku rubuta kalmar sirrinku"], answer: 2, why: "Na'urori suna da saitin girman rubutu; wani a iyali ko mataimakin zai iya nuna muku yadda ake yi." },
      { objective: "O5", q: "Mataimakin ya ba ku lambar wayar wani asibiti. Ya kamata ku:", options: ["Ba shi lambar Medicare ɗinku", "Kira ta ba tare da tabbatarwa ba", "Saka ta a intanet", "Tabbatar da ita a shafin asibitin da kansa ko a wasiƙa daga asibitin"], answer: 3, why: "AI yana iya ba da lambobi marasa gaskiya; ku tabbatar da majiyar hukuma." },
      { objective: "O5", q: "Shafukan gwamnatin Amurka na hukuma suna ƙarewa da:", options: [".win", ".gift", ".gov", ".xyz"], answer: 2, why: "Shafukan gwamnatin Amurka suna amfani da .gov." },
      { objective: "O5", q: "Don tambayar magani, mafi kyawun mutumin da zai tabbatar da amsar shi ne:", options: ["Baƙo a intanet", "Likitanku ko mai sayar da magani", "AI ɗin da kansa", "Tallar da ke tasowa"], answer: 1, why: "Dole a tabbatar da bayanan lafiya wurin ƙwararre." },
      { objective: "O6", q: "Wanne ne kada ku TAƁA rubutawa mataimakin AI?", options: ["Lambar katin bankinku", "\"Ka ba ni misali.\"", "\"Ka yi amfani da kalmomi masu sauƙi.\"", "\"Ka sa ta fi nuna ƙauna.\""], answer: 0, why: "Lambobin banki da kati bayanan sirri ne." },
      { objective: "O6", q: "Wani yana neman code ɗin da aka turo wayarku ta tes yanzu. Ya kamata ku:", options: ["Kada ku taɓa bayar da shi", "Saka shi a intanet", "Tura masa shi ta tes", "Karanta masa shi"], answer: 0, why: "Wannan code yana kare asusunku; ofisoshin gaske ba sa neman sa." },
      { objective: "O6", q: "Idan wani kira bai yi muku daidai ba, mataki mafi aminci shi ne:", options: ["Ci gaba da magana", "Katse wayar ku sake kira ta lambar da kuka sani gaskiya ce", "Ba su adireshinku", "Aika ɗan kuɗi kaɗan"], answer: 1, why: "Sake kira ta lambar da kuka sani yana hana yawancin zamba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 9, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An buɗe mataimakin", objective: "O2", notYet: "Ya buƙaci wani ya buɗe masa mataimakin, ko ya yi amfani da manhaja ko shafin da ba na hukuma ba.", meets: "Ya buɗe mataimaki na hukuma kuma ya nemo akwatin saƙo ko makirofo.", exceeds: "Zai iya nuna wa aboki ko wani a iyali yadda ake buɗe shi." },
      { name: "Buƙata a sarari", objective: "O3", notYet: "Prompt ɗin ba shi da sarari, misali \"girke-girke\".", meets: "Ya nemi girke-girke mai sauƙi na mutum huɗu, tare da halin da ake ciki da yadda amsar za ta kasance.", exceeds: "Ya ƙara wani bayani kamar abincin da wani ba ya iya ci, kuma amsar farko ta kusa shiryawa." },
      { name: "An sauƙaƙe ta", objective: "O4", notYet: "Ya yi amfani da amsar farko kamar yadda take, ko da tana da wuyar karantawa.", meets: "Ya nemi gajerun matakai masu lamba da ƙarin tambayar biyo baya ɗaya.", exceeds: "Ya nemi canje-canje ɗaya bayan ɗaya kuma zai iya faɗin abin da kowanne ya gyara." },
      { name: "An tabbatar da gaskiya", objective: "O5", notYet: "Ya amince da wata gaskiya kamar zafin girki ba tare da tabbatarwa ba.", meets: "Ya tabbatar da gaskiya ɗaya a shafin intanet amintacce ko wurin mutumin da ya amince da shi.", exceeds: "Zai iya faɗin inda ya tabbatar da ita da ko ta yi daidai." },
      { name: "Babu bayanan sirri", objective: "O6", notYet: "Prompt ɗin yana da lambar sirri, adireshi ko kalmar sirri.", meets: "Babu bayanan sirri a kowane prompt.", exceeds: "Zai iya ambaton alamun gargaɗin zamba guda biyu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da mataimakin AI don kati, wasiƙa, girke-girke ko tambaya cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun gane kuma sun guje wa kiran zamba ko saƙon zamba",
      "Masu koyo da suka fara wani kwas na Tsofaffi da Fasaha cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani, tablet ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Gilashin karatu idan ana buƙata, da takarda da alƙalami don rubutu",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku tafi a hankali, kuma ku haɗa masu koyo da mai taimako ko jika a karon farko da suke buɗe manhajar.",
      "Ku nuna yadda ake ƙara girman rubutu a na'urar kowane mai koyo kafin a fara.",
      "Kada ku taɓa neman masu koyo su rubuta bayanan sirri na gaske; ku yi amfani da madadi kamar [lambata].",
      "Ku tunatar da masu koyo cewa dole a tabbatar da amsoshi game da lafiya, magani da kuɗi wurin likita, mai sayar da magani ko ofishin hukuma.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
