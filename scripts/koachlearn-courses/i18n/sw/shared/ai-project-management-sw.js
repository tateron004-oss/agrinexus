"use strict";

// Koach Learn course (Swahili translation of shared/ai-project-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-project-management-sw",
  lang: "sw",
  translationOf: "ai-project-management",
  category: "Veterans (military)",
  name: "Usimamizi wa Miradi kwa Msaada wa AI",
  skills: "Kuandika hati ya mradi (charter) kwa AI, Kugawa kazi katika WBS, Kujenga ratiba yenye hatua muhimu, Kugawa majukumu kwa chati ya RACI, Kutunza rejista ya hatari, Kuandika ripoti za maendeleo na mafunzo tuliyopata",
  outcome: "kutumia msaidizi wa AI kupanga na kuendesha mradi mdogo kuanzia mwanzo hadi mwisho: hati ya mradi ya ukurasa mmoja, mgawanyo wa kazi, ratiba yenye hatua muhimu, chati ya RACI, rejista ya hatari, ripoti za maendeleo za kila wiki na ufungaji wenye mafunzo tuliyopata, ukikagua kila rasimu ya AI wewe mwenyewe.",
  about: [
    "Wasimamizi wa miradi wanapanga kazi, wanapanga watu na wanawajulisha wote hadi kazi inakamilika. Wasaidizi wa AI kama ChatGPT, Microsoft Copilot na Google Gemini wanaweza kuandika rasimu za hati kwa dakika chache, ili utumie muda wako kwa maamuzi na kwa watu.",
    "Kozi hii ni ya wanajeshi wastaafu wanaohamia kazi za miradi za kiraia (wengi tayari waliongoza misheni, usafirishaji wa vifaa na timu), washiriki wa programu za ajira wanaolenga kazi ya mratibu au msaidizi wa mradi, na mtu yeyote anayeongoza mradi kazini au katika jamii.",
    "Utapanga mradi mmoja halisi au wa mazoezi kuanzia hati ya mradi hadi kuufunga. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Panga mradi halisi au wa mazoezi wa wiki nne hadi kumi na mbili (kwa mfano maonyesho ya ajira ya jamii, kuhamisha ofisi au kuzindua tovuti) kwa msaada wa AI: hati ya mradi ya ukurasa mmoja, mgawanyo wa kazi (WBS), ratiba yenye angalau hatua muhimu nne, chati ya RACI, rejista ya hatari yenye hatari tano, ripoti moja ya maendeleo ya wiki na kiolezo cha mafunzo tuliyopata. Weka alama kila mahali ulipoirekebisha AI.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu wanaohamia kazi za miradi za kiraia, washiriki wa programu za ajira wanaolenga kazi ya mratibu au msaidizi wa mradi, na mtu yeyote anayeongoza mradi kazini au katika jamii.",
    startingPoint: "Wengi wameongoza misheni, usafirishaji wa vifaa au timu, na wanaweza kupanga watu na kazi. Wengi hawajatumia hati za miradi za kiraia kama hati ya mradi, chati ya RACI au rejista ya hatari, wala kutumia AI kuziandika.",
    gap: "Waajiri wa kiraia wanatarajia wafanyakazi wa miradi kutoa hati za kawaida za mipango na ripoti za maendeleo zilizo wazi. Wanafunzi wanahitaji kupanga mradi kuanzia hati ya mradi hadi kuufunga, kwa rasimu za AI wanazokagua wenyewe, ili waonyeshe ujuzi wa miradi kwenye usaili na kazini.",
    constraints: [
      "Muda: masomo ya kama dakika tano yenye kazi fupi za mazoezi",
      "Vifaa: kompyuta au simu yenye msaidizi wa AI wa bure na spreadsheet",
      "Hakuna taarifa za siri za mwajiri au za jeshi katika maagizo (prompts) ya AI",
      "Makadirio na namba za AI lazima zikaguliwe; masharti na ada za vyeti zinatoka pmi.org",
      "Maneno rahisi ya kiraia; maneno ya kijeshi yanatafsiriwa, hayachukuliwi kuwa yanajulikana"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa zana za AI wanaweza kuanza na kozi ya \"Utangulizi wa AI na Kujiamini Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mambo makuu ya mradi halisi au wa mazoezi", action: "kuandika hati ya mradi ya ukurasa mmoja inayotaja lengo, wigo, mdhamini, bajeti, tarehe ya mwisho na vipimo vya mafanikio", standard: "kila kosa la AI likiwa limerekebishwa na kukubali kwa mdhamini kukiwa kumeandikwa" },
    { id: "O2", condition: "Ukianzia kwenye hati yako ya mradi", action: "kutengeneza mgawanyo wa kazi (WBS) na ratiba yenye muda wa kila kazi, utegemezi na hatua muhimu", standard: "ikiwa na angalau hatua muhimu nne na makadirio ya muda ya AI yakiwa yamekaguliwa" },
    { id: "O3", condition: "Ukipewa kazi kuu za mradi", action: "kujenga chati ya RACI inayoonyesha nani ni Responsible, Accountable, Consulted na Informed", standard: "ikiwa na mtu mmoja tu Accountable kwa kila kazi na kazi zikiwa zimegawanywa kwa usawa" },
    { id: "O4", condition: "Ukipewa orodha ya hatari za mradi kutoka kwa AI", action: "kupima hatari tano zilizo za kweli zaidi na kuchagua jibu na mwenye kuisimamia kwa kila moja", standard: "ukitumia epuka, punguza, hamisha au kubali kwa usahihi" },
    { id: "O5", condition: "Kwa wiki moja ya mradi", action: "kuandika ripoti ya maendeleo ya nusu ukurasa yenye hali ya kweli ya nyekundu, njano au kijani na maamuzi yanayohitajika", standard: "kila tarehe na namba ikiwa imekaguliwa" },
    { id: "O6", condition: "Mwishoni mwa mradi", action: "kuendesha mapitio ya mafunzo tuliyopata bila kulaumu mtu na kufunga mradi kwa kulinganisha na hati ya mradi", standard: "ukijibu maswali yote manne ya mapitio na kuhifadhi mafaili" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga mradi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika hati ya mradi kwa AI",
          minutes: 5,
          goal: "Andika hati ya mradi ya ukurasa mmoja inayoeleza lengo, wigo na mafanikio ya mradi.",
          text: [
            "Hati ya mradi (project charter) ni cheti cha kuzaliwa cha mradi. Inasema kwa nini mradi upo, utatoa nini, kipi kiko ndani na kipi kiko nje ya wigo, mdhamini ni nani, bajeti na tarehe ya mwisho kwa makadirio, na utajuaje kwamba umefanikiwa. Ni kama amri ya misheni: kusudi, hali ya mwisho inayotakiwa, na mipaka.",
            "Ipe AI mambo halisi na uiache iandike rasimu: \"Write a one-page project charter. Project: veterans' job fair at the community center on March 15. Goal: 30 employers, 200 attendees. Budget: $3,000. Sponsor: the center's director. Out of scope: catering beyond coffee.\" Unaweza pia kuandika agizo hili kwa Kiswahili.",
            "Kisha irekebishe. AI inaweza kubuni namba, wadau au malengo. Kila jambo lazima liwe lako. Hakikisha mdhamini anakubali hati ya mradi kabla kazi haijaanza; hii inazuia mabishano baadaye kuhusu mradi ulitakiwa kufanya nini."
          ],
          steps: ["Andika kusudi, lengo, tarehe ya mwisho, bajeti na mdhamini.", "Orodhesha kipi kiko ndani na kipi kiko nje ya wigo.", "Iombe AI iandike rasimu ya hati ya mradi ya ukurasa mmoja.", "Rekebisha chochote ambacho AI ilibuni.", "Pata kukubali kwa mdhamini."],
          words: [["Hati ya mradi (project charter)", "hati fupi inayoruhusu mradi kuanza na kutaja lengo, wigo na mipaka yake."], ["Wigo (scope)", "kazi ambayo mradi utafanya na ambayo hautafanya."], ["Mdhamini (sponsor)", "mtu anayeunga mkono na kuidhinisha mradi."], ["Mdau (stakeholder)", "mtu yeyote anayeathiriwa na mradi au anayehusika nao."]],
          slides: [
            { title: "Hati ya mradi ni amri ya misheni", bullets: ["Kusudi na lengo", "Wigo: ndani na nje", "Mdhamini, bajeti, tarehe ya mwisho, mafanikio"] },
            { title: "AI inaandika rasimu kutoka kwa mambo yako", bullets: ["Ipe namba halisi", "Omba ukurasa mmoja"] },
            { title: "Rekebisha na uidhinishe", bullets: ["Ondoa mambo yaliyobuniwa", "Mdhamini anakubali kabla kazi haijaanza"] }
          ],
          tryIt: "Chagua mradi halisi au wa mazoezi. Andika mambo yake makuu, iombe AI iandike rasimu ya hati ya mradi ya ukurasa mmoja, na uweke alama kila ulichorekebisha.",
          youCanNow: "kuandika hati ya mradi ya ukurasa mmoja kwa msaada wa AI.",
          quickCheck: [
            { objective: "O1", q: "Wigo (scope) una maana gani katika hati ya mradi?", options: ["Mradi utagharimu kiasi gani", "Mradi utafanya nini na hautafanya nini", "Wanatimu ni akina nani", "Tarehe ambayo mradi unaisha"], answer: 1, why: "Wigo unaweka mipaka ya mradi: kipi kiko ndani na kipi kiko nje." },
            { objective: "O1", q: "Rasimu ya AI ya hati ya mradi ina bajeti ambayo hukuwahi kuipa. Ungefanya nini?", options: ["Kuiacha kwa sababu inaonekana sahihi", "Kufuta mstari wa bajeti katika kila hati", "Kuweka bajeti halisi kutoka kwa mdhamini na kuweka alama ya marekebisho", "Kuiomba timu ipige kura kuhusu bajeti"], answer: 2, why: "AI inajaza mapengo kwa kubahatisha; bajeti halisi inatoka kwa mdhamini." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kugawa kazi na kuipangia ratiba",
          minutes: 6,
          goal: "Geuza hati ya mradi kuwa mgawanyo wa kazi (WBS) na ratiba yenye hatua muhimu.",
          text: [
            "Mgawanyo wa kazi (work breakdown structure, WBS) unagawa mradi mzima katika vipande vidogo hadi kila kipande kiwe kazi ambayo mtu mmoja anaweza kuifanya kwa siku chache. Kwa maonyesho ya ajira: ukumbi, waajiri, matangazo, watu wa kujitolea, mipango ya siku yenyewe, ufuatiliaji baadaye; kila kimoja kinagawanywa katika kazi.",
            "Iulize AI: \"Kutoka kwa hati hii ya mradi, tengeneza WBS yenye awamu na kazi. Kisha kadiria muda wa kila kazi na uorodheshe kazi zipi zinategemea nyingine.\" Utegemezi ni muhimu: huwezi kuchapisha vipeperushi hadi ukumbi na tarehe vithibitishwe.",
            "Igeuze kuwa ratiba katika spreadsheet au zana ya bure, ukianzia tarehe ya mwisho na kurudi nyuma. Weka alama hatua muhimu (milestones), yaani vituo vikubwa vya ukaguzi kama \"ukumbi umewekwa\" au \"waajiri 20 wamethibitisha\". Linganisha makadirio ya muda ya AI na uzoefu wako; mara nyingi ni ya matumaini kupita kiasi."
          ],
          steps: ["Iombe AI WBS yenye awamu na kazi.", "Gawa kazi yoyote inayozidi siku chache.", "Ongeza muda wa kila kazi na utegemezi.", "Jenga ratiba ukianzia tarehe ya mwisho kurudi nyuma.", "Weka alama angalau hatua muhimu nne."],
          words: [["WBS", "work breakdown structure: mradi mzima uliogawanywa katika kazi ndogo."], ["Utegemezi (dependency)", "kazi ambayo haiwezi kuanza hadi nyingine imalizike."], ["Hatua muhimu (milestone)", "kituo kikuu cha ukaguzi katika mradi."]],
          slides: [
            { title: "Mgawanyo wa kazi (WBS)", bullets: ["Mradi mzima, kisha awamu, kisha kazi", "Kila kazi: mtu mmoja, siku chache"] },
            { title: "Muda na utegemezi", bullets: ["Kila kazi inachukua muda gani", "Kipi lazima kimalizike kwanza"] },
            { title: "Ratiba na hatua muhimu", bullets: ["Anza na tarehe ya mwisho, rudi nyuma", "Weka alama vituo vikuu", "Makadirio ya AI ni ya matumaini mno"] }
          ],
          tryIt: "Tumia AI kutengeneza WBS ya mradi wako, kisha jenga ratiba rahisi katika spreadsheet yenye muda wa kila kazi, utegemezi na angalau hatua muhimu nne.",
          youCanNow: "kugawa mradi katika kazi na kuzipangia ratiba yenye hatua muhimu.",
          quickCheck: [
            { objective: "O2", q: "Hatua muhimu (milestone) ni nini?", options: ["Kituo kinachoonyesha kwamba sehemu kubwa imekamilika", "Kazi ndefu zaidi katika ratiba", "Mkutano na mdhamini", "Hatari ambayo imetokea"], answer: 0, why: "Hatua muhimu inaonyesha matokeo makuu, kama \"ukumbi umewekwa\"." },
            { objective: "O2", q: "WBS yako ina kazi inayoitwa \"Panga tukio\" itakayochukua wiki sita. Ungefanya nini?", options: ["Kuiacha kama kazi moja", "Kuiondoa kwenye mpango", "Kumpa mdhamini", "Kuigawa katika kazi ndogo ambazo mtu mmoja anaweza kufanya kwa siku chache"], answer: 3, why: "Kazi za WBS zinapaswa kuwa ndogo kiasi cha mtu mmoja kuzifanya kwa siku chache." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kugawa majukumu kwa chati ya RACI",
          minutes: 5,
          goal: "Jenga chati ya RACI ili kila mtu ajue nani anafanya, nani anaamua na nani anajulishwa.",
          text: [
            "Kuchanganyikiwa kuhusu nani anafanya nini kunazamisha miradi. Chati ya RACI inaorodhesha kazi upande wa kushoto na watu juu, na inajaza kila kisanduku: R ni Responsible (anafanya kazi), A ni Accountable (anamiliki matokeo na anaidhinisha; mmoja tu kwa kila kazi), C ni Consulted (anatoa maoni) na I ni Informed (anajulishwa maendeleo).",
            "Iulize AI: \"Tengeneza chati ya RACI kwa kazi na majukumu haya: [kazi], [watu au majukumu].\" Kisha kagua: kila kazi ina A mmoja tu? Kuna mtu aliyebebeshwa R nyingi kupita kiasi? Kuna mtu anayeulizwa (Consulted) kuhusu kila kitu na hivyo kuchelewesha mambo?",
            "Shiriki chati ya RACI na timu na mdhamini. Maswali yanapotokea, kama nani anaidhinisha kipeperushi, onyesha chati."
          ],
          steps: ["Orodhesha kazi kuu na watu au majukumu.", "Iombe AI iandike rasimu ya chati ya RACI.", "Hakikisha kila kazi ina A mmoja tu.", "Sawazisha R ili mtu yeyote asibebeshwe mzigo mkubwa.", "Ishiriki na timu na mdhamini."],
          words: [["Chati ya RACI", "jedwali linaloonyesha nani ni Responsible, Accountable, Consulted na Informed kwa kila kazi."], ["Accountable", "mtu mmoja anayemiliki matokeo na kuidhinisha."]],
          slides: [
            { title: "RACI", bullets: ["R: Responsible, anafanya kazi", "A: Accountable, anaimiliki; mmoja tu", "C: Consulted (anaulizwa); I: Informed (anajulishwa)"] },
            { title: "Kagua chati", bullets: ["A mmoja tu kwa kila kazi", "Hakuna aliyebebeshwa R nyingi mno", "Si kila mtu anaulizwa kuhusu kila kitu"] },
            { title: "Itumie", bullets: ["Shiriki na timu na mdhamini", "Ionyeshe maswali yanapotokea"] }
          ],
          tryIt: "Iombe AI iandike rasimu ya chati ya RACI kwa kazi kuu za mradi wako. Irekebishe ili kila kazi iwe na A mmoja tu na kazi zigawanywe kwa usawa.",
          youCanNow: "kujenga na kukagua chati ya RACI inayoweka majukumu wazi.",
          quickCheck: [
            { objective: "O3", q: "Katika chati ya RACI, \"C\" ina maana gani?", options: ["Completed: imekamilika", "Consulted: anaulizwa maoni kabla ya maamuzi", "Controlled: anafanya kazi yote", "Cancelled: imefutwa"], answer: 1, why: "Watu walio Consulted wanatoa maoni kabla ya kazi au uamuzi." },
            { objective: "O3", q: "Watu wawili wamewekwa kama Accountable kwa kazi moja. Ungefanya nini?", options: ["Kuchagua mtu mmoja awe Accountable", "Kuwaacha wote wawili ili kazi ifanyike", "Kuwaweka wote kama Informed", "Kuiondoa kazi hiyo"], answer: 0, why: "Kila kazi inahitaji mtu mmoja tu Accountable anayemiliki matokeo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga mradi",
        questions: [
          { objective: "O1", q: "Hati ya mradi inaeleza nini?", options: ["Oda ya chakula cha mchana cha timu tu", "Marejesho ya kodi ya kampuni", "Kusudi, wigo, mdhamini, bajeti, tarehe ya mwisho na mafanikio ya mradi", "Kila kazi kwa undani"], answer: 2, why: "Hati ya mradi inaweka msingi wa mradi." },
          { objective: "O1", q: "AI inaongeza lengo la \"waajiri 100\" kwenye hati yako ya mradi, lakini wewe ulisema 30. Unafanya nini?", options: ["Kulirekebisha liwe lengo lako halisi", "Kuliacha", "Kuchukua wastani wa namba hizo", "Kufuta hati ya mradi"], answer: 0, why: "Kila jambo katika hati ya mradi lazima liwe lako." },
          { objective: "O2", q: "Utegemezi (dependency) ni:", options: ["Mwanatimu", "Mstari wa bajeti", "Hatua muhimu", "Kazi ambayo haiwezi kuanza hadi nyingine imalizike"], answer: 3, why: "Utegemezi unaweka mpangilio wa kazi." },
          { objective: "O3", q: "Watu wangapi wanapaswa kuwa Accountable (A) kwa kazi moja katika chati ya RACI?", options: ["Kila mtu", "Mmoja tu", "Hakuna", "Angalau watano"], answer: 1, why: "Mmiliki mmoja anazuia kuchanganyikiwa." },
          { objective: "O2", q: "AI inakadiria kwamba kuweka ukumbi kunachukua saa moja. Kwa mujibu wa kozi hii, unapaswa:", options: ["Kukubali", "Kulinganisha na uzoefu wako; makadirio ya AI ni ya matumaini mno", "Kuweka sifuri", "Kuacha kupanga ratiba"], answer: 1, why: "Tumia busara yako mwenyewe kuhusu muda wa kazi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha na kufunga mradi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutunza rejista ya hatari",
          minutes: 5,
          goal: "Tambua hatari za mradi, zipime na panga majibu kwa msaada wa AI.",
          text: [
            "Hatari ni jambo linaloweza kutokea na kuathiri mradi. Rejista ya hatari inaorodhesha kila hatari, uwezekano wa kutokea, ukubwa wa madhara yake, mpango wa kujibu na mwenye kuisimamia anayeifuatilia.",
            "Iulize AI: \"Orodhesha hatari kumi za mradi huu [bandika hati ya mradi], pima uwezekano na madhara kama chini, wastani au juu, na upendekeze jibu kwa kila moja.\" Majibu ni: kuiepuka, kuipunguza, kuihamisha (kwa mfano bima au mkataba) au kuikubali ukiwa na mpango wa akiba.",
            "Baki na hatari ambazo ni za kweli kwa mradi wako tu, ongeza zile ambazo AI ilisahau, na ipitie rejista kila wiki. Wapangaji wa kijeshi huita hili kufikiria njia mbadala na hatua zinazofuata (branches and sequels); raia huita usimamizi wa hatari."
          ],
          steps: ["Iombe AI iorodheshe hatari kutoka kwa hati yako ya mradi.", "Pima uwezekano na madhara.", "Chagua jibu: epuka, punguza, hamisha au kubali.", "Mpe kila hatari mwenye kuisimamia.", "Pitia rejista kila wiki."],
          words: [["Hatari (risk)", "jambo linaloweza kutokea na kuathiri mradi."], ["Rejista ya hatari", "orodha ya hatari pamoja na vipimo, majibu na wenye kuzisimamia."], ["Upunguzaji (mitigation)", "hatua za kupunguza uwezekano au madhara ya hatari."]],
          slides: [
            { title: "Safu za rejista ya hatari", bullets: ["Hatari, uwezekano, madhara", "Jibu na mwenye kuisimamia"] },
            { title: "Majibu manne", bullets: ["Epuka au punguza", "Hamisha (bima, mkataba)", "Kubali ukiwa na mpango wa akiba"] },
            { title: "Baki na ukweli", bullets: ["Ondoa hatari zisizohusika", "Ongeza zile ambazo AI ilisahau", "Pitia kila wiki"] }
          ],
          tryIt: "Iombe AI iorodheshe hatari za mradi wako. Baki na tano zilizo za kweli zaidi, zipime, chagua majibu na uwape wenye kuzisimamia.",
          youCanNow: "kujenga na kutunza rejista ya hatari kwa msaada wa AI.",
          quickCheck: [
            { objective: "O4", q: "Jibu lipi la hatari lina maana ya kuifanya hatari isiwe na uwezekano mkubwa au madhara makubwa?", options: ["Epuka", "Hamisha", "Punguza", "Kubali"], answer: 2, why: "Kupunguza kunashusha uwezekano au madhara ya hatari." },
            { objective: "O4", q: "AI inaorodhesha hatari 25 zinazowezekana kwa maonyesho yako ya ajira. Ungefanya nini?", options: ["Kuweka zote 25 kwenye rejista", "Kuzipuuza zote", "Kuchagua ile ambayo AI iliandika kwanza", "Kubaki na tano zilizo za kweli zaidi, kuzipima na kuwapa wenye kuzisimamia"], answer: 3, why: "Rejista yenye manufaa inazingatia hatari zilizo za kweli zaidi, kila moja ikiwa na jibu na mwenye kuisimamia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika ripoti za maendeleo ambazo watu wanasoma",
          minutes: 5,
          goal: "Andika ripoti fupi ya maendeleo ya kila wiki yenye hali iliyo wazi ya nyekundu, njano au kijani.",
          text: [
            "Ripoti ya maendeleo inamjulisha mdhamini na timu. Iwe nusu ukurasa: hali ya jumla (kijani: iko kwenye mstari, njano: iko hatarini, nyekundu: imetoka nje ya mpango), kilichofanyika wiki hii, kinachofuata, hatari na matatizo, na maamuzi yanayohitajika kutoka kwa mdhamini.",
            "Bandika taarifa mpya za ratiba na maelezo yako kwenye AI na uiulize: \"Andika ripoti ya maendeleo ya wiki ya nusu ukurasa yenye rangi ya hali ya jumla, yaliyofanikiwa, hatua zinazofuata, hatari na matatizo, na maamuzi yanayohitajika. Kuwa wazi na moja kwa moja.\"",
            "Kuwa mkweli kuhusu njano na nyekundu. Habari mbaya mapema ni zawadi: inampa mdhamini muda wa kusaidia. Kuficha matatizo hadi tarehe ya mwisho ndiyo njia ya haraka zaidi ya kupoteza imani. Kagua kila tarehe na namba ambayo AI iliandika."
          ],
          steps: ["Sasisha ratiba na rejista ya hatari.", "Bandika maelezo na taarifa mpya kwenye AI.", "Omba ripoti ya nusu ukurasa yenye rangi ya hali.", "Kagua kila tarehe na namba.", "Ituma siku ileile kila wiki."],
          words: [["Ripoti ya maendeleo (status report)", "taarifa ya mara kwa mara kuhusu maendeleo, hatari na mahitaji ya mradi."], ["Tatizo (issue)", "shida inayotokea sasa, tofauti na hatari ambayo inaweza kutokea."], ["Hali ya RAG", "nyekundu, kahawia-njano (amber) au kijani: ishara ya haraka ya afya ya mradi."]],
          slides: [
            { title: "Nusu ukurasa", bullets: ["Rangi ya hali: kijani, njano, nyekundu", "Kilichofanyika wiki hii na hatua zinazofuata", "Hatari, matatizo, maamuzi yanayohitajika"] },
            { title: "AI inaandika rasimu kutoka kwa maelezo yako", bullets: ["Bandika taarifa mpya za ratiba", "Omba lugha ya moja kwa moja", "Kagua tarehe na namba"] },
            { title: "Habari mbaya mapema", bullets: ["Inampa mdhamini muda wa kusaidia", "Kuficha matatizo kunapoteza imani"] }
          ],
          tryIt: "Andika ripoti ya maendeleo ya wiki kwa mradi wako (wiki ya 3, halisi au ya kufikirika) kwa msaada wa AI. Weka rangi ya hali ya kweli na angalau uamuzi mmoja unaohitajika.",
          youCanNow: "kuandika ripoti ya maendeleo ya kila wiki iliyo wazi na ya kweli kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "Hali ya njano kwa kawaida ina maana gani?", options: ["Mradi umekamilika", "Kuna tatizo linaloweza kuathiri mpango lisiporekebishwa", "Kila kitu kiko kwenye mstari", "Mradi umefutwa"], answer: 1, why: "Njano ni onyo: iko hatarini lakini bado inaweza kurekebishwa." },
            { objective: "O5", q: "Unahitaji mdhamini aidhinishe pesa za ziada wiki hii. Ungefanya nini katika ripoti ya maendeleo?", options: ["Kuiacha nje ili ripoti ibaki kijani", "Kuiweka kwenye ukurasa wa tatu", "Kuitaja ana kwa ana tu mwezi ujao", "Kuiorodhesha wazi chini ya maamuzi yanayohitajika"], answer: 3, why: "Maamuzi yanayohitajika yanapaswa kuonekana kwa urahisi ili mdhamini achukue hatua." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufunga mradi na kuandika mafunzo tuliyopata",
          minutes: 5,
          goal: "Funga mradi ipasavyo na uendeshe mapitio ya mafunzo tuliyopata.",
          text: [
            "Miradi mingi inafifia tu bila kufungwa. Ufungaji sahihi unathibitisha kwamba malengo yalifikiwa (linganisha na hati ya mradi), unakabidhi kazi yoyote inayoendelea, unalipa bili za mwisho, unaishukuru timu na kuhifadhi mafaili mahali ambapo wengine wanaweza kuyapata.",
            "Mapitio ya mafunzo tuliyopata, kama mapitio baada ya operesheni (after-action review), yanauliza: tulipanga nini, kilitokea nini, kwa nini, na tufanye nini tofauti wakati ujao? Kusanya maoni kutoka kwa kila mtu, pamoja na yale yaliyokwenda vizuri.",
            "AI inaweza kupanga maoni: \"Panga maoni haya ya mafunzo tuliyopata katika mada, na uandike mapendekezo matatu kwa miradi ijayo.\" Usimlaumu mtu, zingatia mchakato, na hakikisha muhtasari ni wa haki. Ukitaka kukua katika usimamizi wa miradi, Project Management Institute (PMI, shirika la kimataifa la wasimamizi wa miradi) inatoa vyeti kama CAPM, PMP na PMI-CPMAI kinachohusu AI; kagua pmi.org kwa masharti na ada za sasa."
          ],
          steps: ["Linganisha matokeo na malengo ya hati ya mradi.", "Kabidhi kazi inayoendelea na ulipe bili za mwisho.", "Endesha mapitio ya mafunzo tuliyopata bila kulaumu mtu.", "Tumia AI kupanga maoni na kuandika rasimu ya mapendekezo.", "Hifadhi mafaili yote na uishukuru timu."],
          words: [["Ufungaji (closeout)", "mwisho rasmi wa mradi."], ["Mafunzo tuliyopata (lessons learned)", "kile timu ilichojifunza ambacho kinapaswa kubadilisha jinsi miradi ijayo inavyoendeshwa."], ["Mapitio baada ya operesheni (after-action review)", "kuangalia nyuma kwa mpangilio: kilichopangwa, kilichotokea, kwa nini, nini kibadilike."]],
          slides: [
            { title: "Funga ipasavyo", bullets: ["Linganisha matokeo na hati ya mradi", "Kabidhi, lipa bili, hifadhi mafaili", "Ishukuru timu"] },
            { title: "Mafunzo tuliyopata", bullets: ["Kilichopangwa, kilichotokea, kwa nini, nini kibadilike", "Pia yaliyokwenda vizuri", "Bila kulaumu mtu"] },
            { title: "Kuza kazi yako", bullets: ["Vyeti vya PMI: CAPM, PMP, PMI-CPMAI", "Kagua pmi.org kwa masharti na ada za sasa"] }
          ],
          sources: [{ name: "Project Management Institute: vyeti", url: "https://www.pmi.org/certifications" }],
          tryIt: "Kazi ya mwisho: kamilisha mpango wa mradi wako wenye hati ya mradi, WBS, ratiba yenye hatua muhimu, RACI, rejista ya hatari na ripoti moja ya maendeleo, kisha andika kiolezo cha mafunzo tuliyopata chenye maswali manne ya mapitio. Weka alama kila mahali ulipoirekebisha AI.",
          youCanNow: "kupanga, kuendesha na kufunga mradi ukitumia AI kuandika rasimu za hati huku wewe ukifanya maamuzi.",
          quickCheck: [
            { objective: "O6", q: "Kusudi la mapitio ya mafunzo tuliyopata ni nini?", options: ["Kutafuta mtu wa kulaumu", "Kuboresha mchakato kwa mradi unaofuata", "Kumaliza mradi bila makaratasi", "Kutoa tuzo"], answer: 1, why: "Mafunzo tuliyopata hayalaumu mtu na yanazingatia nini kibadilike wakati ujao." },
            { objective: "O6", q: "Mradi umekamilika. Ungefanya nini kabla ya kusema umefungwa?", options: ["Kufuta mafaili ya mradi", "Kuanza mradi unaofuata mara moja", "Kulinganisha matokeo na hati ya mradi na kuhifadhi mafaili", "Kutuma ujumbe wa shukrani tu"], answer: 2, why: "Ufungaji unakagua matokeo dhidi ya hati ya mradi na kuhifadhi kumbukumbu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha na kufunga mradi",
        questions: [
          { objective: "O4", q: "Kuna tofauti gani kati ya hatari na tatizo (issue)?", options: ["Hakuna tofauti", "Matatizo daima ni mazuri", "Hatari zinahusu pesa tu", "Hatari inaweza kutokea; tatizo linatokea sasa"], answer: 3, why: "Hatari zinawezekana; matatizo ni shida za sasa." },
          { objective: "O4", q: "Kununua bima dhidi ya hasara inayowezekana ni jibu lipi la hatari?", options: ["Hamisha", "Epuka", "Kubali", "Puuza"], answer: 0, why: "Bima inahamisha madhara kwa mtu mwingine." },
          { objective: "O5", q: "Mradi wako huenda ukakosa hatua muhimu. Ripoti yako inapaswa kuonyesha hali gani?", options: ["Kijani ili watu wasiwe na wasiwasi", "Bila hali yoyote", "Njano au nyekundu, kwa ukweli", "Zambarau"], answer: 2, why: "Habari mbaya mapema zinamwezesha mdhamini kusaidia." },
          { objective: "O6", q: "Mapitio ya mafunzo tuliyopata yanapaswa kuwa:", options: ["Kutafuta mtu wa kufukuzwa kazi", "Kurukwa", "Kuhusu yaliyokwenda vibaya tu", "Bila kulaumu mtu na yakizingatia mchakato"], answer: 3, why: "Mapitio yasiyolaumu mtu yanaleta maoni ya kweli." },
          { objective: "O6", q: "Unapaswa kukagua wapi masharti na ada za sasa za vyeti vya PMI?", options: ["Jukwaa lolote la mtandaoni", "Kubahatisha kwa AI", "pmi.org", "Kipeperushi"], answer: 2, why: "Masharti rasmi hubadilika; kagua chanzo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Usimamizi wa Miradi kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Kazi kuu ya msimamizi wa mradi ni:", options: ["Kufanya kila kazi peke yake", "Kupanga kazi, kupanga watu na kuwajulisha wote", "Kuidhinisha bajeti tu", "Kuandika code"], answer: 1, why: "Wasimamizi wa miradi wanapanga, wanaratibu na wanawasiliana." },
      { objective: "O1", q: "Katika kozi hii, kazi ya AI ni:", options: ["Kuandika rasimu za hati huku wewe ukifanya maamuzi", "Kufanya kila uamuzi", "Kuchukua nafasi ya mdhamini", "Kuidhinisha bajeti"], answer: 0, why: "AI inaandika rasimu; msimamizi wa mradi anaamua." },
      { objective: "O1", q: "Hati ya mradi inafanana zaidi na hati ipi ya kijeshi?", options: ["Fomu ya likizo", "Orodha ya ukaguzi wa sare", "Amri ya misheni", "Hati ya mshahara"], answer: 2, why: "Zote mbili zinatoa kusudi, hali ya mwisho inayotakiwa na mipaka." },
      { objective: "O1", q: "\"Chakula zaidi ya kahawa\" kikiorodheshwa kama nje ya wigo kina maana:", options: ["Mradi hautakitoa", "Ndilo lengo kuu", "Ni hatari", "Ni hatua muhimu"], answer: 0, why: "Kazi iliyo nje ya wigo si sehemu ya mradi." },
      { objective: "O1", q: "Nani anapaswa kukubali hati ya mradi kabla kazi haijaanza?", options: ["Hakuna mtu", "AI tu", "Mfanyakazi yeyote", "Mdhamini"], answer: 3, why: "Kukubali kwa mdhamini kunazuia mabishano baadaye." },
      { objective: "O2", q: "WBS inagawa mradi katika:", options: ["Mistari ya bajeti tu", "Kazi ndogo ambazo mtu mmoja anaweza kufanya kwa siku chache", "Picha za timu", "Vyumba vya ofisi"], answer: 1, why: "Kazi ndogo ni rahisi kupanga na kufuatilia." },
      { objective: "O2", q: "Huwezi kuchapisha vipeperushi hadi ukumbi uthibitishwe. Huu ni:", options: ["Hatua muhimu", "Utegemezi", "Mdhamini", "Jibu la hatari"], answer: 1, why: "Kazi moja inategemea nyingine kumalizika." },
      { objective: "O2", q: "\"Waajiri 20 wamethibitisha\" ni mfano mzuri wa:", options: ["Muda wa kazi", "Jukumu la RACI", "Rangi ya hali", "Hatua muhimu"], answer: 3, why: "Hatua muhimu ni vituo vikuu vya ukaguzi." },
      { objective: "O2", q: "Mara nyingi ratiba hujengwa vizuri zaidi kwa:", options: ["Kuanzia tarehe ya mwisho na kurudi nyuma", "Kubahatisha", "Kuanza na kazi ya mwisho tu", "Kuruka tarehe"], answer: 0, why: "Kurudi nyuma kunaonyesha kipi lazima kianze lini." },
      { objective: "O3", q: "Katika RACI, \"R\" ina maana:", options: ["Retired: amestaafu", "Reviewer: anapitia tu", "Responsible: anafanya kazi", "Rejected: amekataliwa"], answer: 2, why: "R ni mtu anayefanya kazi." },
      { objective: "O3", q: "Katika RACI, \"I\" ina maana:", options: ["In charge: msimamizi", "Inspector: mkaguzi", "Ignored: anapuuzwa", "Informed: anajulishwa maendeleo"], answer: 3, why: "Watu walio Informed wanapata taarifa mpya." },
      { objective: "O3", q: "Chati ya RACI inaonyesha mtu mmoja ana R kwenye kazi 15. Unapaswa:", options: ["Kumwongezea R zaidi", "Kuondoa chati", "Kusawazisha upya kazi", "Kupuuza"], answer: 2, why: "Watu waliobebeshwa mzigo mkubwa wanachelewesha mradi." },
      { objective: "O4", q: "Rejista ya hatari ina:", options: ["Bajeti tu", "Hatari, uwezekano, madhara, jibu na mwenye kuisimamia", "Siku za kuzaliwa za timu", "Maoni ya wateja"], answer: 1, why: "Safu hizi zinafanya hatari ziweze kusimamiwa." },
      { objective: "O4", q: "Kubadilisha mpango ili hatari isiweze kutokea ni jibu lipi?", options: ["Epuka", "Hamisha", "Kubali", "Ripoti"], answer: 0, why: "Kuepuka kunaondoa hatari." },
      { objective: "O4", q: "Rejista ya hatari inapaswa kupitiwa mara ngapi?", options: ["Kamwe", "Mara moja mwishoni", "Kila wiki", "Kila baada ya miaka kumi"], answer: 2, why: "Hatari hubadilika mradi unavyoendelea." },
      { objective: "O5", q: "Ripoti ya maendeleo inapaswa kuwa ya urefu wa kama:", options: ["Nusu ukurasa", "Kurasa hamsini", "Neno moja", "Ndefu iwezekanavyo"], answer: 0, why: "Ripoti fupi zinasomwa." },
      { objective: "O5", q: "Hali ya kijani ina maana:", options: ["Imetoka nje ya mpango", "Imefutwa", "Haijulikani", "Iko kwenye mstari"], answer: 3, why: "Kijani kinaonyesha mradi uko kwenye mstari." },
      { objective: "O5", q: "Kabla ya kutuma ripoti ya maendeleo iliyoandikwa na AI, lazima:", options: ["Uongeze rangi zaidi", "Ukague kila tarehe na namba", "Uondoe sehemu ya maamuzi", "Uitume bila kuisoma"], answer: 1, why: "AI inaweza kukosea maelezo madogo." },
      { objective: "O6", q: "Mapitio ya mafunzo tuliyopata yanauliza:", options: ["Nani wa kulaumu", "Tulipanga nini, kilitokea nini, kwa nini, na nini kibadilike", "Jinsi ya kuficha makosa", "Hakuna kitu"], answer: 1, why: "Yanafanana na mapitio baada ya operesheni." },
      { objective: "O6", q: "Ufungaji sahihi unajumuisha:", options: ["Kuondoka tu", "Kufuta kumbukumbu zote", "Kuanza mradi mpya bila mapitio", "Kulinganisha matokeo na hati ya mradi na kuhifadhi mafaili"], answer: 3, why: "Kufunga ipasavyo kunahifadhi thamani na mafunzo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      2,
      5,
      7,
      9,
      11,
      12,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Hati ya mradi",
        objective: "O1",
        notYet: "Inakosa lengo, wigo, mdhamini, tarehe ya mwisho au vipimo vya mafanikio, au makisio ya AI yamebaki.",
        meets: "Ukurasa mmoja wenye sehemu zote, na kila marekebisho ya AI yamewekewa alama.",
        exceeds: "Pia inaorodhesha kipi kiko nje ya wigo na jinsi mafanikio yatakavyopimwa."
      },
      {
        name: "WBS na ratiba",
        objective: "O2",
        notYet: "Kazi ni kubwa mno, au hatua muhimu ni chini ya nne.",
        meets: "Kazi ndogo, utegemezi na angalau hatua muhimu nne, makadirio ya AI yakiwa yamekaguliwa.",
        exceeds: "Ratiba imejengwa kuanzia tarehe ya mwisho kurudi nyuma, ikiwa na muda wa akiba."
      },
      {
        name: "Chati ya RACI",
        objective: "O3",
        notYet: "Kazi fulani haina mtu Accountable au ina zaidi ya mmoja.",
        meets: "A mmoja tu kwa kila kazi na kazi zimegawanywa kwa haki.",
        exceeds: "Inaonyesha nani lazima aulizwe kabla ya maamuzi makuu."
      },
      {
        name: "Rejista ya hatari",
        objective: "O4",
        notYet: "Hatari ni chini ya tano, au hakuna majibu wala wenye kuzisimamia.",
        meets: "Hatari tano za kweli zimepimwa, kila moja ikiwa na jibu na mwenye kuisimamia.",
        exceeds: "Inaonyesha lini kila hatari itapitiwa na nini kitasababisha kuchukua hatua."
      },
      {
        name: "Ripoti ya maendeleo",
        objective: "O5",
        notYet: "Rangi ya hali si ya kweli, au tarehe na namba hazijakaguliwa.",
        meets: "Nusu ukurasa yenye rangi ya kweli, maendeleo, hatua zinazofuata na maamuzi yanayohitajika.",
        exceeds: "Mdhamini mwenye shughuli nyingi angeweza kuchukua hatua chini ya dakika moja."
      },
      {
        name: "Ufungaji na mafunzo tuliyopata",
        objective: "O6",
        notYet: "Hakuna kiolezo cha mafunzo tuliyopata, au kinalaumu watu.",
        meets: "Kiolezo kisicholaumu mtu chenye maswali manne ya mapitio.",
        exceeds: "Pia kinapanga jinsi matokeo yatakavyolinganishwa na hati ya mradi na mahali mafaili yatakapohifadhiwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaotumia mpango huo kuendesha mradi halisi kazini au katika jamii (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoomba kazi ya mratibu au msaidizi wa mradi ndani ya siku 90",
      "Wanafunzi wanaoanza njia ya cheti cha usimamizi wa miradi au kozi nyingine ya Koach Learn ndani ya siku 30",
      "Wanafunzi wanaofaulu kazi ya mwisho kwa rubric"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu yenye intaneti",
      "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini",
      "Spreadsheet ya bure kama Google Sheets au Microsoft Excel",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kumaliza mpango wa mradi"
    ],
    facilitatorNotes: [
      "Mwombe kila mwanafunzi achague mradi halisi au wa jamii mapema ili kila kazi ijenge juu ya mpango uleule.",
      "Wasaidie wanajeshi wastaafu kutafsiri uzoefu wa kijeshi (amri za misheni, usafirishaji wa vifaa) kuwa maneno ya miradi ya kiraia.",
      "Wakumbushe wanafunzi wasiweke kamwe taarifa za siri za mwajiri au za jeshi katika zana za AI.",
      "Hakikisha wanafunzi wanaweka alama mahali walipoirekebisha AI; huu ndio ujuzi mkuu ambao waajiri wanataka kuona.",
      "Pima mpango wa mwisho kwa rubric na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
