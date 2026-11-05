"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-productivity-leadership.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-productivity-leadership-sw",
  lang: "sw",
  translationOf: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "AI kwa Tija na Uongozi",
  skills: "Kupanga wiki ya timu kwa AI, Kuandika barua pepe za BLUF, Kufupisha mikutano kuwa kazi za kufanya, Kutoa maoni yaliyo wazi, Kukabidhi kazi kwa orodha ya kukagua, Kutumia AI kwa uwajibikaji na taarifa za timu",
  outcome: "kutumia msaidizi wa AI kupanga wiki ya timu ndogo, kuandika barua pepe ya taarifa iliyo wazi yenye jambo kuu mwanzoni (BLUF), na kugeuza maelezo ya mkutano kuwa kazi za kufanya zenye mhusika na tarehe, huku ukizuia taarifa binafsi za wanatimu zisiingie kwenye zana za AI za umma.",
  about: [
    "Kozi hii ni kwa wanajeshi wastaafu (veterans) walioongoza wakiwa jeshini, kama maafisa wasio na kamisheni (NCO), petty officers, maafisa au viongozi wa vikundi, na sasa wanaongoza au wanataka kuongoza katika kazi za kiraia. Tabia zako za uongozi zinahamia; maneno na zana ni tofauti kidogo tu.",
    "Utatumia msaidizi wa AI wa bure kupanga wiki ya timu, kuandika taarifa fupi zilizo wazi, kugeuza maelezo ya mkutano yaliyochanganyika kuwa kazi za kufanya, kuandaa maoni (feedback) na kukabidhi kazi vizuri. Pia utajifunza kanuni za kutumia AI kwa uwajibikaji na taarifa za watu wengine.",
    "Kila somo linachukua kama dakika tano: soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Kwa timu halisi au ya mazoezi ya watu watatu hadi sita: tumia msaidizi wa AI kutengeneza mpango wa wiki moja wenye vipaumbele na wahusika, andika barua pepe ya taarifa yenye jambo kuu mwanzoni (BLUF) kwa meneja wako, na ugeuze maelezo mafupi ya mkutano kuwa jedwali la kazi za kufanya lenye mhusika na tarehe ya mwisho, ukitumia vyeo badala ya majina na bila taarifa yoyote binafsi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu walioongoza wakiwa jeshini kama NCO, petty officers, maafisa au viongozi wa vikundi, na sasa wanaongoza au wanataka kuongoza timu ndogo katika kazi za kiraia.",
    startingPoint: "Wana tabia imara za kupanga, kutoa maelezo mafupi (briefing), kutathmini baada ya kazi (after-action review) na kuwajali watu. Wanatumia barua pepe na kompyuta bila shida. Hawatumii sana wasaidizi wa AI kwa kazi za uongozi, na maandishi ya kijeshi yanaweza kusikika makali kwa wasomaji wa kiraia.",
    gap: "Timu za kiraia zinatarajia mipango, barua pepe na maoni kwa maneno ya kiraia, na mahali pengi pa kazi sasa panatumia zana za AI. Wanafunzi wanahitaji kutumia msaidizi wa AI kuokoa muda katika kupanga, kutoa taarifa, maelezo ya mikutano, maoni na kukabidhi kazi, huku wakizuia taarifa binafsi za wanatimu na wakibaki wawajibikaji wa kazi ya mwisho.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: kompyuta au simu janja yenye intaneti na msaidizi wa AI wa bure",
      "Faragha na sera: vyeo badala ya majina, hakuna mshahara, afya au taarifa za wafanyakazi katika zana za AI za umma, na sera ya AI ya mwajiri inatangulia",
      "Muda: masomo ya kama dakika 5 yanayoingia ndani ya siku ya kazi",
      "Mazoezi yanatumia timu halisi au ya mazoezi ya watu watatu hadi sita"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Kazi za Baadaye\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za timu kwa wiki", action: "kutumia msaidizi wa AI kutengeneza mpango wa wiki uliopangwa kwa vipaumbele wenye mhusika kwa kila kazi", standard: "na kusahihisha chochote ilichokosea kwa busara yako mwenyewe" },
    { id: "O2", condition: "Ukipewa ujumbe uliochanganyika kwa meneja", action: "kuandika barua pepe ya jambo kuu mwanzoni (BLUF) kwa msaada wa AI", standard: "jambo kuu likiwa katika sentensi ya kwanza na kwa sauti ya kirafiki na ya kitaalamu" },
    { id: "O3", condition: "Ukipewa maelezo mafupi ya mkutano", action: "kugeuza maelezo kuwa maamuzi, kazi za kufanya na maswali yaliyo wazi kwa msaada wa AI", standard: "kila kazi ya kufanya ikiwa na mhusika mmoja na tarehe ya mwisho" },
    { id: "O4", condition: "Ukipewa jambo alilofanya mwanatimu", action: "kuandaa maoni kwa mtindo wa hali-tabia-matokeo na kuyaandika upya kwa maneno yako mwenyewe", standard: "ukieleza tu tabia uliyoiona" },
    { id: "O5", condition: "Ukipewa kazi unayoweza kumkabidhi mtu", action: "kutengeneza orodha ya kukabidhi kazi yenye lengo, kiwango, tarehe ya mwisho, rasilimali na nyakati za kufuatilia", standard: "ikiwa na kila sehemu inayohitajika" },
    { id: "O6", condition: "Kila unapotumia AI na taarifa za timu au kampuni", action: "kufuata sera ya AI ya mwajiri wako, kutumia vyeo badala ya majina na kuzuia taarifa binafsi", standard: "bila taarifa binafsi katika prompt yoyote na wewe ukiwa mwajibikaji wa kazi ya mwisho" }
  ],
  chapters: [
    {
      name: "Sura 1: Kumaliza kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutoka mpango wa operesheni hadi mpango wa wiki wa timu",
          minutes: 5,
          goal: "Tumia AI kugeuza orodha ya kazi kuwa mpango wa wiki uliopangwa kwa vipaumbele wenye wahusika.",
          text: [
            "Jeshini ulipanga kuanzia kwenye misheni: nini lazima kifanyike, lini, na watu gani na rasilimali gani. Timu za kiraia zinahitaji kitu hicho hicho; mara nyingi wanakiita mpango wa kazi au mpango wa mradi.",
            "Mpe msaidizi wa AI orodha yako ya kazi, tarehe za mwisho na vyeo vya timu, na umwombe azipange kwa vipaumbele na kuonyesha wiki nzima. Mfano: \"Hizi ni kazi 8 za timu yangu ya ghala ya watu 5 wiki hii, pamoja na tarehe za mwisho. Zipange kwa uharaka na umuhimu, na utengeneze jedwali la Jumatatu hadi Ijumaa lenye cheo cha mhusika kwa kila kazi.\"",
            "Tumia vyeo, si majina kamili (\"Kiongozi wa zamu A\", \"Dereva wa forklift 2\"). Kisha tumia busara yako: AI haijui kwamba mtu mmoja yuko likizo au kwamba mteja mmoja ni muhimu kuliko wote. Wewe unarekebisha na kuidhinisha mpango."
          ],
          steps: ["Orodhesha kazi za wiki na tarehe zake za mwisho.", "Orodhesha vyeo vya timu, si majina.", "Omba AI ipange kwa uharaka na umuhimu na itengeneze jedwali la wiki.", "Rekebisha kwa mambo ambayo AI haijui: likizo, ujuzi, wateja muhimu.", "Shiriki mpango wa mwisho na timu."],
          words: [["Mpango wa kazi", "orodha ya kazi zenye wahusika na tarehe; toleo la kiraia la mpango wa operesheni."], ["Uharaka dhidi ya umuhimu", "kazi ya haraka inahitaji kufanywa sasa; kazi muhimu ina maana kubwa zaidi kwa lengo. Si kila mara ni kitu kimoja."]],
          slides: [
            { title: "Ujuzi ule ule, maneno mapya", bullets: ["Mpango wa misheni = mpango wa kazi", "Nini, lini, nani, kwa kutumia nini"] },
            { title: "Acha AI ipange na kuonyesha wiki", bullets: ["Toa kazi, tarehe za mwisho na vyeo", "Omba mpangilio wa vipaumbele na jedwali la wiki"] },
            { title: "Wewe unaidhinisha mpango", bullets: ["Tumia vyeo, si majina", "Rekebisha kwa likizo, ujuzi, wateja muhimu", "Shiriki mpango wa mwisho"] }
          ],
          tryIt: "Andika kazi sita ambazo timu yako (halisi au ya mazoezi) lazima ifanye wiki hii. Omba msaidizi wa AI azipange kwa uharaka na umuhimu na atengeneze jedwali la Jumatatu hadi Ijumaa lenye cheo cha mhusika kwa kila kazi. Badilisha jambo moja alilokosea.",
          youCanNow: "kugeuza orodha ya kazi kuwa mpango wa wiki wa timu uliopangwa kwa vipaumbele kwa msaada wa AI, na kuusahihisha kwa busara yako.",
          quickCheck: [
            { objective: "O1", q: "Kupanga kazi kwa uharaka na umuhimu kunamaanisha nini?", options: ["Kufanya kazi rahisi kwanza", "Kuamua kazi zipi zinahitaji kufanywa karibuni na zipi zina umuhimu mkubwa", "Kumpa mtu mmoja kila kazi", "Kufanya kazi kwa mpangilio wa alfabeti"], answer: 1, why: "Uharaka na umuhimu ni vitu tofauti, kwa hiyo kupanga kwa vyote viwili kunaonyesha cha kufanya kwanza." },
            { objective: "O1", q: "Mpango wa wiki wa AI unampa mtu mmoja kazi zote sita. Unafanya nini?", options: ["Unaukubali kwa sababu AI imeamua", "Unafuta mpango na kufanya yote mwenyewe", "Unaomba AI iongeze kazi zaidi", "Unatumia busara yako kugawa kazi na kurekebisha mpango"], answer: 3, why: "AI inaandaa rasimu ya mpango, lakini wewe unaijua timu yako na unaidhinisha toleo la mwisho." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika barua pepe na taarifa za BLUF",
          minutes: 5,
          goal: "Andika barua pepe fupi yenye jambo kuu mwanzoni kwa msaada wa AI.",
          text: [
            "BLUF, yaani bottom line up front (jambo kuu mwanzoni), inafanya kazi pia katika ofisi za kiraia, hata kama watu hawatumii neno hilo. Weka jambo kuu au uamuzi unaohitaji katika sentensi ya kwanza. Kisha toa sababu fupi na hatua zinazofuata.",
            "Omba AI iandike upya rasimu ndefu: \"Andika upya hii kama barua pepe fupi kwa meneja wangu. Weka jambo kuu katika sentensi ya kwanza, kisha vitone vitatu, kisha hatua inayofuata. Sauti ya kirafiki na ya kitaalamu. Bila maneno ya kijeshi.\"",
            "Kagua sauti. Maandishi ya kijeshi yanaweza kusikika makali kwa wasomaji wa kiraia. \"Asante\" rahisi au \"Niko tayari kujadili\" inasaidia. Isome mara moja kana kwamba wewe ndiye unayeipokea."
          ],
          steps: ["Andika unachohitaji kusema, hata kama kimechanganyika.", "Omba AI iweke jambo kuu kwanza, kisha vitone, kisha hatua inayofuata.", "Iombe iondoe maneno ya kijeshi na itumie sauti ya kirafiki na ya kitaalamu.", "Isome kama mpokeaji na urekebishe chochote kisicho wazi."],
          words: [["BLUF", "bottom line up front: jambo kuu au ombi linakuja kwanza."], ["Sauti (tone)", "jinsi maandishi yako yanavyosikika kwa msomaji: ya kirafiki, makali, rasmi."]],
          slides: [
            { title: "BLUF inafanya kazi kila mahali", bullets: ["Jambo kuu au ombi kwanza", "Sababu fupi baadaye", "Hatua inayofuata mwishoni"] },
            { title: "Omba AI iandike upya", bullets: ["\"Jambo kuu katika sentensi ya kwanza\"", "\"Vitone vitatu, kisha hatua inayofuata\"", "\"Kirafiki, kitaalamu, bila maneno ya kijeshi\""] },
            { title: "Kagua sauti", bullets: ["Maandishi ya kijeshi yanaweza kusikika makali", "Ongeza \"Asante\" au \"Niko tayari kujadili\"", "Isome kama mpokeaji"] }
          ],
          tryIt: "Andika ujumbe uliochanganyika kwa meneja kuhusu kuchelewa kwa kazi fulani. Omba msaidizi wa AI auandike upya kama barua pepe ya BLUF yenye vitone vitatu na hatua inayofuata, kwa sauti ya kirafiki na ya kitaalamu.",
          youCanNow: "kuandika barua pepe fupi na iliyo wazi yenye jambo kuu mwanzoni inayofaa mahali pa kazi pa kiraia.",
          quickCheck: [
            { objective: "O2", q: "Katika barua pepe ya BLUF, nini kinakuja kwanza?", options: ["Jambo kuu au ombi", "Hadithi ndefu ya historia", "Sahihi yako", "Orodha ya kila aliyesaidia"], answer: 0, why: "Jambo kuu mwanzoni maana yake msomaji anaona jambo kuu au ombi mara moja." },
            { objective: "O2", q: "Barua pepe uliyoandikiwa na AI inasikika fupi na kali. Unafanya nini kabla ya kuituma?", options: ["Unaituma ilivyo", "Unaifanya ndefu mara mbili", "Unaongeza mstari wa kirafiki na kuisoma kama mpokeaji", "Unaondoa jambo kuu"], answer: 2, why: "Mstari wa kirafiki na kuisoma kama mpokeaji kunaifanya iwe wazi na ya kitaalamu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kugeuza maelezo ya mkutano kuwa kazi za kufanya",
          minutes: 5,
          goal: "Tumia AI kugeuza maelezo ya mkutano kuwa jedwali la kazi za kufanya lenye wahusika na tarehe za mwisho.",
          text: [
            "Mikutano inapoteza muda wakati hakuna anayeondoka akijua nani anafanya nini. Tabia ya tathmini baada ya kazi inarekebisha hilo: nini kimeamuliwa, nani anahusika na kila kazi, na lini inatakiwa kuisha.",
            "Bandika maelezo yako (yakiwa na vyeo badala ya majina, na bila taarifa binafsi) na uulize: \"Geuza maelezo haya kuwa: 1) maamuzi yaliyofanywa, 2) jedwali la kazi za kufanya lenye mhusika na tarehe ya mwisho, 3) maswali yaliyo wazi.\" Kama kazi haina mhusika au tarehe, AI inapaswa kuionyesha.",
            "Zana nyingi za kazini, kama Microsoft Teams yenye Copilot au Google Meet yenye Gemini, zinaweza kufupisha mikutano kama mwajiri wako amewasha huduma hiyo. Fuata kanuni za mwajiri wako kuhusu kurekodi na AI, na uwaambie watu mkutano unaporekodiwa au kufupishwa."
          ],
          steps: ["Andika maelezo mafupi wakati wa mkutano.", "Badilisha majina kuwa vyeo na uondoe taarifa binafsi.", "Omba AI ikupe maamuzi, jedwali la kazi lenye mhusika na tarehe ya mwisho, na maswali yaliyo wazi.", "Jaza wahusika au tarehe zinazokosekana.", "Tuma muhtasari kwa timu siku hiyo hiyo."],
          words: [["Kazi ya kufanya (action item)", "kazi inayotoka kwenye mkutano yenye mhusika mmoja na tarehe ya mwisho."], ["Tathmini baada ya kazi", "kuangalia nyuma kwa ufupi: nini kilitokea, nini kilifanya kazi, nini cha kubadilisha."]],
          slides: [
            { title: "Kila mkutano unapaswa kuishia na", bullets: ["Maamuzi yaliyofanywa", "Kazi za kufanya: mhusika + tarehe ya mwisho", "Maswali yaliyo wazi"] },
            { title: "Omba AI ipange maelezo", bullets: ["Bandika maelezo yenye vyeo, si majina", "Omba maamuzi, kazi, maswali", "Iambie ionyeshe wahusika au tarehe zinazokosekana"] },
            { title: "Fuata kanuni za kazini", bullets: ["Tumia zana za AI za mikutano ikiwa tu zimeruhusiwa", "Waambie watu unaporekodi au kufupisha", "Tuma muhtasari siku hiyo hiyo"] }
          ],
          tryIt: "Andika mistari mitano ya maelezo ya mkutano wa mazoezi. Omba msaidizi wa AI ayageuze kuwa maamuzi, jedwali la kazi za kufanya lenye cheo cha mhusika na tarehe ya mwisho, na maswali yaliyo wazi.",
          youCanNow: "kugeuza maelezo ya mkutano kuwa jedwali lililo wazi la kazi za kufanya lenye wahusika na tarehe.",
          quickCheck: [
            { objective: "O3", q: "Swali lililo wazi katika muhtasari wa mkutano ni nini?", options: ["Kazi yenye mhusika", "Uamuzi ambao timu ilifanya", "Swali ambalo hakuna anayeruhusiwa kuuliza", "Jambo ambalo bado halijaamuliwa na linahitaji jibu baadaye"], answer: 3, why: "Maswali yaliyo wazi ni mambo ambayo mkutano haukuyamaliza, yanaorodheshwa ili yasisahaulike." },
            { objective: "O3", q: "Jedwali la kazi la AI lina \"Agiza vipuri\" bila mhusika. Unafanya nini?", options: ["Unaiacha; mtu ataifanya", "Unaipa mhusika mmoja na tarehe ya mwisho", "Unawapa wote", "Unaifuta"], answer: 1, why: "Kazi ya kufanya imekamilika tu ikiwa na mhusika mmoja na tarehe ya mwisho." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kumaliza kazi",
        questions: [
          { objective: "O1", q: "Jina la kiraia linalotumika mara nyingi kwa mpango wa misheni au wa operesheni ni lipi?", options: ["Mpango wa kazi au mpango wa mradi", "CV (wasifu wa kazi)", "Bajeti", "Jedwali la kulinganisha (crosswalk)"], answer: 0, why: "Timu za kiraia kwa kawaida huuita mpango wa kazi au mpango wa mradi." },
          { objective: "O6", q: "Kwa nini utumie vyeo kama \"Kiongozi wa zamu A\" badala ya majina katika prompt ya AI?", options: ["AI haiwezi kusoma majina", "Kulinda taarifa za wanatimu zisijulikane", "Majina yanafanya majibu kuwa marefu", "Ni haraka kuandika"], answer: 1, why: "Vyeo vinaipa AI inachohitaji bila kushiriki taarifa za watu." },
          { objective: "O1", q: "Mpango wa AI unaweka kazi kubwa siku ambayo mtu mmoja yuko likizo. Wewe:", options: ["Unabaki na mpango wa AI", "Unafuta kazi hiyo", "Unarekebisha mpango kwa busara yako", "Unamwomba mtu huyo aache likizo"], answer: 2, why: "Unajua mambo ambayo AI haijui; wewe unaidhinisha mpango wa mwisho." },
          { objective: "O2", q: "Nini kinakwenda katika sentensi ya kwanza ya barua pepe ya BLUF?", options: ["Salamu ndefu", "Historia ya nyuma", "Mzaha", "Jambo kuu au ombi"], answer: 3, why: "Jambo kuu mwanzoni: jambo kuu linakuja kwanza." },
          { objective: "O3", q: "Kipi kinafanya kazi ya kufanya ikamilike?", options: ["Mhusika mmoja na tarehe ya mwisho", "Maelezo marefu", "Kila mtu anahusika nayo", "Haina tarehe, ili iwe rahisi kubadilika"], answer: 0, why: "Kazi ya kufanya inahitaji mhusika mmoja aliye wazi na tarehe ya mwisho." }
        ]
      }
    },
    {
      name: "Sura 2: Kuongoza watu ukiwa na AI kama msaidizi wako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandaa maoni yaliyo wazi na ya haki",
          minutes: 5,
          goal: "Tumia AI kuandaa rasimu ya maoni kwa mtindo wa hali-tabia-matokeo, kisha uyafanye kuwa yako.",
          text: [
            "Maoni mazuri ni mahususi na yanahusu tabia, si haiba ya mtu. Mtindo rahisi ni hali, tabia, matokeo (SBI kwa Kiingereza): \"Katika makabidhiano ya zamu ya Jumanne (hali), ulipitia kila oda iliyokuwa wazi (tabia), na zamu iliyofuata ilianza bila kuchelewa (matokeo).\" Unafanya kazi kwa sifa na kwa kusahihisha.",
            "AI inaweza kukusaidia kujiandaa: \"Nisaidie kuandika maoni ya SBI kwa mwanatimu ambaye amechelewa kwenye kikao cha asubuhi mara tatu mwezi huu. Yawe ya heshima na yamalizike kwa swali linalomkaribisha aeleze upande wake.\" Tumia cheo, si jina.",
            "Yatoe wewe mwenyewe, ana kwa ana au kwa simu, na usikilize. AI inakusaidia kuandaa maneno; uaminifu kati yako na watu wako unatoka kwako."
          ],
          steps: ["Chagua hali moja mahususi.", "Eleza tabia uliyoiona, si tabia ya ndani ya mtu.", "Sema matokeo kwa timu au kwa kazi.", "Omba AI ikusaidie kuyaandika kwa heshima, ukitumia cheo si jina.", "Yatoe wewe mwenyewe na usikilize."],
          words: [["SBI", "situation, behavior, impact (hali, tabia, matokeo): njia rahisi ya kutoa maoni yaliyo wazi."], ["Tabia", "kile mtu alichofanya au kusema, ambacho unaweza kuona au kusikia."]],
          slides: [
            { title: "Maoni ya SBI", bullets: ["Hali: lini na wapi", "Tabia: alichofanya", "Matokeo: athari kwa timu au kazi"] },
            { title: "Acha AI ikusaidie kujiandaa", bullets: ["Tumia cheo, si jina", "Omba maneno ya heshima", "Malizia kwa swali la kusikia upande wake"] },
            { title: "Wewe unayatoa", bullets: ["Ana kwa ana au kwa simu", "Sikiliza", "Uaminifu unatoka kwako, si kwa zana"] }
          ],
          tryIt: "Fikiria jambo moja ambalo mwanatimu alifanya vizuri hivi karibuni. Omba msaidizi wa AI akusaidie kuandika sifa ya SBI kwa jambo hilo, ukitumia cheo si jina. Kisha liandike upya kwa maneno yako mwenyewe.",
          youCanNow: "kuandaa maoni yaliyo wazi na ya haki ya hali-tabia-matokeo kwa msaada wa AI na kuyatoa wewe mwenyewe.",
          quickCheck: [
            { objective: "O4", q: "Katika maoni ya SBI, sehemu ya tabia ni ipi?", options: ["Maoni yako kuhusu mtazamo wa mtu", "Tarehe ya mkutano", "Kile mtu alichofanya ambacho uliona au kusikia", "Athari kwa hali yako ya moyo"], answer: 2, why: "Tabia ni kitendo mahususi ulichokiona, si hukumu kuhusu mtu." },
            { objective: "O4", q: "AI imeandaa sifa kwa mwanatimu ambayo inasikika ngumu na isiyo ya kawaida. Unafanya nini?", options: ["Unaiandika upya kwa maneno yako na kuitoa mwenyewe", "Unatuma maandishi ya AI kwa barua pepe yalivyo", "Unaiacha AI iitume", "Unaacha kutoa sifa"], answer: 0, why: "AI inaweza kukusaidia kujiandaa, lakini maoni yanapaswa kuwa kwa maneno yako na kutoka kwako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukabidhi kazi kwa orodha ya kukagua iliyo wazi",
          minutes: 5,
          goal: "Tumia AI kutengeneza orodha ya kukabidhi kazi inayotaja kazi, kiwango, tarehe ya mwisho na nyakati za kufuatilia.",
          text: [
            "Unajua nia ya kamanda (commander's intent): waambie watu lengo na hali ya mwisho inayotakiwa, si hatua tu, ili waweze kubadilika. Kukabidhi kazi katika maisha ya kiraia kunafanya kazi vivyo hivyo.",
            "Makabidhiano mazuri yanajumuisha: kazi yenyewe, kwa nini ni muhimu (nia), kazi iliyokamilika inaonekanaje (kiwango), tarehe ya mwisho, rasilimali na mamlaka aliyonayo, na lini utafuatilia. Omba AI: \"Tengeneza orodha ya kukagua ya ukurasa mmoja kwa kumkabidhi mwanatimu mpya ripoti ya kila wiki ya bidhaa ghalani. Weka lengo, kiwango, tarehe ya mwisho, rasilimali na nyakati za kufuatilia.\"",
            "Kisha mkabidhi ana kwa ana, mwombe akueleze tena kwa maneno yake, na urudi nyuma. Fuatilia katika nyakati mlizokubaliana badala ya kumsimamia kila dakika."
          ],
          steps: ["Taja kazi na kwa nini ni muhimu.", "Eleza kazi iliyokamilika inaonekanaje.", "Weka tarehe ya mwisho, rasilimali na mamlaka.", "Omba AI igeuze haya kuwa orodha ya kukagua ya ukurasa mmoja.", "Mkabidhi, mwombe akueleze tena, na ufuatilie kama mlivyokubaliana."],
          words: [["Kukabidhi kazi", "kumpa mtu mwingine kazi pamoja na mamlaka ya kuifanya."], ["Nia", "lengo na hali ya mwisho ya kazi, ili watu waweze kubadilika mambo yanapobadilika."]],
          slides: [
            { title: "Nia ya kamanda, kwa mtindo wa kiraia", bullets: ["Lengo na hali ya mwisho", "Si hatua tu", "Ili watu waweze kubadilika"] },
            { title: "Makabidhiano mazuri yanajumuisha", bullets: ["Kazi na kwa nini ni muhimu", "Kiwango na tarehe ya mwisho", "Rasilimali, mamlaka na nyakati za kufuatilia"] },
            { title: "Kisha rudi nyuma", bullets: ["Mwombe akueleze tena", "Fuatilia katika nyakati mlizokubaliana", "Usimsimamie kila dakika"] }
          ],
          tryIt: "Chagua kazi moja unayoweza kumkabidhi mtu. Omba msaidizi wa AI atengeneze orodha ya kukabidhi kazi ya ukurasa mmoja yenye lengo, kiwango, tarehe ya mwisho, rasilimali na nyakati za kufuatilia.",
          youCanNow: "kukabidhi kazi kwa orodha ya kukagua iliyo wazi inayotoa lengo, kiwango, tarehe ya mwisho na nyakati za kufuatilia.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini utaje lengo unapokabidhi kazi?", options: ["Ili mtu asibadilishe chochote", "Ili mtu aweze kubadilika mambo yakibadilika", "Ili usihitaji kufuatilia kamwe", "Ili kazi ichukue muda mrefu zaidi"], answer: 1, why: "Kujua lengo na hali ya mwisho kunawasaidia watu kufanya maamuzi mazuri mipango inapobadilika." },
            { objective: "O5", q: "Umemkabidhi mtu ripoti inayotakiwa Ijumaa. Unafanya nini baadaye?", options: ["Unasubiri hadi Ijumaa na kutumaini", "Unarudisha kazi kwako mara moja", "Unaifanya upya mwenyewe bila kuuliza", "Unafuatilia katika nyakati mlizokubaliana"], answer: 3, why: "Kufuatilia katika nyakati mlizokubaliana kunakusaidia kugundua matatizo mapema bila kusimamia kila jambo dogo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutumia AI kwa uwajibikaji ukiwa kiongozi",
          minutes: 5,
          goal: "Tumia kanuni tatu za kutumia AI kwa uwajibikaji na taarifa za timu na kampuni.",
          text: [
            "Ukiwa kiongozi wewe ndiye mfano. Kanuni ya 1: fuata sera ya AI ya mwajiri wako. Kampuni nyingi zinasema zana zipi za AI zimeidhinishwa na taarifa gani zinaweza kuwekwa ndani yake. Kama hakuna sera, uliza.",
            "Kanuni ya 2: zuia taarifa binafsi za watu zisiingie kwenye zana za AI za umma: matatizo ya utendaji kazi pamoja na jina, afya, mshahara, anwani za nyumbani, au chochote kilichosemwa kwa siri. Zuia pia siri za wateja na za kampuni. Tumia vyeo na maelezo ya jumla.",
            "Kanuni ya 3: wewe ndiye mwenye matokeo. Kagua ukweli, namba na sauti kabla ya kitu chochote kutoka. Kama AI ilisaidia kuandika kitu muhimu, soma kila neno. Kuiambia timu yako jinsi unavyotumia AI, na jinsi wao wanavyoweza kuitumia, kunajenga uaminifu."
          ],
          steps: ["Tafuta na usome sera ya AI ya mwajiri wako, au muulize meneja wako.", "Tumia zana zilizoidhinishwa tu kwa taarifa za kazi.", "Zuia taarifa binafsi na za siri zisiingie kwenye AI ya umma.", "Kagua kila kitu ambacho AI inaandika kabla hakijatoka.", "Iambie timu yako jinsi AI inavyoweza kutumika."],
          words: [["Sera ya AI", "kanuni za mwajiri kuhusu zana zipi za AI zinaweza kutumika na taarifa gani zinaweza kuwekwa ndani yake."], ["Siri (confidential)", "taarifa zinazopaswa kubaki ndani ya kikundi au kampuni."]],
          slides: [
            { title: "Kanuni ya 1: Fuata sera", bullets: ["Tumia zana za AI zilizoidhinishwa", "Hakuna sera? Uliza"] },
            { title: "Kanuni ya 2: Walinde watu", bullets: ["Hakuna majina pamoja na utendaji kazi, afya au mshahara", "Hakuna siri za wateja wala za kampuni", "Tumia vyeo na maneno ya jumla"] },
            { title: "Kanuni ya 3: Wewe ndiye mwenye matokeo", bullets: ["Kagua ukweli, namba na sauti", "Soma kila neno la kazi muhimu", "Kuwa wazi kwa timu yako kuhusu AI"] }
          ],
          tryIt: "Kazi ya mwisho: kwa timu ya watu watatu hadi sita, tumia msaidizi wa AI kutengeneza mpango wa wiki moja wenye wahusika, andika barua pepe ya taarifa ya BLUF, na ugeuze maelezo mafupi ya mkutano kuwa jedwali la kazi za kufanya. Tumia vyeo badala ya majina na uhakikishe hakuna taarifa binafsi katika chochote.",
          youCanNow: "kutumia AI ukiwa kiongozi kwa njia inayofuata sera, inayowalinda watu wako na inayokuweka kuwa mwajibikaji.",
          quickCheck: [
            { objective: "O6", q: "Kanuni ipi inakuja kwanza unapotumia AI kazini?", options: ["Fuata sera ya AI ya mwajiri wako", "Tumia zana yoyote unayopenda", "Bandika kila kitu ili AI ipate muktadha", "Acha AI ifanye uamuzi wa mwisho"], answer: 0, why: "Sera ya mwajiri wako inaamua zana na taarifa zipi unaweza kutumia." },
            { objective: "O6", q: "Unataka msaada wa AI kwa ujumbe kuhusu tatizo la mshahara la mwanatimu. Unafanya nini?", options: ["Unabandika jina lake na taarifa za mshahara wake", "Unabandika faili lake lote", "Unaacha taarifa binafsi nje na kueleza hali kwa kutumia cheo", "Unaliweka kwenye mazungumzo ya umma"], answer: 2, why: "Mshahara na taarifa binafsi hazipaswi kuingia kwenye zana ya AI ya umma; cheo kinamlinda mtu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuongoza watu ukiwa na AI kama msaidizi wako",
        questions: [
          { objective: "O4", q: "SBI inasimama kwa nini?", options: ["Hali, tabia, matokeo", "Wafanyakazi, bajeti, bidhaa", "Kasi, usawa, nia", "Usalama, maelezo mafupi, ukaguzi"], answer: 0, why: "SBI ni mtindo rahisi wa kutoa maoni yaliyo wazi." },
          { objective: "O4", q: "Yapi ni maoni yanayotegemea tabia?", options: ["\"Wewe ni mvivu.\"", "\"Ulifika dakika 15 kuchelewa kwenye vikao vitatu mwezi huu.\"", "\"Una mtazamo mbaya.\"", "\"Wewe ni mbaya kuliko wote.\""], answer: 1, why: "Yanaeleza kile mtu alichofanya, ambacho unaweza kuona." },
          { objective: "O5", q: "Katika kukabidhi kazi, \"nia\" maana yake ni:", options: ["Hatua kamili tu", "Tarehe ya mwisho tu", "Lengo na hali ya mwisho, ili watu waweze kubadilika", "Hisia zako kuhusu kazi"], answer: 2, why: "Nia inawasaidia watu kubadilika mambo yanapobadilika." },
          { objective: "O6", q: "Kampuni yako haina sera ya AI. Unafanya nini?", options: ["Unatumia zana yoyote na data yoyote", "Unapiga marufuku AI kwa kila mtu mwenyewe", "Unabandika data za wateja kwenye chatbot ya umma", "Unamuuliza meneja wako kabla ya kutumia AI na taarifa za kazi"], answer: 3, why: "Kama hakuna sera, uliza kabla ya kuweka taarifa za kazi kwenye AI." },
          { objective: "O6", q: "Kipi ni sawa kuweka katika prompt ya AI ya umma?", options: ["\"Mwanatimu mmoja amechelewa kwenye vikao vitatu\"", "Tatizo la afya la mfanyakazi aliyetajwa kwa jina", "Namba za akaunti za wateja", "Anwani za nyumbani za timu yako"], answer: 0, why: "Maelezo ya jumla yanayotumia cheo yanalinda taarifa za watu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Tija na Uongozi",
    questions: [
      { objective: "O1", q: "Mpango wa kazi wa kiraia unajumuisha:", options: ["Nani ni mkuu tu", "Nini, lini, nani na kwa kutumia nini", "Bajeti tu", "Saa ya mkutano tu"], answer: 1, why: "Kama mpango wa misheni, unajumuisha kazi, tarehe, watu na rasilimali." },
      { objective: "O1", q: "Unapoomba AI ipange kazi, inasaidia kuomba:", options: ["Mpangilio wa bahati nasibu", "Mpangilio wa alfabeti", "Mpangilio kwa uharaka na umuhimu", "Kazi ndefu zaidi kwanza"], answer: 2, why: "Uharaka na umuhimu vinatoa mpangilio mzuri wa vipaumbele." },
      { objective: "O1", q: "Uharaka na umuhimu ni:", options: ["Kitu kimoja kila mara", "Maneno mawili ya \"rahisi\"", "Maneno ya kijeshi tu", "Si kila mara kitu kimoja"], answer: 3, why: "Haraka maana yake sasa; muhimu maana yake ina maana kubwa zaidi kwa lengo." },
      { objective: "O1", q: "Nani anaidhinisha mpango wa mwisho wa timu?", options: ["Wewe, kiongozi", "AI", "Mwanatimu mpya kuliko wote", "Hakuna"], answer: 0, why: "Wewe unatumia busara ambayo AI haina." },
      { objective: "O2", q: "BLUF inasimama kwa:", options: ["Briefing, lesson, update, follow-up", "Bottom line up front (jambo kuu mwanzoni)", "Basic leadership under fire", "Best last unit file"], answer: 1, why: "Weka jambo kuu kwanza." },
      { objective: "O2", q: "Maandishi ya kijeshi yanaweza kusikika makali kwa raia. Suluhisho zuri ni:", options: ["Kuyafanya marefu zaidi", "Kuongeza vifupisho zaidi", "Kuongeza mstari wa kirafiki kama \"Niko tayari kujadili\"", "Kuandika kwa herufi kubwa zote"], answer: 2, why: "Sauti ya kirafiki na ya kitaalamu inawasaidia wasomaji wa kiraia." },
      { objective: "O2", q: "Kabla ya kutuma barua pepe iliyoandaliwa na AI, unapaswa:", options: ["Kuituma bila kuisoma", "Kuongeza maneno ya kijeshi", "Kuifanya ndefu zaidi", "Kuisoma kama mpokeaji na kurekebisha chochote kisicho wazi"], answer: 3, why: "Wewe ndiye mwenye unachotuma." },
      { objective: "O3", q: "Muhtasari wa mkutano unapaswa kujumuisha:", options: ["Maamuzi, kazi za kufanya zenye mhusika na tarehe, na maswali yaliyo wazi", "Waliohudhuria tu", "Mizaha tu", "Saa ya kuanza tu"], answer: 0, why: "Hii inamwambia kila mtu nani anafanya nini na lini." },
      { objective: "O6", q: "Kabla ya kubandika maelezo ya mkutano kwenye AI ya umma, unapaswa:", options: ["Kuongeza namba za simu za kila mtu", "Kubadilisha majina kuwa vyeo na kuondoa taarifa binafsi", "Kuongeza siri za kampuni", "Kutofanya chochote"], answer: 1, why: "Linda taarifa za watu kwanza." },
      { objective: "O6", q: "Kutumia zana ya AI ya kufupisha mikutano kazini ni sawa wakati:", options: ["Hakuna anayejua", "Unatumia akaunti binafsi na data za kampuni", "Mwajiri wako anaruhusu na watu wanaambiwa", "Kila mara, bila kujali kanuni"], answer: 2, why: "Fuata kanuni za mwajiri wako na uwe wazi kuhusu kurekodi." },
      { objective: "O3", q: "Kazi ya kufanya isiyo na mhusika inapaswa:", options: ["Kupuuzwa", "Kupewa kila mtu", "Kufutwa", "Kupewa mhusika mmoja na tarehe ya mwisho"], answer: 3, why: "Kazi ya kila mtu mara nyingi inakuwa kazi ya mtu yeyote." },
      { objective: "O4", q: "Maoni mazuri yanahusu:", options: ["Tabia uliyoiona", "Haiba ya mtu", "Uvumi", "Hali ya moyo wako"], answer: 0, why: "Tabia ni mahususi na ya haki." },
      { objective: "O4", q: "Katika maoni ya SBI, \"matokeo\" ni:", options: ["Cheo cha jeshini cha mtu", "Athari kwa timu au kwa kazi", "Adhabu", "Tarehe"], answer: 1, why: "Matokeo yanaeleza kwa nini tabia ni muhimu." },
      { objective: "O4", q: "Nani anapaswa kutoa maoni ambayo AI ilisaidia kuandaa?", options: ["AI kwa barua pepe", "Mfanyakazi mwenzako", "Wewe, ana kwa ana au kwa simu", "Hakuna"], answer: 2, why: "Uaminifu unatoka kwako, si kwa zana." },
      { objective: "O5", q: "Unapokabidhi kazi, baada ya kuikabidhi unapaswa:", options: ["Kuifanya mwenyewe hata hivyo", "Kusimamia kila hatua", "Kutofuatilia tena kamwe", "Kufuatilia katika nyakati mlizokubaliana"], answer: 3, why: "Kufuatilia kama mlivyokubaliana kunasawazisha uaminifu na uwajibikaji." },
      { objective: "O5", q: "Makabidhiano mazuri ya kazi yanajumuisha:", options: ["Lengo, kiwango, tarehe ya mwisho, rasilimali na nyakati za kufuatilia", "Tarehe ya mwisho tu", "\"Ifanye\" tu", "Nywila yako"], answer: 0, why: "Sehemu hizo zinamwezesha mtu kufanikiwa." },
      { objective: "O5", q: "Kumwomba mtu akueleze kazi tena kunakusaidia:", options: ["Kupoteza muda", "Kuhakikisha ameelewa", "Kupima kumbukumbu yake kwa burudani", "Kuepuka kutoa nia"], answer: 1, why: "Kunagundua kutoelewana mapema." },
      { objective: "O6", q: "Kanuni ya 1 ya kutumia AI ukiwa kiongozi ni:", options: ["Tumia zana yoyote ya bure kwa kila kitu", "Usitumie AI kamwe", "Fuata sera ya AI ya mwajiri wako", "Acha timu iamue peke yake"], answer: 2, why: "Sera inasema zana zipi na taarifa zipi zinaruhusiwa." },
      { objective: "O6", q: "Kipi hakipaswi kamwe kuingia kwenye zana ya AI ya umma?", options: ["\"Panga wiki yangu\"", "\"Andika upya barua pepe hii\"", "Orodha ya majina ya kazi", "Taarifa za mshahara na afya za mfanyakazi aliyetajwa kwa jina"], answer: 3, why: "Hizo ni taarifa binafsi na za siri." },
      { objective: "O6", q: "Kama AI ilisaidia kuandika ripoti muhimu, nani anawajibika nayo?", options: ["Wewe", "Kampuni ya AI", "Msomaji", "Hakuna"], answer: 0, why: "Wewe ndiye mwenye matokeo, kwa hiyo kagua kila neno." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      7,
      8,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mpango wa wiki",
        objective: "O1",
        notYet: "Kazi hazijapangwa kwa vipaumbele, au baadhi hazina mhusika.",
        meets: "Mpango wa wiki moja wenye vipaumbele na cheo cha mhusika kwa kila kazi.",
        exceeds: "Mwanafunzi alibadilisha jambo ambalo AI ilikosea na anaweza kusema kwa nini."
      },
      {
        name: "Barua pepe ya taarifa ya BLUF",
        objective: "O2",
        notYet: "Jambo kuu limefichwa katikati, au sauti ni kali.",
        meets: "Sentensi ya kwanza inasema jambo kuu, ikifuatwa na vitone vifupi na hatua inayofuata kwa sauti ya kitaalamu.",
        exceeds: "Barua pepe ilisomwa kama mpokeaji angeisoma na ikafupishwa hadi maneno machache zaidi."
      },
      {
        name: "Kazi za kufanya",
        objective: "O3",
        notYet: "Baadhi ya kazi za kufanya hazina mhusika au tarehe ya mwisho.",
        meets: "Maamuzi, kazi za kufanya zenye mhusika mmoja na tarehe ya mwisho kila moja, na maswali yaliyo wazi.",
        exceeds: "Tarehe za mwisho zinaendana na mpango wa wiki, na maswali yaliyo wazi yana mtu wa kuyajibu."
      },
      {
        name: "Faragha na sera",
        objective: "O6",
        notYet: "Jina au taarifa binafsi inaonekana katika prompt au katika kazi.",
        meets: "Vyeo badala ya majina, na hakuna taarifa binafsi mahali popote.",
        exceeds: "Mwanafunzi anataja sera ya AI ya mwajiri wake au swali ambalo angemuuliza meneja wake kuhusu sera hiyo."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaosema wanatumia mpango wa wiki, barua pepe za BLUF au majedwali ya kazi za kufanya kazini ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoingia au kubaki katika nafasi ya kiraia ya kiongozi, msimamizi au meneja ndani ya miezi 6",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wanajeshi wastaafu au ya uongozi ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu janja yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini, au zana ambayo mwajiri wako ameidhinisha",
      "Orodha za kazi na maelezo ya mikutano ya mazoezi yanayotumia vyeo, si majina",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Toa mifano ya timu za mazoezi yenye vyeo kama \"Kiongozi wa zamu A\" ili hakuna anayetumia majina au taarifa halisi za wafanyakazi wenzake.",
      "Waombe wanafunzi waangalie sera ya AI ya mwajiri wao kabla ya kutumia AI na taarifa halisi za kazi.",
      "Wapange wanafunzi wawili wawili wasome barua pepe za BLUF za wenzao kama wapokeaji na watoe pendekezo moja.",
      "Fanyeni mazoezi ya maoni ya SBI kwa sauti wawili wawili baada ya rasimu ya AI, ili wanafunzi wayafanye kuwa yao.",
      "Pima kazi ya mwisho kwa rubric, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
