"use strict";

// Koach Learn course (Swahili translation of artificial-intelligence/agentic-tools-automation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-tools-automation-sw",
  lang: "sw",
  translationOf: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "Wakala wa AI: Kutumia Zana na Uendeshaji wa Kiotomatiki",
  skills: "Kueleza zana kwa schema, Kukagua hoja za zana, Kuweka zana za kuandika nyuma ya idhini, Majaribio ya dry run na kuendesha tena kwa usalama, Kuunganisha zana kwa MCP, Kuendesha wakala kwa ratiba",
  outcome: "kumpa wakala zana halisi kwa usalama: kueleza kila zana kwa schema, kukagua kila hoja, kuweka vitendo vya kuandika nyuma ya dry run na \"ndiyo\" ya mtu, na kuendesha wakala kama kazi ya kiotomatiki inayorudiwa, inayosoma faili na kuandika ripoti.",
  about: [
    "Hii ni kozi ya 4 ya programu \"Kubuni, Kujenga na Kuzindua Wakala wa AI Wanaojiendesha\". Wakala wako wa kozi ya 3 alikuwa na zana mbili salama. Wakala halisi husoma faili, huita huduma za mtandaoni na huandika matokeo, na hapo ndipo ajali nyingi za wakala hutokea. Kozi hii inakufundisha kuongeza zana halisi bila kupoteza udhibiti.",
    "Sura ya 1 inahusu zana: kuzieleza kwa schema ambayo modeli inaielewa, kukagua kila hoja ambayo msimbo wako unapokea, na kuweka kila kitendo kinachobadilisha kitu nyuma ya dry run na idhini ya mtu. Sura ya 2 inahusu uendeshaji wa kiotomatiki: vianzishaji na ratiba, kuendesha tena kwa usalama, Model Context Protocol (MCP) kwa kuunganisha zana, na kugeuza wakala wako kuwa kazi inayojiendesha yenyewe.",
    "Utafanya kazi kwa Python katika Google Colab au kwenye kompyuta yako mwenyewe. Msimbo unaonyeshwa kama mistari mifupi katika masomo. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga wakala wa \"ripoti ya kila wiki\". Anasoma faili la CSV la mauzo au matumizi ya kubuni kwa zana ya kusoma, anatumia zana ya kikokotoo kupata jumla, na anaandika rasimu ya muhtasari mfupi. Zana yake pekee ya kuandika, save_report(filename, text), lazima ikague hoja zake (faili za .txt au .md tu, ndani ya folda ya reports tu), ifanye kazi katika hali ya dry run kwa chaguo-msingi, na iulize \"Save report? yes/no\" kabla ya kuandika. Kuiendesha mara mbili kwa wiki ile ile hakupaswi kutengeneza ripoti mbili. Onyesha kumbukumbu (log) ya mzunguko mmoja kamili.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika programu \"Kubuni, Kujenga na Kuzindua Wakala wa AI Wanaojiendesha\" waliomaliza kozi ya 1 hadi 3: wamiliki wa biashara ndogo, watu wanaobadilisha kazi, wanafunzi na wafanyakazi wanaotaka wakala wanaofanya kazi halisi kwa ratiba.",
    startingPoint: "Wamejenga kitanzi cha wakala chenye zana mbili kwa Python, chenye kikomo cha hatua, kushughulikia makosa na kumbukumbu ya mzunguko. Hawajampa wakala zana zinazosoma faili au kubadilisha kitu, na hawajamwendesha kama kazi ya kiotomatiki.",
    gap: "Ajali nyingi za wakala hutokea wakala wanapopewa zana halisi zinazosoma na kuandika. Wanafunzi wanahitaji kueleza zana kwa uwazi, kukagua kila hoja, kuweka vitendo vya kuandika nyuma ya dry run na \"ndiyo\" ya mtu, na kufanya kazi za kiotomatiki ziwe salama kuendeshwa tena, ili wakala wao wasaidie bila kuleta madhara.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; msimbo unaonyeshwa kama mistari mifupi ya kunakili",
      "Vifaa: kompyuta yenye kivinjari cha wavuti; Colab ni ya kujenga, si ya kuendesha ratiba",
      "Mazoezi yanatumia data ya CSV ya kubuni tu, kamwe si rekodi halisi za wateja au za fedha",
      "Vitendo vya kuandika vinabaki katika hali ya dry run hadi mtu atoe idhini",
      "Seva za MCP zinazoaminika tu, zenye ufikiaji mdogo kabisa unaohitajika"
    ],
    prerequisites: "Kozi ya 3 ya \"Kubuni, Kujenga na Kuzindua Wakala wa AI Wanaojiendesha\" (\"Kujenga Mawakala wa AI\")."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa kila zana ambayo wakala wako anatumia", action: "kuandika schema ya zana yenye jina wazi, kusudi na pembejeo zenye aina", standard: "ili modeli iweze kuchagua zana na hoja sahihi" },
    { id: "O2", condition: "Ukipewa hoja zilizotumwa na modeli", action: "kukagua kila hoja dhidi ya orodha ya vinavyoruhusiwa kabla zana haijaitumia", standard: "ukikataa aina mbaya za faili, hila za njia (path) na aina zisizo sahihi kwa ujumbe wa kosa ulio wazi" },
    { id: "O3", condition: "Kwa zana yoyote inayobadilisha kitu", action: "kuweka kitendo nyuma ya dry run na idhini ya yes/no inayoonyesha maelezo kamili", standard: "ili hakuna kinachoandikwa hadi mtu aseme ndiyo" },
    { id: "O4", condition: "Ukipewa kazi inayofanyika mara kwa mara", action: "kuchagua kianzishaji na kufanya kazi ya kiotomatiki iwe salama kuendeshwa tena", standard: "ili mzunguko wa pili kwa kipindi kile kile usitengeneze nakala ya pili" },
    { id: "O5", condition: "Ukipewa zana unayotaka kushiriki na apps za AI", action: "kueleza seva ya MCP inafanya nini na kuamua wakati wa kuitumia", standard: "ukitaja kanuni za idhini na ukaguzi ambazo ungezibakiza" },
    { id: "O6", condition: "Ukipewa zana za kusoma, kikokotoo na kuhifadhi", action: "kujenga na kujaribu kazi ya kiotomatiki ya ripoti ya kila wiki mwanzo hadi mwisho", standard: "kwa kumbukumbu kamili ya mzunguko na data mbaya ikiripotiwa, si kupuuzwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kumpa wakala zana halisi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kueleza zana kwa schema",
          minutes: 5,
          goal: "Andika maelezo ya zana yenye jina, kusudi na pembejeo zenye aina.",
          text: [
            "Modeli inachagua zana kutokana na maelezo yake. Schema ya zana ni maelezo sahihi: jina, sentensi moja au mbili kuhusu inachofanya na wakati wa kuitumia, na kila pembejeo pamoja na aina yake na maana yake. Watoa huduma wengi huandika pembejeo kwa JSON Schema, njia ya kawaida ya kueleza data.",
            "Mfano: jina read_csv; maelezo \"Read a CSV file from the data folder and return its first 50 rows as text. Use when you need the numbers in a file.\" (Soma faili la CSV kutoka folda ya data na urudishe safu zake 50 za kwanza kama maandishi.); pembejeo: filename (string, inahitajika, jina la faili katika folda ya data kama sales-week-42.csv).",
            "Schema nzuri ni ndogo na mahususi. Zana moja, kazi moja. Sema zana inarudisha nini na wakati usioitumia. Tumia majina yanayosomeka kama vitendo: read_csv, save_report, si tool1."
          ],
          steps: ["Ipe zana jina la kitendo.", "Eleza inachofanya, wakati wa kuitumia na inachorudisha.", "Orodhesha kila pembejeo pamoja na aina yake na kama inahitajika.", "Ibakize kwenye kazi moja.", "Jaribu: mpe modeli lengo na uone kama inachagua zana sahihi."],
          words: [["Schema ya zana", "maelezo sahihi ya zana: jina lake, kusudi lake na pembejeo zake."], ["JSON Schema", "njia ya kawaida ya kueleza umbo la data, kama sehemu zipi ni maandishi au namba."], ["Hoja (argument)", "thamani inayopelekwa ndani ya zana au function."]],
          slides: [
            { title: "Modeli inachagua kutokana na maelezo", bullets: ["Jina, kusudi, pembejeo", "Mara nyingi pembejeo huandikwa kwa JSON Schema"] },
            { title: "Mfano: read_csv", bullets: ["Inasoma CSV kutoka folda ya data", "Inarudisha safu 50 za kwanza kama maandishi", "Pembejeo: filename (string, inahitajika)"] },
            { title: "Schema nzuri", bullets: ["Zana moja, kazi moja", "Majina ya vitendo: read_csv, save_report", "Sema inachorudisha na wakati usioitumia"] }
          ],
          tryIt: "Andika schema za zana tatu: read_csv, calculator na save_report. Mpe chatbot ya bure schema hizo tatu na lengo \"Jumlisha mauzo ya wiki iliyopita na uhifadhi ripoti\", na uiulize ingeita zana ipi kwanza na kwa hoja zipi.",
          youCanNow: "kueleza zana ili modeli iweze kuichagua na kujaza pembejeo zake kwa usahihi.",
          quickCheck: [
            { objective: "O1", q: "Pembejeo zenye aina katika schema ya zana zinaiambia modeli nini?", options: ["Zana inafanya kazi kwa kasi gani", "Nani aliandika zana", "Kila pembejeo lazima iwe thamani ya aina gani, kama maandishi au namba", "Modeli ipi itumike"], answer: 2, why: "Aina zinaeleza umbo la kila pembejeo ili modeli itume hoja sahihi." },
            { objective: "O1", q: "Unataka zana moja inayosoma faili, kutuma barua pepe na kufuta ripoti za zamani. Ungefanya nini badala yake?", options: ["Kuigawanya kuwa zana tofauti, kila moja ikifanya kazi moja wazi", "Kuibakiza, kwa sababu zana moja ni rahisi zaidi", "Kuipa maelezo marefu zaidi", "Kuficha sehemu ya kufuta kwenye schema"], answer: 0, why: "Zana nzuri inafanya kazi moja wazi, na hiyo inarahisisha kuieleza, kuikagua na kuiidhinisha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Usiamini hoja kamwe: kukagua pembejeo za zana",
          minutes: 6,
          goal: "Kagua kila hoja ambayo modeli inatuma kabla zana haijaitumia.",
          text: [
            "Modeli ndiyo inaandika hoja za zana yako, na modeli inaweza kukosea au kudanganywa kwa prompt injection (maagizo ya hila yaliyofichwa ndani ya maandishi). Kwa hiyo zana, si modeli, ndiyo lazima isimamie kanuni. Zichukulie hoja kama pembejeo kutoka kwa mtu usiyemjua kwenye intaneti.",
            "Kagua aina na umbo: je, filename ni string? Kagua thamani zinazoruhusiwa: majina yanayoishia na .csv tu, ndani ya folda ya data tu. Zuia hila za njia: jina kama ../../secrets.txt linajaribu kupanda nje ya folda. Kwa Python: from pathlib import Path, kisha p = (DATA_DIR / filename).resolve() na ukatae kama DATA_DIR.resolve() haimo katika p.parents.",
            "Ukaguzi ukishindwa, rudisha ujumbe ulio wazi, si programu kuanguka: \"read_csv error: only .csv files in the data folder are allowed\". Kamwe usiendeshe maandishi yaliyoandikwa na modeli kama msimbo au amri ya shell; hivyo ndivyo kosa dogo linavyokuwa kubwa."
          ],
          steps: ["Kagua aina ya kila hoja.", "Kagua thamani zinazoruhusiwa: aina za faili, folda, viwango vya namba.", "Tafsiri njia za faili kikamilifu na ukatae chochote kilicho nje ya folda inayoruhusiwa.", "Rudisha ujumbe wa kosa ulio wazi ukaguzi ukishindwa.", "Kamwe usiendeshe maandishi ya modeli kama msimbo au amri ya shell."],
          words: [["Uthibitishaji (validation)", "kukagua kwamba pembejeo ni ya aina sahihi na iko ndani ya thamani zinazoruhusiwa kabla ya kuitumia."], ["Path traversal", "hila ya kutumia ../ katika jina la faili ili kufikia faili zilizo nje ya folda inayoruhusiwa."], ["Orodha ya vinavyoruhusiwa (allow list)", "orodha ya thamani pekee zinazoruhusiwa."]],
          slides: [
            { title: "Zana inasimamia kanuni", bullets: ["Modeli inaweza kukosea au kudanganywa", "Chukulia hoja kama pembejeo kutoka kwa mgeni"] },
            { title: "Kagua kila hoja", bullets: ["Aina: je, ni string au namba?", "Thamani zinazoruhusiwa: .csv tu, folda ya data tu", "Zuia hila za njia za ../"] },
            { title: "Ukaguzi ukishindwa", bullets: ["Rudisha ujumbe wa kosa ulio wazi", "Usianguke kamwe, usibahatishe kamwe", "Kamwe usiendeshe maandishi ya modeli kama msimbo au amri"] }
          ],
          tryIt: "Andika read_csv yenye ukaguzi. Ijaribu mwenyewe kwa: 'sales.csv', 'notes.exe', '../secret.txt' na 42. Ya kwanza tu ndiyo inapaswa kusoma faili; nyingine zote zinapaswa kurudisha makosa yaliyo wazi.",
          youCanNow: "kuandika zana zinazokagua kila hoja kabla ya kutenda.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini msimbo wa zana yenyewe lazima ukague hoja zake?", options: ["Schema tayari inazuia kila thamani mbaya", "Modeli inaweza kutuma kitu kisicho salama au kisicho sahihi", "Inaifanya modeli kuwa na akili zaidi", "Inahitajika kwa zana za kuandika tu"], answer: 1, why: "Msimbo wa zana pekee ndio unaoweza kusimamia kanuni zake; modeli inaweza kukosea au kudanganywa." },
            { objective: "O2", q: "read_csv inapokea namba 42 kama jina la faili. Nini kinapaswa kutokea?", options: ["Kusoma faili linaloitwa 42.csv", "Kuigeuza kuwa maandishi na kuendelea", "Kuiomba modeli ibahatishe faili sahihi", "Kurudisha kosa lililo wazi kwamba jina la faili lazima liwe maandishi yanayoishia na .csv"], answer: 3, why: "Aina isiyo sahihi inakataliwa kwa kosa lililo wazi ambalo modeli inaweza kulifanyia kazi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zana za kuandika: dry run na idhini ya mtu",
          minutes: 6,
          goal: "Weka kitendo cha kuandika nyuma ya dry run na idhini ya yes/no.",
          text: [
            "Zana ya kuandika inabadilisha kitu: inahifadhi faili, inatuma ujumbe, inasasisha jedwali, inatumia pesa. Zipe zana za kuandika kufuli mbili. Kwanza, dry run (jaribio la mazoezi): zana inasema hasa ingefanya nini, lakini haifanyi. Fanya dry run iwe chaguo-msingi, kwa DRY_RUN = True juu ya msimbo wako.",
            "Pili, idhini ya mtu: kabla ya kuandika kweli, mwonyeshe mtu kitakachotokea na umuulize. Katika notebook, answer = input('Save report to reports/week-42.md? yes/no ') na uendelee tu kama answer == 'yes'. Katika app halisi, hiki ni kitufe cha Approve (Idhinisha).",
            "Onyesha maelezo halisi katika idhini, si muhtasari ulioandikwa na modeli: jina la faili, mpokeaji, kiasi. Andika kwenye kumbukumbu kila idhini na kila kukataa. Modeli ikiomba kuandika kitu kile kile tena baada ya \"hapana\", hiyo ni ishara ya kusimamisha mzunguko."
          ],
          steps: ["Weka alama kila zana: READ (kusoma) au WRITE (kuandika).", "Ipe kila zana ya kuandika hali ya dry run, ikiwa imewashwa kwa chaguo-msingi.", "Kabla ya kuandika kweli, onyesha maelezo kamili na uulize yes au no.", "Andika tu jibu likiwa yes, na uandike jibu kwenye kumbukumbu.", "Simamisha mzunguko modeli ikijaribu tena kitendo kilichokataliwa."],
          words: [["Dry run", "jaribio la mazoezi linaloonyesha kitakachotokea bila kukifanya."], ["Lango la idhini", "mahali ambapo mtu lazima aseme ndiyo kabla kitendo hakijatokea."]],
          slides: [
            { title: "Zana za kuandika zinabadilisha vitu", bullets: ["Kuhifadhi, kutuma, kusasisha, kutumia pesa", "Zinahitaji kufuli mbili"] },
            { title: "Kufuli 1: dry run kwa chaguo-msingi", bullets: ["DRY_RUN = True", "Inaonyesha hasa kitakachotokea", "Haikifanyi"] },
            { title: "Kufuli 2: idhini ya mtu", bullets: ["Onyesha maelezo halisi: faili, mpokeaji, kiasi", "Uliza yes au no", "Andika tu jibu likiwa yes; weka jibu kwenye kumbukumbu"] }
          ],
          tryIt: "Andika save_report(filename, text) yenye ukaguzi (.md au .txt tu, ndani ya folda ya reports tu), dry run kwa chaguo-msingi na idhini ya yes/no. Ijaribu DRY_RUN ikiwa imewashwa, kisha imezimwa, ukijibu no mara moja na yes mara moja.",
          youCanNow: "kuongeza zana za kuandika zinazotenda tu baada ya dry run na \"ndiyo\" ya mtu.",
          quickCheck: [
            { objective: "O3", q: "Dry run inafanya nini?", options: ["Inaonyesha kitakachotokea bila kukifanya", "Inaendesha kitendo mara mbili ili kuhakikisha", "Inafuta faili la zamani kwanza", "Inahifadhi nakala ya ziada ya modeli"], answer: 0, why: "Dry run inamruhusu mtu kuona matokeo kabla kitu chochote hakijabadilika." },
            { objective: "O3", q: "Ombi la idhini linasema tu \"Proceed? yes/no\" (Endelea?). Ungebadilisha nini?", options: ["Hakuna, ni fupi na wazi", "Kumfanya wakala ajibu yes mwenyewe", "Kuonyesha jina kamili la faili na maandishi yatakayohifadhiwa", "Kuondoa idhini ili kuokoa muda"], answer: 2, why: "Mtu anaweza kuidhinisha vizuri tu anapoona maelezo kamili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kumpa wakala zana halisi",
        questions: [
          { objective: "O1", q: "Schema ya zana inaipa modeli nini?", options: ["API key yako", "Msimbo chanzo wa zana", "Jina la zana, kusudi lake na pembejeo zake", "Ruhusa ya kuendesha chochote"], answer: 2, why: "Modeli inachagua na kujaza zana kutokana na schema zake." },
          { objective: "O1", q: "Jina lipi la zana ni bora zaidi?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Majina ya vitendo yanaiambia modeli zana inafanya nini." },
          { objective: "O2", q: "Modeli inatuma kwa read_csv jina la faili '../../passwords.txt'. Zana inapaswa:", options: ["Kulisoma, kwa sababu modeli iliomba", "Kuiomba modeli iahidi kuwa ni salama", "Kusoma nusu yake", "Kukataa kwa kosa lililo wazi"], answer: 3, why: "Hila za njia zinazotoka nje ya folda inayoruhusiwa lazima zizuiwe na zana." },
          { objective: "O3", q: "Kwa nini DRY_RUN iwe imewashwa kwa chaguo-msingi?", options: ["Ni haraka zaidi", "Hakuna kinachobadilika hadi mtu aizime kwa makusudi", "Modeli zinaipenda", "Inaokoa tokeni"], answer: 1, why: "Chaguo-msingi salama huzuia kuandika kwa bahati mbaya." },
          { objective: "O3", q: "Ombi la idhini linapaswa kuonyesha nini?", options: ["Muhtasari ulioandikwa na modeli", "Hakuna kitu, \"OK?\" tu", "Jina la modeli", "Maelezo kamili: jina la faili, mpokeaji au kiasi"], answer: 3, why: "Watu lazima waidhinishe kile kitakachotokea kweli." }
        ]
      }
    },
    {
      name: "Sura 2: Kutoka wakala hadi kazi ya kiotomatiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Vianzishaji, ratiba na kuendesha tena kwa usalama",
          minutes: 5,
          goal: "Chagua kianzishaji cha wakala na ufanye kuendesha tena kuwe salama.",
          text: [
            "Kazi ya kiotomatiki ni wakala anayeanza mwenyewe. Kianzishaji (trigger) ndicho kinachomwanzisha: ratiba (kila Jumatatu saa 8 asubuhi, yaani 8 am), tukio (faili jipya katika folda, jibu jipya la fomu) au kitufe ambacho mtu anabonyeza.",
            "Kazi za kiotomatiki huendeshwa tena: ratiba inawaka mara mbili, mzunguko unashindwa katikati na unauanzisha tena. Buni kwa ajili ya hilo. Idempotent maana yake kuiendesha mara mbili kunatoa matokeo yale yale kama mara moja. Zipe matokeo majina kwa kipindi chake (reports/week-42.md) na ukague kabla ya kuandika: ripoti ikiwepo tayari, simama au uliza, badala ya kutengeneza nakala.",
            "Njia za kupanga ratiba: kwenye kompyuta yako, Windows Task Scheduler au cron kwenye Mac na Linux vinaweza kuendesha script ya Python; zana zisizohitaji msimbo kama Zapier, Make na n8n huendesha mitiririko ya kazi kwa vianzishaji; huduma za wingu nazo zina vipanga-ratiba. Colab ni ya kujenga na kujaribu, si ya kuendesha kwa ratiba. Kagua vikomo vya sasa vya bure vya kila zana kwenye tovuti yake yenyewe."
          ],
          steps: ["Chagua kianzishaji: ratiba, tukio au kitufe.", "Ipe kila tokeo jina kwa kipindi chake, kama week-42.", "Kabla ya kuandika, kagua kama tokeo tayari lipo.", "Likiwepo, simama au uliza; kamwe usitengeneze nakala.", "Chagua mahali litakapoendeshwa, na ukague vikomo vya zana hiyo."],
          words: [["Kianzishaji (trigger)", "tukio linaloanzisha kazi ya kiotomatiki."], ["Idempotent", "salama kuendeshwa zaidi ya mara moja: mzunguko wa pili haubadilishi kitu cha ziada."], ["Cron", "kipanga-ratiba kwenye Mac na Linux kinachoendesha amri kwa nyakati zilizopangwa."]],
          slides: [
            { title: "Aina tatu za kianzishaji", bullets: ["Ratiba: kila Jumatatu 8 am", "Tukio: faili jipya au jibu la fomu", "Kitufe: mtu anaanzisha"] },
            { title: "Buni kwa ajili ya kuendesha tena", bullets: ["Idempotent: mara mbili = mara moja", "Majina ya matokeo kwa kipindi: week-42", "Kagua kabla ya kuandika; kamwe usitengeneze nakala"] },
            { title: "Mahali inapoweza kuendeshwa", bullets: ["Task Scheduler au cron kwenye kompyuta yako", "Bila msimbo: Zapier, Make, n8n", "Colab ni ya kujenga, si ya ratiba"] }
          ],
          tryIt: "Badilisha save_report ili jina la faili liwe na namba ya wiki, na ili mzunguko wa pili kwa wiki ile ile usimame kwa ujumbe \"Report for week 42 already exists\" (Ripoti ya wiki 42 tayari ipo). Iendeshe mara mbili kuthibitisha.",
          youCanNow: "kuchagua kianzishaji na kufanya kazi ya kiotomatiki iwe salama kuendeshwa zaidi ya mara moja.",
          quickCheck: [
            { objective: "O4", q: "Inamaanisha nini kwamba kazi ya kiotomatiki ni idempotent?", options: ["Inaendeshwa mara moja tu kwa mwaka", "Kuiendesha mara mbili kunatoa matokeo yale yale kama kuiendesha mara moja", "Haihitaji kianzishaji kamwe", "Inaomba idhini kila wakati"], answer: 1, why: "Kazi zilizo idempotent zinaweza kuendeshwa tena kwa usalama bila kutengeneza nakala." },
            { objective: "O4", q: "Kazi yako ya kila wiki iliendeshwa mara mbili kwa makosa na ikatengeneza ripoti mbili. Ungebadilisha nini?", options: ["Kuiendesha mara chache zaidi", "Kufuta ripoti kwa mkono kila wiki", "Kuzima kumbukumbu", "Kuipa ripoti jina la wiki na kusimama kama ripoti ya wiki hiyo tayari ipo"], answer: 3, why: "Jina linalotegemea wiki pamoja na ukaguzi wa kuwepo hufanya kuendesha tena kuwe salama." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuunganisha zana kwa MCP",
          minutes: 5,
          goal: "Eleza MCP ni nini na uamue wakati wa kutumia seva ya MCP.",
          text: [
            "Model Context Protocol (MCP) ni kiwango huria (open-source) cha kuunganisha apps za AI na mifumo ya nje: faili, hifadhidata, kalenda, zana za kutafuta. Tovuti yake yenyewe inaifananisha na tundu la USB-C kwa AI: jenga muunganisho mara moja na apps nyingi za AI zinaweza kuutumia.",
            "Katika MCP, seva (server) inatoa zana na data; mteja (client), aliye ndani ya app ya AI kama Claude, ChatGPT au kihariri cha msimbo kama VS Code, anaunganishwa nayo na kuiruhusu modeli kuzitumia. Unaweza kutumia seva zilizo tayari au kuandika seva yako ndogo kwa Python inayofunika zana kama read_csv yako.",
            "MCP yenyewe haifanyi zana kuwa salama. Kila kanuni ya Sura ya 1 bado inatumika: kagua hoja, toa ufikiaji mdogo kabisa, idhini kwa vitendo vya kuandika. Sakinisha seva kutoka vyanzo unavyoviamini tu, kwa sababu seva inafanya kazi na ufikiaji wowote unaoipa. Soma ukurasa wa MCP wa mbinu bora za usalama kabla ya kuunganisha chochote cha binafsi."
          ],
          words: [["MCP", "Model Context Protocol: kiwango huria cha kuunganisha apps za AI na zana na data."], ["Seva ya MCP", "programu inayotoa zana au data kwa apps za AI kupitia MCP."], ["Mteja wa MCP", "sehemu ya app ya AI inayounganishwa na seva za MCP."]],
          slides: [
            { title: "MCP ni nini", bullets: ["Kiwango huria cha kuunganisha apps za AI na zana na data", "Kama tundu la USB-C kwa AI", "Jenga mara moja, tumia katika apps nyingi za AI"] },
            { title: "Seva na wateja", bullets: ["Seva: inatoa zana na data", "Mteja: ndani ya app ya AI, anaunganishwa na seva", "Unaweza kuandika seva ndogo kwa Python"] },
            { title: "Bado ni kazi yako", bullets: ["Kagua hoja, ufikiaji mdogo kabisa", "Idhini kwa vitendo vya kuandika", "Sakinisha seva kutoka vyanzo vinavyoaminika tu"] }
          ],
          sources: [{ name: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Soma ukurasa wa utangulizi wa MCP. Kisha andika sentensi tatu: zana ipi kati ya zako ungeitoa kupitia seva ya MCP, app ipi ya AI ingeitumia, na kanuni ipi ya idhini ungeibakiza.",
          youCanNow: "kueleza seva na wateja wa MCP na kuamua wakati ambapo kuunganisha zana kupitia MCP kuna maana.",
          quickCheck: [
            { objective: "O5", q: "Seva ya MCP ni nini?", options: ["Programu inayotoa zana na data kwa apps za AI kwa njia ya kawaida", "Modeli inayoandika msimbo", "Folda ya wingu ya ripoti", "Aina ya API key"], answer: 0, why: "MCP, yaani Model Context Protocol, ni njia ya kawaida ya kuunganisha zana na data na apps za AI." },
            { objective: "O5", q: "Unatoa save_report kupitia seva ya MCP. Nini kinatokea kwa ukaguzi wa hoja zake na idhini?", options: ["Vinaweza kuondolewa, kwa sababu MCP inashughulikia usalama", "Vinahamia kwenye app ya AI", "Unavibakiza ndani ya zana", "Idhini pekee ndiyo inabaki"], answer: 2, why: "MCP inaunganisha zana; haichukui nafasi ya ukaguzi na idhini zilizo katika msimbo wako mwenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujenga kazi ya kiotomatiki ya ripoti ya kila wiki",
          minutes: 6,
          goal: "Unganisha zana, kitanzi na kanuni za usalama kuwa kazi moja ya kiotomatiki.",
          text: [
            "Sasa unganisha kila kitu. Zana: read_csv (kusoma, imekaguliwa), calculator (kusoma, imekaguliwa), save_report (kuandika: imekaguliwa, dry run, idhini, bila nakala). Kitanzi cha kozi ya 3 chenye kikomo cha hatua na kumbukumbu. System prompt ya kozi ya 2 yenye lengo: fupisha wiki na uhifadhi ripoti.",
            "Tengeneza faili dogo la kubuni la kujaribia, kama data/sales-week-42.csv lenye safu wima day, item, amount. Kamwe usijaribu kwa data halisi ya wateja au ya binafsi.",
            "Iendeshe mwanzo hadi mwisho. Soma kumbukumbu: je, ilisoma kabla ya kukokotoa? Je, iliuliza kabla ya kuhifadhi? Iendeshe mara ya pili kwa wiki ile ile: haipaswi kutengeneza nakala. Kisha jaribu faili lenye safu mbaya (neno mahali pa namba) na ukague kwamba inaripoti tatizo badala ya kubahatisha."
          ],
          steps: ["Tengeneza CSV ya kubuni katika folda ya data.", "Sajili zana tatu pamoja na schema zake.", "Endesha kitanzi chenye kikomo cha hatua na kumbukumbu.", "Idhinisha kuhifadhi mara moja; endesha tena kujaribu kwamba hakuna nakala.", "Jaribu faili lenye safu mbaya."],
          words: [["Data ya majaribio", "data ya kubuni inayotumiwa kukagua programu bila kuhatarisha taarifa halisi."], ["Jaribio la mwanzo hadi mwisho (end-to-end)", "kuendesha kazi nzima ya kiotomatiki kuanzia mwanzo hadi mwisho."]],
          slides: [
            { title: "Viunganishe pamoja", bullets: ["read_csv, calculator, save_report", "Kitanzi chenye kikomo cha hatua na kumbukumbu", "Prompt yenye lengo la kila wiki"] },
            { title: "Jaribu kwa data ya kubuni", bullets: ["data/sales-week-42.csv", "Kamwe si data halisi ya wateja au ya binafsi"] },
            { title: "Kagua mzunguko", bullets: ["Ilisoma kabla ya kukokotoa?", "Iliuliza kabla ya kuhifadhi?", "Mzunguko wa pili: hakuna nakala", "Safu mbaya: imeripotiwa, haikubahatishwa"] }
          ],
          tryIt: "Kazi ya mwisho: jenga wakala wa ripoti ya kila wiki mwenye read_csv, calculator na save_report (imekaguliwa, dry run kwa chaguo-msingi, idhini ya yes/no, bila nakala). Iendeshe kwa CSV ya kubuni, iendeshe tena kwa wiki ile ile, na uhifadhi kumbukumbu ya mzunguko mzima.",
          youCanNow: "kugeuza wakala kuwa kazi ya kiotomatiki salama inayorudiwa, yenye zana halisi.",
          quickCheck: [
            { objective: "O6", q: "Jaribio la mwanzo hadi mwisho la kazi yako ya kiotomatiki ni nini?", options: ["Kujaribu kikokotoo tu", "Kuendesha kazi nzima ya kiotomatiki kuanzia mwanzo hadi mwisho", "Kusoma msimbo kwa sauti", "Kujaribu modeli katika chatbot"], answer: 1, why: "Mwanzo hadi mwisho maana yake kila sehemu inafanya kazi pamoja, kama itakavyokuwa kwa kweli." },
            { objective: "O6", q: "CSV yako ina neno \"none\" mahali ambapo namba ya mauzo inapaswa kuwa. Wakala anapaswa kufanya nini?", options: ["Kuripoti tatizo katika muhtasari wake", "Kuihesabu kama sifuri bila kusema", "Kuruka faili lote", "Kubahatisha namba"], answer: 0, why: "Wakala mzuri anaripoti data mbaya badala ya kuificha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutoka wakala hadi kazi ya kiotomatiki",
        questions: [
          { objective: "O4", q: "Kipi ni kianzishaji cha tukio?", options: ["Mtu anasoma kumbukumbu", "Kila Jumatatu saa 8 asubuhi", "Faili jipya linafika katika folda", "Kikomo cha hatua"], answer: 2, why: "Tukio, kama faili jipya, linaanzisha mzunguko." },
          { objective: "O4", q: "Kazi ya kiotomatiki ni idempotent pale:", options: ["Kuiendesha mara mbili kunatoa matokeo yale yale kama mara moja", "Inaendeshwa kwa kasi sana", "Haishindwi kamwe", "Haitumii zana zozote"], answer: 0, why: "Kuendesha tena kwa usalama hakurudii kazi." },
          { objective: "O5", q: "Seva ya MCP inafanya nini?", options: ["Inafundisha modeli", "Inatoa zana na data kwa apps za AI", "Inahifadhi nywila yako", "Inachukua nafasi ya ukaguzi wa hoja"], answer: 1, why: "Seva zinatoa zana na data; wateja walio ndani ya apps za AI wanaunganishwa nazo." },
          { objective: "O5", q: "Umepata seva ya MCP kwenye tovuti usiyoijua inayotaka kufikia faili zako. Hatua bora ni ipi?", options: ["Tumia seva kutoka vyanzo unavyoviamini tu, zenye ufikiaji mdogo kabisa unaohitajika", "Ipe ufikiaji wa kila kitu", "Isakinishe mara moja", "Zima idhini"], answer: 0, why: "Seva inafanya kazi na ufikiaji wowote unaoipa." },
          { objective: "O6", q: "Unapaswa kujaribu kazi yako ya kiotomatiki kwa data gani?", options: ["Rekodi halisi za wateja", "Taarifa yako ya benki", "Barua pepe za rafiki yako", "Data ya majaribio ya kubuni"], answer: 3, why: "Data ya majaribio inaepuka kuhatarisha taarifa halisi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Wakala wa AI: Kutumia Zana na Uendeshaji wa Kiotomatiki",
    questions: [
      { objective: "O1", q: "Schema ya zana ina:", options: ["Data ya mafunzo ya modeli", "Jina, kusudi na pembejeo", "Nywila", "Orodha ya bei"], answer: 1, why: "Hivyo ndivyo modeli inavyosoma ili kuchagua na kutumia zana." },
      { objective: "O1", q: "JSON Schema inatumika:", options: ["Kuhifadhi API keys", "Kutengeneza picha", "Kueleza umbo la pembejeo za zana", "Kufundisha modeli"], answer: 2, why: "Inaeleza aina na sehemu zinazohitajika." },
      { objective: "O1", q: "Zana nzuri inafanya:", options: ["Chochote modeli inachosema", "Kila kazi kwa wakati mmoja", "Kazi moja wazi", "Hakuna kitu"], answer: 2, why: "Zana ndogo na mahususi ni rahisi kuchagua na ni salama zaidi." },
      { objective: "O2", q: "Nani lazima asimamie kanuni za zana?", options: ["Msimbo wa zana yenyewe", "Modeli", "Kivinjari cha mtumiaji", "Hakuna mtu"], answer: 0, why: "Modeli inaweza kukosea au kudanganywa." },
      { objective: "O2", q: "Jina la faili '../secret.txt' ni mfano wa:", options: ["Faili la kawaida", "Kianzishaji", "Schema", "Path traversal"], answer: 3, why: "../ inajaribu kutoka nje ya folda inayoruhusiwa." },
      { objective: "O2", q: "Orodha ya vinavyoruhusiwa (allow list) ni:", options: ["Orodha ya watumiaji waliozuiwa", "Orodha ya thamani pekee zinazoruhusiwa", "Orodha ya mambo ya kufanya", "Mpangilio wa modeli"], answer: 1, why: "Thamani zilizo kwenye orodha tu ndizo zinazokubaliwa." },
      { objective: "O2", q: "Je, wakala anapaswa kuendesha maandishi yaliyoandikwa na modeli kama amri ya shell?", options: ["Ndiyo, kila wakati", "Wikendi tu", "Kama ni mafupi tu", "Hapana, kamwe"], answer: 3, why: "Hilo linageuza kosa la modeli kuwa tatizo la mfumo." },
      { objective: "O3", q: "Dry run:", options: ["Inafuta faili za majaribio", "Inaendeshwa bila modeli", "Inaonyesha kitakachotokea bila kukifanya", "Inaendeshwa mara mbili"], answer: 2, why: "Inaonyesha kitendo mapema kwa usalama." },
      { objective: "O3", q: "Ipi ni zana ya kuandika?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Kuhifadhi kunabadilisha kitu." },
      { objective: "O3", q: "Kabla ya kuandika kweli, mtu anapaswa kuona:", options: ["Alama ya dole gumba tu", "Faili, mpokeaji au kiasi halisi", "API key", "Hakuna kitu"], answer: 1, why: "Idhini lazima ihusu maelezo halisi." },
      { objective: "O3", q: "Modeli inaomba kuhifadhi tena mara tu baada ya wewe kusema no. Unapaswa:", options: ["Kusimamisha mzunguko na kusoma kumbukumbu", "Kusema yes ili iache", "Kuzima idhini", "Kuipa zana zaidi"], answer: 0, why: "Kujaribu tena kitendo kilichokataliwa ni ishara ya hatari." },
      { objective: "O4", q: "Kipi ni kianzishaji cha ratiba?", options: ["Safu mbaya", "Jibu jipya la fomu", "Kubonyeza kitufe", "Kila Jumatatu saa 8 asubuhi"], answer: 3, why: "Ratiba zinaanzisha mizunguko kwa nyakati zilizopangwa." },
      { objective: "O4", q: "Kuzipa ripoti majina kwa wiki (week-42) kunasaidia:", options: ["Kuifanya modeli kuwa na akili zaidi", "Kuepuka ripoti mbili zinazofanana unapoendesha tena", "Kuficha ripoti", "Kuokoa tokeni"], answer: 1, why: "Wakala anaweza kukagua kama ripoti ya wiki hiyo tayari ipo." },
      { objective: "O4", q: "Je, Google Colab ni mahali sahihi pa kuendesha ratiba ya kila wiki?", options: ["Ndiyo, inaendeshwa milele", "Ndiyo, ina kalenda ndani yake", "Hapana, ni ya kujenga na kujaribu", "Kwa watumiaji wanaolipa tu"], answer: 2, why: "Tumia kipanga-ratiba au huduma ya kiotomatiki kwa mizunguko ya ratiba." },
      { objective: "O4", q: "Cron na Windows Task Scheduler vinatumika:", options: ["Kukagua JSON", "Kuandika prompts", "Kuendesha programu kwa nyakati zilizopangwa", "Kufundisha modeli"], answer: 2, why: "Ni vipanga-ratiba." },
      { objective: "O5", q: "MCP ni kifupi cha:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "Ni kiwango huria cha kuunganisha apps za AI na zana." },
      { objective: "O5", q: "Kwenye tovuti yake yenyewe, MCP inafananishwa na:", options: ["Kebo ya kuchaji simu ya Apple tu", "Kidhibiti cha nywila", "Jedwali (spreadsheet)", "Tundu la USB-C kwa apps za AI"], answer: 3, why: "Muunganisho mmoja wa kawaida ambao apps nyingi zinaweza kutumia." },
      { objective: "O5", q: "Kutumia MCP kunamaanisha ukaguzi wako wa hoja:", options: ["Hauhitajiki tena", "Bado unahitajika", "Unafanywa na tovuti ya seva", "Unafanywa na modeli"], answer: 1, why: "MCP inaunganisha zana; haizifanyi kuwa salama." },
      { objective: "O6", q: "Safu ya CSV ina neno mahali ambapo namba inapaswa kuwa. Wakala mzuri:", options: ["Anabahatisha namba", "Anaruka ripoti nzima kimya kimya", "Anafuta faili", "Anaripoti tatizo"], answer: 3, why: "Ripoti matatizo ya data; kamwe usibahatishe." },
      { objective: "O6", q: "Jaribio la mwanzo hadi mwisho linamaanisha:", options: ["Kujaribu function moja", "Kusoma schema", "Kuendesha kazi nzima ya kiotomatiki kuanzia mwanzo hadi mwisho", "Kukagua jibu la mwisho tu"], answer: 2, why: "Linakagua kila sehemu ikifanya kazi pamoja." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      4,
      7,
      9,
      11,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Zana zimeelezwa",
        objective: "O1",
        notYet: "Zana haina schema, au jina au kusudi lake halieleweki.",
        meets: "read_csv, calculator na save_report kila moja ina jina, kusudi na pembejeo zenye aina.",
        exceeds: "Maelezo ni wazi kiasi kwamba modeli inachagua zana sahihi mara ya kwanza."
      },
      {
        name: "Hoja zimekaguliwa",
        objective: "O2",
        notYet: "save_report inakubali jina lolote la faili au folda yoyote.",
        meets: "Faili za .txt au .md tu, ndani ya folda ya reports tu; pembejeo mbaya inapata kosa lililo wazi.",
        exceeds: "read_csv inakaguliwa kwa njia ile ile na makosa yamejaribiwa."
      },
      {
        name: "Dry run na idhini",
        objective: "O3",
        notYet: "Ripoti inaandikwa bila dry run au bila \"ndiyo\".",
        meets: "Dry run imewashwa kwa chaguo-msingi na \"Save report? yes/no\" inaulizwa kabla ya kuandika.",
        exceeds: "Idhini inaonyesha jina kamili la faili na sehemu ya maandishi kabla."
      },
      {
        name: "Kuendesha tena kwa usalama",
        objective: "O4",
        notYet: "Mzunguko wa pili kwa wiki ile ile unatengeneza ripoti ya pili inayofanana.",
        meets: "Mzunguko wa pili kwa wiki ile ile unasimama bila kutengeneza nakala.",
        exceeds: "Unasema wazi ripoti ya wiki ipi tayari ipo."
      },
      {
        name: "Mzunguko kamili umewekwa kwenye kumbukumbu",
        objective: "O6",
        notYet: "Hakuna kumbukumbu, au mzunguko haukumalizika.",
        meets: "Kumbukumbu inaonyesha mzunguko mmoja kamili kuanzia kusoma CSV hadi idhini.",
        exceeds: "Muhtasari unaripoti safu zozote mbaya katika data."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoendelea na kozi ya 5 ya programu ya wakala ndani ya siku 30",
      "Wanafunzi wanaoripoti kuendesha kazi ya kiotomatiki ya ratiba yenye idhini kwa vitendo vya kuandika ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kwamba kazi zao za kiotomatiki hazikuandika kitu kisichotakiwa wala kutengeneza nakala (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti na intaneti; Colab au Python kwenye kompyuta yako mwenyewe",
      "API key ya modeli kutoka kozi ya 2 au modeli ya bure inayoendeshwa kwenye kompyuta yako",
      "Faili la CSV la kubuni la mauzo au matumizi",
      "Kitanzi chako cha wakala kutoka kozi ya 3",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha jengeni kila tabaka la usalama moja kwa moja: schema, ukaguzi, dry run, idhini.",
      "Mpe kila mtu CSV ile ile ya kubuni ili matokeo yalinganishwe; kamwe usitumie rekodi halisi za wateja au za pesa.",
      "Waambie wanafunzi wajaribu kwa sauti, kama kikundi, majina mabaya ya faili ya Somo la 2 ili kuona kila kosa.",
      "Sisitiza kwamba seva za MCP zinazoaminika tu ndizo zitumike, zenye ufikiaji mdogo kabisa unaohitajika.",
      "Pima kazi ya mwisho kwa rubriki, na mwombe kila mwanafunzi aonyeshe mzunguko wake wa pili ukisimama bila kutengeneza nakala."
    ]
  }
};
