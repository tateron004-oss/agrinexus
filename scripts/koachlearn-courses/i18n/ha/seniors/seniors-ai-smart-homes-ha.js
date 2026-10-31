"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-smart-homes.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Voice commands stay in English inside quotes (most smart speakers do not understand Hausa); a Hausa meaning follows where helpful.

module.exports = {
  id: "seniors-ai-smart-homes-ha",
  lang: "ha",
  translationOf: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "AI da Gidaje Masu Na'urori na Zamani (Smart Home)",
  skills: "Fahimtar na'urorin gida na zamani, Ba lasifika mai wayo umarni a sarari da murya, Shirya ayyuka na yau da kullum (routine) mai sauƙi, Zaɓar na'urori don tsaro da jin daɗi, Kiyaye sirrinku a gida",
  outcome: "amfani da lasifika mai wayo (smart speaker) ko mataimakin murya na wayarku don ba da umarni a sarari da baki, tsarawa ko saita routine ɗaya mai sauƙi na yau da kullum (kamar tunatarwa da safe da yanayin rana), da kiyaye sirrinku ta hanyar kashe makirufo da duba saitunan sirri.",
  about: [
    "Gida mai na'urori na zamani (smart home) gida ne da ke da na'urorin da za ku iya sarrafawa da murya ko daga wayarku: lasifikan da ke amsa tambayoyi, fitilun da ke kunna kansu, soket ɗin da ke kunna da kashe fitila, da ƙararrawar ƙofa mai kyamara. Ga tsofaffi, waɗannan na iya sauƙaƙa rayuwar yau da kullum kuma su ƙara tsaro, musamman ga wanda ke zaune shi kaɗai.",
    "Za ku koyi abin da na'urorin da aka fi amfani da su ke yi, yadda ake magana da lasifika mai wayo kamar Amazon Echo (Alexa) ko Google Nest (Google Assistant), yadda ake saita routine mai sauƙi, da yadda ake kiyaye gidanku da sirrinku.",
    "Ba sai kuna da wata na'ura ta zamani ba kafin ku ɗauki wannan kwas: kuna iya yin atisayen murya da mataimakin da ke cikin wayarku. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku tsara routine ɗaya na yau da kullum don gidanku, kamar \"Good morning\" (Barka da safiya): lasifikar ko wayar tana faɗa muku yanayin rana, tana tunatar da ku maganinku na safe, kuma tana kunna fitila. Ku rubuta shi, ku saita iya abin da na'urorinku suka bari, sannan ku yi atisayensa da murya. Bayan haka ku nemo maɓalli ko saitin kashe makirufo ku yi amfani da shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi, da yawa suna zaune su kaɗai, waɗanda ke da ko suke tunanin samun lasifika mai wayo, fitilu masu wayo ko ƙararrawar ƙofa mai kyamara, sau da yawa kyauta daga iyali, kuma suna son su taimaka da tunatarwa, tsaro da kira.",
    startingPoint: "Suna amfani da waya don kira da saƙon tes, kuma suna da Wi-Fi a gida. Da yawa suna da lasifika mai wayo amma suna amfani da ita ne don yanayin rana ko waƙa kawai, kuma ba su tabbatar da yadda routine ko saitunan sirri ke aiki ba.",
    gap: "Na'urorin gida na zamani na iya taimaka wa tsofaffi su zauna lafiya kuma da kansu, da tunatarwa, fitilun da ke hana faɗuwa da kira da murya, amma da yawa ana barin su ba a amfani, ko suna damun masu koyo game da sirri. Umarni a sarari, routine ɗaya mai sauƙi, da sanin yadda ake kashe makirufo da duba saituna suna mayar da su taimako na yau da kullum.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli, da manyan matakai masu sauƙi",
      "Na'urori: Amazon Echo ko Google Nest, ko mataimakin murya na waya; menu-menu na manhajoji suna canjawa da lokaci",
      "Lokaci: kusan minti 5 a kowane darasi, a hankali",
      "Abubuwan gaggawa sun bambanta bisa na'ura da ƙasa; ba kowace lasifika ce ke iya kiran 911 ba",
      "Sirri: lasifika da kyamara suna ɗaukar rikodi; kada ku taɓa ba da code da aka turo muku ta tes ga mai kira"
    ],
    prerequisites: "Babu. Masu koyo da ba su da lasifika mai wayo za su iya bi da mataimakin murya na wayarsu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka nuna muku na'urorin gida na zamani da aka saba gani", action: "faɗin abin da lasifika mai wayo, soket mai wayo, kwan fitila mai wayo da ƙararrawar ƙofa mai kyamara kowannensu zai iya yi", standard: "kuna samun aƙalla 3 cikin 4 daidai" },
    { id: "O2", condition: "Ta amfani da lasifika mai wayo ko mataimakin murya na wayarku", action: "ba da umarni a sarari da baki da ke farawa da kalmar farkawa (wake word)", standard: "ta yadda na'urar za ta yi abin da kuka nema, kuna gwada kalmomi masu sauƙi idan ya cancanta" },
    { id: "O3", condition: "Ta amfani da manhajar Alexa ko Google Home", action: "tsarawa da saita routine na yau da kullum da ke yin abubuwa da yawa da jimla ɗaya", standard: "mai ayyuka biyu ko uku, kuma an yi atisayensa da murya" },
    { id: "O4", condition: "Idan kun san matsalolin tsaro da kuke son magancewa a gida", action: "zaɓar abubuwan na'urori masu wayo da suka dace da su, da duba abin da na'urar za ta iya yi da wanda ba za ta iya ba", standard: "kafin ku saya ko ku dogara da ita" },
    { id: "O5", condition: "Idan kuna son sirri a gida", action: "kashe makirufo da duba saitunan sirri da rikodin murya", standard: "kuma ba ku ba da code da aka turo ta tes ko kalmar sirri ga mai kira ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sanin gida mai na'urori na zamani",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da na'urorin gida na zamani ke yi",
          minutes: 5,
          goal: "Faɗi sunayen na'urorin gida na zamani da aka saba gani da abin da kowanne zai iya yi muku.",
          text: [
            "Na'urorin gida na zamani suna haɗuwa da Wi-Fi na gidanku domin ku iya sarrafa su da murya ko da manhaja a wayarku.",
            "Waɗanda aka fi gani: lasifika mai wayo, kamar Amazon Echo mai Alexa ko Google Nest mai Google Assistant, tana amsa tambayoyi, tana kunna waƙa da rediyo, tana saita agogon ƙirga lokaci (timer) da tunatarwa, kuma tana yin kira. Soket mai wayo (smart plug) yana bar ku kunna ko kashe fitila ko fanka da murya ko a lokacin da aka tsara. Kwan fitila mai wayo yana canja hasken. Ƙararrawar ƙofa mai kyamara tana bar ku ga wanda ke ƙofa a wayarku kafin ku buɗe.",
            "Ga tsofaffi da ke zaune su kaɗai, waɗanda suka fi amfani sau da yawa su ne lasifika don tunatarwa da kira, fitilu masu wayo don kada ku taɓa shiga ɗaki mai duhu, da ƙararrawar ƙofa mai kyamara don tsaro."
          ],
          words: [["Na'ura mai wayo (smart device)", "na'urar da ke haɗuwa da intanet domin ku sarrafa ta da murya ko waya."], ["Wi-Fi", "intanet mara waya da ke gidanku."], ["Soket mai wayo (smart plug)", "abin da ake toshe a soket wanda ke bar ku kunna ko kashe fitila ko wata na'ura da murya ko manhaja."]],
          slides: [
            { title: "Na'urori masu wayo suna haɗuwa da Wi-Fi", bullets: ["Kuna sarrafa su da murya", "Ko da manhaja a wayarku"] },
            { title: "Na'urorin da aka saba gani", bullets: ["Lasifika mai wayo: tambayoyi, waƙa, tunatarwa, kira", "Soket da kwan fitila masu wayo: kunna da kashe fitila", "Ƙararrawar ƙofa mai kyamara: ganin wanda ke ƙofa"] },
            { title: "Mafi amfani idan kuna zaune ku kaɗai", bullets: ["Tunatarwa da kira da murya", "Babu sauran ɗaki mai duhu", "Ganin baƙi kafin ku buɗe"] }
          ],
          tryIt: "Ku zagaya gidanku ku rubuta ayyuka biyu na yau da kullum da na'ura mai wayo za ta iya sauƙaƙawa, kamar kunna fitilar da ke da wuyar kaiwa, ko ganin wanda ke ƙofa.",
          youCanNow: "faɗin sunayen na'urorin gida na zamani da aka saba gani da yadda za su iya taimaka muku.",
          quickCheck: [
            { objective: "O1", q: "Me soket mai wayo (smart plug) ke yi?", options: ["Yana cajin wayarku da sauri", "Yana bar ku kunna ko kashe fitila ko fanka da murya ko a lokacin da aka tsara", "Yana ɗaukar bidiyo", "Yana yin kiran waya"], answer: 1, why: "Soket mai wayo yana sarrafa duk abin da aka toshe a cikinsa, da murya ko bisa tsari." },
            { objective: "O1", q: "Kuna zaune ku kaɗai kuma kuna damuwa game da wanda ke ƙwanƙwasa ƙofa da dare. Wace na'ura ta fi taimakawa?", options: ["Kwan fitila mai wayo", "Soket mai wayo", "Ƙararrawar ƙofa mai kyamara", "Lasifikar waƙa"], answer: 2, why: "Ƙararrawar ƙofa mai kyamara tana bar ku ga wanda ke ƙofa a wayarku kafin ku buɗe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Magana da lasifika mai wayo",
          minutes: 5,
          goal: "Ba da umarni a sarari da baki ga lasifika mai wayo ko mataimakin wayarku.",
          text: [
            "Kuna farkar da lasifika mai wayo da kalmar farkawarta (wake word): \"Alexa\" don Amazon Echo, ko \"Hey Google\" don Google Nest. Wani haske yana nuna cewa tana saurare. Mataimakin murya na wayarku yana aiki haka nan da \"Hey Siri\" ko \"Hey Google\".",
            "Ku yi magana a sarari, a saurin magana na yau da kullum, kuma ku faɗi daidai abin da kuke so. Yawancin lasifikan ba sa jin Hausa, don haka ana ba da umarni da Turanci: \"Alexa, what is the weather today?\" (yaya yanayin rana yau?) \"Hey Google, set a timer for 15 minutes.\" (saita lokaci na minti 15) \"Alexa, play the classical music station.\" (kunna tashar waƙoƙin gargajiya na Turai) \"Hey Google, call Margaret.\" (kira Margaret)",
            "Idan ba ta gane ba, ku sake faɗa da kalmomi masu sauƙi. Sababbin lasifikan suna amfani da AI don gane tambayoyi na yau da kullum, amma gajerun umarni masu sarari har yanzu sun fi aiki."
          ],
          steps: ["Ku faɗi kalmar farkawa: \"Alexa\" ko \"Hey Google\".", "Ku jira hasken.", "Ku faɗi daidai abin da kuke so, a sarari.", "Idan ba ta gane daidai ba, ku sake gwadawa da kalmomi masu sauƙi."],
          words: [["Kalmar farkawa (wake word)", "kalmar da ke gaya wa lasifika mai wayo ta fara saurare, kamar \"Alexa\"."], ["Umarni (command)", "gajeren umarni da ake faɗa da baki, kamar \"set a timer for 15 minutes\" (saita lokaci na minti 15)."]],
          slides: [
            { title: "Ku farkar da ita", bullets: ["\"Alexa\" don Amazon Echo", "\"Hey Google\" don Google Nest", "Haske yana nuna tana saurare"] },
            { title: "Umarni a sarari", bullets: ["\"What is the weather today?\" (yanayin rana yau)", "\"Set a timer for 15 minutes.\" (lokaci na minti 15)", "\"Call Margaret.\" (kira Margaret)"] },
            { title: "Ba ta gane ba?", bullets: ["Ku sake faɗa da kalmomi masu sauƙi", "Gajerun umarni sun fi aiki"] }
          ],
          tryIt: "Ta amfani da lasifika mai wayo ko mataimakin wayarku, ku ba da umarni uku: ku tambayi yanayin rana na yau, ku saita lokaci na minti 5, sannan ku nemi tunatarwa gobe ƙarfe 9 na safe.",
          youCanNow: "ba da umarni a sarari da baki ga lasifika mai wayo ko mataimakin murya.",
          quickCheck: [
            { objective: "O2", q: "Mece ce kalmar farkawa ta Amazon Echo?", options: ["\"Alexa\"", "\"Hello\"", "\"Hey Siri\"", "\"Start\""], answer: 0, why: "Amazon Echo tana sauraron \"Alexa\"; Google Nest tana sauraron \"Hey Google\"." },
            { objective: "O2", q: "Kun yi doguwar tambaya, kuma lasifikar ta gane ba daidai ba. Me za ku yi?", options: ["Ku cire ta daga wuta", "Ku yi ihu da ƙarfi", "Ku daina amfani da ita", "Ku sake faɗa da gajerun kalmomi masu sauƙi"], answer: 3, why: "Gajerun umarni masu sarari har yanzu sun fi aiki; ku sake gwadawa da kalmomi masu sauƙi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Saita routine mai sauƙi",
          minutes: 6,
          goal: "Tsara routine da ke yin abubuwa da yawa da jimla ɗaya.",
          text: [
            "Routine yana bar jimla ɗaya ta yi abubuwa da yawa. Misali, faɗin \"Good morning\" (Barka da safiya) zai iya kunna fitila, ya faɗa muku yanayin rana, kuma ya tunatar da ku ku sha maganinku.",
            "Ana saita routine a manhajar wayar na'urar: manhajar Alexa don Echo, ko manhajar Google Home don Nest. Ku nemi sashen da ake kira Routines, ku taɓa don ƙara sabo, ku zaɓi jimlar da ke fara shi, sannan ku ƙara ayyukan. Menu-menu suna canjawa lokaci zuwa lokaci, don haka idan ba ku same shi ba, ku duba shafukan taimako na manhajar ko ku tambayi wani a iyali.",
            "Ku fara da routine ɗaya mai sauƙi. Kuna iya neman mataimakin AI ya taimaka muku tsara shi: \"Ka taimake ni in tsara routine na safe don lasifikata mai wayo. Ina son yanayin rana, tunatarwar magani, da kunna fitilata.\""
          ],
          steps: ["Ku tsara jimlar da ayyukan a takarda.", "Ku buɗe manhajar Alexa ko manhajar Google Home.", "Ku nemo Routines ku ƙara sabo.", "Ku zaɓi jimlar farawa.", "Ku ƙara kowane aiki, ku ajiye, sannan ku gwada shi da murya."],
          words: [["Routine", "jimla ɗaya ko lokaci ɗaya da ke sa na'ura ta yi abubuwa da yawa a jere."], ["Manhajar abokiya (companion app)", "manhajar waya da ke saitawa da sarrafa na'ura mai wayo."]],
          slides: [
            { title: "Jimla ɗaya, ayyuka da yawa", bullets: ["\"Good morning\" zai iya...", "Kunna fitila", "Faɗin yanayin rana da tunatar da ku magani"] },
            { title: "Inda ake saita shi", bullets: ["Manhajar Alexa ko manhajar Google Home", "Ku nemo Routines, ku ƙara sabo", "Ku zaɓi jimla, ku ƙara ayyuka, ku ajiye"] },
            { title: "Ku fara da mai sauƙi", bullets: ["Ku fara tsarawa a takarda", "Ku nemi AI ya taimaka muku tsarawa", "Ku tambayi iyali idan menu yana da wuyar samu"] }
          ],
          tryIt: "Ku rubuta routine na \"Good morning\" (Barka da safiya) ko na \"Good night\" (Sai da safe) mai jimla da ayyuka biyu ko uku. Ku nemi mataimakin AI ya duba shirinku ya ba da shawarar gyara ɗaya.",
          youCanNow: "tsara routine mai sauƙi na gida mai na'urori na zamani, da sanin inda ake saita shi.",
          quickCheck: [
            { objective: "O3", q: "Mene ne routine a lasifika mai wayo?", options: ["Tafiya ta yau da kullum", "Jimla ɗaya da ke sa na'urar ta yi abubuwa da yawa", "Jerin waƙoƙi", "Kalmar sirri"], answer: 1, why: "Routine yana bar jimla ɗaya, kamar \"Good morning\", ta yi ayyuka da yawa." },
            { objective: "O3", q: "Ba ku sami Routines a manhajar ba saboda menu ya canja. Me za ku yi?", options: ["Ku haƙura da routine", "Ku sayi sabuwar lasifika", "Ku duba shafukan taimako na manhajar ko ku tambayi wani a iyali", "Ku sake saita lasifikar daga farko (reset)"], answer: 2, why: "Menu-menu suna canjawa lokaci zuwa lokaci; shafukan taimako ko wani a iyali za su nuna muku inda yake." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sanin gida mai na'urori na zamani",
        questions: [
          { objective: "O1", q: "Da me na'urorin gida na zamani ke haɗuwa?", options: ["Akwatin wasiƙa", "Bututun ruwa", "Wi-Fi na gidanku", "Cajar batir kawai"], answer: 2, why: "Suna amfani da Wi-Fi domin ku iya sarrafa su." },
          { objective: "O1", q: "Wace na'ura ce ke bar ku ga wanda ke ƙofa a wayarku?", options: ["Ƙararrawar ƙofa mai kyamara", "Soket mai wayo", "Kwan fitila mai wayo", "Na'urar gasa burodi"], answer: 0, why: "Ƙararrawar ƙofa mai kyamara tana nuna baƙi a wayarku." },
          { objective: "O2", q: "Mece ce kalmar farkawa (wake word)?", options: ["Katin gaisuwa na safe", "Ƙarar agogon ƙararrawa", "Kalmar sirri", "Kalmar da ke sa lasifikar ta fara saurare"], answer: 3, why: "\"Alexa\" ko \"Hey Google\" suna farkar da lasifikar." },
          { objective: "O2", q: "Lasifikar ba ta gane ku ba. Me ya kamata ku gwada?", options: ["Ku yi ihu", "Ku sake faɗa da kalmomi masu sauƙi", "Ku cire ta daga wuta har abada", "Ku ba ta kalmar sirrinku"], answer: 1, why: "Gajerun umarni masu sarari sun fi aiki." },
          { objective: "O3", q: "A ina ake saita routine don lasifikar Google Nest?", options: ["A cikin na'urar lissafi (Calculator)", "A manhajar Google Home", "A rimot ɗin talabijin", "A manhajar kyamara"], answer: 1, why: "Manhajar abokiya ce ke ɗauke da Routines." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsaro, jin daɗi da sirri",
      lessons: [
        {
          objectives: ["O4","O1"],
          title: "Na'urori masu wayo don tsaro",
          minutes: 5,
          goal: "Zaɓi abubuwan na'urorin gida na zamani da ke sa zama shi kaɗai ya fi aminci.",
          text: [
            "Na'urori masu wayo na iya taimaka muku ku ji kun fi aminci a gida. Fitilun da ke kunnawa bisa tsari ko da na'urar gane motsi (motion sensor) suna nufin ba za ku taɓa shiga ɗaki mai duhu da dare ba, wanda zai iya taimakawa wajen hana faɗuwa. Ƙararrawar ƙofa mai kyamara tana bar ku gani da yin magana da baƙi ba tare da buɗe ƙofa ba.",
            "Lasifika mai wayo za ta iya kiran wani a iyali da murya idan ba za ku iya kaiwa ga wayarku ba. Wasu lasifikan da hidimomi suna da abubuwan gaggawa, amma sun bambanta bisa na'ura da ƙasa, kuma ba dukkansu ne ke iya kiran 911 (lambar gaggawa a Amurka) ba. Ku duba shafukan taimako na na'urar da kanta don sanin daidai abin da taku za ta iya yi da wanda ba za ta iya ba. Na'urorin faɗakarwa na likita da aka yi don gaggawa wani zaɓi ne daban da za ku tattauna da iyalinku.",
            "Kafin ku saya, ku rubuta jerin matsalolin da kuke son magancewa, ku tambayi wani a iyali ko mai taimako a shago wace na'ura ce ta dace. Ba sai kuna da komai ba."
          ],
          steps: ["Ku rubuta matsalolin tsaro da kuke son magancewa.", "Ku haɗa kowace da na'ura: fitilu, ƙararrawar ƙofa ko lasifika.", "Ku duba shafukan taimako na na'urar don abin da za ta iya yi da wanda ba za ta iya ba.", "Ku tambayi iyali ko mai taimako a shago kafin ku saya."],
          words: [["Na'urar gane motsi (motion sensor)", "na'urar da ke lura da motsi kuma za ta iya kunna fitila."], ["Na'urar faɗakarwa ta likita (medical alert device)", "maɓalli da ake sawa a jiki wanda aka yi don neman taimako a lokacin gaggawa."]],
          slides: [
            { title: "Ƙarin aminci a gida", bullets: ["Fitilu bisa tsari ko na gane motsi suna taimakawa hana faɗuwa", "Ƙararrawar ƙofa mai kyamara: ku fara ganin baƙi", "Kiran iyali da murya"] },
            { title: "Ku san na'urarku", bullets: ["Abubuwan gaggawa sun bambanta", "Ba dukkansu ne ke iya kiran 911 ba", "Ku duba shafukan taimako na na'urar"] },
            { title: "Ku saya da shiri", bullets: ["Ku fara rubuta matsalolin", "Ku haɗa na'ura da kowace matsala", "Ba sai kuna da komai ba"] }
          ],
          tryIt: "Ku rubuta damuwa ɗaya ta tsaro da kuke da ita a gida, kamar hanyoyin cikin gida masu duhu da dare, da na'ura mai wayo da za ta iya taimakawa. Ku tambayi mataimakin AI waɗanne tambayoyi za ku yi kafin ku saye ta.",
          youCanNow: "zaɓar abubuwan na'urorin gida na zamani da suka dace da buƙatunku na tsaro.",
          quickCheck: [
            { objective: "O4", q: "Ta yaya fitilu masu na'urar gane motsi ke taimaka muku ku zauna lafiya?", options: ["Suna kulle ƙofofinku", "Suna kiran 911", "Suna kunnawa don kada ku shiga ɗaki mai duhu", "Suna kunna waƙa"], answer: 2, why: "Fitilun da ke kunna kansu na iya taimakawa hana faɗuwa da dare." },
            { objective: "O4", q: "Kuna son lasifikar da za ta iya neman taimako a lokacin gaggawa. Me za ku yi kafin ku dogara da ita?", options: ["Ku duba shafukan taimako na na'urar don abin da za ta iya yi da wanda ba za ta iya ba", "Ku ɗauka cewa kowace lasifika na iya kiran 911", "Ku nemi lasifikar ta yi alƙawari", "Ku kashe makirufonta"], answer: 0, why: "Abubuwan gaggawa sun bambanta bisa na'ura da ƙasa; ku duba daidai abin da taku za ta iya yi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kiyaye sirrinku a gida",
          minutes: 5,
          goal: "Yi amfani da maɓallin kashe makirufo da saitunan sirri a na'ura mai wayo.",
          text: [
            "Lasifikan masu wayo suna sauraron kalmar farkawarsu. Wani lokaci suna iya ɗaukar wata kalma kamar ita ce, su ɗauki ɗan rikodi. Kyamarori suna ɗaukar bidiyo. Don haka yana da kyau ku san yadda ake sarrafa su.",
            "Kowace lasifika mai wayo tana da maɓallin kashe makirufo (mute); idan an kashe, wani haske (sau da yawa ja) yana nuna cewa ba ta saurare. Ku yi amfani da shi a lokacin hira ta sirri. Kyamarori sau da yawa suna da yanayin sirri (privacy mode) ko murfi. A manhajar na'urar, ku nemi Privacy settings (saitunan sirri), inda yawanci za ku iya dubawa da goge rikodin murya.",
            "Ku yi amfani da kalmar sirri mai ƙarfi don Wi-Fi ɗinku da asusun na'urorin, kuma kada ku taɓa ba da code da aka turo muku ta tes ga duk wanda ya kira game da na'urorinku."
          ],
          steps: ["Ku nemo maɓallin kashe makirufo a lasifikarku.", "Ku danna shi a lokacin hira ta sirri; ku duba hasken mai launi.", "Ku buɗe manhajar na'urar ku nemo Privacy settings.", "Ku duba ku goge rikodin murya idan kuna so.", "Ku yi amfani da kalmomin sirri masu ƙarfi, kuma kada ku taɓa ba da code na tes."],
          words: [["Kashe makirufo (mute)", "kashe makirufo don kada ta ji komai."], ["Saitunan sirri (privacy settings)", "zaɓuɓɓuka a manhaja game da abin da ake ɗaukar rikodi, ajiyewa da rabawa."]],
          slides: [
            { title: "Lasifika da kyamara suna ji kuma suna gani", bullets: ["Lasifikan suna jiran kalmar farkawa", "Wani lokaci suna iya jin ba daidai ba", "Kyamarori suna ɗaukar bidiyo"] },
            { title: "Ku ɗauki iko", bullets: ["Maɓallin mute: haske yana nuna an kashe", "Yanayin sirri ko murfin kyamara", "Ku duba ku goge rikodi a manhajar"] },
            { title: "Ku kiyaye asusunku", bullets: ["Kalmomin sirri masu ƙarfi don Wi-Fi da asusu", "Kada ku taɓa ba da code na tes"] }
          ],
          tryIt: "Ku nemo maɓalli ko saitin kashe makirufo a lasifika mai wayo, ko saitin makirufo na mataimakin wayarku. Ku kashe shi sannan ku sake kunna shi, ku lura da yadda kuke gane cewa an kashe shi.",
          youCanNow: "kashe makirufo na na'ura mai wayo da nemo saitunan sirrinta.",
          quickCheck: [
            { objective: "O5", q: "Me yasa lasifika mai wayo za ta iya ɗaukar ɗan rikodi bisa kuskure?", options: ["Tana ɗaukar rikodin komai a kowane lokaci", "Tana iya ɗaukar wata kalma kamar kalmar farkawarta ce", "Ta lalace", "Tana ɗaukar rikodin waƙa kawai"], answer: 1, why: "Lasifikan suna sauraron kalmar farkawa, kuma wani lokaci suna iya ɗaukar wata kalma kamar ita ce." },
            { objective: "O5", q: "Iyalinku sun zo ziyara kuma kuna son yin magana game da kuɗi na sirri. Me za ku yi da lasifikar?", options: ["Ku ƙara ƙarar waƙa", "Ku nemi ta daina saurare", "Ku cire rauta (router) na Wi-Fi", "Ku danna maɓallin kashe makirufo ku duba hasken"], answer: 3, why: "Maɓallin mute yana kashe makirufo; haske, sau da yawa ja, yana nuna ba ta saurare." }
          ]
        },
        {
          objectives: ["O3","O2"],
          title: "Sa gidanku mai na'urori na zamani ya yi aiki",
          minutes: 5,
          goal: "Tsara ku yi atisayen cikakken routine na yau da kullum.",
          text: [
            "Yanzu ku haɗa duka sassan. Routine na farko mai kyau yana da sauƙi, yana da amfani kowace rana, kuma yana da sauƙin faɗa.",
            "Misali: \"Good morning\" (Barka da safiya) yana kunna fitilar ɗakin kwana, yana faɗa muku yanayin rana da kalandarku, kuma yana tunatar da ku ku sha maganinku na safe. \"Good night\" (Sai da safe) yana kashe fitilu kuma yana saita ƙararrawarku.",
            "Ku yi atisayen faɗin routine ɗinku sau da yawa. Idan wani abu bai yi aiki ba, ku duba aiki ɗaya bayan ɗaya a manhajar, ko ku nemi wani a iyali ya duba tare da ku. Ku ajiye takarda mai rubutattun umarninku kusa da lasifikar har sai sun zama al'ada."
          ],
          steps: ["Ku zaɓi jimlar da za ku tuna.", "Ku zaɓi ayyuka biyu ko uku masu amfani.", "Ku saita shi a manhajar, iya abin da na'urorinku suka bari.", "Ku yi atisayensa da murya sau da yawa.", "Ku ajiye takarda mai umarninku kusa da lasifikar."],
          words: [["Al'ada (habit)", "abin da kuke yi sau da yawa har ya zama kamar ba sai kun yi tunani ba."]],
          slides: [
            { title: "Routine na farko mai kyau", bullets: ["Mai sauƙi", "Mai amfani kowace rana", "Mai sauƙin faɗa"] },
            { title: "Misali", bullets: ["\"Good morning\": fitila a kunne, yanayin rana, kalanda, tunatarwar magani", "\"Good night\": fitilu a kashe, an saita ƙararrawa"] },
            { title: "Ku sa ya zauna", bullets: ["Ku yi atisaye sau da yawa", "Ku gyara aiki ɗaya bayan ɗaya", "Ku ajiye takarda kusa da lasifikar"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta routine ɗinku na \"Good morning\", ku saita iya abin da na'urorinku suka bari, sannan ku yi atisayensa da murya. Bayan haka ku nemo maɓalli ko saitin kashe makirufo ku yi amfani da shi.",
          youCanNow: "amfani da umarnin murya da routine mai sauƙi don sauƙaƙa gidanku da ƙara masa tsaro, yayin da kuke kiyaye sirrinku.",
          quickCheck: [
            { objective: "O3", q: "Me ke sa routine na farko ya yi kyau?", options: ["Mai sauƙi, mai amfani kowace rana, kuma mai sauƙin faɗa", "Ayyuka da yawa iya yiwuwa", "Doguwar jimla", "Waƙa kawai"], answer: 0, why: "Ku fara da mai sauƙi: jimlar da za ku tuna da ayyuka biyu ko uku masu amfani." },
            { objective: "O3", q: "Sabon routine ɗinku na \"Good night\" ya kashe fitilu amma bai saita ƙararrawa ba. Me za ku yi?", options: ["Ku goge dukan routine ɗin", "Kada ku sake amfani da routine", "Ku faɗa da ƙarfi", "Ku duba wannan aiki ɗaya a manhajar, ko ku duba shi tare da wani a iyali"], answer: 3, why: "Idan wani abu bai yi aiki ba, ku duba aiki ɗaya bayan ɗaya a manhajar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsaro, jin daɗi da sirri",
        questions: [
          { objective: "O4", q: "Ta yaya fitilu masu wayo ke taimakawa hana faɗuwa?", options: ["Suna kulle ƙofofi", "Sun fi nauyi", "Suna kiran likita", "Suna kunnawa don kada ku shiga ɗakuna masu duhu"], answer: 3, why: "Ɗakuna masu haske da dare suna taimakawa hana faɗuwa." },
          { objective: "O4", q: "Shin kowace lasifika mai wayo na iya kiran 911?", options: ["A'a; ku duba abin da na'urarku za ta iya yi da wanda ba za ta iya ba", "Ee, dukkansu", "Jajaye kawai", "A ƙarshen mako kawai"], answer: 0, why: "Abubuwan gaggawa sun bambanta bisa na'ura da ƙasa." },
          { objective: "O5", q: "Hasken lasifikar ya zama ja bayan kun danna maɓallin mute. Wannan yana nufin:", options: ["Tana kiran 911", "Ta lalace", "An kashe makirufo", "Tana ƙara ɗaukar rikodi"], answer: 2, why: "Hasken mai launi yana nuna an kashe makirufo." },
          { objective: "O5", q: "A ina yawanci za ku iya dubawa da goge rikodin murya?", options: ["Tallar da ke tasowa (pop-up)", "Abin dumama abinci (microwave)", "Jagoran shirye-shiryen talabijin", "Saitunan sirri a manhajar na'urar"], answer: 3, why: "Saitunan sirri na manhajar ne ke sarrafa rikodi." },
          { objective: "O5", q: "Wani mai kira ya ce daga kamfanin lasifikar yake, kuma yana neman code da aka turo muku ta tes. Ku:", options: ["Tura masa shi ta tes", "Karanta masa shi", "Kada ku taɓa bayar da shi, ku katse wayar", "Saka shi a intanet"], answer: 2, why: "Code da aka turo ta tes yana kare asusunku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI da Gidaje Masu Na'urori na Zamani",
    questions: [
      { objective: "O1", q: "Na'ura mai wayo ita ce:", options: ["Kowace tsohuwar fitila", "Na'urar da za ku iya sarrafawa da murya ko waya ta intanet", "Kalandar takarda", "Wayar gida mai waya"], answer: 1, why: "Na'urori masu wayo suna haɗuwa da intanet." },
      { objective: "O1", q: "Wane mataimakin murya ne Amazon Echo ke amfani da shi?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "Lasifikan Echo suna amfani da Alexa." },
      { objective: "O1", q: "Soket mai wayo yana bar ku:", options: ["Kunna ko kashe fitila da murya ko bisa tsari", "Cajin mota", "Yin kiran waya", "Kulle ƙofofi"], answer: 0, why: "Yana kunna da kashe abin da aka toshe a cikinsa." },
      { objective: "O2", q: "Wace kalma ce ke farkar da lasifikar Google Nest?", options: ["\"Hello phone\"", "\"Hey Google\"", "\"Computer\"", "\"Start\""], answer: 1, why: "\"Hey Google\" ita ce kalmar farkawarta." },
      { objective: "O2", q: "Wanne ne umarni a sarari?", options: ["\"Timer stuff.\" (abubuwan lokaci)", "\"Um, maybe, the thing?\" (um, wataƙila, abin nan?)", "\"Set a timer for 15 minutes.\" (saita lokaci na minti 15)", "\"You know.\" (ka sani)"], answer: 2, why: "Umarni a sarari yana faɗin daidai abin da kuke so." },
      { objective: "O2", q: "Haske a lasifikar yawanci yana nuna:", options: ["An kashe ta har abada", "Ta lalace", "Tana buƙatar fenti", "Tana saurare"], answer: 3, why: "Hasken yana nuna ta ji kalmar farkawa." },
      { objective: "O3", q: "Routine shi ne:", options: ["Kalmar sirri", "Wani nau'in soket", "Jimla ɗaya da ke sa na'ura ta yi abubuwa da yawa", "Shirin talabijin"], answer: 2, why: "Routine yana haɗa ayyuka." },
      { objective: "O3", q: "Ana saita routine na Amazon Echo a:", options: ["Manhajar Alexa", "Na'urar lissafi (Calculator)", "Kyamara", "Talabijin"], answer: 0, why: "Manhajar Alexa ce ke sarrafa routine na Echo." },
      { objective: "O3", q: "Hanya mai kyau ta tsara routine kafin ku saita shi:", options: ["Ku tsallake tsarawa", "Ku yi tsammani", "Ku fara sayen na'urori da yawa", "Ku rubuta shi a takarda ko ku nemi AI ya duba shirinku"], answer: 3, why: "Tsarawa yana sauƙaƙa saitawa." },
      { objective: "O3", q: "Idan menu a manhajar yana da wuyar samu, kuna iya:", options: ["Haƙura", "Duba shafukan taimako na manhajar ko tambayar iyali", "Ba baƙo kalmar sirrinku", "Goge Wi-Fi ɗinku"], answer: 1, why: "Menu-menu suna canjawa; shafukan taimako da iyali za su iya jagorantar ku." },
      { objective: "O4", q: "Ƙararrawar ƙofa mai kyamara tana taimaka muku:", options: ["Dafa abincin dare", "Ganin baƙi kafin buɗe ƙofa", "Wanke tufafi", "Biyan kuɗaɗe"], answer: 1, why: "Tana nuna wanda ke ƙofa." },
      { objective: "O4", q: "Fitila mai na'urar gane motsi:", options: ["Tana kulle ƙofa", "Tana kunna waƙa", "Tana kiran iyali", "Tana kunnawa idan ta lura da motsi"], answer: 3, why: "Tana amsa motsi." },
      { objective: "O4", q: "Kafin ku sayi na'ura mai wayo, ya kamata ku:", options: ["Rubuta jerin matsalolin da kuke son magancewa", "Sayi komai", "Raba kalmomin sirrinku", "Yi watsi da ra'ayoyin masu amfani da shafukan taimako"], answer: 0, why: "Jeri yana taimaka muku ku sayi abin da kuke buƙata kawai." },
      { objective: "O4", q: "Na'urar faɗakarwa ta likita ita ce:", options: ["Lasifikar waƙa", "Kwan fitila mai wayo", "Maɓallin da ake sawa a jiki wanda aka yi don neman taimako", "Rimot ɗin talabijin"], answer: 2, why: "An yi ta ne don lokacin gaggawa." },
      { objective: "O5", q: "A lokacin hira ta sirri, kuna iya:", options: ["Buɗe kyamara", "Ƙara ƙara", "Faɗin kalmar farkawa", "Danna maɓallin mute na lasifikar"], answer: 3, why: "Kashe makirufo yana hana ta ji." },
      { objective: "O5", q: "Saitunan sirri suna bar ku:", options: ["Yin odar abinci", "Canja yanayin rana", "Dubawa da goge rikodi", "Ƙara saurin Wi-Fi"], answer: 2, why: "Suna sarrafa abin da ake ajiyewa." },
      { objective: "O5", q: "Ana iya kare sirrin kyamara da:", options: ["Haska mata haske", "Yanayin sirri ko murfi", "Matsar da ita kusa", "Ƙara ƙara"], answer: 1, why: "Yanayin sirri ko murfi yana hana ɗaukar rikodi." },
      { objective: "O5", q: "Ya kamata a yi amfani da kalmomin sirri masu ƙarfi don:", options: ["Wi-Fi ɗinku da asusun na'urorinku", "Babu komai", "Imel kawai", "Talabijin ɗinku kawai"], answer: 0, why: "Suna hana wasu shiga na'urorinku." },
      { objective: "O3", q: "Routine na farko mai kyau shi ne:", options: ["Mai sauƙi, mai amfani kowace rana, kuma mai sauƙin faɗa", "Dogo kuma mai rikitarwa", "Wanda ake amfani da shi sau ɗaya a shekara", "Mai wuyar tunawa"], answer: 0, why: "Routine masu sauƙi suna zama al'ada." },
      { objective: "O3", q: "Ajiye takarda mai umarninku kusa da lasifikar yana taimaka muku:", options: ["Ɓoye su", "Tuna su har sai sun zama al'ada", "Raba kalmomin sirri", "Kashe makirufon lasifikar"], answer: 1, why: "Takarda abin tunatarwa ne mai sauƙi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      10,
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
        name: "An tsara routine",
        objective: "O3",
        notYet: "Babu rubutaccen shiri, ko babu jimlar farawa.",
        meets: "Rubutaccen routine mai jimlar farawa da ayyuka biyu ko uku masu amfani, kamar yanayin rana, tunatarwar magani da fitila.",
        exceeds: "Shirin ya kuma haɗa da routine na \"Good night\" (Sai da safe)."
      },
      {
        name: "An saita routine",
        objective: "O3",
        notYet: "Ba a saita komai a na'urar ko waya ba.",
        meets: "An saita routine ɗin iya abin da na'urorin suka bari.",
        exceeds: "Zai iya faɗin waɗanne ayyuka ne na'urorin ba su iya yi ba, da abin da za a yi amfani da shi a maimakonsu."
      },
      {
        name: "Umarnin murya a sarari",
        objective: "O2",
        notYet: "Na'urar ba ta amsa umarnin ba.",
        meets: "An yi atisayen routine da murya, ana farawa da kalmar farkawa, kuma ya yi aiki.",
        exceeds: "An rubuta umarnin a takarda kusa da lasifikar."
      },
      {
        name: "An kashe makirufo",
        objective: "O5",
        notYet: "Bai sami maɓalli ko saitin kashe makirufo ba.",
        meets: "Ya samo kuma ya yi amfani da maɓalli ko saitin kashe makirufo, kuma ya ga hasken ya canja.",
        exceeds: "Ya kuma samo inda ake duba rikodin murya a manhajar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da ke amfani da routine na yau da kullum ko tunatarwar murya a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka ce suna jin sun fi aminci a gida, kamar amfani da fitilu da dare ko ƙararrawar ƙofa mai kyamara",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Tsofaffi da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Lasifika mai wayo (Amazon Echo ko Google Nest) ko wayar zamani mai mataimakin murya",
      "Manhajar Alexa ko manhajar Google Home a waya, da Wi-Fi na gida",
      "Takarda da alƙalami don tsara routine da rubuta umarni",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku zo da lasifikar gwaji ɗaya domin masu koyo da ba su da na'ura su iya yin atisayen umarni.",
      "Menu-menu na manhajoji suna canjawa; ku duba menu-menu na Routines da Privacy na yanzu kafin zaman.",
      "Kada ku yi alƙawarin cewa kowace lasifika na iya kiran 911; ku gaya wa masu koyo su duba na'urarsu.",
      "Ku tunatar da masu koyo kada su taɓa ba da code da aka turo ta tes ga duk wanda ya kira game da na'urorinsu.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
