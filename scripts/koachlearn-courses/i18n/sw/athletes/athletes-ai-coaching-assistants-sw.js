"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-coaching-assistants.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-coaching-assistants-sw",
  lang: "sw",
  translationOf: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "Wasaidizi wa AI kwa Makocha",
  skills: "Kuandaa msaidizi wa AI kwa maelekezo ya ukocha, Kupanga mazoezi kwa AI, Kuandika ujumbe kwa wazazi na wachezaji, Kutengeneza kadi za drili na maswali ya majaribio, Kulinda taarifa za wanamichezo na kuacha maamuzi kwa binadamu",
  outcome: "kuandaa msaidizi wa AI kama msaidizi wa ukocha kwa maelekezo yako ya kudumu, kisha kuutumia kupanga mazoezi ya dakika 90, kuandika ujumbe wazi kwa wazazi, na kutengeneza kadi ya drili na jaribio la maswali matano kuhusu mbinu za timu, vyote vimekaguliwa na wewe na bila taarifa za faragha za wanamichezo.",
  about: [
    "Kozi hii ni kwa makocha wakuu, makocha wasaidizi, wakurugenzi wa vilabu na wanamichezo wanaosaidia kufundisha wachezaji wadogo. Makocha hutumia saa nyingi kupanga na kuandika; msaidizi wa AI anaweza kupunguza sehemu ya mzigo huo.",
    "Utaandaa msaidizi wa AI wa bure kwa maelekezo ya kudumu kuhusu timu yako, kisha utautumia kupanga mazoezi, kuandika ujumbe na kutengeneza vifaa vya kufundishia. Pia utaweka kanuni wazi: nini kinabaki faragha na maamuzi gani yanabaki kwa binadamu.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Fuata sheria za shule yako, klabu au ligi kuhusu teknolojia, mawasiliano na watoto na taarifa za wanafunzi."
  ],
  finalTask: "Andika maelekezo ya kudumu ya msaidizi wako wa ukocha (kiwango cha timu, mtindo, kanuni za usalama, nini kisiwekwe), kisha uutumie kutengeneza mpango wa mazoezi wa dakika 90, ujumbe kwa wazazi kuhusu ratiba ya wiki ijayo, kadi ya drili kwa drili moja, na jaribio la maswali matano kuhusu mbinu za timu. Kagua na urekebishe kila kipande, na uhakikishe kuwa hakuna taarifa za faragha za mwanamichezo zilizotumika.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Makocha wakuu, makocha wasaidizi, wakurugenzi wa vilabu na wanamichezo wanaosaidia kufundisha wachezaji wadogo, mara nyingi wakiwa wajitolea au makocha wa muda wenye muda mfupi wa kupanga.",
    startingPoint: "Tayari wanaendesha mazoezi na kutuma ujumbe kwa timu. Baadhi wamejaribu msaidizi wa AI, lakini wachache wanaupa maelekezo ya kudumu au wana kanuni zilizoandikwa kuhusu faragha na usalama.",
    gap: "Kupanga na kuandika kunachukua saa nyingi, na matumizi ya AI bila uangalifu yanaweza kuvujisha taarifa za faragha za wanamichezo, kutoa drili zisizo salama, au kuchukua maamuzi ambayo kocha lazima afanye. Makocha wanahitaji kutumia AI kama msaidizi anayekaguliwa, kwa mipaka wazi, ili waokoe muda huku wanamichezo wakibaki salama na kutendewa kwa haki.",
    constraints: [
      "Maneno rahisi; hakuna haja ya ujuzi wa teknolojia",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI wa bure",
      "Muda: kama dakika tano kwa somo katikati ya wiki yenye shughuli nyingi za ukocha",
      "Sheria za shule, klabu na ligi kuhusu teknolojia, kutuma ujumbe kwa watoto na taarifa za wanafunzi zinatangulia",
      "Hakuna majina ya wachezaji, taarifa za afya au taarifa nyingine za faragha za wanamichezo katika prompt yoyote"
    ],
    prerequisites: "Hakuna. Makocha ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi ya AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za ukocha za kila wiki", action: "kuorodhesha kazi za ukocha za kumpa msaidizi wa AI aandike rasimu na maamuzi ya kubaki nayo wewe mwenyewe", standard: "ukiacha maamuzi ya muda wa kucheza, uteuzi na usalama kwa kocha" },
    { id: "O2", condition: "Kwa timu yako mwenyewe", action: "kuandika maelekezo ya kudumu yenye kiwango cha timu, urefu wa mazoezi, mtindo na kanuni za usalama", standard: "pamoja na kanuni ya kutotumia kamwe majina ya wachezaji au taarifa za afya" },
    { id: "O3", condition: "Ukitumia maelekezo yako ya kudumu", action: "kuandaa rasimu ya mpango wa mazoezi wa dakika 90 kwa AI na kuurekebisha", standard: "ili muda ujumlishe sawa, drili zifae umri na vifaa, na angalau mabadiliko mawili yafanyike" },
    { id: "O4", condition: "Ukipewa badiliko la ratiba au habari za timu", action: "kuandika ujumbe wazi na wa upole kwa wazazi au wachezaji kwa AI na kuutuma kupitia njia iliyoidhinishwa", standard: "kila tarehe ikiwa imekaguliwa na bila chochote kuhusu mchezaji mmoja katika ujumbe wa kikundi" },
    { id: "O5", condition: "Ukipewa drili moja na mbinu moja ya mchezo", action: "kutengeneza kadi ya drili na jaribio la maswali matano kuhusu mbinu za timu kwa AI", standard: "kila hatua na jibu likiwa limekaguliwa dhidi ya drili na mbinu yako halisi" },
    { id: "O6", condition: "Kabla ya kutumia AI kwa kazi yoyote ya ukocha", action: "kuandika na kufuata mipaka ya faragha, usalama na haki", standard: "ukipeleka maswali ya matibabu na ya joto kali kwa wataalamu waliofunzwa na kwa mwongozo wa chombo kinachosimamia mchezo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuandaa msaidizi wako wa ukocha",
      lessons: [
        {
          objectives: ["O1"],
          title: "Msaidizi wa AI wa ukocha anaweza kufanya nini",
          minutes: 4,
          goal: "Orodhesha kazi za ukocha za kumpa AI na maamuzi ya kubaki nayo wewe mwenyewe.",
          text: [
            "Msaidizi wa AI wa ukocha ni msaidizi wa AI wa kawaida, kama ChatGPT, Microsoft Copilot au Google Gemini, unaoutumia kwa kazi ya ukocha. Unaweza kuandika rasimu ya mipango ya mazoezi, kuandika barua pepe, kueleza sheria za mchezo, kutengeneza maelezo ya drili, maswali ya majaribio na ratiba, na kufupisha maandishi yako.",
            "Hauwezi kuwaona wachezaji wako, kujua afya yao au hisia zao, wala kubeba uwajibikaji. Muda wa kucheza, nidhamu, majeraha na maamuzi ya kurudi kucheza, maamuzi ya usalama, na chochote kuhusu ustawi wa mchezaji vinabaki kwako na kwa wataalamu wanaofaa.",
            "Kanuni nzuri: AI inaandika rasimu, kocha anaamua. Kila kitu inachoandika ni rasimu ya kwanza ambayo wewe unaikagua."
          ],
          words: [["Msaidizi wa AI wa ukocha", "msaidizi wa AI wa kawaida unaotumiwa kusaidia kazi za ukocha."], ["Kurudi kucheza (return to play)", "uamuzi wa lini mwanamichezo aliyeumia anaweza kucheza tena kwa usalama; hufanywa na wataalamu wa matibabu."]],
          slides: [
            { title: "AI inaweza kuandika rasimu ya", bullets: ["Mipango ya mazoezi na ratiba", "Barua pepe na ujumbe", "Maelezo ya drili na maswali ya majaribio", "Mafupisho ya maandishi yako"] },
            { title: "Kocha anabaki na", bullets: ["Muda wa kucheza na nidhamu", "Maamuzi ya usalama", "Ustawi; majeraha yanaenda kwa wahudumu wa matibabu"] },
            { title: "Kanuni", bullets: ["AI inaandika rasimu", "Kocha anaamua"] }
          ],
          tryIt: "Andika orodha mbili: kazi tano za ukocha za kila wiki ambazo ungeweza kumpa AI aandike rasimu, na maamuzi matano ambayo utabaki nayo daima.",
          youCanNow: "kuamua kazi gani za ukocha AI inaweza kusaidia na maamuzi gani yanabaki kwa binadamu.",
          quickCheck: [
            { objective: "O1", q: "Ni kazi gani ya ukocha ambayo AI inaweza kukuandikia rasimu?", options: ["Ratiba ya mazoezi ya wiki", "Nani anaanza mechi Jumamosi", "Kama mchezaji aliyeumia anaweza kurudi", "Mchezaji anajisikiaje leo"], answer: 0, why: "AI inaweza kuandika rasimu ya mipango; uteuzi, majeraha na hisia vinahitaji kocha na wataalamu waliofunzwa." },
            { objective: "O1", q: "AI inapendekeza mchezaji akae benchi kulingana na maandishi yako. Unafanya nini?", options: ["Unafuata hasa inachosema", "Unafanya uamuzi mwenyewe kutokana na ulichokiona", "Unawaacha wachezaji wapige kura", "Unauliza AI tena hadi ikubaliane nawe"], answer: 1, why: "AI inaandika rasimu, kocha anaamua, hasa kuhusu muda wa kucheza." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika maelekezo ya kudumu",
          minutes: 5,
          goal: "Andika maelekezo ya kudumu yanayoieleza AI kuhusu timu yako na kanuni zako.",
          text: [
            "Maelekezo ya kudumu ni aya moja unayobandika mwanzoni mwa mazungumzo (au unayoihifadhi katika sehemu ya maelekezo maalum au mradi ya msaidizi, kama ipo) ili ujue hali yako kila wakati.",
            "Weka: mchezo, kiwango na kundi la umri; idadi ya wachezaji; urefu wa mazoezi na viwanja; mtindo wako wa ukocha na maadili yako; kanuni za usalama (drili zinazofaa umri, mapumziko ya kunywa maji, hakuna mazoezi magumu kama adhabu); na nini kisiwekwe kamwe (majina ya wachezaji, taarifa za afya, alama za shule).",
            "Mfano: \"Ninafundisha timu ya soka ya wasichana walio chini ya miaka 12 (U12) yenye wachezaji 16. Mazoezi ni dakika 90 kwenye nusu ya uwanja, Jumanne na Alhamisi. Ninathamini juhudi, furaha na kufanya kazi pamoja. Mipango lazima iwe na kupasha mwili moto, mapumziko ya maji kila dakika 20 na drili zinazofaa umri. Usiombe wala kutumia kamwe majina ya wachezaji au taarifa za afya.\""
          ],
          steps: ["Andika mchezo wako, kiwango, kundi la umri na idadi ya wachezaji.", "Ongeza urefu wa mazoezi na viwanja.", "Ongeza maadili yako na mtindo wako wa ukocha.", "Ongeza kanuni za usalama.", "Ongeza nini kisiwekwe kamwe.", "Yahifadhi mahali unapoweza kuyabandika kila wakati."],
          words: [["Maelekezo ya kudumu", "maelezo ya hali yako unayompa AI mwanzoni ili kila jibu lifae hali yako."], ["Inayofaa umri", "inayofaa umri na ukuaji wa wachezaji."]],
          slides: [
            { title: "Maelekezo ya kudumu", bullets: ["Bandika mwanzoni mwa kila mazungumzo", "Au yahifadhi katika mipangilio ya msaidizi, kama ipo"] },
            { title: "Weka", bullets: ["Mchezo, kiwango, umri, idadi ya wachezaji", "Urefu wa mazoezi na nafasi", "Maadili na kanuni za usalama"] },
            { title: "Usiweke kamwe", bullets: ["Majina ya wachezaji", "Taarifa za afya", "Alama za shule au taarifa za familia"] }
          ],
          tryIt: "Andika maelekezo yako ya kudumu katika aya moja na uyahifadhi kwenye kumbukumbu (note). Yabandike kwa msaidizi wa AI na uulize: \"Fupisha unachojua kuhusu timu yangu.\" Rekebisha chochote alichokosea.",
          youCanNow: "kuandika maelekezo ya kudumu yanayofanya majibu ya AI yafae timu yako.",
          quickCheck: [
            { objective: "O2", q: "Maelekezo ya kudumu ni nini?", options: ["Orodha ya namba za simu za wachezaji", "Kitabu cha sheria cha ligi", "Maelezo kuhusu timu yako na kanuni zako unayompa AI mwanzoni", "Drili ya mazoezi"], answer: 2, why: "Maelekezo ya kudumu yanafanya kila jibu la AI lifae timu yako." },
            { objective: "O2", q: "Ufupisho wa AI wa maelekezo yako unasema timu yako ni ya chini ya miaka 16, lakini ni ya chini ya miaka 12. Unafanya nini?", options: ["Unapuuza", "Unafuta app ya AI", "Unatumia majibu hata hivyo", "Unarekebisha maelekezo ili iwe na kundi sahihi la umri"], answer: 3, why: "Maelezo yasiyo sahihi yanaleta mipango isiyo sahihi, kwa hiyo unarekebisha kwanza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga mazoezi kwa AI",
          minutes: 6,
          goal: "Tumia AI kuandaa rasimu ya mpango wa mazoezi wa dakika 90 na uurekebishe.",
          text: [
            "Ukishabandika maelekezo yako ya kudumu, uliza: \"Panga mazoezi ya dakika 90 yanayolenga [ujuzi]. Weka kupasha mwili moto, drili tatu zinazopanda hatua kwa hatua, mchezo wa wachezaji wachache, kupoza mwili na mapumziko ya maji. Toa muda, maandalizi, mambo ya kufundisha na jinsi ya kufanya kila drili iwe rahisi au ngumu zaidi.\"",
            "Kagua kama kocha: Je, drili ni salama na zinafaa umri? Je, muda unajumlisha sawa? Je, una nafasi na vifaa? Je, uwiano wa kazi na mapumziko ni sahihi? Je, kuna mistari mingi na kusimama bure kwingi?",
            "Uliza maswali ya kufuatilia: \"Tuna mipira 10 tu.\" \"Wachezaji wawili ni wapya.\" \"Badilisha drili ya 2 kwa kitu chenye kuguswa mpira zaidi.\" Hifadhi mipango unayoipenda kwenye folda ili uitumie tena na kuiboresha."
          ],
          steps: ["Bandika maelekezo yako ya kudumu.", "Omba mpango wa dakika 90 wenye muda, maandalizi na mambo ya kufundisha.", "Kagua usalama, muda, nafasi na vifaa.", "Uliza maswali ya kufuatilia ili kurekebisha matatizo.", "Hifadhi mpango wa mwisho."],
          words: [["Mfuatano wa hatua (progression)", "drili zinazojengwa kutoka rahisi hadi ngumu zaidi."], ["Mchezo wa wachezaji wachache", "mchezo wenye wachezaji wachache na nafasi ndogo ili kila mmoja aguse mpira mara nyingi zaidi."]],
          slides: [
            { title: "Omba", bullets: ["Kupasha mwili moto, drili 3 zinazopanda hatua", "Mchezo wa wachezaji wachache, kupoza mwili", "Muda, maandalizi, mambo ya kufundisha"] },
            { title: "Kagua kama kocha", bullets: ["Salama na inafaa umri?", "Muda unajumlisha sawa? Nafasi na vifaa?", "Kusimama bure kidogo?"] },
            { title: "Rekebisha", bullets: ["\"Tuna mipira 10 tu.\"", "\"Wachezaji wawili ni wapya.\"", "Hifadhi mipango unayoipenda"] }
          ],
          tryIt: "Tumia maelekezo yako ya kudumu kupata mpango wa mazoezi wa dakika 90 kwa mazoezi halisi yanayokuja. Fanya angalau mabadiliko mawili kwa maswali ya kufuatilia na uuhifadhi.",
          youCanNow: "kupanga mazoezi salama yenye muda mzuri kwa msaada wa AI.",
          quickCheck: [
            { objective: "O3", q: "Mfuatano wa hatua (progression) katika mpango wa mazoezi ni nini?", options: ["Drili zinazojengwa kutoka rahisi hadi ngumu zaidi", "Orodha ya matokeo ya mechi", "Mpangilio wa wachezaji wanavyofika", "Mapumziko ya maji"], answer: 0, why: "Mfuatano wa hatua unajenga ujuzi hatua kwa hatua." },
            { objective: "O3", q: "Mpango wa AI unahitaji koni 20 na wewe una 8. Unafanya nini?", options: ["Unaghairi mazoezi", "Unaiambia AI una koni 8 na kuiomba irekebishe", "Unatumia mpango na kutumaini", "Unanunua koni kabla ya mazoezi"], answer: 1, why: "Ipe AI mipaka yako halisi ili mpango ufanye kazi uwanjani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuandaa msaidizi wako wa ukocha",
        questions: [
          { objective: "O1", q: "Ni kazi gani inafaa kwa msaidizi wa AI wa ukocha?", options: ["Kuamua kurudi kucheza baada ya mtikisiko wa ubongo", "Kumwadhibu mchezaji", "Kuandika rasimu ya mpango wa mazoezi", "Kupima hisia za mchezaji"], answer: 2, why: "AI inaandika rasimu; maamuzi ya matibabu na ya binafsi yanabaki kwa watu." },
          { objective: "O1", q: "Kanuni ya ukocha kuhusu AI ni ipi?", options: ["AI inaandika rasimu, kocha anaamua", "AI inaamua kila kitu", "Usitumie AI kamwe", "Wachezaji wanaamua"], answer: 0, why: "Kila kinachotolewa na AI ni rasimu ya kwanza." },
          { objective: "O2", q: "Ni kipi kinafaa kuwa katika maelekezo ya kudumu?", options: ["Majina ya wachezaji", "Taarifa za afya za wachezaji", "Alama za shule za wachezaji", "Kundi la umri na urefu wa mazoezi"], answer: 3, why: "Maelezo ya timu yanasaidia; taarifa za faragha zinabaki nje." },
          { objective: "O3", q: "Mpango wa AI una drili isiyo salama kwa watoto wa miaka 10. Wewe:", options: ["Unaitumia hata hivyo", "Unaibadilisha kwa drili inayofaa umri", "Unaifanya iwe ngumu zaidi", "Unaruka mapumziko ya maji"], answer: 1, why: "Usalama na kufaa umri vinatangulia." },
          { objective: "O3", q: "Mchezo wa wachezaji wachache unafaa kwa sababu:", options: ["Ni mrefu zaidi", "Kila mmoja anagusa mpira mara nyingi zaidi", "Unahitaji vifaa zaidi", "Wachezaji wanasimama kwenye mistari"], answer: 1, why: "Wachezaji wachache maana yake kila mmoja anashiriki zaidi." }
        ]
      }
    },
    {
      name: "Sura 2: Mawasiliano, vifaa na mipaka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ujumbe kwa wazazi na wachezaji",
          minutes: 5,
          goal: "Andika ujumbe wazi na wa upole kwa wazazi au wachezaji kwa AI na uutume kupitia njia zilizoidhinishwa.",
          text: [
            "Makocha huandika ujumbe mwingi: ratiba, mabadiliko, vikumbusho, matarajio. Uliza: \"Andika ujumbe mfupi wa kirafiki kwa wazazi kuhusu mabadiliko ya mazoezi ya wiki ijayo: Jumanne yanahamia saa 5 pm (saa 11 jioni), Alhamisi yameghairiwa kwa sababu ya ukarabati wa uwanja. Taja vitu vya kuleta. Chini ya maneno 100.\"",
            "Kagua ukweli, tarehe na sauti ya ujumbe. Ujumbe wa kikundi ubaki kuhusu timu; usijadili kamwe kiwango cha mchezaji mmoja, afya yake au tabia yake katika ujumbe wa kikundi.",
            "Tumia njia ya mawasiliano iliyoidhinishwa na shule au klabu yako. Mashirika mengi yana sheria kwa makocha wanaotuma ujumbe kwa watoto, kwa mfano kumjumuisha mzazi au kocha mwingine. Mazungumzo magumu, kama muda wa kucheza au tabia, ni bora ana kwa ana au kwa simu, si kwa ujumbe ulioandikwa na AI."
          ],
          steps: ["Omba AI rasimu fupi ya kirafiki.", "Kagua ukweli, tarehe na sauti.", "Ujumbe wa kikundi ubaki kuhusu timu.", "Tuma kupitia njia zilizoidhinishwa.", "Shughulikia mazungumzo magumu ana kwa ana."],
          words: [["Njia iliyoidhinishwa", "njia ya mawasiliano ambayo shule au klabu yako inaruhusu makocha kutumia."], ["Sauti ya ujumbe", "jinsi ujumbe unavyohisiwa: wa kirafiki, imara, wa upendo."]],
          slides: [
            { title: "AI inaandika rasimu ya ujumbe", bullets: ["Ratiba, mabadiliko, vikumbusho", "Mfupi na wa kirafiki"] },
            { title: "Kagua", bullets: ["Ukweli na tarehe", "Sauti ya ujumbe", "Mambo ya timu tu katika vikundi"] },
            { title: "Tuma kwa njia sahihi", bullets: ["Njia zilizoidhinishwa", "Fuata sheria za kutuma ujumbe kwa watoto", "Mazungumzo magumu ana kwa ana"] }
          ],
          tryIt: "Tumia AI kuandika ujumbe halisi au wa mazoezi kwa wazazi kuhusu badiliko la ratiba. Kagua kila tarehe na uutume (au uuhifadhi) kupitia njia yako iliyoidhinishwa.",
          youCanNow: "kuandika ujumbe wazi wa timu kwa AI na kuutuma kwa njia sahihi.",
          quickCheck: [
            { objective: "O4", q: "Ujumbe wa kikundi cha timu unapaswa kuwa kuhusu nini?", options: ["Tabia ya mchezaji mmoja", "Jeraha la mchezaji", "Timu, kama saa na mahali", "Nani anakaa benchi"], answer: 2, why: "Ujumbe wa kikundi ni kwa habari za timu; mambo ya mchezaji mmoja ni ya faragha." },
            { objective: "O4", q: "AI inaandika ujumbe kwa wazazi unaosema mazoezi ni Jumanne tarehe 14. Unafanya nini kabla ya kuutuma?", options: ["Unautuma mara moja", "Unaongeza emoji zaidi", "Unautuma kutoka akaunti yako binafsi kwa wachezaji tu", "Unakagua tarehe kwenye kalenda"], answer: 3, why: "AI inaweza kukosea tarehe, kwa hiyo unakagua kila tarehe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kadi za drili na majaribio ya mbinu za timu",
          minutes: 5,
          goal: "Tengeneza kadi ya drili na jaribio la maswali matano kuhusu mbinu za timu.",
          text: [
            "Kadi za drili zinawasaidia makocha wasaidizi na wachezaji kuendesha drili kwa njia ileile. Uliza: \"Tengeneza kadi ya drili ya ukurasa mmoja kwa [drili]: lengo, maandalizi, hatua, mambo ya kufundisha, makosa ya kawaida, na jinsi ya kuifanya iwe rahisi au ngumu zaidi.\" Ongeza mchoro rahisi kwa zana kama Canva au kwa mkono.",
            "Majaribio yanawasaidia wachezaji kujifunza mbinu za timu (playbook) na sheria. Uliza: \"Andika maswali matano ya kuchagua jibu kuhusu mbinu yetu ya kurusha mpira kutoka nje: [ieleze]. Jibu moja sahihi kwa kila swali, na maelezo mafupi.\" Kagua kila jibu dhidi ya mbinu yako halisi.",
            "Tumia zana ya majaribio kama Google Forms kulishiriki, bila kukusanya taarifa binafsi zaidi ya zinazohitajika."
          ],
          steps: ["Omba AI kadi ya drili yenye lengo, maandalizi, hatua na mambo ya kufundisha.", "Ongeza mchoro rahisi.", "Eleza mbinu moja na uombe maswali matano ya jaribio.", "Kagua kila jibu dhidi ya mbinu yako halisi.", "Shiriki kwa fomu rahisi, ukikusanya taarifa chache tu."],
          words: [["Kadi ya drili", "mwongozo wa ukurasa mmoja unaoeleza jinsi ya kuendesha drili."], ["Mbinu za timu (playbook)", "seti ya mbinu za mchezo za timu na kanuni za jinsi ya kuzitekeleza."]],
          slides: [
            { title: "Kadi ya drili", bullets: ["Lengo, maandalizi, hatua", "Mambo ya kufundisha, makosa ya kawaida", "Toleo rahisi na toleo gumu zaidi"] },
            { title: "Jaribio la mbinu za timu", bullets: ["Eleza mbinu", "Maswali matano yenye maelezo", "Kagua kila jibu"] },
            { title: "Shiriki kwa urahisi", bullets: ["Google Forms au zana kama hiyo", "Kusanya taarifa binafsi chache tu"] }
          ],
          tryIt: "Tengeneza kwa AI kadi moja ya drili na jaribio la maswali matano kuhusu mbinu yako moja. Kagua vyote viwili na urekebishe chochote kilichokosewa.",
          youCanNow: "kutengeneza kadi za drili na majaribio ya mbinu za timu kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "Kadi ya drili inasaidia nini?", options: ["Kuendesha drili kwa njia ileile kila wakati", "Kuchagua manahodha wa timu", "Kulipa ada za klabu", "Kukodi basi"], answer: 0, why: "Kadi ya drili inatoa lengo, maandalizi, hatua na mambo ya kufundisha ili kila mtu aiendeshe kwa njia ileile." },
            { objective: "O5", q: "Jibu moja katika jaribio la AI la mbinu za timu halilingani na mbinu yako halisi. Unafanya nini?", options: ["Unalishiriki hata hivyo", "Unarekebisha jibu kabla ya kushiriki", "Unabadilisha mbinu yako ilingane", "Unaondoa jaribio kwenye kozi"], answer: 1, why: "Kila jibu la jaribio lazima lilingane na jinsi timu yako inavyotekeleza mbinu hiyo kweli." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mipaka: faragha, usalama na haki",
          minutes: 5,
          goal: "Andika mipaka yako ya AI ya ukocha na uifuate.",
          text: [
            "Faragha: usibandike kamwe katika zana za AI majina ya wachezaji pamoja na taarifa za afya, majeraha, alama za shule, hali za familia, mawasiliano yao au picha za watoto. Tumia nafasi zao uwanjani au namba zao. Kagua sheria za shirika lako kuhusu zana zipi zinaruhusiwa kutumika na taarifa za wanafunzi au wachezaji.",
            "Usalama: AI inaweza kupendekeza drili, mazoezi ya nguvu au mazoezi kwenye joto kali yaliyopitwa na wakati au yasiyo salama. Kagua drili dhidi ya mwongozo wa chombo kinachosimamia mchezo wako na athletic trainer wako (mtaalamu wa afya ya wanamichezo), na usitumie kamwe AI kwa maamuzi ya matibabu, ya mtikisiko wa ubongo (concussion) au ya kurudi kucheza; mafunzo ya bure ya HEADS UP ya CDC (shirika la afya ya umma la Marekani) ni mahali pamoja pa kujifunza misingi ya mtikisiko wa ubongo.",
            "Haki na uaminifu: maamuzi kuhusu uteuzi na muda wa kucheza yanatokana na unachokiona, na yanaelezwa kwa wachezaji ana kwa ana. Kuwa wazi kwa familia kwamba unatumia AI kupanga, kama shirika lako linataka hivyo."
          ],
          steps: ["Andika kanuni yako ya faragha: hakuna majina pamoja na taarifa za faragha.", "Andika kanuni yako ya usalama: kagua drili; hakuna maamuzi ya matibabu.", "Andika kanuni yako ya haki: maamuzi kutokana na unachokiona, yanaelezwa ana kwa ana.", "Kagua sheria za teknolojia za shirika lako.", "Shiriki mipaka hii na wafanyakazi wako."],
          words: [["Mpaka (guardrail)", "kanuni inayokulinda unapotumia zana."], ["Chombo kinachosimamia mchezo", "shirika linaloweka sheria za mchezo wako au kiwango chako."]],
          slides: [
            { title: "Faragha", bullets: ["Hakuna majina pamoja na afya, alama za shule au familia", "Tumia nafasi uwanjani au namba", "Fuata sheria za zana za shirika lako"] },
            { title: "Usalama", bullets: ["Kagua drili na mazoezi ya nguvu", "Hakuna maamuzi ya matibabu au ya kurudi kucheza", "CDC HEADS UP kwa misingi ya mtikisiko wa ubongo"] },
            { title: "Haki", bullets: ["Maamuzi kutokana na unachokiona", "Yanaelezwa ana kwa ana"] }
          ],
          sources: [{ name: "CDC: mafunzo ya HEADS UP kuhusu mtikisiko wa ubongo (concussion)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Kazi ya mwisho: andika mipaka yako na maelekezo yako ya kudumu, kisha utengeneze kwa AI mpango wa mazoezi, ujumbe kwa wazazi, kadi ya drili na jaribio, ukikagua kila kimoja na kuhakikisha kuwa hakuna taarifa za faragha za mwanamichezo zilizotumika.",
          youCanNow: "kutumia msaidizi wa AI wa ukocha ukiwa na mipaka wazi ya faragha, usalama na haki.",
          quickCheck: [
            { objective: "O6", q: "Mpaka wa AI wa ukocha ni nini?", options: ["Uzio kuzunguka uwanja", "Drili kwa mabeki", "Kanuni inayokulinda unapotumia AI", "Aina ya chati"], answer: 2, why: "Mipaka inaweka utakachofanya na usichofanya kwa AI." },
            { objective: "O6", q: "Unataka msaada wa AI kuhusu kupona kwa mchezaji kutokana na mtikisiko wa ubongo. Unafanya nini?", options: ["Unabandika maandishi ya matibabu", "Unafuata tarehe ya kurudi ya AI", "Unawauliza wachezaji wenzake", "Unawaachia wataalamu wa matibabu"], answer: 3, why: "Maamuzi ya kurudi kucheza baada ya mtikisiko wa ubongo ni ya wataalamu wa matibabu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mawasiliano, vifaa na mipaka",
        questions: [
          { objective: "O4", q: "Tabia ya mchezaji mmoja inapaswa kujadiliwa wapi?", options: ["Katika kikundi cha mazungumzo cha timu", "Kwenye mitandao ya kijamii", "Katika ujumbe wa kikundi ulioandikwa na AI", "Kwa faragha, ana kwa ana au kwa simu"], answer: 3, why: "Ujumbe wa kikundi unabaki kuhusu timu." },
          { objective: "O5", q: "Kadi ya drili ina:", options: ["Lengo, maandalizi, hatua na mambo ya kufundisha", "Alama za shule za wachezaji", "Maandishi ya afya ya wachezaji", "Hakuna kitu"], answer: 0, why: "Inasaidia kila mtu kuendesha drili kwa njia ileile." },
          { objective: "O5", q: "AI inaandika jaribio la mbinu za timu. Kabla ya kulishiriki wewe:", options: ["Unalishiriki bila kulisoma", "Unaongeza majibu ya mtego", "Unakagua kila jibu dhidi ya mbinu yako halisi", "Unaiacha AI iwape wachezaji alama"], answer: 2, why: "AI inaweza kuikosea mbinu yako." },
          { objective: "O6", q: "Ni kipi ni salama kubandika kwa AI?", options: ["\"Maria Lopez, mshipa wa ACL umechanika, anatumia dawa\"", "Anwani ya nyumbani ya mchezaji", "Picha ya mtoto na jina lake kamili", "\"Beki wetu wa kushoto anaendelea kumwacha mchezaji anayemlinda kwenye kona\""], answer: 3, why: "Nafasi uwanjani bila majina au taarifa za afya zinalinda faragha." },
          { objective: "O6", q: "Nani anafanya maamuzi ya kurudi kucheza baada ya mtikisiko wa ubongo?", options: ["Msaidizi wa AI", "Wataalamu wa matibabu", "Nahodha wa timu", "Wazazi katika kikundi cha mazungumzo"], answer: 1, why: "Maamuzi ya matibabu ni ya wataalamu wenye sifa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Wasaidizi wa AI kwa Makocha",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI wa ukocha ni:", options: ["Roboti kwenye benchi", "Mwamuzi", "Msaidizi wa AI wa kawaida anayetumiwa kwa kazi za ukocha", "Mtafuta vipaji anayelipwa"], answer: 2, why: "Makocha hutumia wasaidizi wa bure kwa kazi ya ukocha." },
      { objective: "O1", q: "Ni kipi AI HAIWEZI kufanya?", options: ["Kuwaona wachezaji wako na kujua hisia zao", "Kuandika rasimu ya ratiba", "Kuandika maelezo ya drili", "Kufupisha maandishi"], answer: 0, why: "Inajua tu unachoiambia." },
      { objective: "O1", q: "Nani anaamua muda wa kucheza?", options: ["Kocha", "AI", "Kikundi cha mazungumzo cha wazazi", "Timu pinzani"], answer: 0, why: "Muda wa kucheza ni uamuzi wa binadamu." },
      { objective: "O2", q: "Maelekezo ya kudumu ni:", options: ["Kunyoosha misuli kwa timu", "Kitabu cha sheria", "Maelezo ya hali yako unayompa AI mwanzoni", "Kombe"], answer: 2, why: "Yanafanya majibu yafae timu yako." },
      { objective: "O2", q: "Ni kanuni gani ya usalama inafaa katika maelekezo ya kudumu?", options: ["Hakuna mapumziko kamwe", "Mapumziko ya maji kila dakika 20", "Kukimbia mizunguko kama adhabu", "Kuruka kupasha mwili moto"], answer: 1, why: "Kanuni za usalama zinafaa kuwa katika maelekezo." },
      { objective: "O2", q: "Maelekezo ya kudumu yanapaswa kusema nini kisiwekwe kamwe?", options: ["Urefu wa mazoezi", "Kundi la umri", "Ukubwa wa uwanja", "Majina ya wachezaji na taarifa za afya"], answer: 3, why: "Taarifa za faragha zinabaki nje." },
      { objective: "O3", q: "Mfuatano wa hatua (progression) ni:", options: ["Gwaride", "Mechi za mtoano", "Drili zinazojengwa kutoka rahisi hadi ngumu zaidi", "Badiliko la ratiba"], answer: 2, why: "Mfuatano wa hatua unajenga ujuzi hatua kwa hatua." },
      { objective: "O3", q: "Muda katika mpango wa AI unajumlisha dakika 120 kwa mazoezi ya dakika 90. Wewe:", options: ["Unaendesha dakika 120 hata hivyo", "Unaruka kupasha mwili moto", "Unapuuza", "Unaiomba irekebishe muda"], answer: 3, why: "Kagua kwamba muda unajumlisha sawa." },
      { objective: "O3", q: "Una mipira 10 tu. Wewe:", options: ["Unaiambia AI na kuiomba irekebishe", "Unaghairi mazoezi", "Unanunua 50 leo", "Unapuuza mpango"], answer: 0, why: "Maswali ya kufuatilia yanafanya mpango ulingane na rasilimali zako." },
      { objective: "O4", q: "Ujumbe kwa wazazi kuhusu badiliko la ratiba unapaswa kuwa:", options: ["Mrefu na usio wazi", "Mfupi, wa kirafiki na tarehe zimekaguliwa", "Umetumwa bila kukaguliwa", "Umetumwa kutoka akaunti binafsi kinyume na sheria za klabu"], answer: 1, why: "Ulio wazi na sahihi ni bora." },
      { objective: "O4", q: "Ujumbe wa kikundi unapaswa kuwa kuhusu:", options: ["Makosa ya mchezaji mmoja", "Undani wa jeraha la mchezaji", "Timu", "Umbea"], answer: 2, why: "Mambo ya mtu mmoja mmoja yanabaki faragha." },
      { objective: "O4", q: "Sheria za kutuma ujumbe kwa watoto mara nyingi zinataka:", options: ["Kumjumuisha mzazi au kocha mwingine", "Ujumbe wa siri", "Kutuma ujumbe usiku sana", "Akaunti binafsi za mitandao ya kijamii"], answer: 0, why: "Sheria hizi zinawalinda wanamichezo na makocha." },
      { objective: "O4", q: "Mazungumzo magumu kuhusu muda wa kucheza ni bora:", options: ["Katika ujumbe ulioandikwa na AI", "Kwenye mitandao ya kijamii", "Katika kikundi cha mazungumzo", "Ana kwa ana au kwa simu"], answer: 3, why: "Mazungumzo magumu yanahitaji mguso wa kibinadamu." },
      { objective: "O5", q: "Kadi ya drili inasaidia:", options: ["Kuficha drili", "Wasaidizi na wachezaji kuendesha drili kwa njia ileile", "Kuchukua nafasi ya mazoezi", "Kufuatilia alama za shule"], answer: 1, why: "Kufanya mambo kwa njia ileile kunaboresha mazoezi." },
      { objective: "O5", q: "Jaribio la mbinu za timu linakagua:", options: ["Afya ya wachezaji", "Kama wachezaji wanazijua mbinu", "Alama za shule za wachezaji", "Ratiba za wazazi"], answer: 1, why: "Majaribio yanaimarisha kujifunza." },
      { objective: "O5", q: "Unaposhiriki jaribio kwa fomu, kusanya:", options: ["Anwani za nyumbani", "Nywila", "Historia ya matibabu", "Taarifa unazohitaji tu"], answer: 3, why: "Taarifa chache zinawalinda wachezaji." },
      { objective: "O6", q: "Mpaka (guardrail) ni:", options: ["Kanuni inayokulinda unapotumia zana", "Uzio", "Drili", "Sare ya timu"], answer: 0, why: "Mipaka inazuia matumizi mabaya." },
      { objective: "O6", q: "AI inapendekeza mazoezi makali ya nguvu kwenye joto kali. Wewe:", options: ["Unayafanya", "Unayarefusha", "Unakagua na athletic trainer wako na mwongozo wa chombo kinachosimamia mchezo", "Unaruka maji"], answer: 2, why: "AI inaweza kupendekeza mazoezi yasiyo salama." },
      { objective: "O6", q: "Chombo kinachosimamia mchezo ni:", options: ["Ukumbi wa mazoezi", "Mdhamini", "Kikundi cha wazazi", "Shirika linaloweka sheria za mchezo wako au kiwango chako"], answer: 3, why: "Kinaweka sheria rasmi." },
      { objective: "O1", q: "Maamuzi ya uteuzi yanapaswa kutokana na:", options: ["Makisio ya AI", "Kile kocha anachokiona", "Mitandao ya kijamii", "Uvumi"], answer: 1, why: "Maamuzi ya haki yanatokana na kuona kwa kweli." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maelekezo ya kudumu",
        objective: "O2",
        notYet: "Yanakosa kiwango cha timu, urefu wa mazoezi au kanuni za usalama.",
        meets: "Kiwango cha timu, urefu, mtindo, kanuni za usalama na kanuni ya kutoweka taarifa za faragha.",
        exceeds: "Pia yanaorodhesha vifaa na nafasi ili mipango ilingane na uwanja halisi."
      },
      {
        name: "Mpango wa mazoezi",
        objective: "O3",
        notYet: "Muda haujumlishi dakika 90 au drili moja si salama kwa kundi la umri.",
        meets: "Mpango wa dakika 90 wenye muda sahihi na drili salama, uliobadilishwa angalau mara mbili.",
        exceeds: "Una mfuatano wa hatua ulio wazi na mapumziko ya maji, na unaeleza kwa nini kila badiliko lilifanywa."
      },
      {
        name: "Ujumbe kwa wazazi",
        objective: "O4",
        notYet: "Tarehe zisizo sahihi, sauti isiyo ya upole, au taarifa za faragha za mchezaji.",
        meets: "Mfupi, wa kirafiki, tarehe zimekaguliwa, umetumwa au umehifadhiwa kupitia njia iliyoidhinishwa.",
        exceeds: "Pia unasema nani wa kuwasiliana naye kwa maswali, ukifuata sheria za kutuma ujumbe kwa watoto."
      },
      {
        name: "Kadi ya drili na jaribio",
        objective: "O5",
        notYet: "Hatua au jibu la jaribio halilingani na drili au mbinu halisi.",
        meets: "Kadi ya drili yenye lengo, maandalizi, hatua na mambo ya kufundisha; maswali matano ya jaribio yaliyokaguliwa.",
        exceeds: "Jaribio halikusanyi taarifa zaidi ya zinazohitajika na linagusa nyakati muhimu za mbinu hiyo."
      },
      {
        name: "Mipaka na faragha",
        objective: "O6",
        notYet: "Prompt ina majina ya wachezaji au taarifa za afya, au AI ilifanya uamuzi wa kocha.",
        meets: "Mipaka iliyoandikwa imefuatwa; hakuna taarifa za faragha za wanamichezo zilizotumika; maamuzi yamebaki kwa kocha.",
        exceeds: "Mipaka pia inasema maswali ya matibabu na ya joto kali yanapelekwa wapi."
      }
    ]
  },
  evaluation: {
    results: [
      "Makocha wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Makocha wanaoripoti kuokoa muda katika kupanga na kuandika ujumbe kila wiki (utafiti wa kufuatilia baada ya siku 30)",
      "Vilabu au shule zinazoanzisha mipaka ya AI iliyoandikwa kwa makocha wao",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wanamichezo ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye msaidizi wa AI wa bure",
      "App ya kumbukumbu au karatasi ya kuhifadhi maelekezo ya kudumu na mipaka",
      "Ratiba ya timu yako, orodha ya vifaa na mbinu moja au drili moja ya kufanyia kazi",
      "Kama dakika 60 kwa jumla kwa masomo, kazi za vitendo, majaribio na mtihani"
    ],
    facilitatorNotes: [
      "Iendeshe kama warsha ya makocha: andikeni maelekezo ya kudumu pamoja, kisha kila kocha aandae mpango kwa timu yake mwenyewe.",
      "Shiriki sheria za klabu au shule yako kuhusu kutuma ujumbe kwa watoto na taarifa za wanafunzi kabla ya Somo la 4.",
      "Hakikisha hakuna anayebandika majina ya wachezaji, taarifa za afya au picha za watoto katika zana ya AI.",
      "Mwombe athletic trainer au kiongozi wa usalama apitie mwongozo kuhusu joto kali na mazoezi ya nguvu.",
      "Pima kazi ya mwisho kwa rubriki, mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
