"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-soil-health.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_SOM = { name: "FAO: Umuhimu wa viumbe hai vya udongo (ufunguo wa udongo unaostahimili ukame)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO: Mbinu za kudhibiti maji ya mvua yanayotiririka ili kuzuia mmomonyoko", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "FAO TECA/STI: Mbinu za kimitambo za kuhifadhi udongo ili kupunguza mmomonyoko", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Shirika la Utafiti wa Kilimo na Mifugo la Kenya (KALRO): mawasiliano ya upimaji wa udongo", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO: Mwongozo wa kuchukua sampuli za udongo na kuziandaa kwa upimaji wa rutuba", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Soil Research Institute (Taasisi ya Utafiti wa Udongo), Kwadaso, Kumasi (Ghana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: kitabu cha ugani cha matumizi ya mbolea", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health-sw",
  lang: "sw",
  translationOf: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Afya na Rutuba ya Udongo",
  skills: "Kusoma udongo wako shambani, Kuchukua sampuli ya udongo kwa upimaji, Kuongeza viumbe hai kwa mboji na samadi, Kupanga mzunguko wa mazao na kuchanganya na mikunde, Kuzuia mmomonyoko kwa matandazo na kazi za kontua, Kutumia mbolea kwa kanuni ya 4R",
  outcome: "kukagua afya ya udongo wako, kuchukua sampuli nzuri kwa upimaji wa maabara, na kuandika mpango wa udongo wa msimu mmoja unaoongeza viumbe hai, unaozungusha mazao na mikunde, unaozuia udongo kusombwa, na unaotumia mbolea ya aina sahihi, kiasi sahihi, wakati sahihi na mahali sahihi.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wanaokua, wafanyakazi wa mashamba na vijana wakulima nchini Kenya, Nigeria, Ghana na kote Afrika wanaotaka kupata zaidi kutoka kwenye ardhi ileile. Udongo wenye afya unashika maji zaidi, unalisha zao vizuri zaidi, na unarudisha kila shilingi, naira au cedi unayotumia kwa mbegu na mbolea.",
    "Sura ya 1 inahusu kuujua udongo wako: kuusoma kwa macho na mikono, kupata upimaji sahihi wa udongo, na kuongeza viumbe hai kwa mboji na samadi. Sura ya 2 inahusu kuuweka na afya msimu baada ya msimu: mzunguko wa mazao na kuchanganya na mikunde, matandazo na kuzuia mmomonyoko, na kutumia mbolea vizuri.",
    "Udongo hutofautiana kutoka shamba moja hadi jingine. Tumia kozi hii pamoja na majibu ya upimaji wa udongo wako na ushauri wa afisa ugani, taasisi ya utafiti au duka la pembejeo (agrovet), na jaribu mbinu mpya kwenye kipande kidogo kwanza. Kila somo linachukua kama dakika tano na linaisha na kazi kwenye shamba lako. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa udongo wa ukurasa mmoja kwa shamba moja lako (au shamba la mfano kama ekari 1 ya mahindi na maharagwe huko Kakamega, ekari 2 za mihogo huko Oyo, au ekari 1 ya nyanya karibu na Kumasi): ukaguzi wako wa shamba ulionyesha nini, lini na wapi utapima udongo (au upimaji ulisema nini), utaongezaje viumbe hai, mzunguko wako wa mazao au mchanganyiko na mikunde, utaufunikaje udongo na kuzuia mmomonyoko, na mpango wako wa mbolea ulioandikwa kama aina, kiasi, wakati na mahali.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wanaokua, wafanyakazi wa mashamba na vijana wakulima nchini Kenya, Nigeria, Ghana na kote Afrika wanaotaka kupata zaidi kutoka kwenye ardhi ileile, wakilima mazao kama mahindi, maharagwe, mihogo na nyanya.",
    startingPoint: "Wengi hupanda kila msimu na hutumia samadi au mbolea kidogo, mara nyingi kwa mazoea au kwa ushauri wa jirani. Wachache wamekagua udongo wao shambani, wamepima udongo, wametengeneza mboji, wamepanga mzunguko wa mazao, wamejenga vizuizi vya mmomonyoko kwenye kontua, au wametumia mbolea kwa kanuni ya 4R.",
    gap: "Udongo uliochoka, wenye asidi au uliomomonyoka unapoteza pesa zinazotumika kwa mbegu na mbolea na unaacha mazao dhaifu wakati wa ukame. Kuujua udongo wao na kuujenga kila msimu kunawasaidia wakulima kushika maji zaidi, kulisha mazao vizuri zaidi na kupata mavuno zaidi kutoka kila mfuko wa mbolea.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la udongo linaelezwa",
      "Vifaa: jembe au sepetu, ndoo na simu ya kawaida; mazoezi mengi yanafanyika shambani",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi za shamba",
      "Udongo hutofautiana kila shamba: viwango vinatoka kwenye upimaji wa udongo, ugani au utafiti, na mbinu mpya zinajaribiwa kwenye kipande kidogo kwanza",
      "Ada za maabara, mahali zilipo na muda wa kusubiri hubadilika: wanafunzi wanapiga simu au wanakagua kabla ya kwenda"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwenye mojawapo ya mashamba yako", action: "kukagua rangi, umbile, minyoo, mizizi, maji na dalili za mimea, na kuandika kile ukaguzi unaonyesha", standard: "ukichukulia dalili za mimea kama vidokezo vya kuthibitisha kwa upimaji wa udongo" },
    { id: "O2", condition: "Kwa shamba moja", action: "kuchukua sampuli ya udongo kwa njia sahihi na kutaja mahali pa kuipeleka kupimwa", standard: "ukichanganya sampuli ndogo nyingi kuwa sampuli moja safi kwa kila sehemu ya shamba" },
    { id: "O3", condition: "Ukitumia mabaki ya mazao, majani mabichi na samadi", action: "kutengeneza rundo la mboji na kupanga jinsi ya kuongeza viumbe hai", standard: "bila kuchoma mabaki na bila kuweka samadi mbichi kwenye miche" },
    { id: "O4", condition: "Kwa shamba moja", action: "kupanga mzunguko wa mazao wa misimu mitatu na mchanganyiko na mikunde", standard: "ukiwa na mkunde kwenye mpango na nafasi inayoruhusu mazao yote mawili kupata mwanga" },
    { id: "O5", condition: "Kwa shamba lenye mteremko au lililo wazi", action: "kuchagua matandazo na vizuizi vya mmomonyoko na kuviweka kufuata kontua", standard: "ukiweka alama ya kontua kwa msaada wa ugani inapohitajika" },
    { id: "O6", condition: "Kwa zao moja", action: "kuandika mpango wa mbolea kwa aina sahihi, kiasi sahihi, wakati sahihi na mahali sahihi", standard: "ukichukua viwango kutoka kwenye upimaji wa udongo au pendekezo la eneo lako" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuujua na kuulisha udongo wako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kusoma udongo wako kwa macho na mikono",
          minutes: 5,
          goal: "Kagua udongo wako shambani kwa njia rahisi na uandike unachokiona.",
          text: [
            "Unaweza kujifunza mengi kuhusu udongo kwa jembe, mikono na macho yako. Udongo wenye afya ni mweusi, unafarakana kwa urahisi na una harufu ya ardhi. Una minyoo na viumbe wengine wadogo, mizizi inakwenda chini sana, na mvua inazama ndani badala ya kutiririka. Udongo duni ni mweupe au mgumu, unaganda juu baada ya mvua, unapasuka sana ukikauka, au unabaki na maji na harufu mbaya.",
            "Hisi umbile lake: lowanisha kidonge kidogo cha udongo na ukisugue kati ya vidole. Udongo wa mchanga unakwaruza na unasambaratika; unapitisha maji haraka na unapoteza virutubisho. Udongo wa mfinyanzi unanata na unaweza kuviringishwa kuwa utepe mrefu mwembamba; unashika maji na virutubisho lakini unaweza kujaa maji na kuwa mgumu. Tifutifu (loam) uko katikati na ndio rahisi zaidi kulima.",
            "Angalia mimea pia. Majani ya chini ya mahindi yakigeuka manjano inaweza kumaanisha naitrojeni haitoshi. Majani ya zambarau kwenye mahindi machanga yanaweza kumaanisha fosforasi haitoshi. Magugu kama kiduha (striga) mara nyingi yanaonyesha udongo uliochoka wenye rutuba kidogo. Hivi ni vidokezo, si uthibitisho: upimaji wa udongo ndio unakuambia kwa uhakika."
          ],
          steps: ["Chimba shimo lenye kina cha jembe moja sehemu tatu za shamba.", "Angalia rangi, matabaka, mizizi na tabaka lolote gumu.", "Hesabu minyoo katika udongo wa jembe moja.", "Lowanisha kidonge cha udongo na ukihisi: kinakwaruza (mchanga), kinanata (mfinyanzi) au katikati (tifutifu).", "Baada ya mvua, andika mahali maji yanatiririka au yanatuama.", "Andika ulichokiona kwa kila sehemu ya shamba."],
          words: [["Umbile la udongo", "kiasi cha mchanga, tope laini (silt) au mfinyanzi katika udongo; linaamua jinsi maji yanavyopita haraka."], ["Tifutifu (loam)", "udongo wenye mchanganyiko mzuri wa mchanga, tope laini na mfinyanzi."], ["Tabaka gumu (hardpan)", "tabaka gumu chini ya uso ambalo mizizi na maji haviwezi kupenya."], ["Kiduha (striga)", "gugu vimelea linaloshambulia mahindi, mtama na uwele, linalopatikana sana kwenye udongo duni."]],
          slides: [
            { title: "Udongo wenye afya", bullets: ["Mweusi, unafarakana, una harufu ya ardhi", "Minyoo na mizizi inayokwenda chini", "Mvua inazama ndani, haitiririki"] },
            { title: "Hisi umbile", bullets: ["Unakwaruza na kusambaratika: mchanga, unapitisha maji haraka", "Unanata, unaviringishwa kuwa utepe: mfinyanzi, unashika maji", "Katikati: tifutifu, rahisi zaidi kulima"] },
            { title: "Vidokezo vya mimea (si uthibitisho)", bullets: ["Majani ya chini ya mahindi manjano: huenda naitrojeni ni kidogo", "Majani ya zambarau ya mahindi machanga: huenda fosforasi ni kidogo", "Kiduha kingi: mara nyingi udongo uliochoka na duni"] },
            { title: "Ukaguzi wa shamba", bullets: ["Chimba sehemu tatu", "Angalia, nusa, hesabu minyoo, hisi umbile", "Tazama maji baada ya mvua; yaandike"] }
          ],
          tryIt: "Kagua mojawapo ya mashamba yako: chimba sehemu tatu, hisi umbile, hesabu minyoo, na andika mstari mmoja kwa kila sehemu. Piga picha ya kila shimo kwa simu ili ulinganishe msimu ujao.",
          youCanNow: "kukagua udongo wako shambani na kueleza umbile lake, uhai wake, jinsi unavyopitisha maji na dalili za hatari.",
          quickCheck: [
            { objective: "O1", q: "Majani ya chini ya mahindi yakigeuka manjano yanaweza kuonyesha nini?", options: ["Maji mengi mno kwenye majani", "Jua kali mno", "Ukuaji wenye afya", "Naitrojeni kidogo mno"], answer: 3, why: "Majani ya chini ya mahindi yakiwa manjano yanaweza kumaanisha naitrojeni ni kidogo mno; upimaji wa udongo unathibitisha." },
            { objective: "O1", q: "Baada ya mvua, shamba lako linaganda juu na maji yanatiririka. Unaandika nini katika ukaguzi wako?", options: ["Udongo wenye afya; hakuna haja ya kubadilisha", "Dalili ya udongo duni, ya kuthibitisha kwa upimaji wa udongo", "Minyoo mingi mno", "Tifutifu kamili"], answer: 1, why: "Kuganda juu na maji kutiririka ni dalili za udongo duni; upimaji wa udongo unakuambia kwa uhakika unachohitaji." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupima udongo na kuchukua sampuli nzuri",
          minutes: 5,
          goal: "Chukua sampuli ya udongo kwa njia sahihi na ujue mahali pa kuipeleka kupimwa.",
          text: [
            "Upimaji wa udongo unakuambia kile macho yako hayawezi kuona: udongo una asidi kiasi gani (pH) na una kiasi gani cha virutubisho vikuu. Udongo mwingi katika maeneo yenye mvua nyingi ya Kenya, Nigeria na Ghana una asidi, na asidi hiyo inafungia virutubisho mbali na zao; upimaji unakuambia kama chokaa kitasaidia. Bila upimaji, unaweza kutumia pesa kwa mbolea isiyofaa.",
            "Mahali pa kupima: nchini Kenya, KALRO ina maabara za udongo (kwa mfano maabara yake ya rutuba ya udongo huko Kabete, Nairobi) na baadhi ya kaunti zina maabara zao. Nchini Ghana, CSIR-Soil Research Institute huko Kwadaso, Kumasi inatoa uchambuzi wa maabara. Nchini Nigeria na kwingineko, uliza ofisi ya ugani ya jimbo au kaunti, chuo kikuu cha kilimo au taasisi ya utafiti. Ada, mahali maabara zilipo na muda wa kusubiri hubadilika, kwa hiyo piga simu au kagua kabla ya kwenda.",
            "Mwongozo wa KALRO wenyewe unasema kuchukua sampuli ndiko chanzo kikubwa zaidi cha makosa katika upimaji wa udongo. Konzi moja kutoka sehemu moja haiwakilishi shamba. Chukua sampuli ndogo nyingi kote shambani, zichanganye, na upeleke sampuli moja safi iliyochanganywa kwa kila shamba au kila sehemu inayoonekana tofauti."
          ],
          steps: ["Chagua shamba moja (au sehemu moja inayofanana).", "Tembea kwa mwendo wa zigzag na uchukue sampuli ndogo 10 hadi 20, sentimita 15 hadi 20 za juu, kwa jembe au keki (auger) safi.", "Epuka sehemu zisizo za kawaida: marundo ya zamani ya samadi, majivu, njia, vichuguu, mistari ya mbolea.", "Changanya sampuli zote vizuri kwenye ndoo safi (si mfuko wa mbolea).", "Chukua kama nusu kilo ya mchanganyiko, uikaushe kivulini, na uiwekee lebo: jina, shamba, tarehe, zao unalopanga.", "Ipeleke maabara kabla ya kupanda ili majibu yafike kwa wakati."],
          words: [["pH", "namba inayoonyesha udongo una asidi au alkali kiasi gani; mazao mengi yanapenda karibu na katikati (neutral)."], ["Udongo wenye asidi", "udongo wenye pH ya chini unaofungia virutubisho kama fosforasi."], ["Chokaa", "unga wa mwamba unaopunguza asidi ya udongo."], ["Sampuli mchanganyiko", "sampuli ndogo nyingi kutoka shamba moja zilizochanganywa kuwa moja."]],
          slides: [
            { title: "Kwa nini upime?", bullets: ["Unaonyesha pH na virutubisho vikuu", "Unakuambia kama chokaa kitasaidia", "Unazuia pesa kwenda kwa mbolea isiyofaa"] },
            { title: "Mahali pa kupima", bullets: ["Kenya: maabara za KALRO (k.m. Kabete) na baadhi ya maabara za kaunti", "Ghana: CSIR-Soil Research Institute, Kumasi", "Kwingineko: ofisi ya ugani, chuo kikuu, taasisi ya utafiti"] },
            { title: "Chukua sampuli nzuri", bullets: ["Zigzag, sehemu 10 hadi 20, sm 15 hadi 20 za juu", "Epuka marundo ya samadi, majivu, njia, vichuguu", "Changanya kwenye ndoo safi; peleka kama nusu kilo"] },
            { title: "Lebo na wakati", bullets: ["Jina, shamba, tarehe, zao unalopanga", "Kausha kivulini", "Peleka kabla ya kupanda; kagua ada na maabara kwanza"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Tafuta mahali karibu nawe panapopima udongo: mpigie simu afisa ugani au kagua KALRO, CSIR-SRI au taasisi ya utafiti ya jimbo lako. Andika jina lake, ada na muda wa kusubiri. Kisha chora ramani rahisi ya shamba lako na uweke alama ya njia ya zigzag utakayotembea kuchukua sampuli.",
          youCanNow: "kuchukua sampuli sahihi ya udongo iliyochanganywa na kujua mahali pa kuipima.",
          quickCheck: [
            { objective: "O2", q: "pH ya udongo inakuambia nini?", options: ["Udongo una asidi kiasi gani", "Una minyoo wangapi", "Mizizi inakwenda chini kiasi gani", "Mvua ilinyesha kiasi gani"], answer: 0, why: "pH inaonyesha udongo una asidi kiasi gani; udongo wenye asidi unafungia virutubisho na huenda ukahitaji chokaa." },
            { objective: "O2", q: "Sehemu moja ya shamba lako imejaa maji na sehemu nyingine ni kavu na ya mchanga. Unachukuaje sampuli?", options: ["Konzi moja kutoka katikati", "Changanya sehemu yenye maji na kavu kuwa sampuli moja", "Peleka sampuli mchanganyiko tofauti kwa kila sehemu inayoonekana tofauti", "Chukua sampuli karibu na rundo la samadi tu"], answer: 2, why: "Kila shamba, au kila sehemu inayoonekana tofauti, inapata sampuli yake safi iliyochanganywa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuongeza viumbe hai kwa mboji na samadi",
          minutes: 5,
          goal: "Tengeneza rundo la mboji na utumie samadi kwa usalama ili kuongeza viumbe hai vya udongo.",
          text: [
            "Viumbe hai vya udongo ni mabaki meusi yaliyooza ya mimea na wanyama ndani ya udongo. FAO inaviita ufunguo wa udongo unaostahimili ukame: vinashika maji kama sponji, vinalisha minyoo na viumbe vya udongo, vinashika virutubisho ili mvua isivisombe, na vinafanya udongo ufarakane ili mizizi ikue.",
            "Unaongeza viumbe hai kwa kuacha mabaki ya mazao shambani badala ya kuyachoma, kwa kuongeza samadi na mboji, na kwa kupanda mikunde na mazao ya kufunika udongo. Kuchoma mabaki na kulima tena na tena vyote viwili vinamaliza viumbe hai.",
            "Mboji ni rahisi kutengeneza: jenga rundo au shimo lenye matabaka ya vitu vikavu (mabua ya mahindi, nyasi kavu), vitu vibichi (magugu mabichi, majani, mabaki ya jikoni) na samadi, na udongo kidogo kati ya matabaka. Liweke na unyevu kama sponji iliyokamuliwa, na ulipindue kila wiki mbili hadi tatu. Liko tayari baada ya kama miezi miwili hadi mitatu likiwa jeusi, linafarakana na lina harufu ya udongo. Acha samadi mbichi ioze kabla ya kuitumia; samadi mbichi yenye joto inaweza kuunguza miche."
          ],
          steps: ["Chagua mahali penye kivuli karibu na shamba na maji.", "Weka msingi wa mabua makubwa ili hewa ipite.", "Ongeza matabaka: vitu vikavu, vitu vibichi, samadi, udongo kidogo; rudia.", "Mwagilia kila tabaka liwe na unyevu, si kulowa.", "Choma fimbo ndani ya rundo; ikiwa na joto, linafanya kazi.", "Pindua rundo kila wiki mbili hadi tatu.", "Litumie likiwa jeusi na linafarakana, kwenye mashimo ya kupandia au mistari."],
          words: [["Viumbe hai vya udongo", "mabaki ya mimea na wanyama yaliyooza ndani ya udongo yanayoshika maji na virutubisho."], ["Mboji", "takataka za mimea na wanyama zilizooza zinazotumika kulisha udongo."], ["Mabaki ya mazao", "mabua, majani na maganda yanayobaki baada ya mavuno."], ["Zao la kufunika udongo", "zao linalopandwa hasa ili kufunika na kulisha udongo."]],
          slides: [
            { title: "Kwa nini viumbe hai ni muhimu", bullets: ["Vinashika maji kama sponji (FAO)", "Vinalisha viumbe vya udongo na kushika virutubisho", "Vinafanya udongo ufarakane kwa ajili ya mizizi"] },
            { title: "Ongeza, usichome", bullets: ["Acha mabaki ya mazao; usiyachome", "Ongeza samadi na mboji", "Panda mikunde na mazao ya kufunika udongo"] },
            { title: "Tengeneza mboji", bullets: ["Matabaka: vikavu, vibichi, samadi, udongo kidogo", "Unyevu kama sponji iliyokamuliwa", "Pindua kila wiki 2 hadi 3; tayari baada ya miezi 2 hadi 3"] },
            { title: "Samadi kwa usalama", bullets: ["Acha samadi mbichi ioze kwanza", "Samadi mbichi yenye joto inaweza kuunguza miche", "Osha mikono baada ya kuishika"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Anza rundo au shimo la mboji wiki hii kwa ulichonacho: mabua, magugu, mabaki ya jikoni na samadi. Andika tarehe, matabaka uliyotumia, na weka kikumbusho kwenye simu yako cha kulipindua baada ya wiki mbili.",
          youCanNow: "kutengeneza mboji, kutumia samadi kwa usalama, na kueleza jinsi viumbe hai vinavyosaidia udongo wako.",
          quickCheck: [
            { objective: "O3", q: "Nini kinawekwa kwenye rundo la mboji?", options: ["Plastiki na makopo tu", "Samadi mbichi tu", "Matabaka ya vitu vikavu, vitu vibichi na samadi, na udongo kidogo katikati", "Majivu ya mabaki yaliyochomwa tu"], answer: 2, why: "Mboji inajengwa kwa matabaka ya vitu vikavu, vitu vibichi na samadi, ikiwekwa na unyevu na kupinduliwa." },
            { objective: "O3", q: "Baada ya kama miezi mitatu mboji yako ni nyeusi, inafarakana na ina harufu ya udongo. Unafanya nini?", options: ["Itumie; iko tayari", "Ichome", "Itupe", "Iache kwa miaka miwili zaidi"], answer: 0, why: "Mboji iko tayari ikiwa nyeusi, inafarakana na ina harufu ya udongo, baada ya kama miezi miwili hadi mitatu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuujua na kuulisha udongo wako",
        questions: [
          { objective: "O1", q: "Unalowanisha kidonge cha udongo na kinakwaruza na kusambaratika. Huenda ni udongo wa aina gani?", options: ["Mfinyanzi", "Mchanga", "Tifutifu", "Udongo wa kinamasi (peat)"], answer: 1, why: "Udongo unaokwaruza na kusambaratika ni wa mchanga; unapitisha maji haraka na unapoteza virutubisho." },
          { objective: "O1", q: "Mahindi machanga yana majani ya zambarau. Hatua ipi bora inayofuata?", options: ["Nunua mbolea yoyote mara moja", "Choma shamba", "Ichukulie kama kidokezo na uthibitishe kwa upimaji wa udongo", "Ng'oa zao"], answer: 2, why: "Rangi ya majani ni kidokezo, si uthibitisho; upimaji wa udongo unakuambia kwa uhakika." },
          { objective: "O2", q: "Unapaswa kuchukuaje sampuli ya udongo kutoka shambani?", options: ["Konzi moja kutoka sehemu bora", "Udongo kutoka rundo la zamani la samadi", "Udongo kutoka njiani, mahali rahisi kuchimba", "Sampuli ndogo 10 hadi 20 kwa zigzag, zilizochanganywa kuwa moja"], answer: 3, why: "Sampuli mchanganyiko kutoka sehemu nyingi inawakilisha shamba lote; KALRO inasema kuchukua sampuli ndiko chanzo kikubwa zaidi cha makosa." },
          { objective: "O2", q: "Nchini Ghana, taasisi ipi inatoa uchambuzi wa udongo wa maabara?", options: ["CSIR-Soil Research Institute, Kumasi", "Chama cha taifa cha mpira wa miguu", "Mamlaka ya hali ya hewa", "Ofisi ya posta"], answer: 0, why: "CSIR-Soil Research Institute huko Kwadaso, Kumasi inatoa uchambuzi wa maabara." },
          { objective: "O3", q: "Ufanye nini na mabua ya mahindi baada ya mavuno ili kujenga afya ya udongo?", options: ["Yachome", "Yaache shambani au uyafanye mboji", "Yatupe mtoni", "Yauze yote kila msimu"], answer: 1, why: "Mabaki yanayoachwa shambani au kufanywa mboji yanaongeza viumbe hai; kuyachoma kunavimaliza." }
        ]
      }
    },
    {
      name: "Sura 2: Kuweka udongo na afya msimu baada ya msimu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mzunguko wa mazao na kuchanganya na mikunde",
          minutes: 5,
          goal: "Panga mzunguko wa mazao wa misimu mitatu na mchanganyiko na mikunde kwa shamba moja.",
          text: [
            "Kupanda zao lilelile kwenye shamba lilelile kila msimu kunamaliza virutubisho vilevile na kunaongeza wadudu, magonjwa na magugu yake. Mzunguko wa mazao ni kubadilisha zao kwenye shamba kutoka msimu mmoja hadi mwingine, kwa mfano mahindi, kisha maharagwe au karanga, kisha mtama au mihogo.",
            "Mikunde kama maharagwe, kunde, karanga, soya na mbaazi inafanya kazi na bakteria walio katika vivimbe vidogo (vinundu) kwenye mizizi yake kuchukua naitrojeni kutoka hewani. Sehemu ya naitrojeni hiyo inabaki kwenye mizizi na majani kwa ajili ya zao linalofuata, hasa ukiacha mabaki shambani.",
            "Kuchanganya mazao ni kupanda mazao mawili pamoja, kama mahindi na maharagwe, mtama na kunde, au mihogo na karanga. Kunafunika udongo, kunagawanya hatari, na kunaweza kutoa chakula zaidi kwa jumla kutoka ardhi ileile. Weka nafasi inayoruhusu mazao yote mawili kupata mwanga, na panda mkunde mapema vya kutosha ili ushike."
          ],
          steps: ["Orodhesha mashamba unayolima na kilichopandwa kwenye kila moja msimu uliopita.", "Panga misimu mitatu ijayo ili hakuna shamba linalopata zao lilelile mara mbili mfululizo.", "Weka mkunde kwenye kila shamba angalau mara moja katika misimu mitatu.", "Chagua jozi moja ya mazao ya kuchanganya, kama mahindi na maharagwe.", "Acha mabaki ya mikunde shambani baada ya mavuno."],
          words: [["Mzunguko wa mazao", "kubadilisha zao linalopandwa kwenye shamba kutoka msimu mmoja hadi unaofuata."], ["Mkunde", "mmea kama maharagwe, kunde au karanga unaoweza kuongeza naitrojeni kwenye udongo."], ["Vinundu", "vivimbe vidogo kwenye mizizi ya mikunde ambapo bakteria wanachukua naitrojeni kutoka hewani."], ["Kuchanganya mazao", "kupanda mazao mawili au zaidi pamoja kwenye shamba moja."]],
          slides: [
            { title: "Kwa nini kuzungusha", bullets: ["Zao lilelile kila msimu linamaliza virutubisho vilevile", "Wadudu, magonjwa na magugu yanaongezeka", "Mfano: mahindi, kisha maharagwe, kisha mtama"] },
            { title: "Mikunde inalisha udongo", bullets: ["Maharagwe, kunde, karanga, soya, mbaazi", "Vinundu vya mizizi vinachukua naitrojeni hewani", "Acha mabaki ili zao linalofuata linufaike"] },
            { title: "Changanya mazao", bullets: ["Mahindi + maharagwe, mtama + kunde, mihogo + karanga", "Kunafunika udongo na kugawanya hatari", "Weka nafasi ili mazao yote yapate mwanga"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Chora jedwali rahisi: mashamba yako upande wa kushoto, misimu mitatu ijayo juu. Jaza zao kwenye kila kisanduku ili kila shamba lipate mkunde mara moja na hakuna shamba linalorudia zao. Ng'oa mmea mmoja wa maharagwe au karanga na utafute vinundu kwenye mizizi.",
          youCanNow: "kupanga mzunguko wa mazao na mchanganyiko na mikunde unaolisha udongo wako.",
          quickCheck: [
            { objective: "O4", q: "Vinundu kwenye mizizi ya mikunde ni nini?", options: ["Dalili za ugonjwa", "Vivimbe vidogo ambapo bakteria wanachukua naitrojeni kutoka hewani", "Mayai ya wadudu", "Mawe ndani ya udongo"], answer: 1, why: "Mikunde inafanya kazi na bakteria katika vinundu vya mizizi kuchukua naitrojeni kutoka hewani." },
            { objective: "O4", q: "Unapanda mahindi na maharagwe pamoja, lakini maharagwe hayapati mwanga. Unabadilisha nini?", options: ["Acha kupanda maharagwe", "Choma mahindi", "Ongeza mbegu zaidi", "Tumia nafasi inayoruhusu mazao yote kupata mwanga, na panda maharagwe mapema vya kutosha"], answer: 3, why: "Mazao yanayochanganywa yanahitaji nafasi inayoruhusu yote kupata mwanga, na mkunde upandwe mapema vya kutosha ili ushike." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Matandazo na kuzuia mmomonyoko",
          minutes: 5,
          goal: "Chagua na uweke matandazo na vizuizi rahisi vya mmomonyoko kwa shamba lenye mteremko.",
          text: [
            "Udongo ulio wazi ni udongo unaopotea. Mvua kubwa inalegeza udongo na maji yanayotiririka yanasomba tabaka la juu lenye rutuba zaidi. Matandazo, yaani tabaka la mabaki ya mazao, nyasi kavu au majani juu ya udongo, yanapunguza nguvu ya mvua, yanaweka udongo na unyevu na ubaridi, na yanalisha udongo yanapooza. FAO inasema kwenye miteremko sehemu kubwa zaidi ya ardhi inahitaji kufunikwa kwa mabaki ili kuzuia mmomonyoko kuliko kwenye ardhi tambarare.",
            "Kwenye miteremko, fanya kazi kukatiza mteremko, kamwe si juu na chini. Panda na tengeneza matuta kufuata kontua (mstari wenye kimo kilekile unaokatiza mteremko). FAO inaeleza matuta ya kontua kama njia nzuri kwa wakulima wadogo wenye zana za mkono au maksai, na vipande vya nyasi (kwa mfano nyasi ya tembo, Napier) kufuata kontua kama mbadala wa bei nafuu wa matuta ya ngazi; nyasi hiyo inaweza pia kulisha mifugo.",
            "Kwenye ardhi yenye mteremko mkali zaidi, mistari ya mawe, kingo za kontua na matuta ya ngazi (kama matuta ya fanya juu nchini Kenya) yanashika udongo na maji. Yanahitaji kazi kuyajenga na kuyatunza, na mistari iliyowekwa vibaya inaweza kuzidisha mmomonyoko, kwa hiyo mwombe afisa ugani akusaidie kuweka alama ya kontua."
          ],
          steps: ["Tembea shambani baada ya mvua na uweke alama mahali maji yanapita na udongo umesombwa.", "Weka alama za mistari ya kontua kukatiza mteremko kwa fremu ya A au kipimo cha bomba la maji, au kwa msaada wa ugani.", "Panda, tengeneza matuta na palilia kufuata mistari ya kontua.", "Panda vipande vya nyasi au jenga mistari ya mawe au kingo kufuata baadhi ya kontua.", "Funika udongo kati ya mistari kwa matandazo.", "Kagua na ukarabati baada ya kila mvua kubwa."],
          words: [["Matandazo", "tabaka la mabaki, nyasi au majani linalotandazwa juu ya udongo."], ["Mmomonyoko", "udongo kusombwa na maji au kupeperushwa na upepo."], ["Kontua", "mstari unaokatiza mteremko ambapo kila sehemu iko kwenye kimo kilekile."], ["Tuta la ngazi (terrace)", "ngazi tambarare iliyokatwa kwenye mteremko ili kushika udongo na maji."]],
          slides: [
            { title: "Udongo wazi ni udongo unaopotea", bullets: ["Mvua inalegeza udongo; maji yanayotiririka yanausomba", "Matandazo yanapunguza nguvu ya mvua na kuweka unyevu", "Miteremko inahitaji kufunikwa zaidi"] },
            { title: "Fanya kazi kukatiza mteremko", bullets: ["Kamwe usilime juu na chini", "Tengeneza matuta na panda kufuata kontua", "Vipande vya nyasi: bei nafuu, na chakula cha mifugo"] },
            { title: "Ardhi yenye mteremko mkali", bullets: ["Mistari ya mawe, kingo za kontua, matuta ya ngazi", "Weka mistari kwa uangalifu; uliza ugani", "Karabati baada ya mvua kubwa"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "Baada ya mvua ijayo, tembea shambani na uweke alama kwenye ramani rahisi mahali maji yanapita na udongo umesombwa. Chagua kizuizi kimoja (matandazo, matuta ya kontua, kipande cha nyasi au mstari wa mawe) kwa sehemu mbaya zaidi na uandike lini utakiweka.",
          youCanNow: "kutambua mmomonyoko shambani kwako na kuchagua matandazo na vizuizi vya kontua kuuzuia.",
          quickCheck: [
            { objective: "O5", q: "Mstari wa kontua ni nini?", options: ["Mstari ulionyooka kupanda mteremko", "Uzio", "Barabara", "Mstari wenye kimo kilekile unaokatiza mteremko"], answer: 3, why: "Kontua ni mstari wenye kimo kilekile unaokatiza mteremko; matuta na vipande vya nyasi vinaufuata." },
            { objective: "O5", q: "Unataka kujenga matuta ya fanya juu kwenye shamba lenye mteremko mkali. Unafanya nini kwanza?", options: ["Mwombe afisa ugani akusaidie kuweka alama ya kontua", "Chimba moja kwa moja juu na chini ya mteremko", "Anza popote na urekebishe baadaye", "Ondoa nyasi zote kwanza"], answer: 0, why: "Mistari iliyowekwa vibaya inaweza kuzidisha mmomonyoko, kwa hiyo pata msaada wa kuweka alama ya kontua." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Misingi ya mbolea: aina, kiasi, wakati na mahali sahihi",
          minutes: 6,
          goal: "Andika mpango wa mbolea kwa zao moja ukitumia kanuni ya 4R.",
          text: [
            "Mazao yanahitaji naitrojeni (N), fosforasi (P) na potasiamu (K), pamoja na kiasi kidogo cha virutubisho vingine. Mbolea za madukani zinavitoa haraka na kwa kiasi kinachojulikana. Wazo la 4R, linalotumika katika ugani kote Afrika, linakusaidia kupata faida kubwa zaidi kutoka kila mfuko: aina sahihi, kwa kiasi sahihi, kwa wakati sahihi, mahali sahihi.",
            "Aina sahihi: bidhaa inayotoa kile ambacho upimaji wa udongo unasema kinakosekana (kwa mfano mbolea ya fosforasi wakati wa kupanda, mbolea ya naitrojeni ya kukuzia, na chokaa ikiwa udongo una asidi). Kiasi sahihi: kiasi ambacho upimaji wa udongo na pendekezo la eneo lako vinatoa kwa zao lako na mavuno unayolenga; zaidi si bora kila wakati na kunapoteza pesa. Wakati sahihi: zao linapohitaji, kwa mfano mbolea ya kukuzia naitrojeni kwenye mahindi yakifika karibu urefu wa goti, udongo ukiwa na unyevu. Mahali sahihi: karibu na mizizi, kama kwenye shimo la kupandia au mstari kando ya safu, isiguse mbegu, na ifunikwe ili mvua isiisombe.",
            "Tumia mbolea pamoja na viumbe hai; vyote viwili vinafanya kazi vizuri zaidi kuliko kimoja peke yake. Nunua mifuko iliyofungwa kutoka kwa wauzaji wa pembejeo waliosajiliwa na usome lebo. Msaidizi wa AI kwenye simu anaweza kukusaidia kuelewa ripoti ya upimaji wa udongo kwa maneno rahisi, lakini viwango vinatoka maabara, kwa afisa ugani au kwenye pendekezo rasmi la eneo lako."
          ],
          steps: ["Soma upimaji wa udongo wako au pendekezo la eneo lako kwa zao hilo.", "Aina: andika bidhaa inayotoa kila kirutubisho kinachokosekana (na chokaa ikihitajika).", "Kiasi: andika kiasi kwa ekari au hekta ambacho pendekezo linatoa.", "Wakati: weka alama ya tarehe za kupanda na kukuzia kwenye kalenda yako.", "Mahali: panga kuiweka shimoni au kwenye mstari, isiguse mbegu, na uifunike.", "Nunua mifuko iliyofungwa kutoka kwa muuzaji wa pembejeo aliyesajiliwa; weka risiti."],
          words: [["NPK", "naitrojeni (N), fosforasi (P) na potasiamu (K), virutubisho vikuu vitatu vya mazao."], ["4R", "aina sahihi, kiasi sahihi, wakati sahihi, mahali sahihi kwa mbolea."], ["Mbolea ya kukuzia (topdressing)", "kuongeza mbolea, kwa kawaida naitrojeni, kwenye zao linalokua."], ["Muuzaji wa pembejeo (agro-dealer)", "duka linalouza mbegu, mbolea na pembejeo nyingine za kilimo."]],
          slides: [
            { title: "Kanuni ya 4R", bullets: ["Aina sahihi: kile udongo wako unakosa", "Kiasi sahihi: kiasi kinachopendekezwa", "Wakati sahihi: zao linapohitaji", "Mahali sahihi: karibu na mizizi, imefunikwa"] },
            { title: "Mfano: mahindi", bullets: ["Mbolea ya fosforasi shimoni wakati wa kupanda, isiguse mbegu", "Mbolea ya kukuzia naitrojeni karibu urefu wa goti, udongo na unyevu", "Chokaa ikiwa upimaji unasema udongo una asidi"] },
            { title: "Pata thamani ya pesa yako", bullets: ["Zaidi si bora kila wakati", "Changanya na mboji na samadi", "Mifuko iliyofungwa kutoka kwa wauzaji waliosajiliwa"] },
            { title: "AI inaweza kueleza, si kuagiza", bullets: ["Mwombe AI ya simu akueleze ripoti ya udongo kwa urahisi", "Viwango vinatoka maabara au kwa afisa ugani"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Kazi ya mwisho: andika mpango wako wa udongo wa ukurasa mmoja kwa shamba moja. Weka kile ukaguzi wa shamba ulionyesha, mpango wako wa upimaji wa udongo au majibu yake, jinsi utakavyoongeza viumbe hai, mzunguko wako wa mazao au mchanganyiko, jinsi utakavyozuia mmomonyoko, na mstari wa mbolea kwa kila kirutubisho: aina, kiasi, wakati na mahali.",
          youCanNow: "kutumia mbolea kwa kanuni ya 4R na kuandaa mpango kamili wa udongo wa msimu mmoja kwa shamba lako.",
          quickCheck: [
            { objective: "O6", q: "\"Aina sahihi\" inamaanisha nini katika 4R?", options: ["Mfuko wa bei rahisi zaidi dukani", "Mfuko wenye lebo inayong'aa zaidi", "Bidhaa inayotoa kile ambacho upimaji wa udongo unasema kinakosekana", "Mbolea yoyote aliyotumia jirani"], answer: 2, why: "Aina sahihi inatoa virutubisho ambavyo upimaji wa udongo wako unasema vinakosekana." },
            { objective: "O6", q: "Muuzaji anakupa mbolea ya bei rahisi kutoka gunia lililo wazi lisilo na lebo. Unafanya nini?", options: ["Inunue kwa sababu ni rahisi", "Badala yake nunua mifuko iliyofungwa yenye lebo kutoka kwa muuzaji wa pembejeo aliyesajiliwa", "Ichanganye na mbolea yako", "Nunua kiasi mara mbili"], answer: 1, why: "Nunua mifuko iliyofungwa kutoka kwa wauzaji wa pembejeo waliosajiliwa na usome lebo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuweka udongo na afya msimu baada ya msimu",
        questions: [
          { objective: "O4", q: "Kwa nini mikunde kama maharagwe inasaidia zao linalofuata?", options: ["Inaua magugu yote", "Mizizi yake inafanya kazi na bakteria kuongeza naitrojeni", "Inaongeza asidi ya udongo", "Haihitaji mvua"], answer: 1, why: "Vinundu vya mizizi vinachukua naitrojeni kutoka hewani; sehemu yake inabaki udongoni kwa zao linalofuata." },
          { objective: "O4", q: "Mpango upi ni mzunguko mzuri wa mazao?", options: ["Mahindi, kisha maharagwe, kisha mtama", "Mahindi, kisha mahindi, kisha mahindi", "Nyanya baada ya nyanya kila msimu", "Acha shamba wazi kila msimu wa pili"], answer: 0, why: "Kubadilisha mazao na kuweka mkunde kunavunja mzunguko wa wadudu na kunalisha udongo." },
          { objective: "O5", q: "Kwenye shamba lenye mteremko, unapaswa kulima na kupanda vipi?", options: ["Moja kwa moja juu na chini ya mteremko", "Kwa duara", "Kukatiza mteremko, kufuata kontua", "Juu tu"], answer: 2, why: "Kufanya kazi kufuata kontua kunapunguza kasi ya maji na kunaweka udongo mahali pake." },
          { objective: "O6", q: "\"Wakati sahihi\" unamaanisha nini kwa mbolea ya kukuzia naitrojeni kwenye mahindi?", options: ["Wakati wowote ukiwa na pesa za ziada", "Kabla ya kununua mbegu", "Baada ya mavuno", "Zao linapohitaji, karibu urefu wa goti, udongo ukiwa na unyevu"], answer: 3, why: "Naitrojeni inatumika vizuri zaidi zao linalokua linapoihitaji na udongo una unyevu." },
          { objective: "O6", q: "Mahali sahihi pa mbolea ya kupandia ni wapi?", options: ["Juu ya mbegu", "Karibu na mizizi, isiguse mbegu, na imefunikwa", "Imetawanywa barabarani", "Kwenye rundo la mboji"], answer: 1, why: "Kuweka mbolea karibu na mizizi, imefunikwa na isiguse mbegu, kunaitumia vizuri zaidi na kunazuia kuunguza mbegu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Afya na Rutuba ya Udongo",
    questions: [
      { objective: "O1", q: "Ipi ni dalili ya udongo wenye afya?", options: ["Mweupe na mgumu wenye ganda", "Mweusi, unafarakana, una minyoo", "Umejaa maji kila wakati", "Mvua inatiririka moja kwa moja"], answer: 1, why: "Udongo mweusi unaofarakana wenye minyoo una afya." },
      { objective: "O1", q: "Udongo unaonata na unaoviringishwa kuwa utepe mrefu kwa kiasi kikubwa ni:", options: ["Mchanga", "Changarawe", "Mfinyanzi", "Majivu"], answer: 2, why: "Udongo unaonata na unaofanya utepe una mfinyanzi mwingi." },
      { objective: "O1", q: "Shamba lina kiduha (striga) kingi. Hii mara nyingi ni dalili ya:", options: ["Udongo uliochoka wenye rutuba kidogo", "Mboji nyingi mno", "Udongo kamili", "Kivuli kingi mno"], answer: 0, why: "Kiduha kinapatikana sana kwenye udongo duni uliochoka." },
      { objective: "O2", q: "Upimaji wa udongo wa maabara unakuambia nini ambacho macho yako hayawezi?", options: ["Rangi ya udongo", "Kuna minyoo wangapi", "Maji yanapita wapi", "pH na viwango vya virutubisho"], answer: 3, why: "Upimaji wa udongo unapima asidi na virutubisho." },
      { objective: "O2", q: "Nchini Kenya, taasisi ipi ya taifa ina maabara za kupima udongo?", options: ["KALRO", "Kenya Power", "Kenya Airways", "Kenya Wildlife Service"], answer: 0, why: "KALRO, Shirika la Utafiti wa Kilimo na Mifugo la Kenya, lina maabara za udongo kama ile ya Kabete." },
      { objective: "O2", q: "Unapochukua sampuli ya udongo, ni sehemu ipi unapaswa kuepuka?", options: ["Katikati ya shamba", "Kituo cha zigzag", "Ukingo wa mstari wa kupanda", "Rundo la zamani la samadi au majivu"], answer: 3, why: "Sehemu zisizo za kawaida zinatoa picha isiyo sahihi ya shamba." },
      { objective: "O2", q: "Uweke sampuli za udongo kwenye nini ili kuzichanganya?", options: ["Mfuko wa zamani wa mbolea", "Ndoo safi", "Chombo kilichotumika cha kemikali", "Mfukoni mwako"], answer: 1, why: "Ndoo safi inaweka sampuli bila mbolea au kemikali ambazo zingeharibu majibu." },
      { objective: "O3", q: "Kwa mujibu wa FAO, viumbe hai vya udongo ni muhimu kwa sababu:", options: ["Vinafanya udongo kuwa mgumu zaidi", "Vinaondoa virutubisho vyote", "Vinashika maji na virutubisho kama sponji", "Vinazuia mizizi kukua"], answer: 2, why: "Viumbe hai vinashika maji na virutubisho na vinalisha viumbe vya udongo." },
      { objective: "O3", q: "Rundo la mboji linapaswa kuwa na unyevu kiasi gani?", options: ["Kavu kabisa", "Limejaa maji", "Unyevu kama sponji iliyokamuliwa", "Haijalishi"], answer: 2, why: "Mboji inahitaji unyevu bila kulowa." },
      { objective: "O3", q: "Kwa nini uache samadi mbichi ioze kabla ya kuitumia karibu na miche?", options: ["Samadi mbichi yenye joto inaweza kuunguza miche", "Samadi iliyooza ni nzito zaidi", "Samadi mbichi haina virutubisho", "Ni sheria kila mahali"], answer: 0, why: "Samadi mbichi inaweza kuwa kali na yenye joto mno kwa mimea michanga." },
      { objective: "O3", q: "Ni mbinu ipi inayomaliza viumbe hai vya udongo?", options: ["Kuongeza mboji", "Kuchoma mabaki ya mazao", "Kupanda mikunde", "Kuweka matandazo"], answer: 1, why: "Kuchoma kunaharibu mabaki ambayo yangelisha udongo." },
      { objective: "O4", q: "Ipi ni mkunde?", options: ["Mahindi", "Mtama", "Mihogo", "Kunde"], answer: 3, why: "Kunde ni mkunde unaoweza kuongeza naitrojeni kwenye udongo." },
      { objective: "O4", q: "Kupanda mahindi na maharagwe pamoja kwenye shamba moja kunaitwa:", options: ["Kuchanganya mazao", "Kuweka chokaa", "Kujenga matuta ya ngazi", "Kuweka mbolea ya kukuzia"], answer: 0, why: "Kupanda mazao mawili pamoja ni kuchanganya mazao." },
      { objective: "O4", q: "Kwa nini kuzungusha mazao badala ya kupanda zao lilelile kila msimu?", options: ["Ili kutumia mbolea zaidi", "Ili kufanya palizi kuwa ngumu zaidi", "Ili kuvunja ongezeko la wadudu na magonjwa na kusawazisha virutubisho", "Kwa sababu sheria inataka hivyo"], answer: 2, why: "Mzunguko unavunja mzunguko wa wadudu na unazuia zao moja kumaliza virutubisho vilevile." },
      { objective: "O5", q: "Matandazo yanafanya nini?", options: ["Yanafanya udongo kuwa na joto na ukavu zaidi", "Yanaua minyoo", "Yanachukua nafasi ya mbolea yote", "Yanapunguza nguvu ya mvua, yanaweka udongo na unyevu na yanaulisha"], answer: 3, why: "Matandazo yanalinda na kulisha udongo." },
      { objective: "O5", q: "Njia ya bei nafuu ya kupunguza mmomonyoko kwenye mteremko mdogo, inayoweza pia kulisha mifugo, ni:", options: ["Vipande vya nyasi kufuata kontua", "Kulima juu na chini ya mteremko", "Kuchoma shamba", "Kuondoa mimea yote"], answer: 0, why: "FAO inaeleza vipande vya nyasi kama mbadala wa bei nafuu wa matuta ya ngazi." },
      { objective: "O5", q: "Kwa nini umwombe afisa ugani akusaidie kuweka alama za mistari ya kontua?", options: ["Haihitajiki kabisa", "Mistari ya kontua lazima ipakwe rangi", "Mistari iliyowekwa vibaya inaweza kuzidisha mmomonyoko", "Maafisa ugani wanamiliki ardhi"], answer: 2, why: "Mistari isiyo sawa kwa kimo inaweza kuelekeza maji pamoja na kuongeza mmomonyoko." },
      { objective: "O6", q: "Ipi SI mojawapo ya 4R za matumizi ya mbolea?", options: ["Aina sahihi", "Kiasi sahihi", "Mahali sahihi", "Rangi sahihi"], answer: 3, why: "4R ni aina, kiasi, wakati na mahali." },
      { objective: "O6", q: "Kiasi cha mbolea kwa zao lako kinapaswa kutoka wapi?", options: ["Kwa kubahatisha", "Upimaji wa udongo wako na pendekezo la eneo lako", "Chochote alichotumia jirani yako", "Mfuko mkubwa zaidi dukani"], answer: 1, why: "Viwango vinapaswa kulingana na udongo wako na pendekezo rasmi." },
      { objective: "O6", q: "Unamuuliza msaidizi wa AI kwenye simu kuhusu upimaji wa udongo wako. Njia sahihi ya kumtumia ni ipi?", options: ["Akueleze ripoti kwa maneno rahisi, kisha uthibitishe viwango na maabara au ugani", "Achague viwango vya mbolea badala ya maabara", "Umtumie maelezo ya akaunti yako ya benki", "Achukue nafasi ya upimaji wa udongo"], answer: 0, why: "AI inaweza kueleza, lakini viwango vinatoka maabara, kwa afisa ugani au kwenye pendekezo rasmi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      3,
      5,
      7,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      {
        name: "Ukaguzi wa shamba na upimaji wa udongo",
        objective: "O2",
        notYet: "Hakuna ukaguzi wa shamba, au hakuna mpango wa kupima udongo.",
        meets: "Majibu ya ukaguzi wa shamba yameandikwa, pamoja na lini na wapi udongo utapimwa, au upimaji ulisema nini.",
        exceeds: "Anatumia majibu ya upimaji wa udongo kuunda sehemu nyingine za mpango."
      },
      {
        name: "Viumbe hai",
        objective: "O3",
        notYet: "Hakuna viumbe hai vilivyoongezwa, au mabaki yamechomwa.",
        meets: "Mpango wa kuacha mabaki na kuongeza mboji au samadi iliyooza, pamoja na wakati.",
        exceeds: "Una rundo la mboji ambalo tayari limeanzishwa shambani."
      },
      {
        name: "Mzunguko na mikunde",
        objective: "O4",
        notYet: "Zao lilelile kila msimu, bila mkunde.",
        meets: "Mzunguko wa misimu mitatu au mchanganyiko na mkunde wenye nafasi inayofaa.",
        exceeds: "Mzunguko na mchanganyiko vyote viwili, na mabaki yanaachwa shambani."
      },
      {
        name: "Kufunika udongo na mmomonyoko",
        objective: "O5",
        notYet: "Udongo umeachwa wazi, au kazi inafanyika juu na chini ya mteremko.",
        meets: "Matandazo au kifuniko, na vizuizi vya mmomonyoko kufuata kontua pale shamba lina mteremko.",
        exceeds: "Anataja nani atasaidia kuweka alama ya kontua na jinsi vizuizi vitakavyotunzwa."
      },
      {
        name: "Mbolea kwa kanuni ya 4R",
        objective: "O6",
        notYet: "Mbolea imeorodheshwa bila chanzo cha kiasi, wakati au mahali.",
        meets: "Aina, kiasi, wakati na mahali vimeandikwa kwa kila bidhaa, na viwango kutoka upimaji wa udongo au pendekezo la eneo.",
        exceeds: "Anachanganya mbolea na viumbe hai na anaandika kiasi kilitoka wapi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya mpango wa udongo",
      "Wanafunzi wanaoripoti kupima udongo, kuanza mboji au kupanda mkunde ndani ya msimu mmoja (utafiti wa ufuatiliaji)",
      "Mabadiliko ya mavuno au matumizi ya pesa kwa mbolea yanayoripotiwa na wanafunzi au kikundi chao baada ya msimu mmoja",
      "Wanafunzi wanaoanza kozi nyingine ya kilimo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Jembe au sepetu, ndoo safi na daftari",
      "Shamba la kukagua, ikiwezekana la mwanafunzi mwenyewe",
      "Simu ya kawaida ya kupiga maabara ya udongo au ofisi ya ugani",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda shambani na wa kuandika mpango wa udongo"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au shule ya shambani: fanyeni jaribio la awali pamoja, kisha fanyeni ukaguzi wa shamba na jaribio la umbile kwenye shamba halisi.",
      "Fanyeni mazoezi ya kuchukua sampuli mchanganyiko ya udongo pamoja, na tafuteni maabara iliyo karibu na ada yake ya sasa kabla ya kipindi.",
      "Jengeni rundo dogo la mboji kama kikundi ili kuonyesha matabaka.",
      "Usitoe viwango vya mbolea mwenyewe; mwalike afisa ugani au tumia pendekezo la eneo lako.",
      "Pima mpango wa udongo kwa rubriki na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
