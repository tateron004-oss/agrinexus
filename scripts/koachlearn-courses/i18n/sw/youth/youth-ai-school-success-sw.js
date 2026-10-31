"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-school-success.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-school-success-sw",
  lang: "sw",
  translationOf: "youth-ai-school-success",
  category: "Youth",
  name: "AI kwa Mafanikio Shuleni",
  skills: "Kupanga wiki ya shule, Kugawa mradi mkubwa katika hatua, Kuelewa usomaji mgumu, Kupata maoni kuhusu maandishi yako mwenyewe, Kutengeneza mpango wa kujisomea kwa mtihani, Kutumia AI ndani ya sheria za shule",
  outcome: "kutumia msaidizi wa AI wa bure, ndani ya sheria za shule yako, kupanga wiki yako, kugawa kazi kubwa katika hatua, kuelewa usomaji mgumu, kupata maoni kuhusu maandishi yako mwenyewe, na kutengeneza mpango wa kujisomea kwa mtihani halisi.",
  about: [
    "Kozi hii ni kwa wanafunzi wa shule ya msingi ya juu na sekondari wenye umri wa kama miaka 13 hadi 18 wanaotaka shule isiwe na mzigo mzito. Inaichukulia AI kama mpangaji, kocha na mwenzako wa kujisomea, kamwe si mtu anayekufanyia kazi yako.",
    "Utapanga wiki halisi, utagawa mradi mkubwa katika hatua ndogo, utapata msaada wa kuelewa usomaji mgumu, utapata maoni kuhusu rasimu uliyoandika, na utatengeneza mpango wa kujisomea kwa mtihani unaokuja.",
    "Sheria kwanza: kila shule na kila mwalimu ana sheria zake kuhusu AI. Zikague, kagua sheria ya umri ya zana hiyo, na zungumza na mzazi au mlezi kabla ya kujisajili kwa chochote. Tumia akaunti yako ya shule kwa zana zilizoidhinishwa na shule. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\"."
  ],
  finalTask: "Chagua mtihani au mradi halisi unaokuja ndani ya wiki mbili zijazo. Tumia AI kutengeneza mpango wa kujisomea wa siku kwa siku unaoendana na masomo yako, shughuli zako na kazi au kazi za nyumbani, kisha iombe maswali 5 ya mazoezi yenye majibu yaliyofichwa, yajibu wewe mwenyewe, yakague dhidi ya maelezo yako, na uandike mstari mmoja kuhusu jinsi ulivyofuata sheria za AI za shule yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanafunzi wa shule ya msingi ya juu na sekondari wenye umri wa kama miaka 13 hadi 18 wanaohisi shule ni mzigo mzito, mara nyingi wakichanganya masomo na michezo, vilabu, kazi ya muda au kazi za nyumbani.",
    startingPoint: "Wanatumia simu na kompyuta za shule kila siku na huenda wamejaribu msaidizi wa mazungumzo. Wengi hukariri kila kitu usiku wa kabla ya mtihani, huahirisha miradi mikubwa na hawana uhakika shule yao inaruhusu matumizi gani ya AI.",
    gap: "Wanafunzi wanaweza kutumia AI kupanga, kuelewa usomaji mgumu na kujisomea vizuri zaidi, lakini kuitumia kufanya kazi yao kunaweza kuhesabiwa kama udanganyifu na kunaruka kujifunza. Wanahitaji kutumia AI kama mpangaji, kocha na mwenzao wa kujisomea ndani ya sheria za shule ili waende sawa na masomo na wafanye vizuri zaidi kwenye mitihani.",
    constraints: [
      "Sheria za AI za shule na za walimu zinatofautiana; sheria ya mwalimu kwa kila kazi ndiyo inayohesabika",
      "Vikomo vya umri na ruhusa ya mzazi au mlezi kwa akaunti mpya; akaunti za shule kwa zana za shule",
      "Vifaa: simu, kompyuta ya shule au kompyuta ya maktaba; zana za bure tu",
      "Faragha: hakuna taarifa binafsi zinazobandikwa katika zana za AI",
      "Ratiba zenye shughuli nyingi: masomo ya dakika 5 na maneno rahisi"
    ],
    prerequisites: "Hakuna. Kozi \"What Is AI? (for Young People)\" inawasaidia wanafunzi ambao hawajawahi kutumia msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi zako, tarehe za kuwasilisha na nyakati zisizobadilika za wiki", action: "kutengeneza mpango rahisi wa wiki kwa AI na kuubadilisha uendane na maisha yako halisi", standard: "kazi ngumu zaidi kwanza, pamoja na mapumziko, na mpango ukinakiliwa kwenye shajara au kalenda" },
    { id: "O2", condition: "Ukipewa kazi kubwa na tarehe yake ya kuwasilisha", action: "kugawa kazi hiyo katika hatua za dakika 30 zenye tarehe na kuzikagua dhidi ya rubriki ya mwalimu", standard: "ukimaliza siku mbili mapema na kila sehemu inayotakiwa ikiwemo" },
    { id: "O3", condition: "Ukipewa aya ngumu kutoka usomaji wa darasani", action: "kuisoma wewe mwenyewe, kuiomba AI ikueleze na ifafanue maneno magumu, kisha kuisoma tena", standard: "ukiandika sentensi moja sahihi kwa maneno yako mwenyewe kuhusu maana yake" },
    { id: "O4", condition: "Ukipewa rasimu uliyoandika na ruhusa ya mwalimu wako", action: "kuiomba AI mambo matatu ya kuboresha badala ya kuiandika upya, na kurekebisha rasimu kwa maneno yako mwenyewe", standard: "kila badiliko likiwa limeandikwa na wewe" },
    { id: "O5", condition: "Ukipewa tarehe halisi ya mtihani, mada zake na muda wako wa kila siku", action: "kutengeneza mpango wa kujisomea wa siku kwa siku wenye maswali ya mazoezi, kuyajibu kwanza na kuyakagua dhidi ya maelezo yako", standard: "ukitumia muda zaidi kwa maswali uliyokosea" },
    { id: "O6", condition: "Kwa kazi yoyote ambayo unaweza kutumia AI", action: "kufuata sheria ya AI ya mwalimu wako, kukagua ukweli au chanzo chochote wewe mwenyewe, na kuandika mstari mmoja kuhusu jinsi ulivyotumia AI", standard: "bila kuwasilisha kazi iliyoandikwa na AI ambayo hairuhusiwi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujipanga",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga wiki yako ya shule",
          minutes: 5,
          goal: "Geuza orodha ya kazi iliyochanganyika kuwa mpango rahisi wa wiki.",
          text: [
            "Shule, mazoezi ya michezo, vilabu, kazi ya muda, kazi za nyumbani na marafiki vyote vinashindania muda wako. Msaidizi wa AI anaweza kukusaidia kuvipanga ukimpa ukweli.",
            "Orodhesha kinachotakiwa kuwasilishwa na lini, pamoja na nyakati zako zisizobadilika kama mazoezi au kazi. Kisha uliza: \"Hii ndiyo wiki yangu. Tengeneza mpango rahisi wenye muda wa kujisomea kila siku, kazi ngumu zaidi kwanza, na mapumziko. Uwe wa skrini moja tu.\"",
            "Mpango huo ni rasimu. Hamisha vitu hadi uendane na maisha yako halisi, kisha uuweke kwenye shajara, Google Calendar au app ya kalenda ya shule yako."
          ],
          steps: ["Andika kila kazi na tarehe yake ya kuwasilisha.", "Ongeza nyakati zisizobadilika: masomo, mazoezi, kazi, familia.", "Iombe AI itengeneze mpango rahisi wa wiki wenye mapumziko.", "Ubadilishe uendane nawe, kisha uunakili kwenye shajara au kalenda yako."],
          words: [["Tarehe ya kuwasilisha", "siku ambayo kazi lazima ikabidhiwe."], ["Kuweka kipaumbele", "kuamua cha kufanya kwanza kwa sababu ni muhimu zaidi au kinatakiwa mapema zaidi."]],
          slides: [
            { title: "Ipe AI ukweli", bullets: ["Kinachotakiwa kuwasilishwa na lini", "Nyakati za mazoezi, kazi na familia"] },
            { title: "Omba mpango rahisi", bullets: ["Muda wa kujisomea kila siku", "Kazi ngumu zaidi kwanza", "Mapumziko yamo", "Unaingia kwenye skrini moja"] },
            { title: "Uufanye halisi", bullets: ["Hamisha vitu viendane na maisha yako", "Unakili kwenye shajara au kalenda"] }
          ],
          tryIt: "Orodhesha kila kitu kinachotakiwa wiki hii na nyakati zako zisizobadilika. Mwombe msaidizi wa AI unayeruhusiwa kutumia atengeneze mpango rahisi wa wiki. Badilisha kitu kimoja kiendane na maisha yako, na uunakili kwenye shajara au kalenda.",
          youCanNow: "kutengeneza mpango wa wiki unaowezekana kwa msaada wa AI.",
          quickCheck: [
            { objective: "O1", q: "\"Nyakati zisizobadilika\" ni nini unapopanga wiki yako?", options: ["Nyakati usizoweza kuhamisha, kama masomo, mazoezi au kazi", "Nyakati unazopanga kupumzika", "Tarehe za kuwasilisha kazi za nyumbani tu", "Nyakati ambazo AI inakuchagulia"], answer: 0, why: "Nyakati zisizobadilika ni ahadi ambazo mpango lazima uzizunguke." },
            { objective: "O1", q: "Mpango wa AI unaweka muda wa kujisomea wakati wa zamu yako kazini. Ufanye nini?", options: ["Kuacha kwenda kazini", "Kuupuuza mpango", "Kuhamisha muda wa kujisomea uendane na ratiba yako halisi", "Kuiomba AI ifute zamu yako"], answer: 2, why: "Mpango wa AI ni rasimu; wewe unaubadilisha uendane na maisha yako halisi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kugawa mradi mkubwa katika hatua ndogo",
          minutes: 5,
          goal: "Gawa kazi kubwa katika hatua ndogo zenye tarehe.",
          text: [
            "Miradi mikubwa inatisha kwa sababu inaonekana kama kitu kimoja kikubwa sana. Kuigawa katika hatua ndogo kunaifanya iwezekane.",
            "Ipe AI maelekezo ya kazi (kwa maneno yako mwenyewe au yakiwa yamebandikwa, bila taarifa binafsi) na tarehe ya kuwasilisha. Uliza: \"Gawa hii katika hatua ndogo ninazoweza kufanya kwa dakika 30 kila moja, na tarehe kwa kila hatua, nikimaliza siku mbili mapema.\"",
            "Soma hatua hizo na uhakikishe zinaendana na kile mwalimu wako aliomba. Maelekezo na rubriki ya mwalimu wako daima yanashinda mpango wa AI."
          ],
          steps: ["Toa maelekezo na tarehe ya kuwasilisha.", "Omba hatua za dakika 30 zenye tarehe.", "Iombe imalize siku mbili mapema.", "Kagua hatua dhidi ya rubriki ya mwalimu wako."],
          words: [["Rubriki", "orodha ambayo mwalimu wako anatumia kutoa alama kwa kazi."], ["Hatua muhimu", "lengo dogo njiani kuelekea kumaliza lengo kubwa."]],
          slides: [
            { title: "Mradi mkubwa, hatua ndogo", bullets: ["Kazi kubwa sana zinatisha", "Hatua ndogo zinawezekana"] },
            { title: "Iombe AI iugawe", bullets: ["Hatua za dakika 30", "Tarehe kwa kila moja", "Maliza siku mbili mapema"] },
            { title: "Rubriki inashinda", bullets: ["Kagua hatua dhidi ya maelekezo", "Sheria za mwalimu wako zinakuja kwanza"] }
          ],
          tryIt: "Chukua kazi moja kubwa uliyonayo sasa au uliyokuwa nayo hivi karibuni. Iombe AI iigawe katika hatua za dakika 30 zenye tarehe. Zikague dhidi ya maelekezo na urekebishe hatua yoyote isiyoendana nayo.",
          youCanNow: "kugeuza kazi kubwa kuwa hatua ndogo zenye tarehe.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini uiombe AI hatua zimalizike siku mbili mapema?", options: ["Walimu wanatoa alama za ziada", "Inaufanya mradi uwe mfupi", "AI inafanya kazi haraka zaidi hivyo", "Inaacha muda kwa mambo yasiyotarajiwa au marekebisho"], answer: 3, why: "Kumaliza mapema kunakupa nafasi kama kitu kitachukua muda zaidi ya ulivyopanga." },
            { objective: "O2", q: "Hatua za AI zinaruka orodha ya vyanzo (bibliografia) anayoitaka mwalimu wako. Ufanye nini?", options: ["Kuiacha, kwa kuwa AI inajua zaidi", "Kuongeza hatua kwa ajili yake, kwa sababu maelekezo ya mwalimu yanashinda", "Kumwomba rafiki aifanye", "Kuanza mradi mwingine"], answer: 1, why: "Maelekezo na rubriki ya mwalimu wako daima yanashinda mpango wa AI." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuelewa usomaji mgumu",
          minutes: 5,
          goal: "Tumia AI kuelewa maandishi magumu huku ukiyasoma wewe mwenyewe.",
          text: [
            "Baadhi ya masomo ni magumu: lugha ya zamani, maneno ya sayansi au aya ndefu. AI inaweza kukusaidia kuyaelewa, ilimradi bado unasoma maandishi yenyewe.",
            "Jaribu hivi: soma aya kwanza. Kisha iulize AI: \"Nieleze aya hii kwa maneno rahisi\" au \"Maneno haya 3 yana maana gani?\" au \"Nipe maswali 3 ya kufikiria ninaposoma.\"",
            "Muhtasari wa AI unaweza kuacha mambo au kuyakosea, na hauwezi kuchukua nafasi ya kusoma kwa ajili ya darasa. Utumie kufungua maandishi, kisha urudi uyasome tena."
          ],
          steps: ["Soma aya wewe mwenyewe kwanza.", "Iombe AI iieleze kwa urahisi au ifafanue maneno magumu.", "Omba maswali ya kukuongoza katika kusoma.", "Soma aya tena ukiwa na uelewa mpya."],
          words: [["Muhtasari", "toleo fupi la mambo makuu."], ["Muktadha", "maneno na mawazo yanayozunguka neno ambayo yanasaidia kueleza maana yake."]],
          slides: [
            { title: "Soma kwanza", bullets: ["Jaribu aya wewe mwenyewe", "Weka alama kwenye maneno usiyoyajua"] },
            { title: "Kisha iulize AI", bullets: ["\"Nieleze hii kwa maneno rahisi\"", "\"Maneno haya 3 yana maana gani?\"", "\"Nipe maswali ya kuniongoza ninaposoma\""] },
            { title: "Kisha soma tena", bullets: ["Muhtasari wa AI unaweza kuacha mambo", "Hauchukui nafasi ya kusoma"] }
          ],
          tryIt: "Chukua aya moja ngumu kutoka usomaji wa darasani. Isome, iombe AI iieleze kwa maneno rahisi na ifafanue maneno mawili magumu, kisha isome tena na uandike sentensi moja kwa maneno yako mwenyewe kuhusu maana yake.",
          youCanNow: "kutumia AI kufungua usomaji mgumu kisha kuuelewa wewe mwenyewe.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini muhtasari wa AI hauwezi kuchukua nafasi ya kusoma?", options: ["Muhtasari daima ni mrefu mno", "Walimu wanaweza kuona skrini yako", "Unaweza kuacha mambo au kuyakosea", "AI haiwezi kusoma Kiingereza"], answer: 2, why: "Muhtasari wa AI unaweza kuacha au kukosea maelezo, kwa hiyo bado unasoma maandishi." },
            { objective: "O3", q: "Umekwama kwenye aya iliyojaa maneno ya sayansi. Hatua bora ya kwanza ni ipi?", options: ["Kuisoma wewe mwenyewe, kisha kuiuliza AI maneno magumu yana maana gani", "Kuiomba AI ifupishe kitabu chote", "Kuruka usomaji", "Kunakili muhtasari wa AI kwenye maelezo yako"], answer: 0, why: "Soma kwanza, tumia AI kufungua sehemu ngumu, kisha soma tena." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujipanga",
        questions: [
          { objective: "O1", q: "Uipe AI nini ili ikusaidie kupanga wiki yako?", options: ["Nywila yako", "Kinachotakiwa kuwasilishwa na nyakati zako zisizobadilika", "Anwani ya nyumbani kwako", "Hakuna kitu"], answer: 1, why: "AI inahitaji kazi zako na nyakati zako ili itengeneze mpango wenye manufaa." },
          { objective: "O1", q: "AI imetengeneza mpango wa wiki usioendana na ratiba yako ya mazoezi. Wewe:", options: ["Unaufuata hata hivyo", "Unaacha mazoezi", "Unafuta kalenda yako", "Unaubadilisha uendane na maisha yako halisi"], answer: 3, why: "Mpango ni rasimu; wewe unaufanya uendane." },
          { objective: "O2", q: "Rubriki ni nini?", options: ["Orodha ambayo mwalimu wako anatumia kutoa alama kwa kazi", "Aina ya fumbo", "App ya kujisomea", "Nywila"], answer: 0, why: "Rubriki inaonyesha mwalimu wako anatoa alama kwa nini." },
          { objective: "O2", q: "Hatua za mradi kutoka AI zinaacha sehemu ambayo mwalimu wako aliitaka. Wewe:", options: ["Unaruka sehemu hiyo", "Unaiomba AI ikupe alama", "Unaiongeza, kwa sababu maelekezo ya mwalimu yanashinda", "Unabadilisha tarehe za kuwasilisha"], answer: 2, why: "Maelekezo ya mwalimu yanakuja kwanza." },
          { objective: "O3", q: "Njia bora ya kutumia AI na usomaji mgumu ni ipi?", options: ["Kuruka usomaji na kutumia muhtasari wa AI tu", "Kuiomba AI ifanye jaribio", "Kuusoma kwanza, kuiomba AI ieleze, kisha kuusoma tena", "Kutousoma kamwe"], answer: 2, why: "AI inakusaidia kuelewa, lakini bado unasoma." }
        ]
      }
    },
    {
      name: "Sura 2: Kuandika na kujisomea kwa akili zaidi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata maoni kuhusu maandishi yako mwenyewe",
          minutes: 5,
          goal: "Iombe AI maoni kuhusu rasimu uliyoandika, kisha uirekebishe wewe mwenyewe.",
          text: [
            "Kuandika rasimu yako mwenyewe ndipo kujifunza kunapotokea. Kisha AI inaweza kufanya kazi kama kocha: inaweza kuonyesha sentensi zisizo wazi, ushahidi unaokosekana au makosa ya sarufi.",
            "Omba maoni, si kuandikiwa upya: \"Hii ndiyo aya yangu. Usiiandike upya. Niambie mambo 3 ya kuboresha na kwa nini.\" Kisha wewe unafanya mabadiliko kwa maneno yako mwenyewe.",
            "Kama mwalimu wako haruhusu maoni ya AI, tumia msaada mwingine: mwanafunzi mwenzako, kituo cha uandishi cha shule, au mwalimu wako wakati wa saa zake za kuonana na wanafunzi."
          ],
          steps: ["Andika rasimu yako mwenyewe kwanza.", "Hakikisha mwalimu wako anaruhusu maoni ya AI.", "Omba mambo 3 ya kuboresha, si kuandikiwa upya.", "Rekebisha kwa maneno yako mwenyewe."],
          words: [["Rasimu", "toleo la mwanzo la maandishi yako."], ["Kurekebisha", "kuboresha maandishi yako kwa kubadilisha mawazo, mpangilio au maneno."]],
          slides: [
            { title: "Andika kwanza", bullets: ["Rasimu yako ndipo unapojifunza", "AI inakuja baadaye, kama kocha"] },
            { title: "Omba maoni, si kuandikiwa upya", bullets: ["\"Usiiandike upya\"", "\"Niambie mambo 3 ya kuboresha na kwa nini\""] },
            { title: "Wewe unafanya mabadiliko", bullets: ["Rekebisha kwa maneno yako mwenyewe", "AI hairuhusiwi? Muulize mwanafunzi mwenzako au mwalimu"] }
          ],
          tryIt: "Chukua aya uliyoandika (kama mwalimu wako anaruhusu maoni ya AI). Omba mambo 3 ya kuboresha bila kuandikiwa upya. Fanya mabadiliko wewe mwenyewe na ulinganishe matoleo hayo mawili.",
          youCanNow: "kupata maoni kutoka AI na kurekebisha maandishi yako mwenyewe.",
          quickCheck: [
            { objective: "O4", q: "\"Maoni, si kuandikiwa upya\" ina maana gani?", options: ["AI inakuandikia toleo jipya", "AI inatoa alama kwa kazi yako", "AI inafuta rasimu yako", "AI inaonyesha cha kuboresha na wewe unafanya mabadiliko"], answer: 3, why: "Maoni yanakuambia cha kurekebisha; wewe unarekebisha kwa maneno yako mwenyewe." },
            { objective: "O4", q: "Mwalimu wako haruhusu maoni ya AI kwa insha hii. Ufanye nini?", options: ["Kutumia AI hata hivyo", "Kumwomba mwanafunzi mwenzako, kituo cha uandishi au mwalimu wako maoni", "Kuwasilisha rasimu ya kwanza bila kuisoma", "Kuiacha AI iiandike upya kwa siri"], answer: 1, why: "AI isiporuhusiwa, watu wengine wanaweza kukupa maoni." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza mpango wa kujisomea kwa mtihani",
          minutes: 5,
          goal: "Tengeneza mpango wa kujisomea wa siku kwa siku na maswali ya mazoezi kwa mtihani halisi.",
          text: [
            "Kukariri kila kitu usiku wa kabla ya mtihani kwa kawaida hakufanyi kazi vizuri. Kujisomea kidogo kila siku na kujipima ndiko kunakofanya kazi.",
            "Iambie AI tarehe ya mtihani, mada na muda ulionao kila siku: \"Mtihani wangu wa biolojia ni Ijumaa kuhusu seli na DNA. Nina dakika 30 kila siku. Tengeneza mpango wa kujisomea wenye jaribio la mazoezi kila siku.\"",
            "Omba maswali ya mazoezi yenye majibu yaliyofichwa, yajibu wewe mwenyewe, kisha yakague dhidi ya maelezo yako au kitabu cha kiada. Tumia muda zaidi kwa maswali uliyokosea."
          ],
          steps: ["Iambie AI tarehe ya mtihani, mada na muda wako wa kila siku.", "Omba mpango wa siku kwa siku wenye mazoezi.", "Jibu maswali ya mazoezi kabla ya kuona majibu.", "Kagua dhidi ya maelezo yako na uzingatie ulichokosea."],
          words: [["Kukariri usiku wa mwisho", "kujaribu kujifunza kila kitu muda mfupi kabla ya mtihani."], ["Mazoezi yaliyotawanywa", "kujisomea kidogo kwa siku kadhaa badala ya yote kwa mara moja."]],
          slides: [
            { title: "Kidogo na mara kwa mara kunashinda kukariri", bullets: ["Jisomee kidogo kila siku", "Jipime unavyoendelea"] },
            { title: "Omba mpango", bullets: ["Tarehe ya mtihani na mada", "Dakika ulizonazo kila siku", "Jaribio la mazoezi kila siku"] },
            { title: "Fanya mazoezi kwa njia sahihi", bullets: ["Jibu kabla ya kuangalia", "Kagua dhidi ya maelezo yako", "Zingatia ulichokosea"] }
          ],
          tryIt: "Chagua mtihani halisi unaokuja. Iombe AI mpango wa kujisomea wa siku kwa siku ukitumia muda ulionao kweli. Fanya maswali ya mazoezi ya siku ya kwanza na uyakague dhidi ya maelezo yako.",
          youCanNow: "kutengeneza mpango wa kujisomea na kufanya mazoezi kwa AI kwa mtihani halisi.",
          quickCheck: [
            { objective: "O5", q: "Kipi kinafanya kazi vizuri kuliko kukariri usiku wa kabla ya mtihani?", options: ["Kusoma maelezo tena mara moja", "Kujisomea kidogo kila siku na kujipima", "Kulala na kitabu chako", "Kusoma mpango wa AI tu"], answer: 1, why: "Kujisomea kidogo kila siku na kujipima kunakusaidia kukumbuka zaidi." },
            { objective: "O5", q: "Umekosea maswali 3 kati ya 5 ya mazoezi kuhusu sehemu za seli. Ufanye nini baadaye?", options: ["Kuendelea na mada mpya", "Kufuta maswali", "Kuiomba AI majibu na kuyakariri", "Kutumia muda zaidi kwa sehemu za seli na kukagua maelezo yako"], answer: 3, why: "Weka muda wako wa kujisomea kwenye ulichokosea." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutumia AI kwa uaminifu shuleni",
          minutes: 5,
          goal: "Fuata sheria za AI za shule yako na useme jinsi ulivyotumia AI.",
          text: [
            "Shule zina sheria tofauti za AI. Baadhi zinairuhusu kwa kutafuta mawazo na kupata maoni, baadhi zinataka useme ulipoitumia, na baadhi zinaikataza kwa kazi fulani. Sheria ya mwalimu wako kwa kazi hiyo ndiyo inayohesabika.",
            "Kamwe usiwasilishe kazi iliyoandikwa na AI kama yako wakati hairuhusiwi. Inaweza kuhesabiwa kama udanganyifu, na unakosa kujifunza. Kama AI ilikusaidia, sema jinsi: \"Nilitumia AI kutengeneza maswali ya mazoezi na kupata maoni kuhusu aya yangu ya pili.\"",
            "AI inaweza kubuni ukweli na vyanzo. Kamwe usinakili nukuu au jina la kitabu kutoka AI kwenye kazi yako bila kukipata wewe mwenyewe. Usiweke taarifa binafsi katika zana za AI, na tumia akaunti yako ya shule kwa zana za shule."
          ],
          steps: ["Soma sheria ya AI ya mwalimu wako kwa kazi hii.", "Tumia AI kwa njia zinazoruhusiwa tu.", "Andika mstari mmoja unaosema jinsi ulivyoitumia.", "Kagua ukweli au chanzo chochote wewe mwenyewe kabla ya kukitumia."],
          words: [["Uadilifu wa kitaaluma", "kuwa mwaminifu katika kazi za shule: unachowasilisha kinaonyesha ulichofanya wewe."], ["Kutaja chanzo", "kusema taarifa ilitoka wapi."]],
          slides: [
            { title: "Sheria zinatofautiana", bullets: ["Baadhi zinaruhusu AI kwa mawazo au maoni", "Baadhi zinaikataza kwa kazi fulani", "Sheria ya mwalimu wako ndiyo inayohesabika"] },
            { title: "Kuwa wazi kuhusu msaada wa AI", bullets: ["Kamwe usidai kazi ya AI ni yako", "Sema jinsi AI ilivyosaidia, kwa mstari mmoja"] },
            { title: "Kagua ukweli na vyanzo", bullets: ["AI inaweza kubuni nukuu na vitabu", "Tafuta kila chanzo wewe mwenyewe", "Hakuna taarifa binafsi katika AI"] }
          ],
          tryIt: "Kazi ya mwisho: kwa mtihani au mradi halisi ndani ya wiki mbili zijazo, tengeneza mpango wa kujisomea wa siku kwa siku kwa AI, fanya maswali 5 ya mazoezi yenye majibu yaliyofichwa, yakague dhidi ya maelezo yako, na uandike mstari mmoja kuhusu jinsi ulivyofuata sheria za AI za shule yako.",
          youCanNow: "kutumia AI shuleni kwa njia zinazoruhusiwa, za uaminifu na zinazokusaidia kweli kujifunza.",
          quickCheck: [
            { objective: "O6", q: "Sheria ya AI ya nani inahesabika kwa kazi fulani?", options: ["Ya rafiki yako", "Ya kampuni ya AI", "Ya mwalimu wako", "Yoyote iliyo rahisi zaidi"], answer: 2, why: "Shule zinatofautiana, na sheria ya mwalimu wako kwa kazi hiyo ndiyo inayohesabika." },
            { objective: "O6", q: "AI inakupa nukuu nzuri sana kwa insha yako. Ufanye nini kabla ya kuitumia?", options: ["Kuitafuta katika chanzo halisi wewe mwenyewe", "Kuitumia; AI haikosei", "Kubadilisha maneno machache", "Kuongeza namba ya ukurasa ya kubuni"], answer: 0, why: "AI inaweza kubuni nukuu na vyanzo, kwa hiyo unavitafuta wewe mwenyewe kwanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuandika na kujisomea kwa akili zaidi",
        questions: [
          { objective: "O4", q: "Ombi lipi linaleta maoni yenye manufaa bila kukufanyia kazi yako?", options: ["\"Usiiandike upya. Niambie mambo 3 ya kuboresha na kwa nini.\"", "\"Niandikie insha yangu upya\"", "\"Niandikie\"", "\"Ifanye iwe kamili\""], answer: 0, why: "Kuomba maoni kunafanya maandishi yabaki yako." },
          { objective: "O4", q: "Mwalimu wako haruhusu maoni ya AI. Unaweza:", options: ["Kutumia AI kwa siri", "Kuacha kuandika", "Kunakili kwa rafiki", "Kumwuliza mwanafunzi mwenzako, kituo cha uandishi au mwalimu"], answer: 3, why: "Watu wengine wanaweza kutoa maoni ndani ya sheria." },
          { objective: "O5", q: "Mazoezi yaliyotawanywa ni nini?", options: ["Kujisomea usiku mzima kabla ya mtihani", "Kujisomea kidogo kwa siku kadhaa", "Kuacha kujisomea", "Kujisomea angani"], answer: 1, why: "Kutawanya kujisomea kwa siku kadhaa kunakusaidia kukumbuka." },
          { objective: "O6", q: "AI inakupa nukuu kutoka kitabu kwa insha yako. Unapaswa:", options: ["Kutafuta nukuu katika kitabu halisi wewe mwenyewe kwanza", "Kuinakili moja kwa moja", "Kubuni namba ya ukurasa", "Kuiuliza AI kama ni ya kweli"], answer: 0, why: "AI inaweza kubuni nukuu; kagua chanzo halisi." },
          { objective: "O6", q: "Sheria ya AI ya nani inahesabika kwa kazi?", options: ["Ya rafiki", "Ya kampuni ya AI", "Ya mwalimu wako", "Ya mtu yeyote"], answer: 2, why: "Mwalimu wako ndiye anayeweka sheria kwa kazi hiyo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mafanikio Shuleni",
    questions: [
      { objective: "O1", q: "Ili kupanga wiki yako kwa AI, orodhesha:", options: ["Nywila zako", "Kazi, tarehe za kuwasilisha na nyakati zisizobadilika", "Namba za simu za marafiki zako", "Hakuna kitu"], answer: 1, why: "Ukweli huo unaiwezesha AI kutengeneza mpango halisi." },
      { objective: "O1", q: "Mpango mzuri wa wiki una:", options: ["Hakuna mapumziko", "Michezo ya video tu", "Kila kitu Jumapili usiku", "Kazi ngumu zaidi kwanza na mapumziko"], answer: 3, why: "Mapumziko na kufanya kazi ngumu kwanza kunakusaidia kumaliza." },
      { objective: "O1", q: "Baada ya AI kutengeneza mpango, unapaswa:", options: ["Kuupuuza", "Kuwashirikisha watu usiowajua", "Kuufuta", "Kuubadilisha uendane na maisha yako na kuunakili kwenye kalenda"], answer: 3, why: "Mpango unasaidia tu unapoendana nawe na unaweza kuuona." },
      { objective: "O2", q: "Kwa nini ugawe mradi mkubwa katika hatua?", options: ["Unaufanya uwe mrefu zaidi", "Hatua ndogo zinawezekana", "Walimu wanachukia hivyo", "Inatakiwa kwa sheria"], answer: 1, why: "Hatua ndogo zinafanya kazi kubwa iwezekane." },
      { objective: "O2", q: "Ombi zuri la kugawa mradi ni:", options: ["\"mradi\"", "\"Nifanyie mradi wangu\"", "\"Gawa hii katika hatua za dakika 30 zenye tarehe, nikimaliza siku mbili mapema\"", "\"Uufanye upotee\""], answer: 2, why: "Linaweka ukubwa wa hatua, tarehe na muda wa akiba." },
      { objective: "O2", q: "Kama hatua za AI na rubriki ya mwalimu wako hazikubaliani:", options: ["Fuata rubriki", "Fuata AI", "Usifanye chochote kati ya hivyo", "Muulize mtu usiyemjua"], answer: 0, why: "Mwalimu wako anatoa alama kwa kutumia rubriki." },
      { objective: "O3", q: "Unapotumia AI na usomaji mgumu, kwanza:", options: ["Ruka moja kwa moja kwenye muhtasari", "Soma aya wewe mwenyewe", "Funga kitabu", "Iombe AI majibu ya jaribio"], answer: 1, why: "Kusoma kwanza kunamaanisha AI inakusaidia kuelewa, si kuruka." },
      { objective: "O3", q: "Kwa nini muhtasari wa AI hauwezi kuchukua nafasi ya usomaji?", options: ["Ni mrefu mno", "Unagharimu pesa", "Daima ni kamili", "Unaweza kuacha au kukosea mambo"], answer: 3, why: "Muhtasari unaweza kuacha au kupotosha sehemu muhimu." },
      { objective: "O3", q: "Prompt ipi ya kusoma inasaidia?", options: ["\"Maneno haya 3 yana maana gani?\"", "\"Niandikie ripoti yangu ya kitabu\"", "\"Nipe alama yangu\"", "\"Nisomee milele\""], answer: 0, why: "Kufafanua maneno magumu kunakusaidia kuelewa." },
      { objective: "O4", q: "Kujifunza katika uandishi kunatokea zaidi wapi?", options: ["Kunakili maandishi ya AI", "Kuchapisha ukurasa", "Kuandika rasimu yako mwenyewe na kuirekebisha", "Kuchagua aina ya herufi"], answer: 2, why: "Kuandika rasimu na kurekebisha kunajenga ujuzi." },
      { objective: "O4", q: "AI inapotoa maoni, nani anafanya mabadiliko?", options: ["AI", "Mtu usiyemjua", "Wewe, kwa maneno yako mwenyewe", "Hakuna mtu"], answer: 2, why: "Kurekebisha wewe mwenyewe kunafanya kazi ibaki yako." },
      { objective: "O4", q: "Kurekebisha kuna maana gani?", options: ["Kuboresha maandishi yako kwa kuyabadilisha", "Kuyafuta", "Kuyachapisha", "Kuyawasilisha kwa kuchelewa"], answer: 0, why: "Kurekebisha ni kuboresha rasimu." },
      { objective: "O5", q: "Tabia ipi ya kujisomea inafanya kazi vizuri zaidi?", options: ["Kukariri usiku wa kabla ya mtihani", "Kusoma tena tu", "Kutojisomea", "Kidogo kila siku na kujipima"], answer: 3, why: "Mazoezi yaliyotawanywa pamoja na kujipima yanafanya kazi vizuri." },
      { objective: "O5", q: "Uiambie AI vitu vipi vitatu kwa mpango wa kujisomea?", options: ["Nywila yako, anwani na umri", "Tarehe ya mtihani, mada na muda wa kila siku", "Rangi, chakula na wimbo unaopenda", "Hakuna kitu"], answer: 1, why: "Hivyo vinaiwezesha AI kutengeneza mpango unaokufaa." },
      { objective: "O5", q: "Baada ya maswali ya mazoezi, tumia muda zaidi kwa:", options: ["Yale uliyokosea", "Yale uliyopata sahihi", "Hakuna kati yake", "Mada mpya za kubahatisha"], answer: 0, why: "Kuzingatia makosa kunaziba mapengo." },
      { objective: "O6", q: "Kuwasilisha kazi iliyoandikwa na AI wakati hairuhusiwi:", options: ["Ni sawa kila wakati", "Kunatakiwa", "Kunaweza kuhesabiwa kama udanganyifu", "Ni alama za ziada"], answer: 2, why: "Kunavunja sheria na kunaruka kujifunza." },
      { objective: "O6", q: "Mstari mzuri kuhusu matumizi ya AI ni:", options: ["Hakuna kitu kabisa", "\"Nilitumia AI kutengeneza maswali ya mazoezi na kupata maoni kuhusu aya ya 2\"", "\"AI ilifanya kila kitu\" wakati haikufanya", "\"Situmii kompyuta kamwe\""], answer: 1, why: "Unasema kwa uaminifu jinsi AI ilivyosaidia." },
      { objective: "O6", q: "AI inaorodhesha kitabu kama chanzo kwa mradi wako. Unapaswa:", options: ["Kukinakili kwenye orodha yako", "Kubuni mwandishi", "Kupuuza vyanzo vyote", "Kutafuta kitabu hicho wewe mwenyewe kabla ya kukitumia"], answer: 3, why: "AI inaweza kubuni vyanzo." },
      { objective: "O6", q: "Utumie akaunti ipi kwa zana zilizoidhinishwa na shule?", options: ["Akaunti ya rafiki", "Akaunti bandia", "Hakuna akaunti kamwe", "Akaunti yako ya shule"], answer: 3, why: "Zana za shule zimewekwa kwa ajili ya akaunti yako ya shule." },
      { objective: "O6", q: "Kabla ya kujisajili kwenye app mpya ya AI unapaswa:", options: ["Kutumia tarehe yoyote ya kuzaliwa", "Kukagua sheria yake ya umri na kuzungumza na mzazi au mlezi", "Kuipa nywila yako ya shule", "Kuruka masharti"], answer: 1, why: "Sheria za umri na ruhusa ya mzazi au mlezi zinakuja kwanza." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      6,
      7,
      9,
      10,
      12,
      14,
      15
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mpango wa kujisomea unaendana na maisha halisi",
        objective: "O5",
        notYet: "Hakuna mpango, au unapuuza masomo, shughuli na kazi.",
        meets: "Mpango wa siku kwa siku hadi tarehe ya mtihani unaozunguka nyakati zisizobadilika.",
        exceeds: "Mpango ulibadilishwa baada ya siku ya kwanza kulingana na kile kilichokosewa."
      },
      {
        name: "Kupanga muda wa wiki",
        objective: "O1",
        notYet: "Muda wa kujisomea hauko kwenye kalenda au shajara.",
        meets: "Vipindi vya kujisomea vimenakiliwa kwenye shajara au kalenda pamoja na mapumziko.",
        exceeds: "Mada ngumu zaidi zimepangwa kwanza katika kila kipindi."
      },
      {
        name: "Mazoezi na kukagua",
        objective: "O5",
        notYet: "Majibu yaliangaliwa kabla ya kujaribu, au hayakukaguliwa.",
        meets: "Maswali matano ya mazoezi yalijibiwa kwanza, kisha yakakaguliwa dhidi ya maelezo.",
        exceeds: "Majibu yaliyokosewa yameorodheshwa pamoja na cha kujisomea zaidi."
      },
      {
        name: "Matumizi ya AI kwa uaminifu",
        objective: "O6",
        notYet: "Hakuna mstari kuhusu matumizi ya AI, au AI ilitumiwa kwa njia ambayo mwalimu hairuhusu.",
        meets: "Mstari mmoja ulio wazi kuhusu jinsi AI ilivyotumiwa, unaoendana na sheria ya mwalimu.",
        exceeds: "Pia unataja ukweli au chanzo chochote kutoka AI kilichokaguliwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti alama bora ya mtihani au mradi baada ya kutumia mpango wao wa kujisomea (ufuatiliaji wa siku 30)",
      "Wanafunzi wanaoripoti kuwasilisha miradi mikubwa kwa wakati katika ufuatiliaji wa siku 30",
      "Walimu au programu zinazoripoti matatizo machache ya sheria yanayohusiana na AI miongoni mwa wanafunzi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, kompyuta ya shule au kompyuta ya maktaba yenye intaneti",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kutumia, ikiwezekana kupitia akaunti ya shule",
      "Shajara, Google Calendar au app ya kalenda ya shule",
      "Maelezo ya darasani na maelekezo ya mtihani au mradi mmoja halisi",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Shiriki sera ya AI ya shule yako mwanzoni na uwaombe wanafunzi walete sheria ya kila mwalimu kwa mtihani au mradi waliouchagua.",
      "Waambie wanafunzi watumie mtihani au mradi halisi unaokuja ili mpango uwe na manufaa mara moja.",
      "Wakumbushe wanafunzi wasibandike kamwe taarifa binafsi, na watumie akaunti za shule kwa zana za shule.",
      "Fuatilia baada ya wiki moja kuona kama wanafunzi walifuata mipango yao ya kujisomea na muirekebishe pamoja.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
