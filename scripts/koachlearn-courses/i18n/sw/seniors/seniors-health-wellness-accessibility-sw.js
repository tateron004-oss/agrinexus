"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-health-wellness-accessibility.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-health-wellness-accessibility-sw",
  lang: "sw",
  translationOf: "seniors-health-wellness-accessibility",
  category: "Seniors and Technology",
  name: "Afya, Ustawi na Urahisi wa Kutumia Teknolojia",
  skills: "Kukuza maandishi, Kutumia kikuzaji na kusomewa kwa sauti, Kuwasha manukuu, Kuweka vikumbusho vya dawa, Kuandaa maswali kwa daktari kwa msaada wa AI, Kupata taarifa za afya zinazoaminika",
  outcome: "kuweka simu au tableti yako iwe rahisi kuona na kusikia, kuweka kikumbusho cha kila siku cha dawa, na kutumia msaidizi wa AI kuandaa orodha wazi ya maswali kwa ziara yako ijayo kwa daktari.",
  about: [
    "Kozi hii ni kwa wazee wanaotaka teknolojia isaidie macho, masikio na afya yao, si kuwasumbua. Huhitaji kununua kitu kipya; zana nyingi kati ya hizi tayari ziko kwenye simu au tableti yako.",
    "Katika Sura 1 utakuza maandishi, utatumia simu yako kama kioo cha kukuzia, utaifanya ikusomee maandishi kwa sauti, na utawasha manukuu. Katika Sura 2 utaweka vikumbusho vya dawa, utatumia AI kujiandaa kwa ziara ya daktari, na utajifunza mahali pa kupata taarifa za afya zinazoaminika.",
    "Kila somo linachukua kama dakika tano. Mwanafamilia anaweza kukusaidia na mipangilio mara ya kwanza. Kozi hii haitoi ushauri wa kitabibu: daima fuata maelekezo ya daktari na mfamasia wako. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Fanya simu yako iwe rahisi kutumia kwa kubadilisha mpangilio mmoja wa kuona au kusikia, weka kikumbusho cha kila siku cha dawa au cha matembezi mafupi, na tumia msaidizi wa AI kugeuza wasiwasi wako wa afya kuwa orodha fupi na wazi ya maswali ya kupeleka kwenye miadi yako ijayo na daktari, bila namba yoyote ya binafsi ndani yake.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee wanaosimamia afya na dawa zao wenyewe, na ambao huenda macho au masikio yao yamebadilika. Wengi wanaonana na daktari zaidi ya mmoja na wanatumia dawa kadhaa.",
    startingPoint: "Wana simu janja au tableti na wanaitumia kupiga simu na kutuma ujumbe. Wengi wanaona maandishi ni madogo au sauti ni ngumu kusikia, na hawajajaribu mipangilio ya urahisi wa kutumia, vikumbusho vinavyojirudia wala wasaidizi wa AI.",
    gap: "Maandishi madogo na sauti ngumu kusikia huwafanya watu waache kutumia simu ambazo zingeweza kuwasaidia kubaki na afya. Kufanya simu iwe rahisi kuona na kusikia, kutumia vikumbusho vya dawa, kuandaa maswali wazi kwa daktari na kukagua ukweli wa afya kwenye tovuti inayoaminika kunasaidia kujitegemea na ziara bora kwa daktari, bila kuiacha AI ichukue nafasi ya daktari.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: iPhone, simu za Android na tableti; majina ya menyu hutofautiana, kwa hiyo wanafunzi hutafuta ndani ya Settings",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa taratibu",
      "Afya: AI ni ya kujiandaa, si ya kutambua ugonjwa; dawa hufuata maelekezo ya daktari na mfamasia",
      "Faragha: hakuna jina, tarehe ya kuzaliwa wala namba za bima katika prompt za AI"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia app ya Settings kwenye simu au tableti yako", action: "kukuza maandishi, kuyafanya mazito na kukuza skrini", standard: "hadi maandishi yawe rahisi kusoma" },
    { id: "O2", condition: "Ukipewa maandishi madogo kama lebo ya dawa", action: "kutumia simu kama kikuzaji na kuwasha kusomewa kwa sauti", standard: "ili uweze kusoma au kusikia maandishi hayo" },
    { id: "O3", condition: "Sauti kwenye video au simu zinapokuwa ngumu kusikia", action: "kuwasha manukuu na kupata mipangilio ya kusikia ya simu yako", standard: "ili maneno yaonekane kwenye skrini" },
    { id: "O4", condition: "Ukipewa dawa au tabia nzuri ya afya", action: "kuweka kikumbusho cha kila siku kinachojirudia kwenye simu yako", standard: "kwa wakati aliosema daktari au mfamasia wako, na kukagua kwamba kimewekwa" },
    { id: "O5", condition: "Kabla ya ziara ya daktari", action: "kutumia msaidizi wa AI kugeuza wasiwasi wako kuwa orodha fupi ya maswali wazi", standard: "bila namba za binafsi na bila kubadilisha dawa kwa sababu ya AI" },
    { id: "O6", condition: "Ukipewa taarifa za afya kutoka AI au tovuti", action: "kuzikagua kwenye chanzo kinachoaminika kama MedlinePlus, daktari wako au mfamasia wako", standard: "kabla ya kuzifanyia kazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kufanya kifaa chako kiwe rahisi kuona na kusikia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kukuza maandishi na kuyafanya rahisi kusoma",
          minutes: 5,
          goal: "Kukuza maandishi kwenye simu au tableti yako na kuyafanya mazito zaidi.",
          text: [
            "Maandishi madogo ni moja ya sababu kubwa zinazowafanya watu waache kutumia simu. Habari njema: kila simu janja na tableti inakuruhusu kukuza maandishi, na nyingi zinakuruhusu pia kuyafanya mazito (bold).",
            "Majina ya menyu hutofautiana kati ya simu, kwa hiyo njia rahisi zaidi ni kutafuta. Fungua app ya Settings (Mipangilio, mara nyingi ni picha ya gia ya kijivu), gusa kisanduku cha kutafuta juu, na andika \"text size\" au \"font size\". Gusa jibu na telezesha mstari kwenda kulia hadi maandishi yawe rahisi kusoma. Tafuta pia swichi ya \"bold text\" karibu na hapo.",
            "Baadhi ya apps zinakuruhusu pia kukuza kwa kuweka vidole viwili kwenye skrini na kuvitanua. Vibane pamoja ili kurudisha ukubwa wa kawaida."
          ],
          steps: ["Fungua app ya Settings.", "Gusa kisanduku cha kutafuta juu.", "Andika \"text size\" au \"font size\".", "Telezesha mstari kwenda kulia hadi maandishi yawe rahisi kusoma.", "Washa \"bold text\" ukipenda."],
          words: [["Settings", "app unayotumia kubadilisha jinsi simu yako inavyoonekana na kufanya kazi, kwa kawaida ni picha ya gia."], ["Font", "mtindo na ukubwa wa herufi kwenye skrini."], ["Zoom", "kukuza; kufanya kilicho kwenye skrini kionekane kikubwa zaidi."]],
          slides: [
            { title: "Maandishi madogo? Unaweza kurekebisha", bullets: ["Kila simu na tableti inaweza kukuza maandishi", "Nyingi zinaweza pia kuyafanya mazito"] },
            { title: "Tafuta ndani ya Settings", bullets: ["Fungua Settings (gia)", "Tafuta \"text size\" au \"font size\"", "Telezesha mstari kwenda kulia"] },
            { title: "Kuza kwa vidole viwili", bullets: ["Tanua vidole viwili ili kukuza", "Vibane pamoja ili kupunguza"] }
          ],
          tryIt: "Fungua Settings, tafuta \"text size\", na kuza maandishi yako hatua moja au mbili. Fungua ujumbe au barua pepe zako uone tofauti.",
          youCanNow: "kukuza maandishi kwenye kifaa chako na kuyafanya mazito zaidi.",
          quickCheck: [
            { objective: "O1", q: "Kutanua vidole viwili kwenye skrini kunafanya nini katika apps nyingi?", options: ["Kunakuza", "Kunazima simu", "Kunapiga simu", "Kunafuta ukurasa"], answer: 0, why: "Kutanua vidole viwili kunakuza; kuvibana pamoja kunarudisha ukubwa wa kawaida." },
            { objective: "O1", q: "Huwezi kupata menyu ya ukubwa wa maandishi kwenye simu yako mpya. Unafanya nini?", options: ["Kununua simu mpya", "Kukata tamaa", "Kufungua Settings, kugusa kisanduku cha kutafuta na kuandika \"text size\"", "Kuzima simu na kuiwasha tena"], answer: 2, why: "Majina ya menyu hutofautiana, kwa hiyo kutafuta ndani ya Settings ndiyo njia rahisi zaidi ya kupata mpangilio huo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Simu yako kama kikuzaji na msomaji",
          minutes: 5,
          goal: "Kutumia simu yako kukuza maandishi madogo na kukusomea maandishi kwa sauti.",
          text: [
            "Kamera ya simu yako inaweza kufanya kazi kama kioo cha kukuzia kwa lebo za dawa, menyu za mgahawa na risiti. iPhone zina app inayoitwa Magnifier. Kwenye simu nyingi za Android unaweza kutumia zoom ya app ya Camera, au kutafuta \"magnif\" ndani ya Settings.",
            "Simu zinaweza pia kusoma maandishi kwa sauti. Tafuta ndani ya Settings \"spoken content\" au \"select to speak\", na uiwashe. Kisha unaweza kuchagua maandishi na kubonyeza Speak. Google Lens na baadhi ya wasaidizi wa AI wanaweza pia kusoma kwa sauti ukurasa uliopigwa picha.",
            "Washa tochi kama mwanga ni hafifu, na shika simu bila kutikisika, sentimita chache juu ya ukurasa."
          ],
          steps: ["Fungua Magnifier, au app ya Camera na ukuze.", "Shika simu sentimita chache juu ya maandishi madogo.", "Washa mwanga ukihitaji.", "Ili kusikia maandishi, tafuta ndani ya Settings \"spoken content\" au \"select to speak\" na uiwashe.", "Chagua maandishi na ubonyeze Speak."],
          words: [["Kikuzaji (Magnifier)", "zana inayofanya vitu vidogo vionekane vikubwa zaidi kwenye skrini yako."], ["Kusomewa kwa sauti", "simu inaposema kwa sauti maneno yaliyoandikwa."]],
          slides: [
            { title: "Kioo cha kukuzia mfukoni mwako", bullets: ["Lebo za dawa, menyu, risiti", "iPhone: app ya Magnifier", "Android: zoom ya Camera au tafuta \"magnif\""] },
            { title: "Acha simu ikusomee", bullets: ["Tafuta \"spoken content\" au \"select to speak\"", "Chagua maandishi, kisha bonyeza Speak"] },
            { title: "Vidokezo", bullets: ["Washa mwanga kwenye chumba chenye giza kidogo", "Shika simu bila kutikisika juu ya ukurasa"] }
          ],
          tryIt: "Tumia simu yako kukuza maandishi madogo kwenye lebo ya chakula au dawa. Kisha washa mpangilio wa kusomewa kwa sauti na uiache simu yako ikusomee ujumbe mmoja.",
          youCanNow: "kukuza maandishi madogo na kuifanya simu yako ikusomee maandishi kwa sauti.",
          quickCheck: [
            { objective: "O2", q: "App ya Magnifier kwenye iPhone ni ya kazi gani?", options: ["Kujipiga picha", "Kuongeza sauti ya simu", "Kutuma picha", "Kutumia kamera kama kioo cha kukuzia"], answer: 3, why: "Magnifier inageuza kamera kuwa kioo cha kukuzia maandishi madogo." },
            { objective: "O2", q: "Unataka simu yako ikusomee makala ndefu kwa sauti. Unatafuta nini ndani ya Settings?", options: ["\"Wallpaper\"", "\"Spoken content\" au \"select to speak\"", "\"Battery\"", "\"Ringtone\""], answer: 1, why: "Ukiwasha spoken content au select to speak, unaweza kuchagua maandishi na kubonyeza Speak." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Manukuu na msaada wa kusikia",
          minutes: 5,
          goal: "Kuwasha manukuu ili uweze kusoma kinachosemwa.",
          text: [
            "Kama sauti kwenye video au simu ni ngumu kusikia, manukuu huonyesha maneno kwenye skrini yanaposemwa.",
            "Simu nyingi zina kipengele kinachoongeza manukuu kwenye karibu video au sauti yoyote, kinachoitwa Live Captions. Tafuta \"caption\" ndani ya Settings ili ukipate na ukiwashe. Kwenye YouTube, gusa kitufe cha CC kwenye video. Apps nyingi za simu za video pia zina kitufe cha manukuu.",
            "Simu zinaweza pia kuunganishwa na visaidizi vingi vya kisasa vya kusikia kwa Bluetooth. Tafuta \"hearing\" ndani ya Settings uone simu yako inatoa nini, na muulize mtaalamu wako wa kusikia ni mipangilio ipi inafaa visaidizi vyako vya kusikia."
          ],
          steps: ["Fungua Settings na utafute \"caption\".", "Washa Live Captions au manukuu.", "Kwenye YouTube, gusa CC kwenye video.", "Kwenye simu za video, tafuta kitufe cha manukuu.", "Tafuta \"hearing\" ndani ya Settings kwa chaguo za visaidizi vya kusikia."],
          words: [["Manukuu (captions)", "maneno yanayoonyeshwa kwenye skrini watu wanapoongea."], ["Bluetooth", "njia isiyo na waya ya kuunganisha simu yako na vitu kama visaidizi vya kusikia au spika."]],
          slides: [
            { title: "Soma kinachosemwa", bullets: ["Manukuu huonyesha maneno yanayosemwa kwenye skrini"] },
            { title: "Washa manukuu", bullets: ["Tafuta \"caption\" ndani ya Settings", "YouTube: gusa CC", "Simu za video: tafuta kitufe cha manukuu"] },
            { title: "Visaidizi vya kusikia", bullets: ["Vingi huunganishwa kwa Bluetooth", "Tafuta \"hearing\" ndani ya Settings", "Muulize mtaalamu wako wa kusikia"] }
          ],
          tryIt: "Tafuta \"caption\" ndani ya Settings na uwashe manukuu, au fungua video yoyote ya YouTube na ugusa CC. Tazama dakika moja ukiwa na manukuu.",
          youCanNow: "kuwasha manukuu kwenye kifaa chako na kupata mipangilio ya kusikia.",
          quickCheck: [
            { objective: "O3", q: "Live Captions inafanya nini?", options: ["Inaongeza manukuu kwenye karibu video au sauti yoyote kwenye simu", "Inarekodi simu zako", "Inapiga picha", "Inaongeza sauti"], answer: 0, why: "Live Captions huonyesha kwenye skrini maneno ya video na sauti." },
            { objective: "O3", q: "Unataka kuunganisha visaidizi vyako vya kusikia na simu yako. Hatua nzuri ya kwanza ni ipi?", options: ["Kuzima Bluetooth", "Kununua visaidizi vipya vya kusikia", "Kutafuta \"hearing\" ndani ya Settings na kumuuliza mtaalamu wako wa kusikia", "Kuzima mlio wa simu"], answer: 2, why: "Settings huonyesha chaguo za kusikia, na mtaalamu wako wa kusikia anajua zipi zinafaa visaidizi vyako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kufanya kifaa chako kiwe rahisi kuona na kusikia",
        questions: [
          { objective: "O1", q: "Majina ya menyu hutofautiana kati ya simu. Njia rahisi zaidi ya kupata mpangilio wa ukubwa wa maandishi ni ipi?", options: ["Kuzima na kuwasha simu", "Kununua simu mpya", "Kufungua Settings na kutafuta \"text size\"", "Kumpigia mtu usiyemjua"], answer: 2, why: "Kisanduku cha kutafuta ndani ya Settings kinaupata kwenye simu yoyote." },
          { objective: "O1", q: "Unakuzaje kwenye skrini nyingi?", options: ["Kutanua vidole viwili kwenye skrini", "Kutikisa simu", "Kubonyeza kitufe cha kuwasha", "Kugeuza simu"], answer: 0, why: "Kutanua vidole viwili kunafanya vitu viwe vikubwa zaidi." },
          { objective: "O2", q: "Huwezi kusoma maandishi madogo sana kwenye chupa ya dawa. Nini kinaweza kusaidia?", options: ["App ya muziki", "Kikokotoo", "Saa", "Kikuzaji cha simu au zoom ya kamera"], answer: 3, why: "Kikuzaji hufanya maandishi madogo yawe makubwa." },
          { objective: "O3", q: "Manukuu ni nini?", options: ["Picha za chakula", "Maneno yanayoonyeshwa kwenye skrini watu wanapoongea", "Aina ya kengele", "Namba za simu"], answer: 1, why: "Manukuu husaidia sauti zinapokuwa ngumu kusikia." },
          { objective: "O3", q: "Kwenye YouTube, kitufe gani huwasha manukuu?", options: ["Share", "CC", "Like", "Subscribe"], answer: 1, why: "CC ni kifupi cha \"closed captions\", yaani manukuu." }
        ]
      }
    },
    {
      name: "Sura 2: Teknolojia kwa afya yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuweka vikumbusho vya dawa na afya",
          minutes: 5,
          goal: "Kuweka kikumbusho cha kila siku kinachojirudia kwa dawa au tabia nzuri ya afya.",
          text: [
            "Kikumbusho cha kila siku kwenye simu yako kinaweza kukusaidia kumeza dawa kwa wakati, kunywa maji, au kutembea kidogo.",
            "Njia rahisi zaidi ni kumwambia msaidizi wa sauti wa simu yako: \"Nikumbushe kumeza kidonge changu cha asubuhi kila siku saa 8 am\" (yaani saa mbili asubuhi). Unaweza pia kufungua app ya Clock (Saa) au Reminders (Vikumbusho), kuongeza kengele au kikumbusho, na kuchagua kirudie kila siku.",
            "Kikumbusho kinakusaidia tu kukumbuka; hakikuambii umeze nini. Daima fuata maelekezo ya daktari na mfamasia wako, na muulize mfamasia wako kama huna uhakika kuhusu wakati. Baadhi ya maduka ya dawa pia hutoa vikumbusho vya bure vya kuongeza dawa kwa ujumbe mfupi au kwa app."
          ],
          steps: ["Mwambie msaidizi wako wa sauti, au fungua app ya Clock au Reminders.", "Sema au andika unachotaka kukumbuka na wakati.", "Chagua kirudie kila siku.", "Kagua kwamba kimewekwa.", "Fuata maelekezo ya daktari na mfamasia wako."],
          words: [["Kikumbusho kinachojirudia", "kikumbusho kinachorudi kila siku au kila wiki bila kukiweka tena."], ["Kuongeza dawa (refill)", "kupata zaidi ya dawa unayoitumia tayari."]],
          slides: [
            { title: "Vikumbusho vya kila siku husaidia", bullets: ["Dawa kwa wakati", "Kunywa maji", "Kutembea kidogo"] },
            { title: "Weka kimoja", bullets: ["\"Nikumbushe kumeza kidonge changu kila siku saa 8 am.\"", "Au tumia app ya Clock au Reminders", "Chagua \"kila siku\""] },
            { title: "Kumbuka", bullets: ["Kikumbusho hakikuambii umeze nini", "Fuata daktari na mfamasia wako", "Uliza duka la dawa kuhusu vikumbusho vya kuongeza dawa"] }
          ],
          tryIt: "Weka kikumbusho kimoja cha kila siku kinachojirudia kwa dawa unayoitumia tayari, au kwa tabia nzuri ya afya kama matembezi ya dakika 10.",
          youCanNow: "kuweka kikumbusho cha kila siku kinachojirudia kwa dawa au tabia nzuri ya afya.",
          quickCheck: [
            { objective: "O4", q: "Kikumbusho kinachojirudia kinafanya nini?", options: ["Kinalia mara moja tu", "Kinakuambia dawa gani umeze", "Kinaagiza dawa zako za kuongeza", "Kinarudi kila siku kwa wakati uliouchagua"], answer: 3, why: "Kikumbusho kinachojirudia hurudi kila siku; kinakusaidia kukumbuka lakini hakikuambii umeze nini." },
            { objective: "O4", q: "Huna uhakika kama umeze kidonge kabla au baada ya kifungua kinywa. Unamuuliza nani?", options: ["App ya vikumbusho", "Mfamasia wako", "Rafiki", "Tovuti inayouza vitamini"], answer: 1, why: "Fuata maelekezo ya daktari na mfamasia wako, na muulize mfamasia wako kuhusu wakati." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujiandaa kwa ziara ya daktari kwa msaada wa AI",
          minutes: 5,
          goal: "Kutumia msaidizi wa AI kugeuza wasiwasi wako kuwa orodha wazi ya maswali kwa daktari wako.",
          text: [
            "Ziara za daktari zinaweza kuonekana za haraka, na ni rahisi kusahau ulichotaka kuuliza. Msaidizi wa AI anaweza kukusaidia kupanga mawazo yako kabla ya kwenda.",
            "Eleza wasiwasi wako kwa maneno ya jumla, bila jina lako, tarehe ya kuzaliwa wala namba za bima: \"Nina uchunguzi wa afya wiki ijayo. Nimekuwa nikichoka kuliko kawaida, magoti yangu yanauma ninapopanda ngazi, na nataka kuuliza kuhusu dawa yangu ya shinikizo la damu. Nisaidie kutengeneza orodha fupi ya maswali wazi ya kumuuliza daktari wangu.\"",
            "AI ni ya kujiandaa, si ya kutambua ugonjwa. Usibadilishe wala kuacha dawa yoyote kwa sababu ya kile AI inachosema. Peleka orodha yako kwenye ziara, andika majibu ya daktari, au nenda na mwanafamilia akusaidie."
          ],
          steps: ["Andika wasiwasi wako kwa maneno ya jumla, bila namba za binafsi.", "Iombe AI orodha fupi ya maswali wazi.", "Weka swali muhimu zaidi kwanza.", "Peleka orodha, na uandike majibu.", "Usibadilishe dawa kamwe kwa sababu ya AI; muulize daktari wako."],
          words: [["Kutambua ugonjwa (diagnose)", "kuamua mtu ana ugonjwa au tatizo gani; ni mtaalamu wa afya tu anayeweza kufanya hivi."]],
          slides: [
            { title: "Ziara huonekana za haraka", bullets: ["Ni rahisi kusahau maswali", "AI inaweza kukusaidia kujiandaa"] },
            { title: "Omba orodha ya maswali", bullets: ["Eleza wasiwasi kwa maneno ya jumla", "Bila jina, tarehe ya kuzaliwa wala namba za bima", "Swali muhimu zaidi kwanza"] },
            { title: "Jiandae, usijitambulie ugonjwa", bullets: ["AI haichukui nafasi ya daktari wako", "Usibadilishe dawa kamwe kwa sababu ya AI", "Andika majibu ya daktari"] }
          ],
          tryIt: "Fikiria miadi yako ijayo. Muombe msaidizi wa AI ageuze wasiwasi wako miwili au mitatu kuwa orodha fupi ya maswali. Kagua kwamba haina namba za binafsi, kisha ihifadhi au uichapishe.",
          youCanNow: "kuandaa kwa usalama orodha wazi ya maswali kwa daktari wako kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "AI inafaa kwa nini kabla ya ziara ya daktari?", options: ["Kutambua ugonjwa wako", "Kubadilisha dawa yako", "Kupanga wasiwasi wako kuwa maswali wazi", "Kupanga upasuaji"], answer: 2, why: "AI ni ya kuandaa maswali yako, si ya kutambua ugonjwa." },
            { objective: "O5", q: "Unaandika wasiwasi wako kwa ajili ya AI. Unaacha nini nje?", options: ["Jinsi ulivyokuwa ukijisikia", "Jina lako, tarehe ya kuzaliwa na namba za bima", "Kwamba una uchunguzi wa afya wiki ijayo", "Kwamba magoti yako yanauma"], answer: 1, why: "Eleza wasiwasi kwa maneno ya jumla, bila namba za binafsi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupata taarifa za afya zinazoaminika",
          minutes: 5,
          goal: "Kukagua taarifa za afya kwenye chanzo cha bure kinachoaminika.",
          text: [
            "Taarifa za afya mtandaoni zinaanzia nzuri sana hadi hatari. Wasaidizi wa AI nao wanaweza kukosea kuhusu afya. Kwa hiyo kagua unachosoma kwenye chanzo kinachoaminika.",
            "MedlinePlus (medlineplus.gov) ni tovuti ya bure ya taarifa za afya kutoka National Library of Medicine (Maktaba ya Kitaifa ya Tiba), sehemu ya US National Institutes of Health (Taasisi za Kitaifa za Afya za Marekani). Haina matangazo na inaeleza magonjwa, vipimo na dawa kwa lugha rahisi. Ofisi ya daktari wako na mfamasia wako pia ni vyanzo vinavyoaminika.",
            "Kuwa mwangalifu na tovuti zinazouza tiba, zinazoahidi matokeo ya miujiza, au zinazokuambia uache dawa yako. Kitu unachosoma kikikutia wasiwasi, kiandike na umuulize daktari au mfamasia wako."
          ],
          steps: ["Tambua madai ya afya kutoka AI au tovuti.", "Yatafute kwenye medlineplus.gov.", "Muulize daktari au mfamasia wako kuhusu chochote kinachokutia wasiwasi.", "Epuka tovuti zinazouza tiba au kuahidi miujiza."],
          words: [["Chanzo kinachoaminika", "mahali pa kuaminika pa kupata taarifa, kama tovuti ya afya ya serikali au daktari wako mwenyewe."], ["MedlinePlus", "tovuti ya bure ya taarifa za afya, isiyo na matangazo, kutoka US National Library of Medicine."]],
          slides: [
            { title: "Si taarifa zote za afya ni nzuri", bullets: ["Tovuti zinaweza kukosea", "AI pia inaweza kukosea"] },
            { title: "MedlinePlus: medlineplus.gov", bullets: ["Bure na bila matangazo", "Kutoka National Library of Medicine", "Maelezo kwa lugha rahisi"] },
            { title: "Dalili za hatari", bullets: ["Kuuza tiba", "Ahadi za miujiza", "\"Acha dawa yako\""] }
          ],
          sources: [{ name: "Kuhusu MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/about/general/aboutmedlineplus/" }],
          tryIt: "Kazi ya mwisho: badilisha mpangilio mmoja ili simu yako iwe rahisi kuona au kusikia, weka kikumbusho cha kila siku cha dawa au matembezi, na tumia AI kutengeneza orodha fupi ya maswali kwa ziara yako ijayo kwa daktari, bila namba za binafsi. Tafuta mada moja kutoka orodha yako kwenye medlineplus.gov.",
          youCanNow: "kufanya kifaa chako kiwe rahisi kutumia, kuendelea na tabia za afya za kila siku, kujiandaa kwa miadi, na kupata taarifa za afya zinazoaminika.",
          quickCheck: [
            { objective: "O6", q: "MedlinePlus ni nini?", options: ["Duka linalouza dawa", "App ya afya ya kulipia", "Msaidizi wa AI", "Tovuti ya bure ya taarifa za afya, isiyo na matangazo, kutoka National Library of Medicine"], answer: 3, why: "MedlinePlus inaeleza magonjwa, vipimo na dawa kwa lugha rahisi, bila matangazo." },
            { objective: "O6", q: "Tovuti inasema chai fulani itatibu shinikizo lako la damu na unaweza kuacha dawa yako. Unafanya nini?", options: ["Kuiona kama dalili ya hatari, kuiandika na kumuuliza daktari wako", "Kuacha dawa yako na kujaribu chai", "Kununua ya mwaka mzima", "Kuwashirikisha marafiki"], answer: 0, why: "Tovuti zinazoahidi tiba au zinazosema uache dawa ni dalili za hatari; muulize daktari au mfamasia wako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Teknolojia kwa afya yako",
        questions: [
          { objective: "O4", q: "Unafanyaje kikumbusho kirudi kila siku?", options: ["Kufuta app", "Kukiweka mara moja na kutumaini", "Kuzima simu", "Kuchagua kirudie kila siku"], answer: 3, why: "Kikumbusho kinachojirudia hurudi kila siku." },
          { objective: "O4", q: "Je, kikumbusho cha simu kinakuambia dawa gani umeze?", options: ["Hapana, fuata daktari na mfamasia wako", "Ndiyo, daima", "Mwishoni mwa wiki tu", "Ndiyo, kama kina sauti kubwa"], answer: 0, why: "Kinakusaidia tu kukumbuka." },
          { objective: "O5", q: "Unapaswa kuacha nini nje unapoiomba AI ikusaidie kujiandaa kwa ziara?", options: ["Wasiwasi wako", "Neno \"daktari\"", "Jina lako, tarehe ya kuzaliwa na namba za bima", "Tarehe ya ziara"], answer: 2, why: "Namba za binafsi hazipaswi kamwe kuingia kwenye AI." },
          { objective: "O5", q: "AI inapendekeza kwamba huenda huhitaji dawa fulani. Unafanya nini?", options: ["Kuacha kuimeza", "Kumuuliza mtu usiyemjua", "Kuongeza dozi mara mbili", "Kumuuliza daktari wako; usibadilishe dawa kamwe kwa sababu ya AI"], answer: 3, why: "Ni daktari wako tu anayepaswa kubadilisha dawa yako." },
          { objective: "O6", q: "Ipi ni tovuti ya bure ya taarifa za afya, isiyo na matangazo, kutoka serikali ya Marekani?", options: ["Tangazo linalojitokeza (pop-up)", "Tovuti inayouza tiba ya miujiza", "MedlinePlus", "Chapisho la mitandao ya kijamii"], answer: 2, why: "MedlinePlus ni ya National Library of Medicine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Afya, Ustawi na Urahisi wa Kutumia Teknolojia",
    questions: [
      { objective: "O1", q: "App ya Settings kwa kawaida huonyeshwa kama:", options: ["Kamera", "Gia", "Simu", "Saa"], answer: 1, why: "Settings kwa kawaida hutumia picha ya gia." },
      { objective: "O1", q: "Ili kupata haraka mpangilio wa ukubwa wa maandishi, wewe:", options: ["Unatafuta \"text size\" ndani ya Settings", "Unazima na kuwasha simu", "Unafungua kamera", "Unapigia benki yako"], answer: 0, why: "Kutafuta kunafanya kazi kwenye simu yoyote." },
      { objective: "O1", q: "Kutelezesha mstari wa ukubwa wa maandishi kwenda kulia kunafanya maandishi:", options: ["Makubwa zaidi", "Madogo zaidi", "Yapotee", "Mekundu"], answer: 0, why: "Kulia ni kukuza." },
      { objective: "O1", q: "Kubana vidole viwili pamoja kwenye skrini:", options: ["Kunakuza", "Kunapunguza ukubwa", "Kunazima simu", "Kunapiga picha"], answer: 1, why: "Bana pamoja ili kupunguza; tanua ili kukuza." },
      { objective: "O2", q: "App ya iPhone inayogeuza kamera kuwa kioo cha kukuzia ni:", options: ["Weather", "Calculator", "Magnifier", "Music"], answer: 2, why: "Magnifier hukuza maandishi madogo." },
      { objective: "O2", q: "Katika chumba chenye mwanga hafifu, kukuza hufanya kazi vizuri zaidi ukiwa:", options: ["Unatikisa simu", "Unafunika kamera", "Unaweka simu mbali sana", "Unawasha mwanga"], answer: 3, why: "Mwanga husaidia kamera kuona vizuri." },
      { objective: "O2", q: "Mpangilio wa simu kukusomea maandishi kwa sauti unapatikana kwa kutafuta ndani ya Settings:", options: ["\"ringtone\"", "\"wallpaper\"", "\"spoken content\" au \"select to speak\"", "\"battery\""], answer: 2, why: "Hayo ndiyo majina ya kawaida ya mpangilio wa kusomewa kwa sauti." },
      { objective: "O3", q: "Manukuu ni:", options: ["Maneno kwenye skrini watu wanapoongea", "Picha", "Namba za simu", "Nywila"], answer: 0, why: "Manukuu huonyesha maneno yanayosemwa." },
      { objective: "O3", q: "Live Captions inaweza kupatikana kwa kutafuta ndani ya Settings:", options: ["\"contacts\"", "\"camera\"", "\"clock\"", "\"caption\""], answer: 3, why: "Kutafuta \"caption\" hupata mipangilio ya manukuu." },
      { objective: "O3", q: "Visaidizi vingi vya kisasa vya kusikia huunganishwa na simu kwa kutumia:", options: ["Pini ya karatasi", "Bluetooth", "Simu ya mezani", "Chaja"], answer: 1, why: "Bluetooth ni muunganisho usio na waya." },
      { objective: "O3", q: "Nani anapaswa kukusaidia kuchagua mipangilio ya visaidizi vya kusikia?", options: ["Tangazo linalojitokeza", "Mtaalamu wako wa kusikia", "Mtu usiyemjua mtandaoni", "Hakuna mtu"], answer: 1, why: "Anajua visaidizi vyako vya kusikia na hali ya masikio yako." },
      { objective: "O4", q: "Ombi gani la kusema huweka kikumbusho cha kila siku cha dawa?", options: ["\"Dawa?\"", "\"Kidonge.\"", "\"Habari.\"", "\"Nikumbushe kumeza kidonge changu kila siku saa 8 am.\""], answer: 3, why: "Linasema nini, lini na mara ngapi." },
      { objective: "O4", q: "Kama huna uhakika ni lini umeze dawa, muulize:", options: ["Mfamasia wako", "AI peke yake", "Jirani", "Tangazo linalojitokeza"], answer: 0, why: "Wafamasia ni wataalamu wa dawa." },
      { objective: "O5", q: "AI inafaa kabla ya ziara ya daktari kwa:", options: ["Kubadilisha dawa yako", "Kukutambulia ugonjwa", "Kupanga maswali yako", "Kuandika maagizo ya dawa"], answer: 2, why: "AI inakusaidia kujiandaa, si kutambua ugonjwa." },
      { objective: "O5", q: "\"Kutambua ugonjwa\" (diagnose) maana yake ni:", options: ["Kukuza maandishi", "Kuandika orodha", "Kuweka kikumbusho", "Kuamua mtu ana ugonjwa gani"], answer: 3, why: "Ni mtaalamu wa afya tu anayeweza kutambua ugonjwa." },
      { objective: "O5", q: "Kipi HAKIPASWI kuwa kwenye prompt yako ya AI kuhusu afya?", options: ["\"Magoti yangu yanauma\"", "\"Ninajisikia uchovu\"", "Namba yako ya bima", "\"Nina uchunguzi wa afya wiki ijayo\""], answer: 2, why: "Namba za bima ni za binafsi." },
      { objective: "O5", q: "Kwenye ziara, tabia nzuri ni:", options: ["Kuacha orodha yako nyumbani", "Kuandika majibu ya daktari", "Kutouliza chochote", "Kutegemea kumbukumbu tu"], answer: 1, why: "Kuandika majibu kunakusaidia kuyakumbuka." },
      { objective: "O6", q: "MedlinePlus inaendeshwa na:", options: ["National Library of Medicine", "Kampuni ya virutubisho", "Mtandao wa kijamii", "Kampuni ya simu"], answer: 0, why: "Ni huduma ya NLM ndani ya NIH." },
      { objective: "O6", q: "Tovuti inayoahidi tiba ya miujiza ni:", options: ["Dalili ya hatari", "Inaaminika daima", "Inaendeshwa na daktari wako", "Huduma ya afya ya bure"], answer: 0, why: "Madai ya miujiza ni ishara za onyo." },
      { objective: "O6", q: "Kitu ulichosoma kuhusu afya yako kinakutia wasiwasi. Hatua bora ni ipi?", options: ["Kuacha dawa zote", "Kukiandika na kumuuliza daktari au mfamasia wako", "Kumpuuza daktari wako", "Kununua bidhaa hiyo"], answer: 1, why: "Daktari au mfamasia wako anaweza kueleza kwa usalama." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 4, 7, 11, 13, 15, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Rahisi zaidi kuona au kusikia", objective: "O1", notYet: "Hakubadilisha mpangilio wowote.", meets: "Alibadilisha mpangilio mmoja wa kuona au kusikia, kama maandishi makubwa au manukuu.", exceeds: "Alibadilisha mipangilio miwili au zaidi na anaweza kumwonyesha mtu mwingine jinsi ya kufanya." },
      { name: "Kikumbusho cha kila siku", objective: "O4", notYet: "Hakuna kikumbusho, au hakijirudii.", meets: "Kikumbusho cha kila siku kinachojirudia kwa dawa au matembezi, na amekagua kwamba kimewekwa.", exceeds: "Wakati unalingana na alichosema daktari au mfamasia." },
      { name: "Maswali wazi", objective: "O5", notYet: "Hakuna orodha, au maswali hayako wazi.", meets: "Orodha fupi na wazi ya maswali iliyotengenezwa kwa msaada wa AI, swali muhimu zaidi kwanza.", exceeds: "Ina nafasi ya kuandika majibu ya daktari." },
      { name: "Namba za binafsi zimeachwa nje", objective: "O5", notYet: "Prompt au orodha ina jina, tarehe ya kuzaliwa au namba ya bima.", meets: "Hakuna namba za binafsi katika prompt wala orodha.", exceeds: "Wasiwasi umeelezwa kwa maneno ya jumla ambayo bado yanampa daktari picha wazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi ambao bado wanatumia kikumbusho chao cha dawa au afya katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaopeleka orodha iliyoandikwa ya maswali kwenye ziara ya daktari ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoanza kozi nyingine ya Wazee na Teknolojia ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au tableti yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Kitu chenye maandishi madogo cha kufanyia mazoezi, kama menyu au boksi tupu la dawa",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya taratibu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Panga wanafunzi kwa aina ya simu ili mipangilio kwenye skrini ilingane, na msaidie kila mmoja kutafuta ndani ya Settings.",
      "Usitoe ushauri wa kitabibu kamwe; peleka maswali ya dawa na afya kwa daktari au mfamasia wa mwanafunzi.",
      "Wakumbushe wanafunzi wasiweke majina, tarehe za kuzaliwa wala namba za bima kwenye prompt za AI.",
      "Baadhi ya wanafunzi wanaweza kuona aibu kuhusu macho au masikio yao; weka mazungumzo ya kivitendo na ya faragha.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
