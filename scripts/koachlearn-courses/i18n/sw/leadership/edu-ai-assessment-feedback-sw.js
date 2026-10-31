"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-assessment-feedback.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-assessment-feedback-sw",
  lang: "sw",
  translationOf: "edu-ai-assessment-feedback",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 4: AI kwa Tathmini na Mrejesho",
  skills: "Kuandika maswali ya tathmini yanayolingana na lengo kwa AI, Kujenga rubriki, Kubuni ukaguzi mfupi wa kujifunza, Kuandika mrejesho unaomilikiwa na mwalimu, Kulinda kazi na alama za wanafunzi, Kushughulikia kwa haki wasiwasi kuhusu uandishi wa AI",
  outcome: "kujenga kifurushi cha tathmini kwa AI, yaani maswali yanayolingana na lengo pamoja na majibu uliyoyakagua, rubriki ya ngazi nne pamoja na toleo rahisi kwa wanafunzi, tiketi ya kutoka na benki ya maoni ya mrejesho, na kukitumia kwa utaratibu wa mrejesho unaolinda faragha ya wanafunzi na kuacha kila alama mikononi mwa mwalimu.",
  about: [
    "Kozi hii ni kwa walimu, wakufunzi wa ufundishaji (instructional coaches), wasimamizi wa tathmini na wakuu wa shule. Tathmini na mrejesho vinachukua sehemu kubwa ya muda wa mwalimu, na AI inaweza kusaidia, lakini alama na maamuzi kuhusu wanafunzi ni mambo mazito. Kozi hii inaonyesha mahali AI inasaidia na mahali isipopaswa kuamua.",
    "Sura ya 1 inatumia AI kujenga tathmini: maswali yanayolingana na lengo, rubriki, na ukaguzi mfupi wa kujifunza. Sura ya 2 inahusu mrejesho: utaratibu ambapo AI inaandika rasimu na mwalimu anaamua, jinsi ya kulinda kazi za wanafunzi chini ya FERPA (sheria ya Marekani ya faragha ya rekodi za wanafunzi), na jinsi ya kushughulikia kwa haki shaka ya matumizi ya AI katika kazi za wanafunzi.",
    "Fanya mazoezi kwa kazi za wanafunzi za kubuni tu, au kazi ambazo kila taarifa ya kumtambulisha mwanafunzi imeondolewa, na utumie zana tu ambazo wilaya yako imeidhinisha kwa kazi za wanafunzi. Jaribio la maarifa linamaliza kila sura na mtihani wa maswali 20 unamaliza kozi. Hii ni kozi ya 4 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  ],
  finalTask: "Jenga kifurushi cha tathmini kwa lengo moja: maswali matano yanayolingana na lengo pamoja na majibu uliyoyakagua, rubriki ya ngazi nne yenye vigezo vitatu au vinne na toleo rahisi kwa wanafunzi, tiketi ya kutoka ya maswali matatu, na benki ya maoni yenye angalau maoni manane yanayofungamana na rubriki. Jaribu utaratibu wa mrejesho kwa majibu matatu ya wanafunzi ya kubuni, badilisha angalau maoni moja yaliyoandikwa na AI, na uandike alama mwenyewe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu, wakufunzi wa ufundishaji, wasimamizi wa tathmini na wakuu wa shule katika shule za Marekani wanaoandika tathmini, wanaotoa mrejesho au wanaowasaidia walimu wanaofanya hivyo.",
    startingPoint: "Wanaweza kupanga somo kwa AI na kulikagua, na wanajua misingi ya FERPA kutoka kozi zilizotangulia. Wanaandika tathmini na mrejesho kwa mkono, na huenda hawajui jinsi ya kujibu shaka ya matumizi ya AI na wanafunzi.",
    gap: "Tathmini na mrejesho vinachukua sehemu kubwa ya muda wa mwalimu, na AI inaweza kusaidia, lakini alama ni mambo mazito. Waelimishaji wanahitaji kujenga tathmini zinazolingana na lengo kwa AI, kutumia utaratibu ambapo AI inaandika rasimu na mwalimu anaamua, kulinda kazi za wanafunzi na kushughulikia kwa haki shaka ya matumizi ya AI.",
    constraints: [
      "Fanya mazoezi kwa kazi za wanafunzi za kubuni tu, au kazi ambazo kila taarifa ya kumtambulisha mwanafunzi imeondolewa",
      "Tumia zana tu ambazo wilaya imeidhinisha kwa kazi za wanafunzi",
      "Walimu wanaamua kila alama; AI haiwapi wanafunzi alama yenyewe kamwe",
      "Alama za vigunduzi vya uandishi wa AI si ushahidi pekee wa matumizi mabaya kamwe",
      "Muda: masomo mafupi yanayoingia katika siku ya kufundisha"
    ],
    prerequisites: "\"AI kwa Viongozi wa Shule na Elimu 3: AI kwa Kupanga Masomo\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa lengo moja", action: "kutunga kwa AI maswali yanayolingana na lengo katika ngazi tatu na kutatua kila jibu katika orodha ya majibu", standard: "ukirekebisha au kuondoa swali lolote lenye kosa au lenye majibu mawili yanayowezekana" },
    { id: "O2", condition: "Kwa kazi unayowapa wanafunzi", action: "kuunda kwa AI rubriki ya ngazi nne na toleo rahisi kwa wanafunzi", standard: "kila kisanduku kikiwa wazi kiasi kwamba walimu wawili wangeipa kazi ile ile alama ile ile" },
    { id: "O3", condition: "Kwa lengo moja", action: "kubuni swali la bawaba (hinge question) na tiketi ya kutoka ya maswali matatu", standard: "ukiamua kabla ya ukaguzi utafundisha nini upya kwa kila jibu lisilo sahihi" },
    { id: "O4", condition: "Ukipewa majibu ya wanafunzi na rubriki yako", action: "kutumia AI kuandika rasimu ya maoni ya \"glow and grow\" (nguvu na hatua inayofuata), kisha kuyahariri na kuandika alama mwenyewe", standard: "angalau maoni moja ya AI yakiwa yamebadilishwa na kila alama ikiwa imeamuliwa na wewe" },
    { id: "O5", condition: "Zana za AI zinapogusa kazi au alama za wanafunzi", action: "kutumia misingi ya FERPA na kuzieleza familia jinsi AI inavyotumika kwa mrejesho", standard: "ukitumia zana zilizoidhinishwa tu na taarifa za kutambulisha zikiwa zimeondolewa" },
    { id: "O6", condition: "Unaposhuku matumizi mabaya ya AI katika kazi ya mwanafunzi", action: "kujibu kwa utaratibu wa haki na kanuni wazi ya matumizi ya AI kwa kila kazi", standard: "bila kutumia kamwe alama ya kigunduzi kama ushahidi pekee" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujenga tathmini kwa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika maswali yanayolingana na lengo na kukagua majibu",
          minutes: 5,
          goal: "Tunga maswali ya tathmini yanayolingana na lengo na uhakiki majibu.",
          text: [
            "Ipe AI lengo na vigezo vya mafanikio (kama katika kozi ya 3), darasa, na aina ya maswali unayotaka: kuchagua jibu (multiple choice), jibu fupi, tatizo la kutatua, au kazi ya kueleza fikra. Omba maswali katika ngazi tofauti za kufikiri: kukumbuka, kutumia, na kueleza au kuchambua.",
            "Omba orodha ya majibu yenye sababu fupi kwa kila jibu, na kwa maswali ya kuchagua jibu, kwa nini kila chaguo lisilo sahihi linavutia. Machaguo yasiyo sahihi yanayoakisi dhana potofu halisi yanakuambia zaidi kuhusu jinsi wanafunzi wanavyofikiri.",
            "Kisha kagua kila swali mwenyewe. Orodha za majibu za AI zina makosa, maswali ya kuchagua jibu yanaweza kuwa na majibu mawili sahihi, na maneno yanaweza kuwachanganya wanafunzi wanaojifunza Kiingereza. Ondoa swali lolote ambalo halipimi lengo."
          ],
          steps: ["Toa lengo, vigezo vya mafanikio, darasa na aina za maswali.", "Omba mchanganyiko: kukumbuka, kutumia, kueleza.", "Omba majibu yenye sababu, na kwa nini machaguo yasiyo sahihi yanavutia.", "Tatua kila jibu na usome kila swali uone kama liko wazi.", "Ondoa maswali yasiyopima lengo."],
          words: [["Swali linalolingana na lengo", "swali linalopima lengo ambalo linakusudiwa kupima."], ["Kipotoshi (distractor)", "chaguo lisilo sahihi katika swali la kuchagua jibu."], ["Orodha ya majibu (key)", "orodha ya majibu sahihi."]],
          slides: [
            { title: "Iambie AI cha kupima", bullets: ["Lengo na vigezo vya mafanikio", "Darasa na aina za maswali", "Kukumbuka, kutumia, kueleza"] },
            { title: "Omba majibu yenye sababu", bullets: ["Kwa nini kila jibu ni sahihi", "Kwa nini kila chaguo lisilo sahihi linavutia", "Vipotoshi vinavyofichua dhana potofu"] },
            { title: "Kagua kila swali", bullets: ["Orodha za majibu zina makosa", "Majibu mawili sahihi? Maneno yanayochanganya?", "Ondoa maswali yaliyo nje ya lengo"] }
          ],
          tryIt: "Iombe AI maswali sita kuhusu lengo moja katika ngazi tatu pamoja na majibu. Tatua kila jibu mwenyewe na uhesabu makosa au maswali yasiyo wazi.",
          youCanNow: "kuandika kwa AI maswali ya tathmini yanayolingana na lengo na kukagua majibu.",
          quickCheck: [
            { objective: "O1", q: "Kipotoshi (distractor) katika swali la kuchagua jibu ni nini?", options: ["Chaguo lisilo sahihi katika orodha", "Swali gumu mno", "Kelele darasani", "Jibu sahihi"], answer: 0, why: "Vipotoshi vizuri vinaakisi dhana potofu halisi, na hivyo vinaonyesha jinsi wanafunzi wanavyofikiri." },
            { objective: "O1", q: "Unatatua majibu ya AI na jibu moja si sahihi. Ungefanya nini?", options: ["Kuliacha; wanafunzi hawataona", "Kuiomba AI isahihishe upya darasa zima", "Kurekebisha jibu na kukagua maswali mengine kwa makini", "Kuondoa maswali yote"], answer: 2, why: "Kutatua kila jibu kunakamata makosa kabla wanafunzi hawajapewa alama." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujenga rubriki ambayo wanafunzi wanaielewa",
          minutes: 6,
          goal: "Unda kwa AI rubriki ya ngazi nne na toleo rahisi kwa wanafunzi.",
          text: [
            "Rubriki inaeleza ubora katika kila ngazi kwa kila kigezo. Iombe AI rubriki ya uchambuzi (analytic rubric): vigezo vitatu au vinne kutoka vigezo vyako vya mafanikio, ngazi nne (kwa mfano: mwanzo, inakua, imefikia, ya juu), na maelezo mafupi ya jinsi kazi inavyoonekana katika kila ngazi.",
            "Maelezo mazuri ya ngazi yanaeleza kilichopo, si \"zaidi\" au \"kidogo\" tu: \"inatumia vipande viwili vya ushahidi na kueleza jinsi kila kimoja kinavyounga mkono dai\" ni bora kuliko \"matumizi mazuri ya ushahidi\". Iombe AI iandike upya visanduku visivyo wazi.",
            "Kisha omba toleo rahisi kwa wanafunzi kwa sentensi za \"Mimi\", na ujaribu yote mawili kwa sampuli: je, kazi moja inaingia wazi katika ngazi moja? Rubriki ni ya haki tu ikiwa walimu wawili wangeipa kazi ile ile alama ile ile."
          ],
          steps: ["Toa kazi na vigezo vya mafanikio.", "Omba vigezo 3-4 na ngazi 4.", "Andika upya visanduku visivyo wazi viseme kilichopo katika kazi.", "Omba toleo rahisi kwa wanafunzi la \"Mimi\".", "Jaribu kwa sampuli: walimu wawili wangekubaliana?"],
          words: [["Rubriki", "mwongozo wa kutoa alama unaoeleza ubora katika ngazi tofauti."], ["Kigezo", "ubora mmoja unaopimwa, kama matumizi ya ushahidi."], ["Rubriki ya uchambuzi", "rubriki inayotoa alama kwa kila kigezo peke yake."]],
          slides: [
            { title: "Rubriki ya uchambuzi", bullets: ["Vigezo 3-4 kutoka vigezo vya mafanikio", "Ngazi 4 kwa kila kimoja", "Maelezo mafupi kwa kila kisanduku"] },
            { title: "Eleza kilichopo", bullets: ["Si \"matumizi mazuri ya ushahidi\"", "Bali \"vipande viwili vya ushahidi, kila kimoja kimeelezwa\""] },
            { title: "Ifanye ya haki na wazi", bullets: ["Toleo rahisi la \"Mimi\" kwa wanafunzi", "Walimu wawili wangekubaliana?"] }
          ],
          tryIt: "Jenga kwa AI rubriki ya ngazi nne kwa kazi unayowapa wanafunzi. Andika upya kisanduku chochote kisicho wazi, tengeneza toleo la wanafunzi, na uijaribu kwa jibu moja la kubuni.",
          youCanNow: "kujenga kwa AI rubriki wazi ya ngazi nne na toleo rahisi kwa wanafunzi.",
          quickCheck: [
            { objective: "O2", q: "Rubriki ya uchambuzi ni nini?", options: ["Rubriki yenye alama moja ya jumla", "Rubriki inayotoa alama kwa kila kigezo peke yake", "Rubriki iliyoandikwa na AI", "Orodha ya vifaa"], answer: 1, why: "Rubriki za uchambuzi zinatoa ngazi tofauti kwa kila kigezo." },
            { objective: "O2", q: "Kisanduku cha rubriki kinasema \"matumizi mazuri ya ushahidi\". Ungebadilisha nini?", options: ["Hakuna, kiko wazi", "Kuondoa kisanduku", "Kuongeza neno \"sana\"", "Kusema hasa wanafunzi wanafanya nini, kama \"inatumia vipande viwili vya ushahidi na kueleza kila kimoja\""], answer: 3, why: "Visanduku vilivyo wazi vinafanya utoaji wa alama kuwa wa haki na vinawasaidia wanafunzi kujua la kufanya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ukaguzi mfupi wa kujifunza",
          minutes: 5,
          goal: "Buni tiketi za kutoka na ukaguzi ndani ya somo unaoonyesha nani anahitaji nini baadaye.",
          text: [
            "Tathmini endelevu (formative assessment) ni kukagua kujifunza wakati wa kufundisha ili uweze kurekebisha. Haina uzito mkubwa na ni ya haraka. AI ni hodari wa kutengeneza ukaguzi mfupi mwingi: tiketi za kutoka za maswali matatu, swali moja la bawaba katikati ya somo, na mazoezi mafupi ya ubao mdogo.",
            "Swali la bawaba (hinge question) lina machaguo yaliyobuniwa ili kila jibu lisilo sahihi lionyeshe dhana potofu fulani. Iombe AI: \"Andika swali moja la bawaba la kuchagua jibu kwa [lengo]. Kila jibu lisilo sahihi lifichue dhana potofu tofauti ya kawaida; eleza ni ipi.\"",
            "Panga utakachofanya na matokeo kabla ya kutoa ukaguzi: nani atafundishwa upya, nani ataendelea mbele. Ukaguzi usioufanyia kazi ni karatasi zaidi tu."
          ],
          steps: ["Chagua wakati: katikati ya somo au mwishoni mwa somo.", "Iombe AI swali la bawaba au tiketi ya kutoka ya maswali matatu.", "Hakikisha kila jibu lisilo sahihi linaonyesha dhana potofu halisi.", "Amua mapema utakachofanya na kila matokeo.", "Yafanyie kazi siku inayofuata."],
          words: [["Tathmini endelevu", "ukaguzi usio na uzito mkubwa wakati wa kujifunza, unaotumika kurekebisha ufundishaji."], ["Tiketi ya kutoka (exit ticket)", "kazi fupi wanayoifanya wanafunzi mwishoni mwa somo."], ["Swali la bawaba", "swali ambalo kila jibu lake lisilo sahihi linafichua dhana potofu fulani."]],
          slides: [
            { title: "Endelevu = kagua na urekebishe", bullets: ["Uzito mdogo na ya haraka", "Tiketi za kutoka, maswali ya bawaba, ubao mdogo"] },
            { title: "Maswali ya bawaba", bullets: ["Swali moja katikati ya somo", "Kila jibu lisilo sahihi = dhana potofu", "Iombe AI ieleze ni ipi"] },
            { title: "Panga jibu lako", bullets: ["Nani atafundishwa upya?", "Nani ataendelea mbele?", "Ukaguzi usiotumika ni karatasi tu"] }
          ],
          tryIt: "Iombe AI swali moja la bawaba na tiketi ya kutoka ya maswali matatu kwa lengo lako. Kwa kila jibu lisilo sahihi la swali la bawaba, andika utakachofundisha upya.",
          youCanNow: "kubuni ukaguzi mfupi wa kujifunza na kupanga utakachofanya na matokeo.",
          quickCheck: [
            { objective: "O3", q: "Tathmini endelevu ni nini?", options: ["Mtihani wa mwisho", "Mtihani wa jimbo", "Ukaguzi usio na uzito mkubwa wakati wa kujifunza ili kurekebisha ufundishaji", "Alama ya tabia"], answer: 2, why: "Ukaguzi endelevu unakuambia ufundishe nini baadaye." },
            { objective: "O3", q: "Nusu ya darasa wanachagua jibu lile lile lisilo sahihi la swali la bawaba. Unafanya nini?", options: ["Kufundisha upya dhana potofu ambayo jibu hilo linafichua", "Kuendelea na somo linalofuata", "Kuwapa wote alama ya chini", "Kuiomba AI isahihishe swali la bawaba"], answer: 0, why: "Kila jibu lisilo sahihi la swali la bawaba linaonyesha dhana potofu unayoweza kufundisha upya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujenga tathmini kwa AI",
        questions: [
          { objective: "O1", q: "Kwa nini uiombe AI ieleze kwa nini kila chaguo lisilo sahihi linavutia?", options: ["Linafanya jaribio kuwa refu zaidi", "Ili kuwadanganya wanafunzi isivyo haki", "Vipotoshi vinavyoakisi dhana potofu vinaonyesha jinsi wanafunzi wanavyofikiri", "Ni lazima"], answer: 2, why: "Vipotoshi vizuri vinafichua dhana potofu." },
          { objective: "O1", q: "Swali la AI la kuchagua jibu lina majibu mawili yanayoweza kuwa sahihi. Unapaswa:", options: ["Kulirekebisha au kuliondoa", "Kuliacha", "Kukubali jibu lolote kati ya hayo", "Kuwapa wote alama kamili"], answer: 0, why: "Kila swali linahitaji jibu moja sahihi lililo wazi." },
          { objective: "O2", q: "Kisanduku kipi cha rubriki kimeandikwa vizuri zaidi?", options: ["\"Ushahidi mzuri\"", "\"Ushahidi zaidi\"", "\"Kazi nzuri\"", "\"Inatumia vipande viwili vya ushahidi na kueleza jinsi kila kimoja kinavyounga mkono dai\""], answer: 3, why: "Kinaeleza kilichopo katika kazi." },
          { objective: "O3", q: "Swali la bawaba ni nini?", options: ["Swali kuhusu milango", "Swali ambalo kila jibu lake lisilo sahihi linafichua dhana potofu", "Swali la mtihani wa mwisho", "Swali la kazi ya nyumbani"], answer: 1, why: "Linaonyesha cha kufundisha upya katikati ya somo." },
          { objective: "O3", q: "Unapaswa kuamua lini utakachofanya na matokeo ya tiketi ya kutoka?", options: ["Ikiwa tu wanafunzi wengi wameshindwa", "Kamwe", "Mwishoni mwa mwaka", "Kabla ya kutoa ukaguzi"], answer: 3, why: "Kupanga jibu lako kunafanya ukaguzi uwe na manufaa." }
        ]
      }
    },
    {
      name: "Sura 2: Mrejesho unaomilikiwa na mwalimu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Utaratibu wa mrejesho: AI inaandika rasimu, mwalimu anaamua",
          minutes: 6,
          goal: "Tumia AI kuandika rasimu ya mrejesho unaofungamana na rubriki, kisha uuhariri na uumiliki.",
          text: [
            "Mrejesho mzuri ni mahususi, unafungamana na vigezo, na unamwambia mwanafunzi afanye nini baadaye. Benki ya maoni inasaidia: iombe AI maoni mawili au matatu kwa kila kigezo na ngazi ya rubriki, kila moja likiwa na nguvu moja (\"glow\") na hatua moja inayofuata (\"grow\").",
            "Utaratibu: soma kazi ya mwanafunzi mwenyewe kwanza na uamue ngazi ya rubriki. Kisha chagua au andika maoni, ukitumia AI kurekebisha maneno ikihitajika. Ukitumia AI kuandika rasimu ya maoni kuhusu kazi halisi za wanafunzi, fanya hivyo tu katika zana ambayo wilaya yako imeidhinisha kwa kazi za wanafunzi, na uondoe majina na taarifa za kutambulisha.",
            "Wewe ndiye unayeandika alama. Alama za AI zinaweza kutofautiana, zinaweza kupendelea urefu kuliko ubora, na zinaweza kuwa si za haki kwa wanafunzi wanaojifunza Kiingereza na wanafunzi wenye ulemavu. Hariri kila maoni ili yasikike kama wewe na yamfae mwanafunzi; wanafunzi wanatambua mrejesho wa jumla."
          ],
          steps: ["Jenga benki ya maoni kwa kigezo na ngazi: glow na grow.", "Soma kazi mwenyewe na uchague ngazi ya rubriki.", "Chagua au rekebisha maoni; tumia zana zilizoidhinishwa tu kwa kazi halisi.", "Ondoa majina na taarifa za kutambulisha.", "Andika alama mwenyewe; hariri kila maoni."],
          words: [["Benki ya maoni", "mkusanyiko uliohifadhiwa wa maoni ya mrejesho unayoweza kuyatumia tena na kuyarekebisha."], ["Glow and grow", "mrejesho wenye nguvu moja (glow) na hatua moja inayofuata (grow)."]],
          slides: [
            { title: "Mrejesho mzuri", bullets: ["Mahususi na unafungamana na vigezo", "Nguvu moja, hatua moja inayofuata"] },
            { title: "Utaratibu", bullets: ["Unasoma kazi na kuchagua ngazi", "Chagua au rekebisha maoni", "Zana zilizoidhinishwa tu kwa kazi halisi; bila majina"] },
            { title: "Wewe unaandika alama", bullets: ["Alama za AI zinaweza kutofautiana", "Zinaweza kupendelea urefu kuliko ubora", "Hariri ili yasikike kama wewe"] }
          ],
          tryIt: "Jenga benki ya maoni manane ya glow-and-grow kwa rubriki yako. Andika majibu matatu ya wanafunzi ya kubuni, yape alama mwenyewe, na uchague na uhariri maoni kwa kila moja.",
          youCanNow: "kuendesha utaratibu wa mrejesho ambapo AI inasaidia kuandika rasimu na wewe unaamua.",
          quickCheck: [
            { objective: "O4", q: "Benki ya maoni ni nini?", options: ["Mrejesho ambao AI inawatumia wanafunzi yenyewe", "Maoni ya mrejesho yaliyohifadhiwa unayoyatumia tena na kuyarekebisha", "Orodha ya alama", "Akaunti ya benki ya fedha za shule"], answer: 1, why: "Benki ya maoni inaokoa muda huku mwalimu bado akichagua na kuhariri kila maoni." },
            { objective: "O4", q: "AI inaandika rasimu ya maoni yasiyolingana na kazi ya mwanafunzi. Ungefanya nini?", options: ["Kuyatuma hivyo hivyo", "Kuiacha AI ibadilishe alama", "Kuacha kumpa mwanafunzi huyo mrejesho", "Kuhariri maoni yalingane na kazi, na kubaki na alama yako mwenyewe"], answer: 3, why: "AI inaandika rasimu na mwalimu anaamua, kwa hiyo unamiliki kila maoni na kila alama." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kulinda kazi na alama za wanafunzi",
          minutes: 5,
          goal: "Tumia misingi ya FERPA kwa kazi za wanafunzi, alama na zana za AI.",
          text: [
            "Kazi na alama za wanafunzi zinazohifadhiwa na shule kwa kawaida ni sehemu ya rekodi za elimu chini ya FERPA. Kutoa taarifa zinazoweza kumtambulisha mtu (PII) kutoka rekodi hizo kwa kampuni ya nje kwa kawaida kunahitaji idhini, isipokuwa kama kuna msamaha unaohusika; kwa mfano, mtoa huduma anaweza kufanya kazi kama afisa wa shule anapotoa huduma ya shule, yuko chini ya udhibiti wa moja kwa moja wa shule, na anafuata mipaka ya kushiriki taarifa tena. Ndiyo sababu mikataba ya wilaya ni muhimu.",
            "Kanuni za vitendo kwa wafanyakazi: tumia zana zilizoidhinishwa na wilaya tu kwa kazi halisi za wanafunzi; ondoa majina na taarifa za kutambulisha hata hapo; usipakie kamwe vitabu vya alama, nyaraka za IEP au 504 (mipango ya elimu maalum na ya msaada kwa ulemavu), au taarifa za nidhamu kwenye zana zisizoidhinishwa; na kagua masharti ya zana kuhusu kama inahifadhi au inajifunzia kazi zilizopakiwa.",
            "Zieleze familia jinsi AI inavyotumika katika mrejesho. Wazazi wana haki chini ya FERPA ya kukagua na kupitia rekodi za elimu za mtoto wao, na uwazi unajenga imani. Kwa kanuni hasa za wilaya yako, muulize afisa wa faragha."
          ],
          steps: ["Tumia zana zilizoidhinishwa tu kwa kazi halisi za wanafunzi.", "Ondoa majina na taarifa za kutambulisha.", "Usipakie kamwe vitabu vya alama, rekodi za IEP, 504 au nidhamu kwenye zana zisizoidhinishwa.", "Kagua kama zana inahifadhi au inajifunzia kazi zilizopakiwa.", "Zieleze familia jinsi AI inavyotumika katika mrejesho."],
          words: [["Rekodi ya elimu", "rekodi inayomhusu mwanafunzi moja kwa moja na inayohifadhiwa na shule."], ["Msamaha wa afisa wa shule", "kanuni ya FERPA inayoruhusu watoa huduma fulani walio chini ya udhibiti wa shule kufikia rekodi kwa kusudi la shule."]],
          slides: [
            { title: "Kazi na alama ni rekodi", bullets: ["Kwa kawaida ni rekodi za elimu chini ya FERPA", "Kushiriki PII kwa kawaida kunahitaji idhini", "Isipokuwa kama kuna msamaha unaohusika"] },
            { title: "Kanuni kwa wafanyakazi", bullets: ["Zana zilizoidhinishwa tu kwa kazi halisi", "Ondoa majina hata hivyo", "Hakuna vitabu vya alama, IEP wala faili za nidhamu"] },
            { title: "Kuwa wazi kwa familia", bullets: ["Eleza jinsi AI inavyosaidia katika mrejesho", "Wazazi wanaweza kukagua rekodi", "Muulize afisa wa faragha kwa maelezo zaidi"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (Wizara ya Elimu ya Marekani)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Andika ujumbe wa sentensi tatu kwa familia unaoeleza jinsi darasa lako au shule yako inavyotumia AI kusaidia katika mrejesho, nini kinalindwa, na kwamba walimu wanaamua alama zote.",
          youCanNow: "kulinda kazi na alama za wanafunzi AI inapokuwa sehemu ya mchakato wa mrejesho.",
          quickCheck: [
            { objective: "O5", q: "Chini ya FERPA, kazi ya mwanafunzi inayohifadhiwa na shule kwa kawaida ni sehemu ya nini?", options: ["Rekodi za elimu", "Rekodi za umma ambazo mtu yeyote anaweza kuona", "Maelezo binafsi ya mwalimu", "Mali ya mtoa huduma"], answer: 0, why: "Kazi ya mwanafunzi inayohifadhiwa na shule kwa kawaida ni sehemu ya rekodi za elimu zinazolindwa." },
            { objective: "O5", q: "Mwalimu anataka msaada wa AI kwa mrejesho kuhusu insha halisi. Ungemshauri nini?", options: ["Kubandika insha kwenye chatbot yoyote ya bure", "Kupakia pia kitabu cha alama, kwa muktadha", "Kutumia zana iliyoidhinishwa na wilaya tu, na taarifa za kutambulisha zikiwa zimeondolewa", "Kuwaambia wanafunzi wabandike insha zao wenyewe kwenye AI"], answer: 2, why: "Zana zilizoidhinishwa na kuondoa taarifa za kutambulisha kunalinda rekodi za wanafunzi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shaka ya matumizi ya AI katika kazi za wanafunzi: kuishughulikia kwa haki",
          minutes: 6,
          goal: "Jibu shaka ya matumizi ya AI kwa kanuni wazi na utaratibu wa haki, si kwa alama ya kigunduzi.",
          text: [
            "Vigunduzi vya uandishi wa AI vinaweza kukosea. Vinaweza kushuku kazi ya uaminifu, na tafiti na waelimishaji wameeleza wasiwasi kwamba vinashuku maandishi ya wanafunzi wanaojifunza Kiingereza mara nyingi zaidi. Alama ya kigunduzi peke yake isiwe kamwe ushahidi wa uamuzi wa udanganyifu.",
            "Zuia kwanza: waambie wanafunzi wazi ni matumizi gani ya AI yanaruhusiwa katika kila kazi (kwa mfano: hakuna, kuchangia mawazo tu, au yanaruhusiwa pamoja na maelezo yanayosema jinsi). Buni kazi ambazo fikra zinaonekana: rasimu, uandishi darasani, maelezo ya mdomo, uhusiano na maisha ya mwanafunzi.",
            "Ukishuku matumizi mabaya, zungumza na mwanafunzi: mwombe aeleze kazi yake, aonyeshe rasimu au afanye upya sehemu moja darasani. Fuata sera ya shule yako ya uadilifu wa kitaaluma, washirikishe familia kama sera inavyotaka, na ufanye kuwa nafasi ya kujifunza pale unapoweza."
          ],
          steps: ["Taja matumizi ya AI yanayoruhusiwa kwa kila kazi.", "Buni kazi ambazo fikra zinaonekana.", "Usitegemee kamwe alama ya kigunduzi peke yake.", "Zungumza na mwanafunzi; mwombe aeleze au aonyeshe rasimu.", "Fuata sera yako ya uadilifu wa kitaaluma."],
          words: [["Uadilifu wa kitaaluma", "uaminifu katika kazi za shule: kufanya kazi yako mwenyewe na kusema ulipopata msaada."], ["Kosa la kushuku (false positive)", "kigunduzi kinaposhuku kimakosa kazi ya uaminifu."]],
          slides: [
            { title: "Vigunduzi vinaweza kukosea", bullets: ["Vinaweza kushuku kazi ya uaminifu", "Wasiwasi kuhusu wanafunzi wanaojifunza Kiingereza", "Si ushahidi pekee kamwe"] },
            { title: "Zuia kwanza", bullets: ["Taja matumizi ya AI yanayoruhusiwa kwa kila kazi", "Fanya fikra zionekane: rasimu, mazungumzo, kazi darasani"] },
            { title: "Ukishuku matumizi mabaya", bullets: ["Zungumza na mwanafunzi", "Mwombe aeleze au afanye upya sehemu moja", "Fuata sera yako ya uadilifu"] }
          ],
          tryIt: "Kazi ya mwisho: maliza kifurushi chako cha tathmini (maswali matano yaliyokaguliwa, rubriki na toleo la wanafunzi, tiketi ya kutoka, benki ya maoni manane), endesha utaratibu wa mrejesho kwa majibu matatu ya kubuni ukiandika alama mwenyewe, na uongeze kanuni ya mstari mmoja ya matumizi ya AI kwa kazi hiyo.",
          youCanNow: "kutumia AI katika tathmini na mrejesho huku ukiweka alama kuwa za haki, za siri na mikononi mwa mwalimu.",
          quickCheck: [
            { objective: "O6", q: "Vigunduzi vya uandishi wa AI vinaweza kukosea kwa kufanya nini?", options: ["Hakuna; viko sahihi kila wakati", "Kushuku kazi ya uaminifu kuwa imeandikwa na AI", "Kusahihisha insha", "Kuandika insha"], answer: 1, why: "Vigunduzi vinaweza kushuku kimakosa kazi ya uaminifu, kwa hiyo si ushahidi pekee kamwe." },
            { objective: "O6", q: "Unashuku mwanafunzi alitumia AI kinyume na kanuni ya kazi. Hatua ya kwanza ya haki ni ipi?", options: ["Kumpa sifuri mara moja", "Kuliripoti kwa darasa zima", "Kutumia vigunduzi vitatu zaidi", "Kumwomba mwanafunzi aeleze kazi yake au aonyeshe rasimu"], answer: 3, why: "Mazungumzo na ushahidi mwingine ni ya haki zaidi kuliko alama ya kigunduzi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mrejesho unaomilikiwa na mwalimu",
        questions: [
          { objective: "O4", q: "Katika utaratibu wa mrejesho, mwalimu anafanya nini kwanza?", options: ["Kubandika kazi kwenye zana yoyote ya AI", "Kuiacha AI isahihishe", "Kusoma kazi na kuchagua ngazi ya rubriki", "Kuituma kwa wazazi"], answer: 2, why: "Uamuzi wa mwalimu unakuja kwanza." },
          { objective: "O4", q: "Nani anaandika alama?", options: ["Mwalimu", "AI", "Mwanafunzi", "Mtoa huduma"], answer: 0, why: "Alama ni maamuzi ya mwalimu." },
          { objective: "O5", q: "Chini ya FERPA, kazi ya mwanafunzi inayohifadhiwa na shule kwa kawaida ni:", options: ["Taarifa za umma", "Sehemu ya rekodi za elimu", "Mali ya kampuni ya AI", "Haihusiki"], answer: 1, why: "Rekodi zinazomhusu mwanafunzi moja kwa moja na zinazohifadhiwa na shule ni rekodi za elimu." },
          { objective: "O6", q: "Kigunduzi kinasema insha imeandikwa na AI kwa 90%. Unapaswa kufanya nini?", options: ["Kuzungumza na mwanafunzi na kuangalia ushahidi mwingine", "Kumpa sifuri", "Kuiripoti familia", "Kupuuza sera zote"], answer: 0, why: "Alama za kigunduzi peke yake si uthibitisho." },
          { objective: "O6", q: "Kipi kinazuia vizuri zaidi matumizi mabaya ya AI?", options: ["Kutosema chochote", "Kupiga marufuku kompyuta milele", "Kutumia vigunduzi zaidi", "Kutaja matumizi ya AI yanayoruhusiwa kwa kila kazi na kufanya fikra zionekane"], answer: 3, why: "Kanuni wazi na fikra zinazoonekana zinazuia matatizo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 4: AI kwa Tathmini na Mrejesho",
    questions: [
      { objective: "O1", q: "Swali linalolingana na lengo:", options: ["Ndilo gumu zaidi", "Linapima lengo ambalo linakusudiwa kupima", "Ndilo refu zaidi", "Limechaguliwa na AI peke yake"], answer: 1, why: "Kulingana na lengo ni kipimo cha kwanza cha swali zuri." },
      { objective: "O1", q: "Kipotoshi (distractor) ni:", options: ["Simu", "Mwanafunzi mwenye kelele", "Chaguo lisilo sahihi katika swali la kuchagua jibu", "Swali la ziada"], answer: 2, why: "Vipotoshi vizuri vinafichua dhana potofu." },
      { objective: "O1", q: "Baada ya AI kuandika orodha ya majibu, unapaswa:", options: ["Kuichapisha", "Kuiamini", "Kutatua kila jibu mwenyewe", "Kuwapa wanafunzi"], answer: 2, why: "Orodha za majibu zina makosa." },
      { objective: "O1", q: "Mchanganyiko wa ngazi za maswali unamaanisha:", options: ["Kukumbuka, kutumia na kueleza", "Rahisi tu", "Magumu tu", "Kweli au si kweli tu"], answer: 0, why: "Ngazi tofauti zinaonyesha kina tofauti cha kujifunza." },
      { objective: "O2", q: "Rubriki ya uchambuzi:", options: ["Imeandikwa na wanafunzi", "Inatoa alama moja ya jumla tu", "Haina ngazi", "Inatoa alama kwa kila kigezo peke yake"], answer: 3, why: "Kila kigezo kinapata ngazi yake." },
      { objective: "O2", q: "Rubriki rahisi kwa wanafunzi inatumia:", options: ["Lugha ya kisheria", "Sentensi za \"Mimi\"", "Msimbo", "Namba tu"], answer: 1, why: "Wanafunzi wanapaswa kuelewa lengo." },
      { objective: "O2", q: "Rubriki ni ya haki wakati:", options: ["Kila mtu anapata A", "Ni ndefu sana", "AI iliiandika", "Walimu wawili wangeipa kazi ile ile alama ile ile"], answer: 3, why: "Uthabiti ni haki." },
      { objective: "O3", q: "Tathmini endelevu ni:", options: ["Ripoti ya maendeleo", "Mtihani wa mwisho", "Ukaguzi usio na uzito mkubwa wakati wa kujifunza ili kurekebisha ufundishaji", "Mtihani wa jimbo"], answer: 2, why: "Inaongoza hatua inayofuata." },
      { objective: "O3", q: "Tiketi ya kutoka inatolewa:", options: ["Mwishoni mwa somo", "Mwanzoni mwa mwaka", "Ijumaa tu", "Kwa wazazi tu"], answer: 0, why: "Inakagua kujifunza kwa siku hiyo." },
      { objective: "O3", q: "Ukaguzi ambao hauufanyii kazi kamwe ni:", options: ["Aina bora zaidi", "Karatasi zaidi tu", "Ni lazima", "Tathmini ya mwisho (summative)"], answer: 1, why: "Ukaguzi endelevu una maana unapobadilisha ufundishaji." },
      { objective: "O4", q: "Mrejesho wa glow and grow unatoa:", options: ["Nguvu moja na hatua moja inayofuata", "Sifa tu", "Ukosoaji tu", "Alama tu"], answer: 0, why: "Wanafunzi wanahitaji vyote viwili." },
      { objective: "O4", q: "Benki ya maoni ni:", options: ["App ya kusahihisha", "Akaunti ya akiba", "Orodha ya wanafunzi", "Maoni ya mrejesho yaliyohifadhiwa unayoyatumia tena na kuyarekebisha"], answer: 3, why: "Inaokoa muda huku mrejesho ukibaki mahususi." },
      { objective: "O4", q: "Alama za AI zinaweza kuwa si za haki kwa sababu zinaweza:", options: ["Kuwa kamilifu kila wakati", "Kupendelea urefu kuliko ubora", "Kutosoma kazi kamwe", "Kutumia rubriki hasa kama ilivyo"], answer: 1, why: "Upendeleo wa urefu ni tatizo la kawaida." },
      { objective: "O5", q: "Kwa kazi halisi za wanafunzi, tumia:", options: ["Mitandao ya kijamii", "Zana yoyote ya bure", "Zana zilizoidhinishwa na wilaya tu, na taarifa za kutambulisha zikiwa zimeondolewa", "Barua pepe binafsi"], answer: 2, why: "Zana zilizoidhinishwa na kuondoa taarifa kunalinda faragha." },
      { objective: "O5", q: "Kipi hakipaswi kamwe kuingia kwenye zana ya AI isiyoidhinishwa?", options: ["Tiketi ya kutoka tupu", "Rubriki ya jumla", "Kitabu cha alama", "Jibu la kubuni"], answer: 2, why: "Vitabu vya alama vina rekodi za elimu zinazotambulisha wanafunzi." },
      { objective: "O5", q: "Chini ya FERPA, wazazi wanaweza:", options: ["Kukagua na kupitia rekodi za elimu za mtoto wao", "Kusahihisha kazi", "Kuidhinisha watoa huduma", "Kuandika rubriki"], answer: 0, why: "Kukagua ni haki ya msingi ya FERPA." },
      { objective: "O5", q: "Mtoa huduma anaweza kufanya kazi kama afisa wa shule anapo:", options: ["Kuwa na watumiaji wengi", "Kuwa bure", "Kuomba kwa adabu", "Kutoa huduma ya shule chini ya udhibiti wa moja kwa moja wa shule, na mipaka ya kushiriki tena"], answer: 3, why: "Hayo ndiyo masharti ya FERPA." },
      { objective: "O6", q: "Vigunduzi vya uandishi wa AI:", options: ["Viko sahihi kila wakati", "Vinaweza kushuku kimakosa kazi ya uaminifu", "Vinahitajika kisheria", "Vinathibitisha udanganyifu"], answer: 1, why: "Makosa ya kushuku (false positives) hutokea." },
      { objective: "O6", q: "Ukishuku matumizi mabaya ya AI, hatua ya kwanza ya haki ni:", options: ["Kupuuza sera yako", "Kutoa sifuri", "Kuandika habari yake mtandaoni", "Kumwomba mwanafunzi aeleze kazi yake au aonyeshe rasimu"], answer: 3, why: "Mazungumzo yanakusanya ushahidi halisi." },
      { objective: "O6", q: "Kila kazi inapaswa kutaja:", options: ["Kwamba AI imepigwa marufuku kila wakati", "Hakuna chochote kuhusu AI", "Matumizi gani ya AI yanaruhusiwa", "Alama ya mwanafunzi"], answer: 2, why: "Kanuni wazi zinazuia kutoelewana." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      6,
      7,
      10,
      12,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maswali yanayolingana na lengo",
        objective: "O1",
        notYet: "Maswali chini ya matano, au majibu hayakukaguliwa.",
        meets: "Maswali matano yanayolingana na lengo pamoja na majibu uliyoyatatua mwenyewe.",
        exceeds: "Maswali yanachanganya kukumbuka, kutumia na kueleza, na vipotoshi vinaakisi dhana potofu halisi."
      },
      {
        name: "Rubriki",
        objective: "O2",
        notYet: "Ngazi chini ya nne, visanduku visivyo wazi, au hakuna toleo la wanafunzi.",
        meets: "Rubriki ya ngazi nne yenye vigezo vitatu au vinne na toleo rahisi kwa wanafunzi.",
        exceeds: "Kila kisanduku kinaeleza wanafunzi wanafanya nini, na ilijaribiwa kwa jibu la kubuni."
      },
      {
        name: "Tiketi ya kutoka",
        objective: "O3",
        notYet: "Hakuna tiketi ya kutoka, au hailingani na lengo.",
        meets: "Tiketi ya kutoka ya maswali matatu kwa lengo.",
        exceeds: "Inasema utafanya nini na kila matokeo kabla ya kuitoa."
      },
      {
        name: "Utaratibu wa mrejesho",
        objective: "O4",
        notYet: "Maoni chini ya manane, maoni ya AI yalitumiwa bila kubadilishwa, au AI iliandika alama.",
        meets: "Angalau maoni manane yanayofungamana na rubriki, majibu matatu ya kubuni, maoni moja ya AI yamebadilishwa na alama zimeandikwa na wewe.",
        exceeds: "Kila jibu linapata glow moja na grow moja yanayofungamana na ngazi ya rubriki."
      },
      {
        name: "Faragha na matumizi ya haki ya AI",
        objective: "O6",
        notYet: "Taarifa halisi za wanafunzi zilitumiwa, au hakuna kanuni ya matumizi ya AI kwa kazi hiyo.",
        meets: "Kazi za kubuni tu zilitumiwa, na kazi ina kanuni ya mstari mmoja ya matumizi ya AI.",
        exceeds: "Inajumuisha ujumbe mfupi kwa familia kuhusu jinsi AI inavyosaidia katika mrejesho na nani anaamua alama."
      }
    ]
  },
  evaluation: {
    results: [
      "Waelimishaji wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Walimu wanaoripoti kutumia kifurushi cha tathmini au benki ya maoni na darasa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Walimu wanaoripoti kuokoa muda wa mrejesho huku bado wakiandika kila alama wenyewe (utafiti wa kufuatilia)",
      "Shule ambazo kila kazi kubwa inataja matumizi yake ya AI yanayoruhusiwa (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na msaidizi wa AI aliyeidhinishwa na wilaya kwa matumizi haya",
      "Lengo moja na kazi unayowapa wanafunzi",
      "Majibu matatu ya wanafunzi ya kubuni",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha walimu watatue majibu ya AI wakiwa wawili wawili na walinganishe makosa waliyoyapata.",
      "Tumieni kazi za wanafunzi za kubuni tu; msibandike kamwe kazi halisi za wanafunzi au alama kwenye zana zisizoidhinishwa.",
      "Waombe walimu wawili wape alama jibu lile lile la kubuni kwa kila rubriki ili kupima haki yake.",
      "Jadilini utaratibu wa haki kwa shaka ya matumizi ya AI kabla kesi yoyote haijatokea, na mkubaliane kwamba alama za vigunduzi si ushahidi pekee kamwe.",
      "Pima kazi ya mwisho kwa rubriki, na hakikisha kila alama iliandikwa na mwalimu."
    ]
  }
};
