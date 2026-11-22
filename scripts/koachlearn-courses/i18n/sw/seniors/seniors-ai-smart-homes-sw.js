"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-smart-homes.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Voice commands stay in English inside quotes, with the meaning in Swahili: Alexa and Google Assistant do not understand Swahili commands.

module.exports = {
  id: "seniors-ai-smart-homes-sw",
  lang: "sw",
  translationOf: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "AI na Nyumba Janja",
  skills: "Kuelewa vifaa vya nyumba janja, Kutoa amri za sauti zilizo wazi kwa spika janja, Kuweka ratiba rahisi (routine), Kuchagua vifaa kwa usalama na faraja, Kulinda faragha yako nyumbani",
  outcome: "kutumia spika janja au msaidizi wa sauti wa simu yako kutoa amri za sauti zilizo wazi, kupanga au kuweka ratiba moja rahisi ya kila siku (kama kikumbusho cha asubuhi na hali ya hewa), na kulinda faragha yako kwa kuzima maikrofoni na kukagua mipangilio.",
  about: [
    "Nyumba janja ni nyumba yenye vifaa unavyoweza kuviongoza kwa sauti au kwa simu yako: spika zinazojibu maswali, taa zinazowaka zenyewe, plagi zinazowasha na kuzima taa za mezani, na kengele za mlango zenye kamera. Kwa wazee, vifaa hivi vinaweza kurahisisha maisha ya kila siku na kuyafanya salama zaidi, hasa kwa mtu anayeishi peke yake.",
    "Utajifunza vifaa vinavyotumika sana hufanya nini, jinsi ya kuongea na spika janja kama Amazon Echo (Alexa) au Google Nest (Google Assistant), jinsi ya kuweka ratiba rahisi, na jinsi ya kulinda nyumba yako na faragha yako.",
    "Huhitaji kuwa na kifaa janja chochote ili kusoma kozi hii: unaweza kufanya mazoezi ya sauti kwa msaidizi ulio tayari kwenye simu yako. Kila somo linachukua kama dakika tano. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Panga ratiba moja ya kila siku kwa nyumba yako, kama \"Good morning\" (habari za asubuhi): spika au simu inakuambia hali ya hewa, inakukumbusha dawa yako ya asubuhi na inawasha taa ya mezani. Iandike, iweke kadiri vifaa vyako vinavyoruhusu, na uifanyie mazoezi kwa sauti. Kisha tafuta na utumie kitufe au mpangilio wa kuzima maikrofoni.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee, wengi wakiishi peke yao, walio na spika janja, taa janja au kengele ya mlango yenye video, au wanaofikiria kununua, mara nyingi zawadi kutoka kwa familia, na wanataka ziwasaidie kwa vikumbusho, usalama na kupiga simu.",
    startingPoint: "Wanatumia simu kupiga na kutuma ujumbe mfupi na wana Wi-Fi nyumbani. Wengi wana spika janja lakini wanaitumia tu kwa hali ya hewa au muziki, na hawana uhakika jinsi ratiba au mipangilio ya faragha inavyofanya kazi.",
    gap: "Vifaa vya nyumba janja vinaweza kuwasaidia wazee kuishi salama na kujitegemea, kwa vikumbusho, taa zinazozuia kuanguka na kupiga simu kwa sauti, lakini vingi haviyatumiki au vinawatia wanafunzi wasiwasi kuhusu faragha. Amri zilizo wazi, ratiba moja rahisi na kujua jinsi ya kuzima maikrofoni na kukagua mipangilio vinavigeuza kuwa msaada wa kila siku.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa, rahisi",
      "Vifaa: Amazon Echo au Google Nest, au msaidizi wa sauti wa simu; menyu za app hubadilika kadiri muda unavyoenda",
      "Muda: kama dakika 5 kwa kila somo, bila haraka",
      "Huduma za dharura zinatofautiana kwa bidhaa na nchi; si kila spika inaweza kupiga 911",
      "Faragha: spika na kamera hurekodi; usiwahi kumpa anayekupigia simu misimbo uliyotumiwa kwa ujumbe"
    ],
    prerequisites: "Hakuna. Wanafunzi wasio na spika janja wanaweza kufuatilia kwa msaidizi wa sauti wa simu yao."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa vifaa vya kawaida vya nyumba janja", action: "kutaja kile ambacho spika janja, plagi janja, balbu janja na kengele ya mlango yenye video vinaweza kufanya kila kimoja", standard: "ukipata angalau 3 kati ya 4 sahihi" },
    { id: "O2", condition: "Ukitumia spika janja au msaidizi wa sauti wa simu yako", action: "kutoa amri za sauti zilizo wazi zinazoanza na neno la kuamsha", standard: "ili kifaa kifanye ulichoomba, ukijaribu maneno rahisi zaidi ikihitajika" },
    { id: "O3", condition: "Ukitumia app ya Alexa au app ya Google Home", action: "kupanga na kuweka ratiba ya kila siku inayofanya mambo kadhaa kwa msemo mmoja", standard: "yenye vitendo viwili au vitatu, ikifanyiwa mazoezi kwa sauti" },
    { id: "O4", condition: "Ukipewa matatizo ya usalama unayotaka kutatua nyumbani", action: "kuchagua huduma janja zinazoyafaa na kukagua kile bidhaa inachoweza na isichoweza kufanya", standard: "kabla ya kuinunua au kuitegemea" },
    { id: "O5", condition: "Unapotaka faragha nyumbani", action: "kuzima maikrofoni na kukagua mipangilio ya faragha na rekodi za sauti", standard: "na bila kumpa anayekupigia simu misimbo uliyotumiwa kwa ujumbe wala nywila" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuifahamu nyumba janja",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vifaa vya nyumba janja hufanya nini",
          minutes: 5,
          goal: "Taja vifaa vya kawaida vya nyumba janja na kile kila kimoja kinachoweza kukufanyia.",
          text: [
            "Vifaa vya nyumba janja vinaunganishwa na Wi-Fi ya nyumbani kwako ili uweze kuviongoza kwa sauti au kwa app kwenye simu yako.",
            "Vinavyotumika sana: spika janja, kama Amazon Echo yenye Alexa au Google Nest yenye Google Assistant, inajibu maswali, inacheza muziki na redio, inaweka saa ya kuhesabu muda (timer) na vikumbusho, na inapiga simu. Plagi janja inakuwezesha kuwasha na kuzima taa ya mezani au feni kwa sauti au kwa ratiba. Balbu janja zinabadilisha mwangaza. Kengele ya mlango yenye video inakuwezesha kuona kwenye simu yako aliye mlangoni kabla ya kufungua.",
            "Kwa wazee wanaoishi peke yao, vinavyosaidia zaidi mara nyingi ni spika kwa vikumbusho na kupiga simu, taa janja ili usiingie kamwe katika chumba chenye giza, na kengele ya mlango yenye video kwa usalama."
          ],
          words: [["Kifaa janja", "kifaa kinachounganishwa na intaneti ili uweze kukiongoza kwa sauti au kwa simu."], ["Wi-Fi", "intaneti isiyo na waya nyumbani kwako."], ["Plagi janja", "kiunganishi cha plagi kinachokuwezesha kuwasha na kuzima taa au kifaa kwa sauti au kwa app."]],
          slides: [
            { title: "Vifaa janja vinaunganishwa na Wi-Fi", bullets: ["Viongoze kwa sauti", "Au kwa app kwenye simu yako"] },
            { title: "Vifaa vinavyotumika sana", bullets: ["Spika janja: maswali, muziki, vikumbusho, simu", "Plagi na balbu janja: kuwasha na kuzima taa", "Kengele ya mlango yenye video: ona aliye mlangoni"] },
            { title: "Vinavyosaidia zaidi ukiishi peke yako", bullets: ["Vikumbusho na simu kwa sauti", "Hakuna tena vyumba vyenye giza", "Ona wageni kabla ya kufungua"] }
          ],
          tryIt: "Tembea ndani ya nyumba yako na uandike kazi mbili za kila siku ambazo kifaa janja kingeweza kurahisisha, kama kuwasha taa iliyo mbali kufikia au kuona aliye mlangoni.",
          youCanNow: "kutaja vifaa vya kawaida vya nyumba janja na jinsi vinavyoweza kukusaidia.",
          quickCheck: [
            { objective: "O1", q: "Plagi janja hufanya nini?", options: ["Inachaji simu yako haraka zaidi", "Inakuwezesha kuwasha na kuzima taa ya mezani au feni kwa sauti au kwa ratiba", "Inarekodi video", "Inapiga simu"], answer: 1, why: "Plagi janja inaongoza kile kilichochomekwa ndani yake, kwa sauti au kwa ratiba." },
            { objective: "O1", q: "Unaishi peke yako na una wasiwasi kuhusu anayebisha hodi usiku. Kifaa gani kinasaidia zaidi?", options: ["Balbu janja", "Plagi janja", "Kengele ya mlango yenye video", "Spika ya muziki"], answer: 2, why: "Kengele ya mlango yenye video inakuwezesha kuona kwenye simu yako aliye mlangoni kabla ya kufungua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuongea na spika janja",
          minutes: 5,
          goal: "Toa amri za sauti zilizo wazi kwa spika janja au msaidizi wa simu yako.",
          text: [
            "Unaianzisha spika janja kwa neno lake la kuamsha: \"Alexa\" kwa Amazon Echo, au \"Hey Google\" kwa Google Nest. Taa inaonyesha kuwa inasikiliza. Msaidizi wa sauti wa simu yako unafanya kazi vivyo hivyo kwa \"Hey Siri\" au \"Hey Google\".",
            "Wasaidizi hawa kwa kawaida wanaelewa Kiingereza, si Kiswahili. Ongea waziwazi, kwa kasi ya kawaida, na useme hasa unachotaka: \"Alexa, what is the weather today?\" (hali ya hewa leo ikoje?) \"Hey Google, set a timer for 15 minutes.\" (weka saa ya kuhesabu dakika 15) \"Alexa, play the classical music station.\" (cheza kituo cha muziki wa classical) \"Hey Google, call Margaret.\" (mpigie Margaret simu)",
            "Isipoelewa, sema tena kwa maneno rahisi zaidi. Spika mpya zinatumia AI kuelewa maswali ya kawaida zaidi, lakini amri fupi na zilizo wazi bado zinafanya kazi vizuri zaidi."
          ],
          steps: ["Sema neno la kuamsha: \"Alexa\" au \"Hey Google\".", "Subiri taa iwake.", "Sema hasa unachotaka, waziwazi.", "Isipoelewa vizuri, jaribu tena kwa maneno rahisi zaidi."],
          words: [["Neno la kuamsha", "neno linaloiambia spika janja ianze kusikiliza, kama \"Alexa\"."], ["Amri", "agizo fupi la kusema, kama \"set a timer for 15 minutes\" (weka saa ya kuhesabu dakika 15)."]],
          slides: [
            { title: "Iamshe", bullets: ["\"Alexa\" kwa Amazon Echo", "\"Hey Google\" kwa Google Nest", "Taa inaonyesha kuwa inasikiliza"] },
            { title: "Amri zilizo wazi", bullets: ["\"What is the weather today?\" (hali ya hewa leo?)", "\"Set a timer for 15 minutes.\" (saa ya dakika 15)", "\"Call Margaret.\" (mpigie Margaret)"] },
            { title: "Haikuelewa?", bullets: ["Sema tena kwa maneno rahisi zaidi", "Amri fupi zinafanya kazi vizuri zaidi"] }
          ],
          tryIt: "Ukitumia spika janja au msaidizi wa simu yako, toa amri tatu: uliza hali ya hewa ya leo, weka saa ya kuhesabu dakika 5, na omba kikumbusho kesho saa 3 asubuhi (9 am).",
          youCanNow: "kutoa amri za sauti zilizo wazi kwa spika janja au msaidizi wa sauti.",
          quickCheck: [
            { objective: "O2", q: "Neno la kuamsha Amazon Echo ni lipi?", options: ["\"Alexa\"", "\"Hello\"", "\"Hey Siri\"", "\"Start\""], answer: 0, why: "Amazon Echo inasikiliza \"Alexa\"; Google Nest inasikiliza \"Hey Google\"." },
            { objective: "O2", q: "Uliuliza swali refu na spika ikakosea. Unafanya nini?", options: ["Unaichomoa", "Unapiga kelele zaidi", "Unaacha kuitumia", "Unasema tena kwa maneno mafupi na rahisi zaidi"], answer: 3, why: "Amri fupi na zilizo wazi bado zinafanya kazi vizuri zaidi; jaribu tena kwa maneno rahisi zaidi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka ratiba rahisi",
          minutes: 6,
          goal: "Panga ratiba (routine) inayofanya mambo kadhaa kwa msemo mmoja.",
          text: [
            "Ratiba (routine) inaruhusu msemo mmoja kufanya mambo kadhaa. Kwa mfano, kusema \"Good morning\" (habari za asubuhi) kunaweza kuwasha taa ya mezani, kukuambia hali ya hewa na kukukumbusha kumeza dawa yako.",
            "Ratiba zinawekwa katika app ya simu ya kifaa: app ya Alexa kwa Echo, au app ya Google Home kwa Nest. Tafuta sehemu inayoitwa Routines, gusa kuongeza mpya, chagua msemo unaoianzisha, kisha ongeza vitendo. Menyu hubadilika mara kwa mara, kwa hiyo usipoipata, angalia kurasa za msaada za app au muulize mwanafamilia.",
            "Anza na ratiba moja rahisi. Unaweza kumwomba msaidizi wa AI akusaidie kuipanga: \"Nisaidie kupanga ratiba ya asubuhi kwa spika yangu janja. Nataka hali ya hewa, kikumbusho cha dawa na taa yangu ya mezani iwake.\""
          ],
          steps: ["Panga msemo na vitendo kwenye karatasi.", "Fungua app ya Alexa au app ya Google Home.", "Tafuta Routines na uongeze mpya.", "Chagua msemo wa kuanzia.", "Ongeza kila kitendo, hifadhi, na uijaribu kwa sauti."],
          words: [["Ratiba (routine)", "msemo mmoja au saa moja inayofanya kifaa kifanye mambo kadhaa mfululizo."], ["App ya kifaa", "app ya simu inayoweka na kuongoza kifaa janja."]],
          slides: [
            { title: "Msemo mmoja, vitendo vingi", bullets: ["\"Good morning\" inaweza...", "Kuwasha taa ya mezani", "Kukuambia hali ya hewa na kukukumbusha dawa"] },
            { title: "Mahali pa kuiweka", bullets: ["App ya Alexa au app ya Google Home", "Tafuta Routines, ongeza mpya", "Chagua msemo, ongeza vitendo, hifadhi"] },
            { title: "Anza kwa urahisi", bullets: ["Panga kwenye karatasi kwanza", "Mwombe AI akusaidie kupanga", "Uliza familia kama menyu ni ngumu kupata"] }
          ],
          tryIt: "Andika ratiba ya \"Good morning\" (habari za asubuhi) au \"Good night\" (usiku mwema) yenye msemo na vitendo viwili au vitatu. Mwombe msaidizi wa AI akague mpango wako na apendekeze uboreshaji mmoja.",
          youCanNow: "kupanga ratiba rahisi ya nyumba janja na kujua mahali pa kuiweka.",
          quickCheck: [
            { objective: "O3", q: "Ratiba (routine) kwenye spika janja ni nini?", options: ["Matembezi ya kila siku", "Msemo mmoja unaofanya kifaa kifanye mambo kadhaa", "Orodha ya nyimbo", "Nywila"], answer: 1, why: "Ratiba inaruhusu msemo mmoja, kama \"Good morning\", kufanya vitendo kadhaa." },
            { objective: "O3", q: "Huwezi kupata Routines kwenye app kwa sababu menyu imebadilika. Unafanya nini?", options: ["Unaacha kutumia ratiba", "Unanunua spika mpya", "Unaangalia kurasa za msaada za app au unamuuliza mwanafamilia", "Unarudisha spika kwenye mipangilio ya mwanzo"], answer: 2, why: "Menyu hubadilika mara kwa mara; kurasa za msaada au mwanafamilia anaweza kukuonyesha ilipo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuifahamu nyumba janja",
        questions: [
          { objective: "O1", q: "Vifaa vya nyumba janja vinaunganishwa na nini?", options: ["Sanduku la barua", "Mabomba ya maji", "Wi-Fi ya nyumbani kwako", "Chaja ya betri tu"], answer: 2, why: "Vinatumia Wi-Fi ili uweze kuviongoza." },
          { objective: "O1", q: "Kifaa gani kinakuwezesha kuona kwenye simu yako aliye mlangoni?", options: ["Kengele ya mlango yenye video", "Plagi janja", "Balbu janja", "Kibaniko cha mkate"], answer: 0, why: "Kengele za mlango zenye video zinaonyesha wageni kwenye simu yako." },
          { objective: "O2", q: "Neno la kuamsha ni nini?", options: ["Kadi ya salamu za asubuhi", "Sauti ya saa ya kengele", "Nywila", "Neno linaloifanya spika ianze kusikiliza"], answer: 3, why: "\"Alexa\" au \"Hey Google\" inaiamsha spika." },
          { objective: "O2", q: "Spika haikukuelewa. Ujaribu nini?", options: ["Kupiga kelele", "Kusema tena kwa maneno rahisi zaidi", "Kuichomoa milele", "Kuipa nywila yako"], answer: 1, why: "Amri fupi na zilizo wazi zinafanya kazi vizuri zaidi." },
          { objective: "O3", q: "Unaweka wapi ratiba kwa spika ya Google Nest?", options: ["Kwenye Kikokotoo", "Kwenye app ya Google Home", "Kwenye rimoti ya TV", "Kwenye app ya Kamera"], answer: 1, why: "App ya kifaa ndiyo yenye Routines." }
        ]
      }
    },
    {
      name: "Sura 2: Usalama, faraja na faragha",
      lessons: [
        {
          objectives: ["O4","O1"],
          title: "Vifaa janja kwa usalama",
          minutes: 5,
          goal: "Chagua huduma za nyumba janja zinazofanya kuishi peke yako kuwe salama zaidi.",
          text: [
            "Vifaa janja vinaweza kukusaidia ujisikie salama zaidi nyumbani. Taa zenye ratiba au kitambua mwendo zinamaanisha hutaingia kamwe katika chumba chenye giza usiku, na hilo linaweza kusaidia kuzuia kuanguka. Kengele ya mlango yenye video inakuwezesha kuona na kuongea na wageni bila kufungua mlango.",
            "Spika janja inaweza kumpigia simu mwanafamilia kwa sauti kama huwezi kuifikia simu yako. Baadhi ya spika na huduma zina vipengele vya dharura, lakini vinatofautiana kwa bidhaa na nchi, na si zote zinaweza kupiga 911 (namba ya dharura ya Marekani). Angalia kurasa za msaada za bidhaa yenyewe ili ujue hasa kile yako inachoweza na isichoweza kufanya. Vifaa vya tahadhari ya kiafya vilivyotengenezwa kwa dharura ni chaguo tofauti la kujadili na familia yako.",
            "Kabla ya kununua, andika orodha ya matatizo unayotaka kutatua, na umuulize mwanafamilia au msaidizi wa dukani kifaa gani kinafaa. Huhitaji kila kitu."
          ],
          steps: ["Orodhesha matatizo ya usalama unayotaka kutatua.", "Linganisha kila moja na kifaa: taa, kengele ya mlango au spika.", "Angalia kurasa za msaada za bidhaa kujua inachoweza na isichoweza kufanya.", "Uliza familia au msaidizi wa dukani kabla ya kununua."],
          words: [["Kitambua mwendo", "kifaa kinachotambua mwendo na kinaweza kuwasha taa."], ["Kifaa cha tahadhari ya kiafya", "kitufe unachovaa kilichotengenezwa kuita msaada wakati wa dharura."]],
          slides: [
            { title: "Salama zaidi nyumbani", bullets: ["Taa zenye ratiba au kitambua mwendo husaidia kuzuia kuanguka", "Kengele ya mlango yenye video: ona wageni kwanza", "Piga simu kwa familia kwa sauti"] },
            { title: "Kijue kifaa chako", bullets: ["Vipengele vya dharura vinatofautiana", "Si zote zinaweza kupiga 911", "Angalia kurasa za msaada za bidhaa"] },
            { title: "Nunua ukiwa na mpango", bullets: ["Orodhesha matatizo kwanza", "Linganisha kifaa na kila tatizo", "Huhitaji kila kitu"] }
          ],
          tryIt: "Andika wasiwasi mmoja wa usalama ulio nao nyumbani, kama korido zenye giza usiku, na kifaa janja kinachoweza kusaidia. Muulize msaidizi wa AI maswali gani ya kuuliza kabla ya kukinunua.",
          youCanNow: "kuchagua huduma za nyumba janja zinazofaa mahitaji yako ya usalama.",
          quickCheck: [
            { objective: "O4", q: "Taa zenye kitambua mwendo zinawezaje kukusaidia ubaki salama?", options: ["Zinafunga milango yako", "Zinapiga 911", "Zinawaka ili usiingie katika chumba chenye giza", "Zinacheza muziki"], answer: 2, why: "Taa zinazowaka zenyewe zinaweza kusaidia kuzuia kuanguka usiku." },
            { objective: "O4", q: "Unataka spika inayoweza kuita msaada wakati wa dharura. Unafanya nini kabla ya kuitegemea?", options: ["Unaangalia kurasa za msaada za bidhaa kujua inachoweza na isichoweza kufanya", "Unadhani kila spika inaweza kupiga 911", "Unaiomba spika iahidi", "Unazima maikrofoni yake"], answer: 0, why: "Vipengele vya dharura vinatofautiana kwa bidhaa na nchi; angalia hasa kile yako inachoweza kufanya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kulinda faragha yako nyumbani",
          minutes: 5,
          goal: "Tumia kitufe cha kuzima maikrofoni na mipangilio ya faragha kwenye kifaa janja.",
          text: [
            "Spika janja zinasikiliza neno lao la kuamsha. Wakati mwingine zinaweza kudhani neno lingine ndilo hilo na kurekodi kidogo. Kamera zinarekodi video. Kwa hiyo ni busara kujua jinsi ya kuviongoza.",
            "Kila spika janja ina kitufe cha kuzima maikrofoni; ikizimwa, taa (mara nyingi nyekundu) inaonyesha kuwa haisikilizi. Kitumie wakati wa mazungumzo ya siri. Kamera mara nyingi zina hali ya faragha (privacy mode) au kifuniko. Katika app ya kifaa, tafuta mipangilio ya faragha (Privacy), ambapo kwa kawaida unaweza kukagua na kufuta rekodi za sauti.",
            "Tumia nywila imara kwa Wi-Fi yako na kwa akaunti za vifaa, na usiwahi kumpa mtu yeyote anayekupigia simu kuhusu vifaa vyako misimbo uliyotumiwa kwa ujumbe."
          ],
          steps: ["Tafuta kitufe cha kuzima maikrofoni kwenye spika yako.", "Kibonyeze wakati wa mazungumzo ya siri; angalia taa ya rangi.", "Fungua app ya kifaa na utafute mipangilio ya faragha.", "Kagua na ufute rekodi za sauti ukipenda.", "Tumia nywila imara na usiwahi kutoa misimbo uliyotumiwa kwa ujumbe."],
          words: [["Kuzima maikrofoni (mute)", "kuzima maikrofoni ili isiweze kusikia."], ["Mipangilio ya faragha", "machaguo kwenye app kuhusu kinachorekodiwa, kuhifadhiwa na kushirikiwa."]],
          slides: [
            { title: "Spika na kamera husikia na kuona", bullets: ["Spika zinasubiri neno la kuamsha", "Wakati mwingine zinaweza kusikia vibaya", "Kamera zinarekodi video"] },
            { title: "Chukua udhibiti", bullets: ["Kitufe cha kuzima: taa inaonyesha imezimwa", "Hali ya faragha ya kamera au kifuniko", "Kagua na ufute rekodi kwenye app"] },
            { title: "Linda akaunti", bullets: ["Nywila imara za Wi-Fi na akaunti", "Usiwahi kutoa misimbo uliyotumiwa kwa ujumbe"] }
          ],
          tryIt: "Tafuta kitufe au mpangilio wa kuzima maikrofoni kwenye spika janja, au mpangilio wa maikrofoni wa msaidizi wa simu yako. Uzime na uwashe tena, na uone jinsi unavyoweza kujua kuwa imezimwa.",
          youCanNow: "kuzima maikrofoni ya kifaa janja na kupata mipangilio yake ya faragha.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini spika janja inaweza kurekodi kidogo kwa makosa?", options: ["Inarekodi kila kitu muda wote", "Inaweza kudhani neno lingine ni neno lake la kuamsha", "Imeharibika", "Inarekodi muziki tu"], answer: 1, why: "Spika zinasikiliza neno la kuamsha na wakati mwingine zinaweza kudhani neno lingine ndilo hilo." },
            { objective: "O5", q: "Familia yako imekutembelea na unataka kuzungumza mambo ya siri ya pesa. Unafanya nini na spika?", options: ["Unaongeza sauti ya muziki", "Unaiomba iache kusikiliza", "Unachomoa router ya Wi-Fi", "Unabonyeza kitufe cha kuzima maikrofoni na kuangalia taa"], answer: 3, why: "Kitufe cha kuzima kinazima maikrofoni; taa, mara nyingi nyekundu, inaonyesha kuwa haisikilizi." }
          ]
        },
        {
          objectives: ["O3","O2"],
          title: "Kuifanya nyumba yako janja ikufanyie kazi",
          minutes: 5,
          goal: "Panga na ufanyie mazoezi ratiba kamili ya kila siku.",
          text: [
            "Sasa unganisha vipande. Ratiba nzuri ya kwanza ni rahisi, ina manufaa kila siku, na ni rahisi kusema.",
            "Mfano: \"Good morning\" (habari za asubuhi) inawasha taa ya mezani ya chumba cha kulala, inakuambia hali ya hewa na kalenda yako, na inakukumbusha kumeza dawa yako ya asubuhi. \"Good night\" (usiku mwema) inazima taa na inaweka kengele yako ya kuamka.",
            "Fanya mazoezi ya kusema ratiba yako mara chache. Kitu kisipofanya kazi, kagua kitendo kimoja baada ya kingine kwenye app, au mwombe mwanafamilia aangalie pamoja nawe. Weka karatasi yenye amri zako karibu na spika hadi ziwe mazoea."
          ],
          steps: ["Chagua msemo utakaoukumbuka.", "Chagua vitendo viwili au vitatu vyenye manufaa.", "Iweke kwenye app, kadiri vifaa vyako vinavyoruhusu.", "Ifanyie mazoezi kwa sauti mara kadhaa.", "Weka karatasi yenye amri zako karibu na spika."],
          words: [["Mazoea", "kitu unachofanya mara nyingi hadi kinakuwa cha kujifanyia bila kufikiri."]],
          slides: [
            { title: "Ratiba nzuri ya kwanza", bullets: ["Rahisi", "Yenye manufaa kila siku", "Rahisi kusema"] },
            { title: "Mfano", bullets: ["\"Good morning\": taa inawaka, hali ya hewa, kalenda, kikumbusho cha dawa", "\"Good night\": taa zinazimwa, kengele inawekwa"] },
            { title: "Ifanye idumu", bullets: ["Fanya mazoezi mara chache", "Rekebisha kitendo kimoja kwa wakati", "Weka karatasi karibu na spika"] }
          ],
          tryIt: "Kazi ya mwisho: andika ratiba yako ya \"Good morning\" (habari za asubuhi), iweke kadiri vifaa vyako vinavyoruhusu, na uifanyie mazoezi kwa sauti. Kisha tafuta na utumie kitufe au mpangilio wa kuzima maikrofoni.",
          youCanNow: "kutumia amri za sauti na ratiba rahisi kufanya nyumba yako iwe rahisi na salama zaidi, huku ukilinda faragha yako.",
          quickCheck: [
            { objective: "O3", q: "Nini kinafanya ratiba nzuri ya kwanza?", options: ["Rahisi, yenye manufaa kila siku na rahisi kusema", "Vitendo vingi iwezekanavyo", "Msemo mrefu", "Muziki tu"], answer: 0, why: "Anza kwa urahisi: msemo utakaoukumbuka wenye vitendo viwili au vitatu vyenye manufaa." },
            { objective: "O3", q: "Ratiba yako mpya ya \"Good night\" ilizima taa lakini haikuweka kengele. Unafanya nini?", options: ["Unafuta ratiba nzima", "Unaacha kutumia ratiba milele", "Unasema kwa sauti kubwa zaidi", "Unakagua kitendo hicho kimoja kwenye app, au unakiangalia pamoja na mwanafamilia"], answer: 3, why: "Kitu kisipofanya kazi, kagua kitendo kimoja baada ya kingine kwenye app." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usalama, faraja na faragha",
        questions: [
          { objective: "O4", q: "Taa janja zinawezaje kusaidia kuzuia kuanguka?", options: ["Zinafunga milango", "Ni nzito zaidi", "Zinampigia daktari", "Zinawaka ili usiingie katika vyumba vyenye giza"], answer: 3, why: "Vyumba vyenye mwanga usiku husaidia kuzuia kuanguka." },
          { objective: "O4", q: "Je, kila spika janja inaweza kupiga 911?", options: ["Hapana; kagua kile bidhaa yako inachoweza na isichoweza kufanya", "Ndiyo, zote", "Zile nyekundu tu", "Wikendi tu"], answer: 0, why: "Vipengele vya dharura vinatofautiana kwa bidhaa na nchi." },
          { objective: "O5", q: "Taa ya spika inakuwa nyekundu baada ya kubonyeza kitufe cha kuzima. Hii inamaanisha:", options: ["Inapiga 911", "Imeharibika", "Maikrofoni imezimwa", "Inarekodi zaidi"], answer: 2, why: "Taa ya rangi inaonyesha imezimwa." },
          { objective: "O5", q: "Kwa kawaida unaweza kukagua na kufuta rekodi za sauti wapi?", options: ["Kwenye tangazo linalojitokeza", "Kwenye microwave", "Kwenye ratiba ya vipindi vya TV", "Kwenye mipangilio ya faragha ya app ya kifaa"], answer: 3, why: "Mipangilio ya faragha ya app inasimamia rekodi." },
          { objective: "O5", q: "Mpigaji anasema anatoka kampuni ya spika na anaomba msimbo uliotumiwa kwa ujumbe. Wewe:", options: ["Unamtumia kwa ujumbe", "Unamsomea", "Hutoi kamwe na unakata simu", "Unauweka mtandaoni"], answer: 2, why: "Misimbo unayotumiwa kwa ujumbe inalinda akaunti yako." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI na Nyumba Janja",
    questions: [
      { objective: "O1", q: "Kifaa janja ni:", options: ["Taa yoyote ya zamani", "Kifaa unachoweza kukiongoza kwa sauti au kwa simu kupitia intaneti", "Kalenda ya karatasi", "Simu ya mezani"], answer: 1, why: "Vifaa janja vinaunganishwa na intaneti." },
      { objective: "O1", q: "Amazon Echo inatumia msaidizi gani wa sauti?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "Spika za Echo zinatumia Alexa." },
      { objective: "O1", q: "Plagi janja inakuwezesha:", options: ["Kuwasha na kuzima taa ya mezani kwa sauti au kwa ratiba", "Kuchaji gari", "Kupiga simu", "Kufunga milango"], answer: 0, why: "Inawasha na kuzima kilichochomekwa ndani yake." },
      { objective: "O2", q: "Neno gani linaamsha spika ya Google Nest?", options: ["\"Hello phone\"", "\"Hey Google\"", "\"Computer\"", "\"Start\""], answer: 1, why: "\"Hey Google\" ndilo neno lake la kuamsha." },
      { objective: "O2", q: "Amri ipi iko wazi?", options: ["\"Timer stuff.\" (mambo ya saa)", "\"Um, maybe, the thing?\" (aa, labda, kile kitu?)", "\"Set a timer for 15 minutes.\" (weka saa ya dakika 15)", "\"You know.\" (unajua)"], answer: 2, why: "Amri zilizo wazi zinasema hasa unachotaka." },
      { objective: "O2", q: "Taa kwenye spika kwa kawaida inaonyesha:", options: ["Imezimwa milele", "Imeharibika", "Inahitaji rangi", "Inasikiliza"], answer: 3, why: "Taa inaonyesha imesikia neno la kuamsha." },
      { objective: "O3", q: "Ratiba (routine) ni:", options: ["Nywila", "Aina ya plagi", "Msemo mmoja unaofanya kifaa kifanye mambo kadhaa", "Kipindi cha TV"], answer: 2, why: "Ratiba zinaunganisha vitendo." },
      { objective: "O3", q: "Ratiba za Amazon Echo zinawekwa kwenye:", options: ["App ya Alexa", "Kikokotoo", "Kamera", "TV"], answer: 0, why: "App ya Alexa inasimamia ratiba za Echo." },
      { objective: "O3", q: "Njia nzuri ya kupanga ratiba kabla ya kuiweka:", options: ["Kuruka upangaji", "Kubahatisha", "Kununua vifaa vingi kwanza", "Kuiandika kwenye karatasi au kumwomba AI akague mpango wako"], answer: 3, why: "Kupanga kunarahisisha kuweka." },
      { objective: "O3", q: "Menyu kwenye app ikiwa ngumu kupata, unaweza:", options: ["Kukata tamaa", "Kuangalia kurasa za msaada za app au kuuliza familia", "Kumpa mgeni nywila yako", "Kufuta Wi-Fi yako"], answer: 1, why: "Menyu hubadilika; kurasa za msaada na familia zinaweza kukuongoza." },
      { objective: "O4", q: "Kengele ya mlango yenye video inakusaidia:", options: ["Kupika chakula cha jioni", "Kuona wageni kabla ya kufungua mlango", "Kufua nguo", "Kulipa bili"], answer: 1, why: "Inaonyesha aliye mlangoni." },
      { objective: "O4", q: "Taa yenye kitambua mwendo:", options: ["Inafunga mlango", "Inacheza muziki", "Inaipigia familia simu", "Inawaka inapotambua mwendo"], answer: 3, why: "Inaitikia mwendo." },
      { objective: "O4", q: "Kabla ya kununua kifaa janja, unapaswa:", options: ["Kuorodhesha matatizo unayotaka kutatua", "Kununua kila kitu", "Kutoa nywila zako", "Kupuuza maoni ya wateja na kurasa za msaada"], answer: 0, why: "Orodha inakusaidia kununua unachohitaji tu." },
      { objective: "O4", q: "Kifaa cha tahadhari ya kiafya ni:", options: ["Spika ya muziki", "Balbu janja", "Kitufe unachovaa kilichotengenezwa kuita msaada", "Rimoti ya TV"], answer: 2, why: "Kimetengenezwa kwa ajili ya dharura." },
      { objective: "O5", q: "Wakati wa mazungumzo ya siri, unaweza:", options: ["Kufungua kamera", "Kuongeza sauti", "Kusema neno la kuamsha", "Kubonyeza kitufe cha kuzima maikrofoni ya spika"], answer: 3, why: "Kuzima kunasimamisha maikrofoni." },
      { objective: "O5", q: "Mipangilio ya faragha inakuwezesha:", options: ["Kuagiza chakula", "Kubadilisha hali ya hewa", "Kukagua na kufuta rekodi", "Kuongeza kasi ya Wi-Fi"], answer: 2, why: "Inaongoza kinachohifadhiwa." },
      { objective: "O5", q: "Faragha ya kamera inaweza kulindwa kwa:", options: ["Kumulika taa", "Hali ya faragha au kifuniko", "Kuisogeza karibu zaidi", "Kuongeza sauti"], answer: 1, why: "Hali ya faragha au kifuniko kinasimamisha kurekodi." },
      { objective: "O5", q: "Nywila imara zinapaswa kutumika kwa:", options: ["Wi-Fi yako na akaunti za vifaa", "Hakuna kitu", "Barua pepe tu", "TV yako tu"], answer: 0, why: "Zinawazuia wengine kuingia kwenye vifaa vyako." },
      { objective: "O3", q: "Ratiba nzuri ya kwanza ni:", options: ["Rahisi, yenye manufaa kila siku na rahisi kusema", "Ndefu na tata", "Inayotumika mara moja kwa mwaka", "Ngumu kukumbuka"], answer: 0, why: "Ratiba rahisi zinakuwa mazoea." },
      { objective: "O3", q: "Kuweka karatasi yenye amri zako karibu na spika kunakusaidia:", options: ["Kuzificha", "Kuzikumbuka hadi ziwe mazoea", "Kutoa nywila", "Kuzima spika"], answer: 1, why: "Karatasi ni kikumbusho rahisi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      6,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ratiba imepangwa",
        objective: "O3",
        notYet: "Hakuna mpango ulioandikwa, au hakuna msemo wa kuanzia.",
        meets: "Ratiba iliyoandikwa yenye msemo wa kuanzia na vitendo viwili au vitatu vyenye manufaa, kama hali ya hewa, kikumbusho cha dawa na taa ya mezani.",
        exceeds: "Mpango pia una ratiba ya \"Good night\" (usiku mwema)."
      },
      {
        name: "Ratiba imewekwa",
        objective: "O3",
        notYet: "Hakuna kilichowekwa kwenye kifaa au simu.",
        meets: "Sehemu kubwa ya ratiba imewekwa kadiri vifaa vinavyoruhusu.",
        exceeds: "Anaweza kusema ni vitendo gani vifaa havikuweza kufanya na atatumia nini badala yake."
      },
      {
        name: "Amri za sauti zilizo wazi",
        objective: "O2",
        notYet: "Kifaa hakikuitikia amri.",
        meets: "Alifanya mazoezi ya ratiba kwa sauti, akianza na neno la kuamsha, na ilifanya kazi.",
        exceeds: "Aliandika amri kwenye karatasi karibu na spika."
      },
      {
        name: "Maikrofoni imezimwa",
        objective: "O5",
        notYet: "Hakuweza kupata kitufe au mpangilio wa kuzima.",
        meets: "Alipata na kutumia kitufe au mpangilio wa kuzima na akaona taa ikibadilika.",
        exceeds: "Pia alipata mahali pa kukagua rekodi za sauti kwenye app."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa kipimo cha tathmini)",
      "Wanafunzi wanaotumia ratiba ya kila siku au kikumbusho cha sauti katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaosema wanajisikia salama zaidi nyumbani, kama kwa kutumia taa usiku au kengele ya mlango yenye video",
      "Wanafunzi wanaoanza kozi nyingine ya Wazee na Teknolojia ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Spika janja (Amazon Echo au Google Nest) au simu janja yenye msaidizi wa sauti",
      "App ya Alexa au app ya Google Home kwenye simu, na Wi-Fi ya nyumbani",
      "Karatasi na kalamu kwa kupanga ratiba na kuandika amri",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi bila haraka: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Leta spika moja ya mfano ili wanafunzi wasio na kifaa waweze kufanya mazoezi ya amri.",
      "Menyu za app hubadilika; kagua menyu za sasa za Routines na Privacy kabla ya kipindi.",
      "Usiahidi kwamba spika yoyote inaweza kupiga 911; waambie wanafunzi wakague bidhaa yao wenyewe.",
      "Wakumbushe wanafunzi wasiwahi kumpa mtu yeyote anayewapigia simu kuhusu vifaa vyao misimbo waliyotumiwa kwa ujumbe.",
      "Tathmini kazi ya mwisho kwa kipimo cha tathmini (rubric), na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
