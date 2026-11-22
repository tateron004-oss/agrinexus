"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ride-and-food-apps.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ride-and-food-apps-ha",
  lang: "ha",
  translationOf: "ride-and-food-apps",
  category: "Seniors and Technology",
  name: "Kiran Mota ko Odar Abinci ta Manhajoji (Uber, Lyft, DoorDash)",
  skills: "Saita manhajar mota ko ta kawo kaya, Kiran mota, Tabbatar da cewa motar ce daidai, Odar abinci ko kayan abinci a kawo, Duba farashi, tukwici da rasidi",
  outcome: "saita manhajar mota ko ta kawo kaya, ganin farashi kafin ku yi oda, kiran mota da tabbatar da cewa motar ce daidai kafin ku shiga, odar abinci ko kayan abinci a kawo ƙofarku, da duba rasidi bayan haka.",
  about: [
    "Manhajojin mota kamar Uber da Lyft suna turo direba ya ɗauke ku. Manhajojin kawo kaya kamar DoorDash, Uber Eats da Instacart suna kawo abinci ko kayan abinci har ƙofarku. Suna taimakawa idan ba kwa tuƙi, ba za ku iya zuwa shago ba, ko kuna buƙatar mota zuwa wurin likita ko hirar neman aiki.",
    "Wannan kwas ɗin yana nuna muku yadda ake saita manhajojin, ganin farashi kafin ku amince, shiga motar da ta dace lafiya, odar abinci, da duba abin da kuka biya.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Menu na manhajoji yana yawan canjawa, don haka muna bayanin abin da za ku yi, ba sunan kowane maɓalli ba."
  ],
  finalTask: "A manhajar mota, ku saka wurin ɗauka na gaske da inda za ku je (misali daga gidanku zuwa asibiti ko ɗakin karatu), ku karanta farashi da lokacin isowa, ku nemo kayan tsaro (raba tafiyarku, maɓallin gaggawa, PIN na tafiya) ba tare da kun yi oda ba sai idan kuna buƙatar motar. Sannan a manhajar kawo kaya, ku haɗa ƙaramar oda, ku duba jimillar kaya, kuɗaɗen ƙari, tukwici da adireshin kawowa a shafin biya, kuma ku bayyana ma'anar kowane layi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke buƙatar mota zuwa ganawa, aiki ko wasu ayyuka, ko a kawo musu abinci da kayan abinci gida: tsofaffi da ba sa tuƙi yanzu, masu nakasa, masu kula da marasa lafiya, masu dawowa cikin al'umma, da duk wanda sabo ne a manhajojin mota da na kawo kaya.",
    startingPoint: "Suna iya amfani da wayar zamani (smartphone) don buɗe manhajoji da rubuta adireshi, kuma wataƙila suna da katin banki (debit ko credit). Da yawa ba su taɓa kiran mota ko odar kaya a manhaja ba, ba su san yadda farashi, kuɗaɗen ƙari da tukwici suke aiki ba, ko ba su san abubuwan tsaro da ake dubawa kafin shiga mota ba.",
    gap: "Manhajojin mota da na kawo kaya suna iya taimaka wa mutum ya isa asibiti ko aiki a kan lokaci kuma ya sami abinci ba tare da fita ba, amma wanda bai san matakan ba yana iya biyan kuɗi fiye da yadda ya zata, ya shiga motar da ba tasa ba, ko ya faɗa cikin zambar masu cewa su ne masu taimakon manhaja.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kalmomi kamar alamar wurin ɗauka (pin), kuɗin hidima da canjin kaya",
      "Na'urori: wayar zamani mai kunna wurin da kuke (location) da manhajar hukuma",
      "Lokaci: kusan minti 5 a kowane darasi, kusan minti 60 gaba ɗaya",
      "Kuɗi: ba sai an yi odar mota ko kaya don kwas ɗin ba; farashi da kuɗaɗen ƙari suna canjawa bisa manhaja, lokaci da gari",
      "Shekaru da tsaro: sharuɗɗan Uber suna buƙatar babba, ko asusun matashi da iyaye suka saita; masu koyo ba sa taɓa bayar da kalmar sirri (password) ko code ga wanda ya kira ko ya tura tes"
    ],
    prerequisites: "Kwas ɗin \"Using a Smartphone and Tablet\" (Amfani da Wayar Zamani da Tablet), ko iya saka manhaja daga shagon manhajoji na hukuma."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shagon manhajoji na hukuma", action: "saka manhajar mota, buɗe asusu da ƙara hanyar biya lafiya", standard: "bayan an duba sunan kamfanin da ya yi manhajar, kuma an rubuta bayanan kati a cikin manhajar kaɗai" },
    { id: "O2", condition: "Idan aka ba ku wurin ɗauka da inda za ku je", action: "saka su duka a manhajar mota da karanta farashi da lokacin isowa kafin ku tabbatar", standard: "bayan an duba wurin ɗauka a taswira, kuma an karanta farashi kafin oda" },
    { id: "O3", condition: "Idan motar da kuka kira ta iso", action: "duba lambar mota, motar da direban da abin da manhajar ta nuna, da nemo kayan tsaro", standard: "ba tare da taɓa shiga motar da ba ta yi daidai ba, kuma an nemo Share My Trip, maɓallin gaggawa da PIN" },
    { id: "O4", condition: "Ta amfani da manhajar kawo kaya", action: "saka adireshin kawowa da bayani ga direba, da haɗa oda a cikin kwando (cart)", standard: "da cikakken adireshi, bayani mai amfani, da zaɓi game da kayan da suka ƙare" },
    { id: "O5", condition: "Idan aka ba ku shafin biya (checkout)", action: "bayyana kowane layi, har da jimillar kaya, kuɗaɗen ƙari, tukwici da jimilla, kafin ku biya", standard: "ana faɗin sunan kowane kuɗi daidai, kuma an kwatanta jimillar da kasafin kuɗinku" },
    { id: "O6", condition: "Bayan tafiya ko kawo kaya", action: "duba rasidi, neman taimako kan matsala a cikin manhajar da ƙin masu taimako na bogi", standard: "ta amfani da sashen Help na cikin manhajar kaɗai, ba tare da taɓa bayar da kalmar sirri ko code ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun mota",
      lessons: [
        {
          objectives: ["O1"],
          title: "Saita manhajar mota",
          minutes: 5,
          goal: "Saka manhajar mota, buɗe asusu da ƙara hanyar biya lafiya.",
          text: [
            "Uber da Lyft su ne manhajojin mota da aka fi sani a Amurka. Direba yana amfani da motarsa don kai ku inda kuke son zuwa, kuma kuna biya ta manhajar.",
            "Ku saka manhajar daga shagon manhajoji na hukuma kaɗai (Google Play ko App Store), kuma ku duba cewa kamfanin da ya yi ta shi ne Uber ko Lyft. Ku yi rajista da lambar wayarku da imel. Sharuɗɗan Uber sun ce dole ku kai shekara 18 ko fiye don asusunku na kanku; matasa masu shekara 13 zuwa 17 suna iya hawa ne kawai ta asusun matashi da iyaye ko mai kula da su suka saita. Ku duba sharuɗɗan manhajar da kanta don dokokin yanzu.",
            "Ku ƙara hanyar biya a cikin manhajar, kamar katin debit ko credit. Ku rubuta shi a cikin manhajar kaɗai, ba a tes ko imel ba. Ku ajiye gidanku a matsayin wurin da aka ajiye (saved place) don ya yi sauƙin zaɓa daga baya."
          ],
          steps: ["Ku buɗe shagon manhajoji na hukuma ku nemi Uber ko Lyft.", "Ku duba sunan kamfanin da ya yi manhajar, sannan ku saka ta.", "Ku yi rajista da lambar wayarku da imel.", "Ku ƙara hanyar biya a sashen biya ko walat na cikin manhajar.", "Ku ajiye adireshin gidanku a matsayin wurin da aka ajiye."],
          words: [["Manhajar mota (ride app)", "manhajar da ke turo direba da motarsa ya ɗauke ku."], ["Hanyar biya", "katin ko asusun da manhajar take cire kuɗi daga ciki."], ["Wurin da aka ajiye (saved place)", "adireshin da manhajar take tunawa, kamar gida."]],
          slides: [
            { title: "Abin da manhajojin mota suke yi", bullets: ["Direba yana ɗauke ku da motarsa", "Kuna biya ta manhajar", "Waɗanda aka fi sani a Amurka: Uber da Lyft"] },
            { title: "Ku saita lafiya", bullets: ["Shagon manhajoji na hukuma kaɗai", "Ku duba sunan kamfanin da ya yi manhajar", "Uber: shekara 18+ don asusunku; asusun matasa 13-17"] },
            { title: "Ƙara hanyar biya", bullets: ["A cikin manhajar kaɗai", "Ba ta tes ko imel ba", "Ku ajiye adireshin gidanku"] }
          ],
          sources: [{ name: "Uber: US Terms of Use (age and teen accounts)", url: "https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=united-states&lang=en" }],
          tryIt: "Ku saka Uber ko Lyft daga shagon manhajoji na hukuma, ku buɗe asusunku, ku ajiye adireshin gidanku. Kuna iya jira sai kun buƙaci mota kafin ku ƙara kati.",
          youCanNow: "saka manhajar mota lafiya, buɗe asusu da ajiye adireshin gidanku.",
          quickCheck: [
            { objective: "O1", q: "A manhajar mota, wa ke tuƙa motar?", options: ["Direban motar bas ta gari", "Ku", "Direba mai amfani da motarsa", "Kamfanin tasi kaɗai"], answer: 2, why: "Direba yana amfani da motarsa don kai ku, kuma kuna biya ta manhajar." },
            { objective: "O1", q: "Wani tes yana neman ku mayar da lambar katinku don gama saita asusun motarku. Me za ku yi?", options: ["Ku mayar da lambar katin", "Ku yi watsi da shi, ku ƙara katin a cikin manhajar hukuma kaɗai", "Ku tura lambar katin ta imel a maimakon haka", "Ku kira lambar da ke cikin tes ku karanta masa ita"], answer: 1, why: "Ku rubuta bayanan katinku a cikin manhajar kaɗai, ba a tes ko imel ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kiran mota da ganin farashi tun farko",
          minutes: 5,
          goal: "Saka wurin ɗauka da inda za ku je, da karanta farashi kafin ku tabbatar.",
          text: [
            "Ku buɗe manhajar ku rubuta inda kuke son zuwa a akwatin \"Where to?\" (Ina za ku?). Ku duba wurin ɗauka: manhajar tana amfani da wurin da kuke, amma kuna iya matsar da alamar wuri (pin) ko ku rubuta adireshin don direban ya same ku.",
            "Manhajar tana nuna zaɓuɓɓukan mota, daga masu arha na haɗaka ko na yau da kullum zuwa manyan motoci ko masu kyau, kowanne da farashi da lokacin isowa. Farashi yana iya ƙaruwa a lokutan cunkoso, kamar lokacin tashi daga aiki ko bayan wani babban taro.",
            "Ku zaɓi motar, ku duba farashi da hanyar biya, sannan ku tabbatar. Bayan haka manhajar tana nuna sunan direba, hotonsa, motar da lambar motar, da taswirar motar tana zuwa wurinku."
          ],
          steps: ["Ku rubuta inda za ku je a akwatin \"Where to?\".", "Ku duba wurin ɗauka; ku matsar da alamar wuri idan ya cancanta.", "Ku kwatanta zaɓuɓɓukan mota: farashi da lokacin isowa.", "Ku duba hanyar biya.", "Ku tabbatar ne kawai idan farashin ya yi muku.", "Ku kalli taswira don ganin motarku."],
          words: [["Wurin ɗauka", "inda direban zai same ku."], ["Inda za ku je", "wurin da kuke son zuwa."], ["Farashin lokacin cunkoso", "farashi mafi tsada idan mutane da yawa suna neman mota a lokaci ɗaya."]],
          slides: [
            { title: "Ina za ku? (Where to?)", bullets: ["Ku rubuta inda za ku je", "Ku duba wurin ɗauka a taswira"] },
            { title: "Ku ga farashi tun farko", bullets: ["Kowane zaɓin mota yana nuna farashi da lokaci", "Farashi yana iya ƙaruwa a lokutan cunkoso"] },
            { title: "Tabbatarwa", bullets: ["Ku duba farashi da hanyar biya", "Sannan ku ga direba, mota da lambar mota"] }
          ],
          tryIt: "Ku buɗe manhajar mota ku rubuta wurin da za ku je na gaske, kamar asibiti, ɗakin karatu ko cibiyar neman aiki. Ku karanta zaɓuɓɓukan mota biyu da farashinsu. Ku rufe manhajar ba tare da oda ba sai idan kuna buƙatar motar.",
          youCanNow: "kiran mota da karanta farashi da lokacin isowa kafin ku amince.",
          quickCheck: [
            { objective: "O2", q: "Me manhajar take nuna muku bayan kun tabbatar da kiran mota?", options: ["Sunan direba, hotonsa, motar da lambar motar", "Kuɗin da ke asusun bankinku", "Jerin gidajen abinci", "Kalmar sirrinku"], answer: 0, why: "Bayan kun tabbatar, manhajar tana nuna direba, mota da lambar mota, da taswira." },
            { objective: "O2", q: "Manhajar ta saka alamar wurin ɗaukarku a ƙetaren babban titi daga inda kuke tsaye. Me za ku yi?", options: ["Ku yi oda duk da haka ku gudu ku ƙetare titin", "Ku soke asusunku", "Ku zaɓi mota mafi tsada", "Ku matsar da alamar wuri ko ku rubuta adireshin don direban ya same ku"], answer: 3, why: "Kuna iya matsar da alamar wuri ko rubuta adireshin don wurin ɗauka ya yi daidai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Shiga motar da ta dace, lafiya",
          minutes: 5,
          goal: "Duba mota, lambar mota da direba kafin ku shiga, da amfani da kayan tsaro.",
          text: [
            "Kafin ku shiga, ku duba abubuwa uku da abin da manhajar ta nuna: lambar motar, irin motar da launinta, da sunan direba da hotonsa. Ku tambaya \"Wa kuka zo ɗauka?\" ku bar direban ya faɗi sunanku. Idan wani abu bai yi daidai ba, kada ku shiga.",
            "Uber yana da PIN mai lamba huɗu da za ku iya kunnawa: kuna faɗa wa direba PIN ɗin, kuma tafiyar ba za ta fara ba sai da PIN ɗin daidai. Share My Trip na Uber yana bar iyali ko abokai da kuka amince da su su bi tafiyarku kai tsaye, kuma maɓallin gaggawa na cikin manhajar yana kiran 911 (lambar gaggawa ta Amurka) kuma yana nuna wurin da kuke da bayanan motar. Lyft yana da nasa kayan tsaro; ku nemo su a shafinsa na tsaro ko a cikin manhajar.",
            "Ku jira a cikin gida har manhajar ta nuna cewa motar ta iso, kuma kada ku shiga motar da ke tayin ɗaukarku ba tare da an yi oda a manhajar ba."
          ],
          steps: ["Ku jira a ciki har manhajar ta ce motar ta iso.", "Ku duba lambar mota, motar da hoton direba.", "Ku tambaya \"Wa kuka zo ɗauka?\"", "Ku yi amfani da PIN idan kun kunna shi.", "Ku raba tafiyarku da wani a iyali ko aboki.", "Ku san inda maɓallin gaggawa yake."],
          words: [["Lambar mota (license plate)", "farantin lamba a jikin mota; ku duba cewa ya yi daidai da manhajar."], ["Share My Trip", "kayan Uber da ke bar mutanen da kuka zaɓa su bi tafiyarku kai tsaye."], ["PIN", "gajeriyar lambar sirri da kuke faɗa wa direba don fara tafiya."]],
          slides: [
            { title: "Ku duba kafin ku shiga", bullets: ["Lambar mota", "Irin mota da launinta", "Sunan direba da hotonsa"] },
            { title: "Ku tambaya, kada ku faɗa", bullets: ["\"Wa kuka zo ɗauka?\"", "Ku bar direban ya faɗi sunanku", "Bai yi daidai ba? Kada ku shiga"] },
            { title: "Kayan tsaro (Uber)", bullets: ["PIN na tafiya mai lamba huɗu, idan kun kunna shi", "Share My Trip ga mutanen da kuka amince da su", "Maɓallin gaggawa yana haɗa ku da 911"] },
            { title: "Lyft da sauransu", bullets: ["Suna da nasu kayan tsaro", "Ku nemo su a manhajar ko shafin tsaro"] }
          ],
          sources: [{ name: "Uber: Rider safety", url: "https://www.uber.com/us/en/ride/safety/" }],
          tryIt: "Ku buɗe sashen tsaro na manhajar motarku. Ku nemo yadda ake raba tafiya da inda maɓallin gaggawa yake. Idan manhajarku tana da PIN na tafiya, ku kunna shi.",
          youCanNow: "tabbatar da cewa motar da direban daidai ne, da amfani da kayan tsaro na manhajar.",
          quickCheck: [
            { objective: "O3", q: "Me Share My Trip na Uber yake yi?", options: ["Raba farashi da baƙo", "Bar iyali ko abokai da kuka amince da su su bi tafiyarku kai tsaye", "Saka tafiyarku a kafofin sada zumunta", "Ba direba kalmar sirrinku"], answer: 1, why: "Share My Trip yana bar mutanen da kuka amince da su su bi tafiyarku kai tsaye." },
            { objective: "O3", q: "Direba ya ce \"Ke ce Maria?\" kuma ku ne Maria. Me za ku yi maimakon cewa e?", options: ["Ku shiga nan take", "Ku faɗa wa direba PIN ɗinku kafin ku duba komai", "Ku tambaya \"Wa kuka zo ɗauka?\" ku bar direban ya faɗi sunanku", "Ku ba direba wayarku"], answer: 2, why: "Barin direba ya faɗi sunanku yana nuna cewa da gaske an turo shi ne gare ku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun mota",
        questions: [
          { objective: "O1", q: "A ina ya kamata ku samo manhajar Uber ko Lyft?", options: ["Hanyar haɗi (link) a cikin tes", "Kowane shafin intanet", "Shagon manhajoji na hukuma", "Tallar da ke tasowa (pop-up)"], answer: 2, why: "Shagunan hukuma suna da manhajoji na gaske." },
          { objective: "O2", q: "Yaushe za ku iya ganin farashin tafiya?", options: ["Kafin ku tabbatar da kiran motar", "Bayan tafiya kawai", "A takardar bankinku kawai", "Ba za ku taɓa gani ba"], answer: 0, why: "Manhajar tana nuna farashin kowane zaɓin mota kafin ku amince." },
          { objective: "O2", q: "Me yasa tafiya za ta iya yin tsada a yammacin Juma'a?", options: ["Manhajar ta lalace", "Farashin lokacin cunkoso idan mutane da yawa suna neman mota", "Wayarku ta tsufa", "Tafiya kyauta ce a ranar Juma'a"], answer: 1, why: "Farashi yana iya ƙaruwa idan ana neman mota sosai." },
          { objective: "O3", q: "Wata mota ta tsaya amma lambar motar ba ta yi daidai da manhajar ba. Me za ku yi?", options: ["Ku shiga duk da haka", "Ku shiga ku tambaya daga baya", "Ku biya direban kuɗi hannu", "Kada ku shiga"], answer: 3, why: "Rashin daidaituwa yana nufin wataƙila ba motarku ba ce." },
          { objective: "O3", q: "Wace hanya ce mafi aminci ta duba direba?", options: ["Ku ce \"Ka zo ɗaukar Maria ne?\"", "Ku tambaya \"Wa kuka zo ɗauka?\"", "Ku nuna masa katin shaidarku", "Ku fara faɗa masa PIN ɗinku"], answer: 1, why: "Barin direba ya faɗi sunanku yana tabbatar da cewa shi ne direbanku." }
        ]
      }
    },
    {
      name: "Babi na 2: Odar abinci da kayan abinci",
      lessons: [
        {
          objectives: ["O4"],
          title: "Odar abinci ko kayan abinci a kawo",
          minutes: 5,
          goal: "Nemo gidan abinci ko shago a manhajar kawo kaya da haɗa oda.",
          text: [
            "Manhajojin kawo kaya kamar DoorDash, Uber Eats da Instacart suna bar ku yi oda daga gidajen abinci da shagunan da ke kusa. Mai kawo kaya, wanda wani lokaci ake kira Dasher ko shopper (mai siyayya), yana ɗaukar odarku ya kawo muku.",
            "Ku saka manhajar daga shagon manhajoji na hukuma, kuma ku saka adireshin kawowa a hankali, da lambar gida ko ta ƙofar shiga, da bayani ga direba, kamar \"ƙofa shuɗiya, ku danna ƙararrawa\".",
            "Ku duba ko ku nemi gidan abinci ko shago, ku taɓa kaya don saka su a kwandonku (cart), ku zaɓi abubuwa kamar girma. Don kayan abinci, yawanci kuna iya zaɓar abin da mai siyayya zai yi idan wani kaya ya ƙare: ya canja shi da makamancinsa, ko a mayar muku da kuɗi."
          ],
          steps: ["Ku saka manhajar kawo kaya daga shagon hukuma.", "Ku saka cikakken adireshin kawowa da bayani ga direba.", "Ku nemi gidan abinci ko shago.", "Ku taɓa kaya don saka su a kwandonku.", "Don kayan abinci, ku zaɓi abin da za a yi idan wani kaya ya ƙare."],
          words: [["Manhajar kawo kaya (delivery app)", "manhajar da ke kawo abinci ko kaya daga shagunan kusa har ƙofarku."], ["Kwando (cart)", "jerin kayan da kuke shirin saya."], ["Canjin kaya (substitution)", "makamancin kaya da mai siyayya yake zaɓa idan naku ya ƙare."]],
          slides: [
            { title: "Manhajojin kawo kaya", bullets: ["DoorDash, Uber Eats, Instacart da sauransu", "Direba ko mai siyayya yana kawo odarku"] },
            { title: "Adireshinku", bullets: ["Cikakken adireshi da lambar gida ko ta ƙofar shiga", "Bayani kamar \"ƙofa shuɗiya, ku danna ƙararrawa\""] },
            { title: "Haɗa oda", bullets: ["Ku nemi gidan abinci ko shago", "Ku saka kaya a kwandonku", "Ku zaɓi abin da za a yi idan kaya ya ƙare"] }
          ],
          tryIt: "Ku buɗe manhajar kawo kaya (ku saka ta daga shagon hukuma idan ya cancanta). Ku saka adireshinku da bayani ga direba, sannan ku saka kaya biyu a kwando. Kada ku yi odar tukuna.",
          youCanNow: "nemo gidan abinci ko shago a manhajar kawo kaya da haɗa oda zuwa adireshinku.",
          quickCheck: [
            { objective: "O4", q: "A manhajar kawo kaya, wa ke kawo odarku?", options: ["Mai gidan abincin kaɗai", "Ofishin gidan waya", "Babu kowa; dole ku je ku ɗauka", "Mai kawo kaya, wanda wani lokaci ake kira Dasher ko shopper"], answer: 3, why: "Mai kawo kaya yana ɗaukar odarku ya kawo muku." },
            { objective: "O4", q: "Kuna zaune a gida mai lamba 4B a bayan wata ƙofar shiga. Me za ku yi lokacin da kuke saka adireshinku?", options: ["Ku ƙara lambar gidan, bayanin ƙofar shiga da bayani ga direba", "Ku saka sunan titi kawai", "Ku bar adireshin babu komai", "Ku yi amfani da adireshin maƙwabci"], answer: 0, why: "Lambar gida da ta ƙofar shiga da bayani suna taimaka wa direba ya same ku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fahimtar shafin biya: kuɗaɗen ƙari, tukwici da jimilla",
          minutes: 5,
          goal: "Karanta shafin biya da sanin kowane kuɗi kafin ku biya.",
          text: [
            "Farashin da ke kan menu ba shi ne duk kuɗin ba. Shafin biya (checkout) yana nuna jimillar kaya tare da ƙarin kuɗaɗe, waɗanda suke iya haɗawa da kuɗin kawowa, kuɗin hidima, wani lokaci kuɗin ƙaramar oda, haraji, da tukwici ga direba.",
            "Kuɗaɗen ƙari suna canjawa bisa manhaja, lokaci, nisa da gari, kuma wasu manhajoji suna da membobin da ake biya don rage kuɗaɗen ƙari. Don haka koyaushe ku karanta shafin biya ku kalli jimilla kafin ku taɓa Place order (Yi oda).",
            "Tukwici yana zuwa ga direba ko mai siyayya. Ku ne kuke zaɓar adadin, kuma manhajoji da yawa suna bar ku canja shi bayan an kawo. Idan jimillar ta fi yadda kuka shirya, ku cire wani kaya ko ku zaɓi zuwa ku ɗauka (pickup) maimakon a kawo, idan manhajar tana da wannan zaɓi."
          ],
          steps: ["Ku buɗe kwandonku ku je shafin biya.", "Ku karanta kowane layi: kaya, kuɗin kawowa, kuɗin hidima, haraji, tukwici.", "Ku duba adireshin kawowa da hanyar biya.", "Ku kalli jimilla.", "Ku canja oda ko tukwici idan ya cancanta, sannan ku taɓa Place order."],
          words: [["Kuɗin kawowa (delivery fee)", "kuɗin da ake caji don kawo muku oda."], ["Kuɗin hidima (service fee)", "kuɗin da manhajar take ƙarawa don amfani da hidimarta."], ["Tukwici (tip)", "kuɗin da kuka zaɓa ku ba direba ko mai siyayya."]],
          slides: [
            { title: "Farashin menu ba shi ne jimilla ba", bullets: ["Jimillar kaya", "Kuɗin kawowa da kuɗin hidima", "Haraji da tukwici"] },
            { title: "Kuɗaɗen ƙari suna canjawa", bullets: ["Bisa manhaja, lokaci, nisa da gari", "Koyaushe ku karanta shafin biya"] },
            { title: "Kafin ku taɓa Place order", bullets: ["Ku duba adireshi da hanyar biya", "Ku kalli jimilla", "Ya yi yawa? Ku cire kaya ko ku zaɓi zuwa ku ɗauka"] }
          ],
          tryIt: "Ku kai kwandon darasin da ya gabata zuwa shafin biya. Ku rubuta jimillar kaya, kowane kuɗin ƙari, tukwici da jimilla ta ƙarshe. Sannan ku yanke shawara ko za ku yi odar ko ku rufe manhajar.",
          youCanNow: "karanta shafin biya na manhajar kawo kaya da sanin duk kuɗin kafin ku biya.",
          quickCheck: [
            { objective: "O5", q: "Wa ke karɓar tukwici a odar kawo kaya?", options: ["Kamfanin manhajar", "Direba ko mai siyayya", "Hukumar gari", "Mai gidan da gidan abincin yake haya"], answer: 1, why: "Tukwici yana zuwa ga direba ko mai siyayya." },
            { objective: "O5", q: "Kayan menu ɗinku ba su da tsada, amma jimillar ta fi yawa sosai. Me za ku yi kafin ku yi odar?", options: ["Ku taɓa Place order ba tare da dubawa ba", "Ku ƙara kaya don ya cancanta", "Ku karanta kowane layi a shafin biya don ganin kuɗaɗen ƙari, haraji da tukwici", "Ku rufe manhajar ku biya da katin kyauta (gift card)"], answer: 2, why: "Shafin biya yana nuna kowane kuɗin ƙari, haraji da tukwici da suka haɗa jimilla." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rasidi, matsaloli da zama lafiya",
          minutes: 4,
          goal: "Duba rasidi, neman taimako kan oda marar daidai, da guje wa zambar manhajoji.",
          text: [
            "Bayan tafiya ko kawo kaya, manhajar tana tura rasidi zuwa imel ɗinku kuma tana ajiye shi a cikin manhajar a sashen tafiye-tafiye ko ododi. Ku duba cewa kuɗin da aka cire ya yi daidai da abin da kuka amince.",
            "Idan wani abu ba daidai ba ne, kamar kaya da ya ɓace, abinci mai sanyi ko caji marar daidai, ku yi amfani da sashen Help ko Support na cikin manhajar ku zaɓi odar. Ku kai rahoton matsala da wuri bayan ta faru.",
            "'Yan damfara suna yin kamar su ne masu taimakon manhaja. Taimako na gaske yana cikin manhajar. Kada ku kira lambar taimako daga tallar bincike a intanet, kuma kada ku taɓa ba kowa da ya kira ku ko ya tura muku tes kalmar sirrinku ko code da aka turo wayarku. Ku biya a cikin manhajar kaɗai, ba da kuɗi hannu ko katin kyauta ga wanda ya nema ba."
          ],
          steps: ["Ku buɗe tafiye-tafiye ko ododinku a manhajar.", "Ku duba cewa rasidin ya yi daidai da abin da kuka amince.", "Don matsala, ku je Help a cikin manhajar ku zaɓi odar.", "Kada ku taɓa ba mai kira kalmar sirri ko code na waya.", "Ku biya a cikin manhajar kaɗai."],
          words: [["Rasidi", "takardar shaidar abin da kuka biya da abin da kuka biya domin sa."], ["Support (taimako)", "sashen taimako na manhajar don matsaloli."]],
          slides: [
            { title: "Ku duba rasidi", bullets: ["A imel ɗinku da a cikin manhajar", "Ya yi daidai da abin da kuka amince?"] },
            { title: "Wani abu ba daidai ba?", bullets: ["Help ko Support a cikin manhajar", "Ku zaɓi odar", "Ku kai rahoto da wuri"] },
            { title: "Ku guji zambar masu taimako na bogi", bullets: ["Taimako na gaske yana cikin manhajar", "Kada ku taɓa bayar da kalmar sirri ko code na waya", "Ku biya a cikin manhajar kaɗai"] }
          ],
          tryIt: "Atisayen aikin ƙarshe: ku buɗe sashen tafiye-tafiye ko ododi na manhajar motarku ko ta kawo kaya ku nemo wurin Help. Sannan ku yi aikin ƙarshe: ku duba farashin tafiya ku nemo kayan tsaro, ku karanta cikakken shafin biya na odar kawo kaya.",
          youCanNow: "duba rasidi, neman taimako kan matsala a cikin manhajar, da guje wa zambar masu taimako na bogi.",
          quickCheck: [
            { objective: "O6", q: "A ina za ku sami rasidin odar kawo kaya?", options: ["A imel ɗinku da a cikin manhajar a sashen ododinku", "Daga direba kaɗai", "A injin bincike na intanet", "Babu inda; manhajoji ba sa ba da rasidi"], answer: 0, why: "Manhajar tana tura rasidi ta imel kuma tana ajiye shi a sashen tafiye-tafiye ko ododi." },
            { objective: "O6", q: "Abincinku bai iso ba kwata-kwata, kuma kun nemi lambar taimakon manhajar a intanet. Wata talla ta nuna lambar waya. Me za ku yi?", options: ["Ku kira lambar da ke cikin tallar", "Ku ba mai kiran kalmar sirrinku", "Ku biya baƙo da katin kyauta don a mayar muku da kuɗi", "Ku tsallake tallar ku yi amfani da Help a cikin manhajar"], answer: 3, why: "Taimako na gaske yana cikin manhajar; lambobin taimako a tallolin bincike suna iya zama na 'yan damfara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Odar abinci da kayan abinci",
        questions: [
          { objective: "O4", q: "Me yasa za ku ƙara bayani kamar \"ƙofa shuɗiya, ku danna ƙararrawa\" a adireshinku?", options: ["Yana rage farashi", "Yana taimaka wa direba ya same ku", "Doka ta buƙace shi", "Yana ɓoye adireshinku"], answer: 1, why: "Bayani mai sarari yana taimaka wa direba ya kawo a ƙofar da ta dace." },
          { objective: "O4", q: "Mene ne canjin kaya (substitution) a odar kayan abinci?", options: ["Makamancin kaya idan naku ya ƙare", "Takardar rangwame (coupon)", "Kuɗin kawowa", "Tukwici"], answer: 0, why: "Masu siyayya suna iya canja kayan da ya ƙare da makamancinsa." },
          { objective: "O5", q: "Wane shafi ne ke nuna duk kuɗin odar kawo kaya?", options: ["Menu", "Shafin farko", "Shafin biya (checkout)", "Shagon manhajoji"], answer: 2, why: "Shafin biya yana nuna kaya, kuɗaɗen ƙari, haraji, tukwici da jimilla." },
          { objective: "O6", q: "Abincinku ya iso amma wani kaya babu. Me za ku yi?", options: ["Ku kira lambar da ke tallar bincike", "Ku saka kalmar sirrinku a intanet", "Ku yi watsi da shi", "Ku yi amfani da Help a cikin manhajar ku zaɓi odar"], answer: 3, why: "Taimako na gaske yana cikin manhajar." },
          { objective: "O6", q: "Wani ya tura tes yana cewa shi mai taimakon DoorDash ne kuma yana buƙatar code da aka turo wayarku. Me za ku yi?", options: ["Kada ku bayar; taimako na gaske yana cikin manhajar", "Ku tura code ɗin", "Ku tura kalmar sirrinku", "Ku biya shi da katin kyauta"], answer: 0, why: "Kada ku taɓa ba wanda ya tuntuɓe ku code na waya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kiran Mota ko Odar Abinci ta Manhajoji (Uber, Lyft, DoorDash)",
    questions: [
      { objective: "O1", q: "Me manhajar mota kamar Uber ko Lyft take yi?", options: ["Tana turo direba da motarsa ya ɗauke ku", "Tana sayar da motoci", "Tana kawo wasiƙu", "Tana ba da hayar keke kaɗai"], answer: 0, why: "Manhajojin mota suna haɗa ku da direba." },
      { objective: "O1", q: "Lokacin saka manhajar mota, ku duba:", options: ["Launin alamar manhajar", "Cewa kamfanin da ya yi ta shi ne ainihin kamfanin", "Kuɗin da ke asusun bankinku", "Yanayin gari"], answer: 1, why: "Manhajoji na bogi suna kwaikwayon sunayen na gaske." },
      { objective: "O1", q: "Bisa sharuɗɗan Uber na Amurka, matasa masu shekara 13 zuwa 17 suna iya hawa:", options: ["Da asusunsu na manya", "Ba za su taɓa ba", "Ta asusun matashi da iyaye ko mai kula da su suka saita", "Da dare kaɗai"], answer: 2, why: "Sharuɗɗan Uber suna ba da damar asusun matasa na shekara 13-17 tare da iyaye ko mai kula." },
      { objective: "O1", q: "A ina ya kamata ku rubuta bayanan katinku don manhajar mota?", options: ["A tes zuwa ga direba", "A imel", "A kafofin sada zumunta", "A cikin manhajar kaɗai"], answer: 3, why: "Ana saita biya a cikin manhajar kaɗai." },
      { objective: "O2", q: "Akwatin \"Where to?\" na:", options: ["Inda za ku je ne", "Kalmar sirrinku ne", "Tukwici ne", "Lambar bankinku ne"], answer: 0, why: "Kuna rubuta inda kuke son zuwa." },
      { objective: "O2", q: "Me yasa za ku duba wurin ɗauka a taswira?", options: ["Don canja farashi", "Ba a buƙata", "Don zaɓar launin mota", "Don direban ya same ku"], answer: 3, why: "Wurin ɗauka daidai yana hana ɓatan mota." },
      { objective: "O2", q: "Farashin tafiya yana iya yin tsada:", options: ["Ba zai taɓa ba", "A ranar haihuwarku kaɗai", "A lokutan cunkoso kamar lokacin tashi daga aiki", "Idan kuna amfani da Wi-Fi"], answer: 2, why: "Yawan masu nema yana iya ƙara farashi." },
      { objective: "O3", q: "Me ya kamata ku duba kafin ku shiga mota?", options: ["Tashar rediyo", "Yanayin gari", "Lambar mota, motar da hoton direba", "Adireshin gidan direba"], answer: 2, why: "Waɗannan dole su yi daidai da manhajar." },
      { objective: "O3", q: "PIN na tafiyar Uber yana aiki ta:", options: ["Biyan direba", "Kiran 911", "Buɗe wayarku", "Faɗa wa direba lamba don tafiyar ta fara"], answer: 3, why: "Tafiyar tana farawa ne kawai da PIN ɗin daidai." },
      { objective: "O3", q: "Share My Trip yana bar ku:", options: ["Raba kuɗin tafiya da baƙi", "Canja direba", "Bar mutanen da kuka amince da su su bi tafiyarku kai tsaye", "Samun mayar da kuɗi"], answer: 2, why: "Mutanen da kuka amince da su suna iya ganin halin tafiyarku." },
      { objective: "O3", q: "Maɓallin gaggawa na cikin manhajar Uber:", options: ["Yana ba direba maki", "Yana soke tafiya kyauta", "Yana kiran bankinku", "Yana kiran 911 kuma yana nuna wurin da kuke da bayanan motar"], answer: 3, why: "Yana haɗa ku da 911 tare da bayanan tafiya." },
      { objective: "O3", q: "Wata mota da ba ku kira ba tana tayin ɗaukarku a wajen wani wurin taro. Ya kamata ku:", options: ["Ku shiga; ya fi sauri", "Ku biya kuɗi hannu", "Ku ƙi; ku hau motar da aka kira a manhajar kaɗai", "Ku faɗi PIN ɗinku"], answer: 2, why: "Motocin da aka kira kuma suka yi daidai ne kaɗai suke lafiya." },
      { objective: "O4", q: "Wace manhaja ce galibi don kawo kayan abinci?", options: ["Lyft", "Na'urar lissafi (calculator)", "Manhajar yanayi", "Instacart"], answer: 3, why: "Instacart yana kawo kayan abinci." },
      { objective: "O4", q: "\"Kwando\" (cart) a manhajar kawo kaya shi ne:", options: ["Mota", "Rasidi", "Jerin kayan da kuke shirin saya", "Kuɗin ƙari"], answer: 2, why: "Kwandonku yana riƙe kaya kafin shafin biya." },
      { objective: "O5", q: "Wanne ne yawanci ƙarin kuɗi a odar kawo kaya?", options: ["Kuɗin hidima", "Kyauta ta kyauta", "Makin da kuka bayar", "Adireshinku"], answer: 0, why: "Ana ƙara kuɗin hidima da na kawowa a shafin biya." },
      { objective: "O5", q: "Tukwici a odar kawo kaya yana zuwa ga:", options: ["Shagon manhajoji", "Gwamnati", "Banki", "Direba ko mai siyayya"], answer: 3, why: "Tukwici na wanda ya kawo kayan ne." },
      { objective: "O5", q: "Jimilla a shafin biya ta fi yadda kuka shirya. Mataki mai kyau shi ne:", options: ["Ku biya duk da haka ba tare da karantawa ba", "Ku ba baƙo katinku", "Ku cire wani kaya ko ku zaɓi zuwa ku ɗauka idan akwai", "Ku saka adireshin ƙarya"], answer: 2, why: "Canja odar yana rage jimilla." },
      { objective: "O6", q: "A ina za ku sami rasidi bayan tafiya?", options: ["A imel ɗinku da a sashen tafiye-tafiye na manhajar", "Daga direba kaɗai", "Babu inda", "A shagon manhajoji"], answer: 0, why: "Manhajoji suna ajiye rasidi kuma suna tura shi ta imel." },
      { objective: "O6", q: "A ina taimako na gaske yake don oda marar daidai?", options: ["Lambar waya daga tallar bincike", "Sharhi a kafofin sada zumunta", "Tes daga baƙo", "Help ko Support a cikin manhajar"], answer: 3, why: "Taimako na gaske yana cikin manhajar." },
      { objective: "O6", q: "Wani ya ce shi mai taimakon manhaja ne kuma yana neman kalmar sirrinku. Ku:", options: ["Ba shi ita", "Ba shi rabinta", "Kada ku taɓa ba shi", "Tura masa ita ta tes daga baya"], answer: 2, why: "Masu taimako na gaske ba sa taɓa buƙatar kalmar sirrinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      6,
      7,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Farashi kafin oda",
        objective: "O2",
        notYet: "Wurin ɗauka ko inda za a je ba daidai ba ne, ko ba a karanta farashi da lokacin isowa ba.",
        meets: "An saka wurin ɗauka na gaske da inda za a je, kuma an karanta farashi da lokacin isowa kafin kowace oda.",
        exceeds: "Ya kuma kwatanta zaɓuɓɓukan mota biyu kuma ya faɗi dalilin da yasa farashi zai iya yin tsada a lokutan cunkoso."
      },
      {
        name: "Kayan tsaro",
        objective: "O3",
        notYet: "Ba zai iya nemo kayan tsaro ba.",
        meets: "Ya nemo Share My Trip, maɓallin gaggawa da PIN na tafiya (ko kayan tsaro na manhajar da kanta).",
        exceeds: "Ya kuma bayyana abubuwa uku da ake dubawa kafin shiga mota."
      },
      {
        name: "Odar kawo kaya",
        objective: "O4",
        notYet: "Kwandon babu komai ko adireshin kawowa bai cika ba.",
        meets: "Ƙaramar oda a kwando da cikakken adireshin kawowa.",
        exceeds: "Ya ƙara bayani mai amfani ga direba da zaɓi game da kayan da suka ƙare."
      },
      {
        name: "Karanta shafin biya",
        objective: "O5",
        notYet: "Ba zai iya faɗin kuɗaɗen ƙari, tukwici ko jimilla ba.",
        meets: "Ya bayyana jimillar kaya, kowane kuɗin ƙari, tukwici, adireshin kawowa da jimilla.",
        exceeds: "Ya kuma faɗi hanya ɗaya ta rage jimilla, kamar cire wani kaya ko zaɓin zuwa ya ɗauka."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na aikin ƙarshe",
      "Masu koyo da suka ce sun je ganawa, aiki ko wani aiki ta manhajar mota da kansu cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka ce suna duba farashi da kuɗaɗen ƙari kafin oda kuma suna tsayawa cikin kasafin kuɗinsu",
      "Masu koyo da suka ce sun ƙi kira ko tes na masu taimako na bogi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai kunna wurin da kuke (location) da intanet",
      "Manhajar mota (Uber ko Lyft) da manhajar kawo kaya (DoorDash, Uber Eats ko Instacart) daga shagon hukuma",
      "Wurin ɗauka na gaske da inda za a je, kamar daga gida zuwa asibiti ko ɗakin karatu",
      "Kusan minti 60 gaba ɗaya, a gajerun zama; ba a buƙatar oda ko biya"
    ],
    facilitatorNotes: [
      "Ku faɗa wa masu koyo kada su taɓa Confirm ko Place order a aji sai idan da gaske suna buƙatar motar ko abincin; aikin yana tsayawa kafin oda.",
      "Masu koyo suna iya buƙatar kati don gama rajista; ku bar su su yanke shawara ko za su ƙara ɗaya, kuma kada ku taɓa neman ganin bayanan katinsu.",
      "Ku yi atisayen tambayar \"Wa kuka zo ɗauka?\" a matsayin wasan kwaikwayo, da mai koyo biyu a matsayin fasinja da direba.",
      "Farashi da kuɗaɗen ƙari suna canjawa bisa gari da lokacin rana, don haka ku kalli shafukan biya na gaske maimakon faɗin adadi.",
      "Ga masu koyo da ba za su iya amfani da kati ko wayar zamani ba, ku ambaci shirye-shiryen motar nakasassu (paratransit) ko na tsofaffi na yankinku da ƙungiyarku ta sani."
    ]
  }
};
