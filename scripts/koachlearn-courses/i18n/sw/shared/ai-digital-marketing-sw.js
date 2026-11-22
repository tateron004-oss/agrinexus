"use strict";

// Koach Learn course (Swahili translation of shared/ai-digital-marketing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-digital-marketing-sw",
  lang: "sw",
  translationOf: "ai-digital-marketing",
  category: "Veterans (military)",
  name: "Masoko ya Kidijitali kwa Msaada wa AI",
  skills: "Kumtambua mteja lengwa, Kuandika machapisho kwa AI, Kutengeneza picha kwenye Canva, Kuandika barua pepe ya masoko inayofuata sheria, Kutangaza matangazo kwa uaminifu, Kusoma matokeo",
  outcome: "kupanga na kutengeneza masoko ya kidijitali ya wiki moja kwa biashara ndogo kwa msaada wa AI: maelezo ya mteja lengwa, machapisho matano ya mitandao ya kijamii yenye picha, barua pepe moja ya masoko inayofuata sheria za CAN-SPAM, na njia rahisi ya kupima kilichofanya kazi.",
  about: [
    "Masoko ya kidijitali ni kuwafikia wateja mtandaoni: mitandao ya kijamii, barua pepe, tovuti na utafutaji. Zana za AI zinaweza kuandika rasimu za machapisho, kupendekeza mawazo na kusaidia kutengeneza picha kwa dakika chache, ili biashara ya mtu mmoja ifanye masoko kama biashara kubwa.",
    "Kozi hii ni kwa wanajeshi wastaafu (veterans) wanaoanzisha biashara au wanaotafuta kazi ya masoko, watafuta kazi wanaojenga ujuzi unaouzika, na wanajamii wanaotangaza duka, kibanda cha chakula, kanisa au huduma ya mtaani. Unahitaji simu au kompyuta na zana za bure kama ChatGPT, Microsoft Copilot au Google Gemini, na Canva.",
    "Utajenga mpango halisi wa masoko wa wiki moja kwa biashara utakayochagua. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Kwa biashara ndogo halisi au ya mazoezi, andaa kifurushi cha masoko cha wiki moja: aya moja ya maelezo ya mteja lengwa, machapisho matano yenye maelezo (captions) na picha za Canva zilizokaguliwa usahihi wake, barua pepe moja ya masoko yenye kichwa kilicho wazi, anwani ya mahali halisi na njia ya kujiondoa, na jedwali la ufuatiliaji linaloonyesha namba utakayoifuatilia kwa kila chapisho.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu (veterans) na wenzi wa wanajeshi wanaomiliki au wanaoanzisha biashara ndogo, kama huduma, ufundi, chakula au duka la mtandaoni, na wanataka wateja zaidi bila kuajiri kampuni ya masoko.",
    startingPoint: "Wanatumia mitandao ya kijamii na barua pepe kwa mambo yao binafsi na huenda wana ukurasa wa biashara. Wengi wanachapisha bila mpango, hawajatumia AI au Canva kwa masoko, na hawajui sheria za barua pepe na matangazo.",
    gap: "Biashara ndogo zinasimama au zinaanguka kutokana na wateja wa kudumu, na masoko ya mtandaoni yanachukua muda ambao wamiliki hawana. Wanafunzi wanahitaji kupanga na kutengeneza masoko ya wiki moja yaliyo ya kweli na yanayomlenga mteja sahihi kwa msaada wa AI, kufuata sheria za CAN-SPAM na FTC, na kupima matokeo ili juhudi zao ziwe miadi na mauzo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; maneno ya masoko yanaelezwa mara ya kwanza",
      "Vifaa: simu au kompyuta; kompyuta ni rahisi zaidi kwa Canva na majedwali",
      "Gharama: zana za bure tu (msaidizi wa AI, mpango wa bure wa Canva, Google Sheets au Excel)",
      "Sheria: sheria ya CAN-SPAM na mwongozo wa FTC za Marekani zinahusika; wanafunzi walio nje ya Marekani wakague sheria za nchi yao",
      "Faragha: hakuna majina ya wateja wala namba au anwani zao zinazowekwa kwenye zana za AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa biashara ndogo halisi au ya mazoezi", action: "kuandika maelezo ya mteja lengwa na ujumbe wa masoko wa sentensi moja", standard: "ukisema mteja ni nani, anahitaji nini, na unatoa nini, kwa ajili ya nani na kwa nini akuchague wewe" },
    { id: "O2", condition: "Ukitumia msaidizi wa AI na maelezo ya mteja wako", action: "kuandika machapisho matano ya mitandao ya kijamii ya aina tofauti, kila moja na wito wa kuchukua hatua", standard: "kila ukweli, bei na tarehe ikiwa imekaguliwa na bila madai usiyoweza kuthibitisha" },
    { id: "O3", condition: "Ukitumia mpango wa bure wa Canva", action: "kutengeneza picha inayofuata chapa yako kwa kila chapisho", standard: "ukitumia rangi na mitindo ya herufi zile zile, maneno machache na picha tu ambazo una haki ya kuzitumia" },
    { id: "O4", condition: "Ukipewa ofa kwa wateja wa zamani", action: "kuandika barua pepe ya masoko inayotimiza masharti makuu ya CAN-SPAM", standard: "yenye kichwa cha kweli, anwani ya mahali halisi na njia iliyo wazi ya kujiondoa" },
    { id: "O5", condition: "Ukipewa tangazo, maoni ya mteja au maudhui yaliyotengenezwa na AI", action: "kutambua wakati tangazo linahitaji kuwekwa wazi na kuhakikisha maoni na ushuhuda wa wateja ni wa kweli", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O6", condition: "Baada ya wiki moja ya machapisho", action: "kuchagua namba moja ya kufuatilia kwa kila chapisho na kutumia matokeo kupanga wiki ijayo", standard: "ukiwa na jedwali la ufuatiliaji lenye namba lengwa na matokeo kwa kila chapisho" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga na kutengeneza maudhui",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kumjua mteja wako na ujumbe wako",
          minutes: 5,
          goal: "Andika maelezo ya mteja lengwa na ujumbe mmoja ulio wazi kwa biashara.",
          text: [
            "Masoko yanafanya kazi yanapozungumza na mtu fulani hasa. Maelezo ya mteja lengwa yanamwelezea mteja wako bora: yeye ni nani, anahitaji nini, kinachomtia wasiwasi na anatumia muda wapi mtandaoni.",
            "Kisha andika ujumbe mmoja ulio wazi: unatoa nini, ni kwa ajili ya nani na kwa nini wakuchague wewe. Mfano: \"Huduma ya kuosha magari inayomilikiwa na mwanajeshi mstaafu, inakuja hadi nyumbani kwako Fayetteville. Weka miadi kwa dakika mbili.\"",
            "AI inaweza kukusaidia kupata mawazo. Uliza: \"Nina biashara ya kuosha magari inayomfuata mteja. Eleza aina tatu za wateja wanaowezekana na kile ambacho kila mmoja anajali.\" Chagua aina inayolingana na wateja ulio nao kweli au unaowataka, na uirekebishe kwa unachokijua."
          ],
          steps: ["Taja jina la biashara na kile inachouza.", "Mwombe msaidizi wa AI apendekeze aina tatu za wateja.", "Chagua moja na uandike maelezo mafupi: ni nani, mahitaji, wasiwasi, yuko wapi mtandaoni.", "Andika ujumbe wa sentensi moja: nini, kwa ajili ya nani, kwa nini wewe."],
          words: [["Mteja lengwa", "aina maalum ya mtu ambaye masoko yako yanamlenga."], ["Maelezo (profile)", "maelezo mafupi ya mtu au kikundi."], ["Ujumbe", "jambo kuu unalotaka wateja walijue na kulikumbuka."]],
          slides: [
            { title: "Zungumza na mtu mmoja", bullets: ["Yeye ni nani na anahitaji nini", "Kinachomtia wasiwasi", "Anatumia muda wapi mtandaoni"] },
            { title: "Ujumbe mmoja ulio wazi", bullets: ["Unatoa nini", "Ni kwa ajili ya nani", "Kwa nini wakuchague wewe"] },
            { title: "Tumia AI kupata mawazo", bullets: ["Omba aina tatu za wateja", "Chagua moja, kisha irekebishe kwa unachokijua"] }
          ],
          tryIt: "Chagua biashara halisi au ya mazoezi. Tumia msaidizi wa AI kupata mawazo ya aina za wateja, kisha andika aya moja ya maelezo ya mteja lengwa na ujumbe wa sentensi moja.",
          youCanNow: "kuandika maelezo ya mteja lengwa na ujumbe wa masoko ulio wazi.",
          quickCheck: [
            { objective: "O1", q: "Maelezo ya mteja lengwa yanaeleza nini?", options: ["Kila mtu anayetumia intaneti", "Mteja wako bora: yeye ni nani, anahitaji nini, kinachomtia wasiwasi na yuko wapi mtandaoni", "Bei zako za mwaka mzima", "Nembo za washindani wako"], answer: 1, why: "Maelezo yanaeleza aina moja maalum ya mteja ili masoko yako yazungumze naye." },
            { objective: "O1", q: "AI inapendekeza aina tatu za wateja kwa biashara yako ya bustani. Ni moja tu inayolingana na wanaokupigia simu kweli. Utafanya nini?", options: ["Tumia zote tatu katika kila chapisho", "Chagua ile inayovutia zaidi", "Puuza AI na usichapishe chochote", "Chagua inayolingana na wateja halisi na uirekebishe kwa unachokijua"], answer: 3, why: "Chagua aina inayolingana na wateja wako halisi au unaowataka na uongeze unachokijua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika machapisho ya mitandao ya kijamii kwa AI",
          minutes: 5,
          goal: "Tumia AI kuandika rasimu za machapisho matano, kisha uyarekebishe yawe sahihi na yasikike kama wewe.",
          text: [
            "Machapisho mazuri yanafundisha, yanaonyesha au yanakaribisha. Changanya: kidokezo (\"Njia 3 za kuweka ndani ya gari lako safi\"), picha ya nyuma ya pazia, hadithi ya mteja (kwa ruhusa yake), ofa, na swali linalokaribisha maoni.",
            "Ipe AI maelezo ya mteja wako na ujumbe wako, kisha uliza: \"Andika machapisho matano mafupi ya Instagram na Facebook kwa mteja huyu. Kidokezo kimoja, nyuma ya pazia moja, hadithi ya mteja moja, ofa moja, swali moja. Sauti ya kirafiki, chini ya maneno 60 kila moja, na wito wa kuchukua hatua.\"",
            "Rekebisha kila wakati. Kagua kila ukweli, bei na tarehe. Ondoa madai usiyoweza kuthibitisha, kama \"bora zaidi katika jimbo\". Yafanye yasikike kama wewe, na usichapishe kamwe maoni ya mteja au matokeo ambayo hayakutokea."
          ],
          steps: ["Bandika maelezo ya mteja wako na ujumbe wako kwenye msaidizi wa AI.", "Omba machapisho matano ya aina tofauti yenye wito wa kuchukua hatua.", "Kagua kila ukweli, bei na tarehe.", "Ondoa madai usiyoweza kuthibitisha.", "Yaandike upya kwa sauti yako mwenyewe."],
          words: [["Wito wa kuchukua hatua", "hatua unayotaka msomaji achukue, kama \"Weka miadi sasa\" au \"Piga simu leo\"."], ["Maelezo ya picha (caption)", "maandishi yanayoambatana na picha au video kwenye mitandao ya kijamii."]],
          slides: [
            { title: "Changanya machapisho yako", bullets: ["Kidokezo na mtazamo wa nyuma ya pazia", "Hadithi ya mteja (kwa ruhusa yake)", "Ofa na swali"] },
            { title: "Ombi zuri kwa AI", bullets: ["Weka maelezo ya mteja na ujumbe wako", "Omba aina tano, chini ya maneno 60", "Omba wito wa kuchukua hatua"] },
            { title: "Rekebisha kila wakati", bullets: ["Kagua ukweli, bei na tarehe", "Ondoa madai usiyoweza kuthibitisha", "Yafanye yasikike kama wewe"] }
          ],
          tryIt: "Mwombe msaidizi wa AI aandike rasimu za machapisho matano kwa biashara yako ukitumia mfano wa ombi hapo juu. Rekebisha kila moja kwa ukweli na sauti, na uweke alama kwenye ulichobadilisha.",
          youCanNow: "kuandika rasimu za machapisho kwa AI na kuyarekebisha yawe sahihi, ya kweli na kwa sauti yako.",
          quickCheck: [
            { objective: "O2", q: "Ni chapisho lipi la \"nyuma ya pazia\"?", options: ["Picha ya timu yako ikijiandaa kwa kazi", "Kuponi ya punguzo la 20%", "Swali linalowauliza wafuasi rangi wanayoipenda", "Maoni ya mteja"], answer: 0, why: "Machapisho ya nyuma ya pazia yanaonyesha jinsi kazi yako inavyofanyika." },
            { objective: "O2", q: "Chapisho lililoandikwa na AI linaonyesha bei uliyoibadilisha mwezi uliopita. Utafanya nini?", options: ["Lichapishe; wateja watauliza", "Futa chapisho lote", "Rekebisha bei kabla ya kuchapisha", "Ongeza \"bei zinaweza kubadilika\" na ulichapishe"], answer: 2, why: "Kagua na urekebishe kila ukweli, bei na tarehe kabla ya kuchapisha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza picha kwa Canva na AI",
          minutes: 5,
          goal: "Tengeneza picha safi inayofuata chapa yako kwa kila chapisho ukitumia zana ya bure ya usanifu.",
          text: [
            "Canva ina mpango wa bure wenye violezo vya ukubwa unaofaa kila mtandao wa kijamii. Tafuta aina ya chapisho unayohitaji, kama \"Instagram post\", chagua kiolezo na ubadilishe maneno na picha.",
            "Weka chapa rahisi: rangi zile zile mbili au tatu, mtindo mmoja au miwili wa herufi, na nembo yako au jina la biashara kwenye kila picha. Tumia maneno machache kwenye picha; maelezo ya picha (caption) yanabeba undani.",
            "Tumia picha zako mwenyewe unapoweza; picha halisi za kazi yako zinajenga imani. Ukitumia picha zilizotengenezwa na AI, usizifanye zionekane kama wateja halisi au matokeo ambayo hukuyatoa, na tumia tu picha ambazo una haki ya kuzitumia."
          ],
          steps: ["Fungua Canva na utafute ukubwa wa kiolezo unaohitaji.", "Chagua kiolezo na ubadilishe rangi ziwe rangi za chapa yako.", "Badilisha maandishi yawe kichwa kifupi.", "Ongeza picha yako mwenyewe au picha yenye leseni sahihi.", "Ipakue na uihifadhi kwa jina la chapisho."],
          words: [["Kiolezo (template)", "usanifu ulio tayari ambao unaubadilisha ufae mahitaji yako."], ["Chapa (brand)", "mwonekano na hisia vinavyofanya biashara yako itambulike."], ["Leseni", "ruhusa ya kutumia picha au kazi nyingine."]],
          slides: [
            { title: "Misingi ya Canva", bullets: ["Mpango wa bure wenye violezo vya ukubwa wa mitandao", "Chagua kiolezo, badilisha maneno na picha"] },
            { title: "Chapa rahisi", bullets: ["Rangi zile zile mbili au tatu", "Mtindo mmoja au miwili wa herufi", "Jina lako au nembo kwenye kila picha"] },
            { title: "Picha za kweli", bullets: ["Picha zako mwenyewe zinajenga imani", "Hakuna wateja au matokeo ya uongo", "Picha tu ambazo una haki ya kuzitumia"] }
          ],
          sources: [{ name: "Canva", url: "https://www.canva.com/" }],
          tryIt: "Tengeneza picha ya Canva kwa kila moja ya machapisho yako matano ukitumia rangi na mitindo ya herufi zile zile. Tumia angalau picha moja halisi ya kazi au bidhaa yako.",
          youCanNow: "kutengeneza picha zinazolingana na za kweli kwa machapisho ya mitandao ya kijamii ukitumia zana ya bure ya usanifu.",
          quickCheck: [
            { objective: "O3", q: "Undani mwingi wa chapisho unapaswa kuwekwa wapi?", options: ["Kujazwa kwenye picha", "Kwa herufi ndogo sana chini ya picha", "Kwenye picha ya pili", "Kwenye maelezo ya picha (caption), na maneno machache kwenye picha"], answer: 3, why: "Weka maneno machache kwenye picha; maelezo ya picha yanabeba undani." },
            { objective: "O3", q: "Unataka picha ya mteja mwenye furaha, lakini huna. Chaguo la kweli ni lipi?", options: ["Tumia picha ya AI iliyotengenezwa ionekane kama mteja halisi", "Tumia picha ya kazi yako mwenyewe au picha yenye leseni sahihi", "Nakili picha kutoka tovuti ya kampuni nyingine", "Tumia picha ya mtu usiyemjua kutoka mitandao ya kijamii"], answer: 1, why: "Tumia picha zako mwenyewe au picha ambazo una haki ya kuzitumia, na usibuni wateja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga na kutengeneza maudhui",
        questions: [
          { objective: "O1", q: "Maelezo ya mteja lengwa ni nini?", options: ["Taarifa ya akaunti yako ya benki", "Orodha ya washindani", "Maelezo ya aina maalum ya mtu ambaye masoko yako yanamlenga", "Nywila ya mitandao ya kijamii"], answer: 2, why: "Masoko yanafanya kazi vizuri zaidi yanapozungumza na mtu fulani hasa." },
          { objective: "O1", q: "Ujumbe wa masoko ulio wazi zaidi ni upi?", options: ["\"Huduma ya kuosha magari inayomilikiwa na mwanajeshi mstaafu, inakuja hadi nyumbani kwako Fayetteville. Weka miadi kwa dakika mbili.\"", "\"Tunafanya mambo.\"", "\"Bora kuliko wote!!!\"", "\"Tupigie labda.\""], answer: 0, why: "Unasema nini, kwa ajili ya nani na kwa nini, pamoja na hatua inayofuata." },
          { objective: "O2", q: "AI inaandika \"Tulichaguliwa kuwa waoshaji bora wa magari katika jimbo\" lakini hilo halijawahi kutokea. Utafanya nini?", options: ["Lichapishe hata hivyo", "Lifanye kubwa zaidi", "Ongeza picha ya tuzo ya uongo", "Ondoa dai hilo"], answer: 3, why: "Usichapishe kamwe madai usiyoweza kuthibitisha." },
          { objective: "O2", q: "Wito wa kuchukua hatua ni nini?", options: ["Mlio wa simu", "Hatua unayotaka msomaji achukue, kama \"Weka miadi sasa\"", "Tangazo la kisheria", "Aina ya mtindo wa herufi"], answer: 1, why: "Unamwambia msomaji afanye nini baadaye." },
          { objective: "O3", q: "Nini kinajenga imani zaidi kwenye picha?", options: ["Picha za AI za wateja wa uongo wenye furaha", "Picha halisi za kazi yako mwenyewe", "Picha zilizonakiliwa kutoka kwa mshindani", "Kutokuwa na picha kabisa"], answer: 1, why: "Picha halisi za kazi halisi ni za kweli na zinashawishi." }
        ]
      }
    },
    {
      name: "Sura 2: Barua pepe, sheria za uaminifu na matokeo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika barua pepe ya masoko inayofuata sheria",
          minutes: 6,
          goal: "Andika rasimu ya barua pepe ya masoko kwa AI inayotimiza masharti makuu ya CAN-SPAM ya Marekani.",
          text: [
            "Barua pepe inawafikia watu ambao tayari walichagua kusikia kutoka kwako, kwa hiyo mara nyingi inauza vizuri kuliko mitandao ya kijamii. Tuma barua pepe tu kwa watu waliokupa anwani yao na kukubali kusikia kutoka kwako.",
            "Nchini Marekani, sheria ya CAN-SPAM Act inaweka kanuni za barua pepe za biashara. Kwa mujibu wa Federal Trade Commission (FTC, tume ya serikali ya biashara), hupaswi kutumia taarifa za mtumaji au vichwa vya uongo au vinavyopotosha, lazima uonyeshe kuwa ujumbe ni tangazo, uweke anwani yako halali ya posta ya mahali halisi, utoe njia iliyo wazi ya kujiondoa, na utekeleze maombi ya kujiondoa ndani ya siku 10 za kazi. Unabaki kuwajibika hata kama mtu mwingine anaituma kwa niaba yako.",
            "Iombe AI rasimu: \"Andika barua pepe fupi ya masoko kwa [biashara] inayotoa [ofa] kwa wateja wa zamani. Kichwa cha kweli, sauti ya kirafiki, wito mmoja wa kuchukua hatua.\" Kisha ongeza anwani yako na kiungo cha kujiondoa, na ukague ukweli. Nje ya Marekani, kagua sheria za barua pepe na faragha za nchi yako."
          ],
          steps: ["Iombe AI barua pepe fupi yenye kichwa cha kweli na wito mmoja wa kuchukua hatua.", "Kagua kila ukweli, bei na tarehe.", "Weka wazi kuwa hili ni tangazo au ofa.", "Ongeza anwani yako halali ya posta ya mahali halisi.", "Ongeza njia iliyo wazi ya kujiondoa na utekeleze maombi ndani ya siku 10 za kazi."],
          words: [["CAN-SPAM Act", "sheria ya Marekani inayoweka kanuni za barua pepe za biashara."], ["Kujiondoa (opt out / unsubscribe)", "njia ya watu kuacha kupokea barua pepe zako."], ["Kichwa cha barua pepe (subject line)", "jina fupi ambalo watu wanaliona kabla ya kufungua barua pepe."]],
          slides: [
            { title: "Tuma kwa watu sahihi", bullets: ["Watu tu waliokubali kusikia kutoka kwako"] },
            { title: "Misingi ya CAN-SPAM (FTC)", bullets: ["Taarifa za mtumaji na kichwa vya kweli", "Onyesha kuwa ni tangazo", "Weka anwani yako ya posta ya mahali halisi"] },
            { title: "Kanuni za kujiondoa", bullets: ["Njia iliyo wazi ya kujiondoa", "Itekeleze ndani ya siku 10 za kazi", "Unawajibika hata kama kampuni nyingine inaituma"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Tumia AI kuandika rasimu ya barua pepe ya masoko kwa biashara yako. Irekebishe, kisha uikague dhidi ya orodha ya CAN-SPAM: kichwa cha kweli, imeonyeshwa kuwa ni tangazo, anwani ya mahali halisi, njia ya kujiondoa.",
          youCanNow: "kuandika barua pepe ya masoko kwa msaada wa AI inayotimiza kanuni kuu za CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Nani anapaswa kuwa kwenye orodha yako ya barua pepe za masoko?", options: ["Yeyote ambaye unaweza kupata barua pepe yake", "Anwani za barua pepe ulizonunua mtandaoni", "Watu waliokupa anwani yao na kukubali kusikia kutoka kwako", "Kila biashara katika mji wako"], answer: 2, why: "Tuma barua pepe tu kwa watu waliokupa anwani yao na kukubali kusikia kutoka kwako." },
            { objective: "O4", q: "Rasimu yako ya AI ina ofa nzuri lakini haina anwani wala kiungo cha kujiondoa. Utafanya nini kabla ya kutuma?", options: ["Ongeza anwani yako halali ya posta ya mahali halisi na njia iliyo wazi ya kujiondoa", "Ituma; hayo si lazima", "Ongeza namba yako ya simu tu", "Ituma kutoka akaunti ya rafiki badala yake"], answer: 0, why: "CAN-SPAM inataka anwani halali ya posta ya mahali halisi na njia iliyo wazi ya kujiondoa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Masoko ya kweli: kuweka wazi, maoni ya wateja na AI",
          minutes: 5,
          goal: "Tambua wakati tangazo linahitaji kuwekwa wazi na uhakikishe maoni ya wateja na maudhui ya AI ni ya kweli.",
          text: [
            "Miongozo ya FTC kuhusu Uidhinishaji (Endorsement Guides) inasema kwamba ikiwa mtu anayetangaza bidhaa ana uhusiano na kampuni hiyo, kama kulipwa au kupewa bidhaa bure, lazima uhusiano huo uwekwe wazi. FTC inapendekeza maneno rahisi kama \"Ad:\" au \"#ad\" mwanzoni, au \"Paid post by [brand]\" (chapisho lililolipiwa na [kampuni]).",
            "Maoni ya uongo ya wateja ni udanganyifu. Usiandike kamwe maoni kuhusu biashara yako mwenyewe, usilipie maoni ya uongo wala usiiache AI iyatengeneze. Badala yake, waombe wateja halisi watoe maoni ya kweli.",
            "Kuwa mwangalifu na maudhui yaliyotengenezwa na AI: usitumie AI kuiga mtu halisi, kubuni ushuhuda au kudai matokeo usiyoweza kuthibitisha. Sheria zinabadilika, kwa hiyo kagua kurasa za mwongozo wa biashara wa FTC kupata undani wa sasa."
          ],
          words: [["Uidhinishaji (endorsement)", "ujumbe ambao mtu anasema anapenda au anatumia bidhaa."], ["Kuweka wazi (disclosure)", "kauli iliyo wazi ya uhusiano, kama \"#ad\" au \"Paid post\"."], ["Ushuhuda (testimonial)", "maneno ya mteja kuhusu uzoefu wake."]],
          slides: [
            { title: "Weka wazi uhusiano", bullets: ["Umelipwa au umepewa bidhaa bure? Sema hivyo", "\"Ad:\" au \"#ad\" mwanzoni", "\"Paid post by [brand]\""] },
            { title: "Maoni lazima yawe ya kweli", bullets: ["Hakuna maoni ya uongo au yaliyoandikwa na AI", "Waombe wateja halisi watoe maoni ya kweli"] },
            { title: "Kanuni za msingi za maudhui ya AI", bullets: ["Usiige watu halisi", "Usibuni ushuhuda au matokeo", "Kagua mwongozo wa FTC kwa mabadiliko"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Pitia machapisho yako matano na barua pepe yako. Weka alama kwenye yoyote ambayo ingehitaji kuweka wazi (kwa mfano, mshirika alikulipa au rafiki anaitangaza kwa sababu alipewa bidhaa bure), na uondoe dai au maoni yoyote ambayo si ya kweli.",
          youCanNow: "kutambua wakati masoko yanahitaji kuweka wazi uhusiano na kuhakikisha maoni ya wateja na maudhui ya AI ni ya kweli.",
          quickCheck: [
            { objective: "O5", q: "Ni lini mtu anayetangaza bidhaa yako lazima aweke wazi?", options: ["Tu ikiwa ana wafuasi zaidi ya 10,000", "Anapokuwa na uhusiano na kampuni yako, kama kulipwa au kupewa bidhaa bure", "Kamwe, ikiwa maoni ni mazuri", "Kwenye barua pepe tu"], answer: 1, why: "FTC inasema uhusiano kama malipo au bidhaa ya bure lazima uwekwe wazi." },
            { objective: "O5", q: "Duka lako lina maoni machache. Rafiki anajitolea kuiacha AI iandike maoni ishirini ya nyota tano. Utafanya nini?", options: ["Kubali, kwa sababu AI ndiyo iliyoandika, si wewe", "Chapisha kumi tu kati yake", "Lipa huduma iyachapishe badala yake", "Kataa na uwaombe wateja halisi watoe maoni ya kweli"], answer: 3, why: "Maoni ya uongo ni udanganyifu; waombe wateja halisi badala yake." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima kinachofanya kazi na kuboresha",
          minutes: 5,
          goal: "Chagua namba ya kufuatilia kwa kila chapisho na utumie matokeo kupanga wiki ijayo.",
          text: [
            "Kila mtandao wa kijamii na zana ya barua pepe inaonyesha namba za msingi. Ufikiaji (reach) ni watu wangapi waliliona. Ushiriki (engagement) ni kupenda (likes), maoni, kushiriki na kuhifadhi. Mibofyo (clicks) inaonyesha nani alienda kwenye kiungo chako. Mabadiliko kuwa wateja (conversions) ndilo lengo halisi: miadi, simu, mauzo au usajili.",
            "Chagua namba moja kuu kwa kila chapisho kulingana na kazi yake: chapisho la kidokezo linalenga kuhifadhiwa na kushirikiwa, ofa inalenga mibofyo na miadi. Ziandike kwenye jedwali rahisi la ufuatiliaji katika Google Sheets au Excel.",
            "Baada ya wiki moja, angalia kilichofanya vizuri zaidi na ufanye zaidi ya hicho. Unaweza kubandika namba zako (bila majina ya wateja) kwenye msaidizi wa AI na kuuliza: \"Machapisho yapi yalifanya vizuri zaidi na nijaribu nini wiki ijayo?\" Wewe ndiye unayefanya uamuzi wa mwisho."
          ],
          steps: ["Tengeneza jedwali lenye safu: tarehe, chapisho, aina, namba lengwa, matokeo.", "Chagua namba lengwa moja kwa kila chapisho.", "Baada ya wiki moja, jaza matokeo kutoka takwimu (insights) za mtandao.", "Iombe AI itambue mwelekeo, ukitumia namba tu.", "Panga wiki ijayo: zaidi ya kilichofanya kazi."],
          words: [["Ufikiaji (reach)", "watu wangapi waliona chapisho lako."], ["Ushiriki (engagement)", "kupenda (likes), maoni, kushiriki na kuhifadhi."], ["Kuwa mteja (conversion)", "mtu anapochukua hatua unayotaka, kama kuweka miadi au kununua."]],
          slides: [
            { title: "Namba za kujua", bullets: ["Ufikiaji: wangapi waliliona", "Ushiriki: kupenda, maoni, kushiriki", "Mibofyo na kuwa wateja"] },
            { title: "Lengo moja kwa kila chapisho", bullets: ["Chapisho la kidokezo: kuhifadhiwa na kushirikiwa", "Chapisho la ofa: mibofyo na miadi"] },
            { title: "Jifunze na urekebishe", bullets: ["Fuatilia katika jedwali rahisi", "Iombe AI itambue mwelekeo, namba tu", "Fanya zaidi ya kilichofanya kazi"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza jedwali la ufuatiliaji kwa machapisho yako matano na barua pepe yako, kila moja na namba lengwa moja. Pamoja na maelezo ya mteja, machapisho, picha na barua pepe, hili linakamilisha kifurushi chako cha masoko cha wiki moja.",
          youCanNow: "kupanga, kutengeneza, kukagua na kupima masoko ya kidijitali ya wiki moja kwa msaada wa AI.",
          quickCheck: [
            { objective: "O6", q: "Ushiriki (engagement) ni nini?", options: ["Kupenda, maoni, kushiriki na kuhifadhi", "Watu wangapi waliona chapisho", "Gharama ya chapisho", "Idadi ya wafuasi uliyoanza nayo"], answer: 0, why: "Ushiriki unahesabu jinsi watu wanavyoshughulika na chapisho; ufikiaji ni wangapi waliliona." },
            { objective: "O6", q: "Machapisho yako ya vidokezo yalihifadhiwa zaidi wiki hii, lakini ofa zilipata mibofyo michache. Hatua ya busara inayofuata ni ipi?", options: ["Acha kuchapisha kwa mwezi mmoja", "Futa machapisho ya vidokezo", "Panga machapisho zaidi ya vidokezo na ujaribu ofa mpya wiki ijayo", "Chapisha ofa ile ile mara tano"], answer: 2, why: "Fanya zaidi ya kilichofanya kazi na urekebishe kisichofanya kazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Barua pepe, sheria za uaminifu na matokeo",
        questions: [
          { objective: "O4", q: "Chini ya CAN-SPAM, barua pepe ya masoko ya Marekani lazima iwe na nini?", options: ["Namba ya Social Security ya mteja", "Kichwa cha uongo cha dharura", "Bila jina la mtumaji", "Anwani halali ya posta ya mahali halisi na njia ya kujiondoa"], answer: 3, why: "FTC inataja anwani ya mahali halisi na njia ya kujiondoa miongoni mwa masharti." },
          { objective: "O4", q: "Kwa mujibu wa FTC, chini ya CAN-SPAM lazima utekeleze ombi la kujiondoa kwa haraka kiasi gani?", options: ["Ndani ya siku 10 za kazi", "Ndani ya mwaka mmoja", "Kamwe", "Tu wakikupigia simu"], answer: 0, why: "Mwongozo wa FTC unasema maombi ya kujiondoa lazima yatekelezwe ndani ya siku 10 za kazi." },
          { objective: "O5", q: "Rafiki alipata bidhaa bure kutoka kwako na anaichapisha. Chapisho lake linapaswa kuwa na nini?", options: ["Hakuna kitu", "Maoni ya uongo ya nyota tano", "Kuweka wazi kunakoeleweka kama \"#ad\" au \"Gifted\" (zawadi)", "Taarifa za benki yako"], answer: 2, why: "Uhusiano kama bidhaa za bure lazima uwekwe wazi." },
          { objective: "O5", q: "Lipi ni masoko ya kweli?", options: ["Kuiacha AI iandike maoni ya wateja", "Kulipia maoni ya uongo", "Kuipa biashara yako maoni kwa majina ya uongo", "Kuwaomba wateja halisi watoe maoni ya kweli"], answer: 3, why: "Maoni halisi tu kutoka kwa wateja halisi ndiyo ya kweli." },
          { objective: "O6", q: "Kuwa mteja (conversion) ni nini?", options: ["Kubadilisha ukubwa wa picha", "Aina ya mtindo wa herufi", "Mtu anapochukua hatua unayotaka, kama kuweka miadi", "Kuzima maoni"], answer: 2, why: "Kuwa wateja ndilo lengo halisi la biashara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Masoko ya Kidijitali kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Masoko ya kidijitali yanamaanisha:", options: ["Kuchapisha vipeperushi tu", "Kuwafikia wateja mtandaoni", "Kuuza nyumba kwa nyumba", "Kuendesha mashine ya kupokea pesa"], answer: 1, why: "Yanatumia mitandao ya kijamii, barua pepe, tovuti na utafutaji." },
      { objective: "O1", q: "Kwa nini uandike maelezo ya mteja lengwa?", options: ["Ili masoko yako yazungumze na mtu fulani hasa", "Kujaza muda", "Kwa sababu AI inalazimisha", "Kushiriki taarifa za siri"], answer: 0, why: "Masoko yanayomlenga mtu maalum yanafanya kazi vizuri kuliko ya jumla." },
      { objective: "O1", q: "Ujumbe ulio wazi unasema:", options: ["Namba yako ya simu tu", "Historia ya maisha yako", "Unatoa nini, ni kwa ajili ya nani na kwa nini wakuchague wewe", "Hakuna kitu maalum"], answer: 2, why: "Sehemu hizo tatu zinafanya ujumbe uwe wazi." },
      { objective: "O1", q: "AI inapendekeza aina tatu za wateja. Unapaswa:", options: ["Kuchagua inayolingana na wateja halisi na kuirekebisha", "Kutumia zote tatu bila kusoma", "Kupuuza unachokijua", "Kuzichapisha kama matangazo"], answer: 0, why: "AI inatoa mawazo; wewe unaamua kwa kutumia unachokijua." },
      { objective: "O2", q: "Mchanganyiko mzuri wa machapisho ya wiki moja ni upi?", options: ["Ofa tano zinazofanana", "Vichekesho (memes) tu", "Nembo yako tu", "Kidokezo, nyuma ya pazia, hadithi ya mteja, ofa na swali"], answer: 3, why: "Aina tofauti zinawafanya watu wavutiwe." },
      { objective: "O2", q: "\"Weka miadi sasa\" mwishoni mwa chapisho ni:", options: ["Kuweka wazi", "Wito wa kuchukua hatua", "Kiolezo", "Kuwa mteja"], answer: 1, why: "Unamwambia msomaji hatua inayofuata." },
      { objective: "O2", q: "Kabla ya kuchapisha chapisho lililoandikwa na AI, kagua:", options: ["Emoji tu", "Ukweli, bei, tarehe na madai", "Hakuna kitu", "Nywila yako"], answer: 1, why: "AI inaweza kukosea ukweli au kutia chumvi." },
      { objective: "O3", q: "Katika Canva, kiolezo ni:", options: ["Hati ya kisheria", "Tangazo lililolipiwa", "Orodha ya wateja", "Usanifu ulio tayari unaoubadilisha"], answer: 3, why: "Violezo vinaokoa muda na vina ukubwa unaofaa kila mtandao." },
      { objective: "O3", q: "Chapa rahisi inatumia:", options: ["Rangi chache zile zile, mitindo ya herufi na jina lako kwenye kila picha", "Rangi mpya kila siku", "Bila jina kabisa", "Nembo zilizonakiliwa"], answer: 0, why: "Kufanana kunakufanya utambulike." },
      { objective: "O3", q: "Picha ipi SI sawa kutumia?", options: ["Picha yako mwenyewe ya kazi yako", "Picha yenye leseni sahihi", "Picha uliyoinakili kutoka tovuti ya kampuni nyingine", "Kipengele cha kiolezo cha Canva unachoruhusiwa kutumia"], answer: 2, why: "Tumia tu picha ambazo una haki ya kuzitumia." },
      { objective: "O4", q: "Nani anapaswa kupata barua pepe zako za masoko?", options: ["Kila anwani unayoweza kupata", "Orodha za barua pepe zilizonunuliwa", "Watu usiowajua", "Watu waliokubali kusikia kutoka kwako"], answer: 3, why: "Tuma barua pepe kwa watu waliochagua kusikia kutoka kwako." },
      { objective: "O4", q: "Mwongozo wa shirika gani la Marekani unaeleza CAN-SPAM kwa biashara?", options: ["Idara ya Usafirishaji (Department of Transportation)", "NASA", "Federal Trade Commission (FTC)", "Shirika la Posta tu"], answer: 2, why: "FTC inachapisha mwongozo wa kufuata CAN-SPAM." },
      { objective: "O4", q: "Kichwa cha barua pepe ya mauzo kinasema \"Akaunti yako imesimamishwa\". Hiki ni:", options: ["Masoko mazuri", "Kinapotosha na ni kinyume cha CAN-SPAM", "Ni lazima", "Kuweka wazi"], answer: 1, why: "Vichwa lazima vionyeshe ujumbe unahusu nini hasa." },
      { objective: "O4", q: "Ikiwa kampuni nyingine inatuma barua pepe zako za masoko, nani anawajibika kufuata CAN-SPAM?", options: ["Wewe bado unawajibika", "Kampuni hiyo tu", "Hakuna mtu", "Mteja"], answer: 0, why: "FTC inasema unabaki kuwajibika." },
      { objective: "O5", q: "\"#ad\" mwanzoni mwa chapisho ni mfano wa:", options: ["Wito wa kuchukua hatua", "Kiolezo", "Kuweka wazi", "Ufikiaji"], answer: 2, why: "Inawaambia wasomaji kuna uhusiano wa malipo." },
      { objective: "O5", q: "Kutumia AI kuandika maoni ya nyota tano kwa duka lako ni:", options: ["Udanganyifu na hairuhusiwi", "Masoko ya busara", "Ni lazima", "Sawa ikiwa yanasikika halisi"], answer: 0, why: "Maoni ya uongo yanawadanganya wateja." },
      { objective: "O5", q: "Unapaswa kukagua wapi sheria za sasa za matangazo za Marekani?", options: ["Mjadala wowote wa maoni mtandaoni", "Mazungumzo ya AI tu", "Kwa mshindani", "Kurasa za mwongozo wa biashara wa FTC"], answer: 3, why: "Sheria zinabadilika; FTC ndicho chanzo rasmi." },
      { objective: "O6", q: "Ufikiaji (reach) unapima:", options: ["Wangapi walinunua", "Watu wangapi waliona chapisho lako", "Faida yako", "Umri wa wafuasi wako"], answer: 1, why: "Ufikiaji ni watu wangapi waliliona." },
      { objective: "O6", q: "Namba lengwa kuu ya chapisho la ofa kwa kawaida ni:", options: ["Kuhifadhiwa tu", "Mibofyo au miadi", "Ukubwa wa herufi", "Idadi ya hashtag"], answer: 1, why: "Ofa zinalenga kuwafanya watu wachukue hatua." },
      { objective: "O6", q: "Unapoiomba AI ichambue matokeo yako, unapaswa kushiriki:", options: ["Majina ya wateja na namba zao za simu", "Nywila zako", "Namba za kadi", "Namba tu, bila majina ya wateja"], answer: 3, why: "Weka taarifa za siri nje ya zana za AI." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      2,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maelezo ya mteja",
        objective: "O1",
        notYet: "Maelezo hayapo au yanaeleza \"kila mtu\".",
        meets: "Aya moja kuhusu mteja ni nani, mahitaji yake, wasiwasi wake na yuko wapi mtandaoni.",
        exceeds: "Kila chapisho na barua pepe vinazungumza wazi na mteja huyu mmoja."
      },
      {
        name: "Machapisho matano",
        objective: "O2",
        notYet: "Machapisho ni chini ya matano, au chapisho lina ukweli usiokaguliwa au dai lisiloweza kuthibitishwa.",
        meets: "Machapisho matano ya aina tofauti, kila moja na wito wa kuchukua hatua, ukweli ukiwa umekaguliwa.",
        exceeds: "Machapisho yanasikika kama mmiliki, si kama rasimu ya kawaida ya AI."
      },
      {
        name: "Picha",
        objective: "O3",
        notYet: "Picha hazipo, zimejaa maneno au zinatumia picha ambazo huna haki ya kuzitumia.",
        meets: "Picha safi kwa kila chapisho zenye rangi na mitindo ya herufi ile ile ya chapa.",
        exceeds: "Inatumia picha halisi za kazi ya biashara yenyewe."
      },
      {
        name: "Barua pepe ya masoko",
        objective: "O4",
        notYet: "Kichwa kinapotosha, au anwani au njia ya kujiondoa haipo.",
        meets: "Kichwa cha kweli, wazi kuwa ni ofa, anwani ya mahali halisi na njia ya kujiondoa.",
        exceeds: "Pia inasema jinsi maombi ya kujiondoa yatakavyotekelezwa ndani ya siku 10 za kazi."
      },
      {
        name: "Jedwali la ufuatiliaji",
        objective: "O6",
        notYet: "Hakuna jedwali la ufuatiliaji, au hakuna namba lengwa kwa kila chapisho.",
        meets: "Jedwali linaloonyesha namba lengwa moja kwa kila chapisho na mahali pa kupata matokeo.",
        exceeds: "Matokeo yamejazwa na mpango wa wiki ijayo unategemea matokeo hayo."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kipimo cha tathmini)",
      "Biashara zinazoendelea kuchapisha kila wiki kwa angalau wiki nne baada ya kozi (utafiti wa ufuatiliaji)",
      "Wamiliki wanaoripoti miadi, simu au mauzo zaidi kutoka masoko ya mtandaoni ndani ya siku 60",
      "Biashara zinazoongeza sehemu ya chini inayotimiza CAN-SPAM kwenye kila barua pepe ya masoko"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini) na mpango wa bure wa Canva",
      "Google Sheets au Excel kwa jedwali la ufuatiliaji",
      "Picha chache halisi za kazi ya biashara, kama zipo",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na wiki moja ya kuchapisha na kufuatilia"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi; onyesha ombi (prompt) na kiolezo cha Canva kwenye skrini ya pamoja.",
      "Waache wanafunzi watumie biashara yao wenyewe, au biashara ya mazoezi, ili kifurushi kiwe tayari kutumika.",
      "Kagua kila barua pepe kwa kichwa cha kweli, anwani na njia ya kujiondoa kabla mtu yeyote hajaituma.",
      "Wakumbushe wanafunzi wasiweke kamwe majina ya wateja au namba na anwani zao kwenye zana za AI.",
      "Tathmini kifurushi cha mwisho kwa kipimo cha tathmini, na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
