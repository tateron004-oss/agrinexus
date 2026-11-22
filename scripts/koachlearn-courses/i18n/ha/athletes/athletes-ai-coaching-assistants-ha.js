"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-coaching-assistants.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-coaching-assistants-ha",
  lang: "ha",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Mataimakan AI na Horarwa",
  skills: "Kafa mataimakin AI da umarnin horarwa, Tsara atisaye da AI, Rubuta saƙonni ga iyaye da 'yan wasa, Yin katin atisaye da gwaje-gwaje, Kiyaye bayanan 'yan wasa da barin yanke shawara ga mutum",
  outcome: "kafa mataimakin AI a matsayin mai taimakon horarwa da umarninku na dindindin, sannan ku yi amfani da shi don tsara atisaye na minti 90, rubuta saƙo mai sarari ga iyaye, da yin katin atisaye da gwajin littafin dabarun wasa mai tambayoyi biyar, duk ku da kanku kuka duba, kuma babu bayanan sirri na 'yan wasa a ciki.",
  about: [
    "Wannan kwas na manyan masu horarwa (koci), mataimakan koci, daraktocin ƙungiyoyi (club) da 'yan wasan da ke taimakon horar da ƙananan 'yan wasa ne. Masu horarwa suna ɓata awoyi wajen tsarawa da aikin takardu; mataimakin AI zai iya ɗauke musu wani ɓangare na wannan nauyi.",
    "Za ku kafa mataimakin AI kyauta da umarni na dindindin game da ƙungiyarku, sannan ku yi amfani da shi don tsara atisaye, rubuta saƙonni, da yin kayan koyarwa. Za ku kuma kafa dokoki a sarari: abin da zai kasance a sirri, da waɗanne shawarwari za su kasance a hannun mutum.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Ku bi dokokin makarantarku, ƙungiyarku ko ƙungiyar gasa (league) game da fasaha, sadarwa da yara ƙanana, da bayanan ɗalibai."
  ],
  finalTask: "Ku rubuta umarnin dindindin na mataimakin horarwarku (matakin ƙungiya, salo, dokokin tsaro, abin da ba za a saka ba), sannan ku yi amfani da shi don samar da tsarin atisaye na minti 90, saƙo ga iyaye game da jadawalin mako mai zuwa, katin atisaye na atisaye ɗaya, da gwajin littafin dabarun wasa mai tambayoyi biyar. Ku duba ku gyara kowane abu, kuma ku tabbatar ba a yi amfani da bayanan sirri na kowane ɗan wasa ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manyan masu horarwa, mataimakan koci, daraktocin ƙungiyoyi da 'yan wasan da ke taimakon horar da ƙananan 'yan wasa, sau da yawa masu aikin sa-kai ko masu horarwa na ɗan lokaci da ba su da isasshen lokacin tsarawa.",
    startingPoint: "Sun riga sun gudanar da atisaye kuma suna tura saƙonnin ƙungiya. Wasu sun gwada mataimakin AI, amma kaɗan ne ke ba shi umarni na dindindin ko suke da rubutattun dokoki don sirri da tsaro.",
    gap: "Tsarawa da aikin takardu suna ɗaukar awoyi, kuma amfani da AI ba tare da kulawa ba zai iya fitar da bayanan sirri na 'yan wasa, ya kawo atisayen da ba su da aminci, ko ya maye gurbin shawarwarin da dole koci ya yanke. Masu horarwa suna buƙatar amfani da AI a matsayin mai taimako da ake dubawa, tare da dokoki masu sarari, don su adana lokaci yayin da 'yan wasa ke cikin aminci kuma ana yi musu adalci.",
    constraints: [
      "Kalmomi masu sauƙi; ba a buƙatar ilimin fasaha",
      "Na'urori: waya ko kwamfuta mai mataimakin AI kyauta",
      "Lokaci: kusan minti biyar kowane darasi, a cikin makon horarwa mai cike da aiki",
      "Dokokin makaranta, ƙungiya da ƙungiyar gasa game da fasaha, tura saƙo ga yara ƙanana da bayanan ɗalibai su ne farko",
      "Babu sunayen 'yan wasa, bayanan lafiya ko wasu bayanan sirri na 'yan wasa a kowane prompt"
    ],
    prerequisites: "Babu. Masu horarwa da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan horarwa na mako", action: "jera waɗanne ayyukan horarwa za ku ba mataimakin AI ya rubuta daftarinsu, da waɗanne shawarwari za ku riƙe a hannunku", standard: "shawarwarin lokacin wasa, zaɓen 'yan wasa da tsaro suna kasancewa a hannun koci" },
    { id: "O2", condition: "Don ƙungiyarku", action: "rubuta umarni na dindindin da ke da matakin ƙungiya, tsawon atisaye, salo da dokokin tsaro", standard: "tare da doka cewa kada a taɓa amfani da sunayen 'yan wasa ko bayanan lafiyarsu" },
    { id: "O3", condition: "Ta amfani da umarninku na dindindin", action: "rubuta daftarin tsarin atisaye na minti 90 da AI da gyara shi", standard: "ta yadda lokuta suka yi daidai, atisaye sun dace da shekarun 'yan wasa da kayan aiki, kuma an yi aƙalla canje-canje biyu" },
    { id: "O4", condition: "Idan aka sami canjin jadawali ko labarin ƙungiya", action: "rubuta saƙo mai sarari da kirki ga iyaye ko 'yan wasa da AI da tura shi ta hanyar da aka amince da ita", standard: "an duba kowace kwanan wata, kuma babu wani abu game da ɗan wasa ɗaya a saƙon rukuni" },
    { id: "O5", condition: "Idan aka ba ku atisaye ɗaya da dabarar wasa ɗaya", action: "yin katin atisaye da gwajin littafin dabarun wasa mai tambayoyi biyar da AI", standard: "an duba kowane mataki da kowace amsa da ainihin atisayenku da dabararku" },
    { id: "O6", condition: "Kafin amfani da AI don kowane aikin horarwa", action: "rubuta da bin dokokin kariya don sirri, tsaro da adalci", standard: "ana tura tambayoyin lafiya da na zafi ga ma'aikata masu horo da jagorancin hukumar wasanni" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kafa mataimakin horarwarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abin da mataimakin AI na horarwa zai iya yi",
          minutes: 4,
          goal: "Jera ayyukan horarwa da za ku ba AI, da shawarwarin da za ku riƙe da kanku.",
          text: [
            "Mataimakin AI na horarwa mataimakin AI ne na gama-gari, kamar ChatGPT, Microsoft Copilot ko Google Gemini, da kuke amfani da shi don aikin horarwa. Zai iya rubuta daftarin tsarin atisaye, rubuta imel, bayyana dokokin wasa, yin bayanin atisaye, gwaje-gwaje da jadawali, da taƙaita rubutattun bayananku.",
            "Ba zai iya ganin 'yan wasanku ba, ba zai iya sanin lafiyarsu ko yadda suke ji ba, kuma ba zai iya ɗaukar alhaki ba. Lokacin wasa, horo na ladabtarwa, rauni da shawarar komawa wasa, shawarwarin tsaro da duk abin da ya shafi lafiya da walwalar ɗan wasa suna kasancewa a hannunku da ƙwararrun da suka dace.",
            "Doka mai kyau: AI yana rubuta daftari, koci yana yanke shawara. Duk abin da ya rubuta daftarin farko ne da kuke dubawa."
          ],
          words: [["Mataimakin AI na horarwa", "mataimakin AI na gama-gari da ake amfani da shi don taimako a ayyukan horarwa."], ["Komawa wasa (return to play)", "shawarar lokacin da ɗan wasa da ya ji rauni zai iya sake yin wasa lafiya; ƙwararrun likitoci ne ke yanke ta."]],
          slides: [
            { title: "AI zai iya rubuta daftarin", bullets: ["Tsarin atisaye da jadawali", "Imel da saƙonni", "Bayanin atisaye da gwaje-gwaje", "Taƙaitaccen rubutattun bayananku"] },
            { title: "Koci yana riƙe", bullets: ["Lokacin wasa da ladabtarwa", "Shawarwarin tsaro", "Walwala; rauni yana zuwa ga ma'aikatan lafiya"] },
            { title: "Dokar", bullets: ["AI yana rubuta daftari", "Koci yana yanke shawara"] }
          ],
          tryIt: "Ku rubuta jeri biyu: ayyukan horarwa biyar na mako da za ku iya ba AI ya rubuta daftarinsu, da shawarwari biyar da za ku riƙe koyaushe.",
          youCanNow: "yanke waɗanne ayyukan horarwa AI zai iya taimakawa da su, da waɗanne shawarwari za su kasance a hannun mutum.",
          quickCheck: [
            { objective: "O1", q: "Wane aikin horarwa ne AI zai iya rubuta muku daftarinsa?", options: ["Jadawalin atisaye na mako", "Wanda zai fara wasa ranar Asabar", "Ko ɗan wasa da ya ji rauni zai iya komawa", "Yadda ɗan wasa yake ji yau"], answer: 0, why: "AI zai iya rubuta daftarin tsare-tsare; zaɓen 'yan wasa, rauni da yadda suke ji suna buƙatar koci da ma'aikata masu horo." },
            { objective: "O1", q: "AI ya ba da shawarar a zaunar da wani ɗan wasa bisa rubutattun bayananku. Me za ku yi?", options: ["Ku bi ta daidai", "Ku yanke shawarar da kanku bisa abin da kuka gani", "Ku bar 'yan wasa su jefa ƙuri'a", "Ku sake tambayar AI har sai ya yarda"], answer: 1, why: "AI yana rubuta daftari, koci yana yanke shawara, musamman game da lokacin wasa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta umarni na dindindin",
          minutes: 5,
          goal: "Rubuta umarni na dindindin da ke faɗa wa AI game da ƙungiyarku da dokokinku.",
          text: [
            "Umarni na dindindin sakin layi ne da kuke liƙawa a farkon hira (ko ku ajiye shi a wurin umarni na musamman ko wurin project na mataimakin, idan yana da shi) don ya san halin da kuke ciki koyaushe.",
            "Ku saka: wasan, matakin ƙungiya da rukunin shekaru; yawan 'yan wasa; tsawon atisaye da wurare; salonku na horarwa da ƙimominku; dokokin tsaro (atisayen da suka dace da shekaru, hutun shan ruwa, babu motsa jiki na hukunci); da abin da kada ya taɓa saka (sunayen 'yan wasa, bayanan lafiya, makin makaranta).",
            "Misali: \"Ina horar da ƙungiyar ƙwallon ƙafa ta 'yan mata 'yan ƙasa da shekara 12 (U12) mai 'yan wasa 16. Atisaye minti 90 ne a rabin fili, ranakun Talata da Alhamis. Ina daraja ƙoƙari, nishaɗi da haɗin kai. Dole tsare-tsare su kasance da motsa jiki na shiri, hutun shan ruwa kowane minti 20 da atisayen da suka dace da shekaru. Kada ka taɓa nema ko amfani da sunayen 'yan wasa ko bayanan lafiyarsu.\""
          ],
          steps: ["Ku rubuta wasanku, matakin ƙungiya, rukunin shekaru da yawan 'yan wasa.", "Ku ƙara tsawon atisaye da wurare.", "Ku ƙara ƙimominku da salonku na horarwa.", "Ku ƙara dokokin tsaro.", "Ku ƙara abin da kada ya taɓa saka.", "Ku ajiye shi inda za ku iya liƙa shi kowane lokaci."],
          words: [["Umarni na dindindin", "bayanin halin da kuke ciki da kuke ba AI a farko don kowace amsa ta dace da yanayinku."], ["Ya dace da shekaru", "ya dace da shekaru da girman 'yan wasa."]],
          slides: [
            { title: "Umarni na dindindin", bullets: ["Ku liƙa a farkon kowace hira", "Ko ku ajiye a saitunan mataimakin, idan akwai"] },
            { title: "Ku saka", bullets: ["Wasa, mataki, shekaru, yawan 'yan wasa", "Tsawon atisaye da wuri", "Ƙimomi da dokokin tsaro"] },
            { title: "Kada ku taɓa saka", bullets: ["Sunayen 'yan wasa", "Bayanan lafiya", "Makin makaranta ko bayanan iyali"] }
          ],
          tryIt: "Ku rubuta umarninku na dindindin a sakin layi ɗaya ku ajiye shi a rubutu (note). Ku liƙa shi a mataimakin AI ku tambaya: \"Ka taƙaita abin da ka sani game da ƙungiyata.\" Ku gyara duk abin da ya yi kuskure a kai.",
          youCanNow: "rubuta umarni na dindindin da ke sa amsoshin AI su dace da ƙungiyarku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne umarni na dindindin?", options: ["Jerin lambobin wayar 'yan wasa", "Littafin dokokin ƙungiyar gasa", "Bayani game da ƙungiyarku da dokokinku da kuke ba AI a farko", "Wani atisaye"], answer: 2, why: "Umarni na dindindin suna sa kowace amsar AI ta dace da ƙungiyarku." },
            { objective: "O2", q: "Taƙaitaccen bayanin AI na umarninku ya ce ƙungiyarku ta 'yan ƙasa da shekara 16 ce, amma ta 'yan ƙasa da shekara 12 ce. Me za ku yi?", options: ["Ku ƙyale shi", "Ku goge manhajar AI", "Ku yi amfani da amsoshin duk da haka", "Ku gyara umarnin don ya san ainihin rukunin shekaru"], answer: 3, why: "Bayani marar daidai yana kawo tsare-tsare marasa daidai, don haka ku fara gyara shi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara atisaye da AI",
          minutes: 6,
          goal: "Yi amfani da AI don rubuta daftarin tsarin atisaye na minti 90 da gyara shi.",
          text: [
            "Bayan kun liƙa umarninku na dindindin, ku tambaya: \"Ka tsara atisaye na minti 90 da ya mai da hankali kan [fasaha]. Ka saka motsa jiki na shiri, atisaye uku masu ƙaruwa a hankali, ƙaramin wasa, motsa jiki na hucewa da hutun shan ruwa. Ka ba da lokuta, yadda ake shiryawa, muhimman abubuwan koyarwa da yadda ake sauƙaƙa ko ƙara wuyar kowane atisaye.\"",
            "Ku duba shi kamar koci: Atisayen suna da aminci kuma sun dace da shekaru? Lokutan sun yi daidai? Kuna da wuri da kayan aiki? Daidaiton aiki da hutu ya yi daidai? Akwai layuka da yawa da tsayuwa ba aiki?",
            "Ku yi tambayoyin biyo baya: \"Ƙwallaye 10 kawai muke da su.\" \"'Yan wasa biyu sababbi ne.\" \"Ka canja atisaye na 2 da wanda ke da taɓa ƙwallo da yawa.\" Ku ajiye tsare-tsaren da kuka so a fayil don sake amfani da su da inganta su."
          ],
          steps: ["Ku liƙa umarninku na dindindin.", "Ku nemi tsarin minti 90 tare da lokuta, yadda ake shiryawa da muhimman abubuwan koyarwa.", "Ku duba tsaro, lokuta, wuri da kayan aiki.", "Ku yi tambayoyin biyo baya don gyara matsaloli.", "Ku ajiye tsarin ƙarshe."],
          words: [["Ƙaruwa a hankali (progression)", "atisayen da ke farawa daga mai sauƙi zuwa mai wuya."], ["Ƙaramin wasa (small-sided game)", "wasa mai 'yan wasa kaɗan da ƙaramin wuri don kowa ya fi taɓa ƙwallo."]],
          slides: [
            { title: "Ku nemi", bullets: ["Motsa jiki na shiri, atisaye 3 masu ƙaruwa", "Ƙaramin wasa, motsa jiki na hucewa", "Lokuta, shiryawa, abubuwan koyarwa"] },
            { title: "Ku duba kamar koci", bullets: ["Yana da aminci kuma ya dace da shekaru?", "Lokuta sun yi daidai? Wuri da kayan aiki?", "Ƙarancin tsayuwa ba aiki?"] },
            { title: "Ku gyara", bullets: ["\"Ƙwallaye 10 kawai muke da su.\"", "\"'Yan wasa biyu sababbi ne.\"", "Ku ajiye tsare-tsaren da kuka so"] }
          ],
          tryIt: "Ku yi amfani da umarninku na dindindin don samun tsarin atisaye na minti 90 don ainihin atisaye da ke tafe. Ku yi aƙalla canje-canje biyu ta tambayoyin biyo baya, sannan ku ajiye shi.",
          youCanNow: "tsara atisaye mai aminci, mai lokuta masu kyau, da taimakon AI.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ƙaruwa a hankali (progression) a tsarin atisaye?", options: ["Atisayen da ke farawa daga mai sauƙi zuwa mai wuya", "Jerin sakamakon wasanni", "Yadda 'yan wasa ke isowa ɗaya bayan ɗaya", "Hutun shan ruwa"], answer: 0, why: "Ƙaruwa a hankali tana gina fasaha mataki-mataki." },
            { objective: "O3", q: "Tsarin AI yana buƙatar mazugi (cone) 20 amma kuna da 8. Me za ku yi?", options: ["Ku soke atisaye", "Ku faɗa wa AI kuna da mazugi 8 ku nemi ya gyara", "Ku yi amfani da tsarin ku yi fata", "Ku sayi mazugai kafin atisaye"], answer: 1, why: "Ku ba AI ainihin iyakokinku don tsarin ya yi aiki a fili." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kafa mataimakin horarwarku",
        questions: [
          { objective: "O1", q: "Wane aiki ne ya dace da mataimakin AI na horarwa?", options: ["Yanke shawarar komawa wasa bayan raunin kai (concussion)", "Ladabtar da ɗan wasa", "Rubuta daftarin tsarin atisaye", "Auna yadda ɗan wasa yake ji"], answer: 2, why: "AI yana rubuta daftari; shawarwarin lafiya da na kai-da-kai suna a hannun mutane." },
          { objective: "O1", q: "Mene ne dokar horarwa game da AI?", options: ["AI yana rubuta daftari, koci yana yanke shawara", "AI yana yanke komai", "Kada a taɓa amfani da AI", "'Yan wasa ne ke yanke shawara"], answer: 0, why: "Duk abin da AI ya fitar daftarin farko ne." },
          { objective: "O2", q: "Wanne ne ya dace a umarni na dindindin?", options: ["Sunayen 'yan wasa", "Bayanan lafiyar 'yan wasa", "Makin makarantar 'yan wasa", "Rukunin shekaru da tsawon atisaye"], answer: 3, why: "Bayanin ƙungiya yana taimakawa; bayanan sirri ba sa shiga." },
          { objective: "O3", q: "Tsarin AI yana da atisayen da ba shi da aminci ga yara 'yan shekara 10. Ku:", options: ["Yi amfani da shi duk da haka", "Maye gurbinsa da atisayen da ya dace da shekarunsu", "Ƙara masa wuya", "Tsallake hutun shan ruwa"], answer: 1, why: "Tsaro da dacewa da shekaru su ne farko." },
          { objective: "O3", q: "Ƙaramin wasa yana da amfani domin:", options: ["Ya fi tsawo", "Kowa yana ƙara taɓa ƙwallo", "Yana buƙatar ƙarin kayan aiki", "'Yan wasa suna tsayawa a layi"], answer: 1, why: "'Yan wasa kaɗan suna nufin kowa yana ƙara shiga ciki." }
        ]
      }
    },
    {
      name: "Babi na 2: Sadarwa, kayan koyarwa da dokokin kariya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Saƙonni ga iyaye da 'yan wasa",
          minutes: 5,
          goal: "Rubuta saƙo mai sarari da kirki ga iyaye ko 'yan wasa da AI, da tura shi ta hanyoyin da aka amince da su.",
          text: [
            "Masu horarwa suna rubuta saƙonni da yawa: jadawali, canje-canje, tunatarwa, abubuwan da ake sa rai. Ku tambaya: \"Ka rubuta gajeren saƙo mai fara'a ga iyaye game da canje-canjen atisaye na mako mai zuwa: atisayen Talata ya koma ƙarfe 5 na yamma, an soke na Alhamis saboda gyaran fili. Ka saka abin da za a kawo. Ƙasa da kalmomi 100.\"",
            "Ku duba bayanai, kwanakin wata da salon magana. Saƙonnin rukuni su kasance game da ƙungiya; kada ku taɓa tattauna yadda wani ɗan wasa ɗaya yake taka leda, lafiyarsa ko halinsa a saƙon rukuni.",
            "Ku yi amfani da hanyar sadarwa da makarantarku ko ƙungiyarku ta amince da ita. Ƙungiyoyi da yawa suna da dokoki game da koci yana tura saƙo ga yara ƙanana, misali a saka iyaye ko wani koci a ciki. Tattaunawa masu wuya, kamar lokacin wasa ko hali, sun fi kyau ido-da-ido ko ta waya, ba ta saƙon tes da AI ya rubuta ba."
          ],
          steps: ["Ku nemi AI ya rubuta gajeren daftari mai fara'a.", "Ku duba bayanai, kwanakin wata da salon magana.", "Saƙonnin rukuni su kasance game da ƙungiya.", "Ku tura ta hanyoyin da aka amince da su.", "Ku yi tattaunawa masu wuya ido-da-ido."],
          words: [["Hanyar da aka amince da ita", "hanyar sadarwa da makarantarku ko ƙungiyarku ta yarda masu horarwa su yi amfani da ita."], ["Salon magana", "yadda saƙo yake ji: mai fara'a, mai ƙarfi, mai daɗi."]],
          slides: [
            { title: "AI yana rubuta daftarin saƙonni", bullets: ["Jadawali, canje-canje, tunatarwa", "Gajere kuma mai fara'a"] },
            { title: "Ku duba", bullets: ["Bayanai da kwanakin wata", "Salon magana", "Batutuwan ƙungiya kaɗai a rukuni"] },
            { title: "Ku tura daidai", bullets: ["Hanyoyin da aka amince da su", "Ku bi dokokin tura saƙo ga yara ƙanana", "Tattaunawa masu wuya ido-da-ido"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta saƙo na gaske ko na atisaye ga iyaye game da canjin jadawali. Ku duba kowace kwanan wata, sannan ku tura shi (ko ku ajiye shi) ta hanyar da aka amince da ita.",
          youCanNow: "rubuta saƙonnin ƙungiya masu sarari da AI, da tura su ta hanyar da ta dace.",
          quickCheck: [
            { objective: "O4", q: "Saƙon rukunin ƙungiya ya kamata ya kasance game da me?", options: ["Halin wani ɗan wasa ɗaya", "Raunin wani ɗan wasa", "Ƙungiya, kamar lokuta da wurare", "Wanda za a zaunar a benci"], answer: 2, why: "Saƙonnin rukuni na labarin ƙungiya ne; batutuwan ɗan wasa ɗaya na sirri ne." },
            { objective: "O4", q: "AI ya rubuta saƙo ga iyaye da ke cewa atisaye ranar Talata 14 ga wata ne. Me za ku yi kafin ku tura?", options: ["Ku tura nan take", "Ku ƙara alamomin emoji", "Ku tura daga asusunku na kanku ga 'yan wasa kaɗai", "Ku duba kwanan watan a kalanda"], answer: 3, why: "AI yana iya yin kuskure a kwanakin wata, don haka ku duba kowace kwanan wata." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Katin atisaye da gwajin littafin dabarun wasa",
          minutes: 5,
          goal: "Yi katin atisaye da gwajin littafin dabarun wasa mai tambayoyi biyar.",
          text: [
            "Katin atisaye yana taimaka wa mataimakan koci da 'yan wasa su gudanar da atisaye hanya ɗaya. Ku tambaya: \"Ka yi katin atisaye na shafi ɗaya don [atisaye]: manufa, yadda ake shiryawa, matakai, muhimman abubuwan koyarwa, kurakuran da aka saba yi, da yadda ake sauƙaƙa shi ko ƙara masa wuya.\" Ku ƙara zane mai sauƙi a kayan aiki kamar Canva ko da hannu.",
            "Gwaje-gwaje suna taimaka wa 'yan wasa su koyi littafin dabarun wasa (playbook) da dokoki. Ku tambaya: \"Ka rubuta tambayoyi biyar masu zaɓi game da dabararmu ta jefa ƙwallo daga waje: [ku bayyana ta]. Amsa ɗaya daidai kowace, tare da gajeren bayani.\" Ku duba kowace amsa da ainihin dabararku.",
            "Ku yi amfani da kayan gwaji kamar Google Forms don raba shi, ba tare da tattara bayanan sirri fiye da abin da ake buƙata ba."
          ],
          steps: ["Ku nemi AI ya yi katin atisaye mai manufa, shiryawa, matakai da abubuwan koyarwa.", "Ku ƙara zane mai sauƙi.", "Ku bayyana dabarar wasa ku nemi tambayoyin gwaji biyar.", "Ku duba kowace amsa da ainihin dabararku.", "Ku raba ta fom mai sauƙi, kuna tattara bayanai kaɗan."],
          words: [["Katin atisaye (drill card)", "jagora mai shafi ɗaya da ke bayyana yadda ake gudanar da atisaye."], ["Littafin dabarun wasa (playbook)", "jerin dabarun wasan ƙungiya da dokokin yadda ake gudanar da su."]],
          slides: [
            { title: "Katin atisaye", bullets: ["Manufa, shiryawa, matakai", "Abubuwan koyarwa, kurakuran da aka saba yi", "Sigar mai sauƙi da mai wuya"] },
            { title: "Gwajin littafin dabarun wasa", bullets: ["Ku bayyana dabarar", "Tambayoyi biyar tare da bayani", "Ku duba kowace amsa"] },
            { title: "Ku raba a sauƙaƙe", bullets: ["Google Forms ko makamancinsa", "Ku tattara bayanan sirri kaɗan"] }
          ],
          tryIt: "Ku yi katin atisaye ɗaya da gwaji mai tambayoyi biyar kan ɗaya daga cikin dabarunku da AI. Ku duba duka biyun ku gyara duk abin da ba daidai ba.",
          youCanNow: "yin katin atisaye da gwajin littafin dabarun wasa da taimakon AI.",
          quickCheck: [
            { objective: "O5", q: "Katin atisaye yana taimakawa da me?", options: ["Gudanar da atisaye hanya ɗaya kowane lokaci", "Zaɓen kyaftin na ƙungiya", "Biyan kuɗin ƙungiya", "Shirya mota"], answer: 0, why: "Katin atisaye yana ba da manufa, shiryawa, matakai da abubuwan koyarwa don kowa ya gudanar da shi hanya ɗaya." },
            { objective: "O5", q: "Wata amsa a gwajin AI ba ta yi daidai da ainihin dabararku ba. Me za ku yi?", options: ["Ku raba shi duk da haka", "Ku gyara amsar kafin ku raba", "Ku canja dabararku don ta yi daidai", "Ku cire gwajin daga kwas ɗin"], answer: 1, why: "Dole kowace amsar gwaji ta yi daidai da yadda ƙungiyarku ke gudanar da dabarar a zahiri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dokokin kariya: sirri, tsaro da adalci",
          minutes: 5,
          goal: "Rubuta dokokinku na kariya don AI na horarwa ku bi su.",
          text: [
            "Sirri: kada ku taɓa liƙa sunayen 'yan wasa tare da bayanan lafiya, rauni, makin makaranta, halin iyali, bayanan tuntuɓa ko hotunan yara ƙanana a kayan aikin AI. Ku yi amfani da matsayi a wasa ko lambobi. Ku duba dokokin ƙungiyarku game da kayan aikin da za a iya amfani da su da bayanan ɗalibai ko 'yan wasa.",
            "Tsaro: AI yana iya ba da shawarar atisaye, motsa jiki ko ayyukan lokacin zafi da suka tsufa ko ba su da aminci. Ku duba atisaye da jagorancin hukumar wasanninku da ma'aikacin lafiyar 'yan wasa (athletic trainer), kuma kada ku taɓa amfani da AI don shawarwarin lafiya, raunin kai (concussion) ko komawa wasa. Horon HEADS UP kyauta na CDC (hukumar lafiyar jama'a ta Amurka) wuri ɗaya ne na koyon muhimman abubuwa game da raunin kai.",
            "Adalci da gaskiya: shawarwari game da zaɓen 'yan wasa da lokacin wasa suna fitowa daga abin da kuka gani, kuma ana bayyana su ga 'yan wasa ido-da-ido. Ku faɗa wa iyalai a fili cewa kuna amfani da AI don tsarawa, idan ƙungiyarku ta nema."
          ],
          steps: ["Ku rubuta dokar sirri: babu sunaye tare da bayanan sirri.", "Ku rubuta dokar tsaro: ku duba atisaye; babu shawarwarin lafiya.", "Ku rubuta dokar adalci: shawarwari daga abin da aka gani, ana bayyana su ido-da-ido.", "Ku duba dokokin fasaha na ƙungiyarku.", "Ku raba dokokin kariyar da ma'aikatanku."],
          words: [["Dokar kariya (guardrail)", "doka da ke kiyaye ku lafiya yayin amfani da kayan aiki."], ["Hukumar wasanni (governing body)", "ƙungiyar da ke kafa dokokin wasanku ko matakinku."]],
          slides: [
            { title: "Sirri", bullets: ["Babu sunaye tare da lafiya, maki ko bayanan iyali", "Ku yi amfani da matsayi a wasa ko lambobi", "Ku bi dokokin kayan aiki na ƙungiyarku"] },
            { title: "Tsaro", bullets: ["Ku duba atisaye da motsa jiki", "Babu shawarwarin lafiya ko na komawa wasa", "CDC HEADS UP don muhimman abubuwan raunin kai"] },
            { title: "Adalci", bullets: ["Shawarwari daga abin da kuka gani", "Ana bayyana su ido-da-ido"] }
          ],
          sources: [{ name: "CDC: Horon HEADS UP kan raunin kai (concussion)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Aikin ƙarshe: ku rubuta dokokinku na kariya da umarninku na dindindin, sannan ku samar da tsarin atisaye, saƙo ga iyaye, katin atisaye da gwaji da AI, kuna duba kowanne kuma kuna tabbatar ba a yi amfani da bayanan sirri na kowane ɗan wasa ba.",
          youCanNow: "amfani da mataimakin AI na horarwa tare da dokokin kariya masu sarari don sirri, tsaro da adalci.",
          quickCheck: [
            { objective: "O6", q: "Mene ne dokar kariya ta AI na horarwa?", options: ["Shinge a kewayen fili", "Atisaye na masu tsaron baya", "Doka da ke kiyaye ku lafiya yayin amfani da AI", "Wani nau'in jadawali (chart)"], answer: 2, why: "Dokokin kariya suna kafa abin da za ku yi da wanda ba za ku yi ba da AI." },
            { objective: "O6", q: "Kuna son taimakon AI kan murmurewar wani ɗan wasa daga raunin kai. Me za ku yi?", options: ["Ku liƙa rubutattun bayanan lafiyarsa", "Ku bi ranar komawa da AI ya bayar", "Ku tambayi abokan wasansa", "Ku bar wa ƙwararrun likitoci"], answer: 3, why: "Shawarwarin komawa wasa bayan raunin kai na ƙwararrun likitoci ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sadarwa, kayan koyarwa da dokokin kariya",
        questions: [
          { objective: "O4", q: "A ina ya kamata a tattauna halin wani ɗan wasa ɗaya?", options: ["A hirar rukunin ƙungiya", "A kafofin sada zumunta", "A saƙon rukuni da AI ya rubuta", "A ɓoye, ido-da-ido ko ta waya"], answer: 3, why: "Saƙonnin rukuni suna kasancewa game da ƙungiya." },
          { objective: "O5", q: "Katin atisaye yana da:", options: ["Manufa, shiryawa, matakai da abubuwan koyarwa", "Makin makarantar 'yan wasa", "Bayanan lafiyar 'yan wasa", "Babu komai"], answer: 0, why: "Yana taimaka wa kowa ya gudanar da atisaye hanya ɗaya." },
          { objective: "O5", q: "AI ya rubuta gwajin littafin dabarun wasa. Kafin ku raba shi, ku:", options: ["Raba shi ba tare da karantawa ba", "Ƙara amsoshin yaudara", "Duba kowace amsa da ainihin dabararku", "Bar AI ya ba 'yan wasa maki"], answer: 2, why: "AI yana iya yin kuskure game da dabararku." },
          { objective: "O6", q: "Wanne ne lafiya a liƙa a AI?", options: ["\"Maria Lopez, ta yage jijiyar gwiwa (ACL), tana shan magani\"", "Adireshin gidan wani ɗan wasa", "Hoton yaro ƙarami da cikakken sunansa", "\"Mai tsaron bayanmu na hagu tana yawan barin wadda take kula da ita a kwanar wasa (corner)\""], answer: 3, why: "Matsayi a wasa ba tare da suna ko bayanan lafiya ba yana kare sirri." },
          { objective: "O6", q: "Wane ne ke yanke shawarar komawa wasa bayan raunin kai?", options: ["Mataimakin AI", "Ƙwararrun likitoci", "Kyaftin na ƙungiya", "Iyaye a hirar rukuni"], answer: 1, why: "Shawarwarin lafiya na ƙwararru masu cancanta ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Mataimakan AI na Horarwa",
    questions: [
      { objective: "O1", q: "Mataimakin AI na horarwa shi ne:", options: ["Mutum-mutumin inji (robot) a benci", "Alƙalin wasa", "Mataimakin AI na gama-gari da ake amfani da shi don ayyukan horarwa", "Mai neman 'yan wasa da ake biya"], answer: 2, why: "Masu horarwa suna amfani da mataimaka kyauta don aikin horarwa." },
      { objective: "O1", q: "Wanne ne AI BA ZAI iya yi ba?", options: ["Ganin 'yan wasanku da sanin yadda suke ji", "Rubuta daftarin jadawali", "Rubuta bayanin atisaye", "Taƙaita rubutattun bayanai"], answer: 0, why: "Yana sanin abin da kuka faɗa masa kawai." },
      { objective: "O1", q: "Wane ne ke yanke lokacin wasa?", options: ["Koci", "AI", "Hirar rukunin iyaye", "Abokan hamayya"], answer: 0, why: "Lokacin wasa shawarar mutum ce." },
      { objective: "O2", q: "Umarni na dindindin su ne:", options: ["Miƙe jiki na ƙungiya", "Littafin dokoki", "Bayanin halin da kuke ciki da kuke ba AI a farko", "Kofin nasara"], answer: 2, why: "Suna sa amsoshi su dace da ƙungiyarku." },
      { objective: "O2", q: "Wace dokar tsaro ce ta dace da umarni na dindindin?", options: ["Babu hutu ko kaɗan", "Hutun shan ruwa kowane minti 20", "Gudun hukunci", "Tsallake motsa jiki na shiri"], answer: 1, why: "Dokokin tsaro suna cikin umarnin." },
      { objective: "O2", q: "Me umarni na dindindin ya kamata su ce kada a taɓa saka?", options: ["Tsawon atisaye", "Rukunin shekaru", "Girman fili", "Sunayen 'yan wasa da bayanan lafiyarsu"], answer: 3, why: "Bayanan sirri ba sa shiga." },
      { objective: "O3", q: "Ƙaruwa a hankali (progression) ita ce:", options: ["Fareti", "Wasannin neman gurbi (playoff)", "Atisayen da ke farawa daga mai sauƙi zuwa mai wuya", "Canjin jadawali"], answer: 2, why: "Ƙaruwa a hankali tana gina fasaha mataki-mataki." },
      { objective: "O3", q: "Lokutan tsarin AI sun kai minti 120 don atisaye na minti 90. Ku:", options: ["Yi minti 120 duk da haka", "Tsallake motsa jiki na shiri", "Ƙyale shi", "Nemi ya gyara lokutan"], answer: 3, why: "Ku duba cewa lokuta sun yi daidai." },
      { objective: "O3", q: "Ƙwallaye 10 kawai kuke da su. Ku:", options: ["Faɗa wa AI ku nemi ya gyara", "Soke atisaye", "Sayi 50 yau", "Ƙyale tsarin"], answer: 0, why: "Tambayoyin biyo baya suna daidaita tsarin da abin da kuke da shi." },
      { objective: "O4", q: "Saƙo ga iyaye game da canjin jadawali ya kamata ya kasance:", options: ["Mai tsawo kuma marar sarari", "Gajere, mai fara'a, kuma an duba kwanakin wata", "An tura ba tare da dubawa ba", "An tura daga asusun kai, saɓanin dokokin ƙungiya"], answer: 1, why: "Sarari da daidaito su ne mafi kyau." },
      { objective: "O4", q: "Saƙonnin rukuni ya kamata su kasance game da:", options: ["Kurakuran wani ɗan wasa ɗaya", "Bayanan raunin wani ɗan wasa", "Ƙungiya", "Gulma"], answer: 2, why: "Batutuwan mutum ɗaya suna kasancewa a sirri." },
      { objective: "O4", q: "Dokokin tura saƙo ga yara ƙanana sau da yawa suna buƙatar:", options: ["Saka iyaye ko wani koci a ciki", "Saƙonnin ɓoye", "Tura tes cikin dare", "Asusun kafofin sada zumunta na kai"], answer: 0, why: "Waɗannan dokokin suna kare 'yan wasa da masu horarwa." },
      { objective: "O4", q: "Tattaunawa masu wuya game da lokacin wasa sun fi kyau:", options: ["A saƙon tes da AI ya rubuta", "A kafofin sada zumunta", "A hirar rukuni", "Ido-da-ido ko ta waya"], answer: 3, why: "Tattaunawa masu wuya suna buƙatar taɓawar mutum." },
      { objective: "O5", q: "Katin atisaye yana taimakawa:", options: ["Ɓoye atisaye", "Mataimakan koci da 'yan wasa su gudanar da atisaye hanya ɗaya", "Maye gurbin atisaye", "Bin makin makaranta"], answer: 1, why: "Yin abu iri ɗaya kowane lokaci yana inganta atisaye." },
      { objective: "O5", q: "Gwajin littafin dabarun wasa yana duba:", options: ["Lafiyar 'yan wasa", "Ko 'yan wasa sun san dabarun wasa", "Makin makarantar 'yan wasa", "Jadawalin iyaye"], answer: 1, why: "Gwaje-gwaje suna ƙarfafa koyo." },
      { objective: "O5", q: "Idan kuna raba gwaji da fom, ku tattara:", options: ["Adireshin gidaje", "Kalmomin sirri (password)", "Tarihin lafiya", "Bayanan da kuke buƙata kaɗai"], answer: 3, why: "Bayanai kaɗan suna kare 'yan wasa." },
      { objective: "O6", q: "Dokar kariya ita ce:", options: ["Doka da ke kiyaye ku lafiya yayin amfani da kayan aiki", "Shinge", "Atisaye", "Kayan sawa na ƙungiya"], answer: 0, why: "Dokokin kariya suna hana amfani marar kyau." },
      { objective: "O6", q: "AI ya ba da shawarar motsa jiki mai tsanani a cikin zafi mai yawa. Ku:", options: ["Yi shi", "Ƙara tsawonsa", "Duba da ma'aikacin lafiyar 'yan wasa da jagorancin hukumar wasanni", "Tsallake shan ruwa"], answer: 2, why: "AI yana iya ba da shawarar ayyukan da ba su da aminci." },
      { objective: "O6", q: "Hukumar wasanni ita ce:", options: ["Wurin motsa jiki", "Mai ɗaukar nauyi (sponsor)", "Rukunin iyaye", "Ƙungiyar da ke kafa dokokin wasanku ko matakinku"], answer: 3, why: "Ita ce ke kafa dokoki na hukuma." },
      { objective: "O1", q: "Shawarwarin zaɓen 'yan wasa ya kamata su fito daga:", options: ["Hasashen AI", "Abin da koci ya gani", "Kafofin sada zumunta", "Jita-jita"], answer: 1, why: "Shawarwari masu adalci suna fitowa daga ainihin abin da aka gani." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Umarni na dindindin",
        objective: "O2",
        notYet: "Babu matakin ƙungiya, tsawon atisaye ko dokokin tsaro.",
        meets: "Matakin ƙungiya, tsawo, salo, dokokin tsaro da dokar hana bayanan sirri.",
        exceeds: "Yana kuma jera kayan aiki da wuri don tsare-tsare su dace da ainihin fili."
      },
      {
        name: "Tsarin atisaye",
        objective: "O3",
        notYet: "Lokuta ba su kai minti 90 daidai ba, ko wani atisaye ba shi da aminci ga rukunin shekarun.",
        meets: "Tsari na minti 90 mai lokuta daidai da atisaye masu aminci, an canja shi aƙalla sau biyu.",
        exceeds: "Yana da ƙaruwa a hankali mai sarari da hutun shan ruwa, kuma an rubuta dalilin kowane canji."
      },
      {
        name: "Saƙo ga iyaye",
        objective: "O4",
        notYet: "Kwanakin wata ba daidai ba, salon magana marar kirki, ko bayanan sirri na wani ɗan wasa.",
        meets: "Gajere, mai fara'a, an duba kwanakin wata, an tura ko an ajiye ta hanyar da aka amince da ita.",
        exceeds: "Yana kuma faɗin wanda za a tuntuɓa da tambayoyi, yana bin dokokin tura saƙo ga yara ƙanana."
      },
      {
        name: "Katin atisaye da gwaji",
        objective: "O5",
        notYet: "Wani mataki ko amsar gwaji bai yi daidai da ainihin atisaye ko dabarar wasa ba.",
        meets: "Katin atisaye mai manufa, shiryawa, matakai da abubuwan koyarwa; tambayoyin gwaji biyar da aka duba.",
        exceeds: "Gwajin ba ya tattara bayanai fiye da abin da ake buƙata, kuma ya ƙunshi muhimman lokutan dabarar."
      },
      {
        name: "Dokokin kariya da sirri",
        objective: "O6",
        notYet: "Wani prompt yana da sunayen 'yan wasa ko bayanan lafiya, ko AI ya yanke shawarar da ta koci ce.",
        meets: "An bi rubutattun dokokin kariya; ba a yi amfani da bayanan sirri na 'yan wasa ba; koci ne ya yanke shawarwari.",
        exceeds: "Dokokin kariya suna kuma faɗin inda tambayoyin lafiya da na zafi suke zuwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu horarwa da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu horarwa da suka ce sun adana lokaci wajen tsarawa da saƙonni na mako (binciken biyo baya na kwanaki 30)",
      "Ƙungiyoyi ko makarantu da suka ɗauki rubutattun dokokin kariya na AI don masu horarwarsu",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan wasa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai mataimakin AI kyauta",
      "Manhajar rubutu (note) ko takarda don ajiye umarni na dindindin da dokokin kariya",
      "Jadawalin ƙungiyarku, jerin kayan aiki da dabarar wasa ko atisaye ɗaya don aiki a kai",
      "Kusan minti 60 gaba ɗaya don darussa, ayyukan atisaye, gwaje-gwaje da jarabawa"
    ],
    facilitatorNotes: [
      "Ku gudanar da shi kamar taron koyar da masu horarwa: ku rubuta umarni na dindindin tare, sannan kowane koci ya rubuta daftarin tsari don ƙungiyarsa.",
      "Ku raba dokokin ƙungiyarku ko makarantarku game da tura saƙo ga yara ƙanana da bayanan ɗalibai kafin Darasi na 4.",
      "Ku tabbatar babu wanda ya liƙa sunayen 'yan wasa, bayanan lafiya ko hotunan yara ƙanana a kayan aikin AI.",
      "Ku sa ma'aikacin lafiyar 'yan wasa ko jagoran tsaro ya duba jagoranci game da zafi da motsa jiki.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
