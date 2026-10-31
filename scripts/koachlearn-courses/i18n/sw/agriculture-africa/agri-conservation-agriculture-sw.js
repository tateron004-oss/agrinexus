"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-conservation-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CA = { name: "FAO: Kilimo hifadhi (Conservation Agriculture): maana na kanuni tatu", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT: Mashimo ya kupandia ya zai au tassa (Niger)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Athari ya kilimo hifadhi kwenye mavuno ya mahindi katika maeneo kame ya Zimbabwe (Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT: Majaribio ya kilimo hifadhi mashambani Zambia (vishimo, ripa, kupanda moja kwa moja dhidi ya kulima kwa plau, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Kenya (bidhaa zilizosajiliwa)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Nigeria (kemikali za kilimo zilizosajiliwa)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Ghana (usajili wa viuatilifu)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO: Umuhimu wa mboji asilia ya udongo (soil organic matter)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture-sw",
  lang: "sw",
  translationOf: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Kilimo Hifadhi kwa Misimu ya Ukame",
  skills: "Kutumia kanuni tatu za kilimo hifadhi, Kuchimba vishimo vya kupandia na mashimo ya zai, Kuchagua ripa au kupanda moja kwa moja, Kusimamia matandazo, Kudhibiti magugu bila kulima, Kupanga msimu na kipindi cha mpito",
  outcome: "kupanga na kuanza msimu mmoja wa kilimo hifadhi kwenye shamba moja: jinsi utakavyoandaa ardhi bila kulima, kuifunika, kubadilisha mazao, kudhibiti magugu, na zana na tarehe utakazotumia, pamoja na kipande cha kulinganisha ili kufuatilia matokeo katika miaka ya mpito.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wakulima wa biashara wanaokua, wafanyakazi wa mashambani, vijana wajasiriamali wa kilimo na maafisa ugani katika maeneo makavu ya Kenya, Nigeria, Ghana, Burkina Faso, Senegal na kote Afrika, ambako mvua ni fupi, vipindi vya ukavu ni vya kawaida, na kulima kunaacha udongo wazi, mgumu na wenye kiu.",
    "Sura ya 1 inaeleza kanuni tatu za kilimo hifadhi kama FAO inavyozieleza na inaonyesha jinsi ya kuandaa ardhi bila kulima: vishimo vya kupandia, mashimo ya zai, kupasua kwa ripa na kupanda moja kwa moja. Sura ya 2 inahusu kufunika udongo kwa matandazo, kudhibiti magugu bila kulima, zana na wakati wa kazi kwa msimu, unachotarajia katika miaka ya ukame, na kuvuka misimu michache ya kwanza.",
    "Umwagiliaji na uvunaji wa maji ya mvua viko katika kozi \"Umwagiliaji na Usimamizi wa Maji\", na misingi ya mboji na matandazo iko katika \"Afya na Rutuba ya Udongo\"; kozi hii haivirudii. Anza na shamba moja na uache kipande kilicholimwa kando yake ili kulinganisha. Kila somo linachukua kama dakika tano na linaisha na kazi kwenye ardhi yako mwenyewe."
  ],
  finalTask: "Andika mpango wa msimu mmoja wa kilimo hifadhi kwa shamba moja (au mfano: ekari 1 ya mahindi na kunde Machakos, hekta 2 za mtama kaskazini mwa Ghana, au hekta 1 ya uwele na karanga kwenye Uwanda wa Kati wa Burkina Faso): mchoro wa shamba; jinsi utakavyoliandaa bila kulima (vishimo, mashimo ya zai, ripa au kupanda moja kwa moja) na kwa nini; jinsi utakavyoweka angalau asilimia 30 ya udongo ukiwa umefunikwa; zao na mzunguko au mseto wa mazao; mpango wako wa magugu; kalenda ya kazi, zana na gharama kwa kila mwezi; na jinsi utakavyolinganisha na kipande kilicholimwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa biashara wanaokua, wafanyakazi wa mashambani, vijana wajasiriamali wa kilimo na maafisa ugani katika maeneo makavu ya kilimo kote Afrika (Kenya, Nigeria, Ghana na Sahel inayozungumza Kifaransa), wanaolima mahindi, mtama, uwele, kunde, maharagwe na karanga, mara nyingi wakiwa na ng'ombe au mbuzi wanaokula mabaki ya mazao.",
    startingPoint: "Wanaandaa ardhi kwa kulima kwa ng'ombe wa kulimia, trekta au jembe la mkono, na mara nyingi huchoma mabaki au huyaacha yaliwe na mifugo. Wengi wamesikia kuhusu mashimo ya zai au vishimo lakini hawajawahi kuendesha msimu kamili wa kilimo hifadhi wala kupanga kwa ajili ya magugu na ushindani wa mabaki unaokuja nao.",
    gap: "Kulima na udongo ulio wazi vinapoteza mvua chache na kusababisha mmomonyoko, na kulima kwa kuchelewa kunachelewesha upandaji. Wanafunzi wanahitaji njia ya vitendo ya kulima bila kuvuruga udongo sana, kwa kufunika zaidi na kubadilisha mazao, kupanga zana, nguvu kazi na wakati, na kuendelea katika misimu ya kwanza ambapo magugu ni mengi na matokeo yanatofautiana.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Nguvu kazi na zana: majembe ya mkono, ng'ombe wa kulimia au trekta ya kukodi; vishimo na mashimo ni kazi ngumu",
      "Mabaki: mifugo hula mashambani baada ya mavuno kwa desturi ya eneo",
      "Usalama wa viuatilifu: dawa za kuua magugu tu ikiwa zimesajiliwa nchini, zikitumiwa kama lebo inavyosema, na vifaa vya kujikinga",
      "Muda: masomo ya dakika 4 hadi 6; matokeo hujengeka katika misimu kadhaa"
    ],
    prerequisites: "Hakuna. \"Afya na Rutuba ya Udongo\" na \"Kilimo Kinachozingatia Tabianchi\" ni msingi mzuri."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiangalia shamba au maelezo ya shamba", action: "kutambua kama linafuata kila moja ya kanuni tatu za kilimo hifadhi", standard: "ukitaja zote tatu kama FAO inavyozieleza, pamoja na kufunika angalau asilimia 30 ya udongo" },
    { id: "O2", condition: "Kwenye shamba moja kabla ya mvua", action: "kupima na kuchimba vishimo vya kupandia au mashimo ya zai yenye samadi au mboji katika kila kimoja", standard: "kwa mistari inayokatiza mteremko, vikichimbwa wakati wa kiangazi" },
    { id: "O3", condition: "Ukizingatia udongo wako, nguvu kazi, nguvu ya kuvuta na mvua", action: "kuchagua kati ya vishimo, ripa na kupanda moja kwa moja kwa shamba", standard: "ukitoa angalau sababu mbili za uchaguzi huo" },
    { id: "O4", condition: "Kwa shamba lililo chini ya kilimo hifadhi", action: "kupanga jinsi ya kuweka udongo umefunikwa na kudhibiti magugu bila kulima", standard: "ukiweka angalau asilimia 30 ya kifuniko na ukitumia tu dawa za magugu zilizosajiliwa kama lebo inavyosema, ikiwa utazitumia" },
    { id: "O5", condition: "Kwa msimu mmoja kwenye shamba moja", action: "kuandika kalenda ya kila kazi ya kilimo hifadhi pamoja na mwezi, zana na gharama yake", standard: "kuanzia maandalizi ya kiangazi hadi mavuno na utunzaji wa mabaki" },
    { id: "O6", condition: "Katika misimu ya kwanza ya kilimo hifadhi", action: "kulinganisha kipande cha kilimo hifadhi na kipande kilicholimwa", standard: "ukiandika mavuno, siku za kazi na gharama kwa vyote viwili kila msimu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kanuni na kuandaa ardhi bila kulima",
      lessons: [
        {
          title: "Kanuni tatu za kilimo hifadhi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua kama shamba linafuata kila moja ya kanuni tatu za kilimo hifadhi.",
          text: [
            "Kilimo hifadhi (CA) ni njia ya kulima inayolinda udongo ili ushike zaidi ya mvua chache zinazonyesha. FAO inaeleza kanuni tatu zinazofanya kazi pamoja.",
            "1. Kuvuruga udongo kidogo tu: hakuna kulima. Mbegu na mbolea zinaingia udongoni kupitia matundu madogo, vishimo au mistari myembamba ya ripa, na udongo uliobaki unaachwa. 2. Kufunika udongo daima: acha mabaki ya mazao au mazao ya kufunika juu ya udongo, yakifunika angalau asilimia 30 ya udongo, mwaka mzima. 3. Kubadilisha mazao: zungusha au changanya angalau mazao matatu tofauti kwa muda, kwa mfano mahindi, kunde na mtama, si mahindi kila mwaka.",
            "Kufanya moja peke yake kunasaidia kidogo; kufanya zote tatu pamoja kunaleta faida halisi. Kulima bila kifuniko kunakausha udongo; kifuniko bila mzunguko kunaruhusu wadudu waongezeke; kutolima huku udongo ukiwa wazi kunaruhusu ganda gumu kutokea na mvua kutiririka. Katika maeneo makavu faida kubwa ni maji: udongo uliofunikwa na usiovurugwa unaruhusu mvua kuingia na unapoteza kidogo kwa jua."
          ],
          words: [["Kilimo hifadhi (CA)", "kulima kwa kuvuruga udongo kidogo tu, kuufunika daima na kubadilisha mazao."], ["Kulima udongo (tillage)", "kugeuza au kuvunja udongo, kwa mfano kwa plau au kuchimba."], ["Mabaki ya mazao", "mabua, majani na maganda yanayobaki baada ya mavuno."], ["Ganda gumu", "safu ngumu inayotokea juu ya udongo ulio wazi baada ya mvua na kuzuia maji kuingia."]],
          slides: [
            { title: "Kanuni tatu (FAO)", bullets: ["1. Kuvuruga udongo kidogo tu: hakuna kulima", "2. Kufunika udongo daima: angalau asilimia 30", "3. Kubadilisha mazao: angalau mazao matatu"] },
            { title: "Vuruga mahali unapopanda tu", bullets: ["Matundu madogo, vishimo au mistari ya ripa", "Acha udongo uliobaki bila kuuvuruga"] },
            { title: "Funika na zungusha", bullets: ["Mabaki au mazao ya kufunika juu, mwaka mzima", "Mfano: mahindi, kisha kunde, kisha mtama"] },
            { title: "Zote tatu pamoja", bullets: ["Moja peke yake inasaidia kidogo", "Pamoja: mvua zaidi inaingia na kubaki", "Faida kubwa katika maeneo makavu ni maji"] }
          ],
          sources: [FAO_CA],
          tryIt: "Tembea katika moja ya mashamba yako. Kwa kila kanuni, andika ndiyo, kiasi au hapana: Je, limelimwa? Udongo kiasi gani umefunikwa (kadiria kwa asilimia)? Mazao mangapi tofauti yalikua hapo katika misimu mitatu iliyopita? Zungushia mstari kanuni iliyo dhaifu zaidi.",
          youCanNow: "kutaja kanuni tatu za kilimo hifadhi na kukagua shamba kwa kila moja.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni moja ya kanuni tatu za FAO za kilimo hifadhi?", options: ["Kulima kwa kina kila msimu", "Kuchoma mabaki ili kusafisha shamba", "Kufunika udongo daima, angalau asilimia 30", "Kulima zao lile lile kila mwaka"], answer: 2, why: "FAO inataja kuvuruga udongo kidogo, kufunika udongo daima (angalau asilimia 30) na kubadilisha mazao." },
            { objective: "O1", q: "Mkulima ameacha kulima lakini anaacha udongo wazi na analima mahindi kila mwaka. Nini kinakosekana?", options: ["Kifuniko cha udongo na kubadilisha mazao", "Hakuna; ni CA kamili", "Kulima zaidi", "Kuchoma zaidi"], answer: 0, why: "Bila kifuniko na mzunguko, kutolima peke yake kunaleta faida chache." }
          ]
        },
        {
          title: "Vishimo vya kupandia na mashimo ya zai",
          objectives: ["O2"],
          minutes: 6,
          goal: "Pima na uchimbe vishimo vya kupandia au mashimo ya zai yenye samadi katika kila kimoja, kabla ya mvua.",
          text: [
            "Vishimo vya kupandia na mashimo ya zai ni matundu madogo yanayochimbwa kwa mkono mahali zao linapopandwa. Kishimo tu ndicho kinachovurugwa; udongo kati yake unabaki umefunikwa. Kila kishimo kinakamata mvua na kushika samadi au mboji pale pale mizizi ilipo.",
            "Mashimo ya zai yanatoka kwa wakulima wa Burkina Faso na Niger, ambao waliyatumia kurudisha ardhi ngumu yenye ganda kwenye kilimo cha uwele na mtama. WOCAT inaeleza mashimo ya upana wa takriban sm 30 hadi 40 na kina cha sm 10 hadi 15, kwa mistari isiyolingana inayokatiza mteremko, karibu 10,000 kwa hekta, yakiwa na samadi au mboji katika kila moja. Vishimo vya kupandia vinavyotumika kusini na mashariki mwa Afrika vinafanana: matundu madogo ya mpangilio katika mistari, yanayochimbwa kwa nafasi ile ile kila mwaka ili urudi mahali pale pale.",
            "Yachimbe wakati wa kiangazi baada ya mavuno, wakati kuna kazi nyingine chache, ili upande na mvua nzuri za kwanza badala ya kusubiri kulima. Weka udongo kutoka shimoni upande wa chini wa mteremko ili kukamata maji zaidi. Weka konzi moja au mbili za samadi au mboji katika kila kishimo na ufunike kidogo. Muulize afisa ugani wako nafasi inayotumika kwa zao lako katika eneo lako.",
            "Ni kazi ngumu, hasa mwaka wa kwanza. Chimba sehemu ya shamba kila wiki, shirikianeni kazi katika kikundi, na tumieni tena vishimo vile vile katika misimu inayofuata, jambo ambalo ni haraka zaidi."
          ],
          steps: ["Chagua shamba na uweke alama za mistari inayokatiza mteremko kwa kamba au vijiti.", "Weka alama za vishimo kwa nafasi ambayo ugani inapendekeza kwa zao lako.", "Chimba wakati wa kiangazi; rundika udongo upande wa chini wa mteremko.", "Weka samadi au mboji katika kila kishimo na ufunike kidogo.", "Acha udongo kati ya vishimo ukiwa umefunikwa.", "Panda ndani ya vishimo na mvua nzuri za kwanza."],
          words: [["Kishimo cha kupandia", "tundu dogo linalochimbwa kwa mkono ambamo mbegu na samadi huwekwa, huku udongo uliobaki ukiachwa bila kuvurugwa."], ["Shimo la zai", "shimo la kupandia lililojazwa samadi au mboji, lililotumiwa kwanza na wakulima wa Burkina Faso na Niger kurudisha ardhi yenye ganda gumu."], ["Kukatiza mteremko", "kufuata kontua, ili mistari ikamate maji badala ya kuyapeleka chini ya mteremko."]],
          slides: [
            { title: "Matundu madogo, faida kubwa", bullets: ["Vuruga kishimo tu", "Kinakamata mvua pale mizizi ilipo", "Kinashika samadi karibu na zao"] },
            { title: "Mashimo ya zai (Burkina Faso, Niger)", bullets: ["Upana wa takriban sm 30-40, kina sm 10-15 (WOCAT)", "Mistari isiyolingana inayokatiza mteremko", "Samadi au mboji katika kila moja"] },
            { title: "Wakati", bullets: ["Chimba wakati wa kiangazi baada ya mavuno", "Panda na mvua nzuri za kwanza", "Hakuna kusubiri kulima"] },
            { title: "Fanya kazi iwe nyepesi", bullets: ["Sehemu ya shamba kila wiki", "Shirikianeni kazi katika kikundi", "Tumia tena vishimo vile vile msimu ujao"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "Kwenye sehemu ndogo ya shamba (kwa mfano m 10 kwa m 10), weka alama za mistari inayokatiza mteremko na uchimbe vishimo vitano au mashimo ya zai matano. Pima muda kila kimoja kinachukua, weka samadi, na ukokotoe shamba zima lingechukua siku ngapi.",
          youCanNow: "kupima na kuchimba vishimo vya kupandia au mashimo ya zai yenye samadi, kukatiza mteremko, kabla ya mvua.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kuchimba vishimo vya kupandia au mashimo ya zai lini?", options: ["Baada ya zao kuota", "Tu wakati mvua inanyesha sana", "Wakati wa mavuno, juu ya zao", "Wakati wa kiangazi kabla ya mvua"], answer: 3, why: "Kuchimba mapema kunakuwezesha kupanda na mvua nzuri za kwanza na kunagawanya kazi." },
            { objective: "O2", q: "Udongo kutoka shimo la zai unapaswa kwenda wapi?", options: ["Kutupwa mbali", "Upande wa chini wa mteremko wa shimo, ili kukamata maji zaidi", "Kurudishwa shimoni mara moja", "Njiani"], answer: 1, why: "Tuta dogo upande wa chini linasaidia kila shimo kukamata na kushika maji yanayotiririka." }
          ]
        },
        {
          title: "Kupasua kwa ripa na kupanda moja kwa moja",
          objectives: ["O3"],
          minutes: 5,
          goal: "Chagua kati ya vishimo, ripa na kupanda moja kwa moja kwa moja ya mashamba yako.",
          text: [
            "Vishimo vinawafaa wakulima wa jembe la mkono kwenye mashamba madogo. Ikiwa una ng'ombe wa kulimia au unaweza kukodi trekta, ripa au mashine ya kupanda moja kwa moja inaweza kufunika ardhi zaidi kwa nguvu kazi kidogo.",
            "Ripa (ripper) ni meno membamba, mara nyingi yanayofungwa kwenye boriti ya plau ya ng'ombe badala ya kipande cha kugeuza udongo, yanayofungua mfereji mwembamba (mstari wa ripa) kwa mbegu na mbolea, huku udongo kati ya mistari ukibaki umefunikwa. Kupasua kwa ripa wakati wa kiangazi kunaweza pia kuvunja tabaka gumu chini ya uso wa udongo (plough pan) ili mizizi na maji viende chini zaidi. Kupanda moja kwa moja kunaweka mbegu moja kwa moja kupitia mabaki kwa jab planter (zana ya mkono) au mashine ya kupanda inayovutwa na wanyama au trekta, bila kufungua mistari kabisa.",
            "Uchague ipi? Fikiria nguvu kazi yako (vishimo vinahitaji zaidi), nguvu ya kuvuta (ripa inahitaji ng'ombe au trekta), udongo (udongo mgumu wenye ganda unafaidika na vishimo au ripa), na ukubwa wa shamba. Majaribio kote Zambia kuanzia 2006 hadi 2015 yalilinganisha vishimo, ripa na kupanda moja kwa moja na kulima kwa plau kwenye mashamba halisi. Muulize afisa ugani wako au mradi wa CA mahali unapoweza kuona zana hizi zikifanya kazi, na kama zinaweza kukodiwa."
          ],
          steps: ["Andika ukubwa wa shamba lako, nguvu kazi na upatikanaji wa ng'ombe wa kulimia au trekta.", "Kagua udongo: je, kuna tabaka gumu au ganda?", "Shamba dogo na kazi ya mkono: vishimo.", "Ng'ombe au trekta na udongo mgumu: ripa.", "Mabaki mazuri na mashine ya kupanda inapatikana: kupanda moja kwa moja.", "Uliza ugani mahali pa kuona na kukodi zana."],
          words: [["Ripa (ripper)", "meno membamba yanayovutwa na ng'ombe au trekta yanayofungua mfereji wa mbegu bila kugeuza udongo."], ["Tabaka gumu (plough pan)", "safu ngumu chini kidogo ya kina cha kulima inayozuia mizizi na maji."], ["Jab planter", "zana ya mkono inayosukumwa ardhini kuweka mbegu (na wakati mwingine mbolea) kupitia mabaki."], ["Kupanda moja kwa moja", "kupanda moja kwa moja kwenye udongo usiovurugwa na mabaki."]],
          slides: [
            { title: "Njia tatu bila kulima", bullets: ["Vishimo: jembe la mkono, mashamba madogo", "Ripa: ng'ombe au trekta hufungua mistari ya ripa", "Kupanda moja kwa moja: jab planter au mashine ya kupanda"] },
            { title: "Kupasua kwa ripa", bullets: ["Meno membamba kwenye boriti ya plau", "Inaweza kuvunja tabaka gumu (plough pan)", "Udongo kati ya mistari unabaki umefunikwa"] },
            { title: "Jinsi ya kuchagua", bullets: ["Nguvu kazi: vishimo vinahitaji zaidi", "Nguvu ya kuvuta: ng'ombe au trekta?", "Ugumu wa udongo na ukubwa wa shamba"] },
            { title: "Ione kwanza", bullets: ["Majaribio ya Zambia: vishimo, ripa, kupanda moja kwa moja", "Uliza ugani mahali pa kuona zana", "Unaweza kuzikodi?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "Kwa shamba ulilochagua, andika ukubwa wa shamba, nguvu kazi yako, upatikanaji wa ng'ombe wa kulimia au trekta, na jinsi udongo ulivyo mgumu. Chagua vishimo, ripa au kupanda moja kwa moja na uandike sababu mbili za uchaguzi wako.",
          youCanNow: "kuchagua kati ya vishimo, ripa na kupanda moja kwa moja kwa shamba, ukiwa na sababu.",
          quickCheck: [
            { objective: "O3", q: "Mkulima ana hekta 3, jozi ya ng'ombe wa kulimia na udongo mgumu. Njia ipi inafaa zaidi?", options: ["Kupasua kwa ripa inayovutwa na ng'ombe", "Vishimo vya mkono kwenye hekta zote 3 kwa wiki moja", "Kulima kwa kina mara mbili", "Kutopanda kabisa"], answer: 0, why: "Ng'ombe na udongo mgumu vinafaa ripa, ambayo inafunika ardhi zaidi kuliko vishimo vya mkono." },
            { objective: "O3", q: "Jab planter ni nini?", options: ["Plau ya trekta", "Zana ya mkono inayoweka mbegu kupitia mabaki", "Pampu ya maji", "Aina ya mbolea"], answer: 1, why: "Jab planter inakuwezesha kupanda moja kwa moja kwenye udongo uliofunikwa na usiovurugwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kanuni na kuandaa ardhi bila kulima",
        questions: [
          { objective: "O1", q: "Kulingana na FAO, mzunguko au mseto wa CA unapaswa kuwa na mazao mangapi tofauti?", options: ["Moja", "Mawili zaidi", "Angalau matatu", "Hakuna"], answer: 2, why: "Kanuni ya FAO ya kubadilisha mazao inataja angalau mazao matatu tofauti." },
          { objective: "O1", q: "Kwa nini udongo uliofunikwa na usiovurugwa ni muhimu hasa katika maeneo makavu?", options: ["Unafanya udongo kuwa baridi zaidi wakati wa baridi", "Mvua zaidi inaingia na kidogo kinapotea kwa jua", "Unazuia magugu yote milele", "Hauhitaji mbegu"], answer: 1, why: "Kifuniko na kutolima vinaboresha maji kuingia na kupunguza uvukizaji." },
          { objective: "O2", q: "Mashimo ya zai yalienea kwanza miongoni mwa wakulima wa nchi gani?", options: ["Burkina Faso na Niger", "Misri na Libya", "Afrika Kusini na Namibia", "Kenya na Uganda tu"], answer: 0, why: "Mashimo ya zai yanatoka kwa wakulima wa Sahel, hasa Burkina Faso na Niger." },
          { objective: "O2", q: "Nini kinawekwa katika kila shimo la zai au kishimo kabla ya kupanda?", options: ["Hakuna kitu", "Plastiki", "Majivu ya mabaki yaliyochomwa tu", "Samadi au mboji"], answer: 3, why: "Samadi au mboji shimoni inalisha zao pale pale kwenye mizizi." },
          { objective: "O3", q: "Kupasua kwa ripa wakati wa kiangazi kunaweza kufanya nini zaidi ya kufungua mistari ya ripa?", options: ["Kumwagilia zao", "Kuvunja tabaka gumu (plough pan) ili mizizi na maji viende chini zaidi", "Kuua wadudu wote", "Kuchukua nafasi ya mbolea"], answer: 1, why: "Ripa inaweza kuvunja tabaka gumu ambalo kulima mara nyingi huacha." }
        ]
      }
    },
    {
      name: "Sura 2: Msimu na kipindi cha mpito",
      lessons: [
        {
          title: "Kusimamia matandazo na mabaki",
          objectives: ["O4"],
          minutes: 5,
          goal: "Panga jinsi ya kuweka angalau asilimia 30 ya shamba ikiwa imefunikwa mwaka mzima.",
          text: [
            "Kifuniko ndiyo kanuni ambayo wakulima wanaiona ngumu zaidi, kwa sababu mabaki yana matumizi mengine: mifugo hula mashambani baada ya mavuno, na mabua hutumika kwa kuni, uzio na ujenzi. Katika maeneo makavu, mchwa pia wanaweza kula mabaki yaliyo juu ya udongo.",
            "Panga kwa ajili yake. Amua kiasi gani cha mabaki kitabaki shambani na kiasi gani kitaenda kwa mifugo. Kata na uhifadhi mabua kwa ajili ya chakula cha kiangazi ili mifugo wasiachwe kuingia kwenye shamba la CA. Zungumza na majirani na wachungaji kuhusu shamba: baadhi ya jamii zinakubaliana kwamba mashamba ya CA yaliyowekwa alama hayalishwi mifugo, au mkulima anazungushia shamba dogo uzio wa miti hai au matawi ya miiba. Pata kifuniko kutoka vyanzo vingine: mseto wa kunde au fiwi (lablab), nyasi kutoka kingo za shamba, au matawi yaliyopogolewa kutoka kwa miti.",
            "Ili kukagua kifuniko, angalia chini moja kwa moja kwenye mita moja ya mraba katika sehemu kadhaa na ukadirie kiasi cha udongo usichoweza kuona. Unataka angalau asilimia 30 ifunikwe (FAO); zaidi ni bora. Tandaza mabaki sawasawa, si kwa mafungu, na yaache juu badala ya kuyafukia.",
            "Usichome kamwe mabaki kwenye shamba la CA. Kuchoma kunaondoa kifuniko na mboji asilia unayoijenga."
          ],
          steps: ["Amua sehemu ya mabaki kwa kifuniko na kwa chakula cha mifugo.", "Kata na uhifadhi chakula ili mifugo wakae nje ya shamba la CA.", "Kubaliana na majirani na wachungaji, au weka uzio shambani.", "Ongeza kifuniko kutoka mseto, nyasi za kingo au matawi ya miti.", "Kagua kifuniko: angalia chini kwenye mita moja ya mraba katika sehemu kadhaa.", "Tandaza sawasawa; usichome kamwe."],
          words: [["Matandazo", "vitu vinavyotandazwa juu ya udongo ili kuufunika na kuulinda."], ["Mabua", "mashina na majani makavu ya mahindi au mtama baada ya mavuno."], ["Uzio wa miti hai", "mstari wa vichaka au miti iliyopandwa karibu karibu ili kuzuia wanyama."]],
          slides: [
            { title: "Kifuniko kinashindana na matumizi mengine", bullets: ["Mifugo kula shambani baada ya mavuno", "Kuni, uzio, ujenzi", "Mchwa katika maeneo makavu"] },
            { title: "Panga mabaki", bullets: ["Sehemu ya kifuniko dhidi ya chakula cha mifugo", "Hifadhi chakula; zuia mifugo", "Kubaliana na wachungaji au weka uzio"] },
            { title: "Pata kifuniko zaidi", bullets: ["Mseto wa kunde au fiwi (lablab)", "Nyasi kutoka kingo za shamba", "Matawi ya miti yaliyopogolewa"] },
            { title: "Kagua: angalau asilimia 30", bullets: ["Angalia chini kwenye mita moja ya mraba", "Tandaza sawasawa, acha juu", "Usichome kamwe kwenye shamba la CA"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Kadiria kifuniko cha shamba ulilochagua leo katika sehemu tatu. Andika kifuniko cha ziada kitatoka wapi, mabua kiasi gani yataenda kwa mifugo, na jinsi utakavyowazuia mifugo kuingia shambani (makubaliano, uzio au chakula kilichohifadhiwa).",
          youCanNow: "kupanga jinsi ya kuweka angalau asilimia 30 ya shamba la CA ikiwa imefunikwa, huku ukiendelea kulisha mifugo yako.",
          quickCheck: [
            { objective: "O4", q: "Ng'ombe wa majirani wanakula mabaki yote kwenye shamba lako la CA kila kiangazi. Nini kinaweza kusaidia?", options: ["Kuchoma mabaki kwanza", "Kulima shamba", "Kukubaliana na wachungaji, kuweka uzio, au kuhifadhi chakula ili mifugo wakae nje", "Kuacha kifuniko"], answer: 2, why: "Makubaliano ya jamii, uzio na chakula kilichohifadhiwa vinalinda kifuniko." },
            { objective: "O4", q: "Unakaguaje kama shamba lina kifuniko cha kutosha?", options: ["Kuhesabu ng'ombe", "Kuangalia chini kwenye mita moja ya mraba katika sehemu kadhaa na kukadiria sehemu ya udongo uliofichwa", "Kupima uzito wa mavuno", "Kupima mvua"], answer: 1, why: "Makadirio ya haraka kwa macho katika sehemu kadhaa yanaonyesha kama kifuniko kinafikia asilimia 30." }
          ]
        },
        {
          title: "Kudhibiti magugu bila kulima",
          objectives: ["O4"],
          minutes: 5,
          goal: "Panga udhibiti wa magugu kwa shamba la CA bila kulima.",
          text: [
            "Kulima kunafukia magugu; bila kulima, magugu yanaweza kuwa mengi katika misimu ya kwanza. Hii ndiyo sababu kuu wakulima kuacha CA, kwa hiyo panga kupalilia tangu mwanzo.",
            "Palilia mapema na mara kwa mara: wiki za kwanza baada ya zao kuota ndizo muhimu zaidi. Tumia jembe kwa wepesi, ukikwangua chini kidogo ya uso badala ya kugeuza udongo, au ng'oa kwa mkono. Usiache kamwe magugu yatoe mbegu; kila gugu linalotoa mbegu linaongeza maelfu kwa mwaka ujao. Matandazo na zao la kufunika vinatia kivuli udongo na kuzuia magugu mengi, na mseto mnene unaacha nafasi ndogo. Baada ya misimu kadhaa ya kupalilia kabla ya magugu kutoa mbegu, mbegu za magugu udongoni zinapungua na kupalilia kunakuwa rahisi.",
            "Baadhi ya wakulima wa CA pia hutumia dawa ya kuua magugu. Ukifanya hivyo, tumia tu bidhaa zilizosajiliwa katika nchi yako (Kenya, kagua orodha ya Pest Control Products Board; Nigeria, NAFDAC; Ghana, Environmental Protection Agency), nunua kutoka kwa wauzaji wenye leseni, na fuata lebo kikamilifu kwa zao, wakati na kiasi. Vaa nguo za kujikinga, glavu na buti, weka watoto na wanyama mbali, na usinyunyizie kamwe karibu na maji. Muulize afisa ugani wako kabla ya kuanza."
          ],
          steps: ["Palilia mapema: wiki za kwanza baada ya kuota.", "Palilia kwa wepesi kwa jembe au ng'oa kwa mkono; usigeuze udongo.", "Usiache kamwe magugu yatoe mbegu.", "Tumia matandazo, mazao ya kufunika na mseto mnene kutia magugu kivuli.", "Ukitumia dawa ya magugu: bidhaa iliyosajiliwa, lebo, vifaa vya kujikinga.", "Panga nguvu kazi ya kupalilia kabla msimu haujaanza."],
          words: [["Hazina ya mbegu za magugu", "mbegu za magugu zilizohifadhiwa udongoni, zikisubiri kuota."], ["Dawa ya kuua magugu", "kemikali inayoua magugu."], ["Bidhaa iliyosajiliwa", "kiuatilifu au dawa ya magugu iliyoidhinishwa kutumika na mamlaka ya kitaifa."]],
          slides: [
            { title: "Magugu ndiyo mtihani mkubwa", bullets: ["Mengi zaidi katika misimu ya kwanza", "Sababu kuu wakulima kuacha", "Panga kupalilia tangu mwanzo"] },
            { title: "Palilia bila kulima", bullets: ["Mapema na mara kwa mara baada ya kuota", "Kupalilia kwa wepesi au kung'oa kwa mkono", "Usiache kamwe magugu yatoe mbegu"] },
            { title: "Acha kifuniko kifanye kazi", bullets: ["Matandazo na mazao ya kufunika yanatia magugu kivuli", "Mseto mnene unaacha nafasi ndogo", "Mbegu za magugu udongoni zinapungua kwa misimu"] },
            { title: "Dawa ya magugu? Kwa usalama tu", bullets: ["Iliyosajiliwa: PCPB (KE), NAFDAC (NG), EPA (GH)", "Fuata lebo kikamilifu", "Vifaa vya kujikinga; mbali na maji na watoto"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Andika mpango wa magugu kwa shamba lako: utapalilia lini (wiki baada ya kupanda), kwa zana gani, nani atafanya na itachukua siku ngapi, na jinsi kifuniko au mseto utakavyosaidia. Ukifikiria dawa ya magugu, andika mahali utakapokagua kama imesajiliwa.",
          youCanNow: "kupanga udhibiti wa magugu kwa shamba la CA bila kulima, ukitumia dawa za magugu kwa usalama na kisheria tu, ikiwa utazitumia.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini usiache kamwe magugu yatoe mbegu katika shamba la CA?", options: ["Mbegu zinafanya zao liwe na ladha mbaya", "Mbegu za magugu ni mbolea nzuri", "Ni kinyume cha sheria", "Kila gugu linalotoa mbegu linaongeza maelfu ya mbegu kwa mwaka ujao"], answer: 3, why: "Kuzuia magugu kutoa mbegu kunapunguza hazina ya mbegu za magugu kwa misimu." },
            { objective: "O4", q: "Mkulima nchini Kenya anataka kutumia dawa ya magugu kwenye mahindi yake ya CA. Anapaswa kukagua nini kwanza?", options: ["Kwamba imesajiliwa na Pest Control Products Board na jinsi lebo inavyosema itumike", "Kwamba ni chupa ya bei rahisi zaidi", "Kwamba jirani aliipenda", "Kwamba haina lebo"], answer: 0, why: "Bidhaa zilizosajiliwa tu, zikitumiwa kama lebo inavyosema, na vifaa vya kujikinga, ndizo salama na halali." }
          ]
        },
        {
          title: "Zana, wakati, miaka ya ukame na kipindi cha mpito",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Andika kalenda ya msimu ya kazi za CA, zana na gharama, na uandae kipande cha kulinganisha.",
          text: [
            "Msimu wa CA unaanza wakati wa kiangazi, si wakati wa mvua. Kalenda ya kawaida: baada ya mavuno, hifadhi mabaki na kubaliana kuhusu malisho; wakati wa kiangazi, chimba au tumia tena vishimo, au pasua kwa ripa, na weka samadi; na mvua nzuri za kwanza, panda mara moja (bila kusubiri kulima); katika wiki za kwanza, palilia mapema na mara kwa mara; wakati wa msimu, ongeza mseto au zao la kufunika; wakati wa mavuno, acha mabaki shambani na upange mzunguko wa msimu ujao. Kando ya kila kazi, andika zana (jembe, ripa, jab planter, bomba la kunyunyizia na vifaa vya kujikinga) na gharama, kama unaimiliki, unaikodi au unaiazima.",
            "Katika miaka ya ukame, faida kuu ya CA inaonekana. Vishimo na matandazo vinakamata na kushika maji zaidi, na kupanda kwa wakati kunatumia mvua za mapema. Mapitio ya majaribio mengi katika maeneo kame ya Zimbabwe yaligundua kwamba vishimo vya kupandia vilitoa mahindi zaidi kuliko kulima katika zaidi ya nusu ya majaribio. Lakini CA haishindi kulima kila mwaka, na haiwezi kufidia kukosekana kabisa kwa mvua.",
            "Tarajia kipindi cha mpito. Mavuno yanaweza kubaki yale yale au hata kushuka katika msimu mmoja au miwili ya kwanza wakati magugu ni mengi na udongo unajirekebisha; faida kwa kawaida hujengeka katika misimu kadhaa kadiri kifuniko na mboji asilia vinavyoongezeka. Anza na shamba moja, acha kipande kilicholimwa kando yake, na uandike mavuno, siku za kazi na gharama kwa vyote viwili kila msimu. Hukumu CA baada ya misimu mitatu, si mmoja."
          ],
          steps: ["Orodhesha kila kazi kuanzia mavuno hadi mavuno.", "Weka kila moja katika mwezi wake.", "Ongeza zana na kama unaimiliki, unaikodi au unaiazima.", "Ongeza gharama na siku za kazi.", "Weka alama kipande cha kulinganisha kilicholimwa chenye ukubwa ule ule.", "Andika mavuno, kazi na gharama kwa vyote viwili kila msimu; hukumu baada ya misimu mitatu."],
          words: [["Kipindi cha mpito", "misimu ya kwanza baada ya kuhamia CA, wakati magugu ni mengi na faida bado zinajengeka."], ["Kipande cha kulinganisha", "kipande kinacholimwa kwa njia ya zamani kando ya kipande cha CA, ili matokeo yalinganishwe kwa haki."], ["Siku ya kazi", "mtu mmoja akifanya kazi kwa siku moja; hutumika kupima kazi inahitaji kiasi gani."]],
          slides: [
            { title: "Msimu unaanza wakati wa kiangazi", bullets: ["Baada ya mavuno: hifadhi mabaki, kubaliana kuhusu malisho", "Kiangazi: vishimo au ripa, samadi", "Mvua nzuri za kwanza: panda mara moja"] },
            { title: "Kalenda yenye zana na gharama", bullets: ["Jembe, ripa, jab planter, vifaa vya kujikinga", "Kumiliki, kukodi au kuazima?", "Gharama na siku za kazi kwa kila kazi"] },
            { title: "Miaka ya ukame", bullets: ["Vishimo na matandazo vinashika maji zaidi", "Zimbabwe: vishimo vilishinda kulima katika zaidi ya nusu ya majaribio", "Si kila mwaka; bila mvua = bila mavuno"] },
            { title: "Kuvuka kipindi cha mpito", bullets: ["Mavuno yanaweza kushuka katika msimu 1 hadi 2", "Acha kipande kilicholimwa ili kulinganisha", "Andika mavuno, kazi, gharama; hukumu baada ya misimu 3"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Kazi ya mwisho: andika mpango wako wa msimu mmoja wa CA kwa shamba moja, ukiwa na mchoro, njia ya kuandaa ardhi na sababu, mipango ya kifuniko na magugu, zao na mzunguko, kalenda ya kila mwezi ya kazi, zana na gharama, na mahali kipande chako cha kulinganisha kilicholimwa kitakapokuwa.",
          youCanNow: "kupanga msimu kamili wa CA wenye zana, wakati na gharama, na kuulinganisha kwa haki na kulima katika miaka ya mpito.",
          quickCheck: [
            { objective: "O5", q: "Kazi ya msimu wa CA inaanza lini?", options: ["Zao linapotoa maua", "Wakati wa kiangazi, baada ya mavuno ya mwisho", "Mvua ya kwanza, kwa kulima", "Wakati wa mavuno ya zao linalofuata"], answer: 1, why: "Vishimo, ripa, samadi na mipango ya mabaki hufanywa wakati wa kiangazi ili upande na mvua za kwanza." },
            { objective: "O6", q: "Kipande chako cha CA kinatoa mavuno sawa na kipande kilicholimwa katika msimu wa kwanza. Ufanye nini?", options: ["Uache CA", "Ulime kipande cha CA", "Uchome mabaki", "Uendelee kuandika kwa angalau misimu mitatu kabla ya kuhukumu"], answer: 3, why: "Faida hujengeka katika misimu kadhaa; msimu mmoja ni mapema mno kuhukumu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Msimu na kipindi cha mpito",
        questions: [
          { objective: "O4", q: "Usifanye nini kamwe na mabaki kwenye shamba la CA?", options: ["Kuyatandaza sawasawa", "Kuyaacha juu ya udongo", "Kuyachoma", "Kuongeza zaidi kutoka kingo za shamba"], answer: 2, why: "Kuchoma kunaondoa kifuniko na mboji asilia ambavyo CA inategemea." },
          { objective: "O4", q: "Njia ipi ya kupalilia inafaa CA?", options: ["Kulima ili kufukia magugu", "Kuchoma shamba zima", "Kupalilia wakati wa mavuno tu", "Kupalilia kwa wepesi kwa jembe au kung'oa kwa mkono mapema na mara kwa mara"], answer: 3, why: "Kupalilia juu juu bila kugeuza udongo kunapunguza uvurugaji hadi kiwango cha chini." },
          { objective: "O5", q: "Kipi kinafaa katika kalenda ya msimu wa CA?", options: ["Chimba au tumia tena vishimo wakati wa kiangazi, pamoja na zana na gharama", "Lima mara mbili kabla ya kupanda", "Choma mabaki baada ya mavuno", "Panda mwezi mmoja baada ya mvua kuanza"], answer: 0, why: "Kalenda ya CA inaorodhesha kila kazi pamoja na mwezi, zana na gharama yake." },
          { objective: "O5", q: "Kwa nini mara nyingi CA inakuwezesha kupanda mapema?", options: ["Mbegu inakua haraka zaidi", "Mvua inanyesha zaidi kwenye mashamba ya CA", "Ardhi inaandaliwa wakati wa kiangazi, kwa hiyo unapanda na mvua nzuri za kwanza", "Mbegu ni rahisi zaidi"], answer: 2, why: "Kutosubiri kulima kunamaanisha kupanda kwa wakati." },
          { objective: "O6", q: "Ni mambo matatu gani unapaswa kuandika kwa kipande cha CA na kipande kilicholimwa?", options: ["Rangi, harufu na ladha", "Mvua tu", "Mavuno, siku za kazi na gharama", "Idadi ya wageni"], answer: 2, why: "Mavuno, kazi na gharama vinaonyesha kama CA inalipa kwenye shamba lako." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kilimo Hifadhi kwa Misimu ya Ukame",
    questions: [
      { objective: "O1", q: "Orodha ipi inatoa kanuni tatu za FAO za kilimo hifadhi?", options: ["Kulima, kuchoma, kulima zao moja", "Kuvuruga udongo kidogo tu, kufunika udongo daima, kubadilisha mazao", "Umwagiliaji, mbolea, viuatilifu", "Kulima kwa kina, udongo wazi, zao moja"], answer: 1, why: "Hizi ndizo kanuni tatu ambazo FAO inaeleza." },
      { objective: "O1", q: "Chini ya CA, angalau kiasi gani cha udongo kinapaswa kufunikwa, kulingana na FAO?", options: ["Asilimia 5", "Asilimia 10", "Asilimia 30", "Asilimia 100 wakati wote"], answer: 2, why: "FAO inataja kifuniko cha kudumu cha asilia cha angalau asilimia 30." },
      { objective: "O1", q: "Kuvuruga udongo kidogo tu kunamaanisha nini?", options: ["Kuvuruga udongo mahali mbegu na mbolea zinapoenda tu", "Kulima mara moja badala ya mara mbili", "Kutopanda kamwe", "Kuchimba shamba zima kwa mkono"], answer: 0, why: "Ni mahali pa kupanda, kishimo au mstari wa ripa tu ndipo panavurugwa." },
      { objective: "O1", q: "Mzunguko upi unaonyesha kubadilisha mazao?", options: ["Mahindi, mahindi, mahindi", "Kuacha shamba wazi kila mwaka", "Mtama tu", "Mahindi, kisha kunde, kisha mtama"], answer: 3, why: "Mazao matatu tofauti kwa muda ni kubadilisha mazao." },
      { objective: "O2", q: "Mashimo ya zai ni nini?", options: ["Mabwawa ya samaki", "Mashimo ya kupandia yenye samadi au mboji yanayokamata mvua", "Maghala ya nafaka", "Visima vya umwagiliaji"], answer: 1, why: "Mashimo ya zai yanakusanya maji na virutubisho kwenye mmea." },
      { objective: "O2", q: "Mistari ya vishimo inapaswa kwenda:", options: ["Juu na chini ya mteremko", "Kwa duara", "Kukatiza mteremko, kufuata kontua", "Upande wowote"], answer: 2, why: "Mistari inayokatiza mteremko inakamata maji badala ya kuyapeleka chini ya mteremko." },
      { objective: "O2", q: "Kwa nini utumie tena vishimo vile vile katika misimu inayofuata?", options: ["Kunaokoa kazi nyingi na kujenga udongo mahali pale pale", "Vishimo haviwezi kuchimbwa mara mbili", "Kunatakiwa na sheria", "Vishimo vipya vinavutia wadudu"], answer: 0, why: "Kutumia tena vishimo ni haraka zaidi na kunakusanya maboresho mahali pamoja." },
      { objective: "O3", q: "Mkulima yupi anafaa zaidi vishimo vya kuchimbwa kwa mkono?", options: ["Mkulima mwenye hekta 20 na trekta", "Mkulima asiye na nguvu kazi kabisa", "Mkulima anayetaka kulima", "Mkulima wa jembe la mkono kwenye shamba dogo"], answer: 3, why: "Vishimo vinafaa mashamba madogo yanayolimwa kwa mkono." },
      { objective: "O3", q: "Tabaka gumu (plough pan) ni nini?", options: ["Sufuria ya kupikia", "Aina ya mbegu", "Bwawa lisilo na kina", "Safu ngumu chini ya kina cha kulima inayozuia mizizi na maji"], answer: 3, why: "Kulima mara kwa mara kunaweza kuunda safu ngumu ambayo ripa inaweza kuivunja." },
      { objective: "O3", q: "Kupanda moja kwa moja kunamaanisha nini?", options: ["Kupanda moja kwa moja kwenye udongo usiovurugwa na mabaki", "Kutawanya mbegu kwa mkono kwenye udongo uliolimwa", "Kupanda miche kutoka kitalu", "Kununua mbegu moja kwa moja kutoka kampuni"], answer: 0, why: "Kupanda moja kwa moja kunaweka mbegu bila kufungua udongo zaidi ya mahali pa kupanda." },
      { objective: "O4", q: "Kifuniko cha ziada cha udongo kinaweza kutoka wapi ikiwa mifugo wanakula mabaki mengi?", options: ["Kuchoma", "Kulima", "Mseto wa kunde au fiwi (lablab), nyasi za kingo au matawi ya miti", "Karatasi za plastiki"], answer: 2, why: "Mseto, nyasi na matawi vinaongeza kifuniko bila kuchukua chakula chote cha mifugo." },
      { objective: "O4", q: "Nchini Nigeria, chombo kipi kinasajili kemikali za kilimo kama dawa za kuua magugu?", options: ["NAFDAC", "Huduma ya hali ya hewa", "Benki kuu", "Shirikisho la mpira wa miguu"], answer: 0, why: "NAFDAC inasajili kemikali za kilimo nchini Nigeria; kagua orodha yake." },
      { objective: "O4", q: "Ni lini kudhibiti magugu ni muhimu zaidi katika zao la CA?", options: ["Wakati wa mavuno tu", "Kamwe", "Baada ya kutoa maua tu", "Katika wiki za kwanza baada ya zao kuota"], answer: 3, why: "Magugu ya mapema yanashindana zaidi na zao changa." },
      { objective: "O4", q: "Ukitumia dawa ya kuua magugu, lazima ufanye nini?", options: ["Uchanganye dozi yako mwenyewe yenye nguvu zaidi", "Utumie bidhaa iliyosajiliwa, ufuate lebo kikamilifu na uvae vifaa vya kujikinga", "Unyunyizie karibu na kisima", "Uwaache watoto wasaidie kunyunyizia"], answer: 1, why: "Bidhaa zilizosajiliwa tu, zikitumiwa kama lebo inavyosema, na kinga, ndizo salama na halali." },
      { objective: "O5", q: "Zana ipi inaweka mbegu kupitia mabaki kwa mkono?", options: ["Plau ya kugeuza udongo", "Chombo cha kumwagilia", "Jab planter", "Haro"], answer: 2, why: "Jab planter ni zana ya mkono ya kupanda moja kwa moja." },
      { objective: "O5", q: "Kila mstari wa kalenda yako ya CA unapaswa kuwa na nini?", options: ["Kazi, mwezi, zana na gharama", "Jina la zao tu", "Mvua tu", "Jina la jirani"], answer: 0, why: "Kazi, mwezi, zana na gharama vinafanya kalenda itumike." },
      { objective: "O5", q: "Vishimo vinachimbwa au kutumiwa tena na samadi kuwekwa lini?", options: ["Wakati wa kutoa maua", "Wakati wa kiangazi kabla ya mvua", "Wakati wa mavuno", "Baada ya mvua kwisha"], answer: 1, why: "Maandalizi ya kiangazi yanakuwezesha kupanda na mvua nzuri za kwanza." },
      { objective: "O6", q: "Katika miaka ya ukame, kwa nini mara nyingi CA inafanya vizuri kuliko kulima?", options: ["Inaleta mvua", "Haihitaji mbegu", "Inazuia wadudu wote", "Vishimo na matandazo vinakamata na kushika maji zaidi"], answer: 3, why: "Maji zaidi yanaingia na kidogo kinavukizwa chini ya kifuniko." },
      { objective: "O6", q: "Nini kinaweza kutokea kwa mavuno katika msimu mmoja au miwili ya kwanza ya CA?", options: ["Huongezeka mara mbili kila wakati", "Yanaweza kubaki yale yale au kushuka wakati magugu ni mengi na udongo unajirekebisha", "Hushuka hadi sifuri kila wakati", "Hakuna kinachoweza kujulikana"], answer: 1, why: "Kipindi cha mpito kinaweza kuwa kigumu; faida hujengeka katika misimu kadhaa." },
      { objective: "O6", q: "Kwa nini uache kipande kilicholimwa kando ya kipande chako cha CA?", options: ["Kulinganisha mavuno, kazi na gharama kwa haki", "Kulisha ng'ombe", "Kwa sababu CA inakitaka kisheria", "Kuotesha magugu"], answer: 0, why: "Kipande cha kulinganisha kinaonyesha CA inafanya nini hasa kwenye shamba lako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na ujaribu tena.",
    criteria: [
      { name: "Kanuni tatu", objective: "O1", notYet: "Mpango bado unalima, unaacha udongo wazi, au unalima zao moja tu.", meets: "Mpango unaonyesha kuvuruga udongo kidogo, kifuniko na mzunguko au mseto wenye angalau mazao matatu kwa muda.", exceeds: "Anaeleza jinsi kanuni tatu zinavyosaidiana kwenye shamba hili." },
      { name: "Kuandaa ardhi", objective: "O3", notYet: "Hakuna njia iliyochaguliwa, au hakuna sababu.", meets: "Vishimo, mashimo ya zai, ripa au kupanda moja kwa moja vimechaguliwa na angalau sababu mbili (nguvu kazi, nguvu ya kuvuta, udongo, ukubwa).", exceeds: "Anasema zana zitatoka wapi na ameiona au kuijaribu njia hiyo." },
      { name: "Vishimo au mashimo yamepangwa", objective: "O2", notYet: "Vishimo havikatizi mteremko au havina mpango wa samadi.", meets: "Mistari inayokatiza mteremko, tarehe za kuchimba wakati wa kiangazi na samadi au mboji katika kila kishimo (ikiwa vishimo au mashimo vinatumika).", exceeds: "Amechimba eneo la majaribio, amepima muda na amekokotoa nguvu kazi kwa shamba zima." },
      { name: "Kifuniko na magugu", objective: "O4", notYet: "Hakuna mpango wa mabaki, malisho au magugu.", meets: "Anaweka angalau asilimia 30 ya kifuniko, anashughulikia malisho, na ana ratiba ya kupalilia; dawa yoyote ya magugu imesajiliwa na inatumiwa kama lebo inavyosema na vifaa vya kujikinga.", exceeds: "Anaongeza zao la kufunika au mseto na mpango wa kuzuia magugu kutoa mbegu." },
      { name: "Kalenda ya msimu", objective: "O5", notYet: "Kazi zinakosekana au hazina tarehe.", meets: "Kila kazi kuanzia maandalizi ya kiangazi hadi mavuno, pamoja na mwezi, zana na gharama.", exceeds: "Inajumuisha siku za kazi na nani anafanya kila kazi." },
      { name: "Kulinganisha katika kipindi cha mpito", objective: "O6", notYet: "Hakuna kipande cha kulinganisha wala kumbukumbu.", meets: "Kipande cha kulinganisha kilicholimwa, pamoja na mavuno, siku za kazi na gharama za kuandika kila msimu.", exceeds: "Anaahidi kuhukumu baada ya misimu mitatu na anaorodhesha kile ambacho kingemfanya abadilishe mpango." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoendesha msimu wa CA kwenye angalau shamba moja pamoja na kipande cha kulinganisha (utafiti wa kufuatilia)",
      "Mavuno, siku za kazi na gharama kwenye vipande vya CA dhidi ya vilivyolimwa katika misimu mitatu, hasa katika miaka mikavu (kumbukumbu za wanafunzi)",
      "Wanafunzi ambao bado wanafanya CA baada ya misimu mitatu, na eneo wanalolima kwa CA",
      "Majirani au wanakikundi wanaoanza kutumia CA (ripoti za ugani)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi na kalamu kwa mchoro wa shamba na kalenda",
      "Jembe, kamba au vijiti na utepe wa kupimia au kijiti kilichopimwa kwa kupanga vishimo",
      "Samadi au mboji kwa vishimo vya majaribio",
      "Bei za eneo au viwango vya kukodi ripa, jab planter na nguvu kazi (au takwimu za mfano)",
      "Kama dakika 90 kwa jumla, pamoja na muda shambani kwa majaribio ya vishimo"
    ],
    facilitatorNotes: [
      "Fanyeni Somo la 2 shambani: pangeni na mchimbe vishimo au mashimo ya zai machache pamoja, na mpime muda wa kazi.",
      "Mwalike mkulima ambaye tayari anafanya CA, au panga ziara kwenye shamba la maonyesho, ili wanafunzi waone ripa au kupanda moja kwa moja vikifanya kazi.",
      "Zungumzeni waziwazi kuhusu desturi za malisho; walete wachungaji au viongozi wa jamii kwenye mjadala ikiwezekana.",
      "Usipendekeze dawa maalum za kuua magugu; waelekeze wanafunzi kwenye orodha ya usajili ya kitaifa na kwa afisa ugani, na usisitize lebo na vifaa vya kujikinga.",
      "Weka matarajio ya kweli kuhusu kipindi cha mpito: mavuno yanaweza yasiongezeke katika misimu ya kwanza.",
      "Pima mpango wa mwisho kwa rubriki na fuatilia baada ya kila msimu ili kulinganisha vipande."
    ]
  }
};
