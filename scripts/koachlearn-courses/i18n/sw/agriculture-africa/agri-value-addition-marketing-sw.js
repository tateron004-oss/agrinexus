"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-value-addition-marketing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const NAFDAC_FOOD = { name: "NAFDAC (Nigeria): Usajili wa vyakula, Kitengo cha Vyakula Vilivyotengenezwa Nigeria (wazalishaji wadogo, wa kati na wakubwa)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Mamlaka ya Chakula na Dawa ya Ghana (Ghana FDA): Usajili wa bidhaa", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Mamlaka ya Chakula na Dawa ya Ghana (Ghana FDA): Mpango wa Leseni kwa Hatua (Progressive Licensing Scheme) kwa wazalishaji wadogo (Pink, Yellow, Green)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Shirika la Viwango la Kenya (KEBS): Alama ya Ubora (Standardization Mark, uthibitisho wa bidhaa) na alama za ubora", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/WHO): Kamati ya Usafi wa Chakula na Kanuni za Jumla za Usafi wa Chakula (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "FAO TECA/STI: Chumba cha kupoza mboga bila nishati (Zero Energy Cooling Chamber)", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing-sw",
  lang: "sw",
  translationOf: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Uongezaji Thamani, Ufungashaji na Masoko ya Mazao",
  skills: "Kuchagua bidhaa ya kuongeza thamani, Kukokotoa gharama na kupanga bei ya bidhaa, Kusindika kwa usafi, Kufungasha na kuweka lebo, Kulinda bidhaa salama wakati wa usafiri, Kuuza moja kwa moja kwa wanunuzi",
  outcome: "kugeuza zao moja au maziwa kutoka shamba lako kuwa bidhaa iliyofungashwa na yenye lebo: kuichagua, kukokotoa gharama yake, kuitengeneza kwa usafi, kujua usajili unaohitajika, na kuiuza moja kwa moja kwa duka, shule, hoteli au mnunuzi wa mtandaoni kwa bei inayolipa.",
  about: [
    "Mazao ghafi mara nyingi huuzwa kwa bei ndogo wakati wa mavuno, kila mtu anapouza kitu kile kile. Kuyageuza kuwa bidhaa kama embe zilizokaushwa, unga wa muhogo, siagi ya karanga au mtindi kunaweza kuleta pesa zaidi, kudumu muda mrefu zaidi na kufikia wanunuzi wapya. Kozi hii ni kwa wakulima wadogo, vikundi vya wanawake na vijana, wajasiriamali vijana wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Afrika Magharibi inayozungumza Kifaransa na kote Afrika.",
    "Utachagua bidhaa moja inayofaa shamba lako na mnunuzi halisi, utakokotoa gharama ya pakiti moja na bei ya kuuza, utaandaa usindikaji safi, utabuni lebo, utajua shirika gani la kitaifa lazima liidhinishe bidhaa, utapanga jinsi ya kuilinda njiani kwenda kwa mnunuzi, na utaandaa maelezo mafupi ya kuuza moja kwa moja.",
    "Inajengwa juu ya kozi za Utunzaji na Uhifadhi wa Mazao Baada ya Mavuno na Vyama vya Ushirika vya Wakulima na Kufikia Soko, kwa hiyo hairudii uhifadhi, ukaushaji wala kuuza kama kikundi. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\" kwa shamba lako. Takwimu zote za pesa ni mifano, si bei halisi."
  ],
  finalTask: "Andaa mpango wa bidhaa wa ukurasa mmoja kwa bidhaa moja ya kuongeza thamani kutoka shamba lako: bidhaa na mnunuzi, karatasi ya gharama yenye gharama na bei ya kila pakiti, orodha ya kukagua usafi wa kuitengeneza, rasimu ya lebo pamoja na shirika la kitaifa unalopaswa kuuliza, jinsi utakavyoilinda njiani, na maelezo mafupi ya kuuza kwa mnunuzi mmoja wa moja kwa moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wanaokua, wafanyakazi wa mashamba, vikundi vya wanawake na vijana, wajasiriamali vijana wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Afrika Magharibi inayozungumza Kifaransa na kote Afrika. Wengi tayari wanauza mazao ghafi shambani au sokoni na wanataka bei bora.",
    startingPoint: "Wanaweza kulima na kuvuna zao au kutoa maziwa, na wanaweza kuyahifadhi na kuyakausha vizuri (tazama Utunzaji na Uhifadhi wa Mazao Baada ya Mavuno). Baadhi tayari wanatengeneza bidhaa kidogo kwa familia au majirani, bila kukokotoa gharama, bila lebo wala usajili.",
    gap: "Bidhaa nyingi za shamba zinapangiwa bei kwa kubahatisha, zinatengenezwa bila utaratibu wa usafi, zinauzwa bila lebo sahihi na zinapewa madalali wanaolipa kwa kuchelewa au kidogo. Wakulima wanahitaji kuchagua bidhaa ambayo mnunuzi anaitaka kweli, kukokotoa gharama yake, kuitengeneza kwa usalama, kuiwekea lebo, kujua idhini gani ya kitaifa inahitajika na kuiuza moja kwa moja, ili uongezaji thamani uwaletee pesa badala ya hasara.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanazungumza lugha hii kama lugha ya pili",
      "Vifaa: simu ya kawaida au simu janja, mara nyingi ya kushirikiana; kikokotoo; karatasi",
      "Pesa: bajeti ndogo; anza na kiasi kidogo na vifaa vya gharama ndogo",
      "Sheria: sheria za usajili na lebo za vyakula zinatofautiana kwa kila nchi na zinabadilika; wanafunzi wanauliza shirika lao la kitaifa",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi za shamba"
    ],
    prerequisites: "Zinasaidia: Utunzaji na Uhifadhi wa Mazao Baada ya Mavuno, na Vyama vya Ushirika vya Wakulima na Kufikia Soko. Kujumlisha, kuzidisha na kugawanya kwa msingi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mazao makuu au maziwa ya shamba lako na kile wanunuzi walio karibu nawe wanachoomba", action: "kuchagua bidhaa moja ya kuongeza thamani ya kutengeneza na mnunuzi wa kumuuzia", standard: "baada ya kulinganisha angalau chaguo mbili kwa mahitaji ya soko, malighafi, vifaa na sheria" },
    { id: "O2", condition: "Ukipewa gharama za mzunguko mmoja wa uzalishaji", action: "kukokotoa gharama ya pakiti moja na kupanga bei ya kuuza", standard: "ukihesabu malighafi, vifungashio, nishati, nguvu kazi, usafiri na hasara, kwa bei inayolipa kila gharama pamoja na faida" },
    { id: "O3", condition: "Kwa bidhaa uliyochagua, kuanzia usindikaji hadi kwa mnunuzi", action: "kuandika orodha ya kukagua usafi na mnyororo wa ubaridi", standard: "inayohusu mikono, maji, sehemu za kazi, malighafi, ufungashaji na kulinda bidhaa salama ghalani na safarini" },
    { id: "O4", condition: "Ukipewa bidhaa yako na nchi yako", action: "kuandaa rasimu ya lebo na kutaja shirika la kitaifa linalopaswa kuidhinisha bidhaa", standard: "yenye jina la bidhaa, viambato, uzito halisi, mzalishaji na mawasiliano, namba ya kundi na tarehe, na kumbusho la kukagua sheria za sasa za shirika hilo" },
    { id: "O5", condition: "Ukipewa duka, shule, hoteli au mnunuzi mmoja wa mtandaoni", action: "kuandaa maelezo ya kuuza moja kwa moja pamoja na masharti ya maandishi", standard: "yanayotaja bidhaa, bei, kiasi, usafirishaji, tarehe ya malipo na jinsi malalamiko yanavyoshughulikiwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutengeneza bidhaa inayolipa",
      lessons: [
        {
          title: "Kuchagua bidhaa ya kuongeza thamani",
          objectives: ["O1"],
          minutes: 5,
          goal: "Linganisha bidhaa mbili za kuongeza thamani kwa shamba lako na uchague moja yenye mnunuzi halisi.",
          text: [
            "Kuongeza thamani ni kufanya kitu kwa mazao yako kinachomfanya mnunuzi alipe zaidi: kukausha, kusaga, kukaanga, kutwanga, kuchachusha, kusafisha, kupanga katika pakiti au kufungasha vizuri tu. Maembe mabichi yanayooza kwa wiki moja yanaweza kuwa embe zilizokaushwa zinazodumu kwa miezi. Muhogo unaweza kuwa unga au gari, karanga zinaweza kuwa siagi ya karanga, na maziwa yanaweza kuwa mtindi.",
            "Anza na mnunuzi, si mashine. Uliza maduka, wapishi wa shule, hoteli na wafanyabiashara wa soko walio karibu nawe wananunua nini, kiasi gani, mara ngapi, kwa ukubwa gani wa pakiti na kwa bei gani. Bidhaa ambayo hakuna mtu wa karibu anayeiomba ni hatari.",
            "Kisha kagua mambo manne: mahitaji ya soko (nani ataiinunua na kiasi gani), malighafi (wewe au majirani mna ya kutosha, mwaka mzima au wakati wa msimu tu), vifaa na ujuzi (unaweza kuanza kidogo, kwa mfano na kikaushio cha jua au mashine ya kusaga ya kukodi), na sheria (bidhaa za maziwa na nyama zina hatari zaidi na kwa kawaida zinahitaji idhini zaidi kuliko unga mkavu). Linganisha angalau chaguo mbili kabla ya kuchagua."
          ],
          steps: ["Andika bidhaa mbili au tatu unazoweza kutengeneza kutoka mazao au maziwa yako.", "Uliza angalau wanunuzi watatu wananunua nini, kiasi gani na kwa bei gani.", "Pima kila bidhaa kwa mahitaji ya soko, malighafi, vifaa na ujuzi, na sheria.", "Chagua yenye alama bora na mnunuzi unayemjua kwa jina."],
          words: [["Kuongeza thamani", "kubadilisha au kufungasha mazao yako ili mnunuzi alipe zaidi."], ["Muda wa kudumu", "muda ambao bidhaa inabaki salama na nzuri kuliwa."], ["Bidhaa inayoharibika haraka", "bidhaa inayoharibika upesi, kama maziwa, mtindi au nyanya mbichi."]],
          slides: [
            { title: "Kuongeza thamani ni nini", bullets: ["Kausha, saga, twanga, kaanga, chachusha au fungasha mazao yako", "Embe kuwa embe zilizokaushwa; muhogo kuwa unga au gari", "Karanga kuwa siagi ya karanga; maziwa kuwa mtindi"] },
            { title: "Anza na mnunuzi", bullets: ["Uliza maduka, wapishi wa shule, hoteli na wafanyabiashara", "Wananunua nini, kiasi gani, mara ngapi", "Ukubwa wa pakiti na bei wanayolipa"] },
            { title: "Pima kila chaguo", bullets: ["Mahitaji: nani ananunua na kiasi gani", "Malighafi: ya kutosha, na katika miezi ipi", "Vifaa na ujuzi; sheria (maziwa yana hatari zaidi)"] }
          ],
          tryIt: "Chagua bidhaa mbili unazoweza kutengeneza. Uliza wanunuzi watatu walio karibu nawe kuhusu kila moja, kisha zipime zote mbili kwa mahitaji, malighafi, vifaa na sheria. Andika bidhaa unayochagua na mnunuzi utakayemlenga.",
          youCanNow: "kulinganisha bidhaa za kuongeza thamani kwa mahitaji ya soko, malighafi, vifaa na sheria, na kuchagua moja yenye mnunuzi halisi.",
          quickCheck: [
            { objective: "O1", q: "Unataka kuongeza thamani ya maembe yako. Ufanye nini kwanza?", options: ["Kununua kikaushio kikubwa kwa mkopo", "Kuiga kile jirani yako anachotengeneza", "Kuuliza wanunuzi walio karibu nawe wananunua nini na kwa bei gani", "Kutengeneza kadiri uwezavyo na kutafuta wanunuzi baadaye"], answer: 2, why: "Kuanza na wanunuzi halisi kunaonyesha kama kuna mahitaji kabla hujatumia pesa." },
            { objective: "O1", q: "Bidhaa ipi kwa kawaida inahitaji idhini na uangalifu ZAIDI ili kuitengeneza kwa usalama?", options: ["Mtindi unaotengenezwa kwa maziwa", "Unga wa muhogo", "Vipande vya embe vilivyokaushwa", "Maharagwe safi yaliyopangwa katika pakiti"], answer: 0, why: "Bidhaa za maziwa zinaharibika haraka na zinaweza kubeba vijidudu, kwa hiyo zina hatari zaidi na kwa kawaida zinadhibitiwa kwa ukali zaidi." }
          ]
        },
        {
          title: "Kukokotoa gharama na kupanga bei ya bidhaa yako",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kokotoa gharama ya pakiti moja na upange bei inayolipa kila gharama pamoja na faida.",
          text: [
            "Wasindikaji wengi wadogo wanapata hasara bila kujua, kwa sababu wanahesabu malighafi tu. Hesabu kila gharama ya mzunguko mmoja: malighafi, vifungashio na lebo, nishati (mafuta, mkaa, umeme, ada za kusaga), maji, nguvu kazi (pamoja na muda wako mwenyewe), usafiri, na ada kama usajili au ushuru wa soko zilizogawanywa kwa mwaka mzima.",
            "Kisha hesabu hasara: baadhi ya bidhaa inaharibika, inamwagika au inatolewa kama sampuli. Gawanya gharama yote ya mzunguko kwa idadi ya pakiti unazoweza kuuza kweli. Mfano (takwimu ni mifano tu): kikundi kimoja cha Ghana kinatengeneza siagi ya karanga. Karanga GHS 400, chupa na lebo GHS 150, kusaga na mafuta GHS 50, nguvu kazi GHS 100, usafiri GHS 50: jumla GHS 750. Wanajaza chupa 50 lakini wanatarajia kuuza 48, kwa hiyo kila chupa inagharimu kama GHS 15.60.",
            "Bei yako lazima ilipe gharama ya kila pakiti pamoja na faida kwa ajili ya mapato, akiba na matengenezo. Kisha linganisha bei na bidhaa zinazofanana madukani. Bei yako ikiwa juu sana kuliko zao, tafuta njia nafuu zaidi ya kuitengeneza, pakiti ndogo zaidi, au mnunuzi anayelipia ubora. Njia hii hii inafanya kazi kwa embe zilizokaushwa kwa KES, gari kwa NGN au mtindi kwa XOF."
          ],
          steps: ["Andika kila gharama ya mzunguko mmoja, pamoja na nguvu kazi yako.", "Hesabu pakiti ngapi unaweza kuuza kweli baada ya hasara.", "Gawanya gharama yote kwa pakiti unazoweza kuuza: hiyo ndiyo gharama ya kila pakiti.", "Ongeza faida ili upate bei yako.", "Linganisha na bidhaa zinazofanana madukani na ubadilishe mpango wako ikihitajika."],
          words: [["Gharama ya kila kipimo", "kiasi kinachokugharimu kutengeneza pakiti moja."], ["Faida", "pesa inayobaki kutoka kila mauzo baada ya gharama kulipwa."], ["Mzunguko (batch)", "awamu moja ya kutengeneza bidhaa, kwa mfano chupa 50 zilizotengenezwa siku moja."]],
          slides: [
            { title: "Hesabu kila gharama ya mzunguko", bullets: ["Malighafi, vifungashio, lebo", "Mafuta, umeme, kusaga, maji", "Nguvu kazi (yako pia), usafiri, ada"] },
            { title: "Gharama ya kila pakiti", bullets: ["Gharama yote ya mzunguko / pakiti unazoweza kuuza kweli", "Mfano: GHS 750 / chupa 48 = kama GHS 15.60", "Takwimu ni mifano tu"] },
            { title: "Panga bei", bullets: ["Gharama ya kila pakiti + faida = bei", "Linganisha bidhaa zinazofanana madukani", "Iko juu mno? Njia nafuu, pakiti ndogo au mnunuzi mwingine"] }
          ],
          tryIt: "Andaa karatasi ya gharama kwa mzunguko mmoja wa bidhaa uliyochagua. Andika kila gharama, pakiti unazotarajia kuuza, gharama ya kila pakiti na bei utakayotoza. Linganisha na bidhaa moja inayofanana dukani.",
          youCanNow: "kuandaa karatasi ya gharama, kukokotoa gharama ya pakiti moja na kupanga bei inayoilipa pamoja na faida.",
          quickCheck: [
            { objective: "O2", q: "Wasindikaji wadogo MARA NYINGI zaidi husahau gharama ipi?", options: ["Malighafi", "Nguvu kazi yao wenyewe na hasara", "Bei ya dukani", "Jina la bidhaa"], answer: 1, why: "Muda wako na pakiti zilizoharibika au za sampuli ni gharama halisi, na kuziacha kunaficha hasara." },
            { objective: "O2", q: "Mzunguko mmoja unagharimu KES 6,000 na unaweza kuuza pakiti 40. Gharama ya kila pakiti ni ipi?", options: ["KES 240", "KES 600", "KES 1,500", "KES 150"], answer: 3, why: "Gharama ya kila pakiti ni gharama yote ya mzunguko ikigawanywa kwa pakiti zilizouzwa: 6,000 / 40 = KES 150." }
          ]
        },
        {
          title: "Usafi na usalama wa chakula unaposindika",
          objectives: ["O3"],
          minutes: 6,
          goal: "Andika orodha ya kukagua usafi inayoilinda bidhaa yako salama unapoitengeneza.",
          text: [
            "Mnunuzi hatarudi, na mamlaka inaweza kusimamisha mauzo yako, bidhaa ikimfanya mtu augue. Kanuni za Jumla za Usafi wa Chakula za Codex Alimentarius ya kimataifa zinahusu mnyororo mzima, kuanzia shambani hadi kwa mtu anayekula chakula. Shirika la chakula la nchi yako linatumia mawazo kama haya linapokukagua.",
            "Mambo ya msingi: maji safi na salama; mikono kunawa kwa sabuni kabla ya kazi na baada ya choo; usifanye kazi ukiwa mgonjwa; funika nywele na vidonda; sehemu za kazi, vyombo na vifaa safi; malighafi itenganishwe na bidhaa iliyokamilika; wanyama, wadudu na panya wasiingie; na mahali safi na pakavu pa kuhifadhi pakiti.",
            "Anza na malighafi safi. Usisindike kamwe karanga au nafaka zenye ukungu, ambazo zinaweza kubeba sumu ya aflatoxin (tazama Utunzaji na Uhifadhi wa Mazao Baada ya Mavuno). Maziwa ya mtindi lazima yapashwe moto na kushughulikiwa kwa njia iliyojaribiwa kutoka kwa afisa ugani wa maziwa au shirika la viwango, na yawekwe baridi. Andika hatua zako ili kila mzunguko utengenezwe kwa njia ile ile, na upe kila mzunguko namba na tarehe."
          ],
          steps: ["Andika hatua za kutengeneza bidhaa yako kuanzia malighafi hadi pakiti iliyofungwa.", "Kwa kila hatua, andika kinachoweza kuifanya isiwe salama (uchafu, vijidudu, ukungu, wadudu).", "Andika kanuni ya usafi inayozuia hilo.", "Upe kila mzunguko namba na tarehe, na uandike nani aliutengeneza."],
          words: [["Usalama wa chakula", "kuweka chakula bila vijidudu, sumu na uchafu vinavyoweza kuwafanya watu waugue."], ["Uchafuzi", "uchafu, vijidudu au kemikali vinapoingia katika chakula."], ["Namba ya kundi", "msimbo kwenye kila pakiti unaokuambia ilitengenezwa lini na vipi, ili uweze kufuatilia tatizo."]],
          slides: [
            { title: "Kwa nini usafi ni muhimu", bullets: ["Mteja mmoja akiugua, biashara yako inaweza kufa", "Kanuni za usafi za Codex: kutoka shambani hadi sahanini", "Wakaguzi wanatafuta mambo haya ya msingi"] },
            { title: "Mambo ya msingi", bullets: ["Maji salama; nawa mikono kwa sabuni", "Usifanye kazi ukiwa mgonjwa; funika nywele na vidonda", "Vyombo safi; tenganisha malighafi na bidhaa iliyokamilika"] },
            { title: "Anza safi, andika", bullets: ["Usitumie kamwe nafaka au karanga zenye ukungu", "Maziwa: njia iliyojaribiwa, yawekwe baridi", "Hatua zile zile kila mzunguko; namba ya kundi na tarehe"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Andika hatua za kutengeneza bidhaa yako. Kando ya kila hatua, andika kitu kimoja kinachoweza kuifanya isiwe salama na kanuni inayokizuia. Hii ndiyo orodha yako ya kukagua usafi.",
          youCanNow: "kuandika orodha ya kukagua usafi kwa bidhaa yako na kuupa kila mzunguko namba na tarehe.",
          quickCheck: [
            { objective: "O3", q: "Mfanyakazi ana kuhara siku ya usindikaji. Nini kifanyike?", options: ["Akae mbali na usindikaji hadi apone", "Afanye kazi lakini anawe mikono mara moja", "Afanye kazi akivaa glavu tu", "Afungashe badala ya kuchanganya"], answer: 0, why: "Wafanyakazi wagonjwa wanaweza kupitisha vijidudu katika chakula, kwa hiyo wasikiguse hadi wapone." },
            { objective: "O3", q: "Baadhi ya karanga katika gunia zinaonekana kuwa na ukungu. Unafanya nini?", options: ["Kuzikaanga muda mrefu zaidi kuua ukungu", "Kuzichanganya na karanga nzuri", "Kuziondoa na kutozitumia kwa siagi ya karanga", "Kuziuza kwa bei ndogo"], answer: 2, why: "Ukungu unaweza kubeba aflatoxin, ambayo haiondolewi kwa kupika, kwa hiyo karanga zenye ukungu zisitumike." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutengeneza bidhaa inayolipa",
        questions: [
          { objective: "O1", q: "Kipi ni mfano wa kuongeza thamani?", options: ["Kuuza muhogo mbichi shambani", "Kusaga muhogo kuwa unga na kuufungasha", "Kupanda muhogo zaidi", "Kuacha muhogo ardhini muda mrefu zaidi"], answer: 1, why: "Kusaga na kufungasha kunabadilisha mazao kuwa bidhaa ambayo mnunuzi analipa zaidi." },
          { objective: "O1", q: "Una maziwa wakati wa mvua tu. Ukaguzi upi ni muhimu zaidi kabla ya kuchagua mtindi?", options: ["Rangi ya lebo", "Jina la chapa yako", "Marafiki zako wanapenda nini", "Kama una malighafi ya kutosha mwaka mzima na mnunuzi wake"], answer: 3, why: "Upatikanaji wa malighafi na mahitaji ya soko vinaamua kama bidhaa inaweza kumbakiza mnunuzi." },
          { objective: "O2", q: "Gharama ya kila pakiti ni nini?", options: ["Gharama yote ya mzunguko ikigawanywa kwa pakiti unazoweza kuuza kweli", "Bei ya dukani ukitoa nguvu kazi yako", "Gharama ya malighafi tu", "Chochote jirani yako anachotoza"], answer: 0, why: "Kugawanya gharama zote za mzunguko kwa pakiti zinazouzika kunatoa gharama halisi ya pakiti moja." },
          { objective: "O3", q: "Ipi ni kanuni ya msingi ya usafi katika usindikaji?", options: ["Kuruhusu kuku watembee sehemu ya kazi", "Kutumia maji yoyote uliyo nayo", "Kunawa mikono kwa sabuni kabla ya kazi na baada ya choo", "Kuweka malighafi na bidhaa iliyokamilika pamoja"], answer: 2, why: "Kunawa mikono kwa sabuni kunazuia vijidudu vya mikononi visiingie katika chakula." },
          { objective: "O3", q: "Kwa nini upe kila mzunguko namba na tarehe?", options: ["Ili pakiti ionekane nzuri", "Ili kufuatilia na kurekebisha tatizo mzunguko mmoja ukiharibika", "Kwa sababu wanunuzi wanapenda namba", "Ili kupandisha bei"], answer: 1, why: "Namba ya kundi inakuwezesha kujua pakiti zipi zilitoka katika mzunguko wenye tatizo na lini ulitengenezwa." }
        ]
      }
    },
    {
      name: "Sura 2: Kufungasha, kuweka lebo na kuuza moja kwa moja",
      lessons: [
        {
          title: "Vifungashio, lebo, chapa na usajili",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andaa rasimu ya lebo ya bidhaa yako na ujue shirika la kitaifa linalopaswa kuiidhinisha.",
          text: [
            "Kifungashio kizuri kinailinda bidhaa salama na kinawafanya wanunuzi waiamini. Chagua vifungashio vinavyofaa chakula vinavyozuia hewa, maji na wadudu: mifuko iliyofungwa kwa embe zilizokaushwa na unga, chupa safi zenye vifuniko vinavyobana kwa siagi ya karanga, na vikombe safi vilivyofungwa kwa mtindi. Chapa yako ni jina lako, nembo na ahadi, kwa mfano 'safi, ya hapa nyumbani, bila sukari iliyoongezwa'. Iwe rahisi na ile ile kwenye kila pakiti.",
            "Lebo kwa kawaida inaonyesha: jina la bidhaa, viambato, uzito halisi au ujazo, jina la mzalishaji na mawasiliano, namba ya kundi, tarehe ilipotengenezwa na tarehe ya mwisho ya matumizi au ya ubora bora, jinsi ya kuihifadhi, na namba yoyote ya usajili au alama. Nchi yako inaweza kuhitaji zaidi, kwa hiyo uliza kabla ya kuchapisha lebo nyingi.",
            "Vyakula vingi vilivyofungashwa vinahitaji idhini kabla ya kuuzwa madukani. Nchini Kenya, KEBS inatoa Alama ya Ubora (Standardization Mark) kwa bidhaa zinazofikia Kiwango cha Kenya. Nchini Nigeria, NAFDAC inasajili vyakula vinavyotengenezwa nchini kupitia Kitengo chake cha Vyakula Vilivyotengenezwa Nigeria, kwa njia za wazalishaji wadogo pamoja na wa kati na wakubwa. Nchini Ghana, Mamlaka ya Chakula na Dawa (FDA) inasajili bidhaa, na Mpango wake wa Leseni kwa Hatua (Progressive Licensing Scheme) unawaruhusu wazalishaji wadogo sana (watu mmoja hadi watano) kutimiza sheria kwa hatua. Nchini Côte d'Ivoire, uliza shirika la viwango la kitaifa CODINORM; nchi nyingine zina mashirika yao. Sheria, fomu na ada zinabadilika, kwa hiyo wasiliana na shirika kabla ya kuanza."
          ],
          steps: ["Chagua kifungashio kinachofaa chakula kinachozuia hewa, maji na wadudu.", "Andika jina la chapa yako na ahadi ya mstari mmoja.", "Andaa rasimu ya lebo: jina, viambato, uzito halisi, mzalishaji na mawasiliano, namba ya kundi, tarehe, uhifadhi.", "Tafuta shirika lako la kitaifa (KEBS, NAFDAC, Ghana FDA, CODINORM au jingine) na uulize bidhaa yako inahitaji nini.", "Chapisha lebo baada tu ya kujua sheria."],
          words: [["Chapa", "jina, nembo na ahadi vinavyowafanya wanunuzi waitambue na kuiamini bidhaa yako."], ["Uzito halisi", "uzito wa chakula kilicho ndani ya pakiti, bila kuhesabu pakiti yenyewe."], ["Usajili", "idhini rasmi kutoka shirika la kitaifa kwamba chakula kinaweza kuuzwa."], ["Tarehe ya ubora bora (best-before)", "tarehe ambayo hadi hapo bidhaa inabaki na ubora wake bora ikihifadhiwa kama lebo inavyosema."]],
          slides: [
            { title: "Vifungashio vinavyolinda", bullets: ["Vinavyofaa chakula; vinazuia hewa, maji na wadudu", "Mifuko iliyofungwa, chupa safi, vikombe vilivyofungwa", "Chapa rahisi ile ile kwenye kila pakiti"] },
            { title: "Lebo kwa kawaida inaonyesha", bullets: ["Jina, viambato, uzito halisi", "Jina la mzalishaji na mawasiliano", "Namba ya kundi, tarehe ya kutengeneza, ya ubora bora au ya mwisho", "Uhifadhi; namba ya usajili au alama"] },
            { title: "Nani anaidhinisha (kagua sheria za sasa)", bullets: ["Kenya: Alama ya Ubora ya KEBS (Standardization Mark)", "Nigeria: usajili wa NAFDAC (pia njia ya wazalishaji wadogo)", "Ghana: FDA; Mpango wa Leseni kwa Hatua kwa wazalishaji wadogo sana"] },
            { title: "Kabla ya kuchapisha", bullets: ["Côte d'Ivoire: CODINORM; nchi nyingine: shirika lao", "Sheria, fomu na ada zinabadilika", "Uliza shirika kwanza, kisha chapisha lebo"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Andaa rasimu ya lebo ya bidhaa yako kwenye karatasi au kwa zana ya bure kama Canva. Kisha tafuta tovuti au ofisi ya shirika la chakula la nchi yako na uandike maswali utakayoliuliza kuhusu usajili na lebo.",
          youCanNow: "kuandaa rasimu ya lebo ya bidhaa na kutaja shirika la kitaifa la kuuliza kabla ya kuuza madukani.",
          quickCheck: [
            { objective: "O4", q: "Lebo ya chakula kwa kawaida inahitaji kitu gani?", options: ["PIN ya benki ya mkulima", "Bei ya karanga ghafi", "Picha ya shamba", "Namba ya kundi na tarehe ya ubora bora"], answer: 3, why: "Namba ya kundi na tarehe zinawajulisha wanunuzi na wakaguzi ilitengenezwa lini na inadumu muda gani." },
            { objective: "O4", q: "Msindikaji mdogo wa Ghana mwenye wafanyakazi watatu anataka idhini ya FDA. Mpango upi unaweza kumsaidia kutimiza sheria kwa hatua?", options: ["Alama ya Ubora (Standardization Mark)", "Mpango wa Leseni kwa Hatua (Progressive Licensing Scheme)", "GLOBALG.A.P.", "Kitengo cha Vyakula Vilivyotengenezwa Nigeria"], answer: 1, why: "Mpango wa Leseni kwa Hatua wa Ghana FDA ni kwa wazalishaji wadogo wa watu mmoja hadi watano." }
          ]
        },
        {
          title: "Kulinda bidhaa salama njiani: mnyororo wa ubaridi na usafiri",
          objectives: ["O3"],
          minutes: 5,
          goal: "Panga jinsi bidhaa yako itakavyobaki salama na bila kuharibika kutoka ghala lako hadi kwa mnunuzi.",
          text: [
            "Bidhaa inaweza kutengenezwa vizuri kabisa na bado ikaharibika barabarani. Bidhaa zinazoharibika haraka kama mtindi na juisi mbichi zinahitaji mnyororo wa ubaridi: lazima zibaki baridi katika kila hatua, kuanzia kutengenezwa hadi kwenye friji ya mnunuzi. Zikipata joto njiani, vijidudu vinaongezeka na bidhaa inaweza kuwafanya watu waugue, hata ikionekana nzuri.",
            "Kwa safari fupi, tumia sanduku la baridi safi lenye vipande vya barafu na upeleke mapema asubuhi. Kubaliana na mnunuzi aiweke kwenye friji mara moja. Usigandishe tena wala kuuza tena mtindi uliopata joto. Bidhaa kavu kama unga wa muhogo, embe zilizokaushwa na siagi ya karanga hazihitaji baridi, lakini lazima zibaki kavu, zimefungwa, kivulini na mbali na mafuta, kemikali na wadudu.",
            "Panga safari: nani anaibeba, kwa nini (pikipiki, matatu, okada, basi au lori), inachukua muda gani, na pakiti zinalindwa vipi zisibondeke, zisipigwe jua wala mvua. Upozaji wa gharama ndogo kama chumba cha kupoza bila nishati cha FAO (zero energy cooling chamber) kinaweza kuweka mazao baridi zaidi kabla ya kuyasindika. Andika hatua zako za mnyororo wa ubaridi na usafiri kwenye orodha yako ya kukagua usafi."
          ],
          steps: ["Amua kama bidhaa yako inaharibika haraka (inahitaji baridi) au ni kavu (inahitaji kubaki kavu na imefungwa).", "Kwa bidhaa za baridi: sanduku la baridi, vipande vya barafu, kupeleka mapema, friji ya mnunuzi mara moja.", "Kwa bidhaa kavu: zimefungwa, kivulini, mbali na kemikali na wadudu.", "Panga nani anaibeba, vipi, kwa muda gani, na pakiti zinalindwa vipi.", "Ongeza hatua hizi kwenye orodha yako ya kukagua usafi."],
          words: [["Mnyororo wa ubaridi", "kuweka bidhaa baridi katika kila hatua kuanzia kuitengeneza hadi kuiuza."], ["Sanduku la baridi", "sanduku lenye kinga ya joto linaloweka vitu baridi kwa barafu au vipande vya barafu."]],
          slides: [
            { title: "Mnyororo wa ubaridi kwa bidhaa zinazoharibika", bullets: ["Mtindi na juisi lazima vibaki baridi njia nzima", "Joto barabarani = vijidudu vinaongezeka, hata ikionekana nzuri", "Usiuze tena kamwe mtindi uliopata joto"] },
            { title: "Safari fupi, gharama ndogo", bullets: ["Sanduku la baridi safi lenye vipande vya barafu", "Peleka mapema asubuhi", "Mnunuzi aiweke kwenye friji mara moja"] },
            { title: "Bidhaa kavu", bullets: ["Zibaki kavu, zimefungwa na kivulini", "Mbali na mafuta, kemikali na wadudu", "Linda pakiti zisibondeke na zisinyeshewe"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Andika safari ya bidhaa yako kutoka ghala lako hadi kwa mnunuzi wako: nani anaibeba, vipi, kwa muda gani, na nini kinaiweka baridi au kavu na bila kuharibika. Iongeze kwenye orodha yako ya kukagua usafi.",
          youCanNow: "kupanga mnyororo wa ubaridi au njia ya kusafirisha bidhaa kavu inayoilinda bidhaa yako salama hadi mnunuzi aipokee.",
          quickCheck: [
            { objective: "O3", q: "Mtindi wako ulikaa juani saa tatu kwenye basi lililochelewa. Unafanya nini?", options: ["Kuuuza haraka kwa punguzo", "Kuurudisha kwenye friji na kuuuza kesho", "Usiuuze; hauko salama tena", "Kuuonja na kuuuza ukionekana sawa"], answer: 2, why: "Mtindi uliopata joto unaweza kuota vijidudu usivyoweza kuona wala kuonja, kwa hiyo usiuzwe." },
            { objective: "O3", q: "Embe zilizokaushwa zinahitaji nini zaidi njiani kwenda kwa mnunuzi?", options: ["Zibaki kavu, zimefungwa na kivulini", "Zigandishwe", "Ziwekwe hewa wazi", "Ziwekwe karibu na dumu la mafuta"], answer: 0, why: "Bidhaa kavu zinaharibika zikipata unyevu, joto kali au zikiwa karibu na kemikali, si kwa sababu hazijawekwa baridi." }
          ]
        },
        {
          title: "Kuuza moja kwa moja: maduka, shule, hoteli na mtandaoni",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andaa maelezo ya kuuza na masharti ya maandishi ili kuuza bidhaa yako moja kwa moja kwa mnunuzi mmoja.",
          text: [
            "Si kila dalali ni mbaya: baadhi ya wafanyabiashara wanalipa kwa haki na wanabeba mazao ambayo wewe huwezi. Lakini angalia dalili za unyonyaji: mizani iliyochezewa, bei inayobadilishwa baada ya kupeleka, malipo yanayokuja baada ya miezi au hayaji kabisa, na 'nunua sasa, lipa baadaye' kutoka kwa watu usiowajua ambao kisha wanatoweka. Kuuza moja kwa moja kunaweza kukupa bei bora na mteja wa kudumu.",
            "Kila mnunuzi anataka vitu tofauti. Maduka ya mtaani na maduka makubwa yanataka lebo, upatikanaji wa kudumu na wakati mwingine yanauza kwa mali-kauli (yanakulipa baada ya bidhaa kuuzwa tu), ambayo ni hatari. Shule na hospitali zinanunua kwa wingi kwa ratiba na mara nyingi zinahitaji nukuu ya bei, ankara na wakati mwingine usajili. Hoteli na migahawa zinataka ubora ule ule kila wakati. Wanunuzi wa mtandaoni kwenye WhatsApp, Facebook au soko la mtandaoni wanataka picha zilizo wazi, bei na usafirishaji wa haraka.",
            "Maelezo mazuri ya kuuza ni mafupi: bidhaa ni nini, kwa nini ni nzuri (safi, ya hapa nyumbani, mbichi), bei, ukubwa wa pakiti, unaweza kuleta kiasi gani na mara ngapi, na usafirishaji. Kisha kubalianeni masharti kwa maandishi, hata kwa ujumbe rahisi: kiasi, bei, siku ya kupeleka, tarehe na njia ya malipo (kwa mfano pesa za simu), na nini kinatokea pakiti ikiharibika. Weka nakala. Usimpe mnunuzi yeyote kamwe PIN wala nywila. Kwa mkataba mkubwa au wa muda mrefu, mwombe mshauri unayemwamini ausome kwanza."
          ],
          steps: ["Chagua mnunuzi mmoja: duka, shule, hoteli au wateja wa mtandaoni.", "Andika maelezo mafupi ya kuuza: bidhaa, kwa nini ni nzuri, bei, ukubwa wa pakiti, kiasi unachoweza kuleta, usafirishaji.", "Beba sampuli na lebo yako.", "Kubalianeni masharti kwa maandishi: kiasi, bei, usafirishaji, tarehe na njia ya malipo, pakiti zilizoharibika.", "Weka nakala na uandike kila upelekaji na kila malipo."],
          words: [["Dalali", "mfanyabiashara anayenunua kutoka kwa wakulima na kuwauzia wengine."], ["Mali-kauli (consignment)", "duka linachukua bidhaa zako na kukulipa baada tu ya kuziuza."], ["Maelezo ya kuuza (pitch)", "ofa fupi na iliyo wazi kwa mnunuzi."], ["Ankara", "bili ya maandishi inayomwomba mnunuzi alipe bidhaa zilizopelekwa."]],
          slides: [
            { title: "Angalia unyonyaji", bullets: ["Mizani iliyochezewa; bei inabadilishwa baada ya kupeleka", "Malipo baada ya miezi au hayaji kabisa", "Watu usiowajua wanaosema 'lipa baadaye' na kutoweka"] },
            { title: "Kila mnunuzi anataka nini", bullets: ["Maduka: lebo, upatikanaji wa kudumu; hatari ya mali-kauli", "Shule: kwa wingi, kwa ratiba, nukuu ya bei na ankara", "Hoteli: ubora ule ule kila wakati; mtandaoni: picha, usafirishaji wa haraka"] },
            { title: "Maelezo mafupi ya kuuza", bullets: ["Ni nini na kwa nini ni nzuri", "Bei, ukubwa wa pakiti, kiasi gani na mara ngapi", "Usafirishaji; beba sampuli na lebo"] },
            { title: "Andika masharti", bullets: ["Kiasi, bei, siku ya kupeleka", "Tarehe na njia ya malipo; pakiti zilizoharibika", "Weka nakala; usitoe PIN kamwe"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa bidhaa wa ukurasa mmoja. Weka bidhaa na mnunuzi, karatasi yako ya gharama na bei, orodha yako ya kukagua usafi na mnyororo wa ubaridi, rasimu ya lebo yako na shirika la kitaifa, na maelezo mafupi ya kuuza pamoja na masharti utakayomwomba mnunuzi akubali kwa maandishi.",
          youCanNow: "kumweleza mnunuzi wa moja kwa moja kuhusu bidhaa yako na kukubaliana naye masharti ya maandishi yaliyo wazi kuhusu bei, usafirishaji na malipo.",
          quickCheck: [
            { objective: "O5", q: "Duka linataka kuchukua siagi yako ya karanga kwa mali-kauli. Hatari ni ipi?", options: ["Lazima ulilipe duka kwanza", "Unalipwa baada tu ya kuuzwa, na pakiti zisizouzwa zinaweza kurudishwa", "Duka litabadilisha lebo yako", "Hakuna hatari kabisa"], answer: 1, why: "Kwa mali-kauli wewe unabeba hatari hadi bidhaa iuzwe, kwa hiyo kubalianeni muda gani na nini kitatokea kwa pakiti zisizouzwa." },
            { objective: "O5", q: "Hoteli inakubali kununua mtindi kila wiki. Mkubaliane nini kwa maandishi?", options: ["Jina la hoteli tu", "PIN yako ya pesa za simu", "Hakuna; kupeana mikono kunatosha", "Kiasi, bei, siku ya kupeleka, tarehe ya malipo na nini kinatokea kwa pakiti zilizoharibika"], answer: 3, why: "Masharti ya maandishi kuhusu kiasi, bei, usafirishaji na malipo yanazuia migogoro baadaye." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufungasha, kuweka lebo na kuuza moja kwa moja",
        questions: [
          { objective: "O4", q: "Shirika lipi linatoa Alama ya Ubora (Standardization Mark) kwa bidhaa nchini Kenya?", options: ["NAFDAC", "Ghana FDA", "KEBS", "CODINORM"], answer: 2, why: "KEBS, Shirika la Viwango la Kenya, ndilo linalotoa Alama ya Ubora." },
          { objective: "O4", q: "Uchapishe lebo nyingi lini?", options: ["Baada ya kuuliza shirika lako la kitaifa linahitaji nini", "Kabla ya kuchagua bidhaa", "Kabla ya kuongea na mnunuzi yeyote", "Baada tu ya mnunuzi kulalamika"], answer: 0, why: "Sheria za lebo zinatofautiana kwa kila nchi na zinabadilika, kwa hiyo uliza kwanza ili usipoteze lebo." },
          { objective: "O3", q: "Bidhaa ipi inahitaji mnyororo wa ubaridi?", options: ["Unga wa muhogo", "Embe zilizokaushwa", "Siagi ya karanga katika chupa iliyofungwa", "Mtindi"], answer: 3, why: "Mtindi unaharibika haraka na lazima ubaki baridi kuanzia kutengenezwa hadi kwa mnunuzi." },
          { objective: "O5", q: "Ipi ni dalili ya hatari ya dalali mnyonyaji?", options: ["Kulipa siku iliyokubaliwa", "Kubadilisha bei baada ya wewe kupeleka", "Kupima mbele yako", "Kutoa risiti"], answer: 1, why: "Kubadilisha bei baada ya kupeleka kunakuhamishia wewe hasara na kuvunja uaminifu." },
          { objective: "O5", q: "Nini kinafaa katika maelezo mafupi ya kuuza kwa mpishi wa shule?", options: ["Historia ya maisha yako", "Bei za jirani yako", "Bidhaa, bei, ukubwa wa pakiti, kiasi na usafirishaji", "PIN yako ya benki"], answer: 2, why: "Mnunuzi anahitaji kujua unatoa nini, kwa bei gani, kiasi gani na inafikaje." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uongezaji Thamani, Ufungashaji na Masoko ya Mazao",
    questions: [
      { objective: "O1", q: "Kuongeza thamani kunamaanisha nini?", options: ["Kubadilisha au kufungasha mazao ili wanunuzi walipe zaidi", "Kupanda zao jipya", "Kuuza shambani", "Kukopa pesa za mbegu"], answer: 0, why: "Kukausha, kusaga, kusindika au kufungasha vizuri kunaweza kuleta bei ya juu zaidi." },
      { objective: "O1", q: "Nini kiongoze kwanza uchaguzi wako wa bidhaa?", options: ["Mashine ya bei nafuu zaidi unayoweza kupata", "Kinachoonekana kizuri kwenye lebo", "Kile ambacho wanunuzi walio karibu nawe wananunua kweli", "Kinachopendwa kwenye televisheni"], answer: 2, why: "Bidhaa yenye mnunuzi halisi ina hatari ndogo kuliko iliyotengenezwa kwa matumaini tu." },
      { objective: "O1", q: "Upime kila chaguo la bidhaa kwa mambo gani manne?", options: ["Rangi, ladha, harufu, ukubwa", "Mahitaji ya soko, malighafi, vifaa na ujuzi, sheria", "Bei, chapa, nembo, kauli mbiu", "Mvua, jua, upepo, udongo"], answer: 1, why: "Mambo haya manne yanaonyesha kama unaweza kuitengeneza, kuiuza na kufanya hivyo kisheria." },
      { objective: "O1", q: "Miembe yako inazaa miezi miwili kwa mwaka. Hii inamaanisha nini kwa embe zilizokaushwa?", options: ["Huwezi kutengeneza embe zilizokaushwa", "Lazima uuze zote zikiwa mbichi", "Bei haijalishi", "Panga malighafi: nunua kutoka kwa majirani au tengeneza za kutosha kuuza mwaka mzima"], answer: 3, why: "Malighafi ya msimu inaathiri muda gani unaweza kumletea mnunuzi bidhaa." },
      { objective: "O2", q: "Gharama ipi inafaa kuwa kwenye karatasi yako ya gharama?", options: ["Malighafi tu", "Muda wa nguvu kazi yako mwenyewe", "Usafiri wa mnunuzi kurudi nyumbani", "Ada za shule za watoto wa jirani yako"], answer: 1, why: "Nguvu kazi yako ni gharama halisi; kuiacha kunaficha kama bidhaa inalipa." },
      { objective: "O2", q: "Mzunguko mmoja wa gari unagharimu NGN 60,000 na unaweza kuuza mifuko 120. Gharama ya kila mfuko ni ipi?", options: ["NGN 500", "NGN 200", "NGN 1,200", "NGN 7,200"], answer: 0, why: "60,000 ikigawanywa kwa mifuko 120 ni NGN 500 kwa kila mfuko." },
      { objective: "O2", q: "Unapangaje bei yako?", options: ["Kuiga bei ya chini kabisa sokoni", "Kutoza kile mnunuzi wa kwanza anachotoa", "Gharama ya kila pakiti pamoja na faida, kisha kulinganisha na bei za dukani", "Kutoza sawa na mazao ghafi"], answer: 2, why: "Bei lazima ilipe gharama zote pamoja na faida na bado ieleweke kwa wanunuzi." },
      { objective: "O2", q: "Bei yako iko juu sana kuliko bidhaa zinazofanana madukani. Hatua nzuri inayofuata ni ipi?", options: ["Kukata tamaa mara moja", "Kupandisha bei zaidi", "Kuficha bei", "Kutafuta njia nafuu zaidi, pakiti ndogo zaidi au mnunuzi anayelipia ubora"], answer: 3, why: "Kubadilisha gharama, ukubwa wa pakiti au mnunuzi kunaweza kuifanya bidhaa iweze kushindana." },
      { objective: "O3", q: "Kipi ni sehemu ya orodha ya kukagua usafi?", options: ["Mikono kunawa kwa sabuni kabla ya kazi", "Wanyama kuruhusiwa sehemu ya kazi", "Malighafi na bidhaa iliyokamilika kuhifadhiwa pamoja", "Maji yoyote unayoweza kupata"], answer: 0, why: "Kunawa mikono kwa sabuni kunazuia vijidudu visiingie katika chakula." },
      { objective: "O3", q: "Kwa nini usitumie kamwe karanga zenye ukungu kwa siagi ya karanga?", options: ["Ni nzito mno", "Zinaweza kubeba aflatoxin, ambayo haiondolewi kwa kupika", "Zinachafua chupa", "Wanunuzi hawapendi rangi yake"], answer: 1, why: "Aflatoxin ni sumu iliyofichika ambayo kukaanga hakuiharibu." },
      { objective: "O3", q: "Mtindi unapelekwa katika sanduku la baridi lenye vipande vya barafu mapema asubuhi. Huu ni mfano wa:", options: ["Chapa", "Mali-kauli", "Mnyororo wa ubaridi", "Usajili"], answer: 2, why: "Kuweka bidhaa inayoharibika haraka baridi katika kila hatua ndio mnyororo wa ubaridi." },
      { objective: "O3", q: "Unga wa muhogo usafirishwe vipi kwenda kwa mnunuzi?", options: ["Katika mifuko iliyo wazi kwenye mvua", "Karibu na mafuta na kemikali", "Ukiwa umegandishwa", "Ukiwa mkavu, umefungwa, kivulini na mbali na wadudu"], answer: 3, why: "Bidhaa kavu zinaharibika zikipata unyevu au uchafu, kwa hiyo lazima zibaki kavu na zimelindwa." },
      { objective: "O4", q: "Kitu gani kwa kawaida kiko kwenye lebo ya chakula?", options: ["Viambato na uzito halisi", "PIN ya mkulima", "Jina la mnunuzi", "Bei ya mbolea"], answer: 0, why: "Viambato na uzito halisi vinawaambia wanunuzi kilicho ndani na kiasi gani." },
      { objective: "O4", q: "Nchini Nigeria, shirika lipi linasajili vyakula vilivyofungashwa vinavyotengenezwa nchini?", options: ["KEBS", "Ghana FDA", "CODINORM", "NAFDAC"], answer: 3, why: "NAFDAC inasajili vyakula vilivyotengenezwa Nigeria, pamoja na vya wazalishaji wadogo." },
      { objective: "O4", q: "Chapa ni nini?", options: ["Aina ya chupa", "Jina, nembo na ahadi ambavyo wanunuzi wanavitambua", "Leseni ya serikali", "Namba ya kundi"], answer: 1, why: "Chapa inawasaidia wanunuzi kuitambua na kuiamini bidhaa yako." },
      { objective: "O4", q: "Sheria za usajili wa bidhaa yako haziko wazi. Unafanya nini?", options: ["Kuuza tu na kusubiri", "Kumuuliza mfanyabiashara anafikiri nini", "Kuwasiliana na shirika lako la kitaifa la chakula au viwango na kukagua sheria zake za sasa", "Kunakili namba ya usajili ya chapa nyingine"], answer: 2, why: "Shirika la kitaifa pekee ndilo linaloweza kusema bidhaa yako inahitaji nini; sheria na ada zinabadilika." },
      { objective: "O5", q: "Ipi ni sababu nzuri ya kuuza moja kwa moja kwa shule?", options: ["Oda za kudumu kwa wingi kwa ratiba", "Hakuna makaratasi kamwe", "Shule hazichelewi kulipa kamwe", "Hakuna haja ya ubora"], answer: 0, why: "Shule mara nyingi zinanunua mara kwa mara kwa wingi, lakini zinahitaji nukuu ya bei, ankara na ubora usiobadilika." },
      { objective: "O5", q: "Hoteli kwa kawaida zinajali nini zaidi?", options: ["Sampuli za bure kila wiki", "Rangi ya nguo zako", "Ukubwa wa shamba lako", "Ubora ule ule kila wakati"], answer: 3, why: "Hoteli zinawahudumia wageni kila siku na zinahitaji ubora na upatikanaji usiobadilika." },
      { objective: "O5", q: "Unauza embe zilizokaushwa kwenye WhatsApp. Nini kinawasaidia wanunuzi wa mtandaoni?", options: ["Kutoonyesha bei", "Picha zilizo wazi, bei na usafirishaji wa haraka", "Kuwaomba PIN zao za benki", "Ujumbe mrefu wa sauti"], answer: 1, why: "Wanunuzi wa mtandaoni wanaamua kwa picha na bei zilizo wazi, na wanatarajia usafirishaji wa haraka." },
      { objective: "O5", q: "Mnunuzi anakubali kwa simu kununua chupa 50 kila wiki. Hatua bora inayofuata ni ipi?", options: ["Kupeleka na kutumaini watalipa", "Kumtumia PIN yako ya pesa za simu", "Kuandika kiasi, bei, siku ya kupeleka na tarehe ya malipo katika ujumbe na kuweka nakala", "Kusubiri yeye apange masharti baadaye"], answer: 2, why: "Masharti ya maandishi, hata katika ujumbe, yanalinda pande zote mbili kukitokea mgogoro." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango wa bidhaa na ujaribu tena.",
    criteria: [
      { name: "Bidhaa na mnunuzi", objective: "O1", notYet: "Bidhaa imetajwa bila mnunuzi, au uchaguzi haukulinganishwa na chaguo jingine.", meets: "Bidhaa moja na mnunuzi mmoja anayejulikana kwa jina, vilivyochaguliwa baada ya kulinganisha chaguo mbili kwa mahitaji ya soko, malighafi, vifaa na sheria.", exceeds: "Pia inaonyesha jinsi malighafi itakavyopatikana mwaka mzima, kwa mfano kutoka kwa majirani au kikundi." },
      { name: "Karatasi ya gharama na bei", objective: "O2", notYet: "Malighafi tu ndiyo imehesabiwa, au hakuna gharama ya kila pakiti.", meets: "Kila gharama ya mzunguko, pamoja na nguvu kazi na hasara, inatoa gharama ya kila pakiti na bei yenye faida.", exceeds: "Bei imelinganishwa na bei za dukani na mpango unaonyesha nini cha kubadilisha ikiwa iko juu mno." },
      { name: "Usafi na mnyororo wa ubaridi", objective: "O3", notYet: "Hakuna hatua zilizoandikwa, au hatari kuu kama kunawa mikono, ukungu au kuweka baridi hazipo.", meets: "Orodha ya kukagua inahusu maji, mikono, sehemu za kazi, malighafi, ufungashaji, namba za kundi na usafiri salama.", exceeds: "Kila hatua inataja hatari na kanuni, na mtu mwingine angeweza kuifuata bila msaada." },
      { name: "Lebo na usajili", objective: "O4", notYet: "Lebo haina viambato, uzito halisi, mawasiliano au tarehe, au hakuna shirika la kitaifa lililotajwa.", meets: "Lebo inaonyesha jina, viambato, uzito halisi, mzalishaji na mawasiliano, namba ya kundi, tarehe na uhifadhi, na inataja shirika la kuuliza.", exceeds: "Mwanafunzi amewasiliana na shirika na ameandika linachohitaji na gharama yake." },
      { name: "Maelezo ya kuuza na masharti", objective: "O5", notYet: "Hakuna maelezo ya kuuza, au hakuna masharti ya maandishi ya bei, usafirishaji na malipo.", meets: "Maelezo mafupi ya kuuza pamoja na masharti ya maandishi: kiasi, bei, siku ya kupeleka, tarehe na njia ya malipo, pakiti zilizoharibika.", exceeds: "Maelezo yalitolewa kwa mnunuzi halisi, na mwanafunzi aliandika jibu lake." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaouza angalau mzunguko mmoja wa bidhaa iliyoongezwa thamani ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti bei ya juu zaidi kwa kila kilo ya mazao ghafi kuliko kuyauza yakiwa ghafi (utafiti wa kufuatilia)",
      "Wanafunzi wanaowasiliana au kujisajili na shirika lao la kitaifa la chakula au viwango",
      "Wanafunzi wanaoripoti hasara chache wakati wa mavuno kwa sababu mazao yalisindikwa badala ya kuuzwa kwa bei ndogo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu (simu janja inasaidia) na kikokotoo",
      "Karatasi na kalamu kwa karatasi ya gharama, orodha ya kukagua usafi na lebo",
      "Si lazima: zana ya bure ya kubuni kama Canva kwa lebo",
      "Sampuli ya mazao yako ghafi na bidhaa inayofanana kutoka duka la karibu ya kulinganisha",
      "Kama dakika 90 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuwatembelea wanunuzi"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi kwa bidhaa (kwa mfano embe zilizokaushwa, unga wa muhogo, siagi ya karanga, mtindi) ili washirikiane utafiti wa wanunuzi na gharama.",
      "Fanyeni somo la gharama kwa mzunguko halisi ambao kikundi kimetengeneza, na waache wanafunzi wakague hesabu za wenzao.",
      "Mwalike afisa kutoka shirika la kitaifa la chakula au viwango (KEBS, NAFDAC, Ghana FDA, CODINORM au shirika la nchi yako) aeleze hatua za sasa za usajili; usitaje ada kwa kukumbuka.",
      "Fanyeni matembezi ya vitendo ya usafi mahali halisi pa usindikaji, na sisitiza kwamba bidhaa za maziwa zinahitaji njia iliyojaribiwa na mnyororo wa ubaridi.",
      "Pima kazi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati; igizeni maelezo ya kuuza huku mwanafunzi mmoja akiwa mnunuzi."
    ]
  }
};
