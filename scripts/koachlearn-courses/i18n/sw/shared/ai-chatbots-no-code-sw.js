"use strict";

// Koach Learn course (Swahili translation of shared/ai-chatbots-no-code.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-chatbots-no-code-sw",
  lang: "sw",
  translationOf: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Kujenga Chatbot za AI (Bila Kuandika Programu)",
  skills: "Kuchagua kazi ya chatbot, Kuandika maelekezo ya chatbot, Kutengeneza faili la maarifa, Kuweka kanuni za usalama, Kujaribu kwa maswali halisi, Kuzindua na kuboresha",
  outcome: "kujenga chatbot ya AI bila kuandika programu, inayojibu maswali ya kawaida ya biashara, shirika lisilo la faida au klabu kutokana na taarifa zako mwenyewe, ikiwa na maelekezo wazi na kanuni za usalama, na iliyojaribiwa kwa maswali halisi kabla mtu yeyote hajaitumia.",
  about: [
    "Chatbot inajibu maswali kwenye dirisha la mazungumzo, wakati wowote wa mchana au usiku. Kwa zana za AI za leo unaweza kuijenga bila kuandika programu (code): unaipa maelekezo na taarifa zako mwenyewe, nayo inajibu kwa lugha rahisi.",
    "Kozi hii ni kwa wamiliki wa biashara ndogo, wafanyakazi na wajitolea wa mashirika yasiyo ya faida, na vijana wanaotaka mradi halisi. Mifano ni pamoja na duka la mikate linalojibu \"Mko wazi Jumapili?\", benki ya chakula inayoeleza watu walete nini, na klabu ya shule inayojibu maswali kuhusu majaribio ya kujiunga na timu.",
    "Utapanga kazi ya chatbot, utaandika maelekezo yake, utaipa faili la maarifa, utaongeza kanuni za usalama, utaijaribu na utaizindua. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga chatbot inayofanya kazi bila kuandika programu kwa shirika halisi au la mazoezi: kazi yake kwa sentensi moja, maelekezo yaliyoandikwa yenye mtindo wa sauti na kanuni za usalama, faili la maarifa la ukurasa mmoja lenye ukweli, na kumbukumbu ya majaribio yenye angalau maswali kumi halisi pamoja na marekebisho uliyofanya. Mshirikishe mtu mmoja na uandike maoni yake.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo, wafanyakazi wao, na watu wanaoendesha mashirika yasiyo ya faida, makanisa au klabu, wanaojibu maswali yale yale tena na tena kwa simu, ujumbe mfupi, barua pepe na mitandao ya kijamii.",
    startingPoint: "Wanaweza kutumia simu au kompyuta, barua pepe na mitandao ya kijamii, na huenda wamewahi kujaribu msaidizi wa AI. Hawana uzoefu wa kuandika programu, na wengi hawajawahi kuweka chatbot.",
    gap: "Kujibu maswali yanayojirudia kunachukua saa nyingi kila wiki, na wateja wanatarajia majibu wakati wowote. Wanafunzi wanahitaji kujenga chatbot yenye kazi finyu na ya kweli kutokana na ukweli wao wenyewe, yenye kanuni za usalama na iliyojaribiwa, ili iokoe muda bila kutoa majibu yasiyo sahihi au ya hatari yanayoharibu uaminifu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna kuandika programu",
      "Vifaa: kompyuta ni rahisi zaidi; baadhi ya zana za kujenga zinafanya kazi kwenye simu",
      "Gharama na vipengele: vipengele na mipango ya chatbot bila programu hubadilika; wanafunzi wanakagua ukurasa wa msaada wa zana",
      "Faragha: hakuna majina ya wateja, namba za simu, taarifa za wafadhili, nywila wala taarifa za benki katika faili lolote",
      "Muda: masomo ya dakika 5, jumla kama dakika 60 pamoja na muda wa kujaribu"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maswali ambayo shirika lako tayari linapokea", action: "kuandika kazi ya chatbot kwa sentensi moja na kuorodhesha maswali kumi inayopaswa kujibu", standard: "bila swali lolote la hatari la afya, sheria au pesa kwenye orodha" },
    { id: "O2", condition: "Ukitumia zana ya kujenga chatbot bila programu", action: "kuandika maelekezo yanayoweka nafasi ya chatbot, wanaoiuliza, kazi yake, mtindo wa sauti na mipaka yake", standard: "yakiwa na sehemu zote tano na mstari wa kusema ifanye nini isipojua" },
    { id: "O3", condition: "Ukipewa ukweli wa shirika lako", action: "kutengeneza faili la maarifa la ukurasa mmoja, lenye tarehe, kwa mtindo wa swali na jibu, na kuliongeza kwenye chatbot", standard: "bila taarifa yoyote binafsi ndani yake" },
    { id: "O4", condition: "Kwa chatbot ambayo umma utaitumia", action: "kuandika kanuni za usalama zinazoifanya ibaki kwenye mada, iwe ya kweli na salama", standard: "pamoja na kutoomba namba binafsi, kutotoa ushauri wa kitaalamu, kusema ni AI na kuelekeza dharura kwa 911" },
    { id: "O5", condition: "Kabla mtu yeyote hajaitumia chatbot", action: "kuijaribu kwa angalau maswali kumi halisi na magumu, kuandika matokeo na kurekebisha yaliyoshindwa", standard: "ukijaribu tena kila swali lililoshindwa hadi lipite" },
    { id: "O6", condition: "Chatbot ikiwa tayari", action: "kuishiriki na watu wachache, kukusanya maoni na kuweka utaratibu wa kuisasisha", standard: "huku mtu akipatikana kila wakati kwa yale isiyoweza kushughulikia" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga na kujenga chatbot",
      lessons: [
        {
          objectives: ["O1"],
          title: "Chatbot ya AI inaweza kufanya nini, na kuchagua kazi yake moja",
          minutes: 4,
          goal: "Andika kazi ya chatbot kwa sentensi moja na uorodheshe maswali inayopaswa kujibu.",
          text: [
            "Chatbot ya AI ni msaidizi wa AI aliyewekwa kwa kusudi moja. Badala ya kujibu kila kitu, inajibu maswali kuhusu shirika lako, ikitumia taarifa unazoipa.",
            "Kazi nzuri za kwanza ni finyu na zinazojirudia: saa za kazi na mahali, bei, jinsi ya kujiandikisha, watu walete nini, sera za kurudisha bidhaa, zamu za wajitolea. Kazi mbaya za kwanza ni zile za hatari: ushauri wa afya, sheria au pesa, au chochote kinachohitaji uamuzi wa mtu.",
            "Anza na maswali ambayo watu tayari wanauliza. Angalia barua pepe, ujumbe, simu na maoni kwenye mitandao ya kijamii. Maswali kumi yanayoulizwa zaidi yanakuwa kazi ya chatbot."
          ],
          steps: ["Andika maswali kumi ambayo watu wanakuuliza zaidi.", "Futa yoyote yanayohitaji uamuzi wa mtu au yaliyo ya hatari.", "Andika kazi ya chatbot kwa sentensi moja: \"Chatbot hii inajibu maswali kuhusu [mada] kwa ajili ya [nani].\""],
          words: [["Chatbot", "programu inayojibu maswali kwenye dirisha la mazungumzo."], ["Matumizi (use case)", "kazi maalum ambayo zana inatumika kuifanya."]],
          slides: [
            { title: "Chatbot ni msaidizi wa kazi moja", bullets: ["Imewekwa kwa kusudi moja", "Inajibu kutokana na taarifa zako mwenyewe"] },
            { title: "Kazi nzuri za kwanza", bullets: ["Saa za kazi, mahali, bei", "Jinsi ya kujiandikisha au watu walete nini", "Zamu za wajitolea, sera za kurudisha bidhaa"] },
            { title: "Waachie watu", bullets: ["Ushauri wa afya, sheria au pesa", "Malalamiko na mambo yanayohitaji uamuzi"] },
            { title: "Anza na maswali halisi", bullets: ["Barua pepe, simu, ujumbe, maoni", "Maswali kumi ya juu = kazi yake"] }
          ],
          tryIt: "Chagua biashara, shirika lisilo la faida au klabu (lako au la mazoezi). Andika maswali yake kumi yanayoulizwa zaidi na kazi ya chatbot yake kwa sentensi moja.",
          youCanNow: "kuchagua kazi salama na finyu kwa chatbot na kuorodhesha maswali inayopaswa kujibu.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinachofanya kazi ya kwanza nzuri kwa chatbot ya biashara?", options: ["Kutoa ushauri wa kisheria", "Kuamua kurudisha pesa kwa kila kesi peke yake", "Kujibu maswali finyu yanayojirudia kama saa za kazi na kujiandikisha", "Kujibu swali lolote duniani"], answer: 2, why: "Maswali finyu yanayojirudia yana hatari ndogo na yanaokoa muda mwingi zaidi." },
            { objective: "O1", q: "Kinyozi chako kinapokea maswali mengi. Lipi unalifuta kwenye orodha ya chatbot?", options: ["\"Upele huu kichwani mwangu ni hatari?\"", "\"Mko wazi saa ngapi Jumamosi?\"", "\"Ninawekaje miadi?\"", "\"Naegesha gari wapi?\""], answer: 0, why: "Maswali ya afya yanahitaji uamuzi wa mtaalamu, kwa hiyo si kazi ya chatbot." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika maelekezo ya chatbot",
          minutes: 5,
          goal: "Andika maelekezo wazi yanayoweka nafasi ya chatbot, mtindo wa sauti na mipaka yake.",
          text: [
            "Zana za chatbot bila programu zinakuruhusu kuandika maelekezo ambayo AI inafuata katika kila mazungumzo. Mifano ni custom GPTs ndani ya ChatGPT, Gems ndani ya Google Gemini na agents ndani ya Microsoft Copilot Studio. Majina ya vipengele, menyu na mipango inayovijumuisha hubadilika mara kwa mara, kwa hiyo kagua ukurasa wa msaada wa zana kwa hatua za sasa.",
            "Maelekezo mazuri yanagusa mambo matano: chatbot ni nani (\"Wewe ni msaidizi wa Benki ya Chakula ya Sunrise\"), inazungumza na nani, inajibu nini, inasikikaje (ya kirafiki, fupi, maneno rahisi), na kile isichopaswa kufanya.",
            "Andika maelekezo kwa sentensi fupi na za moja kwa moja. Iambie ifanye nini isipojua: \"Kama jibu halimo kwenye faili la maarifa, sema huna uhakika na utoe namba ya simu.\""
          ],
          steps: ["Nafasi: \"Wewe ni msaidizi wa [shirika].\"", "Wanaouliza: nani atauliza maswali.", "Kazi: mada gani inajibu.", "Mtindo wa sauti: wa kirafiki, mfupi, maneno rahisi.", "Mipaka: isichopaswa kufanya, na iseme nini isipojua."],
          words: [["Maelekezo", "maagizo ya kudumu ambayo chatbot inafuata katika kila mazungumzo; wakati mwingine huitwa system prompt."], ["Mtindo wa sauti", "jinsi maandishi yanavyosikika: rasmi, ya kirafiki, mafupi."]],
          slides: [
            { title: "Zana za chatbot bila programu", bullets: ["Custom GPTs, Gemini Gems, agents za Copilot Studio", "Majina na mipango hubadilika: kagua ukurasa wa msaada"] },
            { title: "Sehemu tano za maelekezo", bullets: ["Nafasi na wanaouliza", "Inajibu nini", "Mtindo wa sauti", "Isichopaswa kufanya"] },
            { title: "Isipojua", bullets: ["Iseme \"Sina uhakika\"", "Itoe namba ya simu au barua pepe ya mtu"] }
          ],
          sources: [{ name: "Msaada wa Google Gemini: Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Andika maelekezo ya chatbot yako yenye sehemu zote tano, kwa sentensi nane au chache zaidi.",
          youCanNow: "kuandika maelekezo ya chatbot yanayoweka nafasi yake, wanaoiuliza, kazi yake, mtindo wa sauti na mipaka yake.",
          quickCheck: [
            { objective: "O2", q: "\"Ya kirafiki, fupi, maneno rahisi\" ni sehemu gani ya maelekezo?", options: ["Nafasi", "Wanaouliza", "Mipaka", "Mtindo wa sauti"], answer: 3, why: "Mtindo wa sauti unaeleza jinsi chatbot inavyosikika." },
            { objective: "O2", q: "Maelekezo yako hayasemi chatbot ifanye nini isipojua. Unaongeza nini?", options: ["\"Toa jibu kila wakati, hata kwa kubahatisha.\"", "\"Kama jibu halimo kwenye faili la maarifa, sema huna uhakika na utoe namba ya simu.\"", "\"Badilisha mada.\"", "\"Muulize mtumiaji nywila yake.\""], answer: 1, why: "Kuiambia ikiri haina uhakika na imwelekeze mtumiaji kwa mtu kunazuia majibu ya kubuni." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuipa chatbot ukweli wako: faili la maarifa",
          minutes: 5,
          goal: "Tengeneza faili la maarifa la ukurasa mmoja na uliunganishe na chatbot isiyohitaji programu.",
          text: [
            "Zana za AI zinajua mengi kwa ujumla lakini hazijui chochote kuhusu saa zako za kazi za Jumanne. Zana nyingi za kujenga chatbot bila programu zinakuruhusu kupakia faili, mara nyingi chini ya sehemu inayoitwa Knowledge, ambalo chatbot inalitumia kujibu.",
            "Fanya faili liwe rahisi: kichwa kwa kila mada na ukweli mfupi na rahisi. Tumia mtindo wa swali na jibu kwa maswali yako kumi ya juu. Weka tarehe juu ili ujue wakati wa kulisasisha.",
            "Usiweke kamwe taarifa binafsi kwenye faili: hakuna majina ya wateja, namba za simu, nywila, taarifa za wafadhili wala taarifa za benki. Chochote kilicho kwenye faili kinaweza kujitokeza katika jibu."
          ],
          steps: ["Fungua Google Doc au hati ya Word.", "Ongeza tarehe na jina la shirika juu.", "Andika kila swali la juu na jibu lake chini yake.", "Ongeza mambo ya msingi: saa za kazi, anwani, mawasiliano, bei au huduma.", "Ondoa chochote cha binafsi, hifadhi, kisha ulipakie kwenye sehemu ya maarifa ya zana ya kujenga chatbot."],
          words: [["Faili la maarifa", "hati unayopakia ili chatbot ijibu kutokana na ukweli wako."], ["Kupakia (upload)", "kutuma faili kutoka kifaa chako kwenda tovuti au app."]],
          slides: [
            { title: "AI haijui taarifa zako", bullets: ["Saa zako za kazi, bei, sera", "Ipe faili la maarifa"] },
            { title: "Faili la maarifa zuri", bullets: ["Tarehe juu", "Swali na jibu kwa kila swali la juu", "Ukweli mfupi na rahisi"] },
            { title: "Usiweke kamwe", bullets: ["Majina na namba za wateja au wafadhili", "Nywila au taarifa za benki", "Chochote usichoweza kuweka hadharani"] }
          ],
          tryIt: "Andika faili la maarifa la ukurasa mmoja kwa chatbot yako, lenye tarehe na majibu ya maswali yako kumi ya juu. Kisha fungua zana ya kujenga chatbot bila programu unayoweza kutumia, bandika maelekezo yako, pakia faili na uhifadhi.",
          youCanNow: "kutengeneza faili la maarifa salama na kuliunganisha pamoja na maelekezo kwenye zana ya kujenga chatbot bila programu.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uweke tarehe juu ya faili la maarifa?", options: ["Kufanya faili liwe refu zaidi", "Ili ujue wakati wa kulisasisha", "Kwa sababu AI inaihitaji ili kuanza", "Kuficha ukweli wa zamani"], answer: 1, why: "Tarehe inaonyesha ukweli ni wa lini na wakati wa kuusasisha." },
            { objective: "O3", q: "Unatengeneza faili la maarifa la kanisa. Lipi unaliacha nje?", options: ["Saa za ibada", "Anwani", "Jinsi ya kujiunga na kikundi kidogo", "Namba za simu za waumini"], answer: 3, why: "Taarifa binafsi kama namba za simu zinaweza kujitokeza katika jibu, kwa hiyo haziwekwi kamwe kwenye faili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga na kujenga chatbot",
        questions: [
          { objective: "O1", q: "Ipi ni kazi bora ya kwanza kwa chatbot ya shirika dogo?", options: ["Kutoa ushauri wa afya", "Kuidhinisha mikopo", "Kujibu maswali ya saa za kazi, mahali na kujiandikisha", "Kushughulikia kila lalamiko peke yake"], answer: 2, why: "Maswali finyu, yanayojirudia na yenye hatari ndogo ndiyo kazi bora ya kwanza." },
          { objective: "O1", q: "Unapaswa kupata wapi maswali ambayo chatbot yako inapaswa kujibu?", options: ["Barua pepe, simu, ujumbe na maoni ambayo watu tayari walituma", "Kuyabuni", "Kunakili orodha ya kampuni nyingine", "Kuiomba AI ibahatishe"], answer: 0, why: "Maswali halisi kutoka kwa watu halisi yanaonyesha kazi ya chatbot." },
          { objective: "O2", q: "Maelekezo yanapaswa kusema chatbot ifanye nini isipojua jibu?", options: ["Ibuni kitu kinachosikika sahihi", "Imalize mazungumzo kimya kimya", "Imwombe mteja nywila yake", "Iseme haina uhakika na itoe njia ya kumfikia mtu"], answer: 3, why: "Kukiri haijui na kumwelekeza mtumiaji kwa mtu kunazuia majibu yasiyo sahihi." },
          { objective: "O3", q: "Kwa nini upakie faili la maarifa?", options: ["Kuifanya chatbot iwe ya polepole", "Ili chatbot ijibu kutokana na ukweli wako mwenyewe", "Kuhifadhi nywila za wateja", "Haihitajiki kamwe"], answer: 1, why: "AI haijui taarifa zako hadi uipe." },
          { objective: "O3", q: "Kipi kinafaa kuwa kwenye faili la maarifa la chatbot?", options: ["Namba za simu za wafadhili", "Saa zako za kufungua", "Nywila za wafanyakazi", "Namba za akaunti za benki"], answer: 1, why: "Ukweli unaoweza kuwa hadharani tu ndio unafaa kwenye faili." }
        ]
      }
    },
    {
      name: "Sura 2: Kujaribu, kuzindua na kuboresha",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuongeza kanuni za usalama ili chatbot ibaki salama",
          minutes: 5,
          goal: "Andika kanuni za usalama zinazoifanya chatbot ibaki kwenye mada, iwe ya kweli na salama.",
          text: [
            "Kanuni za usalama (guardrails) ni sheria zinazozuia chatbot isiende mahali isipopaswa. Ziongeze kwenye maelekezo kama mistari wazi ya \"usifanye\" na \"kila wakati\".",
            "Kanuni zenye manufaa: baki kwenye mada zako na kataa nyingine kwa adabu; usiombe wala usihifadhi kamwe taarifa binafsi kama namba za kadi au namba za Social Security (namba ya utambulisho ya Marekani); usitoe kamwe ushauri wa afya, sheria au fedha; waambie watu ni AI, si mtu; na elekeza dharura kwa 911 au namba sahihi ya msaada.",
            "Kuwa wazi kwamba ni AI kunajenga uaminifu. Anza mazungumzo kwa ujumbe mfupi: \"Habari, mimi ni msaidizi wa AI wa Benki ya Chakula ya Sunrise. Ninaweza kujibu maswali kuhusu saa za kazi na unachopaswa kuleta.\""
          ],
          steps: ["Ongeza mstari: baki kwenye [mada zako]; kataa nyingine kwa adabu.", "Ongeza: usiombe kamwe namba za kadi, benki, kitambulisho au Social Security.", "Ongeza: hakuna ushauri wa afya, sheria au fedha; elekeza kwa mtaalamu.", "Ongeza: sema wewe ni msaidizi wa AI.", "Ongeza: kwa dharura, waambie watu wapige 911."],
          words: [["Kanuni ya usalama (guardrail)", "sheria inayofanya zana ya AI ibaki kwenye mada na salama."], ["Kukataa", "kusema hapana kwa adabu."]],
          slides: [
            { title: "Kanuni za usalama zinailinda", bullets: ["Mistari ya \"usifanye\" na \"kila wakati\" kwenye maelekezo"] },
            { title: "Kanuni za lazima", bullets: ["Baki kwenye mada; kataa mengine", "Usiombe kamwe namba binafsi", "Hakuna ushauri wa afya, sheria au pesa"] },
            { title: "Kuwa mkweli", bullets: ["Sema ni msaidizi wa AI", "Elekeza dharura kwa 911"] }
          ],
          tryIt: "Ongeza angalau kanuni tano za usalama kwenye maelekezo ya chatbot yako, pamoja na salamu fupi inayosema ni msaidizi wa AI na inaweza kusaidia nini.",
          youCanNow: "kuandika kanuni za usalama zinazoifanya chatbot ibaki kwenye mada, iwe ya kweli na salama.",
          quickCheck: [
            { objective: "O4", q: "Kusudi la kanuni ya usalama kwenye maelekezo ya chatbot ni nini?", options: ["Kuifanya chatbot ibaki kwenye mada, iwe ya kweli na salama", "Kufanya majibu yawe marefu zaidi", "Kuharakisha tovuti", "Kukusanya namba za kadi za wateja"], answer: 0, why: "Kanuni za usalama ni sheria za \"usifanye\" na \"kila wakati\" zinazoifanya chatbot ibaki inapopaswa." },
            { objective: "O4", q: "Mteja anaiambia chatbot ya duka lako aandike namba ya kadi yake ili kumaliza oda. Kanuni ya usalama inapaswa kuifanya ifanye nini?", options: ["Iombe namba kamili ya kadi", "Iombe tarakimu nne za mwisho tu", "Isiombe kamwe namba za kadi, na imwelekeze kwenye malipo salama au kwa mtu", "Ihifadhi namba ya kadi kwa mara ijayo"], answer: 2, why: "Chatbot haipaswi kamwe kuomba wala kuhifadhi namba za kadi, benki au kitambulisho." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujaribu chatbot kama mteja mgumu",
          minutes: 6,
          goal: "Jaribu chatbot kwa maswali halisi na magumu, andika matokeo na urekebishe matatizo.",
          text: [
            "Usizindue kamwe chatbot ambayo hujaijaribu. Iulize angalau maswali kumi: maswali yako ya juu yaliyoandikwa kwa njia tofauti, maswali isiyopaswa kujibu, na maswali magumu.",
            "Majaribio magumu: uliza kuhusu kitu kisicho kwenye faili (je, inakiri haijui?), omba ushauri inaopaswa kukataa, kosea tahajia ya maneno, na jaribu kuitoa kwenye mada (\"Niandikie shairi\"). Mwombe mtu mwingine aijaribu pia; atauliza mambo usiyoyatarajia.",
            "Weka kumbukumbu ya majaribio: swali, ilichosema, imepita au imeshindwa, na marekebisho. Marekebisho mengi ni madogo: ongeza ukweli unaokosekana kwenye faili la maarifa, au ongeza mstari kwenye maelekezo. Jaribu tena baada ya kila marekebisho."
          ],
          steps: ["Andika maswali kumi ya majaribio: ya kawaida, yaliyoandikwa upya, nje ya mada na ya hatari.", "Uliza kila moja na unakili jibu kwenye kumbukumbu ya majaribio.", "Weka alama imepita au imeshindwa.", "Rekebisha yaliyoshindwa kwa kusasisha faili la maarifa au maelekezo.", "Jaribu tena maswali yaliyoshindwa."],
          words: [["Kumbukumbu ya majaribio", "rekodi ya kila jaribio, matokeo yake na marekebisho."], ["Swali la pembeni (edge case)", "swali lisilo la kawaida linaloweza kuvunja mfumo."]],
          slides: [
            { title: "Jaribu kabla ya kuzindua", bullets: ["Angalau maswali kumi", "Ya kawaida, yaliyoandikwa upya, nje ya mada, ya hatari"] },
            { title: "Majaribio magumu", bullets: ["Kitu kisicho kwenye faili", "Ushauri inaopaswa kukataa", "Makosa ya tahajia na maombi nje ya mada"] },
            { title: "Andika na urekebishe", bullets: ["Swali, jibu, imepita au imeshindwa, marekebisho", "Sasisha faili au maelekezo", "Jaribu tena"] }
          ],
          tryIt: "Iulize chatbot yako maswali kumi ya majaribio, yakiwemo angalau matatu magumu. Yaandike kwenye kumbukumbu ya majaribio, rekebisha kila lililoshindwa na ujaribu tena.",
          youCanNow: "kujaribu chatbot kwa maswali ya kawaida na magumu, kuweka kumbukumbu ya majaribio na kurekebisha kinachoshindwa.",
          quickCheck: [
            { objective: "O5", q: "Nini kinaandikwa kwenye kumbukumbu ya majaribio ya chatbot?", options: ["Maswali iliyopata sahihi tu", "Namba za simu za wateja", "Maelekezo ya chatbot", "Swali, jibu, imepita au imeshindwa, na marekebisho"], answer: 3, why: "Kumbukumbu ya majaribio inarekodi kila swali, jibu, imepita au imeshindwa, na ulichorekebisha." },
            { objective: "O5", q: "Wakati wa majaribio, chatbot inabuni bei isiyo kwenye faili lako. Unafanya nini kwanza?", options: ["Ongeza bei kwenye faili la maarifa au mstari unaoiambia ikiri haijui, kisha jaribu tena", "Izindue hata hivyo", "Futa chatbot", "Puuza; wateja hawatauliza"], answer: 0, why: "Marekebisho mengi ni ukweli unaokosekana au mstari wa maelekezo, ikifuatiwa na kujaribu tena." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuzindua, kushiriki na kuiweka ikiwa ya kisasa",
          minutes: 5,
          goal: "Shiriki chatbot na watumiaji halisi, kusanya maoni na uweke utaratibu wa kuisasisha.",
          text: [
            "Zana nyingi za kujenga zinakuruhusu kushiriki chatbot kwa kiungo (link), na baadhi zinakuruhusu kuiweka kwenye tovuti. Anza kidogo: ishiriki kwanza na wateja, wanachama au wajitolea wachache, na uwaambie ni mpya.",
            "Omba maoni: \"Je, ilijibu swali lako? Ilikosea nini?\" Soma mazungumzo halisi kama zana yako inayaonyesha, na utafute maswali ambayo haikuweza kujibu.",
            "Weka utaratibu. Kila mwezi, au wakati wowote saa za kazi, bei au sera zinapobadilika, sasisha faili la maarifa na tarehe yake. Chatbot iliyopitwa na wakati ni mbaya kuliko kutokuwa na chatbot kabisa. Hakikisha mtu anapatikana kwa chochote ambacho chatbot haiwezi kushughulikia."
          ],
          steps: ["Shiriki kiungo cha chatbot na watu watatu hadi watano.", "Waulize maswali mawili ya maoni.", "Ongeza majibu yanayokosekana kwenye faili la maarifa.", "Weka kikumbusho cha kila mwezi cha kusasisha kwenye kalenda yako.", "Hakikisha watu wanaweza kumfikia mtu kila wakati."],
          words: [["Kuzindua", "kufanya kitu kipatikane ili watu wakitumie."], ["Maoni", "kile watumiaji wanakuambia kuhusu kilichofanya kazi na kisichofanya kazi."]],
          slides: [
            { title: "Zindua kidogo", bullets: ["Shiriki kiungo na watu wachache", "Waambie ni mpya"] },
            { title: "Omba maoni", bullets: ["\"Je, ilijibu swali lako?\"", "\"Ilikosea nini?\""] },
            { title: "Iweke ya kisasa", bullets: ["Sasisha kila mwezi au ukweli unapobadilika", "Badilisha tarehe kwenye faili", "Mtu anapatikana kila wakati"] }
          ],
          tryIt: "Kazi ya mwisho: shiriki chatbot yako iliyojaribiwa na angalau mtu mmoja. Andika maoni yake, fanya uboreshaji mmoja, na uweke kikumbusho cha kila mwezi cha kusasisha faili la maarifa.",
          youCanNow: "kujenga, kujaribu, kuzindua na kutunza chatbot ya AI bila programu kwa shirika halisi.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini ushiriki chatbot mpya na watu wachache tu kwanza?", options: ["Kuifanya iwe siri", "Kwa sababu viungo vinafanya kazi kwa watu watano tu", "Kupata matatizo na maoni kabla kila mtu hajaitumia", "Ili usilazimike kuisasisha kamwe"], answer: 2, why: "Kuanza kidogo kunakuwezesha kugundua matatizo na kukusanya maoni kwa usalama." },
            { objective: "O6", q: "Duka lako la mikate linabadilisha saa za kazi wiki ijayo. Unafanya nini na chatbot?", options: ["Hakuna; itajifunza yenyewe", "Sasisha faili la maarifa na tarehe yake", "Zima chatbot milele", "Waambie wateja waipuuze"], answer: 1, why: "Sasisha faili na tarehe yake kila ukweli unapobadilika; chatbot iliyopitwa na wakati ni mbaya kuliko kutokuwa nayo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujaribu, kuzindua na kuboresha",
        questions: [
          { objective: "O4", q: "Kanuni ya usalama (guardrail) ni nini?", options: ["Uzio unaozunguka ofisi", "Nyongeza ya kulipia", "Aina ya faili la maarifa", "Sheria inayofanya zana ya AI ibaki kwenye mada na salama"], answer: 3, why: "Kanuni za usalama ni sheria zilizo kwenye maelekezo." },
          { objective: "O4", q: "Mtumiaji anaiomba chatbot ya duka lako la mikate ushauri wa afya kuhusu mzio (allergy). Inapaswa kufanya nini?", options: ["Ikatae na imwelekeze kwa daktari, au 911 ikiwa ni dharura", "Itoe utambuzi wa ugonjwa", "Imwombe namba yake ya bima", "Ibadilishe mada iwe keki"], answer: 0, why: "Chatbot hazipaswi kutoa ushauri wa afya na zinapaswa kuelekeza dharura kwa 911." },
          { objective: "O5", q: "Kwa nini uulize swali AMBALO HALIMO kwenye faili la maarifa wakati wa majaribio?", options: ["Kuipunguza kasi", "Kufuta faili", "Kukagua kama inakiri haijui badala ya kubuni kitu", "Hakuna sababu"], answer: 2, why: "Chatbot nzuri inasema haina uhakika badala ya kubuni jibu." },
          { objective: "O6", q: "Chatbot inatoa saa za kazi za mwezi uliopita. Marekebisho ni yapi?", options: ["Funga biashara", "Waambie watumiaji wabahatishe", "Ongeza kanuni za usalama tu", "Sasisha faili la maarifa na tarehe yake"], answer: 3, why: "Ukweli uliopitwa na wakati unatoka kwenye faili lililopitwa na wakati." },
          { objective: "O6", q: "Njia bora ya kuzindua ni ipi?", options: ["Iweke kila mahali bila kuijaribu", "Ifiche", "Ishiriki kwanza na watu wachache na uombe maoni", "Ondoa mawasiliano ya mtu"], answer: 2, why: "Uzinduzi mdogo unagundua matatizo kabla watu wengi hawajayaona." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Chatbot za AI (Bila Kuandika Programu)",
    questions: [
      { objective: "O1", q: "Chatbot ya AI ya shirika inaelezwa vizuri zaidi kama:", options: ["Mpokeaji wageni wa kibinadamu", "Msaidizi wa AI aliyewekwa kwa kusudi moja", "Huduma ya kuhifadhi tovuti", "Mfumo wa malipo"], answer: 1, why: "Ni msaidizi aliyelenga kazi moja." },
      { objective: "O1", q: "Kazi ipi ya kwanza ya chatbot ina hatari ndogo zaidi?", options: ["Saa za benki ya chakula na watu walete nini", "Ushauri wa kisheria", "Utambuzi wa ugonjwa", "Vidokezo vya uwekezaji"], answer: 0, why: "Saa za kazi na maelekezo rahisi ni ukweli wenye hatari ndogo." },
      { objective: "O1", q: "Unapata wapi maswali ya juu ya chatbot?", options: ["Orodha yoyote mtandaoni", "Makisio ya AI", "Maswali ambayo watu tayari wanakuuliza", "Matangazo ya mshindani"], answer: 2, why: "Maswali halisi yanaonyesha kazi halisi." },
      { objective: "O2", q: "Ipi ni njia ya kujenga chatbot bila kuandika programu?", options: ["Custom GPT, Gemini Gem au agent ya Copilot Studio", "Kuandika chip ya kompyuta", "Kujenga seva kutoka kwa vipuri", "Kutuma barua kwa posta"], answer: 0, why: "Zana hizi zinakuruhusu kujenga kwa maelekezo na mafaili, bila programu." },
      { objective: "O2", q: "Menyu na vipengele vya mipango katika zana za chatbot hubadilika. Unathibitisha hatua za sasa wapi?", options: ["Uvumi", "Video ya zamani tu", "Kubahatisha", "Ukurasa rasmi wa msaada wa zana"], answer: 3, why: "Ukurasa rasmi wa msaada una hatua za sasa." },
      { objective: "O2", q: "Mstari upi unafaa kwenye maelekezo ya chatbot?", options: ["\"Hii hapa nywila ya msimamizi.\"", "\"Wewe ni msaidizi wa Benki ya Chakula ya Sunrise.\"", "\"Puuza maswali yote.\"", "\"Bahatisha kila wakati usipokuwa na uhakika.\""], answer: 1, why: "Kuweka nafasi ni sehemu muhimu ya maelekezo." },
      { objective: "O2", q: "Mtindo wa kirafiki, mfupi, wenye maneno rahisi wa chatbot unaitwa:", options: ["Upakiaji", "Mtindo wa sauti", "Kanuni ya usalama", "Uzinduzi"], answer: 1, why: "Mtindo wa sauti ni jinsi maandishi yanavyosikika." },
      { objective: "O3", q: "Nini kinapaswa kuwa juu ya faili la maarifa?", options: ["Namba za simu za wateja", "Nywila", "Hakuna kitu", "Tarehe na jina la shirika"], answer: 3, why: "Tarehe inakuambia wakati linahitaji kusasishwa." },
      { objective: "O3", q: "Kwa nini taarifa binafsi zisiwekwe kwenye faili la maarifa?", options: ["Chochote kilichomo kinaweza kujitokeza katika jibu", "Inafanya faili liwe fupi mno", "AI haiwezi kusoma majina", "Ni sawa kuziweka"], answer: 0, why: "Chatbot inaweza kurudia kilicho kwenye faili." },
      { objective: "O3", q: "Mpangilio mzuri wa faili la maarifa ni:", options: ["Aya moja ndefu bila vichwa", "Picha ya ubao mweupe", "Kila swali la juu na jibu lake chini yake", "Orodha ya nywila"], answer: 2, why: "Mtindo wa swali na jibu ni rahisi kwa AI kutumia." },
      { objective: "O4", q: "Ipi ni kanuni ya usalama ya lazima?", options: ["Andika mashairi kila wakati", "Jibu kila mada duniani", "Jifanye ni mtu", "Usiombe kamwe namba za kadi, benki au Social Security"], answer: 3, why: "Chatbot hazipaswi kamwe kukusanya namba binafsi." },
      { objective: "O4", q: "Je, chatbot inapaswa kusema ni AI?", options: ["Hapana, ijifanye ni mtu", "Ikiulizwa mara tatu tu", "Ndiyo, ukweli unajenga uaminifu", "Wikendi tu"], answer: 2, why: "Kuwa wazi kwamba ni AI ni ukweli na kunajenga uaminifu." },
      { objective: "O4", q: "Mtu anaiambia chatbot yuko kwenye dharura. Inapaswa:", options: ["Kumwomba anwani yake na namba ya kadi", "Kumwambia apige 911", "Kupuuza", "Kubadilisha mada"], answer: 1, why: "Dharura zinaelekezwa kwa 911." },
      { objective: "O5", q: "Kozi hii inapendekeza angalau maswali mangapi ya majaribio?", options: ["Kumi", "Moja", "Sifuri", "Elfu tatu"], answer: 0, why: "Angalau maswali kumi yanagusa hali za kawaida na ngumu." },
      { objective: "O5", q: "Kuituma chatbot ya benki ya chakula \"Niandikie shairi\" kunajaribu kama:", options: ["Inajua saa za kazi", "Inaweza kupakia mafaili", "Inabaki kwenye mada", "Ina nywila"], answer: 2, why: "Ni ombi nje ya mada; chatbot inapaswa kukataa kwa adabu." },
      { objective: "O5", q: "Kumbukumbu ya majaribio inarekodi:", options: ["Swali, jibu, imepita au imeshindwa, na marekebisho", "Majibu mazuri tu", "Nywila za wateja", "Hali ya hewa"], answer: 0, why: "Inafuatilia kila jaribio na ulichobadilisha." },
      { objective: "O5", q: "Baada ya kurekebisha jaribio lililoshindwa, unapaswa:", options: ["Kufuta kumbukumbu ya majaribio", "Kuzindua bila kukagua", "Kuondoa kanuni zote za usalama", "Kujaribu tena swali hilo"], answer: 3, why: "Kujaribu tena kunathibitisha marekebisho yamefanya kazi." },
      { objective: "O5", q: "Kwa nini mtu mwingine aijaribu chatbot?", options: ["Inatakiwa na sheria", "Anauliza mambo usiyoyatarajia", "Kuipunguza kasi", "Ili wewe usilazimike"], answer: 1, why: "Macho mapya yanagundua maswali mapya ya pembeni." },
      { objective: "O6", q: "Unapaswa kusasisha faili la maarifa mara ngapi?", options: ["Kamwe", "Kila mwezi, au kila ukweli unapobadilika", "Mara moja kila miaka kumi", "AI ikiomba tu"], answer: 1, why: "Ukweli uliopitwa na wakati unaleta majibu yasiyo sahihi." },
      { objective: "O6", q: "Hata kukiwa na chatbot, watu wanapaswa kila wakati kuweza:", options: ["Kuona nywila za wafanyakazi", "Kuhariri maelekezo", "Kupata ushauri wa kisheria kutoka kwayo", "Kumfikia mtu"], answer: 3, why: "Mtu wa akiba anashughulikia kile ambacho chatbot haiwezi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      2,
      5,
      8,
      9,
      10,
      12,
      14,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kazi iliyo wazi",
        objective: "O1",
        notYet: "Hakuna sentensi ya kazi, au kazi inajumuisha ushauri wa hatari.",
        meets: "Kazi kwa sentensi moja kwa seti finyu ya maswali yenye hatari ndogo.",
        exceeds: "Maswali kumi inayoyajibu yanatoka kwenye ujumbe halisi ambao watu walituma."
      },
      {
        name: "Maelekezo na kanuni za usalama",
        objective: "O4",
        notYet: "Maelekezo hayana nafasi au sheria yoyote ya \"usifanye\".",
        meets: "Nafasi, wanaouliza, kazi, mtindo wa sauti na mipaka, pamoja na kanuni za usalama za namba binafsi, ushauri, kusema ni AI na dharura.",
        exceeds: "Inajumuisha ujumbe wa kufungua unaowaambia watu ni AI na inaweza kusaidia nini."
      },
      {
        name: "Faili la maarifa",
        objective: "O3",
        notYet: "Hakuna faili, au faili lina taarifa binafsi.",
        meets: "Faili la ukurasa mmoja lenye tarehe, maswali ya juu na majibu yake, bila taarifa binafsi.",
        exceeds: "Ukweli umepangwa chini ya vichwa wazi na umekaguliwa na mtu wa pili."
      },
      {
        name: "Kumbukumbu ya majaribio",
        objective: "O5",
        notYet: "Maswali chini ya kumi, au yaliyoshindwa hayakurekebishwa.",
        meets: "Angalau maswali kumi, yakiwemo ya nje ya mada na ya hatari, pamoja na marekebisho na majaribio ya marudio.",
        exceeds: "Mtu mwingine pia aliijaribu, na maswali yake yamo kwenye kumbukumbu."
      },
      {
        name: "Maoni na utunzaji",
        objective: "O6",
        notYet: "Haijashirikiwa, au hakuna maoni yaliyoandikwa.",
        meets: "Imeshirikiwa na mtu mmoja, maoni yameandikwa na njia ya kumfikia mtu imewekwa.",
        exceeds: "Kikumbusho cha kila mwezi cha kusasisha kimewekwa na marekebisho moja kutokana na maoni yamefanywa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupita kazi ya mwisho (rubriki)",
      "Mashirika yanayozindua chatbot ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Saa kwa wiki zilizookolewa kwenye maswali yanayojirudia, kama alivyoripoti mmiliki",
      "Chatbot ambazo bado zinasasishwa baada ya siku 90, bila ripoti za taarifa binafsi kutolewa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti (simu inafanya kazi kwa baadhi ya zana za kujenga)",
      "Zana ya kujenga chatbot bila programu kama custom GPT, Gemini Gem au agent ya Copilot Studio (kagua mipango ya sasa ya zana)",
      "Google Doc au hati ya Word kwa faili la maarifa na kumbukumbu ya majaribio",
      "Kama dakika 60 kwa masomo na majaribio ya maarifa, pamoja na muda wa kujaribu na kushiriki chatbot"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi; jengeni chatbot ya mfano kwenye skrini ya pamoja.",
      "Waombe wanafunzi walete maswali yao halisi kumi ya juu kutoka barua pepe, ujumbe mfupi au maoni.",
      "Kagua kila faili la maarifa kama lina taarifa binafsi kabla halijapakiwa.",
      "Waweke wanafunzi wawili wawili ili wajaribu chatbot za wenzao kwa maswali ya nje ya mada na ya hatari.",
      "Pima kazi ya mwisho kwa rubriki, na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
