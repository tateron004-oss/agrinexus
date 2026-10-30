"use strict";

// Koach Learn course (Swahili translation of shared/ai-remote-work.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-remote-work-sw",
  lang: "sw",
  translationOf: "ai-remote-work",
  category: "Re-Entry",
  name: "Ujuzi wa Kufanya Kazi kwa Mbali kwa Msaada wa AI",
  skills: "Kuandaa mahali pa kazi nyumbani, Kujiunga na kuendesha simu za video, Kuandika ujumbe wa kazi ulio wazi kwa msaada wa AI, Kufanya kazi katika nyaraka za pamoja, Kusimamia muda wako mwenyewe, Kupata kazi halisi za mbali na kuepuka ulaghai",
  outcome: "kujiandaa kufanya kazi ukiwa nyumbani, kujiunga na simu ya video kwa njia ya kitaalamu, kuandika taarifa na ujumbe ulio wazi kwa msaada wa AI, kushirikiana katika nyaraka ya pamoja, kupanga siku yako ya kazi, na kutofautisha kazi halisi ya mbali na ulaghai.",
  about: [
    "Kazi nyingi sasa zinaruhusu watu kufanya kazi nyumbani kwa muda wote au kwa sehemu ya muda: huduma kwa wateja, kuingiza data, kupanga ratiba, msaidizi wa mtandaoni, mauzo, kufundisha na msaada wa kiufundi. Kazi ya mbali inaweza kufungua milango wakati usafiri, malezi ya watoto, ulemavu au mahali unapoishi vinafanya safari ya kwenda kazini kuwa ngumu.",
    "Kufanya kazi kwa mbali kunahitaji ujuzi wake: kuandika kwa uwazi, simu za video, nyaraka za pamoja, kusimamia muda wako mwenyewe na kuwa salama mtandaoni. Wasaidizi wa AI kama ChatGPT, Microsoft Copilot na Google Gemini wanaweza kusaidia katika mengi ya hayo.",
    "Kozi hii ni kwa watu wanaorudi nyumbani kutoka gerezani, watafuta kazi katika programu za ajira, na wanajamii ambao hawana kazi karibu nao. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza kifurushi cha kujiandaa kwa kazi ya mbali: picha au orodha ya kukagua ya mahali pako pa kazi, rekodi ya dakika moja au orodha ya kukagua ya jaribio la simu ya video, ujumbe mitatu wa kazi ulioandikwa kwa msaada wa AI (taarifa ya maendeleo, swali kwa msimamizi, na ujumbe wa \"Nitachelewa\"), nyaraka ya pamoja uliyoihariri kwa maoni na pendekezo la badiliko, mpango wa siku moja wa vipindi vya muda, na tangazo moja halisi la kazi ya mbali ulilolikagua dhidi ya dalili za ulaghai.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaopenda kazi za mbali kama huduma kwa wateja, kuingiza data, msaada wa ofisi au kazi ya kituo cha simu, mara nyingi kwa sababu ya usafiri, ratiba au mahitaji ya familia.",
    startingPoint: "Wanaweza kupiga simu na kutuma ujumbe mfupi kwenye simu; baadhi wana akaunti ya barua pepe na wamewahi kujaribu msaidizi wa AI. Wengi hawajawahi kutumia zana za mikutano ya video, programu za ujumbe za kazini au nyaraka za pamoja, na huenda bado hawana kompyuta au intaneti nyumbani.",
    gap: "Kazi za mbali zinaweza kuongeza nafasi za kazi kwa watu wasio na gari au wenye majukumu ya familia, lakini zinahitaji teknolojia inayoaminika, kuandika kwa uwazi, kusimamia muda wako mwenyewe na uwezo wa kutambua ulaghai mwingi wa kazi za nyumbani. Wanafunzi wanahitaji ujuzi huu wa msingi wa kazi ya mbali ili waombe kazi kwa kujiamini na kuidumisha kazi ya mbali.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: huenda wana simu tu au kompyuta ya maktaba; kazi nyingi za mbali zinahitaji kompyuta na intaneti nyumbani",
      "Muda: masomo ya dakika 5 yanayoingia kati ya miadi na kazi",
      "Masharti ya baadhi ya parole au probation yanazuia matumizi ya intaneti; wanafunzi wanafuata masharti yao wenyewe",
      "Hatari kubwa ya ulaghai na faragha: hakuna namba za benki wala za Social Security zinazotolewa kabla ya ofa ya kazi iliyothibitishwa"
    ],
    prerequisites: "Hakuna. Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" ni mwanzo mzuri kwa wanafunzi ambao ni wapya kwa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiwa nyumbani au mahali unapopanga kufanyia kazi", action: "kuandaa mahali pa kazi na kukagua intaneti, vifaa vya kusikilizia na usalama wa akaunti yako", standard: "ukiwa umefanya jaribio la kasi, umewasha kuingia kwa hatua mbili na umeweka kufunga skrini" },
    { id: "O2", condition: "Ukipewa kiungo cha mkutano", action: "kujiunga na simu ya video na kutumia kunyamazisha sauti, kamera, chat na kushiriki skrini", standard: "ukijiunga mapema na kutatua tatizo la sauti bila msaada" },
    { id: "O3", condition: "Ukipewa hali ya kazini", action: "kuandika ujumbe mfupi wa kazi ulio wazi kwa msaada wa AI", standard: "ukianza na hoja kuu, ukisema unachohitaji na lini, bila data ya wateja katika zana za AI zisizoidhinishwa" },
    { id: "O4", condition: "Ukipewa kiungo cha nyaraka ya pamoja", action: "kuongeza maoni, kufanya pendekezo la badiliko na kufungua historia ya matoleo", standard: "bila kubadilisha mipangilio ya kushiriki" },
    { id: "O5", condition: "Ukipewa orodha ya kazi za siku moja", action: "kutengeneza mpango wa vipindi vya muda wenye saa za kuanza, mapumziko na kumaliza", standard: "unaoendana na maisha yako halisi na unaoishia na taarifa ya maendeleo" },
    { id: "O6", condition: "Ukipewa tangazo la kazi ya mbali", action: "kukagua kama kazi ni halisi au ni ulaghai wa kazi ya nyumbani", standard: "ukitumia kila dalili ya hatari kabla ya kutoa namba zozote za binafsi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa kufanya kazi kwa mbali",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mahali pako pa kazi nyumbani na misingi ya teknolojia",
          minutes: 5,
          goal: "Andaa mahali pa kazi na hakikisha teknolojia yako iko tayari kwa kazi ya mbali.",
          text: [
            "Unahitaji intaneti inayoaminika, kompyuta (kazi nyingi haziruhusu kufanya kazi kwa simu tu), vifaa vya kusikilizia (headset) au earbuds zenye maikrofoni, na mahali tulivu. Meza ndogo karibu na ukuta inafaa. Mwanga mzuri mbele yako, si nyuma yako, unasaidia kwenye kamera.",
            "Kagua intaneti yako kwa jaribio la kasi la bure kabla ya kuomba kazi. Ikiwa ni ya polepole au huna intaneti nyumbani, uliza maktaba yako, programu ya ajira au kampuni ya intaneti kuhusu njia za gharama nafuu; baadhi ya programu hubadilika, kwa hiyo kagua kinachopatikana mahali unapoishi.",
            "Linda akaunti za kazi kama zako mwenyewe: nywila ndefu (passphrase), kuingia kwa hatua mbili, masasisho ya programu, na usifanye kazi kwenye kompyuta za umma isipokuwa mwajiri wako anaruhusu. Funga skrini yako unapoondoka."
          ],
          steps: ["Chagua mahali tulivu penye meza na mwanga mzuri mbele yako.", "Pata headset au earbuds zenye maikrofoni.", "Fanya jaribio la bure la kasi ya intaneti.", "Washa masasisho, kuingia kwa hatua mbili na kufunga skrini.", "Uliza kuhusu intaneti ya gharama nafuu ukiihitaji."],
          words: [["Kazi ya mbali", "kufanya kazi yako ukiwa nyumbani au mahali pengine nje ya ofisi ya mwajiri."], ["Headset", "vifaa vya kusikilizia masikioni vyenye maikrofoni."], ["Bandwidth", "kiasi cha data ambacho intaneti yako inaweza kubeba; zaidi ni bora kwa video."]],
          slides: [
            { title: "Unachohitaji", bullets: ["Intaneti inayoaminika na kompyuta", "Headset yenye maikrofoni", "Mahali tulivu penye meza"] },
            { title: "Onekana na usikike vizuri", bullets: ["Mwanga mbele yako, si nyuma", "Mazingira tulivu nyuma yako"] },
            { title: "Kaa salama", bullets: ["Nywila ndefu na kuingia kwa hatua mbili", "Masasisho yamewashwa", "Funga skrini unapoondoka"] }
          ],
          tryIt: "Andaa mahali pako pa kazi, fanya jaribio la kasi ya intaneti, na andika orodha ya kukagua ya ulichonacho na unachohitaji bado.",
          youCanNow: "kuandaa mahali pa kazi nyumbani palipo salama na panapofaa.",
          quickCheck: [
            { objective: "O1", q: "Ni kifaa gani kazi nyingi za mbali zinahitaji pamoja na intaneti?", options: ["Tableti tu", "Saa janja", "Kompyuta, si simu tu", "Printa"], answer: 2, why: "Kazi nyingi za mbali haziruhusu kufanya kazi kwa simu tu, kwa hiyo unahitaji kompyuta." },
            { objective: "O1", q: "Jaribio lako la kasi linaonyesha intaneti ni ya polepole na unataka kuomba kazi za mbali. Unafanya nini?", options: ["Uliza maktaba yako, programu ya ajira au kampuni ya intaneti kuhusu njia za gharama nafuu", "Omba hivyo hivyo na utumaini itafanya kazi", "Tumia Wi-Fi ya mtu usiyemjua bila kuomba", "Acha kabisa kazi ya mbali"], answer: 0, why: "Maktaba, programu za ajira na kampuni za intaneti huenda zinajua njia za intaneti ya gharama nafuu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujiunga na kuendesha simu za video",
          minutes: 5,
          goal: "Jiunge na simu ya video kwa njia ya kitaalamu na utatue matatizo ya kawaida.",
          text: [
            "Kazi nyingi za mbali zinatumia zana za video kama Zoom, Microsoft Teams au Google Meet. Kwa kawaida unajiunga kwa kubofya kiungo katika barua pepe au mwaliko wa kalenda. Jiunge dakika mbili au tatu mapema ili kutatua matatizo yoyote.",
            "Jua vidhibiti vya msingi: kunyamazisha sauti na kuirudisha (mute na unmute), kuwasha na kuzima kamera, kushiriki skrini yako, na kutumia chat. Kaa ukiwa umenyamazisha sauti wakati huongei. Angalia kamera unapoongea, na tumia jina lako kama jina linaloonyeshwa.",
            "Kitu kikiharibika: hakikisha maikrofoni na spika sahihi zimechaguliwa katika mipangilio, toka na ujiunge tena, au piga simu kujiunga ikiwa mwaliko una namba. Mwambie mwenyeji (host) kwenye chat. Zana nyingi pia zina maandishi ya moja kwa moja (captions) na muhtasari wa mkutano unaotengenezwa na AI; fuata sheria za mwajiri wako kuhusu kuvitumia."
          ],
          steps: ["Bofya kiungo cha mkutano dakika mbili au tatu mapema.", "Kagua jina linaloonyeshwa, kamera na maikrofoni.", "Kaa umenyamazisha sauti wakati huongei.", "Tumia chat kusema kama una matatizo.", "Sauti ikishindwa, kagua mipangilio ya kifaa au jiunge tena."],
          words: [["Mute", "kuzima maikrofoni yako ili wengine wasikusikie."], ["Kushiriki skrini", "kuwaonyesha wengine kwenye simu skrini ya kompyuta yako."], ["Captions", "maandishi kwenye skrini yanayoonyesha watu wanachosema."]],
          slides: [
            { title: "Jiunge vizuri", bullets: ["Bofya kiungo dakika 2-3 mapema", "Tumia jina lako halisi", "Kagua kamera na maikrofoni"] },
            { title: "Vidhibiti vya msingi", bullets: ["Mute na unmute", "Kamera kuwasha na kuzima", "Kushiriki skrini na chat"] },
            { title: "Kitu kikiharibika", bullets: ["Kagua mipangilio ya kifaa", "Toka na ujiunge tena", "Mwambie mwenyeji kwenye chat"] }
          ],
          tryIt: "Anzisha mkutano wa majaribio wa bure na rafiki, mwanafamilia au wewe peke yako kwenye Zoom, Teams au Google Meet. Fanya mazoezi ya mute, kamera, chat na kushiriki skrini.",
          youCanNow: "kujiunga na kushiriki katika simu ya video kwa njia ya kitaalamu na kutatua matatizo ya kawaida.",
          quickCheck: [
            { objective: "O2", q: "Kushiriki skrini kunafanya nini kwenye simu ya video?", options: ["Kunanyamazisha kila mtu", "Kunarekodi mkutano", "Kunazima kamera yako", "Kunawaonyesha wengine kwenye simu skrini ya kompyuta yako"], answer: 3, why: "Kushiriki skrini kunawaonyesha watu wengine kwenye simu skrini yako." },
            { objective: "O2", q: "Sauti yako inaacha kufanya kazi katika mkutano wa timu. Unafanya nini?", options: ["Toka bila kusema chochote", "Mwambie mwenyeji kwenye chat, kagua mipangilio ya kifaa chako au jiunge tena", "Piga kelele zaidi", "Zima kompyuta yako"], answer: 1, why: "Tumia chat kumwambia mwenyeji, kisha kagua mipangilio, jiunge tena au piga simu kujiunga." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika ujumbe wa kazi ulio wazi kwa msaada wa AI",
          minutes: 5,
          goal: "Andika ujumbe mfupi, ulio wazi na wa kitaalamu kwa msaada wa AI.",
          text: [
            "Katika kazi ya mbali, mawasiliano mengi ni ya maandishi: chat (kama Teams au Slack) na barua pepe. Kuandika kwa uwazi ndio ujuzi mkuu wa kazi ya mbali. Anza na hoja kuu, uwe mfupi, na sema unachohitaji na lini.",
            "AI inaweza kusaidia: \"Geuza hiki kiwe ujumbe mfupi wa adabu kwa msimamizi wangu: Nimemaliza rekodi 40 za wateja, 3 hazikuwa na namba za simu, niwapigie au niziruke?\" Kisha hakikisha unasikika kama wewe na si rasmi kupita kiasi.",
            "Aina za ujumbe zenye manufaa: taarifa ya maendeleo ya kila siku (nimemaliza, ninafuata, kinachonizuia), swali lililo wazi, na taarifa ya mapema unapochelewa au unapougua. Usibandike kamwe data ya wateja, nywila au siri za kampuni katika zana ya AI ambayo mwajiri wako hajaiidhinisha."
          ],
          steps: ["Anza na hoja kuu.", "Sema unachohitaji na lini.", "Omba AI iufanye mfupi na wa adabu.", "Hakikisha unasikika kama wewe.", "Weka data ya wateja na ya kampuni nje ya zana za AI zisizoidhinishwa."],
          words: [["Taarifa ya maendeleo", "ujumbe mfupi kuhusu ulichofanya, kinachofuata na matatizo yoyote."], ["App ya chat", "zana ya ujumbe ya kazini kama Microsoft Teams au Slack."]],
          slides: [
            { title: "Kuandika ndio ujuzi mkuu wa kazi ya mbali", bullets: ["Anza na hoja kuu", "Mfupi na wazi", "Unachohitaji na lini"] },
            { title: "Ujumbe mitatu muhimu", bullets: ["Maendeleo: nimemaliza, ninafuata, kinachonizuia", "Swali lililo wazi", "Taarifa ya mapema ya kuchelewa au kuugua"] },
            { title: "AI inasaidia, kwa usalama", bullets: ["Ufanye mfupi na wa adabu", "Hakikisha unasikika kama wewe", "Hakuna data ya kampuni katika zana zisizoidhinishwa"] }
          ],
          tryIt: "Kwa msaada wa AI, andika ujumbe mitatu: taarifa ya maendeleo, swali kwa msimamizi, na ujumbe wa \"Nitachelewa dakika 15\". Hariri kila mmoja usikike kama wewe.",
          youCanNow: "kuandika ujumbe wa kazi ulio wazi na mfupi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O3", q: "Ni mambo gani matatu yanayoingia katika taarifa ya maendeleo ya kila siku?", options: ["Chakula chako cha mchana, hisia zako na hali ya hewa", "Ulichofanya, kinachofuata na chochote kinachokuzuia", "Kila barua pepe uliyosoma", "Nywila yako na saa ya kuingia"], answer: 1, why: "Taarifa ya maendeleo inasema kilichomalizika, kinachofuata na kinachozuia." },
            { objective: "O3", q: "Unataka AI ikusaidie kuandika ujumbe kuhusu malalamiko ya mteja. Unaacha nini nje?", options: ["Hoja kuu", "Unachohitaji kutoka kwa msimamizi wako", "Lini unahitaji jibu", "Jina na namba ya simu ya mteja"], answer: 3, why: "Usibandike kamwe data ya wateja katika zana ya AI ambayo mwajiri wako hajaiidhinisha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa kufanya kazi kwa mbali",
        questions: [
          { objective: "O1", q: "Mwanga unapaswa kuwa wapi kwa simu za video?", options: ["Nyuma yako", "Hakuna mahali", "Mbele yako", "Chini ya meza"], answer: 2, why: "Mwanga mbele yako unafanya uso wako uonekane." },
          { objective: "O1", q: "Unapaswa kufanya nini unapoondoka kwenye kompyuta yako ya kazi?", options: ["Funga skrini", "Iache wazi", "Weka nywila yako hadharani", "Zima intaneti"], answer: 0, why: "Kufunga skrini kunalinda data ya kazi." },
          { objective: "O2", q: "Unapaswa kujiunga na mkutano wa video lini?", options: ["Dakika kumi baadaye", "Ukikumbushwa mara mbili tu", "Kamwe", "Dakika mbili au tatu mapema"], answer: 3, why: "Kujiunga mapema kunakupa muda wa kutatua matatizo." },
          { objective: "O2", q: "Wengine hawakusikii kwenye simu. Unakagua nini kwanza?", options: ["Sanduku lako la barua pepe", "Kwamba hujanyamazisha sauti na maikrofoni sahihi imechaguliwa", "Mwangaza wa skrini yako", "Hali ya hewa"], answer: 1, why: "Mute na mipangilio ya kifaa husababisha matatizo mengi ya sauti." },
          { objective: "O3", q: "Taarifa nzuri ya maendeleo ni ipi?", options: ["Hadithi ndefu kuhusu wikendi yako", "Nilichofanya, kinachofuata, na chochote kinachonizuia", "Hakuna kitu", "Emoji tu"], answer: 1, why: "Taarifa za maendeleo zinaifahamisha timu." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi vizuri na kupata kazi za mbali",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kufanya kazi katika nyaraka za pamoja",
          minutes: 5,
          goal: "Hariri, toa maoni na pendekeza mabadiliko katika nyaraka ya pamoja.",
          text: [
            "Timu za mbali zinafanya kazi katika nyaraka moja kwa wakati mmoja zikitumia Google Docs, Google Sheets au Microsoft 365 (Word, Excel) mtandaoni. Unaifungua kutoka kiungo kilichoshirikiwa na unaweza kuona mabadiliko ya wengine wanapoandika.",
            "Jifunze hatua tatu. Maoni (comment): chagua maandishi na uongeze maoni ili kuuliza au kupendekeza bila kuyabadilisha. Pendekeza: Google Docs ina Suggesting mode na Word ina Track Changes, kwa hiyo mabadiliko yako yanaonekana ili wengine wayakubali. Historia ya matoleo (version history) inakuruhusu kuona au kurudisha matoleo ya awali.",
            "Kuwa mwangalifu na mipangilio ya kushiriki: shiriki tu na watu wanaoihitaji, na usibadilishe mipangilio ya \"anyone with the link\" (yeyote mwenye kiungo) bila kuuliza. Zana nyingi zina AI ndani yake (kama Gemini katika Google Workspace au Copilot katika Microsoft 365) ikiwa mwajiri wako ameiwasha."
          ],
          steps: ["Fungua nyaraka ya pamoja kutoka kiungo chake.", "Chagua maandishi na uongeze maoni.", "Washa Suggesting mode (Google Docs) au Track Changes (Word) na ufanye badiliko.", "Fungua historia ya matoleo kuona matoleo ya awali.", "Kagua mipangilio ya kushiriki kabla ya kushiriki zaidi."],
          words: [["Nyaraka ya pamoja", "faili ambalo watu kadhaa wanaweza kulifungua na kulihariri mtandaoni."], ["Maoni", "dokezo lililowekwa kwenye sehemu ya nyaraka."], ["Historia ya matoleo", "kumbukumbu ya matoleo ya awali ya faili ambayo unaweza kuona au kurudisha."]],
          slides: [
            { title: "Fanyeni kazi pamoja mtandaoni", bullets: ["Google Docs na Sheets", "Microsoft 365 Word na Excel mtandaoni", "Ona mabadiliko wengine wanapoandika"] },
            { title: "Hatua tatu", bullets: ["Maoni (comment)", "Suggesting au Track Changes", "Historia ya matoleo"] },
            { title: "Shiriki kwa uangalifu", bullets: ["Watu wanaoihitaji tu", "Uliza kabla ya kubadilisha mipangilio ya kiungo"] }
          ],
          tryIt: "Tengeneza nyaraka ya Google Doc au Word mtandaoni, ishiriki na mtu unayemwamini, na fanyeni mazoezi pamoja ya maoni, pendekezo la badiliko na kuangalia historia ya matoleo.",
          youCanNow: "kushirikiana katika nyaraka ya pamoja kwa maoni, mapendekezo na historia ya matoleo.",
          quickCheck: [
            { objective: "O4", q: "Track Changes inafanya nini katika Word?", options: ["Inaonyesha mabadiliko yako ili wengine wayakague na kuyakubali", "Inafuta matoleo ya zamani", "Inashiriki faili na kila mtu", "Inahesabu maneno"], answer: 0, why: "Track Changes inaonyesha mabadiliko ili wengine wayakubali, kama Suggesting mode katika Google Docs." },
            { objective: "O4", q: "Mwenzako wa timu anakuomba ushiriki nyaraka ya timu na rafiki aliye nje ya kampuni. Unafanya nini?", options: ["Ibadilishe iwe \"anyone with the link\"", "Tuma kiungo mara moja", "Uliza mmiliki wa nyaraka kabla ya kushiriki zaidi", "Nakili nyaraka nzima katika barua pepe"], answer: 2, why: "Shiriki tu na watu wanaoihitaji, na uliza kabla ya kubadilisha mipangilio ya kushiriki." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusimamia muda wako mwenyewe",
          minutes: 5,
          goal: "Panga siku ya kazi ya mbali kwa vipindi vya muda na saa wazi za kuanza na kumaliza.",
          text: [
            "Nyumbani, hakuna mtu anayepita karibu na meza yako. Wewe unasimamia muda wako mwenyewe. Weka saa ya kawaida ya kuanza, mapumziko na saa ya kumaliza, na waambie unaoishi nao wakati unafanya kazi.",
            "Kupanga kwa vipindi vya muda (time-blocking) kunasaidia: gawanya siku katika vipindi vya kazi ya umakini, ujumbe, mikutano na mapumziko. Uliza AI: \"Nitengenezee mpango wa vipindi vya muda kwa siku yangu ya kazi kuanzia saa 9 hadi 5 (9 to 5) na mapumziko ya mchana ya dakika 30. Kazi: [orodha]. Weka kazi ya umakini asubuhi na ukague ujumbe kwa nyakati maalum.\"",
            "Fuatilia unachomaliza. Mwishoni mwa siku, andika taarifa fupi ya maendeleo. Ikiwa unapata shida na vikengeushi, malezi ya watoto au afya, mwambie msimamizi wako mapema; wengi wana njia za kusaidia wakijua."
          ],
          steps: ["Weka saa za kuanza, mapumziko na kumaliza.", "Orodhesha kazi za leo.", "Omba AI mpango wa vipindi vya muda.", "Urekebishe uendane na maisha yako halisi.", "Maliza siku kwa taarifa fupi ya maendeleo."],
          words: [["Time-blocking", "kupanga siku yako katika vipindi vya muda kwa kazi maalum."], ["Kazi ya umakini", "kazi inayofanywa bila kukatizwa."]],
          slides: [
            { title: "Wewe unasimamia muda wako", bullets: ["Kuanza, mapumziko na kumaliza kwa kawaida", "Waambie wa nyumbani saa zako za kazi"] },
            { title: "Vipindi vya muda", bullets: ["Kazi ya umakini, ujumbe, mikutano, mapumziko", "AI inaweza kuandaa rasimu ya mpango"] },
            { title: "Endelea kwenye njia", bullets: ["Taarifa ya maendeleo mwishoni mwa siku", "Mwambie msimamizi mapema kuhusu matatizo"] }
          ],
          tryIt: "Omba AI mpango wa vipindi vya muda kwa siku halisi au ya mazoezi ya kazi, urekebishe, na uufuate angalau kwa nusu siku. Andika taarifa fupi ya mwisho wa siku.",
          youCanNow: "kupanga na kusimamia siku ya kazi ya mbali kwa vipindi vya muda.",
          quickCheck: [
            { objective: "O5", q: "Kipindi cha muda (time block) ni nini?", options: ["Kompyuta iliyoharibika", "Mkutano unaouruka", "Sehemu maalum ya siku kwa aina moja ya kazi", "Aina ya nywila"], answer: 2, why: "Time-blocking inagawanya siku katika vipindi vya kazi ya umakini, ujumbe, mikutano na mapumziko." },
            { objective: "O5", q: "Mpango wa AI unaweka kazi ya umakini saa 3 mchana (3 pm), wakati watoto wako wanarudi kutoka shuleni. Unafanya nini?", options: ["Hamishia kazi ya umakini wakati tulivu zaidi unaoendana na maisha yako halisi", "Ufuate kama ulivyo", "Ruka kazi ya umakini", "Fanya kazi hadi usiku wa manane badala yake"], answer: 0, why: "Rekebisha mpango wa AI uendane na maisha yako halisi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupata kazi halisi za mbali na kuepuka ulaghai",
          minutes: 6,
          goal: "Tafuta kazi za mbali kwenye vyanzo vinavyoaminika na utambue ulaghai wa kazi za nyumbani.",
          text: [
            "Tafuta mahali panapoaminika: kurasa za ajira za kampuni, tovuti za kazi zinazojulikana, benki ya kazi ya jimbo lako (state job bank) na American Job Center (kituo cha ajira cha serikali ya Marekani) kilicho karibu nawe. Tumia kichujio cha \"remote\" na usome kazi inaruhusu uishi wapi; baadhi ya kazi za mbali ni kwa majimbo au nchi fulani tu.",
            "Ulaghai wa kazi za nyumbani ni wa kawaida. FTC (Tume ya Biashara ya Shirikisho ya Marekani) inaonya kuhusu ahadi za malipo makubwa kwa kazi kidogo, kuombwa kulipia vifaa vya kuanzia, mafunzo au vyeti, kutumiwa hundi uiweke benki na urudishe sehemu yake, na kusafirisha tena vifurushi. Waajiri waaminifu hawakutozi pesa ili upate kazi.",
            "Kagua kabla ya kushiriki: itafute kampuni wewe mwenyewe, hakikisha barua pepe inatoka kwenye domain halisi ya kampuni (si anwani ya barua pepe ya bure), na kuwa na tahadhari na mahojiano yanayofanywa kwa chat ya maandishi tu. Usitoe namba za benki wala za Social Security hadi uwe na ofa ya kazi iliyothibitishwa. Ripoti ulaghai kwenye ReportFraud.ftc.gov."
          ],
          steps: ["Tafuta kwenye vyanzo vya kazi vinavyoaminika ukitumia kichujio cha remote.", "Kagua kazi inaruhusu uishi wapi.", "Itafute kampuni wewe mwenyewe.", "Angalia ada, hundi za kuweka benki, kusafirisha tena vifurushi na mahojiano ya maandishi tu.", "Toa namba za binafsi tu baada ya ofa iliyothibitishwa."],
          words: [["Ulaghai wa kazi ya nyumbani", "kazi ya mbali ya uongo inayolenga kuiba pesa au taarifa."], ["Domain", "sehemu ya anwani ya barua pepe au tovuti baada ya @ au www, kama company.com."]],
          slides: [
            { title: "Wapi pa kutafuta", bullets: ["Kurasa za ajira za kampuni na tovuti za kazi zinazojulikana", "Benki ya kazi ya jimbo na American Job Centers", "Kagua kazi inaruhusu uishi wapi"] },
            { title: "Dalili za ulaghai (FTC)", bullets: ["Malipo makubwa kwa kazi kidogo", "Kulipia vifaa, mafunzo au vyeti", "Weka hundi benki na urudishe pesa"] },
            { title: "Kagua kabla ya kushiriki", bullets: ["Itafute kampuni wewe mwenyewe", "Domain halisi ya barua pepe ya kampuni", "Namba za binafsi tu baada ya ofa iliyothibitishwa"] }
          ],
          sources: [{ name: "FTC: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Kazi ya mwisho: tafuta tangazo moja halisi la kazi ya mbali, likague dhidi ya dalili za ulaghai, na ulihifadhi. Liongeze kwenye orodha ya kukagua ya mahali pa kazi, jaribio la simu ya video, ujumbe mitatu, mazoezi ya nyaraka ya pamoja na mpango wa vipindi vya muda ili kukamilisha kifurushi chako cha kujiandaa kwa kazi ya mbali.",
          youCanNow: "kujiandaa, kuwasiliana, kushirikiana na kusimamia muda kwa kazi ya mbali, na kupata kazi halisi za mbali kwa usalama.",
          quickCheck: [
            { objective: "O6", q: "Ni ipi dalili ya hatari ya ulaghai wa kazi ya nyumbani?", options: ["Tangazo la kazi linataja mahali unaporuhusiwa kuishi", "Mwajiri anatuma barua pepe kutoka domain ya kampuni yenyewe", "Kampuni ina ukurasa wa ajira", "Lazima ulipie vifaa vya kuanzia kabla ya kuanza"], answer: 3, why: "Waajiri waaminifu hawakutozi pesa ili upate kazi." },
            { objective: "O6", q: "\"Kampuni\" inakupa kazi ya mbali baada ya mahojiano ya maandishi tu na inaomba namba yako ya benki sasa. Unafanya nini?", options: ["Itume ili ulipwe haraka", "Usiitoe; itafute kampuni wewe mwenyewe na uripoti ikiwa ni ulaghai", "Tuma namba yako ya Social Security badala yake", "Waombe wakutumie hundi kwa ujumbe"], answer: 1, why: "Mahojiano ya maandishi tu na maombi ya mapema ya namba za benki ni dalili za hatari; toa namba za binafsi tu baada ya ofa iliyothibitishwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi vizuri na kupata kazi za mbali",
        questions: [
          { objective: "O4", q: "Katika Google Docs, ni hali gani inayofanya mabadiliko yako yaonekane kama mapendekezo ili wengine wayakubali?", options: ["Delete mode", "Print mode", "Night mode", "Suggesting mode"], answer: 3, why: "Suggesting mode inaonyesha mabadiliko ili yaidhinishwe." },
          { objective: "O4", q: "Historia ya matoleo inakuruhusu kufanya nini?", options: ["Kuona au kurudisha matoleo ya awali ya faili", "Kufuta faili milele", "Kushiriki nywila", "Kubadilisha jina lako"], answer: 0, why: "Inaweka kumbukumbu ya matoleo ya awali." },
          { objective: "O5", q: "Time-blocking ni nini?", options: ["Kuzuia tovuti", "Kuzima saa", "Kupanga siku yako katika vipindi kwa kazi maalum", "Kufanya kazi bila mapumziko"], answer: 2, why: "Vipindi vinalinda muda wa kazi ya umakini." },
          { objective: "O6", q: "\"Kazi ya mbali\" inakuomba ununue vifaa vya kuanzia vya $200 kabla ya kuanza. Kulingana na FTC, hii ni:", options: ["Uajiri wa kawaida", "Kodi", "Faida", "Dalili ya hatari ya ulaghai"], answer: 3, why: "Waajiri waaminifu hawakutozi pesa ili upate kazi." },
          { objective: "O6", q: "Mwajiri anatuma barua pepe kutoka anwani ya bure na anataka mahojiano kwa chat ya maandishi tu. Unapaswa:", options: ["Kutuma taarifa zako za benki", "Kulipa ada", "Kuitafuta kampuni wewe mwenyewe na kuwa na tahadhari", "Kupuuza kazi zote milele"], answer: 2, why: "Hizi ni dalili za kawaida za kazi ya uongo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujuzi wa Kufanya Kazi kwa Mbali kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Kazi ya mbali inamaanisha:", options: ["Kufanya kazi usiku tu", "Kufanya kazi yako nje ya ofisi ya mwajiri", "Kazi isiyolipwa", "Kutumia rimoti ya TV"], answer: 1, why: "Ni kazi inayofanywa nyumbani au mahali pengine." },
      { objective: "O1", q: "Ni kifaa gani muhimu zaidi kwa simu za video?", options: ["Headset au earbuds zenye maikrofoni", "Kiti cha kifahari", "TV ya pili", "Printa"], answer: 0, why: "Sauti iliyo wazi ndiyo muhimu zaidi kwenye simu." },
      { objective: "O1", q: "Unawezaje kujua kama intaneti yako ina kasi ya kutosha?", options: ["Kubahatisha", "Kuiuliza AI", "Kufanya jaribio la bure la kasi ya intaneti", "Kuhesabu apps zako"], answer: 2, why: "Jaribio la kasi linaipima." },
      { objective: "O1", q: "Ni kipi kinachoweka akaunti yako ya kazi salama?", options: ["Kuingia kwa hatua mbili", "Kushiriki nywila yako na familia", "Kuiandika kwenye skrini", "Kuzima masasisho"], answer: 0, why: "Kuingia kwa hatua mbili kunazuia mashambulizi mengi." },
      { objective: "O2", q: "Kwa kawaida unajiungaje na simu ya video ya kazi?", options: ["Kupiga namba yoyote", "Kusubiri mtu akutembelee", "Kutuma barua kwa posta", "Kubofya kiungo katika barua pepe au mwaliko wa kalenda"], answer: 3, why: "Mialiko ina kiungo cha mkutano." },
      { objective: "O2", q: "Wakati huongei kwenye simu, kwa kawaida unapaswa:", options: ["Kucheza muziki", "Kukaa umenyamazisha sauti", "Kutoka kwenye simu", "Kuongeza sauti"], answer: 1, why: "Kunyamazisha sauti kunaepusha kelele za nyuma." },
      { objective: "O2", q: "Kushiriki skrini kunamaanisha:", options: ["Kuvunja skrini yako", "Kuwaonyesha wengine kwenye simu skrini ya kompyuta yako", "Kununua skrini mpya", "Kuficha skrini yako"], answer: 1, why: "Kunawaruhusu wengine kuona unachokiona." },
      { objective: "O3", q: "Ujuzi mkuu katika kazi ya mbali ni:", options: ["Kuandika kwa herufi kubwa zote", "Simu ndefu", "Kuepuka ujumbe", "Kuandika kwa uwazi"], answer: 3, why: "Mawasiliano mengi ya kazi ya mbali ni ya maandishi." },
      { objective: "O3", q: "Ujumbe wa kazi ulio wazi:", options: ["Unaanza na hoja kuu na unasema unachohitaji na lini", "Unaficha hoja kuu mwishoni", "Ni mrefu kadiri iwezekanavyo", "Hauna ombi lolote"], answer: 0, why: "Ujumbe ulio wazi hupata majibu haraka zaidi." },
      { objective: "O3", q: "Ni kipi kisichopaswa kamwe kuingia katika zana ya AI ambayo mwajiri wako hajaiidhinisha?", options: ["Ujumbe wa mazoezi kuhusu kuchelewa", "Maswali ya jumla ya sarufi", "Data ya wateja", "Tarehe ya sikukuu ya umma"], answer: 2, why: "Data ya wateja lazima ilindwe." },
      { objective: "O3", q: "Utachelewa kwenye zamu yako. Hatua bora:", options: ["Usiseme chochote", "Ingia ukiwa umechelewa bila kueleza", "Acha kazi", "Tuma ujumbe mfupi wa taarifa kabla ya saa yako ya kuanza"], answer: 3, why: "Taarifa ya mapema ni ya kitaalamu." },
      { objective: "O4", q: "Maoni katika nyaraka ya pamoja:", options: ["Yanafuta nyaraka", "Yanamfungia kila mtu nje", "Yanaongeza dokezo bila kubadilisha maandishi", "Yanaichapisha"], answer: 2, why: "Maoni yanauliza au kupendekeza bila kuhariri." },
      { objective: "O4", q: "Katika Word, kipengele kinachoonyesha mabadiliko yako ili wengine wayakague ni:", options: ["Word Count", "Track Changes", "Spell Check", "Page Color"], answer: 1, why: "Track Changes inarekodi mabadiliko." },
      { objective: "O4", q: "Kabla ya kubadilisha mipangilio ya kushiriki ya nyaraka iwe \"anyone with the link\" unapaswa:", options: ["Kumuuliza mmiliki wake", "Kufanya tu", "Kuweka kiungo hadharani", "Kufuta nyaraka"], answer: 0, why: "Mipangilio ya kushiriki inalinda taarifa." },
      { objective: "O5", q: "Saa ya kawaida ya kumaliza unapofanya kazi nyumbani inasaidia:", options: ["Hakuna kitu", "Ufanye saa zaidi bila malipo", "Kuweka uwiano kati ya kazi na maisha ya nyumbani", "Kasi ya intaneti yako"], answer: 2, why: "Mipaka inazuia uchovu mkubwa." },
      { objective: "O5", q: "Ikiwa malezi ya watoto yanafanya kazi kuwa ngumu, hatua bora ni:", options: ["Mwambie msimamizi wako mapema", "Ficha jambo hilo", "Acha kuingia kazini", "Andika taarifa za maendeleo za uongo"], answer: 0, why: "Wasimamizi wanaweza kusaidia wakijua mapema." },
      { objective: "O6", q: "Baadhi ya kazi za mbali huajiri watu ambao tu:", options: ["Hawana kompyuta", "Hawatumii barua pepe kamwe", "Wanafanya kazi bure", "Wanaishi katika majimbo au nchi fulani"], answer: 3, why: "Kagua sheria za mahali katika tangazo la kazi." },
      { objective: "O6", q: "Mwajiri wa kampuni halisi kwa kawaida hutuma barua pepe kutoka:", options: ["Anwani yoyote ya barua pepe ya bure", "Domain ya kampuni yenyewe", "App ya maandishi tu", "Ujumbe wa mitandao ya kijamii tu"], answer: 1, why: "Domain ya kampuni ni dalili ya mwajiri halisi." },
      { objective: "O6", q: "Kuombwa kusafirisha tena vifurushi ukiwa nyumbani ni, kulingana na FTC:", options: ["Kazi ya kawaida ya mbali", "Sehemu ya ulaghai", "Programu ya serikali", "Salama ikiwa inalipa vizuri"], answer: 1, why: "Kazi za kusafirisha tena vifurushi ni ulaghai unaojulikana." },
      { objective: "O6", q: "Unaripoti wapi ulaghai wa kazi nchini Marekani?", options: ["Kwa barua pepe ya tapeli", "Sehemu ya maoni", "Hakuna mahali", "ReportFraud.ftc.gov"], answer: 3, why: "FTC inakusanya ripoti za ulaghai." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 3, 5, 6, 8, 9, 11, 12, 14, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mahali pa kazi na teknolojia", objective: "O1", notYet: "Hakuna jaribio la kasi, au kuingia kwa hatua mbili au kufunga skrini kumezimwa.", meets: "Picha au orodha ya kukagua ya mahali pa kazi yenye jaribio la kasi, headset, kuingia kwa hatua mbili na kufunga skrini.", exceeds: "Mwanga uko mbele ya mwanafunzi na kuna mpango wa akiba ikiwa intaneti itashindwa." },
      { name: "Tayari kwa simu ya video", objective: "O2", notYet: "Jaribio la simu halikufanywa, au vidhibiti vya mute na kamera havikupatikana.", meets: "Jaribio la simu la dakika moja au orodha ya kukagua inayoonyesha jina linaloonyeshwa, mute, kamera na chat.", exceeds: "Pia alifanya mazoezi ya kushiriki skrini na kutatua tatizo la sauti." },
      { name: "Ujumbe wa kazi", objective: "O3", notYet: "Ujumbe chini ya mitatu, au ujumbe unaficha hoja kuu au una data binafsi.", meets: "Taarifa ya maendeleo, swali kwa msimamizi na ujumbe wa kuchelewa, kila mmoja mfupi na unaoanza na hoja kuu.", exceeds: "Kila mmoja unasema kinachohitajika na lini, na unasikika kama mwanafunzi." },
      { name: "Nyaraka ya pamoja", objective: "O4", notYet: "Hakuna maoni wala pendekezo la badiliko katika nyaraka.", meets: "Maoni na pendekezo la badiliko katika nyaraka ya pamoja.", exceeds: "Pia alifungua historia ya matoleo na hakubadilisha mipangilio ya kushiriki." },
      { name: "Mpango wa vipindi vya muda", objective: "O5", notYet: "Hakuna saa za kuanza, mapumziko au kumaliza.", meets: "Mpango wa siku moja wenye saa za kuanza, mapumziko na kumaliza na vipindi vya kazi.", exceeds: "Unaendana na maisha halisi ya mwanafunzi na unaishia na taarifa ya maendeleo." },
      { name: "Tangazo la kazi limekaguliwa", objective: "O6", notYet: "Tangazo la kazi halikukaguliwa kwa dalili za ulaghai.", meets: "Tangazo moja halisi la kazi ya mbali limekaguliwa dhidi ya dalili za hatari, na kampuni imetafutwa.", exceeds: "Pia anataja kazi inaruhusu watu waishi wapi na domain ya barua pepe iliyotumika." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba angalau kazi moja ya mbali ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata kazi ya mbali au mahojiano ya kazi ya mbali ndani ya siku 90",
      "Wanafunzi wanaoripoti kutambua na kuepuka ulaghai wa kazi ya nyumbani"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti (kompyuta ya maktaba au ya programu inafaa kwa mazoezi)",
      "Headset au earbuds zenye maikrofoni",
      "Akaunti za bure za zana ya video (Zoom, Teams au Google Meet) na Google Docs au Microsoft 365 mtandaoni",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; fanyeni simu halisi ya video ya mazoezi ili kila mtu ajiunge, anyamazishe sauti na ashiriki skrini.",
      "Andaa nyaraka moja ya pamoja ya mazoezi ili wanafunzi watoe maoni na kupendekeza mabadiliko kwenye kazi za wenzao.",
      "Onyesha mifano halisi ya matangazo ya ulaghai wa kazi za nyumbani na kikundi kitafute dalili za hatari.",
      "Wakumbushe wanafunzi walio kwenye parole au probation kufuata masharti yoyote kuhusu matumizi ya intaneti, na kuhakikisha kazi ya mbali inawafaa.",
      "Pima kifurushi cha mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
