"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-careers-opportunities.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-careers-opportunities-sw",
  lang: "sw",
  translationOf: "veterans-ai-careers-opportunities",
  category: "Veterans (military)",
  name: "Kazi za Baadaye na Fursa za AI",
  skills: "Kulinganisha kazi za jeshi na kazi za kiraia, Kutambua kazi zinazokua kwa sababu ya AI, Kulinganisha kazi kwa takwimu rasmi, Kupata mafunzo na mafao, Kuandika mpango wa kazi wa siku 90",
  outcome: "kuandika orodha fupi ya kazi tatu za kiraia zinazolingana na uzoefu wako wa jeshi, kulinganisha mshahara, ukuaji na mafunzo yake kwa takwimu rasmi, na kuandika mpango wa siku 90 wa kuanza ile iliyo bora zaidi.",
  about: [
    "Kozi hii ni kwa maveterani na wanajeshi wanaomaliza utumishi wanaochagua hatua inayofuata. Kazi nyingi zinakua kwa sababu ya AI, na nyingi zinahitaji hasa kile ulichojifunza jeshini: nidhamu, ujuzi wa kiufundi, uongozi na kufanya kazi chini ya shinikizo.",
    "Utalinganisha kazi yako ya jeshi na kazi za kiraia kwa zana rasmi za Wizara ya Kazi ya Marekani (Department of Labor), utatumia msaidizi wa AI kuchunguza na kulinganisha kazi hizo, utakagua kila namba kwa takwimu rasmi, na utapata mafunzo ambayo huenda mafao yako yakayalipia.",
    "Kila somo linachukua kama dakika tano: soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa kazi wa ukurasa mmoja: kazi tatu za kiraia zinazolingana na kazi yako ya jeshi (kutoka O*NET Military Crosswalk au CareerOneStop), kila moja na mshahara wa wastani wa kati (median) na matarajio ya ajira kutoka Occupational Outlook Handbook, pamoja na pengo la ujuzi unalohitaji kuziba. Kisha chagua kazi moja na uandike hatua tatu zenye tarehe kwa siku 90 zijazo, ikiwemo chaguo moja la mafunzo au mafao.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Maveterani na wanajeshi wanaomaliza utumishi wanaoamua kazi gani ya kiraia waifuate. Wengi wana uzoefu wa kiufundi, wa usafirishaji na ugavi au wa uongozi, lakini hawana uhakika ni kazi zipi zinakua na jinsi utumishi wao unavyofaa.",
    startingPoint: "Wanaweza kutumia simu janja au kompyuta na kutafuta kwenye mtandao. Huenda wamejaribu msaidizi wa AI. Bado hawajalinganisha kazi kwa takwimu rasmi wala kuandika mpango wenye tarehe.",
    gap: "Kuchagua kazi kwa kubahatisha au kwa majibu ya AI pekee kunaweza kupoteza miezi na mafao. Wanafunzi wanahitaji kulinganisha kazi yao ya jeshi na kazi za kiraia kwa zana rasmi, kulinganisha mshahara, matarajio ya ajira na mafunzo kwa takwimu rasmi, na kujitolea kwa mpango mfupi wenye tarehe.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna ujuzi wa kiufundi unaohitajika",
      "Vifaa: simu janja au kompyuta yenye intaneti, wakati mwingine kompyuta ya pamoja ya kambi au ya maktaba",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya miadi ya kumaliza utumishi na kazi",
      "Mishahara, masharti ya kustahili na kanuni za programu hubadilika, kwa hiyo wanafunzi hukagua bls.gov/ooh, va.gov na dol.gov badala ya kuamini namba za AI",
      "Faragha: hakuna namba ya Social Security, ya faili ya VA wala ya utumishi katika prompt yoyote ya AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Introduction to AI and the Future Workforce\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa nyanja zinazokua kwa sababu ya AI", action: "kutambua nyanja zipi zinazokua zinazofaa uzoefu wako wa jeshi", standard: "ukitaja angalau mbili, kila moja na sababu kutoka utumishi wako" },
    { id: "O2", condition: "Ukipewa MOS, rating au AFSC yako", action: "kutumia O*NET Military Crosswalk na CareerOneStop kuorodhesha kazi za kiraia zinazolingana na kazi yako ya jeshi", standard: "ukiwa na angalau kazi tano zinazolingana" },
    { id: "O3", condition: "Ukipewa kazi moja kutoka orodha yako", action: "kutumia msaidizi wa AI kueleza kazi ya kila siku, ujuzi na njia ya kuingia katika kazi hiyo, na kuweka alama kwenye kila ukweli unaohitaji kukaguliwa", standard: "ukiweka alama kwenye kila namba, cheti na sharti" },
    { id: "O4", condition: "Ukipewa kazi tatu", action: "kulinganisha mshahara wa wastani wa kati, matarajio ya ajira na elimu ya kuingilia kwa kutumia Occupational Outlook Handbook", standard: "kila namba ikitoka bls.gov/ooh, si kutoka AI" },
    { id: "O5", condition: "Kwa kazi utakayochagua", action: "kupata chaguo moja la mafunzo na programu moja rasmi inayoweza kusaidia kuyalipia", standard: "ukiwa na sharti moja la kustahili lililonakiliwa kutoka ukurasa rasmi wa programu hiyo" },
    { id: "O6", condition: "Ukitumia ulinganisho wako na chaguo lako la mafunzo", action: "kuandika mpango wa kazi wa siku 90 wenye hatua tatu zenye tarehe", standard: "kila hatua ikiwa mahususi, yenye tarehe, na ikiwemo chaguo moja la mafunzo au mafao" }
  ],
  chapters: [
    {
      name: "Sura 1: Fursa ziko wapi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kazi zinazokua kwa sababu ya AI",
          minutes: 5,
          goal: "Taja aina nne za kazi zinazokua kwa sababu ya AI na useme zipi zinafaa uzoefu wako.",
          text: [
            "AI haitengenezi kazi kwa watengeneza programu peke yao. Inabadilisha kazi katika nyanja nyingi, na inaongeza mahitaji ya watu wanaoweza kuendesha, kulinda, kurekebisha na kusimamia mifumo inayoizunguka.",
            "Nyanja ambazo maveterani hufaa mara nyingi: usalama wa mtandao (cybersecurity: kulinda mitandao na data), data na msaada wa IT (kuweka mifumo na data ikifanya kazi), usafirishaji na ugavi (kupanga, kutabiri, kusafirisha bidhaa), matengenezo ya kitaalamu na kazi ya fundi (mitambo, nishati, ndege, vifaa vya kielektroniki), na usimamizi wa miradi na shughuli (kuongoza watu na mipango).",
            "Kazi nyingi kati ya hizi bado zinahitaji mikono, busara na uaminifu. Mtaalamu wa usafirishaji anayeweza kusoma utabiri wa AI kisha akaamua cha kuagiza ana thamani zaidi kuliko asiyeweza."
          ],
          words: [["Usalama wa mtandao (cybersecurity)", "kulinda kompyuta, mitandao na data dhidi ya mashambulizi."], ["Mnyororo wa ugavi (supply chain)", "hatua zote zinazofikisha bidhaa kutoka kwa mtengenezaji hadi kwa mtumiaji."]],
          slides: [
            { title: "AI inaongeza mahitaji zaidi ya watengeneza programu", bullets: ["Watu wanaoendesha, kulinda, kurekebisha na kusimamia mifumo", "Watu wanaoweza kutumia AI na bado wakaamua wenyewe"] },
            { title: "Nyanja zinazofaa maveterani", bullets: ["Usalama wa mtandao na msaada wa IT", "Usafirishaji na ugavi", "Matengenezo ya kitaalamu na mafundi", "Usimamizi wa miradi na shughuli"] },
            { title: "Faida yako", bullets: ["Nidhamu na ujuzi wa kiufundi", "Uongozi chini ya shinikizo", "Busara: kusoma takwimu, kisha kuamua"] }
          ],
          tryIt: "Andika nyanja tano za somo hili. Karibu na kila moja, andika jambo moja ulilofanya jeshini linalofaa, au \"bado hakuna\".",
          youCanNow: "kutaja kazi zinazokua kwa sababu ya AI na kusema zipi zinafaa uzoefu wako wa jeshi.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini AI inaongeza mahitaji ya watu katika baadhi ya nyanja?", options: ["AI inajiendesha yenyewe na haihitaji mtu", "Roboti peke yao ndio wanaofanya kazi katika nyanja hizo sasa", "Lazima mtu aendeshe, alinde, arekebishe na asimamie mifumo ya AI", "AI imechukua nafasi ya kazi zote za kiufundi"], answer: 2, why: "AI inavyoenea, watu wanahitajika kuendesha, kulinda, kurekebisha na kusimamia mifumo." },
            { objective: "O1", q: "Jeshini ulisimamia vifaa vya redio na mtandao. Unaandika nyanja ipi inayokua karibu nayo?", options: ["Usalama wa mtandao au msaada wa IT", "Hakuna, kwa sababu ujuzi wa redio hauhamishiki", "Kilimo peke yake", "Kazi zisizohitaji uzoefu peke yake"], answer: 0, why: "Uzoefu wa mtandao na vifaa unafaa nyanja zinazokua kama msaada wa IT na usalama wa mtandao." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kulinganisha MOS, rating au AFSC yako na kazi za kiraia",
          minutes: 5,
          goal: "Tumia zana rasmi za kulinganisha kuorodhesha kazi za kiraia zinazolingana na kazi yako ya jeshi.",
          text: [
            "Usianze kwa kubahatisha. Anza na ulinganisho rasmi. O*NET OnLine ya Wizara ya Kazi ya Marekani ina Military Crosswalk Search: chagua tawi lako la jeshi, andika msimbo au jina la kazi yako (kwa mfano MOS ya Army au Marine, rating ya Navy au Coast Guard, AFSC ya Air Force au SFSC ya Space Force), na uone kazi za kiraia zinazolingana.",
            "Ukurasa wa Find a Job wa Wizara ya Kazi kwa maveterani pia una kiungo cha Veterans Job Matcher ya CareerOneStop, inayounganisha kazi za jeshi na kazi za kiraia. Tumia zote mbili na ubaki na kazi zinazojitokeza zaidi ya mara moja.",
            "Kisha tumia msaidizi wa AI kuielewa orodha: \"Eleza kazi hizi tatu kwa maneno rahisi, siku ya kawaida inavyokuwa, na ujuzi wangu upi unahamishika. Nilikuwa mtaalamu wa usafirishaji na ugavi wa Navy kwa miaka 8.\""
          ],
          steps: ["Fungua O*NET Military Crosswalk Search.", "Chagua tawi lako na uandike msimbo au jina la kazi yako.", "Andika kazi za kiraia zinazolingana.", "Rudia katika Veterans Job Matcher ya CareerOneStop.", "Muombe msaidizi wa AI aeleze kazi zinazoonekana katika orodha zote mbili."],
          words: [["Crosswalk", "zana inayolinganisha kazi ya jeshi na kazi za kiraia."], ["Kazi (occupation)", "aina ya kazi, kama mtaalamu wa ugavi au msimamizi wa mtandao."]],
          slides: [
            { title: "Anza na ulinganisho rasmi", bullets: ["O*NET Military Crosswalk Search", "Chagua tawi, andika msimbo au jina la kazi", "Ona kazi za kiraia zinazolingana"] },
            { title: "Kagua mara mbili", bullets: ["Veterans Job Matcher ya CareerOneStop", "Baki na kazi zinazoonekana katika orodha zote mbili"] },
            { title: "Kisha muombe AI aeleze", bullets: ["Kazi ni nini kwa maneno rahisi", "Siku ya kawaida inavyokuwa", "Ujuzi wako upi unahamishika"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Tafuta kazi yako ya jeshi katika O*NET Military Crosswalk. Chagua kazi tano za kiraia zinazolingana, kisha muombe msaidizi wa AI aeleze kila moja kwa sentensi mbili rahisi.",
          youCanNow: "kutumia zana rasmi za kulinganisha na msaidizi wa AI kuorodhesha na kuelewa kazi za kiraia zinazolingana na utumishi wako.",
          quickCheck: [
            { objective: "O2", q: "O*NET Military Crosswalk inakupa nini?", options: ["Kiwango chako cha ulemavu cha VA", "Kazi za kiraia zinazolingana na msimbo au jina la kazi yako ya jeshi", "Orodha ya matangazo ya kazi yaliyo wazi karibu nawe", "Salio la GI Bill yako"], answer: 1, why: "Crosswalk inalinganisha misimbo na majina ya kazi za jeshi na kazi za kiraia." },
            { objective: "O2", q: "Umepata kazi tano zinazolingana lakini baadhi ya majina hayaeleweki. Unafanya nini?", options: ["Ondoa kila kazi yenye jina lisiloeleweka", "Chagua ile yenye jina refu zaidi", "Bahatisha kila kazi ni nini", "Muombe msaidizi wa AI aeleze kila moja kwa sentensi mbili rahisi"], answer: 3, why: "AI ni hodari wa kueleza kazi kwa maneno rahisi baada ya zana rasmi kukupa orodha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuchunguza kazi kwa msaidizi wa AI",
          minutes: 5,
          goal: "Tumia AI kueleza kazi ya kila siku, ujuzi na njia ya kuingia katika kazi, na uweke alama kwenye kinachohitaji kukaguliwa.",
          text: [
            "Msaidizi wa AI ni mshirika mzuri wa utafiti kwa mtazamo wa kwanza. Muombe aeleze siku moja katika kazi hiyo, ujuzi muhimu zaidi, zana zinazotumika kwa kawaida, majina ya kawaida ya kazi za kuanzia, na maswali unayopaswa kumuuliza mtu anayefanya kazi hiyo.",
            "Tumia prompt iliyo wazi. Mfano: \"Mimi ni veterani wa Air Force mwenye miaka 6 katika matengenezo ya ndege. Eleza kazi ya fundi wa mitambo ya upepo (wind turbine technician): siku ya kawaida, ujuzi 5 muhimu zaidi, ujuzi wangu upi unahamishika, na njia ya kawaida ya kuingia. Tumia vipengele vifupi.\"",
            "Weka alama ya kuuliza (?) kwenye kila ukweli unaoweza kubadilika, kama mshahara, majina ya vyeti na masharti. Utayakagua hayo katika sura inayofuata."
          ],
          steps: ["Chagua kazi moja kutoka orodha yako.", "Uliza siku ya kawaida, ujuzi muhimu, ujuzi unaohamishika na njia ya kuingia.", "Uliza: \"Ni maswali gani nimuulize mtu anayefanya kazi hii?\"", "Weka alama ya kuuliza karibu na mshahara, vyeti na masharti."],
          words: [["Njia ya kuingia", "njia ya kawaida watu wanayotumia kuingia katika kazi: mafunzo, cheti, uanagenzi au shahada."], ["Ujuzi unaohamishika", "ujuzi kutoka kazi moja unaofaa katika kazi nyingine."]],
          slides: [
            { title: "Muombe AI mtazamo wa kwanza", bullets: ["Siku ya kawaida", "Ujuzi na zana muhimu zaidi", "Ujuzi wako upi unahamishika", "Njia ya kawaida ya kuingia"] },
            { title: "Mfano wa prompt", bullets: ["Matengenezo ya ndege ya Air Force, miaka 6", "Eleza fundi wa mitambo ya upepo", "Siku, ujuzi 5, unaohamishika, njia ya kuingia"] },
            { title: "Weka alama kwenye kinachoweza kubadilika", bullets: ["Mshahara", "Majina na kanuni za vyeti", "Weka ? karibu navyo ili uvikague baadaye"] }
          ],
          tryIt: "Muombe msaidizi wa AI aeleze kazi moja kutoka orodha yako kwa kutumia mfano wa prompt. Weka alama ya kuuliza karibu na kila namba, cheti au sharti katika jibu.",
          youCanNow: "kutumia msaidizi wa AI kuchunguza kazi na kuweka alama kwenye ukweli unaopaswa kukagua.",
          quickCheck: [
            { objective: "O3", q: "Njia ya kuingia ni nini?", options: ["Njia ya kawaida watu wanayotumia kuingia katika kazi", "Mlango wa mbele wa kampuni", "Mshahara wa mfanyakazi wa mwaka wa kwanza", "Hatua ya mwisho kabla ya kustaafu"], answer: 0, why: "Njia ya kuingia ni njia ya kawaida ya kupata kazi, kama mafunzo, cheti au uanagenzi." },
            { objective: "O3", q: "AI inasema kazi fulani \"inahitaji cheti cha Security+\". Unafanya nini?", options: ["Jisajili kwa mtihani mara moja", "Puuza jibu lote", "Weka alama ya kuuliza karibu nalo na ulikague kwa chanzo rasmi", "Linakili kwenye mpango wako kama ukweli"], answer: 2, why: "Vyeti na masharti ni ukweli wa kukagua, si wa kuamini kutoka AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Fursa ziko wapi",
        questions: [
          { objective: "O1", q: "Ipi kati ya hizi ni nyanja ambayo AI inaongeza mahitaji ya watu?", options: ["Usalama wa mtandao", "Michezo ya video peke yake", "Kutengeneza programu peke yake", "Hakuna, AI inaondoa kazi zote"], answer: 0, why: "AI inaongeza mahitaji ya watu wanaolinda, kuendesha na kusimamia mifumo, kama katika usalama wa mtandao." },
          { objective: "O2", q: "Ni wapi mahali bora pa KUANZA kulinganisha MOS yako na kazi za kiraia?", options: ["Kubahatisha kwa rafiki", "O*NET Military Crosswalk", "Tangazo la kazi la kubahatisha", "Chapisho la mitandao ya kijamii"], answer: 1, why: "Crosswalk rasmi inalinganisha msimbo wako wa jeshi na kazi za kiraia." },
          { objective: "O2", q: "Unapata orodha tofauti kutoka O*NET na CareerOneStop. Hatua ya busara ni ipi?", options: ["Puuza zote mbili", "Chagua orodha fupi zaidi", "Baki na kazi zinazoonekana katika zote mbili", "Muombe AI akuchagulie moja"], answer: 2, why: "Kazi zinazoonekana katika orodha zote mbili rasmi ni zinazolingana kwa nguvu." },
          { objective: "O3", q: "Jibu la AI linasema kazi fulani inalipa $95,000. Unafanya nini?", options: ["Acha kutafuta; umeipata", "Ichapishe mtandaoni", "Iamini kwa sababu ni mahususi", "Weka alama ya kuuliza karibu nayo na uikague kwa takwimu rasmi"], answer: 3, why: "Mshahara unaweza kuwa si sahihi au umepitwa na wakati, kwa hiyo lazima ukaguliwe." },
          { objective: "O3", q: "Ujuzi unaohamishika ni nini?", options: ["Ujuzi kutoka kazi moja unaofaa katika kazi nyingine", "Ujuzi unaoweza kuuza", "Ujuzi kwa maafisa peke yao", "Ujuzi ambao AI inakufanyia"], answer: 0, why: "Ujuzi unaohamishika unavuka kwenda kazi nyingine, kama kuongoza timu au kutunza hesabu ya bidhaa." }
        ]
      }
    },
    {
      name: "Sura 2: Kuchagua na kupanga njia yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kulinganisha kazi kwa takwimu rasmi",
          minutes: 5,
          goal: "Linganisha mshahara, matarajio ya ajira na elimu ya kuingilia ya kazi tatu kwa kutumia Occupational Outlook Handbook.",
          text: [
            "Occupational Outlook Handbook ya Ofisi ya Takwimu za Kazi ya Marekani (Bureau of Labor Statistics, bls.gov/ooh) ni ya bure na rasmi. Kwa kila kazi inatoa mshahara wa wastani wa kati, elimu inayohitajika kwa kawaida kuingia, mafunzo kazini, na matarajio ya ajira: idadi ya kazi inatarajiwa kukua au kupungua kwa kasi gani.",
            "Tengeneza jedwali rahisi lenye kazi zako tatu katika mistari na safu hizi: mshahara wa wastani wa kati, elimu ya kuingilia, mafunzo, matarajio ya ajira, na pengo lako la ujuzi. Msaidizi wa AI anaweza kukutengenezea jedwali tupu; wewe unajaza namba kutoka Handbook.",
            "Mshahara wa wastani wa kati (median) ni sehemu ya katikati: nusu ya wafanyakazi wanapata zaidi, nusu wanapata kidogo. Mshahara pia hubadilika kulingana na mahali, kwa hiyo utumie kulinganisha kazi, si kama ahadi."
          ],
          steps: ["Nenda bls.gov/ooh na utafute kila kazi.", "Andika mshahara wa wastani wa kati, elimu ya kuingilia, mafunzo na matarajio ya ajira.", "Andika pengo lako la ujuzi: kile ambacho bado unahitaji.", "Weka yote katika jedwali moja."],
          words: [["Mshahara wa wastani wa kati (median pay)", "mshahara wa katikati: nusu ya wafanyakazi wanapata zaidi na nusu wanapata kidogo."], ["Matarajio ya ajira (job outlook)", "kiasi ambacho idadi ya kazi inatarajiwa kukua au kupungua."], ["Pengo la ujuzi", "ujuzi au vyeti ambavyo bado unahitaji kwa kazi fulani."]],
          slides: [
            { title: "Chanzo rasmi", bullets: ["Occupational Outlook Handbook: bls.gov/ooh", "Bure, kutoka Bureau of Labor Statistics"] },
            { title: "Cha kuandika", bullets: ["Mshahara wa wastani wa kati", "Elimu ya kuingilia na mafunzo", "Matarajio ya ajira", "Pengo lako la ujuzi"] },
            { title: "Isome kwa usahihi", bullets: ["Median = sehemu ya katikati", "Mshahara hubadilika kulingana na mahali", "Itumie kulinganisha, si kama ahadi"] }
          ],
          sources: [{ name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Muombe msaidizi wa AI jedwali tupu la kulinganisha lenye kazi zako tatu na safu za somo hili. Jaza namba wewe mwenyewe kutoka bls.gov/ooh.",
          youCanNow: "kulinganisha kazi kwa kutumia takwimu rasmi za mshahara, elimu na matarajio ya ajira.",
          quickCheck: [
            { objective: "O4", q: "Namba katika jedwali lako la kulinganisha zinatoka wapi?", options: ["Jibu la msaidizi wa AI", "Kubahatisha kwa rafiki", "Tangazo la kazi la kampuni moja", "Occupational Outlook Handbook kwenye bls.gov/ooh"], answer: 3, why: "AI inaweza kutengeneza jedwali tupu, lakini namba za mshahara na matarajio zinatoka kwenye takwimu rasmi." },
            { objective: "O4", q: "Kazi moja inalipa zaidi lakini inakua polepole; nyingine inalipa kidogo kidogo lakini inakua haraka. Unafanya nini?", options: ["Chagua mshahara mkubwa zaidi kila wakati", "Linganisha mshahara, matarajio na mafunzo pamoja na jinsi inavyokufaa", "Chagua ile yenye jina fupi zaidi", "Mwache AI akuchagulie"], answer: 1, why: "Kulinganisha safu kadhaa pamoja, na jinsi inavyokufaa, kunaleta uamuzi bora kuliko namba moja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupata mafunzo na mafao yanayoyalipia",
          minutes: 5,
          goal: "Pata chaguo moja la mafunzo kwa kazi uliyochagua na programu moja rasmi inayoweza kusaidia kuyalipia.",
          text: [
            "Programu kadhaa rasmi zinaweza kusaidia. GI Bill inaweza kulipia shule na programu nyingi za mafunzo; GI Bill Comparison Tool ya VA inakusaidia kuzilinganisha. VET TEC 2.0 inalipia baadhi ya mafunzo ya teknolojia ya juu yasiyo ya shahada (kutengeneza programu, data, sayansi ya habari) kwa maveterani na wanajeshi wanaostahili, na nafasi ni chache kila mwaka.",
            "Bado uko jeshini? DoD SkillBridge inawaruhusu wanajeshi kupata mafunzo na mshirika wa sekta binafsi katika siku 180 za mwisho za utumishi, kwa idhini ya kamanda. Uanagenzi unakuruhusu kupata mshahara huku ukijifunza. American Job Centers za Wizara ya Kazi (tafuta kimoja kwenye CareerOneStop) zinawapa maveterani kipaumbele cha huduma kwa mafunzo ya kazi.",
            "Masharti ya kustahili hubadilika. Muombe AI aorodheshe chaguo, kisha thibitisha kila moja kwenye va.gov, dol.gov au kwa mshauri kabla ya kulitegemea. Programu ya VA ya Personalized Career Planning and Guidance inatoa ushauri wa bure kwa maveterani wanaostahili."
          ],
          steps: ["Taja mafunzo ambayo kazi yako inahitaji (cheti, kozi, uanagenzi).", "Kagua chaguo za GI Bill kwa GI Bill Comparison Tool.", "Ikiwa ni kazi ya teknolojia, soma ukurasa wa VET TEC 2.0.", "Bado uko jeshini? Uliza ofisi yako ya kumaliza utumishi kuhusu SkillBridge.", "Thibitisha kustahili kwenye va.gov au kwa mshauri."],
          words: [["GI Bill", "mafao ya elimu ya VA kwa maveterani na wanajeshi."], ["SkillBridge", "programu ya DoD ya kupata mafunzo na mshirika wa sekta binafsi katika siku 180 za mwisho za utumishi."], ["Uanagenzi (apprenticeship)", "kazi yenye mshahara na mafunzo yaliyopangwa, ili upate pesa huku ukijifunza."]],
          slides: [
            { title: "Programu zinazoweza kusaidia", bullets: ["GI Bill na GI Bill Comparison Tool", "VET TEC 2.0 kwa mafunzo ya teknolojia ya juu", "Uanagenzi: pata mshahara huku ukijifunza"] },
            { title: "Bado uko jeshini?", bullets: ["DoD SkillBridge: siku 180 za mwisho za utumishi", "Inahitaji idhini ya kamanda"] },
            { title: "Thibitisha kabla ya kutegemea", bullets: ["Masharti na nafasi hubadilika", "Kagua va.gov na dol.gov", "Ushauri wa bure wa kazi wa VA unaweza kusaidia"] }
          ],
          sources: [
            { name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor VETS: Find a job (SkillBridge, American Job Centers)", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Kwa kazi yako ya kwanza, andika chaguo moja la mafunzo na programu moja inayoweza kusaidia kuyalipia. Fungua ukurasa rasmi wa programu hiyo na uandike sharti moja la kustahili.",
          youCanNow: "kupata mafunzo kwa kazi fulani na programu rasmi inayoweza kusaidia kuyalipia, na kuthibitisha masharti.",
          quickCheck: [
            { objective: "O5", q: "Uanagenzi ni nini?", options: ["Shule inayofundisha mtandaoni tu", "Mkopo unaopaswa kulipa", "Kazi yenye mshahara ambapo unapata mafunzo na pesa wakati mmoja", "Mtihani unaofanya mara moja"], answer: 2, why: "Uanagenzi unakuruhusu kupata mshahara huku ukijifunza." },
            { objective: "O5", q: "Umepata programu inayoweza kulipia mafunzo yako. Unakagua nini kabla ya kuitegemea?", options: ["Sharti moja la kustahili kwenye ukurasa rasmi wa programu", "Kama rafiki aliitumia", "Kama AI ilisema unastahili", "Hakuna; maveterani wote wanastahili"], answer: 0, why: "Masharti ya kustahili yako kwenye ukurasa rasmi; AI na marafiki wanaweza kukosea." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika mpango wako wa kazi wa siku 90",
          minutes: 5,
          goal: "Andika mpango wa siku 90 wenye hatua tatu zenye tarehe kuelekea kazi moja uliyochagua.",
          text: [
            "Unajua jinsi ya kupanga operesheni kwa kurudi nyuma kutoka kwenye lengo. Fanya hivyo hapa pia. Chagua kazi moja kutoka jedwali lako, kisha panga kwa kurudi nyuma: nini lazima kiwe kimetimia baada ya siku 90, siku 60 na siku 30?",
            "Hatua nzuri ni mahususi na zina tarehe: \"Kufikia 15 Novemba: ongea na mtu mmoja anayefanya kazi ya mtaalamu wa ugavi.\" \"Kufikia 1 Desemba: omba nafasi katika programu ya mafunzo.\" \"Kufikia 15 Januari: omba kazi tano.\" Hatua zisizo wazi kama \"nitaangalia\" hazifanyiki.",
            "Msaidizi wa AI anaweza kugeuza maelezo yako kuwa mpango safi na kupendekeza hatua ulizosahau. Wewe unaamua tarehe na mpango ni wako. Mshirikishe mshauri, mlezi (mentor), au mfanyakazi wa TAP au wa American Job Center atakayekufuatilia."
          ],
          steps: ["Chagua kazi moja kutoka jedwali lako la kulinganisha.", "Andika nini lazima kiwe kimetimia baada ya siku 90.", "Panga kwa kurudi nyuma: hatua za siku 60 na siku 30.", "Fanya kila hatua iwe mahususi na yenye tarehe.", "Muombe AI aupange vizuri na apendekeze kilichokosekana.", "Mshirikishe mtu atakayekufuatilia."],
          words: [["Kupanga kwa kurudi nyuma", "kuanza na lengo na kurudi nyuma hadi leo."], ["Hatua muhimu (milestone)", "kituo cha ukaguzi kinachoonyesha uko kwenye njia sahihi."]],
          slides: [
            { title: "Panga kwa kurudi nyuma kutoka kwenye lengo", bullets: ["Siku 90: lengo", "Siku 60 na 30: hatua muhimu", "Leo: hatua ya kwanza"] },
            { title: "Mahususi na yenye tarehe", bullets: ["\"Kufikia 15 Nov: ongea na mtaalamu mmoja wa ugavi\"", "\"Kufikia 1 Des: omba mafunzo\"", "Si: \"nitaangalia\""] },
            { title: "Mpango ni wako", bullets: ["AI inapanga na kupendekeza", "Wewe unaweka tarehe", "Mshirikishe mlezi au mshauri"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa kazi wa ukurasa mmoja wenye kazi tatu, mshahara na matarajio yake kutoka bls.gov/ooh, mapengo yako ya ujuzi, kazi uliyochagua, na hatua tatu zenye tarehe kwa siku 90 zijazo ikiwemo chaguo moja la mafunzo au mafao.",
          youCanNow: "kugeuza utafiti wa kazi kuwa mpango wa siku 90 wenye tarehe unaoweza kuutekeleza.",
          quickCheck: [
            { objective: "O6", q: "Kupanga kwa kurudi nyuma kunamaanisha nini?", options: ["Kufanya hatua zako bila mpangilio", "Kuanza na lengo lako na kurudi nyuma hadi leo", "Kupanga kwa ajili ya wakati uliopita tu", "Kumwacha mtu mwingine aweke tarehe zako"], answer: 1, why: "Kupanga kwa kurudi nyuma kunaanza na lengo na kurudi nyuma hadi hatua unazochukua sasa." },
            { objective: "O6", q: "Ipi ni hatua bora kwa mpango wako wa siku 90?", options: ["\"Kufikiria IT siku moja\"", "\"Kuangalia mambo\"", "\"Kupata kazi nzuri\"", "\"Kufikia 15 Jan: kumaliza sehemu ya 1 ya kozi ya bure ya msaada wa IT\""], answer: 3, why: "Hatua nzuri ni mahususi na ina tarehe unayoweka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuchagua na kupanga njia yako",
        questions: [
          { objective: "O4", q: "Chanzo kipi rasmi kinatoa mshahara wa wastani wa kati na matarajio ya ajira kwa kazi za kiraia?", options: ["Tangazo la kazi", "Occupational Outlook Handbook", "Jibu la kwanza la AI yako", "Kichwa cha habari"], answer: 1, why: "Occupational Outlook Handbook ya Bureau of Labor Statistics inatoa mshahara na matarajio rasmi." },
          { objective: "O4", q: "Mshahara wa wastani wa kati (median) unamaanisha nini?", options: ["Mshahara wa juu kabisa", "Mshahara wa kuanzia", "Sehemu ya katikati: nusu wanapata zaidi, nusu wanapata kidogo", "Mshahara baada ya kodi"], answer: 2, why: "Median ni katikati ya mishahara ya wafanyakazi wote." },
          { objective: "O5", q: "Bado uko jeshini na umebaki na miezi 5. Programu ipi inaweza kukuruhusu kupata mafunzo na kampuni?", options: ["Occupational Outlook Handbook", "Military Crosswalk", "Google Gemini", "DoD SkillBridge"], answer: 3, why: "SkillBridge inawaruhusu wanajeshi kupata mafunzo na mshirika wa sekta binafsi katika siku 180 zao za mwisho." },
          { objective: "O5", q: "AI inasema unastahili mafao ya mafunzo. Unapaswa kufanya nini?", options: ["Thibitisha kwenye va.gov au kwa mshauri", "Jisajili mara moja", "Puuza mafao yote", "Lipa tovuti ikukagulie"], answer: 0, why: "Masharti ya kustahili hubadilika; thibitisha kwa chanzo rasmi." },
          { objective: "O6", q: "Ipi ni hatua bora ya mpango wa siku 90?", options: ["\"Kuangalia kazi\"", "\"Kufikiria mafunzo\"", "\"Kufikia 1 Des: kuomba nafasi katika programu ya mafunzo ya msaada wa IT\"", "\"Siku moja kupata cheti\""], answer: 2, why: "Hatua nzuri ni mahususi na zina tarehe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kazi za Baadaye na Fursa za AI",
    questions: [
      { objective: "O1", q: "AI inaongeza mahitaji ya watu wanaoweza:", options: ["Kuendesha, kulinda, kurekebisha na kusimamia mifumo", "Kuepuka kompyuta", "Kuandika programu peke yake", "Kutofanya chochote"], answer: 0, why: "Kazi nyingi zinazohusiana na AI zinahitaji watu wanaozunguka mifumo, si watengeneza programu peke yao." },
      { objective: "O1", q: "Nyanja ipi inalinda mitandao na data dhidi ya mashambulizi?", options: ["Mnyororo wa ugavi", "Usalama wa mtandao", "Biashara ya rejareja", "Huduma ya chakula"], answer: 1, why: "Usalama wa mtandao unalinda kompyuta, mitandao na data." },
      { objective: "O1", q: "Mtaalamu wa usafirishaji anayeweza kusoma utabiri wa AI kisha akaamua ni:", options: ["Hahitajiki tena", "Amechukuliwa nafasi na utabiri", "Ana thamani zaidi", "Anafaa jeshini peke yake"], answer: 2, why: "Busara juu ya matokeo ya AI ndiyo waajiri wanayoitaka." },
      { objective: "O2", q: "O*NET Military Crosswalk inakuruhusu kutafuta kwa:", options: ["Namba yako ya Social Security", "Benki yako", "Anwani ya nyumbani kwako", "Tawi na msimbo au jina la kazi ya jeshi"], answer: 3, why: "Unachagua tawi lako na kuandika MOS, rating, AFSC au SFSC yako." },
      { objective: "O2", q: "Veterans Job Matcher ya CareerOneStop ina kiungo kutoka:", options: ["Ukurasa wa Find a Job wa Wizara ya Kazi kwa maveterani", "Tangazo linalojitokeza ghafla", "Kikundi cha mitandao ya kijamii", "Jarida la kikosi chako cha zamani"], answer: 0, why: "Ukurasa wa DOL VETS wa Find a Job una kiungo chake." },
      { objective: "O2", q: "Orodha mbili rasmi zisipokubaliana, chaguo zuri ni:", options: ["Kutotumia yoyote", "Kubaki na kazi zinazoonekana katika zote mbili", "Kuchagua kazi ya kwanza kwa mpangilio wa alfabeti", "Kumuuliza mgeni"], answer: 1, why: "Kazi zinazojirudia zinaonyesha ulinganifu wa nguvu." },
      { objective: "O3", q: "Prompt nzuri ya AI ya kuchunguza kazi inauliza:", options: ["Nywila yako", "Mshahara peke yake", "Siku ya kawaida, ujuzi muhimu, ujuzi unaohamishika na njia ya kuingia", "Neno moja"], answer: 2, why: "Maelezo hayo yanakusaidia kuamua kama kazi inakufaa." },
      { objective: "O3", q: "Ni ukweli upi katika jibu la AI kuhusu kazi unaopaswa kuwekea alama ili ukaguliwe?", options: ["Jina la kazi peke yake", "Salamu", "Hakuna", "Mshahara, vyeti na masharti"], answer: 3, why: "Ukweli huo hubadilika na AI inaweza kuukosea." },
      { objective: "O3", q: "\"Njia ya kuingia\" ni:", options: ["Njia ya kawaida watu wanayotumia kuingia katika kazi", "Mlango wa jengo", "Kuingia kwenye tovuti", "Cheo cha jeshi"], answer: 0, why: "Ni njia ya mafunzo, cheti, uanagenzi au shahada ya kuingia katika kazi." },
      { objective: "O4", q: "Occupational Outlook Handbook inachapishwa na:", options: ["Kampuni ya AI", "Bureau of Labor Statistics", "Tovuti binafsi ya matangazo ya kazi", "VA"], answer: 1, why: "Ni rasilimali ya Bureau of Labor Statistics." },
      { objective: "O4", q: "Matarajio ya ajira yanakuambia:", options: ["Mshahara wako kamili", "Ofisi iko wapi", "Kiasi ambacho idadi ya kazi inatarajiwa kukua au kupungua", "Nani atakuajiri"], answer: 2, why: "Matarajio ni mabadiliko yanayotabiriwa katika idadi ya kazi." },
      { objective: "O4", q: "Kwa nini utumie mshahara wa wastani wa kati kulinganisha, si kama ahadi?", options: ["Siku zote uko juu mno", "Umebuniwa", "Unahesabu maafisa peke yao", "Mshahara hubadilika kulingana na mahali na mtu"], answer: 3, why: "Median ni sehemu ya katikati; mshahara wako unategemea mahali na uzoefu." },
      { objective: "O5", q: "Pengo la ujuzi ni:", options: ["Ujuzi au vyeti ambavyo bado unahitaji kwa kazi fulani", "Pengo katika tarehe za CV yako", "Mapumziko kati ya kazi", "Cheo cha jeshi"], answer: 0, why: "Linaonyesha kile ambacho bado unahitaji kujifunza au kupata." },
      { objective: "O5", q: "Zana ipi ya VA inakusaidia kulinganisha shule na programu kwa matumizi ya GI Bill?", options: ["O*NET Crosswalk", "GI Bill Comparison Tool", "SkillBridge", "TAP"], answer: 1, why: "GI Bill Comparison Tool ya VA inasaidia kulinganisha chaguo." },
      { objective: "O5", q: "VET TEC 2.0 inalipia:", options: ["Matengenezo ya nyumba", "Mikopo ya magari", "Baadhi ya mafunzo ya teknolojia ya juu yasiyo ya shahada kwa maveterani wanaostahili", "Shahada yoyote ya chuo"], answer: 2, why: "VET TEC 2.0 inalipia baadhi ya programu za teknolojia zisizo za shahada." },
      { objective: "O5", q: "Uanagenzi unakuruhusu:", options: ["Kuruka mafunzo yote", "Kuepuka kufanya kazi", "Kupata shahada kwa usiku mmoja", "Kupata mshahara huku ukijifunza"], answer: 3, why: "Wanagenzi wanalipwa wakati wanapata mafunzo." },
      { objective: "O5", q: "Maveterani wanaweza kupata kipaumbele cha huduma kwa mafunzo ya kazi wapi?", options: ["American Job Centers", "Mitandao ya kijamii", "Duka la kuuza magari", "Duka la michezo ya video"], answer: 0, why: "Wizara ya Kazi inawapa maveterani kipaumbele cha huduma katika American Job Centers." },
      { objective: "O6", q: "Kupanga kwa kurudi nyuma kunamaanisha:", options: ["Kufanya kazi bila mpangilio", "Kuanza na lengo na kurudi nyuma hadi leo", "Kupanga kwa ajili ya leo tu", "Kutoweka tarehe kamwe"], answer: 1, why: "Unapanga kutoka kwenye lengo kurudi nyuma, kama katika kupanga operesheni." },
      { objective: "O6", q: "Katika mpango wako wa siku 90, nani anaweka tarehe?", options: ["AI", "Mwajiri", "Wewe", "Hakuna mtu"], answer: 2, why: "AI inaweza kupanga na kupendekeza; mpango ni wako." },
      { objective: "O6", q: "Kwa nini umshirikishe mlezi au mshauri mpango wako?", options: ["Ili wakufanyie", "Ili upate pesa", "Inahitajika kisheria", "Ili mtu akufuatilie na akuweke kwenye njia"], answer: 3, why: "Kuwa na mtu wa kukufuatilia kunakusaidia kumaliza ulichopanga." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 7, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kulinganisha kazi", objective: "O2", notYet: "Kazi zilibahatishwa au zilitoka katika jibu la AI pekee.", meets: "Kazi tatu zinazolingana na kazi ya jeshi, zilizopatikana katika O*NET Military Crosswalk au CareerOneStop.", exceeds: "Mwanafunzi anaweza kusema ujuzi upi kutoka utumishi unafaa kila kazi." },
      { name: "Takwimu rasmi", objective: "O4", notYet: "Mshahara au matarajio ya ajira hayapo au yalinakiliwa kutoka AI.", meets: "Kila kazi ina mshahara wa wastani wa kati na matarajio ya ajira kutoka bls.gov/ooh.", exceeds: "Elimu ya kuingilia pia imeorodheshwa, na mwanafunzi anaeleza kazi ipi inashinda na kwa nini." },
      { name: "Mapengo ya ujuzi", objective: "O3", notYet: "Hakuna pengo la ujuzi lililoorodheshwa, au haliko wazi.", meets: "Kila kazi inaorodhesha ujuzi au cheti ambacho bado kinahitajika.", exceeds: "Kila pengo limekaguliwa kwa chanzo rasmi au cha mwajiri." },
      { name: "Mafunzo au mafao", objective: "O5", notYet: "Hakuna chaguo la mafunzo au mafao, au lilitoka AI pekee.", meets: "Chaguo moja la mafunzo na programu moja inayoweza kusaidia kulipia, na sharti moja la kustahili kutoka ukurasa wake rasmi.", exceeds: "Mwanafunzi pia anataja nani wa kumuuliza ili kuthibitisha kustahili, kama mshauri wa VA." },
      { name: "Mpango wa siku 90", objective: "O6", notYet: "Hatua haziko wazi au hazina tarehe.", meets: "Hatua tatu mahususi zenye tarehe kuelekea kazi moja iliyochaguliwa.", exceeds: "Mpango unamtaja mlezi au mshauri atakayefuatilia maendeleo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaokamilisha angalau hatua moja ya mpango wao wa siku 90 ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaojiandikisha katika mafunzo, uanagenzi au SkillBridge ndani ya siku 90",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya maveterani ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tovuti za bure za O*NET Military Crosswalk, CareerOneStop, bls.gov/ooh na va.gov",
      "Karatasi, app ya maelezo au spreadsheet kwa jedwali la kulinganisha na mpango wa ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika darasa la kumaliza utumishi au kituo cha maveterani: fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi, na kazi za \"Jaribu sasa\" zifanywe papo hapo.",
      "Wanafunzi wajaze namba za jedwali la kulinganisha wenyewe kutoka bls.gov/ooh; usikubali namba za AI.",
      "Mwalike mshauri wa VA, wa American Job Center au wa TAP kwenye kipindi cha mwisho kukagua mipango na maswali ya kustahili.",
      "Pima mpango wa mwisho kwa rubriki, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja.",
      "Wakumbushe wanafunzi wasiweke namba za Social Security, za faili ya VA wala za utumishi katika prompt yoyote ya AI."
    ]
  }
};
