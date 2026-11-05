"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-team-sports.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-team-sports-ha",
  lang: "ha",
  translationOf: "athletes-ai-team-sports",
  category: "Athletes",
  name: "AI don Wasannin Ƙungiya",
  skills: "Bin ƙididdigar ƙungiya masu sauƙi, Gano tsarin 'yan wasa da na wasa, Rubuta taƙaitaccen bincike kan abokin karawa da AI, Tsara sadarwa da ƙungiya, Kare sirrin 'yan wasa da adalci",
  outcome: "amfani da takardar lissafi (spreadsheet) da ake rabawa da mataimakin AI don bin ƙididdigar ƙungiya masu sauƙi, gano tsarin 'yan wasa ko na wasa ɗaya, rubuta taƙaitaccen bincike kan abokin karawa a shafi ɗaya, da raba shi da ƙungiya ta hanyar da ke kare sirrin 'yan wasa.",
  about: [
    "Wannan kwas ɗin na masu horarwa (coach), manajojin ƙungiya, kyaftin-kyaftin da masu nazarin bayanan ƙungiya ne a kowane wasan ƙungiya: kwallon kwando, kwallon ƙafa, kwallon raga (volleyball), kwallon ƙafa ta Amurka, hockey, baseball, softball da sauransu.",
    "Ƙungiyoyin ƙwararru suna da sassan nazarin bayanai. Ku kuma kuna iya yin sigar mai sauƙi da takardar lissafi da mataimakin AI kyauta: ku bi abin da ke da muhimmanci, ku gano tsare-tsare, ku binciki abokan karawa, ku yi magana a sarari da 'yan wasa da iyalansu.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin. Bayanai suna taimaka wa hukuncin mai horarwa; ba sa maye gurbinsa."
  ],
  finalTask: "Don ƙungiyarku, ku shirya takardar ƙididdiga da ake rabawa don wasanni ko atisaye uku, ku gano tsarin 'yan wasa ko na wasa ɗaya da taimakon AI, ku rubuta taƙaitaccen bincike a shafi ɗaya kan wani abokin karawa na gaske ta amfani da bidiyon wasa ko sakamakon da ke a fili, sannan ku rubuta saƙo ga ƙungiya da ke raba babban abin ba tare da bayyana bayanan sirrin kowane ɗan wasa ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu horarwa, manajojin ƙungiya, kyaftin-kyaftin da masu nazarin bayanan ƙungiya a kowane wasan ƙungiya, kamar kwallon kwando, kwallon ƙafa, kwallon raga, kwallon ƙafa ta Amurka, hockey, baseball da softball.",
    startingPoint: "Sun san wasansu da ƙungiyarsu sosai, kuma suna amfani da wayar zamani, wataƙila da takardar lissafi. Yawancinsu suna bin ƙididdiga kaɗan ko ba a kai a kai ba, suna binciken abokan karawa daga tunani, kuma ba su kafa dokoki kan raba bayanan 'yan wasa ko amfani da AI da su ba.",
    gap: "Ba tare da ƙididdiga da bincike na kai a kai ba, ƙungiyoyi suna rasa tsare-tsaren da za su iya canja atisaye da shirin wasa, kuma raba bayanai ba tare da kulawa ba yana iya bayyana bayanan sirrin 'yan wasa. Takardar da ake rabawa mai sauƙi, amfani da AI a hankali da dokokin sirri a sarari suna taimaka wa ƙungiyoyi su inganta yayin da suke kare 'yan wasa.",
    constraints: [
      "Kalmomi masu sauƙi, kusan matakin karatu na aji 8",
      "Waya ko kwamfuta mai Google Sheets kyauta da mataimakin AI kyauta",
      "Kusan minti 60 na darussa, da ƙididdiga daga wasanni ko atisaye uku",
      "Dokokin makaranta, gasa (league) da kulob kan bayanan ɗalibai, manhajojin da aka amince da su, musayar bidiyo da tuntuɓar ƙananan yara",
      "Babu cikakken suna, bayanan lafiya, na karatu ko na tuntuɓa a takardun ƙididdiga ko kayan AI"
    ],
    prerequisites: "Babu. Kwas ɗin \"Nazarin Bidiyo da Basirar Wasa\" yana taimakawa wajen yi wa bidiyo alama."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku yanayin wasan ƙungiyarku", action: "zaɓar ƙididdigar ƙungiya uku zuwa biyar da rubuta ma'ana a sarari ga kowacce", standard: "kowace ƙididdiga za a iya tattara ta a kowane wasa, kuma an ɗora wa wani mutum alhakin tattara ta" },
    { id: "O2", condition: "Ta amfani da Google Sheets", action: "shirya takardar ƙididdigar ƙungiya da ake rabawa mai shafin taƙaitawa da damar shiga lafiya", standard: "damar gyara ga ma'aikatan da ke tattarawa kaɗai, damar kallo kawai ga sauran, ba a fili ba, kuma babu bayanan lafiya, maki ko na tuntuɓa" },
    { id: "O3", condition: "Idan kuna da ƙididdiga daga wasanni ko atisaye aƙalla uku", action: "gano tsarin 'yan wasa ko na wasa ɗaya ta amfani da jerawa, tacewa ko mataimakin AI", standard: "da lambobin 'yan wasa ko baƙaƙen sunayensu kaɗai, an duba lissafin AI, kuma ana ɗaukar ƙananan bayanai a matsayin tambayoyi" },
    { id: "O4", condition: "Idan kuna da sakamakon da ke a fili da bidiyon da aka yarda da shi na wani abokin karawa na gaske", action: "rubuta taƙaitaccen bincike a shafi ɗaya kan harinsu, tsaronsu, manyan 'yan wasansu da mabuɗai uku na doke su", standard: "kowane batu daga bayananku ne, kuma an bi dokokin binciken abokin karawa na gasar" },
    { id: "O5", condition: "Idan kuna da bayananku da taƙaitaccen binciken", action: "rubuta gajeren saƙo ga ƙungiya mai manyan batutuwa ɗaya zuwa uku", standard: "an aika ta hanyar sadarwar ƙungiya da aka amince da ita, kuma an ajiye ra'ayi ga kowane ɗan wasa a sirri" },
    { id: "O6", condition: "Don bayanan ƙungiyarku", action: "rubuta dokokin bayanan ƙungiya da ke kare sirrin 'yan wasa da tabbatar da adalci a shawarwari", standard: "sun haɗa da abin da za a tattara, inda za a ajiye shi, abin da ba zai taɓa shiga AI ba, wanda ke amincewa da manhajoji, da yadda ake bayyana shawarwari ga 'yan wasa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Bayanan ƙungiya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar ƙididdigar ƙungiya masu muhimmanci",
          minutes: 5,
          goal: "Zaɓi ƙididdigar ƙungiya uku zuwa biyar da suka dace da yadda ƙungiyarku ke son yin wasa.",
          text: [
            "Nazarin bayanan ƙungiya yana farawa ne daga yanayin wasan ƙungiyarku. Ƙungiyar kwallon kwando mai kai hari da sauri tana kula da maki daga sauyawa (transition) da kuskuren rasa kwallo (turnover). Ƙungiyar kwallon ƙafa mai riƙe kwallo tana kula da fasin da suka cika da harbi daga cikin akwati. Ƙungiyar kwallon raga tana kula da karɓar serve da kashi na side-out.",
            "Ku zaɓi ƙididdiga uku zuwa biyar da za ku iya tattarawa a zahiri a kowane wasa da mutanen da kuke da su: manaja, iyaye masu sa kai, ɗan wasan da ya ji rauni, ko bidiyo bayan wasan.",
            "Ku rubuta ma'ana a sarari ga kowacce don kowa ya ƙirga ta hanya ɗaya: \"Turnover shi ne duk lokacin da aka rasa kwallo ba tare da an yi harbi ba.\""
          ],
          steps: ["Ku rubuta yanayin wasan ƙungiyarku a jimla ɗaya.", "Ku jera ƙididdigar da suka dace da shi.", "Ku zaɓi uku zuwa biyar da za ku iya tattarawa a kowane wasa.", "Ku rubuta ma'ana a sarari ga kowacce.", "Ku ɗora wa wani alhakin tattara su."],
          words: [["Nazarin bayanan ƙungiya (team analytics)", "amfani da lambobi game da ƙungiya don fahimtar yadda take wasa da inganta shi."], ["Ma'ana (definition)", "doka a sarari kan ainihin abin da ake ƙirgawa."]],
          slides: [
            { title: "Ku fara da yanayin wasa", bullets: ["Kai hari da sauri? Riƙe kwallo? Tsaro da farko?", "Ƙididdigar da suka dace da yadda kuke wasa"] },
            { title: "Ku zaɓi ƙididdiga 3-5", bullets: ["Da za ku iya tattarawa a kowane wasa", "Da mutanen da kuke da su"] },
            { title: "Ku ba kowacce ma'ana", bullets: ["Kowa yana ƙirga ta hanya ɗaya", "Ku ɗora wa wani alhakin tattara ta"] }
          ],
          tryIt: "Ku rubuta yanayin wasan ƙungiyarku a jimla ɗaya. Ku nemi mataimakin AI ya ba da shawarar ƙididdigar da suka dace da shi, sannan ku zaɓi uku zuwa biyar ku rubuta ma'anoninsu.",
          youCanNow: "zaɓar ƙididdigar ƙungiya da ba su ma'ana, waɗanda suka dace da yadda ƙungiyarku ke wasa.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne ƙididdiga ne suka dace da ƙungiyar kwallon ƙafa mai riƙe kwallo?", options: ["Fasin da suka cika da harbi daga cikin akwati", "Bugun fanareti na kwallon kwando (free throw)", "Karɓar serve", "Home run"], answer: 0, why: "Ƙididdiga su dace da yadda ƙungiyarku ke son yin wasa." },
            { objective: "O1", q: "Masu sa kai biyu suna ƙirga turnover daban-daban. Me za ku yi?", options: ["Ku ɗauki matsakaicin lambobinsu", "Ku daina bin turnover", "Ku bar kowanne ya ƙirga yadda yake so", "Ku rubuta ma'ana ɗaya a sarari da kowa zai yi amfani da ita"], answer: 3, why: "Ma'ana a sarari tana sa kowa ya ƙirga ta hanya ɗaya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Takardar ƙididdigar ƙungiya da ake rabawa",
          minutes: 5,
          goal: "Shirya Google Sheet da ake rabawa don ƙididdigar ƙungiya, mai damar shiga lafiya.",
          text: [
            "Ku yi amfani da Google Sheet ɗaya mai shafi (tab) ga kowane wasa, ko tebur ɗaya mai tsawo mai ginshiƙai (columns): Kwanan wata, Abokin karawa, Kwata ko Set, 'Yan wasa a fili (lineup), da ƙididdigarku. Shafin taƙaitawa zai iya haɗa jimillar kakar wasa.",
            "Ku raba ta da ma'aikatan horarwa da manajojin da ke buƙatar gyara kaɗai. Ku yi amfani da hanyar haɗi ta kallo kawai (view-only) ga sauran, kuma kada ku taɓa sa takarda mai bayanan 'yan wasa a fili a intanet.",
            "Ku ajiye ƙididdigar wasa kaɗai a wannan takardar. Kada ku saka bayanan lafiya, maki na karatu, bayanan iyali ko na tuntuɓa a takardar ƙididdigar ƙungiya; waɗannan suna cikin tsarin hukuma na makarantarku mai kariyar sirri da ta dace."
          ],
          steps: ["Ku ƙirƙiri Google Sheet mai ginshiƙai a sarari.", "Ku ƙara shafin taƙaitawa don jimillar kakar wasa.", "Ku ba da damar gyara ga ma'aikatan da ke tattarawa kaɗai.", "Ku ba sauran damar kallo kawai; kada ta taɓa zama a fili.", "Ku hana bayanan lafiya, maki da na tuntuɓa shiga."],
          words: [["Takardar da ake rabawa (shared sheet)", "takardar lissafi da mutane da yawa za su iya buɗewa, kuma ku ne kuke iko da wanda zai shiga."], ["Kallo kawai (view-only)", "mutane za su iya gani amma ba za su iya canja ta ba."]],
          slides: [
            { title: "Tsarin takardar", bullets: ["Kwanan wata, Abokin karawa, Lokaci, Lineup", "Ƙididdigarku 3-5", "Shafin taƙaitawa na kakar wasa"] },
            { title: "Damar shiga", bullets: ["Gyara: ma'aikatan da ke tattarawa", "Kallo kawai ga sauran", "Ba a fili ba har abada"] },
            { title: "Kada a saka", bullets: ["Bayanan lafiya", "Maki na karatu da bayanan iyali", "Bayanan tuntuɓa"] }
          ],
          tryIt: "Ku ƙirƙiri takardar ƙididdigar ƙungiyarku, ku shigar da wani wasa da ya wuce daga tunani ko daga takardar sakamako (box score), sannan ku duba saitunan rabawa.",
          youCanNow: "shirya takardar ƙididdigar ƙungiya da ake rabawa mai damar shiga lafiya.",
          quickCheck: [
            { objective: "O2", q: "Me shafin taƙaitawa a takardar ƙungiya yake yi?", options: ["Yana ajiye lambobin wayar 'yan wasa", "Yana haɗa jimillar kakar wasa", "Yana ɓoye bayanan", "Yana aika saƙonni ga 'yan wasa"], answer: 1, why: "Shafin taƙaitawa zai iya haɗa jimillar kakar wasa daga kowane wasa." },
            { objective: "O2", q: "Wani mahaifi yana neman hanyar haɗin takardar ƙididdigar ƙungiya. Me za ku raba?", options: ["Damar gyara", "Hanyar haɗi ta fili a intanet", "Hanyar haɗi ta kallo kawai, idan dokokinku sun yarda", "Dukan babban fayil ɗin tare da bayanan lafiya"], answer: 2, why: "Ku ba da kallo kawai ga waɗanda ba sa tattarawa, kuma kada ku taɓa sa ta a fili." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gano tsarin 'yan wasa da na wasa",
          minutes: 6,
          goal: "Yi amfani da takardarku da mataimakin AI don gano tsarin 'yan wasa ko na wasa ɗaya.",
          text: [
            "Bayan wasanni kaɗan, ku nemi tsare-tsare: Waɗanne haɗin 'yan wasa (lineup) ne ke cin abokan karawa? A wace kwata ko set muke shan wahala? Wane irin wasa ne ke kawo maki mafi yawa?",
            "Ku yi amfani da jerawa (sort), tacewa (filter) ko pivot table a Google Sheets. Ko ku kwafi teburin (da baƙaƙen sunayen 'yan wasa ko lambobinsu maimakon cikakken suna) zuwa mataimakin AI ku tambaya: \"Waɗanne lineup ne ke da mafi kyawun bambancin maki? Wane lokaci ne ya fi rauni? Nuna lissafinka.\" Ku duba lissafinsa da takardar.",
            "Ƙananan bayanai suna ruɗarwa. Lineup da ya yi wasa na minti huɗu bai tabbata ba. Ku ɗauki tsare-tsare a matsayin tambayoyi don atisaye da bidiyo, ba amsoshi na ƙarshe ba, kuma mai horarwa ne ke yanke shawara."
          ],
          steps: ["Ku jera ko ku tace ta lineup da lokaci.", "Ku yi amfani da lambobin 'yan wasa ko baƙaƙen sunayensu, ba cikakken suna ba, da AI.", "Ku nemi AI ya gano tsare-tsare ya nuna lissafinsa.", "Ku duba lissafinsa.", "Ku mayar da tsari ɗaya tambaya don atisaye ko bidiyo."],
          words: [["Bambancin maki (point differential)", "makin da aka ci a cire makin da aka bari aka ci."], ["Pivot table", "kayan aiki a takardar lissafi da ke tara bayanai ya haɗa jimilla, kamar maki ta kowane lineup."], ["Yawan bayanai (sample size)", "yawan bayanan da kuke da su; ƙananan bayanai suna iya ruɗarwa."]],
          slides: [
            { title: "Tambayoyin tsari", bullets: ["Waɗanne lineup ne ke cin abokan karawa?", "Wane lokaci ne ya fi rauni?", "Wane irin wasa ne ya fi kawo maki?"] },
            { title: "Yadda ake gano su", bullets: ["Jerawa, tacewa ko pivot table", "AI da baƙaƙen suna, ba cikakken suna ba", "\"Nuna lissafinka\" sannan ku duba shi"] },
            { title: "Ku yi hankali", bullets: ["Ƙananan bayanai suna ruɗarwa", "Tsare-tsare tambayoyi ne", "Mai horarwa ne ke yanke shawara"] }
          ],
          tryIt: "Ku shigar da aƙalla wasanni biyu a takardarku. Ku nemi mataimakin AI ya gano lokaci ko lineup mafi kyau da mafi muni ya nuna lissafinsa. Ku duba shi, ku rubuta tambaya ɗaya don atisaye.",
          youCanNow: "gano tsarin 'yan wasa da na wasa da ɗaukar su a matsayin tambayoyi ga mai horarwa.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata ku nemi AI ya yi tare da gano tsarin lineup?", options: ["Ya nuna lissafinsa", "Ya zaɓi 'yan wasan farko", "Ya jera 'yan wasa a fili", "Ya yi hasashen wasannin da ba a shigar ba"], answer: 0, why: "Ku nemi AI ya nuna lissafinsa don ku duba shi da takardar." },
            { objective: "O3", q: "Kwata ta uku tana da rauni a kowane wasa zuwa yanzu. Me za ku yi da wannan tsarin?", options: ["Ku zaunar da dukan ƙungiyar a benci", "Ku saka shi a intanet", "Ku yi watsi da shi", "Ku kai shi atisaye da bidiyo a matsayin tambaya ga mai horarwa"], answer: 3, why: "Ku ɗauki tsare-tsare a matsayin tambayoyi don atisaye da bidiyo; mai horarwa ne ke yanke shawara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Bayanan ƙungiya",
        questions: [
          { objective: "O1", q: "Daga ina ya kamata nazarin bayanan ƙungiya ya fara?", options: ["Duk abin da ƙwararru ke bi", "Kowace ƙididdiga mai yiwuwa", "Yanayin wasan ƙungiyarku da yadda kuke son yin wasa", "Lambobin kafofin sada zumunta"], answer: 2, why: "Ƙididdiga su dace da salon wasanku." },
          { objective: "O1", q: "Me yasa ake rubuta ma'ana ga kowace ƙididdiga?", options: ["Don kowa ya ƙirga ta hanya ɗaya", "Don a tsawaita ta", "Don a ruɗa abokan karawa", "Ba a buƙata"], answer: 0, why: "Ƙirgawa ta hanya ɗaya tana sa bayanai su zama abin dogara." },
          { objective: "O2", q: "Wa ya kamata ya sami damar gyara takardar ƙididdigar ƙungiya?", options: ["Kowa a intanet", "Masu horar da abokan karawa", "Magoya baya", "Ma'aikatan da ke tattara ƙididdigar"], answer: 3, why: "Ku iyakance gyara ga mutanen da ke buƙata." },
          { objective: "O2", q: "Wanne ne BAI kamata ya shiga takardar ƙididdigar ƙungiya ba?", options: ["Maki ta kowace kwata", "Bayanan lafiyar wani ɗan wasa", "Turnover", "Lineup"], answer: 1, why: "Bayanan lafiya suna cikin tsarin hukuma mai kariya." },
          { objective: "O3", q: "Wani lineup ya yi wasa na minti huɗu kuma ya sami +6. Ya kamata ku:", options: ["Fara da su a kowane wasa", "Ɗauke shi a matsayin tambayar da za a ƙara dubawa", "Yi watsi da duk bayanai", "Saka shi a intanet"], answer: 1, why: "Ƙananan bayanai suna iya ruɗarwa." }
        ]
      }
    },
    {
      name: "Babi na 2: Binciken abokin karawa da sadarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Binciken abokin karawa da AI",
          minutes: 6,
          goal: "Rubuta taƙaitaccen bincike a shafi ɗaya kan abokin karawa daga bayanan da ke a fili.",
          text: [
            "Bincike (scouting) yana nufin koyon yadda abokin karawa ke wasa kafin ku haɗu da shi. Ku yi amfani da majiyoyi na fili: sakamakon da ya wuce, takardun sakamako (box score) da aka wallafa, shafukan ƙididdigar gasa, da bidiyon wasa da ƙungiyarku ke da shi ko wanda aka saka a fili. Ku bi dokokin gasarku kan musayar bidiyo da bincike.",
            "Ku kalla da tambayoyi uku: Me suka fi yi wajen kai hari? Me suka fi yi wajen tsaro? Su wane ne manyan 'yan wasansu, kuma me waɗannan 'yan wasan suke son yi?",
            "Ku liƙa bayananku a mataimakin AI ku tambaya: \"Ka mayar da waɗannan bayanan bincike taƙaitawa a shafi ɗaya: harinsu, tsaronsu, manyan 'yan wasa, mabuɗai uku na doke su. Gajerun layuka.\" Ku duba cewa kowane batu ya fito daga bayananku ne, ba hasashen AI ba."
          ],
          steps: ["Ku tattara sakamako, ƙididdiga da bidiyon da aka yarda da shi na fili.", "Ku kalla da tambayoyi uku.", "Ku rubuta bayanai tare da lokacin da abin ya faru a bidiyo (timestamp).", "Ku nemi AI taƙaitawa a shafi ɗaya daga bayananku kaɗai.", "Ku duba kowane layi da bayananku."],
          words: [["Rahoton bincike (scouting report)", "taƙaitawar yadda abokin karawa ke wasa da yadda za a doke shi."], ["Ɗabi'ar wasa (tendency)", "wani abu da ƙungiya ko ɗan wasa ke yawan yi a wani yanayi."]],
          slides: [
            { title: "Majiyoyi na fili", bullets: ["Sakamako da box score", "Shafukan ƙididdigar gasa", "Bidiyon wasa da aka yarda da shi"] },
            { title: "Tambayoyi uku", bullets: ["Harinsu", "Tsaronsu", "Manyan 'yan wasa da abin da suke son yi"] },
            { title: "Taƙaitawar AI", bullets: ["Daga bayananku kaɗai", "Mabuɗai uku na doke su", "Ku duba kowane layi"] }
          ],
          tryIt: "Ku zaɓi wani abokin karawa na gaske da ke tafe. Ku tattara bayanai na fili, ku rubuta bayanai da tambayoyi uku, sannan ku yi amfani da AI don yin taƙaitawa a shafi ɗaya. Ku duba kowane layi.",
          youCanNow: "rubuta taƙaitaccen bincike a shafi ɗaya kan abokin karawa daga majiyoyi na fili da taimakon AI.",
          quickCheck: [
            { objective: "O4", q: "Wanne ne ɗaya daga cikin tambayoyin bincike uku?", options: ["Mene ne alamar tambarinsu (mascot)?", "Me suka fi yi wajen kai hari?", "Magoya baya nawa suke da su?", "Wane launi ne rigunansu?"], answer: 1, why: "Ku kalli hari, tsaro da manyan 'yan wasa." },
            { objective: "O4", q: "Kuna son bidiyon wani abokin karawa da ba a fili yake ba. Me za ku yi?", options: ["Ku ɗauki bidiyon atisayensu a ɓoye", "Ku nemi wani abokinku a ƙungiyarsu ya turo muku", "Ku bi dokokin gasarku kan musayar bidiyo", "Ku yi amfani da AI don hasashen abin da suke yi"], answer: 2, why: "Ku bi dokokin gasarku kan musayar bidiyo da bincike." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sadarwa a sarari da ƙungiya",
          minutes: 5,
          goal: "Mayar da bayanai da bincike gajerun saƙonni masu sarari ga ƙungiya.",
          text: [
            "'Yan wasa ba sa buƙatar kowace lamba. Suna buƙatar batutuwa ɗaya zuwa uku a sarari: \"Suna matsa lamba bayan kowane maki da suka ci. Ku jefa kwallo zuwa tsakiya.\" Gajerun saƙonni suna zama a kai.",
            "Ku yi amfani da AI don mayar da taƙaitawarku sigogi daban-daban: magana ta daƙiƙa 30 a ɗakin canja kaya, hoto a shafi ɗaya (slide) don zaman kallon bidiyo, da gajeren saƙo a manhajar sadarwa ta hukuma ta ƙungiya. Ku bi dokokin makarantarku kan yadda masu horarwa ke tuntuɓar 'yan wasa, musamman ƙananan yara.",
            "Ku yaba a gaban jama'a, ku gyara a ɓoye. Saƙonnin ƙungiya suna magana game da ƙungiya, ba kuskuren ɗan wasa ɗaya ba."
          ],
          steps: ["Ku zaɓi manyan batutuwa ɗaya zuwa uku.", "Ku nemi AI magana ta daƙiƙa 30, slide ɗaya da gajeren saƙo.", "Ku aika ta hanyar sadarwa ta hukuma ta ƙungiyarku.", "Ku ajiye ra'ayi ga kowane ɗan wasa a sirri."],
          words: [["Babban batu (key point)", "abu ɗaya da dole 'yan wasa su tuna."], ["Hanyar sadarwa ta hukuma (official channel)", "hanyar sadarwa da makarantarku ko kulob ɗinku ya amince da ita don saƙonnin ƙungiya."]],
          slides: [
            { title: "Kaɗan ya fi yawa", bullets: ["Batutuwa ɗaya zuwa uku", "Gajerun saƙonni suna zama a kai"] },
            { title: "Sigogi uku da AI", bullets: ["Magana ta daƙiƙa 30 a ɗakin canja kaya", "Hoto a slide ɗaya", "Gajeren saƙo ga ƙungiya"] },
            { title: "Girmamawa", bullets: ["Ku yi amfani da hanyoyin hukuma", "Ku yaba a fili, ku gyara a ɓoye"] }
          ],
          tryIt: "Ku ɗauki taƙaitaccen binciken ku, ku yi amfani da AI don yin magana ta daƙiƙa 30 da saƙon ƙungiya mai jimloli uku da bai wuce manyan batutuwa uku ba.",
          youCanNow: "mayar da bayanai gajerun saƙonni masu sarari da ladabi ga ƙungiya.",
          quickCheck: [
            { objective: "O5", q: "Me 'yan wasa ke buƙata daga saƙon ƙungiya?", options: ["Batutuwa ɗaya zuwa uku a sarari", "Kowace lamba a takardar", "Dogon rahoto", "Ƙididdigar sauran ƙungiyoyi"], answer: 0, why: "Gajerun saƙonni masu batutuwa kaɗan a sarari suna zama a kai." },
            { objective: "O5", q: "Wani ɗan wasa yana maimaita kuskure ɗaya. Yaya za ku magance shi?", options: ["Ku faɗe shi a hirar ƙungiya", "Ku saka shi a shafin ƙungiya", "Ku nuna shi a slide na zaman kallon bidiyo", "Ku yi magana da ɗan wasan a ɓoye"], answer: 3, why: "Ku yaba a gaban jama'a, ku gyara a ɓoye." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sirri da adalci a bayanan ƙungiya",
          minutes: 5,
          goal: "Kafa dokokin bayanan ƙungiya da ke kare 'yan wasa da tabbatar da adalci a shawarwari.",
          text: [
            "Bayanan ɗan wasa na sirri ne. Ƙididdiga, bidiyo, musamman bayanan lafiya, na na'urorin da ake sawa a jiki (wearable) da na karatu suna buƙatar kulawa. Ku tattara abin da kuke buƙata kaɗai, ku ajiye shi a wuraren da aka amince da su, kuma ku goge abin da ba ku buƙata kuma bisa dokokin makarantarku.",
            "Kada ku liƙa cikakken suna, bayanan lafiya ko bayanan sirri a kayan AI. Ku yi amfani da lambobi ko baƙaƙen suna. Makarantu da gasanni da yawa suna da dokoki kan bayanan ɗalibai da manhajojin da aka amince da su; ku tambayi daraktan wasanni (athletic director).",
            "Adalci: lambobi suna iya rasa abubuwa kamar ƙoƙari, jagoranci ko tsaron da ba ya bayyana a box score, kuma ƙananan bayanai suna iya zama rashin adalci ga 'yan wasan benci. Ku yi amfani da bayanai don yin tambayoyi mafi kyau, kuma ku bayyana shawarwari ga 'yan wasa a matsayin mutane."
          ],
          steps: ["Ku tattara abin da kuke buƙata kaɗai.", "Ku ajiye shi a wuraren da aka amince da su.", "Ku yi amfani da lambobi ko baƙaƙen suna da AI.", "Ku tambayi daraktan wasanni game da dokokin bayanai da manhajoji.", "Ku bayyana shawarwari ga 'yan wasa a matsayin mutane."],
          words: [["Bayanan ɗalibai (student data)", "bayanai game da ɗalibai, waɗanda dole makarantu su kare su."], ["Son kai (bias)", "rashin adalci da ke iya fitowa daga bayanai marasa cika ko zato."]],
          slides: [
            { title: "Bayanan ɗan wasa na sirri ne", bullets: ["Ku tattara abin da kuke buƙata kaɗai", "Wuraren da aka amince da su kaɗai", "Ku goge abin da ba ku buƙata kuma"] },
            { title: "Tare da AI", bullets: ["Lambobi ko baƙaƙen suna", "Babu bayanan lafiya ko na sirri", "Ku duba dokokin manhajoji na makaranta"] },
            { title: "Adalci", bullets: ["Lambobi suna rasa ƙoƙari da jagoranci", "Ƙananan bayanai suna iya zama rashin adalci", "Ku bayyana shawarwari ga 'yan wasa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta dokokin bayanan ƙungiya guda biyar, sannan ku kammala takardar ƙididdigarku, tsari ɗaya, taƙaitaccen binciken ku a shafi ɗaya da saƙon ƙungiya da ke kare sirrin 'yan wasa.",
          youCanNow: "amfani da bayanan ƙungiya ta hanyar da ke kare 'yan wasa da tabbatar da adalci a shawarwari.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata ku yi da bayanan ɗan wasa da ba ku buƙata kuma?", options: ["Ku ajiye su har abada", "Ku goge su bisa dokokin makarantarku", "Ku raba su da sauran ƙungiyoyi", "Ku saka su a intanet"], answer: 1, why: "Ku tattara abin da kuke buƙata kaɗai, ku goge abin da ba ku buƙata kuma bisa dokokin makarantarku." },
            { objective: "O6", q: "Wani ɗan wasan benci yana da lambobi marasa kyau daga wasan minti shida kawai. Mene ne adalci?", options: ["Ku cire shi daga ƙungiya", "Ku raba ƙididdigarsa da kowa", "Ku kula da ƙananan bayanan a hankali ku yi magana da shi a matsayin mutum", "Kada ku sake sa shi wasa"], answer: 2, why: "Ƙananan bayanai suna iya zama rashin adalci ga 'yan wasan benci; ku bayyana shawarwari ga 'yan wasa a matsayin mutane." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Binciken abokin karawa da sadarwa",
        questions: [
          { objective: "O4", q: "Wace majiya ce ta dace don bincike?", options: ["Ɗaukar bidiyon atisayensu na rufe a ɓoye", "Kutsawa cikin manhajarsu", "Neman kalmomin sirri daga 'yan wasansu", "Box score na fili da bidiyon wasa da aka yarda da shi"], answer: 3, why: "Ku yi amfani da majiyoyi na fili da waɗanda aka yarda da su, kuna bin dokokin gasa." },
          { objective: "O4", q: "AI ya ƙara babban batu da ba ya cikin bayananku. Ku:", options: ["Cire shi ko ku tabbatar da shi da kanku", "Bar shi", "Sa shi a rubutu mai kauri", "Faɗa wa ƙungiya cewa gaskiya ne"], answer: 0, why: "Ku yi amfani da abin da bayananku suka tabbatar kaɗai." },
          { objective: "O5", q: "Manyan batutuwa nawa ya kamata saƙon ƙungiya ya ƙunsa?", options: ["Ashirin", "Babu ko ɗaya", "Ɗaya zuwa uku", "Kowace ƙididdiga"], answer: 2, why: "Gajerun saƙonni suna zama a kai." },
          { objective: "O5", q: "A ina ya kamata a yi gyara ga ɗan wasa ɗaya?", options: ["A hirar ƙungiya", "A kafofin sada zumunta", "A gaban magoya baya", "A ɓoye"], answer: 3, why: "Ku yaba a gaban jama'a, ku gyara a ɓoye." },
          { objective: "O6", q: "Me ya kamata ku liƙa a AI maimakon sunayen 'yan wasa?", options: ["Cikakken suna da ranar haihuwa", "Lambobi ko baƙaƙen suna", "Bayanan lafiya", "Adireshin gida"], answer: 1, why: "Wannan yana kare sirrin 'yan wasa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Wasannin Ƙungiya",
    questions: [
      { objective: "O1", q: "Nazarin bayanan ƙungiya yana nufin:", options: ["Ƙirga magoya baya kawai", "Maye gurbin mai horarwa", "Amfani da lambobi don fahimtar yadda ƙungiya ke wasa da inganta shi", "Sayar da tikiti"], answer: 2, why: "Yana taimakawa wajen yanke shawarwari mafi kyau ga ƙungiya." },
      { objective: "O1", q: "Ƙungiya mai kai hari da sauri ya kamata ta bi:", options: ["Maki daga sauyawa da turnover", "Launukan riguna", "Lokutan bas", "Yawan 'yan kallo"], answer: 0, why: "Waɗannan sun dace da salon kai hari da sauri." },
      { objective: "O1", q: "Ƙididdigar ƙungiya nawa ya kamata ku fara da su?", options: ["Uku zuwa biyar", "Hamsin", "Babu ko ɗaya", "Ɗari"], answer: 0, why: "Ƙididdiga kaɗan da za ku iya tattarawa a kowane wasa." },
      { objective: "O1", q: "Wa zai iya taimakawa wajen tattara ƙididdiga?", options: ["Alƙalin wasa", "Abokin karawa", "Manaja, mai sa kai ko ɗan wasan da ya ji rauni", "Babu kowa"], answer: 2, why: "Ku yi amfani da mutanen da kuke da su." },
      { objective: "O2", q: "Takardar ƙididdigar ƙungiya ya kamata ta kasance:", options: ["A fili a intanet", "Ana raba ta da masu buƙata kaɗai", "Ana tura ta ga abokan karawa ta imel", "An buga ta don magoya baya"], answer: 1, why: "Ku iyakance damar shiga don kare 'yan wasa." },
      { objective: "O2", q: "Damar kallo kawai tana nufin mutane:", options: ["Za su iya goge ta", "Za su iya gyara komai", "Ba za su iya buɗe ta ba", "Za su iya gani amma ba za su canja ta ba"], answer: 3, why: "Tana kare bayananku." },
      { objective: "O3", q: "Bambancin maki shi ne:", options: ["Jimillar maki", "Free throw kawai", "Makin da aka ci a cire makin da aka bari aka ci", "Yawan mabiyanku"], answer: 2, why: "Yana nuna yadda lineup ke yi." },
      { objective: "O3", q: "Pivot table:", options: ["Wani nau'in atisaye ne", "Wani motsin kwallon kwando ne", "Yana goge layuka", "Yana tara bayanai ya haɗa jimilla"], answer: 3, why: "Yana taƙaita bayanai cikin sauri." },
      { objective: "O3", q: "Idan kuna tambayar AI game da lineup, ku kuma nemi ya:", options: ["Nuna lissafinsa", "Zaɓi 'yan wasan farko", "Saka sakamakon a intanet", "Yi hasashe"], answer: 0, why: "Kuna buƙatar duba aikinsa." },
      { objective: "O3", q: "Tsare-tsaren da suka fito daga bayanai sun fi kyau a ɗauke su a matsayin:", options: ["Amsoshi na ƙarshe", "Tambayoyi don atisaye da bidiyo", "Asirai", "Rubuce-rubuce a kafofin sada zumunta"], answer: 1, why: "Bayanai suna taimaka wa hukuncin mai horarwa." },
      { objective: "O4", q: "Rahoton bincike yana taƙaita:", options: ["Ƙididdigarku kaɗai", "Kayan ciye-ciyen ƙungiya", "Yadda abokin karawa ke wasa da yadda za a doke shi", "Sunayen alƙalan wasa"], answer: 2, why: "Yana shirya ƙungiyarku." },
      { objective: "O4", q: "Ɗabi'ar wasa (tendency) ita ce:", options: ["Abin da ƙungiya ke yawan yi a wani yanayi", "Wasa na sau ɗaya", "Doka", "Maki"], answer: 0, why: "Ɗabi'un wasa suna taimakawa wajen hasashen abin da za su yi." },
      { objective: "O4", q: "Bincike ya kamata ya bi:", options: ["Babu dokoki", "Abin da abokin karawa ke so", "Abubuwan da ke tashe a kafofin sada zumunta", "Dokokin gasarku kan bidiyo da bincike"], answer: 3, why: "Gasanni suna kafa dokokin bincike na adalci." },
      { objective: "O4", q: "Taƙaitawar bincike ta AI ya kamata ta fito daga:", options: ["Hasashen AI", "Bayananku kaɗai", "Jita-jita", "Sharhin magoya baya"], answer: 1, why: "Bayananku su ne shaidarku." },
      { objective: "O5", q: "Magana ta daƙiƙa 30 a ɗakin canja kaya ya kamata ta ƙunshi:", options: ["Kowace ƙididdiga", "Manyan batutuwa ɗaya zuwa uku", "Babu batu", "Slide goma"], answer: 1, why: "'Yan wasa suna tuna batutuwa kaɗan a sarari." },
      { objective: "O5", q: "Masu horarwa ya kamata su tuntuɓi 'yan wasa ta:", options: ["Kowace manhaja kawai", "Asusun ɓoye", "Sharhi a fili", "Hanyar da makaranta ko kulob ya amince da ita"], answer: 3, why: "Dokoki suna kare ƙananan yara da masu horarwa." },
      { objective: "O6", q: "Waɗanne bayanai ne suka fi buƙatar kulawa?", options: ["Bayanan lafiya da na karatu", "Sakamakon ƙarshe", "Kwanakin wasa", "Launukan ƙungiya"], answer: 0, why: "Na sirri ne kuma ana kare su." },
      { objective: "O6", q: "Wa zai iya faɗa muku waɗanne manhajoji makarantarku ta yarda da su don bayanan ɗalibai?", options: ["Wani mai goyon baya", "AI", "Daraktan wasanni", "Abokin karawa"], answer: 2, why: "Makarantu ne ke kafa dokokin bayanai." },
      { objective: "O6", q: "Box score yana iya rasa:", options: ["Maki", "Rebound", "Sakamakon ƙarshe", "Ƙoƙari, jagoranci da tsaro ba tare da kwallo ba"], answer: 3, why: "Ba komai ke bayyana a lambobi ba." },
      { objective: "O6", q: "Idan shawara ta yi amfani da bayanai, masu horarwa ya kamata su:", options: ["Ɓoye ta", "Bayyana ta ga 'yan wasa a matsayin mutane", "Ɗora laifi kan takardar lissafi", "Saka ta a fili"], answer: 1, why: "'Yan wasa sun cancanci girmamawa da bayani a sarari." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      4,
      8,
      10,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Takardar ƙididdiga",
        objective: "O2",
        notYet: "Ƙasa da wasanni uku, ƙididdiga marasa sarari, ko rabawa mara lafiya ko bayanan sirri a takardar.",
        meets: "Ƙididdiga uku zuwa biyar masu ma'ana don wasanni ko atisaye uku, shafin taƙaitawa da damar shiga lafiya bisa matsayin kowa.",
        exceeds: "An ɗora wa mutum alhakin kowace ƙididdiga, kuma ma'anonin suna a wani shafi da kowa zai iya karantawa."
      },
      {
        name: "An gano tsari",
        objective: "O3",
        notYet: "Babu tsari, ba a duba lissafin AI ba, ko an yi amfani da cikakken suna da AI.",
        meets: "Tsarin lineup ko na wasa ɗaya da aka duba lissafinsa, da lambobi ko baƙaƙen suna kaɗai.",
        exceeds: "Ya faɗi yawan bayanan, kuma ya mayar da tsarin tambaya don atisaye ko bidiyo ga mai horarwa."
      },
      {
        name: "Taƙaitaccen bincike",
        objective: "O4",
        notYet: "Batutuwan da ba su fito daga bayanai ba, ko majiyoyi da suka saɓa wa dokokin gasa.",
        meets: "Shafi ɗaya mai hari, tsaro, manyan 'yan wasa da mabuɗai uku, kowane batu daga bayanan mai koyo da majiyoyin da aka yarda da su.",
        exceeds: "Ya haɗa da lokutan bidiyo (timestamp) da ke nuna kowane babban batu."
      },
      {
        name: "Saƙon ƙungiya da sirri",
        objective: "O5",
        notYet: "Batutuwa sun yi yawa, ko an raba kuskuren wani ɗan wasa ko bayanan sirrinsa.",
        meets: "Manyan batutuwa ɗaya zuwa uku da aka aika ta hanyar da aka amince da ita, ba tare da bayanan sirrin wani ɗan wasa ba.",
        exceeds: "Sigogi don magana a ɗakin canja kaya, slide da saƙo, duka suna mutunta sirri."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala aikin ƙarshe kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Ƙungiyoyin da har yanzu suke tattara ƙididdigar da suka ba ma'ana bayan kwanaki 30 (binciken biyo baya)",
      "Masu horarwa da suka ce sun canja atisaye ko shirin wasa saboda wani tsari ko taƙaitaccen bincike",
      "Ƙungiyoyin da suka ɗauki dokokin sirrin bayanai a rubuce waɗanda daraktan wasanni ya amince da su"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Asusun Google kyauta don Google Sheets",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Sakamako na fili, box score ko bidiyon da aka yarda da shi na abokin karawa ɗaya",
      "Dokokin makarantarku ko gasarku kan bayanan ɗalibai da manhajojin da aka amince da su",
      "Kusan minti 60 na darussa, da ƙididdiga na wasanni ko atisaye uku"
    ],
    facilitatorNotes: [
      "Ku tambayi daraktan wasanni waɗanne manhajoji aka amince da su don bayanan ɗalibai kafin ƙungiyoyi su shirya takardu.",
      "Ku nuna yadda ake maye gurbin suna da lambobi ko baƙaƙen suna kafin a liƙa komai a AI.",
      "Ku tunatar da ma'aikata cewa bayanan lafiya, na karatu da na tuntuɓa ba sa shiga takardar ƙididdiga har abada.",
      "Ku bi dokokin gasa kan bincike da musayar bidiyo; kada ku ɗauki bidiyon atisayen rufe na wasu ƙungiyoyi.",
      "Ku tattauna adalci: bayanai suna fara tambayoyi, mai horarwa ne ke yanke shawara, kuma ana bayyana shawarwari ga 'yan wasa a matsayin mutane."
    ]
  }
};
