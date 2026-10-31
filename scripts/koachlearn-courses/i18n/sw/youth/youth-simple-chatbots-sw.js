"use strict";

// Koach Learn course (Swahili translation of youth/youth-simple-chatbots.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Python code, keywords and the bot's printed lines stay in English exactly as in the English course.

module.exports = {
  id: "youth-simple-chatbots-sw",
  lang: "sw",
  translationOf: "youth-simple-chatbots",
  category: "Youth",
  name: "Kujenga Chatbot Rahisi za AI",
  skills: "Kupanga kazi ya chatbot, Kujenga chatbot ya maneno muhimu kwa Python, Kuandika maelekezo ya bot kwa msaidizi wa AI, Kupima kwa maswali halisi, Kufanya bot iwe salama na ya kweli",
  outcome: "kujenga chatbot rahisi ya maswali na majibu kwa klabu ya shule: bot ya maneno muhimu kwa Python inayojibu angalau maswali matano ya kawaida, na maelekezo yanayogeuza msaidizi wa AI wa bure kuwa msaidizi wa klabu, zote zikiwa zimepimwa kwa maswali halisi na kuwekwa salama na za kweli.",
  about: [
    "Kozi hii ni ya vijana wanaotaka kujua jinsi chatbot zinavyofanya kazi kwa kujenga moja. Huhitaji uzoefu wa kuandika programu (coding); utanakili mifumo midogo ya code na kuibadilisha.",
    "Utapanga chatbot kwa kitu halisi, kama klabu yako ya roboti, bendi au timu ya michezo. Kwanza utajenga bot rahisi ya maneno muhimu kwa Python ndani ya Google Colab, daftari la bure linalofanya kazi kwenye kivinjari cha wavuti. Kisha utaandika maelekezo yanayomfanya msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini awe msaidizi wa klabu, na utalinganisha hizo mbili. Mwishoni utazipima zote mbili na kuzifanya salama na za kweli.",
    "Google Colab na wasaidizi wa AI wanahitaji akaunti na wana umri wa chini unaoruhusiwa. Soma masharti ya kila zana, fuata sheria za shule yako kuhusu AI, na mshirikishe mzazi au mlezi unapojisajili. Kila somo linaisha na kazi ya \"Jaribu sasa\", jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga chatbot kwa klabu au timu ya shule. Sehemu ya 1: bot ya maneno muhimu ya Python ndani ya Google Colab inayomsalimu mtumiaji, inajibu angalau maswali matano ya kawaida (kama saa ya mkutano, mahali na jinsi ya kujiunga), inasema \"Sijui, tafadhali muulize mlezi wa klabu\" kwa jambo lingine lolote, na inasimama mtumiaji anapoandika bye. Sehemu ya 2: kadi ya maelekezo inayomfanya msaidizi wa AI wa bure awe msaidizi wa klabu. Zipime zote mbili kwa maswali 10 halisi, andika kila moja ilipata nini sahihi na nini si sahihi, na fanya uboreshaji mmoja kwa kila moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wanaotaka kuelewa jinsi chatbot zinavyofanya kazi kwa kujenga moja kwa ajili ya kikundi halisi kama klabu, bendi au timu ya michezo, wawe na uzoefu wa kuandika code au la.",
    startingPoint: "Wameshatumia chatbot kwenye tovuti, michezo au wasaidizi wa AI. Wengi hawajawahi kuandika code, kupanga kazi ya bot, au kupima bot na kurekebisha kilichoshindwa.",
    gap: "Chatbot ziko kila mahali, lakini vijana wengi wanazitumia tu. Kujenga bot rahisi ya maneno muhimu na msaidizi wa AI kunaonyesha jinsi zote mbili zinavyofanya kazi, mahali kila moja inaposhindwa, na kwa nini bot lazima ziwe za kweli na zilinde faragha. Hizi ni ujuzi halisi kwa kuandika code, kazi za teknolojia na kuhudumia vikundi vyao wenyewe.",
    constraints: [
      "Mipaka ya umri: Google Colab na wasaidizi wa AI wanahitaji akaunti na wana umri wa chini; mzazi au mlezi anashirikishwa katika kujisajili",
      "Sheria za shule kuhusu AI na teknolojia; mlezi wa klabu anaidhinisha kushiriki bot",
      "Wanaoanza: mifumo midogo ya code ya kunakili na kubadilisha; kama dakika tano kwa kila somo",
      "Vifaa: kompyuta yenye kivinjari cha wavuti; hakuna cha kusakinisha",
      "Faragha: bot haziombi wala kuhifadhi kamwe nywila, namba za simu, anwani au namba za vitambulisho"
    ],
    prerequisites: "Hakuna. Kozi \"Intro to Coding with AI\" (Utangulizi wa kuandika code kwa AI) inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mifano ya chatbot", action: "kueleza jinsi chatbot ya maneno muhimu na chatbot ya AI zinavyofanya kazi, pamoja na uwezo mmoja na kikomo kimoja cha kila moja", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Kwa klabu, timu au kikundi halisi", action: "kuandika mpango wa bot unaosema inamsaidia nani, majibu matano au zaidi yaliyokaguliwa, jibu la akiba na mambo ambayo haipaswi kufanya kamwe", standard: "kila jibu likiwa limekaguliwa na mlezi wa klabu" },
    { id: "O3", condition: "Ukitumia Google Colab", action: "kujenga chatbot ya maneno muhimu kwa Python yenye kitanzi, majibu kwa maneno muhimu, jibu la akiba na kuaga", standard: "ili ifanye kazi na ijibu angalau maswali matano" },
    { id: "O4", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuandika kadi ya maelekezo yenye jukumu, ukweli uliokaguliwa, mtindo wa kuongea na mipaka, inayomfanya msaidizi awe msaidizi wa klabu", standard: "ili apeleke maswali asiyoyajua kwa mlezi na asiombe taarifa yoyote binafsi" },
    { id: "O5", condition: "Ukipewa maswali 10 ya majaribio yanayofanana na halisi", action: "kupima bot zote mbili, kuweka alama kila jibu kama sahihi, si sahihi au la kubuni, na kurekebisha kinachoshindwa", standard: "ukifanya angalau marekebisho moja kwa kila bot na kupima tena" },
    { id: "O6", condition: "Kabla ya kushiriki bot yako", action: "kuongeza salamu inayosema ni bot, mipaka ya faragha na usalama, na kupata ruhusa ya mlezi wako", standard: "maswali mazito au yasiyojulikana yakipelekwa kwa mtu mzima unayemwamini" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi chatbot zinavyofanya kazi, na bot yako ya kwanza",
      lessons: [
        {
          objectives: ["O1"],
          title: "Chatbot ni nini, na njia mbili za kuijenga",
          minutes: 4,
          goal: "Eleza tofauti kati ya chatbot ya maneno muhimu na chatbot ya AI.",
          text: [
            "Chatbot ni programu unayozungumza nayo kwa kuandika au kuongea. Unaziona kwenye tovuti (\"Nikusaidie vipi?\"), kwenye michezo na kwenye apps.",
            "Kuna aina kuu mbili. Chatbot ya maneno muhimu inafuata sheria alizoandika mtu: kama ujumbe una neno \"time\" (saa), jibu kwa saa ya mkutano. Ni rahisi na unajua itafanya nini, lakini inajua tu kile ulichoifundisha. Chatbot ya AI inatumia large language model (modeli kubwa ya lugha), iliyojifunza kutoka kwa maandishi mengi sana. Inaweza kujibu karibu kila kitu kwa maneno ya kawaida, lakini pia inaweza kukosea au kubuni mambo.",
            "Katika kozi hii utajenga zote mbili kwa matumizi halisi, kama kujibu maswali ya wanachama wapya wa klabu yako, ili uone uwezo na mipaka ya kila moja."
          ],
          words: [["Chatbot", "programu unayozungumza nayo kwa kuandika au kuongea."], ["Neno muhimu (keyword)", "neno ambalo bot inalitafuta ili kuamua jinsi ya kujibu."], ["Large language model", "modeli kubwa ya lugha: aina ya AI iliyo nyuma ya wasaidizi kama ChatGPT; ilijifunza mifumo kutoka kwa maandishi mengi sana."]],
          slides: [
            { title: "Chatbot ni...", bullets: ["Programu unayozungumza nayo", "Kwenye tovuti, michezo na apps"] },
            { title: "Chatbot ya maneno muhimu", bullets: ["Inafuata sheria alizoandika mtu", "Rahisi, na unajua itafanya nini", "Inajua tu ulichoifundisha"] },
            { title: "Chatbot ya AI", bullets: ["Inatumia large language model", "Inajibu kwa maneno ya kawaida", "Inaweza kukosea au kubuni mambo"] }
          ],
          tryIt: "Chagua klabu, timu au kikundi unachoshiriki. Andika maswali matano ambayo wanachama wapya huuliza kila mara, kama mnakutana lini, wapi, na jinsi ya kujiunga.",
          youCanNow: "kueleza jinsi chatbot za maneno muhimu na chatbot za AI zinavyotofautiana, na kuchagua matumizi halisi ya bot.",
          quickCheck: [
            { objective: "O1", q: "Kikomo kimoja cha chatbot ya maneno muhimu ni kipi?", options: ["Hujui itafanya nini", "Inajua tu kile ulichoifundisha", "Inabuni ukweli mara nyingi", "Inahitaji large language model"], answer: 1, why: "Bot ya maneno muhimu inafuata sheria alizoandika mtu, kwa hiyo inajua tu kile ilichofundishwa." },
            { objective: "O1", q: "Unahitaji bot inayotoa kila mara saa ile ile ya mkutano iliyokaguliwa. Aina ipi ni salama zaidi?", options: ["Chatbot ya AI isiyo na maelekezo", "Hakuna aina inayoweza kufanya hivi", "Bot yoyote ya tovuti", "Chatbot ya maneno muhimu yenye jibu lililokaguliwa"], answer: 3, why: "Bot za maneno muhimu ni rahisi na unajua zitafanya nini; bot za AI zinaweza kukosea au kubuni mambo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanga kazi ya bot yako",
          minutes: 5,
          goal: "Andika mpango rahisi: bot inamsaidia nani, inajibu nini na haipaswi kufanya nini kamwe.",
          text: [
            "Bot nzuri zina kazi ndogo na iliyo wazi. Andika mpango wa bot wenye sehemu nne: inamsaidia nani (kwa mfano, wanachama wapya wa klabu ya chess), maswali inayojibu, majibu (yaliyokaguliwa na mlezi wako), na itasema nini isipojua.",
            "Amua pia mambo ambayo bot haipaswi kufanya kamwe: isiombe nywila, namba za simu au anwani za nyumbani, isijifanye kuwa mtu halisi, na isitoe ushauri kuhusu afya, pesa au sheria. Ikiwa na shaka, inawapeleka watu kwa mtu mzima halisi, kama mlezi wa klabu.",
            "Msaidizi wa AI anaweza kukusaidia kufikiria maswali zaidi: \"Wanachama wapya wa klabu ya chess ya sekondari wanaweza kuuliza nini? Orodhesha 10.\" Kisha kagua majibu wewe mwenyewe."
          ],
          steps: ["Andika bot inamsaidia nani.", "Orodhesha maswali 5 hadi 10 itakayojibu.", "Andika jibu fupi lililokaguliwa kwa kila swali.", "Andika jibu la \"Sijui\" linalowapeleka watu kwa mtu mzima halisi.", "Orodhesha mambo ambayo bot haipaswi kufanya kamwe."],
          words: [["Mpango wa bot", "maelezo mafupi ya kile bot inachofanya na isichofanya."], ["Jibu la akiba (fallback)", "kile bot inachosema isipojua."]],
          slides: [
            { title: "Kazi ndogo, iliyo wazi", bullets: ["Inamsaidia nani", "Maswali na majibu yaliyokaguliwa", "Inasema nini isipojua"] },
            { title: "Kamwe", bullets: ["Usiombe nywila, namba za simu au anwani", "Usijifanye kuwa mtu halisi", "Usitoe ushauri wa afya, pesa au sheria"] },
            { title: "Fikiria mawazo pamoja na AI", bullets: ["Omba maswali zaidi yanayoweza kuulizwa", "Kagua kila jibu wewe mwenyewe"] }
          ],
          tryIt: "Andika mpango wa bot yako: inamsaidia nani, maswali yako matano na majibu yaliyokaguliwa, jibu lako la akiba, na mambo matatu ambayo haipaswi kufanya kamwe. Muulize msaidizi wa AI maswali mengine matano ambayo huenda umeyasahau.",
          youCanNow: "kupanga kazi ya chatbot, majibu yake, jibu la akiba na sheria za usalama.",
          quickCheck: [
            { objective: "O2", q: "Kazi nzuri kwa bot ni ipi?", options: ["Kazi ndogo na iliyo wazi, kama kujibu maswali ya wanachama wapya", "Kujibu kila swali duniani", "Kutoa ushauri wa afya", "Kujifanya kuwa rais wa klabu"], answer: 0, why: "Bot nzuri zina kazi ndogo na iliyo wazi." },
            { objective: "O2", q: "AI inapendekeza jibu kuhusu ada za klabu kwa mpango wa bot yako. Unafanya nini?", options: ["Unalitumia kama lilivyo", "Unaacha ada nje ya mpango milele", "Unalikagua na mlezi wa klabu kabla ya kuliongeza", "Unabuni namba nyingine"], answer: 2, why: "Majibu ya bot lazima yakaguliwe na mlezi, si kuchukuliwa kutoka AI." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kujenga chatbot ya maneno muhimu kwa Python",
          minutes: 6,
          goal: "Jenga na endesha chatbot ya maneno muhimu ndani ya Google Colab.",
          text: [
            "Fungua Google Colab kwenye colab.research.google.com, ingia kwa akaunti unayoruhusiwa kutumia, na anzisha daftari jipya (notebook). Bot inatumia kitanzi (loop) kinachoendelea kuomba ujumbe, na kauli za if zinazotafuta maneno muhimu.",
            "Huu ndio mfumo, mstari kwa mstari: while True: inaanzisha kitanzi kinachojirudia. Ndani yake, msg = input(\"You: \").lower() inasoma ujumbe kwa herufi ndogo. if \"bye\" in msg: print(\"Bot: See you!\") kisha break inasimamisha kitanzi. elif \"time\" in msg: print(\"Bot: We meet Tuesdays at 3:30.\") inajibu swali moja. else: print(\"Bot: I don't know. Please ask the club advisor.\") ndilo jibu la akiba. Sogeza ndani (indent) mistari iliyo ndani ya kitanzi na ndani ya kila if.",
            "Ongeza elif moja kwa kila swali katika mpango wako. Ukipata kosa (error), soma mstari wa mwisho na namba ya mstari, angalia kama kuna nukta mbili (:), alama ya nukuu au nafasi ya indent inayokosekana, na ukikwama, bandika code na kosa kwa msaidizi wa AI na umwombe akueleze."
          ],
          steps: ["Fungua daftari jipya la Colab.", "Andika while True: na usogeze ndani mistari inayofuata.", "Soma ujumbe: msg = input(\"You: \").lower()", "Ongeza if \"bye\" in msg: pamoja na print ya kuaga na break.", "Ongeza elif moja kwa kila swali, na else ya akiba. Iendeshe na uzungumze na bot yako."],
          words: [["Kitanzi (loop)", "code inayojirudia; while True inajirudia hadi break."], ["elif", "kifupi cha else if: angalia sharti jingine."], ["break", "inasimamisha kitanzi."], [".lower()", "inabadilisha maandishi kuwa herufi ndogo ili \"TIME\" na \"time\" zilingane."]],
          slides: [
            { title: "Mfumo", bullets: ["while True: inaendeleza mazungumzo", "msg = input(\"You: \").lower()", "if \"bye\" in msg: aga, kisha break"] },
            { title: "Majibu", bullets: ["elif \"time\" in msg: print saa ya mkutano", "elif moja kwa kila swali", "else: jibu la akiba"] },
            { title: "Ikiharibika", bullets: ["Soma mstari wa mwisho wa kosa", "Angalia nukta mbili, alama za nukuu na indent", "Muombe AI akueleze kosa"] }
          ],
          tryIt: "Jenga bot yako ya maneno muhimu ndani ya Colab ikiwa na kuaga, angalau majibu matatu kutoka kwenye mpango wako, na jibu la akiba. Zungumza nayo na ujaribu swali moja ambalo haipaswi kulijua.",
          youCanNow: "kujenga na kuendesha chatbot ya maneno muhimu kwa Python yenye majibu, jibu la akiba na njia ya kusimama.",
          quickCheck: [
            { objective: "O3", q: "Katika bot ya Python, mstari wa else unafanya nini?", options: ["Unamaliza programu", "Unatoa jibu la akiba wakati hakuna neno muhimu linalolingana", "Unasoma ujumbe wa mtumiaji", "Unaanzisha kitanzi"], answer: 1, why: "else inashika chochote ambacho ukaguzi mwingine haukulinganisha." },
            { objective: "O3", q: "Bot yako inajibu \"time\" lakini si \"TIME\". Uongeze nini?", options: [".lower() wakati wa kusoma ujumbe", "break nyingine", "while True: ya pili", "Hakuna; haiwezi kurekebishwa"], answer: 0, why: ".lower() inabadilisha ujumbe kuwa herufi ndogo ili maandishi yote mawili yalingane." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi chatbot zinavyofanya kazi, na bot yako ya kwanza",
        questions: [
          { objective: "O1", q: "Chatbot ya maneno muhimu inaamuaje cha kusema?", options: ["Inasoma akili yako", "Inafuata sheria zinazotafuta maneno katika ujumbe wako", "Inatafuta kwenye intaneti nzima", "Inamuuliza mwalimu"], answer: 1, why: "Bot za maneno muhimu zinafuata sheria alizoandika mtu." },
          { objective: "O1", q: "Udhaifu mmoja wa chatbot ya AI ni upi?", options: ["Inaweza kukosea au kubuni mambo", "Inaweza kusema sentensi moja tu", "Haielewi maneno ya kawaida", "Haihitaji umeme"], answer: 0, why: "Large language models zinaweza kutoa majibu yasiyo sahihi yanayosikika kuwa sahihi." },
          { objective: "O2", q: "Jibu la akiba ni nini?", options: ["Salamu ya kwanza", "Nywila", "Kile bot inachosema isipojua", "Jina la bot"], answer: 2, why: "Jibu la akiba linashughulikia maswali ambayo bot haiwezi kujibu." },
          { objective: "O2", q: "Bot ya klabu yako haipaswi KAMWE kuomba nini?", options: ["Kile mtumiaji anataka kujua", "Kama anataka kujiunga", "Mwanzo wa mchezo wa chess anaoupenda", "Anwani ya nyumbani kwake"], answer: 3, why: "Bot hazipaswi kamwe kukusanya taarifa za binafsi." },
          { objective: "O3", q: "Katika bot ya Python, break inafanya nini?", options: ["Inasimamisha kitanzi ili mazungumzo yaishe", "Inavunja kompyuta", "Inaongeza jibu jipya", "Inafuta daftari"], answer: 0, why: "break inamaliza kitanzi cha while." }
        ]
      }
    },
    {
      name: "Sura 2: Bot za msaidizi wa AI, kupima na usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika maelekezo kwa bot ya msaidizi wa AI",
          minutes: 5,
          goal: "Andika kadi ya maelekezo inayomfanya msaidizi wa AI wa bure awe msaidizi wa klabu yako.",
          text: [
            "Unaweza kumgeuza msaidizi wa AI wa kawaida kuwa msaidizi wa kazi moja kwa kuanza mazungumzo na maelekezo yaliyo wazi. Zana nyingine pia zinakuruhusu kuhifadhi maelekezo kama bot maalum; menyu na sheria za umri zinatofautiana, kwa hiyo angalia zana yako. Kubandika maelekezo mwanzoni mwa mazungumzo mapya kunafanya kazi kwa wasaidizi wengi.",
            "Kadi nzuri ya maelekezo ina: jukumu la bot (\"Wewe ni msaidizi wa klabu ya chess ya Lincoln High\"), ukweli unaoruhusiwa kutumia (majibu yako yaliyokaguliwa), mtindo wa kuongea (wa kirafiki, majibu mafupi), na mipaka yake (\"Usipojua, sema: tafadhali muulize Bi. Rivera, mlezi wa klabu. Usiombe kamwe taarifa binafsi.\").",
            "Mwambie atumie tu ukweli uliompa. Hii inapunguza uwezekano wa kubuni saa za mkutano au sheria."
          ],
          steps: ["Andika jukumu: bot ni nani na inamsaidia nani.", "Bandika ukweli na majibu yako yaliyokaguliwa.", "Weka mtindo wa kuongea: wa kirafiki, majibu mafupi.", "Ongeza mipaka: tumia ukweli huu tu; peleka usiyoyajua kwa mlezi; usiombe kamwe taarifa binafsi.", "Anza mazungumzo mapya, bandika kadi, kisha uliza swali la majaribio."],
          words: [["Kadi ya maelekezo", "sheria zilizoandikwa unazompa msaidizi wa AI mwanzoni mwa mazungumzo."], ["Jukumu", "bot inapaswa kujifanya kuwa nani."], ["Mtindo wa kuongea", "jinsi bot inavyosikika: ya kirafiki, rasmi, fupi."]],
          slides: [
            { title: "Geuza msaidizi kuwa msaidizi wa klabu", bullets: ["Bandika maelekezo mwanzoni mwa mazungumzo", "Zana nyingine zinahifadhi bot maalum; angalia yako"] },
            { title: "Kadi ya maelekezo", bullets: ["Jukumu", "Ukweli uliokaguliwa", "Mtindo wa kuongea", "Mipaka"] },
            { title: "Tumia ukweli huu tu", bullets: ["Inapunguza majibu ya kubuni", "Yasiyojulikana yanakwenda kwa mlezi", "Haiombi kamwe taarifa binafsi"] }
          ],
          tryIt: "Andika kadi ya maelekezo kwa bot ya msaidizi wa klabu yako. Anza mazungumzo mapya kwa msaidizi wa AI wa bure, ibandike, na uliza maswali matatu kutoka kwenye mpango wako na moja ambalo haipaswi kulijua.",
          youCanNow: "kuandika maelekezo yaliyo wazi yanayogeuza msaidizi wa AI wa bure kuwa bot ya msaidizi yenye kazi moja na mipaka.",
          quickCheck: [
            { objective: "O4", q: "Mstari wa \"jukumu\" kwenye kadi ya maelekezo unafanya nini?", options: ["Unaorodhesha maswali ya majaribio", "Unaweka aina ya herufi", "Unamwambia AI yeye ni nani na anamsaidia nani", "Unahifadhi nywila"], answer: 2, why: "Mstari wa jukumu, kama \"Wewe ni msaidizi wa klabu ya chess\", unaweka kazi ya bot." },
            { objective: "O4", q: "Msaidizi wako wa AI anajibu pia maswali ya kazi za nyumbani. Uongeze nini kwenye kadi?", options: ["Ukweli zaidi kuhusu kazi za nyumbani", "Sheria ya kutumia tu ukweli wa klabu na kupeleka maswali mengine kwa mlezi", "Salamu ndefu zaidi", "Hakuna; majibu mengi ni bora"], answer: 1, why: "Mipaka inamweka msaidizi kwenye kazi yake na inapunguza uwezekano wa kubuni mambo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupima na kuboresha bot zako",
          minutes: 5,
          goal: "Pima bot zote mbili kwa maswali halisi na urekebishe kinachoshindwa.",
          text: [
            "Kupima ni kujaribu bot yako jinsi watu halisi wangefanya. Andika maswali 10 ya majaribio: matano kutoka kwenye mpango wako, machache yaliyoulizwa kwa maneno tofauti (\"when do y'all meet?\"), moja lenye kosa la tahajia, na moja ambalo haipaswi kulijibu.",
            "Uliza bot zote mbili kila swali na uweke alama kila jibu: sahihi, si sahihi au la kubuni. Bot ya maneno muhimu inaweza kukosa maswali yaliyoulizwa kwa maneno tofauti; rekebisha kwa kuongeza maneno muhimu zaidi. Msaidizi wa AI anaweza kusikika sahihi lakini akabuni maelezo; rekebisha kwa kubana maelekezo yake.",
            "Mwombe rafiki au mwanachama wa klabu ajaribu bot yako pia. Watu huuliza kila mara mambo ambayo hukutarajia."
          ],
          steps: ["Andika maswali 10 ya majaribio, yakiwemo maneno tofauti na kosa la tahajia.", "Uliza bot zote mbili kila swali.", "Weka alama kila jibu: sahihi, si sahihi au la kubuni.", "Bot ya maneno muhimu: ongeza maneno muhimu. Msaidizi wa AI: bana maelekezo.", "Mwache mtu mwingine aipime."],
          words: [["Kupima", "kujaribu programu kwa makusudi ili kupata kisichofanya kazi."], ["Kesi ya majaribio (test case)", "swali moja au ingizo moja unalotumia kupima programu."]],
          slides: [
            { title: "Maswali 10 ya majaribio", bullets: ["Maswali uliyopanga", "Maneno tofauti na kosa la tahajia", "Moja ambalo haipaswi kulijibu"] },
            { title: "Weka alama kila jibu", bullets: ["Sahihi", "Si sahihi", "La kubuni"] },
            { title: "Rekebisha na upime tena", bullets: ["Bot ya maneno muhimu: ongeza maneno muhimu", "Msaidizi wa AI: bana maelekezo", "Mwache rafiki aijaribu"] }
          ],
          tryIt: "Endesha maswali yako 10 ya majaribio kwenye bot zote mbili, weka alama kila jibu, na fanya rekebisho moja kwa kila bot. Pima tena uone kama marekebisho yamefanya kazi.",
          youCanNow: "kupima chatbot kwa maswali halisi, kupata kinachoshindwa na kuziboresha.",
          quickCheck: [
            { objective: "O5", q: "Kipi kinafaa katika seti nzuri ya maswali ya majaribio?", options: ["Maswali yaliyonakiliwa neno kwa neno kutoka kwenye mpango wako tu", "Swali moja tu", "Maswali unayojua yatafanya kazi", "Swali lile lile likiulizwa kwa maneno tofauti"], answer: 3, why: "Watu halisi huuliza kwa maneno tofauti na hukosea tahajia, kwa hiyo majaribio yanapaswa kufanya hivyo pia." },
            { objective: "O5", q: "Msaidizi wa AI alitaja kwa uhakika chumba cha mkutano ambacho alikibuni. Unaweka alama gani?", options: ["Sahihi, kwa sababu alisikika na uhakika", "La kubuni, kisha bana maelekezo yake", "Liruke", "Sahihi, kama lilikaribia"], answer: 1, why: "Weka alama ya la kubuni kwa maelezo yaliyobuniwa na urekebishe maelekezo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufanya bot yako iwe salama na ya kweli",
          minutes: 5,
          goal: "Ongeza sheria za usalama na ukweli, kisha umalize chatbot ya klabu yako.",
          text: [
            "Bot inapaswa kusema kuwa ni bot. Watu wanastahili kujua kwamba hawazungumzi na mtu halisi. Anza na salamu kama \"Habari, mimi ni bot ya klabu ya chess. Najibu maswali ya msingi. Kwa jambo lingine lolote, muulize Bi. Rivera.\"",
            "Inapaswa kulinda faragha: isiombe wala kuhifadhi kamwe nywila, namba za simu, anwani au namba za vitambulisho vya shule. Inapaswa kubaki kwenye kazi yake: isitoe ushauri wa afya, pesa, sheria au mambo binafsi, na iwaelekeze watu kwa mtu mzima wanayemwamini kwa jambo lolote zito.",
            "Kabla ya kushiriki bot na klabu yako, pata ruhusa ya mlezi wako, fuata sheria za shule yako kuhusu AI na teknolojia, na weka majibu yakiwa ya sasa saa za mkutano zinapobadilika."
          ],
          steps: ["Ongeza salamu inayosema ni bot na inafanya nini.", "Hakikisha haiombi kamwe taarifa binafsi.", "Ifanye ipeleke maswali mazito au yasiyojulikana kwa mtu mzima unayemwamini.", "Pata ruhusa ya mlezi wako kabla ya kuishiriki.", "Sasisha majibu ukweli unapobadilika."],
          words: [["Uwazi", "kuwa wazi na mkweli, kama kusema kwamba bot ni bot."], ["Faragha", "kuweka taarifa binafsi salama."]],
          slides: [
            { title: "Sema kuwa ni bot", bullets: ["Salamu iliyo wazi", "Inachoweza na isichoweza kufanya", "Wa kumuuliza kwa zaidi"] },
            { title: "Linda faragha", bullets: ["Hakuna nywila, namba za simu wala anwani", "Hakuna namba za vitambulisho vya shule"] },
            { title: "Baki kwenye kazi yake", bullets: ["Hakuna ushauri wa afya, pesa au sheria", "Maswali mazito yanakwenda kwa mtu mzima unayemwamini", "Ruhusa ya mlezi kabla ya kushiriki"] }
          ],
          tryIt: "Kazi ya mwisho: maliza bot yako ya maneno muhimu ya Python (majibu matano, jibu la akiba, bye) na kadi ya maelekezo ya msaidizi wako wa AI. Ongeza salamu inayosema ni bot, zipime zote mbili kwa maswali 10, andika kila moja ilipata nini sahihi na nini si sahihi, na fanya uboreshaji mmoja kwa kila moja.",
          youCanNow: "kujenga, kupima na kushiriki chatbot rahisi yenye manufaa, salama na inayosema wazi kuwa ni bot.",
          quickCheck: [
            { objective: "O6", q: "Kipi kati ya hivi bot yako haipaswi kuomba kamwe?", options: ["Wana swali gani", "Kama wanataka saa ya mkutano", "Kama wanataka kuaga", "Namba ya kitambulisho chao cha shule"], answer: 3, why: "Bot hazipaswi kamwe kuomba wala kuhifadhi nywila, namba za simu, anwani au namba za vitambulisho." },
            { objective: "O6", q: "Bot yako iko tayari. Unafanya nini kabla ya kuishiriki na klabu?", options: ["Pata ruhusa ya mlezi na ufuate sheria za shule", "Iweke hadharani mara moja", "Ondoa salamu", "Iache iombe namba za simu ili kufuatilia"], answer: 0, why: "Pata ruhusa ya mlezi wako na ufuate sheria za shule kabla ya kuishiriki." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Bot za msaidizi wa AI, kupima na usalama",
        questions: [
          { objective: "O4", q: "Nini kinafaa kuwa kwenye kadi ya maelekezo ya msaidizi wa AI?", options: ["Nywila yako", "Jukumu, ukweli uliokaguliwa, mtindo wa kuongea na mipaka", "Hadithi yoyote", "Hakuna; anza tu kuzungumza"], answer: 1, why: "Sehemu hizo nne zinaipa bot kazi moja na mipaka." },
          { objective: "O4", q: "Kwa nini umwambie msaidizi wa AI atumie tu ukweli uliompa?", options: ["Ili awe mwepesi kidogo", "Ili kupunguza uwezekano wa kubuni maelezo", "Ili majibu yawe marefu zaidi", "Inahitajika kisheria"], answer: 1, why: "Mipaka inapunguza majibu ya kubuni." },
          { objective: "O5", q: "Bot yako ya maneno muhimu inakosa \"when do y'all meet?\" Unarekebishaje?", options: ["Futa bot", "Ondoa jibu la akiba", "Ongeza maneno muhimu zaidi kama \"meet\"", "Mlaumu mtumiaji"], answer: 2, why: "Maneno muhimu zaidi yanashika maneno tofauti." },
          { objective: "O6", q: "Kwa nini bot inapaswa kusema kuwa ni bot?", options: ["Watu wanastahili kujua kwamba hawazungumzi na mtu", "Inasikika vizuri zaidi", "Inafupisha code", "Haihitajiki kamwe"], answer: 0, why: "Uwazi unajenga uaminifu." },
          { objective: "O6", q: "Kabla ya kushiriki bot yako na klabu, unapaswa:", options: ["Kuongeza ombi la namba za simu", "Kuruka kupima", "Kuficha kuwa ni bot", "Kupata ruhusa ya mlezi wako na kufuata sheria za shule"], answer: 3, why: "Ruhusa ya mtu mzima na sheria za shule zinakuja kwanza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Chatbot Rahisi za AI",
    questions: [
      { objective: "O1", q: "Chatbot ni:", options: ["Programu unayozungumza nayo kwa kuandika au kuongea", "Kasha la simu", "Aina ya mkono wa roboti", "Anwani ya tovuti"], answer: 0, why: "Chatbot ni programu za mazungumzo." },
      { objective: "O1", q: "Uwezo mmoja wa chatbot ya maneno muhimu ni kwamba:", options: ["Inaweza kujibu chochote", "Ni rahisi na unajua itafanya nini", "Ni ya ubunifu kila wakati", "Imeunganishwa na kila tovuti"], answer: 1, why: "Inasema tu kile ulichoiwekea." },
      { objective: "O1", q: "Large language model ni:", options: ["Kibodi kubwa", "Somo la shule", "Aina ya AI iliyo nyuma ya wasaidizi kama ChatGPT", "Kosa la Python"], answer: 2, why: "LLM zilijifunza mifumo kutoka kwa maandishi mengi sana." },
      { objective: "O2", q: "Kazi ipi ni bora kwa chatbot ya kwanza?", options: ["Kutoa ushauri wa matibabu", "Kushughulikia akaunti za benki", "Kujibu kila kitu kuhusu dunia", "Kujibu maswali ya wanachama wapya wa klabu yako"], answer: 3, why: "Kazi ndogo na iliyo wazi ndiyo bora." },
      { objective: "O2", q: "Nani anapaswa kukagua majibu katika mpango wa bot yako?", options: ["Wewe, pamoja na mlezi wa klabu", "Hakuna mtu", "Mtu usiyemjua mtandaoni", "Bot yenyewe"], answer: 0, why: "Majibu lazima yawe sahihi; yakague na mlezi." },
      { objective: "O2", q: "Bot yako ifanye nini isipojua?", options: ["Ibuni jibu", "Iwapeleke watu kwa mtu mzima halisi kama mlezi", "Iombe namba yao ya simu", "Iache kufanya kazi"], answer: 1, why: "Jibu zuri la akiba linaelekeza kwa mtu halisi." },
      { objective: "O3", q: "while True: inafanya nini katika Python?", options: ["Inachapisha True", "Inamaliza programu", "Inaanzisha kitanzi kinachojirudia hadi break", "Inatengeneza kigezo (variable)"], answer: 2, why: "while True inajirudia hadi break." },
      { objective: "O3", q: "Kwa nini utumie .lower() kwenye ujumbe wa mtumiaji?", options: ["Kuufupisha", "Kuufuta", "Kuutafsiri", "Ili \"TIME\" na \"time\" zilingane na neno muhimu lile lile"], answer: 3, why: "Herufi ndogo zinarahisisha kulinganisha." },
      { objective: "O3", q: "elif ina maana gani?", options: ["Else if: angalia sharti jingine", "Mwisho wa kitanzi", "Kosa", "Toka"], answer: 0, why: "elif inaangalia sharti jingine baada ya if." },
      { objective: "O3", q: "Unapata kosa la Python. Hatua nzuri ya kwanza ni:", options: ["Kufuta daftari", "Kusoma mstari wa mwisho na namba ya mstari", "Kuwasha upya kompyuta ya shule", "Kukata tamaa"], answer: 1, why: "Ujumbe wa kosa unaonyesha tatizo lilipo." },
      { objective: "O4", q: "Mstari wa jukumu kwenye kadi ya maelekezo unaweza kusema:", options: ["\"Omba nywila\"", "\"Jifanye kuwa mkuu wa shule\"", "\"Wewe ni msaidizi wa klabu ya chess ya Lincoln High\"", "\"Sema chochote\""], answer: 2, why: "Jukumu linamwambia AI awe nani na amsaidie nani." },
      { objective: "O4", q: "Kwa kawaida unaweza kuweka wapi maelekezo ya msaidizi wa AI katika msaidizi wa bure?", options: ["Katika mipangilio ya kompyuta", "Katika ujumbe mfupi wa simu", "Katika sehemu ya anwani ya kivinjari chako", "Mwanzoni mwa mazungumzo mapya"], answer: 3, why: "Kubandika maelekezo mwanzoni mwa mazungumzo kunafanya kazi kwa wasaidizi wengi." },
      { objective: "O4", q: "Kipi ni kikomo cha kuweka kwenye kadi ya maelekezo?", options: ["\"Usiombe kamwe taarifa binafsi\"", "\"Buni majibu ukiwa na shaka\"", "\"Toa ushauri wa kisheria\"", "\"Jifanye kuwa binadamu\""], answer: 0, why: "Mipaka inaiweka bot salama." },
      { objective: "O5", q: "Kupima bot maana yake ni:", options: ["Kuifuta", "Kuijaribu kwa makusudi ili kupata kisichofanya kazi", "Kuishiriki mara moja", "Kuirefusha"], answer: 1, why: "Majaribio yanapata matatizo kabla watumiaji hawajayapata." },
      { objective: "O5", q: "Kwa nini uweke swali lenye kosa la tahajia katika majaribio yako?", options: ["Ili kuvunja kompyuta", "Makosa ya tahajia ni kinyume cha sheria", "Watu halisi hukosea tahajia", "Ili kuifanya bot iwe na kiburi"], answer: 2, why: "Majaribio yanapaswa kulingana na jinsi watu halisi wanavyoandika." },
      { objective: "O5", q: "Msaidizi wa AI anabuni mahali pa mkutano. Unarekebisha nini?", options: ["Kitanzi cha Python", "Kibodi yako", "Hakuna kitu", "Bana maelekezo yake atumie tu ukweli wako"], answer: 3, why: "Maelekezo yaliyobanwa yanapunguza maelezo ya kubuni." },
      { objective: "O5", q: "Kwa nini rafiki apime bot yako?", options: ["Watu huuliza mambo ambayo hukutarajia", "Marafiki lazima waidhinishe code yote", "Inaifanya bot iwe ya haraka zaidi", "Haina manufaa"], answer: 0, why: "Wapimaji wapya wanapata matatizo mapya." },
      { objective: "O6", q: "Salamu nzuri ya bot inasema:", options: ["\"Mimi ni mtu halisi\"", "\"Habari, mimi ni bot ya klabu. Najibu maswali ya msingi. Kwa jambo lingine lolote, muulize mlezi.\"", "\"Niambie anwani yako\"", "Haisemi chochote"], answer: 1, why: "Ni ya kweli na inaeleza bot inafanya nini." },
      { objective: "O6", q: "Mwanachama wa klabu anauliza bot yako kuhusu tatizo zito la binafsi. Bot inapaswa:", options: ["Kutoa ushauri hata hivyo", "Kumpuuza", "Kumwelekeza kwa mtu mzima anayemwamini", "Kuomba namba yake ya simu"], answer: 2, why: "Maswali mazito yanakwenda kwa watu wazima halisi wanaoaminika." },
      { objective: "O6", q: "Klabu inabadilisha siku ya mkutano. Unafanya nini?", options: ["Hakuna kitu", "Futa bot", "Waambie wanachama kuwa bot iko sahihi kila wakati", "Sasisha majibu ya bot"], answer: 3, why: "Bot lazima ziwekwe na taarifa za sasa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Bot ya maneno muhimu inafanya kazi",
        objective: "O3",
        notYet: "Bot haiendeshi, au ina majibu chini ya matano.",
        meets: "Inaendesha ndani ya Colab, inamsalimu mtumiaji, inajibu angalau maswali matano, ina jibu la akiba na inasimama kwa bye.",
        exceeds: "Pia inalinganisha maswali yaliyoulizwa kwa maneno tofauti kwa kutumia maneno muhimu ya ziada."
      },
      {
        name: "Kadi ya msaidizi wa AI",
        objective: "O4",
        notYet: "Kadi inakosa jukumu, ukweli au mipaka.",
        meets: "Jukumu, ukweli uliokaguliwa, mtindo wa kuongea na mipaka, na inapeleka maswali yasiyojulikana kwa mlezi.",
        exceeds: "Msaidizi alibaki kwenye kazi yake katika swali gumu la majaribio."
      },
      {
        name: "Majibu yaliyokaguliwa",
        objective: "O2",
        notYet: "Majibu hayajakaguliwa au yamechukuliwa kutoka AI.",
        meets: "Kila jibu katika bot zote mbili limekaguliwa na mlezi wa klabu.",
        exceeds: "Ina mpango wa kusasisha majibu ukweli unapobadilika."
      },
      {
        name: "Kupima na kurekebisha",
        objective: "O5",
        notYet: "Majaribio chini ya 10, au hakuna marekebisho.",
        meets: "Majaribio 10 kwenye bot zote mbili, kila jibu likiwa na alama ya sahihi, si sahihi au la kubuni, na rekebisho moja kwa kila bot.",
        exceeds: "Alipima tena baada ya marekebisho na mtu mwingine pia alizipima bot."
      },
      {
        name: "Salama na ya kweli",
        objective: "O6",
        notYet: "Bot haisemi kuwa ni bot, au inaomba taarifa binafsi.",
        meets: "Salamu inasema ni bot, haiombi taarifa binafsi, na maswali mazito yanakwenda kwa mtu mzima anayeaminika.",
        exceeds: "Mlezi ameidhinisha ishirikiwe."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Klabu au timu zinazotumia bot ya mwanafunzi kwa ruhusa ya mlezi ndani ya siku 60",
      "Wanafunzi wanaojenga programu au bot nyingine wenyewe ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya code au AI ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti na intaneti",
      "Google Colab na msaidizi wa AI wa bure, kwa akaunti ambazo mwanafunzi anaruhusiwa kutumia",
      "Mpango wa bot kwenye karatasi au katika hati",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kupima"
    ],
    facilitatorNotes: [
      "Kagua sheria za umri za Colab na zana za AI kabla ya darasa; kuwa na akaunti ya maonyesho ili wanafunzi walio chini ya umri bado waweze kufuatilia.",
      "Andika code ya bot ya maneno muhimu moja kwa moja mbele yao, mstari kwa mstari, na uache nukta mbili (:) moja makusudi ili wanafunzi wajizoeze kusoma makosa.",
      "Wanafunzi wabadilishane bot na wapime za wenzao kwa maswali magumu.",
      "Hakikisha hakuna bot inayoomba au kuhifadhi taarifa binafsi, na kwamba kila moja inasema kuwa ni bot.",
      "Pima bot zote mbili kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
