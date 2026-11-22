"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-volunteer-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-volunteer-management-ha",
  lang: "ha",
  translationOf: "nonprofit-volunteer-management",
  category: "Non Profits",
  name: "Kula da Masu Aikin Sa-kai",
  skills: "Rubuta bayanin aikin sa-kai, Neman masu aikin sa-kai da tantance su, Karɓar su da horar da su, Tsara jadawali da kula da su, Yabo da riƙe su, Bin diddigin awoyin aikin sa-kai",
  outcome: "gudanar da shirin masu aikin sa-kai daga farko har ƙarshe: rubuta bayanin aiki a sarari, nemo masu aikin sa-kai ku tantance su lafiya, karɓe su ku horar da su, tsara jadawalinsu ku kula da su, gode musu ta hanyar da za ta sa su ci gaba da zuwa, da bin diddigin awoyinsu.",
  about: [
    "Wannan kwas ɗin na masu shirya masu aikin sa-kai ne, ma'aikatan ƙungiyoyin sa-kai (non-profit), shugabannin coci da masallaci da ayyukan addini, ƙungiyoyin iyaye na makaranta, ƙungiyoyin wasanni na matasa, bankunan abinci da duk wanda ke dogara da masu aikin sa-kai.",
    "Masu aikin sa-kai suna ba da lokacinsu kyauta, don haka yadda kuke kula da su ne ke sa su dawo ko a'a. Za ku koyi rubuta bayanin aiki, nemo mutanen da suka dace ku tantance su (har da binciken tarihi ga ayyukan da suka shafi yara ko manya masu rauni), horar da su, tsara jadawalinsu ku kula da su, gode musu ku riƙe su, da bin diddigin awoyinsu.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\" da za ku iya amfani da shi don aikin sa-kai na gaske. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Don tambayoyin doka, inshora da haraji, ku tambayi ƙwararre da majiyoyin hukuma da aka ambata a darussan. (Idan kuna son amfani da AI don nemo masu aikin sa-kai, ku duba kwas ɗin AI don neman masu aikin sa-kai.)"
  ],
  finalTask: "Ku haɗa kayan aikin sa-kai don aiki ɗaya na gaske: bayanin aiki, saƙon neman masu aikin sa-kai da matakan tantancewa (da binciken tarihi idan aikin ya shafi yara ko manya masu rauni), tsarin gabatarwa na minti 30, jadawalin wata ɗaya da sunan mai kula, ra'ayoyi biyu na yabo, da takardar sa hannu ko tebur (spreadsheet) mai sauƙi da ke bin diddigin awoyi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu shirya masu aikin sa-kai, ma'aikatan ƙungiyoyin sa-kai, shugabannin coci da masallaci da ayyukan addini, ƙungiyoyin iyaye na makaranta, ƙungiyoyin wasanni na matasa, bankunan abinci da duk wanda aikinsa ya dogara da masu aikin sa-kai.",
    startingPoint: "Sun taɓa neman masu aikin sa-kai ko aiki tare da su ba bisa tsari ba, sau da yawa ta hanyar magana baki da baki. Kaɗan ne ke amfani da rubutaccen bayanin aiki, tantancewa bisa haɗari, gabatarwa mai tsari ko hanyar bin diddigin awoyi.",
    gap: "Masu aikin sa-kai suna ba da lokacinsu kyauta, don haka rashin tsari, rashin horo ko rashin godiya yana sa su tafi, kuma tantancewa mai rauni na iya jefa yara da manya masu rauni cikin haɗari. Cikakken kayan aikin sa-kai yana taimaka wa ƙungiyoyi su riƙe nagartattun masu aikin sa-kai, su kare mutanen da suke yi wa hidima, kuma su nuna tasirinsu ga masu ba da tallafi.",
    constraints: [
      "Masu shiryawa sau da yawa suna aiki na ɗan lokaci ne ko su ma masu aikin sa-kai ne; darussa na minti 5",
      "Kayan aiki kyauta ko marasa tsada: takarda, tebur (spreadsheet), fom ɗin rajista kyauta",
      "Dokokin binciken tarihi sun bambanta bisa jiha, shiri da kamfanin inshora; masu koyo suna tambayar kamfanin inshorarsu da lauya",
      "Sirri: bayanan masu aikin sa-kai da na mutanen da ake yi wa hidima suna zama a sirri; babu sunaye ko hotunan mutanen da ake yi wa hidima ba tare da izini ba",
      "Babu shawarar haraji; ana tura masu aikin sa-kai zuwa IRS Publication 526 da ƙwararren haraji"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don aikin sa-kai ɗaya da ƙungiyarku ke buƙata", action: "rubuta bayanin aiki da ke faɗin tasirin aikin, ayyukan, lokacin, ƙwarewar da ake buƙata da wanda mai aikin sa-kai zai kai rahoto gare shi", standard: "da dukkan sassa biyar da jimlar farko game da tasiri" },
    { id: "O2", condition: "Idan aka ba ku aikin sa-kai da wanda yake yi wa hidima", action: "rubuta saƙon neman masu aikin sa-kai da zaɓar matakan tantancewa da suka dace da haɗarin aikin", standard: "har da shaidar mutane (references) da binciken tarihi da rubutaccen izini ga duk aikin da ya shafi yara ko manya masu rauni" },
    { id: "O3", condition: "Don sababbin masu aikin sa-kai a aikinku", action: "tsara gabatarwa ta minti 30 da horar da aikin a matakai huɗu: bayani, nunawa, gwadawa da ra'ayi", standard: "da ta ƙunshi tsaro, sirri, sa hannu da yadda ake soke zuwa" },
    { id: "O4", condition: "Ta amfani da tebur (spreadsheet), kalandar da ake rabawa ko takarda", action: "gina jadawalin wata ɗaya da sunan shugaban kowane lokacin aiki, masu maye gurbi da saƙon tunatarwa", standard: "da kowane lokacin aiki yana da mutane, kuma an sa sunan shugaba ga kowanne" },
    { id: "O5", condition: "Don masu aikin sa-kai da kuke kula da su", action: "tsara yabo na musamman da gane dalilan da suka fi sa masu aikin sa-kai su tafi", standard: "da ƙaramar godiya ɗaya da babban lokaci ɗaya" },
    { id: "O6", condition: "Don aikin sa-kai ɗaya", action: "kafa takardar sa hannu ko tebur da ke bin diddigin awoyin masu aikin sa-kai da amfani da jimlar", standard: "ana rubuta suna, kwanan wata, lokacin farawa, lokacin gamawa, awoyi da aiki, kuma ana kiyaye bayanan a sirri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shigo da masu aikin sa-kai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta bayanin aikin sa-kai",
          minutes: 5,
          goal: "Rubuta bayanin aiki a sarari, mai jan hankali, don aikin sa-kai ɗaya.",
          text: [
            "Masu aikin sa-kai suna yin iya ƙoƙarinsu idan sun san ainihin abin da ake nema daga gare su. Bayanin aiki kamar gajeren bayanin aikin albashi ne: yana faɗin mene ne aikin, me yasa yake da muhimmanci, abin da mai aikin sa-kai zai yi, lokacin da ake buƙata, ƙwarewa ko halayen da ake buƙata, duk wani horo ko tantancewa, da wanda zai kai rahoto gare shi.",
            "Ku sa ya ja hankali. Ku fara da tasirin aikin: \"Ku taimaka wa iyalai 200 su sami kayan abinci kowace Asabar.\" Ku faɗi gaskiya game da lokaci, har da tsawon lokacin da kuke fatan za su zauna (taro ɗaya, ko wata shida). Ku ba da ayyuka gajeru masu sassauci tare da masu tsawo; mutane da yawa za su iya ba da awa biyu amma ba kowane mako ba.",
            "Ku rubuta bayani daban don kowane aiki. Bankin abinci na iya samun masu tarba, masu ware kaya, direbobi da mai taimakon shigar da bayanai a kwamfuta, kuma kowanne yana da buƙatunsa."
          ],
          steps: ["Ku ba aikin suna, ku faɗi dalilin da yasa yake da muhimmanci.", "Ku jera abin da mai aikin sa-kai zai yi.", "Ku faɗi yaushe, tsawon lokaci, da watanni nawa.", "Ku jera ƙwarewa, halaye da duk wata iyakar shekaru.", "Ku rubuta horo, tantancewa da wanda za su kai rahoto gare shi."],
          words: [["Bayanin aiki (role description)", "gajeren rubutu game da aikin sa-kai: me, yaushe, me yasa, da abin da ake buƙata."], ["Mai shirya masu aikin sa-kai (volunteer coordinator)", "mutumin da ke nemo, tsara da tallafa wa masu aikin sa-kai."]],
          slides: [
            { title: "Bayanin aiki yana faɗin", bullets: ["Aikin da dalilin da yasa yake da muhimmanci", "Abin da za su yi, yaushe da tsawon lokaci", "Ƙwarewar da ake buƙata, horo da tantancewa", "Wanda za su kai rahoto gare shi"] },
            { title: "Ku sa ya ja hankali", bullets: ["Ku fara da tasiri: \"Ku taimaka wa iyalai 200 kowace Asabar\"", "Ku faɗi gaskiya game da lokaci", "Ku ba da ayyuka gajeru masu sassauci ma"] },
            { title: "Aiki ɗaya, bayani ɗaya", bullets: ["Mai tarba, mai ware kaya, direba, mai shigar da bayanai", "Ayyuka daban, buƙatu daban"] }
          ],
          tryIt: "Ku zaɓi aikin sa-kai ɗaya da ƙungiyarku ke buƙata. Ku rubuta bayanin aikinsa da dukkan sassa biyar. Ku fara da jimla ɗaya game da tasirinsa.",
          youCanNow: "rubuta bayanin aiki a sarari da ke faɗa wa masu aikin sa-kai ainihin abin da ake nema da dalilin da yasa yake da muhimmanci.",
          quickCheck: [
            { objective: "O1", q: "Mene ne bayanin aikin sa-kai?", options: ["Katin godiya ga masu aikin sa-kai", "Gajeren bayanin aiki da ke faɗin mene ne aikin, me yasa yake da muhimmanci da abin da ake nema", "Takardar sa hannu", "Fom ɗin binciken tarihi"], answer: 1, why: "Bayanin aiki yana faɗa wa masu aikin sa-kai ainihin abin da ake nema daga gare su, kamar gajeren bayanin aiki." },
            { objective: "O1", q: "Bayaninku yana cewa \"Ku taimaka wani lokaci.\" Me za ku fara ƙarawa?", options: ["Babu komai; rashin cikakken bayani ya fi sauƙi", "Jerin kowace doka da kuke da ita", "Albashin mai aikin sa-kai", "Yaushe da tsawon lokaci, da tasirin da aikin ke yi"], answer: 3, why: "Masu aikin sa-kai suna buƙatar cikakken bayanin lokaci na gaskiya da dalilin da yasa aikin yake da muhimmanci." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Neman masu aikin sa-kai da tantance su",
          minutes: 6,
          goal: "Nemo masu aikin sa-kai don wani aiki kuma ku zaɓi matakan tantancewa da suka dace da shi.",
          text: [
            "Dalilin da ya fi yawa da yasa mutane ke aikin sa-kai shi ne wani ya roƙe su. Ku roƙi mutane da kanku, ta hanyar masu aikin sa-kai da kuke da su, wuraren ibada, makarantu, kamfanonin da ke da shirin aikin sa-kai, allunan sanarwa na al'umma da kafofin sada zumunta. Ku raba bayanin aikin da hanya mai sauƙi ta yin rajista.",
            "Tantancewa tana kare mutanen da kuke yi wa hidima, masu aikin sa-kai da ƙungiyarku. Ku daidaita ta da haɗarin aikin. Kowane aiki: fom ɗin nema da bayanan tuntuɓa da na wanda za a kira idan gaggawa ta faru, da ɗan gajeren tattaunawa. Ayyuka masu haɗari sosai, musamman duk aikin da ya shafi yara ko manya masu rauni (tsofaffi, masu nakasa), suna kuma buƙatar duba shaidar mutane (references) da binciken tarihi, da rubutaccen izinin mutumin, ta hannun kamfani amintacce.",
            "Dokokin binciken tarihi ga masu aikin sa-kai sun bambanta bisa jiha da shiri, kuma kamfanin inshorarku na iya samun nasa sharuɗɗa. Ku tambayi kamfanin inshorarku da lauya abin da ya shafe ku. Ku kuma ƙara dokokin tsaro: misali, babu babban mutum da zai kasance shi kaɗai tare da yaro inda ba a ganinsu, kuma ana kai kowace damuwa ga wani mutum da aka ambaci sunansa."
          ],
          steps: ["Ku roƙi mutane da kanku; ku yi amfani da masu aikin sa-kai da kuke da su da abokan hulɗa na al'umma.", "Ku raba bayanin aikin da hanyar rajista mai sauƙi.", "Ga kowane aiki: fom ɗin nema, wanda za a kira idan gaggawa, da ɗan tattaunawa.", "Ga ayyukan da suka shafi yara ko manya masu rauni: shaidar mutane da binciken tarihi da rubutaccen izini.", "Ku duba dokokin jiha da sharuɗɗan kamfanin inshorarku.", "Ku kafa dokokin tsaro, kamar babu babban mutum shi kaɗai tare da yaro inda ba a ganinsu."],
          words: [["Tantancewa (screening)", "matakan da kuke ɗauka don tabbatar da cewa mai aikin sa-kai ya dace kuma babu haɗari a gare shi a wani aiki."], ["Binciken tarihi (background check)", "binciken bayanan jama'a, kamar bayanan laifuka, da aka yi da izinin mutum."], ["Babban mutum mai rauni (vulnerable adult)", "babban mutum da ke iya buƙatar ƙarin kariya, kamar wasu tsofaffi ko masu nakasa."]],
          slides: [
            { title: "Ku nemo su ta hanyar roƙo", bullets: ["Yawancin mutane suna aikin sa-kai saboda wani ya roƙe su", "Masu aikin sa-kai da kuke da su, wuraren ibada, makarantu", "Kamfanoni, allunan sanarwa na al'umma, kafofin sada zumunta"] },
            { title: "Ku tantance bisa haɗari", bullets: ["Kowane aiki: fom ɗin nema, lambar gaggawa, tattaunawa", "Yara ko manya masu rauni: shaidar mutane + binciken tarihi", "Koyaushe da rubutaccen izini"] },
            { title: "Ku duba dokokin", bullets: ["Dokokin jiha sun bambanta", "Kamfanin inshorarku na iya samun sharuɗɗa", "Ku tambayi kamfanin inshorarku da lauya"] },
            { title: "Dokokin tsaro", bullets: ["Babu babban mutum shi kaɗai tare da yaro inda ba a ganinsu", "Ku kai kowace damuwa ga mutum da aka ambaci sunansa"] }
          ],
          tryIt: "Don aikin da kuka bayyana a Darasi na 1, ku rubuta gajeren saƙon neman masu aikin sa-kai, ku jera wurare uku da za ku raba shi. Sannan ku jera matakan tantancewa da aikin ke buƙata, ku bayyana dalili, bisa haɗarinsa.",
          youCanNow: "nemo masu aikin sa-kai ta hanyar roƙonsu da kanku, da zaɓar matakan tantancewa da suka dace da haɗarin kowane aiki.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata kowane aikin sa-kai, har da marar haɗari, ya ƙunsa a tantancewa?", options: ["Fom ɗin nema da bayanan tuntuɓa da lambar gaggawa, da ɗan tattaunawa", "Binciken tarihi ga kowa", "Babu tantancewa kwata-kwata", "Binciken bashi (credit check)"], answer: 0, why: "Kowane aiki yana samun fom ɗin nema, lambar gaggawa da ɗan tattaunawa; ayyuka masu haɗari sosai suna ƙara wasu matakai." },
            { objective: "O2", q: "Sabon aiki yana sa masu aikin sa-kai su yi karatu tare da tsofaffi a gidan kula da tsofaffi. Me za ku ƙara?", options: ["Babu wani ƙari", "Doguwar wasiƙar godiya", "Shaidar mutane da binciken tarihi da rubutaccen izini", "Saƙo a kafofin sada zumunta game da mazauna gidan"], answer: 2, why: "Ayyukan da suka shafi manya masu rauni suna buƙatar duba shaidar mutane da binciken tarihi da aka yi da izini." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Karɓar sababbin masu aikin sa-kai da horar da su",
          minutes: 5,
          goal: "Tsara gajeriyar gabatarwa da horon aiki da za su shirya sababbin masu aikin sa-kai kuma su sa su ji ana maraba da su.",
          text: [
            "Ranar farko ce ke yanke ko masu aikin sa-kai da yawa za su dawo. Karɓar sababbi (onboarding) shi ne duk abin da ke faruwa daga lokacin da suka ce \"eh\" har su sami ƙarfin gwiwa a aikin: saƙon maraba, gabatarwa, horon aikin da lokacin aiki na farko mai daɗi.",
            "Gabatarwa tana bayanin manufar ƙungiyar da mutanen da kuke yi wa hidima, inda abubuwa suke, wanda za a tambaya, matakan tsaro da na gaggawa, dokokin sirri (misali, kada a raba sunaye ko hotunan mutanen da ake yi wa hidima), da yadda ake sa hannu da soke zuwa. Horon aiki yana nuna musu yadda ake yin aikin: ku yi bayani, ku nuna, ku bar su su gwada, sannan ku ba da ra'ayi. Gajeren jerin dubawa (checklist) ko bidiyo yana taimaka musu su tuna.",
            "Ku haɗa sababbin masu aikin sa-kai da abokin aiki (buddy) mai gogewa a lokacin aikinsu na farko, kuma ku tambaye su bayan haka: \"Yaya ya kasance? Me ya rikitar da ku?\""
          ],
          steps: ["Ku aika saƙon maraba da lokaci, wuri da wanda za su nema.", "Ku yi gabatarwa: manufa, tsarin wurin, tsaro, sirri, sa hannu da soke zuwa.", "Ku horar da aikin: bayani, nunawa, bar su su gwada, ba da ra'ayi.", "Ku ba su jerin dubawa mai sauƙi.", "Ku haɗa su da abokin aiki.", "Ku tambaye su bayan lokacin aikinsu na farko."],
          words: [["Karɓar sababbi (onboarding)", "matakan da ke taimaka wa sabon mai aikin sa-kai ya fara kuma ya ji ana maraba da shi."], ["Gabatarwa (orientation)", "zaman farko da ke bayanin ƙungiyar, dokokinta da tsaro."], ["Sirri (confidentiality)", "kiyaye bayanan sirri na mutanen da kuke yi wa hidima a ɓoye."]],
          slides: [
            { title: "Ranar farko tana da muhimmanci", bullets: ["Saƙon maraba", "Gabatarwa", "Horon aiki", "Lokacin aiki na farko mai daɗi"] },
            { title: "Gabatarwa tana ƙunsar", bullets: ["Manufa da mutanen da kuke yi wa hidima", "Tsarin wuri, wanda za a tambaya, tsaro", "Dokokin sirri", "Sa hannu da soke zuwa"] },
            { title: "Horon da ke zama a kai", bullets: ["Bayani, nunawa, bar su su gwada, ba da ra'ayi", "Gajeren jerin dubawa ko bidiyo"] },
            { title: "Bayan lokacin aiki na farko", bullets: ["Ku haɗa su da abokin aiki", "Ku tambaya: \"Yaya ya kasance? Me ya rikitar da ku?\""] }
          ],
          tryIt: "Ku rubuta tsarin gabatarwa na minti 30 don aikinku, da lokacin kowane sashe. Sannan ku rubuta horon aikin a matakai huɗu: bayani, nunawa, gwadawa, ra'ayi.",
          youCanNow: "karɓar sababbin masu aikin sa-kai da horar da su ta yadda za su kasance lafiya, da ƙarfin gwiwa, kuma su so dawowa.",
          quickCheck: [
            { objective: "O3", q: "Mene ne karɓar sababbi (onboarding)?", options: ["Imel na farko da kuke aikawa kawai", "Kawo ƙarshen aikin mai aikin sa-kai", "Duk abin da ke faruwa daga \"eh\" har zuwa samun ƙarfin gwiwa a aikin", "Ƙirga awoyin aikin sa-kai"], answer: 2, why: "Karɓar sababbi ya haɗa da maraba, gabatarwa, horon aiki da lokacin aiki na farko mai daɗi." },
            { objective: "O3", q: "Sabon mai aikin sa-kai zai fara ranar Asabar. Me ya fi taimakawa a lokacin aikinsa na farko?", options: ["Ku haɗa shi da abokin aiki mai gogewa, ku tambaye shi bayan haka", "Ku bar shi shi kaɗai ya gane da kansa", "Ku ba shi aiki mafi wuya", "Ku tsallake gabatarwa don ajiye lokaci"], answer: 0, why: "Abokin aiki yana ba shi wanda zai tambaya, kuma tambayarsa bayan haka tana nuna abin da ya rikitar da shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shigo da masu aikin sa-kai",
        questions: [
          { objective: "O1", q: "Mene ne hanya mafi kyau ta fara bayanin aikin sa-kai?", options: ["Da dokoki", "Da tasirin da aikin ke yi", "Da ranar ƙarshe", "Da binciken tarihi"], answer: 1, why: "Farawa da tasiri yana sa aikin ya ja hankali." },
          { objective: "O2", q: "Mene ne dalilin da ya fi yawa da yasa mutane ke fara aikin sa-kai?", options: ["Wani ya roƙe su", "Babban allon talla", "Fom ɗin haraji", "Imel kawai daga wani"], answer: 0, why: "Roƙon mutum da kanku shi ne hanya mafi ƙarfi ta neman masu aikin sa-kai." },
          { objective: "O2", q: "Mai aikin sa-kai zai koyar da yara bayan makaranta. Wace tantancewa ake buƙata?", options: ["Babu komai", "Suna kawai", "Murmushi a ƙofa kawai", "Fom ɗin nema, shaidar mutane da binciken tarihi da rubutaccen izini"], answer: 3, why: "Ayyukan da suka shafi yara suna buƙatar tantancewa mafi ƙarfi." },
          { objective: "O2", q: "Wa ya kamata ku tambaya game da dokokin binciken tarihi ga masu aikin sa-kai?", options: ["Abokin wani mai aikin sa-kai", "Babu kowa", "Kamfanin inshorarku da lauya", "Saƙo a kafofin sada zumunta"], answer: 2, why: "Dokoki sun bambanta bisa jiha, kuma kamfanonin inshora na iya samun sharuɗɗa." },
          { objective: "O3", q: "Wanne ne ya dace a gabatarwar masu aikin sa-kai?", options: ["Dokokin sirri game da mutanen da kuke yi wa hidima", "Adireshin gidajen mutanen da ake yi wa hidima", "Albashin ma'aikata", "Gulma game da masu ba da gudummawa"], answer: 0, why: "Dole masu aikin sa-kai su san yadda za su kiyaye sirrin mutane." }
        ]
      }
    },
    {
      name: "Babi na 2: Riƙe masu aikin sa-kai",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara jadawali da kula da masu aikin sa-kai",
          minutes: 5,
          goal: "Gina jadawalin masu aikin sa-kai da masu maye gurbi, kuma ku kula da su ta hanya mai tallafi.",
          text: [
            "Ku sa jadawalin ya zama mai sauƙin gani da sauƙin canjawa. Kalandar da ake rabawa, kayan rajista kyauta ko tebur (spreadsheet) mai sauƙi duk suna aiki. Ku sanar da lokutan aiki da wuri, ku aika tunatarwa kwana ɗaya ko biyu kafin lokaci, kuma ku sa soke zuwa ya zama mai sauƙi don mutane su faɗa muku maimakon kawai su ƙi zuwa. Ku shirya jerin masu maye gurbi don muhimman lokutan aiki.",
            "Kowane lokacin aiki ya kamata ya kasance da mai kula ko shugaban masu aikin sa-kai da aka ambaci sunansa, wanda ke tarbar mutane, raba ayyuka, amsa tambayoyi da magance matsaloli. Kula da masu aikin sa-kai kamar kula da ma'aikata ne, amma da sauƙi: ayyuka a sarari, tambayar halin da suke ciki akai-akai, da ra'ayi cikin sauri da ladabi.",
            "Idan mai aikin sa-kai bai dace ba, ku yi magana da shi a keɓe, ku faɗi abin da ya faru daidai, ku tambayi abin da zai taimaka. Wani lokaci wani aiki daban ya fi dacewa. Idan wani ya karya dokokin tsaro ko na ɗabi'a, ku bi manufofinku (policy), wanda zai iya haɗawa da kawo ƙarshen aikinsa na sa-kai."
          ],
          steps: ["Ku yi amfani da kalandar da ake rabawa, kayan rajista ko tebur.", "Ku sanar da lokutan aiki da wuri, ku aika tunatarwa.", "Ku sa soke zuwa ya zama mai sauƙi; ku riƙe jerin masu maye gurbi.", "Ku ambaci sunan mai kula ga kowane lokacin aiki.", "Ku ba da ayyuka a sarari da ra'ayi cikin sauri da ladabi.", "Ku magance matsaloli a keɓe; ku bi manufofinku idan an karya dokokin tsaro."],
          words: [["Lokacin aiki (shift)", "ƙayyadadden lokaci da mai aikin sa-kai ke aiki."], ["Shugaban lokacin aiki (shift lead)", "mutumin da ke kula da masu aikin sa-kai a lokacin aiki."], ["Jerin masu maye gurbi (backup list)", "masu aikin sa-kai da za ku iya kira idan wani ya soke zuwa."]],
          slides: [
            { title: "Jadawalin da ke aiki", bullets: ["Mai sauƙin gani, mai sauƙin canjawa", "Ku sanar da wuri, ku tunatar kwana ɗaya ko biyu kafin lokaci", "Soke zuwa cikin sauƙi da jerin masu maye gurbi"] },
            { title: "Shugaba mai suna a kowane lokacin aiki", bullets: ["Yana tarbar mutane", "Yana raba ayyuka, yana amsa tambayoyi", "Yana magance matsaloli"] },
            { title: "Kula da masu aikin sa-kai", bullets: ["Ayyuka a sarari da tambayar halin da suke ciki", "Ra'ayi cikin sauri da ladabi", "Bai dace ba? Ku yi magana a keɓe; ku gwada wani aiki"] }
          ],
          tryIt: "Ku yi jadawalin wata ɗaya don aikinku a tebur (spreadsheet) ko a takarda: kwanan wata, lokutan aiki, sunayen masu aikin sa-kai, sunan shugaban lokacin aiki da sunaye biyu na masu maye gurbi. Ku rubuta saƙon tunatarwa da za ku aika.",
          youCanNow: "gina jadawalin masu aikin sa-kai da tunatarwa da masu maye gurbi, da kula da masu aikin sa-kai ta hanya a sarari mai tallafi.",
          quickCheck: [
            { objective: "O4", q: "Mene ne jerin masu maye gurbi?", options: ["Kwafin kasafin kuɗi", "Jerin masu aikin sa-kai da suka daina", "Tsofaffin jadawali", "Mutanen da za ku iya kira idan wani ya soke wani muhimmin lokacin aiki"], answer: 3, why: "Jerin masu maye gurbi yana tabbatar da cewa muhimman lokutan aiki suna da mutane idan shirye-shirye sun canja." },
            { objective: "O4", q: "Mai aikin sa-kai yana ci gaba da yin kuskure a aikinsa. Me za ku fara yi?", options: ["Ku faɗa wa dukan ƙungiyar", "Ku yi magana da shi a keɓe, ku faɗi abin da ya faru daidai, ku tambayi abin da zai taimaka", "Ku daina sa shi a jadawali ba tare da faɗin dalili ba", "Ku yi watsi da shi"], answer: 1, why: "Ku magance matsaloli a keɓe da ladabi; wani aiki daban na iya fi dacewa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yabo da riƙe masu aikin sa-kai",
          minutes: 5,
          goal: "Tsara yabon da ya dace da masu aikin sa-kai kuma ku gane dalilin da yasa masu aikin sa-kai ke tafiya.",
          text: [
            "Masu aikin sa-kai sau da yawa suna daina zuwa domin sun ji ba a buƙatar su, ba a tsara abubuwa da kyau ba, ba a horar da su ba, ko ba a gode musu ba, ko kuma domin rayuwa ta cika musu aiki. Riƙe su ya fi sauƙi da arha fiye da nemo sababbi.",
            "Ku gode wa mutane akai-akai kuma a fili: \"Lokutan aikinku na Asabar sun taimaka mana mu cika akwatuna 600 a wannan watan.\" Ku raba labaran tasirin aikin, da izinin mutanen da ake yi wa hidima. Ku haɗa ƙananan godiya ta yau da kullum (wasiƙa, ambaton suna a gaban jama'a, saƙon tes) da manyan lokuta (bikin godiya, takardar shaida, wasiƙar shaida don neman aiki ko makaranta).",
            "Ku tambayi masu aikin sa-kai abin da suke so: sababbin ƙwarewa, abokai, shugabanci, sassauci. Ku ba su damar ci gaba, kamar horar da sababbin masu aikin sa-kai ko jagorantar lokacin aiki. Ku tambayi waɗanda suka tafi dalili, ku yi amfani da abin da kuka koya."
          ],
          steps: ["Ku gode wa mutane akai-akai kuma a fili.", "Ku raba labaran tasiri, da izini.", "Ku haɗa ƙananan godiya da manyan lokuta.", "Ku tambayi kowane mai aikin sa-kai abin da yake so daga aikin.", "Ku ba da ayyukan ci gaba.", "Ku tambayi waɗanda suka tafi dalili."],
          words: [["Riƙewa (retention)", "sa masu aikin sa-kai su ci gaba da dawowa a tsawon lokaci."], ["Yabo (recognition)", "nuna wa masu aikin sa-kai cewa ana ganin aikinsu kuma ana daraja shi."]],
          slides: [
            { title: "Dalilin da yasa masu aikin sa-kai ke tafiya", bullets: ["Sun ji ba a buƙatar su ko ba a horar da su ba", "Rashin tsari", "Ba a taɓa gode musu ba, ko rayuwa ta cika musu aiki"] },
            { title: "Ku gode musu da kyau", bullets: ["Akai-akai kuma a fili", "Ku raba labaran tasiri, da izini", "Ƙananan godiya da manyan lokuta"] },
            { title: "Ku taimaka musu su ci gaba", bullets: ["Ku tambayi abin da suke so", "Ku ba da horo da ayyukan shugabanci", "Ku tambayi waɗanda suka tafi dalili"] }
          ],
          tryIt: "Ku rubuta ra'ayoyi biyu na yabo ga masu aikin sa-kai: ƙaramar godiya ɗaya da za ku iya bayarwa a wannan makon da babban lokaci ɗaya na wannan shekarar. Sannan ku rubuta tambayoyi uku da za ku yi wa mai aikin sa-kai game da abin da yake so daga aikin.",
          youCanNow: "yaba wa masu aikin sa-kai ta hanyoyin da ke da muhimmanci a gare su, da ɗaukar mataki kan dalilan da ke sa masu aikin sa-kai su tafi.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne dalilin da aka saba gani da yasa masu aikin sa-kai ke daina zuwa?", options: ["Sun ji ba a buƙatar su ko ba a gode musu ba", "An gode musu sau da yawa", "Lokutan aiki suna da tsari mai kyau", "Suna da abokin aiki"], answer: 0, why: "Jin cewa ba a buƙatar su, rashin tsari, rashin horo ko rashin godiya yana yawan sa masu aikin sa-kai su tafi." },
            { objective: "O5", q: "Mai aikin sa-kai mai aminci ya ce yana son gina ƙwarewar shugabanci. Me za ku ba shi?", options: ["Babu komai; masu aikin sa-kai ba sa ci gaba", "Ƙarin aiki iri ɗaya", "Damar jagorantar lokacin aiki ko horar da sababbin masu aikin sa-kai", "Ƙaramin aiki"], answer: 2, why: "Ayyukan ci gaba kamar jagorantar lokacin aiki suna taimakawa wajen riƙe masu aikin sa-kai da ke son ƙari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bin diddigin awoyin aikin sa-kai",
          minutes: 5,
          goal: "Kafa hanya mai sauƙi ta bin diddigin awoyin aikin sa-kai da amfani da lambobin.",
          text: [
            "Ku riƙa rubuta wanda ya yi aikin sa-kai, yaushe, tsawon lokaci da wane aiki. Takardar sa hannu da aka kwafa zuwa tebur (spreadsheet) tana aiki ga ƙananan ƙungiyoyi; fom kyauta ko manhajar masu aikin sa-kai na iya aiki ga manyan ƙungiyoyi. Ku sa ya zama mai sauƙi don mutane su riƙa sa hannu idan sun zo da lokacin da suka tafi.",
            "Lambobin suna taimaka muku: suna nuna tasiri a rahotannin tallafi (grant) da ga kwamitin gudanarwa, suna taimaka muku tsara yawan mutanen da ake buƙata, kuma suna taimaka muku gode wa masu aikin sa-kai mafiya aminci. Masu aikin sa-kai da yawa kuma suna buƙatar shaidar awoyi don makaranta, tallafin karatu (scholarship), kotu ko sharuɗɗan aikin hidimar al'umma, ko neman aiki. Ku kasance a shirye ku sa hannu a wasiƙa ko fom da ke tabbatar da awoyinsu.",
            "Ku kiyaye bayanan masu aikin sa-kai a sirri kuma lafiya, kuma ku tattara abin da kuke buƙata kawai. Bayanin haraji ga masu aikin sa-kai (a Amurka): IRS (hukumar haraji ta Amurka) ta ce ba a cire darajar lokacin aikin sa-kai daga haraji, amma wasu kuɗaɗen da mutum ya kashe daga aljihunsa ba a mayar masa ba za a iya cire su. Ku tura masu aikin sa-kai zuwa IRS Publication 526 da ƙwararren haraji maimakon ba da shawarar haraji."
          ],
          steps: ["Ku zaɓi hanyar sa hannu: takarda, fom ko manhaja.", "Ku rubuta suna, kwanan wata, lokacin farawa da gamawa, da aiki.", "Ku shigar da bayanan a tebur ɗaya kowane mako.", "Ku haɗa awoyi bisa mai aikin sa-kai, bisa wata da bisa shiri.", "Ku yi amfani da jimlar a rahotanni, tsare-tsare da godiya.", "Ku kiyaye bayanai a sirri; ku sa hannu a wasiƙun shaidar awoyi idan an nema."],
          words: [["Takardar sa hannu (sign-in sheet)", "fom mai sauƙi da masu aikin sa-kai ke rubuta sunansu da lokacin da suka fara da gamawa."], ["Shaidar awoyi (proof of hours)", "wasiƙa ko fom da aka sa hannu da ke tabbatar da awoyi nawa wani ya yi aikin sa-kai."], ["Rahoton tallafi (grant report)", "rahoto ga mai ba da tallafi da ke nuna abin da aka yi da kuɗinsa."]],
          slides: [
            { title: "Ku rubuta muhimman abubuwa", bullets: ["Wa, yaushe, tsawon lokaci, wane aiki", "Takarda, fom kyauta, ko manhaja", "Ku sa ya zama mai sauƙi"] },
            { title: "Ku yi amfani da lambobin", bullets: ["Rahotannin tallafi da labarai ga kwamitin gudanarwa", "Tsara lokutan aiki", "Gode wa masu aikin sa-kai masu aminci"] },
            { title: "Shaidar awoyi", bullets: ["Don makaranta, tallafin karatu, kotu ko aiki", "Ku kasance a shirye ku sa hannu a wasiƙa ko fom"] },
            { title: "Sirri da haraji", bullets: ["Ku tattara abin da kuke buƙata kawai; ku kiyaye shi", "Ba a cire lokacin aikin sa-kai daga haraji (IRS)", "Ku tura su zuwa IRS Publication 526 da ƙwararren haraji"] }
          ],
          sources: [{ name: "IRS Publication 526, Charitable Contributions (gudummawar sadaka)", url: "https://www.irs.gov/publications/p526" }],
          tryIt: "Aikin ƙarshe: ku haɗa kayan aikin sa-kai don aiki ɗaya: bayanin aiki, saƙon neman masu aikin sa-kai da matakan tantancewa, tsarin gabatarwa na minti 30, jadawalin wata ɗaya da shugaban lokacin aiki, ra'ayoyi biyu na yabo, da takardar sa hannu ko tebur mai ginshiƙai na suna, kwanan wata, farawa, gamawa, awoyi da aiki.",
          youCanNow: "bin diddigin awoyin aikin sa-kai cikin sauƙi da amfani da lambobin don rahotanni, tsare-tsare, godiya da shaidar awoyi.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za a bi diddigin awoyin aikin sa-kai?", options: ["Don karɓar kuɗi daga masu aikin sa-kai", "Don nuna tasiri a rahotannin tallafi da na kwamiti, da tsara yawan mutanen da ake buƙata", "Don raba bayanan masu aikin sa-kai ga jama'a", "Domin ana biyan masu aikin sa-kai bisa awa"], answer: 1, why: "Jimlar awoyi tana nuna tasiri, tana taimakawa wajen tsarawa, kuma tana taimaka muku gode wa masu aikin sa-kai masu aminci." },
            { objective: "O6", q: "Mai aikin sa-kai ya tambaya ko zai iya cire darajar lokacinsa daga harajinsa. Me za ku yi?", options: ["Ku ce eh, a kowane farashin awa", "Ku yi masa lissafin harajinsa", "Ku yi watsi da tambayar", "Ku tura shi zuwa IRS Publication 526 da ƙwararren haraji"], answer: 3, why: "Darasin ya ce kada a ba da shawarar haraji; ku tura masu aikin sa-kai zuwa IRS Publication 526 da ƙwararren haraji." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Riƙe masu aikin sa-kai",
        questions: [
          { objective: "O4", q: "Masu aikin sa-kai suna ci gaba da rashin zuwa lokacin aiki ba tare da sun faɗa muku ba. Me zai fara taimakawa?", options: ["Ku hana su duka", "Ku daina tsara jadawali", "Ku aika tunatarwa kuma ku sa soke zuwa ya zama mai sauƙi", "Ku ninka tsawon lokacin aiki"], answer: 2, why: "Tunatarwa da soke zuwa cikin sauƙi suna rage rashin zuwa." },
          { objective: "O4", q: "Wa ya kamata a ambaci sunansa ga kowane lokacin aiki?", options: ["Mai ba da gudummawa", "Shugaban lokacin aiki ko mai kula", "Sabon mai aikin sa-kai", "Babu kowa"], answer: 1, why: "Shugaba mai suna yana tarbar mutane, yana jagoranci kuma yana magance matsaloli." },
          { objective: "O5", q: "Wace godiya ce ta fi yiwuwa ta zama mai muhimmanci ga mai aikin sa-kai?", options: ["\"Na gode, kowa.\"", "Babu godiya; aikin sa-kai ne", "Imel na gama-gari sau ɗaya a shekara", "\"Lokutan aikinku na Asabar sun taimaka mana mu cika akwatuna 600 a wannan watan.\""], answer: 3, why: "Godiya a fili da ke ambaton tasirin aikin ita ce ta fi ma'ana." },
          { objective: "O6", q: "Wani matashi yana buƙatar shaidar awoyi 40 na aikin sa-kai don makaranta. Ya kamata ku:", options: ["Yi amfani da bayanan awoyinku ku sa hannu a wasiƙar da ke tabbatar da su", "Ƙi", "Yi hasashen awoyin", "Ce masa ya tambayi IRS"], answer: 0, why: "Bin diddigi mai kyau yana ba ku damar tabbatar da awoyi daidai." },
          { objective: "O6", q: "Bisa ga IRS, mai aikin sa-kai zai iya cire darajar lokacinsa daga haraji?", options: ["Eh, a kowane farashi da ya zaɓa", "Eh, a mafi ƙarancin albashi", "A'a, ba a cire darajar lokaci ko hidima", "Sai a ƙarshen mako kawai"], answer: 2, why: "IRS Publication 526 ta ce ba a cire darajar lokacinku daga haraji." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kula da Masu Aikin Sa-kai",
    questions: [
      { objective: "O1", q: "Bayanin aikin sa-kai ya kamata ya ƙunsa:", options: ["Sunan aikin kawai", "Abin da za su yi, yaushe, me yasa yake da muhimmanci da wanda za su kai rahoto gare shi", "Albashin mai aikin sa-kai", "Sunayen masu ba da gudummawa"], answer: 1, why: "Cikakken bayani a sarari yana taimaka wa masu aikin sa-kai su yi nasara." },
      { objective: "O1", q: "Me yasa za a ba da ayyuka gajeru masu sassauci?", options: ["Mutane da yawa za su iya ba da ɗan lokaci amma ba kowane mako ba", "Sun fi sauƙin mantawa", "Ba sa buƙatar horo", "Suna maye gurbin ma'aikata"], answer: 0, why: "Ayyuka masu sassauci suna buɗe ƙofa ga ƙarin masu aikin sa-kai." },
      { objective: "O1", q: "Bankin abinci yana buƙatar masu tarba, masu ware kaya da direbobi. Bayanin aiki nawa?", options: ["Ɗaya ga duka", "Babu", "Ɗaya ga kowane aiki", "Na direbobi kawai"], answer: 2, why: "Kowane aiki yana da ayyuka da buƙatu daban." },
      { objective: "O2", q: "Wace hanyar neman masu aikin sa-kai ce ta fi aiki yawanci?", options: ["Jiran mutane su same ku", "Sanarwa sau ɗaya da fata", "Roƙon ma'aikata kawai", "Roƙon mutane da kanku, har da ta hanyar masu aikin sa-kai da kuke da su"], answer: 3, why: "Roƙon mutum da kanku yana kawo mafi yawan masu aikin sa-kai." },
      { objective: "O2", q: "Ya kamata a daidaita tantancewa da:", options: ["Haɗarin aikin", "Kamannin mai aikin sa-kai", "Yanayin iska", "Yanayin zuciyar mai shiryawa"], answer: 0, why: "Ayyuka masu haɗari sosai suna buƙatar ƙarin tantancewa." },
      { objective: "O2", q: "Ya kamata a yi binciken tarihi:", options: ["A ɓoye", "Da rubutaccen izinin mutumin", "Bayan wani abu ya faru kawai", "Ta hanyar tambayar maƙwabta"], answer: 1, why: "Izini wajibi ne kuma alamar girmamawa ne." },
      { objective: "O2", q: "Wace ce doka mai kyau ta tsaro ga shirye-shiryen matasa?", options: ["Kowane babban mutum zai iya kasancewa shi kaɗai tare da yaro a ko'ina", "Ana ɓoye damuwa", "Babu babban mutum shi kaɗai tare da yaro inda ba a ganinsu", "Tantancewa ba dole ba ce"], answer: 2, why: "Wannan dokar tana kare yara da masu aikin sa-kai." },
      { objective: "O2", q: "Dokokin binciken tarihi ga masu aikin sa-kai:", options: ["Iri ɗaya ne a ko'ina", "Babu su", "Masu aikin sa-kai ne ke kafa su", "Sun bambanta bisa jiha da shiri; ku tambayi kamfanin inshorarku da lauya"], answer: 3, why: "Sharuɗɗa sun bambanta, don haka ku duba abin da ya shafe ku." },
      { objective: "O3", q: "Karɓar sababbi (onboarding) yana nufin:", options: ["Duk abin da ke taimaka wa sabon mai aikin sa-kai ya fara kuma ya ji ana maraba da shi", "Korar mai aikin sa-kai", "Tara kuɗi", "Sayen kayan aiki"], answer: 0, why: "Ya ƙunshi maraba, gabatarwa, horo da lokacin aiki na farko." },
      { objective: "O3", q: "Matakai huɗu na horon aiki su ne:", options: ["Karanta, sa hannu, tafi, manta", "Bayani, nunawa, bar su su gwada, ba da ra'ayi", "Faɗa, gwada, faɗi, maimaita", "Kalla, jira, yi hasashe, tafi"], answer: 1, why: "Horon nunawa da gwadawa yana gina ƙwarewa da ƙarfin gwiwa." },
      { objective: "O3", q: "Haɗa sabon mai aikin sa-kai da abokin aiki yana taimakawa domin:", options: ["Yana ninka aikin takardu", "Yana maye gurbin gabatarwa", "Yana da wanda zai tambaya a lokacin aikinsa na farko", "Abokan aiki ne ke yin dukan aikin"], answer: 2, why: "Abokin aiki yana sa lokacin aiki na farko ya fi sauƙi da daɗi." },
      { objective: "O3", q: "Mai aikin sa-kai ya saka hoton wani da ake yi wa hidima a intanet. Wane batun gabatarwa aka tsallake?", options: ["Ajiye mota", "Dokokin sirri", "Kayan ciye-ciye", "Tara kuɗi"], answer: 1, why: "Dole masu aikin sa-kai su kiyaye sirrin mutanen da ake yi wa hidima." },
      { objective: "O4", q: "Jadawalin masu aikin sa-kai mai kyau shi ne:", options: ["Mai sauƙin gani da sauƙin canjawa", "Wanda ke cikin kan mutum ɗaya kawai", "Wanda aka sanar a daren da ya gabata", "Wanda ba a taɓa raba shi ba"], answer: 0, why: "Ganuwa da sassauci suna rage gibi." },
      { objective: "O4", q: "Jerin masu maye gurbi na:", options: ["Korar masu aikin sa-kai ne", "Rahotannin tallafi ne", "Ajiye tsofaffin jadawali ne", "Kira idan wani ya soke wani muhimmin lokacin aiki ne"], answer: 3, why: "Masu maye gurbi suna tabbatar da cewa muhimman lokutan aiki suna da mutane." },
      { objective: "O4", q: "Mai aikin sa-kai yana fama a aikin shigar da bayanai amma yana son magana da mutane. Kuna iya:", options: ["Yin watsi da shi", "Kunyata shi a gaban jama'a", "Yin magana da shi a keɓe ku ba shi aikin tarba", "Cire shi ba tare da faɗin kome ba"], answer: 2, why: "Aikin da ya fi dacewa sau da yawa yana magance matsalar." },
      { objective: "O5", q: "Wanne ne dalilin da aka saba gani da yasa masu aikin sa-kai ke daina zuwa?", options: ["An gode musu da yawa", "Sun ji ba a buƙatar su ko ba a taɓa gode musu ba", "Lokutan aiki suna da tsari mai kyau", "Suna da horo a sarari"], answer: 1, why: "Jin cewa ba a buƙatar su ko ba a gode musu ba yana korar mutane." },
      { objective: "O5", q: "Idan kuna raba labaran tasiri game da mutanen da kuke yi wa hidima, ya kamata ku:", options: ["Sami izininsu", "Yi amfani da cikakken sunansu ba tare da tambaya ba", "Ƙirƙiri wasu bayanai", "Raba adireshin gidansu"], answer: 0, why: "Girmamawa da sirri su ne farko." },
      { objective: "O5", q: "Mai aikin sa-kai da ya daɗe yana son ci gaba. Kuna iya:", options: ["Bar shi a aiki ɗaya har abada", "Ce masa ya tafi", "Ba shi aikin share-share kawai", "Gayyace shi ya horar da sababbin masu aikin sa-kai ko ya jagoranci lokacin aiki"], answer: 3, why: "Ayyukan ci gaba suna sa masu aikin sa-kai masu ƙwazo su ci gaba da himma." },
      { objective: "O6", q: "Bayanin sa hannun mai aikin sa-kai ya kamata ya ƙunsa:", options: ["Bayanan bankinsa", "Suna, kwanan wata, lokacin farawa da gamawa, da aiki", "Kalmar sirrinsa", "Sa hannu kawai"], answer: 1, why: "Waɗannan muhimman abubuwa suna ba ku damar haɗa awoyi daidai." },
      { objective: "O6", q: "Mai aikin sa-kai ya tambaya ko zai iya cire kuɗin man fetur na tuƙi zuwa aikin sa-kai daga haraji. Ya kamata ku:", options: ["Ce eh, kowane adadi", "Ce haramun ne", "Tura shi zuwa IRS Publication 526 da ƙwararren haraji", "Yi watsi da tambayar"], answer: 2, why: "Wasu kuɗaɗen da aka kashe daga aljihu za a iya cire su; ya kamata ya duba majiyar hukuma." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      8,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bayanin aiki",
        objective: "O1",
        notYet: "Babu lokaci, ayyuka ko wanda za su kai rahoto gare shi.",
        meets: "Dukkan sassa biyar, ana farawa da tasiri.",
        exceeds: "Yana kuma ba da zaɓi gajere mai sassauci ga mutanen da ba su da lokaci sosai."
      },
      {
        name: "Neman masu aikin sa-kai da tantancewa",
        objective: "O2",
        notYet: "Babu tantancewa, ko aikin da ya shafi yara ko manya masu rauni ba shi da binciken tarihi.",
        meets: "Saƙon neman masu aikin sa-kai da tantancewa da suka dace da haɗarin aikin, da rubutaccen izini don bincike.",
        exceeds: "Yana kuma ƙara dokokin tsaro da bayanin a tambayi kamfanin inshora da lauya."
      },
      {
        name: "Gabatarwa da horo",
        objective: "O3",
        notYet: "Babu tsarin gabatarwa, ko babu tsaro da sirri a ciki.",
        meets: "Tsarin minti 30 da lokuta, da ya ƙunshi tsaro, sirri, sa hannu da soke zuwa, tare da bayani, nunawa, gwadawa, ra'ayi.",
        exceeds: "Yana kuma haɗa da abokin aiki da tambayar halin da ake ciki bayan lokacin aiki na farko."
      },
      {
        name: "Jadawali da kulawa",
        objective: "O4",
        notYet: "Lokutan aiki ba su da shugaba ko babu masu maye gurbi.",
        meets: "Jadawalin wata ɗaya da sunan shugaban lokacin aiki, masu maye gurbi biyu da saƙon tunatarwa.",
        exceeds: "Yana kuma faɗin yadda masu aikin sa-kai ke soke zuwa da wanda ke magance matsaloli."
      },
      {
        name: "Yabo da awoyi",
        objective: "O5",
        notYet: "Babu tsarin godiya ko babu hanyar bin diddigin awoyi.",
        meets: "Ra'ayi ɗaya na ƙaramin yabo da ɗaya na babba, da takardar sa hannu mai suna, kwanan wata, farawa, gamawa, awoyi da aiki.",
        exceeds: "Yana kuma faɗin yadda za a yi amfani da jimlar awoyi a rahotanni da godiya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu aikin sa-kai da har yanzu suke aiki kwanaki 90 bayan lokacin aikinsu na farko, idan aka kwatanta da kafin kwas ɗin",
      "Ayyukan da suka shafi yara ko manya masu rauni da ke da rubutaccen tantancewa da dokokin tsaro",
      "Jimlar awoyin aikin sa-kai da aka bi diddigi kuma aka kai rahoto ga kwamitin gudanarwa ko a rahotannin tallafi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko waya mai tebur (spreadsheet) ko kayan rajista kyauta, ko takarda",
      "Aikin sa-kai ɗaya na gaske da za a tsara shi",
      "Takarda ko daftari don kayan aikin sa-kai",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku sa kowane mai koyo ya haɗa kayan don aiki na gaske a ƙungiyarsa domin ya kasance a shirye don amfani.",
      "Ga ayyukan da suka shafi yara ko manya masu rauni, ku jaddada tantancewa da dokokin tsaro, kuma ku gaya wa masu koyo su tabbatar da sharuɗɗa da kamfanin inshorarsu da lauya.",
      "Ku tunatar da masu koyo kada su tattara bayanan masu aikin sa-kai fiye da abin da suke buƙata, kuma su kiyaye bayanai a sirri.",
      "Ku haɗa masu koyo bibbiyu don su musanya kuma su duba bayanan aiki da tsarin gabatarwa na juna.",
      "Ku ba da maki ga kayan da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
