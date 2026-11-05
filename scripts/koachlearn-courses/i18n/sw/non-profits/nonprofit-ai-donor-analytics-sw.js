"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-donor-analytics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-donor-analytics-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "Uchambuzi wa Wafadhili kwa AI",
  skills: "Kuandaa jedwali salama la wafadhili, Kupima kiwango cha kubaki na wastani wa mchango, Kupanga wafadhili katika makundi, Kutumia AI kueleza namba, Kugeuza matokeo kuwa mpango wa kuchangisha fedha",
  outcome: "kuchukua jedwali la wafadhili lisilo na majina, kukokotoa kiwango cha wafadhili wanaobaki, wastani wa mchango na makundi ya wafadhili, kutumia msaidizi wa AI kueleza maana ya namba hizo, na kuandika mpango wa ukurasa mmoja kwa ombi lako lijalo la michango.",
  about: [
    "Kozi hii ni kwa wafanyakazi wa mashirika yasiyo ya kiserikali na ya kidini, maafisa wa uchangishaji fedha, wajumbe wa bodi na wanaojitolea ambao wanatunza orodha ya wafadhili na wanataka kuchangisha zaidi kwa kuielewa.",
    "Utajifunza namba chache rahisi za wafadhili, jinsi ya kuzikokotoa katika jedwali kama Google Sheets au Microsoft Excel, jinsi ya kutumia AI kuzieleza na kuchora chati bila kutoa taarifa binafsi za mtu yeyote, na jinsi ya kugeuza unachogundua kuwa vitendo.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza nakala salama ya orodha yako ya wafadhili (au orodha ya mazoezi kutoka Somo la 1) ambapo majina na mawasiliano yamebadilishwa kuwa namba za utambulisho (ID) za wafadhili. Kokotoa kiwango cha kubaki na wastani wa mchango, panga wafadhili katika angalau makundi matatu, muombe msaidizi wa AI aeleze matokeo na apendekeze kitendo kimoja kwa kila kundi, na uandike mpango wa ukurasa mmoja wa ombi la michango ambao unaukagua mwenyewe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi wa mashirika yasiyo ya kiserikali na ya kidini, maafisa wa uchangishaji fedha, wajumbe wa bodi na wanaojitolea ambao wanatunza orodha ya wafadhili na wanataka kuchangisha zaidi kwa kuielewa.",
    startingPoint: "Wanatunza kumbukumbu za wafadhili katika jedwali au mfumo wa wafadhili na wanatuma maombi ya michango. Wengi hawajawahi kukokotoa kiwango cha kubaki, kupanga wafadhili katika makundi, au kutumia AI kueleza namba zao.",
    gap: "Bila kujua nani anarudi na nani anapotea, mashirika yanatuma ombi lile lile kwa kila mtu na yanapoteza wafadhili ambao yangeweza kuwabakiza. Wanafunzi wanahitaji kugeuza kumbukumbu zao wenyewe kuwa namba chache muhimu na mpango, wakitumia AI kwa usalama bila kufichua taarifa za wafadhili.",
    constraints: [
      "Faragha: majina, mawasiliano na maelezo yanaondolewa kabla ya uchambuzi wowote; namba za muhtasari tu ndizo zinaingia kwenye AI",
      "Ujuzi wa msingi wa jedwali: SUM, AVERAGE, kupanga (sort), kuchuja (filter) na chati rahisi",
      "AI inaweza kukosea hesabu na kubuni namba za kulinganisha (benchmark), kwa hiyo kila namba inakaguliwa tena",
      "Sheria za kuwasiliana na wafadhili na za kujiondoa (opt-out), pamoja na sera ya faragha ya shirika, zinafuatwa",
      "Muda: kama dakika 60 kwa jumla, katika masomo ya dakika 5"
    ],
    prerequisites: "Matumizi ya msingi ya jedwali. Kozi \"Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali\" inasaidia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya wafadhili", action: "kutengeneza nakala ya kazi isiyo na majina, ambapo majina yamebadilishwa kuwa ID na mawasiliano yamefutwa", standard: "ukibakiza ID, tarehe ya mchango, kiasi na kampeni tu" },
    { id: "O2", condition: "Ukipewa jedwali la wafadhili lisilo na majina", action: "kukokotoa jumla iliyochangishwa, wastani wa mchango na kiwango cha wafadhili wanaobaki", standard: "ukipata kila namba sahihi" },
    { id: "O3", condition: "Ukipewa ID za wafadhili wako na historia ya michango yao", action: "kupanga wafadhili katika makundi ya Wapya, Wanaorudia, Waliopotea na Wakubwa na kuhesabu kila kundi", standard: "kila ID ya mfadhili ikiwa katika kundi" },
    { id: "O4", condition: "Ukipewa namba zako za muhtasari", action: "kumwomba msaidizi wa AI azieleze kwa maneno rahisi na kukagua tena hesabu au namba ya kulinganisha anayotoa", standard: "ukibandika namba za muhtasari tu, kamwe si orodha ya wafadhili" },
    { id: "O5", condition: "Ukipewa idadi ya kila kundi", action: "kutengeneza chati ya mihimili yenye kichwa kilicho wazi katika Google Sheets au Excel", standard: "inayoonyesha ujumbe mmoja" },
    { id: "O6", condition: "Ukipewa matokeo yako", action: "kuandika mpango wa ukurasa mmoja wa ombi la michango wenye kitendo kimoja, mhusika na tarehe kwa kila kundi", standard: "ukitumia vishika-nafasi badala ya majina ya wafadhili na ukiukagua pamoja na mkurugenzi wako" }
  ],
  chapters: [
    {
      name: "Sura 1: Zijue namba za wafadhili wako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandaa data ya wafadhili kwa usalama",
          minutes: 5,
          goal: "Tengeneza nakala safi isiyo na majina ya orodha ya wafadhili, iliyo salama kuchambua.",
          text: [
            "Uchambuzi wa wafadhili maana yake ni kuangalia kumbukumbu za michango ili ujue nani anachangia, kiasi gani, mara ngapi na kama wanarudi. Unahitaji jedwali tu.",
            "Majina ya wafadhili, anwani, barua pepe na kiasi cha michango ni siri na lazima vilindwe. Kabla ya kuchambua chochote kwa AI, tengeneza nakala na ubadilishe kila jina kuwa ID kama D001. Futa anwani, namba za simu, barua pepe na maelezo. Bakiza ID, tarehe ya mchango, kiasi cha mchango tu, na kampeni au mfuko kama unao.",
            "Tunza orodha halisi katika mfumo wako wa wafadhili au faili lililolindwa. Nakala isiyo na majina ndiyo unayofanyia kazi. Fuata sera ya faragha ya shirika lako na ahadi zozote ulizowapa wafadhili."
          ],
          steps: ["Toa (export) au nakili orodha yako ya wafadhili kwenye jedwali.", "Hifadhi nakala tofauti yenye jina \"donors-anonymous\".", "Badilisha kila jina kuwa ID kama D001, D002.", "Futa anwani, namba za simu, barua pepe na maelezo.", "Bakiza ID, tarehe ya mchango, kiasi na kampeni tu."],
          words: [["Uchambuzi wa wafadhili", "kusoma kumbukumbu za michango ili kujua nani anachangia, kiasi gani, mara ngapi na kama wanarudi."], ["Bila majina (anonymous)", "majina na mawasiliano yameondolewa ili mtu asiweze kujua nani ni nani."], ["Jedwali (spreadsheet)", "jedwali la safu na nguzo, kama Google Sheets au Microsoft Excel."]],
          slides: [
            { title: "Uchambuzi wa wafadhili ni nini", bullets: ["Nani anachangia, kiasi gani, mara ngapi", "Kama wafadhili wanarudi", "Unachohitaji ni jedwali tu"] },
            { title: "Linda wafadhili kwanza", bullets: ["Tengeneza nakala tofauti", "Badilisha majina kuwa ID kama D001", "Futa anwani, simu, barua pepe, maelezo"] },
            { title: "Bakiza tu", bullets: ["ID ya mfadhili", "Tarehe na kiasi cha mchango", "Kampeni au mfuko"] }
          ],
          tryIt: "Tengeneza orodha ya mazoezi katika jedwali yenye safu 12: ID (D001 hadi D010, baadhi zikirudiwa), tarehe ya mchango (mwaka jana na mwaka huu) na kiasi. Au tengeneza nakala isiyo na majina ya orodha yako halisi kwa kufuata hatua hizi.",
          youCanNow: "kuandaa orodha ya wafadhili iliyo salama kuchambua, majina na mawasiliano yakiwa yameondolewa.",
          quickCheck: [
            { objective: "O1", q: "Unafuta nini kwenye nakala isiyo na majina?", options: ["Anwani, namba za simu, barua pepe na maelezo", "Kiasi cha michango", "Tarehe za michango", "ID za wafadhili"], answer: 0, why: "Futa mawasiliano na maelezo; bakiza ID, tarehe, kiasi na kampeni." },
            { objective: "O1", q: "Mjitolea anataka kuchambua orodha halisi ya wafadhili kwenye kompyuta yake binafsi. Unafanya nini?", options: ["Unamtumia orodha halisi kwa barua pepe", "Unampa nakala isiyo na majina na kuacha orodha halisi katika faili lililolindwa", "Unamchapishia orodha halisi", "Unambandikia orodha halisi kwenye AI"], answer: 1, why: "Orodha halisi ibaki imelindwa; fanya kazi na nakala isiyo na majina." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Namba tatu ambazo kila shirika linapaswa kujua",
          minutes: 6,
          goal: "Kokotoa jumla iliyochangishwa, wastani wa mchango na kiwango cha wafadhili wanaobaki.",
          text: [
            "Jumla iliyochangishwa ni michango yote ikijumlishwa. Wastani wa mchango ni jumla iliyochangishwa ikigawanywa kwa idadi ya michango. Katika jedwali, =SUM() inajumlisha nguzo na =AVERAGE() inatoa wastani.",
            "Kiwango cha kubaki kinakuambia ni wafadhili wangapi wa mwaka jana walichangia tena mwaka huu. Hesabu wafadhili waliochangia mwaka jana. Hesabu ni wangapi kati yao walichangia pia mwaka huu. Gawanya namba ya pili kwa ya kwanza na uzidishe kwa 100. Kama wafadhili 40 walichangia mwaka jana na 18 kati yao walichangia tena, kiwango cha kubaki ni 18 / 40 = asilimia 45.",
            "Kiwango cha kubaki ni muhimu kwa sababu kumbakiza mfadhili kwa kawaida kunagharimu kidogo kuliko kumpata mpya. Kiwango kidogo ni ishara kwamba unahitaji kuwashukuru na kuwapa habari wafadhili vizuri zaidi."
          ],
          steps: ["Jumla iliyochangishwa: =SUM() ya nguzo ya kiasi.", "Wastani wa mchango: =AVERAGE() ya nguzo ya kiasi.", "Hesabu wafadhili tofauti waliochangia mwaka jana.", "Hesabu ni wangapi kati yao walichangia pia mwaka huu.", "Kiwango cha kubaki = waliorudia mwaka huu / wafadhili wa mwaka jana x 100."],
          words: [["Wastani wa mchango", "jumla iliyochangishwa ikigawanywa kwa idadi ya michango."], ["Kiwango cha kubaki (retention rate)", "asilimia ya wafadhili wa mwaka jana waliochangia tena mwaka huu."], ["Fomula", "hesabu inayoandikwa kwenye kisanduku cha jedwali, ikianza na =."]],
          slides: [
            { title: "Jumla na wastani", bullets: ["Jumla iliyochangishwa: =SUM(amounts)", "Wastani wa mchango: =AVERAGE(amounts)"] },
            { title: "Kiwango cha kubaki", bullets: ["Wafadhili wa mwaka jana waliochangia tena", "Gawanya kwa wafadhili wote wa mwaka jana", "Zidisha kwa 100 = asilimia"] },
            { title: "Mfano", bullets: ["Wafadhili 40 mwaka jana", "18 kati yao walichangia tena", "18 / 40 = asilimia 45 ya kubaki"] },
            { title: "Kwa nini ni muhimu", bullets: ["Kubakiza wafadhili kunagharimu kidogo kuliko kupata wapya", "Kiwango kidogo = shukuru na toa habari vizuri zaidi"] }
          ],
          tryIt: "Ukitumia orodha yako ya mazoezi au isiyo na majina, kokotoa jumla iliyochangishwa, wastani wa mchango na kiwango cha kubaki. Andika namba hizo tatu.",
          youCanNow: "kukokotoa jumla iliyochangishwa, wastani wa mchango na kiwango cha wafadhili wanaobaki katika jedwali.",
          quickCheck: [
            { objective: "O2", q: "Fomula ipi inajumlisha nguzo ya michango?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=IF()"], answer: 2, why: "=SUM() inajumlisha nguzo; =AVERAGE() inatoa wastani." },
            { objective: "O2", q: "Wafadhili 20 walichangia mwaka jana na 10 kati yao walichangia tena. Kiwango chako cha kubaki ni kipi?", options: ["Asilimia 10", "Asilimia 20", "Asilimia 200", "Asilimia 50"], answer: 3, why: "10 / 20 = 0.5, ukizidisha kwa 100 = asilimia 50." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga wafadhili katika makundi",
          minutes: 5,
          goal: "Panga wafadhili katika makundi rahisi ili kila kundi lipate ujumbe unaofaa.",
          text: [
            "Kundi (segment) ni wafadhili wanaofanana kwa namna fulani muhimu. Makundi tofauti yanahitaji ujumbe tofauti.",
            "Makundi rahisi ya kuanzia: Wapya (mchango wao wa kwanza ni mwaka huu), Wanaorudia (walichangia mwaka jana na mwaka huu), Waliopotea (walichangia mwaka jana lakini si mwaka huu), na Wakubwa (michango juu ya kiasi unachochagua, kama asilimia 10 ya juu).",
            "Ongeza nguzo inayoitwa Segment na uijaze kwa kila ID ya mfadhili. Unaweza kutumia kichujio (filter) au kupanga (sort) kwa jedwali ili kuwaweka pamoja. Hesabu wafadhili wangapi wako katika kila kundi."
          ],
          steps: ["Ongeza nguzo inayoitwa Segment.", "Weka alama kila ID ya mfadhili kama Mpya, Anayerudia, Aliyepotea au Mkubwa.", "Tumia sort au filter kuwaweka pamoja.", "Hesabu wafadhili katika kila kundi."],
          words: [["Kundi (segment)", "wafadhili wanaofanana kwa namna fulani muhimu, kama wapya au waliopotea."], ["Mfadhili aliyepotea", "mtu aliyechangia zamani lakini hajachangia mwaka huu."]],
          slides: [
            { title: "Kundi ni nini", bullets: ["Wafadhili wanaofanana", "Kila kundi linapata ujumbe unaofaa"] },
            { title: "Makundi manne ya kuanzia", bullets: ["Wapya: mchango wa kwanza mwaka huu", "Wanaorudia: walichangia mwaka jana na mwaka huu", "Waliopotea: walichangia mwaka jana, si mwaka huu", "Wakubwa: juu ya kiasi unachochagua"] },
            { title: "Katika jedwali", bullets: ["Ongeza nguzo ya Segment", "Tumia sort au filter kuweka pamoja", "Hesabu kila kundi"] }
          ],
          tryIt: "Ongeza nguzo ya Segment kwenye orodha yako. Weka alama kila ID ya mfadhili na uhesabu ni wangapi Wapya, Wanaorudia, Waliopotea na Wakubwa.",
          youCanNow: "kupanga wafadhili katika makundi na kuhesabu kila kundi.",
          quickCheck: [
            { objective: "O3", q: "Mfadhili aliyechangia mwaka jana na mwaka huu yuko kundi gani?", options: ["Wanaorudia", "Wapya", "Waliopotea", "Wakubwa"], answer: 0, why: "Wanaorudia walichangia mwaka jana na mwaka huu." },
            { objective: "O3", q: "Unataka kuona wafadhili wote waliopotea pamoja. Unafanya nini kwenye jedwali?", options: ["Unawaandika upya kwenye ukurasa mpya", "Unatumia filter au sort kwenye nguzo ya Segment", "Unafuta wengine wote", "Unaiomba AI iwakisie"], answer: 1, why: "Tumia filter au sort ya jedwali kuwaweka pamoja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Zijue namba za wafadhili wako",
        questions: [
          { objective: "O1", q: "Kabla ya kuchambua data ya wafadhili kwa AI, unapaswa kufanya nini?", options: ["Kubandika orodha nzima yenye majina", "Kuwatumia wanaojitolea kwa barua pepe", "Kutengeneza nakala ambapo majina yamebadilishwa kuwa ID na mawasiliano yamefutwa", "Kuiweka mtandaoni"], answer: 2, why: "Nakala isiyo na majina inalinda taarifa binafsi za wafadhili." },
          { objective: "O2", q: "Wafadhili 40 walichangia mwaka jana na 18 kati yao walichangia tena mwaka huu. Kiwango cha kubaki ni kipi?", options: ["Asilimia 18", "Asilimia 40", "Asilimia 45", "Asilimia 58"], answer: 2, why: "18 ikigawanywa kwa 40 ni 0.45, yaani asilimia 45." },
          { objective: "O2", q: "Fomula ipi ya jedwali inatoa wastani wa mchango?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() inagawanya jumla kwa idadi ya michango." },
          { objective: "O3", q: "Mfadhili alichangia mwaka jana lakini si mwaka huu. Yuko kundi gani?", options: ["Wapya", "Waliopotea", "Wanaorudia", "Wakubwa"], answer: 1, why: "Waliopotea walichangia zamani lakini si mwaka huu." },
          { objective: "O2", q: "Kwa nini kiwango cha kubaki ni muhimu?", options: ["Kinatakiwa na AI", "Kubakiza wafadhili kwa kawaida kunagharimu kidogo kuliko kupata wapya", "Kinafanya jedwali kuwa kubwa zaidi", "Kinaweka kiwango cha kodi"], answer: 1, why: "Kiwango kizuri cha kubaki kinafanya michango iwe thabiti kwa gharama ndogo." }
        ]
      }
    },
    {
      name: "Sura 2: Kutoka namba hadi vitendo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutumia AI kueleza namba zako",
          minutes: 5,
          goal: "Muombe msaidizi wa AI aeleze namba za wafadhili zisizo na majina kwa maneno rahisi.",
          text: [
            "Unaweza kubandika namba zako za muhtasari, si orodha yako ya wafadhili, kwenye msaidizi wa AI kama ChatGPT, Microsoft Copilot au Google Gemini na kuuliza maana yake.",
            "Kwa mfano: \"Ninaendesha benki ndogo ya chakula. Mwaka jana wafadhili 40, mwaka huu 35. Kiwango cha kubaki asilimia 45. Wastani wa mchango $85. Makundi: wapya 17, wanaorudia 18, waliopotea 22, wakubwa 4. Nieleze namba hizi zinaniambia nini kwa maneno rahisi na maswali gani niulize baadaye.\"",
            "AI inaweza pia kupendekeza fomula au aina za chati ukikwama. Kagua mwenyewe hesabu yoyote inayofanya; AI inaweza kukosea hesabu na inaweza kubuni namba za kulinganisha zinazosikika kuwa za kweli."
          ],
          steps: ["Andika namba zako za muhtasari, si wafadhili mmoja mmoja.", "Sema shirika lako ni la aina gani.", "Iombe AI ieleze namba kwa maneno rahisi.", "Uliza maswali gani unapaswa kuuliza baadaye.", "Kagua tena hesabu yoyote mwenyewe."],
          words: [["Namba za muhtasari", "jumla, wastani na idadi, si taarifa kuhusu mtu mmoja."], ["Namba ya kulinganisha (benchmark)", "namba ya kawaida inayotumika kulinganisha; AI inaweza kuzibuni, kwa hiyo kagua chanzo."]],
          slides: [
            { title: "Toa muhtasari, si watu", bullets: ["Jumla, wastani, idadi", "Kamwe si majina wala mchango mmoja wenye jina"] },
            { title: "Prompt nzuri", bullets: ["Shirika lako linafanya nini", "Namba zako za muhtasari", "\"Eleza kwa maneno rahisi; niulize nini baadaye?\""] },
            { title: "Kagua AI", bullets: ["Rudia hesabu yake mwenyewe", "Kuwa makini na namba za kulinganisha", "Uliza namba imetoka wapi"] }
          ],
          tryIt: "Bandika namba zako za muhtasari tu (jumla, kiwango cha kubaki, wastani wa mchango, idadi ya kila kundi) kwenye msaidizi wa AI na uiombe izieleze na ipendekeze maswali matatu ya kuuliza baadaye.",
          youCanNow: "kutumia msaidizi wa AI kueleza namba za wafadhili bila kutoa taarifa binafsi za mfadhili yeyote.",
          quickCheck: [
            { objective: "O4", q: "Mbali na kueleza namba, AI inaweza kusaidia nini kingine katika somo hili?", options: ["Kutafuta anwani za nyumbani za wafadhili", "Kuamua kiasi cha michango kwa wafadhili", "Kupendekeza fomula au aina za chati", "Kutuma maombi ya michango yenyewe"], answer: 2, why: "AI inaweza kupendekeza fomula au aina za chati ukikwama." },
            { objective: "O4", q: "AI inasema wastani wa mchango wako ni $95, lakini jedwali lako linasema $85. Unafanya nini?", options: ["Unatumia $95", "Unatumia wastani wa zote mbili", "Unaiomba AI ikubaliane nawe", "Unakagua hesabu mwenyewe na kutumia namba sahihi"], answer: 3, why: "AI inaweza kukosea hesabu, kwa hiyo kagua hesabu yake mwenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza chati rahisi",
          minutes: 4,
          goal: "Tengeneza chati moja inayoonyesha makundi ya wafadhili wako waziwazi.",
          text: [
            "Chati inasaidia bodi na timu yako kuona habari kwa haraka. Chati ya mihimili inafaa kwa makundi: mhimili mmoja kwa kila kundi la Wapya, Wanaorudia, Waliopotea na Wakubwa.",
            "Katika Google Sheets au Excel, weka majina ya makundi katika nguzo moja na idadi katika nguzo inayofuata. Chagua nguzo zote mbili, kisha tumia menyu ya Insert kuongeza chati na uchague chati ya mihimili (bar au column).",
            "Ipe chati kichwa kilicho wazi kama \"Wafadhili wetu mwaka huu kwa kundi\". Iweke rahisi: ujumbe mmoja kwa kila chati."
          ],
          steps: ["Tengeneza jedwali dogo: jina la kundi na idadi.", "Chagua nguzo zote mbili.", "Ingiza (Insert) chati na uchague chati ya mihimili (bar au column).", "Ipe kichwa kilicho wazi.", "Hakikisha namba zinalingana na jedwali lako."],
          words: [["Chati ya mihimili (bar chart)", "chati inayolinganisha kiasi kwa kutumia mihimili ya urefu tofauti."]],
          slides: [
            { title: "Kwa nini chati", bullets: ["Bodi yako inaona habari kwa haraka", "Ujumbe mmoja kwa kila chati"] },
            { title: "Itengeneze", bullets: ["Jedwali: kundi na idadi", "Chagua nguzo zote mbili", "Insert, kisha chagua chati ya mihimili"] },
            { title: "Imalizie", bullets: ["Ongeza kichwa kilicho wazi", "Hakikisha namba zinalingana"] }
          ],
          tryIt: "Tengeneza chati ya mihimili ya idadi ya makundi yako manne yenye kichwa kilicho wazi.",
          youCanNow: "kutengeneza chati ya mihimili iliyo wazi ya makundi ya wafadhili kwa timu au bodi yako.",
          quickCheck: [
            { objective: "O5", q: "Unachagua nini kabla ya kuingiza chati?", options: ["Majina ya makundi na idadi zake", "Orodha nzima ya wafadhili yenye majina", "Kichwa tu", "Nguzo tupu"], answer: 0, why: "Chagua nguzo ya majina ya makundi na nguzo ya idadi, kisha ingiza chati." },
            { objective: "O5", q: "Chati yako inajaribu kuonyesha makundi, ukubwa wa michango na miezi kwa pamoja. Unafanya nini?", options: ["Unaongeza rangi zaidi", "Unaweka ujumbe mmoja kwa kila chati", "Unaondoa kichwa", "Unatumia chati ya 3D"], answer: 1, why: "Iweke rahisi: ujumbe mmoja kwa kila chati." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kugeuza matokeo kuwa mpango wa ombi la michango",
          minutes: 6,
          goal: "Andika mpango wa ukurasa mmoja wenye kitendo kimoja kwa kila kundi la wafadhili.",
          text: [
            "Namba zina maana tu kama zinabadilisha unachofanya. Kwa kila kundi, chagua kitendo kimoja. Wafadhili wapya: makaribisho ya joto na hadithi ya kile mchango wao ulifanya. Wanaorudia: shukrani na mwaliko wa kuchangia kila mwezi. Waliopotea: ujumbe wa \"tumekukumbuka\" pamoja na habari mpya. Wakubwa: simu au ziara ya binafsi kutoka kwa kiongozi.",
            "AI inaweza kuandika rasimu ya kila ujumbe. Tumia vishika-nafasi kama [jina la mfadhili] na [matokeo ya programu], kisha uvijaze mwenyewe katika mfumo wako wa wafadhili au mail merge.",
            "Andika mpango wa ukurasa mmoja: namba zako tatu muhimu, chati, kitendo kimoja kwa kila kundi, nani anakifanya na lini. Ukague pamoja na mkurugenzi wako kabla ya kutuma chochote. Fuata sheria zozote za shirika lako kuhusu kuwasiliana na wafadhili na kujiondoa (opt-out)."
          ],
          steps: ["Andika namba zako tatu muhimu juu.", "Ongeza chati yako.", "Chagua kitendo kimoja kwa kila kundi.", "Iombe AI iandike rasimu ya kila ujumbe kwa vishika-nafasi.", "Ongeza nani anafanya nini na lini, na upate idhini."],
          words: [["Ombi la michango (appeal)", "ombi linalowaomba wafuasi wachangie."], ["Mail merge", "zana inayojaza kila barua au barua pepe kwa taarifa za mtu mmoja kutoka kwenye orodha."]],
          slides: [
            { title: "Kitendo kimoja kwa kila kundi", bullets: ["Wapya: makaribisho pamoja na hadithi", "Wanaorudia: shukrani pamoja na mwaliko wa kuchangia kila mwezi", "Waliopotea: \"tumekukumbuka\" pamoja na habari mpya", "Wakubwa: simu ya binafsi kutoka kwa kiongozi"] },
            { title: "Kuandika rasimu kwa AI", bullets: ["Tumia [jina la mfadhili] na [matokeo ya programu]", "Jaza taarifa halisi mwenyewe"] },
            { title: "Mpango wako wa ukurasa mmoja", bullets: ["Namba tatu muhimu na chati", "Kitendo kwa kila kundi", "Nani anakifanya na lini", "Idhini kabla ya kutuma"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa ombi la michango wenye namba zako tatu, chati, kitendo kimoja kwa kila kundi na wahusika. Iombe AI iandike rasimu ya ujumbe wa \"tumekukumbuka\" kwa vishika-nafasi, kisha uuhariri kwa maneno yako mwenyewe.",
          youCanNow: "kugeuza namba za wafadhili kuwa mpango wa vitendo wa ombi la michango unaoheshimu faragha ya wafadhili.",
          quickCheck: [
            { objective: "O6", q: "Kitendo gani kizuri kwa wafadhili wapya?", options: ["Kuwapuuza hadi mwaka ujao", "Kuwaomba wachangie kila mwezi mara moja", "Makaribisho ya joto na hadithi ya kile mchango wao ulifanya", "Ujumbe wa \"tumekukumbuka\""], answer: 2, why: "Wafadhili wapya wanapata makaribisho ya joto na hadithi ya kile mchango wao ulifanya." },
            { objective: "O6", q: "Mpango wako wa ombi la michango umeandikwa. Unafanya nini kabla ya kutuma chochote?", options: ["Unautuma kwa kila mfadhili mara moja", "Unauweka kwenye mitandao ya kijamii", "Unaiomba AI iuidhinishe", "Unaukagua pamoja na mkurugenzi wako na kufuata sheria zako za kuwasiliana na wafadhili na kujiondoa"], answer: 3, why: "Kagua pamoja na mkurugenzi wako na ufuate sheria zako za kuwasiliana na wafadhili na kujiondoa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutoka namba hadi vitendo",
        questions: [
          { objective: "O4", q: "Ni nini salama kubandika kwenye msaidizi wa AI?", options: ["Orodha yako nzima ya wafadhili", "Barua pepe za wafadhili", "Anwani za nyumbani za wafadhili", "Namba za muhtasari kama kiwango cha kubaki na idadi ya makundi"], answer: 3, why: "Muhtasari haufichui mtu yeyote mmoja." },
          { objective: "O4", q: "AI inasema \"benki nyingi za chakula zinabakiza asilimia 70 ya wafadhili\". Unafanya nini?", options: ["Unaomba chanzo na kukikagua kabla ya kuitumia", "Unaiweka kwenye ripoti ya bodi mara moja", "Unadhani ni kweli", "Unafuta namba zako mwenyewe"], answer: 0, why: "AI inaweza kubuni namba za kulinganisha; kagua chanzo." },
          { objective: "O5", q: "Chati ipi inafaa kulinganisha idadi ya makundi?", options: ["Ramani", "Picha", "Chati ya mihimili", "Kalenda"], answer: 2, why: "Mihimili inarahisisha kulinganisha ukubwa wa makundi." },
          { objective: "O6", q: "Kitendo gani kizuri kwa wafadhili waliopotea?", options: ["Kuwaondoa milele", "Kuwaomba namba yao ya benki", "Kutotuma chochote", "Ujumbe wa \"tumekukumbuka\" pamoja na habari mpya"], answer: 3, why: "Habari mpya ya upendo inawakaribisha warudi." },
          { objective: "O6", q: "AI inapoandika rasimu za barua kwa wafadhili, majina yanaonekanaje?", options: ["Majina halisi yameandikwa kwenye prompt", "Hakuna majina kamwe, hata kwenye barua ya mwisho", "Vishika-nafasi kama [jina la mfadhili] vinavyojazwa baadaye", "Majina ya ukoo tu"], answer: 2, why: "Vishika-nafasi vinazuia majina yasiingie kwenye zana ya AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uchambuzi wa Wafadhili kwa AI",
    questions: [
      { objective: "O1", q: "Uchambuzi wa wafadhili ni:", options: ["Kuuza orodha za wafadhili", "Kusoma kumbukumbu za michango ili kujua nani anachangia, kiasi gani na mara ngapi", "Kukisia nani anaweza kuchangia", "Aina ya app ya AI"], answer: 1, why: "Unatumia kumbukumbu zako mwenyewe kuongoza uchangishaji fedha." },
      { objective: "O1", q: "Unabadilisha majina ya wafadhili kuwa nini katika nakala yako ya kazi?", options: ["ID kama D001", "Majina ya utani", "Namba za simu", "Hakuna kitu"], answer: 0, why: "ID zinakuwezesha kuchambua bila kuonyesha nani ni nani." },
      { objective: "O1", q: "Nakala isiyo na majina inapaswa kubakiza nguzo zipi?", options: ["Anwani ya nyumbani na barua pepe", "Simu na maelezo", "ID, tarehe ya mchango, kiasi na kampeni", "Taarifa za benki"], answer: 2, why: "Hizo ndizo tu unazohitaji kwa namba." },
      { objective: "O1", q: "Orodha halisi ya wafadhili inapaswa kubaki wapi?", options: ["Katika mfumo wako wa wafadhili au faili lililolindwa", "Katika folda ya umma", "Katika mazungumzo ya AI", "Katika kikundi cha ujumbe mfupi"], answer: 0, why: "Kumbukumbu za siri zinabaki zimelindwa." },
      { objective: "O2", q: "Jumla iliyochangishwa inapatikana kwa:", options: ["=TODAY()", "=COUNT() ya tarehe", "Kukisia", "=SUM() ya kiasi"], answer: 3, why: "=SUM() inajumlisha michango yote." },
      { objective: "O2", q: "Wastani wa mchango ni sawa na:", options: ["Mchango mkubwa zaidi", "Jumla iliyochangishwa ikigawanywa kwa idadi ya michango", "Idadi ya wafadhili", "Mchango mdogo zaidi mara mbili"], answer: 1, why: "Hiyo ndiyo maana ya wastani." },
      { objective: "O2", q: "Wafadhili 50 walichangia mwaka jana; 30 kati yao walichangia tena. Kiwango cha kubaki ni:", options: ["Asilimia 30", "Asilimia 50", "Asilimia 60", "Asilimia 80"], answer: 2, why: "30 / 50 = 0.6, yaani asilimia 60." },
      { objective: "O2", q: "Kiwango kidogo cha kubaki kinaonyesha kwamba unapaswa:", options: ["Kuacha kuchangisha fedha", "Kupandisha bei", "Kufuta wafadhili wa zamani", "Kuwashukuru na kuwapa habari wafadhili vizuri zaidi"], answer: 3, why: "Kuwatunza wafadhili vizuri kunawarudisha." },
      { objective: "O3", q: "Mchango wa kwanza wa mfadhili ulikuwa mwaka huu. Kundi lake ni:", options: ["Wapya", "Waliopotea", "Wanaorudia", "Wakubwa"], answer: 0, why: "Wafadhili wapya walichangia kwa mara ya kwanza mwaka huu." },
      { objective: "O3", q: "Kundi (segment) ni:", options: ["Mfadhili mmoja", "Aina ya chati", "Wafadhili wanaofanana kwa namna fulani muhimu", "Fomu ya kodi"], answer: 2, why: "Makundi yanakuwezesha kutuma ujumbe unaofaa kwa kila kundi." },
      { objective: "O3", q: "Kuweka wafadhili katika makundi kwenye jedwali, unaweza:", options: ["Kuchapisha na kukata karatasi", "Kuwaomba wafadhili wajipange wenyewe", "Kufuta safu", "Kuongeza nguzo ya Segment na kutumia sort au filter"], answer: 3, why: "Sort na filter zinaweka safu pamoja kwa kundi." },
      { objective: "O4", q: "Prompt ipi ni salama na yenye manufaa?", options: ["\"Haya ni majina na michango ya wafadhili wetu wote...\"", "\"Hiki ni kiingilio chetu cha benki.\"", "\"Kiwango cha kubaki asilimia 45, wastani wa mchango $85, waliopotea 22. Eleza kwa maneno rahisi.\"", "\"Kisia wafadhili wetu.\""], answer: 2, why: "Inatoa namba za muhtasari tu na inauliza swali lililo wazi." },
      { objective: "O4", q: "AI ilifanya hesabu fulani kwa namba zako. Unapaswa:", options: ["Kuiamini kabisa", "Kuikagua tena mwenyewe", "Kuituma kwa bodi bila kuikagua", "Kupuuza namba zote"], answer: 1, why: "AI inaweza kukosea hesabu." },
      { objective: "O4", q: "Namba ya kulinganisha kutoka AI isiyo na chanzo inapaswa:", options: ["Kukaguliwa kabla ya kuitumia", "Kutumika katika ripoti yako ya ruzuku", "Kuchapishwa kwenye tovuti yako", "Kushirikishwa kwa wafadhili"], answer: 0, why: "AI inaweza kubuni namba zinazosikika kuwa za kweli." },
      { objective: "O5", q: "Kutengeneza chati katika Sheets au Excel, kwanza unafanya nini?", options: ["Unafunga faili", "Unaandika nywila", "Unachagua jedwali la majina ya makundi na idadi", "Unafuta data"], answer: 2, why: "Chati inajengwa kutoka kwa data uliyochagua." },
      { objective: "O5", q: "Kichwa kizuri cha chati ni:", options: ["\"Wafadhili wetu mwaka huu kwa kundi\"", "\"Chati 1\"", "Hakuna kichwa", "\"Data\""], answer: 0, why: "Kichwa kilicho wazi kinawaambia wasomaji ujumbe ni nini." },
      { objective: "O6", q: "Kitendo kizuri kwa wafadhili wanaorudia ni:", options: ["Kuwapuuza", "Kuwaomba nywila zao", "Kuwaondoa kwenye orodha", "Shukrani na mwaliko wa kuchangia kila mwezi"], answer: 3, why: "Wafadhili waaminifu ndio bora zaidi kwa michango ya kila mwezi." },
      { objective: "O6", q: "Kwa wafadhili wakubwa, kitendo kizuri ni:", options: ["Barua ya kawaida tu", "Simu au ziara ya binafsi kutoka kwa kiongozi", "Kutowasiliana nao", "Ujumbe mfupi unaoomba namba za kadi"], answer: 1, why: "Mawasiliano ya binafsi yanaheshimu ahadi kubwa zaidi." },
      { objective: "O6", q: "Mpango wako wa ukurasa mmoja unapaswa kuwa na:", options: ["Anwani ya kila mfadhili", "Namba muhimu, chati, vitendo, wahusika na tarehe", "Chati tu", "Maoni ya AI tu"], answer: 1, why: "Mpango unasema nini kitafanyika, na nani na lini." },
      { objective: "O6", q: "Kabla ya kutuma ombi lolote la michango, unapaswa:", options: ["Kulituma kwa kila mtu mara moja bila kukagua", "Kuiacha AI ilitume", "Kuruka kusahihisha", "Kupata idhini na kufuata sheria zako za kuwasiliana na wafadhili na kujiondoa"], answer: 3, why: "Idhini na kuheshimu kujiondoa kunalinda imani ya wafadhili." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 6, 8, 11, 14, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Nakala salama", objective: "O1", notYet: "Jina, anwani, simu, barua pepe au maelezo bado yako kwenye nakala.", meets: "Majina yamebadilishwa kuwa ID; ID, tarehe, kiasi na kampeni tu ndivyo vimebaki.", exceeds: "Anaandika orodha halisi imetunzwa wapi na nani anaweza kuifungua." },
      { name: "Namba muhimu", objective: "O2", notYet: "Kiwango cha kubaki au wastani wa mchango umekokotolewa vibaya.", meets: "Jumla iliyochangishwa, wastani wa mchango na kiwango cha kubaki vyote ni sahihi.", exceeds: "Anaonyesha fomula au hatua za hesabu kwa kila namba." },
      { name: "Makundi ya wafadhili", objective: "O3", notYet: "Makundi chini ya matatu, au baadhi ya wafadhili wameachwa nje.", meets: "Angalau makundi matatu, kila ID ya mfadhili iko katika moja, pamoja na idadi.", exceeds: "Anatumia makundi yote manne, na kiasi kilichotajwa kwa Wafadhili Wakubwa." },
      { name: "Maelezo ya AI yamekaguliwa", objective: "O4", notYet: "Data ya mfadhili mmoja mmoja ilibandikwa, au hesabu au namba za kulinganisha za AI zilitumika bila kukaguliwa.", meets: "Namba za muhtasari tu zilibandikwa; hesabu ya AI na namba yoyote ya kulinganisha zilikaguliwa tena.", exceeds: "Anaorodhesha maswali ambayo AI ilipendekeza kuuliza baadaye na majibu yake." },
      { name: "Mpango wa ombi la michango", objective: "O6", notYet: "Hakuna kitendo kwa kundi fulani, au hakuna mhusika au tarehe.", meets: "Ukurasa mmoja wenye namba muhimu, chati, kitendo kimoja kwa kila kundi, mhusika na tarehe.", exceeds: "Rasimu za ujumbe zinatumia vishika-nafasi na mpango umeidhinishwa na mkurugenzi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashirika yanayokokotoa kiwango cha kubaki kwa wafadhili wao kwa mara ya kwanza (utafiti wa kufuatilia)",
      "Mabadiliko ya kiwango cha kubaki kwa wafadhili mwaka mmoja baadaye, kama yanavyoripotiwa na mashirika",
      "Wafadhili waliopotea wanaochangia tena baada ya ujumbe wa \"tumekukumbuka\""
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye Google Sheets au Excel",
      "Nakala isiyo na majina ya orodha yako ya wafadhili, au orodha ya mazoezi kutoka Somo la 1",
      "Msaidizi wa AI wa bure, unaotumika kwa namba za muhtasari tu",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Tumia orodha ya mazoezi darasani; wanafunzi wanafanyia kazi data halisi tu katika faili zao wenyewe zilizolindwa.",
      "Pitieni pamoja hesabu ya kiwango cha kubaki kabla wanafunzi hawajajaribu yao wenyewe.",
      "Onyesha mfano ambapo hesabu ya AI si sahihi ili wanafunzi waone kwa nini wanaikagua tena.",
      "Mwalike mkurugenzi au kiongozi wa uchangishaji fedha ili mpango wa ombi la michango uidhinishwe papo hapo.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
