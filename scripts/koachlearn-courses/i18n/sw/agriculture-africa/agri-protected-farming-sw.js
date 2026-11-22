"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-protected-farming.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_GAP_GH = { name: "FAO: Kanuni Bora za Kilimo kwa Mboga za Kitalu Nyumba: Misingi kwa Maeneo ya Hali ya Hewa ya Mediterania (Plant Production and Protection Paper 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey na wenzake (2017): Kilimo cha mboga chini ya kifuniko Afrika Kusini mwa Sahara: mipaka na matarajio kwa wakulima wadogo. Mapitio (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe: Mdudu wa Mwezi: Kipekecha majani ya nyanya, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Bodi ya Kudhibiti Bidhaa za Kuua Wadudu (Pest Control Products Board, Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Shirika la Kitaifa la Usimamizi na Udhibiti wa Chakula na Dawa (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Mamlaka ya Kulinda Mazingira (Environmental Protection Authority, Ghana)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Huduma ya Ukaguzi wa Afya ya Mimea Kenya (KEPHIS): mbegu na miche iliyothibitishwa", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming-sw",
  lang: "sw",
  translationOf: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Kilimo cha Kitalu Nyumba na Kilimo cha Kufunikwa kwa Mazao ya Thamani Kubwa",
  skills: "Kuamua lini kilimo cha kufunikwa kinalipa, Kulinganisha kitalu nyumba, nyavu za kivuli na mahandaki na kukagua ahadi za wauzaji, Kukuza miche na kupanga umwagiliaji-mbolea kwa matone, Kudhibiti joto, unyevu, wadudu na usafi, Kuandika mpango wa biashara wenye muda wa kurudisha mtaji",
  outcome: "kuandika mpango wa biashara wa kulima zao moja la thamani kubwa (nyanya, pilipili hoho au matango) ndani ya kitalu nyumba, nyumba ya nyavu za kivuli au handaki shambani kwako: kama linafaa maji, soko na ujuzi wako, muundo na nukuu tatu za bei, mpango wa zao na wa umwagiliaji-mbolea, utaratibu wa wadudu na usafi, na gharama, mapato, faida ghafi na muda wa kurudisha mtaji.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa kibiashara wanaokua, vijana wajasiriamali wa kilimo, vikundi vya vijana na wanawake, na maafisa ugani wanaofikiria kitalu nyumba (greenhouse), nyavu za kivuli au handaki, au walio nacho tayari lakini hakilipi. Mifano ni nyanya, pilipili hoho na matango nchini Kenya, Nigeria, Ghana na Senegal.",
    "Sura ya 1 inakusaidia kuamua na kujenga: lini kilimo cha kufunikwa kinalipa na lini hakilipi, miundo mikuu na jinsi ya kulinganisha nukuu za bei, jinsi ya kutambua wauzaji wanaoahidi kupita kiasi, na jinsi ya kuchagua zao na kukuza miche safi. Sura ya 2 inahusu kukiendesha kama biashara: misingi ya umwagiliaji-mbolea kwa matone, kudhibiti joto, unyevu, magonjwa na wadudu, kuweka muundo safi, na kuandika mpango wa biashara wenye muda wa kurudisha mtaji.",
    "Kitalu nyumba ni uwekezaji mkubwa, na vingi vimeachwa vitupu kwa sababu hesabu, maji au soko havikufaa. Kila kiasi cha pesa katika kozi hii ni mfano wa kubuni wa kufanyia mazoezi ya hesabu; tumia nukuu zako na bei za soko lako, na zungumza na mtaalamu wa kilimo (agronomist), afisa ugani wako na mshauri unayemwamini kabla ya kusaini au kulipa. Jaribio fupi linafuata kila somo, jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa biashara wa kilimo cha kufunikwa kwa zao moja shambani kwako: majibu yako kwa masharti matano ya \"je, kinalipa?\" (maji, soko, ujuzi, mtaji, hali ya hewa), muundo utakaotumia pamoja na angalau nukuu tatu zilizolinganishwa na ukaguzi wa wauzaji uliofanywa, zao na aina yake, mpango wa kitalu cha miche na wa umwagiliaji-mbolea uliokubaliwa na mtaalamu wa kilimo, utaratibu wa kila wiki wa wadudu, hali ya hewa ndani na usafi, na gharama, mavuno yanayotarajiwa, mapato, faida ghafi kwa kila mzunguko, muda wa kurudisha mtaji, na kinachotokea kwa muda huo bei ikishuka kwa robo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, vijana wajasiriamali wa kilimo, vikundi vya vijana na wanawake na maafisa ugani barani Afrika wanaofikiria, au walio nacho tayari, kitalu nyumba, nyavu za kivuli au handaki kwa nyanya, pilipili hoho, matango au mboga nyingine za thamani kubwa.",
    startingPoint: "Wamelima mboga shambani wazi. Baadhi wameuziwa vifaa vya kitalu nyumba kwa ahadi kubwa za mavuno; baadhi wanacho kimoja kilichokuwa na matatizo ya wadudu, magonjwa au soko. Wachache wamelinganisha nukuu, wamepanga umwagiliaji-mbolea au wamekokotoa muda wa kurudisha mtaji.",
    gap: "Kilimo cha kufunikwa kinaweza kuleta mavuno mengi zaidi, safi zaidi na ya kawaida zaidi, lakini kinagharimu sana mwanzoni, kinahitaji ujuzi na maji ya uhakika, kinashika joto na magonjwa, na kinalipa tu kukiwa na soko la uhakika. Wanafunzi wanahitaji kuamua kama kinawafaa, kuchagua na kukagua muundo, kuendesha zao vizuri na kuthibitisha kwa hesabu kwamba kinaweza kurudisha mtaji kabla kifuniko hakijachakaa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanasoma Kiswahili au Kiingereza kama lugha ya pili",
      "Hesabu: hesabu rahisi kwa kikokotoo cha simu; kila hesabu inaonyeshwa hatua kwa hatua",
      "Pesa: namba zote ni mifano ya kubuni; wanafunzi wanatumia nukuu na bei zao kwa sarafu ya nchi yao (KES, NGN, GHS au XOF)",
      "Usalama: hakuna mchanganyiko wa mbolea, hakuna majina wala viwango vya dawa za wadudu; wanafunzi wanafanya kazi na mtaalamu wa kilimo na wanafuata lebo na mamlaka ya kitaifa",
      "Fedha: hakuna ushauri wa uwekezaji; wanafunzi wanasoma mikataba yote na kumuuliza mshauri wanayemwamini kabla ya kulipa"
    ],
    prerequisites: "Hakuna. \"Umwagiliaji na Usimamizi wa Maji\" (matone na pampu) na \"Udhibiti Jumuishi wa Wadudu na Udhibiti wa Wadudu kwa Njia za Asili\" zinasaidia pamoja na kozi hii."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa shamba lako mwenyewe", action: "kukagua masharti matano ya kilimo cha kufunikwa (maji, soko, ujuzi, mtaji na hali ya hewa) na kuamua kama uendelee", standard: "ukitoa ndiyo au hapana kwa kila moja pamoja na sababu" },
    { id: "O2", condition: "Unapochagua muundo", action: "kulinganisha nukuu za kitalu nyumba, nyavu za kivuli au handaki na kukagua ahadi za kila muuzaji", standard: "ukitumia angalau nukuu tatu na kuomba wakulima wa kutembelea na dhamana iliyoandikwa" },
    { id: "O3", condition: "Kwa zao moja unalochagua", action: "kupanga aina ya zao, kitalu cha miche, upandikizaji na umwagiliaji-mbolea kwa matone pamoja na mtaalamu wa kilimo", standard: "kama mpango wenye tarehe kwa mzunguko mmoja wa zao" },
    { id: "O4", condition: "Zao likishapandwa", action: "kuendesha utaratibu wa kila siku na kila wiki wa joto, unyevu, wadudu na usafi", standard: "ukishughulikia madirisha ya hewa, ukaguzi wa wadudu, mitego na sheria za kuingia kila wiki" },
    { id: "O5", condition: "Ukipewa nukuu zako na bei za soko", action: "kukokotoa gharama, mapato, faida ghafi na muda wa kurudisha mtaji kwa zao hilo", standard: "na kupima kinachotokea bei ikishuka kwa robo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuamua na kujenga",
      lessons: [
        {
          title: "Lini kilimo cha kufunikwa kinalipa, na lini hakilipi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kagua masharti matano ya kilimo cha kufunikwa kwenye shamba lako na uamue kama uendelee.",
          text: [
            "Kilimo cha kufunikwa ni kulima zao chini ya kifuniko: kitalu nyumba chenye karatasi ya plastiki na nyavu za wadudu, nyumba ya nyavu za kivuli, au handaki la chini au la kuingia ndani. Kikifanywa vizuri, kinazuia mvua kubwa, mvua ya mawe na wadudu wengi, kinapunguza baadhi ya magonjwa, na kinaleta mavuno mengi zaidi, safi zaidi na ya kawaida zaidi ya mazao ya thamani kubwa kama nyanya, pilipili hoho na matango.",
            "Hakimfai kila mtu. Mapitio ya mwaka 2017 kuhusu kilimo cha kufunikwa Afrika Kusini mwa Sahara yaligundua kwamba hakifai kila hali ya hewa na bado kinahitaji njia nyingine za kudhibiti wadudu, na kwamba ukosefu wa ujuzi, msaada wa kitaalamu na fedha unawazuia wakulima wadogo wengi. Vitalu nyumba vingi nchini Kenya, Nigeria na Ghana viko vitupu baada ya mazao moja au mawili.",
            "Kagua masharti matano kabla ya kutumia pesa. Maji: chanzo cha uhakika na safi mwaka mzima, kwa sababu zao halipati mvua. Soko: wanunuzi watakaochukua mazao yako kila wiki kwa bei ya haki, kama hoteli, duka kubwa, shule au wafanyabiashara wa sokoni, si tu \"sokoni\". Ujuzi: wewe au mfanyakazi aliyefunzwa umwagiliaji-mbolea, upogoaji na ukaguzi wa wadudu, na mtaalamu wa kilimo unayeweza kumpigia. Mtaji: pesa za muundo, zao la kwanza na gharama za miezi kadhaa, bila kuhatarisha chakula cha familia yako. Hali ya hewa: katika nyanda za chini zenye joto kali, kitalu nyumba kilichofungwa kinaweza kupata joto kupita kiasi, kwa hiyo nyavu za kivuli au muundo wenye hewa nzuri unaweza kufaa zaidi."
          ],
          steps: ["Maji: kuna chanzo cha uhakika na safi mwaka mzima?", "Soko: nani atanunua kila wiki, na kwa bei gani?", "Ujuzi: nani ataendesha umwagiliaji-mbolea, upogoaji na ukaguzi wa wadudu, na utampigia mtaalamu gani wa kilimo?", "Mtaji: unaweza kulipia muundo, zao la kwanza na gharama za kuendesha bila kuhatarisha pesa za chakula?", "Hali ya hewa: muundo uliofungwa utapata joto kupita kiasi mahali ulipo?", "Amua: endelea, anza kidogo, au bado."],
          words: [["Kilimo cha kufunikwa", "kulima mazao chini ya kifuniko kama kitalu nyumba, nyavu za kivuli au handaki."], ["Kitalu nyumba (greenhouse)", "fremu iliyofunikwa kwa karatasi ya plastiki na nyavu za wadudu, yenye madirisha ya hewa."], ["Nyavu za kivuli", "nyavu zinazopunguza jua na joto kiasi na kuzuia baadhi ya wadudu na ndege."], ["Handaki", "fremu iliyopinda inayofunikwa kwa plastiki au nyavu; handaki la chini linafunika tuta, la kuingia ndani linafunika kipande cha shamba."]],
          slides: [
            { title: "Kifuniko kinaweza kufanya nini", bullets: ["Kinazuia mvua kubwa, mvua ya mawe na wadudu wengi", "Mavuno mengi zaidi, safi zaidi na ya kawaida zaidi", "Bora kwa mazao ya thamani kubwa"] },
            { title: "Hakimfai kila mtu", bullets: ["Hakifai kila hali ya hewa (mapitio, 2017)", "Bado kinahitaji njia nyingine za kudhibiti wadudu", "Ujuzi, msaada na fedha ndivyo vikwazo vikubwa"] },
            { title: "Masharti matano", bullets: ["Maji mwaka mzima", "Mnunuzi kila wiki", "Ujuzi na mtaalamu wa kilimo", "Mtaji na hali ya hewa inayofaa"] },
            { title: "Uamuzi wako", bullets: ["Endelea", "Anza kidogo (handaki au nyavu za kivuli)", "Bado: rekebisha sharti linalokosekana kwanza"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Andika masharti matano na ujibu kila moja kwa shamba lako kwa ndiyo au hapana na sababu. Kisha andika uamuzi wako: endelea, anza kidogo, au bado, na ungehitaji kubadilisha nini.",
          youCanNow: "kukagua masharti matano ya kilimo cha kufunikwa na kuamua kama kinafaa shamba lako sasa.",
          quickCheck: [
            { objective: "O1", q: "Dalili ipi yenye nguvu zaidi kwamba uko tayari kwa kitalu nyumba?", options: ["Muuzaji anasema kinalipa kwa miezi mitatu", "Jirani yako alinunua kimoja", "Una maji mwaka mzima na mnunuzi anayechukua nyanya kila wiki", "Umeona picha mtandaoni"], answer: 2, why: "Maji ya uhakika na mnunuzi wa kudumu ni masharti mawili kati ya matano yanayofanya kilipe." },
            { objective: "O1", q: "Unalima katika nyanda za chini zenye joto kali. Ukague nini kwanza?", options: ["Kama kitalu nyumba kilichofungwa kitapata joto kupita kiasi, na kama nyavu za kivuli zinafaa zaidi", "Rangi ya plastiki tu", "Hakuna; joto ni zuri kwa mazao yote", "Kama unaweza kulima bila maji"], answer: 0, why: "Miundo iliyofungwa inashika joto; katika maeneo ya joto, hewa nzuri au nyavu za kivuli zinaweza kufaa zaidi." }
          ]
        },
        {
          title: "Vitalu nyumba, nyavu za kivuli na mahandaki: chaguo, gharama na wauzaji",
          objectives: ["O2"],
          minutes: 6,
          goal: "Linganisha angalau nukuu tatu za miundo na ukague ahadi za kila muuzaji.",
          text: [
            "Chaguo kuu: kitalu nyumba (fremu ya mbao au chuma yenye plastiki iliyotibiwa dhidi ya mionzi ya UV juu na nyavu za wadudu pembeni) kinatoa ulinzi mkubwa zaidi na kinagharimu zaidi. Nyumba ya nyavu za kivuli inagharimu kidogo, ina baridi zaidi na inafaa maeneo ya joto na mazao kama pilipili hoho na mboga za majani, lakini haizuii mvua. Mahandaki ya kuingia ndani au ya chini ndiyo njia ya bei nafuu zaidi ya kuanza na kujifunza. Chuma kinadumu kuliko mbao lakini kinagharimu zaidi; mbao zilizotibiwa zinaweza kufaa mchwa wakidhibitiwa. Kifuniko cha plastiki kinachakaa baada ya miaka kadhaa, kwa hiyo uliza kinga yake ya UV imedhaminiwa kwa muda gani.",
            "Gharama zinatofautiana sana kwa ukubwa, vifaa, nchi na kilichojumuishwa, kwa hiyo pata angalau nukuu tatu zilizoandikwa kwa ukubwa ule ule na ulinganishe kipengele kwa kipengele: fremu, kifuniko na nyavu, milango, mfumo wa matone, tangi la maji, kitalu cha miche, ufungaji, mafunzo na ziara za huduma baada ya mauzo. Kwa mfano (namba za kubuni, za kuonyesha njia tu), nukuu A ya KES 380,000 inaweza kujumuisha matone na mafunzo wakati nukuu B ya KES 300,000 haijumuishi, kwa hiyo B si rahisi kwa kweli.",
            "Kuwa makini na wauzaji wanaoahidi kupita kiasi. Dalili za hatari: mavuno au mapato yaliyohakikishwa, \"inarudisha mtaji kwa msimu mmoja\", ahadi ya \"kununua mazao yako\" bila mkataba ulioandikwa, shinikizo la kulipa amana kubwa leo, hakuna wakulima unaoweza kuwatembelea, hakuna dhamana iliyoandikwa, na vifaa vinavyouzwa bila mafunzo wala mpango wa maji. Omba kuwatembelea wakulima wawili waliotumia muundo wa muuzaji huyo kwa angalau misimu miwili. Pata dhamana, tarehe ya kuleta na kilichojumuishwa kwa maandishi, soma mkataba wote, na muulize mshauri unayemwamini kabla ya kulipa."
          ],
          steps: ["Chagua ukubwa unaoweza kuusimamia na kuupatia maji.", "Omba angalau wauzaji watatu nukuu zilizoandikwa kwa ukubwa ule ule.", "Linganisha kipengele kwa kipengele: fremu, kifuniko, nyavu, matone, tangi, kitalu cha miche, ufungaji, mafunzo, huduma baada ya mauzo.", "Omba kila muuzaji wakulima wa kutembelea na uwatembelee wawili wanaotumia muundo wake.", "Pata dhamana, tarehe ya kuleta na vilivyomo kwa maandishi; soma yote na muulize mshauri."],
          words: [["Plastiki iliyotibiwa dhidi ya UV", "plastiki ya kitalu nyumba iliyotengenezwa kustahimili mionzi ya jua (ultraviolet) ili idumu muda mrefu."], ["Nyavu za wadudu", "nyavu laini pembeni na kwenye madirisha ya hewa zinazozuia wadudu wengi lakini zinapitisha hewa."], ["Nukuu ya bei", "bei iliyoandikwa na muuzaji inayoonyesha hasa kilichojumuishwa."], ["Dhamana", "ahadi iliyoandikwa ya muuzaji kutengeneza au kubadilisha vipuri vinavyoharibika ndani ya muda fulani."]],
          slides: [
            { title: "Chaguo", bullets: ["Kitalu nyumba: ulinzi mkubwa zaidi, gharama kubwa zaidi", "Nyavu za kivuli: baridi zaidi, nafuu, haizuii mvua", "Mahandaki: njia nafuu zaidi ya kuanza na kujifunza"] },
            { title: "Linganisha nukuu tatu", bullets: ["Ukubwa ule ule, zilizoandikwa, kipengele kwa kipengele", "Fremu, kifuniko, nyavu, matone, tangi, kitalu cha miche", "Ufungaji, mafunzo, huduma baada ya mauzo"] },
            { title: "Dalili za hatari", bullets: ["Mavuno yaliyohakikishwa au \"inarudisha mtaji kwa msimu mmoja\"", "Ahadi za kununua mazao bila mkataba", "Shinikizo la kulipa amana leo"] },
            { title: "Jilinde", bullets: ["Tembelea wakulima wawili walioutumia misimu 2+", "Dhamana na vilivyomo kwa maandishi", "Soma mkataba wote; muulize mshauri"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Omba angalau wauzaji au mafundi watatu walio karibu nawe nukuu zilizoandikwa kwa muundo wa ukubwa ule ule. Ziweke kwenye jedwali, kipengele kwa kipengele, na uweke alama kile ambacho kila moja inaacha. Andika maswali utakayomuuliza kila muuzaji, pamoja na wakulima wawili unaoweza kuwatembelea.",
          youCanNow: "kulinganisha nukuu za miundo kipengele kwa kipengele na kukagua ahadi za muuzaji kabla ya kulipa.",
          quickCheck: [
            { objective: "O2", q: "Muuzaji anahakikisha tani 10 za nyanya na kurudisha mtaji kwa msimu mmoja, ukilipa amana leo. Unafanya nini?", options: ["Kulipa mara moja kabla ofa haijaisha", "Kulipa nusu na kuamua baadaye", "Kusaini bila kusoma", "Kuiona kama dalili ya hatari, kuomba wakulima wa kutembelea na masharti yaliyoandikwa, na kulinganisha nukuu"], answer: 3, why: "Mavuno yaliyohakikishwa na shinikizo la kulipa leo ni dalili za kawaida za kuahidi kupita kiasi." },
            { objective: "O2", q: "Nukuu B ni nafuu kuliko nukuu A lakini haina mfumo wa matone wala mafunzo. Kipi ni kweli?", options: ["B ni wazi ndiyo bora zaidi", "B inaweza kugharimu zaidi ukiongeza inachoacha", "Matone na mafunzo hayahitajiki kamwe", "Nukuu haziwezi kulinganishwa"], answer: 1, why: "Linganisha kipengele kwa kipengele; vinavyokosekana lazima vinunuliwe kando." }
          ]
        },
        {
          title: "Kuchagua zao na kukuza miche safi",
          objectives: ["O3"],
          minutes: 5,
          goal: "Chagua zao na aina inayofaa muundo wako na upange kitalu cha miche safi na upandikizaji.",
          text: [
            "Mazao yanayolimwa zaidi chini ya kifuniko ni nyanya, pilipili hoho (capsicum) na matango. Nyanya zina soko kubwa zaidi lakini pia hatari kubwa zaidi ya wadudu na magonjwa, pamoja na Tuta absoluta. Pilipili hoho inauzika vizuri kwa hoteli na maduka makubwa, hasa za rangi, na inachelewa kuanza kuzaa. Matango yanakua haraka na yanaleta pesa haraka. Chagua kwa kuanzia na mnunuzi wako: zao, rangi na ukubwa atakaochukua kila wiki.",
            "Tumia aina zilizozalishwa kwa ajili ya vitalu nyumba. Nyanya nyingi za kitalu nyumba ni za kuendelea kukua (indeterminate: zinaendelea kukua na zinaelekezwa juu kwa kamba kwa miezi mingi), na matango mengi ya kitalu nyumba yanazaa bila nyuki. Mbegu za aina hizi zinaweza kuwa ghali, kwa hiyo nunua mbegu zilizofungwa na kuthibitishwa kutoka kwa muuzaji aliyesajiliwa (KEPHIS inathibitisha mbegu nchini Kenya) na usihifadhi mbegu za chotara (hybrid).",
            "Kuza miche katika kitalu safi: trei za miche zenye kiotesho safi (si udongo wa shambani), chini ya nyavu za wadudu, kwa kumwagilia kwa uangalifu. Wakulima wengi wananunua miche kutoka kwa mkuzaji wa miche mwenye leseni, jambo linaookoa muda lakini lazima awe chanzo safi na cha kuaminika. Pandikiza miche yenye nguvu, yenye afya na isiyo na wadudu jioni kukiwa na baridi, kwa nafasi anayokupa mtaalamu wa kilimo, na uimwagilie mara moja. Panga tarehe: kupanda mbegu, kupandikiza, mavuno ya kwanza na mavuno ya mwisho, ili mnunuzi wako apate mazao kwa wakati."
          ],
          steps: ["Muulize mnunuzi wako atachukua zao gani, rangi gani na ukubwa gani kila wiki.", "Chagua aina ya kitalu nyumba; nunua mbegu zilizofungwa na kuthibitishwa.", "Kuza miche kwenye trei zenye kiotesho safi chini ya nyavu za wadudu, au nunua kutoka kwa mkuzaji wa miche mwenye leseni.", "Pandikiza miche yenye nguvu isiyo na wadudu jioni kwa nafasi ya mtaalamu wa kilimo.", "Andika tarehe: kupanda mbegu, kupandikiza, mavuno ya kwanza na ya mwisho."],
          words: [["Pilipili hoho (capsicum)", "pilipili tamu; ya kijani, nyekundu, njano au machungwa."], ["Indeterminate", "aina ya nyanya inayoendelea kukua na kuzaa kwa miezi; inaelekezwa juu kwa kamba."], ["Kiotesho", "mchanganyiko safi (kwa mfano cocopeat, maganda ya nazi yaliyosagwa) unaotumika badala ya udongo kukuza miche."], ["Mkuzaji wa miche", "biashara ya kitalu inayokuza na kuuza miche."]],
          slides: [
            { title: "Chagua kwa kuangalia mnunuzi", bullets: ["Nyanya: soko kubwa zaidi, hatari kubwa zaidi ya wadudu", "Pilipili hoho: hoteli na maduka makubwa; inachelewa kuanza", "Matango: haraka, pesa za haraka"] },
            { title: "Aina za kitalu nyumba", bullets: ["Nyanya za kuendelea kukua kwenye kamba", "Matango yanayozaa bila nyuki", "Mbegu zilizofungwa na kuthibitishwa; usihifadhi mbegu za chotara"] },
            { title: "Miche safi", bullets: ["Trei, kiotesho safi, chini ya nyavu za wadudu", "Au mkuzaji wa miche mwenye leseni na wa kuaminika", "Pandikiza miche isiyo na wadudu jioni kukiwa na baridi"] },
            { title: "Panga tarehe", bullets: ["Kupanda, kupandikiza, mavuno ya kwanza na ya mwisho", "Linganisha na mahitaji ya kila wiki ya mnunuzi wako"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Muulize mnunuzi mmoja angechukua zao gani, rangi gani na ukubwa gani kila wiki. Chagua zao lako na aina ya kitalu nyumba, na uandike tarehe za kupanda mbegu (au kununua miche), kupandikiza, mavuno ya kwanza na mavuno ya mwisho.",
          youCanNow: "kuchagua zao la kufunikwa kwa kuangalia mahitaji ya mnunuzi wako na kupanga miche safi na upandikizaji.",
          quickCheck: [
            { objective: "O3", q: "Nini kiamue zao utakalolima kwanza kwenye kitalu nyumba chako?", options: ["Kile mnunuzi wako atakachochukua kila wiki", "Zao lenye pakiti ya mbegu nzuri zaidi", "Chochote anacholima jirani", "Mbegu za bei nafuu zaidi"], answer: 0, why: "Mnunuzi wa kudumu ndiye anayefanya zao la kufunikwa lilipe." },
            { objective: "O3", q: "Miche ya kitalu nyumba ikuzwe wapi?", options: ["Kwenye udongo wa shambani wazi karibu na nyanya za zamani", "Chini ya mti bila nyavu", "Kwenye trei zenye kiotesho safi chini ya nyavu za wadudu, au kutoka kwa mkuzaji wa miche mwenye leseni", "Popote; wadudu hawajalishi ndani ya kitalu nyumba"], answer: 2, why: "Miche safi inazuia wadudu na magonjwa kuingia kwenye muundo pamoja na zao." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuamua na kujenga",
        questions: [
          { objective: "O1", q: "Kipi SI moja ya masharti matano katika kozi hii?", options: ["Maji mwaka mzima", "Mnunuzi kila wiki", "Kitalu nyumba chenye rangi angavu zaidi", "Ujuzi na mtaalamu wa kilimo"], answer: 2, why: "Masharti matano ni maji, soko, ujuzi, mtaji na hali ya hewa." },
          { objective: "O1", q: "Kwa nini maji lazima yawe ya uhakika mwaka mzima kwa kitalu nyumba?", options: ["Zao lililofunikwa halipati mvua", "Plastiki inahitaji kuoshwa kila siku", "Maji yanapoza fremu", "Si muhimu"], answer: 0, why: "Chini ya kifuniko, maji yote lazima yatoke kwenye chanzo chako." },
          { objective: "O2", q: "Muundo upi una baridi zaidi na unafaa maeneo ya joto, lakini hauzuii mvua?", options: ["Kitalu nyumba cha plastiki kilichofungwa", "Nyumba ya nyavu za kivuli", "Stoo ya matofali", "Handaki la chini la plastiki"], answer: 1, why: "Nyavu za kivuli zinapunguza jua na joto lakini zinapitisha mvua." },
          { objective: "O2", q: "Njia bora ya kukagua ahadi za muuzaji ni ipi?", options: ["Kuamini kijitabu chake cha matangazo", "Kulipa kwanza, kisha kuuliza", "Kuuliza kwenye mitandao ya kijamii tu", "Kuwatembelea wakulima wawili wanaotumia muundo wake kwa misimu miwili au zaidi"], answer: 3, why: "Wakulima walioutumia wanaonyesha unachofanya kwa kweli." },
          { objective: "O3", q: "Nyanya ya kuendelea kukua (indeterminate):", options: ["Inaendelea kukua na kuzaa kwa miezi, ikielekezwa juu kwa kamba", "Inaacha kukua baada ya wiki chache", "Haihitaji kushikiliwa kamwe", "Ni aina ya tango"], answer: 0, why: "Nyanya za kuendelea kukua zinaendelea kukua, kwa hiyo zinaelekezwa juu kwa kamba ndani ya vitalu nyumba." }
        ]
      }
    },
    {
      name: "Sura 2: Kukiendesha kama biashara",
      lessons: [
        {
          title: "Misingi ya umwagiliaji-mbolea kwa matone",
          objectives: ["O3"],
          minutes: 5,
          goal: "Eleza jinsi mfumo wa umwagiliaji-mbolea kwa matone unavyofanya kazi na upange ukaguzi wake wa kila siku pamoja na mtaalamu wa kilimo.",
          text: [
            "Umwagiliaji-mbolea (fertigation) ni kutoa mbolea kupitia mfumo wa matone, ikiwa imeyeyushwa ndani ya maji ya umwagiliaji, ili kila mmea upate chakula na maji kidogo kwenye mizizi yake kila siku. Unaokoa maji na mbolea na unaweka majani makavu, jambo linalosaidia dhidi ya magonjwa. Mifumo ya matone, pampu na chaguo za nishati ya jua zinafundishwa katika \"Umwagiliaji na Usimamizi wa Maji\"; somo hili linahusu kilicho tofauti chini ya kifuniko.",
            "Mfumo rahisi una tangi la maji, chujio, njia ya kuongeza mbolea (tangi la kuchanganyia au kidungaji), mabomba makuu na mipira ya matone yenye vitone kwenye kila mmea. Tumia mbolea zinazoyeyuka kwenye maji zilizotengenezwa kwa umwagiliaji-mbolea tu. Mchanganyiko unabadilika kulingana na zao na hatua yake (miche, kutoa maua, kuzaa) na kulingana na maji na udongo wako, kwa hiyo upate kutoka kwa mtaalamu wa kilimo, kipimo cha udongo na maji au wataalamu wa kiufundi wa muuzaji wa mbolea. Usikisie kamwe, na usichanganye bidhaa kwenye tangi moja isipokuwa mtaalamu wa kilimo amesema zinaweza kuchanganywa.",
            "Kagua mfumo kila siku: chujio ni safi, kila kitone kinadondosha, hakuna mpira unaovuja, na udongo karibu na mimea una unyevu, si tope. Wakulima wengi wanatumia kipimo cha EC cha bei nafuu kuhakikisha nguvu ya mbolea ndani ya maji ndiyo aliyoweka mtaalamu wa kilimo, na kipimo cha pH au vipande vya kupimia. Suuza mipira kwa maji safi kama ulivyoshauriwa, ili chumvi na mbolea zisiziba vitone. Andika maji na chakula cha kila siku kwenye kumbukumbu."
          ],
          steps: ["Pata mpango wa kulisha kwa kila hatua ya zao kutoka kwa mtaalamu wa kilimo au kipimo cha udongo na maji.", "Tumia mbolea zinazoyeyuka kwenye maji tu; changanya kama ulivyoshauriwa tu.", "Kila siku: chujio safi, kagua vitone vinadondosha na mipira haivuji.", "Kagua nguvu kwa kipimo cha EC na pH kama alivyoweka mtaalamu wa kilimo.", "Suuza mipira kama ulivyoshauriwa; andika maji na chakula kila siku."],
          words: [["Umwagiliaji-mbolea", "kutoa mbolea iliyoyeyushwa ndani ya maji ya umwagiliaji kupitia mfumo wa matone."], ["Kitone (emitter)", "tundu dogo kwenye mpira wa matone linalotoa maji kwenye kila mmea."], ["Kipimo cha EC", "kipimo kidogo kinachopima kiasi cha mbolea (chumvi) iliyoyeyushwa ndani ya maji."], ["Kusuuza", "kupitisha maji safi ndani ya mipira kuondoa chumvi na vizuizi."]],
          slides: [
            { title: "Umwagiliaji-mbolea ni nini", bullets: ["Mbolea iliyoyeyushwa ndani ya maji ya matone", "Chakula na maji kidogo kwenye mizizi kila siku", "Unaokoa maji na unaweka majani makavu"] },
            { title: "Sehemu zake", bullets: ["Tangi, chujio, tangi la kuchanganyia au kidungaji", "Bomba kuu na mipira ya matone yenye vitone", "Mbolea zinazoyeyuka kwenye maji tu"] },
            { title: "Mchanganyiko", bullets: ["Unabadilika kwa hatua ya zao, maji na udongo", "Kutoka kwa mtaalamu wa kilimo au kipimo cha maji na udongo", "Usikisie kamwe; changanya kama ulivyoshauriwa tu"] },
            { title: "Ukaguzi wa kila siku", bullets: ["Chujio safi; kila kitone kinadondosha", "EC na pH kama alivyoweka mtaalamu wa kilimo", "Suuza kama ulivyoshauriwa; andika kumbukumbu"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "Chora mfumo wako wa umwagiliaji-mbolea kwa matone kutoka tangi hadi mimea na uandike jina la kila sehemu. Kisha andika orodha ya ukaguzi wa kila siku (chujio, vitone, kuvuja, EC, pH, unyevu wa udongo, kumbukumbu) na maswali utakayomuuliza mtaalamu wako wa kilimo kuhusu mpango wa kulisha kwa kila hatua ya zao.",
          youCanNow: "kueleza mfumo wa umwagiliaji-mbolea kwa matone, kupanga ulishaji wake pamoja na mtaalamu wa kilimo na kufanya ukaguzi wake wa kila siku.",
          quickCheck: [
            { objective: "O3", q: "Mchanganyiko wako wa umwagiliaji-mbolea utoke wapi?", options: ["Kukisia kwa kuangalia rangi ya majani", "Kwa mtaalamu wa kilimo, kipimo cha udongo na maji au wataalamu wa kiufundi wa muuzaji", "Mchanganyiko ule ule kwa kila zao na hatua", "Chochote kilicho nafuu zaidi wiki hiyo"], answer: 1, why: "Mchanganyiko unategemea zao, hatua, maji na udongo, kwa hiyo lazima utoke kwa ushauri wa kitaalamu." },
            { objective: "O3", q: "Mimea kadhaa inanyauka wakati mingine iko sawa. Unakagua nini kwanza?", options: ["Kama vitone vyake vimeziba na chujio ni safi", "Kuongeza mbolea zaidi kwenye tangi", "Kuondoa nyavu za wadudu", "Kumwagilia kutoka juu kwa mpira wa maji"], answer: 0, why: "Vitone vilivyoziba ni sababu ya kawaida ya baadhi ya mimea kukosa maji au chakula." }
          ]
        },
        {
          title: "Kudhibiti joto, unyevu, wadudu na usafi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Endesha utaratibu wa kila siku na kila wiki wa joto, unyevu, wadudu na usafi ndani ya muundo wako.",
          text: [
            "Joto na unyevu ndiyo matatizo makubwa ya kila siku chini ya kifuniko katika nchi za joto. Kitalu nyumba kilichofungwa kinaweza kupata joto zaidi sana kuliko nje, na hewa ya joto, iliyotulia na yenye unyevu inaleta magonjwa ya ukungu kama baka-jani chelewa (late blight) na ukungu wa kijivu (grey mould). Fungua madirisha ya hewa ya pembeni na ya juu asubuhi na uyafunge jioni inapohitajika, weka majani makavu kwa kumwagilia kupitia matone tu, pogoa majani ya zamani ya chini na machipukizi ya pembeni ili hewa ipite, na usisongamanishe mimea. Nyavu za kivuli juu ya paa katika miezi ya joto kali zinaweza kusaidia. Weka kipimajoto cha bei nafuu ndani na uandike vipimo.",
            "Nyavu za wadudu zinazuia wadudu wengi, lakini wale wanaoingia wanazaliana haraka kwa sababu hakuna mvua wala maadui wa asili wa kuwazuia: inzi weupe, thiripi, vidukari, utitiri buibui na, kwenye nyanya, Tuta absoluta. Udongoni, minyoo fundo (root-knot nematodes) ni tatizo la kawaida katika vitalu nyumba vilivyotumika muda mrefu. Kagua kila mstari wa mimea kila wiki, tundika kadi za njano zenye gundi kwa inzi weupe na vidukari na za bluu kwa thiripi, na tumia mitego ya pheromone kwa Tuta absoluta. Tumia hatua za IPM (udhibiti jumuishi wa wadudu); dawa ikihitajika, tumia ile tu iliyosajiliwa kwa zao lako (PCPB nchini Kenya, NAFDAC nchini Nigeria, EPA nchini Ghana), fuata lebo na muda wake wa kusubiri kabla ya kuvuna, na vaa vifaa vya kujikinga, kwa sababu utachuma matunda mara nyingi mahali palipofungwa.",
            "Usafi unazuia wadudu na magonjwa. Tumia mlango wa mara mbili ili mmoja uwe umefungwa kila wakati, na bafu la miguu mlangoni. Punguza wageni, na wafanyakazi wanawe mikono na wavae nguo safi. Ondoa mimea iliyougua na majani na matunda yaliyoanguka kwenye mfuko uliofungwa, weka eneo linalozunguka muundo bila magugu, ziba matundu kwenye nyavu mara moja, na safisha vifaa. Kati ya mazao, ondoa mabaki yote ya mimea na usafishe muundo kabla ya kupanda tena."
          ],
          steps: ["Kila asubuhi: fungua madirisha ya hewa; soma kipimajoto; angalia kama majani yamelowa.", "Kila jioni: funga madirisha ya hewa inapohitajika; andika joto.", "Kila wiki: kagua kila mstari; hesabu wadudu kwenye kadi zenye gundi na mitego ya pheromone.", "Kila wiki: pogoa majani ya chini na machipukizi ya pembeni; ondoa mimea iliyougua na takataka kwenye mfuko uliofungwa.", "Kila wakati: mlango wa mara mbili umefungwa, bafu la miguu, wageni wachache, vifaa safi, ziba matundu ya nyavu."],
          words: [["Mzunguko wa hewa", "kuruhusu hewa ipite ndani ya muundo kupitia madirisha ya hewa ili kupunguza joto na unyevu."], ["Unyevu wa hewa", "kiasi cha mvuke wa maji ndani ya hewa; unyevu mwingi unasaidia magonjwa ya ukungu."], ["Minyoo fundo", "mnyoo mdogo sana udongoni anayefanya uvimbe kwenye mizizi na kudhoofisha mimea."], ["Bafu la miguu", "trei ya kina kifupi yenye dawa ya kuua vijidudu mlangoni ya kusafisha viatu."]],
          slides: [
            { title: "Joto na unyevu", bullets: ["Fungua madirisha ya hewa asubuhi, funga inapohitajika", "Mwagilia kupitia matone tu; weka majani makavu", "Pogoa majani ya chini na machipukizi; usisongamanishe"] },
            { title: "Wadudu chini ya kifuniko", bullets: ["Inzi weupe, thiripi, vidukari, utitiri buibui", "Tuta absoluta kwenye nyanya", "Minyoo fundo kwenye udongo wa zamani"] },
            { title: "Kagua na tega", bullets: ["Kagua kila mstari kila wiki", "Kadi za njano: inzi weupe, vidukari; za bluu: thiripi", "Mitego ya pheromone kwa Tuta absoluta"] },
            { title: "Usafi", bullets: ["Mlango wa mara mbili na bafu la miguu", "Wageni wachache; mikono, nguo na vifaa safi", "Ondoa takataka kwenye mfuko uliofungwa; ziba nyavu mara moja"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Andika utaratibu wa ukurasa mmoja kwa muundo wako: unachofanya kila asubuhi na jioni, unachofanya kila wiki (ukaguzi, mitego, upogoaji, takataka) na sheria zako za kuingia (milango, bafu la miguu, wageni). Ubandike mlangoni.",
          youCanNow: "kuendesha utaratibu wa kila siku na kila wiki wa joto, unyevu, wadudu na usafi ndani ya muundo uliofunikwa.",
          quickCheck: [
            { objective: "O4", q: "Ndani kuna joto na unyevu mwingi na unaona ukungu wa kijivu ukianza. Kipi kinasaidia zaidi?", options: ["Kumwagilia majani kwa mpira wa maji", "Kufunga madirisha yote ya hewa siku nzima", "Kupanda mimea zaidi karibu karibu", "Kufungua madirisha ya hewa, kuweka majani makavu na kupogoa majani ya chini ili hewa ipite"], answer: 3, why: "Hewa inayopita na majani makavu vinapunguza kasi ya magonjwa ya ukungu." },
            { objective: "O4", q: "Kwa nini utumie mlango wa mara mbili kwenye mlango wa kitalu nyumba?", options: ["Ili kionekane cha kisasa", "Ili mlango mmoja uwe umefungwa kila wakati na wadudu wachache waingie", "Ili kuwaweka wafanyakazi ndani", "Unaingiza joto zaidi"], answer: 1, why: "Mlango mmoja ukiwa umefungwa kila wakati, wadudu hawawezi kuruka moja kwa moja ndani." }
          ]
        },
        {
          title: "Mpango wa biashara: faida ghafi na muda wa kurudisha mtaji",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kokotoa gharama, mapato, faida ghafi na muda wa kurudisha mtaji kwa zao moja la kufunikwa.",
          text: [
            "Mpango wa biashara unaonyesha, kwa namba, kama muundo unaweza kujilipia kabla haujachakaa. Unahitaji aina mbili za gharama. Uwekezaji ni unacholipa mara moja: muundo, mfumo wa matone, tangi na ufungaji. Gharama za kuendesha zinakuja kila mzunguko wa zao: mbegu au miche, mbolea, kinga ya mazao, vibarua, maji na nishati, usafiri, vifungashio na ada za soko.",
            "Faida ghafi kwa mzunguko = mapato (kilo zinazotarajiwa kuuzwa x bei kwa kilo) - gharama za kuendesha. Muda wa kurudisha mtaji = uwekezaji / faida ghafi kwa mwaka. Mfano wa kubuni kwa KES, wa kufanyia mazoezi ya njia tu: uwekezaji KES 400,000; mzunguko mmoja wa nyanya kwa mwaka; mauzo yanayotarajiwa kilo 4,000 kwa KES 40 = KES 160,000; gharama za kuendesha KES 90,000; faida ghafi KES 70,000 kwa mwaka. Muda wa kurudisha mtaji = 400,000 / 70,000 = takriban miaka 5.7. Muuzaji akisema kifuniko kinadumu takriban miaka 4, mpango huu haurudishi mtaji kabla hujalazimika kukibadilisha. Hiyo ni dalili ya hatari, si sababu ya kukopa zaidi.",
            "Sasa upime. Bei ikishuka kwa robo (KES 30 badala ya 40), mapato yanakuwa KES 120,000, faida ghafi KES 30,000 na muda wa kurudisha mtaji zaidi ya miaka 13. Bei za nyanya zinabadilika sana kwa msimu, kwa hiyo pima bei mbaya, mavuno kidogo na zao lililopotea. Kisha tafuta njia za kuuboresha: muundo mdogo au wa bei nafuu, mkataba na mnunuzi, mizunguko miwili kwa mwaka, zao la thamani kubwa zaidi kama pilipili hoho za rangi, au kugawana gharama katika kikundi. Hesabu hii hii inafanya kazi kwa NGN, GHS au XOF: mkulima karibu na Dakar nchini Senegal anafanya hesabu zile zile kwa faranga za CFA. Tumia nukuu na bei zako, weka kumbukumbu halisi ukishaanza, na muulize mshauri unayemwamini kabla ya kukopa au kusaini."
          ],
          steps: ["Jumlisha uwekezaji kutoka kwenye nukuu uliyochagua.", "Orodhesha gharama za kuendesha kwa mzunguko mmoja.", "Mapato = kilo zinazotarajiwa kuuzwa x bei kwa kilo (kutoka kwa mnunuzi wako).", "Faida ghafi = mapato - gharama za kuendesha; kwa mwaka = faida ghafi x mizunguko kwa mwaka.", "Muda wa kurudisha mtaji = uwekezaji / faida ghafi kwa mwaka; linganisha na maisha ya kifuniko.", "Pima bei ikishuka kwa robo, mavuno kidogo na zao lililopotea."],
          words: [["Uwekezaji", "pesa zinazolipwa mara moja kuanzisha, kama muundo na mfumo wa matone."], ["Gharama za kuendesha", "pesa zinazotumika kila mzunguko wa zao, kama miche, mbolea, vibarua na usafiri."], ["Faida ghafi", "mapato ukiondoa gharama za kuendesha kwa mzunguko mmoja au mwaka mmoja."], ["Muda wa kurudisha mtaji", "muda ambao faida ghafi inachukua kulipa uwekezaji."]],
          slides: [
            { title: "Aina mbili za gharama", bullets: ["Uwekezaji: muundo, matone, tangi, ufungaji", "Gharama za kuendesha: miche, chakula cha mimea, vibarua, maji, usafiri"] },
            { title: "Kanuni", bullets: ["Faida ghafi = mapato - gharama za kuendesha", "Muda wa kurudisha mtaji = uwekezaji / faida ghafi kwa mwaka", "Muda wa kurudisha mtaji lazima uwe mfupi kuliko maisha ya kifuniko"] },
            { title: "Mfano wa kubuni (KES)", bullets: ["Uwekezaji 400,000; faida ghafi 70,000 kwa mwaka", "Muda wa kurudisha mtaji takriban miaka 5.7", "Bei ikishuka kwa robo: zaidi ya miaka 13"] },
            { title: "Uimarishe", bullets: ["Muundo mdogo au kugawana katika kikundi", "Mkataba na mnunuzi; mizunguko miwili kwa mwaka", "Zao la thamani zaidi; kumbukumbu halisi; muulize mshauri"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Kazi ya mwisho: andika mpango wako wa biashara wa kilimo cha kufunikwa kwa zao moja: masharti yako matano, muundo pamoja na nukuu tatu zilizolinganishwa na ukaguzi wa wauzaji uliofanywa, zao na aina yake, mpango wako wa kitalu cha miche na wa umwagiliaji-mbolea, utaratibu wako wa kila wiki, na uwekezaji, gharama za kuendesha, mapato, faida ghafi, muda wa kurudisha mtaji, na muda huo bei ikishuka kwa robo.",
          youCanNow: "kukokotoa faida ghafi na muda wa kurudisha mtaji kwa zao la kufunikwa na kuupima dhidi ya kushuka kwa bei.",
          quickCheck: [
            { objective: "O5", q: "Uwekezaji ni 300,000 na faida ghafi ni 100,000 kwa mwaka. Muda wa kurudisha mtaji ni upi?", options: ["Mwaka 1", "Miaka 30", "Miaka 3", "Miaka 100"], answer: 2, why: "300,000 / 100,000 = miaka 3." },
            { objective: "O5", q: "Muda wako wa kurudisha mtaji ni miaka 6 lakini kifuniko kinadumu takriban miaka 4. Hii inakuambia nini?", options: ["Mpango haurudishi mtaji kwa wakati; badilisha mpango au usiwekeze bado", "Ni sawa; kopa zaidi", "Muda wa kurudisha mtaji haujalishi", "Nunua kitalu nyumba cha pili"], answer: 0, why: "Kifuniko kikichakaa kabla mtaji haujarudi, unapoteza pesa isipokuwa mpango ubadilike." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kukiendesha kama biashara",
        questions: [
          { objective: "O3", q: "Umwagiliaji-mbolea ni nini?", options: ["Kunyunyizia dawa ya wadudu kwa mpira wa maji", "Kuchoma mabaki ya mimea", "Kufunika kitalu nyumba kwa nyavu", "Kutoa mbolea iliyoyeyushwa ndani ya maji ya umwagiliaji wa matone"], answer: 3, why: "Umwagiliaji-mbolea unalisha mimea kupitia mipira ya matone." },
          { objective: "O3", q: "Kipimo cha EC kinakuambia:", options: ["Joto la hewa", "Kiasi cha mbolea iliyoyeyushwa ndani ya maji", "Bei ya nyanya", "Idadi ya wadudu kwenye kadi"], answer: 1, why: "EC inapima chumvi zilizoyeyushwa, jambo linaloonyesha nguvu ya mbolea." },
          { objective: "O4", q: "Mdudu yupi ni hatari maalum kwa nyanya za kitalu nyumba?", options: ["Tuta absoluta", "Nzige", "Panya kwenye ghala la nafaka", "Kupe wa ng'ombe"], answer: 0, why: "Tuta absoluta anashambulia majani, mashina na matunda ya nyanya na anazaliana haraka chini ya kifuniko." },
          { objective: "O4", q: "Kadi za bluu zenye gundi ndani ya kitalu nyumba zinanasa hasa:", options: ["Inzi weupe", "Utitiri buibui", "Thiripi", "Minyoo fundo"], answer: 2, why: "Thiripi wanavutiwa na bluu; inzi weupe na vidukari na njano." },
          { objective: "O5", q: "Faida ghafi ni:", options: ["Mapato ukiondoa gharama za kuendesha", "Bei ya muundo", "Idadi ya mimea", "Mapato ukiongeza uwekezaji"], answer: 0, why: "Faida ghafi inaonyesha kinachobaki kutoka mauzo baada ya gharama za kuendesha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kilimo cha Kitalu Nyumba na Kilimo cha Kufunikwa kwa Mazao ya Thamani Kubwa",
    questions: [
      { objective: "O1", q: "Kilimo cha kufunikwa ni:", options: ["Kulima usiku tu", "Kulima mazao chini ya kifuniko kama kitalu nyumba, nyavu za kivuli au handaki", "Kutumia mbwa mlinzi", "Kulima bila maji"], answer: 1, why: "Kifuniko kinalinda zao dhidi ya mvua, mvua ya mawe na wadudu wengi." },
      { objective: "O1", q: "Hali ipi ya mnunuzi inasaidia zaidi kitalu nyumba?", options: ["\"Nitauza sokoni kwa namna fulani\"", "Hakuna mnunuzi bado", "Jirani anaweza kununua kidogo", "Hoteli inakubali kuchukua kiasi maalum kila wiki"], answer: 3, why: "Mnunuzi wa kudumu wa kila wiki ni moja ya masharti matano." },
      { objective: "O1", q: "Mapitio ya mwaka 2017 kuhusu kilimo cha kufunikwa Afrika Kusini mwa Sahara yaligundua kwamba:", options: ["Hakifai kila hali ya hewa na bado kinahitaji njia nyingine za kudhibiti wadudu", "Kinaondoa wadudu wote", "Hakihitaji ujuzi", "Kinalipa kila wakati kwa msimu mmoja"], answer: 0, why: "Mapitio yaligundua mipaka kwa hali ya hewa na kwamba ujuzi, msaada na fedha ni vikwazo." },
      { objective: "O1", q: "Lipi ni sharti la mtaji?", options: ["Kumiliki trekta", "Kuwa na familia kubwa", "Pesa za muundo, zao la kwanza na gharama za kuendesha bila kuhatarisha pesa za chakula", "Rangi angavu ya kitalu nyumba"], answer: 2, why: "Unahitaji pesa za kuanzisha na za kuendesha bila kuweka nyumba yako hatarini." },
      { objective: "O2", q: "Kwa nini ulinganishe nukuu kipengele kwa kipengele?", options: ["Kuona kile kila moja inajumuisha na inachoacha", "Kuchagua nukuu ndefu zaidi", "Kwa sababu wauzaji wanapenda", "Haisaidii"], answer: 0, why: "Nukuu nafuu inaweza kuacha matone, mafunzo au ufungaji." },
      { objective: "O2", q: "Ipi ni dalili ya hatari kutoka kwa muuzaji wa kitalu nyumba?", options: ["Dhamana iliyoandikwa", "Wakulima unaoweza kuwatembelea", "Orodha wazi ya vilivyojumuishwa", "Mavuno yaliyohakikishwa na shinikizo la kulipa leo"], answer: 3, why: "Ahadi za uhakika na shinikizo la kulipa haraka ni dalili za kuahidi kupita kiasi." },
      { objective: "O2", q: "Chaguo lipi ndilo njia nafuu zaidi ya kuanza na kujifunza?", options: ["Kitalu nyumba kikubwa cha chuma", "Mahandaki ya kuingia ndani au ya chini", "Kitalu nyumba cha kioo", "Chumba cha baridi"], answer: 1, why: "Mahandaki yanagharimu kidogo zaidi na yanakuwezesha kujifunza kabla ya uwekezaji mkubwa." },
      { objective: "O2", q: "Upate nini kwa maandishi kabla ya kulipa?", options: ["Namba ya simu ya muuzaji tu", "Hakuna; kuaminiana kunatosha", "Dhamana, tarehe ya kuleta na kila kilichojumuishwa", "Picha ya muuzaji"], answer: 2, why: "Masharti yaliyoandikwa yanakulinda kitu kikienda vibaya." },
      { objective: "O3", q: "Aina nyingi za matango ya kitalu nyumba:", options: ["Zinazaa bila nyuki", "Zinahitaji nyuki ndani", "Zinakua wakati wa baridi tu", "Zinapandwa kwa vipandikizi"], answer: 0, why: "Matango mengi ya kitalu nyumba yamezalishwa kuzaa bila uchavushaji." },
      { objective: "O3", q: "Wakati gani bora wa kupandikiza miche?", options: ["Mchana kwenye jua kali", "Wakati wa mvua kubwa nje", "Kabla miche haijawa na mizizi", "Jioni kukiwa na baridi, kisha uimwagilie"], answer: 3, why: "Jioni zenye baridi zinapunguza mshtuko wa kupandikiza." },
      { objective: "O3", q: "Mbolea gani zinatumika kwa umwagiliaji-mbolea?", options: ["Mbolea yoyote ya chembechembe", "Mbolea zinazoyeyuka kwenye maji zilizotengenezwa kwa umwagiliaji-mbolea", "Samadi mbichi", "Chokaa"], answer: 1, why: "Mbolea zinazoyeyuka kabisa tu ndizo zinapita kwenye mipira ya matone bila kuiziba." },
      { objective: "O4", q: "Hewa ya joto, iliyotulia na yenye unyevu chini ya kifuniko inasaidia hasa:", options: ["Magonjwa ya ukungu kama baka-jani chelewa na ukungu wa kijivu", "Uchavushaji wa haraka", "Wadudu wachache", "Gharama ndogo"], answer: 0, why: "Unyevu na majani yaliyolowa vinasaidia magonjwa ya ukungu kuenea." },
      { objective: "O4", q: "Kwa nini wadudu wanaoingia kwenye kitalu nyumba wanaweza kuzaliana haraka?", options: ["Plastiki inawalisha", "Daima ni wakubwa zaidi", "Vitalu nyumba vinavutia mvua", "Ndani hakuna mvua wala maadui wengi wa asili wa kuwazuia"], answer: 3, why: "Chini ya kifuniko, vizuizi vya asili vya wadudu ni vichache." },
      { objective: "O4", q: "Ipi ni sheria nzuri ya usafi?", options: ["Kuwaacha wageni kutoka mashamba mengine waingie wapendavyo", "Kuacha matunda yaliyoanguka sakafuni", "Kutumia bafu la miguu na kuweka mmoja wa milango miwili umefungwa kila wakati", "Kuacha matundu kwenye nyavu kwa ajili ya hewa"], answer: 2, why: "Mabafu ya miguu na milango ya mara mbili yanazuia wadudu na magonjwa." },
      { objective: "O4", q: "Dawa ya wadudu ikihitajika ndani ya kitalu nyumba nchini Kenya, lazima iwe:", options: ["Imesajiliwa na PCPB na itumike kama lebo yake inavyosema, pamoja na vifaa vya kujikinga", "Bidhaa yoyote aliyo nayo jirani", "Ichanganywe kwa nguvu zaidi kwa sababu ni ndani", "Inyunyiziwe muda mfupi kabla ya kuchuma"], answer: 0, why: "Bidhaa zilizosajiliwa tu, zikitumika kama lebo inavyosema, ndizo halali na salama." },
      { objective: "O5", q: "Ipi ni gharama ya uwekezaji?", options: ["Miche", "Vibarua wa kuchuma", "Muundo wa kitalu nyumba na mfumo wa matone", "Usafiri wa kwenda sokoni"], answer: 2, why: "Uwekezaji unalipwa mara moja kuanzisha; vingine ni gharama za kuendesha." },
      { objective: "O5", q: "Uwekezaji 500,000; faida ghafi 125,000 kwa mwaka. Muda wa kurudisha mtaji ni upi?", options: ["Miaka 2", "Miaka 6", "Miaka 10", "Miaka 4"], answer: 3, why: "500,000 / 125,000 = miaka 4." },
      { objective: "O5", q: "Mapato 200,000 na gharama za kuendesha 120,000. Faida ghafi ni ipi?", options: ["320,000", "80,000", "120,000", "200,000"], answer: 1, why: "200,000 - 120,000 = 80,000." },
      { objective: "O5", q: "Kwa nini upime kinachotokea bei ikishuka kwa robo?", options: ["Kwa sababu bei za mboga zinabadilika na lazima ujue kama bado utarudisha mtaji", "Ili namba zionekane bora", "Kwa sababu bei hazibadiliki kamwe", "Muuzaji anataka hivyo"], answer: 0, why: "Mpango unaofanya kazi kwa bei bora tu una hatari." },
      { objective: "O5", q: "Badiliko lipi linaweza kuimarisha mpango dhaifu wa biashara?", options: ["Kukopa zaidi kununua kitalu nyumba kikubwa zaidi", "Kupuuza muda wa kurudisha mtaji", "Kuchagua zao lisilo na mnunuzi", "Mkataba na mnunuzi, muundo mdogo au mizunguko miwili kwa mwaka"], answer: 3, why: "Uwekezaji mdogo, bei za uhakika zaidi au mizunguko zaidi vinaongeza faida ghafi au vinafupisha muda wa kurudisha mtaji." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango wa biashara na uikague tena pamoja na mtaalamu wa kilimo au mshauri unayemwamini kabla ya kuwekeza.",
    criteria: [
      { name: "Je, kinanifaa?", objective: "O1", notYet: "Masharti matano hayapo au yamejibiwa bila sababu.", meets: "Maji, soko, ujuzi, mtaji na hali ya hewa kila moja limejibiwa ndiyo au hapana pamoja na sababu, na uamuzi ulio wazi umeandikwa.", exceeds: "Sharti linalokosekana lina mpango wa kulirekebisha, kama mnunuzi aliyetajwa kwa jina au kipimo cha maji." },
      { name: "Muundo na ukaguzi wa wauzaji", objective: "O2", notYet: "Nukuu moja tu, au ahadi za muuzaji zimekubaliwa bila kukaguliwa.", meets: "Angalau nukuu tatu zimelinganishwa kipengele kwa kipengele, wakulima wa kutembelea wameombwa na dhamana na vilivyomo viko kwa maandishi.", exceeds: "Wakulima wawili wa mfano walitembelewa na matokeo yao halisi yameandikwa." },
      { name: "Mpango wa zao na umwagiliaji-mbolea", objective: "O3", notYet: "Hakuna ratiba ya zao, au mpango wa kulisha ni wa kukisia.", meets: "Zao na aina vimechaguliwa kwa mahitaji ya mnunuzi, pamoja na tarehe za kitalu cha miche, kupandikiza na kuvuna, na mpango wa kulisha kutoka kwa mtaalamu wa kilimo au kipimo pamoja na ukaguzi wa matone wa kila siku.", exceeds: "Mpango una malengo ya EC na pH yaliyowekwa na mtaalamu wa kilimo na karatasi ya kumbukumbu ya kila siku." },
      { name: "Utaratibu wa hali ya hewa ndani, wadudu na usafi", objective: "O4", notYet: "Hakuna utaratibu, au wadudu wanashughulikiwa kwa kunyunyizia dawa tu.", meets: "Utaratibu wa kila siku na kila wiki wa madirisha ya hewa, ukaguzi, mitego, upogoaji, takataka na sheria za kuingia, pamoja na bidhaa zilizosajiliwa tu zikitumika kama lebo inavyosema.", exceeds: "Utaratibu umebandikwa mlangoni na umefuatwa na kuandikwa kwa angalau wiki mbili." },
      { name: "Namba na muda wa kurudisha mtaji", objective: "O5", notYet: "Hakuna namba, au faida ghafi au muda wa kurudisha mtaji si sahihi.", meets: "Uwekezaji, gharama za kuendesha, mapato, faida ghafi na muda wa kurudisha mtaji ni sahihi, vimelinganishwa na maisha ya kifuniko, na kushuka kwa bei kwa robo kumepimwa.", exceeds: "Pia anapima mavuno kidogo na zao lililopotea, na anaorodhesha mabadiliko yatakayoimarisha mpango." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaolinganisha angalau nukuu tatu na kuwatembelea wakulima wa mfano kabla ya kununua muundo (utafiti wa kufuatilia)",
      "Wanafunzi wanaoamua kutowekeza bado, au kuanza kidogo, kwa sababu mpango wao wa biashara haukurudisha mtaji (matokeo mazuri, si kushindwa)",
      "Wanafunzi wenye muundo wanaoripoti utaratibu wa kila wiki na mazao machache yaliyopotea kwa wadudu au magonjwa baada ya mzunguko mmoja",
      "Wanafunzi wanaoripoti faida ghafi yao halisi kwa kila mzunguko ikilinganishwa na mpango wao wa biashara"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye kikokotoo, au karatasi, kalamu na kikokotoo rahisi",
      "Nukuu zilizoandikwa kutoka kwa wauzaji wa vitalu nyumba, nyavu za kivuli au mahandaki wa eneo lako (wanafunzi wanazikusanya wakati wa kozi)",
      "Mawasiliano ya mtaalamu wa kilimo au afisa ugani na mnunuzi ambaye mwanafunzi anaweza kuzungumza naye",
      "Si lazima: ziara kwenye kitalu nyumba kinachofanya kazi, kipimajoto, kadi zenye gundi na kipimo cha EC vya kuonyesha kikundi",
      "Kama dakika 60 hadi 90 kwa jumla kwa masomo, majaribio mafupi na mitihani, pamoja na muda wa kukusanya nukuu na kuzungumza na wanunuzi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha tembeleeni kitalu nyumba au nyumba ya nyavu za kivuli inayofanya kazi ikiwezekana, na mwulizeni mmiliki kuhusu gharama na matatizo halisi.",
      "Wakumbushe wanafunzi kwamba kila kiasi cha pesa katika kozi ni mfano wa kubuni; lazima watumie nukuu zao na bei za wanunuzi wao.",
      "Usipendekeze muuzaji wa kitalu nyumba, bidhaa au mchanganyiko wa mbolea; wafundishe wanafunzi jinsi ya kulinganisha na kukagua badala yake.",
      "Chukulia \"bado\" au \"anza kidogo\" kama matokeo mazuri kama hesabu hazifai; inaokoa familia kutokana na madeni.",
      "Usipendekeze kamwe jina wala kiwango cha dawa ya wadudu; waonyeshe wanafunzi jinsi ya kukagua orodha ya mamlaka na kusoma lebo.",
      "Pima kila mpango wa biashara kwa rubriki na ukague kila hesabu pamoja na mwanafunzi kabla hawajazungumza na mkopeshaji au muuzaji."
    ]
  }
};
