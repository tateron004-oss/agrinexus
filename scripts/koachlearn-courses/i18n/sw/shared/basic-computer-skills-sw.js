"use strict";

// Koach Learn course (Swahili translation of shared/basic-computer-skills.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "basic-computer-skills-sw",
  lang: "sw",
  translationOf: "basic-computer-skills",
  category: "Seniors and Technology",
  name: "Ujuzi wa Msingi wa Kompyuta",
  skills: "Kuwasha na kuzima kompyuta, Kutumia kipanya (mouse) au trackpad, Kuandika kwa kibodi, Kufungua na kufunga apps na madirisha, Kuhifadhi na kutafuta faili katika folda, Kuisasisha kompyuta",
  outcome: "kuwasha kompyuta ya Windows au Mac na kuingia (sign in), kutumia kipanya na kibodi kwa kujiamini, kufungua app, kuandika na kuhifadhi ujumbe mfupi katika folda uliyotengeneza, kuupata tena baadaye, na kuzima kompyuta kwa njia sahihi.",
  about: [
    "Kozi hii ni ya mtu yeyote anayejisikia kutokuwa na uhakika mbele ya kompyuta: watu ambao hawajawahi kuitumia, watu waliojifunza miaka mingi iliyopita, na watu wanaotumia simu zaidi. Tunaenda hatua moja ndogo kwa wakati, na hakuna utakachofanya katika masomo haya kitakachoharibu kompyuta.",
    "Katika Sura 1 utajifunza sehemu za kompyuta, jinsi ya kuiwasha na kuingia, na jinsi ya kutumia kipanya na kibodi. Katika Sura 2 utafungua apps na madirisha, utahifadhi faili katika folda, utaipata tena, na utaitunza kompyuta iwe salama.",
    "Hatua zimetolewa kwa kompyuta za Windows na kompyuta za Mac. Kila somo linachukua kama dakika tano. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Washa kompyuta na uingie (sign in). Tengeneza folda mpya inayoitwa \"Practice\" ndani ya folda ya Documents. Fungua Notepad (Windows) au TextEdit (Mac), andika ujumbe mfupi, kama orodha ya maswali kwa ziara yako ijayo kwa daktari au ujumbe kwa mjukuu, ukianza kila sentensi kwa herufi kubwa. Uhifadhi katika folda ya Practice kwa jina lililo wazi, funga app, tafuta faili tena na uifungue, kisha zima kompyuta kwa njia sahihi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wenye uzoefu mdogo au wasio na uzoefu kabisa wa kompyuta: wazee, watu wanaorudi kazini au katika jamii, wanaotafuta kazi na walezi wanaotaka kutumia kompyuta ya nyumbani, ya maktaba au ya kituo cha ajira wao wenyewe.",
    startingPoint: "Huenda wanatumia simu kupiga simu au kutuma ujumbe mfupi. Wengi hawajawahi kutumia kipanya, kuandika kwa kibodi kamili, kufungua app kwenye kompyuta, kuhifadhi faili katika folda au kuzima kompyuta kwa njia sahihi.",
    gap: "Maombi ya kazi, huduma za maktaba, shule na fomu nyingi zinahitaji kompyuta. Bila mambo haya ya msingi watu lazima waombe wengine msaada, wanapoteza kazi yao kwa sababu haikuhifadhiwa, au wanaepuka kompyuta kabisa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila sehemu na kila kitufe kinatajwa na kuelezwa",
      "Vifaa: kompyuta ya mezani au laptop ya Windows au Mac, nyumbani, maktaba au kituo cha ajira",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla, pamoja na muda wa ziada wa kufanya mazoezi ya kipanya",
      "Gharama: apps za bure tu ambazo tayari ziko kwenye kompyuta (Notepad au TextEdit)",
      "Kompyuta za pamoja: wanafunzi wanafuata sheria za wafanyakazi za kuingia na hawahifadhi faili za binafsi kwenye kompyuta za maktaba"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kompyuta ya mezani au laptop", action: "kutaja sehemu zake kuu, kuiwasha na kuingia (sign in)", standard: "bila msaada, ukitaja skrini, kibodi, kipanya au trackpad na kitufe cha kuwasha" },
    { id: "O2", condition: "Ukitumia kipanya au trackpad", action: "kuelekeza, kubofya, kubofya mara mbili, kubofya kulia na kusogeza ukurasa (scroll)", standard: "ukifanya kila kitendo kwa usahihi unapoombwa" },
    { id: "O3", condition: "Ukitumia kibodi", action: "kuandika sentensi yenye herufi kubwa, nafasi na alama za uandishi na kurekebisha makosa", standard: "ukianza kila sentensi kwa herufi kubwa na kurekebisha kila kosa kwa Backspace au undo" },
    { id: "O4", condition: "Kwenye kompyuta ya Windows au Mac", action: "kufungua app kwa jina lake, kubadilisha ukubwa wa dirisha lake au kulificha, kulirudisha na kulifunga", standard: "bila msaada" },
    { id: "O5", condition: "Ukipewa ujumbe mfupi wa kuhifadhi", action: "kutengeneza folda, kuhifadhi ujumbe ndani yake kwa jina lililo wazi na kuupata tena", standard: "faili ikiwa katika folda sahihi na ikifunguliwa tena baadaye" },
    { id: "O6", condition: "Kompyuta inapohitaji matunzo au ina tatizo", action: "kusakinisha masasisho (updates), kuiwasha upya, kuizima kwa njia sahihi na kuchagua mahali salama pa kupata msaada", standard: "ukitumia menyu kuzima na bila kupiga kamwe namba kutoka kwenye pop-up" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuzoea kompyuta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sehemu za kompyuta, na kuiwasha",
          minutes: 5,
          goal: "Taja sehemu kuu za kompyuta, iwashe na uingie (sign in).",
          text: [
            "Kompyuta ya mezani ina skrini (monitor), kibodi, kipanya (mouse) na sanduku au skrini inayobeba kompyuta yenyewe. Laptop ina vitu hivi vyote katika kipande kimoja kinachofunguka kama kitabu; badala ya kipanya ina kibao bapa cha kugusa kinachoitwa trackpad.",
            "Ili kuiwasha, bonyeza kitufe cha kuwasha mara moja. Kwa kawaida kina duara lenye mstari juu yake. Kwenye laptop mara nyingi kiko juu upande wa kulia wa kibodi au pembeni. Subiri skrini iwake.",
            "Kompyuta nyingi kisha zinakuomba uingie (sign in) kwa nywila (password) au PIN. Iandike na ubonyeze Enter. Kwenye kompyuta ya pamoja, kama ile ya maktaba, wafanyakazi watakuambia jinsi ya kuingia."
          ],
          steps: ["Tafuta kitufe cha kuwasha (duara lenye mstari juu).", "Kibonyeze mara moja na ukiachie.", "Subiri skrini ya kuingia (sign in).", "Andika nywila au PIN yako na ubonyeze Enter."],
          words: [["Monitor", "skrini ya kompyuta ya mezani."], ["Laptop", "kompyuta inayofunguka, yenye skrini na kibodi katika kipande kimoja."], ["Trackpad", "kibao bapa cha kugusa kwenye laptop kinachofanya kazi kama kipanya."], ["Kuingia (sign in)", "kuandika nywila au PIN yako ili kompyuta ijue ni wewe."]],
          slides: [
            { title: "Sehemu za kompyuta", bullets: ["Skrini (monitor)", "Kibodi", "Kipanya (mouse), au trackpad kwenye laptop"] },
            { title: "Iwashe", bullets: ["Kitufe cha kuwasha: duara lenye mstari juu", "Bonyeza mara moja na usubiri"] },
            { title: "Ingia (sign in)", bullets: ["Andika nywila au PIN yako", "Bonyeza Enter", "Kwenye kompyuta ya pamoja, uliza wafanyakazi"] }
          ],
          tryIt: "Onyesha kwa kidole skrini, kibodi na kipanya (au trackpad) kwenye kompyuta iliyo karibu nawe. Tafuta kitufe cha kuwasha, washa kompyuta na uingie.",
          youCanNow: "kutaja sehemu za kompyuta, kuiwasha na kuingia (sign in).",
          quickCheck: [
            { objective: "O1", q: "Monitor ni nini?", options: ["Kipanya", "Skrini", "Waya wa umeme", "Kibodi"], answer: 1, why: "Monitor ni skrini unapoona kazi yako." },
            { objective: "O1", q: "Unataka kutumia kompyuta ya maktaba na inakuomba uingie (sign in). Utafanya nini?", options: ["Kushikilia kitufe cha kuwasha hadi izime", "Kuchomoa waya wake", "Kuandika herufi zozote hadi ifunguke", "Kuwauliza wafanyakazi jinsi ya kuingia"], answer: 3, why: "Kwenye kompyuta ya pamoja, wafanyakazi watakuambia jinsi ya kuingia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutumia kipanya au trackpad",
          minutes: 5,
          goal: "Elekeza, bofya, bofya mara mbili, bofya kulia na usogeze ukurasa.",
          text: [
            "Kipanya kinasogeza kielekezi (pointer), mshale mdogo ulio kwenye skrini. Weka mkono wako juu ya kipanya na ukiteleze taratibu juu ya meza; mshale unafuata. Nafasi ikikuishia, kiinue kipanya na ukiweke tena katikati.",
            "Kubofya (click): bonyeza kitufe cha kushoto mara moja kuchagua kitu. Kubofya mara mbili (double-click): bonyeza kitufe cha kushoto mara mbili haraka kufungua kitu, kama folda. Kubofya kulia (right-click): bonyeza kitufe cha kulia mara moja kuona menyu fupi ya machaguo. Kusogeza (scroll): zungusha gurudumu dogo lililo kati ya vitufe ili kusogeza ukurasa juu au chini.",
            "Kwenye trackpad ya laptop, teleza kidole kimoja kusogeza mshale, gusa au bonyeza mara moja kubofya, na teleza vidole viwili juu au chini kusogeza ukurasa. Ili kubofya kulia, gusa kwa vidole viwili."
          ],
          steps: ["Teleza kipanya kusogeza mshale.", "Kubofya: bonyeza kitufe cha kushoto mara moja.", "Kubofya mara mbili: bonyeza kitufe cha kushoto mara mbili haraka.", "Kubofya kulia: bonyeza kitufe cha kulia mara moja upate menyu.", "Kusogeza: zungusha gurudumu, au teleza vidole viwili kwenye trackpad."],
          words: [["Kielekezi (pointer)", "mshale mdogo kwenye skrini unaosogea pamoja na kipanya."], ["Kubofya (click)", "kubonyeza kitufe cha kushoto cha kipanya mara moja."], ["Kubofya mara mbili (double-click)", "kubonyeza kitufe cha kushoto mara mbili haraka ili kufungua kitu."], ["Kubofya kulia (right-click)", "kubonyeza kitufe cha kulia ili kuona menyu ya machaguo."], ["Kusogeza (scroll)", "kusogeza ukurasa juu au chini."]],
          slides: [
            { title: "Sogeza kielekezi", bullets: ["Teleza kipanya taratibu", "Nafasi imeisha? Kiinue na ukirudishe katikati"] },
            { title: "Kubofya", bullets: ["Kubofya: kitufe cha kushoto mara moja, kuchagua", "Kubofya mara mbili: mara mbili haraka, kufungua", "Kubofya kulia: kitufe cha kulia, kupata menyu"] },
            { title: "Kusogeza ukurasa (scroll)", bullets: ["Zungusha gurudumu la kipanya", "Trackpad: teleza vidole viwili juu au chini"] },
            { title: "Trackpad", bullets: ["Kidole kimoja kinasogeza mshale", "Gusa ili kubofya", "Gusa kwa vidole viwili ili kubofya kulia"] }
          ],
          tryIt: "Fungua ukurasa wowote wa wavuti au hati yoyote. Sogeza ukurasa chini kisha juu tena. Bofya kulia mahali patupu na usome menyu, kisha bonyeza kitufe cha Esc kuifunga. Bofya mara mbili juu ya neno ili kulichagua.",
          youCanNow: "kuelekeza, kubofya, kubofya mara mbili, kubofya kulia na kusogeza ukurasa kwa kipanya au trackpad.",
          quickCheck: [
            { objective: "O2", q: "Kusogeza ukurasa (scroll) kunafanya nini?", options: ["Kunasogeza ukurasa juu au chini", "Kunafungua folda", "Kunazima kompyuta", "Kunaandika herufi kubwa"], answer: 0, why: "Kuzungusha gurudumu la kipanya, au kuteleza vidole viwili kwenye trackpad, kunasogeza ukurasa." },
            { objective: "O2", q: "Kwenye trackpad ya laptop, unataka kuona menyu fupi ya machaguo. Utafanya nini?", options: ["Kuteleza kidole kimoja", "Kubonyeza kitufe cha kuwasha", "Kugusa kwa vidole viwili", "Kubonyeza Caps Lock"], answer: 2, why: "Kwenye trackpad, kugusa kwa vidole viwili ni kubofya kulia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika kwa kibodi",
          minutes: 5,
          goal: "Andika sentensi yenye herufi kubwa, nafasi na alama za uandishi, na urekebishe makosa.",
          text: [
            "Kibodi ina herufi, namba na vitufe maalum. Kitufe kirefu kilicho chini ni Space bar (cha nafasi). Enter (Return kwenye Mac) kinaanza mstari mpya au kinasema \"endelea\". Backspace (Delete kwenye Mac) kinafuta herufi iliyo kushoto ya mstari unaopepesa, unaoitwa kishale (cursor).",
            "Kwa herufi kubwa moja, shikilia Shift na ubonyeze herufi. Caps Lock inafanya kila herufi kuwa kubwa hadi uibonyeze tena. Shift pia inaandika alama ya juu kwenye kitufe, kama ? au !.",
            "Njia za mkato zinaokoa muda. Kwenye Windows tumia Ctrl; kwenye Mac tumia Command. Ctrl+Z inafuta kosa ulilofanya (undo), Ctrl+C inanakili, Ctrl+V inabandika na Ctrl+S inahifadhi."
          ],
          steps: ["Bofya mahali unapotaka kuandika; kishale kinapepesa hapo.", "Shikilia Shift na ubonyeze herufi kupata herufi kubwa.", "Bonyeza Space bar kati ya maneno.", "Bonyeza Backspace (Delete kwenye Mac) kurekebisha kosa.", "Bonyeza Enter (Return kwenye Mac) kwa mstari mpya."],
          words: [["Kishale (cursor)", "mstari unaopepesa unaoonyesha maandishi yako yataenda wapi."], ["Shift", "kitufe unachoshikilia kupata herufi kubwa au alama ya juu."], ["Backspace", "kitufe kinachofuta herufi iliyo kushoto (Delete kwenye Mac)."], ["Njia ya mkato (shortcut)", "mchanganyiko wa vitufe unaofanya kazi haraka, kama Ctrl+S kuhifadhi."]],
          slides: [
            { title: "Vitufe muhimu", bullets: ["Space bar: nafasi", "Enter (Return kwenye Mac): mstari mpya", "Backspace (Delete kwenye Mac): kufuta herufi"] },
            { title: "Herufi kubwa na alama", bullets: ["Shift + herufi = herufi kubwa moja", "Caps Lock = herufi zote kubwa hadi uibonyeze tena", "Shift pia inaandika ? na !"] },
            { title: "Njia za mkato zenye msaada", bullets: ["Windows: Ctrl. Mac: Command", "Z kurudisha (undo), C kunakili, V kubandika, S kuhifadhi"] }
          ],
          tryIt: "Fungua kisanduku cha kutafuta au hati tupu na uandike: Jina langu ni ___ na ninajifunza kompyuta! Anza kwa herufi kubwa, kisha futa neno moja kwa Backspace na uliandike tena.",
          youCanNow: "kuandika sentensi zenye herufi kubwa na alama za uandishi, kurekebisha makosa na kutumia njia za mkato za kawaida.",
          quickCheck: [
            { objective: "O3", q: "Ctrl+C inafanya nini kwenye Windows?", options: ["Inahifadhi kazi yako", "Inafuta kosa (undo)", "Inanakili", "Inafunga app"], answer: 2, why: "Ctrl+C inanakili; Ctrl+V inabandika." },
            { objective: "O3", q: "Kila unachoandika kinatoka kwa herufi kubwa. Utafanya nini?", options: ["Kuwasha kompyuta upya", "Kubonyeza Caps Lock tena kuizima", "Kushikilia Shift kwa kila herufi", "Kununua kibodi mpya"], answer: 1, why: "Caps Lock inafanya kila herufi kuwa kubwa hadi uibonyeze tena." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuzoea kompyuta",
        questions: [
          { objective: "O1", q: "Trackpad ni nini?", options: ["Skrini", "Aina ya printa", "Kibao bapa cha kugusa kwenye laptop kinachofanya kazi kama kipanya", "Waya"], answer: 2, why: "Trackpad inafanya kazi ya kipanya kwenye laptop." },
          { objective: "O1", q: "Kitufe cha kuwasha kwa kawaida kinaonekanaje?", options: ["Nyota", "Duara lenye mstari juu", "Moyo", "Alama ya kuuliza"], answer: 1, why: "Hiyo ndiyo alama ya kawaida ya kuwasha." },
          { objective: "O2", q: "Unafunguaje folda kwa kipanya?", options: ["Kubofya kulia mara moja", "Kuzungusha gurudumu", "Kuibofya mara mbili", "Kutikisa kipanya"], answer: 2, why: "Kubofya mara mbili kunafungua vitu." },
          { objective: "O3", q: "Unaandikaje herufi kubwa moja?", options: ["Kubonyeza Enter", "Kushikilia Shift na kubonyeza herufi", "Kubonyeza Backspace", "Kubonyeza Space bar mara mbili"], answer: 1, why: "Shift pamoja na herufi inaleta herufi kubwa moja." },
          { objective: "O3", q: "Umeandika herufi isiyo sahihi. Kitufe gani kinaifuta?", options: ["Space bar", "Shift", "Caps Lock", "Backspace (Delete kwenye Mac)"], answer: 3, why: "Backspace inafuta herufi iliyo kushoto ya kishale." }
        ]
      }
    },
    {
      name: "Sura 2: Apps, faili na matunzo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kufungua apps na kushughulikia madirisha",
          minutes: 5,
          goal: "Fungua app, badilisha ukubwa wa dirisha lake na uifunge.",
          text: [
            "Apps (programu) zinafanya kazi: kivinjari cha wavuti kwa intaneti, app ya kuandika kwa maelezo, app ya picha kwa picha. Kwenye Windows, bofya kitufe cha Start (nembo ya Windows chini ya skrini) na uandike jina la app. Kwenye Mac, bofya kioo cha kukuza juu kulia (Spotlight), andika jina na ubonyeze Return.",
            "Kila app inafunguka katika dirisha. Kwenye kona ya juu kuna vitufe vidogo. Kwenye Windows, juu kulia: kistari (minimize, kulificha kwa sasa), mraba (maximize, kujaza skrini) na X (kufunga). Kwenye Mac, juu kushoto: chekundu (kufunga), cha njano (kuficha) na kijani (skrini nzima).",
            "Apps zilizofichwa zinasubiri kwenye taskbar (Windows, chini) au Dock (Mac). Bofya alama (icon) ya app hapo ili kuirudisha."
          ],
          steps: ["Windows: bofya Start na uandike jina la app. Mac: bofya kioo cha kukuza na uandike jina.", "Bonyeza Enter au Return kuifungua.", "Tumia kitufe cha minimize kuificha.", "Bofya alama yake kwenye taskbar au Dock kuirudisha.", "Ifunge kwa X (Windows) au kitufe chekundu (Mac)."],
          words: [["App / programu", "programu inayofanya kazi fulani, kama kuandika au kuvinjari intaneti."], ["Dirisha (window)", "kisanduku ambamo app inafunguka."], ["Minimize", "kuficha dirisha kwa sasa bila kulifunga."], ["Taskbar / Dock", "mstari wa alama za apps chini ya skrini (taskbar ya Windows, Dock ya Mac)."]],
          slides: [
            { title: "Fungua app", bullets: ["Windows: kitufe cha Start, andika jina", "Mac: kioo cha kukuza (Spotlight), andika jina"] },
            { title: "Vitufe vya dirisha kwenye Windows", bullets: ["Juu kulia", "Kistari = minimize, mraba = maximize, X = kufunga"] },
            { title: "Vitufe vya dirisha kwenye Mac", bullets: ["Juu kushoto", "Chekundu = kufunga, njano = kuficha, kijani = skrini nzima"] },
            { title: "Lirudishe", bullets: ["Bofya alama yake kwenye taskbar (Windows)", "Au kwenye Dock (Mac)"] }
          ],
          tryIt: "Fungua Notepad (Windows) au TextEdit (Mac) kwa kuandika jina lake kwenye Start au Spotlight. Ifiche (minimize), irudishe kutoka taskbar au Dock, kisha ifanye ijaze skrini.",
          youCanNow: "kufungua app yoyote kwa jina lake, kuhama kati ya madirisha na kuyafunga.",
          quickCheck: [
            { objective: "O4", q: "Kwenye Windows, kitufe cha mraba kilicho juu kulia mwa dirisha kinafanya nini?", options: ["Kinafunga dirisha", "Kinaficha dirisha", "Kinafungua Spotlight", "Kinafanya dirisha lijaze skrini"], answer: 3, why: "Mraba ni maximize; kistari kinaficha dirisha na X inalifunga." },
            { objective: "O4", q: "Uliificha (minimize) app yako ya kuandika na sasa unaitaka tena. Utafanya nini?", options: ["Kubofya alama yake kwenye taskbar (Windows) au Dock (Mac)", "Kuzima kompyuta", "Kufungua folda mpya", "Kubonyeza Backspace"], answer: 0, why: "Apps zilizofichwa zinasubiri kwenye taskbar au Dock hadi uzibofye." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuhifadhi na kutafuta faili katika folda",
          minutes: 5,
          goal: "Hifadhi ujumbe katika folda uliyotengeneza na uupate tena.",
          text: [
            "Faili ni kitu kimoja kilichohifadhiwa: barua, picha, orodha. Folda inabeba faili, kama droo katika kabati la nyaraka. Folda ya Documents ni mahali pazuri pa kuweka faili zako.",
            "Kutengeneza folda: kwenye Windows fungua File Explorer (alama ya folda ya njano), bofya Documents, kisha chagua New na Folder. Kwenye Mac fungua Finder (alama ya uso wa bluu), bofya Documents, kisha fungua menyu ya File na uchague New Folder. Andika jina na ubonyeze Enter au Return.",
            "Kuhifadhi: bonyeza Ctrl+S (Command+S kwenye Mac). Kisanduku kinafunguka; chagua folda, andika jina lililo wazi la faili kama \"Maswali kwa Dkt Lee\", na ubofye Save. Kutafuta faili baadaye, fungua File Explorer au Finder na uangalie ndani ya folda, au andika sehemu ya jina katika kisanduku cha kutafuta."
          ],
          steps: ["Fungua File Explorer (Windows) au Finder (Mac).", "Nenda Documents na utengeneze folda mpya.", "Katika app yako, bonyeza Ctrl+S (Command+S kwenye Mac).", "Chagua folda, andika jina lililo wazi, bofya Save.", "Kuipata: fungua folda, au tafuta sehemu ya jina."],
          words: [["Faili", "kitu kimoja kilichohifadhiwa, kama barua au picha."], ["Folda", "mahali panapobeba faili, kama droo."], ["File Explorer / Finder", "app ya kuangalia faili na folda (Windows / Mac)."]],
          slides: [
            { title: "Faili na folda", bullets: ["Faili = kitu kimoja kilichohifadhiwa", "Folda = droo inayobeba faili", "Documents ni mahali pazuri"] },
            { title: "Tengeneza folda", bullets: ["Windows: File Explorer, Documents, New, Folder", "Mac: Finder, Documents, File, New Folder"] },
            { title: "Hifadhi kwa jina lililo wazi", bullets: ["Ctrl+S (Command+S kwenye Mac)", "Chagua folda, andika jina, bofya Save"] },
            { title: "Ipate tena", bullets: ["Fungua folda", "Au tafuta sehemu ya jina"] }
          ],
          tryIt: "Tengeneza folda inayoitwa \"Practice\" ndani ya Documents. Andika orodha fupi katika Notepad au TextEdit, ihifadhi katika Practice kwa jina \"Ujumbe Wangu wa Kwanza\", funga app, kisha tafuta faili na uifungue tena.",
          youCanNow: "kutengeneza folda, kuhifadhi faili kwa majina yaliyo wazi na kuzipata tena.",
          quickCheck: [
            { objective: "O5", q: "Faili ni nini?", options: ["Kitu kimoja kilichohifadhiwa, kama barua, picha au orodha", "Droo inayobeba folda", "App inayofungua intaneti", "Kitufe cha kuwasha"], answer: 0, why: "Faili ni kitu kimoja kilichohifadhiwa; folda inabeba faili." },
            { objective: "O5", q: "Umemaliza ujumbe na unataka kuuweka. Utafanya nini?", options: ["Kufunga app bila kuhifadhi", "Kuzima kompyuta", "Kuchomoa kibodi", "Kubonyeza Ctrl+S (Command+S kwenye Mac), kuchagua folda, kuandika jina lililo wazi na kubofya Save"], answer: 3, why: "Kuhifadhi kunaweka ujumbe katika folda kwa jina ili uweze kuupata baadaye." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuitunza kompyuta yako iwe salama",
          minutes: 4,
          goal: "Sakinisha masasisho, iwashe upya na uizime kwa njia sahihi, na ujue mahali pa kupata msaada.",
          text: [
            "Masasisho (updates) yanarekebisha matatizo na kuziba mianya ya usalama. Kwenye Windows, fungua Settings na uchague Windows Update. Kwenye Mac, fungua System Settings na uchague General, kisha Software Update. Sakinisha masasisho unapoombwa na uiruhusu kompyuta ijiwashe upya.",
            "Kompyuta ikiwa nzito au kitu kikikwama, hifadhi kazi yako na uiwashe upya (restart). Hii inarekebisha matatizo mengi. Kuzima kwenye Windows: Start, kisha alama ya kuwasha, kisha Shut down. Kwenye Mac: menyu ya Apple juu kushoto, kisha Shut Down. Usichomoe waya tu wala usishikilie kitufe cha kuwasha isipokuwa imekwama kabisa.",
            "Pop-up ikisema kompyuta yako ina virusi na ikakupa namba ya simu, usipige; ifunge. Omba msaada kwa mtu unayemwamini, kipindi cha msaada wa teknolojia cha maktaba, au duka ulilonunulia kompyuta."
          ],
          steps: ["Angalia masasisho: Windows Update (Windows) au Software Update (Mac).", "Yasakinishe na uiruhusu kompyuta ijiwashe upya.", "Ni nzito au imekwama? Hifadhi na uiwashe upya.", "Kuzima: Start, alama ya kuwasha, Shut down (Windows) au menyu ya Apple, Shut Down (Mac).", "Unahitaji msaada? Mtu unayemwamini, msaada wa teknolojia wa maktaba au duka."],
          words: [["Sasisho (update)", "marekebisho ya bure kutoka kwa mtengenezaji yanayoboresha usalama na huduma."], ["Kuwasha upya (restart)", "kuzima kompyuta na kuiwasha tena kwa hatua moja."], ["Kuzima (shut down)", "kuizima kompyuta kabisa kwa njia sahihi."]],
          sources: [{ name: "FTC (tume ya biashara ya Marekani): Jinsi ya kutambua, kuepuka na kuripoti ulaghai wa msaada wa kiufundi", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" }],
          slides: [
            { title: "Sakinisha masasisho", bullets: ["Windows: Settings, Windows Update", "Mac: System Settings, General, Software Update"] },
            { title: "Kuwasha upya kunarekebisha mengi", bullets: ["Ni nzito au imekwama? Hifadhi, kisha iwashe upya"] },
            { title: "Zima kwa njia sahihi", bullets: ["Windows: Start, alama ya kuwasha, Shut down", "Mac: menyu ya Apple, Shut Down", "Usichomoe waya tu"] },
            { title: "Kupata msaada", bullets: ["Usipige kamwe namba zilizo kwenye pop-up za virusi", "Uliza mtu unayemwamini au msaada wa teknolojia wa maktaba"] }
          ],
          tryIt: "Kazi ya mwisho: washa na uingie, tengeneza folda ya Practice, andika na uhifadhi ujumbe mfupi wenye herufi kubwa katika Notepad au TextEdit, ufunge, uupate na uufungue tena, angalia masasisho, kisha zima kwa njia sahihi.",
          youCanNow: "kutumia kompyuta mwanzo hadi mwisho: kuingia, kufanya kazi, kuhifadhi, kupata faili zako na kuzima kwa usalama.",
          quickCheck: [
            { objective: "O6", q: "Unapata wapi masasisho kwenye kompyuta ya Windows?", options: ["Katika Recycle Bin", "Katika Settings, chini ya Windows Update", "Kwenye saa ya taskbar", "Katika Notepad"], answer: 1, why: "Masasisho ya Windows yako katika Settings, chini ya Windows Update." },
            { objective: "O6", q: "Umemaliza kazi ya leo kwenye kompyuta ya Windows. Utafanya nini?", options: ["Kuchomoa waya wa umeme", "Kushikilia kitufe cha kuwasha", "Kubofya Start, kisha alama ya kuwasha, kisha Shut down", "Kufunga mfuniko wakati app inahifadhi"], answer: 2, why: "Kuzima kupitia menyu ndiyo njia sahihi; kuchomoa waya kunaweza kuleta matatizo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Apps, faili na matunzo",
        questions: [
          { objective: "O4", q: "Kwenye Windows, unafunguaje app usiyoiona?", options: ["Kuzima skrini", "Kuchomoa kompyuta", "Kubonyeza Backspace", "Kubofya Start na kuandika jina lake"], answer: 3, why: "Kutafuta kwenye Start kunapata app yoyote kwa jina lake." },
          { objective: "O4", q: "Kwenye Mac, kitufe chekundu kilicho juu kushoto mwa dirisha:", options: ["Kinalifanya lijaze skrini", "Kinalificha", "Kinalifunga", "Kinalichapisha"], answer: 2, why: "Chekundu kinafunga, njano kinaficha, kijani kinajaza skrini." },
          { objective: "O5", q: "Folda ni nini?", options: ["Aina ya kibodi", "Mahali panapobeba faili, kama droo", "Sasisho", "Ukurasa wa wavuti"], answer: 1, why: "Folda zinapanga faili kwa mpangilio." },
          { objective: "O5", q: "Vitufe gani vinahifadhi kazi yako kwenye Windows?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S inahifadhi (Command+S kwenye Mac)." },
          { objective: "O6", q: "Kompyuta ni nzito na programu imekwama. Hatua nzuri ya kwanza ni:", options: ["Kupiga namba iliyo kwenye pop-up", "Kuhifadhi kazi yako na kuiwasha upya", "Kuimwagia maji", "Kununua kompyuta mpya"], answer: 1, why: "Kuwasha upya kunarekebisha matatizo mengi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujuzi wa Msingi wa Kompyuta",
    questions: [
      { objective: "O1", q: "Unaangalia sehemu gani kuona kazi yako?", options: ["Waya wa umeme", "Kipanya", "Skrini (monitor)", "Kibodi"], answer: 2, why: "Skrini inaonyesha kile kompyuta inachofanya." },
      { objective: "O1", q: "Laptop ni:", options: ["Chaja ya simu", "Aina ya kipanya", "Printa", "Kompyuta inayofunguka yenye skrini na kibodi pamoja"], answer: 3, why: "Laptop ni kitu kimoja kinachobebeka." },
      { objective: "O1", q: "Baada ya kompyuta kuwaka, kwa kawaida wewe:", options: ["Unachomoa waya", "Unaingia (sign in) kwa nywila au PIN", "Unabonyeza Caps Lock", "Unafunga mfuniko"], answer: 1, why: "Kuingia kunaiambia kompyuta kuwa ni wewe." },
      { objective: "O2", q: "Kielekezi (pointer) ni:", options: ["Folda", "Kitufe cha kuwasha", "Mshale mdogo unaosogea pamoja na kipanya", "Kitufe cha kibodi"], answer: 2, why: "Kielekezi kinafuata kipanya." },
      { objective: "O2", q: "Kipanya chako kimefika ukingoni mwa meza. Unafanya nini?", options: ["Kukigeuza juu chini", "Kukibonyeza kwa nguvu zaidi", "Kuwasha kompyuta upya", "Kukiinua na kukirudisha katikati"], answer: 3, why: "Kuinua kipanya hakusogezi kielekezi." },
      { objective: "O2", q: "Kubofya kulia kunaonyesha:", options: ["Machaguo ya kuwasha tu", "Menyu fupi ya machaguo", "Kompyuta mpya", "Hakuna kitu kamwe"], answer: 1, why: "Kubofya kulia kunafungua menyu." },
      { objective: "O2", q: "Kwenye trackpad, unasogezaje ukurasa?", options: ["Kubonyeza Shift", "Kugusa kitufe cha kuwasha", "Kuteleza vidole viwili juu au chini", "Kufunga mfuniko"], answer: 2, why: "Vidole viwili vinasogeza ukurasa kwenye trackpad." },
      { objective: "O3", q: "Mstari unaopepesa unapoenda maandishi yako unaitwa:", options: ["Monitor", "Folda", "Dock", "Kishale (cursor)"], answer: 3, why: "Kishale kinaonyesha herufi zitatokea wapi." },
      { objective: "O3", q: "Caps Lock:", options: ["Inafuta neno", "Inafanya kila herufi kuwa kubwa hadi uibonyeze tena", "Inahifadhi faili", "Inazima kompyuta"], answer: 1, why: "Inafunga herufi kubwa ziendelee." },
      { objective: "O3", q: "Njia gani ya mkato inafuta kosa (undo) kwenye Windows?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z ni undo (Command+Z kwenye Mac)." },
      { objective: "O3", q: "Enter (Return kwenye Mac) inatumika:", options: ["Kuzima skrini", "Kufuta herufi", "Kuandika herufi kubwa", "Kuanza mstari mpya"], answer: 3, why: "Enter inaanza mstari mpya au inasema endelea." },
      { objective: "O4", q: "Kwenye Mac, unawezaje kufungua app kwa jina lake?", options: ["Kubonyeza kitufe cha kuwasha", "Kubofya kioo cha kukuza (Spotlight) na kuandika jina", "Kubofya kulia kwenye skrini", "Kushikilia Shift"], answer: 1, why: "Spotlight inapata apps kwa jina." },
      { objective: "O4", q: "Kwenye Windows, X iliyo juu kulia mwa dirisha:", options: ["Inalifunga", "Inalifanya kubwa zaidi", "Inalihifadhi", "Inalificha"], answer: 0, why: "X inafunga dirisha." },
      { objective: "O4", q: "Dirisha lililofichwa (minimize) linaenda:", options: ["Kwenye taskbar (Windows) au Dock (Mac)", "Kwenye takataka milele", "Kwenye printa", "Kwenye intaneti"], answer: 0, why: "Bofya alama yake hapo ili kulirudisha." },
      { objective: "O5", q: "Jina gani la faili ni bora zaidi?", options: ["Maswali kwa Dkt Lee", "asdf", "Untitled", "1"], answer: 0, why: "Jina lililo wazi linakusaidia kuipata baadaye." },
      { objective: "O5", q: "App ya kuangalia faili kwenye Windows ni:", options: ["File Explorer", "Spotlight", "Dock", "Safari"], answer: 0, why: "File Explorer inaonyesha faili na folda." },
      { objective: "O5", q: "Hukumbuki ulihifadhi faili wapi. Unaweza:", options: ["Kutafuta sehemu ya jina lake", "Kuwasha upya hadi itokee", "Kununua kompyuta mpya", "Kuchomoa kipanya"], answer: 0, why: "Kutafuta kunapata faili kwa jina." },
      { objective: "O6", q: "Kwa nini usakinishe masasisho?", options: ["Yanarekebisha matatizo na kuziba mianya ya usalama", "Yanafuta faili zako", "Yanagharimu pesa kila mara", "Yanafanya kompyuta iwe nzito milele"], answer: 0, why: "Masasisho yanaboresha usalama na kurekebisha matatizo." },
      { objective: "O6", q: "Unazimaje Mac kwa njia sahihi?", options: ["Menyu ya Apple, kisha Shut Down", "Kuchomoa waya", "Kufunga dirisha", "Kubonyeza Caps Lock"], answer: 0, why: "Tumia menyu ya Apple kuzima kwa usalama." },
      { objective: "O6", q: "Pop-up inasema una virusi na upige namba fulani. Unapaswa:", options: ["Kutopiga; kuifunga na kumuuliza mtu unayemwamini", "Kupiga mara moja", "Kuwapa nywila yako", "Kulipa kwa kadi ya zawadi (gift card)"], answer: 0, why: "Maonyo halisi hayakuombi kamwe upige namba." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 5, 8, 9, 12, 13, 15, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kuwasha na kuingia", objective: "O1", notYet: "Anahitaji msaada kuwasha kompyuta au kuingia.", meets: "Anawasha kompyuta na kuingia bila msaada.", exceeds: "Pia anataja sehemu kuu za kompyuta." },
      { name: "Folda na ujumbe uliohifadhiwa", objective: "O5", notYet: "Folda ya Practice au ujumbe uliohifadhiwa haupo, au ujumbe una jina kama Untitled.", meets: "Folda ya Practice ndani ya Documents ina ujumbe, uliohifadhiwa kwa jina lililo wazi.", exceeds: "Anapata faili tena kwa kutumia kisanduku cha kutafuta pamoja na folda." },
      { name: "Kuandika ujumbe", objective: "O3", notYet: "Ujumbe haupo, au sentensi hazina herufi kubwa.", meets: "Ujumbe mfupi wenye herufi kubwa mwanzoni mwa kila sentensi na makosa yamerekebishwa.", exceeds: "Pia anatumia alama za uandishi kama ? au ! kwa usahihi na anatumia Ctrl+Z (Command+Z) kufuta kosa." },
      { name: "Kufungua na kufunga app", objective: "O4", notYet: "Hawezi kufungua Notepad au TextEdit, au hawezi kuifunga.", meets: "Anafungua app kwa jina lake, anaifunga, kisha anapata na kufungua faili iliyohifadhiwa.", exceeds: "Pia anaficha dirisha (minimize) na kulirudisha kutoka taskbar au Dock." },
      { name: "Kuzima", objective: "O6", notYet: "Kompyuta inachomolewa waya au kitufe cha kuwasha kinashikiliwa.", meets: "Anazima kwa njia sahihi kupitia menyu ya Start au menyu ya Apple.", exceeds: "Pia anaangalia masasisho kabla ya kuzima." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya kazi ya mwisho",
      "Wanafunzi wanaoripoti kutumia kompyuta wao wenyewe, kama maktaba au kituo cha ajira, ndani ya siku 30 baada ya kozi (utafiti wa kufuatilia)",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama Misingi ya Intaneti au Microsoft 365 na Google Docs",
      "Wanafunzi wanaoripoti kumaliza kazi halisi kwenye kompyuta, kama barua au ombi la kazi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta ya mezani au laptop ya Windows au Mac yenye kipanya au trackpad",
      "Akaunti ya kuingia kwenye kompyuta (ya nyumbani, au kutoka kwa wafanyakazi wa maktaba au maabara)",
      "Notepad (Windows) au TextEdit (Mac), ambazo tayari ziko kwenye kompyuta",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa ziada wa mazoezi ya kipanya"
    ],
    facilitatorNotes: [
      "Andaa akaunti za kuingia kabla ya darasa ili somo la kwanza lisitumike kwa akaunti.",
      "Wape wanafunzi wapya muda wa ziada na kipanya; waache wafanye mazoezi ya kubofya na kubofya mara mbili kwenye alama za skrini kabla ya kuendelea.",
      "Watenge watumiaji wa Windows na wa Mac katika vikundi tofauti, au onyesha hatua za aina zote mbili kwenye skrini.",
      "Kwenye kompyuta za pamoja, waambie wanafunzi wafute faili zao za mazoezi na watoke (sign out) mwishoni, na uwakumbushe wasihifadhi taarifa za binafsi hapo.",
      "Waache wanafunzi wabonyeze kila kitufe na kubofya kila kitufe wenyewe; epuka kuwanyang'anya kipanya."
    ]
  }
};
