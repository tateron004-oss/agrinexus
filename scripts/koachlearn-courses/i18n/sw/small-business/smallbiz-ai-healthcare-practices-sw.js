"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-healthcare-practices.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// This course is about US HIPAA rules; US names (HIPAA, HHS, BAA, 911) are kept. Not legal or compliance advice.

const HHS_CLOUD = { name: "HHS: Mwongozo kuhusu HIPAA na huduma za wingu (Cloud Computing)", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS: Washirika wa kibiashara (Business Associates, mwongozo wa HIPAA)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS: HIPAA kwa wataalamu (HIPAA for Professionals)", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "AI kwa Vituo Vidogo vya Huduma za Afya",
  skills: "Kujua lini taarifa za wagonjwa zinaweza na haziwezi kuingia katika AI, Kuandika maelekezo ya mapokezi, Kuandaa vijitabu vya elimu kwa wagonjwa kwa ukaguzi wa daktari, Kutengeneza violezo vya miadi na vikumbusho, Kuandika sera za ofisi, Kuweka kanuni za AI kwa wafanyakazi",
  outcome: "kutumia AI kwa usalama katika kazi za ofisi za kituo kidogo cha afya: kuamua kazi zipi zinaweza kutumia zana ya AI ya kawaida na zipi zinahitaji zana iliyoidhinishwa yenye mkataba wa mshirika wa kibiashara (BAA), na kutengeneza maelekezo ya mapokezi, violezo vya vikumbusho, kijitabu cha lugha rahisi kwa ukaguzi wa daktari, na sera ya AI kwa wafanyakazi, bila taarifa yoyote ya mgonjwa katika zana ya AI ya kawaida.",
  about: [
    "Kozi hii ni kwa wamiliki, wasimamizi wa ofisi na wafanyakazi wa mapokezi wa vituo vidogo vya afya: kliniki za familia, kliniki za meno, huduma za tiba ya akili na ushauri nasaha, tabibu wa uti wa mgongo (chiropractor), tiba ya viungo, huduma za macho na mashirika ya huduma za afya nyumbani, pamoja na vituo vingi vya jamii za wachache vinavyohudumia jamii zao.",
    "Utajifunza kanuni moja muhimu kuliko zote: taarifa za afya zinazolindwa (PHI) haziingii katika zana ya AI isipokuwa kituo chako kimeiidhinisha na kina mkataba wa mshirika wa kibiashara wa HIPAA (BAA) na kampuni hiyo. Kisha utatumia AI kwa kazi nyingi za ofisi ambazo hazihitaji taarifa yoyote ya mgonjwa.",
    "Katika kozi hii AI haitambui ugonjwa, haitibu wala haitoi ushauri wa kitabibu. Kila maandishi ya afya kwa wagonjwa yanakaguliwa na mtaalamu wa afya mwenye leseni. Kozi hii si ushauri wa kisheria wala wa kufuata kanuni; angalia mwongozo wa HHS na mshauri wako wa kanuni. Kila somo linachukua kama dakika tano, na kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza kifurushi cha AI cha kituo chako: orodha ya kazi iliyopangwa katika \"hakuna PHI, AI ya kawaida inafaa\" na \"PHI, zana iliyoidhinishwa yenye BAA tu au bila AI\"; maelekezo matatu ya simu ya mapokezi; violezo vya kuthibitisha miadi na vikumbusho vyenye vishika-nafasi; kijitabu kimoja cha lugha rahisi kwa wagonjwa kuhusu mada ya jumla chenye alama \"kwa ukaguzi wa daktari\"; na sera ya ukurasa mmoja ya AI kwa wafanyakazi. Hakuna kati ya hivi chenye taarifa halisi ya mgonjwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki, wasimamizi wa ofisi na wafanyakazi wa mapokezi wa vituo vidogo vya afya: kliniki za familia, kliniki za meno, huduma za tiba ya akili na ushauri nasaha, tabibu wa uti wa mgongo, tiba ya viungo, huduma za macho na mashirika ya huduma za afya nyumbani, pamoja na vituo vingi vya jamii za wachache vinavyohudumia jamii zao.",
    startingPoint: "Wanaendesha mapokezi, ratiba ya miadi na makaratasi ya ofisi kila siku na wanajua misingi ya faragha ya wagonjwa. Wengi wamesikia kuhusu zana za AI au wamejaribu moja, lakini hawana uhakika ni nini kinaruhusiwa chini ya HIPAA.",
    gap: "Kazi za kuandika za ofisi zinachukua muda ambao vituo vidogo havina, lakini kuweka taarifa za wagonjwa katika zana ya AI isiyofaa kunaweza kuvunja kanuni za HIPAA na kuwadhuru wagonjwa. Wanafunzi wanahitaji kanuni iliyo wazi ya kazi zipi zinaweza kutumia AI, pamoja na maelekezo, violezo, vijitabu na sera ya wafanyakazi tayari kutumika ambazo hazina taarifa za wagonjwa.",
    constraints: [
      "Hakuna PHI katika zana yoyote ya AI ya kawaida; zana zilizoidhinishwa na kituo zenye mkataba wa mshirika wa kibiashara tu",
      "AI kamwe haitambui ugonjwa, haitibu wala haitoi ushauri wa kitabibu; mtaalamu wa afya mwenye leseni anakagua maandishi yote ya afya kwa wagonjwa",
      "Si ushauri wa kisheria wala wa kufuata kanuni: angalia mwongozo wa HHS na mshauri wa kanuni wa kituo",
      "Muda: mapokezi yana shughuli nyingi, kwa hiyo kila somo ni kama dakika 5",
      "Maneno rahisi kwa wafanyakazi na kwa nyaraka za wagonjwa (kama kiwango cha darasa la 6)"
    ],
    prerequisites: "Hakuna. Wanaoanza kutumia wasaidizi wa AI wanaweza kwanza kusoma kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za ofisi", action: "kupanga kila kazi katika \"hakuna PHI, AI ya kawaida inafaa\" au \"PHI, zana iliyoidhinishwa yenye BAA tu au bila AI\"", standard: "huku kila kazi yenye PHI ikiwa katika safu ya pili" },
    { id: "O2", condition: "Ukipewa simu za kawaida za mapokezi", action: "kuandika maelekezo ya simu yanayopeleka simu za dawa za kuendelea, dalili na dharura mahali sahihi", standard: "huku kila maelekezo ya dharura yakimwambia mpigaji apige 911, na yakiwa yameidhinishwa na kiongozi wa huduma za kitabibu" },
    { id: "O3", condition: "Ukitumia vishika-nafasi badala ya taarifa za mgonjwa", action: "kutengeneza violezo vya kuthibitisha miadi na vikumbusho visivyotaja sababu ya ziara", standard: "bila taarifa halisi ya mgonjwa katika zana ya AI" },
    { id: "O4", condition: "Ukipewa mada ya jumla kwa wagonjwa", action: "kuandaa kijitabu cha lugha rahisi na kukiwekea alama ya ukaguzi wa daktari", standard: "kwa kiwango cha kama darasa la 6, chenye namba yako ya mawasiliano na ujumbe wa 911" },
    { id: "O5", condition: "Ukipewa kazi ya kuandika ya ofisi kama sera, barua pepe au tangazo la kazi", action: "kuiandaa kwa zana ya AI ya kawaida na kuorodhesha sehemu yoyote inayohitaji ukaguzi wa kanuni au wa rasilimali watu", standard: "bila kutumia taarifa yoyote ya mgonjwa" },
    { id: "O6", condition: "Kwa ajili ya kituo chako", action: "kuandika sera ya ukurasa mmoja ya AI kwa wafanyakazi yenye kanuni tano hadi saba", standard: "ikiwa na hakuna PHI bila BAA, majina ya zana zilizoidhinishwa, kuripoti makosa na ukaguzi wa kila mwaka" }
  ],
  chapters: [
    {
      name: "Sura 1: HIPAA kwanza, kisha mapokezi",
      lessons: [
        {
          objectives: ["O1"],
          title: "PHI, HIPAA na AI: kanuni inayokuja kwanza",
          minutes: 6,
          goal: "Amua kama kazi inaweza kutumia zana ya AI ya kawaida au inahitaji zana iliyoidhinishwa yenye BAA.",
          text: [
            "Taarifa za afya zinazolindwa (PHI) ni taarifa za afya zinazoweza kumtambulisha mgonjwa: majina pamoja na hali zao za afya, tarehe za kuzaliwa, maandishi ya faili la mgonjwa, namba za bima, taarifa za miadi, picha na mengine. HIPAA inaweka kanuni za jinsi vituo vinavyozilinda.",
            "Mwongozo wa HHS unasema kwamba taasisi inayohusika (covered entity) inapotumia huduma ya nje, kama huduma ya wingu, kutengeneza, kupokea, kuhifadhi au kutuma PHI, huduma hiyo ni mshirika wa kibiashara, na kituo kinahitaji mkataba wa mshirika wa kibiashara (BAA) nayo. Kutumia huduma kama hiyo kwa PHI bila BAA kunavunja kanuni za HIPAA. Zana nyingi za bure za AI za mazungumzo hazisaini BAA na watumiaji binafsi.",
            "Kwa hiyo panga kila kazi: kama inahitaji PHI, tumia tu zana ambayo kituo chako kimeidhinisha na kina BAA nayo, au usitumie AI. Kama haihitaji PHI, kama kijitabu cha jumla, maelekezo ya simu au sera ya ofisi, zana ya AI ya kawaida inaweza kusaidia. Ukiwa na shaka, muulize afisa wako wa kanuni au wa faragha."
          ],
          steps: ["Orodhesha kazi za ofisi unazotaka msaada nazo.", "Uliza: je, kazi hii inahitaji taarifa yoyote ya mgonjwa?", "Hakuna PHI: zana ya AI ya kawaida inaweza kusaidia.", "PHI: zana iliyoidhinishwa yenye BAA tu, au bila AI.", "Huna uhakika: muulize afisa wako wa faragha au wa kanuni."],
          words: [["PHI", "protected health information (taarifa za afya zinazolindwa): taarifa za afya zinazoweza kumtambulisha mgonjwa."], ["HIPAA", "sheria ya serikali kuu ya Marekani yenye kanuni za kulinda taarifa za afya."], ["Mkataba wa mshirika wa kibiashara (BAA)", "business associate agreement: mkataba ambao muuzaji wa huduma anakubali kulinda PHI chini ya HIPAA."], ["Taasisi inayohusika (covered entity)", "mpango wa bima ya afya, kituo cha kuchakata madai au mtoa huduma za afya anayepaswa kufuata HIPAA."]],
          slides: [
            { title: "Nini kinahesabiwa kuwa PHI", bullets: ["Majina pamoja na hali za afya, tarehe za kuzaliwa", "Maandishi ya faili, namba za bima, miadi", "Picha na taarifa nyingine zinazomtambulisha mtu"] },
            { title: "HHS kuhusu huduma za nje", bullets: ["Huduma inayoshughulikia PHI ni mshirika wa kibiashara", "Kituo kinahitaji BAA nayo", "PHI bila BAA inavunja kanuni za HIPAA"] },
            { title: "Panga kila kazi", bullets: ["Hakuna PHI: AI ya kawaida inaweza kusaidia", "PHI: zana iliyoidhinishwa yenye BAA tu, au bila AI", "Huna uhakika: muulize afisa wa kanuni"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "Orodhesha kazi kumi katika ofisi yako. Zipange katika safu mbili: \"Hakuna PHI: AI ya kawaida inafaa\" na \"PHI: zana iliyoidhinishwa yenye BAA tu au bila AI\".",
          youCanNow: "kuamua kama kazi ya ofisi inaweza kutumia zana ya AI ya kawaida au inahitaji zana iliyoidhinishwa yenye BAA.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni PHI?", options: ["Namba ya bima ya mgonjwa", "Saa za kufungua ofisi yako", "Tangazo la kazi ya mpokezi", "Kijitabu cha jumla kuhusu kunawa mikono"], answer: 0, why: "Namba za bima ni taarifa za afya zinazoweza kumtambulisha mgonjwa." },
            { objective: "O1", q: "Unataka AI ikusaidie kuandika maelekezo ya simu kuhusu maegesho ya magari. Unaweza kutumia zana gani?", options: ["Zana yenye BAA tu", "Zana ya AI ya kawaida, kwa sababu haihitaji PHI", "Hakuna zana ya AI kabisa", "Simu ya mgonjwa tu"], answer: 1, why: "Kazi zisizohitaji taarifa za mgonjwa zinaweza kutumia zana ya AI ya kawaida." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Maelekezo ya simu na ujumbe kwa mapokezi",
          minutes: 5,
          goal: "Andika maelekezo yaliyo wazi na ya upole kwa simu za kawaida za mapokezi.",
          text: [
            "Wafanyakazi wa mapokezi hupokea simu zile zile kila siku: maswali ya wagonjwa wapya, bima zinazokubaliwa, maelekezo ya njia na maegesho, kubadilisha miadi, maombi ya kuendelea na dawa, maombi ya kumbukumbu za matibabu, na mtu anayesikika kama yuko katika dharura.",
            "Maelekezo haya hayahitaji taarifa za mgonjwa, kwa hiyo zana ya AI ya kawaida inaweza kusaidia: \"Andika maelekezo mafupi na ya ukarimu ya simu kwa kliniki ya meno ya familia, kwa mgonjwa mpya anayeuliza kama tunakubali bima yake. Sera yetu: [sera yako]. Yasizidi maneno 80.\"",
            "Kila maelekezo yanayogusa matibabu lazima yampeleke mpigaji kwa mtu sahihi: maswali ya kuendelea na dawa na ya dalili yanaenda kwa wafanyakazi wa kitabibu, na maelekezo yoyote ya dharura yanamwambia mpigaji akate simu na apige 911 au aende chumba cha dharura kilicho karibu. Kiongozi wako wa huduma za kitabibu aidhinishe maelekezo haya."
          ],
          steps: ["Orodhesha simu zako kumi za kawaida zaidi.", "Iombe AI maelekezo mafupi kwa kila moja, ukitumia sera zako halisi.", "Hakikisha maswali ya kitabibu yanaenda kwa wafanyakazi wa kitabibu.", "Ongeza mstari wa dharura: piga 911.", "Kiongozi wako wa huduma za kitabibu ayaidhinishe."],
          words: [["Maelekezo ya simu (script)", "mwongozo mfupi wa nini cha kusema katika simu ya kawaida."], ["Kupanga kwa uharaka (triage)", "kuamua tatizo la afya lina uharaka kiasi gani; hufanywa na wafanyakazi wa kitabibu, si mapokezi wala AI."]],
          slides: [
            { title: "Simu za kawaida", bullets: ["Wagonjwa wapya na bima", "Njia, kubadilisha miadi, kumbukumbu", "Dawa za kuendelea na dharura zinazowezekana"] },
            { title: "Hakuna PHI inayohitajika", bullets: ["AI ya kawaida inaweza kuandaa haya", "Ipe sera zako halisi", "Kila moja lisizidi kama maneno 80"] },
            { title: "Peleka maswali ya matibabu mahali sahihi", bullets: ["Dawa za kuendelea na dalili -> wafanyakazi wa kitabibu", "Dharura -> piga 911 au nenda chumba cha dharura", "Kiongozi wa kitabibu anaidhinisha maelekezo"] }
          ],
          tryIt: "Iombe AI maelekezo matatu ya mapokezi: swali la bima, kubadilisha miadi, na mpigaji anayeeleza maumivu ya kifua (ambayo lazima yamwambie apige 911). Yawekee alama ili kiongozi wako wa kitabibu ayaidhinishe.",
          youCanNow: "kuandika maelekezo ya mapokezi yaliyo ya upole, wazi, na yanayopeleka maswali ya matibabu mahali salama.",
          quickCheck: [
            { objective: "O2", q: "Maelekezo ya mapokezi yapeleke wapi ombi la kuendelea na dawa?", options: ["Kwa zana ya AI", "Kwa ofisi ya malipo", "Kwa wafanyakazi wa kitabibu", "Kwa duka la dawa la mpigaji tu"], answer: 2, why: "Maswali ya kuendelea na dawa na ya dalili yanaenda kwa wafanyakazi wa kitabibu." },
            { objective: "O2", q: "AI imeandika maelekezo kwa mpigaji anayepata shida kupumua yanayosema \"Tutakupigia kesho.\" Unafanya nini?", options: ["Uyatumie; ni ya adabu", "Uyafupishe", "Uyatafsiri", "Uyabadilishe yamwambie mpigaji akate simu na apige 911 au aende chumba cha dharura kilicho karibu"], answer: 3, why: "Kila maelekezo ya dharura yanamwambia mpigaji apige 911 au aende chumba cha dharura kilicho karibu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Violezo vya miadi na vikumbusho",
          minutes: 5,
          goal: "Tengeneza violezo vya kuthibitisha miadi na vikumbusho vinavyolinda faragha.",
          text: [
            "Violezo vinaokoa muda na vinapunguza wagonjwa wasiofika. Viandike kwa vishika-nafasi: \"Habari [jina la kwanza], hapa ni [jina la kituo] tukithibitisha miadi yako tarehe [tarehe] saa [saa]. Jibu C kuthibitisha au piga [simu] kubadilisha.\"",
            "Vikumbusho viwe vifupi. Usitaje sababu ya ziara wala aina ya mtoa huduma pale ambapo hilo lingefichua taarifa nyeti, kama ziara ya tiba ya akili au ya mtaalamu maalum. Mfumo wako wa usimamizi wa kituo au wa ujumbe kwa wagonjwa ndio unaojaza taarifa halisi, si zana ya AI.",
            "Iombe AI matoleo katika lugha nyingine wanazozungumza wagonjwa wako, kisha mfanyakazi anayezijua vizuri au mtafsiri mwenye sifa ayakague."
          ],
          steps: ["Iombe AI violezo vya kuthibitisha, kukumbusha na kubadilisha miadi vyenye vishika-nafasi.", "Ondoa chochote kinachofichua sababu ya ziara.", "Viweke katika mfumo wako wa ratiba, ambao unajaza taarifa halisi.", "Tafsiri zikaguliwe na mtu anayeijua lugha vizuri au mwenye sifa."],
          words: [["Mfumo wa usimamizi wa kituo", "programu ambayo kituo kinatumia kwa ratiba ya miadi na malipo."], ["Kiwango cha chini kinachohitajika (minimum necessary)", "wazo la HIPAA la kutumia au kushiriki taarifa zinazohitajika kwa kusudi hilo tu."]],
          slides: [
            { title: "Violezo vyenye vishika-nafasi", bullets: ["[jina la kwanza], [tarehe], [saa], [simu]", "Zana ya AI haioni kamwe taarifa halisi"] },
            { title: "Vikumbusho viwe vifupi", bullets: ["Usitaje sababu ya ziara", "Kuwa makini na huduma maalum nyeti", "Mfumo wako wa ratiba unajaza taarifa"] },
            { title: "Lugha nyingine", bullets: ["AI inaandaa tafsiri", "Mtu anayeijua lugha vizuri au mwenye sifa anazikagua"] }
          ],
          tryIt: "Iombe AI kiolezo cha kuthibitisha miadi, kikumbusho cha siku moja kabla, na kiolezo cha kubadilisha miadi, vyote vyenye vishika-nafasi. Ondoa chochote kinachofichua kwa nini mgonjwa anakuja.",
          youCanNow: "kutengeneza kwa msaada wa AI violezo vya miadi vinavyojali faragha.",
          quickCheck: [
            { objective: "O3", q: "Nini kinajaza taarifa halisi za mgonjwa katika kikumbusho?", options: ["Mfumo wako wa usimamizi wa kituo au wa ujumbe", "Zana ya AI ya kawaida", "Kampuni ya bima ya mgonjwa", "Kalenda iliyochapishwa"], answer: 0, why: "Mfumo wako wa ratiba au wa ujumbe unajaza taarifa halisi, si zana ya AI." },
            { objective: "O3", q: "Kiolezo cha kikumbusho kinasema \"miadi yako ya tiba ya akili.\" Unabadilisha nini?", options: ["Hakuna kitu", "Ondoa maneno \"tiba ya akili\" ili kisifichue taarifa nyeti", "Ongeza utambuzi wa ugonjwa", "Ongeza namba ya simu ya nyumbani ya mtaalamu"], answer: 1, why: "Usitaje sababu ya ziara wala aina ya mtoa huduma pale ambapo hilo lingefichua taarifa nyeti." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: HIPAA kwanza, kisha mapokezi",
        questions: [
          { objective: "O1", q: "Kipi ni taarifa za afya zinazolindwa (PHI)?", options: ["Maelekezo ya maegesho ya ofisi yako", "Jina la mgonjwa pamoja na utambuzi wa ugonjwa wake", "Kijitabu cha jumla kuhusu kunawa mikono", "Saa za kazi za ofisi yako"], answer: 1, why: "Taarifa za afya zinazomtambulisha mgonjwa ni PHI." },
          { objective: "O1", q: "Kwa mujibu wa HHS, huduma inayohifadhi PHI kwa ajili ya kituo chako inahitaji:", options: ["Nenosiri la mgonjwa", "Hakuna kitu", "Akaunti ya mitandao ya kijamii", "Mkataba wa mshirika wa kibiashara"], answer: 3, why: "Huduma zinazoshughulikia PHI ni washirika wa kibiashara na zinahitaji BAA." },
          { objective: "O1", q: "Unataka AI ifupishe maandishi ya faili la mgonjwa. Kituo chako hakina BAA na zana hiyo. Unafanya nini?", options: ["Usitumie zana hiyo kwa kazi hiyo", "Bandika maandishi hayo ndani yake", "Ondoa jina la mwisho tu kisha ubandike", "Muulize rafiki"], answer: 0, why: "PHI inaingia tu katika zana zilizoidhinishwa zenye BAA." },
          { objective: "O2", q: "Mpigaji anaeleza maumivu ya kifua. Maelekezo yanapaswa:", options: ["Kuiomba AI utambuzi wa ugonjwa", "Kumpa miadi wiki ijayo", "Kumwambia apige 911 au aende chumba cha dharura kilicho karibu", "Kumweka asubiri kwenye simu"], answer: 2, why: "Dharura zinaenda kwa 911." },
          { objective: "O3", q: "Kikumbusho cha ujumbe mfupi kinapaswa kuacha nini?", options: ["Saa", "Tarehe", "Sababu ya ziara", "Namba ya simu ya kituo"], answer: 2, why: "Vikumbusho vifupi vinalinda faragha." }
        ]
      }
    },
    {
      name: "Sura 2: Nyaraka za wagonjwa, kazi za ofisi na kanuni za wafanyakazi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Vijitabu vya lugha rahisi kwa wagonjwa, vilivyokaguliwa na daktari",
          minutes: 5,
          goal: "Andaa kijitabu cha jumla kwa wagonjwa kwa maneno rahisi na ukipeleke kwa ukaguzi wa daktari.",
          text: [
            "Wagonjwa wengi wanapata shida na lugha ya kitabibu. AI ni nzuri katika kuandika upya taarifa za jumla kwa maneno rahisi: jinsi ya kujiandaa kwa usafishaji wa meno, nini cha kuleta katika ziara ya kwanza, vidokezo vya jumla vya kuendelea kufanya mazoezi.",
            "Tumia mada za jumla tu, kamwe si taarifa za mgonjwa fulani. Uliza: \"Andika kijitabu cha ukurasa mmoja kwa kiwango cha kama darasa la 6 kuhusu jinsi ya kujiandaa kwa ziara ya kwanza ya tiba ya viungo. Sentensi fupi, vichwa vya habari, bila ushauri wa kitabibu zaidi ya maandalizi ya jumla.\"",
            "AI inaweza kukosea kuhusu ukweli wa afya. Weka alama \"Kwa ukaguzi wa daktari\" kwenye kila rasimu, na mtaalamu wa afya mwenye leseni aikague na kuiidhinisha kabla mgonjwa yeyote hajaiona. Ongeza namba ya mawasiliano ya kituo chako na ujumbe wa kupiga 911 wakati wa dharura."
          ],
          steps: ["Chagua mada ya jumla ambayo wagonjwa huuliza.", "Iombe AI rasimu ya lugha rahisi yenye vichwa vya habari.", "Iwekee alama \"Kwa ukaguzi wa daktari\".", "Mtaalamu wa afya mwenye leseni anairekebisha na kuiidhinisha.", "Ongeza namba yako ya mawasiliano na ujumbe wa 911."],
          words: [["Lugha rahisi", "maandishi ambayo watu wengi wanayaelewa mara ya kwanza wanapoyasoma."], ["Kiwango cha kusoma", "jinsi maandishi yalivyo magumu kusoma, mara nyingi hutajwa kama darasa la shule."]],
          slides: [
            { title: "Maneno rahisi yanawasaidia wagonjwa", bullets: ["Kujiandaa kwa ziara", "Nini cha kuleta", "Tabia za jumla za afya njema"] },
            { title: "Mada za jumla tu", bullets: ["Kamwe si taarifa za mgonjwa fulani", "Omba kiwango cha kama darasa la 6"] },
            { title: "Ukaguzi wa daktari", bullets: ["Weka alama \"Kwa ukaguzi wa daktari\" kwenye rasimu", "Mtaalamu wa afya mwenye leseni anaidhinisha", "Ongeza namba ya mawasiliano na ujumbe wa 911"] }
          ],
          tryIt: "Iombe AI kijitabu cha ukurasa mmoja kuhusu mada ya jumla kwa kituo chako. Kiwekee alama \"Kwa ukaguzi wa daktari\" na uorodheshe mambo mawili ya kweli ambayo daktari anapaswa kukagua.",
          youCanNow: "kuandaa kwa AI vijitabu vya lugha rahisi kwa wagonjwa na kuvipeleka kwa daktari kuidhinishwa.",
          quickCheck: [
            { objective: "O4", q: "Mada gani inafaa kwa rasimu ya kijitabu cha jumla cha AI?", options: ["Majibu ya vipimo vya Bw. Lee", "Mabadiliko ya dawa za mgonjwa", "Nini cha kuleta katika ziara ya kwanza", "Utambuzi wa ugonjwa kwa mpigaji simu"], answer: 2, why: "Tumia mada za jumla tu, kamwe si taarifa za mgonjwa fulani." },
            { objective: "O4", q: "Rasimu ya kijitabu ya AI inaonekana nzuri. Unafanya nini kabla mgonjwa hajaiona?", options: ["Uichapishe mara moja", "Uiweke kwenye tovuti", "Uiulize AI kama ni sahihi", "Uiwekee alama \"Kwa ukaguzi wa daktari\" na mtaalamu wa afya mwenye leseni aiidhinishe"], answer: 3, why: "AI inaweza kukosea kuhusu ukweli wa afya, kwa hiyo mtaalamu mwenye leseni anakagua kila rasimu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sera za ofisi, barua pepe na matangazo ya kazi",
          minutes: 4,
          goal: "Tumia AI kwa nyaraka za ofisi zisizohitaji taarifa za mgonjwa.",
          text: [
            "Sehemu kubwa ya kuendesha kituo ni maandishi ya kawaida ya biashara: sera ya kughairi na ya kutofika kwa miadi, barua pepe kwa wafanyakazi kuhusu mfumo mpya wa simu, tangazo la kazi ya msaidizi wa kitabibu, barua ya malalamiko kwa muuzaji, orodha ya kukagua kwa mfanyakazi mpya.",
            "Haya hayahitaji PHI, kwa hiyo zana za AI za kawaida zinaweza kuyaandaa. Toa sera na taarifa zako halisi: \"Andaa sera ya kirafiki ya kutofika kwa miadi kwa kituo cha ushauri nasaha: taarifa ya saa 24 kabla, ada ya $50 baada ya kutofika mara ya pili. Maneno rahisi.\"",
            "Kagua kanuni yoyote inayogusa sheria: ada, ajira, malipo na haki za wagonjwa zinaweza kudhibitiwa na sheria. Mshauri wako wa kanuni, mshauri wa rasilimali watu au wakili akague kabla hujachapisha."
          ],
          steps: ["Chagua hati ya ofisi isiyo na taarifa za mgonjwa.", "Ipe AI taarifa halisi za sera yako.", "Hariri iwe kwa sauti yako.", "Mshauri wa kanuni, wa rasilimali watu au wa sheria akague chochote kinachodhibitiwa na sheria."],
          words: [["Sera ya kutofika kwa miadi (no-show)", "kanuni za kituo kuhusu miadi ambayo mgonjwa hakufika."], ["Mshauri wa kanuni", "mtu anayesaidia kituo kufuata sheria na kanuni za huduma za afya."]],
          slides: [
            { title: "Maandishi ya kawaida ya biashara", bullets: ["Sera ya kughairi na ya kutofika kwa miadi", "Barua pepe kwa wafanyakazi na matangazo ya kazi", "Barua kwa wauzaji na orodha za kukagua"] },
            { title: "Hakuna PHI: AI ya kawaida inaweza kusaidia", bullets: ["Toa taarifa zako halisi", "Hariri iwe kwa sauti yako"] },
            { title: "Kagua mada zinazodhibitiwa na sheria", bullets: ["Ada, ajira, malipo, haki za wagonjwa", "Ukaguzi wa kanuni, rasilimali watu au sheria"] }
          ],
          tryIt: "Iombe AI iandae sera ya kituo chako ya kutofika kwa miadi au tangazo la kazi ya mapokezi. Andika chochote kinachohitaji ukaguzi wa kanuni au wa rasilimali watu.",
          youCanNow: "kutumia AI kwa nyaraka za ofisi zisizo na taarifa za mgonjwa, pamoja na ukaguzi unaofaa.",
          quickCheck: [
            { objective: "O5", q: "Kipi ni maandishi ya kawaida ya biashara yasiyohitaji PHI?", options: ["Orodha ya kukagua kwa mfanyakazi mpya", "Maandishi ya faili la mgonjwa", "Barua ya majibu ya vipimo kwa mgonjwa mmoja", "Rufaa yenye utambuzi wa ugonjwa"], answer: 0, why: "Sera, barua pepe, matangazo ya kazi na orodha za kukagua hazihitaji taarifa za mgonjwa." },
            { objective: "O5", q: "AI imeandaa sera ya kutofika kwa miadi yenye ada. Unafanya nini kabla ya kuichapisha?", options: ["Uichapishe mara moja", "Mshauri wa kanuni, mshauri wa rasilimali watu au wakili aikague", "Uongeze ada mara mbili", "Uondoe tarehe"], answer: 1, why: "Ada na haki za wagonjwa zinaweza kudhibitiwa na sheria, kwa hiyo mshauri anazikagua kwanza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika sera ya AI ya kituo chako",
          minutes: 5,
          goal: "Andika sera ya ukurasa mmoja ya AI kwa wafanyakazi na umalize kifurushi cha AI cha kituo chako.",
          text: [
            "Huenda wafanyakazi tayari wanatumia AI kwenye simu zao. Sera fupi iliyoandikwa inawalinda wagonjwa na kituo. Kanuni tano hadi saba zinatosha kuanzia.",
            "Mifano ya kanuni: (1) Hakuna PHI katika zana yoyote ya AI isipokuwa kituo kimeiidhinisha na kina BAA. (2) Zana zilizoidhinishwa zinaorodheshwa kwa majina. (3) AI kamwe haiwapi wagonjwa utambuzi wa ugonjwa wala ushauri wa matibabu. (4) Mtaalamu wa afya mwenye leseni anaidhinisha maudhui yoyote ya afya kwa wagonjwa. (5) Wafanyakazi wanakagua ukweli katika rasimu za AI. (6) Ripoti mara moja kwa afisa wa faragha PHI yoyote iliyoingizwa kwa bahati mbaya. (7) Sera inakaguliwa kila mwaka.",
            "Tumia AI kuboresha maneno, kisha afisa wako wa faragha au wa kanuni aiidhinishe, wafundishe wafanyakazi, na uhifadhi nakala iliyosainiwa."
          ],
          steps: ["Andaa kanuni tano hadi saba.", "Orodhesha zana zilizoidhinishwa kwa majina.", "Ongeza jinsi ya kuripoti kosa.", "Iombe AI iboreshe maneno.", "Pata idhini ya afisa wa kanuni, wafundishe wafanyakazi na uhifadhi nakala zilizosainiwa."],
          words: [["Afisa wa faragha", "mtu katika kituo anayewajibika kwa faragha chini ya HIPAA."], ["Zana iliyoidhinishwa", "zana ambayo kituo kimeikagua na kuiruhusu, yenye BAA kama inashughulikia PHI."]],
          slides: [
            { title: "Kwa nini sera", bullets: ["Huenda wafanyakazi tayari wanatumia AI", "Inawalinda wagonjwa na kituo"] },
            { title: "Kanuni kuu", bullets: ["Hakuna PHI bila zana iliyoidhinishwa yenye BAA", "AI haitoi utambuzi wa ugonjwa wala ushauri wa matibabu", "Daktari anaidhinisha maudhui ya afya kwa wagonjwa"] },
            { title: "Ifanye ifanye kazi", bullets: ["Ripoti mara moja PHI iliyoingizwa kwa bahati mbaya", "Afisa wa kanuni anaidhinisha; wafundishe wafanyakazi", "Ikague kila mwaka"] }
          ],
          sources: [HHS_BA],
          tryIt: "Kazi ya mwisho: andika sera yako ya ukurasa mmoja ya AI kwa wafanyakazi na ukusanye kifurushi cha AI cha kituo chako: orodha ya kazi iliyopangwa, maelekezo matatu, violezo vya vikumbusho, kijitabu chenye alama ya ukaguzi wa daktari, na sera. Hakikisha hakuna taarifa halisi ya mgonjwa mahali popote.",
          youCanNow: "kuongoza matumizi salama ya AI katika kituo cha afya kwa kanuni zilizo wazi na zana muhimu zisizo na PHI.",
          quickCheck: [
            { objective: "O6", q: "Somo linapendekeza kanuni ngapi kwa sera ya kwanza ya AI?", options: ["Moja", "Hamsini", "Tano hadi saba", "Hakuna; waambie wafanyakazi kwa mdomo tu"], answer: 2, why: "Kanuni tano hadi saba zinatosha kuanzia." },
            { objective: "O6", q: "Rasimu ya sera yako ya AI iko tayari. Hatua zinazofuata ni zipi?", options: ["Iweke kwenye droo", "Iweke mtandaoni kwa ajili ya wagonjwa", "Mruhusu kila mfanyakazi aibadilishe", "Afisa wa faragha au wa kanuni aiidhinishe, wafundishe wafanyakazi na uhifadhi nakala iliyosainiwa"], answer: 3, why: "Afisa anaiidhinisha, wafanyakazi wanafundishwa, na unahifadhi nakala iliyosainiwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Nyaraka za wagonjwa, kazi za ofisi na kanuni za wafanyakazi",
        questions: [
          { objective: "O4", q: "Nani anaidhinisha kijitabu cha wagonjwa kilichoandaliwa na AI?", options: ["Mtaalamu wa afya mwenye leseni", "AI", "Mapokezi peke yao", "Mgonjwa"], answer: 0, why: "Wataalamu wa afya wanakagua ukweli wa afya." },
          { objective: "O4", q: "Mada gani inafaa kwa rasimu ya kijitabu cha jumla cha AI?", options: ["Maandishi ya faili la mgonjwa", "Majibu ya vipimo vya Bw. Lee", "Orodha ya dawa za mgonjwa", "Jinsi ya kujiandaa kwa ziara ya kwanza"], answer: 3, why: "Mada za jumla hazina PHI." },
          { objective: "O5", q: "Kazi gani ya ofisi inaweza kutumia zana ya AI ya kawaida?", options: ["Kufupisha maandishi ya ziara ya mgonjwa", "Tangazo la kazi ya msaidizi wa kitabibu", "Kuandika barua yenye utambuzi wa ugonjwa wa mgonjwa", "Kuweka misimbo kwenye dai la bima la mgonjwa fulani"], answer: 1, why: "Halina taarifa za mgonjwa." },
          { objective: "O6", q: "Mfanyakazi alibandika kwa bahati mbaya jina la mgonjwa na hali yake ya afya katika zana ya AI ya bure. Sera inapaswa kusema afanye nini?", options: ["Aripoti mara moja kwa afisa wa faragha", "Alifiche", "Aitupe kompyuta", "Asifanye chochote"], answer: 0, why: "Kuripoti haraka kunakiwezesha kituo kuchukua hatua sahihi." },
          { objective: "O6", q: "Ipi ni kanuni nzuri ya sera ya AI?", options: ["PHI inaweza kwenda popote", "Zana yoyote inafaa", "AI kamwe haiwapi wagonjwa utambuzi wa ugonjwa wala ushauri wa matibabu", "Hakuna anayekagua maudhui ya AI"], answer: 2, why: "Maamuzi ya matibabu yanabaki kwa wataalamu wa afya wenye leseni." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Vituo Vidogo vya Huduma za Afya",
    questions: [
      { objective: "O1", q: "PHI ni kifupi cha:", options: ["Bima ya afya ya umma", "Taarifa za afya zinazolindwa (protected health information)", "Ukaguzi wa nyumba binafsi", "Kielelezo cha msingi cha afya"], answer: 1, why: "Ni taarifa za afya zinazomtambulisha mgonjwa." },
      { objective: "O1", q: "Kipi ni PHI?", options: ["Bango la jumla la msimu wa mafua", "Saa za kazi za ofisi", "Maelekezo ya maegesho", "Tarehe ya kuzaliwa pamoja na aina ya miadi"], answer: 3, why: "Taarifa zinazomtambulisha mtu pamoja na taarifa za afya ni PHI." },
      { objective: "O1", q: "BAA ni:", options: ["Fomu ya mgonjwa", "Msimbo wa malipo", "Kadi ya bima", "Mkataba ambao muuzaji wa huduma anakubali kulinda PHI"], answer: 3, why: "Mikataba ya washirika wa kibiashara inahusu jinsi PHI inavyoshughulikiwa." },
      { objective: "O1", q: "Zana nyingi za bure za AI za mazungumzo:", options: ["Daima zimeidhinishwa kwa HIPAA", "Hazisaini BAA na watumiaji binafsi", "Zinaendeshwa na HHS", "Zinafuta kila kitu papo hapo"], answer: 1, why: "Usidhani kwamba zana ya kawaida imeidhinishwa kwa PHI." },
      { objective: "O1", q: "Ukiwa huna uhakika kama kazi inaweza kutumia AI, muulize:", options: ["Mgonjwa", "Zana ya AI", "Afisa wako wa faragha au wa kanuni", "Kikundi cha mitandao ya kijamii"], answer: 2, why: "Wao ndio huamua kipi kimeidhinishwa." },
      { objective: "O1", q: "Wafanyakazi wanaweza kupata wapi mwongozo rasmi wa HIPAA?", options: ["hhs.gov", "Blogu yoyote", "Programu ya mazungumzo", "Maoni chini ya habari"], answer: 0, why: "HHS inachapisha mwongozo wa HIPAA." },
      { objective: "O2", q: "Maswali ya simu kuhusu kuendelea na dawa na dalili yanaenda kwa:", options: ["Ujumbe wa sauti milele", "AI", "Wafanyakazi wa kitabibu", "Ofisi ya malipo"], answer: 2, why: "Maswali ya kitabibu yanahitaji wafanyakazi wa kitabibu." },
      { objective: "O2", q: "Nani anaidhinisha maelekezo ya mapokezi yanayogusa matibabu?", options: ["Kiongozi wa huduma za kitabibu", "Mfanyakazi mpya zaidi", "AI", "Muuzaji wa huduma"], answer: 0, why: "Idhini ya kitabibu inafanya maelekezo yawe salama." },
      { objective: "O2", q: "Kupanga kwa uharaka (triage) kunafanywa na:", options: ["AI", "Wafanyakazi wa kitabibu", "Mapokezi peke yao", "Marafiki wa wagonjwa"], answer: 1, why: "Kuamua uharaka ni kazi ya kitabibu." },
      { objective: "O3", q: "Kipi ni kiolezo kizuri cha kikumbusho?", options: ["Namba ya bima ya mgonjwa", "\"Habari Jane, tunathibitisha ziara yako ya ufuatiliaji wa HIV\"", "Maandishi ya faili la mgonjwa", "\"Habari [jina la kwanza], tunathibitisha miadi yako tarehe [tarehe] saa [saa].\""], answer: 3, why: "Vishika-nafasi na bila sababu ya ziara." },
      { objective: "O3", q: "Nani anajaza taarifa halisi za mgonjwa katika vikumbusho?", options: ["Mfumo wako wa ratiba au wa ujumbe", "Zana ya AI ya kawaida", "Simu ya mtu wa kujitolea", "Mitandao ya kijamii"], answer: 0, why: "Taarifa halisi zinabaki katika mifumo iliyoidhinishwa." },
      { objective: "O3", q: "Vikumbusho vilivyotafsiriwa na AI vinapaswa kukaguliwa na:", options: ["Mgonjwa", "Hakuna mtu", "AI tena", "Mfanyakazi anayeijua lugha vizuri au mtafsiri mwenye sifa"], answer: 3, why: "Tafsiri zinaweza kuwa na makosa." },
      { objective: "O4", q: "Kiwango kizuri cha kusoma kwa vijitabu vya jumla vya wagonjwa ni kama:", options: ["Chuo cha udaktari", "Mhitimu wa chuo kikuu", "Darasa la 6", "Bila maneno kabisa"], answer: 2, why: "Lugha rahisi inawasaidia wagonjwa wengi zaidi kuelewa." },
      { objective: "O4", q: "Kila rasimu ya kijitabu ya AI inawekewa alama:", options: ["\"Mwisho\"", "\"Kwa ukaguzi wa daktari\"", "\"Siri\"", "\"Imeidhinishwa na AI\""], answer: 1, why: "Wataalamu wa afya lazima waidhinishe maudhui ya afya." },
      { objective: "O4", q: "Vijitabu vya wagonjwa vinapaswa kuwa na:", options: ["Hakuna kingine", "Hadithi za wagonjwa wengine pamoja na majina yao", "Utambuzi wa ugonjwa kwa kila msomaji", "Namba yako ya mawasiliano na ujumbe wa 911 kwa dharura"], answer: 3, why: "Wagonjwa wanahitaji kujua jinsi ya kupata msaada." },
      { objective: "O5", q: "Hati gani inahitaji ukaguzi wa kanuni au wa rasilimali watu?", options: ["Tangazo la saa za kazi za sikukuu", "Ujumbe wa shukrani kwa wafanyakazi kwa sherehe", "Sera ya ada ya kutofika kwa miadi", "Ramani ya maegesho"], answer: 2, why: "Ada na haki za wagonjwa zinaweza kudhibitiwa na sheria." },
      { objective: "O5", q: "Barua pepe kwa wafanyakazi kuhusu mfumo mpya wa simu:", options: ["Haihitaji PHI, kwa hiyo AI ya kawaida inaweza kusaidia", "Lazima iwe na majina ya wagonjwa", "Inahitaji BAA", "Haiwezi kuandikwa"], answer: 0, why: "Hakuna taarifa ya mgonjwa inayohusika." },
      { objective: "O6", q: "Sera ya AI inapaswa kuorodhesha:", options: ["Majina ya wagonjwa", "Zana zilizoidhinishwa kwa majina", "Manenosiri ya wafanyakazi", "Hakuna kitu maalum"], answer: 1, why: "Wafanyakazi wanahitaji kujua zana zipi zinaruhusiwa." },
      { objective: "O6", q: "Sera ya AI inapaswa kukaguliwa mara ngapi?", options: ["Kamwe", "Angalau kila mwaka", "Kila miaka kumi", "Baada ya faini tu"], answer: 1, why: "Zana na kanuni hubadilika." },
      { objective: "O6", q: "Katika kozi hii, AI inatumika kwa:", options: ["Kazi za ofisi na rasimu, kamwe si utambuzi wa ugonjwa", "Kutambua magonjwa ya wagonjwa", "Kuandika dawa", "Kuchukua nafasi ya wataalamu wa afya"], answer: 0, why: "Maamuzi ya matibabu yanabaki kwa wataalamu wa afya wenye leseni." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 7, 9, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Orodha ya kazi iliyopangwa", objective: "O1", notYet: "Kazi inayohitaji PHI iko katika safu ya \"AI ya kawaida inafaa\".", meets: "Kazi kumi zimepangwa kwa usahihi katika safu mbili.", exceeds: "Ameandika zana ipi iliyoidhinishwa yenye BAA, kama ipo, kituo kinatumia kwa kazi zenye PHI." },
      { name: "Maelekezo salama ya mapokezi", objective: "O2", notYet: "Maelekezo yanatoa ushauri wa kitabibu au hayapeleki dharura kwa 911.", meets: "Maelekezo matatu yanayopeleka maswali ya matibabu kwa wafanyakazi wa kitabibu na dharura kwa 911.", exceeds: "Yamewekewa alama ya idhini ya kiongozi wa kitabibu, pamoja na maelezo ya nani aliyeidhinisha." },
      { name: "Violezo vya vikumbusho vinavyolinda faragha", objective: "O3", notYet: "Kiolezo kina taarifa halisi za mgonjwa au kinafichua sababu ya ziara.", meets: "Violezo vya kuthibitisha na kukumbusha vyenye vishika-nafasi na bila sababu ya ziara.", exceeds: "Pia kuna kiolezo cha kubadilisha miadi na toleo lililotafsiriwa na kukaguliwa na mtu anayeijua lugha vizuri." },
      { name: "Kijitabu kwa ukaguzi", objective: "O4", notYet: "Kijitabu kinahusu mgonjwa fulani au hakina alama ya ukaguzi.", meets: "Mada ya jumla, maneno rahisi, alama \"Kwa ukaguzi wa daktari\" pamoja na namba ya mawasiliano na ujumbe wa 911.", exceeds: "Kinaorodhesha mambo ya kweli ambayo daktari anapaswa kukagua." },
      { name: "Sera ya AI kwa wafanyakazi", objective: "O6", notYet: "Sera haina kanuni ya kutoweka PHI au jinsi ya kuripoti kosa.", meets: "Kanuni tano hadi saba zikiwemo hakuna PHI bila BAA, zana zilizoidhinishwa, kuripoti na ukaguzi wa kila mwaka.", exceeds: "Imeidhinishwa na afisa wa faragha au wa kanuni, pamoja na mpango wa kuwafundisha wafanyakazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kipimo cha tathmini)",
      "Vituo vinavyoanza kutumia sera iliyoandikwa ya AI kwa wafanyakazi ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Vituo vinavyoripoti kwamba hakuna PHI iliyoingizwa katika zana za AI za kawaida baada ya mafunzo",
      "Wanafunzi wanaoanza kozi nyingine ya biashara ndogo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu yenye intaneti",
      "Msaidizi wa AI wa kawaida wa bure, unaotumika tu kwa kazi zisizo na PHI",
      "Sera za sasa za kituo chako na aina za simu za kawaida, au mifano yake",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Darasani tumieni taarifa za kubuni au za mfano tu; kamwe msiandike taarifa za mgonjwa halisi katika zana ya AI.",
      "Mkaribishe afisa wa faragha au wa kanuni wa kituo katika kipindi cha sera ya AI kwa wafanyakazi.",
      "Mtaalamu wa afya mwenye leseni akague vijitabu vyovyote na maelekezo yanayohusu matibabu kabla ya kutumika.",
      "Wakumbushe wanafunzi kwamba kozi hii si ushauri wa kisheria wala wa kufuata kanuni, na inaelekeza kwenye mwongozo wa HHS na kwa mshauri wao.",
      "Pima kazi ya mwisho kwa kipimo cha tathmini, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
