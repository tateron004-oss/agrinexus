"use strict";

// Koach Learn course, Hausa (ha) translation of shared/email-online-communication.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "email-online-communication-ha",
  lang: "ha",
  translationOf: "email-online-communication",
  category: "Seniors and Technology",
  name: "Imel da Sadarwa ta Intanet",
  skills: "Buɗe asusun imel kyauta, Rubuta imel a sarari, Mayar da amsa da haɗa fayil, Gane imel na zamba (phishing), Shiga kiran bidiyo",
  outcome: "buɗe asusun imel kyauta, rubuta da aika imel mai sarari da ladabi tare da fayil a haɗe, mayar da amsar saƙonni, gane imel na bogi (phishing), da shiga kiran bidiyo daga hanyar haɗi (link).",
  about: [
    "Imel da kiran bidiyo su ne hanyoyin da ofisoshin likita, masu ɗaukar aiki, masu gidajen haya, makarantu da iyalai suke tuntuɓar ku a yau. Wannan kwas ɗin yana nuna muku yadda ake amfani da su, mataki-mataki.",
    "Za ku buɗe asusun imel kyauta, ku rubuta saƙo mai sarari, ku mayar da amsa, ku haɗa fayil, ku kiyaye akwatin saƙonku daga zamba, sannan ku shiga kiran bidiyo.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku aika imel mai sarari da ladabi ga aboki, wani a iyali ko ku kanku, mai taken saƙo (subject), gaisuwa, gajerun jimloli biyu ko uku, kalmomin rufewa da sunanku, da fayil ɗaya a haɗe (hoto ko takarda). Sannan ku mayar da amsar wani imel da kuka samu, kuma ku rubuta alamun gargaɗi biyu da za ku duba kafin ku danna kowace hanyar haɗi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke buƙatar imel da kiran bidiyo a rayuwar yau da kullum: tsofaffi masu son ci gaba da magana da iyalinsu, masu neman aiki, marasa lafiya, iyaye masu hulɗa da makarantu, masu aikin sa-kai, da mutanen da ke dawowa cikin al'umma.",
    startingPoint: "Suna iya amfani da waya ko kwamfuta don buɗe manhajoji (apps) da rubuta gajerun saƙonni. Da yawa ba su da asusun imel, ko suna da shi amma ba sa amfani da shi sosai. Kaɗan ne suka tabbata da yadda ake haɗa fayil, rubuta taken saƙo mai sarari, gane imel na zamba ko shiga kiran bidiyo daga hanyar haɗi.",
    gap: "Masu ɗaukar aiki, likitoci, makarantu da ofisoshin gwamnati suna aika imel kuma suna sa ran a aiko musu. Ana yin ganawa da hirar neman aiki da yawa ta kiran bidiyo. Ba tare da waɗannan ƙwarewa ba, mutane suna rasa saƙonni, suna aika imel marasa sarari ko marasa ladabi, suna faɗawa tarkon imel na zamba, ko ba sa iya shiga ganawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar taken saƙo (subject line), fayil da aka haɗa (attachment) da phishing",
      "Na'urori: waya, tablet ko kwamfuta mai intanet",
      "Lokaci: kusan minti 5 a kowane darasi, kusan minti 60 gaba ɗaya",
      "Kuɗi: imel kyauta (Gmail, Outlook.com ko Yahoo Mail) da manhajojin kiran bidiyo kyauta",
      "Sirri: masu koyo ba sa taɓa saka lambar Social Security, lambobin banki ko kalmomin sirri (password) a imel ko hira"
    ],
    prerequisites: "Babu. Kwas ɗin \"Tushen Amfani da Intanet\" yana taimaka wa masu koyo da ba su taɓa amfani da burauzar intanet ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin hukuma ko manhajar hukuma ta wani kamfanin imel kyauta", action: "buɗe asusun imel mai adireshi na mutunci da kalmar sirri mai ƙarfi, da shiga cikinsa", standard: "tare da ƙara lambar waya ko wani imel na ajiya don ku iya sake shiga" },
    { id: "O2", condition: "Idan kuna da dalilin rubutu", action: "rubuta da aika imel mai taken saƙo, gaisuwa, gajeren saƙo da kalmomin rufewa", standard: "da dukkan sassan a ciki, kuma an duba adireshin \"To\" (Zuwa) kafin aikawa" },
    { id: "O3", condition: "Idan kuna da imel da kuka samu", action: "mayar da amsa, tura imel gaba da haɗa fayil, kuna zaɓar Reply ko Reply all daidai", standard: "da fayil ɗin a haɗe, kuma amsar ta tafi ga mutanen da ke buƙatarta kaɗai" },
    { id: "O4", condition: "Idan kun sami imel mai shakku", action: "gane alamun gargaɗin zamba (phishing) a cikinsa da zaɓar mataki na gaba mai aminci", standard: "kuna ambaton aƙalla alamu biyu, kuma ba ku taɓa danna hanyar haɗi ko biyan kuɗi ba" },
    { id: "O5", condition: "Idan kuna rubuta wa kowa ta intanet", action: "rubuta saƙo mai ladabi da sarari wanda babu bayanan sirri a cikinsa", standard: "da gaisuwa, ba tare da MANYAN HARUFFA duka ba, kuma babu lambobin sirri ko kalmomin sirri" },
    { id: "O6", condition: "Idan aka ba ku hanyar haɗin kiran bidiyo", action: "shiga kiran da amfani da maɓallan rufe murya (mute) da kyamara", standard: "kuna shiga a kan lokaci, kuma kuna rufe murya idan ba ku magana" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tushen imel",
      lessons: [
        {
          objectives: ["O1"],
          title: "Samun asusun imel kyauta",
          minutes: 5,
          goal: "Buɗe asusun imel kyauta kuma ku shiga cikinsa.",
          text: [
            "Adireshin imel kamar adireshin gida ne na saƙonni. Yana kama da name@gmail.com: sunan da kuka zaɓa, alamar @, sannan kamfanin da ke gudanar da imel ɗin.",
            "Kamfanonin imel kyauta sun haɗa da Gmail na Google, Outlook.com na Microsoft da Yahoo Mail. Don yin rajista, ku je shafin kamfanin da kansa ko ku saka manhajarsa ta hukuma, sannan ku zaɓi \"Create account\" (Buɗe asusu).",
            "Ku zaɓi adireshin da ke da mutunci, kamar sunanku na farko da na ƙarshe, domin masu ɗaukar aiki da likitoci za su gan shi. Ku zaɓi kalmar sirri mai ƙarfi da ba ku amfani da ita a wani wuri, kuma ku ƙara lambar waya ko wani imel na ajiya don ku iya sake shiga idan kun manta ta."
          ],
          steps: ["Ku je gmail.com, outlook.com ko manhajar imel ta hukuma.", "Ku zaɓi \"Create account\" (Buɗe asusu).", "Ku zaɓi adireshi mai mutunci, kamar sunanfarko.sunanƙarshe.", "Ku yi kalmar sirri mai tsawo da ba ku amfani da ita a wani wuri.", "Ku ƙara lambar waya ko imel na ajiya don dawo da asusu.", "Ku rubuta sabon adireshinku, kuma ku ajiye kalmar sirri a wuri mai aminci."],
          words: [["Adireshin imel (email address)", "adireshinku na karɓar saƙonni, kamar name@gmail.com."], ["Kalmar sirri (password)", "kalma ko jumla ta sirri da ke bar ku kaɗai ku shiga asusunku."], ["Dawo da asusu (account recovery)", "hanyar sake shiga asusunku idan kun manta kalmar sirri, yawanci lamba (code) da ake turowa wayarku."]],
          slides: [
            { title: "Adireshin imel", bullets: ["Yana kama da name@gmail.com", "Sunanku, alamar @, sannan kamfanin imel"] },
            { title: "Kamfanonin imel kyauta", bullets: ["Gmail na Google", "Outlook.com na Microsoft", "Yahoo Mail"] },
            { title: "Yin rajista da kyau", bullets: ["Ku zaɓi adireshi mai mutunci: sunanku na farko da na ƙarshe", "Ku yi kalmar sirri mai tsawo da ba ku amfani da ita a wani wuri", "Ku ƙara lambar waya don dawo da asusu"] }
          ],
          tryIt: "Ku buɗe asusun imel kyauta (ko ku buɗe wanda kuke da shi). Ku fita daga asusun (sign out), sannan ku sake shiga, don ku san za ku iya shiga da kanku.",
          youCanNow: "buɗe asusun imel kyauta mai adireshi na mutunci, da shiga cikinsa.",
          quickCheck: [
            { objective: "O1", q: "Mene ne aikin alamar @ a adireshin imel?", options: ["Tana raba sunan da kuka zaɓa da kamfanin da ke gudanar da imel ɗin", "Tana sa adireshin ya zama na sirri", "Tana nufin imel ɗin na gaggawa ne", "Tana nuna kalmar sirri"], answer: 0, why: "Adireshi shi ne sunan da kuka zaɓa, alamar @, sannan kamfanin, kamar name@gmail.com." },
            { objective: "O1", q: "Kuna buɗe asusun imel don neman aiki. Wane adireshi za ku zaɓa?", options: ["partyking99@...", "coolcat2000@...", "xxlovexx@...", "Sunanku na farko da na ƙarshe, kamar james.carter@..."], answer: 3, why: "Masu ɗaukar aiki za su ga adireshinku, don haka adireshi mai sunanku yana da mutunci." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta imel a sarari",
          minutes: 5,
          goal: "Rubuta da aika imel mai taken saƙo, gaisuwa, gajeren saƙo da kalmomin rufewa.",
          text: [
            "Imel mai kyau yana da sassa biyar: wanda za a aika masa, taken saƙo (subject line), gaisuwa, gajeren saƙo, da kalmomin rufewa tare da sunanku.",
            "Taken saƙo yana gaya wa mai karatu abin da imel ɗin ya ƙunsa kafin ya buɗe shi, misali \"Tambaya game da ganawata ta ranar Talata\" ko \"Neman aikin mai karɓar kuɗi (cashier)\".",
            "Ku gajarta saƙon: ku faɗi dalilin rubutunku, abin da kuke buƙata, da kafin yaushe. Ku karanta shi sau ɗaya kafin ku danna Send (Aika), kuma ku duba adireshin \"To\" (Zuwa) da kyau, domin ba za ku iya dawo da imel bayan an aika shi ba."
          ],
          steps: ["Ku danna Compose ko New message (Sabon saƙo).", "Ku rubuta adireshin mutumin a akwatin \"To\" (Zuwa).", "Ku rubuta gajeren taken saƙo.", "Ku fara da gaisuwa, kamar \"Sannu Malama Lee,\".", "Ku rubuta gajerun jimloli biyu ko uku: dalili, abin da kuke buƙata, kafin yaushe.", "Ku ƙare da \"Na gode,\" da sunanku.", "Ku karanta shi sau ɗaya, ku duba adireshin, sannan ku danna Send (Aika)."],
          words: [["Taken saƙo (subject line)", "'yan kalmomi da ke gaya wa mai karatu abin da imel ɗin ya ƙunsa."], ["Compose", "maɓallin da ke fara sabon imel."], ["Kalmomin rufewa (sign-off)", "kalmomin ƙarshe, kamar \"Na gode,\" sannan sunanku."]],
          slides: [
            { title: "Sassa biyar na imel", bullets: ["To (Zuwa): adireshin, sannan taken saƙo", "Gaisuwa", "Gajeren saƙo", "Kalmomin rufewa da sunanku"] },
            { title: "Taken saƙo mai kyau", bullets: ["\"Tambaya game da ganawata ta ranar Talata\"", "\"Neman aikin mai karɓar kuɗi (cashier)\""] },
            { title: "Kafin ku danna Send (Aika)", bullets: ["Ku karanta shi sau ɗaya", "Ku duba adireshin \"To\" (Zuwa)", "Ba za ku iya dawo da shi bayan aikawa ba"] }
          ],
          tryIt: "Ku rubuta da aika imel ga kanku ko wani a iyali mai dukkan sassa biyar. Taken saƙo: \"Imel na gwaji\". Ku buɗe shi daga ɓangaren mai karɓa ku ga yadda yake.",
          youCanNow: "rubuta imel mai sarari mai taken saƙo, gaisuwa, gajeren saƙo da kalmomin rufewa, da aika shi.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata gajeren saƙon imel ya faɗa?", options: ["Kalmar sirrinku", "Duk abin da ya faru da ku a wannan makon", "Dalilin rubutunku, abin da kuke buƙata da kafin yaushe", "Kalmar \"Sannu\" kawai"], answer: 2, why: "Gajeren saƙo yana faɗin dalilin rubutunku, abin da kuke buƙata da kafin yaushe." },
            { objective: "O2", q: "Kuna shirin aika imel ga ofishin likitanku. Me za ku fara dubawa?", options: ["Launin allon", "Adireshin \"To\" (Zuwa), da karanta imel ɗin sau ɗaya", "Imel nawa ne a akwatin saƙonku", "Ko taken saƙo yana da MANYAN HARUFFA duka"], answer: 1, why: "Ba za ku iya dawo da imel ba, don haka ku duba adireshin kuma ku karanta shi kafin aikawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mayar da amsa, tura imel gaba da haɗa fayil",
          minutes: 5,
          goal: "Mayar da amsar imel, da aika imel tare da fayil a haɗe.",
          text: [
            "Reply (Amsa) yana aika amsarku ga wanda ya rubuta muku kaɗai. Reply all (Amsa wa kowa) yana aika ta ga kowa da ke cikin saƙon, don haka ku yi amfani da shi ne kawai idan kowa yana buƙatar amsarku. Forward (Tura gaba) yana tura imel ɗin ga sabon mutum.",
            "Fayil da aka haɗa (attachment) fayil ne da kuke aikawa tare da imel, kamar hoto, takardar bayanin aiki (résumé ko CV) ko fom. Ku nemi alamar ƙugiyar takarda (paper clip). Ku zaɓi fayil ɗin daga wayarku ko kwamfutarku, ku jira har ya gama lodawa, sannan ku aika.",
            "Ku buɗe fayil da aka haɗa ne kawai idan kuna sa ransa, kuma daga mutanen da kuka sani. Fayil daga baƙi yana iya ɗauke da shirye-shirye masu cutarwa."
          ],
          steps: ["Ku buɗe imel ɗin da kuke son amsawa.", "Ku danna Reply (ba Reply all ba, sai dai idan kowa yana buƙatar amsar).", "Ku rubuta amsarku ku danna Send (Aika).", "Don haɗa fayil: a sabon imel, ku danna alamar ƙugiyar takarda.", "Ku zaɓi hoton ko takardar, ku jira ya gama lodawa.", "Ku ambaci fayil ɗin a saƙonku, sannan ku danna Send (Aika)."],
          words: [["Reply all (Amsa wa kowa)", "yana amsa wa duk wanda ya sami imel ɗin, ba wanda ya aiko kaɗai ba."], ["Forward (Tura gaba)", "yana tura imel da kuka samu ga wani mutum."], ["Fayil da aka haɗa (attachment)", "fayil da ake aikawa tare da imel."]],
          slides: [
            { title: "Reply, Reply all, Forward", bullets: ["Reply: wanda ya aiko kaɗai", "Reply all: kowa da ke cikin imel ɗin", "Forward: ku tura shi ga sabon mutum"] },
            { title: "Haɗa fayil", bullets: ["Ku danna alamar ƙugiyar takarda (paper clip)", "Ku zaɓi hoton ko takardar", "Ku jira ya gama lodawa, sannan ku aika"] },
            { title: "Ku yi hankali", bullets: ["Ku buɗe fayil da kuke sa ransa kawai", "Fayil daga baƙi yana iya ɗauke da shirye-shirye masu cutarwa"] }
          ],
          tryIt: "Ku mayar da amsar imel na gwaji daga Darasi na 2. Sannan ku rubuta sabon imel ga kanku, ku haɗa hoto ko takarda ɗaya, ku aika. Ku buɗe shi ku duba cewa fayil ɗin ya iso.",
          youCanNow: "mayar da amsar imel, tura imel gaba, da aika fayil a haɗe da imel.",
          quickCheck: [
            { objective: "O3", q: "Mene ne fayil da aka haɗa (attachment)?", options: ["Taken saƙo", "Fayil da kuke aikawa tare da imel, kamar hoto ko fom", "Adireshin wanda ya aiko", "Maɓallin da ke goge imel"], answer: 1, why: "Fayil da aka haɗa fayil ne da ake aikawa tare da imel." },
            { objective: "O3", q: "Kun haɗa takardar bayanin aikinku (résumé), amma har yanzu tana lodawa. Me za ku yi?", options: ["Ku jira har ta gama lodawa, sannan ku aika", "Ku danna Send nan take", "Ku rufe manhajar", "Ku tura imel ɗin ga kowa"], answer: 0, why: "Ku jira fayil ɗin ya gama lodawa, idan ba haka ba wataƙila ba zai tafi tare da imel ɗin ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tushen imel",
        questions: [
          { objective: "O1", q: "Wane adireshin imel ne ya fi dacewa don neman aiki?", options: ["coolcat99@gmail.com", "maria.lopez@gmail.com", "partytime@yahoo.com", "xx123xx@outlook.com"], answer: 1, why: "Adireshi mai sunanku na farko da na ƙarshe yana da mutunci." },
          { objective: "O1", q: "Me yasa za ku ƙara lambar waya a asusun imel ɗinku?", options: ["Don kamfanin ya riƙa kiran ku kowace rana", "Don ku iya sake shiga idan kun manta kalmar sirri", "Yana sa imel ya yi sauri", "Ana buƙatar sa don aika hotuna"], answer: 1, why: "Lambar waya ta dawo da asusu tana bar ku ku sami code don sake shiga." },
          { objective: "O2", q: "Mene ne aikin taken saƙo (subject line)?", options: ["Yana gaya wa mai karatu abin da imel ɗin ya ƙunsa", "Yana riƙe fayil da aka haɗa", "Yana nuna kalmar sirrinku", "Yana goge tsofaffin imel"], answer: 0, why: "Yana gaya wa mai karatu batun kafin ya buɗe imel ɗin." },
          { objective: "O3", q: "Kun sami imel da aka aika wa mutane 30. Wanda ya aiko ne kaɗai yake buƙatar amsarku. Wane maɓalli za ku danna?", options: ["Forward", "Reply all", "Delete", "Reply"], answer: 3, why: "Reply yana aika amsarku ga wanda ya rubuta kaɗai." },
          { objective: "O3", q: "Yaya ake aika hoto tare da imel?", options: ["Ku rubuta sunan hoton a taken saƙo", "Ku danna alamar ƙugiyar takarda ku zaɓi hoton", "Ku liƙa kalmar sirrinku", "Ku danna Reply all"], answer: 1, why: "Alamar ƙugiyar takarda tana haɗa fayil." }
        ]
      }
    },
    {
      name: "Babi na 2: Zama lafiya da sadarwa ta intanet",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gane imel na zamba (phishing)",
          minutes: 5,
          goal: "Duba imel don alamun gargaɗi kafin ku danna komai.",
          text: [
            "Phishing saƙo ne na bogi da ke yin kamar daga banki, shago, kamfanin isar da kaya ko ofishin gwamnati yake, don a yaudare ku ku danna hanyar haɗi ko ku ba da bayanan sirri.",
            "Hukumar Federal Trade Commission (FTC), wato ofishin gwamnatin Amurka mai kula da zamba, ta lissafa alamomin da aka saba gani: saƙon yana yin kamar daga ƙungiyar da kuka sani yake, yana cewa akwai matsala ko kyauta, yana matsa muku ku yi abu nan take, kuma yana neman ku biya ta wata hanya da ba a saba ba, kamar katin kyauta (gift card), tura kuɗi ta waya (wire transfer), manhajojin biyan kuɗi ko kuɗin kirifto (cryptocurrency).",
            "Ku kuma duba ainihin adireshin wanda ya aiko: \"support@amaz0n-help.win\" ba Amazon ba ne. Idan kuna shakka, kada ku danna. Ku je shafin kamfanin da kanku, ko ku kira lambar da kuka riga kuka sani gaskiya ce. A Amurka kuna iya kai rahoton zamba a reportfraud.ftc.gov."
          ],
          steps: ["Ku duba cikakken adireshin wanda ya aiko, ba sunan kawai ba.", "Ku tambayi kanku: Yana yin kamar wani da na sani ne? Akwai matsala ko kyauta? Ana gaggauta ni? Suna son katin kyauta ko tura kuɗi?", "Idan amsar kowace \"i\" ce, kada ku danna hanyoyin haɗi ko ku buɗe fayil.", "Ku tabbatar ta hanyar zuwa ainihin shafin da kanku ko kiran lambar da kuka sani.", "Ku goge shi ko ku sa masa alamar spam. A Amurka, ku kai rahotonsa a reportfraud.ftc.gov."],
          words: [["Phishing", "saƙon bogi da aka yi don yaudarar ku ku danna hanyar haɗi ko ku ba da bayanan sirri."], ["Spam", "imel na shirme da ba ku so."], ["FTC", "Federal Trade Commission, ofishin gwamnatin Amurka mai karɓar rahoton zamba."]],
          slides: [
            { title: "Mene ne phishing", bullets: ["Imel na bogi da ke yin kamar banki, shago ko ofishi", "Yana son ku danna, ku biya ko ku ba da bayanan sirri"] },
            { title: "Alamun gargaɗi huɗu (FTC)", bullets: ["Yana yin kamar wani da kuka sani", "Matsala ko kyauta", "Matsi don ku yi abu yanzu", "Biya da katin kyauta, tura kuɗi, manhajar biya ko kirifto"] },
            { title: "Ku duba wanda ya aiko", bullets: ["Ku duba cikakken adireshin", "\"amaz0n-help.win\" ba Amazon ba ne"] },
            { title: "Idan kuna shakka", bullets: ["Kada ku danna", "Ku je ainihin shafin ko ku kira lambar da kuka sani", "Ku kai rahoto a reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Yadda ake guje wa zamba (How to avoid a scam)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Kai rahoton zamba (Report fraud)", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Ku buɗe akwatin spam ko junk ku zaɓi saƙo ɗaya. Ku nemo aƙalla alamun gargaɗi biyu a cikinsa. Kada ku danna kowace hanyar haɗi. Sannan ku goge shi.",
          youCanNow: "duba imel don alamun gargaɗi huɗu da ainihin adireshin wanda ya aiko kafin ku danna.",
          quickCheck: [
            { objective: "O4", q: "Mene ne phishing?", options: ["Kamfanin imel kyauta", "Hanyar haɗa manyan fayiloli", "Hanyar mayar da amsa cikin ladabi", "Saƙon bogi da ke yin kamar daga kamfani ko ofishi yake don ya yaudare ku"], answer: 3, why: "Phishing yana yin kamar daga suna amintacce yake don ku danna ko ku ba da bayanai." },
            { objective: "O4", q: "Wani imel ya ce kun ci kyauta kuma dole ku biya ɗan kuɗi da katin kyauta yau. Me za ku yi?", options: ["Ku sayi katin kyautar da sauri", "Ku mayar da amsa da bayanan bankinku", "Kada ku danna ko ku biya; yana da alamun zamba", "Ku tura shi ga abokai don su ma su ci"], answer: 2, why: "Kyauta, matsi don yin abu yanzu da biya da katin kyauta duk alamun zamba ne da FTC ta lissafa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ladabi a intanet",
          minutes: 4,
          goal: "Rubuta saƙo mai ladabi da sarari da zai kawo amsa mai kyau.",
          text: [
            "Mutane ba sa jin muryarku a saƙon rubutu, don haka kalmomi suna iya zama masu tsauri fiye da yadda kuke nufi. Rubutu da MANYAN HARUFFA duka yana kama da ihu.",
            "Ku yi ladabi kuma ku gajarta. Ku yi amfani da gaisuwa, da \"don Allah\" da \"na gode\". Ku amsa muhimman imel cikin kwana ɗaya ko biyu, ko da don ku ce \"Na samu, zan amsa kafin ranar Juma'a\" ne kawai.",
            "Kafin ku aika saƙo lokacin da kuke fushi, ku ɗan jira ku sake karanta shi. Kada ku saka bayanan sirri kamar lambar Social Security ɗinku, lambobin banki ko kalmomin sirri a imel ko saƙon hira."
          ],
          steps: ["Ku fara da gaisuwa.", "Ku faɗi abin da kuke buƙata a gajerun jimloli.", "Ku yi amfani da haruffa na yau da kullum, ba MANYAN HARUFFA duka ba.", "Ku ce don Allah da na gode.", "Idan kuna fushi, ku jira ku sake karantawa kafin aikawa.", "Ku bar lambobin sirri da kalmomin sirri a waje."],
          words: [["Netiquette", "ladabi a saƙonni da rubuce-rubuce a intanet."], ["ALL CAPS (MANYAN HARUFFA duka)", "rubutu da manyan haruffa kawai, wanda yake kama da ihu."]],
          slides: [
            { title: "Kalmomi ba tare da murya ba", bullets: ["Saƙonni suna iya zama masu tsauri fiye da yadda kuke nufi", "MANYAN HARUFFA duka suna kama da ihu"] },
            { title: "Ladabi da sarari", bullets: ["Gaisuwa, don Allah da na gode", "Gajerun jimloli", "Ku amsa cikin kwana ɗaya ko biyu"] },
            { title: "Kafin ku aika", bullets: ["Kuna fushi? Ku jira ku sake karantawa", "Babu lambobin sirri ko kalmomin sirri"] }
          ],
          tryIt: "Ku rubuta gajeren imel mai ladabi ga mai gidan haya, makaranta, asibiti ko mai ɗaukar aiki (ba sai kun aika ba) don yin tambaya. Ku karanta shi da babbar murya: yana da daɗi kuma a sarari?",
          youCanNow: "rubuta saƙo mai ladabi da sarari, da guje wa halayen da ke kawo matsala a intanet.",
          quickCheck: [
            { objective: "O5", q: "Me yasa kalmomin rubutu suke iya zama masu tsauri fiye da yadda kuke nufi?", options: ["Mutane ba sa jin muryarku a saƙon rubutu", "Imel koyaushe yana canja kalmominku", "Wayoyi suna ƙara girman haruffa", "Gajerun imel rashin ladabi ne"], answer: 0, why: "Ba tare da muryarku ba, mai karatu yana da kalmominku kaɗai." },
            { objective: "O5", q: "Wani muhimmin imel ya iso amma kuna buƙatar 'yan kwanaki kafin ku amsa. Me za ku yi?", options: ["Ku ƙyale shi har sai kun shirya", "Ku amsa da MANYAN HARUFFA duka", "Ku amsa cikin kwana ɗaya ko biyu don ku faɗi lokacin da za ku amsa", "Ku tura shi ga wani"], answer: 2, why: "Gajeriyar amsa kamar \"Na samu, zan amsa kafin ranar Juma'a\" ladabi ne." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shiga kiran bidiyo",
          minutes: 5,
          goal: "Shiga kiran bidiyo daga hanyar haɗi, da amfani da maɓallan rufe murya da kyamara.",
          text: [
            "Likitoci, masu ɗaukar aiki, makarantu da iyalai da yawa suna amfani da kiran bidiyo. Sanannu masu kyauta sun haɗa da Zoom, Google Meet, Microsoft Teams, da FaceTime a na'urorin Apple. Yawanci wani zai turo muku hanyar haɗi ta imel ko tes.",
            "Ku taɓa ko danna hanyar haɗin 'yan mintuna kafin lokaci. A waya wataƙila zai nemi ku saka manhajar daga shagon manhajoji na hukuma. Idan aka tambaye ku, ku ba da izinin makirufo da kyamara.",
            "Ku koyi maɓalli biyu: makirufo (rufe da buɗe murya) da kyamara (kunna da kashewa). Ku zauna kuna fuskantar haske, a wuri mai shiru, kuma ku rufe muryarku idan ba ku magana."
          ],
          steps: ["Ku nemo hanyar haɗin a imel ko tes daga wanda kuka sani.", "Ku shiga mintuna biyar kafin lokaci.", "Idan aka tambaye ku, ku saka manhajar hukuma ko ku buɗe ta a burauza.", "Ku ba da izinin makirufo da kyamara.", "Ku nemo maɓallan rufe murya da kyamara.", "Ku fuskanci haske, ku nemi wuri mai shiru, kuma ku rufe murya idan ba ku magana.", "Ku danna Leave (Fita) ko jan maɓalli don katse kiran."],
          words: [["Kiran bidiyo", "kiran da kuke iya gani da jin juna a kan allo."], ["Mute (Rufe murya)", "yana kashe makirufonku don wasu kada su ji ku."], ["Hanyar haɗin taro (meeting link)", "adireshin intanet da ke kai ku kai tsaye cikin kiran bidiyo."]],
          slides: [
            { title: "Manhajojin kiran bidiyo da aka saba", bullets: ["Zoom, Google Meet, Microsoft Teams", "FaceTime a na'urorin Apple", "Yawanci kuna samun hanyar haɗi ta imel ko tes"] },
            { title: "Shiga kiran", bullets: ["Ku danna hanyar haɗin 'yan mintuna kafin lokaci", "Ku ba da izinin makirufo da kyamara"] },
            { title: "Maɓallai biyu da za ku sani", bullets: ["Makirufo: rufe da buɗe murya", "Kyamara: kunna da kashewa", "Jan maɓalli ko Leave (Fita): katse kiran"] },
            { title: "Ku yi kyau a gani da ji", bullets: ["Ku fuskanci haske", "Wuri mai shiru", "Ku rufe murya idan ba ku magana"] }
          ],
          tryIt: "Atisayen aikin ƙarshe: ku nemi aboki ko wani a iyali ya turo muku hanyar haɗin kiran bidiyo (ko ku fara kiran Google Meet ko Zoom da kanku). Ku shiga, ku rufe ku buɗe murya, ku kashe ku kunna kyamara, sannan ku fita daga kiran.",
          youCanNow: "shiga kiran bidiyo daga hanyar haɗi, amfani da maɓallan rufe murya da kyamara, da fita daga kiran.",
          quickCheck: [
            { objective: "O6", q: "Yaya ake yawan shiga kiran bidiyo?", options: ["Ta kiran lambar waya daga tallar da ke tasowa (pop-up)", "Ta taɓa ko danna hanyar haɗi da wani ya turo muku", "Ta aika imel ga manhajar", "Ta kashe kyamara"], answer: 1, why: "Yawanci wani yana turo muku hanyar haɗi ta imel ko tes, sai ku taɓa ta don shiga." },
            { objective: "O6", q: "Hirarku ta neman aiki ta bidiyo za ta fara ƙarfe 10:00. Me za ku yi?", options: ["Ku shiga ƙarfe 10:15", "Ku shiga daga ɗaki mai hayaniya da haske a bayanku", "Ku bar makirufonku a buɗe koyaushe yayin da wasu ke magana", "Ku shiga 'yan mintuna kafin lokaci a wuri mai shiru, kuna fuskantar haske"], answer: 3, why: "Shiga da wuri yana ba ku lokacin saka manhajar da ba da izinin makirufo da kyamara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Zama lafiya da sadarwa ta intanet",
        questions: [
          { objective: "O4", q: "Wani imel ya ce an kulle asusun bankinku kuma dole ku danna hanyar haɗi cikin awa ɗaya. Me za ku yi?", options: ["Ku danna hanyar haɗin da sauri", "Ku mayar da amsa da lambar asusunku", "Ku je ainihin shafin bankin da kanku ko ku kira lambar da kuka sani", "Ku tura shi ga duk abokanku"], answer: 2, why: "Matsi da matsala alamun zamba ne; ku tabbatar ta hanyar da kuka riga kuka amince da ita." },
          { objective: "O4", q: "Wace buƙatar biyan kuɗi ce alamar gargaɗin zamba?", options: ["Biyan kuɗi a shafin bankinku na kansa", "Biya da katin kyauta", "Biyan shago a wurin biya", "Biyan likita a teburin karɓa"], answer: 1, why: "FTC ta lissafa katin kyauta a matsayin hanyar biya da ba a saba ba da 'yan damfara suke nema." },
          { objective: "O5", q: "Rubutu da MANYAN HARUFFA duka yana kama da me ga mai karatu?", options: ["Ihu", "Ladabi", "Shiru", "Barkwanci"], answer: 0, why: "Manyan haruffa duka suna kama da ihu." },
          { objective: "O6", q: "A cikin kiran bidiyo ba ku magana, kuma akwai hayaniya a gida. Me ya kamata ku yi?", options: ["Ku fita daga kiran", "Ku ƙara ƙarar sauti", "Ku kashe kyamara kawai", "Ku rufe makirufonku (mute)"], answer: 3, why: "Rufe murya yana hana wasu jin hayaniyar baya." },
          { objective: "O4", q: "A ina mutane a Amurka za su iya kai rahoton zamba?", options: ["reportfraud.ftc.gov", "Imel na ɗan damfarar", "Sharhi a kafar sada zumunta", "freehelp.win"], answer: 0, why: "FTC tana karɓar rahoton zamba a reportfraud.ftc.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Imel da Sadarwa ta Intanet",
    questions: [
      { objective: "O1", q: "A adireshin maria@gmail.com, me gmail.com yake gaya muku?", options: ["Kalmar sirrin Maria", "Kamfanin da ke gudanar da imel ɗin", "Lambar wayar Maria", "Garin Maria"], answer: 1, why: "Sashen da ke bayan @ shi ne kamfanin imel." },
      { objective: "O1", q: "Wanne ne kamfanin imel kyauta?", options: ["Outlook.com", "Firinta", "Saƙon tes", "Burauzar intanet"], answer: 0, why: "Outlook.com, Gmail da Yahoo Mail kamfanonin imel ne kyauta." },
      { objective: "O1", q: "Kalmar sirri mai ƙarfi ta imel ita ce:", options: ["Ranar haihuwarku", "\"password\"", "Wadda kuke amfani da ita a ko'ina", "Mai tsawo kuma ba a amfani da ita a wani wuri"], answer: 3, why: "Kalmar sirri mai tsawo da ta keɓanta ita ce mafi wuyar tsammani ko sata." },
      { objective: "O2", q: "Wane maɓalli ne ke fara sabon imel?", options: ["Compose ko New message", "Delete", "Spam", "Archive"], answer: 0, why: "Compose yana fara sabon imel." },
      { objective: "O2", q: "Wanne ne taken saƙo mafi kyau don tambaya game da aiki?", options: ["\"sannu\"", "Babu taken saƙo", "\"karanta wannan\"", "\"Neman aikin mai karɓar kuɗi (cashier)\""], answer: 3, why: "Yana gaya wa mai karatu daidai abin da imel ɗin ya ƙunsa." },
      { objective: "O2", q: "Kafin ku danna Send (Aika), ya kamata ku:", options: ["Ƙara lambar bankinku", "Cire gaisuwa", "Rubuta shi da manyan haruffa duka", "Duba adireshin \"To\" (Zuwa) ku karanta imel ɗin sau ɗaya"], answer: 3, why: "Ba za ku iya dawo da imel ba, don haka ku fara duba shi." },
      { objective: "O2", q: "Wane sashe ne ke zuwa a ƙarshen imel?", options: ["Taken saƙo", "Adireshin \"To\" (Zuwa)", "Kalmomin rufewa da sunanku", "Ƙugiyar takarda"], answer: 2, why: "Kalmomin rufewa kamar \"Na gode, Ana\" suna rufe imel ɗin." },
      { objective: "O3", q: "Forward yana nufin:", options: ["Amsa wa wanda ya aiko kaɗai", "Goge imel ɗin", "Tura imel ɗin ga sabon mutum", "Sa masa alamar spam"], answer: 2, why: "Forward yana tura imel da kuka samu ga wani mutum." },
      { objective: "O3", q: "Ana amfani da alamar ƙugiyar takarda (paper clip) don:", options: ["Haɗa fayil", "Canja salon rubutu", "Toshe wanda ya aiko", "Buga imel ɗin a takarda"], answer: 0, why: "Ƙugiyar takarda tana haɗa fayil." },
      { objective: "O3", q: "Baƙo ya aiko muku fayil da ba ku sa ransa ba. Ya kamata ku:", options: ["Buɗe shi nan take", "Tura shi ga abokai", "Kada ku buɗe shi", "Mayar da amsa da kalmar sirrinku"], answer: 2, why: "Fayil da ba a sa ransa ba daga baƙi yana iya ɗauke da shirye-shirye masu cutarwa." },
      { objective: "O3", q: "Ya kamata a yi amfani da Reply all:", options: ["Koyaushe", "Sai lokacin da kowa da ke cikin imel ɗin yana buƙatar amsarku", "Ba a taɓa ba", "Don aika spam"], answer: 1, why: "Reply all yana kaiwa ga kowa, don haka ku yi amfani da shi ne kawai idan duk suna buƙatar sa." },
      { objective: "O4", q: "Phishing shi ne:", options: ["Saƙon bogi da ke ƙoƙarin yaudarar ku", "Wani nau'in fayil da aka haɗa", "Manhajar kiran bidiyo", "Kalmar sirri mai ƙarfi"], answer: 0, why: "Saƙonnin phishing suna yin kamar na gaske ne don satar bayanai ko kuɗi." },
      { objective: "O4", q: "Sunan wanda ya aiko ya ce \"Amazon\" amma adireshin shi ne support@amaz0n-help.win. Wannan:", options: ["Abu ne na yau da kullum", "Hanyar haɗin kiran bidiyo ce", "Babban adireshin Amazon ne", "Alamar gargaɗi ce"], answer: 3, why: "Ainihin adireshin wanda ya aiko bai dace da kamfanin ba." },
      { objective: "O4", q: "Wanne ne ɗaya daga cikin alamun zamba huɗu na FTC?", options: ["Saƙon gajere ne", "Matsi don ku yi abu nan take", "Yana da gaisuwa", "Daga abokin da kuka kira ne"], answer: 1, why: "'Yan damfara suna gaggauta ku don kada ku tsaya ku yi tunani." },
      { objective: "O4", q: "Ba ku tabbata ko imel daga bankinku na gaske ne ba. Mataki mafi aminci shi ne:", options: ["Danna hanyar haɗinsa don dubawa", "Mayar da amsa ku tambaya", "Ku je shafin bankin da kanku ko ku kira lambar da ke kan katinku", "Aika lambar asusunku"], answer: 2, why: "Ku yi amfani da hanyar da kuka riga kuka san gaskiya ce, ba hanyar haɗin imel ɗin ba." },
      { objective: "O5", q: "Kuna fushi kuma kun rubuta imel mai zafi. Ladabi yana cewa:", options: ["Ku aika shi da manyan haruffa duka", "Ku jira ku sake karantawa kafin aikawa", "Ku aika shi ga kowa", "Ku ƙara lambar bankinku"], answer: 1, why: "Jira yana taimaka muku aika saƙo mai natsuwa da sarari." },
      { objective: "O5", q: "Wanne ne kada ku taɓa saka a imel?", options: ["\"Na gode\"", "Gaisuwa", "Lambar Social Security ɗinku", "Taken saƙo"], answer: 2, why: "Ana iya satar lambobin sirri da ke cikin imel." },
      { objective: "O6", q: "Wace ce manhajar kiran bidiyo da aka saba?", options: ["Zoom", "Na'urar lissafi (calculator)", "Notepad", "Wurin ajiyar hotuna"], answer: 0, why: "Zoom, Google Meet, Teams da FaceTime manhajojin kiran bidiyo ne." },
      { objective: "O6", q: "Lokacin shiga kiran bidiyo, al'ada mai kyau ita ce:", options: ["Shiga bayan mintuna 20", "Zama da taga mai haske a bayanku", "Shiga 'yan mintuna kafin lokaci kuna fuskantar haske", "Bar talabijin da ƙara sosai"], answer: 2, why: "Shiga da wuri da fuskantar haske suna taimaka wa kiran ya tafi da kyau." },
      { objective: "O6", q: "A kiran bidiyo, maɓallin makirufo yana bar ku:", options: ["Ɗaukar hoto", "Aika fayil", "Kashe intanet", "Rufe da buɗe muryarku"], answer: 3, why: "Maɓallin makirufo yana kashe da kunna sautinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      5,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Imel mai sarari",
        objective: "O2",
        notYet: "Babu taken saƙo, gaisuwa, saƙo ko kalmomin rufewa.",
        meets: "Akwai taken saƙo, gaisuwa, gajerun jimloli biyu ko uku, da kalmomin rufewa da sunanku.",
        exceeds: "Taken saƙo yana faɗin daidai abin da imel ɗin ya ƙunsa, kuma saƙon yana faɗin abin da ake buƙata da kafin yaushe."
      },
      {
        name: "Fayil da aka haɗa",
        objective: "O3",
        notYet: "Babu fayil a haɗe, ko bai gama lodawa ba.",
        meets: "An haɗa hoto ko takarda ɗaya, kuma ya iso tare da imel ɗin.",
        exceeds: "Fayil ɗin yana da suna mai sarari, kuma imel ɗin ya ambaci abin da aka haɗa."
      },
      {
        name: "Amsa",
        objective: "O3",
        notYet: "Ba a aika amsa ba, ko an yi amfani da Reply all lokacin da mutum ɗaya ne kawai yake buƙatar ta.",
        meets: "An aika amsa ga mutumin da ya dace.",
        exceeds: "Amsar tana da ladabi kuma tana amsa kowace tambaya a cikin imel ɗin."
      },
      {
        name: "Ladabi da sirri",
        objective: "O5",
        notYet: "Imel ɗin an rubuta shi da MANYAN HARUFFA duka, ba shi da ladabi, ko yana da lambobin sirri ko kalmomin sirri.",
        meets: "Imel ɗin yana da ladabi, yana amfani da haruffa na yau da kullum, kuma babu bayanan sirri a ciki.",
        exceeds: "Yana amfani da don Allah da na gode, kuma yana karantuwa da kyau tun farko."
      },
      {
        name: "Alamun phishing",
        objective: "O4",
        notYet: "Alamun gargaɗi ƙasa da biyu, ko wata alama ba daidai ba ce.",
        meets: "Alamun gargaɗi biyu daidai da za a duba kafin danna kowace hanyar haɗi.",
        exceeds: "Yana kuma faɗin abin da za a yi maimakon dannawa, da inda ake kai rahoton zamba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun aika imel na gaske ga mai ɗaukar aiki, likita, makaranta ko ofishi cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ce sun shiga kiran bidiyo ko ganawar likita ta bidiyo (telehealth) da kansu",
      "Masu koyo da suka ce sun gane imel na phishing kuma ba su danna shi ba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai intanet",
      "Asusun imel kyauta (Gmail, Outlook.com ko Yahoo Mail), ko lokacin buɗe shi",
      "Hoto ko takarda da za a haɗa, ba tare da wani abu na sirri a ciki ba",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Rajistar asusu tana iya neman lambar waya don tabbatarwa; ku bar kowane mai koyo ya yanke abin da zai bayar, kuma ku ba da ƙarin lokaci a zaman farko.",
      "Ku haɗa masu koyo bibbiyu don su aika wa juna imel a atisayen amsa da haɗa fayil.",
      "Ku yi amfani da misalan phishing da aka buga a takarda ko hotunan allo; kada ku taɓa buɗe imel ko hanyar haɗi ta gaske mai shakku a aji.",
      "Ku yi gajeren kiran bidiyo na atisaye guda ɗaya tare da ƙungiyar don kowa ya gwada maɓallan rufe murya da kyamara.",
      "Ku tunatar da masu koyo kada su taɓa ba kowa kalmar sirrin imel ɗinsu, har da malami."
    ]
  }
};
