"use strict";

// Koach Learn course (Swahili translation of leadership/edu-intro-ai-education.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-intro-ai-education-sw",
  lang: "sw",
  translationOf: "edu-intro-ai-education",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 1: Utangulizi wa AI katika Elimu",
  skills: "Kueleza AI kwa walimu na familia, Kutambua matumizi mazuri na mabaya shuleni, Kujua misingi ya faragha ya wanafunzi (FERPA, COPPA), Kusoma mwongozo wa serikali kuu kuhusu AI, Kuongoza mazungumzo na walimu",
  outcome: "kuwaeleza walimu wako AI ni nini na jinsi tayari inavyoonekana shuleni, kutaja matumizi mazuri na hatari zake, kueleza misingi ya faragha ya wanafunzi chini ya FERPA na COPPA, na kuongoza mazungumzo ya dakika 15 na walimu ukitumia karatasi moja ya \"AI katika shule yetu\".",
  about: [
    "Kozi hii ni kwa wakuu wa shule, manaibu wakuu, walimu viongozi, wakufunzi wa walimu na viongozi wa wilaya ya shule. Huhitaji ujuzi wa teknolojia. Walimu na wanafunzi wako tayari wanatumia AI; kozi hii inakusaidia kuongoza matumizi hayo badala ya kuyajibu tu baada ya kutokea.",
    "Sura ya 1 inaeleza AI ni nini, inaonekana wapi tayari katika shule yako, na wapi inasaidia au inadhuru kujifunza. Sura ya 2 inahusu mambo ambayo viongozi lazima wajue kwanza: faragha ya wanafunzi chini ya FERPA na COPPA, kile Wizara ya Elimu ya Marekani imesema kuhusu AI, na jinsi ya kuanzisha mazungumzo na walimu wako.",
    "Kozi hii inaeleza sheria kwa maneno rahisi ili ujue cha kuuliza; si ushauri wa kisheria. Mshauri wa kisheria na afisa wa faragha wa wilaya yako ndio wenye neno la mwisho. Kila sura inaishia na jaribio la maarifa, na kozi inaishia na mtihani wa maswali 20. Hii ni kozi ya 1 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  ],
  finalTask: "Andika karatasi moja ya \"AI katika shule yetu\" kwa walimu: AI ni nini kwa sentensi mbili, njia tatu inazoweza kuwasaidia walimu, hatari tatu kwa wanafunzi, kanuni ya faragha (\"hakuna majina ya wanafunzi, alama wala taarifa nyingine zinazomtambulisha mwanafunzi katika zana za AI ambazo wilaya haijaidhinisha\"), na nani wa kuuliza. Itumie kuongoza mazungumzo ya dakika 15 na walimu, na uandike maswali matatu makuu waliyouliza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakuu wa shule, manaibu wakuu, walimu viongozi, wakufunzi wa walimu na viongozi wa wilaya katika shule za Marekani. Hakuna ujuzi wa teknolojia unaohitajika.",
    startingPoint: "Wanajua kwamba walimu na wanafunzi wanatumia AI, na huenda wamejaribu chatbot. Bado hawawezi kueleza AI wazi kwa walimu, kuorodhesha inapotumika katika shule yao, au kueleza misingi ya faragha ya wanafunzi inayohusu zana za AI.",
    gap: "AI tayari iko madarasani, mara nyingi bila mwongozo. Viongozi wanahitaji kuieleza kwa maneno rahisi, kuona inapotumika, kupima matumizi yanayosaidia na yanayodhuru, na kujua misingi ya FERPA na COPPA, ili waongoze matumizi ya AI badala ya kuyajibu tu, na walinde faragha ya wanafunzi.",
    constraints: [
      "Maneno rahisi kwa viongozi wa shule wasio wataalamu wa teknolojia; kozi inaeleza sheria lakini si ushauri wa kisheria",
      "Mshauri wa kisheria na afisa wa faragha wa wilaya ndio wenye neno la mwisho kuhusu wajibu wa faragha",
      "Hakuna majina ya wanafunzi, alama wala taarifa nyingine zinazomtambulisha mwanafunzi katika zana za AI zisizoidhinishwa, hata wakati wa mazoezi",
      "Mwongozo wa serikali kuu na wa jimbo hubadilika, kwa hiyo viongozi hukagua toleo la sasa wenyewe",
      "Muda: masomo mafupi yanayoingia katika siku ya shule, pamoja na mazungumzo ya dakika 15 na walimu"
    ],
    prerequisites: "Hakuna. Hii ni kozi ya 1 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Mwalimu, mzazi au mwanafunzi akikuuliza AI ni nini", action: "kueleza AI na AI ya kuzalisha (generative AI) kwa maneno rahisi, pamoja na kwa nini inaweza kukosea", standard: "kwa sentensi mbili ambazo mwalimu mpya, mzazi na mwanafunzi wa darasa la tano wangeelewa" },
    { id: "O2", condition: "Ukiwa na mratibu wa teknolojia au walimu wawili", action: "kuorodhesha mahali ambapo AI tayari inaonekana katika shule yako", standard: "ukitaja angalau sehemu sita, kila moja ikiwa na alama ya imeidhinishwa au la, na kama inagusa taarifa za wanafunzi" },
    { id: "O3", condition: "Ukipewa matumizi ya AI yanayoonekana shuleni", action: "kupanga kila matumizi kama yanayosaidia, ya tahadhari au yanayodhuru", standard: "kwa sababu moja kwa kila moja, ukitumia jaribio la familia" },
    { id: "O4", condition: "Walimu wanapotumia zana za AI", action: "kueleza misingi ya FERPA na COPPA na kuandika upya ombi ili lisiwe na taarifa za mwanafunzi", standard: "ukitaja ni lini umuulize afisa wako wa faragha au mshauri wa kisheria" },
    { id: "O5", condition: "Ukipewa mwongozo wa serikali kuu na wa jimbo kuhusu AI shuleni", action: "kufupisha kanuni moja ya serikali kuu na kupata mwongozo wa sasa wa jimbo lako", standard: "ukiandika tarehe yake na jambo moja linalosema, au kwamba bado hakuna" },
    { id: "O6", condition: "Ukiwa na walimu wako", action: "kuongoza mazungumzo ya dakika 15 kuhusu AI ukitumia karatasi moja ya \"AI katika shule yetu\"", standard: "kila sehemu ya karatasi ikiwemo na maswali matatu makuu ya walimu yakiandikwa" }
  ],
  chapters: [
    {
      name: "Sura 1: AI katika shule za leo",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI ni nini, kwa maneno ambayo walimu wako watatumia",
          minutes: 5,
          goal: "Eleza AI na AI ya kuzalisha kwa walimu kwa maneno rahisi.",
          text: [
            "Akili bandia (AI) ni programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji busara ya mtu, kama kutambua sauti, kuona mifumo au kuandika. AI ya kuzalisha (generative AI) inaunda maudhui mapya: maandishi, picha, sauti na msimbo wa kompyuta. Zana za mazungumzo kama ChatGPT, Microsoft Copilot, Google Gemini na Claude zimejengwa juu ya mifumo mikubwa ya lugha (LLM) inayotabiri maneno yanayofaa kufuata.",
            "Kwa sababu zinatabiri maneno yanayofaa kufuata, zana hizi zinaandika kwa ufasaha lakini bado zinaweza kukosea, kuwa na taarifa za zamani au kuwa na upendeleo. Hazijui wanafunzi wako, mtaala wako wala jamii yako isipokuwa mtu aziambie, na hazipaswi kuambiwa taarifa binafsi za wanafunzi.",
            "Njia rahisi ya kuwaeleza walimu: \"AI ni msaidizi wa haraka wa rasimu ya kwanza. Haichukui nafasi ya busara ya mwalimu, na kamwe si neno la mwisho kuhusu mwanafunzi.\""
          ],
          words: [["AI ya kuzalisha (generative AI)", "AI inayounda maandishi, picha, sauti au msimbo mpya."], ["LLM", "large language model (mfumo mkubwa wa lugha): AI iliyo nyuma ya wasaidizi wa mazungumzo."], ["Hallucination", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."]],
          slides: [
            { title: "AI kwa sentensi mbili", bullets: ["Programu inayofanya kazi zinazohitaji busara", "AI ya kuzalisha inaunda maandishi, picha, msimbo"] },
            { title: "Ufasaha si sawa na usahihi", bullets: ["Inaweza kukosea, kuwa ya zamani au kuwa na upendeleo", "Haijui wanafunzi wako wala mtaala wako"] },
            { title: "Waambie walimu", bullets: ["Msaidizi wa haraka wa rasimu ya kwanza", "Haichukui nafasi ya busara ya mwalimu", "Kamwe si neno la mwisho kuhusu mwanafunzi"] }
          ],
          tryIt: "Andika maelezo ya AI kwa sentensi mbili ambayo mwalimu mpya, mzazi na mwanafunzi wa darasa la tano wote wangeelewa. Yajaribu kwa mwenzako mmoja.",
          youCanNow: "kueleza AI na AI ya kuzalisha kwa maneno rahisi kwa walimu na familia.",
          quickCheck: [
            { objective: "O1", q: "AI ya kuzalisha (generative AI) ni nini?", options: ["AI inayounda maandishi, picha au msimbo mpya", "Programu inayosahihisha mitihani yenyewe", "Injini ya kutafuta kumbukumbu za shule", "Programu isiyokosea kamwe"], answer: 0, why: "AI ya kuzalisha inaunda maudhui mapya, na ndiyo sababu inaweza pia kutoa makosa." },
            { objective: "O1", q: "Mzazi anauliza kwa nini chatbot ilimpa mtoto wake ukweli usio sahihi. Ungeeleza nini?", options: ["Lazima mtoto aliandika vibaya", "AI inatabiri maneno yanayofaa kufuata na inaweza kukosea, kwa hiyo majibu yake yanahitaji kukaguliwa", "Zana iliharibika siku hiyo", "Zana za AI za kulipia tu ndizo sahihi"], answer: 1, why: "AI inatabiri maandishi yanayofaa badala ya kukagua ukweli, kwa hiyo inaweza kusikika sahihi na bado ikakosea." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mahali ambapo AI tayari inaonekana katika shule yako",
          minutes: 5,
          goal: "Orodhesha mahali AI tayari inapotumika katika shule yako, rasmi na isivyo rasmi.",
          text: [
            "AI tayari iko ndani ya shule yako. Walimu wanaweza kutumia zana za mazungumzo kuandaa rasimu za masomo au barua pepe kwa wazazi. Wanafunzi wanaweza kuzitumia kwa kazi za nyumbani, wakati mwingine ipasavyo, wakati mwingine sivyo. Bidhaa nyingi ambazo wilaya yako tayari inalipia (majukwaa ya kujifunzia, zana za kuandika, programu za kusoma, programu za ofisi) zimeongeza vipengele vya AI, wakati mwingine vikiwa vimewashwa tayari.",
            "Pia kuna AI isiyoonekana wazi: programu za mazoezi zinazojirekebisha na kuchagua swali linalofuata, dashibodi za tahadhari ya mapema, vigunduzi vya wizi wa maandishi na vya maandishi ya AI, na zana za usalama au za ufuatiliaji.",
            "Viongozi hawawezi kuongoza kile wasichokiona. Orodha fupi (ramani), iliyotengenezwa pamoja na mratibu wa teknolojia na walimu wachache, inaonyesha zana zipi zimeidhinishwa, zipi zinatumika hata hivyo, na zipi zinagusa taarifa za wanafunzi. Ramani hiyo ndiyo mwanzo wa kila uamuzi wa baadaye."
          ],
          steps: ["Waulize walimu, wanafunzi na mratibu wa teknolojia wanatumia zana zipi za AI.", "Orodhesha vipengele vya AI ndani ya bidhaa ulizonazo tayari.", "Weka alama kwa kila moja: imeidhinishwa au la, na kama inagusa taarifa za wanafunzi.", "Andika mahali wanafunzi wanakutana na AI bila kujua."],
          words: [["Programu inayojirekebisha (adaptive program)", "programu inayobadilisha swali au shughuli inayofuata kulingana na majibu ya mwanafunzi."], ["Kigunduzi cha maandishi ya AI", "zana inayodai kujua kama maandishi yaliandikwa na AI; mara nyingi haiaminiki."]],
          slides: [
            { title: "AI tayari iko hapa", bullets: ["Walimu wanaandaa rasimu za masomo na barua pepe", "Wanafunzi wanatumia zana za mazungumzo", "Vipengele vya AI vimeongezwa kwenye zana mlizonazo"] },
            { title: "Isiyoonekana wazi", bullets: ["Programu za mazoezi zinazojirekebisha", "Dashibodi za tahadhari ya mapema", "Vigunduzi na zana za ufuatiliaji"] },
            { title: "Tengeneza ramani", bullets: ["Imeidhinishwa au la?", "Inagusa taarifa za wanafunzi?", "Wanafunzi wanakutana na AI wapi bila kujua"] }
          ],
          tryIt: "Ukiwa na mratibu wa teknolojia au walimu wawili, orodhesha angalau sehemu sita ambapo AI inaonekana katika shule yako. Weka alama kwa kila moja: imeidhinishwa au la, na kama inagusa taarifa za wanafunzi.",
          youCanNow: "kuorodhesha mahali AI tayari inapotumika katika shule yako na matumizi yapi yanagusa taarifa za wanafunzi.",
          quickCheck: [
            { objective: "O2", q: "Programu ya kujifunza inayojirekebisha (adaptive) ni nini?", options: ["Programu ambayo walimu wanaibadilisha kwa mkono kila siku", "Programu inayofanya kazi bila intaneti", "Programu inayobadilisha shughuli inayofuata kulingana na majibu ya mwanafunzi", "Programu ambayo watu wazima tu wanaweza kutumia"], answer: 2, why: "Programu zinazojirekebisha zinatumia majibu ya mwanafunzi kuchagua kinachofuata." },
            { objective: "O2", q: "Unagundua kwamba zana ambayo shule yako tayari inamiliki ina kipengele kipya cha AI kilichowashwa. Ungefanya nini?", options: ["Kukipuuza, kwa sababu zana ilikuwa tayari imeidhinishwa", "Kupiga marufuku zana nzima mara moja", "Kuwaambia walimu waache kutumia kompyuta", "Kukiongeza kwenye ramani yako ya AI na kukagua kama kinagusa taarifa za wanafunzi"], answer: 3, why: "Vipengele vya AI vinaweza kuonekana katika zana mlizonazo tayari, kwa hiyo vinastahili kuwa kwenye ramani." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mahali AI inasaidia kujifunza, na mahali inadhuru",
          minutes: 5,
          goal: "Panga matumizi ya AI shuleni kama yanayosaidia, ya tahadhari na yanayodhuru.",
          text: [
            "Matumizi yanayosaidia kwa kawaida yanaokoa muda wa mwalimu au yanapanua fursa: kuandaa rasimu za vifaa vya masomo, kutengeneza maswali ya mazoezi kwa viwango kadhaa vya usomaji, kutafsiri barua za familia ili mtu mwenye sifa azikague, na kuwapa wanafunzi mfafanuzi mvumilivu kama mwalimu wa ziada chini ya uongozi wa mwalimu.",
            "Matumizi ya tahadhari yanahitaji kanuni wazi: wanafunzi kutumia AI katika kazi za darasani (inaweza kuchukua nafasi ya kufikiri ambako kazi ilikusudiwa kujenga), maoni ya AI kuhusu kazi za wanafunzi (yanaweza kuwa ya jumla au yasiyo sahihi), na vigunduzi vya maandishi ya AI (vinaweza kuwashtaki wanafunzi kimakosa, wakiwemo wanaojifunza Kiingereza).",
            "Matumizi yanayodhuru: kuweka taarifa binafsi za wanafunzi katika zana zisizoidhinishwa, kuiacha AI ifanye maamuzi kuhusu alama, upangaji wa darasa, nidhamu au elimu maalum, na kutumia AI kwa njia ambazo familia hazikuambiwa. Jaribio kwa walimu: \"Je, ningejisikia huru kueleza matumizi haya kwa familia ya mwanafunzi?\""
          ],
          words: [["Fursa (access)", "kama kila mwanafunzi anaweza kushiriki na kunufaika, wakiwemo wanafunzi wenye ulemavu na wanaojifunza Kiingereza."], ["Shtaka la uongo", "kusema kimakosa kwamba mwanafunzi alidanganya, kwa mfano kwa sababu kigunduzi kiliitilia shaka kazi yake."]],
          slides: [
            { title: "Yanayosaidia", bullets: ["Kuandaa rasimu za vifaa na mazoezi", "Viwango kadhaa vya usomaji", "Rasimu za tafsiri ambazo mtu anazikagua"] },
            { title: "Ya tahadhari", bullets: ["Wanafunzi kutumia AI katika kazi za darasani", "Maoni ya AI kuhusu kazi za wanafunzi", "Vigunduzi vya maandishi ya AI vinaweza kushtaki kimakosa"] },
            { title: "Yanayodhuru", bullets: ["Taarifa za wanafunzi katika zana zisizoidhinishwa", "AI kuamua alama, upangaji wa darasa, nidhamu", "Matumizi ambayo familia hazikuambiwa"] },
            { title: "Jaribio la familia", bullets: ["Je, ningeeleza matumizi haya kwa familia?"] }
          ],
          tryIt: "Orodhesha matumizi manane ya AI uliyoyaona au kuyasikia shuleni. Weka alama kwa kila moja: YANAYOSAIDIA, YA TAHADHARI au YANAYODHURU, na uandike sababu moja.",
          youCanNow: "kupima matumizi yapi ya AI shuleni yanasaidia kujifunza na yapi yanawaweka wanafunzi hatarini.",
          quickCheck: [
            { objective: "O3", q: "Jaribio la familia linauliza nini?", options: ["Je, ningeeleza matumizi haya ya AI kwa familia ya mwanafunzi?", "Je, familia ina kompyuta?", "Je, familia ililipia zana hiyo?", "Je, familia ingetumia AI nyumbani?"], answer: 0, why: "Kama usingeyaeleza kwa familia, matumizi hayo yanahitaji kuangaliwa upya." },
            { objective: "O3", q: "Mwalimu anataka kutumia kigunduzi cha AI kuamua kama insha zilinakiliwa kwa udanganyifu. Ungeweka alama gani?", options: ["YANAYOSAIDIA: yanaokoa muda", "YANAYODHURU: AI isitumike kamwe", "YA TAHADHARI: vigunduzi vinaweza kuwashtaki wanafunzi kimakosa, kwa hiyo kamwe si ushahidi pekee", "Hayafai kujadiliwa"], answer: 2, why: "Vigunduzi vinaweza kuwashtaki wanafunzi kimakosa, wakiwemo wanaojifunza Kiingereza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI katika shule za leo",
        questions: [
          { objective: "O1", q: "Ni maelezo yapi rahisi bora ya AI ya kuzalisha kwa walimu?", options: ["Kamera ya usalama ya shule", "Mfumo mpya wa kutoa alama", "AI inayounda maandishi, picha au msimbo mpya", "App ya mahudhurio"], answer: 2, why: "AI ya kuzalisha inaunda maudhui mapya." },
          { objective: "O1", q: "Mwalimu anasema, \"AI imeiandika, kwa hiyo lazima iwe sahihi.\" Jibu bora ni lipi?", options: ["AI inatabiri maneno yanayofaa kufuata na inaweza kukosea; ikague", "Kukubali", "Ni sahihi tu ikiwa ndefu", "Ni sahihi tu ikitumia maneno makubwa"], answer: 0, why: "Maandishi fasaha bado yanaweza kuwa si sahihi." },
          { objective: "O2", q: "Kwa nini kwanza utengeneze ramani ya matumizi ya AI katika shule yako?", options: ["Ili kupiga marufuku kila kitu", "Wauzaji wanaitaka", "Inafurahisha", "Viongozi hawawezi kuongoza kile wasichokiona"], answer: 3, why: "Ramani inaonyesha matumizi yaliyoidhinishwa, yaliyofichika na hatari kwa taarifa za wanafunzi." },
          { objective: "O3", q: "Kwa nini vigunduzi vya maandishi ya AI ni matumizi YA TAHADHARI?", options: ["Ni sahihi kila wakati", "Vinaweza kuwashtaki wanafunzi kimakosa, wakiwemo wanaojifunza Kiingereza", "Ni vya bure", "Vinaandika insha"], answer: 1, why: "Matokeo ya uongo yanaweza kuwadhuru wanafunzi." },
          { objective: "O3", q: "Matumizi yapi YANADHURU?", options: ["Kuandaa rasimu za maswali ya mazoezi", "Kutengeneza kifungu cha kusoma kwa viwango vitatu", "Kuandaa rasimu ya jarida la shule", "Kuiacha AI iamue upangaji wa elimu maalum wa mwanafunzi"], answer: 3, why: "Maamuzi kuhusu wanafunzi yanabaki kwa watu wenye sifa." }
        ]
      }
    },
    {
      name: "Sura 2: Mambo ambayo viongozi lazima wajue kwanza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Misingi ya faragha ya wanafunzi: FERPA na COPPA",
          minutes: 6,
          goal: "Eleza misingi ya FERPA na COPPA inayohusika walimu wanapotumia zana za AI.",
          text: [
            "FERPA, yaani Family Educational Rights and Privacy Act (sheria ya Marekani ya haki za kielimu na faragha za familia), inalinda faragha ya kumbukumbu za elimu za wanafunzi: kumbukumbu zinazomhusu mwanafunzi moja kwa moja na zinazotunzwa na shule. Wazazi wana haki ya kukagua na kupitia kumbukumbu hizo na kuomba marekebisho; haki hizo zinahamia kwa mwanafunzi akifikisha miaka 18 au anapoingia chuo. Kwa kawaida shule zinahitaji ridhaa ili kutoa taarifa zinazomtambulisha mwanafunzi, isipokuwa katika hali kama taarifa za orodha (baada ya taarifa na nafasi ya kukataa) na maafisa wa shule wenye maslahi halali ya kielimu. Muuzaji wa nje anaweza kuhesabiwa kama afisa wa shule tu ikiwa anafanya huduma ya shule, yuko chini ya udhibiti wa moja kwa moja wa shule, na anafuata mipaka ya kushiriki taarifa tena.",
            "COPPA, yaani Children's Online Privacy Protection Act (sheria ya Marekani ya kulinda faragha ya watoto mtandaoni), inayosimamiwa na Federal Trade Commission (FTC, tume ya biashara ya serikali kuu), inalinda watoto walio chini ya miaka 13 mtandaoni. FTC inasema shule inaweza kutoa ridhaa badala ya wazazi tu pale huduma inapokusanya taarifa kwa matumizi na manufaa ya shule na si kwa lengo jingine lolote la kibiashara. FTC ilirekebisha Kanuni yake ya COPPA tarehe 22 Aprili 2025.",
            "Maana yake kwa vitendo: mwalimu anayebandika majina ya wanafunzi, alama, maelezo ya IEP (mpango wa elimu wa mwanafunzi binafsi) au taarifa nyingine zinazowatambulisha katika zana ya AI ya bure ambayo wilaya haijaidhinisha anaweza kuwa anatoa kumbukumbu za elimu kwa kampuni isiyo na makubaliano. Kanuni ya kiongozi: zana zilizoidhinishwa na wilaya tu kwa jambo lolote kuhusu wanafunzi, na ondoa maelezo yanayowatambulisha hata hivyo. Kwa wajibu wako kamili, muulize afisa wa faragha au mshauri wa kisheria wa wilaya yako; sheria za majimbo kuhusu faragha ya wanafunzi zinaweza kuongeza zaidi."
          ],
          words: [["FERPA", "sheria ya serikali kuu ya Marekani inayolinda faragha ya kumbukumbu za elimu za wanafunzi."], ["COPPA", "sheria ya serikali kuu ya Marekani inayolinda faragha ya watoto walio chini ya miaka 13 mtandaoni."], ["Taarifa zinazomtambulisha mtu (PII)", "taarifa zinazomtambulisha mwanafunzi, kama jina, namba ya kitambulisho au mchanganyiko wa maelezo."], ["Taarifa za orodha (directory information)", "maelezo ya msingi kama jina na tarehe za kuhudhuria ambayo shule inaweza kushiriki baada ya taarifa na nafasi ya kukataa."]],
          slides: [
            { title: "FERPA kwa ufupi", bullets: ["Inalinda kumbukumbu za elimu za wanafunzi", "Wazazi wanaweza kukagua na kuomba marekebisho", "Haki zinahamia kwa mwanafunzi akifikisha 18 au akiingia chuo"] },
            { title: "FERPA na wauzaji", bullets: ["Kwa kawaida ridhaa inahitajika kushiriki PII", "Muuzaji kama afisa wa shule: huduma ya shule, udhibiti wa moja kwa moja", "Na mipaka ya kushiriki taarifa tena"] },
            { title: "COPPA kwa ufupi", bullets: ["Watoto chini ya miaka 13 mtandaoni; inasimamiwa na FTC", "Ridhaa ya shule kwa matumizi ya shule tu, bila matumizi mengine ya kibiashara", "Kanuni ilirekebishwa 22 Aprili 2025"] },
            { title: "Kanuni ya kiongozi", bullets: ["Zana zilizoidhinishwa na wilaya tu kwa mambo ya wanafunzi", "Ondoa maelezo yanayowatambulisha hata hivyo", "Muulize afisa wa faragha; sheria za majimbo zinaweza kuongeza zaidi"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (US Department of Education)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FTC: Children's Privacy", url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" }],
          tryIt: "Andika mifano mitatu ya vitu ambavyo mwalimu HAPASWI kubandika katika zana ya AI isiyoidhinishwa, kisha andika upya mmoja wao ili uombe msaada ule ule bila taarifa yoyote ya mwanafunzi.",
          youCanNow: "kueleza misingi ya FERPA na COPPA inayohusu matumizi ya AI kwa walimu na kanuni inayotokana nayo.",
          quickCheck: [
            { objective: "O4", q: "COPPA inalinda nini?", options: ["Akaunti za barua pepe za walimu", "Faragha ya watoto walio chini ya miaka 13 mtandaoni", "Majengo ya shule", "Kumbukumbu za michezo za wanafunzi tu"], answer: 1, why: "COPPA inalinda faragha ya watoto walio chini ya miaka 13 mtandaoni." },
            { objective: "O4", q: "Mwalimu anataka msaada wa AI kuandika maoni kwa mwanafunzi aliyetajwa kwa jina mwenye alama ya chini. Ungeshauri nini?", options: ["Kubandika jina na alama katika zana yoyote ya bure", "Kutumia herufi za kwanza za jina la mwanafunzi, jambo ambalo ni salama kila wakati", "Kutompa mwanafunzi huyo maoni", "Kuomba msaada wa maoni bila jina wala alama ya mwanafunzi, au kutumia zana iliyoidhinishwa na wilaya"], answer: 3, why: "Kuondoa taarifa za mwanafunzi, au kutumia zana iliyoidhinishwa, kunalinda kumbukumbu ya elimu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mwongozo wa serikali kuu unasema nini kuhusu AI shuleni",
          minutes: 5,
          goal: "Fupisha mwongozo wa serikali kuu kuhusu AI na upate toleo la sasa wewe mwenyewe.",
          text: [
            "Tarehe 22 Julai 2025, Wizara ya Elimu ya Marekani ilituma barua ya mwongozo (Dear Colleague Letter) kuhusu AI. Kama ilivyoripotiwa na K-12 Dive, inasema fedha za ruzuku za serikali kuu zilizopo zinaweza kusaidia AI inayotumika kwa zana bora za mtaala, ufundishaji wa ziada wenye matokeo makubwa, na ushauri wa njia za chuo na kazi, na inaweka kanuni: mipango ya AI iongozwe na walimu, iwe ya maadili, ifikike kwa wanafunzi wenye ulemavu, iwe wazi kuhusu jinsi zana mpya zinavyoanzishwa, na ifuate sheria za serikali kuu za faragha ya taarifa.",
            "Mwongozo hubadilika. Soma barua yenyewe na mwongozo wowote mpya zaidi kwenye ed.gov, na ukague kile ambacho idara ya elimu ya jimbo lako imechapisha; majimbo mengi yana mwongozo wao wenyewe wa AI kwa shule. Tovuti ya Ofisi ya Sera ya Faragha ya Wanafunzi ya Wizara (studentprivacy.ed.gov) ina rasilimali kuhusu huduma za elimu mtandaoni, ikiwemo orodha ya kukagua ya Model Terms of Service (masharti ya mfano ya huduma).",
            "Kwa viongozi, kanuni hizi ni jaribio zuri kwa mpango wowote wa AI: Je, unaongozwa na walimu? Je, unafikika kwa wote? Je, tumewaambia familia jinsi unavyofanya kazi? Je, unalinda taarifa za wanafunzi?"
          ],
          steps: ["Soma barua ya Wizara ya Elimu kuhusu AI kwenye ed.gov.", "Kagua idara ya elimu ya jimbo lako kwa mwongozo wa AI.", "Angalia rasilimali za studentprivacy.ed.gov kuhusu huduma za elimu mtandaoni.", "Pima mipango yako kwa kanuni hizi: inaongozwa na walimu, ya maadili, inafikika, iko wazi, inafuata sheria za faragha."],
          words: [["Dear Colleague Letter", "barua ya mwongozo kutoka idara ya serikali kuu kwenda kwa shule na majimbo; ni mwongozo, si sheria mpya."], ["Idara ya elimu ya jimbo", "wizara au idara ya elimu ya jimbo lako."]],
          slides: [
            { title: "Barua ya serikali kuu kuhusu AI, 22 Julai 2025", bullets: ["Fedha za ruzuku zinaweza kusaidia AI kwa zana za mtaala", "Ufundishaji wa ziada wenye matokeo makubwa", "Ushauri wa njia za chuo na kazi"] },
            { title: "Kanuni zake", bullets: ["Inaongozwa na walimu na ni ya maadili", "Inafikika kwa wanafunzi wenye ulemavu", "Iko wazi; inafuata sheria za faragha"] },
            { title: "Pata toleo la sasa", bullets: ["ed.gov kwa barua na mwongozo mpya zaidi", "Idara ya elimu ya jimbo lako", "studentprivacy.ed.gov kwa rasilimali kuhusu wauzaji"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology (Student Privacy Policy Office)", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Tafuta ukurasa wa idara ya elimu ya jimbo lako kuhusu AI (tafuta \"artificial intelligence\" kwenye tovuti yake). Andika tarehe ya mwongozo wake wa karibuni na jambo moja unalosema, au andika kwamba bado hakuna.",
          youCanNow: "kufupisha mwongozo wa serikali kuu kuhusu AI shuleni na kupata matoleo ya sasa ya serikali kuu na ya jimbo.",
          quickCheck: [
            { objective: "O5", q: "Unatafuta wapi mwongozo wa jimbo lako kuhusu AI shuleni?", options: ["Tovuti ya idara ya elimu ya jimbo lako", "Chapisho la mitandao ya kijamii", "Jibu la zana ya AI yenyewe", "Ukurasa wa mauzo wa muuzaji"], answer: 0, why: "Idara ya elimu ya jimbo ndiyo chanzo rasmi cha mwongozo wa jimbo." },
            { objective: "O5", q: "Mwenzako anataja mwongozo wa serikali kuu kuhusu AI kwa kumbukumbu yake. Ungefanya nini kabla ya kuwashirikisha walimu?", options: ["Kuushiriki, kwa sababu unasikika sahihi", "Kutafuta hati rasmi ya sasa na kukagua tarehe na maneno yake", "Kuiomba chatbot ya AI iuthibitishe", "Kusubiri mwenzako mwingine akubali"], answer: 1, why: "Mwongozo hubadilika, kwa hiyo viongozi hukagua toleo rasmi la sasa wenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuanzisha mazungumzo kuhusu AI na walimu wako",
          minutes: 6,
          goal: "Ongoza mazungumzo ya dakika 15 na walimu kuhusu AI ukitumia karatasi moja.",
          text: [
            "Walimu wanahisi mambo mengi kuhusu AI: hamasa, wasiwasi kuhusu udanganyifu, hofu ya kuchukuliwa nafasi zao, au wana shughuli nyingi mno kujali. Anza kwa kusikiliza, si kwa sera. Uliza: \"Umeona AI wapi mwaka huu, darasani kwako au katika maisha yako mwenyewe?\"",
            "Kisha shiriki karatasi moja: AI ni nini kwa sentensi mbili, njia tatu inazoweza kuwasaidia walimu, hatari tatu kwa wanafunzi, kanuni ya faragha, na nani wa kuuliza. Iwe ukurasa mmoja tu; unaweza kuongeza maelezo baadaye.",
            "Malizia kwa kutaja hatua moja inayofuata (kwa mfano, utafiti mfupi wa zana ambazo walimu wanatumia, au kikundi cha walimu wa kujitolea kujaribu zana iliyoidhinishwa) na ukusanye maswali makuu. Maswali hayo yanakuambia cha kufundisha baadaye."
          ],
          steps: ["Anza kwa swali la kusikiliza.", "Shiriki karatasi moja.", "Jadilini mfano mmoja unaosaidia na mmoja wenye hatari.", "Taja hatua moja inayofuata.", "Kusanya maswali matatu makuu."],
          words: [["Karatasi ya maelezo (handout)", "ukurasa mfupi uliochapishwa au kushirikiwa ambao watu wanaubaki nao."], ["Hatua inayofuata", "kitendo kimoja wazi ambacho kikundi kinakubali kufanya."]],
          slides: [
            { title: "Anza kwa kusikiliza", bullets: ["\"Umeona AI wapi mwaka huu?\"", "Hamasa, wasiwasi na uchovu vyote ni vya kawaida"] },
            { title: "Karatasi moja", bullets: ["AI kwa sentensi mbili", "Misaada mitatu, hatari tatu", "Kanuni ya faragha na nani wa kuuliza"] },
            { title: "Malizia vizuri", bullets: ["Hatua moja inayofuata", "Kusanya maswali matatu makuu"] }
          ],
          tryIt: "Kazi ya mwisho: andika karatasi yako moja ya \"AI katika shule yetu\" (maelezo ya sentensi mbili, misaada mitatu, hatari tatu, kanuni ya faragha, nani wa kuuliza). Iitumie kuongoza mazungumzo ya dakika 15 na walimu, na uandike maswali matatu makuu waliyouliza.",
          youCanNow: "kuanzisha na kuongoza mazungumzo ya shule yako kuhusu AI kwa mwanzo ulio wazi na wa pamoja.",
          quickCheck: [
            { objective: "O6", q: "Ni njia ipi nzuri ya kuanzisha mazungumzo na walimu kuhusu AI?", options: ["Kutangaza orodha ya marufuku", "Kuonyesha slaidi nyingi kuhusu jinsi AI inavyofanya kazi", "Kuuliza swali la kusikiliza kuhusu walimu wameona AI wapi", "Kuanza na jaribio"], answer: 2, why: "Kuanza kwa kusikiliza kunawaonyesha walimu kwamba uzoefu wao una maana." },
            { objective: "O6", q: "Mwishoni mwa mazungumzo yako ya dakika 15, walimu bado wana maswali mengi. Unafanya nini?", options: ["Kujibu kila swali, hata ikichukua saa moja", "Kuwaambia watafute mtandaoni", "Kumaliza bila hatua inayofuata", "Kuandika maswali matatu makuu na kutoa hatua moja inayofuata"], answer: 3, why: "Hatua wazi inayofuata na maswali yaliyokusanywa yanaongoza unachofanya baadaye." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mambo ambayo viongozi lazima wajue kwanza",
        questions: [
          { objective: "O4", q: "FERPA inalinda nini?", options: ["Mishahara ya walimu", "Usalama wa majengo ya shule", "Faragha ya kumbukumbu za elimu za wanafunzi", "Orodha za vyakula vya shule"], answer: 2, why: "FERPA inalinda kumbukumbu za elimu za wanafunzi." },
          { objective: "O4", q: "COPPA inalinda faragha ya mtandaoni ya watoto:", options: ["Walio chini ya miaka 13", "Walio chini ya miaka 18", "Walio chini ya miaka 21", "Wa umri wowote"], answer: 0, why: "FTC inasema kanuni hiyo inalinda watoto walio chini ya miaka 13." },
          { objective: "O4", q: "Kulingana na FTC, ni lini shule inaweza kutoa ridhaa badala ya wazazi chini ya COPPA?", options: ["Wakati wowote mwalimu anapotaka", "Huduma inapokusanya taarifa kwa matumizi na manufaa ya shule tu, bila lengo jingine la kibiashara", "Kamwe", "App ikiwa ya bure"], answer: 1, why: "Ridhaa ya shule inahusu matumizi ya kielimu tu, bila lengo jingine la kibiashara." },
          { objective: "O5", q: "Ipi ni kanuni moja katika barua ya Wizara ya Elimu ya Julai 2025 kuhusu AI?", options: ["Mipango ya AI iongozwe na walimu", "AI ichukue nafasi ya walimu", "AI lazima ipigwe marufuku", "Shule binafsi tu ndizo zinaweza kutumia AI"], answer: 0, why: "Barua inataka mipango inayoongozwa na walimu." },
          { objective: "O6", q: "Unapaswa kuanzisha vipi mazungumzo na walimu kuhusu AI?", options: ["Kwa sera ya kurasa 30", "Kwa maneno ya mauzo ya muuzaji", "Kwa marufuku", "Kwa swali la kusikiliza kuhusu walimu wameona AI wapi"], answer: 3, why: "Kusikiliza kwanza kunajenga uaminifu na kunaonyesha walimu wanahitaji nini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 1: Utangulizi wa AI katika Elimu",
    questions: [
      { objective: "O1", q: "Zana za mazungumzo kama ChatGPT zimejengwa juu ya:", options: ["Majedwali (spreadsheets)", "Mifumo mikubwa ya lugha (LLM)", "Printa", "Mifumo ya mahudhurio"], answer: 1, why: "LLM ndizo zinazoendesha zana za mazungumzo." },
      { objective: "O1", q: "Hallucination ya AI ni:", options: ["Jibu la haraka", "Skrini iliyoharibika", "Maudhui yaliyobuniwa yanayosikika kuwa kweli", "Zoezi la dharura la shule"], answer: 2, why: "AI inaweza kubuni ukweli na vyanzo." },
      { objective: "O6", q: "Ujumbe bora wa mstari mmoja kwa walimu ni:", options: ["AI inatoa alama kwa kila kitu", "AI inachukua nafasi ya kupanga masomo", "AI ni msaidizi wa rasimu ya kwanza, kamwe si neno la mwisho kuhusu mwanafunzi", "AI iko sahihi kila wakati"], answer: 2, why: "Unaweka busara ya mwalimu katikati." },
      { objective: "O2", q: "Vipengele vya AI vinaweza kuonekana katika zana mlizonazo tayari:", options: ["Wakati mwingine vikiwa vimewashwa tayari", "Kamwe", "Ukilipa zaidi tu", "Kwenye simu tu"], answer: 0, why: "Wauzaji wanaongeza vipengele vya AI kwenye bidhaa zilizopo." },
      { objective: "O2", q: "Programu inayojirekebisha (adaptive):", options: ["Inachapisha ripoti za maendeleo", "Inachukua mahudhurio", "Inafunga milango", "Inabadilisha shughuli inayofuata kulingana na majibu ya mwanafunzi"], answer: 3, why: "Inajirekebisha kulingana na majibu." },
      { objective: "O2", q: "Ramani yako ya AI inapaswa kuonyesha kama kila zana:", options: ["Ina nembo nzuri", "Imeidhinishwa na inagusa taarifa za wanafunzi", "Inapendwa na wengi", "Ni mpya"], answer: 1, why: "Uidhinishaji na taarifa ndivyo viongozi lazima wajue." },
      { objective: "O3", q: "Matumizi yapi YANASAIDIA?", options: ["Ufuatiliaji wa siri", "Kuamua nidhamu", "Kubandika IEP katika zana ya bure", "Kutengeneza maswali ya mazoezi kwa viwango kadhaa vya usomaji"], answer: 3, why: "Yanaokoa muda na kupanua fursa." },
      { objective: "O3", q: "Kwa nini wanafunzi kutumia AI katika kazi za darasani kunaweza kuwa tatizo?", options: ["Ni kinyume cha sheria", "Ni udanganyifu kila wakati", "Kunaweza kuchukua nafasi ya kufikiri ambako kazi inajenga", "Ni polepole mno"], answer: 2, why: "Kanuni zinaamua ni lini AI inasaidia au inachukua nafasi ya kujifunza." },
      { objective: "O3", q: "Jaribio la familia linauliza:", options: ["Je, ningeeleza matumizi haya ya AI kwa familia ya mwanafunzi?", "Je, familia ina kompyuta?", "Je, familia iko mtandaoni?", "Je, familia ililipa?"], answer: 0, why: "Kujisikia huru kueleza matumizi ni kipimo kizuri." },
      { objective: "O4", q: "Haki za FERPA zinahamia kutoka kwa wazazi kwenda kwa mwanafunzi akiwa na:", options: ["Miaka 10", "Miaka 18 au akiingia chuo", "Miaka 13", "Kamwe"], answer: 1, why: "Mwanafunzi anakuwa mwanafunzi mwenye haki hizo (eligible student)." },
      { objective: "O4", q: "Chini ya FERPA, wazazi wanaweza:", options: ["Kukagua na kupitia kumbukumbu za elimu za mtoto wao", "Kusoma shajara binafsi za walimu", "Kubadilisha alama wenyewe", "Hakuna kitu"], answer: 0, why: "Kukagua na kupitia ni haki za msingi za FERPA." },
      { objective: "O4", q: "Muuzaji anaweza kuwa \"afisa wa shule\" chini ya FERPA tu ikiwa:", options: ["Ana app", "Ni wa bure", "Anapendwa na wengi", "Anafanya huduma ya shule chini ya udhibiti wa moja kwa moja wa shule, na mipaka ya kushiriki taarifa tena"], answer: 3, why: "Masharti hayo yanatoka katika mwongozo wa FERPA." },
      { objective: "O4", q: "Taarifa za orodha (directory information) zinaweza kushirikiwa:", options: ["Kamwe", "Baada ya taarifa na nafasi ya kukataa", "Na wauzaji tu", "Na wanafunzi tu"], answer: 1, why: "Shule lazima zitoe taarifa na ziruhusu kukataa." },
      { objective: "O4", q: "Ni idara gani inasimamia COPPA?", options: ["Huduma ya Posta", "Wizara ya Kilimo", "Federal Trade Commission (FTC)", "Bodi ya shule"], answer: 2, why: "FTC inasimamia COPPA." },
      { objective: "O4", q: "Mwalimu anabandika majina na alama za wanafunzi katika zana ya AI ya bure isiyoidhinishwa. Hili:", options: ["Ni lazima", "Ni sawa kila wakati", "Linaweza kutoa kumbukumbu za elimu kwa kampuni isiyo na makubaliano", "Linaboresha faragha"], answer: 2, why: "Hiyo ndiyo hatari ya FERPA kwa zana zisizoidhinishwa." },
      { objective: "O4", q: "Kwa wajibu kamili wa faragha wa wilaya yako, muulize:", options: ["Afisa wako wa faragha au mshauri wa kisheria", "Chatbot", "Mwanafunzi", "Muuzaji wa kampuni"], answer: 0, why: "Watu wenye sifa ndio wenye neno la mwisho." },
      { objective: "O5", q: "Barua ya Wizara ya Elimu kuhusu AI ina tarehe:", options: ["3 Machi 2019", "1 Januari 2000", "27 Oktoba 2026", "22 Julai 2025"], answer: 3, why: "Ilitumwa tarehe 22 Julai 2025." },
      { objective: "O5", q: "Unaweza kupata wapi orodha ya kukagua ya Model Terms of Service?", options: ["App ya mitandao ya kijamii", "studentprivacy.ed.gov", "Tangazo la muuzaji", "Sehemu ya maoni ya habari"], answer: 1, why: "Imeorodheshwa kwenye tovuti ya Ofisi ya Sera ya Faragha ya Wanafunzi." },
      { objective: "O5", q: "Mbali na mwongozo wa serikali kuu, unapaswa kukagua:", options: ["Blogu za wauzaji tu", "Kanuni za nchi nyingine", "Hakuna kingine", "Mwongozo wa AI wa idara ya elimu ya jimbo lako"], answer: 3, why: "Majimbo mengi yanachapisha mwongozo wao wenyewe wa AI." },
      { objective: "O6", q: "Mazungumzo mazuri na walimu kuhusu AI yanaishia na:", options: ["Maneno ya mauzo", "Marufuku", "Hatua moja inayofuata na maswali makuu yakikusanywa", "Bila hitimisho"], answer: 2, why: "Hatua zinazofuata na maswali yanaongoza cha kufanya baadaye." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      3,
      6,
      9,
      13,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maelezo rahisi",
        objective: "O1",
        notYet: "Maelezo yanatumia maneno ya kitaalamu au ni marefu kuliko sentensi mbili.",
        meets: "Anaeleza AI kwa sentensi mbili rahisi.",
        exceeds: "Mwenzake ambaye ni mgeni kwa AI aliyaelewa mara ya kwanza alipoyasoma."
      },
      {
        name: "Misaada na hatari",
        objective: "O3",
        notYet: "Misaada au hatari ni chini ya tatu, au haziendani na shule.",
        meets: "Njia tatu ambazo AI inaweza kuwasaidia walimu na hatari tatu kwa wanafunzi.",
        exceeds: "Kila hatari inasema walimu wanapaswa kufanya nini kuihusu."
      },
      {
        name: "Kanuni ya faragha",
        objective: "O4",
        notYet: "Kanuni ya faragha haipo au haiko wazi.",
        meets: "Inasema kwamba hakuna majina ya wanafunzi, alama wala taarifa nyingine zinazomtambulisha mwanafunzi zinazowekwa katika zana za AI ambazo wilaya haijaidhinisha.",
        exceeds: "Inatoa mfano mfupi wa kuomba msaada bila taarifa za wanafunzi."
      },
      {
        name: "Nani wa kuuliza",
        objective: "O6",
        notYet: "Haisemi nani wa kuuliza.",
        meets: "Inataja nani wa kuuliza maswali.",
        exceeds: "Pia inamtaja afisa wa faragha kwa maswali ya faragha."
      },
      {
        name: "Mazungumzo na walimu",
        objective: "O6",
        notYet: "Hakuna mazungumzo yaliyofanyika, au maswali hayakuandikwa.",
        meets: "Aliongoza mazungumzo ya dakika 15 na akaandika maswali matatu makuu.",
        exceeds: "Alimalizia na hatua moja wazi inayofuata kwa walimu."
      }
    ]
  },
  evaluation: {
    results: [
      "Viongozi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Shule ambazo walimu wamepokea karatasi ya \"AI katika shule yetu\" ndani ya siku 30 (utafiti wa kufuatilia)",
      "Shule zenye ramani ya zana za AI zinazotumika, zenye alama ya imeidhinishwa au la (utafiti wa kufuatilia)",
      "Viongozi wanaoendelea na kozi ya 2 ya AI kwa Viongozi wa Shule na Elimu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Orodha ya wilaya yako ya zana zilizoidhinishwa, ikiwa ipo",
      "Karatasi au hati kwa ramani ya AI na karatasi moja ya maelezo",
      "Kama dakika 60 kwa jumla, pamoja na mazungumzo ya dakika 15 na walimu"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha tengenezeni ramani ya AI katika timu za shule pamoja na mratibu wa teknolojia.",
      "Wakumbushe viongozi kwamba kozi inaeleza sheria kwa maneno rahisi na si ushauri wa kisheria; mwalike afisa wa faragha wa wilaya ikiwezekana.",
      "Usitumie kamwe taarifa halisi za wanafunzi katika mifano ya mazoezi.",
      "Waruhusu viongozi wafanye mazoezi ya kuanzisha mazungumzo na walimu wakiwa wawili wawili kabla ya kuyaongoza shuleni.",
      "Pima kazi ya mwisho kwa rubriki, na uombe maswali ya walimu yaliyoandikwa kama ushahidi."
    ]
  }
};
