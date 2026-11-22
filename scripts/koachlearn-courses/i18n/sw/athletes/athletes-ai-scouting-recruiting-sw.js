"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-scouting-recruiting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-scouting-recruiting-sw",
  lang: "sw",
  translationOf: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "Kusakwa na Kuajiriwa Michezoni kwa AI",
  skills: "Kujenga orodha ya vyuo lengwa katika jedwali, Kutengeneza wasifu wa kuajiriwa na video ya vivutio, Kuandika barua pepe binafsi kwa makocha wa vyuo kwa msaada wa AI, Kujua mahali pa kukagua ustahiki na sheria za kuajiri, Kupanga maelezo ya usakaji kwa haki (kwa makocha)",
  outcome: "kuendesha mpango wa kuajiriwa ulio na mpangilio: orodha ya vyuo 15 lengwa katika jedwali, wasifu wa ukurasa mmoja na video ya vivutio ya dakika mbili hadi nne, na barua pepe binafsi kwa makocha watatu wa vyuo zilizoandaliwa kwa AI, huku ukikagua sheria rasmi za ustahiki na za kuajiri za mchezo wako.",
  about: [
    "Kozi hii ni kwa wanamichezo wa sekondari (high school) na wa vyuo vya kati (junior college) wanaotaka kucheza chuoni, wazazi wao, na makocha wanaowasaidia. Sehemu fupi pia inawasaidia makocha kupanga maelezo ya usakaji kwa haki.",
    "Kuajiriwa ni mchakato unaoweza kuusimamia kama mradi. Utatafiti vyuo, utaonyesha uwezo na tabia yako waziwazi, utawasiliana na makocha kwa heshima, na utafuatilia kila kitu mahali pamoja, ukitumia AI kuokoa muda lakini kamwe si kudanganya.",
    "Sheria za kuajiri na za ustahiki zinategemea mchezo wako na daraja lako (NCAA Division I, II, III, NAIA, junior college), na zinabadilika mara kwa mara. Kozi hii inakuonyesha mahali pa kukagua; daima thibitisha na kocha wa shule yako, mshauri wa shule (counselor), na tovuti rasmi."
  ],
  finalTask: "Jenga mpango wako wa kuajiriwa: jedwali lenye vyuo 15 lengwa (vya kujinyoosha, vinavyolingana, na vya uhakika), wasifu wa ukurasa mmoja, video ya vivutio ya dakika mbili hadi nne yenye vipande vyako bora mwanzoni, na barua pepe binafsi kwa makocha watatu zilizoandaliwa kwa AI na kuhaririwa na wewe. Ongeza maelezo ya akaunti ya ustahiki unayohitaji na mahali ulipokagua sheria za kuajiri za mchezo wako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari na wa vyuo vya kati wanaotaka kucheza chuoni, wazazi wao, na makocha wanaowasaidia au wanaosaka wachezaji.",
    startingPoint: "Wanacheza kwa ushindani na huenda wana video za mechi, takwimu na kocha wa klabu au shule. Wengi hawana uhakika ni akaunti gani ya ustahiki wanahitaji, wanategemea AI au makala za zamani kwa sheria za kuajiri, wanatuma barua pepe za jumla, na hawafuatilii mawasiliano.",
    gap: "Kukosa hatua za ustahiki, kufuata vyuo visivyofaa, au kutuma ujumbe wa jumla kunaweza kumgharimu mwanamichezo nafasi katika timu ya chuo au msaada wa fedha, na huduma za kulipia zinaweza kuchukua pesa kwa ahadi za uongo. Mpango wenye mpangilio, uliokaguliwa kwa sheria, wenye vifaa vya kweli na barua pepe binafsi unawapa nafasi halisi.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 8",
      "Simu au kompyuta yenye Google Sheets, msaidizi wa AI wa bure na programu ya kuhariri video",
      "Kama dakika 60 za masomo pamoja na muda wa kujenga wasifu, video na orodha ya vyuo lengwa",
      "Sheria za ustahiki na za mawasiliano ya kuajiri zinatofautiana kwa shirika, mchezo na daraja, na zinabadilika mara kwa mara; kagua ncaa.org, tovuti ya NAIA na mshauri wa shule",
      "Wachezaji wanaosakwa mara nyingi ni watoto chini ya miaka 18: usiweke anwani za nyumbani wala taarifa za faragha katika wasifu au zana za AI"
    ],
    prerequisites: "Hakuna. \"Uchambuzi wa Video na Akili ya Mchezo\" na \"SEO na Kujenga Tovuti Yako kwa AI\" ni kozi zinazosaidia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa madaraja ya vyuo unayolenga", action: "kutambua akaunti ya ustahiki unayohitaji na mahali pa kukagua sheria za mawasiliano ya kuajiri za mchezo wako", standard: "ukitumia tovuti rasmi na mshauri wako wa shule, si AI wala makala za zamani, kwa sheria na tarehe" },
    { id: "O2", condition: "Ukitumia Google Sheets na msaidizi wa AI", action: "kujenga orodha ya vyuo 15 lengwa vilivyowekwa alama ya kujinyoosha, kinacholingana au cha uhakika", standard: "kila chuo, jina la kocha na taarifa za orodha ya wachezaji zikiwa zimekaguliwa kwenye kurasa rasmi za chuo" },
    { id: "O3", condition: "Ukitumia takwimu, alama za shule na vipande vya video vya kweli", action: "kutengeneza wasifu wa kuajiriwa wa ukurasa mmoja na video ya vivutio ya dakika mbili hadi nne", standard: "kila takwimu ikiwa ya kweli, vipande bora katika sekunde 30 za kwanza, ukiwa umejiwekea alama kabla ya kila kipande, bila anwani ya nyumbani, na kocha akiwa amepitia" },
    { id: "O4", condition: "Ukitumia wasifu wako na rasimu ya AI", action: "kuandika barua pepe binafsi za kujitambulisha kwa makocha watatu wa vyuo", standard: "kila moja chini ya maneno 150, yenye kichwa kilicho wazi na sababu moja ya kweli na mahususi kwa kila chuo, ikitumwa na wewe kutoka barua pepe rasmi" },
    { id: "O5", condition: "Ukitumia orodha yako ya vyuo lengwa", action: "kufuatilia kila mawasiliano, jibu na hatua inayofuata pamoja na tarehe", standard: "ikisasishwa kila wiki, na huduma yoyote ya kuajiri ya kulipia ikikaguliwa kwanza na kocha au mshauri wako" },
    { id: "O6", condition: "Kama kocha anayesaka wachezaji", action: "kupanga maelezo ya usakaji kwa vigezo vilevile na kipimo cha 1 hadi 5 kilichoelezwa kwa kila mchezaji", standard: "alama zikitokana na ulichoona, AI ikitumika tu kufupisha maelezo, taarifa za faragha zikilindwa na upendeleo ukikaguliwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa kuajiriwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sheria kwanza: misingi ya ustahiki na kuajiri",
          minutes: 5,
          goal: "Tafuta akaunti ya ustahiki na sheria za kuajiri zinazokuhusu.",
          text: [
            "Michezo ya vyuo nchini Marekani ina mashirika tofauti: NCAA Divisions I, II na III, NAIA, na vyuo vya kati (junior colleges). Kila moja lina sheria zake za masomo na za ustahiki.",
            "Ukipanga kucheza NCAA Division I au II, utahitaji akaunti katika NCAA Eligibility Center, ofisi inayokagua masomo yako na hadhi yako ya ridhaa (amateur). Tovuti ya Eligibility Center inaeleza Profile Page kwa wanafunzi wadogo na kwa Division III, na akaunti za uthibitisho (certification) kwa Division I na II. NAIA ina kituo chake cha ustahiki; kagua tovuti yake rasmi.",
            "Lini na jinsi gani makocha wa vyuo wanaweza kuwasiliana nawe kunategemea mchezo wako na daraja lako, na kunabadilika mara kwa mara. Usitegemee AI wala makala za zamani kwa tarehe; kagua ncaa.org, muulize kocha wa shule yako na mshauri wa shule, na weka alama zako na masomo ya msingi (core courses) katika njia sahihi."
          ],
          steps: ["Amua madaraja unayolenga.", "Tembelea NCAA Eligibility Center na usome akaunti ipi inakufaa.", "Kagua tovuti ya ustahiki ya NAIA ikikuhusu.", "Muulize mshauri wa shule kuhusu masomo ya msingi na alama.", "Kagua sheria za mawasiliano ya kuajiri za mchezo wako kwenye ncaa.org."],
          words: [["Ustahiki (eligibility)", "kutimiza sheria za masomo na nyingine zinazohitajika ili kucheza michezo ya chuo."], ["NCAA Eligibility Center", "ofisi ya NCAA ambapo wanamichezo wa vyuo wa baadaye hujisajili ili masomo yao na hadhi yao ya ridhaa vikaguliwe."], ["Daraja (division)", "ngazi ya michezo ya vyuo, kama NCAA Division I, II au III."]],
          slides: [
            { title: "Ngazi za michezo ya vyuo", bullets: ["NCAA Divisions I, II, III", "NAIA", "Vyuo vya kati (junior colleges)"] },
            { title: "Akaunti za ustahiki", bullets: ["NCAA DI na DII: akaunti ya uthibitisho", "Wanafunzi wadogo na DIII: Profile Page", "NAIA: kituo chake cha ustahiki"] },
            { title: "Sheria za mawasiliano hubadilika", bullets: ["Zinategemea mchezo na daraja", "Kagua ncaa.org, si AI", "Muulize kocha na mshauri wako"] }
          ],
          sources: [
            { name: "NCAA Eligibility Center", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA: Jina, Sura na Utambulisho (NIL) (sheria kwa wanaoajiriwa na wanamichezo)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Tembelea tovuti ya NCAA Eligibility Center na uandike aina ya akaunti inayokufaa. Kisha andika swali moja kuhusu sheria za kuajiri za mchezo wako la kumuuliza kocha wa shule yako au mshauri wa shule.",
          youCanNow: "kutafuta akaunti ya ustahiki na sheria rasmi zinazokuhusu.",
          quickCheck: [
            { objective: "O1", q: "Ni shirika gani lina kituo chake cha ustahiki tofauti na NCAA?", options: ["NAIA", "Shule yako ya sekondari", "Timu yako ya klabu", "Gazeti la mtaani"], answer: 0, why: "NAIA ina kituo chake cha ustahiki; kagua tovuti yake rasmi." },
            { objective: "O1", q: "AI inakuambia tarehe ambayo makocha wa vyuo wanaweza kukupigia simu mara ya kwanza. Unafanya nini?", options: ["Unaiamini", "Unaiweka kwa wachezaji wenzako", "Unakagua ncaa.org na kumuuliza kocha au mshauri wako", "Unasubiri kocha akupigie"], answer: 2, why: "Sheria za mawasiliano hubadilika mara kwa mara; kagua vyanzo rasmi, si AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujenga orodha yako ya vyuo lengwa",
          minutes: 6,
          goal: "Jenga jedwali la vyuo 15 vinavyokufaa kimichezo, kimasomo na kibinafsi.",
          text: [
            "Chuo sahihi ni kile ambapo unaweza kucheza, kusoma unachotaka, kumudu gharama, na kuwa na furaha hata michezo ikiisha. Lenga mchanganyiko: vyuo vya kujinyoosha (reach, vigumu kidogo), vyuo vinavyolingana (target, vinakufaa vizuri) na vyuo vya uhakika (likely, ambapo ungechangia waziwazi).",
            "Tengeneza Google Sheet yenye safuwima hizi: School (Chuo), Division (Daraja), Location (Mahali), Major you want (Fani unayotaka), Roster need at your position (Hitaji la wachezaji katika nafasi yako), Academic fit (Kufaa kimasomo), Cost notes (Maelezo ya gharama), Coach name and email (Jina na barua pepe ya kocha), Status (Hali). Pata majina ya makocha na taarifa za orodha ya wachezaji kutoka tovuti rasmi ya michezo ya kila chuo.",
            "Msaidizi wa AI anaweza kupendekeza vyuo vya kutafiti: \"Mimi ni kiungo wa kati wa soka mwenye urefu wa 5'9\" na GPA ya 3.5, nataka kusomea uuguzi katika eneo la Southeast. Nipendekezee vyuo 20 vyenye timu za soka katika ngazi tofauti vya kutafiti.\" Kisha kagua kila kimoja mwenyewe; orodha za AI zinaweza kuwa za zamani au zenye makosa."
          ],
          steps: ["Tengeneza jedwali lenye safuwima zilizo hapo juu.", "Muombe AI vyuo vya kutafiti.", "Kagua kurasa rasmi za michezo na za masomo za kila chuo.", "Weka alama ya kujinyoosha, kinacholingana au cha uhakika kwa kila kimoja.", "Baki na vyuo 15 vinavyokufaa kweli."],
          words: [["Orodha lengwa", "vyuo unavyopanga kuwasiliana navyo."], ["Orodha ya wachezaji (roster)", "orodha ya wachezaji wa timu; inaonyesha nani anahitimu katika nafasi yako."]],
          slides: [
            { title: "Chuo sahihi", bullets: ["Je, unaweza kucheza?", "Je, unaweza kusoma unachotaka?", "Je, unaweza kumudu gharama? Utafurahi bila michezo?"] },
            { title: "Safuwima za jedwali", bullets: ["Chuo, Daraja, Mahali, Fani", "Hitaji la wachezaji, Kufaa kimasomo, Gharama", "Mawasiliano ya kocha, Hali"] },
            { title: "AI inapendekeza, wewe unakagua", bullets: ["Omba vyuo vya kutafiti", "Kagua kurasa rasmi", "Kujinyoosha, kinacholingana, cha uhakika"] }
          ],
          tryIt: "Tengeneza jedwali la orodha yako lengwa. Tumia AI kupata mawazo, kagua vyuo kumi kwenye tovuti zao rasmi, na uweke alama ya kujinyoosha, kinacholingana au cha uhakika kwa kila kimoja.",
          youCanNow: "kujenga na kukagua orodha ya vyuo lengwa yenye uwiano.",
          quickCheck: [
            { objective: "O2", q: "Chuo cha \"uhakika\" (likely) katika orodha yako lengwa ni kipi?", options: ["Chuo kigumu sana kufikia", "Chuo ambapo ungechangia waziwazi", "Chuo kisicho na timu ya mchezo wako", "Chuo cha ndoto yako tu"], answer: 1, why: "Vyuo vya uhakika ni pale ambapo ungechangia waziwazi." },
            { objective: "O2", q: "AI inaorodhesha chuo ambacho hujawahi kukisikia. Unafanya nini?", options: ["Unakiongeza bila kukagua", "Unafuta orodha yote", "Unamtumia kocha barua pepe mara moja", "Unakagua kwanza kurasa zake rasmi za michezo na za masomo"], answer: 3, why: "Orodha za AI zinaweza kuwa za zamani au zenye makosa, kwa hiyo kagua kila chuo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wasifu wako wa kuajiriwa na video ya vivutio",
          minutes: 6,
          goal: "Tengeneza wasifu wa kuajiriwa wa ukurasa mmoja na upange video ya vivutio ya dakika mbili hadi nne.",
          text: [
            "Wasifu wa kuajiriwa ni ukurasa mmoja: jina, mwaka wa kuhitimu, nafasi unayocheza, urefu na uzito (wa kweli), shule ya sekondari na timu ya klabu, takwimu muhimu, taarifa za masomo (GPA, alama za mitihani kama unazo, fani unayokusudia), tuzo, mawasiliano ya makocha wako, kiungo cha video yako ya vivutio, na barua pepe yako.",
            "Video ya vivutio inapaswa kuwa fupi, mara nyingi dakika mbili hadi nne, na vipande vyako bora katika sekunde 30 za kwanza. Jionyeshe kabla ya kila kipande kwa mshale au duara. Ongeza kiungo cha mechi nzima kama makocha wa mchezo wako hupenda kuiona. Muulize kocha wako makocha wa mchezo wako wanatarajia nini.",
            "AI inaweza kukusaidia kuandika wasifu kutoka kwa maelezo yako na kupanga orodha ya vipande vyako. Kila takwimu lazima iwe ya kweli na inayoweza kuthibitishwa; makocha hukagua na makocha wako. Usiweke taarifa za faragha kama anwani ya nyumbani katika wasifu."
          ],
          steps: ["Kusanya takwimu, alama na tuzo zako za kweli.", "Muombe AI apange wasifu wa ukurasa mmoja.", "Chagua vipande vyako bora na uweke vile vya juu mwanzoni.", "Jiwekee alama kabla ya kila kipande.", "Muombe kocha wako apitie vyote viwili."],
          words: [["Wasifu wa kuajiriwa", "muhtasari wa ukurasa mmoja kukuhusu kama mwanamichezo na mwanafunzi kwa makocha wa vyuo."], ["Video ya vivutio (highlight video)", "video fupi ya michezo yako bora."]],
          slides: [
            { title: "Wasifu wa ukurasa mmoja", bullets: ["Mwaka wa kuhitimu, nafasi, urefu na uzito wa kweli", "Takwimu, GPA, fani unayokusudia", "Mawasiliano ya kocha, kiungo cha video, barua pepe yako"] },
            { title: "Video ya vivutio", bullets: ["Mara nyingi dakika 2-4", "Vipande bora katika sekunde 30 za kwanza", "Jiwekee alama kabla ya kila kipande"] },
            { title: "Ukweli na usalama", bullets: ["Makocha hukagua takwimu", "Hakuna anwani ya nyumbani", "Kocha anaipitia"] }
          ],
          tryIt: "Tumia AI kugeuza maelezo yako kuwa wasifu wa ukurasa mmoja. Andika orodha ya vipande vyako na vitano bora vikiwa mwanzoni, na umuombe kocha wako apitie vyote viwili.",
          youCanNow: "kutengeneza wasifu wa kweli wa kuajiriwa na mpango imara wa video ya vivutio.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini ujiwekee alama kabla ya kila kipande?", options: ["Ili makocha wajue wewe ni mchezaji yupi", "Ili video iwe ndefu zaidi", "Ili kuficha namba yako", "Kwa sababu muziki unalazimisha"], answer: 0, why: "Mshale au duara huwasaidia makocha kukuona mara moja." },
            { objective: "O3", q: "Muda wako wa yadi 40 ulioandika ni wa kasi zaidi kuliko uliowahi kukimbia. Unafanya nini?", options: ["Unauacha; makocha hawatakagua", "Unaondoa takwimu hiyo kabisa", "Unaubadilisha kuwa muda wako wa kweli unaoweza kuthibitishwa", "Unaupunguza zaidi kidogo"], answer: 2, why: "Kila takwimu lazima iwe ya kweli; makocha hukagua na makocha wako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa kuajiriwa",
        questions: [
          { objective: "O1", q: "Unapanga kucheza NCAA Division I. Unajisajili wapi kwa ajili ya ustahiki?", options: ["App ya mitandao ya kijamii", "Gym yako", "NCAA Eligibility Center", "Hakuna mahali"], answer: 2, why: "Wanamichezo wa DI na DII wanahitaji akaunti ya uthibitisho ya Eligibility Center." },
          { objective: "O1", q: "Unapaswa kukagua wapi lini makocha wanaweza kuwasiliana nawe?", options: ["ncaa.org na kocha wa shule yako au mshauri wa shule", "Chatbot ya AI tu", "Makala ya miaka 5 iliyopita", "Mpinzani"], answer: 0, why: "Sheria zinategemea mchezo na daraja, na hubadilika mara kwa mara." },
          { objective: "O2", q: "Orodha lengwa yenye uwiano ina:", options: ["Programu 5 bora tu", "Chuo kimoja tu", "Vyuo ambavyo hujavikagua", "Vyuo vya kujinyoosha, vinavyolingana na vya uhakika"], answer: 3, why: "Mchanganyiko unakupa chaguo halisi." },
          { objective: "O2", q: "AI inapendekeza chuo ambacho timu yake ilifutwa. Nini kilikosewa?", options: ["Hakuna kitu", "Orodha za AI zinaweza kuwa za zamani; kagua kwenye kurasa rasmi", "Chuo kinaficha jambo hilo", "Unapaswa kuomba hata hivyo"], answer: 1, why: "Daima kagua tovuti rasmi." },
          { objective: "O3", q: "Vipande vyako bora viwe wapi katika video ya vivutio?", options: ["Mwisho kabisa", "Katika sekunde 30 za kwanza", "Katikati", "Vimefichwa"], answer: 1, why: "Makocha huamua haraka." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwasiliana na makocha na kubaki na mpangilio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika barua pepe binafsi kwa makocha kwa AI",
          minutes: 6,
          goal: "Andika barua pepe fupi na binafsi ya kujitambulisha kwa kocha wa chuo.",
          text: [
            "Makocha hupokea barua pepe nyingi. Fupi na binafsi hushinda. Weka: kichwa cha barua chenye mwaka wa kuhitimu, nafasi na taarifa muhimu (\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\"); kwa nini unavutiwa na chuo chao hasa; takwimu zako muhimu na masomo; kiungo cha video yako ya vivutio na wasifu; ratiba yako ijayo (mashindano, showcases); na mawasiliano ya kocha wako.",
            "Muombe msaidizi wa AI: \"Niandikie barua pepe fupi kwa kocha mkuu wa soka wa [chuo]. Tumia wasifu wangu ulio hapa chini. Taja kwamba ninavutiwa na programu yao ya uuguzi na mtindo wao wa kumiliki mpira. Chini ya maneno 150.\" Kisha ifanye kuwa yako na ukague kila undani.",
            "Tuma kutoka barua pepe rasmi unayoiangalia kila siku. Usitume kamwe barua pepe ileile kwa kila chuo; makocha hutambua. Itume wewe mwenyewe, si wazazi wako, na ufuatilie kwa heshima baada ya wiki kadhaa ukiwa na taarifa mpya, kama video mpya ya vivutio."
          ],
          steps: ["Andika kichwa cha barua kilicho wazi.", "Muombe AI rasimu chini ya maneno 150 ukitumia wasifu wako.", "Ongeza sababu moja ya kweli na mahususi kwa chuo hicho.", "Kagua kila undani na jina la kocha.", "Tuma kutoka barua pepe yako rasmi; fuatilia ukiwa na taarifa mpya."],
          words: [["Kichwa cha barua (subject line)", "jina fupi la barua pepe; kitu cha kwanza kocha anachokiona."], ["Showcase", "tukio ambapo wanamichezo hucheza mbele ya makocha wa vyuo."]],
          slides: [
            { title: "Fupi na binafsi", bullets: ["Kichwa: mwaka wa kuhitimu, nafasi, taarifa muhimu", "Kwa nini chuo hiki hasa", "Takwimu, masomo, kiungo cha video"] },
            { title: "AI inaandaa rasimu, wewe unaifanya binafsi", bullets: ["Chini ya maneno 150", "Sababu moja ya kweli kwa chuo hicho", "Kagua jina la kocha"] },
            { title: "Ituma ipasavyo", bullets: ["Barua pepe rasmi, inayoangaliwa kila siku", "Unaituma wewe, si wazazi wako", "Fuatilia ukiwa na taarifa mpya"] }
          ],
          tryIt: "Andika barua pepe kwa makocha watatu katika orodha yako kwa msaada wa AI. Fanya kila moja iwe binafsi na umuombe kocha wako au mzazi asome moja kabla ya kuituma.",
          youCanNow: "kuandika barua pepe fupi na binafsi kwa kocha wa chuo.",
          quickCheck: [
            { objective: "O4", q: "Kichwa cha barua pepe kwa kocha kinapaswa kuwa na nini?", options: ["\"Habari kocha\"", "Mwaka wa kuhitimu, nafasi na taarifa muhimu", "Majina ya wazazi wako", "\"Tafadhali soma\""], answer: 1, why: "Kichwa kilicho wazi chenye mwaka wa kuhitimu, nafasi na taarifa muhimu hutambuliwa." },
            { objective: "O4", q: "Wiki mbili baada ya barua pepe yako, hakuna jibu. Unafanya nini?", options: ["Unatuma barua pepe ileile tena", "Unamwambia mzazi wako ampigie kocha simu", "Unakata tamaa na chuo hicho", "Unafuatilia kwa heshima ukiwa na taarifa mpya, kama video mpya ya vivutio"], answer: 3, why: "Fuatilia kwa heshima baada ya wiki kadhaa ukiwa na kitu kipya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufuatilia kuajiriwa kwako kama mradi",
          minutes: 5,
          goal: "Fuatilia kila mawasiliano na hatua inayofuata katika jedwali lako la kuajiriwa.",
          text: [
            "Ongeza safuwima za kufuatilia kwenye orodha yako lengwa: Tarehe ya kuwasiliana, Jibu (ndiyo/hapana), Walichosema, Hatua inayofuata, Tarehe ya hatua inayofuata. Lisasishe kila wiki.",
            "Angalia dalili za nia ya kweli: majibu binafsi, maswali kuhusu alama zako, mialiko ya kambi (camps) au ziara, au kocha akija kukutazama ukicheza. Tangazo la jumla la kambi si sawa na nia binafsi.",
            "Kuajiriwa kunaweza kuleta msongo. Weka shule na mazoezi kwanza. Kuwa mwangalifu na \"huduma za kuajiri\" zinazohakikisha ufadhili wa masomo (scholarship) kwa malipo; kagua na kocha wa shule yako na mshauri wa shule kabla ya kumlipa mtu yeyote."
          ],
          steps: ["Ongeza safuwima za kufuatilia kwenye jedwali lako.", "Andika kila barua pepe, jibu na simu.", "Andika hatua inayofuata na tarehe yake.", "Sasisha kila wiki.", "Kagua huduma yoyote ya kuajiri ya kulipia na kocha wako kwanza."],
          words: [["Ufuatiliaji (follow-up)", "ujumbe unaofuata wa heshima wenye taarifa mpya."], ["Huduma ya kuajiri", "kampuni inayotoza pesa kukusaidia kujitangaza kwa vyuo."]],
          slides: [
            { title: "Fuatilia kila kitu", bullets: ["Tarehe ya kuwasiliana, jibu, walichosema", "Hatua inayofuata na tarehe", "Sasisha kila wiki"] },
            { title: "Nia ya kweli", bullets: ["Majibu binafsi", "Maswali kuhusu alama", "Mialiko ya kambi au ziara"] },
            { title: "Baki na uwiano", bullets: ["Shule na mazoezi kwanza", "Usilipe ada za ufadhili \"uliohakikishwa\"", "Kagua na kocha wako kwanza"] }
          ],
          tryIt: "Ongeza safuwima za kufuatilia kwenye jedwali lako na uandike barua pepe zako tatu, kila moja na hatua inayofuata na tarehe yake.",
          youCanNow: "kufuatilia mawasiliano ya kuajiri na hatua zinazofuata kama mradi.",
          quickCheck: [
            { objective: "O5", q: "Ni safuwima gani ya kufuatilia inayokusaidia kukumbuka la kufanya?", options: ["Hatua inayofuata na tarehe ya hatua inayofuata", "Rangi unayoipenda", "Nembo ya timu", "Rekodi ya timu"], answer: 0, why: "Hatua inayofuata na tarehe yake huendeleza mchakato wako wa kuajiriwa." },
            { objective: "O5", q: "Unapokea tangazo la jumla la kambi kutoka chuo. Linamaanisha nini?", options: ["Umepata ufadhili wa masomo", "Si sawa na nia binafsi", "Lazima uhudhurie", "Kocha ameona video yako"], answer: 1, why: "Majibu binafsi na maswali huonyesha nia ya kweli; tangazo la jumla halionyeshi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kwa makocha: maelezo ya usakaji ya haki na yenye mpangilio",
          minutes: 5,
          goal: "Panga maelezo ya usakaji kuhusu wachezaji kwa njia ya haki na isiyobadilika.",
          text: [
            "Makocha wanaosaka na kupendekeza wachezaji wanaweza kutumia zana hizi hizi. Tengeneza jedwali lenye vigezo vilevile kwa kila mchezaji: ujuzi wa nafasi, uwezo wa mwili, uelewa wa mchezo, utayari wa kufundishwa, masomo, na maelezo ya tabia kutoka vyanzo vilivyothibitishwa.",
            "Tumia kipimo rahisi cha 1 hadi 5 chenye maelezo ya maandishi kwa kila namba, ili alama ziwe na maana ileile kwa wakaguzi wote. AI inaweza kufupisha maelezo yako ya maandishi kuwa ripoti fupi, lakini hakikisha alama zinatokana na ulichoona, si makisio ya AI.",
            "Linda faragha ya wachezaji: wengi ni watoto chini ya miaka 18. Weka maelezo katika sehemu za faragha zilizoidhinishwa, usibandike taarifa binafsi katika zana za AI, fuata sheria za kuajiri za shirika lako, na jihadhari na upendeleo, kama kuhukumu kwa umbo peke yake au kwa ubora wa video ya vivutio badala ya uwezo."
          ],
          steps: ["Tumia vigezo vilevile kwa kila mchezaji.", "Eleza kila namba katika kipimo cha 1-5.", "Andika maelezo kutokana na ulichoona.", "Tumia AI kufupisha maelezo, si kutoa alama.", "Weka taarifa kwa faragha; kagua upendeleo."],
          words: [["Rubriki (rubric)", "mwongozo wa kutoa alama unaoeleza maana ya kila alama."], ["Utayari wa kufundishwa (coachability)", "jinsi mchezaji anavyosikiliza na kutumia maoni."]],
          slides: [
            { title: "Vigezo vilevile kwa wote", bullets: ["Ujuzi, uwezo wa mwili, uelewa wa mchezo", "Utayari wa kufundishwa, masomo, tabia"] },
            { title: "Rubriki ya 1-5 iliyo wazi", bullets: ["Eleza kila namba", "Alama kutokana na ulichoona", "AI inafupisha, haitoi alama"] },
            { title: "Haki na faragha", bullets: ["Wachezaji wengi ni watoto chini ya miaka 18", "Hakuna taarifa binafsi katika AI", "Jihadhari na upendeleo"] }
          ],
          tryIt: "Kazi ya mwisho: wanamichezo, malizeni jedwali lenu la vyuo 15, wasifu, mpango wa video ya vivutio na barua pepe tatu kwa makocha, pamoja na maelezo ya akaunti yenu ya ustahiki na mahali mlipokagua sheria. Makocha: jengeni rubriki ya 1-5 yenye maelezo kwa vigezo vitano.",
          youCanNow: "kupanga kazi ya kuajiriwa au ya usakaji kwa uwazi, ukweli na haki.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini uandike maelezo kwa kila namba katika kipimo cha 1 hadi 5?", options: ["Ili alama ziwe na maana ileile kwa wakaguzi wote", "Ili jedwali liwe refu zaidi", "Ili AI iweze kuwapa wachezaji alama", "Ili kupanga wachezaji kwa urefu"], answer: 0, why: "Namba zilizoelezwa huweka alama zisizobadilika kati ya makocha." },
            { objective: "O6", q: "Mchezaji ni mfupi lakini anacheza kwa akili na anashinda kila pambano. Unampa alama gani ya uelewa wa mchezo?", options: ["Ya chini, kwa sababu ya urefu", "Unamruka mchezaji huyo", "Kulingana na ulichoona, si umbo", "Kulingana na ubora wa video"], answer: 2, why: "Kuhukumu kwa umbo peke yake ni aina ya upendeleo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwasiliana na makocha na kubaki na mpangilio",
        questions: [
          { objective: "O4", q: "Ni kichwa kipi cha barua kilicho bora kwa barua pepe kwa kocha?", options: ["\"Habari\"", "\"Tafadhali soma!!!\"", "Tupu", "\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\""], answer: 3, why: "Kinatoa taarifa muhimu kwa kutazama mara moja." },
          { objective: "O4", q: "Nani anapaswa kutuma barua pepe kwa makocha wa vyuo?", options: ["Mwanamichezo", "Wazazi tu", "Mgeni", "Roboti ya AI moja kwa moja"], answer: 0, why: "Makocha wanataka kusikia kutoka kwa mwanamichezo." },
          { objective: "O5", q: "Ipi ni dalili ya nia ya kweli?", options: ["Tangazo la kambi kwa watu wengi", "Like kwenye mitandao ya kijamii", "Jibu binafsi linalouliza kuhusu alama zako", "Hakuna kitu"], answer: 2, why: "Maswali binafsi huonyesha nia ya kweli." },
          { objective: "O5", q: "Huduma inahakikisha ufadhili wa masomo kwa malipo. Unapaswa:", options: ["Kulipa mara moja", "Kutoa nenosiri lako", "Kusaini bila kusoma", "Kukagua kwanza na kocha wa shule yako na mshauri wa shule"], answer: 3, why: "Hakuna anayeweza kuhakikisha ufadhili wa masomo." },
          { objective: "O6", q: "Kwa makocha, AI inapaswa kutumika:", options: ["Kutoa alama kwa wachezaji ambao haijawaona", "Kufupisha maelezo ya maandishi, si kutoa alama", "Kuhifadhi taarifa za faragha za watoto", "Kuchukua nafasi ya tathmini"], answer: 1, why: "Alama zinatokana na alichoona kocha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kusakwa na Kuajiriwa Michezoni kwa AI",
    questions: [
      { objective: "O1", q: "Lipi ni shirika la michezo ya vyuo?", options: ["NFL", "Chapa ya viatu", "NAIA", "App ya kijamii"], answer: 2, why: "NAIA ni chama cha michezo ya vyuo." },
      { objective: "O1", q: "NCAA Eligibility Center inakagua:", options: ["Masomo na hadhi ya ridhaa", "Idadi ya wafuasi wako", "Urefu wako tu", "Muziki unaoupenda"], answer: 0, why: "Inathibitisha ustahiki." },
      { objective: "O1", q: "Wanafunzi wadogo na wanamichezo wa DIII wanaweza kuanza na:", options: ["Profile Page", "Hakuna kitu", "Huduma ya kulipia", "Majaribio ya timu"], answer: 0, why: "Eligibility Center inaeleza Profile Page kwa ajili yao." },
      { objective: "O1", q: "Sheria za mawasiliano ya kuajiri zinategemea:", options: ["Ukubwa wa kiatu chako", "Hali ya hewa", "Mchezo na daraja", "Timu unayoipenda"], answer: 2, why: "Sheria hutofautiana kwa mchezo na ngazi." },
      { objective: "O1", q: "Nani anakusaidia kuweka masomo ya msingi katika njia sahihi?", options: ["Mpinzani", "Mshauri wa shule yako", "Mshawishi wa mitandaoni", "Hakuna mtu"], answer: 1, why: "Washauri wa shule wanajua masharti ya masomo." },
      { objective: "O2", q: "Chuo cha \"kujinyoosha\" (reach) ni:", options: ["Kitu cha uhakika", "Kimefungwa", "Shule ya msingi ya juu", "Kigumu kidogo kwako kufikia"], answer: 3, why: "Vyuo vya kujinyoosha ni vigumu zaidi kuingia au kuchezea." },
      { objective: "O2", q: "Unapata wapi barua pepe halisi ya kocha?", options: ["Kwa kubahatisha", "Kwa AI", "Tovuti rasmi ya michezo ya chuo", "Ukurasa wa mashabiki"], answer: 2, why: "Tovuti rasmi ziko za sasa." },
      { objective: "O2", q: "Kwa nini ukague orodha ya wachezaji (roster)?", options: ["Kunakili wasifu wao", "Kuwatumia wachezaji ujumbe", "Haina faida", "Kuona nani anahitimu katika nafasi yako"], answer: 3, why: "Mahitaji ya wachezaji yanaathiri nafasi zako." },
      { objective: "O3", q: "Urefu na uzito katika wasifu wako vinapaswa kuwa:", options: ["Vya kweli", "Vimeongezwa sana", "Visiwekwe kamwe", "Vya kubahatisha"], answer: 0, why: "Makocha hukagua." },
      { objective: "O3", q: "Video ya vivutio mara nyingi ni ya:", options: ["Dakika 30", "Dakika 2-4", "Sekunde 5", "Saa mbili"], answer: 1, why: "Fupi na iliyolenga hufanya kazi vizuri zaidi." },
      { objective: "O3", q: "Kabla ya kila kipande, unapaswa:", options: ["Kuongeza muziki wa sauti kubwa tu", "Kuonyesha umati", "Kujiwekea alama kwa mshale au duara", "Kukiruka"], answer: 2, why: "Makocha wanahitaji kujua ni mchezaji yupi ni wewe." },
      { objective: "O3", q: "Kipi HAKIPASWI kuwa katika wasifu wako?", options: ["Anwani yako ya nyumbani", "Mwaka wako wa kuhitimu", "Kiungo cha video yako", "Mawasiliano ya kocha wako"], answer: 0, why: "Usiweke taarifa za faragha." },
      { objective: "O4", q: "Barua pepe nzuri kwa kocha iko chini ya takriban:", options: ["Maneno 1,000", "Maneno 5", "Hakuna kikomo", "Maneno 150"], answer: 3, why: "Barua pepe fupi husomwa." },
      { objective: "O4", q: "Kutuma barua pepe ileile kwa kila chuo:", options: ["Ni bora zaidi", "Makocha hutambua; fanya kila moja iwe binafsi", "Ni lazima", "Huleta majibu mengi zaidi"], answer: 1, why: "Barua pepe binafsi hujitokeza." },
      { objective: "O4", q: "Ufuatiliaji unapaswa kuwa na:", options: ["Barua pepe ileile tena", "Taarifa mpya, kama video mpya ya vivutio", "Malalamiko", "Hakuna kitu"], answer: 1, why: "Taarifa mpya hutoa sababu ya kujibu." },
      { objective: "O4", q: "Showcase ni:", options: ["Kabati la vikombe", "Duka", "Kipindi cha TV", "Tukio ambapo wanamichezo hucheza mbele ya makocha"], answer: 3, why: "Showcases huwasaidia makocha kukuona." },
      { objective: "O5", q: "Unapaswa kusasisha jedwali lako la kuajiriwa mara ngapi?", options: ["Kila wiki", "Mara moja kwa mwaka", "Kamwe", "Baada ya kusaini tu"], answer: 0, why: "Kila wiki huweka hatua zinazofuata kwa wakati." },
      { objective: "O5", q: "Nini kinakuja kwanza wakati wa kuajiriwa?", options: ["Mitandao ya kijamii", "Huduma za kulipia", "Shule na mazoezi", "Uvumi"], answer: 2, why: "Alama na uchezaji ndivyo muhimu zaidi." },
      { objective: "O6", q: "Rubriki ni:", options: ["Aina ya zoezi", "Kiatu", "Kombe", "Mwongozo wa kutoa alama unaoeleza kila alama"], answer: 3, why: "Inaweka alama zisizobadilika." },
      { objective: "O6", q: "Kuhukumu wachezaji kwa ubora wa video badala ya uwezo ni:", options: ["Haki", "Aina ya upendeleo", "Lazima", "Njia bora"], answer: 1, why: "Usakaji wa haki huangalia uwezo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      5,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maelezo ya ustahiki na sheria",
        objective: "O1",
        notYet: "Hakuna akaunti ya ustahiki iliyotajwa, au sheria zimechukuliwa kutoka AI au makala za zamani.",
        meets: "Inataja akaunti ya ustahiki inayohitajika na chanzo rasmi ambapo sheria za kuajiri zilikaguliwa.",
        exceeds: "Inajumuisha ukaguzi wa masomo ya msingi na alama uliofanywa na mshauri wa shule."
      },
      {
        name: "Orodha lengwa",
        objective: "O2",
        notYet: "Vyuo chini ya 15, hakuna mchanganyiko wa kujinyoosha, kinacholingana na cha uhakika, au taarifa hazijakaguliwa.",
        meets: "Vyuo 15 vyenye safuwima zote, vilivyowekwa alama ya kujinyoosha, kinacholingana au cha uhakika, vimekaguliwa kwenye kurasa rasmi.",
        exceeds: "Inaandika mahitaji ya wachezaji katika nafasi ya mwanamichezo na gharama kwa kila chuo."
      },
      {
        name: "Wasifu na video ya vivutio",
        objective: "O3",
        notYet: "Takwimu zisizo za kweli, taarifa za faragha, au vipande bora vimefichwa mwishoni mwa video.",
        meets: "Wasifu wa kweli wa ukurasa mmoja na video ya dakika 2 hadi 4 yenye vipande bora mwanzoni na mwanamichezo akiwa amewekewa alama, iliyopitiwa na kocha.",
        exceeds: "Inaongeza kiungo cha mechi nzima kama makocha wa mchezo huo hukitarajia na inaweka wasifu ukiwa wa sasa."
      },
      {
        name: "Barua pepe kwa makocha",
        objective: "O4",
        notYet: "Za jumla, ndefu, au zimetumwa na mzazi.",
        meets: "Barua pepe tatu binafsi chini ya maneno 150 zenye vichwa vilivyo wazi na sababu ya kweli kwa kila chuo, zilizotumwa na mwanamichezo.",
        exceeds: "Kila moja ina ratiba ijayo na mawasiliano ya kocha, na tarehe za ufuatiliaji zimeandikwa."
      },
      {
        name: "Ufuatiliaji",
        objective: "O5",
        notYet: "Hakuna safuwima za kufuatilia wala hatua zinazofuata.",
        meets: "Kila mawasiliano yameandikwa pamoja na jibu, hatua inayofuata na tarehe.",
        exceeds: "Limesasishwa kila wiki kwa mwezi mmoja, na dalili za nia ya kweli zimeandikwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza mpango wa kuajiriwa na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi walio na akaunti sahihi ya ustahiki iliyoandaliwa (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti majibu binafsi, mialiko ya kambi au ziara kutoka kwa makocha wa vyuo",
      "Wanafunzi wanaojiunga na programu ya chuo, na wale wanaoripoti kuepuka huduma ya kulipia iliyohakikisha matokeo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Akaunti ya Google ya bure kwa ajili ya Google Sheets",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Video za mechi na programu ya bure ya kuhariri video",
      "Nakala ya matokeo yako ya shule (transcript), takwimu za kweli na mawasiliano ya makocha wako",
      "Kama dakika 60 za masomo pamoja na muda wa kujenga wasifu na video"
    ],
    facilitatorNotes: [
      "Mwalike mshauri wa shule aeleze masomo ya msingi na akaunti za ustahiki; usitoe maamuzi ya ustahiki wewe mwenyewe.",
      "Waambie wanafunzi wakague sheria za mawasiliano ya kuajiri kwenye ncaa.org au tovuti ya NAIA wakati wa kipindi; sheria hubadilika mara kwa mara.",
      "Washirikishe wazazi au walezi, lakini hakikisha wanamichezo wanaandika na kutuma barua pepe zao wenyewe kwa makocha.",
      "Waonye familia kuhusu huduma za kulipia zinazohakikisha ufadhili wa masomo na uwaambie wakague na kocha au mshauri wa shule kabla ya kulipa.",
      "Kwa makocha wanaotumia Somo la 6, wekeni maelezo ya wachezaji kwa faragha, tumieni vigezo vilevile kwa kila mtu na pitieni alama kwa ajili ya upendeleo."
    ]
  }
};
