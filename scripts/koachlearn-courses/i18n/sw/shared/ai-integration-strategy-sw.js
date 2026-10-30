"use strict";

// Koach Learn course (Swahili translation of shared/ai-integration-strategy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-integration-strategy-sw",
  lang: "sw",
  translationOf: "ai-integration-strategy",
  category: "Athletes",
  name: "Mikakati ya Kuleta AI katika Shirika Lako",
  skills: "Kukagua utayari wa AI, Kuweka malengo yanayohusiana na dhamira, Kuandika sera ya matumizi ya AI, Kudhibiti hatari za AI, Kuwaongoza watu katika mabadiliko, Kujenga ramani ya siku 90",
  outcome: "kuandika mpango wa siku 90 wa kuleta AI katika shirika: ukaguzi wa utayari, malengo yanayohusiana na dhamira yake, sera ya ukurasa mmoja ya matumizi ya AI, ukaguzi wa hatari, mpango wa mafunzo na mawasiliano, na ramani yenye wahusika na tarehe.",
  about: [
    "Kutumia zana moja ya AI ni rahisi. Kuleta AI katika shirika zima, ili watu waitumie vizuri, kwa usalama na kwa sababu sahihi, kunahitaji mpango. Kozi hii inakupa mpango huo, hatua kwa hatua.",
    "Ni kwa wanamichezo wanaojenga chapa (brand) au biashara pamoja na timu, akademi na ligi zinazowazunguka, kwa wamiliki wa biashara ndogo, na kwa viongozi na bodi za mashirika yasiyo ya faida. Mifano ni akademi ya mpira wa kikapu ya vijana, biashara ya mafunzo na habari ya mwanamichezo wa kulipwa, mgahawa wa familia na shirika la kijamii lisilo la faida.",
    "Utajenga mpango halisi wa AI wa siku 90 kwa shirika moja unapoendelea. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa siku 90 wa kuleta AI kwa shirika halisi au la mazoezi (kwa mfano biashara ya chapa ya mwanamichezo, akademi ya michezo, biashara ndogo au shirika lisilo la faida). Weka alama ya utayari, malengo matatu yanayohusiana na dhamira, sera ya ukurasa mmoja ya matumizi ya AI, jedwali la hatari, mpango wa mafunzo na mawasiliano, na ramani yenye mhusika na tarehe kwa kila hatua.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wanaoendesha biashara ya chapa, na makocha, wakurugenzi wa akademi, mawakala na wafanyakazi wanaowazunguka, pamoja na viongozi wa biashara ndogo na mashirika yasiyo ya faida wanaopaswa kuamua jinsi shirika lao litakavyotumia AI.",
    startingPoint: "Wanaijua vizuri timu, chapa au shirika lao na huenda wanatumia zana za AI wao binafsi. Wachache wameandika sera, jedwali la hatari au mpango wa mabadiliko, au wameleta zana mpya kwa kikundi kizima.",
    gap: "Wafanyakazi na wachezaji tayari wanatumia AI, mara nyingi bila sheria, na taarifa binafsi za afya, mikataba au za watoto zinaweza kuvuja. Wanafunzi wanahitaji mpango wa vitendo wa siku 90 unaounganisha AI na dhamira, unaoweka sheria wazi, unaodhibiti hatari na unaowashirikisha watu, ili AI isaidie badala ya kuleta matatizo ya kisheria, ya faragha au ya kuaminiana.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; maneno ya mipango yanaelezwa mara ya kwanza",
      "Vifaa: simu au kompyuta; hati au lahajedwali (spreadsheet) kwa mpango",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla pamoja na muda wa kuandika mpango",
      "Faragha: taarifa za afya na utendaji wa wanamichezo, taarifa za watoto, mikataba na kumbukumbu za wafadhili zinalindwa",
      "Si ushauri wa kisheria: mikataba, mikataba ya udhamini na sheria za data zinapelekwa kwa wakili mwenye sifa"
    ],
    prerequisites: "Hakuna. Kozi \"AI katika Biashara: Mikakati na Matumizi\" ni nzuri kuanza nayo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa shirika halisi au la mazoezi", action: "kutoa alama ya utayari wake wa AI kuanzia 1 hadi 5 katika uongozi, watu, data, michakato na sheria", standard: "ukiwa na sentensi moja ya ushahidi kwa kila alama na suluhisho kwa alama mbili za chini kabisa" },
    { id: "O2", condition: "Ukipewa dhamira ya shirika", action: "kuandika malengo matatu ya SMART ya AI yanayotumikia dhamira", standard: "kila moja likiwa na namba na tarehe" },
    { id: "O3", condition: "Kwa watu watakaotumia AI", action: "kuandika sera ya ukurasa mmoja ya matumizi ya AI", standard: "inayohusu zana zilizoidhinishwa, kisichoruhusiwa kuingia kamwe, ukaguzi wa mtu, kuweka wazi matumizi ya AI na mtu wa kuwasiliana naye" },
    { id: "O4", condition: "Kwa kila matumizi ya AI yaliyopangwa", action: "kujenga jedwali la hatari ukitumia Govern, Map, Measure na Manage", standard: "likiwa na uwezekano, athari, udhibiti na anayekagua kwa kila hatari" },
    { id: "O5", condition: "Kwa timu itakayoanza kutumia AI", action: "kuandika mpango wa mafunzo na mawasiliano", standard: "unaosema kwa nini, nini, na watapata faida gani, na unaotaja angalau bingwa mmoja wa AI" },
    { id: "O6", condition: "Ukipewa malengo, sera, hatari na mafunzo yako", action: "kuunda ramani ya siku 90 yenye awamu tatu", standard: "yenye mhusika na tarehe ya mwisho kwa kila hatua" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa kwa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kukagua utayari wa AI wa shirika lako",
          minutes: 5,
          goal: "Toa alama ya utayari wa shirika kwa AI katika maeneo matano.",
          text: [
            "Kabla ya kununua zana, kagua utayari. Juhudi nyingi za AI hushindwa si kwa sababu zana ni mbaya, bali kwa sababu watu, data au sheria hazikuwa tayari.",
            "Toa alama kwa maeneo matano kuanzia 1 (si tayari) hadi 5 (tayari). Uongozi: viongozi wanaunga mkono na kutenga muda? Watu: wafanyakazi, wachezaji au wajitolea wana ujuzi wa msingi wa kidijitali? Data: taarifa zenu zimepangwa na kuhifadhiwa kwa usalama? Michakato: kazi zenu kuu zimeandikwa? Sheria: mna sheria za faragha na usalama?",
            "Alama za chini si sababu ya kuacha. Zinakuonyesha pa kuanzia. Biashara ya mwanamichezo yenye ujuzi mzuri wa mitandao ya kijamii lakini kumbukumbu zilizovurugika inaweza kuanza kwa kupanga faili kabla ya kutumia AI juu yake."
          ],
          steps: ["Toa alama kwa uongozi, watu, data, michakato na sheria kuanzia 1 hadi 5.", "Andika sentensi moja ya ushahidi kwa kila alama.", "Zungushia duara alama mbili za chini kabisa.", "Andika suluhisho moja kwa kila alama ya chini."],
          words: [["Utayari", "jinsi shirika lilivyojiandaa kuanza jambo jipya."], ["Data", "taarifa ambazo shirika linazihifadhi, kama ratiba, kumbukumbu na faili."]],
          slides: [
            { title: "Kwa nini ukague utayari", bullets: ["Zana mara chache ndizo chanzo cha kushindwa", "Watu, data au sheria zisizo tayari ndizo chanzo"] },
            { title: "Toa alama kwa maeneo matano, 1 hadi 5", bullets: ["Uongozi na watu", "Data na michakato", "Sheria za faragha na usalama"] },
            { title: "Alama za chini zinaonyesha pa kuanzia", bullets: ["Rekebisha mambo ya msingi kwanza", "Mfano: panga faili kabla ya kutumia AI juu yake"] }
          ],
          tryIt: "Chagua shirika halisi au la mazoezi. Toa alama ya utayari wake katika maeneo matano, kila moja na sentensi moja ya ushahidi, na taja suluhisho la kwanza kwa alama mbili za chini kabisa.",
          youCanNow: "kutoa alama ya utayari wa AI wa shirika na kujua pa kuanzia.",
          quickCheck: [
            { objective: "O1", q: "Swali lipi linakagua eneo la utayari la \"michakato\"?", options: ["Viongozi wanaunga mkono AI?", "Kazi zenu kuu zimeandikwa?", "Data imehifadhiwa kwa usalama?", "Mna sheria za faragha?"], answer: 1, why: "Michakato inauliza kama kazi kuu zimeandikwa." },
            { objective: "O1", q: "Akademi yako ya michezo ina alama 2 kwenye data na 5 kwenye watu. Unafanya nini?", options: ["Kuacha juhudi za AI kabisa", "Kununua zana ya AI ya kisasa zaidi mara moja", "Kupuuza alama ya data", "Kuanza kwa kurekebisha eneo la data, kama kupanga kumbukumbu"], answer: 3, why: "Alama za chini zinaonyesha pa kuanzia, si sababu ya kuacha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka malengo ya AI yanayohusiana na dhamira",
          minutes: 5,
          goal: "Andika malengo matatu ya AI yanayopimika yanayotumikia dhamira ya shirika.",
          text: [
            "AI inapaswa kutumikia dhamira, si kinyume chake. Anza na kile shirika lipo kukifanya: kukuza wanamichezo vijana, kukuza chapa, kuhudumia chakula, kuuza bidhaa bora.",
            "Kisha uliza AI inaweza kusaidia dhamira hiyo wapi: muda zaidi na wanamichezo au wateja, majibu ya haraka kwa familia au wateja, matumizi bora ya data, gharama ndogo. Geuza kila moja kuwa lengo linalopimika: \"Kupunguza muda wa kazi za ofisi wa makocha kwa wiki kutoka saa 6 hadi 3 kufikia Machi.\"",
            "Tumia ukaguzi wa SMART: mahususi (specific), linalopimika (measurable), linalowezekana (achievable), linalohusiana na dhamira (relevant) na lenye muda (time-bound). Malengo matatu yanatosha kwa siku 90."
          ],
          steps: ["Andika dhamira kwa sentensi moja.", "Orodhesha njia tatu ambazo AI inaweza kuisaidia.", "Geuza kila moja kuwa lengo la SMART lenye namba na tarehe."],
          words: [["Dhamira", "kusudi kuu ambalo shirika lipo kwa ajili yake."], ["Lengo la SMART", "lengo lililo mahususi, linalopimika, linalowezekana, linalohusiana na dhamira na lenye muda."]],
          slides: [
            { title: "Dhamira kwanza", bullets: ["AI inatumikia dhamira", "Si kinyume chake"] },
            { title: "AI inapoweza kusaidia", bullets: ["Muda zaidi na wanamichezo au wateja", "Majibu ya haraka", "Gharama ndogo, matumizi bora ya data"] },
            { title: "Malengo ya SMART", bullets: ["Mahususi, linalopimika, linalowezekana", "Linalohusiana na dhamira, lenye muda", "Malengo matatu kwa siku 90"] }
          ],
          tryIt: "Andika dhamira ya shirika kwa sentensi moja na malengo matatu ya SMART ya AI yanayoiunga mkono.",
          youCanNow: "kuweka malengo ya AI yanayopimika yanayotumikia dhamira ya shirika.",
          quickCheck: [
            { objective: "O2", q: "Katika SMART, herufi \"R\" ina maana gani?", options: ["Linalohusiana na dhamira (relevant)", "Haraka (rapid)", "Linalorudiwa (repeated)", "Linalotakiwa na sheria (required)"], answer: 0, why: "Lengo la SMART linahusiana na dhamira ya shirika." },
            { objective: "O2", q: "Chapa ya mwanamichezo inataka \"kutumia AI zaidi\". Unaligeuzaje kuwa lengo la SMART?", options: ["\"Kutumia zana nyingi za AI.\"", "\"Kuwa chapa bora mtandaoni.\"", "\"Kujibu barua pepe za mashabiki na wadhamini ndani ya saa 24, badala ya siku 3, kufikia Juni.\"", "\"Kujaribu AI siku moja.\""], answer: 2, why: "Ni mahususi, linapimika, linahusiana na dhamira na lina tarehe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika sera ya ukurasa mmoja ya matumizi ya AI",
          minutes: 6,
          goal: "Andika sera fupi ya matumizi ya AI inayowaambia watu kinachoruhusiwa, kisichoruhusiwa na wamuulize nani.",
          text: [
            "Sera ya matumizi ya AI ni seti fupi ya sheria za jinsi watu katika shirika wanavyotumia AI. Bila sera, watu hubahatisha, na mtu anaweza kubandika taarifa binafsi za mchezaji, mteja au mfadhili kwenye zana ya bure.",
            "Iweke kwenye ukurasa mmoja na ihusu: zana zilizoidhinishwa; kisichoruhusiwa kuingia kwenye AI kamwe (kumbukumbu za afya, namba za Social Security na za benki, mikataba ya siri, taarifa za watoto, nywila); ukaguzi wa mtu kabla ya chochote kilichotengenezwa na AI kuchapishwa au kutumwa; uwazi kuhusu matumizi ya AI pale inapohitajika; na mtu wa kumuuliza maswali.",
            "Ongeza sheria maalum za fani yako. Mashirika ya michezo yalinde data ya afya na utendaji wa wanamichezo na taarifa za watoto. Mashirika yasiyo ya faida yalinde kumbukumbu za wafadhili na wateja. Pata ushauri wa kisheria kuhusu mikataba, mikataba ya udhamini na sheria za data zinazokuhusu."
          ],
          steps: ["Orodhesha zana za AI zilizoidhinishwa.", "Orodhesha taarifa ambazo kamwe hazipaswi kuingia kwenye AI.", "Taka mtu akague matokeo ya AI kabla hayajatumwa au kuchapishwa.", "Sema ni lini matumizi ya AI yawekwe wazi.", "Taja mtu wa kuwasiliana naye kwa maswali.", "Weka tarehe ya kupitia sera upya."],
          words: [["Sera", "sheria iliyoandikwa ambayo kila mtu katika shirika anaifuata."], ["Ukaguzi wa mtu", "mtu anakagua matokeo ya AI kabla hayajatumika."]],
          slides: [
            { title: "Kwa nini sera", bullets: ["Watu wanaacha kubahatisha", "Data binafsi haiingii kwenye zana za bure"] },
            { title: "Ukurasa mmoja unahusu", bullets: ["Zana zilizoidhinishwa", "Kisichoingia kwenye AI kamwe", "Ukaguzi wa mtu na wa kumuuliza"] },
            { title: "Sheria za kila fani", bullets: ["Michezo: data ya afya ya wanamichezo, watoto", "Mashirika yasiyo ya faida: kumbukumbu za wafadhili na wateja", "Ushauri wa kisheria kwa mikataba na sheria za data"] }
          ],
          tryIt: "Andika sera ya ukurasa mmoja ya matumizi ya AI kwa shirika lako yenye sehemu zote sita. Muombe msaidizi wa AI aikague kama kuna kisicho wazi, kisha uihariri wewe mwenyewe.",
          youCanNow: "kuandika sera fupi ya matumizi ya AI inayowalinda watu na data.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini shirika linahitaji sera ya matumizi ya AI?", options: ["Kupiga marufuku teknolojia yote", "Kufanya zana za AI ziwe bure", "Kuchukua nafasi ya kitabu cha mwongozo wa wafanyakazi", "Ili watu wasibahatishe na kubandika taarifa binafsi kwenye zana za AI"], answer: 3, why: "Bila sera, watu hubahatisha, na data binafsi ya wachezaji, wateja au wafadhili inaweza kuvuja." },
            { objective: "O3", q: "Kocha anataka AI iandike rasimu ya mkataba wa udhamini. Sera yako inapaswa kusema nini?", options: ["Tuma rasimu ya AI kwa mdhamini mara moja", "Pata ushauri wa kisheria kuhusu mikataba; mtu akague chochote kilichotengenezwa na AI", "Mikataba haihusiki na sheria yoyote", "Bandika mkataba mzima wa siri kwenye zana ya AI ya bure"], answer: 1, why: "Mikataba inahitaji ushauri wa kisheria, na matokeo ya AI yanakaguliwa na mtu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa kwa AI",
        questions: [
          { objective: "O1", q: "Kwa nini ukague utayari kabla ya kununua zana za AI?", options: ["Zana ni mbaya kila wakati", "Inatakiwa na sheria", "Watu, data au sheria zisizo tayari ndizo husababisha kushindwa kwingi", "Ili kutumia pesa zaidi"], answer: 2, why: "Mapengo ya utayari, si zana, ndiyo kwa kawaida huleta matatizo." },
          { objective: "O1", q: "Akademi ina kumbukumbu zilizovurugika na kutawanyika. Hatua ya kwanza yenye busara ni ipi?", options: ["Panga faili kabla ya kutumia AI juu yake", "Ingiza kila kitu kwenye AI jinsi kilivyo", "Achana na AI", "Nunua zana ya bei ghali zaidi"], answer: 0, why: "Data iliyopangwa inafanya AI iwe na manufaa na salama zaidi." },
          { objective: "O2", q: "Lipi ni lengo la SMART?", options: ["\"Kutumia AI zaidi\"", "\"Kuwa wa kisasa\"", "\"Kujaribu mambo\"", "\"Kupunguza muda wa kazi za ofisi wa makocha kwa wiki kutoka saa 6 hadi 3 kufikia Machi\""], answer: 3, why: "Ni mahususi, linapimika na lina muda." },
          { objective: "O3", q: "Sera ya matumizi ya AI inapaswa kusema nini kuhusu kumbukumbu za afya za wanamichezo?", options: ["Zibandike popote", "Kamwe zisiingie kwenye zana za AI ambazo hazijaidhinishwa kwa ajili yake", "Ziweke mtandaoni", "Washirikishe wadhamini"], answer: 1, why: "Data ya afya ni ya siri na lazima ilindwe." },
          { objective: "O3", q: "Nani anapaswa kukagua maudhui yaliyotengenezwa na AI kabla ya kuchapishwa?", options: ["Hakuna", "Mtu", "AI yenyewe tu", "Mfuasi yeyote tu"], answer: 1, why: "Ukaguzi wa mtu ni sheria ya msingi ya sera." }
        ]
      }
    },
    {
      name: "Sura 2: Kuleta AI kwa usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kudhibiti hatari za AI kwa mfumo rahisi",
          minutes: 5,
          goal: "Jenga jedwali la hatari kwa matumizi ya AI na weka udhibiti kwa kila hatari.",
          text: [
            "Taasisi ya Taifa ya Viwango na Teknolojia ya Marekani (NIST) inachapisha mfumo wa bure wa hiari wa kudhibiti hatari za AI (AI Risk Management Framework). Kazi zake nne za msingi ni Govern, Map, Measure na Manage. Unaweza kuzitumia kwa lugha rahisi hata katika shirika dogo.",
            "Govern (simamia): nani anawajibika na sheria ni zipi (sera yako). Map (tambua): kwa kila matumizi ya AI, nini kinaweza kwenda vibaya na nani anaweza kuumia. Measure (pima): utagunduaje matatizo, kama kukagua majibu kwa sampuli. Manage (dhibiti): unafanya nini kuhusu kila hatari, kama ukaguzi wa mtu au kutotumia AI kwa kazi hiyo.",
            "Hatari za kawaida za AI: ukweli usio sahihi, kuvuja kwa data binafsi, kuwatendea watu isivyo haki, matatizo ya hakimiliki na kuharibu sifa. Andika kila moja kwenye jedwali la hatari pamoja na uwezekano wake, ubaya wake na udhibiti."
          ],
          steps: ["Orodhesha kila matumizi ya AI yaliyopangwa.", "Kwa kila moja, andika nini kinaweza kwenda vibaya na nani anaweza kuumia.", "Kadiria uwezekano na athari: chini, wastani au juu.", "Ongeza udhibiti kwa kila hatari.", "Taja nani anakagua kwamba udhibiti unafanya kazi."],
          words: [["NIST", "Taasisi ya Taifa ya Viwango na Teknolojia ya Marekani, inayochapisha viwango vya kiufundi na miongozo."], ["Jedwali la hatari", "orodha ya hatari pamoja na uwezekano na uzito wa kila moja, na utakachofanya kuihusu."]],
          slides: [
            { title: "NIST AI RMF: kazi nne", bullets: ["Govern: majukumu na sheria", "Map: nini kinaweza kwenda vibaya", "Measure: jinsi unavyogundua", "Manage: unachofanya kuhusu hatari"] },
            { title: "Hatari za kawaida za AI", bullets: ["Ukweli usio sahihi na kuvuja kwa data", "Kuwatendea watu isivyo haki", "Hakimiliki na sifa"] },
            { title: "Jedwali rahisi la hatari", bullets: ["Hatari, uwezekano, athari", "Udhibiti na nani anaukagua"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Tengeneza jedwali la hatari kwa matumizi mawili ya AI katika mpango wako, yenye angalau hatari tatu kila moja, kadirio la uwezekano na athari, udhibiti na mtu anayeukagua.",
          youCanNow: "kutambua hatari za AI na kuweka udhibiti ukitumia kazi nne za NIST.",
          quickCheck: [
            { objective: "O4", q: "Katika mfumo wa NIST, kazi ipi inahusu unachofanya kuhusu kila hatari?", options: ["Govern", "Map", "Manage", "Measure"], answer: 2, why: "Manage ni hatua unayochukua kwa kila hatari, kama ukaguzi wa mtu." },
            { objective: "O4", q: "AI itaandika rasimu za taarifa za majeraha kwa wazazi. Udhibiti upi unafaa hatari ya ukweli usio sahihi?", options: ["Mkufunzi au kocha akague kila taarifa kabla haijatumwa", "Zitume haraka zaidi", "Ongeza zana zaidi za AI", "Acha kuwaambia wazazi chochote"], answer: 0, why: "Ukaguzi wa mtu kabla ya kutuma unadhibiti hatari ya ukweli usio sahihi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuwaongoza watu katika mabadiliko",
          minutes: 5,
          goal: "Andika mpango wa mafunzo na mawasiliano unaowasaidia watu kuanza kutumia AI.",
          text: [
            "Watu wana wasiwasi kuhusu AI: Itachukua kazi yangu? Nitaonekana mjinga? Inaruhusiwa? Kupuuza wasiwasi huo kunachelewesha kila kitu. Uzungumzie waziwazi.",
            "Eleza kwa nini (dhamira na malengo), nini (zana na sheria zipi) na watapata faida gani (kazi chache za ofisi, muda zaidi wa kufundisha, wateja au familia). Chagua mabingwa wa AI: mtu mmoja au wawili wanaojifunza kwanza na kuwasaidia wengine.",
            "Fundisha kidogo kidogo: kipindi cha vitendo cha dakika 30 kwa kila zana, karatasi ya ukurasa mmoja ya prompts nzuri, na mahali pa kuuliza maswali. Sherehekea mafanikio ya mapema katika mikutano ya timu."
          ],
          steps: ["Andika ujumbe mfupi: kwa nini, nini, na watapata faida gani.", "Chagua mabingwa wa AI mmoja au wawili.", "Panga vipindi vya mafunzo ya vitendo vya dakika 30.", "Tengeneza karatasi ya ukurasa mmoja ya prompts.", "Shiriki mafanikio ya mapema katika mikutano."],
          words: [["Usimamizi wa mabadiliko", "kuwasaidia watu kuhama kutoka njia ya zamani ya kufanya kazi kwenda njia mpya."], ["Bingwa wa AI", "mwanatimu anayejifunza kwanza na kuwasaidia wengine."]],
          slides: [
            { title: "Zungumzia wasiwasi", bullets: ["Itachukua kazi yangu?", "Nitaonekana mjinga?", "Inaruhusiwa?"] },
            { title: "Wasiliana kwa uwazi", bullets: ["Kwa nini: dhamira na malengo", "Nini: zana na sheria", "Watapata faida gani"] },
            { title: "Fundisha kidogo kidogo", bullets: ["Vipindi vya vitendo vya dakika 30", "Karatasi ya prompts na mabingwa wa AI", "Sherehekea mafanikio ya mapema"] }
          ],
          tryIt: "Andika tangazo la sentensi tano kwa timu, wachezaji, wafanyakazi au wajitolea wako kuhusu mpango wa AI, na ratiba ya mafunzo ya mwezi wa kwanza.",
          youCanNow: "kupanga mafunzo na mawasiliano yanayowasaidia watu kuanza kutumia AI.",
          quickCheck: [
            { objective: "O5", q: "Karatasi ya prompts (prompt cheat sheet) ni nini?", options: ["Orodha ya wafanyakazi waliopigwa marufuku", "Orodha ya ukurasa mmoja ya prompts nzuri ambazo watu wanaweza kunakili", "Mtihani wa kuwapa wafanyakazi alama", "Njia ya siri ya kukwepa sera"], answer: 1, why: "Karatasi ya ukurasa mmoja ya prompts nzuri inawasaidia watu kuanza haraka." },
            { objective: "O5", q: "Wafanyakazi wana wasiwasi na wanakwepa zana mpya ya AI. Unafanya nini?", options: ["Kuwalazimisha waitumie bila mafunzo", "Kusubiri waielewe wenyewe", "Kuiondoa zana bila kumwambia mtu", "Kuzungumzia wasiwasi waziwazi, kufanya kipindi kifupi cha vitendo na kushiriki mafanikio ya mapema"], answer: 3, why: "Mazungumzo ya wazi, mafunzo madogo ya vitendo na mafanikio ya mapema yanawasaidia watu kuanza kutumia AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujenga ramani ya siku 90",
          minutes: 5,
          goal: "Geuza malengo, sera, hatari na mafunzo kuwa ramani ya siku 90 yenye wahusika na tarehe.",
          text: [
            "Ramani inapanga kila kitu kwa mpangilio pamoja na tarehe. Gawa siku 90 katika awamu tatu za siku 30. Siku 1-30: misingi (sera imeidhinishwa, faili zimepangwa, mabingwa wamefundishwa). Siku 31-60: majaribio (matumizi madogo moja au mawili ya AI yanajaribiwa na kupimwa). Siku 61-90: kupitia na kupanua (kuamua nini kibaki, kipanuliwe au kisimamishwe).",
            "Kila hatua inahitaji mhusika na tarehe ya mwisho. Hatua isiyo na mhusika kwa kawaida haifanyiki.",
            "Panga kikao cha ufuatiliaji kila wiki mbili na tathmini siku ya 90 dhidi ya malengo yako ya SMART. Kisha andika mpango unaofuata wa siku 90. Zana na sheria za AI zinabadilika haraka, kwa hiyo pitia sera angalau kila miezi sita."
          ],
          steps: ["Siku 1-30: misingi.", "Siku 31-60: majaribio yenye vipimo.", "Siku 61-90: pitia, kisha panua au simamisha.", "Mpe kila hatua mhusika na tarehe.", "Panga vikao vya ufuatiliaji kila wiki mbili na tathmini ya siku 90."],
          words: [["Ramani", "mpango unaoonyesha hatua kwa mpangilio pamoja na tarehe."], ["Mhusika", "mtu anayewajibika kuhakikisha hatua inakamilika."]],
          slides: [
            { title: "Awamu tatu za siku 30", bullets: ["1-30: misingi", "31-60: majaribio", "61-90: kupitia na kupanua"] },
            { title: "Wahusika na tarehe", bullets: ["Kila hatua ina mhusika", "Kila hatua ina tarehe ya mwisho"] },
            { title: "Uweke mpango hai", bullets: ["Vikao vya ufuatiliaji kila wiki mbili", "Tathmini ya siku 90 dhidi ya malengo", "Pitia sera kila miezi sita"] }
          ],
          tryIt: "Kazi ya mwisho: jenga ramani yako ya siku 90 kwenye jedwali lenye awamu, hatua, mhusika na tarehe, na uambatishe alama ya utayari, malengo, sera, jedwali la hatari na mpango wa mafunzo ili kukamilisha mpango wako wa kuleta AI.",
          youCanNow: "kuandika mpango kamili wa siku 90 wa kuleta AI katika shirika kwa usalama.",
          quickCheck: [
            { objective: "O6", q: "Nini kinafanyika siku 61-90 za ramani?", options: ["Kupitia majaribio na kuamua nini kibaki, kipanuliwe au kisimamishwe", "Kuandika dhamira", "Kununua kila zana", "Kuwafundisha mabingwa wa kwanza"], answer: 0, why: "Awamu ya mwisho inapitia majaribio na kuyapanua au kuyasimamisha." },
            { objective: "O6", q: "Ramani yako inasema \"fundisha wafanyakazi\" bila jina wala tarehe. Unaongeza nini?", options: ["Hakuna; itafanyika", "Maelezo marefu zaidi", "Mhusika na tarehe ya mwisho", "Ramani ya pili"], answer: 2, why: "Hatua isiyo na mhusika na tarehe kwa kawaida haikamiliki." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuleta AI kwa usalama",
        questions: [
          { objective: "O4", q: "Kazi nne za msingi za NIST AI Risk Management Framework ni zipi?", options: ["Nunua, Jenga, Uza, Rudia", "Panga, Fanya, Kagua, Tenda", "Soma, Andika, Jaribu, Tuma", "Govern, Map, Measure, Manage"], answer: 3, why: "NIST inataja Govern, Map, Measure na Manage." },
          { objective: "O4", q: "Je, NIST AI Risk Management Framework inatakiwa na sheria kwa mashirika madogo?", options: ["Hapana, NIST inasema ni ya hiari", "Ndiyo, na faini kubwa", "Kwa wanamichezo tu", "Nchini Kenya tu"], answer: 0, why: "NIST inaueleza kuwa ni wa matumizi ya hiari." },
          { objective: "O5", q: "Kocha ana wasiwasi kwamba AI itachukua nafasi yake. Jibu bora ni lipi?", options: ["Kupuuza", "Kumwambia aache kuuliza", "Kueleza waziwazi jinsi AI inavyompa muda zaidi wa kufundisha na nini hakitabadilika", "Kuficha mpango"], answer: 2, why: "Kuzungumzia wasiwasi waziwazi kunaharakisha watu kuanza kutumia AI." },
          { objective: "O5", q: "Bingwa wa AI ni nani?", options: ["AI inayoshinda michezo", "Mshawishi (influencer) anayelipwa", "Zana ya bei ghali zaidi", "Mwanatimu anayejifunza kwanza na kuwasaidia wengine"], answer: 3, why: "Mabingwa wanasambaza ujuzi na kujiamini." },
          { objective: "O6", q: "Hatua ya ramani haina mhusika. Kwa kawaida nini hutokea?", options: ["Inakamilika mapema", "AI inaifanya", "Haikamiliki", "Hakuna kinachobadilika"], answer: 2, why: "Hatua zinahitaji mhusika ili zifanyike." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mikakati ya Kuleta AI katika Shirika Lako",
    questions: [
      { objective: "O1", q: "Juhudi nyingi za AI hushindwa kwa sababu:", options: ["Zana hazifanyi kazi kamwe", "Watu, data au sheria hazikuwa tayari", "AI ni haramu", "Kompyuta ni za polepole mno"], answer: 1, why: "Mapengo ya utayari husababisha kushindwa kwingi." },
      { objective: "O1", q: "Lipi ni mojawapo ya maeneo matano ya utayari?", options: ["Data", "Rangi za timu", "Ukubwa wa ofisi", "Bei ya hisa"], answer: 0, why: "Uongozi, watu, data, michakato na sheria." },
      { objective: "O1", q: "Alama ya chini ya utayari ina maana:", options: ["Acha milele", "Ipuuze", "Anza kwa kurekebisha eneo hilo", "Nunua zana zaidi"], answer: 2, why: "Alama za chini zinaonyesha pa kuanzia." },
      { objective: "O2", q: "Malengo ya AI yanapaswa kuhusiana na:", options: ["Dhamira ya shirika", "Kile washindani wanachoweka mtandaoni", "Mtindo mpya zaidi", "Hakuna kitu maalum"], answer: 0, why: "AI inatumikia dhamira." },
      { objective: "O2", q: "SMART inasimama kwa:", options: ["Rahisi, ya kisasa, ya kujiendesha, ya haraka, ya kiufundi", "Smart, simu, AI, roboti, teknolojia", "Mauzo, masoko, utawala, rejareja, kodi", "Mahususi, linalopimika, linalowezekana, linalohusiana na dhamira, lenye muda"], answer: 3, why: "Hivyo ndivyo vipimo vitano vya SMART." },
      { objective: "O2", q: "Kozi inapendekeza malengo mangapi kwa siku 90?", options: ["Thelathini", "Matatu", "Mia moja", "Sifuri"], answer: 1, why: "Malengo matatu yanaufanya mpango uzingatie mambo machache." },
      { objective: "O3", q: "Sera ya matumizi ya AI ni:", options: ["Ufunguo wa leseni ya programu", "Seti fupi ya sheria za jinsi watu wanavyotumia AI", "Mpango wa bima", "Chapisho la masoko"], answer: 1, why: "Inawaambia watu kinachoruhusiwa na kisichoruhusiwa." },
      { objective: "O3", q: "Kipi kamwe hakipaswi kuingia kwenye zana ya AI ambayo haijaidhinishwa?", options: ["Ratiba ya jumla ya mazoezi", "Tarehe ya tukio la umma", "Mfano wa chapisho la mitandao ya kijamii", "Taarifa za afya za mwanamichezo mtoto"], answer: 3, why: "Data ya afya na taarifa za watoto ni za siri sana." },
      { objective: "O3", q: "Shirika lipate wapi ushauri kuhusu mikataba ya udhamini na sheria za data?", options: ["Kwa wakili mwenye sifa", "Kwenye mazungumzo yoyote na AI", "Kwenye maoni ya mitandao ya kijamii", "Kwa mshindani"], answer: 0, why: "Maswali ya kisheria yanahitaji mtaalamu." },
      { objective: "O4", q: "Kwa lugha ya NIST, kuamua nani anawajibika na sheria ni zipi ni:", options: ["Map", "Measure", "Govern", "Manage"], answer: 2, why: "Govern inahusu majukumu na sheria." },
      { objective: "O4", q: "Kuorodhesha nini kinaweza kwenda vibaya kwa kila matumizi ya AI ni:", options: ["Govern", "Manage", "Measure", "Map"], answer: 3, why: "Map inatambua hatari na nani anaweza kuumia." },
      { objective: "O4", q: "Kukagua majibu ya AI kwa sampuli kila wiki ni mfano wa:", options: ["Govern", "Map", "Measure", "Dhamira"], answer: 2, why: "Measure ni jinsi unavyogundua matatizo." },
      { objective: "O4", q: "Jedwali la hatari lina:", options: ["Bei ya zana tu", "Hatari, uwezekano, athari, udhibiti na anayekagua", "Takwimu za wachezaji", "Majina ya akaunti za mitandao ya kijamii"], answer: 1, why: "Safu hizo zinafanya hatari ziweze kudhibitiwa." },
      { objective: "O4", q: "Ipi ni hatari ya kawaida ya AI?", options: ["Kuwatendea watu isivyo haki", "Muda mwingi wa ziada", "Majibu bora", "Gharama ndogo"], answer: 0, why: "AI inaweza kuwatendea watu isivyo haki isipokaguliwa." },
      { objective: "O5", q: "\"Nitapata faida gani\" katika mawasiliano ya mabadiliko ina maana:", options: ["Malipo ya ziada tu", "Faida ya muuzaji wa zana", "Jinsi AI inavyowasaidia watu wanaoombwa kuitumia", "Kifungu cha kisheria"], answer: 2, why: "Watu hukubali mabadiliko wanapoona faida." },
      { objective: "O5", q: "Njia nzuri ya kuwafundisha wafanyakazi kuhusu AI ni:", options: ["Vipindi vifupi vya vitendo na karatasi ya prompts", "Hotuba moja ya siku tatu bila mazoezi", "Hakuna mafunzo", "Barua ya ndani isiyo na mifano"], answer: 0, why: "Mafunzo madogo ya vitendo yanafanya kazi vizuri zaidi." },
      { objective: "O6", q: "Siku 1-30 za ramani zinalenga:", options: ["Kupanua kila mahali", "Tathmini ya mwisho", "Kuwafukuza wafanyakazi", "Misingi: sera, faili, mabingwa"], answer: 3, why: "Misingi inakuja kwanza." },
      { objective: "O6", q: "Siku 31-60 za ramani zinalenga:", options: ["Kuandika dhamira", "Majaribio madogo yenye vipimo", "Hakuna kitu", "Kununua kila zana"], answer: 1, why: "Awamu ya kati inajaribu matumizi ya AI." },
      { objective: "O6", q: "Vikao vya ufuatiliaji vifanyike mara ngapi katika siku 90?", options: ["Mara moja kwa mwaka", "Kila wiki mbili", "Kamwe", "Kila saa"], answer: 1, why: "Vikao vya mara kwa mara vinaweka mpango kwenye njia." },
      { objective: "O6", q: "Sera ya AI ipitiwe mara ngapi?", options: ["Kamwe", "Kila miaka kumi", "Baada ya kashfa tu", "Angalau kila miezi sita"], answer: 3, why: "Zana na sheria za AI zinabadilika haraka." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 3, 4, 7, 9, 12, 14, 15, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Utayari na malengo", objective: "O2", notYet: "Hakuna alama ya utayari, au malengo hayana namba wala tarehe.", meets: "Alama ya utayari katika maeneo matano na malengo matatu ya SMART yanayohusiana na dhamira.", exceeds: "Kila lengo linaunganishwa na eneo la utayari lenye alama ya chini ambalo litalirekebisha au kulizunguka." },
      { name: "Sera ya matumizi ya AI", objective: "O3", notYet: "Haina kisichoruhusiwa kuingia kwenye AI, au haina ukaguzi wa mtu.", meets: "Ukurasa mmoja wenye zana zilizoidhinishwa, kisichoingia kamwe, ukaguzi wa mtu, uwazi na mtu wa kuwasiliana naye.", exceeds: "Inaongeza sheria za fani, kama data ya afya ya wanamichezo na watoto, na tarehe ya kuipitia." },
      { name: "Jedwali la hatari", objective: "O4", notYet: "Hatari zimeorodheshwa bila udhibiti.", meets: "Kila matumizi ya AI yana hatari zenye uwezekano, athari, udhibiti na anayekagua.", exceeds: "Inahusu ukweli usio sahihi, kuvuja kwa data na kuwatendea watu isivyo haki, na inaendana na Govern, Map, Measure na Manage." },
      { name: "Mafunzo na mawasiliano", objective: "O5", notYet: "Hakuna mpango wa kuwaambia au kuwafundisha watu.", meets: "Ujumbe wenye kwa nini, nini na watapata faida gani, mabingwa na vipindi vifupi vya mafunzo.", exceeds: "Una karatasi ya prompts na njia ya kushiriki mafanikio ya mapema." },
      { name: "Ramani ya siku 90", objective: "O6", notYet: "Hatua hazina wahusika wala tarehe.", meets: "Awamu tatu za siku 30, kila hatua na mhusika na tarehe, na vikao vya ufuatiliaji kila wiki mbili.", exceeds: "Ina tathmini ya siku 90 dhidi ya malengo ya SMART na tarehe ya kupitia sera." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashirika yanayoidhinisha sera ya matumizi ya AI ndani ya siku 30 (utafiti wa kufuatilia)",
      "Mashirika yanayofikia angalau lengo moja la SMART kufikia siku ya 90",
      "Mashirika yanayoripoti kutokuwa na tukio lolote la kuvuja kwa data binafsi kutokana na matumizi ya AI katika siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Zana ya hati na lahajedwali (Google Docs na Sheets au Word na Excel) kwa mpango",
      "Kurasa za bure za NIST AI Risk Management Framework, si lazima, kwa kusoma zaidi",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kuandika mpango wa siku 90"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; jazeni mfano wa alama ya utayari kwenye skrini ya pamoja.",
      "Tumia mifano kutoka ulimwengu wa kikundi: chapa ya mwanamichezo, akademi ya michezo, biashara ndogo au shirika lisilo la faida.",
      "Wakumbushe wanafunzi kwamba data ya afya ya wanamichezo, taarifa za watoto na mikataba zinahitaji uangalifu wa ziada, na maswali ya kisheria yanapelekwa kwa wakili.",
      "Waambie wanafunzi wabadilishane sera na majedwali ya hatari na mwenzao kwa ukaguzi wa haraka.",
      "Pima mpango wa mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
