"use strict";

// Koach Learn course, Hausa (ha) translation of shared/intro-cybersecurity.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const CISA_PASSWORDS = { name: "CISA (hukumar tsaron intanet ta Amurka) Secure Our World: Ku yi amfani da kalmomin sirri masu ƙarfi", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA: Secure Our World (Kare duniyarmu)", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC (hukumar kare masu saye ta Amurka): Yadda ake gane zambar phishing da guje mata", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity-ha",
  lang: "ha",
  translationOf: "intro-cybersecurity",
  category: "Youth",
  name: "Gabatarwa ga Tsaron Intanet",
  skills: "Bayanin CIA triad (manufofi uku na tsaro), Gane hare-hare da aka saba gani, Gane phishing da kai rahotonsa, Kare asusu da kalmar sirri mai ƙarfi da MFA, Sabunta na'urori, Ɗaukar mataki idan matsala ta faru",
  outcome: "yi wa asusunku da na'urorinku binciken tsaro: saka kalmar sirri mai ƙarfi ta musamman da manhajar ajiye kalmomin sirri (password manager), kunna tabbatarwa ta matakai da yawa (MFA), sabunta manhajojinku, gane saƙon phishing da kai rahotonsa, da bin shiri mai sauƙi idan an yi kutse a asusu.",
  about: [
    "Tsaron intanet (cybersecurity) yana nufin kare kwamfutoci, wayoyi, asusu da bayanai daga hari. Yana da muhimmanci ga asusun makaranta na ɗalibi, asusun banki na iyali da jerin abokan cinikin ƙaramin kasuwanci, kuma fannin aiki ne da ke ƙara girma.",
    "A Babi na 1 za ku koyi manyan manufofin tsaro, hare-haren da aka fi gani da yadda ake gane phishing. A Babi na 2 za ku kare asusunku da na'urorinku, kuma ku koyi abin da za ku yi idan wani abu ya lalace.",
    "Matakan suna bin manyan matakai huɗu da CISA, hukumar tsaron intanet da kayayyakin more rayuwa ta Amurka, take koya wa kowa. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi binciken tsaro a asusu ɗaya mai muhimmanci (imel ya fi kyau): ku ba shi kalmar sirri mai ƙarfi ta musamman da aka ajiye a manhajar ajiye kalmomin sirri, ku kunna MFA, ku duba cewa wayarku ko kwamfutarku sabuwa ce (an sabunta ta), sannan ku rubuta shiri mai layi biyar na abin da za ku yi idan an yi kutse a asusun. Sannan ku nemo saƙo ɗaya da ake shakka a akwatin imel ɗinku ko tes ɗinku, ku jera alamun phishing da ke cikinsa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da ke amfani da imel, kafofin sada zumunta, asusun makaranta ko na aiki da waya kowace rana: ɗalibai, shirye-shiryen matasa, masu neman aiki, sababbin ma'aikatan ofis, masu aikin sa-kai da iyalai.",
    startingPoint: "Suna iya shiga asusu, amfani da manhajoji da aika saƙonni. Da yawa suna maimaita kalmar sirri ɗaya, ba su kunna MFA ba, suna tsallake sabuntawa, kuma ba su da tabbas yadda ake bambanta saƙon phishing da na gaske, ko abin da za su yi idan an yi kutse a asusu.",
    gap: "Yawancin hare-hare kan mutane na yau da kullum suna bin wanda ya fi sauƙi, ta hanyar maimaita kalmar sirri, phishing da yaudarar mutane (social engineering). 'Yan halaye kaɗan suna hana yawancin waɗannan hare-hare, suna kare asusun makaranta, aiki da kuɗi, kuma suna sa mutane su zama ma'aikata da 'yan uwa masu aminci.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomin tsaro kamar MFA da phishing",
      "Na'urori: wayar mai koyo ko kwamfutarsa, da asusu ɗaya mai muhimmanci, kamar imel",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya",
      "Kuɗi: kayan aiki kyauta kawai, kamar manhajar ajiye kalmomin sirri da ke cikin burauza ko waya",
      "Sirri: masu koyo ba sa taɓa raba kalmar sirri ko code na MFA da kowa, har da malami, kuma ba sa taɓa rubuta su a kayan AI"
    ],
    prerequisites: "Babu. Masu koyo suna buƙatar asusu ɗaya da za su iya shiga, kamar imel."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku gajeren bayanin wani hari", action: "bayyana manufofi uku na tsaro (sirri, ingancin bayanai da samuwa) da gane wace ce harin ya karya", standard: "kuna samun aƙalla 4 cikin misalai 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku misalan malware, ransomware, kwace asusu da yaudarar mutane (social engineering)", action: "faɗin sunan kowane hari da bayanin yadda yake yawan shiga", standard: "kowane hari da sunansa daidai, da hanya ɗaya da aka saba bi don kowanne" },
    { id: "O3", condition: "Idan aka ba ku imel ko tes na gaske ko na misali", action: "gane alamun phishing da ke cikinsa da kai rahotonsa ta hanyar da ta dace", standard: "kuna jera aƙalla alamu biyu kuma kuna zaɓar wurin da ya dace don kai rahoto" },
    { id: "O4", condition: "Ta amfani da manhajar ajiye kalmomin sirri kyauta", action: "ƙirƙirar kalmar sirri mai ƙarfi ta musamman don asusu ɗaya mai muhimmanci da ajiye ta a manhajar", standard: "da kalmar sirri mai haruffa aƙalla 16 da ba a amfani da ita a wani asusu" },
    { id: "O5", condition: "A asusu ɗaya mai muhimmanci da na'urarku", action: "kunna tabbatarwa ta matakai da yawa (MFA) da duba cewa an sabunta na'urar da manhajoji", standard: "MFA yana aiki a asusun kuma sabuntawa ta atomatik a kunne take" },
    { id: "O6", condition: "Idan aka ba ku alamun cewa an yi kutse a asusu ko na'ura ta kamu", action: "rubuta da bin shirin gyara mataki-mataki", standard: "da kowane babban mataki a tsari mai aminci: canja kalmar sirri, kunna MFA, fitar da sauran zama, duba bayanan dawo da asusu, gargaɗi abokan hulɗa da kai rahoto" }
  ],
  chapters: [
    {
      name: "Babi na 1: Barazana da yadda hare-hare ke aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da tsaron intanet yake karewa",
          minutes: 4,
          goal: "Bayyana manufofi uku na tsaro ta amfani da CIA triad.",
          text: [
            "Masana tsaro sukan yi amfani da kalmomi uku, da ake kira CIA triad. Confidentiality (sirri): mutanen da suka dace kaɗai ke iya ganin bayanan, kamar makinku ko bayanan lafiyarku. Integrity (ingancin bayanai): bayanan daidai suke, kuma wanda bai kamata ba bai canja su ba, kamar kuɗin da ke asusun banki. Availability (samuwa): bayanai da tsare-tsare suna aiki lokacin da kuke buƙatarsu, kamar shafin intanet da ba ya faɗuwa.",
            "Kowane hari yana cutar da aƙalla ɗaya daga cikin ukun. Wanda ke karanta saƙonninku yana karya sirri. Wanda ke canja adadin kuɗin biya yana karya ingancin bayanai. Ransomware da ke kulle kwamfutocin asibiti yana karya samuwa.",
            "Mutanen da ke kai hari ana kiransu threat actors (masu kai hari). Sun haɗa da 'yan damfara masu neman kuɗi da sauri har zuwa ƙungiyoyin masu laifi da aka shirya. Yawancin hare-hare kan mutane na yau da kullum ba na kanku ba ne; masu kai hari suna bin wanda ya fi sauƙi."
          ],
          words: [["Tsaron intanet (cybersecurity)", "kare kwamfutoci, wayoyi, asusu da bayanai daga hari."], ["CIA triad", "sirri, ingancin bayanai da samuwa: manufofi uku na tsaro."], ["Mai kai hari (threat actor)", "mutum ko ƙungiya da ke kai wa kwamfutoci ko asusu hari."]],
          slides: [
            { title: "CIA triad", bullets: ["Sirri: mutanen da suka dace kaɗai ke gani", "Ingancin bayanai: yana kasancewa daidai", "Samuwa: yana aiki lokacin da kuke buƙata"] },
            { title: "Hari yana karya ɗaya daga cikin ukun", bullets: ["Karanta saƙonninku: sirri", "Canja kuɗin biya: ingancin bayanai", "Kulle kwamfutoci: samuwa"] },
            { title: "Su wane ne ke kai hari", bullets: ["'Yan damfara da ƙungiyoyin masu laifi", "Suna bin wanda ya fi sauƙi", "Halaye masu kyau suna sa ku yi musu wuya"] }
          ],
          tryIt: "Ku yi tunanin manhaja ɗaya da kuke amfani da ita, kamar shafin makaranta, manhajar banki ko manhajar jadawalin aiki. Ku rubuta misali ɗaya na abin da sirri, ingancin bayanai da samuwa suke nufi a gare ta.",
          youCanNow: "bayyana CIA triad da faɗin wace manufa ce hari ya karya.",
          quickCheck: [
            { objective: "O1", q: "A cikin CIA triad, mene ne ma'anar integrity (ingancin bayanai)?", options: ["Tsarin yana da sauri koyaushe", "Mutanen da suka dace kaɗai ke iya ganin bayanan", "Bayanan kyauta ne ga kowa", "Bayanan daidai suke, kuma wanda bai kamata ba bai canja su ba"], answer: 3, why: "Ingancin bayanai yana nufin bayanan daidai suke kuma ba a canja su ba tare da izini ba." },
            { objective: "O1", q: "Wani ya karanta saƙonnin sirri na abokin makaranta ba tare da izini ba. Wace manufa za ku ce an karya?", options: ["Samuwa", "Sirri", "Ingancin bayanai", "Babu ɗaya daga cikin ukun"], answer: 1, why: "Sirri yana nufin mutanen da suka dace kaɗai ke iya ganin bayanan." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hare-haren da aka saba: malware, ransomware da kwace asusu",
          minutes: 5,
          goal: "Faɗin sunayen hare-haren da aka fi gani da yadda kowanne yake yawan shiga.",
          text: [
            "Malware manhaja ce mai cutarwa. Sau da yawa tana zuwa a cikin fayil da aka haɗa da imel, manhajar bogi, wasan da aka sato, ko tallar \"sabuntawa\" ta bogi da ke tasowa (pop-up). Ransomware malware ce da ke kulle fayilolinku kuma ta nemi kuɗi kafin ta buɗe su.",
            "Kwace asusu (account takeover) yana faruwa idan wani ya shiga asusunku. Hanyoyin da aka fi bi su ne kalmar sirri da aka sata ko aka yi hasashe, kalmar sirri da aka maimaita daga wani shafi da aka yi wa kutse (breach), ko yaudarar ku ku ba da code na lokaci ɗaya.",
            "Yaudarar mutane (social engineering) tana nufin yaudarar mutum maimakon karya fasahar. Mai kira da ke cewa shi ma'aikacin IT ne, tes na bogi game da isar da kaya, ko saƙo daga \"aboki\" da ke neman code duk yaudarar mutane ne. Mutane ne sau da yawa hanya mafi sauƙi ta shiga, shi yasa halayenku suke da muhimmanci."
          ],
          words: [["Malware", "manhaja mai cutarwa da za ta iya leƙen asiri, sata ko lalata abubuwa."], ["Ransomware", "malware da ke kulle fayiloli kuma ta nemi kuɗi."], ["Kutse a bayanai (data breach)", "lokacin da aka sace bayanan da wani kamfani ya ajiye, kamar kalmomin sirri."], ["Yaudarar mutane (social engineering)", "yaudarar mutum ya ba da damar shiga ko bayanai."]],
          slides: [
            { title: "Malware da ransomware", bullets: ["Manhaja mai cutarwa", "Tana zuwa a fayilolin imel, manhajojin bogi, wasannin da aka sato", "Ransomware tana kulle fayiloli kuma ta nemi kuɗi"] },
            { title: "Kwace asusu", bullets: ["Kalmomin sirri da aka sata ko aka yi hasashe", "Kalmomin sirri da aka maimaita daga shafin da aka yi wa kutse", "Yaudarar ku ku ba da code na lokaci ɗaya"] },
            { title: "Yaudarar mutane", bullets: ["Yaudarar mutane, ba na'urori ba", "Kiran IT na bogi, tes na isar da kaya na bogi", "Asusun abokai da aka yi wa kutse suna neman code"] }
          ],
          tryIt: "Don kowane hari (malware, ransomware, kwace asusu, yaudarar mutane), ku rubuta hanya ɗaya ta gaske da zai iya kai muku ko iyalinku, da hali ɗaya da zai hana shi.",
          youCanNow: "faɗin sunayen hare-haren da aka saba da yadda suke yawan shiga.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne hanyar da aka saba da malware ke shiga na'ura?", options: ["Wasan da aka sato ko tallar \"sabuntawa\" ta bogi", "Kunna sabuntawa ta atomatik", "Amfani da manhajar ajiye kalmomin sirri", "Sake kunna wayarku"], answer: 0, why: "Malware sau da yawa tana zuwa a fayilolin imel, manhajojin bogi, wasannin da aka sato da tallar sabuntawa ta bogi." },
            { objective: "O2", q: "Wani \"aboki\" ya aiko muku saƙo yana neman code ɗin da wayarku ta karɓa yanzu. Me za ku yi?", options: ["Ku aika code ɗin domin aboki ne", "Ku aika rabin code ɗin", "Kada ku ba da code ɗin; wannan yana kama da yaudarar mutane", "Ku saka code ɗin a kafofin sada zumunta don dubawa"], answer: 2, why: "Yaudarar ku ku ba da code na lokaci ɗaya hanya ce da aka saba bi don kwace asusu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gane phishing da kai rahotonsa",
          minutes: 5,
          goal: "Gane saƙon phishing da kai rahotonsa ta hanyar da ta dace.",
          text: [
            "Phishing imel ne, tes ko saƙo na bogi da ke ƙoƙarin sa ku danna hanyar haɗi (link), buɗe fayil ko ba da bayanai. FTC ta jera dabarun da aka saba: cewa an ga wani abin shakka a asusunku, matsala da biyan kuɗinku, neman ku tabbatar da bayananku na sirri, takardar kuɗi (invoice) da ba ku gane ba, hanyar haɗi don biya, maido da kuɗi daga gwamnati, ko takardar rangwame ta kayan kyauta.",
            "Ku duba ainihin adireshin wanda ya aiko, ba sunan kawai ba. A kwamfuta, ku sa linzami a kan hanyar haɗi ba tare da dannawa ba (a waya, ku danna ku riƙe) don ganin inda take kai wa da gaske. Ku lura da gaggawa: \"ku yi yanzu ko za a rufe asusunku.\"",
            "Idan ba ku san wanda ya aiko ba, ku kai rahoto ku goge shi. Idan kuna da asusu a wannan kamfanin, ku tuntuɓe shi ta shafin intanet ko lambar waya da kuka riga kuka sani gaskiya ce, ba wadda ke cikin saƙon ba. FTC ta ce ku tura imel ɗin phishing zuwa reportphishing@apwg.org, ku tura tes ɗin phishing zuwa SPAM (7726), kuma ku kai rahoto a ReportFraud.ftc.gov. A makaranta ko wurin aiki, ku yi amfani da maɓallin \"Report phishing\" ko ku faɗa wa IT."
          ],
          steps: ["Ku duba ainihin adireshin wanda ya aiko.", "Ku sa linzami a kan hanyar haɗi ko ku danna ku riƙe don ganin inda take kai wa.", "Ku lura da gaggawa, barazana ko kyaututtuka.", "Kada ku danna, ku amsa ko ku buɗe fayilolin da aka haɗa.", "Ku tuntuɓi kamfanin ta lamba ko shafin da kuka riga kuka sani.", "Ku kai rahoto: imel zuwa reportphishing@apwg.org, tes zuwa 7726, da ReportFraud.ftc.gov; a makaranta ko wurin aiki ku faɗa wa IT."],
          words: [["Phishing", "saƙon bogi da ke ƙoƙarin yaudarar ku ku danna, ku buɗe fayil ko ku ba da bayanai."], ["Smishing", "phishing ta saƙon tes."], ["Spoofing", "ƙirƙirar sunan wanda ya aiko, lambarsa ko adireshinsa na bogi don saƙo ya yi kama da na gaske."]],
          sources: [FTC_PHISHING, { name: "FTC: ReportFraud (kai rahoton zamba)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Dabarun phishing da aka saba (FTC)", bullets: ["\"An ga abin shakka\" ko \"matsalar biyan kuɗi\"", "\"Ku tabbatar da bayananku\"", "Takardun kuɗi da ba ku sani ba, maido da kuɗi, rangwamen kyauta"] },
            { title: "Ku duba kafin ku danna", bullets: ["Ainihin adireshin wanda ya aiko, ba sunan kawai ba", "Ku sa linzami a kai ko ku danna ku riƙe hanyar haɗi", "Gaggawa da barazana alamun gargaɗi ne"] },
            { title: "Ku tuntuɓi kamfanin da kanku", bullets: ["Ku yi amfani da shafi ko lambar da kuka riga kuka sani", "Kada ku taɓa amfani da wadda ke cikin saƙon"] },
            { title: "Ku kai rahoto", bullets: ["Imel: reportphishing@apwg.org", "Tes: ku tura zuwa 7726 (SPAM)", "ReportFraud.ftc.gov; a wurin aiki ko makaranta, ku faɗa wa IT"] }
          ],
          tryIt: "Ku buɗe akwatin spam ko junk ɗinku (ko tes ɗinku) ku nemo saƙo ɗaya da ake shakka. Ba tare da danna komai ba, ku jera duk alamar phishing da kuka gani, sannan ku kai rahotonsa ko ku goge shi.",
          youCanNow: "gane saƙon phishing, guje wa tarkonsa da kai rahotonsa ta hanyar da ta dace.",
          quickCheck: [
            { objective: "O3", q: "A waya, ta yaya za ku ga inda hanyar haɗi take kai wa da gaske kafin ku buɗe ta?", options: ["Ku danna ta da sauri sau biyu", "Ku danna hanyar haɗin ku riƙe", "Ku amsa wa wanda ya aiko", "Ku kashe wayar ku sake kunnawa"], answer: 1, why: "Dannawa da riƙewa yana nuna ainihin adireshin ba tare da buɗe shi ba." },
            { objective: "O3", q: "Wani tes ya ce an dakatar da kayanku da ake kawowa, kuma dole ku biya ɗan kuɗi ta hanyar haɗi. Ba ku jiran wani kaya. Me za ku yi?", options: ["Ku biya kuɗin don ku tsira", "Ku amsa kuna tambayar wane kaya ne", "Ku danna hanyar haɗin don ganin abin da take cewa", "Ku tura shi zuwa SPAM (7726), ku kai rahoto ku goge shi"], answer: 3, why: "FTC ta ce ku tura tes ɗin phishing zuwa SPAM (7726) kuma ku kai rahotonsu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Barazana da yadda hare-hare ke aiki",
        questions: [
          { objective: "O1", q: "Ransomware ta kulle kwamfutocin asibiti har ma'aikata ba sa iya amfani da su. Wace manufa aka karya?", options: ["Sirri", "Babu", "Ingancin bayanai", "Samuwa"], answer: 3, why: "Samuwa tana nufin tsare-tsare suna aiki lokacin da kuke buƙatarsu." },
          { objective: "O1", q: "Wani ya canja adadin kuɗi a takardar neman biya. Wace manufa aka karya?", options: ["Sauri", "Samuwa", "Sirri", "Ingancin bayanai"], answer: 3, why: "Ingancin bayanai yana nufin bayanai suna kasancewa daidai." },
          { objective: "O2", q: "Wani mai kira ya ce shi daga IT yake, kuma yana buƙatar code ɗin da aka turo muku ta tes yanzu. Wannan:", options: ["Aikin IT na yau da kullum ne", "Sabunta manhaja ne", "Yaudarar mutane ne", "Ajiyar bayanai (backup) ne"], answer: 2, why: "Yaudarar mutum ya ba da code yaudarar mutane ce (social engineering)." },
          { objective: "O2", q: "Kun yi amfani da kalmar sirri ɗaya a shafin wasa da aka yi wa kutse. Mene ne haɗarin?", options: ["Babu", "Wayarku za ta lalace", "Allonku zai yi duhu", "Masu kai hari za su iya gwada wannan kalmar sirri a sauran asusunku"], answer: 3, why: "Kalmomin sirri da aka maimaita daga kutse suna kawo kwace asusu." },
          { objective: "O3", q: "Wani imel ya ce an kulle asusun bankinku, kuma ya ba da hanyar haɗi. Mataki mafi aminci shi ne:", options: ["Ku danna hanyar haɗin da sauri", "Ku amsa da kalmar sirrinku", "Ku je ainihin shafin bankin ko ku kira lambar da kuka sani", "Ku tura shi ga abokai"], answer: 2, why: "Ku tuntuɓi kamfanin ta shafi ko lambar da kuka riga kuka sani gaskiya ce." }
        ]
      }
    },
    {
      name: "Babi na 2: Kare asusu da na'urori",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kalmomin sirri masu ƙarfi da manhajar ajiye su",
          minutes: 5,
          goal: "Ƙirƙirar kalmar sirri mai ƙarfi ta musamman da ajiye ta a manhajar ajiye kalmomin sirri.",
          text: [
            "CISA ta ce kalmar sirri mai ƙarfi doguwa ce (aƙalla haruffa 16), ba ta da tsari (random), kuma ta musamman ce (daban ga kowane asusu). Jimlar sirri (passphrase) ta kalmomi huɗu zuwa bakwai da ba su da alaƙa, kamar misalin CISA \"HorsePurpleHatRun\", doguwa ce kuma tana da sauƙin tunawa.",
            "Babu wanda zai iya tuna kalmar sirri mai ƙarfi daban don kowane asusu, don haka ku yi amfani da manhajar ajiye kalmomin sirri (password manager). Tana ƙirƙira kuma tana ajiye muku kalmomin sirri; ku kuna tuna babbar kalmar sirri ɗaya mai ƙarfi kawai. CISA ta lura cewa wasu kyauta ne, har da waɗanda ke cikin burauzar intanet da wayoyi.",
            "Kada ku taɓa raba kalmomin sirri, kada ku taɓa rubuta su a kayan AI, kuma ku canja kalmar sirri nan take idan wani kamfani ya faɗa muku cewa tana cikin kutsen bayanai (data breach)."
          ],
          steps: ["Ku buɗe manhajar ajiye kalmomin sirri: wadda ke cikin burauzarku ko wayarku, ko wata manhaja amintacciya.", "Ku zaɓi asusunku mafi muhimmanci, yawanci imel.", "Ku yi amfani da manhajar don ƙirƙirar doguwar kalmar sirri marar tsari, ko ku yi jimlar sirri ta kalmomi 4 zuwa 7.", "Ku ajiye ta a manhajar.", "Ku canja kalmar sirrin asusun, sannan ku gwada shiga."],
          words: [["Manhajar ajiye kalmomin sirri (password manager)", "manhajar da ke ƙirƙira da ajiye kalmomin sirrinku lafiya."], ["Jimlar sirri (passphrase)", "kalmar sirri da aka yi da kalmomi da yawa da ba su da alaƙa."], ["Kalmar sirri ta musamman", "kalmar sirri da ake amfani da ita a asusu ɗaya kawai."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Kalmomin sirri masu ƙarfi (CISA)", bullets: ["Doguwa: aƙalla haruffa 16", "Marar tsari (random)", "Ta musamman: daban ga kowane asusu"] },
            { title: "Jimlar sirri (passphrase)", bullets: ["Kalmomi 4 zuwa 7 da ba su da alaƙa", "Misali: HorsePurpleHatRun"] },
            { title: "Ku yi amfani da manhajar ajiye kalmomin sirri", bullets: ["Tana ƙirƙira kuma tana ajiye kalmomin sirri", "Kuna tuna babbar kalmar sirri ɗaya", "Wasu kyauta ne, a cikin burauza da wayoyi"] }
          ],
          tryIt: "Ku buɗe manhajar ajiye kalmomin sirri a wayarku ko burauzarku. Ku yi amfani da ita don ƙirƙira da ajiye sabuwar kalmar sirri mai ƙarfi don asusu ɗaya da yake da muhimmanci a gare ku.",
          youCanNow: "ƙirƙirar kalmar sirri mai ƙarfi ta musamman da ajiye ta a manhajar ajiye kalmomin sirri.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar \"ta musamman\" (unique) ga kalmar sirri?", options: ["Tana da sunanku a ciki", "Gajeriya ce kuma tana da sauƙin rubutawa", "Daban take ga kowane asusu", "Iri ɗaya take da PIN ɗin wayarku"], answer: 2, why: "Kalmar sirri ta musamman ana amfani da ita a asusu ɗaya kawai, don haka kutse ɗaya ba zai buɗe sauran ba." },
            { objective: "O4", q: "Wani kamfani ya aiko imel cewa kalmar sirrinku tana cikin kutsen bayanai. Me za ku yi?", options: ["Ku canja wannan kalmar sirri nan take", "Ku jira ku ga ko wani abu zai faru", "Ku yi amfani da kalmar sirrin a sabon asusu", "Ku raba kalmar sirrin da aboki don ya duba"], answer: 0, why: "Ku canja kalmar sirri nan take idan wani kamfani ya ce tana cikin kutse." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatarwa ta matakai da yawa (MFA) da sabuntawa",
          minutes: 5,
          goal: "Kunna tabbatarwa ta matakai da yawa da sabunta na'ura.",
          text: [
            "Tabbatarwa ta matakai da yawa (MFA) tana neman shaida ta biyu bayan kalmar sirrinku, kamar code daga manhajar authenticator, saƙon tambaya a wayarku, makullin tsaro (security key), ko passkey. Ko da wani ya sace kalmar sirrinku, ba zai iya shiga ba tare da shaida ta biyun ba. Ku fara kunna ta a imel, banki, makaranta da kafofin sada zumunta. CISA ta ce kowane irin MFA ya fi babu, kuma mafi ƙarfi shi ne MFA da ke tsayayya da phishing (FIDO, wanda passkey da makullin tsaro ke amfani da shi), wanda ya fi wuyar yaudara fiye da code ta tes.",
            "Kada ku taɓa raba code na MFA. Idan kun sami code ko tambayar shiga da ba ku nema ba, wataƙila wani yana da kalmar sirrinku: ku ƙi shi, sannan ku canja kalmar sirrinku.",
            "Sabuntawa (updates) suna gyara ramukan tsaro da masu kai hari suka riga suka sani. Ku kunna sabuntawa ta atomatik a wayarku, kwamfutarku, burauzarku da manhajojinku, kuma ku sake kunna na'urar idan aka nema. CISA ta saka sabunta manhajoji cikin manyan matakanta huɗu, tare da guje wa phishing, kalmomin sirri masu ƙarfi da MFA."
          ],
          steps: ["Ku buɗe saitunan tsaro na asusun imel ɗinku.", "Ku nemo two-step verification, two-factor ko multifactor authentication.", "Ku bi matakan; passkey, makullin tsaro ko manhajar authenticator sun fi wuyar yaudara fiye da code ta tes, amma kowane MFA ya fi babu.", "Ku ajiye code na ajiya (backup codes) a wuri mai aminci ba a intanet ba.", "Ku buɗe saitunan wayarku ko kwamfutarku ku kunna sabuntawa ta atomatik."],
          words: [["Tabbatarwa ta matakai da yawa (MFA)", "shaida ta biyu, bayan kalmar sirrinku, cewa ku ne da gaske."], ["Manhajar authenticator", "manhajar da ke nuna code na shiga da ke canjawa bayan 'yan daƙiƙoƙi."], ["Passkey", "hanyar shiga da ke amfani da na'urarku da fuskarku, zanen yatsa ko PIN maimakon kalmar sirri."], ["Sabuntawa / gyara (update / patch)", "gyara daga mai yin manhajar da ke rufe ramukan tsaro."]],
          sources: [CISA_SOW, { name: "CISA: Fiye da kalmar sirri (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "MFA: makulli na biyu", bullets: ["Kalmar sirri + code, tambaya, makulli ko passkey", "Kalmar sirri da aka sata ba ta isa ba", "Ku kunna a imel, banki, makaranta, kafofin sada zumunta"] },
            { title: "Code ko tambaya da ba ku nema ba?", bullets: ["Kada ku taɓa raba shi", "Ku ƙi shi", "Ku canja kalmar sirrinku"] },
            { title: "Ku sabunta komai", bullets: ["Waya, kwamfuta, burauza, manhajoji", "Ku kunna sabuntawa ta atomatik", "Ku sake kunna na'urar idan aka nema"] }
          ],
          tryIt: "Ku kunna MFA a asusun imel ɗinku kuma ku ajiye code na ajiya. Sannan ku duba ko akwai sabuntawa a wayarku ko kwamfutarku, ku saka duk wanda ke jira.",
          youCanNow: "kunna MFA da kiyaye na'urorinku a sabunce.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne misalin shaida ta biyu ta MFA?", options: ["Sunan asusunku (username)", "Launin da kuka fi so", "Adireshin imel ɗinku", "Code daga manhajar authenticator"], answer: 3, why: "MFA tana neman shaida ta biyu bayan kalmar sirrinku, kamar code na authenticator." },
            { objective: "O5", q: "Wayarku tana neman ta saka sabuntawa ta sake kunnawa. Me za ku yi?", options: ["Ku ƙyale ta tsawon watanni", "Ku kashe sabuntawa don ta daina tambaya", "Ku saka shi ku sake kunnawa idan aka nema", "Ku sabunta ne kawai idan aboki ya ce"], answer: 2, why: "Sabuntawa suna gyara ramukan tsaro da masu kai hari suka riga suka sani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idan wani abu ya lalace",
          minutes: 5,
          goal: "Bin shiri mai sauƙi idan an yi kutse a asusu ko na'ura ta kamu.",
          text: [
            "Alamun matsala: ba ku iya shiga, abokai suna samun saƙonni masu ban mamaki daga gare ku, kuna ganin shiga ko sayayya da ba ku yi ba, ko na'urarku ta fara nuna tallace-tallacen da ke tasowa (pop-ups) farat ɗaya ko tana tafiya a hankali sosai.",
            "Idan an yi kutse a asusu: daga na'ura mai aminci, ku canja kalmar sirri, ku kunna MFA, ku fita daga duk sauran zama (yawancin asusu suna da wannan a saitunan tsaro), kuma ku duba imel da lambar waya na dawo da asusu. Ku faɗa wa abokan hulɗarku kada su danna saƙonni daga gare ku. Idan akwai batun kuɗi, ku kira bankinku ta lambar da ke kan katinku.",
            "Idan kun danna hanyar haɗi mara kyau ko kuna tsammani na'ura ta kamu, FTC ta ce ku sabunta manhajar tsaronku, ku yi bincike (scan) ku cire duk abin da ta nuna. A makaranta ko wurin aiki, ku faɗa wa IT nan take; kai rahoto da sauri ba shiga matsala ba ne, yana rage ɓarnar. Ku kai rahoton zamba a ReportFraud.ftc.gov ko ic3.gov na FBI."
          ],
          steps: ["Ku yi amfani da na'ura mai aminci.", "Ku canja kalmar sirri ku kunna MFA.", "Ku fita daga duk sauran zama.", "Ku duba imel da lambar waya na dawo da asusu.", "Ku gargaɗi abokan hulɗa; ku kira bankinku idan akwai batun kuɗi.", "Ku sabunta manhajar tsaro ku yi bincike (scan).", "Ku faɗa wa IT a makaranta ko wurin aiki; ku kai rahoton zamba a ReportFraud.ftc.gov ko ic3.gov."],
          words: [["Matsalar tsaro (incident)", "matsalar tsaro, kamar asusun da aka yi wa kutse ko na'urar da ta kamu."], ["Zama (session)", "wurin da kuka shiga asusu, kamar waya ko burauza."], ["Bayanan dawo da asusu (recovery info)", "imel da lambar waya da wani sabis ke amfani da su don taimaka muku dawowa cikin asusunku."]],
          sources: [FTC_PHISHING, { name: "FBI: Cibiyar karɓar ƙorafin laifukan intanet (IC3)", url: "https://www.ic3.gov" }, { name: "FTC: ReportFraud (kai rahoton zamba)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Alamun matsala", bullets: ["Ba ku iya shiga", "Abokai suna samun saƙonni masu ban mamaki daga gare ku", "Shiga ko sayayya da ba ku yi ba"] },
            { title: "Shirin asusun da aka yi wa kutse", bullets: ["Ku canja kalmar sirri, ku kunna MFA", "Ku fita daga duk zama", "Ku duba imel da lambar waya na dawo da asusu"] },
            { title: "Na'ura ta kamu ko akwai batun kuɗi", bullets: ["Ku sabunta manhajar tsaro ku yi bincike", "Ku kira bankinku ta lambar da ke kan katinku"] },
            { title: "Ku kai rahoto da sauri", bullets: ["Ku faɗa wa IT a makaranta ko wurin aiki", "ReportFraud.ftc.gov ko ic3.gov"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi binciken tsaro a imel ɗinku (kalmar sirri mai ƙarfi a manhajar ajiye su, MFA a kunne, na'ura a sabunce), ku rubuta shirinku mai layi biyar na asusun da aka yi wa kutse, sannan ku jera alamun phishing a cikin saƙo ɗaya da ake shakka.",
          youCanNow: "kare asusu daga farko har ƙarshe da ɗaukar mataki cikin natsuwa idan aka taɓa yi masa kutse.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne alamar cewa wataƙila an yi kutse a asusu?", options: ["Abokai suna samun saƙonni masu ban mamaki daga gare ku da ba ku aika ba", "Kun shiga jiya", "Kalmar sirrinku doguwa ce", "Kun kunna MFA"], answer: 0, why: "Saƙonni masu ban mamaki da aka aika daga asusunku alama ce da aka saba gani ta kwace asusu." },
            { objective: "O6", q: "A wurin aiki kuna tsammani kun danna hanyar haɗi mara kyau. Me za ku yi?", options: ["Ku yi shiru don kada ku shiga matsala", "Ku faɗa wa IT nan take", "Ku sake danna hanyar haɗin don dubawa", "Ku kashe MFA"], answer: 1, why: "Kai rahoto da sauri yana rage ɓarna, kuma ba shiga matsala ba ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kare asusu da na'urori",
        questions: [
          { objective: "O4", q: "A cewar CISA, kalmar sirri mai ƙarfi ita ce:", options: ["Gajeriya kuma mai sauƙi", "Iri ɗaya ga kowane asusu", "Sunan dabbar gidanku", "Doguwa, marar tsari kuma ta musamman"], answer: 3, why: "CISA ta ce doguwa (aƙalla haruffa 16), marar tsari kuma ta musamman." },
          { objective: "O4", q: "Me manhajar ajiye kalmomin sirri take yi?", options: ["Tana raba kalmomin sirrinku da abokai", "Tana goge asusunku", "Tana ƙirƙira da ajiye muku kalmomin sirri masu ƙarfi", "Tana kashe MFA"], answer: 2, why: "Kuna tuna babbar kalmar sirri ɗaya; ita kuma tana ajiye sauran." },
          { objective: "O5", q: "Kun sami tambayar MFA da ba ku nema ba. Me za ku yi?", options: ["Ku amince da ita", "Ku tura code ɗin ga aboki ta tes", "Ku ƙyale ta har abada", "Ku ƙi ta ku canja kalmar sirrinku"], answer: 3, why: "Tambayar da ba ku zata ba tana nufin wataƙila wani yana da kalmar sirrinku." },
          { objective: "O5", q: "Me yasa za a saka sabuntawa?", options: ["Suna gyara ramukan tsaro da masu kai hari suka sani", "Suna sa waya ta yi nauyi", "Suna goge hotunanku", "Na wasanni ne kawai"], answer: 0, why: "Sabuntawa suna rufe ramukan tsaro da aka sani." },
          { objective: "O6", q: "An yi kutse a asusunku. Bayan canja kalmar sirri, babban mataki shi ne:", options: ["Saka sabuwar kalmar sirrinku a intanet", "Goge abokan hulɗarku", "Kashe sabuntawa", "Fita daga duk sauran zama"], answer: 3, why: "Fita daga ko'ina yana korar mai kutsen." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Tsaron Intanet",
    questions: [
      { objective: "O1", q: "Tsaron intanet shi ne:", options: ["Kare na'urori, asusu da bayanai daga hari", "Sa shafukan intanet su yi kyau da launuka", "Wani nau'in waya", "Wasan bidiyo"], answer: 0, why: "Yana kare na'urori, asusu da bayanai." },
      { objective: "O1", q: "A cikin CIA triad, \"confidentiality\" (sirri) yana nufin:", options: ["Tsarin yana da sauri", "An ajiye kwafin bayanan (backup)", "Mutanen da suka dace kaɗai ke iya ganin bayanan", "Wutar lantarki a kunne take"], answer: 2, why: "Sirri yana kiyaye bayanai a ɓoye." },
      { objective: "O1", q: "An kashe wani shafin intanet har abokan ciniki ba sa iya amfani da shi. Wace manufa aka cutar?", options: ["Ingancin bayanai", "Sirri", "Samuwa", "Tabbatar da shaida (authentication)"], answer: 2, why: "Samuwa tana nufin yana aiki lokacin da ake buƙata." },
      { objective: "O2", q: "Malware ita ce:", options: ["Sabuntawa mai amfani", "Katangar tsaro (firewall)", "Manhajar ajiye kalmomin sirri", "Manhaja mai cutarwa"], answer: 3, why: "Malware manhaja ce mai cutarwa." },
      { objective: "O2", q: "Ransomware:", options: ["Tana sa kwamfutarku ta yi sauri", "Tana kulle fayiloli kuma ta nemi kuɗi", "Tana ajiye kwafin hotunanku", "Tana hana saƙonnin spam"], answer: 1, why: "Ransomware tana riƙe fayiloli kamar fursunoni har sai an biya." },
      { objective: "O2", q: "Yaudarar mutane (social engineering) ita ce:", options: ["Gina gadoji", "Yaudarar mutane su ba da damar shiga ko bayanai", "Sabunta manhajoji", "Darasin makaranta kawai"], answer: 1, why: "Tana kai wa mutane hari maimakon fasaha." },
      { objective: "O2", q: "Wace ce hanyar da aka saba bi don kwace asusu?", options: ["Maimaita kalmar sirri da ta fito a kutsen bayanai", "Amfani da MFA", "Saka sabuntawa", "Amfani da manhajar ajiye kalmomin sirri"], answer: 0, why: "Kalmomin sirri da suka fito aka maimaita suna bar masu kai hari su shiga sauran asusu." },
      { objective: "O3", q: "Phishing shi ne:", options: ["Saƙon bogi da ke ƙoƙarin yaudarar ku", "Manhajar kamun kifi", "Hanyar ajiye kwafin bayanai", "Wani nau'in kalmar sirri"], answer: 0, why: "Phishing tana yaudarar ku ku danna ko ku ba da bayanai." },
      { objective: "O3", q: "Wace alamar phishing ce FTC ta jera?", options: ["Saƙo daga aboki da kuke jira", "Rasiti na abin da kuka saya", "Cewa an ga abin shakka, tare da hanyar haɗi don gyarawa", "Mujallar labarai ta makaranta"], answer: 2, why: "Gargaɗin \"an ga abin shakka\" na bogi dabara ce da aka saba gani." },
      { objective: "O3", q: "Kafin ku danna hanyar haɗi a imel a kwamfuta, kuna iya:", options: ["Sa linzami a kanta don ganin inda take kai wa da gaske", "Danna ta sau biyu", "Amsa da kalmar sirrinku", "Kashe kwamfutar"], answer: 0, why: "Sa linzami a kanta yana nuna ainihin adireshin shafin." },
      { objective: "O3", q: "Ina FTC ta ce a tura tes ɗin phishing?", options: ["Ga duk abokan hulɗarku", "SPAM (7726)", "Ga wanda ya aiko", "911"], answer: 1, why: "Ku tura tes ɗin phishing zuwa 7726 (SPAM)." },
      { objective: "O3", q: "A wurin aiki kun sami imel da ake shakka. Me za ku yi?", options: ["Ku danna don ganin ko na gaske ne", "Ku kai rahotonsa da maɓallin phishing ko ku faɗa wa IT", "Ku tura shi ga abokan aiki", "Ku amsa ku tambaya"], answer: 1, why: "IT za ta iya toshe shi ga kowa." },
      { objective: "O4", q: "Mafi ƙarancin tsawon kalmar sirri mai ƙarfi a cewar CISA shi ne:", options: ["Aƙalla haruffa 16", "Haruffa 4", "Haruffa 8 daidai", "Kowane tsawo"], answer: 0, why: "CISA ta ce aƙalla haruffa 16; mafi tsawo ya fi ƙarfi." },
      { objective: "O4", q: "Wace ce jimlar sirri (passphrase) mai kyau?", options: ["password123", "Ranar haihuwarku", "HorsePurpleHatRun", "abc"], answer: 2, why: "Kalmomi da yawa da ba su da alaƙa suna sa ta yi tsawo kuma ta yi wuyar hasashe." },
      { objective: "O4", q: "Manhajar ajiye kalmomin sirri tana nufin abin da kawai za ku tuna shi ne:", options: ["Kowace kalmar sirri", "Babbar kalmar sirri ɗaya mai ƙarfi", "Babu kalmar sirri kuma babu na'ura", "Kalmar sirrin abokinku"], answer: 1, why: "Manhajar tana ajiye sauran." },
      { objective: "O5", q: "MFA tana kare ku domin:", options: ["Kalmar sirri da aka sata ita kaɗai ba ta isa a shiga ba", "Tana gajarta kalmar sirrinku", "Tana raba shigarku", "Tana kashe wayarku"], answer: 0, why: "MFA tana buƙatar shaida ta biyu." },
      { objective: "O5", q: "Wane irin MFA ne CISA ta ce ya fi ƙarfi?", options: ["Rubuta code a takarda mai manne", "MFA da ke tsayayya da phishing, kamar passkey ko makullin tsaro", "Faɗa wa aboki code ɗin", "Babu shaida ta biyu"], answer: 1, why: "CISA ta ce MFA da ke tsayayya da phishing shi ne abin da za a nema; passkey da makullin tsaro sun fi wuyar yaudara fiye da code ta tes." },
      { objective: "O5", q: "Manyan matakai huɗu na CISA su ne: guje wa phishing, kalmomin sirri masu ƙarfi, MFA da:", options: ["Sayen sabuwar waya", "Sabunta manhajoji", "Kashe Wi-Fi har abada", "Raba kalmomin sirri"], answer: 1, why: "Sabunta manhajoji shi ne babban mataki na huɗu." },
      { objective: "O6", q: "Kuna tsammani kun danna hanyar haɗi mara kyau. FTC ta ce ku:", options: ["Ƙyale shi", "Sabunta manhajar tsaro, ku yi bincike (scan) ku cire abin da ta nuna", "Tura hanyar haɗin ga abokai", "Biya duk wanda ya nema"], answer: 1, why: "Bincike yana nemo manhaja mai cutarwa ya cire ta." },
      { objective: "O6", q: "A ina za ku iya kai rahoton zambar intanet ga FBI?", options: ["ic3.gov", "Sharhi a kafofin sada zumunta", "Imel ɗin ɗan damfarar", "Babu inda"], answer: 0, why: "IC3 ita ce Cibiyar Karɓar Ƙorafin Laifukan Intanet ta FBI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      5,
      7,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kalmar sirri mai ƙarfi ta musamman",
        objective: "O4",
        notYet: "Kalmar sirrin gajeriya ce, an maimaita ta, ko ba a ajiye ta a wuri mai aminci ba.",
        meets: "Kalmar sirri mai haruffa aƙalla 16, da ake amfani da ita a wannan asusun kaɗai, an ajiye ta a manhajar ajiye kalmomin sirri.",
        exceeds: "Ya kuma duba wani asusu mai muhimmanci ɗaya, ya mai da kalmar sirrinsa ta musamman."
      },
      {
        name: "Tabbatarwa ta matakai da yawa",
        objective: "O5",
        notYet: "Ba a kunna MFA ba.",
        meets: "MFA a kunne take kuma tana aiki a asusun.",
        exceeds: "Yana amfani da manhajar authenticator, passkey ko makullin tsaro maimakon code ta tes."
      },
      {
        name: "Na'ura a sabunce",
        objective: "O5",
        notYet: "Ba a duba sabuntawa ba, ko sabuntawa ta atomatik a kashe take.",
        meets: "Wayar ko kwamfutar a sabunce take, kuma sabuntawa ta atomatik a kunne take.",
        exceeds: "Ya kuma duba burauza da manyan manhajoji."
      },
      {
        name: "Shirin gyara",
        objective: "O6",
        notYet: "Babu shirin, ko yana da ƙasa da matakai uku daidai.",
        meets: "Layuka biyar da suka ƙunshi canja kalmar sirri, MFA, fita daga sauran zama, duba bayanan dawo da asusu da gargaɗi abokan hulɗa.",
        exceeds: "Ya kuma faɗi inda za a kai rahoto da wanda za a kira idan akwai batun kuɗi."
      },
      {
        name: "Alamun phishing",
        objective: "O3",
        notYet: "Ba a sami saƙo ba, ko ba a jera alamu daidai ba.",
        meets: "Saƙo ɗaya da ake shakka, tare da aƙalla alamun phishing biyu daidai.",
        exceeds: "Ya kuma faɗi yadda da inda za a kai rahotonsa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na binciken tsaro",
      "Masu koyo da har yanzu suke amfani da MFA da manhajar ajiye kalmomin sirri bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka kai rahoton saƙon phishing ga IT ko FTC, ko suka guje wa zamba, cikin kwanaki 30 bayan kwas ɗin",
      "Masu koyo da suka ci gaba zuwa wani kwas ko takardar shaida a tsaron intanet ko IT"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar mai koyo ko kwamfutarsa mai intanet",
      "Asusu ɗaya mai muhimmanci da zai iya shiga, mafi kyau imel",
      "Manhajar ajiye kalmomin sirri kyauta, kamar wadda ke cikin burauza ko waya",
      "Takarda da alƙalami don shirin gyara mai layi biyar; kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Kada ku taɓa neman gani, karɓa ko rubuta kalmar sirri ko code na MFA na kowa; masu koyo suna yin matakan asusu a allonsu da kansu.",
      "Ku tabbatar kowane mai koyo har yanzu yana iya shiga imel ko wayar dawo da asusunsa kafin kunna MFA, don kada a kulle kowa a cikin aji.",
      "Ku kawo misalan phishing da aka buga ko hotunan allo (screenshots), don masu koyo da ba su da saƙon da ake shakka su iya yin aikin phishing.",
      "A kwamfutocin da ake rabawa ko na ɗakin gwaji, kada a ajiye kalmomin sirri a burauza; ku sa masu koyo su yi amfani da manhajar ajiye kalmomin sirri ta wayarsu, kuma su fita daga asusu a ƙarshe.",
      "Idan mai koyo ya gano asusu na gaske da aka yi wa kutse, ku dakata ku jagorance shi ta shirin gyara daga na'ura mai aminci."
    ]
  }
};
