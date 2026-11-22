"use strict";

// Koach Learn course (Swahili translation of africa-life/afr-nutrition-local-foods.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WHO_DIET = { name: "WHO: Lishe bora (matunda na mboga, chumvi, sukari na mafuta)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "WHO: Ulishaji wa watoto wachanga na wadogo", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "WHO: Upungufu wa damu (anaemia): walio hatarini, vyakula vyenye madini ya chuma, vyakula vinavyozuia chuma", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "WHO: Mwongozo wa funguo tano za chakula salama zaidi", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods-sw",
  lang: "sw",
  translationOf: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Lishe Bora kwa Gharama Nafuu kwa Vyakula vya Kienyeji",
  skills: "Kupanga vyakula vya kienyeji katika makundi ya vyakula, Kuandaa sahani yenye mlo kamili, Kupunguza chumvi, sukari na mafuta na kuweka chakula salama, Kulinganisha bei za vyakula ili kupata thamani, Kulisha watoto wadogo na wanawake wajawazito au wanaonyonyesha, Kuandika mpango wa milo wa wiki kwa bajeti",
  outcome: "kuandika mpango wa milo wa wiki kwa ajili ya kaya yako unaotumia vyakula vya kienyeji kutoka makundi kadhaa kila siku, unaoingia ndani ya bajeti yako ya chakula, unaofuata ushauri wa WHO kuhusu chumvi, sukari na chakula salama, na unaowapa watoto wadogo na wanawake wajawazito au wanaonyonyesha wanachohitaji.",
  about: [
    "Kozi hii ni kwa mtu yeyote anayenunua au kupika chakula kwa ajili ya kaya barani Afrika: mama na baba, bibi, wanafunzi wanaoishi peke yao, na watu wanaouza chakula kilichopikwa. Huhitaji pesa kwa vyakula maalum. Lishe bora inatokana na maharagwe, mboga za majani, nafaka, samaki, mayai na matunda yaliyo tayari sokoni kwako.",
    "Sura ya 1 inahusu kujua vyakula vyako: makundi ya vyakula kwa mifano ya kienyeji, kuandaa sahani yenye mlo kamili, na kupunguza chumvi, sukari na mafuta huku ukiweka chakula salama. Sura ya 2 inahusu kula vizuri kwa bajeti: kulinganisha bei ili kupata thamani, kuwalisha wanaohitaji zaidi, na kuandika mpango wa milo wa wiki.",
    "Kozi hii inafuata ushauri wa Shirika la Afya Duniani (WHO). Haitoi mlo maalum kwa magonjwa kama kisukari, VVU au utapiamlo, wala ushauri kuhusu virutubisho (supplements); kwa hayo, ongea na kliniki, mtaalamu wa lishe au mhudumu wa afya ya jamii. Bei zote ni mifano tu; tumia bei za soko lako. Kila somo linachukua kama dakika tano. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Andika mpango wa milo wa wiki moja kwa ajili ya kaya yako (au mfano, kama familia ya watu watano Kisumu, familia ya watu wanne Ibadan, au mwanafunzi Accra): kwa kila siku, milo na makundi ya vyakula inayoyagusa, pamoja na matunda au mboga kila siku; vyakula kwa mtoto mdogo yeyote au mwanamke mjamzito au anayenyonyesha; orodha ya manunuzi yenye bei za soko lako na jumla ya wiki ikilinganishwa na bajeti yako; na tabia tatu utakazotumia (chumvi kidogo, sukari kidogo, na ufunguo mmoja wa chakula salama).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaonunua au kupika chakula kwa ajili ya kaya nchini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco, Misri na kote Afrika: wazazi, bibi, vijana wanaoishi peke yao na wauzaji wadogo wa chakula kilichopikwa. Wengi wana kipato kidogo kinachobadilika na wanatumia simu ya kawaida.",
    startingPoint: "Wengi hupika kila siku milo ya kushibisha ya chakula kikuu (ugali, wali, garri, fufu, banku, attiéké, mkate), lakini mara nyingi na mboga, maharagwe au vyakula vya wanyama kidogo. Wengi huongeza chumvi nyingi, vidonge vya supu (stock cubes), sukari au mafuta. Wachache hulinganisha bei za vyakula kwa thamani au hupanga milo ya wiki, na wengi hawana uhakika jinsi ya kumlisha mtoto kuanzia miezi 6.",
    gap: "Familia nyingi hula vya kutosha kushiba lakini bila aina mbalimbali za vyakula, jambo linaloleta upungufu wa damu, ukuaji duni kwa watoto na, zaidi na zaidi, shinikizo la damu na kisukari kwa watu wazima. Wanafunzi wanaweza kula vizuri zaidi kwa gharama ile ile kwa kuchagua vyakula vya kienyeji kutoka makundi kadhaa, kupunguza chumvi na sukari, na kupanga manunuzi yao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la lishe linaelezwa",
      "Bajeti: ndogo na inayobadilika; kozi haitoi bei halisi kamwe, ni mifano tu, na wanafunzi wanatumia bei za soko lao",
      "Vyakula vinatofautiana kwa nchi na msimu: mifano inatoka Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Morocco na Misri",
      "Hakuna mlo maalum kwa magonjwa, virutubisho wala dawa: maswali hayo yanaenda kliniki au kwa mtaalamu wa lishe",
      "Vifaa: simu ya kawaida kwa kikokotoo na maelezo, au karatasi"
    ],
    prerequisites: "Hakuna. Kujumlisha na kuzidisha kwa urahisi kunasaidia katika Somo la 4; kikokotoo cha simu kinatosha."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya vyakula vinavyouzwa sokoni kwako", action: "kupanga vyakula vya kienyeji katika makundi ya vyakula vya kutia nguvu, vya kujenga mwili na vya kulinda mwili", standard: "ukipata angalau 8 kati ya 10 sahihi" },
    { id: "O2", condition: "Ukipewa vyakula vilivyo jikoni kwako", action: "kupanga sahani yenye mlo kamili yenye chakula kikuu, chakula cha kujenga mwili na mboga au matunda", standard: "huku mboga au matunda yakijaza kama nusu ya sahani" },
    { id: "O3", condition: "Ukipewa mapishi au mlo wa nyumbani", action: "kubadilisha mapishi ili yatumie chumvi, sukari na mafuta kidogo na kutumia funguo tano za WHO za chakula salama zaidi", standard: "ukitaja angalau mabadiliko mawili na funguo zote tano" },
    { id: "O4", condition: "Ukitumia bei za soko lako", action: "kulinganisha gharama za vyakula vya kundi moja ili kupata thamani bora", standard: "ukichagua chakula cha bei nafuu zaidi kinachotoa virutubisho vile vile, na hesabu zikiwa sahihi" },
    { id: "O5", condition: "Kwa mtoto wa miezi 6 hadi 23, au mwanamke mjamzito au anayenyonyesha", action: "kupanga milo ya siku moja inayofuata ushauri wa WHO wa ulishaji", standard: "yenye idadi sahihi ya milo kwa umri wa mtoto, au chakula cha ziada chenye madini ya chuma kwa mwanamke" },
    { id: "O6", condition: "Ukipewa ukubwa wa kaya yako na bajeti yako ya chakula", action: "kuandika mpango wa milo wa wiki na orodha ya manunuzi", standard: "yenye makundi kadhaa ya vyakula kila siku na isiyozidi bajeti" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujua vyakula vyako",
      lessons: [
        {
          title: "Makundi ya vyakula kwa vyakula vya kienyeji",
          objectives: ["O1"],
          minutes: 5,
          goal: "Panga vyakula vinavyouzwa sokoni kwako katika makundi ya kutia nguvu, kujenga mwili na kulinda mwili.",
          text: [
            "Hakuna chakula kimoja kinachoupa mwili kila kitu unachohitaji. Njia rahisi ya kukumbuka ni makundi matatu. Vyakula vya kutia nguvu vinatoa nguvu: mahindi, mchele, uwele, mtama, muhogo, viazi vikuu, ndizi za kupika, viazi vitamu, mkate, na pia mafuta. Vyakula vya kujenga mwili vinajenga misuli na damu: maharagwe, dengu, kunde, karanga, mayai, samaki, nyama, kuku na maziwa. Vyakula vya kulinda mwili vinasaidia kupambana na magonjwa: mboga na matunda.",
            "Mifano ya kienyeji: Kenya, ugali (nguvu), githeri au omena (kujenga mwili) na sukuma wiki (kulinda). Nigeria, garri au viazi vikuu (nguvu), maharagwe au egusi (kujenga mwili) na ugu au bitter leaf (kulinda). Ghana, banku au kenkey (nguvu), samaki au supu ya karanga (kujenga mwili) na kontomire (kulinda). Senegal, wali au uwele pamoja na niébé (kunde) na mboga. Misri, mkate pamoja na ful (maharagwe ya fava) na saladi.",
            "Baadhi ya vyakula ni wasaidizi maalum. Mboga za majani za kijani kibichi (mchicha, majani ya muhogo, mlonge, kontomire) na vyakula vya rangi ya machungwa (viazi vitamu vya rangi ya machungwa, papai, embe, karoti) vina vitamini nyingi. Maharagwe, samaki wadogo waliokaushwa, mayai, maini na mboga za majani za kijani kibichi vinatoa madini ya chuma, yanayozuia upungufu wa damu."
          ],
          steps: ["Andika vyakula ambavyo kaya yako ilikula jana.", "Weka alama kwa kila kimoja: nguvu, kujenga mwili au kulinda mwili.", "Angalia kundi lipi halipo au ni dogo.", "Taja chakula kimoja cha kienyeji unachoweza kuongeza kwa kundi hilo."],
          words: [["Kundi la vyakula", "vyakula vinavyofanya kazi inayofanana mwilini."], ["Chakula kikuu", "chakula kikuu cha kushibisha kinacholiwa siku nyingi, kama ugali, wali, garri au mkate."], ["Upungufu wa damu (anaemia)", "damu dhaifu, mara nyingi kwa sababu ya madini ya chuma kidogo; humfanya mtu achoke na kuwa dhaifu."]],
          slides: [
            { title: "Makundi matatu ya vyakula", bullets: ["Kutia nguvu: mahindi, mchele, muhogo, viazi vikuu, ndizi za kupika, mkate", "Kujenga mwili: maharagwe, karanga, mayai, samaki, nyama, maziwa", "Kulinda mwili: mboga na matunda"] },
            { title: "Sahani za kienyeji", bullets: ["Kenya: ugali, omena, sukuma wiki", "Nigeria: garri au viazi vikuu, maharagwe, ugu", "Ghana: banku, samaki, kontomire; Misri: mkate, ful, saladi"] },
            { title: "Wasaidizi maalum", bullets: ["Mboga za kijani kibichi na vyakula vya rangi ya machungwa: vitamini", "Maharagwe, samaki wadogo waliokaushwa, mayai, maini, mboga za majani: madini ya chuma"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Andika kila kitu ambacho kaya yako ilikula jana. Weka alama kwa kila chakula: N (nguvu), J (kujenga mwili) au L (kulinda mwili). Zungushia duara kundi mlilokula kidogo zaidi, na uandike chakula kimoja cha kienyeji unachoweza kuongeza kesho.",
          youCanNow: "kupanga vyakula vya kienyeji katika makundi ya kutia nguvu, kujenga mwili na kulinda mwili na kuona kinachokosekana.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni chakula cha kujenga mwili?", options: ["Muhogo", "Maharagwe", "Mchele", "Sukari"], answer: 1, why: "Maharagwe yana protini nyingi, inayojenga mwili." },
            { objective: "O1", q: "Familia moja Accra ilikula banku na mchuzi wa pilipili siku nzima. Kundi lipi linakosekana zaidi?", options: ["Vyakula vya kutia nguvu", "Chumvi", "Vyakula vya kujenga mwili na vya kulinda mwili", "Hakuna"], answer: 2, why: "Banku ni chakula cha kutia nguvu; mlo unahitaji samaki au maharagwe na mboga." }
          ]
        },
        {
          title: "Kuandaa sahani yenye mlo kamili",
          objectives: ["O2"],
          minutes: 5,
          goal: "Panga sahani yenye mlo kamili yenye chakula kikuu, chakula cha kujenga mwili na mboga au matunda.",
          text: [
            "Mwongozo rahisi kwa kila mlo mkuu: kama nusu ya sahani mboga na matunda, kama robo chakula kikuu, na kama robo chakula cha kujenga mwili. Huhitaji sahani halisi; fikiria bakuli au sinia la pamoja kwa sehemu hizo hizo.",
            "WHO inashauri watu wazima kula angalau gramu 400 za matunda na mboga kwa siku, ambazo ni kama viganja vitano. Mboga za majani zilizopikwa ndani ya supu au mchuzi zinahesabika. Nafaka zisizokobolewa na vyakula visivyosafishwa sana, kama mchele wa kahawia, uwele, mtama au unga wa mahindi usiokobolewa (dona), vinakushibisha kwa muda mrefu zaidi.",
            "Fanya mabadiliko madogo, si jiko jipya. Ongeza kiganja cha mboga za majani kwenye mchuzi. Ongeza maharagwe kwenye wali (waakye Ghana, wali na maharagwe Nigeria, githeri Kenya). Ongeza kipande kidogo cha samaki au yai kwa watoto. Kula tunda la msimu badala ya kitafunio kitamu.",
            "Ili kusaidia mwili kutumia madini ya chuma kutoka kwenye maharagwe na mboga za majani, vile pamoja na chakula chenye vitamini C kama nyanya, machungwa, mapera au embe. Kunywa chai au kahawa kati ya milo, si pamoja na milo, kwa sababu zinafanya madini ya chuma kuwa magumu kuingia mwilini."
          ],
          steps: ["Fikiria sahani ikiwa na sehemu nne.", "Jaza kama nusu kwa mboga na matunda.", "Jaza kama robo kwa chakula kikuu.", "Jaza kama robo kwa chakula cha kujenga mwili.", "Ongeza chakula chenye vitamini C; acha chai kwa kati ya milo."],
          words: [["Mlo kamili", "mlo wenye mchanganyiko sahihi wa makundi ya vyakula."], ["Nafaka isiyokobolewa", "nafaka iliyobaki na ganda lake la nje, kama mchele wa kahawia, uwele au unga wa dona."]],
          slides: [
            { title: "Sahani yenye mlo kamili", bullets: ["Kama nusu: mboga na matunda", "Kama robo: chakula kikuu", "Kama robo: chakula cha kujenga mwili"] },
            { title: "Matunda na mboga", bullets: ["WHO: angalau g 400 kwa siku kwa watu wazima", "Kama viganja vitano", "Mboga za majani ndani ya supu au mchuzi zinahesabika"] },
            { title: "Mabadiliko madogo", bullets: ["Mboga za majani kwenye mchuzi; maharagwe kwenye wali", "Yai au samaki kwa watoto", "Tunda la msimu badala ya peremende"] },
            { title: "Saidia madini ya chuma kufanya kazi", bullets: ["Kula maharagwe na mboga za majani pamoja na nyanya, chungwa au embe", "Chai na kahawa kati ya milo, si pamoja na milo"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Panga mlo mkuu wa kesho kwa vyakula ulivyo navyo tayari. Chora sahani (au bakuli) na uandike kinachoingia katika kila sehemu. Ongeza chakula kimoja chenye vitamini C.",
          youCanNow: "kupanga sahani yenye mlo kamili yenye chakula kikuu, chakula cha kujenga mwili na mboga au matunda mengi.",
          quickCheck: [
            { objective: "O2", q: "Katika sahani yenye mlo kamili, mboga na matunda yanapaswa kuwa kiasi gani?", options: ["Kama nusu", "Hakuna", "Kona ndogo tu", "Sahani yote"], answer: 0, why: "Kama nusu ya sahani mboga na matunda ndio mwongozo rahisi." },
            { objective: "O2", q: "Kwa nini ule nyanya au chungwa pamoja na maharagwe na mboga za majani?", options: ["Zinaongeza chumvi", "Zinasaidia mwili kupokea madini ya chuma", "Zinachukua nafasi ya maharagwe", "Zinafanya chakula kikae muda mrefu"], answer: 1, why: "Vitamini C inasaidia mwili kutumia madini ya chuma kutoka vyakula vya mimea." }
          ]
        },
        {
          title: "Chumvi, sukari na mafuta kidogo, na chakula salama",
          objectives: ["O3"],
          minutes: 5,
          goal: "Badilisha mapishi ili yatumie chumvi, sukari na mafuta kidogo na utumie funguo tano za chakula salama zaidi.",
          text: [
            "Chumvi nyingi inapandisha shinikizo la damu, linaloweza kuleta kiharusi na magonjwa ya moyo. WHO inashauri watu wazima kula chini ya gramu 5 za chumvi kwa siku, chini kidogo ya kijiko kidogo kimoja cha chai kilichosawazishwa, ukihesabu chumvi yote iliyo kwenye vidonge vya supu, unga wa viungo, samaki waliotiwa chumvi na mkate. Tumia chumvi kidogo na vidonge vichache, na uongeze ladha kwa kitunguu, kitunguu saumu, tangawizi, pilipili na mimea ya viungo. Ukitumia chumvi, chagua chumvi yenye madini joto (iodini).",
            "Sukari: WHO inashauri sukari huru (sukari inayoongezwa kwenye chakula na vinywaji, na sukari iliyo kwenye asali, soda na juisi) iwe chini ya 10% ya nguvu (kalori) za siku, na pungufu zaidi ni bora. Kwa watu wazima wengi hiyo ni chini ya vijiko vidogo kama 12 vilivyosawazishwa kwa siku. Chai tamu, soda na juisi zinaongezeka haraka. Mafuta: tumia kidogo, na kaanga mara chache; badala yake chemsha, pika kwa mvuke au pika mchuzi.",
            "Usalama wa chakula unazuia kuhara na sumu ya chakula. Funguo tano za WHO za chakula salama zaidi: weka usafi (nawa mikono na safisha sehemu za kazi); tenganisha chakula kibichi na kilichopikwa; pika vizuri kabisa, hasa nyama, samaki na mayai; weka chakula katika joto salama (usiache chakula kilichopikwa nje kwa saa nyingi); na tumia maji salama na vyakula vibichi vilivyo freshi na salama.",
            "Kanuni hizi ni muhimu zaidi ukiuza chakula kilichopikwa, kwa sababu kosa moja linaweza kuwaumiza wateja wengi."
          ],
          steps: ["Hesabu chumvi, vidonge vya supu na sukari katika mapishi moja ya kawaida.", "Punguza kila kimoja kidogo, na uongeze kitunguu, kitunguu saumu, pilipili au mimea ya viungo.", "Chagua kupika mchuzi au kuchemsha badala ya kukaanga mara moja kwa wiki.", "Kagua mapishi ukilinganisha na funguo tano za chakula salama zaidi."],
          words: [["Chumvi yenye madini joto (iodini)", "chumvi iliyoongezwa iodini, ambayo mwili unahitaji."], ["Sukari huru", "sukari inayoongezwa kwenye chakula na vinywaji, pamoja na sukari iliyo kwenye asali, sharubati na juisi za matunda."], ["Sumu ya chakula", "ugonjwa unaotokana na kula chakula chenye vijidudu au sumu."]],
          slides: [
            { title: "Chumvi kidogo", bullets: ["WHO: chini ya g 5 kwa siku, chini kidogo ya kijiko kidogo kimoja", "Hesabu vidonge vya supu, viungo, samaki wenye chumvi na mkate", "Ongeza kitunguu, kitunguu saumu, pilipili, viungo; tumia chumvi yenye iodini"] },
            { title: "Sukari na mafuta kidogo", bullets: ["WHO: sukari huru chini ya 10% ya nguvu, pungufu zaidi ni bora", "Chai tamu, soda na juisi zinaongezeka haraka", "Kaanga mara chache: chemsha, pika kwa mvuke au pika mchuzi"] },
            { title: "Funguo tano za chakula salama zaidi (WHO)", bullets: ["Weka usafi; tenganisha kibichi na kilichopikwa", "Pika vizuri kabisa; weka chakula katika joto salama", "Tumia maji salama na vyakula vibichi salama"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Chukua chakula kimoja ambacho kaya yako hula mara nyingi, kama wali wa jollof, supu ya egusi, thieboudienne au mchuzi wa maharagwe. Andika mabadiliko mawili yanayopunguza chumvi, sukari au mafuta, na ufunguo mmoja wa chakula salama utakaoutumia unapokipika.",
          youCanNow: "kubadilisha mapishi ili yatumie chumvi, sukari na mafuta kidogo na kuweka chakula salama kwa funguo tano.",
          quickCheck: [
            { objective: "O3", q: "Badiliko lipi linapunguza chumvi kwenye mchuzi?", options: ["Kuongeza vidonge viwili zaidi vya supu", "Kuongeza samaki wenye chumvi na chumvi zaidi", "Kutumia vidonge vichache na kuongeza kitunguu, kitunguu saumu na pilipili", "Kuongeza unga zaidi wa viungo"], answer: 2, why: "Vidonge vya supu na unga wa viungo vina chumvi nyingi; mimea ya viungo inaongeza ladha bila chumvi." },
            { objective: "O3", q: "Kipi ni mojawapo ya funguo tano za WHO za chakula salama zaidi?", options: ["Kuacha chakula kilichopikwa nje siku nzima", "Kutenganisha chakula kibichi na kilichopikwa", "Kutumia ubao mmoja kwa nyama mbichi na saladi bila kuuosha", "Kuonja nyama mbichi ili kuikagua"], answer: 1, why: "Kutenganisha vyakula vibichi na vilivyopikwa kunazuia vijidudu kuenea." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujua vyakula vyako",
        questions: [
          { objective: "O1", q: "Kipi ni chakula cha kulinda mwili?", options: ["Kontomire (majani ya magimbi)", "Garri", "Mafuta ya mawese", "Mkate mweupe"], answer: 0, why: "Mboga za majani za kijani ni vyakula vya kulinda mwili vyenye vitamini nyingi." },
          { objective: "O1", q: "Chakula kipi kinatoa madini ya chuma ili kusaidia kuzuia upungufu wa damu?", options: ["Sukari", "Soda", "Samaki wadogo waliokaushwa kama omena", "Chai"], answer: 2, why: "Samaki wadogo waliokaushwa, maharagwe, mayai na mboga za kijani kibichi vinatoa madini ya chuma." },
          { objective: "O2", q: "Mlo upi una mlo kamili zaidi?", options: ["Wali na soda", "Ugali, maharagwe na sukuma wiki", "Mkate na chai tamu", "Garri na sukari"], answer: 1, why: "Una chakula kikuu, chakula cha kujenga mwili na mboga." },
          { objective: "O2", q: "WHO inashauri watu wazima kula matunda na mboga kiasi gani kila siku?", options: ["Kipande kimoja", "Hakuna", "Jumapili tu", "Angalau g 400, kama viganja vitano"], answer: 3, why: "WHO inashauri angalau g 400 kwa siku kwa watu wazima." },
          { objective: "O3", q: "WHO inashauri watu wazima kula chumvi chini ya:", options: ["g 5 kwa siku, chini kidogo ya kijiko kidogo kimoja kilichosawazishwa", "Kikombe kimoja kwa siku", "Vijiko vidogo kumi kwa siku", "Hakuna kikomo"], answer: 0, why: "Chumvi chini ya g 5 kwa siku inapunguza hatari ya shinikizo la damu." }
        ]
      }
    },
    {
      name: "Sura 2: Kula vizuri kwa bajeti",
      lessons: [
        {
          title: "Kulinganisha bei za vyakula ili kupata thamani",
          objectives: ["O4"],
          minutes: 5,
          goal: "Linganisha gharama za vyakula vya kundi moja ili kupata thamani bora.",
          text: [
            "Chakula bora hakilazimiki kugharimu zaidi. Siri ni kulinganisha vyakula vinavyofanya kazi ile ile. Kwa vyakula vya kujenga mwili, linganisha maharagwe, dengu, kunde, karanga, mayai, samaki wadogo waliokaushwa na nyama kwa gharama ya mlo mmoja wa familia wa kila kimoja. Maharagwe na samaki wadogo mara nyingi hutoa mengi kwa pesa kidogo.",
            "Jinsi ya kulinganisha: andika bei na kiasi unachopata, kisha piga hesabu ya gharama ya mlo mmoja wa familia. Mfano (namba za kubuni, si bei halisi): kikombe cha maharagwe makavu kinagharimu NGN 600 na kinalisha familia mara moja; nyama kwa mlo huo huo inagharimu NGN 3,000. Maharagwe ni nafuu mara tano kwa mlo huo. Tumia bei za soko lako; zinabadilika kwa msimu.",
            "Njia za kuokoa: nunua matunda na mboga za msimu, wakati ni nafuu zaidi. Nunua vyakula vikavu (maharagwe, nafaka, samaki waliokaushwa) kwa wingi pamoja na majirani au kikundi chako cha akiba na mgawane. Panda mboga za majani kama mchicha, sukuma wiki, mlonge au spinachi kwenye bustani ndogo, gunia au kopo. Punguza soda, peremende na vitafunio vya pakiti, vinavyogharimu sana na kutoa kidogo.",
            "Usipoteze chakula: hifadhi vyakula vikavu kwenye vyombo vilivyofungwa na vikavu, mbali na unyevu na wadudu, na tumia mabaki kwa usalama siku inayofuata."
          ],
          steps: ["Chagua kundi moja la vyakula, kwa mfano vyakula vya kujenga mwili.", "Andika bei na kiasi kwa vyakula vitatu vya kundi hilo.", "Piga hesabu ya gharama ya mlo mmoja wa familia kwa kila kimoja.", "Chagua chenye thamani bora, na uandike vyakula vipi viko msimuni."],
          words: [["Thamani", "kiasi cha chakula bora unachopata kwa pesa yako."], ["Msimu", "wakati wa mwaka zao linapovunwa, kwa hiyo linapatikana kwa wingi na ni nafuu zaidi."]],
          slides: [
            { title: "Linganisha vinavyofanana", bullets: ["Kundi moja, kazi ile ile", "Gharama ya mlo mmoja wa familia", "Maharagwe na samaki wadogo mara nyingi hutoa mengi kwa pesa kidogo"] },
            { title: "Jinsi ya kulinganisha", bullets: ["Andika bei na kiasi", "Piga hesabu ya gharama kwa mlo wa familia", "Tumia bei za soko lako; zinabadilika"] },
            { title: "Njia za kuokoa", bullets: ["Nunua vyakula vya msimu", "Nunua vyakula vikavu kwa wingi pamoja na majirani", "Panda mboga za majani kwenye gunia au kopo; punguza soda na vitafunio"] }
          ],
          tryIt: "Sokoni au dukani kwako, andika bei na kiasi kwa vyakula vitatu vya kujenga mwili (kwa mfano maharagwe, mayai na samaki waliokaushwa). Piga hesabu ya gharama ya mlo mmoja wa familia kwa kila kimoja kwa kikokotoo cha simu yako. Zungushia duara chenye thamani bora. Andika sarafu (KES, NGN, GHS, XOF, MAD au yako).",
          youCanNow: "kulinganisha bei za vyakula kwa gharama ya kila mlo na kuchagua thamani bora katika kila kundi la vyakula.",
          quickCheck: [
            { objective: "O4", q: "Njia ipi ya haki zaidi ya kulinganisha maharagwe na nyama?", options: ["Rangi ya mfuko", "Duka lipi liko karibu zaidi", "Kipi ni kizito zaidi", "Gharama ya mlo mmoja wa familia wa kila kimoja"], answer: 3, why: "Gharama kwa kila mlo inalinganisha unachopata kweli kwa pesa yako." },
            { objective: "O4", q: "Mfano tu: maharagwe kwa mlo mmoja yanagharimu XOF 500 na samaki kwa mlo mmoja wanagharimu XOF 1,500. Maharagwe ni nafuu mara ngapi?", options: ["Mara 2", "Mara 3", "Mara 5", "Ni sawa"], answer: 1, why: "1,500 ukigawanya kwa 500 ni 3." }
          ]
        },
        {
          title: "Kuwalisha watoto wadogo na wanawake wajawazito au wanaonyonyesha",
          objectives: ["O5"],
          minutes: 6,
          goal: "Panga milo ya siku moja kwa mtoto mdogo au mwanamke mjamzito au anayenyonyesha kwa kufuata ushauri wa WHO.",
          text: [
            "Watoto wadogo wanakua haraka na wana matumbo madogo, kwa hiyo wanahitaji milo midogo ya mara kwa mara iliyojaa chakula bora. WHO inashauri maziwa ya mama pekee kwa miezi 6 ya kwanza. Kuanzia kama miezi 6, ongeza vyakula laini vya familia vilivyopondwa na endelea kunyonyesha hadi miaka 2 au zaidi. Anza na kiasi kidogo na polepole mpe zaidi, chakula kizito zaidi na aina nyingi zaidi.",
            "Mara ngapi (WHO): milo 2 hadi 3 kwa siku kwa watoto wa miezi 6 hadi 8; milo 3 hadi 4 kwa siku kwa watoto wa miezi 9 hadi 23, pamoja na vitafunio 1 hadi 2 ikihitajika. Pika uji mzito unaoweza kukaa juu ya kijiko, na uongeze kitu kutoka kundi lingine: maharagwe yaliyopondwa au siagi ya karanga, yai, samaki wadogo waliosagwa kuwa unga, mboga za majani zilizopondwa au papai. Mpe mtoto bakuli lake mwenyewe ili uone anakula kiasi gani.",
            "Wanawake wajawazito na wanaonyonyesha wanahitaji chakula bora zaidi, si chakula kikuu zaidi tu. Ongeza mlo mdogo wa ziada au kitafunio kila siku, chenye vyakula vyenye madini ya chuma (maharagwe, samaki wadogo, mayai, maini, mboga za kijani kibichi) vinavyoliwa pamoja na chakula chenye vitamini C. Hudhuria kliniki zote za wajawazito na tumia tu virutubisho ambavyo kliniki inakupa.",
            "Mtoto akiwa mgonjwa, WHO inashauri vinywaji zaidi na kunyonyesha zaidi, na vyakula laini anavyopenda. Baada ya ugonjwa, mpe chakula cha ziada ili kumsaidia kurudia hali yake. Mtoto asipokua vizuri au akiwa mwembamba sana au amevimba, nenda kliniki."
          ],
          steps: ["Angalia umri wa mtoto kwa miezi.", "Panga idadi ya milo kwa umri huo.", "Fanya kila mlo uwe mzito na uongeze kundi lingine la vyakula.", "Kwa mwanamke mjamzito au anayenyonyesha: ongeza kitafunio chenye chakula chenye madini ya chuma na vitamini C."],
          words: [["Chakula cha nyongeza", "kumpa mtoto vyakula vya familia kuanzia kama miezi 6 huku unyonyeshaji ukiendelea."], ["Kitafunio", "kiasi kidogo cha chakula kati ya milo, kama ndizi, karanga au yai."]],
          slides: [
            { title: "Watoto wachanga na wadogo (WHO)", bullets: ["Miezi 0-6: maziwa ya mama pekee", "Kuanzia kama miezi 6: vyakula laini vya familia pamoja na maziwa ya mama", "Endelea kunyonyesha hadi miaka 2 au zaidi"] },
            { title: "Mara ngapi", bullets: ["Miezi 6-8: milo 2-3 kwa siku", "Miezi 9-23: milo 3-4 kwa siku, pamoja na vitafunio 1-2", "Uji mzito pamoja na kundi lingine la vyakula"] },
            { title: "Wanawake wajawazito na wanaonyonyesha", bullets: ["Mlo mdogo wa ziada au kitafunio", "Vyakula vyenye madini ya chuma pamoja na vitamini C", "Virutubisho ambavyo kliniki inakupa tu"] },
            { title: "Mtoto mgonjwa", bullets: ["Vinywaji zaidi na kunyonyesha zaidi", "Vyakula laini anavyopenda; chakula cha ziada baadaye", "Hakui vizuri: nenda kliniki"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Panga chakula cha siku moja kwa mtoto wa miezi 10 (kwa mfano Douala au Kumasi) au kwa mama anayenyonyesha. Andika kila mlo na kitafunio na makundi ya vyakula yanayoguswa.",
          youCanNow: "kupanga milo ya siku kwa mtoto mdogo au mwanamke mjamzito au anayenyonyesha inayofuata ushauri wa WHO.",
          quickCheck: [
            { objective: "O5", q: "WHO inashauri milo mingapi kwa siku kwa mtoto wa miezi 7?", options: ["2 hadi 3", "1", "6 hadi 8", "Hakuna; maziwa ya mama pekee"], answer: 0, why: "WHO inashauri milo 2 hadi 3 kwa siku katika miezi 6 hadi 8, pamoja na kunyonyesha." },
            { objective: "O5", q: "Uji upi ni bora kwa mtoto wa miezi 9?", options: ["Uji mwepesi wa maji maji wenye sukari", "Chai tupu", "Uji mzito wenye siagi ya karanga au yai lililopondwa", "Soda"], answer: 2, why: "Uji mzito wenye kundi lingine la vyakula unatoa virutubisho zaidi kwa tumbo dogo." }
          ]
        },
        {
          title: "Kuandika mpango wa milo wa wiki kwa bajeti",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika mpango wa milo wa wiki na orodha ya manunuzi inayoingia ndani ya bajeti yako.",
          text: [
            "Mpango unaokoa pesa na unarahisisha kula vizuri. Anza na bajeti yako ya chakula ya wiki. Kisha panga milo mikuu, ukitumia vyakula vikuu vya bei nafuu, maharagwe au samaki wadogo siku nyingi, na mboga kila siku. Panga mayai, nyama au kuku kwa baadhi ya siku kama bajeti inaruhusu.",
            "Rudia milo ambayo familia yako inaipenda, lakini badilisha mboga au aina ya maharagwe ili kuwe na aina mbalimbali. Pika maharagwe mara moja na uyatumie katika milo miwili. Panga milo ya mtoto na kitafunio cha mwanamke mjamzito au anayenyonyesha kwanza, ili wasiwe kamwe ndio wanaoachwa nje.",
            "Kutoka kwenye mpango, andika orodha ya manunuzi yenye bei za soko lako, zijumlishe na ulinganishe na bajeti. Ukizidi, badilisha chakula cha gharama kwa kingine cha bei nafuu katika kundi lile lile, si kwa kutokula kitu. Mfano (namba za kubuni): familia moja Nakuru yenye bajeti ya wiki ya KES 2,500 inabadilisha milo miwili ya nyama kwa omena na maharagwe ili isizidi bajeti.",
            "Bandika mpango ukutani au hifadhi picha yake kwenye simu yako. Mwishoni mwa wiki, angalia ulichotumia na ulichotupa, na ubadilishe mpango wa wiki ijayo."
          ],
          steps: ["Andika bajeti yako ya chakula ya wiki.", "Panga milo mikuu ya siku saba yenye makundi kadhaa ya vyakula kila siku.", "Panga kwanza milo ya watoto na ya wanawake wajawazito au wanaonyonyesha.", "Andika orodha ya manunuzi yenye bei zako na uijumlishe.", "Ukizidi bajeti, badilisha ndani ya kundi lile lile la vyakula."],
          words: [["Bajeti", "kiasi cha pesa unachopanga kutumia."], ["Mpango wa milo", "orodha ya utakachopika kwa kila siku."]],
          slides: [
            { title: "Anza na bajeti", bullets: ["Pesa ya chakula ya wiki", "Vyakula vikuu vya bei nafuu, maharagwe au samaki wadogo", "Mboga kila siku"] },
            { title: "Panga kwa busara", bullets: ["Rudia vipendwa, badilisha mboga", "Pika maharagwe mara moja, tumia mara mbili", "Watoto na akina mama kwanza"] },
            { title: "Orodha ya manunuzi", bullets: ["Bei za soko lako", "Jumlisha na ulinganishe na bajeti", "Umezidi? Badilisha ndani ya kundi lile lile"] },
            { title: "Kagua na urekebishe", bullets: ["Ulitumia kiasi gani?", "Nini kilipotea?", "Badilisha mpango wa wiki ijayo"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa milo wa wiki moja. Kwa kila siku orodhesha milo na makundi ya vyakula, pamoja na matunda au mboga kila siku; weka alama kwenye vyakula vya mtoto mdogo yeyote au mwanamke mjamzito au anayenyonyesha; andika orodha ya manunuzi yenye bei zako na uijumlishe ukilinganisha na bajeti; na uandike tabia tatu utakazotumia.",
          youCanNow: "kuandika mpango wa milo wa wiki na orodha ya manunuzi inayolisha kaya vizuri bila kuzidi bajeti yako.",
          quickCheck: [
            { objective: "O6", q: "Orodha yako ya manunuzi imezidi bajeti. Badiliko lipi ni bora?", options: ["Kuacha mboga zote", "Kubadilisha chakula cha gharama kwa cha bei nafuu katika kundi lile lile", "Kuwapa watoto kidogo", "Kununua soda zaidi"], answer: 1, why: "Kubadilisha ndani ya kundi la vyakula kunaweka mlo kamili na kwa bei nafuu zaidi." },
            { objective: "O6", q: "Milo ya nani unapaswa kupanga kwanza?", options: ["Wageni", "Watu wazima tu", "Hakuna mtu maalum", "Watoto wadogo na wanawake wajawazito au wanaonyonyesha"], answer: 3, why: "Wanahitaji chakula bora zaidi, kwa hiyo hawapaswi kamwe kuachwa nje." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kula vizuri kwa bajeti",
        questions: [
          { objective: "O4", q: "Njia ipi nzuri ya kuokoa pesa kwa mboga?", options: ["Kununua nje ya msimu tu", "Kuzinunua wakati wa msimu au kupanda mboga za majani kwenye gunia", "Kununua vitafunio vya pakiti tu", "Kununua mara chache na kuziacha ziharibike"], answer: 1, why: "Mazao ya msimu ni nafuu zaidi, na mboga za majani zinaota kwa urahisi nyumbani." },
          { objective: "O4", q: "Mfano tu: kilo 1 ya dengu Casablanca inagharimu MAD 20 na inatosha milo 4 ya familia. Gharama kwa kila mlo ni ngapi?", options: ["MAD 80", "MAD 4", "MAD 5", "MAD 24"], answer: 2, why: "20 ukigawanya kwa milo 4 ni 5." },
          { objective: "O5", q: "WHO inashauri kuendelea kunyonyesha hadi umri gani?", options: ["Miaka 2 au zaidi", "Miezi 6", "Mwezi 1", "Kinapaswa kusimama chakula kinapoanza"], answer: 0, why: "Kunyonyesha kunaendelea pamoja na vyakula vya familia hadi miaka 2 au zaidi." },
          { objective: "O5", q: "Mama anayenyonyesha anapaswa kuongeza nini kila siku?", options: ["Chai tamu zaidi", "Hakuna", "Wali zaidi tu", "Mlo mdogo wa ziada au kitafunio chenye chakula chenye madini ya chuma"], answer: 3, why: "Anahitaji chakula bora zaidi, hasa vyakula vyenye madini ya chuma." },
          { objective: "O6", q: "Kitu cha kwanza cha kuandika unapopanga milo ya wiki ni nini?", options: ["Bajeti yako ya chakula ya wiki", "Orodha ya wageni", "Oda ya soda", "Hakuna; nunua tu"], answer: 0, why: "Bajeti inaamua mpango unaweza kujumuisha nini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Lishe Bora kwa Gharama Nafuu kwa Vyakula vya Kienyeji",
    questions: [
      { objective: "O1", q: "Kipi ni chakula cha kutia nguvu?", options: ["Sukuma wiki", "Viazi vikuu", "Mayai", "Machungwa"], answer: 1, why: "Viazi vikuu ni chakula kikuu kinachotoa nguvu." },
      { objective: "O1", q: "Kipi ni chakula cha kujenga mwili?", options: ["Karanga", "Muhogo", "Sukari", "Papai"], answer: 0, why: "Karanga zinatoa protini." },
      { objective: "O1", q: "Viazi vitamu vya rangi ya machungwa, papai na embe vina wingi wa:", options: ["Chumvi", "Hakuna kitu cha manufaa", "Vitamini", "Mafuta"], answer: 2, why: "Vyakula vya rangi ya machungwa vina vitamini nyingi." },
      { objective: "O1", q: "Upungufu wa damu mara nyingi unasababishwa na kiasi kidogo mno cha:", options: ["Sukari", "Chumvi", "Mafuta", "Madini ya chuma"], answer: 3, why: "Upungufu wa madini ya chuma ndio sababu ya kawaida zaidi ya lishe inayoleta upungufu wa damu." },
      { objective: "O2", q: "Katika sahani yenye mlo kamili, kama robo ni:", options: ["Peremende", "Chakula cha kujenga mwili", "Chumvi", "Soda"], answer: 1, why: "Kama robo chakula kikuu, robo chakula cha kujenga mwili, nusu mboga na matunda." },
      { objective: "O2", q: "Unapaswa kunywa chai lini kama unataka kupata madini ya chuma kutoka kwenye mlo wako?", options: ["Kati ya milo", "Pamoja na kila mlo", "Badala ya kula", "Haijalishi"], answer: 0, why: "Chai pamoja na milo inafanya madini ya chuma kuwa magumu kuingia mwilini." },
      { objective: "O2", q: "Badiliko dogo lipi linafanya wali uwe na mlo kamili zaidi?", options: ["Kuongeza chumvi zaidi", "Kuongeza sukari", "Kuongeza maharagwe na mboga za majani", "Kuongeza soda"], answer: 2, why: "Maharagwe na mboga za majani zinaongeza vyakula vya kujenga mwili na vya kulinda mwili." },
      { objective: "O3", q: "Kipi kinaficha chumvi nyingi?", options: ["Nyanya freshi", "Vidonge vya supu na unga wa viungo", "Maharagwe matupu", "Matunda freshi"], answer: 1, why: "Vidonge vya supu na unga wa viungo vina chumvi nyingi sana." },
      { objective: "O3", q: "Kinywaji kipi kinaongeza sukari huru nyingi zaidi?", options: ["Maji safi", "Chai isiyo na sukari", "Maziwa matupu", "Chupa ya soda"], answer: 3, why: "Soda zimejaa sukari iliyoongezwa." },
      { objective: "O3", q: "Muuzaji wa chakula Abidjan anaacha attiéké na samaki waliopikwa nje mchana wote kwenye joto. Ufunguo upi umevunjwa?", options: ["Weka chakula katika joto salama", "Pika vizuri kabisa", "Tumia chumvi yenye iodini", "Kula mboga zaidi"], answer: 0, why: "Vijidudu vinazaliana haraka katika chakula kilichopikwa kinachoachwa kwenye joto kwa saa nyingi." },
      { objective: "O3", q: "Njia ya kupika ya bei nafuu na yenye afya zaidi kuliko kukaanga kwenye mafuta mengi ni:", options: ["Mafuta zaidi", "Kupika mchuzi, kuchemsha au kupika kwa mvuke", "Kukaanga mara mbili", "Kuongeza sukari"], answer: 1, why: "Kupika mchuzi, kuchemsha na kupika kwa mvuke hutumia mafuta kidogo." },
      { objective: "O4", q: "Ili kulinganisha thamani, unapiga hesabu ya:", options: ["Mfuko upi unaonekana mkubwa zaidi", "Jina la muuzaji", "Gharama ya mlo mmoja wa familia", "Duka lipi lina watu wengi zaidi"], answer: 2, why: "Gharama kwa kila mlo inaonyesha unachopata kweli." },
      { objective: "O4", q: "Matunda na mboga kwa kawaida huwa nafuu zaidi:", options: ["Nje ya msimu", "Wakati wa msimu wake", "Katika pakiti", "Usiku tu"], answer: 1, why: "Wakati wa msimu, yanapatikana kwa wingi na ni nafuu zaidi." },
      { objective: "O4", q: "Mfano tu: mayai kwa mlo mmoja yanagharimu GHS 30 na maharagwe GHS 10. Kipi kina thamani bora kwa mlo huo?", options: ["Mayai", "Ni sawa", "Hakuna kati yao", "Maharagwe"], answer: 3, why: "Vyote ni vyakula vya kujenga mwili, na maharagwe yanagharimu theluthi moja tu." },
      { objective: "O5", q: "Kwa miezi 6 ya kwanza, mtoto mchanga anahitaji:", options: ["Maziwa ya mama pekee", "Maji na uji", "Chai", "Maziwa ya ng'ombe na sukari"], answer: 0, why: "WHO inashauri maziwa ya mama pekee kwa miezi 6 ya kwanza." },
      { objective: "O5", q: "Mtoto wa miezi 12 anapaswa kula milo mingapi kwa siku?", options: ["Mmoja", "3 hadi 4, pamoja na vitafunio 1 hadi 2 ikihitajika", "Maziwa ya mama pekee", "Kumi"], answer: 1, why: "WHO inashauri milo 3 hadi 4 kwa miezi 9 hadi 23, pamoja na vitafunio inapohitajika." },
      { objective: "O5", q: "Mtoto mdogo akiwa mgonjwa, WHO inashauri:", options: ["Kusimamisha chakula chote", "Kuacha kunyonyesha", "Vinywaji zaidi, kunyonyesha zaidi na vyakula laini anavyopenda", "Maji tu"], answer: 2, why: "Vinywaji na chakula cha ziada vinamsaidia mtoto kupona." },
      { objective: "O6", q: "Mpango mzuri wa milo wa wiki una:", options: ["Chakula kikuu kile kile tu, kila siku", "Mboga Jumapili tu", "Hakuna bajeti", "Makundi kadhaa ya vyakula kila siku"], answer: 3, why: "Lengo ni aina mbalimbali za vyakula kila siku." },
      { objective: "O6", q: "Njia ya bei nafuu ya kufanya maharagwe yatumike zaidi katika mpango ni:", options: ["Kuyapika mara moja na kuyatumia katika milo miwili", "Kutupa mabaki", "Kuyapika kila saa", "Kuyanunua katika pakiti ndogo sana"], answer: 0, why: "Kupika mara moja kunaokoa nishati na muda, na mabaki yaliyohifadhiwa kwa usalama yanatoa mlo wa pili." },
      { objective: "O6", q: "Mwishoni mwa wiki, unapaswa:", options: ["Kutupa mpango", "Kuangalia ulichotumia na ulichopoteza, na kubadilisha mpango wa wiki ijayo", "Kuongeza bajeti mara mbili", "Kuacha kupanga"], answer: 1, why: "Kukagua kunakusaidia kuboresha mpango unaofuata." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Makundi ya vyakula kila siku", objective: "O1", notYet: "Siku nyingi zina chakula kikuu tu, au makundi yametajwa vibaya.", meets: "Kila siku ina vyakula vya kutia nguvu, vya kujenga mwili na vya kulinda mwili, vimetajwa sahihi.", exceeds: "Pia ina mboga za kijani kibichi au vyakula vya rangi ya machungwa na chakula chenye madini ya chuma siku nyingi." },
      { name: "Milo kamili", objective: "O2", notYet: "Mboga au matunda hayapo katika baadhi ya siku.", meets: "Mboga au matunda kila siku, na milo mikuu inafuata sahani yenye mlo kamili.", exceeds: "Vyakula vyenye madini ya chuma vinaliwa pamoja na chakula chenye vitamini C, na chai inanywewa kati ya milo." },
      { name: "Chumvi, sukari na usalama", objective: "O3", notYet: "Hakuna tabia zilizoorodheshwa, au hazipunguzi chumvi wala sukari.", meets: "Inaorodhesha tabia moja ya chumvi, tabia moja ya sukari na mojawapo ya funguo tano za chakula salama zaidi.", exceeds: "Inaonyesha mabadiliko katika mapishi yaliyotajwa kutoka kwenye mpango." },
      { name: "Bajeti na orodha ya manunuzi", objective: "O4", notYet: "Hakuna bei, au jumla si sahihi au imezidi bajeti bila kubadilisha chochote.", meets: "Orodha ya manunuzi yenye bei za soko lake na jumla sahihi isiyozidi bajeti.", exceeds: "Inaonyesha angalau badiliko moja la thamani ndani ya kundi la vyakula na inataja vyakula vya msimu." },
      { name: "Kuwalisha wanaohitaji zaidi", objective: "O5", notYet: "Hakuna mpango kwa mtoto mdogo au mwanamke mjamzito au anayenyonyesha katika kaya.", meets: "Milo na vitafunio vinafuata ushauri wa WHO kwa umri wa mtoto au kwa mwanamke.", exceeds: "Uji mzito wenye kundi lingine la vyakula, na idadi sahihi ya milo, vimeandikwa kwa kila siku." },
      { name: "Mpango wa wiki", objective: "O6", notYet: "Baadhi ya siku hazipo.", meets: "Milo ya siku saba, tayari kubandikwa ukutani au kwenye simu.", exceeds: "Inatumia mabaki kwa usalama na inarudia vipendwa kwa aina mbalimbali." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kula mboga au matunda kila siku na maharagwe au samaki wadogo siku nyingi baada ya siku 30 (utafiti wa kufuatilia)",
      "Kaya zinazoripoti kutumia mpango wa milo wa wiki na kubaki ndani ya bajeti yao ya chakula",
      "Wanafunzi wanaoripoti kupunguza vidonge vya supu, chumvi au vinywaji vyenye sukari",
      "Kliniki washirika au wahudumu wa afya ya jamii wanaripoti ulishaji bora wa watoto wa miezi 6 hadi 23 katika familia za wanafunzi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu ya kawaida yenye kikokotoo, au karatasi na kalamu",
      "Bei kutoka soko au duka la karibu kwa masomo ya bei",
      "Sahani, bakuli au mchoro wa kuonyesha sahani yenye mlo kamili",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Washirika wazuri: vikundi vya wanawake, vikundi vya akiba, shule, kliniki na wahudumu wa afya ya jamii; maonyesho ya mapishi kwa vyakula vya kienyeji yanafanya kazi vizuri.",
      "Tumia vyakula na bei za eneo lako; bei za kozi ni mifano tu.",
      "Usitoe mlo maalum kwa magonjwa wala ushauri kuhusu virutubisho; peleka maswali hayo kliniki au kwa mtaalamu wa lishe.",
      "Kuwa mwangalifu: baadhi ya wanafunzi huenda hawana chakula cha kutosha. Lenga mabadiliko ya gharama ndogo na uelekeze kwenye msaada wa chakula wa eneo hilo pale unapopatikana.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
