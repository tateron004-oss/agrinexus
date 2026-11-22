"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-intro-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "smallbiz-intro-ai-ha",
  lang: "ha",
  translationOf: "smallbiz-intro-ai",
  category: "Small Business",
  name: "Gabatarwa ga AI don Ƙananan Kasuwanci",
  skills: "Bayanin abin da AI zai iya yi wa kasuwanci, Gane ayyukan da ke ɓata lokaci, Rubuta prompt na kasuwanci, Dubawa da gyara daftarin AI, Kiyaye bayanan abokan ciniki da na kasuwanci",
  outcome: "amfani da mataimakin AI kyauta don kammala aiki ɗaya na gaske a kasuwancinku, kamar sanarwa ga abokan ciniki, bayanin kaya ko jerin ayyukan mako: rubuta prompt mai sarari da bayanan kasuwancinku, inganta daftarin, tabbatar da kowane bayani, da kiyaye bayanan sirri daga ciki.",
  about: [
    "Wannan kwas na masu ƙananan kasuwanci ne da suka ji labarin AI amma ba su yi amfani da shi sosai ba: masu shaguna, masu gidajen abinci da motocin sayar da abinci, masu aski da gyaran gashi, masu aikin share-share, 'yan kwangila da masu kasuwanci daga gida. Da yawa daga cikin ɗalibanmu sababbin masu kasuwanci ne, ko daga ƙananan ƙabilu, kuma suna yin komai da kansu.",
    "Za ku koyi mene ne mataimakin AI, waɗanne ayyuka a kasuwancinku zai iya hanzartawa, yadda ake neman taimakonsa da bayanan kasuwancinku, yadda ake duba aikinsa, da yadda ake kiyaye bayanan abokan cinikinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" da kasuwancinku. Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku zaɓi aiki ɗaya na gaske a kasuwancinku a wannan makon (alamar sanarwa game da sababbin lokutan aiki, bayanin kaya, amsa ga abokin ciniki, ko jerin ayyuka). Ku yi amfani da mataimakin AI kyauta don yin shi: ku rubuta prompt da bayanan kasuwancinku, ku nemi aƙalla canji ɗaya, ku duba kowane bayani (farashi, lokutan aiki, adireshi) da kanku, ku cire duk wani bayanin sirri, sannan ku yi amfani da shi a kasuwancinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da suka ji labarin AI amma ba su yi amfani da shi sosai ba: masu shaguna, gidajen abinci da motocin sayar da abinci, masu aski da gyaran gashi, masu share-share, 'yan kwangila da masu kasuwanci daga gida. Da yawa sababbin masu kasuwanci ne ko daga ƙananan ƙabilu, kuma suna yin komai da kansu.",
    startingPoint: "Suna gudanar da kasuwancinsu kowace rana, kuma suna amfani da waya don kira, saƙon tes da kafofin sada zumunta. Ba sa amfani da mataimakan AI sosai, ko kwata-kwata, kuma ba su san abin da ke da lafiya a raba da su ba.",
    gap: "Masu kasuwanci da ke yin komai da kansu suna ɓata awanni kan ayyukan rubutu kamar alamomin sanarwa, amsoshi da bayanin kaya. Suna buƙatar amfani da mataimakin AI kyauta don kammala ayyuka na gaske cikin sauri, yayin da suke tabbatar da kowane bayani da kiyaye bayanan abokan ciniki, don su adana lokaci ba tare da ɓata sunansu ba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: wayar zamani ko kwamfuta, sau da yawa ana amfani da ita tsakanin abokan ciniki",
      "Lokaci: darussa na kusan minti 5 da suka dace da ranar aiki mai cike da hidima",
      "Dokoki: haraji, lasisi da al'amuran shari'a suna zuwa ga mutane da majiyoyin hukuma, ba ga AI ba",
      "Sirri: babu sunayen abokan ciniki, lambobin waya, lambobin kati ko bayanan sirri na kasuwanci a cikin kayan AI"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misalan ayyukan kasuwanci", action: "bayanin abin da mataimakin AI zai iya yi da wanda ba zai iya yi ba ga ƙaramin kasuwanci", standard: "kuna faɗin cewa yana rubuta daftari kuma yana sanin bayanan kasuwancinku ne kawai idan kun faɗa masa" },
    { id: "O2", condition: "Idan aka ba ku ayyukan da ke cikin kasuwancinku", action: "jera ayyukan da AI zai iya hanzartawa da ayyukan da ke buƙatar mutane ko majiyoyin hukuma", standard: "da aƙalla ayyuka biyar na \"Gwada da AI\" da ayyuka uku na \"Mutane da majiyoyin hukuma\"" },
    { id: "O3", condition: "Idan aka ba ku wani aiki na gaske na kasuwanci", action: "rubuta prompt da ke da bayanan kasuwancinku da yadda kuke son amsar ta kasance", standard: "ta yadda amsar farko za ta dace da kasuwancinku" },
    { id: "O4", condition: "Idan aka ba ku daftarin farko na AI", action: "neman canje-canje ɗaya bayan ɗaya da gyara sigar ƙarshe da kalmominku", standard: "har ya zama abin da za ku yi amfani da shi da gaske" },
    { id: "O5", condition: "Idan aka ba ku daftarin AI na abokan ciniki", action: "tabbatar da kowane bayani da alkawari kafin ku saka shi, ku buga shi ko ku aika shi", standard: "an duba farashi, lokutan aiki, adireshi da alkawura, kuma an gyara ko an cire duk abin da ba daidai ba" },
    { id: "O6", condition: "Lokacin da kuke amfani da AI don kasuwancinku", action: "kiyaye bayanan sirri na abokan ciniki da na kasuwanci daga AI da gane zamba ta neman biyan kuɗi", standard: "ta amfani da madadi da tabbatar da buƙatun biyan kuɗi na gaggawa ta lambar da kuka riga kuka sani" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da AI zai iya yi wa kasuwancinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne mataimakin AI, a harshen kasuwanci",
          minutes: 4,
          goal: "Bayyana abin da mataimakin AI zai iya yi da wanda ba zai iya yi ba ga ƙaramin kasuwanci.",
          text: [
            "Mataimakin AI shiri ne na kwamfuta da za ku iya rubuta masa ko ku yi masa magana da kalmomi na yau da kullum. Kuna neman wani abu, shi kuma yana rubuta muku shi cikin daƙiƙoƙi. Sanannu masu kyauta sun haɗa da ChatGPT, Microsoft Copilot da Google Gemini.",
            "Ku ɗauke shi kamar mataimaki mai sauri wajen rubutu da tunani. Zai iya rubuta daftarin takardar talla (flyer), bayanin abinci a menu, amsa ga sharhin abokin ciniki, tsarin jerin farashi, rubutu na kafofin sada zumunta, ko jerin abubuwan yi kafin buɗe shago.",
            "Shi ba akawunta ɗinku ba ne, ba lauyanku ba ne, kuma ba abokin kasuwancinku ba ne. Bai san farashinku, abokan cinikinku ko garinku ba sai kun faɗa masa, kuma yana iya yin kuskure ko da yana magana kamar ya tabbata. Ku ne masu kasuwancin: ku ne kuke yanke abin da za ku yi amfani da shi."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum, kamar rubutu."], ["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana, kamar ChatGPT, Copilot ko Gemini."], ["Daftari (draft)", "sigar farko da za ku duba ku canja."]],
          slides: [
            { title: "Mataimakin AI shi ne...", bullets: ["Shirin da kuke hira da shi da kalmomin yau da kullum", "Mataimaki mai sauri wajen rubutu da tunani", "Masu kyauta: ChatGPT, Copilot, Gemini"] },
            { title: "A ƙaramin kasuwanci zai iya rubuta daftarin", bullets: ["Takardun talla, alamomin sanarwa da rubutun kafofin sada zumunta", "Bayanin abinci a menu da bayanin kaya", "Amsoshi ga abokan ciniki da sharhinsu", "Jerin abubuwan yi da jadawali"] },
            { title: "Shi BA", bullets: ["Akawunta, lauya ko abokin kasuwanci ba ne", "Ya san farashinku ba sai kun faɗa", "Koyaushe daidai yake ba: ku ne masu kasuwancin"] }
          ],
          tryIt: "Ku rubuta ayyukan rubutu uku da kuka yi wa kasuwancinku a watan da ya gabata, misali alamar sanarwa, saƙon tes ga abokin ciniki, ko jerin farashi. Ku zagaye wanda ya fi ɗaukar lokaci.",
          youCanNow: "faɗin mene ne mataimakin AI da ambaci ayyukan rubutu a kasuwancinku da zai iya taimakawa da su.",
          quickCheck: [
            { objective: "O1", q: "Daga ina mataimakin AI yake samun farashi da lokutan aikin kasuwancinku?", options: ["Yana duba su a bankinku", "Koyaushe ya san su", "Daga gare ku, idan kun faɗa masa", "Daga wayoyin abokan cinikinku"], answer: 2, why: "Mataimakin AI yana sanin bayanan kasuwancinku ne kawai idan kun ba shi." },
            { objective: "O1", q: "AI ya rubuta alamar sanarwa don shagonku. Wa yake yanke ko za a yi amfani da ita?", options: ["Kamfanin AI", "Ku, masu kasuwancin", "Abokan cinikinku", "Babu kowa; tana saka kanta"], answer: 1, why: "Ku ne ke da alhakin duk abin da kasuwancinku ya fitar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nemo ayyukan da suka dace a ba AI",
          minutes: 5,
          goal: "Yi jerin ayyuka a kasuwancinku da AI zai iya hanzartawa, da waɗanda kada ya taɓa.",
          text: [
            "Ayyukan da suka dace da AI su ne waɗanda ake maimaitawa, na rubutu ne, kuma ba su da haɗari sosai: amsa tambayoyi iri ɗaya, bayanin kaya, rubuta abubuwan da za a saka a intanet, yin jadawali da jerin abubuwan yi, taƙaita dogayen imel, ko mayar da rubutun da ya rikice zuwa jeri mai tsafta.",
            "Ku nisantar da AI daga yanke shawarar ƙarshe game da kuɗi, haraji, kwangiloli, ɗaukar ma'aikata da korar su, dokokin lafiya da tsaro, da duk wani abu na shari'a. Zai iya taimaka muku shirya tambayoyi ga akawunta ɗinku, amma shi ba akawunta ba ne.",
            "Gwaji mai sauƙi: idan kuskure zai yi sauƙin gani da gyarawa, AI zai iya taimakawa. Idan kuskure zai iya jawo muku asarar kuɗi, amincewar abokin ciniki ko tara, sai mutum ya duba shi, ku kuma ku duba majiyar hukuma."
          ],
          steps: ["Ku jera ayyukan da kuke yi kowane mako.", "Ku yi wa kowanne alama: ana maimaitawa? na rubutu ne? ba shi da haɗari sosai?", "Ku saka ayyukan da suka sami \"e\" uku a jerin \"Gwada da AI\".", "Ku saka shawarwarin kuɗi, shari'a da tsaro a jerin \"Mutane da majiyoyin hukuma\"."],
          words: [["Aiki marar haɗari sosai", "aikin da kuskure a cikinsa yana da sauƙin gani da gyarawa."], ["Aikin da ake maimaitawa", "abin da kuke yi sau da yawa, kamar amsa tambaya iri ɗaya."]],
          slides: [
            { title: "Ayyukan da suka dace da AI", bullets: ["Ana maimaitawa: tambayoyi iri ɗaya kowace rana", "Na rubutu: abubuwan saka a intanet, bayani, amsoshi", "Ba su da haɗari sosai: kuskure yana da sauƙin gani"] },
            { title: "Ku bar su ga mutane da majiyoyin hukuma", bullets: ["Kuɗi, haraji da kwangiloli", "Ɗaukar ma'aikata da korar su", "Dokokin lafiya, tsaro da shari'a"] },
            { title: "Gwaji mai sauri", bullets: ["Yana da sauƙin gani da gyarawa? AI zai iya taimakawa", "Zai iya jawo asarar kuɗi, amincewa ko tara? Mutum ya duba"] }
          ],
          tryIt: "Ku yi jeri biyu don kasuwancinku: \"Gwada da AI\" (aƙalla ayyuka biyar) da \"Mutane da majiyoyin hukuma\" (aƙalla uku).",
          youCanNow: "raba ayyukan kasuwancinku zuwa waɗanda AI zai iya taimakawa da su da waɗanda dole mutane su yi.",
          quickCheck: [
            { objective: "O2", q: "Wane aiki ne ya dace da AI?", options: ["Yanke yadda za ku biya haraji", "Sa hannu a yarjejeniyar haya", "Zaɓar irin lasisin kasuwanci", "Rubuta amsa iri ɗaya ga tambayar da abokan ciniki suka saba yi"], answer: 3, why: "Ayyukan da ake maimaitawa, na rubutu, marasa haɗari sosai suna da kyau a ba AI." },
            { objective: "O2", q: "Kuna buƙatar sanin wane izini (permit) motar sayar da abincinku take buƙata. Me za ku yi?", options: ["Ku duba shafin gwamnati na hukuma ko ofishin", "Ku yi amfani da duk abin da AI ya faɗa", "Ku tambayi abokin ciniki", "Ku yi hasashe ku gyara daga baya"], answer: 0, why: "Kuskure zai iya jawo tara, don haka mutum ya duba majiyar hukuma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta prompt na kasuwanci mai sarari",
          minutes: 5,
          goal: "Rubuta prompt da ke da bayanan kasuwancinku don amsar ta dace da kasuwancinku.",
          text: [
            "Abin da kuke rubutawa mataimakin AI ana kiransa prompt (umarni). Idan ya ƙara sanin kasuwancinku, amsar za ta ƙara dacewa. Prompt mai kyau na kasuwanci yana da sassa huɗu: ku waye ne, me kuke buƙata, wa za a yi wa, da yadda ya kamata ya kasance.",
            "Misali: \"Ina da ƙaramin gidan abinci na Caribbean a Fresno. Ka rubuta gajeriyar alamar sanarwa don ƙofar gaba cewa za mu rufe ƙarfe 8 na dare a ranakun Lahadi daga May 5. Da sautin abota, ƙasa da kalmomi 30.\"",
            "Prompt mai rauni kamar \"rubuta alamar sanarwa\" yana sa AI ya yi tsammani. Ku ƙara bayananku na gaske: irin kasuwancinku, garinku, lokutan aikinku, salonku. Ku bar bayanan sirri a waje, kamar lambobin banki ko lambar wayar abokin ciniki."
          ],
          steps: ["Ku waye ne: irin kasuwancinku da inda yake.", "Me kuke buƙata: ainihin abin.", "Wa za a yi wa: abokan ciniki, ma'aikata, mai kawo kaya.", "Yadda ya kamata ya kasance: tsawo, sauti, jeri ko sakin layi."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."], ["Sauti (tone)", "yadda rubutu yake ji: na abota, na ladabi sosai, na nishaɗi."]],
          slides: [
            { title: "Sassa huɗu na prompt na kasuwanci", bullets: ["1. Ku waye ne", "2. Me kuke buƙata", "3. Wa za a yi wa", "4. Yadda ya kamata ya kasance"] },
            { title: "Misali", bullets: ["\"Ina da ƙaramin gidan abinci na Caribbean a Fresno.", "Ka rubuta alamar ƙofa: muna rufewa ƙarfe 8 na dare ranakun Lahadi daga May 5.", "Sautin abota, ƙasa da kalmomi 30.\""] },
            { title: "Mai rauni da mai sarari", bullets: ["Mai rauni: \"rubuta alamar sanarwa\"", "Mai sarari: kasuwancinku, bayanan, salon", "Kada a taɓa: lambobin banki ko lambobin wayar abokan ciniki"] }
          ],
          tryIt: "Ku zaɓi aiki ɗaya daga jerinku na \"Gwada da AI\". Ku rubuta prompt mai dukkan sassa huɗu, ku aika shi ga mataimakin AI kyauta, ku karanta amsar.",
          youCanNow: "rubuta prompt na kasuwanci mai faɗin ku waye ne, me kuke buƙata, wa za a yi wa da yadda ya kamata ya kasance.",
          quickCheck: [
            { objective: "O3", q: "Mene ne prompt?", options: ["Takardar kuɗi daga kamfanin AI", "Abin da kuke rubutawa don neman wani abu daga AI", "Alamar sanarwa a tagarku", "Sharhin abokin ciniki"], answer: 1, why: "Prompt ita ce buƙatarku ga AI." },
            { objective: "O3", q: "Kuna son alamar sanarwa game da lokutan aiki na hutu. Wane prompt za ku rubuta?", options: ["\"Yi alamar sanarwa.\"", "\"Lokutan aiki.\"", "\"Ina da gidan burodi a Fresno. Ka rubuta gajeriyar sanarwa: a rufe ranar Alhamis saboda hutu. Sautin abota, ƙasa da kalmomi 20.\"", "\"Rubuta wani abu mai kyau.\""], answer: 2, why: "Irin kasuwanci, gari, aikin da salon suna ba AI abin da yake buƙata." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da AI zai iya yi wa kasuwancinku",
        questions: [
          { objective: "O1", q: "Mene ne mataimakin AI?", options: ["Sabon ma'aikaci", "Shirin da kuke hira da shi wanda ke rubuta daftari", "Banki", "Injin karɓar kuɗi"], answer: 1, why: "Shiri ne na kwamfuta da kuke rubuta masa ko magana da shi." },
          { objective: "O2", q: "Wane aiki ne ya dace a ba mataimakin AI?", options: ["Yanke ko za ku sa hannu a yarjejeniyar haya", "Korar ma'aikaci", "Biyan harajinku shi kaɗai", "Rubuta daftarin bayanin kaya"], answer: 3, why: "Bayanin kaya aikin rubutu ne, ana maimaita shi, kuma ba shi da haɗari sosai." },
          { objective: "O2", q: "Kuskure zai iya jawo muku tara. Me za ku yi?", options: ["Ku sa mutum ya duba shi da majiyar hukuma", "Ku bar AI ya yanke", "Ku yi watsi da shi", "Ku tambayi AI sau biyu"], answer: 0, why: "Ayyuka masu haɗari suna buƙatar mutum da majiyar hukuma." },
          { objective: "O3", q: "Wane prompt na kasuwanci ne ya fi sarari?", options: ["\"alama\"", "\"taimaki kasuwancina\"", "\"Ina da shagon aski a Oakland. Ka rubuta gajeriyar sanarwa: a rufe ranar Litinin July 4. Sautin abota, ƙasa da kalmomi 25.\"", "\"rubuta wani abu\""], answer: 2, why: "Yana faɗin ku waye ne, me kuke buƙata, wa za a yi wa da yadda ya kamata ya kasance." },
          { objective: "O6", q: "Wanne ya kamata ku bari a waje daga prompt?", options: ["Irin kasuwancinku", "Garinku", "Lambar wayar abokin ciniki", "Sautin da kuke so"], answer: 2, why: "Bayanan sirri na abokan ciniki ba sa shiga kayan AI." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI lafiya kuma da kyau",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inganta daftarin",
          minutes: 4,
          goal: "Yi amfani da buƙatun biyo baya don mayar da daftarin farko abin da za ku yi amfani da shi da gaske.",
          text: [
            "Amsar farko daftari ce. A cikin hira ɗaya, mataimakin yana tuna abin da kuka nema, don haka kuna iya faɗa masa abin da zai canja.",
            "Buƙatun biyo baya masu amfani ga kasuwanci: \"Ka gajarta shi.\" \"Ka sa ya fi daɗin ji.\" \"Ka ƙara lokutan aikinmu.\" \"Ka ba ni sigogi uku.\" \"Ka rubuta shi da Spanish ma.\" \"Ka yi amfani da kalmomi masu sauƙi.\"",
            "Sannan ku mayar da shi naku. Ku canja kalmomi don ya yi kama da ku da shagonku. Abokan ciniki sun san muryarku; sigar ƙarshe ma ya kamata ta yi kama da ita."
          ],
          steps: ["Ku karanta daftarin da babbar murya.", "Ku zaɓi abu ɗaya da za a canja ku nema.", "Ku maimaita har ya yi aiki.", "Ku gyara sigar ƙarshe da kalmominku."],
          words: [["Buƙatar biyo baya (follow-up)", "buƙata ta biyu da ke ginuwa kan amsar da kuka samu."], ["Siga (version)", "ɗaya daga cikin hanyoyi da yawa na rubuta abu ɗaya."]],
          slides: [
            { title: "Amsar farko daftari ce", bullets: ["Hirar tana tuna buƙatarku", "Ku nemi canji ɗaya a lokaci ɗaya"] },
            { title: "Buƙatun biyo baya na kasuwanci", bullets: ["\"Ka gajarta shi.\" \"Ka sa ya fi daɗin ji.\"", "\"Ka ba ni sigogi uku.\"", "\"Ka rubuta shi da Spanish ma.\""] },
            { title: "Ku mayar da shi naku", bullets: ["Ku karanta shi da babbar murya", "Ku canja kalmomi don ya yi kama da ku", "Abokan ciniki sun san muryarku"] }
          ],
          tryIt: "Ku ɗauki amsar daga Darasi na 3. Ku nemi canje-canje biyu, ɗaya bayan ɗaya, sannan ku gyara sigar ƙarshe don ta yi kama da ku.",
          youCanNow: "inganta daftarin AI da buƙatun biyo baya da sa shi ya yi kama da kasuwancinku.",
          quickCheck: [
            { objective: "O4", q: "Ta yaya ya kamata ku ɗauki amsar AI ta farko?", options: ["A matsayin daftari da za ku iya ingantawa", "A matsayin aikin da ya kammala", "A matsayin gaskiya da ba za ku iya canjawa ba", "A matsayin abin da za a saka nan take"], answer: 0, why: "Amsar farko daftari ce da kuke tsara ta da buƙatun biyo baya." },
            { objective: "O4", q: "Bayanin kaya da AI ya rubuta yana da kyau amma yana jin kamar ba shi da rai. Me za ku yi?", options: ["Ku yi amfani da shi yadda yake", "Ku sake farawa da wani kayan AI", "Ku nemi canje-canje da yawa a cikin dogon saƙo ɗaya", "Ku nemi canji ɗaya, sannan ku gyara shi da kalmominku"], answer: 3, why: "Canji ɗaya a lokaci ɗaya tare da gyaranku suna sa ya yi kama da ku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da bayanai kafin abokan ciniki su gani",
          minutes: 5,
          goal: "Tabbatar da kowane bayani a daftarin AI kafin ku saka shi, ku buga shi ko ku aika shi.",
          text: [
            "AI yana iya ƙirƙirar abubuwa: farashin da ba daidai ba, lokutan aiki marasa daidai, rangwamen da ba ku taɓa shiryawa ba, ko dokar da babu ita. Ana kiran wannan hallucination (hasashen ƙarya). Idan ya shiga alamar sanarwarku ko shafinku na intanet, abokan ciniki za su riƙe ku da shi.",
            "Kafin ku yi amfani da kowane abu, ku duba: farashi, ranaku da lokutan aiki, adireshinku da lambar wayarku, alkawura (\"kai kaya kyauta\", \"tabbas\"), da duk wata doka game da lasisi, haraji ko lafiya. Ku kwatanta da bayananku.",
            "Game da dokoki, AI ba majiya ba ne. Ku duba shafin gwamnati na hukuma (sau da yawa yana ƙarewa da .gov) ko ku tambayi akawunta ɗinku, ofishin garinku ko mai ba da shawara kyauta ga ƙananan kasuwanci kamar SCORE ko Small Business Development Center (SBDC, cibiyar bunƙasa ƙananan kasuwanci)."
          ],
          steps: ["Ku ja layi a ƙarƙashin kowace lamba, rana, suna da alkawari.", "Ku duba kowanne da bayananku.", "Ku duba kowace doka a shafin .gov na hukuma.", "Ku goge duk alkawarin da ba ku shirya yi ba."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Majiyar hukuma", "ofishin gwamnati ko kamfanin da ke kafa dokar ko farashin da gaske."]],
          slides: [
            { title: "AI yana iya ƙirƙirar abubuwa", bullets: ["Farashi ko lokutan aiki marasa daidai", "Rangwame ko alkawuran da ba ku shirya ba", "Dokokin da babu su"] },
            { title: "Ku duba kafin abokan ciniki su gani", bullets: ["Farashi, ranaku, lokutan aiki", "Adireshi da lambar waya", "Alkawura kamar \"kyauta\" ko \"tabbas\""] },
            { title: "Dokoki da shari'a", bullets: ["Ku duba shafin .gov na hukuma", "Ku tambayi akawunta ɗinku ko ofishin garinku", "Taimako kyauta: SCORE ko SBDC"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta gajeren sakin layi na \"Game da mu\" don kasuwancinku. Ku ja layi a ƙarƙashin kowane bayani da alkawari a ciki, ku duba kowanne, ku gyara ko ku goge abin da ba daidai ba.",
          youCanNow: "nemo da tabbatar da kowane bayani da alkawari a daftarin AI kafin abokan ciniki su gani.",
          quickCheck: [
            { objective: "O5", q: "Mene ne hallucination na AI?", options: ["Hoto mai haske da AI ya yi", "Bayanin ƙirƙira da yake kama da gaskiya", "Amsa mai jinkiri", "Kuskuren rubutun kalma"], answer: 1, why: "AI yana iya ƙirƙirar bayanai da suke kama da na gaske, don haka kuke duba su." },
            { objective: "O5", q: "Sakin layi na \"Game da mu\" na AI ya ce an buɗe shagonku a 1995, amma an buɗe shi a 2015. Me za ku yi?", options: ["Ku bar shi; abokan ciniki ba za su lura ba", "Ku tambayi AI ko ya tabbata", "Ku gyara shekarar kafin ku saka shi", "Ku goge dukan sakin layin"], answer: 2, why: "Dole a duba kuma a gyara kowane bayani a daftarin da abokan ciniki za su gani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye bayanan abokan ciniki da na kasuwanci",
          minutes: 5,
          goal: "Yi amfani da AI don kasuwancinku ba tare da raba bayanan sirri na abokan ciniki ko na kasuwanci ba.",
          text: [
            "Kada ku liƙa bayanan sirri a mataimakin AI: sunayen abokan ciniki tare da lambobin waya ko adireshi, lambobin kati ko banki, kalmomin sirri (password), lambobin Social Security (lambar shaidar Amurka) na ma'aikata, ko bayanan lafiya na sirri. Kuna iya samun taimakon da kuke buƙata ba tare da su ba. Ku rubuta \"[sunan abokin ciniki]\" a maimakon haka.",
            "Ku karanta saitunan sirri (privacy settings) na kayan da kuke amfani da shi. Wasu kayan suna barin ku hana su ajiye hirarku don horar da AI. Sigogin kasuwanci na wasu kayan suna ba da ƙarin kariya; ku duba shafin hukuma na kamfanin kafin ku dogara da hakan.",
            "'Yan damfara ma suna amfani da AI: takardun neman kuɗi (invoice) na bogi, imel na bogi daga masu kawo kaya, da kiran waya na bogi. Idan saƙo ya gaggauta ku ku biya ko ku canja bayanan banki, ku tsaya ku sake kiran mai kawo kayan ta lambar da kuka riga kuka sani."
          ],
          steps: ["Kafin ku aika prompt, ku karanta shi don neman bayanan sirri.", "Ku canja su da madadi kamar \"[sunan abokin ciniki]\".", "Ku duba saitunan sirri na kayan.", "Ku sake kira ta lambar da kuka sani kafin ku biya duk wata buƙata ta gaggawa."],
          words: [["Madadi (placeholder)", "abin da ke tsaye a madadin bayanan sirri na gaske, kamar \"[sunan abokin ciniki]\"."], ["Saitunan sirri (privacy settings)", "zaɓuɓɓuka a cikin kayan game da abin da yake ajiyewa da yadda yake amfani da bayananku."]],
          slides: [
            { title: "Kada ku taɓa liƙa wa AI", bullets: ["Lambobin waya da adireshin abokan ciniki", "Lambobin kati, banki da kalmomin sirri", "Lambar shaidar ma'aikaci ko bayanan lafiya na sirri"] },
            { title: "Ku yi amfani da madadi", bullets: ["\"[sunan abokin ciniki]\" a maimakon ainihin suna", "Har yanzu kuna samun taimakon da kuke buƙata"] },
            { title: "Saituna da zamba", bullets: ["Ku duba saitunan sirri na kayan", "Takardun neman kuɗi da imel na bogi daga masu kawo kaya sun yawaita", "Ku sake kira ta lambar da kuka sani kafin ku biya"] }
          ],
          tryIt: "Aikin ƙarshe: ku zaɓi aiki ɗaya na gaske don kasuwancinku a wannan makon. Ku yi amfani da mataimakin AI kyauta don yin shi da prompt mai sassa huɗu, ku nemi aƙalla canji ɗaya, ku duba kowane bayani da kanku, ku cire duk wani bayanin sirri, sannan ku yi amfani da shi.",
          youCanNow: "amfani da AI don aiki na gaske na kasuwanci yayin da kuke kiyaye bayanan abokan ciniki da na kasuwanci.",
          quickCheck: [
            { objective: "O6", q: "Mene ne madadi (placeholder)?", options: ["Abin da ke tsaye a madadi kamar \"[sunan abokin ciniki]\"", "Lambar wayar abokin ciniki na gaske", "Kalmar sirri", "Wani irin kayan AI"], answer: 0, why: "Madadi yana bar ku samun taimako ba tare da raba bayanan sirri ba." },
            { objective: "O6", q: "Wani mai kira ya ce dole ku biya takardar kuɗi da wa'adinta ya wuce yau da katin kyauta (gift card). Me za ku yi?", options: ["Ku biya da sauri don guje wa matsala", "Ku ba shi lambar katinku a maimakon haka", "Ku nemi AI ya biya", "Ku katse wayar ku kira mai kawo kayan ta lambar da kuka riga kuka sani"], answer: 3, why: "Buƙatun biya da katin kyauta cikin gaggawa alamar gargaɗin zamba ce." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI lafiya kuma da kyau",
        questions: [
          { objective: "O4", q: "Alamar sanarwar da AI ya rubuta ta yi tsawo sosai. Me za ku nema?", options: ["\"Ka gajarta ta.\"", "\"Ka goge asusuna.\"", "\"Ka ƙara lambar bankina.\"", "Babu komai; ku buga ta"], answer: 0, why: "Buƙatar biyo baya tana neman canjin da kuke so." },
          { objective: "O5", q: "Daftarin AI ya ce \"Kai kaya kyauta a duk oda\" amma ba ku taɓa yin wannan tayin ba. Me za ku yi?", options: ["Ku bar shi; yana da kyau", "Ku tambayi AI ko gaskiya ne", "Ku saka shi ku gani", "Ku goge alkawarin kafin ku yi amfani da daftarin"], answer: 3, why: "Abokan ciniki za su iya riƙe ku da alkawura a alamarku ko shafinku." },
          { objective: "O5", q: "A ina za ku duba doka game da lasisin kasuwanci?", options: ["Amsar AI", "Shafin gwamnati na hukuma ko ofishin", "Wani rubutu a kafofin sada zumunta", "Abokin hamayya a kasuwanci"], answer: 1, why: "Dokoki daga majiyar hukuma suke." },
          { objective: "O6", q: "Me za ku rubuta a maimakon ainihin suna da lambar wayar abokin ciniki?", options: ["Madadi kamar \"[sunan abokin ciniki]\"", "Ainihin bayanan", "Lambar katinsa", "Babu komai; ku daina amfani da AI har abada"], answer: 0, why: "Madadi yana kiyaye bayanan sirri daga ciki." },
          { objective: "O6", q: "Wani imel \"daga mai kawo muku kaya\" ya ce ku biya zuwa sabon asusun banki yau. Me za ku yi?", options: ["Ku biya nan take", "Ku amsa da kalmar sirrinku", "Ku sake kiran mai kawo kayan ta lambar da kuka riga kuka sani", "Ku tura shi ga abokan ciniki"], answer: 2, why: "Canjin biyan kuɗi na gaggawa zamba ce da aka saba gani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga AI don Ƙananan Kasuwanci",
    questions: [
      { objective: "O1", q: "Wanne ne mataimakin AI kyauta?", options: ["Injin karɓar kuɗi", "Microsoft Copilot", "Na'urar karanta barcode", "Firintar rasit"], answer: 1, why: "Copilot, ChatGPT da Gemini sanannun mataimaka ne." },
      { objective: "O1", q: "Mataimakin AI yana sanin farashinku:", options: ["Koyaushe", "Daga garinku", "Daga bankinku", "Sai idan kun faɗa masa kawai"], answer: 3, why: "Bai san kasuwancinku ba sai kun faɗa masa." },
      { objective: "O1", q: "Wa ke yanke shawarar ƙarshe kan aikin AI don kasuwancinku?", options: ["AI", "Abokan cinikinku", "Shagon manhajoji", "Ku, masu kasuwancin"], answer: 3, why: "Ku ne masu kasuwancin kuma ku ne kuke yanke abin da za ku yi amfani da shi." },
      { objective: "O2", q: "Wanne ne aikin da ake maimaitawa, na rubutu, marar haɗari sosai?", options: ["Sa hannu a yarjejeniyar haya", "Amsa tambaya iri ɗaya ta abokan ciniki kowace rana", "Biyan harajin albashin ma'aikata", "Zaɓar lauya"], answer: 1, why: "Amsoshin rubutu da ake maimaitawa ayyuka ne masu kyau ga AI." },
      { objective: "O2", q: "Wanne ne ya kamata ya kasance a jerin \"Mutane da majiyoyin hukuma\"?", options: ["Rubutun kafofin sada zumunta", "Bayanin abinci a menu", "Shawarwarin haraji", "Jerin abubuwan yi na buɗe shago"], answer: 2, why: "Shawarwarin kuɗi da haraji suna buƙatar mutane da majiyoyin hukuma." },
      { objective: "O2", q: "Gwaji mai sauri ya ce AI zai iya taimakawa idan kuskure:", options: ["Yana da sauƙin gani da gyarawa", "Yana da tsada", "Na shari'a ne", "A ɓoye yake"], answer: 0, why: "Ayyukan da ba su da haɗari sosai suna da lafiya a gwada da AI." },
      { objective: "O3", q: "Mene ne prompt?", options: ["Rasit", "Tarar jinkiri", "Abin da kuke rubutawa don neman wani abu daga AI", "Kai kaya"], answer: 2, why: "Prompt ita ce buƙatarku." },
      { objective: "O3", q: "Wane sashe ne ke faɗa wa AI salon da kuke so?", options: ["Yadda ya kamata ya kasance", "Ku waye ne", "Bankinku", "Kalmar sirrinku"], answer: 0, why: "\"Yadda ya kamata ya kasance\" ya haɗa da tsawo da sauti." },
      { objective: "O3", q: "Me yasa za ku ƙara irin kasuwancinku da garinku a prompt?", options: ["Don ya yi jinkiri", "Don amsar ta dace da kasuwancinku", "Doka ce ta tilasta", "Don AI ya caje ku kuɗi"], answer: 1, why: "Bayanai suna sa amsar ta dace." },
      { objective: "O4", q: "Amsar AI ta farko ta fi kyau a ɗauke ta a matsayin:", options: ["Ta ƙarshe", "Doka", "Kwangila", "Daftari"], answer: 3, why: "Kuna inganta ta kuma kuna duba ta kafin amfani." },
      { objective: "O4", q: "Wace buƙatar biyo baya ce ke taimakawa abokan ciniki masu magana da Spanish?", options: ["\"Ka rubuta shi da Spanish ma.\"", "\"Ka ƙara kalmar sirrina.\"", "\"Ka tsawaita shi.\"", "\"Ka goge shi.\""], answer: 0, why: "AI zai iya rubuta daftari da wasu harsuna; ku sa wanda ya iya harshen sosai ya duba." },
      { objective: "O4", q: "Me yasa za ku gyara sigar ƙarshe da kalmominku?", options: ["Ba shi da amfani", "Don ɓoye kurakurai", "Don ya yi tsawo", "Don ya yi kama da ku da kasuwancinku"], answer: 3, why: "Abokan ciniki sun san muryarku." },
      { objective: "O5", q: "Mene ne hallucination na AI?", options: ["Matsalar allo", "Intanet mai jinkiri", "Bayanin ƙirƙira da yake kama da gaskiya", "Wani irin manhaja"], answer: 2, why: "AI yana iya ƙirƙirar bayanai." },
      { objective: "O5", q: "Me dole ku duba kafin ku saka daftarin AI?", options: ["Rubutun kalmomi kawai", "Farashi, lokutan aiki, adireshi da alkawura", "Babu komai", "Irin haruffa kawai"], answer: 1, why: "Bayanai ko alkawura marasa daidai suna ɓata amincewa." },
      { objective: "O5", q: "Masu ba da shawara kyauta ga ƙananan kasuwanci sun haɗa da:", options: ["AI da kansa", "Tallace-tallacen da ke tasowa (pop-up)", "Dandalin intanet na kowa", "SCORE da Small Business Development Centers"], answer: 3, why: "SCORE da SBDC suna ba da shawara kyauta." },
      { objective: "O6", q: "Wanne ne kada ku TAƁA liƙa wa kayan AI?", options: ["\"Ka sa ya fi daɗin ji\"", "Irin kasuwancinku", "Lambar katin abokin ciniki", "Lokutan buɗe shagonku"], answer: 2, why: "Lambobin kati bayanan sirri ne." },
      { objective: "O6", q: "Madadi (placeholder) shi ne:", options: ["Abin da ke tsaye a madadi kamar \"[sunan abokin ciniki]\"", "Lambar waya ta gaske", "Kalmar sirri", "Farashi"], answer: 0, why: "Madadi yana tsaye a madadin bayanan sirri." },
      { objective: "O6", q: "Kafin ku dogara da alkawuran sirri na wani kayan AI, ya kamata ku:", options: ["Yi hasashe", "Duba saitunansa da shafin hukuma na kamfanin", "Tambayi abokin ciniki", "Yi watsi da sirri"], answer: 1, why: "Saituna da shafukan hukuma suna faɗin abin da kayan yake ajiyewa." },
      { objective: "O6", q: "Wani mai kira yana gaggauta ku ku biya \"takardar kuɗi da wa'adinta ya wuce\" da katin kyauta. Wannan:", options: ["Kasuwanci ne na yau da kullum", "Alamar gargaɗin zamba ce", "Dokar haraji ce", "Rangwame ne"], answer: 1, why: "Gaggawa da katin kyauta alamun zamba ne." },
      { objective: "O6", q: "Hanya mafi kyau don tabbatar da buƙatar biyan kuɗi ta gaggawa daga mai kawo kaya ita ce:", options: ["Kiran mai kawo kayan ta lambar da kuka riga kuka sani", "Amsa wannan imel ɗin", "Biyan rabi", "Tambayar AI"], answer: 0, why: "Lambar da kuka sani tana kai ku ga ainihin mai kawo kayan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      6,
      8,
      9,
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
        name: "Prompt na kasuwanci mai sarari",
        objective: "O3",
        notYet: "Prompt ɗin ba shi da sarari, misali \"yi alamar sanarwa\".",
        meets: "Prompt ɗin yana da irin kasuwancinku, aikin, bayananku da yadda ya kamata ya kasance.",
        exceeds: "Amsar farko ta kusa shiryawa saboda prompt ɗin ya yi sarari sosai."
      },
      {
        name: "An inganta shi",
        objective: "O4",
        notYet: "An yi amfani da daftarin farko kamar yadda yake.",
        meets: "An nemi aƙalla canji ɗaya kuma an gyara sakamakon don ya yi kama da ku.",
        exceeds: "An nemi canje-canje biyu ko fiye, ɗaya bayan ɗaya, kuma za a iya faɗin abin da kowanne ya gyara."
      },
      {
        name: "An tabbatar da bayanai",
        objective: "O5",
        notYet: "Ba a duba farashi, lokacin aiki, adireshi ko alkawari ba.",
        meets: "An duba kowane bayani da alkawari, kuma an gyara ko an cire duk wanda ba daidai ba.",
        exceeds: "Za a iya faɗin inda aka tabbatar da kowane bayani."
      },
      {
        name: "Ba a saka bayanan sirri ba",
        objective: "O6",
        notYet: "Prompt ɗin yana da sunan abokin ciniki, lambarsa ko wani bayanin sirri.",
        meets: "Babu bayanan sirri na abokan ciniki ko na kasuwanci a cikin prompt ɗin.",
        exceeds: "An yi amfani da madadi, kuma an cike su ne kawai a sigar ƙarshe."
      },
      {
        name: "An yi amfani da shi",
        objective: "O2",
        notYet: "Aikin ba aiki na gaske na kasuwanci ba ne, ko ba a yi amfani da shi ba.",
        meets: "An kammala aiki na gaske daga kasuwancin kuma an yi amfani da shi.",
        exceeds: "Mai kasuwancin ya zaɓi aiki daga jerin \"Gwada da AI\" kuma ya rubuta lokacin da aka adana."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka ce suna amfani da AI don aƙalla aikin kasuwanci ɗaya kowane mako (binciken biyo baya na kwanaki 30)",
      "Masu kasuwanci da suka ce sun adana lokaci kan ayyukan rubutu (binciken biyo baya)",
      "Masu kasuwanci da suka fara wani kwas na Koach Learn na ƙananan kasuwanci cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Aiki ɗaya na gaske na kasuwanci na wannan makon, kamar alamar sanarwa ko amsa ga abokin ciniki",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi kowane mai kasuwanci ya zo da aiki ɗaya na gaske don aikin ƙarshe ya adana masa lokaci nan take.",
      "Kada ku taɓa sa masu kasuwanci su rubuta ainihin sunayen abokan ciniki, lambobinsu ko bayanan katinsu; ku yi atisaye da madadi.",
      "Ku tura tambayoyin haraji, lasisi da shari'a zuwa majiyoyin hukuma, SCORE ko Small Business Development Center.",
      "Ku haɗa masu kasuwanci daga irin kasuwanci daban-daban don su ga ƙarin hanyoyin amfani da AI.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
