"use strict";

// Koach Learn course, Hausa (ha) translation of shared/safe-labor-migration.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "safe-labor-migration-ha",
  lang: "ha",
  translationOf: "safe-labor-migration",
  category: "Workforce Development",
  name: "Tafiya Ƙasar Waje Don Aiki Lafiya",
  skills: "Nemo bayanan hukuma kan tafiya aiki, Duba lasisin hukumar ɗaukar ma'aikata, Gane masu ɗaukar ma'aikata na bogi, Karanta tayin aiki da kwangila, Gane fataucin mutane da neman taimako, Yin jerin abubuwan tsaro na tafiya aiki",
  outcome: "shirya tafiya ƙasar waje don aiki ta hanyar doka: duba cewa mai ɗaukar ma'aikata yana da lasisi, ƙin duk aikin da ke neman ku biya kuɗi don samun sa, karanta kwangila kafin ku sa hannu, sanin alamun fataucin mutane da inda ake samun taimako, da riƙe jerin abubuwan tsaro na tafiyarku.",
  about: [
    "Kowace shekara miliyoyin mutane suna tafiya wata ƙasa don aiki: ma'aikatan jinya daga Philippines da Najeriya, direbobi da magina daga India da Kenya, manoma daga Mexico, masu kula da marasa lafiya daga Ghana da Colombia, ma'aikatan shago da otal daga Morocco, Masar da Senegal. Yawancinsu suna samun aiki na gaskiya. Wasu kuma masu ɗaukar ma'aikata na bogi suna cutar su, suna biyan kuɗi masu yawa, suna rasa fasfo ɗinsu, ko kuma su faɗa cikin aikin tilas.",
    "Wannan kwas ɗin yana koya muku yadda za ku kare kanku kafin ku tafi da bayan kun isa. Za ku koyi yadda ake nemo bayanan hukuma kan hanyoyin doka, yadda ake duba ko hukumar ɗaukar ma'aikata tana da lasisi, alamun aikin bogi, abin da tayin aiki da kwangila na adalci dole su faɗa, alamun fataucin mutane, da inda ake samun taimako.",
    "Kwas ɗin ba ya ba da shawarar shari'a ko ta biza, kuma ba ya samo muku aiki. Dokoki sun bambanta a kowace ƙasa kuma suna canjawa, don haka kowane darasi yana nuna muku inda za ku duba shafin hukuma na gwamnatinku da na ƙasar da kuke son yin aiki a cikinta.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku yi aikin \"Gwada yanzu\" a takarda ko waya. Akwai ɗan gwaji bayan kowane darasi da kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. A ƙarshe za ku sami jerin abubuwan tsaro na tafiyarku na kanku."
  ],
  finalTask: "Ku yi jerin abubuwan tsaro na tafiyarku a takarda ko waya don wani aiki na gaske da kuke tunani a ƙasar waje (ko tayin aiki na gwaji). Dole ya ƙunshi: shafukan gwamnati da na ofishin jakadanci na hukuma da za ku yi amfani da su; sunan hukumar ɗaukar ma'aikata da yadda kuka duba lasisinta; jerin kuɗaɗe da wanda zai biya su; bayanan aikin da kuke buƙata a rubuce kafin ku sa hannu; alamun haɗari da za su sa ku tsaya; da shirin neman taimako mai kwafin takardunku, amintaccen mutum a gida, da lambobin ofishin jakadanci da na taimako da kuka nemo da kanku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da ke tunanin yin aiki a ƙasar waje, galibi a Afirka, Asiya da Latin Amurka (misali Kenya, Najeriya, Ghana, Senegal, Morocco, Masar, India, Philippines, Mexico da Colombia), da iyalansu da ma'aikatan al'umma da ke ba su shawara. Da yawa sun ji labarin ayyuka daga abokai, kafofin sada zumunta ko wakilai na gida. An fassara kwas ɗin zuwa harsuna da yawa.",
    startingPoint: "Suna iya amfani da waya mai sauƙi da manhajojin aika saƙo. Sun san wani da ya yi aiki a ƙasar waje. Ba safai suke karanta kwangilar aiki ba, kuma ba su san cewa dole masu ɗaukar ma'aikata su sami lasisi ba, ko cewa bai kamata ma'aikata su biya kuɗin ɗaukar aiki ba.",
    gap: "Masu koyo suna buƙatar bambanta tayin aiki na doka da adalci da zamba ko tarkon fataucin mutane kafin su biya kuɗi, su ba da fasfo ko su yi tafiya. Ba tare da waɗannan ƙwarewar ba, mutane suna rasa ajiyarsu, suna ɗaukar bashi, kuma suna iya faɗawa cikin aikin tilas nesa da taimako.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli, don masu karatu a harshe na biyu da kuma fassara",
      "Na'urori: waya mai sauƙi ta zamani ko kwamfutar da ake rabawa; wasu ayyuka a takarda ne",
      "Dokoki sun bambanta a kowace ƙasa kuma suna canjawa sau da yawa: kwas ɗin yana nuna shafukan hukuma kuma ba ya ba da shawarar shari'a ko ta biza",
      "Tsaro: babu ainihin lambar fasfo, katin shaida ko ta banki a kowane atisaye; ana gaya wa masu koyo da ke cikin haɗari su fara kiran lambar gaggawa ta wurin",
      "Wasu masu koyo wataƙila suna cikin wahala a ƙasar waje tuni; kwas ɗin yana ba da hanyoyin taimako ba tare da zargi ba"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da intanet ba za su iya fara ɗaukar kwas ɗin \"Tushen Amfani da Intanet\"."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ƙasar da kuke son yin aiki a cikinta", action: "nemo shafukan gwamnati da na ofishin jakadanci na hukuma kan bizar aiki da hanyoyin doka", standard: "kuma ku bambanta shafin hukuma da shafin wakili ko na wanda ba ku sani ba" },
    { id: "O2", condition: "Idan aka ba ku sunan hukumar ɗaukar ma'aikata", action: "duba ko hukumar tana da lasisi daga hukumar ƙwadago ko ta tafiye-tafiyen aiki ta ƙasarku", standard: "kafin ku biya komai ko ku ba da takardu" },
    { id: "O3", condition: "Idan aka ba ku tallar aiki ko saƙo daga mai ɗaukar ma'aikata", action: "lissafa alamun haɗari na mai ɗaukar ma'aikata na bogi ko zambar aiki", standard: "kuna gano aƙalla alamomi 3 cikin 4 a tallar gwaji" },
    { id: "O4", condition: "Idan aka ba ku tayin aiki ko kwangila", action: "duba cewa an rubuta mai ɗaukar aiki, aikin, albashi, lokutan aiki, wurin aiki, kuɗaɗe da sharuɗɗan dawowa gida", standard: "kuma ku lissafa duk abin da ya ɓace ko aka canja kafin ku sa hannu" },
    { id: "O5", condition: "Idan aka ba ku labarin wani ma'aikaci a ƙasar waje", action: "gane alamun fataucin mutane ko aikin tilas da faɗin inda ake samun taimako", standard: "kuna ambaton aƙalla alamomi 3 da wurare 2 na samun taimako" },
    { id: "O6", condition: "Kafin ku bar gida", action: "rubuta jerin abubuwan tsaro na tafiya mai kwafin takardu, lambobin mutane da lambobin taimako", standard: "wanda ya ƙunshi kowane sashe na ma'aunin rubric na kwas ɗin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar hanya mai aminci kuma ta doka",
      lessons: [
        {
          title: "Hanyoyin doka da inda ake samun bayanan hukuma",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nemo shafukan hukuma kan yin aiki bisa doka a ƙasar da kuke son zuwa.",
          text: [
            "Hanyar doka tana nufin kuna tafiya da biza ko izinin aiki da ya dace da aikin, wanda gwamnatin ƙasar da za ku yi aiki a cikinta ta bayar. Yin aiki da bizar yawon shaƙatawa, ko ƙetare iyaka tare da mai safarar mutane, yana jefa ku cikin babban haɗari: ana iya kama ku, a mayar da ku gida, ko kuma mutanen da suka san kuna tsoron 'yan sanda su kama ku a tarko.",
            "Gwamnatoci ne kaɗai suke yanke hukunci kan biza da izinin aiki. Amintattun bayanai suna fitowa daga shafin intanet na hukumar shige da fice ta ƙasar da kuke son yin aiki a cikinta, ofishin jakadancinta ko na karamin jakadancinta a ƙasarku, da ma'aikatar ƙwadago ko ta tafiye-tafiyen aiki ta ƙasarku. Ƙasashe da yawa da mutane ke fitowa daga cikinsu suna da ofisoshin taimakon ma'aikata masu zuwa ƙasar waje, misali Department of Migrant Workers (Ma'aikatar Ma'aikata Masu Ƙaura) a Philippines da shafin eMigrate na Ma'aikatar Harkokin Waje ta India.",
            "Wakilai, shafukan kafofin sada zumunta, tashoshin bidiyo da abokai za su iya taimaka muku farawa, amma ba na hukuma ba ne. Ku duba kowane bayani da suka faɗa muku a shafin gwamnati. Wannan kwas ɗin ba ya ba da shawarar shari'a ko ta biza; idan al'amarinku yana da sarƙaƙiya, ku tambayi ofishin jakadanci ko lauya mai lasisi.",
            "Safarar mutane da fataucin mutane sun bambanta. Safara ita ce biyan wani don ya ƙetare da ku iyaka ba bisa doka ba. Fatauci shi ne idan wani ya ɗauki mutum ko ya kai shi wani wuri ta ƙarfi, ƙarya ko cin zarafi don ya ci moriyarsa ta hanyar zalunci. Masu safara za su iya zama masu fatauci, wannan wani ƙarin dalili ne na amfani da hanyoyin doka kaɗai."
          ],
          steps: ["Ku rubuta ƙasar da irin aikin.", "Ku nemi shafin intanet na hukuma na shige da fice ko na biza na wannan ƙasa, da ofishin jakadancinta a ƙasarku.", "Ku duba adireshin: gwamnatoci yawanci suna amfani da ƙarshen adireshi na hukuma kamar .gov, .gov.ph ko .go.ke; ku nemi tambarin gwamnati da shafin tuntuɓa.", "Ku nemo shafin game da bizar aiki ko izinin aiki ku rubuta abin da ya ce kuna buƙata.", "Ku nemo shafin ma'aikatar ƙwadago ko ta tafiye-tafiyen aiki ta ƙasarku don masu aiki a ƙasar waje."],
          words: [["Hanyar doka", "hanyar tafiya da yin aiki da gwamnatoci suka amince da ita, da biza ko izini da ya dace."], ["Izinin aiki", "izinin hukuma na yin aikin albashi a wata ƙasa (work permit)."], ["Ofishin jakadanci ko karamin jakadanci", "ofishin ƙasarku a wata ƙasa, ko ofishin wata ƙasa a ƙasarku, da ke kula da biza kuma yana taimakon 'yan ƙasa (embassy ko consulate)."], ["Safarar mutane", "biyan wani don ya ƙetare da ku iyaka ba bisa doka ba (smuggling)."], ["Fataucin mutane", "ɗaukar mutum ko kai shi wani wuri ta ƙarfi, ƙarya ko cin zarafi don a ci moriyarsa ta hanyar zalunci (trafficking)."]],
          slides: [
            { title: "Hanyar doka", bullets: ["Biza ko izinin aiki da ya dace da aikin", "Gwamnatin ƙasar da za ku yi aiki ce ke bayarwa", "Ba aiki da bizar yawon shaƙatawa, ba masu safara ba"] },
            { title: "Inda bayanan hukuma suke fitowa", bullets: ["Shafin hukumar shige da fice ta ƙasar da za ku je", "Ofishin jakadancinta ko karamin jakadancinta a ƙasarku", "Ma'aikatar ƙwadago ko ta tafiye-tafiyen aiki ta ƙasarku"] },
            { title: "Ba na hukuma ba", bullets: ["Wakilai, shafukan kafofin sada zumunta da tashoshin bidiyo", "Labaran abokai", "Ku duba kowane bayani a shafin gwamnati"] },
            { title: "Safara ba fatauci ba ce", bullets: ["Safara: biyan kuɗi don ƙetare iyaka ba bisa doka ba", "Fatauci: ƙarfi, ƙarya ko cin zarafi don zaluntar mutum", "Masu safara za su iya zama masu fatauci"] }
          ],
          sources: [
            { name: "UNODC: Human trafficking and migrant smuggling (Education for Justice)", url: "https://www.unodc.org/e4j/en/secondary/human-trafficking-and-migrant-smuggling.html" },
            { name: "Philippines Department of Migrant Workers (DMW)", url: "https://dmw.gov.ph/" },
            { name: "India Ministry of External Affairs: eMigrate", url: "https://emigrate.gov.in/" }
          ],
          tryIt: "Ku zaɓi ƙasa ɗaya da wataƙila kuke son yin aiki a cikinta. A waya ko kwamfuta, ku nemo (1) shafinta na hukuma na shige da fice ko na bizar aiki da (2) ofishin jakadancinta ko karamin jakadancinta a ƙasarku. Ku rubuta adireshin duka biyun a takarda da abu ɗaya da kowane shafi ya ce kuna buƙata.",
          youCanNow: "nemo shafukan gwamnati da na ofishin jakadanci na hukuma kan yin aiki a wata ƙasa, da bambanta su da shafukan wakilai.",
          quickCheck: [
            { objective: "O1", q: "Wa ke yanke hukunci ko za ku sami bizar aiki a wata ƙasa?", options: ["Wakilin ɗaukar ma'aikata", "Gwamnatin wannan ƙasa", "Sananniyar tashar bidiyo kan ayyukan ƙasar waje", "Mai ɗaukar ku aiki shi kaɗai"], answer: 1, why: "Gwamnatin ƙasar da za ku je ce kaɗai ke bayar da biza da izinin aiki." },
            { objective: "O1", q: "Aboki ya ce za ku iya yin aiki a can da bizar yawon shaƙatawa. Me za ku yi?", options: ["Ku tafi, domin abokinku ya yi haka", "Ku biya wakili ya shirya shi da sauri", "Ku fara duba shafin hukuma na shige da fice ko ofishin jakadanci", "Ku tambaya a kafofin sada zumunta"], answer: 2, why: "Yin aiki da bizar da ba ta dace ba zai iya sa a kama ku ko ku faɗa tarko; shafin hukuma ne ke faɗin abin da ke bisa doka." }
          ]
        },
        {
          title: "Duba cewa hukumar ɗaukar ma'aikata tana da lasisi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Duba lasisin hukuma a jerin hukuma na gwamnatinku.",
          text: [
            "A ƙasashe da yawa, hukumomin da ke tura ma'aikata ƙasar waje dole su sami lasisi daga gwamnati. Lasisin yana nufin gwamnati ta san su waye kuma za ta iya ɗaukar mataki kan ƙorafi. Wakili marar lasisi ba shi da wanda ke sa ido a kansa.",
            "Misalai: a Philippines, Department of Migrant Workers (DMW) yana ba ku damar tabbatar da matsayin hukumar ɗaukar ma'aikata ta intanet. A India, shafin eMigrate yana da jerin wakilan ɗaukar ma'aikata masu rajista, kuma ya kamata wakilin ya nuna ingantacciyar takardar shaidar rajista. A Kenya, National Employment Authority (NEA, Hukumar Ayyukan Yi ta Ƙasa) tana riƙe da jerin hukumomin aiki masu zaman kansu masu rajista. A wasu ƙasashe, ku tambayi ma'aikatar ƙwadago, hukumar ayyukan yi ta gwamnati, ko ofishin IOM wane jeri za ku yi amfani da shi.",
            "Ku duba ainihin suna da lambar lasisi. Wasu wakilan bogi suna kwafar sunan hukuma ta gaske, ko suna amfani da lasisin da ya ƙare ko aka soke. Ku sake dubawa kusa da ranar da za ku biya ko ku sa hannu, domin ana iya dakatar da lasisi. Ku kuma duba cewa an amince da odar aiki ko guraben aikin inda ƙasarku ta buƙaci haka."
          ],
          steps: ["Ku nemi hukumar ta ba ku cikakken sunanta na doka, adireshinta da lambar lasisinta, a rubuce.", "Ku buɗe jerin hukuma na gwamnatinku (ba hanyar haɗin da wakilin ya aiko muku ba).", "Ku nemi sunan da lambar lasisin ku duba ko sun dace.", "Ku duba cewa lasisin yana aiki a yau kuma ba a dakatar ko soke shi ba.", "Idan hukumar ba ta cikin jerin, ku tsaya ku kai rahoto ga hukumar gwamnati."],
          words: [["Hukumar ɗaukar ma'aikata", "kasuwancin da ke samo wa masu ɗaukar aiki ma'aikata, wani lokaci a wasu ƙasashe (recruitment agency)."], ["Lasisi", "izinin hukuma daga gwamnati na yin wani irin kasuwanci."], ["Odar aiki", "buƙatar hukuma ta mai ɗaukar aiki ta neman ma'aikata, wadda wasu ƙasashe dole su amince da ita (job order)."], ["IOM", "International Organization for Migration (Ƙungiyar Ƙaura ta Duniya), hukumar Majalisar Ɗinkin Duniya kan ƙaura."]],
          slides: [
            { title: "Me yasa lasisi yake da muhimmanci", bullets: ["Gwamnati ta san wace ce hukumar", "Kuna iya kai ƙorafi idan wani abu ya lalace", "Wakilai marasa lasisi ba su da wanda ke sa ido a kansu"] },
            { title: "Inda za a duba (misalai)", bullets: ["Philippines: duba matsayin hukuma a DMW", "India: jerin wakilai masu rajista a eMigrate", "Kenya: jerin National Employment Authority"] },
            { title: "Yadda ake dubawa", bullets: ["Ku karɓi ainihin suna da lambar lasisi a rubuce", "Ku yi amfani da jerin hukuma, ba hanyar haɗin wakili ba", "Suna da lamba dole su dace kuma su kasance masu aiki a yau"] },
            { title: "Ba ta cikin jerin?", bullets: ["Ku tsaya: kada ku biya ko ku ba da takardu", "Ku kai rahoto ga hukumar ƙwadago ko ta tafiye-tafiyen aiki"] }
          ],
          sources: [
            { name: "Philippines DMW: recruitment agencies", url: "https://dmw.gov.ph/archives/poea/services/recruiters.html" },
            { name: "India MEA: FAQ on issues of intending emigrants", url: "https://www.mea.gov.in/issues-of-intending-emigrants.htm" },
            { name: "Kenya National Employment Authority", url: "https://www.nea.go.ke/" },
            { name: "IOM IRIS: Ethical Recruitment", url: "https://iris.iom.int/" }
          ],
          tryIt: "Ku nemo jerin hukuma na ƙasarku na hukumomin ɗaukar ma'aikata masu lasisi (ko ofishin da ke riƙe da shi). Ku rubuta adireshin intanet ɗin. Sannan ku nemi wata hukuma da kuka ji labarinta, ko kowace hukuma a cikin jerin, ku rubuta sunanta, lambar lasisinta, da ko lasisin yana aiki.",
          youCanNow: "nemo jerin hukuma na ƙasarku na hukumomi masu lasisi, da duba suna, lamba da matsayin wata hukuma ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Wakili ya aiko muku hanyar haɗi zuwa shafin da ke cewa hukumar tana da lasisi. Mene ne mafi aminci wajen dubawa?", options: ["Ku amince da hanyar haɗin domin tana kama da ta hukuma", "Ku nemi wakilin ya aiko hoton allo", "Ku ƙirga yabo masu kyau a kafofin sada zumunta", "Ku buɗe jerin hukuma na gwamnatinku da kanku ku nemi suna da lambar"], answer: 3, why: "Wakilan bogi za su iya yin shafukan bogi; zuwa jerin hukuma da kanku shi ne ainihin dubawa." },
            { objective: "O2", q: "Sunan hukumar ya dace da jerin hukuma amma lambar lasisin ta bambanta. Me wannan yake nunawa?", options: ["Wataƙila wani yana kwafar sunan hukuma ta gaske", "Ba komai; lambobi ba su da muhimmanci", "Hukumar ta fi aminci sosai", "Ya kamata ku biya da sauri"], answer: 0, why: "Wakilan bogi suna kwafar sunaye na gaske; suna da lamba duka dole su dace da lasisi mai aiki." }
          ]
        },
        {
          title: "Gane masu ɗaukar ma'aikata na bogi da zambar aiki",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lissafa alamun haɗari a tallar aiki ko saƙon mai ɗaukar ma'aikata.",
          text: [
            "Ɗaukar ma'aikata na adalci yana da doka ɗaya mai sauƙi da za ku iya tunawa: bai kamata ma'aikata su biya kuɗi don samun aiki ba. Ƙa'idodin International Labour Organization (ILO, Ƙungiyar Ƙwadago ta Duniya) kan ɗaukar ma'aikata na adalci sun ce kada a karɓi kuɗin ɗaukar aiki ko kuɗaɗe masu alaƙa daga ma'aikata ko masu neman aiki. Mai ɗaukar aiki ne ke biya. Ana kiran wannan ƙa'idar \"mai ɗaukar aiki ne ke biya\". Wasu ƙasashe har yanzu suna barin wasu kuɗaɗe bisa doka, don haka idan wani ya nemi kuɗi daga gare ku, ku fara duba dokokin hukuma na ƙasarku.",
            "Alamun haɗari na yau da kullum: dole ku biya wakilin kuɗin samun aiki, horo, gwajin lafiya ko biza kafin ku ga kwangila; albashin ya fi na al'ada sosai don wannan aikin; tayin yana zuwa ta kafofin sada zumunta ko saƙonni kaɗai babu adireshin kamfani; suna gaggauta ku ku yanke shawara a yau; suna neman ku yi tafiya da bizar yawon shaƙatawa; suna son su riƙe fasfo ɗinku; ko aikin, mai ɗaukar aikin ko ƙasar suna ta canjawa.",
            "Sauran alamomi: ana gaya muku ku yi wa jami'ai ƙarya a filin jirgin sama, ku karɓi bashi daga wakilin, ko ku ɓoye tayin daga iyalanku. Ana iya duba mai ɗaukar aiki na gaske: yana da adireshi na gaske, shafin intanet, da odar aiki ko kwangila da za ku iya karantawa kafin ku biya ko ku yi tafiya."
          ],
          steps: ["Ku karanta tallar ko saƙon a hankali.", "Ku zagaye duk wata buƙatar kuɗi, fasfo ɗinku ko ɓoye-ɓoye.", "Ku duba ko albashin da aikin suna da ma'ana.", "Ku duba kamfanin da hukumar a shafukan hukuma.", "Idan kun ga alamar haɗari, ku tsaya ku tambayi hukumar gwamnati ko amintaccen mai ba da shawara."],
          words: [["Kuɗin ɗaukar aiki", "kuɗin da ake karɓa daga ma'aikaci don ya sami aiki ko a sa shi a ciki (recruitment fee)."], ["Ƙa'idar \"mai ɗaukar aiki ne ke biya\"", "dokar cewa mai ɗaukar aiki, ba ma'aikaci ba, ne ke biyan kuɗaɗen ɗaukar ma'aikata (employer pays principle)."], ["ILO", "International Labour Organization (Ƙungiyar Ƙwadago ta Duniya), hukumar Majalisar Ɗinkin Duniya kan aiki da haƙƙoƙin ma'aikata."]],
          slides: [
            { title: "Ku tuna doka ɗaya", bullets: ["Bai kamata ma'aikata su biya kuɗi don samun aiki ba", "Mai ɗaukar aiki ne ke biyan kuɗaɗen ɗaukar ma'aikata", "An nemi kuɗi? Ku fara duba dokokin hukuma"] },
            { title: "Alamun haɗari", bullets: ["Kuɗi ga wakili kafin kwangila", "Albashi ya fi na al'ada sosai", "Gaggawa: ku yanke shawara a yau", "Bizar yawon shaƙatawa don aiki"] },
            { title: "Ƙarin alamun haɗari", bullets: ["Suna son su riƙe fasfo ɗinku", "Aiki, mai ɗaukar aiki ko ƙasa suna ta canjawa", "Ƙarya a filin jirgi, bashi daga wakili, ɓoye-ɓoye"] },
            { title: "Ana iya duba tayi na gaske", bullets: ["Adireshin kamfani na gaske da shafin intanet", "Hukuma mai lasisi", "Kwangilar da kuke karantawa kafin ku biya ko ku yi tafiya"] }
          ],
          sources: [
            { name: "ILO: General principles and operational guidelines for fair recruitment and definition of recruitment fees and related costs", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" },
            { name: "IOM IRIS: Ethical Recruitment (employer pays principle)", url: "https://iris.iom.int/" }
          ],
          tryIt: "Ku karanta wannan tallar gwaji: Ayyukan otal a Dubai! Albashi ninki 3 na al'ada. Ba a buƙatar ƙwarewa. Ku aiko dala 500 don shirya biza a yau, guraben 5 ne kawai suka rage. Ta WhatsApp kaɗai. Ku rubuta kowace alamar haɗari da kuka gano (akwai aƙalla huɗu).",
          youCanNow: "lissafa alamun haɗari na mai ɗaukar ma'aikata na bogi ko zambar aiki a talla ko saƙo.",
          quickCheck: [
            { objective: "O3", q: "Mai ɗaukar ma'aikata ya nemi ku biya kuɗin samun aiki kafin ku ga kwangila. Mene ne wannan?", options: ["Abu ne na al'ada a kowane aiki a ƙasar waje", "Alama ce cewa aikin yana da kyau sosai", "Alamar haɗari ce; bai kamata ma'aikata su biya kuɗi don samun aiki ba", "Harajin gwamnati ne"], answer: 2, why: "Ƙa'idodin ILO kan ɗaukar ma'aikata na adalci sun ce kada a karɓi kuɗin ɗaukar aiki daga ma'aikata; biyan kuɗi kafin kwangila babbar alamar zamba ce." },
            { objective: "O3", q: "Wane saƙo ne yake da alamun haɗari MAFI YAWA?", options: ["Ga adireshinmu da lambar lasisinmu; ku fara karanta kwangilar", "Ku biya a yau, ku ɓoye wannan, ku yi tafiya da bizar yawon shaƙatawa", "Don Allah ku aiko CV ɗinku don hirar aiki", "Mai ɗaukar aiki zai biya kuɗin jirginku; ku duba kwangilar da aka haɗa"], answer: 1, why: "Gaggawa, ɓoye-ɓoye da bizar yawon shaƙatawa don aiki duka alamun haɗari ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar hanya mai aminci kuma ta doka",
        questions: [
          { objective: "O1", q: "Wane ne wuri mafi aminci don duba dokokin bizar aiki?", options: ["Shafin kafofin sada zumunta na mai ɗaukar ma'aikata", "Bidiyon wani da ya je ƙasar waje", "Shawarar aboki", "Shafin hukuma na shige da fice ko ofishin jakadancin ƙasar da za ku je"], answer: 3, why: "Gwamnati ce kaɗai ke yanke hukunci kan biza, don haka shafukanta na hukuma ne amintacciyar majiya." },
          { objective: "O1", q: "Mene ne bambanci tsakanin safarar mutane da fataucin mutane?", options: ["Safara ita ce biyan kuɗi don ƙetare iyaka ba bisa doka ba; fatauci yana amfani da ƙarfi, ƙarya ko cin zarafi don zaluntar mutum", "Ma'anarsu ɗaya ce", "Safara tana bisa doka", "Fatauci yana faruwa a iyakoki kaɗai"], answer: 0, why: "Fatauci game da zaluntar mutum ne; safara game da ƙetare iyaka ba bisa doka ba ne." },
          { objective: "O2", q: "A ina ya kamata ku duba ko hukuma tana da lasisi?", options: ["A shafin intanet na hukumar kaɗai", "A jerin hukuma na gwamnatinku na hukumomi masu lasisi", "Ta tambayar sauran masu neman aiki a rukunin hira", "Ta kallon kayan ofishin hukumar"], answer: 1, why: "Jerin hukuma daga hukumar ƙwadago ko ta tafiye-tafiyen aiki yana nuna ko lasisin na gaske ne kuma yana aiki." },
          { objective: "O2", q: "Hukumar ba ta cikin jerin hukuma. Me za ku yi?", options: ["Ku biya ƙaramin kuɗin ajiya", "Ku ba su kwafin fasfo ɗinku su riƙe", "Ku tsaya, ku kai rahoto ga hukumar ƙwadago ko ta tafiye-tafiyen aiki", "Ku nemi su aiko shafin intanet mafi kyau"], answer: 2, why: "Wakili marar lasisi ba shi da wanda ke sa ido a kansa; ku tsaya ku kai rahoto." },
          { objective: "O3", q: "Mene ne ma'anar ƙa'idar \"mai ɗaukar aiki ne ke biya\"?", options: ["Ma'aikaci yana biyan rabi", "Gwamnati tana biyan kuɗaɗen ma'aikaci", "Wakili ne ke yanke wanda zai biya", "Mai ɗaukar aiki, ba ma'aikaci ba, ne ke biyan kuɗaɗen ɗaukar ma'aikata"], answer: 3, why: "A ɗaukar ma'aikata na adalci, mai ɗaukar aiki ne ke biyan kuɗaɗen ɗaukar ma'aikata, ba ma'aikata ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Kare kanku kafin ku tafi da bayan kun isa",
      lessons: [
        {
          title: "Karanta tayin aiki da kwangila",
          objectives: ["O4"],
          minutes: 6,
          goal: "Duba tayin aiki don bayanan da dole su kasance a rubuce.",
          text: [
            "Aiki na adalci yana zuwa da tayi a rubuce ko kwangila da za ku iya karantawa, a harshen da kuka fahimta, kafin ku biya komai, ku sa hannu ko ku yi tafiya. Ku nemi kwafi da za ku riƙe. Idan ba ku fahimci wata kalma ba, ku nemi hukumar, ofishin ƙwadago ko amintaccen mutum ya bayyana muku ita.",
            "Ku duba cewa ya faɗi: mai ɗaukar aikin da adireshinsa; aikin da manyan ayyukansa; inda za ku yi aiki; albashi, sau nawa da yadda ake biya; lokutan aiki, ranakun hutu da ƙarin lokacin aiki; tsawon kwangilar; gidan zama da abinci, da ko ana cire kuɗinsu daga albashinku; wa zai biya kuɗin jirgi, biza, gwajin lafiya da kuɗaɗen ɗaukar aiki; da yadda za ku iya kawo ƙarshen kwangilar ku dawo gida.",
            "Canjin kwangila dabara ce da aka saba: kuna sa hannu a wata kwangila a gida, sannan a ba ku wata daban, mafi muni, idan kun isa. Ku ɗauki hoton kowane shafi da kuka sa wa hannu. Idan kwangilar da aka ba ku a ƙasar waje ta bambanta, kada ku sa hannu cikin gaggawa; ku tuntuɓi ofishin jakadancinku ko ofishin ƙwadago."
          ],
          steps: ["Ku karɓi cikakken tayin ko kwangilar a rubuce ku riƙe kwafi.", "Ku yi amfani da jerin dubawa: mai ɗaukar aiki, aiki, wuri, albashi, lokutan aiki, ranakun hutu, tsawo, gidan zama, kuɗaɗe, dawowa gida.", "Ku yi alama kan duk abin da ya ɓace ko ya bambanta da abin da aka gaya muku.", "Ku nemi amsoshi a rubuce kafin ku sa hannu.", "Ku ɗauki hoton kowane shafi da kuka sa wa hannu ku ajiye hotunan a wuri mai aminci."],
          words: [["Kwangila", "yarjejeniya a rubuce tsakaninku da mai ɗaukar aiki game da aikin (contract)."], ["Ƙarin lokacin aiki", "aiki fiye da lokutanku na al'ada, wanda ya kamata a biya (overtime)."], ["Cirewa", "kuɗin da ake cirewa daga albashinku, misali don gidan zama (deduction)."], ["Canjin kwangila", "idan kwangilar da aka ba ku a ƙasar waje ta bambanta kuma ta fi muni da wadda kuka sa wa hannu a gida (contract substitution)."]],
          slides: [
            { title: "Kafin ku biya, ku sa hannu ko ku yi tafiya", bullets: ["Ku karɓi tayin a rubuce", "A harshen da kuka fahimta", "Ku riƙe kwafinku na kanku"] },
            { title: "Dole ya faɗi", bullets: ["Mai ɗaukar aiki, aiki, wurin aiki", "Albashi, lokutan aiki, ranakun hutu, ƙarin lokacin aiki", "Tsawon kwangila, gidan zama, cire-cire"] },
            { title: "Kuma dole ya faɗi", bullets: ["Wa zai biya kuɗin jirgi, biza, gwajin lafiya da ɗaukar aiki", "Yadda ake kawo ƙarshen kwangila a dawo gida"] },
            { title: "Ku yi hattara da canjin kwangila", bullets: ["Ku ɗauki hoton kowane shafi da kuka sa wa hannu", "Wata kwangila daban a ƙasar waje? Kada ku yi gaggawa", "Ku tuntuɓi ofishin jakadancinku ko ofishin ƙwadago"] }
          ],
          sources: [
            { name: "ILO: General principles and operational guidelines for fair recruitment", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" }
          ],
          tryIt: "Ku rubuta jerin dubawa na kwangila mai abubuwa goma daga wannan darasi a takarda. Sannan ku karanta tayin aiki na gwaji (ku ƙirƙiri ɗaya, ko ku yi amfani da na gaske bayan kun rufe lambobinku na sirri) ku yi alamar kowane abu da aka rubuta. Ku zagaye kowane abu da ya ɓace.",
          youCanNow: "duba tayin aiki ko kwangila don bayanan da dole su kasance a ciki, da lissafa duk abin da ya ɓace kafin ku sa hannu.",
          quickCheck: [
            { objective: "O4", q: "Yaushe ya kamata ku karanta cikakkiyar kwangilar?", options: ["Bayan kun isa sabuwar ƙasar", "Kafin ku biya, ku sa hannu ko ku yi tafiya", "Sai idan an sami matsala", "Wakili ne zai karanta muku ita"], answer: 1, why: "Kuna buƙatar sanin sharuɗɗan kafin ku sa kuɗi, ku sa hannu ko ku bar gida." },
            { objective: "O4", q: "A sabon aikin an ba ku wata kwangila daban mai ƙaramin albashi. Me ake kiran wannan?", options: ["Ƙarin girma", "Sabuntawa ta al'ada", "Canjin kwangila", "Kyauta (bonus)"], answer: 2, why: "Musanya kwangila da wadda ta fi muni bayan isowa ana kiransa canjin kwangila, sanannen cin zarafi ne." }
          ]
        },
        {
          title: "Sanin alamun fataucin mutane da aikin tilas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ambaci alamun fataucin mutane da wuraren samun taimako.",
          text: [
            "Majalisar Ɗinkin Duniya ta bayyana fataucin mutane a sassa uku: wani aiki (ɗauka, kai wani wuri, riƙewa ko karɓar mutum), wata hanya (ƙarfi, barazana, ƙarya, cin zarafin iko ko na raunin matsayin mutum) da wata manufa (zalunci, kamar aikin tilas ko cin zarafin jima'i). Ga yara 'yan ƙasa da shekara 18, ba a buƙatar ƙarfi ko ƙarya kafin ya zama fatauci.",
            "Alamomin da za ku lura da su: mai ɗaukar aiki ko wakili ya karɓi fasfo ɗinku ko katin shaidarku ya riƙe; kuna da bashin da ke ƙaruwa kuma ba za ku iya barin wurin ba sai kun biya; ba a biyan ku, ko ana biyan ku ƙasa da abin da aka alƙawarta sosai; ba za ku iya barin wurin aiki ko gidan zama yadda kuke so ba; ana yi muku barazana, ko ana gaya muku 'yan sanda za su kama ku; kuna aiki dogon lokaci sosai babu ranar hutu; an raba ku da iyalanku da waya.",
            "Akwai taimako. Ku tuntuɓi ofishin jakadanci ko karamin jakadancin ƙasarku, ofishin ƙwadago ko 'yan sanda a ƙasar da kuke, ofishin IOM, ko amintacciyar ƙungiyar ma'aikata. Ƙasashe da yawa suna da layukan waya na taimako (hotline) don ma'aikata masu ƙaura da waɗanda aka yi wa fatauci: ku nemo lambar hukuma yanzu ku ajiye ta. Idan ku ko wani yana cikin haɗari a yanzu, ku fara kiran lambar gaggawa ta wurin."
          ],
          words: [["Aikin tilas", "aikin da ake tilasta wa mutum yi ta barazana ko hukunci kuma bai amince da shi da yardarsa ba (forced labour)."], ["Bautar bashi", "tilasta wa mutum yin aiki don biyan bashin da kamar ba ya ƙarewa (debt bondage)."], ["Zalunci", "amfani da mutum ba bisa adalci ba don amfanin wani (exploitation)."]],
          slides: [
            { title: "Fataucin mutane yana da sassa uku", bullets: ["Aiki: ɗauka, kai wani wuri, riƙewa ko karɓar mutum", "Hanya: ƙarfi, barazana, ƙarya, cin zarafin iko", "Manufa: zalunci kamar aikin tilas"] },
            { title: "Alamomin da za ku lura da su", bullets: ["An karɓi fasfo ko katin shaida an riƙe", "Bashin da ke ta ƙaruwa", "Babu albashi ko ƙasa sosai da abin da aka alƙawarta"] },
            { title: "Ƙarin alamomi", bullets: ["Ba ku da 'yancin barin wurin aiki ko gidan zama", "Barazana, ko ana cewa 'yan sanda za su kama ku", "An raba ku da iyali da waya"] },
            { title: "Inda ake samun taimako", bullets: ["Haɗari yanzu: ku fara kiran lambar gaggawa ta wurin", "Ofishin jakadancinku, ofishin ƙwadago, 'yan sanda", "Ofishin IOM, ƙungiyoyin ma'aikata, layukan taimako na hukuma"] }
          ],
          sources: [
            { name: "UNODC: Human trafficking FAQs", url: "https://www.unodc.org/unodc/en/human-trafficking/faqs.html" },
            { name: "UNODC Education for Justice: crime of trafficking in persons", url: "https://www.unodc.org/e4j/en/tip-and-som/module-6/key-issues/crime-of-trafficking-in-persons.html" },
            { name: "IOM: International Organization for Migration", url: "https://www.iom.int/" }
          ],
          tryIt: "Ku karanta wannan labarin gwaji: Amina ta je ƙasar waje don yin aikin share gidaje. Da ta isa, wakilin ya riƙe fasfo ɗinta wai don ya kiyaye shi. An gaya mata tana bin bashin dala 2,000 na tafiyarta, wanda ke ƙaruwa kowane wata. Tana aiki awa 14 a rana babu ranar hutu, kuma an gaya mata 'yan sanda za su kama ta idan ta bar wurin. Ku rubuta kowace alamar fataucin mutane ko aikin tilas, da wurare biyu da Amina za ta iya samun taimako.",
          youCanNow: "gane alamun fataucin mutane da aikin tilas, da ambaton wuraren da ma'aikaci zai iya samun taimako.",
          quickCheck: [
            { objective: "O5", q: "Mai ɗaukar ku aiki a ƙasar waje ya ce dole ya riƙe fasfo ɗinku. Mene ne wannan?", options: ["Alamar haɗari ce ta aikin tilas ko fataucin mutane", "Hidima ce ta al'ada don kiyaye shi", "Doka ce a ko'ina", "Alamar mai ɗaukar aiki nagari ce"], answer: 0, why: "Karɓar fasfo ɗin ma'aikaci da riƙe shi sananniyar alama ce ta aikin tilas da fataucin mutane." },
            { objective: "O5", q: "Wani ma'aikaci yana cikin haɗari a yanzu. Mene ne matakin farko?", options: ["Wallafa labarin a kafofin sada zumunta", "Jira har kwangilar ta ƙare", "Kiran lambar gaggawa ta wurin", "Biyan mai ɗaukar aikin bashin"], answer: 2, why: "A haɗari na gaggawa, lambar gaggawa ta wurin ce ta farko; sannan ofishin jakadanci da sauran taimako." }
          ]
        },
        {
          title: "Jerin abubuwan tsaro na tafiyarku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta shirin tsaro mai takardunku, lambobin mutane da lambobin taimako kafin ku tafi.",
          text: [
            "Kafin ku tafi, ku yi shiri. Ku riƙe fasfo ɗinku da takardunku a hannunku. Ku yi kwafi: kwafin takarda a gida wurin wanda kuka amince da shi, da hoto a wuri mai aminci da za ku iya buɗewa daga kowace waya, kamar imel ɗinku na kanku. Kada ku wallafa hotunan fasfo ɗinku a intanet.",
            "Ku rubuta lambobin mutanenku: amintaccen mutum a gida da ke sa ran jin labarinku a ranakun da aka tsara; cikakkun sunaye, adireshi da lambobin waya na mai ɗaukar aikin da na hukumar; ofishin jakadanci ko karamin jakadancin ƙasarku a ƙasar da za ku je; da layukan taimako na hukuma da kuka nemo a shafukan gwamnati. Ku yarda da amintaccen mutuminku kan wata kalmar sirri da ke nufin \"ina buƙatar taimako\".",
            "Ku riƙe rubutu mai sauƙi na aikinku: ranaku da lokutan da kuke aiki da abin da ake biyan ku. Ku riƙe hotunan kwangilarku. Idan wani abu ya lalace, waɗannan bayanan suna taimaka wa ofishin jakadanci, ofishin ƙwadago ko lauya ya taimake ku. Sannan ku haɗa duk waɗannan, tare da dubawar darussan baya, cikin jeri ɗaya: wannan shi ne aikinku na ƙarshe."
          ],
          steps: ["Ku lissafa shafukan hukuma da kuka yi amfani da su (shige da fice, ofishin jakadanci, ma'aikatar ƙwadago ta ƙasarku).", "Ku rubuta sunan hukumar, lambar lasisinta da yadda kuka duba ta.", "Ku lissafa kowane kuɗi da wanda zai biya shi.", "Ku yi alama a jerin dubawa na kwangila.", "Ku rubuta alamun haɗari da za su sa ku tsaya.", "Ku rubuta shirin taimakonku: kwafin takardu, amintaccen mutum, ranakun tuntuɓa, kalmar sirri, lambobin ofishin jakadanci da na layin taimako da kuka nemo da kanku."],
          words: [["Amintaccen mutum", "mutum a gida da ya san shirye-shiryenku kuma yana sa ran jin labarinku."], ["Tuntuɓa", "saƙo ko kira da aka tsara don faɗin cewa kuna lafiya (check-in)."], ["Kalmar sirri", "kalmar da kuka yarda da ita wadda a ɓoye take nufin \"ina buƙatar taimako\" (code word)."]],
          slides: [
            { title: "Ku riƙe takardunku", bullets: ["Fasfo ɗinku yana zama a hannunku", "Kwafin takarda a gida wurin wanda kuka amince da shi", "Hoto a wuri mai aminci, ba a taɓa wallafa shi a intanet"] },
            { title: "Lambobin mutanenku", bullets: ["Amintaccen mutum a gida, ranakun tuntuɓa, kalmar sirri", "Sunaye da adireshin mai ɗaukar aiki da na hukuma", "Ofishin jakadanci da layukan taimako na hukuma da kuka nemo"] },
            { title: "Ku riƙe bayanai", bullets: ["Ranaku da lokutan da kuke aiki", "Abin da ake biyan ku", "Hotunan kwangilarku"] },
            { title: "Jerinku", bullets: ["Shafukan hukuma da dubawar lasisin hukuma", "Kuɗaɗe da wanda zai biya, bayanan kwangila", "Alamun haɗari da shirin taimakonku"] }
          ],
          sources: [
            { name: "IOM: International Organization for Migration", url: "https://www.iom.int/" },
            { name: "Philippines Department of Migrant Workers (example of a migrant worker office)", url: "https://dmw.gov.ph/" }
          ],
          tryIt: "Aikin ƙarshe: ku yi jerin abubuwan tsaro na tafiyarku don wani aiki na gaske ko na gwaji a ƙasar waje. Ku saka shafukan hukuma, dubawar lasisin hukumar, kuɗaɗe da wanda zai biya, bayanan kwangila, alamun tsayawarku da shirin taimakonku. Ku yi amfani da madadi kamar [lambar fasfo] maimakon lambobi na gaske.",
          youCanNow: "rubuta jerin abubuwan tsaro na tafiya da ke shirya takardunku, lambobin mutanenku da lambobin taimako kafin ku tafi.",
          quickCheck: [
            { objective: "O6", q: "Ina ya kamata fasfo ɗinku ya kasance lokacin da kuke aiki a ƙasar waje?", options: ["Wurin wakili", "Wurin mai ɗaukar aiki", "Wurin abokin da kuka haɗu da shi a tafiya", "A hannunku, da kwafi a gida"], answer: 3, why: "Ku riƙe fasfo ɗinku da kanku; kwafi wurin amintaccen mutum yana taimakawa idan ya ɓace ko aka karɓe shi." },
            { objective: "O6", q: "Me yasa za ku yarda da amintaccen mutum a gida kan kalmar sirri?", options: ["Don samun ragin kuɗin kira", "Don ku nemi taimako ba tare da wasu sun sani ba", "Don buɗe wayarku", "Don samun biza da sauri"], answer: 1, why: "Kalmar sirri tana ba ku damar nuna haɗari ko da wani yana saurare." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kare kanku kafin ku tafi da bayan kun isa",
        questions: [
          { objective: "O4", q: "Wane abu ne DOLE ya kasance a rubuce kafin ku sa hannu?", options: ["Wa zai biya kuɗin jirgi, biza da ɗaukar aiki", "Garin da wakilin ya fi so", "Launin kayan aikinku", "Shirye-shiryenku na hutu"], answer: 0, why: "Kuɗaɗe da wanda zai biya su suna kare ku daga kuɗaɗen ɓoye da bashi." },
          { objective: "O4", q: "Tayin bai faɗi awa nawa za ku yi aiki ba. Me za ku yi?", options: ["Ku sa hannu; lokutan aiki ba su da muhimmanci", "Ku yi hasashen lokutan", "Ku nemi lokutan aikin a rubuce kafin ku sa hannu", "Ku jira ku gani bayan kun isa"], answer: 2, why: "Ya kamata a amsa sharuɗɗan da suka ɓace a rubuce kafin ku amince." },
          { objective: "O5", q: "Wace ce alamar bautar bashi?", options: ["Kuna samun takardar albashi kowane wata", "Bashin da ke ta ƙaruwa kuma ba za ku iya tafiya ba sai an biya shi", "Kuna da ranar hutu kowane mako", "Kuna iya kiran iyalanku"], answer: 1, why: "Bashin da ke ƙaruwa kuma ya hana ku tafiya bautar bashi ce, wani nau'in aikin tilas." },
          { objective: "O5", q: "A ina ma'aikaci mai ƙaura da ke cikin matsala zai iya samun taimako?", options: ["Wurin wakilin da ya karɓi fasfo ɗin", "Wurin wanda ba a sani ba a intanet da ke neman kuɗi", "Wurin mai ɗaukar aikin da ba ya biya", "Ofishin jakadanci ko karamin jakadancin ƙasarsa"], answer: 3, why: "Ofishin jakadanci ko karamin jakadanci yana taimakon 'yan ƙasarsa a ƙasar waje, tare da ofishin ƙwadago, 'yan sanda, IOM da layukan taimako." },
          { objective: "O6", q: "Daga ina ya kamata ku samo lambobin layin taimako don shirinku?", options: ["Daga shafukan gwamnati ko na ofishin jakadanci na hukuma da kuka nemo da kanku", "Daga saƙon mai ɗaukar ma'aikata", "Daga sharhi a kafofin sada zumunta", "Ba ku buƙatar su"], answer: 0, why: "Lambobi daga shafukan hukuma na gaske ne; ɗan zamba zai iya aiko lambobin taimako na bogi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tafiya Ƙasar Waje Don Aiki Lafiya",
    questions: [
      { objective: "O1", q: "Mece ce hanyar doka ta yin aiki a ƙasar waje?", options: ["Tafiya da bizar yawon shaƙatawa sannan a nemi aiki", "Biyan mai safara don ƙetare iyaka", "Yin aiki da biza ko izinin aiki da ya dace daga gwamnatin ƙasar da za a je", "Amfani da fasfon aboki"], answer: 2, why: "Hanyar doka tana amfani da biza ko izinin da gwamnatin ƙasar da za a je ta bayar don wannan aikin." },
      { objective: "O1", q: "Wace majiya ce ta hukuma?", options: ["Shafin intanet na ofishin jakadancin ƙasar da za ku je", "Bidiyon mai ɗaukar ma'aikata", "Rukunin hira game da ayyuka", "Fosta a tashar mota"], answer: 0, why: "Gwamnatoci ne ke tafiyar da ofisoshin jakadanci da shafukan shige da fice." },
      { objective: "O1", q: "Me yasa safarar mutane za ta iya zama haɗari ga ma'aikaci?", options: ["Koyaushe ta fi arha", "Masu safara za su iya zama masu fatauci, kuma ba ku da kariyar doka", "Tana ba ku izinin aiki", "Ofisoshin jakadanci sun fi son ta"], answer: 1, why: "Ba tare da matsayin doka ba, yana da sauƙi a yi muku barazana, kuma masu safara za su iya zaluntar ku." },
      { objective: "O2", q: "Me yasa lasisin hukumar ɗaukar ma'aikata yake da muhimmanci?", options: ["Yana sa aikin ya fi biyan kuɗi", "Yana nufin an tabbatar da aikin", "Yana barin hukumar ta karɓi kowane kuɗi", "Gwamnati ta san hukumar kuma za ta iya ɗaukar mataki kan ƙorafi"], answer: 3, why: "Lasisi yana sa hukumar ƙarƙashin dokokin gwamnati da tsarin ƙorafi." },
      { objective: "O2", q: "A Philippines, wane ofishi ne ke ba ku damar tabbatar da matsayin hukumar ɗaukar ma'aikata?", options: ["Department of Migrant Workers (DMW)", "Wani shafi mai zaman kansa a kafofin sada zumunta", "Kamfanin jirgin sama", "Kowane banki"], answer: 0, why: "DMW yana ba hukumomi lasisi kuma yana da hanyar duba matsayin hukuma ta intanet." },
      { objective: "O2", q: "Wadanne abubuwa biyu ne ya kamata su dace a jerin hukuma?", options: ["Wayar wakili da imel ɗinsa", "Tambarin hukumar da launukanta", "Ainihin sunan hukumar da lambar lasisinta", "Girman ofis da yawan ma'aikata"], answer: 2, why: "Wakilan bogi suna kwafar sunaye na gaske, don haka suna da lambar lasisi duka dole su dace da lasisi mai aiki." },
      { objective: "O3", q: "A ƙarƙashin ƙa'idodin ILO kan ɗaukar ma'aikata na adalci, wa ya kamata ya biya kuɗin ɗaukar aiki?", options: ["Ma'aikaci", "Iyalin ma'aikaci", "Mai ɗaukar aiki, ba ma'aikaci ba", "Ƙauyen ma'aikaci"], answer: 2, why: "Ƙa'idodin sun ce kada a karɓi kuɗin ɗaukar aiki ko kuɗaɗe masu alaƙa daga ma'aikata: mai ɗaukar aiki ne ke biya." },
      { objective: "O3", q: "Wace ce alamar haɗari ta aikin bogi?", options: ["Kwangila a rubuce kafin ku biya", "Hukuma mai lasisi mai adireshi", "Albashin al'ada na aikin", "Albashi ya fi na al'ada sosai ba tare da ƙwarewa ba"], answer: 3, why: "Tayin da ya yi kyau fiye da gaskiya hanya ce da aka saba ta kama mutane a tarko." },
      { objective: "O3", q: "Mai ɗaukar ma'aikata ya ce ku ɓoye aikin daga iyalanku. Me wannan yake nunawa?", options: ["Alamar haɗari ce; ayyuka na gaskiya ba sa buƙatar ɓoye-ɓoye", "Dokar kamfani ce ta al'ada", "Alamar albashi mai yawa ce", "Sharaɗin biza ne"], answer: 0, why: "Ɓoye-ɓoye yana raba ku da mutanen da za su iya gargaɗin ku ko su taimake ku." },
      { objective: "O3", q: "An gaya muku ku ce ku ɗan yawon shaƙatawa ne a filin jirgin sama. Me za ku yi?", options: ["Ku yi; kowa yana yi", "Ku tsaya: wannan alamar haɗari ce ta hanyar da ba ta doka ba kuma ba ta da aminci", "Ku nemi ƙarin albashi", "Ku yi ƙarya amma ku ɗauki ƙarin kuɗi"], answer: 1, why: "Idan ana gaya muku ku yi wa jami'ai ƙarya, hanyar ba ta doka ba ce kuma za ku iya faɗawa tarko." },
      { objective: "O4", q: "Wane abu ne kwangila ta adalci dole ta faɗa?", options: ["Shekarun wakili", "Addininku", "Albashi da yadda ake biyan sa", "Sunanku a kafofin sada zumunta"], answer: 2, why: "Dole a rubuta albashi, lokutan aiki, wurin aiki, kuɗaɗe da sharuɗɗan dawowa gida." },
      { objective: "O4", q: "Me yasa za ku ɗauki hoton kowane shafi da kuka sa wa hannu?", options: ["Don ku wallafa shi a intanet", "Don ku tabbatar da abin da kuka amince da shi idan an canja kwangilar daga baya", "Don ku nuna wa abokanku", "Domin wakili ya nema"], answer: 1, why: "Hotuna suna kare ku daga canjin kwangila." },
      { objective: "O4", q: "Kwangilar tana cikin harshen da ba za ku iya karantawa ba. Mene ne matakin da ya fi kyau?", options: ["Ku nemi ta a harshen da kuka fahimta, ko amintaccen mutum ya bayyana muku ita, kafin ku sa hannu", "Ku sa hannu da sauri", "Ku nemi wakili ya sa hannu a madadinku", "Ku yi watsi da ita"], answer: 0, why: "Ya kamata ku fahimci kowane sharaɗi kafin ku sa hannu." },
      { objective: "O5", q: "Wane ne ɗaya daga cikin sassa uku na fataucin mutane a ma'anar Majalisar Ɗinkin Duniya?", options: ["Tikitin jirgin sama", "Tallar aiki", "Biza", "Zalunci a matsayin manufa"], answer: 3, why: "Fataucin mutane yana da aiki, hanya da manufa: zalunci." },
      { objective: "O5", q: "Wace ce alamar aikin tilas?", options: ["Ana biyan ku a kan lokaci", "Ana gaya muku 'yan sanda za su kama ku idan kun tafi", "Kuna da ranar hutu", "Kuna riƙe fasfo ɗinku da kanku"], answer: 1, why: "Barazana don hana ma'aikaci tafiya alama ce ta aikin tilas." },
      { objective: "O5", q: "Ga yaro ɗan ƙasa da shekara 18, mene ne gaskiya game da fataucin mutane?", options: ["Fatauci ne kawai idan an yi amfani da ƙarfi", "Ba za a iya yin fataucin yara ba", "Ba a buƙatar ƙarfi ko ƙarya kafin ya zama fatauci", "Iyaye ne kaɗai za su iya kai rahoto"], answer: 2, why: "A ƙarƙashin Yarjejeniyar Majalisar Ɗinkin Duniya (UN Protocol), ɗauka ko kai yaro wani wuri don zaluntar sa fatauci ne ko babu ƙarfi ko ƙarya." },
      { objective: "O5", q: "Ina ne wurin samun taimako a ƙasar waje?", options: ["Ofishin IOM", "Mai ɗaukar aikin da ke riƙe da fasfo ɗinku", "Mai ba da bashi da ruwa mai tsanani", "Wakili marar lasisi"], answer: 0, why: "IOM, ofisoshin jakadanci, ofisoshin ƙwadago, 'yan sanda da layukan taimako na hukuma za su iya taimakawa." },
      { objective: "O6", q: "Me ya kamata ku saka a shirin taimakonku?", options: ["Waƙoƙin da kuka fi so kaɗai", "Lambar sirri ta bankinku (PIN)", "Fasfo ɗinku da kuka ba wakili", "Amintaccen mutum, ranakun tuntuɓa, kalmar sirri da lambobin taimako na hukuma"], answer: 3, why: "Waɗannan suna tabbatar da cewa wani zai lura idan kuna cikin matsala, kuma kun san wa za ku kira." },
      { objective: "O6", q: "Ina ya kamata ku ajiye kwafin fasfo ɗinku?", options: ["A wallafa shi a kafofin sada zumunta", "Wurin amintaccen mutum a gida da kuma a wuri mai aminci da za ku iya buɗewa", "Wurin mai ɗaukar ma'aikata kaɗai", "Babu inda"], answer: 1, why: "Kwafi wurin amintaccen mutum da kuma a wuri mai aminci na sirri suna taimakawa idan fasfo ɗinku ya ɓace ko aka karɓe shi." },
      { objective: "O6", q: "Me yasa za ku riƙe bayanan lokutan aikinku da albashinku a ƙasar waje?", options: ["Don nuna kai", "Mai ɗaukar aiki ne ya nema", "Yana taimaka wa ofishin jakadanci ko ofishin ƙwadago ya taimake ku idan wani abu ya lalace", "Ana buƙatar sa don bizar yawon shaƙatawa"], answer: 2, why: "Bayanai shaida ne na aikin da kuka yi da abin da aka biya ku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 10, 13, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Bayanan hukuma", objective: "O1", notYet: "An yi amfani da shafin wakili, na aboki ko na kafofin sada zumunta kaɗai.", meets: "An lissafa shafin hukuma na shige da fice na ƙasar da za a je da ofishin jakadancinta a ƙasarku.", exceeds: "An kuma lissafa shafin ma'aikatar ƙwadago ko ta tafiye-tafiyen aiki ta ƙasarku da abin da kowane shafi ya ce kuna buƙata." },
      { name: "An duba hukuma", objective: "O2", notYet: "Ba a duba hukuma ba, ko an duba ta hanyar haɗin da wakili ya aiko.", meets: "An duba sunan hukumar da lambar lasisinta a jerin hukuma kuma lasisin yana aiki a yau.", exceeds: "An kuma duba cewa an amince da odar aiki ko guraben aikin inda ƙasarku ta buƙaci haka." },
      { name: "Kuɗaɗe da alamun haɗari", objective: "O3", notYet: "Ba a lissafa kuɗaɗe ba, ko an amince da kuɗi daga ma'aikaci ba tare da tambaya ba.", meets: "An lissafa kowane kuɗi da wanda zai biya shi, kuma an rubuta aƙalla alamun tsayawa huɗu.", exceeds: "An duba dokokin hukuma kan kuɗaɗe a ƙasarku kuma an rubuta inda aka duba." },
      { name: "Bayanan kwangila", objective: "O4", notYet: "An duba ƙasa da abubuwa shida cikin goma na kwangila.", meets: "An lissafa duk abubuwa goma na kwangila kuma an yi alama kan waɗanda suka ɓace.", exceeds: "An rubuta tambayoyin da za a yi a rubuce don kowane abu da ya ɓace." },
      { name: "Shirin taimako", objective: "O5", notYet: "Babu lambobin taimako, ko an karɓi lambobin daga mai ɗaukar ma'aikata.", meets: "Ofishin jakadanci da aƙalla layin taimako na hukuma ɗaya, da aka nemo a shafukan hukuma, da kuma lambar gaggawa ta wurin.", exceeds: "An kuma ambaci ofishin IOM ko ƙungiyar ma'aikata kusa da wurin aiki." },
      { name: "Takardu da lambobin mutane", objective: "O6", notYet: "Babu kwafin takardu ko amintaccen mutum.", meets: "Kwafin takardu a gida da a wuri mai aminci, amintaccen mutum da ranakun tuntuɓa.", exceeds: "Har da kalmar sirri da shirin rubuta lokutan aiki da albashi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun duba lasisin hukuma kafin su biya ko su sa hannu (binciken biyo baya na kwanaki 30)",
      "Masu koyo da suka ce sun ƙi ko sun kai rahoton tayin aiki da ya nemi su biya kuɗi ko su ba da fasfo",
      "Ƙungiyoyin abokan aiki sun ce an rage yawan masu koyo da ke rasa kuɗi ga masu ɗaukar ma'aikata na bogi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don nemo shafukan hukuma",
      "Takarda da alƙalami don jerin dubawa da labaran gwaji",
      "Adireshin hukumar ƙwadago ko ta tafiye-tafiyen aiki ta ƙasarku da jerin hukumomi (mai jagoranci zai iya nemo su tun da wuri)",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Kafin zaman, ku nemo jerin hukuma na ƙasarku na hukumomi masu lasisi, ofishin ma'aikata masu ƙaura da lambobin layin taimako na hukuma, ku duba cewa har yanzu suna aiki.",
      "Kada ku ba da shawarar biza ko ta shari'a; ku tura masu koyo zuwa ofishin jakadanci, shafin hukuma na shige da fice ko lauya mai lasisi.",
      "Kada ku taɓa neman masu koyo su faɗi ainihin lambar fasfo, katin shaida ko ta banki; ku yi amfani da madadi kamar [lambar fasfo].",
      "Wasu masu koyo ko iyalansu wataƙila an cuce su ko an zalunce su. Ku yi magana ba tare da zargi ba, kuma ku ba da bayanan hidimomin taimako na wurin a ɓoye.",
      "Idan mai koyo ya ce shi ko wani yana cikin haɗari yanzu, ku taimaka masa ya fara kiran lambar gaggawa ta wurin."
    ]
  }
};
