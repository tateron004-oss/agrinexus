"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-certifications.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-certifications-sw",
  lang: "sw",
  translationOf: "veterans-ai-certifications",
  category: "Veterans (military)",
  name: "Vyeti vya Kitaaluma kwa Wanajeshi Wastaafu kwa Msaada wa AI",
  skills: "Kugeuza kazi ya kijeshi kuwa vyeo vya kazi za kiraia, Kupata cheti ambacho waajiri wanakitaka, Kukagua kile GI Bill inacholipa, Kutengeneza mpango wa kusoma kwa AI, Kuonyesha cheti kwenye CV",
  outcome: "kuchagua kazi ya kiraia inayolingana na uzoefu wako wa kijeshi, kupata cheti ambacho waajiri wanakitaka, kukagua kama VA inaweza kulipa ada ya mtihani, na kutengeneza mpango wa kusoma wa wiki kwa wiki kwa msaidizi wa AI.",
  about: [
    "Tayari ulipata sifa ukiwa jeshini: shule, beji, leseni na mafunzo kazini. Waajiri wa kiraia mara nyingi wanataka kuona ujuzi huo huo kama cheti chenye jina. Kozi hii inakusaidia kuchagua cheti sahihi na kupanga jinsi ya kukipata.",
    "Utageuza kazi yako ya kijeshi kuwa vyeo vya kazi za kiraia, utasoma matangazo halisi ya kazi kuona yanataka cheti gani, utakagua kurasa rasmi za VA kuhusu kile GI Bill inachoweza kulipa, na utatumia msaidizi wa AI kutengeneza mpango wa kusoma na maswali ya mazoezi.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Jaribio fupi la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Sheria za mafao zinabadilika, kwa hiyo kila taarifa ya pesa inaelekeza kwenye ukurasa rasmi wa VA ili uikague."
  ],
  finalTask: "Tengeneza Mpango wa Cheti wa ukurasa mmoja: kazi yako ya kijeshi na vyeo viwili vya kazi za kiraia vinavyolingana nayo, cheti kimoja kinachoonekana zaidi katika matangazo halisi ya kazi, kama VA inaweza kulipa ada ya mtihani (pamoja na ukurasa rasmi uliokagua), mpango wa kusoma wa wiki kwa wiki uliotengenezwa kwa msaidizi wa AI, na mstari wa CV utakaouongeza utakapofaulu.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu (veterans) na wanajeshi wanaomaliza utumishi wanaotaka cheti cha kiraia cha kuonyesha ujuzi waliopata jeshini, mara nyingi katika TEHAMA (IT), usafirishaji na ugavi, matengenezo, afya au ulinzi.",
    startingPoint: "Wana shule za kijeshi, beji, leseni na mafunzo kazini, na wanaweza kutumia kompyuta au simu janja. Wengi bado hawajui waajiri wanataka cheti gani, kama VA inaweza kulipa ada ya mtihani, wala jinsi ya kupanga kusoma pamoja na kazi na familia.",
    gap: "Waajiri wa kiraia mara nyingi huchuja waombaji kwa vyeti vyenye majina, na kuchagua kibaya kunapoteza muda na mafao. Wanafunzi wanahitaji kuchagua cheti ambacho matangazo halisi ya kazi yanakitaka, kukagua sheria za malipo za VA kwenye kurasa rasmi, na kufuata mpango wa kusoma unaowezekana uliotengenezwa kwa AI, bila njia za mkato za udanganyifu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: kompyuta au simu janja yenye intaneti na msaidizi wa AI wa bure",
      "Kiasi cha mafao, fomu na sheria za mitihani hubadilika, kwa hiyo wanafunzi wanazikagua kwenye va.gov na tovuti ya shirika linalotoa cheti lenyewe",
      "OPSEC (usalama wa operesheni): hakuna taarifa za siri wala taarifa za kikosi katika prompt yoyote ya AI",
      "Muda: masomo ya kama dakika 5; mpango wa kusoma wenyewe unaendelea kwa wiki kadhaa baada ya kozi"
    ],
    prerequisites: "Hakuna. Kozi \"Introduction to AI and the Future Workforce\" (Utangulizi wa AI na Kazi za Baadaye) inawasaidia wanafunzi kueleza majukumu yao kwanza."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa namba ya kazi yako ya kijeshi", action: "kutambua vyeo viwili au vitatu vya kazi za kiraia vinavyolingana na kazi yako ya kijeshi", standard: "ukitumia My Next Move for Veterans na bila taarifa za siri katika prompt yoyote" },
    { id: "O2", condition: "Ukipewa angalau matangazo matano halisi ya kazi unayoilenga", action: "kutambua cheti ambacho waajiri wanakitaka zaidi na kuthibitisha sheria zake kwenye tovuti ya shirika linalotoa cheti", standard: "ukitumia hesabu ya matangazo" },
    { id: "O3", condition: "Kwa cheti unachokilenga", action: "kukagua kwenye va.gov kama VA inaweza kurudisha ada ya mtihani na jinsi ya kuiomba", standard: "ukiandika kikomo, mafao yanayokubalika na fomu kutoka kwenye ukurasa rasmi" },
    { id: "O4", condition: "Ukipewa muhtasari rasmi wa mtihani, wiki zako na saa zako", action: "kutengeneza mpango wa kusoma wa wiki kwa wiki kwa msaidizi wa AI", standard: "wenye lengo kila wiki, wiki ya kurudia na mtihani wa mazoezi" },
    { id: "O5", condition: "Unapojiandaa kwa mtihani", action: "kutumia AI kukuuliza maswali na kueleza makosa yako, ukiikagua dhidi ya nyaraka rasmi", standard: "bila kutumia brain dumps wala maswali ya mtihani yaliyovuja" },
    { id: "O6", condition: "Unapopata cheti au unapoendelea kukisomea", action: "kuandika mstari wa CV unaoonyesha cheti na utumishi wako pamoja", standard: "ukiwa na jina kamili, shirika linalotoa cheti na mwaka au tarehe ya mtihani" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua cheti sahihi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kugeuza kazi yako ya kijeshi kuwa vyeo vya kazi za kiraia",
          minutes: 5,
          goal: "Geuza namba ya kazi yako ya kijeshi kuwa vyeo viwili au vitatu vya kazi za kiraia.",
          text: [
            "Mameneja wa kuajiri wa kiraia mara chache wanajua maana ya MOS, rating au AFSC. Kazi yako ya kwanza ni kuigeuza kuwa vyeo vya kazi wanavyotumia, kama \"IT support specialist\" (mtaalamu wa msaada wa TEHAMA), \"logistics coordinator\" (mratibu wa usafirishaji na ugavi) au \"maintenance technician\" (fundi wa matengenezo).",
            "My Next Move for Veterans (mynextmove.org/vets), inayoendeshwa kwa ajili ya Wizara ya Kazi ya Marekani (U.S. Department of Labor), inakuruhusu kuandika tawi lako la jeshi na namba au cheo cha kazi yako ya kijeshi na kuona kazi za kiraia zenye kazi inayofanana.",
            "Msaidizi wa AI anaweza kusaidia pia. Muombe aeleze majukumu yako kwa maneno ya kiraia, kisha linganisha jibu lake na My Next Move. Usibandike taarifa za siri, majina ya vikosi wala chochote ulichoambiwa usishiriki."
          ],
          steps: ["Fungua mynextmove.org/vets.", "Katika sehemu ya kijeshi, chagua tawi lako la jeshi na uandike namba au cheo cha kazi yako.", "Andika kazi mbili au tatu za kiraia inazopendekeza.", "Muulize msaidizi wa AI: \"Nilikuwa Army 25B (mtaalamu wa TEHAMA). Eleza majukumu yangu kwa maneno ya kiraia kwa ajili ya tangazo la kazi.\"", "Baki na vyeo vya kazi vinavyoonekana sehemu zote mbili."],
          words: [["MOS / rating / AFSC", "namba ambazo matawi ya jeshi la Marekani hutumia kwa kazi za kijeshi (MOS kwa Army na Marine Corps, ratings kwa Navy na Coast Guard, AFSC kwa Air Force)."], ["Cheo cha kazi", "jina ambalo mwajiri analipa kazi katika tangazo la kazi."]],
          slides: [
            { title: "Waajiri hawazungumzi lugha ya MOS", bullets: ["Geuza namba ya kazi yako kuwa vyeo vya kazi za kiraia", "Tumia maneno ambayo tangazo la kazi lingetumia"] },
            { title: "My Next Move for Veterans", bullets: ["mynextmove.org/vets, kwa ajili ya Wizara ya Kazi ya Marekani", "Andika tawi lako la jeshi na namba ya kazi yako", "Ona kazi za kiraia zenye kazi inayofanana"] },
            { title: "Omba AI ikutafsirie", bullets: ["\"Eleza majukumu yangu ya 25B kwa maneno ya kiraia\"", "Linganisha na My Next Move", "Usibandike kamwe taarifa za siri au za kikosi"] }
          ],
          sources: [{ name: "My Next Move for Veterans (Wizara ya Kazi ya Marekani)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Tafuta kazi yako mwenyewe ya kijeshi kwenye mynextmove.org/vets na umuombe msaidizi wa AI aeleze majukumu yako kwa maneno ya kiraia. Andika vyeo viwili vya kazi za kiraia vinavyoonekana sehemu zote mbili.",
          youCanNow: "kugeuza namba ya kazi yako ya kijeshi kuwa vyeo vya kazi za kiraia ambavyo mwajiri atavitambua.",
          quickCheck: [
            { objective: "O1", q: "My Next Move for Veterans inafanya nini?", options: ["Inaonyesha kazi za kiraia zinazofanana na kazi yako ya kijeshi", "Inalipia cheti chako", "Inakuandikia CV yako", "Inakupangia mtihani wako"], answer: 0, why: "Unaandika kazi yako ya kijeshi nayo inaonyesha kazi za kiraia zinazofanana." },
            { objective: "O1", q: "Unaomba AI ieleze majukumu yako kwa maneno ya kiraia. Unaacha nini nje ya prompt?", options: ["Cheo cha kazi yako", "Idadi ya watu uliowasimamia", "Aina ya vifaa ulivyovitunza", "Taarifa za siri na taarifa za kikosi"], answer: 3, why: "Majukumu ya jumla ni sawa, lakini taarifa za siri na za kikosi haziingii kamwe katika AI ya umma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata cheti ambacho waajiri wanakitaka",
          minutes: 5,
          goal: "Pata cheti kimoja kinachoonekana zaidi katika matangazo halisi ya kazi unayoilenga.",
          text: [
            "Cheti ni uthibitisho kutoka kwa shirika la nje kwamba ulifaulu mtihani wa ujuzi fulani. Waajiri wanaorodhesha vyeti wanavyotaka katika matangazo yao ya kazi, kwa hiyo matangazo ya kazi ndiyo mwongozo bora.",
            "Tafuta kwenye tovuti ya kazi cheo cha kazi unayoilenga na eneo lako. Soma matangazo matano hadi kumi na uhesabu kila cheti kinachotajwa. Kile kinachoonekana zaidi kwa kawaida ndicho lengo lako la kwanza.",
            "Kila tawi la jeshi lina tovuti ya Credentialing Opportunities On-Line (COOL) inayounganisha kazi za kijeshi na vyeti vinavyohusiana. Uliza ofisi yako ya elimu au tafuta \"COOL\" pamoja na jina la tawi lako. Kila mara kagua tovuti ya shirika linalotoa cheti lenyewe kwa mtihani wa sasa, sheria na bei.",
            "AI inaweza kukusaidia kulinganisha vyeti viwili, lakini taarifa zake zinaweza kuwa zimepitwa na wakati. Itumie kueleza, si kuamua bei au sheria."
          ],
          steps: ["Tafuta kwenye tovuti ya kazi cheo cha kazi unayoilenga.", "Soma matangazo matano hadi kumi na uorodheshe kila cheti kinachotajwa.", "Hesabu; zungushia duara kile kinachotajwa zaidi.", "Kagua tovuti ya COOL ya tawi lako kuona jinsi kinavyohusiana na kazi yako ya kijeshi.", "Fungua tovuti ya shirika linalotoa cheti lenyewe kwa taarifa za sasa za mtihani."],
          words: [["Cheti", "uthibitisho kutoka kwa shirika la nje kwamba ulifaulu mtihani wa ujuzi fulani."], ["Shirika linalotoa cheti", "shirika linaloandika mtihani na kutoa cheti."], ["COOL", "Credentialing Opportunities On-Line, tovuti za matawi ya jeshi zinazounganisha kazi za kijeshi na vyeti vya kiraia."]],
          slides: [
            { title: "Acha matangazo ya kazi yaamue", bullets: ["Soma matangazo 5-10 ya kazi unayoilenga", "Hesabu kila cheti kinachotajwa", "Kinachotajwa zaidi ndicho lengo lako la kwanza"] },
            { title: "Tumia tovuti ya COOL ya tawi lako", bullets: ["Inaunganisha kazi yako ya kijeshi na vyeti vinavyohusiana", "Uliza ofisi yako ya elimu ikupe kiungo"] },
            { title: "Kagua chanzo", bullets: ["Tovuti ya shirika linalotoa cheti ina mtihani wa sasa", "AI inaweza kueleza, lakini inaweza kuwa imepitwa na wakati"] }
          ],
          tryIt: "Soma angalau matangazo matano halisi ya kazi kwa mojawapo ya vyeo vyako vya kazi za kiraia. Hesabu vyeti vinavyotajwa na uzungushie duara kile kinachotajwa zaidi.",
          youCanNow: "kutumia matangazo halisi ya kazi kuchagua cheti ambacho waajiri wanakitaka zaidi.",
          quickCheck: [
            { objective: "O2", q: "Cheti ni nini?", options: ["Shahada ya chuo", "Barua kutoka kwa rafiki", "Uthibitisho kutoka kwa shirika la nje kwamba ulifaulu mtihani wa ujuzi", "Cheo cha kazi"], answer: 2, why: "Cheti kinapatikana kwa kufaulu mtihani uliowekwa na shirika la nje linalotoa cheti." },
            { objective: "O2", q: "Matangazo matatu kati ya matano yanataja cheti kimoja. Unafanya nini?", options: ["Unachagua kingine kinachoonekana kigumu zaidi", "Unakizungushia duara kama lengo lako na kukagua sheria zake kwenye tovuti ya shirika linalotoa cheti", "Unapuuza matangazo na kuuliza AI", "Unatafuta kila cheti kwa wakati mmoja"], answer: 1, why: "Cheti kinachotajwa zaidi katika matangazo halisi ndicho waajiri wanachotaka; sheria zake za sasa zinatoka kwa shirika linalotoa cheti." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kukagua kile GI Bill inachoweza kulipa",
          minutes: 5,
          goal: "Kagua kwenye va.gov kama VA inaweza kurudisha ada ya mtihani wa cheti chako na jinsi ya kuiomba.",
          text: [
            "VA (Wizara ya Masuala ya Wanajeshi Wastaafu ya Marekani) inaweza kukurudishia ada za mitihani ya leseni na vyeti, pamoja na ada za usajili na za utawala. Tulipokagua va.gov mnamo Oktoba 2026, kikomo kilikuwa si zaidi ya $2,000 kwa kila mtihani, na VA inatoa kiasi inachorudisha kutoka kwenye haki yako ya GI Bill. Hailipii cheti chenyewe.",
            "Lazima tayari uwe na mojawapo ya mafao haya: Post-9/11 GI Bill, Montgomery GI Bill Active Duty au Selected Reserve, au Survivors' and Dependents' Educational Assistance. Ili kuomba pesa, tuma VA Form 22-0803 pamoja na risiti ya ada na matokeo ya mtihani wako au cheti.",
            "VA pia inaorodhesha njia nyingine za kutumia mafao, kama kozi za maandalizi, programu zisizo za shahada ya chuo na programu ya mafunzo ya teknolojia ya juu VET TEC 2.0, ambayo ina nafasi chache kila mwaka. Sheria na viwango hubadilika, kwa hiyo fungua ukurasa rasmi kabla ya kutumia pesa."
          ],
          steps: ["Fungua va.gov na utafute ukurasa wa ada za mitihani ya leseni na vyeti.", "Hakikisha una mojawapo ya mafao ya GI Bill yaliyoorodheshwa.", "Andika kikomo cha sasa na kwamba kinatumia sehemu ya haki yako.", "Weka risiti ya mtihani wako na matokeo yako.", "Tuma VA Form 22-0803 kama ukurasa unavyoeleza."],
          words: [["Haki (entitlement)", "kiasi cha mafao ya GI Bill ulichobakiza kutumia."], ["Kurudishiwa pesa (reimbursement)", "kulipwa tena pesa ambazo tayari ulizitumia."]],
          slides: [
            { title: "VA inaweza kurudisha ada za mitihani", bullets: ["Ada za mitihani ya leseni na vyeti", "Si zaidi ya $2,000 kwa kila mtihani (va.gov, Okt 2026)", "Inatoka kwenye haki yako ya GI Bill"] },
            { title: "Jinsi ya kuomba", bullets: ["Weka risiti ya ada na matokeo yako", "Tuma VA Form 22-0803", "Kagua va.gov kujua mahali pa kutuma"] },
            { title: "Njia nyingine", bullets: ["Kozi za maandalizi na programu zisizo za chuo", "VET TEC 2.0 kwa mafunzo ya teknolojia ya juu (nafasi chache)", "Kila mara kagua ukurasa rasmi kwanza"] }
          ],
          sources: [
            { name: "VA: Ada za mitihani ya leseni na vyeti", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: Jinsi ya kutumia mafao yako ya GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" }
          ],
          tryIt: "Fungua ukurasa wa ada za mitihani kwenye va.gov. Andika kikomo cha sasa, mafao yanayokubalika na namba ya fomu. Kisha kagua kama una mojawapo ya mafao hayo.",
          youCanNow: "kukagua kwenye va.gov kama VA inaweza kurudisha ada ya mtihani wa cheti na unachohitaji kutuma.",
          quickCheck: [
            { objective: "O3", q: "Nini kinatokea kwa GI Bill yako VA inaporudisha ada ya mtihani?", options: ["Hakuna kinachobadilika", "Unapata haki ya ziada", "GI Bill yako inafutwa", "Kiasi hicho kinatolewa kwenye haki yako"], answer: 3, why: "Kurudishiwa ada ya mtihani kunatumia sehemu ya haki yako ya GI Bill." },
            { objective: "O3", q: "Ujumbe kwenye jukwaa la mtandaoni unasema VA inalipa ada yoyote ya mtihani yote. Unafanya nini?", options: ["Unakagua sheria za sasa kwenye ukurasa rasmi wa ada za mitihani wa va.gov", "Unajisajili kwa mtihani wa bei ghali zaidi", "Unauamini kwa sababu watu wengi waliupenda", "Unaomba AI ithibitishe"], answer: 0, why: "Sheria na vikomo vya mafao hubadilika, kwa hiyo unavithibitisha kwenye ukurasa rasmi wa va.gov." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua cheti sahihi",
        questions: [
          { objective: "O1", q: "Meneja wa kuajiri hajui maana ya MOS yako. Ufanye nini?", options: ["Uandike namba kwa herufi kubwa zaidi", "Uiondoe kazi hiyo kwenye CV yako", "Uigeuze kuwa vyeo na majukumu ya kazi za kiraia", "Umwambie aitafute mwenyewe"], answer: 2, why: "Vyeo na majukumu ya kiraia ni maneno ambayo mwajiri tayari anayaelewa." },
          { objective: "O1", q: "Ni tovuti gani ya bure inayokuruhusu kuandika namba ya kazi ya kijeshi na kuona kazi za kiraia?", options: ["My Next Move for Veterans", "App ya mitandao ya kijamii", "Duka la michezo ya video", "Tovuti ya hali ya hewa"], answer: 0, why: "mynextmove.org/vets ni zana ya Wizara ya Kazi kwa kazi hii." },
          { objective: "O2", q: "Unapataje cheti ambacho waajiri wanakitaka zaidi?", options: ["Unachagua cha bei ghali zaidi", "Unauliza rafiki yeyote", "Unafanya kila mtihani kwa wakati mmoja", "Unahesabu vyeti vinavyotajwa katika matangazo halisi ya kazi"], answer: 3, why: "Matangazo ya kazi yanaonyesha kile waajiri wanachotaka." },
          { objective: "O2", q: "Unakagua wapi sheria za sasa za mtihani wa cheti na bei yake?", options: ["Kwenye mazungumzo ya AI tu", "Tovuti ya shirika linalotoa cheti lenyewe", "Ujumbe wa zamani wa jukwaa la mtandaoni", "Tangazo linalojitokeza ghafla (pop-up)"], answer: 1, why: "Shirika linalotoa mtihani lina taarifa za sasa." },
          { objective: "O3", q: "Kwa mujibu wa va.gov mnamo Oktoba 2026, nini ni kweli kuhusu VA kulipa ada za mitihani ya vyeti?", options: ["VA inalipia karatasi ya cheti", "VA inaweza kurudisha hadi $2,000 kwa kila mtihani na inatumia haki yako", "Hakuna kikomo", "Mtu yeyote anaweza kuidai bila mafao ya GI Bill"], answer: 1, why: "Ukurasa ulisema si zaidi ya $2,000 kwa kila mtihani, na inatolewa kwenye haki yako." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata cheti",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza mpango wa kusoma kwa AI",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kugeuza muhtasari rasmi wa mtihani kuwa mpango wa kusoma wa wiki kwa wiki.",
          text: [
            "Mashirika mengi yanayotoa vyeti yanachapisha muhtasari wa mtihani, wakati mwingine unaitwa malengo ya mtihani (exam objectives). Unaorodhesha kila mada ambayo mtihani unashughulikia. Huu ndio maelekezo yako ya misheni.",
            "Nakili mada kuu (si hati nzima ikiwa ni ndefu) kwenye msaidizi wa AI na umweleze hali yako: una wiki ngapi, saa ngapi kwa wiki, na unajua nini tayari kutoka jeshini.",
            "Omba mpango wenye lengo kwa kila wiki, wiki ya kurudia kabla ya mtihani, na tarehe ya mtihani wa mazoezi. Kisha weka vipindi kwenye kalenda yako kama saa za zamu."
          ],
          steps: ["Pakua muhtasari rasmi wa mtihani kutoka kwa shirika linalotoa cheti.", "Mwambie AI wiki zako, saa zako kwa wiki na unachojua tayari.", "Bandika mada kuu na uombe mpango wa wiki kwa wiki.", "Muombe aongeze wiki ya kurudia na mtihani wa mazoezi.", "Weka kila kipindi cha kusoma kwenye kalenda yako."],
          words: [["Muhtasari wa mtihani (objectives)", "orodha rasmi ya mada ambazo mtihani wa cheti unashughulikia."], ["Mpango wa kusoma", "ratiba inayosema utasoma nini na lini."]],
          slides: [
            { title: "Muhtasari wa mtihani ni maelekezo yako ya misheni", bullets: ["Unaorodhesha kila mada ambayo mtihani unashughulikia", "Upate kutoka kwa shirika linalotoa cheti"] },
            { title: "Mweleze AI hali yako", bullets: ["Wiki zilizobaki hadi mtihani", "Saa unazoweza kusoma kila wiki", "Unachojua tayari kutoka utumishi wako"] },
            { title: "Omba mpango halisi", bullets: ["Lengo kwa kila wiki", "Wiki ya kurudia na mtihani wa mazoezi", "Kisha uweke kwenye kalenda yako"] }
          ],
          tryIt: "Pata muhtasari wa mtihani wa cheti unachokilenga. Muulize msaidizi wa AI: \"Nina wiki 8 na saa 6 kwa wiki. Tayari ninajua [unachojua]. Tengeneza mpango wa kusoma wa wiki kwa wiki kwa mada hizi: [mada].\"",
          youCanNow: "kugeuza muhtasari rasmi wa mtihani kuwa mpango wa kusoma wa wiki kwa wiki kwa msaidizi wa AI.",
          quickCheck: [
            { objective: "O4", q: "Muhtasari wa mtihani ni nini?", options: ["Mtihani wa mazoezi kutoka tovuti fulani", "Orodha rasmi ya mada ambazo mtihani unashughulikia", "Ratiba ya kikundi cha kusoma", "Orodha ya majibu ya mitihani iliyopita"], answer: 1, why: "Muhtasari wa mtihani kutoka kwa shirika linalotoa cheti unaorodhesha hasa kile mtihani unashughulikia." },
            { objective: "O4", q: "Una wiki 10 na saa 5 kwa wiki. Unampa AI nini kwa ajili ya mpango wako wa kusoma?", options: ["\"Nisaidie nifaulu\" tu", "Taarifa zako za kuingia kwenye tovuti ya mtihani", "Mada za mtihani, wiki 10, saa 5 kwa wiki na unachojua tayari", "Mpango wa kusoma wa rafiki"], answer: 2, why: "Mada, muda na unachojua vinamwezesha AI kutengeneza mpango wa wiki kwa wiki unaowezekana." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufanya mazoezi kwa AI kwa njia sahihi",
          minutes: 5,
          goal: "Tumia AI kukuuliza maswali na kueleza makosa, huku ukiikagua dhidi ya nyaraka rasmi.",
          text: [
            "AI ni mwenzako mzuri wa kusoma. Inaweza kukuuliza maswali kuhusu mada moja, kueleza jibu lisilo sahihi kwa maneno rahisi zaidi, au kukupa mfano halisi kutoka kazi yako ya kijeshi.",
            "Pia inaweza kukosea au kuwa imepitwa na wakati. Jibu lake likipingana na mwongozo rasmi wa kusoma au muhtasari wa mtihani, amini nyaraka rasmi.",
            "Usitumie kamwe \"brain dumps\" (nakala za maswali halisi ya mtihani). Zinavunja sheria za shirika linalotoa cheti na zinaweza kukusababishia upoteze cheti. Fanya mazoezi ili kuelewa, si kukariri majibu."
          ],
          steps: ["Uliza: \"Niulize maswali 5 kuhusu [mada moja]. Subiri jibu langu kila mara.\"", "Unapokosea swali, muombe aeleze kwa maneno rahisi.", "Omba mfano kutoka kazi yako ya kijeshi.", "Kagua jibu lolote unalolitilia shaka katika mwongozo rasmi wa kusoma.", "Fuatilia mada ulizo dhaifu na uzisome tena."],
          words: [["Brain dump", "nakala ya maswali halisi ya mtihani inayoshirikiwa kinyume cha sheria; kuitumia kunaweza kukusababishia upoteze cheti."], ["Mtihani wa mazoezi", "mtihani uliotengenezwa kwa mazoezi unaofanana na ule halisi lakini haukunakiliwa kutoka kwake."]],
          slides: [
            { title: "AI kama mwenzako wa kusoma", bullets: ["Inakuuliza maswali kuhusu mada moja", "Inaeleza majibu yasiyo sahihi kwa urahisi", "Inatoa mifano kutoka kazi yako ya kijeshi"] },
            { title: "Kagua dhidi ya nyaraka rasmi", bullets: ["AI inaweza kukosea au kuwa imepitwa na wakati", "Mwongozo rasmi wa kusoma ndio unaoshinda"] },
            { title: "Hakuna brain dumps", bullets: ["Maswali ya mtihani yaliyonakiliwa yanavunja sheria", "Yanaweza kukusababishia upoteze cheti", "Fanya mazoezi ili kuelewa"] }
          ],
          tryIt: "Chagua mada ya kwanza katika mpango wako wa kusoma. Muombe msaidizi wa AI akuulize maswali matano, moja baada ya jingine. Kwa kila kosa, omba maelezo rahisi na uyakague katika nyaraka rasmi.",
          youCanNow: "kutumia AI kujiuliza maswali na kueleza makosa, huku ukiikagua dhidi ya nyaraka rasmi.",
          quickCheck: [
            { objective: "O5", q: "Brain dump ni nini?", options: ["Maswali halisi ya mtihani yaliyovuja yanayoshirikiwa kinyume cha sheria", "Mpango wa kusoma uliotengenezwa na AI", "Mtihani rasmi wa mazoezi wa bure", "Orodha ya mada za mtihani"], answer: 0, why: "Brain dumps zinashiriki maswali halisi ya mtihani, jambo linalovunja sheria na linaweza kukusababishia upoteze cheti." },
            { objective: "O5", q: "Umekosea swali la mazoezi kutoka kwa AI. Unafanya nini baadaye?", options: ["Unaruka mada hiyo", "Unakariri jibu la AI bila kulikagua", "Unatafuta brain dump", "Unaomba AI ilieleze kwa urahisi na kulikagua katika mwongozo rasmi"], answer: 3, why: "Maelezo ya AI yanasaidia, lakini mwongozo rasmi ndio neno la mwisho." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwaonyesha waajiri cheti chako",
          minutes: 4,
          goal: "Andika mstari wa CV na hadithi fupi vinavyoonyesha cheti chako na utumishi wako pamoja.",
          text: [
            "Ukishafaulu, weka cheti mahali ambapo waajiri wanaangalia: sehemu ya \"Vyeti\" kwenye CV yako yenye jina kamili, shirika linalotoa cheti na mwaka, pamoja na wasifu wako wa mtandaoni.",
            "Kiunganishe na utumishi wako. Kwa mfano: \"Nilisimamia ufikiaji wa mtandao kwa watumiaji 300 kama mtaalamu wa TEHAMA wa Army; nilipata [jina la cheti] mwaka 2026.\" Cheti kinathibitisha ujuzi; utumishi wako unathibitisha kwamba uliutumia chini ya shinikizo.",
            "Bado unasoma? Unaweza kuandika \"[jina la cheti], kinaendelea, tarehe ya mtihani [mwezi mwaka]\". Muombe msaidizi wa AI akusaidie na maneno, kisha hakikisha kila neno ni la kweli."
          ],
          steps: ["Ongeza sehemu ya Vyeti kwenye CV yako.", "Andika jina kamili la cheti, shirika linalokitoa na mwaka.", "Ongeza mstari mmoja wa CV unaokiunganisha na kitu ulichofanya katika utumishi.", "Kama bado unasoma, andika \"kinaendelea\" pamoja na mwezi wa mtihani wako.", "Isome kwa sauti na uhakikishe kila neno ni la kweli."],
          words: [["CV (résumé)", "muhtasari wa ukurasa mmoja au miwili wa kazi yako, mafunzo yako na ujuzi wako kwa ajili ya waajiri."]],
          slides: [
            { title: "Kiweke mahali ambapo waajiri wanaangalia", bullets: ["Sehemu ya Vyeti kwenye CV yako", "Jina kamili, shirika linalotoa cheti, mwaka"] },
            { title: "Kiunganishe na utumishi wako", bullets: ["Cheti kinathibitisha ujuzi", "Utumishi unaonyesha uliutumia chini ya shinikizo"] },
            { title: "Bado unasoma?", bullets: ["\"[Jina], kinaendelea, tarehe ya mtihani [mwezi mwaka]\"", "Kila neno lazima liwe la kweli"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza Mpango wako wa Cheti wa ukurasa mmoja wenye vyeo vyako vya kazi, cheti unachokilenga, ukurasa wa VA uliokagua, mpango wako wa kusoma wa AI, na mstari wa CV utakaouongeza utakapofaulu.",
          youCanNow: "kupanga, kugharamia, kusomea na kuonyesha cheti kinacholingana na uzoefu wako wa kijeshi.",
          quickCheck: [
            { objective: "O6", q: "Nini kinaingia katika sehemu ya Vyeti ya CV yako?", options: ["Kifupisho tu", "Alama zako za mtihani", "Jina kamili, shirika linalotoa cheti na mwaka", "Bei uliyolipa"], answer: 2, why: "Waajiri wanahitaji jina kamili, aliyekitoa na lini." },
            { objective: "O6", q: "Mtihani wako ni mwezi Machi na bado hujafaulu. Unakiorodheshaje?", options: ["Unakiorodhesha kama umefaulu", "\"[Jina], kinaendelea, tarehe ya mtihani Machi 2027\"", "Unaacha kutaja kwamba unasoma", "Unaandika \"karibu nimepata cheti\""], answer: 1, why: "Kukiorodhesha kama kinaendelea pamoja na tarehe ya mtihani ni kweli na kunaonyesha mpango wako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata cheti",
        questions: [
          { objective: "O4", q: "Umpe msaidizi wa AI nini ili atengeneze mpango mzuri wa kusoma?", options: ["Namba yako ya Social Security", "Taarifa zako za benki", "Jina la cheti tu", "Mada za mtihani, wiki zako na saa zako kwa wiki"], answer: 3, why: "Mada pamoja na muda wako vinampa AI anachohitaji kupanga." },
          { objective: "O4", q: "Muhtasari wa mtihani ni nini?", options: ["Orodha rasmi ya mada ambazo mtihani unashughulikia", "Orodha ya majibu", "Mtihani wa mazoezi", "Tangazo la kazi"], answer: 0, why: "Shirika linalotoa cheti linauchapisha ili ujue cha kusoma." },
          { objective: "O5", q: "Maelezo ya AI yanapingana na mwongozo rasmi wa kusoma. Unafanya nini?", options: ["Unaamini AI", "Unaruka mada hiyo", "Unaamini mwongozo rasmi wa kusoma", "Unaomba AI ibishane"], answer: 2, why: "Nyaraka rasmi ndizo kiwango ambacho mtihani unatumia." },
          { objective: "O5", q: "Mtu anakupa \"brain dump\" ya maswali halisi ya mtihani. Ufanye nini?", options: ["Uitumie usiku kabla ya mtihani", "Uwashirikishe marafiki", "Ulipe zaidi kwa mpya zaidi", "Uikatae: inavunja sheria na inaweza kukusababishia upoteze cheti"], answer: 3, why: "Brain dumps zinavunja sheria za vyeti." },
          { objective: "O6", q: "Ni mstari upi wa CV unaounganisha cheti na utumishi wako vizuri zaidi?", options: ["\"Nina cheti.\"", "\"Mzuri na kompyuta.\"", "\"Nilisimamia ufikiaji wa mtandao kwa watumiaji 300 kama mtaalamu wa TEHAMA wa Army; nilipata [cheti] mwaka 2026.\"", "\"Tazama kiambatisho.\""], answer: 2, why: "Unaonyesha ujuzi ukitumika pamoja na uthibitisho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Vyeti vya Kitaaluma kwa Wanajeshi Wastaafu kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Kwa nini ugeuze kazi yako ya kijeshi kuwa vyeo vya kazi za kiraia?", options: ["Kuficha utumishi wako", "Ili waajiri waelewe ujuzi wako", "Kwa sababu namba ni siri", "Kufanya CV yako iwe ndefu zaidi"], answer: 1, why: "Vyeo vya kiraia vinatumia maneno ambayo waajiri wanayajua." },
      { objective: "O1", q: "Kwenye My Next Move for Veterans unaweza:", options: ["Kuandika kazi yako ya kijeshi na kuona kazi za kiraia zinazofanana", "Kuomba mafao ya ulemavu ya VA", "Kununua vocha za mtihani", "Kupakua DD-214 yako"], answer: 0, why: "Inalinganisha kazi za kijeshi na kazi za kiraia." },
      { objective: "O1", q: "Ni nini HUPASWI kubandika kwenye msaidizi wa AI unapoeleza majukumu yako?", options: ["Cheo cha kazi yako", "Majukumu ya jumla", "Taarifa za siri au taarifa za kikosi", "Neno \"uongozi\""], answer: 2, why: "Taarifa za siri na za kikosi lazima zibaki faragha." },
      { objective: "O2", q: "Cheti ni:", options: ["Uthibitisho kutoka kwa shirika la nje kwamba ulifaulu mtihani wa ujuzi", "Shahada ya chuo", "Cheo cha kijeshi", "Ofa ya kazi"], answer: 0, why: "Kinathibitisha kwamba ulifaulu mtihani wa ujuzi." },
      { objective: "O2", q: "Mwongozo bora wa kwanza wa cheti cha kupata ni:", options: ["Mtihani mrefu zaidi", "Mtihani wa bei nafuu zaidi", "Video yoyote", "Matangazo halisi ya kazi unayoilenga"], answer: 3, why: "Waajiri wanataja wanachotaka katika matangazo ya kazi." },
      { objective: "O2", q: "COOL ni kifupi cha nini?", options: ["Civilian Office of Online Learning", "Credentialing Opportunities On-Line", "Certified Officer Operations List", "Career Options Over Lunch"], answer: 1, why: "COOL inaunganisha kazi za kijeshi na vyeti vya kiraia." },
      { objective: "O2", q: "Uthibitishe wapi bei na sheria za sasa za mtihani?", options: ["Kwenye mazungumzo ya AI", "Tovuti ya shirika linalotoa cheti", "Kumbukumbu ya rafiki", "Maoni kwenye mitandao ya kijamii"], answer: 1, why: "Shirika linalotoa cheti lina taarifa za sasa." },
      { objective: "O3", q: "Kwa mujibu wa va.gov mnamo Oktoba 2026, kurudishiwa ada ya mtihani na VA kuna kikomo cha:", options: ["$200 kwa kila mtihani", "$20,000 kwa mwaka", "Hakuna kikomo", "$2,000 kwa kila mtihani"], answer: 3, why: "Ukurasa ulisema si zaidi ya $2,000 kwa kila mtihani." },
      { objective: "O3", q: "VA inaporudisha ada ya mtihani, nini kinatokea kwa GI Bill yako?", options: ["Kiasi hicho kinatolewa kwenye haki yako", "Hakuna kitu", "Inaongezeka mara mbili", "Inakwisha"], answer: 0, why: "VA inaondoa kiasi kilichorudishwa kwenye haki yako." },
      { objective: "O3", q: "Unatuma fomu gani kuomba VA ikurudishie ada ya mtihani?", options: ["W-2", "DD-214", "VA Form 22-0803", "SF-86"], answer: 2, why: "va.gov inataja VA Form 22-0803 kwa kurudishiwa ada ya mtihani." },
      { objective: "O3", q: "Kurudishiwa ada ya mtihani na VA kunashughulikia:", options: ["Ada ya karatasi ya cheti", "Vitafunio vyako vya wakati wa kusoma", "Safari yako kwenda kwenye mtihani", "Ada za mtihani, pamoja na ada za usajili na za utawala"], answer: 3, why: "Kunashughulikia ada za mtihani, si cheti chenyewe." },
      { objective: "O3", q: "VET TEC 2.0 inaelezwa vizuri zaidi kama:", options: ["Dai la ulemavu", "Mkopo wa nyumba", "Programu ya VA ya mafunzo ya teknolojia ya juu yenye nafasi chache", "Cheo cha kijeshi"], answer: 2, why: "Inagharamia mafunzo ya teknolojia ya juu yasiyo ya chuo, yenye kikomo kila mwaka." },
      { objective: "O3", q: "Viwango vya mafao vinaweza kubadilika. Kabla ya kutumia pesa unapaswa:", options: ["Kuamini blogu ya zamani", "Kukagua ukurasa rasmi wa va.gov", "Kuuliza AI tu", "Kubahatisha"], answer: 1, why: "Ukurasa rasmi una sheria za sasa." },
      { objective: "O4", q: "Kitu cha kwanza cha kukusanya kwa mpango wa kusoma wa AI ni:", options: ["Muhtasari rasmi wa mtihani", "Brain dump", "Nywila yako", "Maelezo ya mtu mwingine"], answer: 0, why: "Muhtasari unaorodhesha kile mtihani unashughulikia." },
      { objective: "O4", q: "Mpango mzuri wa kusoma una:", options: ["Tarehe ya mtihani tu", "Kusoma kila kitu usiku kabla ya mtihani", "Lengo kila wiki, wiki ya kurudia na mtihani wa mazoezi", "Hakuna kalenda"], answer: 2, why: "Malengo ya kila wiki na kurudia vinakuandaa." },
      { objective: "O5", q: "Ni prompt ipi bora kwa mazoezi?", options: ["\"Niulize maswali 5 kuhusu mada hii, moja baada ya jingine.\"", "\"Nipe majibu halisi ya mtihani.\"", "\"Nifanyie mtihani unifaulishe.\"", "\"Niambie utani.\""], answer: 0, why: "Inakufanya ufanye mazoezi na isubiri jibu lako." },
      { objective: "O5", q: "Kwa nini uepuke brain dumps?", options: ["Ni ndefu sana", "Zinachosha", "Ni za bure", "Zinavunja sheria na zinaweza kukusababishia upoteze cheti"], answer: 3, why: "Mashirika yanayotoa vyeti yanazipiga marufuku." },
      { objective: "O5", q: "Umekosea swali la mazoezi. Hatua nzuri inayofuata ni:", options: ["Kuacha kusoma", "Kuomba AI ilieleze kwa urahisi na kukagua mwongozo rasmi", "Kuruka mada nzima", "Kubadilisha tarehe ya mtihani wako iwe kesho"], answer: 1, why: "Kuelewa kosa kunarekebisha sehemu dhaifu." },
      { objective: "O6", q: "Sehemu ya Vyeti ya CV yako inapaswa kuonyesha:", options: ["Nembo tu", "Jina kamili, shirika linalotoa cheti na mwaka", "Karatasi ya alama zako za mtihani", "Saa zako za kusoma"], answer: 1, why: "Jina kamili, shirika na mwaka ndivyo waajiri wanavyokagua." },
      { objective: "O6", q: "Bado hujafaulu. Unawezaje kuorodhesha cheti?", options: ["Kusema umefaulu", "Kuorodhesha kingine", "Kuacha mstari mtupu", "\"[Jina], kinaendelea, tarehe ya mtihani [mwezi mwaka]\""], answer: 3, why: "\"Kinaendelea\" pamoja na tarehe ni kweli na kina manufaa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 8, 12, 13, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Vyeo vya kazi za kiraia", objective: "O1", notYet: "Hakuna vyeo vya kiraia, au vyeo visivyolingana na kazi ya kijeshi.", meets: "Kazi ya kijeshi na vyeo viwili vya kazi za kiraia vinavyolingana nayo.", exceeds: "Vyeo vinaonekana kwenye My Next Move for Veterans na pia katika maelezo ya AI." },
      { name: "Cheti kinacholengwa", objective: "O2", notYet: "Cheti kilibahatishwa au kilichaguliwa kutoka kwa tangazo la biashara.", meets: "Cheti kinachoonekana zaidi katika angalau matangazo matano halisi ya kazi.", exceeds: "Kinaonyesha hesabu na ukurasa wa shirika linalotoa cheti uliokaguliwa kwa sheria za sasa." },
      { name: "Malipo ya VA yamekaguliwa", objective: "O3", notYet: "Hakuna ukaguzi wa VA, au taarifa kutoka jukwaa la mtandaoni au AI tu.", meets: "Kama VA inaweza kulipa ada ya mtihani, pamoja na ukurasa rasmi wa va.gov uliotajwa.", exceeds: "Pia inataja fomu na kwamba kurudishiwa pesa kunatumia haki ya GI Bill." },
      { name: "Mpango wa kusoma", objective: "O4", notYet: "Hakuna mpango, au mpango usio na wiki wala mada.", meets: "Mpango wa wiki kwa wiki kutoka kwa muhtasari rasmi wa mtihani wenye wiki ya kurudia na mtihani wa mazoezi.", exceeds: "Mpango unalingana na saa halisi za mwanafunzi na una tarehe ya mtihani iliyopangwa." },
      { name: "Mstari wa CV", objective: "O6", notYet: "Hakuna mstari wa CV, au mstari unaodai cheti ambacho bado hakijapatikana.", meets: "Mstari wa kweli wa CV wenye jina kamili, shirika na mwaka au tarehe ya mtihani, unaounganishwa na utumishi.", exceeds: "Una hadithi fupi ya matokeo kutoka utumishi ambayo cheti kinayaunga mkono." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojisajili kwa mtihani wao wa cheti ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaofaulu cheti chao ndani ya miezi 6",
      "Wanafunzi wanaoomba kazi inayotaka cheti hicho ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tovuti za bure za My Next Move for Veterans, va.gov na mashirika yanayotoa vyeti, na matangazo matano halisi ya kazi",
      "Karatasi au hati kwa ajili ya Mpango wa Cheti wa ukurasa mmoja",
      "Kama dakika 60 kwa jumla kwa kozi; mpango wa kusoma unaendelea baadaye"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi katika vikundi kwa fani wanazozilenga (TEHAMA, usafirishaji na ugavi, matengenezo, afya) ili washirikiane matangazo ya kazi na muhtasari wa mitihani.",
      "Waambie wanafunzi wathibitishe kila kiasi na fomu kwenye va.gov wakati wa kipindi badala ya kuamini maelezo au AI.",
      "Onya waziwazi dhidi ya brain dumps; zinaweza kuwasababishia wanafunzi kupoteza cheti.",
      "Pima Mpango wa Cheti kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja.",
      "Panga mkutano wa kufuatilia baada ya siku 30 ili wanafunzi waripoti maendeleo yao ya kusoma na tarehe ya mtihani."
    ]
  }
};
