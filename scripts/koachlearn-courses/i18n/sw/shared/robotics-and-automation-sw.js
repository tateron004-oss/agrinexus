"use strict";

// Koach Learn course (Swahili translation of shared/robotics-and-automation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "robotics-and-automation-sw",
  lang: "sw",
  translationOf: "robotics-and-automation",
  category: "Youth",
  name: "Utangulizi wa Roboti, AI na Uendeshaji Otomatiki",
  skills: "Kueleza hisi-fikiri-tenda, Kulinganisha vihisi na viendeshi, Kuandika algorithimu, Kuweka msimbo kwa roboti pepe kwa vitalu, Kutumia kihisi kufanya maamuzi, Kujaribu na kurekebisha hitilafu",
  outcome: "kupanga na kuweka msimbo kwa roboti pepe kwa msimbo wa vitalu wa bure ili iendeshe njia fulani, itumie kihisi kuepuka ukuta, na ijaribiwe na kurekebishwa hadi ifanye kazi.",
  about: [
    "Roboti na uendeshaji otomatiki ziko kwenye maghala, mashamba, hospitali, magari na nyumbani. Kozi hii inaonyesha jinsi zinavyofanya kazi na inakuruhusu kuiwekea roboti programu wewe mwenyewe, bila kununua roboti na bila uzoefu wowote wa kuandika msimbo.",
    "Ni kwa vijana wanaopenda kujua kuhusu kazi za teknolojia, wanajeshi wastaafu waliofanya kazi na mifumo isiyo na rubani au ya matengenezo na wanaotaka njia ya kiraia, na mtu yeyote anayetaka kuelewa mashine zinazobadilisha mahali pa kazi.",
    "Utajifunza wazo la hisi-fikiri-tenda, utapanga hatua za roboti kwenye karatasi, kisha utaweka msimbo kwa roboti pepe ya bure kwenye kivinjari cha wavuti kwa kutumia vitalu. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Jaribio la maarifa linamaliza kila sura, na mtihani wa maswali 20 unamaliza kozi."
  ],
  finalTask: "Katika zana ya bure ya roboti pepe kama VEXcode VR, andika programu ya vitalu inayoendesha roboti kwa umbo la mraba, kisha programu ya pili inayoiendesha mbele hadi kihisi kipate ukuta, inasimama, inageuka na inaendelea. Ijaribu, rekebisha angalau hitilafu moja, na uandike sentensi tatu zinazoeleza roboti inahisi nini, inaamua vipi na inatenda vipi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana (kuanzia shule ya kati hadi vijana wakubwa) wanaopenda kujua kuhusu roboti, kuandika msimbo au kazi za teknolojia, shuleni, katika programu za baada ya shule, maktaba au vituo vya vijana.",
    startingPoint: "Wanaweza kutumia kompyuta, Chromebook au tableti na kivinjari cha wavuti, na wameona roboti kwenye video au madukani. Wengi hawajawahi kuandika programu wala kupanga algorithimu.",
    gap: "Roboti na uendeshaji otomatiki zinaongezeka katika maghala, viwanda, mashamba na hospitali, na kazi za ufundi na za kuandika programu zinahitaji watu wanaoweza kupanga hatua, kuandika msimbo, kujaribu na kurekebisha. Wanafunzi wanahitaji ushindi wa kwanza wa vitendo na roboti pepe ili wajiamini na waone njia ya kuingia katika kazi hizi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8)",
      "Vifaa: kompyuta, Chromebook au tableti yenye kivinjari cha wavuti; hakuna haja ya roboti halisi",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla",
      "Matoleo na vipengele vya zana za bure vinaweza kubadilika; tumia ile ambayo shule au maktaba inapendelea",
      "Usalama: roboti halisi za viwandani zinatumika tu baada ya mafunzo ya usalama ya mahali hapo"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mifano ya mashine halisi", action: "kutambua zipi ni roboti, zipi ni uendeshaji otomatiki na zipi zinatumia AI, na kueleza mzunguko wa hisi-fikiri-tenda", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa kazi ambayo roboti lazima ifanye", action: "kuchagua vihisi na viendeshi inavyohitaji", standard: "ukitoa sababu kwa kila sehemu" },
    { id: "O3", condition: "Ukipewa kazi ya roboti", action: "kuandika algorithimu kwa maneno rahisi yenye hatua kamili, kitanzi na uamuzi wa ikiwa-basi", standard: "ili ifanye kazi unapoipitia wewe mwenyewe" },
    { id: "O4", condition: "Ukitumia zana ya bure ya roboti pepe kama VEXcode VR", action: "kuweka msimbo kwa roboti kwa vitalu ili iendeshe umbo la mraba", standard: "ili irudi karibu na mahali ilipoanzia" },
    { id: "O5", condition: "Ukipewa roboti ambayo lazima iepuke ukuta", action: "kuongeza ikiwa-basi inayotumia kihisi kwenye programu na kurekebisha angalau hitilafu moja", standard: "ukibadilisha kitu kimoja kwa wakati hadi roboti isimame na kugeuka kwenye ukuta" },
    { id: "O6", condition: "Ukipewa mahali pa kazi panapotumia roboti", action: "kutaja kazi halisi za roboti na sheria za usalama ambazo watu hufuata karibu na roboti", standard: "ukitaja angalau kazi mbili na sheria mbili za usalama" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi roboti na uendeshaji otomatiki zinavyofanya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Roboti, uendeshaji otomatiki na AI: tofauti ni nini?",
          minutes: 4,
          goal: "Panga mashine halisi kuwa roboti, uendeshaji otomatiki na AI, na ueleze hisi-fikiri-tenda.",
          text: [
            "Uendeshaji otomatiki maana yake mashine au programu inafanya kazi yenyewe baada ya kuwekwa tayari, kama mzunguko wa mashine ya kuosha vyombo au mkanda wa kusafirisha bidhaa kiwandani. Roboti ni mashine inayoweza kuhisi mazingira yake na kusogea au kutenda ndani yake, kama roboti ya kufagia sakafu au roboti ya ghala inayobeba rafu.",
            "Kila roboti inafuata mzunguko uleule: hisi, fikiri, tenda. Inahisi kwa vihisi (kamera, swichi za kugonga, vihisi vya umbali), inafikiri kwa programu ya kompyuta inayoamua cha kufanya, na inatenda kwa mota, magurudumu, mikono au vishikio. Kisha inahisi tena.",
            "AI ni aina ya programu ya kufikiri inayojifunza mifumo kutoka kwa mifano, kama kutambua mtu katika picha ya kamera. Roboti nyingi zinatumia sheria rahisi, si AI. Baadhi zinatumia AI kuona, kupanga njia au kuelewa sauti ya mtu."
          ],
          words: [["Uendeshaji otomatiki", "mashine au programu inayofanya kazi yenyewe baada ya kuwekwa tayari."], ["Roboti", "mashine inayoweza kuhisi mazingira yake na kutenda ndani yake."], ["Hisi-fikiri-tenda", "mzunguko ambao kila roboti hufuata: kupokea taarifa, kuamua, kisha kusogea au kutenda."], ["AI", "akili bandia (artificial intelligence): programu zinazojifunza mifumo kutoka kwa mifano ili kufanya maamuzi."]],
          slides: [
            { title: "Uendeshaji otomatiki dhidi ya roboti", bullets: ["Uendeshaji otomatiki: hufanya kazi iliyowekwa yenyewe", "Roboti: huhisi mazingira yake na kutenda ndani yake"] },
            { title: "Mzunguko wa roboti", bullets: ["Hisi: vihisi hupokea taarifa", "Fikiri: programu huamua", "Tenda: mota, magurudumu au mikono husogea", "Kisha hisi tena"] },
            { title: "AI inaingia wapi", bullets: ["AI hujifunza mifumo kutoka kwa mifano", "Roboti nyingi hutumia sheria rahisi, si AI", "Baadhi hutumia AI kuona, kupanga au kusikiliza"] }
          ],
          tryIt: "Chagua mashine tatu ulizowahi kuona (kwa mfano roboti ya kufagia sakafu, mashine ya kujilipia dukani, ndege isiyo na rubani ya kusafirisha mizigo). Kwa kila moja, andika kama ni uendeshaji otomatiki au roboti, na njia moja inavyohisi, inavyofikiri na inavyotenda.",
          youCanNow: "kutofautisha uendeshaji otomatiki, roboti na AI, na kueleza roboti yoyote kwa kutumia hisi-fikiri-tenda.",
          quickCheck: [
            { objective: "O1", q: "Roboti inafanya nini katika hatua ya \"tenda\" ya hisi-fikiri-tenda?", options: ["Inasogea au inafanya kitu kwa mota, magurudumu au vishikio", "Inapima mazingira kwa vihisi", "Inaamua cha kufanya kwa programu", "Inajizima"], answer: 0, why: "Kutenda maana yake kusogea au kufanya kitu kwa mota, magurudumu, mikono au vishikio." },
            { objective: "O1", q: "Rafiki anasema kila roboti inatumia AI. Unamwambia nini?", options: ["Ni kweli; roboti haziwezi kufanya kazi bila AI", "AI maana yake roboti ina magurudumu", "Roboti nyingi zinafuata sheria rahisi; ni baadhi tu zinazotumia AI", "Roboti na AI ni kitu kimoja"], answer: 2, why: "Roboti nyingi zinatumia sheria rahisi; baadhi zinatumia AI kuona, kupanga njia au kuelewa sauti ya mtu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Vihisi na viendeshi: hisia na misuli ya roboti",
          minutes: 5,
          goal: "Linganisha vihisi na viendeshi vya kawaida na kazi wanazofanya.",
          text: [
            "Vihisi ni hisia za roboti. Kihisi cha umbali hupima kitu kiko mbali kiasi gani. Kihisi cha kugonga hujua roboti inapogusa kitu. Kamera huona picha. Kihisi cha mstari au cha rangi huona sakafu. Kifaa cha GPS hujua mahali ilipo nje.",
            "Viendeshi ni misuli ya roboti: kitu chochote kinachoifanya isogee au itende. Mota huzungusha magurudumu, servo huzungusha viungo hadi pembe kamili, na vishikio au vikombe vya kufyonza huokota vitu.",
            "Unapobuni roboti, anza na kazi. Roboti ambayo lazima isimame kabla ya kugonga ukuta inahitaji kihisi cha umbali au cha kugonga na mota za kuendesha. Roboti inayotenganisha masanduku mekundu na ya bluu inahitaji kihisi cha rangi na kishikio."
          ],
          words: [["Kihisi (sensor)", "sehemu inayopokea taarifa, kama umbali, mguso, mwanga au picha."], ["Kiendeshi (actuator)", "sehemu inayoifanya roboti isogee au itende, kama mota au kishikio."], ["Servo", "mota inayozunguka hadi pembe kamili."]],
          slides: [
            { title: "Vihisi = hisia", bullets: ["Umbali, kugonga, kamera", "Kihisi cha mstari au cha rangi", "GPS kwa mahali ulipo nje"] },
            { title: "Viendeshi = misuli", bullets: ["Mota huzungusha magurudumu", "Servo huzunguka hadi pembe kamili", "Vishikio huokota vitu"] },
            { title: "Anza na kazi", bullets: ["Kusimama kabla ya ukuta: kihisi cha umbali + mota", "Kupanga kwa rangi: kihisi cha rangi + kishikio"] }
          ],
          tryIt: "Buni kwenye karatasi roboti kwa kazi moja, kama kumwagilia mimea au kubeba sanduku kuvuka chumba. Orodhesha vihisi na viendeshi inavyohitaji na kwa nini.",
          youCanNow: "kuchagua vihisi na viendeshi ambavyo roboti inahitaji kwa kazi fulani.",
          quickCheck: [
            { objective: "O2", q: "Sehemu ipi ni kiendeshi?", options: ["Kamera", "Kishikio", "Kihisi cha kugonga", "Kihisi cha mstari"], answer: 1, why: "Viendeshi huifanya roboti isogee au itende; kishikio huokota vitu." },
            { objective: "O2", q: "Unabuni roboti inayofuata mstari mweusi sakafuni. Unaongeza kihisi kipi?", options: ["Kifaa cha GPS", "Kihisi cha kugonga", "Kipaza sauti", "Kihisi cha mstari au cha rangi"], answer: 3, why: "Kihisi cha mstari au cha rangi huangalia sakafu na kinaweza kufuata mstari." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika algorithimu kabla ya kuweka msimbo",
          minutes: 5,
          goal: "Andika mpango wa hatua kwa hatua wenye kitanzi na uamuzi ambao roboti inaweza kufuata.",
          text: [
            "Algorithimu ni orodha ya hatua kamili za kumaliza kazi. Roboti haziwezi kubahatisha, kwa hiyo kila hatua lazima iwe wazi: \"endesha mbele sentimita 50\" badala ya \"nenda kidogo\".",
            "Zana mbili zinafanya algorithimu ziwe na nguvu. Kitanzi hurudia hatua, kama \"rudia mara 4: endesha mbele, geuka kulia digrii 90\" ili kuendesha mraba. Uamuzi, unaoitwa pia ikiwa-basi, huchagua cha kufanya: \"ikiwa ukuta uko karibu kuliko sentimita 10, basi simama; vinginevyo endelea kuendesha\".",
            "Iandike kwa maneno rahisi au chora chati mtiririko kwanza. Kisha ipitie wewe mwenyewe kana kwamba wewe ni roboti. Ukigonga kitu kwenye karatasi, roboti nayo itagonga."
          ],
          steps: ["Andika lengo kwa sentensi moja.", "Orodhesha kila hatua kwa mpangilio, kwa vipimo kamili.", "Tafuta hatua zinazojirudia na uzigeuze kuwa kitanzi.", "Ongeza maamuzi yoyote ya ikiwa-basi yanayotumia kihisi.", "Ipitie wewe mwenyewe ili kuijaribu."],
          words: [["Algorithimu", "orodha ya hatua kamili za kumaliza kazi."], ["Kitanzi (loop)", "kundi la hatua linalojirudia."], ["Ikiwa-basi (if-then)", "uamuzi: ikiwa kitu ni kweli, fanya jambo moja; vinginevyo fanya jingine."], ["Chati mtiririko (flowchart)", "mchoro wa algorithimu wenye visanduku na mishale."]],
          slides: [
            { title: "Algorithimu ni kamili", bullets: ["\"Endesha mbele sm 50\", si \"nenda kidogo\"", "Roboti haziwezi kubahatisha"] },
            { title: "Vitanzi na maamuzi", bullets: ["Kitanzi: rudia mara 4, mbele kisha geuka kulia 90", "Ukuta ukiwa karibu kuliko sm 10, simama; vinginevyo endelea"] },
            { title: "Jaribu kwenye karatasi kwanza", bullets: ["Iandike au chora chati mtiririko", "Ipitie kana kwamba wewe ni roboti", "Irekebishe kabla ya kuweka msimbo"] }
          ],
          tryIt: "Andika algorithimu, yenye kitanzi, ili roboti iendeshe kwa umbo la mraba. Kisha ongeza hatua ya ikiwa-basi ili isimame kama kuna kitu njiani. Ipitie kwa kutumia kitu cha kuchezea, simu au miguu yako mwenyewe.",
          youCanNow: "kuandika algorithimu iliyo wazi yenye kitanzi na uamuzi wa ikiwa-basi, na kuijaribu kwenye karatasi.",
          quickCheck: [
            { objective: "O3", q: "Kitanzi kinafanya nini katika algorithimu?", options: ["Kinasimamisha roboti", "Kinachagua kati ya vitendo viwili", "Kinarudia kundi la hatua", "Kinapima umbali"], answer: 2, why: "Kitanzi hurudia hatua, kama kuendesha mbele na kugeuka mara nne kwa mraba." },
            { objective: "O3", q: "Mpango wako unasema \"nenda mbele kidogo\". Unabadilisha nini kabla ya kuweka msimbo?", options: ["Toa kipimo kamili, kama sentimita 50", "Hakuna; roboti itabahatisha", "Ongeza hatua zaidi baada yake", "Ondoa hatua hiyo"], answer: 0, why: "Roboti haziwezi kubahatisha, kwa hiyo kila hatua inahitaji kipimo kamili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi roboti na uendeshaji otomatiki zinavyofanya kazi",
        questions: [
          { objective: "O1", q: "Ni hatua zipi tatu ambazo kila roboti hurudia?", options: ["Nunua, jenga, uza", "Anza, simama, pumzika", "Hisi, fikiri, tenda", "Chaji, endesha, egesha"], answer: 2, why: "Roboti huhisi, huamua kwa programu, kisha hutenda, na kurudia." },
          { objective: "O2", q: "Sehemu ipi ni kihisi?", options: ["Kihisi cha umbali", "Mota ya gurudumu", "Kishikio", "Betri"], answer: 0, why: "Kihisi cha umbali hupokea taarifa; mota na vishikio ni viendeshi." },
          { objective: "O2", q: "Roboti lazima itenganishe masanduku mekundu na masanduku ya bluu. Inahitaji nini zaidi?", options: ["Kifaa cha GPS", "Spika yenye sauti kubwa zaidi", "Betri kubwa zaidi tu", "Kihisi cha rangi na kishikio"], answer: 3, why: "Lazima ione rangi na iokote masanduku." },
          { objective: "O3", q: "Agizo lipi liko wazi vya kutosha kwa roboti?", options: ["\"Nenda kidogo\"", "\"Endesha mbele sentimita 50\"", "\"Geuka kama kulia hivi\"", "\"Fanya lile jambo\""], answer: 1, why: "Roboti zinahitaji vipimo kamili." },
          { objective: "O3", q: "\"Rudia mara 4: endesha mbele, geuka kulia digrii 90\" inatumia:", options: ["Kihisi", "Kitanzi", "Kishikio", "Nywila"], answer: 1, why: "Kitanzi hurudia hatua; hiki kinaendesha mraba." }
        ]
      }
    },
    {
      name: "Sura 2: Kuweka msimbo na kutumia roboti",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuweka msimbo kwa roboti pepe kwa vitalu",
          minutes: 6,
          goal: "Fungua roboti pepe ya bure na uiwekee msimbo iendeshe kwa umbo la mraba.",
          text: [
            "Unaweza kufanya mazoezi ya kuweka msimbo kwa roboti kwenye kivinjari cha wavuti bila roboti. VEXcode VR, kutoka kampuni ya VEX Robotics, ina toleo la bure linalotumia vitalu vya kuburuta na kuachia, kama Scratch, na linafanya kazi kwenye kompyuta, Chromebook na tableti kwenye vr.vex.com. Kuna chaguo nyingine za bure; shule au maktaba yako huenda ina moja inayopendelea.",
            "Vitalu vinaungana kama vipande vya fumbo. Kitalu cha \"endesha mbele\" husogeza roboti, kitalu cha \"geuka kulia\" huigeuza, na kitalu cha \"rudia\" hutengeneza kitanzi. Unabonyeza Start (Anza) kutazama roboti ikifuata programu yako katika uwanja pepe.",
            "Geuza algorithimu yako ya karatasini kuwa vitalu hatua moja kwa wakati. Iendeshe baada ya kila badiliko ili ujue ni kitalu kipi kilisababisha nini."
          ],
          steps: ["Fungua vr.vex.com kwenye kivinjari cha wavuti.", "Chagua uwanja rahisi wenye nafasi wazi sakafuni.", "Buruta kitalu cha kuendesha mbele na kitalu cha kugeuka kulia ndani ya programu.", "Vizungushie kitalu cha kurudia kilichowekwa 4.", "Bonyeza Start na utazame. Rekebisha umbali au mgeuko hadi iendeshe mraba safi."],
          words: [["Msimbo wa vitalu (block coding)", "kuandika programu kwa kuunganisha vitalu vya picha badala ya kuandika msimbo kwa herufi."], ["Uwanja (playground)", "nafasi pepe ambamo roboti ya kuigiza inaendesha."], ["Kiigizaji (simulator)", "programu inayofanya kazi kama mashine halisi ili uweze kufanya mazoezi kwa usalama."]],
          slides: [
            { title: "Fanya mazoezi bila roboti", bullets: ["Msimbo wa vitalu wa bure kwenye kivinjari", "VEXcode VR: vr.vex.com", "Inafanya kazi kwenye kompyuta, Chromebook na tableti"] },
            { title: "Vitalu vinaungana", bullets: ["Endesha mbele, geuka kulia", "Kitalu cha kurudia = kitanzi", "Bonyeza Start kutazama"] },
            { title: "Jenga kwa hatua ndogo", bullets: ["Geuza mpango wako wa karatasi kuwa vitalu", "Endesha baada ya kila badiliko", "Rekebisha hadi ifanye kazi"] }
          ],
          sources: [{ name: "VEX Robotics: VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "Katika VEXcode VR au roboti pepe nyingine ya bure, iwekee roboti msimbo iendeshe mraba kwa kutumia kitalu cha kurudia. Ifanye imalize karibu na mahali ilipoanzia.",
          youCanNow: "kuweka msimbo kwa roboti pepe kwa vitalu, ukitumia kitanzi kuendesha mraba.",
          quickCheck: [
            { objective: "O4", q: "Katika msimbo wa vitalu, kitufe cha Start kinafanya nini?", options: ["Kinafuta vitalu vyako", "Kinahifadhi programu yako kwenye USB", "Kinafungua uwanja mpya", "Kinaendesha programu ili utazame roboti ikiifuata"], answer: 3, why: "Kubonyeza Start huendesha programu katika uwanja pepe." },
            { objective: "O4", q: "Uliongeza vitalu vitano vipya kwa mara moja na roboti ikagonga. Ulipaswa kufanya nini?", options: ["Kuongeza vitalu zaidi", "Kuendesha programu baada ya kila badiliko", "Kutumia roboti halisi badala yake", "Kuzima kihisi"], answer: 1, why: "Kuendesha baada ya kila badiliko kunaonyesha ni kitalu kipi kilisababisha nini." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutumia kihisi kuamua, kisha kurekebisha hitilafu",
          minutes: 6,
          goal: "Ongeza ikiwa-basi inayotumia kihisi kwenye programu ya roboti na urekebishe hitilafu.",
          text: [
            "Roboti inayofuata hatua zilizowekwa tu ni kama kipofu. Iongezee kihisi na inaweza kujibu kinachotokea. Katika msimbo wa vitalu, unatumia kitalu cha \"if\" (ikiwa) chenye kipimo cha kihisi ndani yake, kama \"ikiwa umbali ni chini ya milimita 100\".",
            "Mpangilio wa kawaida: kitanzi cha milele, na ndani yake ikiwa-basi-vinginevyo. Ikiwa ukuta uko karibu, simama na geuka. Vinginevyo, endesha mbele. Roboti hukagua kihisi tena na tena, na huo ndio mzunguko wa hisi-fikiri-tenda katika msimbo.",
            "Hitilafu ni za kawaida. Kurekebisha hitilafu (debugging) maana yake kuzitafuta na kuzirekebisha. Badilisha kitu kimoja kwa wakati, endesha, na utazame. Hitilafu za kawaida: mgeuko si digrii 90 kamili, namba ya umbali iko katika kipimo kisicho sahihi, au kitalu kiko nje ya kitanzi."
          ],
          steps: ["Ongeza kitanzi cha milele.", "Ndani yake, ongeza kitalu cha ikiwa-basi-vinginevyo.", "Weka ukaguzi wa kihisi cha umbali katika ikiwa.", "Basi: simama na geuka. Vinginevyo: endesha mbele.", "Iendeshe, tafuta kosa, badilisha kitu kimoja, iendeshe tena."],
          words: [["Hitilafu (bug)", "kosa katika programu linaloifanya itende vibaya."], ["Kurekebisha hitilafu (debugging)", "kutafuta na kurekebisha hitilafu."], ["Kitanzi cha milele (forever loop)", "kitanzi kinachoendelea kujirudia hadi programu isimamishwe."]],
          slides: [
            { title: "Vihisi huziwezesha roboti kujibu", bullets: ["Tumia kitalu cha ikiwa chenye kipimo cha kihisi", "Mfano: ikiwa umbali < 100 mm"] },
            { title: "Mpangilio", bullets: ["Kitanzi cha milele", "Ikiwa karibu: simama na geuka", "Vinginevyo: endesha mbele"] },
            { title: "Kurekebisha hitilafu", bullets: ["Badilisha kitu kimoja kwa wakati", "Kagua mageuko, vipimo na mahali vitalu vilipo", "Hitilafu ni za kawaida"] }
          ],
          tryIt: "Iwekee roboti msimbo iendeshe mbele hadi kihisi chake cha umbali kipate ukuta, kisha isimame, igeuke na iendelee. Andika hitilafu moja uliyokutana nayo na jinsi ulivyoirekebisha.",
          youCanNow: "kutumia kipimo cha kihisi katika ikiwa-basi-vinginevyo ili roboti ijibu kinachotokea, na kurekebisha hitilafu za programu.",
          quickCheck: [
            { objective: "O5", q: "Katika programu ya kuepuka ukuta, kwa nini utumie kitanzi cha milele?", options: ["Ili roboti iendelee kukagua kihisi tena na tena", "Ili roboti ikague mara moja tu", "Ili programu isianze kamwe", "Ili roboti iendeshe mraba"], answer: 0, why: "Kitanzi cha milele hurudia ukaguzi wa kihisi, na huo ndio hisi-fikiri-tenda katika msimbo." },
            { objective: "O5", q: "Roboti yako inasimama mita 1 kutoka ukutani badala ya karibu nao. Hitilafu inayowezekana ni ipi?", options: ["Roboti inahitaji betri mpya", "Uwanja umeharibika", "Namba ya umbali iko katika kipimo kisicho sahihi", "Ukuta ni mrefu mno"], answer: 2, why: "Umbali katika kipimo kisicho sahihi, kama sentimita badala ya milimita, ni hitilafu ya kawaida." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Roboti zinafanya kazi wapi, na kufanya kazi nazo kwa usalama",
          minutes: 5,
          goal: "Taja kazi halisi za roboti na sheria za usalama ambazo watu hufuata karibu na roboti.",
          text: [
            "Roboti na uendeshaji otomatiki zinatumika katika maghala (kuhamisha rafu na vifurushi), viwanda (kuchomelea, kufunga bidhaa), mashamba (kukamua, kunyunyizia dawa, ndege zisizo na rubani), hospitali (kupeleka vifaa, kusaidia madaktari wa upasuaji) na jeshi (kutegua mabomu, ndege zisizo na rubani).",
            "Watu bado wanafanya kazi muhimu: mafundi wa roboti hurekebisha na kutunza roboti, waendeshaji huziendesha na kuzitazama, na waandishi wa programu na wahandisi huzibuni. Kazi nyingi za ufundi huanza na cheti cha chuo cha jamii (community college) au mafunzo ya kijeshi.",
            "Usalama kwanza. Roboti za viwandani zinaweza kusogea haraka na kugonga kwa nguvu. Wafanyakazi hukaa nje ya maeneo ya roboti yaliyowekwa alama, hutumia kitufe cha dharura cha kusimamisha, na hufunga umeme kabla ya matengenezo. Roboti shirikishi, au cobots, zimebuniwa kufanya kazi karibu zaidi na watu, lakini sheria ileile inahusika: fuata mafunzo ya usalama ya mahali hapo."
          ],
          words: [["Fundi wa roboti", "mtu anayefunga, kutunza na kurekebisha roboti."], ["Cobot", "roboti shirikishi iliyojengwa kufanya kazi karibu na watu."], ["Kitufe cha dharura", "kitufe kikubwa kinachosimamisha mashine mara moja."]],
          slides: [
            { title: "Roboti zinafanya kazi wapi", bullets: ["Maghala, viwanda, mashamba", "Hospitali na jeshi"] },
            { title: "Kazi zinazohusu roboti", bullets: ["Mafundi huzirekebisha na kuzitunza", "Waendeshaji huziendesha na kuzitazama", "Waandishi wa programu na wahandisi huzibuni"] },
            { title: "Usalama kwanza", bullets: ["Kaa nje ya maeneo ya roboti yenye alama", "Jua kitufe cha dharura kilipo", "Fuata mafunzo ya usalama ya mahali hapo"] }
          ],
          tryIt: "Kazi ya mwisho: maliza programu yako ya mraba na programu yako ya kihisi katika zana ya roboti pepe, rekebisha angalau hitilafu moja, na uandike sentensi tatu zinazoeleza roboti yako inahisi nini, inaamua vipi na inatenda vipi.",
          youCanNow: "kuweka msimbo kwa roboti pepe inayohisi na kujibu, kueleza jinsi inavyofanya kazi, na kutaja kazi halisi za roboti na sheria za usalama.",
          quickCheck: [
            { objective: "O6", q: "Nani hurekebisha na kutunza roboti kiwandani au ghalani?", options: ["Mpokea pesa dukani", "Fundi wa roboti", "Dereva wa usafirishaji", "Mteja"], answer: 1, why: "Mafundi wa roboti hurekebisha na kutunza roboti." },
            { objective: "O6", q: "Unatembelea ghala na unaona roboti zikisogea nyuma ya mstari wenye alama. Unafanya nini?", options: ["Unavuka mstari ili kuangalia karibu zaidi", "Unagusa roboti kuona kama itasimama", "Unabonyeza vitufe ovyo", "Unakaa nje ya eneo lenye alama na kufuata sheria za usalama za mwongozaji"], answer: 3, why: "Roboti za viwandani zinaweza kusogea haraka na kugonga kwa nguvu, kwa hiyo watu hukaa nje ya maeneo ya roboti yenye alama." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuweka msimbo na kutumia roboti",
        questions: [
          { objective: "O4", q: "Kiigizaji (simulator) ni nini?", options: ["Roboti halisi", "Aina ya kihisi", "Betri ya roboti", "Programu inayofanya kazi kama mashine halisi ili uweze kufanya mazoezi"], answer: 3, why: "Kiigizaji kinakuwezesha kufanya mazoezi kwa usalama bila mashine halisi." },
          { objective: "O4", q: "Kitalu kipi kinaifanya roboti irudie hatua?", options: ["Rudia", "Simama", "Anza", "Chapisha"], answer: 0, why: "Kitalu cha kurudia hutengeneza kitanzi." },
          { objective: "O5", q: "Programu ipi inaiwezesha roboti kuepuka ukuta?", options: ["Endesha mbele milele bila ukaguzi wowote", "Geuka kulia mara moja", "Milele: ikiwa ukuta uko karibu, simama na geuka; vinginevyo endesha mbele", "Simama mwanzoni"], answer: 2, why: "Ikiwa-basi-vinginevyo hutumia kihisi kujibu kinachotokea." },
          { objective: "O5", q: "Roboti yako inageuka kupita kiasi kidogo kila mara. Njia bora ya kurekebisha hitilafu ni ipi?", options: ["Kufuta programu yote", "Kubadilisha vitalu vitano kwa mara moja", "Kukata tamaa", "Kubadilisha kiasi cha mgeuko kidogo na kuiendesha tena"], answer: 3, why: "Badilisha kitu kimoja kwa wakati na ujaribu." },
          { objective: "O6", q: "Mfanyakazi anapaswa kufanya nini kabla ya kurekebisha roboti ya kiwandani?", options: ["Kuingia ndani yake ikiwa inafanya kazi", "Kuiomba roboti isimame", "Kufuata mafunzo ya usalama na kufunga umeme", "Kuzima taa"], answer: 2, why: "Kufunga umeme na kufuata mafunzo huwaweka watu salama." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Roboti, AI na Uendeshaji Otomatiki",
    questions: [
      { objective: "O1", q: "Mashine ya kuosha vyombo ikiendesha mzunguko wake ni mfano wa:", options: ["Cobot", "Uendeshaji otomatiki", "Kihisi", "Chati mtiririko"], answer: 1, why: "Inafanya kazi iliyowekwa yenyewe baada ya kuwashwa." },
      { objective: "O1", q: "Ni nini kinachoifanya mashine kuwa roboti?", options: ["Inaweza kuhisi mazingira yake na kutenda ndani yake", "Ni ghali", "Ina skrini", "Inatumia umeme"], answer: 0, why: "Roboti huhisi na kutenda katika mazingira." },
      { objective: "O1", q: "Katika hisi-fikiri-tenda, sehemu ya \"fikiri\" inafanywa na:", options: ["Magurudumu", "Betri", "Programu", "Rangi ya kupaka"], answer: 2, why: "Programu ndiyo inayoamua cha kufanya." },
      { objective: "O1", q: "Je, roboti zote zinatumia AI?", options: ["Hapana, nyingi zinafuata sheria rahisi", "Ndiyo, kila wakati", "Roboti za kufagia sakafu tu", "Kwenye filamu tu"], answer: 0, why: "Roboti nyingi zinaendesha programu rahisi zinazofuata sheria." },
      { objective: "O2", q: "Kipi ni kiendeshi?", options: ["Kamera", "Kihisi cha kugonga", "GPS", "Mota"], answer: 3, why: "Mota huifanya roboti isogee." },
      { objective: "O2", q: "Servo ni:", options: ["Kihisi cha umbali", "Mota inayozunguka hadi pembe kamili", "Chaja ya betri", "Aina ya kitanzi"], answer: 1, why: "Servo hutumika kwa viungo vinavyohitaji pembe kamili." },
      { objective: "O2", q: "Roboti lazima ijue inapogusa kitu. Kihisi kipi kinafaa?", options: ["Spika", "Kihisi cha kugonga", "Taa ya rangi", "Saa"], answer: 1, why: "Kihisi cha kugonga hutambua mguso." },
      { objective: "O3", q: "Algorithimu ni:", options: ["Chapa ya roboti", "Aina ya mota", "Sheria ya usalama", "Orodha ya hatua kamili za kumaliza kazi"], answer: 3, why: "Algorithimu ni mipango ya hatua kwa hatua." },
      { objective: "O3", q: "Kwa nini ujaribu algorithimu kwenye karatasi kwanza?", options: ["Kupata makosa kabla ya kuweka msimbo", "Kwa sababu roboti zinahitaji karatasi", "Kuifanya iwe ndefu zaidi", "Inatakiwa na sheria"], answer: 0, why: "Kuipitia hupata makosa mapema." },
      { objective: "O3", q: "\"Ikiwa ukuta uko karibu, simama; vinginevyo endesha\" ni:", options: ["Kitanzi", "Kishikio", "Uamuzi wa ikiwa-basi", "Uwanja"], answer: 2, why: "Huchagua kati ya vitendo kulingana na hali." },
      { objective: "O3", q: "Chati mtiririko inaonyesha algorithimu kwa:", options: ["Noti za muziki", "Picha", "Nywila", "Visanduku na mishale"], answer: 3, why: "Chati mtiririko huchora hatua kama visanduku vilivyounganishwa na mishale." },
      { objective: "O4", q: "Msimbo wa vitalu maana yake:", options: ["Kuandika msimbo mrefu kwa herufi tu", "Kuzuia tovuti", "Kuunganisha vitalu vya picha ili kuandika programu", "Kujenga kwa vitalu vya mbao"], answer: 2, why: "Vitalu ni vipande vya msimbo vinavyoonekana kama picha." },
      { objective: "O4", q: "Unapaswa kurudia \"mbele, geuka kulia 90\" mara ngapi ili kuendesha mraba?", options: ["2", "3", "4", "10"], answer: 2, why: "Mraba una pande nne na mageuko manne." },
      { objective: "O4", q: "Kwa nini uendeshe programu yako baada ya kila badiliko dogo?", options: ["Kujua ni badiliko lipi lilisababisha nini", "Kutumia betri zaidi", "Kwa sababu inatakiwa", "Kufuta vitalu"], answer: 0, why: "Hatua ndogo hufanya matatizo yawe rahisi kupatikana." },
      { objective: "O5", q: "Kitanzi cha milele:", options: ["Kinaendeshwa mara moja", "Kinazima roboti", "Kinaendelea kujirudia hadi programu isimame", "Ni kihisi"], answer: 2, why: "Kinajirudia tena na tena." },
      { objective: "O5", q: "Kurekebisha hitilafu (debugging) maana yake:", options: ["Kutafuta na kurekebisha makosa katika programu", "Kusafisha wadudu kwenye roboti", "Kununua roboti mpya", "Kuzima vihisi"], answer: 0, why: "Hitilafu ni makosa ya programu." },
      { objective: "O5", q: "Roboti yako haisimami kamwe kwenye ukuta. Hitilafu inayowezekana ni ipi?", options: ["Roboti ina rangi isiyo sahihi", "Skrini inang'aa mno", "Uwanja ni mzuri mno", "Ukaguzi wa kihisi uko nje ya kitanzi au unatumia umbali usio sahihi"], answer: 3, why: "Mahali pasipo sahihi au namba zisizo sahihi katika ukaguzi wa kihisi ni hitilafu za kawaida." },
      { objective: "O6", q: "Ipi ni kazi halisi ya kufanya kazi na roboti?", options: ["Mtabiri wa bahati wa roboti", "Fundi wa roboti", "Mpaka rangi vihisi tu", "Hakuna kazi kama hizo"], answer: 1, why: "Mafundi hufunga, hutunza na hurekebisha roboti." },
      { objective: "O6", q: "Cobot ni:", options: ["Roboti ya kupika tu", "Roboti iliyobuniwa kufanya kazi karibu na watu", "Roboti iliyoharibika", "Roboti isiyo na vihisi"], answer: 1, why: "Roboti shirikishi zimejengwa kufanya kazi pamoja na watu." },
      { objective: "O6", q: "Unaona mkono wa roboti unaosogea haraka ukifanya kazi nyuma ya mstari wenye alama. Unafanya nini?", options: ["Unaingia ili kuangalia karibu zaidi", "Unaugusa ili kuujaribu", "Unazima vihisi vyake", "Unakaa nje ya eneo lenye alama na kufuata sheria za usalama za mahali hapo"], answer: 3, why: "Maeneo yenye alama huwaweka watu nje ya njia ya roboti." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      12,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Programu ya mraba",
        objective: "O4",
        notYet: "Roboti haiendeshi mraba, au programu haina kitanzi.",
        meets: "Kitalu cha kurudia kinaendesha roboti kwa umbo la mraba unaoishia karibu na mwanzo.",
        exceeds: "Umbali na mgeuko vilirekebishwa ili mraba uwe safi na sawa."
      },
      {
        name: "Programu ya kuepuka ukuta",
        objective: "O5",
        notYet: "Roboti inagonga ukuta au haisogei tena kamwe.",
        meets: "Kitanzi cha milele chenye ikiwa-basi-vinginevyo: inasimama na kugeuka kwenye ukuta, kisha inaendelea kuendesha.",
        exceeds: "Inafanya kazi kutoka zaidi ya mahali pamoja pa kuanzia katika uwanja."
      },
      {
        name: "Kujaribu na kurekebisha hitilafu",
        objective: "O5",
        notYet: "Hakuna hitilafu iliyopatikana wala kurekebishwa.",
        meets: "Angalau hitilafu moja ilipatikana na kurekebishwa kwa kubadilisha kitu kimoja kwa wakati.",
        exceeds: "Anaweza kueleza kilichosababisha hitilafu na jinsi alivyoipata."
      },
      {
        name: "Mpango kabla ya msimbo",
        objective: "O3",
        notYet: "Hakuna mpango ulioandikwa, au kuna hatua kama \"nenda kidogo\".",
        meets: "Mpango kwa maneno rahisi wenye hatua kamili, kitanzi na ikiwa-basi.",
        exceeds: "Mpango ulipitiwa kwenye karatasi na kurekebishwa kabla ya kuweka msimbo."
      },
      {
        name: "Hisi, fikiri, tenda imeelezwa",
        objective: "O1",
        notYet: "Sentensi tatu hazipo au hazitaji kihisi.",
        meets: "Sentensi tatu zinasema roboti inahisi nini, inaamua vipi na inatenda vipi.",
        exceeds: "Pia zinasema kama roboti inatumia AI au sheria rahisi, na kwa nini."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiunga na klabu ya roboti, darasa la kuandika msimbo au programu ya STEM (sayansi, teknolojia, uhandisi na hisabati) ndani ya siku 60",
      "Wanafunzi wanaoanza kozi nyingine ya teknolojia ya Koach Learn ndani ya siku 30",
      "Wanafunzi wanaoripoti kupenda njia ya ufundi wa roboti, kuandika programu au uhandisi (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta, Chromebook au tableti yenye kivinjari cha wavuti na intaneti",
      "Zana ya bure ya roboti pepe kama VEXcode VR (vr.vex.com), au ile ambayo shule au maktaba inapendelea",
      "Karatasi na kalamu kwa algorithimu na chati mtiririko",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi ya kuweka msimbo, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; onyesha vitalu vya kwanza kwenye skrini ya pamoja.",
      "Waambie wanafunzi waigize algorithimu: mmoja anasoma hatua na mwingine anazitembea sawasawa, ili kuonyesha kwa nini hatua lazima ziwe kamili.",
      "Waweke wanafunzi wawili wawili kwa kurekebisha hitilafu ili mmoja aendeshe programu na mwingine atafute kosa.",
      "Mkitembelea mahali penye roboti halisi, fuateni sheria za usalama za mahali hapo na kaeni na mwongozaji wakati wote.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
