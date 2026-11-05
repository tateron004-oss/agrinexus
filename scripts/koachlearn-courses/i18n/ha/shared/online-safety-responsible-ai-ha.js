"use strict";

// Koach Learn course, Hausa (ha) translation of shared/online-safety-responsible-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "online-safety-responsible-ai-ha",
  lang: "ha",
  translationOf: "online-safety-responsible-ai",
  category: "Re-Entry",
  name: "Tsaro a Intanet da Amfani da AI cikin Gaskiya",
  skills: "Yin kalmomin sirri masu ƙarfi, Kunna shiga mataki biyu, Gane saƙonnin damfara da zambar AI, Kai rahoton zamba da satar shaida, Duba AI don kuskure da son kai, Amfani da AI cikin gaskiya a makaranta da wurin aiki",
  outcome: "kulle manyan asusunku da kalmomin sirri masu ƙarfi da shiga mataki biyu, gane da kai rahoton saƙonnin damfara (phishing), bidiyon bogi (deepfake) da zambar da ake yi da AI, da amfani da kayan AI cikin gaskiya da adalci, kuna duba amsoshinsu kuma kuna bin dokokin makaranta ko wurin aiki.",
  about: [
    "Kasancewa a intanet yana da haɗari na gaske: satar asusu, zamba, da saƙonnin bogi da suke kama da na gaske saboda AI. Yana kuma kawo sababbin tambayoyi: yaushe ne ya dace a yi amfani da AI, kuma ta yaya za ku san cewa ya yi kuskure ko bai yi adalci ba?",
    "Wannan kwas ɗin na kowa ne: masu dawowa gida daga gidan yari da ke sake shiga intanet, matasa, tsoffin sojoji, masu neman aiki da mutanen unguwa. Ba sai kuna da wata ƙwarewa a fasaha ba.",
    "A Babi na 1 za ku kare kanku. A Babi na 2 za ku koyi amfani da AI cikin gaskiya. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku cike jerin abubuwan tsaro a intanet da amfani da AI cikin gaskiya na kanku: ku canja kalmar sirrin babban imel ɗinku zuwa kalmar sirri mai ƙarfi ta kalmomi da yawa (passphrase), ku kunna shiga mataki biyu a kansa, ku duba ko wayarku da manhajojinku suna da sabuntawa, ku rubuta wurare uku na kai rahoton zamba, sannan ku rubuta katin dokokin AI na kanku mai layuka biyar da ke magana kan sirri, duba amsoshi, gaskiya, adalci da lokacin da ba za a yi amfani da AI ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari. Da yawa ba sa nan lokacin da wayoyin zamani, asusun intanet da kayan AI suka canja, kuma yanzu suna buɗe asusun imel, na neman aiki da na tallafi, sau da yawa a karon farko.",
    startingPoint: "Suna iya kira da tura saƙon tes a waya mai sauƙi; wasu suna da sabon asusun imel kuma sun taɓa gwada mataimakin AI. Da yawa suna maimaita kalmomin sirri masu sauƙi, ba su taɓa amfani da shiga mataki biyu ba, kuma ba su taɓa ganin zambar muryar AI ko bidiyon AI ba.",
    gap: "Mutanen da ke sake gina rayuwarsu ana yawan kai musu zambar da za ta iya satar tallafi, albashi ko shaidarsu, kuma amfani da AI ba daidai ba a makaranta ko wurin aiki zai iya sa su rasa takardar shaida ko aiki. Masu koyo suna buƙatar kulle asusunsu, gane da kai rahoton zamba, da amfani da AI a sirri, a hankali kuma cikin gaskiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wataƙila suna da waya mai sauƙi kawai, ko kwamfutar ɗakin karatu mai ƙayyadadden lokaci",
      "Lokaci: darussa na minti 5 da suka dace da ganawa da aiki",
      "Wasu sharuɗɗan parole ko probation (sakin sharaɗi) suna iyakance amfani da intanet; kowane mai koyo yana bin nasa sharuɗɗan",
      "Haɗarin zamba da sirri yana da yawa: babu kalmar sirri ta gaske, lambar shari'a ko lambar sirri a kowane aikin gwaji"
    ],
    prerequisites: "Babu. Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) kwas ne mai amfani na farko ga masu koyo da suke sababbi a AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don babban asusun imel ɗinku", action: "yin kalmar sirri mai ƙarfi ta kalmomi da yawa, kunna shiga mataki biyu da duba sabuntawar wayarku da manhajojinku", standard: "ba tare da taimako ba, kuma an ajiye lambobin ajiya (backup codes) a sirri" },
    { id: "O2", condition: "Idan aka ba ku saƙo ko kira, har da muryar AI ko bidiyon AI", action: "gane alamun gargaɗin saƙonnin damfara (phishing) da zambar da ake yi da AI", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O3", condition: "Idan kun gamu da zamba ko an saci bayananku", action: "jera inda za ku kai rahoto da matakan farko na kare kanku", standard: "kuna ambaton dukkan wurare uku na kai rahoto a Amurka" },
    { id: "O4", condition: "Kafin ku aika prompt (umarni) ga kayan AI", action: "duba prompt ɗin da cire bayanan sirri daga ciki", standard: "ba tare da bayyana kalmar sirri, lambar katin shaida, ta shari'a, ta banki ko ta kati ba" },
    { id: "O5", condition: "Idan aka ba ku amsar AI", action: "duba ta don bayanan ƙarya da son kai marar adalci", standard: "kafin ku yi amfani da ita" },
    { id: "O6", condition: "A makaranta, a wurin aiki ko a intanet", action: "bin dokokin amfani da AI, faɗin yadda AI ya taimaka da zaɓar lokacin da ba za a yi amfani da AI ba", standard: "a katin dokokin AI na kanku mai layuka biyar" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kare kanku a intanet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kalmomin sirri masu ƙarfi da shiga mataki biyu",
          minutes: 5,
          goal: "Yi kalmar sirri mai ƙarfi ta kalmomi da yawa, ku kunna shiga mataki biyu a imel ɗinku.",
          text: [
            "Imel ɗinku shi ne mabuɗin komai: idan wani ya shiga cikinsa, zai iya canja sauran kalmomin sirrinku. Ku fara kare shi.",
            "Kalmar sirri mai ƙarfi doguwa ce, kuma ba a amfani da ita a wani wuri. Hanya mai sauƙi ita ce passphrase: kalmomi huɗu ko fiye da aka zaɓa ba bisa tsari ba, kamar \"maple-river-tiger-lamp\". Ku yi amfani da kalmar sirri daban a kowane muhimmin asusu. Manhajar ajiye kalmomin sirri (password manager), wadda ke cikin wayoyi da burauzoji da yawa, za ta iya tuna muku su.",
            "Ku kunna shiga mataki biyu, wanda ake kira multifactor authentication ko MFA. Bayan kalmar sirrinku, za ku kuma saka code daga wayarku ko ku amince da saƙon da ya bayyana. Ko da wani ya saci kalmar sirrinku, ba zai iya shiga ba. Hukumar tsaron intanet ta Amurka, Cybersecurity and Infrastructure Security Agency (CISA), tana ba da shawarar kalmomin sirri masu ƙarfi, MFA, manhajar ajiye kalmomin sirri da sabunta manhajoji."
          ],
          steps: ["Ku yi passphrase ta kalmomi huɗu ko fiye da aka zaɓa ba bisa tsari ba.", "Ku canja kalmar sirrin imel ɗinku zuwa ita.", "Ku buɗe saitunan tsaro (security settings) na asusun imel ɗinku.", "Ku kunna shiga mataki biyu (MFA) ku bi matakan.", "Ku ajiye lambobin ajiya (backup codes) a wuri mai aminci da sirri."],
          words: [["Passphrase", "kalmar sirri da aka yi da kalmomi da yawa da aka zaɓa ba bisa tsari ba."], ["MFA / shiga mataki biyu", "dubawa ta biyu, kamar code daga waya, bayan kalmar sirrinku."], ["Password manager", "manhaja mai aminci da ke ajiye kalmomin sirrinku."]],
          slides: [
            { title: "Ku fara kare imel ɗinku", bullets: ["Zai iya canja sauran asusunku"] },
            { title: "Kalmomin sirri masu ƙarfi", bullets: ["Doguwa, kuma ba a wani wuri ba", "Kalmomi huɗu ko fiye ba bisa tsari ba", "Daban a kowane muhimmin asusu"] },
            { title: "Shiga mataki biyu (MFA)", bullets: ["Kalmar sirri da code daga waya ko saƙon amincewa", "Yana hana yawancin hare-hare da kalmar sirri da aka sata", "Ku ajiye lambobin ajiya a wuri mai aminci"] }
          ],
          sources: [{ name: "CISA: Cybersecurity Awareness and Secure Our World", url: "https://www.cisa.gov/secure-our-world" }],
          tryIt: "Ku canja kalmar sirrin babban imel ɗinku zuwa passphrase mai ƙarfi, ku kunna shiga mataki biyu. Idan ba za ku iya yi yanzu ba, ku rubuta matakan ku yi shi yau.",
          youCanNow: "yin passphrase mai ƙarfi da kare imel ɗinku da shiga mataki biyu.",
          quickCheck: [
            { objective: "O1", q: "Me yasa za ku fara kare asusun imel ɗinku?", options: ["Yana da hotuna mafi yawa", "Shi ne mafi wuyar amfani", "Wanda ya shiga imel ɗinku zai iya canja sauran kalmomin sirrinku", "Asusun imel suna da kuɗi"], answer: 2, why: "Imel ɗinku mabuɗin sauran asusu ne, domin saƙonnin canja kalmar sirri can suke zuwa." },
            { objective: "O1", q: "Kalmar sirrin shafin neman aikinku ɗaya ce da ta imel ɗinku. Me za ku yi?", options: ["Ku yi passphrase mai ƙarfi daban ga kowanne", "Ku bar ta; kalmar sirri ɗaya ta fi sauƙi", "Ku rubuta ta a murfin wayarku", "Ku ba aboki ita don ya tuna muku"], answer: 0, why: "Ku yi amfani da kalmar sirri daban a kowane muhimmin asusu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gane saƙonnin damfara da zambar da ake yi da AI",
          minutes: 6,
          goal: "Gane saƙonnin damfara, kiran bogi da bidiyon bogi kafin ku danna ko ku biya.",
          text: [
            "Phishing (saƙon damfara) saƙo ne na bogi, ta imel, tes ko kafofin sada zumunta, da ke ƙoƙarin sa ku danna hanyar haɗi (link), ku bayar da bayanai ko ku aika kuɗi. Hukumar kasuwanci ta Amurka, Federal Trade Commission (FTC), ta lissafa alamun da aka saba gani: saƙon da ba ku jira ba daga kamfanin da kuka sani, iƙirarin cewa akwai matsala a asusunku ko biyanku, neman ku tabbatar da bayanan sirri, da hanyar haɗi don \"sabunta\" biyanku.",
            "AI yana sa zamba ta fi kama da gaskiya. 'Yan damfara za su iya rubuta saƙonni marasa kuskure, su yi bidiyon bogi da ake kira deepfake, su kuma kwafi muryar mutum daga ɗan gajeren rikodi. Kira zai iya yin kama da muryar jikanku, shugabanku ko jami'in parole ɗinku daidai.",
            "Alamun gargaɗi ba sa canjawa: suna gaggauta ku, suna tsoratar da ku, suna neman katin kyauta (gift card), tura kuɗi ta banki (wire transfer) ko kuɗin intanet (crypto), ko suna neman code da aka turo wayarku. Ku tsaya. Kada ku danna. Ku tuntuɓi mutumin ko kamfanin ta lamba ko shafin da kuka riga kuka sani gaskiya ne."
          ],
          steps: ["Ku dakata: shin wannan saƙon ba a jira shi ba ne, ko na gaggawa ne?", "Kada ku danna hanyar haɗi ko ku buɗe abin da aka haɗa (attachment).", "Ku nemi buƙatar kuɗi, katin kyauta, crypto ko code.", "Ku tuntuɓi mutumin ko kamfanin ta lambar da kuka riga kuka sani.", "Ku kai rahoto ku goge saƙon."],
          words: [["Phishing (saƙon damfara)", "saƙon bogi da ke ƙoƙarin satar bayanai ko kuɗi."], ["Deepfake (bidiyon bogi)", "bidiyo, hoto ko murya ta bogi da aka yi da AI don ta yi kama da ta gaske."], ["Voice cloning (kwafin murya)", "amfani da AI don kwafin muryar wani."]],
          slides: [
            { title: "Alamun saƙon damfara (FTC)", bullets: ["Saƙon da ba a jira ba daga kamfanin da kuka sani", "\"Akwai matsala a asusunku ko biyanku\"", "Yana neman ku tabbatar da bayanai ko ku danna don biya"] },
            { title: "AI yana sa zamba ta yi kama da gaskiya", bullets: ["Rubutu marar kuskure", "Bidiyon bogi (deepfake)", "Kwafin muryar mutanen da kuka sani"] },
            { title: "Alamun gargaɗi iri ɗaya ne", bullets: ["Gaggawa ko tsoratarwa", "Katin kyauta, tura kuɗi, crypto, code na waya", "Ku sake kira ta lambar da kuka sani"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Ku duba saƙonnin imel da tes ɗinku ku nemo ɗaya da zai iya zama saƙon damfara. Ku lissafa alamun gargaɗin da yake nunawa. Tare da iyalinku, ku amince da kalmar tsaro (safe word) don tabbatar da kiran gaggawa.",
          youCanNow: "gane saƙonnin damfara, bidiyon bogi da zambar kwafin murya, da amsa musu lafiya.",
          quickCheck: [
            { objective: "O2", q: "Mene ne phishing (saƙon damfara)?", options: ["Saƙo mai aminci daga bankinku", "Hanyar ajiye kwafin bayanan wayarku", "Wani nau'in kalmar sirri", "Saƙon bogi da ke ƙoƙarin sa ku danna, ku bayar da bayanai ko ku aika kuɗi"], answer: 3, why: "Saƙon damfara saƙo ne na bogi da ke ƙoƙarin yaudarar ku." },
            { objective: "O2", q: "Wani kira yana kama da muryar jami'in parole ɗinku daidai, yana cewa ku biya kuɗi yau ta tura kuɗi ta banki. Me za ku yi?", options: ["Ku biya nan take don kada ku shiga matsala", "Ku katse wayar ku kira ofishin ta lambar da kuka riga kuka sani", "Ku ba su code ɗin da aka turo wayarku", "Ku sake kiran lambar da ta kira ku"], answer: 1, why: "Ana iya kwafin murya da AI; gaggawa da tura kuɗi alamun gargaɗi ne, don haka ku kira lambar da kuka sani." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kai rahoton zamba da farfaɗowa daga satar shaida",
          minutes: 5,
          goal: "Lissafa inda za ku kai rahoton zamba da matakan farko idan an saci bayananku.",
          text: [
            "Kai rahoto yana taimakawa wajen dakatar da 'yan damfara kuma zai iya taimaka muku farfaɗowa. A Amurka, FTC ta ce ku tura saƙonnin imel na damfara zuwa reportphishing@apwg.org, ku tura saƙonnin tes na zamba zuwa 7726 (SPAM), kuma ku kai rahoton zamba a ReportFraud.ftc.gov.",
            "Idan kun bayar da lambar Social Security (lambar shaidar Amurka), ta katin bashi (credit card) ko ta asusun banki, FTC ta ce ku je IdentityTheft.gov don samun matakai bisa abin da aka rasa. Ku yi sauri: ku kira bankinku, ku canja kalmomin sirri, kuma ku yi tunanin sanya gargaɗin zamba (fraud alert) ko daskarar da bashi (credit freeze).",
            "Idan kun danna wata mummunar hanyar haɗi, ku sabunta manhajar tsaro, ku yi bincike (scan), ku cire duk abin da ta nuna. A wajen Amurka, ku kai rahoto ga sashen laifukan intanet na 'yan sanda na ƙasarku ko hukumar kare masu sayayya."
          ],
          steps: ["Imel na damfara: ku tura shi zuwa reportphishing@apwg.org.", "Tes na zamba: ku tura shi zuwa 7726.", "Zamba: ku kai rahoto a ReportFraud.ftc.gov.", "An saci bayanai: ku bi IdentityTheft.gov ku kira bankinku.", "Kun danna hanyar haɗi: ku sabunta manhajar tsaro ku yi scan."],
          words: [["Satar shaida (identity theft)", "lokacin da wani ya yi amfani da bayananku na sirri don ya yi kamar shi ne ku."], ["Credit freeze (daskarar da bashi)", "kulle da ke hana a buɗe sabon bashi da sunanku."]],
          slides: [
            { title: "Inda za a kai rahoto (Amurka)", bullets: ["Imel na damfara: reportphishing@apwg.org", "Tes na zamba: ku tura zuwa 7726", "Zamba: ReportFraud.ftc.gov"] },
            { title: "An saci bayananku?", bullets: ["IdentityTheft.gov", "Ku kira bankinku", "Ku canja kalmomin sirri; ku yi tunanin credit freeze"] },
            { title: "Kun danna mummunar hanyar haɗi?", bullets: ["Ku sabunta manhajar tsaro", "Ku yi scan", "Ku cire abin da ta nuna"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }, { name: "IdentityTheft.gov", url: "https://www.identitytheft.gov/" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Ku rubuta wurare uku na kai rahoton zamba a Amurka (ko makamantansu a ƙasarku) a kati ko a bayanan wayarku (notes).",
          youCanNow: "kai rahoton zamba da ɗaukar matakan farko bayan satar shaida.",
          quickCheck: [
            { objective: "O3", q: "Ina FTC ta ce ku je idan an saci lambar Social Security ɗinku?", options: ["IdentityTheft.gov", "Kowane shafi mai lambar waya", "Wanda ya sace ta", "Wata ƙungiya a kafofin sada zumunta"], answer: 0, why: "FTC tana tura mutane zuwa IdentityTheft.gov don samun matakai bisa abin da aka rasa." },
            { objective: "O3", q: "Kun bayar da lambar katin bankinku ga shafin bogi. Me za ku fara yi?", options: ["Ku jira ku ga ko wani abu zai faru", "Ku saka labarin a intanet", "Ku kira bankinku nan take ku canja kalmomin sirrinku", "Ku ba shafin lambar PIN ɗinku ma"], answer: 2, why: "Ku yi sauri: ku kira bankinku ku canja kalmomin sirri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kare kanku a intanet",
        questions: [
          { objective: "O1", q: "Wace kalmar sirri ce mafi ƙarfi?", options: ["password123", "ranar haihuwarku", "maple-river-tiger-lamp", "123456"], answer: 2, why: "Doguwar passphrase ta kalmomin da aka zaɓa ba bisa tsari ba tana da ƙarfi." },
          { objective: "O1", q: "Me shiga mataki biyu (MFA) yake yi?", options: ["Yana ƙara dubawa ta biyu, kamar code daga waya, bayan kalmar sirrinku", "Yana gajarta kalmar sirrinku", "Yana raba kalmar sirrinku da abokai", "Yana kashe asusunku"], answer: 0, why: "Dubawa ta biyu tana hana maharan da ke da kalmar sirrinku kawai." },
          { objective: "O2", q: "Kun sami kira da muryar jikanku yana neman katin kyauta nan take. Me za ku yi?", options: ["Ku sayi katin kyautar da sauri", "Ku karanta masa lambar bankinku", "Ku aika crypto", "Ku katse wayar ku sake kiransa ta lambar da kuka sani"], answer: 3, why: "Ana iya kwafin murya da AI; ku sake kira ta lambar da kuka sani." },
          { objective: "O2", q: "Mene ne deepfake?", options: ["Wurin ninkaya mai zurfi", "Bidiyo, hoto ko murya ta bogi da aka yi da AI", "Kalmar sirri mai ƙarfi", "Labarin gaskiya na kafar yaɗa labarai"], answer: 1, why: "Deepfake abubuwa ne na bogi da AI ya yi da suke kama ko suke jin kamar na gaske." },
          { objective: "O3", q: "A Amurka, ina FTC ta ce ku tura saƙonnin tes na zamba?", options: ["911", "7726 (SPAM)", "Ga ɗan damfarar", "Ga mutanen da ke wayarku"], answer: 1, why: "FTC ta ce ku tura saƙonnin tes na zamba zuwa 7726." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI cikin gaskiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kiyaye sirri idan kuna amfani da AI",
          minutes: 5,
          goal: "Yanke abin da yake lafiya a rubuta a kayan AI da wanda ba lafiya ba.",
          text: [
            "Abin da kuke rubutawa a hirar AI za a iya ajiye shi, kuma, bisa ga kayan da saitunansa, a yi amfani da shi don inganta kayan. Ku ɗauke shi kamar magana a wurin taron jama'a.",
            "Kada ku taɓa rubuta: kalmomin sirri, lambar Social Security ko ta katin shaida, lambar banki ko ta kati, lambar shari'a ko ta fursuna, bayanan lafiya da ke da sunanku, ko bayanan sirri na wasu mutane. Ku yi amfani da madadi kamar \"[lambata]\" ko bayani na gama-gari a maimakon haka.",
            "Ku duba saitunan kayan don sarrafa sirri da bayanai, kamar kashe tarihin hira ko hana a yi amfani da hirarku don horar da AI idan akwai wannan zaɓi. A makaranta ko wurin aiki, ku yi amfani da kayan AI da makarantarku ko mai ɗaukar ku aiki ya amince da su kawai, kuma ku bi dokokinsu game da bayanan da za a iya sakawa."
          ],
          steps: ["Ku karanta prompt ɗinku kafin ku aika.", "Ku cire lambobin sirri, sunaye da bayanan lafiya.", "Ku yi amfani da madadi kamar \"[lambata]\".", "Ku duba saitunan sirri na kayan.", "A makaranta ko wurin aiki, ku yi amfani da kayan da aka amince da su kawai."],
          words: [["Saitunan sirri (privacy settings)", "zaɓuɓɓukan da ke sarrafa abin da manhaja take ajiyewa da rabawa game da ku."], ["Madadi (placeholder)", "abin da ke tsayawa a madadin bayanan sirri na gaske, kamar \"[lambata]\"."]],
          slides: [
            { title: "Hirar AI ba littafin sirri ba ce", bullets: ["Ana iya ajiye abin da kuke rubutawa", "Ku ɗauke ta kamar wurin taron jama'a"] },
            { title: "Kada ku taɓa rubutawa", bullets: ["Kalmomin sirri, lambar SSN, ta katin shaida ko ta shari'a", "Lambar banki ko ta kati", "Bayanan sirri na wasu mutane"] },
            { title: "Ku riƙe iko", bullets: ["Ku yi amfani da madadi", "Ku duba saitunan sirri", "Ku yi amfani da kayan da aka amince da su a makaranta ko aiki"] }
          ],
          tryIt: "Ku buɗe saitunan mataimakin AI da kuke amfani da shi ku nemo wurin sarrafa sirri ko bayanai. Sannan ku sake rubuta wannan prompt ta hanya mai aminci: \"Lambar SSN ɗina ita ce 123-45-6789, ka taimake ni in cike wannan fom.\"",
          youCanNow: "hana bayanan sirri shiga kayan AI da amfani da saitunan sirrinsu.",
          quickCheck: [
            { objective: "O4", q: "Rubutu a hirar AI ya fi kama da me?", options: ["Rubutu a littafin sirri mai kulle", "Magana a wurin taron jama'a", "Magana da lauyanku", "Raɗa wa kanku"], answer: 1, why: "Ana iya ajiye abin da kuke rubutawa, don haka ku ɗauke shi kamar magana a gaban jama'a." },
            { objective: "O4", q: "Kuna son taimakon AI da fom ɗin neman gida da ke neman lambar shari'arku. Me za ku rubuta?", options: ["Lambar shari'arku ta gaske", "Lambar shari'arku da ranar haihuwarku", "Lambar shari'ar abokinku", "Madadi kamar \"[lambata]\""], answer: 3, why: "Madadi yana ba ku taimako ba tare da bayyana lambobin sirri ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Duba AI don kuskure da son kai",
          minutes: 5,
          goal: "Duba amsar AI don kuskure da son kai marar adalci kafin ku yi amfani da ita.",
          text: [
            "AI zai iya yin kuskure yana magana kamar ya tabbata. Zai iya ƙirƙirar bayanai, maganganu, dokoki ko majiyoyi; ana kiran wannan hallucination (hasashen ƙarya). Koyaushe ku tabbatar da muhimman bayanai da majiyar hukuma ko amintacciya.",
            "AI zai iya nuna son kai (bias): ya koya daga rubuce-rubucen mutane, waɗanda ke da ra'ayoyin ƙiyayya marasa adalci game da wasu rukunoni. Zai iya kwatanta ma'aikatan jinya a matsayin mata, injiniyoyi kuma a matsayin maza, ko ya bambanta mutane saboda suna, shekaru, launin fata, nakasa ko tarihin laifi. A ɗaukar aiki, ba da bashi, neman gida ko makaranta, hakan zai iya jawo cutarwa ta gaske.",
            "Ku gwada shi: ku yi tambaya iri ɗaya amma ku canja bayani ɗaya, kamar wani suna daban, sannan ku kwatanta amsoshin. Idan AI yana nuna rashin adalci ga mutane, kada ku yi amfani da wannan amsar, kuma ku kai rahoto ta maɓallin ra'ayi (feedback) na kayan."
          ],
          steps: ["Ku nemo bayanan gaskiya a cikin amsar ku tabbatar da su da majiya amintacciya.", "Ku nemi ra'ayoyin ƙiyayya ko zato marasa adalci.", "Ku sake tambaya da bayani ɗaya da aka canja, ku kwatanta.", "Kada ku yi amfani da amsoshi marasa adalci ko marasa gaskiya.", "Ku kai rahoton matsaloli ta maɓallin feedback na kayan."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya faɗi abin ƙarya kamar gaskiya ne."], ["Son kai (bias)", "nuna rashin adalci ko zato marar adalci game da wani rukunin mutane."], ["Ra'ayin ƙiyayya (stereotype)", "tunani mai sauƙaƙawa fiye da kima game da wani rukunin mutane."]],
          slides: [
            { title: "AI zai iya yin kuskure yana kama da ya tabbata", bullets: ["Bayanai, maganganu da majiyoyi da aka ƙirƙira", "Ku tabbatar da abubuwa masu muhimmanci da majiyoyi amintattu"] },
            { title: "AI zai iya nuna son kai", bullets: ["Ya koya daga rubuce-rubucen mutane", "Ra'ayoyin ƙiyayya kan jinsi, launin fata, shekaru, tarihin laifi", "Cutarwa ta gaske a ɗaukar aiki, neman gida, makaranta"] },
            { title: "Ku gwada ku kai rahoto", bullets: ["Ku canja bayani ɗaya ku kwatanta", "Kada ku yi amfani da amsoshi marasa adalci", "Ku yi amfani da maɓallin feedback"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya \"describe a typical nurse and a typical engineer\" (ya kwatanta ma'aikaciyar jinya da injiniya na yau da kullum). Ku nemi ra'ayoyin ƙiyayya. Sannan ku nemi ya rubuta wasiƙar shaida ta aiki ga \"Maria\", sannan ga \"James\" da bayanai iri ɗaya, ku kwatanta.",
          youCanNow: "duba amsoshin AI don kuskure da gwada su don son kai marar adalci.",
          quickCheck: [
            { objective: "O5", q: "Mene ne son kai (bias) na AI?", options: ["Lokacin da AI yake aiki a hankali", "Lokacin da AI yake amfani da manyan kalmomi", "Lokacin da AI yake nuna rashin adalci ga rukunonin mutane ko yake amfani da ra'ayoyin ƙiyayya", "Lokacin da AI yake amsa a jeri"], answer: 2, why: "AI ya koya daga rubuce-rubucen mutane, don haka zai iya maimaita ra'ayoyin ƙiyayya marasa adalci." },
            { objective: "O5", q: "AI ya ba ku wata doka game da jefa ƙuri'a bayan an same ku da laifi. Me za ku yi kafin ku dogara da ita?", options: ["Ku tabbatar da ita da majiyar hukuma ko amintacciya", "Ku amince da ita domin yana magana kamar ya tabbata", "Ku fara raba ta da abokai", "Ku tambayi AI ko ya tabbata"], answer: 0, why: "AI zai iya ƙirƙirar dokoki; ku tabbatar da muhimman bayanai da majiyar hukuma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amfani da AI cikin gaskiya a makaranta, aiki da intanet",
          minutes: 5,
          goal: "Bi dokokin amfani da AI, ku kuma faɗi gaskiya game da lokacin da kuka yi amfani da shi.",
          text: [
            "Dokokin AI sun bambanta. Wasu malamai suna ba da izinin AI don tara ra'ayoyi amma ba don rubutu ba; wasu ayyuka suna buƙatar sa; wasu kuma sun hana shi. Ku tambaya ko ku karanta dokokin tukuna. Gabatar da aikin AI kamar naku ne a inda ba a yarda ba magudi ne, kuma zai iya sa ku rasa maki, aiki ko takardar shaida.",
            "Ku faɗi gaskiya. Idan AI ya taimaka, ku faɗi yadda ya taimaka idan hakan yana da muhimmanci: \"Na yi amfani da mataimakin AI don duba nahawu.\" Kada ku taɓa amfani da AI don yin sharhin bogi, takardun bogi, ko hotuna ko bidiyon mutane na gaske ba tare da izininsu ba. Yin hotunan bogi na batsa ko na kunya na mutane na gaske cutarwa ne, kuma a wurare da yawa laifi ne a doka.",
            "Ku san lokacin da ba za ku yi amfani da AI ba: lokacin gaggawa (ku kira 911), manyan shawarwari game da lafiya, doka ko kuɗi (ku yi magana da ƙwararre), da duk abin da ba za ku so a ajiye kalmominku ba. Ku ne ke da alhakin abin da kuka aika ko kuka saka a intanet, ko da AI ne ya rubuta shi."
          ],
          steps: ["Ku karanta ko ku tambayi dokokin AI a makarantarku ko wurin aikinku.", "Ku yi amfani da AI ta hanyoyin da aka yarda kawai.", "Ku faɗi yadda AI ya taimaka idan hakan yana da muhimmanci.", "Kada ku taɓa yin abubuwan bogi na mutane na gaske ko na takardu.", "Ku guji AI a lokacin gaggawa da manyan shawarwari."],
          words: [["Gaskiya a karatu (academic honesty)", "yin aikinku da kanku da ambaton taimakon da kuka yi amfani da shi."], ["Izini (consent)", "amincewar mutum."]],
          slides: [
            { title: "Ku san dokokin", bullets: ["Dokoki sun bambanta a aji da wurin aiki", "Ku tambaya ko ku karanta su tukuna", "Karya su zai iya sa ku rasa maki ko aiki"] },
            { title: "Ku faɗi gaskiya", bullets: ["Ku faɗi yadda AI ya taimaka", "Babu sharhin bogi ko takardun bogi", "Babu abubuwan bogi na mutane na gaske ba tare da izininsu ba"] },
            { title: "Lokacin da ba za a yi amfani da AI ba", bullets: ["Gaggawa: ku kira 911", "Manyan shawarwari kan lafiya, doka ko kuɗi", "Ku ne ke da alhakin abin da kuka saka a intanet"] }
          ],
          tryIt: "Aikin ƙarshe: ku gama jerin abubuwan tsaronku (passphrase, shiga mataki biyu, sabuntawa, wuraren kai rahoto), sannan ku rubuta katin dokokin AI na kanku mai layuka biyar da ke magana kan sirri, duba amsoshi, gaskiya, adalci da lokacin da ba za a yi amfani da AI ba.",
          youCanNow: "kare asusunku, guje wa zamba da kai rahotonta, da amfani da AI lafiya, cikin gaskiya da adalci.",
          quickCheck: [
            { objective: "O6", q: "Wane ne ke da alhakin saƙon da kuka saka a intanet wanda AI ya rubuta?", options: ["Kamfanin AI", "Babu kowa", "Shafin intanet ɗin", "Ku"], answer: 3, why: "Ku ne ke da alhakin abin da kuka aika ko kuka saka, ko da AI ne ya rubuta shi." },
            { objective: "O6", q: "Shirin horonku bai yarda da AI a jarabawar ƙarshe ba. Mene ne zaɓin gaskiya?", options: ["Ku yi amfani da AI a ɓoye", "Ku bi dokar ku yi jarabawar da kanku", "Ku nemi aboki ya yi amfani da AI a madadinku", "Ku kwafi amsar AI ku canja 'yan kalmomi"], answer: 1, why: "Amfani da AI a inda ba a yarda ba magudi ne, kuma zai iya sa ku rasa takardar shaidar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI cikin gaskiya",
        questions: [
          { objective: "O4", q: "Wanne ne lafiya a rubuta wa mataimakin AI?", options: ["Lambar Social Security ɗinku", "Kalmar sirrin bankinku", "Tarihin lafiyar abokinku", "\"Ka taimake ni in rubuta saƙon godiya ga mai kula da shari'ata (case manager)\""], answer: 3, why: "Buƙatu na gama-gari da babu bayanan sirri a cikinsu suna da lafiya." },
          { objective: "O5", q: "Mene ne hallucination na AI?", options: ["Lokacin da AI ya faɗi abin ƙarya kamar gaskiya ne", "Mafarki", "Kalmar sirri mai ƙarfi", "Wani nau'in ƙwayar cutar kwamfuta (virus)"], answer: 0, why: "AI zai iya ƙirƙirar bayanai yana magana kamar ya tabbata." },
          { objective: "O5", q: "Ta yaya za ku gwada kayan AI don son kai?", options: ["Ku amince da shi", "Ku tambaye shi ko yana da son kai ku yarda da amsarsa", "Ku yi tambaya iri ɗaya da bayani ɗaya da aka canja, ku kwatanta", "Ku yi amfani da shi da dare kawai"], answer: 2, why: "Canja bayani ɗaya yana nuna ko yana bambanta mutane." },
          { objective: "O6", q: "Malaminku ya yarda da AI don tara ra'ayoyi kawai. Mene ne gaskiya?", options: ["Ku sa AI ya rubuta dukan maƙalar ku ce taku ce", "Ku kwafi maƙalar AI ta abokinku", "Ku yi watsi da dokar", "Ku yi amfani da shi don tara ra'ayoyi, sannan ku rubuta aikin da kanku"], answer: 3, why: "Ku bi dokokin yadda za a iya amfani da AI." },
          { objective: "O6", q: "Wani yana cikin gaggawar lafiya. Me za ku yi?", options: ["Ku tambayi chatbot na AI", "Ku saka a intanet", "Ku kira 911", "Ku jira"], answer: 2, why: "Gaggawa tana buƙatar hidimar gaggawa, ba AI ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tsaro a Intanet da Amfani da AI cikin Gaskiya",
    questions: [
      { objective: "O1", q: "Wane asusu ya kamata ku fara karewa?", options: ["Asusun wasa", "Imel ɗinku", "Shafin girke-girke", "Manhajar yanayi"], answer: 1, why: "Imel zai iya canja sauran kalmomin sirrinku." },
      { objective: "O1", q: "Passphrase ita ce:", options: ["Kalmar sirri da aka yi da kalmomi da yawa da aka zaɓa ba bisa tsari ba", "Sunanku da ranar haihuwarku", "Gajeriyar lamba", "Code na waya"], answer: 0, why: "Kalmomin da aka zaɓa ba bisa tsari ba suna yin kalmomin sirri dogaye masu ƙarfi." },
      { objective: "O1", q: "Shin ya kamata ku yi amfani da kalmar sirri ɗaya a ko'ina?", options: ["E, ya fi sauƙi", "Don bankuna kawai", "A'a, ku yi amfani da daban a kowane muhimmin asusu", "Don imel kawai"], answer: 2, why: "Kalmar sirri ɗaya da aka sata za ta buɗe komai." },
      { objective: "O1", q: "Password manager:", options: ["Yana ajiye kalmomin sirrinku lafiya", "Yana raba su a intanet", "Yana hasashen kalmomin sirrin wasu", "Yana goge asusunku"], answer: 0, why: "Yana tuna muku kalmomin sirri masu ƙarfi." },
      { objective: "O1", q: "Wace hukumar Amurka ce ke ba da shawarar kalmomin sirri masu ƙarfi, MFA da sabunta manhajoji a gangamin wayar da kanta?", options: ["NASA", "Hukumar gidan waya (Postal Service)", "Hukumar wuraren shakatawa (National Park Service)", "CISA"], answer: 3, why: "CISA ce ke jagorantar wayar da kan jama'a kan tsaron intanet a Amurka." },
      { objective: "O2", q: "Wani tes da ba ku jira ba ya ce an kulle asusun bankinku, kuma ya ba da hanyar haɗi. Ya kamata ku:", options: ["Danna ku saka bayanan shigarku", "Kada ku danna; ku tuntuɓi bankin ta lambar da kuka sani", "Amsa da lambar katinku", "Tura shi ga abokai"], answer: 1, why: "Wannan sananniyar alamar saƙon damfara ce." },
      { objective: "O2", q: "'Yan damfara da ke neman biya da katin kyauta:", options: ["Abu ne na yau da kullum ga ofisoshin gwamnati", "Alamar gargaɗin zamba ce", "Hanya ce mai aminci ta biyan kuɗaɗe", "Bankuna suna buƙatar haka"], answer: 1, why: "Hukumomi na gaske ba sa neman katin kyauta." },
      { objective: "O2", q: "Ma'anar voice cloning (kwafin murya) ita ce:", options: ["Rera waƙa a ƙungiyar mawaƙa", "Yin rikodin saƙon muryarku da kanku", "Sabunta waya", "Amfani da AI don kwafin muryar wani"], answer: 3, why: "'Yan damfara za su iya kwafin murya daga gajerun rikodi." },
      { objective: "O2", q: "Kalmar tsaro (safe word) ta iyali tana taimaka muku:", options: ["Tabbatar ko kiran gaggawa daga iyalinku ne da gaske", "Buɗe wayarku", "Samun rangwame", "Canja kalmomin sirri"], answer: 0, why: "Muryar da aka kwafa ba za ta san kalmar tsaro ba." },
      { objective: "O3", q: "A ina kuke kai rahoton zamba a Amurka?", options: ["Wurin sharhi a intanet", "Shafin ɗan damfarar", "ReportFraud.ftc.gov", "Babu inda"], answer: 2, why: "FTC tana tattara rahotannin zamba." },
      { objective: "O3", q: "Idan an saci lambar Social Security ɗinku, FTC tana tura ku zuwa:", options: ["Wata ƙungiya a kafofin sada zumunta", "Chatbot na AI", "Babu komai", "IdentityTheft.gov"], answer: 3, why: "IdentityTheft.gov tana ba da matakan farfaɗowa." },
      { objective: "O3", q: "Credit freeze:", options: ["Yana daskarar da asusun bankinku har abada", "Yana sanyaya kwamfutarku", "Yana hana a buɗe sabon bashi da sunanku", "Yana goge tarihin bashinku"], answer: 2, why: "Yana hana ɓarayi buɗe sababbin asusu." },
      { objective: "O3", q: "Me ya kamata ku yi idan kun danna mummunar hanyar haɗi?", options: ["Babu komai", "Ku sabunta manhajar tsaro ku yi scan", "Ku danna ƙarin hanyoyin haɗi", "Ku jefar da wayar"], answer: 1, why: "Scan yana gano da cire manhajoji masu cutarwa." },
      { objective: "O4", q: "Rubutu a hirar AI ya fi kama da:", options: ["Magana a wurin taron jama'a", "Rubutu a littafin sirri mai kulle", "Tunani a zuciya", "Magana da lauya"], answer: 0, why: "Ana iya ajiye hirarraki, don haka ku yi hankali." },
      { objective: "O4", q: "A maimakon rubuta lambar shari'arku a AI, ku yi amfani da:", options: ["Lambar ta gaske", "Rabin lambar", "Madadi kamar \"[lambata]\"", "Lambar SSN ɗinku"], answer: 2, why: "Madadi yana kare bayanan sirri." },
      { objective: "O5", q: "Son kai (bias) na AI yana nufin:", options: ["Rashin adalci ko zato marar adalci game da rukunonin mutane", "Amsa mai sauri", "Amsa mai tsawo", "Wani nau'in kalmar sirri"], answer: 0, why: "AI zai iya maimaita ra'ayoyin ƙiyayya marasa adalci." },
      { objective: "O5", q: "Wani kayan AI ya ba mai neman aiki ƙananan maki saboda sunansa kawai. Ya kamata ku:", options: ["Yi amfani da shi duk da haka", "Canja sunan mai neman aikin", "Ɓoye shi", "Kada ku yi amfani da wannan sakamakon, ku kai rahotonsa"], answer: 3, why: "Kada a yi amfani da sakamakon AI marar adalci." },
      { objective: "O6", q: "Idan AI ya taimaka a aikinku kuma hakan yana da muhimmanci, ya kamata ku:", options: ["Ɓoye shi", "Faɗi yadda AI ya taimaka", "Ce kun yi shi ku kaɗai", "Ɗora wa AI laifin kurakurai"], answer: 1, why: "Faɗin gaskiya game da amfani da AI yana gina amana." },
      { objective: "O6", q: "Yin hoton bogi na kunya na wani ɗan ajinku na gaske da AI:", options: ["Wasa ne marar lahani", "Cutarwa ne, kuma laifi ne a doka a wurare da yawa", "Makaranta tana buƙatar sa", "Yana da kyau don tsaro"], answer: 1, why: "Abubuwan bogi na mutane na gaske ba tare da izininsu ba suna jawo cutarwa ta gaske." },
      { objective: "O6", q: "Wane ne ke da alhakin rubutun da kuka raba a intanet wanda AI ya rubuta?", options: ["AI", "Babu kowa", "Kamfanin intanet", "Ku"], answer: 3, why: "Ku ne ke da alhakin abin da kuka aika ko kuka saka a intanet." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      5,
      6,
      9,
      10,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An kulle imel",
        objective: "O1",
        notYet: "Kalmar sirrin imel gajeriya ce ko ana amfani da ita a wani wuri, ko shiga mataki biyu a kashe yake.",
        meets: "Kalmar sirrin imel passphrase ce mai ƙarfi, kuma shiga mataki biyu a kunne yake.",
        exceeds: "An ajiye lambobin ajiya a sirri, kuma sauran muhimman asusu suna da nasu kalmomin sirri."
      },
      {
        name: "An duba sabuntawa",
        objective: "O1",
        notYet: "Ba a duba ko wayar da manhajoji suna da sabuntawa ba.",
        meets: "An duba wayar da manhajoji kuma an sabunta su.",
        exceeds: "An kunna sabuntawa ta kai tsaye (automatic updates) a inda akwai."
      },
      {
        name: "Wuraren kai rahoto",
        objective: "O3",
        notYet: "An rubuta ƙasa da wurare uku na kai rahoto.",
        meets: "An rubuta 7726 don tes, reportphishing@apwg.org don imel da ReportFraud.ftc.gov don zamba.",
        exceeds: "An kuma rubuta IdentityTheft.gov da matakan farko idan an saci bayanai."
      },
      {
        name: "Katin dokokin AI na kai",
        objective: "O6",
        notYet: "Layuka ƙasa da biyar, ko babu layin sirri ko na gaskiya.",
        meets: "Layuka biyar da ke magana kan sirri, duba amsoshi, gaskiya, adalci da lokacin da ba za a yi amfani da AI ba.",
        exceeds: "Kowane layi yana ba da misali na gaske daga rayuwar mai koyon."
      },
      {
        name: "Sirri a cikin prompt",
        objective: "O4",
        notYet: "Katin dokoki ko prompt na atisaye yana da lambobin sirri.",
        meets: "Babu lambobin sirri a ko'ina, kuma an yi amfani da madadi.",
        exceeds: "Mai koyon ya duba saitunan sirri na kayan AI ɗinsa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce shiga mataki biyu har yanzu a kunne yake a imel ɗinsu bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun gane kuma sun guje wa wata zamba cikin kwanaki 60",
      "Abokan aiki masu taimakon masu dawowa gida sun ce an rage yawan mutanen da suka rasa kuɗi ko asusu saboda zamba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta shirin",
      "Damar shiga saitunan asusun imel na mai koyon da kansa",
      "Wayar da za ta iya karɓar code don shiga mataki biyu",
      "Takarda da alƙalami don jerin abubuwan tsaro da katin dokokin AI na kai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" a lokacin.",
      "Kada ku taɓa neman masu koyo su faɗa ko su nuna kalmomin sirrinsu, lambobin shari'arsu ko lambobin ajiyarsu; suna yin canje-canje a sirri.",
      "Ku nuna misalan saƙonnin zamba a allo, ku sa ƙungiyar ta faɗi alamun gargaɗin da babbar murya.",
      "Ku tunatar da masu koyo da ke kan parole ko probation su bi duk wani sharaɗi game da amfani da intanet.",
      "Ku ba da maki ga jerin abubuwan ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
