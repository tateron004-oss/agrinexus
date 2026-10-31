"use strict";

// Koach Learn course (Swahili translation of shared/canva-graphic-design.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "canva-graphic-design-sw",
  lang: "sw",
  translationOf: "canva-graphic-design",
  category: "Workforce Development",
  name: "Usanifu wa Michoro kwa Canva",
  skills: "Kuandika maelezo ya kazi ya usanifu (design brief), Kutumia kanuni za mpangilio, Kuchagua rangi na fonti, Kutengeneza michoro katika Canva, Kukagua haki za picha na usomekaji, Kuhifadhi kazi ya portfolio",
  outcome: "kuandika maelezo mafupi ya kazi ya usanifu (design brief), kisha kutengeneza tangazo la karatasi (flyer) lililo wazi na linalosomeka pamoja na chapisho la mitandao ya kijamii linalolingana nalo katika mpango wa bure wa Canva, kuyakagua kwa haki za picha na usomekaji, na kuyahifadhi kama kazi ya portfolio unayoweza kumwonyesha mwajiri au mteja.",
  about: [
    "Kozi hii ni kwa vijana wanaotafuta kazi yao ya kwanza ya ubunifu, watu wazima wanaoongeza ujuzi kwenye CV yao, wamiliki wa biashara ndogo na wajasiriamali wanaotengeneza matangazo yao wenyewe, na wafanyakazi na wajitolea wa mashirika yasiyo ya faida wanaotengeneza matangazo kwa ajili ya matukio na wafadhili.",
    "Utajifunza wasanifu wa michoro wanafanya nini, kanuni za msingi zinazofanya mchoro usomeke kwa urahisi, jinsi ya kuchagua rangi na fonti, jinsi ya kutengeneza mchoro katika mpango wa bure wa Canva, jinsi ya kuhakikisha una haki ya kutumia kila picha, na jinsi ya kuhifadhi kazi yako na kuiongeza kwenye portfolio.",
    "Canva ni zana ya bure ya usanifu mtandaoni inayofanya kazi kwenye kivinjari cha wavuti au kama app ya simu. Huhitaji kununua chochote. Kila somo linachukua kama dakika tano na linaishia na kazi ya \"Jaribu sasa\". Kuna jaribio fupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni.",
    "Kozi hii inafundisha mambo ya msingi na inakusaidia kutengeneza kazi yako ya kwanza ya portfolio. Haitoi cheti wala shahada. Ukitaka sifa rasmi baadaye, masomo yanakuambia mahali pa kutafuta."
  ],
  finalTask: "Kwa mteja halisi au wa mazoezi (duka la mtaani, tukio la shirika lisilo la faida, timu ya michezo, kanisa au biashara yako ndogo ya pembeni), andika maelezo ya kazi ya usanifu katika aya moja. Kisha tengeneza tangazo la ukubwa wa letter (au A4) na chapisho la mraba la mitandao ya kijamii linalolingana nalo katika mpango wa bure wa Canva, ukitumia rangi na fonti zile zile. Kagua yote mawili kwa orodha ya ukaguzi wa usanifu (mpangilio wa umuhimu, tofauti ya rangi, tahajia, haki ya kila picha), hifadhi tangazo kama PDF na chapisho kama PNG, na uandike maelezo ya portfolio ya sentensi 3 hadi 4 kuhusu lengo, maamuzi yako na matokeo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanafunzi wa aina mbalimbali nchini Marekani na nje: vijana wanaotafuta kazi ya kwanza au kipato cha pembeni cha ubunifu, watu wazima wanaobadilisha kazi, wamiliki wa biashara ndogo na wajasiriamali, na wafanyakazi na wajitolea wa mashirika yasiyo ya faida wanaotengeneza matangazo na machapisho yao wenyewe.",
    startingPoint: "Wanaweza kutumia simu au kompyuta na mitandao ya kijamii. Wengi hawajawahi kufundishwa kanuni za usanifu; wengi wamejaribu Canva au zana kama hiyo kwa kunakili kiolezo bila kujua kwa nini kinafanya kazi.",
    gap: "Waajiri, wateja na mashirika wanataka michoro iliyo wazi inayofuata utambulisho wao, na kwa haraka. Wanafunzi wanahitaji kupanga mchoro kutoka kwa maelezo ya kazi, kutumia kanuni za msingi za mpangilio, rangi na herufi, kuepuka matatizo ya hakimiliki, na kuonyesha kazi iliyokamilika katika portfolio. Kazi ya portfolio mara nyingi ndiyo inayoleta kazi ndogo au ajira ya kwanza ya usanifu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Gharama: mpango wa bure wa Canva tu; hakuna vitu vya kulipia wala usajili wa kulipia unaohitajika",
      "Vifaa: kompyuta ni rahisi zaidi; simu inafaa kwa kazi nyingi",
      "Muda: masomo ya dakika 4 hadi 6; kazi ya mwisho inachukua kama dakika 60 hadi 90",
      "Haki: picha ambazo mwanafunzi anamiliki au ana leseni ya kuzitumia tu; hakuna nembo wala picha zilizonakiliwa kutoka biashara nyingine"
    ],
    prerequisites: "Matumizi ya msingi ya kompyuta au simu na anwani ya barua pepe ili kufungua akaunti ya bure ya Canva. Wanafunzi wapya kwenye kompyuta wanaweza kuanza na kozi \"Ujuzi wa Msingi wa Kompyuta\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ombi la usanifu kutoka kwa mteja, mwajiri au mradi wako mwenyewe", action: "kuandika maelezo ya kazi ya usanifu yanayotaja hadhira, ujumbe mkuu, aina ya kazi na ukubwa", standard: "yakiwa na sehemu zote nne katika aya moja fupi" },
    { id: "O2", condition: "Ukipewa rasimu ya mchoro", action: "kupanga maandishi na picha kwa kutumia mpangilio wa umuhimu, upangaji kwa mstari, tofauti, urudiaji na nafasi tupu", standard: "ili mtazamaji ajue ujumbe mkuu ndani ya sekunde 3" },
    { id: "O3", condition: "Ukitumia mpango wa bure wa Canva", action: "kutengeneza mchoro wa ukubwa sahihi kutoka kwa kiolezo au ukurasa mtupu, ukibadilisha maandishi, rangi, fonti na picha", standard: "ukitumia fonti zisizozidi 2 na rangi kuu zisizozidi 3, bila vitu vya kulipia" },
    { id: "O4", condition: "Kabla ya kushiriki au kuchapisha mchoro", action: "kukagua mchoro kwa tofauti ya rangi inayosomeka, tahajia na ukweli sahihi, na haki ya kutumia kila picha", standard: "ukirekebisha kila tatizo unalopata" },
    { id: "O5", condition: "Mchoro ukishakamilika", action: "kuhifadhi mchoro katika aina sahihi ya faili na kuuongeza kwenye portfolio pamoja na maelezo mafupi", standard: "PDF kwa kuchapisha na PNG au JPG kwa skrini, ukiwa na jina la faili lililo wazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Misingi ya usanifu",
      lessons: [
        {
          title: "Wasanifu wa michoro wanafanya nini, na maelezo ya kazi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Andika maelezo ya kazi ya usanifu yanayotaja hadhira, ujumbe, aina ya kazi na ukubwa.",
          text: [
            "Wasanifu wa michoro (graphic designers) wanatumia picha, maneno, rangi na mpangilio kufikisha ujumbe. Wanatengeneza matangazo ya karatasi (flyers), machapisho ya mitandao ya kijamii, menyu, mabango, nembo, slaidi na ripoti. Ofisi ya Takwimu za Kazi ya Marekani (US Bureau of Labor Statistics) inasema waajiri wanaangalia kwa makini portfolio: mkusanyiko wa kazi zako bora.",
            "Kazi ya usanifu inakuja kwa njia nyingi: kazi ya ndani katika kampuni au shirika lisilo la faida, kazi ya msaidizi wa mitandao ya kijamii au masoko, duka la uchapishaji, au kazi huru (freelance) kwa biashara za mtaani. Kazi nyingi za usanifu zinaomba shahada au mafunzo ya ufundi, lakini portfolio nzuri inasaidia katika kila ngazi. Vyeti vya programu, kama Adobe Certified Professional (mitihani inayotolewa na Certiport), vinaweza kukupa faida baadaye. Kozi hii inakuandaa kutengeneza kazi yako ya kwanza ya portfolio; haitoi cheti.",
            "Kila mchoro mzuri unaanza na maelezo ya kazi (brief): mpango mfupi unaojibu maswali manne. Ni kwa ajili ya nani (hadhira)? Ujumbe mkuu mmoja ni upi? Ni aina gani (tangazo, chapisho la mitandao, bango, menyu)? Ukubwa wake ni upi? Usipoweza kujibu haya, muulize mteja kabla ya kuanza."
          ],
          steps: ["Uliza mchoro ni kwa ajili ya nani.", "Uliza ujumbe mkuu mmoja na maelezo yoyote ya lazima (tarehe, mahali, bei, mawasiliano).", "Uliza ni aina gani ya kazi na itatumika wapi.", "Andika ukubwa, kama letter kwa tangazo au mraba kwa chapisho la mitandao.", "Msomee mteja maelezo ya kazi na upate ndiyo kabla ya kuanza kusanifu."],
          words: [["Usanifu wa michoro", "kutumia maneno, picha, rangi na mpangilio kushiriki ujumbe."], ["Maelezo ya kazi ya usanifu (design brief)", "mpango mfupi ulioandikwa wa mchoro: hadhira, ujumbe, aina ya kazi na ukubwa."], ["Portfolio", "mkusanyiko wa kazi zako bora unaowaonyesha waajiri au wateja."], ["Kazi huru (freelance)", "kujifanyia kazi mwenyewe na kufanya miradi ya kulipwa kwa wateja tofauti."]],
          slides: [
            { title: "Wasanifu wa michoro wanatengeneza nini", bullets: ["Matangazo, machapisho ya mitandao, menyu, mabango", "Nembo, slaidi na ripoti", "Waajiri wanaangalia kwa makini portfolio yako"] },
            { title: "Kazi ya usanifu iko wapi", bullets: ["Ndani ya kampuni au shirika lisilo la faida", "Msaidizi wa mitandao ya kijamii au masoko", "Maduka ya uchapishaji na kazi huru (freelance)"] },
            { title: "Maelezo ya kazi: sehemu 4", bullets: ["Hadhira: ni kwa ajili ya nani?", "Ujumbe: wazo kuu moja ni lipi?", "Aina: tangazo, chapisho, bango?", "Ukubwa: letter, A4, mraba?"] },
            { title: "Kabla ya kusanifu", bullets: ["Pata maelezo ya lazima", "Msomee mteja maelezo ya kazi", "Pata ndiyo, kisha anza"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Graphic Designers (wasanifu wa michoro)", url: "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm" },
            { name: "Certiport: Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Overview" }
          ],
          tryIt: "Chagua mteja halisi au wa mazoezi, kama tukio la kuchangisha pesa kwa kuosha magari, kinyozi au biashara yako ndogo ya pembeni. Andika maelezo ya kazi katika aya moja yanayotaja hadhira, ujumbe mkuu, aina ya kazi na ukubwa. Yahifadhi kwa ajili ya kazi ya mwisho.",
          youCanNow: "kusema wasanifu wa michoro wanatengeneza nini na kuandika maelezo ya kazi ya usanifu yenye sehemu nne.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi kinapaswa kuwa katika maelezo ya kazi ya usanifu?", options: ["Hadhira, ujumbe mkuu, aina ya kazi na ukubwa", "Rangi unayoipenda tu", "Bei ya programu ya usanifu", "Orodha ya kila fonti unayoijua"], answer: 0, why: "Maelezo ya kazi yanajibu ni kwa ajili ya nani, yanasema nini, ni kitu gani na ni kubwa kiasi gani." },
            { objective: "O1", q: "Mteja anasema, \"Nitengenezee tangazo.\" Unafanya nini kwanza?", options: ["Kuanza kusanifu mara moja", "Kunakili tangazo la biashara nyingine", "Kuuliza kuhusu hadhira, ujumbe na ukubwa, na kuandika maelezo ya kazi", "Kuchagua fonti tano"], answer: 2, why: "Kuuliza kwanza na kuandika maelezo ya kazi kunazuia kazi kupotea na kusanifu upya." }
          ]
        },
        {
          title: "Kanuni za mpangilio zinazofanya mchoro usomeke kwa urahisi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Panga mchoro ili ujumbe mkuu uonekane kwanza.",
          text: [
            "Watu wanaangalia tangazo au chapisho kwa sekunde chache tu. Kanuni tano rahisi zinawasaidia kupata ujumbe haraka.",
            "Mpangilio wa umuhimu (hierarchy): fanya kitu muhimu zaidi kiwe kikubwa zaidi au kizito zaidi, kisha kinachofuata kwa umuhimu, kisha maelezo madogo. Upangaji kwa mstari (alignment): panga vitu kwenye ukingo mmoja au mstari wa katikati mmoja ili mchoro uonekane nadhifu. Tofauti (contrast): fanya vitu muhimu vionekane tofauti, kwa mfano maandishi meusi juu ya mandharinyuma angavu, au kichwa kikubwa karibu na maelezo madogo.",
            "Urudiaji (repetition): tumia rangi, fonti na maumbo yale yale tena ili mchoro uonekane kama kitu kimoja. Nafasi tupu (white space): acha nafasi tupu kuzunguka vitu. Nafasi tupu haipotei bure; inapumzisha jicho na kufanya ujumbe mkuu uonekane wazi.",
            "Jaribio la haraka: mwonyeshe mtu mchoro wako kwa sekunde 3, kisha uufiche. Muulize ulihusu nini. Asipoweza kusema ujumbe mkuu, fanya kichwa kiwe kikubwa zaidi na upunguze maneno ya ziada."
          ],
          steps: ["Chagua ujumbe mkuu mmoja na uufanye maandishi makubwa zaidi.", "Weka maelezo (tarehe, mahali, mawasiliano) kwa maandishi madogo zaidi.", "Panga maandishi na picha kwenye kingo zile zile.", "Tumia rangi na fonti zile zile tena.", "Ondoa chochote kisichosaidia ujumbe.", "Fanya jaribio la sekunde 3 na mtu mwingine."],
          words: [["Mpangilio wa umuhimu (hierarchy)", "kuonyesha kilicho muhimu zaidi kwanza kwa kukifanya kikubwa zaidi, kizito zaidi au juu zaidi kwenye ukurasa."], ["Upangaji kwa mstari (alignment)", "kupanga vitu kwenye ukingo mmoja au mstari wa katikati mmoja."], ["Tofauti (contrast)", "tofauti iliyo wazi, kama giza juu ya angavu au kikubwa karibu na kidogo."], ["Nafasi tupu (white space)", "nafasi tupu kuzunguka na kati ya vitu katika mchoro."]],
          slides: [
            { title: "Kanuni tano za mpangilio", bullets: ["Mpangilio wa umuhimu: muhimu zaidi = kikubwa zaidi", "Upangaji kwa mstari: panga vitu kwa mstari", "Tofauti: vitu muhimu vionekane wazi", "Urudiaji na nafasi tupu"] },
            { title: "Nafasi tupu haipotei bure", bullets: ["Inapumzisha jicho", "Inafanya ujumbe mkuu uonekane wazi", "Punguza maneno na picha za ziada"] },
            { title: "Jaribio la sekunde 3", bullets: ["Onyesha mchoro kwa sekunde 3, kisha uufiche", "Uliza: ulihusu nini?", "Wasipoweza kusema, fanya kichwa kiwe kikubwa zaidi"] }
          ],
          tryIt: "Tafuta tangazo karibu nawe (ukutani, kwenye barua au mtandaoni). Kwenye karatasi, andika kanuni tano na uweke alama zipi limezitumia vizuri na zipi limezivunja. Kisha chora mpangilio bora kwa maelezo yako ya kazi: kichwa, picha na maelezo katika visanduku.",
          youCanNow: "kutumia mpangilio wa umuhimu, upangaji kwa mstari, tofauti, urudiaji na nafasi tupu kupanga mchoro, na kuujaribu kwa sekunde 3.",
          quickCheck: [
            { objective: "O2", q: "Katika tangazo la tukio, maandishi gani kwa kawaida yanapaswa kuwa makubwa zaidi?", options: ["Namba ya simu", "Maandishi madogo ya masharti", "Anwani ya tovuti", "Ujumbe mkuu, kama jina la tukio"], answer: 3, why: "Mpangilio wa umuhimu unaweka ujumbe mkuu kwanza ili watu waupate kwa sekunde chache." },
            { objective: "O2", q: "Mchoro wako unaonekana umejaa sana. Marekebisho gani yanafuata kanuni za mpangilio?", options: ["Kuongeza picha zaidi", "Kupunguza maneno ya ziada na kuacha nafasi tupu zaidi", "Kutumia fonti tano tofauti", "Kufanya maandishi yote yawe ukubwa mmoja"], answer: 1, why: "Nafasi tupu na maneno machache vinafanya ujumbe mkuu uonekane wazi." }
          ]
        },
        {
          title: "Kuchagua rangi na fonti",
          objectives: ["O2", "O4"],
          minutes: 5,
          goal: "Chagua seti rahisi ya rangi na jozi ya fonti zinazosomeka kwa urahisi.",
          text: [
            "Fanya iwe rahisi: chagua rangi kuu 2 au 3 pamoja na rangi ya kawaida (neutral) kama nyeupe, nyeusi au kijivu. Mteja akiwa na rangi za utambulisho wake (brand colors), tumia hizo. Kutumia rangi zile zile kwenye kila kazi kunafanya biashara itambulike kwa urahisi.",
            "Tumia fonti zisizozidi 2: moja kwa vichwa na moja kwa maandishi ya kawaida. Fonti nzito na rahisi inafaa kwa vichwa. Fonti ya kawaida inayosomeka kwa urahisi inafaa kwa maelezo. Fonti za mwandiko wa mapambo ni ngumu kusoma zikiwa ndogo, kwa hiyo zitumie kwa neno moja au mawili tu.",
            "Maandishi lazima yaonekane wazi juu ya mandharinyuma yake. Miongozo ya ufikivu wa wavuti (WCAG, kutoka W3C) inaomba uwiano wa tofauti (contrast ratio) wa angalau 4.5 kwa 1 kwa maandishi ya kawaida na 3 kwa 1 kwa maandishi makubwa. Kikagua tofauti cha bure, kama kile cha WebAIM, kinakuambia uwiano unapoandika rangi mbili. Maandishi ya kijivu hafifu juu ya nyeupe, au nyekundu juu ya kijani, mara nyingi hayafaulu."
          ],
          steps: ["Andika rangi kuu 2 au 3 na rangi moja ya kawaida.", "Chagua fonti moja ya vichwa na fonti moja ya maandishi ya kawaida.", "Kagua kila rangi ya maandishi dhidi ya mandharinyuma yake katika kikagua tofauti.", "Badilisha jozi yoyote iliyo chini ya 4.5 kwa 1 kwa maandishi ya kawaida."],
          words: [["Seti ya rangi (color palette)", "kikundi kidogo cha rangi unazotumia katika mchoro."], ["Fonti", "mtindo wa herufi, kama herufi nzito za kawaida au mtindo wa mwandiko."], ["Uwiano wa tofauti (contrast ratio)", "namba inayoonyesha jinsi rangi mbili zinavyotofautiana kwa mwangaza; ikiwa juu zaidi, ni rahisi zaidi kusoma."], ["Rangi za utambulisho (brand colors)", "rangi maalum ambazo biashara au kikundi kinatumia kila wakati ili watu wakitambue."]],
          slides: [
            { title: "Rangi", bullets: ["Rangi kuu 2 au 3 pamoja na rangi ya kawaida", "Tumia rangi za utambulisho za mteja kama anazo", "Rangi zile zile kwenye kila kazi"] },
            { title: "Fonti", bullets: ["Fonti zisizozidi 2", "Fonti nzito na rahisi kwa vichwa", "Fonti ya kawaida kwa maelezo; fonti za mapambo kwa neno moja au mawili"] },
            { title: "Tofauti inayosomeka", bullets: ["Angalau 4.5 kwa 1 kwa maandishi ya kawaida", "Angalau 3 kwa 1 kwa maandishi makubwa", "Kagua kwa kikagua tofauti cha bure"] }
          ],
          sources: [
            { name: "W3C: Understanding Contrast (Minimum) (kuelewa tofauti ya chini)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" },
            { name: "WebAIM Contrast Checker (kikagua tofauti)", url: "https://webaim.org/resources/contrastchecker/" }
          ],
          tryIt: "Kwa maelezo yako ya kazi, andika rangi 2 au 3 na rangi moja ya kawaida, na uchague fonti ya vichwa na fonti ya maandishi ya kawaida. Fungua kikagua tofauti cha bure, andika rangi ya maandishi yako na rangi ya mandharinyuma, na uandike uwiano. Badilisha jozi yoyote iliyo chini ya 4.5 kwa 1.",
          youCanNow: "kuchagua seti rahisi ya rangi na jozi ya fonti na kukagua kwamba maandishi yanasomeka.",
          quickCheck: [
            { objective: "O2", q: "Tangazo rahisi kwa kawaida linapaswa kutumia fonti ngapi?", options: ["Tano au zaidi", "Fonti tofauti kwa kila mstari", "Zisizozidi mbili", "Fonti za mapambo tu"], answer: 2, why: "Fonti moja ya vichwa na moja ya maandishi ya kawaida zinafanya mchoro uwe safi na usomeke." },
            { objective: "O4", q: "Kikagua tofauti kinaonyesha maandishi yako ya ukubwa wa kawaida ni 2.8 kwa 1. Unafanya nini?", options: ["Kufanya maandishi yawe meusi zaidi au mandharinyuma yawe angavu zaidi hadi ifikie angalau 4.5 kwa 1", "Kuacha hivyo; uwiano wowote unafaa", "Kufanya maandishi yawe madogo zaidi", "Kuongeza rangi ya pili ya mandharinyuma nyuma yake"], answer: 0, why: "WCAG inaomba angalau 4.5 kwa 1 kwa maandishi ya kawaida ili watu wengi waweze kuyasoma." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Misingi ya usanifu",
        questions: [
          { objective: "O1", q: "Maelezo ya kazi ya usanifu (design brief) ni nini?", options: ["Tangazo lililokamilika", "Mpango mfupi unaotaja hadhira, ujumbe, aina ya kazi na ukubwa", "Bili unayomtumia mteja", "Orodha ya violezo vya Canva"], answer: 1, why: "Maelezo ya kazi ni mpango mnaokubaliana kabla ya kusanifu." },
          { objective: "O1", q: "Mmiliki wa gari la chakula anataka chapisho kwa chakula kipya kwenye menyu. Maelezo yapi ya kazi yamekamilika zaidi?", options: ["\"Lifanye lionekane zuri.\"", "\"Chapisho la chakula.\"", "\"Tumia nyekundu.\"", "\"Chapisho la mraba la Instagram kwa wateja wa mtaani wa chakula cha mchana: taco mpya ya kuku yenye pilipili, $5, Ijumaa tu.\""], answer: 3, why: "Yanataja aina na ukubwa, hadhira na ujumbe mkuu mmoja." },
          { objective: "O2", q: "Kupanga kichwa, picha na maelezo kwenye ukingo ule ule wa kushoto ni mfano wa:", options: ["Upangaji kwa mstari", "Urudiaji", "Tofauti", "Mpangilio wa umuhimu"], answer: 0, why: "Upangaji kwa mstari ni kupanga vitu kwenye ukingo mmoja au mstari wa katikati mmoja." },
          { objective: "O2", q: "Unamwonyesha rafiki tangazo lako kwa sekunde 3 na hawezi kusema linahusu nini. Marekebisho bora ni yapi?", options: ["Kuongeza maelezo zaidi", "Kutumia rangi zaidi", "Kufanya ujumbe mkuu uwe mkubwa zaidi na kupunguza maneno ya ziada", "Kufanya picha iwe ndogo zaidi"], answer: 2, why: "Mpangilio wa umuhimu ulio imara zaidi na maneno machache vinafanya ujumbe mkuu uwe wazi." },
          { objective: "O2", q: "Kwa nini utumie rangi na fonti zile zile kwenye kila kazi ya mteja?", options: ["Ni lazima kisheria", "Canva inaruhusu rangi moja tu", "Inatumia wino kidogo", "Urudiaji unafanya biashara itambulike kwa urahisi"], answer: 3, why: "Urudiaji unaunganisha kazi pamoja na kujenga utambulisho." }
        ]
      }
    },
    {
      name: "Sura 2: Kutengeneza katika Canva",
      lessons: [
        {
          title: "Kutengeneza mchoro katika mpango wa bure wa Canva",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tengeneza mchoro wa ukubwa sahihi kutoka kwa kiolezo na uufanye kuwa wako.",
          text: [
            "Canva inafanya kazi kwenye kivinjari cha wavuti kwa canva.com au kwenye app ya Canva. Fungua akaunti ya bure kwa barua pepe yako. Mpango wa bure una violezo, fonti, picha na michoro mingi. Baadhi ya vitu ni kwa mipango ya kulipia tu na vina alama ya Pro au premium; viache ili mchoro wako ubaki wa bure.",
            "Anza na ukubwa. Tumia sehemu ya kutafuta au kitufe cha kuunda (create) na uandike aina unayohitaji, kama \"Flyer\" au \"Instagram post\". Canva inafungua ukurasa wa ukubwa huo. Unaweza pia kuweka ukubwa wako mwenyewe (custom size). Shule, wanafunzi na mashirika yasiyo ya faida huenda wakastahili mipango iliyoboreshwa ya bure; kagua kurasa za Canva zenyewe za Education na Nonprofits.",
            "Kiolezo (template) ni mchoro uliotengenezwa tayari. Ni mahali pa kuanzia, si kazi iliyokamilika. Badilisha maneno yafuate maelezo yako ya kazi, badilisha rangi zifuate seti yako, tumia fonti zako mbili, weka picha zako mwenyewe, na ufute chochote kisichosaidia ujumbe. Waajiri wanaweza kutambua kiolezo ambacho hakikubadilishwa.",
            "Tumia paneli ya pembeni kuongeza maandishi, maumbo na michoro, na kupakia picha zako mwenyewe. Canva inahifadhi kazi yako unapoendelea. Upe mchoro wako jina lililo wazi ili uweze kuupata tena."
          ],
          steps: ["Ingia (sign in) kwenye Canva kwa kompyuta au app.", "Tafuta aina unayohitaji, kama Flyer, au weka ukubwa wako mwenyewe.", "Chagua kiolezo kinacholingana na mchoro wa mpangilio wako, au anza na ukurasa mtupu.", "Badilisha maandishi kwa ujumbe na maelezo ya maelezo yako ya kazi.", "Badilisha rangi na fonti zifuate seti yako ya rangi na jozi yako ya fonti.", "Pakia picha zako mwenyewe au tumia picha za bure unazoruhusiwa kutumia.", "Futa chochote kisichosaidia ujumbe, kisha upe mchoro jina."],
          words: [["Kiolezo (template)", "mchoro uliotengenezwa tayari unaoubadilisha ili uwe wako."], ["Mpango wa bure", "toleo la Canva unaloweza kutumia bila kulipa."], ["Kitu cha Pro au premium", "kiolezo, picha au mchoro unaohitaji mpango wa kulipia."], ["Ukubwa wako mwenyewe (custom size)", "ukubwa wa ukurasa unaouandika mwenyewe, kwa inchi, pikseli au milimita."]],
          slides: [
            { title: "Kuanza", bullets: ["canva.com kwenye kivinjari au app ya Canva", "Akaunti ya bure kwa barua pepe yako", "Acha vitu vyenye alama ya Pro au premium"] },
            { title: "Anza na ukubwa", bullets: ["Tafuta aina: Flyer, Instagram post", "Au weka ukubwa wako mwenyewe", "Kagua kurasa za Canva za Education na Nonprofits"] },
            { title: "Fanya kiolezo kiwe chako", bullets: ["Maneno yako, rangi zako na fonti zako mbili", "Picha zako mwenyewe", "Futa kisichosaidia ujumbe"] },
            { title: "Maliza rasimu", bullets: ["Pakia picha kutoka paneli ya pembeni", "Canva inahifadhi unapoendelea", "Upe mchoro jina lililo wazi"] }
          ],
          sources: [
            { name: "Canva", url: "https://www.canva.com/" },
            { name: "Canva for Education (kagua nani anastahili)", url: "https://www.canva.com/education/" },
            { name: "Canva for Nonprofits (kagua nani anastahili)", url: "https://www.canva.com/canva-for-nonprofits/" }
          ],
          tryIt: "Fungua Canva, tafuta Flyer na uchague kiolezo kinacholingana na mchoro wako wa Somo la 2. Badilisha maandishi, rangi na fonti zifuate maelezo yako ya kazi na seti yako ya rangi, ongeza picha moja uliyopiga mwenyewe, na ufute chochote cha ziada. Upe mchoro jina lenye mteja na tarehe.",
          youCanNow: "kutengeneza mchoro katika mpango wa bure wa Canva kwa ukubwa sahihi na kubadilisha kiolezo ili kifae maelezo yako ya kazi.",
          quickCheck: [
            { objective: "O3", q: "Unahitaji tangazo katika Canva. Unafanya nini kwanza?", options: ["Kupakua picha yoyote tu", "Kutafuta aina ya Flyer au kuweka ukubwa sahihi", "Kuchagua fonti tano", "Kulipia mpango"], answer: 1, why: "Kuanza na ukubwa sahihi kunakuepusha kurudia mpangilio baadaye." },
            { objective: "O3", q: "Unataka mchoro wako ubaki wa bure. Mchoro mmoja una alama ya Pro. Unafanya nini?", options: ["Kuutumia na kutumaini hakuna atakayegundua", "Kuupiga picha ya skrini", "Kuunakili kutoka tovuti nyingine", "Kuchagua mchoro wa bure badala yake"], answer: 3, why: "Vitu vya Pro vinahitaji mpango wa kulipia; kuchagua vitu vya bure kunafanya mchoro ubaki wa bure na wenye leseni sahihi." }
          ]
        },
        {
          title: "Picha, haki na ukaguzi wa mwisho",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kagua mchoro kwa haki, usomekaji, tahajia na ukweli kabla ya kuushiriki.",
          text: [
            "Si kila picha mtandaoni ni bure kutumia. Nchini Marekani, kazi inalindwa na hakimiliki (copyright) mara tu inapotengenezwa, hata bila alama ya ©. Hiyo inamaanisha huwezi kunakili picha, nembo au mchoro kutoka tovuti au biashara nyingine kwa sababu tu umeuona.",
            "Picha salama ni zile ulizopiga au kutengeneza mwenyewe, picha zilizo ndani ya Canva ambazo mpango wako unakuruhusu kutumia (soma masharti ya leseni ya Canva kwenye tovuti yake), na picha kutoka vyanzo vya bure ambavyo leseni yake inaruhusu wazi matumizi yako. Usitumie kamwe nembo ya kampuni nyingine, picha ya mtu maarufu au alama ya timu ya michezo bila ruhusa ya maandishi. Ukitumia AI kutengeneza picha, kagua sheria za zana hiyo na ukague picha kwa makosa kama mikono ya ajabu au maandishi yasiyo sahihi.",
            "Kabla ya kushiriki au kuchapisha, fanya ukaguzi wa mwisho: Je, ujumbe mkuu uko wazi ndani ya sekunde 3? Je, kila rangi ya maandishi inasomeka (tofauti)? Je, kila neno limeandikwa sawa, na tarehe, saa, mahali, bei na mawasiliano ni sahihi? Je, una haki ya kutumia kila picha na fonti? Mwombe mteja au mtu mwingine ausome pia. Unapochapisha mtandaoni, ongeza alt text (maelezo mafupi ya picha) kama tovuti inaruhusu, ili watu wanaotumia visoma-skrini wajue picha inaonyesha nini."
          ],
          steps: ["Fanya jaribio la sekunde 3 tena.", "Kagua kila rangi ya maandishi dhidi ya mandharinyuma yake.", "Soma kila neno polepole, kwa sauti, kukagua tahajia.", "Linganisha tarehe, saa, mahali, bei na mawasiliano na maelezo ya kazi.", "Orodhesha kila picha ilitoka wapi na kwa nini unaruhusiwa kuitumia.", "Mwombe mtu mwingine ausome, kisha urekebishe anachopata."],
          words: [["Hakimiliki (copyright)", "haki ya kisheria ya mtu aliyetengeneza kazi kudhibiti nakala zake."], ["Leseni", "ruhusa, yenye masharti, ya kutumia kazi ya mtu mwingine."], ["Alt text", "maelezo mafupi ya maandishi ya picha kwa watu wasioweza kuiona."], ["Kusahihisha (proofread)", "kusoma polepole ili kupata na kurekebisha makosa."]],
          slides: [
            { title: "Si kila picha ni bure", bullets: ["Kazi inalindwa na hakimiliki mara inapotengenezwa", "Kukosa alama ya © hakumaanishi ni bure", "Usinakili kamwe nembo au picha za biashara nyingine"] },
            { title: "Picha salama", bullets: ["Picha ulizopiga mwenyewe", "Picha za Canva ambazo mpango wako unakuruhusu", "Vyanzo vya bure ambavyo leseni yake inaruhusu matumizi yako"] },
            { title: "Ukaguzi wa mwisho", bullets: ["Wazi ndani ya sekunde 3?", "Tofauti inayosomeka?", "Tahajia na ukweli ni sahihi?", "Haki ya kila picha?"] },
            { title: "Kabla ya kuchapisha mtandaoni", bullets: ["Mwombe mtu mwingine ausome", "Ongeza alt text pale tovuti inaporuhusu"] }
          ],
          sources: [
            { name: "US Copyright Office: Copyright basics FAQ (maswali ya msingi kuhusu hakimiliki)", url: "https://www.copyright.gov/help/faq/faq-general.html" },
            { name: "W3C: Understanding Contrast (Minimum) (kuelewa tofauti ya chini)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" }
          ],
          tryIt: "Fanya ukaguzi wa mwisho kwenye tangazo lako la Canva. Andika orodha ya kila picha na ilikotoka. Soma kila neno kwa sauti, linganisha maelezo na maelezo yako ya kazi, na ukague rangi moja ya maandishi katika kikagua tofauti. Rekebisha kila tatizo unalopata.",
          youCanNow: "kukagua mchoro kwa haki, usomekaji, tahajia na ukweli, na kuurekebisha kabla ya kuushiriki.",
          quickCheck: [
            { objective: "O4", q: "Unapata picha nzuri kwenye tovuti ya mwokaji mikate mwingine isiyo na alama ya ©. Unaweza kuitumia kwenye tangazo la mteja wako?", options: ["Hapana; bado inalindwa, kwa hiyo tumia picha yako au yenye leseni", "Ndiyo, kwa sababu haina alama ya ©", "Ndiyo, ukiifanya ndogo zaidi", "Ndiyo, ukibadilisha rangi yake"], answer: 0, why: "Hakimiliki inalinda kazi mara inapotengenezwa, iwe na alama au la." },
            { objective: "O4", q: "Hatua ipi ni sehemu ya ukaguzi wa mwisho kabla ya kuchapisha?", options: ["Kuongeza fonti ya tatu", "Kufanya kichwa kiwe kidogo zaidi", "Kulinganisha tarehe, mahali na bei na maelezo ya kazi", "Kuondoa nafasi tupu yote"], answer: 2, why: "Maelezo yasiyo sahihi kwenye tangazo lililochapishwa yanamgharimu mteja pesa na uaminifu." }
          ]
        },
        {
          title: "Kuhifadhi faili, kupata maoni na kujenga portfolio",
          objectives: ["O5", "O3"],
          minutes: 5,
          goal: "Hifadhi mchoro katika aina sahihi ya faili na uuongeze kwenye portfolio pamoja na maelezo.",
          text: [
            "Mchoro ukishafaulu ukaguzi wa mwisho, ushiriki ili kupata maoni kabla ya kuuhifadhi kwa mara ya mwisho. Canva ina kitufe cha Share ambapo unaweza kutuma kiungo cha kutazama. Uliza swali moja lililo wazi, kama \"Kuna kitu kisicho wazi au kisicho sahihi?\", kisha ufanye mabadiliko ambayo mteja anakubali.",
            "Hifadhi katika aina sahihi ya faili. Fungua Share na uchague Download. Tumia PDF kwa kitu chochote kitakachochapishwa, kama tangazo. Tumia PNG kwa machapisho ya mitandao ya kijamii na michoro yenye maandishi, kwa sababu inaweka maandishi yakiwa makali. JPG inafaa kwa picha ambapo faili ndogo ni muhimu. Lipe faili jina lililo wazi, kwa mfano: carwash-flyer-2026-11.pdf.",
            "Tengeneza kazi inayolingana. Anza mchoro mpya wa ukubwa wa chapisho la mitandao na utumie rangi, fonti na picha zile zile, ili seti ionekane kama kampeni moja. Mara nyingi wateja wanataka tangazo na chapisho pamoja.",
            "Ongeza kazi kwenye portfolio yako. Portfolio inaweza kuwa folda, tovuti ya bure au PDF rahisi. Kwa kila kazi, andika sentensi 3 hadi 4: lengo, ilikuwa kwa ajili ya nani, maamuzi ya usanifu uliyofanya na matokeo. Onyesha kazi ya mteja tu kama mteja amekubali, na usiweke kamwe taarifa binafsi."
          ],
          steps: ["Shiriki kiungo cha kutazama na uulize swali moja lililo wazi la maoni.", "Fanya mabadiliko mliyokubaliana.", "Fungua Share, kisha Download, na uchague PDF kwa kuchapisha au PNG kwa skrini.", "Lipe faili jina lenye mradi na tarehe.", "Tengeneza chapisho la mitandao linalolingana lenye rangi na fonti zile zile.", "Andika maelezo ya portfolio ya sentensi 3 hadi 4 na uongeze faili zote mbili."],
          words: [["Kuhifadhi faili (export)", "kuhifadhi mchoro kama faili unayoweza kuchapisha, kuweka mtandaoni au kutuma."], ["PDF", "aina ya faili inayoweka mpangilio sawa kila mahali; bora kwa kuchapisha."], ["PNG", "aina ya faili ya picha inayoweka maandishi na kingo zikiwa kali; nzuri kwa skrini."], ["JPG", "aina ya faili ya picha inayofanya picha ziwe ndogo; maandishi yanaweza kuonekana na ukungu kidogo."]],
          slides: [
            { title: "Pata maoni kwanza", bullets: ["Shiriki kiungo cha kutazama", "Uliza swali moja lililo wazi", "Fanya mabadiliko ambayo mteja anakubali"] },
            { title: "Chagua aina sahihi ya faili", bullets: ["PDF kwa kuchapisha, kama matangazo", "PNG kwa machapisho ya mitandao na maandishi", "JPG kwa picha ambapo ukubwa wa faili ni muhimu"] },
            { title: "Ifanye kuwa seti", bullets: ["Mchoro mpya wa ukubwa wa chapisho la mitandao", "Rangi, fonti na picha zile zile"] },
            { title: "Maelezo ya portfolio", bullets: ["Lengo na ilikuwa kwa ajili ya nani", "Maamuzi yako ya usanifu", "Matokeo; muulize mteja kabla ya kuionyesha"] }
          ],
          tryIt: "Shiriki tangazo lako na mtu mmoja na uulize, \"Kuna kitu kisicho wazi au kisicho sahihi?\" Rekebisha anachopata. Pakua tangazo kama PDF, tengeneza chapisho la mraba linalolingana na ulipakue kama PNG, zipe faili zote mbili majina yaliyo wazi, na uandike maelezo yako ya portfolio ya sentensi 3 hadi 4.",
          youCanNow: "kupata maoni, kuhifadhi mchoro katika aina sahihi ya faili, kutengeneza kazi inayolingana na kuiongeza kwenye portfolio pamoja na maelezo.",
          quickCheck: [
            { objective: "O5", q: "Tangazo lako linapelekwa kwenye duka la uchapishaji. Aina gani ya faili ni bora?", options: ["Picha ya skrini", "JPG ya picha", "PNG iliyotengenezwa kwa simu", "PDF"], answer: 3, why: "PDF inaweka mpangilio sawa na ndiyo chaguo la kawaida kwa kuchapisha." },
            { objective: "O5", q: "Nini kinapaswa kuwa katika maelezo ya portfolio?", options: ["Anwani ya nyumbani ya mteja", "Lengo, ilikuwa kwa ajili ya nani, maamuzi yako ya usanifu na matokeo", "Jina la faili tu", "Nywila yako ya Canva"], answer: 1, why: "Hadithi fupi ya lengo, maamuzi na matokeo inawaonyesha waajiri jinsi unavyofikiri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutengeneza katika Canva",
        questions: [
          { objective: "O3", q: "Kiolezo (template) katika Canva ni nini?", options: ["Usajili wa kulipia", "Aina ya faili kwa kuchapisha", "Mchoro uliotengenezwa tayari unaoubadilisha ili uwe wako", "Leseni ya hakimiliki"], answer: 2, why: "Violezo ni mahali pa kuanzia; unabadilisha maneno, rangi, fonti na picha." },
          { objective: "O3", q: "Mwajiri anaangalia mchoro wako na anatambua ni kiolezo ambacho hakikubadilishwa. Ulipaswa kufanya nini?", options: ["Kubadilisha maandishi, rangi, fonti na picha zifae maelezo ya kazi", "Kutumia vitu vingi zaidi vya Pro", "Kuongeza fonti ya tatu", "Kuuhifadhi kama JPG"], answer: 0, why: "Kufanya kiolezo kiwe chako kunaonyesha ujuzi halisi wa usanifu." },
          { objective: "O4", q: "Picha ipi ni salama kutumia kwenye tangazo la mteja?", options: ["Nembo ya timu ya michezo kutoka tovuti yake", "Picha uliyopiga mwenyewe", "Picha ya mtu maarufu kutoka tovuti ya habari", "Picha ya bidhaa ya mshindani"], answer: 1, why: "Unamiliki picha zako mwenyewe; nyingine zinahitaji ruhusa ya maandishi." },
          { objective: "O4", q: "Maandishi ya kijivu hafifu juu ya mandharinyuma nyeupe ni magumu kusoma. Hii inavunja mwongozo upi?", options: ["Mpangilio wa umuhimu", "Urudiaji", "Kutoa majina ya faili", "Tofauti inayosomeka"], answer: 3, why: "Maandishi yanahitaji tofauti ya kutosha na mandharinyuma yake ili yasomeke." },
          { objective: "O5", q: "Aina gani ya faili ni bora kwa chapisho la mitandao ya kijamii lenye maneno?", options: ["PNG", "PDF kwa kuchapisha", "Hati ya Word", "Picha ya skrini yako"], answer: 0, why: "PNG inaweka maandishi na kingo zikiwa kali kwenye skrini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Usanifu wa Michoro kwa Canva",
    questions: [
      { objective: "O1", q: "Wasanifu wa michoro wanafanya nini?", options: ["Kutengeneza kompyuta", "Kuandika sheria kuhusu picha", "Kutumia maneno, picha, rangi na mpangilio kushiriki ujumbe", "Kuuza printa"], answer: 2, why: "Usanifu wa michoro ni mawasiliano kwa njia ya kuona." },
      { objective: "O1", q: "Waajiri wanaangalia nini kwa makini wanapoajiri wasanifu?", options: ["Portfolio ya kazi zako bora", "Idadi ya wafuasi wako kwenye mitandao ya kijamii", "Idadi ya fonti unazomiliki", "Kasi yako ya kuandika kwa kibodi"], answer: 0, why: "BLS inasema portfolio ni muhimu kwa kazi za usanifu." },
      { objective: "O1", q: "Kipi SI moja ya sehemu nne za maelezo ya kazi ya usanifu?", options: ["Hadhira", "Ujumbe mkuu", "Ukubwa", "Rangi unayoipenda"], answer: 3, why: "Maelezo ya kazi yanahusu hadhira ya mteja, ujumbe, aina ya kazi na ukubwa." },
      { objective: "O1", q: "Shirika lisilo la faida linaomba \"kitu kwa ajili ya uchangishaji wa chakula\". Hatua yako bora inayofuata ni ipi?", options: ["Kusanifu nembo", "Kuuliza ni kwa ajili ya nani, ujumbe mkuu, aina na ukubwa, kisha kuandika maelezo ya kazi", "Kunakili tangazo la mwaka jana la kikundi kingine", "Kuchagua kiolezo chochote tu"], answer: 1, why: "Maelezo ya kazi yanageuza ombi lisilo wazi kuwa mpango ulio wazi." },
      { objective: "O2", q: "Kufanya jina la tukio kuwa maandishi makubwa zaidi kwenye ukurasa kunatumia kanuni ipi?", options: ["Urudiaji", "Mpangilio wa umuhimu", "Nafasi tupu", "Upangaji kwa mstari"], answer: 1, why: "Mpangilio wa umuhimu unaonyesha kilicho muhimu zaidi kwanza." },
      { objective: "O2", q: "Nafasi tupu (white space) ni nini?", options: ["Rangi yoyote nyeupe", "Huduma ya kulipia ya Canva", "Kosa la uchapishaji", "Nafasi tupu kuzunguka na kati ya vitu"], answer: 3, why: "Nafasi tupu inapumzisha jicho na kufanya ujumbe uonekane wazi." },
      { objective: "O2", q: "Jaribio la sekunde 3 ni nini?", options: ["Kuonyesha mchoro kwa sekunde 3 na kuuliza ulihusu nini", "Kuhifadhi mchoro kwa sekunde 3", "Kutumia fonti 3", "Kuchapisha mchoro mara 3"], answer: 0, why: "Watu wasipoweza kusema ujumbe baada ya sekunde 3, mpangilio wa umuhimu unahitaji kazi." },
      { objective: "O2", q: "Seti rahisi ya rangi kwa tangazo kwa kawaida ni:", options: ["Kila rangi ya upinde wa mvua", "Rangi moja kwa kila mstari wa maandishi", "Rangi kuu 2 au 3 pamoja na rangi ya kawaida", "Nyekundu na kijani tu"], answer: 2, why: "Seti ndogo ya rangi inaonekana safi na ni rahisi kuirudia." },
      { objective: "O3", q: "Katika Canva, unaanzaje tangazo kwa ukubwa sahihi?", options: ["Kutafuta aina ya Flyer au kuweka ukubwa wako mwenyewe", "Kuanza na ukurasa wowote na kuuvuta", "Kulitengeneza kama chapisho la mitandao na kulichapisha", "Kuchora kingo kwa mkono"], answer: 0, why: "Kuanza na ukubwa sahihi kunaepusha kurudia mpangilio." },
      { objective: "O3", q: "Kipi ni kweli kuhusu mpango wa bure wa Canva?", options: ["Kila kiolezo na picha ni bure", "Lazima ulipe kabla ya kutengeneza mchoro wowote", "Baadhi ya vitu vina alama ya Pro au premium na vinahitaji mpango wa kulipia", "Unafanya kazi kwenye simu tu"], answer: 2, why: "Mpango wa bure una vitu vingi vya bure, lakini baadhi vinahitaji mpango wa kulipia." },
      { objective: "O3", q: "Michoro mingi rahisi inapaswa kutumia fonti ngapi?", options: ["Moja kwa kila sentensi", "Zisizozidi mbili", "Angalau tano", "Fonti za mapambo tu"], answer: 1, why: "Fonti ya vichwa na fonti ya maandishi ya kawaida zinafanya mchoro usomeke." },
      { objective: "O3", q: "Unaongeza picha zako mwenyewe wapi katika Canva?", options: ["Kwenye menyu ya Download", "Kwenye jina la faili", "Kwenye kikagua tofauti", "Kwa kuzipakia kutoka paneli ya pembeni"], answer: 3, why: "Paneli ya pembeni ndipo unapoongeza maandishi, michoro na picha unazopakia." },
      { objective: "O4", q: "Picha ya tovuti haina alama ya ©. Kipi ni kweli?", options: ["Ni bure kwa mtu yeyote", "Ni mali ya Canva", "Ni bure ukiikata", "Bado inaweza kulindwa na hakimiliki"], answer: 3, why: "Nchini Marekani, kazi inalindwa mara inapotengenezwa, iwe na alama au bila alama." },
      { objective: "O4", q: "WCAG inaomba uwiano gani wa tofauti kwa maandishi ya ukubwa wa kawaida?", options: ["1 kwa 1", "Angalau 4.5 kwa 1", "Angalau 2 kwa 1", "10 kwa 1 kamili"], answer: 1, why: "4.5 kwa 1 ndio kiwango cha chini kwa maandishi ya kawaida; maandishi makubwa yanahitaji 3 kwa 1." },
      { objective: "O4", q: "Alt text ni nini?", options: ["Fonti ya pili", "Aina ya faili", "Maelezo mafupi ya picha kwa watu wasioweza kuiona", "Kiolezo cha Canva"], answer: 2, why: "Alt text inaruhusu visoma-skrini kueleza picha." },
      { objective: "O4", q: "Kabla ya kuchapisha matangazo 500, ukaguzi muhimu zaidi ni upi?", options: ["Tahajia, tarehe, mahali, bei na mawasiliano yanalingana na maelezo ya kazi", "Kwamba ulitumia kila rangi", "Kwamba faili ni kubwa kadiri iwezekanavyo", "Kwamba kiolezo hakikubadilishwa"], answer: 0, why: "Makosa kwenye matangazo yaliyochapishwa ni ghali na ni magumu kurekebisha." },
      { objective: "O5", q: "Aina gani ya faili ni bora kwa tangazo litakalochapishwa?", options: ["JPG", "Picha ya skrini", "PDF", "Faili ya maandishi"], answer: 2, why: "PDF inaweka mpangilio sawa na ndiyo ya kawaida kwa kuchapisha." },
      { objective: "O5", q: "Jina lipi la faili liko wazi zaidi?", options: ["carwash-flyer-2026-11.pdf", "final-final-2.pdf", "untitled.pdf", "aaa.pdf"], answer: 0, why: "Linataja mradi na tarehe ili wewe na mteja muweze kulipata." },
      { objective: "O5", q: "Kabla ya kuweka tangazo la mteja kwenye portfolio yako, unapaswa:", options: ["Kuongeza namba yake ya simu ya binafsi", "Kuondoa jina lako", "Kulibadilisha kuwa JPG", "Kumuuliza mteja kama unaweza kulionyesha"], answer: 3, why: "Kuonyesha kazi ya mteja kunahitaji ruhusa ya mteja." },
      { objective: "O5", q: "Kwa nini utengeneze chapisho la mitandao linalolingana na tangazo?", options: ["Canva inalazimisha", "Mara nyingi wateja wanataka seti inayoonekana kama kampeni moja", "Linabadilisha aina ya faili", "Linaondoa hakimiliki"], answer: 1, why: "Seti inayolingana yenye rangi na fonti zile zile inajenga utambulisho." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [2, 4, 5, 9, 12, 13, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maelezo ya kazi", objective: "O1", notYet: "Maelezo ya kazi yanakosa hadhira, ujumbe, aina ya kazi au ukubwa.", meets: "Aya moja fupi inataja sehemu zote nne.", exceeds: "Pia yanaorodhesha maelezo ya lazima na alimsomea mteja." },
      { name: "Mpangilio", objective: "O2", notYet: "Mtazamaji hawezi kusema ujumbe mkuu baada ya sekunde 3, au mpangilio unaonekana umejaa sana.", meets: "Ujumbe mkuu uko wazi kwanza, vitu vimepangwa kwa mstari na kuna nafasi tupu.", exceeds: "Tangazo na chapisho vinatumia mawazo yale yale ya mpangilio hivyo vinaonekana kama seti moja." },
      { name: "Imetengenezwa katika Canva", objective: "O3", notYet: "Ukubwa si sahihi, zaidi ya fonti 2, kitu cha kulipia, au kiolezo ambacho hakikubadilishwa.", meets: "Ukubwa sahihi, fonti zisizozidi 2 na rangi kuu zisizozidi 3, vitu vya bure tu, na kiolezo kimefanywa kuwa chake.", exceeds: "Alianza na ukurasa mtupu au alibadilisha kiolezo sana hadi ni wazi kuwa ni usanifu wake mwenyewe." },
      { name: "Imekaguliwa", objective: "O4", notYet: "Kosa la tahajia au la maelezo, maandishi yasiyosomeka, au picha isiyo na haki iliyo wazi ya kuitumia.", meets: "Hakuna makosa, maandishi yanafikia 4.5 kwa 1, na kila picha imeorodheshwa pamoja na ilikotoka.", exceeds: "Mtu mwingine aliisahihisha na alt text imeandikwa kwa ajili ya chapisho." },
      { name: "Imehifadhiwa na kuelezwa", objective: "O5", notYet: "Aina ya faili si sahihi, jina la faili halieleweki, au hakuna maelezo.", meets: "Tangazo kama PDF, chapisho kama PNG, majina ya faili yaliyo wazi, na maelezo ya sentensi 3 hadi 4.", exceeds: "Maelezo yanaeleza kwa nini kila uamuzi wa usanifu unafaa hadhira, na mteja alikubali kazi ionyeshwe." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoongeza kazi kwenye portfolio na kuitumia katika maombi ya ajira, mafunzo kazini (internship) au kazi huru ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kutengeneza mchoro wa kulipwa au wa kujitolea kwa biashara, timu au shirika lisilo la faida ndani ya siku 30",
      "Mashirika washirika na biashara ndogo zinaripoti kutumia matangazo na machapisho yaliyotengenezwa na wanafunzi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti (rahisi zaidi) au simu janja yenye app ya Canva",
      "Akaunti ya bure ya Canva (anwani ya barua pepe inahitajika kujisajili)",
      "Kikagua tofauti cha bure, kama kile cha WebAIM",
      "Karatasi na kalamu kwa michoro ya mpangilio na maelezo ya kazi",
      "Kamera ya simu kwa kupiga picha zako mwenyewe",
      "Kama saa 2 hadi 3 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; onyesha jaribio la sekunde 3 na jinsi ya kubadilisha kiolezo kwenye skrini ya pamoja.",
      "Inapowezekana, mpe kila mwanafunzi mteja halisi wa mtaani (shirika lisilo la faida, klabu ya shule au biashara ndogo); inafanya maelezo ya kazi na portfolio kuwa halisi.",
      "Usiwaruhusu wanafunzi kunakili nembo au picha kutoka mtandaoni; waambie waorodheshe chanzo cha kila picha.",
      "Kama shule yako au shirika lako lisilo la faida huenda likastahili mipango ya Canva ya Education au Nonprofits, kagua ustahiki kwenye tovuti ya Canva kabla ya kozi, lakini panga kila kazi ifanye kazi kwenye mpango wa bure.",
      "Pima kazi ya mwisho kwa rubriki na fanyeni maonyesho mafupi (gallery walk) ambapo wanafunzi wanatoa maoni moja ya upole na moja yenye manufaa kwa kila kazi."
    ]
  }
};
