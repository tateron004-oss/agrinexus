"use strict";

// Koach Learn course (Swahili translation of shared/esl-workplace-english.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// ESL course: every English phrase being taught stays in English inside double quotes; only the teaching language is in Swahili.

module.exports = {
  id: "esl-workplace-english-sw",
  lang: "sw",
  translationOf: "esl-workplace-english",
  category: "Workforce Development",
  name: "Kiingereza cha Kazini (ESL)",
  skills: "Kujibu maswali ya mahojiano ya kazi, Maneno na alama za usalama, Kuripoti tatizo au jeraha, Kuomba msaada na kuhakikisha maelekezo, Kuzungumza kuhusu ratiba, Kuwasaidia wateja",
  outcome: "kutumia Kiingereza kifupi na kilicho wazi kazini: kujibu maswali ya kawaida ya mahojiano, kuelewa maneno ya usalama na kuripoti tatizo, kuomba msaada na kuhakikisha maelekezo, kuzungumza kuhusu ratiba yako, na kumsalimu na kumsaidia mteja.",
  about: [
    "Kozi hii ni kwa watu wazima wanaojifunza Kiingereza na wanaotaka kupata kazi au kufanya vizuri zaidi katika kazi waliyo nayo: katika maghala, jikoni, usafi, ujenzi, maduka, kazi ya kuhudumia wagonjwa na wazee, viwanda na ofisi.",
    "Utajifunza Kiingereza unachohitaji zaidi kazini: majibu ya mahojiano ya kazi, maneno ya usalama, jinsi ya kuripoti tatizo, jinsi ya kuomba msaada, jinsi ya kuzungumza kuhusu ratiba yako na jinsi ya kuongea na wateja. Kila somo lina maneno ya kusema, mfano wa mazungumzo na igizo unaloweza kufanya nyumbani.",
    "Kila somo linachukua kama dakika tano. Soma somo, soma mfano wa mazungumzo kwa sauti, kisha fanya kazi ya \"Jaribu sasa\". Kuna maswali mawili mafupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni.",
    "Mwishoni utaandika maandishi yako mwenyewe ya Kiingereza cha Kazini kwa kazi unayoitaka, na utayafanyia mazoezi kwa sauti."
  ],
  finalTask: "Andika maandishi yako ya Kiingereza cha Kazini kwa kazi unayoitaka, kwenye ukurasa mmoja: (1) jibu fupi kwa \"Tell me about yourself.\" (sentensi 3 hadi 4), (2) majibu ya maswali mengine mawili ya mahojiano, (3) maneno au alama tatu za usalama za kazi hiyo, pamoja na maana yake, (4) ujumbe wa kusema unaumwa au utachelewa, na (5) maneno mawili ya kumsaidia mteja au kumwomba mfanyakazi mwenzako msaada. Fanya mazoezi ya maandishi yote kwa sauti au kwa igizo na mwenzako, na ujirekodi ukiweza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaojifunza Kiingereza kama lugha ya pili wanaotafuta kazi au ambao tayari wanafanya kazi Marekani: wahamiaji na wakimbizi, vijana wazima, watu wanaorudi nyumbani kutoka gerezani, na wafanyakazi wa kazi za ngazi ya mwanzo wanaotaka kupanda cheo.",
    startingPoint: "Wanaweza kuwasalimu watu na kusema sentensi rahisi kwa Kiingereza. Wanaelewa baadhi ya maneno ya kazi lakini wanaogopa katika mahojiano, kwenye simu na wanapoongea na wasimamizi au wateja. Wengi wana ujuzi mzuri wa kazi kutoka nchi zao.",
    gap: "Wafanyakazi wasioweza kujibu maswali ya mahojiano, kuelewa onyo la usalama au kumwomba msimamizi aeleze kazi hukosa nafasi za kazi, hufanya makosa na wanaweza kuumia. Maneno machache ya kazini na tabia ya kuhakikisha maelekezo huwafanya wawe salama zaidi, wajiamini zaidi na iwe rahisi kupandishwa cheo.",
    constraints: [
      "Kiwango cha lugha: Kiingereza cha mwanzo hadi cha kati cha chini; maneno ya kawaida sana na sentensi fupi",
      "Kozi itatafsiriwa: maneno ya Kiingereza yanayofundishwa yanabaki kwa Kiingereza, ndani ya alama za nukuu",
      "Vifaa: simu au kompyuta ya maktaba; mazoezi yanafanyika kwa karatasi, mwenzako na sauti",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya zamu za kazi",
      "Sheria za kazini (sheria za kutoa taarifa ya kutofika, sheria za usalama) zinatofautiana kwa kila mwajiri: wanafunzi wanafuata kitabu cha mwongozo na mafunzo ya mwajiri wao"
    ],
    prerequisites: "Anaweza kusoma sentensi fupi na rahisi za Kiingereza. Kozi \"English for Everyday Life (ESL)\" ni kozi nzuri ya kwanza kwa wanafunzi wanaoanza kabisa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Katika mahojiano ya kazi", action: "kujibu maswali ya kawaida ya mahojiano kama \"Tell me about yourself\" kwa majibu mafupi uliyoyaandaa", standard: "kwa sentensi 2 hadi 4 zilizo wazi kwa kila jibu, pamoja na mfano mmoja halisi kutoka kazi yako au maisha yako" },
    { id: "O2", condition: "Ukipewa maneno, alama na maonyo ya kawaida ya usalama kazini", action: "kusema maana ya kila moja na la kufanya, na kuripoti hatari au jeraha kwa msimamizi", standard: "ukipata angalau 4 kati ya 5 sahihi na kuripoti mara moja" },
    { id: "O3", condition: "Unapopewa maelekezo usiyoyaelewa vizuri", action: "kumwomba msimamizi au mfanyakazi mwenzako msaada na kurudia maelekezo ili kuyahakikisha", standard: "kabla ya kuanza kazi" },
    { id: "O4", condition: "Ukipewa ratiba ya kazi au badiliko katika mipango yako", action: "kusoma saa za zamu yako na kumwambia msimamizi wako kwamba utachelewa, unaumwa au unahitaji likizo", standard: "ukitaja siku, saa na sababu, mapema kadiri unavyoweza" },
    { id: "O5", condition: "Mteja anapokujia", action: "kumsalimu mteja, kumpa msaada na kumwita mfanyakazi mwingine usipoweza kusaidia", standard: "kwa adabu na bila kubahatisha jibu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata kazi na kubaki salama",
      lessons: [
        {
          title: "Mahojiano ya kazi: kujibu maswali ya kawaida",
          objectives: ["O1"],
          minutes: 6,
          goal: "Jibu maswali matatu ya kawaida ya mahojiano kwa majibu mafupi uliyoyaandaa.",
          text: [
            "Mahojiano mengi huanza kwa maswali machache yale yale. Unaweza kuandaa majibu yako na kuyafanyia mazoezi kwa sauti. Majibu mafupi na yaliyo wazi ni bora kuliko marefu.",
            "\"Tell me about yourself.\" Jibu kuhusu kazi yako, si maisha yako binafsi: \"I have three years of experience in a restaurant kitchen. I am fast and careful. I want to grow in food service.\" \"Why do you want this job?\" Jibu: \"I like working with my hands, and this company has good training.\" \"When can you start?\" Jibu: \"I can start next Monday.\"",
            "Maswali mengine ya kawaida: \"What are your strengths?\" (\"I am on time and I learn fast.\") \"Can you work weekends?\" (\"Yes, I can work Saturdays.\") Mwishoni mara nyingi huuliza \"Do you have any questions?\" Kuwa na swali moja tayari: \"What does a normal day look like?\" au \"What are the hours?\"",
            "Uzoefu kutoka nchi yako una thamani. Useme: \"In Mexico I built houses for five years.\" Usipoelewa swali, tumia maneno unayoyajua: \"Sorry, can you repeat the question, please?\""
          ],
          steps: ["Andika majibu mafupi ya maswali ya kawaida.", "Tumia mfano mmoja halisi kutoka kazi yako au maisha yako katika kila jibu.", "Fanya mazoezi kwa sauti hadi uweze kuyasema bila kusoma.", "Andaa swali moja la kuuliza mwishoni.", "Ukikosa kuelewa swali, waombe walirudie."],
          words: [["\"Experience\"", "kazi uliyowahi kufanya kabla (uzoefu)."], ["\"Strengths\"", "mambo unayoyafanya vizuri (uwezo wako)."], ["\"Interview\"", "mkutano ambapo mwajiri anakuuliza maswali ili kuamua kama atakuajiri (mahojiano)."]],
          slides: [
            { title: "Andaa na ufanye mazoezi", bullets: ["Maswali yale yale huulizwa tena na tena", "Majibu mafupi na yaliyo wazi hushinda", "Fanya mazoezi kwa sauti"] },
            { title: "\"Tell me about yourself.\"", bullets: ["Ongea kuhusu kazi, si maisha yako binafsi", "\"I have three years of experience in a kitchen.\"", "\"I am fast and careful.\""] },
            { title: "Maswali mengine ya kawaida", bullets: ["\"Why do you want this job?\"", "\"What are your strengths?\"", "\"When can you start?\" \"Can you work weekends?\""] },
            { title: "Zamu yako kuuliza", bullets: ["\"Do you have any questions?\"", "\"What does a normal day look like?\"", "\"What are the hours?\""] }
          ],
          sources: [{ name: "USA Learns: kozi za bure za Kiingereza kwa watu wazima (Sacramento County Office of Education)", url: "https://www.usalearns.org/" }],
          tryIt: "Andika majibu yako kwa \"Tell me about yourself\", \"Why do you want this job?\" na \"When can you start?\" kwa kazi unayoitaka. Kila jibu liwe sentensi 2 hadi 4. Yasome kwa sauti mara tatu, kisha mwombe mwenzako akuhoji, au ujirekodi ukijibu.",
          youCanNow: "kujibu maswali ya kawaida ya mahojiano kwa majibu mafupi uliyoyaandaa, na kuuliza swali mwishoni mwa mahojiano.",
          quickCheck: [
            { objective: "O1", q: "Mhojaji anasema \"Tell me about yourself.\" Jibu bora ni lipi?", options: ["\"I have two years of experience cleaning offices. I am careful and on time.\"", "\"I don't know.\"", "\"I have three children and I like soccer and my favorite food is rice.\"", "\"What is your name?\""], answer: 0, why: "Linaongea kuhusu kazi na uwezo kwa sentensi fupi zilizo wazi." },
            { objective: "O1", q: "Mhojaji anauliza \"Do you have any questions?\" Jibu zuri ni lipi?", options: ["\"No.\"", "\"Where is the bathroom?\"", "\"What does a normal day look like?\"", "\"Goodbye.\""], answer: 2, why: "Swali kuhusu kazi linaonyesha kwamba unaipenda." }
          ]
        },
        {
          title: "Maneno, alama na maonyo ya usalama",
          objectives: ["O2"],
          minutes: 5,
          goal: "Sema maana ya alama na maonyo ya kawaida ya usalama na la kufanya.",
          text: [
            "Maneno ya usalama ndiyo Kiingereza muhimu zaidi kazini. Jifunze kwanza. Alama: \"Danger\" ni hatari kubwa inayoweza kukuua au kukuumiza vibaya. \"Caution\" au \"Warning\" ni kuwa mwangalifu. \"Exit\" ni njia ya kutoka. \"Authorized personnel only\" ni wafanyakazi wenye ruhusa tu ndio wanaweza kuingia. \"Wet floor\" ni sakafu inateleza.",
            "Maonyo ya mdomo ni mafupi na ya sauti kubwa: \"Watch out!\" \"Stop!\" \"Look out!\" \"Heads up!\" (kitu kinaweza kuanguka au kukujia). Ukisikia mojawapo, simama, angalia na uondoke mbali na hatari.",
            "Maneno ya vifaa vya kujikinga: \"Wear your gloves.\" \"Put on your safety glasses.\" \"Hard hat\" (kofia ngumu ya kulinda kichwa). \"Safety vest\" (fulana inayong'aa ili madereva wakuone). \"Ear plugs\" (vizibo vya masikio). Mwajiri wako anakufundisha kuhusu vifaa vya kazi yako. Usipoelewa mafunzo, uliza.",
            "Mfano wa mazungumzo. Msimamizi: \"Heads up! Forklift coming.\" Mfanyakazi: \"Okay!\" (anarudi nyuma). Msimamizi: \"Always wear your vest in this area.\" Mfanyakazi: \"Yes. My vest, always in this area.\""
          ],
          words: [["\"Hazard\"", "kitu kinachoweza kukuumiza, kama sakafu yenye maji au mashine inayotembea (hatari)."], ["\"Danger\"", "neno la alama kwa hatari kubwa inayoweza kukuua au kukuumiza vibaya."], ["\"Caution\"", "neno la alama linalomaanisha kuwa mwangalifu."], ["\"Protective equipment\"", "vifaa vinavyokulinda, kama glavu, miwani ya usalama au kofia ngumu."]],
          slides: [
            { title: "Maneno ya alama", bullets: ["\"Danger\": hatari kubwa", "\"Caution\" / \"Warning\": kuwa mwangalifu", "\"Exit\": njia ya kutoka", "\"Authorized personnel only\": ruhusa inahitajika"] },
            { title: "Maonyo ya mdomo", bullets: ["\"Watch out!\" \"Stop!\" \"Look out!\"", "\"Heads up!\": kuna kitu kinakuja", "Simama, angalia, ondoka"] },
            { title: "Vifaa vya kujikinga", bullets: ["\"Wear your gloves.\"", "\"Put on your safety glasses.\"", "\"Hard hat\" \"Safety vest\" \"Ear plugs\""] }
          ],
          sources: [{ name: "OSHA: Haki za wafanyakazi (US Department of Labor)", url: "https://www.osha.gov/workers" }],
          tryIt: "Tengeneza kadi ya maneno ya usalama kwa kazi unayoitaka: andika maneno au alama tano za usalama utakazoziona huko na maana ya kila moja. Sema kila moja kwa sauti. Kisha mwombe mwenzako aite maonyo (\"Watch out!\" \"Heads up!\") nawe uonyeshe ungefanya nini.",
          youCanNow: "kusema maana ya alama za kawaida za usalama, maonyo na maneno ya vifaa vya kujikinga, na la kufanya unaposikia onyo.",
          quickCheck: [
            { objective: "O2", q: "Mfanyakazi mwenzako anapiga kelele \"Heads up!\" Unafanya nini?", options: ["Unaangalia simu yako", "Unasimama, unaangalia na kuondoka mbali na kinachokuja", "Unaendelea kufanya kazi", "Unapiga kelele \"Heads up\" naye na kubaki hapo"], answer: 1, why: "\"Heads up!\" ina maana kitu kinaweza kuanguka au kukujia." },
            { objective: "O2", q: "Mlango una alama: \"Authorized personnel only\". Ina maana gani?", options: ["Mtu yeyote anaweza kuingia", "Ni njia ya kutoka", "Sakafu ina maji", "Wafanyakazi wenye ruhusa tu ndio wanaweza kuingia"], answer: 3, why: "\"Authorized personnel only\" ina maana unahitaji ruhusa kuingia." }
          ]
        },
        {
          title: "Kuripoti tatizo au jeraha",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ripoti hatari au jeraha kwa msimamizi wako mara moja.",
          text: [
            "Ukiona kitu kisicho salama, mwambie msimamizi wako mara moja: \"Excuse me, there is a problem. There is oil on the floor in aisle 4.\" \"This machine is making a strange noise.\" \"The ladder is broken.\"",
            "Ukiumia, hata kidogo, mwambie msimamizi wako siku hiyo hiyo: \"I hurt my hand. I cut it on a box.\" \"I hurt my back when I lifted that.\" Sema wapi na lini: \"It happened at 10 o'clock, at the loading dock.\" Wakati wa dharura, piga 911.",
            "Marekani, OSHA (shirika la serikali kuu la usalama kazini) linasema wafanyakazi wana haki, ikiwemo mafunzo ya usalama kwa lugha wanayoielewa, kuripoti jeraha la kazini, na kuomba ukaguzi wa mahali pa kazi pasipo salama. Sheria inasema mwajiri wako hawezi kukuadhibu kwa kutumia haki hizi. Angalia osha.gov/workers kwa maelezo zaidi.",
            "Mfano wa mazungumzo. Mfanyakazi: \"Excuse me, I need to report something. I slipped and hurt my knee.\" Msimamizi: \"When did it happen?\" Mfanyakazi: \"About ten minutes ago, near the freezer.\" Msimamizi: \"Okay, let's fill out a report.\""
          ],
          steps: ["Sema \"Excuse me, I need to report something.\"", "Sema kilichoharibika: hatari au jeraha.", "Sema kilitokea wapi na lini.", "Ripoti jeraha siku hiyo hiyo, hata likiwa dogo.", "Wakati wa dharura, piga 911."],
          words: [["\"Report\"", "kumwambia mtu sahihi kuhusu tatizo (kuripoti)."], ["\"Injury\"", "madhara kwenye mwili wako, kama kukatwa, kuungua au kuumia mgongo (jeraha)."], ["\"Supervisor\"", "mtu anayesimamia kazi yako (msimamizi)."], ["OSHA", "Occupational Safety and Health Administration, shirika la serikali kuu ya Marekani la usalama mahali pa kazi."]],
          slides: [
            { title: "Ripoti hatari", bullets: ["\"Excuse me, there is a problem.\"", "\"There is oil on the floor in aisle 4.\"", "\"The ladder is broken.\""] },
            { title: "Ripoti jeraha", bullets: ["\"I hurt my hand. I cut it on a box.\"", "Sema wapi na lini", "Siku hiyo hiyo, hata likiwa dogo"] },
            { title: "Haki zako (OSHA)", bullets: ["Mafunzo ya usalama kwa lugha unayoielewa", "Ripoti jeraha; omba ukaguzi", "Mwajiri wako hawezi kukuadhibu kwa hili", "Maelezo: osha.gov/workers"] }
          ],
          sources: [{ name: "OSHA: Haki za wafanyakazi (US Department of Labor)", url: "https://www.osha.gov/workers" }],
          tryIt: "Kwa mazoezi tu: andika ripoti mbili fupi, moja kuhusu hatari (kwa mfano sakafu yenye maji) na moja kuhusu jeraha dogo la kubuni. Kila moja iseme nini, wapi na lini. Zisome kwa sauti kana kwamba unaongea na msimamizi wako.",
          youCanNow: "kuripoti hatari au jeraha kwa msimamizi wako, ukisema nini, wapi na lini, na kutaja haki zako za msingi za usalama.",
          quickCheck: [
            { objective: "O2", q: "Unaona ngazi iliyovunjika kazini. Unamwambia nini msimamizi wako?", options: ["Hakuna kitu; mtu mwingine ataiona", "\"Excuse me, the ladder in the back room is broken.\"", "\"Watch out!\" kisha unaenda nyumbani", "\"Can I have a day off?\""], answer: 1, why: "Ukimwambia msimamizi nini na wapi, anaweza kurekebisha hatari kabla mtu hajaumia." },
            { objective: "O2", q: "Umejikata kidole kidogo kazini. Unaripoti lini?", options: ["Mwezi ujao", "Tu kikizidi kuwa kibaya", "Kamwe", "Siku hiyo hiyo"], answer: 3, why: "Ripoti kila jeraha la kazini siku hiyo hiyo, hata likiwa dogo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata kazi na kubaki salama",
        questions: [
          { objective: "O1", q: "Mhojaji anauliza \"When can you start?\" Jibu lililo wazi ni lipi?", options: ["\"I can start next Monday.\"", "\"Maybe.\"", "\"I like this company.\"", "\"Where is the exit?\""], answer: 0, why: "Linataja siku iliyo wazi." },
          { objective: "O1", q: "Hukuelewa swali la mahojiano. Unasema nini?", options: ["\"Yes.\"", "Husemi kitu", "\"Sorry, can you repeat the question, please?\"", "\"Goodbye.\""], answer: 2, why: "Kuomba warudie ni bora kuliko kubahatisha jibu." },
          { objective: "O2", q: "Alama inasema \"Danger\". Ina maana gani?", options: ["Choo", "Mahali pa kupumzika", "Hatari kubwa inayoweza kukuua au kukuumiza vibaya", "Chumba cha mapumziko"], answer: 2, why: "\"Danger\" inaonyesha hatari kubwa zaidi." },
          { objective: "O2", q: "Kipi ni kifaa cha kujikinga?", options: ["Miwani ya usalama", "Ratiba", "Hundi ya mshahara", "Risiti"], answer: 0, why: "Miwani ya usalama inalinda macho yako." },
          { objective: "O2", q: "Umeumia mgongo ukibeba boksi. Unasema nini?", options: ["\"Watch out!\"", "\"When can I start?\"", "\"Do you have any questions?\"", "\"I need to report something. I hurt my back lifting a box at 2 o'clock.\""], answer: 3, why: "Linasema kilichotokea, jinsi gani na lini." }
        ]
      }
    },
    {
      name: "Sura 2: Kila siku kazini",
      lessons: [
        {
          title: "Kuomba msaada na kuhakikisha maelekezo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Omba msaada na urudie maelekezo kabla ya kuanza.",
          text: [
            "Kazini, kosa linaweza kugharimu muda, pesa au usalama. Siku zote ni bora kuuliza kuliko kubahatisha. Wafanyakazi wazuri huuliza maswali.",
            "Kuomba msaada: \"Excuse me, can you help me?\" \"Can you show me how to do this?\" \"Where do I put these boxes?\" \"What should I do next?\" Kama hukuelewa: \"Sorry, can you explain that again, more slowly?\"",
            "Kabla ya kuanza, rudia maelekezo: \"So, first I clean the tables, then I fill the napkins?\" au \"Okay, I put the blue boxes on shelf 3. Is that right?\" Msimamizi wako atasema \"Yes\" au atakurekebisha.",
            "Mfano wa mazungumzo. Msimamizi: \"Please restock aisle 7 and then break down the empty boxes.\" Mfanyakazi: \"Okay. So, first I restock aisle 7, then I break down the boxes. Where do the boxes go?\" Msimamizi: \"In the recycling by the back door.\" Mfanyakazi: \"Got it. Thank you.\""
          ],
          steps: ["Sikiliza maelekezo yote.", "Uliza kuhusu chochote ambacho hukuelewa.", "Rudia hatua: \"So, first ..., then ...?\"", "Subiri \"Yes\" kabla ya kuanza.", "Uliza tena ukikwama: \"What should I do next?\""],
          words: [["\"Instruction\"", "maneno yanayokuambia jinsi ya kufanya kazi (maelekezo)."], ["\"Show me\"", "fanya mbele yangu ili nione jinsi gani (nionyeshe)."], ["\"Got it\"", "njia fupi ya kusema \"I understand\" (nimeelewa)."]],
          slides: [
            { title: "Uliza, usibahatishe", bullets: ["Makosa yanagharimu muda, pesa na usalama", "Wafanyakazi wazuri huuliza maswali"] },
            { title: "Kuomba msaada", bullets: ["\"Excuse me, can you help me?\"", "\"Can you show me how to do this?\"", "\"What should I do next?\""] },
            { title: "Rudia maelekezo", bullets: ["\"So, first I clean the tables, then I fill the napkins?\"", "\"Is that right?\"", "Subiri \"Yes\" kabla ya kuanza"] }
          ],
          tryIt: "Mwombe mwenzako au mtu wa familia akupe maelekezo ya hatua tatu kwa Kiingereza (kwa mfano jinsi ya kutengeneza sandwichi au kukunja shati). Yarudie kwa \"So, first ..., then ...?\" kabla ya kuyafanya. Kisha badilishaneni nafasi.",
          youCanNow: "kumwomba msimamizi au mfanyakazi mwenzako msaada, na kurudia maelekezo ili kuyahakikisha kabla ya kuanza.",
          quickCheck: [
            { objective: "O3", q: "Msimamizi wako anatoa maelekezo marefu. Unafanya nini kabla ya kuanza?", options: ["Unaanza na kutumaini ni sahihi", "Unarudia hatua ili kuhakikisha", "Unamuuliza mteja", "Unaenda mapumziko"], answer: 1, why: "Kurudia hatua kunagundua makosa kabla ya kuanza." },
            { objective: "O3", q: "Hujui kutumia mashine mpya. Unasema nini?", options: ["\"Can you show me how to do this?\"", "\"Got it.\"", "\"Heads up!\"", "Husemi kitu; unajaribu tu"], answer: 0, why: "\"Can you show me?\" ni kuomba msaada kwa njia salama na iliyo wazi." }
          ]
        },
        {
          title: "Ratiba: zamu, kuchelewa, siku za ugonjwa na likizo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Soma saa za zamu yako na umwambie msimamizi wako kwamba utachelewa, unaumwa au unahitaji likizo.",
          text: [
            "Zamu (shift) ni muda unaofanya kazi, kwa mfano \"Monday, 7 a.m. to 3:30 p.m.\" \"a.m.\" ni asubuhi (kabla ya saa 12 adhuhuri) na \"p.m.\" ni mchana na usiku. Ratiba yako inaweza pia kusema \"OFF\" kwa siku ambazo hufanyi kazi.",
            "Ukijua utachelewa, mwambie msimamizi wako kabla ya zamu yako: \"Hi, this is Carlos. I'm sorry, my bus is late. I will be about 20 minutes late.\" Ukiumwa: \"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\" Kila mwajiri ana sheria zake za kutoa taarifa, kwa hiyo angalia kitabu chako cha mwongozo au mwulize msimamizi wako uwaambie vipi na lini.",
            "Kuomba likizo, omba mapema, ana kwa ana au kwa maandishi: \"Can I have Friday the 14th off? I have an appointment.\" Kubadilishana zamu na mfanyakazi mwenzako: \"Can I switch shifts with Maria on Saturday?\"",
            "Mfano wa ujumbe mfupi: \"Hi Ms. Johnson, this is Carlos from the morning shift. I am sick today and cannot come in. I'm sorry. I will let you know about tomorrow.\""
          ],
          steps: ["Soma ratiba yako: siku, saa za kuanza na saa za kumaliza.", "Ukichelewa au ukiumwa: mwambie msimamizi wako kabla ya zamu yako.", "Sema wewe ni nani, kuna tatizo gani na utakuja lini.", "Omba likizo mapema, na utaje tarehe.", "Fuata sheria za mwajiri wako za kutoa taarifa."],
          words: [["\"Shift\"", "saa unazofanya kazi katika siku moja (zamu)."], ["\"Call in sick\"", "kumwambia mwajiri wako kwamba unaumwa na huwezi kufanya kazi."], ["\"Time off\"", "siku unazoomba usifanye kazi (likizo)."], ["\"Switch shifts\"", "kubadilishana saa za kazi na mfanyakazi mwenzako."]],
          slides: [
            { title: "Soma ratiba yako", bullets: ["\"Monday, 7 a.m. to 3:30 p.m.\"", "\"a.m.\" = asubuhi, \"p.m.\" = mchana na usiku", "\"OFF\" = hufanyi kazi"] },
            { title: "Kuchelewa au kuumwa", bullets: ["Waambie kabla ya zamu yako", "\"I will be about 20 minutes late.\"", "\"I'm sick today and I can't come in.\""] },
            { title: "Likizo na kubadilishana zamu", bullets: ["\"Can I have Friday the 14th off?\"", "\"Can I switch shifts with Maria on Saturday?\"", "Omba mapema"] },
            { title: "Sheria za mwajiri wako", bullets: ["Kila mwajiri ana sheria zake za kutoa taarifa", "Angalia kitabu cha mwongozo au mwulize msimamizi"] }
          ],
          tryIt: "Andika jumbe mbili kwa msimamizi mwenye jina la kubuni: moja ya kusema utachelewa dakika 15, na moja ya kusema unaumwa. Kila mmoja useme wewe ni nani, kuna tatizo gani na utakuja lini. Visome kwa sauti kana kwamba ni simu.",
          youCanNow: "kusoma saa za zamu yako, na kumwambia msimamizi wako waziwazi kwamba utachelewa, unaumwa au unahitaji likizo.",
          quickCheck: [
            { objective: "O4", q: "Ratiba yako inasema \"Tuesday 2 p.m. - 10 p.m.\" Unaanza kazi lini?", options: ["Saa 2 usiku wa manane (2 a.m.)", "Saa 10 asubuhi (10 a.m.)", "Saa 2 mchana (2 p.m.)", "Saa 10 usiku (10 p.m.)"], answer: 2, why: "\"p.m.\" ni mchana au usiku, kwa hiyo 2 p.m. ni saa 2 mchana." },
            { objective: "O4", q: "Basi lako limechelewa na utakosa mwanzo wa zamu yako. Unafanya nini?", options: ["Unamwambia msimamizi wako kabla zamu haijaanza", "Husemi kitu na unakuja umechelewa", "Unaenda nyumbani", "Unamwambia mteja"], answer: 0, why: "Kumwambia msimamizi mapema ni heshima na kunamsaidia kupanga." }
          ]
        },
        {
          title: "Kuongea na wateja",
          objectives: ["O5"],
          minutes: 5,
          goal: "Msalimu mteja, mpe msaada na umwite mfanyakazi mwingine usipoweza kusaidia.",
          text: [
            "Wateja wanapenda wafanyakazi wakarimu na wanaoeleweka. Wasalimu: \"Hi, welcome!\" au \"Good morning.\" Toa msaada: \"Can I help you find something?\" \"What can I get for you?\"",
            "Ukijua jibu, liwe fupi: \"Yes, it's in aisle 9.\" \"It comes with fries.\" Usipojua, usibahatishe kamwe. Sema: \"Let me check for you.\" au \"One moment, please. I'll get my manager.\"",
            "Mteja akiongea haraka sana: \"Sorry, could you say that again, please?\" Akiwa amekasirika, baki mtulivu na mwenye adabu: \"I'm sorry about that. Let me get someone who can help.\" Maliza kwa: \"Have a nice day!\"",
            "Mfano wa mazungumzo. Mfanyakazi: \"Hi, welcome! Can I help you find something?\" Mteja: \"Do you have this jacket in a large?\" Mfanyakazi: \"Let me check for you. One moment, please.\" (anaangalia) \"Yes, here you go.\" Mteja: \"Thanks!\" Mfanyakazi: \"You're welcome. Have a nice day!\""
          ],
          steps: ["Salimu: \"Hi, welcome!\"", "Toa msaada: \"Can I help you find something?\"", "Jibu kwa ufupi ukijua.", "Usipojua: \"Let me check for you.\" au mwite meneja.", "Maliza: \"Have a nice day!\""],
          words: [["\"Customer\"", "mtu anayenunua au kutumia kile biashara inachouza (mteja)."], ["\"Manager\"", "mtu anayesimamia duka au timu (meneja)."], ["\"Let me check\"", "njia ya adabu ya kusema utatafuta jibu."]],
          slides: [
            { title: "Salimu na utoe msaada", bullets: ["\"Hi, welcome!\"", "\"Can I help you find something?\"", "\"What can I get for you?\""] },
            { title: "Hujui? Usibahatishe", bullets: ["\"Let me check for you.\"", "\"One moment, please. I'll get my manager.\""] },
            { title: "Nyakati ngumu", bullets: ["\"Sorry, could you say that again, please?\"", "Mteja aliyekasirika: \"I'm sorry about that.\"", "\"Let me get someone who can help.\""] },
            { title: "Maliza vizuri", bullets: ["\"You're welcome.\"", "\"Have a nice day!\""] }
          ],
          tryIt: "Kazi ya mwisho: andika maandishi yako ya Kiingereza cha Kazini kwa kazi unayoitaka: jibu lako kwa \"Tell me about yourself\", majibu mengine mawili ya mahojiano, maneno matatu ya usalama na maana zake, ujumbe wa kuumwa au kuchelewa, na maneno mawili ya kumhudumia mteja au kumwomba mfanyakazi mwenzako msaada. Yafanyie mazoezi kwa sauti au kwa igizo, na ujirekodi ukiweza.",
          youCanNow: "kumsalimu mteja, kumpa msaada, na kumwita mtu sahihi usipojua jibu.",
          quickCheck: [
            { objective: "O5", q: "Mteja anauliza swali na hujui jibu. Unasema nini?", options: ["Unabahatisha jibu", "\"I don't know\" kisha unaondoka", "\"That's not my job.\"", "\"Let me check for you.\""], answer: 3, why: "Kuangalia au kumwita meneja ni adabu na kunampa mteja jibu sahihi." },
            { objective: "O5", q: "Mteja anakujia. Kitu kizuri cha kwanza kusema ni kipi?", options: ["\"What?\"", "\"Hi, welcome! Can I help you find something?\"", "\"Heads up!\"", "\"I'm sick today.\""], answer: 1, why: "Salamu na kutoa msaada huanza mazungumzo vizuri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kila siku kazini",
        questions: [
          { objective: "O3", q: "Msimamizi wako anasema \"Put the red boxes on shelf 2.\" Unahakikishaje?", options: ["\"Got it\" kisha unayaweka kwenye rafu 3", "\"So, the red boxes go on shelf 2?\"", "Husemi kitu", "\"Have a nice day!\""], answer: 1, why: "Kurudia maelekezo kunahakikisha ulisikia sawasawa." },
          { objective: "O3", q: "Umemaliza kazi yako na hujui la kufanya. Unauliza nini?", options: ["\"What should I do next?\"", "\"Can I go home?\"", "\"Where is the exit?\"", "\"Watch out!\""], answer: 0, why: "Kuuliza la kufanya baadaye kunaonyesha uko tayari kufanya kazi." },
          { objective: "O4", q: "\"Shift\" ni nini?", options: ["Aina ya sare", "Alama ya usalama", "Saa unazofanya kazi katika siku moja", "Siku ya mapumziko"], answer: 2, why: "Zamu (shift) ni muda unaofanya kazi." },
          { objective: "O4", q: "Unahitaji likizo Ijumaa ijayo kwa miadi. Unasema nini, na lini?", options: ["Husemi kitu; huji tu", "Unamwambia mteja siku ya Ijumaa", "Unamtumia msimamizi ujumbe wakati wa zamu yako ya Ijumaa", "Unamwomba msimamizi wako mapema: \"Can I have Friday the 14th off?\""], answer: 3, why: "Kuomba mapema, ukitaja tarehe, kunampa msimamizi wako muda wa kupanga." },
          { objective: "O5", q: "Mteja amekasirika. Jambo bora la kusema ni lipi?", options: ["\"Not my problem.\"", "\"Calm down!\"", "\"I'm sorry about that. Let me get someone who can help.\"", "\"Goodbye.\""], answer: 2, why: "Kubaki mtulivu na kutafuta msaada ni adabu na kunatatua tatizo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kiingereza cha Kazini (ESL)",
    questions: [
      { objective: "O1", q: "Katika mahojiano, \"Tell me about yourself\" ina maana:", options: ["Waambie kuhusu kazi yako na uwezo wako", "Waambie hadithi ya maisha yako yote", "Waulize kuhusu wao wenyewe", "Taja anwani yako"], answer: 0, why: "Wanataka kusikia kuhusu kazi yako, ujuzi wako na malengo yako kwa sentensi chache." },
      { objective: "O1", q: "Lipi ni jibu zuri kwa \"What are your strengths?\"", options: ["\"Nothing.\"", "\"I don't know.\"", "\"I'm sick today.\"", "\"I am always on time and I learn fast.\""], answer: 3, why: "Linataja mambo mawili unayoyafanya vizuri." },
      { objective: "O1", q: "Ulifanya kazi ya ujenzi katika nchi yako. Je, useme hivyo kwenye mahojiano?", options: ["Hapana, haina thamani", "Ndiyo: \"In Mexico I built houses for five years.\"", "Tu wakiuliza kwa Kihispania", "Kwenye karatasi tu"], answer: 1, why: "Uzoefu wa kazi kutoka nchi yako una thamani na unaonyesha ujuzi wako." },
      { objective: "O2", q: "Alama ya \"Caution\" ina maana gani?", options: ["Kuwa mwangalifu", "Njia ya kutoka", "Chumba cha mapumziko", "Chakula cha bure"], answer: 0, why: "\"Caution\" ina maana kuwa mwangalifu." },
      { objective: "O2", q: "Mtu anapiga kelele \"Watch out!\" Unafanya nini?", options: ["Unaendelea kutembea", "Unapiga kelele naye", "Unasimama, unaangalia na kuondoka mbali na hatari", "Unafumba macho"], answer: 2, why: "\"Watch out!\" inakuonya kuhusu hatari iliyo karibu nawe." },
      { objective: "O2", q: "\"Hazard\" ni nini?", options: ["Aina ya chombo cha kazi", "Kitu kinachoweza kukuumiza", "Mteja", "Ratiba"], answer: 1, why: "\"Hazard\" ni kitu kinachoweza kukuumiza, kama sakafu yenye maji." },
      { objective: "O2", q: "Unaona mafuta sakafuni katika njia ya 4 (aisle 4). Unamwambia nini msimamizi wako?", options: ["\"Have a nice day!\"", "\"Can I switch shifts?\"", "\"Got it.\"", "\"Excuse me, there is oil on the floor in aisle 4.\""], answer: 3, why: "Sema hatari ni ipi na iko wapi." },
      { objective: "O2", q: "Kipi kati ya hivi ni haki ya mfanyakazi kwenye orodha ya OSHA?", options: ["Chakula cha mchana cha bure kila siku", "Mafunzo ya usalama kwa lugha unayoielewa", "Kuchagua mshahara wako mwenyewe", "Kutokuwa na ratiba"], answer: 1, why: "OSHA inataja mafunzo ya usalama kwa lugha unayoielewa kama haki ya mfanyakazi." },
      { objective: "O2", q: "Unapaswa kuripoti jeraha dogo kazini lini?", options: ["Siku hiyo hiyo", "Tu likizidi kuwa baya", "Mwishoni mwa mwaka", "Kamwe"], answer: 0, why: "Ripoti kila jeraha siku hiyo hiyo, hata yale madogo." },
      { objective: "O3", q: "Huelewi maelekezo. Lipi ni bora?", options: ["Unabahatisha na kuanza", "Unamuuliza mteja", "Unauliza: \"Sorry, can you explain that again, more slowly?\"", "Unaenda nyumbani"], answer: 2, why: "Kuuliza ni salama zaidi na haraka zaidi kuliko kubahatisha." },
      { objective: "O3", q: "Sentensi ipi inarudia maelekezo?", options: ["\"Hi, welcome!\"", "\"Heads up!\"", "\"I'm sick today.\"", "\"So, first I sweep, then I mop. Is that right?\""], answer: 3, why: "Inarudia hatua na kuuliza kama ni sahihi." },
      { objective: "O3", q: "\"Got it\" ina maana gani?", options: ["Nimeelewa", "Nina mafua", "Nimekipoteza", "Nipe hicho"], answer: 0, why: "\"Got it\" ni njia fupi ya kusema \"I understand\" (nimeelewa)." },
      { objective: "O4", q: "\"a.m.\" ina maana gani kwenye ratiba?", options: ["Mchana", "Usiku", "Asubuhi, kabla ya saa 12 adhuhuri", "Siku ya mapumziko"], answer: 2, why: "\"a.m.\" ni asubuhi." },
      { objective: "O4", q: "Unaumwa. Ujumbe gani mzuri kwa msimamizi wako?", options: ["\"Not coming.\"", "\"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\"", "Husemi kitu", "\"Watch out!\""], answer: 1, why: "Unasema wewe ni nani, kuna tatizo gani, na kwamba hutakuja." },
      { objective: "O4", q: "Unapataje sheria za kazini kwako za kutoa taarifa ya kutofika?", options: ["Unamuuliza mteja", "Unabahatisha", "Unatumia sheria za kampuni nyingine", "Unaangalia kitabu cha mwongozo au unamwuliza msimamizi wako"], answer: 3, why: "Kila mwajiri ana sheria zake za kutoa taarifa." },
      { objective: "O5", q: "\"Let me check for you\" ina maana gani?", options: ["Nitatafuta jibu", "Ondoka", "Mimi ni meneja", "Ni bure"], answer: 0, why: "Inasema kwa adabu kwamba utatafuta jibu." },
      { objective: "O5", q: "Mteja anauliza kuhusu kitu usichokijua. Ni kipi USICHOPASWA kufanya?", options: ["Kumwita meneja wako", "Kusema \"Let me check for you\"", "Kubahatisha jibu", "Kumuuliza mfanyakazi mwenzako"], answer: 2, why: "Kubahatisha kunaweza kumpa mteja taarifa zisizo sahihi." },
      { objective: "O5", q: "Ipi ni njia ya adabu ya kumaliza na mteja?", options: ["\"What?\"", "\"Have a nice day!\"", "\"Heads up!\"", "\"I'm late.\""], answer: 1, why: "\"Have a nice day!\" ni kwaheri ya kirafiki." },
      { objective: "O1", q: "Mwishoni mwa mahojiano, swali lipi ni zuri kuuliza?", options: ["\"What does a normal day look like?\"", "\"Can I leave now?\"", "\"Watch out!\"", "\"Where is the bathroom?\""], answer: 0, why: "Swali kuhusu kazi linaonyesha kwamba unaipenda." },
      { objective: "O3", q: "Kazi yako mpya ina hatua usiyoijua. Unasema nini?", options: ["\"Have a nice day!\"", "\"I'm sick today.\"", "\"Let me check for you.\"", "\"Can you show me how to do this step?\""], answer: 3, why: "Kuomba kuonyeshwa ndiyo njia salama ya kujifunza hatua mpya." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, fanya mazoezi ya sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Majibu ya mahojiano", objective: "O1", notYet: "Majibu hayapo, ni marefu sana, au ni kuhusu maisha binafsi badala ya kazi.", meets: "\"Tell me about yourself\" na majibu mengine mawili, kila moja sentensi 2 hadi 4 zilizo wazi pamoja na mfano mmoja halisi.", exceeds: "Anayasema kwa sauti bila kusoma na anaongeza swali la kuuliza mwishoni." },
      { name: "Maneno ya usalama", objective: "O2", notYet: "Maneno chini ya matatu, au maana si sahihi.", meets: "Maneno au alama tatu za usalama za kazi hiyo, kila moja na maana sahihi.", exceeds: "Pia anaonyesha jinsi ya kuripoti hatari au jeraha: nini, wapi na lini." },
      { name: "Kuomba msaada", objective: "O3", notYet: "Hakuna maneno ya kuomba msaada, au hakuna njia ya kuhakikisha maelekezo.", meets: "Maneno moja ya kuomba msaada na sentensi moja inayorudia maelekezo.", exceeds: "Anayatumia sawasawa katika igizo na mwenzake." },
      { name: "Ujumbe wa kuchelewa au kuumwa", objective: "O4", notYet: "Haukutaja wewe ni nani, kuna tatizo gani au utakuja lini.", meets: "Ujumbe ulio wazi na wa adabu wenye jina, sababu na muda.", exceeds: "Pia anaeleza jinsi mwajiri wake anavyotaka taarifa zitolewe (kitabu cha mwongozo au msimamizi)." },
      { name: "Maneno ya kuhudumia wateja", objective: "O5", notYet: "Hakuna maneno ya wateja, au maneno si ya adabu.", meets: "Salamu pamoja na kutoa msaada, na maneno ya kusema usipojua.", exceeds: "Anamhudumia kwa adabu mteja aliyekasirika katika igizo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya mahojiano ya kazi kwa Kiingereza ndani ya siku 30, na wangapi wanapata nafasi ya kazi (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kumwomba msimamizi msaada au kuripoti hatari kwa Kiingereza ndani ya siku 30",
      "Waajiri washirika wanaripoti makosa machache na matukio machache ya usalama yanayosababishwa na maelekezo yasiyoeleweka"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kutazama masomo, au nakala iliyochapishwa ya maandishi ya somo",
      "Karatasi na kalamu kwa maandishi na kadi za maneno ya usalama",
      "Mwenzako wa kufanya maigizo, au simu ya kujirekodi",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Fanyeni kila mfano wa mazungumzo kama igizo: usomeni, badilishaneni nafasi, kisha badilisheni maelezo (kazi tofauti, saa tofauti au tatizo tofauti).",
      "Matoleo yaliyotafsiriwa yanabakiza maneno ya Kiingereza kwa Kiingereza; yaelezeni kwa lugha ya wanafunzi lakini yafanyieni mazoezi kwa Kiingereza.",
      "Rekebisha somo la usalama lilingane na kazi wanazotaka wanafunzi; leta alama halisi au picha kutoka mahali pa kazi pa karibu ukiweza.",
      "Sheria za kutoa taarifa ya kutofika, sheria za likizo na sheria za usalama zinatofautiana kwa kila mwajiri: wakumbushe wanafunzi kufuata kitabu cha mwongozo na mafunzo ya mwajiri wao. Kozi hii inafundisha lugha, si sheria za mwajiri.",
      "Tumia majina na maelezo ya kubuni katika ripoti na jumbe za mazoezi. Unganisha kozi hii na msaada wa kutafuta kazi (angalia \"Resumes, LinkedIn and Job Interviews\")."
    ]
  }
};
