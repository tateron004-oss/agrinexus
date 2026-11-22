"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-photography.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-photography-ha",
  lang: "ha",
  translationOf: "seniors-ai-photography",
  category: "Seniors and Technology",
  name: "AI don Ɗaukar Hoto",
  skills: "Ɗaukar hotuna masu kyau da waya, Amfani da gyara ta atomatik, Cire ƙananan abubuwa da kayan AI, Neman hotuna ta hanyar bincike, Yin kundin hotuna don rabawa da iyali",
  outcome: "ɗaukar hoto mai kyau da wayarku, inganta shi da kayan gyara na atomatik da na AI, nemo tsofaffin hotuna ta hanyar bincike, da raba ƙaramin kundin hotuna da iyalinku.",
  about: [
    "Wannan kwas na manya ne masu son ɗaukar hotunan jikoki, lambuna, dabbobin gida, tafiye-tafiye da taron iyali, kuma suna son hotunan su yi kyau ba tare da koyon kyamara mai wuya ba.",
    "Kyamarar wayarku da manhajar hotunanku sun riga sun ƙunshi abubuwan AI: gyara ta atomatik, kayan cire ƙananan abubuwan da ke ɓata hoto, da bincike da zai iya nemo \"kare\" ko \"bakin teku\" cikin dubban hotuna. Za ku koyi amfani da su, da kuma lokacin da ya kamata ku faɗi gaskiya game da hotunan da aka gyara.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku riƙe wayarku ko tablet a hannu, ku yi atisaye da hotunanku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku ɗauki hotuna uku na wani abu da kuke so (mutum bayan kun nemi izininsa, dabbar gida, shuka ko abinci). Ku inganta mafi kyau da gyara ta atomatik da wani gyara ɗaya, ku nemo tsofaffin hotuna biyu ta bincike a manhajar hotunanku, sannan ku raba dukkan uku a ƙaramin kundi ko saƙo ga wani a iyali.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke son ɗauka da raba hotunan jikoki, dabbobin gida, lambuna, abinci da tafiye-tafiye, kuma sau da yawa suna da akwatunan tsofaffin hotunan iyali da aka buga a takarda.",
    startingPoint: "Suna iya ɗaukar hoto da kyamarar waya. Da yawa hotunansu ba su da haske ko suna dushewa, ba su taɓa buɗe allon gyara (Edit) ba, suna daɗewa suna gungurawa don nemo tsofaffin hotuna, kuma ba su da tabbas yadda ake raba kundi.",
    gap: "Hotuna suna ɗaya daga cikin manyan hanyoyin da iyalai ke kusanci. Hotuna masu kyau, gyaran AI mai sauƙi, bincike mai sauri, kundin da ake rabawa da kwafin dijital na tsofaffin hotuna suna taimaka wa manya su raba kuma su kiyaye tunawa, yayin da neman izini da faɗin gaskiya game da gyaran AI ke kiyaye amana a iyali.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli, da manyan matakai masu sauƙi",
      "Na'urori: wayar zamani mai kyamara; manhajojin hotuna da kayan AI sun bambanta daga waya zuwa waya, kuma wasu wayoyi ba su da goge-goge na AI",
      "Lokaci: kusan minti 5 a kowane darasi a hankali, tare da atisaye",
      "Izini: ku nemi izinin mutane, da na iyayen yara, kafin ku raba hotunansu",
      "Gaskiya: ana yi wa gyaran AI da hotunan da aka saka wa launi alama, kuma ana ajiye na asali"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da kyamarar wayarku", action: "ɗaukar hoto mai tsabta da haske ta hanyar goge ruwan tabarau, riƙe waya da ƙarfi, amfani da haske mai kyau da taɓa allo don mayar da hankali", standard: "kuna ajiye mafi kyau cikin hotuna kaɗan" },
    { id: "O2", condition: "Idan kuna da hoto a wayarku", action: "inganta shi da gyara ta atomatik, yanke gefuna da daidaita shi", standard: "kuma ku mayar da shi da Revert idan kun canja ra'ayi" },
    { id: "O3", condition: "Idan kuna da hoto mai ƙaramin abu da ke ɓata shi", action: "cire shi da goge-goge na AI da faɗin gaskiya game da yadda aka gyara hoton", standard: "ba tare da canja abin da ya faru da gaske ta hanyar yaudara ba" },
    { id: "O4", condition: "Idan kuna da hotuna da yawa a waya", action: "nemo hotuna ta hanyar bincika wani abu, wuri ko kwanan wata, da yi wa waɗanda kuke so alama", standard: "kuna nemo tsofaffin hotuna biyu ba tare da gungurawa ba" },
    { id: "O5", condition: "Idan kuna da hotuna da yawa da za ku raba", action: "yin kundi ko saƙo da raba shi da wani a iyali", standard: "bayan kun nemi izini don hotunan wasu mutane" },
    { id: "O6", condition: "Idan kuna da tsohon hoto da aka buga a takarda", action: "yin kwafinsa na dijital da inganta shi, da yi wa duk wanda AI ya saka wa launi alama", standard: "da gefuna madaidaita, ɗan walƙiya kaɗan, kuma an ajiye na asali" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ɗauka da inganta hotuna",
      lessons: [
        {
          objectives: ["O1","O5"],
          title: "Ɗaukar hoto mai tsabta da wayarku",
          minutes: 5,
          goal: "Ɗaukar hoto mai tsabta da haske mai kyau da wayarku.",
          text: [
            "Hotuna masu kyau suna farawa da ƴan al'adu masu sauƙi. Ku goge ruwan tabarau (lens) na kyamara a hankali da kyalle mai laushi; alamun yatsa suna sa hotuna su dushe. Ku riƙe wayar da hannu biyu, ku kusantar da gwiwar hannunku jikinku don hoto ya tsaya.",
            "Haske shi ne mafi muhimmanci. Ku juya abin da kuke ɗauka zuwa taga ko hasken rana, haske yana bayanku, ba bayansu ba. Ku taɓa allon a fuskar mutumin ko furen da kuke son ya fito sarai; kyamarar za ta mayar da hankali a wurin.",
            "Ku matso kusa, ku cika hoton da abin da ke da muhimmanci. Ku ɗauki hotuna da yawa maimakon ɗaya; kuna iya ajiye mafi kyau ku goge sauran. Koyaushe ku nemi izinin mutane, musamman iyayen jikoki, kafin ku raba hotunansu."
          ],
          steps: ["Ku goge ruwan tabarau da kyalle mai laushi.", "Ku riƙe wayar da hannu biyu.", "Ku sa haske a bayanku, yana fuskantar abin da kuke ɗauka.", "Ku taɓa allon inda kuke son ya fito sarai.", "Ku ɗauki hotuna da yawa ku ajiye mafi kyau."],
          words: [["Ruwan tabarau (lens)", "ƙaramin gilashi mai zagaye a bayan waya da kyamarar ke gani ta cikinsa."], ["Mayar da hankali (focus)", "sa wani sashe na hoto ya fito sarai."]],
          slides: [
            { title: "Kafin ku ɗauka", bullets: ["Ku goge ruwan tabarau a hankali", "Ku riƙe da hannu biyu, gwiwar hannu a ciki"] },
            { title: "Haske da mayar da hankali", bullets: ["Haske a bayanku, a kan abin da kuke ɗauka", "Ku taɓa allo don mayar da hankali"] },
            { title: "Samun hoto mafi kyau", bullets: ["Ku matso kusa", "Ku ɗauki da yawa, ku ajiye mafi kyau", "Ku nemi izini kafin raba hotunan mutane"] }
          ],
          tryIt: "Ku goge ruwan tabarau, sannan ku ɗauki hotuna uku na fure, dabbar gida ko wani abu kusa da taga. Ku taɓa allo don mayar da hankali a kowanne. Ku duba su ku zaɓi wanda kuka fi so.",
          youCanNow: "ɗaukar hoto mai tsabta da haske mai kyau da wayarku.",
          quickCheck: [
            { objective: "O1", q: "Me yasa za ku taɓa allo a kan fuska kafin ku ɗauki hoto?", options: ["Yana nisanta hoton", "Yana sa kyamara ta mayar da hankali a wurin", "Yana goge hoton", "Yana kunna fitila (flash)"], answer: 1, why: "Taɓa allo yana faɗa wa kyamara inda za ta mayar da hankali don wurin ya fito sarai." },
            { objective: "O1", q: "Kuna ɗaukar hoton abokinku a cikin gida. A ina za ku tsaya?", options: ["Taga yana bayan abokinku", "A wani lungu mai duhu", "Taga yana bayanku, don haske ya faɗa kan abokinku", "Nesa can ƙarshen ɗaki"], answer: 2, why: "Haske ya fuskanci abin da kuke ɗauka, yana bayanku, ba bayansu ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gyara ta atomatik da gyare-gyare masu sauƙi",
          minutes: 5,
          goal: "Inganta hoto da gyara na taɓawa ɗaya, yanke gefuna da daidaitawa.",
          text: [
            "Manhajar hotunanku tana da maɓallin Edit (gyara). Ku buɗe hoto ku taɓa Edit. Yawancin manhajoji suna da maɓallin atomatik na taɓawa ɗaya, sau da yawa mai alamar sandar sihiri, da ke amfani da AI don gyara haske, launi da bambanci cikin daƙiƙa ɗaya.",
            "Sannan, ku yanke gefuna (crop) don cire wuri marar komai, ku daidaita layin sararin sama da ya karkace. Ku nemi kayan yankewa (sau da yawa murabba'i mai kibiyoyi), ku ja kusurwoyi zuwa ciki, ku juya kaɗan idan ana buƙata.",
            "Gyare-gyare yawanci ba sa lalata hotonku na asali. Yawancin manhajoji suna barin ku koma baya da Revert ko Undo. Ku taɓa Done ko Save idan kun gamsu."
          ],
          steps: ["Ku buɗe hoton ku taɓa Edit.", "Ku taɓa maɓallin atomatik ko na sandar sihiri.", "Ku yi amfani da kayan yankewa don cire wuri marar komai.", "Ku daidaita idan hoton ya karkace.", "Ku taɓa Done ko Save; ku yi amfani da Revert idan kun canja ra'ayi."],
          words: [["Gyara ta atomatik (enhance)", "inganta haske da launin hoto da kansa."], ["Yanke gefuna (crop)", "cire gefunan hoto."]],
          slides: [
            { title: "Taɓawa ɗaya don inganci", bullets: ["Ku buɗe hoton, ku taɓa Edit", "Ku taɓa maɓallin atomatik ko na sandar sihiri"] },
            { title: "Yankewa da daidaitawa", bullets: ["Ku cire wuri marar komai", "Ku daidaita layin sararin sama da ya karkace"] },
            { title: "Babu illa", bullets: ["Yawancin manhajoji suna ajiye na asali", "Ku yi amfani da Revert ko Undo", "Ku taɓa Done ko Save"] }
          ],
          tryIt: "Ku buɗe hoton da kuka fi so daga Darasi na 1. Ku yi gyara ta atomatik, ku yanke shi kaɗan, ku ajiye shi. Sannan ku kwatanta shi da na asali.",
          youCanNow: "inganta hoto da gyara ta atomatik, yanke gefuna da daidaitawa.",
          quickCheck: [
            { objective: "O2", q: "Me yanke gefunan hoto (crop) yake yi?", options: ["Yana cire gefuna da wuri marar komai", "Yana sa launuka su ƙara haske", "Yana raba hoton", "Yana goge hoton"], answer: 0, why: "Crop yana cire wuri marar komai don hoton ya cika da abin da ke da muhimmanci." },
            { objective: "O2", q: "Kun yi gyare-gyare kuma yanzu hoton ya ƙara muni. Me za ku yi?", options: ["Ku goge hoton", "Ku ɗauki hoton allo (screenshot)", "Ku ƙara yin gyare-gyare", "Ku taɓa Revert ko Undo don komawa baya"], answer: 3, why: "Gyare-gyare yawanci ba sa lalata na asali; Revert ko Undo suna dawo da shi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kayan AI da ke cire abubuwan da ke ɓata hoto",
          minutes: 5,
          goal: "Cire ƙaramin abu da ke ɓata hoto da goge-goge na AI, da sanin lokacin da ya kamata a faɗi gaskiya game da gyara.",
          text: [
            "Yawancin sababbin wayoyi da manhajojin hotuna suna da goge-goge na AI (AI eraser): kuna zagaye ko shafa kan ƙaramin abin da ba ku so, kamar kwandon shara, baƙo a baya ko wayar wutar lantarki, sai AI ya cike wurin.",
            "Ku duba allon Edit don kayan da ake kira kamar Magic Eraser, Clean Up ko Object Eraser. Sunayen sun bambanta daga waya zuwa waya, kuma wasu wayoyi ba su da shi. Idan naku ba shi da shi, ku tambayi mataimakin AI: \"Ta yaya zan cire wani abu daga hoto a wayata?\" kuma ku faɗa masa samfurin wayarku.",
            "Ƙananan gyare-gyare ba laifi ba ne a hotunan iyali. Amma kada ku yi amfani da AI don canja abin da ya faru da gaske a hoto ta hanyar da za ta iya yaudarar mutane, kuma ku faɗi gaskiya idan wani ya tambaya ko an gyara hoto."
          ],
          steps: ["Ku buɗe hoton ku taɓa Edit.", "Ku nemi kayan gogewa ko tsaftacewa.", "Ku shafa ko zagaye ƙaramin abin da ke ɓata hoton.", "Ku duba sakamakon ku ajiye, ko ku mayar.", "Ku faɗi gaskiya game da hotunan da aka gyara."],
          words: [["Goge-goge na AI (AI eraser)", "kayan da ke cire wani abu daga hoto ya cike bayan."], ["Yaudara", "sa wani ya yarda da abin da ba gaskiya ba."]],
          slides: [
            { title: "Ku goge ƙananan abubuwan da ke ɓata hoto", bullets: ["Kwandon shara, baƙi, wayoyin wutar lantarki", "Ku shafa ko zagaye su", "AI yana cike wurin"] },
            { title: "Nemo kayan", bullets: ["Sunaye sun bambanta daga waya zuwa waya", "Ku duba Edit don kayan gogewa ko tsaftacewa", "Ku tambayi AI tare da samfurin wayarku"] },
            { title: "Ku faɗi gaskiya", bullets: ["Ƙananan gyare-gyare ba laifi ba ne", "Kada ku canja abin da ya faru da gaske", "Ku faɗa idan an gyara hoto"] }
          ],
          tryIt: "Ku nemo hoto mai ƙaramin abu da ke ɓata shi. Ku duba Edit don kayan gogewa ko tsaftacewa ku gwada cire shi. Idan wayarku ba ta da shi, ku tambayi mataimakin AI yadda ake yi a samfurin wayarku.",
          youCanNow: "amfani da goge-goge na AI don tsaftace hoto, da amfani da shi da gaskiya.",
          quickCheck: [
            { objective: "O3", q: "Me goge-goge na AI yake yi?", options: ["Yana goge dukkan hoton", "Yana cire ƙaramin abin da kuka shafa ya cike wurin", "Yana ƙara mutane a hoto", "Yana mayar da hoton baƙi da fari"], answer: 1, why: "Kuna shafa ko zagaye ƙaramin abu, sai AI ya cike wurin." },
            { objective: "O3", q: "Jikanku ya tambaya ko kun gyara hoton bakin teku. Kun cire kwandon shara. Me za ku ce?", options: ["Ku ce a'a, ba a taɓa gyara shi ba", "Ku canja maganar", "Ku goge hoton", "Ku faɗi gaskiya cewa kun cire kwandon shara"], answer: 3, why: "Ƙananan gyare-gyare ba laifi ba ne, amma ku faɗi gaskiya idan wani ya tambaya ko an gyara hoto." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ɗauka da inganta hotuna",
        questions: [
          { objective: "O1", q: "Hotunanku suna dushewa. Wane abu mai sauƙi ya kamata ku fara gwadawa?", options: ["Ku girgiza wayar", "Ku sayi sabuwar waya", "Ku goge ruwan tabarau da kyalle mai laushi", "Ku kashe allon"], answer: 2, why: "Alamun yatsa a ruwan tabarau suna sa hotuna su dushe." },
          { objective: "O1", q: "A ina ya kamata haske ya kasance don hoton fuska mai kyau?", options: ["A kan abin da kuke ɗauka, a bayanku", "A bayan abin da kuke ɗauka", "Babu inda", "A ƙarƙashin tebur"], answer: 0, why: "Haske a fuska yana nuna ta sarai." },
          { objective: "O1", q: "Me taɓa allo kafin ku ɗauka yake yi?", options: ["Yana aika hoton", "Yana goge hoton", "Yana kunna waƙa", "Yana mayar da hankali a wurin"], answer: 3, why: "Taɓawa yana faɗa wa kyamara inda za ta mayar da hankali." },
          { objective: "O2", q: "Me maɓallin sandar sihiri ko na atomatik yake yi yawanci?", options: ["Yana goge hoton", "Yana gyara haske da launi da taɓawa ɗaya", "Yana raba shi ga kowa a fili", "Yana buga shi a takarda"], answer: 1, why: "Gyaran AI ne na taɓawa ɗaya." },
          { objective: "O3", q: "Yaushe BAI dace ba a yi amfani da goge-goge na AI?", options: ["Don cire kwandon shara", "Don canja abin da ya faru da gaske ta hanyar yaudara", "Don cire wayar wutar lantarki", "Don tsaftace hoton iyali"], answer: 1, why: "Gyare-gyare kada su yaudari mutane." }
        ]
      }
    },
    {
      name: "Babi na 2: Nemo, tsarawa da raba hotuna",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nemo hotuna ta hanyar bincike",
          minutes: 5,
          goal: "Nemo tsofaffin hotuna ta hanyar rubuta kalma a binciken manhajar hotunanku.",
          text: [
            "Idan kuna da dubban hotuna, gungurawa yana gajiyarwa. Manhajojin hotuna kamar Apple Photos da Google Photos suna amfani da AI don gane abin da ke cikin hotunanku, don haka kuna iya bincika \"kare\", \"bakin teku\", \"keken ranar haihuwa\" ko \"ƙanƙara\".",
            "Ku buɗe manhajar hotunanku, ku taɓa Search (bincike, sau da yawa alamar gilashin ƙara girma), ku rubuta kalma. Kuna kuma iya bincika ta wuri (\"Florida\") ko ta wata da shekara (\"July 2019\"). Yawancin manhajoji suna iya haɗa hotunan fuska ɗaya don ku sa wa mutane suna; wannan zaɓi ne, kuma kuna iya kashe shi a saitunan (settings).",
            "Ku yi amfani da abubuwan da kuke so (favorites) don ajiye mafi kyawun hotunanku tare: ku taɓa alamar zuciya a hoto, sannan ku nemo dukkan waɗanda kuke so a kundi ɗaya."
          ],
          steps: ["Ku buɗe manhajar hotunanku.", "Ku taɓa Search ko alamar gilashin ƙara girma.", "Ku rubuta wani abu, wuri ko kwanan wata.", "Ku taɓa alamar zuciya a hotunan da kuke so don su zama favorites."],
          words: [["Kundi (album)", "rukunin hotuna da aka ajiye tare, kamar shafi a littafin hotuna."], ["Favorites (waɗanda kuke so)", "hotunan da kuka yi wa alamar zuciya don ku nemo su da sauri."]],
          slides: [
            { title: "Ku bar AI ya nemo hotunanku", bullets: ["Ku bincika \"kare\", \"bakin teku\", \"keken ranar haihuwa\"", "Ko wuri, ko wata da shekara"] },
            { title: "Yadda ake bincike", bullets: ["Ku buɗe manhajar hotunanku", "Ku taɓa alamar gilashin ƙara girma", "Ku rubuta kalma"] },
            { title: "Ku ajiye mafi kyau", bullets: ["Ku taɓa zuciya don favorites", "Haɗa fuskoki zaɓi ne"] }
          ],
          tryIt: "Ku bincika abubuwa biyu a manhajar hotunanku, kamar \"fure\" da wani wuri da kuka ziyarta. Ku yi wa hoto ɗaya daga kowane bincike alama a matsayin favorite.",
          youCanNow: "nemo tsofaffin hotuna ta hanyar bincike da ajiye mafi kyau a matsayin favorites.",
          quickCheck: [
            { objective: "O4", q: "Ta yaya manhajar hotuna za ta nemo dukkan hotunanku na ƙanƙara?", options: ["AI yana gane abin da ke cikin hotunanku, don haka kuna iya bincika \"ƙanƙara\"", "Tana tambayar iyalinku", "Tana karanta sunayen fayil da kuka rubuta", "Ba za ta iya ba; dole ku gungura"], answer: 0, why: "Manhajojin hotuna suna amfani da AI don gane abubuwa a hotuna don ku bincika da kalma." },
            { objective: "O4", q: "Kuna son nemo hotunan tafiyarku a July 2019. Me za ku rubuta a Search?", options: ["\"Hotuna\"", "\"July 2019\"", "\"Kyamara\"", "Babu komai; ku gungura maimakon haka"], answer: 1, why: "Kuna iya bincika ta wata da shekara, ta wuri ko ta wani abu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin kundi da raba shi",
          minutes: 6,
          goal: "Yin kundi da raba shi da iyali.",
          text: [
            "Kundi tarin hotuna ne a kan jigo ɗaya, kamar \"Bazara a bakin tafki\" ko \"Shekarar farko ta Emma\". Yin ɗaya hanya ce mai daɗi ta raba tunawa.",
            "A yawancin manhajojin hotuna: ku zaɓi hotuna da yawa ta hanyar taɓa Select sannan kowane hoto, ku taɓa maɓallin Share (raba) ko alamar ƙari (+), ku zaɓi ƙara su a sabon kundi ko kundin da ake rabawa (shared album). Ku ba shi suna. Kundin da ake rabawa yana barin ƴan iyali da kuka gayyata su ga hotunan, kuma sau da yawa su ƙara nasu.",
            "Kuna kuma iya kawai aika ƴan hotuna ta saƙon tes ko imel. Kafin ku raba hotunan jikoki, ku tambayi iyayensu ko ba laifi, da yadda za a raba su."
          ],
          steps: ["Ku taɓa Select ku zaɓi hotuna da yawa.", "Ku taɓa Share ko alamar ƙari.", "Ku zaɓi sabon kundi ko kundin da ake rabawa ku ba shi suna.", "Ku gayyaci ƴan iyali ta suna, lambar waya ko imel.", "Ku tambayi iyaye kafin raba hotunan yara."],
          words: [["Kundin da ake rabawa (shared album)", "kundin da mutanen da kuka gayyata za su iya gani, kuma sau da yawa su ƙara hotuna."], ["Select (zaɓa)", "zaɓar abubuwa da yawa a lokaci ɗaya."]],
          slides: [
            { title: "Kundi yana ba da labari", bullets: ["\"Bazara a bakin tafki\"", "\"Shekarar farko ta Emma\""] },
            { title: "Ku yi ɗaya", bullets: ["Ku taɓa Select, ku zaɓi hotuna", "Ku taɓa Share ko +", "Sabon kundi ko kundin da ake rabawa, sannan ku ba shi suna"] },
            { title: "Ku raba cikin ladabi", bullets: ["Ku gayyaci ƴan iyali", "Ko ku aika kaɗan ta tes ko imel", "Ku tambayi iyaye kafin raba hotunan yara"] }
          ],
          tryIt: "Ku yi kundi na hotuna biyar da kuka fi so mai suna a sarari. Ku raba shi, ko ku aika biyu daga cikin hotunan, ga wani ɗaya a iyali.",
          youCanNow: "yin kundin hotuna da raba shi da iyali.",
          quickCheck: [
            { objective: "O5", q: "Mene ne kundin da ake rabawa (shared album)?", options: ["Littafin hotuna na takarda", "Hotunan da ku kaɗai za ku iya gani", "Kundin da ƴan iyali da kuka gayyata za su iya gani kuma sau da yawa su ƙara", "Jerin favorites"], answer: 2, why: "Kundin da ake rabawa yana barin mutanen da kuka gayyata su ga hotunan, kuma sau da yawa su ƙara nasu." },
            { objective: "O5", q: "Kuna son raba hotunan jikarku a kundin iyali. Me za ku fara yi?", options: ["Ku tambayi iyayenta ko ba laifi da yadda za a raba", "Ku saka su a fili ga kowa", "Ku raba su da kowa a cikin lambobinku", "Ku goge fuskarta daga hoton"], answer: 0, why: "Ku tambayi iyaye kafin raba hotunan yara." }
          ]
        },
        {
          objectives: ["O6","O2"],
          title: "Kawo tsofaffin hotunan takarda cikin wayarku",
          minutes: 5,
          goal: "Mayar da tsohon hoton takarda zuwa kwafin dijital da inganta shi.",
          text: [
            "Iyalai da yawa suna da akwatunan tsofaffin hotunan takarda. Kuna iya yin kwafin dijital don rabawa da kiyayewa, ta amfani da wayarku kawai.",
            "Ku shimfiɗa hoton a kwance kusa da taga, ba a ƙarƙashin rana kai tsaye ba, ku ɗauki hoto daidai daga sama don gefuna su yi murabba'i. Manhajojin sikan (scan) kyauta, kamar PhotoScan na Google, an yi su don wannan kuma suna rage walƙiya. Sannan ku yi gyara ta atomatik da yankewa, kamar a Darasi na 2.",
            "Wasu manhajoji suna amfani da AI don saka launi ko gyara tsofaffin hotuna. Suna iya zama abin sha'awa, amma launukan hasashen AI ne, ba abin da ya faru da gaske ba. Ku ajiye sikan na asali ma, kuma ku faɗa cewa an saka wa kwafin launi idan kun raba shi. Kuna iya tambayar mataimakin AI ya taimaka rubuta gajeren bayanin hoto (caption) da sunaye da shekara."
          ],
          steps: ["Ku shimfiɗa hoton a kwance a hasken rana mai laushi.", "Ku riƙe wayar daidai a samansa.", "Ku ɗauki hoton, ko ku yi amfani da manhajar sikan don rage walƙiya.", "Ku yi gyara ta atomatik ku yanke.", "Ku ajiye na asali; ku yi wa duk kwafin da AI ya saka wa launi alama."],
          words: [["Sikan (scan)", "yin kwafin dijital na hoto ko takarda."], ["Walƙiya (glare)", "haske mai ƙyalli a kan hoto daga hasken da ke nunawa daga gare shi."], ["Saka launi (colorize)", "ƙara launi ga hoto baƙi da fari."]],
          slides: [
            { title: "Ku kiyaye tsofaffin hotunanku", bullets: ["Ku yi kwafin dijital don rabawa da kiyayewa"] },
            { title: "Yadda ake kwafi", bullets: ["A kwance, a hasken rana mai laushi", "Waya daidai a sama", "Manhajar sikan tana rage walƙiya"] },
            { title: "Saka launi da AI", bullets: ["Launukan hasashe ne", "Ku ajiye sikan na asali", "Ku yi wa kwafin da aka saka wa launi alama"] }
          ],
          tryIt: "Aikin ƙarshe: ku ɗauki sababbin hotuna uku na wani abu da kuke so, ku inganta mafi kyau da gyara ta atomatik da wani gyara ɗaya, ku nemo tsofaffin hotuna biyu ta bincike, sannan ku raba dukkan uku a ƙaramin kundi ko saƙo ga iyali. Idan kuna da tsohon hoton takarda, ku ƙara kwafinsa na sikan ma.",
          youCanNow: "ɗauka, inganta, nemo, tsarawa da raba hotuna, har da kwafin tsofaffin hotunan iyali na takarda.",
          quickCheck: [
            { objective: "O6", q: "Mene ne walƙiya (glare) a hoton tsohon hoton takarda?", options: ["Fuska mai dushewa", "Haske mai ƙyalli daga hasken da ke kan hoton", "Alamar yankewa", "Kusurwar da ta ɓace"], answer: 1, why: "Walƙiya haske ne mai ƙyalli; manhajojin sikan kamar PhotoScan suna taimakawa wajen rage ta." },
            { objective: "O6", q: "Wata manhaja ta saka launi a hoton auren iyayenku. Ta yaya za ku raba shi?", options: ["Ku ce dama yana da launi", "Ku goge na asali baƙi da fari", "Ku faɗa cewa an saka masa launi, ku ajiye sikan na asali", "Kada ku faɗa wa kowa"], answer: 2, why: "Launukan AI hasashe ne, don haka ku yi wa kwafin da aka saka wa launi alama ku ajiye na asali." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Nemo, tsarawa da raba hotuna",
        questions: [
          { objective: "O4", q: "Ta yaya za ku nemo dukkan hotunanku na bakin teku da sauri?", options: ["Ku tambayi baƙo", "Ku gungura na awa ɗaya", "Ku goge sauran hotuna", "Ku bincika \"bakin teku\" a manhajar hotunanku"], answer: 3, why: "Binciken AI yana gane abin da ke cikin hotuna." },
          { objective: "O4", q: "Me taɓa alamar zuciya a hoto yake yi?", options: ["Yana yi masa alama a matsayin favorite", "Yana goge shi", "Yana saka shi a fili ga kowa", "Yana buga shi a takarda"], answer: 0, why: "Ana ajiye favorites tare don a nemo su da sauƙi." },
          { objective: "O5", q: "Mene ne kundin da ake rabawa?", options: ["Littafin takarda", "Kundin da aka goge", "Kundin da mutanen da kuka gayyata za su iya gani", "Jerin kalmomin sirri"], answer: 2, why: "Kundin da ake rabawa yana barin iyali su gani su ƙara hotuna." },
          { objective: "O5", q: "Kafin ku raba hotunan jikoki, ya kamata ku:", options: ["Babu komai", "Saka su ko'ina", "Buga su ga baƙi", "Tambayi iyayensu"], answer: 3, why: "Iyaye ne ke yanke yadda za a raba hotunan ƴaƴansu." },
          { objective: "O6", q: "Wata manhajar AI ta saka launi a tsohon hoto baƙi da fari. Launukan:", options: ["An ɗauko su daga ainihin fim", "Daidai ne da abin da ya faru", "Hasashen AI ne", "Koyaushe daidai ne"], answer: 2, why: "Saka launi hasashe ne; ku ajiye na asali ku yi alama." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ɗaukar Hoto",
    questions: [
      { objective: "O1", q: "Ruwan tabarau (lens) shi ne:", options: ["Allon waya", "Ƙaramin gilashin da kyamara ke gani ta cikinsa", "Batir", "Caja"], answer: 1, why: "Ruwan tabarau yana ɗaukar hoton." },
      { objective: "O1", q: "Don hoto ya tsaya, ku riƙe wayar:", options: ["Da hannu biyu, gwiwar hannu a ciki", "Da yatsa ɗaya", "Sama da kanku", "Juye"], answer: 0, why: "Hannu biyu suna sa ta tsaya." },
      { objective: "O1", q: "Don hoton fuska, haske ya kasance:", options: ["A fuskar mutumin", "A bayan mutumin", "A kashe", "A ƙarƙashin mutumin"], answer: 0, why: "Haske a fuska yana nuna ta sarai." },
      { objective: "O1", q: "Ɗaukar hotuna da yawa yana taimakawa domin:", options: ["Wayoyi suna buƙatar atisaye", "Kuna iya ajiye mafi kyau", "Yana rage amfani da batir", "Yana goge tsofaffin hotuna"], answer: 1, why: "Hotuna da yawa, damar samun mai kyau sosai ta ƙaru." },
      { objective: "O2", q: "Don fara gyaran hoto, ku taɓa:", options: ["Share", "Delete", "Edit", "Settings"], answer: 2, why: "Edit yana buɗe kayan gyara." },
      { objective: "O2", q: "\"Crop\" yana nufin:", options: ["Gogewa", "Ƙara launi", "Rabawa", "Cire gefuna"], answer: 3, why: "Crop yana yanke gefunan hoto." },
      { objective: "O2", q: "Idan ba ku son gyare-gyarenku, yawanci kuna iya:", options: ["Sayen na asali", "Ba za ku taɓa komawa ba", "Revert ko Undo", "Sake kunna wayar"], answer: 2, why: "Yawancin manhajoji suna ajiye na asali." },
      { objective: "O3", q: "Ana amfani da goge-goge na AI don:", options: ["Cire ƙaramin abu da ke ɓata hoto", "Goge dukkan hotunanku", "Buga hotuna", "Kiran iyali"], answer: 0, why: "Yana cire abubuwa ya cike wurin." },
      { objective: "O3", q: "Kamar wayarku ba ta da goge-goge na AI. Mataki mai kyau shi ne:", options: ["Goge manhajar hotuna", "Daina ɗaukar hoto", "Raba kalmar sirrinku", "Tambayar mataimakin AI yadda ake yi a samfurin wayarku"], answer: 3, why: "Sunayen kayan sun bambanta; AI zai iya yi muku jagora." },
      { objective: "O3", q: "Amfani da AI don canja abin da ya faru da gaske a hoto don ruɗar mutane:", options: ["Koyaushe ba laifi", "Yaudara ce kuma a guje ta", "Dole ne", "Abin tsaro ne"], answer: 1, why: "Gyare-gyare kada su yaudari mutane." },
      { objective: "O4", q: "Binciken manhajar hotuna yana iya nemo hotuna ta:", options: ["Lambobin fayil kawai", "Abubuwa, wurare da kwanakin wata", "Launi kawai", "Babu komai"], answer: 1, why: "AI yana gane abin da ke ciki, wurare da kwanakin wata." },
      { objective: "O4", q: "Haɗa fuskoki a manhajar hotuna:", options: ["Kalmar sirri ce", "Dole ne", "Ƙwayar cuta (virus) ce", "Zaɓi ne kuma ana iya kashe shi"], answer: 3, why: "Kuna iya zaɓar ko za ku yi amfani da shi." },
      { objective: "O5", q: "Kundi (album) shi ne:", options: ["Rukunin hotuna da aka ajiye tare", "Hoto ɗaya", "Kyamara", "Matattara (filter)"], answer: 0, why: "Kundi yana tara hotunan da suke da alaƙa." },
      { objective: "O5", q: "Don zaɓar hotuna da yawa a lokaci ɗaya, ku taɓa:", options: ["Camera", "Delete", "Select", "Settings"], answer: 2, why: "Select yana barin ku zaɓi hotuna da yawa." },
      { objective: "O5", q: "Hanya mai sauƙi ta raba ƴan hotuna ita ce:", options: ["Saka su a shafin baƙo", "Aika wayar ta gidan waya", "Buga su a tura ta fax", "Aika su ta tes ko imel"], answer: 3, why: "Tes da imel suna raba hotuna da sauƙi." },
      { objective: "O6", q: "Don kwafin tsohon hoton takarda, ku riƙe wayar:", options: ["A bayan hoton", "A karkace sosai", "Daidai a saman hoton", "Nesa can ƙarshen ɗaki"], answer: 2, why: "Daidai a sama yana sa gefuna su yi murabba'i." },
      { objective: "O6", q: "Walƙiya (glare) ita ce:", options: ["Wani nau'in kundi", "Haske mai ƙyalli daga hasken da ke kan hoton", "Matattara (filter)", "Kalmar sirri"], answer: 1, why: "Walƙiya tana ɓoye sassan hoto." },
      { objective: "O6", q: "Manhajojin sikan kamar PhotoScan na Google suna taimakawa ta hanyar:", options: ["Rage walƙiya", "Ƙara kalmomin sirri", "Goge hotunan takarda", "Yin kira"], answer: 0, why: "An gina su don kwafin hotunan takarda da kyau." },
      { objective: "O6", q: "Idan kun raba hoton da AI ya saka wa launi, ya kamata ku:", options: ["Faɗa cewa an saka masa launi, ku ajiye na asali", "Ku ce shi ne na asali", "Goge na asali", "Ɓoye shi"], answer: 0, why: "Launukan hasashe ne; gaskiya tana da muhimmanci." },
      { objective: "O6", q: "AI zai iya taimakawa da bayanin tsohon hoto (caption) ta hanyar:", options: ["Sanin wanda ke ciki", "Taimakawa wajen rubuta shi bayan kun ba shi sunaye da shekara", "Nemo adireshinsu", "Faɗin ranakun haihuwarsu daidai ta hasashe"], answer: 1, why: "Ku ne kuke ba da bayanan gaskiya; AI yana taimakawa da kalmomi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      7,
      9,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Hotuna masu tsabta",
        objective: "O1",
        notYet: "Hotunan suna dushewa ko suna da duhu, ko an ɗauki hoton mutum ba tare da neman izini ba.",
        meets: "Hotuna uku masu tsabta da haske mai kyau, da izinin duk mutumin da ke cikinsu.",
        exceeds: "Abin da aka ɗauka ya cika hoton, kuma an zaɓi mafi kyau daga hotuna da yawa."
      },
      {
        name: "An inganta hoto",
        objective: "O2",
        notYet: "Babu gyara, ko gyare-gyaren sun sa hoton ya ƙara muni.",
        meets: "An inganta mafi kyawun hoto da gyara ta atomatik da wani gyara ɗaya, kamar yankewa.",
        exceeds: "Zai iya nuna yadda ake mayar da gyaran (Revert) da bayanin dalilin da ya zaɓe shi."
      },
      {
        name: "An nemo tsofaffin hotuna",
        objective: "O4",
        notYet: "An nemo hotuna ta dogon gungurawa kawai, ko ba a nemo su ba.",
        meets: "An nemo tsofaffin hotuna biyu ta amfani da Search da wani abu, wuri ko kwanan wata.",
        exceeds: "An yi wa favorites alama don a sake nemo su da sauƙi."
      },
      {
        name: "An raba da iyali",
        objective: "O5",
        notYet: "Ba a raba hotunan ba, ko an raba su ba tare da izini ba.",
        meets: "An raba dukkan hotuna uku a ƙaramin kundi ko saƙo ga wani a iyali.",
        exceeds: "An ba kundin suna a sarari, kuma an gayyaci iyali su ƙara hotuna."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka raba kundin hotuna da iyali cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi kwafin dijital na tsofaffin hotunan iyali suka raba su",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Manya da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai kyamara da manhajar hotuna kamar Apple Photos ko Google Photos",
      "Kyalle mai laushi don ruwan tabarau, da tsofaffin hotunan takarda ɗaya ko biyu",
      "Manhajar sikan kyauta kamar PhotoScan na Google (zaɓi ne)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku raba masu koyo rukuni-rukuni bisa nau'in wayarsu; kayan Edit da na gogewa suna da sunaye daban-daban a wayoyi daban-daban.",
      "Ku nemi masu koyo su kawo tsohon hoton takarda don atisayen yin kwafin dijital.",
      "Ku nuna misalin neman izini kafin ɗauka ko raba hotunan wasu mutane, musamman yara.",
      "Ku tattauna gaskiya game da gyaran AI da hotunan da aka saka wa launi, da ajiye na asali.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
