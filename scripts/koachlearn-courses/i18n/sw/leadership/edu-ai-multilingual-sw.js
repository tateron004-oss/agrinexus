"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-multilingual.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-multilingual-sw",
  lang: "sw",
  translationOf: "edu-ai-multilingual",
  category: "Leadership Development",
  name: "AI kwa Wanafunzi Wanaotumia Lugha Nyingi",
  skills: "Kutengeneza misaada ya lugha kwa AI, Kutengeneza faharasa za lugha mbili, Kuandika viunzi vya sentensi kwa kila kiwango, Kutumia tafsiri kwa usalama, Kuweka utaratibu wa tafsiri unaokaguliwa na mtu, Kuthamini lugha za nyumbani",
  outcome: "kutumia AI kutengeneza misaada ya lugha kwa wanafunzi wanaotumia lugha nyingi, yaani faharasa, viunzi vya sentensi kwa kila kiwango na maandishi yaliyorahisishwa yanayobaki na mawazo ya darasa lao, na kuendesha utaratibu wa tafsiri kwa familia ambapo mtu mwenye sifa anakagua kila tafsiri ya AI kabla haijatumwa.",
  about: [
    "Kozi hii ni kwa walimu wa darasa, walimu wa ukuzaji wa lugha ya Kiingereza (ELD) na walimu wa lugha mbili, wakufunzi wa walimu, maafisa wa uhusiano na familia na wakuu wa shule wanaohudumia wanafunzi wanaotumia lugha nyingi na familia zao. AI inaweza kuharakisha kutengeneza misaada ya lugha na tafsiri, lakini pia inaweza kuleta makosa yanayowachanganya wanafunzi au kuzipotosha familia.",
    "Sura ya 1 inajenga misaada ya darasani: maandishi yaliyorahisishwa yanayobaki na mawazo, faharasa za lugha mbili, na viunzi vya sentensi kwa kila kiwango. Sura ya 2 inahusu mawasiliano na familia, utaratibu wa tafsiri unaokaguliwa na mtu, faragha, na nafasi ya kiongozi katika kuthamini lugha za nyumbani.",
    "Mwongozo wa serikali kuu ya Marekani kuhusu wanafunzi wanaojifunza Kiingereza umebadilika hivi karibuni; wafanyakazi wa wilaya yako wa wanafunzi wa Kiingereza na wa haki za kiraia wanajua wajibu wako wa sasa. Tumia vifaa vya kubuni au vya jumla tu, bila taarifa za mwanafunzi. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Tengeneza kifurushi cha misaada ya lugha kwa somo moja: toleo lililorahisishwa la maandishi makuu linalobaki na mawazo ya darasa, faharasa ya lugha mbili ya maneno muhimu 8 hadi 10 katika lugha moja ya nyumbani ambayo shule yako inahudumia, viunzi vya sentensi katika viwango vitatu kwa kazi kuu ya kuzungumza au kuandika ya somo hilo, na ujumbe mmoja kwa familia uliotafsiriwa na AI na kukaguliwa na mzungumzaji mwenye sifa. Andika utaratibu wa tafsiri wa hatua nne ambao shule yako itafuata, na uandike kila sahihisho alilofanya mkaguzi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu wa darasa, walimu wa ukuzaji wa lugha ya Kiingereza (ELD) na walimu wa lugha mbili, wakufunzi wa walimu, maafisa wa uhusiano na familia na wakuu wa shule katika shule za Marekani wanaohudumia wanafunzi wanaotumia lugha nyingi na familia zao.",
    startingPoint: "Wanatengeneza misaada ya lugha na tafsiri za familia kwa mkono au kwa zana za bure za kutafsiri, mara nyingi bila ukaguzi. Huenda hawajui nani katika wilaya anathibitisha wajibu wa sasa kwa familia zinazotumia lugha nyingi.",
    gap: "AI inaweza kuharakisha misaada ya lugha na tafsiri, lakini makosa yanaweza kuwachanganya wanafunzi au kuzipotosha familia, na misaada inaweza kushusha kiwango cha kujifunza badala ya ugumu wa lugha. Waelimishaji wanahitaji misaada inayobaki na mawazo ya darasa, utaratibu wa tafsiri wenye ukaguzi wa mtu mwenye sifa, na kujua wazi mahali pa kuthibitisha wajibu wao.",
    constraints: [
      "Tumia vifaa vya kubuni au vya jumla tu, bila taarifa za mwanafunzi",
      "Kila tafsiri ya AI kwa familia inakaguliwa na mzungumzaji mwenye sifa kabla haijatumwa; mambo nyeti kama mikutano ya elimu maalum yanatumia tafsiri ya kitaalamu kama wilaya inavyotaka",
      "Mwongozo wa serikali kuu kuhusu wanafunzi wa Kiingereza umebadilika hivi karibuni; ofisi ya EL ya wilaya na mratibu wa haki za kiraia wanathibitisha wajibu wa sasa",
      "Wanafunzi hawaombwi kutafsiri mambo muhimu kwa familia zao wenyewe",
      "Muda: masomo mafupi yanayoingia katika siku ya kufundisha"
    ],
    prerequisites: "Hakuna. Kozi \"AI kwa Viongozi wa Shule na Elimu 2: Zana za AI kwa Walimu\" ni mwanzo mzuri."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kifungu cha maandishi cha kiwango cha darasa", action: "kurahisisha maandishi kwa AI ili kupunguza ugumu wa lugha huku ukibaki na mawazo ya darasa", standard: "yakifaulu jaribio la maswali yale yale" },
    { id: "O2", condition: "Kwa maneno muhimu ya somo moja", action: "kutengeneza faharasa ya lugha mbili ya maneno 8 hadi 10 katika lugha ya nyumbani ambayo shule yako inahudumia, ukiwekea alama maneno yanayofanana (cognates)", standard: "ikiwa imekaguliwa na mzungumzaji mwenye sifa, na kila sahihisho limeandikwa" },
    { id: "O3", condition: "Ukipewa kazi kuu ya kuzungumza au kuandika ya somo", action: "kuandika viunzi vya sentensi katika viwango vitatu vya umahiri pamoja na benki ya maneno", standard: "kila kiwango kikiomba fikra zile zile" },
    { id: "O4", condition: "Ukipewa ujumbe kwa familia", action: "kuendesha utaratibu wa tafsiri wa hatua nne: Kiingereza rahisi, zana iliyoidhinishwa, ukaguzi wa mtu mwenye sifa, kuhifadhi", standard: "bila kutuma chochote hadi mzungumzaji mwenye sifa amekikagua" },
    { id: "O5", condition: "Maswali yanapojitokeza kuhusu wajibu kwa familia zinazotumia lugha nyingi", action: "kutambua nani katika wilaya yako anathibitisha wajibu wa sasa na kueleza mahitaji ya wanafunzi kwa AI kwa maneno ya jumla tu", standard: "mawasiliano yao yakiwa yameandikwa kwenye ukurasa wako wa utaratibu" },
    { id: "O6", condition: "Kwa shule yako", action: "kupanga jinsi AI itakavyosaidia lugha za nyumbani bila kuchukua nafasi ya wafanyakazi wa lugha mbili", standard: "ukiwa na kipimo kimoja cha mawasiliano bora na familia" }
  ],
  chapters: [
    {
      name: "Sura 1: Misaada ya lugha darasani",
      lessons: [
        {
          objectives: ["O1"],
          title: "Misaada ya lugha inayoweka kujifunza juu",
          minutes: 5,
          goal: "Rahisisha maandishi kwa ajili ya ugumu wa lugha bila kushusha mawazo ya darasa.",
          text: [
            "Wanafunzi wanaotumia lugha nyingi wanaweza kufikiri kwa kiwango cha darasa lao huku bado wanajifunza Kiingereza. Lengo la msaada ni kupunguza ugumu wa lugha, si wa fikra. Maana yake ni kubaki na dhana muhimu, msamiati na maswali, huku ukiongeza uwazi: sentensi fupi, vichwa, picha, na maneno muhimu kwa herufi nzito pamoja na maana zake.",
            "Prompt: \"Rahisisha kifungu hiki cha sayansi cha darasa la 7 kwa wanafunzi wanaojifunza Kiingereza katika kiwango cha kati. Baki na kila dhana muhimu na maneno haya ya kitaaluma: [orodha]. Tumia sentensi fupi na vichwa, weka maneno ya kitaaluma kwa herufi nzito na ueleze kila moja kwa Kiingereza rahisi. Usiondoe mawazo.\"",
            "Kagua maandishi yaliyorahisishwa ukilinganisha na ya awali ili kuona usahihi. Jaribio zuri: je, mwanafunzi aliyesoma maandishi yaliyorahisishwa anaweza kujibu maswali makuu yale yale kama mwanafunzi aliyesoma ya awali?"
          ],
          steps: ["Orodhesha dhana muhimu na maneno ya kitaaluma.", "Omba AI irahisishe kwa kiwango cha lugha, ikibaki na vyote viwili.", "Ongeza vichwa, picha na maneno kwa herufi nzito pamoja na maana zake.", "Kagua usahihi ukilinganisha na ya awali.", "Jaribio: je, maswali makuu yale yale yanaweza kujibiwa?"],
          words: [["Mwanafunzi anayetumia lugha nyingi", "mwanafunzi anayejifunza kwa lugha zaidi ya moja, mara nyingi bado anakuza Kiingereza chake."], ["Ugumu wa lugha", "jinsi lugha ya maandishi ilivyo ngumu, tofauti na jinsi mawazo yalivyo magumu."], ["Msamiati wa kitaaluma", "maneno yanayotumika katika masomo ya shule, kama kuchambua, ushahidi au usanisinuru."]],
          slides: [
            { title: "Punguza lugha, si fikra", bullets: ["Baki na dhana, msamiati, maswali", "Ongeza uwazi: sentensi fupi, vichwa, picha"] },
            { title: "Prompt", bullets: ["Taja kiwango na maneno ya kitaaluma", "Weka maneno muhimu kwa herufi nzito na uyaeleze", "\"Usiondoe mawazo\""] },
            { title: "Kagua", bullets: ["Usahihi ukilinganisha na ya awali", "Maswali makuu yale yale yanajibika?"] }
          ],
          tryIt: "Rahisisha kifungu kimoja cha kiwango cha darasa kwa AI kwa kiwango cha kati cha Kiingereza, ukibaki na dhana zote muhimu. Kikague kwa jaribio la maswali yale yale.",
          youCanNow: "kurahisisha maandishi kwa wanafunzi wanaotumia lugha nyingi bila kushusha mawazo ya darasa.",
          quickCheck: [
            { objective: "O1", q: "Ugumu wa lugha ni nini?", options: ["Jinsi lugha ilivyo ngumu, tofauti na mawazo", "Idadi ya kurasa za maandishi", "Idadi ya wanafunzi wanaozungumza lugha", "Uzito wa kitabu cha kiada"], answer: 0, why: "Kupunguza ugumu wa lugha kunafanya maandishi yawe rahisi kusoma bila kushusha mawazo." },
            { objective: "O1", q: "Kifungu kilichorahisishwa na AI kinaondoa dhana muhimu ili kiwe kifupi. Ungefanya nini?", options: ["Kukitumia; kifupi ni bora", "Kuwapa wanafunzi wanaotumia lugha nyingi mada rahisi zaidi", "Kurudisha dhana hiyo na kukagua kwa jaribio la maswali yale yale", "Kuwaambia wanafunzi waruke sehemu hiyo"], answer: 2, why: "Maandishi yaliyorahisishwa yanabaki na dhana muhimu ili wanafunzi wajifunze kwa kiwango cha darasa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Faharasa za lugha mbili na maneno yanayofanana",
          minutes: 5,
          goal: "Tengeneza faharasa ya lugha mbili iliyokaguliwa kwa maneno muhimu ya somo.",
          text: [
            "Faharasa ya lugha mbili inatoa kila neno muhimu kwa Kiingereza, maana rahisi, neno hilo katika lugha ya nyumbani ya mwanafunzi, na sentensi ya mfano. AI inaweza kuandika rasimu haraka katika lugha nyingi: \"Tengeneza jedwali la faharasa la maneno haya 10 kwa sayansi ya darasa la 5: neno la Kiingereza, maana rahisi, tafsiri ya Kihispania, sentensi ya mfano kwa Kiingereza.\"",
            "Omba AI iwekee alama maneno yanayofanana, yaani cognates (maneno yanayoonekana na kumaanisha sawa katika lugha zote mbili, kama \"animal\" na \"animal\" au \"information\" na \"información\"), na marafiki wa uongo (maneno yanayofanana kwa sura lakini yenye maana tofauti). Maneno yanayofanana ni nguvu ambayo wanafunzi wanakuja nayo.",
            "Tafsiri za AI za neno moja moja zinaweza kuchagua maana isiyofaa kwa somo lako (kwa mfano, neno la hisabati au sayansi lenye maana ya kila siku). Mwombe mzungumzaji mwenye sifa, kama mwalimu wa lugha mbili au mtafsiri wa wilaya, akague faharasa kabla wanafunzi hawajaitumia."
          ],
          steps: ["Orodhesha maneno muhimu 8-10.", "Omba jedwali: neno, maana, neno la lugha ya nyumbani, mfano.", "Omba AI iwekee alama maneno yanayofanana na marafiki wa uongo.", "Mwombe mzungumzaji mwenye sifa aikague.", "Wape wanafunzi kabla ya somo."],
          words: [["Faharasa ya lugha mbili", "orodha ya maneno muhimu pamoja na maana zake katika lugha mbili."], ["Cognate (neno linalofanana)", "neno linaloonekana na kumaanisha karibu sawa katika lugha mbili."], ["Rafiki wa uongo", "neno linalofanana kwa sura katika lugha mbili lakini lenye maana tofauti."]],
          slides: [
            { title: "Jedwali la faharasa", bullets: ["Neno la Kiingereza na maana rahisi", "Neno la lugha ya nyumbani", "Sentensi ya mfano"] },
            { title: "Maneno yanayofanana ni nguvu", bullets: ["Sura sawa, maana sawa: animal / animal", "Jihadhari na marafiki wa uongo"] },
            { title: "Kagua kabla ya kutumia", bullets: ["AI inaweza kuchagua maana isiyofaa kwa somo", "Mwalimu wa lugha mbili au mtafsiri wa wilaya anakagua"] }
          ],
          tryIt: "Tengeneza faharasa ya lugha mbili ya maneno 8 hadi 10 kwa somo moja katika lugha ya nyumbani ambayo shule yako inahudumia, ukiwekea alama maneno yanayofanana. Mwombe mzungumzaji mwenye sifa aikague na uandike masahihisho yoyote.",
          youCanNow: "kutengeneza faharasa za lugha mbili zinazojenga juu ya lugha za nyumbani za wanafunzi.",
          quickCheck: [
            { objective: "O2", q: "Rafiki wa uongo ni nini?", options: ["Neno linalofanana lenye maana sawa katika lugha mbili", "Neno linalofanana kwa sura katika lugha mbili lakini lenye maana tofauti", "Rafiki anayekutafsiria", "Neno lisilo na tafsiri"], answer: 1, why: "Marafiki wa uongo wanaonekana kama maneno yanayofanana lakini wanapotosha, kwa hiyo wanahitaji kuwekewa alama." },
            { objective: "O2", q: "AI imetafsiri neno la sayansi kwa maana yake ya kila siku badala ya maana yake ya somo. Unafanya nini?", options: ["Kuliacha; wanafunzi wataelewa", "Kuliondoa neno kwenye faharasa", "Kuomba AI maana ndefu zaidi", "Kumwomba mzungumzaji mwenye sifa alisahihishe na kuandika sahihisho hilo"], answer: 3, why: "Tafsiri za AI za neno moja moja zinaweza kuchagua maana isiyofaa kwa somo lako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Viunzi vya sentensi kwa kila kiwango cha umahiri",
          minutes: 5,
          goal: "Andika viunzi vya sentensi katika viwango vitatu kwa kazi ya kuzungumza au kuandika.",
          text: [
            "Viunzi vya sentensi vinawapa wanafunzi muundo wa lugha ya kitaaluma ili waweze kuzingatia mawazo. Kwa kazi ile ile, wanafunzi wa viwango tofauti vya Kiingereza wanahitaji msaada tofauti. Mfano wa kazi: eleza kama dai linaungwa mkono na ushahidi.",
            "Omba AI viwango vitatu. Mwanzo: viunzi vifupi pamoja na benki ya maneno (\"The claim is ___. The evidence is ___.\"). Kati: viunzi vyenye maneno ya kuunganisha (\"The claim is supported because ___. However, ___.\"). Juu: vianzio wazi na viunganishi vya kitaaluma (\"Although the evidence suggests ___, it does not fully account for ___.\").",
            "Bandika viwango vyote vitatu ili wanafunzi wachague na wapande juu. Hakikisha kila kiwango kinaomba fikra zile zile. Viwango vya ukuzaji wa lugha ya Kiingereza vya wilaya yako na wenzako wa ELD wanaweza kukusaidia kulinganisha viunzi na viwango vya umahiri."
          ],
          steps: ["Taja kazi ya kuzungumza au kuandika.", "Omba viunzi katika viwango vya mwanzo, kati na juu.", "Ongeza benki ya maneno katika kiwango cha mwanzo.", "Hakikisha kila kiwango kinaomba fikra zile zile.", "Bandika vyote vitatu; waruhusu wanafunzi wapande juu."],
          words: [["Kiunzi cha sentensi", "sentensi yenye nafasi wazi inayoonyesha muundo wa jibu."], ["Kiwango cha umahiri", "jinsi mwanafunzi alivyokua katika Kiingereza."], ["Kiunganishi", "neno linalounganisha mawazo, kama because, however au although."]],
          slides: [
            { title: "Viunzi vinawaachia wanafunzi nafasi ya kufikiri", bullets: ["Muundo wa lugha ya kitaaluma", "Kuzingatia mawazo"] },
            { title: "Viwango vitatu, fikra zile zile", bullets: ["Mwanzo: viunzi vifupi, benki ya maneno", "Kati: viunganishi", "Juu: vianzio wazi vya kitaaluma"] },
            { title: "Vitumie vizuri", bullets: ["Bandika vyote vitatu; wanafunzi wanapanda juu", "Linganisha viwango na wenzako wa ELD"] }
          ],
          tryIt: "Chagua kazi ya kuzungumza au kuandika kutoka somo linalokuja. Tumia AI kuandika viunzi katika viwango vitatu, hakikisha vinaomba fikra zile zile, na uongeze benki ya maneno.",
          youCanNow: "kuandika viunzi vya sentensi vinavyosaidia kila kiwango cha Kiingereza katika kazi ile ile.",
          quickCheck: [
            { objective: "O3", q: "Kiunzi cha sentensi ni nini?", options: ["Picha inayozunguka sentensi", "Orodha ya maneno ya tahajia", "Muundo wa jibu wenye nafasi za kujaza", "Tafsiri ya sentensi"], answer: 2, why: "Viunzi vinawaonyesha wanafunzi jinsi ya kujenga jibu." },
            { objective: "O3", q: "Kiunzi chako cha kiwango cha mwanzo kinaomba wanafunzi wataje rangi, wakati kile cha juu kinawaomba waeleze sababu. Ungebadilisha nini?", options: ["Kufanya kila kiwango kiombe fikra zile zile kwa msaada tofauti", "Hakuna; wanaoanza wanahitaji mawazo rahisi zaidi", "Kuondoa kiwango cha mwanzo", "Kuwanyima wanaoanza kiunzi"], answer: 0, why: "Viunzi katika kila kiwango vinaomba fikra zile zile; msaada tu ndio unabadilika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Misaada ya lugha darasani",
        questions: [
          { objective: "O1", q: "Msaada mzuri wa lugha unapunguza:", options: ["Fikra", "Kiwango cha darasa", "Ugumu wa lugha, huku ukibaki na mawazo", "Matarajio"], answer: 2, why: "Wanafunzi wanaweza kufikiri kwa kiwango cha darasa huku wakijifunza Kiingereza." },
          { objective: "O1", q: "Jaribio lipi linakagua maandishi yaliyorahisishwa?", options: ["Je, wanafunzi wanaweza kujibu maswali makuu yale yale kama kwa ya awali?", "Je, ni mafupi zaidi?", "Je, yana picha nyingi zaidi?", "Je, yako kwa mwandiko mpya?"], answer: 0, why: "Maswali yale yale yanamaanisha mawazo yale yale." },
          { objective: "O2", q: "Neno linalofanana (cognate) ni:", options: ["Kanuni ya sarufi", "Neno la hisabati", "Tafsiri isiyo sahihi", "Neno linaloonekana na kumaanisha karibu sawa katika lugha mbili"], answer: 3, why: "Maneno yanayofanana ni nguvu ambayo wanafunzi wanakuja nayo." },
          { objective: "O2", q: "Nani akague faharasa ya lugha mbili ya AI?", options: ["Hakuna mtu", "Mzungumzaji mwenye sifa kama mwalimu wa lugha mbili au mtafsiri wa wilaya", "AI tena", "Mwanafunzi anayejifunza Kiingereza"], answer: 1, why: "AI inaweza kuchagua maana isiyofaa kwa somo." },
          { objective: "O3", q: "Viunzi vya sentensi katika viwango vitatu vinapaswa:", options: ["Kuomba fikra tofauti", "Kuwa kwa wanaoanza tu", "Kufichwa", "Kuomba fikra zile zile kwa msaada tofauti"], answer: 3, why: "Msaada unatofautiana; fikra hazitofautiani." }
        ]
      }
    },
    {
      name: "Sura 2: Familia, tafsiri na uongozi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Utaratibu wa tafsiri wenye ukaguzi wa mtu",
          minutes: 6,
          goal: "Weka utaratibu wa hatua nne wa kutafsiri mawasiliano na familia.",
          text: [
            "Tafsiri ya AI ni ya haraka na mara nyingi ni nzuri, lakini inafanya makosa yenye madhara: tarehe zisizo sahihi, sauti isiyofaa, maneno ya shule yasiyo na tafsiri ya moja kwa moja, na makosa katika lugha zisizotumika sana. Familia zinategemea kile shule inachowatumia.",
            "Utaratibu wa hatua nne: 1) Andika Kiingereza kwa lugha rahisi kwanza (sentensi fupi, bila nahau wala istilahi ngumu); Kiingereza kilicho wazi kinatafsirika vizuri zaidi. 2) Tafsiri kwa zana iliyoidhinishwa. 3) Mzungumzaji mwenye sifa (mtafsiri wa wilaya, mfanyakazi wa lugha mbili au huduma ya mkataba) anakagua na kusahihisha. 4) Tuma, na uhifadhi toleo lililokaguliwa ili kulitumia tena.",
            "Kwa mawasiliano yenye uzito mkubwa (elimu maalum, nidhamu, afya na usalama, haki za kisheria), tumia tafsiri au ukalimani wa kitaalamu kama wilaya yako inavyotaka. Usiwaombe wanafunzi kutafsiri mambo muhimu kwa familia zao wenyewe."
          ],
          steps: ["Andika Kiingereza rahisi kwanza: bila nahau wala istilahi ngumu.", "Tafsiri kwa zana iliyoidhinishwa.", "Mzungumzaji mwenye sifa anakagua na kusahihisha.", "Tuma, na uhifadhi toleo lililokaguliwa.", "Ujumbe wenye uzito mkubwa: tafsiri au ukalimani wa kitaalamu."],
          words: [["Nahau", "msemo ambao maana yake si jumla ya maneno yake, kama \"touch base\"."], ["Ukalimani", "kutafsiri lugha inayozungumzwa, kwa mfano katika mkutano."]],
          slides: [
            { title: "Kwa nini kukagua tafsiri za AI", bullets: ["Tarehe na sauti zisizo sahihi", "Maneno ya shule yasiyo na tafsiri ya moja kwa moja", "Makosa mengi zaidi katika lugha zisizotumika sana"] },
            { title: "Hatua nne", bullets: ["1 Kiingereza rahisi kwanza", "2 Tafsiri kwa zana iliyoidhinishwa", "3 Mzungumzaji mwenye sifa anakagua", "4 Tuma na uhifadhi"] },
            { title: "Ujumbe wenye uzito mkubwa", bullets: ["Elimu maalum, nidhamu, afya, haki", "Tafsiri au ukalimani wa kitaalamu", "Usiwaombe wanafunzi kamwe kutafsiri haya"] }
          ],
          tryIt: "Andika ujumbe mfupi kwa familia kuhusu tukio la shule kwa Kiingereza rahisi, utafsiri kwa zana iliyoidhinishwa, na umwombe mzungumzaji mwenye sifa aukague. Andika kila sahihisho.",
          youCanNow: "kuendesha utaratibu wa tafsiri ambapo mtu mwenye sifa anakagua kila tafsiri ya AI.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini kuandika ujumbe kwa Kiingereza rahisi kabla ya kuutafsiri?", options: ["Kiingereza rahisi ni kifupi zaidi kuchapisha", "Kiingereza kilicho wazi kinatafsirika kwa usahihi zaidi", "Zana za tafsiri zinasoma Kiingereza rahisi tu", "Kinatakiwa na sheria"], answer: 1, why: "Maandishi ya chanzo yaliyo wazi yanaleta makosa machache ya tafsiri." },
            { objective: "O4", q: "Mwalimu anataka mwanafunzi atafsiri barua kuhusu alama zake mwenyewe kwa wazazi wake. Ungependekeza nini?", options: ["Kumwacha mwanafunzi aitafsiri", "Kuituma kwa Kiingereza tu", "Kutumia AI na kuituma bila ukaguzi", "Kutumia utaratibu wenye ukaguzi wa mzungumzaji mwenye sifa badala yake"], answer: 3, why: "Wanafunzi hawapaswi kutafsiri mambo muhimu kwa familia zao wenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Wajibu, faragha na mwongozo wa sasa",
          minutes: 5,
          goal: "Tambua nani anathibitisha wajibu wa shule yako kwa familia zinazotumia lugha nyingi na mahali pa kukagua mwongozo wa sasa.",
          text: [
            "Kwa muda mrefu shule zimekuwa na wajibu wa haki za kiraia wa serikali kuu kwa wanafunzi wanaojifunza Kiingereza, na wajibu wa kuwasiliana na wazazi wenye uwezo mdogo wa Kiingereza kwa lugha wanayoielewa. Mnamo Agosti 2025, kwa mujibu wa K-12 Dive (chombo cha habari za elimu), Wizara ya Elimu ya Marekani ilifuta barua yake ya pamoja ya 2015 ya \"Dear Colleague\" kuhusu wanafunzi wa Kiingereza, ikisema haikulingana na vipaumbele vya utawala. Barua za \"Dear Colleague\" ni mwongozo, si sheria.",
            "Kwa sababu mwongozo umebadilika, usitegemee muhtasari wa zamani. Uliza ofisi ya wanafunzi wa Kiingereza ya wilaya yako, mratibu wa haki za kiraia au wa Title VI, au mshauri wa kisheria wajibu wako wa sasa ni upi, na ukague mwongozo wa wanafunzi wa Kiingereza wa idara ya elimu ya jimbo lako, ambayo inaweza kuweka masharti yake yenyewe.",
            "Faragha bado inahusika: hali ya mwanafunzi kama mwanafunzi wa Kiingereza, historia yake ya lugha na alama zake za umahiri ni sehemu ya kumbukumbu za elimu zinazolindwa na FERPA (sheria ya Marekani ya faragha ya kumbukumbu za wanafunzi). Usiziweke kwenye zana za AI zisizoidhinishwa, na ueleze mahitaji kwa maneno ya jumla unapoandika prompt."
          ],
          steps: ["Usitegemee muhtasari wa zamani wa mwongozo wa EL.", "Uliza ofisi ya EL ya wilaya au mratibu wa haki za kiraia kuhusu wajibu wa sasa.", "Kagua mwongozo wa EL wa idara ya elimu ya jimbo lako.", "Usiweke hali ya EL na alama kwenye zana za AI zisizoidhinishwa.", "Andika prompt ukieleza mahitaji kwa maneno ya jumla."],
          words: [["Mwanafunzi wa Kiingereza (EL)", "mwanafunzi aliyetambuliwa kuwa anahitaji msaada kujifunza Kiingereza kwa ajili ya shule."], ["Uwezo mdogo wa Kiingereza (LEP)", "kutoweza bado kusoma, kuandika, kuzungumza au kuelewa Kiingereza vya kutosha kwa hali fulani."], ["Kufuta (rescind)", "kufuta au kuondoa mwongozo au uamuzi wa awali."]],
          slides: [
            { title: "Mwongozo umebadilika", bullets: ["Barua ya EL ya 2015 ya Dear Colleague ilifutwa, Agosti 2025", "Mwongozo si sheria"] },
            { title: "Thibitisha wajibu wa sasa", bullets: ["Ofisi ya EL ya wilaya au mratibu wa haki za kiraia", "Mwongozo wa EL wa idara ya elimu ya jimbo", "Mshauri wa kisheria ukiwa na shaka"] },
            { title: "Faragha", bullets: ["Hali ya EL na alama ni kumbukumbu za elimu", "Usiziweke kwenye zana zisizoidhinishwa", "Eleza mahitaji kwa maneno ya jumla"] }
          ],
          sources: [{ name: "K-12 Dive: Wizara ya Elimu yafuta mwongozo wa wanafunzi wa Kiingereza (Agosti 2025)", url: "https://www.k12dive.com/news/education-department-rescinds-ela-english-learner-guidance-2015-dear-colleague/758163/" }, { name: "FERPA: Kulinda Faragha ya Wanafunzi", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Tafuta nani katika wilaya yako anajibu maswali kuhusu mawasiliano na familia zinazotumia lugha nyingi (ofisi ya EL, mratibu wa haki za kiraia au afisa wa uhusiano na familia) na uandike mawasiliano yake kwenye ukurasa wako wa utaratibu.",
          youCanNow: "kujua wajibu wako wa sasa kwa familia zinazotumia lugha nyingi na kulinda faragha ya taarifa zao.",
          quickCheck: [
            { objective: "O5", q: "Barua za \"Dear Colleague\" ni nini?", options: ["Mwongozo, si sheria", "Sheria mpya za serikali kuu", "Barua kwa familia", "Mikataba ya wilaya"], answer: 0, why: "Barua za \"Dear Colleague\" zinaeleza jinsi taasisi zinavyoielewa sheria; ni mwongozo." },
            { objective: "O5", q: "Huna uhakika shule yako lazima itoe nini katika mawasiliano yaliyotafsiriwa. Unamuuliza nani?", options: ["Chatbot ya AI", "Makala ya habari", "Ofisi ya EL ya wilaya yako au mratibu wa haki za kiraia", "Kikundi cha wazazi mtandaoni"], answer: 2, why: "Wafanyakazi wa EL na wa haki za kiraia wa wilaya wanajua wajibu wako wa sasa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuongoza kwa kuona lugha za nyumbani kama nguvu",
          minutes: 6,
          goal: "Panga jinsi shule yako itakavyotumia AI kuthamini lugha za nyumbani, si kuchukua nafasi ya watu.",
          text: [
            "Tafsiri ya AI inaweza kufanya ionekane kana kwamba wafanyakazi wa lugha mbili na wakalimani hawahitajiki sana. Ukweli ni kinyume chake: rasimu za AI zinafanya ukaguzi wao uwe wa haraka zaidi, na ujuzi wao wa utamaduni na jamii hauwezi kufanywa na mashine. Linda muda wao kwa ajili ya ukaguzi na kwa mazungumzo yenye umuhimu zaidi.",
            "Tumia AI kuheshimu lugha za nyumbani: waache wanafunzi waeleze mawazo kwa lugha yao ya nyumbani kwanza kisha wajenge Kiingereza, tengeneza faharasa na vifaa vya kukaribisha katika lugha za familia, na zikaribishe familia kushiriki maarifa yao. Epuka zana au sheria zinazoona lugha za nyumbani kama tatizo tu.",
            "Unganisha yote katika mpango mfupi wa shule: misaada ipi walimu watatumia, utaratibu wa tafsiri, nani anakagua, jinsi familia zinavyotoa maoni, na jinsi utakavyojua kuwa familia zina taarifa bora zaidi (kwa mfano, mahudhurio katika matukio au utafiti mfupi katika lugha zao)."
          ],
          steps: ["Linda muda wa wafanyakazi wa lugha mbili kwa ukaguzi na mazungumzo muhimu.", "Waache wanafunzi watumie lugha za nyumbani kujenga mawazo.", "Tengeneza vifaa vya kukaribisha katika lugha za familia.", "Andika mpango mfupi wa shule wenye utaratibu na wakaguzi.", "Pima kama familia zina taarifa bora zaidi."],
          words: [["Mtazamo wa nguvu (asset-based)", "kuona kile wanafunzi na familia wanachokuja nacho kama nguvu, si mapungufu."], ["Afisa wa uhusiano na familia", "mfanyakazi anayejenga uhusiano kati ya shule na familia."]],
          slides: [
            { title: "AI inasaidia watu", bullets: ["Rasimu zinaharakisha ukaguzi wa wafanyakazi wa lugha mbili", "Ujuzi wa utamaduni na jamii unabaki kwa watu"] },
            { title: "Lugha za nyumbani ni nguvu", bullets: ["Fikiri kwa lugha ya nyumbani, jenga Kiingereza", "Vifaa vya kukaribisha katika lugha za familia"] },
            { title: "Mpango mfupi wa shule", bullets: ["Misaada, utaratibu, wakaguzi", "Maoni ya familia", "Pima: je, familia zina taarifa bora zaidi?"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kifurushi chako cha misaada ya lugha (maandishi yaliyorahisishwa, faharasa ya lugha mbili iliyokaguliwa, viunzi vya sentensi vya viwango vitatu, tafsiri moja ya familia iliyokaguliwa), andika utaratibu wako wa tafsiri wa hatua nne pamoja na mawasiliano ya mkaguzi, na uandike kila sahihisho lililofanywa.",
          youCanNow: "kuongoza matumizi ya AI yanayosaidia wanafunzi wanaotumia lugha nyingi na familia zao kwa usahihi na heshima.",
          quickCheck: [
            { objective: "O6", q: "Mtazamo wa nguvu una maana gani kwa wanafunzi wanaotumia lugha nyingi?", options: ["Kuona kile wanafunzi wanachokuja nacho kama nguvu", "Kuhesabu mali za shule", "Kuzingatia kile wanafunzi wanachokosa", "Kutumia Kiingereza tu darasani"], answer: 0, why: "Mtazamo wa nguvu unaona lugha za nyumbani kama nguvu." },
            { objective: "O6", q: "Kiongozi anapendekeza kwamba tafsiri ya AI ina maana wafanyakazi wa lugha mbili hawahitajiki tena. Ungesema nini?", options: ["Kukubali; AI ni nafuu zaidi", "Kupendekeza maafisa wa uhusiano na familia wabadilishwe na chatbots", "Kusimamisha tafsiri zote", "Ukaguzi wao unakuwa wa haraka zaidi, na ujuzi wao wa jamii bado ni muhimu"], answer: 3, why: "AI inaharakisha kazi, lakini watu wenye sifa wanaikagua na wanaijua jamii." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Familia, tafsiri na uongozi",
        questions: [
          { objective: "O4", q: "Kwa nini kuandika Kiingereza rahisi kabla ya kutafsiri?", options: ["AI haiwezi kusoma maandishi marefu", "Ni kifupi zaidi", "Kiingereza kilicho wazi kinatafsirika kwa usahihi zaidi", "Kinatakiwa na sheria"], answer: 2, why: "Nahau na istilahi ngumu zinasababisha makosa ya tafsiri." },
          { objective: "O4", q: "Ujumbe kuhusu mkutano wa elimu maalum wa mwanafunzi unahitaji kutafsiriwa. Njia bora ni ipi?", options: ["Tafsiri ya kitaalamu kama wilaya yako inavyotaka", "Kumwomba mwanafunzi atafsiri", "Tafsiri ya AI isiyokaguliwa", "Kuutuma kwa Kiingereza tu"], answer: 0, why: "Ujumbe wenye uzito mkubwa unahitaji tafsiri ya kitaalamu." },
          { objective: "O5", q: "Nini kilitokea kwa barua ya 2015 ya \"Dear Colleague\" kuhusu wanafunzi wa Kiingereza mwaka 2025, kwa mujibu wa K-12 Dive?", options: ["Ikawa sheria", "Ilifutwa", "Ilitafsiriwa", "Hakuna kitu"], answer: 1, why: "Wizara iliifuta mnamo Agosti 2025." },
          { objective: "O5", q: "Alama za umahiri wa Kiingereza za mwanafunzi ni:", options: ["Sehemu ya kumbukumbu za elimu zinazolindwa na FERPA", "Taarifa za umma", "Salama katika zana yoyote ya AI", "Mali ya kampuni inayouza zana"], answer: 0, why: "Ni kumbukumbu za mwanafunzi." },
          { objective: "O6", q: "Tafsiri ya AI inabadilishaje nafasi ya wafanyakazi wa lugha mbili?", options: ["Hawahitajiki tena", "Wanahitaji kusahihisha tahajia tu", "Wanapaswa kubadilishwa na wanafunzi", "Ukaguzi wao unakuwa wa haraka zaidi, na ujuzi wao wa jamii bado ni muhimu"], answer: 3, why: "Rasimu za AI zinasaidia watu; hazichukui nafasi yao." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Wanafunzi Wanaotumia Lugha Nyingi",
    questions: [
      { objective: "O1", q: "Wanafunzi wanaotumia lugha nyingi wanaweza:", options: ["Kufanya kazi rahisi tu", "Kufikiri kwa kiwango cha darasa huku bado wanajifunza Kiingereza", "Kutotumia maneno ya kitaaluma", "Kutojifunza kwa AI"], answer: 1, why: "Kiwango cha lugha si kiwango cha fikra." },
      { objective: "O1", q: "Ugumu wa lugha unamaanisha:", options: ["Idadi ya lugha zinazozungumzwa", "Uzito wa kitabu", "Jinsi lugha ilivyo ngumu, tofauti na mawazo", "Kiasi cha kazi ya nyumbani"], answer: 2, why: "Misaada inapunguza ugumu wa lugha, si mawazo." },
      { objective: "O1", q: "Maandishi yaliyorahisishwa yanapaswa kubaki na:", options: ["Hakuna maswali", "Maneno rahisi tu", "Dhana muhimu na msamiati wa kitaaluma", "Nusu ya mawazo"], answer: 2, why: "Lengo la kujifunza linabaki lile lile." },
      { objective: "O1", q: "Msamiati wa kitaaluma unajumuisha maneno kama:", options: ["Ushahidi na kuchambua", "Habari na asante", "Chakula cha mchana na mapumziko", "Basi na gari"], answer: 0, why: "Maneno ya masomo ya shule yanahitaji kufundishwa moja kwa moja." },
      { objective: "O2", q: "Faharasa ya lugha mbili inajumuisha:", options: ["Alama za mitihani", "Maneno ya Kiingereza tu", "Majina ya wanafunzi", "Neno, maana, neno la lugha ya nyumbani, mfano"], answer: 3, why: "Lugha zote mbili zinajenga uelewa." },
      { objective: "O2", q: "Rafiki wa uongo ni:", options: ["Neno linalofanana (cognate)", "Neno linalofanana kwa sura katika lugha mbili lakini lenye maana tofauti", "Mwanafunzi mwenzako", "Mtafsiri"], answer: 1, why: "Wanafunzi wanapaswa kujihadhari nao." },
      { objective: "O2", q: "Tafsiri za AI za neno moja moja zinaweza:", options: ["Kutafsiri majina tu", "Kuwa kamili kila wakati", "Kutokuwa na manufaa kamwe", "Kuchagua maana isiyofaa kwa somo lako"], answer: 3, why: "Muktadha ni muhimu; zikague." },
      { objective: "O3", q: "Kiunzi cha sentensi:", options: ["Ni jaribio la sarufi", "Ni fremu ya picha", "Kinaonyesha muundo wa jibu chenye nafasi wazi", "Ni alama ya mtihani"], answer: 2, why: "Viunzi vinawawezesha wanafunzi kuzingatia mawazo." },
      { objective: "O3", q: "Viunzi vya kiwango cha mwanzo mara nyingi vinajumuisha:", options: ["Benki ya maneno", "Hakuna msaada", "Viunganishi vya juu tu", "Maswali tu"], answer: 0, why: "Msaada zaidi katika viwango vya mwanzo." },
      { objective: "O3", q: "Nani anasaidia kulinganisha viunzi na viwango vya umahiri?", options: ["Kampuni inayouza zana", "Wenzako wa ELD na viwango vya ukuzaji wa lugha ya Kiingereza", "AI peke yake", "Hakuna mtu"], answer: 1, why: "Wataalamu wanavijua viwango." },
      { objective: "O4", q: "Hatua ya 3 ya utaratibu wa tafsiri ni:", options: ["Mzungumzaji mwenye sifa anakagua na kusahihisha", "Kutuma mara moja", "Kufuta Kiingereza", "Kumwomba mwanafunzi"], answer: 0, why: "Ukaguzi wa mtu unagundua makosa." },
      { objective: "O4", q: "Kwa nini kuhifadhi tafsiri zilizokaguliwa?", options: ["Hakuna sababu", "Kuziuza", "Kuzificha", "Kutumia tena matoleo sahihi"], answer: 3, why: "Matoleo yaliyokaguliwa yanaokoa muda baadaye." },
      { objective: "O4", q: "Wanafunzi hawapaswi kutafsiri:", options: ["Maneno ya msamiati darasani", "Mambo muhimu kwa familia zao wenyewe", "Mawazo yao wenyewe", "Majina ya vitabu"], answer: 1, why: "Si haki kwa mwanafunzi na ni hatari kwa familia." },
      { objective: "O5", q: "Barua za \"Dear Colleague\" ni:", options: ["Maamuzi ya mahakama", "Sheria zilizopitishwa na Bunge la Marekani (Congress)", "Mwongozo, si sheria", "Sheria za jimbo"], answer: 2, why: "Mwongozo unaweza kutolewa au kuondolewa." },
      { objective: "O5", q: "Ili kuthibitisha wajibu wa sasa kwa familia zinazotumia lugha nyingi, uliza:", options: ["Kampuni inayouza zana", "Chatbot", "Ofisi ya EL ya wilaya yako au mratibu wa haki za kiraia", "Mitandao ya kijamii"], answer: 2, why: "Wanajua sheria na sera za sasa." },
      { objective: "O5", q: "Idara ya elimu ya jimbo lako inaweza:", options: ["Kuweka masharti yake yenyewe kuhusu wanafunzi wa Kiingereza", "Kutochapisha mwongozo kamwe", "Kupindua kabisa sheria ya haki za kiraia ya serikali kuu", "Kupiga marufuku tafsiri"], answer: 0, why: "Majimbo yanachapisha mwongozo wao wenyewe." },
      { objective: "O5", q: "Unapoandika prompt kwa AI kuhusu mahitaji ya wanafunzi, yaeleze:", options: ["Pamoja na hali ya viza", "Pamoja na majina na alama", "Pamoja na anwani za nyumbani", "Kwa maneno ya jumla"], answer: 3, why: "Linda taarifa za wanafunzi ziwe siri." },
      { objective: "O6", q: "Mtazamo wa nguvu unamaanisha:", options: ["Kuhesabu mali za shule", "Kuona kile wanafunzi wanachokuja nacho kama nguvu", "Kuzingatia mapungufu", "Njia ya bajeti"], answer: 1, why: "Lugha za nyumbani ni nguvu." },
      { objective: "O6", q: "Kuwaacha wanafunzi waeleze mawazo kwanza kwa lugha yao ya nyumbani:", options: ["Kunachukua nafasi ya kufundisha Kiingereza", "Kunachelewesha kujifunza", "Hakuruhusiwi", "Kunajenga uelewa kabla ya Kiingereza"], answer: 3, why: "Kufikiri kwa lugha yenye nguvu kunasaidia kujifunza." },
      { objective: "O6", q: "Kipimo kizuri cha mawasiliano bora na familia ni:", options: ["Idadi ya kurasa zilizotumwa", "Idadi ya prompt za AI", "Mahudhurio katika matukio au utafiti wa familia katika lugha zao", "Ripoti za kampuni zinazouza zana"], answer: 2, why: "Pima kile ambacho familia zinakipata kwa kweli." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 5, 7, 8, 10, 13, 14, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maandishi yaliyorahisishwa", objective: "O1", notYet: "Mawazo muhimu yalipotea au yalirahisishwa hadi kuondoka.", meets: "Toleo lililorahisishwa linalobaki na mawazo ya darasa.", exceeds: "Linafaulu jaribio la maswali yale yale na linabaki na msamiati wa kitaaluma pamoja na msaada." },
      { name: "Faharasa ya lugha mbili", objective: "O2", notYet: "Maneno chini ya 8, au haikukaguliwa na mzungumzaji mwenye sifa.", meets: "Maneno muhimu 8 hadi 10 katika lugha moja ya nyumbani, yaliyokaguliwa na mzungumzaji mwenye sifa.", exceeds: "Maneno yanayofanana na marafiki wa uongo yamewekewa alama, na kuna mfano kwa kila neno." },
      { name: "Viunzi vya sentensi", objective: "O3", notYet: "Viwango chini ya vitatu, au viwango vinaomba fikra tofauti.", meets: "Viunzi katika viwango vitatu vya umahiri kwa kazi kuu ya somo.", exceeds: "Kila kiwango kinaomba fikra zile zile, na viunzi vya mwanzo vina benki ya maneno." },
      { name: "Tafsiri ya familia iliyokaguliwa", objective: "O4", notYet: "Tafsiri haikukaguliwa na mzungumzaji mwenye sifa.", meets: "Ujumbe mmoja kwa familia uliotafsiriwa na AI na kukaguliwa na mzungumzaji mwenye sifa, na masahihisho yameandikwa.", exceeds: "Toleo lililokaguliwa limehifadhiwa ili kutumika tena." },
      { name: "Utaratibu wa tafsiri", objective: "O5", notYet: "Hatua chini ya nne, au hakuna mawasiliano ya mkaguzi.", meets: "Utaratibu wa hatua nne ambao shule yako itafuata.", exceeds: "Unajumuisha mawasiliano ya mkaguzi na nani wa kuuliza kuhusu wajibu." }
    ]
  },
  evaluation: {
    results: [
      "Waelimishaji wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Walimu wanaoripoti kutumia maandishi yaliyorahisishwa, faharasa au viunzi kwa wanafunzi wanaotumia lugha nyingi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Shule zinazoanzisha utaratibu wa tafsiri wenye ukaguzi wa mtu mwenye sifa (utafiti wa kufuatilia)",
      "Mahudhurio ya familia katika matukio au matokeo ya utafiti wa familia katika lugha zao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na zana ya AI na ya tafsiri iliyoidhinishwa na wilaya",
      "Kifungu na kazi ya kiwango cha darasa kutoka somo linalokuja (bila taarifa za mwanafunzi)",
      "Kupata mzungumzaji mwenye sifa wa lugha moja ya nyumbani ambayo shule yako inahudumia",
      "Kama dakika 60 kwa jumla, pamoja na muda wa ukaguzi wa mzungumzaji mwenye sifa"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha rahisisheni kifungu kimoja kama kikundi na mfanye jaribio la maswali yale yale.",
      "Pangeni wazungumzaji wenye sifa mapema ili kila faharasa na tafsiri iweze kukaguliwa.",
      "Tumieni vifaa vya kubuni au vya jumla tu; elezeni mahitaji ya wanafunzi kwa AI kwa maneno ya jumla tu.",
      "Alikeni ofisi ya EL ya wilaya au mratibu wa haki za kiraia kujibu maswali kuhusu wajibu wa sasa.",
      "Pima kazi ya mwisho kwa rubriki, na omba orodha ya masahihisho aliyofanya mkaguzi."
    ]
  }
};
