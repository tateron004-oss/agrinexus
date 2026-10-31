"use strict";

// Koach Learn course (Swahili translation of youth/youth-ai-career-exploration.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-career-exploration-sw",
  lang: "sw",
  translationOf: "youth-ai-career-exploration",
  category: "Youth",
  name: "AI na Kuchunguza Taaluma",
  skills: "Kupata taaluma zinazolingana na mambo unayopenda, Kutafiti taaluma kwa vyanzo rasmi, Kuona jinsi AI inavyobadilisha kazi, Kuandaa mpango wa njia ya taaluma, Kujiandaa kwa kazi ya kwanza",
  outcome: "kutumia jaribio la bure la mambo unayopenda, msaidizi wa AI na tovuti rasmi za taaluma kuchagua taaluma mbili zinazokufaa, kukagua mshahara, mafunzo na matarajio ya ajira yake, na kuandaa mpango wa hatua kwa hatua kutoka sekondari hadi kazi yako ya kwanza katika fani hiyo.",
  about: [
    "Kozi hii ni ya vijana wa umri wa kama miaka 13 hadi 18 wanaojiuliza \"Ninaweza kuwa nini?\" Huhitaji kujua bado. Kozi hii inakusaidia kuchunguza.",
    "Utafanya jaribio la bure la mambo unayopenda, utatumia AI kupata mawazo ya taaluma zinazolingana na unachopenda (michezo ya video, muziki, michezo, kusaidia watu, kujenga vitu), utakagua ukweli kwenye tovuti rasmi za serikali za taaluma, utaona jinsi AI inavyobadilisha kazi, na utajenga mpango unaoweza kuanza mwaka huu.",
    "Kagua sheria ya umri ya kila zana na sheria za shule yako kuhusu AI, na mshirikishe mzazi au mlezi kabla ya kujisajili kwa chochote. Mshauri wa shule ni mshirika mzuri kwa kozi hii pia. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\"."
  ],
  finalTask: "Andaa mpango wa taaluma wa ukurasa mmoja kwa taaluma moja unayotaka kuijua: kwa nini inalingana na mambo unayopenda, mafunzo yake ya kawaida, mshahara na matarajio ya ajira kutoka tovuti rasmi, njia moja AI inavyotumika katika kazi hiyo, na hatua tatu unazoweza kuchukua mwaka huu wa shule (somo, klabu au shughuli, na mtu wa kuzungumza naye).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana wa umri wa kama miaka 13 hadi 18 nchini Marekani wanaojiuliza wanaweza kuwa nini, wakiwemo wale ambao bado hawajui kabisa na wale wanaofikiria ufundi, chuo au kazi ya kwanza.",
    startingPoint: "Wanajua baadhi ya mambo wanayofurahia na huenda wana wazo la kazi ya muda mfupi, lakini mara chache wametumia jaribio la mambo wanayopenda, tovuti rasmi ya taaluma au mpango wa hatua kwa hatua. Wengi wanachukua habari za taaluma kutoka kwa marafiki, mitandao ya kijamii au AI bila kukagua.",
    gap: "Bila habari halisi, vijana huchagua au kukataa taaluma kwa kubahatisha kuhusu mshahara na mafunzo, na hukosa masomo na programu wanazoweza kuanza sasa. Kujifunza kuchunguza kwa AI na kukagua tovuti rasmi kunawasaidia kuchagua mwelekeo na kuchukua hatua halisi mwaka huu wa shule.",
    constraints: [
      "Mipaka ya umri na ushiriki wa mzazi au mlezi kwa akaunti mpya, kazi na kujitolea",
      "Sheria za shule kuhusu AI; mshauri wa shule ni mshirika muhimu",
      "Mshahara, mafunzo na sheria za kazi kwa vijana hubadilika na hutofautiana kwa kila jimbo; wanafunzi wanakagua tovuti rasmi",
      "Faragha: hakuna anwani, namba ya simu wala taarifa nyingine binafsi katika zana za AI",
      "Vifaa: simu, kompyuta ya shule au kompyuta ya maktaba; masomo mafupi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia jaribio la bure la mambo unayopenda kama lile la mynextmove.org", action: "kuorodhesha maeneo yako makuu ya kupenda na shughuli tatu unazofurahia zaidi", standard: "ukijibu jaribio kwa uaminifu na kuandika matokeo" },
    { id: "O2", condition: "Ukipewa mambo unayopenda na msaidizi wa AI unaoruhusiwa kutumia", action: "kutengeneza orodha ya taaluma zenye njia tofauti za mafunzo na kuchagua mbili za kutafiti", standard: "bila kutoa taarifa binafsi na ukiichukulia orodha kama mawazo ya kukagua" },
    { id: "O3", condition: "Kwa kila moja ya taaluma zako mbili", action: "kutafuta mshahara wa kawaida, mafunzo na matarajio ya ajira kwenye bls.gov/ooh au mynextmove.org", standard: "ukiamini tovuti rasmi kila inapotofautiana na AI" },
    { id: "O4", condition: "Kwa taaluma moja unayoipenda", action: "kueleza njia moja AI inavyotumika katika kazi hiyo na stadi mbili za kibinadamu ambazo bado ni muhimu", standard: "ukiwa umekagua na mtu halisi au chanzo cha kuaminika" },
    { id: "O5", condition: "Ukipewa darasa lako na taaluma unayolenga", action: "kupanga njia ya hatua kwa hatua kutoka sasa hadi kazi ya kwanza, yenye hatua tatu za mwaka huu wa shule", standard: "angalau hatua moja ikiwa imekaguliwa na mshauri wako au tovuti rasmi" },
    { id: "O6", condition: "Kabla ya kazi ya kwanza, kujitolea au kufuatilia mfanyakazi kazini", action: "kukagua sheria za kazi kwa vijana za serikali kuu na za jimbo na kuandika maelezo ya sentensi tatu kukuhusu", standard: "ukifuata sheria iliyo kali zaidi na ukifanya mazoezi ya kuyasema kwa sauti" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata taaluma zinazokufaa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuanza na mambo unayopenda",
          minutes: 5,
          goal: "Fanya jaribio la bure la mambo unayopenda na uorodheshe mambo yako makuu ya kupenda.",
          text: [
            "Utafutaji mzuri wa taaluma unaanza na wewe: unachofurahia, unachokiweza vizuri na kilicho muhimu kwako. Labda unapenda kutengeneza vitu, kuchora, kupanga matukio, kuwasaidia marafiki na matatizo yao, au kugundua jinsi mchezo wa video unavyofanya kazi.",
            "My Next Move ni tovuti ya bure ya taaluma kutoka Wizara ya Kazi ya Marekani (U.S. Department of Labor). Jaribio lake la mambo unayopenda (interest profiler) linakuuliza kuhusu aina za kazi unazoweza kufurahia na linapendekeza taaluma zinazolingana. Mshauri wako wa shule anaweza kuwa na majaribio mengine pia.",
            "Andika matokeo yako na shughuli tatu unazofurahia zaidi. Hizi ndizo dalili zako za kuanzia."
          ],
          steps: ["Nenda mynextmove.org.", "Fungua interest profiler na ujibu kwa uaminifu.", "Andika maeneo yako makuu ya kupenda.", "Ongeza shughuli tatu unazofurahia zaidi."],
          words: [["Interest profiler", "jaribio linalolinganisha unachopenda na aina za kazi."], ["Taaluma", "aina ya kazi unayofanya kwa muda mrefu, mara nyingi ujuzi wako ukiendelea kukua."]],
          sources: [{ name: "My Next Move (U.S. Department of Labor)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Anza na wewe", bullets: ["Unachofurahia", "Unachokiweza vizuri", "Kilicho muhimu kwako"] },
            { title: "Fanya jaribio la bure la mambo unayopenda", bullets: ["My Next Move (mynextmove.org)", "Bure, kutoka Wizara ya Kazi ya Marekani", "Mshauri wako anaweza kuwa na mengine"] },
            { title: "Andika dalili zako", bullets: ["Maeneo yako makuu ya kupenda", "Shughuli tatu unazozipenda sana"] }
          ],
          tryIt: "Fanya interest profiler kwenye mynextmove.org (au jaribio ambalo mshauri wako anakupa). Andika maeneo yako makuu ya kupenda na mambo matatu unayopenda kufanya.",
          youCanNow: "kueleza mambo unayopenda kwa njia inayokusaidia kutafuta taaluma.",
          quickCheck: [
            { objective: "O1", q: "Hatua ya kwanza katika utafutaji mzuri wa taaluma ni ipi?", options: ["Kuchagua kazi inayolipa zaidi", "Kuangalia unachofurahia, unachokiweza vizuri na unachojali", "Kuchagua kile marafiki zako wanachochagua", "Kuomba kazi mara moja"], answer: 1, why: "Utafutaji mzuri unaanza na wewe: mambo unayopenda, uwezo wako na maadili yako." },
            { objective: "O1", q: "Umemaliza interest profiler kwenye mynextmove.org. Unafanya nini baadaye?", options: ["Kuifunga na kusahau matokeo", "Kuirudia hadi iseme unachotaka", "Kuipa tovuti anwani ya nyumbani kwako", "Kuandika maeneo yako makuu ya kupenda na shughuli tatu unazozipenda"], answer: 3, why: "Matokeo yako na shughuli unazozipenda ndizo dalili zako za kuanzia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata mawazo ya taaluma kwa AI",
          minutes: 5,
          goal: "Tumia AI kugeuza mambo unayopenda kuwa orodha ya taaluma za kuchunguza.",
          text: [
            "Sasa mpe msaidizi wa AI unaoruhusiwa kutumia dalili zako: \"Nina miaka 15. Ninapenda michezo ya video, kuchora na kusaidia watoto wadogo. Pendekeza taaluma 10 zinazochanganya haya, kuanzia zile zinazohitaji programu fupi ya mafunzo hadi zile zinazohitaji chuo.\"",
            "Uliza maswali ya kufuatilia: \"Zipi kati ya hizi zinafanya kazi na AI?\" \"Zipi naweza kuzijaribu nikiwa sekondari?\" \"Eleza siku ya kawaida inavyokuwa katika taaluma ya 3.\"",
            "AI ni nzuri kwa mawazo lakini inaweza kukosea kuhusu mshahara, mafunzo na idadi ya ajira. Ichukulie orodha yake kama mawazo ya kukagua, si ukweli."
          ],
          steps: ["Mpe AI kundi lako la umri na mambo unayopenda (bila taarifa binafsi).", "Omba taaluma 10 zenye njia tofauti za mafunzo.", "Uliza maswali ya kufuatilia kuhusu siku ya kawaida na hatua za sekondari.", "Chagua mbili za kutafiti."],
          words: [["Njia ya mafunzo", "masomo au mazoezi unayohitaji kwa kazi, kama cheti, uanagenzi au shahada ya chuo."], ["Uanagenzi (apprenticeship)", "kazi ya kulipwa ambapo unajifunza ufundi huku ukifanya kazi."]],
          slides: [
            { title: "Mpe AI dalili zako", bullets: ["Mambo unayopenda na kundi lako la umri", "Omba taaluma 10", "Changanya njia za mafunzo mafupi na za chuo"] },
            { title: "Uliza maswali ya kufuatilia", bullets: ["\"Siku ya kawaida inakuwaje?\"", "\"Naweza kujaribu nini nikiwa sekondari?\""] },
            { title: "Mawazo, si ukweli", bullets: ["AI inaweza kukosea kuhusu mshahara na mafunzo", "Chagua taaluma mbili za kukagua"] }
          ],
          tryIt: "Mpe msaidizi wa AI mambo unayopenda na uombe taaluma 10 zenye njia tofauti za mafunzo. Uliza siku ya kawaida inavyokuwa katika mbili kati yake, kisha chagua mbili unazozipenda zaidi.",
          youCanNow: "kutumia AI kupata mawazo ya taaluma zinazolingana na mambo unayopenda.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kuichukuliaje orodha ya taaluma kutoka AI?", options: ["Kama mawazo ya kukagua", "Kama ukweli kuhusu mshahara", "Kama uamuzi wa mwisho", "Kama ofa ya kazi"], answer: 0, why: "AI ni nzuri kwa mawazo lakini inaweza kukosea kuhusu mshahara, mafunzo na idadi ya ajira." },
            { objective: "O2", q: "Unapenda muziki na kutengeneza vitu. Prompt ipi inasaidia zaidi?", options: ["\"kazi\"", "\"Nipe anwani yangu na kazi.\"", "\"Ninapenda muziki na kutengeneza vitu. Pendekeza taaluma 10 zenye njia tofauti za mafunzo.\"", "\"Kazi ipi ni bora?\""], answer: 2, why: "Kutaja mambo unayopenda na kuomba njia tofauti za mafunzo kunaleta mawazo yenye manufaa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kukagua ukweli kwenye tovuti rasmi za taaluma",
          minutes: 5,
          goal: "Tafuta mshahara, mafunzo na matarajio ya ajira ya taaluma kwenye tovuti rasmi.",
          text: [
            "Occupational Outlook Handbook kutoka Ofisi ya Takwimu za Kazi ya Marekani (U.S. Bureau of Labor Statistics, bls.gov/ooh) ni mwongozo rasmi wa bure kuhusu mamia ya kazi. Kwa kila kazi unaonyesha mshahara wa kawaida, elimu na mafunzo yanayohitajika kwa kawaida, na idadi ya ajira zinazotarajiwa siku zijazo.",
            "My Next Move pia inaonyesha watu katika kila kazi wanachofanya, ujuzi wanaotumia na mafunzo wanayohitaji. Mshahara hubadilika kadiri muda unavyopita na kutoka mahali hadi mahali, kwa hiyo daima tafuta namba za sasa badala ya kuamini namba kutoka AI au rafiki.",
            "Linganisha kile AI ilichokuambia na kile tovuti rasmi inachosema. Zinapotofautiana, amini tovuti rasmi."
          ],
          steps: ["Fungua bls.gov/ooh au mynextmove.org.", "Tafuta taaluma yako.", "Andika mshahara, mafunzo ya kawaida na matarajio ya ajira.", "Linganisha na kile AI ilisema na uamini tovuti rasmi."],
          words: [["Mshahara wa kati (median pay)", "mshahara ulio katikati: nusu ya wafanyakazi wanapata zaidi, nusu wanapata kidogo."], ["Matarajio ya ajira (job outlook)", "idadi ya ajira zinazotarajiwa siku zijazo."]],
          sources: [{ name: "Occupational Outlook Handbook (U.S. Bureau of Labor Statistics)", url: "https://www.bls.gov/ooh/" }, { name: "My Next Move (U.S. Department of Labor)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Miongozo rasmi ya taaluma", bullets: ["bls.gov/ooh: mshahara, mafunzo, matarajio ya ajira", "mynextmove.org: kazi zinazofanywa, ujuzi, mafunzo"] },
            { title: "Tafuta namba za sasa", bullets: ["Mshahara hubadilika kwa muda na kwa mahali", "Usiamini namba kutoka AI peke yake"] },
            { title: "Linganisha na uamue", bullets: ["AI dhidi ya tovuti rasmi", "Zinapotofautiana, amini tovuti rasmi"] }
          ],
          tryIt: "Tafuta taaluma zako mbili kwenye bls.gov/ooh au mynextmove.org. Andika mafunzo ya kawaida, mshahara na matarajio ya ajira kwa kila moja, na uandike jambo moja ambalo AI ilisema tofauti.",
          youCanNow: "kutafiti ukweli halisi wa taaluma kwenye tovuti rasmi.",
          quickCheck: [
            { objective: "O3", q: "Occupational Outlook Handbook kwenye bls.gov/ooh inaonyesha nini?", options: ["Maoni kuhusu michezo ya video", "Alama za shule", "Mishahara ya watu maarufu", "Mshahara wa kawaida, mafunzo na matarajio ya ajira kwa mamia ya kazi"], answer: 3, why: "Ni mwongozo rasmi wa bure wa kazi kutoka Ofisi ya Takwimu za Kazi ya Marekani." },
            { objective: "O3", q: "Rafiki anasema taaluma fulani inalipa sana, na AI inatoa namba tofauti. Unafanya nini?", options: ["Kutafuta mshahara wa sasa kwenye tovuti rasmi", "Kumwamini rafiki yako", "Kuchukua wastani wa namba hizo mbili", "Kuiamini AI"], answer: 0, why: "Mshahara hubadilika kwa muda na mahali, kwa hiyo kagua namba ya sasa kwenye tovuti rasmi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata taaluma zinazokufaa",
        questions: [
          { objective: "O1", q: "Interest profiler inafanya nini?", options: ["Inatafuta nywila yako", "Inalinganisha unachopenda na aina za kazi", "Inakupa kazi", "Inasahihisha kazi yako ya nyumbani"], answer: 1, why: "Inapendekeza taaluma kulingana na mambo unayopenda." },
          { objective: "O1", q: "Nani anatoa My Next Move?", options: ["Kampuni ya michezo ya video", "App ya mitandao ya kijamii", "Mkahawa wa shule yako", "Wizara ya Kazi ya Marekani"], answer: 3, why: "Inadhaminiwa na Wizara ya Kazi ya Marekani." },
          { objective: "O2", q: "Prompt ipi ni bora kupata mawazo ya taaluma?", options: ["\"Ninapenda michezo ya video, kuchora na kusaidia watoto. Pendekeza taaluma 10 zenye njia tofauti za mafunzo.\"", "\"kazi\"", "\"nipe kazi\"", "\"kazi ni nini\""], answer: 0, why: "Inataja mambo unayopenda na inaomba aina mbalimbali." },
          { objective: "O3", q: "AI inasema kazi fulani inalipa kiasi fulani. Unapaswa:", options: ["Kuamini", "Kumwambia kila mtu", "Kukagua mshahara wa sasa kwenye tovuti rasmi", "Kuchagua kazi hiyo mara moja"], answer: 2, why: "AI inaweza kukosea; tovuti rasmi zina namba za sasa." },
          { objective: "O3", q: "Mshahara wa kati (median pay) ni nini?", options: ["Mshahara wa juu kabisa", "Mshahara wa chini kabisa", "Mshahara ulio katikati: nusu wanapata zaidi, nusu wanapata kidogo", "Mshahara wa wanafunzi wa mafunzo kazini tu"], answer: 2, why: "Median ni hatua ya katikati." }
        ]
      }
    },
    {
      name: "Sura 2: Kupanga njia yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jinsi AI inavyobadilisha kazi",
          minutes: 5,
          goal: "Eleza njia moja AI inavyotumika katika taaluma unayoipenda na ujuzi wa kibinadamu ambao bado ni muhimu.",
          text: [
            "AI inabadilisha kazi nyingi. Wauguzi wanaitumia kusaidia na kumbukumbu, mafundi wa magari wanaitumia kupata matatizo ya magari, wabunifu wanaitumia kujaribu mawazo haraka, na kampuni za michezo ya video zinaitumia kujaribu viwango vya mchezo. Baadhi ya kazi zinafanywa na AI; kazi mpya zinazuka.",
            "Ujuzi wa kibinadamu ni muhimu zaidi sasa: kuzungumza na watu, kutatua matatizo mapya, kuwa mbunifu, kuwa mtu wa kutegemewa na kujua AI inapokosea.",
            "Iulize AI: \"AI inatumikaje leo katika [taaluma]? Ujuzi gani wa kibinadamu bado ni muhimu zaidi?\" Kisha kagua inachosema na mtu halisi anayefanya kazi hiyo au tovuti ya habari au ya sekta inayoaminika."
          ],
          words: [["Uendeshaji wa kiotomatiki (automation)", "mashine au programu zinapofanya kazi ambazo watu walikuwa wakizifanya."], ["Ujuzi wa kijamii (soft skills)", "ujuzi wa kushirikiana na watu kama mawasiliano, kazi ya pamoja na kuwa wa kutegemewa."]],
          slides: [
            { title: "AI inabadilisha kazi", bullets: ["Wauguzi, mafundi wa magari, wabunifu, wajaribu wa michezo", "Baadhi ya kazi zinaenda kwa AI; kazi mpya zinazuka"] },
            { title: "Ujuzi wa kibinadamu ni muhimu zaidi", bullets: ["Kuzungumza na watu", "Kutatua matatizo mapya", "Ubunifu na kuwa wa kutegemewa", "Kutambua AI inapokosea"] },
            { title: "Jua kwa taaluma yako", bullets: ["Iulize AI inavyotumika", "Kagua na mtu halisi au tovuti inayoaminika"] }
          ],
          tryIt: "Iulize AI jinsi AI inavyotumika katika moja ya taaluma zako mbili na ujuzi gani wa kibinadamu ni muhimu zaidi. Andika matumizi moja ya AI na stadi mbili za kibinadamu, na swali moja ambalo ungemuuliza mtu halisi anayefanya kazi hiyo.",
          youCanNow: "kueleza jinsi AI inavyogusa taaluma na ujuzi gani wa kibinadamu bado ni muhimu.",
          quickCheck: [
            { objective: "O4", q: "Ujuzi upi wa kibinadamu unakuwa muhimu zaidi AI inapoenea?", options: ["Kuandika kwa haraka kwenye kibodi", "Kuzungumza na watu na kutatua matatizo mapya", "Kukariri namba za simu", "Kunakili majibu"], answer: 1, why: "Mawasiliano, ubunifu, kuwa wa kutegemewa na kujua AI inapokosea ni muhimu zaidi." },
            { objective: "O4", q: "AI inakuambia jinsi inavyotumika katika uuguzi. Unakaguaje?", options: ["Kuiuliza AI ileile tena", "Kudhani ni sahihi", "Kuiweka mtandaoni", "Kumuuliza muuguzi halisi au kusoma tovuti ya sekta au ya habari inayoaminika"], answer: 3, why: "Kagua inachosema AI na mtu halisi anayefanya kazi hiyo au chanzo kinachoaminika." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujenga njia kutoka sekondari",
          minutes: 5,
          goal: "Andaa mpango wa hatua kwa hatua kutoka sasa hadi kazi ya kwanza katika taaluma.",
          text: [
            "Njia ya taaluma ni barabara kutoka ulipo sasa hadi kazi unayoitaka. Inaweza kujumuisha masomo, klabu, kujitolea, programu ya kiangazi, cheti, uanagenzi, chuo cha jamii (community college) au chuo kikuu.",
            "Iulize AI: \"Niko darasa la 10 na ninapenda kuwa fundi umeme. Niandalie njia ya hatua kwa hatua kutoka sasa hadi kazi yangu ya kwanza, yenye mambo ninayoweza kufanya mwaka huu.\" Kisha kagua sheria za mafunzo kwenye tovuti rasmi, kwa sababu leseni na programu hutofautiana kwa kila jimbo.",
            "Mshauri wako wa shule anaweza kukuambia masomo na programu ambazo shule yako inatoa, kama elimu ya taaluma na ufundi (CTE) au usajili wa pande mbili (dual enrollment)."
          ],
          steps: ["Taja darasa lako na taaluma unayolenga.", "Iombe AI njia ya hatua kwa hatua yenye mambo ya kufanya mwaka huu.", "Kagua sheria za mafunzo na leseni kwenye tovuti rasmi.", "Muulize mshauri wako shule yako inatoa nini."],
          words: [["Njia ya taaluma", "hatua kutoka shule hadi kazi katika fani fulani."], ["CTE", "career and technical education (elimu ya taaluma na ufundi): masomo ya shule yanayofundisha ujuzi wa kazi."], ["Dual enrollment", "kusoma masomo ya chuo ukiwa bado sekondari."]],
          slides: [
            { title: "Njia ni barabara", bullets: ["Kutoka ulipo hadi kazi unayoitaka", "Masomo, klabu, programu, mafunzo"] },
            { title: "Iombe AI hatua", bullets: ["Darasa lako na taaluma unayolenga", "Mambo unayoweza kufanya mwaka huu"] },
            { title: "Kagua na uulize", bullets: ["Leseni na programu hutofautiana kwa kila jimbo", "Muulize mshauri wako kuhusu CTE na dual enrollment"] }
          ],
          tryIt: "Iombe AI njia ya hatua kwa hatua kuelekea moja ya taaluma zako. Chagua mambo matatu unayoweza kufanya mwaka huu wa shule na ukague moja wapo na mshauri wako au tovuti rasmi.",
          youCanNow: "kujenga mpango halisi wa njia ya taaluma.",
          quickCheck: [
            { objective: "O5", q: "Njia ya taaluma ni nini?", options: ["Barabara kutoka ulipo sasa hadi kazi unayoitaka", "Somo moja tu", "Fomu ya kuomba kazi", "Orodha ya majina ya kampuni"], answer: 0, why: "Njia inaorodhesha hatua, kama masomo, programu na mafunzo, kutoka sasa hadi kazi." },
            { objective: "O5", q: "Njia kutoka AI inasema unahitaji leseni fulani. Unafanya nini?", options: ["Kudhani ni sawa katika kila jimbo", "Kuacha leseni", "Kukagua sheria za leseni kwenye tovuti rasmi ya jimbo lako", "Kuiomba AI ikupe leseni"], answer: 2, why: "Leseni na programu hutofautiana kwa kila jimbo, kwa hiyo kagua tovuti rasmi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujiandaa kwa kazi ya kwanza",
          minutes: 5,
          goal: "Kagua sheria za msingi za kazi kwa vijana na uandae maelezo mafupi ya kujitambulisha kwa kazi ya kwanza.",
          text: [
            "Kazi ya kwanza, kujitolea au kufuatilia mfanyakazi kazini (job shadowing) kunakusaidia kujaribu taaluma. Chini ya sheria ya serikali kuu ya Marekani, kazi nyingi zinahitaji uwe na angalau miaka 14. Ukiwa na miaka 14 au 15, saa zako zina mipaka, kwa mfano zisizozidi saa 3 siku ya shule na kati ya saa 7 asubuhi (7 a.m.) na saa 7 jioni (7 p.m.) tu kwa sehemu kubwa ya mwaka (hadi saa 9 usiku, 9 p.m., kuanzia June 1 hadi Labor Day, sikukuu ya Marekani mwanzoni mwa Septemba). Ukiwa na miaka 16 na 17, sheria ya serikali kuu haiweki mipaka ya saa, lakini hakuna mtu chini ya miaka 18 anayeruhusiwa kufanya kazi za hatari.",
            "Majimbo mengi yana sheria kali zaidi na huenda yakahitaji kibali cha kazi. Sheria za serikali kuu na za jimbo zinapotumika zote, ile iliyo kali zaidi ndiyo inafuatwa. Kagua ofisi ya kazi ya jimbo lako na uzungumze na mzazi au mlezi.",
            "AI inaweza kukusaidia kuandika maelezo mafupi kukuhusu: \"Nina miaka 15, ninategemewa, ninasaidia kufundisha timu ya soka ya mdogo wangu, na ninataka kujifunza huduma kwa wateja.\" Fanya mazoezi ya kuyasema kwa sauti. Usiweke anwani yako au namba yako ya simu ndani ya AI."
          ],
          steps: ["Kagua sheria za kazi kwa vijana za serikali kuu na za jimbo.", "Zungumza na mzazi au mlezi kuhusu kazi au kujitolea.", "Tumia AI kuandika rasimu ya maelezo ya sentensi 3 kukuhusu.", "Fanya mazoezi ya kuyasema kwa sauti."],
          words: [["Kibali cha kazi (work permit)", "karatasi ambayo baadhi ya majimbo yanahitaji kabla kijana hajaanza kufanya kazi."], ["Job shadowing", "kumfuata mfanyakazi kwa siku moja ili kuona kazi ilivyo."], ["Kazi ya hatari", "kazi yenye hatari ambayo hairuhusiwi kwa mtu yeyote chini ya miaka 18."]],
          sources: [{ name: "U.S. Department of Labor Fact Sheet #43: Child labor rules for nonagricultural jobs", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }, { name: "U.S. Department of Labor: Child labor and state laws", url: "https://www.dol.gov/agencies/whd/child-labor" }],
          slides: [
            { title: "Sheria za serikali kuu za kazi kwa vijana", bullets: ["Kazi nyingi: miaka 14 na zaidi", "Miaka 14-15: saa 3 tu siku ya shule", "Miaka 14-15: 7 a.m. hadi 7 p.m. (9 p.m. kuanzia June 1 hadi Labor Day)", "Hakuna kazi za hatari chini ya miaka 18"] },
            { title: "Kagua jimbo lako", bullets: ["Majimbo yanaweza kuhitaji kibali cha kazi", "Sheria iliyo kali zaidi ndiyo inafuatwa", "Zungumza na mzazi au mlezi"] },
            { title: "Maelezo yako kwa kazi ya kwanza", bullets: ["Sentensi 3 kukuhusu", "Andika rasimu kwa AI, bila taarifa binafsi", "Fanya mazoezi ya kuyasema kwa sauti"] }
          ],
          tryIt: "Kazi ya mwisho: andaa mpango wako wa taaluma wa ukurasa mmoja: kwa nini taaluma inakufaa, mafunzo yake, mshahara na matarajio ya ajira kutoka tovuti rasmi, njia moja AI inavyotumika ndani yake, na hatua tatu za mwaka huu wa shule. Ongeza maelezo yako ya sentensi 3 kwa kazi ya kwanza chini kabisa.",
          youCanNow: "kuchunguza taaluma, kukagua ukweli, kupanga njia yako na kujitambulisha kwa kazi ya kwanza.",
          quickCheck: [
            { objective: "O6", q: "Chini ya sheria ya serikali kuu, kazi ya aina gani hakuna mtu chini ya miaka 18 anayeruhusiwa kufanya?", options: ["Kazi za hatari", "Kujitolea", "Kufuatilia mfanyakazi kazini", "Kulea watoto wa familia"], answer: 0, why: "Sheria ya serikali kuu inamkataza mtu yeyote chini ya miaka 18 kufanya kazi za hatari." },
            { objective: "O6", q: "Unataka AI ikusaidie kuandika maelezo yako kwa kazi ya kwanza. Unaacha nini nje ya prompt?", options: ["Kwamba unategemewa", "Anwani yako na namba yako ya simu", "Kwamba unafundisha timu ya michezo", "Unachotaka kujifunza"], answer: 1, why: "Weka taarifa binafsi kama anwani na namba ya simu nje ya zana za AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupanga njia yako",
        questions: [
          { objective: "O4", q: "Ujuzi upi unakuwa muhimu ZAIDI AI inapoenea?", options: ["Mawasiliano na kutatua matatizo mapya", "Kupuuza watu", "Kutojifunza kamwe zana mpya", "Kunakili majibu"], answer: 0, why: "Ujuzi wa kibinadamu unakuwa wa thamani zaidi AI inapofanya kazi za kawaida." },
          { objective: "O5", q: "Njia ya taaluma ni nini?", options: ["Njia ya kutembea milimani", "Ramani ya mchezo wa video", "Aina ya CV", "Hatua kutoka shule hadi kazi katika fani fulani"], answer: 3, why: "Njia ni barabara kutoka sasa hadi kazi." },
          { objective: "O5", q: "Nani anaweza kukuambia masomo ya CTE au dual enrollment ambayo shule yako inatoa?", options: ["Tangazo linalojitokeza ghafla", "Mshauri wako wa shule", "App yoyote tu", "Hakuna mtu"], answer: 1, why: "Washauri wanajua programu za shule." },
          { objective: "O6", q: "Chini ya sheria ya serikali kuu, kijana wa miaka 15 siku ya shule anaweza kufanya kazi kwa muda usiozidi:", options: ["Saa 3", "Saa 8", "Saa 12", "Hakuna kikomo"], answer: 0, why: "Kikomo cha serikali kuu kwa vijana wa miaka 14-15 ni saa 3 siku ya shule." },
          { objective: "O6", q: "Sheria ya jimbo lako kuhusu kazi kwa vijana ni kali kuliko ya serikali kuu. Ipi inafuatwa?", options: ["Sheria ya serikali kuu", "Hakuna kati yao", "Sheria iliyo kali zaidi", "Yoyote ambayo rafiki yako anaipenda"], answer: 2, why: "Zote zinapotumika, kiwango kilicho kali zaidi lazima kifuatwe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI na Kuchunguza Taaluma",
    questions: [
      { objective: "O1", q: "Utafutaji mzuri wa taaluma unaanza na:", options: ["Kazi inayolipa zaidi tu", "Unachofurahia na unachokiweza vizuri", "Kuchagua tu bila kufikiri", "Anachosema mtu usiyemjua"], answer: 1, why: "Mambo unayopenda ndizo dalili bora za kuanzia." },
      { objective: "O1", q: "mynextmove.org ni:", options: ["Duka la michezo ya video", "Tovuti ya kutafuta wapenzi", "App ya mitandao ya kijamii", "Tovuti ya bure ya taaluma kutoka Wizara ya Kazi ya Marekani"], answer: 3, why: "Inadhaminiwa na Wizara ya Kazi." },
      { objective: "O1", q: "Baada ya jaribio la mambo unayopenda unapaswa:", options: ["Kusahau matokeo", "Kuweka nywila yako mtandaoni", "Kuacha shule", "Kuandika maeneo yako makuu ya kupenda"], answer: 3, why: "Matokeo yako ni dalili za hatua inayofuata." },
      { objective: "O2", q: "Unapotafuta mawazo ya taaluma kwa AI, acha nje:", options: ["Mambo unayopenda", "Taarifa binafsi kama anwani yako", "Kundi lako la umri", "Somo lako la shule unalolipenda zaidi"], answer: 1, why: "Usiweke kamwe taarifa binafsi ndani ya AI." },
      { objective: "O2", q: "Uanagenzi (apprenticeship) ni:", options: ["Mchezo wa video", "Jaribio lisilolipwa", "Kazi ya kulipwa ambapo unajifunza ufundi huku ukifanya kazi", "Bweni la chuo"], answer: 2, why: "Wanagenzi wanalipwa huku wakijifunza." },
      { objective: "O2", q: "Orodha ya taaluma kutoka AI inapaswa kuchukuliwa kama:", options: ["Mawazo ya kukagua", "Ukweli uliohakikishwa", "Ofa ya kazi", "Alama ya shule"], answer: 0, why: "AI inaweza kukosea kuhusu mshahara na mafunzo." },
      { objective: "O3", q: "bls.gov/ooh inaonyesha kwa kila kazi:", options: ["Maneno ya nyimbo", "Mshahara, mafunzo na matarajio ya ajira", "Alama za michezo", "Hali ya hewa"], answer: 1, why: "Occupational Outlook Handbook inatoa ukweli huo." },
      { objective: "O3", q: "AI na bls.gov zinatofautiana kuhusu mafunzo ya kazi fulani. Amini:", options: ["AI", "Hakuna kati yao", "Picha ya utani mtandaoni (meme)", "Tovuti rasmi"], answer: 3, why: "Tovuti rasmi zimekaguliwa na ni za sasa." },
      { objective: "O3", q: "Matarajio ya ajira (job outlook) maana yake ni:", options: ["Idadi ya ajira zinazotarajiwa siku zijazo", "Mandhari inayoonekana kutoka ofisini", "Mavazi yako ya kazini", "Hali ya moyo ya bosi wako"], answer: 0, why: "Matarajio ya ajira yanahusu idadi ya ajira za siku zijazo." },
      { objective: "O4", q: "Uendeshaji wa kiotomatiki (automation) maana yake ni:", options: ["Kuendesha gari", "Sheria ya shule", "Mashine au programu kufanya kazi ambazo watu walikuwa wakizifanya", "Mtindo wa muziki"], answer: 2, why: "Automation inahamisha kazi kwenda kwa mashine." },
      { objective: "O4", q: "Upi ni ujuzi wa kijamii (soft skill)?", options: ["Kasi ya kuandika kwenye kibodi tu", "Kumiliki kompyuta mpakato", "Kazi ya pamoja", "Kujua nywila"], answer: 2, why: "Ujuzi wa kijamii ni ujuzi wa kushirikiana na watu kama kazi ya pamoja." },
      { objective: "O4", q: "Kukagua kile AI inasema kuhusu AI katika kazi fulani, unaweza:", options: ["Kumuuliza mtu halisi anayefanya kazi hiyo", "Kuiamini kabisa", "Kuuliza tangazo linalojitokeza ghafla", "Kuacha kukagua"], answer: 0, why: "Watu wanaofanya kazi hiyo wanajua jinsi inavyofanyika kweli." },
      { objective: "O5", q: "Dual enrollment maana yake ni:", options: ["Kuwa na makabati mawili", "Simu mbili", "Milo miwili ya mchana", "Kusoma masomo ya chuo ukiwa sekondari"], answer: 3, why: "Wanafunzi wanapata alama za chuo mapema." },
      { objective: "O5", q: "Kwa nini ukague leseni kwenye tovuti rasmi?", options: ["AI iko sahihi kila wakati", "Sheria hutofautiana kwa kila jimbo", "Hazibadiliki kamwe", "Haihitajiki"], answer: 1, why: "Sheria za mafunzo na leseni hutofautiana kwa kila jimbo." },
      { objective: "O5", q: "Prompt nzuri ya njia ya taaluma inajumuisha:", options: ["Darasa lako na taaluma unayolenga", "Nywila yako", "Anwani yako", "Hakuna kitu"], answer: 0, why: "Darasa na lengo vinaiwezesha AI kuandaa mpango unaofaa." },
      { objective: "O6", q: "Chini ya sheria ya serikali kuu, vijana wa miaka 14 na 15 kwa kawaida wanaweza kufanya kazi kati ya:", options: ["Saa 6 usiku na 6 asubuhi (midnight hadi 6 a.m.)", "Wakati wowote", "7 a.m. na 7 p.m. (9 p.m. kuanzia June 1 hadi Labor Day)", "Siku za shule tu"], answer: 2, why: "Hiyo ndiyo mipaka ya muda wa siku ya serikali kuu." },
      { objective: "O6", q: "Chini ya sheria ya serikali kuu, nani haruhusiwi kufanya kazi za hatari?", options: ["Watu chini ya miaka 12 tu", "Mtu yeyote chini ya miaka 18", "Watu wazima", "Hakuna mtu"], answer: 1, why: "Kazi za hatari zimekatazwa kwa mtu yeyote chini ya miaka 18." },
      { objective: "O6", q: "Kabla ya kuchukua kazi ya kwanza unapaswa:", options: ["Kudanganya kuhusu umri wako", "Kuacha shule", "Kuipa AI namba yako ya simu", "Kukagua sheria za jimbo lako na kuzungumza na mzazi au mlezi"], answer: 3, why: "Sheria za jimbo zinaweza kuhitaji kibali, na mzazi au mlezi anapaswa kujua." },
      { objective: "O6", q: "Job shadowing ni:", options: ["Kujificha kutoka kwa bosi wako", "Mtindo wa mchezo wa video", "Aina ya CV", "Kumfuata mfanyakazi kwa siku moja kuona kazi"], answer: 3, why: "Job shadowing inakuwezesha kuona kazi kwa karibu." },
      { objective: "O6", q: "Maelezo ya kujitambulisha kwa kazi ya kwanza yanapaswa kuwa:", options: ["Insha ya kurasa 10", "Kama sentensi 3 kukuhusu, ukiwa umefanya mazoezi ya kuyasema kwa sauti", "Anwani yako na namba yako ya simu", "Yameandikwa na AI na hayasomwi kamwe"], answer: 1, why: "Maelezo mafupi uliyoyafanyia mazoezi ni rahisi kuyasema kwa kujiamini." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 5, 6, 7, 9, 11, 13, 15, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kwa nini inanifaa", objective: "O1", notYet: "Hakuna uhusiano kati ya taaluma na mambo anayopenda mwanafunzi.", meets: "Anataja matokeo ya jaribio la mambo anayopenda au shughuli anazozipenda zinazolingana na taaluma.", exceeds: "Pia anataja uwezo au thamani inayolingana na taaluma." },
      { name: "Ukweli rasmi", objective: "O3", notYet: "Mshahara, mafunzo au matarajio ya ajira hayapo au yamechukuliwa kutoka AI tu.", meets: "Mafunzo ya kawaida, mshahara na matarajio ya ajira kutoka bls.gov/ooh au mynextmove.org.", exceeds: "Pia anataja jambo moja ambalo AI ilisema tofauti na tovuti rasmi." },
      { name: "AI katika kazi", objective: "O4", notYet: "Hakuna matumizi ya AI wala ujuzi wa kibinadamu uliotajwa.", meets: "Njia moja AI inavyotumika katika taaluma na stadi mbili za kibinadamu ambazo bado ni muhimu.", exceeds: "Ina swali la kumuuliza mtu halisi anayefanya kazi hiyo, au jibu lake." },
      { name: "Hatua za mwaka huu", objective: "O5", notYet: "Hatua chini ya tatu, au hatua zisizo wazi kama \"fanya bidii\".", meets: "Hatua tatu halisi: somo, klabu au shughuli, na mtu wa kuzungumza naye.", exceeds: "Angalau hatua moja imekaguliwa na mshauri au tovuti rasmi." },
      { name: "Maelezo kwa kazi ya kwanza", objective: "O6", notYet: "Hakuna maelezo, au yana taarifa binafsi.", meets: "Maelezo ya sentensi tatu kumhusu mwanafunzi, yaliyofanyiwa mazoezi kwa sauti.", exceeds: "Pia anataja sheria za kazi kwa vijana zinazohusu umri na jimbo lake." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaochukua moja ya hatua zao tatu walizopanga (somo, klabu au mkutano) ndani ya siku 30",
      "Wanafunzi wanaokutana na mshauri wa shule kuhusu mpango wao wa taaluma",
      "Wanafunzi wanaoanza kazi, nafasi ya kujitolea, job shadowing au programu ya taaluma ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, kompyuta ya shule au kompyuta ya maktaba yenye intaneti",
      "Tovuti za bure: mynextmove.org na bls.gov/ooh",
      "Msaidizi wa AI wa bure ambao mwanafunzi anaruhusiwa kutumia",
      "Karatasi au hati kwa mpango wa taaluma wa ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Shirikiana na mshauri wa shule ili wanafunzi waweze kukagua masomo, CTE na chaguo za dual enrollment wakati wa kozi.",
      "Wakumbushe wanafunzi kwamba mshahara na sheria za kazi kwa vijana hubadilika na hutofautiana kwa kila jimbo; waambie wakague tovuti rasmi darasani.",
      "Usiwaombe wanafunzi kamwe kuweka taarifa binafsi katika zana za AI; tumieni majina ya kwanza tu au bila majina katika maelezo ya kujitambulisha.",
      "Mkaribishe mgeni kutoka kazi au ufundi wa eneo lenu ili wanafunzi waweze kuuliza swali lao la \"mtu halisi\".",
      "Pima mpango wa taaluma kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
