"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-program-impact.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-program-impact-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "AI kwa Utekelezaji wa Programu na Matokeo Yake",
  skills: "Kujenga logic model rahisi, Kuchagua vipimo vya matokeo, Kuandika dodoso fupi la washiriki kwa AI, Kufupisha matokeo yasiyo na majina, Kuandika ripoti ya matokeo ya ukurasa mmoja",
  outcome: "kutumia AI kujenga logic model rahisi kwa programu moja, kuandika dodoso fupi la washiriki, kufupisha matokeo yasiyo na majina, na kuyageuza kuwa ripoti ya matokeo ya kweli ya ukurasa mmoja kwa bodi yako na wafadhili.",
  about: [
    "Kozi hii ni kwa wasimamizi wa programu, waratibu na wajitolea wa mashirika yasiyo ya kiserikali na ya kidini wanaoendesha programu na wanaohitaji kuonyesha tofauti ambayo programu hizo zinaleta.",
    "Utapanga programu kwenye ukurasa mmoja, utachagua cha kupima, utatumia AI kuandika dodoso la haki, utafupisha matokeo bila kufichua taarifa binafsi za mtu yeyote, na utaandika ripoti ya matokeo ambayo wafadhili na bodi yako wanaweza kuiamini.",
    "Kila somo linachukua kama dakika tano na linajenga sehemu moja ya ripoti yako ya matokeo. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Kwa programu moja halisi, andika ripoti ya matokeo ya ukurasa mmoja yenye: logic model rahisi (pembejeo, shughuli, matokeo ya kazi, mabadiliko), vipimo viwili vya mabadiliko, dodoso fupi la washiriki uliloandika kwa msaada wa AI, muhtasari wa matokeo yasiyo na majina (data halisi au ya mazoezi isiyo na majina), hadithi moja iliyoshirikiwa kwa ruhusa, na funzo moja la kweli ulilojifunza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wasimamizi wa programu, waratibu na wajitolea wa mashirika yasiyo ya kiserikali na ya kidini wanaoendesha programu na wanaohitaji kuonyesha tofauti ambayo programu hizo zinaleta.",
    startingPoint: "Wanaendesha programu na wanahesabu vitu kama milo iliyotolewa au vipindi vilivyofanyika. Wengi hawajawahi kujenga logic model, kupima mabadiliko kabla na baada, au kuandika ripoti ya matokeo.",
    gap: "Wafadhili na bodi wanazidi kuomba mabadiliko kwa watu, si hesabu tu. Wanafunzi wanahitaji njia rahisi na ya kweli ya kupanga, kupima na kuripoti mabadiliko, wakitumia AI kuokoa muda huku wakilinda faragha ya washiriki na kuhakikisha kila namba ni ya kweli.",
    constraints: [
      "Timu ndogo zenye muda mchache wa kazi ya data",
      "Faragha: madodoso ni ya hiari na hayana majina; hakuna majina, taarifa za afya au za uhamiaji isipokuwa kama zinahitajika kweli na zinahifadhiwa kwa usalama",
      "Hesabu tu, kamwe si majibu binafsi ghafi, ndizo zinazowekwa kwenye zana za AI",
      "AI hukosea katika hesabu, kwa hiyo kila asilimia inakaguliwa kwenye spreadsheet",
      "Zana za bure kama Google Forms au Microsoft Forms"
    ],
    prerequisites: "\"Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali\", au uzoefu fulani wa kutumia msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya matokeo ya programu", action: "kutambua yapi ni matokeo ya kazi (outputs) na yapi ni mabadiliko (outcomes)", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa maelezo ya hadharani ya programu moja", action: "kujenga logic model ya ukurasa mmoja yenye pembejeo, shughuli, matokeo ya kazi na mabadiliko kwa msaada wa AI", standard: "ukiwa umeondoa kila kitu ambacho hamkifanyi kweli" },
    { id: "O3", condition: "Ukipewa badiliko moja (outcome)", action: "kuchagua vipimo viwili rahisi ambavyo timu yako inaweza kukusanya, vinavyoulizwa kabla na baada", standard: "ambavyo ni vya kweli na vinawezekana kwa muda wa wafanyakazi na wajitolea wako" },
    { id: "O4", condition: "Ukipewa vipimo vyako vya mabadiliko", action: "kuandika kwa AI dodoso fupi la washiriki lisilo na majina lenye maswali 5 hadi 8", standard: "bila maswali ya kuelekeza jibu na likiwa na maelezo kwamba ni la hiari" },
    { id: "O5", condition: "Ukipewa hesabu za dodoso zisizo na majina", action: "kufupisha matokeo kwa AI na kukagua kila asilimia wewe mwenyewe", standard: "bila taarifa yoyote inayoweza kumtambulisha mtu" },
    { id: "O6", condition: "Ukipewa logic model yako na matokeo yaliyokaguliwa", action: "kuandika ripoti ya matokeo ya ukurasa mmoja yenye hitaji, mlichofanya, kilichobadilika, hadithi na funzo", standard: "bila namba wala madai yasiyo kwenye data yako" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga cha kupima",
      lessons: [
        {
          objectives: ["O1"],
          title: "Matokeo ya kazi na mabadiliko: tofauti ni nini?",
          minutes: 4,
          goal: "Tofautisha matokeo ya kazi na mabadiliko kwa programu yako moja.",
          text: [
            "Matokeo ya kazi (outputs) yanahesabu mlichofanya: milo 300 imetolewa, vipindi 40 vya masomo ya ziada, wajitolea 25 wamefunzwa. Mabadiliko (outcomes) yanaeleza kilichobadilika kwa watu: familia zilipunguza wasiwasi kuhusu chakula, wanafunzi walipandisha alama zao za kusoma, wajitolea walihisi wako tayari kuongoza.",
            "Wafadhili na bodi wanazidi kuomba mabadiliko, si matokeo ya kazi tu. Mabadiliko yanaonyesha kwamba dhamira yenu inafanya kazi.",
            "AI inaweza kukusaidia kufikiri. Uliza: \"Programu yetu [maelezo ya hadharani] inafanya [shughuli]. Orodhesha matokeo ya kazi yanayowezekana na mabadiliko ya muda mfupi yanayowezekana kwa washiriki.\" Kisha chagua yale yaliyo kweli kwa programu yako."
          ],
          words: [["Matokeo ya kazi (output)", "hesabu ya kile programu yako ilichofanya, kama milo iliyotolewa."], ["Badiliko (outcome)", "mabadiliko katika maisha ya watu kwa sababu ya programu yako."], ["Athari (impact)", "tofauti kubwa zaidi ya muda mrefu ambayo kazi yako inaleta katika jamii."]],
          slides: [
            { title: "Matokeo ya kazi yanahesabu mlichofanya", bullets: ["Milo 300 imetolewa", "Vipindi 40 vya masomo ya ziada", "Wajitolea 25 wamefunzwa"] },
            { title: "Mabadiliko yanaonyesha kilichobadilika", bullets: ["Familia zina wasiwasi mdogo kuhusu chakula", "Wanafunzi wanapandisha alama za kusoma", "Wajitolea wako tayari kuongoza"] },
            { title: "Iombe AI ikupe mawazo", bullets: ["Matokeo ya kazi na mabadiliko yanayowezekana", "Wewe unachagua kilicho kweli"] }
          ],
          tryIt: "Kwa programu moja, andika matokeo matatu ya kazi na mabadiliko mawili. Tumia AI kupata mawazo, kisha baki na yale tu yaliyo kweli kwa programu yako.",
          youCanNow: "kutofautisha matokeo ya kazi na mabadiliko kwa programu yako mwenyewe.",
          quickCheck: [
            { objective: "O1", q: "\"Wajitolea 25 wamefunzwa\" ni mfano wa nini?", options: ["Matokeo ya kazi (output)", "Badiliko (outcome)", "Pembejeo (input)", "Dodoso"], answer: 0, why: "Matokeo ya kazi yanahesabu mlichofanya; mabadiliko yanaeleza kilichobadilika kwa watu." },
            { objective: "O1", q: "Ripoti yako inaorodhesha milo iliyotolewa tu. Mfadhili anaomba mabadiliko. Unaongeza nini?", options: ["Hesabu zaidi za milo", "Kilichobadilika kwa familia, kama kupungua kwa wasiwasi kuhusu chakula", "Gharama ya chakula", "Orodha ya wajitolea"], answer: 1, why: "Mabadiliko yanaeleza kilichobadilika kwa watu kwa sababu ya programu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujenga logic model rahisi",
          minutes: 5,
          goal: "Jenga logic model ya ukurasa mmoja kwa programu moja kwa msaada wa AI.",
          text: [
            "Logic model ni picha ya ukurasa mmoja ya jinsi programu yako inavyofanya kazi: pembejeo (mnachoweka ndani), shughuli (mnachofanya), matokeo ya kazi (mnachohesabu) na mabadiliko (kinachobadilika).",
            "Iulize AI: \"Tengeneza jedwali la logic model kwa programu hii: [maelezo ya hadharani]. Safu: pembejeo, shughuli, matokeo ya kazi, mabadiliko ya muda mfupi, mabadiliko ya muda mrefu. Kila kisanduku kiwe kifupi.\"",
            "Kisha lirekebishe ili lilingane na hali halisi. Ondoa chochote ambacho hamkifanyi. Logic model ni mpango unaoweza kuutetea, si orodha ya matamanio."
          ],
          steps: ["Eleza programu kwa sentensi tatu za hadharani.", "Iombe AI jedwali la logic model lenye safu tano.", "Ondoa chochote ambacho hamkifanyi kweli.", "Hakikisha kila badiliko linaunganika na shughuli fulani."],
          words: [["Logic model", "jedwali la ukurasa mmoja linaloonyesha pembejeo, shughuli, matokeo ya kazi na mabadiliko."], ["Pembejeo (input)", "mnachoweka katika programu: wafanyakazi, wajitolea, pesa, mahali."]],
          slides: [
            { title: "Logic model inaonyesha", bullets: ["Pembejeo: mnachoweka ndani", "Shughuli: mnachofanya", "Matokeo ya kazi: mnachohesabu", "Mabadiliko: kinachobadilika"] },
            { title: "Iombe AI jedwali", bullets: ["Safu tano", "Visanduku vifupi"] },
            { title: "Lifanye liwe la kweli", bullets: ["Ondoa msichokifanya", "Kila badiliko linaunganika na shughuli"] }
          ],
          tryIt: "Jenga jedwali la logic model la programu yako kwa AI, kisha lihariri hadi kila kisanduku kiwe cha kweli.",
          youCanNow: "kujenga logic model rahisi na ya kweli kwa programu.",
          quickCheck: [
            { objective: "O2", q: "Katika logic model, shughuli ni nini?", options: ["Mnachohesabu", "Kinachobadilika", "Mnachofanya", "Mnachoweka ndani"], answer: 2, why: "Shughuli ni mnachofanya; pembejeo zinaingia, matokeo ya kazi yanahesabiwa, mabadiliko ni kinachobadilika." },
            { objective: "O2", q: "Logic model ya AI inaorodhesha badiliko la muda mrefu ambalo hamna njia ya kulifikia. Unafanya nini?", options: ["Kuliacha; wafadhili wanapenda malengo makubwa", "Kulifanya kubwa zaidi", "Kulinakili kwenye kila programu", "Kuliondoa ili model ilingane na hali halisi"], answer: 3, why: "Logic model ni mpango unaoweza kuutetea, si orodha ya matamanio." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuchagua vipimo vya mabadiliko",
          minutes: 5,
          goal: "Chagua vipimo viwili vya mabadiliko ambavyo mnaweza kukusanya kweli.",
          text: [
            "Kipimo ni jinsi utakavyojua kwamba badiliko limetokea. Kwa \"familia zina wasiwasi mdogo kuhusu chakula\", kipimo kinaweza kuwa: asilimia ya familia zinazosema zilikuwa na wasiwasi mdogo wa kukosa chakula, swali likiulizwa wakati wa kujiandikisha na baada ya miezi mitatu.",
            "Vipimo vizuri ni rahisi, timu yako inaweza kuvikusanya, na ni vya kweli. Kulinganisha kabla na baada kuna nguvu zaidi kuliko kuuliza mara moja tu.",
            "Iulize AI: \"Pendekeza njia tatu rahisi ambazo shirika dogo lisilo la kiserikali linaweza kupima badiliko hili: [badiliko]. Tuna [muda wa wafanyakazi na wajitolea].\" Chagua mbili ambazo mnaweza kuzifanya kweli."
          ],
          steps: ["Chagua mabadiliko mawili kutoka kwenye logic model yako.", "Iombe AI njia rahisi za kupima kila moja.", "Chagua zile ambazo timu yako inaweza kukusanya.", "Panga kupima kabla na baada kila inapowezekana."],
          words: [["Kipimo", "jinsi utakavyojua kwamba badiliko limetokea, mara nyingi namba au asilimia."], ["Kabla na baada", "kuuliza swali lilelile mwanzoni na baadaye, ili kuona mabadiliko."]],
          slides: [
            { title: "Kipimo kinaonyesha badiliko", bullets: ["\"Asilimia ya familia zenye wasiwasi mdogo kuhusu chakula\"", "Kinaulizwa wakati wa kujiandikisha na baada ya miezi mitatu"] },
            { title: "Vipimo vizuri ni", bullets: ["Rahisi", "Timu yako inaweza kuvikusanya", "Vya kweli"] },
            { title: "Kabla na baada", bullets: ["Kuna nguvu zaidi kuliko kuuliza mara moja", "Kunaonyesha mabadiliko kwa muda"] }
          ],
          tryIt: "Chagua vipimo viwili vya mabadiliko kwa programu yako, ukitumia mapendekezo ya AI, na uandike lini utakusanya kila kimoja.",
          youCanNow: "kuchagua vipimo vya mabadiliko ambavyo timu yako inaweza kukusanya.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini kuuliza wakati wa kujiandikisha na tena baadaye kuna nguvu zaidi kuliko kuuliza mara moja?", options: ["Kunaonyesha mabadiliko kwa muda", "Ni kufupi zaidi", "Hakuhitaji muda wa wafanyakazi", "Kunaepuka kutumia namba"], answer: 0, why: "Kulinganisha kabla na baada kunaonyesha mabadiliko." },
            { objective: "O3", q: "AI inapendekeza vipimo vitatu, lakini kimoja kinahitaji saa nyingi za wafanyakazi ambazo hamna. Unafanya nini?", options: ["Kutumia vyote vitatu hata hivyo", "Kuchagua viwili ambavyo mnaweza kukusanya kweli", "Kwanza kuajiri mshauri", "Kuacha kupima"], answer: 1, why: "Vipimo vizuri ni vile timu yako inaweza kukusanya; chagua viwili mnavyoweza kufanya kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga cha kupima",
        questions: [
          { objective: "O1", q: "Lipi ni badiliko (outcome)?", options: ["Familia zina wasiwasi mdogo kuhusu chakula", "Milo 300 imetolewa", "Vipindi 40 vimefanyika", "Wajitolea 25 wamefunzwa"], answer: 0, why: "Mabadiliko ni mabadiliko katika maisha ya watu." },
          { objective: "O1", q: "Lipi ni matokeo ya kazi (output)?", options: ["Wanafunzi wanajiamini zaidi", "Vipindi 40 vya masomo ya ziada vimefanyika", "Familia zina afya bora", "Wajitolea wanahisi wako tayari kuongoza"], answer: 1, why: "Matokeo ya kazi yanahesabu mlichofanya." },
          { objective: "O2", q: "Logic model ya AI inaorodhesha shughuli ambayo hamuifanyi. Unafanya nini?", options: ["Kuiacha", "Kuanza kuifanya kwa siri", "Kuiondoa", "Kumuuliza mfadhili"], answer: 2, why: "Logic model lazima iwe ya kweli." },
          { objective: "O3", q: "Mpango upi wa kupima una nguvu zaidi?", options: ["Kuuliza mara moja mwishoni", "Kubahatisha", "Kuwauliza wafanyakazi tu", "Kuuliza swali lilelile wakati wa kujiandikisha na baada ya miezi mitatu"], answer: 3, why: "Kabla na baada kunaonyesha mabadiliko." },
          { objective: "O2", q: "Pembejeo ni nini?", options: ["Mnachoweka ndani: wafanyakazi, wajitolea, pesa, mahali", "Majibu ya dodoso", "Majina ya wafadhili", "Mabadiliko"], answer: 0, why: "Pembejeo ni rasilimali ambazo programu inatumia." }
        ]
      }
    },
    {
      name: "Sura 2: Kukusanya, kufupisha na kuripoti",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika dodoso fupi na la haki kwa washiriki",
          minutes: 5,
          goal: "Tumia AI kuandaa dodoso fupi linalopima mabadiliko yako.",
          text: [
            "Dodoso linawauliza washiriki kilichobadilika kwao. Liwe fupi, kama maswali 5 hadi 8, kwa maneno rahisi na katika lugha wanazotumia.",
            "Iulize AI: \"Andika dodoso lisilo na majina lenye maswali 6 kwa watu wazima katika programu yetu ya chakula ili kupima [badiliko]. Tumia lugha rahisi ya kiwango cha darasa la 6, maswali mengi ya kuchagua jibu, na swali moja la wazi. Epuka maswali ya kuelekeza jibu.\"",
            "Ondoa swali lolote linaloomba majina, taarifa za afya au hali ya uhamiaji isipokuwa kama unalihitaji kweli na una njia salama ya kulihifadhi. Waambie watu kwamba dodoso ni la hiari na halitaathiri huduma zao. Zana za bure kama Google Forms au Microsoft Forms zinaweza kukusanya majibu."
          ],
          steps: ["Iombe AI dodoso fupi lisilo na majina linalopima badiliko lako.", "Andika upya swali lolote la kuelekeza jibu.", "Ondoa maswali kuhusu majina au taarifa nyeti ambazo huzihitaji.", "Ongeza maelezo kwamba dodoso ni la hiari.", "Lijenge kwenye zana ya bure ya fomu."],
          words: [["Dodoso", "seti ya maswali ya kujua watu wanafikiri nini au walipitia nini."], ["Bila majina (anonymous)", "hakuna majina wala taarifa zinazoweza kuonyesha nani alijibu."], ["Swali la kuelekeza jibu", "swali linalowasukuma watu kuelekea jibu fulani, kama \"Programu yetu nzuri ilikusaidia kiasi gani?\""]],
          slides: [
            { title: "Liwe fupi", bullets: ["Maswali 5 hadi 8", "Maneno rahisi, katika lugha za watu"] },
            { title: "Iulize AI", bullets: ["Bila majina, kiwango cha darasa la 6", "Maswali mengi ya kuchagua jibu, moja la wazi", "Hakuna maswali ya kuelekeza jibu"] },
            { title: "Linda watu", bullets: ["Hakuna majina wala taarifa nyeti isipokuwa zikihitajika", "La hiari: halitaathiri huduma"] }
          ],
          tryIt: "Andaa kwa AI dodoso lisilo na majina lenye maswali 6 kwa programu yako. Tafuta na uandike upya swali lolote la kuelekeza jibu, na uongeze maelezo kwamba ni la hiari.",
          youCanNow: "kuandika dodoso fupi, la haki na lisilo na majina kwa washiriki kwa msaada wa AI.",
          quickCheck: [
            { objective: "O4", q: "Maswali mengi ya dodoso yanapaswa kuwa ya aina gani?", options: ["Maswali marefu ya insha", "Maswali kuhusu majina na anwani", "Mengi ya kuchagua jibu, na swali moja la wazi", "Ndiyo au hapana tu kuhusu wafanyakazi"], answer: 2, why: "Prompt inaomba maswali mengi ya kuchagua jibu na swali moja la wazi." },
            { objective: "O4", q: "Dodoso la AI linamwuliza kila mshiriki hali zake za afya. Unafanya nini?", options: ["Kuliacha ili kupata data zaidi", "Kulifanya la lazima", "Kuongeza majina yao pia", "Kuliondoa isipokuwa unalihitaji kweli na unaweza kulihifadhi kwa usalama"], answer: 3, why: "Ondoa maswali ya afya au uhamiaji isipokuwa yanahitajika kweli na yanahifadhiwa kwa usalama." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufupisha matokeo bila kumfichua mtu yeyote",
          minutes: 5,
          goal: "Fupisha matokeo ya dodoso yasiyo na majina kwa AI na ukague namba wewe mwenyewe.",
          text: [
            "Kabla ya kutumia AI kwenye matokeo, hakikisha data haina majina, mawasiliano wala kitu kingine chochote kinachoweza kumtambulisha mtu. Kama kikundi kidogo kinaweza kutambulika (kwa mfano wazee watatu pekee wanaozungumza Kihispania), viunganishe au uache taarifa hizo nje.",
            "Zana yako ya fomu au spreadsheet inaweza kukuhesabia majibu. Kisha unaweza kubandika hesabu, si majibu binafsi ghafi, kwenye AI: \"Hizi ni hesabu za dodoso: [hesabu]. Fupisha matokeo makuu kwa vitone 4 na upendekeze chati moja.\"",
            "Kagua kila asilimia wewe mwenyewe kwenye spreadsheet. AI mara nyingi hukosea katika hesabu. Kwa majibu ya wazi, yasome wewe mwenyewe kwanza na uondoe chochote kinachotambulisha mtu kabla ya kuiomba AI iyapange katika mada."
          ],
          steps: ["Ondoa majina na taarifa zinazotambulisha watu.", "Hesabu majibu kwenye zana yako ya fomu au spreadsheet.", "Bandika hesabu, si majibu binafsi ghafi, kwenye AI.", "Omba muhtasari mfupi na wazo la chati.", "Kagua kila asilimia wewe mwenyewe."],
          words: [["Data", "taarifa ulizokusanya, kama majibu ya dodoso."], ["Mada (theme)", "wazo linalojitokeza tena na tena katika majibu ya wazi."], ["Asilimia", "sehemu kati ya 100, kama watu 60 kati ya 100 ni asilimia 60."]],
          slides: [
            { title: "Linda watu kwanza", bullets: ["Hakuna majina wala mawasiliano", "Vikundi vidogo vinaweza kutambulika: viunganishe"] },
            { title: "Hesabu, kisha fupisha", bullets: ["Acha spreadsheet ihesabu", "Ipe AI hesabu, si majibu binafsi ghafi"] },
            { title: "Kagua hesabu", bullets: ["AI hukosea katika hesabu", "Kagua kila asilimia wewe mwenyewe"] }
          ],
          tryIt: "Tumia hesabu za mazoezi (kwa mfano watu 30 kati ya 40 walisema wana wasiwasi mdogo kuhusu chakula). Iombe AI muhtasari wa vitone 4, kisha kagua kila asilimia kwa kikokotoo.",
          youCanNow: "kufupisha matokeo yasiyo na majina kwa AI na kukagua namba.",
          quickCheck: [
            { objective: "O5", q: "Unafanya nini na majibu ya wazi kabla ya kuiomba AI itafute mada?", options: ["Kuyasoma wewe mwenyewe na kuondoa chochote kinachotambulisha mtu", "Kuyabandika yote kama yalivyo", "Kuyafuta", "Kumtumia mfadhili"], answer: 0, why: "Soma majibu ya wazi kwanza na uondoe chochote kinachotambulisha mtu." },
            { objective: "O5", q: "Washiriki wawili tu ni wanaume wenye umri zaidi ya miaka 70, kwa hiyo wanaweza kutambulika. Unafanya nini?", options: ["Kuwaripoti peke yao kwa majina", "Kuziunganisha au kuacha taarifa hizo nje", "Kuiomba AI ibahatishe ni akina nani", "Kuweka majibu yao mtandaoni"], answer: 1, why: "Kama kikundi kidogo kinaweza kutambulika, viunganishe au uache taarifa hizo nje." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika ripoti ya matokeo ya ukurasa mmoja",
          minutes: 5,
          goal: "Geuza logic model yako na matokeo kuwa ripoti ya matokeo ya kweli ya ukurasa mmoja.",
          text: [
            "Ripoti ya matokeo inaieleza bodi yako, wafadhili na jamii kile programu yenu ilichofanya na kilichobadilika. Ukurasa mmoja unatosha: hitaji, mlichofanya (matokeo ya kazi), kilichobadilika (mabadiliko pamoja na namba), hadithi moja, na mlichojifunza.",
            "Iulize AI: \"Ukitumia taarifa hizi tu, andika ripoti ya matokeo ya ukurasa mmoja yenye vichwa hivi: Hitaji, Tulichofanya, Kilichobadilika, Hadithi, Tulichojifunza. [logic model yako, vipimo, matokeo yaliyokaguliwa, hadithi iliyoshirikiwa kwa ruhusa].\"",
            "Weka funzo la kweli mlilojifunza. Wafadhili wanaamini mashirika yanayosema kisichofanya kazi na jinsi yatakavyoboresha. Usiiruhusu AI kamwe kuongeza namba au madai yasiyo kwenye data yako."
          ],
          steps: ["Kusanya logic model yako, vipimo, matokeo yaliyokaguliwa na hadithi yenye ruhusa.", "Iombe AI ripoti ya ukurasa mmoja yenye vichwa vitano, ikitumia taarifa zako tu.", "Kagua kila namba dhidi ya spreadsheet yako.", "Ongeza funzo la kweli mlilojifunza.", "Mwombe mwenzako aisome."],
          words: [["Ripoti ya matokeo", "ripoti fupi kuhusu kile programu ilichofanya na kilichobadilika."], ["Funzo", "kitu mlichogundua kitakachowasaidia kufanya vizuri zaidi wakati ujao."]],
          slides: [
            { title: "Ukurasa mmoja, sehemu tano", bullets: ["Hitaji", "Tulichofanya na kilichobadilika", "Hadithi", "Tulichojifunza"] },
            { title: "Iulize AI", bullets: ["\"Ukitumia taarifa hizi tu...\"", "Vichwa vitano"] },
            { title: "Baki mkweli", bullets: ["Kila namba kutoka kwenye data yako", "Weka funzo mlilojifunza", "Mwenzako anaisoma"] }
          ],
          tryIt: "Kazi ya mwisho: andika ripoti yako ya matokeo ya ukurasa mmoja yenye logic model, vipimo viwili, dodoso lako, muhtasari wa matokeo yasiyo na majina, hadithi iliyoshirikiwa kwa ruhusa na funzo moja la kweli.",
          youCanNow: "kupanga, kupima na kuripoti matokeo ya programu kwa msaada wa AI.",
          quickCheck: [
            { objective: "O6", q: "Kichwa kipi kinafaa katika ripoti ya matokeo ya ukurasa mmoja ya somo hili?", options: ["Nywila za wafadhili", "Mishahara ya wafanyakazi", "Tulichojifunza", "Anwani za washiriki"], answer: 2, why: "Vichwa ni hitaji, tulichofanya, kilichobadilika, hadithi na tulichojifunza." },
            { objective: "O6", q: "Ripoti ya AI inaongeza \"90% ya familia zilipata kazi,\" jambo ambalo halipo kwenye data yako. Unafanya nini?", options: ["Kuliacha; linasikika vizuri", "Kulibadilisha kuwa 80%", "Kulihamishia kwenye tanbihi", "Kuliondoa, kwa sababu AI haipaswi kuongeza madai yasiyo kwenye data yako"], answer: 3, why: "Usiiruhusu AI kamwe kuongeza namba au madai yasiyo kwenye data yako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kukusanya, kufupisha na kuripoti",
        questions: [
          { objective: "O4", q: "Lipi ni swali la kuelekeza jibu?", options: ["\"Mwezi uliopita ulikuwa na wasiwasi kuhusu chakula mara ngapi?\"", "\"Programu yetu nzuri sana ilikusaidia kiasi gani?\"", "\"Unakuja siku gani?\"", "\"Ulisikia kuhusu sisi vipi?\""], answer: 1, why: "Linawasukuma watu kuelekea jibu zuri." },
          { objective: "O4", q: "Unapaswa kuwaambia watu nini kuhusu dodoso lako?", options: ["Ni la lazima ili kupata huduma", "Hakuna kitu", "Ni la hiari na halitaathiri huduma zao", "Majibu yao yatawekwa hadharani"], answer: 2, why: "Watu wanapaswa kujisikia huru kujibu kwa ukweli au kutojibu kabisa." },
          { objective: "O5", q: "Unapaswa kubandika nini kwenye AI ili kufupisha matokeo?", options: ["Majibu ghafi yenye majina", "Namba za simu za washiriki", "Hifadhidata nzima ya wateja", "Hesabu zisizo na taarifa zinazotambulisha watu"], answer: 3, why: "Hesabu zinalinda faragha." },
          { objective: "O5", q: "AI inasema 30 kati ya 40 ni asilimia 80. Unafanya nini?", options: ["Kukagua wewe mwenyewe: ni asilimia 75", "Kuitumia", "Kuikadiria kuwa 100", "Kuondoa namba zote"], answer: 0, why: "AI hukosea katika hesabu; 30 kati ya 40 ni asilimia 75." },
          { objective: "O6", q: "Kwa nini kuweka funzo katika ripoti ya matokeo?", options: ["Kujaza nafasi", "Wafadhili wanaamini mashirika ya kweli yanayoboresha", "AI inalidai", "Kuficha matokeo"], answer: 1, why: "Ukweli kuhusu kisichofanya kazi unajenga imani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Utekelezaji wa Programu na Matokeo Yake",
    questions: [
      { objective: "O1", q: "Matokeo ya kazi (output) ni:", options: ["Mabadiliko katika maisha ya watu", "Mfadhili", "Hesabu ya kile programu yako ilichofanya", "Swali la dodoso"], answer: 2, why: "Matokeo ya kazi yanahesabu shughuli." },
      { objective: "O1", q: "Badiliko (outcome) ni:", options: ["Idadi ya vipeperushi vilivyochapishwa", "Bajeti", "Anwani ya ofisi", "Mabadiliko katika maisha ya watu kwa sababu ya programu yako"], answer: 3, why: "Mabadiliko ni mabadiliko kwa watu." },
      { objective: "O1", q: "Kwa nini wafadhili wanaomba mabadiliko?", options: ["Mabadiliko yanaonyesha dhamira inafanya kazi", "Ni rahisi kuhesabu", "Ni mafupi zaidi", "Wafadhili hawapendi namba"], answer: 0, why: "Mabadiliko yanaonyesha tofauti halisi." },
      { objective: "O2", q: "Kipi SI sehemu ya logic model?", options: ["Pembejeo", "Nywila za wafadhili", "Shughuli", "Mabadiliko"], answer: 1, why: "Logic model ina pembejeo, shughuli, matokeo ya kazi na mabadiliko." },
      { objective: "O2", q: "Logic model inapaswa kuwa:", options: ["Orodha ya matamanio", "Siri", "Mpango unaoweza kuutetea, wa kweli kwa mnachofanya", "Imeandikwa na AI peke yake"], answer: 2, why: "Lazima ilingane na hali halisi." },
      { objective: "O2", q: "Kila badiliko katika logic model linapaswa kuunganika na:", options: ["Mfadhili", "Nembo", "Sikukuu", "Shughuli"], answer: 3, why: "Shughuli zinaleta mabadiliko." },
      { objective: "O3", q: "Kipimo kizuri ni:", options: ["Rahisi, kinachoweza kukusanywa na cha kweli", "Kigumu na cha gharama kubwa", "Kisichowezekana kukusanya", "Cha kubuni"], answer: 0, why: "Timu yako lazima iweze kukikusanya." },
      { objective: "O3", q: "Kupima kabla na baada kunakusaidia:", options: ["Kuepuka madodoso", "Kuona mabadiliko kwa muda", "Kuruka mabadiliko", "Kuficha matokeo"], answer: 1, why: "Kulinganisha kunaonyesha mabadiliko." },
      { objective: "O4", q: "Dodoso la washiriki linapaswa kuwa refu kiasi gani?", options: ["Maswali 50", "Neno moja", "Kama maswali 5 hadi 8", "Bila kikomo"], answer: 2, why: "Madodoso mafupi yanapata majibu mengi zaidi." },
      { objective: "O4", q: "Dodoso lisilo na majina:", options: ["Linaomba majina kamili", "Ni kwa wafanyakazi tu", "Halina maswali", "Halina majina wala taarifa zinazoonyesha nani alijibu"], answer: 3, why: "Kutokuwa na majina kunawalinda washiriki." },
      { objective: "O4", q: "Swali lipi la dodoso kwa kawaida unapaswa kuliondoa?", options: ["Hali ya uhamiaji, isipokuwa inahitajika kweli na inahifadhiwa kwa usalama", "\"Ulikuja mara ngapi?\"", "\"Ulijisikia kukaribishwa?\"", "\"Tunaweza kuboresha nini?\""], answer: 0, why: "Taarifa nyeti zinawaweka watu hatarini." },
      { objective: "O4", q: "Zana zipi za bure zinaweza kukusanya majibu ya dodoso?", options: ["Kikokotoo", "Google Forms au Microsoft Forms", "Printa", "Chaja ya simu"], answer: 1, why: "Zana za fomu zinakusanya na kuhesabu majibu." },
      { objective: "O5", q: "Kikundi kidogo kinaweza kutambulika katika matokeo yako. Unapaswa:", options: ["Kuwataja kwa majina", "Kuwaweka hadharani", "Kuziunganisha au kuacha taarifa hizo nje", "Kupuuza jambo hilo"], answer: 2, why: "Vikundi vidogo vinaweza kutambulisha watu." },
      { objective: "O5", q: "Nani anapaswa kuhesabu majibu ya dodoso?", options: ["AI ikibahatisha", "Mfadhili", "Hakuna mtu", "Zana yako ya fomu au spreadsheet"], answer: 3, why: "Spreadsheet zinahesabu kwa uhakika." },
      { objective: "O5", q: "AI hukosea katika hesabu, kwa hiyo unapaswa:", options: ["Kukagua kila asilimia wewe mwenyewe", "Kuiamini", "Kuondoa namba zote", "Kuiuliza mara mbili na kuchagua moja"], answer: 0, why: "Wewe ndiye unayewajibika kwa namba." },
      { objective: "O5", q: "Mada katika majibu ya wazi ni:", options: ["Mpangilio wa rangi", "Wazo linalojitokeza tena na tena", "Aina ya mfadhili", "Jina la programu"], answer: 1, why: "Mada zinafupisha majibu ya wazi." },
      { objective: "O6", q: "Ripoti ya matokeo inapaswa kuwa:", options: ["Kurasa 100", "Picha tu", "Kama ukurasa mmoja wenye hitaji, mlichofanya, kilichobadilika, hadithi na mafunzo", "Bajeti tu"], answer: 2, why: "Ukurasa mmoja ulio wazi unatosha." },
      { objective: "O6", q: "Prompt ipi inaiweka ripoti ya matokeo kuwa ya kweli?", options: ["\"Fanya namba zetu ziwe kubwa zaidi.\"", "\"Buni hadithi ya mafanikio.\"", "\"Ongeza takwimu za kuvutia.\"", "\"Ukitumia taarifa hizi tu, andika...\""], answer: 3, why: "Kuiwekea AI mipaka ya data yako kunazuia madai ya kubuni." },
      { objective: "O6", q: "Hadithi katika ripoti ya matokeo inahitaji:", options: ["Ruhusa ya mtu huyo", "Jina lake kamili na anwani", "Mtu maarufu", "Hakuna kitu"], answer: 0, why: "Hadithi zinahitaji ridhaa." },
      { objective: "O6", q: "Nani anapaswa kusoma ripoti ya matokeo kabla haijatumwa?", options: ["Hakuna mtu", "Mwenzako kazini", "AI peke yake", "Mshindani"], answer: 1, why: "Msomaji wa pili anagundua makosa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 6, 8, 12, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Logic model", objective: "O2", notYet: "Safu moja inakosekana, au inaorodhesha vitu ambavyo programu haifanyi.", meets: "Pembejeo, shughuli, matokeo ya kazi na mabadiliko, vyote vya kweli kwa programu.", exceeds: "Kila badiliko linaunganika wazi na shughuli fulani." },
      { name: "Vipimo vya mabadiliko", objective: "O3", notYet: "Vipimo ni matokeo ya kazi, au haviwezi kukusanywa.", meets: "Vipimo viwili rahisi na vya kweli vya mabadiliko ambavyo timu inaweza kukusanya.", exceeds: "Vyote viwili vinaulizwa kabla na baada ili kuonyesha mabadiliko." },
      { name: "Dodoso la haki", objective: "O4", notYet: "Lina maswali ya kuelekeza jibu, au linaomba majina au taarifa nyeti bila sababu.", meets: "Maswali 5 hadi 8 rahisi, bila majina na la hiari.", exceeds: "Linatolewa katika lugha ambazo washiriki wanatumia." },
      { name: "Matokeo bila majina, yaliyokaguliwa", objective: "O5", notYet: "Matokeo yanaweza kumtambulisha mtu, au asilimia moja si sahihi.", meets: "Muhtasari kutoka kwenye hesabu zisizo na taarifa zinazotambulisha watu, kila asilimia imekaguliwa.", exceeds: "Majibu ya wazi yamepangwa katika mada baada ya kuondoa taarifa zinazotambulisha watu." },
      { name: "Ripoti ya kweli ya ukurasa mmoja", objective: "O6", notYet: "Namba au dai moja halipo kwenye data, au hadithi haina ruhusa.", meets: "Ukurasa mmoja wenye hitaji, matokeo ya kazi, mabadiliko, hadithi yenye ruhusa na funzo.", exceeds: "Mwenzako aliisoma na funzo linaeleza jinsi programu itakavyoboreshwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Programu zinazokusanya data ya mabadiliko ya kabla na baada ndani ya siku 90 (utafiti wa kufuatilia)",
      "Ripoti za matokeo zinazoshirikiwa na bodi au mfadhili ndani ya siku 90",
      "Ruzuku zilizorudiwa au ufadhili mpya ambao mashirika yanauhusisha na ripoti zao za matokeo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na spreadsheet ya bure",
      "Msaidizi wa AI wa bure na Google Forms au Microsoft Forms",
      "Maelezo ya hadharani ya programu moja, na data ya mazoezi isiyo na majina kama data halisi bado haijawa tayari",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Toa seti ya data ya mazoezi isiyo na majina ili wanafunzi wajaribu kufupisha kwa usalama.",
      "Fanyeni zoezi la kupanga matokeo ya kazi na mabadiliko kama mchezo wa kikundi kabla ya jaribio la kwanza.",
      "Wanafunzi wakague asilimia za AI kwenye spreadsheet pamoja ili waone ni mara ngapi zinahitaji kurekebishwa.",
      "Wakumbushe wanafunzi kwamba madodoso lazima yawe ya hiari na yasiathiri huduma za mtu yeyote.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
