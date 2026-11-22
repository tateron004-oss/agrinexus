"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-supply-chain.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "smallbiz-supply-chain-ha",
  lang: "ha",
  translationOf: "smallbiz-supply-chain",
  category: "Small Business",
  name: "Tushen Hanyar Samar da Kaya da Kula da Kaya a Ajiya",
  skills: "Zana hanyar samar da kayanku, Nemo da kwatanta masu sayar da kaya, Yin oda da duba shi, Ƙidaya kaya a ajiya, Kafa matakin sake oda da ƙarin kaya na kariya, Ajiye lissafin kaya a spreadsheet da tsarin na-farko-ya-fara-fita",
  outcome: "zaɓa da kwatanta masu sayar muku da kaya, yin oda da duba shi, ƙidaya kayanku, gane lokacin sake oda da yawan ƙarin kayan da za ku ajiye, da gudanar da lissafin kaya mai sauƙi a spreadsheet da ke bin tsarin na-farko-ya-fara-fita.",
  about: [
    "Idan kayan da kuka fi sayarwa suka ƙare, kuna rasa ciniki da abokan ciniki. Idan kun sayi da yawa, kuɗinku yana kwance a kan shiryayye, kuma wasu kaya suna lalacewa ko su daina burge mutane. Kyawawan halaye wajen samar da kaya da kula da su suna sa ku riƙa samun daidai yawan kayan da suka dace.",
    "Wannan kwas na masu ƙananan sana'o'i ne da ma'aikatansu da ke saye da sayar da kaya ko amfani da kayan aiki: ƙaramin shago, motar sayar da abinci, shagon gyaran gashi, rumfar kayan gona, shagon intanet ko kamfanin share-share. Za ku zana hanyar samar da kayanku, ku nemo ku kwatanta masu sayar da kaya, ku yi oda ku duba shi, ku ƙidaya kaya, ku lissafa matakin sake oda da ƙarin kaya na kariya, kuma ku gina spreadsheet mai sauƙi da ke nuna lokacin sake oda.",
    "Kuna buƙatar alƙalami da takarda kawai, ko spreadsheet kyauta kamar Google Sheets ko Microsoft Excel a intanet. Misalan suna amfani da lambobi masu sauƙi, don haka za ku iya bi ko da lissafi ba abin da kuka fi so ba ne.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin da za ku yi nan take. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina spreadsheet mai sauƙi na kaya guda biyar da kuke saye ko sayarwa, mai ginshiƙai (columns) na: sunan kaya, SKU, babban mai sayarwa, mai sayarwa na ajiya, farashin kowane ɗaya, abin da ke hannu, matsakaicin amfani a rana, lokacin isowa a kwanaki, ƙarin kaya na kariya, matakin sake oda (da aka lissafa da formula) da alamar sake oda. Sannan ku rubuta yadda za ku kiyaye tsarin na-farko-ya-fara-fita a kan shiryayye.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan sana'o'i da manajojinsu da ke saye da sayar da kaya ko amfani da kayan aiki, kamar shaguna, ƙananan shagunan unguwa, gidajen abinci, shagunan gyaran gashi, 'yan kasuwa a kasuwa da masu sayarwa ta intanet. Da yawansu 'yan tsiraru (minority) ne suka mallake su.",
    startingPoint: "Suna sayen kaya da kayan aiki a kai a kai kuma sun san kayan da suka fi sayarwa. Yawancinsu suna yin oda bisa al'ada ko tunawa, ba safai suke ƙidaya kaya bisa jadawali ba, kuma ba su taɓa amfani da matakin sake oda ko lissafin kaya a spreadsheet ba.",
    gap: "Ƙarewar kayan da suka fi sayarwa yana rasa ciniki, kuma sayen da yawa yana kulle kuɗi kuma yana kawo kayan da suka lalace ko ba a sayar ba. Masu koyo suna buƙatar halaye masu sauƙi da spreadsheet da ke faɗa musu abin da za su yi oda, yaushe da yawansa, kuma da ke kama kurakurai da asara.",
    constraints: [
      "Lissafi na asali: ninkawa da formula masu sauƙi a spreadsheet, da bayani mataki-mataki",
      "Na'urori: waya ko kwamfuta mai spreadsheet kyauta kamar Google Sheets ko Excel a intanet",
      "Lokaci: kusan minti 60 gaba ɗaya; ƙidayar kaya kuma mai koyo yana yi a lokacin da ya dace da shi",
      "Haɗarin zamba daga sababbin masu sayarwa da ke neman a tura kuɗi ta banki (wire transfer), katin kyauta (gift card) ko kuɗin intanet (crypto)",
      "Sirri: ba sai an saka farashin masu sayarwa ko bayanan sirri na kasuwanci a kayan AI ba"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da manyan kayanku guda biyar", action: "zana hanyar samar da kayanku da gane wuraren da ke da rauni", standard: "tare da mai sayarwa na ajiya ko ƙarin kaya da aka tsara don kowane wuri mai rauni" },
    { id: "O2", condition: "Idan kuna da kaya ɗaya da kuke saye", action: "kwatanta masu sayarwa uku a kan cikakken farashin isowa, mafi ƙanƙantar oda, lokacin isowa, sharuɗɗan biya da amincinsu", standard: "tare da rubutaccen farashi (quote) daga kowanne da kuma duba alamun gargaɗi" },
    { id: "O3", condition: "Idan kuna da oda da za ku yi", action: "rubuta takardar oda (purchase order) da duba kayan da aka kawo da ita", standard: "tare da rubuta kowace matsala a takardar isarwa da sanar da ita a ranar" },
    { id: "O4", condition: "Idan kuna da kayanku da bayanan ajiyarku", action: "ƙidaya kayanku da gano bambanci da bayananku", standard: "tare da mutum na biyu ya sake ƙidaya kowane abin da bai yi daidai ba" },
    { id: "O5", condition: "Idan kun san amfanin kaya a rana da lokacin isowarsa", action: "lissafa ƙarin kayansa na kariya da matakin sake oda", standard: "kuna samun matakin sake oda daidai da formula" },
    { id: "O6", condition: "Ta amfani da spreadsheet kyauta", action: "gina takardar lissafin kaya da ke nuna kayan da za a sake oda, da tsara yadda za a kiyaye na-farko-ya-fara-fita a kan shiryayye", standard: "tare da matakin sake oda da matsayi (status) da formula ke lissafawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Masu sayarwa da yin oda",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zana hanyar samar da kayanku",
          minutes: 5,
          goal: "Zana hanyar samar da manyan kayanku kuma ku gano inda za ta iya karyewa.",
          text: [
            "Hanyar samar da kaya (supply chain) ita ce kowane mataki da ke kai kaya ga abokin cinikinku: mai yin kayan, duk wani dillalin jumla ko mai rarrabawa, jigila, shiryayyenku ko ɗakin ajiyarku, sannan a ƙarshe abokin ciniki. Ko ƙaramar sana'a ma tana da ita.",
            "Ku fara da manyan kayanku guda biyar: waɗanda ke kawo kuɗi mafi yawa ko waɗanda ba za ku iya aiki ba tare da su ba. Ga kowanne, ku rubuta wurin da kuke saya, yadda yake zuwa gare ku, tsawon lokacin da yake ɗauka, da inda kuke ajiye shi.",
            "Sannan ku nemi wurare masu rauni. Shin kuna sayen wani muhimmin kaya daga mai sayarwa ɗaya kawai? Yana zuwa daga nesa? Yana lalacewa da sauri? Na wani lokaci ne kawai a shekara? Wuri mai rauni shi ne inda ya kamata ku ajiye ƙarin kaya ko ku shirya mai sayarwa na ajiya.",
            "Mataimakin AI zai iya taimaka muku ku yi tunanin abin da zai iya lalacewa ga kowane kaya, kamar mai sayarwa ya rufe, farashi ya tashi ko jigila ta yi jinkiri. Ku ne kuke yanke waɗanne haɗari ne na gaske ga kasuwancinku."
          ],
          steps: ["Ku jera manyan kayanku guda biyar.", "Ga kowanne, ku rubuta mai sayarwa, yadda ake jigilarsa, tsawon lokacin da yake ɗauka da inda kuke ajiye shi.", "Ku zana kibiyoyi: mai sayarwa zuwa jigila zuwa gare ku zuwa abokin ciniki.", "Ku zagaye wurare masu rauni: mai sayarwa ɗaya, nisa, saurin lalacewa, na lokaci-lokaci.", "Ku rubuta gyara ɗaya ga kowane wuri mai rauni."],
          words: [["Hanyar samar da kaya (supply chain)", "dukkan matakan da ke kai kaya daga mai yinsa zuwa abokin cinikinku."], ["Mai sayarwa (supplier)", "kasuwancin da kuke sayen kaya ko kayan aiki daga gare shi."], ["Dillalin jumla ko mai rarrabawa (wholesaler ko distributor)", "kasuwancin da ke saye da yawa daga masu yi kuma yana sayarwa ga wasu kasuwanci."], ["Wuri mai rauni", "matakin da wani abu zai iya lalacewa cikin sauƙi."]],
          slides: [
            { title: "Mene ne hanyar samar da kaya", bullets: ["Mai yi, dillalin jumla, jigila", "Shiryayyenku ko ɗakin ajiyarku", "Abokin cinikinku"] },
            { title: "Ku zana manyan kayanku guda biyar", bullets: ["Wurin da kuke saya", "Yadda yake zuwa gare ku da tsawon lokacin", "Inda kuke ajiye shi"] },
            { title: "Ku nemo wurare masu rauni", bullets: ["Mai sayarwa ɗaya kawai", "Nisa ko jigila mai jinkiri", "Yana lalacewa da sauri ko na lokaci-lokaci ne"] },
            { title: "Ku gyara wurare masu rauni", bullets: ["Ku ajiye ɗan ƙarin kaya", "Ku shirya mai sayarwa na ajiya"] }
          ],
          tryIt: "Ku zana hanyar samar da manyan kayanku guda biyar a shafi ɗaya. Ku zagaye kowane wuri mai rauni ku rubuta gyara ɗaya kusa da shi, kamar nemo mai sayarwa na ajiya ko ajiye ƙarin kaya na mako ɗaya.",
          youCanNow: "zana hanyar samar da mafi muhimmancin kayanku da nuna inda za ta iya karyewa.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne kaya ya kamata ku fara zanawa?", options: ["Manyan kayanku guda biyar da ke kawo kuɗi mafi yawa ko ba za ku iya aiki ba tare da su ba", "Kowane kaya da kuka taɓa sayarwa", "Kayan da ake rangwame kawai", "Kayan da abokan hamayyarku ke sayarwa"], answer: 0, why: "Ku fara da manyan kayanku guda biyar bisa kuɗi ko muhimmanci." },
            { objective: "O1", q: "Babban kayanku yana zuwa daga nesa kuma yana lalacewa da sauri. Me za ku yi?", options: ["Ku ƙyale shi", "Ku sa masa alamar wuri mai rauni ku shirya mai sayarwa na ajiya ko ƙarin kaya", "Ku daina sayar da shi nan take", "Ku bar AI ya yanke waɗanne haɗari ne na gaske"], answer: 1, why: "Wuri mai rauni shi ne inda kuke ajiye ƙarin kaya ko shirya mai sayarwa na ajiya; ku ne kuke yanke waɗanne haɗari ne na gaske." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nemo da kwatanta masu sayarwa",
          minutes: 6,
          goal: "Nemo masu sayarwa uku da za su iya sayar muku da kaya ɗaya, ku kwatanta su ba a farashi kaɗai ba.",
          text: [
            "Wuraren nemo masu sayarwa: masu yin kaya da kamfanoni (ku tambaya wane ne ke rarrabawa a yankinku), dillalan jumla da masu rarrabawa, bajekolin kasuwanci (trade shows), ƙungiyoyin masana'antu, gonaki da masu sana'a na gida, da sauran masu kasuwanci a fannin ku. Ku bincika a intanet da sunan kayan tare da kalmar wholesale ko distributor.",
            "Ku kwatanta ba a farashi kaɗai ba. Ku duba farashin kowane ɗaya, mafi ƙanƙantar oda, lokacin isowa, kuɗin jigila, sharuɗɗan biya, inganci, da yadda za a amince da su. Ku ƙara kuɗin jigila da sauran kuɗaɗe a kan farashin don samun cikakken farashin isowa (landed cost), wato ainihin kuɗin kowane ɗaya idan ya iso gare ku.",
            "Ku nemi rubutaccen farashi (quote) daga kowane mai sayarwa kuma, idan zai yiwu, samfuri. Ku tambayi sauran abokan cinikinsu ko ku duba ra'ayoyin mutane (reviews). Ku riƙe aƙalla mai sayarwa na ajiya ɗaya ga kowane muhimmin kaya.",
            "Ku yi hankali da sababbin masu sayarwa da ke karɓar tura kuɗi ta banki (wire transfer), katin kyauta ko crypto kawai, waɗanda farashinsu ya yi ƙasa sosai fiye da na kowa, ko waɗanda ke gaggauta ku. Ku tabbatar da adireshinsu da lambar wayarsu, kuma ku fara da ƙaramin oda."
          ],
          steps: ["Ku jera masu sayarwa uku da za su iya samar da kaya ɗaya.", "Ku nemi rubutaccen farashi daga kowanne: farashin kowane ɗaya, mafi ƙanƙantar oda, lokacin isowa, jigila da sharuɗɗan biya.", "Ku lissafa cikakken farashin isowa na kowane ɗaya ga kowannensu.", "Ku nemi samfuri ku duba ra'ayoyin mutane ko masu ba da shaida.", "Ku zaɓi babban mai sayarwa da na ajiya."],
          words: [["Mafi ƙanƙantar oda (MOQ)", "oda mafi ƙanƙanta da mai sayarwa zai karɓa."], ["Lokacin isowa (lead time)", "lokacin daga yin oda har kayan su kasance a hannunku."], ["Cikakken farashin isowa (landed cost)", "dukkan kuɗin kowane ɗaya idan ya iso gare ku: farashi da jigila da sauran kuɗaɗe."], ["Sharuɗɗan biya (payment terms)", "lokacin da dole ku biya, misali Net 30 yana nufin cikin kwanaki 30."], ["Rubutaccen farashi (quote)", "tayin farashi a rubuce daga mai sayarwa."]],
          slides: [
            { title: "Inda za a nemo masu sayarwa", bullets: ["Masu yi, dillalan jumla da masu rarrabawa", "Bajekolin kasuwanci da ƙungiyoyin masana'antu", "Masu sana'a na gida da sauran masu kasuwanci"] },
            { title: "Ku kwatanta ba a farashi kaɗai ba", bullets: ["Farashin kowane ɗaya da mafi ƙanƙantar oda", "Lokacin isowa da jigila", "Sharuɗɗan biya, inganci, amincewa"] },
            { title: "Cikakken farashin isowa", bullets: ["Farashi + jigila + sauran kuɗaɗe", "Ku raba da yawan kayan", "Ainihin kuɗin kowane ɗaya"] },
            { title: "Ku kasance lafiya", bullets: ["Ku nemi rubutaccen farashi da samfuri", "Ku riƙe mai sayarwa na ajiya", "Ku guji tura-kuɗi-kawai, arha-fiye-da-kima, ko gaggawa"] }
          ],
          tryIt: "Ku zaɓi kaya ɗaya da kuke saye. Ku nemo masu sayarwa uku ku cike ƙaramin tebur: farashin kowane ɗaya, mafi ƙanƙantar oda, lokacin isowa, jigila, sharuɗɗan biya da cikakken farashin isowa na kowane ɗaya. Ku zagaye babban zaɓinku da na ajiya. Misali: kaya 100 a $2.00 kowanne tare da jigila $30 yana nufin cikakken farashin isowa $2.30 kowanne.",
          youCanNow: "nemo masu sayarwa, kwatanta su a kan cikakken farashin isowa, lokacin isowa, sharuɗɗa da amincewa, da zaɓar babban mai sayarwa da na ajiya.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne wuri mai kyau don nemo masu sayarwa?", options: ["Tallar kafar sada zumunta da ke alƙawarin kaya kyauta", "Shafin intanet mafi arha da kuka samu kawai", "Bajekolin kasuwanci da ƙungiyoyin masana'antu", "Imel daga baƙi da ke neman katin kyauta"], answer: 2, why: "Bajekolin kasuwanci, ƙungiyoyi, dillalan jumla da sauran masu kasuwanci wurare ne masu kyau na nemo masu sayarwa." },
            { objective: "O2", q: "Sabon mai sayarwa yana da farashi mai kyau sosai. Me za ku yi kafin babban oda?", options: ["Ku yi odar kayan shekara guda don ku riƙe farashin", "Ku biya ta tura kuɗi ta banki nan take", "Ku tsallake neman farashi a rubuce don ku ajiye lokaci", "Ku nemi rubutaccen farashi da samfuri, ku tabbatar da adireshinsu da wayarsu, ku fara da kaɗan"], answer: 3, why: "Ku nemi rubutaccen farashi da samfuri, ku bincike su, kuma ku fara da ƙaramin oda." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin oda da duba shi",
          minutes: 5,
          goal: "Rubuta takardar oda mai sarari kuma ku duba kayan da aka kawo da ita.",
          text: [
            "Takardar oda (purchase order ko PO) ita ce odarku a rubuce ga mai sayarwa. Tana hana rikicewa. Tana ɗauke da lambar PO, kwanan wata, mai sayarwa, kowane kaya da lambarsa, yawa, farashi, ranar kawowa da adireshi, da sharuɗɗan biya.",
            "Idan kayan sun iso, ku duba su kafin ku sa hannu ko ku ajiye su. Ku ƙidaya akwatuna da kayan, ku duba cewa kayan da girmansu sun yi daidai da PO, ku nemi lalacewa, kuma ku duba ranar ƙarewar amfani (expiration date) a kan abinci ko wasu kayan da ke lalacewa.",
            "Ku rubuta duk wata matsala a takardar isarwa (delivery slip) kuma ku sanar da mai sayarwa a ranar, tare da hotuna. Kada ku biya abin da ba ku karɓa ba.",
            "Ku ajiye kowane PO tare da takardar isarwarsa da takardar kuɗinsa (invoice). Daidaita waɗannan uku kafin ku biya ana kiransa daidaitawa ta hanyoyi uku (three-way match), kuma yana kama kurakurai da cajin da ya wuce kima."
          ],
          steps: ["Ku rubuta PO mai lamba, kwanan wata, mai sayarwa, kaya, yawa, farashi, ranar kawowa da sharuɗɗa.", "Idan kayan sun iso, ku ƙidaya su ku kwatanta da PO.", "Ku duba lalacewa da ranar ƙarewar amfani.", "Ku rubuta matsaloli a takardar isarwa, ku ɗauki hotuna ku sanar da mai sayarwa a ranar.", "Kafin ku biya, ku daidaita PO, takardar isarwa da takardar kuɗi."],
          words: [["Takardar oda (purchase order, PO)", "odarku a rubuce ga mai sayarwa."], ["Takardar isarwa (delivery slip)", "takardar da ke zuwa tare da kaya, mai jerin abin da aka aiko."], ["Takardar kuɗi (invoice)", "lissafin kuɗin da mai sayarwa ke nema ku biya."], ["Daidaitawa ta hanyoyi uku (three-way match)", "duba cewa PO, takardar isarwa da takardar kuɗi sun yi daidai kafin a biya."]],
          slides: [
            { title: "Takardar oda mai sarari", bullets: ["Lambar PO, kwanan wata da mai sayarwa", "Kaya, lambobinsu, yawa da farashi", "Ranar kawowa, adireshi da sharuɗɗa"] },
            { title: "Ku duba kowane kaya da ya iso", bullets: ["Ku ƙidaya akwatuna da kayan", "Ku daidaita kaya da girma da PO", "Ku duba lalacewa da ranar ƙarewar amfani"] },
            { title: "Akwai matsala?", bullets: ["Ku rubuta ta a takardar isarwa", "Hotuna, kuma ku sanar da mai sayarwa a ranar", "Kada ku biya abin da ba ku samu ba"] },
            { title: "Daidaitawa ta hanyoyi uku", bullets: ["PO + takardar isarwa + takardar kuɗi", "Ku daidaita su kafin ku biya"] }
          ],
          tryIt: "Ku rubuta misalin takardar oda ga kaya ɗaya daga teburin masu sayarwanku, mai dukkan sassan wannan darasi. Sannan ku rubuta jerin dubawa mai layi biyar da za ku yi amfani da shi idan kaya sun iso a gaba.",
          youCanNow: "rubuta takardar oda mai sarari, duba kayan da aka kawo da ita, da daidaita takardu kafin ku biya.",
          quickCheck: [
            { objective: "O3", q: "Wanne ne ya kamata ya kasance a takardar oda?", options: ["Kowane kaya da lambarsa, yawa da farashi", "Sunayen abokan cinikinku", "Kalmar sirrin bankinku", "Burin sayarwarku"], answer: 0, why: "PO tana ɗauke da lambar PO, kwanan wata, mai sayarwa, kaya da lambobinsu, yawa, farashi, kawowa da sharuɗɗa." },
            { objective: "O3", q: "Akwatin yogot (yogurt) ya iso amma ranar ƙarewar amfaninsa ta wuce. Me za ku yi?", options: ["Ku saka shi a shiryayye da sauri", "Ku rubuta a takardar isarwa, ku ɗauki hotuna, ku sanar da mai sayarwa a ranar kuma kada ku biya shi", "Ku sa hannu a takardar ku yi ƙara wata mai zuwa", "Ku zubar da shi ba tare da faɗin komai ba"], answer: 1, why: "Ku duba ranaku kafin sa hannu, ku rubuta matsaloli a takarda, kuma kada ku biya abin da ba ku karɓa daidai ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Masu sayarwa da yin oda",
        questions: [
          { objective: "O1", q: "Kuna sayen kayan da kuka fi sayarwa daga mai sayarwa ɗaya kawai. Mene ne haɗarin?", options: ["Babu ko kaɗan", "Idan wannan mai sayarwa ya sami matsala, kayanku za su ƙare", "Farashinku zai riƙa sauka koyaushe", "Abokan ciniki za su ƙara saye"], answer: 1, why: "Mai sayarwa ɗaya wuri ne mai rauni; mai sayarwa na ajiya yana kare ku." },
          { objective: "O2", q: "Mene ne lokacin isowa (lead time)?", options: ["Lokacin daga yin oda har kayan su kasance a hannunku", "Lokacin da abokin ciniki ke jira a layi", "Tsawon lokacin da kaya ke ɗauka a kan shiryayye", "Lokutan aikin mai sayarwa"], answer: 0, why: "Lokacin isowa shi ne tsawon lokacin da oda ke ɗauka kafin ya iso." },
          { objective: "O2", q: "Mai sayarwa A yana sayar da kaya 100 a $200 tare da jigila $50. Mene ne cikakken farashin isowa na kowane ɗaya?", options: ["$2.00", "$2.25", "$0.50", "$2.50"], answer: 3, why: "$200 da $50 su ne $250; a raba da kaya 100 ya zama $2.50 kowanne." },
          { objective: "O2", q: "Sabon mai sayarwa yana da farashi mai arha sosai kuma yana karɓar katin kyauta kawai. Me za ku yi?", options: ["Ku yi oda mai yawa nan take", "Ku biya da katin kyauta", "Ku yi hankali: ku bincike su kuma ku guji wannan hanyar biya", "Ku aika bayanan shiga bankinku"], answer: 2, why: "Biya da katin kyauta kawai da farashi mai arha fiye da kima alamun gargaɗin zamba ne." },
          { objective: "O3", q: "Kayan da aka kawo sun rasa akwatuna biyu. Me ya kamata ku yi?", options: ["Ku sa hannu ba tare da faɗin komai ba", "Ku biya komai duk da haka", "Ku zubar da takardar isarwa", "Ku rubuta a takardar isarwa, ku ɗauki hotuna ku sanar da mai sayarwa a ranar"], answer: 3, why: "Rubuta matsaloli nan take yana sa ku sami abin da kuka biya." }
        ]
      }
    },
    {
      name: "Babi na 2: Kula da kaya a ajiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ƙidaya kayanku",
          minutes: 5,
          goal: "Ƙidaya kayanku daidai kuma ku gano bambanci da bayananku.",
          text: [
            "Kaya a ajiya (inventory) su ne kaya da kayan aikin da kuke da su a hannu. Bayananku suna faɗin yawan da ya kamata ku samu; ƙidaya kuma tana nuna ainihin yawan da kuke da shi. Ana yawan kiran bambancin raguwa (shrinkage): asara daga sata, lalacewa, ruɓewa ko kurakurai.",
            "Cikakkiyar ƙidaya tana nufin ƙidaya komai, sau da yawa sau ɗaya ko biyu a shekara, lokacin da kasuwancin ke rufe. Ƙidaya bi-da-bi (cycle count) tana nufin ƙidaya 'yan kaya kaɗan kowane mako, ta yadda a hankali za a ƙidaya kowane kaya. Ku fi ƙidaya kayan da suka fi tsada ko waɗanda suka fi saurin sayarwa.",
            "Don ƙidaya da kyau: ku ba kowane kaya SKU (gajeriyar lamba), ku ƙidaya da irin ma'aunin da kuke saye da sayarwa da shi, ku ƙidaya shiryayye bayan shiryayye, kuma mutum na biyu ya sake ƙidaya duk abin da bai yi daidai ba. Ku rubuta adadin, kwanan wata da wanda ya ƙidaya.",
            "Sannan ku kwatanta ƙidayarku da bayananku. Ku gano dalilin manyan bambance-bambance, kuma ku gyara bayananku su yi daidai da ainihin ƙidayar."
          ],
          steps: ["Ku ba kowane kaya SKU da ma'auni, kamar ɗaya-ɗaya, akwati ko fam (pound).", "Ku zaɓi cikakkiyar ƙidaya ko ƙidaya bi-da-bi kowane mako.", "Ku ƙidaya shiryayye bayan shiryayye ku rubuta adadi, kwanan wata da wanda ya ƙidaya.", "Mutum na biyu ya sake ƙidaya duk abin da bai yi daidai ba.", "Ku kwatanta da bayananku, ku gano dalilan manyan bambance-bambance ku sabunta bayanan."],
          words: [["Kaya a ajiya (inventory)", "kaya da kayan aikin da kuke da su a hannu."], ["SKU", "stock keeping unit: gajeriyar lamba ga kowane kaya da kuke ajiyewa."], ["Ƙidaya bi-da-bi (cycle count)", "ƙidaya 'yan kaya kaɗan a lokaci ɗaya bisa jadawali na yau da kullum."], ["Raguwa (shrinkage)", "kayan da aka rasa ta sata, lalacewa, ruɓewa ko kurakurai."]],
          slides: [
            { title: "Bayanai da gaskiya", bullets: ["Bayanai: abin da ya kamata ku samu", "Ƙidaya: abin da kuke da shi a gaske", "Bambancin shi ne raguwa (shrinkage)"] },
            { title: "Hanyoyi biyu na ƙidaya", bullets: ["Cikakkiyar ƙidaya: komai, sau ɗaya ko biyu a shekara", "Ƙidaya bi-da-bi: 'yan kaya kowane mako", "Ku fi ƙidaya kaya masu tsada da masu saurin sayarwa"] },
            { title: "Ku ƙidaya da kyau", bullets: ["SKU da ma'auni ga kowane kaya", "Shiryayye bayan shiryayye; rubuta kwanan wata da mai ƙidaya", "Ku sake ƙidaya duk abin da bai yi daidai ba"] },
            { title: "Bayan ƙidaya", bullets: ["Ku kwatanta da bayananku", "Ku gano dalilan manyan bambance-bambance", "Ku sabunta bayanan"] }
          ],
          tryIt: "Ku zaɓi kaya guda biyar. Ku ba kowanne SKU da ma'auni. Ku ƙidaya su yanzu ku rubuta adadin, kwanan wata da sunanku. Idan kuna da bayanai, ku kwatanta ku rubuta bambancin kowanne.",
          youCanNow: "ƙidaya kayanku daidai, yin ƙidaya bi-da-bi da gano raguwa ta hanyar kwatanta ƙidaya da bayanai.",
          quickCheck: [
            { objective: "O4", q: "Mene ne cikakkiyar ƙidaya?", options: ["Ƙidaya shiryayye ɗaya", "Ƙidaya kaya masu tsada kawai", "Ƙidaya komai, sau da yawa sau ɗaya ko biyu a shekara", "Yin hasashe daga sayarwa"], answer: 2, why: "Cikakkiyar ƙidaya tana nufin ƙidaya komai, sau da yawa sau ɗaya ko biyu a shekara." },
            { objective: "O4", q: "Kun sami babban bambanci tsakanin ƙidayarku da bayananku. Me za ku yi bayan sake ƙidaya?", options: ["Ku canja ƙidayar ta yi daidai da bayanan", "Ku ƙyale shi", "Ku goge kayan", "Ku gano dalilin da ya faru ku gyara bayananku su yi daidai da ainihin ƙidayar"], answer: 3, why: "Ku gano dalilin manyan bambance-bambance ku gyara bayananku su yi daidai da ainihin ƙidaya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Matakin sake oda da ƙarin kaya na kariya",
          minutes: 6,
          goal: "Lissafa lokacin da za ku sake odar kaya da yawan ƙarin kayan da za ku ajiye.",
          text: [
            "Matakin sake oda (reorder point) shi ne yawan kayan da ke gaya muku ku sake oda. Idan kun yi oda lokacin da kuka kai shi, sababbin kaya za su iso kafin naku su ƙare.",
            "Matakin sake oda = matsakaicin amfani a rana x lokacin isowa a kwanaki + ƙarin kaya na kariya. Misali: kuna sayar da buhunan shinkafa 10 a rana, kuma mai sayarwarku yana ɗaukar kwanaki 4 kafin ya kawo. Ba tare da wani ƙari ba kuna buƙatar 10 x 4 = buhu 40 da za su isa har odar ta iso.",
            "Ƙarin kaya na kariya (safety stock) ƙarin kaya ne don abubuwan ba-zata: rana mai cunkoso ko motar da ta yi jinkiri. Hanya mai sauƙi: ku yanke kwanaki nawa na ƙari za ku rufe, ku ninka da amfanin rana. Da ƙarin kwanaki 2, ƙarin kaya na kariya shi ne 10 x 2 = buhu 20. Don haka matakin sake oda shi ne 40 + 20 = buhu 60. Idan kun sauko zuwa 60, ku yi oda.",
            "Ku ajiye ƙarin kaya na kariya da yawa ga kayan da suka fi muhimmanci, kayan da lokacin isowarsu ya yi tsawo ko ba a iya dogara da shi, da kayan da kuke saya daga mai sayarwa ɗaya. Ku ajiye kaɗan ga kayan da ke lalacewa da sauri ko waɗanda ajiyarsu ke da tsada. Ku duba lambobin bayan 'yan watanni, domin sayarwa da lokutan isowa suna canjawa."
          ],
          steps: ["Ku nemo matsakaicin amfani a rana: yawan da aka yi amfani da shi a kwanaki 30 a raba da 30.", "Ku nemo lokacin isowa a kwanaki daga mai sayarwarku.", "Ku zaɓi ƙarin kwanakin da za ku rufe ku ninka da amfanin rana: wannan shi ne ƙarin kaya na kariya.", "Matakin sake oda = amfanin rana x lokacin isowa + ƙarin kaya na kariya.", "Ku sake duba lambobin bayan 'yan watanni."],
          words: [["Matakin sake oda (reorder point)", "yawan kayan da ke gaya muku ku sake oda."], ["Ƙarin kaya na kariya (safety stock)", "ƙarin kayan da ake ajiyewa don abubuwan ba-zata kamar ranaku masu cunkoso ko jinkirin kawowa."], ["Matsakaicin amfani a rana", "yawan kayan da kuke amfani da su ko sayarwa a rana ta yau da kullum."]],
          slides: [
            { title: "Matakin sake oda", bullets: ["Yawan da ke gaya muku ku yi oda", "Sababbin kaya suna isowa kafin naku su ƙare"] },
            { title: "Formula", bullets: ["Amfanin rana x lokacin isowa + ƙarin kaya na kariya"] },
            { title: "Misali da aka warware", bullets: ["Buhu 10 a rana, lokacin isowa kwanaki 4: buhu 40", "Ƙarin kaya na kariya, ƙarin kwanaki 2: buhu 20", "Matakin sake oda: buhu 60"] },
            { title: "Yawan ƙarin kaya na kariya", bullets: ["Da yawa: manyan kaya, masu sayarwa masu jinkiri ko marasa tabbas", "Kaɗan: kayan da ke lalacewa ko masu tsadar ajiya", "Ku sake duba bayan 'yan watanni"] }
          ],
          tryIt: "Ga kaya ɗaya, ku nemo matsakaicin amfaninsa a rana da lokacin isowarsa. Ku zaɓi ƙarin kwanakin rufewa. Ku lissafa ƙarin kaya na kariya da matakin sake oda, ku rubuta su a kati da za ku ajiye kusa da wannan kaya.",
          youCanNow: "lissafa matakin sake oda da ƙarin kaya na kariya ga kaya, da sanin lokacin da za ku ajiye ƙari da yawa ko kaɗan.",
          quickCheck: [
            { objective: "O5", q: "Kuna amfani da kaya 6 a rana kuma kuna son ƙarin kwanaki 3 na rufewa. Mene ne ƙarin kaya na kariya?", options: ["18", "9", "3", "63"], answer: 0, why: "Ƙarin kaya na kariya shi ne ƙarin kwanaki sau amfanin rana: 3 x 6 = 18." },
            { objective: "O5", q: "Lokacin isowar mai sayarwarku ya ƙaru daga kwanaki 4 zuwa kwanaki 8. Me za ku yi?", options: ["Ku riƙe matakin sake oda iri ɗaya", "Ku sake lissafa matakin sake oda da sabon lokacin isowa", "Ku daina amfani da ƙarin kaya na kariya", "Ku yi oda ne kawai idan kaya sun ƙare"], answer: 1, why: "Ku duba lambobin idan lokutan isowa sun canja, domin matakin sake oda ya dogara da su." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lissafin kaya a spreadsheet da na-farko-ya-fara-fita",
          minutes: 6,
          goal: "Gina spreadsheet da ke nuna kayan da za a sake oda kuma ku riƙa fitar da kaya bisa na-farko-ya-fara-fita.",
          text: [
            "Spreadsheet kyauta, kamar Google Sheets ko Microsoft Excel a intanet, zai iya gudanar da lissafin kayan ƙaramar sana'a. Ku yi layi (row) ɗaya ga kowane kaya da waɗannan ginshiƙai: Item (kaya), SKU, Main supplier (babban mai sayarwa), Backup supplier (mai sayarwa na ajiya), Unit cost (farashin kowane ɗaya), On hand (abin da ke hannu), Daily use (amfanin rana), Lead time (days) (lokacin isowa a kwanaki), Safety stock (ƙarin kaya na kariya), Reorder point (matakin sake oda) da Status (matsayi).",
            "Ku bar spreadsheet ya yi lissafin. Idan Daily use yana ginshiƙi G, Lead time a H kuma Safety stock a I, matakin sake oda a J2 shi ne =G2*H2+I2. Matsayi a K2 zai iya zama =IF(F2<=J2,\"REORDER\",\"OK\"), wanda ke nuna REORDER (sake oda) idan abin da ke hannu (ginshiƙi F) ya kai ko ya gaza matakin sake oda. Ku kwafi formula zuwa ƙasa. Ku sabunta On hand bayan kowace ƙidaya ko kowane kaya da ya iso.",
            "Na-farko-ya-fara-fita (first-in-first-out, FIFO) yana nufin ku sayar ko ku yi amfani da tsofaffin kaya da farko. Yana hana abinci da sauran kaya su wuce ranar ƙarewar amfaninsu a bayan shiryayye. Idan sababbin kaya sun iso, ku saka su a bayan tsofaffi ko a ƙarƙashinsu, kuma ku rubuta ranar da aka karɓa a jikin akwatuna.",
            "Mataimakin AI zai iya taimaka muku rubuta ko gyara formula a spreadsheet. Ku bayyana ginshiƙanku da kalmomi; ba sai kun raba farashin masu sayarwanku ko wasu bayanan sirri na kasuwanci ba."
          ],
          steps: ["Ku buɗe spreadsheet kyauta ku ƙara taken ginshiƙai goma sha ɗaya.", "Ku cike kaya guda biyar.", "A ginshiƙin Reorder point, ku shigar da =G2*H2+I2 ku kwafe shi zuwa ƙasa.", "A ginshiƙin Status, ku shigar da =IF(F2<=J2,\"REORDER\",\"OK\") ku kwafe shi zuwa ƙasa.", "Ku sabunta On hand bayan kowace ƙidaya ko kowane kaya da ya iso.", "A kan shiryayye, ku saka sababbin kaya a bayan tsofaffi kuma ku rubuta kwanan wata a kowane akwati."],
          words: [["Spreadsheet", "jadawalin layuka da ginshiƙai da zai iya yi muku lissafi."], ["Formula", "umarni a cikin akwatin spreadsheet (cell) da ke lissafa sakamako, yana farawa da =."], ["Na-farko-ya-fara-fita (FIFO)", "amfani ko sayar da tsofaffin kaya da farko."]],
          slides: [
            { title: "Layi ɗaya ga kowane kaya", bullets: ["Kaya, SKU, babban mai sayarwa da na ajiya", "Farashin kowane ɗaya, abin da ke hannu, amfanin rana, lokacin isowa", "Ƙarin kaya na kariya, matakin sake oda, matsayi"] },
            { title: "Ku bar formula su yi aiki", bullets: ["Matakin sake oda: =G2*H2+I2", "Matsayi: =IF(F2<=J2,\"REORDER\",\"OK\")", "Ku kwafe zuwa ƙasa; ku sabunta abin da ke hannu bayan ƙidaya"] },
            { title: "Na-farko-ya-fara-fita", bullets: ["Ku sayar ko ku yi amfani da tsofaffin kaya da farko", "Sababbin kaya suna zuwa a baya ko ƙarƙashin tsofaffi", "Ku rubuta kwanan wata a kowane akwati"] },
            { title: "AI zai iya taimakawa da formula", bullets: ["Ku bayyana ginshiƙanku da kalmomi", "Ba sai kun raba farashi ko bayanan sirri ba"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina spreadsheet ɗin lissafin kayanku na kaya guda biyar da dukkan ginshiƙai goma sha ɗaya, formula na matakin sake oda da alamar REORDER. Sannan ku rubuta jimloli biyu kan yadda za ku kiyaye na-farko-ya-fara-fita a kan shiryayyenku.",
          youCanNow: "gudanar da lissafin kaya mai sauƙi a spreadsheet da ke nuna lokacin sake oda, da riƙa fitar da kaya bisa na-farko-ya-fara-fita.",
          quickCheck: [
            { objective: "O6", q: "A takardar wannan darasi, me =G2*H2+I2 ke lissafawa?", options: ["Farashin kowane ɗaya", "Matsayi", "Matakin sake oda", "Yawan masu sayarwa"], answer: 2, why: "Amfanin rana sau lokacin isowa da ƙarin kaya na kariya yana ba da matakin sake oda." },
            { objective: "O6", q: "Kuna son AI ya taimaka muku gyara formula a spreadsheet. Me za ku raba?", options: ["Farashin masu sayarwanku da bayanan bankinku", "Dukkan jerin abokan cinikinku", "Kalmar sirrin shigarku", "Bayanin ginshiƙanku da kalmomi"], answer: 3, why: "Ku bayyana ginshiƙanku; ba sai kun raba farashi ko bayanan sirri na kasuwanci ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kula da kaya a ajiya",
        questions: [
          { objective: "O4", q: "Ƙidaya 'yan kaya kaɗan kowane mako ta yadda a hankali za a ƙidaya kowane kaya ana kiransa:", options: ["Cikakkiyar ƙidaya", "Raguwa (shrinkage)", "Ƙidaya bi-da-bi (cycle count)", "Takardar oda"], answer: 2, why: "Ƙidaya bi-da-bi tana raba ƙidaya cikin shekara." },
          { objective: "O5", q: "Kuna amfani da kaya 5 a rana, lokacin isowa kwanaki 6 ne, ƙarin kaya na kariya kuma 10. Mene ne matakin sake oda?", options: ["30", "40", "11", "16"], answer: 1, why: "5 x 6 = 30, da ƙarin kaya na kariya 10 = 40." },
          { objective: "O5", q: "Wane kaya ne yawanci ya kamata ya sami ƙarin kaya na kariya da yawa?", options: ["Babban kaya daga mai sayarwa ɗaya mai jinkiri marar tabbas", "Kayan da ke lalacewa cikin kwana ɗaya", "Kayan da ba ku sake sayarwa", "Kaya mai tsada sosai da ake sayarwa sau ɗaya a shekara"], answer: 0, why: "Muhimman kaya masu haɗarin samarwa suna buƙatar ƙarin kariya." },
          { objective: "O6", q: "A spreadsheet, abin da ke hannu 25 ne kuma matakin sake oda 30. Me matsayi zai nuna?", options: ["OK", "Kuskure (Error)", "Babu komai", "REORDER"], answer: 3, why: "Abin da ke hannu ya kai ko ya gaza matakin sake oda, don haka formula tana nuna REORDER." },
          { objective: "O6", q: "Sabon madara ya iso. Bisa FIFO, a ina za ku saka shi?", options: ["A gaban tsohon madara", "A bayan tsohon madara", "A cikin kwandon shara", "A saman tsohon madara don ya fara sayarwa"], answer: 1, why: "FIFO tana saka sababbin kaya a bayan tsofaffi don tsofaffin su fara sayarwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Hanyar Samar da Kaya da Kula da Kaya a Ajiya",
    questions: [
      { objective: "O1", q: "Mene ne hanyar samar da kaya (supply chain)?", options: ["Dukkan matakan da ke kai kaya daga mai yinsa zuwa abokin cinikinku", "Sarƙar da ke kulle ɗakin ajiyarku", "Jerin abokan ciniki", "Wani nau'in bashi"], answer: 0, why: "Hanyar samar da kaya ta ƙunshi kowane mataki daga mai yi zuwa abokin ciniki." },
      { objective: "O1", q: "Wanne ne wuri mai rauni a hanyar samar da kaya?", options: ["Masu sayarwa biyu amintattu", "Muhimmin kaya daga mai sayarwa ɗaya kawai", "Gajeren lokacin isowa", "Ƙidaya daidai"], answer: 1, why: "Dogaro da mai sayarwa ɗaya yana da haɗari." },
      { objective: "O1", q: "Mene ne gyara mai kyau ga wuri mai rauni?", options: ["Ku ƙyale shi", "Ku ƙara farashi", "Ku shirya mai sayarwa na ajiya ko ku ajiye ƙarin kaya", "Ku daina ƙidaya"], answer: 2, why: "Mai sayarwa na ajiya da ƙarin kaya suna kare ku daga karyewa." },
      { objective: "O2", q: "Mafi ƙanƙantar oda (MOQ) shi ne:", options: ["Mafi yawan abin da za ku iya saya", "Lokacin da oda ke ɗauka", "Adireshin mai sayarwa", "Oda mafi ƙanƙanta da mai sayarwa zai karɓa"], answer: 3, why: "MOQ ita ce oda mafi ƙanƙanta da mai sayarwa ke karɓa." },
      { objective: "O2", q: "Mene ne cikakken farashin isowa (landed cost)?", options: ["Farashi da jigila da sauran kuɗaɗe, ga kowane ɗaya", "Farashin da ke shafin intanet kawai", "Kuɗin tikitin jirgin sama", "Kuɗin hayarku"], answer: 0, why: "Cikakken farashin isowa shi ne ainihin kuɗin kowane ɗaya idan ya iso gare ku." },
      { objective: "O2", q: "Sharuɗɗan biya na Net 30 suna nufin:", options: ["Ku biya kashi 30% yanzu", "Ku biya cikin kwanaki 30", "Ku biya bayan oda 30", "Ku biya $30"], answer: 1, why: "Net 30 yana nufin dukkan kuɗin dole a biya cikin kwanaki 30." },
      { objective: "O2", q: "Kafin ku zaɓi sabon mai sayarwa, hikima ce ku:", options: ["Biya kuɗin shekara guda gaba ɗaya tun farko", "Aika bayanan shiga bankinku", "Nemi rubutaccen farashi da samfuri, kuma ku fara da kaɗan", "Biya da katin kyauta"], answer: 2, why: "Rubutaccen farashi, samfuri da ƙananan odar farko suna rage haɗarinku." },
      { objective: "O3", q: "Mene ne takardar oda (purchase order)?", options: ["Takardar kuɗin mai sayarwa", "Rasidin abokin ciniki", "Motar kawo kaya", "Odarku a rubuce ga mai sayarwa"], answer: 3, why: "PO ita ce odarku a rubuce mai jerin kaya, yawa da farashi." },
      { objective: "O3", q: "Daidaitawa ta hanyoyi uku (three-way match) tana kwatanta:", options: ["PO, takardar isarwa da takardar kuɗi", "Tambarin masu sayarwa uku", "Jadawalin aikin ma'aikata uku", "Asusun banki uku"], answer: 0, why: "Daidaita waɗannan uku yana kama kurakurai kafin ku biya." },
      { objective: "O3", q: "Idan kaya sun iso, ya kamata ku fara:", options: ["Biyan takardar kuɗi", "Ƙidaya su da duba su da PO", "Zubar da takardar isarwa", "Saka su kai tsaye a shiryayye ba tare da dubawa ba"], answer: 1, why: "Dubawa da farko yana kama kayan da suka ɓace ko suka lalace." },
      { objective: "O4", q: "Mene ne raguwa (shrinkage)?", options: ["Ƙaramin kwali", "Farashi mai ƙasa", "Kayan da aka rasa ta sata, lalacewa, ruɓewa ko kurakurai", "Rangwame"], answer: 2, why: "Raguwa ita ce bambanci tsakanin bayanai da ainihin kaya." },
      { objective: "O4", q: "Mene ne SKU?", options: ["Sunan mai sayarwa", "Wani nau'in shiryayye", "Kamfanin jigila", "Gajeriyar lamba ga kowane kaya da kuke ajiyewa"], answer: 3, why: "SKU yana nufin stock keeping unit (lambar kayan ajiya)." },
      { objective: "O4", q: "Ƙidayarku ba ta yi daidai da bayananku ba ga kaya ɗaya. Me za ku yi?", options: ["Mutum na biyu ya sake ƙidaya shi", "Ku ƙyale shi", "Ku canja bayanan ba tare da dubawa ba", "Ku zubar da kayan"], answer: 0, why: "Sake ƙidaya yana tabbatar da ainihin adadi kafin ku sabunta bayanai." },
      { objective: "O5", q: "Formula ta matakin sake oda ita ce:", options: ["Farashi x yawa", "Amfanin rana x lokacin isowa + ƙarin kaya na kariya", "Abin da ke hannu - sayarwa", "Ƙarin kaya na kariya x 10"], answer: 1, why: "Tana rufe amfani a lokacin isowa tare da ƙarin kariya." },
      { objective: "O5", q: "Kuna sayar da kaya 8 a rana, lokacin isowa kwanaki 5, ƙarin kaya na kariya 16. Matakin sake oda?", options: ["40", "13", "56", "21"], answer: 2, why: "8 x 5 = 40, da 16 = 56." },
      { objective: "O5", q: "Ƙarin kaya na kariya (safety stock) shi ne:", options: ["Kayan da aka kulle a cikin sef", "Kayan da ba ku taɓa sayarwa", "Tsofaffin kaya", "Ƙarin kayan da ake ajiyewa don abubuwan ba-zata kamar jinkirin kawowa"], answer: 3, why: "Ƙarin kaya na kariya yana rufe ranaku masu cunkoso da jinkiri." },
      { objective: "O5", q: "An yi amfani da kaya 300 a kwanaki 30 da suka wuce. Mene ne matsakaicin amfani a rana?", options: ["10", "30", "300", "9,000"], answer: 0, why: "300 a raba da kwanaki 30 ya zama 10 a rana." },
      { objective: "O6", q: "A spreadsheet, formula tana farawa da:", options: ["#", "=", "@", "$"], answer: 1, why: "Formula a spreadsheet tana farawa da alamar daidai (=)." },
      { objective: "O6", q: "Mene ne ma'anar na-farko-ya-fara-fita?", options: ["Ku sayar da sababbin kaya da farko", "Ku yi oda daga mai sayarwa na farko da kuka samu", "Ku sayar ko ku yi amfani da tsofaffin kaya da farko", "Ku ƙidaya shiryayye na farko kawai"], answer: 2, why: "FIFO tana hana tsofaffin kaya wuce ranar ƙarewar amfaninsu." },
      { objective: "O6", q: "Ta yaya za ku sauƙaƙa FIFO a kan shiryayye?", options: ["Ku saka sababbin kaya a gaba", "Ku haɗa dukkan akwatuna wuri ɗaya", "Ku cire alamomi", "Ku rubuta kwanan wata a akwatuna ku saka sababbin kaya a bayan tsofaffi"], answer: 3, why: "Alamomi da wurin ajiyewa suna sauƙaƙa ɗaukar tsofaffin kaya da farko." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      4,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Kaya da masu sayarwa",
        objective: "O2",
        notYet: "Wasu kaya ba su da SKU, farashin kowane ɗaya ko babban mai sayarwa.",
        meets: "Kaya guda biyar, kowanne da SKU, babban mai sayarwa, mai sayarwa na ajiya da farashin kowane ɗaya.",
        exceeds: "Farashin kowane ɗaya shi ne cikakken farashin isowa, har da jigila da sauran kuɗaɗe."
      },
      {
        name: "Lambobin kaya da amfani",
        objective: "O4",
        notYet: "Abin da ke hannu, amfanin rana ko lokacin isowa hasashe ne ko babu.",
        meets: "Abin da ke hannu ya fito daga ƙidaya ta gaske, tare da cike amfanin rana da lokacin isowa.",
        exceeds: "Ya rubuta ranar ƙidaya da wanda ya ƙidaya."
      },
      {
        name: "Matakin sake oda da ƙarin kaya na kariya",
        objective: "O5",
        notYet: "An rubuta matakin sake oda da hannu ko an lissafa shi ba daidai ba.",
        meets: "An kafa ƙarin kaya na kariya kuma an lissafa matakin sake oda da formula ga kowane kaya.",
        exceeds: "Ana ajiye ƙarin kaya na kariya da yawa ga manyan kaya ko na mai sayarwa ɗaya, tare da dalili."
      },
      {
        name: "Alamar sake oda",
        objective: "O6",
        notYet: "Babu ginshiƙin matsayi, ko ba ya canjawa idan kaya sun yi ƙasa.",
        meets: "Matsayi yana nuna REORDER idan abin da ke hannu ya kai ko ya gaza matakin sake oda.",
        exceeds: "Mai koyo yana gwada shi ta canja On hand da duba alamar."
      },
      {
        name: "Shirin na-farko-ya-fara-fita",
        objective: "O6",
        notYet: "Babu shirin juya kaya.",
        meets: "Rubutaccen shiri na rubuta kwanan wata a akwatuna da saka sababbin kaya a bayan tsofaffi.",
        exceeds: "Ya faɗi wane ne zai yi shi da yaushe, kamar a kowane lokacin da kaya suka iso."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da har yanzu suke amfani da takardar lissafin kaya bayan kwanaki 30 (binciken biyo baya)",
      "Masu kasuwanci da suka ce kayansu ba sa ƙarewa sosai ko kayan da ke lalacewa ko ɓata sun ragu cikin kwanaki 60",
      "Masu kasuwanci da suka shirya mai sayarwa na ajiya ga aƙalla babban kaya ɗaya"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai spreadsheet kyauta kamar Google Sheets ko Excel a intanet",
      "Jerin kaya guda biyar da kuke saye ko sayarwa, tare da odoji na baya-bayan nan da takardun isarwa",
      "Takarda, alƙalami da na'urar lissafi (calculator) don ƙidaya da atisayen lissafi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku warware misalin matakin sake oda tare a allo kafin masu koyo su yi amfani da lambobinsu.",
      "Ku kawo misalin spreadsheet mai formula da aka riga aka saita ga masu koyo da ba su saba da spreadsheet ba.",
      "Ku gargaɗi masu koyo game da zambar masu sayarwa da ke neman tura kuɗi ta banki, katin kyauta ko crypto.",
      "Ku bar masu koyo su yi amfani da misalin kaya idan ba sa son raba farashi na gaske a aji.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
