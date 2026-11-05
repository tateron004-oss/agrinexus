"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-retail.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FTC_ADS = { name: "FTC: Muhimman ƙa'idojin talla (Advertising and Marketing basics)", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-retail",
  category: "Small Business",
  name: "AI don Kasuwancin Sayar da Kaya (Shago)",
  skills: "Rubuta bayanin kaya, Yin alamun kan shiryayye, Bin diddigin kaya a spreadsheet, Saita matakin sake oda, Karanta yanayin sayarwa, Shirya tallan lokaci",
  outcome: "gudanar da aikin takardu na ƙaramin shago da taimakon AI: rubuta bayanin kaya na gaskiya da alamun kan shiryayye, riƙe takardar kaya mai matakin sake oda, gane kayan da suka fi sayuwa da waɗanda ba sa sayuwa, da shirya tallan lokaci ɗaya daga lambobinku.",
  about: [
    "Wannan kwas ɗin na masu ƙananan shaguna ne da ma'aikatansu: shagunan tufafi, shagunan unguwa (bodega), shagunan kayan kwalliya, shagunan kyaututtuka, shagunan kayan gwanjo, da masu sayarwa ta intanet ko a kasuwa. Yawancin ɗalibanmu 'yan tsiraru ne masu shago da ƙaramar ƙungiya.",
    "Za ku yi amfani da mataimakin AI kyauta da spreadsheet (Google Sheets ko Excel) don rubuta bayanin kayanku, bin diddigin kaya don kada su ƙare muku sau da yawa, ganin abin da ke sayuwa, da shirya talla bisa gaskiya ba tsammani ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku haɗa kayan aikin shagonku: bayanin kaya biyar na gaskiya, alamun shiryayye uku, takardar kaya mai aƙalla abubuwa 15 tare da matakin sake oda da alamar sake oda, gajeren rubutu kan kaya uku da suka fi sayuwa da uku da suka fi jinkiri, da shiri na shafi ɗaya don tallan lokaci ɗaya mai kayan, farashi, ranaku da yadda za ku auna sakamakonsa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan shaguna da ma'aikatansu: shagunan tufafi, shagunan unguwa (bodega), shagunan kayan kwalliya, shagunan kyaututtuka, shagunan kayan gwanjo, da masu sayarwa ta intanet ko a kasuwa. Da yawa 'yan tsiraru ne masu shago da ƙaramar ƙungiya.",
    startingPoint: "Sun san kayansu da kwastomominsu sosai, kuma suna amfani da na'urar karɓar kuɗi ko POS. Ba sa amfani da spreadsheet sosai don kaya ko rahoton sayarwa, ko AI don rubutu, kuma sau da yawa suna shirya talla da tsammani.",
    gap: "Shaguna suna yin asara idan kayan da suka fi sayuwa suka ƙare, suka riƙe kaya masu jinkiri da yawa, suka saka farashi marasa daidai, ko suka yi tallan da ba ya kawo riba. Masu shago suna buƙatar amfani da AI da spreadsheet don rubuta bayanin kaya na gaskiya, bin diddigin kaya, karanta sayarwa da shirya talla daga lambobinsu, yayin da suke kiyaye bayanan shago.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: kwamfuta ta fi kyau don spreadsheet; waya tana aiki don rubutu da alamu",
      "Lokaci: darussa na kusan minti 5 da suka dace da lokutan buɗe shago",
      "Ƙa'idoji: dokar FTC ta gaskiya a talla don iƙirari game da kaya, kuma farashin kan alama dole ya yi daidai da na na'urar karɓar kuɗi",
      "Sirri da tsaro: babu kalmar sirrin mai kawo kaya ko bayanan kwastomomi a AI; jimillar kowane kaya kawai"
    ],
    prerequisites: "Kwas ɗin \"Muhimman Kayan AI ga Ƙananan Kasuwanci\" yana da amfani ga masu koyo da ba su saba da spreadsheet ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanai daga lakabin kaya ko takardar sayen kaya (invoice)", action: "rubuta gajeren bayanin kaya na gaskiya da taimakon AI", standard: "kowane iƙirari an duba shi da lakabin, kuma babu abin da ba za ku iya tabbatarwa ba" },
    { id: "O2", condition: "Ta amfani da mataimakin AI", action: "yin alamun shiryayye da sanarwar shago masu sarari", standard: "farashi sun yi daidai da na na'urar karɓar kuɗi, rangwame yana da ranar ƙarewa ta gaske, kuma wanda ya iya harshen sosai ya duba fassara" },
    { id: "O3", condition: "Ta amfani da Google Sheets ko Excel", action: "gina takardar kaya mai matakin sake oda da alamar sake oda", standard: "mai aƙalla abubuwa 15, matakan sake oda daidai, da dabarar lissafi (formula) da aka gwada" },
    { id: "O4", condition: "Idan kuna da sayarwar mako 4 zuwa 8 na kowane kaya", action: "gane kayan da suka fi sayuwa da waɗanda suka fi jinkiri da taimakon AI", standard: "kuna faɗin uku na sama da uku na ƙasa, kuma kuna tabbatar da duk wani yanayi da AI ya gani a lambobinku" },
    { id: "O5", condition: "Idan kuna da lambobin sayarwa da na kaya", action: "shirya tallan lokaci", standard: "mai kaya, farashi, riba a kowace sayarwa, ranaku da isasshen kaya, kuma ku ne kuka yanke shawara" },
    { id: "O6", condition: "Idan kuna da talla da bayanan shagonku", action: "auna sakamakon tallan da kiyaye bayanan shago", standard: "kuna kwatantawa da makonni iri ɗaya na baya, kuna duba lissafin AI, kuma ba ku saka kalmomin sirri a AI ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kaya, alamu da ajiyar kaya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta bayanin kaya da ke sayarwa, da gaskiya",
          minutes: 5,
          goal: "Rubuta gajerun bayanin kaya na gaskiya da taimakon AI.",
          text: [
            "Bayanin kaya yana faɗa wa mai saye mene ne kayan, na wa ne, da dalilin da zai so shi. Yana aiki a kan lakabin shiryayye, shafinku na intanet, kasuwar intanet ko saƙo a kafofin sada zumunta.",
            "Ku ba AI bayanan gaskiya: \"Ka rubuta bayani mai kalmomi 40 don man shafawa na shea butter mai 12 oz, babu ƙamshi, an yi shi a Ghana, don busasshiyar fata. Murya mai daɗi. Ka ambaci girman.\" AI yana sa kalmomin su yi daɗi; ku ne kuke kawo bayanan.",
            "Ku duba kowane bayani: girma, abin da aka yi shi da shi, inda aka yi shi, yadda ake kula da shi. Ku cire iƙirarin da ba za ku iya tabbatarwa ba, kamar \"yana warkar da eczema\" ko \"mafi kyau a gari\". FTC (hukumar kasuwanci ta Amurka) ta ce iƙirarin talla dole ya zama gaskiya kuma yana da shaida."
          ],
          steps: ["Ku rubuta bayanan kayan: suna, girma, abin da aka yi shi da shi, asali, wanda aka yi wa.", "Ku nemi AI ya rubuta gajeren bayani da muryarku.", "Ku duba kowane bayani da lakabin ko takardar sayen kaya.", "Ku cire iƙirarin da ba za ku iya tabbatarwa ba."],
          words: [["Bayanin kaya", "gajeren rubutu da ke faɗa wa masu saye mene ne kaya da dalilin da za su so shi."], ["Iƙirari (claim)", "maganar gaskiya game da kaya, kamar abin da yake yi."]],
          slides: [
            { title: "Mene ne, na wa ne, me yasa", bullets: ["Mene ne kayan", "Na wa ne", "Me yasa za su so shi"] },
            { title: "Ku ne kuke kawo bayanan", bullets: ["Suna, girma, abin da aka yi shi da shi, asali", "AI yana sa kalmomin su yi daɗi"] },
            { title: "Ku riƙe gaskiya", bullets: ["Ku duba da lakabin ko takardar sayen kaya", "Babu iƙirarin lafiya ko \"mafi kyau\" da ba za ku iya tabbatarwa ba", "FTC: iƙirari dole ya zama gaskiya mai shaida"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Ku zaɓi kaya biyar a shagonku. Ku rubuta bayanan kowanne, ku nemi AI ya rubuta bayani mai kalmomi 30 zuwa 50, sannan ku duba kowanne da lakabin.",
          youCanNow: "rubuta bayanin kaya na gaskiya da taimakon AI.",
          quickCheck: [
            { objective: "O1", q: "A ina za ku duba bayanan da ke cikin bayanin kaya?", options: ["Lakabin ko takardar sayen kaya", "Shafin intanet na abokin hamayya", "Duk abin da AI ya rubuta", "Tsammanin kwastoma"], answer: 0, why: "Lakabin ko takardar sayen kaya ne ke da ainihin bayanan kayan." },
            { objective: "O1", q: "AI ya rubuta cewa wani sabulun gashi \"yana hana zubar gashi\", amma lakabin bai faɗi haka ba. Me za ku yi?", options: ["Ku bar shi don ya ƙara sayarwa", "Ku ƙara alamar tambaya", "Ku cire shi sai dai idan za ku iya tabbatarwa", "Ku sa shi da ƙaramin rubutu"], answer: 2, why: "Iƙirari dole ya zama gaskiya kuma yana da shaida." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Alamun shiryayye, katin farashi da sanarwar shago",
          minutes: 4,
          goal: "Yin alamun shiryayye da sanarwar shago masu sarari cikin sauri.",
          text: [
            "Alamu suna amsa tambayoyi kafin masu saye su tambaya: farashi, rangwame, sababbin kaya, ƙa'idar mayar da kaya, \"ku tambaye mu game da...\". Alamu masu sarari suna ceton lokacin ma'aikata.",
            "Ku nemi AI gajerun kalmomi: \"Ka rubuta alamun shiryayye biyar don shagona na kayan kwalliya: sabon gashin kitso ya iso, saya 2 ka samu 1 kyauta a man gyaran gefen gashi (edge control) har zuwa 31 ga Mayu, ƙa'idarmu ta mayar da kaya kwana 14 ne da rasiti. Ƙasa da kalmomi 12 kowanne.\" Sannan ku tsara su a Canva ko a takarda ku buga.",
            "Farashin kan alamu dole ya yi daidai da na na'urar karɓar kuɗi. Alamun rangwame suna buƙatar ainihin ranar ƙarewa da duk wani iyaka. Idan kuna hidima ga kwastomomi masu wani harshe, ku nemi AI ya fassara, sannan wanda ya iya harshen sosai ya duba."
          ],
          steps: ["Ku jera alamun da kuke buƙata.", "Ku nemi AI gajerun kalmomi.", "Ku tsara su ku buga.", "Ku duba cewa kowane farashi ya yi daidai da na na'urar karɓar kuɗi.", "Wanda ya iya harshen sosai ya duba duk wata fassara."],
          words: [["Alamar shiryayye", "ƙaramar alama a kan shiryayye mai nuna farashi, rangwame ko bayani."], ["Ƙa'idar mayar da kaya", "dokokinku kan lokacin da kwastomomi za su iya dawo da kaya."]],
          slides: [
            { title: "Alamu suna ceton lokacin ma'aikata", bullets: ["Farashi, rangwame da sababbin kaya", "Ƙa'idar mayar da kaya da \"ku tambaye mu game da\""] },
            { title: "AI yana rubutu, ku kuna tsarawa", bullets: ["Ku nemi gajerun kalmomi, ƙasa da 12", "Ku tsara a Canva ko a takarda"] },
            { title: "Ku duba kafin ku rataye", bullets: ["Farashi ya yi daidai da na na'urar karɓar kuɗi", "Ranar ƙarewar rangwame da iyakoki", "Wanda ya iya harshen sosai ya duba fassara"] }
          ],
          tryIt: "Ku nemi AI alamun shiryayye uku don shagonku. Ku duba kowane farashi da na na'urar karɓar kuɗinku, sannan ku yi su ku buga ko ku ajiye.",
          youCanNow: "yin alamun shiryayye da sanarwar shago masu sarari kuma daidai da taimakon AI.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata alamar rangwame ta nuna?", options: ["Kalmar RANGWAME kawai", "Ainihin ranar ƙarewa da duk wani iyaka", "Lambar wayar mai shago", "Kowane kaya a shagon"], answer: 1, why: "Alamar rangwame tana buƙatar ainihin ranar ƙarewa da iyakoki don ta zama ta gaskiya." },
            { objective: "O2", q: "AI ya fassara alamar shiryayyenku zuwa Sifaniyanci. Me za ku yi kafin ku buga?", options: ["Ku buga nan take", "Ku nemi AI ya duba kansa", "Ku cire Turancin", "Wanda ya iya harshen sosai ya duba shi"], answer: 3, why: "Wanda ya iya harshen sosai zai iya gane kuskuren fassara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Riƙe takardar kaya mai matakin sake oda",
          minutes: 6,
          goal: "Gina spreadsheet na kaya da ke nuna abin da za a sake oda.",
          text: [
            "Ƙarewar kayan da ya fi sayuwa yana rasa muku ciniki; kaya masu jinkiri da yawa suna ɗaure kuɗi. Takardar kaya mai sauƙi tana taimakawa. Ginshiƙai (columns): Kaya, Mai kawo kaya, Akwai a hannu, Sayarwa a mako, Kwanakin isowa, Matakin sake oda, A sake oda?",
            "Matakin sake oda shi ne lokacin da za ku sake yin oda. Doka mai sauƙi: sayarwa a mako x makonnin isowa + ɗan ƙari (kayan ajiya na kariya). Idan kuna sayar da 10 a mako, yana ɗaukar mako 1 kafin ya iso, kuma kuna riƙe ƙarin 5, ku sake oda idan ya kai 15.",
            "Ku nemi AI ya taimaka da dabarar lissafi: \"A Google Sheets, ka rubuta formula da ke nuna REORDER idan ginshiƙi C ya yi ƙasa da ko daidai da ginshiƙi F.\" Amsar da aka saba ita ce =IF(C2<=F2,\"REORDER\",\"\"). Ku gwada ta a kan wasu layuka don ku tabbata tana aiki."
          ],
          steps: ["Ku yi ginshiƙai bakwai.", "Ku cika kayanku 15 na farko.", "Ku lissafa matakin sake oda na kowanne: sayarwa a mako x makonnin isowa + kayan ajiya na kariya.", "Ku nemi AI formula ta IF don nuna abin da za a sake oda.", "Ku gwada ta a wasu layuka, kuma ku sabunta Akwai a hannu kowane mako."],
          words: [["Kaya a ajiya (inventory)", "kayan da kuke da su a hannu don sayarwa."], ["Matakin sake oda (reorder point)", "yawan kayan da ya rage da zai sa ku yi odar ƙari."], ["Kayan ajiya na kariya (safety stock)", "ƙarin kaya da ake riƙewa idan sayarwa ta ƙaru ba zato ko kaya suka yi jinkirin isowa."]],
          slides: [
            { title: "Me yasa za a bi diddigin kaya", bullets: ["Ƙarewar kaya yana rasa ciniki", "Kaya masu jinkiri da yawa suna ɗaure kuɗi"] },
            { title: "Ginshiƙan takardar kaya", bullets: ["Kaya, Mai kawo kaya, Akwai a hannu", "Sayarwa a mako, Kwanakin isowa", "Matakin sake oda, A sake oda?"] },
            { title: "Matakin sake oda", bullets: ["Sayarwa a mako x makonnin isowa + kayan ajiya na kariya", "Misali: 10 x 1 + 5 = sake oda a 15"] },
            { title: "Bari takardar ta nuna muku", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Ku gwada a wasu layuka", "Ku sabunta Akwai a hannu kowane mako"] }
          ],
          tryIt: "Ku gina takardar kayanku mai aƙalla abubuwa 15, ku lissafa matakan sake oda, sannan ku ƙara formula ta IF da ke nuna REORDER. Ku gwada ta ta hanyar canja lambar Akwai a hannu ɗaya.",
          youCanNow: "riƙe takardar kaya da ke faɗa muku lokacin sake oda.",
          quickCheck: [
            { objective: "O3", q: "Mene ne kayan ajiya na kariya (safety stock)?", options: ["Kayan da ake ajiyewa a ɗaki a kulle", "Kayan da ba sa sayuwa kwata-kwata", "Ƙarin kaya idan sayarwa ta ƙaru ko kaya suka yi jinkiri", "Kayan da kuke mayar wa mai kawo kaya"], answer: 2, why: "Kayan ajiya na kariya suna rufe abubuwan ba zato a sayarwa ko isowar kaya." },
            { objective: "O3", q: "AI ya rubuta formula don alamar sake oda. Me za ku yi a gaba?", options: ["Ku gwada ta a wasu layuka ta hanyar canja lambar Akwai a hannu", "Ku amince da ita ga kowane kaya", "Ku goge formula ɗin", "Ku kwafe ta zuwa kowace takarda ba tare da dubawa ba"], answer: 0, why: "Gwada formula a wasu layuka yana nuna ko tana aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kaya, alamu da ajiyar kaya",
        questions: [
          { objective: "O1", q: "Wane ne ke kawo bayanan da ke cikin bayanin kaya?", options: ["Tsammanin AI", "Ku, daga lakabin ko takardar sayen kaya", "Abokin hamayya", "Ra'ayin kwastoma"], answer: 1, why: "AI yana rubuta kalmomin; ku kuna kawo bayanan da aka duba." },
          { objective: "O1", q: "AI ya rubuta cewa man shafawanku \"yana warkar da eczema\". Me za ku yi?", options: ["Ku ƙara \"tabbas\"", "Ku bar shi", "Ku ƙara girmansa", "Ku cire shi sai dai idan za ku iya tabbatarwa"], answer: 3, why: "FTC tana buƙatar shaida don iƙirari." },
          { objective: "O2", q: "Alamar rangwame dole ta nuna:", options: ["Ainihin ranar ƙarewa da duk wani iyaka", "Babu farashi", "Kalmar sirrinku", "Tsohon farashi na bogi"], answer: 0, why: "Alamun rangwame na gaskiya suna da ranaku da iyakoki." },
          { objective: "O3", q: "Kuna sayar da 8 a mako, kaya yana ɗaukar mako 2 kafin ya iso, kayan ajiya na kariya 4 ne. Mene ne matakin sake oda?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { objective: "O3", q: "Me =IF(C2<=F2,\"REORDER\",\"\") ke yi?", options: ["Tana haɗa jimillar sayarwa", "Tana goge layin", "Tana nuna REORDER idan abin da ke hannu ya kai ko ya yi ƙasa da matakin sake oda", "Tana aika oda ga mai kawo kaya"], answer: 2, why: "Tana nuna kayan da ke buƙatar sake oda." }
        ]
      }
    },
    {
      name: "Babi na 2: Karanta sayarwa da shirya talla",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gano kayan da suka fi sayuwa da masu jinkiri",
          minutes: 5,
          goal: "Yi amfani da rahoton sayarwa da taimakon AI don gano kaya na sama da na ƙasa.",
          text: [
            "Yawancin na'urorin POS (point of sale, na'urar karɓar kuɗi) suna iya fitar da rahoton sayarwa ta kowane kaya a matsayin fayil da kuke buɗewa a spreadsheet. Idan naku ba zai iya ba, ƙidaya mai sauƙi ta kowane kaya a kowane mako tana aiki.",
            "Ku jera bisa yawan kayan da aka sayar da kuma bisa kuɗin sayarwa. Kayan da suka fi sayuwa sun cancanci wuri mai kyau a shiryayye kuma kada su taɓa ƙarewa. Kayan da suka fi jinkiri suna iya buƙatar wuri mafi kyau, haɗa su da wasu (bundle), rage farashi, ko a daina kawo su.",
            "Kuna iya liƙa jimillar kowane kaya (ba tare da bayanan kwastomomi ba) a mataimakin AI: \"Ga sayarwar mako 8 ta kowane kaya na shagona na kyaututtuka. Waɗanne kaya ne ke ƙaruwa, ke raguwa, ko na lokaci? Waɗanne tambayoyi ya kamata in yi?\" Ku ɗauki amsoshin a matsayin shawarwari ku tabbatar da su a rahotonku."
          ],
          steps: ["Ku fitar da rahoton sayarwa ta kowane kaya ko ku ƙidaya da hannu.", "Ku jera bisa yawa da bisa kuɗi.", "Ku yi alama a kaya 3 na sama da 3 na ƙasa.", "Ku nemi AI ya ga yanayi ta amfani da jimillar kowane kaya kawai.", "Ku tabbatar da kowane yanayi a rahotonku."],
          words: [["POS", "point of sale: na'urar da ke rubuta sayarwa da karɓar kuɗi."], ["Fitarwa (export)", "ajiye bayanai daga wani tsari a matsayin fayil da za ku iya buɗewa a wani wuri."], ["Rage farashi (markdown)", "ƙaramin farashi don sayar da kaya masu jinkiri."]],
          slides: [
            { title: "Ku samo lambobin", bullets: ["Ku fitar da rahoton sayarwa ta kowane kaya daga POS", "Ko ku ƙidaya sayarwa ta kowane kaya kowane mako"] },
            { title: "Ku jera ta hanyoyi biyu", bullets: ["Bisa yawan da aka sayar", "Bisa kuɗin sayarwa", "Ku yi alama a 3 na sama da 3 na ƙasa"] },
            { title: "AI don gane yanayi", bullets: ["Jimillar kowane kaya kawai, babu bayanan kwastomomi", "Yana ƙaruwa, yana raguwa, na lokaci ne?", "Ku tabbatar a rahotonku"] }
          ],
          tryIt: "Ku samo sayarwar mako 4 zuwa 8 ta kowane kaya. Ku gano 3 na sama da 3 na ƙasa, sannan ku tambayi AI wane yanayi yake gani ku tabbatar da ɗaya.",
          youCanNow: "gano kayan da suka fi sayuwa da masu jinkiri, da duba shawarwarin AI da lambobinku.",
          quickCheck: [
            { objective: "O4", q: "Me POS ke nufi?", options: ["Farashi a kan shiryayye", "Point of sale (wurin sayarwa)", "Takardar odar kaya", "Riba ko sayarwa"], answer: 1, why: "POS na nufin point of sale, tsarin da ke rubuta sayarwarku." },
            { objective: "O4", q: "Kuna son AI ya taimaka wajen karanta sayarwarku. Me za ku liƙa?", options: ["Sunayen kwastomomi da lambobin katinsu", "Kalmar sirrin mai kawo kaya", "Cikakkiyar shiga POS ɗinku", "Jimillar kowane kaya kawai"], answer: 3, why: "Jimillar kowane kaya ta isa, kuma bayanan sirri sun kasance a waje da AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shirya tallan lokaci daga lambobinku",
          minutes: 5,
          goal: "Shirya talla mai kaya, farashi, ranaku da duba riba.",
          text: [
            "Sayar da kaya yana tafiya da lokuta: komawa makaranta, bukukuwa, kammala karatu, rani, bukukuwan gari da bukukuwan al'ada da ke da muhimmanci ga kwastomominku. Ku shirya talla wata ɗaya kafin lokacin.",
            "Ku yi amfani da lambobinku: ku tallata kayan da ke sayuwa sosai a wannan lokaci, ko ku haɗa kaya mai jinkiri da kayan da ya fi sayuwa (bundle). Ku nemi AI shawarwari: \"Kayana da ya fi sayuwa shi ne gashin kitso; mai jinkiri shi ne hular satin ta barci. Ka ba ni shawarwari uku na haɗin kaya don komawa makaranta da ke riƙe riba.\"",
            "Ku duba lissafin: farashi, kuɗin sayo, riba a kowace sayarwa, da yawan da kuke buƙatar sayarwa. Ku rubuta ranaku da iyakoki, kuma ku yi odar isasshen kaya ta amfani da takardar sake odarku."
          ],
          steps: ["Ku zaɓi lokaci ko biki.", "Ku zaɓi kaya daga rahoton sayarwarku.", "Ku nemi AI shawarwarin talla ko haɗin kaya.", "Ku duba riba a kowace sayarwa a takarda.", "Ku saita ranaku, iyakoki kuma ku yi odar kaya."],
          words: [["Talla (promotion)", "tayi na musamman na wani ƙayyadadden lokaci."], ["Haɗin kaya (bundle)", "kaya biyu ko fiye da ake sayarwa tare da farashi ɗaya."]],
          slides: [
            { title: "Ku shirya wata ɗaya kafin lokaci", bullets: ["Komawa makaranta, bukukuwa, kammala karatu", "Bukukuwan gari da bukukuwan al'ada"] },
            { title: "Ku yi amfani da lambobinku", bullets: ["Ku tallata kayan da suka fi sayuwa a lokacin", "Ku haɗa mai jinkiri da wanda ya fi sayuwa"] },
            { title: "Ku duba kafin farawa", bullets: ["Farashi, kuɗin sayo da riba a kowace sayarwa", "Ranaku da iyakoki", "Isasshen kaya an yi oda"] }
          ],
          tryIt: "Ku shirya talla ɗaya don lokaci mai zuwa: kaya, farashi, riba a kowace sayarwa, ranaku da yawan kayan da kuke buƙata.",
          youCanNow: "shirya tallan lokaci bisa lambobin sayarwarku.",
          quickCheck: [
            { objective: "O5", q: "Mene ne haɗin kaya (bundle)?", options: ["Kaya da ake sayarwa tare da farashi ɗaya", "Akwatin kayan da aka dawo da su", "Kaya da suka zo daga mai kawo kaya", "Wani nau'in alama"], answer: 0, why: "Haɗin kaya yana haɗa kaya da farashi ɗaya, sau da yawa mai jinkiri tare da wanda ya fi sayuwa." },
            { objective: "O5", q: "Kuna shirya tallan biki. Me za ku duba kafin ku fara shi?", options: ["Yadda alamar take kawai", "Abin da abokin hamayya ke caji", "Riba a kowace sayarwa da ko kuna da isasshen kaya", "Ko AI yana son shawarar"], answer: 2, why: "Talla dole ta kawo riba kuma ta sami isasshen kaya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna tallan da kare shagonku",
          minutes: 5,
          goal: "Auna sakamakon talla da kiyaye bayanan shago.",
          text: [
            "Ku yanke yadda za ku auna kafin ku fara: yawan kayan tallan da aka sayar, jimillar sayarwa a ranakun tallan idan aka kwatanta da makonni iri ɗaya na baya, da riba. Lambar talla (promo code) ko maɓalli na musamman a POS don haɗin kayan yana sauƙaƙa bin diddigi.",
            "Bayan haka, ku nemi AI ya taimaka muku rubuta gajeren taƙaitawa daga lambobinku: abin da ya yi aiki, abin da bai yi ba, abin da za a gwada a gaba. Ku duba lissafinsa da takardarku.",
            "Ku kiyaye bayanan shago: kada ku liƙa sunayen kwastomomi, lambobin kati, kalmomin sirrin masu kawo kaya ko bayanan ma'aikata a kayan AI. Ku yi hankali da takardun neman biyan kuɗi na bogi daga masu kawo kaya da buƙatun biya na \"gaggawa\"; ku kira mai kawo kayan ta lambar da kuka sani."
          ],
          steps: ["Ku zaɓi abubuwan aunawa kafin tallan.", "Ku ƙara lamba ko maɓallin POS don bin diddigi.", "Ku kwatanta da makonni iri ɗaya na baya.", "Ku nemi AI ya taimaka wajen taƙaitawa, ku duba lissafin.", "Ku bar bayanan kwastomomi da na masu kawo kaya a waje da AI."],
          words: [["Lokacin kwatantawa", "lokacin baya da kuke kwatanta sakamako da shi, kamar makonni iri ɗaya na watan jiya."], ["Lambar talla (promo code)", "lambar da ke nuna wanda ya yi amfani da tayi."]],
          slides: [
            { title: "Ku fara yanke abubuwan aunawa", bullets: ["Yawan kayan tallan da aka sayar", "Sayarwa idan aka kwatanta da makonni iri ɗaya na baya", "Riba"] },
            { title: "Ku sauƙaƙa bin diddigi", bullets: ["Lambar talla ko maɓallin POS don haɗin kayan", "AI yana taimakawa a taƙaitawa; ku kuna duba lissafi"] },
            { title: "Ku kare shagonku", bullets: ["Babu bayanan kwastoma, kati, mai kawo kaya ko ma'aikaci a AI", "Ku kira masu kawo kaya ta lambobin da kuka sani game da takardun biya"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa kayan aikin shagonku: bayanin kaya biyar, alamun shiryayye uku, takardar kayanku mai alamun sake oda, kayanku na sama da na ƙasa, da shirin tallanku tare da yadda za ku auna shi.",
          youCanNow: "gudanar da auna talla, da amfani da AI lafiya a dukkan aikin takardun shagonku.",
          quickCheck: [
            { objective: "O6", q: "Ta yaya za ku auna talla?", options: ["Bisa yadda shagon ya yi kamar cike yake", "Ta hanyar kwatantawa da makonni iri ɗaya na baya", "Ta hanyar ƙidaya alamun da aka buga", "Ta hanyar neman AI ya yi tsammani"], answer: 1, why: "Kwatantawa da makonni iri ɗaya na baya yana nuna ainihin canjin." },
            { objective: "O6", q: "Wani imel ya ce mai kawo kayanku yana da sabon asusun banki kuma dole ku biya yau. Me za ku yi?", options: ["Ku biya nan take", "Ku amsa da bayanan shiga bankinku", "Ku tura shi ga kwastomomi", "Ku kira mai kawo kayan ta lambar da kuka riga kuka sani"], answer: 3, why: "Kiran lambar da kuka sani yana duba buƙatar biya ta gaggawa lafiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Karanta sayarwa da shirya talla",
        questions: [
          { objective: "O4", q: "POS ɗinku ba zai iya fitar da rahoto ba. Me za ku iya yi?", options: ["Ku riƙe ƙidaya mai sauƙi ta kowane kaya a kowane mako", "Ku yi tsammani", "Ku tambayi abokin hamayya", "Ku daina bin diddigi"], answer: 0, why: "Ƙidaya da hannu har yanzu tana nuna yanayi." },
          { objective: "O4", q: "Me zai iya taimaka wa kaya mai jinkiri?", options: ["Yin odar ƙari", "Ɓoye shi", "Ƙara farashinsa sosai", "Haɗa shi da wanda ya fi sayuwa"], answer: 3, why: "Haɗin kaya yana iya fitar da kaya masu jinkiri." },
          { objective: "O5", q: "Kafin ku fara haɗin kaya ya kamata ku duba:", options: ["Launi kawai", "Riba a kowace sayarwa", "Taurarinku", "Babu komai"], answer: 1, why: "Talla dole ta ci gaba da kawo kuɗi." },
          { objective: "O6", q: "Ta yaya za ku bi diddigin talla cikin sauƙi?", options: ["Lambar talla ko maɓallin POS na musamman", "Tunawa", "Neman AI ya yi tsammani", "Ƙidaya motocin kwastomomi"], answer: 0, why: "Lambobi da maɓallai suna rubuta kowace sayarwa." },
          { objective: "O6", q: "Wani imel ya ce mai kawo kayanku ya canja bayanan banki kuma ku biya yau. Ku:", options: ["Ku amsa da kalmar sirrinku", "Ku biya yanzu", "Ku kira mai kawo kayan ta lambar da kuka sani", "Ku tura ga kwastomomi"], answer: 2, why: "Takardun biya na bogi daga masu kawo kaya zamba ce da aka saba gani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Kasuwancin Sayar da Kaya (Shago)",
    questions: [
      { objective: "O1", q: "Bayanin kaya yana amsa:", options: ["Kalmar sirrinku", "Mene ne, na wa ne, me yasa za su so shi", "Bankin mai kawo kaya", "Babu komai"], answer: 1, why: "Waɗannan sassa uku suna taimaka wa masu saye su yanke shawara." },
      { objective: "O1", q: "A ina za ku duba bayanan kaya?", options: ["Abokin hamayya", "AI", "Saƙo a kafofin sada zumunta", "Lakabin ko takardar sayen kaya"], answer: 3, why: "Lakabi da takardun sayen kaya suna da ainihin bayanan." },
      { objective: "O1", q: "FTC ta ce iƙirarin talla dole ya zama:", options: ["Da manyan haruffa", "Mai ban sha'awa", "Gajere", "Gaskiya kuma mai shaida"], answer: 3, why: "Wannan shi ne ma'aunin FTC." },
      { objective: "O2", q: "Farashin kan alamar shiryayye dole:", options: ["A ƙara shi zuwa lamba cikakkiya", "Ya yi daidai da na na'urar karɓar kuɗi", "A ɓoye shi", "Ya canja kowace rana"], answer: 1, why: "Farashi marasa daidai suna ɓata wa kwastomomi rai." },
      { objective: "O2", q: "Alamar da aka fassara ya kamata wa ya duba ta?", options: ["Mai bugawa", "Babu kowa", "Wanda ya iya harshen sosai", "Wani shafin intanet kawai"], answer: 2, why: "Fassarar AI tana iya samun kurakurai." },
      { objective: "O2", q: "Alamar shiryayye mai kyau ita ce:", options: ["Ƙasa da kusan kalmomi 12", "Cikakken shafi", "Babu rubutu", "Da ƙaramin rubutu sosai"], answer: 0, why: "Ana karanta gajerun alamu da sauri." },
      { objective: "O3", q: "Mene ne kayan ajiya na kariya (safety stock)?", options: ["Inshora", "Akwatin ajiyar kuɗi a kulle", "Ƙarin kaya idan sayarwa ta ƙaru ko kaya suka yi jinkiri", "Kayan da suka lalace"], answer: 2, why: "Yana kare ku daga ƙarewar kaya." },
      { objective: "O3", q: "An sayar da 5 a mako, isowa mako 2, kayan ajiya na kariya 5. Matakin sake oda?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { objective: "O3", q: "Bayan AI ya rubuta formula ta spreadsheet ya kamata ku:", options: ["Amince da ita", "Gwada ta a wasu layuka", "Goge ta", "Buga ta"], answer: 1, why: "Formula tana iya zama ba daidai ba." },
      { objective: "O3", q: "Me yasa za a bi diddigin kaya?", options: ["Don ruɗar ma'aikata", "Don nishaɗi", "Domin AI ya ce haka", "Don rage ƙarewar kaya da guje wa kaya masu jinkiri da yawa"], answer: 3, why: "Dukansu suna jawo muku asarar kuɗi." },
      { objective: "O4", q: "POS na nufin:", options: ["Point of sale (wurin sayarwa)", "Farashin hidima", "Takardar gidan waya", "Takardar odar kaya"], answer: 0, why: "Shi ne ke rubuta sayarwa." },
      { objective: "O4", q: "Jera bisa kuɗin sayarwa yana nuna:", options: ["Sa'o'in ma'aikata", "Waɗanne ne suka fi nauyi", "Waɗanne ne suka fi sabo", "Waɗanne kaya ne suka fi kawo kuɗi"], answer: 3, why: "Kuɗi yana nuna kuɗin shiga ta kowane kaya." },
      { objective: "O4", q: "Idan kuna liƙa sayarwa a AI, ku saka:", options: ["Lambobin kati", "Sunayen kwastomomi", "Jimillar kowane kaya kawai", "Kalmomin sirrin masu kawo kaya"], answer: 2, why: "Babu bayanan sirri." },
      { objective: "O5", q: "Yaushe ya kamata ku shirya tallan lokaci?", options: ["A ranar kanta", "Kusan wata ɗaya kafin lokaci", "Bayan lokacin ya wuce", "Ba a taɓa ba"], answer: 1, why: "Lokaci don yin odar kaya da yin alamu." },
      { objective: "O5", q: "Mene ne haɗin kaya (bundle)?", options: ["Kaya da ya karye", "Haraji", "Bashi", "Kaya da ake sayarwa tare da farashi ɗaya"], answer: 3, why: "Haɗin kaya yana haɗa kaya wuri ɗaya." },
      { objective: "O5", q: "Kafin talla, ku yi amfani da takardar sake oda don:", options: ["Ɓoye farashi", "Goge kaya", "Tabbatar kuna da isasshen kaya", "Biyan ma'aikata"], answer: 2, why: "Ƙarewar kaya tana lalata talla." },
      { objective: "O6", q: "Ku auna talla ta hanyar kwatantawa da:", options: ["Makonni iri ɗaya na baya", "Tsammanin abokin hamayya", "Babu komai", "Shekara mai zuwa"], answer: 0, why: "Lokacin kwatantawa yana nuna canjin." },
      { objective: "O6", q: "Idan AI ya rubuta taƙaitawar tallanku, ku:", options: ["Amince da kowace lamba", "Duba lissafinsa da takardarku", "Tsallake karanta shi", "Saka shi a intanet ba tare da karantawa ba"], answer: 1, why: "AI yana iya yin kuskuren lissafi." },
      { objective: "O6", q: "Wanne ne kada ya taɓa shiga kayan AI?", options: ["Sunayen kaya", "Kalmomin sirrin asusun masu kawo kaya", "Jimillar mako-mako", "Sunayen lokuta"], answer: 1, why: "Kalmomin sirri na sirri ne." },
      { objective: "O5", q: "Wace shawara ce wannan kwas ɗin ya bar muku, ba AI ba?", options: ["Waɗanne kaya za a tallata kuma a wane farashi", "Yadda za a rubuta taken hoto", "Shawarwarin haɗin kaya", "Kalmomin alama"], answer: 0, why: "AI yana ba da shawara; ku kuna yanke shawara da lambobinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 3, 6, 7, 10, 12, 13, 14, 16]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Bayanin kaya", objective: "O1", notYet: "Ƙasa da biyar, ko akwai iƙirarin da ba ya kan lakabin.", meets: "Gajerun bayani biyar na gaskiya da aka duba da lakabin.", exceeds: "Kowanne yana faɗin mene ne, na wa ne, da me yasa za su so shi." },
      { name: "Alamun shiryayye", objective: "O2", notYet: "Ƙasa da uku, ko farashin da bai yi daidai da na na'urar karɓar kuɗi ba.", meets: "Alamu uku masu sarari da farashin da ya yi daidai da na na'urar karɓar kuɗi.", exceeds: "Alamun rangwame suna nuna ranar ƙarewa da iyakoki; an duba fassarori." },
      { name: "Takardar kaya", objective: "O3", notYet: "Ƙasa da abubuwa 15, ko babu alamar sake oda da ke aiki.", meets: "Abubuwa 15 ko fiye masu matakin sake oda da alamar REORDER da aka gwada.", exceeds: "Matakan sake oda sun haɗa da kayan ajiya na kariya ga kowane kaya." },
      { name: "Kayan da suka fi sayuwa da masu jinkiri", objective: "O4", notYet: "Babu jerin na sama ko na ƙasa, ko an yi shi da tsammani.", meets: "Uku na sama da uku na ƙasa daga ainihin lambobin sayarwa.", exceeds: "An tabbatar da yanayi ɗaya da AI ya gani a lambobin, tare da shawara ga kaya mai jinkiri." },
      { name: "Shirin talla", objective: "O5", notYet: "Babu kaya, farashi, ranaku ko duba riba.", meets: "Kaya, farashi, riba a kowace sayarwa, ranaku da kayan da ake buƙata.", exceeds: "Yana faɗin yadda za a auna shi idan aka kwatanta da makonni iri ɗaya na baya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu shago da ke sabunta takardar kayansu kowane mako (binciken biyo baya na kwanaki 30)",
      "Masu shago da suka ce kayan da suka fi sayuwa sun rage ƙarewa cikin kwanaki 60",
      "Masu shago da suka yi tallan lokaci kuma suka faɗi sakamakon da suka auna"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai Google Sheets ko Excel (waya tana aiki don bayanin kaya da alamu)",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Lakabin kaya ko takardun sayen kaya, da sayarwar mako 4 zuwa 8 ta kowane kaya daga na'urar karɓar kuɗi ko ƙidaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi masu shago su zo da lakabin kaya ko takardun sayen kaya, da rahoton sayarwa ko ƙidayar mako-mako.",
      "Ku yi misalin matakin sake oda ɗaya tare a allo kafin masu shago su gina takardunsu.",
      "Kada a taɓa liƙa kalmomin sirrin masu kawo kaya, sunayen kwastomomi ko bayanan kati a AI; jimillar kowane kaya ta isa.",
      "Ku tunatar da masu shago cewa su ne, ba AI ba, ke yanke waɗanne kaya za a tallata kuma a wane farashi.",
      "Ku ba da maki ga kayan aikin shagon da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
