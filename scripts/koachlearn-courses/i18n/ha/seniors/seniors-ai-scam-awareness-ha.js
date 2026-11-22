"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-scam-awareness.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-scam-awareness-ha",
  lang: "ha",
  translationOf: "seniors-ai-scam-awareness",
  category: "Seniors and Technology",
  name: "Tsaron AI da Gane Zamba ga Tsofaffi",
  skills: "Gane alamomi huɗu na zamba, Gane dabarun murya da saƙon AI, Duba saƙo lafiya, Ƙin biyan kuɗi mai haɗari, Kai rahoton zamba",
  outcome: "duba kira, saƙon tes ko imel, ku yanke ko yana da alamomin zamba, ku tabbatar da shi lafiya ta lambar da kuka riga kuka amince da ita, kuma ku san inda za ku kai rahoto.",
  about: [
    "Wannan kwas na manya ne masu shekaru, da mutanen da ke kula da su, waɗanda ke son su riga 'yan damfara mataki ɗaya. 'Yan damfara yanzu suna amfani da AI don rubuta saƙonni masu kyau har ma su kwaikwayi murya, don haka tsofaffin alamomin gargaɗi sun fi muhimmanci fiye da kowane lokaci.",
    "Za ku koyi alamomi huɗu na zamba, yadda dabarun AI ke aiki, al'ada mai sauƙi ta Tsaya, Duba, Kira, da inda ake kai rahoton zamba a Amurka.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku yi ayyukan \"Gwada yanzu\"; suna gina katin tsaronku daga zamba. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Yaudara ba alamar rauni ba ce: waɗannan masu laifi ƙwararru ne, kuma kowa za a iya kai masa hari."
  ],
  finalTask: "Ku yi katin tsaronku daga zamba: ku rubuta lambobin waya uku da kuka amince da su (wani a iyali, bankinku daga bayan katinku, da ofishin likitanku), kalmar sirrin iyalinku, matakan Tsaya, Duba, Kira, da wuraren kai rahoton zamba. Sannan ku yanke hukunci kan saƙonni biyu na misali ta amfani da alamomi huɗu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya masu shekaru a Amurka da ke samun kira, saƙon tes da imel kowace rana, wasu daga cikinsu zamba ne. Da yawa suna zaune su kaɗai, suna da ajiya ko tallafi, kuma suna da jikoki da muryoyinsu ko hotunansu ke kan intanet.",
    startingPoint: "Suna amfani da waya, kuma sau da yawa imel. Da yawa sun san akwai zamba amma ba su ji labarin kwaikwayon murya da AI ba, kuma suna iya amincewa da saƙonnin da ke da rubutu mai kyau ko tambarin hukuma.",
    gap: "AI yana bar 'yan damfara su kwaikwayi muryar wani da ake ƙauna kuma su rubuta saƙonnin bogi marasa kuskure, don haka tsofaffin alamomi kamar kuskuren rubutu ba sa aiki yanzu. Tsofaffi suna buƙatar gane alamomi huɗu, amfani da Tsaya, Duba, Kira, kare kuɗinsu da bayanansu, da sanin inda za su kai rahoto, don kada su rasa ajiyarsu ko su ji kunyar neman taimako.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: kowace irin waya; kwamfuta ko tablet don imel da tallace-tallacen da ke tasowa (pop-up)",
      "Lokaci: kusan minti 5 a kowane darasi, a hankali",
      "Bayanan ofisoshin Amurka da layukan taimako suna iya canjawa; masu koyo suna dubawa a shafukan hukuma",
      "Ba a amfani da lambobin sirri na gaske a atisaye; saƙonnin misali kawai"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku kira, saƙon tes ko imel", action: "gane alamomi huɗu na zamba: yin kamar wani, matsala ko kyauta, matsa lamba, da hanyar biya da ba a saba ba", standard: "kuna faɗin kowace alama da saƙon ya nuna" },
    { id: "O2", condition: "Idan mai kira yana kama da wani da kuke ƙauna da ke cikin gaggawa", action: "katse wayar ku tabbatar da wanda kuke ƙaunar ko iyayensa ta lambar da kuka riga kuke da ita", standard: "ba tare da aika kuɗi kafin ku tabbatar ba" },
    { id: "O3", condition: "Idan aka ba ku saƙon tes, imel, shafin intanet ko pop-up da ba ku zata ba", action: "tuntuɓar kamfanin da kanku ta rubuta ainihin adireshinsa ko kiran lamba daga katinku ko takardar kuɗi", standard: "ba tare da danna hanyar haɗi (link) ko kiran lambar da ke cikin saƙon ba" },
    { id: "O4", condition: "Duk lokacin da saƙo ko kira ya damu ku", action: "amfani da matakan Tsaya, Duba, Kira", standard: "ta amfani da lambar da kuka riga kuka amince da ita kawai" },
    { id: "O5", condition: "Idan mai kira ko saƙo da ba ku zata ba yana neman bayanai ko kuɗi", action: "ƙin bayar da lambobin sirri, kalmomin sirri, code ko biyan kuɗi ta hanyar da ba a saba ba, da kiran bankinku idan kun riga kun bayar", standard: "ba ku raba komai da wanda ya tuntuɓe ku ba zato ba tsammani" },
    { id: "O6", condition: "Bayan zamba ko ƙoƙarin zamba", action: "faɗin inda za a kai rahoto da samun taimako a Amurka", standard: "kuna faɗin aƙalla wurare biyu daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda zamba ke aiki a yau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Alamomi huɗu na zamba",
          minutes: 5,
          goal: "Faɗi alamomi huɗu da ke nuna cewa kira, saƙon tes ko imel zamba ne mai yiwuwa.",
          text: [
            "Federal Trade Commission (FTC), wato ofishin gwamnatin Amurka mai kare masu saye, ya bayyana alamomi huɗu da aka saba gani na zamba. Ku koyi waɗannan huɗu za ku kama yawancin zamba, ko da AI ko babu.",
            "1. Suna yin kamar su wani ne da kuka amince da shi: ofishin gwamnati, bankinku, sanannen kamfani, ƙungiyar agaji ko wani a iyali. 2. Suna cewa akwai matsala ko kyauta: kuna bin bashi, an kulle asusunku, ko kun ci wani abu amma dole ku biya kuɗi. 3. Suna matsa muku ku yi abu yanzu, kuma suna iya cewa kada ku katse waya ko kada ku faɗa wa kowa. 4. Suna son biya ta hanyar da ba a saba ba: katin kyauta (gift card), tura kuɗi ta waya (wire transfer), kuɗin intanet (cryptocurrency), manhajar biya, ko cakin da suke so ku karɓi kuɗinsa sannan ku mayar musu da wani kaso.",
            "Idan kun ga ko da alama ɗaya daga cikin waɗannan, ku rage sauri ku tabbatar kafin ku yi komai."
          ],
          words: [["FTC", "Federal Trade Commission, ofishin gwamnatin Amurka da ke kare mutane daga zamba."], ["Yin kamar wani (impersonate)", "yin kamar kai wani mutum ne daban."]],
          slides: [
            { title: "Alama ta 1: Suna yin kamar wani", bullets: ["Gwamnati, banki, kamfani, ƙungiyar agaji", "Har ma wani a iyali"] },
            { title: "Alama ta 2: Matsala ko kyauta", bullets: ["\"Kuna bin bashi\"", "\"An kulle asusunku\"", "\"Kun ci kyauta, ku biya kuɗi kawai\""] },
            { title: "Alama ta 3: Matsa lamba", bullets: ["\"Ku yi yanzu\"", "\"Kada ku katse waya\"", "\"Kada ku faɗa wa kowa\""] },
            { title: "Alama ta 4: Biya mai ban mamaki", bullets: ["Katin kyauta ko tura kuɗi ta waya (wire)", "Cryptocurrency ko manhajojin biya", "Karɓar kuɗin caki sannan mayar da wani kaso"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Ku ɗauki ƙaramin kati ko takarda. Ku rubuta \"Katin tsarona daga zamba\" a sama, sannan ku rubuta alamomi huɗu da kalmominku.",
          youCanNow: "faɗin alamomi huɗu na zamba.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne ɗaya daga cikin alamomi huɗu na zamba?", options: ["Saƙo daga lambar da kuka ajiye da kanku", "Wasiƙar da kuke jira", "Suna son biya da katin kyauta ko tura kuɗi ta waya", "Aboki yana tambayar lafiyarku"], answer: 2, why: "Biya ta hanyar da ba a saba ba, kamar katin kyauta ko tura kuɗi ta waya, ɗaya ne daga cikin alamomi huɗu." },
            { objective: "O1", q: "Mai kira ya ce kuna bin harajin gwamnati kuma dole ku biya yau ko a kama ku. Alamomi nawa kuka gani, kuma me za ku yi?", options: ["Babu; ku biya don ku tsira", "Alamomi da yawa: matsala da matsa lamba; ku rage sauri ku tabbatar kafin ku yi komai", "Alama ɗaya, don haka dole gaskiya ne", "Babu alama domin gwamnati ce"], answer: 1, why: "Matsala tare da matsa lamba don yin abu yanzu alamomin zamba ne; ko alama ɗaya na nufin ku rage sauri ku tabbatar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kwaikwayon murya da AI da gaggawar iyali ta bogi",
          minutes: 5,
          goal: "Gane kiran gaggawa na bogi da ke iya amfani da kwafin muryar wanda kuke ƙauna da aka yi da AI.",
          text: [
            "Da ɗan gajeren rikodin muryar wani, kamar bidiyon da aka saka a intanet, 'yan damfara suna iya amfani da AI su yi kwafin wannan murya. Sannan su kira kaka, suna kuka ko a firgice: \"Kaka, na yi haɗari, ina buƙatar kuɗin beli, don Allah kada ki faɗa wa Mama.\"",
            "Wani lokaci mutum na biyu yana shigowa layin yana yin kamar lauya ne ko ɗan sanda. Suna neman kuɗi a hannu, katin kyauta ko tura kuɗi ta waya, har ma suna iya turo wani mai karɓar kaya (courier) ya zo ƙofarku ya karɓi kuɗi.",
            "Muryar tana iya zama kamar ta gaske, amma alamomi huɗu suna nan: yin kamar wani, matsala, matsa lamba da ɓoye abu, da biya ta hanyar da ba a saba ba. Ku katse wayar ku kira wanda kuke ƙaunar, ko iyayensa, ta lambar da kuka riga kuke da ita. Kalmar sirrin iyali da iyalinku kaɗai suka sani ƙarin tabbaci ne mai ƙarfi."
          ],
          steps: ["Ku lura da alamomin: firgici, ɓoye abu, neman kuɗi.", "Ku katse wayar, ko da muryar tana kama da ta gaske.", "Ku kira wanda kuke ƙaunar ko iyayensa ta lambar da kuka riga kuke da ita.", "Ku nemi kalmar sirrin iyalinku idan kuna da ita."],
          words: [["Kwaikwayon murya (voice cloning)", "amfani da AI don kwafin muryar wani daga ɗan gajeren rikodi."], ["Mai karɓar kaya (courier)", "mutumin da aka turo don karɓa ko kai wani abu."]],
          slides: [
            { title: "AI yana iya kwafin murya", bullets: ["Daga ɗan gajeren bidiyo ko rikodi", "Tana iya yin kama da muryar jika daidai"] },
            { title: "Gaggawar bogi", bullets: ["Haɗari, kamu ko asibiti", "\"Kada ki faɗa wa Mama\"", "Kuɗi a hannu, katin kyauta, wire, ko courier a ƙofarku"] },
            { title: "Abin da za ku yi", bullets: ["Ku katse waya, ko da tana kama da ta gaske", "Ku kira su ta lambar da kuke da ita", "Ku nemi kalmar sirrin iyalinku"] }
          ],
          tryIt: "A katin tsaronku, ku rubuta sunaye da lambobin waya na mutane biyu a iyalinku da za ku kira don tabbatar da gaggawa. Sannan ku kira ɗaya daga cikinsu ku yarda da kalmar sirrin iyali.",
          youCanNow: "gane kiran gaggawar iyali na bogi da tabbatar da shi lafiya.",
          quickCheck: [
            { objective: "O2", q: "Ta yaya 'yan damfara ke iya kwafin muryar wanda kuke ƙauna?", options: ["Sai sun haɗu da shi ido da ido kawai", "Ba za su iya ba", "Ta hanyar hasashe", "Da AI da ɗan gajeren rikodi, kamar bidiyon da aka saka a intanet"], answer: 3, why: "Ɗan gajeren rikodi ya isa AI ya kwafi murya." },
            { objective: "O2", q: "Wata murya mai kuka kamar ta jikarku ta ce tana buƙatar kuɗin beli kuma kada ku faɗa wa mahaifiyarta. Me za ku yi?", options: ["Ku katse waya ku kira ta ko iyayenta ta lambar da kuka riga kuke da ita", "Ku aika kuɗin da sauri", "Ku ɓoye abin kamar yadda ta nema", "Ku ba lauyan lambar bankinku"], answer: 0, why: "Ko da muryar tana kama da ta gaske, ku sake kira ta lambar da kuka amince da ita kafin ku yi komai." }
          ]
        },
        {
          objectives: ["O3","O1"],
          title: "Saƙonni, shafukan intanet da pop-up na bogi",
          minutes: 5,
          goal: "Gane saƙon tes, imel, shafin intanet ko gargaɗin pop-up na bogi.",
          text: [
            "AI yana taimaka wa 'yan damfara su rubuta saƙon tes da imel marasa kuskuren rubutu da ke kama da sun fito daga bankinku, kamfanin kai kaya, Medicare (inshorar lafiyar tsofaffi ta Amurka) ko Amazon. Rubutu mai kyau ba ya tabbatar cewa saƙo na gaske ne yanzu.",
            "Dabaru da aka saba gani: \"Ba a iya kai kayanku ba, ku danna nan.\" \"Akwai abin da ba a saba gani ba a asusunku, ku shiga yanzu.\" Pop-up a kwamfutarku da ke cewa tana da ƙwayar cuta (virus) kuma dole ku kira wata lamba. Waɗannan hanyoyin haɗi da lambobi suna kai ku wurin ɗan damfara.",
            "Kada ku danna hanyoyin haɗi ko ku kira lambobin da ke cikin saƙonnin da ba ku zata ba. Ku rufe saƙon, ku je ainihin shafin kamfanin ta rubuta adireshin da kanku, ko ku kira lambar da ke bayan katinku ko a takardar kuɗi da kuka amince da ita. Medicare ta ce ba za ta taɓa kiran ku don sayar muku da wani abu ko ta zo gidanku ba."
          ],
          steps: ["Kada ku danna hanyar haɗi ko ku kira lambar da ke cikin saƙon.", "Ku rufe saƙon ko pop-up ɗin.", "Ku rubuta ainihin adireshin kamfanin da kanku, ko ku kira lambar da ke katinku ko takardar kuɗi.", "Idan pop-up ya ƙi rufewa, ku kashe na'urar ku tambayi wanda kuka amince da shi."],
          words: [["Hanyar haɗi (link)", "rubutun da kuke taɓawa ko dannawa da ke kai ku wani shafin intanet."], ["Pop-up", "akwatin da ke bayyana ba zato ba tsammani a allonku."], ["Phishing (kamun bayanai)", "saƙon bogi da ke ƙoƙarin sa ku bayar da bayanan sirri."]],
          slides: [
            { title: "Rubutu mai kyau ba shaida ba ne", bullets: ["AI yana rubuta saƙonnin da ke kama da na gaske", "Banki, kai kaya, Medicare, Amazon"] },
            { title: "Dabaru da aka saba gani", bullets: ["\"Ba a iya kai kayanku ba\"", "\"Ku shiga yanzu, akwai abin da ba a saba gani ba\"", "\"Virus! Ku kira wannan lamba\""] },
            { title: "Abin da za ku yi", bullets: ["Kada ku danna ko ku kira daga saƙon", "Ku rubuta ainihin adireshin da kanku", "Ku kira lambar da ke katinku ko takardar kuɗi"] }
          ],
          sources: [{ name: "Medicare: Reporting Medicare fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "A katin tsaronku, ku rubuta lambar wayar bankinku da kuka kwafo daga bayan katin bankinku, da lambar ofishin likitanku daga takardar kuɗi ko katin ganawa. Waɗannan su ne lambobinku amintattu.",
          youCanNow: "gane saƙonni da pop-up na bogi, da tuntuɓar kamfanoni lafiya ta lambobin da kuka amince da su.",
          quickCheck: [
            { objective: "O3", q: "Me yasa rubutu marar kuskure ba ya tabbatar cewa saƙo na gaske ne yanzu?", options: ["Bankuna ba sa duba rubutu", "AI yana taimaka wa 'yan damfara su rubuta saƙonni marasa kuskure", "Gwamnati tana duba duk imel", "Rubutu ba shi da muhimmanci a saƙon tes"], answer: 1, why: "AI yana rubuta saƙonni masu tsabta da ke kama da na gaske, don haka rubutu mai kyau ba ya tabbatar da komai." },
            { objective: "O3", q: "Imel ya ce akwai abin da ba a saba gani ba a asusun bankinku, kuma ku shiga ta wata hanyar haɗi. Me za ku yi?", options: ["Ku danna hanyar haɗin ku shiga", "Ku amsa da kalmar sirrinku", "Ku kira lambar da ke cikin imel ɗin", "Ku rufe shi ku rubuta ainihin adireshin bankinku da kanku, ko ku kira lambar da ke katinku"], answer: 3, why: "Hanyoyin haɗi da lambobi a saƙonnin da ba ku zata ba suna kai ku wurin ɗan damfara; ku tuntuɓi bankin da kanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda zamba ke aiki a yau",
        questions: [
          { objective: "O1", q: "Wanne ne ɗaya daga cikin alamomi huɗu na zamba?", options: ["Saƙon yana da kwanan wata a sarari", "Kun san mai aikawa sosai kuma kuna jiran saƙon", "Suna matsa muku ku yi abu yanzu-yanzu", "Ya zo ta gidan waya na yau da kullum"], answer: 2, why: "Matsa lamba don yin abu yanzu alamar zamba ce da aka sani." },
          { objective: "O1", q: "Wani yana neman ku biya \"kuɗin gwamnati\" da katin kyauta. Wannan:", options: ["Alamar zamba ce", "Abu ne na yau da kullum", "Dokar haraji ce", "Dokar banki ce"], answer: 0, why: "Ofisoshin gaske ba sa karɓar biya da katin kyauta." },
          { objective: "O2", q: "Mai kira yana kama da jikanku daidai kuma yana roƙon kuɗin beli. Me za ku yi?", options: ["Ku aika kuɗin da sauri", "Ku jira courier", "Ku ba su lambar katinku", "Ku katse waya ku kira jikanku ko iyayensa ta lambar da kuke da ita"], answer: 3, why: "AI yana iya kwafin murya; tabbatarwa ta lambar da kuka sani hanya ce mai aminci." },
          { objective: "O3", q: "Imel yana da rubutu marar kuskure da tambarin bankinku. Hakan ya tabbatar cewa na gaske ne?", options: ["Eh, koyaushe", "A'a, AI yana sa saƙonnin bogi su yi kama da na gaske", "Eh, idan yana da tsawo", "Eh, idan yana da hanyar haɗi"], answer: 1, why: "Rubutu mai kyau da tambari suna da sauƙin kwafi ga 'yan damfara." },
          { objective: "O3", q: "Pop-up ya ce kwamfutarku tana da virus kuma ku kira wata lamba. Ya kamata ku:", options: ["Kira lambar", "Kada ku kira; ku rufe shi, ko ku kashe na'urar ku tambayi wanda kuka amince da shi", "Biya don a gyara", "Ba su damar shiga kwamfutarku daga nesa"], answer: 1, why: "Gargaɗin virus na pop-up mai lambar waya zamba ce da aka saba gani." }
        ]
      }
    },
    {
      name: "Babi na 2: Kare kanku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Al'adar Tsaya, Duba, Kira",
          minutes: 4,
          goal: "Yi amfani da matakai uku duk lokacin da saƙo ko kira ya damu ku.",
          text: [
            "'Yan damfara suna nasara ta hanyar gaggauta ku. Mafi kyawun kariyarku ita ce al'adar da kuke yi kowane lokaci: Tsaya, Duba, Kira.",
            "Tsaya: kada ku danna, ku biya, ko ku bayar da wani bayani. Ba laifi ku katse waya ga kowa, ko da sun ce su 'yan sanda ne ko banki. Duba: ku nemi alamomi huɗu. Ku yi magana da wanda kuka amince da shi kafin ku yi wani abu. Kira: ku tuntuɓi mutumin ko kamfanin da kanku, ta lambar da ke katin tsaronku, katin bankinku, takardar kuɗi ko shafin hukuma da kuka rubuta adireshinsa da kanku.",
            "Kuna kuma iya tambayar mataimakin AI ra'ayi na biyu. Ku liƙa saƙon, bayan kun cire duk bayanan sirri, ku tambaya: \"Shin wannan saƙo yana da alamomin zamba?\" Ku ɗauki amsarsa a matsayin taimako, ba hukuncin ƙarshe ba; matakanku na Tsaya, Duba, Kira suna zuwa farko."
          ],
          steps: ["Tsaya: kada ku danna, ku biya ko ku raba komai.", "Duba: ku nemi alamomi huɗu ku yi magana da wanda kuka amince da shi.", "Kira: ku yi amfani da lambar da kuka riga kuka amince da ita, ba ta cikin saƙon ba."],
          words: [["Ra'ayi na biyu", "neman wani ya duba wani abu kafin ku yanke shawara."]],
          slides: [
            { title: "Tsaya", bullets: ["Kada ku danna, ku biya ko ku raba", "Ba laifi ku katse waya ga kowa"] },
            { title: "Duba", bullets: ["Ku nemi alamomi huɗu", "Ku yi magana da wanda kuka amince da shi"] },
            { title: "Kira", bullets: ["Ku yi amfani da lambar da kuka riga kuka amince da ita", "Kada ku taɓa amfani da lamba daga saƙon"] },
            { title: "AI a matsayin mai taimako", bullets: ["Ku fara cire bayanan sirri", "Ku tambaya: \"Shin wannan yana da alamomin zamba?\"", "Matakanku suna zuwa farko"] }
          ],
          tryIt: "Ku rubuta Tsaya, Duba, Kira a katin tsaronku. Sannan ku tambayi mataimakin AI: \"Shin wannan saƙo yana da alamomin zamba? An riƙe kayanku. Ku biya $1.99 ta wannan hanyar haɗi yau ko za a mayar da shi.\" Ku kwatanta amsarsa da alamomi huɗu.",
          youCanNow: "amfani da al'adar Tsaya, Duba, Kira da tambayar AI ra'ayi na biyu a hankali.",
          quickCheck: [
            { objective: "O4", q: "A Tsaya, Duba, Kira, mece ce ma'anar Kira?", options: ["Kiran lambar da ke cikin saƙon", "Sake kiran wanda ya kira ku", "Tuntuɓar mutumin ko kamfanin ta lambar da kuka riga kuka amince da ita", "Kiran aboki ya biya a madadinku"], answer: 2, why: "Kira na nufin amfani da lamba daga katin tsaronku, katin banki, takardar kuɗi ko shafin da kuka rubuta da kanku." },
            { objective: "O4", q: "Mai kira ya ce shi ɗan sanda ne kuma kada ku katse waya. Me za ku iya yi?", options: ["Ku katse waya; ba laifi ku katse waya ga kowa", "Ku tsaya a layi ko ta halin ƙaƙa", "Ku ba shi adireshinku", "Ku biya shi don ya gama kiran"], answer: 0, why: "Tsaya na nufin kuna iya katse waya ga kowa, ko wanda ya ce shi ɗan sanda ne." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kare kuɗinku da bayananku",
          minutes: 5,
          goal: "Jera bayanai da hanyoyin biya da ba za ku taɓa bayarwa ga mai kira ko saƙo da ba ku zata ba.",
          text: [
            "Kada ku taɓa bayar da waɗannan ga duk wanda ya tuntuɓe ku ba zato ba tsammani: lambar Social Security (lambar shaidar Amurka) ko ta Medicare, lambobin banki ko kati, kalmomin sirri, ko code da aka turo wayarku ta tes. Bankinku ya riga ya san lambar asusunku; banki na gaske ba zai nemi kalmar sirrinku ko code da aka turo ta tes ba.",
            "Kada ku taɓa biyan baƙo da katin kyauta, tura kuɗi ta waya, cryptocurrency ko manhajar biya, kuma kada ku taɓa saka caki a banki sannan ku mayar da wani kaso na kuɗin. FTC ta ce ofisoshin gwamnati na gaske ba za su taɓa cewa ku motsa kuɗi don \"kare\" shi, ku cire kuɗi a hannu, ko ku sayi zinariya ba.",
            "Kada ku taɓa bari mai kira ya haɗu da kwamfutarku don ya \"gyara\" ta. Idan kun riga kun bayar da kuɗi ko bayanai, ku yi sauri: ku kira bankinku ta lambar da ke katinku ku faɗa masa abin da ya faru."
          ],
          steps: ["Kada ku taɓa raba lambar Social Security, Medicare, banki ko kati da wanda ya tuntuɓe ku ba zato.", "Kada ku taɓa raba kalmomin sirri ko code da aka turo ta tes.", "Kada ku taɓa biyan baƙi da katin kyauta, wire, crypto ko manhajojin biya.", "Idan kun riga kun biya ko kun raba, ku kira bankinku nan take ta lambar da ke katinku."],
          words: [["Code da aka turo ta tes", "gajeriyar lamba da aka turo wayarku don tabbatar cewa ku ne kuke shiga asusu."], ["Tura kuɗi ta waya (wire transfer)", "aika kuɗi ta hanyar lantarki; yana da wuyar dawowa sosai."]],
          slides: [
            { title: "Kada ku taɓa raba", bullets: ["Lambar Social Security ko Medicare", "Lambobin banki ko kati, kalmomin sirri", "Code da aka turo wayarku ta tes"] },
            { title: "Kada ku taɓa biyan baƙi da", bullets: ["Katin kyauta ko tura kuɗi ta waya", "Cryptocurrency ko manhajojin biya", "Kuɗi daga cakin da kuka karɓa yanzu"] },
            { title: "Ofisoshin gaske ba sa cewa ku", bullets: ["Motsa kuɗi don \"kare\" shi", "Cire kuɗi a hannu ko sayi zinariya"] },
            { title: "Kun riga kun biya?", bullets: ["Ku kira bankinku nan take", "Ku yi amfani da lambar da ke katinku"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "A katin tsaronku, ku rubuta: \"Ba na taɓa raba lambobina, kalmomin sirrina ko code da duk wanda ya fara tuntuɓata. Ba na taɓa biyan baƙi da katin kyauta, wire ko crypto.\"",
          youCanNow: "kare bayananku na sirri da ƙin biyan kuɗi mai haɗari.",
          quickCheck: [
            { objective: "O5", q: "Me banki na gaske ba zai taɓa nema daga gare ku ba?", options: ["Ku ziyarci reshensa", "Kalmar sirrinku ko code da aka turo wayarku ta tes", "Ku karanta bayanin asusunku", "Ku kira lambar da ke katinku"], answer: 1, why: "Bankinku ya riga ya san asusunku; ba zai nemi kalmar sirrinku ko code da aka turo ta tes ba." },
            { objective: "O5", q: "Kun gane cewa kun ba ɗan damfara lambar katinku awa ɗaya da ta wuce. Me za ku fara yi?", options: ["Ku jira ku ga abin da zai faru", "Ku sake kiran ɗan damfarar", "Ku rubuta labarin a intanet", "Ku kira bankinku nan take ta lambar da ke katinku"], answer: 3, why: "Yin sauri tare da bankinku shi ne mataki na farko idan kun riga kun bayar da kuɗi ko bayanai." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kai rahoton zamba da samun taimako",
          minutes: 5,
          goal: "Faɗi inda ake kai rahoton zamba da inda ake samun tallafi.",
          text: [
            "Kai rahoto yana taimakawa wajen dakatar da 'yan damfara kuma yana iya taimaka muku. A Amurka, kuna iya kai rahoton zamba ga Federal Trade Commission a ReportFraud.ftc.gov. Ana kuma iya kai rahoton laifukan intanet ga cibiyar karɓar ƙorafin laifukan intanet ta FBI (Internet Crime Complaint Center) a ic3.gov.",
            "Idan kuna da shekara 60 ko fiye, layin taimako na National Elder Fraud Hotline, wanda Ma'aikatar Shari'a (Department of Justice) ke gudanarwa, kyauta ne: ku kira 833-FRAUD-11 (833-372-8311). Lokacin da muka duba, yana buɗe daga Litinin zuwa Juma'a, ƙarfe 10 na safe zuwa 6 na yamma agogon Eastern, da taimako a Turanci, Sifaniyanci da wasu harsuna. Ku duba shafin layin taimakon don lokutan yanzu.",
            "Idan wani ya yi amfani da bayananku, ku je IdentityTheft.gov don samun shirin farfaɗowa kyauta. Idan zambar Medicare ce, ku kira 1-800-MEDICARE (1-800-633-4227). Shafukan kai rahoto na gaske ba za su taɓa cewa ku biya kuɗi don dawo da kuɗinku ba; duk wanda ya yi haka wata zamba ce."
          ],
          steps: ["Ku fara kiran bankinku idan an ɗauki kuɗi.", "Ku kai rahoto a ReportFraud.ftc.gov.", "Shekara 60 ko fiye: ku kira Elder Fraud Hotline, 833-372-8311.", "Idan an yi amfani da bayananku: ku je IdentityTheft.gov.", "Ku yi hankali da duk wanda ke karɓar kuɗi don dawo da kuɗinku."],
          words: [["Kai rahoto", "faɗa wa ofishin da ya dace abin da ya faru don ya ɗauki mataki."], ["Satar bayanan shaida (identity theft)", "lokacin da wani ya yi amfani da bayananku na sirri don yin kamar shi ne ku."]],
          slides: [
            { title: "Inda za a kai rahoto", bullets: ["ReportFraud.ftc.gov", "ic3.gov na FBI don laifukan intanet"] },
            { title: "Shekara 60 ko fiye", bullets: ["National Elder Fraud Hotline", "833-FRAUD-11 (833-372-8311)", "Kyauta; ku duba shafinsa don lokutan yanzu"] },
            { title: "Ƙarin taimako", bullets: ["IdentityTheft.gov idan an yi amfani da bayananku", "1-800-MEDICARE don zambar Medicare", "Kada ku taɓa biyan kowa don \"dawo\" da kuɗinku"] }
          ],
          sources: [{ name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }, { name: "FBI Internet Crime Complaint Center", url: "https://www.ic3.gov/" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Medicare: Reporting fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Aikin ƙarshe: ku kammala katin tsaronku. Ku ƙara wuraren kai rahoton zamba da lambar Elder Fraud Hotline. Sannan ku yanke hukunci kan waɗannan saƙonni biyu da alamomi huɗu: (1) \"Sannu Kakana, sabuwar lamba ce, ina cikin matsala, aiko $500 na katin kyauta\"; (2) tunatarwa daga kantin maganinku cewa maganinku ya shirya, ba tare da hanyar haɗi ba kuma ba tare da neman kuɗi ba.",
          youCanNow: "gane zamba, tabbatar da ita lafiya, kare kuɗinku, da kai rahotonta wurin da ya dace.",
          quickCheck: [
            { objective: "O6", q: "Me ake yi da IdentityTheft.gov?", options: ["Shirin farfaɗowa kyauta idan wani ya yi amfani da bayananku", "Sayen inshorar bayanan shaida", "Biyan harajinku", "Kai rahoton wayar da ta ɓace"], answer: 0, why: "IdentityTheft.gov yana ba da shirin farfaɗowa kyauta idan an yi amfani da bayananku." },
            { objective: "O6", q: "Wani kamfani ya kira yana cewa zai dawo muku da kuɗin da kuka rasa idan kun biya kuɗi. Mene ne wannan?", options: ["Hidimar gwamnati", "Mayar da kuɗi na yau da kullum", "Wataƙila wata zamba ce", "Banki da za ku iya amincewa da shi"], answer: 2, why: "Shafukan kai rahoto na gaske ba sa cewa ku biya don dawo da kuɗinku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kare kanku",
        questions: [
          { objective: "O4", q: "Mene ne matakai uku na al'adar tsaro?", options: ["Danna, Biya, Manta", "Amsa, Raba, Aika", "Jira, Fata, Biya", "Tsaya, Duba, Kira"], answer: 3, why: "Tsaya, Duba, Kira yana rage saurin ɗan damfara." },
          { objective: "O4", q: "Idan kuna kira don tabbatarwa, wace lamba za ku yi amfani da ita?", options: ["Wadda ke katin tsaronku, katinku ko takardar kuɗi", "Wadda ke cikin saƙon", "Wadda mai kiran ya ba ku", "Wadda ke cikin pop-up"], answer: 0, why: "Lambobin da kuka riga kuka amince da su ne kaɗai ke da aminci." },
          { objective: "O5", q: "Mai kira ya ce ku motsa ajiyarku zuwa \"asusu mai aminci\" don a kare ta. Wannan:", options: ["Shawara ce mai kyau", "Dokar banki ce", "Zamba ce; ofisoshin gaske ba sa neman haka", "Sharaɗin haraji ne"], answer: 2, why: "FTC ta ce ofisoshin gaske ba sa cewa ku motsa kuɗi don kare shi." },
          { objective: "O6", q: "A ina za ku kai rahoton zamba ga FTC?", options: ["A pop-up", "A shafin ɗan damfarar", "A rubutu a kafar sada zumunta", "A ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov shi ne shafin kai rahoto na FTC." },
          { objective: "O6", q: "Wani yana cewa zai dawo muku da kuɗin da kuka rasa idan kun biya kuɗi. Mene ne wannan?", options: ["Shirin gwamnati", "Taimako na yau da kullum", "Wataƙila wata zamba ce", "Shawara kyauta"], answer: 2, why: "Shafukan kai rahoto na gaske ba sa karɓar kuɗi don dawo da kuɗi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tsaron AI da Gane Zamba ga Tsofaffi",
    questions: [
      { objective: "O1", q: "Wane ofishin Amurka ne ya bayyana alamomi huɗu na zamba?", options: ["Ofishin hasashen yanayi", "Federal Trade Commission (FTC)", "Gidan waya", "Kamfanin waya"], answer: 1, why: "FTC tana kare masu saye daga zamba." },
      { objective: "O1", q: "Wani saƙo ya ce kun ci kyauta amma dole ku fara biyan kuɗi. Wannan:", options: ["Alamar zamba ce", "Kyauta ce ta yau da kullum", "Dokar haraji ce", "Dokar banki ce"], answer: 0, why: "Kyautar da ke buƙatar biyan kuɗi zamba ce da aka saba gani." },
      { objective: "O1", q: "\"Kada ku katse waya kuma kada ku faɗa wa kowa\" alama ce ta:", options: ["Matsa lamba, alamar zamba", "Hidima mai kyau", "Gaggawa ta gaske", "Kiran likita"], answer: 0, why: "Matsa lamba da ɓoye abu alamomin zamba ne." },
      { objective: "O1", q: "Wace hanyar biya ce alamar haɗari idan baƙo ya nema?", options: ["Biyan kuɗin wutar lantarki ko ruwanku a shafinsa na hukuma", "Katin kyauta", "Biya a wurin biya na kantin abinci", "Cakin da kuke aika wa mai gidan haya ta wasiƙa"], answer: 1, why: "'Yan damfara suna neman katin kyauta domin yana da wuyar bin diddigi." },
      { objective: "O2", q: "Mene ne kwaikwayon murya (voice cloning)?", options: ["Darasin waƙa", "Gyaran waya", "Amfani da AI don kwafin muryar wani", "Wani nau'in na'urar ji"], answer: 2, why: "AI yana iya kwafin murya daga ɗan gajeren rikodi." },
      { objective: "O2", q: "A kiran gaggawa na bogi, mutum na biyu yana iya yin kamar shi:", options: ["Mai dafa abinci ne", "Karen maƙwabcinku ne", "Mai ba da labarin yanayi ne", "Lauya ne ko ɗan sanda"], answer: 3, why: "'Yan damfara suna ƙara jami'an bogi don su yi kama da gaske." },
      { objective: "O2", q: "Kalmar sirrin iyali tana taimaka muku:", options: ["Buɗe wayarku", "Biyan kuɗaɗe", "Tabbatar da wanda ke kira da gaske", "Canja kalmar sirrinku"], answer: 2, why: "Iyalinku na gaske ne kaɗai suka san ta." },
      { objective: "O3", q: "Shin rubutu marar kuskure yana tabbatar cewa saƙo na gaske ne?", options: ["A'a", "Eh", "Ranar Lahadi kawai", "Daga bankuna kawai"], answer: 0, why: "AI yana rubuta saƙonnin bogi marasa kuskure." },
      { objective: "O3", q: "Saƙon tes ya ce an riƙe kayanku; ku biya ƙaramin kuɗi ta hanyar haɗi. Ya kamata ku:", options: ["Danna ku biya", "Tura shi ga abokai", "Amsa da lambar katinku", "Kada ku danna; ku tabbatar da kamfanin kai kaya da kanku"], answer: 3, why: "Hanyoyin haɗi a saƙonnin da ba ku zata ba suna kai ku wurin 'yan damfara." },
      { objective: "O3", q: "Pop-up ya ce \"Virus! Ku kira wannan lamba yanzu.\" Ku:", options: ["Kira ta", "Kada ku kira; ku rufe shi ko ku kashe na'urar", "Biya don gyara", "Bar su su haɗu da kwamfutarku"], answer: 1, why: "Gargaɗin virus na pop-up zamba ce da aka saba gani." },
      { objective: "O3", q: "A cewar Medicare, Medicare ba za ta taɓa:", options: ["Aiko muku da bayani ta wasiƙa", "Kiran ku don sayar muku da wani abu ko zuwa gidanku", "Biyan kuɗin kulawa", "Samun shafin intanet"], answer: 1, why: "Medicare ta ce ba za ta kira don sayarwa ko ta zo gidanku ba." },
      { objective: "O4", q: "A Tsaya, Duba, Kira, \"Tsaya\" na nufin:", options: ["Daina biyan kuɗaɗe", "Daina amfani da wayarku har abada", "Daina magana da iyali", "Kada ku danna, ku biya ko ku raba"], answer: 3, why: "Tsayawa yana kawar da gaggawar ɗan damfara." },
      { objective: "O4", q: "Kafin ku liƙa saƙo a AI don ra'ayi na biyu, ya kamata ku:", options: ["Cire bayanan sirri", "Ƙara lambar bankinku", "Ƙara kalmar sirrinku", "Ƙara adireshinku"], answer: 0, why: "Bayanan sirri ba sa shiga AI." },
      { objective: "O4", q: "Ra'ayin mataimakin AI kan saƙo:", options: ["Hukuncin shari'a ne", "Koyaushe daidai ne", "Taimako ne, ba hukuncin ƙarshe ba", "Hukuncin banki ne"], answer: 2, why: "AI yana iya yin kuskure; matakanku suna zuwa farko." },
      { objective: "O5", q: "Banki na gaske ba zai taɓa nema muku ba:", options: ["Ku kira lambarsa", "Ku ziyarci reshensa", "Ku karanta bayanin asusunku", "Kalmar sirrinku ko code da aka turo ta tes"], answer: 3, why: "Bankuna ba sa neman kalmomin sirri ko code." },
      { objective: "O5", q: "Wani ya ce ku saka cakinsa a bankinku sannan ku mayar masa da wani kaso. Wannan:", options: ["Dokar banki ce", "Alheri ne na yau da kullum", "Zambar cakin bogi ce", "Mayar da haraji ne"], answer: 2, why: "Cakin zai koma ba tare da kuɗi ba, kuma ku rasa kuɗin da kuka aika." },
      { objective: "O5", q: "Idan kun riga kun aika kuɗi ga ɗan damfara, kiran farko shi ne ga:", options: ["Ɗan damfarar", "Bankinku, ta lambar da ke katinku", "Lambar pop-up", "Babu kowa"], answer: 1, why: "Bankinku yana iya dakatar da biyan ko ya mayar da shi." },
      { objective: "O6", q: "Lambar National Elder Fraud Hotline ita ce:", options: ["833-372-8311", "911", "411", "Lamba daga saƙon tes"], answer: 0, why: "833-FRAUD-11 (833-372-8311) layin taimako ne na Ma'aikatar Shari'a (DOJ)." },
      { objective: "O6", q: "Idan wani ya yi amfani da bayananku na sirri, shirin farfaɗowa kyauta yana a:", options: ["IdentityTheft.gov", "Tallar pop-up", "Shafin ɗan damfarar", "Shafin kafar sada zumunta"], answer: 0, why: "IdentityTheft.gov shi ne shafin farfaɗowa na FTC." },
      { objective: "O6", q: "Shafin FBI don kai rahoton laifukan intanet shi ne:", options: ["fbi-refund.win", "ic3.gov", "hanyar haɗi a saƙon tes", "shafin katin kyauta"], answer: 1, why: "IC3 ita ce cibiyar karɓar ƙorafin laifukan intanet ta FBI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      8,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Lambobi amintattu da matakai",
        objective: "O4",
        notYet: "Lambobi amintattu ƙasa da uku, ko lambar da aka kwafo daga saƙo.",
        meets: "Lambobi amintattu uku (wani a iyali, banki daga bayan katin, ofishin likita) da matakan Tsaya, Duba, Kira an rubuta su.",
        exceeds: "Zai iya bayyana inda kowace lamba ta fito da dalilin da yasa za a iya amincewa da ita."
      },
      {
        name: "Kalmar sirrin iyali",
        objective: "O2",
        notYet: "Babu kalmar sirrin iyali, ko tana da sauƙin hasashe ko an saka ta a intanet.",
        meets: "An rubuta kalmar sirrin iyali a katin kuma an raba ta da iyali.",
        exceeds: "Ya yi atisayen neman ta a kiran gaggawa na wasan kwaikwayo."
      },
      {
        name: "Wuraren kai rahoto",
        objective: "O6",
        notYet: "Babu wuraren kai rahoto, ko waɗanda ba daidai ba.",
        meets: "Aƙalla wurare biyu daidai, kamar ReportFraud.ftc.gov da Elder Fraud Hotline.",
        exceeds: "Ya kuma jera IdentityTheft.gov kuma ya ce a fara kiran banki idan an ɗauki kuɗi."
      },
      {
        name: "Hukunci kan saƙonnin misali",
        objective: "O1",
        notYet: "Bai gane cewa wani saƙon misali zamba ne ba.",
        meets: "Ya yanke hukunci daidai kan saƙonnin misali biyu kuma ya faɗi alamomin da ya samu.",
        exceeds: "Ya faɗi abin da zai yi a gaba, ta amfani da Tsaya, Duba, Kira."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da ke ajiye katin tsaronsu daga zamba kusa da waya a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka ce sun gane kuma sun guje wa kira, saƙon tes ko imel na zamba cikin kwanaki 30 (binciken biyo baya)",
      "Iyalan da suka yarda da kalmar sirrin iyali"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, da kwamfuta ko tablet idan akwai",
      "Kati ko takarda mara rubutu da alƙalami don katin tsaro daga zamba",
      "Saƙonnin misali biyu da aka buga (ɗaya zamba, ɗaya na gaske) don aikin ƙarshe",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi amfani da saƙonnin misali na ƙirƙira; kada ku taɓa neman masu koyo su raba lambobin asusu, Medicare ko Social Security na gaske.",
      "Ku yi wasan kwaikwayon kiran jika na bogi don masu koyo su yi atisayen katse waya da sake kira.",
      "Ku faɗa wa masu koyo cewa kowa za a iya yaudara; fadawa zamba ba abin kunya ba ne, kuma kai rahoto yana taimakawa.",
      "Lokutan layin taimako da lambobi suna iya canjawa; ku duba shafukan hukuma kafin zaman.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
