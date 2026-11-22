"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-beginner-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-beginner-ai-tools-sw",
  lang: "sw",
  translationOf: "underserved-beginner-ai-tools",
  category: "Undeserved Community",
  name: "Zana za AI Rahisi kwa Wanaoanza",
  skills: "Kuchagua zana sahihi ya AI ya bure, Kuongea na AI kwa sauti yako, Kutafsiri kwa kamera ya simu yako, Kutengeneza tangazo rahisi kwa Canva, Kuandika jumbe fupi kwa msaidizi wa AI",
  outcome: "kuchagua zana sahihi ya AI ya bure kwa kazi ya kila siku na kuitumia: kuongea na msaidizi kwa sauti yako, kutafsiri bango au barua kwa kamera ya simu yako, na kutengeneza tangazo rahisi la ukurasa mmoja kwa ajili ya tukio la jamii.",
  about: [
    "Kuna zana nyingi za AI za bure, na ni vigumu kujua uanzie wapi. Kozi hii inakuonyesha zana chache rahisi kwa wanaoanza ambazo hazigharimu chochote na zinafanya kazi kwenye simu au kompyuta ya maktaba.",
    "Utatumia sauti yako badala ya kuandika, utatafsiri maneno kwa kamera ya simu yako, utaandika jumbe fupi kwa msaidizi wa AI, na utatengeneza tangazo rahisi kwa toleo la bure la Canva.",
    "Kila somo linachukua kama dakika tano. Fanya kazi ya \"Jaribu sasa\" baada ya kila somo. Jaribio la maarifa linamaliza kila sura, na mtihani wa maswali 20 unamaliza kozi."
  ],
  finalTask: "Tengeneza tangazo la ukurasa mmoja kwa tukio la jamii la kweli au la kubuni, kama ukusanyaji wa chakula, usafi wa mtaa au uchangishaji wa pesa kwa shule. Tumia msaidizi wa AI kuandika kichwa kifupi na mistari mitatu ya maelezo, tengeneza tangazo kwa toleo la bure la Canva, na tumia zana ya kutafsiri kuweka maneno hayo hayo katika lugha ya pili wanayoongea majirani zako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika jamii zisizohudumiwa vya kutosha ambao ni wapya kwa zana za AI: wazazi, wazee, wajitolea wa jamii, watu wasio na kompyuta nyumbani, na watu wanaoongea lugha nyingine isiyo Kiingereza nyumbani.",
    startingPoint: "Wanatumia simu kupiga simu, kutuma ujumbe mfupi na labda mitandao ya kijamii. Wamesikia kuhusu AI lakini hawajui zana gani za bure zipo wala kila moja ni ya nini. Baadhi wanaona kuandika kwenye simu ni polepole au kugumu.",
    gap: "Zana za bure zinaweza kuandika jumbe, kutafsiri mabango na barua, na kutengeneza matangazo, lakini wanafunzi hawajui waanzie wapi. Kulinganisha zana sahihi ya bure na kazi kunaokoa muda na pesa na kunawasaidia kushiriki habari na majirani kwa zaidi ya lugha moja.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja au kompyuta ya maktaba",
      "Gharama: matoleo ya bure ya zana tu",
      "Tafsiri ya mashine si kamili: karatasi muhimu za matibabu au za kisheria zinahitaji mkalimani",
      "Faragha: toka (sign out) kwenye kompyuta za pamoja na usiweke taarifa binafsi katika maombi (prompts)"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Uwezeshaji wa Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi ya kila siku", action: "kuchagua zana ya bure inayoifaa: msaidizi wa mazungumzo, app ya kutafsiri au zana ya kubuni", standard: "ukilinganisha angalau kazi 4 kati ya 5 na aina sahihi ya zana" },
    { id: "O2", condition: "Ukitumia simu au app ya msaidizi wa AI", action: "kuuliza swali kwa kuongea na kurekebisha maneno yoyote ambayo uandishi kwa sauti uliyakosea", standard: "kabla ya kuutuma" },
    { id: "O3", condition: "Ukipewa bango, lebo au tangazo lililochapishwa kwa lugha nyingine", action: "kulitafsiri kwa kamera ya simu na kuamua lini kuomba mkalimani au msomaji anayeijua lugha vizuri", standard: "ukitumia mkalimani kwa karatasi za matibabu au za kisheria" },
    { id: "O4", condition: "Ukipewa ujumbe unaohitaji kutuma", action: "kumwomba msaidizi wa AI ujumbe mfupi ukitaja msomaji, maudhui, mtindo wa sauti na urefu, kisha kuuhariri na kukagua kila ukweli", standard: "ili usikike kama wewe na kila tarehe na mahali viwe sahihi" },
    { id: "O5", condition: "Ukitumia toleo la bure la Canva", action: "kutengeneza tangazo la ukurasa mmoja kutoka kwenye kiolezo chenye kichwa, nini, lini na wapi, na picha moja", standard: "likiwa limepakuliwa au kushirikiwa, na ukiwa umetoka (sign out) kwenye kompyuta ya pamoja" }
  ],
  chapters: [
    {
      name: "Sura 1: Sanduku lako la zana za AI za bure",
      lessons: [
        {
          title: "Kuchagua zana sahihi ya bure kwa kazi",
          objectives: ["O1"],
          minutes: 4,
          goal: "Linganisha kazi ya kila siku na zana ya AI ya bure inayoifaa.",
          text: [
            "Fikiria zana za AI kama vifaa ndani ya droo ya jikoni. Kila kimoja ni hodari kwa kazi tofauti.",
            "Msaidizi wa mazungumzo wa AI (ChatGPT, Microsoft Copilot au Google Gemini) ni hodari wa kuandika, kueleza na kupanga. App ya kutafsiri (kama Google Translate) ni hodari kwa lugha nyingine. Zana ya kubuni (kama Canva, yenye toleo la bure) ni hodari kwa matangazo na kadi.",
            "Anza na kazi, si na zana. Jiulize: je, nahitaji maneno yaandikwe, maneno yatafsiriwe, au kitu kinachopendeza kuchapisha au kushiriki?"
          ],
          steps: ["Andika kazi unayohitaji kufanya.", "Amua: unahitaji maneno yaandikwe, yatafsiriwe, au yabuniwe?", "Chagua zana inayolingana: msaidizi wa mazungumzo, app ya kutafsiri au zana ya kubuni.", "Tumia toleo la bure kwanza."],
          words: [["Msaidizi wa mazungumzo", "programu ya AI unayoiandikia au kuongea nayo, nayo inakuandikia majibu."], ["Toleo la bure", "kiwango cha zana kisicho na gharama; zana nyingine pia zinauza vipengele vya ziada."]],
          slides: [
            { title: "Zana ni kama droo ya jikoni", bullets: ["Kila zana ni hodari kwa kazi tofauti", "Anza na kazi, si na zana"] },
            { title: "Zana tatu za bure za kuanza", bullets: ["Msaidizi wa mazungumzo: kuandika, kueleza, kupanga", "App ya kutafsiri: lugha nyingine", "Canva ya bure: matangazo na kadi"] },
            { title: "Jiulize", bullets: ["Je, nahitaji maneno yaandikwe?", "Maneno yatafsiriwe?", "Kitu kilichobuniwa kuchapisha au kushiriki?"] }
          ],
          tryIt: "Andika kazi tatu ulizo nazo mwezi huu. Karibu na kila moja, andika aina ya zana inayoifaa: msaidizi wa mazungumzo, app ya kutafsiri au zana ya kubuni.",
          youCanNow: "kulinganisha kazi ya kila siku na zana sahihi ya AI ya bure.",
          quickCheck: [
            { objective: "O1", q: "Aina gani ya zana ni bora kwa kuweka barua katika lugha nyingine?", options: ["App ya kutafsiri", "Zana ya kubuni", "Programu ya kuhariri picha", "App ya kalenda"], answer: 0, why: "App ya kutafsiri imetengenezwa kubadilisha maneno kuwa lugha nyingine." },
            { objective: "O1", q: "Unahitaji kadi ya shukrani kwa wajitolea inayopendeza kuchapisha. Unafungua nini kwanza?", options: ["App ya kutafsiri", "Zana ya kubuni kama Canva", "Kikokotoo", "Uandishi kwa sauti"], answer: 1, why: "Zana ya kubuni imetengenezwa kwa kadi na matangazo yanayopendeza kuchapisha au kushiriki." }
          ]
        },
        {
          title: "Kuongea na AI kwa sauti yako",
          objectives: ["O2"],
          minutes: 5,
          goal: "Muulize msaidizi wa AI swali kwa kuongea badala ya kuandika.",
          text: [
            "Kama kuandika ni polepole au kugumu kwako, unaweza kuongea badala yake. Apps nyingi za wasaidizi wa AI zina kitufe cha maikrofoni. Kibonyeze, sema swali lako, na app inageuza maneno yako kuwa maandishi.",
            "Simu pia zina uandishi kwa sauti ndani ya kibodi. Tafuta maikrofoni ndogo kwenye kibodi unapoandika ujumbe.",
            "Ongea wazi na polepole kidogo kuliko kawaida. Sema unachohitaji, kama: \"Nisaidie kuandika barua fupi kwa mwalimu wa mwanangu kusema hatafika shuleni Ijumaa kwa sababu ya kumwona daktari.\" Soma maneno kabla ya kuyatuma, kwa sababu uandishi kwa sauti unaweza kusikia vibaya."
          ],
          steps: ["Fungua app ya msaidizi wa AI au ujumbe kwenye simu yako.", "Tafuta kitufe cha maikrofoni.", "Kibonyeze na useme swali lako kwa uwazi.", "Soma maneno iliyosikia, rekebisha makosa yoyote, kisha tuma."],
          words: [["Uandishi kwa sauti", "kipengele cha simu kinachogeuza unachosema kuwa maneno yaliyoandikwa."], ["Kitufe cha maikrofoni", "kitufe kidogo chenye picha ya maikrofoni kinachoruhusu kifaa kusikiliza."]],
          slides: [
            { title: "Ongea badala ya kuandika", bullets: ["Apps nyingi za AI zina kitufe cha maikrofoni", "Simu zina uandishi kwa sauti kwenye kibodi"] },
            { title: "Jinsi ya kuongea nayo", bullets: ["Ongea wazi, polepole kidogo", "Sema unachohitaji na jinsi unavyokitaka"] },
            { title: "Kagua kabla ya kutuma", bullets: ["Uandishi kwa sauti unaweza kusikia maneno vibaya", "Soma, rekebisha, kisha tuma"] }
          ],
          tryIt: "Tumia kitufe cha maikrofoni kumwomba msaidizi wa AI aandike barua ya sentensi mbili kwa mwalimu, bosi au jirani. Isome na urekebishe makosa yoyote.",
          youCanNow: "kumwomba msaidizi wa AI msaada kwa kutumia sauti yako na kukagua alichosikia.",
          quickCheck: [
            { objective: "O2", q: "Mara nyingi unapata uandishi kwa sauti wapi kwenye simu?", options: ["Katika mipangilio ya kamera", "Katika menyu ya betri", "Maikrofoni ndogo kwenye kibodi", "Katika anwani za simu"], answer: 2, why: "Kibodi za simu mara nyingi zina kitufe kidogo cha maikrofoni kwa uandishi kwa sauti." },
            { objective: "O2", q: "Ulisema barua na app ikaandika \"by bread\" badala ya \"buy bread\". Unafanya nini?", options: ["Kuituma hivyo hivyo", "Kufuta app", "Kuanza upya kwenye karatasi", "Kurekebisha maneno kabla ya kutuma"], answer: 3, why: "Uandishi kwa sauti unaweza kusikia vibaya, kwa hiyo unasoma na kurekebisha maneno kabla ya kutuma." }
          ]
        },
        {
          title: "Kutafsiri kwa kamera ya simu yako",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tafsiri bango, lebo au barua iliyochapishwa kwa kuelekeza kamera ya simu yako kwake.",
          text: [
            "Apps za bure kama Google Translate zinaweza kusoma maneno yaliyochapishwa kupitia kamera ya simu yako na kuyaonyesha katika lugha nyingine. Hii inasaidia kwa mabango, lebo za dawa, matangazo ya shule na fomu zilizoandikwa kwa lugha usiyoisoma vizuri.",
            "Ndani ya app, chagua lugha mbili (iliyo kwenye karatasi na unayoitaka), chagua chaguo la kamera, na uelekeze simu yako kwenye maneno.",
            "Tafsiri ya mashine inasaidia lakini si kamili. Kwa dawa, karatasi za kisheria au chochote muhimu, omba mkalimani. Hospitali nyingi, kliniki na ofisi za serikali zinatoa mkalimani bila malipo; uliza mapokezi."
          ],
          steps: ["Sakinisha app ya kutafsiri ya bure kutoka duka rasmi la apps.", "Chagua lugha iliyo kwenye karatasi na lugha unayoitaka.", "Chagua chaguo la kamera na uelekeze simu yako kwenye maneno.", "Kwa karatasi muhimu, omba ofisi ikupe mkalimani."],
          words: [["Kutafsiri", "kubadilisha maneno kutoka lugha moja kwenda nyingine."], ["Mkalimani", "mtu aliyefunzwa anayetafsiri mazungumzo kati ya lugha mbili."]],
          slides: [
            { title: "Kamera yako inaweza kutafsiri", bullets: ["Mabango, lebo, matangazo ya shule, fomu", "Apps za bure kama Google Translate"] },
            { title: "Jinsi ya kufanya", bullets: ["Chagua lugha mbili", "Chagua chaguo la kamera", "Elekeza simu yako kwenye maneno"] },
            { title: "Karatasi muhimu", bullets: ["Tafsiri ya mashine si kamili", "Omba ofisi ikupe mkalimani", "Kliniki na ofisi nyingi zinatoa mkalimani bure"] }
          ],
          tryIt: "Elekeza kamera ya app ya kutafsiri kwenye lebo au bango lililochapishwa nyumbani kwako (boksi la chakula linafaa). Litafsiri kwenda lugha nyingine na kurudi.",
          youCanNow: "kutafsiri maneno yaliyochapishwa kwa kamera ya simu yako, na kujua lini kuomba mtu badala yake.",
          quickCheck: [
            { objective: "O3", q: "Kipi ni kweli kuhusu tafsiri ya mashine?", options: ["Inasaidia lakini si kamili", "Ni sahihi kabisa kila wakati", "Inafanya kazi kwa Kiingereza tu", "Inahitaji akaunti ya kulipia"], answer: 0, why: "Tafsiri ya bure ni msaada mkubwa lakini inaweza kukosea." },
            { objective: "O3", q: "Lebo ya dawa yako iko katika lugha usiyoisoma vizuri. Hatua gani ni salama zaidi?", options: ["Kubahatisha kutokana na picha", "Kuomba duka la dawa au kliniki mkalimani", "Kutumia tafsiri ya kamera tu", "Kumuuliza mgeni mtandaoni"], answer: 1, why: "Kwa dawa na karatasi za kisheria, mkalimani aliyefunzwa ndiye msaada salama zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Sanduku lako la zana za AI za bure",
        questions: [
          { objective: "O1", q: "Unahitaji tangazo kwa mauzo ya keki ya shule. Aina gani ya zana inafaa zaidi?", options: ["App ya kutafsiri", "Zana ya kubuni kama Canva", "Kikokotoo", "App ya ramani"], answer: 1, why: "Zana za kubuni zimetengenezwa kwa matangazo na kadi." },
          { objective: "O2", q: "Kuandika ni kugumu kwako. Unawezaje bado kumuuliza msaidizi wa AI swali?", options: ["Huwezi", "Kulipia darasa la kibodi kwanza", "Kutumia kitufe cha maikrofoni na kuongea", "Kumwomba mtu mwingine aandike nywila yako"], answer: 2, why: "Kuingiza kwa sauti kunakuruhusu kuongea badala ya kuandika." },
          { objective: "O2", q: "Kwa nini usome kile uandishi kwa sauti ulichoandika kabla ya kutuma?", options: ["Unaweza kusikia maneno vibaya", "Huongeza anwani yako kila wakati", "Unatoza pesa", "Unafuta ujumbe wako"], answer: 0, why: "Uandishi kwa sauti unaweza kukosea maneno." },
          { objective: "O3", q: "Unataka kusoma bango lililo katika lugha nyingine. Unatumia nini?", options: ["Zana ya kubuni", "App ya muziki", "Tochi", "App ya kutafsiri yenye chaguo la kamera"], answer: 3, why: "Chaguo la kamera linasoma na kutafsiri maneno yaliyochapishwa." },
          { objective: "O3", q: "Unahitaji kuelewa maelekezo ya daktari wako katika lugha nyingine. Nini ni bora?", options: ["Kuomba kliniki mkalimani", "Kubahatisha", "Kutumia tafsiri ya simu tu", "Kupuuza maelekezo"], answer: 0, why: "Kwa dawa na karatasi muhimu, mkalimani aliyefunzwa ndiye salama zaidi." }
        ]
      }
    },
    {
      name: "Sura 2: Kutengeneza vitu kwa AI",
      lessons: [
        {
          title: "Kuandika jumbe fupi kwa msaidizi wa AI",
          objectives: ["O4"],
          minutes: 4,
          goal: "Mfanye msaidizi wa AI aandike ujumbe mfupi, ulio wazi, kwa mtindo wa sauti unaoutaka.",
          text: [
            "Msaidizi wa AI anaweza kukuandikia jumbe fupi: kikumbusho kwa kikundi chako cha jamii, barua kwa mwenye nyumba, au shukrani kwa mjitolea.",
            "Mwambie ujumbe ni wa nani, lazima useme nini, na mtindo wa sauti: wa kirafiki, wa adabu, au thabiti. Mwambie urefu: \"sentensi tatu\" au \"chini ya maneno 50\".",
            "Kisha uufanye kuwa wako. Badilisha maneno yasiyosikika kama wewe, na ukague majina, tarehe na mahali wewe mwenyewe."
          ],
          steps: ["Sema ujumbe ni wa nani.", "Sema lazima uwe na nini: tarehe, saa, mahali, cha kuleta.", "Sema mtindo wa sauti na urefu.", "Uhariri ili usikike kama wewe, na ukague kila ukweli."],
          words: [["Mtindo wa sauti", "jinsi ujumbe unavyosikika: wa kirafiki, wa adabu, wa makini au thabiti."]],
          slides: [
            { title: "Jumbe fupi ambazo AI inaweza kuandika", bullets: ["Vikumbusho kwa kikundi chako", "Barua kwa mwenye nyumba au shule", "Shukrani kwa wajitolea"] },
            { title: "Mwambie mambo manne", bullets: ["Ni wa nani", "Lazima useme nini", "Mtindo wa sauti", "Urefu"] },
            { title: "Ufanye kuwa wako", bullets: ["Badilisha maneno yasiyosikika kama wewe", "Kagua majina, tarehe na mahali"] }
          ],
          tryIt: "Muulize msaidizi wa AI: \"Andika kikumbusho cha kirafiki cha sentensi tatu kwa majirani zangu kuhusu usafi wa mtaa Jumamosi saa 3 asubuhi (9 am). Leteni glavu.\" Kisha badilisha mstari mmoja ili usikike kama wewe.",
          youCanNow: "kumfanya msaidizi wa AI aandike ujumbe mfupi wenye mtindo wa sauti na urefu sahihi, kisha kuufanya kuwa wako.",
          quickCheck: [
            { objective: "O4", q: "\"Mtindo wa sauti\" una maana gani katika ujumbe?", options: ["Urefu wake", "Ni wa nani", "Jinsi unavyosikika, kama wa kirafiki au thabiti", "Tarehe unayotumwa"], answer: 2, why: "Mtindo wa sauti ni jinsi ujumbe unavyosikika kwa msomaji." },
            { objective: "O4", q: "Kikumbusho cha AI kinasema usafi ni Jumapili, lakini ni Jumamosi. Unafanya nini?", options: ["Kukituma; AI inajua zaidi", "Kuwaomba wote waje siku zote mbili", "Kufuta ujumbe wote", "Kubadilisha kuwa Jumamosi kabla ya kutuma"], answer: 3, why: "Unakagua kila ukweli wewe mwenyewe na kurekebisha kabla ya kutuma." }
          ]
        },
        {
          title: "Kubuni tangazo rahisi kwa Canva",
          objectives: ["O5"],
          minutes: 6,
          goal: "Tengeneza tangazo la ukurasa mmoja kwa toleo la bure la Canva.",
          text: [
            "Canva ni tovuti na app ya kubuni yenye toleo la bure. Ina violezo vilivyo tayari, kwa hiyo huhitaji kuwa msanii. Unaweza kuitumia kwenye canva.com kwenye kompyuta ya maktaba au kwenye app yake kwenye simu yako.",
            "Tafuta kiolezo ndani ya Canva, kama \"flyer\" au \"event flyer\". Bonyeza kimoja unachokipenda, kisha bonyeza maneno yake uyabadilishe kwa yako. Fanya iwe rahisi: kichwa kikubwa, mistari mitatu mifupi (nini, lini, wapi), na picha moja.",
            "Ukimaliza, lipakue ili kulichapisha, au lishiriki kwa ujumbe mfupi au barua pepe. Canva inakuomba ufungue akaunti ya bure; kwenye kompyuta ya pamoja, toka (sign out) ukimaliza."
          ],
          steps: ["Nenda canva.com au fungua app ya Canva na ufungue akaunti ya bure.", "Tafuta kiolezo cha tangazo na uchague kimoja.", "Bonyeza kila sehemu ya maandishi na uandike maneno yako.", "Weka kichwa, mistari mitatu mifupi na picha moja tu.", "Lipakue au lishiriki, kisha toka kwenye kompyuta ya pamoja."],
          words: [["Kiolezo", "muundo ulio tayari unaoujaza kwa maneno na picha zako (kwa Kiingereza: template)."], ["Kupakua", "kuhifadhi nakala ya faili kwenye kifaa chako (kwa Kiingereza: download)."]],
          slides: [
            { title: "Canva: zana ya kubuni ya bure", bullets: ["Tovuti canva.com au app ya Canva", "Violezo vilivyo tayari", "Huhitaji ujuzi wa sanaa"] },
            { title: "Tengeneza tangazo lako", bullets: ["Tafuta kiolezo cha tangazo", "Bonyeza maneno na uandike yako", "Kichwa + nini, lini, wapi + picha moja"] },
            { title: "Maliza na ushiriki", bullets: ["Pakua ili kuchapisha", "Shiriki kwa ujumbe mfupi au barua pepe", "Toka (sign out) kwenye kompyuta ya pamoja"] }
          ],
          tryIt: "Fungua Canva, chagua kiolezo cha tangazo, na ubadilishe maneno kwa kikumbusho ulichoandika katika Somo la 4. Lipakue au lihifadhi kwenye akaunti yako.",
          youCanNow: "kutengeneza tangazo rahisi na lililo wazi kwa kutumia kiolezo cha bure cha Canva.",
          quickCheck: [
            { objective: "O5", q: "Kiolezo katika Canva ni nini?", options: ["Muundo ulio tayari unaoujaza kwa maneno yako", "Nyongeza ya kulipia", "Aina ya printa", "Kichujio cha picha"], answer: 0, why: "Kiolezo ni muundo ulio tayari, kwa hiyo unabadilisha maneno na picha tu." },
            { objective: "O5", q: "Tangazo lako lina mistari minane ya maandishi madogo. Unalifanyaje kuwa rahisi kusoma?", options: ["Kufanya maandishi yawe madogo zaidi", "Kupunguza hadi kichwa na mistari mitatu mifupi", "Kuongeza picha zaidi", "Kutumia rangi tano"], answer: 1, why: "Kichwa kikubwa na mistari mitatu mifupi (nini, lini, wapi) ni rahisi zaidi kusoma." }
          ]
        },
        {
          title: "Kuunganisha zana pamoja",
          objectives: ["O5","O3"],
          minutes: 5,
          goal: "Tumia msaidizi wa mazungumzo, zana ya kubuni na zana ya kutafsiri pamoja kutengeneza tangazo moja lililokamilika kwa lugha mbili.",
          text: [
            "Miradi ya kweli mara nyingi inatumia zaidi ya zana moja. Kwa tangazo la jamii, unaweza kutumia msaidizi wa mazungumzo kuandika maneno, Canva kulibuni, na zana ya kutafsiri kutengeneza toleo la pili.",
            "Iombe AI kichwa kifupi na mistari mitatu ya maelezo. Yabandike kwenye kiolezo cha Canva. Kisha tafsiri maneno hayo hayo kwenda lugha ya pili wanayoongea majirani zako na utengeneze nakala ya tangazo yenye maneno hayo.",
            "Ikiwezekana, mwombe mtu anayeongea lugha hiyo asome tafsiri. Zana za bure ni mwanzo mzuri; msomaji halisi ndiye anayeifanya iwe sahihi."
          ],
          steps: ["Muombe msaidizi wa mazungumzo kichwa na mistari mitatu ya maelezo.", "Weka maneno kwenye kiolezo cha tangazo cha Canva.", "Tafsiri maneno kwenda lugha ya pili.", "Tengeneza nakala ya tangazo yenye tafsiri.", "Ikiwezekana, mwombe mtu anayeijua lugha vizuri aisome."],
          words: [["Mradi", "kazi yenye matokeo yaliyokamilika na yaliyo wazi, kama tangazo."]],
          slides: [
            { title: "Mradi mmoja, zana tatu", bullets: ["Msaidizi wa mazungumzo: maneno", "Canva: muundo", "App ya kutafsiri: lugha ya pili"] },
            { title: "Hatua", bullets: ["Andika maneno kwa AI", "Yaweke kwenye kiolezo cha Canva", "Tafsiri na utengeneze nakala ya pili"] },
            { title: "Lifanye liwe sahihi", bullets: ["Kagua kila tarehe na mahali", "Mwombe anayeijua lugha vizuri asome tafsiri"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza tangazo la ukurasa mmoja kwa tukio la jamii. Tumia msaidizi wa AI kuandika kichwa na mistari mitatu, libuni kwa Canva, na utengeneze nakala ya pili iliyotafsiriwa katika lugha nyingine wanayoongea majirani zako.",
          youCanNow: "kutumia zana kadhaa za AI za bure pamoja kumaliza mradi halisi kwa ajili ya jamii yako.",
          quickCheck: [
            { objective: "O5", q: "Katika mradi wa pamoja, unabandika nini kwenye kiolezo cha Canva?", options: ["Namba yako ya simu", "Mazungumzo yote ya AI", "Kichwa na mistari mitatu ambayo AI iliandika", "Kiungo cha tovuti ya AI"], answer: 2, why: "Msaidizi wa mazungumzo anaandika maneno, nawe unayaweka kwenye tangazo la Canva." },
            { objective: "O3", q: "Ulitafsiri tangazo lako kwa Kihispania lakini huongei Kihispania. Unafanya nini kabla ya kulishiriki?", options: ["Kulishiriki mara moja", "Kulitafsiri mara ya pili", "Kuondoa nakala ya Kihispania", "Kumwomba mtu anayeijua Kihispania vizuri alisome"], answer: 3, why: "Msomaji halisi anagundua makosa ambayo zana ya bure ilikosa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutengeneza vitu kwa AI",
        questions: [
          { objective: "O4", q: "Ni mambo gani manne unapaswa kumwambia msaidizi wa AI unapoomba ujumbe mfupi?", options: ["Nywila yako, anwani, umri na benki", "Ni wa nani, lazima useme nini, mtindo wa sauti na urefu", "Tarehe tu", "Hakuna; atabahatisha"], answer: 1, why: "Maelezo haya manne yanaleta ujumbe unaofaa." },
          { objective: "O5", q: "Kiolezo ni nini?", options: ["Virusi", "Nywila", "Muundo ulio tayari unaoujaza kwa maneno yako", "Mpangilio wa simu"], answer: 2, why: "Violezo vinawawezesha wanaoanza kutengeneza miundo inayopendeza." },
          { objective: "O5", q: "Tangazo rahisi linapaswa kuwa na nini?", options: ["Kichwa kikubwa na nini, lini na wapi", "Aya kumi", "Namba yako ya Social Security", "Picha tu, bila maneno"], answer: 0, why: "Matangazo rahisi ni rahisi kusoma: kichwa, maelezo na picha moja." },
          { objective: "O5", q: "Ulitumia Canva kwenye kompyuta ya maktaba. Unafanya nini mwishoni?", options: ["Kuacha akaunti yako wazi", "Kuhifadhi nywila yako kwenye kivinjari", "Kuandika nywila yako kwenye skrini", "Kutoka (sign out)"], answer: 3, why: "Kutoka kunalinda akaunti yako kwenye kompyuta ya pamoja." },
          { objective: "O3", q: "Ulitafsiri tangazo lako kwa zana ya bure. Unawezaje kuhakikisha ni sahihi?", options: ["Kumwomba mtu anayeijua lugha vizuri alisome", "Kulitafsiri mara kumi zaidi", "Kukuza herufi", "Kuongeza picha zaidi"], answer: 0, why: "Msomaji halisi anagundua makosa ambayo mashine hufanya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Zana za AI Rahisi kwa Wanaoanza",
    questions: [
      { objective: "O1", q: "Unapochagua zana ya AI, unapaswa kuanza na:", options: ["Zana ya bei ghali zaidi", "Kazi unayohitaji kufanya", "App mpya zaidi", "Chochote anachopendekeza mgeni"], answer: 1, why: "Anza na kazi, kisha chagua zana inayoifaa." },
      { objective: "O1", q: "Zana ipi ni bora kwa kuandika na kueleza?", options: ["App ya kamera", "App ya tochi", "Msaidizi wa mazungumzo kama Copilot, ChatGPT au Gemini", "Kicheza muziki"], answer: 2, why: "Wasaidizi wa mazungumzo ni hodari wa kuandika, kueleza na kupanga." },
      { objective: "O1", q: "Canva inatumika hasa kwa:", options: ["Kubuni matangazo na kadi", "Huduma za benki", "Kupiga simu", "Hali ya hewa"], answer: 0, why: "Canva ni zana ya kubuni yenye toleo la bure." },
      { objective: "O1", q: "Unapochagua zana, ujaribu nini kwanza?", options: ["Mpango wa bei ghali zaidi", "Kozi ya kulipia", "Tangazo linalojitokeza ghafla (pop-up)", "Toleo la bure"], answer: 3, why: "Matoleo ya bure yanatosha kwa kazi nyingi za wanaoanza." },
      { objective: "O2", q: "Unaulizaje swali kwa sauti kwa apps nyingi za AI?", options: ["Kutikisa simu", "Kubonyeza kitufe cha maikrofoni", "Kuzima simu", "Kufungua kamera"], answer: 1, why: "Kitufe cha maikrofoni kinaruhusu app kusikiliza." },
      { objective: "O2", q: "Unapotumia uandishi kwa sauti, inasaidia:", options: ["Kuongea wazi na polepole kidogo", "Kunong'ona", "Kuongea haraka sana", "Kufunika maikrofoni"], answer: 0, why: "Maneno yaliyo wazi na ya polepole yanasikika kwa usahihi zaidi." },
      { objective: "O2", q: "Uandishi kwa sauti uliandika \"Friday\" kama \"fry day\". Unapaswa:", options: ["Kuutuma hivyo hivyo", "Kufuta app", "Kurekebisha kabla ya kutuma", "Kuanza upya kwenye simu mpya"], answer: 2, why: "Soma na urekebishe kila wakati kile uandishi kwa sauti ulichosikia." },
      { objective: "O3", q: "Kutafsiri tangazo la shule lililochapishwa, unaweza:", options: ["Kutumia zana ya kubuni", "Kutumia chaguo la kamera la app ya kutafsiri", "Kutumia kikokotoo", "Kusubiri mtu apige simu"], answer: 1, why: "Chaguo la kamera linasoma na kutafsiri maneno yaliyochapishwa." },
      { objective: "O3", q: "Katika app ya kutafsiri, kwanza unachagua:", options: ["Nywila", "Aina ya herufi", "Rangi", "Lugha iliyo kwenye karatasi na lugha unayoitaka"], answer: 3, why: "App inahitaji kujua lugha zote mbili." },
      { objective: "O3", q: "Kwa karatasi ya kisheria iliyo katika lugha usiyoisoma vizuri, msaada salama zaidi ni:", options: ["Mkalimani aliyefunzwa", "Kubahatisha", "Picha ya utani (meme)", "Kuiruka"], answer: 0, why: "Karatasi muhimu zinahitaji mtu aliyefunzwa, si mashine tu." },
      { objective: "O4", q: "Lipi ni ombi zuri la ujumbe mfupi?", options: ["\"ujumbe\"", "\"Andika barua ya adabu ya sentensi mbili kwa mwenye nyumba wangu kuuliza lini hita itarekebishwa.\"", "\"andika\"", "\"vitu kwa mwenye nyumba\""], answer: 1, why: "Linasema ni wa nani, nini, mtindo wa sauti na urefu." },
      { objective: "O4", q: "Baada ya AI kuandika ujumbe wako, unapaswa:", options: ["Kuutuma bila kuusoma", "Kuongeza taarifa za benki yako", "Kuuhariri usikike kama wewe na kukagua ukweli", "Kuuweka hadharani"], answer: 2, why: "Unaufanya kuwa wako na kukagua majina, tarehe na mahali." },
      { objective: "O4", q: "Mtindo wa sauti una maana ya:", options: ["Jinsi ujumbe unavyosikika, kama wa kirafiki au thabiti", "Urefu wa ujumbe", "Ukubwa wa herufi", "Sauti ya simu"], answer: 0, why: "Mtindo wa sauti ni jinsi ujumbe unavyomgusa msomaji." },
      { objective: "O5", q: "Canva inakuomba utengeneze nini kabla ya kuanza kubuni?", options: ["Malipo", "Simu", "Akaunti ya bure", "Fomu iliyochapishwa"], answer: 2, why: "Canva inatumia akaunti ya bure kuhifadhi miundo yako." },
      { objective: "O5", q: "Tangazo lipi ni rahisi zaidi kusoma?", options: ["Ukurasa mzima wa maandishi madogo sana", "Kichwa, mistari mitatu mifupi na picha moja", "Picha kumi bila maneno", "Namba ya simu tu"], answer: 1, why: "Fupi na wazi ni bora kwa tangazo." },
      { objective: "O5", q: "Kupata nakala ya tangazo lako ya kuchapisha, unafanya:", options: ["Kupiga picha ya skrini", "Kufunga kivinjari", "Kuituma Canva barua pepe", "Kulipakua"], answer: 3, why: "Kupakua kunahifadhi nakala unayoweza kuchapisha." },
      { objective: "O1", q: "Katika mradi wa pamoja, zana ipi inaandika maneno?", options: ["Msaidizi wa mazungumzo", "App ya kutafsiri", "Printa", "Kamera"], answer: 0, why: "Msaidizi wa mazungumzo anaandika kichwa na maelezo." },
      { objective: "O3", q: "Kwa nini utengeneze nakala ya pili ya tangazo katika lugha nyingine?", options: ["Inapendeza zaidi", "Ili majirani wengi zaidi waweze kulisoma", "Canva inalazimisha", "Kutumia karatasi zaidi"], answer: 1, why: "Lugha ya pili inawafikia watu wengi zaidi katika jamii yako." },
      { objective: "O4", q: "Kabla ya kushiriki tangazo lililokamilika, unapaswa kukagua:", options: ["Hali ya hewa", "Betri ya simu yako", "Kwamba kila tarehe na mahali ni sahihi", "Rangi ya printa"], answer: 2, why: "Maelezo yasiyo sahihi kwenye tangazo yanawapeleka watu mahali pasipo sahihi." },
      { objective: "O3", q: "Katika kazi ya mwisho, zana ya mwisho unayotumia ni:", options: ["Kikokotoo", "App ya muziki", "Ramani", "Zana ya kutafsiri kwa nakala ya lugha ya pili"], answer: 3, why: "Hatua ya mwisho inatengeneza tangazo katika lugha ya pili." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 4, 6, 7, 9, 10, 13, 14, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Maneno kutoka kwa msaidizi", objective: "O4", notYet: "Hakuna kichwa wala maelezo, au maneno hayakukaguliwa.", meets: "Kichwa kifupi na mistari mitatu kutoka AI, vilivyohaririwa visikike vizuri, na tarehe na mahali vimekaguliwa.", exceeds: "Aliiomba AI badiliko, kama mtindo wa sauti wa kirafiki zaidi au kichwa kifupi zaidi." },
      { name: "Muundo wa tangazo", objective: "O5", notYet: "Hakuna tangazo, au limejaa na ni gumu kusoma.", meets: "Tangazo la Canva la ukurasa mmoja lenye kichwa kikubwa, nini, lini na wapi, na picha moja.", exceeds: "Alilipakua au kulishiriki, na linasomeka wazi ukiwa upande wa pili wa chumba." },
      { name: "Lugha ya pili", objective: "O3", notYet: "Hakuna nakala iliyotafsiriwa.", meets: "Nakala ya pili yenye maneno yaliyotafsiriwa kwa lugha wanayoongea majirani.", exceeds: "Mtu anayeijua lugha vizuri alisoma tafsiri na ikarekebishwa ilipohitajika." },
      { name: "Zana sahihi kwa kila hatua", objective: "O1", notYet: "Hawezi kusema zana ipi ilifanya kazi ipi.", meets: "Anataja msaidizi wa mazungumzo, Canva na zana ya kutafsiri kwa kila hatua.", exceeds: "Anaeleza kwa nini kila zana inafaa kazi yake." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wanafunzi wanaotengeneza tangazo au ujumbe halisi kwa kikundi cha jamii, shule au biashara ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Washirika wa jamii wanaripoti matukio zaidi yanayotangazwa kwa lugha mbili au zaidi",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya kituo cha jamii",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "App ya kutafsiri ya bure kama Google Translate, na akaunti ya bure ya Canva",
      "Lebo au bango lililochapishwa la kufanyia mazoezi tafsiri kwa kamera",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi wanaoongea lugha tofauti wawili wawili ili wasome tafsiri za wenzao.",
      "Saidia kufungua akaunti ya Canva kwanza; inachukua muda mwingi zaidi kwa wanaoanza.",
      "Wakumbushe wanafunzi kwamba karatasi za dawa na za kisheria zinahitaji mkalimani, si app tu.",
      "Hakikisha wanafunzi wanatoka (sign out) kwenye Canva na zana za AI kwenye kompyuta za pamoja.",
      "Pima kazi ya mwisho kwa rubriki, na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
