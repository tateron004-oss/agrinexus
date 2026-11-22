"use strict";

// Koach Learn course, Hausa (ha) translation of shared/video-editing-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "video-editing-basics-ha",
  lang: "ha",
  translationOf: "video-editing-basics",
  category: "Workforce Development",
  name: "Tushen Gyaran Bidiyo (Video Editing)",
  skills: "Karanta bayanin aiki (brief) da tsara bidiyoyi, Shirya project, Gina rough cut, Amfani da B-roll da yanke mai kyau, Gyara sauti da ƙara rubutun magana (captions), Fitar da bidiyo (export) da gina portfolio",
  outcome: "ɗaukar bidiyoyinku na asali da gajeren bayanin aiki (brief), ku gyara su a manhajar gyaran bidiyo kyauta zuwa bidiyo mai tsabta na daƙiƙa 30 zuwa 60 mai sauti a sarari da rubutun magana (captions), ku fitar da shi a siffar da ta dace da inda za a kalla, sannan ku yi amfani da shi a matsayin aikin farko a cikin portfolio ɗinku.",
  about: [
    "Wannan kwas ɗin na duk wanda ke son gyaran bidiyo a matsayin aiki ne: matasa masu neman aikin farko na fasaha, manya masu canja sana'a, 'yan wasa da masu horarwa (coach) masu yin bidiyon muhimman lokuta, da masu ƙananan kasuwanci da ke son bidiyo don shagonsu. Ba sai kun taɓa gyaran bidiyo a baya ba.",
    "Za ku yi aiki kamar ainihin mai gyaran bidiyo (editor): karanta bayanin aiki, tsara fayilolinku, gina rough cut, sa shi ya yi laushi da B-roll da yanke mafi kyau, gyara sauti, ƙara captions, sannan ku fitar da fayil ɗin da ya kammala. Komai yana aiki da manhajoji kyauta kamar DaVinci Resolve, Microsoft Clipchamp, CapCut ko manhajar gyara da ke cikin wayarku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, sannan aikin \"Gwada yanzu\" da bidiyoyinku. Akwai ɗan gwaji mai tambayoyi biyu bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Abin da za ku samu a ƙarshe shi ne gajeren bidiyo da ya kammala da bayanin portfolio da za ku nuna wa mai ɗaukar aiki ko abokin ciniki.",
    "Wannan kwas yana shirya ku ne. Ba ya ba da takardar shaida (certificate). Idan kuna son takardar shaida daga baya, Darasi na 6 yana nuna guda biyu na gaske da inda za ku duba su."
  ],
  finalTask: "Ku gyara bidiyo na daƙiƙa 30 zuwa 60 daga bidiyoyin da kuka ɗauka da kanku don bayanin aiki na gaske ko na atisaye (misali muhimman lokutan ƙungiyar wasa, tallar wani shago a unguwa, ko labarin wani shirin aiki). Ku miƙa: babban fayil (folder) na project mai suna, bidiyon da ya kammala a siffar da ta dace da inda za a kalla, mai B-roll, sauti mai tsabta, captions da waƙar da kuke da izinin amfani da ita kaɗai, da gajeren bayanin portfolio da ke faɗin bayanin aikin, aikinku a ciki da kayan aikin da kuka yi amfani da su.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya a shirye-shiryen koyon sana'a, 'yan wasa da masu horarwa, da masu ƙananan kasuwanci a Amurka da sauran ƙasashe. Yawancinsu sun taɓa ɗaukar bidiyo da waya; kaɗan ne suka yi gyara fiye da saka filter a manhajar sada zumunta.",
    startingPoint: "Suna iya ɗaukar bidiyo da waya su saka shi a kafafen sada zumunta. Ba su taɓa amfani da timeline ba, ba su san aspect ratio ko frame rate ba, kuma ba su taɓa fitar da fayil don wani ba.",
    gap: "Kasuwanci, makarantu, ƙungiyoyin wasa da ƙungiyoyin agaji duk suna buƙatar gajerun bidiyoyi, kuma ayyukan farko da ƙananan ayyukan kwangila (mataimakin kafafen sada zumunta, mai ƙirƙirar abun ciki, ƙaramin editor) da yawa suna neman ƙwarewar gyaran bidiyo ta farko da misalin aikinku. Masu koyo suna buƙatar hanyar da za su iya maimaitawa don mayar da bidiyoyi da bayanin aiki zuwa bidiyo mai tsabta da ya kammala, da aiki ɗaya da ya kammala don nunawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace kalmar gyaran bidiyo",
      "Na'urori: waya, ko kwamfuta a gida, a ɗakin karatu ko a cibiyar neman aiki; manhajoji kyauta kaɗai",
      "Menu na manhajojin gyara suna canjawa sau da yawa, don haka darussa suna koyar da ayyuka, ba ainihin sunayen menu ba",
      "Lokaci: darussa na minti 4 zuwa 6 da kusan awa ɗaya na gyara da hannu don aikin ƙarshe",
      "Ƙa'idoji: izini daga mutanen da ke cikin bidiyo (da iyaye ga duk wanda bai kai shekara 18 ba) da waƙar da mai koyo ke da izinin amfani da ita"
    ],
    prerequisites: "Iya ɗaukar bidiyo da waya da motsa fayiloli zuwa kwamfuta ko tsakanin manhajoji. Masu koyo da ba su saba da waya ko kwamfuta ba za su iya fara ɗaukar \"Basic Computer Skills\" (Ƙwarewar Kwamfuta ta Farko) ko \"Using a Smartphone and Tablet\" (Amfani da Wayar Zamani da Tablet)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku gajeren bayanin aiki da wasu bidiyoyi na asali", action: "tsara bidiyoyin a babban fayil na project mai suna, da saita aspect ratio da frame rate na project ɗin su dace da inda za a kalli bidiyon", standard: "ta yadda kowane bidiyo yana da sauƙin samu, kuma babu bidiyon da aka miƙe ko aka yanke gefensa bisa kuskure" },
    { id: "O2", condition: "Ta amfani da manhajar gyaran bidiyo kyauta", action: "gina rough cut ta hanyar gajarta (trim), raba (split) da jera bidiyoyi a kan timeline zuwa farko, tsakiya da ƙarshe", standard: "wanda ke ba da labarin bayanin aikin a tsawon da ake so, ba tare da lokacin banza ba" },
    { id: "O3", condition: "Idan kuna da rough cut", action: "ƙara B-roll, cutaway da sauƙaƙan transition don ɓoye tsalle-tsalle da sa bidiyon ya ci gaba da tafiya", standard: "ba tare da amfani da fiye da nau'in transition ɗaya ko biyu ba" },
    { id: "O4", condition: "Idan kuna da bidiyo mai magana da waƙa", action: "daidaita matakan sauti da ƙara captions da rubutu a kan allo da suka yi daidai", standard: "ta yadda ana iya jin kowace kalma da karanta ta, mitar sauti ba ta taɓa kai sama ba, kuma ana amfani da duk waƙa da izini" },
    { id: "O5", condition: "Idan kuna da gyaran da ya kammala", action: "fitar da bidiyon da saitunan da suka dace da dandalin, duba shi da bayanin aikin, da rubuta gajeren bayanin portfolio", standard: "ta yadda fayil ɗin yana kunnawa daidai a ƙoƙarin farko, kuma bayanin yana ambaton bayanin aikin, aikinku da kayan aikinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Daga bidiyoyin asali zuwa rough cut",
      lessons: [
        {
          title: "Karanta bayanin aiki ku tsara bidiyoyinku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Rubuta bayanin aiki da shirya babban fayil na project mai suna da bidiyoyinku a tsare.",
          text: [
            "Kowane aikin gyaran bidiyo yana farawa da bayanin aiki (brief): gajeren bayani na abin da bidiyon zai yi. Brief mai kyau yana amsa tambayoyi biyar: wa zai kalla, a ina za a kunna shi (misali YouTube, Instagram Reels, TikTok, talabijin a tagar shago), tsawonsa nawa, wane saƙo ɗaya dole ya isar, da yaushe za a miƙa shi.",
            "Na gaba, ku tsara. Masu gyaran bidiyo suna ɓata awanni wajen neman bidiyoyi. Ku yi babban fayil ɗaya na project mai suna a sarari, kamar \"2026-11 Bakery promo\". A cikinsa, ku yi ƙananan fayiloli don bidiyo, sauti, waƙa, hotuna (graphics) da exports. Ku kwafa bidiyoyinku a ciki, ku ba mafi kyawunsu gajerun sunaye, kamar \"oven-closeup\" ko \"owner-interview\".",
            "Ku ajiye kwafi na biyu na bidiyoyinku na asali a wani wuri dabam, kamar USB drive ko ma'ajiyar intanet (cloud). Idan waya ta lalace ko fayil ya goge, aikin ba zai ɓace ba.",
            "Ku duba izini yanzu, ba bayan kun saka ba. Duk wanda ake gani ko ake ji a sarari ya kamata ya yarda a saka shi a bidiyon, kuma duk wanda bai kai shekara 18 ba yana buƙatar iyaye ko mai kula da shi su yarda su ma."
          ],
          steps: ["Ku rubuta brief: masu kallo, dandali, tsawo, saƙo ɗaya, ranar miƙawa.", "Ku yi babban fayil na project da suna a sarari da kwanan wata.", "Ku ƙara ƙananan fayiloli don bidiyo, sauti, waƙa, graphics da exports.", "Ku kwafa bidiyoyinku a ciki ku sake wa mafi kyawunsu suna.", "Ku ajiye kwafin bidiyoyin asali a wuri na biyu (backup).", "Ku tabbatar cewa duk wanda ke cikin bidiyo ya yarda."],
          words: [["Brief (bayanin aiki)", "gajeren bayani na abin da bidiyo zai yi: na wa ne, a ina za a kunna shi, tsawonsa, saƙon da ranar miƙawa."], ["Footage (bidiyoyin asali)", "bidiyoyin da kuka ɗauka kafin gyara."], ["Back up (ajiye kwafi)", "ajiye kwafi na biyu na fayilolinku a wani wuri."], ["Abokin ciniki (client)", "mutum ko kasuwancin da kuke yi wa bidiyon."]],
          slides: [
            { title: "Brief yana amsa tambayoyi biyar", bullets: ["Wa zai kalla?", "A ina za a kunna shi?", "Tsawonsa nawa? Wane saƙo ɗaya?", "Yaushe za a miƙa shi?"] },
            { title: "Babban fayil ɗaya na project mai sarari", bullets: ["Ku sa masa kwanan wata da sunan aikin", "Ƙananan fayiloli: bidiyo, sauti, waƙa, graphics, exports", "Ku sake wa mafi kyawun bidiyoyinku suna"] },
            { title: "Ku kare aikin", bullets: ["Ku ajiye kwafin bidiyoyin asali a wuri na biyu", "Izini daga duk wanda ke cikin bidiyo", "Iyaye ko mai kula ga duk wanda bai kai shekara 18 ba"] }
          ],
          tryIt: "Ku zaɓi bidiyon da za ku yi don aikin ƙarshe (muhimman lokutan ƙungiyar wasa, tallar shago, labarin shirin aiki ko ra'ayinku). Ku rubuta brief mai layi biyar a takarda. Sannan ku yi babban fayil na project da ƙananan fayiloli biyar a ciki, ku kwafa bidiyoyi 8 zuwa 15 da kuka ɗauka, ku sake wa guda biyar mafi kyau suna.",
          youCanNow: "rubuta gajeren brief da shirya babban fayil na project inda kowane bidiyo yana da sauƙin samu.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan yake cikin brief na bidiyo?", options: ["Launin da kuka fi so", "Inda za a kunna bidiyon da tsawon da ya kamata ya yi", "Farashin wayarku", "Jerin dukkan manhajojin da kuke da su"], answer: 1, why: "Inda za a kunna shi da tsawonsa ne ke tsara kowane zaɓin gyara da ke biye." },
            { objective: "O1", q: "Wayarku ce kaɗai ke da kwafin bidiyoyin abokin ciniki. Me za ku fara yi?", options: ["Ku fara gyara nan take", "Ku goge bidiyoyin da ba ku so", "Ku saka bidiyoyin a intanet don a ajiye su", "Ku kwafa su zuwa wuri na biyu kamar USB drive ko cloud"], answer: 3, why: "Kwafi a wuri na biyu yana nufin waya da ta lalace ko fayil da ya goge ba za su sa aikin ya ɓace ba." }
          ]
        },
        {
          title: "Shirya project: siffa, girma da sauri",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi aspect ratio, resolution da frame rate na project kafin ku fara gyara.",
          text: [
            "Kafin ku gyara, ku faɗa wa manhajar siffa da girman bidiyon da zai kammala. Aspect ratio shi ne siffar. Faɗi 16:9 ya dace da YouTube, kwamfutar laptop da talabijin. Tsaye 9:16 ya dace da manhajojin waya kamar TikTok, Instagram Reels da YouTube Shorts. Murabba'i 1:1 ya dace da wasu shafuka. Ku zaɓi siffar daga brief ɗinku.",
            "Resolution shi ne yawan ɗigo-ɗigo (pixels) da ke yin hoton. 1920 da 1080, wanda ake kira 1080p ko Full HD, zaɓi ne mai aminci ga yawancin ayyuka. Don bidiyo na tsaye, faɗinsa 1080 ne, tsayinsa 1920.",
            "Frame rate shi ne yawan hotuna marasa motsi da ke wucewa a kowace daƙiƙa, ana rubuta shi da fps. Na kowa sune 24, 30 da 60. Ku saita project zuwa frame rate da aka ɗauki yawancin bidiyoyinku da shi. Kuna iya ganin bayanan bidiyo a manhajar gyara ko a bayanan fayil ɗin a kwamfuta ko waya.",
            "Idan siffar ba daidai ba ce, manhajar za ta ƙara baƙaƙen layuka ko ta yanke gefuna. Idan kun haɗa frame rate dabam-dabam, motsi yana iya yin tsalle-tsalle. Saita waɗannan da farko yana ceton gyara mai yawa daga baya."
          ],
          steps: ["Ku karanta brief: a ina za a kunna bidiyon?", "Ku zaɓi siffa: 16:9 faɗi, 9:16 tsaye ko 1:1 murabba'i.", "Ku zaɓi girma: 1920 x 1080 faɗi, ko 1080 x 1920 tsaye.", "Ku duba frame rate na bidiyoyinku ku sa project ya dace da shi.", "Ku fara project ku shigo da bidiyoyinku (import)."],
          words: [["Aspect ratio", "siffar bidiyo, ana rubuta ta faɗi zuwa tsayi, kamar 16:9 (faɗi) ko 9:16 (tsaye)."], ["Resolution", "yawan pixels da ke yin hoton, kamar 1920 x 1080."], ["Pixel", "ɗigo ɗaya ƙarami na launi a kan allo."], ["Frame rate (fps)", "yawan hotuna marasa motsi da ke wucewa a kowace daƙiƙa, kamar 24, 30 ko 60."], ["Import (shigo da)", "kawo bidiyoyinku cikin manhajar gyara."]],
          slides: [
            { title: "Siffa: aspect ratio", bullets: ["16:9 faɗi: YouTube, laptop, talabijin", "9:16 tsaye: TikTok, Reels, Shorts", "1:1 murabba'i: wasu shafuka"] },
            { title: "Girma: resolution", bullets: ["1920 x 1080 (1080p) yana da aminci ga yawancin ayyuka", "Tsaye: faɗi 1080 x tsayi 1920"] },
            { title: "Sauri: frame rate", bullets: ["Hotuna 24, 30 ko 60 a kowace daƙiƙa", "Ku dace da frame rate da aka ɗauki yawancin bidiyoyi da shi"] },
            { title: "Dalilin saita shi da farko", bullets: ["Siffa marar daidai = baƙaƙen layuka ko gefuna da aka yanke", "Frame rate dabam-dabam = motsi mai tsalle-tsalle"] }
          ],
          sources: [
            { name: "Blackmagic Design: DaVinci Resolve (sigar kyauta don Mac, Windows da Linux)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
            { name: "Microsoft Clipchamp: tsare-tsaren biya, har da na kyauta", url: "https://clipchamp.com/en/pricing/" }
          ],
          tryIt: "Ku buɗe manhajar gyara kyauta: DaVinci Resolve ko Clipchamp a kwamfuta, ko CapCut ko manhajar gyara ta wayarku a waya. Ku duba frame rate na bidiyoyinku guda uku. Ku fara sabon project da siffa da frame rate da brief ɗinku ke buƙata, ku shigo da bidiyoyinku.",
          youCanNow: "shirya project da siffa, girma da frame rate da suka dace da inda za a kunna bidiyon.",
          quickCheck: [
            { objective: "O1", q: "Brief ɗinku ya ce bidiyon zai zama Instagram Reel. Wace siffa za ku zaɓa?", options: ["16:9 faɗi", "4:3 tsohon talabijin", "9:16 tsaye", "21:9 sinima"], answer: 2, why: "Reels, TikTok da Shorts suna kunnawa a tsaye a waya, don haka 9:16 yana cika allo." },
            { objective: "O1", q: "An ɗauki yawancin bidiyoyinku da 30 fps. Wane frame rate ya kamata project ya yi amfani da shi?", options: ["30 fps, don ya dace da bidiyoyin", "60 fps, domin mafi girma koyaushe ya fi kyau", "Kowane frame rate; ba shi da bambanci", "24 fps, domin fina-finai suna amfani da shi"], answer: 0, why: "Daidaita da frame rate na yawancin bidiyoyinku yana sa motsi ya yi laushi." }
          ]
        },
        {
          title: "Gina rough cut a kan timeline",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gajarta, raba da jera bidiyoyi a kan timeline zuwa labari da ya dace da tsawon da ake so.",
          text: [
            "Timeline shi ne layin da kuke jera bidiyoyi a kai bi da bi, daga hagu zuwa dama. Playhead shi ne layin da ke nuna inda kuke. Rough cut shi ne cikakken sigarku ta farko: bidiyoyin da suka dace, a jerin da ya dace, a kusan tsawon da ya dace. Ba sai ya yi kyau tukuna ba.",
            "Ku gina shi a sassa uku. Farko yana jawo hankali a 'yan daƙiƙun farko. Tsakiya yana nuna babban saƙon. Ƙarshe yana faɗa wa mai kallo abin da zai yi ko zai tuna. Don gidan burodi: burodi sabo yana fitowa daga tanda, mai shagon tana faɗin dalilin da ya sa ta fara, sannan allon sunan shagon da lokutan buɗewa.",
            "Kayan aiki biyu ne ke yin yawancin aikin. Trim yana yanke farko ko ƙarshen bidiyo. Split yana raba bidiyo ɗaya zuwa biyu a wurin playhead, don ku cire wani sashe na tsakiya. Ku fara kowane hoto kafin abin ya faru kaɗan, ku ƙare shi bayan ya faru kaɗan. Ku cire lokacin banza: jira, kallon kyamara, \"um\" da dogon shiru.",
            "Ku kalli dukkan rough cut daga farko. Idan ya fi tsawon da brief ya yarda, ku cire hotuna gaba ɗaya kafin ku gajarta masu kyau. Ku riƙa ajiyewa (save) sau da yawa, kuma ku ajiye kwafi da lambar siga (v1, v2) kafin manyan canje-canje."
          ],
          steps: ["Ku ja mafi kyawun bidiyoyinku zuwa timeline a jerin labari: farko, tsakiya, ƙarshe.", "Ku gajarta farko da ƙarshen kowane bidiyo don ya fara kafin abin ya faru kaɗan.", "Ku raba bidiyoyi don cire shiru, kurakurai da lokacin banza.", "Ku kalla daga farko ku duba tsawon da brief.", "Idan ya yi tsawo, ku cire hotuna marasa ƙarfi gaba ɗaya.", "Ku ajiye shi a matsayin v1."],
          words: [["Timeline", "layin da ke cikin manhajar gyara inda ake jera bidiyoyi bi da bi, daga hagu zuwa dama."], ["Playhead", "layin da ke kan timeline mai nuna lokacin da kuke kallo."], ["Trim (gajarta)", "rage tsawon bidiyo ta hanyar yanke farkonsa ko ƙarshensa."], ["Split (raba)", "yanke bidiyo ɗaya zuwa gida biyu a wurin playhead."], ["Rough cut", "cikakkiyar sigar farko ta gyara, da bidiyoyin da suka dace a jere amma ba a goge ta ba tukuna."], ["Lokacin banza (dead time)", "sassan da babu wani abu mai amfani da ke faruwa, kamar jira ko dogon shiru."]],
          slides: [
            { title: "Timeline", bullets: ["Bidiyoyi a jere, daga hagu zuwa dama", "Playhead yana nuna inda kuke", "Rough cut = cikakkiyar siga ta farko"] },
            { title: "Farko, tsakiya, ƙarshe", bullets: ["Ku jawo hankali a daƙiƙun farko", "Ku nuna babban saƙon", "Ku ƙare da abin da za a yi ko a tuna"] },
            { title: "Trim da split", bullets: ["Trim: yanke farko ko ƙarshe", "Split: raba bidiyo gida biyu a wurin playhead", "Ku cire jira, shiru da \"um\""] },
            { title: "Ku duba ku ajiye", bullets: ["Ku kalla daga farko", "Ya yi tsawo? Ku fara cire hotuna gaba ɗaya", "Ku ajiye sigogi: v1, v2"] }
          ],
          tryIt: "A cikin project ɗinku, ku gina rough cut na bidiyon aikinku na ƙarshe. Ku jera bidiyoyi a farko-tsakiya-ƙarshe, ku gajarta kowanne, ku raba ku cire aƙalla shiru ko kurakurai biyu, sannan ku kawo shi cikin daƙiƙa 10 na tsawon da kuke so. Ku ajiye shi a matsayin v1 ku rubuta tsawonsa.",
          youCanNow: "gina rough cut da ke ba da labari a tsawon da ake so ba tare da lokacin banza ba.",
          quickCheck: [
            { objective: "O2", q: "Kuna buƙatar cire dogon shiru daga tsakiyar bidiyon hira. Wane kayan aiki za ku yi amfani da shi?", options: ["Canja aspect ratio", "Fitar da bidiyon (export)", "Ƙara transition", "Raba bidiyon a ƙarshen shirun biyu ku goge tsakiyar"], answer: 3, why: "Rabawa a ƙarshen shirun biyu yana ba ku damar ɗauke sashen tsakiya kaɗai." },
            { objective: "O2", q: "Rough cut ɗinku ya wuce tsawon da ake so da daƙiƙa 20. Me za ku fara gwadawa?", options: ["Ku hanzarta dukkan bidiyon", "Ku cire hotuna marasa ƙarfi gaba ɗaya", "Ku rage daƙiƙa ɗaya daga kowane bidiyo", "Ku canja frame rate"], answer: 1, why: "Cire hotuna marasa ƙarfi yana barin masu ƙarfi cikakku, labarin kuma a sarari." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Daga bidiyoyin asali zuwa rough cut",
        questions: [
          { objective: "O1", q: "Mai shago tana neman bidiyo don talabijin da ke tagar gaban shagonta. Wace siffa ta dace da talabijin?", options: ["9:16 tsaye", "16:9 faɗi", "1:1 murabba'i", "Kowace siffa; talabijin yana daidaitawa"], answer: 1, why: "Talabijin allo ne mai faɗi, don haka 16:9 yana cika shi ba tare da baƙaƙen layuka ba." },
          { objective: "O1", q: "Wane sunan babban fayil na project ya fi amfani?", options: ["\"stuff\"", "\"New folder (3)\"", "\"video final final\"", "\"2026-11 Bakery promo\""], answer: 3, why: "Kwanan wata da sunan aikin suna sa fayil ɗin ya zama mai sauƙin samu daga baya." },
          { objective: "O2", q: "Mene ne rough cut?", options: ["Cikakkiyar siga ta farko da bidiyoyin da suka dace a jere", "Bidiyo mai ƙazanta a gilashin kyamara", "Fayil ɗin da ya kammala aka fitar", "Bidiyon da aka ɗauka ba daidai ba"], answer: 0, why: "Rough cut yana da labarin a wurinsa; gogewa tana zuwa daga baya." },
          { objective: "O2", q: "A ina ya kamata hoto ya fara yawanci?", options: ["Da zarar kun danna maɓallin ɗauka", "Bayan abin ya ƙare", "Kafin abin ya faru kaɗan", "A tsakiyar abin da ke faruwa"], answer: 2, why: "Farawa kafin abin ya faru kaɗan yana cire lokacin banza kuma yana sa bidiyon ya ci gaba da tafiya." },
          { objective: "O2", q: "Kafin babban canji a gyaranku, wace al'ada ce mai kyau?", options: ["Ku goge tsohuwar siga don samun wuri", "Ku rufe manhajar ba tare da ajiyewa ba", "Ku canja aspect ratio", "Ku ajiye kwafi da lambar siga, kamar v2"], answer: 3, why: "Kwafin sigogi yana ba ku damar komawa idan canjin bai yi aiki ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Gogewa da miƙa aiki",
      lessons: [
        {
          title: "Sa gyaran ya yi laushi da B-roll da yanke mafi kyau",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ƙara B-roll, cutaway da L-cut ko J-cut don sa rough cut ɗinku ya yi laushi.",
          text: [
            "Idan kun yanke wani sashe na hira, fuskar tana tsalle. Ana kiran wannan jump cut. Masu gyaran bidiyo suna ɓoye shi da B-roll: hotunan da ke nuna abin da mutumin yake magana a kai. Mai horarwa yana magana game da atisaye; muna ganin 'yan wasa suna atisaye. Muryar tana ci gaba yayin da hoton ke canjawa.",
            "Cutaway gajeren hoto ne na wani abu na kusa, kamar hannaye, taron jama'a ko allon maki, da ake sakawa tsakanin hotuna biyu na abu ɗaya. Ku haɗa hotuna masu nisa (wide), na tsakiya (medium) da na kusa (close-up) don mai kallo ya ga wurin, mutanen da ƙananan bayanai.",
            "Dabarun ƙwararru biyu suna da sauƙi. A L-cut, hoton yana canjawa zuwa hoto na gaba yayin da sautin hoton farko ke ci gaba. A J-cut, kuna jin hoto na gaba kafin ku gan shi. Dukansu suna sa gyaran ya ji laushi kuma na halitta. Yawancin manhajojin gyara suna ba ku damar raba sauti da hoto (unlink ko detach) don yin wannan.",
            "Ku yi sauƙi da transitions. Ƙwararru suna amfani da yanke na yau da kullum (plain cut) a mafi yawan lokaci. Ku yi amfani da sauƙaƙan transition ɗaya ko biyu, kamar gajeren fade a farko da ƙarshe. Transitions masu walƙiya da juyawa da yawa suna sa bidiyo ya yi kama da sabon shiga ne ya yi shi."
          ],
          steps: ["Ku kalli rough cut ɗinku ku yi alama a kowane jump cut.", "Ku saka B-roll a kan layin (track) da ke saman hirar don rufe kowane tsalle.", "Ku ƙara aƙalla cutaway ɗaya (hannaye, taron jama'a, allo, allon maki).", "Ku gwada L-cut ko J-cut ɗaya ta hanyar raba sauti da hoto.", "Ku yi amfani da plain cuts, da sauƙaƙan transition ɗaya ko biyu kawai a mafi yawa.", "Ku ajiye shi a matsayin v2."],
          words: [["B-roll", "ƙarin hotunan da ke nuna abin da wani yake magana a kai, da ake sakawa a kan muryarsa."], ["Jump cut", "tsallen hoto kwatsam idan an yanke wani sashe na hoto."], ["Cutaway", "gajeren hoto na wani abu na kusa da ake sakawa tsakanin hotuna biyu na abu ɗaya."], ["L-cut da J-cut", "gyare-gyaren da sauti da hoto ke canjawa a lokuta dabam-dabam, don yanke ya ji laushi."], ["Transition", "wani tasiri tsakanin bidiyoyi biyu, kamar fade."]],
          slides: [
            { title: "Ku ɓoye tsalle-tsallen", bullets: ["Yanke hira yana sa fuska ta yi tsalle", "Ku rufe shi da B-roll da ke nuna maudu'in", "Muryar tana ci gaba a ƙasa"] },
            { title: "Ku haɗa hotunanku", bullets: ["Wide (nesa): wurin", "Medium (tsakiya): mutanen", "Close-up (kusa): ƙananan bayanai", "Cutaways: hannaye, taron jama'a, allo"] },
            { title: "L-cut da J-cut", bullets: ["L-cut: hoto yana canjawa, sauti yana ci gaba", "J-cut: ku ji hoto na gaba kafin ku gan shi", "Ku raba sauti da hoto don yin shi"] },
            { title: "Transitions: kaɗan ya fi kyau", bullets: ["Plain cuts a mafi yawan lokaci", "Sauƙaƙan fade ɗaya ko biyu a mafi yawa"] }
          ],
          tryIt: "Ku buɗe v1 ɗinku. Ku rufe kowane jump cut da B-roll, ku ƙara aƙalla cutaway ɗaya, ku yi L-cut ko J-cut ɗaya. Ku cire duk transitions masu walƙiya don kada ku yi amfani da fiye da nau'i biyu. Ku ajiye shi a matsayin v2 ku kalli v1 da v2 gefe da gefe.",
          youCanNow: "amfani da B-roll, cutaways da L-cuts ko J-cuts don sa gyara ya yi laushi kuma ya zama mai sauƙin kallo.",
          quickCheck: [
            { objective: "O3", q: "Wata hira tana da jump cut inda kuka cire jimla ɗaya. Ta yaya za ku ɓoye shi?", options: ["Ku saka B-roll a kan tsallen yayin da muryar ke ci gaba", "Ku ƙara transition mai juyawa", "Ku ƙara ƙarar bidiyon", "Ku canja frame rate"], answer: 0, why: "B-roll yana rufe tsallen hoton yayin da magana ke ci gaba da gudana." },
            { objective: "O3", q: "Kuna jin taron jama'a suna sowa kafin hoton ya canja zuwa taron jama'a. Me ake kiran wannan?", options: ["Jump cut", "L-cut", "Rough cut", "J-cut"], answer: 3, why: "A J-cut sautin hoto na gaba yana farawa kafin hotonsa." }
          ]
        },
        {
          title: "Gyara sauti, ƙara waƙa da captions",
          objectives: ["O4"],
          minutes: 6,
          goal: "Daidaita matakan murya da waƙa, ƙara waƙar da kuke da izinin amfani da ita, da ƙara captions da suka yi daidai.",
          text: [
            "Masu kallo suna yafe hoto marar kyau sosai, amma ba sa yafe mummunan sauti. Ku yi amfani da mitar sauti (audio meter): tana nuna ƙarfin sauti. Idan ta kai sama ta yi ja, sautin zai yi kara-kara. Manufar da aka saba ita ce murya ta kai kusan -6 a kan mita, waƙa ta yi ƙasa sosai a ƙarƙashin magana, kuma babu abin da ya kai 0.",
            "Ku yi amfani da waƙar da aka yarda ku yi amfani da ita kaɗai: waƙar da kuka yi, waƙa mai izini a rubuce, ko ma'ajiyar waƙoƙi kyauta ta manhajar gyaranku ko dandalin, kuna bin ƙa'idojinta. YouTube Audio Library tana ba da waƙa don bidiyoyin YouTube; wasu waƙoƙi suna buƙatar ku ambaci sunan mawaƙin. Ambaton suna kaɗai ba ya ba ku izinin amfani da waƙar wani, kuma babu adadin daƙiƙun da ke da aminci.",
            "Mutane da yawa suna kallo ba tare da sauti ba, kuma captions suna taimaka wa masu kallo kurame ko masu matsalar ji. Yawancin manhajojin gyara suna iya yin captions da kansu (automatic). Koyaushe ku karanta su ku gyara kowane kuskure, musamman sunaye, wurare da lambobi.",
            "Ku ƙara rubutu a kan allo a hankali: gajeren take, sunan mutum da matsayinsa a farkon lokacin da ya yi magana, da katin ƙarshe mai saƙon ko kiran aiki (call to action). Ku yi amfani da manyan haruffa masu sauƙi, ku nisanta rubutu daga gefuna, inda manhajoji ke saka maɓallansu."
          ],
          steps: ["Ku kunna gyaran ku kalli mitar sauti.", "Ku rage duk bidiyon da ya yi ja; ku ƙara muryoyin da suka yi ƙasa sosai.", "Ku ƙara waƙar da aka yarda ku yi amfani da ita ku rage ta a ƙarƙashin magana.", "Ku kunna automatic captions, sannan ku karanta ku gyara kowace kalma.", "Ku ƙara take, alamar suna da katin ƙarshe da manyan haruffa masu sauƙi.", "Ku ajiye shi a matsayin v3."],
          words: [["Mitar sauti (audio meter)", "layin da ke nuna ƙarfin sauti."], ["Clipping", "sauti mai kara-kara da ke faruwa idan matakin ya kai saman mita."], ["Royalty-free", "waƙar da za ku iya amfani da ita ba tare da biya duk lokacin da aka kunna ta ba, ƙarƙashin ƙa'idojin ma'ajiyar; har yanzu tana da ƙa'idoji."], ["Captions", "kalmomin da ake faɗa da aka nuna a matsayin rubutu a kan allo."], ["Call to action (kiran aiki)", "abin da kuke son mai kallo ya yi na gaba, kamar \"Ku ziyarce mu ranar Asabar\"."]],
          slides: [
            { title: "Ku kalli mitar", bullets: ["Ja a sama = sauti mai kara-kara", "Murya ta kai kusan -6", "Waƙa ƙasa sosai a ƙarƙashin magana"] },
            { title: "Waƙar da aka yarda ku yi amfani da ita", bullets: ["Waƙarku ko izini a rubuce", "Ma'ajiyar manhajarku ko ta dandali, ƙarƙashin ƙa'idojinta", "Ambaton suna kaɗai ba izini ba ne"] },
            { title: "Captions", bullets: ["Masu kallo da yawa suna kallo ba tare da sauti ba", "Suna taimaka wa kurame ko masu matsalar ji", "Ku karanta ku gyara kowane automatic caption"] },
            { title: "Rubutu a kan allo", bullets: ["Gajeren take da alamun suna", "Katin ƙarshe mai kiran aiki", "Manyan haruffa masu sauƙi nesa da gefuna"] }
          ],
          sources: [
            { name: "U.S. Copyright Office: Tambayoyi game da fair use (amfani na adalci)", url: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
            { name: "YouTube Help: Amfani da waƙa da sautuka daga Audio Library", url: "https://support.google.com/youtube/answer/3376882" }
          ],
          tryIt: "Ku buɗe v2 ɗinku. Ku kalli mitar ku gyara duk bidiyon da ya yi ja. Ku ƙara waƙar da aka yarda ku yi amfani da ita ku rage ta a ƙarƙashin magana. Ku kunna automatic captions ku gyara kowane kuskure. Ku ƙara take, alamar suna ɗaya da katin ƙarshe. Ku ajiye shi a matsayin v3, sannan ku kalle shi sau ɗaya ba tare da sauti ba don ku tabbata captions suna ba da labarin.",
          youCanNow: "daidaita matakan sauti, ƙara waƙa ta hanyar da ta dace, da ƙara captions da rubutun da mutane za su iya karantawa.",
          quickCheck: [
            { objective: "O4", q: "Mitar sauti tana yin ja a sama idan mai horarwa ya yi ihu. Me za ku yi?", options: ["Ku ƙara ƙarar wannan bidiyon", "Ku bar shi; ja yana nufin yana da kyau", "Ku rage matakin wannan bidiyon don kada ya shiga ja", "Ku goge captions"], answer: 2, why: "Ja a sama yana nufin clipping; rage matakin yana dakatar da kara-kara." },
            { objective: "O4", q: "Abokin ciniki yana son shahararriyar waƙa a tallarsa. Ba ku da izini. Mene ne gaskiya?", options: ["Babu matsala idan kun yi amfani da daƙiƙa 10 kawai", "Ambaton sunan mawaƙin yana sa ya halatta", "Talla na iya amfani da kowace waƙa da ke rediyo", "Kuna buƙatar izini, ko ku yi amfani da waƙa daga ma'ajiya ƙarƙashin ƙa'idojinta"], answer: 3, why: "Babu adadin daƙiƙun da ke da aminci kuma ambaton suna ba izini ba ne, don haka ku nemi izini ko ku yi amfani da waƙar ma'ajiya mai lasisi." }
          ]
        },
        {
          title: "Fitar da bidiyo, duba shi da gina portfolio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Fitar da bidiyon da ya kammala, duba shi da brief, da rubuta bayanin portfolio.",
          text: [
            "Fitarwa (export) tana mayar da project ɗinku zuwa fayil ɗin bidiyo ɗaya. Don yawancin amfani a intanet, ku zaɓi fayil na MP4 mai bidiyon H.264 a siffa, girma da frame rate iri ɗaya da project ɗinku. Ku sa wa fayil ɗin suna a sarari, kamar \"bakery-promo-v3-9x16.mp4\", ku ajiye shi a fayil ɗin exports. A DaVinci Resolve wannan yana faruwa a shafin da ake kira Deliver; sauran manhajoji suna amfani da maɓalli kamar Export ko Save.",
            "Kada ku taɓa aika fayil da ba ku kalla ba. Ku kunna fayil ɗin da kuka fitar daga farko har ƙarshe a na'urar da za a kalle shi. Ku duba brief: tsawo daidai, siffa daidai, saƙo ɗaya a sarari, sauti mai tsabta, captions da sunaye daidai. Sannan ku aika, ku nemi ra'ayi (feedback), ku yi canje-canje a sabuwar siga. Abokan ciniki sau da yawa suna neman canje-canje; wannan wani ɓangare ne na aikin na yau da kullum.",
            "Portfolio ɗinku ƙaramin tarin mafi kyawun ayyukanku ne. Ku saka bidiyon a intanet inda aka yarda ku yi haka (da izini daga abokin ciniki da duk wanda ke ciki) ku rubuta gajeren bayani: brief, abin da kuka yi, kayan aikin da kuka yi amfani da su da sakamakon. Masu ɗaukar ƙananan editors, mataimakan kafafen sada zumunta da masu ƙirƙirar abun ciki sau da yawa suna neman misalai kamar wannan.",
            "Takardun shaida (credentials) na iya taimakawa daga baya. Certiport, wani kasuwanci na Pearson VUE, yana gudanar da jarabawar Adobe Certified Professional in Digital Video Using Adobe Premiere. Blackmagic Design tana ba da horo da jarabawa ta intanet don zama editor na DaVinci Resolve mai takardar shaida. Ku duba shafin hukuma na kowanne don sharuɗɗa da kuɗaɗe na yanzu. Wannan kwas yana shirya ku ne don ci gaba da koyo; ba ya ba da ɗayansu."
          ],
          steps: ["Ku fitar da MP4 (H.264) a siffa, girma da frame rate na project.", "Ku sa wa fayil suna a sarari ku ajiye shi a fayil ɗin exports.", "Ku kalli dukkan fayil ɗin a na'urar da za a kunna shi.", "Ku duba shi da kowane layi na brief.", "Ku aika, ku nemi ra'ayi, ku yi canje-canje a sabuwar siga.", "Ku rubuta bayanin portfolio: brief, aikinku, kayan aiki, sakamako."],
          words: [["Export (fitarwa)", "mayar da gyaranku zuwa fayil ɗin bidiyo ɗaya da ya kammala."], ["MP4 da H.264", "nau'in fayil da tsarin bidiyo da aka saba da su da ke kunnawa a yawancin wayoyi, kwamfutoci da shafukan intanet."], ["Portfolio", "ƙaramin tarin mafi kyawun ayyukanku don nuna wa masu ɗaukar aiki ko abokan ciniki."], ["Revision (gyaran da aka nema)", "canjin da abokin ciniki ya nema bayan ya ga wata siga."], ["Credential (takardar shaida)", "shaida daga ƙungiya sananniya cewa kun ci jarabawar ƙwarewarku."]],
          slides: [
            { title: "Ku fitar da fayil ɗin", bullets: ["MP4 da H.264 don yawancin amfani a intanet", "Siffa, girma da frame rate iri ɗaya da project", "Suna a sarari, an ajiye a fayil ɗin exports"] },
            { title: "Ku duba kafin ku aika", bullets: ["Ku kalli dukkan fayil ɗin a ainihin na'urar", "Ku duba kowane layi na brief", "Canje-canje suna shiga sabuwar siga"] },
            { title: "Bayanin portfolio ɗinku", bullets: ["Brief", "Abin da kuka yi da kayan aikin da kuka yi amfani da su", "Sakamakon; ku raba shi da izini kaɗai"] },
            { title: "Takardun shaida don dubawa daga baya", bullets: ["Adobe Certified Professional in Premiere (Certiport)", "Takardar shaidar DaVinci Resolve (Blackmagic Design)", "Ku duba shafukan hukuma; wannan kwas yana shiryawa ne kawai"] }
          ],
          sources: [
            { name: "Certiport: jarabawowin Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Certify" },
            { name: "Blackmagic Design: horo da takardar shaidar DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
            { name: "U.S. Bureau of Labor Statistics: Film and Video Editors and Camera Operators (masu gyaran fim da bidiyo da masu ɗaukar kyamara)", url: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm" }
          ],
          tryIt: "Aikin ƙarshe: ku fitar da v3 ɗinku a matsayin MP4 a siffar da ta dace, ku sa masa suna a sarari ku kalle shi a na'urar da za a kunna shi. Ku duba shi da brief ɗinku ku gyara duk abin da bai dace ba. Sannan ku rubuta bayanin portfolio ɗinku a layi huɗu: brief, abin da kuka yi, kayan aikin da kuka yi amfani da su da sakamakon.",
          youCanNow: "fitar da bidiyon da ya kammala, duba shi da brief, da gabatar da shi a matsayin aikin portfolio.",
          quickCheck: [
            { objective: "O5", q: "Wane sunan fayil ne ya fi kyau ga bidiyon da ya kammala?", options: ["\"final.mp4\"", "\"bakery-promo-v3-9x16.mp4\"", "\"untitled (2).mp4\"", "\"video.mp4\""], answer: 1, why: "Yana faɗin aikin, sigar da siffar, don haka babu wanda zai aika fayil marar daidai." },
            { objective: "O5", q: "Yanzu kuka fitar da bidiyon. Me za ku yi kafin ku aika shi?", options: ["Ku aika shi nan take don ceton lokaci", "Ku goge project don samun wuri", "Ku kalli dukkan fayil ɗin a na'urar da za a kunna shi ku duba shi da brief", "Ku canja frame rate"], answer: 2, why: "Kallon ainihin fayil ɗin yana kama kurakurai kafin abokin ciniki ya gan su." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gogewa da miƙa aiki",
        questions: [
          { objective: "O3", q: "Mene ne B-roll?", options: ["Bidiyon farko a kan timeline", "Wani nau'in kyamara", "Ƙarin hotunan da ke nuna abin da wani yake magana a kai", "Fayil ɗin waƙa"], answer: 2, why: "Ana saka B-roll a kan murya don nuna maudu'in da ɓoye tsalle-tsalle." },
          { objective: "O3", q: "Nau'in transitions nawa ya kamata bidiyon aikin sabon shiga ya yi amfani da su yawanci?", options: ["Sauƙaƙa ɗaya ko biyu, da plain cuts a mafi yawan lokaci", "Dabam tsakanin kowane bidiyo", "Aƙalla goma", "Tasirin juyawa da wipe kaɗai"], answer: 0, why: "Ƙwararru galibi suna amfani da plain cuts; transitions masu walƙiya da yawa suna kama da na sabon shiga." },
          { objective: "O4", q: "Me yasa ya kamata ku karanta automatic captions kafin ku fitar da bidiyo?", options: ["Captions suna rage saurin bidiyon", "Captions suna canja aspect ratio", "Automatic captions koyaushe cikakku ne", "Sau da yawa suna kuskure a sunaye, wurare da lambobi"], answer: 3, why: "Automatic captions suna yin kurakurai, don haka kuna duba ku gyara kowace kalma." },
          { objective: "O4", q: "A ina ya kamata waƙa ta kasance yayin da wani ke magana?", options: ["Ta fi murya ƙara", "Ƙasa sosai da murya", "A saman mita sosai", "An kashe ta an goge"], answer: 1, why: "Waƙa a ƙasa a ƙarƙashin magana tana sa kowace kalma ta zama a sarari." },
          { objective: "O5", q: "Abokin ciniki yana neman canje-canje biyu bayan ya kalli v3. Mene ne amsar ƙwararru?", options: ["Ku yi canje-canjen a sabuwar siga, v4", "Ku ƙi; bidiyon ya kammala", "Ku goge v3 ku sake farawa", "Ku sake aika fayil ɗin dai"], answer: 0, why: "Gyare-gyaren da aka nema ɓangare ne na aikin na yau da kullum, kuma sabuwar siga tana kiyaye tsohuwar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Gyaran Bidiyo (Video Editing)",
    questions: [
      { objective: "O1", q: "Wani brief ya ce: \"TikTok na daƙiƙa 30 don motar sayar da abincinmu, a miƙa ranar Juma'a.\" Wace siffa ce project ɗin?", options: ["16:9 faɗi", "1:1 murabba'i", "9:16 tsaye", "4:3"], answer: 2, why: "TikTok yana kunnawa a tsaye a waya, don haka 9:16 yana cika allo." },
      { objective: "O1", q: "Mene ne babban dalilin yin babban fayil na project mai suna da ƙananan fayiloli a ciki?", options: ["Don kowane bidiyo da fayil ya zama mai sauƙin samu", "Yana sa bidiyon ya kunna da sauri", "Manhajojin gyara ba za su buɗe fayiloli ba tare da shi ba", "Yana ƙara captions da kansa"], answer: 0, why: "Fayiloli masu tsari suna ceton lokaci kuma suna hana fayiloli ɓacewa ko kuskure." },
      { objective: "O1", q: "Me \"1920 x 1080\" yake bayyanawa?", options: ["Frame rate", "Aspect ratio kaɗai", "Tsawo a daƙiƙoƙi", "Resolution, a pixels"], answer: 3, why: "1920 x 1080 shi ne faɗi da tsayi a pixels, wanda ake kira 1080p." },
      { objective: "O1", q: "Kuna son ɗaukar bidiyon ɗan wasa mai shekara 15 don muhimman lokutan ƙungiya. Wa dole ya yarda?", options: ["Mai horarwa kaɗai", "Ɗan wasan da iyaye ko mai kula da shi", "Babu kowa, idan wasan na jama'a ne", "Ɗayan ƙungiyar kaɗai"], answer: 1, why: "Duk wanda bai kai shekara 18 ba yana buƙatar iyaye ko mai kula su yarda, tare da ɗan wasan." },
      { objective: "O2", q: "Me kayan aikin trim yake yi?", options: ["Yana canja launuka", "Yana yanke farko ko ƙarshen bidiyo", "Yana ƙara waƙa", "Yana fitar da fayil"], answer: 1, why: "Trim yana gajarta bidiyo daga farkonsa ko ƙarshensa." },
      { objective: "O2", q: "Mene ne playhead?", options: ["Bidiyon farko a project", "Tambarin manhajar gyara", "Mitar sauti", "Layin da ke kan timeline mai nuna inda kuke"], answer: 3, why: "Playhead yana nuna lokacin da kuke kallo; a can ake yin split." },
      { objective: "O2", q: "Wane jeri ne ya dace da tallar daƙiƙa 45 ta shagon aski?", options: ["Ana kammala sabon aski, mai askin yana faɗin abin da ya sa shagon ya bambanta, sannan adireshi da lokutan buɗewa", "Lokutan buɗewa, sannan dogon hoton kujera babu kowa, sannan tambari", "Minti goma na dukkan askin", "Mai askin yana kallon kyamara yana jiran farawa"], answer: 0, why: "Yana jawo hankali, yana ba da saƙon kuma yana ƙarewa da abin da za a yi." },
      { objective: "O2", q: "Wanne ne lokacin banza da ya kamata ku cire?", options: ["Lokacin da ɗan wasa ya ci ƙwallo", "Mai shagon tana bayanin kayanta mafi kyau", "Dogon shiru inda mai magana ya ce \"um\" ya kalli wani wuri", "Allon sunan shagon a ƙarshe"], answer: 2, why: "Shiru da jira suna ƙara tsawo ba tare da ƙara ma'ana ba." },
      { objective: "O3", q: "A L-cut, me ke faruwa?", options: ["Bidiyon yana yin baƙi", "Hoto da sauti duka suna tsayawa", "Sauti yana farawa kafin hoto", "Hoton yana canjawa yayin da sautin hoton farko ke ci gaba"], answer: 3, why: "A L-cut sautin baya yana ci gaba a ƙarƙashin sabon hoto." },
      { objective: "O3", q: "Wane hoto ne zai yi aiki a matsayin cutaway a hira da mai yin burodi?", options: ["Hoton hirar iri ɗaya kuma", "Allo baƙi", "Hoton kusa na hannayenta suna tsara kullu", "Hoto daga wani bidiyo game da motoci"], answer: 2, why: "Cutaway yana nuna wani abu na kusa mai alaƙa, wanda ke ɓoye yanke." },
      { objective: "O3", q: "Me yasa za a haɗa hotuna wide, medium da close-up?", options: ["Don nuna wurin, mutanen da ƙananan bayanai", "Don rage girman fayil", "Don canja frame rate", "Manhajojin gyara suna buƙatar girman hoto uku"], answer: 0, why: "Girman hotuna dabam-dabam suna ba mai kallo cikakken hoto kuma suna sa shi ya ji daɗi." },
      { objective: "O3", q: "Gyaranku yana da transition mai walƙiya dabam tsakanin kowane bidiyo. Me ya kamata ku canja?", options: ["Ku ƙara transitions", "Ku yi amfani da plain cuts ku bar sauƙaƙan transition ɗaya ko biyu", "Ku tsawaita transitions", "Ku hanzarta dukkan bidiyon"], answer: 1, why: "Plain cuts da 'yan sauƙaƙan transitions suna kama da na ƙwararru." },
      { objective: "O4", q: "Me ake nufi idan mitar sauti ta kai sama ta yi ja?", options: ["Sautin ya cika daidai", "Captions suna kunne", "Sautin ya yi ƙara sosai kuma zai iya yin kara-kara", "Waƙar tana da izini"], answer: 2, why: "Ja a sama clipping ne, wanda ke sa sauti ya yi kara-kara." },
      { objective: "O4", q: "Wace waƙa za ku iya amfani da ita a bidiyon abokin ciniki?", options: ["Kowace waƙa idan kun ambaci suna", "Waƙa daga rediyo idan ba ta kai daƙiƙa 15 ba", "Waƙar da aboki ya saka a intanet", "Waƙa daga ma'ajiyar manhajar gyaranku, kuna bin ƙa'idojinta"], answer: 3, why: "Waƙar ma'ajiya ƙarƙashin ƙa'idojinta, waƙarku, ko izini a rubuce su ne zaɓuɓɓuka masu aminci." },
      { objective: "O4", q: "Me yasa za a ƙara captions a bidiyon aiki?", options: ["Mutane da yawa suna kallo ba tare da sauti ba, kuma captions suna taimaka wa kurame ko masu matsalar ji", "Captions suna rage girman fayil", "Captions na fina-finai ne kaɗai", "Dandali suna goge bidiyoyi marasa captions"], answer: 0, why: "Captions suna kai wa ƙarin masu kallo kuma suna sa saƙon ya zama a sarari ba tare da sauti ba." },
      { objective: "O4", q: "A ina ya kamata rubutu a kan allo ya kasance a bidiyon waya na tsaye?", options: ["Daidai a gefuna sosai", "Nesa da gefuna, da manyan haruffa masu sauƙi", "A hoton ƙarshe kaɗai, ƙarami sosai", "A ƙarƙashin maɓallan manhajar"], answer: 1, why: "Manhajoji suna saka maɓallai kusa da gefuna, don haka rubutu a can zai iya rufewa." },
      { objective: "O5", q: "Don yawancin amfani a intanet, wane zaɓin export ne yake da aminci?", options: ["Kowane nau'in fayil a kowane girma", "Hoto marar motsi", "MP4 da H.264, da siffa, girma da frame rate iri ɗaya da project", "Fayil ɗin project kaɗai"], answer: 2, why: "MP4 da H.264 suna kunnawa a yawancin wayoyi, kwamfutoci da shafukan intanet." },
      { objective: "O5", q: "Me ke shiga cikin gajeren bayanin portfolio?", options: ["Brief, abin da kuka yi, kayan aikin da kuka yi amfani da su da sakamakon", "Adireshin gidanku da lambar wayarku", "Kalmar sirrin manhajar gyaranku", "Girman fayil ɗin bidiyon kaɗai"], answer: 0, why: "Waɗannan layuka huɗu suna nuna wa mai ɗaukar aiki abin da za ku iya yi." },
      { objective: "O5", q: "Wa ke gudanar da jarabawar Adobe Certified Professional in Digital Video Using Adobe Premiere?", options: ["Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor)", "YouTube", "Kowace manhajar gyaran bidiyo", "Certiport, wani kasuwanci na Pearson VUE"], answer: 3, why: "Certiport ne ke gudanar da jarabawowin Adobe Certified Professional; ku duba shafinsa don cikakkun bayanai na yanzu." },
      { objective: "O5", q: "Me wannan kwas yake ba ku?", options: ["Takardar shaidar Adobe", "Takardar shaidar DaVinci Resolve", "Lasisin jiha na gyaran bidiyo", "Shiri da aikin portfolio, ba takardar shaida ba"], answer: 3, why: "Kwas ɗin yana shirya ku ne; takardun shaida suna fitowa daga Adobe ta hannun Certiport ko daga Blackmagic Design." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 7, 8, 11, 12, 13, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe, ku fitar da sabuwar siga, ku sake gwadawa.",
    criteria: [
      { name: "An tsara kuma an shirya", objective: "O1", notYet: "Bidiyoyi sun warwatsu ko siffar ba ta dace da dandalin ba (baƙaƙen layuka ko gefuna da aka yanke).", meets: "Babban fayil na project mai suna da ƙananan fayiloli, kwafin ajiya (backup), kuma siffa da frame rate na project sun dace da brief.", exceeds: "An sake wa mafi kyawun bidiyoyi suna kuma mai koyo zai iya bayyana dalilin da ya zaɓi siffar da frame rate." },
      { name: "Labari da tsawo", objective: "O2", notYet: "Bidiyoyi ba su cikin jeri, suna da lokacin banza, ko bidiyon ya yi nisa da tsawon da ake so.", meets: "Farko, tsakiya da ƙarshe a sarari; babu lokacin banza; cikin daƙiƙa 5 na tsawon da ake so.", exceeds: "'Yan daƙiƙun farko suna jawo hankali kuma kowane hoto yana da amfaninsa." },
      { name: "Gyara mai laushi", objective: "O3", notYet: "Ana ganin jump cuts ko an yi amfani da transitions masu walƙiya da yawa.", meets: "B-roll ko cutaways suna ɓoye tsalle-tsalle; ba fiye da nau'in transition biyu ba.", exceeds: "Yana da L-cut ko J-cut mai tsabta da kyakkyawan haɗin hotuna wide, medium da close-up." },
      { name: "Sauti da captions", objective: "O4", notYet: "Sauti yana kara-kara ko yana da wuyar ji, captions suna da kurakurai, ko waƙa ba ta da izini.", meets: "Muryoyi a sarari, waƙa a ƙarƙashin magana, captions daidai, da waƙar da mai koyo ke da izinin amfani da ita kaɗai.", exceeds: "Alamun suna da katin ƙarshe suna a sarari a waya, kuma an ambaci sunayen mawaƙa inda ma'ajiyar ta buƙata." },
      { name: "An miƙa kuma an gabatar", objective: "O5", notYet: "An sa wa fayil suna ba daidai ba, ba ya kunnawa, ko babu bayanin portfolio.", meets: "MP4 mai suna a sarari da ke kunnawa a na'urar da ake so, an duba shi da brief, tare da bayanin portfolio mai layi huɗu.", exceeds: "Mai koyo ya sami ra'ayi ya miƙa sigar da aka gyara, kuma bayanin yana faɗin abin da ya canja." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ƙara bidiyon da ya kammala a portfolio ko takardar neman aiki cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka kammala aikin gyaran bidiyo na biya ko na sa kai ga kasuwanci, ƙungiyar wasa, makaranta ko ƙungiyar agaji cikin kwanaki 90",
      "Masu koyo da suka ci gaba zuwa wani kwas na gyaran bidiyo ko takardar shaida kamar Adobe Certified Professional ko takardar shaidar DaVinci Resolve"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai ɗaukar bidiyo, da gajerun bidiyoyi 8 zuwa 15 da mai koyo ya ɗauka da kansa",
      "Manhajar gyara kyauta: DaVinci Resolve ko Microsoft Clipchamp a kwamfuta, ko CapCut ko manhajar gyara ta waya",
      "USB drive ko ma'ajiyar intanet (cloud) don kwafin ajiya",
      "Abin saka a kunne (earbuds ko headphones) don duba sauti",
      "Kusan awa 2 gaba ɗaya: darussa, gwaje-gwaje, da lokacin gyara don aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A ɗakin kwamfuta, ku duba kafin kwas ɗin cewa manhajar da aka zaɓa tana sakuwa kuma tana aiki a kwamfutocin shirin; DaVinci Resolve tana buƙatar kwamfuta mafi ƙarfi fiye da manhajar intanet kamar Clipchamp.",
      "Ku ba masu koyo da ba su da bidiyoyi gajeren brief na atisaye ku bar su su ɗauki bidiyo a kewayen ginin, da izini daga duk wanda ke cikin bidiyo.",
      "Ku duba ƙa'idojin shekaru na kowace manhajar gyara ga matasa masu koyo, kuma ku sami izinin iyaye ko mai kula ga duk wanda bai kai shekara 18 ba da ya bayyana a bidiyo.",
      "Menu suna canjawa sau da yawa: ku nuna ayyukan (import, trim, split, raba sauti, captions, export) kai tsaye a manhajar da ƙungiyar ke amfani da ita.",
      "Ku shirya ɗan taron kallo inda masu koyo za su nuna bidiyoyinsu su ba da ra'ayi ta amfani da layukan rubric, layi ɗaya a lokaci ɗaya."
    ]
  }
};
